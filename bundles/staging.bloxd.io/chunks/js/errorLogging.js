export const id = 31;
export const ids = [31];
export const modules = {
  6572: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BaseExtension: () => Jk,
      BaseInstrumentation: () => kk,
      BaseTransport: () => dW,
      CSPInstrumentation: () => MN,
      ConsoleInstrumentation: () => jk,
      ConsoleTransport: () => WW,
      EVENT_CLICK: () => vJ,
      EVENT_NAVIGATION: () => xJ,
      EVENT_ROUTE_CHANGE: () => MJ,
      EVENT_SESSION_EXTEND: () => iJ,
      EVENT_SESSION_RESUME: () => sJ,
      EVENT_SESSION_START: () => BJ,
      EVENT_VIEW_CHANGED: () => qJ,
      ErrorsInstrumentation: () => fk,
      FetchTransport: () => BW,
      InternalLoggerLevel: () => rJ,
      LogLevel: () => xk,
      MAX_SESSION_PERSISTENCE_TIME: () => gd,
      NavigationInstrumentation: () => cN,
      Observable: () => vk,
      PerformanceInstrumentation: () => zp,
      PersistentSessionsManager: () => UJ,
      SESSION_EXPIRATION_TIME: () => Wd,
      SESSION_INACTIVITY_TIME: () => Pd,
      STORAGE_KEY: () => Nd,
      SessionInstrumentation: () => Nk,
      TransportItemType: () => JW,
      UserActionInstrumentation: () => aN,
      UserActionState: () => RN,
      VERSION: () => pk,
      ViewInstrumentation: () => Uk,
      VolatileSessionsManager: () => yJ,
      WebVitalsInstrumentation: () => Xp,
      allLogLevels: () => Bk,
      browserMeta: () => zN,
      buildStackFrame: () => Wk,
      captureMetas: () => yW,
      createInternalLogger: () => FW,
      createPromiseBuffer: () => OW,
      createSession: () => wN,
      deepEqual: () => GJ,
      defaultEventDomain: () => pd,
      defaultExceptionType: () => Mk,
      defaultGlobalObjectKey: () => YW,
      defaultInternalLoggerLevel: () => tJ,
      defaultLogLevel: () => qk,
      faro: () => Od,
      genShortID: () => IJ,
      getCurrentTimestamp: () => OJ,
      getDataFromSafariExtensions: () => Lk,
      getIgnoreUrls: () => Vd,
      getInternalFaroFromGlobalObject: () => ld,
      getStackFramesFromError: () => ek,
      getTransportBody: () => NW,
      getUrlFromResource: () => Hd,
      getWebInstrumentations: () => hN,
      globalObject: () => Kd,
      initializeFaro: () => dP,
      internalGlobalObjectKey: () => od,
      isArray: () => md,
      isBoolean: () => ad,
      isDomError: () => Dd,
      isDomException: () => Td,
      isElement: () => cd,
      isElementDefined: () => Ed,
      VQ: () => td,
      isError: () => Ud,
      isErrorDefined: () => nd,
      isErrorEvent: () => yd,
      isEvent: () => fd,
      isEventDefined: () => Xd,
      isFunction: () => Yd,
      isInstanceOf: () => Gd,
      isInt: () => sd,
      isInternalFaroOnGlobalObject: () => Ld,
      isMap: () => rd,
      isMapDefined: () => hd,
      isNull: () => xd,
      isNumber: () => Bd,
      isObject: () => Fd,
      isPrimitive: () => jd,
      isRegExp: () => bd,
      isString: () => qd,
      isSymbol: () => Md,
      isSyntheticEvent: () => ud,
      isThenable: () => Sd,
      isToString: () => Id,
      isTypeof: () => Rd,
      isUndefined: () => vd,
      makeCoreConfig: () => SW,
      noop: () => hJ,
      osMeta: () => HN,
      parseStacktrace: () => Rk,
      sdkMeta: () => AN,
      setInternalFaroOnGlobalObject: () => Qd,
      transportItemTypeToBodyKey: () => kW,
      unknownString: () => nk,
      userActionDataAttribute: () => Hp,
      userActionTimeoutDataAttribute: () => wp
    });
    const pd = "browser",
      Nd = "com.grafana.faro.session",
      Wd = 144e5,
      Pd = 9e5,
      Zd = 1e3,
      gd = Pd,
      Cd = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: gd
      };
    const Kd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof kd.g ? kd.g : "undefined" !== typeof self ? self : void 0;
    const od = "_faroInternal";

    function ld() {
      return Kd[od]
    }

    function Qd(dd) {
      dd.config.isolate ? dd.internalLogger.debug("Skipping registering internal Faro instance on global object") : (dd.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Kd, od, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dd
      }))
    }

    function Ld() {
      return od in Kd
    }
    let Od = {
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

    function ed(dd, Jd, kd, pd, Nd, Wd, Pd) {
      return Jd.debug("Initializing Faro"), Od = {
          api: Wd,
          config: kd,
          instrumentations: Pd,
          internalLogger: Jd,
          metas: pd,
          pause: Nd.pause,
          transports: Nd,
          unpatchedConsole: dd,
          unpause: Nd.unpause
        }, Qd(Od),
        function(dd) {
          if (dd.config.preventGlobalExposure) dd.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (dd.internalLogger.debug(`Registering public faro reference in the global scope using "${dd.config.globalObjectKey}" key`), dd.config.globalObjectKey in Kd) return void dd.internalLogger.warn(`Skipping global registration due to key "${dd.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Kd, dd.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: dd
            })
          }
        }(Od), Od
    }

    function Rd(dd, Jd) {
      return typeof dd === Jd
    }

    function Id(dd, Jd) {
      return Object.prototype.toString.call(dd) === `[object ${Jd}]`
    }

    function Gd(dd, Jd) {
      try {
        return dd instanceof Jd
      } catch (kd) {
        return !1
      }
    }
    const vd = dd => Rd(dd, "undefined"),
      xd = dd => Rd(dd, "null"),
      qd = dd => Rd(dd, "string"),
      Bd = dd => Rd(dd, "number") && !isNaN(dd) || Rd(dd, "bigint"),
      sd = dd => Bd(dd) && Number.isInteger(dd),
      ad = dd => Rd(dd, "boolean"),
      Md = dd => Rd(dd, "symbol"),
      Fd = dd => !xd(dd) && Rd(dd, "object"),
      Yd = dd => Rd(dd, "function"),
      md = dd => Id(dd, "Array"),
      bd = dd => Id(dd, "RegExp"),
      Sd = dd => Yd(null === dd || void 0 === dd ? void 0 : dd.then),
      jd = dd => !Fd(dd) && !Yd(dd),
      Xd = "undefined" !== typeof Event,
      fd = dd => Xd && Gd(dd, Event),
      nd = "undefined" !== typeof Error,
      Ud = dd => nd && Gd(dd, Error),
      yd = dd => Id(dd, "ErrorEvent"),
      Dd = dd => Id(dd, "DOMError"),
      Td = dd => Id(dd, "DOMException"),
      Ed = "undefined" !== typeof Element,
      cd = dd => Ed && Gd(dd, Element),
      hd = "undefined" !== typeof Map,
      rd = dd => hd && Gd(dd, Map),
      ud = dd => Fd(dd) && "nativeEvent" in dd && "preventDefault" in dd && "stopPropagation" in dd;

    function td(dd) {
      return null == dd || (md(dd) || qd(dd) ? 0 === dd.length : !!Fd(dd) && 0 === Object.keys(dd).length)
    }

    function Vd() {
      return Od.transports.transports.flatMap((dd => dd.getIgnoreUrls()))
    }

    function zd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Vd().some((Jd => dd && null != dd.match(Jd)))
    }

    function Hd(dd) {
      return qd(dd) ? dd : dd instanceof URL ? dd.href : !td(dd) && Yd(null === dd || void 0 === dd ? void 0 : dd.toString) ? dd.toString() : void 0
    }
    const wd = "sessionStorage",
      Ad = "localStorage";

    function dJ(dd) {
      try {
        let Jd;
        Jd = window[dd];
        const kd = "__faro_storage_test__";
        return Jd.setItem(kd, kd), Jd.removeItem(kd), !0
      } catch (kd) {
        var Jd;
        return null === (Jd = Od.internalLogger) || void 0 === Jd || Jd.info(`Web storage of type ${dd} is not available. Reason: ${kd}`), !1
      }
    }

    function JJ(dd, Jd) {
      return PJ(Jd) ? window[Jd].getItem(dd) : null
    }

    function kJ(dd, Jd, kd) {
      if (PJ(kd)) try {
        window[kd].setItem(dd, Jd)
      } catch (pd) {}
    }

    function pJ(dd, Jd) {
      PJ(Jd) && window[Jd].removeItem(dd)
    }
    const NJ = dJ(Ad),
      WJ = dJ(wd);

    function PJ(dd) {
      return dd === Ad ? NJ : dd === wd && WJ
    }

    function ZJ(dd) {
      return ZJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ZJ(dd)
    }

    function gJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != ZJ(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != ZJ(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == ZJ(Jd) ? Jd : Jd + ""
    }

    function CJ(dd, Jd, kd) {
      return (Jd = gJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function KJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function oJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? KJ(Object(kd), !0).forEach((function(Jd) {
          CJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : KJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function lJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od;
      var Jd, kd, pd;
      const Nd = dd.config.sessionTracking,
        Wd = null !== (Jd = null !== (kd = null === Nd || void 0 === Nd || null === (pd = Nd.sampler) || void 0 === pd ? void 0 : pd.call(Nd, {
          metas: dd.metas.value
        })) && void 0 !== kd ? kd : null === Nd || void 0 === Nd ? void 0 : Nd.samplingRate) && void 0 !== Jd ? Jd : 1,
        Pd = "number" === typeof Wd ? function(dd) {
          return Math.min(1, Math.max(0, dd))
        }(Wd) : 0;
      if (!(Pd > 0)) return !1;
      if (1 === Pd) return !0;
      try {
        const dd = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === dd || void 0 === dd ? void 0 : dd.getRandomValues)) {
          const Jd = new Uint32Array(1);
          return dd.getRandomValues(Jd), Jd[0] / Math.pow(2, 32) < Pd
        }
      } catch (Zd) {}
      return Math.random() < Pd
    }

    function QJ() {
      return Date.now()
    }

    function LJ() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function OJ() {
      return (new Date).toISOString()
    }

    function eJ(dd) {
      return new Date(dd).toISOString()
    }
    const RJ = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function IJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Jd = new Uint32Array(dd),
        kd = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === kd || void 0 === kd ? void 0 : kd.getRandomValues) kd.getRandomValues(Jd);
      else
        for (let Nd = 0; Nd < dd; Nd++) Jd[Nd] = Math.floor(4294967296 * Math.random());
      let pd = "";
      for (let Nd = 0; Nd < dd; Nd++) pd += RJ[Jd[Nd] % 59];
      return pd
    }

    function GJ(dd, Jd) {
      if (dd === Jd) return !0;
      if (Rd(dd, "number") && isNaN(dd)) return Rd(Jd, "number") && isNaN(Jd);
      const kd = md(dd),
        pd = md(Jd);
      if (kd !== pd) return !1;
      if (kd && pd) {
        const kd = dd.length;
        if (kd !== Jd.length) return !1;
        for (let pd = kd; 0 !== pd--;)
          if (!GJ(dd[pd], Jd[pd])) return !1;
        return !0
      }
      const Nd = Fd(dd),
        Wd = Fd(Jd);
      if (Nd !== Wd) return !1;
      if (dd && Jd && Nd && Wd) {
        const kd = Object.keys(dd),
          pd = Object.keys(Jd);
        if (kd.length !== pd.length) return !1;
        for (let dd of kd)
          if (!pd.includes(dd)) return !1;
        for (let Nd of kd)
          if (!GJ(dd[Nd], Jd[Nd])) return !1;
        return !0
      }
      return !1
    }
    const vJ = "click",
      xJ = "navigation",
      qJ = "view_changed",
      BJ = "session_start",
      sJ = "session_resume",
      iJ = "session_extend",
      aJ = "service_name_override",
      MJ = "route_change";

    function FJ() {
      let {
        sessionId: dd,
        started: Jd,
        lastActivity: kd,
        isSampled: pd = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Nd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Od;
      var Wd;
      const Pd = QJ(),
        Zd = null === (Wd = Nd.config) || void 0 === Wd || null === (Wd = Wd.sessionTracking) || void 0 === Wd ? void 0 : Wd.generateSessionId;
      return null == dd && (dd = "function" === typeof Zd ? Zd() : IJ()), {
        sessionId: dd,
        lastActivity: null !== kd && void 0 !== kd ? kd : Pd,
        started: null !== Jd && void 0 !== Jd ? Jd : Pd,
        isSampled: pd
      }
    }

    function YJ(dd) {
      if (null == dd) return !1;
      const Jd = QJ();
      return Jd - dd.started < 144e5 && Jd - dd.lastActivity < Pd
    }

    function mJ(dd) {
      let {
        fetchUserSession: Jd,
        storeUserSession: kd,
        adoptSession: pd,
        updateInterval: Nd = 0
      } = dd, Zd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Od, gd = 0;
      return function() {
        let {
          forceSessionExtend: dd = !1,
          refreshActivity: Cd = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Kd, od;
        if (!Jd || !kd) return;
        const ld = QJ();
        if (!dd && ld < gd && gd - ld <= Nd) return;
        const Qd = Zd.config.sessionTracking,
          Ld = null === Qd || void 0 === Qd ? void 0 : Qd.persistent;
        if (Ld && !NJ || !Ld && !WJ) return;
        const Od = Jd();
        if (gd = Math.min(ld + Nd, (null !== (Kd = null === Od || void 0 === Od ? void 0 : Od.started) && void 0 !== Kd ? Kd : ld) + Wd, (null !== (od = null === Od || void 0 === Od ? void 0 : Od.lastActivity) && void 0 !== od ? od : ld) + Pd), !1 === dd && YJ(Od)) {
          var ed;
          Cd && kd(oJ(oJ({}, Od), {}, {
            lastActivity: ld
          }));
          const dd = null === (ed = Zd.metas.value.session) || void 0 === ed ? void 0 : ed.id;
          null != pd && null != Od.sessionMeta && Od.sessionId !== dd && pd(Od.sessionMeta)
        } else {
          var Rd, Id, Gd;
          let dd = SJ(FJ({
            isSampled: lJ(Zd)
          }, Zd), Od, Zd);
          gd = ld + Nd, kd(dd), null === (Rd = Zd.api) || void 0 === Rd || Rd.setSession(dd.sessionMeta), null === Qd || void 0 === Qd || null === (Id = Qd.onSessionChange) || void 0 === Id || Id.call(Qd, null !== (Gd = null === Od || void 0 === Od ? void 0 : Od.sessionMeta) && void 0 !== Gd ? Gd : null, dd.sessionMeta)
        }
      }
    }

    function bJ(dd) {
      let Jd, {
          fetchUserSession: kd,
          storeUserSession: pd,
          updateInterval: Nd = 0
        } = dd,
        Wd = 0;
      return dd => {
        const Pd = QJ();
        if (dd === Jd && Pd < Wd && Wd - Pd <= Nd) return;
        Jd = dd, Wd = Pd + Nd;
        const Zd = kd();
        (null === Zd || void 0 === Zd ? void 0 : Zd.sessionId) === dd && YJ(Zd) && pd(oJ(oJ({}, Zd), {}, {
          lastActivity: Pd
        }))
      }
    }

    function SJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Od;
      var pd, Nd, Wd, Pd, Zd, gd;
      const Cd = oJ(oJ({}, dd), {}, {
          sessionMeta: {
            id: dd.sessionId,
            attributes: XJ(oJ(oJ(oJ({}, null === (pd = kd.config.sessionTracking) || void 0 === pd || null === (pd = pd.session) || void 0 === pd ? void 0 : pd.attributes), null !== (Nd = null === (Wd = kd.metas.value.session) || void 0 === Wd ? void 0 : Wd.attributes) && void 0 !== Nd ? Nd : {}), {}, {
              isSampled: dd.isSampled.toString()
            }))
          }
        }),
        Kd = null !== (Pd = null === (Zd = kd.metas.value.session) || void 0 === Zd ? void 0 : Zd.overrides) && void 0 !== Pd ? Pd : null === Jd || void 0 === Jd || null === (gd = Jd.sessionMeta) || void 0 === gd ? void 0 : gd.overrides;
      td(Kd) || (Cd.sessionMeta.overrides = Kd);
      const od = null === Jd || void 0 === Jd ? void 0 : Jd.sessionId;
      return null != od && (Cd.sessionMeta.attributes.previousSession = od), Cd
    }

    function jJ(dd) {
      let {
        fetchUserSession: Jd,
        storeUserSession: kd
      } = dd, pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Od, Nd = !1;
      return function(dd) {
        if (Nd) return;
        const Wd = dd.session,
          Pd = Jd();
        let Zd = null === Wd || void 0 === Wd ? void 0 : Wd.id;
        const gd = null === Wd || void 0 === Wd ? void 0 : Wd.attributes,
          Cd = null === Wd || void 0 === Wd ? void 0 : Wd.overrides,
          Kd = null === Pd || void 0 === Pd ? void 0 : Pd.sessionMeta,
          od = null === Kd || void 0 === Kd ? void 0 : Kd.overrides,
          ld = !!Cd && !GJ(Cd, od),
          Qd = !!gd && !GJ(gd, null === Kd || void 0 === Kd ? void 0 : Kd.attributes);
        if (Wd && Zd !== (null === Pd || void 0 === Pd ? void 0 : Pd.sessionId) || Qd || ld) {
          var Ld, Od;
          const dd = null != Pd && Zd === Pd.sessionId,
            Jd = SJ(dd ? Pd : FJ({
              sessionId: Zd,
              isSampled: lJ(pd)
            }, pd), Pd, pd),
            Wd = null === Pd || void 0 === Pd || null === (Ld = Pd.sessionMeta) || void 0 === Ld || null === (Ld = Ld.attributes) || void 0 === Ld ? void 0 : Ld.previousSession;
          dd && null != Wd && Wd !== Jd.sessionId && (Jd.sessionMeta.attributes.previousSession = Wd), (null === (Od = Jd.sessionMeta.attributes) || void 0 === Od ? void 0 : Od.previousSession) === Jd.sessionId && delete Jd.sessionMeta.attributes.previousSession, kd(Jd),
            function(dd, Jd) {
              let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Nd, Wd, Pd;
              if (!Jd) return;
              const Zd = kd.serviceName,
                gd = null !== (Nd = null !== (Wd = pd.serviceName) && void 0 !== Wd ? Wd : null === (Pd = dd.metas.value.app) || void 0 === Pd ? void 0 : Pd.name) && void 0 !== Nd ? Nd : "";
              Zd && Zd !== gd && dd.api.pushEvent(aJ, {
                serviceName: Zd,
                previousServiceName: gd
              })
            }(pd, ld, Cd, od), Nd = !0;
          try {
            pd.api.setSession(Jd.sessionMeta)
          } finally {
            Nd = !1
          }
        }
      }
    }

    function XJ(dd) {
      const Jd = {};
      for (const kd of Object.keys(dd)) {
        const pd = dd[kd];
        void 0 !== pd && (Jd[kd] = pd)
      }
      return Jd
    }

    function fJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== dd && void 0 !== dd ? dd : {}, function() {
        const dd = new WeakSet;
        return function(Jd, kd) {
          if (Fd(kd) && null !== kd) {
            if (dd.has(kd)) return null;
            dd.add(kd)
          }
          return kd
        }
      }())
    }

    function nJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Jd = {};
      for (const [kd, pd] of Object.entries(dd)) Jd[kd] = Fd(pd) && null !== pd ? fJ(pd) : String(pd);
      return Jd
    }
    var UJ = class dd {
      constructor() {
        var Jd = this;
        let kd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od;
        this.context = kd, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = dd => {
          this.adopting = !0;
          try {
            var Jd;
            null === (Jd = this.context.api) || void 0 === Jd || Jd.setSession(dd)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: dd = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Jd.updateUserSession({
            refreshActivity: dd
          })
        }, this.recordActivity = bJ({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          updateInterval: Zd
        }), this.updateUserSession = mJ({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Zd
        }, kd), this.init()
      }
      static removeUserSession() {
        pJ(Nd, dd.storageTypeLocal)
      }
      static storeUserSession(Jd) {
        kJ(Nd, fJ(Jd), dd.storageTypeLocal)
      }
      static fetchUserSession() {
        const Jd = JJ(Nd, dd.storageTypeLocal);
        return Jd ? JSON.parse(Jd) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var dd;
            this.updateSession({
              refreshActivity: !1
            });
            const Jd = null === (dd = this.context.api) || void 0 === dd || null === (dd = dd.getSession()) || void 0 === dd ? void 0 : dd.id;
            Jd && this.recordActivity(Jd)
          }
        })), this.context.metas.addListener(jJ({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession
        }, this.context))
      }
    };
    UJ.storageTypeLocal = Ad;
    var yJ = class dd {
      constructor() {
        var Jd = this;
        let kd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od;
        this.context = kd, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: dd = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Jd.updateUserSession({
            refreshActivity: dd
          })
        }, this.recordActivity = bJ({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          updateInterval: Zd
        }), this.updateUserSession = mJ({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          updateInterval: Zd
        }, kd), this.init()
      }
      static removeUserSession() {
        pJ(Nd, dd.storageTypeSession)
      }
      static storeUserSession(Jd) {
        kJ(Nd, fJ(Jd), dd.storageTypeSession)
      }
      static fetchUserSession() {
        const Jd = JJ(Nd, dd.storageTypeSession);
        return Jd ? JSON.parse(Jd) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var dd;
            this.updateSession({
              refreshActivity: !1
            });
            const Jd = null === (dd = this.context.api) || void 0 === dd || null === (dd = dd.getSession()) || void 0 === dd ? void 0 : dd.id;
            Jd && this.recordActivity(Jd)
          }
        })), this.context.metas.addListener(jJ({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession
        }, this.context))
      }
    };
    yJ.storageTypeSession = wd;
    const DJ = new WeakMap;

    function TJ(dd) {
      let Jd = DJ.get(dd);
      if (!Jd) {
        let kd = [],
          pd = [];
        Jd = {
          addSessionUpdateListener: dd => {
            kd.push(dd)
          },
          removeSessionUpdateListener: dd => {
            kd = kd.filter((Jd => Jd !== dd))
          },
          notifySessionUpdate: dd => {
            kd.forEach((Jd => Jd(dd)))
          },
          shouldCapture: () => pd.every((dd => dd())),
          addCaptureFilter: dd => {
            pd.push(dd)
          },
          removeCaptureFilter: dd => {
            pd = pd.filter((Jd => Jd !== dd))
          }
        }, DJ.set(dd, Jd)
      }
      return Jd
    }
    var EJ = class {
      constructor(dd, Jd, kd) {
        this.metas = dd, this.transports = Jd, this.onActivate = kd, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = dd => {
          var Jd, kd, pd;
          const Nd = this.pending;
          var Wd, Pd;
          if ("overrides" === dd.type) return void(this.pending = {
            reset: null !== (Wd = null === Nd || void 0 === Nd ? void 0 : Nd.reset) && void 0 !== Wd && Wd,
            inheritOverrides: null === (Pd = null === Nd || void 0 === Nd ? void 0 : Nd.inheritOverrides) || void 0 === Pd || Pd,
            session: oJ(oJ({}, null === Nd || void 0 === Nd ? void 0 : Nd.session), {}, {
              overrides: oJ(oJ({}, null === Nd || void 0 === Nd ? void 0 : Nd.session.overrides), dd.overrides)
            })
          });
          const Zd = dd.session,
            gd = td(Zd) || null != Zd && "id" in Zd && !Zd.id,
            Cd = null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.overrides) && void 0 !== Jd ? Jd : null === Nd || void 0 === Nd ? void 0 : Nd.session.overrides;
          this.pending = {
            reset: gd || !(null === Zd || void 0 === Zd ? void 0 : Zd.id) && null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd.reset) && void 0 !== kd && kd,
            inheritOverrides: !(!dd.overrides && void 0 !== (null === Zd || void 0 === Zd ? void 0 : Zd.overrides)) && (null === (pd = null === Nd || void 0 === Nd ? void 0 : Nd.inheritOverrides) || void 0 === pd || pd),
            session: {
              id: null === Zd || void 0 === Zd ? void 0 : Zd.id,
              attributes: (null === Zd || void 0 === Zd ? void 0 : Zd.attributes) && oJ({}, Zd.attributes),
              overrides: dd.overrides ? oJ(oJ({}, null === Nd || void 0 === Nd ? void 0 : Nd.session.overrides), dd.overrides) : Cd && oJ({}, Cd)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var dd, Jd;
        this.waiting = !0, TJ(this.metas).addSessionUpdateListener(this.recordUpdate), TJ(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (dd = (Jd = this.metas).addCaptureListener) || void 0 === dd || dd.call(Jd, this.activate), this.activate()
      }
      destroy() {
        var dd, Jd;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), TJ(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (dd = (Jd = this.metas).removeCaptureListener) || void 0 === dd || dd.call(Jd, this.activate), TJ(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function cJ(dd) {
      return (null === dd || void 0 === dd ? void 0 : dd.persistent) ? UJ : yJ
    }

    function hJ() {}
    let rJ = function(dd) {
      return dd[dd.OFF = 0] = "OFF", dd[dd.ERROR = 1] = "ERROR", dd[dd.WARN = 2] = "WARN", dd[dd.INFO = 3] = "INFO", dd[dd.VERBOSE = 4] = "VERBOSE", dd
    }({});
    const uJ = {
        debug: hJ,
        error: hJ,
        info: hJ,
        prefix: "Faro",
        warn: hJ
      },
      tJ = 1;

    function VJ(dd) {
      return VJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, VJ(dd)
    }

    function zJ(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != VJ(dd) || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != VJ(pd)) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == VJ(Jd) ? Jd : Jd + ""
    }

    function HJ(dd, Jd, kd) {
      return (Jd = zJ(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function wJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function AJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? wJ(Object(kd), !0).forEach((function(Jd) {
          HJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : wJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }
    const dk = AJ({}, console);
    var Jk = class {
        constructor() {
          this.unpatchedConsole = dk, this.internalLogger = uJ, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
          this.internalLogger.debug(`${this.name}\n`, ...Jd)
        }
        logInfo() {
          for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
          this.internalLogger.info(`${this.name}\n`, ...Jd)
        }
        logWarn() {
          for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
          this.internalLogger.warn(`${this.name}\n`, ...Jd)
        }
        logError() {
          for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
          this.internalLogger.error(`${this.name}\n`, ...Jd)
        }
      },
      kk = class extends Jk {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const pk = "2.12.1";
    var Nk = class extends kk {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = pk, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(dd) {
        var Jd;
        const kd = dd.session;
        if (kd && kd.id !== (null === (Jd = this.notifiedSession) || void 0 === Jd ? void 0 : Jd.id)) {
          var pd;
          if (this.isAdoptingSession()) return void(this.notifiedSession = kd);
          if (this.notifiedSession && this.notifiedSession.id === (null === (pd = kd.attributes) || void 0 === pd ? void 0 : pd.previousSession)) return this.api.pushEvent(iJ, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = kd);
          this.notifiedSession = kd, this.api.pushEvent(BJ, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(dd, Jd, kd) {
        const pd = null === kd || void 0 === kd ? void 0 : kd.session;
        let Nd, Wd, Pd = dd.fetchUserSession();
        if (Jd.persistent && Jd.maxSessionPersistenceTime && Pd) {
          const dd = QJ();
          Pd.lastActivity < dd - Jd.maxSessionPersistenceTime && (UJ.removeUserSession(), Pd = null)
        }
        const Zd = YJ(Pd);
        if ((null === kd || void 0 === kd ? void 0 : kd.reset) || !Zd || (null === pd || void 0 === pd ? void 0 : pd.id) && pd.id !== (null === Pd || void 0 === Pd ? void 0 : Pd.sessionId)) {
          var gd, Cd, Kd, od, ld, Qd;
          Wd = FJ({
            sessionId: (null === kd || void 0 === kd ? void 0 : kd.reset) ? void 0 : null !== (gd = null === pd || void 0 === pd ? void 0 : pd.id) && void 0 !== gd ? gd : null === (Cd = Jd.session) || void 0 === Cd ? void 0 : Cd.id,
            isSampled: lJ(this)
          }, this);
          const dd = Wd.sessionId,
            Ld = kd && Zd ? null === Pd || void 0 === Pd || null === (Kd = Pd.sessionMeta) || void 0 === Kd ? void 0 : Kd.overrides : void 0,
            Od = Ld ? oJ(oJ({}, null === (od = Jd.session) || void 0 === od ? void 0 : od.overrides), Ld) : null === (ld = Jd.session) || void 0 === ld ? void 0 : ld.overrides;
          Wd.sessionMeta = oJ({
            id: dd,
            attributes: oJ({
              isSampled: Wd.isSampled.toString()
            }, null === (Qd = Jd.session) || void 0 === Qd ? void 0 : Qd.attributes)
          }, Od ? {
            overrides: Od
          } : {}), Nd = BJ
        } else {
          var Ld, Od;
          const dd = null === Pd || void 0 === Pd ? void 0 : Pd.sessionId;
          Wd = FJ({
            sessionId: dd,
            isSampled: Pd.isSampled || !1,
            started: null === Pd || void 0 === Pd ? void 0 : Pd.started
          }, this);
          const kd = null === Pd || void 0 === Pd ? void 0 : Pd.sessionMeta,
            pd = oJ(oJ({}, null === (Ld = Jd.session) || void 0 === Ld ? void 0 : Ld.overrides), null === kd || void 0 === kd ? void 0 : kd.overrides);
          Wd.sessionMeta = oJ(oJ({}, Jd.session), {}, {
            id: dd,
            attributes: oJ(oJ(oJ({}, null === (Od = Jd.session) || void 0 === Od ? void 0 : Od.attributes), null === kd || void 0 === kd ? void 0 : kd.attributes), {}, {
              isSampled: Wd.isSampled.toString()
            }),
            overrides: pd
          }), Nd = sJ
        }
        var ed;
        if (pd && (Wd.sessionMeta = oJ(oJ({}, Wd.sessionMeta), {}, {
            attributes: oJ(oJ(oJ({}, null === (ed = Wd.sessionMeta) || void 0 === ed ? void 0 : ed.attributes), pd.attributes), {}, {
              isSampled: Wd.isSampled.toString()
            })
          }), pd.overrides)) {
          const dd = (null === kd || void 0 === kd ? void 0 : kd.inheritOverrides) ? oJ(oJ({}, Wd.sessionMeta.overrides), pd.overrides) : pd.overrides;
          Object.keys(dd).length > 0 ? Wd.sessionMeta.overrides = dd : delete Wd.sessionMeta.overrides
        }
        return {
          initialSession: Wd,
          lifecycleType: Nd
        }
      }
      registerBeforeSendHook(dd) {
        var Jd;
        this.beforeSendHook = Jd => {
          var kd, pd;
          const Nd = null === (kd = Jd.meta.session) || void 0 === kd ? void 0 : kd.id;
          Nd && !this.transports.isPaused() && dd(Nd);
          const Wd = null === (pd = Jd.meta.session) || void 0 === pd ? void 0 : pd.attributes;
          if (Wd && "true" === (null === Wd || void 0 === Wd ? void 0 : Wd.isSampled)) {
            var Pd;
            let dd = JSON.parse(JSON.stringify(Jd));
            const kd = null === (Pd = dd.meta.session) || void 0 === Pd ? void 0 : Pd.attributes;
            var Zd;
            if (null === kd || void 0 === kd || delete kd.isSampled, 0 === Object.keys(null !== kd && void 0 !== kd ? kd : {}).length) null === (Zd = dd.meta.session) || void 0 === Zd || delete Zd.attributes;
            return dd
          }
          return null
        }, null === (Jd = this.transports) || void 0 === Jd || Jd.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var dd;
        this.logDebug("init session instrumentation");
        const Jd = document.prerendering;
        var kd;
        if ((null === (dd = this.config.sessionTracking) || void 0 === dd ? void 0 : dd.enabled) && (Jd || this.prerenderSession)) return null !== (kd = this.prerenderSession) && void 0 !== kd || (this.prerenderSession = new EJ(this.metas, this.transports, (dd => {
          this.prerenderSession = void 0, this.initializeSession(dd)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(dd) {
        const Jd = this.config.sessionTracking;
        if (null === Jd || void 0 === Jd ? void 0 : Jd.enabled) {
          var kd, pd;
          const Nd = cJ(Jd),
            Wd = new Nd(this);
          this.isAdoptingSession = Wd.isAdopting, this.registerBeforeSendHook(Wd.recordActivity);
          const {
            initialSession: Pd,
            lifecycleType: Zd
          } = this.createInitialSession(Nd, Jd, dd);
          Nd.storeUserSession(Pd);
          const gd = Pd.sessionMeta;
          this.notifiedSession = gd, this.api.setSession(gd), this.captureListener = () => {
            this.transports.isPaused() || Wd.updateSession({
              refreshActivity: !1
            })
          }, null === (kd = (pd = this.metas).addCaptureListener) || void 0 === kd || kd.call(pd, this.captureListener), Zd === BJ && this.api.pushEvent(BJ, {}, void 0, {
            skipDedupe: !0
          }), Zd === sJ && this.api.pushEvent(sJ, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var dd, Jd, kd;
        (null === (dd = this.prerenderSession) || void 0 === dd || dd.destroy(), this.captureListener) && (null === (Jd = (kd = this.metas).removeCaptureListener) || void 0 === Jd || Jd.call(kd, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Wk(dd, Jd, kd, pd) {
      const Nd = {
        filename: dd || document.location.href,
        function: Jd || "?"
      };
      return void 0 !== kd && (Nd.lineno = kd), void 0 !== pd && (Nd.colno = pd), Nd
    }
    const Pk = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Zk = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      gk = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Ck = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Kk = "safari-extension",
      lk = "safari-web-extension",
      Qk = /Minified React error #\d+;/i;

    function Lk(dd, Jd) {
      const kd = null === dd || void 0 === dd ? void 0 : dd.includes(Kk),
        pd = !kd && (null === dd || void 0 === dd ? void 0 : dd.includes("safari-web-extension"));
      return kd || pd ? [(null === dd || void 0 === dd ? void 0 : dd.includes("@")) ? dd.split("@")[0] : dd, kd ? `${Kk}:${Jd}` : `${lk}:${Jd}`] : [dd, Jd]
    }
    const Ok = 1024;

    function ek(dd) {
      let Jd = [];
      dd.stacktrace ? Jd = dd.stacktrace.split("\n").filter(((dd, Jd) => Jd % 2 === 0)) : dd.stack && (Jd = dd.stack.split("\n"));
      const kd = Jd.reduce(((Jd, kd, pd) => {
        if (kd.length > Ok) return Jd;
        let Nd, Wd, Pd, Zd, gd;
        if (Nd = Pk.exec(kd)) {
          if (Wd = Nd[1], Pd = Nd[2], Zd = Nd[3], gd = Nd[4], null === Pd || void 0 === Pd ? void 0 : Pd.startsWith("eval")) {
            const dd = Zk.exec(Pd);
            dd && (Pd = dd[1], Zd = dd[2], gd = dd[3])
          }
          Pd = (null === Pd || void 0 === Pd ? void 0 : Pd.startsWith("address at ")) ? Pd.substring(11) : Pd, [Wd, Pd] = Lk(Wd, Pd)
        } else if (Nd = gk.exec(kd)) {
          if (Wd = Nd[1], Pd = Nd[3], Zd = Nd[4], gd = Nd[5], Pd && Pd.includes(" > eval")) {
            const dd = Ck.exec(Pd);
            dd && (Wd = Wd || "eval", Pd = dd[1], Zd = dd[2])
          } else 0 === pd && !gd && Bd(dd.columnNumber) && (gd = String(dd.columnNumber + 1));
          [Wd, Pd] = Lk(Wd, Pd)
        }
        return (Pd || Wd) && Jd.push(Wk(Pd, Wd, Zd ? Number(Zd) : void 0, gd ? Number(gd) : void 0)), Jd
      }), []);
      return Qk.test(dd.message) ? kd.slice(1) : kd
    }

    function Rk(dd) {
      return {
        frames: ek(dd)
      }
    }
    const Ik = "http-request-start",
      Gk = "http-request-end";
    var vk = class dd {
      constructor() {
        this.subscribers = []
      }
      subscribe(dd) {
        return this.subscribers.push(dd), {
          unsubscribe: () => this.unsubscribe(dd)
        }
      }
      unsubscribe(dd) {
        this.subscribers = this.subscribers.filter((Jd => Jd !== dd))
      }
      notify(dd) {
        this.subscribers.forEach((Jd => Jd(dd)))
      }
      first() {
        const Jd = new dd,
          kd = dd => {
            Jd.notify(dd), pd.unsubscribe()
          },
          pd = this.subscribe(kd),
          Nd = Jd.unsubscribe.bind(Jd);
        return this.withUnsubscribeOverride(Jd, Nd, kd)
      }
      takeWhile(Jd) {
        const kd = new dd,
          pd = dd => {
            Jd(dd) ? kd.notify(dd) : kd.unsubscribe(pd)
          };
        this.subscribe(pd);
        const Nd = kd.unsubscribe.bind(kd);
        return this.withUnsubscribeOverride(kd, Nd, pd)
      }
      filter(Jd) {
        const kd = new dd,
          pd = dd => {
            Jd(dd) && kd.notify(dd)
          };
        this.subscribe(pd);
        const Nd = kd.unsubscribe.bind(kd);
        return this.withUnsubscribeOverride(kd, Nd, pd)
      }
      merge() {
        const Jd = new dd,
          kd = [];
        for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
        Nd.forEach((dd => {
          const pd = dd.subscribe((dd => {
            Jd.notify(dd)
          }));
          kd.push(pd)
        }));
        const Pd = Jd.unsubscribeAll.bind(Jd);
        return Jd.unsubscribe = () => {
          kd.forEach((dd => dd.unsubscribe())), Pd()
        }, Jd
      }
      withUnsubscribeOverride(dd, Jd, kd) {
        return dd.unsubscribe = dd => {
          Jd(dd), this.unsubscribe(kd)
        }, dd
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let xk = function(dd) {
      return dd.TRACE = "trace", dd.DEBUG = "debug", dd.INFO = "info", dd.LOG = "log", dd.WARN = "warn", dd.ERROR = "error", dd
    }({});
    const qk = "log",
      Bk = ["trace", "debug", "info", "log", "warn", "error"];
    let sk, ik = !1;
    const ak = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Mk = "Error",
      Fk = dd => dd.map((dd => Fd(dd) ? fJ(dd) : String(dd))).join(" ");

    function Yk(dd) {
      let Jd, kd, pd, Nd, Wd = [];
      if (yd(dd) && dd.error) Jd = dd.error.message, kd = dd.error.name, Wd = ek(dd.error);
      else if ((pd = Dd(dd)) || Td(dd)) {
        const {
          name: Nd,
          message: Wd
        } = dd;
        kd = null !== Nd && void 0 !== Nd ? Nd : pd ? "DOMError" : "DOMException", Jd = Wd ? `${kd}: ${Wd}` : kd
      } else Ud(dd) ? (kd = dd.name, Jd = dd.message, Wd = ek(dd)) : (Fd(dd) || (Nd = fd(dd))) && (kd = Nd ? dd.constructor.name : void 0, Jd = `Non-Error exception captured with keys: ${Object.keys(dd)}`);
      return [Jd, kd, Wd]
    }

    function mk(dd) {
      const [Jd, kd, pd, Nd, Wd] = dd;
      let Pd, Zd, gd = [];
      const Cd = qd(Jd),
        Kd = Wk(kd, "?", pd, Nd);
      return Wd || !Cd ? ([Pd, Zd, gd] = Yk(null !== Wd && void 0 !== Wd ? Wd : Jd), 0 === gd.length && (gd = [Kd])) : Cd && ([Pd, Zd] = function(dd) {
        var Jd, kd;
        const pd = dd.match(ak),
          Nd = null !== (Jd = null === pd || void 0 === pd ? void 0 : pd[1]) && void 0 !== Jd ? Jd : Mk;
        return [null !== (kd = null === pd || void 0 === pd ? void 0 : pd[2]) && void 0 !== kd ? kd : dd, Nd]
      }(Jd), gd = [Kd]), {
        value: Pd,
        type: Zd,
        stackFrames: gd
      }
    }

    function bk(dd, Jd) {
      return Ud(dd[0]) ? mk(dd) : {
        value: Jd(dd)
      }
    }
    const Sk = dd => dd.map((dd => {
      try {
        return String(dd)
      } catch (Jd) {
        return ""
      }
    })).join(" ");
    var jk = class dd extends kk {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = pk, this.errorSerializer = Sk
      }
      initialize() {
        var Jd, kd;
        const pd = this.config.consoleInstrumentation,
          Nd = (null === pd || void 0 === pd ? void 0 : pd.serializeErrors) || !!(null === pd || void 0 === pd ? void 0 : pd.errorSerializer);
        this.errorSerializer = Nd ? null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.errorSerializer) && void 0 !== Jd ? Jd : Fk : Sk;
        const Wd = null !== (kd = null === pd || void 0 === pd ? void 0 : pd.disabledLevels) && void 0 !== kd ? kd : dd.defaultDisabledLevels,
          Pd = function(dd) {
            if (sk || (sk = new vk), !ik) {
              const Jd = null !== dd && void 0 !== dd ? dd : dk;
              Bk.forEach((dd => {
                console[dd] = function() {
                  for (var kd, pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
                  sk.notify({
                    type: "console",
                    level: dd,
                    args: Nd
                  }), null === (kd = Jd[dd]) || void 0 === kd || kd.apply(console, Nd)
                }
              })), ik = !0
            }
            return sk
          }(this.unpatchedConsole);
        this.subscription = Pd.subscribe((Jd => {
          let {
            level: kd,
            args: Nd
          } = Jd;
          if (!Wd.includes(kd)) try {
            if (kd !== xk.ERROR || (null === pd || void 0 === pd ? void 0 : pd.consoleErrorAsLog))
              if (kd === xk.ERROR && (null === pd || void 0 === pd ? void 0 : pd.consoleErrorAsLog)) {
                const {
                  value: Jd,
                  type: pd,
                  stackFrames: Wd
                } = bk(Nd, this.errorSerializer);
                this.api.pushLog(Jd ? [dd.consoleErrorPrefix + Jd] : Nd, {
                  level: kd,
                  context: {
                    value: null !== Jd && void 0 !== Jd ? Jd : "",
                    type: null !== pd && void 0 !== pd ? pd : "",
                    stackFrames: (null === Wd || void 0 === Wd ? void 0 : Wd.length) ? Fk(Wd) : ""
                  }
                })
              } else this.api.pushLog(Nd, {
                level: kd
              });
            else {
              const {
                value: Jd,
                type: kd,
                stackFrames: pd
              } = bk(Nd, this.errorSerializer);
              if (Jd && !kd && !pd) return void this.api.pushError(new Error(dd.consoleErrorPrefix + Jd));
              this.api.pushError(new Error(dd.consoleErrorPrefix + Jd), {
                type: kd,
                stackFrames: pd
              })
            }
          } catch (Pd) {
            this.logError(Pd)
          }
        }))
      }
      destroy() {
        var dd;
        null === (dd = this.subscription) || void 0 === dd || dd.unsubscribe(), this.subscription = void 0
      }
    };
    jk.defaultDisabledLevels = [xk.DEBUG, xk.TRACE, xk.LOG], jk.consoleErrorPrefix = "console.error: ";
    const Xk = [];
    var fk = class extends kk {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = pk
      }
      initialize() {
        this.logDebug("Initializing"),
          function(dd) {
            const Jd = window.onerror;
            window.onerror = function() {
              for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
              try {
                const {
                  value: Jd,
                  type: kd,
                  stackFrames: Nd
                } = mk(pd), Wd = pd[4];
                if (Jd) {
                  const pd = {
                    type: kd,
                    stackFrames: Nd
                  };
                  null != Wd && (pd.originalError = Wd), dd.pushError(new Error(Jd), pd)
                }
              } finally {
                null === Jd || void 0 === Jd || Jd.apply(window, pd)
              }
            }
          }(this.api),
          function(dd) {
            const Jd = Jd => {
              var kd;
              let pd, Nd, Wd = Jd;
              if (Wd.reason) Wd = Jd.reason;
              else if (null === (kd = Jd.detail) || void 0 === kd ? void 0 : kd.reason) {
                var Pd;
                Wd = null === (Pd = Jd.detail) || void 0 === Pd ? void 0 : Pd.reason
              }
              let Zd = [];
              jd(Wd) ? (pd = `Non-Error promise rejection captured with value: ${String(Wd)}`, Nd = "UnhandledRejection") : [pd, Nd, Zd] = Yk(Wd), pd && dd.pushError(new Error(pd), {
                type: Nd,
                stackFrames: Zd
              })
            };
            window.addEventListener("unhandledrejection", Jd), Xk.push(Jd)
          }(this.api)
      }
    };
    const nk = "unknown";
    var Uk = class extends kk {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = pk, this.waitingForActivation = !1, this.sendViewChangedEvent = dd => {
          var Jd;
          if (this.waitingForActivation || document.prerendering) return;
          const kd = dd.view;
          if (kd && kd.name !== (null === (Jd = this.notifiedView) || void 0 === Jd ? void 0 : Jd.name)) {
            var pd, Nd, Wd;
            const dd = null !== (pd = null === (Nd = this.notifiedView) || void 0 === Nd ? void 0 : Nd.name) && void 0 !== pd ? pd : nk;
            this.notifiedView = kd, this.api.pushEvent(qJ, {
              fromView: dd,
              toView: null !== (Wd = kd.name) && void 0 !== Wd ? Wd : nk
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
    class yk {
      t;
      o = 0;
      i = [];
      l(dd) {
        if (dd.hadRecentInput) return;
        const Jd = this.i[0],
          kd = this.i.at(-1);
        this.o && Jd && kd && dd.startTime - kd.startTime < 1e3 && dd.startTime - Jd.startTime < 5e3 ? (this.o += dd.value, this.i.push(dd)) : (this.o = dd.value, this.i = [dd]), this.t?.(dd)
      }
    }
    const Dk = () => {
        const dd = performance.getEntriesByType("navigation")[0];
        if (dd && dd.responseStart > 0 && dd.responseStart < performance.now()) return dd
      },
      Tk = dd => {
        if ("loading" === document.readyState) return "loading";
        const Jd = Dk();
        if (Jd) {
          if (dd < Jd.domInteractive) return "loading";
          if (0 === Jd.domContentLoadedEventStart || dd < Jd.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Jd.domComplete || dd < Jd.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Ek = dd => {
        const Jd = dd.nodeName;
        return 1 === dd.nodeType ? Jd.toLowerCase() : Jd.toUpperCase().replace(/^#/, "")
      },
      ck = dd => {
        let Jd = "";
        try {
          for (; 9 !== dd?.nodeType;) {
            const kd = dd,
              pd = kd.id ? "#" + kd.id : [Ek(kd), ...Array.from(kd.classList ?? []).sort()].join(".");
            if (Jd.length + pd.length > 99) return Jd || pd;
            if (Jd = Jd ? pd + ">" + Jd : pd, kd.id) break;
            dd = kd.parentNode
          }
        } catch {}
        return Jd
      },
      hk = new WeakMap;

    function rk(dd, Jd) {
      let kd = hk.get(Jd);
      return kd || (kd = new WeakMap, hk.set(Jd, kd)), kd.get(dd) || kd.set(dd, new Jd), kd.get(dd)
    }
    let uk = -1;
    const tk = () => uk,
      Vk = dd => {
        addEventListener("pageshow", (Jd => {
          Jd.persisted && (uk = Jd.timeStamp, dd(Jd))
        }), !0)
      },
      zk = (dd, Jd, kd, pd) => {
        let Nd, Wd;
        return Pd => {
          Jd.value >= 0 && (Pd || pd) && (Wd = Jd.value - (Nd ?? 0), (Wd || void 0 === Nd) && (Nd = Jd.value, Jd.delta = Wd, Jd.rating = ((dd, Jd) => dd > Jd[1] ? "poor" : dd > Jd[0] ? "needs-improvement" : "good")(Jd.value, kd), dd(Jd)))
        }
      },
      Hk = dd => {
        requestAnimationFrame((() => requestAnimationFrame((() => dd()))))
      },
      wk = () => Dk()?.activationStart ?? 0;
    let Ak = -1;
    const dp = new Set,
      Jp = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      kp = dd => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === dd.type)
            for (const dd of dp) dd();
          isFinite(Ak) || (Ak = "visibilitychange" === dd.type ? dd.timeStamp : 0, removeEventListener("prerenderingchange", kp, !0))
        }
      },
      pp = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Ak = 1 / 0), Ak < 0) {
          const dd = wk(),
            Jd = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Jd => "hidden" === Jd.name && Jd.startTime >= dd))?.startTime;
          Ak = Jd ?? Jp(), addEventListener("visibilitychange", kp, !0), addEventListener("prerenderingchange", kp, !0), Vk((() => {
            setTimeout((() => {
              Ak = Jp()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Ak
          },
          onHidden(dd) {
            dp.add(dd)
          }
        }
      },
      Np = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Pd = arguments.length > 6 ? arguments[6] : void 0;
        const Zd = Dk(),
          gd = Zd?.navigationId || 0;
        let Cd = "navigate";
        return kd ? Cd = kd : tk() >= 0 ? Cd = "back-forward-cache" : Zd && (document.prerendering || wk() > 0 ? Cd = "prerender" : document.wasDiscarded ? Cd = "restore" : Zd.type && (Cd = Zd.type.replace(/_/g, "-"))), {
          name: dd,
          value: Jd,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Cd,
          navigationId: pd || gd,
          navigationInteractionId: Nd,
          navigationURL: Wd || Zd?.name,
          navigationStartTime: Pd || 0
        }
      },
      Wp = function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const pd = dd.filter((dd => PerformanceObserver.supportedEntryTypes.includes(dd)));
          if (pd.length > 0) {
            const dd = new PerformanceObserver((dd => {
              queueMicrotask((() => {
                const kd = dd.getEntries();
                pd.length > 1 && kd.sort(((dd, Jd) => dd.startTime + dd.duration - (Jd.startTime + Jd.duration))), Jd(kd)
              }))
            }));
            for (const Jd of pd) dd.observe({
              type: Jd,
              buffered: !0,
              ...kd
            });
            return dd
          }
        } catch {}
      },
      Pp = dd => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && dd && dd.reportSoftNavs,
      Zp = (dd, Jd) => {
        if (dd.set(Jd.navigationId, Jd), dd.size > 2) {
          const Jd = dd.keys().next().value;
          void 0 !== Jd && dd.delete(Jd)
        }
      },
      gp = dd => {
        let Jd = !1;
        return () => {
          Jd || (dd(), Jd = !0)
        }
      };
    class Cp {
      u
    }
    const Kp = dd => {
        document.prerendering ? addEventListener("prerenderingchange", dd, !0) : dd()
      },
      op = [1800, 3e3],
      lp = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const kd = Pp(Jd);
        Kp((() => {
          const pd = rk(Jd, Cp),
            Nd = pp();
          let Wd, Pd = Np("FCP");
          const Zd = Wp(["paint"], (dd => {
            for (const Jd of dd) "first-contentful-paint" === Jd.name && (Zd.disconnect(), Jd.startTime < Nd.firstHiddenTime && (Pd.value = Math.max(Jd.startTime - wk(), 0), Pd.entries.push(Jd), Pd.navigationId = Jd.navigationId || Pd.navigationId, Wd(!0)))
          }));
          Zd && (Wd = zk(dd, Pd, op, Jd.reportAllChanges), Vk((kd => {
            Pd = Np("FCP", -1, "back-forward-cache", Pd.navigationId, Pd.navigationInteractionId, Pd.navigationURL, tk()), Wd = zk(dd, Pd, op, Jd.reportAllChanges), Hk((() => {
              Pd.value = performance.now() - kd.timeStamp, Wd(!0)
            }))
          }))), kd && Wp(["soft-navigation"], (kd => {
            kd.forEach((kd => {
              pd.u && kd.navigationId && Zp(pd.u, kd);
              const Nd = Math.max((kd.presentationTime || kd.paintTime || 0) - kd.startTime, 0);
              Pd = Np("FCP", Nd, "soft-navigation", kd.navigationId, kd.interactionId, kd.name, kd.startTime), Wd = zk(dd, Pd, op, Jd.reportAllChanges), Wd(!0)
            }))
          }), Jd)
        }))
      },
      Qp = [.1, .25],
      Lp = dd => dd.find((dd => 1 === dd.node?.nodeType)) || dd[0];
    let Op = 0,
      ep = 1 / 0,
      Rp = 0;
    const Ip = dd => {
      for (const Jd of dd) Jd.interactionId && (ep = Math.min(ep, Jd.interactionId), Rp = Math.max(Rp, Jd.interactionId), Op = Rp ? (Rp - ep) / 7 + 1 : 0)
    };
    let Gp;
    const vp = () => Gp ? Op : performance.interactionCount ?? 0;
    class xp {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return vp() - this.h
      }
      D() {
        this.h = vp(), this.v.length = 0, this.p.clear()
      }
      S(dd) {
        const Jd = this.T(),
          kd = Math.min(this.v.length - 1, Math.floor(Jd / 50));
        return !Jd || -1 !== kd || "soft-navigation" !== dd && "back-forward-cache" !== dd ? this.v[kd] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(dd) {
        if (this.m?.(dd), !dd.interactionId) return;
        const Jd = this.v.at(-1);
        let kd = this.p.get(dd.interactionId);
        if (kd || this.v.length < 10 || dd.duration > Jd.k) {
          if (kd ? dd.duration > kd.k ? (kd.entries = [dd], kd.k = dd.duration) : dd.duration === kd.k && dd.startTime === kd.entries[0].startTime && kd.entries.push(dd) : (kd = {
              id: dd.interactionId,
              entries: [dd],
              k: dd.duration
            }, this.p.set(kd.id, kd), this.v.push(kd)), this.v.sort(((dd, Jd) => Jd.k - dd.k)), this.v.length > 10) {
            const dd = this.v.splice(10);
            for (const Jd of dd) this.p.delete(Jd.id)
          }
          this.M?.(kd)
        }
      }
    }
    const qp = dd => {
        const Jd = "requestIdleCallback" in globalThis ? 1e3 : 0,
          kd = globalThis.requestIdleCallback || setTimeout,
          pd = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) dd();
        else {
          const Nd = gp(dd);
          let Wd = -1;
          const Pd = () => {
            pd(Wd), Nd()
          };
          addEventListener("visibilitychange", Pd, {
            once: !0,
            capture: !0
          }), Wd = kd((() => {
            removeEventListener("visibilitychange", Pd, {
              capture: !0
            }), Nd()
          }), {
            timeout: Jd
          })
        }
      },
      Bp = [200, 500],
      sp = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const kd = rk(Jd = Object.assign({}, Jd), xp);
        let pd = [],
          Nd = [],
          Wd = 0;
        const Pd = new WeakMap,
          Zd = new WeakMap;
        let gd = !1;
        const Cd = () => {
            gd || (gd = !0, qp(Kd))
          },
          Kd = () => {
            const dd = new Set(kd.v.map((dd => Pd.get(dd.entries[0])))),
              Jd = Nd.length - 10;
            Nd = Nd.filter(((kd, pd) => pd >= Jd || dd.has(kd)));
            const Zd = new Set;
            for (const kd of Nd) {
              const dd = od(kd.startTime, kd.processingEnd);
              for (const Jd of dd) Zd.add(Jd)
            }
            const Cd = pd.length - 10;
            pd = pd.filter(((dd, Jd) => Zd.has(dd) || Jd >= Cd && dd.startTime > Wd)), gd = !1
          };
        kd.m = dd => {
          const kd = dd.startTime + dd.duration;
          let pd;
          Wd = Math.max(Wd, dd.processingEnd);
          for (let Wd = Nd.length - 1; Wd >= 0; Wd--) {
            const Pd = Nd[Wd];
            if (Math.abs(kd - Pd.renderTime) <= 8) {
              pd = Pd, pd.startTime = Math.min(dd.startTime, pd.startTime), pd.processingStart = Math.min(dd.processingStart, pd.processingStart), pd.processingEnd = Math.max(dd.processingEnd, pd.processingEnd), Jd.includeProcessedEventEntries && pd.entries.push(dd);
              break
            }
          }
          pd || (pd = {
            startTime: dd.startTime,
            processingStart: dd.processingStart,
            processingEnd: dd.processingEnd,
            renderTime: kd,
            entries: Jd.includeProcessedEventEntries ? [dd] : []
          }, Nd.push(pd)), dd.interactionId && Pd.set(dd, pd), Cd()
        }, kd.M = dd => {
          if (!Zd.get(dd)) {
            const kd = dd.entries.find((dd => dd.target))?.target;
            if (kd) {
              const pd = Jd.generateTarget?.(kd) ?? ck(kd);
              Zd.set(dd, pd)
            } else {
              const Jd = dd.entries.find((dd => dd.targetSelector))?.targetSelector;
              Jd && Zd.set(dd, Jd)
            }
          }
        };
        const od = (dd, Jd) => {
          const kd = [];
          for (const Nd of pd)
            if (!(Nd.startTime + Nd.duration < dd)) {
              if (Nd.startTime > Jd) break;
              kd.push(Nd)
            } return kd
        };
        Wp(["long-animation-frame"], (dd => {
            pd = pd.concat(dd), Cd()
          }), Jd),
          function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const kd = pp();
            Kp((() => {
              "interactionCount" in performance || Gp || (Gp = Wp(["event"], Ip, {
                durationThreshold: 0
              }));
              let pd, Nd = Np("INP");
              const Wd = rk(Jd, xp),
                Pd = (kd, Pd, Zd, gd, Cd) => {
                  Wd.D(), Nd = Np("INP", -1, kd, Pd, Zd, gd, Cd), pd = zk(dd, Nd, Bp, Jd.reportAllChanges)
                },
                Zd = () => {
                  const dd = Wd.S(Nd.navigationType);
                  dd && dd.k !== Nd.value && (Nd.value = dd.k, Nd.entries = dd.entries, pd())
                },
                gd = dd => {
                  Zd(), pd(!0), Pd("soft-navigation", dd.navigationId, dd.interactionId, dd.name, dd.startTime)
                },
                Cd = function(dd) {
                  let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  qp((() => {
                    for (const Jd of dd) "soft-navigation" !== Jd.entryType ? Wd.l(Jd) : gd(Jd);
                    Zd(), Jd && pd(!0)
                  }))
                },
                Kd = ["event", "first-input"];
              Pp(Jd) && Kd.push("soft-navigation");
              const od = Wp(Kd, Cd, {
                ...Jd,
                durationThreshold: Jd.durationThreshold ?? 40
              });
              pd = zk(dd, Nd, Bp, Jd.reportAllChanges), od && (kd.onHidden((() => {
                Cd(od.takeRecords(), !0)
              })), Vk((() => {
                Pd("back-forward-cache", Nd.navigationId, Nd.navigationInteractionId, Nd.navigationURL, tk())
              })))
            }))
          }((Jd => {
            dd((dd => {
              if (0 === dd.entries.length) {
                const Jd = dd.navigationStartTime || 0,
                  kd = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: dd.value,
                    loadState: Tk(Jd)
                  };
                return Object.assign(dd, {
                  attribution: kd
                })
              }
              const Jd = dd.entries[0],
                pd = Pd.get(Jd),
                Nd = Math.max(pd.processingStart, Jd.startTime),
                Wd = Math.max(Jd.startTime + Jd.duration, Nd),
                gd = Math.min(pd.processingEnd, Wd),
                Cd = pd.entries.sort(((dd, Jd) => dd.processingStart - Jd.processingStart)),
                Kd = od(Jd.startTime, gd),
                ld = kd.p.get(Jd.interactionId),
                Qd = {
                  interactionTarget: Zd.get(ld),
                  interactionType: Jd.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Jd.startTime,
                  nextPaintTime: Wd,
                  processedEventEntries: Cd,
                  longAnimationFrameEntries: Kd,
                  inputDelay: Nd - Jd.startTime,
                  processingDuration: gd - Nd,
                  presentationDelay: Wd - gd,
                  loadState: Tk(Jd.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (dd => {
                const Jd = dd.interactionTime,
                  kd = dd.nextPaintTime;
                if (!dd.longAnimationFrameEntries?.length || !Jd || !kd) return;
                const pd = dd.inputDelay,
                  Nd = dd.processingDuration;
                let Wd, Pd, Zd = 0,
                  gd = 0,
                  Cd = 0,
                  Kd = 0;
                for (const Qd of dd.longAnimationFrameEntries) {
                  gd = gd + Qd.startTime + Qd.duration - Qd.styleAndLayoutStart;
                  for (const dd of Qd.scripts) {
                    const kd = dd.startTime + dd.duration;
                    if (kd < Jd) continue;
                    const Cd = kd - Math.max(Jd, dd.startTime),
                      od = dd.duration ? Cd / dd.duration * dd.forcedStyleAndLayoutDuration : 0;
                    Zd += Cd - od, gd += od, Cd > Kd && (Pd = dd.startTime < Jd + pd ? "input-delay" : dd.startTime >= Jd + pd + Nd ? "presentation-delay" : "processing-duration", Wd = dd, Kd = Cd)
                  }
                }
                const od = dd.longAnimationFrameEntries.at(-1),
                  ld = od ? od.startTime + od.duration : 0;
                ld >= Jd + pd + Nd && (Cd = kd - ld), Wd && Pd && (dd.longestScript = {
                  entry: Wd,
                  subpart: Pd,
                  intersectingDuration: Kd
                }), dd.totalScriptDuration = Zd, dd.totalStyleAndLayoutDuration = gd, dd.totalPaintDuration = Cd, dd.totalUnattributedDuration = kd - Jd - Zd - gd - Cd
              })(Qd), Object.assign(dd, {
                attribution: Qd
              })
            })(Jd))
          }), Jd)
      };
    class ip {
      m;
      u;
      l(dd) {
        this.m?.(dd)
      }
    }
    const ap = [2500, 4e3];
    let Mp = 50;
    const Fp = [];
    Wp(["resource"], (dd => {
      for (const Jd of dd) Fp.push(Jd), Fp.length > Mp && Fp.shift()
    }));
    const Yp = [800, 1800],
      mp = dd => {
        document.prerendering ? Kp((() => mp(dd))) : "complete" !== document.readyState ? addEventListener("load", (() => mp(dd)), !0) : setTimeout(dd)
      },
      bp = "load_state",
      Sp = "time_to_first_byte";
    var jp = class {
        constructor(dd, Jd) {
          this.corePushMeasurement = dd, this.webVitalConfig = Jd
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var dd;
          ! function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const kd = rk(Jd = Object.assign({}, Jd), yk),
              pd = new WeakMap;
            kd.t = dd => {
                if (dd?.sources?.length) {
                  const kd = Lp(dd.sources),
                    Nd = kd?.node;
                  if (Nd) {
                    const dd = Jd.generateTarget?.(Nd) ?? ck(Nd);
                    pd.set(kd, dd)
                  }
                }
              },
              function(dd) {
                let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const kd = pp();
                lp(gp((() => {
                  let pd, Nd = Np("CLS", 0);
                  const Wd = rk(Jd, yk),
                    Pd = (kd, Pd, Zd, gd, Cd) => {
                      Nd = Np("CLS", 0, kd, Pd, Zd, gd, Cd), Wd.o = 0, pd = zk(dd, Nd, Qp, Jd.reportAllChanges)
                    },
                    Zd = function() {
                      let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Wd.o > Nd.value && (Nd.value = Wd.o, Nd.entries = Wd.i), pd(dd)
                    },
                    gd = dd => {
                      Zd(!0), Pd("soft-navigation", dd.navigationId, dd.interactionId, dd.name, dd.startTime)
                    },
                    Cd = dd => {
                      for (const Jd of dd) "soft-navigation" !== Jd.entryType ? Wd.l(Jd) : gd(Jd);
                      Zd()
                    },
                    Kd = ["layout-shift"];
                  Pp(Jd) && Kd.push("soft-navigation");
                  const od = Wp(Kd, Cd);
                  od && (pd = zk(dd, Nd, Qp, Jd.reportAllChanges), kd.onHidden((() => {
                    Cd(od.takeRecords()), pd(!0)
                  })), Vk((() => {
                    Pd("back-forward-cache", Nd.navigationId, Nd.navigationInteractionId, Nd.navigationURL, tk()), Hk(pd)
                  })), setTimeout(pd))
                })))
              }((Jd => {
                dd((dd => {
                  let Jd = {};
                  if (dd.entries.length) {
                    const kd = dd.entries.reduce(((dd, Jd) => dd.value > Jd.value ? dd : Jd));
                    if (kd?.sources?.length) {
                      const dd = Lp(kd.sources);
                      dd && (Jd = {
                        largestShiftTarget: pd.get(dd),
                        largestShiftTime: kd.startTime,
                        largestShiftValue: kd.value,
                        largestShiftSource: dd,
                        largestShiftEntry: kd,
                        loadState: Tk(kd.startTime)
                      })
                    }
                  }
                  return Object.assign(dd, {
                    attribution: Jd
                  })
                })(Jd))
              }), Jd)
          }((dd => {
            const {
              loadState: Jd,
              largestShiftValue: kd,
              largestShiftTime: pd,
              largestShiftTarget: Nd
            } = dd.attribution, Wd = this.buildInitialValues(dd);
            this.addIfPresent(Wd, "largest_shift_value", kd), this.addIfPresent(Wd, "largest_shift_time", pd);
            const Pd = this.buildInitialContext(dd);
            this.addIfPresent(Pd, bp, Jd), this.addIfPresent(Pd, "largest_shift_target", Nd), this.pushMeasurement(Wd, Pd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureFCP() {
          var dd;
          ! function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const kd = rk(Jd = Object.assign({}, Jd), Cp);
            Pp(Jd) && (kd.u = new Map), lp((Jd => {
              dd((dd => {
                let Jd = {
                  timeToFirstByte: 0,
                  firstByteToFCP: dd.value,
                  loadState: Tk(tk())
                };
                if ("soft-navigation" !== dd.navigationType) {
                  if (dd.entries.length) {
                    const kd = Dk(),
                      pd = dd.entries.at(-1);
                    if (kd) {
                      const Nd = kd.responseStart,
                        Wd = kd.activationStart || 0,
                        Pd = Math.max(0, Nd - Wd);
                      Jd = {
                        timeToFirstByte: Pd,
                        firstByteToFCP: dd.value - Pd,
                        loadState: Tk(dd.entries[0].startTime),
                        navigationEntry: kd,
                        fcpEntry: pd
                      }
                    }
                  }
                } else {
                  const pd = kd.u?.get(dd.navigationId);
                  pd && (Jd = {
                    timeToFirstByte: 0,
                    firstByteToFCP: dd.value,
                    loadState: "complete",
                    navigationEntry: pd
                  })
                }
                return Object.assign(dd, {
                  attribution: Jd
                })
              })(Jd))
            }), Jd)
          }((dd => {
            const {
              firstByteToFCP: Jd,
              timeToFirstByte: kd,
              loadState: pd
            } = dd.attribution, Nd = this.buildInitialValues(dd);
            this.addIfPresent(Nd, "first_byte_to_fcp", Jd), this.addIfPresent(Nd, Sp, kd);
            const Wd = this.buildInitialContext(dd);
            this.addIfPresent(Wd, bp, pd), this.pushMeasurement(Nd, Wd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureINP() {
          var dd;
          sp((dd => {
            var Jd;
            const {
              interactionTime: kd,
              presentationDelay: pd,
              inputDelay: Nd,
              processingDuration: Wd,
              nextPaintTime: Pd,
              loadState: Zd,
              interactionTarget: gd,
              interactionType: Cd,
              totalScriptDuration: Kd,
              totalStyleAndLayoutDuration: od,
              totalPaintDuration: ld,
              totalUnattributedDuration: Qd,
              longestScript: Ld
            } = dd.attribution, Od = this.buildInitialValues(dd);
            this.addIfPresent(Od, "interaction_time", kd), this.addIfPresent(Od, "presentation_delay", pd), this.addIfPresent(Od, "input_delay", Nd), this.addIfPresent(Od, "processing_duration", Wd), this.addIfPresent(Od, "next_paint_time", Pd), this.addNumberIfDefined(Od, "total_script_duration", Kd), this.addNumberIfDefined(Od, "total_style_and_layout_duration", od), this.addNumberIfDefined(Od, "total_paint_duration", ld), this.addNumberIfDefined(Od, "total_unattributed_duration", Qd), this.addNumberIfDefined(Od, "longest_script_intersecting_duration", null === Ld || void 0 === Ld ? void 0 : Ld.intersectingDuration);
            const ed = this.buildInitialContext(dd);
            this.addIfPresent(ed, bp, Zd), this.addIfPresent(ed, "interaction_target", gd), this.addIfPresent(ed, "interaction_type", Cd), this.addIfPresent(ed, "longest_script_subpart", null === Ld || void 0 === Ld ? void 0 : Ld.subpart), this.addIfPresent(ed, "longest_script_invoker_type", null === Ld || void 0 === Ld ? void 0 : Ld.entry.invokerType), (null === (Jd = this.webVitalConfig) || void 0 === Jd ? void 0 : Jd.trackAttributionSources) && (this.addIfPresent(ed, "longest_script_invoker", null === Ld || void 0 === Ld ? void 0 : Ld.entry.invoker), this.addIfPresent(ed, "longest_script_source_url", null === Ld || void 0 === Ld ? void 0 : Ld.entry.sourceURL), this.addIfPresent(ed, "longest_script_source_function_name", null === Ld || void 0 === Ld ? void 0 : Ld.entry.sourceFunctionName), this.addIfPresent(ed, "longest_script_source_char_position", void 0 !== (null === Ld || void 0 === Ld ? void 0 : Ld.entry.sourceCharPosition) ? String(Ld.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Od, ed)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureLCP() {
          var dd;
          ! function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Jd = Object.assign({}, Jd)).resourceBufferSize && (Mp = Jd.resourceBufferSize);
            const kd = rk(Jd, ip),
              pd = new WeakMap;
            Pp(Jd) && (kd.u = new Map), kd.m = dd => {
                const kd = dd.element;
                if (kd) {
                  const Nd = Jd.generateTarget?.(kd) ?? ck(kd);
                  pd.set(dd, Nd)
                } else dd.id && pd.set(dd, `#${dd.id}`)
              },
              function(dd) {
                let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  kd = !1;
                const pd = Pp(Jd);
                Kp((() => {
                  let Nd, Wd = pp(),
                    Pd = Np("LCP");
                  const Zd = rk(Jd, ip),
                    gd = (pd, Zd, gd, Cd, Kd) => {
                      Pd = Np("LCP", -1, pd, Zd, gd, Cd, Kd), Nd = zk(dd, Pd, ap, Jd.reportAllChanges), kd = !1, "soft-navigation" === pd && (Wd = pp(!0))
                    },
                    Cd = dd => {
                      Zd.u && dd.navigationId && Zp(Zd.u, dd), kd || Nd(!0), gd("soft-navigation", dd.navigationId, dd.interactionId, dd.name, dd.startTime);
                      const Jd = dd.getLargestInteractionContentfulPaint?.();
                      Jd && Kd([Jd])
                    },
                    Kd = dd => {
                      Jd.reportAllChanges || pd || (dd = dd.slice(-1));
                      for (const Jd of dd) {
                        if (!Jd) continue;
                        if ("soft-navigation" === Jd.entryType) {
                          Cd(Jd);
                          continue
                        }
                        let dd = 0,
                          kd = [],
                          pd = Jd.startTime;
                        if ("largest-contentful-paint" === Jd.entryType) dd = Math.max(Jd.startTime - wk(), 0), Zd.l(Jd), kd = [Jd];
                        else if ("interaction-contentful-paint" === Jd.entryType) {
                          const Nd = Jd;
                          if (!Pd.navigationId) continue;
                          if ("interactionId" in Nd && Nd.interactionId != Pd.navigationInteractionId) continue;
                          pd = Nd.largestContentfulPaint?.renderTime || 0, dd = Math.max(pd - Jd.startTime, 0), Nd.largestContentfulPaint && (Zd.l(Nd.largestContentfulPaint), kd = [Nd.largestContentfulPaint])
                        }
                        pd < Wd.firstHiddenTime && (Pd.value = dd, Pd.entries = kd, Nd())
                      }
                    },
                    od = ["largest-contentful-paint"];
                  pd && od.push("interaction-contentful-paint", "soft-navigation");
                  const ld = Wp(od, Kd);
                  if (ld) {
                    Nd = zk(dd, Pd, ap, Jd.reportAllChanges);
                    const Wd = ["keydown", "click", "visibilitychange"],
                      Zd = dd => {
                        if (dd.isTrusted && !kd) {
                          const dd = Pd.id;
                          qp((() => {
                            if (!kd) {
                              if (!pd) {
                                ld.disconnect();
                                for (const dd of Wd) removeEventListener(dd, Zd, {
                                  capture: !0
                                })
                              }
                              dd === Pd.id && (kd = !0, Nd(!0))
                            }
                          }))
                        }
                      };
                    for (const dd of Wd) addEventListener(dd, Zd, {
                      capture: !0
                    });
                    Vk((pd => {
                      gd("back-forward-cache", Pd.navigationId, Pd.navigationInteractionId, Pd.navigationURL, tk()), Nd = zk(dd, Pd, ap, Jd.reportAllChanges), Hk((() => {
                        Pd.value = performance.now() - pd.timeStamp, kd = !0, Nd(!0)
                      }))
                    }))
                  }
                }))
              }((Jd => {
                dd((dd => {
                  let Jd = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: dd.value
                  };
                  if (dd.entries.length) {
                    const Nd = dd.entries.at(-1),
                      Wd = dd => dd.name === Nd.url && (dd.requestStart || dd.startTime) <= Nd.startTime,
                      Pd = Nd.url && (Fp.findLast(Wd) || performance.getEntriesByType("resource").findLast(Wd));
                    let Zd;
                    Jd.target = pd.get(Nd), Jd.lcpEntry = Nd, Nd.url && (Jd.url = Nd.url), Pd && (Jd.lcpResourceEntry = Pd);
                    let gd = 0,
                      Cd = 0;
                    if ("soft-navigation" !== dd.navigationType ? (Zd = Dk(), gd = Zd?.activationStart ?? 0, Cd = Zd?.responseStart ?? 0) : (gd = dd.navigationStartTime || 0, Zd = kd.u?.get(dd.navigationId)), Zd) {
                      const kd = Math.max(0, Cd - gd),
                        pd = Math.max(kd, Pd ? (Pd.requestStart || Pd.startTime) - gd : 0),
                        Nd = Math.min(dd.value, Math.max(pd, Pd ? Pd.responseEnd - gd : 0));
                      Jd = {
                        ...Jd,
                        timeToFirstByte: kd,
                        resourceLoadDelay: pd - kd,
                        resourceLoadDuration: Nd - pd,
                        elementRenderDelay: dd.value - Nd,
                        navigationEntry: Zd
                      }
                    }
                  }
                  return Object.assign(dd, {
                    attribution: Jd
                  })
                })(Jd))
              }), Jd)
          }((dd => {
            var Jd;
            const {
              elementRenderDelay: kd,
              resourceLoadDelay: pd,
              resourceLoadDuration: Nd,
              timeToFirstByte: Wd,
              target: Pd,
              url: Zd,
              lcpResourceEntry: gd
            } = dd.attribution, Cd = this.buildInitialValues(dd);
            this.addIfPresent(Cd, "element_render_delay", kd), this.addIfPresent(Cd, "resource_load_delay", pd), this.addIfPresent(Cd, "resource_load_duration", Nd), this.addIfPresent(Cd, Sp, Wd);
            const Kd = this.buildInitialContext(dd);
            this.addIfPresent(Kd, "element", Pd), (null === (Jd = this.webVitalConfig) || void 0 === Jd ? void 0 : Jd.trackAttributionSources) && (this.addIfPresent(Kd, "resource_url", Zd), this.addIfPresent(Kd, "resource_delivery_type", null === gd || void 0 === gd ? void 0 : gd.deliveryType), this.addIfPresent(Kd, "resource_initiator_type", null === gd || void 0 === gd ? void 0 : gd.initiatorType)), this.pushMeasurement(Cd, Kd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureTTFB() {
          var dd;
          ! function(dd) {
            ! function(dd) {
              let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const kd = Pp(Jd);
              let pd = Np("TTFB"),
                Nd = zk(dd, pd, Yp, Jd.reportAllChanges);
              mp((() => {
                const Wd = Dk();
                if (Wd) {
                  const Pd = Wd.responseStart;
                  pd.value = Math.max(Pd - wk(), 0), pd.entries = [Wd], Nd(!0), Vk((() => {
                    pd = Np("TTFB", 0, "back-forward-cache", pd.navigationId, pd.navigationInteractionId, pd.navigationURL, tk()), Nd = zk(dd, pd, Yp, Jd.reportAllChanges), Nd(!0)
                  })), kd && Wp(["soft-navigation"], (kd => {
                    kd.forEach((kd => {
                      kd.navigationId && (pd = Np("TTFB", 0, "soft-navigation", kd.navigationId, kd.interactionId, kd.name, kd.startTime), pd.entries = [kd], Nd = zk(dd, pd, Yp, Jd.reportAllChanges), Nd(!0))
                    }))
                  }), Jd)
                }
              }))
            }((Jd => {
              dd((dd => {
                const Jd = dd.entries[0];
                let kd = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Jd
                };
                if (dd.entries.length && Jd instanceof PerformanceNavigationTiming) {
                  const pd = Jd.activationStart || 0,
                    Nd = Math.max((Jd.workerStart || Jd.fetchStart || 0) - pd, 0),
                    Wd = Math.max(Jd.domainLookupStart - pd, 0),
                    Pd = Math.max(Jd.connectStart - pd, 0),
                    Zd = Math.max(Jd.connectEnd - pd, 0);
                  kd = {
                    waitingDuration: Nd,
                    cacheDuration: Wd - Nd,
                    dnsDuration: Pd - Wd,
                    connectionDuration: Zd - Pd,
                    requestDuration: dd.value - Zd,
                    navigationEntry: Jd
                  }
                }
                return Object.assign(dd, {
                  attribution: kd
                })
              })(Jd))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((dd => {
            const {
              dnsDuration: Jd,
              connectionDuration: kd,
              requestDuration: pd,
              waitingDuration: Nd,
              cacheDuration: Wd
            } = dd.attribution, Pd = this.buildInitialValues(dd);
            this.addIfPresent(Pd, "dns_duration", Jd), this.addIfPresent(Pd, "connection_duration", kd), this.addIfPresent(Pd, "request_duration", pd), this.addIfPresent(Pd, "waiting_duration", Nd), this.addIfPresent(Pd, "cache_duration", Wd);
            const Zd = this.buildInitialContext(dd);
            this.pushMeasurement(Pd, Zd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        buildInitialValues(dd) {
          return {
            [dd.name.toLowerCase()]: dd.value,
            delta: dd.delta
          }
        }
        buildInitialContext(dd) {
          var Jd;
          const kd = null !== (Jd = JJ("com.grafana.faro.lastNavigationId", wd)) && void 0 !== Jd ? Jd : nk;
          return {
            id: dd.id,
            rating: dd.rating,
            navigation_type: dd.navigationType,
            navigation_entry_id: kd
          }
        }
        pushMeasurement(dd, Jd) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: dd
          }, {
            context: Jd
          })
        }
        addIfPresent(dd, Jd, kd) {
          kd && (dd[Jd] = kd)
        }
        addNumberIfDefined(dd, Jd, kd) {
          void 0 !== kd && (dd[Jd] = kd)
        }
      },
      Xp = class extends kk {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = pk
        }
        initialize() {
          this.logDebug("Initializing"), new jp(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const fp = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function np() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Jd of dd)
        if ("traceparent" === Jd.name) {
          if (!fp.test(Jd.description)) continue;
          const [, dd, kd] = Jd.description.split("-");
          if (null != dd && null != kd) return {
            traceId: dd,
            spanId: kd
          };
          break
        }
    }

    function Up(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: kd,
        monoNow: pd
      } = Jd;
      return Math.min(kd, kd - (pd - dd))
    }

    function yp(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [kd, pd] of Object.entries(Jd)) {
        const Jd = dd[kd];
        return null != Jd && (md(pd) ? pd.includes(Jd) : Jd === pd)
      }
      return !0
    }

    function Dp(dd) {
      const {
        connectEnd: Jd,
        connectStart: kd,
        decodedBodySize: pd,
        domainLookupEnd: Nd,
        domainLookupStart: Wd,
        duration: Pd,
        encodedBodySize: Zd,
        fetchStart: gd,
        initiatorType: Cd,
        name: Kd,
        nextHopProtocol: od,
        redirectEnd: ld,
        redirectStart: Qd,
        renderBlockingStatus: Ld,
        requestStart: Od,
        responseEnd: ed,
        responseStart: Rd,
        responseStatus: Id,
        secureConnectionStart: Gd,
        transferSize: vd,
        workerStart: xd
      } = dd;
      return {
        name: Kd,
        httpHost: Ep(Kd),
        duration: cp(Pd),
        tcpHandshakeTime: cp(Jd - kd),
        dnsLookupTime: cp(Nd - Wd),
        tlsNegotiationTime: cp(Jd - Gd),
        responseStatus: cp(Id),
        redirectTime: cp(ld - Qd),
        requestTime: cp(Rd - Od),
        responseTime: cp(ed - Rd),
        fetchTime: cp(ed - gd),
        serviceWorkerTime: cp(xd > 0 ? gd - xd : 0),
        decodedBodySize: cp(pd),
        encodedBodySize: cp(Zd),
        cacheHitStatus: function() {
          let dd = "fullLoad";
          0 === vd ? pd > 0 && (dd = "cache") : null != Id ? 304 === Id && (dd = "conditionalFetch") : Zd > 0 && vd < Zd && (dd = "conditionalFetch");
          return dd
        }(),
        renderBlockingStatus: cp(Ld),
        protocol: od,
        initiatorType: Cd,
        visibilityState: document.visibilityState,
        ttfb: cp(Rd - Od),
        transferSize: cp(vd)
      }
    }

    function Tp(dd) {
      const {
        activationStart: Jd,
        domComplete: kd,
        domContentLoadedEventEnd: pd,
        domContentLoadedEventStart: Nd,
        domInteractive: Wd,
        fetchStart: Pd,
        loadEventEnd: Zd,
        loadEventStart: gd,
        responseStart: Cd,
        type: Kd
      } = dd, od = function() {
        var dd;
        return null != (null === (dd = performance.timing) || void 0 === dd ? void 0 : dd.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return oJ(oJ({}, Dp(dd)), {}, {
        pageLoadTime: cp(kd - Pd),
        documentParsingTime: cp(od ? Wd - od : null),
        domProcessingTime: cp(kd - Wd),
        domContentLoadHandlerTime: cp(pd - Nd),
        onLoadTime: cp(Zd - gd),
        ttfb: cp(Math.max(Cd - (null !== Jd && void 0 !== Jd ? Jd : 0), 0)),
        type: Kd
      })
    }

    function Ep(dd) {
      try {
        return new URL(dd).host || nk
      } catch (Jd) {
        return nk
      }
    }

    function cp(dd) {
      return null == dd ? nk : "number" === typeof dd ? Math.round(dd > 0 ? dd : 0).toString() : dd.toString()
    }
    const hp = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function rp(dd, Jd, kd, pd, Nd, Wd, Pd) {
      try {
        var Zd = dd[Wd](Pd),
          gd = Zd.value
      } catch (dd) {
        return void kd(dd)
      }
      Zd.done ? Jd(gd) : Promise.resolve(gd).then(pd, Nd)
    }

    function tp(dd) {
      return function() {
        var Jd = this,
          kd = arguments;
        return new Promise((function(pd, Nd) {
          var Wd = dd.apply(Jd, kd);

          function Pd(dd) {
            rp(Wd, pd, Nd, Pd, Zd, "next", dd)
          }

          function Zd(dd) {
            rp(Wd, pd, Nd, Pd, Zd, "throw", dd)
          }
          Pd(void 0)
        }))
      }
    }
    const Vp = new vk;
    var zp = class extends kk {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = pk
      }
      initialize() {
        var dd = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Jd = !1;
        const kd = () => {
          ! function(dd) {
            if ("complete" === document.readyState) dd();
            else {
              const Jd = () => {
                "complete" === document.readyState && (dd(), document.removeEventListener("readystatechange", Jd))
              };
              document.addEventListener("readystatechange", Jd)
            }
          }(tp((function*() {
            if (Jd) return;
            const kd = dd.api.pushEvent,
              {
                faroNavigationId: pd
              } = yield function(dd) {
                let Jd;
                const kd = new Promise((dd => {
                  Jd = dd
                }));
                return new PerformanceObserver((kd => {
                  var pd;
                  const [Nd] = kd.getEntries();
                  if (null == Nd || zd(Nd.name)) return;
                  const Wd = Nd.toJSON();
                  let Pd = np(null === Wd || void 0 === Wd ? void 0 : Wd.serverTiming);
                  const Zd = null !== (pd = JJ("com.grafana.faro.lastNavigationId", wd)) && void 0 !== pd ? pd : nk,
                    gd = oJ(oJ({}, Tp(Wd)), {}, {
                      faroNavigationId: IJ(),
                      faroPreviousNavigationId: Zd
                    });
                  kJ("com.grafana.faro.lastNavigationId", gd.faroNavigationId, wd), dd("faro.performance.navigation", gd, void 0, {
                    spanContext: Pd,
                    timestampOverwriteMs: Up(Wd.startTime)
                  }), Jd(gd)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), kd
              }(kd);
            Jd || null == pd || function(dd, Jd, kd, pd) {
              const Nd = pd.trackResources;
              new PerformanceObserver((pd => {
                const Wd = pd.getEntries(),
                  Pd = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Zd of Wd) {
                  if (zd(Zd.name)) continue;
                  null === kd || void 0 === kd || kd.notify({
                    type: "resource"
                  });
                  const pd = Zd.toJSON();
                  let Wd = np(null === pd || void 0 === pd ? void 0 : pd.serverTiming);
                  (null == Nd && yp(pd, hp) || Nd) && Jd("faro.performance.resource", oJ(oJ({}, Dp(pd)), {}, {
                    faroNavigationId: dd,
                    faroResourceId: IJ()
                  }), void 0, {
                    spanContext: Wd,
                    timestampOverwriteMs: Up(pd.startTime, Pd)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(pd, kd, Vp, dd.config)
          })))
        };
        this.cancelInitialization = () => {
          Jd = !0, document.removeEventListener("prerenderingchange", kd)
        }, document.prerendering ? document.addEventListener("prerenderingchange", kd, {
          once: !0
        }) : kd()
      }
      destroy() {
        var dd;
        null === (dd = this.cancelInitialization) || void 0 === dd || dd.call(this), this.cancelInitialization = void 0
      }
    };
    const Hp = "data-faro-user-action-name",
      wp = Hp.replace(/-name$/, "-timeout"),
      Ap = 1e3;

    function dN(dd) {
      return `data-${(dd.startsWith("data-")?dd.slice(5):dd).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function JN(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hJ;
      if (void 0 === dd) return Jd;
      let pd = NaN;
      try {
        pd = "string" === typeof dd && "" === dd.trim() ? NaN : Number(dd)
      } catch (Nd) {}
      return !Number.isFinite(pd) || pd <= 0 ? (kd(`initialActivityTimeout must be a finite number greater than zero; using ${Jd} ms`), Jd) : pd > 1e3 ? (kd(`initialActivityTimeout cannot exceed ${Ap} ms; clamping to the maximum`), Ap) : pd
    }

    function kN(dd, Jd, kd) {
      return void 0 !== dd && window.clearTimeout(dd), window.setTimeout((() => {
        Jd()
      }), kd)
    }

    function pN(dd) {
      return dd.type === Gk
    }
    let NN, WN;

    function PN() {
      return NN || (NN = new vk), WN || (WN = new MutationObserver(((dd, Jd) => {
        NN.notify({
          type: "dom-mutation"
        })
      })), WN.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), NN
    }
    const ZN = "fetch",
      gN = "xhr";
    let CN, KN, oN, lN, QN = !1;

    function LN() {
      if (CN) return CN;

      function dd(dd) {
        CN.notify({
          type: Ik,
          request: dd
        })
      }

      function Jd(dd) {
        CN.notify({
          type: Gk,
          request: dd
        })
      }
      return CN = new vk, QN || (! function(dd) {
        let {
          onRequestEnd: Jd,
          onRequestStart: kd
        } = dd;
        oN || (oN = window.fetch);
        window.fetch = function() {
          var dd, pd;
          const Nd = null !== (dd = Hd(arguments[0])) && void 0 !== dd ? dd : "",
            Wd = zd(Nd),
            Pd = (null !== (pd = arguments[1]) && void 0 !== pd ? pd : {}).method,
            Zd = IJ();
          return Wd || kd({
            url: Nd,
            method: Pd,
            requestId: Zd,
            apiType: ZN
          }), oN.apply(this, arguments).then((dd => (Wd || Jd({
            url: Nd,
            method: Pd,
            requestId: Zd,
            apiType: ZN
          }), dd))).catch((dd => {
            throw Wd || Jd({
              url: Nd,
              method: Pd,
              requestId: Zd,
              apiType: ZN
            }), dd
          }))
        }
      }({
        onRequestStart: dd,
        onRequestEnd: Jd
      }), function(dd) {
        let {
          onRequestStart: Jd,
          onRequestEnd: kd
        } = dd;
        KN || (KN = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const dd = arguments[1],
            pd = zd(dd),
            Nd = arguments[0],
            Wd = IJ();
          this.addEventListener("loadstart", (function() {
            pd || Jd({
              url: dd,
              method: Nd,
              requestId: Wd,
              apiType: gN
            })
          })), this.addEventListener("load", (function() {
            pd || kd({
              url: dd,
              method: Nd,
              requestId: Wd,
              apiType: gN
            })
          })), this.addEventListener("error", (function() {
            pd || kd({
              url: dd,
              method: Nd,
              requestId: Wd,
              apiType: gN
            })
          })), this.addEventListener("abort", (function() {
            pd || kd({
              url: dd,
              method: Nd,
              requestId: Wd,
              apiType: gN
            })
          })), KN.apply(this, arguments)
        }
      }({
        onRequestStart: dd,
        onRequestEnd: Jd
      }), QN = !0), CN
    }
    let ON, eN = !1;
    let RN = function(dd) {
      return dd[dd.Started = 0] = "Started", dd[dd.Halted = 1] = "Halted", dd[dd.Cancelled = 2] = "Cancelled", dd[dd.Ended = 3] = "Ended", dd
    }({});
    var IN = class {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = dd, this.logDebug = Jd, this.initialActivityTimeout = kd, this.http = LN(), this.dom = PN(), this.perf = (lN || (lN = new vk), eN || (ON = Vp.subscribe((dd => {
          "resource" === dd.type && lN.notify({
            type: "resource-entry"
          })
        })), eN = !0), lN), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new vk).merge(this.http, this.dom, this.perf).takeWhile((() => [RN.Started, RN.Halted].includes(this.userAction.getState()))).filter((dd => !!(this.userAction.getState() !== RN.Halted || pN(dd) && this.runningRequests.has(dd.request.requestId)))).subscribe((dd => {
          (function(dd) {
            return dd.type === Ik
          })(dd) && this.runningRequests.set(dd.request.requestId, dd.request), pN(dd) && this.runningRequests.delete(dd.request.requestId), pN(dd) ? this.userAction.getState() === RN.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((dd => [RN.Ended, RN.Cancelled].includes(dd))).first().subscribe((() => this.cleanup())), this.startupTid = kN(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === RN.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === RN.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = kN(this.haltTid, (() => {
          this.userAction.getState() === RN.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var dd, Jd;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (dd = this.allMonitorsSub) || void 0 === dd || dd.unsubscribe(), null === (Jd = this.stateSub) || void 0 === Jd || Jd.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(dd) {
        void 0 !== dd && window.clearTimeout(dd)
      }
    };

    function GN(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hJ;
      var kd;
      const {
        api: pd,
        config: Nd,
        internalLogger: Wd
      } = dd, Pd = JN(null === (kd = Nd.userActionsInstrumentation) || void 0 === kd ? void 0 : kd.initialActivityTimeout, 100, Jd);
      return {
        processUserEvent: function(dd) {
          var Jd, kd;
          const Wd = null !== (Jd = null === (kd = Nd.userActionsInstrumentation) || void 0 === kd ? void 0 : kd.dataAttributeName) && void 0 !== Jd ? Jd : Hp,
            Pd = dd.target;
          if (!(Pd instanceof Element)) return;
          const Zd = function(dd, Jd) {
              let kd = dd;
              for (; kd;) {
                if (kd.hasAttribute(Jd)) return kd;
                kd = kd.parentElement
              }
              return null
            }(Pd, dN(Wd)),
            gd = function(dd, Jd) {
              if (!dd) return;
              const kd = function(dd) {
                  return dN(dd).slice(5).replace(/-(.)/g, ((dd, Jd) => Jd.toUpperCase()))
                }(Jd),
                pd = dd.dataset;
              for (const Nd in pd)
                if (Nd === kd) return pd[Nd]
            }(Zd, Wd);
          if (!Zd || !gd) return;
          const Cd = function(dd, Jd) {
            const kd = dd.getAttribute(function(dd) {
              const Jd = dN(dd);
              return Jd.endsWith("-name") ? `${Jd.slice(0,-5)}-timeout` : `${Jd}-timeout`
            }(Jd));
            return null === kd ? void 0 : Number(kd)
          }(Zd, Wd);
          pd.startUserAction(gd, {}, {
            triggerName: dd.type,
            initialActivityTimeout: Cd
          })
        },
        processUserActionStarted: function(dd, kd) {
          const pd = dd,
            Nd = JN(kd, Pd, Jd);
          new IN(pd, Wd.debug, Nd).attach()
        }
      }
    }
    const vN = "user_action_start",
      xN = {
        Normal: "normal",
        Critical: "critical"
      };
    var qN = class {
        constructor() {
          this.buffer = []
        }
        addItem(dd) {
          this.buffer.push(dd)
        }
        flushBuffer(dd) {
          if (Yd(dd))
            for (const Jd of this.buffer) dd(Jd);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      BN = class extends vk {
        constructor(dd) {
          let {
            name: Jd,
            parentId: kd,
            trigger: pd,
            transports: Nd,
            attributes: Wd,
            trackUserActionsExcludeItem: Pd,
            importance: Zd = xN.Normal,
            pushEvent: gd
          } = dd;
          super(), this.name = Jd, this.attributes = Wd, this.id = IJ(), this.trigger = pd, this.parentId = null !== kd && void 0 !== kd ? kd : this.id, this.trackUserActionsExcludeItem = Pd, this.importance = Zd, this._pushEvent = gd, this._itemBuffer = new qN, this._transports = Nd, this._state = 0, this._start()
        }
        addItem(dd) {
          return 0 === this._state && (this._itemBuffer.addItem(dd), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = QJ(), this._startTimeMono = LJ())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((dd => {
            this._transports.execute(dd)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const dd = QJ(),
            Jd = LJ() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((dd => {
            if (function(dd, Jd) {
                return (null === Jd || void 0 === Jd ? void 0 : Jd(dd)) || "measurement" === dd.type && "web-vitals" === dd.payload.type
              }(dd, this.trackUserActionsExcludeItem)) return void this._transports.execute(dd);
            const Jd = AJ(AJ({}, dd), {}, {
              payload: AJ(AJ({}, dd.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Jd)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", AJ({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: dd.toString(),
            userActionDuration: Jd.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, nJ(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: dd => (dd.action = {
              id: this.id,
              name: this.name
            }, dd)
          })
        }
        getState() {
          return this._state
        }
      };
    const sN = new vk;

    function iN(dd, Jd) {
      return !!dd && (0 === (null === dd || void 0 === dd ? void 0 : dd.getState()) && (dd.addItem(Jd), !0))
    }
    var aN = class extends kk {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = pk
        }
        initialize() {
          const {
            processUserEvent: dd,
            processUserActionStarted: Jd
          } = GN(Od, (dd => this.logWarn(dd)));
          this._processUserEvent = dd, this._processKeydown = Jd => {
            [" ", "Enter"].includes(Jd.key) && dd(Jd)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = sN.subscribe((dd => {
            let {
              type: kd,
              userAction: pd,
              initialActivityTimeout: Nd
            } = dd;
            "user_action_start" === kd && Jd(pd, Nd)
          }))
        }
        destroy() {
          var dd;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (dd = this._userActionSub) || void 0 === dd || dd.unsubscribe()
        }
      },
      MN = class extends kk {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = pk, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(dd) {
          const Jd = {
            blockedURI: dd.blockedURI,
            columnNumber: dd.columnNumber,
            disposition: dd.disposition,
            documentURI: dd.documentURI,
            effectiveDirective: dd.effectiveDirective,
            lineNumber: dd.lineNumber,
            originalPolicy: dd.originalPolicy,
            referrer: dd.referrer,
            sample: dd.sample,
            sourceFile: dd.sourceFile,
            statusCode: dd.statusCode,
            violatedDirective: dd.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", nJ(Jd))
        }
      };
    var FN = class extends vk {
      constructor(dd, Jd) {
        var kd, pd, Nd, Wd;
        super(), this._tracking = !1, this.eventsObservable = dd, this._options = {
          inactivityMs: null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.inactivityMs) && void 0 !== kd ? kd : 100,
          drainTimeoutMs: null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.drainTimeoutMs) && void 0 !== pd ? pd : 1e4,
          isOperationStart: null !== (Nd = null === Jd || void 0 === Jd ? void 0 : Jd.isOperationStart) && void 0 !== Nd ? Nd : () => {},
          isOperationEnd: null !== (Wd = null === Jd || void 0 === Jd ? void 0 : Jd.isOperationEnd) && void 0 !== Wd ? Wd : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((dd => {
          var Jd;
          this._lastEventTime = LJ(), null === (Jd = this._currentEvents) || void 0 === Jd || Jd.push(dd);
          const kd = this._options.isOperationStart(dd);
          var pd;
          kd && (null === (pd = this._activeOperations) || void 0 === pd || pd.set(kd, !0));
          const Nd = this._options.isOperationEnd(dd);
          var Wd;
          Nd && (null === (Wd = this._activeOperations) || void 0 === Wd || Wd.delete(Nd));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = LJ(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let dd;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), dd = this.hasActiveOperations() ? LJ() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: dd
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = YN(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = YN(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(dd) {
        dd && clearTimeout(dd)
      }
    };

    function YN(dd, Jd, kd) {
      return dd && clearTimeout(dd), dd = setTimeout((() => {
        Jd()
      }), kd)
    }
    let mN;
    const bN = new Set,
      SN = new Map;
    let jN, XN, fN, nN, UN, yN, DN, TN, EN = !1;
    var cN = class extends kk {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = pk
      }
      initialize() {
        const dd = LN(),
          Jd = PN(),
          kd = function() {
            function dd(dd, Jd) {
              const kd = null !== Jd && void 0 !== Jd ? Jd : location.href;
              kd !== XN && (jN.notify({
                type: "url-change",
                from: XN,
                to: kd,
                trigger: dd
              }), XN = kd)
            }
            if (jN || (jN = new vk, XN = location.href), !EN)
              if ("navigation" in window && "NavigateEvent" in window) {
                DN = Jd => {
                  try {
                    const kd = null === Jd || void 0 === Jd ? void 0 : Jd.destination;
                    (null === kd || void 0 === kd ? void 0 : kd.sameDocument) && "string" === typeof kd.url && dd("navigate", kd.url)
                  } catch (kd) {}
                }, window.navigation.addEventListener("navigate", DN);
                const Jd = window.NavigateEvent;
                Jd && Jd.prototype && "function" === typeof Jd.prototype.intercept && (TN || (TN = Jd.prototype.intercept), Jd.prototype.intercept = function(Jd) {
                  try {
                    const Jd = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      kd = null === this || void 0 === this ? void 0 : this.destination;
                    Jd && kd && !1 === kd.sameDocument && "string" === typeof kd.url && dd("navigate-intercept", kd.url)
                  } catch (kd) {}
                  return TN.call(this, Jd)
                }), EN = !0
              } else fN || (fN = window.history.pushState), window.history.pushState = function() {
                for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
                const Nd = fN.apply(window.history, kd);
                return dd("pushState"), Nd
              }, nN || (nN = window.history.replaceState), window.history.replaceState = function() {
                for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
                const Nd = nN.apply(window.history, kd);
                return dd("replaceState"), Nd
              }, UN = () => dd("popstate"), yN = () => dd("hashchange"), window.addEventListener("popstate", UN), window.addEventListener("hashchange", yN), EN = !0;
            return jN
          }(),
          pd = (Nd = ["pointerdown", "keydown"], mN || (mN = new vk), Nd.forEach((dd => {
            if (!bN.has(dd)) {
              const Jd = () => {
                mN.notify({
                  type: "interaction",
                  name: dd
                })
              };
              window.addEventListener(dd, Jd), bN.add(dd), SN.set(dd, Jd)
            }
          })), mN);
        var Nd;
        const Wd = new FN((new vk).merge(dd, Jd, kd), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: dd => function(dd) {
            return dd.type === Ik
          }(dd) ? dd.request.requestId : void 0,
          isOperationEnd: dd => function(dd) {
            return dd.type === Gk
          }(dd) ? dd.request.requestId : void 0
        });
        Wd.filter((dd => "tracking-ended" === dd.message)).subscribe((dd => {
          var Jd, kd;
          if ((null === (Jd = dd.events) || void 0 === Jd ? void 0 : Jd.some((dd => "url-change" === dd.type))) && (null === (kd = dd.events) || void 0 === kd ? void 0 : kd.some((dd => "dom-mutation" === dd.type)))) {
            var pd;
            const Jd = null === (pd = dd.events) || void 0 === pd ? void 0 : pd.find((dd => "url-change" === dd.type));
            Od.api.pushEvent("faro.navigation", {
              fromUrl: null === Jd || void 0 === Jd ? void 0 : Jd.from,
              toUrl: null === Jd || void 0 === Jd ? void 0 : Jd.to,
              sameDocument: String(!0),
              duration: dd.duration
            })
          }
        })), pd.subscribe((() => {
          Wd.startTracking()
        }))
      }
    };

    function hN() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Jd = [new aN, new fk, new Xp, new Nk, new Uk, new cN];
      return !1 !== dd.enablePerformanceInstrumentation && Jd.unshift(new zp), !1 !== dd.enableContentSecurityPolicyInstrumentation && Jd.push(new MN), !1 !== dd.captureConsole && Jd.push(new jk), Jd
    }
    var rN = kd(6575);
    let uN, tN;

    function VN() {
      const dd = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return uN === dd && tN || (tN = new rN.UAParser(dd).getResult(), uN = dd), tN
    }
    const zN = () => {
        const {
          browser: dd,
          os: Jd,
          ua: kd
        } = VN(), {
          name: pd,
          version: Nd
        } = dd, {
          name: Wd,
          version: Pd
        } = Jd, Zd = navigator.language, gd = kd.includes("Mobi"), Cd = function() {
          if (!pd || !Nd) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== pd && void 0 !== pd ? pd : nk,
            version: null !== Nd && void 0 !== Nd ? Nd : nk,
            os: `${null!==Wd&&void 0!==Wd?Wd:nk} ${null!==Pd&&void 0!==Pd?Pd:nk}`,
            userAgent: null !== kd && void 0 !== kd ? kd : nk,
            language: null !== Zd && void 0 !== Zd ? Zd : nk,
            mobile: gd,
            brands: null !== Cd && void 0 !== Cd ? Cd : nk,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      HN = () => {
        const {
          name: dd,
          version: Jd
        } = VN().os;
        if (!dd && !Jd) return {};
        const kd = {};
        return dd && (kd.name = dd), Jd && (kd.version = Jd), {
          os: kd
        }
      };

    function wN(dd) {
      var Jd, kd, pd;
      return {
        id: null !== (Jd = null === (kd = Od.config) || void 0 === kd || null === (kd = kd.sessionTracking) || void 0 === kd || null === (pd = kd.generateSessionId) || void 0 === pd ? void 0 : pd.call(kd)) && void 0 !== Jd ? Jd : IJ(),
        attributes: dd
      }
    }
    const AN = () => ({
      sdk: {
        name: "faro-web",
        version: pk
      }
    });
    var dW = class extends Jk {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let JW = function(dd) {
      return dd.EXCEPTION = "exception", dd.LOG = "log", dd.MEASUREMENT = "measurement", dd.TRACE = "trace", dd.EVENT = "event", dd
    }({});
    const kW = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function pW(dd, Jd) {
      var kd, pd;
      if (void 0 === Jd) return dd;
      if (void 0 === dd) return {
        resourceSpans: Jd
      };
      const Nd = null === (kd = dd.resourceSpans) || void 0 === kd ? void 0 : kd[0];
      if (void 0 === Nd) return dd;
      const Wd = (null === Nd || void 0 === Nd ? void 0 : Nd.scopeSpans) || [],
        Pd = (null === Jd || void 0 === Jd || null === (pd = Jd[0]) || void 0 === pd ? void 0 : pd.scopeSpans) || [];
      return AJ(AJ({}, dd), {}, {
        resourceSpans: [AJ(AJ({}, Nd), {}, {
          scopeSpans: [...Wd, ...Pd]
        })]
      })
    }

    function NW(dd) {
      let Jd = {
        meta: {}
      };
      return void 0 !== dd[0] && (Jd.meta = dd[0].meta), dd.forEach((dd => {
        switch (dd.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const kd = kW[dd.type],
              pd = Jd[kd];
            Jd = AJ(AJ({}, Jd), {}, {
              [kd]: void 0 === pd ? [dd.payload] : [...pd, dd.payload]
            });
            break
          }
          case "trace":
            Jd = AJ(AJ({}, Jd), {}, {
              traces: pW(Jd.traces, dd.payload.resourceSpans)
            })
        }
      })), Jd
    }
    var WW = class extends dW {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = dd, this.name = "@grafana/faro-web-sdk:transport-console", this.version = pk
      }
      send(dd) {
        var Jd;
        return this.unpatchedConsole[null !== (Jd = this.options.level) && void 0 !== Jd ? Jd : xk.DEBUG]("New event", NW([dd]))
      }
    };
    const PW = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ZW = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      gW = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      CW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      KW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      oW = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function lW(dd) {
      let {
        weekday: Jd,
        day: kd,
        month: pd,
        year: Nd,
        hour: Wd,
        minute: Pd,
        second: Zd
      } = dd;
      if (Nd < 1900 || kd < 1 || Wd > 23 || Pd > 59 || Zd > 60) return;
      const gd = 60 === Zd,
        Cd = new Date(0);
      return Cd.setUTCFullYear(Nd, pd, kd), Cd.setUTCHours(Wd, Pd, gd ? 59 : Zd, 0), Cd.getUTCDay() === Jd && Cd.getUTCDate() === kd && Cd.getUTCMonth() === pd && Cd.getUTCFullYear() === Nd && Cd.getUTCHours() === Wd && Cd.getUTCMinutes() === Pd && Cd.getUTCSeconds() === (gd ? 59 : Zd) ? Cd.getTime() + (gd ? 1e3 : 0) : void 0
    }
    var QW = class {
      constructor(dd) {
        this.options = dd, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var dd = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Jd = this.sequence++;
        let kd = !1;
        return {
          deliver: function() {
            var kd = tp((function*(kd) {
              const pd = dd.options.getNow();
              let Nd, Wd = 0;
              for (;;) {
                var Pd, Zd, gd;
                const Cd = dd.options.retry.maxAttempts - Wd,
                  Kd = yield dd.runAttempt((() => kd(Cd, dd.unloading)), Wd > 0);
                if (Wd += Kd.attemptsMade, "success" === Kd.kind) return {
                  kind: "success",
                  attempts: Wd,
                  elapsedTimeMs: dd.options.getNow() - pd
                };
                if (Nd = Kd.failure, "terminal" === Kd.kind || dd.unloading) return {
                  kind: "terminal",
                  attempts: Wd,
                  elapsedTimeMs: dd.options.getNow() - pd,
                  failure: Nd
                };
                if (Wd >= dd.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Wd,
                  elapsedTimeMs: dd.options.getNow() - pd,
                  failure: Nd,
                  reason: "retries-exhausted"
                };
                if (null != Kd.retryAfterMs && Kd.retryAfterMs > dd.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Wd,
                  elapsedTimeMs: dd.options.getNow() - pd,
                  failure: Nd,
                  reason: "retry-after-too-long"
                };
                const od = Math.min(null !== (Pd = Kd.retryAfterMs) && void 0 !== Pd ? Pd : dd.options.retry.initialBackoffMs * Math.pow(dd.options.retry.backoffMultiplier, Wd - 1), dd.options.retry.maxBackoffMs);
                if (null === (Zd = (gd = dd.options).onRetry) || void 0 === Zd || Zd.call(gd, od, Wd + 1), yield dd.waitForTurn(Jd, od)) {
                  const Jd = dd.options.retry.maxAttempts - Wd,
                    Nd = yield dd.runAttempt((() => kd(Jd, !0)));
                  return Wd += Nd.attemptsMade, {
                    kind: "success" === Nd.kind ? "success" : "terminal",
                    attempts: Wd,
                    elapsedTimeMs: dd.options.getNow() - pd,
                    failure: "success" === Nd.kind ? void 0 : Nd.failure
                  }
                }
              }
            }));
            return function(dd) {
              return kd.apply(this, arguments)
            }
          }(),
          release: () => {
            kd || (kd = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const dd = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Jd of dd) Jd.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((kd, pd) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Jd = () => {
                this.inProgress--, this.runNextAttempt()
              };
              dd().then((dd => {
                Jd(), kd(dd)
              }), (dd => {
                Jd(), pd(dd)
              }))
            },
            isRedelivery: Jd
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const dd = this.options.getNow(),
            Jd = this.attemptQueue.findIndex((Jd => {
              let {
                isRedelivery: kd
              } = Jd;
              return this.unloading || !kd || dd >= this.nextSendAt
            }));
          if (Jd < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - dd)));
          const [kd] = this.attemptQueue.splice(Jd, 1);
          kd.isRedelivery && !this.unloading && (this.nextSendAt = dd + 1), kd.run()
        }
      }
      waitForTurn(dd, Jd) {
        const kd = Math.min(Jd * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Jd => {
          this.waiting.push({
            sequence: dd,
            readyAt: this.options.getNow() + kd,
            resolve: Jd
          }), this.waiting.sort(((dd, Jd) => dd.readyAt === Jd.readyAt ? dd.sequence - Jd.sequence : dd.readyAt - Jd.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const dd = this.waiting[0],
          Jd = dd.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Jd = this.waiting.indexOf(dd);
          Jd >= 0 && this.waiting.splice(Jd, 1), dd.resolve(!1), this.scheduleNext()
        }), Math.max(0, Jd - this.options.getNow()))
      }
    };

    function LW(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd = {};
        for (var pd in dd)
          if ({}.hasOwnProperty.call(dd, pd)) {
            if (Jd.includes(pd)) continue;
            kd[pd] = dd[pd]
          } return kd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.includes(kd) || {}.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }

    function OW(dd) {
      const {
        size: Jd,
        concurrency: kd
      } = dd, pd = [];
      let Nd = 0;
      const Wd = () => {
        if (Nd < kd && pd.length) {
          const {
            producer: dd,
            resolve: Jd,
            reject: kd
          } = pd.shift();
          Nd++, dd().then((dd => {
            Nd--, Wd(), Jd(dd)
          }), (dd => {
            Nd--, Wd(), kd(dd)
          }))
        }
      };
      return {
        add: dd => {
          if (pd.length + Nd >= Jd) throw new Error("Task buffer full");
          return new Promise(((Jd, kd) => {
            pd.push({
              producer: dd,
              resolve: Jd,
              reject: kd
            }), Wd()
          }))
        }
      }
    }
    const eW = ["headers"],
      RW = ["keepalive", "signal"],
      IW = new Set([408, 425, 429, 500, 502, 503, 504]),
      GW = new Set([429, 503]);
    let vW = 0,
      xW = 0;
    var qW = class extends Error {};
    var BW = class extends dW {
      constructor(dd) {
        var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd;
        super(), this.options = dd, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = pk, this.pendingCustomSends = 0, this.getNow = null !== (Jd = dd.getNow) && void 0 !== Jd ? Jd : Date.now, this.requestTimeoutMs = null !== (kd = dd.requestTimeoutMs) && void 0 !== kd ? kd : 1e4, this.compressionEnabled = null !== (pd = dd.requestCompression) && void 0 !== pd && pd && "undefined" !== typeof CompressionStream, dd.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new QW({
          bufferSize: null !== (Nd = dd.bufferSize) && void 0 !== Nd ? Nd : 30,
          concurrency: null !== (Wd = dd.concurrency) && void 0 !== Wd ? Wd : 5,
          retry: {
            maxAttempts: null !== (Pd = null === (Zd = dd.retry) || void 0 === Zd ? void 0 : Zd.maxAttempts) && void 0 !== Pd ? Pd : 3,
            initialBackoffMs: null !== (gd = null !== (Cd = null === (Kd = dd.retry) || void 0 === Kd ? void 0 : Kd.initialBackoffMs) && void 0 !== Cd ? Cd : dd.defaultRateLimitBackoffMs) && void 0 !== gd ? gd : 1e3,
            maxBackoffMs: null !== (od = null === (ld = dd.retry) || void 0 === ld ? void 0 : ld.maxBackoffMs) && void 0 !== od ? od : 3e4,
            backoffMultiplier: null !== (Qd = null === (Ld = dd.retry) || void 0 === Ld ? void 0 : Ld.backoffMultiplier) && void 0 !== Qd ? Qd : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Od = dd.getRandom) && void 0 !== Od ? Od : Math.random,
          onRetry: (dd, Jd) => {
            this.logDebug(`Retrying failed request after ${dd}ms. Attempt ${Jd}.`)
          }
        }), this.customPromiseBuffer = OW({
          size: null !== (ed = dd.bufferSize) && void 0 !== ed ? ed : 30,
          concurrency: null !== (Rd = dd.concurrency) && void 0 !== Rd ? Rd : 5
        }), this.defaultPromiseBuffer = {
          add: dd => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(dd);
            const Jd = this.deliveryQueue.reserve();
            if (!Jd) throw new Error("Task buffer full");
            return this.runBufferedTask(Jd, dd)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (dd => {
          dd.persisted && this.deliveryQueue.resume()
        })))
      }
      send(dd) {
        var Jd = this;
        return tp((function*() {
          const kd = Jd.promiseBuffer;
          if (kd !== Jd.defaultPromiseBuffer || kd.add !== Jd.defaultBufferAdd) {
            Jd.pendingCustomSends++;
            try {
              yield kd.add((() => Jd.deliver(dd)))
            } catch (pd) {
              Jd.logError("Permanent delivery failure", {
                error: pd,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Jd.pendingCustomSends--
            }
          } else yield Jd.deliver(dd)
        }))()
      }
      runBufferedTask(dd, Jd) {
        return tp((function*() {
          let kd;
          try {
            return yield dd.deliver(tp((function*() {
              return kd = yield Jd(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), kd
          } finally {
            dd.release()
          }
        }))()
      }
      deliver(dd) {
        var Jd = this;
        return tp((function*() {
          const kd = Jd.deliveryQueue.reserve();
          if (kd) try {
            const pd = yield Jd.prepareRequest(dd), Nd = yield kd.deliver(((dd, kd) => Jd.performAttempt(pd, dd, kd)));
            "terminal" === Nd.kind && Jd.logError("retries-exhausted" === Nd.reason ? "Delivery retries exhausted" : "Permanent delivery failure", oJ(oJ({}, Nd.failure), {}, {
              reason: Nd.reason,
              attempts: Nd.attempts,
              elapsedTimeMs: Nd.elapsedTimeMs
            }))
          } catch (pd) {
            Jd.logError("Permanent delivery failure", {
              error: pd,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            kd.release()
          } else Jd.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var dd;
        return [this.options.url].concat(null !== (dd = this.config.ignoreUrls) && void 0 !== dd ? dd : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(dd) {
        var Jd = this;
        return tp((function*() {
          var kd, pd;
          const Nd = NW(dd),
            Wd = null === (kd = Nd.meta.session) || void 0 === kd ? void 0 : kd.id,
            Pd = JSON.stringify(Nd),
            Zd = null !== (pd = Jd.options.requestOptions) && void 0 !== pd ? pd : {},
            {
              headers: gd = {}
            } = Zd,
            Cd = LW(Zd, eW),
            {
              keepalive: Kd,
              signal: od
            } = Cd,
            ld = LW(Cd, RW),
            Qd = {};
          for (const [dd, Jd] of Object.entries(gd)) Qd[dd] = "function" === typeof Jd ? yield Jd(): Jd;
          let Ld = Pd,
            Od = function(dd) {
              return "undefined" === typeof TextEncoder ? dd.length : (new TextEncoder).encode(dd).byteLength
            }(Pd);
          const ed = {};
          return Jd.compressionEnabled && (Ld = yield Jd.compress(Pd), Od = Ld.size, ed["Content-Encoding"] = "gzip"), {
            bodySize: Od,
            sessionId: Wd,
            requestInit: oJ({
              method: "POST",
              headers: oJ(oJ(oJ(oJ(oJ({
                "Content-Type": "application/json"
              }, ed), Qd), Jd.options.apiKey ? {
                "x-api-key": Jd.options.apiKey
              } : {}), Wd ? {
                "x-faro-session-id": Wd
              } : {}), {}, {
                "Idempotency-Key": IJ(20)
              }),
              body: Ld
            }, ld)
          }
        }))()
      }
      performAttempt(dd, Jd, kd) {
        var pd = this;
        return tp((function*() {
          var Nd;
          const Wd = null === (Nd = pd.options.requestOptions) || void 0 === Nd ? void 0 : Nd.signal;
          if (null === Wd || void 0 === Wd ? void 0 : Wd.aborted) return {
            kind: "terminal",
            failure: {
              error: Wd.reason
            },
            attemptsMade: 0
          };
          let Pd = 0;
          try {
            var Zd;
            const Nd = yield pd.fetchWithKeepaliveFallback(dd.requestInit, dd.bodySize, !!kd || (null === (Zd = pd.options.requestOptions) || void 0 === Zd ? void 0 : Zd.keepalive), Jd, (() => Pd++));
            if (pd.handleResponse(Nd, dd.sessionId), Nd.status >= 200 && Nd.status < 300) return {
              kind: "success",
              attemptsMade: Pd
            };
            const Wd = {
              status: Nd.status
            };
            return !IW.has(Nd.status) || kd ? {
              kind: "terminal",
              failure: Wd,
              attemptsMade: Pd
            } : {
              kind: "retry",
              failure: Wd,
              attemptsMade: Pd,
              retryAfterMs: GW.has(Nd.status) ? pd.getRetryAfterDelayMs(Nd) : void 0
            }
          } catch (gd) {
            const dd = {
              error: gd
            };
            return (null === Wd || void 0 === Wd ? void 0 : Wd.aborted) || !pd.isFetchNetworkError(gd) || kd ? {
              kind: "terminal",
              failure: dd,
              attemptsMade: Pd
            } : {
              kind: "retry",
              failure: dd,
              attemptsMade: Pd
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(dd, Jd, kd, pd, Nd) {
        var Wd = this;
        return tp((function*() {
          const Pd = Wd.getNow(),
            Zd = Wd.reserveKeepalive(Jd, kd);
          try {
            return yield Wd.fetchWithTimeout(oJ(oJ({}, dd), {}, {
              keepalive: Zd.keepalive
            }), Wd.requestTimeoutMs, Nd)
          } catch (Cd) {
            var gd;
            if (Zd.keepalive && pd > 1 && Wd.isFetchNetworkError(Cd) && !(Cd instanceof qW) && !(null === (gd = Wd.options.requestOptions) || void 0 === gd || null === (gd = gd.signal) || void 0 === gd ? void 0 : gd.aborted)) {
              Wd.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Jd = Wd.requestTimeoutMs - (Wd.getNow() - Pd);
              return Wd.fetchWithTimeout(oJ(oJ({}, dd), {}, {
                keepalive: !1
              }), Jd, Nd)
            }
            throw Cd
          } finally {
            Zd.release()
          }
        }))()
      }
      fetchWithTimeout(dd, Jd, kd) {
        var pd = this;
        return tp((function*() {
          var Nd;
          const Wd = null === (Nd = pd.options.requestOptions) || void 0 === Nd ? void 0 : Nd.signal;
          if (pd.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return kd(), fetch(pd.options.url, oJ(oJ({}, dd), {}, {
            signal: Wd
          }));
          if (Jd <= 0) throw new qW("Request timed out");
          const Pd = new AbortController,
            Zd = () => Pd.abort(null === Wd || void 0 === Wd ? void 0 : Wd.reason);
          null === Wd || void 0 === Wd || Wd.addEventListener("abort", Zd, {
            once: !0
          });
          let gd = !1;
          const Cd = setTimeout((() => {
            gd = !0, Pd.abort()
          }), Jd);
          try {
            return kd(), yield fetch(pd.options.url, oJ(oJ({}, dd), {}, {
              signal: Pd.signal
            }))
          } catch (Kd) {
            if (gd && !(null === Wd || void 0 === Wd ? void 0 : Wd.aborted)) throw new qW("Request timed out");
            throw Kd
          } finally {
            clearTimeout(Cd), null === Wd || void 0 === Wd || Wd.removeEventListener("abort", Zd)
          }
        }))()
      }
      getRetryAfterDelayMs(dd) {
        const Jd = dd.headers.get("Retry-After");
        if (!Jd) return;
        if (/^\d+$/.test(Jd)) {
          const dd = 1e3 * Number(Jd);
          return Number.isFinite(dd) ? dd : Number.POSITIVE_INFINITY
        }
        const kd = this.getNow(),
          pd = function(dd, Jd) {
            const kd = PW.exec(dd);
            if (kd) {
              const [, dd, Jd, pd, Nd, Wd, Pd, Zd] = kd;
              return lW({
                weekday: CW.indexOf(dd),
                day: Number(Jd),
                month: oW.indexOf(pd),
                year: Number(Nd),
                hour: Number(Wd),
                minute: Number(Pd),
                second: Number(Zd)
              })
            }
            const pd = ZW.exec(dd);
            if (pd) {
              const [, dd, kd, Pd, Zd, gd, Cd, Kd] = pd, od = new Date(Jd);
              if (Number.isNaN(od.getTime())) return;
              const ld = od.getUTCFullYear();
              let Qd = 100 * Math.floor(ld / 100) + Number(Zd);
              Qd < ld && (Qd += 100);
              const Ld = oW.indexOf(Pd),
                Od = {
                  month: Ld,
                  day: Number(kd),
                  hour: Number(gd),
                  minute: Number(Cd),
                  second: Number(Kd),
                  millisecond: 0
                },
                ed = {
                  month: od.getUTCMonth(),
                  day: od.getUTCDate(),
                  hour: od.getUTCHours(),
                  minute: od.getUTCMinutes(),
                  second: od.getUTCSeconds(),
                  millisecond: od.getUTCMilliseconds()
                };
              return (Qd > ld + 50 || Qd === ld + 50 && (Wd = ed, ((Nd = Od).month - Wd.month || Nd.day - Wd.day || Nd.hour - Wd.hour || Nd.minute - Wd.minute || Nd.second - Wd.second || Nd.millisecond - Wd.millisecond) > 0)) && (Qd -= 100), lW({
                weekday: KW.indexOf(dd),
                day: Number(kd),
                month: Ld,
                year: Qd,
                hour: Number(gd),
                minute: Number(Cd),
                second: Number(Kd)
              })
            }
            var Nd, Wd;
            const Pd = gW.exec(dd);
            if (!Pd) return;
            const [, Zd, gd, Cd, Kd, od, ld, Qd, Ld] = Pd;
            return lW({
              weekday: CW.indexOf(Zd),
              day: Number(null !== Cd && void 0 !== Cd ? Cd : Kd),
              month: oW.indexOf(gd),
              year: Number(Ld),
              hour: Number(od),
              minute: Number(ld),
              second: Number(Qd)
            })
          }(Jd, kd);
        return null == pd ? void 0 : Math.max(0, pd - kd)
      }
      reserveKeepalive(dd, Jd) {
        if (!1 === Jd || dd > 6e4 || vW + dd > 6e4 || xW >= 9) return {
          keepalive: !1,
          release: hJ
        };
        vW += dd, xW++;
        let kd = !1;
        return {
          keepalive: !0,
          release: () => {
            kd || (kd = !0, vW -= dd, xW--)
          }
        }
      }
      handleResponse(dd, Jd) {
        202 === dd.status && "invalid" === dd.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Jd), dd.text().catch(hJ)
      }
      isFetchNetworkError(dd) {
        return dd instanceof TypeError || dd instanceof qW || dd instanceof DOMException && "AbortError" === dd.name
      }
      compress(dd) {
        return tp((function*() {
          const Jd = [],
            kd = new ReadableStream({
              start(Jd) {
                Jd.enqueue((new TextEncoder).encode(dd)), Jd.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: dd,
              value: pd
            } = yield kd.read();
            if (dd) return new Blob(Jd);
            Jd.push(pd)
          }
        }))()
      }
      extendFaroSession(dd, Jd, kd) {
        var pd, Nd;
        const Wd = dd.sessionTracking;
        if (!(null === Wd || void 0 === Wd ? void 0 : Wd.enabled)) return void Jd("Session expired.");
        const {
          fetchUserSession: Pd,
          storeUserSession: Zd
        } = cJ(Wd), gd = null === (pd = this.metas.value.session) || void 0 === pd ? void 0 : pd.id, Cd = null === (Nd = Pd()) || void 0 === Nd ? void 0 : Nd.sessionId;
        kd && kd === gd && kd === Cd ? (mJ({
          fetchUserSession: Pd,
          storeUserSession: Zd
        })({
          forceSessionExtend: !0
        }), Jd("Session expired; created new session.")) : Jd("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const sW = () => {
      const dd = window.k6;
      return {
        k6: oJ({
          isK6Browser: !0
        }, (null === dd || void 0 === dd ? void 0 : dd.testRunId) && {
          testRunId: null === dd || void 0 === dd ? void 0 : dd.testRunId
        })
      }
    };
    let iW, aW;

    function MW() {
      let {
        generatePageId: dd,
        initialPageMeta: Jd
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const kd = location.href;
        return Yd(dd) && iW !== kd && (iW = kd, aW = dd(location)), {
          page: oJ(oJ({
            url: kd
          }, aW ? {
            id: aW
          } : {}), Jd)
        }
      }
    }

    function FW() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dk,
        Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const kd = uJ;
      return Jd > 0 && (kd.error = Jd >= 1 ? function() {
        for (var Jd = arguments.length, pd = new Array(Jd), Nd = 0; Nd < Jd; Nd++) pd[Nd] = arguments[Nd];
        dd.error(`${kd.prefix}\n`, ...pd)
      } : hJ, kd.warn = Jd >= 2 ? function() {
        for (var Jd = arguments.length, pd = new Array(Jd), Nd = 0; Nd < Jd; Nd++) pd[Nd] = arguments[Nd];
        dd.warn(`${kd.prefix}\n`, ...pd)
      } : hJ, kd.info = Jd >= 3 ? function() {
        for (var Jd = arguments.length, pd = new Array(Jd), Nd = 0; Nd < Jd; Nd++) pd[Nd] = arguments[Nd];
        dd.info(`${kd.prefix}\n`, ...pd)
      } : hJ, kd.debug = Jd >= 4 ? function() {
        for (var Jd = arguments.length, pd = new Array(Jd), Nd = 0; Nd < Jd; Nd++) pd[Nd] = arguments[Nd];
        dd.debug(`${kd.prefix}\n`, ...pd)
      } : hJ), kd
    }
    const YW = "faro",
      mW = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      bW = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function SW(dd) {
      var Jd, kd, Nd, Wd, Pd, Zd;
      const gd = [],
        Kd = FW(dd.unpatchedConsole, dd.internalLoggerLevel);
      dd.transports ? ((dd.url || dd.apiKey) && Kd.error('if "transports" is defined, "url" and "apiKey" should not be defined'), gd.push(...dd.transports)) : dd.url ? gd.push(new BW({
        url: dd.url,
        apiKey: dd.apiKey,
        requestCompression: dd.requestCompression
      })) : Kd.error('either "url" or "transports" must be defined');
      const {
        dedupe: od = !0,
        eventDomain: ld = pd,
        globalObjectKey: Qd = YW,
        instrumentations: Ld = hN(),
        internalLoggerLevel: Od = tJ,
        isolate: ed = !1,
        logArgsSerializer: Rd = Sk,
        metas: Id = XW(dd),
        paused: Gd = !1,
        preventGlobalExposure: vd = !1,
        unpatchedConsole: xd = dk,
        url: qd,
        experimental: Bd
      } = dd, sd = LW(dd, bW), ad = null !== (Jd = null === Bd || void 0 === Bd ? void 0 : Bd.trackNavigation) && void 0 !== Jd && Jd, Md = {
        dataAttributeName: dN(null !== (kd = null === (Nd = dd.userActionsInstrumentation) || void 0 === Nd ? void 0 : Nd.dataAttributeName) && void 0 !== kd ? kd : Hp),
        excludeItem: null === (Wd = dd.userActionsInstrumentation) || void 0 === Wd ? void 0 : Wd.excludeItem,
        initialActivityTimeout: JN(null === (Pd = dd.userActionsInstrumentation) || void 0 === Pd ? void 0 : Pd.initialActivityTimeout, 100, (dd => Kd.warn(dd)))
      };
      return oJ(oJ({}, sd), {}, {
        batching: oJ(oJ({}, mW), dd.batching),
        dedupe: od,
        globalObjectKey: Qd,
        instrumentations: jW(Ld, dd),
        internalLoggerLevel: Od,
        isolate: ed,
        logArgsSerializer: Rd,
        metas: Id,
        parseStacktrace: Rk,
        paused: Gd,
        preventGlobalExposure: vd,
        transports: gd,
        unpatchedConsole: xd,
        eventDomain: ld,
        ignoreUrls: [...null !== (Zd = dd.ignoreUrls) && void 0 !== Zd ? Zd : [], ...qd ? [qd] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: oJ(oJ(oJ({}, Cd), dd.sessionTracking), fW({
          trackGeolocation: dd.trackGeolocation,
          sessionTracking: dd.sessionTracking
        })),
        userActionsInstrumentation: Md,
        experimental: {
          trackNavigation: ad
        }
      })
    }

    function jW(dd, Jd) {
      let {
        experimental: kd
      } = Jd;
      var pd;
      const Nd = null !== (pd = null === kd || void 0 === kd ? void 0 : kd.trackNavigation) && void 0 !== pd && pd;
      return dd.filter((dd => !("@grafana/faro-web-sdk:instrumentation-navigation" === dd.name && !Nd)))
    }

    function XW(dd) {
      var Jd, kd, pd;
      const {
        page: Nd,
        generatePageId: Wd
      } = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.pageTracking) && void 0 !== Jd ? Jd : {}, Pd = [zN, HN, MW({
        generatePageId: Wd,
        initialPageMeta: Nd
      }), ...null !== (kd = dd.metas) && void 0 !== kd ? kd : [], AN];
      return Fd(null === (pd = window) || void 0 === pd ? void 0 : pd.k6) ? [...Pd, sW] : Pd
    }

    function fW(dd) {
      let {
        trackGeolocation: Jd,
        sessionTracking: kd
      } = dd;
      var pd;
      const Nd = {};
      return ad(Jd) && (Nd.geoLocationTrackingEnabled = Jd), td(Nd) ? {} : {
        session: oJ(oJ({}, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.session) && void 0 !== pd ? pd : {}), {}, {
          overrides: Nd
        })
      }
    }
    const nW = new WeakSet;

    function UW(dd) {
      return nW.add(dd), dd
    }

    function yW(dd, Jd) {
      if (dd.capture) return UW(dd.capture(Jd));
      const kd = UW(dd.value);
      return null === Jd || void 0 === Jd || Jd(), kd
    }

    function DW(dd) {
      const Jd = `__faroBundleId_${dd}`,
        kd = null === Kd || void 0 === Kd ? void 0 : Kd[Jd];
      if ("string" === typeof kd && "" !== kd) return kd;
      const pd = "undefined" !== typeof window ? window[Jd] : void 0;
      return "string" === typeof pd && "" !== pd ? pd : void 0
    }

    function TW(dd) {
      var Jd, kd;
      const pd = dd.config.app.name,
        Nd = pd ? function(dd) {
          return null === Kd || void 0 === Kd ? void 0 : Kd[`__faroGitHash_${dd}`]
        }(pd) : void 0,
        Wd = {
          sdk: {
            version: pk,
            name: "faro"
          },
          app: AJ({
            bundleId: pd && DW(pd)
          }, void 0 !== Nd ? {
            gitHash: Nd
          } : {})
        },
        Pd = null === (Jd = dd.config.sessionTracking) || void 0 === Jd ? void 0 : Jd.session;
      Pd && dd.api.setSession(Pd), dd.config.app && (Wd.app = AJ(AJ({}, dd.config.app), Wd.app)), dd.config.user && (Wd.user = dd.config.user), dd.config.view && (Wd.view = dd.config.view), dd.metas.add(Wd, ...null !== (kd = dd.config.metas) && void 0 !== kd ? kd : [])
    }
    var EW = class {
      constructor(dd, Jd) {
        var kd, pd;
        this.signalBuffer = [], this.itemLimit = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.itemLimit) && void 0 !== kd ? kd : 50, this.sendTimeout = null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.sendTimeout) && void 0 !== pd ? pd : 250, this.paused = (null === Jd || void 0 === Jd ? void 0 : Jd.paused) || !1, this.sendFn = dd, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(dd) {
        this.paused || (this.signalBuffer.push(dd), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(dd) {
        const Jd = new Map;
        return dd.forEach((dd => {
          const kd = JSON.stringify(dd.meta);
          let pd = Jd.get(kd);
          pd = void 0 === pd ? [dd] : [...pd, dd], Jd.set(kd, pd)
        })), Array.from(Jd.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const dd = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(dd).forEach(this.sendFn)
        } catch (Jd) {
          throw this.signalBuffer = [...dd, ...this.signalBuffer], this.trimBufferToLimit(), Jd
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function cW(dd, Jd, kd, pd) {
      var Nd;
      Jd.debug("Initializing transports");
      const Wd = [];
      let Pd = [];
      const Zd = dd => {
        let Jd = dd;
        for (const pd of Pd) {
          const dd = Jd.map(pd).filter(Boolean);
          if (0 === dd.length) return [];
          Jd = hW(dd, kd)
        }
        return Jd
      };
      let gd;
      (null === (Nd = kd.batching) || void 0 === Nd ? void 0 : Nd.enabled) && (gd = new EW((dd => {
        const kd = Zd(dd);
        if (0 !== kd.length)
          for (const pd of Wd) Jd.debug(`Transporting item using ${pd.name}\n`, kd), pd.isBatched() && pd.send(kd)
      }), {
        sendTimeout: kd.batching.sendTimeout,
        itemLimit: kd.batching.itemLimit,
        paused: kd.paused
      }));
      return {
        add: function() {
          Jd.debug("Adding transports");
          for (var Nd = arguments.length, Pd = new Array(Nd), Zd = 0; Zd < Nd; Zd++) Pd[Zd] = arguments[Zd];
          Pd.forEach((Nd => {
            Jd.debug(`Adding "${Nd.name}" transport`), Wd.some((dd => dd === Nd)) ? Jd.warn(`Transport ${Nd.name} is already added`) : (Nd.unpatchedConsole = dd, Nd.internalLogger = Jd, Nd.config = kd, Nd.metas = pd, Wd.push(Nd))
          }))
        },
        addBeforeSendHooks: function() {
          Jd.debug("Adding beforeSendHooks\n", Pd);
          for (var dd = arguments.length, kd = new Array(dd), pd = 0; pd < dd; pd++) kd[pd] = arguments[pd];
          kd.forEach((dd => {
            dd && Pd.push(dd)
          }))
        },
        getBeforeSendHooks: () => [...Pd],
        execute: dd => {
          var Nd;
          if (!kd.paused && TJ(pd).shouldCapture()) {
            if (od = dd.meta, !nW.has(od)) {
              var Pd, Cd, Kd;
              const Jd = null === (Pd = pd.value.session) || void 0 === Pd ? void 0 : Pd.id,
                Nd = yW(pd);
              if (kd.paused) return;
              const Wd = AJ({}, dd.meta);
              (null === (Cd = Wd.session) || void 0 === Cd ? void 0 : Cd.id) === Jd && (null === (Kd = Nd.session) || void 0 === Kd ? void 0 : Kd.id) !== Jd && (void 0 === Nd.session ? delete Wd.session : Wd.session = Nd.session), dd = AJ(AJ({}, dd), {}, {
                meta: UW(Wd)
              })
            }
            var od;
            (null === (Nd = kd.batching) || void 0 === Nd ? void 0 : Nd.enabled) && (null === gd || void 0 === gd || gd.addItem(dd)), (dd => {
              var pd;
              if ((null === (pd = kd.batching) || void 0 === pd ? void 0 : pd.enabled) && Wd.every((dd => dd.isBatched()))) return;
              const [Nd] = Zd([dd]);
              if (void 0 !== Nd)
                for (const Zd of Wd) {
                  var Pd;
                  Jd.debug(`Transporting item using ${Zd.name}\n`, Nd), Zd.isBatched() ? (null === (Pd = kd.batching) || void 0 === Pd ? void 0 : Pd.enabled) || Zd.send([Nd]) : Zd.send(Nd)
                }
            })(dd)
          }
        },
        isPaused: () => kd.paused,
        pause: () => {
          Jd.debug("Pausing transports"), null === gd || void 0 === gd || gd.pause(), kd.paused = !0
        },
        remove: function() {
          Jd.debug("Removing transports");
          for (var dd = arguments.length, kd = new Array(dd), pd = 0; pd < dd; pd++) kd[pd] = arguments[pd];
          kd.forEach((dd => {
            Jd.debug(`Removing "${dd.name}" transport`);
            const kd = Wd.indexOf(dd); - 1 !== kd ? Wd.splice(kd, 1) : Jd.warn(`Transport "${dd.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var dd = arguments.length, kd = new Array(dd), pd = 0; pd < dd; pd++) kd[pd] = arguments[pd];
          Jd.debug("Removing beforeSendHooks"), Pd = Pd.filter((dd => !kd.includes(dd)))
        },
        get transports() {
          return [...Wd]
        },
        unpause: () => {
          Jd.debug("Unpausing transports"), null === gd || void 0 === gd || gd.start(), kd.paused = !1
        }
      }
    }

    function hW(dd, Jd) {
      if (Jd.preserveOriginalError)
        for (const kd of dd) "exception" === kd.type && delete kd.payload.originalError;
      return dd
    }
    let rW = dk;

    function uW(dd) {
      var Jd;
      return rW = null !== (Jd = dd.unpatchedConsole) && void 0 !== Jd ? Jd : rW, rW
    }
    let tW, VW = uJ;

    function zW(dd, Jd) {
      return VW = FW(dd, Jd.internalLoggerLevel), VW
    }

    function HW(dd) {
      let {
        internalLogger: Jd,
        config: kd,
        metas: pd,
        transports: Nd,
        tracesApi: Wd,
        userActionsApi: Pd
      } = dd;
      var Zd;
      Jd.debug("Initializing exceptions API");
      let gd = null;
      tW = null !== (Zd = kd.parseStacktrace) && void 0 !== Zd ? Zd : tW;
      const Cd = dd => {
          Jd.debug("Changing stacktrace parser"), tW = null !== dd && void 0 !== dd ? dd : tW
        },
        {
          ignoreErrors: Kd = [],
          preserveOriginalError: od
        } = kd;
      return Cd(kd.parseStacktrace), {
        changeStacktraceParser: Cd,
        getStacktraceParser: () => tW,
        pushError: function(dd) {
          let {
            skipDedupe: Zd,
            stackFrames: Cd,
            type: ld,
            context: Qd,
            spanContext: Ld,
            timestampOverwriteMs: Od,
            originalError: ed,
            fingerprint: Rd,
            fatal: Id
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(dd, Jd) {
              const {
                message: kd,
                name: pd,
                stack: Nd
              } = Jd;
              return Wd = dd, Pd = kd + " " + pd + " " + Nd, Wd.some((dd => qd(dd) ? Pd.includes(dd) : !!Pd.match(dd)));
              var Wd, Pd
            }(Kd, null !== ed && void 0 !== ed ? ed : dd)) try {
            var Gd, vd;
            if (!TJ(pd).shouldCapture()) return;
            const Kd = nJ(AJ(AJ({}, function(dd) {
                let Jd = dd.cause;
                Ud(Jd) ? Jd = dd.cause.toString() : null !== Jd && (Fd(dd.cause) || md(dd.cause)) ? Jd = fJ(dd.cause) : null != Jd && (Jd = dd.cause.toString());
                return null == Jd ? {} : {
                  cause: Jd
                }
              }(null !== ed && void 0 !== ed ? ed : dd)), null !== Qd && void 0 !== Qd ? Qd : {})),
              qd = AJ(AJ(AJ(AJ({
                type: ld || dd.name || "Error",
                value: dd.message,
                timestamp: Od ? eJ(Od) : OJ(),
                trace: Ld ? {
                  trace_id: Ld.traceId,
                  span_id: Ld.spanId
                } : Wd.getTraceContext()
              }, td(Kd) ? {} : {
                context: Kd
              }), od ? {
                originalError: ed
              } : {}), Rd ? {
                fingerprint: Rd
              } : {}), void 0 !== Id ? {
                fatal: Id
              } : {});
            Cd = null !== (Gd = Cd) && void 0 !== Gd ? Gd : dd.stack ? null === tW || void 0 === tW ? void 0 : tW(dd).frames : void 0, (null === Cd || void 0 === Cd ? void 0 : Cd.length) && (qd.stacktrace = {
              frames: Cd
            });
            const Bd = {
              type: qd.type,
              value: qd.value,
              stacktrace: qd.stacktrace,
              context: qd.context,
              fingerprint: qd.fingerprint,
              fatal: null !== (vd = qd.fatal) && void 0 !== vd && vd
            };
            if (!Zd && kd.dedupe && !xd(gd) && GJ(Bd, gd)) return void Jd.debug("Skipping error push because it is the same as the last one\n", qd);
            const sd = gd,
              ad = yW(pd);
            if (gd !== sd && !Zd && kd.dedupe && GJ(Bd, gd)) return;
            gd = Bd;
            const Md = {
              meta: ad,
              payload: qd,
              type: "exception"
            };
            Jd.debug("Pushing exception\n", Md), iN(Pd.getActiveUserAction(), Md) || Nd.execute(Md)
          } catch (Bd) {
            Jd.error("Error pushing event", Bd)
          }
        }
      }
    }

    function wW(dd, Jd, kd, pd, Nd) {
      Jd.debug("Initializing API");
      let Wd = null;
      const Pd = function(dd) {
          let {
            transports: Jd,
            internalLogger: kd,
            config: pd,
            pushEvent: Nd
          } = dd;
          var Wd;
          const Pd = null === (Wd = pd.userActionsInstrumentation) || void 0 === Wd ? void 0 : Wd.excludeItem;
          let Zd;
          const gd = () => Zd;
          return {
            startUserAction: (dd, pd, Wd) => {
              if (void 0 === gd()) {
                const kd = new BN({
                  name: dd,
                  transports: Jd,
                  attributes: pd,
                  trigger: (null === Wd || void 0 === Wd ? void 0 : Wd.triggerName) || "faroApiCall",
                  importance: (null === Wd || void 0 === Wd ? void 0 : Wd.importance) || xN.Normal,
                  trackUserActionsExcludeItem: Pd,
                  pushEvent: Nd
                });
                return kd.filter((dd => [3, 2].includes(dd))).first().subscribe((() => {
                  Zd = void 0
                })), sN.notify({
                  type: vN,
                  userAction: kd,
                  initialActivityTimeout: null === Wd || void 0 === Wd ? void 0 : Wd.initialActivityTimeout
                }), Zd = kd, Zd
              }
              kd.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: gd
          }
        }({
          transports: Nd,
          config: kd,
          internalLogger: Jd,
          pushEvent: (dd, kd, pd, Nd) => {
            Wd ? Wd(dd, kd, pd, Nd) : Jd.warn("pushEventImpl is not initialized. Event dropped:", {
              name: dd,
              attributes: kd,
              domain: pd,
              options: Nd
            })
          }
        }),
        Zd = function(dd, Jd, kd, pd, Nd) {
          let Wd;
          return Jd.debug("Initializing traces API"), {
            getOTEL: () => Wd,
            getTraceContext: () => {
              const dd = null === Wd || void 0 === Wd ? void 0 : Wd.trace.getSpanContext(Wd.context.active());
              return dd ? {
                trace_id: dd.traceId,
                span_id: dd.spanId
              } : void 0
            },
            initOTEL: (dd, kd) => {
              Jd.debug("Initializing OpenTelemetry"), Wd = {
                trace: dd,
                context: kd
              }
            },
            isOTELInitialized: () => !!Wd,
            pushTraces: dd => {
              try {
                if (!TJ(pd).shouldCapture()) return;
                const kd = {
                  type: "trace",
                  payload: dd,
                  meta: yW(pd)
                };
                Jd.debug("Pushing trace\n", kd), Nd.execute(kd)
              } catch (kd) {
                Jd.error("Error pushing trace\n", kd)
              }
            }
          }
        }(0, Jd, 0, pd, Nd),
        gd = {
          unpatchedConsole: dd,
          internalLogger: Jd,
          userActionsApi: Pd,
          config: kd,
          metas: pd,
          transports: Nd,
          tracesApi: Zd
        },
        Cd = function(dd) {
          let {
            internalLogger: Jd,
            config: kd,
            metas: pd,
            transports: Nd,
            tracesApi: Wd,
            userActionsApi: Pd
          } = dd, Zd = null;
          return {
            pushEvent: function(dd, gd, Cd) {
              let {
                skipDedupe: Kd,
                spanContext: od,
                timestampOverwriteMs: ld,
                customPayloadTransformer: Qd = dd => dd
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!TJ(pd).shouldCapture()) return;
                const Ld = nJ(gd),
                  Od = Qd({
                    name: dd,
                    domain: null !== Cd && void 0 !== Cd ? Cd : kd.eventDomain,
                    attributes: td(Ld) ? void 0 : Ld,
                    timestamp: ld ? eJ(ld) : OJ(),
                    trace: od ? {
                      trace_id: od.traceId,
                      span_id: od.spanId
                    } : Wd.getTraceContext()
                  }),
                  ed = {
                    name: Od.name,
                    attributes: Od.attributes,
                    domain: Od.domain
                  };
                if (!Kd && kd.dedupe && !xd(Zd) && GJ(ed, Zd)) return void Jd.debug("Skipping event push because it is the same as the last one\n", Od);
                const Rd = Zd,
                  Id = yW(pd);
                if (Zd !== Rd && !Kd && kd.dedupe && GJ(ed, Zd)) return;
                Zd = ed;
                const Gd = {
                  meta: Id,
                  payload: Od,
                  type: "event"
                };
                Jd.debug("Pushing event\n", Gd), iN(Pd.getActiveUserAction(), Gd) || Nd.execute(Gd)
              } catch (Ld) {
                Jd.error("Error pushing event", Ld)
              }
            }
          }
        }(gd);
      return Wd = Cd.pushEvent, AJ(AJ(AJ(AJ(AJ(AJ(AJ({}, Zd), HW(gd)), function(dd) {
        let Jd, kd, pd, Nd, {
          internalLogger: Wd,
          metas: Pd
        } = dd;
        Wd.debug("Initializing meta API");
        const Zd = dd => {
            kd && Pd.remove(kd), kd = {
              user: dd
            }, Pd.add(kd)
          },
          gd = (dd, kd) => {
            var pd;
            const Nd = null === kd || void 0 === kd ? void 0 : kd.overrides,
              Wd = Nd ? {
                overrides: AJ(AJ({}, null === Jd || void 0 === Jd || null === (pd = Jd.session) || void 0 === pd ? void 0 : pd.overrides), Nd)
              } : {};
            Jd && Pd.remove(Jd), Jd = {
              session: AJ(AJ({}, td(dd) ? void 0 : dd), Wd)
            }, Pd.add(Jd)
          },
          Cd = (dd, Jd) => {
            TJ(Pd).notifySessionUpdate({
              type: "replace",
              session: dd,
              overrides: null === Jd || void 0 === Jd ? void 0 : Jd.overrides
            }), gd(dd, Jd)
          },
          Kd = () => Pd.value.session,
          od = () => Pd.value.page;
        return {
          setUser: Zd,
          resetUser: Zd,
          setSession: Cd,
          resetSession: Cd,
          getSession: Kd,
          setView: (dd, Jd) => {
            var kd;
            if ((null === Jd || void 0 === Jd ? void 0 : Jd.overrides) && (TJ(Pd).notifySessionUpdate({
                type: "overrides",
                overrides: Jd.overrides
              }), gd(Kd(), {
                overrides: Jd.overrides
              })), (null === pd || void 0 === pd || null === (kd = pd.view) || void 0 === kd ? void 0 : kd.name) === (null === dd || void 0 === dd ? void 0 : dd.name)) return;
            const Nd = pd;
            pd = {
              view: dd
            }, Pd.add(pd), Nd && Pd.remove(Nd)
          },
          getView: () => Pd.value.view,
          setPage: dd => {
            var Jd;
            const kd = qd(dd) ? AJ(AJ({}, null !== (Jd = null === Nd || void 0 === Nd ? void 0 : Nd.page) && void 0 !== Jd ? Jd : od()), {}, {
              id: dd
            }) : dd;
            Nd && Pd.remove(Nd), Nd = {
              page: kd
            }, Pd.add(Nd)
          },
          getPage: od
        }
      }(gd)), function(dd) {
        let {
          internalLogger: Jd,
          config: kd,
          metas: pd,
          transports: Nd,
          tracesApi: Wd,
          userActionsApi: Pd
        } = dd;
        var Zd;
        Jd.debug("Initializing logs API");
        let gd = null;
        const Cd = null !== (Zd = kd.logArgsSerializer) && void 0 !== Zd ? Zd : Sk;
        return {
          pushLog: function(dd) {
            let {
              context: Zd,
              level: Kd,
              skipDedupe: od,
              spanContext: ld,
              timestampOverwriteMs: Qd
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!TJ(pd).shouldCapture()) return;
              const Ld = nJ(Zd),
                Od = {
                  message: Cd(dd),
                  level: null !== Kd && void 0 !== Kd ? Kd : "log",
                  context: td(Ld) ? void 0 : Ld,
                  timestamp: Qd ? eJ(Qd) : OJ(),
                  trace: ld ? {
                    trace_id: ld.traceId,
                    span_id: ld.spanId
                  } : Wd.getTraceContext()
                },
                ed = {
                  message: Od.message,
                  level: Od.level,
                  context: Od.context
                };
              if (!od && kd.dedupe && !xd(gd) && GJ(ed, gd)) return void Jd.debug("Skipping log push because it is the same as the last one\n", Od);
              const Rd = gd,
                Id = yW(pd);
              if (gd !== Rd && !od && kd.dedupe && GJ(ed, gd)) return;
              gd = ed;
              const Gd = {
                type: "log",
                payload: Od,
                meta: Id
              };
              Jd.debug("Pushing log\n", Gd), iN(Pd.getActiveUserAction(), Gd) || Nd.execute(Gd)
            } catch (Ld) {
              Jd.error("Error pushing log\n", Ld)
            }
          }
        }
      }(gd)), function(dd) {
        let {
          internalLogger: Jd,
          config: kd,
          metas: pd,
          transports: Nd,
          tracesApi: Wd,
          userActionsApi: Pd
        } = dd;
        Jd.debug("Initializing measurements API");
        let Zd = null;
        return {
          pushMeasurement: function(dd) {
            let {
              skipDedupe: gd,
              context: Cd,
              spanContext: Kd,
              timestampOverwriteMs: od
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!TJ(pd).shouldCapture()) return;
              const ld = nJ(Cd),
                Qd = AJ(AJ({}, dd), {}, {
                  trace: Kd ? {
                    trace_id: Kd.traceId,
                    span_id: Kd.spanId
                  } : Wd.getTraceContext(),
                  timestamp: od ? eJ(od) : OJ(),
                  context: td(ld) ? void 0 : ld
                }),
                Ld = {
                  type: Qd.type,
                  values: Qd.values,
                  context: Qd.context
                };
              if (!gd && kd.dedupe && !xd(Zd) && GJ(Ld, Zd)) return void Jd.debug("Skipping measurement push because it is the same as the last one\n", Qd);
              const Od = Zd,
                ed = yW(pd);
              if (Zd !== Od && !gd && kd.dedupe && GJ(Ld, Zd)) return;
              Zd = Ld;
              const Rd = {
                type: "measurement",
                payload: Qd,
                meta: ed
              };
              Jd.debug("Pushing measurement\n", Rd), iN(Pd.getActiveUserAction(), Rd) || Nd.execute(Rd)
            } catch (ld) {
              Jd.error("Error pushing measurement\n", ld)
            }
          }
        }
      }(gd)), Cd), Pd)
    }

    function AW(dd) {
      const Jd = uW(dd),
        kd = zW(Jd, dd);
      if (Ld() && !dd.isolate) return void kd.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      kd.debug("Initializing");
      const pd = function(dd, Jd) {
          let kd, pd = [],
            Nd = [],
            Wd = [],
            Pd = 0,
            Zd = 0;
          const gd = () => pd.reduce(((dd, Jd) => Object.assign(dd, Yd(Jd) ? Jd() : Jd)), {}),
            Cd = () => {
              if (Nd.length) {
                const dd = gd();
                Nd.forEach((Jd => Jd(dd)))
              }
            };
          return {
            add: function() {
              for (var dd = arguments.length, kd = new Array(dd), Nd = 0; Nd < dd; Nd++) kd[Nd] = arguments[Nd];
              Jd.debug("Adding metas\n", kd), pd.push(...kd), Cd()
            },
            remove: function() {
              for (var dd = arguments.length, kd = new Array(dd), Nd = 0; Nd < dd; Nd++) kd[Nd] = arguments[Nd];
              Jd.debug("Removing metas\n", kd), pd = pd.filter((dd => !kd.includes(dd))), Cd()
            },
            addListener: dd => {
              Jd.debug("Adding metas listener\n", dd), Nd.push(dd)
            },
            removeListener: dd => {
              Jd.debug("Removing metas listener\n", dd), Nd = Nd.filter((Jd => Jd !== dd))
            },
            capture: dd => {
              var Jd;
              const pd = void 0 !== kd,
                Nd = null !== (Jd = kd) && void 0 !== Jd ? Jd : Wd;
              pd || (kd = Nd, Pd = 0, Zd = Nd.length);
              try {
                for (; Pd < Zd;) {
                  const dd = Nd[Pd++];
                  null === dd || void 0 === dd || dd()
                }
                const Jd = UW(gd());
                return null === dd || void 0 === dd || dd(), Jd
              } finally {
                pd || (kd = void 0)
              }
            },
            addCaptureListener: dd => {
              Wd.push(dd)
            },
            removeCaptureListener: dd => {
              Wd = Wd.filter((Jd => Jd !== dd))
            },
            get value() {
              return gd()
            }
          }
        }(0, kd),
        Nd = cW(Jd, kd, dd, pd),
        Wd = wW(Jd, kd, dd, pd, Nd),
        Pd = function(dd, Jd, kd, pd, Nd, Wd) {
          Jd.debug("Initializing instrumentations");
          const Pd = [];
          return {
            add: function() {
              Jd.debug("Adding instrumentations");
              for (var Zd = arguments.length, gd = new Array(Zd), Cd = 0; Cd < Zd; Cd++) gd[Cd] = arguments[Cd];
              gd.forEach((Zd => {
                Jd.debug(`Adding "${Zd.name}" instrumentation`), Pd.some((dd => dd.name === Zd.name)) ? Jd.warn(`Instrumentation ${Zd.name} is already added`) : (Zd.unpatchedConsole = dd, Zd.internalLogger = Jd, Zd.config = kd, Zd.metas = pd, Zd.transports = Nd, Zd.api = Wd, Pd.push(Zd), Zd.initialize())
              }))
            },
            get instrumentations() {
              return [...Pd]
            },
            remove: function() {
              Jd.debug("Removing instrumentations");
              for (var dd = arguments.length, kd = new Array(dd), pd = 0; pd < dd; pd++) kd[pd] = arguments[pd];
              kd.forEach((dd => {
                var kd, pd;
                Jd.debug(`Removing "${dd.name}" instrumentation`);
                const Nd = Pd.reduce(((Jd, kd, pd) => null === Jd && kd.name === dd.name ? pd : null), null);
                null !== Nd ? (null === (kd = (pd = Pd[Nd]).destroy) || void 0 === kd || kd.call(pd), Pd.splice(Nd, 1)) : Jd.warn(`Instrumentation "${dd.name}" is not added`)
              }))
            }
          }
        }(Jd, kd, dd, pd, Nd, Wd),
        Zd = ed(Jd, kd, dd, pd, Nd, Wd, Pd);
      return TW(Zd),
        function(dd) {
          dd.transports.add(...dd.config.transports), dd.transports.addBeforeSendHooks(dd.config.beforeSend)
        }(Zd),
        function(dd) {
          dd.instrumentations.add(...dd.config.instrumentations)
        }(Zd), Zd
    }

    function dP(dd) {
      const Jd = SW(dd);
      if (Jd) return AW(Jd)
    }
  },
  6575: function(dd, Jd, kd) {
    var pd;
    ! function(Nd, Wd) {
      var Pd = "function",
        Zd = "undefined",
        gd = "object",
        Cd = "string",
        Kd = "major",
        od = "model",
        ld = "name",
        Qd = "type",
        Ld = "vendor",
        Od = "version",
        ed = "architecture",
        Rd = "console",
        Id = "mobile",
        Gd = "tablet",
        vd = "smarttv",
        xd = "wearable",
        qd = "embedded",
        Bd = "Amazon",
        sd = "Apple",
        ad = "ASUS",
        Md = "BlackBerry",
        Fd = "Browser",
        Yd = "Chrome",
        md = "Firefox",
        bd = "Google",
        Sd = "Honor",
        jd = "Huawei",
        Xd = "LG",
        fd = "Microsoft",
        nd = "Motorola",
        Ud = "Nvidia",
        yd = "OnePlus",
        Dd = "Opera",
        Td = "OPPO",
        Ed = "Samsung",
        cd = "Sharp",
        hd = "Sony",
        rd = "Xiaomi",
        ud = "Zebra",
        td = "Facebook",
        Vd = "Chromium OS",
        zd = "Mac OS",
        Hd = " Browser",
        wd = function(dd) {
          for (var Jd = {}, kd = 0; kd < dd.length; kd++) Jd[dd[kd].toUpperCase()] = dd[kd];
          return Jd
        },
        Ad = function(dd, Jd) {
          return typeof dd === Cd && -1 !== dJ(Jd).indexOf(dJ(dd))
        },
        dJ = function(dd) {
          return dd.toLowerCase()
        },
        JJ = function(dd, Jd) {
          if (typeof dd === Cd) return dd = dd.replace(/^\s\s*/, ""), typeof Jd === Zd ? dd : dd.substring(0, 500)
        },
        kJ = function(dd, Jd) {
          for (var kd, pd, Nd, Zd, Cd, Kd, od = 0; od < Jd.length && !Cd;) {
            var ld = Jd[od],
              Qd = Jd[od + 1];
            for (kd = pd = 0; kd < ld.length && !Cd && ld[kd];)
              if (Cd = ld[kd++].exec(dd))
                for (Nd = 0; Nd < Qd.length; Nd++) Kd = Cd[++pd], typeof(Zd = Qd[Nd]) === gd && Zd.length > 0 ? 2 === Zd.length ? typeof Zd[1] == Pd ? this[Zd[0]] = Zd[1].call(this, Kd) : this[Zd[0]] = Zd[1] : 3 === Zd.length ? typeof Zd[1] !== Pd || Zd[1].exec && Zd[1].test ? this[Zd[0]] = Kd ? Kd.replace(Zd[1], Zd[2]) : Wd : this[Zd[0]] = Kd ? Zd[1].call(this, Kd, Zd[2]) : Wd : 4 === Zd.length && (this[Zd[0]] = Kd ? Zd[3].call(this, Kd.replace(Zd[1], Zd[2])) : Wd) : this[Zd] = Kd || Wd;
            od += 2
          }
        },
        pJ = function(dd, Jd) {
          for (var kd in Jd)
            if (typeof Jd[kd] === gd && Jd[kd].length > 0) {
              for (var pd = 0; pd < Jd[kd].length; pd++)
                if (Ad(Jd[kd][pd], dd)) return "?" === kd ? Wd : kd
            } else if (Ad(Jd[kd], dd)) return "?" === kd ? Wd : kd;
          return Jd.hasOwnProperty("*") ? Jd["*"] : dd
        },
        NJ = {
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
        WJ = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Od, [ld, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Od, [ld, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [ld, Od],
            [/opios[\/ ]+([\w\.]+)/i],
            [Od, [ld, Dd + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Od, [ld, Dd + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Od, [ld, Dd]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Od, [ld, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Od, [ld, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [ld, Od],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Od, [ld, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Od, [ld, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Od, [ld, "UC" + Fd]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Od, [ld, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Od, [ld, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Od, [ld, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Od, [ld, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Od, [ld, "Smart Lenovo " + Fd]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [ld, /(.+)/, "$1 Secure " + Fd], Od
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Od, [ld, md + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Od, [ld, Dd + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Od, [ld, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Od, [ld, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Od, [ld, Dd + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Od, [ld, "MIUI" + Hd]],
            [/fxios\/([\w\.-]+)/i],
            [Od, [ld, md]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Od, [ld, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [ld, /(.+)/, "$1Browser"], Od
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [ld, /(.+)/, "$1" + Hd], Od
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Od, [ld, Ed + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Od, [ld, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [ld, "Sogou Mobile"], Od
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [ld, Od],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [ld],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Od, ld],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [ld, td], Od
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [ld, Od],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Od, [ld, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Od, [ld, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Od, [ld, Yd + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [ld, Yd + " WebView"], Od
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Od, [ld, "Android " + Fd]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [ld, Od],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Od, [ld, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Od, ld],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [ld, [Od, pJ, {
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
            [ld, Od],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [ld, "Netscape"], Od
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [ld, Od],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Od, [ld, md + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [ld, [Od, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [ld, [Od, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [ed, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [ed, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [ed, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [ed, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [ed, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [ed, /ower/, "", dJ]
            ],
            [/ sun4\w[;\)]/i],
            [
              [ed, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [ed, dJ]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [od, [Ld, Ed],
              [Qd, Gd]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [od, [Ld, Ed],
              [Qd, Id]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [od, [Ld, sd],
              [Qd, Id]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [od, [Ld, sd],
              [Qd, Gd]
            ],
            [/(macintosh);/i],
            [od, [Ld, sd]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [od, [Ld, cd],
              [Qd, Id]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [od, [Ld, Sd],
              [Qd, Gd]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [od, [Ld, Sd],
              [Qd, Id]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [od, [Ld, jd],
              [Qd, Gd]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [od, [Ld, jd],
              [Qd, Id]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [od, /_/g, " "],
              [Ld, rd],
              [Qd, Gd]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [od, /_/g, " "],
              [Ld, rd],
              [Qd, Id]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [od, [Ld, Td],
              [Qd, Id]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [od, [Ld, pJ, {
                OnePlus: ["304", "403", "203"],
                "*": Td
              }],
              [Qd, Gd]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [od, [Ld, "Vivo"],
              [Qd, Id]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [od, [Ld, "Realme"],
              [Qd, Id]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [od, [Ld, nd],
              [Qd, Id]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [od, [Ld, nd],
              [Qd, Gd]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [od, [Ld, Xd],
              [Qd, Gd]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [od, [Ld, Xd],
              [Qd, Id]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [od, [Ld, "Lenovo"],
              [Qd, Gd]
            ],
            [/(nokia) (t[12][01])/i],
            [Ld, od, [Qd, Gd]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [od, /_/g, " "],
              [Qd, Id],
              [Ld, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [od, [Ld, bd],
              [Qd, Gd]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [od, [Ld, bd],
              [Qd, Id]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [od, [Ld, hd],
              [Qd, Id]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [od, "Xperia Tablet"],
              [Ld, hd],
              [Qd, Gd]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [od, [Ld, yd],
              [Qd, Id]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [od, [Ld, Bd],
              [Qd, Gd]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [od, /(.+)/g, "Fire Phone $1"],
              [Ld, Bd],
              [Qd, Id]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [od, Ld, [Qd, Gd]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [od, [Ld, Md],
              [Qd, Id]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [od, [Ld, ad],
              [Qd, Gd]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [od, [Ld, ad],
              [Qd, Id]
            ],
            [/(nexus 9)/i],
            [od, [Ld, "HTC"],
              [Qd, Gd]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Ld, [od, /_/g, " "],
              [Qd, Id]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [od, [Ld, "TCL"],
              [Qd, Gd]
            ],
            [/(itel) ((\w+))/i],
            [
              [Ld, dJ], od, [Qd, pJ, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [od, [Ld, "Acer"],
              [Qd, Gd]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [od, [Ld, "Meizu"],
              [Qd, Id]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [od, [Ld, "Ulefone"],
              [Qd, Id]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [od, [Ld, "Energizer"],
              [Qd, Id]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [od, [Ld, "Cat"],
              [Qd, Id]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [od, [Ld, "Smartfren"],
              [Qd, Id]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [od, [Ld, "Nothing"],
              [Qd, Id]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [od, [Ld, "Archos"],
              [Qd, Gd]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [od, [Ld, "Archos"],
              [Qd, Id]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Ld, od, [Qd, Gd]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Ld, od, [Qd, Id]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Ld, od, [Qd, Gd]],
            [/(surface duo)/i],
            [od, [Ld, fd],
              [Qd, Gd]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [od, [Ld, "Fairphone"],
              [Qd, Id]
            ],
            [/(u304aa)/i],
            [od, [Ld, "AT&T"],
              [Qd, Id]
            ],
            [/\bsie-(\w*)/i],
            [od, [Ld, "Siemens"],
              [Qd, Id]
            ],
            [/\b(rct\w+) b/i],
            [od, [Ld, "RCA"],
              [Qd, Gd]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [od, [Ld, "Dell"],
              [Qd, Gd]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [od, [Ld, "Verizon"],
              [Qd, Gd]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [od, [Ld, "Barnes & Noble"],
              [Qd, Gd]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [od, [Ld, "NuVision"],
              [Qd, Gd]
            ],
            [/\b(k88) b/i],
            [od, [Ld, "ZTE"],
              [Qd, Gd]
            ],
            [/\b(nx\d{3}j) b/i],
            [od, [Ld, "ZTE"],
              [Qd, Id]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [od, [Ld, "Swiss"],
              [Qd, Id]
            ],
            [/\b(zur\d{3}) b/i],
            [od, [Ld, "Swiss"],
              [Qd, Gd]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [od, [Ld, "Zeki"],
              [Qd, Gd]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Ld, "Dragon Touch"], od, [Qd, Gd]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [od, [Ld, "Insignia"],
              [Qd, Gd]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [od, [Ld, "NextBook"],
              [Qd, Gd]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Ld, "Voice"], od, [Qd, Id]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Ld, "LvTel"], od, [Qd, Id]
            ],
            [/\b(ph-1) /i],
            [od, [Ld, "Essential"],
              [Qd, Id]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [od, [Ld, "Envizen"],
              [Qd, Gd]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [od, [Ld, "MachSpeed"],
              [Qd, Gd]
            ],
            [/\btu_(1491) b/i],
            [od, [Ld, "Rotor"],
              [Qd, Gd]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [od, [Ld, Ud],
              [Qd, Gd]
            ],
            [/(sprint) (\w+)/i],
            [Ld, od, [Qd, Id]],
            [/(kin\.[onetw]{3})/i],
            [
              [od, /\./g, " "],
              [Ld, fd],
              [Qd, Id]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [od, [Ld, ud],
              [Qd, Gd]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [od, [Ld, ud],
              [Qd, Id]
            ],
            [/smart-tv.+(samsung)/i],
            [Ld, [Qd, vd]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [od, /^/, "SmartTV"],
              [Ld, Ed],
              [Qd, vd]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Ld, Xd],
              [Qd, vd]
            ],
            [/(apple) ?tv/i],
            [Ld, [od, sd + " TV"],
              [Qd, vd]
            ],
            [/crkey/i],
            [
              [od, Yd + "cast"],
              [Ld, bd],
              [Qd, vd]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [od, [Ld, Bd],
              [Qd, vd]
            ],
            [/(shield \w+ tv)/i],
            [od, [Ld, Ud],
              [Qd, vd]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [od, [Ld, cd],
              [Qd, vd]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [od, [Ld, hd],
              [Qd, vd]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [od, [Ld, rd],
              [Qd, vd]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Ld, od, [Qd, vd]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Ld, JJ],
              [od, JJ],
              [Qd, vd]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [od, [Qd, vd]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Qd, vd]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Ld, od, [Qd, Rd]],
            [/droid.+; (shield)( bui|\))/i],
            [od, [Ld, Ud],
              [Qd, Rd]
            ],
            [/(playstation \w+)/i],
            [od, [Ld, hd],
              [Qd, Rd]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [od, [Ld, fd],
              [Qd, Rd]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [od, [Ld, Ed],
              [Qd, xd]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Ld, od, [Qd, xd]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [od, [Ld, Td],
              [Qd, xd]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [od, [Ld, sd],
              [Qd, xd]
            ],
            [/(opwwe\d{3})/i],
            [od, [Ld, yd],
              [Qd, xd]
            ],
            [/(moto 360)/i],
            [od, [Ld, nd],
              [Qd, xd]
            ],
            [/(smartwatch 3)/i],
            [od, [Ld, hd],
              [Qd, xd]
            ],
            [/(g watch r)/i],
            [od, [Ld, Xd],
              [Qd, xd]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [od, [Ld, ud],
              [Qd, xd]
            ],
            [/droid.+; (glass) \d/i],
            [od, [Ld, bd],
              [Qd, xd]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Ld, od, [Qd, xd]],
            [/; (quest( \d| pro)?)/i],
            [od, [Ld, td],
              [Qd, xd]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Ld, [Qd, qd]],
            [/(aeobc)\b/i],
            [od, [Ld, Bd],
              [Qd, qd]
            ],
            [/(homepod).+mac os/i],
            [od, [Ld, sd],
              [Qd, qd]
            ],
            [/windows iot/i],
            [
              [Qd, qd]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [od, [Qd, Id]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [od, [Qd, Gd]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Qd, Gd]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Qd, Id]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [od, [Ld, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Od, [ld, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [ld, Od],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Od, [ld, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [ld, Od],
            [/ladybird\//i],
            [
              [ld, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Od, ld]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [ld, Od],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [ld, [Od, pJ, NJ]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Od, pJ, NJ],
              [ld, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Od, /_/g, "."],
              [ld, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [ld, zd],
              [Od, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Od, ld],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [ld, /(.+)/, "$1 Touch"], Od
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [ld, Od],
            [/\(bb(10);/i],
            [Od, [ld, Md]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Od, [ld, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Od, [ld, md + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Od, [ld, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Od, [ld, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Od, [ld, Yd + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [ld, Vd], Od
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [ld, Od],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [ld, "Solaris"], Od
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [ld, Od]
          ]
        },
        PJ = function(dd, Jd) {
          if (typeof dd === gd && (Jd = dd, dd = Wd), !(this instanceof PJ)) return new PJ(dd, Jd).getResult();
          var kd = typeof Nd !== Zd && Nd.navigator ? Nd.navigator : Wd,
            pd = dd || (kd && kd.userAgent ? kd.userAgent : ""),
            Rd = kd && kd.userAgentData ? kd.userAgentData : Wd,
            vd = Jd ? function(dd, Jd) {
              var kd = {};
              for (var pd in dd) Jd[pd] && Jd[pd].length % 2 === 0 ? kd[pd] = Jd[pd].concat(dd[pd]) : kd[pd] = dd[pd];
              return kd
            }(WJ, Jd) : WJ,
            xd = kd && kd.userAgent == pd;
          return this.getBrowser = function() {
            var dd, Jd = {};
            return Jd[ld] = Wd, Jd[Od] = Wd, kJ.call(Jd, pd, vd.browser), Jd[Kd] = typeof(dd = Jd[Od]) === Cd ? dd.replace(/[^\d\.]/g, "").split(".")[0] : Wd, xd && kd && kd.brave && typeof kd.brave.isBrave == Pd && (Jd[ld] = "Brave"), Jd
          }, this.getCPU = function() {
            var dd = {};
            return dd[ed] = Wd, kJ.call(dd, pd, vd.cpu), dd
          }, this.getDevice = function() {
            var dd = {};
            return dd[Ld] = Wd, dd[od] = Wd, dd[Qd] = Wd, kJ.call(dd, pd, vd.device), xd && !dd[Qd] && Rd && Rd.mobile && (dd[Qd] = Id), xd && "Macintosh" == dd[od] && kd && typeof kd.standalone !== Zd && kd.maxTouchPoints && kd.maxTouchPoints > 2 && (dd[od] = "iPad", dd[Qd] = Gd), dd
          }, this.eL = function() {
            var dd = {};
            return dd[ld] = Wd, dd[Od] = Wd, kJ.call(dd, pd, vd.engine), dd
          }, this.getOS = function() {
            var dd = {};
            return dd[ld] = Wd, dd[Od] = Wd, kJ.call(dd, pd, vd.os), xd && !dd[ld] && Rd && Rd.platform && "Unknown" != Rd.platform && (dd[ld] = Rd.platform.replace(/chrome os/i, Vd).replace(/macos/i, zd)), dd
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.eL(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return pd
          }, this.setUA = function(dd) {
            return pd = typeof dd === Cd && dd.length > 500 ? JJ(dd, 500) : dd, this
          }, this.setUA(pd), this
        };
      PJ.VERSION = "1.0.41", PJ.BROWSER = wd([ld, Od, Kd]), PJ.CPU = wd([ed]), PJ.DEVICE = wd([od, Ld, Qd, Rd, Id, vd, Gd, xd, qd]), PJ.ENGINE = PJ.OS = wd([ld, Od]), typeof Jd !== Zd ? (dd.exports && (Jd = dd.exports = PJ), Jd.UAParser = PJ) : kd.amdO ? (pd = function() {
        return PJ
      }.call(Jd, kd, Jd, dd)) === Wd || (dd.exports = pd) : typeof Nd !== Zd && (Nd.UAParser = PJ);
      var ZJ = typeof Nd !== Zd && (Nd.jQuery || Nd.Zepto);
      if (ZJ && !ZJ.ua) {
        var gJ = new PJ;
        ZJ.ua = gJ.getResult(), ZJ.ua.get = function() {
          return gJ.getUA()
        }, ZJ.ua.set = function(dd) {
          gJ.setUA(dd);
          var Jd = gJ.getResult();
          for (var kd in Jd) ZJ.ua[kd] = Jd[kd]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);