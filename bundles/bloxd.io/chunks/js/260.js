export const id = 260;
export const ids = [260];
export const modules = {
  37929: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(37931);
    class be {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    be.Instances = [], be.OnEnginesDisposedObservable = new ye.d, be._LastCreatedScene = null, be.UseFallbackTexture = !0, be.FallbackTexture = ""
  },
  39463: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467);
    const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
      ...ee
    } : null : ee.clone(ie) : null;
    class Me {
      static DeepCopy(ee, ie, He, Me) {
        let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ue = function(ee) {
          const ie = [];
          do {
            const He = Object.getOwnPropertyNames(ee);
            for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
          } while (ee = Object.getPrototypeOf(ee));
          return ie
        }(ee);
        for (const Je of Ue) {
          if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
          if (Je.endsWith("Observable")) continue;
          if (He && -1 !== He.indexOf(Je)) continue;
          const Ue = ee[Je],
            oe = typeof Ue;
          if ("function" !== oe) try {
            if ("object" === oe)
              if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
              else if (Ue instanceof Array) {
              if (ie[Je] = [], Ue.length > 0)
                if ("object" == typeof Ue[0])
                  for (let ee = 0; ee < Ue.length; ee++) {
                    const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
                  } else ie[Je] = Ue.slice(0)
            } else ie[Je] = be(Ue, ie, Ke);
            else ie[Je] = Ue
          } catch (Fe) {
            ye.e.Warn(Fe.message)
          }
        }
      }
    }
  },
  38745: (ee, ie, He) => {
    function ye() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
        const ie = 16 * Math.random() | 0;
        return ("x" === ee ? ie : 3 & ie | 8).toString(16)
      }))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  39467: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static _CheckLimit(ee, ie) {
        let He = ye._LogLimitOutputs[ee];
        return He ? He.current++ : (He = {
          limit: ie,
          current: 1
        }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
      }
      static _GenerateLimitMessage(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const He = ye._LogLimitOutputs[ee];
        if (!He || !ye.MessageLimitReached) return;
        const be = this._Levels[ie];
        He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
      }
      static _AddLogEntry(ee) {
        ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
      }
      static _FormatMessage(ee) {
        const ie = ee => ee < 10 ? "0" + ee : "" + ee,
          He = new Date;
        return "[" + ie(He.getHours()) + ":" + ie(He.getMinutes()) + ":" + ie(He.getSeconds()) + "]: " + ee
      }
      static _LogDisabled(ee, ie) {}
      static _LogEnabled() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const be = Array.isArray(ie) ? ie[0] : ie;
        if (void 0 !== He && !ye._CheckLimit(be, He)) return;
        const Me = ye._FormatMessage(be),
          Ke = this._Levels[ee],
          Ue = Array.isArray(ie) ? ie.slice(1) : [];
        Ke.logFunc && Ke.logFunc("BJS - " + Me, ...Ue);
        const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
        ye._AddLogEntry(Fe), ye._GenerateLimitMessage(be, ee)
      }
      static get LogCache() {
        return ye._LogCache
      }
      static ClearLogCache() {
        ye._LogCache = "", ye._LogLimitOutputs = {}, ye.errorsCount = 0
      }
      static set LogLevels(ee) {
        ye.Log = ye._LogDisabled, ye.Warn = ye._LogDisabled, ye.Error = ye._LogDisabled;
        const ie = [ye.MessageLogLevel, ye.WarningLogLevel, ye.ErrorLogLevel];
        for (const He of ie)
          if ((ee & He) === He) {
            const ee = this._Levels[He];
            ye[ee.name] = ye._LogEnabled.bind(ye, He)
          }
      }
    }
    ye.NoneLogLevel = 0, ye.MessageLogLevel = 1, ye.WarningLogLevel = 2, ye.ErrorLogLevel = 4, ye.AllLogLevel = 7, ye.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ye._LogCache = "", ye._LogLimitOutputs = {}, ye._Levels = [{}, {
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
    }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
  },
  37931: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    const ye = "undefined" !== typeof WeakRef;
    class be {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(ee, ie, He, ye)
      }
      initialize(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = ee, this.skipNextObservers = ie, this.target = He, this.currentTarget = ye, this
      }
    }
    class Me {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = ee, this.mask = ie, this.scope = He, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(ee)
      }
    }
    class Ke {
      static FromPromise(ee, ie) {
        const He = new Ke;
        return ee.then((ee => {
          He.notifyObservers(ee)
        })).catch((ee => {
          if (!ie) throw ee;
          ie.notifyObservers(ee)
        })), He
      }
      get observers() {
        return this._observers
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ie, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new be(0), ee && (this._onObserverAdded = ee)
      }
      add(ee) {
        let ie = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          He = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!ee) return null;
        const be = new Me(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        be.unregisterOnNextCall = He, ie ? this._observers.unshift(be) : this._observers.push(be), this._onObserverAdded && this._onObserverAdded(be), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(be, this._lastNotifiedValue);
        const Ke = ye ? new WeakRef(this) : {
          deref: () => this
        };
        return be._remove = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ie = Ke.deref();
          ie && (ee ? ie.remove(be) : ie._remove(be))
        }, be
      }
      addOnce(ee) {
        return this.add(ee, void 0, void 0, void 0, !0)
      }
      remove(ee) {
        if (!ee) return !1;
        ee._remove = null;
        return -1 !== this._observers.indexOf(ee) && (this._deferUnregister(ee), !0)
      }
      removeCallback(ee, ie) {
        for (let He = 0; He < this._observers.length; He++) {
          const ye = this._observers[He];
          if (!ye._willBeUnregistered && (ye.callback === ee && (!ie || ie === ye.scope))) return this._deferUnregister(ye), !0
        }
        return !1
      }
      _deferUnregister(ee) {
        ee._willBeUnregistered || (this._numObserversMarkedAsDeleted++, ee.unregisterOnNextCall = !1, ee._willBeUnregistered = !0, setTimeout((() => {
          this._remove(ee)
        }), 0))
      }
      _remove(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!ee) return !1;
        const He = this._observers.indexOf(ee);
        return -1 !== He && (ie && this._numObserversMarkedAsDeleted--, this._observers.splice(He, 1), !0)
      }
      makeObserverTopPriority(ee) {
        this._remove(ee, !1), this._observers.unshift(ee)
      }
      makeObserverBottomPriority(ee) {
        this._remove(ee, !1), this._observers.push(ee)
      }
      notifyObservers(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ee), !this._observers.length) return !0;
        const Me = this._eventState;
        Me.mask = ie, Me.target = He, Me.currentTarget = ye, Me.skipNextObservers = !1, Me.lastReturnValue = ee, Me.userInfo = be;
        for (const Ke of this._observers)
          if (!Ke._willBeUnregistered && (Ke.mask & ie && (Ke.unregisterOnNextCall && this._deferUnregister(Ke), Ke.scope ? Me.lastReturnValue = Ke.callback.apply(Ke.scope, [ee, Me]) : Me.lastReturnValue = Ke.callback(ee, Me)), Me.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ie), ee._willBeUnregistered) return;
        const ye = this._eventState;
        ye.mask = He, ye.skipNextObservers = !1, ee.unregisterOnNextCall && this._deferUnregister(ee), ee.callback(ie, ye)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const ee = this._observers.pop();
          ee && (ee._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const ee = new Ke;
        return ee._observers = this._observers.slice(0), ee
      }
      hasSpecificMask() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ie of this._observers)
          if (ie.mask & ee || ie.mask === ee) return !0;
        return !1
      }
    }
  },
  63809: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AsyncLoop: () => ye.c,
      RegisterTools: () => ye.g,
      Tools: () => ye.h,
      className: () => ye.k
    });
    var ye = He(41203);
    (0, ye.g)()
  },
  37949: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => be
    });
    const ye = {};

    function be(ee, ie) {
      ye[ee] = ie
    }

    function Me(ee) {
      return ye[ee]
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);