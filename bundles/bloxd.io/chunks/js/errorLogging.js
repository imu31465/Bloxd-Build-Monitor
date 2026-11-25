export const id = 31;
export const ids = [31];
export const modules = {
  6899: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BaseExtension: () => uj,
      BaseInstrumentation: () => Ej,
      BaseTransport: () => RU,
      CSPInstrumentation: () => aU,
      ConsoleInstrumentation: () => vj,
      ConsoleTransport: () => UZ,
      EVENT_CLICK: () => ME,
      EVENT_NAVIGATION: () => eE,
      EVENT_ROUTE_CHANGE: () => aE,
      EVENT_SESSION_EXTEND: () => JE,
      EVENT_SESSION_RESUME: () => wE,
      EVENT_SESSION_START: () => pE,
      EVENT_VIEW_CHANGED: () => GE,
      ErrorsInstrumentation: () => Vj,
      FetchTransport: () => pZ,
      InternalLoggerLevel: () => tE,
      LogLevel: () => Mj,
      MAX_SESSION_PERSISTENCE_TIME: () => qu,
      NavigationInstrumentation: () => BU,
      Observable: () => gj,
      PerformanceInstrumentation: () => As,
      PersistentSessionsManager: () => iE,
      SESSION_EXPIRATION_TIME: () => Zu,
      SESSION_INACTIVITY_TIME: () => Xu,
      STORAGE_KEY: () => Uu,
      SessionInstrumentation: () => sj,
      TransportItemType: () => uZ,
      UserActionInstrumentation: () => dU,
      UserActionState: () => hU,
      VERSION: () => jj,
      ViewInstrumentation: () => Qj,
      VolatileSessionsManager: () => WE,
      WebVitalsInstrumentation: () => rs,
      allLogLevels: () => Gj,
      browserMeta: () => AU,
      buildStackFrame: () => Uj,
      captureMetas: () => WZ,
      createInternalLogger: () => PZ,
      createPromiseBuffer: () => OZ,
      createSession: () => yU,
      deepEqual: () => gE,
      defaultEventDomain: () => su,
      defaultExceptionType: () => dj,
      defaultGlobalObjectKey: () => oZ,
      defaultInternalLoggerLevel: () => TE,
      defaultLogLevel: () => ej,
      faro: () => Yu,
      genShortID: () => DE,
      getCurrentTimestamp: () => OE,
      getDataFromSafariExtensions: () => cj,
      getIgnoreUrls: () => Hu,
      getInternalFaroFromGlobalObject: () => cu,
      getStackFramesFromError: () => Oj,
      getTransportBody: () => sZ,
      getUrlFromResource: () => nu,
      getWebInstrumentations: () => LU,
      globalObject: () => Cu,
      initializeFaro: () => RZ,
      internalGlobalObjectKey: () => bu,
      isArray: () => ku,
      isBoolean: () => du,
      isDomError: () => Su,
      isDomException: () => Iu,
      isElement: () => Bu,
      isElementDefined: () => Fu,
      EO: () => Tu,
      isError: () => iu,
      isErrorDefined: () => Qu,
      isErrorEvent: () => Wu,
      isEvent: () => ru,
      isEventDefined: () => Vu,
      isFunction: () => ou,
      isInstanceOf: () => Mu,
      isInt: () => Ju,
      isInternalFaroOnGlobalObject: () => Ou,
      isMap: () => tu,
      isMapDefined: () => Lu,
      isNull: () => Gu,
      isNumber: () => wu,
      isObject: () => Pu,
      isPrimitive: () => Ku,
      isRegExp: () => mu,
      isString: () => pu,
      isSymbol: () => au,
      isSyntheticEvent: () => xu,
      isThenable: () => vu,
      isToString: () => gu,
      isTypeof: () => Du,
      isUndefined: () => eu,
      makeCoreConfig: () => vZ,
      noop: () => LE,
      osMeta: () => nU,
      parseStacktrace: () => Yj,
      sdkMeta: () => zU,
      setInternalFaroOnGlobalObject: () => Nu,
      transportItemTypeToBodyKey: () => EZ,
      unknownString: () => rj,
      userActionDataAttribute: () => ns,
      userActionTimeoutDataAttribute: () => ys
    });
    const su = "browser",
      Uu = "com.grafana.faro.session",
      Zu = 144e5,
      Xu = 9e5,
      lu = 1e3,
      qu = Xu,
      fu = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: qu
      };
    const Cu = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof ju.g ? ju.g : "undefined" !== typeof self ? self : void 0;
    const bu = "_faroInternal";

    function cu() {
      return Cu[bu]
    }

    function Nu(uu) {
      uu.config.isolate ? uu.internalLogger.debug("Skipping registering internal Faro instance on global object") : (uu.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Cu, bu, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: uu
      }))
    }

    function Ou() {
      return bu in Cu
    }
    let Yu = {
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

    function hu(uu, Eu, ju, su, Uu, Zu, Xu) {
      return Eu.debug("Initializing Faro"), Yu = {
          api: Zu,
          config: ju,
          instrumentations: Xu,
          internalLogger: Eu,
          metas: su,
          pause: Uu.pause,
          transports: Uu,
          unpatchedConsole: uu,
          unpause: Uu.unpause
        }, Nu(Yu),
        function(uu) {
          if (uu.config.preventGlobalExposure) uu.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (uu.internalLogger.debug(`Registering public faro reference in the global scope using "${uu.config.globalObjectKey}" key`), uu.config.globalObjectKey in Cu) return void uu.internalLogger.warn(`Skipping global registration due to key "${uu.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Cu, uu.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: uu
            })
          }
        }(Yu), Yu
    }

    function Du(uu, Eu) {
      return typeof uu === Eu
    }

    function gu(uu, Eu) {
      return Object.prototype.toString.call(uu) === `[object ${Eu}]`
    }

    function Mu(uu, Eu) {
      try {
        return uu instanceof Eu
      } catch (ju) {
        return !1
      }
    }
    const eu = uu => Du(uu, "undefined"),
      Gu = uu => Du(uu, "null"),
      pu = uu => Du(uu, "string"),
      wu = uu => Du(uu, "number") && !isNaN(uu) || Du(uu, "bigint"),
      Ju = uu => wu(uu) && Number.isInteger(uu),
      du = uu => Du(uu, "boolean"),
      au = uu => Du(uu, "symbol"),
      Pu = uu => !Gu(uu) && Du(uu, "object"),
      ou = uu => Du(uu, "function"),
      ku = uu => gu(uu, "Array"),
      mu = uu => gu(uu, "RegExp"),
      vu = uu => ou(null === uu || void 0 === uu ? void 0 : uu.then),
      Ku = uu => !Pu(uu) && !ou(uu),
      Vu = "undefined" !== typeof Event,
      ru = uu => Vu && Mu(uu, Event),
      Qu = "undefined" !== typeof Error,
      iu = uu => Qu && Mu(uu, Error),
      Wu = uu => gu(uu, "ErrorEvent"),
      Su = uu => gu(uu, "DOMError"),
      Iu = uu => gu(uu, "DOMException"),
      Fu = "undefined" !== typeof Element,
      Bu = uu => Fu && Mu(uu, Element),
      Lu = "undefined" !== typeof Map,
      tu = uu => Lu && Mu(uu, Map),
      xu = uu => Pu(uu) && "nativeEvent" in uu && "preventDefault" in uu && "stopPropagation" in uu;

    function Tu(uu) {
      return null == uu || (ku(uu) || pu(uu) ? 0 === uu.length : !!Pu(uu) && 0 === Object.keys(uu).length)
    }

    function Hu() {
      return Yu.transports.transports.flatMap((uu => uu.getIgnoreUrls()))
    }

    function Au() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Hu().some((Eu => uu && null != uu.match(Eu)))
    }

    function nu(uu) {
      return pu(uu) ? uu : uu instanceof URL ? uu.href : !Tu(uu) && ou(null === uu || void 0 === uu ? void 0 : uu.toString) ? uu.toString() : void 0
    }
    const yu = "sessionStorage",
      zu = "localStorage";

    function Ru(uu) {
      try {
        let Eu;
        Eu = window[uu];
        const ju = "__faro_storage_test__";
        return Eu.setItem(ju, ju), Eu.removeItem(ju), !0
      } catch (ju) {
        var Eu;
        return null === (Eu = Yu.internalLogger) || void 0 === Eu || Eu.info(`Web storage of type ${uu} is not available. Reason: ${ju}`), !1
      }
    }

    function uE(uu, Eu) {
      return ZE(Eu) ? window[Eu].getItem(uu) : null
    }

    function EE(uu, Eu, ju) {
      if (ZE(ju)) try {
        window[ju].setItem(uu, Eu)
      } catch (su) {}
    }

    function jE(uu, Eu) {
      ZE(Eu) && window[Eu].removeItem(uu)
    }
    const sE = Ru(zu),
      UE = Ru(yu);

    function ZE(uu) {
      return uu === zu ? sE : uu === yu && UE
    }

    function XE(uu) {
      return XE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, XE(uu)
    }

    function lE(uu) {
      var Eu = function(uu, Eu) {
        if ("object" != XE(uu) || !uu) return uu;
        var ju = uu[Symbol.toPrimitive];
        if (void 0 !== ju) {
          var su = ju.call(uu, Eu || "default");
          if ("object" != XE(su)) return su;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eu ? String : Number)(uu)
      }(uu, "string");
      return "symbol" == XE(Eu) ? Eu : Eu + ""
    }

    function qE(uu, Eu, ju) {
      return (Eu = lE(Eu)) in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }

    function fE(uu, Eu) {
      var ju = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var su = Object.getOwnPropertySymbols(uu);
        Eu && (su = su.filter((function(Eu) {
          return Object.getOwnPropertyDescriptor(uu, Eu).enumerable
        }))), ju.push.apply(ju, su)
      }
      return ju
    }

    function CE(uu) {
      for (var Eu = 1; Eu < arguments.length; Eu++) {
        var ju = null != arguments[Eu] ? arguments[Eu] : {};
        Eu % 2 ? fE(Object(ju), !0).forEach((function(Eu) {
          qE(uu, Eu, ju[Eu])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(ju)) : fE(Object(ju)).forEach((function(Eu) {
          Object.defineProperty(uu, Eu, Object.getOwnPropertyDescriptor(ju, Eu))
        }))
      }
      return uu
    }

    function bE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yu;
      var Eu, ju, su;
      const Uu = uu.config.sessionTracking,
        Zu = null !== (Eu = null !== (ju = null === Uu || void 0 === Uu || null === (su = Uu.sampler) || void 0 === su ? void 0 : su.call(Uu, {
          metas: uu.metas.value
        })) && void 0 !== ju ? ju : null === Uu || void 0 === Uu ? void 0 : Uu.samplingRate) && void 0 !== Eu ? Eu : 1,
        Xu = "number" === typeof Zu ? function(uu) {
          return Math.min(1, Math.max(0, uu))
        }(Zu) : 0;
      if (!(Xu > 0)) return !1;
      if (1 === Xu) return !0;
      try {
        const uu = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === uu || void 0 === uu ? void 0 : uu.getRandomValues)) {
          const Eu = new Uint32Array(1);
          return uu.getRandomValues(Eu), Eu[0] / Math.pow(2, 32) < Xu
        }
      } catch (lu) {}
      return Math.random() < Xu
    }

    function cE() {
      return Date.now()
    }

    function NE() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function OE() {
      return (new Date).toISOString()
    }

    function YE(uu) {
      return new Date(uu).toISOString()
    }
    const hE = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function DE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Eu = new Uint32Array(uu),
        ju = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === ju || void 0 === ju ? void 0 : ju.getRandomValues) ju.getRandomValues(Eu);
      else
        for (let Uu = 0; Uu < uu; Uu++) Eu[Uu] = Math.floor(4294967296 * Math.random());
      let su = "";
      for (let Uu = 0; Uu < uu; Uu++) su += hE[Eu[Uu] % 59];
      return su
    }

    function gE(uu, Eu) {
      if (uu === Eu) return !0;
      if (Du(uu, "number") && isNaN(uu)) return Du(Eu, "number") && isNaN(Eu);
      const ju = ku(uu),
        su = ku(Eu);
      if (ju !== su) return !1;
      if (ju && su) {
        const ju = uu.length;
        if (ju !== Eu.length) return !1;
        for (let su = ju; 0 !== su--;)
          if (!gE(uu[su], Eu[su])) return !1;
        return !0
      }
      const Uu = Pu(uu),
        Zu = Pu(Eu);
      if (Uu !== Zu) return !1;
      if (uu && Eu && Uu && Zu) {
        const ju = Object.keys(uu),
          su = Object.keys(Eu);
        if (ju.length !== su.length) return !1;
        for (let uu of ju)
          if (!su.includes(uu)) return !1;
        for (let Uu of ju)
          if (!gE(uu[Uu], Eu[Uu])) return !1;
        return !0
      }
      return !1
    }
    const ME = "click",
      eE = "navigation",
      GE = "view_changed",
      pE = "session_start",
      wE = "session_resume",
      JE = "session_extend",
      dE = "service_name_override",
      aE = "route_change";

    function PE() {
      let {
        sessionId: uu,
        started: Eu,
        lastActivity: ju,
        isSampled: su = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu;
      var Zu;
      const Xu = cE(),
        lu = null === (Zu = Uu.config) || void 0 === Zu || null === (Zu = Zu.sessionTracking) || void 0 === Zu ? void 0 : Zu.generateSessionId;
      return null == uu && (uu = "function" === typeof lu ? lu() : DE()), {
        sessionId: uu,
        lastActivity: null !== ju && void 0 !== ju ? ju : Xu,
        started: null !== Eu && void 0 !== Eu ? Eu : Xu,
        isSampled: su
      }
    }

    function oE(uu) {
      if (null == uu) return !1;
      const Eu = cE();
      return Eu - uu.started < 144e5 && Eu - uu.lastActivity < Xu
    }

    function kE(uu) {
      let {
        fetchUserSession: Eu,
        storeUserSession: ju,
        adoptSession: su,
        updateInterval: Uu = 0
      } = uu, lu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu, qu = 0;
      return function() {
        let {
          forceSessionExtend: uu = !1,
          refreshActivity: fu = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Cu, bu;
        if (!Eu || !ju) return;
        const cu = cE();
        if (!uu && cu < qu && qu - cu <= Uu) return;
        const Nu = lu.config.sessionTracking,
          Ou = null === Nu || void 0 === Nu ? void 0 : Nu.persistent;
        if (Ou && !sE || !Ou && !UE) return;
        const Yu = Eu();
        if (qu = Math.min(cu + Uu, (null !== (Cu = null === Yu || void 0 === Yu ? void 0 : Yu.started) && void 0 !== Cu ? Cu : cu) + Zu, (null !== (bu = null === Yu || void 0 === Yu ? void 0 : Yu.lastActivity) && void 0 !== bu ? bu : cu) + Xu), !1 === uu && oE(Yu)) {
          var hu;
          fu && ju(CE(CE({}, Yu), {}, {
            lastActivity: cu
          }));
          const uu = null === (hu = lu.metas.value.session) || void 0 === hu ? void 0 : hu.id;
          null != su && null != Yu.sessionMeta && Yu.sessionId !== uu && su(Yu.sessionMeta)
        } else {
          var Du, gu, Mu;
          let uu = vE(PE({
            isSampled: bE(lu)
          }, lu), Yu, lu);
          qu = cu + Uu, ju(uu), null === (Du = lu.api) || void 0 === Du || Du.setSession(uu.sessionMeta), null === Nu || void 0 === Nu || null === (gu = Nu.onSessionChange) || void 0 === gu || gu.call(Nu, null !== (Mu = null === Yu || void 0 === Yu ? void 0 : Yu.sessionMeta) && void 0 !== Mu ? Mu : null, uu.sessionMeta)
        }
      }
    }

    function mE(uu) {
      let Eu, {
          fetchUserSession: ju,
          storeUserSession: su,
          updateInterval: Uu = 0
        } = uu,
        Zu = 0;
      return uu => {
        const Xu = cE();
        if (uu === Eu && Xu < Zu && Zu - Xu <= Uu) return;
        Eu = uu, Zu = Xu + Uu;
        const lu = ju();
        (null === lu || void 0 === lu ? void 0 : lu.sessionId) === uu && oE(lu) && su(CE(CE({}, lu), {}, {
          lastActivity: Xu
        }))
      }
    }

    function vE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yu;
      var su, Uu, Zu, Xu, lu, qu;
      const fu = CE(CE({}, uu), {}, {
          sessionMeta: {
            id: uu.sessionId,
            attributes: VE(CE(CE(CE({}, null === (su = ju.config.sessionTracking) || void 0 === su || null === (su = su.session) || void 0 === su ? void 0 : su.attributes), null !== (Uu = null === (Zu = ju.metas.value.session) || void 0 === Zu ? void 0 : Zu.attributes) && void 0 !== Uu ? Uu : {}), {}, {
              isSampled: uu.isSampled.toString()
            }))
          }
        }),
        Cu = null !== (Xu = null === (lu = ju.metas.value.session) || void 0 === lu ? void 0 : lu.overrides) && void 0 !== Xu ? Xu : null === Eu || void 0 === Eu || null === (qu = Eu.sessionMeta) || void 0 === qu ? void 0 : qu.overrides;
      Tu(Cu) || (fu.sessionMeta.overrides = Cu);
      const bu = null === Eu || void 0 === Eu ? void 0 : Eu.sessionId;
      return null != bu && (fu.sessionMeta.attributes.previousSession = bu), fu
    }

    function KE(uu) {
      let {
        fetchUserSession: Eu,
        storeUserSession: ju
      } = uu, su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu, Uu = !1;
      return function(uu) {
        if (Uu) return;
        const Zu = uu.session,
          Xu = Eu();
        let lu = null === Zu || void 0 === Zu ? void 0 : Zu.id;
        const qu = null === Zu || void 0 === Zu ? void 0 : Zu.attributes,
          fu = null === Zu || void 0 === Zu ? void 0 : Zu.overrides,
          Cu = null === Xu || void 0 === Xu ? void 0 : Xu.sessionMeta,
          bu = null === Cu || void 0 === Cu ? void 0 : Cu.overrides,
          cu = !!fu && !gE(fu, bu),
          Nu = !!qu && !gE(qu, null === Cu || void 0 === Cu ? void 0 : Cu.attributes);
        if (Zu && lu !== (null === Xu || void 0 === Xu ? void 0 : Xu.sessionId) || Nu || cu) {
          var Ou, Yu;
          const uu = null != Xu && lu === Xu.sessionId,
            Eu = vE(uu ? Xu : PE({
              sessionId: lu,
              isSampled: bE(su)
            }, su), Xu, su),
            Zu = null === Xu || void 0 === Xu || null === (Ou = Xu.sessionMeta) || void 0 === Ou || null === (Ou = Ou.attributes) || void 0 === Ou ? void 0 : Ou.previousSession;
          uu && null != Zu && Zu !== Eu.sessionId && (Eu.sessionMeta.attributes.previousSession = Zu), (null === (Yu = Eu.sessionMeta.attributes) || void 0 === Yu ? void 0 : Yu.previousSession) === Eu.sessionId && delete Eu.sessionMeta.attributes.previousSession, ju(Eu),
            function(uu, Eu) {
              let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Uu, Zu, Xu;
              if (!Eu) return;
              const lu = ju.serviceName,
                qu = null !== (Uu = null !== (Zu = su.serviceName) && void 0 !== Zu ? Zu : null === (Xu = uu.metas.value.app) || void 0 === Xu ? void 0 : Xu.name) && void 0 !== Uu ? Uu : "";
              lu && lu !== qu && uu.api.pushEvent(dE, {
                serviceName: lu,
                previousServiceName: qu
              })
            }(su, cu, fu, bu), Uu = !0;
          try {
            su.api.setSession(Eu.sessionMeta)
          } finally {
            Uu = !1
          }
        }
      }
    }

    function VE(uu) {
      const Eu = {};
      for (const ju of Object.keys(uu)) {
        const su = uu[ju];
        void 0 !== su && (Eu[ju] = su)
      }
      return Eu
    }

    function rE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== uu && void 0 !== uu ? uu : {}, function() {
        const uu = new WeakSet;
        return function(Eu, ju) {
          if (Pu(ju) && null !== ju) {
            if (uu.has(ju)) return null;
            uu.add(ju)
          }
          return ju
        }
      }())
    }

    function QE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Eu = {};
      for (const [ju, su] of Object.entries(uu)) Eu[ju] = Pu(su) && null !== su ? rE(su) : String(su);
      return Eu
    }
    var iE = class uu {
      constructor() {
        var Eu = this;
        let ju = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yu;
        this.context = ju, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = uu => {
          this.adopting = !0;
          try {
            var Eu;
            null === (Eu = this.context.api) || void 0 === Eu || Eu.setSession(uu)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: uu = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Eu.updateUserSession({
            refreshActivity: uu
          })
        }, this.recordActivity = mE({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          updateInterval: lu
        }), this.updateUserSession = kE({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: lu
        }, ju), this.init()
      }
      static removeUserSession() {
        jE(Uu, uu.storageTypeLocal)
      }
      static storeUserSession(Eu) {
        EE(Uu, rE(Eu), uu.storageTypeLocal)
      }
      static fetchUserSession() {
        const Eu = uE(Uu, uu.storageTypeLocal);
        return Eu ? JSON.parse(Eu) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var uu;
            this.updateSession({
              refreshActivity: !1
            });
            const Eu = null === (uu = this.context.api) || void 0 === uu || null === (uu = uu.getSession()) || void 0 === uu ? void 0 : uu.id;
            Eu && this.recordActivity(Eu)
          }
        })), this.context.metas.addListener(KE({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession
        }, this.context))
      }
    };
    iE.storageTypeLocal = zu;
    var WE = class uu {
      constructor() {
        var Eu = this;
        let ju = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yu;
        this.context = ju, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: uu = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Eu.updateUserSession({
            refreshActivity: uu
          })
        }, this.recordActivity = mE({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          updateInterval: lu
        }), this.updateUserSession = kE({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          updateInterval: lu
        }, ju), this.init()
      }
      static removeUserSession() {
        jE(Uu, uu.storageTypeSession)
      }
      static storeUserSession(Eu) {
        EE(Uu, rE(Eu), uu.storageTypeSession)
      }
      static fetchUserSession() {
        const Eu = uE(Uu, uu.storageTypeSession);
        return Eu ? JSON.parse(Eu) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var uu;
            this.updateSession({
              refreshActivity: !1
            });
            const Eu = null === (uu = this.context.api) || void 0 === uu || null === (uu = uu.getSession()) || void 0 === uu ? void 0 : uu.id;
            Eu && this.recordActivity(Eu)
          }
        })), this.context.metas.addListener(KE({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession
        }, this.context))
      }
    };
    WE.storageTypeSession = yu;
    const SE = new WeakMap;

    function IE(uu) {
      let Eu = SE.get(uu);
      if (!Eu) {
        let ju = [],
          su = [];
        Eu = {
          addSessionUpdateListener: uu => {
            ju.push(uu)
          },
          removeSessionUpdateListener: uu => {
            ju = ju.filter((Eu => Eu !== uu))
          },
          notifySessionUpdate: uu => {
            ju.forEach((Eu => Eu(uu)))
          },
          shouldCapture: () => su.every((uu => uu())),
          addCaptureFilter: uu => {
            su.push(uu)
          },
          removeCaptureFilter: uu => {
            su = su.filter((Eu => Eu !== uu))
          }
        }, SE.set(uu, Eu)
      }
      return Eu
    }
    var FE = class {
      constructor(uu, Eu, ju) {
        this.metas = uu, this.transports = Eu, this.onActivate = ju, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = uu => {
          var Eu, ju, su;
          const Uu = this.pending;
          var Zu, Xu;
          if ("overrides" === uu.type) return void(this.pending = {
            reset: null !== (Zu = null === Uu || void 0 === Uu ? void 0 : Uu.reset) && void 0 !== Zu && Zu,
            inheritOverrides: null === (Xu = null === Uu || void 0 === Uu ? void 0 : Uu.inheritOverrides) || void 0 === Xu || Xu,
            session: CE(CE({}, null === Uu || void 0 === Uu ? void 0 : Uu.session), {}, {
              overrides: CE(CE({}, null === Uu || void 0 === Uu ? void 0 : Uu.session.overrides), uu.overrides)
            })
          });
          const lu = uu.session,
            qu = Tu(lu) || null != lu && "id" in lu && !lu.id,
            fu = null !== (Eu = null === lu || void 0 === lu ? void 0 : lu.overrides) && void 0 !== Eu ? Eu : null === Uu || void 0 === Uu ? void 0 : Uu.session.overrides;
          this.pending = {
            reset: qu || !(null === lu || void 0 === lu ? void 0 : lu.id) && null !== (ju = null === Uu || void 0 === Uu ? void 0 : Uu.reset) && void 0 !== ju && ju,
            inheritOverrides: !(!uu.overrides && void 0 !== (null === lu || void 0 === lu ? void 0 : lu.overrides)) && (null === (su = null === Uu || void 0 === Uu ? void 0 : Uu.inheritOverrides) || void 0 === su || su),
            session: {
              id: null === lu || void 0 === lu ? void 0 : lu.id,
              attributes: (null === lu || void 0 === lu ? void 0 : lu.attributes) && CE({}, lu.attributes),
              overrides: uu.overrides ? CE(CE({}, null === Uu || void 0 === Uu ? void 0 : Uu.session.overrides), uu.overrides) : fu && CE({}, fu)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var uu, Eu;
        this.waiting = !0, IE(this.metas).addSessionUpdateListener(this.recordUpdate), IE(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (uu = (Eu = this.metas).addCaptureListener) || void 0 === uu || uu.call(Eu, this.activate), this.activate()
      }
      destroy() {
        var uu, Eu;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), IE(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (uu = (Eu = this.metas).removeCaptureListener) || void 0 === uu || uu.call(Eu, this.activate), IE(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function BE(uu) {
      return (null === uu || void 0 === uu ? void 0 : uu.persistent) ? iE : WE
    }

    function LE() {}
    let tE = function(uu) {
      return uu[uu.OFF = 0] = "OFF", uu[uu.ERROR = 1] = "ERROR", uu[uu.WARN = 2] = "WARN", uu[uu.INFO = 3] = "INFO", uu[uu.VERBOSE = 4] = "VERBOSE", uu
    }({});
    const xE = {
        debug: LE,
        error: LE,
        info: LE,
        prefix: "Faro",
        warn: LE
      },
      TE = 1;

    function HE(uu) {
      return HE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, HE(uu)
    }

    function AE(uu) {
      var Eu = function(uu, Eu) {
        if ("object" != HE(uu) || !uu) return uu;
        var ju = uu[Symbol.toPrimitive];
        if (void 0 !== ju) {
          var su = ju.call(uu, Eu || "default");
          if ("object" != HE(su)) return su;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eu ? String : Number)(uu)
      }(uu, "string");
      return "symbol" == HE(Eu) ? Eu : Eu + ""
    }

    function nE(uu, Eu, ju) {
      return (Eu = AE(Eu)) in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }

    function yE(uu, Eu) {
      var ju = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var su = Object.getOwnPropertySymbols(uu);
        Eu && (su = su.filter((function(Eu) {
          return Object.getOwnPropertyDescriptor(uu, Eu).enumerable
        }))), ju.push.apply(ju, su)
      }
      return ju
    }

    function zE(uu) {
      for (var Eu = 1; Eu < arguments.length; Eu++) {
        var ju = null != arguments[Eu] ? arguments[Eu] : {};
        Eu % 2 ? yE(Object(ju), !0).forEach((function(Eu) {
          nE(uu, Eu, ju[Eu])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(ju)) : yE(Object(ju)).forEach((function(Eu) {
          Object.defineProperty(uu, Eu, Object.getOwnPropertyDescriptor(ju, Eu))
        }))
      }
      return uu
    }
    const RE = zE({}, console);
    var uj = class {
        constructor() {
          this.unpatchedConsole = RE, this.internalLogger = xE, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
          this.internalLogger.debug(`${this.name}\n`, ...Eu)
        }
        logInfo() {
          for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
          this.internalLogger.info(`${this.name}\n`, ...Eu)
        }
        logWarn() {
          for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
          this.internalLogger.warn(`${this.name}\n`, ...Eu)
        }
        logError() {
          for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
          this.internalLogger.error(`${this.name}\n`, ...Eu)
        }
      },
      Ej = class extends uj {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const jj = "2.12.1";
    var sj = class extends Ej {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = jj, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(uu) {
        var Eu;
        const ju = uu.session;
        if (ju && ju.id !== (null === (Eu = this.notifiedSession) || void 0 === Eu ? void 0 : Eu.id)) {
          var su;
          if (this.isAdoptingSession()) return void(this.notifiedSession = ju);
          if (this.notifiedSession && this.notifiedSession.id === (null === (su = ju.attributes) || void 0 === su ? void 0 : su.previousSession)) return this.api.pushEvent(JE, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = ju);
          this.notifiedSession = ju, this.api.pushEvent(pE, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(uu, Eu, ju) {
        const su = null === ju || void 0 === ju ? void 0 : ju.session;
        let Uu, Zu, Xu = uu.fetchUserSession();
        if (Eu.persistent && Eu.maxSessionPersistenceTime && Xu) {
          const uu = cE();
          Xu.lastActivity < uu - Eu.maxSessionPersistenceTime && (iE.removeUserSession(), Xu = null)
        }
        const lu = oE(Xu);
        if ((null === ju || void 0 === ju ? void 0 : ju.reset) || !lu || (null === su || void 0 === su ? void 0 : su.id) && su.id !== (null === Xu || void 0 === Xu ? void 0 : Xu.sessionId)) {
          var qu, fu, Cu, bu, cu, Nu;
          Zu = PE({
            sessionId: (null === ju || void 0 === ju ? void 0 : ju.reset) ? void 0 : null !== (qu = null === su || void 0 === su ? void 0 : su.id) && void 0 !== qu ? qu : null === (fu = Eu.session) || void 0 === fu ? void 0 : fu.id,
            isSampled: bE(this)
          }, this);
          const uu = Zu.sessionId,
            Ou = ju && lu ? null === Xu || void 0 === Xu || null === (Cu = Xu.sessionMeta) || void 0 === Cu ? void 0 : Cu.overrides : void 0,
            Yu = Ou ? CE(CE({}, null === (bu = Eu.session) || void 0 === bu ? void 0 : bu.overrides), Ou) : null === (cu = Eu.session) || void 0 === cu ? void 0 : cu.overrides;
          Zu.sessionMeta = CE({
            id: uu,
            attributes: CE({
              isSampled: Zu.isSampled.toString()
            }, null === (Nu = Eu.session) || void 0 === Nu ? void 0 : Nu.attributes)
          }, Yu ? {
            overrides: Yu
          } : {}), Uu = pE
        } else {
          var Ou, Yu;
          const uu = null === Xu || void 0 === Xu ? void 0 : Xu.sessionId;
          Zu = PE({
            sessionId: uu,
            isSampled: Xu.isSampled || !1,
            started: null === Xu || void 0 === Xu ? void 0 : Xu.started
          }, this);
          const ju = null === Xu || void 0 === Xu ? void 0 : Xu.sessionMeta,
            su = CE(CE({}, null === (Ou = Eu.session) || void 0 === Ou ? void 0 : Ou.overrides), null === ju || void 0 === ju ? void 0 : ju.overrides);
          Zu.sessionMeta = CE(CE({}, Eu.session), {}, {
            id: uu,
            attributes: CE(CE(CE({}, null === (Yu = Eu.session) || void 0 === Yu ? void 0 : Yu.attributes), null === ju || void 0 === ju ? void 0 : ju.attributes), {}, {
              isSampled: Zu.isSampled.toString()
            }),
            overrides: su
          }), Uu = wE
        }
        var hu;
        if (su && (Zu.sessionMeta = CE(CE({}, Zu.sessionMeta), {}, {
            attributes: CE(CE(CE({}, null === (hu = Zu.sessionMeta) || void 0 === hu ? void 0 : hu.attributes), su.attributes), {}, {
              isSampled: Zu.isSampled.toString()
            })
          }), su.overrides)) {
          const uu = (null === ju || void 0 === ju ? void 0 : ju.inheritOverrides) ? CE(CE({}, Zu.sessionMeta.overrides), su.overrides) : su.overrides;
          Object.keys(uu).length > 0 ? Zu.sessionMeta.overrides = uu : delete Zu.sessionMeta.overrides
        }
        return {
          initialSession: Zu,
          lifecycleType: Uu
        }
      }
      registerBeforeSendHook(uu) {
        var Eu;
        this.beforeSendHook = Eu => {
          var ju, su;
          const Uu = null === (ju = Eu.meta.session) || void 0 === ju ? void 0 : ju.id;
          Uu && !this.transports.isPaused() && uu(Uu);
          const Zu = null === (su = Eu.meta.session) || void 0 === su ? void 0 : su.attributes;
          if (Zu && "true" === (null === Zu || void 0 === Zu ? void 0 : Zu.isSampled)) {
            var Xu;
            let uu = JSON.parse(JSON.stringify(Eu));
            const ju = null === (Xu = uu.meta.session) || void 0 === Xu ? void 0 : Xu.attributes;
            var lu;
            if (null === ju || void 0 === ju || delete ju.isSampled, 0 === Object.keys(null !== ju && void 0 !== ju ? ju : {}).length) null === (lu = uu.meta.session) || void 0 === lu || delete lu.attributes;
            return uu
          }
          return null
        }, null === (Eu = this.transports) || void 0 === Eu || Eu.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var uu;
        this.logDebug("init session instrumentation");
        const Eu = document.prerendering;
        var ju;
        if ((null === (uu = this.config.sessionTracking) || void 0 === uu ? void 0 : uu.enabled) && (Eu || this.prerenderSession)) return null !== (ju = this.prerenderSession) && void 0 !== ju || (this.prerenderSession = new FE(this.metas, this.transports, (uu => {
          this.prerenderSession = void 0, this.initializeSession(uu)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(uu) {
        const Eu = this.config.sessionTracking;
        if (null === Eu || void 0 === Eu ? void 0 : Eu.enabled) {
          var ju, su;
          const Uu = BE(Eu),
            Zu = new Uu(this);
          this.isAdoptingSession = Zu.isAdopting, this.registerBeforeSendHook(Zu.recordActivity);
          const {
            initialSession: Xu,
            lifecycleType: lu
          } = this.createInitialSession(Uu, Eu, uu);
          Uu.storeUserSession(Xu);
          const qu = Xu.sessionMeta;
          this.notifiedSession = qu, this.api.setSession(qu), this.captureListener = () => {
            this.transports.isPaused() || Zu.updateSession({
              refreshActivity: !1
            })
          }, null === (ju = (su = this.metas).addCaptureListener) || void 0 === ju || ju.call(su, this.captureListener), lu === pE && this.api.pushEvent(pE, {}, void 0, {
            skipDedupe: !0
          }), lu === wE && this.api.pushEvent(wE, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var uu, Eu, ju;
        (null === (uu = this.prerenderSession) || void 0 === uu || uu.destroy(), this.captureListener) && (null === (Eu = (ju = this.metas).removeCaptureListener) || void 0 === Eu || Eu.call(ju, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Uj(uu, Eu, ju, su) {
      const Uu = {
        filename: uu || document.location.href,
        function: Eu || "?"
      };
      return void 0 !== ju && (Uu.lineno = ju), void 0 !== su && (Uu.colno = su), Uu
    }
    const Zj = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Xj = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      lj = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      qj = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      fj = "safari-extension",
      Cj = "safari-web-extension",
      bj = /Minified React error #\d+;/i;

    function cj(uu, Eu) {
      const ju = null === uu || void 0 === uu ? void 0 : uu.includes(fj),
        su = !ju && (null === uu || void 0 === uu ? void 0 : uu.includes("safari-web-extension"));
      return ju || su ? [(null === uu || void 0 === uu ? void 0 : uu.includes("@")) ? uu.split("@")[0] : uu, ju ? `${fj}:${Eu}` : `${Cj}:${Eu}`] : [uu, Eu]
    }
    const Nj = 1024;

    function Oj(uu) {
      let Eu = [];
      uu.stacktrace ? Eu = uu.stacktrace.split("\n").filter(((uu, Eu) => Eu % 2 === 0)) : uu.stack && (Eu = uu.stack.split("\n"));
      const ju = Eu.reduce(((Eu, ju, su) => {
        if (ju.length > Nj) return Eu;
        let Uu, Zu, Xu, lu, qu;
        if (Uu = Zj.exec(ju)) {
          if (Zu = Uu[1], Xu = Uu[2], lu = Uu[3], qu = Uu[4], null === Xu || void 0 === Xu ? void 0 : Xu.startsWith("eval")) {
            const uu = Xj.exec(Xu);
            uu && (Xu = uu[1], lu = uu[2], qu = uu[3])
          }
          Xu = (null === Xu || void 0 === Xu ? void 0 : Xu.startsWith("address at ")) ? Xu.substring(11) : Xu, [Zu, Xu] = cj(Zu, Xu)
        } else if (Uu = lj.exec(ju)) {
          if (Zu = Uu[1], Xu = Uu[3], lu = Uu[4], qu = Uu[5], Xu && Xu.includes(" > eval")) {
            const uu = qj.exec(Xu);
            uu && (Zu = Zu || "eval", Xu = uu[1], lu = uu[2])
          } else 0 === su && !qu && wu(uu.columnNumber) && (qu = String(uu.columnNumber + 1));
          [Zu, Xu] = cj(Zu, Xu)
        }
        return (Xu || Zu) && Eu.push(Uj(Xu, Zu, lu ? Number(lu) : void 0, qu ? Number(qu) : void 0)), Eu
      }), []);
      return bj.test(uu.message) ? ju.slice(1) : ju
    }

    function Yj(uu) {
      return {
        frames: Oj(uu)
      }
    }
    const hj = "http-request-start",
      Dj = "http-request-end";
    var gj = class uu {
      constructor() {
        this.subscribers = []
      }
      subscribe(uu) {
        return this.subscribers.push(uu), {
          unsubscribe: () => this.unsubscribe(uu)
        }
      }
      unsubscribe(uu) {
        this.subscribers = this.subscribers.filter((Eu => Eu !== uu))
      }
      notify(uu) {
        this.subscribers.forEach((Eu => Eu(uu)))
      }
      first() {
        const Eu = new uu,
          ju = uu => {
            Eu.notify(uu), su.unsubscribe()
          },
          su = this.subscribe(ju),
          Uu = Eu.unsubscribe.bind(Eu);
        return this.withUnsubscribeOverride(Eu, Uu, ju)
      }
      takeWhile(Eu) {
        const ju = new uu,
          su = uu => {
            Eu(uu) ? ju.notify(uu) : ju.unsubscribe(su)
          };
        this.subscribe(su);
        const Uu = ju.unsubscribe.bind(ju);
        return this.withUnsubscribeOverride(ju, Uu, su)
      }
      filter(Eu) {
        const ju = new uu,
          su = uu => {
            Eu(uu) && ju.notify(uu)
          };
        this.subscribe(su);
        const Uu = ju.unsubscribe.bind(ju);
        return this.withUnsubscribeOverride(ju, Uu, su)
      }
      merge() {
        const Eu = new uu,
          ju = [];
        for (var su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
        Uu.forEach((uu => {
          const su = uu.subscribe((uu => {
            Eu.notify(uu)
          }));
          ju.push(su)
        }));
        const Xu = Eu.unsubscribeAll.bind(Eu);
        return Eu.unsubscribe = () => {
          ju.forEach((uu => uu.unsubscribe())), Xu()
        }, Eu
      }
      withUnsubscribeOverride(uu, Eu, ju) {
        return uu.unsubscribe = uu => {
          Eu(uu), this.unsubscribe(ju)
        }, uu
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Mj = function(uu) {
      return uu.TRACE = "trace", uu.DEBUG = "debug", uu.INFO = "info", uu.LOG = "log", uu.WARN = "warn", uu.ERROR = "error", uu
    }({});
    const ej = "log",
      Gj = ["trace", "debug", "info", "log", "warn", "error"];
    let pj, wj = !1;
    const Jj = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      dj = "Error",
      aj = uu => uu.map((uu => Pu(uu) ? rE(uu) : String(uu))).join(" ");

    function Pj(uu) {
      let Eu, ju, su, Uu, Zu = [];
      if (Wu(uu) && uu.error) Eu = uu.error.message, ju = uu.error.name, Zu = Oj(uu.error);
      else if ((su = Su(uu)) || Iu(uu)) {
        const {
          name: Uu,
          message: Zu
        } = uu;
        ju = null !== Uu && void 0 !== Uu ? Uu : su ? "DOMError" : "DOMException", Eu = Zu ? `${ju}: ${Zu}` : ju
      } else iu(uu) ? (ju = uu.name, Eu = uu.message, Zu = Oj(uu)) : (Pu(uu) || (Uu = ru(uu))) && (ju = Uu ? uu.constructor.name : void 0, Eu = `Non-Error exception captured with keys: ${Object.keys(uu)}`);
      return [Eu, ju, Zu]
    }

    function oj(uu) {
      const [Eu, ju, su, Uu, Zu] = uu;
      let Xu, lu, qu = [];
      const fu = pu(Eu),
        Cu = Uj(ju, "?", su, Uu);
      return Zu || !fu ? ([Xu, lu, qu] = Pj(null !== Zu && void 0 !== Zu ? Zu : Eu), 0 === qu.length && (qu = [Cu])) : fu && ([Xu, lu] = function(uu) {
        var Eu, ju;
        const su = uu.match(Jj),
          Uu = null !== (Eu = null === su || void 0 === su ? void 0 : su[1]) && void 0 !== Eu ? Eu : dj;
        return [null !== (ju = null === su || void 0 === su ? void 0 : su[2]) && void 0 !== ju ? ju : uu, Uu]
      }(Eu), qu = [Cu]), {
        value: Xu,
        type: lu,
        stackFrames: qu
      }
    }

    function kj(uu, Eu) {
      return iu(uu[0]) ? oj(uu) : {
        value: Eu(uu)
      }
    }
    const mj = uu => uu.map((uu => {
      try {
        return String(uu)
      } catch (Eu) {
        return ""
      }
    })).join(" ");
    var vj = class uu extends Ej {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = jj, this.errorSerializer = mj
      }
      initialize() {
        var Eu, ju;
        const su = this.config.consoleInstrumentation,
          Uu = (null === su || void 0 === su ? void 0 : su.serializeErrors) || !!(null === su || void 0 === su ? void 0 : su.errorSerializer);
        this.errorSerializer = Uu ? null !== (Eu = null === su || void 0 === su ? void 0 : su.errorSerializer) && void 0 !== Eu ? Eu : aj : mj;
        const Zu = null !== (ju = null === su || void 0 === su ? void 0 : su.disabledLevels) && void 0 !== ju ? ju : uu.defaultDisabledLevels,
          Xu = function(uu) {
            if (pj || (pj = new gj), !wj) {
              const Eu = null !== uu && void 0 !== uu ? uu : RE;
              Gj.forEach((uu => {
                console[uu] = function() {
                  for (var ju, su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
                  pj.notify({
                    type: "console",
                    level: uu,
                    args: Uu
                  }), null === (ju = Eu[uu]) || void 0 === ju || ju.apply(console, Uu)
                }
              })), wj = !0
            }
            return pj
          }(this.unpatchedConsole);
        this.subscription = Xu.subscribe((Eu => {
          let {
            level: ju,
            args: Uu
          } = Eu;
          if (!Zu.includes(ju)) try {
            if (ju !== Mj.ERROR || (null === su || void 0 === su ? void 0 : su.consoleErrorAsLog))
              if (ju === Mj.ERROR && (null === su || void 0 === su ? void 0 : su.consoleErrorAsLog)) {
                const {
                  value: Eu,
                  type: su,
                  stackFrames: Zu
                } = kj(Uu, this.errorSerializer);
                this.api.pushLog(Eu ? [uu.consoleErrorPrefix + Eu] : Uu, {
                  level: ju,
                  context: {
                    value: null !== Eu && void 0 !== Eu ? Eu : "",
                    type: null !== su && void 0 !== su ? su : "",
                    stackFrames: (null === Zu || void 0 === Zu ? void 0 : Zu.length) ? aj(Zu) : ""
                  }
                })
              } else this.api.pushLog(Uu, {
                level: ju
              });
            else {
              const {
                value: Eu,
                type: ju,
                stackFrames: su
              } = kj(Uu, this.errorSerializer);
              if (Eu && !ju && !su) return void this.api.pushError(new Error(uu.consoleErrorPrefix + Eu));
              this.api.pushError(new Error(uu.consoleErrorPrefix + Eu), {
                type: ju,
                stackFrames: su
              })
            }
          } catch (Xu) {
            this.logError(Xu)
          }
        }))
      }
      destroy() {
        var uu;
        null === (uu = this.subscription) || void 0 === uu || uu.unsubscribe(), this.subscription = void 0
      }
    };
    vj.defaultDisabledLevels = [Mj.DEBUG, Mj.TRACE, Mj.LOG], vj.consoleErrorPrefix = "console.error: ";
    const Kj = [];
    var Vj = class extends Ej {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = jj
      }
      initialize() {
        this.logDebug("Initializing"),
          function(uu) {
            const Eu = window.onerror;
            window.onerror = function() {
              for (var ju = arguments.length, su = new Array(ju), Uu = 0; Uu < ju; Uu++) su[Uu] = arguments[Uu];
              try {
                const {
                  value: Eu,
                  type: ju,
                  stackFrames: Uu
                } = oj(su), Zu = su[4];
                if (Eu) {
                  const su = {
                    type: ju,
                    stackFrames: Uu
                  };
                  null != Zu && (su.originalError = Zu), uu.pushError(new Error(Eu), su)
                }
              } finally {
                null === Eu || void 0 === Eu || Eu.apply(window, su)
              }
            }
          }(this.api),
          function(uu) {
            const Eu = Eu => {
              var ju;
              let su, Uu, Zu = Eu;
              if (Zu.reason) Zu = Eu.reason;
              else if (null === (ju = Eu.detail) || void 0 === ju ? void 0 : ju.reason) {
                var Xu;
                Zu = null === (Xu = Eu.detail) || void 0 === Xu ? void 0 : Xu.reason
              }
              let lu = [];
              Ku(Zu) ? (su = `Non-Error promise rejection captured with value: ${String(Zu)}`, Uu = "UnhandledRejection") : [su, Uu, lu] = Pj(Zu), su && uu.pushError(new Error(su), {
                type: Uu,
                stackFrames: lu
              })
            };
            window.addEventListener("unhandledrejection", Eu), Kj.push(Eu)
          }(this.api)
      }
    };
    const rj = "unknown";
    var Qj = class extends Ej {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = jj, this.waitingForActivation = !1, this.sendViewChangedEvent = uu => {
          var Eu;
          if (this.waitingForActivation || document.prerendering) return;
          const ju = uu.view;
          if (ju && ju.name !== (null === (Eu = this.notifiedView) || void 0 === Eu ? void 0 : Eu.name)) {
            var su, Uu, Zu;
            const uu = null !== (su = null === (Uu = this.notifiedView) || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : rj;
            this.notifiedView = ju, this.api.pushEvent(GE, {
              fromView: uu,
              toView: null !== (Zu = ju.name) && void 0 !== Zu ? Zu : rj
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
    class ij {
      t;
      o = 0;
      i = [];
      l(uu) {
        if (uu.hadRecentInput) return;
        const Eu = this.i[0],
          ju = this.i.at(-1);
        this.o && Eu && ju && uu.startTime - ju.startTime < 1e3 && uu.startTime - Eu.startTime < 5e3 ? (this.o += uu.value, this.i.push(uu)) : (this.o = uu.value, this.i = [uu]), this.t?.(uu)
      }
    }
    const Wj = () => {
        const uu = performance.getEntriesByType("navigation")[0];
        if (uu && uu.responseStart > 0 && uu.responseStart < performance.now()) return uu
      },
      Sj = uu => {
        if ("loading" === document.readyState) return "loading";
        const Eu = Wj();
        if (Eu) {
          if (uu < Eu.domInteractive) return "loading";
          if (0 === Eu.domContentLoadedEventStart || uu < Eu.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Eu.domComplete || uu < Eu.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Ij = uu => {
        const Eu = uu.nodeName;
        return 1 === uu.nodeType ? Eu.toLowerCase() : Eu.toUpperCase().replace(/^#/, "")
      },
      Fj = uu => {
        let Eu = "";
        try {
          for (; 9 !== uu?.nodeType;) {
            const ju = uu,
              su = ju.id ? "#" + ju.id : [Ij(ju), ...Array.from(ju.classList ?? []).sort()].join(".");
            if (Eu.length + su.length > 99) return Eu || su;
            if (Eu = Eu ? su + ">" + Eu : su, ju.id) break;
            uu = ju.parentNode
          }
        } catch {}
        return Eu
      },
      Bj = new WeakMap;

    function Lj(uu, Eu) {
      let ju = Bj.get(Eu);
      return ju || (ju = new WeakMap, Bj.set(Eu, ju)), ju.get(uu) || ju.set(uu, new Eu), ju.get(uu)
    }
    let tj = -1;
    const xj = () => tj,
      Tj = uu => {
        addEventListener("pageshow", (Eu => {
          Eu.persisted && (tj = Eu.timeStamp, uu(Eu))
        }), !0)
      },
      Hj = (uu, Eu, ju, su) => {
        let Uu, Zu;
        return Xu => {
          Eu.value >= 0 && (Xu || su) && (Zu = Eu.value - (Uu ?? 0), (Zu || void 0 === Uu) && (Uu = Eu.value, Eu.delta = Zu, Eu.rating = ((uu, Eu) => uu > Eu[1] ? "poor" : uu > Eu[0] ? "needs-improvement" : "good")(Eu.value, ju), uu(Eu)))
        }
      },
      Aj = uu => {
        requestAnimationFrame((() => requestAnimationFrame((() => uu()))))
      },
      nj = () => Wj()?.activationStart ?? 0;
    let yj = -1;
    const zj = new Set,
      Rj = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      us = uu => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === uu.type)
            for (const uu of zj) uu();
          isFinite(yj) || (yj = "visibilitychange" === uu.type ? uu.timeStamp : 0, removeEventListener("prerenderingchange", us, !0))
        }
      },
      Es = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (yj = 1 / 0), yj < 0) {
          const uu = nj(),
            Eu = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Eu => "hidden" === Eu.name && Eu.startTime >= uu))?.startTime;
          yj = Eu ?? Rj(), addEventListener("visibilitychange", us, !0), addEventListener("prerenderingchange", us, !0), Tj((() => {
            setTimeout((() => {
              yj = Rj()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return yj
          },
          onHidden(uu) {
            zj.add(uu)
          }
        }
      },
      ss = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0,
          Xu = arguments.length > 6 ? arguments[6] : void 0;
        const lu = Wj(),
          qu = lu?.navigationId || 0;
        let fu = "navigate";
        return ju ? fu = ju : xj() >= 0 ? fu = "back-forward-cache" : lu && (document.prerendering || nj() > 0 ? fu = "prerender" : document.wasDiscarded ? fu = "restore" : lu.type && (fu = lu.type.replace(/_/g, "-"))), {
          name: uu,
          value: Eu,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: fu,
          navigationId: su || qu,
          navigationInteractionId: Uu,
          navigationURL: Zu || lu?.name,
          navigationStartTime: Xu || 0
        }
      },
      Us = function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const su = uu.filter((uu => PerformanceObserver.supportedEntryTypes.includes(uu)));
          if (su.length > 0) {
            const uu = new PerformanceObserver((uu => {
              queueMicrotask((() => {
                const ju = uu.getEntries();
                su.length > 1 && ju.sort(((uu, Eu) => uu.startTime + uu.duration - (Eu.startTime + Eu.duration))), Eu(ju)
              }))
            }));
            for (const Eu of su) uu.observe({
              type: Eu,
              buffered: !0,
              ...ju
            });
            return uu
          }
        } catch {}
      },
      Zs = uu => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && uu && uu.reportSoftNavs,
      Xs = (uu, Eu) => {
        if (uu.set(Eu.navigationId, Eu), uu.size > 2) {
          const Eu = uu.keys().next().value;
          void 0 !== Eu && uu.delete(Eu)
        }
      },
      ls = uu => {
        let Eu = !1;
        return () => {
          Eu || (uu(), Eu = !0)
        }
      };
    class qs {
      u
    }
    const fs = uu => {
        document.prerendering ? addEventListener("prerenderingchange", uu, !0) : uu()
      },
      Cs = [1800, 3e3],
      bs = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ju = Zs(Eu);
        fs((() => {
          const su = Lj(Eu, qs),
            Uu = Es();
          let Zu, Xu = ss("FCP");
          const lu = Us(["paint"], (uu => {
            for (const Eu of uu) "first-contentful-paint" === Eu.name && (lu.disconnect(), Eu.startTime < Uu.firstHiddenTime && (Xu.value = Math.max(Eu.startTime - nj(), 0), Xu.entries.push(Eu), Xu.navigationId = Eu.navigationId || Xu.navigationId, Zu(!0)))
          }));
          lu && (Zu = Hj(uu, Xu, Cs, Eu.reportAllChanges), Tj((ju => {
            Xu = ss("FCP", -1, "back-forward-cache", Xu.navigationId, Xu.navigationInteractionId, Xu.navigationURL, xj()), Zu = Hj(uu, Xu, Cs, Eu.reportAllChanges), Aj((() => {
              Xu.value = performance.now() - ju.timeStamp, Zu(!0)
            }))
          }))), ju && Us(["soft-navigation"], (ju => {
            ju.forEach((ju => {
              su.u && ju.navigationId && Xs(su.u, ju);
              const Uu = Math.max((ju.presentationTime || ju.paintTime || 0) - ju.startTime, 0);
              Xu = ss("FCP", Uu, "soft-navigation", ju.navigationId, ju.interactionId, ju.name, ju.startTime), Zu = Hj(uu, Xu, Cs, Eu.reportAllChanges), Zu(!0)
            }))
          }), Eu)
        }))
      },
      cs = [.1, .25],
      Ns = uu => uu.find((uu => 1 === uu.node?.nodeType)) || uu[0];
    let Os = 0,
      Ys = 1 / 0,
      hs = 0;
    const Ds = uu => {
      for (const Eu of uu) Eu.interactionId && (Ys = Math.min(Ys, Eu.interactionId), hs = Math.max(hs, Eu.interactionId), Os = hs ? (hs - Ys) / 7 + 1 : 0)
    };
    let gs;
    const Ms = () => gs ? Os : performance.interactionCount ?? 0;
    class es {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Ms() - this.h
      }
      D() {
        this.h = Ms(), this.v.length = 0, this.p.clear()
      }
      S(uu) {
        const Eu = this.T(),
          ju = Math.min(this.v.length - 1, Math.floor(Eu / 50));
        return !Eu || -1 !== ju || "soft-navigation" !== uu && "back-forward-cache" !== uu ? this.v[ju] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(uu) {
        if (this.m?.(uu), !uu.interactionId) return;
        const Eu = this.v.at(-1);
        let ju = this.p.get(uu.interactionId);
        if (ju || this.v.length < 10 || uu.duration > Eu.k) {
          if (ju ? uu.duration > ju.k ? (ju.entries = [uu], ju.k = uu.duration) : uu.duration === ju.k && uu.startTime === ju.entries[0].startTime && ju.entries.push(uu) : (ju = {
              id: uu.interactionId,
              entries: [uu],
              k: uu.duration
            }, this.p.set(ju.id, ju), this.v.push(ju)), this.v.sort(((uu, Eu) => Eu.k - uu.k)), this.v.length > 10) {
            const uu = this.v.splice(10);
            for (const Eu of uu) this.p.delete(Eu.id)
          }
          this.M?.(ju)
        }
      }
    }
    const Gs = uu => {
        const Eu = "requestIdleCallback" in globalThis ? 1e3 : 0,
          ju = globalThis.requestIdleCallback || setTimeout,
          su = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) uu();
        else {
          const Uu = ls(uu);
          let Zu = -1;
          const Xu = () => {
            su(Zu), Uu()
          };
          addEventListener("visibilitychange", Xu, {
            once: !0,
            capture: !0
          }), Zu = ju((() => {
            removeEventListener("visibilitychange", Xu, {
              capture: !0
            }), Uu()
          }), {
            timeout: Eu
          })
        }
      },
      ps = [200, 500],
      ws = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ju = Lj(Eu = Object.assign({}, Eu), es);
        let su = [],
          Uu = [],
          Zu = 0;
        const Xu = new WeakMap,
          lu = new WeakMap;
        let qu = !1;
        const fu = () => {
            qu || (qu = !0, Gs(Cu))
          },
          Cu = () => {
            const uu = new Set(ju.v.map((uu => Xu.get(uu.entries[0])))),
              Eu = Uu.length - 10;
            Uu = Uu.filter(((ju, su) => su >= Eu || uu.has(ju)));
            const lu = new Set;
            for (const ju of Uu) {
              const uu = bu(ju.startTime, ju.processingEnd);
              for (const Eu of uu) lu.add(Eu)
            }
            const fu = su.length - 10;
            su = su.filter(((uu, Eu) => lu.has(uu) || Eu >= fu && uu.startTime > Zu)), qu = !1
          };
        ju.m = uu => {
          const ju = uu.startTime + uu.duration;
          let su;
          Zu = Math.max(Zu, uu.processingEnd);
          for (let Zu = Uu.length - 1; Zu >= 0; Zu--) {
            const Xu = Uu[Zu];
            if (Math.abs(ju - Xu.renderTime) <= 8) {
              su = Xu, su.startTime = Math.min(uu.startTime, su.startTime), su.processingStart = Math.min(uu.processingStart, su.processingStart), su.processingEnd = Math.max(uu.processingEnd, su.processingEnd), Eu.includeProcessedEventEntries && su.entries.push(uu);
              break
            }
          }
          su || (su = {
            startTime: uu.startTime,
            processingStart: uu.processingStart,
            processingEnd: uu.processingEnd,
            renderTime: ju,
            entries: Eu.includeProcessedEventEntries ? [uu] : []
          }, Uu.push(su)), uu.interactionId && Xu.set(uu, su), fu()
        }, ju.M = uu => {
          if (!lu.get(uu)) {
            const ju = uu.entries.find((uu => uu.target))?.target;
            if (ju) {
              const su = Eu.generateTarget?.(ju) ?? Fj(ju);
              lu.set(uu, su)
            } else {
              const Eu = uu.entries.find((uu => uu.targetSelector))?.targetSelector;
              Eu && lu.set(uu, Eu)
            }
          }
        };
        const bu = (uu, Eu) => {
          const ju = [];
          for (const Uu of su)
            if (!(Uu.startTime + Uu.duration < uu)) {
              if (Uu.startTime > Eu) break;
              ju.push(Uu)
            } return ju
        };
        Us(["long-animation-frame"], (uu => {
            su = su.concat(uu), fu()
          }), Eu),
          function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const ju = Es();
            fs((() => {
              "interactionCount" in performance || gs || (gs = Us(["event"], Ds, {
                durationThreshold: 0
              }));
              let su, Uu = ss("INP");
              const Zu = Lj(Eu, es),
                Xu = (ju, Xu, lu, qu, fu) => {
                  Zu.D(), Uu = ss("INP", -1, ju, Xu, lu, qu, fu), su = Hj(uu, Uu, ps, Eu.reportAllChanges)
                },
                lu = () => {
                  const uu = Zu.S(Uu.navigationType);
                  uu && uu.k !== Uu.value && (Uu.value = uu.k, Uu.entries = uu.entries, su())
                },
                qu = uu => {
                  lu(), su(!0), Xu("soft-navigation", uu.navigationId, uu.interactionId, uu.name, uu.startTime)
                },
                fu = function(uu) {
                  let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Gs((() => {
                    for (const Eu of uu) "soft-navigation" !== Eu.entryType ? Zu.l(Eu) : qu(Eu);
                    lu(), Eu && su(!0)
                  }))
                },
                Cu = ["event", "first-input"];
              Zs(Eu) && Cu.push("soft-navigation");
              const bu = Us(Cu, fu, {
                ...Eu,
                durationThreshold: Eu.durationThreshold ?? 40
              });
              su = Hj(uu, Uu, ps, Eu.reportAllChanges), bu && (ju.onHidden((() => {
                fu(bu.takeRecords(), !0)
              })), Tj((() => {
                Xu("back-forward-cache", Uu.navigationId, Uu.navigationInteractionId, Uu.navigationURL, xj())
              })))
            }))
          }((Eu => {
            uu((uu => {
              if (0 === uu.entries.length) {
                const Eu = uu.navigationStartTime || 0,
                  ju = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: uu.value,
                    loadState: Sj(Eu)
                  };
                return Object.assign(uu, {
                  attribution: ju
                })
              }
              const Eu = uu.entries[0],
                su = Xu.get(Eu),
                Uu = Math.max(su.processingStart, Eu.startTime),
                Zu = Math.max(Eu.startTime + Eu.duration, Uu),
                qu = Math.min(su.processingEnd, Zu),
                fu = su.entries.sort(((uu, Eu) => uu.processingStart - Eu.processingStart)),
                Cu = bu(Eu.startTime, qu),
                cu = ju.p.get(Eu.interactionId),
                Nu = {
                  interactionTarget: lu.get(cu),
                  interactionType: Eu.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Eu.startTime,
                  nextPaintTime: Zu,
                  processedEventEntries: fu,
                  longAnimationFrameEntries: Cu,
                  inputDelay: Uu - Eu.startTime,
                  processingDuration: qu - Uu,
                  presentationDelay: Zu - qu,
                  loadState: Sj(Eu.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (uu => {
                const Eu = uu.interactionTime,
                  ju = uu.nextPaintTime;
                if (!uu.longAnimationFrameEntries?.length || !Eu || !ju) return;
                const su = uu.inputDelay,
                  Uu = uu.processingDuration;
                let Zu, Xu, lu = 0,
                  qu = 0,
                  fu = 0,
                  Cu = 0;
                for (const Nu of uu.longAnimationFrameEntries) {
                  qu = qu + Nu.startTime + Nu.duration - Nu.styleAndLayoutStart;
                  for (const uu of Nu.scripts) {
                    const ju = uu.startTime + uu.duration;
                    if (ju < Eu) continue;
                    const fu = ju - Math.max(Eu, uu.startTime),
                      bu = uu.duration ? fu / uu.duration * uu.forcedStyleAndLayoutDuration : 0;
                    lu += fu - bu, qu += bu, fu > Cu && (Xu = uu.startTime < Eu + su ? "input-delay" : uu.startTime >= Eu + su + Uu ? "presentation-delay" : "processing-duration", Zu = uu, Cu = fu)
                  }
                }
                const bu = uu.longAnimationFrameEntries.at(-1),
                  cu = bu ? bu.startTime + bu.duration : 0;
                cu >= Eu + su + Uu && (fu = ju - cu), Zu && Xu && (uu.longestScript = {
                  entry: Zu,
                  subpart: Xu,
                  intersectingDuration: Cu
                }), uu.totalScriptDuration = lu, uu.totalStyleAndLayoutDuration = qu, uu.totalPaintDuration = fu, uu.totalUnattributedDuration = ju - Eu - lu - qu - fu
              })(Nu), Object.assign(uu, {
                attribution: Nu
              })
            })(Eu))
          }), Eu)
      };
    class ds {
      m;
      u;
      l(uu) {
        this.m?.(uu)
      }
    }
    const as = [2500, 4e3];
    let Ps = 50;
    const os = [];
    Us(["resource"], (uu => {
      for (const Eu of uu) os.push(Eu), os.length > Ps && os.shift()
    }));
    const ks = [800, 1800],
      ms = uu => {
        document.prerendering ? fs((() => ms(uu))) : "complete" !== document.readyState ? addEventListener("load", (() => ms(uu)), !0) : setTimeout(uu)
      },
      vs = "load_state",
      Ks = "time_to_first_byte";
    var Vs = class {
        constructor(uu, Eu) {
          this.corePushMeasurement = uu, this.webVitalConfig = Eu
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var uu;
          ! function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ju = Lj(Eu = Object.assign({}, Eu), ij),
              su = new WeakMap;
            ju.t = uu => {
                if (uu?.sources?.length) {
                  const ju = Ns(uu.sources),
                    Uu = ju?.node;
                  if (Uu) {
                    const uu = Eu.generateTarget?.(Uu) ?? Fj(Uu);
                    su.set(ju, uu)
                  }
                }
              },
              function(uu) {
                let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const ju = Es();
                bs(ls((() => {
                  let su, Uu = ss("CLS", 0);
                  const Zu = Lj(Eu, ij),
                    Xu = (ju, Xu, lu, qu, fu) => {
                      Uu = ss("CLS", 0, ju, Xu, lu, qu, fu), Zu.o = 0, su = Hj(uu, Uu, cs, Eu.reportAllChanges)
                    },
                    lu = function() {
                      let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Zu.o > Uu.value && (Uu.value = Zu.o, Uu.entries = Zu.i), su(uu)
                    },
                    qu = uu => {
                      lu(!0), Xu("soft-navigation", uu.navigationId, uu.interactionId, uu.name, uu.startTime)
                    },
                    fu = uu => {
                      for (const Eu of uu) "soft-navigation" !== Eu.entryType ? Zu.l(Eu) : qu(Eu);
                      lu()
                    },
                    Cu = ["layout-shift"];
                  Zs(Eu) && Cu.push("soft-navigation");
                  const bu = Us(Cu, fu);
                  bu && (su = Hj(uu, Uu, cs, Eu.reportAllChanges), ju.onHidden((() => {
                    fu(bu.takeRecords()), su(!0)
                  })), Tj((() => {
                    Xu("back-forward-cache", Uu.navigationId, Uu.navigationInteractionId, Uu.navigationURL, xj()), Aj(su)
                  })), setTimeout(su))
                })))
              }((Eu => {
                uu((uu => {
                  let Eu = {};
                  if (uu.entries.length) {
                    const ju = uu.entries.reduce(((uu, Eu) => uu.value > Eu.value ? uu : Eu));
                    if (ju?.sources?.length) {
                      const uu = Ns(ju.sources);
                      uu && (Eu = {
                        largestShiftTarget: su.get(uu),
                        largestShiftTime: ju.startTime,
                        largestShiftValue: ju.value,
                        largestShiftSource: uu,
                        largestShiftEntry: ju,
                        loadState: Sj(ju.startTime)
                      })
                    }
                  }
                  return Object.assign(uu, {
                    attribution: Eu
                  })
                })(Eu))
              }), Eu)
          }((uu => {
            const {
              loadState: Eu,
              largestShiftValue: ju,
              largestShiftTime: su,
              largestShiftTarget: Uu
            } = uu.attribution, Zu = this.buildInitialValues(uu);
            this.addIfPresent(Zu, "largest_shift_value", ju), this.addIfPresent(Zu, "largest_shift_time", su);
            const Xu = this.buildInitialContext(uu);
            this.addIfPresent(Xu, vs, Eu), this.addIfPresent(Xu, "largest_shift_target", Uu), this.pushMeasurement(Zu, Xu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureFCP() {
          var uu;
          ! function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ju = Lj(Eu = Object.assign({}, Eu), qs);
            Zs(Eu) && (ju.u = new Map), bs((Eu => {
              uu((uu => {
                let Eu = {
                  timeToFirstByte: 0,
                  firstByteToFCP: uu.value,
                  loadState: Sj(xj())
                };
                if ("soft-navigation" !== uu.navigationType) {
                  if (uu.entries.length) {
                    const ju = Wj(),
                      su = uu.entries.at(-1);
                    if (ju) {
                      const Uu = ju.responseStart,
                        Zu = ju.activationStart || 0,
                        Xu = Math.max(0, Uu - Zu);
                      Eu = {
                        timeToFirstByte: Xu,
                        firstByteToFCP: uu.value - Xu,
                        loadState: Sj(uu.entries[0].startTime),
                        navigationEntry: ju,
                        fcpEntry: su
                      }
                    }
                  }
                } else {
                  const su = ju.u?.get(uu.navigationId);
                  su && (Eu = {
                    timeToFirstByte: 0,
                    firstByteToFCP: uu.value,
                    loadState: "complete",
                    navigationEntry: su
                  })
                }
                return Object.assign(uu, {
                  attribution: Eu
                })
              })(Eu))
            }), Eu)
          }((uu => {
            const {
              firstByteToFCP: Eu,
              timeToFirstByte: ju,
              loadState: su
            } = uu.attribution, Uu = this.buildInitialValues(uu);
            this.addIfPresent(Uu, "first_byte_to_fcp", Eu), this.addIfPresent(Uu, Ks, ju);
            const Zu = this.buildInitialContext(uu);
            this.addIfPresent(Zu, vs, su), this.pushMeasurement(Uu, Zu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureINP() {
          var uu;
          ws((uu => {
            var Eu;
            const {
              interactionTime: ju,
              presentationDelay: su,
              inputDelay: Uu,
              processingDuration: Zu,
              nextPaintTime: Xu,
              loadState: lu,
              interactionTarget: qu,
              interactionType: fu,
              totalScriptDuration: Cu,
              totalStyleAndLayoutDuration: bu,
              totalPaintDuration: cu,
              totalUnattributedDuration: Nu,
              longestScript: Ou
            } = uu.attribution, Yu = this.buildInitialValues(uu);
            this.addIfPresent(Yu, "interaction_time", ju), this.addIfPresent(Yu, "presentation_delay", su), this.addIfPresent(Yu, "input_delay", Uu), this.addIfPresent(Yu, "processing_duration", Zu), this.addIfPresent(Yu, "next_paint_time", Xu), this.addNumberIfDefined(Yu, "total_script_duration", Cu), this.addNumberIfDefined(Yu, "total_style_and_layout_duration", bu), this.addNumberIfDefined(Yu, "total_paint_duration", cu), this.addNumberIfDefined(Yu, "total_unattributed_duration", Nu), this.addNumberIfDefined(Yu, "longest_script_intersecting_duration", null === Ou || void 0 === Ou ? void 0 : Ou.intersectingDuration);
            const hu = this.buildInitialContext(uu);
            this.addIfPresent(hu, vs, lu), this.addIfPresent(hu, "interaction_target", qu), this.addIfPresent(hu, "interaction_type", fu), this.addIfPresent(hu, "longest_script_subpart", null === Ou || void 0 === Ou ? void 0 : Ou.subpart), this.addIfPresent(hu, "longest_script_invoker_type", null === Ou || void 0 === Ou ? void 0 : Ou.entry.invokerType), (null === (Eu = this.webVitalConfig) || void 0 === Eu ? void 0 : Eu.trackAttributionSources) && (this.addIfPresent(hu, "longest_script_invoker", null === Ou || void 0 === Ou ? void 0 : Ou.entry.invoker), this.addIfPresent(hu, "longest_script_source_url", null === Ou || void 0 === Ou ? void 0 : Ou.entry.sourceURL), this.addIfPresent(hu, "longest_script_source_function_name", null === Ou || void 0 === Ou ? void 0 : Ou.entry.sourceFunctionName), this.addIfPresent(hu, "longest_script_source_char_position", void 0 !== (null === Ou || void 0 === Ou ? void 0 : Ou.entry.sourceCharPosition) ? String(Ou.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Yu, hu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureLCP() {
          var uu;
          ! function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Eu = Object.assign({}, Eu)).resourceBufferSize && (Ps = Eu.resourceBufferSize);
            const ju = Lj(Eu, ds),
              su = new WeakMap;
            Zs(Eu) && (ju.u = new Map), ju.m = uu => {
                const ju = uu.element;
                if (ju) {
                  const Uu = Eu.generateTarget?.(ju) ?? Fj(ju);
                  su.set(uu, Uu)
                } else uu.id && su.set(uu, `#${uu.id}`)
              },
              function(uu) {
                let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  ju = !1;
                const su = Zs(Eu);
                fs((() => {
                  let Uu, Zu = Es(),
                    Xu = ss("LCP");
                  const lu = Lj(Eu, ds),
                    qu = (su, lu, qu, fu, Cu) => {
                      Xu = ss("LCP", -1, su, lu, qu, fu, Cu), Uu = Hj(uu, Xu, as, Eu.reportAllChanges), ju = !1, "soft-navigation" === su && (Zu = Es(!0))
                    },
                    fu = uu => {
                      lu.u && uu.navigationId && Xs(lu.u, uu), ju || Uu(!0), qu("soft-navigation", uu.navigationId, uu.interactionId, uu.name, uu.startTime);
                      const Eu = uu.getLargestInteractionContentfulPaint?.();
                      Eu && Cu([Eu])
                    },
                    Cu = uu => {
                      Eu.reportAllChanges || su || (uu = uu.slice(-1));
                      for (const Eu of uu) {
                        if (!Eu) continue;
                        if ("soft-navigation" === Eu.entryType) {
                          fu(Eu);
                          continue
                        }
                        let uu = 0,
                          ju = [],
                          su = Eu.startTime;
                        if ("largest-contentful-paint" === Eu.entryType) uu = Math.max(Eu.startTime - nj(), 0), lu.l(Eu), ju = [Eu];
                        else if ("interaction-contentful-paint" === Eu.entryType) {
                          const Uu = Eu;
                          if (!Xu.navigationId) continue;
                          if ("interactionId" in Uu && Uu.interactionId != Xu.navigationInteractionId) continue;
                          su = Uu.largestContentfulPaint?.renderTime || 0, uu = Math.max(su - Eu.startTime, 0), Uu.largestContentfulPaint && (lu.l(Uu.largestContentfulPaint), ju = [Uu.largestContentfulPaint])
                        }
                        su < Zu.firstHiddenTime && (Xu.value = uu, Xu.entries = ju, Uu())
                      }
                    },
                    bu = ["largest-contentful-paint"];
                  su && bu.push("interaction-contentful-paint", "soft-navigation");
                  const cu = Us(bu, Cu);
                  if (cu) {
                    Uu = Hj(uu, Xu, as, Eu.reportAllChanges);
                    const Zu = ["keydown", "click", "visibilitychange"],
                      lu = uu => {
                        if (uu.isTrusted && !ju) {
                          const uu = Xu.id;
                          Gs((() => {
                            if (!ju) {
                              if (!su) {
                                cu.disconnect();
                                for (const uu of Zu) removeEventListener(uu, lu, {
                                  capture: !0
                                })
                              }
                              uu === Xu.id && (ju = !0, Uu(!0))
                            }
                          }))
                        }
                      };
                    for (const uu of Zu) addEventListener(uu, lu, {
                      capture: !0
                    });
                    Tj((su => {
                      qu("back-forward-cache", Xu.navigationId, Xu.navigationInteractionId, Xu.navigationURL, xj()), Uu = Hj(uu, Xu, as, Eu.reportAllChanges), Aj((() => {
                        Xu.value = performance.now() - su.timeStamp, ju = !0, Uu(!0)
                      }))
                    }))
                  }
                }))
              }((Eu => {
                uu((uu => {
                  let Eu = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: uu.value
                  };
                  if (uu.entries.length) {
                    const Uu = uu.entries.at(-1),
                      Zu = uu => uu.name === Uu.url && (uu.requestStart || uu.startTime) <= Uu.startTime,
                      Xu = Uu.url && (os.findLast(Zu) || performance.getEntriesByType("resource").findLast(Zu));
                    let lu;
                    Eu.target = su.get(Uu), Eu.lcpEntry = Uu, Uu.url && (Eu.url = Uu.url), Xu && (Eu.lcpResourceEntry = Xu);
                    let qu = 0,
                      fu = 0;
                    if ("soft-navigation" !== uu.navigationType ? (lu = Wj(), qu = lu?.activationStart ?? 0, fu = lu?.responseStart ?? 0) : (qu = uu.navigationStartTime || 0, lu = ju.u?.get(uu.navigationId)), lu) {
                      const ju = Math.max(0, fu - qu),
                        su = Math.max(ju, Xu ? (Xu.requestStart || Xu.startTime) - qu : 0),
                        Uu = Math.min(uu.value, Math.max(su, Xu ? Xu.responseEnd - qu : 0));
                      Eu = {
                        ...Eu,
                        timeToFirstByte: ju,
                        resourceLoadDelay: su - ju,
                        resourceLoadDuration: Uu - su,
                        elementRenderDelay: uu.value - Uu,
                        navigationEntry: lu
                      }
                    }
                  }
                  return Object.assign(uu, {
                    attribution: Eu
                  })
                })(Eu))
              }), Eu)
          }((uu => {
            var Eu;
            const {
              elementRenderDelay: ju,
              resourceLoadDelay: su,
              resourceLoadDuration: Uu,
              timeToFirstByte: Zu,
              target: Xu,
              url: lu,
              lcpResourceEntry: qu
            } = uu.attribution, fu = this.buildInitialValues(uu);
            this.addIfPresent(fu, "element_render_delay", ju), this.addIfPresent(fu, "resource_load_delay", su), this.addIfPresent(fu, "resource_load_duration", Uu), this.addIfPresent(fu, Ks, Zu);
            const Cu = this.buildInitialContext(uu);
            this.addIfPresent(Cu, "element", Xu), (null === (Eu = this.webVitalConfig) || void 0 === Eu ? void 0 : Eu.trackAttributionSources) && (this.addIfPresent(Cu, "resource_url", lu), this.addIfPresent(Cu, "resource_delivery_type", null === qu || void 0 === qu ? void 0 : qu.deliveryType), this.addIfPresent(Cu, "resource_initiator_type", null === qu || void 0 === qu ? void 0 : qu.initiatorType)), this.pushMeasurement(fu, Cu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureTTFB() {
          var uu;
          ! function(uu) {
            ! function(uu) {
              let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const ju = Zs(Eu);
              let su = ss("TTFB"),
                Uu = Hj(uu, su, ks, Eu.reportAllChanges);
              ms((() => {
                const Zu = Wj();
                if (Zu) {
                  const Xu = Zu.responseStart;
                  su.value = Math.max(Xu - nj(), 0), su.entries = [Zu], Uu(!0), Tj((() => {
                    su = ss("TTFB", 0, "back-forward-cache", su.navigationId, su.navigationInteractionId, su.navigationURL, xj()), Uu = Hj(uu, su, ks, Eu.reportAllChanges), Uu(!0)
                  })), ju && Us(["soft-navigation"], (ju => {
                    ju.forEach((ju => {
                      ju.navigationId && (su = ss("TTFB", 0, "soft-navigation", ju.navigationId, ju.interactionId, ju.name, ju.startTime), su.entries = [ju], Uu = Hj(uu, su, ks, Eu.reportAllChanges), Uu(!0))
                    }))
                  }), Eu)
                }
              }))
            }((Eu => {
              uu((uu => {
                const Eu = uu.entries[0];
                let ju = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Eu
                };
                if (uu.entries.length && Eu instanceof PerformanceNavigationTiming) {
                  const su = Eu.activationStart || 0,
                    Uu = Math.max((Eu.workerStart || Eu.fetchStart || 0) - su, 0),
                    Zu = Math.max(Eu.domainLookupStart - su, 0),
                    Xu = Math.max(Eu.connectStart - su, 0),
                    lu = Math.max(Eu.connectEnd - su, 0);
                  ju = {
                    waitingDuration: Uu,
                    cacheDuration: Zu - Uu,
                    dnsDuration: Xu - Zu,
                    connectionDuration: lu - Xu,
                    requestDuration: uu.value - lu,
                    navigationEntry: Eu
                  }
                }
                return Object.assign(uu, {
                  attribution: ju
                })
              })(Eu))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((uu => {
            const {
              dnsDuration: Eu,
              connectionDuration: ju,
              requestDuration: su,
              waitingDuration: Uu,
              cacheDuration: Zu
            } = uu.attribution, Xu = this.buildInitialValues(uu);
            this.addIfPresent(Xu, "dns_duration", Eu), this.addIfPresent(Xu, "connection_duration", ju), this.addIfPresent(Xu, "request_duration", su), this.addIfPresent(Xu, "waiting_duration", Uu), this.addIfPresent(Xu, "cache_duration", Zu);
            const lu = this.buildInitialContext(uu);
            this.pushMeasurement(Xu, lu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        buildInitialValues(uu) {
          return {
            [uu.name.toLowerCase()]: uu.value,
            delta: uu.delta
          }
        }
        buildInitialContext(uu) {
          var Eu;
          const ju = null !== (Eu = uE("com.grafana.faro.lastNavigationId", yu)) && void 0 !== Eu ? Eu : rj;
          return {
            id: uu.id,
            rating: uu.rating,
            navigation_type: uu.navigationType,
            navigation_entry_id: ju
          }
        }
        pushMeasurement(uu, Eu) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: uu
          }, {
            context: Eu
          })
        }
        addIfPresent(uu, Eu, ju) {
          ju && (uu[Eu] = ju)
        }
        addNumberIfDefined(uu, Eu, ju) {
          void 0 !== ju && (uu[Eu] = ju)
        }
      },
      rs = class extends Ej {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = jj
        }
        initialize() {
          this.logDebug("Initializing"), new Vs(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Qs = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function is() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Eu of uu)
        if ("traceparent" === Eu.name) {
          if (!Qs.test(Eu.description)) continue;
          const [, uu, ju] = Eu.description.split("-");
          if (null != uu && null != ju) return {
            traceId: uu,
            spanId: ju
          };
          break
        }
    }

    function Ws(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: ju,
        monoNow: su
      } = Eu;
      return Math.min(ju, ju - (su - uu))
    }

    function Ss(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [ju, su] of Object.entries(Eu)) {
        const Eu = uu[ju];
        return null != Eu && (ku(su) ? su.includes(Eu) : Eu === su)
      }
      return !0
    }

    function Is(uu) {
      const {
        connectEnd: Eu,
        connectStart: ju,
        decodedBodySize: su,
        domainLookupEnd: Uu,
        domainLookupStart: Zu,
        duration: Xu,
        encodedBodySize: lu,
        fetchStart: qu,
        initiatorType: fu,
        name: Cu,
        nextHopProtocol: bu,
        redirectEnd: cu,
        redirectStart: Nu,
        renderBlockingStatus: Ou,
        requestStart: Yu,
        responseEnd: hu,
        responseStart: Du,
        responseStatus: gu,
        secureConnectionStart: Mu,
        transferSize: eu,
        workerStart: Gu
      } = uu;
      return {
        name: Cu,
        httpHost: Bs(Cu),
        duration: Ls(Xu),
        tcpHandshakeTime: Ls(Eu - ju),
        dnsLookupTime: Ls(Uu - Zu),
        tlsNegotiationTime: Ls(Eu - Mu),
        responseStatus: Ls(gu),
        redirectTime: Ls(cu - Nu),
        requestTime: Ls(Du - Yu),
        responseTime: Ls(hu - Du),
        fetchTime: Ls(hu - qu),
        serviceWorkerTime: Ls(Gu > 0 ? qu - Gu : 0),
        decodedBodySize: Ls(su),
        encodedBodySize: Ls(lu),
        cacheHitStatus: function() {
          let uu = "fullLoad";
          0 === eu ? su > 0 && (uu = "cache") : null != gu ? 304 === gu && (uu = "conditionalFetch") : lu > 0 && eu < lu && (uu = "conditionalFetch");
          return uu
        }(),
        renderBlockingStatus: Ls(Ou),
        protocol: bu,
        initiatorType: fu,
        visibilityState: document.visibilityState,
        ttfb: Ls(Du - Yu),
        transferSize: Ls(eu)
      }
    }

    function Fs(uu) {
      const {
        activationStart: Eu,
        domComplete: ju,
        domContentLoadedEventEnd: su,
        domContentLoadedEventStart: Uu,
        domInteractive: Zu,
        fetchStart: Xu,
        loadEventEnd: lu,
        loadEventStart: qu,
        responseStart: fu,
        type: Cu
      } = uu, bu = function() {
        var uu;
        return null != (null === (uu = performance.timing) || void 0 === uu ? void 0 : uu.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return CE(CE({}, Is(uu)), {}, {
        pageLoadTime: Ls(ju - Xu),
        documentParsingTime: Ls(bu ? Zu - bu : null),
        domProcessingTime: Ls(ju - Zu),
        domContentLoadHandlerTime: Ls(su - Uu),
        onLoadTime: Ls(lu - qu),
        ttfb: Ls(Math.max(fu - (null !== Eu && void 0 !== Eu ? Eu : 0), 0)),
        type: Cu
      })
    }

    function Bs(uu) {
      try {
        return new URL(uu).host || rj
      } catch (Eu) {
        return rj
      }
    }

    function Ls(uu) {
      return null == uu ? rj : "number" === typeof uu ? Math.round(uu > 0 ? uu : 0).toString() : uu.toString()
    }
    const ts = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function xs(uu, Eu, ju, su, Uu, Zu, Xu) {
      try {
        var lu = uu[Zu](Xu),
          qu = lu.value
      } catch (uu) {
        return void ju(uu)
      }
      lu.done ? Eu(qu) : Promise.resolve(qu).then(su, Uu)
    }

    function Ts(uu) {
      return function() {
        var Eu = this,
          ju = arguments;
        return new Promise((function(su, Uu) {
          var Zu = uu.apply(Eu, ju);

          function Xu(uu) {
            xs(Zu, su, Uu, Xu, lu, "next", uu)
          }

          function lu(uu) {
            xs(Zu, su, Uu, Xu, lu, "throw", uu)
          }
          Xu(void 0)
        }))
      }
    }
    const Hs = new gj;
    var As = class extends Ej {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = jj
      }
      initialize() {
        var uu = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Eu = !1;
        const ju = () => {
          ! function(uu) {
            if ("complete" === document.readyState) uu();
            else {
              const Eu = () => {
                "complete" === document.readyState && (uu(), document.removeEventListener("readystatechange", Eu))
              };
              document.addEventListener("readystatechange", Eu)
            }
          }(Ts((function*() {
            if (Eu) return;
            const ju = uu.api.pushEvent,
              {
                faroNavigationId: su
              } = yield function(uu) {
                let Eu;
                const ju = new Promise((uu => {
                  Eu = uu
                }));
                return new PerformanceObserver((ju => {
                  var su;
                  const [Uu] = ju.getEntries();
                  if (null == Uu || Au(Uu.name)) return;
                  const Zu = Uu.toJSON();
                  let Xu = is(null === Zu || void 0 === Zu ? void 0 : Zu.serverTiming);
                  const lu = null !== (su = uE("com.grafana.faro.lastNavigationId", yu)) && void 0 !== su ? su : rj,
                    qu = CE(CE({}, Fs(Zu)), {}, {
                      faroNavigationId: DE(),
                      faroPreviousNavigationId: lu
                    });
                  EE("com.grafana.faro.lastNavigationId", qu.faroNavigationId, yu), uu("faro.performance.navigation", qu, void 0, {
                    spanContext: Xu,
                    timestampOverwriteMs: Ws(Zu.startTime)
                  }), Eu(qu)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), ju
              }(ju);
            Eu || null == su || function(uu, Eu, ju, su) {
              const Uu = su.trackResources;
              new PerformanceObserver((su => {
                const Zu = su.getEntries(),
                  Xu = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const lu of Zu) {
                  if (Au(lu.name)) continue;
                  null === ju || void 0 === ju || ju.notify({
                    type: "resource"
                  });
                  const su = lu.toJSON();
                  let Zu = is(null === su || void 0 === su ? void 0 : su.serverTiming);
                  (null == Uu && Ss(su, ts) || Uu) && Eu("faro.performance.resource", CE(CE({}, Is(su)), {}, {
                    faroNavigationId: uu,
                    faroResourceId: DE()
                  }), void 0, {
                    spanContext: Zu,
                    timestampOverwriteMs: Ws(su.startTime, Xu)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(su, ju, Hs, uu.config)
          })))
        };
        this.cancelInitialization = () => {
          Eu = !0, document.removeEventListener("prerenderingchange", ju)
        }, document.prerendering ? document.addEventListener("prerenderingchange", ju, {
          once: !0
        }) : ju()
      }
      destroy() {
        var uu;
        null === (uu = this.cancelInitialization) || void 0 === uu || uu.call(this), this.cancelInitialization = void 0
      }
    };
    const ns = "data-faro-user-action-name",
      ys = ns.replace(/-name$/, "-timeout"),
      zs = 1e3;

    function Rs(uu) {
      return `data-${(uu.startsWith("data-")?uu.slice(5):uu).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function uU(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LE;
      if (void 0 === uu) return Eu;
      let su = NaN;
      try {
        su = "string" === typeof uu && "" === uu.trim() ? NaN : Number(uu)
      } catch (Uu) {}
      return !Number.isFinite(su) || su <= 0 ? (ju(`initialActivityTimeout must be a finite number greater than zero; using ${Eu} ms`), Eu) : su > 1e3 ? (ju(`initialActivityTimeout cannot exceed ${zs} ms; clamping to the maximum`), zs) : su
    }

    function EU(uu, Eu, ju) {
      return void 0 !== uu && window.clearTimeout(uu), window.setTimeout((() => {
        Eu()
      }), ju)
    }

    function jU(uu) {
      return uu.type === Dj
    }
    let sU, UU;

    function ZU() {
      return sU || (sU = new gj), UU || (UU = new MutationObserver(((uu, Eu) => {
        sU.notify({
          type: "dom-mutation"
        })
      })), UU.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), sU
    }
    const XU = "fetch",
      lU = "xhr";
    let qU, fU, CU, bU, cU = !1;

    function NU() {
      if (qU) return qU;

      function uu(uu) {
        qU.notify({
          type: hj,
          request: uu
        })
      }

      function Eu(uu) {
        qU.notify({
          type: Dj,
          request: uu
        })
      }
      return qU = new gj, cU || (! function(uu) {
        let {
          onRequestEnd: Eu,
          onRequestStart: ju
        } = uu;
        CU || (CU = window.fetch);
        window.fetch = function() {
          var uu, su;
          const Uu = null !== (uu = nu(arguments[0])) && void 0 !== uu ? uu : "",
            Zu = Au(Uu),
            Xu = (null !== (su = arguments[1]) && void 0 !== su ? su : {}).method,
            lu = DE();
          return Zu || ju({
            url: Uu,
            method: Xu,
            requestId: lu,
            apiType: XU
          }), CU.apply(this, arguments).then((uu => (Zu || Eu({
            url: Uu,
            method: Xu,
            requestId: lu,
            apiType: XU
          }), uu))).catch((uu => {
            throw Zu || Eu({
              url: Uu,
              method: Xu,
              requestId: lu,
              apiType: XU
            }), uu
          }))
        }
      }({
        onRequestStart: uu,
        onRequestEnd: Eu
      }), function(uu) {
        let {
          onRequestStart: Eu,
          onRequestEnd: ju
        } = uu;
        fU || (fU = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const uu = arguments[1],
            su = Au(uu),
            Uu = arguments[0],
            Zu = DE();
          this.addEventListener("loadstart", (function() {
            su || Eu({
              url: uu,
              method: Uu,
              requestId: Zu,
              apiType: lU
            })
          })), this.addEventListener("load", (function() {
            su || ju({
              url: uu,
              method: Uu,
              requestId: Zu,
              apiType: lU
            })
          })), this.addEventListener("error", (function() {
            su || ju({
              url: uu,
              method: Uu,
              requestId: Zu,
              apiType: lU
            })
          })), this.addEventListener("abort", (function() {
            su || ju({
              url: uu,
              method: Uu,
              requestId: Zu,
              apiType: lU
            })
          })), fU.apply(this, arguments)
        }
      }({
        onRequestStart: uu,
        onRequestEnd: Eu
      }), cU = !0), qU
    }
    let OU, YU = !1;
    let hU = function(uu) {
      return uu[uu.Started = 0] = "Started", uu[uu.Halted = 1] = "Halted", uu[uu.Cancelled = 2] = "Cancelled", uu[uu.Ended = 3] = "Ended", uu
    }({});
    var DU = class {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = uu, this.logDebug = Eu, this.initialActivityTimeout = ju, this.http = NU(), this.dom = ZU(), this.perf = (bU || (bU = new gj), YU || (OU = Hs.subscribe((uu => {
          "resource" === uu.type && bU.notify({
            type: "resource-entry"
          })
        })), YU = !0), bU), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new gj).merge(this.http, this.dom, this.perf).takeWhile((() => [hU.Started, hU.Halted].includes(this.userAction.getState()))).filter((uu => !!(this.userAction.getState() !== hU.Halted || jU(uu) && this.runningRequests.has(uu.request.requestId)))).subscribe((uu => {
          (function(uu) {
            return uu.type === hj
          })(uu) && this.runningRequests.set(uu.request.requestId, uu.request), jU(uu) && this.runningRequests.delete(uu.request.requestId), jU(uu) ? this.userAction.getState() === hU.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((uu => [hU.Ended, hU.Cancelled].includes(uu))).first().subscribe((() => this.cleanup())), this.startupTid = EU(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === hU.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === hU.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = EU(this.haltTid, (() => {
          this.userAction.getState() === hU.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var uu, Eu;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (uu = this.allMonitorsSub) || void 0 === uu || uu.unsubscribe(), null === (Eu = this.stateSub) || void 0 === Eu || Eu.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(uu) {
        void 0 !== uu && window.clearTimeout(uu)
      }
    };

    function gU(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LE;
      var ju;
      const {
        api: su,
        config: Uu,
        internalLogger: Zu
      } = uu, Xu = uU(null === (ju = Uu.userActionsInstrumentation) || void 0 === ju ? void 0 : ju.initialActivityTimeout, 100, Eu);
      return {
        processUserEvent: function(uu) {
          var Eu, ju;
          const Zu = null !== (Eu = null === (ju = Uu.userActionsInstrumentation) || void 0 === ju ? void 0 : ju.dataAttributeName) && void 0 !== Eu ? Eu : ns,
            Xu = uu.target;
          if (!(Xu instanceof Element)) return;
          const lu = function(uu, Eu) {
              let ju = uu;
              for (; ju;) {
                if (ju.hasAttribute(Eu)) return ju;
                ju = ju.parentElement
              }
              return null
            }(Xu, Rs(Zu)),
            qu = function(uu, Eu) {
              if (!uu) return;
              const ju = function(uu) {
                  return Rs(uu).slice(5).replace(/-(.)/g, ((uu, Eu) => Eu.toUpperCase()))
                }(Eu),
                su = uu.dataset;
              for (const Uu in su)
                if (Uu === ju) return su[Uu]
            }(lu, Zu);
          if (!lu || !qu) return;
          const fu = function(uu, Eu) {
            const ju = uu.getAttribute(function(uu) {
              const Eu = Rs(uu);
              return Eu.endsWith("-name") ? `${Eu.slice(0,-5)}-timeout` : `${Eu}-timeout`
            }(Eu));
            return null === ju ? void 0 : Number(ju)
          }(lu, Zu);
          su.startUserAction(qu, {}, {
            triggerName: uu.type,
            initialActivityTimeout: fu
          })
        },
        processUserActionStarted: function(uu, ju) {
          const su = uu,
            Uu = uU(ju, Xu, Eu);
          new DU(su, Zu.debug, Uu).attach()
        }
      }
    }
    const MU = "user_action_start",
      eU = {
        Normal: "normal",
        Critical: "critical"
      };
    var GU = class {
        constructor() {
          this.buffer = []
        }
        addItem(uu) {
          this.buffer.push(uu)
        }
        flushBuffer(uu) {
          if (ou(uu))
            for (const Eu of this.buffer) uu(Eu);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      pU = class extends gj {
        constructor(uu) {
          let {
            name: Eu,
            parentId: ju,
            trigger: su,
            transports: Uu,
            attributes: Zu,
            trackUserActionsExcludeItem: Xu,
            importance: lu = eU.Normal,
            pushEvent: qu
          } = uu;
          super(), this.name = Eu, this.attributes = Zu, this.id = DE(), this.trigger = su, this.parentId = null !== ju && void 0 !== ju ? ju : this.id, this.trackUserActionsExcludeItem = Xu, this.importance = lu, this._pushEvent = qu, this._itemBuffer = new GU, this._transports = Uu, this._state = 0, this._start()
        }
        addItem(uu) {
          return 0 === this._state && (this._itemBuffer.addItem(uu), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = cE(), this._startTimeMono = NE())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((uu => {
            this._transports.execute(uu)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const uu = cE(),
            Eu = NE() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((uu => {
            if (function(uu, Eu) {
                return (null === Eu || void 0 === Eu ? void 0 : Eu(uu)) || "measurement" === uu.type && "web-vitals" === uu.payload.type
              }(uu, this.trackUserActionsExcludeItem)) return void this._transports.execute(uu);
            const Eu = zE(zE({}, uu), {}, {
              payload: zE(zE({}, uu.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Eu)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", zE({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: uu.toString(),
            userActionDuration: Eu.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, QE(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: uu => (uu.action = {
              id: this.id,
              name: this.name
            }, uu)
          })
        }
        getState() {
          return this._state
        }
      };
    const wU = new gj;

    function JU(uu, Eu) {
      return !!uu && (0 === (null === uu || void 0 === uu ? void 0 : uu.getState()) && (uu.addItem(Eu), !0))
    }
    var dU = class extends Ej {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = jj
        }
        initialize() {
          const {
            processUserEvent: uu,
            processUserActionStarted: Eu
          } = gU(Yu, (uu => this.logWarn(uu)));
          this._processUserEvent = uu, this._processKeydown = Eu => {
            [" ", "Enter"].includes(Eu.key) && uu(Eu)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = wU.subscribe((uu => {
            let {
              type: ju,
              userAction: su,
              initialActivityTimeout: Uu
            } = uu;
            "user_action_start" === ju && Eu(su, Uu)
          }))
        }
        destroy() {
          var uu;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (uu = this._userActionSub) || void 0 === uu || uu.unsubscribe()
        }
      },
      aU = class extends Ej {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = jj, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(uu) {
          const Eu = {
            blockedURI: uu.blockedURI,
            columnNumber: uu.columnNumber,
            disposition: uu.disposition,
            documentURI: uu.documentURI,
            effectiveDirective: uu.effectiveDirective,
            lineNumber: uu.lineNumber,
            originalPolicy: uu.originalPolicy,
            referrer: uu.referrer,
            sample: uu.sample,
            sourceFile: uu.sourceFile,
            statusCode: uu.statusCode,
            violatedDirective: uu.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", QE(Eu))
        }
      };
    var PU = class extends gj {
      constructor(uu, Eu) {
        var ju, su, Uu, Zu;
        super(), this._tracking = !1, this.eventsObservable = uu, this._options = {
          inactivityMs: null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.inactivityMs) && void 0 !== ju ? ju : 100,
          drainTimeoutMs: null !== (su = null === Eu || void 0 === Eu ? void 0 : Eu.drainTimeoutMs) && void 0 !== su ? su : 1e4,
          isOperationStart: null !== (Uu = null === Eu || void 0 === Eu ? void 0 : Eu.isOperationStart) && void 0 !== Uu ? Uu : () => {},
          isOperationEnd: null !== (Zu = null === Eu || void 0 === Eu ? void 0 : Eu.isOperationEnd) && void 0 !== Zu ? Zu : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((uu => {
          var Eu;
          this._lastEventTime = NE(), null === (Eu = this._currentEvents) || void 0 === Eu || Eu.push(uu);
          const ju = this._options.isOperationStart(uu);
          var su;
          ju && (null === (su = this._activeOperations) || void 0 === su || su.set(ju, !0));
          const Uu = this._options.isOperationEnd(uu);
          var Zu;
          Uu && (null === (Zu = this._activeOperations) || void 0 === Zu || Zu.delete(Uu));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = NE(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let uu;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), uu = this.hasActiveOperations() ? NE() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: uu
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = oU(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = oU(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(uu) {
        uu && clearTimeout(uu)
      }
    };

    function oU(uu, Eu, ju) {
      return uu && clearTimeout(uu), uu = setTimeout((() => {
        Eu()
      }), ju)
    }
    let kU;
    const mU = new Set,
      vU = new Map;
    let KU, VU, rU, QU, iU, WU, SU, IU, FU = !1;
    var BU = class extends Ej {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = jj
      }
      initialize() {
        const uu = NU(),
          Eu = ZU(),
          ju = function() {
            function uu(uu, Eu) {
              const ju = null !== Eu && void 0 !== Eu ? Eu : location.href;
              ju !== VU && (KU.notify({
                type: "url-change",
                from: VU,
                to: ju,
                trigger: uu
              }), VU = ju)
            }
            if (KU || (KU = new gj, VU = location.href), !FU)
              if ("navigation" in window && "NavigateEvent" in window) {
                SU = Eu => {
                  try {
                    const ju = null === Eu || void 0 === Eu ? void 0 : Eu.destination;
                    (null === ju || void 0 === ju ? void 0 : ju.sameDocument) && "string" === typeof ju.url && uu("navigate", ju.url)
                  } catch (ju) {}
                }, window.navigation.addEventListener("navigate", SU);
                const Eu = window.NavigateEvent;
                Eu && Eu.prototype && "function" === typeof Eu.prototype.intercept && (IU || (IU = Eu.prototype.intercept), Eu.prototype.intercept = function(Eu) {
                  try {
                    const Eu = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      ju = null === this || void 0 === this ? void 0 : this.destination;
                    Eu && ju && !1 === ju.sameDocument && "string" === typeof ju.url && uu("navigate-intercept", ju.url)
                  } catch (ju) {}
                  return IU.call(this, Eu)
                }), FU = !0
              } else rU || (rU = window.history.pushState), window.history.pushState = function() {
                for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
                const Uu = rU.apply(window.history, ju);
                return uu("pushState"), Uu
              }, QU || (QU = window.history.replaceState), window.history.replaceState = function() {
                for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
                const Uu = QU.apply(window.history, ju);
                return uu("replaceState"), Uu
              }, iU = () => uu("popstate"), WU = () => uu("hashchange"), window.addEventListener("popstate", iU), window.addEventListener("hashchange", WU), FU = !0;
            return KU
          }(),
          su = (Uu = ["pointerdown", "keydown"], kU || (kU = new gj), Uu.forEach((uu => {
            if (!mU.has(uu)) {
              const Eu = () => {
                kU.notify({
                  type: "interaction",
                  name: uu
                })
              };
              window.addEventListener(uu, Eu), mU.add(uu), vU.set(uu, Eu)
            }
          })), kU);
        var Uu;
        const Zu = new PU((new gj).merge(uu, Eu, ju), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: uu => function(uu) {
            return uu.type === hj
          }(uu) ? uu.request.requestId : void 0,
          isOperationEnd: uu => function(uu) {
            return uu.type === Dj
          }(uu) ? uu.request.requestId : void 0
        });
        Zu.filter((uu => "tracking-ended" === uu.message)).subscribe((uu => {
          var Eu, ju;
          if ((null === (Eu = uu.events) || void 0 === Eu ? void 0 : Eu.some((uu => "url-change" === uu.type))) && (null === (ju = uu.events) || void 0 === ju ? void 0 : ju.some((uu => "dom-mutation" === uu.type)))) {
            var su;
            const Eu = null === (su = uu.events) || void 0 === su ? void 0 : su.find((uu => "url-change" === uu.type));
            Yu.api.pushEvent("faro.navigation", {
              fromUrl: null === Eu || void 0 === Eu ? void 0 : Eu.from,
              toUrl: null === Eu || void 0 === Eu ? void 0 : Eu.to,
              sameDocument: String(!0),
              duration: uu.duration
            })
          }
        })), su.subscribe((() => {
          Zu.startTracking()
        }))
      }
    };

    function LU() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Eu = [new dU, new Vj, new rs, new sj, new Qj, new BU];
      return !1 !== uu.enablePerformanceInstrumentation && Eu.unshift(new As), !1 !== uu.enableContentSecurityPolicyInstrumentation && Eu.push(new aU), !1 !== uu.captureConsole && Eu.push(new vj), Eu
    }
    var tU = ju(6908);
    let xU, TU;

    function HU() {
      const uu = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return xU === uu && TU || (TU = new tU.UAParser(uu).getResult(), xU = uu), TU
    }
    const AU = () => {
        const {
          browser: uu,
          os: Eu,
          ua: ju
        } = HU(), {
          name: su,
          version: Uu
        } = uu, {
          name: Zu,
          version: Xu
        } = Eu, lu = navigator.language, qu = ju.includes("Mobi"), fu = function() {
          if (!su || !Uu) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== su && void 0 !== su ? su : rj,
            version: null !== Uu && void 0 !== Uu ? Uu : rj,
            os: `${null!==Zu&&void 0!==Zu?Zu:rj} ${null!==Xu&&void 0!==Xu?Xu:rj}`,
            userAgent: null !== ju && void 0 !== ju ? ju : rj,
            language: null !== lu && void 0 !== lu ? lu : rj,
            mobile: qu,
            brands: null !== fu && void 0 !== fu ? fu : rj,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      nU = () => {
        const {
          name: uu,
          version: Eu
        } = HU().os;
        if (!uu && !Eu) return {};
        const ju = {};
        return uu && (ju.name = uu), Eu && (ju.version = Eu), {
          os: ju
        }
      };

    function yU(uu) {
      var Eu, ju, su;
      return {
        id: null !== (Eu = null === (ju = Yu.config) || void 0 === ju || null === (ju = ju.sessionTracking) || void 0 === ju || null === (su = ju.generateSessionId) || void 0 === su ? void 0 : su.call(ju)) && void 0 !== Eu ? Eu : DE(),
        attributes: uu
      }
    }
    const zU = () => ({
      sdk: {
        name: "faro-web",
        version: jj
      }
    });
    var RU = class extends uj {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let uZ = function(uu) {
      return uu.EXCEPTION = "exception", uu.LOG = "log", uu.MEASUREMENT = "measurement", uu.TRACE = "trace", uu.EVENT = "event", uu
    }({});
    const EZ = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function jZ(uu, Eu) {
      var ju, su;
      if (void 0 === Eu) return uu;
      if (void 0 === uu) return {
        resourceSpans: Eu
      };
      const Uu = null === (ju = uu.resourceSpans) || void 0 === ju ? void 0 : ju[0];
      if (void 0 === Uu) return uu;
      const Zu = (null === Uu || void 0 === Uu ? void 0 : Uu.scopeSpans) || [],
        Xu = (null === Eu || void 0 === Eu || null === (su = Eu[0]) || void 0 === su ? void 0 : su.scopeSpans) || [];
      return zE(zE({}, uu), {}, {
        resourceSpans: [zE(zE({}, Uu), {}, {
          scopeSpans: [...Zu, ...Xu]
        })]
      })
    }

    function sZ(uu) {
      let Eu = {
        meta: {}
      };
      return void 0 !== uu[0] && (Eu.meta = uu[0].meta), uu.forEach((uu => {
        switch (uu.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const ju = EZ[uu.type],
              su = Eu[ju];
            Eu = zE(zE({}, Eu), {}, {
              [ju]: void 0 === su ? [uu.payload] : [...su, uu.payload]
            });
            break
          }
          case "trace":
            Eu = zE(zE({}, Eu), {}, {
              traces: jZ(Eu.traces, uu.payload.resourceSpans)
            })
        }
      })), Eu
    }
    var UZ = class extends RU {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = uu, this.name = "@grafana/faro-web-sdk:transport-console", this.version = jj
      }
      send(uu) {
        var Eu;
        return this.unpatchedConsole[null !== (Eu = this.options.level) && void 0 !== Eu ? Eu : Mj.DEBUG]("New event", sZ([uu]))
      }
    };
    const ZZ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      XZ = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      lZ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      qZ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      fZ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      CZ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function bZ(uu) {
      let {
        weekday: Eu,
        day: ju,
        month: su,
        year: Uu,
        hour: Zu,
        minute: Xu,
        second: lu
      } = uu;
      if (Uu < 1900 || ju < 1 || Zu > 23 || Xu > 59 || lu > 60) return;
      const qu = 60 === lu,
        fu = new Date(0);
      return fu.setUTCFullYear(Uu, su, ju), fu.setUTCHours(Zu, Xu, qu ? 59 : lu, 0), fu.getUTCDay() === Eu && fu.getUTCDate() === ju && fu.getUTCMonth() === su && fu.getUTCFullYear() === Uu && fu.getUTCHours() === Zu && fu.getUTCMinutes() === Xu && fu.getUTCSeconds() === (qu ? 59 : lu) ? fu.getTime() + (qu ? 1e3 : 0) : void 0
    }
    var cZ = class {
      constructor(uu) {
        this.options = uu, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var uu = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Eu = this.sequence++;
        let ju = !1;
        return {
          deliver: function() {
            var ju = Ts((function*(ju) {
              const su = uu.options.getNow();
              let Uu, Zu = 0;
              for (;;) {
                var Xu, lu, qu;
                const fu = uu.options.retry.maxAttempts - Zu,
                  Cu = yield uu.runAttempt((() => ju(fu, uu.unloading)), Zu > 0);
                if (Zu += Cu.attemptsMade, "success" === Cu.kind) return {
                  kind: "success",
                  attempts: Zu,
                  elapsedTimeMs: uu.options.getNow() - su
                };
                if (Uu = Cu.failure, "terminal" === Cu.kind || uu.unloading) return {
                  kind: "terminal",
                  attempts: Zu,
                  elapsedTimeMs: uu.options.getNow() - su,
                  failure: Uu
                };
                if (Zu >= uu.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Zu,
                  elapsedTimeMs: uu.options.getNow() - su,
                  failure: Uu,
                  reason: "retries-exhausted"
                };
                if (null != Cu.retryAfterMs && Cu.retryAfterMs > uu.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Zu,
                  elapsedTimeMs: uu.options.getNow() - su,
                  failure: Uu,
                  reason: "retry-after-too-long"
                };
                const bu = Math.min(null !== (Xu = Cu.retryAfterMs) && void 0 !== Xu ? Xu : uu.options.retry.initialBackoffMs * Math.pow(uu.options.retry.backoffMultiplier, Zu - 1), uu.options.retry.maxBackoffMs);
                if (null === (lu = (qu = uu.options).onRetry) || void 0 === lu || lu.call(qu, bu, Zu + 1), yield uu.waitForTurn(Eu, bu)) {
                  const Eu = uu.options.retry.maxAttempts - Zu,
                    Uu = yield uu.runAttempt((() => ju(Eu, !0)));
                  return Zu += Uu.attemptsMade, {
                    kind: "success" === Uu.kind ? "success" : "terminal",
                    attempts: Zu,
                    elapsedTimeMs: uu.options.getNow() - su,
                    failure: "success" === Uu.kind ? void 0 : Uu.failure
                  }
                }
              }
            }));
            return function(uu) {
              return ju.apply(this, arguments)
            }
          }(),
          release: () => {
            ju || (ju = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const uu = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Eu of uu) Eu.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((ju, su) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Eu = () => {
                this.inProgress--, this.runNextAttempt()
              };
              uu().then((uu => {
                Eu(), ju(uu)
              }), (uu => {
                Eu(), su(uu)
              }))
            },
            isRedelivery: Eu
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const uu = this.options.getNow(),
            Eu = this.attemptQueue.findIndex((Eu => {
              let {
                isRedelivery: ju
              } = Eu;
              return this.unloading || !ju || uu >= this.nextSendAt
            }));
          if (Eu < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - uu)));
          const [ju] = this.attemptQueue.splice(Eu, 1);
          ju.isRedelivery && !this.unloading && (this.nextSendAt = uu + 1), ju.run()
        }
      }
      waitForTurn(uu, Eu) {
        const ju = Math.min(Eu * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Eu => {
          this.waiting.push({
            sequence: uu,
            readyAt: this.options.getNow() + ju,
            resolve: Eu
          }), this.waiting.sort(((uu, Eu) => uu.readyAt === Eu.readyAt ? uu.sequence - Eu.sequence : uu.readyAt - Eu.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const uu = this.waiting[0],
          Eu = uu.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Eu = this.waiting.indexOf(uu);
          Eu >= 0 && this.waiting.splice(Eu, 1), uu.resolve(!1), this.scheduleNext()
        }), Math.max(0, Eu - this.options.getNow()))
      }
    };

    function NZ(uu, Eu) {
      if (null == uu) return {};
      var ju, su, Uu = function(uu, Eu) {
        if (null == uu) return {};
        var ju = {};
        for (var su in uu)
          if ({}.hasOwnProperty.call(uu, su)) {
            if (Eu.includes(su)) continue;
            ju[su] = uu[su]
          } return ju
      }(uu, Eu);
      if (Object.getOwnPropertySymbols) {
        var Zu = Object.getOwnPropertySymbols(uu);
        for (su = 0; su < Zu.length; su++) ju = Zu[su], Eu.includes(ju) || {}.propertyIsEnumerable.call(uu, ju) && (Uu[ju] = uu[ju])
      }
      return Uu
    }

    function OZ(uu) {
      const {
        size: Eu,
        concurrency: ju
      } = uu, su = [];
      let Uu = 0;
      const Zu = () => {
        if (Uu < ju && su.length) {
          const {
            producer: uu,
            resolve: Eu,
            reject: ju
          } = su.shift();
          Uu++, uu().then((uu => {
            Uu--, Zu(), Eu(uu)
          }), (uu => {
            Uu--, Zu(), ju(uu)
          }))
        }
      };
      return {
        add: uu => {
          if (su.length + Uu >= Eu) throw new Error("Task buffer full");
          return new Promise(((Eu, ju) => {
            su.push({
              producer: uu,
              resolve: Eu,
              reject: ju
            }), Zu()
          }))
        }
      }
    }
    const YZ = ["headers"],
      hZ = ["keepalive", "signal"],
      DZ = new Set([408, 425, 429, 500, 502, 503, 504]),
      gZ = new Set([429, 503]);
    let MZ = 0,
      eZ = 0;
    var GZ = class extends Error {};
    var pZ = class extends RU {
      constructor(uu) {
        var Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du;
        super(), this.options = uu, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = jj, this.pendingCustomSends = 0, this.getNow = null !== (Eu = uu.getNow) && void 0 !== Eu ? Eu : Date.now, this.requestTimeoutMs = null !== (ju = uu.requestTimeoutMs) && void 0 !== ju ? ju : 1e4, this.compressionEnabled = null !== (su = uu.requestCompression) && void 0 !== su && su && "undefined" !== typeof CompressionStream, uu.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new cZ({
          bufferSize: null !== (Uu = uu.bufferSize) && void 0 !== Uu ? Uu : 30,
          concurrency: null !== (Zu = uu.concurrency) && void 0 !== Zu ? Zu : 5,
          retry: {
            maxAttempts: null !== (Xu = null === (lu = uu.retry) || void 0 === lu ? void 0 : lu.maxAttempts) && void 0 !== Xu ? Xu : 3,
            initialBackoffMs: null !== (qu = null !== (fu = null === (Cu = uu.retry) || void 0 === Cu ? void 0 : Cu.initialBackoffMs) && void 0 !== fu ? fu : uu.defaultRateLimitBackoffMs) && void 0 !== qu ? qu : 1e3,
            maxBackoffMs: null !== (bu = null === (cu = uu.retry) || void 0 === cu ? void 0 : cu.maxBackoffMs) && void 0 !== bu ? bu : 3e4,
            backoffMultiplier: null !== (Nu = null === (Ou = uu.retry) || void 0 === Ou ? void 0 : Ou.backoffMultiplier) && void 0 !== Nu ? Nu : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Yu = uu.getRandom) && void 0 !== Yu ? Yu : Math.random,
          onRetry: (uu, Eu) => {
            this.logDebug(`Retrying failed request after ${uu}ms. Attempt ${Eu}.`)
          }
        }), this.customPromiseBuffer = OZ({
          size: null !== (hu = uu.bufferSize) && void 0 !== hu ? hu : 30,
          concurrency: null !== (Du = uu.concurrency) && void 0 !== Du ? Du : 5
        }), this.defaultPromiseBuffer = {
          add: uu => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(uu);
            const Eu = this.deliveryQueue.reserve();
            if (!Eu) throw new Error("Task buffer full");
            return this.runBufferedTask(Eu, uu)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (uu => {
          uu.persisted && this.deliveryQueue.resume()
        })))
      }
      send(uu) {
        var Eu = this;
        return Ts((function*() {
          const ju = Eu.promiseBuffer;
          if (ju !== Eu.defaultPromiseBuffer || ju.add !== Eu.defaultBufferAdd) {
            Eu.pendingCustomSends++;
            try {
              yield ju.add((() => Eu.deliver(uu)))
            } catch (su) {
              Eu.logError("Permanent delivery failure", {
                error: su,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Eu.pendingCustomSends--
            }
          } else yield Eu.deliver(uu)
        }))()
      }
      runBufferedTask(uu, Eu) {
        return Ts((function*() {
          let ju;
          try {
            return yield uu.deliver(Ts((function*() {
              return ju = yield Eu(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), ju
          } finally {
            uu.release()
          }
        }))()
      }
      deliver(uu) {
        var Eu = this;
        return Ts((function*() {
          const ju = Eu.deliveryQueue.reserve();
          if (ju) try {
            const su = yield Eu.prepareRequest(uu), Uu = yield ju.deliver(((uu, ju) => Eu.performAttempt(su, uu, ju)));
            "terminal" === Uu.kind && Eu.logError("retries-exhausted" === Uu.reason ? "Delivery retries exhausted" : "Permanent delivery failure", CE(CE({}, Uu.failure), {}, {
              reason: Uu.reason,
              attempts: Uu.attempts,
              elapsedTimeMs: Uu.elapsedTimeMs
            }))
          } catch (su) {
            Eu.logError("Permanent delivery failure", {
              error: su,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            ju.release()
          } else Eu.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var uu;
        return [this.options.url].concat(null !== (uu = this.config.ignoreUrls) && void 0 !== uu ? uu : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(uu) {
        var Eu = this;
        return Ts((function*() {
          var ju, su;
          const Uu = sZ(uu),
            Zu = null === (ju = Uu.meta.session) || void 0 === ju ? void 0 : ju.id,
            Xu = JSON.stringify(Uu),
            lu = null !== (su = Eu.options.requestOptions) && void 0 !== su ? su : {},
            {
              headers: qu = {}
            } = lu,
            fu = NZ(lu, YZ),
            {
              keepalive: Cu,
              signal: bu
            } = fu,
            cu = NZ(fu, hZ),
            Nu = {};
          for (const [uu, Eu] of Object.entries(qu)) Nu[uu] = "function" === typeof Eu ? yield Eu(): Eu;
          let Ou = Xu,
            Yu = function(uu) {
              return "undefined" === typeof TextEncoder ? uu.length : (new TextEncoder).encode(uu).byteLength
            }(Xu);
          const hu = {};
          return Eu.compressionEnabled && (Ou = yield Eu.compress(Xu), Yu = Ou.size, hu["Content-Encoding"] = "gzip"), {
            bodySize: Yu,
            sessionId: Zu,
            requestInit: CE({
              method: "POST",
              headers: CE(CE(CE(CE(CE({
                "Content-Type": "application/json"
              }, hu), Nu), Eu.options.apiKey ? {
                "x-api-key": Eu.options.apiKey
              } : {}), Zu ? {
                "x-faro-session-id": Zu
              } : {}), {}, {
                "Idempotency-Key": DE(20)
              }),
              body: Ou
            }, cu)
          }
        }))()
      }
      performAttempt(uu, Eu, ju) {
        var su = this;
        return Ts((function*() {
          var Uu;
          const Zu = null === (Uu = su.options.requestOptions) || void 0 === Uu ? void 0 : Uu.signal;
          if (null === Zu || void 0 === Zu ? void 0 : Zu.aborted) return {
            kind: "terminal",
            failure: {
              error: Zu.reason
            },
            attemptsMade: 0
          };
          let Xu = 0;
          try {
            var lu;
            const Uu = yield su.fetchWithKeepaliveFallback(uu.requestInit, uu.bodySize, !!ju || (null === (lu = su.options.requestOptions) || void 0 === lu ? void 0 : lu.keepalive), Eu, (() => Xu++));
            if (su.handleResponse(Uu, uu.sessionId), Uu.status >= 200 && Uu.status < 300) return {
              kind: "success",
              attemptsMade: Xu
            };
            const Zu = {
              status: Uu.status
            };
            return !DZ.has(Uu.status) || ju ? {
              kind: "terminal",
              failure: Zu,
              attemptsMade: Xu
            } : {
              kind: "retry",
              failure: Zu,
              attemptsMade: Xu,
              retryAfterMs: gZ.has(Uu.status) ? su.getRetryAfterDelayMs(Uu) : void 0
            }
          } catch (qu) {
            const uu = {
              error: qu
            };
            return (null === Zu || void 0 === Zu ? void 0 : Zu.aborted) || !su.isFetchNetworkError(qu) || ju ? {
              kind: "terminal",
              failure: uu,
              attemptsMade: Xu
            } : {
              kind: "retry",
              failure: uu,
              attemptsMade: Xu
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(uu, Eu, ju, su, Uu) {
        var Zu = this;
        return Ts((function*() {
          const Xu = Zu.getNow(),
            lu = Zu.reserveKeepalive(Eu, ju);
          try {
            return yield Zu.fetchWithTimeout(CE(CE({}, uu), {}, {
              keepalive: lu.keepalive
            }), Zu.requestTimeoutMs, Uu)
          } catch (fu) {
            var qu;
            if (lu.keepalive && su > 1 && Zu.isFetchNetworkError(fu) && !(fu instanceof GZ) && !(null === (qu = Zu.options.requestOptions) || void 0 === qu || null === (qu = qu.signal) || void 0 === qu ? void 0 : qu.aborted)) {
              Zu.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Eu = Zu.requestTimeoutMs - (Zu.getNow() - Xu);
              return Zu.fetchWithTimeout(CE(CE({}, uu), {}, {
                keepalive: !1
              }), Eu, Uu)
            }
            throw fu
          } finally {
            lu.release()
          }
        }))()
      }
      fetchWithTimeout(uu, Eu, ju) {
        var su = this;
        return Ts((function*() {
          var Uu;
          const Zu = null === (Uu = su.options.requestOptions) || void 0 === Uu ? void 0 : Uu.signal;
          if (su.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return ju(), fetch(su.options.url, CE(CE({}, uu), {}, {
            signal: Zu
          }));
          if (Eu <= 0) throw new GZ("Request timed out");
          const Xu = new AbortController,
            lu = () => Xu.abort(null === Zu || void 0 === Zu ? void 0 : Zu.reason);
          null === Zu || void 0 === Zu || Zu.addEventListener("abort", lu, {
            once: !0
          });
          let qu = !1;
          const fu = setTimeout((() => {
            qu = !0, Xu.abort()
          }), Eu);
          try {
            return ju(), yield fetch(su.options.url, CE(CE({}, uu), {}, {
              signal: Xu.signal
            }))
          } catch (Cu) {
            if (qu && !(null === Zu || void 0 === Zu ? void 0 : Zu.aborted)) throw new GZ("Request timed out");
            throw Cu
          } finally {
            clearTimeout(fu), null === Zu || void 0 === Zu || Zu.removeEventListener("abort", lu)
          }
        }))()
      }
      getRetryAfterDelayMs(uu) {
        const Eu = uu.headers.get("Retry-After");
        if (!Eu) return;
        if (/^\d+$/.test(Eu)) {
          const uu = 1e3 * Number(Eu);
          return Number.isFinite(uu) ? uu : Number.POSITIVE_INFINITY
        }
        const ju = this.getNow(),
          su = function(uu, Eu) {
            const ju = ZZ.exec(uu);
            if (ju) {
              const [, uu, Eu, su, Uu, Zu, Xu, lu] = ju;
              return bZ({
                weekday: qZ.indexOf(uu),
                day: Number(Eu),
                month: CZ.indexOf(su),
                year: Number(Uu),
                hour: Number(Zu),
                minute: Number(Xu),
                second: Number(lu)
              })
            }
            const su = XZ.exec(uu);
            if (su) {
              const [, uu, ju, Xu, lu, qu, fu, Cu] = su, bu = new Date(Eu);
              if (Number.isNaN(bu.getTime())) return;
              const cu = bu.getUTCFullYear();
              let Nu = 100 * Math.floor(cu / 100) + Number(lu);
              Nu < cu && (Nu += 100);
              const Ou = CZ.indexOf(Xu),
                Yu = {
                  month: Ou,
                  day: Number(ju),
                  hour: Number(qu),
                  minute: Number(fu),
                  second: Number(Cu),
                  millisecond: 0
                },
                hu = {
                  month: bu.getUTCMonth(),
                  day: bu.getUTCDate(),
                  hour: bu.getUTCHours(),
                  minute: bu.getUTCMinutes(),
                  second: bu.getUTCSeconds(),
                  millisecond: bu.getUTCMilliseconds()
                };
              return (Nu > cu + 50 || Nu === cu + 50 && (Zu = hu, ((Uu = Yu).month - Zu.month || Uu.day - Zu.day || Uu.hour - Zu.hour || Uu.minute - Zu.minute || Uu.second - Zu.second || Uu.millisecond - Zu.millisecond) > 0)) && (Nu -= 100), bZ({
                weekday: fZ.indexOf(uu),
                day: Number(ju),
                month: Ou,
                year: Nu,
                hour: Number(qu),
                minute: Number(fu),
                second: Number(Cu)
              })
            }
            var Uu, Zu;
            const Xu = lZ.exec(uu);
            if (!Xu) return;
            const [, lu, qu, fu, Cu, bu, cu, Nu, Ou] = Xu;
            return bZ({
              weekday: qZ.indexOf(lu),
              day: Number(null !== fu && void 0 !== fu ? fu : Cu),
              month: CZ.indexOf(qu),
              year: Number(Ou),
              hour: Number(bu),
              minute: Number(cu),
              second: Number(Nu)
            })
          }(Eu, ju);
        return null == su ? void 0 : Math.max(0, su - ju)
      }
      reserveKeepalive(uu, Eu) {
        if (!1 === Eu || uu > 6e4 || MZ + uu > 6e4 || eZ >= 9) return {
          keepalive: !1,
          release: LE
        };
        MZ += uu, eZ++;
        let ju = !1;
        return {
          keepalive: !0,
          release: () => {
            ju || (ju = !0, MZ -= uu, eZ--)
          }
        }
      }
      handleResponse(uu, Eu) {
        202 === uu.status && "invalid" === uu.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Eu), uu.text().catch(LE)
      }
      isFetchNetworkError(uu) {
        return uu instanceof TypeError || uu instanceof GZ || uu instanceof DOMException && "AbortError" === uu.name
      }
      compress(uu) {
        return Ts((function*() {
          const Eu = [],
            ju = new ReadableStream({
              start(Eu) {
                Eu.enqueue((new TextEncoder).encode(uu)), Eu.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: uu,
              value: su
            } = yield ju.read();
            if (uu) return new Blob(Eu);
            Eu.push(su)
          }
        }))()
      }
      extendFaroSession(uu, Eu, ju) {
        var su, Uu;
        const Zu = uu.sessionTracking;
        if (!(null === Zu || void 0 === Zu ? void 0 : Zu.enabled)) return void Eu("Session expired.");
        const {
          fetchUserSession: Xu,
          storeUserSession: lu
        } = BE(Zu), qu = null === (su = this.metas.value.session) || void 0 === su ? void 0 : su.id, fu = null === (Uu = Xu()) || void 0 === Uu ? void 0 : Uu.sessionId;
        ju && ju === qu && ju === fu ? (kE({
          fetchUserSession: Xu,
          storeUserSession: lu
        })({
          forceSessionExtend: !0
        }), Eu("Session expired; created new session.")) : Eu("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const wZ = () => {
      const uu = window.k6;
      return {
        k6: CE({
          isK6Browser: !0
        }, (null === uu || void 0 === uu ? void 0 : uu.testRunId) && {
          testRunId: null === uu || void 0 === uu ? void 0 : uu.testRunId
        })
      }
    };
    let JZ, dZ;

    function aZ() {
      let {
        generatePageId: uu,
        initialPageMeta: Eu
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const ju = location.href;
        return ou(uu) && JZ !== ju && (JZ = ju, dZ = uu(location)), {
          page: CE(CE({
            url: ju
          }, dZ ? {
            id: dZ
          } : {}), Eu)
        }
      }
    }

    function PZ() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RE,
        Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ju = xE;
      return Eu > 0 && (ju.error = Eu >= 1 ? function() {
        for (var Eu = arguments.length, su = new Array(Eu), Uu = 0; Uu < Eu; Uu++) su[Uu] = arguments[Uu];
        uu.error(`${ju.prefix}\n`, ...su)
      } : LE, ju.warn = Eu >= 2 ? function() {
        for (var Eu = arguments.length, su = new Array(Eu), Uu = 0; Uu < Eu; Uu++) su[Uu] = arguments[Uu];
        uu.warn(`${ju.prefix}\n`, ...su)
      } : LE, ju.info = Eu >= 3 ? function() {
        for (var Eu = arguments.length, su = new Array(Eu), Uu = 0; Uu < Eu; Uu++) su[Uu] = arguments[Uu];
        uu.info(`${ju.prefix}\n`, ...su)
      } : LE, ju.debug = Eu >= 4 ? function() {
        for (var Eu = arguments.length, su = new Array(Eu), Uu = 0; Uu < Eu; Uu++) su[Uu] = arguments[Uu];
        uu.debug(`${ju.prefix}\n`, ...su)
      } : LE), ju
    }
    const oZ = "faro",
      kZ = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      mZ = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function vZ(uu) {
      var Eu, ju, Uu, Zu, Xu, lu;
      const qu = [],
        Cu = PZ(uu.unpatchedConsole, uu.internalLoggerLevel);
      uu.transports ? ((uu.url || uu.apiKey) && Cu.error('if "transports" is defined, "url" and "apiKey" should not be defined'), qu.push(...uu.transports)) : uu.url ? qu.push(new pZ({
        url: uu.url,
        apiKey: uu.apiKey,
        requestCompression: uu.requestCompression
      })) : Cu.error('either "url" or "transports" must be defined');
      const {
        dedupe: bu = !0,
        eventDomain: cu = su,
        globalObjectKey: Nu = oZ,
        instrumentations: Ou = LU(),
        internalLoggerLevel: Yu = TE,
        isolate: hu = !1,
        logArgsSerializer: Du = mj,
        metas: gu = VZ(uu),
        paused: Mu = !1,
        preventGlobalExposure: eu = !1,
        unpatchedConsole: Gu = RE,
        url: pu,
        experimental: wu
      } = uu, Ju = NZ(uu, mZ), du = null !== (Eu = null === wu || void 0 === wu ? void 0 : wu.trackNavigation) && void 0 !== Eu && Eu, au = {
        dataAttributeName: Rs(null !== (ju = null === (Uu = uu.userActionsInstrumentation) || void 0 === Uu ? void 0 : Uu.dataAttributeName) && void 0 !== ju ? ju : ns),
        excludeItem: null === (Zu = uu.userActionsInstrumentation) || void 0 === Zu ? void 0 : Zu.excludeItem,
        initialActivityTimeout: uU(null === (Xu = uu.userActionsInstrumentation) || void 0 === Xu ? void 0 : Xu.initialActivityTimeout, 100, (uu => Cu.warn(uu)))
      };
      return CE(CE({}, Ju), {}, {
        batching: CE(CE({}, kZ), uu.batching),
        dedupe: bu,
        globalObjectKey: Nu,
        instrumentations: KZ(Ou, uu),
        internalLoggerLevel: Yu,
        isolate: hu,
        logArgsSerializer: Du,
        metas: gu,
        parseStacktrace: Yj,
        paused: Mu,
        preventGlobalExposure: eu,
        transports: qu,
        unpatchedConsole: Gu,
        eventDomain: cu,
        ignoreUrls: [...null !== (lu = uu.ignoreUrls) && void 0 !== lu ? lu : [], ...pu ? [pu] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: CE(CE(CE({}, fu), uu.sessionTracking), rZ({
          trackGeolocation: uu.trackGeolocation,
          sessionTracking: uu.sessionTracking
        })),
        userActionsInstrumentation: au,
        experimental: {
          trackNavigation: du
        }
      })
    }

    function KZ(uu, Eu) {
      let {
        experimental: ju
      } = Eu;
      var su;
      const Uu = null !== (su = null === ju || void 0 === ju ? void 0 : ju.trackNavigation) && void 0 !== su && su;
      return uu.filter((uu => !("@grafana/faro-web-sdk:instrumentation-navigation" === uu.name && !Uu)))
    }

    function VZ(uu) {
      var Eu, ju, su;
      const {
        page: Uu,
        generatePageId: Zu
      } = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.pageTracking) && void 0 !== Eu ? Eu : {}, Xu = [AU, nU, aZ({
        generatePageId: Zu,
        initialPageMeta: Uu
      }), ...null !== (ju = uu.metas) && void 0 !== ju ? ju : [], zU];
      return Pu(null === (su = window) || void 0 === su ? void 0 : su.k6) ? [...Xu, wZ] : Xu
    }

    function rZ(uu) {
      let {
        trackGeolocation: Eu,
        sessionTracking: ju
      } = uu;
      var su;
      const Uu = {};
      return du(Eu) && (Uu.geoLocationTrackingEnabled = Eu), Tu(Uu) ? {} : {
        session: CE(CE({}, null !== (su = null === ju || void 0 === ju ? void 0 : ju.session) && void 0 !== su ? su : {}), {}, {
          overrides: Uu
        })
      }
    }
    const QZ = new WeakSet;

    function iZ(uu) {
      return QZ.add(uu), uu
    }

    function WZ(uu, Eu) {
      if (uu.capture) return iZ(uu.capture(Eu));
      const ju = iZ(uu.value);
      return null === Eu || void 0 === Eu || Eu(), ju
    }

    function SZ(uu) {
      const Eu = `__faroBundleId_${uu}`,
        ju = null === Cu || void 0 === Cu ? void 0 : Cu[Eu];
      if ("string" === typeof ju && "" !== ju) return ju;
      const su = "undefined" !== typeof window ? window[Eu] : void 0;
      return "string" === typeof su && "" !== su ? su : void 0
    }

    function IZ(uu) {
      var Eu, ju;
      const su = uu.config.app.name,
        Uu = su ? function(uu) {
          return null === Cu || void 0 === Cu ? void 0 : Cu[`__faroGitHash_${uu}`]
        }(su) : void 0,
        Zu = {
          sdk: {
            version: jj,
            name: "faro"
          },
          app: zE({
            bundleId: su && SZ(su)
          }, void 0 !== Uu ? {
            gitHash: Uu
          } : {})
        },
        Xu = null === (Eu = uu.config.sessionTracking) || void 0 === Eu ? void 0 : Eu.session;
      Xu && uu.api.setSession(Xu), uu.config.app && (Zu.app = zE(zE({}, uu.config.app), Zu.app)), uu.config.user && (Zu.user = uu.config.user), uu.config.view && (Zu.view = uu.config.view), uu.metas.add(Zu, ...null !== (ju = uu.config.metas) && void 0 !== ju ? ju : [])
    }
    var FZ = class {
      constructor(uu, Eu) {
        var ju, su;
        this.signalBuffer = [], this.itemLimit = null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.itemLimit) && void 0 !== ju ? ju : 50, this.sendTimeout = null !== (su = null === Eu || void 0 === Eu ? void 0 : Eu.sendTimeout) && void 0 !== su ? su : 250, this.paused = (null === Eu || void 0 === Eu ? void 0 : Eu.paused) || !1, this.sendFn = uu, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(uu) {
        this.paused || (this.signalBuffer.push(uu), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(uu) {
        const Eu = new Map;
        return uu.forEach((uu => {
          const ju = JSON.stringify(uu.meta);
          let su = Eu.get(ju);
          su = void 0 === su ? [uu] : [...su, uu], Eu.set(ju, su)
        })), Array.from(Eu.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const uu = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(uu).forEach(this.sendFn)
        } catch (Eu) {
          throw this.signalBuffer = [...uu, ...this.signalBuffer], this.trimBufferToLimit(), Eu
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function BZ(uu, Eu, ju, su) {
      var Uu;
      Eu.debug("Initializing transports");
      const Zu = [];
      let Xu = [];
      const lu = uu => {
        let Eu = uu;
        for (const su of Xu) {
          const uu = Eu.map(su).filter(Boolean);
          if (0 === uu.length) return [];
          Eu = LZ(uu, ju)
        }
        return Eu
      };
      let qu;
      (null === (Uu = ju.batching) || void 0 === Uu ? void 0 : Uu.enabled) && (qu = new FZ((uu => {
        const ju = lu(uu);
        if (0 !== ju.length)
          for (const su of Zu) Eu.debug(`Transporting item using ${su.name}\n`, ju), su.isBatched() && su.send(ju)
      }), {
        sendTimeout: ju.batching.sendTimeout,
        itemLimit: ju.batching.itemLimit,
        paused: ju.paused
      }));
      return {
        add: function() {
          Eu.debug("Adding transports");
          for (var Uu = arguments.length, Xu = new Array(Uu), lu = 0; lu < Uu; lu++) Xu[lu] = arguments[lu];
          Xu.forEach((Uu => {
            Eu.debug(`Adding "${Uu.name}" transport`), Zu.some((uu => uu === Uu)) ? Eu.warn(`Transport ${Uu.name} is already added`) : (Uu.unpatchedConsole = uu, Uu.internalLogger = Eu, Uu.config = ju, Uu.metas = su, Zu.push(Uu))
          }))
        },
        addBeforeSendHooks: function() {
          Eu.debug("Adding beforeSendHooks\n", Xu);
          for (var uu = arguments.length, ju = new Array(uu), su = 0; su < uu; su++) ju[su] = arguments[su];
          ju.forEach((uu => {
            uu && Xu.push(uu)
          }))
        },
        getBeforeSendHooks: () => [...Xu],
        execute: uu => {
          var Uu;
          if (!ju.paused && IE(su).shouldCapture()) {
            if (bu = uu.meta, !QZ.has(bu)) {
              var Xu, fu, Cu;
              const Eu = null === (Xu = su.value.session) || void 0 === Xu ? void 0 : Xu.id,
                Uu = WZ(su);
              if (ju.paused) return;
              const Zu = zE({}, uu.meta);
              (null === (fu = Zu.session) || void 0 === fu ? void 0 : fu.id) === Eu && (null === (Cu = Uu.session) || void 0 === Cu ? void 0 : Cu.id) !== Eu && (void 0 === Uu.session ? delete Zu.session : Zu.session = Uu.session), uu = zE(zE({}, uu), {}, {
                meta: iZ(Zu)
              })
            }
            var bu;
            (null === (Uu = ju.batching) || void 0 === Uu ? void 0 : Uu.enabled) && (null === qu || void 0 === qu || qu.addItem(uu)), (uu => {
              var su;
              if ((null === (su = ju.batching) || void 0 === su ? void 0 : su.enabled) && Zu.every((uu => uu.isBatched()))) return;
              const [Uu] = lu([uu]);
              if (void 0 !== Uu)
                for (const lu of Zu) {
                  var Xu;
                  Eu.debug(`Transporting item using ${lu.name}\n`, Uu), lu.isBatched() ? (null === (Xu = ju.batching) || void 0 === Xu ? void 0 : Xu.enabled) || lu.send([Uu]) : lu.send(Uu)
                }
            })(uu)
          }
        },
        isPaused: () => ju.paused,
        pause: () => {
          Eu.debug("Pausing transports"), null === qu || void 0 === qu || qu.pause(), ju.paused = !0
        },
        remove: function() {
          Eu.debug("Removing transports");
          for (var uu = arguments.length, ju = new Array(uu), su = 0; su < uu; su++) ju[su] = arguments[su];
          ju.forEach((uu => {
            Eu.debug(`Removing "${uu.name}" transport`);
            const ju = Zu.indexOf(uu); - 1 !== ju ? Zu.splice(ju, 1) : Eu.warn(`Transport "${uu.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var uu = arguments.length, ju = new Array(uu), su = 0; su < uu; su++) ju[su] = arguments[su];
          Eu.debug("Removing beforeSendHooks"), Xu = Xu.filter((uu => !ju.includes(uu)))
        },
        get transports() {
          return [...Zu]
        },
        unpause: () => {
          Eu.debug("Unpausing transports"), null === qu || void 0 === qu || qu.start(), ju.paused = !1
        }
      }
    }

    function LZ(uu, Eu) {
      if (Eu.preserveOriginalError)
        for (const ju of uu) "exception" === ju.type && delete ju.payload.originalError;
      return uu
    }
    let tZ = RE;

    function xZ(uu) {
      var Eu;
      return tZ = null !== (Eu = uu.unpatchedConsole) && void 0 !== Eu ? Eu : tZ, tZ
    }
    let TZ, HZ = xE;

    function AZ(uu, Eu) {
      return HZ = PZ(uu, Eu.internalLoggerLevel), HZ
    }

    function nZ(uu) {
      let {
        internalLogger: Eu,
        config: ju,
        metas: su,
        transports: Uu,
        tracesApi: Zu,
        userActionsApi: Xu
      } = uu;
      var lu;
      Eu.debug("Initializing exceptions API");
      let qu = null;
      TZ = null !== (lu = ju.parseStacktrace) && void 0 !== lu ? lu : TZ;
      const fu = uu => {
          Eu.debug("Changing stacktrace parser"), TZ = null !== uu && void 0 !== uu ? uu : TZ
        },
        {
          ignoreErrors: Cu = [],
          preserveOriginalError: bu
        } = ju;
      return fu(ju.parseStacktrace), {
        changeStacktraceParser: fu,
        getStacktraceParser: () => TZ,
        pushError: function(uu) {
          let {
            skipDedupe: lu,
            stackFrames: fu,
            type: cu,
            context: Nu,
            spanContext: Ou,
            timestampOverwriteMs: Yu,
            originalError: hu,
            fingerprint: Du,
            fatal: gu
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(uu, Eu) {
              const {
                message: ju,
                name: su,
                stack: Uu
              } = Eu;
              return Zu = uu, Xu = ju + " " + su + " " + Uu, Zu.some((uu => pu(uu) ? Xu.includes(uu) : !!Xu.match(uu)));
              var Zu, Xu
            }(Cu, null !== hu && void 0 !== hu ? hu : uu)) try {
            var Mu, eu;
            if (!IE(su).shouldCapture()) return;
            const Cu = QE(zE(zE({}, function(uu) {
                let Eu = uu.cause;
                iu(Eu) ? Eu = uu.cause.toString() : null !== Eu && (Pu(uu.cause) || ku(uu.cause)) ? Eu = rE(uu.cause) : null != Eu && (Eu = uu.cause.toString());
                return null == Eu ? {} : {
                  cause: Eu
                }
              }(null !== hu && void 0 !== hu ? hu : uu)), null !== Nu && void 0 !== Nu ? Nu : {})),
              pu = zE(zE(zE(zE({
                type: cu || uu.name || "Error",
                value: uu.message,
                timestamp: Yu ? YE(Yu) : OE(),
                trace: Ou ? {
                  trace_id: Ou.traceId,
                  span_id: Ou.spanId
                } : Zu.getTraceContext()
              }, Tu(Cu) ? {} : {
                context: Cu
              }), bu ? {
                originalError: hu
              } : {}), Du ? {
                fingerprint: Du
              } : {}), void 0 !== gu ? {
                fatal: gu
              } : {});
            fu = null !== (Mu = fu) && void 0 !== Mu ? Mu : uu.stack ? null === TZ || void 0 === TZ ? void 0 : TZ(uu).frames : void 0, (null === fu || void 0 === fu ? void 0 : fu.length) && (pu.stacktrace = {
              frames: fu
            });
            const wu = {
              type: pu.type,
              value: pu.value,
              stacktrace: pu.stacktrace,
              context: pu.context,
              fingerprint: pu.fingerprint,
              fatal: null !== (eu = pu.fatal) && void 0 !== eu && eu
            };
            if (!lu && ju.dedupe && !Gu(qu) && gE(wu, qu)) return void Eu.debug("Skipping error push because it is the same as the last one\n", pu);
            const Ju = qu,
              du = WZ(su);
            if (qu !== Ju && !lu && ju.dedupe && gE(wu, qu)) return;
            qu = wu;
            const au = {
              meta: du,
              payload: pu,
              type: "exception"
            };
            Eu.debug("Pushing exception\n", au), JU(Xu.getActiveUserAction(), au) || Uu.execute(au)
          } catch (wu) {
            Eu.error("Error pushing event", wu)
          }
        }
      }
    }

    function yZ(uu, Eu, ju, su, Uu) {
      Eu.debug("Initializing API");
      let Zu = null;
      const Xu = function(uu) {
          let {
            transports: Eu,
            internalLogger: ju,
            config: su,
            pushEvent: Uu
          } = uu;
          var Zu;
          const Xu = null === (Zu = su.userActionsInstrumentation) || void 0 === Zu ? void 0 : Zu.excludeItem;
          let lu;
          const qu = () => lu;
          return {
            startUserAction: (uu, su, Zu) => {
              if (void 0 === qu()) {
                const ju = new pU({
                  name: uu,
                  transports: Eu,
                  attributes: su,
                  trigger: (null === Zu || void 0 === Zu ? void 0 : Zu.triggerName) || "faroApiCall",
                  importance: (null === Zu || void 0 === Zu ? void 0 : Zu.importance) || eU.Normal,
                  trackUserActionsExcludeItem: Xu,
                  pushEvent: Uu
                });
                return ju.filter((uu => [3, 2].includes(uu))).first().subscribe((() => {
                  lu = void 0
                })), wU.notify({
                  type: MU,
                  userAction: ju,
                  initialActivityTimeout: null === Zu || void 0 === Zu ? void 0 : Zu.initialActivityTimeout
                }), lu = ju, lu
              }
              ju.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: qu
          }
        }({
          transports: Uu,
          config: ju,
          internalLogger: Eu,
          pushEvent: (uu, ju, su, Uu) => {
            Zu ? Zu(uu, ju, su, Uu) : Eu.warn("pushEventImpl is not initialized. Event dropped:", {
              name: uu,
              attributes: ju,
              domain: su,
              options: Uu
            })
          }
        }),
        lu = function(uu, Eu, ju, su, Uu) {
          let Zu;
          return Eu.debug("Initializing traces API"), {
            getOTEL: () => Zu,
            getTraceContext: () => {
              const uu = null === Zu || void 0 === Zu ? void 0 : Zu.trace.getSpanContext(Zu.context.active());
              return uu ? {
                trace_id: uu.traceId,
                span_id: uu.spanId
              } : void 0
            },
            initOTEL: (uu, ju) => {
              Eu.debug("Initializing OpenTelemetry"), Zu = {
                trace: uu,
                context: ju
              }
            },
            isOTELInitialized: () => !!Zu,
            pushTraces: uu => {
              try {
                if (!IE(su).shouldCapture()) return;
                const ju = {
                  type: "trace",
                  payload: uu,
                  meta: WZ(su)
                };
                Eu.debug("Pushing trace\n", ju), Uu.execute(ju)
              } catch (ju) {
                Eu.error("Error pushing trace\n", ju)
              }
            }
          }
        }(0, Eu, 0, su, Uu),
        qu = {
          unpatchedConsole: uu,
          internalLogger: Eu,
          userActionsApi: Xu,
          config: ju,
          metas: su,
          transports: Uu,
          tracesApi: lu
        },
        fu = function(uu) {
          let {
            internalLogger: Eu,
            config: ju,
            metas: su,
            transports: Uu,
            tracesApi: Zu,
            userActionsApi: Xu
          } = uu, lu = null;
          return {
            pushEvent: function(uu, qu, fu) {
              let {
                skipDedupe: Cu,
                spanContext: bu,
                timestampOverwriteMs: cu,
                customPayloadTransformer: Nu = uu => uu
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!IE(su).shouldCapture()) return;
                const Ou = QE(qu),
                  Yu = Nu({
                    name: uu,
                    domain: null !== fu && void 0 !== fu ? fu : ju.eventDomain,
                    attributes: Tu(Ou) ? void 0 : Ou,
                    timestamp: cu ? YE(cu) : OE(),
                    trace: bu ? {
                      trace_id: bu.traceId,
                      span_id: bu.spanId
                    } : Zu.getTraceContext()
                  }),
                  hu = {
                    name: Yu.name,
                    attributes: Yu.attributes,
                    domain: Yu.domain
                  };
                if (!Cu && ju.dedupe && !Gu(lu) && gE(hu, lu)) return void Eu.debug("Skipping event push because it is the same as the last one\n", Yu);
                const Du = lu,
                  gu = WZ(su);
                if (lu !== Du && !Cu && ju.dedupe && gE(hu, lu)) return;
                lu = hu;
                const Mu = {
                  meta: gu,
                  payload: Yu,
                  type: "event"
                };
                Eu.debug("Pushing event\n", Mu), JU(Xu.getActiveUserAction(), Mu) || Uu.execute(Mu)
              } catch (Ou) {
                Eu.error("Error pushing event", Ou)
              }
            }
          }
        }(qu);
      return Zu = fu.pushEvent, zE(zE(zE(zE(zE(zE(zE({}, lu), nZ(qu)), function(uu) {
        let Eu, ju, su, Uu, {
          internalLogger: Zu,
          metas: Xu
        } = uu;
        Zu.debug("Initializing meta API");
        const lu = uu => {
            ju && Xu.remove(ju), ju = {
              user: uu
            }, Xu.add(ju)
          },
          qu = (uu, ju) => {
            var su;
            const Uu = null === ju || void 0 === ju ? void 0 : ju.overrides,
              Zu = Uu ? {
                overrides: zE(zE({}, null === Eu || void 0 === Eu || null === (su = Eu.session) || void 0 === su ? void 0 : su.overrides), Uu)
              } : {};
            Eu && Xu.remove(Eu), Eu = {
              session: zE(zE({}, Tu(uu) ? void 0 : uu), Zu)
            }, Xu.add(Eu)
          },
          fu = (uu, Eu) => {
            IE(Xu).notifySessionUpdate({
              type: "replace",
              session: uu,
              overrides: null === Eu || void 0 === Eu ? void 0 : Eu.overrides
            }), qu(uu, Eu)
          },
          Cu = () => Xu.value.session,
          bu = () => Xu.value.page;
        return {
          setUser: lu,
          resetUser: lu,
          setSession: fu,
          resetSession: fu,
          getSession: Cu,
          setView: (uu, Eu) => {
            var ju;
            if ((null === Eu || void 0 === Eu ? void 0 : Eu.overrides) && (IE(Xu).notifySessionUpdate({
                type: "overrides",
                overrides: Eu.overrides
              }), qu(Cu(), {
                overrides: Eu.overrides
              })), (null === su || void 0 === su || null === (ju = su.view) || void 0 === ju ? void 0 : ju.name) === (null === uu || void 0 === uu ? void 0 : uu.name)) return;
            const Uu = su;
            su = {
              view: uu
            }, Xu.add(su), Uu && Xu.remove(Uu)
          },
          getView: () => Xu.value.view,
          setPage: uu => {
            var Eu;
            const ju = pu(uu) ? zE(zE({}, null !== (Eu = null === Uu || void 0 === Uu ? void 0 : Uu.page) && void 0 !== Eu ? Eu : bu()), {}, {
              id: uu
            }) : uu;
            Uu && Xu.remove(Uu), Uu = {
              page: ju
            }, Xu.add(Uu)
          },
          getPage: bu
        }
      }(qu)), function(uu) {
        let {
          internalLogger: Eu,
          config: ju,
          metas: su,
          transports: Uu,
          tracesApi: Zu,
          userActionsApi: Xu
        } = uu;
        var lu;
        Eu.debug("Initializing logs API");
        let qu = null;
        const fu = null !== (lu = ju.logArgsSerializer) && void 0 !== lu ? lu : mj;
        return {
          pushLog: function(uu) {
            let {
              context: lu,
              level: Cu,
              skipDedupe: bu,
              spanContext: cu,
              timestampOverwriteMs: Nu
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!IE(su).shouldCapture()) return;
              const Ou = QE(lu),
                Yu = {
                  message: fu(uu),
                  level: null !== Cu && void 0 !== Cu ? Cu : "log",
                  context: Tu(Ou) ? void 0 : Ou,
                  timestamp: Nu ? YE(Nu) : OE(),
                  trace: cu ? {
                    trace_id: cu.traceId,
                    span_id: cu.spanId
                  } : Zu.getTraceContext()
                },
                hu = {
                  message: Yu.message,
                  level: Yu.level,
                  context: Yu.context
                };
              if (!bu && ju.dedupe && !Gu(qu) && gE(hu, qu)) return void Eu.debug("Skipping log push because it is the same as the last one\n", Yu);
              const Du = qu,
                gu = WZ(su);
              if (qu !== Du && !bu && ju.dedupe && gE(hu, qu)) return;
              qu = hu;
              const Mu = {
                type: "log",
                payload: Yu,
                meta: gu
              };
              Eu.debug("Pushing log\n", Mu), JU(Xu.getActiveUserAction(), Mu) || Uu.execute(Mu)
            } catch (Ou) {
              Eu.error("Error pushing log\n", Ou)
            }
          }
        }
      }(qu)), function(uu) {
        let {
          internalLogger: Eu,
          config: ju,
          metas: su,
          transports: Uu,
          tracesApi: Zu,
          userActionsApi: Xu
        } = uu;
        Eu.debug("Initializing measurements API");
        let lu = null;
        return {
          pushMeasurement: function(uu) {
            let {
              skipDedupe: qu,
              context: fu,
              spanContext: Cu,
              timestampOverwriteMs: bu
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!IE(su).shouldCapture()) return;
              const cu = QE(fu),
                Nu = zE(zE({}, uu), {}, {
                  trace: Cu ? {
                    trace_id: Cu.traceId,
                    span_id: Cu.spanId
                  } : Zu.getTraceContext(),
                  timestamp: bu ? YE(bu) : OE(),
                  context: Tu(cu) ? void 0 : cu
                }),
                Ou = {
                  type: Nu.type,
                  values: Nu.values,
                  context: Nu.context
                };
              if (!qu && ju.dedupe && !Gu(lu) && gE(Ou, lu)) return void Eu.debug("Skipping measurement push because it is the same as the last one\n", Nu);
              const Yu = lu,
                hu = WZ(su);
              if (lu !== Yu && !qu && ju.dedupe && gE(Ou, lu)) return;
              lu = Ou;
              const Du = {
                type: "measurement",
                payload: Nu,
                meta: hu
              };
              Eu.debug("Pushing measurement\n", Du), JU(Xu.getActiveUserAction(), Du) || Uu.execute(Du)
            } catch (cu) {
              Eu.error("Error pushing measurement\n", cu)
            }
          }
        }
      }(qu)), fu), Xu)
    }

    function zZ(uu) {
      const Eu = xZ(uu),
        ju = AZ(Eu, uu);
      if (Ou() && !uu.isolate) return void ju.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      ju.debug("Initializing");
      const su = function(uu, Eu) {
          let ju, su = [],
            Uu = [],
            Zu = [],
            Xu = 0,
            lu = 0;
          const qu = () => su.reduce(((uu, Eu) => Object.assign(uu, ou(Eu) ? Eu() : Eu)), {}),
            fu = () => {
              if (Uu.length) {
                const uu = qu();
                Uu.forEach((Eu => Eu(uu)))
              }
            };
          return {
            add: function() {
              for (var uu = arguments.length, ju = new Array(uu), Uu = 0; Uu < uu; Uu++) ju[Uu] = arguments[Uu];
              Eu.debug("Adding metas\n", ju), su.push(...ju), fu()
            },
            remove: function() {
              for (var uu = arguments.length, ju = new Array(uu), Uu = 0; Uu < uu; Uu++) ju[Uu] = arguments[Uu];
              Eu.debug("Removing metas\n", ju), su = su.filter((uu => !ju.includes(uu))), fu()
            },
            addListener: uu => {
              Eu.debug("Adding metas listener\n", uu), Uu.push(uu)
            },
            removeListener: uu => {
              Eu.debug("Removing metas listener\n", uu), Uu = Uu.filter((Eu => Eu !== uu))
            },
            capture: uu => {
              var Eu;
              const su = void 0 !== ju,
                Uu = null !== (Eu = ju) && void 0 !== Eu ? Eu : Zu;
              su || (ju = Uu, Xu = 0, lu = Uu.length);
              try {
                for (; Xu < lu;) {
                  const uu = Uu[Xu++];
                  null === uu || void 0 === uu || uu()
                }
                const Eu = iZ(qu());
                return null === uu || void 0 === uu || uu(), Eu
              } finally {
                su || (ju = void 0)
              }
            },
            addCaptureListener: uu => {
              Zu.push(uu)
            },
            removeCaptureListener: uu => {
              Zu = Zu.filter((Eu => Eu !== uu))
            },
            get value() {
              return qu()
            }
          }
        }(0, ju),
        Uu = BZ(Eu, ju, uu, su),
        Zu = yZ(Eu, ju, uu, su, Uu),
        Xu = function(uu, Eu, ju, su, Uu, Zu) {
          Eu.debug("Initializing instrumentations");
          const Xu = [];
          return {
            add: function() {
              Eu.debug("Adding instrumentations");
              for (var lu = arguments.length, qu = new Array(lu), fu = 0; fu < lu; fu++) qu[fu] = arguments[fu];
              qu.forEach((lu => {
                Eu.debug(`Adding "${lu.name}" instrumentation`), Xu.some((uu => uu.name === lu.name)) ? Eu.warn(`Instrumentation ${lu.name} is already added`) : (lu.unpatchedConsole = uu, lu.internalLogger = Eu, lu.config = ju, lu.metas = su, lu.transports = Uu, lu.api = Zu, Xu.push(lu), lu.initialize())
              }))
            },
            get instrumentations() {
              return [...Xu]
            },
            remove: function() {
              Eu.debug("Removing instrumentations");
              for (var uu = arguments.length, ju = new Array(uu), su = 0; su < uu; su++) ju[su] = arguments[su];
              ju.forEach((uu => {
                var ju, su;
                Eu.debug(`Removing "${uu.name}" instrumentation`);
                const Uu = Xu.reduce(((Eu, ju, su) => null === Eu && ju.name === uu.name ? su : null), null);
                null !== Uu ? (null === (ju = (su = Xu[Uu]).destroy) || void 0 === ju || ju.call(su), Xu.splice(Uu, 1)) : Eu.warn(`Instrumentation "${uu.name}" is not added`)
              }))
            }
          }
        }(Eu, ju, uu, su, Uu, Zu),
        lu = hu(Eu, ju, uu, su, Uu, Zu, Xu);
      return IZ(lu),
        function(uu) {
          uu.transports.add(...uu.config.transports), uu.transports.addBeforeSendHooks(uu.config.beforeSend)
        }(lu),
        function(uu) {
          uu.instrumentations.add(...uu.config.instrumentations)
        }(lu), lu
    }

    function RZ(uu) {
      const Eu = vZ(uu);
      if (Eu) return zZ(Eu)
    }
  },
  6908: function(uu, Eu, ju) {
    var su;
    ! function(Uu, Zu) {
      var Xu = "function",
        lu = "undefined",
        qu = "object",
        fu = "string",
        Cu = "major",
        bu = "model",
        cu = "name",
        Nu = "type",
        Ou = "vendor",
        Yu = "version",
        hu = "architecture",
        Du = "console",
        gu = "mobile",
        Mu = "tablet",
        eu = "smarttv",
        Gu = "wearable",
        pu = "embedded",
        wu = "Amazon",
        Ju = "Apple",
        du = "ASUS",
        au = "BlackBerry",
        Pu = "Browser",
        ou = "Chrome",
        ku = "Firefox",
        mu = "Google",
        vu = "Honor",
        Ku = "Huawei",
        Vu = "LG",
        ru = "Microsoft",
        Qu = "Motorola",
        iu = "Nvidia",
        Wu = "OnePlus",
        Su = "Opera",
        Iu = "OPPO",
        Fu = "Samsung",
        Bu = "Sharp",
        Lu = "Sony",
        tu = "Xiaomi",
        xu = "Zebra",
        Tu = "Facebook",
        Hu = "Chromium OS",
        Au = "Mac OS",
        nu = " Browser",
        yu = function(uu) {
          for (var Eu = {}, ju = 0; ju < uu.length; ju++) Eu[uu[ju].toUpperCase()] = uu[ju];
          return Eu
        },
        zu = function(uu, Eu) {
          return typeof uu === fu && -1 !== Ru(Eu).indexOf(Ru(uu))
        },
        Ru = function(uu) {
          return uu.toLowerCase()
        },
        uE = function(uu, Eu) {
          if (typeof uu === fu) return uu = uu.replace(/^\s\s*/, ""), typeof Eu === lu ? uu : uu.substring(0, 500)
        },
        EE = function(uu, Eu) {
          for (var ju, su, Uu, lu, fu, Cu, bu = 0; bu < Eu.length && !fu;) {
            var cu = Eu[bu],
              Nu = Eu[bu + 1];
            for (ju = su = 0; ju < cu.length && !fu && cu[ju];)
              if (fu = cu[ju++].exec(uu))
                for (Uu = 0; Uu < Nu.length; Uu++) Cu = fu[++su], typeof(lu = Nu[Uu]) === qu && lu.length > 0 ? 2 === lu.length ? typeof lu[1] == Xu ? this[lu[0]] = lu[1].call(this, Cu) : this[lu[0]] = lu[1] : 3 === lu.length ? typeof lu[1] !== Xu || lu[1].exec && lu[1].test ? this[lu[0]] = Cu ? Cu.replace(lu[1], lu[2]) : Zu : this[lu[0]] = Cu ? lu[1].call(this, Cu, lu[2]) : Zu : 4 === lu.length && (this[lu[0]] = Cu ? lu[3].call(this, Cu.replace(lu[1], lu[2])) : Zu) : this[lu] = Cu || Zu;
            bu += 2
          }
        },
        jE = function(uu, Eu) {
          for (var ju in Eu)
            if (typeof Eu[ju] === qu && Eu[ju].length > 0) {
              for (var su = 0; su < Eu[ju].length; su++)
                if (zu(Eu[ju][su], uu)) return "?" === ju ? Zu : ju
            } else if (zu(Eu[ju], uu)) return "?" === ju ? Zu : ju;
          return Eu.hasOwnProperty("*") ? Eu["*"] : uu
        },
        sE = {
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
        UE = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Yu, [cu, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Yu, [cu, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [cu, Yu],
            [/opios[\/ ]+([\w\.]+)/i],
            [Yu, [cu, Su + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Yu, [cu, Su + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Yu, [cu, Su]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Yu, [cu, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Yu, [cu, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [cu, Yu],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Yu, [cu, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Yu, [cu, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Yu, [cu, "UC" + Pu]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Yu, [cu, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Yu, [cu, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Yu, [cu, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Yu, [cu, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Yu, [cu, "Smart Lenovo " + Pu]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [cu, /(.+)/, "$1 Secure " + Pu], Yu
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Yu, [cu, ku + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Yu, [cu, Su + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Yu, [cu, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Yu, [cu, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Yu, [cu, Su + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Yu, [cu, "MIUI" + nu]],
            [/fxios\/([\w\.-]+)/i],
            [Yu, [cu, ku]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Yu, [cu, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [cu, /(.+)/, "$1Browser"], Yu
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [cu, /(.+)/, "$1" + nu], Yu
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Yu, [cu, Fu + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Yu, [cu, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [cu, "Sogou Mobile"], Yu
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [cu, Yu],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [cu],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Yu, cu],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [cu, Tu], Yu
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [cu, Yu],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Yu, [cu, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Yu, [cu, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Yu, [cu, ou + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [cu, ou + " WebView"], Yu
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Yu, [cu, "Android " + Pu]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [cu, Yu],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Yu, [cu, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Yu, cu],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [cu, [Yu, jE, {
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
            [cu, Yu],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [cu, "Netscape"], Yu
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [cu, Yu],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Yu, [cu, ku + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [cu, [Yu, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [cu, [Yu, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [hu, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [hu, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [hu, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [hu, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [hu, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [hu, /ower/, "", Ru]
            ],
            [/ sun4\w[;\)]/i],
            [
              [hu, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [hu, Ru]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [bu, [Ou, Fu],
              [Nu, Mu]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [bu, [Ou, Fu],
              [Nu, gu]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [bu, [Ou, Ju],
              [Nu, gu]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [bu, [Ou, Ju],
              [Nu, Mu]
            ],
            [/(macintosh);/i],
            [bu, [Ou, Ju]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [bu, [Ou, Bu],
              [Nu, gu]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [bu, [Ou, vu],
              [Nu, Mu]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [bu, [Ou, vu],
              [Nu, gu]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [bu, [Ou, Ku],
              [Nu, Mu]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [bu, [Ou, Ku],
              [Nu, gu]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [bu, /_/g, " "],
              [Ou, tu],
              [Nu, Mu]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [bu, /_/g, " "],
              [Ou, tu],
              [Nu, gu]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [bu, [Ou, Iu],
              [Nu, gu]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [bu, [Ou, jE, {
                OnePlus: ["304", "403", "203"],
                "*": Iu
              }],
              [Nu, Mu]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [bu, [Ou, "Vivo"],
              [Nu, gu]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [bu, [Ou, "Realme"],
              [Nu, gu]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [bu, [Ou, Qu],
              [Nu, gu]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [bu, [Ou, Qu],
              [Nu, Mu]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [bu, [Ou, Vu],
              [Nu, Mu]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [bu, [Ou, Vu],
              [Nu, gu]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [bu, [Ou, "Lenovo"],
              [Nu, Mu]
            ],
            [/(nokia) (t[12][01])/i],
            [Ou, bu, [Nu, Mu]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [bu, /_/g, " "],
              [Nu, gu],
              [Ou, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [bu, [Ou, mu],
              [Nu, Mu]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [bu, [Ou, mu],
              [Nu, gu]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [bu, [Ou, Lu],
              [Nu, gu]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [bu, "Xperia Tablet"],
              [Ou, Lu],
              [Nu, Mu]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [bu, [Ou, Wu],
              [Nu, gu]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [bu, [Ou, wu],
              [Nu, Mu]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [bu, /(.+)/g, "Fire Phone $1"],
              [Ou, wu],
              [Nu, gu]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [bu, Ou, [Nu, Mu]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [bu, [Ou, au],
              [Nu, gu]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [bu, [Ou, du],
              [Nu, Mu]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [bu, [Ou, du],
              [Nu, gu]
            ],
            [/(nexus 9)/i],
            [bu, [Ou, "HTC"],
              [Nu, Mu]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Ou, [bu, /_/g, " "],
              [Nu, gu]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [bu, [Ou, "TCL"],
              [Nu, Mu]
            ],
            [/(itel) ((\w+))/i],
            [
              [Ou, Ru], bu, [Nu, jE, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [bu, [Ou, "Acer"],
              [Nu, Mu]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [bu, [Ou, "Meizu"],
              [Nu, gu]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [bu, [Ou, "Ulefone"],
              [Nu, gu]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [bu, [Ou, "Energizer"],
              [Nu, gu]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [bu, [Ou, "Cat"],
              [Nu, gu]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [bu, [Ou, "Smartfren"],
              [Nu, gu]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [bu, [Ou, "Nothing"],
              [Nu, gu]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [bu, [Ou, "Archos"],
              [Nu, Mu]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [bu, [Ou, "Archos"],
              [Nu, gu]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Ou, bu, [Nu, Mu]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Ou, bu, [Nu, gu]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Ou, bu, [Nu, Mu]],
            [/(surface duo)/i],
            [bu, [Ou, ru],
              [Nu, Mu]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [bu, [Ou, "Fairphone"],
              [Nu, gu]
            ],
            [/(u304aa)/i],
            [bu, [Ou, "AT&T"],
              [Nu, gu]
            ],
            [/\bsie-(\w*)/i],
            [bu, [Ou, "Siemens"],
              [Nu, gu]
            ],
            [/\b(rct\w+) b/i],
            [bu, [Ou, "RCA"],
              [Nu, Mu]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [bu, [Ou, "Dell"],
              [Nu, Mu]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [bu, [Ou, "Verizon"],
              [Nu, Mu]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [bu, [Ou, "Barnes & Noble"],
              [Nu, Mu]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [bu, [Ou, "NuVision"],
              [Nu, Mu]
            ],
            [/\b(k88) b/i],
            [bu, [Ou, "ZTE"],
              [Nu, Mu]
            ],
            [/\b(nx\d{3}j) b/i],
            [bu, [Ou, "ZTE"],
              [Nu, gu]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [bu, [Ou, "Swiss"],
              [Nu, gu]
            ],
            [/\b(zur\d{3}) b/i],
            [bu, [Ou, "Swiss"],
              [Nu, Mu]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [bu, [Ou, "Zeki"],
              [Nu, Mu]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Ou, "Dragon Touch"], bu, [Nu, Mu]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [bu, [Ou, "Insignia"],
              [Nu, Mu]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [bu, [Ou, "NextBook"],
              [Nu, Mu]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Ou, "Voice"], bu, [Nu, gu]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Ou, "LvTel"], bu, [Nu, gu]
            ],
            [/\b(ph-1) /i],
            [bu, [Ou, "Essential"],
              [Nu, gu]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [bu, [Ou, "Envizen"],
              [Nu, Mu]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [bu, [Ou, "MachSpeed"],
              [Nu, Mu]
            ],
            [/\btu_(1491) b/i],
            [bu, [Ou, "Rotor"],
              [Nu, Mu]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [bu, [Ou, iu],
              [Nu, Mu]
            ],
            [/(sprint) (\w+)/i],
            [Ou, bu, [Nu, gu]],
            [/(kin\.[onetw]{3})/i],
            [
              [bu, /\./g, " "],
              [Ou, ru],
              [Nu, gu]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [bu, [Ou, xu],
              [Nu, Mu]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [bu, [Ou, xu],
              [Nu, gu]
            ],
            [/smart-tv.+(samsung)/i],
            [Ou, [Nu, eu]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [bu, /^/, "SmartTV"],
              [Ou, Fu],
              [Nu, eu]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Ou, Vu],
              [Nu, eu]
            ],
            [/(apple) ?tv/i],
            [Ou, [bu, Ju + " TV"],
              [Nu, eu]
            ],
            [/crkey/i],
            [
              [bu, ou + "cast"],
              [Ou, mu],
              [Nu, eu]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [bu, [Ou, wu],
              [Nu, eu]
            ],
            [/(shield \w+ tv)/i],
            [bu, [Ou, iu],
              [Nu, eu]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [bu, [Ou, Bu],
              [Nu, eu]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [bu, [Ou, Lu],
              [Nu, eu]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [bu, [Ou, tu],
              [Nu, eu]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Ou, bu, [Nu, eu]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Ou, uE],
              [bu, uE],
              [Nu, eu]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [bu, [Nu, eu]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Nu, eu]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Ou, bu, [Nu, Du]],
            [/droid.+; (shield)( bui|\))/i],
            [bu, [Ou, iu],
              [Nu, Du]
            ],
            [/(playstation \w+)/i],
            [bu, [Ou, Lu],
              [Nu, Du]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [bu, [Ou, ru],
              [Nu, Du]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [bu, [Ou, Fu],
              [Nu, Gu]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Ou, bu, [Nu, Gu]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [bu, [Ou, Iu],
              [Nu, Gu]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [bu, [Ou, Ju],
              [Nu, Gu]
            ],
            [/(opwwe\d{3})/i],
            [bu, [Ou, Wu],
              [Nu, Gu]
            ],
            [/(moto 360)/i],
            [bu, [Ou, Qu],
              [Nu, Gu]
            ],
            [/(smartwatch 3)/i],
            [bu, [Ou, Lu],
              [Nu, Gu]
            ],
            [/(g watch r)/i],
            [bu, [Ou, Vu],
              [Nu, Gu]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [bu, [Ou, xu],
              [Nu, Gu]
            ],
            [/droid.+; (glass) \d/i],
            [bu, [Ou, mu],
              [Nu, Gu]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Ou, bu, [Nu, Gu]],
            [/; (quest( \d| pro)?)/i],
            [bu, [Ou, Tu],
              [Nu, Gu]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Ou, [Nu, pu]],
            [/(aeobc)\b/i],
            [bu, [Ou, wu],
              [Nu, pu]
            ],
            [/(homepod).+mac os/i],
            [bu, [Ou, Ju],
              [Nu, pu]
            ],
            [/windows iot/i],
            [
              [Nu, pu]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [bu, [Nu, gu]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [bu, [Nu, Mu]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Nu, Mu]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Nu, gu]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [bu, [Ou, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Yu, [cu, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [cu, Yu],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Yu, [cu, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [cu, Yu],
            [/ladybird\//i],
            [
              [cu, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Yu, cu]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [cu, Yu],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [cu, [Yu, jE, sE]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Yu, jE, sE],
              [cu, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Yu, /_/g, "."],
              [cu, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [cu, Au],
              [Yu, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Yu, cu],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [cu, /(.+)/, "$1 Touch"], Yu
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [cu, Yu],
            [/\(bb(10);/i],
            [Yu, [cu, au]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Yu, [cu, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Yu, [cu, ku + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Yu, [cu, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Yu, [cu, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Yu, [cu, ou + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [cu, Hu], Yu
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [cu, Yu],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [cu, "Solaris"], Yu
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [cu, Yu]
          ]
        },
        ZE = function(uu, Eu) {
          if (typeof uu === qu && (Eu = uu, uu = Zu), !(this instanceof ZE)) return new ZE(uu, Eu).getResult();
          var ju = typeof Uu !== lu && Uu.navigator ? Uu.navigator : Zu,
            su = uu || (ju && ju.userAgent ? ju.userAgent : ""),
            Du = ju && ju.userAgentData ? ju.userAgentData : Zu,
            eu = Eu ? function(uu, Eu) {
              var ju = {};
              for (var su in uu) Eu[su] && Eu[su].length % 2 === 0 ? ju[su] = Eu[su].concat(uu[su]) : ju[su] = uu[su];
              return ju
            }(UE, Eu) : UE,
            Gu = ju && ju.userAgent == su;
          return this.getBrowser = function() {
            var uu, Eu = {};
            return Eu[cu] = Zu, Eu[Yu] = Zu, EE.call(Eu, su, eu.browser), Eu[Cu] = typeof(uu = Eu[Yu]) === fu ? uu.replace(/[^\d\.]/g, "").split(".")[0] : Zu, Gu && ju && ju.brave && typeof ju.brave.isBrave == Xu && (Eu[cu] = "Brave"), Eu
          }, this.getCPU = function() {
            var uu = {};
            return uu[hu] = Zu, EE.call(uu, su, eu.cpu), uu
          }, this.getDevice = function() {
            var uu = {};
            return uu[Ou] = Zu, uu[bu] = Zu, uu[Nu] = Zu, EE.call(uu, su, eu.device), Gu && !uu[Nu] && Du && Du.mobile && (uu[Nu] = gu), Gu && "Macintosh" == uu[bu] && ju && typeof ju.standalone !== lu && ju.maxTouchPoints && ju.maxTouchPoints > 2 && (uu[bu] = "iPad", uu[Nu] = Mu), uu
          }, this.wO = function() {
            var uu = {};
            return uu[cu] = Zu, uu[Yu] = Zu, EE.call(uu, su, eu.engine), uu
          }, this.getOS = function() {
            var uu = {};
            return uu[cu] = Zu, uu[Yu] = Zu, EE.call(uu, su, eu.os), Gu && !uu[cu] && Du && Du.platform && "Unknown" != Du.platform && (uu[cu] = Du.platform.replace(/chrome os/i, Hu).replace(/macos/i, Au)), uu
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.wO(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return su
          }, this.setUA = function(uu) {
            return su = typeof uu === fu && uu.length > 500 ? uE(uu, 500) : uu, this
          }, this.setUA(su), this
        };
      ZE.VERSION = "1.0.41", ZE.BROWSER = yu([cu, Yu, Cu]), ZE.CPU = yu([hu]), ZE.DEVICE = yu([bu, Ou, Nu, Du, gu, eu, Mu, Gu, pu]), ZE.ENGINE = ZE.OS = yu([cu, Yu]), typeof Eu !== lu ? (uu.exports && (Eu = uu.exports = ZE), Eu.UAParser = ZE) : ju.amdO ? (su = function() {
        return ZE
      }.call(Eu, ju, Eu, uu)) === Zu || (uu.exports = su) : typeof Uu !== lu && (Uu.UAParser = ZE);
      var XE = typeof Uu !== lu && (Uu.jQuery || Uu.Zepto);
      if (XE && !XE.ua) {
        var lE = new ZE;
        XE.ua = lE.getResult(), XE.ua.get = function() {
          return lE.getUA()
        }, XE.ua.set = function(uu) {
          lE.setUA(uu);
          var Eu = lE.getResult();
          for (var ju in Eu) XE.ua[ju] = Eu[ju]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);