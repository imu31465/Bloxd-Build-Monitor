export const id = 31;
export const ids = [31];
export const modules = {
  6837: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BaseExtension: () => Oc,
      BaseInstrumentation: () => oc,
      BaseTransport: () => cI,
      CSPInstrumentation: () => Mo,
      ConsoleInstrumentation: () => Jc,
      ConsoleTransport: () => xI,
      EVENT_CLICK: () => ei,
      EVENT_NAVIGATION: () => ui,
      EVENT_ROUTE_CHANGE: () => Mi,
      EVENT_SESSION_EXTEND: () => Ri,
      EVENT_SESSION_RESUME: () => mi,
      EVENT_SESSION_START: () => ki,
      EVENT_VIEW_CHANGED: () => ji,
      ErrorsInstrumentation: () => Nc,
      FetchTransport: () => mI,
      InternalLoggerLevel: () => ri,
      LogLevel: () => uc,
      MAX_SESSION_PERSISTENCE_TIME: () => Lp,
      NavigationInstrumentation: () => go,
      Observable: () => ec,
      PerformanceInstrumentation: () => zO,
      PersistentSessionsManager: () => fi,
      SESSION_EXPIRATION_TIME: () => Ip,
      SESSION_INACTIVITY_TIME: () => Sp,
      STORAGE_KEY: () => op,
      SessionInstrumentation: () => Sc,
      TransportItemType: () => OI,
      UserActionInstrumentation: () => qo,
      UserActionState: () => vo,
      VERSION: () => Ic,
      ViewInstrumentation: () => fc,
      VolatileSessionsManager: () => bi,
      WebVitalsInstrumentation: () => BO,
      allLogLevels: () => kc,
      browserMeta: () => Ko,
      buildStackFrame: () => xc,
      captureMetas: () => hI,
      createInternalLogger: () => EI,
      createPromiseBuffer: () => vI,
      createSession: () => pI,
      deepEqual: () => di,
      defaultEventDomain: () => Op,
      defaultExceptionType: () => Mc,
      defaultGlobalObjectKey: () => XI,
      defaultInternalLoggerLevel: () => zi,
      defaultLogLevel: () => jc,
      faro: () => Up,
      genShortID: () => Hi,
      getCurrentTimestamp: () => wi,
      getDataFromSafariExtensions: () => Uc,
      getIgnoreUrls: () => Zp,
      getInternalFaroFromGlobalObject: () => Pp,
      getStackFramesFromError: () => vc,
      getTransportBody: () => SI,
      getUrlFromResource: () => sp,
      getWebInstrumentations: () => Go,
      globalObject: () => Dp,
      initializeFaro: () => cS,
      internalGlobalObjectKey: () => Ap,
      isArray: () => Ep,
      isBoolean: () => Rp,
      isDomError: () => bp,
      isDomException: () => hp,
      isElement: () => np,
      isElementDefined: () => ap,
      wy: () => rp,
      isError: () => Tp,
      isErrorDefined: () => Np,
      isErrorEvent: () => fp,
      isEvent: () => Bp,
      isEventDefined: () => Jp,
      isFunction: () => Cp,
      isInstanceOf: () => Hp,
      isInt: () => mp,
      isInternalFaroOnGlobalObject: () => yp,
      isMap: () => gp,
      isMapDefined: () => Fp,
      isNull: () => ep,
      isNumber: () => kp,
      isObject: () => Mp,
      isPrimitive: () => Qp,
      isRegExp: () => Xp,
      isString: () => jp,
      isSymbol: () => qp,
      isSyntheticEvent: () => Gp,
      isThenable: () => lp,
      isToString: () => tp,
      isTypeof: () => vp,
      isUndefined: () => dp,
      makeCoreConfig: () => JI,
      noop: () => Gi,
      osMeta: () => Vo,
      parseStacktrace: () => tc,
      sdkMeta: () => iI,
      setInternalFaroOnGlobalObject: () => Wp,
      transportItemTypeToBodyKey: () => oI,
      unknownString: () => Tc,
      userActionDataAttribute: () => sO,
      userActionTimeoutDataAttribute: () => KO
    });
    const Op = "browser",
      op = "com.grafana.faro.session",
      Ip = 144e5,
      Sp = 9e5,
      xp = 1e3,
      Lp = Sp,
      Yp = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Lp
      };
    const Dp = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof cp.g ? cp.g : "undefined" !== typeof self ? self : void 0;
    const Ap = "_faroInternal";

    function Pp() {
      return Dp[Ap]
    }

    function Wp(pp) {
      pp.config.isolate ? pp.internalLogger.debug("Skipping registering internal Faro instance on global object") : (pp.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Dp, Ap, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pp
      }))
    }

    function yp() {
      return Ap in Dp
    }
    let Up = {
      api: {
        pushLog: () => {},
        pushError: () => {},
        changeStacktraceParser: () => {},
        getStacktraceParser: () => {},
        pushMeasurement: () => {},
        pushTraces: () => {},
        getOTEL: () => {},
        getTraceContext: () => {},
        initOTEL: () => {},
        isOTELInitialized: () => !1,
        setUser: () => {},
        resetUser: () => {},
        setSession: () => {},
        resetSession: () => {},
        getSession: () => {},
        setView: () => {},
        getView: () => {},
        setPage: () => {},
        getPage: () => {},
        pushEvent: () => {},
        startUserAction: () => {},
        getActiveUserAction: () => {}
      }
    };

    function wp(pp, ip, cp, Op, op, Ip, Sp) {
      return ip.debug("Initializing Faro"), Up = {
          api: Ip,
          config: cp,
          instrumentations: Sp,
          internalLogger: ip,
          metas: Op,
          pause: op.pause,
          transports: op,
          unpatchedConsole: pp,
          unpause: op.unpause
        }, Wp(Up),
        function(pp) {
          if (pp.config.preventGlobalExposure) pp.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (pp.internalLogger.debug(`Registering public faro reference in the global scope using "${pp.config.globalObjectKey}" key`), pp.config.globalObjectKey in Dp) return void pp.internalLogger.warn(`Skipping global registration due to key "${pp.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Dp, pp.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: pp
            })
          }
        }(Up), Up
    }

    function vp(pp, ip) {
      return typeof pp === ip
    }

    function tp(pp, ip) {
      return Object.prototype.toString.call(pp) === `[object ${ip}]`
    }

    function Hp(pp, ip) {
      try {
        return pp instanceof ip
      } catch (cp) {
        return !1
      }
    }
    const dp = pp => vp(pp, "undefined"),
      ep = pp => vp(pp, "null"),
      jp = pp => vp(pp, "string"),
      kp = pp => vp(pp, "number") && !isNaN(pp) || vp(pp, "bigint"),
      mp = pp => kp(pp) && Number.isInteger(pp),
      Rp = pp => vp(pp, "boolean"),
      qp = pp => vp(pp, "symbol"),
      Mp = pp => !ep(pp) && vp(pp, "object"),
      Cp = pp => vp(pp, "function"),
      Ep = pp => tp(pp, "Array"),
      Xp = pp => tp(pp, "RegExp"),
      lp = pp => Cp(null === pp || void 0 === pp ? void 0 : pp.then),
      Qp = pp => !Mp(pp) && !Cp(pp),
      Jp = "undefined" !== typeof Event,
      Bp = pp => Jp && Hp(pp, Event),
      Np = "undefined" !== typeof Error,
      Tp = pp => Np && Hp(pp, Error),
      fp = pp => tp(pp, "ErrorEvent"),
      bp = pp => tp(pp, "DOMError"),
      hp = pp => tp(pp, "DOMException"),
      ap = "undefined" !== typeof Element,
      np = pp => ap && Hp(pp, Element),
      Fp = "undefined" !== typeof Map,
      gp = pp => Fp && Hp(pp, Map),
      Gp = pp => Mp(pp) && "nativeEvent" in pp && "preventDefault" in pp && "stopPropagation" in pp;

    function rp(pp) {
      return null == pp || (Ep(pp) || jp(pp) ? 0 === pp.length : !!Mp(pp) && 0 === Object.keys(pp).length)
    }

    function Zp() {
      return Up.transports.transports.flatMap((pp => pp.getIgnoreUrls()))
    }

    function zp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Zp().some((ip => pp && null != pp.match(ip)))
    }

    function sp(pp) {
      return jp(pp) ? pp : pp instanceof URL ? pp.href : !rp(pp) && Cp(null === pp || void 0 === pp ? void 0 : pp.toString) ? pp.toString() : void 0
    }
    const Kp = "sessionStorage",
      Vp = "localStorage";

    function ii(pp) {
      try {
        let ip;
        ip = window[pp];
        const cp = "__faro_storage_test__";
        return ip.setItem(cp, cp), ip.removeItem(cp), !0
      } catch (cp) {
        var ip;
        return null === (ip = Up.internalLogger) || void 0 === ip || ip.info(`Web storage of type ${pp} is not available. Reason: ${cp}`), !1
      }
    }

    function ci(pp, ip) {
      return xi(ip) ? window[ip].getItem(pp) : null
    }

    function Oi(pp, ip, cp) {
      if (xi(cp)) try {
        window[cp].setItem(pp, ip)
      } catch (Op) {}
    }

    function oi(pp, ip) {
      xi(ip) && window[ip].removeItem(pp)
    }
    const Ii = ii(Vp),
      Si = ii(Kp);

    function xi(pp) {
      return pp === Vp ? Ii : pp === Kp && Si
    }

    function Li(pp) {
      return Li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Li(pp)
    }

    function Yi(pp) {
      var ip = function(pp, ip) {
        if ("object" != Li(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != Li(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == Li(ip) ? ip : ip + ""
    }

    function Di(pp, ip, cp) {
      return (ip = Yi(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Ai(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Pi(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Ai(Object(cp), !0).forEach((function(ip) {
          Di(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Ai(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Wi() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Up;
      var ip, cp, Op;
      const op = pp.config.sessionTracking,
        Ip = null !== (ip = null !== (cp = null === op || void 0 === op || null === (Op = op.sampler) || void 0 === Op ? void 0 : Op.call(op, {
          metas: pp.metas.value
        })) && void 0 !== cp ? cp : null === op || void 0 === op ? void 0 : op.samplingRate) && void 0 !== ip ? ip : 1,
        Sp = "number" === typeof Ip ? function(pp) {
          return Math.min(1, Math.max(0, pp))
        }(Ip) : 0;
      if (!(Sp > 0)) return !1;
      if (1 === Sp) return !0;
      try {
        const pp = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === pp || void 0 === pp ? void 0 : pp.getRandomValues)) {
          const ip = new Uint32Array(1);
          return pp.getRandomValues(ip), ip[0] / Math.pow(2, 32) < Sp
        }
      } catch (xp) {}
      return Math.random() < Sp
    }

    function yi() {
      return Date.now()
    }

    function Ui() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function wi() {
      return (new Date).toISOString()
    }

    function vi(pp) {
      return new Date(pp).toISOString()
    }
    const ti = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Hi() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const ip = new Uint32Array(pp),
        cp = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === cp || void 0 === cp ? void 0 : cp.getRandomValues) cp.getRandomValues(ip);
      else
        for (let op = 0; op < pp; op++) ip[op] = Math.floor(4294967296 * Math.random());
      let Op = "";
      for (let op = 0; op < pp; op++) Op += ti[ip[op] % 59];
      return Op
    }

    function di(pp, ip) {
      if (pp === ip) return !0;
      if (vp(pp, "number") && isNaN(pp)) return vp(ip, "number") && isNaN(ip);
      const cp = Ep(pp),
        Op = Ep(ip);
      if (cp !== Op) return !1;
      if (cp && Op) {
        const cp = pp.length;
        if (cp !== ip.length) return !1;
        for (let Op = cp; 0 !== Op--;)
          if (!di(pp[Op], ip[Op])) return !1;
        return !0
      }
      const op = Mp(pp),
        Ip = Mp(ip);
      if (op !== Ip) return !1;
      if (pp && ip && op && Ip) {
        const cp = Object.keys(pp),
          Op = Object.keys(ip);
        if (cp.length !== Op.length) return !1;
        for (let pp of cp)
          if (!Op.includes(pp)) return !1;
        for (let op of cp)
          if (!di(pp[op], ip[op])) return !1;
        return !0
      }
      return !1
    }
    const ei = "click",
      ui = "navigation",
      ji = "view_changed",
      ki = "session_start",
      mi = "session_resume",
      Ri = "session_extend",
      qi = "service_name_override",
      Mi = "route_change";

    function Ci() {
      let {
        sessionId: pp,
        started: ip,
        lastActivity: cp,
        isSampled: Op = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up;
      var Ip;
      const Sp = yi(),
        xp = null === (Ip = op.config) || void 0 === Ip || null === (Ip = Ip.sessionTracking) || void 0 === Ip ? void 0 : Ip.generateSessionId;
      return null == pp && (pp = "function" === typeof xp ? xp() : Hi()), {
        sessionId: pp,
        lastActivity: null !== cp && void 0 !== cp ? cp : Sp,
        started: null !== ip && void 0 !== ip ? ip : Sp,
        isSampled: Op
      }
    }

    function Ei(pp) {
      if (null == pp) return !1;
      const ip = yi();
      return ip - pp.started < 144e5 && ip - pp.lastActivity < Sp
    }

    function Xi(pp) {
      let {
        fetchUserSession: ip,
        storeUserSession: cp,
        adoptSession: Op,
        updateInterval: op = 0
      } = pp, xp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up, Lp = 0;
      return function() {
        let {
          forceSessionExtend: pp = !1,
          refreshActivity: Yp = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Dp, Ap;
        if (!ip || !cp) return;
        const Pp = yi();
        if (!pp && Pp < Lp && Lp - Pp <= op) return;
        const Wp = xp.config.sessionTracking,
          yp = null === Wp || void 0 === Wp ? void 0 : Wp.persistent;
        if (yp && !Ii || !yp && !Si) return;
        const Up = ip();
        if (Lp = Math.min(Pp + op, (null !== (Dp = null === Up || void 0 === Up ? void 0 : Up.started) && void 0 !== Dp ? Dp : Pp) + Ip, (null !== (Ap = null === Up || void 0 === Up ? void 0 : Up.lastActivity) && void 0 !== Ap ? Ap : Pp) + Sp), !1 === pp && Ei(Up)) {
          var wp;
          Yp && cp(Pi(Pi({}, Up), {}, {
            lastActivity: Pp
          }));
          const pp = null === (wp = xp.metas.value.session) || void 0 === wp ? void 0 : wp.id;
          null != Op && null != Up.sessionMeta && Up.sessionId !== pp && Op(Up.sessionMeta)
        } else {
          var vp, tp, Hp;
          let pp = Qi(Ci({
            isSampled: Wi(xp)
          }, xp), Up, xp);
          Lp = Pp + op, cp(pp), null === (vp = xp.api) || void 0 === vp || vp.setSession(pp.sessionMeta), null === Wp || void 0 === Wp || null === (tp = Wp.onSessionChange) || void 0 === tp || tp.call(Wp, null !== (Hp = null === Up || void 0 === Up ? void 0 : Up.sessionMeta) && void 0 !== Hp ? Hp : null, pp.sessionMeta)
        }
      }
    }

    function li(pp) {
      let ip, {
          fetchUserSession: cp,
          storeUserSession: Op,
          updateInterval: op = 0
        } = pp,
        Ip = 0;
      return pp => {
        const Sp = yi();
        if (pp === ip && Sp < Ip && Ip - Sp <= op) return;
        ip = pp, Ip = Sp + op;
        const xp = cp();
        (null === xp || void 0 === xp ? void 0 : xp.sessionId) === pp && Ei(xp) && Op(Pi(Pi({}, xp), {}, {
          lastActivity: Sp
        }))
      }
    }

    function Qi(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Up;
      var Op, op, Ip, Sp, xp, Lp;
      const Yp = Pi(Pi({}, pp), {}, {
          sessionMeta: {
            id: pp.sessionId,
            attributes: Bi(Pi(Pi(Pi({}, null === (Op = cp.config.sessionTracking) || void 0 === Op || null === (Op = Op.session) || void 0 === Op ? void 0 : Op.attributes), null !== (op = null === (Ip = cp.metas.value.session) || void 0 === Ip ? void 0 : Ip.attributes) && void 0 !== op ? op : {}), {}, {
              isSampled: pp.isSampled.toString()
            }))
          }
        }),
        Dp = null !== (Sp = null === (xp = cp.metas.value.session) || void 0 === xp ? void 0 : xp.overrides) && void 0 !== Sp ? Sp : null === ip || void 0 === ip || null === (Lp = ip.sessionMeta) || void 0 === Lp ? void 0 : Lp.overrides;
      rp(Dp) || (Yp.sessionMeta.overrides = Dp);
      const Ap = null === ip || void 0 === ip ? void 0 : ip.sessionId;
      return null != Ap && (Yp.sessionMeta.attributes.previousSession = Ap), Yp
    }

    function Ji(pp) {
      let {
        fetchUserSession: ip,
        storeUserSession: cp
      } = pp, Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up, op = !1;
      return function(pp) {
        if (op) return;
        const Ip = pp.session,
          Sp = ip();
        let xp = null === Ip || void 0 === Ip ? void 0 : Ip.id;
        const Lp = null === Ip || void 0 === Ip ? void 0 : Ip.attributes,
          Yp = null === Ip || void 0 === Ip ? void 0 : Ip.overrides,
          Dp = null === Sp || void 0 === Sp ? void 0 : Sp.sessionMeta,
          Ap = null === Dp || void 0 === Dp ? void 0 : Dp.overrides,
          Pp = !!Yp && !di(Yp, Ap),
          Wp = !!Lp && !di(Lp, null === Dp || void 0 === Dp ? void 0 : Dp.attributes);
        if (Ip && xp !== (null === Sp || void 0 === Sp ? void 0 : Sp.sessionId) || Wp || Pp) {
          var yp, Up;
          const pp = null != Sp && xp === Sp.sessionId,
            ip = Qi(pp ? Sp : Ci({
              sessionId: xp,
              isSampled: Wi(Op)
            }, Op), Sp, Op),
            Ip = null === Sp || void 0 === Sp || null === (yp = Sp.sessionMeta) || void 0 === yp || null === (yp = yp.attributes) || void 0 === yp ? void 0 : yp.previousSession;
          pp && null != Ip && Ip !== ip.sessionId && (ip.sessionMeta.attributes.previousSession = Ip), (null === (Up = ip.sessionMeta.attributes) || void 0 === Up ? void 0 : Up.previousSession) === ip.sessionId && delete ip.sessionMeta.attributes.previousSession, cp(ip),
            function(pp, ip) {
              let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var op, Ip, Sp;
              if (!ip) return;
              const xp = cp.serviceName,
                Lp = null !== (op = null !== (Ip = Op.serviceName) && void 0 !== Ip ? Ip : null === (Sp = pp.metas.value.app) || void 0 === Sp ? void 0 : Sp.name) && void 0 !== op ? op : "";
              xp && xp !== Lp && pp.api.pushEvent(qi, {
                serviceName: xp,
                previousServiceName: Lp
              })
            }(Op, Pp, Yp, Ap), op = !0;
          try {
            Op.api.setSession(ip.sessionMeta)
          } finally {
            op = !1
          }
        }
      }
    }

    function Bi(pp) {
      const ip = {};
      for (const cp of Object.keys(pp)) {
        const Op = pp[cp];
        void 0 !== Op && (ip[cp] = Op)
      }
      return ip
    }

    function Ni() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== pp && void 0 !== pp ? pp : {}, function() {
        const pp = new WeakSet;
        return function(ip, cp) {
          if (Mp(cp) && null !== cp) {
            if (pp.has(cp)) return null;
            pp.add(cp)
          }
          return cp
        }
      }())
    }

    function Ti() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ip = {};
      for (const [cp, Op] of Object.entries(pp)) ip[cp] = Mp(Op) && null !== Op ? Ni(Op) : String(Op);
      return ip
    }
    var fi = class pp {
      constructor() {
        var ip = this;
        let cp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Up;
        this.context = cp, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = pp => {
          this.adopting = !0;
          try {
            var ip;
            null === (ip = this.context.api) || void 0 === ip || ip.setSession(pp)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: pp = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ip.updateUserSession({
            refreshActivity: pp
          })
        }, this.recordActivity = li({
          fetchUserSession: pp.fetchUserSession,
          storeUserSession: pp.storeUserSession,
          updateInterval: xp
        }), this.updateUserSession = Xi({
          fetchUserSession: pp.fetchUserSession,
          storeUserSession: pp.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: xp
        }, cp), this.init()
      }
      static removeUserSession() {
        oi(op, pp.storageTypeLocal)
      }
      static storeUserSession(ip) {
        Oi(op, Ni(ip), pp.storageTypeLocal)
      }
      static fetchUserSession() {
        const ip = ci(op, pp.storageTypeLocal);
        return ip ? JSON.parse(ip) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var pp;
            this.updateSession({
              refreshActivity: !1
            });
            const ip = null === (pp = this.context.api) || void 0 === pp || null === (pp = pp.getSession()) || void 0 === pp ? void 0 : pp.id;
            ip && this.recordActivity(ip)
          }
        })), this.context.metas.addListener(Ji({
          fetchUserSession: pp.fetchUserSession,
          storeUserSession: pp.storeUserSession
        }, this.context))
      }
    };
    fi.storageTypeLocal = Vp;
    var bi = class pp {
      constructor() {
        var ip = this;
        let cp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Up;
        this.context = cp, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: pp = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ip.updateUserSession({
            refreshActivity: pp
          })
        }, this.recordActivity = li({
          fetchUserSession: pp.fetchUserSession,
          storeUserSession: pp.storeUserSession,
          updateInterval: xp
        }), this.updateUserSession = Xi({
          fetchUserSession: pp.fetchUserSession,
          storeUserSession: pp.storeUserSession,
          updateInterval: xp
        }, cp), this.init()
      }
      static removeUserSession() {
        oi(op, pp.storageTypeSession)
      }
      static storeUserSession(ip) {
        Oi(op, Ni(ip), pp.storageTypeSession)
      }
      static fetchUserSession() {
        const ip = ci(op, pp.storageTypeSession);
        return ip ? JSON.parse(ip) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var pp;
            this.updateSession({
              refreshActivity: !1
            });
            const ip = null === (pp = this.context.api) || void 0 === pp || null === (pp = pp.getSession()) || void 0 === pp ? void 0 : pp.id;
            ip && this.recordActivity(ip)
          }
        })), this.context.metas.addListener(Ji({
          fetchUserSession: pp.fetchUserSession,
          storeUserSession: pp.storeUserSession
        }, this.context))
      }
    };
    bi.storageTypeSession = Kp;
    const ai = new WeakMap;

    function ni(pp) {
      let ip = ai.get(pp);
      if (!ip) {
        let cp = [],
          Op = [];
        ip = {
          addSessionUpdateListener: pp => {
            cp.push(pp)
          },
          removeSessionUpdateListener: pp => {
            cp = cp.filter((ip => ip !== pp))
          },
          notifySessionUpdate: pp => {
            cp.forEach((ip => ip(pp)))
          },
          shouldCapture: () => Op.every((pp => pp())),
          addCaptureFilter: pp => {
            Op.push(pp)
          },
          removeCaptureFilter: pp => {
            Op = Op.filter((ip => ip !== pp))
          }
        }, ai.set(pp, ip)
      }
      return ip
    }
    var Fi = class {
      constructor(pp, ip, cp) {
        this.metas = pp, this.transports = ip, this.onActivate = cp, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = pp => {
          var ip, cp, Op;
          const op = this.pending;
          var Ip, Sp;
          if ("overrides" === pp.type) return void(this.pending = {
            reset: null !== (Ip = null === op || void 0 === op ? void 0 : op.reset) && void 0 !== Ip && Ip,
            inheritOverrides: null === (Sp = null === op || void 0 === op ? void 0 : op.inheritOverrides) || void 0 === Sp || Sp,
            session: Pi(Pi({}, null === op || void 0 === op ? void 0 : op.session), {}, {
              overrides: Pi(Pi({}, null === op || void 0 === op ? void 0 : op.session.overrides), pp.overrides)
            })
          });
          const xp = pp.session,
            Lp = rp(xp) || null != xp && "id" in xp && !xp.id,
            Yp = null !== (ip = null === xp || void 0 === xp ? void 0 : xp.overrides) && void 0 !== ip ? ip : null === op || void 0 === op ? void 0 : op.session.overrides;
          this.pending = {
            reset: Lp || !(null === xp || void 0 === xp ? void 0 : xp.id) && null !== (cp = null === op || void 0 === op ? void 0 : op.reset) && void 0 !== cp && cp,
            inheritOverrides: !(!pp.overrides && void 0 !== (null === xp || void 0 === xp ? void 0 : xp.overrides)) && (null === (Op = null === op || void 0 === op ? void 0 : op.inheritOverrides) || void 0 === Op || Op),
            session: {
              id: null === xp || void 0 === xp ? void 0 : xp.id,
              attributes: (null === xp || void 0 === xp ? void 0 : xp.attributes) && Pi({}, xp.attributes),
              overrides: pp.overrides ? Pi(Pi({}, null === op || void 0 === op ? void 0 : op.session.overrides), pp.overrides) : Yp && Pi({}, Yp)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var pp, ip;
        this.waiting = !0, ni(this.metas).addSessionUpdateListener(this.recordUpdate), ni(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (pp = (ip = this.metas).addCaptureListener) || void 0 === pp || pp.call(ip, this.activate), this.activate()
      }
      destroy() {
        var pp, ip;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), ni(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (pp = (ip = this.metas).removeCaptureListener) || void 0 === pp || pp.call(ip, this.activate), ni(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function gi(pp) {
      return (null === pp || void 0 === pp ? void 0 : pp.persistent) ? fi : bi
    }

    function Gi() {}
    let ri = function(pp) {
      return pp[pp.OFF = 0] = "OFF", pp[pp.ERROR = 1] = "ERROR", pp[pp.WARN = 2] = "WARN", pp[pp.INFO = 3] = "INFO", pp[pp.VERBOSE = 4] = "VERBOSE", pp
    }({});
    const Zi = {
        debug: Gi,
        error: Gi,
        info: Gi,
        prefix: "Faro",
        warn: Gi
      },
      zi = 1;

    function si(pp) {
      return si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, si(pp)
    }

    function Ki(pp) {
      var ip = function(pp, ip) {
        if ("object" != si(pp) || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != si(Op)) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == si(ip) ? ip : ip + ""
    }

    function Vi(pp, ip, cp) {
      return (ip = Ki(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function pc(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function ic(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? pc(Object(cp), !0).forEach((function(ip) {
          Vi(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : pc(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }
    const cc = ic({}, console);
    var Oc = class {
        constructor() {
          this.unpatchedConsole = cc, this.internalLogger = Zi, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
          this.internalLogger.debug(`${this.name}\n`, ...ip)
        }
        logInfo() {
          for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
          this.internalLogger.info(`${this.name}\n`, ...ip)
        }
        logWarn() {
          for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
          this.internalLogger.warn(`${this.name}\n`, ...ip)
        }
        logError() {
          for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
          this.internalLogger.error(`${this.name}\n`, ...ip)
        }
      },
      oc = class extends Oc {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const Ic = "2.12.1";
    var Sc = class extends oc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = Ic, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(pp) {
        var ip;
        const cp = pp.session;
        if (cp && cp.id !== (null === (ip = this.notifiedSession) || void 0 === ip ? void 0 : ip.id)) {
          var Op;
          if (this.isAdoptingSession()) return void(this.notifiedSession = cp);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Op = cp.attributes) || void 0 === Op ? void 0 : Op.previousSession)) return this.api.pushEvent(Ri, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = cp);
          this.notifiedSession = cp, this.api.pushEvent(ki, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(pp, ip, cp) {
        const Op = null === cp || void 0 === cp ? void 0 : cp.session;
        let op, Ip, Sp = pp.fetchUserSession();
        if (ip.persistent && ip.maxSessionPersistenceTime && Sp) {
          const pp = yi();
          Sp.lastActivity < pp - ip.maxSessionPersistenceTime && (fi.removeUserSession(), Sp = null)
        }
        const xp = Ei(Sp);
        if ((null === cp || void 0 === cp ? void 0 : cp.reset) || !xp || (null === Op || void 0 === Op ? void 0 : Op.id) && Op.id !== (null === Sp || void 0 === Sp ? void 0 : Sp.sessionId)) {
          var Lp, Yp, Dp, Ap, Pp, Wp;
          Ip = Ci({
            sessionId: (null === cp || void 0 === cp ? void 0 : cp.reset) ? void 0 : null !== (Lp = null === Op || void 0 === Op ? void 0 : Op.id) && void 0 !== Lp ? Lp : null === (Yp = ip.session) || void 0 === Yp ? void 0 : Yp.id,
            isSampled: Wi(this)
          }, this);
          const pp = Ip.sessionId,
            yp = cp && xp ? null === Sp || void 0 === Sp || null === (Dp = Sp.sessionMeta) || void 0 === Dp ? void 0 : Dp.overrides : void 0,
            Up = yp ? Pi(Pi({}, null === (Ap = ip.session) || void 0 === Ap ? void 0 : Ap.overrides), yp) : null === (Pp = ip.session) || void 0 === Pp ? void 0 : Pp.overrides;
          Ip.sessionMeta = Pi({
            id: pp,
            attributes: Pi({
              isSampled: Ip.isSampled.toString()
            }, null === (Wp = ip.session) || void 0 === Wp ? void 0 : Wp.attributes)
          }, Up ? {
            overrides: Up
          } : {}), op = ki
        } else {
          var yp, Up;
          const pp = null === Sp || void 0 === Sp ? void 0 : Sp.sessionId;
          Ip = Ci({
            sessionId: pp,
            isSampled: Sp.isSampled || !1,
            started: null === Sp || void 0 === Sp ? void 0 : Sp.started
          }, this);
          const cp = null === Sp || void 0 === Sp ? void 0 : Sp.sessionMeta,
            Op = Pi(Pi({}, null === (yp = ip.session) || void 0 === yp ? void 0 : yp.overrides), null === cp || void 0 === cp ? void 0 : cp.overrides);
          Ip.sessionMeta = Pi(Pi({}, ip.session), {}, {
            id: pp,
            attributes: Pi(Pi(Pi({}, null === (Up = ip.session) || void 0 === Up ? void 0 : Up.attributes), null === cp || void 0 === cp ? void 0 : cp.attributes), {}, {
              isSampled: Ip.isSampled.toString()
            }),
            overrides: Op
          }), op = mi
        }
        var wp;
        if (Op && (Ip.sessionMeta = Pi(Pi({}, Ip.sessionMeta), {}, {
            attributes: Pi(Pi(Pi({}, null === (wp = Ip.sessionMeta) || void 0 === wp ? void 0 : wp.attributes), Op.attributes), {}, {
              isSampled: Ip.isSampled.toString()
            })
          }), Op.overrides)) {
          const pp = (null === cp || void 0 === cp ? void 0 : cp.inheritOverrides) ? Pi(Pi({}, Ip.sessionMeta.overrides), Op.overrides) : Op.overrides;
          Object.keys(pp).length > 0 ? Ip.sessionMeta.overrides = pp : delete Ip.sessionMeta.overrides
        }
        return {
          initialSession: Ip,
          lifecycleType: op
        }
      }
      registerBeforeSendHook(pp) {
        var ip;
        this.beforeSendHook = ip => {
          var cp, Op;
          const op = null === (cp = ip.meta.session) || void 0 === cp ? void 0 : cp.id;
          op && !this.transports.isPaused() && pp(op);
          const Ip = null === (Op = ip.meta.session) || void 0 === Op ? void 0 : Op.attributes;
          if (Ip && "true" === (null === Ip || void 0 === Ip ? void 0 : Ip.isSampled)) {
            var Sp;
            let pp = JSON.parse(JSON.stringify(ip));
            const cp = null === (Sp = pp.meta.session) || void 0 === Sp ? void 0 : Sp.attributes;
            var xp;
            if (null === cp || void 0 === cp || delete cp.isSampled, 0 === Object.keys(null !== cp && void 0 !== cp ? cp : {}).length) null === (xp = pp.meta.session) || void 0 === xp || delete xp.attributes;
            return pp
          }
          return null
        }, null === (ip = this.transports) || void 0 === ip || ip.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var pp;
        this.logDebug("init session instrumentation");
        const ip = document.prerendering;
        var cp;
        if ((null === (pp = this.config.sessionTracking) || void 0 === pp ? void 0 : pp.enabled) && (ip || this.prerenderSession)) return null !== (cp = this.prerenderSession) && void 0 !== cp || (this.prerenderSession = new Fi(this.metas, this.transports, (pp => {
          this.prerenderSession = void 0, this.initializeSession(pp)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(pp) {
        const ip = this.config.sessionTracking;
        if (null === ip || void 0 === ip ? void 0 : ip.enabled) {
          var cp, Op;
          const op = gi(ip),
            Ip = new op(this);
          this.isAdoptingSession = Ip.isAdopting, this.registerBeforeSendHook(Ip.recordActivity);
          const {
            initialSession: Sp,
            lifecycleType: xp
          } = this.createInitialSession(op, ip, pp);
          op.storeUserSession(Sp);
          const Lp = Sp.sessionMeta;
          this.notifiedSession = Lp, this.api.setSession(Lp), this.captureListener = () => {
            this.transports.isPaused() || Ip.updateSession({
              refreshActivity: !1
            })
          }, null === (cp = (Op = this.metas).addCaptureListener) || void 0 === cp || cp.call(Op, this.captureListener), xp === ki && this.api.pushEvent(ki, {}, void 0, {
            skipDedupe: !0
          }), xp === mi && this.api.pushEvent(mi, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var pp, ip, cp;
        (null === (pp = this.prerenderSession) || void 0 === pp || pp.destroy(), this.captureListener) && (null === (ip = (cp = this.metas).removeCaptureListener) || void 0 === ip || ip.call(cp, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function xc(pp, ip, cp, Op) {
      const op = {
        filename: pp || document.location.href,
        function: ip || "?"
      };
      return void 0 !== cp && (op.lineno = cp), void 0 !== Op && (op.colno = Op), op
    }
    const Lc = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Yc = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Dc = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Ac = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Pc = "safari-extension",
      Wc = "safari-web-extension",
      yc = /Minified React error #\d+;/i;

    function Uc(pp, ip) {
      const cp = null === pp || void 0 === pp ? void 0 : pp.includes(Pc),
        Op = !cp && (null === pp || void 0 === pp ? void 0 : pp.includes("safari-web-extension"));
      return cp || Op ? [(null === pp || void 0 === pp ? void 0 : pp.includes("@")) ? pp.split("@")[0] : pp, cp ? `${Pc}:${ip}` : `${Wc}:${ip}`] : [pp, ip]
    }
    const wc = 1024;

    function vc(pp) {
      let ip = [];
      pp.stacktrace ? ip = pp.stacktrace.split("\n").filter(((pp, ip) => ip % 2 === 0)) : pp.stack && (ip = pp.stack.split("\n"));
      const cp = ip.reduce(((ip, cp, Op) => {
        if (cp.length > wc) return ip;
        let op, Ip, Sp, xp, Lp;
        if (op = Lc.exec(cp)) {
          if (Ip = op[1], Sp = op[2], xp = op[3], Lp = op[4], null === Sp || void 0 === Sp ? void 0 : Sp.startsWith("eval")) {
            const pp = Yc.exec(Sp);
            pp && (Sp = pp[1], xp = pp[2], Lp = pp[3])
          }
          Sp = (null === Sp || void 0 === Sp ? void 0 : Sp.startsWith("address at ")) ? Sp.substring(11) : Sp, [Ip, Sp] = Uc(Ip, Sp)
        } else if (op = Dc.exec(cp)) {
          if (Ip = op[1], Sp = op[3], xp = op[4], Lp = op[5], Sp && Sp.includes(" > eval")) {
            const pp = Ac.exec(Sp);
            pp && (Ip = Ip || "eval", Sp = pp[1], xp = pp[2])
          } else 0 === Op && !Lp && kp(pp.columnNumber) && (Lp = String(pp.columnNumber + 1));
          [Ip, Sp] = Uc(Ip, Sp)
        }
        return (Sp || Ip) && ip.push(xc(Sp, Ip, xp ? Number(xp) : void 0, Lp ? Number(Lp) : void 0)), ip
      }), []);
      return yc.test(pp.message) ? cp.slice(1) : cp
    }

    function tc(pp) {
      return {
        frames: vc(pp)
      }
    }
    const Hc = "http-request-start",
      dc = "http-request-end";
    var ec = class pp {
      constructor() {
        this.subscribers = []
      }
      subscribe(pp) {
        return this.subscribers.push(pp), {
          unsubscribe: () => this.unsubscribe(pp)
        }
      }
      unsubscribe(pp) {
        this.subscribers = this.subscribers.filter((ip => ip !== pp))
      }
      notify(pp) {
        this.subscribers.forEach((ip => ip(pp)))
      }
      first() {
        const ip = new pp,
          cp = pp => {
            ip.notify(pp), Op.unsubscribe()
          },
          Op = this.subscribe(cp),
          op = ip.unsubscribe.bind(ip);
        return this.withUnsubscribeOverride(ip, op, cp)
      }
      takeWhile(ip) {
        const cp = new pp,
          Op = pp => {
            ip(pp) ? cp.notify(pp) : cp.unsubscribe(Op)
          };
        this.subscribe(Op);
        const op = cp.unsubscribe.bind(cp);
        return this.withUnsubscribeOverride(cp, op, Op)
      }
      filter(ip) {
        const cp = new pp,
          Op = pp => {
            ip(pp) && cp.notify(pp)
          };
        this.subscribe(Op);
        const op = cp.unsubscribe.bind(cp);
        return this.withUnsubscribeOverride(cp, op, Op)
      }
      merge() {
        const ip = new pp,
          cp = [];
        for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
        op.forEach((pp => {
          const Op = pp.subscribe((pp => {
            ip.notify(pp)
          }));
          cp.push(Op)
        }));
        const Sp = ip.unsubscribeAll.bind(ip);
        return ip.unsubscribe = () => {
          cp.forEach((pp => pp.unsubscribe())), Sp()
        }, ip
      }
      withUnsubscribeOverride(pp, ip, cp) {
        return pp.unsubscribe = pp => {
          ip(pp), this.unsubscribe(cp)
        }, pp
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let uc = function(pp) {
      return pp.TRACE = "trace", pp.DEBUG = "debug", pp.INFO = "info", pp.LOG = "log", pp.WARN = "warn", pp.ERROR = "error", pp
    }({});
    const jc = "log",
      kc = ["trace", "debug", "info", "log", "warn", "error"];
    let mc, Rc = !1;
    const qc = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Mc = "Error",
      Cc = pp => pp.map((pp => Mp(pp) ? Ni(pp) : String(pp))).join(" ");

    function Ec(pp) {
      let ip, cp, Op, op, Ip = [];
      if (fp(pp) && pp.error) ip = pp.error.message, cp = pp.error.name, Ip = vc(pp.error);
      else if ((Op = bp(pp)) || hp(pp)) {
        const {
          name: op,
          message: Ip
        } = pp;
        cp = null !== op && void 0 !== op ? op : Op ? "DOMError" : "DOMException", ip = Ip ? `${cp}: ${Ip}` : cp
      } else Tp(pp) ? (cp = pp.name, ip = pp.message, Ip = vc(pp)) : (Mp(pp) || (op = Bp(pp))) && (cp = op ? pp.constructor.name : void 0, ip = `Non-Error exception captured with keys: ${Object.keys(pp)}`);
      return [ip, cp, Ip]
    }

    function Xc(pp) {
      const [ip, cp, Op, op, Ip] = pp;
      let Sp, xp, Lp = [];
      const Yp = jp(ip),
        Dp = xc(cp, "?", Op, op);
      return Ip || !Yp ? ([Sp, xp, Lp] = Ec(null !== Ip && void 0 !== Ip ? Ip : ip), 0 === Lp.length && (Lp = [Dp])) : Yp && ([Sp, xp] = function(pp) {
        var ip, cp;
        const Op = pp.match(qc),
          op = null !== (ip = null === Op || void 0 === Op ? void 0 : Op[1]) && void 0 !== ip ? ip : Mc;
        return [null !== (cp = null === Op || void 0 === Op ? void 0 : Op[2]) && void 0 !== cp ? cp : pp, op]
      }(ip), Lp = [Dp]), {
        value: Sp,
        type: xp,
        stackFrames: Lp
      }
    }

    function lc(pp, ip) {
      return Tp(pp[0]) ? Xc(pp) : {
        value: ip(pp)
      }
    }
    const Qc = pp => pp.map((pp => {
      try {
        return String(pp)
      } catch (ip) {
        return ""
      }
    })).join(" ");
    var Jc = class pp extends oc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = Ic, this.errorSerializer = Qc
      }
      initialize() {
        var ip, cp;
        const Op = this.config.consoleInstrumentation,
          op = (null === Op || void 0 === Op ? void 0 : Op.serializeErrors) || !!(null === Op || void 0 === Op ? void 0 : Op.errorSerializer);
        this.errorSerializer = op ? null !== (ip = null === Op || void 0 === Op ? void 0 : Op.errorSerializer) && void 0 !== ip ? ip : Cc : Qc;
        const Ip = null !== (cp = null === Op || void 0 === Op ? void 0 : Op.disabledLevels) && void 0 !== cp ? cp : pp.defaultDisabledLevels,
          Sp = function(pp) {
            if (mc || (mc = new ec), !Rc) {
              const ip = null !== pp && void 0 !== pp ? pp : cc;
              kc.forEach((pp => {
                console[pp] = function() {
                  for (var cp, Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
                  mc.notify({
                    type: "console",
                    level: pp,
                    args: op
                  }), null === (cp = ip[pp]) || void 0 === cp || cp.apply(console, op)
                }
              })), Rc = !0
            }
            return mc
          }(this.unpatchedConsole);
        this.subscription = Sp.subscribe((ip => {
          let {
            level: cp,
            args: op
          } = ip;
          if (!Ip.includes(cp)) try {
            if (cp !== uc.ERROR || (null === Op || void 0 === Op ? void 0 : Op.consoleErrorAsLog))
              if (cp === uc.ERROR && (null === Op || void 0 === Op ? void 0 : Op.consoleErrorAsLog)) {
                const {
                  value: ip,
                  type: Op,
                  stackFrames: Ip
                } = lc(op, this.errorSerializer);
                this.api.pushLog(ip ? [pp.consoleErrorPrefix + ip] : op, {
                  level: cp,
                  context: {
                    value: null !== ip && void 0 !== ip ? ip : "",
                    type: null !== Op && void 0 !== Op ? Op : "",
                    stackFrames: (null === Ip || void 0 === Ip ? void 0 : Ip.length) ? Cc(Ip) : ""
                  }
                })
              } else this.api.pushLog(op, {
                level: cp
              });
            else {
              const {
                value: ip,
                type: cp,
                stackFrames: Op
              } = lc(op, this.errorSerializer);
              if (ip && !cp && !Op) return void this.api.pushError(new Error(pp.consoleErrorPrefix + ip));
              this.api.pushError(new Error(pp.consoleErrorPrefix + ip), {
                type: cp,
                stackFrames: Op
              })
            }
          } catch (Sp) {
            this.logError(Sp)
          }
        }))
      }
      destroy() {
        var pp;
        null === (pp = this.subscription) || void 0 === pp || pp.unsubscribe(), this.subscription = void 0
      }
    };
    Jc.defaultDisabledLevels = [uc.DEBUG, uc.TRACE, uc.LOG], Jc.consoleErrorPrefix = "console.error: ";
    const Bc = [];
    var Nc = class extends oc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = Ic
      }
      initialize() {
        this.logDebug("Initializing"),
          function(pp) {
            const ip = window.onerror;
            window.onerror = function() {
              for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
              try {
                const {
                  value: ip,
                  type: cp,
                  stackFrames: op
                } = Xc(Op), Ip = Op[4];
                if (ip) {
                  const Op = {
                    type: cp,
                    stackFrames: op
                  };
                  null != Ip && (Op.originalError = Ip), pp.pushError(new Error(ip), Op)
                }
              } finally {
                null === ip || void 0 === ip || ip.apply(window, Op)
              }
            }
          }(this.api),
          function(pp) {
            const ip = ip => {
              var cp;
              let Op, op, Ip = ip;
              if (Ip.reason) Ip = ip.reason;
              else if (null === (cp = ip.detail) || void 0 === cp ? void 0 : cp.reason) {
                var Sp;
                Ip = null === (Sp = ip.detail) || void 0 === Sp ? void 0 : Sp.reason
              }
              let xp = [];
              Qp(Ip) ? (Op = `Non-Error promise rejection captured with value: ${String(Ip)}`, op = "UnhandledRejection") : [Op, op, xp] = Ec(Ip), Op && pp.pushError(new Error(Op), {
                type: op,
                stackFrames: xp
              })
            };
            window.addEventListener("unhandledrejection", ip), Bc.push(ip)
          }(this.api)
      }
    };
    const Tc = "unknown";
    var fc = class extends oc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = Ic, this.waitingForActivation = !1, this.sendViewChangedEvent = pp => {
          var ip;
          if (this.waitingForActivation || document.prerendering) return;
          const cp = pp.view;
          if (cp && cp.name !== (null === (ip = this.notifiedView) || void 0 === ip ? void 0 : ip.name)) {
            var Op, op, Ip;
            const pp = null !== (Op = null === (op = this.notifiedView) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : Tc;
            this.notifiedView = cp, this.api.pushEvent(ji, {
              fromView: pp,
              toView: null !== (Ip = cp.name) && void 0 !== Ip ? Ip : Tc
            }, void 0, {
              skipDedupe: !0
            })
          }
        }, this.prerenderListener = () => {
          window.queueMicrotask((() => {
            this.waitingForActivation && (this.waitingForActivation = !1, this.sendViewChangedEvent(this.metas.value))
          }))
        }
      }
      initialize() {
        this.metas.addListener(this.sendViewChangedEvent), document.prerendering && (this.waitingForActivation = !0, document.addEventListener("prerenderingchange", this.prerenderListener, {
          once: !0
        }))
      }
      destroy() {
        this.waitingForActivation = !1, this.metas.removeListener(this.sendViewChangedEvent), document.removeEventListener("prerenderingchange", this.prerenderListener)
      }
    };
    class bc {
      t;
      o = 0;
      i = [];
      l(pp) {
        if (pp.hadRecentInput) return;
        const ip = this.i[0],
          cp = this.i.at(-1);
        this.o && ip && cp && pp.startTime - cp.startTime < 1e3 && pp.startTime - ip.startTime < 5e3 ? (this.o += pp.value, this.i.push(pp)) : (this.o = pp.value, this.i = [pp]), this.t?.(pp)
      }
    }
    const hc = () => {
        const pp = performance.getEntriesByType("navigation")[0];
        if (pp && pp.responseStart > 0 && pp.responseStart < performance.now()) return pp
      },
      ac = pp => {
        if ("loading" === document.readyState) return "loading";
        const ip = hc();
        if (ip) {
          if (pp < ip.domInteractive) return "loading";
          if (0 === ip.domContentLoadedEventStart || pp < ip.domContentLoadedEventStart) return "dom-interactive";
          if (0 === ip.domComplete || pp < ip.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      nc = pp => {
        const ip = pp.nodeName;
        return 1 === pp.nodeType ? ip.toLowerCase() : ip.toUpperCase().replace(/^#/, "")
      },
      Fc = pp => {
        let ip = "";
        try {
          for (; 9 !== pp?.nodeType;) {
            const cp = pp,
              Op = cp.id ? "#" + cp.id : [nc(cp), ...Array.from(cp.classList ?? []).sort()].join(".");
            if (ip.length + Op.length > 99) return ip || Op;
            if (ip = ip ? Op + ">" + ip : Op, cp.id) break;
            pp = cp.parentNode
          }
        } catch {}
        return ip
      },
      gc = new WeakMap;

    function Gc(pp, ip) {
      let cp = gc.get(ip);
      return cp || (cp = new WeakMap, gc.set(ip, cp)), cp.get(pp) || cp.set(pp, new ip), cp.get(pp)
    }
    let rc = -1;
    const Zc = () => rc,
      zc = pp => {
        addEventListener("pageshow", (ip => {
          ip.persisted && (rc = ip.timeStamp, pp(ip))
        }), !0)
      },
      sc = (pp, ip, cp, Op) => {
        let op, Ip;
        return Sp => {
          ip.value >= 0 && (Sp || Op) && (Ip = ip.value - (op ?? 0), (Ip || void 0 === op) && (op = ip.value, ip.delta = Ip, ip.rating = ((pp, ip) => pp > ip[1] ? "poor" : pp > ip[0] ? "needs-improvement" : "good")(ip.value, cp), pp(ip)))
        }
      },
      Kc = pp => {
        requestAnimationFrame((() => requestAnimationFrame((() => pp()))))
      },
      Vc = () => hc()?.activationStart ?? 0;
    let pO = -1;
    const iO = new Set,
      cO = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      OO = pp => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === pp.type)
            for (const pp of iO) pp();
          isFinite(pO) || (pO = "visibilitychange" === pp.type ? pp.timeStamp : 0, removeEventListener("prerenderingchange", OO, !0))
        }
      },
      oO = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (pO = 1 / 0), pO < 0) {
          const pp = Vc(),
            ip = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((ip => "hidden" === ip.name && ip.startTime >= pp))?.startTime;
          pO = ip ?? cO(), addEventListener("visibilitychange", OO, !0), addEventListener("prerenderingchange", OO, !0), zc((() => {
            setTimeout((() => {
              pO = cO()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return pO
          },
          onHidden(pp) {
            iO.add(pp)
          }
        }
      },
      IO = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0,
          Sp = arguments.length > 6 ? arguments[6] : void 0;
        const xp = hc(),
          Lp = xp?.navigationId || 0;
        let Yp = "navigate";
        return cp ? Yp = cp : Zc() >= 0 ? Yp = "back-forward-cache" : xp && (document.prerendering || Vc() > 0 ? Yp = "prerender" : document.wasDiscarded ? Yp = "restore" : xp.type && (Yp = xp.type.replace(/_/g, "-"))), {
          name: pp,
          value: ip,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Yp,
          navigationId: Op || Lp,
          navigationInteractionId: op,
          navigationURL: Ip || xp?.name,
          navigationStartTime: Sp || 0
        }
      },
      SO = function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Op = pp.filter((pp => PerformanceObserver.supportedEntryTypes.includes(pp)));
          if (Op.length > 0) {
            const pp = new PerformanceObserver((pp => {
              queueMicrotask((() => {
                const cp = pp.getEntries();
                Op.length > 1 && cp.sort(((pp, ip) => pp.startTime + pp.duration - (ip.startTime + ip.duration))), ip(cp)
              }))
            }));
            for (const ip of Op) pp.observe({
              type: ip,
              buffered: !0,
              ...cp
            });
            return pp
          }
        } catch {}
      },
      xO = pp => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && pp && pp.reportSoftNavs,
      LO = (pp, ip) => {
        if (pp.set(ip.navigationId, ip), pp.size > 2) {
          const ip = pp.keys().next().value;
          void 0 !== ip && pp.delete(ip)
        }
      },
      YO = pp => {
        let ip = !1;
        return () => {
          ip || (pp(), ip = !0)
        }
      };
    class DO {
      u
    }
    const AO = pp => {
        document.prerendering ? addEventListener("prerenderingchange", pp, !0) : pp()
      },
      PO = [1800, 3e3],
      WO = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cp = xO(ip);
        AO((() => {
          const Op = Gc(ip, DO),
            op = oO();
          let Ip, Sp = IO("FCP");
          const xp = SO(["paint"], (pp => {
            for (const ip of pp) "first-contentful-paint" === ip.name && (xp.disconnect(), ip.startTime < op.firstHiddenTime && (Sp.value = Math.max(ip.startTime - Vc(), 0), Sp.entries.push(ip), Sp.navigationId = ip.navigationId || Sp.navigationId, Ip(!0)))
          }));
          xp && (Ip = sc(pp, Sp, PO, ip.reportAllChanges), zc((cp => {
            Sp = IO("FCP", -1, "back-forward-cache", Sp.navigationId, Sp.navigationInteractionId, Sp.navigationURL, Zc()), Ip = sc(pp, Sp, PO, ip.reportAllChanges), Kc((() => {
              Sp.value = performance.now() - cp.timeStamp, Ip(!0)
            }))
          }))), cp && SO(["soft-navigation"], (cp => {
            cp.forEach((cp => {
              Op.u && cp.navigationId && LO(Op.u, cp);
              const op = Math.max((cp.presentationTime || cp.paintTime || 0) - cp.startTime, 0);
              Sp = IO("FCP", op, "soft-navigation", cp.navigationId, cp.interactionId, cp.name, cp.startTime), Ip = sc(pp, Sp, PO, ip.reportAllChanges), Ip(!0)
            }))
          }), ip)
        }))
      },
      yO = [.1, .25],
      UO = pp => pp.find((pp => 1 === pp.node?.nodeType)) || pp[0];
    let wO = 0,
      vO = 1 / 0,
      tO = 0;
    const HO = pp => {
      for (const ip of pp) ip.interactionId && (vO = Math.min(vO, ip.interactionId), tO = Math.max(tO, ip.interactionId), wO = tO ? (tO - vO) / 7 + 1 : 0)
    };
    let dO;
    const eO = () => dO ? wO : performance.interactionCount ?? 0;
    class uO {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return eO() - this.h
      }
      D() {
        this.h = eO(), this.v.length = 0, this.p.clear()
      }
      S(pp) {
        const ip = this.T(),
          cp = Math.min(this.v.length - 1, Math.floor(ip / 50));
        return !ip || -1 !== cp || "soft-navigation" !== pp && "back-forward-cache" !== pp ? this.v[cp] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(pp) {
        if (this.m?.(pp), !pp.interactionId) return;
        const ip = this.v.at(-1);
        let cp = this.p.get(pp.interactionId);
        if (cp || this.v.length < 10 || pp.duration > ip.k) {
          if (cp ? pp.duration > cp.k ? (cp.entries = [pp], cp.k = pp.duration) : pp.duration === cp.k && pp.startTime === cp.entries[0].startTime && cp.entries.push(pp) : (cp = {
              id: pp.interactionId,
              entries: [pp],
              k: pp.duration
            }, this.p.set(cp.id, cp), this.v.push(cp)), this.v.sort(((pp, ip) => ip.k - pp.k)), this.v.length > 10) {
            const pp = this.v.splice(10);
            for (const ip of pp) this.p.delete(ip.id)
          }
          this.M?.(cp)
        }
      }
    }
    const jO = pp => {
        const ip = "requestIdleCallback" in globalThis ? 1e3 : 0,
          cp = globalThis.requestIdleCallback || setTimeout,
          Op = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) pp();
        else {
          const op = YO(pp);
          let Ip = -1;
          const Sp = () => {
            Op(Ip), op()
          };
          addEventListener("visibilitychange", Sp, {
            once: !0,
            capture: !0
          }), Ip = cp((() => {
            removeEventListener("visibilitychange", Sp, {
              capture: !0
            }), op()
          }), {
            timeout: ip
          })
        }
      },
      kO = [200, 500],
      mO = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cp = Gc(ip = Object.assign({}, ip), uO);
        let Op = [],
          op = [],
          Ip = 0;
        const Sp = new WeakMap,
          xp = new WeakMap;
        let Lp = !1;
        const Yp = () => {
            Lp || (Lp = !0, jO(Dp))
          },
          Dp = () => {
            const pp = new Set(cp.v.map((pp => Sp.get(pp.entries[0])))),
              ip = op.length - 10;
            op = op.filter(((cp, Op) => Op >= ip || pp.has(cp)));
            const xp = new Set;
            for (const cp of op) {
              const pp = Ap(cp.startTime, cp.processingEnd);
              for (const ip of pp) xp.add(ip)
            }
            const Yp = Op.length - 10;
            Op = Op.filter(((pp, ip) => xp.has(pp) || ip >= Yp && pp.startTime > Ip)), Lp = !1
          };
        cp.m = pp => {
          const cp = pp.startTime + pp.duration;
          let Op;
          Ip = Math.max(Ip, pp.processingEnd);
          for (let Ip = op.length - 1; Ip >= 0; Ip--) {
            const Sp = op[Ip];
            if (Math.abs(cp - Sp.renderTime) <= 8) {
              Op = Sp, Op.startTime = Math.min(pp.startTime, Op.startTime), Op.processingStart = Math.min(pp.processingStart, Op.processingStart), Op.processingEnd = Math.max(pp.processingEnd, Op.processingEnd), ip.includeProcessedEventEntries && Op.entries.push(pp);
              break
            }
          }
          Op || (Op = {
            startTime: pp.startTime,
            processingStart: pp.processingStart,
            processingEnd: pp.processingEnd,
            renderTime: cp,
            entries: ip.includeProcessedEventEntries ? [pp] : []
          }, op.push(Op)), pp.interactionId && Sp.set(pp, Op), Yp()
        }, cp.M = pp => {
          if (!xp.get(pp)) {
            const cp = pp.entries.find((pp => pp.target))?.target;
            if (cp) {
              const Op = ip.generateTarget?.(cp) ?? Fc(cp);
              xp.set(pp, Op)
            } else {
              const ip = pp.entries.find((pp => pp.targetSelector))?.targetSelector;
              ip && xp.set(pp, ip)
            }
          }
        };
        const Ap = (pp, ip) => {
          const cp = [];
          for (const op of Op)
            if (!(op.startTime + op.duration < pp)) {
              if (op.startTime > ip) break;
              cp.push(op)
            } return cp
        };
        SO(["long-animation-frame"], (pp => {
            Op = Op.concat(pp), Yp()
          }), ip),
          function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const cp = oO();
            AO((() => {
              "interactionCount" in performance || dO || (dO = SO(["event"], HO, {
                durationThreshold: 0
              }));
              let Op, op = IO("INP");
              const Ip = Gc(ip, uO),
                Sp = (cp, Sp, xp, Lp, Yp) => {
                  Ip.D(), op = IO("INP", -1, cp, Sp, xp, Lp, Yp), Op = sc(pp, op, kO, ip.reportAllChanges)
                },
                xp = () => {
                  const pp = Ip.S(op.navigationType);
                  pp && pp.k !== op.value && (op.value = pp.k, op.entries = pp.entries, Op())
                },
                Lp = pp => {
                  xp(), Op(!0), Sp("soft-navigation", pp.navigationId, pp.interactionId, pp.name, pp.startTime)
                },
                Yp = function(pp) {
                  let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  jO((() => {
                    for (const ip of pp) "soft-navigation" !== ip.entryType ? Ip.l(ip) : Lp(ip);
                    xp(), ip && Op(!0)
                  }))
                },
                Dp = ["event", "first-input"];
              xO(ip) && Dp.push("soft-navigation");
              const Ap = SO(Dp, Yp, {
                ...ip,
                durationThreshold: ip.durationThreshold ?? 40
              });
              Op = sc(pp, op, kO, ip.reportAllChanges), Ap && (cp.onHidden((() => {
                Yp(Ap.takeRecords(), !0)
              })), zc((() => {
                Sp("back-forward-cache", op.navigationId, op.navigationInteractionId, op.navigationURL, Zc())
              })))
            }))
          }((ip => {
            pp((pp => {
              if (0 === pp.entries.length) {
                const ip = pp.navigationStartTime || 0,
                  cp = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: pp.value,
                    loadState: ac(ip)
                  };
                return Object.assign(pp, {
                  attribution: cp
                })
              }
              const ip = pp.entries[0],
                Op = Sp.get(ip),
                op = Math.max(Op.processingStart, ip.startTime),
                Ip = Math.max(ip.startTime + ip.duration, op),
                Lp = Math.min(Op.processingEnd, Ip),
                Yp = Op.entries.sort(((pp, ip) => pp.processingStart - ip.processingStart)),
                Dp = Ap(ip.startTime, Lp),
                Pp = cp.p.get(ip.interactionId),
                Wp = {
                  interactionTarget: xp.get(Pp),
                  interactionType: ip.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: ip.startTime,
                  nextPaintTime: Ip,
                  processedEventEntries: Yp,
                  longAnimationFrameEntries: Dp,
                  inputDelay: op - ip.startTime,
                  processingDuration: Lp - op,
                  presentationDelay: Ip - Lp,
                  loadState: ac(ip.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (pp => {
                const ip = pp.interactionTime,
                  cp = pp.nextPaintTime;
                if (!pp.longAnimationFrameEntries?.length || !ip || !cp) return;
                const Op = pp.inputDelay,
                  op = pp.processingDuration;
                let Ip, Sp, xp = 0,
                  Lp = 0,
                  Yp = 0,
                  Dp = 0;
                for (const Wp of pp.longAnimationFrameEntries) {
                  Lp = Lp + Wp.startTime + Wp.duration - Wp.styleAndLayoutStart;
                  for (const pp of Wp.scripts) {
                    const cp = pp.startTime + pp.duration;
                    if (cp < ip) continue;
                    const Yp = cp - Math.max(ip, pp.startTime),
                      Ap = pp.duration ? Yp / pp.duration * pp.forcedStyleAndLayoutDuration : 0;
                    xp += Yp - Ap, Lp += Ap, Yp > Dp && (Sp = pp.startTime < ip + Op ? "input-delay" : pp.startTime >= ip + Op + op ? "presentation-delay" : "processing-duration", Ip = pp, Dp = Yp)
                  }
                }
                const Ap = pp.longAnimationFrameEntries.at(-1),
                  Pp = Ap ? Ap.startTime + Ap.duration : 0;
                Pp >= ip + Op + op && (Yp = cp - Pp), Ip && Sp && (pp.longestScript = {
                  entry: Ip,
                  subpart: Sp,
                  intersectingDuration: Dp
                }), pp.totalScriptDuration = xp, pp.totalStyleAndLayoutDuration = Lp, pp.totalPaintDuration = Yp, pp.totalUnattributedDuration = cp - ip - xp - Lp - Yp
              })(Wp), Object.assign(pp, {
                attribution: Wp
              })
            })(ip))
          }), ip)
      };
    class RO {
      m;
      u;
      l(pp) {
        this.m?.(pp)
      }
    }
    const qO = [2500, 4e3];
    let MO = 50;
    const CO = [];
    SO(["resource"], (pp => {
      for (const ip of pp) CO.push(ip), CO.length > MO && CO.shift()
    }));
    const EO = [800, 1800],
      XO = pp => {
        document.prerendering ? AO((() => XO(pp))) : "complete" !== document.readyState ? addEventListener("load", (() => XO(pp)), !0) : setTimeout(pp)
      },
      lO = "load_state",
      QO = "time_to_first_byte";
    var JO = class {
        constructor(pp, ip) {
          this.corePushMeasurement = pp, this.webVitalConfig = ip
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var pp;
          ! function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const cp = Gc(ip = Object.assign({}, ip), bc),
              Op = new WeakMap;
            cp.t = pp => {
                if (pp?.sources?.length) {
                  const cp = UO(pp.sources),
                    op = cp?.node;
                  if (op) {
                    const pp = ip.generateTarget?.(op) ?? Fc(op);
                    Op.set(cp, pp)
                  }
                }
              },
              function(pp) {
                let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const cp = oO();
                WO(YO((() => {
                  let Op, op = IO("CLS", 0);
                  const Ip = Gc(ip, bc),
                    Sp = (cp, Sp, xp, Lp, Yp) => {
                      op = IO("CLS", 0, cp, Sp, xp, Lp, Yp), Ip.o = 0, Op = sc(pp, op, yO, ip.reportAllChanges)
                    },
                    xp = function() {
                      let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Ip.o > op.value && (op.value = Ip.o, op.entries = Ip.i), Op(pp)
                    },
                    Lp = pp => {
                      xp(!0), Sp("soft-navigation", pp.navigationId, pp.interactionId, pp.name, pp.startTime)
                    },
                    Yp = pp => {
                      for (const ip of pp) "soft-navigation" !== ip.entryType ? Ip.l(ip) : Lp(ip);
                      xp()
                    },
                    Dp = ["layout-shift"];
                  xO(ip) && Dp.push("soft-navigation");
                  const Ap = SO(Dp, Yp);
                  Ap && (Op = sc(pp, op, yO, ip.reportAllChanges), cp.onHidden((() => {
                    Yp(Ap.takeRecords()), Op(!0)
                  })), zc((() => {
                    Sp("back-forward-cache", op.navigationId, op.navigationInteractionId, op.navigationURL, Zc()), Kc(Op)
                  })), setTimeout(Op))
                })))
              }((ip => {
                pp((pp => {
                  let ip = {};
                  if (pp.entries.length) {
                    const cp = pp.entries.reduce(((pp, ip) => pp.value > ip.value ? pp : ip));
                    if (cp?.sources?.length) {
                      const pp = UO(cp.sources);
                      pp && (ip = {
                        largestShiftTarget: Op.get(pp),
                        largestShiftTime: cp.startTime,
                        largestShiftValue: cp.value,
                        largestShiftSource: pp,
                        largestShiftEntry: cp,
                        loadState: ac(cp.startTime)
                      })
                    }
                  }
                  return Object.assign(pp, {
                    attribution: ip
                  })
                })(ip))
              }), ip)
          }((pp => {
            const {
              loadState: ip,
              largestShiftValue: cp,
              largestShiftTime: Op,
              largestShiftTarget: op
            } = pp.attribution, Ip = this.buildInitialValues(pp);
            this.addIfPresent(Ip, "largest_shift_value", cp), this.addIfPresent(Ip, "largest_shift_time", Op);
            const Sp = this.buildInitialContext(pp);
            this.addIfPresent(Sp, lO, ip), this.addIfPresent(Sp, "largest_shift_target", op), this.pushMeasurement(Ip, Sp)
          }), {
            reportAllChanges: null === (pp = this.webVitalConfig) || void 0 === pp ? void 0 : pp.reportAllChanges
          })
        }
        measureFCP() {
          var pp;
          ! function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const cp = Gc(ip = Object.assign({}, ip), DO);
            xO(ip) && (cp.u = new Map), WO((ip => {
              pp((pp => {
                let ip = {
                  timeToFirstByte: 0,
                  firstByteToFCP: pp.value,
                  loadState: ac(Zc())
                };
                if ("soft-navigation" !== pp.navigationType) {
                  if (pp.entries.length) {
                    const cp = hc(),
                      Op = pp.entries.at(-1);
                    if (cp) {
                      const op = cp.responseStart,
                        Ip = cp.activationStart || 0,
                        Sp = Math.max(0, op - Ip);
                      ip = {
                        timeToFirstByte: Sp,
                        firstByteToFCP: pp.value - Sp,
                        loadState: ac(pp.entries[0].startTime),
                        navigationEntry: cp,
                        fcpEntry: Op
                      }
                    }
                  }
                } else {
                  const Op = cp.u?.get(pp.navigationId);
                  Op && (ip = {
                    timeToFirstByte: 0,
                    firstByteToFCP: pp.value,
                    loadState: "complete",
                    navigationEntry: Op
                  })
                }
                return Object.assign(pp, {
                  attribution: ip
                })
              })(ip))
            }), ip)
          }((pp => {
            const {
              firstByteToFCP: ip,
              timeToFirstByte: cp,
              loadState: Op
            } = pp.attribution, op = this.buildInitialValues(pp);
            this.addIfPresent(op, "first_byte_to_fcp", ip), this.addIfPresent(op, QO, cp);
            const Ip = this.buildInitialContext(pp);
            this.addIfPresent(Ip, lO, Op), this.pushMeasurement(op, Ip)
          }), {
            reportAllChanges: null === (pp = this.webVitalConfig) || void 0 === pp ? void 0 : pp.reportAllChanges
          })
        }
        measureINP() {
          var pp;
          mO((pp => {
            var ip;
            const {
              interactionTime: cp,
              presentationDelay: Op,
              inputDelay: op,
              processingDuration: Ip,
              nextPaintTime: Sp,
              loadState: xp,
              interactionTarget: Lp,
              interactionType: Yp,
              totalScriptDuration: Dp,
              totalStyleAndLayoutDuration: Ap,
              totalPaintDuration: Pp,
              totalUnattributedDuration: Wp,
              longestScript: yp
            } = pp.attribution, Up = this.buildInitialValues(pp);
            this.addIfPresent(Up, "interaction_time", cp), this.addIfPresent(Up, "presentation_delay", Op), this.addIfPresent(Up, "input_delay", op), this.addIfPresent(Up, "processing_duration", Ip), this.addIfPresent(Up, "next_paint_time", Sp), this.addNumberIfDefined(Up, "total_script_duration", Dp), this.addNumberIfDefined(Up, "total_style_and_layout_duration", Ap), this.addNumberIfDefined(Up, "total_paint_duration", Pp), this.addNumberIfDefined(Up, "total_unattributed_duration", Wp), this.addNumberIfDefined(Up, "longest_script_intersecting_duration", null === yp || void 0 === yp ? void 0 : yp.intersectingDuration);
            const wp = this.buildInitialContext(pp);
            this.addIfPresent(wp, lO, xp), this.addIfPresent(wp, "interaction_target", Lp), this.addIfPresent(wp, "interaction_type", Yp), this.addIfPresent(wp, "longest_script_subpart", null === yp || void 0 === yp ? void 0 : yp.subpart), this.addIfPresent(wp, "longest_script_invoker_type", null === yp || void 0 === yp ? void 0 : yp.entry.invokerType), (null === (ip = this.webVitalConfig) || void 0 === ip ? void 0 : ip.trackAttributionSources) && (this.addIfPresent(wp, "longest_script_invoker", null === yp || void 0 === yp ? void 0 : yp.entry.invoker), this.addIfPresent(wp, "longest_script_source_url", null === yp || void 0 === yp ? void 0 : yp.entry.sourceURL), this.addIfPresent(wp, "longest_script_source_function_name", null === yp || void 0 === yp ? void 0 : yp.entry.sourceFunctionName), this.addIfPresent(wp, "longest_script_source_char_position", void 0 !== (null === yp || void 0 === yp ? void 0 : yp.entry.sourceCharPosition) ? String(yp.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Up, wp)
          }), {
            reportAllChanges: null === (pp = this.webVitalConfig) || void 0 === pp ? void 0 : pp.reportAllChanges
          })
        }
        measureLCP() {
          var pp;
          ! function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (ip = Object.assign({}, ip)).resourceBufferSize && (MO = ip.resourceBufferSize);
            const cp = Gc(ip, RO),
              Op = new WeakMap;
            xO(ip) && (cp.u = new Map), cp.m = pp => {
                const cp = pp.element;
                if (cp) {
                  const op = ip.generateTarget?.(cp) ?? Fc(cp);
                  Op.set(pp, op)
                } else pp.id && Op.set(pp, `#${pp.id}`)
              },
              function(pp) {
                let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  cp = !1;
                const Op = xO(ip);
                AO((() => {
                  let op, Ip = oO(),
                    Sp = IO("LCP");
                  const xp = Gc(ip, RO),
                    Lp = (Op, xp, Lp, Yp, Dp) => {
                      Sp = IO("LCP", -1, Op, xp, Lp, Yp, Dp), op = sc(pp, Sp, qO, ip.reportAllChanges), cp = !1, "soft-navigation" === Op && (Ip = oO(!0))
                    },
                    Yp = pp => {
                      xp.u && pp.navigationId && LO(xp.u, pp), cp || op(!0), Lp("soft-navigation", pp.navigationId, pp.interactionId, pp.name, pp.startTime);
                      const ip = pp.getLargestInteractionContentfulPaint?.();
                      ip && Dp([ip])
                    },
                    Dp = pp => {
                      ip.reportAllChanges || Op || (pp = pp.slice(-1));
                      for (const ip of pp) {
                        if (!ip) continue;
                        if ("soft-navigation" === ip.entryType) {
                          Yp(ip);
                          continue
                        }
                        let pp = 0,
                          cp = [],
                          Op = ip.startTime;
                        if ("largest-contentful-paint" === ip.entryType) pp = Math.max(ip.startTime - Vc(), 0), xp.l(ip), cp = [ip];
                        else if ("interaction-contentful-paint" === ip.entryType) {
                          const op = ip;
                          if (!Sp.navigationId) continue;
                          if ("interactionId" in op && op.interactionId != Sp.navigationInteractionId) continue;
                          Op = op.largestContentfulPaint?.renderTime || 0, pp = Math.max(Op - ip.startTime, 0), op.largestContentfulPaint && (xp.l(op.largestContentfulPaint), cp = [op.largestContentfulPaint])
                        }
                        Op < Ip.firstHiddenTime && (Sp.value = pp, Sp.entries = cp, op())
                      }
                    },
                    Ap = ["largest-contentful-paint"];
                  Op && Ap.push("interaction-contentful-paint", "soft-navigation");
                  const Pp = SO(Ap, Dp);
                  if (Pp) {
                    op = sc(pp, Sp, qO, ip.reportAllChanges);
                    const Ip = ["keydown", "click", "visibilitychange"],
                      xp = pp => {
                        if (pp.isTrusted && !cp) {
                          const pp = Sp.id;
                          jO((() => {
                            if (!cp) {
                              if (!Op) {
                                Pp.disconnect();
                                for (const pp of Ip) removeEventListener(pp, xp, {
                                  capture: !0
                                })
                              }
                              pp === Sp.id && (cp = !0, op(!0))
                            }
                          }))
                        }
                      };
                    for (const pp of Ip) addEventListener(pp, xp, {
                      capture: !0
                    });
                    zc((Op => {
                      Lp("back-forward-cache", Sp.navigationId, Sp.navigationInteractionId, Sp.navigationURL, Zc()), op = sc(pp, Sp, qO, ip.reportAllChanges), Kc((() => {
                        Sp.value = performance.now() - Op.timeStamp, cp = !0, op(!0)
                      }))
                    }))
                  }
                }))
              }((ip => {
                pp((pp => {
                  let ip = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: pp.value
                  };
                  if (pp.entries.length) {
                    const op = pp.entries.at(-1),
                      Ip = pp => pp.name === op.url && (pp.requestStart || pp.startTime) <= op.startTime,
                      Sp = op.url && (CO.findLast(Ip) || performance.getEntriesByType("resource").findLast(Ip));
                    let xp;
                    ip.target = Op.get(op), ip.lcpEntry = op, op.url && (ip.url = op.url), Sp && (ip.lcpResourceEntry = Sp);
                    let Lp = 0,
                      Yp = 0;
                    if ("soft-navigation" !== pp.navigationType ? (xp = hc(), Lp = xp?.activationStart ?? 0, Yp = xp?.responseStart ?? 0) : (Lp = pp.navigationStartTime || 0, xp = cp.u?.get(pp.navigationId)), xp) {
                      const cp = Math.max(0, Yp - Lp),
                        Op = Math.max(cp, Sp ? (Sp.requestStart || Sp.startTime) - Lp : 0),
                        op = Math.min(pp.value, Math.max(Op, Sp ? Sp.responseEnd - Lp : 0));
                      ip = {
                        ...ip,
                        timeToFirstByte: cp,
                        resourceLoadDelay: Op - cp,
                        resourceLoadDuration: op - Op,
                        elementRenderDelay: pp.value - op,
                        navigationEntry: xp
                      }
                    }
                  }
                  return Object.assign(pp, {
                    attribution: ip
                  })
                })(ip))
              }), ip)
          }((pp => {
            var ip;
            const {
              elementRenderDelay: cp,
              resourceLoadDelay: Op,
              resourceLoadDuration: op,
              timeToFirstByte: Ip,
              target: Sp,
              url: xp,
              lcpResourceEntry: Lp
            } = pp.attribution, Yp = this.buildInitialValues(pp);
            this.addIfPresent(Yp, "element_render_delay", cp), this.addIfPresent(Yp, "resource_load_delay", Op), this.addIfPresent(Yp, "resource_load_duration", op), this.addIfPresent(Yp, QO, Ip);
            const Dp = this.buildInitialContext(pp);
            this.addIfPresent(Dp, "element", Sp), (null === (ip = this.webVitalConfig) || void 0 === ip ? void 0 : ip.trackAttributionSources) && (this.addIfPresent(Dp, "resource_url", xp), this.addIfPresent(Dp, "resource_delivery_type", null === Lp || void 0 === Lp ? void 0 : Lp.deliveryType), this.addIfPresent(Dp, "resource_initiator_type", null === Lp || void 0 === Lp ? void 0 : Lp.initiatorType)), this.pushMeasurement(Yp, Dp)
          }), {
            reportAllChanges: null === (pp = this.webVitalConfig) || void 0 === pp ? void 0 : pp.reportAllChanges
          })
        }
        measureTTFB() {
          var pp;
          ! function(pp) {
            ! function(pp) {
              let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const cp = xO(ip);
              let Op = IO("TTFB"),
                op = sc(pp, Op, EO, ip.reportAllChanges);
              XO((() => {
                const Ip = hc();
                if (Ip) {
                  const Sp = Ip.responseStart;
                  Op.value = Math.max(Sp - Vc(), 0), Op.entries = [Ip], op(!0), zc((() => {
                    Op = IO("TTFB", 0, "back-forward-cache", Op.navigationId, Op.navigationInteractionId, Op.navigationURL, Zc()), op = sc(pp, Op, EO, ip.reportAllChanges), op(!0)
                  })), cp && SO(["soft-navigation"], (cp => {
                    cp.forEach((cp => {
                      cp.navigationId && (Op = IO("TTFB", 0, "soft-navigation", cp.navigationId, cp.interactionId, cp.name, cp.startTime), Op.entries = [cp], op = sc(pp, Op, EO, ip.reportAllChanges), op(!0))
                    }))
                  }), ip)
                }
              }))
            }((ip => {
              pp((pp => {
                const ip = pp.entries[0];
                let cp = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: ip
                };
                if (pp.entries.length && ip instanceof PerformanceNavigationTiming) {
                  const Op = ip.activationStart || 0,
                    op = Math.max((ip.workerStart || ip.fetchStart || 0) - Op, 0),
                    Ip = Math.max(ip.domainLookupStart - Op, 0),
                    Sp = Math.max(ip.connectStart - Op, 0),
                    xp = Math.max(ip.connectEnd - Op, 0);
                  cp = {
                    waitingDuration: op,
                    cacheDuration: Ip - op,
                    dnsDuration: Sp - Ip,
                    connectionDuration: xp - Sp,
                    requestDuration: pp.value - xp,
                    navigationEntry: ip
                  }
                }
                return Object.assign(pp, {
                  attribution: cp
                })
              })(ip))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((pp => {
            const {
              dnsDuration: ip,
              connectionDuration: cp,
              requestDuration: Op,
              waitingDuration: op,
              cacheDuration: Ip
            } = pp.attribution, Sp = this.buildInitialValues(pp);
            this.addIfPresent(Sp, "dns_duration", ip), this.addIfPresent(Sp, "connection_duration", cp), this.addIfPresent(Sp, "request_duration", Op), this.addIfPresent(Sp, "waiting_duration", op), this.addIfPresent(Sp, "cache_duration", Ip);
            const xp = this.buildInitialContext(pp);
            this.pushMeasurement(Sp, xp)
          }), {
            reportAllChanges: null === (pp = this.webVitalConfig) || void 0 === pp ? void 0 : pp.reportAllChanges
          })
        }
        buildInitialValues(pp) {
          return {
            [pp.name.toLowerCase()]: pp.value,
            delta: pp.delta
          }
        }
        buildInitialContext(pp) {
          var ip;
          const cp = null !== (ip = ci("com.grafana.faro.lastNavigationId", Kp)) && void 0 !== ip ? ip : Tc;
          return {
            id: pp.id,
            rating: pp.rating,
            navigation_type: pp.navigationType,
            navigation_entry_id: cp
          }
        }
        pushMeasurement(pp, ip) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: pp
          }, {
            context: ip
          })
        }
        addIfPresent(pp, ip, cp) {
          cp && (pp[ip] = cp)
        }
        addNumberIfDefined(pp, ip, cp) {
          void 0 !== cp && (pp[ip] = cp)
        }
      },
      BO = class extends oc {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = Ic
        }
        initialize() {
          this.logDebug("Initializing"), new JO(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const NO = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function TO() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const ip of pp)
        if ("traceparent" === ip.name) {
          if (!NO.test(ip.description)) continue;
          const [, pp, cp] = ip.description.split("-");
          if (null != pp && null != cp) return {
            traceId: pp,
            spanId: cp
          };
          break
        }
    }

    function fO(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: cp,
        monoNow: Op
      } = ip;
      return Math.min(cp, cp - (Op - pp))
    }

    function bO(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [cp, Op] of Object.entries(ip)) {
        const ip = pp[cp];
        return null != ip && (Ep(Op) ? Op.includes(ip) : ip === Op)
      }
      return !0
    }

    function hO(pp) {
      const {
        connectEnd: ip,
        connectStart: cp,
        decodedBodySize: Op,
        domainLookupEnd: op,
        domainLookupStart: Ip,
        duration: Sp,
        encodedBodySize: xp,
        fetchStart: Lp,
        initiatorType: Yp,
        name: Dp,
        nextHopProtocol: Ap,
        redirectEnd: Pp,
        redirectStart: Wp,
        renderBlockingStatus: yp,
        requestStart: Up,
        responseEnd: wp,
        responseStart: vp,
        responseStatus: tp,
        secureConnectionStart: Hp,
        transferSize: dp,
        workerStart: ep
      } = pp;
      return {
        name: Dp,
        httpHost: nO(Dp),
        duration: FO(Sp),
        tcpHandshakeTime: FO(ip - cp),
        dnsLookupTime: FO(op - Ip),
        tlsNegotiationTime: FO(ip - Hp),
        responseStatus: FO(tp),
        redirectTime: FO(Pp - Wp),
        requestTime: FO(vp - Up),
        responseTime: FO(wp - vp),
        fetchTime: FO(wp - Lp),
        serviceWorkerTime: FO(ep > 0 ? Lp - ep : 0),
        decodedBodySize: FO(Op),
        encodedBodySize: FO(xp),
        cacheHitStatus: function() {
          let pp = "fullLoad";
          0 === dp ? Op > 0 && (pp = "cache") : null != tp ? 304 === tp && (pp = "conditionalFetch") : xp > 0 && dp < xp && (pp = "conditionalFetch");
          return pp
        }(),
        renderBlockingStatus: FO(yp),
        protocol: Ap,
        initiatorType: Yp,
        visibilityState: document.visibilityState,
        ttfb: FO(vp - Up),
        transferSize: FO(dp)
      }
    }

    function aO(pp) {
      const {
        activationStart: ip,
        domComplete: cp,
        domContentLoadedEventEnd: Op,
        domContentLoadedEventStart: op,
        domInteractive: Ip,
        fetchStart: Sp,
        loadEventEnd: xp,
        loadEventStart: Lp,
        responseStart: Yp,
        type: Dp
      } = pp, Ap = function() {
        var pp;
        return null != (null === (pp = performance.timing) || void 0 === pp ? void 0 : pp.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Pi(Pi({}, hO(pp)), {}, {
        pageLoadTime: FO(cp - Sp),
        documentParsingTime: FO(Ap ? Ip - Ap : null),
        domProcessingTime: FO(cp - Ip),
        domContentLoadHandlerTime: FO(Op - op),
        onLoadTime: FO(xp - Lp),
        ttfb: FO(Math.max(Yp - (null !== ip && void 0 !== ip ? ip : 0), 0)),
        type: Dp
      })
    }

    function nO(pp) {
      try {
        return new URL(pp).host || Tc
      } catch (ip) {
        return Tc
      }
    }

    function FO(pp) {
      return null == pp ? Tc : "number" === typeof pp ? Math.round(pp > 0 ? pp : 0).toString() : pp.toString()
    }
    const gO = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function GO(pp, ip, cp, Op, op, Ip, Sp) {
      try {
        var xp = pp[Ip](Sp),
          Lp = xp.value
      } catch (pp) {
        return void cp(pp)
      }
      xp.done ? ip(Lp) : Promise.resolve(Lp).then(Op, op)
    }

    function rO(pp) {
      return function() {
        var ip = this,
          cp = arguments;
        return new Promise((function(Op, op) {
          var Ip = pp.apply(ip, cp);

          function Sp(pp) {
            GO(Ip, Op, op, Sp, xp, "next", pp)
          }

          function xp(pp) {
            GO(Ip, Op, op, Sp, xp, "throw", pp)
          }
          Sp(void 0)
        }))
      }
    }
    const ZO = new ec;
    var zO = class extends oc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = Ic
      }
      initialize() {
        var pp = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let ip = !1;
        const cp = () => {
          ! function(pp) {
            if ("complete" === document.readyState) pp();
            else {
              const ip = () => {
                "complete" === document.readyState && (pp(), document.removeEventListener("readystatechange", ip))
              };
              document.addEventListener("readystatechange", ip)
            }
          }(rO((function*() {
            if (ip) return;
            const cp = pp.api.pushEvent,
              {
                faroNavigationId: Op
              } = yield function(pp) {
                let ip;
                const cp = new Promise((pp => {
                  ip = pp
                }));
                return new PerformanceObserver((cp => {
                  var Op;
                  const [op] = cp.getEntries();
                  if (null == op || zp(op.name)) return;
                  const Ip = op.toJSON();
                  let Sp = TO(null === Ip || void 0 === Ip ? void 0 : Ip.serverTiming);
                  const xp = null !== (Op = ci("com.grafana.faro.lastNavigationId", Kp)) && void 0 !== Op ? Op : Tc,
                    Lp = Pi(Pi({}, aO(Ip)), {}, {
                      faroNavigationId: Hi(),
                      faroPreviousNavigationId: xp
                    });
                  Oi("com.grafana.faro.lastNavigationId", Lp.faroNavigationId, Kp), pp("faro.performance.navigation", Lp, void 0, {
                    spanContext: Sp,
                    timestampOverwriteMs: fO(Ip.startTime)
                  }), ip(Lp)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), cp
              }(cp);
            ip || null == Op || function(pp, ip, cp, Op) {
              const op = Op.trackResources;
              new PerformanceObserver((Op => {
                const Ip = Op.getEntries(),
                  Sp = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const xp of Ip) {
                  if (zp(xp.name)) continue;
                  null === cp || void 0 === cp || cp.notify({
                    type: "resource"
                  });
                  const Op = xp.toJSON();
                  let Ip = TO(null === Op || void 0 === Op ? void 0 : Op.serverTiming);
                  (null == op && bO(Op, gO) || op) && ip("faro.performance.resource", Pi(Pi({}, hO(Op)), {}, {
                    faroNavigationId: pp,
                    faroResourceId: Hi()
                  }), void 0, {
                    spanContext: Ip,
                    timestampOverwriteMs: fO(Op.startTime, Sp)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Op, cp, ZO, pp.config)
          })))
        };
        this.cancelInitialization = () => {
          ip = !0, document.removeEventListener("prerenderingchange", cp)
        }, document.prerendering ? document.addEventListener("prerenderingchange", cp, {
          once: !0
        }) : cp()
      }
      destroy() {
        var pp;
        null === (pp = this.cancelInitialization) || void 0 === pp || pp.call(this), this.cancelInitialization = void 0
      }
    };
    const sO = "data-faro-user-action-name",
      KO = sO.replace(/-name$/, "-timeout"),
      VO = 1e3;

    function po(pp) {
      return `data-${(pp.startsWith("data-")?pp.slice(5):pp).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function io(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gi;
      if (void 0 === pp) return ip;
      let Op = NaN;
      try {
        Op = "string" === typeof pp && "" === pp.trim() ? NaN : Number(pp)
      } catch (op) {}
      return !Number.isFinite(Op) || Op <= 0 ? (cp(`initialActivityTimeout must be a finite number greater than zero; using ${ip} ms`), ip) : Op > 1e3 ? (cp(`initialActivityTimeout cannot exceed ${VO} ms; clamping to the maximum`), VO) : Op
    }

    function co(pp, ip, cp) {
      return void 0 !== pp && window.clearTimeout(pp), window.setTimeout((() => {
        ip()
      }), cp)
    }

    function Oo(pp) {
      return pp.type === dc
    }
    let oo, Io;

    function So() {
      return oo || (oo = new ec), Io || (Io = new MutationObserver(((pp, ip) => {
        oo.notify({
          type: "dom-mutation"
        })
      })), Io.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), oo
    }
    const xo = "fetch",
      Lo = "xhr";
    let Yo, Do, Ao, Po, Wo = !1;

    function yo() {
      if (Yo) return Yo;

      function pp(pp) {
        Yo.notify({
          type: Hc,
          request: pp
        })
      }

      function ip(pp) {
        Yo.notify({
          type: dc,
          request: pp
        })
      }
      return Yo = new ec, Wo || (! function(pp) {
        let {
          onRequestEnd: ip,
          onRequestStart: cp
        } = pp;
        Ao || (Ao = window.fetch);
        window.fetch = function() {
          var pp, Op;
          const op = null !== (pp = sp(arguments[0])) && void 0 !== pp ? pp : "",
            Ip = zp(op),
            Sp = (null !== (Op = arguments[1]) && void 0 !== Op ? Op : {}).method,
            xp = Hi();
          return Ip || cp({
            url: op,
            method: Sp,
            requestId: xp,
            apiType: xo
          }), Ao.apply(this, arguments).then((pp => (Ip || ip({
            url: op,
            method: Sp,
            requestId: xp,
            apiType: xo
          }), pp))).catch((pp => {
            throw Ip || ip({
              url: op,
              method: Sp,
              requestId: xp,
              apiType: xo
            }), pp
          }))
        }
      }({
        onRequestStart: pp,
        onRequestEnd: ip
      }), function(pp) {
        let {
          onRequestStart: ip,
          onRequestEnd: cp
        } = pp;
        Do || (Do = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const pp = arguments[1],
            Op = zp(pp),
            op = arguments[0],
            Ip = Hi();
          this.addEventListener("loadstart", (function() {
            Op || ip({
              url: pp,
              method: op,
              requestId: Ip,
              apiType: Lo
            })
          })), this.addEventListener("load", (function() {
            Op || cp({
              url: pp,
              method: op,
              requestId: Ip,
              apiType: Lo
            })
          })), this.addEventListener("error", (function() {
            Op || cp({
              url: pp,
              method: op,
              requestId: Ip,
              apiType: Lo
            })
          })), this.addEventListener("abort", (function() {
            Op || cp({
              url: pp,
              method: op,
              requestId: Ip,
              apiType: Lo
            })
          })), Do.apply(this, arguments)
        }
      }({
        onRequestStart: pp,
        onRequestEnd: ip
      }), Wo = !0), Yo
    }
    let Uo, wo = !1;
    let vo = function(pp) {
      return pp[pp.Started = 0] = "Started", pp[pp.Halted = 1] = "Halted", pp[pp.Cancelled = 2] = "Cancelled", pp[pp.Ended = 3] = "Ended", pp
    }({});
    var to = class {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = pp, this.logDebug = ip, this.initialActivityTimeout = cp, this.http = yo(), this.dom = So(), this.perf = (Po || (Po = new ec), wo || (Uo = ZO.subscribe((pp => {
          "resource" === pp.type && Po.notify({
            type: "resource-entry"
          })
        })), wo = !0), Po), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new ec).merge(this.http, this.dom, this.perf).takeWhile((() => [vo.Started, vo.Halted].includes(this.userAction.getState()))).filter((pp => !!(this.userAction.getState() !== vo.Halted || Oo(pp) && this.runningRequests.has(pp.request.requestId)))).subscribe((pp => {
          (function(pp) {
            return pp.type === Hc
          })(pp) && this.runningRequests.set(pp.request.requestId, pp.request), Oo(pp) && this.runningRequests.delete(pp.request.requestId), Oo(pp) ? this.userAction.getState() === vo.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((pp => [vo.Ended, vo.Cancelled].includes(pp))).first().subscribe((() => this.cleanup())), this.startupTid = co(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === vo.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === vo.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = co(this.haltTid, (() => {
          this.userAction.getState() === vo.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var pp, ip;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (pp = this.allMonitorsSub) || void 0 === pp || pp.unsubscribe(), null === (ip = this.stateSub) || void 0 === ip || ip.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(pp) {
        void 0 !== pp && window.clearTimeout(pp)
      }
    };

    function Ho(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Gi;
      var cp;
      const {
        api: Op,
        config: op,
        internalLogger: Ip
      } = pp, Sp = io(null === (cp = op.userActionsInstrumentation) || void 0 === cp ? void 0 : cp.initialActivityTimeout, 100, ip);
      return {
        processUserEvent: function(pp) {
          var ip, cp;
          const Ip = null !== (ip = null === (cp = op.userActionsInstrumentation) || void 0 === cp ? void 0 : cp.dataAttributeName) && void 0 !== ip ? ip : sO,
            Sp = pp.target;
          if (!(Sp instanceof Element)) return;
          const xp = function(pp, ip) {
              let cp = pp;
              for (; cp;) {
                if (cp.hasAttribute(ip)) return cp;
                cp = cp.parentElement
              }
              return null
            }(Sp, po(Ip)),
            Lp = function(pp, ip) {
              if (!pp) return;
              const cp = function(pp) {
                  return po(pp).slice(5).replace(/-(.)/g, ((pp, ip) => ip.toUpperCase()))
                }(ip),
                Op = pp.dataset;
              for (const op in Op)
                if (op === cp) return Op[op]
            }(xp, Ip);
          if (!xp || !Lp) return;
          const Yp = function(pp, ip) {
            const cp = pp.getAttribute(function(pp) {
              const ip = po(pp);
              return ip.endsWith("-name") ? `${ip.slice(0,-5)}-timeout` : `${ip}-timeout`
            }(ip));
            return null === cp ? void 0 : Number(cp)
          }(xp, Ip);
          Op.startUserAction(Lp, {}, {
            triggerName: pp.type,
            initialActivityTimeout: Yp
          })
        },
        processUserActionStarted: function(pp, cp) {
          const Op = pp,
            op = io(cp, Sp, ip);
          new to(Op, Ip.debug, op).attach()
        }
      }
    }
    const eo = "user_action_start",
      uo = {
        Normal: "normal",
        Critical: "critical"
      };
    var jo = class {
        constructor() {
          this.buffer = []
        }
        addItem(pp) {
          this.buffer.push(pp)
        }
        flushBuffer(pp) {
          if (Cp(pp))
            for (const ip of this.buffer) pp(ip);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      ko = class extends ec {
        constructor(pp) {
          let {
            name: ip,
            parentId: cp,
            trigger: Op,
            transports: op,
            attributes: Ip,
            trackUserActionsExcludeItem: Sp,
            importance: xp = uo.Normal,
            pushEvent: Lp
          } = pp;
          super(), this.name = ip, this.attributes = Ip, this.id = Hi(), this.trigger = Op, this.parentId = null !== cp && void 0 !== cp ? cp : this.id, this.trackUserActionsExcludeItem = Sp, this.importance = xp, this._pushEvent = Lp, this._itemBuffer = new jo, this._transports = op, this._state = 0, this._start()
        }
        addItem(pp) {
          return 0 === this._state && (this._itemBuffer.addItem(pp), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = yi(), this._startTimeMono = Ui())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((pp => {
            this._transports.execute(pp)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const pp = yi(),
            ip = Ui() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((pp => {
            if (function(pp, ip) {
                return (null === ip || void 0 === ip ? void 0 : ip(pp)) || "measurement" === pp.type && "web-vitals" === pp.payload.type
              }(pp, this.trackUserActionsExcludeItem)) return void this._transports.execute(pp);
            const ip = ic(ic({}, pp), {}, {
              payload: ic(ic({}, pp.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(ip)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", ic({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: pp.toString(),
            userActionDuration: ip.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Ti(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: pp => (pp.action = {
              id: this.id,
              name: this.name
            }, pp)
          })
        }
        getState() {
          return this._state
        }
      };
    const mo = new ec;

    function Ro(pp, ip) {
      return !!pp && (0 === (null === pp || void 0 === pp ? void 0 : pp.getState()) && (pp.addItem(ip), !0))
    }
    var qo = class extends oc {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = Ic
        }
        initialize() {
          const {
            processUserEvent: pp,
            processUserActionStarted: ip
          } = Ho(Up, (pp => this.logWarn(pp)));
          this._processUserEvent = pp, this._processKeydown = ip => {
            [" ", "Enter"].includes(ip.key) && pp(ip)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = mo.subscribe((pp => {
            let {
              type: cp,
              userAction: Op,
              initialActivityTimeout: op
            } = pp;
            "user_action_start" === cp && ip(Op, op)
          }))
        }
        destroy() {
          var pp;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (pp = this._userActionSub) || void 0 === pp || pp.unsubscribe()
        }
      },
      Mo = class extends oc {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = Ic, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(pp) {
          const ip = {
            blockedURI: pp.blockedURI,
            columnNumber: pp.columnNumber,
            disposition: pp.disposition,
            documentURI: pp.documentURI,
            effectiveDirective: pp.effectiveDirective,
            lineNumber: pp.lineNumber,
            originalPolicy: pp.originalPolicy,
            referrer: pp.referrer,
            sample: pp.sample,
            sourceFile: pp.sourceFile,
            statusCode: pp.statusCode,
            violatedDirective: pp.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Ti(ip))
        }
      };
    var Co = class extends ec {
      constructor(pp, ip) {
        var cp, Op, op, Ip;
        super(), this._tracking = !1, this.eventsObservable = pp, this._options = {
          inactivityMs: null !== (cp = null === ip || void 0 === ip ? void 0 : ip.inactivityMs) && void 0 !== cp ? cp : 100,
          drainTimeoutMs: null !== (Op = null === ip || void 0 === ip ? void 0 : ip.drainTimeoutMs) && void 0 !== Op ? Op : 1e4,
          isOperationStart: null !== (op = null === ip || void 0 === ip ? void 0 : ip.isOperationStart) && void 0 !== op ? op : () => {},
          isOperationEnd: null !== (Ip = null === ip || void 0 === ip ? void 0 : ip.isOperationEnd) && void 0 !== Ip ? Ip : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((pp => {
          var ip;
          this._lastEventTime = Ui(), null === (ip = this._currentEvents) || void 0 === ip || ip.push(pp);
          const cp = this._options.isOperationStart(pp);
          var Op;
          cp && (null === (Op = this._activeOperations) || void 0 === Op || Op.set(cp, !0));
          const op = this._options.isOperationEnd(pp);
          var Ip;
          op && (null === (Ip = this._activeOperations) || void 0 === Ip || Ip.delete(op));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Ui(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let pp;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), pp = this.hasActiveOperations() ? Ui() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: pp
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Eo(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Eo(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(pp) {
        pp && clearTimeout(pp)
      }
    };

    function Eo(pp, ip, cp) {
      return pp && clearTimeout(pp), pp = setTimeout((() => {
        ip()
      }), cp)
    }
    let Xo;
    const Qo = new Set,
      Jo = new Map;
    let Bo, No, To, fo, bo, ho, ao, no, Fo = !1;
    var go = class extends oc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = Ic
      }
      initialize() {
        const pp = yo(),
          ip = So(),
          cp = function() {
            function pp(pp, ip) {
              const cp = null !== ip && void 0 !== ip ? ip : location.href;
              cp !== No && (Bo.notify({
                type: "url-change",
                from: No,
                to: cp,
                trigger: pp
              }), No = cp)
            }
            if (Bo || (Bo = new ec, No = location.href), !Fo)
              if ("navigation" in window && "NavigateEvent" in window) {
                ao = ip => {
                  try {
                    const cp = null === ip || void 0 === ip ? void 0 : ip.destination;
                    (null === cp || void 0 === cp ? void 0 : cp.sameDocument) && "string" === typeof cp.url && pp("navigate", cp.url)
                  } catch (cp) {}
                }, window.navigation.addEventListener("navigate", ao);
                const ip = window.NavigateEvent;
                ip && ip.prototype && "function" === typeof ip.prototype.intercept && (no || (no = ip.prototype.intercept), ip.prototype.intercept = function(ip) {
                  try {
                    const ip = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      cp = null === this || void 0 === this ? void 0 : this.destination;
                    ip && cp && !1 === cp.sameDocument && "string" === typeof cp.url && pp("navigate-intercept", cp.url)
                  } catch (cp) {}
                  return no.call(this, ip)
                }), Fo = !0
              } else To || (To = window.history.pushState), window.history.pushState = function() {
                for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
                const op = To.apply(window.history, cp);
                return pp("pushState"), op
              }, fo || (fo = window.history.replaceState), window.history.replaceState = function() {
                for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
                const op = fo.apply(window.history, cp);
                return pp("replaceState"), op
              }, bo = () => pp("popstate"), ho = () => pp("hashchange"), window.addEventListener("popstate", bo), window.addEventListener("hashchange", ho), Fo = !0;
            return Bo
          }(),
          Op = (op = ["pointerdown", "keydown"], Xo || (Xo = new ec), op.forEach((pp => {
            if (!Qo.has(pp)) {
              const ip = () => {
                Xo.notify({
                  type: "interaction",
                  name: pp
                })
              };
              window.addEventListener(pp, ip), Qo.add(pp), Jo.set(pp, ip)
            }
          })), Xo);
        var op;
        const Ip = new Co((new ec).merge(pp, ip, cp), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: pp => function(pp) {
            return pp.type === Hc
          }(pp) ? pp.request.requestId : void 0,
          isOperationEnd: pp => function(pp) {
            return pp.type === dc
          }(pp) ? pp.request.requestId : void 0
        });
        Ip.filter((pp => "tracking-ended" === pp.message)).subscribe((pp => {
          var ip, cp;
          if ((null === (ip = pp.events) || void 0 === ip ? void 0 : ip.some((pp => "url-change" === pp.type))) && (null === (cp = pp.events) || void 0 === cp ? void 0 : cp.some((pp => "dom-mutation" === pp.type)))) {
            var Op;
            const ip = null === (Op = pp.events) || void 0 === Op ? void 0 : Op.find((pp => "url-change" === pp.type));
            Up.api.pushEvent("faro.navigation", {
              fromUrl: null === ip || void 0 === ip ? void 0 : ip.from,
              toUrl: null === ip || void 0 === ip ? void 0 : ip.to,
              sameDocument: String(!0),
              duration: pp.duration
            })
          }
        })), Op.subscribe((() => {
          Ip.startTracking()
        }))
      }
    };

    function Go() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ip = [new qo, new Nc, new BO, new Sc, new fc, new go];
      return !1 !== pp.enablePerformanceInstrumentation && ip.unshift(new zO), !1 !== pp.enableContentSecurityPolicyInstrumentation && ip.push(new Mo), !1 !== pp.captureConsole && ip.push(new Jc), ip
    }
    var ro = cp(6841);
    let Zo, zo;

    function so() {
      const pp = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Zo === pp && zo || (zo = new ro.UAParser(pp).getResult(), Zo = pp), zo
    }
    const Ko = () => {
        const {
          browser: pp,
          os: ip,
          ua: cp
        } = so(), {
          name: Op,
          version: op
        } = pp, {
          name: Ip,
          version: Sp
        } = ip, xp = navigator.language, Lp = cp.includes("Mobi"), Yp = function() {
          if (!Op || !op) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Op && void 0 !== Op ? Op : Tc,
            version: null !== op && void 0 !== op ? op : Tc,
            os: `${null!==Ip&&void 0!==Ip?Ip:Tc} ${null!==Sp&&void 0!==Sp?Sp:Tc}`,
            userAgent: null !== cp && void 0 !== cp ? cp : Tc,
            language: null !== xp && void 0 !== xp ? xp : Tc,
            mobile: Lp,
            brands: null !== Yp && void 0 !== Yp ? Yp : Tc,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Vo = () => {
        const {
          name: pp,
          version: ip
        } = so().os;
        if (!pp && !ip) return {};
        const cp = {};
        return pp && (cp.name = pp), ip && (cp.version = ip), {
          os: cp
        }
      };

    function pI(pp) {
      var ip, cp, Op;
      return {
        id: null !== (ip = null === (cp = Up.config) || void 0 === cp || null === (cp = cp.sessionTracking) || void 0 === cp || null === (Op = cp.generateSessionId) || void 0 === Op ? void 0 : Op.call(cp)) && void 0 !== ip ? ip : Hi(),
        attributes: pp
      }
    }
    const iI = () => ({
      sdk: {
        name: "faro-web",
        version: Ic
      }
    });
    var cI = class extends Oc {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let OI = function(pp) {
      return pp.EXCEPTION = "exception", pp.LOG = "log", pp.MEASUREMENT = "measurement", pp.TRACE = "trace", pp.EVENT = "event", pp
    }({});
    const oI = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function II(pp, ip) {
      var cp, Op;
      if (void 0 === ip) return pp;
      if (void 0 === pp) return {
        resourceSpans: ip
      };
      const op = null === (cp = pp.resourceSpans) || void 0 === cp ? void 0 : cp[0];
      if (void 0 === op) return pp;
      const Ip = (null === op || void 0 === op ? void 0 : op.scopeSpans) || [],
        Sp = (null === ip || void 0 === ip || null === (Op = ip[0]) || void 0 === Op ? void 0 : Op.scopeSpans) || [];
      return ic(ic({}, pp), {}, {
        resourceSpans: [ic(ic({}, op), {}, {
          scopeSpans: [...Ip, ...Sp]
        })]
      })
    }

    function SI(pp) {
      let ip = {
        meta: {}
      };
      return void 0 !== pp[0] && (ip.meta = pp[0].meta), pp.forEach((pp => {
        switch (pp.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const cp = oI[pp.type],
              Op = ip[cp];
            ip = ic(ic({}, ip), {}, {
              [cp]: void 0 === Op ? [pp.payload] : [...Op, pp.payload]
            });
            break
          }
          case "trace":
            ip = ic(ic({}, ip), {}, {
              traces: II(ip.traces, pp.payload.resourceSpans)
            })
        }
      })), ip
    }
    var xI = class extends cI {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = pp, this.name = "@grafana/faro-web-sdk:transport-console", this.version = Ic
      }
      send(pp) {
        var ip;
        return this.unpatchedConsole[null !== (ip = this.options.level) && void 0 !== ip ? ip : uc.DEBUG]("New event", SI([pp]))
      }
    };
    const LI = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      YI = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      DI = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      AI = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      PI = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      WI = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function yI(pp) {
      let {
        weekday: ip,
        day: cp,
        month: Op,
        year: op,
        hour: Ip,
        minute: Sp,
        second: xp
      } = pp;
      if (op < 1900 || cp < 1 || Ip > 23 || Sp > 59 || xp > 60) return;
      const Lp = 60 === xp,
        Yp = new Date(0);
      return Yp.setUTCFullYear(op, Op, cp), Yp.setUTCHours(Ip, Sp, Lp ? 59 : xp, 0), Yp.getUTCDay() === ip && Yp.getUTCDate() === cp && Yp.getUTCMonth() === Op && Yp.getUTCFullYear() === op && Yp.getUTCHours() === Ip && Yp.getUTCMinutes() === Sp && Yp.getUTCSeconds() === (Lp ? 59 : xp) ? Yp.getTime() + (Lp ? 1e3 : 0) : void 0
    }
    var UI = class {
      constructor(pp) {
        this.options = pp, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var pp = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const ip = this.sequence++;
        let cp = !1;
        return {
          deliver: function() {
            var cp = rO((function*(cp) {
              const Op = pp.options.getNow();
              let op, Ip = 0;
              for (;;) {
                var Sp, xp, Lp;
                const Yp = pp.options.retry.maxAttempts - Ip,
                  Dp = yield pp.runAttempt((() => cp(Yp, pp.unloading)), Ip > 0);
                if (Ip += Dp.attemptsMade, "success" === Dp.kind) return {
                  kind: "success",
                  attempts: Ip,
                  elapsedTimeMs: pp.options.getNow() - Op
                };
                if (op = Dp.failure, "terminal" === Dp.kind || pp.unloading) return {
                  kind: "terminal",
                  attempts: Ip,
                  elapsedTimeMs: pp.options.getNow() - Op,
                  failure: op
                };
                if (Ip >= pp.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Ip,
                  elapsedTimeMs: pp.options.getNow() - Op,
                  failure: op,
                  reason: "retries-exhausted"
                };
                if (null != Dp.retryAfterMs && Dp.retryAfterMs > pp.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Ip,
                  elapsedTimeMs: pp.options.getNow() - Op,
                  failure: op,
                  reason: "retry-after-too-long"
                };
                const Ap = Math.min(null !== (Sp = Dp.retryAfterMs) && void 0 !== Sp ? Sp : pp.options.retry.initialBackoffMs * Math.pow(pp.options.retry.backoffMultiplier, Ip - 1), pp.options.retry.maxBackoffMs);
                if (null === (xp = (Lp = pp.options).onRetry) || void 0 === xp || xp.call(Lp, Ap, Ip + 1), yield pp.waitForTurn(ip, Ap)) {
                  const ip = pp.options.retry.maxAttempts - Ip,
                    op = yield pp.runAttempt((() => cp(ip, !0)));
                  return Ip += op.attemptsMade, {
                    kind: "success" === op.kind ? "success" : "terminal",
                    attempts: Ip,
                    elapsedTimeMs: pp.options.getNow() - Op,
                    failure: "success" === op.kind ? void 0 : op.failure
                  }
                }
              }
            }));
            return function(pp) {
              return cp.apply(this, arguments)
            }
          }(),
          release: () => {
            cp || (cp = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const pp = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const ip of pp) ip.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((cp, Op) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const ip = () => {
                this.inProgress--, this.runNextAttempt()
              };
              pp().then((pp => {
                ip(), cp(pp)
              }), (pp => {
                ip(), Op(pp)
              }))
            },
            isRedelivery: ip
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const pp = this.options.getNow(),
            ip = this.attemptQueue.findIndex((ip => {
              let {
                isRedelivery: cp
              } = ip;
              return this.unloading || !cp || pp >= this.nextSendAt
            }));
          if (ip < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - pp)));
          const [cp] = this.attemptQueue.splice(ip, 1);
          cp.isRedelivery && !this.unloading && (this.nextSendAt = pp + 1), cp.run()
        }
      }
      waitForTurn(pp, ip) {
        const cp = Math.min(ip * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((ip => {
          this.waiting.push({
            sequence: pp,
            readyAt: this.options.getNow() + cp,
            resolve: ip
          }), this.waiting.sort(((pp, ip) => pp.readyAt === ip.readyAt ? pp.sequence - ip.sequence : pp.readyAt - ip.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const pp = this.waiting[0],
          ip = pp.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const ip = this.waiting.indexOf(pp);
          ip >= 0 && this.waiting.splice(ip, 1), pp.resolve(!1), this.scheduleNext()
        }), Math.max(0, ip - this.options.getNow()))
      }
    };

    function wI(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp = {};
        for (var Op in pp)
          if ({}.hasOwnProperty.call(pp, Op)) {
            if (ip.includes(Op)) continue;
            cp[Op] = pp[Op]
          } return cp
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.includes(cp) || {}.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }

    function vI(pp) {
      const {
        size: ip,
        concurrency: cp
      } = pp, Op = [];
      let op = 0;
      const Ip = () => {
        if (op < cp && Op.length) {
          const {
            producer: pp,
            resolve: ip,
            reject: cp
          } = Op.shift();
          op++, pp().then((pp => {
            op--, Ip(), ip(pp)
          }), (pp => {
            op--, Ip(), cp(pp)
          }))
        }
      };
      return {
        add: pp => {
          if (Op.length + op >= ip) throw new Error("Task buffer full");
          return new Promise(((ip, cp) => {
            Op.push({
              producer: pp,
              resolve: ip,
              reject: cp
            }), Ip()
          }))
        }
      }
    }
    const tI = ["headers"],
      HI = ["keepalive", "signal"],
      dI = new Set([408, 425, 429, 500, 502, 503, 504]),
      eI = new Set([429, 503]);
    let uI = 0,
      jI = 0;
    var kI = class extends Error {};
    var mI = class extends cI {
      constructor(pp) {
        var ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp;
        super(), this.options = pp, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = Ic, this.pendingCustomSends = 0, this.getNow = null !== (ip = pp.getNow) && void 0 !== ip ? ip : Date.now, this.requestTimeoutMs = null !== (cp = pp.requestTimeoutMs) && void 0 !== cp ? cp : 1e4, this.compressionEnabled = null !== (Op = pp.requestCompression) && void 0 !== Op && Op && "undefined" !== typeof CompressionStream, pp.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new UI({
          bufferSize: null !== (op = pp.bufferSize) && void 0 !== op ? op : 30,
          concurrency: null !== (Ip = pp.concurrency) && void 0 !== Ip ? Ip : 5,
          retry: {
            maxAttempts: null !== (Sp = null === (xp = pp.retry) || void 0 === xp ? void 0 : xp.maxAttempts) && void 0 !== Sp ? Sp : 3,
            initialBackoffMs: null !== (Lp = null !== (Yp = null === (Dp = pp.retry) || void 0 === Dp ? void 0 : Dp.initialBackoffMs) && void 0 !== Yp ? Yp : pp.defaultRateLimitBackoffMs) && void 0 !== Lp ? Lp : 1e3,
            maxBackoffMs: null !== (Ap = null === (Pp = pp.retry) || void 0 === Pp ? void 0 : Pp.maxBackoffMs) && void 0 !== Ap ? Ap : 3e4,
            backoffMultiplier: null !== (Wp = null === (yp = pp.retry) || void 0 === yp ? void 0 : yp.backoffMultiplier) && void 0 !== Wp ? Wp : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Up = pp.getRandom) && void 0 !== Up ? Up : Math.random,
          onRetry: (pp, ip) => {
            this.logDebug(`Retrying failed request after ${pp}ms. Attempt ${ip}.`)
          }
        }), this.customPromiseBuffer = vI({
          size: null !== (wp = pp.bufferSize) && void 0 !== wp ? wp : 30,
          concurrency: null !== (vp = pp.concurrency) && void 0 !== vp ? vp : 5
        }), this.defaultPromiseBuffer = {
          add: pp => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(pp);
            const ip = this.deliveryQueue.reserve();
            if (!ip) throw new Error("Task buffer full");
            return this.runBufferedTask(ip, pp)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (pp => {
          pp.persisted && this.deliveryQueue.resume()
        })))
      }
      send(pp) {
        var ip = this;
        return rO((function*() {
          const cp = ip.promiseBuffer;
          if (cp !== ip.defaultPromiseBuffer || cp.add !== ip.defaultBufferAdd) {
            ip.pendingCustomSends++;
            try {
              yield cp.add((() => ip.deliver(pp)))
            } catch (Op) {
              ip.logError("Permanent delivery failure", {
                error: Op,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              ip.pendingCustomSends--
            }
          } else yield ip.deliver(pp)
        }))()
      }
      runBufferedTask(pp, ip) {
        return rO((function*() {
          let cp;
          try {
            return yield pp.deliver(rO((function*() {
              return cp = yield ip(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), cp
          } finally {
            pp.release()
          }
        }))()
      }
      deliver(pp) {
        var ip = this;
        return rO((function*() {
          const cp = ip.deliveryQueue.reserve();
          if (cp) try {
            const Op = yield ip.prepareRequest(pp), op = yield cp.deliver(((pp, cp) => ip.performAttempt(Op, pp, cp)));
            "terminal" === op.kind && ip.logError("retries-exhausted" === op.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Pi(Pi({}, op.failure), {}, {
              reason: op.reason,
              attempts: op.attempts,
              elapsedTimeMs: op.elapsedTimeMs
            }))
          } catch (Op) {
            ip.logError("Permanent delivery failure", {
              error: Op,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            cp.release()
          } else ip.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var pp;
        return [this.options.url].concat(null !== (pp = this.config.ignoreUrls) && void 0 !== pp ? pp : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(pp) {
        var ip = this;
        return rO((function*() {
          var cp, Op;
          const op = SI(pp),
            Ip = null === (cp = op.meta.session) || void 0 === cp ? void 0 : cp.id,
            Sp = JSON.stringify(op),
            xp = null !== (Op = ip.options.requestOptions) && void 0 !== Op ? Op : {},
            {
              headers: Lp = {}
            } = xp,
            Yp = wI(xp, tI),
            {
              keepalive: Dp,
              signal: Ap
            } = Yp,
            Pp = wI(Yp, HI),
            Wp = {};
          for (const [pp, ip] of Object.entries(Lp)) Wp[pp] = "function" === typeof ip ? yield ip(): ip;
          let yp = Sp,
            Up = function(pp) {
              return "undefined" === typeof TextEncoder ? pp.length : (new TextEncoder).encode(pp).byteLength
            }(Sp);
          const wp = {};
          return ip.compressionEnabled && (yp = yield ip.compress(Sp), Up = yp.size, wp["Content-Encoding"] = "gzip"), {
            bodySize: Up,
            sessionId: Ip,
            requestInit: Pi({
              method: "POST",
              headers: Pi(Pi(Pi(Pi(Pi({
                "Content-Type": "application/json"
              }, wp), Wp), ip.options.apiKey ? {
                "x-api-key": ip.options.apiKey
              } : {}), Ip ? {
                "x-faro-session-id": Ip
              } : {}), {}, {
                "Idempotency-Key": Hi(20)
              }),
              body: yp
            }, Pp)
          }
        }))()
      }
      performAttempt(pp, ip, cp) {
        var Op = this;
        return rO((function*() {
          var op;
          const Ip = null === (op = Op.options.requestOptions) || void 0 === op ? void 0 : op.signal;
          if (null === Ip || void 0 === Ip ? void 0 : Ip.aborted) return {
            kind: "terminal",
            failure: {
              error: Ip.reason
            },
            attemptsMade: 0
          };
          let Sp = 0;
          try {
            var xp;
            const op = yield Op.fetchWithKeepaliveFallback(pp.requestInit, pp.bodySize, !!cp || (null === (xp = Op.options.requestOptions) || void 0 === xp ? void 0 : xp.keepalive), ip, (() => Sp++));
            if (Op.handleResponse(op, pp.sessionId), op.status >= 200 && op.status < 300) return {
              kind: "success",
              attemptsMade: Sp
            };
            const Ip = {
              status: op.status
            };
            return !dI.has(op.status) || cp ? {
              kind: "terminal",
              failure: Ip,
              attemptsMade: Sp
            } : {
              kind: "retry",
              failure: Ip,
              attemptsMade: Sp,
              retryAfterMs: eI.has(op.status) ? Op.getRetryAfterDelayMs(op) : void 0
            }
          } catch (Lp) {
            const pp = {
              error: Lp
            };
            return (null === Ip || void 0 === Ip ? void 0 : Ip.aborted) || !Op.isFetchNetworkError(Lp) || cp ? {
              kind: "terminal",
              failure: pp,
              attemptsMade: Sp
            } : {
              kind: "retry",
              failure: pp,
              attemptsMade: Sp
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(pp, ip, cp, Op, op) {
        var Ip = this;
        return rO((function*() {
          const Sp = Ip.getNow(),
            xp = Ip.reserveKeepalive(ip, cp);
          try {
            return yield Ip.fetchWithTimeout(Pi(Pi({}, pp), {}, {
              keepalive: xp.keepalive
            }), Ip.requestTimeoutMs, op)
          } catch (Yp) {
            var Lp;
            if (xp.keepalive && Op > 1 && Ip.isFetchNetworkError(Yp) && !(Yp instanceof kI) && !(null === (Lp = Ip.options.requestOptions) || void 0 === Lp || null === (Lp = Lp.signal) || void 0 === Lp ? void 0 : Lp.aborted)) {
              Ip.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const ip = Ip.requestTimeoutMs - (Ip.getNow() - Sp);
              return Ip.fetchWithTimeout(Pi(Pi({}, pp), {}, {
                keepalive: !1
              }), ip, op)
            }
            throw Yp
          } finally {
            xp.release()
          }
        }))()
      }
      fetchWithTimeout(pp, ip, cp) {
        var Op = this;
        return rO((function*() {
          var op;
          const Ip = null === (op = Op.options.requestOptions) || void 0 === op ? void 0 : op.signal;
          if (Op.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return cp(), fetch(Op.options.url, Pi(Pi({}, pp), {}, {
            signal: Ip
          }));
          if (ip <= 0) throw new kI("Request timed out");
          const Sp = new AbortController,
            xp = () => Sp.abort(null === Ip || void 0 === Ip ? void 0 : Ip.reason);
          null === Ip || void 0 === Ip || Ip.addEventListener("abort", xp, {
            once: !0
          });
          let Lp = !1;
          const Yp = setTimeout((() => {
            Lp = !0, Sp.abort()
          }), ip);
          try {
            return cp(), yield fetch(Op.options.url, Pi(Pi({}, pp), {}, {
              signal: Sp.signal
            }))
          } catch (Dp) {
            if (Lp && !(null === Ip || void 0 === Ip ? void 0 : Ip.aborted)) throw new kI("Request timed out");
            throw Dp
          } finally {
            clearTimeout(Yp), null === Ip || void 0 === Ip || Ip.removeEventListener("abort", xp)
          }
        }))()
      }
      getRetryAfterDelayMs(pp) {
        const ip = pp.headers.get("Retry-After");
        if (!ip) return;
        if (/^\d+$/.test(ip)) {
          const pp = 1e3 * Number(ip);
          return Number.isFinite(pp) ? pp : Number.POSITIVE_INFINITY
        }
        const cp = this.getNow(),
          Op = function(pp, ip) {
            const cp = LI.exec(pp);
            if (cp) {
              const [, pp, ip, Op, op, Ip, Sp, xp] = cp;
              return yI({
                weekday: AI.indexOf(pp),
                day: Number(ip),
                month: WI.indexOf(Op),
                year: Number(op),
                hour: Number(Ip),
                minute: Number(Sp),
                second: Number(xp)
              })
            }
            const Op = YI.exec(pp);
            if (Op) {
              const [, pp, cp, Sp, xp, Lp, Yp, Dp] = Op, Ap = new Date(ip);
              if (Number.isNaN(Ap.getTime())) return;
              const Pp = Ap.getUTCFullYear();
              let Wp = 100 * Math.floor(Pp / 100) + Number(xp);
              Wp < Pp && (Wp += 100);
              const yp = WI.indexOf(Sp),
                Up = {
                  month: yp,
                  day: Number(cp),
                  hour: Number(Lp),
                  minute: Number(Yp),
                  second: Number(Dp),
                  millisecond: 0
                },
                wp = {
                  month: Ap.getUTCMonth(),
                  day: Ap.getUTCDate(),
                  hour: Ap.getUTCHours(),
                  minute: Ap.getUTCMinutes(),
                  second: Ap.getUTCSeconds(),
                  millisecond: Ap.getUTCMilliseconds()
                };
              return (Wp > Pp + 50 || Wp === Pp + 50 && (Ip = wp, ((op = Up).month - Ip.month || op.day - Ip.day || op.hour - Ip.hour || op.minute - Ip.minute || op.second - Ip.second || op.millisecond - Ip.millisecond) > 0)) && (Wp -= 100), yI({
                weekday: PI.indexOf(pp),
                day: Number(cp),
                month: yp,
                year: Wp,
                hour: Number(Lp),
                minute: Number(Yp),
                second: Number(Dp)
              })
            }
            var op, Ip;
            const Sp = DI.exec(pp);
            if (!Sp) return;
            const [, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp] = Sp;
            return yI({
              weekday: AI.indexOf(xp),
              day: Number(null !== Yp && void 0 !== Yp ? Yp : Dp),
              month: WI.indexOf(Lp),
              year: Number(yp),
              hour: Number(Ap),
              minute: Number(Pp),
              second: Number(Wp)
            })
          }(ip, cp);
        return null == Op ? void 0 : Math.max(0, Op - cp)
      }
      reserveKeepalive(pp, ip) {
        if (!1 === ip || pp > 6e4 || uI + pp > 6e4 || jI >= 9) return {
          keepalive: !1,
          release: Gi
        };
        uI += pp, jI++;
        let cp = !1;
        return {
          keepalive: !0,
          release: () => {
            cp || (cp = !0, uI -= pp, jI--)
          }
        }
      }
      handleResponse(pp, ip) {
        202 === pp.status && "invalid" === pp.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), ip), pp.text().catch(Gi)
      }
      isFetchNetworkError(pp) {
        return pp instanceof TypeError || pp instanceof kI || pp instanceof DOMException && "AbortError" === pp.name
      }
      compress(pp) {
        return rO((function*() {
          const ip = [],
            cp = new ReadableStream({
              start(ip) {
                ip.enqueue((new TextEncoder).encode(pp)), ip.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: pp,
              value: Op
            } = yield cp.read();
            if (pp) return new Blob(ip);
            ip.push(Op)
          }
        }))()
      }
      extendFaroSession(pp, ip, cp) {
        var Op, op;
        const Ip = pp.sessionTracking;
        if (!(null === Ip || void 0 === Ip ? void 0 : Ip.enabled)) return void ip("Session expired.");
        const {
          fetchUserSession: Sp,
          storeUserSession: xp
        } = gi(Ip), Lp = null === (Op = this.metas.value.session) || void 0 === Op ? void 0 : Op.id, Yp = null === (op = Sp()) || void 0 === op ? void 0 : op.sessionId;
        cp && cp === Lp && cp === Yp ? (Xi({
          fetchUserSession: Sp,
          storeUserSession: xp
        })({
          forceSessionExtend: !0
        }), ip("Session expired; created new session.")) : ip("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const RI = () => {
      const pp = window.k6;
      return {
        k6: Pi({
          isK6Browser: !0
        }, (null === pp || void 0 === pp ? void 0 : pp.testRunId) && {
          testRunId: null === pp || void 0 === pp ? void 0 : pp.testRunId
        })
      }
    };
    let qI, MI;

    function CI() {
      let {
        generatePageId: pp,
        initialPageMeta: ip
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const cp = location.href;
        return Cp(pp) && qI !== cp && (qI = cp, MI = pp(location)), {
          page: Pi(Pi({
            url: cp
          }, MI ? {
            id: MI
          } : {}), ip)
        }
      }
    }

    function EI() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc,
        ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cp = Zi;
      return ip > 0 && (cp.error = ip >= 1 ? function() {
        for (var ip = arguments.length, Op = new Array(ip), op = 0; op < ip; op++) Op[op] = arguments[op];
        pp.error(`${cp.prefix}\n`, ...Op)
      } : Gi, cp.warn = ip >= 2 ? function() {
        for (var ip = arguments.length, Op = new Array(ip), op = 0; op < ip; op++) Op[op] = arguments[op];
        pp.warn(`${cp.prefix}\n`, ...Op)
      } : Gi, cp.info = ip >= 3 ? function() {
        for (var ip = arguments.length, Op = new Array(ip), op = 0; op < ip; op++) Op[op] = arguments[op];
        pp.info(`${cp.prefix}\n`, ...Op)
      } : Gi, cp.debug = ip >= 4 ? function() {
        for (var ip = arguments.length, Op = new Array(ip), op = 0; op < ip; op++) Op[op] = arguments[op];
        pp.debug(`${cp.prefix}\n`, ...Op)
      } : Gi), cp
    }
    const XI = "faro",
      lI = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      QI = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function JI(pp) {
      var ip, cp, op, Ip, Sp, xp;
      const Lp = [],
        Dp = EI(pp.unpatchedConsole, pp.internalLoggerLevel);
      pp.transports ? ((pp.url || pp.apiKey) && Dp.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Lp.push(...pp.transports)) : pp.url ? Lp.push(new mI({
        url: pp.url,
        apiKey: pp.apiKey,
        requestCompression: pp.requestCompression
      })) : Dp.error('either "url" or "transports" must be defined');
      const {
        dedupe: Ap = !0,
        eventDomain: Pp = Op,
        globalObjectKey: Wp = XI,
        instrumentations: yp = Go(),
        internalLoggerLevel: Up = zi,
        isolate: wp = !1,
        logArgsSerializer: vp = Qc,
        metas: tp = NI(pp),
        paused: Hp = !1,
        preventGlobalExposure: dp = !1,
        unpatchedConsole: ep = cc,
        url: jp,
        experimental: kp
      } = pp, mp = wI(pp, QI), Rp = null !== (ip = null === kp || void 0 === kp ? void 0 : kp.trackNavigation) && void 0 !== ip && ip, qp = {
        dataAttributeName: po(null !== (cp = null === (op = pp.userActionsInstrumentation) || void 0 === op ? void 0 : op.dataAttributeName) && void 0 !== cp ? cp : sO),
        excludeItem: null === (Ip = pp.userActionsInstrumentation) || void 0 === Ip ? void 0 : Ip.excludeItem,
        initialActivityTimeout: io(null === (Sp = pp.userActionsInstrumentation) || void 0 === Sp ? void 0 : Sp.initialActivityTimeout, 100, (pp => Dp.warn(pp)))
      };
      return Pi(Pi({}, mp), {}, {
        batching: Pi(Pi({}, lI), pp.batching),
        dedupe: Ap,
        globalObjectKey: Wp,
        instrumentations: BI(yp, pp),
        internalLoggerLevel: Up,
        isolate: wp,
        logArgsSerializer: vp,
        metas: tp,
        parseStacktrace: tc,
        paused: Hp,
        preventGlobalExposure: dp,
        transports: Lp,
        unpatchedConsole: ep,
        eventDomain: Pp,
        ignoreUrls: [...null !== (xp = pp.ignoreUrls) && void 0 !== xp ? xp : [], ...jp ? [jp] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Pi(Pi(Pi({}, Yp), pp.sessionTracking), TI({
          trackGeolocation: pp.trackGeolocation,
          sessionTracking: pp.sessionTracking
        })),
        userActionsInstrumentation: qp,
        experimental: {
          trackNavigation: Rp
        }
      })
    }

    function BI(pp, ip) {
      let {
        experimental: cp
      } = ip;
      var Op;
      const op = null !== (Op = null === cp || void 0 === cp ? void 0 : cp.trackNavigation) && void 0 !== Op && Op;
      return pp.filter((pp => !("@grafana/faro-web-sdk:instrumentation-navigation" === pp.name && !op)))
    }

    function NI(pp) {
      var ip, cp, Op;
      const {
        page: op,
        generatePageId: Ip
      } = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.pageTracking) && void 0 !== ip ? ip : {}, Sp = [Ko, Vo, CI({
        generatePageId: Ip,
        initialPageMeta: op
      }), ...null !== (cp = pp.metas) && void 0 !== cp ? cp : [], iI];
      return Mp(null === (Op = window) || void 0 === Op ? void 0 : Op.k6) ? [...Sp, RI] : Sp
    }

    function TI(pp) {
      let {
        trackGeolocation: ip,
        sessionTracking: cp
      } = pp;
      var Op;
      const op = {};
      return Rp(ip) && (op.geoLocationTrackingEnabled = ip), rp(op) ? {} : {
        session: Pi(Pi({}, null !== (Op = null === cp || void 0 === cp ? void 0 : cp.session) && void 0 !== Op ? Op : {}), {}, {
          overrides: op
        })
      }
    }
    const fI = new WeakSet;

    function bI(pp) {
      return fI.add(pp), pp
    }

    function hI(pp, ip) {
      if (pp.capture) return bI(pp.capture(ip));
      const cp = bI(pp.value);
      return null === ip || void 0 === ip || ip(), cp
    }

    function aI(pp) {
      const ip = `__faroBundleId_${pp}`,
        cp = null === Dp || void 0 === Dp ? void 0 : Dp[ip];
      if ("string" === typeof cp && "" !== cp) return cp;
      const Op = "undefined" !== typeof window ? window[ip] : void 0;
      return "string" === typeof Op && "" !== Op ? Op : void 0
    }

    function nI(pp) {
      var ip, cp;
      const Op = pp.config.app.name,
        op = Op ? function(pp) {
          return null === Dp || void 0 === Dp ? void 0 : Dp[`__faroGitHash_${pp}`]
        }(Op) : void 0,
        Ip = {
          sdk: {
            version: Ic,
            name: "faro"
          },
          app: ic({
            bundleId: Op && aI(Op)
          }, void 0 !== op ? {
            gitHash: op
          } : {})
        },
        Sp = null === (ip = pp.config.sessionTracking) || void 0 === ip ? void 0 : ip.session;
      Sp && pp.api.setSession(Sp), pp.config.app && (Ip.app = ic(ic({}, pp.config.app), Ip.app)), pp.config.user && (Ip.user = pp.config.user), pp.config.view && (Ip.view = pp.config.view), pp.metas.add(Ip, ...null !== (cp = pp.config.metas) && void 0 !== cp ? cp : [])
    }
    var FI = class {
      constructor(pp, ip) {
        var cp, Op;
        this.signalBuffer = [], this.itemLimit = null !== (cp = null === ip || void 0 === ip ? void 0 : ip.itemLimit) && void 0 !== cp ? cp : 50, this.sendTimeout = null !== (Op = null === ip || void 0 === ip ? void 0 : ip.sendTimeout) && void 0 !== Op ? Op : 250, this.paused = (null === ip || void 0 === ip ? void 0 : ip.paused) || !1, this.sendFn = pp, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(pp) {
        this.paused || (this.signalBuffer.push(pp), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(pp) {
        const ip = new Map;
        return pp.forEach((pp => {
          const cp = JSON.stringify(pp.meta);
          let Op = ip.get(cp);
          Op = void 0 === Op ? [pp] : [...Op, pp], ip.set(cp, Op)
        })), Array.from(ip.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const pp = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(pp).forEach(this.sendFn)
        } catch (ip) {
          throw this.signalBuffer = [...pp, ...this.signalBuffer], this.trimBufferToLimit(), ip
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function gI(pp, ip, cp, Op) {
      var op;
      ip.debug("Initializing transports");
      const Ip = [];
      let Sp = [];
      const xp = pp => {
        let ip = pp;
        for (const Op of Sp) {
          const pp = ip.map(Op).filter(Boolean);
          if (0 === pp.length) return [];
          ip = GI(pp, cp)
        }
        return ip
      };
      let Lp;
      (null === (op = cp.batching) || void 0 === op ? void 0 : op.enabled) && (Lp = new FI((pp => {
        const cp = xp(pp);
        if (0 !== cp.length)
          for (const Op of Ip) ip.debug(`Transporting item using ${Op.name}\n`, cp), Op.isBatched() && Op.send(cp)
      }), {
        sendTimeout: cp.batching.sendTimeout,
        itemLimit: cp.batching.itemLimit,
        paused: cp.paused
      }));
      return {
        add: function() {
          ip.debug("Adding transports");
          for (var op = arguments.length, Sp = new Array(op), xp = 0; xp < op; xp++) Sp[xp] = arguments[xp];
          Sp.forEach((op => {
            ip.debug(`Adding "${op.name}" transport`), Ip.some((pp => pp === op)) ? ip.warn(`Transport ${op.name} is already added`) : (op.unpatchedConsole = pp, op.internalLogger = ip, op.config = cp, op.metas = Op, Ip.push(op))
          }))
        },
        addBeforeSendHooks: function() {
          ip.debug("Adding beforeSendHooks\n", Sp);
          for (var pp = arguments.length, cp = new Array(pp), Op = 0; Op < pp; Op++) cp[Op] = arguments[Op];
          cp.forEach((pp => {
            pp && Sp.push(pp)
          }))
        },
        getBeforeSendHooks: () => [...Sp],
        execute: pp => {
          var op;
          if (!cp.paused && ni(Op).shouldCapture()) {
            if (Ap = pp.meta, !fI.has(Ap)) {
              var Sp, Yp, Dp;
              const ip = null === (Sp = Op.value.session) || void 0 === Sp ? void 0 : Sp.id,
                op = hI(Op);
              if (cp.paused) return;
              const Ip = ic({}, pp.meta);
              (null === (Yp = Ip.session) || void 0 === Yp ? void 0 : Yp.id) === ip && (null === (Dp = op.session) || void 0 === Dp ? void 0 : Dp.id) !== ip && (void 0 === op.session ? delete Ip.session : Ip.session = op.session), pp = ic(ic({}, pp), {}, {
                meta: bI(Ip)
              })
            }
            var Ap;
            (null === (op = cp.batching) || void 0 === op ? void 0 : op.enabled) && (null === Lp || void 0 === Lp || Lp.addItem(pp)), (pp => {
              var Op;
              if ((null === (Op = cp.batching) || void 0 === Op ? void 0 : Op.enabled) && Ip.every((pp => pp.isBatched()))) return;
              const [op] = xp([pp]);
              if (void 0 !== op)
                for (const xp of Ip) {
                  var Sp;
                  ip.debug(`Transporting item using ${xp.name}\n`, op), xp.isBatched() ? (null === (Sp = cp.batching) || void 0 === Sp ? void 0 : Sp.enabled) || xp.send([op]) : xp.send(op)
                }
            })(pp)
          }
        },
        isPaused: () => cp.paused,
        pause: () => {
          ip.debug("Pausing transports"), null === Lp || void 0 === Lp || Lp.pause(), cp.paused = !0
        },
        remove: function() {
          ip.debug("Removing transports");
          for (var pp = arguments.length, cp = new Array(pp), Op = 0; Op < pp; Op++) cp[Op] = arguments[Op];
          cp.forEach((pp => {
            ip.debug(`Removing "${pp.name}" transport`);
            const cp = Ip.indexOf(pp); - 1 !== cp ? Ip.splice(cp, 1) : ip.warn(`Transport "${pp.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var pp = arguments.length, cp = new Array(pp), Op = 0; Op < pp; Op++) cp[Op] = arguments[Op];
          ip.debug("Removing beforeSendHooks"), Sp = Sp.filter((pp => !cp.includes(pp)))
        },
        get transports() {
          return [...Ip]
        },
        unpause: () => {
          ip.debug("Unpausing transports"), null === Lp || void 0 === Lp || Lp.start(), cp.paused = !1
        }
      }
    }

    function GI(pp, ip) {
      if (ip.preserveOriginalError)
        for (const cp of pp) "exception" === cp.type && delete cp.payload.originalError;
      return pp
    }
    let rI = cc;

    function ZI(pp) {
      var ip;
      return rI = null !== (ip = pp.unpatchedConsole) && void 0 !== ip ? ip : rI, rI
    }
    let zI, sI = Zi;

    function KI(pp, ip) {
      return sI = EI(pp, ip.internalLoggerLevel), sI
    }

    function VI(pp) {
      let {
        internalLogger: ip,
        config: cp,
        metas: Op,
        transports: op,
        tracesApi: Ip,
        userActionsApi: Sp
      } = pp;
      var xp;
      ip.debug("Initializing exceptions API");
      let Lp = null;
      zI = null !== (xp = cp.parseStacktrace) && void 0 !== xp ? xp : zI;
      const Yp = pp => {
          ip.debug("Changing stacktrace parser"), zI = null !== pp && void 0 !== pp ? pp : zI
        },
        {
          ignoreErrors: Dp = [],
          preserveOriginalError: Ap
        } = cp;
      return Yp(cp.parseStacktrace), {
        changeStacktraceParser: Yp,
        getStacktraceParser: () => zI,
        pushError: function(pp) {
          let {
            skipDedupe: xp,
            stackFrames: Yp,
            type: Pp,
            context: Wp,
            spanContext: yp,
            timestampOverwriteMs: Up,
            originalError: wp,
            fingerprint: vp,
            fatal: tp
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(pp, ip) {
              const {
                message: cp,
                name: Op,
                stack: op
              } = ip;
              return Ip = pp, Sp = cp + " " + Op + " " + op, Ip.some((pp => jp(pp) ? Sp.includes(pp) : !!Sp.match(pp)));
              var Ip, Sp
            }(Dp, null !== wp && void 0 !== wp ? wp : pp)) try {
            var Hp, dp;
            if (!ni(Op).shouldCapture()) return;
            const Dp = Ti(ic(ic({}, function(pp) {
                let ip = pp.cause;
                Tp(ip) ? ip = pp.cause.toString() : null !== ip && (Mp(pp.cause) || Ep(pp.cause)) ? ip = Ni(pp.cause) : null != ip && (ip = pp.cause.toString());
                return null == ip ? {} : {
                  cause: ip
                }
              }(null !== wp && void 0 !== wp ? wp : pp)), null !== Wp && void 0 !== Wp ? Wp : {})),
              jp = ic(ic(ic(ic({
                type: Pp || pp.name || "Error",
                value: pp.message,
                timestamp: Up ? vi(Up) : wi(),
                trace: yp ? {
                  trace_id: yp.traceId,
                  span_id: yp.spanId
                } : Ip.getTraceContext()
              }, rp(Dp) ? {} : {
                context: Dp
              }), Ap ? {
                originalError: wp
              } : {}), vp ? {
                fingerprint: vp
              } : {}), void 0 !== tp ? {
                fatal: tp
              } : {});
            Yp = null !== (Hp = Yp) && void 0 !== Hp ? Hp : pp.stack ? null === zI || void 0 === zI ? void 0 : zI(pp).frames : void 0, (null === Yp || void 0 === Yp ? void 0 : Yp.length) && (jp.stacktrace = {
              frames: Yp
            });
            const kp = {
              type: jp.type,
              value: jp.value,
              stacktrace: jp.stacktrace,
              context: jp.context,
              fingerprint: jp.fingerprint,
              fatal: null !== (dp = jp.fatal) && void 0 !== dp && dp
            };
            if (!xp && cp.dedupe && !ep(Lp) && di(kp, Lp)) return void ip.debug("Skipping error push because it is the same as the last one\n", jp);
            const mp = Lp,
              Rp = hI(Op);
            if (Lp !== mp && !xp && cp.dedupe && di(kp, Lp)) return;
            Lp = kp;
            const qp = {
              meta: Rp,
              payload: jp,
              type: "exception"
            };
            ip.debug("Pushing exception\n", qp), Ro(Sp.getActiveUserAction(), qp) || op.execute(qp)
          } catch (kp) {
            ip.error("Error pushing event", kp)
          }
        }
      }
    }

    function pS(pp, ip, cp, Op, op) {
      ip.debug("Initializing API");
      let Ip = null;
      const Sp = function(pp) {
          let {
            transports: ip,
            internalLogger: cp,
            config: Op,
            pushEvent: op
          } = pp;
          var Ip;
          const Sp = null === (Ip = Op.userActionsInstrumentation) || void 0 === Ip ? void 0 : Ip.excludeItem;
          let xp;
          const Lp = () => xp;
          return {
            startUserAction: (pp, Op, Ip) => {
              if (void 0 === Lp()) {
                const cp = new ko({
                  name: pp,
                  transports: ip,
                  attributes: Op,
                  trigger: (null === Ip || void 0 === Ip ? void 0 : Ip.triggerName) || "faroApiCall",
                  importance: (null === Ip || void 0 === Ip ? void 0 : Ip.importance) || uo.Normal,
                  trackUserActionsExcludeItem: Sp,
                  pushEvent: op
                });
                return cp.filter((pp => [3, 2].includes(pp))).first().subscribe((() => {
                  xp = void 0
                })), mo.notify({
                  type: eo,
                  userAction: cp,
                  initialActivityTimeout: null === Ip || void 0 === Ip ? void 0 : Ip.initialActivityTimeout
                }), xp = cp, xp
              }
              cp.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Lp
          }
        }({
          transports: op,
          config: cp,
          internalLogger: ip,
          pushEvent: (pp, cp, Op, op) => {
            Ip ? Ip(pp, cp, Op, op) : ip.warn("pushEventImpl is not initialized. Event dropped:", {
              name: pp,
              attributes: cp,
              domain: Op,
              options: op
            })
          }
        }),
        xp = function(pp, ip, cp, Op, op) {
          let Ip;
          return ip.debug("Initializing traces API"), {
            getOTEL: () => Ip,
            getTraceContext: () => {
              const pp = null === Ip || void 0 === Ip ? void 0 : Ip.trace.getSpanContext(Ip.context.active());
              return pp ? {
                trace_id: pp.traceId,
                span_id: pp.spanId
              } : void 0
            },
            initOTEL: (pp, cp) => {
              ip.debug("Initializing OpenTelemetry"), Ip = {
                trace: pp,
                context: cp
              }
            },
            isOTELInitialized: () => !!Ip,
            pushTraces: pp => {
              try {
                if (!ni(Op).shouldCapture()) return;
                const cp = {
                  type: "trace",
                  payload: pp,
                  meta: hI(Op)
                };
                ip.debug("Pushing trace\n", cp), op.execute(cp)
              } catch (cp) {
                ip.error("Error pushing trace\n", cp)
              }
            }
          }
        }(0, ip, 0, Op, op),
        Lp = {
          unpatchedConsole: pp,
          internalLogger: ip,
          userActionsApi: Sp,
          config: cp,
          metas: Op,
          transports: op,
          tracesApi: xp
        },
        Yp = function(pp) {
          let {
            internalLogger: ip,
            config: cp,
            metas: Op,
            transports: op,
            tracesApi: Ip,
            userActionsApi: Sp
          } = pp, xp = null;
          return {
            pushEvent: function(pp, Lp, Yp) {
              let {
                skipDedupe: Dp,
                spanContext: Ap,
                timestampOverwriteMs: Pp,
                customPayloadTransformer: Wp = pp => pp
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!ni(Op).shouldCapture()) return;
                const yp = Ti(Lp),
                  Up = Wp({
                    name: pp,
                    domain: null !== Yp && void 0 !== Yp ? Yp : cp.eventDomain,
                    attributes: rp(yp) ? void 0 : yp,
                    timestamp: Pp ? vi(Pp) : wi(),
                    trace: Ap ? {
                      trace_id: Ap.traceId,
                      span_id: Ap.spanId
                    } : Ip.getTraceContext()
                  }),
                  wp = {
                    name: Up.name,
                    attributes: Up.attributes,
                    domain: Up.domain
                  };
                if (!Dp && cp.dedupe && !ep(xp) && di(wp, xp)) return void ip.debug("Skipping event push because it is the same as the last one\n", Up);
                const vp = xp,
                  tp = hI(Op);
                if (xp !== vp && !Dp && cp.dedupe && di(wp, xp)) return;
                xp = wp;
                const Hp = {
                  meta: tp,
                  payload: Up,
                  type: "event"
                };
                ip.debug("Pushing event\n", Hp), Ro(Sp.getActiveUserAction(), Hp) || op.execute(Hp)
              } catch (yp) {
                ip.error("Error pushing event", yp)
              }
            }
          }
        }(Lp);
      return Ip = Yp.pushEvent, ic(ic(ic(ic(ic(ic(ic({}, xp), VI(Lp)), function(pp) {
        let ip, cp, Op, op, {
          internalLogger: Ip,
          metas: Sp
        } = pp;
        Ip.debug("Initializing meta API");
        const xp = pp => {
            cp && Sp.remove(cp), cp = {
              user: pp
            }, Sp.add(cp)
          },
          Lp = (pp, cp) => {
            var Op;
            const op = null === cp || void 0 === cp ? void 0 : cp.overrides,
              Ip = op ? {
                overrides: ic(ic({}, null === ip || void 0 === ip || null === (Op = ip.session) || void 0 === Op ? void 0 : Op.overrides), op)
              } : {};
            ip && Sp.remove(ip), ip = {
              session: ic(ic({}, rp(pp) ? void 0 : pp), Ip)
            }, Sp.add(ip)
          },
          Yp = (pp, ip) => {
            ni(Sp).notifySessionUpdate({
              type: "replace",
              session: pp,
              overrides: null === ip || void 0 === ip ? void 0 : ip.overrides
            }), Lp(pp, ip)
          },
          Dp = () => Sp.value.session,
          Ap = () => Sp.value.page;
        return {
          setUser: xp,
          resetUser: xp,
          setSession: Yp,
          resetSession: Yp,
          getSession: Dp,
          setView: (pp, ip) => {
            var cp;
            if ((null === ip || void 0 === ip ? void 0 : ip.overrides) && (ni(Sp).notifySessionUpdate({
                type: "overrides",
                overrides: ip.overrides
              }), Lp(Dp(), {
                overrides: ip.overrides
              })), (null === Op || void 0 === Op || null === (cp = Op.view) || void 0 === cp ? void 0 : cp.name) === (null === pp || void 0 === pp ? void 0 : pp.name)) return;
            const op = Op;
            Op = {
              view: pp
            }, Sp.add(Op), op && Sp.remove(op)
          },
          getView: () => Sp.value.view,
          setPage: pp => {
            var ip;
            const cp = jp(pp) ? ic(ic({}, null !== (ip = null === op || void 0 === op ? void 0 : op.page) && void 0 !== ip ? ip : Ap()), {}, {
              id: pp
            }) : pp;
            op && Sp.remove(op), op = {
              page: cp
            }, Sp.add(op)
          },
          getPage: Ap
        }
      }(Lp)), function(pp) {
        let {
          internalLogger: ip,
          config: cp,
          metas: Op,
          transports: op,
          tracesApi: Ip,
          userActionsApi: Sp
        } = pp;
        var xp;
        ip.debug("Initializing logs API");
        let Lp = null;
        const Yp = null !== (xp = cp.logArgsSerializer) && void 0 !== xp ? xp : Qc;
        return {
          pushLog: function(pp) {
            let {
              context: xp,
              level: Dp,
              skipDedupe: Ap,
              spanContext: Pp,
              timestampOverwriteMs: Wp
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!ni(Op).shouldCapture()) return;
              const yp = Ti(xp),
                Up = {
                  message: Yp(pp),
                  level: null !== Dp && void 0 !== Dp ? Dp : "log",
                  context: rp(yp) ? void 0 : yp,
                  timestamp: Wp ? vi(Wp) : wi(),
                  trace: Pp ? {
                    trace_id: Pp.traceId,
                    span_id: Pp.spanId
                  } : Ip.getTraceContext()
                },
                wp = {
                  message: Up.message,
                  level: Up.level,
                  context: Up.context
                };
              if (!Ap && cp.dedupe && !ep(Lp) && di(wp, Lp)) return void ip.debug("Skipping log push because it is the same as the last one\n", Up);
              const vp = Lp,
                tp = hI(Op);
              if (Lp !== vp && !Ap && cp.dedupe && di(wp, Lp)) return;
              Lp = wp;
              const Hp = {
                type: "log",
                payload: Up,
                meta: tp
              };
              ip.debug("Pushing log\n", Hp), Ro(Sp.getActiveUserAction(), Hp) || op.execute(Hp)
            } catch (yp) {
              ip.error("Error pushing log\n", yp)
            }
          }
        }
      }(Lp)), function(pp) {
        let {
          internalLogger: ip,
          config: cp,
          metas: Op,
          transports: op,
          tracesApi: Ip,
          userActionsApi: Sp
        } = pp;
        ip.debug("Initializing measurements API");
        let xp = null;
        return {
          pushMeasurement: function(pp) {
            let {
              skipDedupe: Lp,
              context: Yp,
              spanContext: Dp,
              timestampOverwriteMs: Ap
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!ni(Op).shouldCapture()) return;
              const Pp = Ti(Yp),
                Wp = ic(ic({}, pp), {}, {
                  trace: Dp ? {
                    trace_id: Dp.traceId,
                    span_id: Dp.spanId
                  } : Ip.getTraceContext(),
                  timestamp: Ap ? vi(Ap) : wi(),
                  context: rp(Pp) ? void 0 : Pp
                }),
                yp = {
                  type: Wp.type,
                  values: Wp.values,
                  context: Wp.context
                };
              if (!Lp && cp.dedupe && !ep(xp) && di(yp, xp)) return void ip.debug("Skipping measurement push because it is the same as the last one\n", Wp);
              const Up = xp,
                wp = hI(Op);
              if (xp !== Up && !Lp && cp.dedupe && di(yp, xp)) return;
              xp = yp;
              const vp = {
                type: "measurement",
                payload: Wp,
                meta: wp
              };
              ip.debug("Pushing measurement\n", vp), Ro(Sp.getActiveUserAction(), vp) || op.execute(vp)
            } catch (Pp) {
              ip.error("Error pushing measurement\n", Pp)
            }
          }
        }
      }(Lp)), Yp), Sp)
    }

    function iS(pp) {
      const ip = ZI(pp),
        cp = KI(ip, pp);
      if (yp() && !pp.isolate) return void cp.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      cp.debug("Initializing");
      const Op = function(pp, ip) {
          let cp, Op = [],
            op = [],
            Ip = [],
            Sp = 0,
            xp = 0;
          const Lp = () => Op.reduce(((pp, ip) => Object.assign(pp, Cp(ip) ? ip() : ip)), {}),
            Yp = () => {
              if (op.length) {
                const pp = Lp();
                op.forEach((ip => ip(pp)))
              }
            };
          return {
            add: function() {
              for (var pp = arguments.length, cp = new Array(pp), op = 0; op < pp; op++) cp[op] = arguments[op];
              ip.debug("Adding metas\n", cp), Op.push(...cp), Yp()
            },
            remove: function() {
              for (var pp = arguments.length, cp = new Array(pp), op = 0; op < pp; op++) cp[op] = arguments[op];
              ip.debug("Removing metas\n", cp), Op = Op.filter((pp => !cp.includes(pp))), Yp()
            },
            addListener: pp => {
              ip.debug("Adding metas listener\n", pp), op.push(pp)
            },
            removeListener: pp => {
              ip.debug("Removing metas listener\n", pp), op = op.filter((ip => ip !== pp))
            },
            capture: pp => {
              var ip;
              const Op = void 0 !== cp,
                op = null !== (ip = cp) && void 0 !== ip ? ip : Ip;
              Op || (cp = op, Sp = 0, xp = op.length);
              try {
                for (; Sp < xp;) {
                  const pp = op[Sp++];
                  null === pp || void 0 === pp || pp()
                }
                const ip = bI(Lp());
                return null === pp || void 0 === pp || pp(), ip
              } finally {
                Op || (cp = void 0)
              }
            },
            addCaptureListener: pp => {
              Ip.push(pp)
            },
            removeCaptureListener: pp => {
              Ip = Ip.filter((ip => ip !== pp))
            },
            get value() {
              return Lp()
            }
          }
        }(0, cp),
        op = gI(ip, cp, pp, Op),
        Ip = pS(ip, cp, pp, Op, op),
        Sp = function(pp, ip, cp, Op, op, Ip) {
          ip.debug("Initializing instrumentations");
          const Sp = [];
          return {
            add: function() {
              ip.debug("Adding instrumentations");
              for (var xp = arguments.length, Lp = new Array(xp), Yp = 0; Yp < xp; Yp++) Lp[Yp] = arguments[Yp];
              Lp.forEach((xp => {
                ip.debug(`Adding "${xp.name}" instrumentation`), Sp.some((pp => pp.name === xp.name)) ? ip.warn(`Instrumentation ${xp.name} is already added`) : (xp.unpatchedConsole = pp, xp.internalLogger = ip, xp.config = cp, xp.metas = Op, xp.transports = op, xp.api = Ip, Sp.push(xp), xp.initialize())
              }))
            },
            get instrumentations() {
              return [...Sp]
            },
            remove: function() {
              ip.debug("Removing instrumentations");
              for (var pp = arguments.length, cp = new Array(pp), Op = 0; Op < pp; Op++) cp[Op] = arguments[Op];
              cp.forEach((pp => {
                var cp, Op;
                ip.debug(`Removing "${pp.name}" instrumentation`);
                const op = Sp.reduce(((ip, cp, Op) => null === ip && cp.name === pp.name ? Op : null), null);
                null !== op ? (null === (cp = (Op = Sp[op]).destroy) || void 0 === cp || cp.call(Op), Sp.splice(op, 1)) : ip.warn(`Instrumentation "${pp.name}" is not added`)
              }))
            }
          }
        }(ip, cp, pp, Op, op, Ip),
        xp = wp(ip, cp, pp, Op, op, Ip, Sp);
      return nI(xp),
        function(pp) {
          pp.transports.add(...pp.config.transports), pp.transports.addBeforeSendHooks(pp.config.beforeSend)
        }(xp),
        function(pp) {
          pp.instrumentations.add(...pp.config.instrumentations)
        }(xp), xp
    }

    function cS(pp) {
      const ip = JI(pp);
      if (ip) return iS(ip)
    }
  },
  6841: function(pp, ip, cp) {
    var Op;
    ! function(op, Ip) {
      var Sp = "function",
        xp = "undefined",
        Lp = "object",
        Yp = "string",
        Dp = "major",
        Ap = "model",
        Pp = "name",
        Wp = "type",
        yp = "vendor",
        Up = "version",
        wp = "architecture",
        vp = "console",
        tp = "mobile",
        Hp = "tablet",
        dp = "smarttv",
        ep = "wearable",
        jp = "embedded",
        kp = "Amazon",
        mp = "Apple",
        Rp = "ASUS",
        qp = "BlackBerry",
        Mp = "Browser",
        Cp = "Chrome",
        Ep = "Firefox",
        Xp = "Google",
        lp = "Honor",
        Qp = "Huawei",
        Jp = "LG",
        Bp = "Microsoft",
        Np = "Motorola",
        Tp = "Nvidia",
        fp = "OnePlus",
        bp = "Opera",
        hp = "OPPO",
        ap = "Samsung",
        np = "Sharp",
        Fp = "Sony",
        gp = "Xiaomi",
        Gp = "Zebra",
        rp = "Facebook",
        Zp = "Chromium OS",
        zp = "Mac OS",
        sp = " Browser",
        Kp = function(pp) {
          for (var ip = {}, cp = 0; cp < pp.length; cp++) ip[pp[cp].toUpperCase()] = pp[cp];
          return ip
        },
        Vp = function(pp, ip) {
          return typeof pp === Yp && -1 !== ii(ip).indexOf(ii(pp))
        },
        ii = function(pp) {
          return pp.toLowerCase()
        },
        ci = function(pp, ip) {
          if (typeof pp === Yp) return pp = pp.replace(/^\s\s*/, ""), typeof ip === xp ? pp : pp.substring(0, 500)
        },
        Oi = function(pp, ip) {
          for (var cp, Op, op, xp, Yp, Dp, Ap = 0; Ap < ip.length && !Yp;) {
            var Pp = ip[Ap],
              Wp = ip[Ap + 1];
            for (cp = Op = 0; cp < Pp.length && !Yp && Pp[cp];)
              if (Yp = Pp[cp++].exec(pp))
                for (op = 0; op < Wp.length; op++) Dp = Yp[++Op], typeof(xp = Wp[op]) === Lp && xp.length > 0 ? 2 === xp.length ? typeof xp[1] == Sp ? this[xp[0]] = xp[1].call(this, Dp) : this[xp[0]] = xp[1] : 3 === xp.length ? typeof xp[1] !== Sp || xp[1].exec && xp[1].test ? this[xp[0]] = Dp ? Dp.replace(xp[1], xp[2]) : Ip : this[xp[0]] = Dp ? xp[1].call(this, Dp, xp[2]) : Ip : 4 === xp.length && (this[xp[0]] = Dp ? xp[3].call(this, Dp.replace(xp[1], xp[2])) : Ip) : this[xp] = Dp || Ip;
            Ap += 2
          }
        },
        oi = function(pp, ip) {
          for (var cp in ip)
            if (typeof ip[cp] === Lp && ip[cp].length > 0) {
              for (var Op = 0; Op < ip[cp].length; Op++)
                if (Vp(ip[cp][Op], pp)) return "?" === cp ? Ip : cp
            } else if (Vp(ip[cp], pp)) return "?" === cp ? Ip : cp;
          return ip.hasOwnProperty("*") ? ip["*"] : pp
        },
        Ii = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM"
        },
        Si = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Up, [Pp, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Up, [Pp, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Pp, Up],
            [/opios[\/ ]+([\w\.]+)/i],
            [Up, [Pp, bp + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Up, [Pp, bp + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Up, [Pp, bp]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Up, [Pp, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Up, [Pp, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Pp, Up],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Up, [Pp, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Up, [Pp, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Up, [Pp, "UC" + Mp]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Up, [Pp, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Up, [Pp, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Up, [Pp, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Up, [Pp, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Up, [Pp, "Smart Lenovo " + Mp]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Pp, /(.+)/, "$1 Secure " + Mp], Up
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Up, [Pp, Ep + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Up, [Pp, bp + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Up, [Pp, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Up, [Pp, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Up, [Pp, bp + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Up, [Pp, "MIUI" + sp]],
            [/fxios\/([\w\.-]+)/i],
            [Up, [Pp, Ep]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Up, [Pp, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Pp, /(.+)/, "$1Browser"], Up
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Pp, /(.+)/, "$1" + sp], Up
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Up, [Pp, ap + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Up, [Pp, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Pp, "Sogou Mobile"], Up
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Pp, Up],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Pp],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Up, Pp],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Pp, rp], Up
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Pp, Up],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Up, [Pp, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Up, [Pp, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Up, [Pp, Cp + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Pp, Cp + " WebView"], Up
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Up, [Pp, "Android " + Mp]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Pp, Up],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Up, [Pp, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Up, Pp],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Pp, [Up, oi, {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/"
            }]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [Pp, Up],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Pp, "Netscape"], Up
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Pp, Up],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Up, [Pp, Ep + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Pp, [Up, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Pp, [Up, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [wp, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [wp, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [wp, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [wp, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [wp, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [wp, /ower/, "", ii]
            ],
            [/ sun4\w[;\)]/i],
            [
              [wp, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [wp, ii]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Ap, [yp, ap],
              [Wp, Hp]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Ap, [yp, ap],
              [Wp, tp]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Ap, [yp, mp],
              [Wp, tp]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Ap, [yp, mp],
              [Wp, Hp]
            ],
            [/(macintosh);/i],
            [Ap, [yp, mp]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Ap, [yp, np],
              [Wp, tp]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Ap, [yp, lp],
              [Wp, Hp]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Ap, [yp, lp],
              [Wp, tp]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Ap, [yp, Qp],
              [Wp, Hp]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Ap, [yp, Qp],
              [Wp, tp]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Ap, /_/g, " "],
              [yp, gp],
              [Wp, Hp]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Ap, /_/g, " "],
              [yp, gp],
              [Wp, tp]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Ap, [yp, hp],
              [Wp, tp]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Ap, [yp, oi, {
                OnePlus: ["304", "403", "203"],
                "*": hp
              }],
              [Wp, Hp]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Ap, [yp, "Vivo"],
              [Wp, tp]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Ap, [yp, "Realme"],
              [Wp, tp]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Ap, [yp, Np],
              [Wp, tp]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Ap, [yp, Np],
              [Wp, Hp]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Ap, [yp, Jp],
              [Wp, Hp]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Ap, [yp, Jp],
              [Wp, tp]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Ap, [yp, "Lenovo"],
              [Wp, Hp]
            ],
            [/(nokia) (t[12][01])/i],
            [yp, Ap, [Wp, Hp]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Ap, /_/g, " "],
              [Wp, tp],
              [yp, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Ap, [yp, Xp],
              [Wp, Hp]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Ap, [yp, Xp],
              [Wp, tp]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Ap, [yp, Fp],
              [Wp, tp]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Ap, "Xperia Tablet"],
              [yp, Fp],
              [Wp, Hp]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Ap, [yp, fp],
              [Wp, tp]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Ap, [yp, kp],
              [Wp, Hp]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Ap, /(.+)/g, "Fire Phone $1"],
              [yp, kp],
              [Wp, tp]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Ap, yp, [Wp, Hp]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Ap, [yp, qp],
              [Wp, tp]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Ap, [yp, Rp],
              [Wp, Hp]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Ap, [yp, Rp],
              [Wp, tp]
            ],
            [/(nexus 9)/i],
            [Ap, [yp, "HTC"],
              [Wp, Hp]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [yp, [Ap, /_/g, " "],
              [Wp, tp]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Ap, [yp, "TCL"],
              [Wp, Hp]
            ],
            [/(itel) ((\w+))/i],
            [
              [yp, ii], Ap, [Wp, oi, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Ap, [yp, "Acer"],
              [Wp, Hp]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Ap, [yp, "Meizu"],
              [Wp, tp]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Ap, [yp, "Ulefone"],
              [Wp, tp]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Ap, [yp, "Energizer"],
              [Wp, tp]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Ap, [yp, "Cat"],
              [Wp, tp]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Ap, [yp, "Smartfren"],
              [Wp, tp]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Ap, [yp, "Nothing"],
              [Wp, tp]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Ap, [yp, "Archos"],
              [Wp, Hp]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Ap, [yp, "Archos"],
              [Wp, tp]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [yp, Ap, [Wp, Hp]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [yp, Ap, [Wp, tp]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [yp, Ap, [Wp, Hp]],
            [/(surface duo)/i],
            [Ap, [yp, Bp],
              [Wp, Hp]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Ap, [yp, "Fairphone"],
              [Wp, tp]
            ],
            [/(u304aa)/i],
            [Ap, [yp, "AT&T"],
              [Wp, tp]
            ],
            [/\bsie-(\w*)/i],
            [Ap, [yp, "Siemens"],
              [Wp, tp]
            ],
            [/\b(rct\w+) b/i],
            [Ap, [yp, "RCA"],
              [Wp, Hp]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Ap, [yp, "Dell"],
              [Wp, Hp]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Ap, [yp, "Verizon"],
              [Wp, Hp]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Ap, [yp, "Barnes & Noble"],
              [Wp, Hp]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Ap, [yp, "NuVision"],
              [Wp, Hp]
            ],
            [/\b(k88) b/i],
            [Ap, [yp, "ZTE"],
              [Wp, Hp]
            ],
            [/\b(nx\d{3}j) b/i],
            [Ap, [yp, "ZTE"],
              [Wp, tp]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Ap, [yp, "Swiss"],
              [Wp, tp]
            ],
            [/\b(zur\d{3}) b/i],
            [Ap, [yp, "Swiss"],
              [Wp, Hp]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Ap, [yp, "Zeki"],
              [Wp, Hp]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [yp, "Dragon Touch"], Ap, [Wp, Hp]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Ap, [yp, "Insignia"],
              [Wp, Hp]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Ap, [yp, "NextBook"],
              [Wp, Hp]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [yp, "Voice"], Ap, [Wp, tp]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [yp, "LvTel"], Ap, [Wp, tp]
            ],
            [/\b(ph-1) /i],
            [Ap, [yp, "Essential"],
              [Wp, tp]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Ap, [yp, "Envizen"],
              [Wp, Hp]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Ap, [yp, "MachSpeed"],
              [Wp, Hp]
            ],
            [/\btu_(1491) b/i],
            [Ap, [yp, "Rotor"],
              [Wp, Hp]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Ap, [yp, Tp],
              [Wp, Hp]
            ],
            [/(sprint) (\w+)/i],
            [yp, Ap, [Wp, tp]],
            [/(kin\.[onetw]{3})/i],
            [
              [Ap, /\./g, " "],
              [yp, Bp],
              [Wp, tp]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Ap, [yp, Gp],
              [Wp, Hp]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Ap, [yp, Gp],
              [Wp, tp]
            ],
            [/smart-tv.+(samsung)/i],
            [yp, [Wp, dp]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Ap, /^/, "SmartTV"],
              [yp, ap],
              [Wp, dp]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [yp, Jp],
              [Wp, dp]
            ],
            [/(apple) ?tv/i],
            [yp, [Ap, mp + " TV"],
              [Wp, dp]
            ],
            [/crkey/i],
            [
              [Ap, Cp + "cast"],
              [yp, Xp],
              [Wp, dp]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Ap, [yp, kp],
              [Wp, dp]
            ],
            [/(shield \w+ tv)/i],
            [Ap, [yp, Tp],
              [Wp, dp]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Ap, [yp, np],
              [Wp, dp]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Ap, [yp, Fp],
              [Wp, dp]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Ap, [yp, gp],
              [Wp, dp]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [yp, Ap, [Wp, dp]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [yp, ci],
              [Ap, ci],
              [Wp, dp]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Ap, [Wp, dp]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Wp, dp]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [yp, Ap, [Wp, vp]],
            [/droid.+; (shield)( bui|\))/i],
            [Ap, [yp, Tp],
              [Wp, vp]
            ],
            [/(playstation \w+)/i],
            [Ap, [yp, Fp],
              [Wp, vp]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Ap, [yp, Bp],
              [Wp, vp]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Ap, [yp, ap],
              [Wp, ep]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [yp, Ap, [Wp, ep]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Ap, [yp, hp],
              [Wp, ep]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Ap, [yp, mp],
              [Wp, ep]
            ],
            [/(opwwe\d{3})/i],
            [Ap, [yp, fp],
              [Wp, ep]
            ],
            [/(moto 360)/i],
            [Ap, [yp, Np],
              [Wp, ep]
            ],
            [/(smartwatch 3)/i],
            [Ap, [yp, Fp],
              [Wp, ep]
            ],
            [/(g watch r)/i],
            [Ap, [yp, Jp],
              [Wp, ep]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Ap, [yp, Gp],
              [Wp, ep]
            ],
            [/droid.+; (glass) \d/i],
            [Ap, [yp, Xp],
              [Wp, ep]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [yp, Ap, [Wp, ep]],
            [/; (quest( \d| pro)?)/i],
            [Ap, [yp, rp],
              [Wp, ep]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [yp, [Wp, jp]],
            [/(aeobc)\b/i],
            [Ap, [yp, kp],
              [Wp, jp]
            ],
            [/(homepod).+mac os/i],
            [Ap, [yp, mp],
              [Wp, jp]
            ],
            [/windows iot/i],
            [
              [Wp, jp]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Ap, [Wp, tp]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Ap, [Wp, Hp]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Wp, Hp]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Wp, tp]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Ap, [yp, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Up, [Pp, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Pp, Up],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Up, [Pp, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Pp, Up],
            [/ladybird\//i],
            [
              [Pp, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Up, Pp]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Pp, Up],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Pp, [Up, oi, Ii]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Up, oi, Ii],
              [Pp, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Up, /_/g, "."],
              [Pp, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Pp, zp],
              [Up, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Up, Pp],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Pp, /(.+)/, "$1 Touch"], Up
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Pp, Up],
            [/\(bb(10);/i],
            [Up, [Pp, qp]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Up, [Pp, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Up, [Pp, Ep + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Up, [Pp, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Up, [Pp, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Up, [Pp, Cp + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Pp, Zp], Up
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Pp, Up],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Pp, "Solaris"], Up
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Pp, Up]
          ]
        },
        xi = function(pp, ip) {
          if (typeof pp === Lp && (ip = pp, pp = Ip), !(this instanceof xi)) return new xi(pp, ip).getResult();
          var cp = typeof op !== xp && op.navigator ? op.navigator : Ip,
            Op = pp || (cp && cp.userAgent ? cp.userAgent : ""),
            vp = cp && cp.userAgentData ? cp.userAgentData : Ip,
            dp = ip ? function(pp, ip) {
              var cp = {};
              for (var Op in pp) ip[Op] && ip[Op].length % 2 === 0 ? cp[Op] = ip[Op].concat(pp[Op]) : cp[Op] = pp[Op];
              return cp
            }(Si, ip) : Si,
            ep = cp && cp.userAgent == Op;
          return this.getBrowser = function() {
            var pp, ip = {};
            return ip[Pp] = Ip, ip[Up] = Ip, Oi.call(ip, Op, dp.browser), ip[Dp] = typeof(pp = ip[Up]) === Yp ? pp.replace(/[^\d\.]/g, "").split(".")[0] : Ip, ep && cp && cp.brave && typeof cp.brave.isBrave == Sp && (ip[Pp] = "Brave"), ip
          }, this.getCPU = function() {
            var pp = {};
            return pp[wp] = Ip, Oi.call(pp, Op, dp.cpu), pp
          }, this.getDevice = function() {
            var pp = {};
            return pp[yp] = Ip, pp[Ap] = Ip, pp[Wp] = Ip, Oi.call(pp, Op, dp.device), ep && !pp[Wp] && vp && vp.mobile && (pp[Wp] = tp), ep && "Macintosh" == pp[Ap] && cp && typeof cp.standalone !== xp && cp.maxTouchPoints && cp.maxTouchPoints > 2 && (pp[Ap] = "iPad", pp[Wp] = Hp), pp
          }, this.gy = function() {
            var pp = {};
            return pp[Pp] = Ip, pp[Up] = Ip, Oi.call(pp, Op, dp.engine), pp
          }, this.getOS = function() {
            var pp = {};
            return pp[Pp] = Ip, pp[Up] = Ip, Oi.call(pp, Op, dp.os), ep && !pp[Pp] && vp && vp.platform && "Unknown" != vp.platform && (pp[Pp] = vp.platform.replace(/chrome os/i, Zp).replace(/macos/i, zp)), pp
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.gy(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Op
          }, this.setUA = function(pp) {
            return Op = typeof pp === Yp && pp.length > 500 ? ci(pp, 500) : pp, this
          }, this.setUA(Op), this
        };
      xi.VERSION = "1.0.41", xi.BROWSER = Kp([Pp, Up, Dp]), xi.CPU = Kp([wp]), xi.DEVICE = Kp([Ap, yp, Wp, vp, tp, dp, Hp, ep, jp]), xi.ENGINE = xi.OS = Kp([Pp, Up]), typeof ip !== xp ? (pp.exports && (ip = pp.exports = xi), ip.UAParser = xi) : cp.amdO ? (Op = function() {
        return xi
      }.call(ip, cp, ip, pp)) === Ip || (pp.exports = Op) : typeof op !== xp && (op.UAParser = xi);
      var Li = typeof op !== xp && (op.jQuery || op.Zepto);
      if (Li && !Li.ua) {
        var Yi = new xi;
        Li.ua = Yi.getResult(), Li.ua.get = function() {
          return Yi.getUA()
        }, Li.ua.set = function(pp) {
          Yi.setUA(pp);
          var ip = Yi.getResult();
          for (var cp in ip) Li.ua[cp] = ip[cp]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);