export const id = 31;
export const ids = [31];
export const modules = {
  6472: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BaseExtension: () => uy,
      BaseInstrumentation: () => Ry,
      BaseTransport: () => vK,
      CSPInstrumentation: () => eK,
      ConsoleInstrumentation: () => ny,
      ConsoleTransport: () => yQ,
      EVENT_CLICK: () => HR,
      EVENT_NAVIGATION: () => dR,
      EVENT_ROUTE_CHANGE: () => DR,
      EVENT_SESSION_EXTEND: () => eR,
      EVENT_SESSION_RESUME: () => kR,
      EVENT_SESSION_START: () => CR,
      EVENT_VIEW_CHANGED: () => bR,
      ErrorsInstrumentation: () => ty,
      FetchTransport: () => dQ,
      InternalLoggerLevel: () => PR,
      LogLevel: () => Hy,
      MAX_SESSION_PERSISTENCE_TIME: () => Nu,
      NavigationInstrumentation: () => FK,
      Observable: () => jy,
      PerformanceInstrumentation: () => YE,
      PersistentSessionsManager: () => cR,
      SESSION_EXPIRATION_TIME: () => Qu,
      SESSION_INACTIVITY_TIME: () => mu,
      STORAGE_KEY: () => Ku,
      SessionInstrumentation: () => Ey,
      TransportItemType: () => aK,
      UserActionInstrumentation: () => kK,
      UserActionState: () => SK,
      VERSION: () => yy,
      ViewInstrumentation: () => gy,
      VolatileSessionsManager: () => LR,
      WebVitalsInstrumentation: () => sE,
      allLogLevels: () => by,
      browserMeta: () => YK,
      buildStackFrame: () => Ky,
      captureMetas: () => gQ,
      createInternalLogger: () => AQ,
      createPromiseBuffer: () => BQ,
      createSession: () => qK,
      deepEqual: () => jR,
      defaultEventDomain: () => Eu,
      defaultExceptionType: () => Ay,
      defaultGlobalObjectKey: () => DQ,
      defaultInternalLoggerLevel: () => YR,
      defaultLogLevel: () => dy,
      faro: () => pu,
      genShortID: () => WR,
      getCurrentTimestamp: () => SR,
      getDataFromSafariExtensions: () => By,
      getIgnoreUrls: () => ou,
      getInternalFaroFromGlobalObject: () => Bu,
      getStackFramesFromError: () => Sy,
      getTransportBody: () => RQ,
      getUrlFromResource: () => Ou,
      getWebInstrumentations: () => wK,
      globalObject: () => Vu,
      initializeFaro: () => vQ,
      internalGlobalObjectKey: () => ru,
      isArray: () => Gu,
      isBoolean: () => Au,
      isDomError: () => zu,
      isDomException: () => Fu,
      isElement: () => Zu,
      isElementDefined: () => wu,
      RS: () => Yu,
      isError: () => cu,
      isErrorDefined: () => gu,
      isErrorEvent: () => Lu,
      isEvent: () => lu,
      isEventDefined: () => tu,
      isFunction: () => Iu,
      isInstanceOf: () => Hu,
      isInt: () => eu,
      isInternalFaroOnGlobalObject: () => Su,
      isMap: () => Pu,
      isMapDefined: () => hu,
      isNull: () => bu,
      isNumber: () => ku,
      isObject: () => Mu,
      isPrimitive: () => su,
      isRegExp: () => Uu,
      isString: () => Cu,
      isSymbol: () => Du,
      isSyntheticEvent: () => iu,
      isThenable: () => nu,
      isToString: () => ju,
      isTypeof: () => Wu,
      isUndefined: () => du,
      makeCoreConfig: () => GQ,
      noop: () => hR,
      osMeta: () => oK,
      parseStacktrace: () => py,
      sdkMeta: () => OK,
      setInternalFaroOnGlobalObject: () => xu,
      transportItemTypeToBodyKey: () => fK,
      unknownString: () => ly,
      userActionDataAttribute: () => oE,
      userActionTimeoutDataAttribute: () => qE
    });
    const Eu = "browser",
      Ku = "com.grafana.faro.session",
      Qu = 144e5,
      mu = 9e5,
      Ju = 1e3,
      Nu = mu,
      Xu = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Nu
      };
    const Vu = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof yu.g ? yu.g : "undefined" !== typeof self ? self : void 0;
    const ru = "_faroInternal";

    function Bu() {
      return Vu[ru]
    }

    function xu(uu) {
      uu.config.isolate ? uu.internalLogger.debug("Skipping registering internal Faro instance on global object") : (uu.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Vu, ru, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: uu
      }))
    }

    function Su() {
      return ru in Vu
    }
    let pu = {
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

    function Tu(uu, Ru, yu, Eu, Ku, Qu, mu) {
      return Ru.debug("Initializing Faro"), pu = {
          api: Qu,
          config: yu,
          instrumentations: mu,
          internalLogger: Ru,
          metas: Eu,
          pause: Ku.pause,
          transports: Ku,
          unpatchedConsole: uu,
          unpause: Ku.unpause
        }, xu(pu),
        function(uu) {
          if (uu.config.preventGlobalExposure) uu.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (uu.internalLogger.debug(`Registering public faro reference in the global scope using "${uu.config.globalObjectKey}" key`), uu.config.globalObjectKey in Vu) return void uu.internalLogger.warn(`Skipping global registration due to key "${uu.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Vu, uu.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: uu
            })
          }
        }(pu), pu
    }

    function Wu(uu, Ru) {
      return typeof uu === Ru
    }

    function ju(uu, Ru) {
      return Object.prototype.toString.call(uu) === `[object ${Ru}]`
    }

    function Hu(uu, Ru) {
      try {
        return uu instanceof Ru
      } catch (yu) {
        return !1
      }
    }
    const du = uu => Wu(uu, "undefined"),
      bu = uu => Wu(uu, "null"),
      Cu = uu => Wu(uu, "string"),
      ku = uu => Wu(uu, "number") && !isNaN(uu) || Wu(uu, "bigint"),
      eu = uu => ku(uu) && Number.isInteger(uu),
      Au = uu => Wu(uu, "boolean"),
      Du = uu => Wu(uu, "symbol"),
      Mu = uu => !bu(uu) && Wu(uu, "object"),
      Iu = uu => Wu(uu, "function"),
      Gu = uu => ju(uu, "Array"),
      Uu = uu => ju(uu, "RegExp"),
      nu = uu => Iu(null === uu || void 0 === uu ? void 0 : uu.then),
      su = uu => !Mu(uu) && !Iu(uu),
      tu = "undefined" !== typeof Event,
      lu = uu => tu && Hu(uu, Event),
      gu = "undefined" !== typeof Error,
      cu = uu => gu && Hu(uu, Error),
      Lu = uu => ju(uu, "ErrorEvent"),
      zu = uu => ju(uu, "DOMError"),
      Fu = uu => ju(uu, "DOMException"),
      wu = "undefined" !== typeof Element,
      Zu = uu => wu && Hu(uu, Element),
      hu = "undefined" !== typeof Map,
      Pu = uu => hu && Hu(uu, Map),
      iu = uu => Mu(uu) && "nativeEvent" in uu && "preventDefault" in uu && "stopPropagation" in uu;

    function Yu(uu) {
      return null == uu || (Gu(uu) || Cu(uu) ? 0 === uu.length : !!Mu(uu) && 0 === Object.keys(uu).length)
    }

    function ou() {
      return pu.transports.transports.flatMap((uu => uu.getIgnoreUrls()))
    }

    function qu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return ou().some((Ru => uu && null != uu.match(Ru)))
    }

    function Ou(uu) {
      return Cu(uu) ? uu : uu instanceof URL ? uu.href : !Yu(uu) && Iu(null === uu || void 0 === uu ? void 0 : uu.toString) ? uu.toString() : void 0
    }
    const vu = "sessionStorage",
      au = "localStorage";

    function fu(uu) {
      try {
        let Ru;
        Ru = window[uu];
        const yu = "__faro_storage_test__";
        return Ru.setItem(yu, yu), Ru.removeItem(yu), !0
      } catch (yu) {
        var Ru;
        return null === (Ru = pu.internalLogger) || void 0 === Ru || Ru.info(`Web storage of type ${uu} is not available. Reason: ${yu}`), !1
      }
    }

    function uR(uu, Ru) {
      return QR(Ru) ? window[Ru].getItem(uu) : null
    }

    function RR(uu, Ru, yu) {
      if (QR(yu)) try {
        window[yu].setItem(uu, Ru)
      } catch (Eu) {}
    }

    function yR(uu, Ru) {
      QR(Ru) && window[Ru].removeItem(uu)
    }
    const ER = fu(au),
      KR = fu(vu);

    function QR(uu) {
      return uu === au ? ER : uu === vu && KR
    }

    function mR(uu) {
      return mR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, mR(uu)
    }

    function JR(uu) {
      var Ru = function(uu, Ru) {
        if ("object" != mR(uu) || !uu) return uu;
        var yu = uu[Symbol.toPrimitive];
        if (void 0 !== yu) {
          var Eu = yu.call(uu, Ru || "default");
          if ("object" != mR(Eu)) return Eu;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Ru ? String : Number)(uu)
      }(uu, "string");
      return "symbol" == mR(Ru) ? Ru : Ru + ""
    }

    function NR(uu, Ru, yu) {
      return (Ru = JR(Ru)) in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }

    function XR(uu, Ru) {
      var yu = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var Eu = Object.getOwnPropertySymbols(uu);
        Ru && (Eu = Eu.filter((function(Ru) {
          return Object.getOwnPropertyDescriptor(uu, Ru).enumerable
        }))), yu.push.apply(yu, Eu)
      }
      return yu
    }

    function VR(uu) {
      for (var Ru = 1; Ru < arguments.length; Ru++) {
        var yu = null != arguments[Ru] ? arguments[Ru] : {};
        Ru % 2 ? XR(Object(yu), !0).forEach((function(Ru) {
          NR(uu, Ru, yu[Ru])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(yu)) : XR(Object(yu)).forEach((function(Ru) {
          Object.defineProperty(uu, Ru, Object.getOwnPropertyDescriptor(yu, Ru))
        }))
      }
      return uu
    }

    function rR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pu;
      var Ru, yu, Eu;
      const Ku = uu.config.sessionTracking,
        Qu = null !== (Ru = null !== (yu = null === Ku || void 0 === Ku || null === (Eu = Ku.sampler) || void 0 === Eu ? void 0 : Eu.call(Ku, {
          metas: uu.metas.value
        })) && void 0 !== yu ? yu : null === Ku || void 0 === Ku ? void 0 : Ku.samplingRate) && void 0 !== Ru ? Ru : 1,
        mu = "number" === typeof Qu ? function(uu) {
          return Math.min(1, Math.max(0, uu))
        }(Qu) : 0;
      if (!(mu > 0)) return !1;
      if (1 === mu) return !0;
      try {
        const uu = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === uu || void 0 === uu ? void 0 : uu.getRandomValues)) {
          const Ru = new Uint32Array(1);
          return uu.getRandomValues(Ru), Ru[0] / Math.pow(2, 32) < mu
        }
      } catch (Ju) {}
      return Math.random() < mu
    }

    function BR() {
      return Date.now()
    }

    function xR() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function SR() {
      return (new Date).toISOString()
    }

    function pR(uu) {
      return new Date(uu).toISOString()
    }
    const TR = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function WR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Ru = new Uint32Array(uu),
        yu = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === yu || void 0 === yu ? void 0 : yu.getRandomValues) yu.getRandomValues(Ru);
      else
        for (let Ku = 0; Ku < uu; Ku++) Ru[Ku] = Math.floor(4294967296 * Math.random());
      let Eu = "";
      for (let Ku = 0; Ku < uu; Ku++) Eu += TR[Ru[Ku] % 59];
      return Eu
    }

    function jR(uu, Ru) {
      if (uu === Ru) return !0;
      if (Wu(uu, "number") && isNaN(uu)) return Wu(Ru, "number") && isNaN(Ru);
      const yu = Gu(uu),
        Eu = Gu(Ru);
      if (yu !== Eu) return !1;
      if (yu && Eu) {
        const yu = uu.length;
        if (yu !== Ru.length) return !1;
        for (let Eu = yu; 0 !== Eu--;)
          if (!jR(uu[Eu], Ru[Eu])) return !1;
        return !0
      }
      const Ku = Mu(uu),
        Qu = Mu(Ru);
      if (Ku !== Qu) return !1;
      if (uu && Ru && Ku && Qu) {
        const yu = Object.keys(uu),
          Eu = Object.keys(Ru);
        if (yu.length !== Eu.length) return !1;
        for (let uu of yu)
          if (!Eu.includes(uu)) return !1;
        for (let Ku of yu)
          if (!jR(uu[Ku], Ru[Ku])) return !1;
        return !0
      }
      return !1
    }
    const HR = "click",
      dR = "navigation",
      bR = "view_changed",
      CR = "session_start",
      kR = "session_resume",
      eR = "session_extend",
      AR = "service_name_override",
      DR = "route_change";

    function MR() {
      let {
        sessionId: uu,
        started: Ru,
        lastActivity: yu,
        isSampled: Eu = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Ku = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pu;
      var Qu;
      const mu = BR(),
        Ju = null === (Qu = Ku.config) || void 0 === Qu || null === (Qu = Qu.sessionTracking) || void 0 === Qu ? void 0 : Qu.generateSessionId;
      return null == uu && (uu = "function" === typeof Ju ? Ju() : WR()), {
        sessionId: uu,
        lastActivity: null !== yu && void 0 !== yu ? yu : mu,
        started: null !== Ru && void 0 !== Ru ? Ru : mu,
        isSampled: Eu
      }
    }

    function IR(uu) {
      if (null == uu) return !1;
      const Ru = BR();
      return Ru - uu.started < 144e5 && Ru - uu.lastActivity < mu
    }

    function GR(uu) {
      let {
        fetchUserSession: Ru,
        storeUserSession: yu,
        adoptSession: Eu,
        updateInterval: Ku = 0
      } = uu, Ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pu, Nu = 0;
      return function() {
        let {
          forceSessionExtend: uu = !1,
          refreshActivity: Xu = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Vu, ru;
        if (!Ru || !yu) return;
        const Bu = BR();
        if (!uu && Bu < Nu && Nu - Bu <= Ku) return;
        const xu = Ju.config.sessionTracking,
          Su = null === xu || void 0 === xu ? void 0 : xu.persistent;
        if (Su && !ER || !Su && !KR) return;
        const pu = Ru();
        if (Nu = Math.min(Bu + Ku, (null !== (Vu = null === pu || void 0 === pu ? void 0 : pu.started) && void 0 !== Vu ? Vu : Bu) + Qu, (null !== (ru = null === pu || void 0 === pu ? void 0 : pu.lastActivity) && void 0 !== ru ? ru : Bu) + mu), !1 === uu && IR(pu)) {
          var Tu;
          Xu && yu(VR(VR({}, pu), {}, {
            lastActivity: Bu
          }));
          const uu = null === (Tu = Ju.metas.value.session) || void 0 === Tu ? void 0 : Tu.id;
          null != Eu && null != pu.sessionMeta && pu.sessionId !== uu && Eu(pu.sessionMeta)
        } else {
          var Wu, ju, Hu;
          let uu = nR(MR({
            isSampled: rR(Ju)
          }, Ju), pu, Ju);
          Nu = Bu + Ku, yu(uu), null === (Wu = Ju.api) || void 0 === Wu || Wu.setSession(uu.sessionMeta), null === xu || void 0 === xu || null === (ju = xu.onSessionChange) || void 0 === ju || ju.call(xu, null !== (Hu = null === pu || void 0 === pu ? void 0 : pu.sessionMeta) && void 0 !== Hu ? Hu : null, uu.sessionMeta)
        }
      }
    }

    function UR(uu) {
      let Ru, {
          fetchUserSession: yu,
          storeUserSession: Eu,
          updateInterval: Ku = 0
        } = uu,
        Qu = 0;
      return uu => {
        const mu = BR();
        if (uu === Ru && mu < Qu && Qu - mu <= Ku) return;
        Ru = uu, Qu = mu + Ku;
        const Ju = yu();
        (null === Ju || void 0 === Ju ? void 0 : Ju.sessionId) === uu && IR(Ju) && Eu(VR(VR({}, Ju), {}, {
          lastActivity: mu
        }))
      }
    }

    function nR(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pu;
      var Eu, Ku, Qu, mu, Ju, Nu;
      const Xu = VR(VR({}, uu), {}, {
          sessionMeta: {
            id: uu.sessionId,
            attributes: tR(VR(VR(VR({}, null === (Eu = yu.config.sessionTracking) || void 0 === Eu || null === (Eu = Eu.session) || void 0 === Eu ? void 0 : Eu.attributes), null !== (Ku = null === (Qu = yu.metas.value.session) || void 0 === Qu ? void 0 : Qu.attributes) && void 0 !== Ku ? Ku : {}), {}, {
              isSampled: uu.isSampled.toString()
            }))
          }
        }),
        Vu = null !== (mu = null === (Ju = yu.metas.value.session) || void 0 === Ju ? void 0 : Ju.overrides) && void 0 !== mu ? mu : null === Ru || void 0 === Ru || null === (Nu = Ru.sessionMeta) || void 0 === Nu ? void 0 : Nu.overrides;
      Yu(Vu) || (Xu.sessionMeta.overrides = Vu);
      const ru = null === Ru || void 0 === Ru ? void 0 : Ru.sessionId;
      return null != ru && (Xu.sessionMeta.attributes.previousSession = ru), Xu
    }

    function sR(uu) {
      let {
        fetchUserSession: Ru,
        storeUserSession: yu
      } = uu, Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pu, Ku = !1;
      return function(uu) {
        if (Ku) return;
        const Qu = uu.session,
          mu = Ru();
        let Ju = null === Qu || void 0 === Qu ? void 0 : Qu.id;
        const Nu = null === Qu || void 0 === Qu ? void 0 : Qu.attributes,
          Xu = null === Qu || void 0 === Qu ? void 0 : Qu.overrides,
          Vu = null === mu || void 0 === mu ? void 0 : mu.sessionMeta,
          ru = null === Vu || void 0 === Vu ? void 0 : Vu.overrides,
          Bu = !!Xu && !jR(Xu, ru),
          xu = !!Nu && !jR(Nu, null === Vu || void 0 === Vu ? void 0 : Vu.attributes);
        if (Qu && Ju !== (null === mu || void 0 === mu ? void 0 : mu.sessionId) || xu || Bu) {
          var Su, pu;
          const uu = null != mu && Ju === mu.sessionId,
            Ru = nR(uu ? mu : MR({
              sessionId: Ju,
              isSampled: rR(Eu)
            }, Eu), mu, Eu),
            Qu = null === mu || void 0 === mu || null === (Su = mu.sessionMeta) || void 0 === Su || null === (Su = Su.attributes) || void 0 === Su ? void 0 : Su.previousSession;
          uu && null != Qu && Qu !== Ru.sessionId && (Ru.sessionMeta.attributes.previousSession = Qu), (null === (pu = Ru.sessionMeta.attributes) || void 0 === pu ? void 0 : pu.previousSession) === Ru.sessionId && delete Ru.sessionMeta.attributes.previousSession, yu(Ru),
            function(uu, Ru) {
              let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Ku, Qu, mu;
              if (!Ru) return;
              const Ju = yu.serviceName,
                Nu = null !== (Ku = null !== (Qu = Eu.serviceName) && void 0 !== Qu ? Qu : null === (mu = uu.metas.value.app) || void 0 === mu ? void 0 : mu.name) && void 0 !== Ku ? Ku : "";
              Ju && Ju !== Nu && uu.api.pushEvent(AR, {
                serviceName: Ju,
                previousServiceName: Nu
              })
            }(Eu, Bu, Xu, ru), Ku = !0;
          try {
            Eu.api.setSession(Ru.sessionMeta)
          } finally {
            Ku = !1
          }
        }
      }
    }

    function tR(uu) {
      const Ru = {};
      for (const yu of Object.keys(uu)) {
        const Eu = uu[yu];
        void 0 !== Eu && (Ru[yu] = Eu)
      }
      return Ru
    }

    function lR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== uu && void 0 !== uu ? uu : {}, function() {
        const uu = new WeakSet;
        return function(Ru, yu) {
          if (Mu(yu) && null !== yu) {
            if (uu.has(yu)) return null;
            uu.add(yu)
          }
          return yu
        }
      }())
    }

    function gR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Ru = {};
      for (const [yu, Eu] of Object.entries(uu)) Ru[yu] = Mu(Eu) && null !== Eu ? lR(Eu) : String(Eu);
      return Ru
    }
    var cR = class uu {
      constructor() {
        var Ru = this;
        let yu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pu;
        this.context = yu, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = uu => {
          this.adopting = !0;
          try {
            var Ru;
            null === (Ru = this.context.api) || void 0 === Ru || Ru.setSession(uu)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: uu = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Ru.updateUserSession({
            refreshActivity: uu
          })
        }, this.recordActivity = UR({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          updateInterval: Ju
        }), this.updateUserSession = GR({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Ju
        }, yu), this.init()
      }
      static removeUserSession() {
        yR(Ku, uu.storageTypeLocal)
      }
      static storeUserSession(Ru) {
        RR(Ku, lR(Ru), uu.storageTypeLocal)
      }
      static fetchUserSession() {
        const Ru = uR(Ku, uu.storageTypeLocal);
        return Ru ? JSON.parse(Ru) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var uu;
            this.updateSession({
              refreshActivity: !1
            });
            const Ru = null === (uu = this.context.api) || void 0 === uu || null === (uu = uu.getSession()) || void 0 === uu ? void 0 : uu.id;
            Ru && this.recordActivity(Ru)
          }
        })), this.context.metas.addListener(sR({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession
        }, this.context))
      }
    };
    cR.storageTypeLocal = au;
    var LR = class uu {
      constructor() {
        var Ru = this;
        let yu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pu;
        this.context = yu, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: uu = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Ru.updateUserSession({
            refreshActivity: uu
          })
        }, this.recordActivity = UR({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          updateInterval: Ju
        }), this.updateUserSession = GR({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession,
          updateInterval: Ju
        }, yu), this.init()
      }
      static removeUserSession() {
        yR(Ku, uu.storageTypeSession)
      }
      static storeUserSession(Ru) {
        RR(Ku, lR(Ru), uu.storageTypeSession)
      }
      static fetchUserSession() {
        const Ru = uR(Ku, uu.storageTypeSession);
        return Ru ? JSON.parse(Ru) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var uu;
            this.updateSession({
              refreshActivity: !1
            });
            const Ru = null === (uu = this.context.api) || void 0 === uu || null === (uu = uu.getSession()) || void 0 === uu ? void 0 : uu.id;
            Ru && this.recordActivity(Ru)
          }
        })), this.context.metas.addListener(sR({
          fetchUserSession: uu.fetchUserSession,
          storeUserSession: uu.storeUserSession
        }, this.context))
      }
    };
    LR.storageTypeSession = vu;
    const zR = new WeakMap;

    function FR(uu) {
      let Ru = zR.get(uu);
      if (!Ru) {
        let yu = [],
          Eu = [];
        Ru = {
          addSessionUpdateListener: uu => {
            yu.push(uu)
          },
          removeSessionUpdateListener: uu => {
            yu = yu.filter((Ru => Ru !== uu))
          },
          notifySessionUpdate: uu => {
            yu.forEach((Ru => Ru(uu)))
          },
          shouldCapture: () => Eu.every((uu => uu())),
          addCaptureFilter: uu => {
            Eu.push(uu)
          },
          removeCaptureFilter: uu => {
            Eu = Eu.filter((Ru => Ru !== uu))
          }
        }, zR.set(uu, Ru)
      }
      return Ru
    }
    var wR = class {
      constructor(uu, Ru, yu) {
        this.metas = uu, this.transports = Ru, this.onActivate = yu, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = uu => {
          var Ru, yu, Eu;
          const Ku = this.pending;
          var Qu, mu;
          if ("overrides" === uu.type) return void(this.pending = {
            reset: null !== (Qu = null === Ku || void 0 === Ku ? void 0 : Ku.reset) && void 0 !== Qu && Qu,
            inheritOverrides: null === (mu = null === Ku || void 0 === Ku ? void 0 : Ku.inheritOverrides) || void 0 === mu || mu,
            session: VR(VR({}, null === Ku || void 0 === Ku ? void 0 : Ku.session), {}, {
              overrides: VR(VR({}, null === Ku || void 0 === Ku ? void 0 : Ku.session.overrides), uu.overrides)
            })
          });
          const Ju = uu.session,
            Nu = Yu(Ju) || null != Ju && "id" in Ju && !Ju.id,
            Xu = null !== (Ru = null === Ju || void 0 === Ju ? void 0 : Ju.overrides) && void 0 !== Ru ? Ru : null === Ku || void 0 === Ku ? void 0 : Ku.session.overrides;
          this.pending = {
            reset: Nu || !(null === Ju || void 0 === Ju ? void 0 : Ju.id) && null !== (yu = null === Ku || void 0 === Ku ? void 0 : Ku.reset) && void 0 !== yu && yu,
            inheritOverrides: !(!uu.overrides && void 0 !== (null === Ju || void 0 === Ju ? void 0 : Ju.overrides)) && (null === (Eu = null === Ku || void 0 === Ku ? void 0 : Ku.inheritOverrides) || void 0 === Eu || Eu),
            session: {
              id: null === Ju || void 0 === Ju ? void 0 : Ju.id,
              attributes: (null === Ju || void 0 === Ju ? void 0 : Ju.attributes) && VR({}, Ju.attributes),
              overrides: uu.overrides ? VR(VR({}, null === Ku || void 0 === Ku ? void 0 : Ku.session.overrides), uu.overrides) : Xu && VR({}, Xu)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var uu, Ru;
        this.waiting = !0, FR(this.metas).addSessionUpdateListener(this.recordUpdate), FR(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (uu = (Ru = this.metas).addCaptureListener) || void 0 === uu || uu.call(Ru, this.activate), this.activate()
      }
      destroy() {
        var uu, Ru;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), FR(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (uu = (Ru = this.metas).removeCaptureListener) || void 0 === uu || uu.call(Ru, this.activate), FR(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function ZR(uu) {
      return (null === uu || void 0 === uu ? void 0 : uu.persistent) ? cR : LR
    }

    function hR() {}
    let PR = function(uu) {
      return uu[uu.OFF = 0] = "OFF", uu[uu.ERROR = 1] = "ERROR", uu[uu.WARN = 2] = "WARN", uu[uu.INFO = 3] = "INFO", uu[uu.VERBOSE = 4] = "VERBOSE", uu
    }({});
    const iR = {
        debug: hR,
        error: hR,
        info: hR,
        prefix: "Faro",
        warn: hR
      },
      YR = 1;

    function oR(uu) {
      return oR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, oR(uu)
    }

    function qR(uu) {
      var Ru = function(uu, Ru) {
        if ("object" != oR(uu) || !uu) return uu;
        var yu = uu[Symbol.toPrimitive];
        if (void 0 !== yu) {
          var Eu = yu.call(uu, Ru || "default");
          if ("object" != oR(Eu)) return Eu;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Ru ? String : Number)(uu)
      }(uu, "string");
      return "symbol" == oR(Ru) ? Ru : Ru + ""
    }

    function OR(uu, Ru, yu) {
      return (Ru = qR(Ru)) in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }

    function vR(uu, Ru) {
      var yu = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var Eu = Object.getOwnPropertySymbols(uu);
        Ru && (Eu = Eu.filter((function(Ru) {
          return Object.getOwnPropertyDescriptor(uu, Ru).enumerable
        }))), yu.push.apply(yu, Eu)
      }
      return yu
    }

    function aR(uu) {
      for (var Ru = 1; Ru < arguments.length; Ru++) {
        var yu = null != arguments[Ru] ? arguments[Ru] : {};
        Ru % 2 ? vR(Object(yu), !0).forEach((function(Ru) {
          OR(uu, Ru, yu[Ru])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(yu)) : vR(Object(yu)).forEach((function(Ru) {
          Object.defineProperty(uu, Ru, Object.getOwnPropertyDescriptor(yu, Ru))
        }))
      }
      return uu
    }
    const fR = aR({}, console);
    var uy = class {
        constructor() {
          this.unpatchedConsole = fR, this.internalLogger = iR, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
          this.internalLogger.debug(`${this.name}\n`, ...Ru)
        }
        logInfo() {
          for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
          this.internalLogger.info(`${this.name}\n`, ...Ru)
        }
        logWarn() {
          for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
          this.internalLogger.warn(`${this.name}\n`, ...Ru)
        }
        logError() {
          for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
          this.internalLogger.error(`${this.name}\n`, ...Ru)
        }
      },
      Ry = class extends uy {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const yy = "2.12.1";
    var Ey = class extends Ry {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = yy, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(uu) {
        var Ru;
        const yu = uu.session;
        if (yu && yu.id !== (null === (Ru = this.notifiedSession) || void 0 === Ru ? void 0 : Ru.id)) {
          var Eu;
          if (this.isAdoptingSession()) return void(this.notifiedSession = yu);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Eu = yu.attributes) || void 0 === Eu ? void 0 : Eu.previousSession)) return this.api.pushEvent(eR, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = yu);
          this.notifiedSession = yu, this.api.pushEvent(CR, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(uu, Ru, yu) {
        const Eu = null === yu || void 0 === yu ? void 0 : yu.session;
        let Ku, Qu, mu = uu.fetchUserSession();
        if (Ru.persistent && Ru.maxSessionPersistenceTime && mu) {
          const uu = BR();
          mu.lastActivity < uu - Ru.maxSessionPersistenceTime && (cR.removeUserSession(), mu = null)
        }
        const Ju = IR(mu);
        if ((null === yu || void 0 === yu ? void 0 : yu.reset) || !Ju || (null === Eu || void 0 === Eu ? void 0 : Eu.id) && Eu.id !== (null === mu || void 0 === mu ? void 0 : mu.sessionId)) {
          var Nu, Xu, Vu, ru, Bu, xu;
          Qu = MR({
            sessionId: (null === yu || void 0 === yu ? void 0 : yu.reset) ? void 0 : null !== (Nu = null === Eu || void 0 === Eu ? void 0 : Eu.id) && void 0 !== Nu ? Nu : null === (Xu = Ru.session) || void 0 === Xu ? void 0 : Xu.id,
            isSampled: rR(this)
          }, this);
          const uu = Qu.sessionId,
            Su = yu && Ju ? null === mu || void 0 === mu || null === (Vu = mu.sessionMeta) || void 0 === Vu ? void 0 : Vu.overrides : void 0,
            pu = Su ? VR(VR({}, null === (ru = Ru.session) || void 0 === ru ? void 0 : ru.overrides), Su) : null === (Bu = Ru.session) || void 0 === Bu ? void 0 : Bu.overrides;
          Qu.sessionMeta = VR({
            id: uu,
            attributes: VR({
              isSampled: Qu.isSampled.toString()
            }, null === (xu = Ru.session) || void 0 === xu ? void 0 : xu.attributes)
          }, pu ? {
            overrides: pu
          } : {}), Ku = CR
        } else {
          var Su, pu;
          const uu = null === mu || void 0 === mu ? void 0 : mu.sessionId;
          Qu = MR({
            sessionId: uu,
            isSampled: mu.isSampled || !1,
            started: null === mu || void 0 === mu ? void 0 : mu.started
          }, this);
          const yu = null === mu || void 0 === mu ? void 0 : mu.sessionMeta,
            Eu = VR(VR({}, null === (Su = Ru.session) || void 0 === Su ? void 0 : Su.overrides), null === yu || void 0 === yu ? void 0 : yu.overrides);
          Qu.sessionMeta = VR(VR({}, Ru.session), {}, {
            id: uu,
            attributes: VR(VR(VR({}, null === (pu = Ru.session) || void 0 === pu ? void 0 : pu.attributes), null === yu || void 0 === yu ? void 0 : yu.attributes), {}, {
              isSampled: Qu.isSampled.toString()
            }),
            overrides: Eu
          }), Ku = kR
        }
        var Tu;
        if (Eu && (Qu.sessionMeta = VR(VR({}, Qu.sessionMeta), {}, {
            attributes: VR(VR(VR({}, null === (Tu = Qu.sessionMeta) || void 0 === Tu ? void 0 : Tu.attributes), Eu.attributes), {}, {
              isSampled: Qu.isSampled.toString()
            })
          }), Eu.overrides)) {
          const uu = (null === yu || void 0 === yu ? void 0 : yu.inheritOverrides) ? VR(VR({}, Qu.sessionMeta.overrides), Eu.overrides) : Eu.overrides;
          Object.keys(uu).length > 0 ? Qu.sessionMeta.overrides = uu : delete Qu.sessionMeta.overrides
        }
        return {
          initialSession: Qu,
          lifecycleType: Ku
        }
      }
      registerBeforeSendHook(uu) {
        var Ru;
        this.beforeSendHook = Ru => {
          var yu, Eu;
          const Ku = null === (yu = Ru.meta.session) || void 0 === yu ? void 0 : yu.id;
          Ku && !this.transports.isPaused() && uu(Ku);
          const Qu = null === (Eu = Ru.meta.session) || void 0 === Eu ? void 0 : Eu.attributes;
          if (Qu && "true" === (null === Qu || void 0 === Qu ? void 0 : Qu.isSampled)) {
            var mu;
            let uu = JSON.parse(JSON.stringify(Ru));
            const yu = null === (mu = uu.meta.session) || void 0 === mu ? void 0 : mu.attributes;
            var Ju;
            if (null === yu || void 0 === yu || delete yu.isSampled, 0 === Object.keys(null !== yu && void 0 !== yu ? yu : {}).length) null === (Ju = uu.meta.session) || void 0 === Ju || delete Ju.attributes;
            return uu
          }
          return null
        }, null === (Ru = this.transports) || void 0 === Ru || Ru.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var uu;
        this.logDebug("init session instrumentation");
        const Ru = document.prerendering;
        var yu;
        if ((null === (uu = this.config.sessionTracking) || void 0 === uu ? void 0 : uu.enabled) && (Ru || this.prerenderSession)) return null !== (yu = this.prerenderSession) && void 0 !== yu || (this.prerenderSession = new wR(this.metas, this.transports, (uu => {
          this.prerenderSession = void 0, this.initializeSession(uu)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(uu) {
        const Ru = this.config.sessionTracking;
        if (null === Ru || void 0 === Ru ? void 0 : Ru.enabled) {
          var yu, Eu;
          const Ku = ZR(Ru),
            Qu = new Ku(this);
          this.isAdoptingSession = Qu.isAdopting, this.registerBeforeSendHook(Qu.recordActivity);
          const {
            initialSession: mu,
            lifecycleType: Ju
          } = this.createInitialSession(Ku, Ru, uu);
          Ku.storeUserSession(mu);
          const Nu = mu.sessionMeta;
          this.notifiedSession = Nu, this.api.setSession(Nu), this.captureListener = () => {
            this.transports.isPaused() || Qu.updateSession({
              refreshActivity: !1
            })
          }, null === (yu = (Eu = this.metas).addCaptureListener) || void 0 === yu || yu.call(Eu, this.captureListener), Ju === CR && this.api.pushEvent(CR, {}, void 0, {
            skipDedupe: !0
          }), Ju === kR && this.api.pushEvent(kR, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var uu, Ru, yu;
        (null === (uu = this.prerenderSession) || void 0 === uu || uu.destroy(), this.captureListener) && (null === (Ru = (yu = this.metas).removeCaptureListener) || void 0 === Ru || Ru.call(yu, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Ky(uu, Ru, yu, Eu) {
      const Ku = {
        filename: uu || document.location.href,
        function: Ru || "?"
      };
      return void 0 !== yu && (Ku.lineno = yu), void 0 !== Eu && (Ku.colno = Eu), Ku
    }
    const Qy = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      my = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Jy = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Ny = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Xy = "safari-extension",
      Vy = "safari-web-extension",
      ry = /Minified React error #\d+;/i;

    function By(uu, Ru) {
      const yu = null === uu || void 0 === uu ? void 0 : uu.includes(Xy),
        Eu = !yu && (null === uu || void 0 === uu ? void 0 : uu.includes("safari-web-extension"));
      return yu || Eu ? [(null === uu || void 0 === uu ? void 0 : uu.includes("@")) ? uu.split("@")[0] : uu, yu ? `${Xy}:${Ru}` : `${Vy}:${Ru}`] : [uu, Ru]
    }
    const xy = 1024;

    function Sy(uu) {
      let Ru = [];
      uu.stacktrace ? Ru = uu.stacktrace.split("\n").filter(((uu, Ru) => Ru % 2 === 0)) : uu.stack && (Ru = uu.stack.split("\n"));
      const yu = Ru.reduce(((Ru, yu, Eu) => {
        if (yu.length > xy) return Ru;
        let Ku, Qu, mu, Ju, Nu;
        if (Ku = Qy.exec(yu)) {
          if (Qu = Ku[1], mu = Ku[2], Ju = Ku[3], Nu = Ku[4], null === mu || void 0 === mu ? void 0 : mu.startsWith("eval")) {
            const uu = my.exec(mu);
            uu && (mu = uu[1], Ju = uu[2], Nu = uu[3])
          }
          mu = (null === mu || void 0 === mu ? void 0 : mu.startsWith("address at ")) ? mu.substring(11) : mu, [Qu, mu] = By(Qu, mu)
        } else if (Ku = Jy.exec(yu)) {
          if (Qu = Ku[1], mu = Ku[3], Ju = Ku[4], Nu = Ku[5], mu && mu.includes(" > eval")) {
            const uu = Ny.exec(mu);
            uu && (Qu = Qu || "eval", mu = uu[1], Ju = uu[2])
          } else 0 === Eu && !Nu && ku(uu.columnNumber) && (Nu = String(uu.columnNumber + 1));
          [Qu, mu] = By(Qu, mu)
        }
        return (mu || Qu) && Ru.push(Ky(mu, Qu, Ju ? Number(Ju) : void 0, Nu ? Number(Nu) : void 0)), Ru
      }), []);
      return ry.test(uu.message) ? yu.slice(1) : yu
    }

    function py(uu) {
      return {
        frames: Sy(uu)
      }
    }
    const Ty = "http-request-start",
      Wy = "http-request-end";
    var jy = class uu {
      constructor() {
        this.subscribers = []
      }
      subscribe(uu) {
        return this.subscribers.push(uu), {
          unsubscribe: () => this.unsubscribe(uu)
        }
      }
      unsubscribe(uu) {
        this.subscribers = this.subscribers.filter((Ru => Ru !== uu))
      }
      notify(uu) {
        this.subscribers.forEach((Ru => Ru(uu)))
      }
      first() {
        const Ru = new uu,
          yu = uu => {
            Ru.notify(uu), Eu.unsubscribe()
          },
          Eu = this.subscribe(yu),
          Ku = Ru.unsubscribe.bind(Ru);
        return this.withUnsubscribeOverride(Ru, Ku, yu)
      }
      takeWhile(Ru) {
        const yu = new uu,
          Eu = uu => {
            Ru(uu) ? yu.notify(uu) : yu.unsubscribe(Eu)
          };
        this.subscribe(Eu);
        const Ku = yu.unsubscribe.bind(yu);
        return this.withUnsubscribeOverride(yu, Ku, Eu)
      }
      filter(Ru) {
        const yu = new uu,
          Eu = uu => {
            Ru(uu) && yu.notify(uu)
          };
        this.subscribe(Eu);
        const Ku = yu.unsubscribe.bind(yu);
        return this.withUnsubscribeOverride(yu, Ku, Eu)
      }
      merge() {
        const Ru = new uu,
          yu = [];
        for (var Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
        Ku.forEach((uu => {
          const Eu = uu.subscribe((uu => {
            Ru.notify(uu)
          }));
          yu.push(Eu)
        }));
        const mu = Ru.unsubscribeAll.bind(Ru);
        return Ru.unsubscribe = () => {
          yu.forEach((uu => uu.unsubscribe())), mu()
        }, Ru
      }
      withUnsubscribeOverride(uu, Ru, yu) {
        return uu.unsubscribe = uu => {
          Ru(uu), this.unsubscribe(yu)
        }, uu
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Hy = function(uu) {
      return uu.TRACE = "trace", uu.DEBUG = "debug", uu.INFO = "info", uu.LOG = "log", uu.WARN = "warn", uu.ERROR = "error", uu
    }({});
    const dy = "log",
      by = ["trace", "debug", "info", "log", "warn", "error"];
    let Cy, ky = !1;
    const ey = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Ay = "Error",
      Dy = uu => uu.map((uu => Mu(uu) ? lR(uu) : String(uu))).join(" ");

    function My(uu) {
      let Ru, yu, Eu, Ku, Qu = [];
      if (Lu(uu) && uu.error) Ru = uu.error.message, yu = uu.error.name, Qu = Sy(uu.error);
      else if ((Eu = zu(uu)) || Fu(uu)) {
        const {
          name: Ku,
          message: Qu
        } = uu;
        yu = null !== Ku && void 0 !== Ku ? Ku : Eu ? "DOMError" : "DOMException", Ru = Qu ? `${yu}: ${Qu}` : yu
      } else cu(uu) ? (yu = uu.name, Ru = uu.message, Qu = Sy(uu)) : (Mu(uu) || (Ku = lu(uu))) && (yu = Ku ? uu.constructor.name : void 0, Ru = `Non-Error exception captured with keys: ${Object.keys(uu)}`);
      return [Ru, yu, Qu]
    }

    function Iy(uu) {
      const [Ru, yu, Eu, Ku, Qu] = uu;
      let mu, Ju, Nu = [];
      const Xu = Cu(Ru),
        Vu = Ky(yu, "?", Eu, Ku);
      return Qu || !Xu ? ([mu, Ju, Nu] = My(null !== Qu && void 0 !== Qu ? Qu : Ru), 0 === Nu.length && (Nu = [Vu])) : Xu && ([mu, Ju] = function(uu) {
        var Ru, yu;
        const Eu = uu.match(ey),
          Ku = null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu[1]) && void 0 !== Ru ? Ru : Ay;
        return [null !== (yu = null === Eu || void 0 === Eu ? void 0 : Eu[2]) && void 0 !== yu ? yu : uu, Ku]
      }(Ru), Nu = [Vu]), {
        value: mu,
        type: Ju,
        stackFrames: Nu
      }
    }

    function Gy(uu, Ru) {
      return cu(uu[0]) ? Iy(uu) : {
        value: Ru(uu)
      }
    }
    const Uy = uu => uu.map((uu => {
      try {
        return String(uu)
      } catch (Ru) {
        return ""
      }
    })).join(" ");
    var ny = class uu extends Ry {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = yy, this.errorSerializer = Uy
      }
      initialize() {
        var Ru, yu;
        const Eu = this.config.consoleInstrumentation,
          Ku = (null === Eu || void 0 === Eu ? void 0 : Eu.serializeErrors) || !!(null === Eu || void 0 === Eu ? void 0 : Eu.errorSerializer);
        this.errorSerializer = Ku ? null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu.errorSerializer) && void 0 !== Ru ? Ru : Dy : Uy;
        const Qu = null !== (yu = null === Eu || void 0 === Eu ? void 0 : Eu.disabledLevels) && void 0 !== yu ? yu : uu.defaultDisabledLevels,
          mu = function(uu) {
            if (Cy || (Cy = new jy), !ky) {
              const Ru = null !== uu && void 0 !== uu ? uu : fR;
              by.forEach((uu => {
                console[uu] = function() {
                  for (var yu, Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
                  Cy.notify({
                    type: "console",
                    level: uu,
                    args: Ku
                  }), null === (yu = Ru[uu]) || void 0 === yu || yu.apply(console, Ku)
                }
              })), ky = !0
            }
            return Cy
          }(this.unpatchedConsole);
        this.subscription = mu.subscribe((Ru => {
          let {
            level: yu,
            args: Ku
          } = Ru;
          if (!Qu.includes(yu)) try {
            if (yu !== Hy.ERROR || (null === Eu || void 0 === Eu ? void 0 : Eu.consoleErrorAsLog))
              if (yu === Hy.ERROR && (null === Eu || void 0 === Eu ? void 0 : Eu.consoleErrorAsLog)) {
                const {
                  value: Ru,
                  type: Eu,
                  stackFrames: Qu
                } = Gy(Ku, this.errorSerializer);
                this.api.pushLog(Ru ? [uu.consoleErrorPrefix + Ru] : Ku, {
                  level: yu,
                  context: {
                    value: null !== Ru && void 0 !== Ru ? Ru : "",
                    type: null !== Eu && void 0 !== Eu ? Eu : "",
                    stackFrames: (null === Qu || void 0 === Qu ? void 0 : Qu.length) ? Dy(Qu) : ""
                  }
                })
              } else this.api.pushLog(Ku, {
                level: yu
              });
            else {
              const {
                value: Ru,
                type: yu,
                stackFrames: Eu
              } = Gy(Ku, this.errorSerializer);
              if (Ru && !yu && !Eu) return void this.api.pushError(new Error(uu.consoleErrorPrefix + Ru));
              this.api.pushError(new Error(uu.consoleErrorPrefix + Ru), {
                type: yu,
                stackFrames: Eu
              })
            }
          } catch (mu) {
            this.logError(mu)
          }
        }))
      }
      destroy() {
        var uu;
        null === (uu = this.subscription) || void 0 === uu || uu.unsubscribe(), this.subscription = void 0
      }
    };
    ny.defaultDisabledLevels = [Hy.DEBUG, Hy.TRACE, Hy.LOG], ny.consoleErrorPrefix = "console.error: ";
    const sy = [];
    var ty = class extends Ry {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = yy
      }
      initialize() {
        this.logDebug("Initializing"),
          function(uu) {
            const Ru = window.onerror;
            window.onerror = function() {
              for (var yu = arguments.length, Eu = new Array(yu), Ku = 0; Ku < yu; Ku++) Eu[Ku] = arguments[Ku];
              try {
                const {
                  value: Ru,
                  type: yu,
                  stackFrames: Ku
                } = Iy(Eu), Qu = Eu[4];
                if (Ru) {
                  const Eu = {
                    type: yu,
                    stackFrames: Ku
                  };
                  null != Qu && (Eu.originalError = Qu), uu.pushError(new Error(Ru), Eu)
                }
              } finally {
                null === Ru || void 0 === Ru || Ru.apply(window, Eu)
              }
            }
          }(this.api),
          function(uu) {
            const Ru = Ru => {
              var yu;
              let Eu, Ku, Qu = Ru;
              if (Qu.reason) Qu = Ru.reason;
              else if (null === (yu = Ru.detail) || void 0 === yu ? void 0 : yu.reason) {
                var mu;
                Qu = null === (mu = Ru.detail) || void 0 === mu ? void 0 : mu.reason
              }
              let Ju = [];
              su(Qu) ? (Eu = `Non-Error promise rejection captured with value: ${String(Qu)}`, Ku = "UnhandledRejection") : [Eu, Ku, Ju] = My(Qu), Eu && uu.pushError(new Error(Eu), {
                type: Ku,
                stackFrames: Ju
              })
            };
            window.addEventListener("unhandledrejection", Ru), sy.push(Ru)
          }(this.api)
      }
    };
    const ly = "unknown";
    var gy = class extends Ry {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = yy, this.waitingForActivation = !1, this.sendViewChangedEvent = uu => {
          var Ru;
          if (this.waitingForActivation || document.prerendering) return;
          const yu = uu.view;
          if (yu && yu.name !== (null === (Ru = this.notifiedView) || void 0 === Ru ? void 0 : Ru.name)) {
            var Eu, Ku, Qu;
            const uu = null !== (Eu = null === (Ku = this.notifiedView) || void 0 === Ku ? void 0 : Ku.name) && void 0 !== Eu ? Eu : ly;
            this.notifiedView = yu, this.api.pushEvent(bR, {
              fromView: uu,
              toView: null !== (Qu = yu.name) && void 0 !== Qu ? Qu : ly
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
    class cy {
      t;
      o = 0;
      i = [];
      l(uu) {
        if (uu.hadRecentInput) return;
        const Ru = this.i[0],
          yu = this.i.at(-1);
        this.o && Ru && yu && uu.startTime - yu.startTime < 1e3 && uu.startTime - Ru.startTime < 5e3 ? (this.o += uu.value, this.i.push(uu)) : (this.o = uu.value, this.i = [uu]), this.t?.(uu)
      }
    }
    const Ly = () => {
        const uu = performance.getEntriesByType("navigation")[0];
        if (uu && uu.responseStart > 0 && uu.responseStart < performance.now()) return uu
      },
      zy = uu => {
        if ("loading" === document.readyState) return "loading";
        const Ru = Ly();
        if (Ru) {
          if (uu < Ru.domInteractive) return "loading";
          if (0 === Ru.domContentLoadedEventStart || uu < Ru.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Ru.domComplete || uu < Ru.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Fy = uu => {
        const Ru = uu.nodeName;
        return 1 === uu.nodeType ? Ru.toLowerCase() : Ru.toUpperCase().replace(/^#/, "")
      },
      wy = uu => {
        let Ru = "";
        try {
          for (; 9 !== uu?.nodeType;) {
            const yu = uu,
              Eu = yu.id ? "#" + yu.id : [Fy(yu), ...Array.from(yu.classList ?? []).sort()].join(".");
            if (Ru.length + Eu.length > 99) return Ru || Eu;
            if (Ru = Ru ? Eu + ">" + Ru : Eu, yu.id) break;
            uu = yu.parentNode
          }
        } catch {}
        return Ru
      },
      Zy = new WeakMap;

    function hy(uu, Ru) {
      let yu = Zy.get(Ru);
      return yu || (yu = new WeakMap, Zy.set(Ru, yu)), yu.get(uu) || yu.set(uu, new Ru), yu.get(uu)
    }
    let Py = -1;
    const iy = () => Py,
      Yy = uu => {
        addEventListener("pageshow", (Ru => {
          Ru.persisted && (Py = Ru.timeStamp, uu(Ru))
        }), !0)
      },
      oy = (uu, Ru, yu, Eu) => {
        let Ku, Qu;
        return mu => {
          Ru.value >= 0 && (mu || Eu) && (Qu = Ru.value - (Ku ?? 0), (Qu || void 0 === Ku) && (Ku = Ru.value, Ru.delta = Qu, Ru.rating = ((uu, Ru) => uu > Ru[1] ? "poor" : uu > Ru[0] ? "needs-improvement" : "good")(Ru.value, yu), uu(Ru)))
        }
      },
      qy = uu => {
        requestAnimationFrame((() => requestAnimationFrame((() => uu()))))
      },
      Oy = () => Ly()?.activationStart ?? 0;
    let vy = -1;
    const ay = new Set,
      fy = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      uE = uu => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === uu.type)
            for (const uu of ay) uu();
          isFinite(vy) || (vy = "visibilitychange" === uu.type ? uu.timeStamp : 0, removeEventListener("prerenderingchange", uE, !0))
        }
      },
      RE = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (vy = 1 / 0), vy < 0) {
          const uu = Oy(),
            Ru = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Ru => "hidden" === Ru.name && Ru.startTime >= uu))?.startTime;
          vy = Ru ?? fy(), addEventListener("visibilitychange", uE, !0), addEventListener("prerenderingchange", uE, !0), Yy((() => {
            setTimeout((() => {
              vy = fy()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return vy
          },
          onHidden(uu) {
            ay.add(uu)
          }
        }
      },
      yE = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0,
          mu = arguments.length > 6 ? arguments[6] : void 0;
        const Ju = Ly(),
          Nu = Ju?.navigationId || 0;
        let Xu = "navigate";
        return yu ? Xu = yu : iy() >= 0 ? Xu = "back-forward-cache" : Ju && (document.prerendering || Oy() > 0 ? Xu = "prerender" : document.wasDiscarded ? Xu = "restore" : Ju.type && (Xu = Ju.type.replace(/_/g, "-"))), {
          name: uu,
          value: Ru,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Xu,
          navigationId: Eu || Nu,
          navigationInteractionId: Ku,
          navigationURL: Qu || Ju?.name,
          navigationStartTime: mu || 0
        }
      },
      EE = function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Eu = uu.filter((uu => PerformanceObserver.supportedEntryTypes.includes(uu)));
          if (Eu.length > 0) {
            const uu = new PerformanceObserver((uu => {
              queueMicrotask((() => {
                const yu = uu.getEntries();
                Eu.length > 1 && yu.sort(((uu, Ru) => uu.startTime + uu.duration - (Ru.startTime + Ru.duration))), Ru(yu)
              }))
            }));
            for (const Ru of Eu) uu.observe({
              type: Ru,
              buffered: !0,
              ...yu
            });
            return uu
          }
        } catch {}
      },
      KE = uu => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && uu && uu.reportSoftNavs,
      QE = (uu, Ru) => {
        if (uu.set(Ru.navigationId, Ru), uu.size > 2) {
          const Ru = uu.keys().next().value;
          void 0 !== Ru && uu.delete(Ru)
        }
      },
      mE = uu => {
        let Ru = !1;
        return () => {
          Ru || (uu(), Ru = !0)
        }
      };
    class JE {
      u
    }
    const NE = uu => {
        document.prerendering ? addEventListener("prerenderingchange", uu, !0) : uu()
      },
      XE = [1800, 3e3],
      VE = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yu = KE(Ru);
        NE((() => {
          const Eu = hy(Ru, JE),
            Ku = RE();
          let Qu, mu = yE("FCP");
          const Ju = EE(["paint"], (uu => {
            for (const Ru of uu) "first-contentful-paint" === Ru.name && (Ju.disconnect(), Ru.startTime < Ku.firstHiddenTime && (mu.value = Math.max(Ru.startTime - Oy(), 0), mu.entries.push(Ru), mu.navigationId = Ru.navigationId || mu.navigationId, Qu(!0)))
          }));
          Ju && (Qu = oy(uu, mu, XE, Ru.reportAllChanges), Yy((yu => {
            mu = yE("FCP", -1, "back-forward-cache", mu.navigationId, mu.navigationInteractionId, mu.navigationURL, iy()), Qu = oy(uu, mu, XE, Ru.reportAllChanges), qy((() => {
              mu.value = performance.now() - yu.timeStamp, Qu(!0)
            }))
          }))), yu && EE(["soft-navigation"], (yu => {
            yu.forEach((yu => {
              Eu.u && yu.navigationId && QE(Eu.u, yu);
              const Ku = Math.max((yu.presentationTime || yu.paintTime || 0) - yu.startTime, 0);
              mu = yE("FCP", Ku, "soft-navigation", yu.navigationId, yu.interactionId, yu.name, yu.startTime), Qu = oy(uu, mu, XE, Ru.reportAllChanges), Qu(!0)
            }))
          }), Ru)
        }))
      },
      rE = [.1, .25],
      BE = uu => uu.find((uu => 1 === uu.node?.nodeType)) || uu[0];
    let xE = 0,
      SE = 1 / 0,
      pE = 0;
    const TE = uu => {
      for (const Ru of uu) Ru.interactionId && (SE = Math.min(SE, Ru.interactionId), pE = Math.max(pE, Ru.interactionId), xE = pE ? (pE - SE) / 7 + 1 : 0)
    };
    let WE;
    const jE = () => WE ? xE : performance.interactionCount ?? 0;
    class HE {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return jE() - this.h
      }
      D() {
        this.h = jE(), this.v.length = 0, this.p.clear()
      }
      S(uu) {
        const Ru = this.T(),
          yu = Math.min(this.v.length - 1, Math.floor(Ru / 50));
        return !Ru || -1 !== yu || "soft-navigation" !== uu && "back-forward-cache" !== uu ? this.v[yu] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(uu) {
        if (this.m?.(uu), !uu.interactionId) return;
        const Ru = this.v.at(-1);
        let yu = this.p.get(uu.interactionId);
        if (yu || this.v.length < 10 || uu.duration > Ru.k) {
          if (yu ? uu.duration > yu.k ? (yu.entries = [uu], yu.k = uu.duration) : uu.duration === yu.k && uu.startTime === yu.entries[0].startTime && yu.entries.push(uu) : (yu = {
              id: uu.interactionId,
              entries: [uu],
              k: uu.duration
            }, this.p.set(yu.id, yu), this.v.push(yu)), this.v.sort(((uu, Ru) => Ru.k - uu.k)), this.v.length > 10) {
            const uu = this.v.splice(10);
            for (const Ru of uu) this.p.delete(Ru.id)
          }
          this.M?.(yu)
        }
      }
    }
    const dE = uu => {
        const Ru = "requestIdleCallback" in globalThis ? 1e3 : 0,
          yu = globalThis.requestIdleCallback || setTimeout,
          Eu = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) uu();
        else {
          const Ku = mE(uu);
          let Qu = -1;
          const mu = () => {
            Eu(Qu), Ku()
          };
          addEventListener("visibilitychange", mu, {
            once: !0,
            capture: !0
          }), Qu = yu((() => {
            removeEventListener("visibilitychange", mu, {
              capture: !0
            }), Ku()
          }), {
            timeout: Ru
          })
        }
      },
      bE = [200, 500],
      CE = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yu = hy(Ru = Object.assign({}, Ru), HE);
        let Eu = [],
          Ku = [],
          Qu = 0;
        const mu = new WeakMap,
          Ju = new WeakMap;
        let Nu = !1;
        const Xu = () => {
            Nu || (Nu = !0, dE(Vu))
          },
          Vu = () => {
            const uu = new Set(yu.v.map((uu => mu.get(uu.entries[0])))),
              Ru = Ku.length - 10;
            Ku = Ku.filter(((yu, Eu) => Eu >= Ru || uu.has(yu)));
            const Ju = new Set;
            for (const yu of Ku) {
              const uu = ru(yu.startTime, yu.processingEnd);
              for (const Ru of uu) Ju.add(Ru)
            }
            const Xu = Eu.length - 10;
            Eu = Eu.filter(((uu, Ru) => Ju.has(uu) || Ru >= Xu && uu.startTime > Qu)), Nu = !1
          };
        yu.m = uu => {
          const yu = uu.startTime + uu.duration;
          let Eu;
          Qu = Math.max(Qu, uu.processingEnd);
          for (let Qu = Ku.length - 1; Qu >= 0; Qu--) {
            const mu = Ku[Qu];
            if (Math.abs(yu - mu.renderTime) <= 8) {
              Eu = mu, Eu.startTime = Math.min(uu.startTime, Eu.startTime), Eu.processingStart = Math.min(uu.processingStart, Eu.processingStart), Eu.processingEnd = Math.max(uu.processingEnd, Eu.processingEnd), Ru.includeProcessedEventEntries && Eu.entries.push(uu);
              break
            }
          }
          Eu || (Eu = {
            startTime: uu.startTime,
            processingStart: uu.processingStart,
            processingEnd: uu.processingEnd,
            renderTime: yu,
            entries: Ru.includeProcessedEventEntries ? [uu] : []
          }, Ku.push(Eu)), uu.interactionId && mu.set(uu, Eu), Xu()
        }, yu.M = uu => {
          if (!Ju.get(uu)) {
            const yu = uu.entries.find((uu => uu.target))?.target;
            if (yu) {
              const Eu = Ru.generateTarget?.(yu) ?? wy(yu);
              Ju.set(uu, Eu)
            } else {
              const Ru = uu.entries.find((uu => uu.targetSelector))?.targetSelector;
              Ru && Ju.set(uu, Ru)
            }
          }
        };
        const ru = (uu, Ru) => {
          const yu = [];
          for (const Ku of Eu)
            if (!(Ku.startTime + Ku.duration < uu)) {
              if (Ku.startTime > Ru) break;
              yu.push(Ku)
            } return yu
        };
        EE(["long-animation-frame"], (uu => {
            Eu = Eu.concat(uu), Xu()
          }), Ru),
          function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const yu = RE();
            NE((() => {
              "interactionCount" in performance || WE || (WE = EE(["event"], TE, {
                durationThreshold: 0
              }));
              let Eu, Ku = yE("INP");
              const Qu = hy(Ru, HE),
                mu = (yu, mu, Ju, Nu, Xu) => {
                  Qu.D(), Ku = yE("INP", -1, yu, mu, Ju, Nu, Xu), Eu = oy(uu, Ku, bE, Ru.reportAllChanges)
                },
                Ju = () => {
                  const uu = Qu.S(Ku.navigationType);
                  uu && uu.k !== Ku.value && (Ku.value = uu.k, Ku.entries = uu.entries, Eu())
                },
                Nu = uu => {
                  Ju(), Eu(!0), mu("soft-navigation", uu.navigationId, uu.interactionId, uu.name, uu.startTime)
                },
                Xu = function(uu) {
                  let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  dE((() => {
                    for (const Ru of uu) "soft-navigation" !== Ru.entryType ? Qu.l(Ru) : Nu(Ru);
                    Ju(), Ru && Eu(!0)
                  }))
                },
                Vu = ["event", "first-input"];
              KE(Ru) && Vu.push("soft-navigation");
              const ru = EE(Vu, Xu, {
                ...Ru,
                durationThreshold: Ru.durationThreshold ?? 40
              });
              Eu = oy(uu, Ku, bE, Ru.reportAllChanges), ru && (yu.onHidden((() => {
                Xu(ru.takeRecords(), !0)
              })), Yy((() => {
                mu("back-forward-cache", Ku.navigationId, Ku.navigationInteractionId, Ku.navigationURL, iy())
              })))
            }))
          }((Ru => {
            uu((uu => {
              if (0 === uu.entries.length) {
                const Ru = uu.navigationStartTime || 0,
                  yu = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: uu.value,
                    loadState: zy(Ru)
                  };
                return Object.assign(uu, {
                  attribution: yu
                })
              }
              const Ru = uu.entries[0],
                Eu = mu.get(Ru),
                Ku = Math.max(Eu.processingStart, Ru.startTime),
                Qu = Math.max(Ru.startTime + Ru.duration, Ku),
                Nu = Math.min(Eu.processingEnd, Qu),
                Xu = Eu.entries.sort(((uu, Ru) => uu.processingStart - Ru.processingStart)),
                Vu = ru(Ru.startTime, Nu),
                Bu = yu.p.get(Ru.interactionId),
                xu = {
                  interactionTarget: Ju.get(Bu),
                  interactionType: Ru.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Ru.startTime,
                  nextPaintTime: Qu,
                  processedEventEntries: Xu,
                  longAnimationFrameEntries: Vu,
                  inputDelay: Ku - Ru.startTime,
                  processingDuration: Nu - Ku,
                  presentationDelay: Qu - Nu,
                  loadState: zy(Ru.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (uu => {
                const Ru = uu.interactionTime,
                  yu = uu.nextPaintTime;
                if (!uu.longAnimationFrameEntries?.length || !Ru || !yu) return;
                const Eu = uu.inputDelay,
                  Ku = uu.processingDuration;
                let Qu, mu, Ju = 0,
                  Nu = 0,
                  Xu = 0,
                  Vu = 0;
                for (const xu of uu.longAnimationFrameEntries) {
                  Nu = Nu + xu.startTime + xu.duration - xu.styleAndLayoutStart;
                  for (const uu of xu.scripts) {
                    const yu = uu.startTime + uu.duration;
                    if (yu < Ru) continue;
                    const Xu = yu - Math.max(Ru, uu.startTime),
                      ru = uu.duration ? Xu / uu.duration * uu.forcedStyleAndLayoutDuration : 0;
                    Ju += Xu - ru, Nu += ru, Xu > Vu && (mu = uu.startTime < Ru + Eu ? "input-delay" : uu.startTime >= Ru + Eu + Ku ? "presentation-delay" : "processing-duration", Qu = uu, Vu = Xu)
                  }
                }
                const ru = uu.longAnimationFrameEntries.at(-1),
                  Bu = ru ? ru.startTime + ru.duration : 0;
                Bu >= Ru + Eu + Ku && (Xu = yu - Bu), Qu && mu && (uu.longestScript = {
                  entry: Qu,
                  subpart: mu,
                  intersectingDuration: Vu
                }), uu.totalScriptDuration = Ju, uu.totalStyleAndLayoutDuration = Nu, uu.totalPaintDuration = Xu, uu.totalUnattributedDuration = yu - Ru - Ju - Nu - Xu
              })(xu), Object.assign(uu, {
                attribution: xu
              })
            })(Ru))
          }), Ru)
      };
    class kE {
      m;
      u;
      l(uu) {
        this.m?.(uu)
      }
    }
    const eE = [2500, 4e3];
    let AE = 50;
    const DE = [];
    EE(["resource"], (uu => {
      for (const Ru of uu) DE.push(Ru), DE.length > AE && DE.shift()
    }));
    const ME = [800, 1800],
      IE = uu => {
        document.prerendering ? NE((() => IE(uu))) : "complete" !== document.readyState ? addEventListener("load", (() => IE(uu)), !0) : setTimeout(uu)
      },
      GE = "load_state",
      UE = "time_to_first_byte";
    var nE = class {
        constructor(uu, Ru) {
          this.corePushMeasurement = uu, this.webVitalConfig = Ru
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var uu;
          ! function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const yu = hy(Ru = Object.assign({}, Ru), cy),
              Eu = new WeakMap;
            yu.t = uu => {
                if (uu?.sources?.length) {
                  const yu = BE(uu.sources),
                    Ku = yu?.node;
                  if (Ku) {
                    const uu = Ru.generateTarget?.(Ku) ?? wy(Ku);
                    Eu.set(yu, uu)
                  }
                }
              },
              function(uu) {
                let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const yu = RE();
                VE(mE((() => {
                  let Eu, Ku = yE("CLS", 0);
                  const Qu = hy(Ru, cy),
                    mu = (yu, mu, Ju, Nu, Xu) => {
                      Ku = yE("CLS", 0, yu, mu, Ju, Nu, Xu), Qu.o = 0, Eu = oy(uu, Ku, rE, Ru.reportAllChanges)
                    },
                    Ju = function() {
                      let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Qu.o > Ku.value && (Ku.value = Qu.o, Ku.entries = Qu.i), Eu(uu)
                    },
                    Nu = uu => {
                      Ju(!0), mu("soft-navigation", uu.navigationId, uu.interactionId, uu.name, uu.startTime)
                    },
                    Xu = uu => {
                      for (const Ru of uu) "soft-navigation" !== Ru.entryType ? Qu.l(Ru) : Nu(Ru);
                      Ju()
                    },
                    Vu = ["layout-shift"];
                  KE(Ru) && Vu.push("soft-navigation");
                  const ru = EE(Vu, Xu);
                  ru && (Eu = oy(uu, Ku, rE, Ru.reportAllChanges), yu.onHidden((() => {
                    Xu(ru.takeRecords()), Eu(!0)
                  })), Yy((() => {
                    mu("back-forward-cache", Ku.navigationId, Ku.navigationInteractionId, Ku.navigationURL, iy()), qy(Eu)
                  })), setTimeout(Eu))
                })))
              }((Ru => {
                uu((uu => {
                  let Ru = {};
                  if (uu.entries.length) {
                    const yu = uu.entries.reduce(((uu, Ru) => uu.value > Ru.value ? uu : Ru));
                    if (yu?.sources?.length) {
                      const uu = BE(yu.sources);
                      uu && (Ru = {
                        largestShiftTarget: Eu.get(uu),
                        largestShiftTime: yu.startTime,
                        largestShiftValue: yu.value,
                        largestShiftSource: uu,
                        largestShiftEntry: yu,
                        loadState: zy(yu.startTime)
                      })
                    }
                  }
                  return Object.assign(uu, {
                    attribution: Ru
                  })
                })(Ru))
              }), Ru)
          }((uu => {
            const {
              loadState: Ru,
              largestShiftValue: yu,
              largestShiftTime: Eu,
              largestShiftTarget: Ku
            } = uu.attribution, Qu = this.buildInitialValues(uu);
            this.addIfPresent(Qu, "largest_shift_value", yu), this.addIfPresent(Qu, "largest_shift_time", Eu);
            const mu = this.buildInitialContext(uu);
            this.addIfPresent(mu, GE, Ru), this.addIfPresent(mu, "largest_shift_target", Ku), this.pushMeasurement(Qu, mu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureFCP() {
          var uu;
          ! function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const yu = hy(Ru = Object.assign({}, Ru), JE);
            KE(Ru) && (yu.u = new Map), VE((Ru => {
              uu((uu => {
                let Ru = {
                  timeToFirstByte: 0,
                  firstByteToFCP: uu.value,
                  loadState: zy(iy())
                };
                if ("soft-navigation" !== uu.navigationType) {
                  if (uu.entries.length) {
                    const yu = Ly(),
                      Eu = uu.entries.at(-1);
                    if (yu) {
                      const Ku = yu.responseStart,
                        Qu = yu.activationStart || 0,
                        mu = Math.max(0, Ku - Qu);
                      Ru = {
                        timeToFirstByte: mu,
                        firstByteToFCP: uu.value - mu,
                        loadState: zy(uu.entries[0].startTime),
                        navigationEntry: yu,
                        fcpEntry: Eu
                      }
                    }
                  }
                } else {
                  const Eu = yu.u?.get(uu.navigationId);
                  Eu && (Ru = {
                    timeToFirstByte: 0,
                    firstByteToFCP: uu.value,
                    loadState: "complete",
                    navigationEntry: Eu
                  })
                }
                return Object.assign(uu, {
                  attribution: Ru
                })
              })(Ru))
            }), Ru)
          }((uu => {
            const {
              firstByteToFCP: Ru,
              timeToFirstByte: yu,
              loadState: Eu
            } = uu.attribution, Ku = this.buildInitialValues(uu);
            this.addIfPresent(Ku, "first_byte_to_fcp", Ru), this.addIfPresent(Ku, UE, yu);
            const Qu = this.buildInitialContext(uu);
            this.addIfPresent(Qu, GE, Eu), this.pushMeasurement(Ku, Qu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureINP() {
          var uu;
          CE((uu => {
            var Ru;
            const {
              interactionTime: yu,
              presentationDelay: Eu,
              inputDelay: Ku,
              processingDuration: Qu,
              nextPaintTime: mu,
              loadState: Ju,
              interactionTarget: Nu,
              interactionType: Xu,
              totalScriptDuration: Vu,
              totalStyleAndLayoutDuration: ru,
              totalPaintDuration: Bu,
              totalUnattributedDuration: xu,
              longestScript: Su
            } = uu.attribution, pu = this.buildInitialValues(uu);
            this.addIfPresent(pu, "interaction_time", yu), this.addIfPresent(pu, "presentation_delay", Eu), this.addIfPresent(pu, "input_delay", Ku), this.addIfPresent(pu, "processing_duration", Qu), this.addIfPresent(pu, "next_paint_time", mu), this.addNumberIfDefined(pu, "total_script_duration", Vu), this.addNumberIfDefined(pu, "total_style_and_layout_duration", ru), this.addNumberIfDefined(pu, "total_paint_duration", Bu), this.addNumberIfDefined(pu, "total_unattributed_duration", xu), this.addNumberIfDefined(pu, "longest_script_intersecting_duration", null === Su || void 0 === Su ? void 0 : Su.intersectingDuration);
            const Tu = this.buildInitialContext(uu);
            this.addIfPresent(Tu, GE, Ju), this.addIfPresent(Tu, "interaction_target", Nu), this.addIfPresent(Tu, "interaction_type", Xu), this.addIfPresent(Tu, "longest_script_subpart", null === Su || void 0 === Su ? void 0 : Su.subpart), this.addIfPresent(Tu, "longest_script_invoker_type", null === Su || void 0 === Su ? void 0 : Su.entry.invokerType), (null === (Ru = this.webVitalConfig) || void 0 === Ru ? void 0 : Ru.trackAttributionSources) && (this.addIfPresent(Tu, "longest_script_invoker", null === Su || void 0 === Su ? void 0 : Su.entry.invoker), this.addIfPresent(Tu, "longest_script_source_url", null === Su || void 0 === Su ? void 0 : Su.entry.sourceURL), this.addIfPresent(Tu, "longest_script_source_function_name", null === Su || void 0 === Su ? void 0 : Su.entry.sourceFunctionName), this.addIfPresent(Tu, "longest_script_source_char_position", void 0 !== (null === Su || void 0 === Su ? void 0 : Su.entry.sourceCharPosition) ? String(Su.entry.sourceCharPosition) : void 0)), this.pushMeasurement(pu, Tu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureLCP() {
          var uu;
          ! function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Ru = Object.assign({}, Ru)).resourceBufferSize && (AE = Ru.resourceBufferSize);
            const yu = hy(Ru, kE),
              Eu = new WeakMap;
            KE(Ru) && (yu.u = new Map), yu.m = uu => {
                const yu = uu.element;
                if (yu) {
                  const Ku = Ru.generateTarget?.(yu) ?? wy(yu);
                  Eu.set(uu, Ku)
                } else uu.id && Eu.set(uu, `#${uu.id}`)
              },
              function(uu) {
                let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  yu = !1;
                const Eu = KE(Ru);
                NE((() => {
                  let Ku, Qu = RE(),
                    mu = yE("LCP");
                  const Ju = hy(Ru, kE),
                    Nu = (Eu, Ju, Nu, Xu, Vu) => {
                      mu = yE("LCP", -1, Eu, Ju, Nu, Xu, Vu), Ku = oy(uu, mu, eE, Ru.reportAllChanges), yu = !1, "soft-navigation" === Eu && (Qu = RE(!0))
                    },
                    Xu = uu => {
                      Ju.u && uu.navigationId && QE(Ju.u, uu), yu || Ku(!0), Nu("soft-navigation", uu.navigationId, uu.interactionId, uu.name, uu.startTime);
                      const Ru = uu.getLargestInteractionContentfulPaint?.();
                      Ru && Vu([Ru])
                    },
                    Vu = uu => {
                      Ru.reportAllChanges || Eu || (uu = uu.slice(-1));
                      for (const Ru of uu) {
                        if (!Ru) continue;
                        if ("soft-navigation" === Ru.entryType) {
                          Xu(Ru);
                          continue
                        }
                        let uu = 0,
                          yu = [],
                          Eu = Ru.startTime;
                        if ("largest-contentful-paint" === Ru.entryType) uu = Math.max(Ru.startTime - Oy(), 0), Ju.l(Ru), yu = [Ru];
                        else if ("interaction-contentful-paint" === Ru.entryType) {
                          const Ku = Ru;
                          if (!mu.navigationId) continue;
                          if ("interactionId" in Ku && Ku.interactionId != mu.navigationInteractionId) continue;
                          Eu = Ku.largestContentfulPaint?.renderTime || 0, uu = Math.max(Eu - Ru.startTime, 0), Ku.largestContentfulPaint && (Ju.l(Ku.largestContentfulPaint), yu = [Ku.largestContentfulPaint])
                        }
                        Eu < Qu.firstHiddenTime && (mu.value = uu, mu.entries = yu, Ku())
                      }
                    },
                    ru = ["largest-contentful-paint"];
                  Eu && ru.push("interaction-contentful-paint", "soft-navigation");
                  const Bu = EE(ru, Vu);
                  if (Bu) {
                    Ku = oy(uu, mu, eE, Ru.reportAllChanges);
                    const Qu = ["keydown", "click", "visibilitychange"],
                      Ju = uu => {
                        if (uu.isTrusted && !yu) {
                          const uu = mu.id;
                          dE((() => {
                            if (!yu) {
                              if (!Eu) {
                                Bu.disconnect();
                                for (const uu of Qu) removeEventListener(uu, Ju, {
                                  capture: !0
                                })
                              }
                              uu === mu.id && (yu = !0, Ku(!0))
                            }
                          }))
                        }
                      };
                    for (const uu of Qu) addEventListener(uu, Ju, {
                      capture: !0
                    });
                    Yy((Eu => {
                      Nu("back-forward-cache", mu.navigationId, mu.navigationInteractionId, mu.navigationURL, iy()), Ku = oy(uu, mu, eE, Ru.reportAllChanges), qy((() => {
                        mu.value = performance.now() - Eu.timeStamp, yu = !0, Ku(!0)
                      }))
                    }))
                  }
                }))
              }((Ru => {
                uu((uu => {
                  let Ru = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: uu.value
                  };
                  if (uu.entries.length) {
                    const Ku = uu.entries.at(-1),
                      Qu = uu => uu.name === Ku.url && (uu.requestStart || uu.startTime) <= Ku.startTime,
                      mu = Ku.url && (DE.findLast(Qu) || performance.getEntriesByType("resource").findLast(Qu));
                    let Ju;
                    Ru.target = Eu.get(Ku), Ru.lcpEntry = Ku, Ku.url && (Ru.url = Ku.url), mu && (Ru.lcpResourceEntry = mu);
                    let Nu = 0,
                      Xu = 0;
                    if ("soft-navigation" !== uu.navigationType ? (Ju = Ly(), Nu = Ju?.activationStart ?? 0, Xu = Ju?.responseStart ?? 0) : (Nu = uu.navigationStartTime || 0, Ju = yu.u?.get(uu.navigationId)), Ju) {
                      const yu = Math.max(0, Xu - Nu),
                        Eu = Math.max(yu, mu ? (mu.requestStart || mu.startTime) - Nu : 0),
                        Ku = Math.min(uu.value, Math.max(Eu, mu ? mu.responseEnd - Nu : 0));
                      Ru = {
                        ...Ru,
                        timeToFirstByte: yu,
                        resourceLoadDelay: Eu - yu,
                        resourceLoadDuration: Ku - Eu,
                        elementRenderDelay: uu.value - Ku,
                        navigationEntry: Ju
                      }
                    }
                  }
                  return Object.assign(uu, {
                    attribution: Ru
                  })
                })(Ru))
              }), Ru)
          }((uu => {
            var Ru;
            const {
              elementRenderDelay: yu,
              resourceLoadDelay: Eu,
              resourceLoadDuration: Ku,
              timeToFirstByte: Qu,
              target: mu,
              url: Ju,
              lcpResourceEntry: Nu
            } = uu.attribution, Xu = this.buildInitialValues(uu);
            this.addIfPresent(Xu, "element_render_delay", yu), this.addIfPresent(Xu, "resource_load_delay", Eu), this.addIfPresent(Xu, "resource_load_duration", Ku), this.addIfPresent(Xu, UE, Qu);
            const Vu = this.buildInitialContext(uu);
            this.addIfPresent(Vu, "element", mu), (null === (Ru = this.webVitalConfig) || void 0 === Ru ? void 0 : Ru.trackAttributionSources) && (this.addIfPresent(Vu, "resource_url", Ju), this.addIfPresent(Vu, "resource_delivery_type", null === Nu || void 0 === Nu ? void 0 : Nu.deliveryType), this.addIfPresent(Vu, "resource_initiator_type", null === Nu || void 0 === Nu ? void 0 : Nu.initiatorType)), this.pushMeasurement(Xu, Vu)
          }), {
            reportAllChanges: null === (uu = this.webVitalConfig) || void 0 === uu ? void 0 : uu.reportAllChanges
          })
        }
        measureTTFB() {
          var uu;
          ! function(uu) {
            ! function(uu) {
              let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const yu = KE(Ru);
              let Eu = yE("TTFB"),
                Ku = oy(uu, Eu, ME, Ru.reportAllChanges);
              IE((() => {
                const Qu = Ly();
                if (Qu) {
                  const mu = Qu.responseStart;
                  Eu.value = Math.max(mu - Oy(), 0), Eu.entries = [Qu], Ku(!0), Yy((() => {
                    Eu = yE("TTFB", 0, "back-forward-cache", Eu.navigationId, Eu.navigationInteractionId, Eu.navigationURL, iy()), Ku = oy(uu, Eu, ME, Ru.reportAllChanges), Ku(!0)
                  })), yu && EE(["soft-navigation"], (yu => {
                    yu.forEach((yu => {
                      yu.navigationId && (Eu = yE("TTFB", 0, "soft-navigation", yu.navigationId, yu.interactionId, yu.name, yu.startTime), Eu.entries = [yu], Ku = oy(uu, Eu, ME, Ru.reportAllChanges), Ku(!0))
                    }))
                  }), Ru)
                }
              }))
            }((Ru => {
              uu((uu => {
                const Ru = uu.entries[0];
                let yu = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Ru
                };
                if (uu.entries.length && Ru instanceof PerformanceNavigationTiming) {
                  const Eu = Ru.activationStart || 0,
                    Ku = Math.max((Ru.workerStart || Ru.fetchStart || 0) - Eu, 0),
                    Qu = Math.max(Ru.domainLookupStart - Eu, 0),
                    mu = Math.max(Ru.connectStart - Eu, 0),
                    Ju = Math.max(Ru.connectEnd - Eu, 0);
                  yu = {
                    waitingDuration: Ku,
                    cacheDuration: Qu - Ku,
                    dnsDuration: mu - Qu,
                    connectionDuration: Ju - mu,
                    requestDuration: uu.value - Ju,
                    navigationEntry: Ru
                  }
                }
                return Object.assign(uu, {
                  attribution: yu
                })
              })(Ru))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((uu => {
            const {
              dnsDuration: Ru,
              connectionDuration: yu,
              requestDuration: Eu,
              waitingDuration: Ku,
              cacheDuration: Qu
            } = uu.attribution, mu = this.buildInitialValues(uu);
            this.addIfPresent(mu, "dns_duration", Ru), this.addIfPresent(mu, "connection_duration", yu), this.addIfPresent(mu, "request_duration", Eu), this.addIfPresent(mu, "waiting_duration", Ku), this.addIfPresent(mu, "cache_duration", Qu);
            const Ju = this.buildInitialContext(uu);
            this.pushMeasurement(mu, Ju)
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
          var Ru;
          const yu = null !== (Ru = uR("com.grafana.faro.lastNavigationId", vu)) && void 0 !== Ru ? Ru : ly;
          return {
            id: uu.id,
            rating: uu.rating,
            navigation_type: uu.navigationType,
            navigation_entry_id: yu
          }
        }
        pushMeasurement(uu, Ru) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: uu
          }, {
            context: Ru
          })
        }
        addIfPresent(uu, Ru, yu) {
          yu && (uu[Ru] = yu)
        }
        addNumberIfDefined(uu, Ru, yu) {
          void 0 !== yu && (uu[Ru] = yu)
        }
      },
      sE = class extends Ry {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = yy
        }
        initialize() {
          this.logDebug("Initializing"), new nE(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const tE = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function lE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Ru of uu)
        if ("traceparent" === Ru.name) {
          if (!tE.test(Ru.description)) continue;
          const [, uu, yu] = Ru.description.split("-");
          if (null != uu && null != yu) return {
            traceId: uu,
            spanId: yu
          };
          break
        }
    }

    function gE(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: yu,
        monoNow: Eu
      } = Ru;
      return Math.min(yu, yu - (Eu - uu))
    }

    function cE(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [yu, Eu] of Object.entries(Ru)) {
        const Ru = uu[yu];
        return null != Ru && (Gu(Eu) ? Eu.includes(Ru) : Ru === Eu)
      }
      return !0
    }

    function LE(uu) {
      const {
        connectEnd: Ru,
        connectStart: yu,
        decodedBodySize: Eu,
        domainLookupEnd: Ku,
        domainLookupStart: Qu,
        duration: mu,
        encodedBodySize: Ju,
        fetchStart: Nu,
        initiatorType: Xu,
        name: Vu,
        nextHopProtocol: ru,
        redirectEnd: Bu,
        redirectStart: xu,
        renderBlockingStatus: Su,
        requestStart: pu,
        responseEnd: Tu,
        responseStart: Wu,
        responseStatus: ju,
        secureConnectionStart: Hu,
        transferSize: du,
        workerStart: bu
      } = uu;
      return {
        name: Vu,
        httpHost: FE(Vu),
        duration: wE(mu),
        tcpHandshakeTime: wE(Ru - yu),
        dnsLookupTime: wE(Ku - Qu),
        tlsNegotiationTime: wE(Ru - Hu),
        responseStatus: wE(ju),
        redirectTime: wE(Bu - xu),
        requestTime: wE(Wu - pu),
        responseTime: wE(Tu - Wu),
        fetchTime: wE(Tu - Nu),
        serviceWorkerTime: wE(bu > 0 ? Nu - bu : 0),
        decodedBodySize: wE(Eu),
        encodedBodySize: wE(Ju),
        cacheHitStatus: function() {
          let uu = "fullLoad";
          0 === du ? Eu > 0 && (uu = "cache") : null != ju ? 304 === ju && (uu = "conditionalFetch") : Ju > 0 && du < Ju && (uu = "conditionalFetch");
          return uu
        }(),
        renderBlockingStatus: wE(Su),
        protocol: ru,
        initiatorType: Xu,
        visibilityState: document.visibilityState,
        ttfb: wE(Wu - pu),
        transferSize: wE(du)
      }
    }

    function zE(uu) {
      const {
        activationStart: Ru,
        domComplete: yu,
        domContentLoadedEventEnd: Eu,
        domContentLoadedEventStart: Ku,
        domInteractive: Qu,
        fetchStart: mu,
        loadEventEnd: Ju,
        loadEventStart: Nu,
        responseStart: Xu,
        type: Vu
      } = uu, ru = function() {
        var uu;
        return null != (null === (uu = performance.timing) || void 0 === uu ? void 0 : uu.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return VR(VR({}, LE(uu)), {}, {
        pageLoadTime: wE(yu - mu),
        documentParsingTime: wE(ru ? Qu - ru : null),
        domProcessingTime: wE(yu - Qu),
        domContentLoadHandlerTime: wE(Eu - Ku),
        onLoadTime: wE(Ju - Nu),
        ttfb: wE(Math.max(Xu - (null !== Ru && void 0 !== Ru ? Ru : 0), 0)),
        type: Vu
      })
    }

    function FE(uu) {
      try {
        return new URL(uu).host || ly
      } catch (Ru) {
        return ly
      }
    }

    function wE(uu) {
      return null == uu ? ly : "number" === typeof uu ? Math.round(uu > 0 ? uu : 0).toString() : uu.toString()
    }
    const ZE = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function hE(uu, Ru, yu, Eu, Ku, Qu, mu) {
      try {
        var Ju = uu[Qu](mu),
          Nu = Ju.value
      } catch (uu) {
        return void yu(uu)
      }
      Ju.done ? Ru(Nu) : Promise.resolve(Nu).then(Eu, Ku)
    }

    function PE(uu) {
      return function() {
        var Ru = this,
          yu = arguments;
        return new Promise((function(Eu, Ku) {
          var Qu = uu.apply(Ru, yu);

          function mu(uu) {
            hE(Qu, Eu, Ku, mu, Ju, "next", uu)
          }

          function Ju(uu) {
            hE(Qu, Eu, Ku, mu, Ju, "throw", uu)
          }
          mu(void 0)
        }))
      }
    }
    const iE = new jy;
    var YE = class extends Ry {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = yy
      }
      initialize() {
        var uu = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Ru = !1;
        const yu = () => {
          ! function(uu) {
            if ("complete" === document.readyState) uu();
            else {
              const Ru = () => {
                "complete" === document.readyState && (uu(), document.removeEventListener("readystatechange", Ru))
              };
              document.addEventListener("readystatechange", Ru)
            }
          }(PE((function*() {
            if (Ru) return;
            const yu = uu.api.pushEvent,
              {
                faroNavigationId: Eu
              } = yield function(uu) {
                let Ru;
                const yu = new Promise((uu => {
                  Ru = uu
                }));
                return new PerformanceObserver((yu => {
                  var Eu;
                  const [Ku] = yu.getEntries();
                  if (null == Ku || qu(Ku.name)) return;
                  const Qu = Ku.toJSON();
                  let mu = lE(null === Qu || void 0 === Qu ? void 0 : Qu.serverTiming);
                  const Ju = null !== (Eu = uR("com.grafana.faro.lastNavigationId", vu)) && void 0 !== Eu ? Eu : ly,
                    Nu = VR(VR({}, zE(Qu)), {}, {
                      faroNavigationId: WR(),
                      faroPreviousNavigationId: Ju
                    });
                  RR("com.grafana.faro.lastNavigationId", Nu.faroNavigationId, vu), uu("faro.performance.navigation", Nu, void 0, {
                    spanContext: mu,
                    timestampOverwriteMs: gE(Qu.startTime)
                  }), Ru(Nu)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), yu
              }(yu);
            Ru || null == Eu || function(uu, Ru, yu, Eu) {
              const Ku = Eu.trackResources;
              new PerformanceObserver((Eu => {
                const Qu = Eu.getEntries(),
                  mu = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Ju of Qu) {
                  if (qu(Ju.name)) continue;
                  null === yu || void 0 === yu || yu.notify({
                    type: "resource"
                  });
                  const Eu = Ju.toJSON();
                  let Qu = lE(null === Eu || void 0 === Eu ? void 0 : Eu.serverTiming);
                  (null == Ku && cE(Eu, ZE) || Ku) && Ru("faro.performance.resource", VR(VR({}, LE(Eu)), {}, {
                    faroNavigationId: uu,
                    faroResourceId: WR()
                  }), void 0, {
                    spanContext: Qu,
                    timestampOverwriteMs: gE(Eu.startTime, mu)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Eu, yu, iE, uu.config)
          })))
        };
        this.cancelInitialization = () => {
          Ru = !0, document.removeEventListener("prerenderingchange", yu)
        }, document.prerendering ? document.addEventListener("prerenderingchange", yu, {
          once: !0
        }) : yu()
      }
      destroy() {
        var uu;
        null === (uu = this.cancelInitialization) || void 0 === uu || uu.call(this), this.cancelInitialization = void 0
      }
    };
    const oE = "data-faro-user-action-name",
      qE = oE.replace(/-name$/, "-timeout"),
      OE = 1e3;

    function vE(uu) {
      return `data-${(uu.startsWith("data-")?uu.slice(5):uu).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function aE(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hR;
      if (void 0 === uu) return Ru;
      let Eu = NaN;
      try {
        Eu = "string" === typeof uu && "" === uu.trim() ? NaN : Number(uu)
      } catch (Ku) {}
      return !Number.isFinite(Eu) || Eu <= 0 ? (yu(`initialActivityTimeout must be a finite number greater than zero; using ${Ru} ms`), Ru) : Eu > 1e3 ? (yu(`initialActivityTimeout cannot exceed ${OE} ms; clamping to the maximum`), OE) : Eu
    }

    function fE(uu, Ru, yu) {
      return void 0 !== uu && window.clearTimeout(uu), window.setTimeout((() => {
        Ru()
      }), yu)
    }

    function uK(uu) {
      return uu.type === Wy
    }
    let RK, yK;

    function EK() {
      return RK || (RK = new jy), yK || (yK = new MutationObserver(((uu, Ru) => {
        RK.notify({
          type: "dom-mutation"
        })
      })), yK.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), RK
    }
    const KK = "fetch",
      QK = "xhr";
    let mK, JK, NK, XK, VK = !1;

    function rK() {
      if (mK) return mK;

      function uu(uu) {
        mK.notify({
          type: Ty,
          request: uu
        })
      }

      function Ru(uu) {
        mK.notify({
          type: Wy,
          request: uu
        })
      }
      return mK = new jy, VK || (! function(uu) {
        let {
          onRequestEnd: Ru,
          onRequestStart: yu
        } = uu;
        NK || (NK = window.fetch);
        window.fetch = function() {
          var uu, Eu;
          const Ku = null !== (uu = Ou(arguments[0])) && void 0 !== uu ? uu : "",
            Qu = qu(Ku),
            mu = (null !== (Eu = arguments[1]) && void 0 !== Eu ? Eu : {}).method,
            Ju = WR();
          return Qu || yu({
            url: Ku,
            method: mu,
            requestId: Ju,
            apiType: KK
          }), NK.apply(this, arguments).then((uu => (Qu || Ru({
            url: Ku,
            method: mu,
            requestId: Ju,
            apiType: KK
          }), uu))).catch((uu => {
            throw Qu || Ru({
              url: Ku,
              method: mu,
              requestId: Ju,
              apiType: KK
            }), uu
          }))
        }
      }({
        onRequestStart: uu,
        onRequestEnd: Ru
      }), function(uu) {
        let {
          onRequestStart: Ru,
          onRequestEnd: yu
        } = uu;
        JK || (JK = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const uu = arguments[1],
            Eu = qu(uu),
            Ku = arguments[0],
            Qu = WR();
          this.addEventListener("loadstart", (function() {
            Eu || Ru({
              url: uu,
              method: Ku,
              requestId: Qu,
              apiType: QK
            })
          })), this.addEventListener("load", (function() {
            Eu || yu({
              url: uu,
              method: Ku,
              requestId: Qu,
              apiType: QK
            })
          })), this.addEventListener("error", (function() {
            Eu || yu({
              url: uu,
              method: Ku,
              requestId: Qu,
              apiType: QK
            })
          })), this.addEventListener("abort", (function() {
            Eu || yu({
              url: uu,
              method: Ku,
              requestId: Qu,
              apiType: QK
            })
          })), JK.apply(this, arguments)
        }
      }({
        onRequestStart: uu,
        onRequestEnd: Ru
      }), VK = !0), mK
    }
    let BK, xK = !1;
    let SK = function(uu) {
      return uu[uu.Started = 0] = "Started", uu[uu.Halted = 1] = "Halted", uu[uu.Cancelled = 2] = "Cancelled", uu[uu.Ended = 3] = "Ended", uu
    }({});
    var pK = class {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = uu, this.logDebug = Ru, this.initialActivityTimeout = yu, this.http = rK(), this.dom = EK(), this.perf = (XK || (XK = new jy), xK || (BK = iE.subscribe((uu => {
          "resource" === uu.type && XK.notify({
            type: "resource-entry"
          })
        })), xK = !0), XK), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new jy).merge(this.http, this.dom, this.perf).takeWhile((() => [SK.Started, SK.Halted].includes(this.userAction.getState()))).filter((uu => !!(this.userAction.getState() !== SK.Halted || uK(uu) && this.runningRequests.has(uu.request.requestId)))).subscribe((uu => {
          (function(uu) {
            return uu.type === Ty
          })(uu) && this.runningRequests.set(uu.request.requestId, uu.request), uK(uu) && this.runningRequests.delete(uu.request.requestId), uK(uu) ? this.userAction.getState() === SK.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((uu => [SK.Ended, SK.Cancelled].includes(uu))).first().subscribe((() => this.cleanup())), this.startupTid = fE(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === SK.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === SK.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = fE(this.haltTid, (() => {
          this.userAction.getState() === SK.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var uu, Ru;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (uu = this.allMonitorsSub) || void 0 === uu || uu.unsubscribe(), null === (Ru = this.stateSub) || void 0 === Ru || Ru.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(uu) {
        void 0 !== uu && window.clearTimeout(uu)
      }
    };

    function TK(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hR;
      var yu;
      const {
        api: Eu,
        config: Ku,
        internalLogger: Qu
      } = uu, mu = aE(null === (yu = Ku.userActionsInstrumentation) || void 0 === yu ? void 0 : yu.initialActivityTimeout, 100, Ru);
      return {
        processUserEvent: function(uu) {
          var Ru, yu;
          const Qu = null !== (Ru = null === (yu = Ku.userActionsInstrumentation) || void 0 === yu ? void 0 : yu.dataAttributeName) && void 0 !== Ru ? Ru : oE,
            mu = uu.target;
          if (!(mu instanceof Element)) return;
          const Ju = function(uu, Ru) {
              let yu = uu;
              for (; yu;) {
                if (yu.hasAttribute(Ru)) return yu;
                yu = yu.parentElement
              }
              return null
            }(mu, vE(Qu)),
            Nu = function(uu, Ru) {
              if (!uu) return;
              const yu = function(uu) {
                  return vE(uu).slice(5).replace(/-(.)/g, ((uu, Ru) => Ru.toUpperCase()))
                }(Ru),
                Eu = uu.dataset;
              for (const Ku in Eu)
                if (Ku === yu) return Eu[Ku]
            }(Ju, Qu);
          if (!Ju || !Nu) return;
          const Xu = function(uu, Ru) {
            const yu = uu.getAttribute(function(uu) {
              const Ru = vE(uu);
              return Ru.endsWith("-name") ? `${Ru.slice(0,-5)}-timeout` : `${Ru}-timeout`
            }(Ru));
            return null === yu ? void 0 : Number(yu)
          }(Ju, Qu);
          Eu.startUserAction(Nu, {}, {
            triggerName: uu.type,
            initialActivityTimeout: Xu
          })
        },
        processUserActionStarted: function(uu, yu) {
          const Eu = uu,
            Ku = aE(yu, mu, Ru);
          new pK(Eu, Qu.debug, Ku).attach()
        }
      }
    }
    const WK = "user_action_start",
      jK = {
        Normal: "normal",
        Critical: "critical"
      };
    var HK = class {
        constructor() {
          this.buffer = []
        }
        addItem(uu) {
          this.buffer.push(uu)
        }
        flushBuffer(uu) {
          if (Iu(uu))
            for (const Ru of this.buffer) uu(Ru);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      dK = class extends jy {
        constructor(uu) {
          let {
            name: Ru,
            parentId: yu,
            trigger: Eu,
            transports: Ku,
            attributes: Qu,
            trackUserActionsExcludeItem: mu,
            importance: Ju = jK.Normal,
            pushEvent: Nu
          } = uu;
          super(), this.name = Ru, this.attributes = Qu, this.id = WR(), this.trigger = Eu, this.parentId = null !== yu && void 0 !== yu ? yu : this.id, this.trackUserActionsExcludeItem = mu, this.importance = Ju, this._pushEvent = Nu, this._itemBuffer = new HK, this._transports = Ku, this._state = 0, this._start()
        }
        addItem(uu) {
          return 0 === this._state && (this._itemBuffer.addItem(uu), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = BR(), this._startTimeMono = xR())
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
          const uu = BR(),
            Ru = xR() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((uu => {
            if (function(uu, Ru) {
                return (null === Ru || void 0 === Ru ? void 0 : Ru(uu)) || "measurement" === uu.type && "web-vitals" === uu.payload.type
              }(uu, this.trackUserActionsExcludeItem)) return void this._transports.execute(uu);
            const Ru = aR(aR({}, uu), {}, {
              payload: aR(aR({}, uu.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Ru)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", aR({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: uu.toString(),
            userActionDuration: Ru.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, gR(this.attributes)), void 0, {
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
    const bK = new jy;

    function CK(uu, Ru) {
      return !!uu && (0 === (null === uu || void 0 === uu ? void 0 : uu.getState()) && (uu.addItem(Ru), !0))
    }
    var kK = class extends Ry {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = yy
        }
        initialize() {
          const {
            processUserEvent: uu,
            processUserActionStarted: Ru
          } = TK(pu, (uu => this.logWarn(uu)));
          this._processUserEvent = uu, this._processKeydown = Ru => {
            [" ", "Enter"].includes(Ru.key) && uu(Ru)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = bK.subscribe((uu => {
            let {
              type: yu,
              userAction: Eu,
              initialActivityTimeout: Ku
            } = uu;
            "user_action_start" === yu && Ru(Eu, Ku)
          }))
        }
        destroy() {
          var uu;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (uu = this._userActionSub) || void 0 === uu || uu.unsubscribe()
        }
      },
      eK = class extends Ry {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = yy, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(uu) {
          const Ru = {
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
          this.api.pushEvent("securitypolicyviolation", gR(Ru))
        }
      };
    var AK = class extends jy {
      constructor(uu, Ru) {
        var yu, Eu, Ku, Qu;
        super(), this._tracking = !1, this.eventsObservable = uu, this._options = {
          inactivityMs: null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.inactivityMs) && void 0 !== yu ? yu : 100,
          drainTimeoutMs: null !== (Eu = null === Ru || void 0 === Ru ? void 0 : Ru.drainTimeoutMs) && void 0 !== Eu ? Eu : 1e4,
          isOperationStart: null !== (Ku = null === Ru || void 0 === Ru ? void 0 : Ru.isOperationStart) && void 0 !== Ku ? Ku : () => {},
          isOperationEnd: null !== (Qu = null === Ru || void 0 === Ru ? void 0 : Ru.isOperationEnd) && void 0 !== Qu ? Qu : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((uu => {
          var Ru;
          this._lastEventTime = xR(), null === (Ru = this._currentEvents) || void 0 === Ru || Ru.push(uu);
          const yu = this._options.isOperationStart(uu);
          var Eu;
          yu && (null === (Eu = this._activeOperations) || void 0 === Eu || Eu.set(yu, !0));
          const Ku = this._options.isOperationEnd(uu);
          var Qu;
          Ku && (null === (Qu = this._activeOperations) || void 0 === Qu || Qu.delete(Ku));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = xR(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let uu;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), uu = this.hasActiveOperations() ? xR() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: uu
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = DK(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = DK(this._drainTid, (() => {
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

    function DK(uu, Ru, yu) {
      return uu && clearTimeout(uu), uu = setTimeout((() => {
        Ru()
      }), yu)
    }
    let MK;
    const IK = new Set,
      GK = new Map;
    let UK, nK, sK, tK, lK, gK, cK, LK, zK = !1;
    var FK = class extends Ry {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = yy
      }
      initialize() {
        const uu = rK(),
          Ru = EK(),
          yu = function() {
            function uu(uu, Ru) {
              const yu = null !== Ru && void 0 !== Ru ? Ru : location.href;
              yu !== nK && (UK.notify({
                type: "url-change",
                from: nK,
                to: yu,
                trigger: uu
              }), nK = yu)
            }
            if (UK || (UK = new jy, nK = location.href), !zK)
              if ("navigation" in window && "NavigateEvent" in window) {
                cK = Ru => {
                  try {
                    const yu = null === Ru || void 0 === Ru ? void 0 : Ru.destination;
                    (null === yu || void 0 === yu ? void 0 : yu.sameDocument) && "string" === typeof yu.url && uu("navigate", yu.url)
                  } catch (yu) {}
                }, window.navigation.addEventListener("navigate", cK);
                const Ru = window.NavigateEvent;
                Ru && Ru.prototype && "function" === typeof Ru.prototype.intercept && (LK || (LK = Ru.prototype.intercept), Ru.prototype.intercept = function(Ru) {
                  try {
                    const Ru = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      yu = null === this || void 0 === this ? void 0 : this.destination;
                    Ru && yu && !1 === yu.sameDocument && "string" === typeof yu.url && uu("navigate-intercept", yu.url)
                  } catch (yu) {}
                  return LK.call(this, Ru)
                }), zK = !0
              } else sK || (sK = window.history.pushState), window.history.pushState = function() {
                for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
                const Ku = sK.apply(window.history, yu);
                return uu("pushState"), Ku
              }, tK || (tK = window.history.replaceState), window.history.replaceState = function() {
                for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
                const Ku = tK.apply(window.history, yu);
                return uu("replaceState"), Ku
              }, lK = () => uu("popstate"), gK = () => uu("hashchange"), window.addEventListener("popstate", lK), window.addEventListener("hashchange", gK), zK = !0;
            return UK
          }(),
          Eu = (Ku = ["pointerdown", "keydown"], MK || (MK = new jy), Ku.forEach((uu => {
            if (!IK.has(uu)) {
              const Ru = () => {
                MK.notify({
                  type: "interaction",
                  name: uu
                })
              };
              window.addEventListener(uu, Ru), IK.add(uu), GK.set(uu, Ru)
            }
          })), MK);
        var Ku;
        const Qu = new AK((new jy).merge(uu, Ru, yu), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: uu => function(uu) {
            return uu.type === Ty
          }(uu) ? uu.request.requestId : void 0,
          isOperationEnd: uu => function(uu) {
            return uu.type === Wy
          }(uu) ? uu.request.requestId : void 0
        });
        Qu.filter((uu => "tracking-ended" === uu.message)).subscribe((uu => {
          var Ru, yu;
          if ((null === (Ru = uu.events) || void 0 === Ru ? void 0 : Ru.some((uu => "url-change" === uu.type))) && (null === (yu = uu.events) || void 0 === yu ? void 0 : yu.some((uu => "dom-mutation" === uu.type)))) {
            var Eu;
            const Ru = null === (Eu = uu.events) || void 0 === Eu ? void 0 : Eu.find((uu => "url-change" === uu.type));
            pu.api.pushEvent("faro.navigation", {
              fromUrl: null === Ru || void 0 === Ru ? void 0 : Ru.from,
              toUrl: null === Ru || void 0 === Ru ? void 0 : Ru.to,
              sameDocument: String(!0),
              duration: uu.duration
            })
          }
        })), Eu.subscribe((() => {
          Qu.startTracking()
        }))
      }
    };

    function wK() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Ru = [new kK, new ty, new sE, new Ey, new gy, new FK];
      return !1 !== uu.enablePerformanceInstrumentation && Ru.unshift(new YE), !1 !== uu.enableContentSecurityPolicyInstrumentation && Ru.push(new eK), !1 !== uu.captureConsole && Ru.push(new ny), Ru
    }
    var ZK = yu(6480);
    let hK, PK;

    function iK() {
      const uu = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return hK === uu && PK || (PK = new ZK.UAParser(uu).getResult(), hK = uu), PK
    }
    const YK = () => {
        const {
          browser: uu,
          os: Ru,
          ua: yu
        } = iK(), {
          name: Eu,
          version: Ku
        } = uu, {
          name: Qu,
          version: mu
        } = Ru, Ju = navigator.language, Nu = yu.includes("Mobi"), Xu = function() {
          if (!Eu || !Ku) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Eu && void 0 !== Eu ? Eu : ly,
            version: null !== Ku && void 0 !== Ku ? Ku : ly,
            os: `${null!==Qu&&void 0!==Qu?Qu:ly} ${null!==mu&&void 0!==mu?mu:ly}`,
            userAgent: null !== yu && void 0 !== yu ? yu : ly,
            language: null !== Ju && void 0 !== Ju ? Ju : ly,
            mobile: Nu,
            brands: null !== Xu && void 0 !== Xu ? Xu : ly,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      oK = () => {
        const {
          name: uu,
          version: Ru
        } = iK().os;
        if (!uu && !Ru) return {};
        const yu = {};
        return uu && (yu.name = uu), Ru && (yu.version = Ru), {
          os: yu
        }
      };

    function qK(uu) {
      var Ru, yu, Eu;
      return {
        id: null !== (Ru = null === (yu = pu.config) || void 0 === yu || null === (yu = yu.sessionTracking) || void 0 === yu || null === (Eu = yu.generateSessionId) || void 0 === Eu ? void 0 : Eu.call(yu)) && void 0 !== Ru ? Ru : WR(),
        attributes: uu
      }
    }
    const OK = () => ({
      sdk: {
        name: "faro-web",
        version: yy
      }
    });
    var vK = class extends uy {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let aK = function(uu) {
      return uu.EXCEPTION = "exception", uu.LOG = "log", uu.MEASUREMENT = "measurement", uu.TRACE = "trace", uu.EVENT = "event", uu
    }({});
    const fK = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function uQ(uu, Ru) {
      var yu, Eu;
      if (void 0 === Ru) return uu;
      if (void 0 === uu) return {
        resourceSpans: Ru
      };
      const Ku = null === (yu = uu.resourceSpans) || void 0 === yu ? void 0 : yu[0];
      if (void 0 === Ku) return uu;
      const Qu = (null === Ku || void 0 === Ku ? void 0 : Ku.scopeSpans) || [],
        mu = (null === Ru || void 0 === Ru || null === (Eu = Ru[0]) || void 0 === Eu ? void 0 : Eu.scopeSpans) || [];
      return aR(aR({}, uu), {}, {
        resourceSpans: [aR(aR({}, Ku), {}, {
          scopeSpans: [...Qu, ...mu]
        })]
      })
    }

    function RQ(uu) {
      let Ru = {
        meta: {}
      };
      return void 0 !== uu[0] && (Ru.meta = uu[0].meta), uu.forEach((uu => {
        switch (uu.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const yu = fK[uu.type],
              Eu = Ru[yu];
            Ru = aR(aR({}, Ru), {}, {
              [yu]: void 0 === Eu ? [uu.payload] : [...Eu, uu.payload]
            });
            break
          }
          case "trace":
            Ru = aR(aR({}, Ru), {}, {
              traces: uQ(Ru.traces, uu.payload.resourceSpans)
            })
        }
      })), Ru
    }
    var yQ = class extends vK {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = uu, this.name = "@grafana/faro-web-sdk:transport-console", this.version = yy
      }
      send(uu) {
        var Ru;
        return this.unpatchedConsole[null !== (Ru = this.options.level) && void 0 !== Ru ? Ru : Hy.DEBUG]("New event", RQ([uu]))
      }
    };
    const EQ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      KQ = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      QQ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      mQ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      JQ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      NQ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function XQ(uu) {
      let {
        weekday: Ru,
        day: yu,
        month: Eu,
        year: Ku,
        hour: Qu,
        minute: mu,
        second: Ju
      } = uu;
      if (Ku < 1900 || yu < 1 || Qu > 23 || mu > 59 || Ju > 60) return;
      const Nu = 60 === Ju,
        Xu = new Date(0);
      return Xu.setUTCFullYear(Ku, Eu, yu), Xu.setUTCHours(Qu, mu, Nu ? 59 : Ju, 0), Xu.getUTCDay() === Ru && Xu.getUTCDate() === yu && Xu.getUTCMonth() === Eu && Xu.getUTCFullYear() === Ku && Xu.getUTCHours() === Qu && Xu.getUTCMinutes() === mu && Xu.getUTCSeconds() === (Nu ? 59 : Ju) ? Xu.getTime() + (Nu ? 1e3 : 0) : void 0
    }
    var VQ = class {
      constructor(uu) {
        this.options = uu, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var uu = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Ru = this.sequence++;
        let yu = !1;
        return {
          deliver: function() {
            var yu = PE((function*(yu) {
              const Eu = uu.options.getNow();
              let Ku, Qu = 0;
              for (;;) {
                var mu, Ju, Nu;
                const Xu = uu.options.retry.maxAttempts - Qu,
                  Vu = yield uu.runAttempt((() => yu(Xu, uu.unloading)), Qu > 0);
                if (Qu += Vu.attemptsMade, "success" === Vu.kind) return {
                  kind: "success",
                  attempts: Qu,
                  elapsedTimeMs: uu.options.getNow() - Eu
                };
                if (Ku = Vu.failure, "terminal" === Vu.kind || uu.unloading) return {
                  kind: "terminal",
                  attempts: Qu,
                  elapsedTimeMs: uu.options.getNow() - Eu,
                  failure: Ku
                };
                if (Qu >= uu.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Qu,
                  elapsedTimeMs: uu.options.getNow() - Eu,
                  failure: Ku,
                  reason: "retries-exhausted"
                };
                if (null != Vu.retryAfterMs && Vu.retryAfterMs > uu.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Qu,
                  elapsedTimeMs: uu.options.getNow() - Eu,
                  failure: Ku,
                  reason: "retry-after-too-long"
                };
                const ru = Math.min(null !== (mu = Vu.retryAfterMs) && void 0 !== mu ? mu : uu.options.retry.initialBackoffMs * Math.pow(uu.options.retry.backoffMultiplier, Qu - 1), uu.options.retry.maxBackoffMs);
                if (null === (Ju = (Nu = uu.options).onRetry) || void 0 === Ju || Ju.call(Nu, ru, Qu + 1), yield uu.waitForTurn(Ru, ru)) {
                  const Ru = uu.options.retry.maxAttempts - Qu,
                    Ku = yield uu.runAttempt((() => yu(Ru, !0)));
                  return Qu += Ku.attemptsMade, {
                    kind: "success" === Ku.kind ? "success" : "terminal",
                    attempts: Qu,
                    elapsedTimeMs: uu.options.getNow() - Eu,
                    failure: "success" === Ku.kind ? void 0 : Ku.failure
                  }
                }
              }
            }));
            return function(uu) {
              return yu.apply(this, arguments)
            }
          }(),
          release: () => {
            yu || (yu = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const uu = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Ru of uu) Ru.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((yu, Eu) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Ru = () => {
                this.inProgress--, this.runNextAttempt()
              };
              uu().then((uu => {
                Ru(), yu(uu)
              }), (uu => {
                Ru(), Eu(uu)
              }))
            },
            isRedelivery: Ru
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const uu = this.options.getNow(),
            Ru = this.attemptQueue.findIndex((Ru => {
              let {
                isRedelivery: yu
              } = Ru;
              return this.unloading || !yu || uu >= this.nextSendAt
            }));
          if (Ru < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - uu)));
          const [yu] = this.attemptQueue.splice(Ru, 1);
          yu.isRedelivery && !this.unloading && (this.nextSendAt = uu + 1), yu.run()
        }
      }
      waitForTurn(uu, Ru) {
        const yu = Math.min(Ru * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Ru => {
          this.waiting.push({
            sequence: uu,
            readyAt: this.options.getNow() + yu,
            resolve: Ru
          }), this.waiting.sort(((uu, Ru) => uu.readyAt === Ru.readyAt ? uu.sequence - Ru.sequence : uu.readyAt - Ru.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const uu = this.waiting[0],
          Ru = uu.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Ru = this.waiting.indexOf(uu);
          Ru >= 0 && this.waiting.splice(Ru, 1), uu.resolve(!1), this.scheduleNext()
        }), Math.max(0, Ru - this.options.getNow()))
      }
    };

    function rQ(uu, Ru) {
      if (null == uu) return {};
      var yu, Eu, Ku = function(uu, Ru) {
        if (null == uu) return {};
        var yu = {};
        for (var Eu in uu)
          if ({}.hasOwnProperty.call(uu, Eu)) {
            if (Ru.includes(Eu)) continue;
            yu[Eu] = uu[Eu]
          } return yu
      }(uu, Ru);
      if (Object.getOwnPropertySymbols) {
        var Qu = Object.getOwnPropertySymbols(uu);
        for (Eu = 0; Eu < Qu.length; Eu++) yu = Qu[Eu], Ru.includes(yu) || {}.propertyIsEnumerable.call(uu, yu) && (Ku[yu] = uu[yu])
      }
      return Ku
    }

    function BQ(uu) {
      const {
        size: Ru,
        concurrency: yu
      } = uu, Eu = [];
      let Ku = 0;
      const Qu = () => {
        if (Ku < yu && Eu.length) {
          const {
            producer: uu,
            resolve: Ru,
            reject: yu
          } = Eu.shift();
          Ku++, uu().then((uu => {
            Ku--, Qu(), Ru(uu)
          }), (uu => {
            Ku--, Qu(), yu(uu)
          }))
        }
      };
      return {
        add: uu => {
          if (Eu.length + Ku >= Ru) throw new Error("Task buffer full");
          return new Promise(((Ru, yu) => {
            Eu.push({
              producer: uu,
              resolve: Ru,
              reject: yu
            }), Qu()
          }))
        }
      }
    }
    const xQ = ["headers"],
      SQ = ["keepalive", "signal"],
      pQ = new Set([408, 425, 429, 500, 502, 503, 504]),
      TQ = new Set([429, 503]);
    let WQ = 0,
      jQ = 0;
    var HQ = class extends Error {};
    var dQ = class extends vK {
      constructor(uu) {
        var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu;
        super(), this.options = uu, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = yy, this.pendingCustomSends = 0, this.getNow = null !== (Ru = uu.getNow) && void 0 !== Ru ? Ru : Date.now, this.requestTimeoutMs = null !== (yu = uu.requestTimeoutMs) && void 0 !== yu ? yu : 1e4, this.compressionEnabled = null !== (Eu = uu.requestCompression) && void 0 !== Eu && Eu && "undefined" !== typeof CompressionStream, uu.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new VQ({
          bufferSize: null !== (Ku = uu.bufferSize) && void 0 !== Ku ? Ku : 30,
          concurrency: null !== (Qu = uu.concurrency) && void 0 !== Qu ? Qu : 5,
          retry: {
            maxAttempts: null !== (mu = null === (Ju = uu.retry) || void 0 === Ju ? void 0 : Ju.maxAttempts) && void 0 !== mu ? mu : 3,
            initialBackoffMs: null !== (Nu = null !== (Xu = null === (Vu = uu.retry) || void 0 === Vu ? void 0 : Vu.initialBackoffMs) && void 0 !== Xu ? Xu : uu.defaultRateLimitBackoffMs) && void 0 !== Nu ? Nu : 1e3,
            maxBackoffMs: null !== (ru = null === (Bu = uu.retry) || void 0 === Bu ? void 0 : Bu.maxBackoffMs) && void 0 !== ru ? ru : 3e4,
            backoffMultiplier: null !== (xu = null === (Su = uu.retry) || void 0 === Su ? void 0 : Su.backoffMultiplier) && void 0 !== xu ? xu : 2
          },
          getNow: this.getNow,
          getRandom: null !== (pu = uu.getRandom) && void 0 !== pu ? pu : Math.random,
          onRetry: (uu, Ru) => {
            this.logDebug(`Retrying failed request after ${uu}ms. Attempt ${Ru}.`)
          }
        }), this.customPromiseBuffer = BQ({
          size: null !== (Tu = uu.bufferSize) && void 0 !== Tu ? Tu : 30,
          concurrency: null !== (Wu = uu.concurrency) && void 0 !== Wu ? Wu : 5
        }), this.defaultPromiseBuffer = {
          add: uu => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(uu);
            const Ru = this.deliveryQueue.reserve();
            if (!Ru) throw new Error("Task buffer full");
            return this.runBufferedTask(Ru, uu)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (uu => {
          uu.persisted && this.deliveryQueue.resume()
        })))
      }
      send(uu) {
        var Ru = this;
        return PE((function*() {
          const yu = Ru.promiseBuffer;
          if (yu !== Ru.defaultPromiseBuffer || yu.add !== Ru.defaultBufferAdd) {
            Ru.pendingCustomSends++;
            try {
              yield yu.add((() => Ru.deliver(uu)))
            } catch (Eu) {
              Ru.logError("Permanent delivery failure", {
                error: Eu,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Ru.pendingCustomSends--
            }
          } else yield Ru.deliver(uu)
        }))()
      }
      runBufferedTask(uu, Ru) {
        return PE((function*() {
          let yu;
          try {
            return yield uu.deliver(PE((function*() {
              return yu = yield Ru(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), yu
          } finally {
            uu.release()
          }
        }))()
      }
      deliver(uu) {
        var Ru = this;
        return PE((function*() {
          const yu = Ru.deliveryQueue.reserve();
          if (yu) try {
            const Eu = yield Ru.prepareRequest(uu), Ku = yield yu.deliver(((uu, yu) => Ru.performAttempt(Eu, uu, yu)));
            "terminal" === Ku.kind && Ru.logError("retries-exhausted" === Ku.reason ? "Delivery retries exhausted" : "Permanent delivery failure", VR(VR({}, Ku.failure), {}, {
              reason: Ku.reason,
              attempts: Ku.attempts,
              elapsedTimeMs: Ku.elapsedTimeMs
            }))
          } catch (Eu) {
            Ru.logError("Permanent delivery failure", {
              error: Eu,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            yu.release()
          } else Ru.logError("Permanent delivery failure", {
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
        var Ru = this;
        return PE((function*() {
          var yu, Eu;
          const Ku = RQ(uu),
            Qu = null === (yu = Ku.meta.session) || void 0 === yu ? void 0 : yu.id,
            mu = JSON.stringify(Ku),
            Ju = null !== (Eu = Ru.options.requestOptions) && void 0 !== Eu ? Eu : {},
            {
              headers: Nu = {}
            } = Ju,
            Xu = rQ(Ju, xQ),
            {
              keepalive: Vu,
              signal: ru
            } = Xu,
            Bu = rQ(Xu, SQ),
            xu = {};
          for (const [uu, Ru] of Object.entries(Nu)) xu[uu] = "function" === typeof Ru ? yield Ru(): Ru;
          let Su = mu,
            pu = function(uu) {
              return "undefined" === typeof TextEncoder ? uu.length : (new TextEncoder).encode(uu).byteLength
            }(mu);
          const Tu = {};
          return Ru.compressionEnabled && (Su = yield Ru.compress(mu), pu = Su.size, Tu["Content-Encoding"] = "gzip"), {
            bodySize: pu,
            sessionId: Qu,
            requestInit: VR({
              method: "POST",
              headers: VR(VR(VR(VR(VR({
                "Content-Type": "application/json"
              }, Tu), xu), Ru.options.apiKey ? {
                "x-api-key": Ru.options.apiKey
              } : {}), Qu ? {
                "x-faro-session-id": Qu
              } : {}), {}, {
                "Idempotency-Key": WR(20)
              }),
              body: Su
            }, Bu)
          }
        }))()
      }
      performAttempt(uu, Ru, yu) {
        var Eu = this;
        return PE((function*() {
          var Ku;
          const Qu = null === (Ku = Eu.options.requestOptions) || void 0 === Ku ? void 0 : Ku.signal;
          if (null === Qu || void 0 === Qu ? void 0 : Qu.aborted) return {
            kind: "terminal",
            failure: {
              error: Qu.reason
            },
            attemptsMade: 0
          };
          let mu = 0;
          try {
            var Ju;
            const Ku = yield Eu.fetchWithKeepaliveFallback(uu.requestInit, uu.bodySize, !!yu || (null === (Ju = Eu.options.requestOptions) || void 0 === Ju ? void 0 : Ju.keepalive), Ru, (() => mu++));
            if (Eu.handleResponse(Ku, uu.sessionId), Ku.status >= 200 && Ku.status < 300) return {
              kind: "success",
              attemptsMade: mu
            };
            const Qu = {
              status: Ku.status
            };
            return !pQ.has(Ku.status) || yu ? {
              kind: "terminal",
              failure: Qu,
              attemptsMade: mu
            } : {
              kind: "retry",
              failure: Qu,
              attemptsMade: mu,
              retryAfterMs: TQ.has(Ku.status) ? Eu.getRetryAfterDelayMs(Ku) : void 0
            }
          } catch (Nu) {
            const uu = {
              error: Nu
            };
            return (null === Qu || void 0 === Qu ? void 0 : Qu.aborted) || !Eu.isFetchNetworkError(Nu) || yu ? {
              kind: "terminal",
              failure: uu,
              attemptsMade: mu
            } : {
              kind: "retry",
              failure: uu,
              attemptsMade: mu
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(uu, Ru, yu, Eu, Ku) {
        var Qu = this;
        return PE((function*() {
          const mu = Qu.getNow(),
            Ju = Qu.reserveKeepalive(Ru, yu);
          try {
            return yield Qu.fetchWithTimeout(VR(VR({}, uu), {}, {
              keepalive: Ju.keepalive
            }), Qu.requestTimeoutMs, Ku)
          } catch (Xu) {
            var Nu;
            if (Ju.keepalive && Eu > 1 && Qu.isFetchNetworkError(Xu) && !(Xu instanceof HQ) && !(null === (Nu = Qu.options.requestOptions) || void 0 === Nu || null === (Nu = Nu.signal) || void 0 === Nu ? void 0 : Nu.aborted)) {
              Qu.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Ru = Qu.requestTimeoutMs - (Qu.getNow() - mu);
              return Qu.fetchWithTimeout(VR(VR({}, uu), {}, {
                keepalive: !1
              }), Ru, Ku)
            }
            throw Xu
          } finally {
            Ju.release()
          }
        }))()
      }
      fetchWithTimeout(uu, Ru, yu) {
        var Eu = this;
        return PE((function*() {
          var Ku;
          const Qu = null === (Ku = Eu.options.requestOptions) || void 0 === Ku ? void 0 : Ku.signal;
          if (Eu.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return yu(), fetch(Eu.options.url, VR(VR({}, uu), {}, {
            signal: Qu
          }));
          if (Ru <= 0) throw new HQ("Request timed out");
          const mu = new AbortController,
            Ju = () => mu.abort(null === Qu || void 0 === Qu ? void 0 : Qu.reason);
          null === Qu || void 0 === Qu || Qu.addEventListener("abort", Ju, {
            once: !0
          });
          let Nu = !1;
          const Xu = setTimeout((() => {
            Nu = !0, mu.abort()
          }), Ru);
          try {
            return yu(), yield fetch(Eu.options.url, VR(VR({}, uu), {}, {
              signal: mu.signal
            }))
          } catch (Vu) {
            if (Nu && !(null === Qu || void 0 === Qu ? void 0 : Qu.aborted)) throw new HQ("Request timed out");
            throw Vu
          } finally {
            clearTimeout(Xu), null === Qu || void 0 === Qu || Qu.removeEventListener("abort", Ju)
          }
        }))()
      }
      getRetryAfterDelayMs(uu) {
        const Ru = uu.headers.get("Retry-After");
        if (!Ru) return;
        if (/^\d+$/.test(Ru)) {
          const uu = 1e3 * Number(Ru);
          return Number.isFinite(uu) ? uu : Number.POSITIVE_INFINITY
        }
        const yu = this.getNow(),
          Eu = function(uu, Ru) {
            const yu = EQ.exec(uu);
            if (yu) {
              const [, uu, Ru, Eu, Ku, Qu, mu, Ju] = yu;
              return XQ({
                weekday: mQ.indexOf(uu),
                day: Number(Ru),
                month: NQ.indexOf(Eu),
                year: Number(Ku),
                hour: Number(Qu),
                minute: Number(mu),
                second: Number(Ju)
              })
            }
            const Eu = KQ.exec(uu);
            if (Eu) {
              const [, uu, yu, mu, Ju, Nu, Xu, Vu] = Eu, ru = new Date(Ru);
              if (Number.isNaN(ru.getTime())) return;
              const Bu = ru.getUTCFullYear();
              let xu = 100 * Math.floor(Bu / 100) + Number(Ju);
              xu < Bu && (xu += 100);
              const Su = NQ.indexOf(mu),
                pu = {
                  month: Su,
                  day: Number(yu),
                  hour: Number(Nu),
                  minute: Number(Xu),
                  second: Number(Vu),
                  millisecond: 0
                },
                Tu = {
                  month: ru.getUTCMonth(),
                  day: ru.getUTCDate(),
                  hour: ru.getUTCHours(),
                  minute: ru.getUTCMinutes(),
                  second: ru.getUTCSeconds(),
                  millisecond: ru.getUTCMilliseconds()
                };
              return (xu > Bu + 50 || xu === Bu + 50 && (Qu = Tu, ((Ku = pu).month - Qu.month || Ku.day - Qu.day || Ku.hour - Qu.hour || Ku.minute - Qu.minute || Ku.second - Qu.second || Ku.millisecond - Qu.millisecond) > 0)) && (xu -= 100), XQ({
                weekday: JQ.indexOf(uu),
                day: Number(yu),
                month: Su,
                year: xu,
                hour: Number(Nu),
                minute: Number(Xu),
                second: Number(Vu)
              })
            }
            var Ku, Qu;
            const mu = QQ.exec(uu);
            if (!mu) return;
            const [, Ju, Nu, Xu, Vu, ru, Bu, xu, Su] = mu;
            return XQ({
              weekday: mQ.indexOf(Ju),
              day: Number(null !== Xu && void 0 !== Xu ? Xu : Vu),
              month: NQ.indexOf(Nu),
              year: Number(Su),
              hour: Number(ru),
              minute: Number(Bu),
              second: Number(xu)
            })
          }(Ru, yu);
        return null == Eu ? void 0 : Math.max(0, Eu - yu)
      }
      reserveKeepalive(uu, Ru) {
        if (!1 === Ru || uu > 6e4 || WQ + uu > 6e4 || jQ >= 9) return {
          keepalive: !1,
          release: hR
        };
        WQ += uu, jQ++;
        let yu = !1;
        return {
          keepalive: !0,
          release: () => {
            yu || (yu = !0, WQ -= uu, jQ--)
          }
        }
      }
      handleResponse(uu, Ru) {
        202 === uu.status && "invalid" === uu.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Ru), uu.text().catch(hR)
      }
      isFetchNetworkError(uu) {
        return uu instanceof TypeError || uu instanceof HQ || uu instanceof DOMException && "AbortError" === uu.name
      }
      compress(uu) {
        return PE((function*() {
          const Ru = [],
            yu = new ReadableStream({
              start(Ru) {
                Ru.enqueue((new TextEncoder).encode(uu)), Ru.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: uu,
              value: Eu
            } = yield yu.read();
            if (uu) return new Blob(Ru);
            Ru.push(Eu)
          }
        }))()
      }
      extendFaroSession(uu, Ru, yu) {
        var Eu, Ku;
        const Qu = uu.sessionTracking;
        if (!(null === Qu || void 0 === Qu ? void 0 : Qu.enabled)) return void Ru("Session expired.");
        const {
          fetchUserSession: mu,
          storeUserSession: Ju
        } = ZR(Qu), Nu = null === (Eu = this.metas.value.session) || void 0 === Eu ? void 0 : Eu.id, Xu = null === (Ku = mu()) || void 0 === Ku ? void 0 : Ku.sessionId;
        yu && yu === Nu && yu === Xu ? (GR({
          fetchUserSession: mu,
          storeUserSession: Ju
        })({
          forceSessionExtend: !0
        }), Ru("Session expired; created new session.")) : Ru("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const bQ = () => {
      const uu = window.k6;
      return {
        k6: VR({
          isK6Browser: !0
        }, (null === uu || void 0 === uu ? void 0 : uu.testRunId) && {
          testRunId: null === uu || void 0 === uu ? void 0 : uu.testRunId
        })
      }
    };
    let CQ, kQ;

    function eQ() {
      let {
        generatePageId: uu,
        initialPageMeta: Ru
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const yu = location.href;
        return Iu(uu) && CQ !== yu && (CQ = yu, kQ = uu(location)), {
          page: VR(VR({
            url: yu
          }, kQ ? {
            id: kQ
          } : {}), Ru)
        }
      }
    }

    function AQ() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fR,
        Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const yu = iR;
      return Ru > 0 && (yu.error = Ru >= 1 ? function() {
        for (var Ru = arguments.length, Eu = new Array(Ru), Ku = 0; Ku < Ru; Ku++) Eu[Ku] = arguments[Ku];
        uu.error(`${yu.prefix}\n`, ...Eu)
      } : hR, yu.warn = Ru >= 2 ? function() {
        for (var Ru = arguments.length, Eu = new Array(Ru), Ku = 0; Ku < Ru; Ku++) Eu[Ku] = arguments[Ku];
        uu.warn(`${yu.prefix}\n`, ...Eu)
      } : hR, yu.info = Ru >= 3 ? function() {
        for (var Ru = arguments.length, Eu = new Array(Ru), Ku = 0; Ku < Ru; Ku++) Eu[Ku] = arguments[Ku];
        uu.info(`${yu.prefix}\n`, ...Eu)
      } : hR, yu.debug = Ru >= 4 ? function() {
        for (var Ru = arguments.length, Eu = new Array(Ru), Ku = 0; Ku < Ru; Ku++) Eu[Ku] = arguments[Ku];
        uu.debug(`${yu.prefix}\n`, ...Eu)
      } : hR), yu
    }
    const DQ = "faro",
      MQ = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      IQ = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function GQ(uu) {
      var Ru, yu, Ku, Qu, mu, Ju;
      const Nu = [],
        Vu = AQ(uu.unpatchedConsole, uu.internalLoggerLevel);
      uu.transports ? ((uu.url || uu.apiKey) && Vu.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Nu.push(...uu.transports)) : uu.url ? Nu.push(new dQ({
        url: uu.url,
        apiKey: uu.apiKey,
        requestCompression: uu.requestCompression
      })) : Vu.error('either "url" or "transports" must be defined');
      const {
        dedupe: ru = !0,
        eventDomain: Bu = Eu,
        globalObjectKey: xu = DQ,
        instrumentations: Su = wK(),
        internalLoggerLevel: pu = YR,
        isolate: Tu = !1,
        logArgsSerializer: Wu = Uy,
        metas: ju = nQ(uu),
        paused: Hu = !1,
        preventGlobalExposure: du = !1,
        unpatchedConsole: bu = fR,
        url: Cu,
        experimental: ku
      } = uu, eu = rQ(uu, IQ), Au = null !== (Ru = null === ku || void 0 === ku ? void 0 : ku.trackNavigation) && void 0 !== Ru && Ru, Du = {
        dataAttributeName: vE(null !== (yu = null === (Ku = uu.userActionsInstrumentation) || void 0 === Ku ? void 0 : Ku.dataAttributeName) && void 0 !== yu ? yu : oE),
        excludeItem: null === (Qu = uu.userActionsInstrumentation) || void 0 === Qu ? void 0 : Qu.excludeItem,
        initialActivityTimeout: aE(null === (mu = uu.userActionsInstrumentation) || void 0 === mu ? void 0 : mu.initialActivityTimeout, 100, (uu => Vu.warn(uu)))
      };
      return VR(VR({}, eu), {}, {
        batching: VR(VR({}, MQ), uu.batching),
        dedupe: ru,
        globalObjectKey: xu,
        instrumentations: UQ(Su, uu),
        internalLoggerLevel: pu,
        isolate: Tu,
        logArgsSerializer: Wu,
        metas: ju,
        parseStacktrace: py,
        paused: Hu,
        preventGlobalExposure: du,
        transports: Nu,
        unpatchedConsole: bu,
        eventDomain: Bu,
        ignoreUrls: [...null !== (Ju = uu.ignoreUrls) && void 0 !== Ju ? Ju : [], ...Cu ? [Cu] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: VR(VR(VR({}, Xu), uu.sessionTracking), sQ({
          trackGeolocation: uu.trackGeolocation,
          sessionTracking: uu.sessionTracking
        })),
        userActionsInstrumentation: Du,
        experimental: {
          trackNavigation: Au
        }
      })
    }

    function UQ(uu, Ru) {
      let {
        experimental: yu
      } = Ru;
      var Eu;
      const Ku = null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.trackNavigation) && void 0 !== Eu && Eu;
      return uu.filter((uu => !("@grafana/faro-web-sdk:instrumentation-navigation" === uu.name && !Ku)))
    }

    function nQ(uu) {
      var Ru, yu, Eu;
      const {
        page: Ku,
        generatePageId: Qu
      } = null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.pageTracking) && void 0 !== Ru ? Ru : {}, mu = [YK, oK, eQ({
        generatePageId: Qu,
        initialPageMeta: Ku
      }), ...null !== (yu = uu.metas) && void 0 !== yu ? yu : [], OK];
      return Mu(null === (Eu = window) || void 0 === Eu ? void 0 : Eu.k6) ? [...mu, bQ] : mu
    }

    function sQ(uu) {
      let {
        trackGeolocation: Ru,
        sessionTracking: yu
      } = uu;
      var Eu;
      const Ku = {};
      return Au(Ru) && (Ku.geoLocationTrackingEnabled = Ru), Yu(Ku) ? {} : {
        session: VR(VR({}, null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.session) && void 0 !== Eu ? Eu : {}), {}, {
          overrides: Ku
        })
      }
    }
    const tQ = new WeakSet;

    function lQ(uu) {
      return tQ.add(uu), uu
    }

    function gQ(uu, Ru) {
      if (uu.capture) return lQ(uu.capture(Ru));
      const yu = lQ(uu.value);
      return null === Ru || void 0 === Ru || Ru(), yu
    }

    function cQ(uu) {
      const Ru = `__faroBundleId_${uu}`,
        yu = null === Vu || void 0 === Vu ? void 0 : Vu[Ru];
      if ("string" === typeof yu && "" !== yu) return yu;
      const Eu = "undefined" !== typeof window ? window[Ru] : void 0;
      return "string" === typeof Eu && "" !== Eu ? Eu : void 0
    }

    function LQ(uu) {
      var Ru, yu;
      const Eu = uu.config.app.name,
        Ku = Eu ? function(uu) {
          return null === Vu || void 0 === Vu ? void 0 : Vu[`__faroGitHash_${uu}`]
        }(Eu) : void 0,
        Qu = {
          sdk: {
            version: yy,
            name: "faro"
          },
          app: aR({
            bundleId: Eu && cQ(Eu)
          }, void 0 !== Ku ? {
            gitHash: Ku
          } : {})
        },
        mu = null === (Ru = uu.config.sessionTracking) || void 0 === Ru ? void 0 : Ru.session;
      mu && uu.api.setSession(mu), uu.config.app && (Qu.app = aR(aR({}, uu.config.app), Qu.app)), uu.config.user && (Qu.user = uu.config.user), uu.config.view && (Qu.view = uu.config.view), uu.metas.add(Qu, ...null !== (yu = uu.config.metas) && void 0 !== yu ? yu : [])
    }
    var zQ = class {
      constructor(uu, Ru) {
        var yu, Eu;
        this.signalBuffer = [], this.itemLimit = null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.itemLimit) && void 0 !== yu ? yu : 50, this.sendTimeout = null !== (Eu = null === Ru || void 0 === Ru ? void 0 : Ru.sendTimeout) && void 0 !== Eu ? Eu : 250, this.paused = (null === Ru || void 0 === Ru ? void 0 : Ru.paused) || !1, this.sendFn = uu, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const Ru = new Map;
        return uu.forEach((uu => {
          const yu = JSON.stringify(uu.meta);
          let Eu = Ru.get(yu);
          Eu = void 0 === Eu ? [uu] : [...Eu, uu], Ru.set(yu, Eu)
        })), Array.from(Ru.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const uu = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(uu).forEach(this.sendFn)
        } catch (Ru) {
          throw this.signalBuffer = [...uu, ...this.signalBuffer], this.trimBufferToLimit(), Ru
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function FQ(uu, Ru, yu, Eu) {
      var Ku;
      Ru.debug("Initializing transports");
      const Qu = [];
      let mu = [];
      const Ju = uu => {
        let Ru = uu;
        for (const Eu of mu) {
          const uu = Ru.map(Eu).filter(Boolean);
          if (0 === uu.length) return [];
          Ru = wQ(uu, yu)
        }
        return Ru
      };
      let Nu;
      (null === (Ku = yu.batching) || void 0 === Ku ? void 0 : Ku.enabled) && (Nu = new zQ((uu => {
        const yu = Ju(uu);
        if (0 !== yu.length)
          for (const Eu of Qu) Ru.debug(`Transporting item using ${Eu.name}\n`, yu), Eu.isBatched() && Eu.send(yu)
      }), {
        sendTimeout: yu.batching.sendTimeout,
        itemLimit: yu.batching.itemLimit,
        paused: yu.paused
      }));
      return {
        add: function() {
          Ru.debug("Adding transports");
          for (var Ku = arguments.length, mu = new Array(Ku), Ju = 0; Ju < Ku; Ju++) mu[Ju] = arguments[Ju];
          mu.forEach((Ku => {
            Ru.debug(`Adding "${Ku.name}" transport`), Qu.some((uu => uu === Ku)) ? Ru.warn(`Transport ${Ku.name} is already added`) : (Ku.unpatchedConsole = uu, Ku.internalLogger = Ru, Ku.config = yu, Ku.metas = Eu, Qu.push(Ku))
          }))
        },
        addBeforeSendHooks: function() {
          Ru.debug("Adding beforeSendHooks\n", mu);
          for (var uu = arguments.length, yu = new Array(uu), Eu = 0; Eu < uu; Eu++) yu[Eu] = arguments[Eu];
          yu.forEach((uu => {
            uu && mu.push(uu)
          }))
        },
        getBeforeSendHooks: () => [...mu],
        execute: uu => {
          var Ku;
          if (!yu.paused && FR(Eu).shouldCapture()) {
            if (ru = uu.meta, !tQ.has(ru)) {
              var mu, Xu, Vu;
              const Ru = null === (mu = Eu.value.session) || void 0 === mu ? void 0 : mu.id,
                Ku = gQ(Eu);
              if (yu.paused) return;
              const Qu = aR({}, uu.meta);
              (null === (Xu = Qu.session) || void 0 === Xu ? void 0 : Xu.id) === Ru && (null === (Vu = Ku.session) || void 0 === Vu ? void 0 : Vu.id) !== Ru && (void 0 === Ku.session ? delete Qu.session : Qu.session = Ku.session), uu = aR(aR({}, uu), {}, {
                meta: lQ(Qu)
              })
            }
            var ru;
            (null === (Ku = yu.batching) || void 0 === Ku ? void 0 : Ku.enabled) && (null === Nu || void 0 === Nu || Nu.addItem(uu)), (uu => {
              var Eu;
              if ((null === (Eu = yu.batching) || void 0 === Eu ? void 0 : Eu.enabled) && Qu.every((uu => uu.isBatched()))) return;
              const [Ku] = Ju([uu]);
              if (void 0 !== Ku)
                for (const Ju of Qu) {
                  var mu;
                  Ru.debug(`Transporting item using ${Ju.name}\n`, Ku), Ju.isBatched() ? (null === (mu = yu.batching) || void 0 === mu ? void 0 : mu.enabled) || Ju.send([Ku]) : Ju.send(Ku)
                }
            })(uu)
          }
        },
        isPaused: () => yu.paused,
        pause: () => {
          Ru.debug("Pausing transports"), null === Nu || void 0 === Nu || Nu.pause(), yu.paused = !0
        },
        remove: function() {
          Ru.debug("Removing transports");
          for (var uu = arguments.length, yu = new Array(uu), Eu = 0; Eu < uu; Eu++) yu[Eu] = arguments[Eu];
          yu.forEach((uu => {
            Ru.debug(`Removing "${uu.name}" transport`);
            const yu = Qu.indexOf(uu); - 1 !== yu ? Qu.splice(yu, 1) : Ru.warn(`Transport "${uu.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var uu = arguments.length, yu = new Array(uu), Eu = 0; Eu < uu; Eu++) yu[Eu] = arguments[Eu];
          Ru.debug("Removing beforeSendHooks"), mu = mu.filter((uu => !yu.includes(uu)))
        },
        get transports() {
          return [...Qu]
        },
        unpause: () => {
          Ru.debug("Unpausing transports"), null === Nu || void 0 === Nu || Nu.start(), yu.paused = !1
        }
      }
    }

    function wQ(uu, Ru) {
      if (Ru.preserveOriginalError)
        for (const yu of uu) "exception" === yu.type && delete yu.payload.originalError;
      return uu
    }
    let ZQ = fR;

    function hQ(uu) {
      var Ru;
      return ZQ = null !== (Ru = uu.unpatchedConsole) && void 0 !== Ru ? Ru : ZQ, ZQ
    }
    let PQ, iQ = iR;

    function YQ(uu, Ru) {
      return iQ = AQ(uu, Ru.internalLoggerLevel), iQ
    }

    function oQ(uu) {
      let {
        internalLogger: Ru,
        config: yu,
        metas: Eu,
        transports: Ku,
        tracesApi: Qu,
        userActionsApi: mu
      } = uu;
      var Ju;
      Ru.debug("Initializing exceptions API");
      let Nu = null;
      PQ = null !== (Ju = yu.parseStacktrace) && void 0 !== Ju ? Ju : PQ;
      const Xu = uu => {
          Ru.debug("Changing stacktrace parser"), PQ = null !== uu && void 0 !== uu ? uu : PQ
        },
        {
          ignoreErrors: Vu = [],
          preserveOriginalError: ru
        } = yu;
      return Xu(yu.parseStacktrace), {
        changeStacktraceParser: Xu,
        getStacktraceParser: () => PQ,
        pushError: function(uu) {
          let {
            skipDedupe: Ju,
            stackFrames: Xu,
            type: Bu,
            context: xu,
            spanContext: Su,
            timestampOverwriteMs: pu,
            originalError: Tu,
            fingerprint: Wu,
            fatal: ju
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(uu, Ru) {
              const {
                message: yu,
                name: Eu,
                stack: Ku
              } = Ru;
              return Qu = uu, mu = yu + " " + Eu + " " + Ku, Qu.some((uu => Cu(uu) ? mu.includes(uu) : !!mu.match(uu)));
              var Qu, mu
            }(Vu, null !== Tu && void 0 !== Tu ? Tu : uu)) try {
            var Hu, du;
            if (!FR(Eu).shouldCapture()) return;
            const Vu = gR(aR(aR({}, function(uu) {
                let Ru = uu.cause;
                cu(Ru) ? Ru = uu.cause.toString() : null !== Ru && (Mu(uu.cause) || Gu(uu.cause)) ? Ru = lR(uu.cause) : null != Ru && (Ru = uu.cause.toString());
                return null == Ru ? {} : {
                  cause: Ru
                }
              }(null !== Tu && void 0 !== Tu ? Tu : uu)), null !== xu && void 0 !== xu ? xu : {})),
              Cu = aR(aR(aR(aR({
                type: Bu || uu.name || "Error",
                value: uu.message,
                timestamp: pu ? pR(pu) : SR(),
                trace: Su ? {
                  trace_id: Su.traceId,
                  span_id: Su.spanId
                } : Qu.getTraceContext()
              }, Yu(Vu) ? {} : {
                context: Vu
              }), ru ? {
                originalError: Tu
              } : {}), Wu ? {
                fingerprint: Wu
              } : {}), void 0 !== ju ? {
                fatal: ju
              } : {});
            Xu = null !== (Hu = Xu) && void 0 !== Hu ? Hu : uu.stack ? null === PQ || void 0 === PQ ? void 0 : PQ(uu).frames : void 0, (null === Xu || void 0 === Xu ? void 0 : Xu.length) && (Cu.stacktrace = {
              frames: Xu
            });
            const ku = {
              type: Cu.type,
              value: Cu.value,
              stacktrace: Cu.stacktrace,
              context: Cu.context,
              fingerprint: Cu.fingerprint,
              fatal: null !== (du = Cu.fatal) && void 0 !== du && du
            };
            if (!Ju && yu.dedupe && !bu(Nu) && jR(ku, Nu)) return void Ru.debug("Skipping error push because it is the same as the last one\n", Cu);
            const eu = Nu,
              Au = gQ(Eu);
            if (Nu !== eu && !Ju && yu.dedupe && jR(ku, Nu)) return;
            Nu = ku;
            const Du = {
              meta: Au,
              payload: Cu,
              type: "exception"
            };
            Ru.debug("Pushing exception\n", Du), CK(mu.getActiveUserAction(), Du) || Ku.execute(Du)
          } catch (ku) {
            Ru.error("Error pushing event", ku)
          }
        }
      }
    }

    function qQ(uu, Ru, yu, Eu, Ku) {
      Ru.debug("Initializing API");
      let Qu = null;
      const mu = function(uu) {
          let {
            transports: Ru,
            internalLogger: yu,
            config: Eu,
            pushEvent: Ku
          } = uu;
          var Qu;
          const mu = null === (Qu = Eu.userActionsInstrumentation) || void 0 === Qu ? void 0 : Qu.excludeItem;
          let Ju;
          const Nu = () => Ju;
          return {
            startUserAction: (uu, Eu, Qu) => {
              if (void 0 === Nu()) {
                const yu = new dK({
                  name: uu,
                  transports: Ru,
                  attributes: Eu,
                  trigger: (null === Qu || void 0 === Qu ? void 0 : Qu.triggerName) || "faroApiCall",
                  importance: (null === Qu || void 0 === Qu ? void 0 : Qu.importance) || jK.Normal,
                  trackUserActionsExcludeItem: mu,
                  pushEvent: Ku
                });
                return yu.filter((uu => [3, 2].includes(uu))).first().subscribe((() => {
                  Ju = void 0
                })), bK.notify({
                  type: WK,
                  userAction: yu,
                  initialActivityTimeout: null === Qu || void 0 === Qu ? void 0 : Qu.initialActivityTimeout
                }), Ju = yu, Ju
              }
              yu.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Nu
          }
        }({
          transports: Ku,
          config: yu,
          internalLogger: Ru,
          pushEvent: (uu, yu, Eu, Ku) => {
            Qu ? Qu(uu, yu, Eu, Ku) : Ru.warn("pushEventImpl is not initialized. Event dropped:", {
              name: uu,
              attributes: yu,
              domain: Eu,
              options: Ku
            })
          }
        }),
        Ju = function(uu, Ru, yu, Eu, Ku) {
          let Qu;
          return Ru.debug("Initializing traces API"), {
            getOTEL: () => Qu,
            getTraceContext: () => {
              const uu = null === Qu || void 0 === Qu ? void 0 : Qu.trace.getSpanContext(Qu.context.active());
              return uu ? {
                trace_id: uu.traceId,
                span_id: uu.spanId
              } : void 0
            },
            initOTEL: (uu, yu) => {
              Ru.debug("Initializing OpenTelemetry"), Qu = {
                trace: uu,
                context: yu
              }
            },
            isOTELInitialized: () => !!Qu,
            pushTraces: uu => {
              try {
                if (!FR(Eu).shouldCapture()) return;
                const yu = {
                  type: "trace",
                  payload: uu,
                  meta: gQ(Eu)
                };
                Ru.debug("Pushing trace\n", yu), Ku.execute(yu)
              } catch (yu) {
                Ru.error("Error pushing trace\n", yu)
              }
            }
          }
        }(0, Ru, 0, Eu, Ku),
        Nu = {
          unpatchedConsole: uu,
          internalLogger: Ru,
          userActionsApi: mu,
          config: yu,
          metas: Eu,
          transports: Ku,
          tracesApi: Ju
        },
        Xu = function(uu) {
          let {
            internalLogger: Ru,
            config: yu,
            metas: Eu,
            transports: Ku,
            tracesApi: Qu,
            userActionsApi: mu
          } = uu, Ju = null;
          return {
            pushEvent: function(uu, Nu, Xu) {
              let {
                skipDedupe: Vu,
                spanContext: ru,
                timestampOverwriteMs: Bu,
                customPayloadTransformer: xu = uu => uu
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!FR(Eu).shouldCapture()) return;
                const Su = gR(Nu),
                  pu = xu({
                    name: uu,
                    domain: null !== Xu && void 0 !== Xu ? Xu : yu.eventDomain,
                    attributes: Yu(Su) ? void 0 : Su,
                    timestamp: Bu ? pR(Bu) : SR(),
                    trace: ru ? {
                      trace_id: ru.traceId,
                      span_id: ru.spanId
                    } : Qu.getTraceContext()
                  }),
                  Tu = {
                    name: pu.name,
                    attributes: pu.attributes,
                    domain: pu.domain
                  };
                if (!Vu && yu.dedupe && !bu(Ju) && jR(Tu, Ju)) return void Ru.debug("Skipping event push because it is the same as the last one\n", pu);
                const Wu = Ju,
                  ju = gQ(Eu);
                if (Ju !== Wu && !Vu && yu.dedupe && jR(Tu, Ju)) return;
                Ju = Tu;
                const Hu = {
                  meta: ju,
                  payload: pu,
                  type: "event"
                };
                Ru.debug("Pushing event\n", Hu), CK(mu.getActiveUserAction(), Hu) || Ku.execute(Hu)
              } catch (Su) {
                Ru.error("Error pushing event", Su)
              }
            }
          }
        }(Nu);
      return Qu = Xu.pushEvent, aR(aR(aR(aR(aR(aR(aR({}, Ju), oQ(Nu)), function(uu) {
        let Ru, yu, Eu, Ku, {
          internalLogger: Qu,
          metas: mu
        } = uu;
        Qu.debug("Initializing meta API");
        const Ju = uu => {
            yu && mu.remove(yu), yu = {
              user: uu
            }, mu.add(yu)
          },
          Nu = (uu, yu) => {
            var Eu;
            const Ku = null === yu || void 0 === yu ? void 0 : yu.overrides,
              Qu = Ku ? {
                overrides: aR(aR({}, null === Ru || void 0 === Ru || null === (Eu = Ru.session) || void 0 === Eu ? void 0 : Eu.overrides), Ku)
              } : {};
            Ru && mu.remove(Ru), Ru = {
              session: aR(aR({}, Yu(uu) ? void 0 : uu), Qu)
            }, mu.add(Ru)
          },
          Xu = (uu, Ru) => {
            FR(mu).notifySessionUpdate({
              type: "replace",
              session: uu,
              overrides: null === Ru || void 0 === Ru ? void 0 : Ru.overrides
            }), Nu(uu, Ru)
          },
          Vu = () => mu.value.session,
          ru = () => mu.value.page;
        return {
          setUser: Ju,
          resetUser: Ju,
          setSession: Xu,
          resetSession: Xu,
          getSession: Vu,
          setView: (uu, Ru) => {
            var yu;
            if ((null === Ru || void 0 === Ru ? void 0 : Ru.overrides) && (FR(mu).notifySessionUpdate({
                type: "overrides",
                overrides: Ru.overrides
              }), Nu(Vu(), {
                overrides: Ru.overrides
              })), (null === Eu || void 0 === Eu || null === (yu = Eu.view) || void 0 === yu ? void 0 : yu.name) === (null === uu || void 0 === uu ? void 0 : uu.name)) return;
            const Ku = Eu;
            Eu = {
              view: uu
            }, mu.add(Eu), Ku && mu.remove(Ku)
          },
          getView: () => mu.value.view,
          setPage: uu => {
            var Ru;
            const yu = Cu(uu) ? aR(aR({}, null !== (Ru = null === Ku || void 0 === Ku ? void 0 : Ku.page) && void 0 !== Ru ? Ru : ru()), {}, {
              id: uu
            }) : uu;
            Ku && mu.remove(Ku), Ku = {
              page: yu
            }, mu.add(Ku)
          },
          getPage: ru
        }
      }(Nu)), function(uu) {
        let {
          internalLogger: Ru,
          config: yu,
          metas: Eu,
          transports: Ku,
          tracesApi: Qu,
          userActionsApi: mu
        } = uu;
        var Ju;
        Ru.debug("Initializing logs API");
        let Nu = null;
        const Xu = null !== (Ju = yu.logArgsSerializer) && void 0 !== Ju ? Ju : Uy;
        return {
          pushLog: function(uu) {
            let {
              context: Ju,
              level: Vu,
              skipDedupe: ru,
              spanContext: Bu,
              timestampOverwriteMs: xu
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!FR(Eu).shouldCapture()) return;
              const Su = gR(Ju),
                pu = {
                  message: Xu(uu),
                  level: null !== Vu && void 0 !== Vu ? Vu : "log",
                  context: Yu(Su) ? void 0 : Su,
                  timestamp: xu ? pR(xu) : SR(),
                  trace: Bu ? {
                    trace_id: Bu.traceId,
                    span_id: Bu.spanId
                  } : Qu.getTraceContext()
                },
                Tu = {
                  message: pu.message,
                  level: pu.level,
                  context: pu.context
                };
              if (!ru && yu.dedupe && !bu(Nu) && jR(Tu, Nu)) return void Ru.debug("Skipping log push because it is the same as the last one\n", pu);
              const Wu = Nu,
                ju = gQ(Eu);
              if (Nu !== Wu && !ru && yu.dedupe && jR(Tu, Nu)) return;
              Nu = Tu;
              const Hu = {
                type: "log",
                payload: pu,
                meta: ju
              };
              Ru.debug("Pushing log\n", Hu), CK(mu.getActiveUserAction(), Hu) || Ku.execute(Hu)
            } catch (Su) {
              Ru.error("Error pushing log\n", Su)
            }
          }
        }
      }(Nu)), function(uu) {
        let {
          internalLogger: Ru,
          config: yu,
          metas: Eu,
          transports: Ku,
          tracesApi: Qu,
          userActionsApi: mu
        } = uu;
        Ru.debug("Initializing measurements API");
        let Ju = null;
        return {
          pushMeasurement: function(uu) {
            let {
              skipDedupe: Nu,
              context: Xu,
              spanContext: Vu,
              timestampOverwriteMs: ru
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!FR(Eu).shouldCapture()) return;
              const Bu = gR(Xu),
                xu = aR(aR({}, uu), {}, {
                  trace: Vu ? {
                    trace_id: Vu.traceId,
                    span_id: Vu.spanId
                  } : Qu.getTraceContext(),
                  timestamp: ru ? pR(ru) : SR(),
                  context: Yu(Bu) ? void 0 : Bu
                }),
                Su = {
                  type: xu.type,
                  values: xu.values,
                  context: xu.context
                };
              if (!Nu && yu.dedupe && !bu(Ju) && jR(Su, Ju)) return void Ru.debug("Skipping measurement push because it is the same as the last one\n", xu);
              const pu = Ju,
                Tu = gQ(Eu);
              if (Ju !== pu && !Nu && yu.dedupe && jR(Su, Ju)) return;
              Ju = Su;
              const Wu = {
                type: "measurement",
                payload: xu,
                meta: Tu
              };
              Ru.debug("Pushing measurement\n", Wu), CK(mu.getActiveUserAction(), Wu) || Ku.execute(Wu)
            } catch (Bu) {
              Ru.error("Error pushing measurement\n", Bu)
            }
          }
        }
      }(Nu)), Xu), mu)
    }

    function OQ(uu) {
      const Ru = hQ(uu),
        yu = YQ(Ru, uu);
      if (Su() && !uu.isolate) return void yu.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      yu.debug("Initializing");
      const Eu = function(uu, Ru) {
          let yu, Eu = [],
            Ku = [],
            Qu = [],
            mu = 0,
            Ju = 0;
          const Nu = () => Eu.reduce(((uu, Ru) => Object.assign(uu, Iu(Ru) ? Ru() : Ru)), {}),
            Xu = () => {
              if (Ku.length) {
                const uu = Nu();
                Ku.forEach((Ru => Ru(uu)))
              }
            };
          return {
            add: function() {
              for (var uu = arguments.length, yu = new Array(uu), Ku = 0; Ku < uu; Ku++) yu[Ku] = arguments[Ku];
              Ru.debug("Adding metas\n", yu), Eu.push(...yu), Xu()
            },
            remove: function() {
              for (var uu = arguments.length, yu = new Array(uu), Ku = 0; Ku < uu; Ku++) yu[Ku] = arguments[Ku];
              Ru.debug("Removing metas\n", yu), Eu = Eu.filter((uu => !yu.includes(uu))), Xu()
            },
            addListener: uu => {
              Ru.debug("Adding metas listener\n", uu), Ku.push(uu)
            },
            removeListener: uu => {
              Ru.debug("Removing metas listener\n", uu), Ku = Ku.filter((Ru => Ru !== uu))
            },
            capture: uu => {
              var Ru;
              const Eu = void 0 !== yu,
                Ku = null !== (Ru = yu) && void 0 !== Ru ? Ru : Qu;
              Eu || (yu = Ku, mu = 0, Ju = Ku.length);
              try {
                for (; mu < Ju;) {
                  const uu = Ku[mu++];
                  null === uu || void 0 === uu || uu()
                }
                const Ru = lQ(Nu());
                return null === uu || void 0 === uu || uu(), Ru
              } finally {
                Eu || (yu = void 0)
              }
            },
            addCaptureListener: uu => {
              Qu.push(uu)
            },
            removeCaptureListener: uu => {
              Qu = Qu.filter((Ru => Ru !== uu))
            },
            get value() {
              return Nu()
            }
          }
        }(0, yu),
        Ku = FQ(Ru, yu, uu, Eu),
        Qu = qQ(Ru, yu, uu, Eu, Ku),
        mu = function(uu, Ru, yu, Eu, Ku, Qu) {
          Ru.debug("Initializing instrumentations");
          const mu = [];
          return {
            add: function() {
              Ru.debug("Adding instrumentations");
              for (var Ju = arguments.length, Nu = new Array(Ju), Xu = 0; Xu < Ju; Xu++) Nu[Xu] = arguments[Xu];
              Nu.forEach((Ju => {
                Ru.debug(`Adding "${Ju.name}" instrumentation`), mu.some((uu => uu.name === Ju.name)) ? Ru.warn(`Instrumentation ${Ju.name} is already added`) : (Ju.unpatchedConsole = uu, Ju.internalLogger = Ru, Ju.config = yu, Ju.metas = Eu, Ju.transports = Ku, Ju.api = Qu, mu.push(Ju), Ju.initialize())
              }))
            },
            get instrumentations() {
              return [...mu]
            },
            remove: function() {
              Ru.debug("Removing instrumentations");
              for (var uu = arguments.length, yu = new Array(uu), Eu = 0; Eu < uu; Eu++) yu[Eu] = arguments[Eu];
              yu.forEach((uu => {
                var yu, Eu;
                Ru.debug(`Removing "${uu.name}" instrumentation`);
                const Ku = mu.reduce(((Ru, yu, Eu) => null === Ru && yu.name === uu.name ? Eu : null), null);
                null !== Ku ? (null === (yu = (Eu = mu[Ku]).destroy) || void 0 === yu || yu.call(Eu), mu.splice(Ku, 1)) : Ru.warn(`Instrumentation "${uu.name}" is not added`)
              }))
            }
          }
        }(Ru, yu, uu, Eu, Ku, Qu),
        Ju = Tu(Ru, yu, uu, Eu, Ku, Qu, mu);
      return LQ(Ju),
        function(uu) {
          uu.transports.add(...uu.config.transports), uu.transports.addBeforeSendHooks(uu.config.beforeSend)
        }(Ju),
        function(uu) {
          uu.instrumentations.add(...uu.config.instrumentations)
        }(Ju), Ju
    }

    function vQ(uu) {
      const Ru = GQ(uu);
      if (Ru) return OQ(Ru)
    }
  },
  6480: function(uu, Ru, yu) {
    var Eu;
    ! function(Ku, Qu) {
      var mu = "function",
        Ju = "undefined",
        Nu = "object",
        Xu = "string",
        Vu = "major",
        ru = "model",
        Bu = "name",
        xu = "type",
        Su = "vendor",
        pu = "version",
        Tu = "architecture",
        Wu = "console",
        ju = "mobile",
        Hu = "tablet",
        du = "smarttv",
        bu = "wearable",
        Cu = "embedded",
        ku = "Amazon",
        eu = "Apple",
        Au = "ASUS",
        Du = "BlackBerry",
        Mu = "Browser",
        Iu = "Chrome",
        Gu = "Firefox",
        Uu = "Google",
        nu = "Honor",
        su = "Huawei",
        tu = "LG",
        lu = "Microsoft",
        gu = "Motorola",
        cu = "Nvidia",
        Lu = "OnePlus",
        zu = "Opera",
        Fu = "OPPO",
        wu = "Samsung",
        Zu = "Sharp",
        hu = "Sony",
        Pu = "Xiaomi",
        iu = "Zebra",
        Yu = "Facebook",
        ou = "Chromium OS",
        qu = "Mac OS",
        Ou = " Browser",
        vu = function(uu) {
          for (var Ru = {}, yu = 0; yu < uu.length; yu++) Ru[uu[yu].toUpperCase()] = uu[yu];
          return Ru
        },
        au = function(uu, Ru) {
          return typeof uu === Xu && -1 !== fu(Ru).indexOf(fu(uu))
        },
        fu = function(uu) {
          return uu.toLowerCase()
        },
        uR = function(uu, Ru) {
          if (typeof uu === Xu) return uu = uu.replace(/^\s\s*/, ""), typeof Ru === Ju ? uu : uu.substring(0, 500)
        },
        RR = function(uu, Ru) {
          for (var yu, Eu, Ku, Ju, Xu, Vu, ru = 0; ru < Ru.length && !Xu;) {
            var Bu = Ru[ru],
              xu = Ru[ru + 1];
            for (yu = Eu = 0; yu < Bu.length && !Xu && Bu[yu];)
              if (Xu = Bu[yu++].exec(uu))
                for (Ku = 0; Ku < xu.length; Ku++) Vu = Xu[++Eu], typeof(Ju = xu[Ku]) === Nu && Ju.length > 0 ? 2 === Ju.length ? typeof Ju[1] == mu ? this[Ju[0]] = Ju[1].call(this, Vu) : this[Ju[0]] = Ju[1] : 3 === Ju.length ? typeof Ju[1] !== mu || Ju[1].exec && Ju[1].test ? this[Ju[0]] = Vu ? Vu.replace(Ju[1], Ju[2]) : Qu : this[Ju[0]] = Vu ? Ju[1].call(this, Vu, Ju[2]) : Qu : 4 === Ju.length && (this[Ju[0]] = Vu ? Ju[3].call(this, Vu.replace(Ju[1], Ju[2])) : Qu) : this[Ju] = Vu || Qu;
            ru += 2
          }
        },
        yR = function(uu, Ru) {
          for (var yu in Ru)
            if (typeof Ru[yu] === Nu && Ru[yu].length > 0) {
              for (var Eu = 0; Eu < Ru[yu].length; Eu++)
                if (au(Ru[yu][Eu], uu)) return "?" === yu ? Qu : yu
            } else if (au(Ru[yu], uu)) return "?" === yu ? Qu : yu;
          return Ru.hasOwnProperty("*") ? Ru["*"] : uu
        },
        ER = {
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
        KR = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [pu, [Bu, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [pu, [Bu, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Bu, pu],
            [/opios[\/ ]+([\w\.]+)/i],
            [pu, [Bu, zu + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [pu, [Bu, zu + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [pu, [Bu, zu]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [pu, [Bu, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [pu, [Bu, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Bu, pu],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [pu, [Bu, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [pu, [Bu, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [pu, [Bu, "UC" + Mu]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [pu, [Bu, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [pu, [Bu, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [pu, [Bu, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [pu, [Bu, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [pu, [Bu, "Smart Lenovo " + Mu]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Bu, /(.+)/, "$1 Secure " + Mu], pu
            ],
            [/\bfocus\/([\w\.]+)/i],
            [pu, [Bu, Gu + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [pu, [Bu, zu + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [pu, [Bu, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [pu, [Bu, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [pu, [Bu, zu + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [pu, [Bu, "MIUI" + Ou]],
            [/fxios\/([\w\.-]+)/i],
            [pu, [Bu, Gu]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [pu, [Bu, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Bu, /(.+)/, "$1Browser"], pu
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Bu, /(.+)/, "$1" + Ou], pu
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [pu, [Bu, wu + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [pu, [Bu, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Bu, "Sogou Mobile"], pu
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Bu, pu],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Bu],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [pu, Bu],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Bu, Yu], pu
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Bu, pu],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [pu, [Bu, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [pu, [Bu, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [pu, [Bu, Iu + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Bu, Iu + " WebView"], pu
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [pu, [Bu, "Android " + Mu]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Bu, pu],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [pu, [Bu, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [pu, Bu],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Bu, [pu, yR, {
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
            [Bu, pu],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Bu, "Netscape"], pu
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Bu, pu],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [pu, [Bu, Gu + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Bu, [pu, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Bu, [pu, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Tu, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Tu, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Tu, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Tu, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Tu, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Tu, /ower/, "", fu]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Tu, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Tu, fu]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [ru, [Su, wu],
              [xu, Hu]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [ru, [Su, wu],
              [xu, ju]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [ru, [Su, eu],
              [xu, ju]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [ru, [Su, eu],
              [xu, Hu]
            ],
            [/(macintosh);/i],
            [ru, [Su, eu]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [ru, [Su, Zu],
              [xu, ju]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [ru, [Su, nu],
              [xu, Hu]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [ru, [Su, nu],
              [xu, ju]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [ru, [Su, su],
              [xu, Hu]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [ru, [Su, su],
              [xu, ju]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [ru, /_/g, " "],
              [Su, Pu],
              [xu, Hu]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [ru, /_/g, " "],
              [Su, Pu],
              [xu, ju]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [ru, [Su, Fu],
              [xu, ju]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [ru, [Su, yR, {
                OnePlus: ["304", "403", "203"],
                "*": Fu
              }],
              [xu, Hu]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [ru, [Su, "Vivo"],
              [xu, ju]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [ru, [Su, "Realme"],
              [xu, ju]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [ru, [Su, gu],
              [xu, ju]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [ru, [Su, gu],
              [xu, Hu]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [ru, [Su, tu],
              [xu, Hu]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [ru, [Su, tu],
              [xu, ju]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [ru, [Su, "Lenovo"],
              [xu, Hu]
            ],
            [/(nokia) (t[12][01])/i],
            [Su, ru, [xu, Hu]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [ru, /_/g, " "],
              [xu, ju],
              [Su, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [ru, [Su, Uu],
              [xu, Hu]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [ru, [Su, Uu],
              [xu, ju]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [ru, [Su, hu],
              [xu, ju]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [ru, "Xperia Tablet"],
              [Su, hu],
              [xu, Hu]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [ru, [Su, Lu],
              [xu, ju]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [ru, [Su, ku],
              [xu, Hu]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [ru, /(.+)/g, "Fire Phone $1"],
              [Su, ku],
              [xu, ju]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [ru, Su, [xu, Hu]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [ru, [Su, Du],
              [xu, ju]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [ru, [Su, Au],
              [xu, Hu]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [ru, [Su, Au],
              [xu, ju]
            ],
            [/(nexus 9)/i],
            [ru, [Su, "HTC"],
              [xu, Hu]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Su, [ru, /_/g, " "],
              [xu, ju]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [ru, [Su, "TCL"],
              [xu, Hu]
            ],
            [/(itel) ((\w+))/i],
            [
              [Su, fu], ru, [xu, yR, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [ru, [Su, "Acer"],
              [xu, Hu]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [ru, [Su, "Meizu"],
              [xu, ju]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [ru, [Su, "Ulefone"],
              [xu, ju]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [ru, [Su, "Energizer"],
              [xu, ju]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [ru, [Su, "Cat"],
              [xu, ju]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [ru, [Su, "Smartfren"],
              [xu, ju]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [ru, [Su, "Nothing"],
              [xu, ju]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [ru, [Su, "Archos"],
              [xu, Hu]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [ru, [Su, "Archos"],
              [xu, ju]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Su, ru, [xu, Hu]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Su, ru, [xu, ju]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Su, ru, [xu, Hu]],
            [/(surface duo)/i],
            [ru, [Su, lu],
              [xu, Hu]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [ru, [Su, "Fairphone"],
              [xu, ju]
            ],
            [/(u304aa)/i],
            [ru, [Su, "AT&T"],
              [xu, ju]
            ],
            [/\bsie-(\w*)/i],
            [ru, [Su, "Siemens"],
              [xu, ju]
            ],
            [/\b(rct\w+) b/i],
            [ru, [Su, "RCA"],
              [xu, Hu]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [ru, [Su, "Dell"],
              [xu, Hu]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [ru, [Su, "Verizon"],
              [xu, Hu]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [ru, [Su, "Barnes & Noble"],
              [xu, Hu]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [ru, [Su, "NuVision"],
              [xu, Hu]
            ],
            [/\b(k88) b/i],
            [ru, [Su, "ZTE"],
              [xu, Hu]
            ],
            [/\b(nx\d{3}j) b/i],
            [ru, [Su, "ZTE"],
              [xu, ju]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [ru, [Su, "Swiss"],
              [xu, ju]
            ],
            [/\b(zur\d{3}) b/i],
            [ru, [Su, "Swiss"],
              [xu, Hu]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [ru, [Su, "Zeki"],
              [xu, Hu]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Su, "Dragon Touch"], ru, [xu, Hu]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [ru, [Su, "Insignia"],
              [xu, Hu]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [ru, [Su, "NextBook"],
              [xu, Hu]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Su, "Voice"], ru, [xu, ju]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Su, "LvTel"], ru, [xu, ju]
            ],
            [/\b(ph-1) /i],
            [ru, [Su, "Essential"],
              [xu, ju]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [ru, [Su, "Envizen"],
              [xu, Hu]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [ru, [Su, "MachSpeed"],
              [xu, Hu]
            ],
            [/\btu_(1491) b/i],
            [ru, [Su, "Rotor"],
              [xu, Hu]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [ru, [Su, cu],
              [xu, Hu]
            ],
            [/(sprint) (\w+)/i],
            [Su, ru, [xu, ju]],
            [/(kin\.[onetw]{3})/i],
            [
              [ru, /\./g, " "],
              [Su, lu],
              [xu, ju]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [ru, [Su, iu],
              [xu, Hu]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [ru, [Su, iu],
              [xu, ju]
            ],
            [/smart-tv.+(samsung)/i],
            [Su, [xu, du]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [ru, /^/, "SmartTV"],
              [Su, wu],
              [xu, du]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Su, tu],
              [xu, du]
            ],
            [/(apple) ?tv/i],
            [Su, [ru, eu + " TV"],
              [xu, du]
            ],
            [/crkey/i],
            [
              [ru, Iu + "cast"],
              [Su, Uu],
              [xu, du]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [ru, [Su, ku],
              [xu, du]
            ],
            [/(shield \w+ tv)/i],
            [ru, [Su, cu],
              [xu, du]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [ru, [Su, Zu],
              [xu, du]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [ru, [Su, hu],
              [xu, du]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [ru, [Su, Pu],
              [xu, du]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Su, ru, [xu, du]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Su, uR],
              [ru, uR],
              [xu, du]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [ru, [xu, du]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [xu, du]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Su, ru, [xu, Wu]],
            [/droid.+; (shield)( bui|\))/i],
            [ru, [Su, cu],
              [xu, Wu]
            ],
            [/(playstation \w+)/i],
            [ru, [Su, hu],
              [xu, Wu]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [ru, [Su, lu],
              [xu, Wu]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [ru, [Su, wu],
              [xu, bu]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Su, ru, [xu, bu]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [ru, [Su, Fu],
              [xu, bu]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [ru, [Su, eu],
              [xu, bu]
            ],
            [/(opwwe\d{3})/i],
            [ru, [Su, Lu],
              [xu, bu]
            ],
            [/(moto 360)/i],
            [ru, [Su, gu],
              [xu, bu]
            ],
            [/(smartwatch 3)/i],
            [ru, [Su, hu],
              [xu, bu]
            ],
            [/(g watch r)/i],
            [ru, [Su, tu],
              [xu, bu]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [ru, [Su, iu],
              [xu, bu]
            ],
            [/droid.+; (glass) \d/i],
            [ru, [Su, Uu],
              [xu, bu]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Su, ru, [xu, bu]],
            [/; (quest( \d| pro)?)/i],
            [ru, [Su, Yu],
              [xu, bu]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Su, [xu, Cu]],
            [/(aeobc)\b/i],
            [ru, [Su, ku],
              [xu, Cu]
            ],
            [/(homepod).+mac os/i],
            [ru, [Su, eu],
              [xu, Cu]
            ],
            [/windows iot/i],
            [
              [xu, Cu]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [ru, [xu, ju]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [ru, [xu, Hu]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [xu, Hu]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [xu, ju]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [ru, [Su, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [pu, [Bu, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Bu, pu],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [pu, [Bu, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Bu, pu],
            [/ladybird\//i],
            [
              [Bu, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [pu, Bu]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Bu, pu],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Bu, [pu, yR, ER]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [pu, yR, ER],
              [Bu, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [pu, /_/g, "."],
              [Bu, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Bu, qu],
              [pu, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [pu, Bu],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Bu, /(.+)/, "$1 Touch"], pu
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Bu, pu],
            [/\(bb(10);/i],
            [pu, [Bu, Du]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [pu, [Bu, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [pu, [Bu, Gu + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [pu, [Bu, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [pu, [Bu, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [pu, [Bu, Iu + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Bu, ou], pu
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Bu, pu],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Bu, "Solaris"], pu
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Bu, pu]
          ]
        },
        QR = function(uu, Ru) {
          if (typeof uu === Nu && (Ru = uu, uu = Qu), !(this instanceof QR)) return new QR(uu, Ru).getResult();
          var yu = typeof Ku !== Ju && Ku.navigator ? Ku.navigator : Qu,
            Eu = uu || (yu && yu.userAgent ? yu.userAgent : ""),
            Wu = yu && yu.userAgentData ? yu.userAgentData : Qu,
            du = Ru ? function(uu, Ru) {
              var yu = {};
              for (var Eu in uu) Ru[Eu] && Ru[Eu].length % 2 === 0 ? yu[Eu] = Ru[Eu].concat(uu[Eu]) : yu[Eu] = uu[Eu];
              return yu
            }(KR, Ru) : KR,
            bu = yu && yu.userAgent == Eu;
          return this.getBrowser = function() {
            var uu, Ru = {};
            return Ru[Bu] = Qu, Ru[pu] = Qu, RR.call(Ru, Eu, du.browser), Ru[Vu] = typeof(uu = Ru[pu]) === Xu ? uu.replace(/[^\d\.]/g, "").split(".")[0] : Qu, bu && yu && yu.brave && typeof yu.brave.isBrave == mu && (Ru[Bu] = "Brave"), Ru
          }, this.getCPU = function() {
            var uu = {};
            return uu[Tu] = Qu, RR.call(uu, Eu, du.cpu), uu
          }, this.getDevice = function() {
            var uu = {};
            return uu[Su] = Qu, uu[ru] = Qu, uu[xu] = Qu, RR.call(uu, Eu, du.device), bu && !uu[xu] && Wu && Wu.mobile && (uu[xu] = ju), bu && "Macintosh" == uu[ru] && yu && typeof yu.standalone !== Ju && yu.maxTouchPoints && yu.maxTouchPoints > 2 && (uu[ru] = "iPad", uu[xu] = Hu), uu
          }, this.eS = function() {
            var uu = {};
            return uu[Bu] = Qu, uu[pu] = Qu, RR.call(uu, Eu, du.engine), uu
          }, this.getOS = function() {
            var uu = {};
            return uu[Bu] = Qu, uu[pu] = Qu, RR.call(uu, Eu, du.os), bu && !uu[Bu] && Wu && Wu.platform && "Unknown" != Wu.platform && (uu[Bu] = Wu.platform.replace(/chrome os/i, ou).replace(/macos/i, qu)), uu
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.eS(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Eu
          }, this.setUA = function(uu) {
            return Eu = typeof uu === Xu && uu.length > 500 ? uR(uu, 500) : uu, this
          }, this.setUA(Eu), this
        };
      QR.VERSION = "1.0.41", QR.BROWSER = vu([Bu, pu, Vu]), QR.CPU = vu([Tu]), QR.DEVICE = vu([ru, Su, xu, Wu, ju, du, Hu, bu, Cu]), QR.ENGINE = QR.OS = vu([Bu, pu]), typeof Ru !== Ju ? (uu.exports && (Ru = uu.exports = QR), Ru.UAParser = QR) : yu.amdO ? (Eu = function() {
        return QR
      }.call(Ru, yu, Ru, uu)) === Qu || (uu.exports = Eu) : typeof Ku !== Ju && (Ku.UAParser = QR);
      var mR = typeof Ku !== Ju && (Ku.jQuery || Ku.Zepto);
      if (mR && !mR.ua) {
        var JR = new QR;
        mR.ua = JR.getResult(), mR.ua.get = function() {
          return JR.getUA()
        }, mR.ua.set = function(uu) {
          JR.setUA(uu);
          var Ru = JR.getResult();
          for (var yu in Ru) mR.ua[yu] = Ru[yu]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);