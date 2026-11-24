export const id = 238;
export const ids = [238];
export const modules = {
  37345: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37349);
    class op {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    op.Instances = [], op.OnEnginesDisposedObservable = new Op.d, op._LastCreatedScene = null, op.UseFallbackTexture = !0, op.FallbackTexture = ""
  },
  38900: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(38905);
    const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
      ...pp
    } : null : pp.clone(ip) : null;
    class Ip {
      static DeepCopy(pp, ip, cp, Ip) {
        let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xp = function(pp) {
          const ip = [];
          do {
            const cp = Object.getOwnPropertyNames(pp);
            for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
          } while (pp = Object.getPrototypeOf(pp));
          return ip
        }(pp);
        for (const Yp of xp) {
          if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
          if (Yp.endsWith("Observable")) continue;
          if (cp && -1 !== cp.indexOf(Yp)) continue;
          const xp = pp[Yp],
            Dp = typeof xp;
          if ("function" !== Dp) try {
            if ("object" === Dp)
              if (xp instanceof Uint8Array) ip[Yp] = Uint8Array.from(xp);
              else if (xp instanceof Array) {
              if (ip[Yp] = [], xp.length > 0)
                if ("object" == typeof xp[0])
                  for (let pp = 0; pp < xp.length; pp++) {
                    const cp = op(xp[pp], ip, Sp); - 1 === ip[Yp].indexOf(cp) && ip[Yp].push(cp)
                  } else ip[Yp] = xp.slice(0)
            } else ip[Yp] = op(xp, ip, Sp);
            else ip[Yp] = xp
          } catch (Lp) {
            Op.e.Warn(Lp.message)
          }
        }
      }
    }
  },
  38124: (pp, ip, cp) => {
    function Op() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
        const ip = 16 * Math.random() | 0;
        return ("x" === pp ? ip : 3 & ip | 8).toString(16)
      }))
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  38905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static _CheckLimit(pp, ip) {
        let cp = Op._LogLimitOutputs[pp];
        return cp ? cp.current++ : (cp = {
          limit: ip,
          current: 1
        }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
      }
      static _GenerateLimitMessage(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cp = Op._LogLimitOutputs[pp];
        if (!cp || !Op.MessageLimitReached) return;
        const op = this._Levels[ip];
        cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
      }
      static _AddLogEntry(pp) {
        Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
      }
      static _FormatMessage(pp) {
        const ip = pp => pp < 10 ? "0" + pp : "" + pp,
          cp = new Date;
        return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
      }
      static _LogDisabled(pp, ip) {}
      static _LogEnabled() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const op = Array.isArray(ip) ? ip[0] : ip;
        if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
        const Ip = Op._FormatMessage(op),
          Sp = this._Levels[pp],
          xp = Array.isArray(ip) ? ip.slice(1) : [];
        Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
        const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
        Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
      }
      static get LogCache() {
        return Op._LogCache
      }
      static ClearLogCache() {
        Op._LogCache = "", Op._LogLimitOutputs = {}, Op.errorsCount = 0
      }
      static set LogLevels(pp) {
        Op.Log = Op._LogDisabled, Op.Warn = Op._LogDisabled, Op.Error = Op._LogDisabled;
        const ip = [Op.MessageLogLevel, Op.WarningLogLevel, Op.ErrorLogLevel];
        for (const cp of ip)
          if ((pp & cp) === cp) {
            const pp = this._Levels[cp];
            Op[pp.name] = Op._LogEnabled.bind(Op, cp)
          }
      }
    }
    Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels = [{}, {
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
    }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
  },
  37349: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    const Op = "undefined" !== typeof WeakRef;
    class op {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(pp, ip, cp, Op)
      }
      initialize(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = pp, this.skipNextObservers = ip, this.target = cp, this.currentTarget = Op, this
      }
    }
    class Ip {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = pp, this.mask = ip, this.scope = cp, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(pp)
      }
    }
    class Sp {
      static FromPromise(pp, ip) {
        const cp = new Sp;
        return pp.then((pp => {
          cp.notifyObservers(pp)
        })).catch((pp => {
          if (!ip) throw pp;
          ip.notifyObservers(pp)
        })), cp
      }
      get observers() {
        return this._observers
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ip, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new op(0), pp && (this._onObserverAdded = pp)
      }
      add(pp) {
        let ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!pp) return null;
        const op = new Ip(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        op.unregisterOnNextCall = cp, ip ? this._observers.unshift(op) : this._observers.push(op), this._onObserverAdded && this._onObserverAdded(op), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(op, this._lastNotifiedValue);
        const Sp = Op ? new WeakRef(this) : {
          deref: () => this
        };
        return op._remove = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ip = Sp.deref();
          ip && (pp ? ip.remove(op) : ip._remove(op))
        }, op
      }
      addOnce(pp) {
        return this.add(pp, void 0, void 0, void 0, !0)
      }
      remove(pp) {
        if (!pp) return !1;
        pp._remove = null;
        return -1 !== this._observers.indexOf(pp) && (this._deferUnregister(pp), !0)
      }
      removeCallback(pp, ip) {
        for (let cp = 0; cp < this._observers.length; cp++) {
          const Op = this._observers[cp];
          if (!Op._willBeUnregistered && (Op.callback === pp && (!ip || ip === Op.scope))) return this._deferUnregister(Op), !0
        }
        return !1
      }
      _deferUnregister(pp) {
        pp._willBeUnregistered || (this._numObserversMarkedAsDeleted++, pp.unregisterOnNextCall = !1, pp._willBeUnregistered = !0, setTimeout((() => {
          this._remove(pp)
        }), 0))
      }
      _remove(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!pp) return !1;
        const cp = this._observers.indexOf(pp);
        return -1 !== cp && (ip && this._numObserversMarkedAsDeleted--, this._observers.splice(cp, 1), !0)
      }
      makeObserverTopPriority(pp) {
        this._remove(pp, !1), this._observers.unshift(pp)
      }
      makeObserverBottomPriority(pp) {
        this._remove(pp, !1), this._observers.push(pp)
      }
      notifyObservers(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = pp), !this._observers.length) return !0;
        const Ip = this._eventState;
        Ip.mask = ip, Ip.target = cp, Ip.currentTarget = Op, Ip.skipNextObservers = !1, Ip.lastReturnValue = pp, Ip.userInfo = op;
        for (const Sp of this._observers)
          if (!Sp._willBeUnregistered && (Sp.mask & ip && (Sp.unregisterOnNextCall && this._deferUnregister(Sp), Sp.scope ? Ip.lastReturnValue = Sp.callback.apply(Sp.scope, [pp, Ip]) : Ip.lastReturnValue = Sp.callback(pp, Ip)), Ip.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ip), pp._willBeUnregistered) return;
        const Op = this._eventState;
        Op.mask = cp, Op.skipNextObservers = !1, pp.unregisterOnNextCall && this._deferUnregister(pp), pp.callback(ip, Op)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const pp = this._observers.pop();
          pp && (pp._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const pp = new Sp;
        return pp._observers = this._observers.slice(0), pp
      }
      hasSpecificMask() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ip of this._observers)
          if (ip.mask & pp || ip.mask === pp) return !0;
        return !1
      }
    }
  },
  61368: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AsyncLoop: () => Op.c,
      RegisterTools: () => Op.g,
      Tools: () => Op.i,
      className: () => Op.l
    });
    var Op = cp(40304);
    (0, Op.g)()
  },
  37368: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      g: () => op
    });
    const Op = {};

    function op(pp, ip) {
      Op[pp] = ip
    }

    function Ip(pp) {
      return Op[pp]
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);