export const id = 233;
export const ids = [233];
export const modules = {
  37201: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37203);
    class Am {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Am.Instances = [], Am.OnEnginesDisposedObservable = new hm.c, Am._LastCreatedScene = null, Am.UseFallbackTexture = !0, Am.FallbackTexture = ""
  },
  38764: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(38766);
    const Am = (mm, Tm, fm) => mm ? mm.getClassName && "Mesh" === mm.getClassName() ? null : !mm.getClassName || "SubMesh" !== mm.getClassName() && "PhysicsBody" !== mm.getClassName() ? mm.clone ? mm.clone() : Array.isArray(mm) ? mm.slice() : fm && "object" === typeof mm ? {
      ...mm
    } : null : mm.clone(Tm) : null;
    class am {
      static DeepCopy(mm, Tm, fm, am) {
        let xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const wm = function(mm) {
          const Tm = [];
          do {
            const fm = Object.getOwnPropertyNames(mm);
            for (const mm of fm) - 1 === Tm.indexOf(mm) && Tm.push(mm)
          } while (mm = Object.getPrototypeOf(mm));
          return Tm
        }(mm);
        for (const im of wm) {
          if ("_" === im[0] && (!am || -1 === am.indexOf(im))) continue;
          if (im.endsWith("Observable")) continue;
          if (fm && -1 !== fm.indexOf(im)) continue;
          const wm = mm[im],
            Rm = typeof wm;
          if ("function" !== Rm) try {
            if ("object" === Rm)
              if (wm instanceof Uint8Array) Tm[im] = Uint8Array.from(wm);
              else if (wm instanceof Array) {
              if (Tm[im] = [], wm.length > 0)
                if ("object" == typeof wm[0])
                  for (let mm = 0; mm < wm.length; mm++) {
                    const fm = Am(wm[mm], Tm, xm); - 1 === Tm[im].indexOf(fm) && Tm[im].push(fm)
                  } else Tm[im] = wm.slice(0)
            } else Tm[im] = Am(wm, Tm, xm);
            else Tm[im] = wm
          } catch (Dm) {
            hm.b.Warn(Dm.message)
          }
        }
      }
    }
  },
  37970: (mm, Tm, fm) => {
    function hm() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (mm => {
        const Tm = 16 * Math.random() | 0;
        return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
      }))
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  38766: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      static _CheckLimit(mm, Tm) {
        let fm = hm._LogLimitOutputs[mm];
        return fm ? fm.current++ : (fm = {
          limit: Tm,
          current: 1
        }, hm._LogLimitOutputs[mm] = fm), fm.current <= fm.limit
      }
      static _GenerateLimitMessage(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const fm = hm._LogLimitOutputs[mm];
        if (!fm || !hm.MessageLimitReached) return;
        const Am = this._Levels[Tm];
        fm.current === fm.limit && hm[Am.name](hm.MessageLimitReached.replace(/%LIMIT%/g, "" + fm.limit).replace(/%TYPE%/g, Am.name ?? ""))
      }
      static _AddLogEntry(mm) {
        hm._LogCache = mm + hm._LogCache, hm.OnNewCacheEntry && hm.OnNewCacheEntry(mm)
      }
      static _FormatMessage(mm) {
        const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
          fm = new Date;
        return "[" + Tm(fm.getHours()) + ":" + Tm(fm.getMinutes()) + ":" + Tm(fm.getSeconds()) + "]: " + mm
      }
      static _LogDisabled(mm, Tm) {}
      static _LogEnabled() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const Am = Array.isArray(Tm) ? Tm[0] : Tm;
        if (void 0 !== fm && !hm._CheckLimit(Am, fm)) return;
        const am = hm._FormatMessage(Am),
          xm = this._Levels[mm],
          wm = Array.isArray(Tm) ? Tm.slice(1) : [];
        xm.logFunc && xm.logFunc("BJS - " + am, ...wm);
        const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
        hm._AddLogEntry(Dm), hm._GenerateLimitMessage(Am, mm)
      }
      static get LogCache() {
        return hm._LogCache
      }
      static ClearLogCache() {
        hm._LogCache = "", hm._LogLimitOutputs = {}, hm.errorsCount = 0
      }
      static set LogLevels(mm) {
        hm.Log = hm._LogDisabled, hm.Warn = hm._LogDisabled, hm.Error = hm._LogDisabled;
        const Tm = [hm.MessageLogLevel, hm.WarningLogLevel, hm.ErrorLogLevel];
        for (const fm of Tm)
          if ((mm & fm) === fm) {
            const mm = this._Levels[fm];
            hm[mm.name] = hm._LogEnabled.bind(hm, fm)
          }
      }
    }
    hm.NoneLogLevel = 0, hm.MessageLogLevel = 1, hm.WarningLogLevel = 2, hm.ErrorLogLevel = 4, hm.AllLogLevel = 7, hm.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hm._LogCache = "", hm._LogLimitOutputs = {}, hm._Levels = [{}, {
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
    }], hm.errorsCount = 0, hm.Log = hm._LogEnabled.bind(hm, hm.MessageLogLevel), hm.Warn = hm._LogEnabled.bind(hm, hm.WarningLogLevel), hm.Error = hm._LogEnabled.bind(hm, hm.ErrorLogLevel)
  },
  37203: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    const hm = "undefined" !== typeof WeakRef;
    class Am {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(mm, Tm, fm, hm)
      }
      initialize(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = mm, this.skipNextObservers = Tm, this.target = fm, this.currentTarget = hm, this
      }
    }
    class am {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = mm, this.mask = Tm, this.scope = fm, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(mm)
      }
    }
    class xm {
      static FromPromise(mm, Tm) {
        const fm = new xm;
        return mm.then((mm => {
          fm.notifyObservers(mm)
        })).catch((mm => {
          if (!Tm) throw mm;
          Tm.notifyObservers(mm)
        })), fm
      }
      get observers() {
        return this._observers
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Tm, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Am(0), mm && (this._onObserverAdded = mm)
      }
      add(mm) {
        let Tm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          fm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!mm) return null;
        const Am = new am(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Am.unregisterOnNextCall = fm, Tm ? this._observers.unshift(Am) : this._observers.push(Am), this._onObserverAdded && this._onObserverAdded(Am), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Am, this._lastNotifiedValue);
        const xm = hm ? new WeakRef(this) : {
          deref: () => this
        };
        return Am._remove = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Tm = xm.deref();
          Tm && (mm ? Tm.remove(Am) : Tm._remove(Am))
        }, Am
      }
      addOnce(mm) {
        return this.add(mm, void 0, void 0, void 0, !0)
      }
      remove(mm) {
        if (!mm) return !1;
        mm._remove = null;
        return -1 !== this._observers.indexOf(mm) && (this._deferUnregister(mm), !0)
      }
      removeCallback(mm, Tm) {
        for (let fm = 0; fm < this._observers.length; fm++) {
          const hm = this._observers[fm];
          if (!hm._willBeUnregistered && (hm.callback === mm && (!Tm || Tm === hm.scope))) return this._deferUnregister(hm), !0
        }
        return !1
      }
      _deferUnregister(mm) {
        mm._willBeUnregistered || (this._numObserversMarkedAsDeleted++, mm.unregisterOnNextCall = !1, mm._willBeUnregistered = !0, setTimeout((() => {
          this._remove(mm)
        }), 0))
      }
      _remove(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!mm) return !1;
        const fm = this._observers.indexOf(mm);
        return -1 !== fm && (Tm && this._numObserversMarkedAsDeleted--, this._observers.splice(fm, 1), !0)
      }
      makeObserverTopPriority(mm) {
        this._remove(mm, !1), this._observers.unshift(mm)
      }
      makeObserverBottomPriority(mm) {
        this._remove(mm, !1), this._observers.push(mm)
      }
      notifyObservers(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = mm), !this._observers.length) return !0;
        const am = this._eventState;
        am.mask = Tm, am.target = fm, am.currentTarget = hm, am.skipNextObservers = !1, am.lastReturnValue = mm, am.userInfo = Am;
        for (const xm of this._observers)
          if (!xm._willBeUnregistered && (xm.mask & Tm && (xm.unregisterOnNextCall && this._deferUnregister(xm), xm.scope ? am.lastReturnValue = xm.callback.apply(xm.scope, [mm, am]) : am.lastReturnValue = xm.callback(mm, am)), am.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Tm), mm._willBeUnregistered) return;
        const hm = this._eventState;
        hm.mask = fm, hm.skipNextObservers = !1, mm.unregisterOnNextCall && this._deferUnregister(mm), mm.callback(Tm, hm)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const mm = this._observers.pop();
          mm && (mm._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const mm = new xm;
        return mm._observers = this._observers.slice(0), mm
      }
      hasSpecificMask() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Tm of this._observers)
          if (Tm.mask & mm || Tm.mask === mm) return !0;
        return !1
      }
    }
  },
  61310: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AsyncLoop: () => hm.d,
      RegisterTools: () => hm.e,
      Tools: () => hm.h,
      className: () => hm.k
    });
    var hm = fm(40203);
    (0, hm.e)()
  },
  37224: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Am
    });
    const hm = {};

    function Am(mm, Tm) {
      hm[mm] = Tm
    }

    function am(mm) {
      return hm[mm]
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);