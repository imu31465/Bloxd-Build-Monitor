export const id = 38;
export const ids = [38];
export const modules = {
  7627: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BaseExtension: () => mm,
      BaseInstrumentation: () => Wm,
      BaseTransport: () => dR,
      CSPInstrumentation: () => xF,
      ConsoleInstrumentation: () => Am,
      ConsoleTransport: () => RR,
      EVENT_CLICK: () => gO,
      EVENT_NAVIGATION: () => wO,
      EVENT_ROUTE_CHANGE: () => BO,
      EVENT_SESSION_EXTEND: () => UO,
      EVENT_SESSION_RESUME: () => JO,
      EVENT_SESSION_START: () => EO,
      EVENT_VIEW_CHANGED: () => aO,
      ErrorsInstrumentation: () => Gm,
      FetchTransport: () => aR,
      InternalLoggerLevel: () => IO,
      LogLevel: () => wm,
      MAX_SESSION_PERSISTENCE_TIME: () => hd,
      NavigationInstrumentation: () => jF,
      Observable: () => gm,
      PerformanceInstrumentation: () => ZW,
      PersistentSessionsManager: () => LO,
      SESSION_EXPIRATION_TIME: () => Rd,
      SESSION_INACTIVITY_TIME: () => Xd,
      STORAGE_KEY: () => Fd,
      SessionInstrumentation: () => Rm,
      TransportItemType: () => OR,
      UserActionInstrumentation: () => UF,
      UserActionState: () => bF,
      VERSION: () => Fm,
      ViewInstrumentation: () => Lm,
      VolatileSessionsManager: () => PO,
      WebVitalsInstrumentation: () => rW,
      allLogLevels: () => Em,
      browserMeta: () => ZF,
      buildStackFrame: () => Xm,
      captureMetas: () => LR,
      createInternalLogger: () => BR,
      createPromiseBuffer: () => HR,
      createSession: () => fF,
      deepEqual: () => YO,
      defaultEventDomain: () => Wd,
      defaultExceptionType: () => Bm,
      defaultGlobalObjectKey: () => SR,
      defaultInternalLoggerLevel: () => CO,
      defaultLogLevel: () => am,
      faro: () => Hd,
      genShortID: () => pO,
      getCurrentTimestamp: () => yO,
      getDataFromSafariExtensions: () => Hm,
      getIgnoreUrls: () => Zd,
      getInternalFaroFromGlobalObject: () => od,
      getStackFramesFromError: () => bm,
      getTransportBody: () => FR,
      getUrlFromResource: () => fd,
      getWebInstrumentations: () => DF,
      globalObject: () => Qd,
      initializeFaro: () => dX,
      internalGlobalObjectKey: () => td,
      isArray: () => sd,
      isBoolean: () => Ud,
      isDomError: () => zd,
      isDomException: () => cd,
      isElement: () => Dd,
      isElementDefined: () => jd,
      Nt: () => Cd,
      isError: () => Ld,
      isErrorDefined: () => nd,
      isErrorEvent: () => Pd,
      isEvent: () => Gd,
      isEventDefined: () => rd,
      isFunction: () => Sd,
      isInstanceOf: () => pd,
      isInt: () => Jd,
      isInternalFaroOnGlobalObject: () => qd,
      isMap: () => Id,
      isMapDefined: () => ed,
      isNull: () => gd,
      isNumber: () => Ed,
      isObject: () => Bd,
      isPrimitive: () => Ad,
      isRegExp: () => ud,
      isString: () => wd,
      isSymbol: () => xd,
      isSyntheticEvent: () => ld,
      isThenable: () => Vd,
      isToString: () => Td,
      isTypeof: () => bd,
      isUndefined: () => Yd,
      makeCoreConfig: () => VR,
      noop: () => eO,
      osMeta: () => kF,
      parseStacktrace: () => Tm,
      sdkMeta: () => MF,
      setInternalFaroOnGlobalObject: () => Nd,
      transportItemTypeToBodyKey: () => mR,
      unknownString: () => nm,
      userActionDataAttribute: () => kW,
      userActionTimeoutDataAttribute: () => fW
    });
    const Wd = "browser",
      Fd = "com.grafana.faro.session",
      Rd = 144e5,
      Xd = 9e5,
      Kd = 1e3,
      hd = Xd,
      vd = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: hd
      };
    const Qd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof md.g ? md.g : "undefined" !== typeof self ? self : void 0;
    const td = "_faroInternal";

    function od() {
      return Qd[td]
    }

    function Nd(dd) {
      dd.config.isolate ? dd.internalLogger.debug("Skipping registering internal Faro instance on global object") : (dd.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Qd, td, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dd
      }))
    }

    function qd() {
      return td in Qd
    }
    let Hd = {
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

    function yd(dd, Od, md, Wd, Fd, Rd, Xd) {
      return Od.debug("Initializing Faro"), Hd = {
          api: Rd,
          config: md,
          instrumentations: Xd,
          internalLogger: Od,
          metas: Wd,
          pause: Fd.pause,
          transports: Fd,
          unpatchedConsole: dd,
          unpause: Fd.unpause
        }, Nd(Hd),
        function(dd) {
          if (dd.config.preventGlobalExposure) dd.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (dd.internalLogger.debug(`Registering public faro reference in the global scope using "${dd.config.globalObjectKey}" key`), dd.config.globalObjectKey in Qd) return void dd.internalLogger.warn(`Skipping global registration due to key "${dd.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Qd, dd.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: dd
            })
          }
        }(Hd), Hd
    }

    function bd(dd, Od) {
      return typeof dd === Od
    }

    function Td(dd, Od) {
      return Object.prototype.toString.call(dd) === `[object ${Od}]`
    }

    function pd(dd, Od) {
      try {
        return dd instanceof Od
      } catch (md) {
        return !1
      }
    }
    const Yd = dd => bd(dd, "undefined"),
      gd = dd => bd(dd, "null"),
      wd = dd => bd(dd, "string"),
      Ed = dd => bd(dd, "number") && !isNaN(dd) || bd(dd, "bigint"),
      Jd = dd => Ed(dd) && Number.isInteger(dd),
      Ud = dd => bd(dd, "boolean"),
      xd = dd => bd(dd, "symbol"),
      Bd = dd => !gd(dd) && bd(dd, "object"),
      Sd = dd => bd(dd, "function"),
      sd = dd => Td(dd, "Array"),
      ud = dd => Td(dd, "RegExp"),
      Vd = dd => Sd(null === dd || void 0 === dd ? void 0 : dd.then),
      Ad = dd => !Bd(dd) && !Sd(dd),
      rd = "undefined" !== typeof Event,
      Gd = dd => rd && pd(dd, Event),
      nd = "undefined" !== typeof Error,
      Ld = dd => nd && pd(dd, Error),
      Pd = dd => Td(dd, "ErrorEvent"),
      zd = dd => Td(dd, "DOMError"),
      cd = dd => Td(dd, "DOMException"),
      jd = "undefined" !== typeof Element,
      Dd = dd => jd && pd(dd, Element),
      ed = "undefined" !== typeof Map,
      Id = dd => ed && pd(dd, Map),
      ld = dd => Bd(dd) && "nativeEvent" in dd && "preventDefault" in dd && "stopPropagation" in dd;

    function Cd(dd) {
      return null == dd || (sd(dd) || wd(dd) ? 0 === dd.length : !!Bd(dd) && 0 === Object.keys(dd).length)
    }

    function Zd() {
      return Hd.transports.transports.flatMap((dd => dd.getIgnoreUrls()))
    }

    function kd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Zd().some((Od => dd && null != dd.match(Od)))
    }

    function fd(dd) {
      return wd(dd) ? dd : dd instanceof URL ? dd.href : !Cd(dd) && Sd(null === dd || void 0 === dd ? void 0 : dd.toString) ? dd.toString() : void 0
    }
    const Md = "sessionStorage",
      dO = "localStorage";

    function OO(dd) {
      try {
        let Od;
        Od = window[dd];
        const md = "__faro_storage_test__";
        return Od.setItem(md, md), Od.removeItem(md), !0
      } catch (md) {
        var Od;
        return null === (Od = Hd.internalLogger) || void 0 === Od || Od.info(`Web storage of type ${dd} is not available. Reason: ${md}`), !1
      }
    }

    function mO(dd, Od) {
      return KO(Od) ? window[Od].getItem(dd) : null
    }

    function WO(dd, Od, md) {
      if (KO(md)) try {
        window[md].setItem(dd, Od)
      } catch (Wd) {}
    }

    function FO(dd, Od) {
      KO(Od) && window[Od].removeItem(dd)
    }
    const RO = OO(dO),
      XO = OO(Md);

    function KO(dd) {
      return dd === dO ? RO : dd === Md && XO
    }

    function hO(dd) {
      return hO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, hO(dd)
    }

    function vO(dd) {
      var Od = function(dd, Od) {
        if ("object" != hO(dd) || !dd) return dd;
        var md = dd[Symbol.toPrimitive];
        if (void 0 !== md) {
          var Wd = md.call(dd, Od || "default");
          if ("object" != hO(Wd)) return Wd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Od ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == hO(Od) ? Od : Od + ""
    }

    function QO(dd, Od, md) {
      return (Od = vO(Od)) in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function tO(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function oO(dd) {
      for (var Od = 1; Od < arguments.length; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? tO(Object(md), !0).forEach((function(Od) {
          QO(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : tO(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }

    function NO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hd;
      var Od, md, Wd;
      const Fd = dd.config.sessionTracking,
        Rd = null !== (Od = null !== (md = null === Fd || void 0 === Fd || null === (Wd = Fd.sampler) || void 0 === Wd ? void 0 : Wd.call(Fd, {
          metas: dd.metas.value
        })) && void 0 !== md ? md : null === Fd || void 0 === Fd ? void 0 : Fd.samplingRate) && void 0 !== Od ? Od : 1,
        Xd = "number" === typeof Rd ? function(dd) {
          return Math.min(1, Math.max(0, dd))
        }(Rd) : 0;
      if (!(Xd > 0)) return !1;
      if (1 === Xd) return !0;
      try {
        const dd = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === dd || void 0 === dd ? void 0 : dd.getRandomValues)) {
          const Od = new Uint32Array(1);
          return dd.getRandomValues(Od), Od[0] / Math.pow(2, 32) < Xd
        }
      } catch (Kd) {}
      return Math.random() < Xd
    }

    function qO() {
      return Date.now()
    }

    function HO() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function yO() {
      return (new Date).toISOString()
    }

    function bO(dd) {
      return new Date(dd).toISOString()
    }
    const TO = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function pO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Od = new Uint32Array(dd),
        md = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === md || void 0 === md ? void 0 : md.getRandomValues) md.getRandomValues(Od);
      else
        for (let Fd = 0; Fd < dd; Fd++) Od[Fd] = Math.floor(4294967296 * Math.random());
      let Wd = "";
      for (let Fd = 0; Fd < dd; Fd++) Wd += TO[Od[Fd] % 59];
      return Wd
    }

    function YO(dd, Od) {
      if (dd === Od) return !0;
      if (bd(dd, "number") && isNaN(dd)) return bd(Od, "number") && isNaN(Od);
      const md = sd(dd),
        Wd = sd(Od);
      if (md !== Wd) return !1;
      if (md && Wd) {
        const md = dd.length;
        if (md !== Od.length) return !1;
        for (let Wd = md; 0 !== Wd--;)
          if (!YO(dd[Wd], Od[Wd])) return !1;
        return !0
      }
      const Fd = Bd(dd),
        Rd = Bd(Od);
      if (Fd !== Rd) return !1;
      if (dd && Od && Fd && Rd) {
        const md = Object.keys(dd),
          Wd = Object.keys(Od);
        if (md.length !== Wd.length) return !1;
        for (let dd of md)
          if (!Wd.includes(dd)) return !1;
        for (let Fd of md)
          if (!YO(dd[Fd], Od[Fd])) return !1;
        return !0
      }
      return !1
    }
    const gO = "click",
      wO = "navigation",
      aO = "view_changed",
      EO = "session_start",
      JO = "session_resume",
      UO = "session_extend",
      xO = "service_name_override",
      BO = "route_change";

    function SO() {
      let {
        sessionId: dd,
        started: Od,
        lastActivity: md,
        isSampled: Wd = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Fd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hd;
      var Rd;
      const Xd = qO(),
        Kd = null === (Rd = Fd.config) || void 0 === Rd || null === (Rd = Rd.sessionTracking) || void 0 === Rd ? void 0 : Rd.generateSessionId;
      return null == dd && (dd = "function" === typeof Kd ? Kd() : pO()), {
        sessionId: dd,
        lastActivity: null !== md && void 0 !== md ? md : Xd,
        started: null !== Od && void 0 !== Od ? Od : Xd,
        isSampled: Wd
      }
    }

    function sO(dd) {
      if (null == dd) return !1;
      const Od = qO();
      return Od - dd.started < 144e5 && Od - dd.lastActivity < Xd
    }

    function uO(dd) {
      let {
        fetchUserSession: Od,
        storeUserSession: md,
        adoptSession: Wd,
        updateInterval: Fd = 0
      } = dd, Kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hd, hd = 0;
      return function() {
        let {
          forceSessionExtend: dd = !1,
          refreshActivity: vd = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Qd, td;
        if (!Od || !md) return;
        const od = qO();
        if (!dd && od < hd && hd - od <= Fd) return;
        const Nd = Kd.config.sessionTracking,
          qd = null === Nd || void 0 === Nd ? void 0 : Nd.persistent;
        if (qd && !RO || !qd && !XO) return;
        const Hd = Od();
        if (hd = Math.min(od + Fd, (null !== (Qd = null === Hd || void 0 === Hd ? void 0 : Hd.started) && void 0 !== Qd ? Qd : od) + Rd, (null !== (td = null === Hd || void 0 === Hd ? void 0 : Hd.lastActivity) && void 0 !== td ? td : od) + Xd), !1 === dd && sO(Hd)) {
          var yd;
          vd && md(oO(oO({}, Hd), {}, {
            lastActivity: od
          }));
          const dd = null === (yd = Kd.metas.value.session) || void 0 === yd ? void 0 : yd.id;
          null != Wd && null != Hd.sessionMeta && Hd.sessionId !== dd && Wd(Hd.sessionMeta)
        } else {
          var bd, Td, pd;
          let dd = iO(SO({
            isSampled: NO(Kd)
          }, Kd), Hd, Kd);
          hd = od + Fd, md(dd), null === (bd = Kd.api) || void 0 === bd || bd.setSession(dd.sessionMeta), null === Nd || void 0 === Nd || null === (Td = Nd.onSessionChange) || void 0 === Td || Td.call(Nd, null !== (pd = null === Hd || void 0 === Hd ? void 0 : Hd.sessionMeta) && void 0 !== pd ? pd : null, dd.sessionMeta)
        }
      }
    }

    function VO(dd) {
      let Od, {
          fetchUserSession: md,
          storeUserSession: Wd,
          updateInterval: Fd = 0
        } = dd,
        Rd = 0;
      return dd => {
        const Xd = qO();
        if (dd === Od && Xd < Rd && Rd - Xd <= Fd) return;
        Od = dd, Rd = Xd + Fd;
        const Kd = md();
        (null === Kd || void 0 === Kd ? void 0 : Kd.sessionId) === dd && sO(Kd) && Wd(oO(oO({}, Kd), {}, {
          lastActivity: Xd
        }))
      }
    }

    function iO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hd;
      var Wd, Fd, Rd, Xd, Kd, hd;
      const vd = oO(oO({}, dd), {}, {
          sessionMeta: {
            id: dd.sessionId,
            attributes: rO(oO(oO(oO({}, null === (Wd = md.config.sessionTracking) || void 0 === Wd || null === (Wd = Wd.session) || void 0 === Wd ? void 0 : Wd.attributes), null !== (Fd = null === (Rd = md.metas.value.session) || void 0 === Rd ? void 0 : Rd.attributes) && void 0 !== Fd ? Fd : {}), {}, {
              isSampled: dd.isSampled.toString()
            }))
          }
        }),
        Qd = null !== (Xd = null === (Kd = md.metas.value.session) || void 0 === Kd ? void 0 : Kd.overrides) && void 0 !== Xd ? Xd : null === Od || void 0 === Od || null === (hd = Od.sessionMeta) || void 0 === hd ? void 0 : hd.overrides;
      Cd(Qd) || (vd.sessionMeta.overrides = Qd);
      const td = null === Od || void 0 === Od ? void 0 : Od.sessionId;
      return null != td && (vd.sessionMeta.attributes.previousSession = td), vd
    }

    function AO(dd) {
      let {
        fetchUserSession: Od,
        storeUserSession: md
      } = dd, Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hd, Fd = !1;
      return function(dd) {
        if (Fd) return;
        const Rd = dd.session,
          Xd = Od();
        let Kd = null === Rd || void 0 === Rd ? void 0 : Rd.id;
        const hd = null === Rd || void 0 === Rd ? void 0 : Rd.attributes,
          vd = null === Rd || void 0 === Rd ? void 0 : Rd.overrides,
          Qd = null === Xd || void 0 === Xd ? void 0 : Xd.sessionMeta,
          td = null === Qd || void 0 === Qd ? void 0 : Qd.overrides,
          od = !!vd && !YO(vd, td),
          Nd = !!hd && !YO(hd, null === Qd || void 0 === Qd ? void 0 : Qd.attributes);
        if (Rd && Kd !== (null === Xd || void 0 === Xd ? void 0 : Xd.sessionId) || Nd || od) {
          var qd, Hd;
          const dd = null != Xd && Kd === Xd.sessionId,
            Od = iO(dd ? Xd : SO({
              sessionId: Kd,
              isSampled: NO(Wd)
            }, Wd), Xd, Wd),
            Rd = null === Xd || void 0 === Xd || null === (qd = Xd.sessionMeta) || void 0 === qd || null === (qd = qd.attributes) || void 0 === qd ? void 0 : qd.previousSession;
          dd && null != Rd && Rd !== Od.sessionId && (Od.sessionMeta.attributes.previousSession = Rd), (null === (Hd = Od.sessionMeta.attributes) || void 0 === Hd ? void 0 : Hd.previousSession) === Od.sessionId && delete Od.sessionMeta.attributes.previousSession, md(Od),
            function(dd, Od) {
              let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Fd, Rd, Xd;
              if (!Od) return;
              const Kd = md.serviceName,
                hd = null !== (Fd = null !== (Rd = Wd.serviceName) && void 0 !== Rd ? Rd : null === (Xd = dd.metas.value.app) || void 0 === Xd ? void 0 : Xd.name) && void 0 !== Fd ? Fd : "";
              Kd && Kd !== hd && dd.api.pushEvent(xO, {
                serviceName: Kd,
                previousServiceName: hd
              })
            }(Wd, od, vd, td), Fd = !0;
          try {
            Wd.api.setSession(Od.sessionMeta)
          } finally {
            Fd = !1
          }
        }
      }
    }

    function rO(dd) {
      const Od = {};
      for (const md of Object.keys(dd)) {
        const Wd = dd[md];
        void 0 !== Wd && (Od[md] = Wd)
      }
      return Od
    }

    function GO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== dd && void 0 !== dd ? dd : {}, function() {
        const dd = new WeakSet;
        return function(Od, md) {
          if (Bd(md) && null !== md) {
            if (dd.has(md)) return null;
            dd.add(md)
          }
          return md
        }
      }())
    }

    function nO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Od = {};
      for (const [md, Wd] of Object.entries(dd)) Od[md] = Bd(Wd) && null !== Wd ? GO(Wd) : String(Wd);
      return Od
    }
    var LO = class dd {
      constructor() {
        var Od = this;
        let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hd;
        this.context = md, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = dd => {
          this.adopting = !0;
          try {
            var Od;
            null === (Od = this.context.api) || void 0 === Od || Od.setSession(dd)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: dd = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Od.updateUserSession({
            refreshActivity: dd
          })
        }, this.recordActivity = VO({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          updateInterval: Kd
        }), this.updateUserSession = uO({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Kd
        }, md), this.init()
      }
      static removeUserSession() {
        FO(Fd, dd.storageTypeLocal)
      }
      static storeUserSession(Od) {
        WO(Fd, GO(Od), dd.storageTypeLocal)
      }
      static fetchUserSession() {
        const Od = mO(Fd, dd.storageTypeLocal);
        return Od ? JSON.parse(Od) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var dd;
            this.updateSession({
              refreshActivity: !1
            });
            const Od = null === (dd = this.context.api) || void 0 === dd || null === (dd = dd.getSession()) || void 0 === dd ? void 0 : dd.id;
            Od && this.recordActivity(Od)
          }
        })), this.context.metas.addListener(AO({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession
        }, this.context))
      }
    };
    LO.storageTypeLocal = dO;
    var PO = class dd {
      constructor() {
        var Od = this;
        let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hd;
        this.context = md, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: dd = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Od.updateUserSession({
            refreshActivity: dd
          })
        }, this.recordActivity = VO({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          updateInterval: Kd
        }), this.updateUserSession = uO({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession,
          updateInterval: Kd
        }, md), this.init()
      }
      static removeUserSession() {
        FO(Fd, dd.storageTypeSession)
      }
      static storeUserSession(Od) {
        WO(Fd, GO(Od), dd.storageTypeSession)
      }
      static fetchUserSession() {
        const Od = mO(Fd, dd.storageTypeSession);
        return Od ? JSON.parse(Od) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var dd;
            this.updateSession({
              refreshActivity: !1
            });
            const Od = null === (dd = this.context.api) || void 0 === dd || null === (dd = dd.getSession()) || void 0 === dd ? void 0 : dd.id;
            Od && this.recordActivity(Od)
          }
        })), this.context.metas.addListener(AO({
          fetchUserSession: dd.fetchUserSession,
          storeUserSession: dd.storeUserSession
        }, this.context))
      }
    };
    PO.storageTypeSession = Md;
    const zO = new WeakMap;

    function cO(dd) {
      let Od = zO.get(dd);
      if (!Od) {
        let md = [],
          Wd = [];
        Od = {
          addSessionUpdateListener: dd => {
            md.push(dd)
          },
          removeSessionUpdateListener: dd => {
            md = md.filter((Od => Od !== dd))
          },
          notifySessionUpdate: dd => {
            md.forEach((Od => Od(dd)))
          },
          shouldCapture: () => Wd.every((dd => dd())),
          addCaptureFilter: dd => {
            Wd.push(dd)
          },
          removeCaptureFilter: dd => {
            Wd = Wd.filter((Od => Od !== dd))
          }
        }, zO.set(dd, Od)
      }
      return Od
    }
    var jO = class {
      constructor(dd, Od, md) {
        this.metas = dd, this.transports = Od, this.onActivate = md, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = dd => {
          var Od, md, Wd;
          const Fd = this.pending;
          var Rd, Xd;
          if ("overrides" === dd.type) return void(this.pending = {
            reset: null !== (Rd = null === Fd || void 0 === Fd ? void 0 : Fd.reset) && void 0 !== Rd && Rd,
            inheritOverrides: null === (Xd = null === Fd || void 0 === Fd ? void 0 : Fd.inheritOverrides) || void 0 === Xd || Xd,
            session: oO(oO({}, null === Fd || void 0 === Fd ? void 0 : Fd.session), {}, {
              overrides: oO(oO({}, null === Fd || void 0 === Fd ? void 0 : Fd.session.overrides), dd.overrides)
            })
          });
          const Kd = dd.session,
            hd = Cd(Kd) || null != Kd && "id" in Kd && !Kd.id,
            vd = null !== (Od = null === Kd || void 0 === Kd ? void 0 : Kd.overrides) && void 0 !== Od ? Od : null === Fd || void 0 === Fd ? void 0 : Fd.session.overrides;
          this.pending = {
            reset: hd || !(null === Kd || void 0 === Kd ? void 0 : Kd.id) && null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd.reset) && void 0 !== md && md,
            inheritOverrides: !(!dd.overrides && void 0 !== (null === Kd || void 0 === Kd ? void 0 : Kd.overrides)) && (null === (Wd = null === Fd || void 0 === Fd ? void 0 : Fd.inheritOverrides) || void 0 === Wd || Wd),
            session: {
              id: null === Kd || void 0 === Kd ? void 0 : Kd.id,
              attributes: (null === Kd || void 0 === Kd ? void 0 : Kd.attributes) && oO({}, Kd.attributes),
              overrides: dd.overrides ? oO(oO({}, null === Fd || void 0 === Fd ? void 0 : Fd.session.overrides), dd.overrides) : vd && oO({}, vd)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var dd, Od;
        this.waiting = !0, cO(this.metas).addSessionUpdateListener(this.recordUpdate), cO(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (dd = (Od = this.metas).addCaptureListener) || void 0 === dd || dd.call(Od, this.activate), this.activate()
      }
      destroy() {
        var dd, Od;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), cO(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (dd = (Od = this.metas).removeCaptureListener) || void 0 === dd || dd.call(Od, this.activate), cO(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function DO(dd) {
      return (null === dd || void 0 === dd ? void 0 : dd.persistent) ? LO : PO
    }

    function eO() {}
    let IO = function(dd) {
      return dd[dd.OFF = 0] = "OFF", dd[dd.ERROR = 1] = "ERROR", dd[dd.WARN = 2] = "WARN", dd[dd.INFO = 3] = "INFO", dd[dd.VERBOSE = 4] = "VERBOSE", dd
    }({});
    const lO = {
        debug: eO,
        error: eO,
        info: eO,
        prefix: "Faro",
        warn: eO
      },
      CO = 1;

    function ZO(dd) {
      return ZO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ZO(dd)
    }

    function kO(dd) {
      var Od = function(dd, Od) {
        if ("object" != ZO(dd) || !dd) return dd;
        var md = dd[Symbol.toPrimitive];
        if (void 0 !== md) {
          var Wd = md.call(dd, Od || "default");
          if ("object" != ZO(Wd)) return Wd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Od ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == ZO(Od) ? Od : Od + ""
    }

    function fO(dd, Od, md) {
      return (Od = kO(Od)) in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function MO(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function dm(dd) {
      for (var Od = 1; Od < arguments.length; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? MO(Object(md), !0).forEach((function(Od) {
          fO(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : MO(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }
    const Om = dm({}, console);
    var mm = class {
        constructor() {
          this.unpatchedConsole = Om, this.internalLogger = lO, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          this.internalLogger.debug(`${this.name}\n`, ...Od)
        }
        logInfo() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          this.internalLogger.info(`${this.name}\n`, ...Od)
        }
        logWarn() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          this.internalLogger.warn(`${this.name}\n`, ...Od)
        }
        logError() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          this.internalLogger.error(`${this.name}\n`, ...Od)
        }
      },
      Wm = class extends mm {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const Fm = "2.12.1";
    var Rm = class extends Wm {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = Fm, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(dd) {
        var Od;
        const md = dd.session;
        if (md && md.id !== (null === (Od = this.notifiedSession) || void 0 === Od ? void 0 : Od.id)) {
          var Wd;
          if (this.isAdoptingSession()) return void(this.notifiedSession = md);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Wd = md.attributes) || void 0 === Wd ? void 0 : Wd.previousSession)) return this.api.pushEvent(UO, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = md);
          this.notifiedSession = md, this.api.pushEvent(EO, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(dd, Od, md) {
        const Wd = null === md || void 0 === md ? void 0 : md.session;
        let Fd, Rd, Xd = dd.fetchUserSession();
        if (Od.persistent && Od.maxSessionPersistenceTime && Xd) {
          const dd = qO();
          Xd.lastActivity < dd - Od.maxSessionPersistenceTime && (LO.removeUserSession(), Xd = null)
        }
        const Kd = sO(Xd);
        if ((null === md || void 0 === md ? void 0 : md.reset) || !Kd || (null === Wd || void 0 === Wd ? void 0 : Wd.id) && Wd.id !== (null === Xd || void 0 === Xd ? void 0 : Xd.sessionId)) {
          var hd, vd, Qd, td, od, Nd;
          Rd = SO({
            sessionId: (null === md || void 0 === md ? void 0 : md.reset) ? void 0 : null !== (hd = null === Wd || void 0 === Wd ? void 0 : Wd.id) && void 0 !== hd ? hd : null === (vd = Od.session) || void 0 === vd ? void 0 : vd.id,
            isSampled: NO(this)
          }, this);
          const dd = Rd.sessionId,
            qd = md && Kd ? null === Xd || void 0 === Xd || null === (Qd = Xd.sessionMeta) || void 0 === Qd ? void 0 : Qd.overrides : void 0,
            Hd = qd ? oO(oO({}, null === (td = Od.session) || void 0 === td ? void 0 : td.overrides), qd) : null === (od = Od.session) || void 0 === od ? void 0 : od.overrides;
          Rd.sessionMeta = oO({
            id: dd,
            attributes: oO({
              isSampled: Rd.isSampled.toString()
            }, null === (Nd = Od.session) || void 0 === Nd ? void 0 : Nd.attributes)
          }, Hd ? {
            overrides: Hd
          } : {}), Fd = EO
        } else {
          var qd, Hd;
          const dd = null === Xd || void 0 === Xd ? void 0 : Xd.sessionId;
          Rd = SO({
            sessionId: dd,
            isSampled: Xd.isSampled || !1,
            started: null === Xd || void 0 === Xd ? void 0 : Xd.started
          }, this);
          const md = null === Xd || void 0 === Xd ? void 0 : Xd.sessionMeta,
            Wd = oO(oO({}, null === (qd = Od.session) || void 0 === qd ? void 0 : qd.overrides), null === md || void 0 === md ? void 0 : md.overrides);
          Rd.sessionMeta = oO(oO({}, Od.session), {}, {
            id: dd,
            attributes: oO(oO(oO({}, null === (Hd = Od.session) || void 0 === Hd ? void 0 : Hd.attributes), null === md || void 0 === md ? void 0 : md.attributes), {}, {
              isSampled: Rd.isSampled.toString()
            }),
            overrides: Wd
          }), Fd = JO
        }
        var yd;
        if (Wd && (Rd.sessionMeta = oO(oO({}, Rd.sessionMeta), {}, {
            attributes: oO(oO(oO({}, null === (yd = Rd.sessionMeta) || void 0 === yd ? void 0 : yd.attributes), Wd.attributes), {}, {
              isSampled: Rd.isSampled.toString()
            })
          }), Wd.overrides)) {
          const dd = (null === md || void 0 === md ? void 0 : md.inheritOverrides) ? oO(oO({}, Rd.sessionMeta.overrides), Wd.overrides) : Wd.overrides;
          Object.keys(dd).length > 0 ? Rd.sessionMeta.overrides = dd : delete Rd.sessionMeta.overrides
        }
        return {
          initialSession: Rd,
          lifecycleType: Fd
        }
      }
      registerBeforeSendHook(dd) {
        var Od;
        this.beforeSendHook = Od => {
          var md, Wd;
          const Fd = null === (md = Od.meta.session) || void 0 === md ? void 0 : md.id;
          Fd && !this.transports.isPaused() && dd(Fd);
          const Rd = null === (Wd = Od.meta.session) || void 0 === Wd ? void 0 : Wd.attributes;
          if (Rd && "true" === (null === Rd || void 0 === Rd ? void 0 : Rd.isSampled)) {
            var Xd;
            let dd = JSON.parse(JSON.stringify(Od));
            const md = null === (Xd = dd.meta.session) || void 0 === Xd ? void 0 : Xd.attributes;
            var Kd;
            if (null === md || void 0 === md || delete md.isSampled, 0 === Object.keys(null !== md && void 0 !== md ? md : {}).length) null === (Kd = dd.meta.session) || void 0 === Kd || delete Kd.attributes;
            return dd
          }
          return null
        }, null === (Od = this.transports) || void 0 === Od || Od.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var dd;
        this.logDebug("init session instrumentation");
        const Od = document.prerendering;
        var md;
        if ((null === (dd = this.config.sessionTracking) || void 0 === dd ? void 0 : dd.enabled) && (Od || this.prerenderSession)) return null !== (md = this.prerenderSession) && void 0 !== md || (this.prerenderSession = new jO(this.metas, this.transports, (dd => {
          this.prerenderSession = void 0, this.initializeSession(dd)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(dd) {
        const Od = this.config.sessionTracking;
        if (null === Od || void 0 === Od ? void 0 : Od.enabled) {
          var md, Wd;
          const Fd = DO(Od),
            Rd = new Fd(this);
          this.isAdoptingSession = Rd.isAdopting, this.registerBeforeSendHook(Rd.recordActivity);
          const {
            initialSession: Xd,
            lifecycleType: Kd
          } = this.createInitialSession(Fd, Od, dd);
          Fd.storeUserSession(Xd);
          const hd = Xd.sessionMeta;
          this.notifiedSession = hd, this.api.setSession(hd), this.captureListener = () => {
            this.transports.isPaused() || Rd.updateSession({
              refreshActivity: !1
            })
          }, null === (md = (Wd = this.metas).addCaptureListener) || void 0 === md || md.call(Wd, this.captureListener), Kd === EO && this.api.pushEvent(EO, {}, void 0, {
            skipDedupe: !0
          }), Kd === JO && this.api.pushEvent(JO, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var dd, Od, md;
        (null === (dd = this.prerenderSession) || void 0 === dd || dd.destroy(), this.captureListener) && (null === (Od = (md = this.metas).removeCaptureListener) || void 0 === Od || Od.call(md, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Xm(dd, Od, md, Wd) {
      const Fd = {
        filename: dd || document.location.href,
        function: Od || "?"
      };
      return void 0 !== md && (Fd.lineno = md), void 0 !== Wd && (Fd.colno = Wd), Fd
    }
    const Km = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      hm = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Qm = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      tm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      om = "safari-extension",
      Nm = "safari-web-extension",
      qm = /Minified React error #\d+;/i;

    function Hm(dd, Od) {
      const md = null === dd || void 0 === dd ? void 0 : dd.includes(om),
        Wd = !md && (null === dd || void 0 === dd ? void 0 : dd.includes("safari-web-extension"));
      return md || Wd ? [(null === dd || void 0 === dd ? void 0 : dd.includes("@")) ? dd.split("@")[0] : dd, md ? `${om}:${Od}` : `${Nm}:${Od}`] : [dd, Od]
    }
    const ym = 1024;

    function bm(dd) {
      let Od = [];
      dd.stacktrace ? Od = dd.stacktrace.split("\n").filter(((dd, Od) => Od % 2 === 0)) : dd.stack && (Od = dd.stack.split("\n"));
      const md = Od.reduce(((Od, md, Wd) => {
        if (md.length > ym) return Od;
        let Fd, Rd, Xd, Kd, hd;
        if (Fd = Km.exec(md)) {
          if (Rd = Fd[1], Xd = Fd[2], Kd = Fd[3], hd = Fd[4], null === Xd || void 0 === Xd ? void 0 : Xd.startsWith("eval")) {
            const dd = hm.exec(Xd);
            dd && (Xd = dd[1], Kd = dd[2], hd = dd[3])
          }
          Xd = (null === Xd || void 0 === Xd ? void 0 : Xd.startsWith("address at ")) ? Xd.substring(11) : Xd, [Rd, Xd] = Hm(Rd, Xd)
        } else if (Fd = Qm.exec(md)) {
          if (Rd = Fd[1], Xd = Fd[3], Kd = Fd[4], hd = Fd[5], Xd && Xd.includes(" > eval")) {
            const dd = tm.exec(Xd);
            dd && (Rd = Rd || "eval", Xd = dd[1], Kd = dd[2])
          } else 0 === Wd && !hd && Ed(dd.columnNumber) && (hd = String(dd.columnNumber + 1));
          [Rd, Xd] = Hm(Rd, Xd)
        }
        return (Xd || Rd) && Od.push(Xm(Xd, Rd, Kd ? Number(Kd) : void 0, hd ? Number(hd) : void 0)), Od
      }), []);
      return qm.test(dd.message) ? md.slice(1) : md
    }

    function Tm(dd) {
      return {
        frames: bm(dd)
      }
    }
    const pm = "http-request-start",
      Ym = "http-request-end";
    var gm = class dd {
      constructor() {
        this.subscribers = []
      }
      subscribe(dd) {
        return this.subscribers.push(dd), {
          unsubscribe: () => this.unsubscribe(dd)
        }
      }
      unsubscribe(dd) {
        this.subscribers = this.subscribers.filter((Od => Od !== dd))
      }
      notify(dd) {
        this.subscribers.forEach((Od => Od(dd)))
      }
      first() {
        const Od = new dd,
          md = dd => {
            Od.notify(dd), Wd.unsubscribe()
          },
          Wd = this.subscribe(md),
          Fd = Od.unsubscribe.bind(Od);
        return this.withUnsubscribeOverride(Od, Fd, md)
      }
      takeWhile(Od) {
        const md = new dd,
          Wd = dd => {
            Od(dd) ? md.notify(dd) : md.unsubscribe(Wd)
          };
        this.subscribe(Wd);
        const Fd = md.unsubscribe.bind(md);
        return this.withUnsubscribeOverride(md, Fd, Wd)
      }
      filter(Od) {
        const md = new dd,
          Wd = dd => {
            Od(dd) && md.notify(dd)
          };
        this.subscribe(Wd);
        const Fd = md.unsubscribe.bind(md);
        return this.withUnsubscribeOverride(md, Fd, Wd)
      }
      merge() {
        const Od = new dd,
          md = [];
        for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
        Fd.forEach((dd => {
          const Wd = dd.subscribe((dd => {
            Od.notify(dd)
          }));
          md.push(Wd)
        }));
        const Xd = Od.unsubscribeAll.bind(Od);
        return Od.unsubscribe = () => {
          md.forEach((dd => dd.unsubscribe())), Xd()
        }, Od
      }
      withUnsubscribeOverride(dd, Od, md) {
        return dd.unsubscribe = dd => {
          Od(dd), this.unsubscribe(md)
        }, dd
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let wm = function(dd) {
      return dd.TRACE = "trace", dd.DEBUG = "debug", dd.INFO = "info", dd.LOG = "log", dd.WARN = "warn", dd.ERROR = "error", dd
    }({});
    const am = "log",
      Em = ["trace", "debug", "info", "log", "warn", "error"];
    let Jm, Um = !1;
    const xm = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Bm = "Error",
      Sm = dd => dd.map((dd => Bd(dd) ? GO(dd) : String(dd))).join(" ");

    function sm(dd) {
      let Od, md, Wd, Fd, Rd = [];
      if (Pd(dd) && dd.error) Od = dd.error.message, md = dd.error.name, Rd = bm(dd.error);
      else if ((Wd = zd(dd)) || cd(dd)) {
        const {
          name: Fd,
          message: Rd
        } = dd;
        md = null !== Fd && void 0 !== Fd ? Fd : Wd ? "DOMError" : "DOMException", Od = Rd ? `${md}: ${Rd}` : md
      } else Ld(dd) ? (md = dd.name, Od = dd.message, Rd = bm(dd)) : (Bd(dd) || (Fd = Gd(dd))) && (md = Fd ? dd.constructor.name : void 0, Od = `Non-Error exception captured with keys: ${Object.keys(dd)}`);
      return [Od, md, Rd]
    }

    function um(dd) {
      const [Od, md, Wd, Fd, Rd] = dd;
      let Xd, Kd, hd = [];
      const vd = wd(Od),
        Qd = Xm(md, "?", Wd, Fd);
      return Rd || !vd ? ([Xd, Kd, hd] = sm(null !== Rd && void 0 !== Rd ? Rd : Od), 0 === hd.length && (hd = [Qd])) : vd && ([Xd, Kd] = function(dd) {
        var Od, md;
        const Wd = dd.match(xm),
          Fd = null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd[1]) && void 0 !== Od ? Od : Bm;
        return [null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd[2]) && void 0 !== md ? md : dd, Fd]
      }(Od), hd = [Qd]), {
        value: Xd,
        type: Kd,
        stackFrames: hd
      }
    }

    function Vm(dd, Od) {
      return Ld(dd[0]) ? um(dd) : {
        value: Od(dd)
      }
    }
    const im = dd => dd.map((dd => {
      try {
        return String(dd)
      } catch (Od) {
        return ""
      }
    })).join(" ");
    var Am = class dd extends Wm {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = Fm, this.errorSerializer = im
      }
      initialize() {
        var Od, md;
        const Wd = this.config.consoleInstrumentation,
          Fd = (null === Wd || void 0 === Wd ? void 0 : Wd.serializeErrors) || !!(null === Wd || void 0 === Wd ? void 0 : Wd.errorSerializer);
        this.errorSerializer = Fd ? null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.errorSerializer) && void 0 !== Od ? Od : Sm : im;
        const Rd = null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.disabledLevels) && void 0 !== md ? md : dd.defaultDisabledLevels,
          Xd = function(dd) {
            if (Jm || (Jm = new gm), !Um) {
              const Od = null !== dd && void 0 !== dd ? dd : Om;
              Em.forEach((dd => {
                console[dd] = function() {
                  for (var md, Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
                  Jm.notify({
                    type: "console",
                    level: dd,
                    args: Fd
                  }), null === (md = Od[dd]) || void 0 === md || md.apply(console, Fd)
                }
              })), Um = !0
            }
            return Jm
          }(this.unpatchedConsole);
        this.subscription = Xd.subscribe((Od => {
          let {
            level: md,
            args: Fd
          } = Od;
          if (!Rd.includes(md)) try {
            if (md !== wm.ERROR || (null === Wd || void 0 === Wd ? void 0 : Wd.consoleErrorAsLog))
              if (md === wm.ERROR && (null === Wd || void 0 === Wd ? void 0 : Wd.consoleErrorAsLog)) {
                const {
                  value: Od,
                  type: Wd,
                  stackFrames: Rd
                } = Vm(Fd, this.errorSerializer);
                this.api.pushLog(Od ? [dd.consoleErrorPrefix + Od] : Fd, {
                  level: md,
                  context: {
                    value: null !== Od && void 0 !== Od ? Od : "",
                    type: null !== Wd && void 0 !== Wd ? Wd : "",
                    stackFrames: (null === Rd || void 0 === Rd ? void 0 : Rd.length) ? Sm(Rd) : ""
                  }
                })
              } else this.api.pushLog(Fd, {
                level: md
              });
            else {
              const {
                value: Od,
                type: md,
                stackFrames: Wd
              } = Vm(Fd, this.errorSerializer);
              if (Od && !md && !Wd) return void this.api.pushError(new Error(dd.consoleErrorPrefix + Od));
              this.api.pushError(new Error(dd.consoleErrorPrefix + Od), {
                type: md,
                stackFrames: Wd
              })
            }
          } catch (Xd) {
            this.logError(Xd)
          }
        }))
      }
      destroy() {
        var dd;
        null === (dd = this.subscription) || void 0 === dd || dd.unsubscribe(), this.subscription = void 0
      }
    };
    Am.defaultDisabledLevels = [wm.DEBUG, wm.TRACE, wm.LOG], Am.consoleErrorPrefix = "console.error: ";
    const rm = [];
    var Gm = class extends Wm {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = Fm
      }
      initialize() {
        this.logDebug("Initializing"),
          function(dd) {
            const Od = window.onerror;
            window.onerror = function() {
              for (var md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
              try {
                const {
                  value: Od,
                  type: md,
                  stackFrames: Fd
                } = um(Wd), Rd = Wd[4];
                if (Od) {
                  const Wd = {
                    type: md,
                    stackFrames: Fd
                  };
                  null != Rd && (Wd.originalError = Rd), dd.pushError(new Error(Od), Wd)
                }
              } finally {
                null === Od || void 0 === Od || Od.apply(window, Wd)
              }
            }
          }(this.api),
          function(dd) {
            const Od = Od => {
              var md;
              let Wd, Fd, Rd = Od;
              if (Rd.reason) Rd = Od.reason;
              else if (null === (md = Od.detail) || void 0 === md ? void 0 : md.reason) {
                var Xd;
                Rd = null === (Xd = Od.detail) || void 0 === Xd ? void 0 : Xd.reason
              }
              let Kd = [];
              Ad(Rd) ? (Wd = `Non-Error promise rejection captured with value: ${String(Rd)}`, Fd = "UnhandledRejection") : [Wd, Fd, Kd] = sm(Rd), Wd && dd.pushError(new Error(Wd), {
                type: Fd,
                stackFrames: Kd
              })
            };
            window.addEventListener("unhandledrejection", Od), rm.push(Od)
          }(this.api)
      }
    };
    const nm = "unknown";
    var Lm = class extends Wm {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = Fm, this.waitingForActivation = !1, this.sendViewChangedEvent = dd => {
          var Od;
          if (this.waitingForActivation || document.prerendering) return;
          const md = dd.view;
          if (md && md.name !== (null === (Od = this.notifiedView) || void 0 === Od ? void 0 : Od.name)) {
            var Wd, Fd, Rd;
            const dd = null !== (Wd = null === (Fd = this.notifiedView) || void 0 === Fd ? void 0 : Fd.name) && void 0 !== Wd ? Wd : nm;
            this.notifiedView = md, this.api.pushEvent(aO, {
              fromView: dd,
              toView: null !== (Rd = md.name) && void 0 !== Rd ? Rd : nm
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
    class Pm {
      t;
      o = 0;
      i = [];
      l(dd) {
        if (dd.hadRecentInput) return;
        const Od = this.i[0],
          md = this.i.at(-1);
        this.o && Od && md && dd.startTime - md.startTime < 1e3 && dd.startTime - Od.startTime < 5e3 ? (this.o += dd.value, this.i.push(dd)) : (this.o = dd.value, this.i = [dd]), this.t?.(dd)
      }
    }
    const zm = () => {
        const dd = performance.getEntriesByType("navigation")[0];
        if (dd && dd.responseStart > 0 && dd.responseStart < performance.now()) return dd
      },
      cm = dd => {
        if ("loading" === document.readyState) return "loading";
        const Od = zm();
        if (Od) {
          if (dd < Od.domInteractive) return "loading";
          if (0 === Od.domContentLoadedEventStart || dd < Od.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Od.domComplete || dd < Od.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      jm = dd => {
        const Od = dd.nodeName;
        return 1 === dd.nodeType ? Od.toLowerCase() : Od.toUpperCase().replace(/^#/, "")
      },
      Dm = dd => {
        let Od = "";
        try {
          for (; 9 !== dd?.nodeType;) {
            const md = dd,
              Wd = md.id ? "#" + md.id : [jm(md), ...Array.from(md.classList ?? []).sort()].join(".");
            if (Od.length + Wd.length > 99) return Od || Wd;
            if (Od = Od ? Wd + ">" + Od : Wd, md.id) break;
            dd = md.parentNode
          }
        } catch {}
        return Od
      },
      em = new WeakMap;

    function Im(dd, Od) {
      let md = em.get(Od);
      return md || (md = new WeakMap, em.set(Od, md)), md.get(dd) || md.set(dd, new Od), md.get(dd)
    }
    let lm = -1;
    const Cm = () => lm,
      Zm = dd => {
        addEventListener("pageshow", (Od => {
          Od.persisted && (lm = Od.timeStamp, dd(Od))
        }), !0)
      },
      km = (dd, Od, md, Wd) => {
        let Fd, Rd;
        return Xd => {
          Od.value >= 0 && (Xd || Wd) && (Rd = Od.value - (Fd ?? 0), (Rd || void 0 === Fd) && (Fd = Od.value, Od.delta = Rd, Od.rating = ((dd, Od) => dd > Od[1] ? "poor" : dd > Od[0] ? "needs-improvement" : "good")(Od.value, md), dd(Od)))
        }
      },
      fm = dd => {
        requestAnimationFrame((() => requestAnimationFrame((() => dd()))))
      },
      Mm = () => zm()?.activationStart ?? 0;
    let dW = -1;
    const OW = new Set,
      mW = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      WW = dd => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === dd.type)
            for (const dd of OW) dd();
          isFinite(dW) || (dW = "visibilitychange" === dd.type ? dd.timeStamp : 0, removeEventListener("prerenderingchange", WW, !0))
        }
      },
      FW = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (dW = 1 / 0), dW < 0) {
          const dd = Mm(),
            Od = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Od => "hidden" === Od.name && Od.startTime >= dd))?.startTime;
          dW = Od ?? mW(), addEventListener("visibilitychange", WW, !0), addEventListener("prerenderingchange", WW, !0), Zm((() => {
            setTimeout((() => {
              dW = mW()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return dW
          },
          onHidden(dd) {
            OW.add(dd)
          }
        }
      },
      RW = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0,
          Xd = arguments.length > 6 ? arguments[6] : void 0;
        const Kd = zm(),
          hd = Kd?.navigationId || 0;
        let vd = "navigate";
        return md ? vd = md : Cm() >= 0 ? vd = "back-forward-cache" : Kd && (document.prerendering || Mm() > 0 ? vd = "prerender" : document.wasDiscarded ? vd = "restore" : Kd.type && (vd = Kd.type.replace(/_/g, "-"))), {
          name: dd,
          value: Od,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: vd,
          navigationId: Wd || hd,
          navigationInteractionId: Fd,
          navigationURL: Rd || Kd?.name,
          navigationStartTime: Xd || 0
        }
      },
      XW = function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Wd = dd.filter((dd => PerformanceObserver.supportedEntryTypes.includes(dd)));
          if (Wd.length > 0) {
            const dd = new PerformanceObserver((dd => {
              queueMicrotask((() => {
                const md = dd.getEntries();
                Wd.length > 1 && md.sort(((dd, Od) => dd.startTime + dd.duration - (Od.startTime + Od.duration))), Od(md)
              }))
            }));
            for (const Od of Wd) dd.observe({
              type: Od,
              buffered: !0,
              ...md
            });
            return dd
          }
        } catch {}
      },
      KW = dd => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && dd && dd.reportSoftNavs,
      hW = (dd, Od) => {
        if (dd.set(Od.navigationId, Od), dd.size > 2) {
          const Od = dd.keys().next().value;
          void 0 !== Od && dd.delete(Od)
        }
      },
      vW = dd => {
        let Od = !1;
        return () => {
          Od || (dd(), Od = !0)
        }
      };
    class QW {
      u
    }
    const tW = dd => {
        document.prerendering ? addEventListener("prerenderingchange", dd, !0) : dd()
      },
      oW = [1800, 3e3],
      NW = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = KW(Od);
        tW((() => {
          const Wd = Im(Od, QW),
            Fd = FW();
          let Rd, Xd = RW("FCP");
          const Kd = XW(["paint"], (dd => {
            for (const Od of dd) "first-contentful-paint" === Od.name && (Kd.disconnect(), Od.startTime < Fd.firstHiddenTime && (Xd.value = Math.max(Od.startTime - Mm(), 0), Xd.entries.push(Od), Xd.navigationId = Od.navigationId || Xd.navigationId, Rd(!0)))
          }));
          Kd && (Rd = km(dd, Xd, oW, Od.reportAllChanges), Zm((md => {
            Xd = RW("FCP", -1, "back-forward-cache", Xd.navigationId, Xd.navigationInteractionId, Xd.navigationURL, Cm()), Rd = km(dd, Xd, oW, Od.reportAllChanges), fm((() => {
              Xd.value = performance.now() - md.timeStamp, Rd(!0)
            }))
          }))), md && XW(["soft-navigation"], (md => {
            md.forEach((md => {
              Wd.u && md.navigationId && hW(Wd.u, md);
              const Fd = Math.max((md.presentationTime || md.paintTime || 0) - md.startTime, 0);
              Xd = RW("FCP", Fd, "soft-navigation", md.navigationId, md.interactionId, md.name, md.startTime), Rd = km(dd, Xd, oW, Od.reportAllChanges), Rd(!0)
            }))
          }), Od)
        }))
      },
      qW = [.1, .25],
      HW = dd => dd.find((dd => 1 === dd.node?.nodeType)) || dd[0];
    let yW = 0,
      bW = 1 / 0,
      TW = 0;
    const pW = dd => {
      for (const Od of dd) Od.interactionId && (bW = Math.min(bW, Od.interactionId), TW = Math.max(TW, Od.interactionId), yW = TW ? (TW - bW) / 7 + 1 : 0)
    };
    let YW;
    const gW = () => YW ? yW : performance.interactionCount ?? 0;
    class wW {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return gW() - this.h
      }
      D() {
        this.h = gW(), this.v.length = 0, this.p.clear()
      }
      S(dd) {
        const Od = this.T(),
          md = Math.min(this.v.length - 1, Math.floor(Od / 50));
        return !Od || -1 !== md || "soft-navigation" !== dd && "back-forward-cache" !== dd ? this.v[md] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(dd) {
        if (this.m?.(dd), !dd.interactionId) return;
        const Od = this.v.at(-1);
        let md = this.p.get(dd.interactionId);
        if (md || this.v.length < 10 || dd.duration > Od.k) {
          if (md ? dd.duration > md.k ? (md.entries = [dd], md.k = dd.duration) : dd.duration === md.k && dd.startTime === md.entries[0].startTime && md.entries.push(dd) : (md = {
              id: dd.interactionId,
              entries: [dd],
              k: dd.duration
            }, this.p.set(md.id, md), this.v.push(md)), this.v.sort(((dd, Od) => Od.k - dd.k)), this.v.length > 10) {
            const dd = this.v.splice(10);
            for (const Od of dd) this.p.delete(Od.id)
          }
          this.M?.(md)
        }
      }
    }
    const aW = dd => {
        const Od = "requestIdleCallback" in globalThis ? 1e3 : 0,
          md = globalThis.requestIdleCallback || setTimeout,
          Wd = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) dd();
        else {
          const Fd = vW(dd);
          let Rd = -1;
          const Xd = () => {
            Wd(Rd), Fd()
          };
          addEventListener("visibilitychange", Xd, {
            once: !0,
            capture: !0
          }), Rd = md((() => {
            removeEventListener("visibilitychange", Xd, {
              capture: !0
            }), Fd()
          }), {
            timeout: Od
          })
        }
      },
      EW = [200, 500],
      JW = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = Im(Od = Object.assign({}, Od), wW);
        let Wd = [],
          Fd = [],
          Rd = 0;
        const Xd = new WeakMap,
          Kd = new WeakMap;
        let hd = !1;
        const vd = () => {
            hd || (hd = !0, aW(Qd))
          },
          Qd = () => {
            const dd = new Set(md.v.map((dd => Xd.get(dd.entries[0])))),
              Od = Fd.length - 10;
            Fd = Fd.filter(((md, Wd) => Wd >= Od || dd.has(md)));
            const Kd = new Set;
            for (const md of Fd) {
              const dd = td(md.startTime, md.processingEnd);
              for (const Od of dd) Kd.add(Od)
            }
            const vd = Wd.length - 10;
            Wd = Wd.filter(((dd, Od) => Kd.has(dd) || Od >= vd && dd.startTime > Rd)), hd = !1
          };
        md.m = dd => {
          const md = dd.startTime + dd.duration;
          let Wd;
          Rd = Math.max(Rd, dd.processingEnd);
          for (let Rd = Fd.length - 1; Rd >= 0; Rd--) {
            const Xd = Fd[Rd];
            if (Math.abs(md - Xd.renderTime) <= 8) {
              Wd = Xd, Wd.startTime = Math.min(dd.startTime, Wd.startTime), Wd.processingStart = Math.min(dd.processingStart, Wd.processingStart), Wd.processingEnd = Math.max(dd.processingEnd, Wd.processingEnd), Od.includeProcessedEventEntries && Wd.entries.push(dd);
              break
            }
          }
          Wd || (Wd = {
            startTime: dd.startTime,
            processingStart: dd.processingStart,
            processingEnd: dd.processingEnd,
            renderTime: md,
            entries: Od.includeProcessedEventEntries ? [dd] : []
          }, Fd.push(Wd)), dd.interactionId && Xd.set(dd, Wd), vd()
        }, md.M = dd => {
          if (!Kd.get(dd)) {
            const md = dd.entries.find((dd => dd.target))?.target;
            if (md) {
              const Wd = Od.generateTarget?.(md) ?? Dm(md);
              Kd.set(dd, Wd)
            } else {
              const Od = dd.entries.find((dd => dd.targetSelector))?.targetSelector;
              Od && Kd.set(dd, Od)
            }
          }
        };
        const td = (dd, Od) => {
          const md = [];
          for (const Fd of Wd)
            if (!(Fd.startTime + Fd.duration < dd)) {
              if (Fd.startTime > Od) break;
              md.push(Fd)
            } return md
        };
        XW(["long-animation-frame"], (dd => {
            Wd = Wd.concat(dd), vd()
          }), Od),
          function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const md = FW();
            tW((() => {
              "interactionCount" in performance || YW || (YW = XW(["event"], pW, {
                durationThreshold: 0
              }));
              let Wd, Fd = RW("INP");
              const Rd = Im(Od, wW),
                Xd = (md, Xd, Kd, hd, vd) => {
                  Rd.D(), Fd = RW("INP", -1, md, Xd, Kd, hd, vd), Wd = km(dd, Fd, EW, Od.reportAllChanges)
                },
                Kd = () => {
                  const dd = Rd.S(Fd.navigationType);
                  dd && dd.k !== Fd.value && (Fd.value = dd.k, Fd.entries = dd.entries, Wd())
                },
                hd = dd => {
                  Kd(), Wd(!0), Xd("soft-navigation", dd.navigationId, dd.interactionId, dd.name, dd.startTime)
                },
                vd = function(dd) {
                  let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  aW((() => {
                    for (const Od of dd) "soft-navigation" !== Od.entryType ? Rd.l(Od) : hd(Od);
                    Kd(), Od && Wd(!0)
                  }))
                },
                Qd = ["event", "first-input"];
              KW(Od) && Qd.push("soft-navigation");
              const td = XW(Qd, vd, {
                ...Od,
                durationThreshold: Od.durationThreshold ?? 40
              });
              Wd = km(dd, Fd, EW, Od.reportAllChanges), td && (md.onHidden((() => {
                vd(td.takeRecords(), !0)
              })), Zm((() => {
                Xd("back-forward-cache", Fd.navigationId, Fd.navigationInteractionId, Fd.navigationURL, Cm())
              })))
            }))
          }((Od => {
            dd((dd => {
              if (0 === dd.entries.length) {
                const Od = dd.navigationStartTime || 0,
                  md = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: dd.value,
                    loadState: cm(Od)
                  };
                return Object.assign(dd, {
                  attribution: md
                })
              }
              const Od = dd.entries[0],
                Wd = Xd.get(Od),
                Fd = Math.max(Wd.processingStart, Od.startTime),
                Rd = Math.max(Od.startTime + Od.duration, Fd),
                hd = Math.min(Wd.processingEnd, Rd),
                vd = Wd.entries.sort(((dd, Od) => dd.processingStart - Od.processingStart)),
                Qd = td(Od.startTime, hd),
                od = md.p.get(Od.interactionId),
                Nd = {
                  interactionTarget: Kd.get(od),
                  interactionType: Od.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Od.startTime,
                  nextPaintTime: Rd,
                  processedEventEntries: vd,
                  longAnimationFrameEntries: Qd,
                  inputDelay: Fd - Od.startTime,
                  processingDuration: hd - Fd,
                  presentationDelay: Rd - hd,
                  loadState: cm(Od.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (dd => {
                const Od = dd.interactionTime,
                  md = dd.nextPaintTime;
                if (!dd.longAnimationFrameEntries?.length || !Od || !md) return;
                const Wd = dd.inputDelay,
                  Fd = dd.processingDuration;
                let Rd, Xd, Kd = 0,
                  hd = 0,
                  vd = 0,
                  Qd = 0;
                for (const Nd of dd.longAnimationFrameEntries) {
                  hd = hd + Nd.startTime + Nd.duration - Nd.styleAndLayoutStart;
                  for (const dd of Nd.scripts) {
                    const md = dd.startTime + dd.duration;
                    if (md < Od) continue;
                    const vd = md - Math.max(Od, dd.startTime),
                      td = dd.duration ? vd / dd.duration * dd.forcedStyleAndLayoutDuration : 0;
                    Kd += vd - td, hd += td, vd > Qd && (Xd = dd.startTime < Od + Wd ? "input-delay" : dd.startTime >= Od + Wd + Fd ? "presentation-delay" : "processing-duration", Rd = dd, Qd = vd)
                  }
                }
                const td = dd.longAnimationFrameEntries.at(-1),
                  od = td ? td.startTime + td.duration : 0;
                od >= Od + Wd + Fd && (vd = md - od), Rd && Xd && (dd.longestScript = {
                  entry: Rd,
                  subpart: Xd,
                  intersectingDuration: Qd
                }), dd.totalScriptDuration = Kd, dd.totalStyleAndLayoutDuration = hd, dd.totalPaintDuration = vd, dd.totalUnattributedDuration = md - Od - Kd - hd - vd
              })(Nd), Object.assign(dd, {
                attribution: Nd
              })
            })(Od))
          }), Od)
      };
    class UW {
      m;
      u;
      l(dd) {
        this.m?.(dd)
      }
    }
    const xW = [2500, 4e3];
    let BW = 50;
    const SW = [];
    XW(["resource"], (dd => {
      for (const Od of dd) SW.push(Od), SW.length > BW && SW.shift()
    }));
    const sW = [800, 1800],
      uW = dd => {
        document.prerendering ? tW((() => uW(dd))) : "complete" !== document.readyState ? addEventListener("load", (() => uW(dd)), !0) : setTimeout(dd)
      },
      VW = "load_state",
      iW = "time_to_first_byte";
    var AW = class {
        constructor(dd, Od) {
          this.corePushMeasurement = dd, this.webVitalConfig = Od
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var dd;
          ! function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const md = Im(Od = Object.assign({}, Od), Pm),
              Wd = new WeakMap;
            md.t = dd => {
                if (dd?.sources?.length) {
                  const md = HW(dd.sources),
                    Fd = md?.node;
                  if (Fd) {
                    const dd = Od.generateTarget?.(Fd) ?? Dm(Fd);
                    Wd.set(md, dd)
                  }
                }
              },
              function(dd) {
                let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const md = FW();
                NW(vW((() => {
                  let Wd, Fd = RW("CLS", 0);
                  const Rd = Im(Od, Pm),
                    Xd = (md, Xd, Kd, hd, vd) => {
                      Fd = RW("CLS", 0, md, Xd, Kd, hd, vd), Rd.o = 0, Wd = km(dd, Fd, qW, Od.reportAllChanges)
                    },
                    Kd = function() {
                      let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Rd.o > Fd.value && (Fd.value = Rd.o, Fd.entries = Rd.i), Wd(dd)
                    },
                    hd = dd => {
                      Kd(!0), Xd("soft-navigation", dd.navigationId, dd.interactionId, dd.name, dd.startTime)
                    },
                    vd = dd => {
                      for (const Od of dd) "soft-navigation" !== Od.entryType ? Rd.l(Od) : hd(Od);
                      Kd()
                    },
                    Qd = ["layout-shift"];
                  KW(Od) && Qd.push("soft-navigation");
                  const td = XW(Qd, vd);
                  td && (Wd = km(dd, Fd, qW, Od.reportAllChanges), md.onHidden((() => {
                    vd(td.takeRecords()), Wd(!0)
                  })), Zm((() => {
                    Xd("back-forward-cache", Fd.navigationId, Fd.navigationInteractionId, Fd.navigationURL, Cm()), fm(Wd)
                  })), setTimeout(Wd))
                })))
              }((Od => {
                dd((dd => {
                  let Od = {};
                  if (dd.entries.length) {
                    const md = dd.entries.reduce(((dd, Od) => dd.value > Od.value ? dd : Od));
                    if (md?.sources?.length) {
                      const dd = HW(md.sources);
                      dd && (Od = {
                        largestShiftTarget: Wd.get(dd),
                        largestShiftTime: md.startTime,
                        largestShiftValue: md.value,
                        largestShiftSource: dd,
                        largestShiftEntry: md,
                        loadState: cm(md.startTime)
                      })
                    }
                  }
                  return Object.assign(dd, {
                    attribution: Od
                  })
                })(Od))
              }), Od)
          }((dd => {
            const {
              loadState: Od,
              largestShiftValue: md,
              largestShiftTime: Wd,
              largestShiftTarget: Fd
            } = dd.attribution, Rd = this.buildInitialValues(dd);
            this.addIfPresent(Rd, "largest_shift_value", md), this.addIfPresent(Rd, "largest_shift_time", Wd);
            const Xd = this.buildInitialContext(dd);
            this.addIfPresent(Xd, VW, Od), this.addIfPresent(Xd, "largest_shift_target", Fd), this.pushMeasurement(Rd, Xd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureFCP() {
          var dd;
          ! function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const md = Im(Od = Object.assign({}, Od), QW);
            KW(Od) && (md.u = new Map), NW((Od => {
              dd((dd => {
                let Od = {
                  timeToFirstByte: 0,
                  firstByteToFCP: dd.value,
                  loadState: cm(Cm())
                };
                if ("soft-navigation" !== dd.navigationType) {
                  if (dd.entries.length) {
                    const md = zm(),
                      Wd = dd.entries.at(-1);
                    if (md) {
                      const Fd = md.responseStart,
                        Rd = md.activationStart || 0,
                        Xd = Math.max(0, Fd - Rd);
                      Od = {
                        timeToFirstByte: Xd,
                        firstByteToFCP: dd.value - Xd,
                        loadState: cm(dd.entries[0].startTime),
                        navigationEntry: md,
                        fcpEntry: Wd
                      }
                    }
                  }
                } else {
                  const Wd = md.u?.get(dd.navigationId);
                  Wd && (Od = {
                    timeToFirstByte: 0,
                    firstByteToFCP: dd.value,
                    loadState: "complete",
                    navigationEntry: Wd
                  })
                }
                return Object.assign(dd, {
                  attribution: Od
                })
              })(Od))
            }), Od)
          }((dd => {
            const {
              firstByteToFCP: Od,
              timeToFirstByte: md,
              loadState: Wd
            } = dd.attribution, Fd = this.buildInitialValues(dd);
            this.addIfPresent(Fd, "first_byte_to_fcp", Od), this.addIfPresent(Fd, iW, md);
            const Rd = this.buildInitialContext(dd);
            this.addIfPresent(Rd, VW, Wd), this.pushMeasurement(Fd, Rd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureINP() {
          var dd;
          JW((dd => {
            var Od;
            const {
              interactionTime: md,
              presentationDelay: Wd,
              inputDelay: Fd,
              processingDuration: Rd,
              nextPaintTime: Xd,
              loadState: Kd,
              interactionTarget: hd,
              interactionType: vd,
              totalScriptDuration: Qd,
              totalStyleAndLayoutDuration: td,
              totalPaintDuration: od,
              totalUnattributedDuration: Nd,
              longestScript: qd
            } = dd.attribution, Hd = this.buildInitialValues(dd);
            this.addIfPresent(Hd, "interaction_time", md), this.addIfPresent(Hd, "presentation_delay", Wd), this.addIfPresent(Hd, "input_delay", Fd), this.addIfPresent(Hd, "processing_duration", Rd), this.addIfPresent(Hd, "next_paint_time", Xd), this.addNumberIfDefined(Hd, "total_script_duration", Qd), this.addNumberIfDefined(Hd, "total_style_and_layout_duration", td), this.addNumberIfDefined(Hd, "total_paint_duration", od), this.addNumberIfDefined(Hd, "total_unattributed_duration", Nd), this.addNumberIfDefined(Hd, "longest_script_intersecting_duration", null === qd || void 0 === qd ? void 0 : qd.intersectingDuration);
            const yd = this.buildInitialContext(dd);
            this.addIfPresent(yd, VW, Kd), this.addIfPresent(yd, "interaction_target", hd), this.addIfPresent(yd, "interaction_type", vd), this.addIfPresent(yd, "longest_script_subpart", null === qd || void 0 === qd ? void 0 : qd.subpart), this.addIfPresent(yd, "longest_script_invoker_type", null === qd || void 0 === qd ? void 0 : qd.entry.invokerType), (null === (Od = this.webVitalConfig) || void 0 === Od ? void 0 : Od.trackAttributionSources) && (this.addIfPresent(yd, "longest_script_invoker", null === qd || void 0 === qd ? void 0 : qd.entry.invoker), this.addIfPresent(yd, "longest_script_source_url", null === qd || void 0 === qd ? void 0 : qd.entry.sourceURL), this.addIfPresent(yd, "longest_script_source_function_name", null === qd || void 0 === qd ? void 0 : qd.entry.sourceFunctionName), this.addIfPresent(yd, "longest_script_source_char_position", void 0 !== (null === qd || void 0 === qd ? void 0 : qd.entry.sourceCharPosition) ? String(qd.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Hd, yd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureLCP() {
          var dd;
          ! function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Od = Object.assign({}, Od)).resourceBufferSize && (BW = Od.resourceBufferSize);
            const md = Im(Od, UW),
              Wd = new WeakMap;
            KW(Od) && (md.u = new Map), md.m = dd => {
                const md = dd.element;
                if (md) {
                  const Fd = Od.generateTarget?.(md) ?? Dm(md);
                  Wd.set(dd, Fd)
                } else dd.id && Wd.set(dd, `#${dd.id}`)
              },
              function(dd) {
                let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  md = !1;
                const Wd = KW(Od);
                tW((() => {
                  let Fd, Rd = FW(),
                    Xd = RW("LCP");
                  const Kd = Im(Od, UW),
                    hd = (Wd, Kd, hd, vd, Qd) => {
                      Xd = RW("LCP", -1, Wd, Kd, hd, vd, Qd), Fd = km(dd, Xd, xW, Od.reportAllChanges), md = !1, "soft-navigation" === Wd && (Rd = FW(!0))
                    },
                    vd = dd => {
                      Kd.u && dd.navigationId && hW(Kd.u, dd), md || Fd(!0), hd("soft-navigation", dd.navigationId, dd.interactionId, dd.name, dd.startTime);
                      const Od = dd.getLargestInteractionContentfulPaint?.();
                      Od && Qd([Od])
                    },
                    Qd = dd => {
                      Od.reportAllChanges || Wd || (dd = dd.slice(-1));
                      for (const Od of dd) {
                        if (!Od) continue;
                        if ("soft-navigation" === Od.entryType) {
                          vd(Od);
                          continue
                        }
                        let dd = 0,
                          md = [],
                          Wd = Od.startTime;
                        if ("largest-contentful-paint" === Od.entryType) dd = Math.max(Od.startTime - Mm(), 0), Kd.l(Od), md = [Od];
                        else if ("interaction-contentful-paint" === Od.entryType) {
                          const Fd = Od;
                          if (!Xd.navigationId) continue;
                          if ("interactionId" in Fd && Fd.interactionId != Xd.navigationInteractionId) continue;
                          Wd = Fd.largestContentfulPaint?.renderTime || 0, dd = Math.max(Wd - Od.startTime, 0), Fd.largestContentfulPaint && (Kd.l(Fd.largestContentfulPaint), md = [Fd.largestContentfulPaint])
                        }
                        Wd < Rd.firstHiddenTime && (Xd.value = dd, Xd.entries = md, Fd())
                      }
                    },
                    td = ["largest-contentful-paint"];
                  Wd && td.push("interaction-contentful-paint", "soft-navigation");
                  const od = XW(td, Qd);
                  if (od) {
                    Fd = km(dd, Xd, xW, Od.reportAllChanges);
                    const Rd = ["keydown", "click", "visibilitychange"],
                      Kd = dd => {
                        if (dd.isTrusted && !md) {
                          const dd = Xd.id;
                          aW((() => {
                            if (!md) {
                              if (!Wd) {
                                od.disconnect();
                                for (const dd of Rd) removeEventListener(dd, Kd, {
                                  capture: !0
                                })
                              }
                              dd === Xd.id && (md = !0, Fd(!0))
                            }
                          }))
                        }
                      };
                    for (const dd of Rd) addEventListener(dd, Kd, {
                      capture: !0
                    });
                    Zm((Wd => {
                      hd("back-forward-cache", Xd.navigationId, Xd.navigationInteractionId, Xd.navigationURL, Cm()), Fd = km(dd, Xd, xW, Od.reportAllChanges), fm((() => {
                        Xd.value = performance.now() - Wd.timeStamp, md = !0, Fd(!0)
                      }))
                    }))
                  }
                }))
              }((Od => {
                dd((dd => {
                  let Od = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: dd.value
                  };
                  if (dd.entries.length) {
                    const Fd = dd.entries.at(-1),
                      Rd = dd => dd.name === Fd.url && (dd.requestStart || dd.startTime) <= Fd.startTime,
                      Xd = Fd.url && (SW.findLast(Rd) || performance.getEntriesByType("resource").findLast(Rd));
                    let Kd;
                    Od.target = Wd.get(Fd), Od.lcpEntry = Fd, Fd.url && (Od.url = Fd.url), Xd && (Od.lcpResourceEntry = Xd);
                    let hd = 0,
                      vd = 0;
                    if ("soft-navigation" !== dd.navigationType ? (Kd = zm(), hd = Kd?.activationStart ?? 0, vd = Kd?.responseStart ?? 0) : (hd = dd.navigationStartTime || 0, Kd = md.u?.get(dd.navigationId)), Kd) {
                      const md = Math.max(0, vd - hd),
                        Wd = Math.max(md, Xd ? (Xd.requestStart || Xd.startTime) - hd : 0),
                        Fd = Math.min(dd.value, Math.max(Wd, Xd ? Xd.responseEnd - hd : 0));
                      Od = {
                        ...Od,
                        timeToFirstByte: md,
                        resourceLoadDelay: Wd - md,
                        resourceLoadDuration: Fd - Wd,
                        elementRenderDelay: dd.value - Fd,
                        navigationEntry: Kd
                      }
                    }
                  }
                  return Object.assign(dd, {
                    attribution: Od
                  })
                })(Od))
              }), Od)
          }((dd => {
            var Od;
            const {
              elementRenderDelay: md,
              resourceLoadDelay: Wd,
              resourceLoadDuration: Fd,
              timeToFirstByte: Rd,
              target: Xd,
              url: Kd,
              lcpResourceEntry: hd
            } = dd.attribution, vd = this.buildInitialValues(dd);
            this.addIfPresent(vd, "element_render_delay", md), this.addIfPresent(vd, "resource_load_delay", Wd), this.addIfPresent(vd, "resource_load_duration", Fd), this.addIfPresent(vd, iW, Rd);
            const Qd = this.buildInitialContext(dd);
            this.addIfPresent(Qd, "element", Xd), (null === (Od = this.webVitalConfig) || void 0 === Od ? void 0 : Od.trackAttributionSources) && (this.addIfPresent(Qd, "resource_url", Kd), this.addIfPresent(Qd, "resource_delivery_type", null === hd || void 0 === hd ? void 0 : hd.deliveryType), this.addIfPresent(Qd, "resource_initiator_type", null === hd || void 0 === hd ? void 0 : hd.initiatorType)), this.pushMeasurement(vd, Qd)
          }), {
            reportAllChanges: null === (dd = this.webVitalConfig) || void 0 === dd ? void 0 : dd.reportAllChanges
          })
        }
        measureTTFB() {
          var dd;
          ! function(dd) {
            ! function(dd) {
              let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const md = KW(Od);
              let Wd = RW("TTFB"),
                Fd = km(dd, Wd, sW, Od.reportAllChanges);
              uW((() => {
                const Rd = zm();
                if (Rd) {
                  const Xd = Rd.responseStart;
                  Wd.value = Math.max(Xd - Mm(), 0), Wd.entries = [Rd], Fd(!0), Zm((() => {
                    Wd = RW("TTFB", 0, "back-forward-cache", Wd.navigationId, Wd.navigationInteractionId, Wd.navigationURL, Cm()), Fd = km(dd, Wd, sW, Od.reportAllChanges), Fd(!0)
                  })), md && XW(["soft-navigation"], (md => {
                    md.forEach((md => {
                      md.navigationId && (Wd = RW("TTFB", 0, "soft-navigation", md.navigationId, md.interactionId, md.name, md.startTime), Wd.entries = [md], Fd = km(dd, Wd, sW, Od.reportAllChanges), Fd(!0))
                    }))
                  }), Od)
                }
              }))
            }((Od => {
              dd((dd => {
                const Od = dd.entries[0];
                let md = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Od
                };
                if (dd.entries.length && Od instanceof PerformanceNavigationTiming) {
                  const Wd = Od.activationStart || 0,
                    Fd = Math.max((Od.workerStart || Od.fetchStart || 0) - Wd, 0),
                    Rd = Math.max(Od.domainLookupStart - Wd, 0),
                    Xd = Math.max(Od.connectStart - Wd, 0),
                    Kd = Math.max(Od.connectEnd - Wd, 0);
                  md = {
                    waitingDuration: Fd,
                    cacheDuration: Rd - Fd,
                    dnsDuration: Xd - Rd,
                    connectionDuration: Kd - Xd,
                    requestDuration: dd.value - Kd,
                    navigationEntry: Od
                  }
                }
                return Object.assign(dd, {
                  attribution: md
                })
              })(Od))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((dd => {
            const {
              dnsDuration: Od,
              connectionDuration: md,
              requestDuration: Wd,
              waitingDuration: Fd,
              cacheDuration: Rd
            } = dd.attribution, Xd = this.buildInitialValues(dd);
            this.addIfPresent(Xd, "dns_duration", Od), this.addIfPresent(Xd, "connection_duration", md), this.addIfPresent(Xd, "request_duration", Wd), this.addIfPresent(Xd, "waiting_duration", Fd), this.addIfPresent(Xd, "cache_duration", Rd);
            const Kd = this.buildInitialContext(dd);
            this.pushMeasurement(Xd, Kd)
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
          var Od;
          const md = null !== (Od = mO("com.grafana.faro.lastNavigationId", Md)) && void 0 !== Od ? Od : nm;
          return {
            id: dd.id,
            rating: dd.rating,
            navigation_type: dd.navigationType,
            navigation_entry_id: md
          }
        }
        pushMeasurement(dd, Od) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: dd
          }, {
            context: Od
          })
        }
        addIfPresent(dd, Od, md) {
          md && (dd[Od] = md)
        }
        addNumberIfDefined(dd, Od, md) {
          void 0 !== md && (dd[Od] = md)
        }
      },
      rW = class extends Wm {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = Fm
        }
        initialize() {
          this.logDebug("Initializing"), new AW(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const GW = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function nW() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Od of dd)
        if ("traceparent" === Od.name) {
          if (!GW.test(Od.description)) continue;
          const [, dd, md] = Od.description.split("-");
          if (null != dd && null != md) return {
            traceId: dd,
            spanId: md
          };
          break
        }
    }

    function LW(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: md,
        monoNow: Wd
      } = Od;
      return Math.min(md, md - (Wd - dd))
    }

    function PW(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [md, Wd] of Object.entries(Od)) {
        const Od = dd[md];
        return null != Od && (sd(Wd) ? Wd.includes(Od) : Od === Wd)
      }
      return !0
    }

    function zW(dd) {
      const {
        connectEnd: Od,
        connectStart: md,
        decodedBodySize: Wd,
        domainLookupEnd: Fd,
        domainLookupStart: Rd,
        duration: Xd,
        encodedBodySize: Kd,
        fetchStart: hd,
        initiatorType: vd,
        name: Qd,
        nextHopProtocol: td,
        redirectEnd: od,
        redirectStart: Nd,
        renderBlockingStatus: qd,
        requestStart: Hd,
        responseEnd: yd,
        responseStart: bd,
        responseStatus: Td,
        secureConnectionStart: pd,
        transferSize: Yd,
        workerStart: gd
      } = dd;
      return {
        name: Qd,
        httpHost: jW(Qd),
        duration: DW(Xd),
        tcpHandshakeTime: DW(Od - md),
        dnsLookupTime: DW(Fd - Rd),
        tlsNegotiationTime: DW(Od - pd),
        responseStatus: DW(Td),
        redirectTime: DW(od - Nd),
        requestTime: DW(bd - Hd),
        responseTime: DW(yd - bd),
        fetchTime: DW(yd - hd),
        serviceWorkerTime: DW(gd > 0 ? hd - gd : 0),
        decodedBodySize: DW(Wd),
        encodedBodySize: DW(Kd),
        cacheHitStatus: function() {
          let dd = "fullLoad";
          0 === Yd ? Wd > 0 && (dd = "cache") : null != Td ? 304 === Td && (dd = "conditionalFetch") : Kd > 0 && Yd < Kd && (dd = "conditionalFetch");
          return dd
        }(),
        renderBlockingStatus: DW(qd),
        protocol: td,
        initiatorType: vd,
        visibilityState: document.visibilityState,
        ttfb: DW(bd - Hd),
        transferSize: DW(Yd)
      }
    }

    function cW(dd) {
      const {
        activationStart: Od,
        domComplete: md,
        domContentLoadedEventEnd: Wd,
        domContentLoadedEventStart: Fd,
        domInteractive: Rd,
        fetchStart: Xd,
        loadEventEnd: Kd,
        loadEventStart: hd,
        responseStart: vd,
        type: Qd
      } = dd, td = function() {
        var dd;
        return null != (null === (dd = performance.timing) || void 0 === dd ? void 0 : dd.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return oO(oO({}, zW(dd)), {}, {
        pageLoadTime: DW(md - Xd),
        documentParsingTime: DW(td ? Rd - td : null),
        domProcessingTime: DW(md - Rd),
        domContentLoadHandlerTime: DW(Wd - Fd),
        onLoadTime: DW(Kd - hd),
        ttfb: DW(Math.max(vd - (null !== Od && void 0 !== Od ? Od : 0), 0)),
        type: Qd
      })
    }

    function jW(dd) {
      try {
        return new URL(dd).host || nm
      } catch (Od) {
        return nm
      }
    }

    function DW(dd) {
      return null == dd ? nm : "number" === typeof dd ? Math.round(dd > 0 ? dd : 0).toString() : dd.toString()
    }
    const eW = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function IW(dd, Od, md, Wd, Fd, Rd, Xd) {
      try {
        var Kd = dd[Rd](Xd),
          hd = Kd.value
      } catch (dd) {
        return void md(dd)
      }
      Kd.done ? Od(hd) : Promise.resolve(hd).then(Wd, Fd)
    }

    function lW(dd) {
      return function() {
        var Od = this,
          md = arguments;
        return new Promise((function(Wd, Fd) {
          var Rd = dd.apply(Od, md);

          function Xd(dd) {
            IW(Rd, Wd, Fd, Xd, Kd, "next", dd)
          }

          function Kd(dd) {
            IW(Rd, Wd, Fd, Xd, Kd, "throw", dd)
          }
          Xd(void 0)
        }))
      }
    }
    const CW = new gm;
    var ZW = class extends Wm {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = Fm
      }
      initialize() {
        var dd = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Od = !1;
        const md = () => {
          ! function(dd) {
            if ("complete" === document.readyState) dd();
            else {
              const Od = () => {
                "complete" === document.readyState && (dd(), document.removeEventListener("readystatechange", Od))
              };
              document.addEventListener("readystatechange", Od)
            }
          }(lW((function*() {
            if (Od) return;
            const md = dd.api.pushEvent,
              {
                faroNavigationId: Wd
              } = yield function(dd) {
                let Od;
                const md = new Promise((dd => {
                  Od = dd
                }));
                return new PerformanceObserver((md => {
                  var Wd;
                  const [Fd] = md.getEntries();
                  if (null == Fd || kd(Fd.name)) return;
                  const Rd = Fd.toJSON();
                  let Xd = nW(null === Rd || void 0 === Rd ? void 0 : Rd.serverTiming);
                  const Kd = null !== (Wd = mO("com.grafana.faro.lastNavigationId", Md)) && void 0 !== Wd ? Wd : nm,
                    hd = oO(oO({}, cW(Rd)), {}, {
                      faroNavigationId: pO(),
                      faroPreviousNavigationId: Kd
                    });
                  WO("com.grafana.faro.lastNavigationId", hd.faroNavigationId, Md), dd("faro.performance.navigation", hd, void 0, {
                    spanContext: Xd,
                    timestampOverwriteMs: LW(Rd.startTime)
                  }), Od(hd)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), md
              }(md);
            Od || null == Wd || function(dd, Od, md, Wd) {
              const Fd = Wd.trackResources;
              new PerformanceObserver((Wd => {
                const Rd = Wd.getEntries(),
                  Xd = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Kd of Rd) {
                  if (kd(Kd.name)) continue;
                  null === md || void 0 === md || md.notify({
                    type: "resource"
                  });
                  const Wd = Kd.toJSON();
                  let Rd = nW(null === Wd || void 0 === Wd ? void 0 : Wd.serverTiming);
                  (null == Fd && PW(Wd, eW) || Fd) && Od("faro.performance.resource", oO(oO({}, zW(Wd)), {}, {
                    faroNavigationId: dd,
                    faroResourceId: pO()
                  }), void 0, {
                    spanContext: Rd,
                    timestampOverwriteMs: LW(Wd.startTime, Xd)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Wd, md, CW, dd.config)
          })))
        };
        this.cancelInitialization = () => {
          Od = !0, document.removeEventListener("prerenderingchange", md)
        }, document.prerendering ? document.addEventListener("prerenderingchange", md, {
          once: !0
        }) : md()
      }
      destroy() {
        var dd;
        null === (dd = this.cancelInitialization) || void 0 === dd || dd.call(this), this.cancelInitialization = void 0
      }
    };
    const kW = "data-faro-user-action-name",
      fW = kW.replace(/-name$/, "-timeout"),
      MW = 1e3;

    function dF(dd) {
      return `data-${(dd.startsWith("data-")?dd.slice(5):dd).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function OF(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eO;
      if (void 0 === dd) return Od;
      let Wd = NaN;
      try {
        Wd = "string" === typeof dd && "" === dd.trim() ? NaN : Number(dd)
      } catch (Fd) {}
      return !Number.isFinite(Wd) || Wd <= 0 ? (md(`initialActivityTimeout must be a finite number greater than zero; using ${Od} ms`), Od) : Wd > 1e3 ? (md(`initialActivityTimeout cannot exceed ${MW} ms; clamping to the maximum`), MW) : Wd
    }

    function mF(dd, Od, md) {
      return void 0 !== dd && window.clearTimeout(dd), window.setTimeout((() => {
        Od()
      }), md)
    }

    function WF(dd) {
      return dd.type === Ym
    }
    let FF, RF;

    function XF() {
      return FF || (FF = new gm), RF || (RF = new MutationObserver(((dd, Od) => {
        FF.notify({
          type: "dom-mutation"
        })
      })), RF.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), FF
    }
    const KF = "fetch",
      hF = "xhr";
    let vF, QF, tF, oF, NF = !1;

    function qF() {
      if (vF) return vF;

      function dd(dd) {
        vF.notify({
          type: pm,
          request: dd
        })
      }

      function Od(dd) {
        vF.notify({
          type: Ym,
          request: dd
        })
      }
      return vF = new gm, NF || (! function(dd) {
        let {
          onRequestEnd: Od,
          onRequestStart: md
        } = dd;
        tF || (tF = window.fetch);
        window.fetch = function() {
          var dd, Wd;
          const Fd = null !== (dd = fd(arguments[0])) && void 0 !== dd ? dd : "",
            Rd = kd(Fd),
            Xd = (null !== (Wd = arguments[1]) && void 0 !== Wd ? Wd : {}).method,
            Kd = pO();
          return Rd || md({
            url: Fd,
            method: Xd,
            requestId: Kd,
            apiType: KF
          }), tF.apply(this, arguments).then((dd => (Rd || Od({
            url: Fd,
            method: Xd,
            requestId: Kd,
            apiType: KF
          }), dd))).catch((dd => {
            throw Rd || Od({
              url: Fd,
              method: Xd,
              requestId: Kd,
              apiType: KF
            }), dd
          }))
        }
      }({
        onRequestStart: dd,
        onRequestEnd: Od
      }), function(dd) {
        let {
          onRequestStart: Od,
          onRequestEnd: md
        } = dd;
        QF || (QF = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const dd = arguments[1],
            Wd = kd(dd),
            Fd = arguments[0],
            Rd = pO();
          this.addEventListener("loadstart", (function() {
            Wd || Od({
              url: dd,
              method: Fd,
              requestId: Rd,
              apiType: hF
            })
          })), this.addEventListener("load", (function() {
            Wd || md({
              url: dd,
              method: Fd,
              requestId: Rd,
              apiType: hF
            })
          })), this.addEventListener("error", (function() {
            Wd || md({
              url: dd,
              method: Fd,
              requestId: Rd,
              apiType: hF
            })
          })), this.addEventListener("abort", (function() {
            Wd || md({
              url: dd,
              method: Fd,
              requestId: Rd,
              apiType: hF
            })
          })), QF.apply(this, arguments)
        }
      }({
        onRequestStart: dd,
        onRequestEnd: Od
      }), NF = !0), vF
    }
    let HF, yF = !1;
    let bF = function(dd) {
      return dd[dd.Started = 0] = "Started", dd[dd.Halted = 1] = "Halted", dd[dd.Cancelled = 2] = "Cancelled", dd[dd.Ended = 3] = "Ended", dd
    }({});
    var TF = class {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = dd, this.logDebug = Od, this.initialActivityTimeout = md, this.http = qF(), this.dom = XF(), this.perf = (oF || (oF = new gm), yF || (HF = CW.subscribe((dd => {
          "resource" === dd.type && oF.notify({
            type: "resource-entry"
          })
        })), yF = !0), oF), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new gm).merge(this.http, this.dom, this.perf).takeWhile((() => [bF.Started, bF.Halted].includes(this.userAction.getState()))).filter((dd => !!(this.userAction.getState() !== bF.Halted || WF(dd) && this.runningRequests.has(dd.request.requestId)))).subscribe((dd => {
          (function(dd) {
            return dd.type === pm
          })(dd) && this.runningRequests.set(dd.request.requestId, dd.request), WF(dd) && this.runningRequests.delete(dd.request.requestId), WF(dd) ? this.userAction.getState() === bF.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((dd => [bF.Ended, bF.Cancelled].includes(dd))).first().subscribe((() => this.cleanup())), this.startupTid = mF(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === bF.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === bF.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = mF(this.haltTid, (() => {
          this.userAction.getState() === bF.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var dd, Od;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (dd = this.allMonitorsSub) || void 0 === dd || dd.unsubscribe(), null === (Od = this.stateSub) || void 0 === Od || Od.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(dd) {
        void 0 !== dd && window.clearTimeout(dd)
      }
    };

    function pF(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO;
      var md;
      const {
        api: Wd,
        config: Fd,
        internalLogger: Rd
      } = dd, Xd = OF(null === (md = Fd.userActionsInstrumentation) || void 0 === md ? void 0 : md.initialActivityTimeout, 100, Od);
      return {
        processUserEvent: function(dd) {
          var Od, md;
          const Rd = null !== (Od = null === (md = Fd.userActionsInstrumentation) || void 0 === md ? void 0 : md.dataAttributeName) && void 0 !== Od ? Od : kW,
            Xd = dd.target;
          if (!(Xd instanceof Element)) return;
          const Kd = function(dd, Od) {
              let md = dd;
              for (; md;) {
                if (md.hasAttribute(Od)) return md;
                md = md.parentElement
              }
              return null
            }(Xd, dF(Rd)),
            hd = function(dd, Od) {
              if (!dd) return;
              const md = function(dd) {
                  return dF(dd).slice(5).replace(/-(.)/g, ((dd, Od) => Od.toUpperCase()))
                }(Od),
                Wd = dd.dataset;
              for (const Fd in Wd)
                if (Fd === md) return Wd[Fd]
            }(Kd, Rd);
          if (!Kd || !hd) return;
          const vd = function(dd, Od) {
            const md = dd.getAttribute(function(dd) {
              const Od = dF(dd);
              return Od.endsWith("-name") ? `${Od.slice(0,-5)}-timeout` : `${Od}-timeout`
            }(Od));
            return null === md ? void 0 : Number(md)
          }(Kd, Rd);
          Wd.startUserAction(hd, {}, {
            triggerName: dd.type,
            initialActivityTimeout: vd
          })
        },
        processUserActionStarted: function(dd, md) {
          const Wd = dd,
            Fd = OF(md, Xd, Od);
          new TF(Wd, Rd.debug, Fd).attach()
        }
      }
    }
    const YF = "user_action_start",
      gF = {
        Normal: "normal",
        Critical: "critical"
      };
    var wF = class {
        constructor() {
          this.buffer = []
        }
        addItem(dd) {
          this.buffer.push(dd)
        }
        flushBuffer(dd) {
          if (Sd(dd))
            for (const Od of this.buffer) dd(Od);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      aF = class extends gm {
        constructor(dd) {
          let {
            name: Od,
            parentId: md,
            trigger: Wd,
            transports: Fd,
            attributes: Rd,
            trackUserActionsExcludeItem: Xd,
            importance: Kd = gF.Normal,
            pushEvent: hd
          } = dd;
          super(), this.name = Od, this.attributes = Rd, this.id = pO(), this.trigger = Wd, this.parentId = null !== md && void 0 !== md ? md : this.id, this.trackUserActionsExcludeItem = Xd, this.importance = Kd, this._pushEvent = hd, this._itemBuffer = new wF, this._transports = Fd, this._state = 0, this._start()
        }
        addItem(dd) {
          return 0 === this._state && (this._itemBuffer.addItem(dd), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = qO(), this._startTimeMono = HO())
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
          const dd = qO(),
            Od = HO() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((dd => {
            if (function(dd, Od) {
                return (null === Od || void 0 === Od ? void 0 : Od(dd)) || "measurement" === dd.type && "web-vitals" === dd.payload.type
              }(dd, this.trackUserActionsExcludeItem)) return void this._transports.execute(dd);
            const Od = dm(dm({}, dd), {}, {
              payload: dm(dm({}, dd.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Od)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", dm({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: dd.toString(),
            userActionDuration: Od.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, nO(this.attributes)), void 0, {
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
    const EF = new gm;

    function JF(dd, Od) {
      return !!dd && (0 === (null === dd || void 0 === dd ? void 0 : dd.getState()) && (dd.addItem(Od), !0))
    }
    var UF = class extends Wm {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = Fm
        }
        initialize() {
          const {
            processUserEvent: dd,
            processUserActionStarted: Od
          } = pF(Hd, (dd => this.logWarn(dd)));
          this._processUserEvent = dd, this._processKeydown = Od => {
            [" ", "Enter"].includes(Od.key) && dd(Od)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = EF.subscribe((dd => {
            let {
              type: md,
              userAction: Wd,
              initialActivityTimeout: Fd
            } = dd;
            "user_action_start" === md && Od(Wd, Fd)
          }))
        }
        destroy() {
          var dd;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (dd = this._userActionSub) || void 0 === dd || dd.unsubscribe()
        }
      },
      xF = class extends Wm {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = Fm, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(dd) {
          const Od = {
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
          this.api.pushEvent("securitypolicyviolation", nO(Od))
        }
      };
    var BF = class extends gm {
      constructor(dd, Od) {
        var md, Wd, Fd, Rd;
        super(), this._tracking = !1, this.eventsObservable = dd, this._options = {
          inactivityMs: null !== (md = null === Od || void 0 === Od ? void 0 : Od.inactivityMs) && void 0 !== md ? md : 100,
          drainTimeoutMs: null !== (Wd = null === Od || void 0 === Od ? void 0 : Od.drainTimeoutMs) && void 0 !== Wd ? Wd : 1e4,
          isOperationStart: null !== (Fd = null === Od || void 0 === Od ? void 0 : Od.isOperationStart) && void 0 !== Fd ? Fd : () => {},
          isOperationEnd: null !== (Rd = null === Od || void 0 === Od ? void 0 : Od.isOperationEnd) && void 0 !== Rd ? Rd : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((dd => {
          var Od;
          this._lastEventTime = HO(), null === (Od = this._currentEvents) || void 0 === Od || Od.push(dd);
          const md = this._options.isOperationStart(dd);
          var Wd;
          md && (null === (Wd = this._activeOperations) || void 0 === Wd || Wd.set(md, !0));
          const Fd = this._options.isOperationEnd(dd);
          var Rd;
          Fd && (null === (Rd = this._activeOperations) || void 0 === Rd || Rd.delete(Fd));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = HO(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let dd;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), dd = this.hasActiveOperations() ? HO() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: dd
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = SF(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = SF(this._drainTid, (() => {
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

    function SF(dd, Od, md) {
      return dd && clearTimeout(dd), dd = setTimeout((() => {
        Od()
      }), md)
    }
    let sF;
    const uF = new Set,
      VF = new Map;
    let iF, AF, rF, GF, nF, LF, PF, zF, cF = !1;
    var jF = class extends Wm {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = Fm
      }
      initialize() {
        const dd = qF(),
          Od = XF(),
          md = function() {
            function dd(dd, Od) {
              const md = null !== Od && void 0 !== Od ? Od : location.href;
              md !== AF && (iF.notify({
                type: "url-change",
                from: AF,
                to: md,
                trigger: dd
              }), AF = md)
            }
            if (iF || (iF = new gm, AF = location.href), !cF)
              if ("navigation" in window && "NavigateEvent" in window) {
                PF = Od => {
                  try {
                    const md = null === Od || void 0 === Od ? void 0 : Od.destination;
                    (null === md || void 0 === md ? void 0 : md.sameDocument) && "string" === typeof md.url && dd("navigate", md.url)
                  } catch (md) {}
                }, window.navigation.addEventListener("navigate", PF);
                const Od = window.NavigateEvent;
                Od && Od.prototype && "function" === typeof Od.prototype.intercept && (zF || (zF = Od.prototype.intercept), Od.prototype.intercept = function(Od) {
                  try {
                    const Od = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      md = null === this || void 0 === this ? void 0 : this.destination;
                    Od && md && !1 === md.sameDocument && "string" === typeof md.url && dd("navigate-intercept", md.url)
                  } catch (md) {}
                  return zF.call(this, Od)
                }), cF = !0
              } else rF || (rF = window.history.pushState), window.history.pushState = function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                const Fd = rF.apply(window.history, md);
                return dd("pushState"), Fd
              }, GF || (GF = window.history.replaceState), window.history.replaceState = function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                const Fd = GF.apply(window.history, md);
                return dd("replaceState"), Fd
              }, nF = () => dd("popstate"), LF = () => dd("hashchange"), window.addEventListener("popstate", nF), window.addEventListener("hashchange", LF), cF = !0;
            return iF
          }(),
          Wd = (Fd = ["pointerdown", "keydown"], sF || (sF = new gm), Fd.forEach((dd => {
            if (!uF.has(dd)) {
              const Od = () => {
                sF.notify({
                  type: "interaction",
                  name: dd
                })
              };
              window.addEventListener(dd, Od), uF.add(dd), VF.set(dd, Od)
            }
          })), sF);
        var Fd;
        const Rd = new BF((new gm).merge(dd, Od, md), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: dd => function(dd) {
            return dd.type === pm
          }(dd) ? dd.request.requestId : void 0,
          isOperationEnd: dd => function(dd) {
            return dd.type === Ym
          }(dd) ? dd.request.requestId : void 0
        });
        Rd.filter((dd => "tracking-ended" === dd.message)).subscribe((dd => {
          var Od, md;
          if ((null === (Od = dd.events) || void 0 === Od ? void 0 : Od.some((dd => "url-change" === dd.type))) && (null === (md = dd.events) || void 0 === md ? void 0 : md.some((dd => "dom-mutation" === dd.type)))) {
            var Wd;
            const Od = null === (Wd = dd.events) || void 0 === Wd ? void 0 : Wd.find((dd => "url-change" === dd.type));
            Hd.api.pushEvent("faro.navigation", {
              fromUrl: null === Od || void 0 === Od ? void 0 : Od.from,
              toUrl: null === Od || void 0 === Od ? void 0 : Od.to,
              sameDocument: String(!0),
              duration: dd.duration
            })
          }
        })), Wd.subscribe((() => {
          Rd.startTracking()
        }))
      }
    };

    function DF() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Od = [new UF, new Gm, new rW, new Rm, new Lm, new jF];
      return !1 !== dd.enablePerformanceInstrumentation && Od.unshift(new ZW), !1 !== dd.enableContentSecurityPolicyInstrumentation && Od.push(new xF), !1 !== dd.captureConsole && Od.push(new Am), Od
    }
    var eF = md(7629);
    let IF, lF;

    function CF() {
      const dd = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return IF === dd && lF || (lF = new eF.UAParser(dd).getResult(), IF = dd), lF
    }
    const ZF = () => {
        const {
          browser: dd,
          os: Od,
          ua: md
        } = CF(), {
          name: Wd,
          version: Fd
        } = dd, {
          name: Rd,
          version: Xd
        } = Od, Kd = navigator.language, hd = md.includes("Mobi"), vd = function() {
          if (!Wd || !Fd) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Wd && void 0 !== Wd ? Wd : nm,
            version: null !== Fd && void 0 !== Fd ? Fd : nm,
            os: `${null!==Rd&&void 0!==Rd?Rd:nm} ${null!==Xd&&void 0!==Xd?Xd:nm}`,
            userAgent: null !== md && void 0 !== md ? md : nm,
            language: null !== Kd && void 0 !== Kd ? Kd : nm,
            mobile: hd,
            brands: null !== vd && void 0 !== vd ? vd : nm,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      kF = () => {
        const {
          name: dd,
          version: Od
        } = CF().os;
        if (!dd && !Od) return {};
        const md = {};
        return dd && (md.name = dd), Od && (md.version = Od), {
          os: md
        }
      };

    function fF(dd) {
      var Od, md, Wd;
      return {
        id: null !== (Od = null === (md = Hd.config) || void 0 === md || null === (md = md.sessionTracking) || void 0 === md || null === (Wd = md.generateSessionId) || void 0 === Wd ? void 0 : Wd.call(md)) && void 0 !== Od ? Od : pO(),
        attributes: dd
      }
    }
    const MF = () => ({
      sdk: {
        name: "faro-web",
        version: Fm
      }
    });
    var dR = class extends mm {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let OR = function(dd) {
      return dd.EXCEPTION = "exception", dd.LOG = "log", dd.MEASUREMENT = "measurement", dd.TRACE = "trace", dd.EVENT = "event", dd
    }({});
    const mR = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function WR(dd, Od) {
      var md, Wd;
      if (void 0 === Od) return dd;
      if (void 0 === dd) return {
        resourceSpans: Od
      };
      const Fd = null === (md = dd.resourceSpans) || void 0 === md ? void 0 : md[0];
      if (void 0 === Fd) return dd;
      const Rd = (null === Fd || void 0 === Fd ? void 0 : Fd.scopeSpans) || [],
        Xd = (null === Od || void 0 === Od || null === (Wd = Od[0]) || void 0 === Wd ? void 0 : Wd.scopeSpans) || [];
      return dm(dm({}, dd), {}, {
        resourceSpans: [dm(dm({}, Fd), {}, {
          scopeSpans: [...Rd, ...Xd]
        })]
      })
    }

    function FR(dd) {
      let Od = {
        meta: {}
      };
      return void 0 !== dd[0] && (Od.meta = dd[0].meta), dd.forEach((dd => {
        switch (dd.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const md = mR[dd.type],
              Wd = Od[md];
            Od = dm(dm({}, Od), {}, {
              [md]: void 0 === Wd ? [dd.payload] : [...Wd, dd.payload]
            });
            break
          }
          case "trace":
            Od = dm(dm({}, Od), {}, {
              traces: WR(Od.traces, dd.payload.resourceSpans)
            })
        }
      })), Od
    }
    var RR = class extends dR {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = dd, this.name = "@grafana/faro-web-sdk:transport-console", this.version = Fm
      }
      send(dd) {
        var Od;
        return this.unpatchedConsole[null !== (Od = this.options.level) && void 0 !== Od ? Od : wm.DEBUG]("New event", FR([dd]))
      }
    };
    const XR = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      KR = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      hR = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      vR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      QR = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      tR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function oR(dd) {
      let {
        weekday: Od,
        day: md,
        month: Wd,
        year: Fd,
        hour: Rd,
        minute: Xd,
        second: Kd
      } = dd;
      if (Fd < 1900 || md < 1 || Rd > 23 || Xd > 59 || Kd > 60) return;
      const hd = 60 === Kd,
        vd = new Date(0);
      return vd.setUTCFullYear(Fd, Wd, md), vd.setUTCHours(Rd, Xd, hd ? 59 : Kd, 0), vd.getUTCDay() === Od && vd.getUTCDate() === md && vd.getUTCMonth() === Wd && vd.getUTCFullYear() === Fd && vd.getUTCHours() === Rd && vd.getUTCMinutes() === Xd && vd.getUTCSeconds() === (hd ? 59 : Kd) ? vd.getTime() + (hd ? 1e3 : 0) : void 0
    }
    var NR = class {
      constructor(dd) {
        this.options = dd, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var dd = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Od = this.sequence++;
        let md = !1;
        return {
          deliver: function() {
            var md = lW((function*(md) {
              const Wd = dd.options.getNow();
              let Fd, Rd = 0;
              for (;;) {
                var Xd, Kd, hd;
                const vd = dd.options.retry.maxAttempts - Rd,
                  Qd = yield dd.runAttempt((() => md(vd, dd.unloading)), Rd > 0);
                if (Rd += Qd.attemptsMade, "success" === Qd.kind) return {
                  kind: "success",
                  attempts: Rd,
                  elapsedTimeMs: dd.options.getNow() - Wd
                };
                if (Fd = Qd.failure, "terminal" === Qd.kind || dd.unloading) return {
                  kind: "terminal",
                  attempts: Rd,
                  elapsedTimeMs: dd.options.getNow() - Wd,
                  failure: Fd
                };
                if (Rd >= dd.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Rd,
                  elapsedTimeMs: dd.options.getNow() - Wd,
                  failure: Fd,
                  reason: "retries-exhausted"
                };
                if (null != Qd.retryAfterMs && Qd.retryAfterMs > dd.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Rd,
                  elapsedTimeMs: dd.options.getNow() - Wd,
                  failure: Fd,
                  reason: "retry-after-too-long"
                };
                const td = Math.min(null !== (Xd = Qd.retryAfterMs) && void 0 !== Xd ? Xd : dd.options.retry.initialBackoffMs * Math.pow(dd.options.retry.backoffMultiplier, Rd - 1), dd.options.retry.maxBackoffMs);
                if (null === (Kd = (hd = dd.options).onRetry) || void 0 === Kd || Kd.call(hd, td, Rd + 1), yield dd.waitForTurn(Od, td)) {
                  const Od = dd.options.retry.maxAttempts - Rd,
                    Fd = yield dd.runAttempt((() => md(Od, !0)));
                  return Rd += Fd.attemptsMade, {
                    kind: "success" === Fd.kind ? "success" : "terminal",
                    attempts: Rd,
                    elapsedTimeMs: dd.options.getNow() - Wd,
                    failure: "success" === Fd.kind ? void 0 : Fd.failure
                  }
                }
              }
            }));
            return function(dd) {
              return md.apply(this, arguments)
            }
          }(),
          release: () => {
            md || (md = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const dd = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Od of dd) Od.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((md, Wd) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Od = () => {
                this.inProgress--, this.runNextAttempt()
              };
              dd().then((dd => {
                Od(), md(dd)
              }), (dd => {
                Od(), Wd(dd)
              }))
            },
            isRedelivery: Od
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const dd = this.options.getNow(),
            Od = this.attemptQueue.findIndex((Od => {
              let {
                isRedelivery: md
              } = Od;
              return this.unloading || !md || dd >= this.nextSendAt
            }));
          if (Od < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - dd)));
          const [md] = this.attemptQueue.splice(Od, 1);
          md.isRedelivery && !this.unloading && (this.nextSendAt = dd + 1), md.run()
        }
      }
      waitForTurn(dd, Od) {
        const md = Math.min(Od * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Od => {
          this.waiting.push({
            sequence: dd,
            readyAt: this.options.getNow() + md,
            resolve: Od
          }), this.waiting.sort(((dd, Od) => dd.readyAt === Od.readyAt ? dd.sequence - Od.sequence : dd.readyAt - Od.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const dd = this.waiting[0],
          Od = dd.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Od = this.waiting.indexOf(dd);
          Od >= 0 && this.waiting.splice(Od, 1), dd.resolve(!1), this.scheduleNext()
        }), Math.max(0, Od - this.options.getNow()))
      }
    };

    function qR(dd, Od) {
      if (null == dd) return {};
      var md, Wd, Fd = function(dd, Od) {
        if (null == dd) return {};
        var md = {};
        for (var Wd in dd)
          if ({}.hasOwnProperty.call(dd, Wd)) {
            if (Od.includes(Wd)) continue;
            md[Wd] = dd[Wd]
          } return md
      }(dd, Od);
      if (Object.getOwnPropertySymbols) {
        var Rd = Object.getOwnPropertySymbols(dd);
        for (Wd = 0; Wd < Rd.length; Wd++) md = Rd[Wd], Od.includes(md) || {}.propertyIsEnumerable.call(dd, md) && (Fd[md] = dd[md])
      }
      return Fd
    }

    function HR(dd) {
      const {
        size: Od,
        concurrency: md
      } = dd, Wd = [];
      let Fd = 0;
      const Rd = () => {
        if (Fd < md && Wd.length) {
          const {
            producer: dd,
            resolve: Od,
            reject: md
          } = Wd.shift();
          Fd++, dd().then((dd => {
            Fd--, Rd(), Od(dd)
          }), (dd => {
            Fd--, Rd(), md(dd)
          }))
        }
      };
      return {
        add: dd => {
          if (Wd.length + Fd >= Od) throw new Error("Task buffer full");
          return new Promise(((Od, md) => {
            Wd.push({
              producer: dd,
              resolve: Od,
              reject: md
            }), Rd()
          }))
        }
      }
    }
    const yR = ["headers"],
      bR = ["keepalive", "signal"],
      TR = new Set([408, 425, 429, 500, 502, 503, 504]),
      pR = new Set([429, 503]);
    let YR = 0,
      gR = 0;
    var wR = class extends Error {};
    var aR = class extends dR {
      constructor(dd) {
        var Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd;
        super(), this.options = dd, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = Fm, this.pendingCustomSends = 0, this.getNow = null !== (Od = dd.getNow) && void 0 !== Od ? Od : Date.now, this.requestTimeoutMs = null !== (md = dd.requestTimeoutMs) && void 0 !== md ? md : 1e4, this.compressionEnabled = null !== (Wd = dd.requestCompression) && void 0 !== Wd && Wd && "undefined" !== typeof CompressionStream, dd.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new NR({
          bufferSize: null !== (Fd = dd.bufferSize) && void 0 !== Fd ? Fd : 30,
          concurrency: null !== (Rd = dd.concurrency) && void 0 !== Rd ? Rd : 5,
          retry: {
            maxAttempts: null !== (Xd = null === (Kd = dd.retry) || void 0 === Kd ? void 0 : Kd.maxAttempts) && void 0 !== Xd ? Xd : 3,
            initialBackoffMs: null !== (hd = null !== (vd = null === (Qd = dd.retry) || void 0 === Qd ? void 0 : Qd.initialBackoffMs) && void 0 !== vd ? vd : dd.defaultRateLimitBackoffMs) && void 0 !== hd ? hd : 1e3,
            maxBackoffMs: null !== (td = null === (od = dd.retry) || void 0 === od ? void 0 : od.maxBackoffMs) && void 0 !== td ? td : 3e4,
            backoffMultiplier: null !== (Nd = null === (qd = dd.retry) || void 0 === qd ? void 0 : qd.backoffMultiplier) && void 0 !== Nd ? Nd : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Hd = dd.getRandom) && void 0 !== Hd ? Hd : Math.random,
          onRetry: (dd, Od) => {
            this.logDebug(`Retrying failed request after ${dd}ms. Attempt ${Od}.`)
          }
        }), this.customPromiseBuffer = HR({
          size: null !== (yd = dd.bufferSize) && void 0 !== yd ? yd : 30,
          concurrency: null !== (bd = dd.concurrency) && void 0 !== bd ? bd : 5
        }), this.defaultPromiseBuffer = {
          add: dd => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(dd);
            const Od = this.deliveryQueue.reserve();
            if (!Od) throw new Error("Task buffer full");
            return this.runBufferedTask(Od, dd)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (dd => {
          dd.persisted && this.deliveryQueue.resume()
        })))
      }
      send(dd) {
        var Od = this;
        return lW((function*() {
          const md = Od.promiseBuffer;
          if (md !== Od.defaultPromiseBuffer || md.add !== Od.defaultBufferAdd) {
            Od.pendingCustomSends++;
            try {
              yield md.add((() => Od.deliver(dd)))
            } catch (Wd) {
              Od.logError("Permanent delivery failure", {
                error: Wd,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Od.pendingCustomSends--
            }
          } else yield Od.deliver(dd)
        }))()
      }
      runBufferedTask(dd, Od) {
        return lW((function*() {
          let md;
          try {
            return yield dd.deliver(lW((function*() {
              return md = yield Od(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), md
          } finally {
            dd.release()
          }
        }))()
      }
      deliver(dd) {
        var Od = this;
        return lW((function*() {
          const md = Od.deliveryQueue.reserve();
          if (md) try {
            const Wd = yield Od.prepareRequest(dd), Fd = yield md.deliver(((dd, md) => Od.performAttempt(Wd, dd, md)));
            "terminal" === Fd.kind && Od.logError("retries-exhausted" === Fd.reason ? "Delivery retries exhausted" : "Permanent delivery failure", oO(oO({}, Fd.failure), {}, {
              reason: Fd.reason,
              attempts: Fd.attempts,
              elapsedTimeMs: Fd.elapsedTimeMs
            }))
          } catch (Wd) {
            Od.logError("Permanent delivery failure", {
              error: Wd,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            md.release()
          } else Od.logError("Permanent delivery failure", {
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
        var Od = this;
        return lW((function*() {
          var md, Wd;
          const Fd = FR(dd),
            Rd = null === (md = Fd.meta.session) || void 0 === md ? void 0 : md.id,
            Xd = JSON.stringify(Fd),
            Kd = null !== (Wd = Od.options.requestOptions) && void 0 !== Wd ? Wd : {},
            {
              headers: hd = {}
            } = Kd,
            vd = qR(Kd, yR),
            {
              keepalive: Qd,
              signal: td
            } = vd,
            od = qR(vd, bR),
            Nd = {};
          for (const [dd, Od] of Object.entries(hd)) Nd[dd] = "function" === typeof Od ? yield Od(): Od;
          let qd = Xd,
            Hd = function(dd) {
              return "undefined" === typeof TextEncoder ? dd.length : (new TextEncoder).encode(dd).byteLength
            }(Xd);
          const yd = {};
          return Od.compressionEnabled && (qd = yield Od.compress(Xd), Hd = qd.size, yd["Content-Encoding"] = "gzip"), {
            bodySize: Hd,
            sessionId: Rd,
            requestInit: oO({
              method: "POST",
              headers: oO(oO(oO(oO(oO({
                "Content-Type": "application/json"
              }, yd), Nd), Od.options.apiKey ? {
                "x-api-key": Od.options.apiKey
              } : {}), Rd ? {
                "x-faro-session-id": Rd
              } : {}), {}, {
                "Idempotency-Key": pO(20)
              }),
              body: qd
            }, od)
          }
        }))()
      }
      performAttempt(dd, Od, md) {
        var Wd = this;
        return lW((function*() {
          var Fd;
          const Rd = null === (Fd = Wd.options.requestOptions) || void 0 === Fd ? void 0 : Fd.signal;
          if (null === Rd || void 0 === Rd ? void 0 : Rd.aborted) return {
            kind: "terminal",
            failure: {
              error: Rd.reason
            },
            attemptsMade: 0
          };
          let Xd = 0;
          try {
            var Kd;
            const Fd = yield Wd.fetchWithKeepaliveFallback(dd.requestInit, dd.bodySize, !!md || (null === (Kd = Wd.options.requestOptions) || void 0 === Kd ? void 0 : Kd.keepalive), Od, (() => Xd++));
            if (Wd.handleResponse(Fd, dd.sessionId), Fd.status >= 200 && Fd.status < 300) return {
              kind: "success",
              attemptsMade: Xd
            };
            const Rd = {
              status: Fd.status
            };
            return !TR.has(Fd.status) || md ? {
              kind: "terminal",
              failure: Rd,
              attemptsMade: Xd
            } : {
              kind: "retry",
              failure: Rd,
              attemptsMade: Xd,
              retryAfterMs: pR.has(Fd.status) ? Wd.getRetryAfterDelayMs(Fd) : void 0
            }
          } catch (hd) {
            const dd = {
              error: hd
            };
            return (null === Rd || void 0 === Rd ? void 0 : Rd.aborted) || !Wd.isFetchNetworkError(hd) || md ? {
              kind: "terminal",
              failure: dd,
              attemptsMade: Xd
            } : {
              kind: "retry",
              failure: dd,
              attemptsMade: Xd
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(dd, Od, md, Wd, Fd) {
        var Rd = this;
        return lW((function*() {
          const Xd = Rd.getNow(),
            Kd = Rd.reserveKeepalive(Od, md);
          try {
            return yield Rd.fetchWithTimeout(oO(oO({}, dd), {}, {
              keepalive: Kd.keepalive
            }), Rd.requestTimeoutMs, Fd)
          } catch (vd) {
            var hd;
            if (Kd.keepalive && Wd > 1 && Rd.isFetchNetworkError(vd) && !(vd instanceof wR) && !(null === (hd = Rd.options.requestOptions) || void 0 === hd || null === (hd = hd.signal) || void 0 === hd ? void 0 : hd.aborted)) {
              Rd.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Od = Rd.requestTimeoutMs - (Rd.getNow() - Xd);
              return Rd.fetchWithTimeout(oO(oO({}, dd), {}, {
                keepalive: !1
              }), Od, Fd)
            }
            throw vd
          } finally {
            Kd.release()
          }
        }))()
      }
      fetchWithTimeout(dd, Od, md) {
        var Wd = this;
        return lW((function*() {
          var Fd;
          const Rd = null === (Fd = Wd.options.requestOptions) || void 0 === Fd ? void 0 : Fd.signal;
          if (Wd.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return md(), fetch(Wd.options.url, oO(oO({}, dd), {}, {
            signal: Rd
          }));
          if (Od <= 0) throw new wR("Request timed out");
          const Xd = new AbortController,
            Kd = () => Xd.abort(null === Rd || void 0 === Rd ? void 0 : Rd.reason);
          null === Rd || void 0 === Rd || Rd.addEventListener("abort", Kd, {
            once: !0
          });
          let hd = !1;
          const vd = setTimeout((() => {
            hd = !0, Xd.abort()
          }), Od);
          try {
            return md(), yield fetch(Wd.options.url, oO(oO({}, dd), {}, {
              signal: Xd.signal
            }))
          } catch (Qd) {
            if (hd && !(null === Rd || void 0 === Rd ? void 0 : Rd.aborted)) throw new wR("Request timed out");
            throw Qd
          } finally {
            clearTimeout(vd), null === Rd || void 0 === Rd || Rd.removeEventListener("abort", Kd)
          }
        }))()
      }
      getRetryAfterDelayMs(dd) {
        const Od = dd.headers.get("Retry-After");
        if (!Od) return;
        if (/^\d+$/.test(Od)) {
          const dd = 1e3 * Number(Od);
          return Number.isFinite(dd) ? dd : Number.POSITIVE_INFINITY
        }
        const md = this.getNow(),
          Wd = function(dd, Od) {
            const md = XR.exec(dd);
            if (md) {
              const [, dd, Od, Wd, Fd, Rd, Xd, Kd] = md;
              return oR({
                weekday: vR.indexOf(dd),
                day: Number(Od),
                month: tR.indexOf(Wd),
                year: Number(Fd),
                hour: Number(Rd),
                minute: Number(Xd),
                second: Number(Kd)
              })
            }
            const Wd = KR.exec(dd);
            if (Wd) {
              const [, dd, md, Xd, Kd, hd, vd, Qd] = Wd, td = new Date(Od);
              if (Number.isNaN(td.getTime())) return;
              const od = td.getUTCFullYear();
              let Nd = 100 * Math.floor(od / 100) + Number(Kd);
              Nd < od && (Nd += 100);
              const qd = tR.indexOf(Xd),
                Hd = {
                  month: qd,
                  day: Number(md),
                  hour: Number(hd),
                  minute: Number(vd),
                  second: Number(Qd),
                  millisecond: 0
                },
                yd = {
                  month: td.getUTCMonth(),
                  day: td.getUTCDate(),
                  hour: td.getUTCHours(),
                  minute: td.getUTCMinutes(),
                  second: td.getUTCSeconds(),
                  millisecond: td.getUTCMilliseconds()
                };
              return (Nd > od + 50 || Nd === od + 50 && (Rd = yd, ((Fd = Hd).month - Rd.month || Fd.day - Rd.day || Fd.hour - Rd.hour || Fd.minute - Rd.minute || Fd.second - Rd.second || Fd.millisecond - Rd.millisecond) > 0)) && (Nd -= 100), oR({
                weekday: QR.indexOf(dd),
                day: Number(md),
                month: qd,
                year: Nd,
                hour: Number(hd),
                minute: Number(vd),
                second: Number(Qd)
              })
            }
            var Fd, Rd;
            const Xd = hR.exec(dd);
            if (!Xd) return;
            const [, Kd, hd, vd, Qd, td, od, Nd, qd] = Xd;
            return oR({
              weekday: vR.indexOf(Kd),
              day: Number(null !== vd && void 0 !== vd ? vd : Qd),
              month: tR.indexOf(hd),
              year: Number(qd),
              hour: Number(td),
              minute: Number(od),
              second: Number(Nd)
            })
          }(Od, md);
        return null == Wd ? void 0 : Math.max(0, Wd - md)
      }
      reserveKeepalive(dd, Od) {
        if (!1 === Od || dd > 6e4 || YR + dd > 6e4 || gR >= 9) return {
          keepalive: !1,
          release: eO
        };
        YR += dd, gR++;
        let md = !1;
        return {
          keepalive: !0,
          release: () => {
            md || (md = !0, YR -= dd, gR--)
          }
        }
      }
      handleResponse(dd, Od) {
        202 === dd.status && "invalid" === dd.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Od), dd.text().catch(eO)
      }
      isFetchNetworkError(dd) {
        return dd instanceof TypeError || dd instanceof wR || dd instanceof DOMException && "AbortError" === dd.name
      }
      compress(dd) {
        return lW((function*() {
          const Od = [],
            md = new ReadableStream({
              start(Od) {
                Od.enqueue((new TextEncoder).encode(dd)), Od.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: dd,
              value: Wd
            } = yield md.read();
            if (dd) return new Blob(Od);
            Od.push(Wd)
          }
        }))()
      }
      extendFaroSession(dd, Od, md) {
        var Wd, Fd;
        const Rd = dd.sessionTracking;
        if (!(null === Rd || void 0 === Rd ? void 0 : Rd.enabled)) return void Od("Session expired.");
        const {
          fetchUserSession: Xd,
          storeUserSession: Kd
        } = DO(Rd), hd = null === (Wd = this.metas.value.session) || void 0 === Wd ? void 0 : Wd.id, vd = null === (Fd = Xd()) || void 0 === Fd ? void 0 : Fd.sessionId;
        md && md === hd && md === vd ? (uO({
          fetchUserSession: Xd,
          storeUserSession: Kd
        })({
          forceSessionExtend: !0
        }), Od("Session expired; created new session.")) : Od("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const ER = () => {
      const dd = window.k6;
      return {
        k6: oO({
          isK6Browser: !0
        }, (null === dd || void 0 === dd ? void 0 : dd.testRunId) && {
          testRunId: null === dd || void 0 === dd ? void 0 : dd.testRunId
        })
      }
    };
    let JR, UR;

    function xR() {
      let {
        generatePageId: dd,
        initialPageMeta: Od
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const md = location.href;
        return Sd(dd) && JR !== md && (JR = md, UR = dd(location)), {
          page: oO(oO({
            url: md
          }, UR ? {
            id: UR
          } : {}), Od)
        }
      }
    }

    function BR() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Om,
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const md = lO;
      return Od > 0 && (md.error = Od >= 1 ? function() {
        for (var Od = arguments.length, Wd = new Array(Od), Fd = 0; Fd < Od; Fd++) Wd[Fd] = arguments[Fd];
        dd.error(`${md.prefix}\n`, ...Wd)
      } : eO, md.warn = Od >= 2 ? function() {
        for (var Od = arguments.length, Wd = new Array(Od), Fd = 0; Fd < Od; Fd++) Wd[Fd] = arguments[Fd];
        dd.warn(`${md.prefix}\n`, ...Wd)
      } : eO, md.info = Od >= 3 ? function() {
        for (var Od = arguments.length, Wd = new Array(Od), Fd = 0; Fd < Od; Fd++) Wd[Fd] = arguments[Fd];
        dd.info(`${md.prefix}\n`, ...Wd)
      } : eO, md.debug = Od >= 4 ? function() {
        for (var Od = arguments.length, Wd = new Array(Od), Fd = 0; Fd < Od; Fd++) Wd[Fd] = arguments[Fd];
        dd.debug(`${md.prefix}\n`, ...Wd)
      } : eO), md
    }
    const SR = "faro",
      sR = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      uR = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function VR(dd) {
      var Od, md, Fd, Rd, Xd, Kd;
      const hd = [],
        Qd = BR(dd.unpatchedConsole, dd.internalLoggerLevel);
      dd.transports ? ((dd.url || dd.apiKey) && Qd.error('if "transports" is defined, "url" and "apiKey" should not be defined'), hd.push(...dd.transports)) : dd.url ? hd.push(new aR({
        url: dd.url,
        apiKey: dd.apiKey,
        requestCompression: dd.requestCompression
      })) : Qd.error('either "url" or "transports" must be defined');
      const {
        dedupe: td = !0,
        eventDomain: od = Wd,
        globalObjectKey: Nd = SR,
        instrumentations: qd = DF(),
        internalLoggerLevel: Hd = CO,
        isolate: yd = !1,
        logArgsSerializer: bd = im,
        metas: Td = AR(dd),
        paused: pd = !1,
        preventGlobalExposure: Yd = !1,
        unpatchedConsole: gd = Om,
        url: wd,
        experimental: Ed
      } = dd, Jd = qR(dd, uR), Ud = null !== (Od = null === Ed || void 0 === Ed ? void 0 : Ed.trackNavigation) && void 0 !== Od && Od, xd = {
        dataAttributeName: dF(null !== (md = null === (Fd = dd.userActionsInstrumentation) || void 0 === Fd ? void 0 : Fd.dataAttributeName) && void 0 !== md ? md : kW),
        excludeItem: null === (Rd = dd.userActionsInstrumentation) || void 0 === Rd ? void 0 : Rd.excludeItem,
        initialActivityTimeout: OF(null === (Xd = dd.userActionsInstrumentation) || void 0 === Xd ? void 0 : Xd.initialActivityTimeout, 100, (dd => Qd.warn(dd)))
      };
      return oO(oO({}, Jd), {}, {
        batching: oO(oO({}, sR), dd.batching),
        dedupe: td,
        globalObjectKey: Nd,
        instrumentations: iR(qd, dd),
        internalLoggerLevel: Hd,
        isolate: yd,
        logArgsSerializer: bd,
        metas: Td,
        parseStacktrace: Tm,
        paused: pd,
        preventGlobalExposure: Yd,
        transports: hd,
        unpatchedConsole: gd,
        eventDomain: od,
        ignoreUrls: [...null !== (Kd = dd.ignoreUrls) && void 0 !== Kd ? Kd : [], ...wd ? [wd] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: oO(oO(oO({}, vd), dd.sessionTracking), rR({
          trackGeolocation: dd.trackGeolocation,
          sessionTracking: dd.sessionTracking
        })),
        userActionsInstrumentation: xd,
        experimental: {
          trackNavigation: Ud
        }
      })
    }

    function iR(dd, Od) {
      let {
        experimental: md
      } = Od;
      var Wd;
      const Fd = null !== (Wd = null === md || void 0 === md ? void 0 : md.trackNavigation) && void 0 !== Wd && Wd;
      return dd.filter((dd => !("@grafana/faro-web-sdk:instrumentation-navigation" === dd.name && !Fd)))
    }

    function AR(dd) {
      var Od, md, Wd;
      const {
        page: Fd,
        generatePageId: Rd
      } = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.pageTracking) && void 0 !== Od ? Od : {}, Xd = [ZF, kF, xR({
        generatePageId: Rd,
        initialPageMeta: Fd
      }), ...null !== (md = dd.metas) && void 0 !== md ? md : [], MF];
      return Bd(null === (Wd = window) || void 0 === Wd ? void 0 : Wd.k6) ? [...Xd, ER] : Xd
    }

    function rR(dd) {
      let {
        trackGeolocation: Od,
        sessionTracking: md
      } = dd;
      var Wd;
      const Fd = {};
      return Ud(Od) && (Fd.geoLocationTrackingEnabled = Od), Cd(Fd) ? {} : {
        session: oO(oO({}, null !== (Wd = null === md || void 0 === md ? void 0 : md.session) && void 0 !== Wd ? Wd : {}), {}, {
          overrides: Fd
        })
      }
    }
    const GR = new WeakSet;

    function nR(dd) {
      return GR.add(dd), dd
    }

    function LR(dd, Od) {
      if (dd.capture) return nR(dd.capture(Od));
      const md = nR(dd.value);
      return null === Od || void 0 === Od || Od(), md
    }

    function PR(dd) {
      const Od = `__faroBundleId_${dd}`,
        md = null === Qd || void 0 === Qd ? void 0 : Qd[Od];
      if ("string" === typeof md && "" !== md) return md;
      const Wd = "undefined" !== typeof window ? window[Od] : void 0;
      return "string" === typeof Wd && "" !== Wd ? Wd : void 0
    }

    function zR(dd) {
      var Od, md;
      const Wd = dd.config.app.name,
        Fd = Wd ? function(dd) {
          return null === Qd || void 0 === Qd ? void 0 : Qd[`__faroGitHash_${dd}`]
        }(Wd) : void 0,
        Rd = {
          sdk: {
            version: Fm,
            name: "faro"
          },
          app: dm({
            bundleId: Wd && PR(Wd)
          }, void 0 !== Fd ? {
            gitHash: Fd
          } : {})
        },
        Xd = null === (Od = dd.config.sessionTracking) || void 0 === Od ? void 0 : Od.session;
      Xd && dd.api.setSession(Xd), dd.config.app && (Rd.app = dm(dm({}, dd.config.app), Rd.app)), dd.config.user && (Rd.user = dd.config.user), dd.config.view && (Rd.view = dd.config.view), dd.metas.add(Rd, ...null !== (md = dd.config.metas) && void 0 !== md ? md : [])
    }
    var cR = class {
      constructor(dd, Od) {
        var md, Wd;
        this.signalBuffer = [], this.itemLimit = null !== (md = null === Od || void 0 === Od ? void 0 : Od.itemLimit) && void 0 !== md ? md : 50, this.sendTimeout = null !== (Wd = null === Od || void 0 === Od ? void 0 : Od.sendTimeout) && void 0 !== Wd ? Wd : 250, this.paused = (null === Od || void 0 === Od ? void 0 : Od.paused) || !1, this.sendFn = dd, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const Od = new Map;
        return dd.forEach((dd => {
          const md = JSON.stringify(dd.meta);
          let Wd = Od.get(md);
          Wd = void 0 === Wd ? [dd] : [...Wd, dd], Od.set(md, Wd)
        })), Array.from(Od.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const dd = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(dd).forEach(this.sendFn)
        } catch (Od) {
          throw this.signalBuffer = [...dd, ...this.signalBuffer], this.trimBufferToLimit(), Od
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function jR(dd, Od, md, Wd) {
      var Fd;
      Od.debug("Initializing transports");
      const Rd = [];
      let Xd = [];
      const Kd = dd => {
        let Od = dd;
        for (const Wd of Xd) {
          const dd = Od.map(Wd).filter(Boolean);
          if (0 === dd.length) return [];
          Od = DR(dd, md)
        }
        return Od
      };
      let hd;
      (null === (Fd = md.batching) || void 0 === Fd ? void 0 : Fd.enabled) && (hd = new cR((dd => {
        const md = Kd(dd);
        if (0 !== md.length)
          for (const Wd of Rd) Od.debug(`Transporting item using ${Wd.name}\n`, md), Wd.isBatched() && Wd.send(md)
      }), {
        sendTimeout: md.batching.sendTimeout,
        itemLimit: md.batching.itemLimit,
        paused: md.paused
      }));
      return {
        add: function() {
          Od.debug("Adding transports");
          for (var Fd = arguments.length, Xd = new Array(Fd), Kd = 0; Kd < Fd; Kd++) Xd[Kd] = arguments[Kd];
          Xd.forEach((Fd => {
            Od.debug(`Adding "${Fd.name}" transport`), Rd.some((dd => dd === Fd)) ? Od.warn(`Transport ${Fd.name} is already added`) : (Fd.unpatchedConsole = dd, Fd.internalLogger = Od, Fd.config = md, Fd.metas = Wd, Rd.push(Fd))
          }))
        },
        addBeforeSendHooks: function() {
          Od.debug("Adding beforeSendHooks\n", Xd);
          for (var dd = arguments.length, md = new Array(dd), Wd = 0; Wd < dd; Wd++) md[Wd] = arguments[Wd];
          md.forEach((dd => {
            dd && Xd.push(dd)
          }))
        },
        getBeforeSendHooks: () => [...Xd],
        execute: dd => {
          var Fd;
          if (!md.paused && cO(Wd).shouldCapture()) {
            if (td = dd.meta, !GR.has(td)) {
              var Xd, vd, Qd;
              const Od = null === (Xd = Wd.value.session) || void 0 === Xd ? void 0 : Xd.id,
                Fd = LR(Wd);
              if (md.paused) return;
              const Rd = dm({}, dd.meta);
              (null === (vd = Rd.session) || void 0 === vd ? void 0 : vd.id) === Od && (null === (Qd = Fd.session) || void 0 === Qd ? void 0 : Qd.id) !== Od && (void 0 === Fd.session ? delete Rd.session : Rd.session = Fd.session), dd = dm(dm({}, dd), {}, {
                meta: nR(Rd)
              })
            }
            var td;
            (null === (Fd = md.batching) || void 0 === Fd ? void 0 : Fd.enabled) && (null === hd || void 0 === hd || hd.addItem(dd)), (dd => {
              var Wd;
              if ((null === (Wd = md.batching) || void 0 === Wd ? void 0 : Wd.enabled) && Rd.every((dd => dd.isBatched()))) return;
              const [Fd] = Kd([dd]);
              if (void 0 !== Fd)
                for (const Kd of Rd) {
                  var Xd;
                  Od.debug(`Transporting item using ${Kd.name}\n`, Fd), Kd.isBatched() ? (null === (Xd = md.batching) || void 0 === Xd ? void 0 : Xd.enabled) || Kd.send([Fd]) : Kd.send(Fd)
                }
            })(dd)
          }
        },
        isPaused: () => md.paused,
        pause: () => {
          Od.debug("Pausing transports"), null === hd || void 0 === hd || hd.pause(), md.paused = !0
        },
        remove: function() {
          Od.debug("Removing transports");
          for (var dd = arguments.length, md = new Array(dd), Wd = 0; Wd < dd; Wd++) md[Wd] = arguments[Wd];
          md.forEach((dd => {
            Od.debug(`Removing "${dd.name}" transport`);
            const md = Rd.indexOf(dd); - 1 !== md ? Rd.splice(md, 1) : Od.warn(`Transport "${dd.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var dd = arguments.length, md = new Array(dd), Wd = 0; Wd < dd; Wd++) md[Wd] = arguments[Wd];
          Od.debug("Removing beforeSendHooks"), Xd = Xd.filter((dd => !md.includes(dd)))
        },
        get transports() {
          return [...Rd]
        },
        unpause: () => {
          Od.debug("Unpausing transports"), null === hd || void 0 === hd || hd.start(), md.paused = !1
        }
      }
    }

    function DR(dd, Od) {
      if (Od.preserveOriginalError)
        for (const md of dd) "exception" === md.type && delete md.payload.originalError;
      return dd
    }
    let eR = Om;

    function IR(dd) {
      var Od;
      return eR = null !== (Od = dd.unpatchedConsole) && void 0 !== Od ? Od : eR, eR
    }
    let lR, CR = lO;

    function ZR(dd, Od) {
      return CR = BR(dd, Od.internalLoggerLevel), CR
    }

    function kR(dd) {
      let {
        internalLogger: Od,
        config: md,
        metas: Wd,
        transports: Fd,
        tracesApi: Rd,
        userActionsApi: Xd
      } = dd;
      var Kd;
      Od.debug("Initializing exceptions API");
      let hd = null;
      lR = null !== (Kd = md.parseStacktrace) && void 0 !== Kd ? Kd : lR;
      const vd = dd => {
          Od.debug("Changing stacktrace parser"), lR = null !== dd && void 0 !== dd ? dd : lR
        },
        {
          ignoreErrors: Qd = [],
          preserveOriginalError: td
        } = md;
      return vd(md.parseStacktrace), {
        changeStacktraceParser: vd,
        getStacktraceParser: () => lR,
        pushError: function(dd) {
          let {
            skipDedupe: Kd,
            stackFrames: vd,
            type: od,
            context: Nd,
            spanContext: qd,
            timestampOverwriteMs: Hd,
            originalError: yd,
            fingerprint: bd,
            fatal: Td
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(dd, Od) {
              const {
                message: md,
                name: Wd,
                stack: Fd
              } = Od;
              return Rd = dd, Xd = md + " " + Wd + " " + Fd, Rd.some((dd => wd(dd) ? Xd.includes(dd) : !!Xd.match(dd)));
              var Rd, Xd
            }(Qd, null !== yd && void 0 !== yd ? yd : dd)) try {
            var pd, Yd;
            if (!cO(Wd).shouldCapture()) return;
            const Qd = nO(dm(dm({}, function(dd) {
                let Od = dd.cause;
                Ld(Od) ? Od = dd.cause.toString() : null !== Od && (Bd(dd.cause) || sd(dd.cause)) ? Od = GO(dd.cause) : null != Od && (Od = dd.cause.toString());
                return null == Od ? {} : {
                  cause: Od
                }
              }(null !== yd && void 0 !== yd ? yd : dd)), null !== Nd && void 0 !== Nd ? Nd : {})),
              wd = dm(dm(dm(dm({
                type: od || dd.name || "Error",
                value: dd.message,
                timestamp: Hd ? bO(Hd) : yO(),
                trace: qd ? {
                  trace_id: qd.traceId,
                  span_id: qd.spanId
                } : Rd.getTraceContext()
              }, Cd(Qd) ? {} : {
                context: Qd
              }), td ? {
                originalError: yd
              } : {}), bd ? {
                fingerprint: bd
              } : {}), void 0 !== Td ? {
                fatal: Td
              } : {});
            vd = null !== (pd = vd) && void 0 !== pd ? pd : dd.stack ? null === lR || void 0 === lR ? void 0 : lR(dd).frames : void 0, (null === vd || void 0 === vd ? void 0 : vd.length) && (wd.stacktrace = {
              frames: vd
            });
            const Ed = {
              type: wd.type,
              value: wd.value,
              stacktrace: wd.stacktrace,
              context: wd.context,
              fingerprint: wd.fingerprint,
              fatal: null !== (Yd = wd.fatal) && void 0 !== Yd && Yd
            };
            if (!Kd && md.dedupe && !gd(hd) && YO(Ed, hd)) return void Od.debug("Skipping error push because it is the same as the last one\n", wd);
            const Jd = hd,
              Ud = LR(Wd);
            if (hd !== Jd && !Kd && md.dedupe && YO(Ed, hd)) return;
            hd = Ed;
            const xd = {
              meta: Ud,
              payload: wd,
              type: "exception"
            };
            Od.debug("Pushing exception\n", xd), JF(Xd.getActiveUserAction(), xd) || Fd.execute(xd)
          } catch (Ed) {
            Od.error("Error pushing event", Ed)
          }
        }
      }
    }

    function fR(dd, Od, md, Wd, Fd) {
      Od.debug("Initializing API");
      let Rd = null;
      const Xd = function(dd) {
          let {
            transports: Od,
            internalLogger: md,
            config: Wd,
            pushEvent: Fd
          } = dd;
          var Rd;
          const Xd = null === (Rd = Wd.userActionsInstrumentation) || void 0 === Rd ? void 0 : Rd.excludeItem;
          let Kd;
          const hd = () => Kd;
          return {
            startUserAction: (dd, Wd, Rd) => {
              if (void 0 === hd()) {
                const md = new aF({
                  name: dd,
                  transports: Od,
                  attributes: Wd,
                  trigger: (null === Rd || void 0 === Rd ? void 0 : Rd.triggerName) || "faroApiCall",
                  importance: (null === Rd || void 0 === Rd ? void 0 : Rd.importance) || gF.Normal,
                  trackUserActionsExcludeItem: Xd,
                  pushEvent: Fd
                });
                return md.filter((dd => [3, 2].includes(dd))).first().subscribe((() => {
                  Kd = void 0
                })), EF.notify({
                  type: YF,
                  userAction: md,
                  initialActivityTimeout: null === Rd || void 0 === Rd ? void 0 : Rd.initialActivityTimeout
                }), Kd = md, Kd
              }
              md.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: hd
          }
        }({
          transports: Fd,
          config: md,
          internalLogger: Od,
          pushEvent: (dd, md, Wd, Fd) => {
            Rd ? Rd(dd, md, Wd, Fd) : Od.warn("pushEventImpl is not initialized. Event dropped:", {
              name: dd,
              attributes: md,
              domain: Wd,
              options: Fd
            })
          }
        }),
        Kd = function(dd, Od, md, Wd, Fd) {
          let Rd;
          return Od.debug("Initializing traces API"), {
            getOTEL: () => Rd,
            getTraceContext: () => {
              const dd = null === Rd || void 0 === Rd ? void 0 : Rd.trace.getSpanContext(Rd.context.active());
              return dd ? {
                trace_id: dd.traceId,
                span_id: dd.spanId
              } : void 0
            },
            initOTEL: (dd, md) => {
              Od.debug("Initializing OpenTelemetry"), Rd = {
                trace: dd,
                context: md
              }
            },
            isOTELInitialized: () => !!Rd,
            pushTraces: dd => {
              try {
                if (!cO(Wd).shouldCapture()) return;
                const md = {
                  type: "trace",
                  payload: dd,
                  meta: LR(Wd)
                };
                Od.debug("Pushing trace\n", md), Fd.execute(md)
              } catch (md) {
                Od.error("Error pushing trace\n", md)
              }
            }
          }
        }(0, Od, 0, Wd, Fd),
        hd = {
          unpatchedConsole: dd,
          internalLogger: Od,
          userActionsApi: Xd,
          config: md,
          metas: Wd,
          transports: Fd,
          tracesApi: Kd
        },
        vd = function(dd) {
          let {
            internalLogger: Od,
            config: md,
            metas: Wd,
            transports: Fd,
            tracesApi: Rd,
            userActionsApi: Xd
          } = dd, Kd = null;
          return {
            pushEvent: function(dd, hd, vd) {
              let {
                skipDedupe: Qd,
                spanContext: td,
                timestampOverwriteMs: od,
                customPayloadTransformer: Nd = dd => dd
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!cO(Wd).shouldCapture()) return;
                const qd = nO(hd),
                  Hd = Nd({
                    name: dd,
                    domain: null !== vd && void 0 !== vd ? vd : md.eventDomain,
                    attributes: Cd(qd) ? void 0 : qd,
                    timestamp: od ? bO(od) : yO(),
                    trace: td ? {
                      trace_id: td.traceId,
                      span_id: td.spanId
                    } : Rd.getTraceContext()
                  }),
                  yd = {
                    name: Hd.name,
                    attributes: Hd.attributes,
                    domain: Hd.domain
                  };
                if (!Qd && md.dedupe && !gd(Kd) && YO(yd, Kd)) return void Od.debug("Skipping event push because it is the same as the last one\n", Hd);
                const bd = Kd,
                  Td = LR(Wd);
                if (Kd !== bd && !Qd && md.dedupe && YO(yd, Kd)) return;
                Kd = yd;
                const pd = {
                  meta: Td,
                  payload: Hd,
                  type: "event"
                };
                Od.debug("Pushing event\n", pd), JF(Xd.getActiveUserAction(), pd) || Fd.execute(pd)
              } catch (qd) {
                Od.error("Error pushing event", qd)
              }
            }
          }
        }(hd);
      return Rd = vd.pushEvent, dm(dm(dm(dm(dm(dm(dm({}, Kd), kR(hd)), function(dd) {
        let Od, md, Wd, Fd, {
          internalLogger: Rd,
          metas: Xd
        } = dd;
        Rd.debug("Initializing meta API");
        const Kd = dd => {
            md && Xd.remove(md), md = {
              user: dd
            }, Xd.add(md)
          },
          hd = (dd, md) => {
            var Wd;
            const Fd = null === md || void 0 === md ? void 0 : md.overrides,
              Rd = Fd ? {
                overrides: dm(dm({}, null === Od || void 0 === Od || null === (Wd = Od.session) || void 0 === Wd ? void 0 : Wd.overrides), Fd)
              } : {};
            Od && Xd.remove(Od), Od = {
              session: dm(dm({}, Cd(dd) ? void 0 : dd), Rd)
            }, Xd.add(Od)
          },
          vd = (dd, Od) => {
            cO(Xd).notifySessionUpdate({
              type: "replace",
              session: dd,
              overrides: null === Od || void 0 === Od ? void 0 : Od.overrides
            }), hd(dd, Od)
          },
          Qd = () => Xd.value.session,
          td = () => Xd.value.page;
        return {
          setUser: Kd,
          resetUser: Kd,
          setSession: vd,
          resetSession: vd,
          getSession: Qd,
          setView: (dd, Od) => {
            var md;
            if ((null === Od || void 0 === Od ? void 0 : Od.overrides) && (cO(Xd).notifySessionUpdate({
                type: "overrides",
                overrides: Od.overrides
              }), hd(Qd(), {
                overrides: Od.overrides
              })), (null === Wd || void 0 === Wd || null === (md = Wd.view) || void 0 === md ? void 0 : md.name) === (null === dd || void 0 === dd ? void 0 : dd.name)) return;
            const Fd = Wd;
            Wd = {
              view: dd
            }, Xd.add(Wd), Fd && Xd.remove(Fd)
          },
          getView: () => Xd.value.view,
          setPage: dd => {
            var Od;
            const md = wd(dd) ? dm(dm({}, null !== (Od = null === Fd || void 0 === Fd ? void 0 : Fd.page) && void 0 !== Od ? Od : td()), {}, {
              id: dd
            }) : dd;
            Fd && Xd.remove(Fd), Fd = {
              page: md
            }, Xd.add(Fd)
          },
          getPage: td
        }
      }(hd)), function(dd) {
        let {
          internalLogger: Od,
          config: md,
          metas: Wd,
          transports: Fd,
          tracesApi: Rd,
          userActionsApi: Xd
        } = dd;
        var Kd;
        Od.debug("Initializing logs API");
        let hd = null;
        const vd = null !== (Kd = md.logArgsSerializer) && void 0 !== Kd ? Kd : im;
        return {
          pushLog: function(dd) {
            let {
              context: Kd,
              level: Qd,
              skipDedupe: td,
              spanContext: od,
              timestampOverwriteMs: Nd
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!cO(Wd).shouldCapture()) return;
              const qd = nO(Kd),
                Hd = {
                  message: vd(dd),
                  level: null !== Qd && void 0 !== Qd ? Qd : "log",
                  context: Cd(qd) ? void 0 : qd,
                  timestamp: Nd ? bO(Nd) : yO(),
                  trace: od ? {
                    trace_id: od.traceId,
                    span_id: od.spanId
                  } : Rd.getTraceContext()
                },
                yd = {
                  message: Hd.message,
                  level: Hd.level,
                  context: Hd.context
                };
              if (!td && md.dedupe && !gd(hd) && YO(yd, hd)) return void Od.debug("Skipping log push because it is the same as the last one\n", Hd);
              const bd = hd,
                Td = LR(Wd);
              if (hd !== bd && !td && md.dedupe && YO(yd, hd)) return;
              hd = yd;
              const pd = {
                type: "log",
                payload: Hd,
                meta: Td
              };
              Od.debug("Pushing log\n", pd), JF(Xd.getActiveUserAction(), pd) || Fd.execute(pd)
            } catch (qd) {
              Od.error("Error pushing log\n", qd)
            }
          }
        }
      }(hd)), function(dd) {
        let {
          internalLogger: Od,
          config: md,
          metas: Wd,
          transports: Fd,
          tracesApi: Rd,
          userActionsApi: Xd
        } = dd;
        Od.debug("Initializing measurements API");
        let Kd = null;
        return {
          pushMeasurement: function(dd) {
            let {
              skipDedupe: hd,
              context: vd,
              spanContext: Qd,
              timestampOverwriteMs: td
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!cO(Wd).shouldCapture()) return;
              const od = nO(vd),
                Nd = dm(dm({}, dd), {}, {
                  trace: Qd ? {
                    trace_id: Qd.traceId,
                    span_id: Qd.spanId
                  } : Rd.getTraceContext(),
                  timestamp: td ? bO(td) : yO(),
                  context: Cd(od) ? void 0 : od
                }),
                qd = {
                  type: Nd.type,
                  values: Nd.values,
                  context: Nd.context
                };
              if (!hd && md.dedupe && !gd(Kd) && YO(qd, Kd)) return void Od.debug("Skipping measurement push because it is the same as the last one\n", Nd);
              const Hd = Kd,
                yd = LR(Wd);
              if (Kd !== Hd && !hd && md.dedupe && YO(qd, Kd)) return;
              Kd = qd;
              const bd = {
                type: "measurement",
                payload: Nd,
                meta: yd
              };
              Od.debug("Pushing measurement\n", bd), JF(Xd.getActiveUserAction(), bd) || Fd.execute(bd)
            } catch (od) {
              Od.error("Error pushing measurement\n", od)
            }
          }
        }
      }(hd)), vd), Xd)
    }

    function MR(dd) {
      const Od = IR(dd),
        md = ZR(Od, dd);
      if (qd() && !dd.isolate) return void md.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      md.debug("Initializing");
      const Wd = function(dd, Od) {
          let md, Wd = [],
            Fd = [],
            Rd = [],
            Xd = 0,
            Kd = 0;
          const hd = () => Wd.reduce(((dd, Od) => Object.assign(dd, Sd(Od) ? Od() : Od)), {}),
            vd = () => {
              if (Fd.length) {
                const dd = hd();
                Fd.forEach((Od => Od(dd)))
              }
            };
          return {
            add: function() {
              for (var dd = arguments.length, md = new Array(dd), Fd = 0; Fd < dd; Fd++) md[Fd] = arguments[Fd];
              Od.debug("Adding metas\n", md), Wd.push(...md), vd()
            },
            remove: function() {
              for (var dd = arguments.length, md = new Array(dd), Fd = 0; Fd < dd; Fd++) md[Fd] = arguments[Fd];
              Od.debug("Removing metas\n", md), Wd = Wd.filter((dd => !md.includes(dd))), vd()
            },
            addListener: dd => {
              Od.debug("Adding metas listener\n", dd), Fd.push(dd)
            },
            removeListener: dd => {
              Od.debug("Removing metas listener\n", dd), Fd = Fd.filter((Od => Od !== dd))
            },
            capture: dd => {
              var Od;
              const Wd = void 0 !== md,
                Fd = null !== (Od = md) && void 0 !== Od ? Od : Rd;
              Wd || (md = Fd, Xd = 0, Kd = Fd.length);
              try {
                for (; Xd < Kd;) {
                  const dd = Fd[Xd++];
                  null === dd || void 0 === dd || dd()
                }
                const Od = nR(hd());
                return null === dd || void 0 === dd || dd(), Od
              } finally {
                Wd || (md = void 0)
              }
            },
            addCaptureListener: dd => {
              Rd.push(dd)
            },
            removeCaptureListener: dd => {
              Rd = Rd.filter((Od => Od !== dd))
            },
            get value() {
              return hd()
            }
          }
        }(0, md),
        Fd = jR(Od, md, dd, Wd),
        Rd = fR(Od, md, dd, Wd, Fd),
        Xd = function(dd, Od, md, Wd, Fd, Rd) {
          Od.debug("Initializing instrumentations");
          const Xd = [];
          return {
            add: function() {
              Od.debug("Adding instrumentations");
              for (var Kd = arguments.length, hd = new Array(Kd), vd = 0; vd < Kd; vd++) hd[vd] = arguments[vd];
              hd.forEach((Kd => {
                Od.debug(`Adding "${Kd.name}" instrumentation`), Xd.some((dd => dd.name === Kd.name)) ? Od.warn(`Instrumentation ${Kd.name} is already added`) : (Kd.unpatchedConsole = dd, Kd.internalLogger = Od, Kd.config = md, Kd.metas = Wd, Kd.transports = Fd, Kd.api = Rd, Xd.push(Kd), Kd.initialize())
              }))
            },
            get instrumentations() {
              return [...Xd]
            },
            remove: function() {
              Od.debug("Removing instrumentations");
              for (var dd = arguments.length, md = new Array(dd), Wd = 0; Wd < dd; Wd++) md[Wd] = arguments[Wd];
              md.forEach((dd => {
                var md, Wd;
                Od.debug(`Removing "${dd.name}" instrumentation`);
                const Fd = Xd.reduce(((Od, md, Wd) => null === Od && md.name === dd.name ? Wd : null), null);
                null !== Fd ? (null === (md = (Wd = Xd[Fd]).destroy) || void 0 === md || md.call(Wd), Xd.splice(Fd, 1)) : Od.warn(`Instrumentation "${dd.name}" is not added`)
              }))
            }
          }
        }(Od, md, dd, Wd, Fd, Rd),
        Kd = yd(Od, md, dd, Wd, Fd, Rd, Xd);
      return zR(Kd),
        function(dd) {
          dd.transports.add(...dd.config.transports), dd.transports.addBeforeSendHooks(dd.config.beforeSend)
        }(Kd),
        function(dd) {
          dd.instrumentations.add(...dd.config.instrumentations)
        }(Kd), Kd
    }

    function dX(dd) {
      const Od = VR(dd);
      if (Od) return MR(Od)
    }
  },
  7629: function(dd, Od, md) {
    var Wd;
    ! function(Fd, Rd) {
      var Xd = "function",
        Kd = "undefined",
        hd = "object",
        vd = "string",
        Qd = "major",
        td = "model",
        od = "name",
        Nd = "type",
        qd = "vendor",
        Hd = "version",
        yd = "architecture",
        bd = "console",
        Td = "mobile",
        pd = "tablet",
        Yd = "smarttv",
        gd = "wearable",
        wd = "embedded",
        Ed = "Amazon",
        Jd = "Apple",
        Ud = "ASUS",
        xd = "BlackBerry",
        Bd = "Browser",
        Sd = "Chrome",
        sd = "Firefox",
        ud = "Google",
        Vd = "Honor",
        Ad = "Huawei",
        rd = "LG",
        Gd = "Microsoft",
        nd = "Motorola",
        Ld = "Nvidia",
        Pd = "OnePlus",
        zd = "Opera",
        cd = "OPPO",
        jd = "Samsung",
        Dd = "Sharp",
        ed = "Sony",
        Id = "Xiaomi",
        ld = "Zebra",
        Cd = "Facebook",
        Zd = "Chromium OS",
        kd = "Mac OS",
        fd = " Browser",
        Md = function(dd) {
          for (var Od = {}, md = 0; md < dd.length; md++) Od[dd[md].toUpperCase()] = dd[md];
          return Od
        },
        dO = function(dd, Od) {
          return typeof dd === vd && -1 !== OO(Od).indexOf(OO(dd))
        },
        OO = function(dd) {
          return dd.toLowerCase()
        },
        mO = function(dd, Od) {
          if (typeof dd === vd) return dd = dd.replace(/^\s\s*/, ""), typeof Od === Kd ? dd : dd.substring(0, 500)
        },
        WO = function(dd, Od) {
          for (var md, Wd, Fd, Kd, vd, Qd, td = 0; td < Od.length && !vd;) {
            var od = Od[td],
              Nd = Od[td + 1];
            for (md = Wd = 0; md < od.length && !vd && od[md];)
              if (vd = od[md++].exec(dd))
                for (Fd = 0; Fd < Nd.length; Fd++) Qd = vd[++Wd], typeof(Kd = Nd[Fd]) === hd && Kd.length > 0 ? 2 === Kd.length ? typeof Kd[1] == Xd ? this[Kd[0]] = Kd[1].call(this, Qd) : this[Kd[0]] = Kd[1] : 3 === Kd.length ? typeof Kd[1] !== Xd || Kd[1].exec && Kd[1].test ? this[Kd[0]] = Qd ? Qd.replace(Kd[1], Kd[2]) : Rd : this[Kd[0]] = Qd ? Kd[1].call(this, Qd, Kd[2]) : Rd : 4 === Kd.length && (this[Kd[0]] = Qd ? Kd[3].call(this, Qd.replace(Kd[1], Kd[2])) : Rd) : this[Kd] = Qd || Rd;
            td += 2
          }
        },
        FO = function(dd, Od) {
          for (var md in Od)
            if (typeof Od[md] === hd && Od[md].length > 0) {
              for (var Wd = 0; Wd < Od[md].length; Wd++)
                if (dO(Od[md][Wd], dd)) return "?" === md ? Rd : md
            } else if (dO(Od[md], dd)) return "?" === md ? Rd : md;
          return Od.hasOwnProperty("*") ? Od["*"] : dd
        },
        RO = {
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
        XO = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Hd, [od, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Hd, [od, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [od, Hd],
            [/opios[\/ ]+([\w\.]+)/i],
            [Hd, [od, zd + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Hd, [od, zd + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Hd, [od, zd]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Hd, [od, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Hd, [od, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [od, Hd],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Hd, [od, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Hd, [od, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Hd, [od, "UC" + Bd]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Hd, [od, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Hd, [od, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Hd, [od, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Hd, [od, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Hd, [od, "Smart Lenovo " + Bd]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [od, /(.+)/, "$1 Secure " + Bd], Hd
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Hd, [od, sd + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Hd, [od, zd + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Hd, [od, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Hd, [od, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Hd, [od, zd + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Hd, [od, "MIUI" + fd]],
            [/fxios\/([\w\.-]+)/i],
            [Hd, [od, sd]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Hd, [od, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [od, /(.+)/, "$1Browser"], Hd
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [od, /(.+)/, "$1" + fd], Hd
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Hd, [od, jd + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Hd, [od, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [od, "Sogou Mobile"], Hd
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [od, Hd],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [od],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Hd, od],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [od, Cd], Hd
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [od, Hd],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Hd, [od, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Hd, [od, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Hd, [od, Sd + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [od, Sd + " WebView"], Hd
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Hd, [od, "Android " + Bd]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [od, Hd],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Hd, [od, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Hd, od],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [od, [Hd, FO, {
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
            [od, Hd],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [od, "Netscape"], Hd
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [od, Hd],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Hd, [od, sd + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [od, [Hd, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [od, [Hd, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [yd, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [yd, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [yd, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [yd, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [yd, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [yd, /ower/, "", OO]
            ],
            [/ sun4\w[;\)]/i],
            [
              [yd, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [yd, OO]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [td, [qd, jd],
              [Nd, pd]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [td, [qd, jd],
              [Nd, Td]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [td, [qd, Jd],
              [Nd, Td]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [td, [qd, Jd],
              [Nd, pd]
            ],
            [/(macintosh);/i],
            [td, [qd, Jd]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [td, [qd, Dd],
              [Nd, Td]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [td, [qd, Vd],
              [Nd, pd]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [td, [qd, Vd],
              [Nd, Td]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [td, [qd, Ad],
              [Nd, pd]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [td, [qd, Ad],
              [Nd, Td]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [td, /_/g, " "],
              [qd, Id],
              [Nd, pd]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [td, /_/g, " "],
              [qd, Id],
              [Nd, Td]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [td, [qd, cd],
              [Nd, Td]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [td, [qd, FO, {
                OnePlus: ["304", "403", "203"],
                "*": cd
              }],
              [Nd, pd]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [td, [qd, "Vivo"],
              [Nd, Td]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [td, [qd, "Realme"],
              [Nd, Td]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [td, [qd, nd],
              [Nd, Td]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [td, [qd, nd],
              [Nd, pd]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [td, [qd, rd],
              [Nd, pd]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [td, [qd, rd],
              [Nd, Td]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [td, [qd, "Lenovo"],
              [Nd, pd]
            ],
            [/(nokia) (t[12][01])/i],
            [qd, td, [Nd, pd]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [td, /_/g, " "],
              [Nd, Td],
              [qd, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [td, [qd, ud],
              [Nd, pd]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [td, [qd, ud],
              [Nd, Td]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [td, [qd, ed],
              [Nd, Td]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [td, "Xperia Tablet"],
              [qd, ed],
              [Nd, pd]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [td, [qd, Pd],
              [Nd, Td]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [td, [qd, Ed],
              [Nd, pd]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [td, /(.+)/g, "Fire Phone $1"],
              [qd, Ed],
              [Nd, Td]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [td, qd, [Nd, pd]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [td, [qd, xd],
              [Nd, Td]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [td, [qd, Ud],
              [Nd, pd]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [td, [qd, Ud],
              [Nd, Td]
            ],
            [/(nexus 9)/i],
            [td, [qd, "HTC"],
              [Nd, pd]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [qd, [td, /_/g, " "],
              [Nd, Td]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [td, [qd, "TCL"],
              [Nd, pd]
            ],
            [/(itel) ((\w+))/i],
            [
              [qd, OO], td, [Nd, FO, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [td, [qd, "Acer"],
              [Nd, pd]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [td, [qd, "Meizu"],
              [Nd, Td]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [td, [qd, "Ulefone"],
              [Nd, Td]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [td, [qd, "Energizer"],
              [Nd, Td]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [td, [qd, "Cat"],
              [Nd, Td]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [td, [qd, "Smartfren"],
              [Nd, Td]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [td, [qd, "Nothing"],
              [Nd, Td]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [td, [qd, "Archos"],
              [Nd, pd]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [td, [qd, "Archos"],
              [Nd, Td]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [qd, td, [Nd, pd]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [qd, td, [Nd, Td]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [qd, td, [Nd, pd]],
            [/(surface duo)/i],
            [td, [qd, Gd],
              [Nd, pd]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [td, [qd, "Fairphone"],
              [Nd, Td]
            ],
            [/(u304aa)/i],
            [td, [qd, "AT&T"],
              [Nd, Td]
            ],
            [/\bsie-(\w*)/i],
            [td, [qd, "Siemens"],
              [Nd, Td]
            ],
            [/\b(rct\w+) b/i],
            [td, [qd, "RCA"],
              [Nd, pd]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [td, [qd, "Dell"],
              [Nd, pd]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [td, [qd, "Verizon"],
              [Nd, pd]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [td, [qd, "Barnes & Noble"],
              [Nd, pd]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [td, [qd, "NuVision"],
              [Nd, pd]
            ],
            [/\b(k88) b/i],
            [td, [qd, "ZTE"],
              [Nd, pd]
            ],
            [/\b(nx\d{3}j) b/i],
            [td, [qd, "ZTE"],
              [Nd, Td]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [td, [qd, "Swiss"],
              [Nd, Td]
            ],
            [/\b(zur\d{3}) b/i],
            [td, [qd, "Swiss"],
              [Nd, pd]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [td, [qd, "Zeki"],
              [Nd, pd]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [qd, "Dragon Touch"], td, [Nd, pd]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [td, [qd, "Insignia"],
              [Nd, pd]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [td, [qd, "NextBook"],
              [Nd, pd]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [qd, "Voice"], td, [Nd, Td]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [qd, "LvTel"], td, [Nd, Td]
            ],
            [/\b(ph-1) /i],
            [td, [qd, "Essential"],
              [Nd, Td]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [td, [qd, "Envizen"],
              [Nd, pd]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [td, [qd, "MachSpeed"],
              [Nd, pd]
            ],
            [/\btu_(1491) b/i],
            [td, [qd, "Rotor"],
              [Nd, pd]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [td, [qd, Ld],
              [Nd, pd]
            ],
            [/(sprint) (\w+)/i],
            [qd, td, [Nd, Td]],
            [/(kin\.[onetw]{3})/i],
            [
              [td, /\./g, " "],
              [qd, Gd],
              [Nd, Td]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [td, [qd, ld],
              [Nd, pd]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [td, [qd, ld],
              [Nd, Td]
            ],
            [/smart-tv.+(samsung)/i],
            [qd, [Nd, Yd]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [td, /^/, "SmartTV"],
              [qd, jd],
              [Nd, Yd]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [qd, rd],
              [Nd, Yd]
            ],
            [/(apple) ?tv/i],
            [qd, [td, Jd + " TV"],
              [Nd, Yd]
            ],
            [/crkey/i],
            [
              [td, Sd + "cast"],
              [qd, ud],
              [Nd, Yd]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [td, [qd, Ed],
              [Nd, Yd]
            ],
            [/(shield \w+ tv)/i],
            [td, [qd, Ld],
              [Nd, Yd]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [td, [qd, Dd],
              [Nd, Yd]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [td, [qd, ed],
              [Nd, Yd]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [td, [qd, Id],
              [Nd, Yd]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [qd, td, [Nd, Yd]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [qd, mO],
              [td, mO],
              [Nd, Yd]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [td, [Nd, Yd]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Nd, Yd]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [qd, td, [Nd, bd]],
            [/droid.+; (shield)( bui|\))/i],
            [td, [qd, Ld],
              [Nd, bd]
            ],
            [/(playstation \w+)/i],
            [td, [qd, ed],
              [Nd, bd]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [td, [qd, Gd],
              [Nd, bd]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [td, [qd, jd],
              [Nd, gd]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [qd, td, [Nd, gd]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [td, [qd, cd],
              [Nd, gd]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [td, [qd, Jd],
              [Nd, gd]
            ],
            [/(opwwe\d{3})/i],
            [td, [qd, Pd],
              [Nd, gd]
            ],
            [/(moto 360)/i],
            [td, [qd, nd],
              [Nd, gd]
            ],
            [/(smartwatch 3)/i],
            [td, [qd, ed],
              [Nd, gd]
            ],
            [/(g watch r)/i],
            [td, [qd, rd],
              [Nd, gd]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [td, [qd, ld],
              [Nd, gd]
            ],
            [/droid.+; (glass) \d/i],
            [td, [qd, ud],
              [Nd, gd]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [qd, td, [Nd, gd]],
            [/; (quest( \d| pro)?)/i],
            [td, [qd, Cd],
              [Nd, gd]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [qd, [Nd, wd]],
            [/(aeobc)\b/i],
            [td, [qd, Ed],
              [Nd, wd]
            ],
            [/(homepod).+mac os/i],
            [td, [qd, Jd],
              [Nd, wd]
            ],
            [/windows iot/i],
            [
              [Nd, wd]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [td, [Nd, Td]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [td, [Nd, pd]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Nd, pd]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Nd, Td]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [td, [qd, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Hd, [od, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [od, Hd],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Hd, [od, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [od, Hd],
            [/ladybird\//i],
            [
              [od, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Hd, od]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [od, Hd],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [od, [Hd, FO, RO]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Hd, FO, RO],
              [od, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Hd, /_/g, "."],
              [od, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [od, kd],
              [Hd, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Hd, od],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [od, /(.+)/, "$1 Touch"], Hd
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [od, Hd],
            [/\(bb(10);/i],
            [Hd, [od, xd]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Hd, [od, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Hd, [od, sd + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Hd, [od, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Hd, [od, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Hd, [od, Sd + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [od, Zd], Hd
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [od, Hd],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [od, "Solaris"], Hd
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [od, Hd]
          ]
        },
        KO = function(dd, Od) {
          if (typeof dd === hd && (Od = dd, dd = Rd), !(this instanceof KO)) return new KO(dd, Od).getResult();
          var md = typeof Fd !== Kd && Fd.navigator ? Fd.navigator : Rd,
            Wd = dd || (md && md.userAgent ? md.userAgent : ""),
            bd = md && md.userAgentData ? md.userAgentData : Rd,
            Yd = Od ? function(dd, Od) {
              var md = {};
              for (var Wd in dd) Od[Wd] && Od[Wd].length % 2 === 0 ? md[Wd] = Od[Wd].concat(dd[Wd]) : md[Wd] = dd[Wd];
              return md
            }(XO, Od) : XO,
            gd = md && md.userAgent == Wd;
          return this.getBrowser = function() {
            var dd, Od = {};
            return Od[od] = Rd, Od[Hd] = Rd, WO.call(Od, Wd, Yd.browser), Od[Qd] = typeof(dd = Od[Hd]) === vd ? dd.replace(/[^\d\.]/g, "").split(".")[0] : Rd, gd && md && md.brave && typeof md.brave.isBrave == Xd && (Od[od] = "Brave"), Od
          }, this.getCPU = function() {
            var dd = {};
            return dd[yd] = Rd, WO.call(dd, Wd, Yd.cpu), dd
          }, this.getDevice = function() {
            var dd = {};
            return dd[qd] = Rd, dd[td] = Rd, dd[Nd] = Rd, WO.call(dd, Wd, Yd.device), gd && !dd[Nd] && bd && bd.mobile && (dd[Nd] = Td), gd && "Macintosh" == dd[td] && md && typeof md.standalone !== Kd && md.maxTouchPoints && md.maxTouchPoints > 2 && (dd[td] = "iPad", dd[Nd] = pd), dd
          }, this.Iq = function() {
            var dd = {};
            return dd[od] = Rd, dd[Hd] = Rd, WO.call(dd, Wd, Yd.engine), dd
          }, this.getOS = function() {
            var dd = {};
            return dd[od] = Rd, dd[Hd] = Rd, WO.call(dd, Wd, Yd.os), gd && !dd[od] && bd && bd.platform && "Unknown" != bd.platform && (dd[od] = bd.platform.replace(/chrome os/i, Zd).replace(/macos/i, kd)), dd
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Iq(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Wd
          }, this.setUA = function(dd) {
            return Wd = typeof dd === vd && dd.length > 500 ? mO(dd, 500) : dd, this
          }, this.setUA(Wd), this
        };
      KO.VERSION = "1.0.41", KO.BROWSER = Md([od, Hd, Qd]), KO.CPU = Md([yd]), KO.DEVICE = Md([td, qd, Nd, bd, Td, Yd, pd, gd, wd]), KO.ENGINE = KO.OS = Md([od, Hd]), typeof Od !== Kd ? (dd.exports && (Od = dd.exports = KO), Od.UAParser = KO) : md.amdO ? (Wd = function() {
        return KO
      }.call(Od, md, Od, dd)) === Rd || (dd.exports = Wd) : typeof Fd !== Kd && (Fd.UAParser = KO);
      var hO = typeof Fd !== Kd && (Fd.jQuery || Fd.Zepto);
      if (hO && !hO.ua) {
        var vO = new KO;
        hO.ua = vO.getResult(), hO.ua.get = function() {
          return vO.getUA()
        }, hO.ua.set = function(dd) {
          vO.setUA(dd);
          var Od = vO.getResult();
          for (var md in Od) hO.ua[md] = Od[md]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);