export const id = 228;
export const ids = [228];
export const modules = {
  37153: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    var Yq = gq(37156);
    class lq {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    lq.Instances = [], lq.OnEnginesDisposedObservable = new Yq.d, lq._LastCreatedScene = null, lq.UseFallbackTexture = !0, lq.FallbackTexture = ""
  },
  38649: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653);
    const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
      ...qq
    } : null : qq.clone(Eq) : null;
    class Oq {
      static DeepCopy(qq, Eq, gq, Oq) {
        let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xq = function(qq) {
          const Eq = [];
          do {
            const gq = Object.getOwnPropertyNames(qq);
            for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
          } while (qq = Object.getPrototypeOf(qq));
          return Eq
        }(qq);
        for (const cq of xq) {
          if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
          if (cq.endsWith("Observable")) continue;
          if (gq && -1 !== gq.indexOf(cq)) continue;
          const xq = qq[cq],
            uq = typeof xq;
          if ("function" !== uq) try {
            if ("object" === uq)
              if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
              else if (xq instanceof Array) {
              if (Eq[cq] = [], xq.length > 0)
                if ("object" == typeof xq[0])
                  for (let qq = 0; qq < xq.length; qq++) {
                    const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
                  } else Eq[cq] = xq.slice(0)
            } else Eq[cq] = lq(xq, Eq, mq);
            else Eq[cq] = xq
          } catch (Aq) {
            Yq.b.Warn(Aq.message)
          }
        }
      }
    }
  },
  37872: (qq, Eq, gq) => {
    function Yq() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
        const Eq = 16 * Math.random() | 0;
        return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
      }))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  38653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static _CheckLimit(qq, Eq) {
        let gq = Yq._LogLimitOutputs[qq];
        return gq ? gq.current++ : (gq = {
          limit: Eq,
          current: 1
        }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
      }
      static _GenerateLimitMessage(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gq = Yq._LogLimitOutputs[qq];
        if (!gq || !Yq.MessageLimitReached) return;
        const lq = this._Levels[Eq];
        gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
      }
      static _AddLogEntry(qq) {
        Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
      }
      static _FormatMessage(qq) {
        const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
          gq = new Date;
        return "[" + Eq(gq.getHours()) + ":" + Eq(gq.getMinutes()) + ":" + Eq(gq.getSeconds()) + "]: " + qq
      }
      static _LogDisabled(qq, Eq) {}
      static _LogEnabled() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const lq = Array.isArray(Eq) ? Eq[0] : Eq;
        if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
        const Oq = Yq._FormatMessage(lq),
          mq = this._Levels[qq],
          xq = Array.isArray(Eq) ? Eq.slice(1) : [];
        mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
        const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
        Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
      }
      static get LogCache() {
        return Yq._LogCache
      }
      static ClearLogCache() {
        Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
      }
      static set LogLevels(qq) {
        Yq.Log = Yq._LogDisabled, Yq.Warn = Yq._LogDisabled, Yq.Error = Yq._LogDisabled;
        const Eq = [Yq.MessageLogLevel, Yq.WarningLogLevel, Yq.ErrorLogLevel];
        for (const gq of Eq)
          if ((qq & gq) === gq) {
            const qq = this._Levels[gq];
            Yq[qq.name] = Yq._LogEnabled.bind(Yq, gq)
          }
      }
    }
    Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels = [{}, {
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
    }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
  },
  37156: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    const Yq = "undefined" !== typeof WeakRef;
    class lq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(qq, Eq, gq, Yq)
      }
      initialize(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = qq, this.skipNextObservers = Eq, this.target = gq, this.currentTarget = Yq, this
      }
    }
    class Oq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = qq, this.mask = Eq, this.scope = gq, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(qq)
      }
    }
    class mq {
      static FromPromise(qq, Eq) {
        const gq = new mq;
        return qq.then((qq => {
          gq.notifyObservers(qq)
        })).catch((qq => {
          if (!Eq) throw qq;
          Eq.notifyObservers(qq)
        })), gq
      }
      get observers() {
        return this._observers
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Eq, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new lq(0), qq && (this._onObserverAdded = qq)
      }
      add(qq) {
        let Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          gq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!qq) return null;
        const lq = new Oq(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        lq.unregisterOnNextCall = gq, Eq ? this._observers.unshift(lq) : this._observers.push(lq), this._onObserverAdded && this._onObserverAdded(lq), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(lq, this._lastNotifiedValue);
        const mq = Yq ? new WeakRef(this) : {
          deref: () => this
        };
        return lq._remove = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Eq = mq.deref();
          Eq && (qq ? Eq.remove(lq) : Eq._remove(lq))
        }, lq
      }
      addOnce(qq) {
        return this.add(qq, void 0, void 0, void 0, !0)
      }
      remove(qq) {
        if (!qq) return !1;
        qq._remove = null;
        return -1 !== this._observers.indexOf(qq) && (this._deferUnregister(qq), !0)
      }
      removeCallback(qq, Eq) {
        for (let gq = 0; gq < this._observers.length; gq++) {
          const Yq = this._observers[gq];
          if (!Yq._willBeUnregistered && (Yq.callback === qq && (!Eq || Eq === Yq.scope))) return this._deferUnregister(Yq), !0
        }
        return !1
      }
      _deferUnregister(qq) {
        qq._willBeUnregistered || (this._numObserversMarkedAsDeleted++, qq.unregisterOnNextCall = !1, qq._willBeUnregistered = !0, setTimeout((() => {
          this._remove(qq)
        }), 0))
      }
      _remove(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!qq) return !1;
        const gq = this._observers.indexOf(qq);
        return -1 !== gq && (Eq && this._numObserversMarkedAsDeleted--, this._observers.splice(gq, 1), !0)
      }
      makeObserverTopPriority(qq) {
        this._remove(qq, !1), this._observers.unshift(qq)
      }
      makeObserverBottomPriority(qq) {
        this._remove(qq, !1), this._observers.push(qq)
      }
      notifyObservers(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = qq), !this._observers.length) return !0;
        const Oq = this._eventState;
        Oq.mask = Eq, Oq.target = gq, Oq.currentTarget = Yq, Oq.skipNextObservers = !1, Oq.lastReturnValue = qq, Oq.userInfo = lq;
        for (const mq of this._observers)
          if (!mq._willBeUnregistered && (mq.mask & Eq && (mq.unregisterOnNextCall && this._deferUnregister(mq), mq.scope ? Oq.lastReturnValue = mq.callback.apply(mq.scope, [qq, Oq]) : Oq.lastReturnValue = mq.callback(qq, Oq)), Oq.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Eq), qq._willBeUnregistered) return;
        const Yq = this._eventState;
        Yq.mask = gq, Yq.skipNextObservers = !1, qq.unregisterOnNextCall && this._deferUnregister(qq), qq.callback(Eq, Yq)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const qq = this._observers.pop();
          qq && (qq._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const qq = new mq;
        return qq._observers = this._observers.slice(0), qq
      }
      hasSpecificMask() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Eq of this._observers)
          if (Eq.mask & qq || Eq.mask === qq) return !0;
        return !1
      }
    }
  },
  61112: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AsyncLoop: () => Yq.b,
      RegisterTools: () => Yq.e,
      Tools: () => Yq.f,
      className: () => Yq.h
    });
    var Yq = gq(39845);
    (0, Yq.e)()
  },
  37171: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      g: () => lq
    });
    const Yq = {};

    function lq(qq, Eq) {
      Yq[qq] = Eq
    }

    function Oq(qq) {
      return Yq[qq]
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);