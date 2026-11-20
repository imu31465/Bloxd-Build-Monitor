export const id = 31;
export const ids = [31];
export const modules = {
  6373: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BaseExtension: () => Ug,
      BaseInstrumentation: () => Rg,
      BaseTransport: () => Op,
      CSPInstrumentation: () => bp,
      ConsoleInstrumentation: () => Bg,
      ConsoleTransport: () => pE,
      EVENT_CLICK: () => fR,
      EVENT_NAVIGATION: () => xR,
      EVENT_ROUTE_CHANGE: () => bR,
      EVENT_SESSION_EXTEND: () => wR,
      EVENT_SESSION_RESUME: () => JR,
      EVENT_SESSION_START: () => IR,
      EVENT_VIEW_CHANGED: () => mR,
      ErrorsInstrumentation: () => rg,
      FetchTransport: () => IE,
      InternalLoggerLevel: () => iR,
      LogLevel: () => fg,
      MAX_SESSION_PERSISTENCE_TIME: () => qU,
      NavigationInstrumentation: () => kp,
      Observable: () => Wg,
      PerformanceInstrumentation: () => Mt,
      PersistentSessionsManager: () => dR,
      SESSION_EXPIRATION_TIME: () => EU,
      SESSION_INACTIVITY_TIME: () => PU,
      STORAGE_KEY: () => pU,
      SessionInstrumentation: () => tg,
      TransportItemType: () => UE,
      UserActionInstrumentation: () => np,
      UserActionState: () => Qp,
      VERSION: () => gg,
      ViewInstrumentation: () => vg,
      VolatileSessionsManager: () => HR,
      WebVitalsInstrumentation: () => rt,
      allLogLevels: () => mg,
      browserMeta: () => Dp,
      buildStackFrame: () => pg,
      captureMetas: () => HE,
      createInternalLogger: () => oE,
      createPromiseBuffer: () => CE,
      createSession: () => Np,
      deepEqual: () => WR,
      defaultEventDomain: () => tU,
      defaultExceptionType: () => ng,
      defaultGlobalObjectKey: () => ZE,
      defaultInternalLoggerLevel: () => zR,
      defaultLogLevel: () => xg,
      faro: () => hU,
      genShortID: () => eR,
      getCurrentTimestamp: () => CR,
      getDataFromSafariExtensions: () => jg,
      getIgnoreUrls: () => MU,
      getInternalFaroFromGlobalObject: () => jU,
      getStackFramesFromError: () => Cg,
      getTransportBody: () => tE,
      getUrlFromResource: () => LU,
      getWebInstrumentations: () => Fp,
      globalObject: () => cU,
      initializeFaro: () => OE,
      internalGlobalObjectKey: () => GU,
      isArray: () => aU,
      isBoolean: () => nU,
      isDomError: () => SU,
      isDomException: () => sU,
      isElement: () => kU,
      isElementDefined: () => yU,
      Lu: () => zU,
      isError: () => dU,
      isErrorDefined: () => vU,
      isErrorEvent: () => HU,
      isEvent: () => XU,
      isEventDefined: () => rU,
      isFunction: () => ZU,
      isInstanceOf: () => fU,
      isInt: () => wU,
      isInternalFaroOnGlobalObject: () => CU,
      isMap: () => iU,
      isMapDefined: () => FU,
      isNull: () => mU,
      isNumber: () => JU,
      isObject: () => oU,
      isPrimitive: () => VU,
      isRegExp: () => YU,
      isString: () => IU,
      isSymbol: () => bU,
      isSyntheticEvent: () => AU,
      isThenable: () => BU,
      isToString: () => WU,
      isTypeof: () => eU,
      isUndefined: () => xU,
      makeCoreConfig: () => BE,
      noop: () => FR,
      osMeta: () => Lp,
      parseStacktrace: () => hg,
      sdkMeta: () => lp,
      setInternalFaroOnGlobalObject: () => uU,
      transportItemTypeToBodyKey: () => RE,
      unknownString: () => Xg,
      userActionDataAttribute: () => Dt,
      userActionTimeoutDataAttribute: () => Lt
    });
    const tU = "browser",
      pU = "com.grafana.faro.session",
      EU = 144e5,
      PU = 9e5,
      TU = 1e3,
      qU = PU,
      KU = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: qU
      };
    const cU = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof gU.g ? gU.g : "undefined" !== typeof self ? self : void 0;
    const GU = "_faroInternal";

    function jU() {
      return cU[GU]
    }

    function uU(UU) {
      UU.config.isolate ? UU.internalLogger.debug("Skipping registering internal Faro instance on global object") : (UU.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(cU, GU, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: UU
      }))
    }

    function CU() {
      return GU in cU
    }
    let hU = {
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

    function QU(UU, RU, gU, tU, pU, EU, PU) {
      return RU.debug("Initializing Faro"), hU = {
          api: EU,
          config: gU,
          instrumentations: PU,
          internalLogger: RU,
          metas: tU,
          pause: pU.pause,
          transports: pU,
          unpatchedConsole: UU,
          unpause: pU.unpause
        }, uU(hU),
        function(UU) {
          if (UU.config.preventGlobalExposure) UU.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (UU.internalLogger.debug(`Registering public faro reference in the global scope using "${UU.config.globalObjectKey}" key`), UU.config.globalObjectKey in cU) return void UU.internalLogger.warn(`Skipping global registration due to key "${UU.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(cU, UU.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: UU
            })
          }
        }(hU), hU
    }

    function eU(UU, RU) {
      return typeof UU === RU
    }

    function WU(UU, RU) {
      return Object.prototype.toString.call(UU) === `[object ${RU}]`
    }

    function fU(UU, RU) {
      try {
        return UU instanceof RU
      } catch (gU) {
        return !1
      }
    }
    const xU = UU => eU(UU, "undefined"),
      mU = UU => eU(UU, "null"),
      IU = UU => eU(UU, "string"),
      JU = UU => eU(UU, "number") && !isNaN(UU) || eU(UU, "bigint"),
      wU = UU => JU(UU) && Number.isInteger(UU),
      nU = UU => eU(UU, "boolean"),
      bU = UU => eU(UU, "symbol"),
      oU = UU => !mU(UU) && eU(UU, "object"),
      ZU = UU => eU(UU, "function"),
      aU = UU => WU(UU, "Array"),
      YU = UU => WU(UU, "RegExp"),
      BU = UU => ZU(null === UU || void 0 === UU ? void 0 : UU.then),
      VU = UU => !oU(UU) && !ZU(UU),
      rU = "undefined" !== typeof Event,
      XU = UU => rU && fU(UU, Event),
      vU = "undefined" !== typeof Error,
      dU = UU => vU && fU(UU, Error),
      HU = UU => WU(UU, "ErrorEvent"),
      SU = UU => WU(UU, "DOMError"),
      sU = UU => WU(UU, "DOMException"),
      yU = "undefined" !== typeof Element,
      kU = UU => yU && fU(UU, Element),
      FU = "undefined" !== typeof Map,
      iU = UU => FU && fU(UU, Map),
      AU = UU => oU(UU) && "nativeEvent" in UU && "preventDefault" in UU && "stopPropagation" in UU;

    function zU(UU) {
      return null == UU || (aU(UU) || IU(UU) ? 0 === UU.length : !!oU(UU) && 0 === Object.keys(UU).length)
    }

    function MU() {
      return hU.transports.transports.flatMap((UU => UU.getIgnoreUrls()))
    }

    function DU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return MU().some((RU => UU && null != UU.match(RU)))
    }

    function LU(UU) {
      return IU(UU) ? UU : UU instanceof URL ? UU.href : !zU(UU) && ZU(null === UU || void 0 === UU ? void 0 : UU.toString) ? UU.toString() : void 0
    }
    const NU = "sessionStorage",
      lU = "localStorage";

    function OU(UU) {
      try {
        let RU;
        RU = window[UU];
        const gU = "__faro_storage_test__";
        return RU.setItem(gU, gU), RU.removeItem(gU), !0
      } catch (gU) {
        var RU;
        return null === (RU = hU.internalLogger) || void 0 === RU || RU.info(`Web storage of type ${UU} is not available. Reason: ${gU}`), !1
      }
    }

    function UR(UU, RU) {
      return ER(RU) ? window[RU].getItem(UU) : null
    }

    function RR(UU, RU, gU) {
      if (ER(gU)) try {
        window[gU].setItem(UU, RU)
      } catch (tU) {}
    }

    function gR(UU, RU) {
      ER(RU) && window[RU].removeItem(UU)
    }
    const tR = OU(lU),
      pR = OU(NU);

    function ER(UU) {
      return UU === lU ? tR : UU === NU && pR
    }

    function PR(UU) {
      return PR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, PR(UU)
    }

    function TR(UU) {
      var RU = function(UU, RU) {
        if ("object" != PR(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != PR(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == PR(RU) ? RU : RU + ""
    }

    function qR(UU, RU, gU) {
      return (RU = TR(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function KR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function cR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? KR(Object(gU), !0).forEach((function(RU) {
          qR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : KR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function GR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hU;
      var RU, gU, tU;
      const pU = UU.config.sessionTracking,
        EU = null !== (RU = null !== (gU = null === pU || void 0 === pU || null === (tU = pU.sampler) || void 0 === tU ? void 0 : tU.call(pU, {
          metas: UU.metas.value
        })) && void 0 !== gU ? gU : null === pU || void 0 === pU ? void 0 : pU.samplingRate) && void 0 !== RU ? RU : 1,
        PU = "number" === typeof EU ? function(UU) {
          return Math.min(1, Math.max(0, UU))
        }(EU) : 0;
      if (!(PU > 0)) return !1;
      if (1 === PU) return !0;
      try {
        const UU = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === UU || void 0 === UU ? void 0 : UU.getRandomValues)) {
          const RU = new Uint32Array(1);
          return UU.getRandomValues(RU), RU[0] / Math.pow(2, 32) < PU
        }
      } catch (TU) {}
      return Math.random() < PU
    }

    function jR() {
      return Date.now()
    }

    function uR() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function CR() {
      return (new Date).toISOString()
    }

    function hR(UU) {
      return new Date(UU).toISOString()
    }
    const QR = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function eR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const RU = new Uint32Array(UU),
        gU = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === gU || void 0 === gU ? void 0 : gU.getRandomValues) gU.getRandomValues(RU);
      else
        for (let pU = 0; pU < UU; pU++) RU[pU] = Math.floor(4294967296 * Math.random());
      let tU = "";
      for (let pU = 0; pU < UU; pU++) tU += QR[RU[pU] % 59];
      return tU
    }

    function WR(UU, RU) {
      if (UU === RU) return !0;
      if (eU(UU, "number") && isNaN(UU)) return eU(RU, "number") && isNaN(RU);
      const gU = aU(UU),
        tU = aU(RU);
      if (gU !== tU) return !1;
      if (gU && tU) {
        const gU = UU.length;
        if (gU !== RU.length) return !1;
        for (let tU = gU; 0 !== tU--;)
          if (!WR(UU[tU], RU[tU])) return !1;
        return !0
      }
      const pU = oU(UU),
        EU = oU(RU);
      if (pU !== EU) return !1;
      if (UU && RU && pU && EU) {
        const gU = Object.keys(UU),
          tU = Object.keys(RU);
        if (gU.length !== tU.length) return !1;
        for (let UU of gU)
          if (!tU.includes(UU)) return !1;
        for (let pU of gU)
          if (!WR(UU[pU], RU[pU])) return !1;
        return !0
      }
      return !1
    }
    const fR = "click",
      xR = "navigation",
      mR = "view_changed",
      IR = "session_start",
      JR = "session_resume",
      wR = "session_extend",
      nR = "service_name_override",
      bR = "route_change";

    function oR() {
      let {
        sessionId: UU,
        started: RU,
        lastActivity: gU,
        isSampled: tU = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, pU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hU;
      var EU;
      const PU = jR(),
        TU = null === (EU = pU.config) || void 0 === EU || null === (EU = EU.sessionTracking) || void 0 === EU ? void 0 : EU.generateSessionId;
      return null == UU && (UU = "function" === typeof TU ? TU() : eR()), {
        sessionId: UU,
        lastActivity: null !== gU && void 0 !== gU ? gU : PU,
        started: null !== RU && void 0 !== RU ? RU : PU,
        isSampled: tU
      }
    }

    function ZR(UU) {
      if (null == UU) return !1;
      const RU = jR();
      return RU - UU.started < 144e5 && RU - UU.lastActivity < PU
    }

    function aR(UU) {
      let {
        fetchUserSession: RU,
        storeUserSession: gU,
        adoptSession: tU,
        updateInterval: pU = 0
      } = UU, TU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hU, qU = 0;
      return function() {
        let {
          forceSessionExtend: UU = !1,
          refreshActivity: KU = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var cU, GU;
        if (!RU || !gU) return;
        const jU = jR();
        if (!UU && jU < qU && qU - jU <= pU) return;
        const uU = TU.config.sessionTracking,
          CU = null === uU || void 0 === uU ? void 0 : uU.persistent;
        if (CU && !tR || !CU && !pR) return;
        const hU = RU();
        if (qU = Math.min(jU + pU, (null !== (cU = null === hU || void 0 === hU ? void 0 : hU.started) && void 0 !== cU ? cU : jU) + EU, (null !== (GU = null === hU || void 0 === hU ? void 0 : hU.lastActivity) && void 0 !== GU ? GU : jU) + PU), !1 === UU && ZR(hU)) {
          var QU;
          KU && gU(cR(cR({}, hU), {}, {
            lastActivity: jU
          }));
          const UU = null === (QU = TU.metas.value.session) || void 0 === QU ? void 0 : QU.id;
          null != tU && null != hU.sessionMeta && hU.sessionId !== UU && tU(hU.sessionMeta)
        } else {
          var eU, WU, fU;
          let UU = BR(oR({
            isSampled: GR(TU)
          }, TU), hU, TU);
          qU = jU + pU, gU(UU), null === (eU = TU.api) || void 0 === eU || eU.setSession(UU.sessionMeta), null === uU || void 0 === uU || null === (WU = uU.onSessionChange) || void 0 === WU || WU.call(uU, null !== (fU = null === hU || void 0 === hU ? void 0 : hU.sessionMeta) && void 0 !== fU ? fU : null, UU.sessionMeta)
        }
      }
    }

    function YR(UU) {
      let RU, {
          fetchUserSession: gU,
          storeUserSession: tU,
          updateInterval: pU = 0
        } = UU,
        EU = 0;
      return UU => {
        const PU = jR();
        if (UU === RU && PU < EU && EU - PU <= pU) return;
        RU = UU, EU = PU + pU;
        const TU = gU();
        (null === TU || void 0 === TU ? void 0 : TU.sessionId) === UU && ZR(TU) && tU(cR(cR({}, TU), {}, {
          lastActivity: PU
        }))
      }
    }

    function BR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hU;
      var tU, pU, EU, PU, TU, qU;
      const KU = cR(cR({}, UU), {}, {
          sessionMeta: {
            id: UU.sessionId,
            attributes: rR(cR(cR(cR({}, null === (tU = gU.config.sessionTracking) || void 0 === tU || null === (tU = tU.session) || void 0 === tU ? void 0 : tU.attributes), null !== (pU = null === (EU = gU.metas.value.session) || void 0 === EU ? void 0 : EU.attributes) && void 0 !== pU ? pU : {}), {}, {
              isSampled: UU.isSampled.toString()
            }))
          }
        }),
        cU = null !== (PU = null === (TU = gU.metas.value.session) || void 0 === TU ? void 0 : TU.overrides) && void 0 !== PU ? PU : null === RU || void 0 === RU || null === (qU = RU.sessionMeta) || void 0 === qU ? void 0 : qU.overrides;
      zU(cU) || (KU.sessionMeta.overrides = cU);
      const GU = null === RU || void 0 === RU ? void 0 : RU.sessionId;
      return null != GU && (KU.sessionMeta.attributes.previousSession = GU), KU
    }

    function VR(UU) {
      let {
        fetchUserSession: RU,
        storeUserSession: gU
      } = UU, tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hU, pU = !1;
      return function(UU) {
        if (pU) return;
        const EU = UU.session,
          PU = RU();
        let TU = null === EU || void 0 === EU ? void 0 : EU.id;
        const qU = null === EU || void 0 === EU ? void 0 : EU.attributes,
          KU = null === EU || void 0 === EU ? void 0 : EU.overrides,
          cU = null === PU || void 0 === PU ? void 0 : PU.sessionMeta,
          GU = null === cU || void 0 === cU ? void 0 : cU.overrides,
          jU = !!KU && !WR(KU, GU),
          uU = !!qU && !WR(qU, null === cU || void 0 === cU ? void 0 : cU.attributes);
        if (EU && TU !== (null === PU || void 0 === PU ? void 0 : PU.sessionId) || uU || jU) {
          var CU, hU;
          const UU = null != PU && TU === PU.sessionId,
            RU = BR(UU ? PU : oR({
              sessionId: TU,
              isSampled: GR(tU)
            }, tU), PU, tU),
            EU = null === PU || void 0 === PU || null === (CU = PU.sessionMeta) || void 0 === CU || null === (CU = CU.attributes) || void 0 === CU ? void 0 : CU.previousSession;
          UU && null != EU && EU !== RU.sessionId && (RU.sessionMeta.attributes.previousSession = EU), (null === (hU = RU.sessionMeta.attributes) || void 0 === hU ? void 0 : hU.previousSession) === RU.sessionId && delete RU.sessionMeta.attributes.previousSession, gU(RU),
            function(UU, RU) {
              let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var pU, EU, PU;
              if (!RU) return;
              const TU = gU.serviceName,
                qU = null !== (pU = null !== (EU = tU.serviceName) && void 0 !== EU ? EU : null === (PU = UU.metas.value.app) || void 0 === PU ? void 0 : PU.name) && void 0 !== pU ? pU : "";
              TU && TU !== qU && UU.api.pushEvent(nR, {
                serviceName: TU,
                previousServiceName: qU
              })
            }(tU, jU, KU, GU), pU = !0;
          try {
            tU.api.setSession(RU.sessionMeta)
          } finally {
            pU = !1
          }
        }
      }
    }

    function rR(UU) {
      const RU = {};
      for (const gU of Object.keys(UU)) {
        const tU = UU[gU];
        void 0 !== tU && (RU[gU] = tU)
      }
      return RU
    }

    function XR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== UU && void 0 !== UU ? UU : {}, function() {
        const UU = new WeakSet;
        return function(RU, gU) {
          if (oU(gU) && null !== gU) {
            if (UU.has(gU)) return null;
            UU.add(gU)
          }
          return gU
        }
      }())
    }

    function vR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const RU = {};
      for (const [gU, tU] of Object.entries(UU)) RU[gU] = oU(tU) && null !== tU ? XR(tU) : String(tU);
      return RU
    }
    var dR = class UU {
      constructor() {
        var RU = this;
        let gU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hU;
        this.context = gU, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = UU => {
          this.adopting = !0;
          try {
            var RU;
            null === (RU = this.context.api) || void 0 === RU || RU.setSession(UU)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: UU = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return RU.updateUserSession({
            refreshActivity: UU
          })
        }, this.recordActivity = YR({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          updateInterval: TU
        }), this.updateUserSession = aR({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: TU
        }, gU), this.init()
      }
      static removeUserSession() {
        gR(pU, UU.storageTypeLocal)
      }
      static storeUserSession(RU) {
        RR(pU, XR(RU), UU.storageTypeLocal)
      }
      static fetchUserSession() {
        const RU = UR(pU, UU.storageTypeLocal);
        return RU ? JSON.parse(RU) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var UU;
            this.updateSession({
              refreshActivity: !1
            });
            const RU = null === (UU = this.context.api) || void 0 === UU || null === (UU = UU.getSession()) || void 0 === UU ? void 0 : UU.id;
            RU && this.recordActivity(RU)
          }
        })), this.context.metas.addListener(VR({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession
        }, this.context))
      }
    };
    dR.storageTypeLocal = lU;
    var HR = class UU {
      constructor() {
        var RU = this;
        let gU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hU;
        this.context = gU, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: UU = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return RU.updateUserSession({
            refreshActivity: UU
          })
        }, this.recordActivity = YR({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          updateInterval: TU
        }), this.updateUserSession = aR({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          updateInterval: TU
        }, gU), this.init()
      }
      static removeUserSession() {
        gR(pU, UU.storageTypeSession)
      }
      static storeUserSession(RU) {
        RR(pU, XR(RU), UU.storageTypeSession)
      }
      static fetchUserSession() {
        const RU = UR(pU, UU.storageTypeSession);
        return RU ? JSON.parse(RU) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var UU;
            this.updateSession({
              refreshActivity: !1
            });
            const RU = null === (UU = this.context.api) || void 0 === UU || null === (UU = UU.getSession()) || void 0 === UU ? void 0 : UU.id;
            RU && this.recordActivity(RU)
          }
        })), this.context.metas.addListener(VR({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession
        }, this.context))
      }
    };
    HR.storageTypeSession = NU;
    const SR = new WeakMap;

    function sR(UU) {
      let RU = SR.get(UU);
      if (!RU) {
        let gU = [],
          tU = [];
        RU = {
          addSessionUpdateListener: UU => {
            gU.push(UU)
          },
          removeSessionUpdateListener: UU => {
            gU = gU.filter((RU => RU !== UU))
          },
          notifySessionUpdate: UU => {
            gU.forEach((RU => RU(UU)))
          },
          shouldCapture: () => tU.every((UU => UU())),
          addCaptureFilter: UU => {
            tU.push(UU)
          },
          removeCaptureFilter: UU => {
            tU = tU.filter((RU => RU !== UU))
          }
        }, SR.set(UU, RU)
      }
      return RU
    }
    var yR = class {
      constructor(UU, RU, gU) {
        this.metas = UU, this.transports = RU, this.onActivate = gU, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = UU => {
          var RU, gU, tU;
          const pU = this.pending;
          var EU, PU;
          if ("overrides" === UU.type) return void(this.pending = {
            reset: null !== (EU = null === pU || void 0 === pU ? void 0 : pU.reset) && void 0 !== EU && EU,
            inheritOverrides: null === (PU = null === pU || void 0 === pU ? void 0 : pU.inheritOverrides) || void 0 === PU || PU,
            session: cR(cR({}, null === pU || void 0 === pU ? void 0 : pU.session), {}, {
              overrides: cR(cR({}, null === pU || void 0 === pU ? void 0 : pU.session.overrides), UU.overrides)
            })
          });
          const TU = UU.session,
            qU = zU(TU) || null != TU && "id" in TU && !TU.id,
            KU = null !== (RU = null === TU || void 0 === TU ? void 0 : TU.overrides) && void 0 !== RU ? RU : null === pU || void 0 === pU ? void 0 : pU.session.overrides;
          this.pending = {
            reset: qU || !(null === TU || void 0 === TU ? void 0 : TU.id) && null !== (gU = null === pU || void 0 === pU ? void 0 : pU.reset) && void 0 !== gU && gU,
            inheritOverrides: !(!UU.overrides && void 0 !== (null === TU || void 0 === TU ? void 0 : TU.overrides)) && (null === (tU = null === pU || void 0 === pU ? void 0 : pU.inheritOverrides) || void 0 === tU || tU),
            session: {
              id: null === TU || void 0 === TU ? void 0 : TU.id,
              attributes: (null === TU || void 0 === TU ? void 0 : TU.attributes) && cR({}, TU.attributes),
              overrides: UU.overrides ? cR(cR({}, null === pU || void 0 === pU ? void 0 : pU.session.overrides), UU.overrides) : KU && cR({}, KU)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var UU, RU;
        this.waiting = !0, sR(this.metas).addSessionUpdateListener(this.recordUpdate), sR(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (UU = (RU = this.metas).addCaptureListener) || void 0 === UU || UU.call(RU, this.activate), this.activate()
      }
      destroy() {
        var UU, RU;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), sR(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (UU = (RU = this.metas).removeCaptureListener) || void 0 === UU || UU.call(RU, this.activate), sR(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function kR(UU) {
      return (null === UU || void 0 === UU ? void 0 : UU.persistent) ? dR : HR
    }

    function FR() {}
    let iR = function(UU) {
      return UU[UU.OFF = 0] = "OFF", UU[UU.ERROR = 1] = "ERROR", UU[UU.WARN = 2] = "WARN", UU[UU.INFO = 3] = "INFO", UU[UU.VERBOSE = 4] = "VERBOSE", UU
    }({});
    const AR = {
        debug: FR,
        error: FR,
        info: FR,
        prefix: "Faro",
        warn: FR
      },
      zR = 1;

    function MR(UU) {
      return MR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, MR(UU)
    }

    function DR(UU) {
      var RU = function(UU, RU) {
        if ("object" != MR(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != MR(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == MR(RU) ? RU : RU + ""
    }

    function LR(UU, RU, gU) {
      return (RU = DR(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function NR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function lR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? NR(Object(gU), !0).forEach((function(RU) {
          LR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : NR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }
    const OR = lR({}, console);
    var Ug = class {
        constructor() {
          this.unpatchedConsole = OR, this.internalLogger = AR, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
          this.internalLogger.debug(`${this.name}\n`, ...RU)
        }
        logInfo() {
          for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
          this.internalLogger.info(`${this.name}\n`, ...RU)
        }
        logWarn() {
          for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
          this.internalLogger.warn(`${this.name}\n`, ...RU)
        }
        logError() {
          for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
          this.internalLogger.error(`${this.name}\n`, ...RU)
        }
      },
      Rg = class extends Ug {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const gg = "2.12.1";
    var tg = class extends Rg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = gg, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(UU) {
        var RU;
        const gU = UU.session;
        if (gU && gU.id !== (null === (RU = this.notifiedSession) || void 0 === RU ? void 0 : RU.id)) {
          var tU;
          if (this.isAdoptingSession()) return void(this.notifiedSession = gU);
          if (this.notifiedSession && this.notifiedSession.id === (null === (tU = gU.attributes) || void 0 === tU ? void 0 : tU.previousSession)) return this.api.pushEvent(wR, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = gU);
          this.notifiedSession = gU, this.api.pushEvent(IR, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(UU, RU, gU) {
        const tU = null === gU || void 0 === gU ? void 0 : gU.session;
        let pU, EU, PU = UU.fetchUserSession();
        if (RU.persistent && RU.maxSessionPersistenceTime && PU) {
          const UU = jR();
          PU.lastActivity < UU - RU.maxSessionPersistenceTime && (dR.removeUserSession(), PU = null)
        }
        const TU = ZR(PU);
        if ((null === gU || void 0 === gU ? void 0 : gU.reset) || !TU || (null === tU || void 0 === tU ? void 0 : tU.id) && tU.id !== (null === PU || void 0 === PU ? void 0 : PU.sessionId)) {
          var qU, KU, cU, GU, jU, uU;
          EU = oR({
            sessionId: (null === gU || void 0 === gU ? void 0 : gU.reset) ? void 0 : null !== (qU = null === tU || void 0 === tU ? void 0 : tU.id) && void 0 !== qU ? qU : null === (KU = RU.session) || void 0 === KU ? void 0 : KU.id,
            isSampled: GR(this)
          }, this);
          const UU = EU.sessionId,
            CU = gU && TU ? null === PU || void 0 === PU || null === (cU = PU.sessionMeta) || void 0 === cU ? void 0 : cU.overrides : void 0,
            hU = CU ? cR(cR({}, null === (GU = RU.session) || void 0 === GU ? void 0 : GU.overrides), CU) : null === (jU = RU.session) || void 0 === jU ? void 0 : jU.overrides;
          EU.sessionMeta = cR({
            id: UU,
            attributes: cR({
              isSampled: EU.isSampled.toString()
            }, null === (uU = RU.session) || void 0 === uU ? void 0 : uU.attributes)
          }, hU ? {
            overrides: hU
          } : {}), pU = IR
        } else {
          var CU, hU;
          const UU = null === PU || void 0 === PU ? void 0 : PU.sessionId;
          EU = oR({
            sessionId: UU,
            isSampled: PU.isSampled || !1,
            started: null === PU || void 0 === PU ? void 0 : PU.started
          }, this);
          const gU = null === PU || void 0 === PU ? void 0 : PU.sessionMeta,
            tU = cR(cR({}, null === (CU = RU.session) || void 0 === CU ? void 0 : CU.overrides), null === gU || void 0 === gU ? void 0 : gU.overrides);
          EU.sessionMeta = cR(cR({}, RU.session), {}, {
            id: UU,
            attributes: cR(cR(cR({}, null === (hU = RU.session) || void 0 === hU ? void 0 : hU.attributes), null === gU || void 0 === gU ? void 0 : gU.attributes), {}, {
              isSampled: EU.isSampled.toString()
            }),
            overrides: tU
          }), pU = JR
        }
        var QU;
        if (tU && (EU.sessionMeta = cR(cR({}, EU.sessionMeta), {}, {
            attributes: cR(cR(cR({}, null === (QU = EU.sessionMeta) || void 0 === QU ? void 0 : QU.attributes), tU.attributes), {}, {
              isSampled: EU.isSampled.toString()
            })
          }), tU.overrides)) {
          const UU = (null === gU || void 0 === gU ? void 0 : gU.inheritOverrides) ? cR(cR({}, EU.sessionMeta.overrides), tU.overrides) : tU.overrides;
          Object.keys(UU).length > 0 ? EU.sessionMeta.overrides = UU : delete EU.sessionMeta.overrides
        }
        return {
          initialSession: EU,
          lifecycleType: pU
        }
      }
      registerBeforeSendHook(UU) {
        var RU;
        this.beforeSendHook = RU => {
          var gU, tU;
          const pU = null === (gU = RU.meta.session) || void 0 === gU ? void 0 : gU.id;
          pU && !this.transports.isPaused() && UU(pU);
          const EU = null === (tU = RU.meta.session) || void 0 === tU ? void 0 : tU.attributes;
          if (EU && "true" === (null === EU || void 0 === EU ? void 0 : EU.isSampled)) {
            var PU;
            let UU = JSON.parse(JSON.stringify(RU));
            const gU = null === (PU = UU.meta.session) || void 0 === PU ? void 0 : PU.attributes;
            var TU;
            if (null === gU || void 0 === gU || delete gU.isSampled, 0 === Object.keys(null !== gU && void 0 !== gU ? gU : {}).length) null === (TU = UU.meta.session) || void 0 === TU || delete TU.attributes;
            return UU
          }
          return null
        }, null === (RU = this.transports) || void 0 === RU || RU.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var UU;
        this.logDebug("init session instrumentation");
        const RU = document.prerendering;
        var gU;
        if ((null === (UU = this.config.sessionTracking) || void 0 === UU ? void 0 : UU.enabled) && (RU || this.prerenderSession)) return null !== (gU = this.prerenderSession) && void 0 !== gU || (this.prerenderSession = new yR(this.metas, this.transports, (UU => {
          this.prerenderSession = void 0, this.initializeSession(UU)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(UU) {
        const RU = this.config.sessionTracking;
        if (null === RU || void 0 === RU ? void 0 : RU.enabled) {
          var gU, tU;
          const pU = kR(RU),
            EU = new pU(this);
          this.isAdoptingSession = EU.isAdopting, this.registerBeforeSendHook(EU.recordActivity);
          const {
            initialSession: PU,
            lifecycleType: TU
          } = this.createInitialSession(pU, RU, UU);
          pU.storeUserSession(PU);
          const qU = PU.sessionMeta;
          this.notifiedSession = qU, this.api.setSession(qU), this.captureListener = () => {
            this.transports.isPaused() || EU.updateSession({
              refreshActivity: !1
            })
          }, null === (gU = (tU = this.metas).addCaptureListener) || void 0 === gU || gU.call(tU, this.captureListener), TU === IR && this.api.pushEvent(IR, {}, void 0, {
            skipDedupe: !0
          }), TU === JR && this.api.pushEvent(JR, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var UU, RU, gU;
        (null === (UU = this.prerenderSession) || void 0 === UU || UU.destroy(), this.captureListener) && (null === (RU = (gU = this.metas).removeCaptureListener) || void 0 === RU || RU.call(gU, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function pg(UU, RU, gU, tU) {
      const pU = {
        filename: UU || document.location.href,
        function: RU || "?"
      };
      return void 0 !== gU && (pU.lineno = gU), void 0 !== tU && (pU.colno = tU), pU
    }
    const Eg = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Pg = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Tg = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      qg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Kg = "safari-extension",
      cg = "safari-web-extension",
      Gg = /Minified React error #\d+;/i;

    function jg(UU, RU) {
      const gU = null === UU || void 0 === UU ? void 0 : UU.includes(Kg),
        tU = !gU && (null === UU || void 0 === UU ? void 0 : UU.includes("safari-web-extension"));
      return gU || tU ? [(null === UU || void 0 === UU ? void 0 : UU.includes("@")) ? UU.split("@")[0] : UU, gU ? `${Kg}:${RU}` : `${cg}:${RU}`] : [UU, RU]
    }
    const ug = 1024;

    function Cg(UU) {
      let RU = [];
      UU.stacktrace ? RU = UU.stacktrace.split("\n").filter(((UU, RU) => RU % 2 === 0)) : UU.stack && (RU = UU.stack.split("\n"));
      const gU = RU.reduce(((RU, gU, tU) => {
        if (gU.length > ug) return RU;
        let pU, EU, PU, TU, qU;
        if (pU = Eg.exec(gU)) {
          if (EU = pU[1], PU = pU[2], TU = pU[3], qU = pU[4], null === PU || void 0 === PU ? void 0 : PU.startsWith("eval")) {
            const UU = Pg.exec(PU);
            UU && (PU = UU[1], TU = UU[2], qU = UU[3])
          }
          PU = (null === PU || void 0 === PU ? void 0 : PU.startsWith("address at ")) ? PU.substring(11) : PU, [EU, PU] = jg(EU, PU)
        } else if (pU = Tg.exec(gU)) {
          if (EU = pU[1], PU = pU[3], TU = pU[4], qU = pU[5], PU && PU.includes(" > eval")) {
            const UU = qg.exec(PU);
            UU && (EU = EU || "eval", PU = UU[1], TU = UU[2])
          } else 0 === tU && !qU && JU(UU.columnNumber) && (qU = String(UU.columnNumber + 1));
          [EU, PU] = jg(EU, PU)
        }
        return (PU || EU) && RU.push(pg(PU, EU, TU ? Number(TU) : void 0, qU ? Number(qU) : void 0)), RU
      }), []);
      return Gg.test(UU.message) ? gU.slice(1) : gU
    }

    function hg(UU) {
      return {
        frames: Cg(UU)
      }
    }
    const Qg = "http-request-start",
      eg = "http-request-end";
    var Wg = class UU {
      constructor() {
        this.subscribers = []
      }
      subscribe(UU) {
        return this.subscribers.push(UU), {
          unsubscribe: () => this.unsubscribe(UU)
        }
      }
      unsubscribe(UU) {
        this.subscribers = this.subscribers.filter((RU => RU !== UU))
      }
      notify(UU) {
        this.subscribers.forEach((RU => RU(UU)))
      }
      first() {
        const RU = new UU,
          gU = UU => {
            RU.notify(UU), tU.unsubscribe()
          },
          tU = this.subscribe(gU),
          pU = RU.unsubscribe.bind(RU);
        return this.withUnsubscribeOverride(RU, pU, gU)
      }
      takeWhile(RU) {
        const gU = new UU,
          tU = UU => {
            RU(UU) ? gU.notify(UU) : gU.unsubscribe(tU)
          };
        this.subscribe(tU);
        const pU = gU.unsubscribe.bind(gU);
        return this.withUnsubscribeOverride(gU, pU, tU)
      }
      filter(RU) {
        const gU = new UU,
          tU = UU => {
            RU(UU) && gU.notify(UU)
          };
        this.subscribe(tU);
        const pU = gU.unsubscribe.bind(gU);
        return this.withUnsubscribeOverride(gU, pU, tU)
      }
      merge() {
        const RU = new UU,
          gU = [];
        for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
        pU.forEach((UU => {
          const tU = UU.subscribe((UU => {
            RU.notify(UU)
          }));
          gU.push(tU)
        }));
        const PU = RU.unsubscribeAll.bind(RU);
        return RU.unsubscribe = () => {
          gU.forEach((UU => UU.unsubscribe())), PU()
        }, RU
      }
      withUnsubscribeOverride(UU, RU, gU) {
        return UU.unsubscribe = UU => {
          RU(UU), this.unsubscribe(gU)
        }, UU
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let fg = function(UU) {
      return UU.TRACE = "trace", UU.DEBUG = "debug", UU.INFO = "info", UU.LOG = "log", UU.WARN = "warn", UU.ERROR = "error", UU
    }({});
    const xg = "log",
      mg = ["trace", "debug", "info", "log", "warn", "error"];
    let Ig, Jg = !1;
    const wg = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      ng = "Error",
      bg = UU => UU.map((UU => oU(UU) ? XR(UU) : String(UU))).join(" ");

    function og(UU) {
      let RU, gU, tU, pU, EU = [];
      if (HU(UU) && UU.error) RU = UU.error.message, gU = UU.error.name, EU = Cg(UU.error);
      else if ((tU = SU(UU)) || sU(UU)) {
        const {
          name: pU,
          message: EU
        } = UU;
        gU = null !== pU && void 0 !== pU ? pU : tU ? "DOMError" : "DOMException", RU = EU ? `${gU}: ${EU}` : gU
      } else dU(UU) ? (gU = UU.name, RU = UU.message, EU = Cg(UU)) : (oU(UU) || (pU = XU(UU))) && (gU = pU ? UU.constructor.name : void 0, RU = `Non-Error exception captured with keys: ${Object.keys(UU)}`);
      return [RU, gU, EU]
    }

    function Zg(UU) {
      const [RU, gU, tU, pU, EU] = UU;
      let PU, TU, qU = [];
      const KU = IU(RU),
        cU = pg(gU, "?", tU, pU);
      return EU || !KU ? ([PU, TU, qU] = og(null !== EU && void 0 !== EU ? EU : RU), 0 === qU.length && (qU = [cU])) : KU && ([PU, TU] = function(UU) {
        var RU, gU;
        const tU = UU.match(wg),
          pU = null !== (RU = null === tU || void 0 === tU ? void 0 : tU[1]) && void 0 !== RU ? RU : ng;
        return [null !== (gU = null === tU || void 0 === tU ? void 0 : tU[2]) && void 0 !== gU ? gU : UU, pU]
      }(RU), qU = [cU]), {
        value: PU,
        type: TU,
        stackFrames: qU
      }
    }

    function ag(UU, RU) {
      return dU(UU[0]) ? Zg(UU) : {
        value: RU(UU)
      }
    }
    const Yg = UU => UU.map((UU => {
      try {
        return String(UU)
      } catch (RU) {
        return ""
      }
    })).join(" ");
    var Bg = class UU extends Rg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = gg, this.errorSerializer = Yg
      }
      initialize() {
        var RU, gU;
        const tU = this.config.consoleInstrumentation,
          pU = (null === tU || void 0 === tU ? void 0 : tU.serializeErrors) || !!(null === tU || void 0 === tU ? void 0 : tU.errorSerializer);
        this.errorSerializer = pU ? null !== (RU = null === tU || void 0 === tU ? void 0 : tU.errorSerializer) && void 0 !== RU ? RU : bg : Yg;
        const EU = null !== (gU = null === tU || void 0 === tU ? void 0 : tU.disabledLevels) && void 0 !== gU ? gU : UU.defaultDisabledLevels,
          PU = function(UU) {
            if (Ig || (Ig = new Wg), !Jg) {
              const RU = null !== UU && void 0 !== UU ? UU : OR;
              mg.forEach((UU => {
                console[UU] = function() {
                  for (var gU, tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
                  Ig.notify({
                    type: "console",
                    level: UU,
                    args: pU
                  }), null === (gU = RU[UU]) || void 0 === gU || gU.apply(console, pU)
                }
              })), Jg = !0
            }
            return Ig
          }(this.unpatchedConsole);
        this.subscription = PU.subscribe((RU => {
          let {
            level: gU,
            args: pU
          } = RU;
          if (!EU.includes(gU)) try {
            if (gU !== fg.ERROR || (null === tU || void 0 === tU ? void 0 : tU.consoleErrorAsLog))
              if (gU === fg.ERROR && (null === tU || void 0 === tU ? void 0 : tU.consoleErrorAsLog)) {
                const {
                  value: RU,
                  type: tU,
                  stackFrames: EU
                } = ag(pU, this.errorSerializer);
                this.api.pushLog(RU ? [UU.consoleErrorPrefix + RU] : pU, {
                  level: gU,
                  context: {
                    value: null !== RU && void 0 !== RU ? RU : "",
                    type: null !== tU && void 0 !== tU ? tU : "",
                    stackFrames: (null === EU || void 0 === EU ? void 0 : EU.length) ? bg(EU) : ""
                  }
                })
              } else this.api.pushLog(pU, {
                level: gU
              });
            else {
              const {
                value: RU,
                type: gU,
                stackFrames: tU
              } = ag(pU, this.errorSerializer);
              if (RU && !gU && !tU) return void this.api.pushError(new Error(UU.consoleErrorPrefix + RU));
              this.api.pushError(new Error(UU.consoleErrorPrefix + RU), {
                type: gU,
                stackFrames: tU
              })
            }
          } catch (PU) {
            this.logError(PU)
          }
        }))
      }
      destroy() {
        var UU;
        null === (UU = this.subscription) || void 0 === UU || UU.unsubscribe(), this.subscription = void 0
      }
    };
    Bg.defaultDisabledLevels = [fg.DEBUG, fg.TRACE, fg.LOG], Bg.consoleErrorPrefix = "console.error: ";
    const Vg = [];
    var rg = class extends Rg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = gg
      }
      initialize() {
        this.logDebug("Initializing"),
          function(UU) {
            const RU = window.onerror;
            window.onerror = function() {
              for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
              try {
                const {
                  value: RU,
                  type: gU,
                  stackFrames: pU
                } = Zg(tU), EU = tU[4];
                if (RU) {
                  const tU = {
                    type: gU,
                    stackFrames: pU
                  };
                  null != EU && (tU.originalError = EU), UU.pushError(new Error(RU), tU)
                }
              } finally {
                null === RU || void 0 === RU || RU.apply(window, tU)
              }
            }
          }(this.api),
          function(UU) {
            const RU = RU => {
              var gU;
              let tU, pU, EU = RU;
              if (EU.reason) EU = RU.reason;
              else if (null === (gU = RU.detail) || void 0 === gU ? void 0 : gU.reason) {
                var PU;
                EU = null === (PU = RU.detail) || void 0 === PU ? void 0 : PU.reason
              }
              let TU = [];
              VU(EU) ? (tU = `Non-Error promise rejection captured with value: ${String(EU)}`, pU = "UnhandledRejection") : [tU, pU, TU] = og(EU), tU && UU.pushError(new Error(tU), {
                type: pU,
                stackFrames: TU
              })
            };
            window.addEventListener("unhandledrejection", RU), Vg.push(RU)
          }(this.api)
      }
    };
    const Xg = "unknown";
    var vg = class extends Rg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = gg, this.waitingForActivation = !1, this.sendViewChangedEvent = UU => {
          var RU;
          if (this.waitingForActivation || document.prerendering) return;
          const gU = UU.view;
          if (gU && gU.name !== (null === (RU = this.notifiedView) || void 0 === RU ? void 0 : RU.name)) {
            var tU, pU, EU;
            const UU = null !== (tU = null === (pU = this.notifiedView) || void 0 === pU ? void 0 : pU.name) && void 0 !== tU ? tU : Xg;
            this.notifiedView = gU, this.api.pushEvent(mR, {
              fromView: UU,
              toView: null !== (EU = gU.name) && void 0 !== EU ? EU : Xg
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
    class dg {
      t;
      o = 0;
      i = [];
      l(UU) {
        if (UU.hadRecentInput) return;
        const RU = this.i[0],
          gU = this.i.at(-1);
        this.o && RU && gU && UU.startTime - gU.startTime < 1e3 && UU.startTime - RU.startTime < 5e3 ? (this.o += UU.value, this.i.push(UU)) : (this.o = UU.value, this.i = [UU]), this.t?.(UU)
      }
    }
    const Hg = () => {
        const UU = performance.getEntriesByType("navigation")[0];
        if (UU && UU.responseStart > 0 && UU.responseStart < performance.now()) return UU
      },
      Sg = UU => {
        if ("loading" === document.readyState) return "loading";
        const RU = Hg();
        if (RU) {
          if (UU < RU.domInteractive) return "loading";
          if (0 === RU.domContentLoadedEventStart || UU < RU.domContentLoadedEventStart) return "dom-interactive";
          if (0 === RU.domComplete || UU < RU.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      sg = UU => {
        const RU = UU.nodeName;
        return 1 === UU.nodeType ? RU.toLowerCase() : RU.toUpperCase().replace(/^#/, "")
      },
      yg = UU => {
        let RU = "";
        try {
          for (; 9 !== UU?.nodeType;) {
            const gU = UU,
              tU = gU.id ? "#" + gU.id : [sg(gU), ...Array.from(gU.classList ?? []).sort()].join(".");
            if (RU.length + tU.length > 99) return RU || tU;
            if (RU = RU ? tU + ">" + RU : tU, gU.id) break;
            UU = gU.parentNode
          }
        } catch {}
        return RU
      },
      kg = new WeakMap;

    function Fg(UU, RU) {
      let gU = kg.get(RU);
      return gU || (gU = new WeakMap, kg.set(RU, gU)), gU.get(UU) || gU.set(UU, new RU), gU.get(UU)
    }
    let ig = -1;
    const Ag = () => ig,
      zg = UU => {
        addEventListener("pageshow", (RU => {
          RU.persisted && (ig = RU.timeStamp, UU(RU))
        }), !0)
      },
      Mg = (UU, RU, gU, tU) => {
        let pU, EU;
        return PU => {
          RU.value >= 0 && (PU || tU) && (EU = RU.value - (pU ?? 0), (EU || void 0 === pU) && (pU = RU.value, RU.delta = EU, RU.rating = ((UU, RU) => UU > RU[1] ? "poor" : UU > RU[0] ? "needs-improvement" : "good")(RU.value, gU), UU(RU)))
        }
      },
      Dg = UU => {
        requestAnimationFrame((() => requestAnimationFrame((() => UU()))))
      },
      Lg = () => Hg()?.activationStart ?? 0;
    let Ng = -1;
    const lg = new Set,
      Og = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Ut = UU => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === UU.type)
            for (const UU of lg) UU();
          isFinite(Ng) || (Ng = "visibilitychange" === UU.type ? UU.timeStamp : 0, removeEventListener("prerenderingchange", Ut, !0))
        }
      },
      Rt = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Ng = 1 / 0), Ng < 0) {
          const UU = Lg(),
            RU = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((RU => "hidden" === RU.name && RU.startTime >= UU))?.startTime;
          Ng = RU ?? Og(), addEventListener("visibilitychange", Ut, !0), addEventListener("prerenderingchange", Ut, !0), zg((() => {
            setTimeout((() => {
              Ng = Og()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Ng
          },
          onHidden(UU) {
            lg.add(UU)
          }
        }
      },
      gt = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0,
          PU = arguments.length > 6 ? arguments[6] : void 0;
        const TU = Hg(),
          qU = TU?.navigationId || 0;
        let KU = "navigate";
        return gU ? KU = gU : Ag() >= 0 ? KU = "back-forward-cache" : TU && (document.prerendering || Lg() > 0 ? KU = "prerender" : document.wasDiscarded ? KU = "restore" : TU.type && (KU = TU.type.replace(/_/g, "-"))), {
          name: UU,
          value: RU,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: KU,
          navigationId: tU || qU,
          navigationInteractionId: pU,
          navigationURL: EU || TU?.name,
          navigationStartTime: PU || 0
        }
      },
      tt = function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const tU = UU.filter((UU => PerformanceObserver.supportedEntryTypes.includes(UU)));
          if (tU.length > 0) {
            const UU = new PerformanceObserver((UU => {
              queueMicrotask((() => {
                const gU = UU.getEntries();
                tU.length > 1 && gU.sort(((UU, RU) => UU.startTime + UU.duration - (RU.startTime + RU.duration))), RU(gU)
              }))
            }));
            for (const RU of tU) UU.observe({
              type: RU,
              buffered: !0,
              ...gU
            });
            return UU
          }
        } catch {}
      },
      pt = UU => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && UU && UU.reportSoftNavs,
      Et = (UU, RU) => {
        if (UU.set(RU.navigationId, RU), UU.size > 2) {
          const RU = UU.keys().next().value;
          void 0 !== RU && UU.delete(RU)
        }
      },
      Pt = UU => {
        let RU = !1;
        return () => {
          RU || (UU(), RU = !0)
        }
      };
    class Tt {
      u
    }
    const qt = UU => {
        document.prerendering ? addEventListener("prerenderingchange", UU, !0) : UU()
      },
      Kt = [1800, 3e3],
      ct = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gU = pt(RU);
        qt((() => {
          const tU = Fg(RU, Tt),
            pU = Rt();
          let EU, PU = gt("FCP");
          const TU = tt(["paint"], (UU => {
            for (const RU of UU) "first-contentful-paint" === RU.name && (TU.disconnect(), RU.startTime < pU.firstHiddenTime && (PU.value = Math.max(RU.startTime - Lg(), 0), PU.entries.push(RU), PU.navigationId = RU.navigationId || PU.navigationId, EU(!0)))
          }));
          TU && (EU = Mg(UU, PU, Kt, RU.reportAllChanges), zg((gU => {
            PU = gt("FCP", -1, "back-forward-cache", PU.navigationId, PU.navigationInteractionId, PU.navigationURL, Ag()), EU = Mg(UU, PU, Kt, RU.reportAllChanges), Dg((() => {
              PU.value = performance.now() - gU.timeStamp, EU(!0)
            }))
          }))), gU && tt(["soft-navigation"], (gU => {
            gU.forEach((gU => {
              tU.u && gU.navigationId && Et(tU.u, gU);
              const pU = Math.max((gU.presentationTime || gU.paintTime || 0) - gU.startTime, 0);
              PU = gt("FCP", pU, "soft-navigation", gU.navigationId, gU.interactionId, gU.name, gU.startTime), EU = Mg(UU, PU, Kt, RU.reportAllChanges), EU(!0)
            }))
          }), RU)
        }))
      },
      Gt = [.1, .25],
      jt = UU => UU.find((UU => 1 === UU.node?.nodeType)) || UU[0];
    let ut = 0,
      Ct = 1 / 0,
      ht = 0;
    const Qt = UU => {
      for (const RU of UU) RU.interactionId && (Ct = Math.min(Ct, RU.interactionId), ht = Math.max(ht, RU.interactionId), ut = ht ? (ht - Ct) / 7 + 1 : 0)
    };
    let et;
    const Wt = () => et ? ut : performance.interactionCount ?? 0;
    class ft {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Wt() - this.h
      }
      D() {
        this.h = Wt(), this.v.length = 0, this.p.clear()
      }
      S(UU) {
        const RU = this.T(),
          gU = Math.min(this.v.length - 1, Math.floor(RU / 50));
        return !RU || -1 !== gU || "soft-navigation" !== UU && "back-forward-cache" !== UU ? this.v[gU] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(UU) {
        if (this.m?.(UU), !UU.interactionId) return;
        const RU = this.v.at(-1);
        let gU = this.p.get(UU.interactionId);
        if (gU || this.v.length < 10 || UU.duration > RU.k) {
          if (gU ? UU.duration > gU.k ? (gU.entries = [UU], gU.k = UU.duration) : UU.duration === gU.k && UU.startTime === gU.entries[0].startTime && gU.entries.push(UU) : (gU = {
              id: UU.interactionId,
              entries: [UU],
              k: UU.duration
            }, this.p.set(gU.id, gU), this.v.push(gU)), this.v.sort(((UU, RU) => RU.k - UU.k)), this.v.length > 10) {
            const UU = this.v.splice(10);
            for (const RU of UU) this.p.delete(RU.id)
          }
          this.M?.(gU)
        }
      }
    }
    const xt = UU => {
        const RU = "requestIdleCallback" in globalThis ? 1e3 : 0,
          gU = globalThis.requestIdleCallback || setTimeout,
          tU = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) UU();
        else {
          const pU = Pt(UU);
          let EU = -1;
          const PU = () => {
            tU(EU), pU()
          };
          addEventListener("visibilitychange", PU, {
            once: !0,
            capture: !0
          }), EU = gU((() => {
            removeEventListener("visibilitychange", PU, {
              capture: !0
            }), pU()
          }), {
            timeout: RU
          })
        }
      },
      mt = [200, 500],
      It = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gU = Fg(RU = Object.assign({}, RU), ft);
        let tU = [],
          pU = [],
          EU = 0;
        const PU = new WeakMap,
          TU = new WeakMap;
        let qU = !1;
        const KU = () => {
            qU || (qU = !0, xt(cU))
          },
          cU = () => {
            const UU = new Set(gU.v.map((UU => PU.get(UU.entries[0])))),
              RU = pU.length - 10;
            pU = pU.filter(((gU, tU) => tU >= RU || UU.has(gU)));
            const TU = new Set;
            for (const gU of pU) {
              const UU = GU(gU.startTime, gU.processingEnd);
              for (const RU of UU) TU.add(RU)
            }
            const KU = tU.length - 10;
            tU = tU.filter(((UU, RU) => TU.has(UU) || RU >= KU && UU.startTime > EU)), qU = !1
          };
        gU.m = UU => {
          const gU = UU.startTime + UU.duration;
          let tU;
          EU = Math.max(EU, UU.processingEnd);
          for (let EU = pU.length - 1; EU >= 0; EU--) {
            const PU = pU[EU];
            if (Math.abs(gU - PU.renderTime) <= 8) {
              tU = PU, tU.startTime = Math.min(UU.startTime, tU.startTime), tU.processingStart = Math.min(UU.processingStart, tU.processingStart), tU.processingEnd = Math.max(UU.processingEnd, tU.processingEnd), RU.includeProcessedEventEntries && tU.entries.push(UU);
              break
            }
          }
          tU || (tU = {
            startTime: UU.startTime,
            processingStart: UU.processingStart,
            processingEnd: UU.processingEnd,
            renderTime: gU,
            entries: RU.includeProcessedEventEntries ? [UU] : []
          }, pU.push(tU)), UU.interactionId && PU.set(UU, tU), KU()
        }, gU.M = UU => {
          if (!TU.get(UU)) {
            const gU = UU.entries.find((UU => UU.target))?.target;
            if (gU) {
              const tU = RU.generateTarget?.(gU) ?? yg(gU);
              TU.set(UU, tU)
            } else {
              const RU = UU.entries.find((UU => UU.targetSelector))?.targetSelector;
              RU && TU.set(UU, RU)
            }
          }
        };
        const GU = (UU, RU) => {
          const gU = [];
          for (const pU of tU)
            if (!(pU.startTime + pU.duration < UU)) {
              if (pU.startTime > RU) break;
              gU.push(pU)
            } return gU
        };
        tt(["long-animation-frame"], (UU => {
            tU = tU.concat(UU), KU()
          }), RU),
          function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const gU = Rt();
            qt((() => {
              "interactionCount" in performance || et || (et = tt(["event"], Qt, {
                durationThreshold: 0
              }));
              let tU, pU = gt("INP");
              const EU = Fg(RU, ft),
                PU = (gU, PU, TU, qU, KU) => {
                  EU.D(), pU = gt("INP", -1, gU, PU, TU, qU, KU), tU = Mg(UU, pU, mt, RU.reportAllChanges)
                },
                TU = () => {
                  const UU = EU.S(pU.navigationType);
                  UU && UU.k !== pU.value && (pU.value = UU.k, pU.entries = UU.entries, tU())
                },
                qU = UU => {
                  TU(), tU(!0), PU("soft-navigation", UU.navigationId, UU.interactionId, UU.name, UU.startTime)
                },
                KU = function(UU) {
                  let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  xt((() => {
                    for (const RU of UU) "soft-navigation" !== RU.entryType ? EU.l(RU) : qU(RU);
                    TU(), RU && tU(!0)
                  }))
                },
                cU = ["event", "first-input"];
              pt(RU) && cU.push("soft-navigation");
              const GU = tt(cU, KU, {
                ...RU,
                durationThreshold: RU.durationThreshold ?? 40
              });
              tU = Mg(UU, pU, mt, RU.reportAllChanges), GU && (gU.onHidden((() => {
                KU(GU.takeRecords(), !0)
              })), zg((() => {
                PU("back-forward-cache", pU.navigationId, pU.navigationInteractionId, pU.navigationURL, Ag())
              })))
            }))
          }((RU => {
            UU((UU => {
              if (0 === UU.entries.length) {
                const RU = UU.navigationStartTime || 0,
                  gU = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: UU.value,
                    loadState: Sg(RU)
                  };
                return Object.assign(UU, {
                  attribution: gU
                })
              }
              const RU = UU.entries[0],
                tU = PU.get(RU),
                pU = Math.max(tU.processingStart, RU.startTime),
                EU = Math.max(RU.startTime + RU.duration, pU),
                qU = Math.min(tU.processingEnd, EU),
                KU = tU.entries.sort(((UU, RU) => UU.processingStart - RU.processingStart)),
                cU = GU(RU.startTime, qU),
                jU = gU.p.get(RU.interactionId),
                uU = {
                  interactionTarget: TU.get(jU),
                  interactionType: RU.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: RU.startTime,
                  nextPaintTime: EU,
                  processedEventEntries: KU,
                  longAnimationFrameEntries: cU,
                  inputDelay: pU - RU.startTime,
                  processingDuration: qU - pU,
                  presentationDelay: EU - qU,
                  loadState: Sg(RU.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (UU => {
                const RU = UU.interactionTime,
                  gU = UU.nextPaintTime;
                if (!UU.longAnimationFrameEntries?.length || !RU || !gU) return;
                const tU = UU.inputDelay,
                  pU = UU.processingDuration;
                let EU, PU, TU = 0,
                  qU = 0,
                  KU = 0,
                  cU = 0;
                for (const uU of UU.longAnimationFrameEntries) {
                  qU = qU + uU.startTime + uU.duration - uU.styleAndLayoutStart;
                  for (const UU of uU.scripts) {
                    const gU = UU.startTime + UU.duration;
                    if (gU < RU) continue;
                    const KU = gU - Math.max(RU, UU.startTime),
                      GU = UU.duration ? KU / UU.duration * UU.forcedStyleAndLayoutDuration : 0;
                    TU += KU - GU, qU += GU, KU > cU && (PU = UU.startTime < RU + tU ? "input-delay" : UU.startTime >= RU + tU + pU ? "presentation-delay" : "processing-duration", EU = UU, cU = KU)
                  }
                }
                const GU = UU.longAnimationFrameEntries.at(-1),
                  jU = GU ? GU.startTime + GU.duration : 0;
                jU >= RU + tU + pU && (KU = gU - jU), EU && PU && (UU.longestScript = {
                  entry: EU,
                  subpart: PU,
                  intersectingDuration: cU
                }), UU.totalScriptDuration = TU, UU.totalStyleAndLayoutDuration = qU, UU.totalPaintDuration = KU, UU.totalUnattributedDuration = gU - RU - TU - qU - KU
              })(uU), Object.assign(UU, {
                attribution: uU
              })
            })(RU))
          }), RU)
      };
    class Jt {
      m;
      u;
      l(UU) {
        this.m?.(UU)
      }
    }
    const wt = [2500, 4e3];
    let nt = 50;
    const bt = [];
    tt(["resource"], (UU => {
      for (const RU of UU) bt.push(RU), bt.length > nt && bt.shift()
    }));
    const ot = [800, 1800],
      Zt = UU => {
        document.prerendering ? qt((() => Zt(UU))) : "complete" !== document.readyState ? addEventListener("load", (() => Zt(UU)), !0) : setTimeout(UU)
      },
      Yt = "load_state",
      Bt = "time_to_first_byte";
    var Vt = class {
        constructor(UU, RU) {
          this.corePushMeasurement = UU, this.webVitalConfig = RU
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var UU;
          ! function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const gU = Fg(RU = Object.assign({}, RU), dg),
              tU = new WeakMap;
            gU.t = UU => {
                if (UU?.sources?.length) {
                  const gU = jt(UU.sources),
                    pU = gU?.node;
                  if (pU) {
                    const UU = RU.generateTarget?.(pU) ?? yg(pU);
                    tU.set(gU, UU)
                  }
                }
              },
              function(UU) {
                let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const gU = Rt();
                ct(Pt((() => {
                  let tU, pU = gt("CLS", 0);
                  const EU = Fg(RU, dg),
                    PU = (gU, PU, TU, qU, KU) => {
                      pU = gt("CLS", 0, gU, PU, TU, qU, KU), EU.o = 0, tU = Mg(UU, pU, Gt, RU.reportAllChanges)
                    },
                    TU = function() {
                      let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      EU.o > pU.value && (pU.value = EU.o, pU.entries = EU.i), tU(UU)
                    },
                    qU = UU => {
                      TU(!0), PU("soft-navigation", UU.navigationId, UU.interactionId, UU.name, UU.startTime)
                    },
                    KU = UU => {
                      for (const RU of UU) "soft-navigation" !== RU.entryType ? EU.l(RU) : qU(RU);
                      TU()
                    },
                    cU = ["layout-shift"];
                  pt(RU) && cU.push("soft-navigation");
                  const GU = tt(cU, KU);
                  GU && (tU = Mg(UU, pU, Gt, RU.reportAllChanges), gU.onHidden((() => {
                    KU(GU.takeRecords()), tU(!0)
                  })), zg((() => {
                    PU("back-forward-cache", pU.navigationId, pU.navigationInteractionId, pU.navigationURL, Ag()), Dg(tU)
                  })), setTimeout(tU))
                })))
              }((RU => {
                UU((UU => {
                  let RU = {};
                  if (UU.entries.length) {
                    const gU = UU.entries.reduce(((UU, RU) => UU.value > RU.value ? UU : RU));
                    if (gU?.sources?.length) {
                      const UU = jt(gU.sources);
                      UU && (RU = {
                        largestShiftTarget: tU.get(UU),
                        largestShiftTime: gU.startTime,
                        largestShiftValue: gU.value,
                        largestShiftSource: UU,
                        largestShiftEntry: gU,
                        loadState: Sg(gU.startTime)
                      })
                    }
                  }
                  return Object.assign(UU, {
                    attribution: RU
                  })
                })(RU))
              }), RU)
          }((UU => {
            const {
              loadState: RU,
              largestShiftValue: gU,
              largestShiftTime: tU,
              largestShiftTarget: pU
            } = UU.attribution, EU = this.buildInitialValues(UU);
            this.addIfPresent(EU, "largest_shift_value", gU), this.addIfPresent(EU, "largest_shift_time", tU);
            const PU = this.buildInitialContext(UU);
            this.addIfPresent(PU, Yt, RU), this.addIfPresent(PU, "largest_shift_target", pU), this.pushMeasurement(EU, PU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureFCP() {
          var UU;
          ! function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const gU = Fg(RU = Object.assign({}, RU), Tt);
            pt(RU) && (gU.u = new Map), ct((RU => {
              UU((UU => {
                let RU = {
                  timeToFirstByte: 0,
                  firstByteToFCP: UU.value,
                  loadState: Sg(Ag())
                };
                if ("soft-navigation" !== UU.navigationType) {
                  if (UU.entries.length) {
                    const gU = Hg(),
                      tU = UU.entries.at(-1);
                    if (gU) {
                      const pU = gU.responseStart,
                        EU = gU.activationStart || 0,
                        PU = Math.max(0, pU - EU);
                      RU = {
                        timeToFirstByte: PU,
                        firstByteToFCP: UU.value - PU,
                        loadState: Sg(UU.entries[0].startTime),
                        navigationEntry: gU,
                        fcpEntry: tU
                      }
                    }
                  }
                } else {
                  const tU = gU.u?.get(UU.navigationId);
                  tU && (RU = {
                    timeToFirstByte: 0,
                    firstByteToFCP: UU.value,
                    loadState: "complete",
                    navigationEntry: tU
                  })
                }
                return Object.assign(UU, {
                  attribution: RU
                })
              })(RU))
            }), RU)
          }((UU => {
            const {
              firstByteToFCP: RU,
              timeToFirstByte: gU,
              loadState: tU
            } = UU.attribution, pU = this.buildInitialValues(UU);
            this.addIfPresent(pU, "first_byte_to_fcp", RU), this.addIfPresent(pU, Bt, gU);
            const EU = this.buildInitialContext(UU);
            this.addIfPresent(EU, Yt, tU), this.pushMeasurement(pU, EU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureINP() {
          var UU;
          It((UU => {
            var RU;
            const {
              interactionTime: gU,
              presentationDelay: tU,
              inputDelay: pU,
              processingDuration: EU,
              nextPaintTime: PU,
              loadState: TU,
              interactionTarget: qU,
              interactionType: KU,
              totalScriptDuration: cU,
              totalStyleAndLayoutDuration: GU,
              totalPaintDuration: jU,
              totalUnattributedDuration: uU,
              longestScript: CU
            } = UU.attribution, hU = this.buildInitialValues(UU);
            this.addIfPresent(hU, "interaction_time", gU), this.addIfPresent(hU, "presentation_delay", tU), this.addIfPresent(hU, "input_delay", pU), this.addIfPresent(hU, "processing_duration", EU), this.addIfPresent(hU, "next_paint_time", PU), this.addNumberIfDefined(hU, "total_script_duration", cU), this.addNumberIfDefined(hU, "total_style_and_layout_duration", GU), this.addNumberIfDefined(hU, "total_paint_duration", jU), this.addNumberIfDefined(hU, "total_unattributed_duration", uU), this.addNumberIfDefined(hU, "longest_script_intersecting_duration", null === CU || void 0 === CU ? void 0 : CU.intersectingDuration);
            const QU = this.buildInitialContext(UU);
            this.addIfPresent(QU, Yt, TU), this.addIfPresent(QU, "interaction_target", qU), this.addIfPresent(QU, "interaction_type", KU), this.addIfPresent(QU, "longest_script_subpart", null === CU || void 0 === CU ? void 0 : CU.subpart), this.addIfPresent(QU, "longest_script_invoker_type", null === CU || void 0 === CU ? void 0 : CU.entry.invokerType), (null === (RU = this.webVitalConfig) || void 0 === RU ? void 0 : RU.trackAttributionSources) && (this.addIfPresent(QU, "longest_script_invoker", null === CU || void 0 === CU ? void 0 : CU.entry.invoker), this.addIfPresent(QU, "longest_script_source_url", null === CU || void 0 === CU ? void 0 : CU.entry.sourceURL), this.addIfPresent(QU, "longest_script_source_function_name", null === CU || void 0 === CU ? void 0 : CU.entry.sourceFunctionName), this.addIfPresent(QU, "longest_script_source_char_position", void 0 !== (null === CU || void 0 === CU ? void 0 : CU.entry.sourceCharPosition) ? String(CU.entry.sourceCharPosition) : void 0)), this.pushMeasurement(hU, QU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureLCP() {
          var UU;
          ! function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (RU = Object.assign({}, RU)).resourceBufferSize && (nt = RU.resourceBufferSize);
            const gU = Fg(RU, Jt),
              tU = new WeakMap;
            pt(RU) && (gU.u = new Map), gU.m = UU => {
                const gU = UU.element;
                if (gU) {
                  const pU = RU.generateTarget?.(gU) ?? yg(gU);
                  tU.set(UU, pU)
                } else UU.id && tU.set(UU, `#${UU.id}`)
              },
              function(UU) {
                let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  gU = !1;
                const tU = pt(RU);
                qt((() => {
                  let pU, EU = Rt(),
                    PU = gt("LCP");
                  const TU = Fg(RU, Jt),
                    qU = (tU, TU, qU, KU, cU) => {
                      PU = gt("LCP", -1, tU, TU, qU, KU, cU), pU = Mg(UU, PU, wt, RU.reportAllChanges), gU = !1, "soft-navigation" === tU && (EU = Rt(!0))
                    },
                    KU = UU => {
                      TU.u && UU.navigationId && Et(TU.u, UU), gU || pU(!0), qU("soft-navigation", UU.navigationId, UU.interactionId, UU.name, UU.startTime);
                      const RU = UU.getLargestInteractionContentfulPaint?.();
                      RU && cU([RU])
                    },
                    cU = UU => {
                      RU.reportAllChanges || tU || (UU = UU.slice(-1));
                      for (const RU of UU) {
                        if (!RU) continue;
                        if ("soft-navigation" === RU.entryType) {
                          KU(RU);
                          continue
                        }
                        let UU = 0,
                          gU = [],
                          tU = RU.startTime;
                        if ("largest-contentful-paint" === RU.entryType) UU = Math.max(RU.startTime - Lg(), 0), TU.l(RU), gU = [RU];
                        else if ("interaction-contentful-paint" === RU.entryType) {
                          const pU = RU;
                          if (!PU.navigationId) continue;
                          if ("interactionId" in pU && pU.interactionId != PU.navigationInteractionId) continue;
                          tU = pU.largestContentfulPaint?.renderTime || 0, UU = Math.max(tU - RU.startTime, 0), pU.largestContentfulPaint && (TU.l(pU.largestContentfulPaint), gU = [pU.largestContentfulPaint])
                        }
                        tU < EU.firstHiddenTime && (PU.value = UU, PU.entries = gU, pU())
                      }
                    },
                    GU = ["largest-contentful-paint"];
                  tU && GU.push("interaction-contentful-paint", "soft-navigation");
                  const jU = tt(GU, cU);
                  if (jU) {
                    pU = Mg(UU, PU, wt, RU.reportAllChanges);
                    const EU = ["keydown", "click", "visibilitychange"],
                      TU = UU => {
                        if (UU.isTrusted && !gU) {
                          const UU = PU.id;
                          xt((() => {
                            if (!gU) {
                              if (!tU) {
                                jU.disconnect();
                                for (const UU of EU) removeEventListener(UU, TU, {
                                  capture: !0
                                })
                              }
                              UU === PU.id && (gU = !0, pU(!0))
                            }
                          }))
                        }
                      };
                    for (const UU of EU) addEventListener(UU, TU, {
                      capture: !0
                    });
                    zg((tU => {
                      qU("back-forward-cache", PU.navigationId, PU.navigationInteractionId, PU.navigationURL, Ag()), pU = Mg(UU, PU, wt, RU.reportAllChanges), Dg((() => {
                        PU.value = performance.now() - tU.timeStamp, gU = !0, pU(!0)
                      }))
                    }))
                  }
                }))
              }((RU => {
                UU((UU => {
                  let RU = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: UU.value
                  };
                  if (UU.entries.length) {
                    const pU = UU.entries.at(-1),
                      EU = UU => UU.name === pU.url && (UU.requestStart || UU.startTime) <= pU.startTime,
                      PU = pU.url && (bt.findLast(EU) || performance.getEntriesByType("resource").findLast(EU));
                    let TU;
                    RU.target = tU.get(pU), RU.lcpEntry = pU, pU.url && (RU.url = pU.url), PU && (RU.lcpResourceEntry = PU);
                    let qU = 0,
                      KU = 0;
                    if ("soft-navigation" !== UU.navigationType ? (TU = Hg(), qU = TU?.activationStart ?? 0, KU = TU?.responseStart ?? 0) : (qU = UU.navigationStartTime || 0, TU = gU.u?.get(UU.navigationId)), TU) {
                      const gU = Math.max(0, KU - qU),
                        tU = Math.max(gU, PU ? (PU.requestStart || PU.startTime) - qU : 0),
                        pU = Math.min(UU.value, Math.max(tU, PU ? PU.responseEnd - qU : 0));
                      RU = {
                        ...RU,
                        timeToFirstByte: gU,
                        resourceLoadDelay: tU - gU,
                        resourceLoadDuration: pU - tU,
                        elementRenderDelay: UU.value - pU,
                        navigationEntry: TU
                      }
                    }
                  }
                  return Object.assign(UU, {
                    attribution: RU
                  })
                })(RU))
              }), RU)
          }((UU => {
            var RU;
            const {
              elementRenderDelay: gU,
              resourceLoadDelay: tU,
              resourceLoadDuration: pU,
              timeToFirstByte: EU,
              target: PU,
              url: TU,
              lcpResourceEntry: qU
            } = UU.attribution, KU = this.buildInitialValues(UU);
            this.addIfPresent(KU, "element_render_delay", gU), this.addIfPresent(KU, "resource_load_delay", tU), this.addIfPresent(KU, "resource_load_duration", pU), this.addIfPresent(KU, Bt, EU);
            const cU = this.buildInitialContext(UU);
            this.addIfPresent(cU, "element", PU), (null === (RU = this.webVitalConfig) || void 0 === RU ? void 0 : RU.trackAttributionSources) && (this.addIfPresent(cU, "resource_url", TU), this.addIfPresent(cU, "resource_delivery_type", null === qU || void 0 === qU ? void 0 : qU.deliveryType), this.addIfPresent(cU, "resource_initiator_type", null === qU || void 0 === qU ? void 0 : qU.initiatorType)), this.pushMeasurement(KU, cU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureTTFB() {
          var UU;
          ! function(UU) {
            ! function(UU) {
              let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const gU = pt(RU);
              let tU = gt("TTFB"),
                pU = Mg(UU, tU, ot, RU.reportAllChanges);
              Zt((() => {
                const EU = Hg();
                if (EU) {
                  const PU = EU.responseStart;
                  tU.value = Math.max(PU - Lg(), 0), tU.entries = [EU], pU(!0), zg((() => {
                    tU = gt("TTFB", 0, "back-forward-cache", tU.navigationId, tU.navigationInteractionId, tU.navigationURL, Ag()), pU = Mg(UU, tU, ot, RU.reportAllChanges), pU(!0)
                  })), gU && tt(["soft-navigation"], (gU => {
                    gU.forEach((gU => {
                      gU.navigationId && (tU = gt("TTFB", 0, "soft-navigation", gU.navigationId, gU.interactionId, gU.name, gU.startTime), tU.entries = [gU], pU = Mg(UU, tU, ot, RU.reportAllChanges), pU(!0))
                    }))
                  }), RU)
                }
              }))
            }((RU => {
              UU((UU => {
                const RU = UU.entries[0];
                let gU = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: RU
                };
                if (UU.entries.length && RU instanceof PerformanceNavigationTiming) {
                  const tU = RU.activationStart || 0,
                    pU = Math.max((RU.workerStart || RU.fetchStart || 0) - tU, 0),
                    EU = Math.max(RU.domainLookupStart - tU, 0),
                    PU = Math.max(RU.connectStart - tU, 0),
                    TU = Math.max(RU.connectEnd - tU, 0);
                  gU = {
                    waitingDuration: pU,
                    cacheDuration: EU - pU,
                    dnsDuration: PU - EU,
                    connectionDuration: TU - PU,
                    requestDuration: UU.value - TU,
                    navigationEntry: RU
                  }
                }
                return Object.assign(UU, {
                  attribution: gU
                })
              })(RU))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((UU => {
            const {
              dnsDuration: RU,
              connectionDuration: gU,
              requestDuration: tU,
              waitingDuration: pU,
              cacheDuration: EU
            } = UU.attribution, PU = this.buildInitialValues(UU);
            this.addIfPresent(PU, "dns_duration", RU), this.addIfPresent(PU, "connection_duration", gU), this.addIfPresent(PU, "request_duration", tU), this.addIfPresent(PU, "waiting_duration", pU), this.addIfPresent(PU, "cache_duration", EU);
            const TU = this.buildInitialContext(UU);
            this.pushMeasurement(PU, TU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        buildInitialValues(UU) {
          return {
            [UU.name.toLowerCase()]: UU.value,
            delta: UU.delta
          }
        }
        buildInitialContext(UU) {
          var RU;
          const gU = null !== (RU = UR("com.grafana.faro.lastNavigationId", NU)) && void 0 !== RU ? RU : Xg;
          return {
            id: UU.id,
            rating: UU.rating,
            navigation_type: UU.navigationType,
            navigation_entry_id: gU
          }
        }
        pushMeasurement(UU, RU) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: UU
          }, {
            context: RU
          })
        }
        addIfPresent(UU, RU, gU) {
          gU && (UU[RU] = gU)
        }
        addNumberIfDefined(UU, RU, gU) {
          void 0 !== gU && (UU[RU] = gU)
        }
      },
      rt = class extends Rg {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = gg
        }
        initialize() {
          this.logDebug("Initializing"), new Vt(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Xt = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function vt() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const RU of UU)
        if ("traceparent" === RU.name) {
          if (!Xt.test(RU.description)) continue;
          const [, UU, gU] = RU.description.split("-");
          if (null != UU && null != gU) return {
            traceId: UU,
            spanId: gU
          };
          break
        }
    }

    function dt(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: gU,
        monoNow: tU
      } = RU;
      return Math.min(gU, gU - (tU - UU))
    }

    function Ht(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [gU, tU] of Object.entries(RU)) {
        const RU = UU[gU];
        return null != RU && (aU(tU) ? tU.includes(RU) : RU === tU)
      }
      return !0
    }

    function St(UU) {
      const {
        connectEnd: RU,
        connectStart: gU,
        decodedBodySize: tU,
        domainLookupEnd: pU,
        domainLookupStart: EU,
        duration: PU,
        encodedBodySize: TU,
        fetchStart: qU,
        initiatorType: KU,
        name: cU,
        nextHopProtocol: GU,
        redirectEnd: jU,
        redirectStart: uU,
        renderBlockingStatus: CU,
        requestStart: hU,
        responseEnd: QU,
        responseStart: eU,
        responseStatus: WU,
        secureConnectionStart: fU,
        transferSize: xU,
        workerStart: mU
      } = UU;
      return {
        name: cU,
        httpHost: yt(cU),
        duration: kt(PU),
        tcpHandshakeTime: kt(RU - gU),
        dnsLookupTime: kt(pU - EU),
        tlsNegotiationTime: kt(RU - fU),
        responseStatus: kt(WU),
        redirectTime: kt(jU - uU),
        requestTime: kt(eU - hU),
        responseTime: kt(QU - eU),
        fetchTime: kt(QU - qU),
        serviceWorkerTime: kt(mU > 0 ? qU - mU : 0),
        decodedBodySize: kt(tU),
        encodedBodySize: kt(TU),
        cacheHitStatus: function() {
          let UU = "fullLoad";
          0 === xU ? tU > 0 && (UU = "cache") : null != WU ? 304 === WU && (UU = "conditionalFetch") : TU > 0 && xU < TU && (UU = "conditionalFetch");
          return UU
        }(),
        renderBlockingStatus: kt(CU),
        protocol: GU,
        initiatorType: KU,
        visibilityState: document.visibilityState,
        ttfb: kt(eU - hU),
        transferSize: kt(xU)
      }
    }

    function st(UU) {
      const {
        activationStart: RU,
        domComplete: gU,
        domContentLoadedEventEnd: tU,
        domContentLoadedEventStart: pU,
        domInteractive: EU,
        fetchStart: PU,
        loadEventEnd: TU,
        loadEventStart: qU,
        responseStart: KU,
        type: cU
      } = UU, GU = function() {
        var UU;
        return null != (null === (UU = performance.timing) || void 0 === UU ? void 0 : UU.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return cR(cR({}, St(UU)), {}, {
        pageLoadTime: kt(gU - PU),
        documentParsingTime: kt(GU ? EU - GU : null),
        domProcessingTime: kt(gU - EU),
        domContentLoadHandlerTime: kt(tU - pU),
        onLoadTime: kt(TU - qU),
        ttfb: kt(Math.max(KU - (null !== RU && void 0 !== RU ? RU : 0), 0)),
        type: cU
      })
    }

    function yt(UU) {
      try {
        return new URL(UU).host || Xg
      } catch (RU) {
        return Xg
      }
    }

    function kt(UU) {
      return null == UU ? Xg : "number" === typeof UU ? Math.round(UU > 0 ? UU : 0).toString() : UU.toString()
    }
    const Ft = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function it(UU, RU, gU, tU, pU, EU, PU) {
      try {
        var TU = UU[EU](PU),
          qU = TU.value
      } catch (UU) {
        return void gU(UU)
      }
      TU.done ? RU(qU) : Promise.resolve(qU).then(tU, pU)
    }

    function At(UU) {
      return function() {
        var RU = this,
          gU = arguments;
        return new Promise((function(tU, pU) {
          var EU = UU.apply(RU, gU);

          function PU(UU) {
            it(EU, tU, pU, PU, TU, "next", UU)
          }

          function TU(UU) {
            it(EU, tU, pU, PU, TU, "throw", UU)
          }
          PU(void 0)
        }))
      }
    }
    const zt = new Wg;
    var Mt = class extends Rg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = gg
      }
      initialize() {
        var UU = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let RU = !1;
        const gU = () => {
          ! function(UU) {
            if ("complete" === document.readyState) UU();
            else {
              const RU = () => {
                "complete" === document.readyState && (UU(), document.removeEventListener("readystatechange", RU))
              };
              document.addEventListener("readystatechange", RU)
            }
          }(At((function*() {
            if (RU) return;
            const gU = UU.api.pushEvent,
              {
                faroNavigationId: tU
              } = yield function(UU) {
                let RU;
                const gU = new Promise((UU => {
                  RU = UU
                }));
                return new PerformanceObserver((gU => {
                  var tU;
                  const [pU] = gU.getEntries();
                  if (null == pU || DU(pU.name)) return;
                  const EU = pU.toJSON();
                  let PU = vt(null === EU || void 0 === EU ? void 0 : EU.serverTiming);
                  const TU = null !== (tU = UR("com.grafana.faro.lastNavigationId", NU)) && void 0 !== tU ? tU : Xg,
                    qU = cR(cR({}, st(EU)), {}, {
                      faroNavigationId: eR(),
                      faroPreviousNavigationId: TU
                    });
                  RR("com.grafana.faro.lastNavigationId", qU.faroNavigationId, NU), UU("faro.performance.navigation", qU, void 0, {
                    spanContext: PU,
                    timestampOverwriteMs: dt(EU.startTime)
                  }), RU(qU)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), gU
              }(gU);
            RU || null == tU || function(UU, RU, gU, tU) {
              const pU = tU.trackResources;
              new PerformanceObserver((tU => {
                const EU = tU.getEntries(),
                  PU = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const TU of EU) {
                  if (DU(TU.name)) continue;
                  null === gU || void 0 === gU || gU.notify({
                    type: "resource"
                  });
                  const tU = TU.toJSON();
                  let EU = vt(null === tU || void 0 === tU ? void 0 : tU.serverTiming);
                  (null == pU && Ht(tU, Ft) || pU) && RU("faro.performance.resource", cR(cR({}, St(tU)), {}, {
                    faroNavigationId: UU,
                    faroResourceId: eR()
                  }), void 0, {
                    spanContext: EU,
                    timestampOverwriteMs: dt(tU.startTime, PU)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(tU, gU, zt, UU.config)
          })))
        };
        this.cancelInitialization = () => {
          RU = !0, document.removeEventListener("prerenderingchange", gU)
        }, document.prerendering ? document.addEventListener("prerenderingchange", gU, {
          once: !0
        }) : gU()
      }
      destroy() {
        var UU;
        null === (UU = this.cancelInitialization) || void 0 === UU || UU.call(this), this.cancelInitialization = void 0
      }
    };
    const Dt = "data-faro-user-action-name",
      Lt = Dt.replace(/-name$/, "-timeout"),
      Nt = 1e3;

    function lt(UU) {
      return `data-${(UU.startsWith("data-")?UU.slice(5):UU).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Ot(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FR;
      if (void 0 === UU) return RU;
      let tU = NaN;
      try {
        tU = "string" === typeof UU && "" === UU.trim() ? NaN : Number(UU)
      } catch (pU) {}
      return !Number.isFinite(tU) || tU <= 0 ? (gU(`initialActivityTimeout must be a finite number greater than zero; using ${RU} ms`), RU) : tU > 1e3 ? (gU(`initialActivityTimeout cannot exceed ${Nt} ms; clamping to the maximum`), Nt) : tU
    }

    function Up(UU, RU, gU) {
      return void 0 !== UU && window.clearTimeout(UU), window.setTimeout((() => {
        RU()
      }), gU)
    }

    function Rp(UU) {
      return UU.type === eg
    }
    let gp, tp;

    function pp() {
      return gp || (gp = new Wg), tp || (tp = new MutationObserver(((UU, RU) => {
        gp.notify({
          type: "dom-mutation"
        })
      })), tp.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), gp
    }
    const Ep = "fetch",
      Pp = "xhr";
    let Tp, qp, Kp, cp, Gp = !1;

    function jp() {
      if (Tp) return Tp;

      function UU(UU) {
        Tp.notify({
          type: Qg,
          request: UU
        })
      }

      function RU(UU) {
        Tp.notify({
          type: eg,
          request: UU
        })
      }
      return Tp = new Wg, Gp || (! function(UU) {
        let {
          onRequestEnd: RU,
          onRequestStart: gU
        } = UU;
        Kp || (Kp = window.fetch);
        window.fetch = function() {
          var UU, tU;
          const pU = null !== (UU = LU(arguments[0])) && void 0 !== UU ? UU : "",
            EU = DU(pU),
            PU = (null !== (tU = arguments[1]) && void 0 !== tU ? tU : {}).method,
            TU = eR();
          return EU || gU({
            url: pU,
            method: PU,
            requestId: TU,
            apiType: Ep
          }), Kp.apply(this, arguments).then((UU => (EU || RU({
            url: pU,
            method: PU,
            requestId: TU,
            apiType: Ep
          }), UU))).catch((UU => {
            throw EU || RU({
              url: pU,
              method: PU,
              requestId: TU,
              apiType: Ep
            }), UU
          }))
        }
      }({
        onRequestStart: UU,
        onRequestEnd: RU
      }), function(UU) {
        let {
          onRequestStart: RU,
          onRequestEnd: gU
        } = UU;
        qp || (qp = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const UU = arguments[1],
            tU = DU(UU),
            pU = arguments[0],
            EU = eR();
          this.addEventListener("loadstart", (function() {
            tU || RU({
              url: UU,
              method: pU,
              requestId: EU,
              apiType: Pp
            })
          })), this.addEventListener("load", (function() {
            tU || gU({
              url: UU,
              method: pU,
              requestId: EU,
              apiType: Pp
            })
          })), this.addEventListener("error", (function() {
            tU || gU({
              url: UU,
              method: pU,
              requestId: EU,
              apiType: Pp
            })
          })), this.addEventListener("abort", (function() {
            tU || gU({
              url: UU,
              method: pU,
              requestId: EU,
              apiType: Pp
            })
          })), qp.apply(this, arguments)
        }
      }({
        onRequestStart: UU,
        onRequestEnd: RU
      }), Gp = !0), Tp
    }
    let Cp, hp = !1;
    let Qp = function(UU) {
      return UU[UU.Started = 0] = "Started", UU[UU.Halted = 1] = "Halted", UU[UU.Cancelled = 2] = "Cancelled", UU[UU.Ended = 3] = "Ended", UU
    }({});
    var ep = class {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = UU, this.logDebug = RU, this.initialActivityTimeout = gU, this.http = jp(), this.dom = pp(), this.perf = (cp || (cp = new Wg), hp || (Cp = zt.subscribe((UU => {
          "resource" === UU.type && cp.notify({
            type: "resource-entry"
          })
        })), hp = !0), cp), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Wg).merge(this.http, this.dom, this.perf).takeWhile((() => [Qp.Started, Qp.Halted].includes(this.userAction.getState()))).filter((UU => !!(this.userAction.getState() !== Qp.Halted || Rp(UU) && this.runningRequests.has(UU.request.requestId)))).subscribe((UU => {
          (function(UU) {
            return UU.type === Qg
          })(UU) && this.runningRequests.set(UU.request.requestId, UU.request), Rp(UU) && this.runningRequests.delete(UU.request.requestId), Rp(UU) ? this.userAction.getState() === Qp.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((UU => [Qp.Ended, Qp.Cancelled].includes(UU))).first().subscribe((() => this.cleanup())), this.startupTid = Up(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Qp.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Qp.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Up(this.haltTid, (() => {
          this.userAction.getState() === Qp.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var UU, RU;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (UU = this.allMonitorsSub) || void 0 === UU || UU.unsubscribe(), null === (RU = this.stateSub) || void 0 === RU || RU.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(UU) {
        void 0 !== UU && window.clearTimeout(UU)
      }
    };

    function Wp(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FR;
      var gU;
      const {
        api: tU,
        config: pU,
        internalLogger: EU
      } = UU, PU = Ot(null === (gU = pU.userActionsInstrumentation) || void 0 === gU ? void 0 : gU.initialActivityTimeout, 100, RU);
      return {
        processUserEvent: function(UU) {
          var RU, gU;
          const EU = null !== (RU = null === (gU = pU.userActionsInstrumentation) || void 0 === gU ? void 0 : gU.dataAttributeName) && void 0 !== RU ? RU : Dt,
            PU = UU.target;
          if (!(PU instanceof Element)) return;
          const TU = function(UU, RU) {
              let gU = UU;
              for (; gU;) {
                if (gU.hasAttribute(RU)) return gU;
                gU = gU.parentElement
              }
              return null
            }(PU, lt(EU)),
            qU = function(UU, RU) {
              if (!UU) return;
              const gU = function(UU) {
                  return lt(UU).slice(5).replace(/-(.)/g, ((UU, RU) => RU.toUpperCase()))
                }(RU),
                tU = UU.dataset;
              for (const pU in tU)
                if (pU === gU) return tU[pU]
            }(TU, EU);
          if (!TU || !qU) return;
          const KU = function(UU, RU) {
            const gU = UU.getAttribute(function(UU) {
              const RU = lt(UU);
              return RU.endsWith("-name") ? `${RU.slice(0,-5)}-timeout` : `${RU}-timeout`
            }(RU));
            return null === gU ? void 0 : Number(gU)
          }(TU, EU);
          tU.startUserAction(qU, {}, {
            triggerName: UU.type,
            initialActivityTimeout: KU
          })
        },
        processUserActionStarted: function(UU, gU) {
          const tU = UU,
            pU = Ot(gU, PU, RU);
          new ep(tU, EU.debug, pU).attach()
        }
      }
    }
    const fp = "user_action_start",
      xp = {
        Normal: "normal",
        Critical: "critical"
      };
    var mp = class {
        constructor() {
          this.buffer = []
        }
        addItem(UU) {
          this.buffer.push(UU)
        }
        flushBuffer(UU) {
          if (ZU(UU))
            for (const RU of this.buffer) UU(RU);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Ip = class extends Wg {
        constructor(UU) {
          let {
            name: RU,
            parentId: gU,
            trigger: tU,
            transports: pU,
            attributes: EU,
            trackUserActionsExcludeItem: PU,
            importance: TU = xp.Normal,
            pushEvent: qU
          } = UU;
          super(), this.name = RU, this.attributes = EU, this.id = eR(), this.trigger = tU, this.parentId = null !== gU && void 0 !== gU ? gU : this.id, this.trackUserActionsExcludeItem = PU, this.importance = TU, this._pushEvent = qU, this._itemBuffer = new mp, this._transports = pU, this._state = 0, this._start()
        }
        addItem(UU) {
          return 0 === this._state && (this._itemBuffer.addItem(UU), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = jR(), this._startTimeMono = uR())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((UU => {
            this._transports.execute(UU)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const UU = jR(),
            RU = uR() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((UU => {
            if (function(UU, RU) {
                return (null === RU || void 0 === RU ? void 0 : RU(UU)) || "measurement" === UU.type && "web-vitals" === UU.payload.type
              }(UU, this.trackUserActionsExcludeItem)) return void this._transports.execute(UU);
            const RU = lR(lR({}, UU), {}, {
              payload: lR(lR({}, UU.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(RU)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", lR({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: UU.toString(),
            userActionDuration: RU.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, vR(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: UU => (UU.action = {
              id: this.id,
              name: this.name
            }, UU)
          })
        }
        getState() {
          return this._state
        }
      };
    const Jp = new Wg;

    function wp(UU, RU) {
      return !!UU && (0 === (null === UU || void 0 === UU ? void 0 : UU.getState()) && (UU.addItem(RU), !0))
    }
    var np = class extends Rg {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = gg
        }
        initialize() {
          const {
            processUserEvent: UU,
            processUserActionStarted: RU
          } = Wp(hU, (UU => this.logWarn(UU)));
          this._processUserEvent = UU, this._processKeydown = RU => {
            [" ", "Enter"].includes(RU.key) && UU(RU)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Jp.subscribe((UU => {
            let {
              type: gU,
              userAction: tU,
              initialActivityTimeout: pU
            } = UU;
            "user_action_start" === gU && RU(tU, pU)
          }))
        }
        destroy() {
          var UU;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (UU = this._userActionSub) || void 0 === UU || UU.unsubscribe()
        }
      },
      bp = class extends Rg {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = gg, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(UU) {
          const RU = {
            blockedURI: UU.blockedURI,
            columnNumber: UU.columnNumber,
            disposition: UU.disposition,
            documentURI: UU.documentURI,
            effectiveDirective: UU.effectiveDirective,
            lineNumber: UU.lineNumber,
            originalPolicy: UU.originalPolicy,
            referrer: UU.referrer,
            sample: UU.sample,
            sourceFile: UU.sourceFile,
            statusCode: UU.statusCode,
            violatedDirective: UU.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", vR(RU))
        }
      };
    var op = class extends Wg {
      constructor(UU, RU) {
        var gU, tU, pU, EU;
        super(), this._tracking = !1, this.eventsObservable = UU, this._options = {
          inactivityMs: null !== (gU = null === RU || void 0 === RU ? void 0 : RU.inactivityMs) && void 0 !== gU ? gU : 100,
          drainTimeoutMs: null !== (tU = null === RU || void 0 === RU ? void 0 : RU.drainTimeoutMs) && void 0 !== tU ? tU : 1e4,
          isOperationStart: null !== (pU = null === RU || void 0 === RU ? void 0 : RU.isOperationStart) && void 0 !== pU ? pU : () => {},
          isOperationEnd: null !== (EU = null === RU || void 0 === RU ? void 0 : RU.isOperationEnd) && void 0 !== EU ? EU : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((UU => {
          var RU;
          this._lastEventTime = uR(), null === (RU = this._currentEvents) || void 0 === RU || RU.push(UU);
          const gU = this._options.isOperationStart(UU);
          var tU;
          gU && (null === (tU = this._activeOperations) || void 0 === tU || tU.set(gU, !0));
          const pU = this._options.isOperationEnd(UU);
          var EU;
          pU && (null === (EU = this._activeOperations) || void 0 === EU || EU.delete(pU));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = uR(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let UU;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), UU = this.hasActiveOperations() ? uR() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: UU
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Zp(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Zp(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(UU) {
        UU && clearTimeout(UU)
      }
    };

    function Zp(UU, RU, gU) {
      return UU && clearTimeout(UU), UU = setTimeout((() => {
        RU()
      }), gU)
    }
    let ap;
    const Yp = new Set,
      Bp = new Map;
    let Vp, rp, Xp, vp, dp, Hp, Sp, sp, yp = !1;
    var kp = class extends Rg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = gg
      }
      initialize() {
        const UU = jp(),
          RU = pp(),
          gU = function() {
            function UU(UU, RU) {
              const gU = null !== RU && void 0 !== RU ? RU : location.href;
              gU !== rp && (Vp.notify({
                type: "url-change",
                from: rp,
                to: gU,
                trigger: UU
              }), rp = gU)
            }
            if (Vp || (Vp = new Wg, rp = location.href), !yp)
              if ("navigation" in window && "NavigateEvent" in window) {
                Sp = RU => {
                  try {
                    const gU = null === RU || void 0 === RU ? void 0 : RU.destination;
                    (null === gU || void 0 === gU ? void 0 : gU.sameDocument) && "string" === typeof gU.url && UU("navigate", gU.url)
                  } catch (gU) {}
                }, window.navigation.addEventListener("navigate", Sp);
                const RU = window.NavigateEvent;
                RU && RU.prototype && "function" === typeof RU.prototype.intercept && (sp || (sp = RU.prototype.intercept), RU.prototype.intercept = function(RU) {
                  try {
                    const RU = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      gU = null === this || void 0 === this ? void 0 : this.destination;
                    RU && gU && !1 === gU.sameDocument && "string" === typeof gU.url && UU("navigate-intercept", gU.url)
                  } catch (gU) {}
                  return sp.call(this, RU)
                }), yp = !0
              } else Xp || (Xp = window.history.pushState), window.history.pushState = function() {
                for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
                const pU = Xp.apply(window.history, gU);
                return UU("pushState"), pU
              }, vp || (vp = window.history.replaceState), window.history.replaceState = function() {
                for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
                const pU = vp.apply(window.history, gU);
                return UU("replaceState"), pU
              }, dp = () => UU("popstate"), Hp = () => UU("hashchange"), window.addEventListener("popstate", dp), window.addEventListener("hashchange", Hp), yp = !0;
            return Vp
          }(),
          tU = (pU = ["pointerdown", "keydown"], ap || (ap = new Wg), pU.forEach((UU => {
            if (!Yp.has(UU)) {
              const RU = () => {
                ap.notify({
                  type: "interaction",
                  name: UU
                })
              };
              window.addEventListener(UU, RU), Yp.add(UU), Bp.set(UU, RU)
            }
          })), ap);
        var pU;
        const EU = new op((new Wg).merge(UU, RU, gU), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: UU => function(UU) {
            return UU.type === Qg
          }(UU) ? UU.request.requestId : void 0,
          isOperationEnd: UU => function(UU) {
            return UU.type === eg
          }(UU) ? UU.request.requestId : void 0
        });
        EU.filter((UU => "tracking-ended" === UU.message)).subscribe((UU => {
          var RU, gU;
          if ((null === (RU = UU.events) || void 0 === RU ? void 0 : RU.some((UU => "url-change" === UU.type))) && (null === (gU = UU.events) || void 0 === gU ? void 0 : gU.some((UU => "dom-mutation" === UU.type)))) {
            var tU;
            const RU = null === (tU = UU.events) || void 0 === tU ? void 0 : tU.find((UU => "url-change" === UU.type));
            hU.api.pushEvent("faro.navigation", {
              fromUrl: null === RU || void 0 === RU ? void 0 : RU.from,
              toUrl: null === RU || void 0 === RU ? void 0 : RU.to,
              sameDocument: String(!0),
              duration: UU.duration
            })
          }
        })), tU.subscribe((() => {
          EU.startTracking()
        }))
      }
    };

    function Fp() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const RU = [new np, new rg, new rt, new tg, new vg, new kp];
      return !1 !== UU.enablePerformanceInstrumentation && RU.unshift(new Mt), !1 !== UU.enableContentSecurityPolicyInstrumentation && RU.push(new bp), !1 !== UU.captureConsole && RU.push(new Bg), RU
    }
    var ip = gU(6375);
    let Ap, zp;

    function Mp() {
      const UU = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Ap === UU && zp || (zp = new ip.UAParser(UU).getResult(), Ap = UU), zp
    }
    const Dp = () => {
        const {
          browser: UU,
          os: RU,
          ua: gU
        } = Mp(), {
          name: tU,
          version: pU
        } = UU, {
          name: EU,
          version: PU
        } = RU, TU = navigator.language, qU = gU.includes("Mobi"), KU = function() {
          if (!tU || !pU) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== tU && void 0 !== tU ? tU : Xg,
            version: null !== pU && void 0 !== pU ? pU : Xg,
            os: `${null!==EU&&void 0!==EU?EU:Xg} ${null!==PU&&void 0!==PU?PU:Xg}`,
            userAgent: null !== gU && void 0 !== gU ? gU : Xg,
            language: null !== TU && void 0 !== TU ? TU : Xg,
            mobile: qU,
            brands: null !== KU && void 0 !== KU ? KU : Xg,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Lp = () => {
        const {
          name: UU,
          version: RU
        } = Mp().os;
        if (!UU && !RU) return {};
        const gU = {};
        return UU && (gU.name = UU), RU && (gU.version = RU), {
          os: gU
        }
      };

    function Np(UU) {
      var RU, gU, tU;
      return {
        id: null !== (RU = null === (gU = hU.config) || void 0 === gU || null === (gU = gU.sessionTracking) || void 0 === gU || null === (tU = gU.generateSessionId) || void 0 === tU ? void 0 : tU.call(gU)) && void 0 !== RU ? RU : eR(),
        attributes: UU
      }
    }
    const lp = () => ({
      sdk: {
        name: "faro-web",
        version: gg
      }
    });
    var Op = class extends Ug {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let UE = function(UU) {
      return UU.EXCEPTION = "exception", UU.LOG = "log", UU.MEASUREMENT = "measurement", UU.TRACE = "trace", UU.EVENT = "event", UU
    }({});
    const RE = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function gE(UU, RU) {
      var gU, tU;
      if (void 0 === RU) return UU;
      if (void 0 === UU) return {
        resourceSpans: RU
      };
      const pU = null === (gU = UU.resourceSpans) || void 0 === gU ? void 0 : gU[0];
      if (void 0 === pU) return UU;
      const EU = (null === pU || void 0 === pU ? void 0 : pU.scopeSpans) || [],
        PU = (null === RU || void 0 === RU || null === (tU = RU[0]) || void 0 === tU ? void 0 : tU.scopeSpans) || [];
      return lR(lR({}, UU), {}, {
        resourceSpans: [lR(lR({}, pU), {}, {
          scopeSpans: [...EU, ...PU]
        })]
      })
    }

    function tE(UU) {
      let RU = {
        meta: {}
      };
      return void 0 !== UU[0] && (RU.meta = UU[0].meta), UU.forEach((UU => {
        switch (UU.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const gU = RE[UU.type],
              tU = RU[gU];
            RU = lR(lR({}, RU), {}, {
              [gU]: void 0 === tU ? [UU.payload] : [...tU, UU.payload]
            });
            break
          }
          case "trace":
            RU = lR(lR({}, RU), {}, {
              traces: gE(RU.traces, UU.payload.resourceSpans)
            })
        }
      })), RU
    }
    var pE = class extends Op {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = UU, this.name = "@grafana/faro-web-sdk:transport-console", this.version = gg
      }
      send(UU) {
        var RU;
        return this.unpatchedConsole[null !== (RU = this.options.level) && void 0 !== RU ? RU : fg.DEBUG]("New event", tE([UU]))
      }
    };
    const EE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      PE = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      TE = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      qE = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      KE = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      cE = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function GE(UU) {
      let {
        weekday: RU,
        day: gU,
        month: tU,
        year: pU,
        hour: EU,
        minute: PU,
        second: TU
      } = UU;
      if (pU < 1900 || gU < 1 || EU > 23 || PU > 59 || TU > 60) return;
      const qU = 60 === TU,
        KU = new Date(0);
      return KU.setUTCFullYear(pU, tU, gU), KU.setUTCHours(EU, PU, qU ? 59 : TU, 0), KU.getUTCDay() === RU && KU.getUTCDate() === gU && KU.getUTCMonth() === tU && KU.getUTCFullYear() === pU && KU.getUTCHours() === EU && KU.getUTCMinutes() === PU && KU.getUTCSeconds() === (qU ? 59 : TU) ? KU.getTime() + (qU ? 1e3 : 0) : void 0
    }
    var jE = class {
      constructor(UU) {
        this.options = UU, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var UU = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const RU = this.sequence++;
        let gU = !1;
        return {
          deliver: function() {
            var gU = At((function*(gU) {
              const tU = UU.options.getNow();
              let pU, EU = 0;
              for (;;) {
                var PU, TU, qU;
                const KU = UU.options.retry.maxAttempts - EU,
                  cU = yield UU.runAttempt((() => gU(KU, UU.unloading)), EU > 0);
                if (EU += cU.attemptsMade, "success" === cU.kind) return {
                  kind: "success",
                  attempts: EU,
                  elapsedTimeMs: UU.options.getNow() - tU
                };
                if (pU = cU.failure, "terminal" === cU.kind || UU.unloading) return {
                  kind: "terminal",
                  attempts: EU,
                  elapsedTimeMs: UU.options.getNow() - tU,
                  failure: pU
                };
                if (EU >= UU.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: EU,
                  elapsedTimeMs: UU.options.getNow() - tU,
                  failure: pU,
                  reason: "retries-exhausted"
                };
                if (null != cU.retryAfterMs && cU.retryAfterMs > UU.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: EU,
                  elapsedTimeMs: UU.options.getNow() - tU,
                  failure: pU,
                  reason: "retry-after-too-long"
                };
                const GU = Math.min(null !== (PU = cU.retryAfterMs) && void 0 !== PU ? PU : UU.options.retry.initialBackoffMs * Math.pow(UU.options.retry.backoffMultiplier, EU - 1), UU.options.retry.maxBackoffMs);
                if (null === (TU = (qU = UU.options).onRetry) || void 0 === TU || TU.call(qU, GU, EU + 1), yield UU.waitForTurn(RU, GU)) {
                  const RU = UU.options.retry.maxAttempts - EU,
                    pU = yield UU.runAttempt((() => gU(RU, !0)));
                  return EU += pU.attemptsMade, {
                    kind: "success" === pU.kind ? "success" : "terminal",
                    attempts: EU,
                    elapsedTimeMs: UU.options.getNow() - tU,
                    failure: "success" === pU.kind ? void 0 : pU.failure
                  }
                }
              }
            }));
            return function(UU) {
              return gU.apply(this, arguments)
            }
          }(),
          release: () => {
            gU || (gU = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const UU = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const RU of UU) RU.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((gU, tU) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const RU = () => {
                this.inProgress--, this.runNextAttempt()
              };
              UU().then((UU => {
                RU(), gU(UU)
              }), (UU => {
                RU(), tU(UU)
              }))
            },
            isRedelivery: RU
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const UU = this.options.getNow(),
            RU = this.attemptQueue.findIndex((RU => {
              let {
                isRedelivery: gU
              } = RU;
              return this.unloading || !gU || UU >= this.nextSendAt
            }));
          if (RU < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - UU)));
          const [gU] = this.attemptQueue.splice(RU, 1);
          gU.isRedelivery && !this.unloading && (this.nextSendAt = UU + 1), gU.run()
        }
      }
      waitForTurn(UU, RU) {
        const gU = Math.min(RU * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((RU => {
          this.waiting.push({
            sequence: UU,
            readyAt: this.options.getNow() + gU,
            resolve: RU
          }), this.waiting.sort(((UU, RU) => UU.readyAt === RU.readyAt ? UU.sequence - RU.sequence : UU.readyAt - RU.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const UU = this.waiting[0],
          RU = UU.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const RU = this.waiting.indexOf(UU);
          RU >= 0 && this.waiting.splice(RU, 1), UU.resolve(!1), this.scheduleNext()
        }), Math.max(0, RU - this.options.getNow()))
      }
    };

    function uE(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if ({}.hasOwnProperty.call(UU, tU)) {
            if (RU.includes(tU)) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.includes(gU) || {}.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function CE(UU) {
      const {
        size: RU,
        concurrency: gU
      } = UU, tU = [];
      let pU = 0;
      const EU = () => {
        if (pU < gU && tU.length) {
          const {
            producer: UU,
            resolve: RU,
            reject: gU
          } = tU.shift();
          pU++, UU().then((UU => {
            pU--, EU(), RU(UU)
          }), (UU => {
            pU--, EU(), gU(UU)
          }))
        }
      };
      return {
        add: UU => {
          if (tU.length + pU >= RU) throw new Error("Task buffer full");
          return new Promise(((RU, gU) => {
            tU.push({
              producer: UU,
              resolve: RU,
              reject: gU
            }), EU()
          }))
        }
      }
    }
    const hE = ["headers"],
      QE = ["keepalive", "signal"],
      eE = new Set([408, 425, 429, 500, 502, 503, 504]),
      WE = new Set([429, 503]);
    let fE = 0,
      xE = 0;
    var mE = class extends Error {};
    var IE = class extends Op {
      constructor(UU) {
        var RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU;
        super(), this.options = UU, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = gg, this.pendingCustomSends = 0, this.getNow = null !== (RU = UU.getNow) && void 0 !== RU ? RU : Date.now, this.requestTimeoutMs = null !== (gU = UU.requestTimeoutMs) && void 0 !== gU ? gU : 1e4, this.compressionEnabled = null !== (tU = UU.requestCompression) && void 0 !== tU && tU && "undefined" !== typeof CompressionStream, UU.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new jE({
          bufferSize: null !== (pU = UU.bufferSize) && void 0 !== pU ? pU : 30,
          concurrency: null !== (EU = UU.concurrency) && void 0 !== EU ? EU : 5,
          retry: {
            maxAttempts: null !== (PU = null === (TU = UU.retry) || void 0 === TU ? void 0 : TU.maxAttempts) && void 0 !== PU ? PU : 3,
            initialBackoffMs: null !== (qU = null !== (KU = null === (cU = UU.retry) || void 0 === cU ? void 0 : cU.initialBackoffMs) && void 0 !== KU ? KU : UU.defaultRateLimitBackoffMs) && void 0 !== qU ? qU : 1e3,
            maxBackoffMs: null !== (GU = null === (jU = UU.retry) || void 0 === jU ? void 0 : jU.maxBackoffMs) && void 0 !== GU ? GU : 3e4,
            backoffMultiplier: null !== (uU = null === (CU = UU.retry) || void 0 === CU ? void 0 : CU.backoffMultiplier) && void 0 !== uU ? uU : 2
          },
          getNow: this.getNow,
          getRandom: null !== (hU = UU.getRandom) && void 0 !== hU ? hU : Math.random,
          onRetry: (UU, RU) => {
            this.logDebug(`Retrying failed request after ${UU}ms. Attempt ${RU}.`)
          }
        }), this.customPromiseBuffer = CE({
          size: null !== (QU = UU.bufferSize) && void 0 !== QU ? QU : 30,
          concurrency: null !== (eU = UU.concurrency) && void 0 !== eU ? eU : 5
        }), this.defaultPromiseBuffer = {
          add: UU => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(UU);
            const RU = this.deliveryQueue.reserve();
            if (!RU) throw new Error("Task buffer full");
            return this.runBufferedTask(RU, UU)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (UU => {
          UU.persisted && this.deliveryQueue.resume()
        })))
      }
      send(UU) {
        var RU = this;
        return At((function*() {
          const gU = RU.promiseBuffer;
          if (gU !== RU.defaultPromiseBuffer || gU.add !== RU.defaultBufferAdd) {
            RU.pendingCustomSends++;
            try {
              yield gU.add((() => RU.deliver(UU)))
            } catch (tU) {
              RU.logError("Permanent delivery failure", {
                error: tU,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              RU.pendingCustomSends--
            }
          } else yield RU.deliver(UU)
        }))()
      }
      runBufferedTask(UU, RU) {
        return At((function*() {
          let gU;
          try {
            return yield UU.deliver(At((function*() {
              return gU = yield RU(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), gU
          } finally {
            UU.release()
          }
        }))()
      }
      deliver(UU) {
        var RU = this;
        return At((function*() {
          const gU = RU.deliveryQueue.reserve();
          if (gU) try {
            const tU = yield RU.prepareRequest(UU), pU = yield gU.deliver(((UU, gU) => RU.performAttempt(tU, UU, gU)));
            "terminal" === pU.kind && RU.logError("retries-exhausted" === pU.reason ? "Delivery retries exhausted" : "Permanent delivery failure", cR(cR({}, pU.failure), {}, {
              reason: pU.reason,
              attempts: pU.attempts,
              elapsedTimeMs: pU.elapsedTimeMs
            }))
          } catch (tU) {
            RU.logError("Permanent delivery failure", {
              error: tU,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            gU.release()
          } else RU.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var UU;
        return [this.options.url].concat(null !== (UU = this.config.ignoreUrls) && void 0 !== UU ? UU : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(UU) {
        var RU = this;
        return At((function*() {
          var gU, tU;
          const pU = tE(UU),
            EU = null === (gU = pU.meta.session) || void 0 === gU ? void 0 : gU.id,
            PU = JSON.stringify(pU),
            TU = null !== (tU = RU.options.requestOptions) && void 0 !== tU ? tU : {},
            {
              headers: qU = {}
            } = TU,
            KU = uE(TU, hE),
            {
              keepalive: cU,
              signal: GU
            } = KU,
            jU = uE(KU, QE),
            uU = {};
          for (const [UU, RU] of Object.entries(qU)) uU[UU] = "function" === typeof RU ? yield RU(): RU;
          let CU = PU,
            hU = function(UU) {
              return "undefined" === typeof TextEncoder ? UU.length : (new TextEncoder).encode(UU).byteLength
            }(PU);
          const QU = {};
          return RU.compressionEnabled && (CU = yield RU.compress(PU), hU = CU.size, QU["Content-Encoding"] = "gzip"), {
            bodySize: hU,
            sessionId: EU,
            requestInit: cR({
              method: "POST",
              headers: cR(cR(cR(cR(cR({
                "Content-Type": "application/json"
              }, QU), uU), RU.options.apiKey ? {
                "x-api-key": RU.options.apiKey
              } : {}), EU ? {
                "x-faro-session-id": EU
              } : {}), {}, {
                "Idempotency-Key": eR(20)
              }),
              body: CU
            }, jU)
          }
        }))()
      }
      performAttempt(UU, RU, gU) {
        var tU = this;
        return At((function*() {
          var pU;
          const EU = null === (pU = tU.options.requestOptions) || void 0 === pU ? void 0 : pU.signal;
          if (null === EU || void 0 === EU ? void 0 : EU.aborted) return {
            kind: "terminal",
            failure: {
              error: EU.reason
            },
            attemptsMade: 0
          };
          let PU = 0;
          try {
            var TU;
            const pU = yield tU.fetchWithKeepaliveFallback(UU.requestInit, UU.bodySize, !!gU || (null === (TU = tU.options.requestOptions) || void 0 === TU ? void 0 : TU.keepalive), RU, (() => PU++));
            if (tU.handleResponse(pU, UU.sessionId), pU.status >= 200 && pU.status < 300) return {
              kind: "success",
              attemptsMade: PU
            };
            const EU = {
              status: pU.status
            };
            return !eE.has(pU.status) || gU ? {
              kind: "terminal",
              failure: EU,
              attemptsMade: PU
            } : {
              kind: "retry",
              failure: EU,
              attemptsMade: PU,
              retryAfterMs: WE.has(pU.status) ? tU.getRetryAfterDelayMs(pU) : void 0
            }
          } catch (qU) {
            const UU = {
              error: qU
            };
            return (null === EU || void 0 === EU ? void 0 : EU.aborted) || !tU.isFetchNetworkError(qU) || gU ? {
              kind: "terminal",
              failure: UU,
              attemptsMade: PU
            } : {
              kind: "retry",
              failure: UU,
              attemptsMade: PU
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(UU, RU, gU, tU, pU) {
        var EU = this;
        return At((function*() {
          const PU = EU.getNow(),
            TU = EU.reserveKeepalive(RU, gU);
          try {
            return yield EU.fetchWithTimeout(cR(cR({}, UU), {}, {
              keepalive: TU.keepalive
            }), EU.requestTimeoutMs, pU)
          } catch (KU) {
            var qU;
            if (TU.keepalive && tU > 1 && EU.isFetchNetworkError(KU) && !(KU instanceof mE) && !(null === (qU = EU.options.requestOptions) || void 0 === qU || null === (qU = qU.signal) || void 0 === qU ? void 0 : qU.aborted)) {
              EU.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const RU = EU.requestTimeoutMs - (EU.getNow() - PU);
              return EU.fetchWithTimeout(cR(cR({}, UU), {}, {
                keepalive: !1
              }), RU, pU)
            }
            throw KU
          } finally {
            TU.release()
          }
        }))()
      }
      fetchWithTimeout(UU, RU, gU) {
        var tU = this;
        return At((function*() {
          var pU;
          const EU = null === (pU = tU.options.requestOptions) || void 0 === pU ? void 0 : pU.signal;
          if (tU.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return gU(), fetch(tU.options.url, cR(cR({}, UU), {}, {
            signal: EU
          }));
          if (RU <= 0) throw new mE("Request timed out");
          const PU = new AbortController,
            TU = () => PU.abort(null === EU || void 0 === EU ? void 0 : EU.reason);
          null === EU || void 0 === EU || EU.addEventListener("abort", TU, {
            once: !0
          });
          let qU = !1;
          const KU = setTimeout((() => {
            qU = !0, PU.abort()
          }), RU);
          try {
            return gU(), yield fetch(tU.options.url, cR(cR({}, UU), {}, {
              signal: PU.signal
            }))
          } catch (cU) {
            if (qU && !(null === EU || void 0 === EU ? void 0 : EU.aborted)) throw new mE("Request timed out");
            throw cU
          } finally {
            clearTimeout(KU), null === EU || void 0 === EU || EU.removeEventListener("abort", TU)
          }
        }))()
      }
      getRetryAfterDelayMs(UU) {
        const RU = UU.headers.get("Retry-After");
        if (!RU) return;
        if (/^\d+$/.test(RU)) {
          const UU = 1e3 * Number(RU);
          return Number.isFinite(UU) ? UU : Number.POSITIVE_INFINITY
        }
        const gU = this.getNow(),
          tU = function(UU, RU) {
            const gU = EE.exec(UU);
            if (gU) {
              const [, UU, RU, tU, pU, EU, PU, TU] = gU;
              return GE({
                weekday: qE.indexOf(UU),
                day: Number(RU),
                month: cE.indexOf(tU),
                year: Number(pU),
                hour: Number(EU),
                minute: Number(PU),
                second: Number(TU)
              })
            }
            const tU = PE.exec(UU);
            if (tU) {
              const [, UU, gU, PU, TU, qU, KU, cU] = tU, GU = new Date(RU);
              if (Number.isNaN(GU.getTime())) return;
              const jU = GU.getUTCFullYear();
              let uU = 100 * Math.floor(jU / 100) + Number(TU);
              uU < jU && (uU += 100);
              const CU = cE.indexOf(PU),
                hU = {
                  month: CU,
                  day: Number(gU),
                  hour: Number(qU),
                  minute: Number(KU),
                  second: Number(cU),
                  millisecond: 0
                },
                QU = {
                  month: GU.getUTCMonth(),
                  day: GU.getUTCDate(),
                  hour: GU.getUTCHours(),
                  minute: GU.getUTCMinutes(),
                  second: GU.getUTCSeconds(),
                  millisecond: GU.getUTCMilliseconds()
                };
              return (uU > jU + 50 || uU === jU + 50 && (EU = QU, ((pU = hU).month - EU.month || pU.day - EU.day || pU.hour - EU.hour || pU.minute - EU.minute || pU.second - EU.second || pU.millisecond - EU.millisecond) > 0)) && (uU -= 100), GE({
                weekday: KE.indexOf(UU),
                day: Number(gU),
                month: CU,
                year: uU,
                hour: Number(qU),
                minute: Number(KU),
                second: Number(cU)
              })
            }
            var pU, EU;
            const PU = TE.exec(UU);
            if (!PU) return;
            const [, TU, qU, KU, cU, GU, jU, uU, CU] = PU;
            return GE({
              weekday: qE.indexOf(TU),
              day: Number(null !== KU && void 0 !== KU ? KU : cU),
              month: cE.indexOf(qU),
              year: Number(CU),
              hour: Number(GU),
              minute: Number(jU),
              second: Number(uU)
            })
          }(RU, gU);
        return null == tU ? void 0 : Math.max(0, tU - gU)
      }
      reserveKeepalive(UU, RU) {
        if (!1 === RU || UU > 6e4 || fE + UU > 6e4 || xE >= 9) return {
          keepalive: !1,
          release: FR
        };
        fE += UU, xE++;
        let gU = !1;
        return {
          keepalive: !0,
          release: () => {
            gU || (gU = !0, fE -= UU, xE--)
          }
        }
      }
      handleResponse(UU, RU) {
        202 === UU.status && "invalid" === UU.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), RU), UU.text().catch(FR)
      }
      isFetchNetworkError(UU) {
        return UU instanceof TypeError || UU instanceof mE || UU instanceof DOMException && "AbortError" === UU.name
      }
      compress(UU) {
        return At((function*() {
          const RU = [],
            gU = new ReadableStream({
              start(RU) {
                RU.enqueue((new TextEncoder).encode(UU)), RU.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: UU,
              value: tU
            } = yield gU.read();
            if (UU) return new Blob(RU);
            RU.push(tU)
          }
        }))()
      }
      extendFaroSession(UU, RU, gU) {
        var tU, pU;
        const EU = UU.sessionTracking;
        if (!(null === EU || void 0 === EU ? void 0 : EU.enabled)) return void RU("Session expired.");
        const {
          fetchUserSession: PU,
          storeUserSession: TU
        } = kR(EU), qU = null === (tU = this.metas.value.session) || void 0 === tU ? void 0 : tU.id, KU = null === (pU = PU()) || void 0 === pU ? void 0 : pU.sessionId;
        gU && gU === qU && gU === KU ? (aR({
          fetchUserSession: PU,
          storeUserSession: TU
        })({
          forceSessionExtend: !0
        }), RU("Session expired; created new session.")) : RU("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const JE = () => {
      const UU = window.k6;
      return {
        k6: cR({
          isK6Browser: !0
        }, (null === UU || void 0 === UU ? void 0 : UU.testRunId) && {
          testRunId: null === UU || void 0 === UU ? void 0 : UU.testRunId
        })
      }
    };
    let wE, nE;

    function bE() {
      let {
        generatePageId: UU,
        initialPageMeta: RU
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const gU = location.href;
        return ZU(UU) && wE !== gU && (wE = gU, nE = UU(location)), {
          page: cR(cR({
            url: gU
          }, nE ? {
            id: nE
          } : {}), RU)
        }
      }
    }

    function oE() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OR,
        RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gU = AR;
      return RU > 0 && (gU.error = RU >= 1 ? function() {
        for (var RU = arguments.length, tU = new Array(RU), pU = 0; pU < RU; pU++) tU[pU] = arguments[pU];
        UU.error(`${gU.prefix}\n`, ...tU)
      } : FR, gU.warn = RU >= 2 ? function() {
        for (var RU = arguments.length, tU = new Array(RU), pU = 0; pU < RU; pU++) tU[pU] = arguments[pU];
        UU.warn(`${gU.prefix}\n`, ...tU)
      } : FR, gU.info = RU >= 3 ? function() {
        for (var RU = arguments.length, tU = new Array(RU), pU = 0; pU < RU; pU++) tU[pU] = arguments[pU];
        UU.info(`${gU.prefix}\n`, ...tU)
      } : FR, gU.debug = RU >= 4 ? function() {
        for (var RU = arguments.length, tU = new Array(RU), pU = 0; pU < RU; pU++) tU[pU] = arguments[pU];
        UU.debug(`${gU.prefix}\n`, ...tU)
      } : FR), gU
    }
    const ZE = "faro",
      aE = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      YE = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function BE(UU) {
      var RU, gU, pU, EU, PU, TU;
      const qU = [],
        cU = oE(UU.unpatchedConsole, UU.internalLoggerLevel);
      UU.transports ? ((UU.url || UU.apiKey) && cU.error('if "transports" is defined, "url" and "apiKey" should not be defined'), qU.push(...UU.transports)) : UU.url ? qU.push(new IE({
        url: UU.url,
        apiKey: UU.apiKey,
        requestCompression: UU.requestCompression
      })) : cU.error('either "url" or "transports" must be defined');
      const {
        dedupe: GU = !0,
        eventDomain: jU = tU,
        globalObjectKey: uU = ZE,
        instrumentations: CU = Fp(),
        internalLoggerLevel: hU = zR,
        isolate: QU = !1,
        logArgsSerializer: eU = Yg,
        metas: WU = rE(UU),
        paused: fU = !1,
        preventGlobalExposure: xU = !1,
        unpatchedConsole: mU = OR,
        url: IU,
        experimental: JU
      } = UU, wU = uE(UU, YE), nU = null !== (RU = null === JU || void 0 === JU ? void 0 : JU.trackNavigation) && void 0 !== RU && RU, bU = {
        dataAttributeName: lt(null !== (gU = null === (pU = UU.userActionsInstrumentation) || void 0 === pU ? void 0 : pU.dataAttributeName) && void 0 !== gU ? gU : Dt),
        excludeItem: null === (EU = UU.userActionsInstrumentation) || void 0 === EU ? void 0 : EU.excludeItem,
        initialActivityTimeout: Ot(null === (PU = UU.userActionsInstrumentation) || void 0 === PU ? void 0 : PU.initialActivityTimeout, 100, (UU => cU.warn(UU)))
      };
      return cR(cR({}, wU), {}, {
        batching: cR(cR({}, aE), UU.batching),
        dedupe: GU,
        globalObjectKey: uU,
        instrumentations: VE(CU, UU),
        internalLoggerLevel: hU,
        isolate: QU,
        logArgsSerializer: eU,
        metas: WU,
        parseStacktrace: hg,
        paused: fU,
        preventGlobalExposure: xU,
        transports: qU,
        unpatchedConsole: mU,
        eventDomain: jU,
        ignoreUrls: [...null !== (TU = UU.ignoreUrls) && void 0 !== TU ? TU : [], ...IU ? [IU] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: cR(cR(cR({}, KU), UU.sessionTracking), XE({
          trackGeolocation: UU.trackGeolocation,
          sessionTracking: UU.sessionTracking
        })),
        userActionsInstrumentation: bU,
        experimental: {
          trackNavigation: nU
        }
      })
    }

    function VE(UU, RU) {
      let {
        experimental: gU
      } = RU;
      var tU;
      const pU = null !== (tU = null === gU || void 0 === gU ? void 0 : gU.trackNavigation) && void 0 !== tU && tU;
      return UU.filter((UU => !("@grafana/faro-web-sdk:instrumentation-navigation" === UU.name && !pU)))
    }

    function rE(UU) {
      var RU, gU, tU;
      const {
        page: pU,
        generatePageId: EU
      } = null !== (RU = null === UU || void 0 === UU ? void 0 : UU.pageTracking) && void 0 !== RU ? RU : {}, PU = [Dp, Lp, bE({
        generatePageId: EU,
        initialPageMeta: pU
      }), ...null !== (gU = UU.metas) && void 0 !== gU ? gU : [], lp];
      return oU(null === (tU = window) || void 0 === tU ? void 0 : tU.k6) ? [...PU, JE] : PU
    }

    function XE(UU) {
      let {
        trackGeolocation: RU,
        sessionTracking: gU
      } = UU;
      var tU;
      const pU = {};
      return nU(RU) && (pU.geoLocationTrackingEnabled = RU), zU(pU) ? {} : {
        session: cR(cR({}, null !== (tU = null === gU || void 0 === gU ? void 0 : gU.session) && void 0 !== tU ? tU : {}), {}, {
          overrides: pU
        })
      }
    }
    const vE = new WeakSet;

    function dE(UU) {
      return vE.add(UU), UU
    }

    function HE(UU, RU) {
      if (UU.capture) return dE(UU.capture(RU));
      const gU = dE(UU.value);
      return null === RU || void 0 === RU || RU(), gU
    }

    function SE(UU) {
      const RU = `__faroBundleId_${UU}`,
        gU = null === cU || void 0 === cU ? void 0 : cU[RU];
      if ("string" === typeof gU && "" !== gU) return gU;
      const tU = "undefined" !== typeof window ? window[RU] : void 0;
      return "string" === typeof tU && "" !== tU ? tU : void 0
    }

    function sE(UU) {
      var RU, gU;
      const tU = UU.config.app.name,
        pU = tU ? function(UU) {
          return null === cU || void 0 === cU ? void 0 : cU[`__faroGitHash_${UU}`]
        }(tU) : void 0,
        EU = {
          sdk: {
            version: gg,
            name: "faro"
          },
          app: lR({
            bundleId: tU && SE(tU)
          }, void 0 !== pU ? {
            gitHash: pU
          } : {})
        },
        PU = null === (RU = UU.config.sessionTracking) || void 0 === RU ? void 0 : RU.session;
      PU && UU.api.setSession(PU), UU.config.app && (EU.app = lR(lR({}, UU.config.app), EU.app)), UU.config.user && (EU.user = UU.config.user), UU.config.view && (EU.view = UU.config.view), UU.metas.add(EU, ...null !== (gU = UU.config.metas) && void 0 !== gU ? gU : [])
    }
    var yE = class {
      constructor(UU, RU) {
        var gU, tU;
        this.signalBuffer = [], this.itemLimit = null !== (gU = null === RU || void 0 === RU ? void 0 : RU.itemLimit) && void 0 !== gU ? gU : 50, this.sendTimeout = null !== (tU = null === RU || void 0 === RU ? void 0 : RU.sendTimeout) && void 0 !== tU ? tU : 250, this.paused = (null === RU || void 0 === RU ? void 0 : RU.paused) || !1, this.sendFn = UU, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(UU) {
        this.paused || (this.signalBuffer.push(UU), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(UU) {
        const RU = new Map;
        return UU.forEach((UU => {
          const gU = JSON.stringify(UU.meta);
          let tU = RU.get(gU);
          tU = void 0 === tU ? [UU] : [...tU, UU], RU.set(gU, tU)
        })), Array.from(RU.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const UU = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(UU).forEach(this.sendFn)
        } catch (RU) {
          throw this.signalBuffer = [...UU, ...this.signalBuffer], this.trimBufferToLimit(), RU
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function kE(UU, RU, gU, tU) {
      var pU;
      RU.debug("Initializing transports");
      const EU = [];
      let PU = [];
      const TU = UU => {
        let RU = UU;
        for (const tU of PU) {
          const UU = RU.map(tU).filter(Boolean);
          if (0 === UU.length) return [];
          RU = FE(UU, gU)
        }
        return RU
      };
      let qU;
      (null === (pU = gU.batching) || void 0 === pU ? void 0 : pU.enabled) && (qU = new yE((UU => {
        const gU = TU(UU);
        if (0 !== gU.length)
          for (const tU of EU) RU.debug(`Transporting item using ${tU.name}\n`, gU), tU.isBatched() && tU.send(gU)
      }), {
        sendTimeout: gU.batching.sendTimeout,
        itemLimit: gU.batching.itemLimit,
        paused: gU.paused
      }));
      return {
        add: function() {
          RU.debug("Adding transports");
          for (var pU = arguments.length, PU = new Array(pU), TU = 0; TU < pU; TU++) PU[TU] = arguments[TU];
          PU.forEach((pU => {
            RU.debug(`Adding "${pU.name}" transport`), EU.some((UU => UU === pU)) ? RU.warn(`Transport ${pU.name} is already added`) : (pU.unpatchedConsole = UU, pU.internalLogger = RU, pU.config = gU, pU.metas = tU, EU.push(pU))
          }))
        },
        addBeforeSendHooks: function() {
          RU.debug("Adding beforeSendHooks\n", PU);
          for (var UU = arguments.length, gU = new Array(UU), tU = 0; tU < UU; tU++) gU[tU] = arguments[tU];
          gU.forEach((UU => {
            UU && PU.push(UU)
          }))
        },
        getBeforeSendHooks: () => [...PU],
        execute: UU => {
          var pU;
          if (!gU.paused && sR(tU).shouldCapture()) {
            if (GU = UU.meta, !vE.has(GU)) {
              var PU, KU, cU;
              const RU = null === (PU = tU.value.session) || void 0 === PU ? void 0 : PU.id,
                pU = HE(tU);
              if (gU.paused) return;
              const EU = lR({}, UU.meta);
              (null === (KU = EU.session) || void 0 === KU ? void 0 : KU.id) === RU && (null === (cU = pU.session) || void 0 === cU ? void 0 : cU.id) !== RU && (void 0 === pU.session ? delete EU.session : EU.session = pU.session), UU = lR(lR({}, UU), {}, {
                meta: dE(EU)
              })
            }
            var GU;
            (null === (pU = gU.batching) || void 0 === pU ? void 0 : pU.enabled) && (null === qU || void 0 === qU || qU.addItem(UU)), (UU => {
              var tU;
              if ((null === (tU = gU.batching) || void 0 === tU ? void 0 : tU.enabled) && EU.every((UU => UU.isBatched()))) return;
              const [pU] = TU([UU]);
              if (void 0 !== pU)
                for (const TU of EU) {
                  var PU;
                  RU.debug(`Transporting item using ${TU.name}\n`, pU), TU.isBatched() ? (null === (PU = gU.batching) || void 0 === PU ? void 0 : PU.enabled) || TU.send([pU]) : TU.send(pU)
                }
            })(UU)
          }
        },
        isPaused: () => gU.paused,
        pause: () => {
          RU.debug("Pausing transports"), null === qU || void 0 === qU || qU.pause(), gU.paused = !0
        },
        remove: function() {
          RU.debug("Removing transports");
          for (var UU = arguments.length, gU = new Array(UU), tU = 0; tU < UU; tU++) gU[tU] = arguments[tU];
          gU.forEach((UU => {
            RU.debug(`Removing "${UU.name}" transport`);
            const gU = EU.indexOf(UU); - 1 !== gU ? EU.splice(gU, 1) : RU.warn(`Transport "${UU.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var UU = arguments.length, gU = new Array(UU), tU = 0; tU < UU; tU++) gU[tU] = arguments[tU];
          RU.debug("Removing beforeSendHooks"), PU = PU.filter((UU => !gU.includes(UU)))
        },
        get transports() {
          return [...EU]
        },
        unpause: () => {
          RU.debug("Unpausing transports"), null === qU || void 0 === qU || qU.start(), gU.paused = !1
        }
      }
    }

    function FE(UU, RU) {
      if (RU.preserveOriginalError)
        for (const gU of UU) "exception" === gU.type && delete gU.payload.originalError;
      return UU
    }
    let iE = OR;

    function AE(UU) {
      var RU;
      return iE = null !== (RU = UU.unpatchedConsole) && void 0 !== RU ? RU : iE, iE
    }
    let zE, ME = AR;

    function DE(UU, RU) {
      return ME = oE(UU, RU.internalLoggerLevel), ME
    }

    function LE(UU) {
      let {
        internalLogger: RU,
        config: gU,
        metas: tU,
        transports: pU,
        tracesApi: EU,
        userActionsApi: PU
      } = UU;
      var TU;
      RU.debug("Initializing exceptions API");
      let qU = null;
      zE = null !== (TU = gU.parseStacktrace) && void 0 !== TU ? TU : zE;
      const KU = UU => {
          RU.debug("Changing stacktrace parser"), zE = null !== UU && void 0 !== UU ? UU : zE
        },
        {
          ignoreErrors: cU = [],
          preserveOriginalError: GU
        } = gU;
      return KU(gU.parseStacktrace), {
        changeStacktraceParser: KU,
        getStacktraceParser: () => zE,
        pushError: function(UU) {
          let {
            skipDedupe: TU,
            stackFrames: KU,
            type: jU,
            context: uU,
            spanContext: CU,
            timestampOverwriteMs: hU,
            originalError: QU,
            fingerprint: eU,
            fatal: WU
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(UU, RU) {
              const {
                message: gU,
                name: tU,
                stack: pU
              } = RU;
              return EU = UU, PU = gU + " " + tU + " " + pU, EU.some((UU => IU(UU) ? PU.includes(UU) : !!PU.match(UU)));
              var EU, PU
            }(cU, null !== QU && void 0 !== QU ? QU : UU)) try {
            var fU, xU;
            if (!sR(tU).shouldCapture()) return;
            const cU = vR(lR(lR({}, function(UU) {
                let RU = UU.cause;
                dU(RU) ? RU = UU.cause.toString() : null !== RU && (oU(UU.cause) || aU(UU.cause)) ? RU = XR(UU.cause) : null != RU && (RU = UU.cause.toString());
                return null == RU ? {} : {
                  cause: RU
                }
              }(null !== QU && void 0 !== QU ? QU : UU)), null !== uU && void 0 !== uU ? uU : {})),
              IU = lR(lR(lR(lR({
                type: jU || UU.name || "Error",
                value: UU.message,
                timestamp: hU ? hR(hU) : CR(),
                trace: CU ? {
                  trace_id: CU.traceId,
                  span_id: CU.spanId
                } : EU.getTraceContext()
              }, zU(cU) ? {} : {
                context: cU
              }), GU ? {
                originalError: QU
              } : {}), eU ? {
                fingerprint: eU
              } : {}), void 0 !== WU ? {
                fatal: WU
              } : {});
            KU = null !== (fU = KU) && void 0 !== fU ? fU : UU.stack ? null === zE || void 0 === zE ? void 0 : zE(UU).frames : void 0, (null === KU || void 0 === KU ? void 0 : KU.length) && (IU.stacktrace = {
              frames: KU
            });
            const JU = {
              type: IU.type,
              value: IU.value,
              stacktrace: IU.stacktrace,
              context: IU.context,
              fingerprint: IU.fingerprint,
              fatal: null !== (xU = IU.fatal) && void 0 !== xU && xU
            };
            if (!TU && gU.dedupe && !mU(qU) && WR(JU, qU)) return void RU.debug("Skipping error push because it is the same as the last one\n", IU);
            const wU = qU,
              nU = HE(tU);
            if (qU !== wU && !TU && gU.dedupe && WR(JU, qU)) return;
            qU = JU;
            const bU = {
              meta: nU,
              payload: IU,
              type: "exception"
            };
            RU.debug("Pushing exception\n", bU), wp(PU.getActiveUserAction(), bU) || pU.execute(bU)
          } catch (JU) {
            RU.error("Error pushing event", JU)
          }
        }
      }
    }

    function NE(UU, RU, gU, tU, pU) {
      RU.debug("Initializing API");
      let EU = null;
      const PU = function(UU) {
          let {
            transports: RU,
            internalLogger: gU,
            config: tU,
            pushEvent: pU
          } = UU;
          var EU;
          const PU = null === (EU = tU.userActionsInstrumentation) || void 0 === EU ? void 0 : EU.excludeItem;
          let TU;
          const qU = () => TU;
          return {
            startUserAction: (UU, tU, EU) => {
              if (void 0 === qU()) {
                const gU = new Ip({
                  name: UU,
                  transports: RU,
                  attributes: tU,
                  trigger: (null === EU || void 0 === EU ? void 0 : EU.triggerName) || "faroApiCall",
                  importance: (null === EU || void 0 === EU ? void 0 : EU.importance) || xp.Normal,
                  trackUserActionsExcludeItem: PU,
                  pushEvent: pU
                });
                return gU.filter((UU => [3, 2].includes(UU))).first().subscribe((() => {
                  TU = void 0
                })), Jp.notify({
                  type: fp,
                  userAction: gU,
                  initialActivityTimeout: null === EU || void 0 === EU ? void 0 : EU.initialActivityTimeout
                }), TU = gU, TU
              }
              gU.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: qU
          }
        }({
          transports: pU,
          config: gU,
          internalLogger: RU,
          pushEvent: (UU, gU, tU, pU) => {
            EU ? EU(UU, gU, tU, pU) : RU.warn("pushEventImpl is not initialized. Event dropped:", {
              name: UU,
              attributes: gU,
              domain: tU,
              options: pU
            })
          }
        }),
        TU = function(UU, RU, gU, tU, pU) {
          let EU;
          return RU.debug("Initializing traces API"), {
            getOTEL: () => EU,
            getTraceContext: () => {
              const UU = null === EU || void 0 === EU ? void 0 : EU.trace.getSpanContext(EU.context.active());
              return UU ? {
                trace_id: UU.traceId,
                span_id: UU.spanId
              } : void 0
            },
            initOTEL: (UU, gU) => {
              RU.debug("Initializing OpenTelemetry"), EU = {
                trace: UU,
                context: gU
              }
            },
            isOTELInitialized: () => !!EU,
            pushTraces: UU => {
              try {
                if (!sR(tU).shouldCapture()) return;
                const gU = {
                  type: "trace",
                  payload: UU,
                  meta: HE(tU)
                };
                RU.debug("Pushing trace\n", gU), pU.execute(gU)
              } catch (gU) {
                RU.error("Error pushing trace\n", gU)
              }
            }
          }
        }(0, RU, 0, tU, pU),
        qU = {
          unpatchedConsole: UU,
          internalLogger: RU,
          userActionsApi: PU,
          config: gU,
          metas: tU,
          transports: pU,
          tracesApi: TU
        },
        KU = function(UU) {
          let {
            internalLogger: RU,
            config: gU,
            metas: tU,
            transports: pU,
            tracesApi: EU,
            userActionsApi: PU
          } = UU, TU = null;
          return {
            pushEvent: function(UU, qU, KU) {
              let {
                skipDedupe: cU,
                spanContext: GU,
                timestampOverwriteMs: jU,
                customPayloadTransformer: uU = UU => UU
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!sR(tU).shouldCapture()) return;
                const CU = vR(qU),
                  hU = uU({
                    name: UU,
                    domain: null !== KU && void 0 !== KU ? KU : gU.eventDomain,
                    attributes: zU(CU) ? void 0 : CU,
                    timestamp: jU ? hR(jU) : CR(),
                    trace: GU ? {
                      trace_id: GU.traceId,
                      span_id: GU.spanId
                    } : EU.getTraceContext()
                  }),
                  QU = {
                    name: hU.name,
                    attributes: hU.attributes,
                    domain: hU.domain
                  };
                if (!cU && gU.dedupe && !mU(TU) && WR(QU, TU)) return void RU.debug("Skipping event push because it is the same as the last one\n", hU);
                const eU = TU,
                  WU = HE(tU);
                if (TU !== eU && !cU && gU.dedupe && WR(QU, TU)) return;
                TU = QU;
                const fU = {
                  meta: WU,
                  payload: hU,
                  type: "event"
                };
                RU.debug("Pushing event\n", fU), wp(PU.getActiveUserAction(), fU) || pU.execute(fU)
              } catch (CU) {
                RU.error("Error pushing event", CU)
              }
            }
          }
        }(qU);
      return EU = KU.pushEvent, lR(lR(lR(lR(lR(lR(lR({}, TU), LE(qU)), function(UU) {
        let RU, gU, tU, pU, {
          internalLogger: EU,
          metas: PU
        } = UU;
        EU.debug("Initializing meta API");
        const TU = UU => {
            gU && PU.remove(gU), gU = {
              user: UU
            }, PU.add(gU)
          },
          qU = (UU, gU) => {
            var tU;
            const pU = null === gU || void 0 === gU ? void 0 : gU.overrides,
              EU = pU ? {
                overrides: lR(lR({}, null === RU || void 0 === RU || null === (tU = RU.session) || void 0 === tU ? void 0 : tU.overrides), pU)
              } : {};
            RU && PU.remove(RU), RU = {
              session: lR(lR({}, zU(UU) ? void 0 : UU), EU)
            }, PU.add(RU)
          },
          KU = (UU, RU) => {
            sR(PU).notifySessionUpdate({
              type: "replace",
              session: UU,
              overrides: null === RU || void 0 === RU ? void 0 : RU.overrides
            }), qU(UU, RU)
          },
          cU = () => PU.value.session,
          GU = () => PU.value.page;
        return {
          setUser: TU,
          resetUser: TU,
          setSession: KU,
          resetSession: KU,
          getSession: cU,
          setView: (UU, RU) => {
            var gU;
            if ((null === RU || void 0 === RU ? void 0 : RU.overrides) && (sR(PU).notifySessionUpdate({
                type: "overrides",
                overrides: RU.overrides
              }), qU(cU(), {
                overrides: RU.overrides
              })), (null === tU || void 0 === tU || null === (gU = tU.view) || void 0 === gU ? void 0 : gU.name) === (null === UU || void 0 === UU ? void 0 : UU.name)) return;
            const pU = tU;
            tU = {
              view: UU
            }, PU.add(tU), pU && PU.remove(pU)
          },
          getView: () => PU.value.view,
          setPage: UU => {
            var RU;
            const gU = IU(UU) ? lR(lR({}, null !== (RU = null === pU || void 0 === pU ? void 0 : pU.page) && void 0 !== RU ? RU : GU()), {}, {
              id: UU
            }) : UU;
            pU && PU.remove(pU), pU = {
              page: gU
            }, PU.add(pU)
          },
          getPage: GU
        }
      }(qU)), function(UU) {
        let {
          internalLogger: RU,
          config: gU,
          metas: tU,
          transports: pU,
          tracesApi: EU,
          userActionsApi: PU
        } = UU;
        var TU;
        RU.debug("Initializing logs API");
        let qU = null;
        const KU = null !== (TU = gU.logArgsSerializer) && void 0 !== TU ? TU : Yg;
        return {
          pushLog: function(UU) {
            let {
              context: TU,
              level: cU,
              skipDedupe: GU,
              spanContext: jU,
              timestampOverwriteMs: uU
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!sR(tU).shouldCapture()) return;
              const CU = vR(TU),
                hU = {
                  message: KU(UU),
                  level: null !== cU && void 0 !== cU ? cU : "log",
                  context: zU(CU) ? void 0 : CU,
                  timestamp: uU ? hR(uU) : CR(),
                  trace: jU ? {
                    trace_id: jU.traceId,
                    span_id: jU.spanId
                  } : EU.getTraceContext()
                },
                QU = {
                  message: hU.message,
                  level: hU.level,
                  context: hU.context
                };
              if (!GU && gU.dedupe && !mU(qU) && WR(QU, qU)) return void RU.debug("Skipping log push because it is the same as the last one\n", hU);
              const eU = qU,
                WU = HE(tU);
              if (qU !== eU && !GU && gU.dedupe && WR(QU, qU)) return;
              qU = QU;
              const fU = {
                type: "log",
                payload: hU,
                meta: WU
              };
              RU.debug("Pushing log\n", fU), wp(PU.getActiveUserAction(), fU) || pU.execute(fU)
            } catch (CU) {
              RU.error("Error pushing log\n", CU)
            }
          }
        }
      }(qU)), function(UU) {
        let {
          internalLogger: RU,
          config: gU,
          metas: tU,
          transports: pU,
          tracesApi: EU,
          userActionsApi: PU
        } = UU;
        RU.debug("Initializing measurements API");
        let TU = null;
        return {
          pushMeasurement: function(UU) {
            let {
              skipDedupe: qU,
              context: KU,
              spanContext: cU,
              timestampOverwriteMs: GU
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!sR(tU).shouldCapture()) return;
              const jU = vR(KU),
                uU = lR(lR({}, UU), {}, {
                  trace: cU ? {
                    trace_id: cU.traceId,
                    span_id: cU.spanId
                  } : EU.getTraceContext(),
                  timestamp: GU ? hR(GU) : CR(),
                  context: zU(jU) ? void 0 : jU
                }),
                CU = {
                  type: uU.type,
                  values: uU.values,
                  context: uU.context
                };
              if (!qU && gU.dedupe && !mU(TU) && WR(CU, TU)) return void RU.debug("Skipping measurement push because it is the same as the last one\n", uU);
              const hU = TU,
                QU = HE(tU);
              if (TU !== hU && !qU && gU.dedupe && WR(CU, TU)) return;
              TU = CU;
              const eU = {
                type: "measurement",
                payload: uU,
                meta: QU
              };
              RU.debug("Pushing measurement\n", eU), wp(PU.getActiveUserAction(), eU) || pU.execute(eU)
            } catch (jU) {
              RU.error("Error pushing measurement\n", jU)
            }
          }
        }
      }(qU)), KU), PU)
    }

    function lE(UU) {
      const RU = AE(UU),
        gU = DE(RU, UU);
      if (CU() && !UU.isolate) return void gU.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      gU.debug("Initializing");
      const tU = function(UU, RU) {
          let gU, tU = [],
            pU = [],
            EU = [],
            PU = 0,
            TU = 0;
          const qU = () => tU.reduce(((UU, RU) => Object.assign(UU, ZU(RU) ? RU() : RU)), {}),
            KU = () => {
              if (pU.length) {
                const UU = qU();
                pU.forEach((RU => RU(UU)))
              }
            };
          return {
            add: function() {
              for (var UU = arguments.length, gU = new Array(UU), pU = 0; pU < UU; pU++) gU[pU] = arguments[pU];
              RU.debug("Adding metas\n", gU), tU.push(...gU), KU()
            },
            remove: function() {
              for (var UU = arguments.length, gU = new Array(UU), pU = 0; pU < UU; pU++) gU[pU] = arguments[pU];
              RU.debug("Removing metas\n", gU), tU = tU.filter((UU => !gU.includes(UU))), KU()
            },
            addListener: UU => {
              RU.debug("Adding metas listener\n", UU), pU.push(UU)
            },
            removeListener: UU => {
              RU.debug("Removing metas listener\n", UU), pU = pU.filter((RU => RU !== UU))
            },
            capture: UU => {
              var RU;
              const tU = void 0 !== gU,
                pU = null !== (RU = gU) && void 0 !== RU ? RU : EU;
              tU || (gU = pU, PU = 0, TU = pU.length);
              try {
                for (; PU < TU;) {
                  const UU = pU[PU++];
                  null === UU || void 0 === UU || UU()
                }
                const RU = dE(qU());
                return null === UU || void 0 === UU || UU(), RU
              } finally {
                tU || (gU = void 0)
              }
            },
            addCaptureListener: UU => {
              EU.push(UU)
            },
            removeCaptureListener: UU => {
              EU = EU.filter((RU => RU !== UU))
            },
            get value() {
              return qU()
            }
          }
        }(0, gU),
        pU = kE(RU, gU, UU, tU),
        EU = NE(RU, gU, UU, tU, pU),
        PU = function(UU, RU, gU, tU, pU, EU) {
          RU.debug("Initializing instrumentations");
          const PU = [];
          return {
            add: function() {
              RU.debug("Adding instrumentations");
              for (var TU = arguments.length, qU = new Array(TU), KU = 0; KU < TU; KU++) qU[KU] = arguments[KU];
              qU.forEach((TU => {
                RU.debug(`Adding "${TU.name}" instrumentation`), PU.some((UU => UU.name === TU.name)) ? RU.warn(`Instrumentation ${TU.name} is already added`) : (TU.unpatchedConsole = UU, TU.internalLogger = RU, TU.config = gU, TU.metas = tU, TU.transports = pU, TU.api = EU, PU.push(TU), TU.initialize())
              }))
            },
            get instrumentations() {
              return [...PU]
            },
            remove: function() {
              RU.debug("Removing instrumentations");
              for (var UU = arguments.length, gU = new Array(UU), tU = 0; tU < UU; tU++) gU[tU] = arguments[tU];
              gU.forEach((UU => {
                var gU, tU;
                RU.debug(`Removing "${UU.name}" instrumentation`);
                const pU = PU.reduce(((RU, gU, tU) => null === RU && gU.name === UU.name ? tU : null), null);
                null !== pU ? (null === (gU = (tU = PU[pU]).destroy) || void 0 === gU || gU.call(tU), PU.splice(pU, 1)) : RU.warn(`Instrumentation "${UU.name}" is not added`)
              }))
            }
          }
        }(RU, gU, UU, tU, pU, EU),
        TU = QU(RU, gU, UU, tU, pU, EU, PU);
      return sE(TU),
        function(UU) {
          UU.transports.add(...UU.config.transports), UU.transports.addBeforeSendHooks(UU.config.beforeSend)
        }(TU),
        function(UU) {
          UU.instrumentations.add(...UU.config.instrumentations)
        }(TU), TU
    }

    function OE(UU) {
      const RU = BE(UU);
      if (RU) return lE(RU)
    }
  },
  6375: function(UU, RU, gU) {
    var tU;
    ! function(pU, EU) {
      var PU = "function",
        TU = "undefined",
        qU = "object",
        KU = "string",
        cU = "major",
        GU = "model",
        jU = "name",
        uU = "type",
        CU = "vendor",
        hU = "version",
        QU = "architecture",
        eU = "console",
        WU = "mobile",
        fU = "tablet",
        xU = "smarttv",
        mU = "wearable",
        IU = "embedded",
        JU = "Amazon",
        wU = "Apple",
        nU = "ASUS",
        bU = "BlackBerry",
        oU = "Browser",
        ZU = "Chrome",
        aU = "Firefox",
        YU = "Google",
        BU = "Honor",
        VU = "Huawei",
        rU = "LG",
        XU = "Microsoft",
        vU = "Motorola",
        dU = "Nvidia",
        HU = "OnePlus",
        SU = "Opera",
        sU = "OPPO",
        yU = "Samsung",
        kU = "Sharp",
        FU = "Sony",
        iU = "Xiaomi",
        AU = "Zebra",
        zU = "Facebook",
        MU = "Chromium OS",
        DU = "Mac OS",
        LU = " Browser",
        NU = function(UU) {
          for (var RU = {}, gU = 0; gU < UU.length; gU++) RU[UU[gU].toUpperCase()] = UU[gU];
          return RU
        },
        lU = function(UU, RU) {
          return typeof UU === KU && -1 !== OU(RU).indexOf(OU(UU))
        },
        OU = function(UU) {
          return UU.toLowerCase()
        },
        UR = function(UU, RU) {
          if (typeof UU === KU) return UU = UU.replace(/^\s\s*/, ""), typeof RU === TU ? UU : UU.substring(0, 500)
        },
        RR = function(UU, RU) {
          for (var gU, tU, pU, TU, KU, cU, GU = 0; GU < RU.length && !KU;) {
            var jU = RU[GU],
              uU = RU[GU + 1];
            for (gU = tU = 0; gU < jU.length && !KU && jU[gU];)
              if (KU = jU[gU++].exec(UU))
                for (pU = 0; pU < uU.length; pU++) cU = KU[++tU], typeof(TU = uU[pU]) === qU && TU.length > 0 ? 2 === TU.length ? typeof TU[1] == PU ? this[TU[0]] = TU[1].call(this, cU) : this[TU[0]] = TU[1] : 3 === TU.length ? typeof TU[1] !== PU || TU[1].exec && TU[1].test ? this[TU[0]] = cU ? cU.replace(TU[1], TU[2]) : EU : this[TU[0]] = cU ? TU[1].call(this, cU, TU[2]) : EU : 4 === TU.length && (this[TU[0]] = cU ? TU[3].call(this, cU.replace(TU[1], TU[2])) : EU) : this[TU] = cU || EU;
            GU += 2
          }
        },
        gR = function(UU, RU) {
          for (var gU in RU)
            if (typeof RU[gU] === qU && RU[gU].length > 0) {
              for (var tU = 0; tU < RU[gU].length; tU++)
                if (lU(RU[gU][tU], UU)) return "?" === gU ? EU : gU
            } else if (lU(RU[gU], UU)) return "?" === gU ? EU : gU;
          return RU.hasOwnProperty("*") ? RU["*"] : UU
        },
        tR = {
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
        pR = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [hU, [jU, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [hU, [jU, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [jU, hU],
            [/opios[\/ ]+([\w\.]+)/i],
            [hU, [jU, SU + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [hU, [jU, SU + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [hU, [jU, SU]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [hU, [jU, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [hU, [jU, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [jU, hU],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [hU, [jU, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [hU, [jU, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [hU, [jU, "UC" + oU]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [hU, [jU, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [hU, [jU, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [hU, [jU, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [hU, [jU, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [hU, [jU, "Smart Lenovo " + oU]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [jU, /(.+)/, "$1 Secure " + oU], hU
            ],
            [/\bfocus\/([\w\.]+)/i],
            [hU, [jU, aU + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [hU, [jU, SU + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [hU, [jU, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [hU, [jU, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [hU, [jU, SU + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [hU, [jU, "MIUI" + LU]],
            [/fxios\/([\w\.-]+)/i],
            [hU, [jU, aU]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [hU, [jU, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [jU, /(.+)/, "$1Browser"], hU
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [jU, /(.+)/, "$1" + LU], hU
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [hU, [jU, yU + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [hU, [jU, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [jU, "Sogou Mobile"], hU
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [jU, hU],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [jU],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [hU, jU],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [jU, zU], hU
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [jU, hU],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [hU, [jU, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [hU, [jU, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [hU, [jU, ZU + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [jU, ZU + " WebView"], hU
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [hU, [jU, "Android " + oU]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [jU, hU],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [hU, [jU, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [hU, jU],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [jU, [hU, gR, {
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
            [jU, hU],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [jU, "Netscape"], hU
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [jU, hU],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [hU, [jU, aU + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [jU, [hU, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [jU, [hU, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [QU, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [QU, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [QU, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [QU, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [QU, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [QU, /ower/, "", OU]
            ],
            [/ sun4\w[;\)]/i],
            [
              [QU, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [QU, OU]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [GU, [CU, yU],
              [uU, fU]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [GU, [CU, yU],
              [uU, WU]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [GU, [CU, wU],
              [uU, WU]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [GU, [CU, wU],
              [uU, fU]
            ],
            [/(macintosh);/i],
            [GU, [CU, wU]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [GU, [CU, kU],
              [uU, WU]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [GU, [CU, BU],
              [uU, fU]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [GU, [CU, BU],
              [uU, WU]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [GU, [CU, VU],
              [uU, fU]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [GU, [CU, VU],
              [uU, WU]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [GU, /_/g, " "],
              [CU, iU],
              [uU, fU]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [GU, /_/g, " "],
              [CU, iU],
              [uU, WU]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [GU, [CU, sU],
              [uU, WU]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [GU, [CU, gR, {
                OnePlus: ["304", "403", "203"],
                "*": sU
              }],
              [uU, fU]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [GU, [CU, "Vivo"],
              [uU, WU]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [GU, [CU, "Realme"],
              [uU, WU]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [GU, [CU, vU],
              [uU, WU]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [GU, [CU, vU],
              [uU, fU]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [GU, [CU, rU],
              [uU, fU]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [GU, [CU, rU],
              [uU, WU]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [GU, [CU, "Lenovo"],
              [uU, fU]
            ],
            [/(nokia) (t[12][01])/i],
            [CU, GU, [uU, fU]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [GU, /_/g, " "],
              [uU, WU],
              [CU, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [GU, [CU, YU],
              [uU, fU]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [GU, [CU, YU],
              [uU, WU]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [GU, [CU, FU],
              [uU, WU]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [GU, "Xperia Tablet"],
              [CU, FU],
              [uU, fU]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [GU, [CU, HU],
              [uU, WU]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [GU, [CU, JU],
              [uU, fU]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [GU, /(.+)/g, "Fire Phone $1"],
              [CU, JU],
              [uU, WU]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [GU, CU, [uU, fU]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [GU, [CU, bU],
              [uU, WU]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [GU, [CU, nU],
              [uU, fU]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [GU, [CU, nU],
              [uU, WU]
            ],
            [/(nexus 9)/i],
            [GU, [CU, "HTC"],
              [uU, fU]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [CU, [GU, /_/g, " "],
              [uU, WU]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [GU, [CU, "TCL"],
              [uU, fU]
            ],
            [/(itel) ((\w+))/i],
            [
              [CU, OU], GU, [uU, gR, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [GU, [CU, "Acer"],
              [uU, fU]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [GU, [CU, "Meizu"],
              [uU, WU]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [GU, [CU, "Ulefone"],
              [uU, WU]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [GU, [CU, "Energizer"],
              [uU, WU]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [GU, [CU, "Cat"],
              [uU, WU]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [GU, [CU, "Smartfren"],
              [uU, WU]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [GU, [CU, "Nothing"],
              [uU, WU]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [GU, [CU, "Archos"],
              [uU, fU]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [GU, [CU, "Archos"],
              [uU, WU]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [CU, GU, [uU, fU]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [CU, GU, [uU, WU]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [CU, GU, [uU, fU]],
            [/(surface duo)/i],
            [GU, [CU, XU],
              [uU, fU]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [GU, [CU, "Fairphone"],
              [uU, WU]
            ],
            [/(u304aa)/i],
            [GU, [CU, "AT&T"],
              [uU, WU]
            ],
            [/\bsie-(\w*)/i],
            [GU, [CU, "Siemens"],
              [uU, WU]
            ],
            [/\b(rct\w+) b/i],
            [GU, [CU, "RCA"],
              [uU, fU]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [GU, [CU, "Dell"],
              [uU, fU]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [GU, [CU, "Verizon"],
              [uU, fU]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [GU, [CU, "Barnes & Noble"],
              [uU, fU]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [GU, [CU, "NuVision"],
              [uU, fU]
            ],
            [/\b(k88) b/i],
            [GU, [CU, "ZTE"],
              [uU, fU]
            ],
            [/\b(nx\d{3}j) b/i],
            [GU, [CU, "ZTE"],
              [uU, WU]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [GU, [CU, "Swiss"],
              [uU, WU]
            ],
            [/\b(zur\d{3}) b/i],
            [GU, [CU, "Swiss"],
              [uU, fU]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [GU, [CU, "Zeki"],
              [uU, fU]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [CU, "Dragon Touch"], GU, [uU, fU]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [GU, [CU, "Insignia"],
              [uU, fU]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [GU, [CU, "NextBook"],
              [uU, fU]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [CU, "Voice"], GU, [uU, WU]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [CU, "LvTel"], GU, [uU, WU]
            ],
            [/\b(ph-1) /i],
            [GU, [CU, "Essential"],
              [uU, WU]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [GU, [CU, "Envizen"],
              [uU, fU]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [GU, [CU, "MachSpeed"],
              [uU, fU]
            ],
            [/\btu_(1491) b/i],
            [GU, [CU, "Rotor"],
              [uU, fU]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [GU, [CU, dU],
              [uU, fU]
            ],
            [/(sprint) (\w+)/i],
            [CU, GU, [uU, WU]],
            [/(kin\.[onetw]{3})/i],
            [
              [GU, /\./g, " "],
              [CU, XU],
              [uU, WU]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [GU, [CU, AU],
              [uU, fU]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [GU, [CU, AU],
              [uU, WU]
            ],
            [/smart-tv.+(samsung)/i],
            [CU, [uU, xU]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [GU, /^/, "SmartTV"],
              [CU, yU],
              [uU, xU]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [CU, rU],
              [uU, xU]
            ],
            [/(apple) ?tv/i],
            [CU, [GU, wU + " TV"],
              [uU, xU]
            ],
            [/crkey/i],
            [
              [GU, ZU + "cast"],
              [CU, YU],
              [uU, xU]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [GU, [CU, JU],
              [uU, xU]
            ],
            [/(shield \w+ tv)/i],
            [GU, [CU, dU],
              [uU, xU]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [GU, [CU, kU],
              [uU, xU]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [GU, [CU, FU],
              [uU, xU]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [GU, [CU, iU],
              [uU, xU]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [CU, GU, [uU, xU]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [CU, UR],
              [GU, UR],
              [uU, xU]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [GU, [uU, xU]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [uU, xU]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [CU, GU, [uU, eU]],
            [/droid.+; (shield)( bui|\))/i],
            [GU, [CU, dU],
              [uU, eU]
            ],
            [/(playstation \w+)/i],
            [GU, [CU, FU],
              [uU, eU]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [GU, [CU, XU],
              [uU, eU]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [GU, [CU, yU],
              [uU, mU]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [CU, GU, [uU, mU]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [GU, [CU, sU],
              [uU, mU]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [GU, [CU, wU],
              [uU, mU]
            ],
            [/(opwwe\d{3})/i],
            [GU, [CU, HU],
              [uU, mU]
            ],
            [/(moto 360)/i],
            [GU, [CU, vU],
              [uU, mU]
            ],
            [/(smartwatch 3)/i],
            [GU, [CU, FU],
              [uU, mU]
            ],
            [/(g watch r)/i],
            [GU, [CU, rU],
              [uU, mU]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [GU, [CU, AU],
              [uU, mU]
            ],
            [/droid.+; (glass) \d/i],
            [GU, [CU, YU],
              [uU, mU]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [CU, GU, [uU, mU]],
            [/; (quest( \d| pro)?)/i],
            [GU, [CU, zU],
              [uU, mU]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [CU, [uU, IU]],
            [/(aeobc)\b/i],
            [GU, [CU, JU],
              [uU, IU]
            ],
            [/(homepod).+mac os/i],
            [GU, [CU, wU],
              [uU, IU]
            ],
            [/windows iot/i],
            [
              [uU, IU]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [GU, [uU, WU]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [GU, [uU, fU]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [uU, fU]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [uU, WU]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [GU, [CU, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [hU, [jU, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [jU, hU],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [hU, [jU, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [jU, hU],
            [/ladybird\//i],
            [
              [jU, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [hU, jU]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [jU, hU],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [jU, [hU, gR, tR]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [hU, gR, tR],
              [jU, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [hU, /_/g, "."],
              [jU, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [jU, DU],
              [hU, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [hU, jU],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [jU, /(.+)/, "$1 Touch"], hU
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [jU, hU],
            [/\(bb(10);/i],
            [hU, [jU, bU]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [hU, [jU, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [hU, [jU, aU + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [hU, [jU, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [hU, [jU, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [hU, [jU, ZU + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [jU, MU], hU
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [jU, hU],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [jU, "Solaris"], hU
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [jU, hU]
          ]
        },
        ER = function(UU, RU) {
          if (typeof UU === qU && (RU = UU, UU = EU), !(this instanceof ER)) return new ER(UU, RU).getResult();
          var gU = typeof pU !== TU && pU.navigator ? pU.navigator : EU,
            tU = UU || (gU && gU.userAgent ? gU.userAgent : ""),
            eU = gU && gU.userAgentData ? gU.userAgentData : EU,
            xU = RU ? function(UU, RU) {
              var gU = {};
              for (var tU in UU) RU[tU] && RU[tU].length % 2 === 0 ? gU[tU] = RU[tU].concat(UU[tU]) : gU[tU] = UU[tU];
              return gU
            }(pR, RU) : pR,
            mU = gU && gU.userAgent == tU;
          return this.getBrowser = function() {
            var UU, RU = {};
            return RU[jU] = EU, RU[hU] = EU, RR.call(RU, tU, xU.browser), RU[cU] = typeof(UU = RU[hU]) === KU ? UU.replace(/[^\d\.]/g, "").split(".")[0] : EU, mU && gU && gU.brave && typeof gU.brave.isBrave == PU && (RU[jU] = "Brave"), RU
          }, this.getCPU = function() {
            var UU = {};
            return UU[QU] = EU, RR.call(UU, tU, xU.cpu), UU
          }, this.getDevice = function() {
            var UU = {};
            return UU[CU] = EU, UU[GU] = EU, UU[uU] = EU, RR.call(UU, tU, xU.device), mU && !UU[uU] && eU && eU.mobile && (UU[uU] = WU), mU && "Macintosh" == UU[GU] && gU && typeof gU.standalone !== TU && gU.maxTouchPoints && gU.maxTouchPoints > 2 && (UU[GU] = "iPad", UU[uU] = fU), UU
          }, this.WC = function() {
            var UU = {};
            return UU[jU] = EU, UU[hU] = EU, RR.call(UU, tU, xU.engine), UU
          }, this.getOS = function() {
            var UU = {};
            return UU[jU] = EU, UU[hU] = EU, RR.call(UU, tU, xU.os), mU && !UU[jU] && eU && eU.platform && "Unknown" != eU.platform && (UU[jU] = eU.platform.replace(/chrome os/i, MU).replace(/macos/i, DU)), UU
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.WC(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return tU
          }, this.setUA = function(UU) {
            return tU = typeof UU === KU && UU.length > 500 ? UR(UU, 500) : UU, this
          }, this.setUA(tU), this
        };
      ER.VERSION = "1.0.41", ER.BROWSER = NU([jU, hU, cU]), ER.CPU = NU([QU]), ER.DEVICE = NU([GU, CU, uU, eU, WU, xU, fU, mU, IU]), ER.ENGINE = ER.OS = NU([jU, hU]), typeof RU !== TU ? (UU.exports && (RU = UU.exports = ER), RU.UAParser = ER) : gU.amdO ? (tU = function() {
        return ER
      }.call(RU, gU, RU, UU)) === EU || (UU.exports = tU) : typeof pU !== TU && (pU.UAParser = ER);
      var PR = typeof pU !== TU && (pU.jQuery || pU.Zepto);
      if (PR && !PR.ua) {
        var TR = new ER;
        PR.ua = TR.getResult(), PR.ua.get = function() {
          return TR.getUA()
        }, PR.ua.set = function(UU) {
          TR.setUA(UU);
          var RU = TR.getResult();
          for (var gU in RU) PR.ua[gU] = RU[gU]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);