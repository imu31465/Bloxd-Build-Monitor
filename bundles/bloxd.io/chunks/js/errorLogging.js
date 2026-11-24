export const id = 31;
export const ids = [31];
export const modules = {
  6884: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BaseExtension: () => Sg,
      BaseInstrumentation: () => Hg,
      BaseTransport: () => eb,
      CSPInstrumentation: () => Jb,
      ConsoleInstrumentation: () => Lg,
      ConsoleTransport: () => tX,
      EVENT_CLICK: () => PH,
      EVENT_NAVIGATION: () => QH,
      EVENT_ROUTE_CHANGE: () => OH,
      EVENT_SESSION_EXTEND: () => ZH,
      EVENT_SESSION_RESUME: () => hH,
      EVENT_SESSION_START: () => wH,
      EVENT_VIEW_CHANGED: () => DH,
      ErrorsInstrumentation: () => Ag,
      FetchTransport: () => DX,
      InternalLoggerLevel: () => MH,
      LogLevel: () => Pg,
      MAX_SESSION_PERSISTENCE_TIME: () => qS,
      NavigationInstrumentation: () => pb,
      Observable: () => ng,
      PerformanceInstrumentation: () => Tt,
      PersistentSessionsManager: () => iH,
      SESSION_EXPIRATION_TIME: () => XS,
      SESSION_INACTIVITY_TIME: () => xS,
      STORAGE_KEY: () => bS,
      SessionInstrumentation: () => tg,
      TransportItemType: () => rb,
      UserActionInstrumentation: () => Zb,
      UserActionState: () => jb,
      VERSION: () => gg,
      ViewInstrumentation: () => Vg,
      VolatileSessionsManager: () => WH,
      WebVitalsInstrumentation: () => At,
      allLogLevels: () => Dg,
      browserMeta: () => Tb,
      buildStackFrame: () => bg,
      captureMetas: () => iX,
      createInternalLogger: () => OX,
      createPromiseBuffer: () => aX,
      createSession: () => lb,
      deepEqual: () => nH,
      defaultEventDomain: () => tS,
      defaultExceptionType: () => Jg,
      defaultGlobalObjectKey: () => dX,
      defaultInternalLoggerLevel: () => RH,
      defaultLogLevel: () => Qg,
      faro: () => jS,
      genShortID: () => CH,
      getCurrentTimestamp: () => KH,
      getDataFromSafariExtensions: () => kg,
      getIgnoreUrls: () => TS,
      getInternalFaroFromGlobalObject: () => kS,
      getStackFramesFromError: () => Kg,
      getTransportBody: () => gX,
      getUrlFromResource: () => lS,
      getWebInstrumentations: () => sb,
      globalObject: () => IS,
      initializeFaro: () => eX,
      internalGlobalObjectKey: () => fS,
      isArray: () => vS,
      isBoolean: () => JS,
      isDomError: () => zS,
      isDomException: () => US,
      isElement: () => sS,
      isElementDefined: () => pS,
      IK: () => RS,
      isError: () => iS,
      isErrorDefined: () => VS,
      isErrorEvent: () => WS,
      isEvent: () => yS,
      isEventDefined: () => AS,
      isFunction: () => cS,
      isInstanceOf: () => PS,
      isInt: () => ZS,
      isInternalFaroOnGlobalObject: () => KS,
      isMap: () => MS,
      isMapDefined: () => BS,
      isNull: () => DS,
      isNumber: () => hS,
      isObject: () => dS,
      isPrimitive: () => YS,
      isRegExp: () => ES,
      isString: () => wS,
      isSymbol: () => OS,
      isSyntheticEvent: () => FS,
      isThenable: () => LS,
      isToString: () => nS,
      isTypeof: () => CS,
      isUndefined: () => QS,
      makeCoreConfig: () => EX,
      noop: () => BH,
      osMeta: () => ob,
      parseStacktrace: () => jg,
      sdkMeta: () => mb,
      setInternalFaroOnGlobalObject: () => aS,
      transportItemTypeToBodyKey: () => SX,
      unknownString: () => yg,
      userActionDataAttribute: () => ot,
      userActionTimeoutDataAttribute: () => lt
    });
    const tS = "browser",
      bS = "com.grafana.faro.session",
      XS = 144e5,
      xS = 9e5,
      NS = 1e3,
      qS = xS,
      uS = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: qS
      };
    const IS = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof gS.g ? gS.g : "undefined" !== typeof self ? self : void 0;
    const fS = "_faroInternal";

    function kS() {
      return IS[fS]
    }

    function aS(SS) {
      SS.config.isolate ? SS.internalLogger.debug("Skipping registering internal Faro instance on global object") : (SS.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(IS, fS, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: SS
      }))
    }

    function KS() {
      return fS in IS
    }
    let jS = {
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

    function GS(SS, HS, gS, tS, bS, XS, xS) {
      return HS.debug("Initializing Faro"), jS = {
          api: XS,
          config: gS,
          instrumentations: xS,
          internalLogger: HS,
          metas: tS,
          pause: bS.pause,
          transports: bS,
          unpatchedConsole: SS,
          unpause: bS.unpause
        }, aS(jS),
        function(SS) {
          if (SS.config.preventGlobalExposure) SS.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (SS.internalLogger.debug(`Registering public faro reference in the global scope using "${SS.config.globalObjectKey}" key`), SS.config.globalObjectKey in IS) return void SS.internalLogger.warn(`Skipping global registration due to key "${SS.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(IS, SS.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: SS
            })
          }
        }(jS), jS
    }

    function CS(SS, HS) {
      return typeof SS === HS
    }

    function nS(SS, HS) {
      return Object.prototype.toString.call(SS) === `[object ${HS}]`
    }

    function PS(SS, HS) {
      try {
        return SS instanceof HS
      } catch (gS) {
        return !1
      }
    }
    const QS = SS => CS(SS, "undefined"),
      DS = SS => CS(SS, "null"),
      wS = SS => CS(SS, "string"),
      hS = SS => CS(SS, "number") && !isNaN(SS) || CS(SS, "bigint"),
      ZS = SS => hS(SS) && Number.isInteger(SS),
      JS = SS => CS(SS, "boolean"),
      OS = SS => CS(SS, "symbol"),
      dS = SS => !DS(SS) && CS(SS, "object"),
      cS = SS => CS(SS, "function"),
      vS = SS => nS(SS, "Array"),
      ES = SS => nS(SS, "RegExp"),
      LS = SS => cS(null === SS || void 0 === SS ? void 0 : SS.then),
      YS = SS => !dS(SS) && !cS(SS),
      AS = "undefined" !== typeof Event,
      yS = SS => AS && PS(SS, Event),
      VS = "undefined" !== typeof Error,
      iS = SS => VS && PS(SS, Error),
      WS = SS => nS(SS, "ErrorEvent"),
      zS = SS => nS(SS, "DOMError"),
      US = SS => nS(SS, "DOMException"),
      pS = "undefined" !== typeof Element,
      sS = SS => pS && PS(SS, Element),
      BS = "undefined" !== typeof Map,
      MS = SS => BS && PS(SS, Map),
      FS = SS => dS(SS) && "nativeEvent" in SS && "preventDefault" in SS && "stopPropagation" in SS;

    function RS(SS) {
      return null == SS || (vS(SS) || wS(SS) ? 0 === SS.length : !!dS(SS) && 0 === Object.keys(SS).length)
    }

    function TS() {
      return jS.transports.transports.flatMap((SS => SS.getIgnoreUrls()))
    }

    function oS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return TS().some((HS => SS && null != SS.match(HS)))
    }

    function lS(SS) {
      return wS(SS) ? SS : SS instanceof URL ? SS.href : !RS(SS) && cS(null === SS || void 0 === SS ? void 0 : SS.toString) ? SS.toString() : void 0
    }
    const mS = "sessionStorage",
      eS = "localStorage";

    function rS(SS) {
      try {
        let HS;
        HS = window[SS];
        const gS = "__faro_storage_test__";
        return HS.setItem(gS, gS), HS.removeItem(gS), !0
      } catch (gS) {
        var HS;
        return null === (HS = jS.internalLogger) || void 0 === HS || HS.info(`Web storage of type ${SS} is not available. Reason: ${gS}`), !1
      }
    }

    function SH(SS, HS) {
      return XH(HS) ? window[HS].getItem(SS) : null
    }

    function HH(SS, HS, gS) {
      if (XH(gS)) try {
        window[gS].setItem(SS, HS)
      } catch (tS) {}
    }

    function gH(SS, HS) {
      XH(HS) && window[HS].removeItem(SS)
    }
    const tH = rS(eS),
      bH = rS(mS);

    function XH(SS) {
      return SS === eS ? tH : SS === mS && bH
    }

    function xH(SS) {
      return xH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, xH(SS)
    }

    function NH(SS) {
      var HS = function(SS, HS) {
        if ("object" != xH(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != xH(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == xH(HS) ? HS : HS + ""
    }

    function qH(SS, HS, gS) {
      return (HS = NH(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function uH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function IH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? uH(Object(gS), !0).forEach((function(HS) {
          qH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : uH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function fH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS;
      var HS, gS, tS;
      const bS = SS.config.sessionTracking,
        XS = null !== (HS = null !== (gS = null === bS || void 0 === bS || null === (tS = bS.sampler) || void 0 === tS ? void 0 : tS.call(bS, {
          metas: SS.metas.value
        })) && void 0 !== gS ? gS : null === bS || void 0 === bS ? void 0 : bS.samplingRate) && void 0 !== HS ? HS : 1,
        xS = "number" === typeof XS ? function(SS) {
          return Math.min(1, Math.max(0, SS))
        }(XS) : 0;
      if (!(xS > 0)) return !1;
      if (1 === xS) return !0;
      try {
        const SS = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === SS || void 0 === SS ? void 0 : SS.getRandomValues)) {
          const HS = new Uint32Array(1);
          return SS.getRandomValues(HS), HS[0] / Math.pow(2, 32) < xS
        }
      } catch (NS) {}
      return Math.random() < xS
    }

    function kH() {
      return Date.now()
    }

    function aH() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function KH() {
      return (new Date).toISOString()
    }

    function jH(SS) {
      return new Date(SS).toISOString()
    }
    const GH = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function CH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const HS = new Uint32Array(SS),
        gS = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === gS || void 0 === gS ? void 0 : gS.getRandomValues) gS.getRandomValues(HS);
      else
        for (let bS = 0; bS < SS; bS++) HS[bS] = Math.floor(4294967296 * Math.random());
      let tS = "";
      for (let bS = 0; bS < SS; bS++) tS += GH[HS[bS] % 59];
      return tS
    }

    function nH(SS, HS) {
      if (SS === HS) return !0;
      if (CS(SS, "number") && isNaN(SS)) return CS(HS, "number") && isNaN(HS);
      const gS = vS(SS),
        tS = vS(HS);
      if (gS !== tS) return !1;
      if (gS && tS) {
        const gS = SS.length;
        if (gS !== HS.length) return !1;
        for (let tS = gS; 0 !== tS--;)
          if (!nH(SS[tS], HS[tS])) return !1;
        return !0
      }
      const bS = dS(SS),
        XS = dS(HS);
      if (bS !== XS) return !1;
      if (SS && HS && bS && XS) {
        const gS = Object.keys(SS),
          tS = Object.keys(HS);
        if (gS.length !== tS.length) return !1;
        for (let SS of gS)
          if (!tS.includes(SS)) return !1;
        for (let bS of gS)
          if (!nH(SS[bS], HS[bS])) return !1;
        return !0
      }
      return !1
    }
    const PH = "click",
      QH = "navigation",
      DH = "view_changed",
      wH = "session_start",
      hH = "session_resume",
      ZH = "session_extend",
      JH = "service_name_override",
      OH = "route_change";

    function dH() {
      let {
        sessionId: SS,
        started: HS,
        lastActivity: gS,
        isSampled: tS = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, bS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jS;
      var XS;
      const xS = kH(),
        NS = null === (XS = bS.config) || void 0 === XS || null === (XS = XS.sessionTracking) || void 0 === XS ? void 0 : XS.generateSessionId;
      return null == SS && (SS = "function" === typeof NS ? NS() : CH()), {
        sessionId: SS,
        lastActivity: null !== gS && void 0 !== gS ? gS : xS,
        started: null !== HS && void 0 !== HS ? HS : xS,
        isSampled: tS
      }
    }

    function cH(SS) {
      if (null == SS) return !1;
      const HS = kH();
      return HS - SS.started < 144e5 && HS - SS.lastActivity < xS
    }

    function vH(SS) {
      let {
        fetchUserSession: HS,
        storeUserSession: gS,
        adoptSession: tS,
        updateInterval: bS = 0
      } = SS, NS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jS, qS = 0;
      return function() {
        let {
          forceSessionExtend: SS = !1,
          refreshActivity: uS = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var IS, fS;
        if (!HS || !gS) return;
        const kS = kH();
        if (!SS && kS < qS && qS - kS <= bS) return;
        const aS = NS.config.sessionTracking,
          KS = null === aS || void 0 === aS ? void 0 : aS.persistent;
        if (KS && !tH || !KS && !bH) return;
        const jS = HS();
        if (qS = Math.min(kS + bS, (null !== (IS = null === jS || void 0 === jS ? void 0 : jS.started) && void 0 !== IS ? IS : kS) + XS, (null !== (fS = null === jS || void 0 === jS ? void 0 : jS.lastActivity) && void 0 !== fS ? fS : kS) + xS), !1 === SS && cH(jS)) {
          var GS;
          uS && gS(IH(IH({}, jS), {}, {
            lastActivity: kS
          }));
          const SS = null === (GS = NS.metas.value.session) || void 0 === GS ? void 0 : GS.id;
          null != tS && null != jS.sessionMeta && jS.sessionId !== SS && tS(jS.sessionMeta)
        } else {
          var CS, nS, PS;
          let SS = LH(dH({
            isSampled: fH(NS)
          }, NS), jS, NS);
          qS = kS + bS, gS(SS), null === (CS = NS.api) || void 0 === CS || CS.setSession(SS.sessionMeta), null === aS || void 0 === aS || null === (nS = aS.onSessionChange) || void 0 === nS || nS.call(aS, null !== (PS = null === jS || void 0 === jS ? void 0 : jS.sessionMeta) && void 0 !== PS ? PS : null, SS.sessionMeta)
        }
      }
    }

    function EH(SS) {
      let HS, {
          fetchUserSession: gS,
          storeUserSession: tS,
          updateInterval: bS = 0
        } = SS,
        XS = 0;
      return SS => {
        const xS = kH();
        if (SS === HS && xS < XS && XS - xS <= bS) return;
        HS = SS, XS = xS + bS;
        const NS = gS();
        (null === NS || void 0 === NS ? void 0 : NS.sessionId) === SS && cH(NS) && tS(IH(IH({}, NS), {}, {
          lastActivity: xS
        }))
      }
    }

    function LH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jS;
      var tS, bS, XS, xS, NS, qS;
      const uS = IH(IH({}, SS), {}, {
          sessionMeta: {
            id: SS.sessionId,
            attributes: AH(IH(IH(IH({}, null === (tS = gS.config.sessionTracking) || void 0 === tS || null === (tS = tS.session) || void 0 === tS ? void 0 : tS.attributes), null !== (bS = null === (XS = gS.metas.value.session) || void 0 === XS ? void 0 : XS.attributes) && void 0 !== bS ? bS : {}), {}, {
              isSampled: SS.isSampled.toString()
            }))
          }
        }),
        IS = null !== (xS = null === (NS = gS.metas.value.session) || void 0 === NS ? void 0 : NS.overrides) && void 0 !== xS ? xS : null === HS || void 0 === HS || null === (qS = HS.sessionMeta) || void 0 === qS ? void 0 : qS.overrides;
      RS(IS) || (uS.sessionMeta.overrides = IS);
      const fS = null === HS || void 0 === HS ? void 0 : HS.sessionId;
      return null != fS && (uS.sessionMeta.attributes.previousSession = fS), uS
    }

    function YH(SS) {
      let {
        fetchUserSession: HS,
        storeUserSession: gS
      } = SS, tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jS, bS = !1;
      return function(SS) {
        if (bS) return;
        const XS = SS.session,
          xS = HS();
        let NS = null === XS || void 0 === XS ? void 0 : XS.id;
        const qS = null === XS || void 0 === XS ? void 0 : XS.attributes,
          uS = null === XS || void 0 === XS ? void 0 : XS.overrides,
          IS = null === xS || void 0 === xS ? void 0 : xS.sessionMeta,
          fS = null === IS || void 0 === IS ? void 0 : IS.overrides,
          kS = !!uS && !nH(uS, fS),
          aS = !!qS && !nH(qS, null === IS || void 0 === IS ? void 0 : IS.attributes);
        if (XS && NS !== (null === xS || void 0 === xS ? void 0 : xS.sessionId) || aS || kS) {
          var KS, jS;
          const SS = null != xS && NS === xS.sessionId,
            HS = LH(SS ? xS : dH({
              sessionId: NS,
              isSampled: fH(tS)
            }, tS), xS, tS),
            XS = null === xS || void 0 === xS || null === (KS = xS.sessionMeta) || void 0 === KS || null === (KS = KS.attributes) || void 0 === KS ? void 0 : KS.previousSession;
          SS && null != XS && XS !== HS.sessionId && (HS.sessionMeta.attributes.previousSession = XS), (null === (jS = HS.sessionMeta.attributes) || void 0 === jS ? void 0 : jS.previousSession) === HS.sessionId && delete HS.sessionMeta.attributes.previousSession, gS(HS),
            function(SS, HS) {
              let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var bS, XS, xS;
              if (!HS) return;
              const NS = gS.serviceName,
                qS = null !== (bS = null !== (XS = tS.serviceName) && void 0 !== XS ? XS : null === (xS = SS.metas.value.app) || void 0 === xS ? void 0 : xS.name) && void 0 !== bS ? bS : "";
              NS && NS !== qS && SS.api.pushEvent(JH, {
                serviceName: NS,
                previousServiceName: qS
              })
            }(tS, kS, uS, fS), bS = !0;
          try {
            tS.api.setSession(HS.sessionMeta)
          } finally {
            bS = !1
          }
        }
      }
    }

    function AH(SS) {
      const HS = {};
      for (const gS of Object.keys(SS)) {
        const tS = SS[gS];
        void 0 !== tS && (HS[gS] = tS)
      }
      return HS
    }

    function yH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== SS && void 0 !== SS ? SS : {}, function() {
        const SS = new WeakSet;
        return function(HS, gS) {
          if (dS(gS) && null !== gS) {
            if (SS.has(gS)) return null;
            SS.add(gS)
          }
          return gS
        }
      }())
    }

    function VH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const HS = {};
      for (const [gS, tS] of Object.entries(SS)) HS[gS] = dS(tS) && null !== tS ? yH(tS) : String(tS);
      return HS
    }
    var iH = class SS {
      constructor() {
        var HS = this;
        let gS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS;
        this.context = gS, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = SS => {
          this.adopting = !0;
          try {
            var HS;
            null === (HS = this.context.api) || void 0 === HS || HS.setSession(SS)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: SS = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return HS.updateUserSession({
            refreshActivity: SS
          })
        }, this.recordActivity = EH({
          fetchUserSession: SS.fetchUserSession,
          storeUserSession: SS.storeUserSession,
          updateInterval: NS
        }), this.updateUserSession = vH({
          fetchUserSession: SS.fetchUserSession,
          storeUserSession: SS.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: NS
        }, gS), this.init()
      }
      static removeUserSession() {
        gH(bS, SS.storageTypeLocal)
      }
      static storeUserSession(HS) {
        HH(bS, yH(HS), SS.storageTypeLocal)
      }
      static fetchUserSession() {
        const HS = SH(bS, SS.storageTypeLocal);
        return HS ? JSON.parse(HS) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var SS;
            this.updateSession({
              refreshActivity: !1
            });
            const HS = null === (SS = this.context.api) || void 0 === SS || null === (SS = SS.getSession()) || void 0 === SS ? void 0 : SS.id;
            HS && this.recordActivity(HS)
          }
        })), this.context.metas.addListener(YH({
          fetchUserSession: SS.fetchUserSession,
          storeUserSession: SS.storeUserSession
        }, this.context))
      }
    };
    iH.storageTypeLocal = eS;
    var WH = class SS {
      constructor() {
        var HS = this;
        let gS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS;
        this.context = gS, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: SS = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return HS.updateUserSession({
            refreshActivity: SS
          })
        }, this.recordActivity = EH({
          fetchUserSession: SS.fetchUserSession,
          storeUserSession: SS.storeUserSession,
          updateInterval: NS
        }), this.updateUserSession = vH({
          fetchUserSession: SS.fetchUserSession,
          storeUserSession: SS.storeUserSession,
          updateInterval: NS
        }, gS), this.init()
      }
      static removeUserSession() {
        gH(bS, SS.storageTypeSession)
      }
      static storeUserSession(HS) {
        HH(bS, yH(HS), SS.storageTypeSession)
      }
      static fetchUserSession() {
        const HS = SH(bS, SS.storageTypeSession);
        return HS ? JSON.parse(HS) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var SS;
            this.updateSession({
              refreshActivity: !1
            });
            const HS = null === (SS = this.context.api) || void 0 === SS || null === (SS = SS.getSession()) || void 0 === SS ? void 0 : SS.id;
            HS && this.recordActivity(HS)
          }
        })), this.context.metas.addListener(YH({
          fetchUserSession: SS.fetchUserSession,
          storeUserSession: SS.storeUserSession
        }, this.context))
      }
    };
    WH.storageTypeSession = mS;
    const zH = new WeakMap;

    function UH(SS) {
      let HS = zH.get(SS);
      if (!HS) {
        let gS = [],
          tS = [];
        HS = {
          addSessionUpdateListener: SS => {
            gS.push(SS)
          },
          removeSessionUpdateListener: SS => {
            gS = gS.filter((HS => HS !== SS))
          },
          notifySessionUpdate: SS => {
            gS.forEach((HS => HS(SS)))
          },
          shouldCapture: () => tS.every((SS => SS())),
          addCaptureFilter: SS => {
            tS.push(SS)
          },
          removeCaptureFilter: SS => {
            tS = tS.filter((HS => HS !== SS))
          }
        }, zH.set(SS, HS)
      }
      return HS
    }
    var pH = class {
      constructor(SS, HS, gS) {
        this.metas = SS, this.transports = HS, this.onActivate = gS, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = SS => {
          var HS, gS, tS;
          const bS = this.pending;
          var XS, xS;
          if ("overrides" === SS.type) return void(this.pending = {
            reset: null !== (XS = null === bS || void 0 === bS ? void 0 : bS.reset) && void 0 !== XS && XS,
            inheritOverrides: null === (xS = null === bS || void 0 === bS ? void 0 : bS.inheritOverrides) || void 0 === xS || xS,
            session: IH(IH({}, null === bS || void 0 === bS ? void 0 : bS.session), {}, {
              overrides: IH(IH({}, null === bS || void 0 === bS ? void 0 : bS.session.overrides), SS.overrides)
            })
          });
          const NS = SS.session,
            qS = RS(NS) || null != NS && "id" in NS && !NS.id,
            uS = null !== (HS = null === NS || void 0 === NS ? void 0 : NS.overrides) && void 0 !== HS ? HS : null === bS || void 0 === bS ? void 0 : bS.session.overrides;
          this.pending = {
            reset: qS || !(null === NS || void 0 === NS ? void 0 : NS.id) && null !== (gS = null === bS || void 0 === bS ? void 0 : bS.reset) && void 0 !== gS && gS,
            inheritOverrides: !(!SS.overrides && void 0 !== (null === NS || void 0 === NS ? void 0 : NS.overrides)) && (null === (tS = null === bS || void 0 === bS ? void 0 : bS.inheritOverrides) || void 0 === tS || tS),
            session: {
              id: null === NS || void 0 === NS ? void 0 : NS.id,
              attributes: (null === NS || void 0 === NS ? void 0 : NS.attributes) && IH({}, NS.attributes),
              overrides: SS.overrides ? IH(IH({}, null === bS || void 0 === bS ? void 0 : bS.session.overrides), SS.overrides) : uS && IH({}, uS)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var SS, HS;
        this.waiting = !0, UH(this.metas).addSessionUpdateListener(this.recordUpdate), UH(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (SS = (HS = this.metas).addCaptureListener) || void 0 === SS || SS.call(HS, this.activate), this.activate()
      }
      destroy() {
        var SS, HS;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), UH(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (SS = (HS = this.metas).removeCaptureListener) || void 0 === SS || SS.call(HS, this.activate), UH(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function sH(SS) {
      return (null === SS || void 0 === SS ? void 0 : SS.persistent) ? iH : WH
    }

    function BH() {}
    let MH = function(SS) {
      return SS[SS.OFF = 0] = "OFF", SS[SS.ERROR = 1] = "ERROR", SS[SS.WARN = 2] = "WARN", SS[SS.INFO = 3] = "INFO", SS[SS.VERBOSE = 4] = "VERBOSE", SS
    }({});
    const FH = {
        debug: BH,
        error: BH,
        info: BH,
        prefix: "Faro",
        warn: BH
      },
      RH = 1;

    function TH(SS) {
      return TH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, TH(SS)
    }

    function oH(SS) {
      var HS = function(SS, HS) {
        if ("object" != TH(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != TH(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == TH(HS) ? HS : HS + ""
    }

    function lH(SS, HS, gS) {
      return (HS = oH(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function mH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function eH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? mH(Object(gS), !0).forEach((function(HS) {
          lH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : mH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }
    const rH = eH({}, console);
    var Sg = class {
        constructor() {
          this.unpatchedConsole = rH, this.internalLogger = FH, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
          this.internalLogger.debug(`${this.name}\n`, ...HS)
        }
        logInfo() {
          for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
          this.internalLogger.info(`${this.name}\n`, ...HS)
        }
        logWarn() {
          for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
          this.internalLogger.warn(`${this.name}\n`, ...HS)
        }
        logError() {
          for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
          this.internalLogger.error(`${this.name}\n`, ...HS)
        }
      },
      Hg = class extends Sg {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const gg = "2.12.1";
    var tg = class extends Hg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = gg, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(SS) {
        var HS;
        const gS = SS.session;
        if (gS && gS.id !== (null === (HS = this.notifiedSession) || void 0 === HS ? void 0 : HS.id)) {
          var tS;
          if (this.isAdoptingSession()) return void(this.notifiedSession = gS);
          if (this.notifiedSession && this.notifiedSession.id === (null === (tS = gS.attributes) || void 0 === tS ? void 0 : tS.previousSession)) return this.api.pushEvent(ZH, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = gS);
          this.notifiedSession = gS, this.api.pushEvent(wH, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(SS, HS, gS) {
        const tS = null === gS || void 0 === gS ? void 0 : gS.session;
        let bS, XS, xS = SS.fetchUserSession();
        if (HS.persistent && HS.maxSessionPersistenceTime && xS) {
          const SS = kH();
          xS.lastActivity < SS - HS.maxSessionPersistenceTime && (iH.removeUserSession(), xS = null)
        }
        const NS = cH(xS);
        if ((null === gS || void 0 === gS ? void 0 : gS.reset) || !NS || (null === tS || void 0 === tS ? void 0 : tS.id) && tS.id !== (null === xS || void 0 === xS ? void 0 : xS.sessionId)) {
          var qS, uS, IS, fS, kS, aS;
          XS = dH({
            sessionId: (null === gS || void 0 === gS ? void 0 : gS.reset) ? void 0 : null !== (qS = null === tS || void 0 === tS ? void 0 : tS.id) && void 0 !== qS ? qS : null === (uS = HS.session) || void 0 === uS ? void 0 : uS.id,
            isSampled: fH(this)
          }, this);
          const SS = XS.sessionId,
            KS = gS && NS ? null === xS || void 0 === xS || null === (IS = xS.sessionMeta) || void 0 === IS ? void 0 : IS.overrides : void 0,
            jS = KS ? IH(IH({}, null === (fS = HS.session) || void 0 === fS ? void 0 : fS.overrides), KS) : null === (kS = HS.session) || void 0 === kS ? void 0 : kS.overrides;
          XS.sessionMeta = IH({
            id: SS,
            attributes: IH({
              isSampled: XS.isSampled.toString()
            }, null === (aS = HS.session) || void 0 === aS ? void 0 : aS.attributes)
          }, jS ? {
            overrides: jS
          } : {}), bS = wH
        } else {
          var KS, jS;
          const SS = null === xS || void 0 === xS ? void 0 : xS.sessionId;
          XS = dH({
            sessionId: SS,
            isSampled: xS.isSampled || !1,
            started: null === xS || void 0 === xS ? void 0 : xS.started
          }, this);
          const gS = null === xS || void 0 === xS ? void 0 : xS.sessionMeta,
            tS = IH(IH({}, null === (KS = HS.session) || void 0 === KS ? void 0 : KS.overrides), null === gS || void 0 === gS ? void 0 : gS.overrides);
          XS.sessionMeta = IH(IH({}, HS.session), {}, {
            id: SS,
            attributes: IH(IH(IH({}, null === (jS = HS.session) || void 0 === jS ? void 0 : jS.attributes), null === gS || void 0 === gS ? void 0 : gS.attributes), {}, {
              isSampled: XS.isSampled.toString()
            }),
            overrides: tS
          }), bS = hH
        }
        var GS;
        if (tS && (XS.sessionMeta = IH(IH({}, XS.sessionMeta), {}, {
            attributes: IH(IH(IH({}, null === (GS = XS.sessionMeta) || void 0 === GS ? void 0 : GS.attributes), tS.attributes), {}, {
              isSampled: XS.isSampled.toString()
            })
          }), tS.overrides)) {
          const SS = (null === gS || void 0 === gS ? void 0 : gS.inheritOverrides) ? IH(IH({}, XS.sessionMeta.overrides), tS.overrides) : tS.overrides;
          Object.keys(SS).length > 0 ? XS.sessionMeta.overrides = SS : delete XS.sessionMeta.overrides
        }
        return {
          initialSession: XS,
          lifecycleType: bS
        }
      }
      registerBeforeSendHook(SS) {
        var HS;
        this.beforeSendHook = HS => {
          var gS, tS;
          const bS = null === (gS = HS.meta.session) || void 0 === gS ? void 0 : gS.id;
          bS && !this.transports.isPaused() && SS(bS);
          const XS = null === (tS = HS.meta.session) || void 0 === tS ? void 0 : tS.attributes;
          if (XS && "true" === (null === XS || void 0 === XS ? void 0 : XS.isSampled)) {
            var xS;
            let SS = JSON.parse(JSON.stringify(HS));
            const gS = null === (xS = SS.meta.session) || void 0 === xS ? void 0 : xS.attributes;
            var NS;
            if (null === gS || void 0 === gS || delete gS.isSampled, 0 === Object.keys(null !== gS && void 0 !== gS ? gS : {}).length) null === (NS = SS.meta.session) || void 0 === NS || delete NS.attributes;
            return SS
          }
          return null
        }, null === (HS = this.transports) || void 0 === HS || HS.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var SS;
        this.logDebug("init session instrumentation");
        const HS = document.prerendering;
        var gS;
        if ((null === (SS = this.config.sessionTracking) || void 0 === SS ? void 0 : SS.enabled) && (HS || this.prerenderSession)) return null !== (gS = this.prerenderSession) && void 0 !== gS || (this.prerenderSession = new pH(this.metas, this.transports, (SS => {
          this.prerenderSession = void 0, this.initializeSession(SS)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(SS) {
        const HS = this.config.sessionTracking;
        if (null === HS || void 0 === HS ? void 0 : HS.enabled) {
          var gS, tS;
          const bS = sH(HS),
            XS = new bS(this);
          this.isAdoptingSession = XS.isAdopting, this.registerBeforeSendHook(XS.recordActivity);
          const {
            initialSession: xS,
            lifecycleType: NS
          } = this.createInitialSession(bS, HS, SS);
          bS.storeUserSession(xS);
          const qS = xS.sessionMeta;
          this.notifiedSession = qS, this.api.setSession(qS), this.captureListener = () => {
            this.transports.isPaused() || XS.updateSession({
              refreshActivity: !1
            })
          }, null === (gS = (tS = this.metas).addCaptureListener) || void 0 === gS || gS.call(tS, this.captureListener), NS === wH && this.api.pushEvent(wH, {}, void 0, {
            skipDedupe: !0
          }), NS === hH && this.api.pushEvent(hH, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var SS, HS, gS;
        (null === (SS = this.prerenderSession) || void 0 === SS || SS.destroy(), this.captureListener) && (null === (HS = (gS = this.metas).removeCaptureListener) || void 0 === HS || HS.call(gS, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function bg(SS, HS, gS, tS) {
      const bS = {
        filename: SS || document.location.href,
        function: HS || "?"
      };
      return void 0 !== gS && (bS.lineno = gS), void 0 !== tS && (bS.colno = tS), bS
    }
    const Xg = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      xg = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Ng = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      qg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      ug = "safari-extension",
      Ig = "safari-web-extension",
      fg = /Minified React error #\d+;/i;

    function kg(SS, HS) {
      const gS = null === SS || void 0 === SS ? void 0 : SS.includes(ug),
        tS = !gS && (null === SS || void 0 === SS ? void 0 : SS.includes("safari-web-extension"));
      return gS || tS ? [(null === SS || void 0 === SS ? void 0 : SS.includes("@")) ? SS.split("@")[0] : SS, gS ? `${ug}:${HS}` : `${Ig}:${HS}`] : [SS, HS]
    }
    const ag = 1024;

    function Kg(SS) {
      let HS = [];
      SS.stacktrace ? HS = SS.stacktrace.split("\n").filter(((SS, HS) => HS % 2 === 0)) : SS.stack && (HS = SS.stack.split("\n"));
      const gS = HS.reduce(((HS, gS, tS) => {
        if (gS.length > ag) return HS;
        let bS, XS, xS, NS, qS;
        if (bS = Xg.exec(gS)) {
          if (XS = bS[1], xS = bS[2], NS = bS[3], qS = bS[4], null === xS || void 0 === xS ? void 0 : xS.startsWith("eval")) {
            const SS = xg.exec(xS);
            SS && (xS = SS[1], NS = SS[2], qS = SS[3])
          }
          xS = (null === xS || void 0 === xS ? void 0 : xS.startsWith("address at ")) ? xS.substring(11) : xS, [XS, xS] = kg(XS, xS)
        } else if (bS = Ng.exec(gS)) {
          if (XS = bS[1], xS = bS[3], NS = bS[4], qS = bS[5], xS && xS.includes(" > eval")) {
            const SS = qg.exec(xS);
            SS && (XS = XS || "eval", xS = SS[1], NS = SS[2])
          } else 0 === tS && !qS && hS(SS.columnNumber) && (qS = String(SS.columnNumber + 1));
          [XS, xS] = kg(XS, xS)
        }
        return (xS || XS) && HS.push(bg(xS, XS, NS ? Number(NS) : void 0, qS ? Number(qS) : void 0)), HS
      }), []);
      return fg.test(SS.message) ? gS.slice(1) : gS
    }

    function jg(SS) {
      return {
        frames: Kg(SS)
      }
    }
    const Gg = "http-request-start",
      Cg = "http-request-end";
    var ng = class SS {
      constructor() {
        this.subscribers = []
      }
      subscribe(SS) {
        return this.subscribers.push(SS), {
          unsubscribe: () => this.unsubscribe(SS)
        }
      }
      unsubscribe(SS) {
        this.subscribers = this.subscribers.filter((HS => HS !== SS))
      }
      notify(SS) {
        this.subscribers.forEach((HS => HS(SS)))
      }
      first() {
        const HS = new SS,
          gS = SS => {
            HS.notify(SS), tS.unsubscribe()
          },
          tS = this.subscribe(gS),
          bS = HS.unsubscribe.bind(HS);
        return this.withUnsubscribeOverride(HS, bS, gS)
      }
      takeWhile(HS) {
        const gS = new SS,
          tS = SS => {
            HS(SS) ? gS.notify(SS) : gS.unsubscribe(tS)
          };
        this.subscribe(tS);
        const bS = gS.unsubscribe.bind(gS);
        return this.withUnsubscribeOverride(gS, bS, tS)
      }
      filter(HS) {
        const gS = new SS,
          tS = SS => {
            HS(SS) && gS.notify(SS)
          };
        this.subscribe(tS);
        const bS = gS.unsubscribe.bind(gS);
        return this.withUnsubscribeOverride(gS, bS, tS)
      }
      merge() {
        const HS = new SS,
          gS = [];
        for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
        bS.forEach((SS => {
          const tS = SS.subscribe((SS => {
            HS.notify(SS)
          }));
          gS.push(tS)
        }));
        const xS = HS.unsubscribeAll.bind(HS);
        return HS.unsubscribe = () => {
          gS.forEach((SS => SS.unsubscribe())), xS()
        }, HS
      }
      withUnsubscribeOverride(SS, HS, gS) {
        return SS.unsubscribe = SS => {
          HS(SS), this.unsubscribe(gS)
        }, SS
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Pg = function(SS) {
      return SS.TRACE = "trace", SS.DEBUG = "debug", SS.INFO = "info", SS.LOG = "log", SS.WARN = "warn", SS.ERROR = "error", SS
    }({});
    const Qg = "log",
      Dg = ["trace", "debug", "info", "log", "warn", "error"];
    let wg, hg = !1;
    const Zg = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Jg = "Error",
      Og = SS => SS.map((SS => dS(SS) ? yH(SS) : String(SS))).join(" ");

    function dg(SS) {
      let HS, gS, tS, bS, XS = [];
      if (WS(SS) && SS.error) HS = SS.error.message, gS = SS.error.name, XS = Kg(SS.error);
      else if ((tS = zS(SS)) || US(SS)) {
        const {
          name: bS,
          message: XS
        } = SS;
        gS = null !== bS && void 0 !== bS ? bS : tS ? "DOMError" : "DOMException", HS = XS ? `${gS}: ${XS}` : gS
      } else iS(SS) ? (gS = SS.name, HS = SS.message, XS = Kg(SS)) : (dS(SS) || (bS = yS(SS))) && (gS = bS ? SS.constructor.name : void 0, HS = `Non-Error exception captured with keys: ${Object.keys(SS)}`);
      return [HS, gS, XS]
    }

    function cg(SS) {
      const [HS, gS, tS, bS, XS] = SS;
      let xS, NS, qS = [];
      const uS = wS(HS),
        IS = bg(gS, "?", tS, bS);
      return XS || !uS ? ([xS, NS, qS] = dg(null !== XS && void 0 !== XS ? XS : HS), 0 === qS.length && (qS = [IS])) : uS && ([xS, NS] = function(SS) {
        var HS, gS;
        const tS = SS.match(Zg),
          bS = null !== (HS = null === tS || void 0 === tS ? void 0 : tS[1]) && void 0 !== HS ? HS : Jg;
        return [null !== (gS = null === tS || void 0 === tS ? void 0 : tS[2]) && void 0 !== gS ? gS : SS, bS]
      }(HS), qS = [IS]), {
        value: xS,
        type: NS,
        stackFrames: qS
      }
    }

    function vg(SS, HS) {
      return iS(SS[0]) ? cg(SS) : {
        value: HS(SS)
      }
    }
    const Eg = SS => SS.map((SS => {
      try {
        return String(SS)
      } catch (HS) {
        return ""
      }
    })).join(" ");
    var Lg = class SS extends Hg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = gg, this.errorSerializer = Eg
      }
      initialize() {
        var HS, gS;
        const tS = this.config.consoleInstrumentation,
          bS = (null === tS || void 0 === tS ? void 0 : tS.serializeErrors) || !!(null === tS || void 0 === tS ? void 0 : tS.errorSerializer);
        this.errorSerializer = bS ? null !== (HS = null === tS || void 0 === tS ? void 0 : tS.errorSerializer) && void 0 !== HS ? HS : Og : Eg;
        const XS = null !== (gS = null === tS || void 0 === tS ? void 0 : tS.disabledLevels) && void 0 !== gS ? gS : SS.defaultDisabledLevels,
          xS = function(SS) {
            if (wg || (wg = new ng), !hg) {
              const HS = null !== SS && void 0 !== SS ? SS : rH;
              Dg.forEach((SS => {
                console[SS] = function() {
                  for (var gS, tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
                  wg.notify({
                    type: "console",
                    level: SS,
                    args: bS
                  }), null === (gS = HS[SS]) || void 0 === gS || gS.apply(console, bS)
                }
              })), hg = !0
            }
            return wg
          }(this.unpatchedConsole);
        this.subscription = xS.subscribe((HS => {
          let {
            level: gS,
            args: bS
          } = HS;
          if (!XS.includes(gS)) try {
            if (gS !== Pg.ERROR || (null === tS || void 0 === tS ? void 0 : tS.consoleErrorAsLog))
              if (gS === Pg.ERROR && (null === tS || void 0 === tS ? void 0 : tS.consoleErrorAsLog)) {
                const {
                  value: HS,
                  type: tS,
                  stackFrames: XS
                } = vg(bS, this.errorSerializer);
                this.api.pushLog(HS ? [SS.consoleErrorPrefix + HS] : bS, {
                  level: gS,
                  context: {
                    value: null !== HS && void 0 !== HS ? HS : "",
                    type: null !== tS && void 0 !== tS ? tS : "",
                    stackFrames: (null === XS || void 0 === XS ? void 0 : XS.length) ? Og(XS) : ""
                  }
                })
              } else this.api.pushLog(bS, {
                level: gS
              });
            else {
              const {
                value: HS,
                type: gS,
                stackFrames: tS
              } = vg(bS, this.errorSerializer);
              if (HS && !gS && !tS) return void this.api.pushError(new Error(SS.consoleErrorPrefix + HS));
              this.api.pushError(new Error(SS.consoleErrorPrefix + HS), {
                type: gS,
                stackFrames: tS
              })
            }
          } catch (xS) {
            this.logError(xS)
          }
        }))
      }
      destroy() {
        var SS;
        null === (SS = this.subscription) || void 0 === SS || SS.unsubscribe(), this.subscription = void 0
      }
    };
    Lg.defaultDisabledLevels = [Pg.DEBUG, Pg.TRACE, Pg.LOG], Lg.consoleErrorPrefix = "console.error: ";
    const Yg = [];
    var Ag = class extends Hg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = gg
      }
      initialize() {
        this.logDebug("Initializing"),
          function(SS) {
            const HS = window.onerror;
            window.onerror = function() {
              for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
              try {
                const {
                  value: HS,
                  type: gS,
                  stackFrames: bS
                } = cg(tS), XS = tS[4];
                if (HS) {
                  const tS = {
                    type: gS,
                    stackFrames: bS
                  };
                  null != XS && (tS.originalError = XS), SS.pushError(new Error(HS), tS)
                }
              } finally {
                null === HS || void 0 === HS || HS.apply(window, tS)
              }
            }
          }(this.api),
          function(SS) {
            const HS = HS => {
              var gS;
              let tS, bS, XS = HS;
              if (XS.reason) XS = HS.reason;
              else if (null === (gS = HS.detail) || void 0 === gS ? void 0 : gS.reason) {
                var xS;
                XS = null === (xS = HS.detail) || void 0 === xS ? void 0 : xS.reason
              }
              let NS = [];
              YS(XS) ? (tS = `Non-Error promise rejection captured with value: ${String(XS)}`, bS = "UnhandledRejection") : [tS, bS, NS] = dg(XS), tS && SS.pushError(new Error(tS), {
                type: bS,
                stackFrames: NS
              })
            };
            window.addEventListener("unhandledrejection", HS), Yg.push(HS)
          }(this.api)
      }
    };
    const yg = "unknown";
    var Vg = class extends Hg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = gg, this.waitingForActivation = !1, this.sendViewChangedEvent = SS => {
          var HS;
          if (this.waitingForActivation || document.prerendering) return;
          const gS = SS.view;
          if (gS && gS.name !== (null === (HS = this.notifiedView) || void 0 === HS ? void 0 : HS.name)) {
            var tS, bS, XS;
            const SS = null !== (tS = null === (bS = this.notifiedView) || void 0 === bS ? void 0 : bS.name) && void 0 !== tS ? tS : yg;
            this.notifiedView = gS, this.api.pushEvent(DH, {
              fromView: SS,
              toView: null !== (XS = gS.name) && void 0 !== XS ? XS : yg
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
    class ig {
      t;
      o = 0;
      i = [];
      l(SS) {
        if (SS.hadRecentInput) return;
        const HS = this.i[0],
          gS = this.i.at(-1);
        this.o && HS && gS && SS.startTime - gS.startTime < 1e3 && SS.startTime - HS.startTime < 5e3 ? (this.o += SS.value, this.i.push(SS)) : (this.o = SS.value, this.i = [SS]), this.t?.(SS)
      }
    }
    const Wg = () => {
        const SS = performance.getEntriesByType("navigation")[0];
        if (SS && SS.responseStart > 0 && SS.responseStart < performance.now()) return SS
      },
      zg = SS => {
        if ("loading" === document.readyState) return "loading";
        const HS = Wg();
        if (HS) {
          if (SS < HS.domInteractive) return "loading";
          if (0 === HS.domContentLoadedEventStart || SS < HS.domContentLoadedEventStart) return "dom-interactive";
          if (0 === HS.domComplete || SS < HS.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Ug = SS => {
        const HS = SS.nodeName;
        return 1 === SS.nodeType ? HS.toLowerCase() : HS.toUpperCase().replace(/^#/, "")
      },
      pg = SS => {
        let HS = "";
        try {
          for (; 9 !== SS?.nodeType;) {
            const gS = SS,
              tS = gS.id ? "#" + gS.id : [Ug(gS), ...Array.from(gS.classList ?? []).sort()].join(".");
            if (HS.length + tS.length > 99) return HS || tS;
            if (HS = HS ? tS + ">" + HS : tS, gS.id) break;
            SS = gS.parentNode
          }
        } catch {}
        return HS
      },
      sg = new WeakMap;

    function Bg(SS, HS) {
      let gS = sg.get(HS);
      return gS || (gS = new WeakMap, sg.set(HS, gS)), gS.get(SS) || gS.set(SS, new HS), gS.get(SS)
    }
    let Mg = -1;
    const Fg = () => Mg,
      Rg = SS => {
        addEventListener("pageshow", (HS => {
          HS.persisted && (Mg = HS.timeStamp, SS(HS))
        }), !0)
      },
      Tg = (SS, HS, gS, tS) => {
        let bS, XS;
        return xS => {
          HS.value >= 0 && (xS || tS) && (XS = HS.value - (bS ?? 0), (XS || void 0 === bS) && (bS = HS.value, HS.delta = XS, HS.rating = ((SS, HS) => SS > HS[1] ? "poor" : SS > HS[0] ? "needs-improvement" : "good")(HS.value, gS), SS(HS)))
        }
      },
      og = SS => {
        requestAnimationFrame((() => requestAnimationFrame((() => SS()))))
      },
      lg = () => Wg()?.activationStart ?? 0;
    let mg = -1;
    const eg = new Set,
      rg = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      St = SS => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === SS.type)
            for (const SS of eg) SS();
          isFinite(mg) || (mg = "visibilitychange" === SS.type ? SS.timeStamp : 0, removeEventListener("prerenderingchange", St, !0))
        }
      },
      Ht = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (mg = 1 / 0), mg < 0) {
          const SS = lg(),
            HS = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((HS => "hidden" === HS.name && HS.startTime >= SS))?.startTime;
          mg = HS ?? rg(), addEventListener("visibilitychange", St, !0), addEventListener("prerenderingchange", St, !0), Rg((() => {
            setTimeout((() => {
              mg = rg()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return mg
          },
          onHidden(SS) {
            eg.add(SS)
          }
        }
      },
      gt = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0,
          xS = arguments.length > 6 ? arguments[6] : void 0;
        const NS = Wg(),
          qS = NS?.navigationId || 0;
        let uS = "navigate";
        return gS ? uS = gS : Fg() >= 0 ? uS = "back-forward-cache" : NS && (document.prerendering || lg() > 0 ? uS = "prerender" : document.wasDiscarded ? uS = "restore" : NS.type && (uS = NS.type.replace(/_/g, "-"))), {
          name: SS,
          value: HS,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: uS,
          navigationId: tS || qS,
          navigationInteractionId: bS,
          navigationURL: XS || NS?.name,
          navigationStartTime: xS || 0
        }
      },
      tt = function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const tS = SS.filter((SS => PerformanceObserver.supportedEntryTypes.includes(SS)));
          if (tS.length > 0) {
            const SS = new PerformanceObserver((SS => {
              queueMicrotask((() => {
                const gS = SS.getEntries();
                tS.length > 1 && gS.sort(((SS, HS) => SS.startTime + SS.duration - (HS.startTime + HS.duration))), HS(gS)
              }))
            }));
            for (const HS of tS) SS.observe({
              type: HS,
              buffered: !0,
              ...gS
            });
            return SS
          }
        } catch {}
      },
      bt = SS => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && SS && SS.reportSoftNavs,
      Xt = (SS, HS) => {
        if (SS.set(HS.navigationId, HS), SS.size > 2) {
          const HS = SS.keys().next().value;
          void 0 !== HS && SS.delete(HS)
        }
      },
      xt = SS => {
        let HS = !1;
        return () => {
          HS || (SS(), HS = !0)
        }
      };
    class Nt {
      u
    }
    const qt = SS => {
        document.prerendering ? addEventListener("prerenderingchange", SS, !0) : SS()
      },
      ut = [1800, 3e3],
      It = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gS = bt(HS);
        qt((() => {
          const tS = Bg(HS, Nt),
            bS = Ht();
          let XS, xS = gt("FCP");
          const NS = tt(["paint"], (SS => {
            for (const HS of SS) "first-contentful-paint" === HS.name && (NS.disconnect(), HS.startTime < bS.firstHiddenTime && (xS.value = Math.max(HS.startTime - lg(), 0), xS.entries.push(HS), xS.navigationId = HS.navigationId || xS.navigationId, XS(!0)))
          }));
          NS && (XS = Tg(SS, xS, ut, HS.reportAllChanges), Rg((gS => {
            xS = gt("FCP", -1, "back-forward-cache", xS.navigationId, xS.navigationInteractionId, xS.navigationURL, Fg()), XS = Tg(SS, xS, ut, HS.reportAllChanges), og((() => {
              xS.value = performance.now() - gS.timeStamp, XS(!0)
            }))
          }))), gS && tt(["soft-navigation"], (gS => {
            gS.forEach((gS => {
              tS.u && gS.navigationId && Xt(tS.u, gS);
              const bS = Math.max((gS.presentationTime || gS.paintTime || 0) - gS.startTime, 0);
              xS = gt("FCP", bS, "soft-navigation", gS.navigationId, gS.interactionId, gS.name, gS.startTime), XS = Tg(SS, xS, ut, HS.reportAllChanges), XS(!0)
            }))
          }), HS)
        }))
      },
      ft = [.1, .25],
      kt = SS => SS.find((SS => 1 === SS.node?.nodeType)) || SS[0];
    let Kt = 0,
      jt = 1 / 0,
      Gt = 0;
    const Ct = SS => {
      for (const HS of SS) HS.interactionId && (jt = Math.min(jt, HS.interactionId), Gt = Math.max(Gt, HS.interactionId), Kt = Gt ? (Gt - jt) / 7 + 1 : 0)
    };
    let nt;
    const Pt = () => nt ? Kt : performance.interactionCount ?? 0;
    class Qt {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Pt() - this.h
      }
      D() {
        this.h = Pt(), this.v.length = 0, this.p.clear()
      }
      S(SS) {
        const HS = this.T(),
          gS = Math.min(this.v.length - 1, Math.floor(HS / 50));
        return !HS || -1 !== gS || "soft-navigation" !== SS && "back-forward-cache" !== SS ? this.v[gS] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(SS) {
        if (this.m?.(SS), !SS.interactionId) return;
        const HS = this.v.at(-1);
        let gS = this.p.get(SS.interactionId);
        if (gS || this.v.length < 10 || SS.duration > HS.k) {
          if (gS ? SS.duration > gS.k ? (gS.entries = [SS], gS.k = SS.duration) : SS.duration === gS.k && SS.startTime === gS.entries[0].startTime && gS.entries.push(SS) : (gS = {
              id: SS.interactionId,
              entries: [SS],
              k: SS.duration
            }, this.p.set(gS.id, gS), this.v.push(gS)), this.v.sort(((SS, HS) => HS.k - SS.k)), this.v.length > 10) {
            const SS = this.v.splice(10);
            for (const HS of SS) this.p.delete(HS.id)
          }
          this.M?.(gS)
        }
      }
    }
    const Dt = SS => {
        const HS = "requestIdleCallback" in globalThis ? 1e3 : 0,
          gS = globalThis.requestIdleCallback || setTimeout,
          tS = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) SS();
        else {
          const bS = xt(SS);
          let XS = -1;
          const xS = () => {
            tS(XS), bS()
          };
          addEventListener("visibilitychange", xS, {
            once: !0,
            capture: !0
          }), XS = gS((() => {
            removeEventListener("visibilitychange", xS, {
              capture: !0
            }), bS()
          }), {
            timeout: HS
          })
        }
      },
      wt = [200, 500],
      ht = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gS = Bg(HS = Object.assign({}, HS), Qt);
        let tS = [],
          bS = [],
          XS = 0;
        const xS = new WeakMap,
          NS = new WeakMap;
        let qS = !1;
        const uS = () => {
            qS || (qS = !0, Dt(IS))
          },
          IS = () => {
            const SS = new Set(gS.v.map((SS => xS.get(SS.entries[0])))),
              HS = bS.length - 10;
            bS = bS.filter(((gS, tS) => tS >= HS || SS.has(gS)));
            const NS = new Set;
            for (const gS of bS) {
              const SS = fS(gS.startTime, gS.processingEnd);
              for (const HS of SS) NS.add(HS)
            }
            const uS = tS.length - 10;
            tS = tS.filter(((SS, HS) => NS.has(SS) || HS >= uS && SS.startTime > XS)), qS = !1
          };
        gS.m = SS => {
          const gS = SS.startTime + SS.duration;
          let tS;
          XS = Math.max(XS, SS.processingEnd);
          for (let XS = bS.length - 1; XS >= 0; XS--) {
            const xS = bS[XS];
            if (Math.abs(gS - xS.renderTime) <= 8) {
              tS = xS, tS.startTime = Math.min(SS.startTime, tS.startTime), tS.processingStart = Math.min(SS.processingStart, tS.processingStart), tS.processingEnd = Math.max(SS.processingEnd, tS.processingEnd), HS.includeProcessedEventEntries && tS.entries.push(SS);
              break
            }
          }
          tS || (tS = {
            startTime: SS.startTime,
            processingStart: SS.processingStart,
            processingEnd: SS.processingEnd,
            renderTime: gS,
            entries: HS.includeProcessedEventEntries ? [SS] : []
          }, bS.push(tS)), SS.interactionId && xS.set(SS, tS), uS()
        }, gS.M = SS => {
          if (!NS.get(SS)) {
            const gS = SS.entries.find((SS => SS.target))?.target;
            if (gS) {
              const tS = HS.generateTarget?.(gS) ?? pg(gS);
              NS.set(SS, tS)
            } else {
              const HS = SS.entries.find((SS => SS.targetSelector))?.targetSelector;
              HS && NS.set(SS, HS)
            }
          }
        };
        const fS = (SS, HS) => {
          const gS = [];
          for (const bS of tS)
            if (!(bS.startTime + bS.duration < SS)) {
              if (bS.startTime > HS) break;
              gS.push(bS)
            } return gS
        };
        tt(["long-animation-frame"], (SS => {
            tS = tS.concat(SS), uS()
          }), HS),
          function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const gS = Ht();
            qt((() => {
              "interactionCount" in performance || nt || (nt = tt(["event"], Ct, {
                durationThreshold: 0
              }));
              let tS, bS = gt("INP");
              const XS = Bg(HS, Qt),
                xS = (gS, xS, NS, qS, uS) => {
                  XS.D(), bS = gt("INP", -1, gS, xS, NS, qS, uS), tS = Tg(SS, bS, wt, HS.reportAllChanges)
                },
                NS = () => {
                  const SS = XS.S(bS.navigationType);
                  SS && SS.k !== bS.value && (bS.value = SS.k, bS.entries = SS.entries, tS())
                },
                qS = SS => {
                  NS(), tS(!0), xS("soft-navigation", SS.navigationId, SS.interactionId, SS.name, SS.startTime)
                },
                uS = function(SS) {
                  let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Dt((() => {
                    for (const HS of SS) "soft-navigation" !== HS.entryType ? XS.l(HS) : qS(HS);
                    NS(), HS && tS(!0)
                  }))
                },
                IS = ["event", "first-input"];
              bt(HS) && IS.push("soft-navigation");
              const fS = tt(IS, uS, {
                ...HS,
                durationThreshold: HS.durationThreshold ?? 40
              });
              tS = Tg(SS, bS, wt, HS.reportAllChanges), fS && (gS.onHidden((() => {
                uS(fS.takeRecords(), !0)
              })), Rg((() => {
                xS("back-forward-cache", bS.navigationId, bS.navigationInteractionId, bS.navigationURL, Fg())
              })))
            }))
          }((HS => {
            SS((SS => {
              if (0 === SS.entries.length) {
                const HS = SS.navigationStartTime || 0,
                  gS = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: SS.value,
                    loadState: zg(HS)
                  };
                return Object.assign(SS, {
                  attribution: gS
                })
              }
              const HS = SS.entries[0],
                tS = xS.get(HS),
                bS = Math.max(tS.processingStart, HS.startTime),
                XS = Math.max(HS.startTime + HS.duration, bS),
                qS = Math.min(tS.processingEnd, XS),
                uS = tS.entries.sort(((SS, HS) => SS.processingStart - HS.processingStart)),
                IS = fS(HS.startTime, qS),
                kS = gS.p.get(HS.interactionId),
                aS = {
                  interactionTarget: NS.get(kS),
                  interactionType: HS.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: HS.startTime,
                  nextPaintTime: XS,
                  processedEventEntries: uS,
                  longAnimationFrameEntries: IS,
                  inputDelay: bS - HS.startTime,
                  processingDuration: qS - bS,
                  presentationDelay: XS - qS,
                  loadState: zg(HS.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (SS => {
                const HS = SS.interactionTime,
                  gS = SS.nextPaintTime;
                if (!SS.longAnimationFrameEntries?.length || !HS || !gS) return;
                const tS = SS.inputDelay,
                  bS = SS.processingDuration;
                let XS, xS, NS = 0,
                  qS = 0,
                  uS = 0,
                  IS = 0;
                for (const aS of SS.longAnimationFrameEntries) {
                  qS = qS + aS.startTime + aS.duration - aS.styleAndLayoutStart;
                  for (const SS of aS.scripts) {
                    const gS = SS.startTime + SS.duration;
                    if (gS < HS) continue;
                    const uS = gS - Math.max(HS, SS.startTime),
                      fS = SS.duration ? uS / SS.duration * SS.forcedStyleAndLayoutDuration : 0;
                    NS += uS - fS, qS += fS, uS > IS && (xS = SS.startTime < HS + tS ? "input-delay" : SS.startTime >= HS + tS + bS ? "presentation-delay" : "processing-duration", XS = SS, IS = uS)
                  }
                }
                const fS = SS.longAnimationFrameEntries.at(-1),
                  kS = fS ? fS.startTime + fS.duration : 0;
                kS >= HS + tS + bS && (uS = gS - kS), XS && xS && (SS.longestScript = {
                  entry: XS,
                  subpart: xS,
                  intersectingDuration: IS
                }), SS.totalScriptDuration = NS, SS.totalStyleAndLayoutDuration = qS, SS.totalPaintDuration = uS, SS.totalUnattributedDuration = gS - HS - NS - qS - uS
              })(aS), Object.assign(SS, {
                attribution: aS
              })
            })(HS))
          }), HS)
      };
    class Zt {
      m;
      u;
      l(SS) {
        this.m?.(SS)
      }
    }
    const Jt = [2500, 4e3];
    let Ot = 50;
    const dt = [];
    tt(["resource"], (SS => {
      for (const HS of SS) dt.push(HS), dt.length > Ot && dt.shift()
    }));
    const ct = [800, 1800],
      vt = SS => {
        document.prerendering ? qt((() => vt(SS))) : "complete" !== document.readyState ? addEventListener("load", (() => vt(SS)), !0) : setTimeout(SS)
      },
      Et = "load_state",
      Lt = "time_to_first_byte";
    var Yt = class {
        constructor(SS, HS) {
          this.corePushMeasurement = SS, this.webVitalConfig = HS
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var SS;
          ! function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const gS = Bg(HS = Object.assign({}, HS), ig),
              tS = new WeakMap;
            gS.t = SS => {
                if (SS?.sources?.length) {
                  const gS = kt(SS.sources),
                    bS = gS?.node;
                  if (bS) {
                    const SS = HS.generateTarget?.(bS) ?? pg(bS);
                    tS.set(gS, SS)
                  }
                }
              },
              function(SS) {
                let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const gS = Ht();
                It(xt((() => {
                  let tS, bS = gt("CLS", 0);
                  const XS = Bg(HS, ig),
                    xS = (gS, xS, NS, qS, uS) => {
                      bS = gt("CLS", 0, gS, xS, NS, qS, uS), XS.o = 0, tS = Tg(SS, bS, ft, HS.reportAllChanges)
                    },
                    NS = function() {
                      let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      XS.o > bS.value && (bS.value = XS.o, bS.entries = XS.i), tS(SS)
                    },
                    qS = SS => {
                      NS(!0), xS("soft-navigation", SS.navigationId, SS.interactionId, SS.name, SS.startTime)
                    },
                    uS = SS => {
                      for (const HS of SS) "soft-navigation" !== HS.entryType ? XS.l(HS) : qS(HS);
                      NS()
                    },
                    IS = ["layout-shift"];
                  bt(HS) && IS.push("soft-navigation");
                  const fS = tt(IS, uS);
                  fS && (tS = Tg(SS, bS, ft, HS.reportAllChanges), gS.onHidden((() => {
                    uS(fS.takeRecords()), tS(!0)
                  })), Rg((() => {
                    xS("back-forward-cache", bS.navigationId, bS.navigationInteractionId, bS.navigationURL, Fg()), og(tS)
                  })), setTimeout(tS))
                })))
              }((HS => {
                SS((SS => {
                  let HS = {};
                  if (SS.entries.length) {
                    const gS = SS.entries.reduce(((SS, HS) => SS.value > HS.value ? SS : HS));
                    if (gS?.sources?.length) {
                      const SS = kt(gS.sources);
                      SS && (HS = {
                        largestShiftTarget: tS.get(SS),
                        largestShiftTime: gS.startTime,
                        largestShiftValue: gS.value,
                        largestShiftSource: SS,
                        largestShiftEntry: gS,
                        loadState: zg(gS.startTime)
                      })
                    }
                  }
                  return Object.assign(SS, {
                    attribution: HS
                  })
                })(HS))
              }), HS)
          }((SS => {
            const {
              loadState: HS,
              largestShiftValue: gS,
              largestShiftTime: tS,
              largestShiftTarget: bS
            } = SS.attribution, XS = this.buildInitialValues(SS);
            this.addIfPresent(XS, "largest_shift_value", gS), this.addIfPresent(XS, "largest_shift_time", tS);
            const xS = this.buildInitialContext(SS);
            this.addIfPresent(xS, Et, HS), this.addIfPresent(xS, "largest_shift_target", bS), this.pushMeasurement(XS, xS)
          }), {
            reportAllChanges: null === (SS = this.webVitalConfig) || void 0 === SS ? void 0 : SS.reportAllChanges
          })
        }
        measureFCP() {
          var SS;
          ! function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const gS = Bg(HS = Object.assign({}, HS), Nt);
            bt(HS) && (gS.u = new Map), It((HS => {
              SS((SS => {
                let HS = {
                  timeToFirstByte: 0,
                  firstByteToFCP: SS.value,
                  loadState: zg(Fg())
                };
                if ("soft-navigation" !== SS.navigationType) {
                  if (SS.entries.length) {
                    const gS = Wg(),
                      tS = SS.entries.at(-1);
                    if (gS) {
                      const bS = gS.responseStart,
                        XS = gS.activationStart || 0,
                        xS = Math.max(0, bS - XS);
                      HS = {
                        timeToFirstByte: xS,
                        firstByteToFCP: SS.value - xS,
                        loadState: zg(SS.entries[0].startTime),
                        navigationEntry: gS,
                        fcpEntry: tS
                      }
                    }
                  }
                } else {
                  const tS = gS.u?.get(SS.navigationId);
                  tS && (HS = {
                    timeToFirstByte: 0,
                    firstByteToFCP: SS.value,
                    loadState: "complete",
                    navigationEntry: tS
                  })
                }
                return Object.assign(SS, {
                  attribution: HS
                })
              })(HS))
            }), HS)
          }((SS => {
            const {
              firstByteToFCP: HS,
              timeToFirstByte: gS,
              loadState: tS
            } = SS.attribution, bS = this.buildInitialValues(SS);
            this.addIfPresent(bS, "first_byte_to_fcp", HS), this.addIfPresent(bS, Lt, gS);
            const XS = this.buildInitialContext(SS);
            this.addIfPresent(XS, Et, tS), this.pushMeasurement(bS, XS)
          }), {
            reportAllChanges: null === (SS = this.webVitalConfig) || void 0 === SS ? void 0 : SS.reportAllChanges
          })
        }
        measureINP() {
          var SS;
          ht((SS => {
            var HS;
            const {
              interactionTime: gS,
              presentationDelay: tS,
              inputDelay: bS,
              processingDuration: XS,
              nextPaintTime: xS,
              loadState: NS,
              interactionTarget: qS,
              interactionType: uS,
              totalScriptDuration: IS,
              totalStyleAndLayoutDuration: fS,
              totalPaintDuration: kS,
              totalUnattributedDuration: aS,
              longestScript: KS
            } = SS.attribution, jS = this.buildInitialValues(SS);
            this.addIfPresent(jS, "interaction_time", gS), this.addIfPresent(jS, "presentation_delay", tS), this.addIfPresent(jS, "input_delay", bS), this.addIfPresent(jS, "processing_duration", XS), this.addIfPresent(jS, "next_paint_time", xS), this.addNumberIfDefined(jS, "total_script_duration", IS), this.addNumberIfDefined(jS, "total_style_and_layout_duration", fS), this.addNumberIfDefined(jS, "total_paint_duration", kS), this.addNumberIfDefined(jS, "total_unattributed_duration", aS), this.addNumberIfDefined(jS, "longest_script_intersecting_duration", null === KS || void 0 === KS ? void 0 : KS.intersectingDuration);
            const GS = this.buildInitialContext(SS);
            this.addIfPresent(GS, Et, NS), this.addIfPresent(GS, "interaction_target", qS), this.addIfPresent(GS, "interaction_type", uS), this.addIfPresent(GS, "longest_script_subpart", null === KS || void 0 === KS ? void 0 : KS.subpart), this.addIfPresent(GS, "longest_script_invoker_type", null === KS || void 0 === KS ? void 0 : KS.entry.invokerType), (null === (HS = this.webVitalConfig) || void 0 === HS ? void 0 : HS.trackAttributionSources) && (this.addIfPresent(GS, "longest_script_invoker", null === KS || void 0 === KS ? void 0 : KS.entry.invoker), this.addIfPresent(GS, "longest_script_source_url", null === KS || void 0 === KS ? void 0 : KS.entry.sourceURL), this.addIfPresent(GS, "longest_script_source_function_name", null === KS || void 0 === KS ? void 0 : KS.entry.sourceFunctionName), this.addIfPresent(GS, "longest_script_source_char_position", void 0 !== (null === KS || void 0 === KS ? void 0 : KS.entry.sourceCharPosition) ? String(KS.entry.sourceCharPosition) : void 0)), this.pushMeasurement(jS, GS)
          }), {
            reportAllChanges: null === (SS = this.webVitalConfig) || void 0 === SS ? void 0 : SS.reportAllChanges
          })
        }
        measureLCP() {
          var SS;
          ! function(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (HS = Object.assign({}, HS)).resourceBufferSize && (Ot = HS.resourceBufferSize);
            const gS = Bg(HS, Zt),
              tS = new WeakMap;
            bt(HS) && (gS.u = new Map), gS.m = SS => {
                const gS = SS.element;
                if (gS) {
                  const bS = HS.generateTarget?.(gS) ?? pg(gS);
                  tS.set(SS, bS)
                } else SS.id && tS.set(SS, `#${SS.id}`)
              },
              function(SS) {
                let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  gS = !1;
                const tS = bt(HS);
                qt((() => {
                  let bS, XS = Ht(),
                    xS = gt("LCP");
                  const NS = Bg(HS, Zt),
                    qS = (tS, NS, qS, uS, IS) => {
                      xS = gt("LCP", -1, tS, NS, qS, uS, IS), bS = Tg(SS, xS, Jt, HS.reportAllChanges), gS = !1, "soft-navigation" === tS && (XS = Ht(!0))
                    },
                    uS = SS => {
                      NS.u && SS.navigationId && Xt(NS.u, SS), gS || bS(!0), qS("soft-navigation", SS.navigationId, SS.interactionId, SS.name, SS.startTime);
                      const HS = SS.getLargestInteractionContentfulPaint?.();
                      HS && IS([HS])
                    },
                    IS = SS => {
                      HS.reportAllChanges || tS || (SS = SS.slice(-1));
                      for (const HS of SS) {
                        if (!HS) continue;
                        if ("soft-navigation" === HS.entryType) {
                          uS(HS);
                          continue
                        }
                        let SS = 0,
                          gS = [],
                          tS = HS.startTime;
                        if ("largest-contentful-paint" === HS.entryType) SS = Math.max(HS.startTime - lg(), 0), NS.l(HS), gS = [HS];
                        else if ("interaction-contentful-paint" === HS.entryType) {
                          const bS = HS;
                          if (!xS.navigationId) continue;
                          if ("interactionId" in bS && bS.interactionId != xS.navigationInteractionId) continue;
                          tS = bS.largestContentfulPaint?.renderTime || 0, SS = Math.max(tS - HS.startTime, 0), bS.largestContentfulPaint && (NS.l(bS.largestContentfulPaint), gS = [bS.largestContentfulPaint])
                        }
                        tS < XS.firstHiddenTime && (xS.value = SS, xS.entries = gS, bS())
                      }
                    },
                    fS = ["largest-contentful-paint"];
                  tS && fS.push("interaction-contentful-paint", "soft-navigation");
                  const kS = tt(fS, IS);
                  if (kS) {
                    bS = Tg(SS, xS, Jt, HS.reportAllChanges);
                    const XS = ["keydown", "click", "visibilitychange"],
                      NS = SS => {
                        if (SS.isTrusted && !gS) {
                          const SS = xS.id;
                          Dt((() => {
                            if (!gS) {
                              if (!tS) {
                                kS.disconnect();
                                for (const SS of XS) removeEventListener(SS, NS, {
                                  capture: !0
                                })
                              }
                              SS === xS.id && (gS = !0, bS(!0))
                            }
                          }))
                        }
                      };
                    for (const SS of XS) addEventListener(SS, NS, {
                      capture: !0
                    });
                    Rg((tS => {
                      qS("back-forward-cache", xS.navigationId, xS.navigationInteractionId, xS.navigationURL, Fg()), bS = Tg(SS, xS, Jt, HS.reportAllChanges), og((() => {
                        xS.value = performance.now() - tS.timeStamp, gS = !0, bS(!0)
                      }))
                    }))
                  }
                }))
              }((HS => {
                SS((SS => {
                  let HS = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: SS.value
                  };
                  if (SS.entries.length) {
                    const bS = SS.entries.at(-1),
                      XS = SS => SS.name === bS.url && (SS.requestStart || SS.startTime) <= bS.startTime,
                      xS = bS.url && (dt.findLast(XS) || performance.getEntriesByType("resource").findLast(XS));
                    let NS;
                    HS.target = tS.get(bS), HS.lcpEntry = bS, bS.url && (HS.url = bS.url), xS && (HS.lcpResourceEntry = xS);
                    let qS = 0,
                      uS = 0;
                    if ("soft-navigation" !== SS.navigationType ? (NS = Wg(), qS = NS?.activationStart ?? 0, uS = NS?.responseStart ?? 0) : (qS = SS.navigationStartTime || 0, NS = gS.u?.get(SS.navigationId)), NS) {
                      const gS = Math.max(0, uS - qS),
                        tS = Math.max(gS, xS ? (xS.requestStart || xS.startTime) - qS : 0),
                        bS = Math.min(SS.value, Math.max(tS, xS ? xS.responseEnd - qS : 0));
                      HS = {
                        ...HS,
                        timeToFirstByte: gS,
                        resourceLoadDelay: tS - gS,
                        resourceLoadDuration: bS - tS,
                        elementRenderDelay: SS.value - bS,
                        navigationEntry: NS
                      }
                    }
                  }
                  return Object.assign(SS, {
                    attribution: HS
                  })
                })(HS))
              }), HS)
          }((SS => {
            var HS;
            const {
              elementRenderDelay: gS,
              resourceLoadDelay: tS,
              resourceLoadDuration: bS,
              timeToFirstByte: XS,
              target: xS,
              url: NS,
              lcpResourceEntry: qS
            } = SS.attribution, uS = this.buildInitialValues(SS);
            this.addIfPresent(uS, "element_render_delay", gS), this.addIfPresent(uS, "resource_load_delay", tS), this.addIfPresent(uS, "resource_load_duration", bS), this.addIfPresent(uS, Lt, XS);
            const IS = this.buildInitialContext(SS);
            this.addIfPresent(IS, "element", xS), (null === (HS = this.webVitalConfig) || void 0 === HS ? void 0 : HS.trackAttributionSources) && (this.addIfPresent(IS, "resource_url", NS), this.addIfPresent(IS, "resource_delivery_type", null === qS || void 0 === qS ? void 0 : qS.deliveryType), this.addIfPresent(IS, "resource_initiator_type", null === qS || void 0 === qS ? void 0 : qS.initiatorType)), this.pushMeasurement(uS, IS)
          }), {
            reportAllChanges: null === (SS = this.webVitalConfig) || void 0 === SS ? void 0 : SS.reportAllChanges
          })
        }
        measureTTFB() {
          var SS;
          ! function(SS) {
            ! function(SS) {
              let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const gS = bt(HS);
              let tS = gt("TTFB"),
                bS = Tg(SS, tS, ct, HS.reportAllChanges);
              vt((() => {
                const XS = Wg();
                if (XS) {
                  const xS = XS.responseStart;
                  tS.value = Math.max(xS - lg(), 0), tS.entries = [XS], bS(!0), Rg((() => {
                    tS = gt("TTFB", 0, "back-forward-cache", tS.navigationId, tS.navigationInteractionId, tS.navigationURL, Fg()), bS = Tg(SS, tS, ct, HS.reportAllChanges), bS(!0)
                  })), gS && tt(["soft-navigation"], (gS => {
                    gS.forEach((gS => {
                      gS.navigationId && (tS = gt("TTFB", 0, "soft-navigation", gS.navigationId, gS.interactionId, gS.name, gS.startTime), tS.entries = [gS], bS = Tg(SS, tS, ct, HS.reportAllChanges), bS(!0))
                    }))
                  }), HS)
                }
              }))
            }((HS => {
              SS((SS => {
                const HS = SS.entries[0];
                let gS = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: HS
                };
                if (SS.entries.length && HS instanceof PerformanceNavigationTiming) {
                  const tS = HS.activationStart || 0,
                    bS = Math.max((HS.workerStart || HS.fetchStart || 0) - tS, 0),
                    XS = Math.max(HS.domainLookupStart - tS, 0),
                    xS = Math.max(HS.connectStart - tS, 0),
                    NS = Math.max(HS.connectEnd - tS, 0);
                  gS = {
                    waitingDuration: bS,
                    cacheDuration: XS - bS,
                    dnsDuration: xS - XS,
                    connectionDuration: NS - xS,
                    requestDuration: SS.value - NS,
                    navigationEntry: HS
                  }
                }
                return Object.assign(SS, {
                  attribution: gS
                })
              })(HS))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((SS => {
            const {
              dnsDuration: HS,
              connectionDuration: gS,
              requestDuration: tS,
              waitingDuration: bS,
              cacheDuration: XS
            } = SS.attribution, xS = this.buildInitialValues(SS);
            this.addIfPresent(xS, "dns_duration", HS), this.addIfPresent(xS, "connection_duration", gS), this.addIfPresent(xS, "request_duration", tS), this.addIfPresent(xS, "waiting_duration", bS), this.addIfPresent(xS, "cache_duration", XS);
            const NS = this.buildInitialContext(SS);
            this.pushMeasurement(xS, NS)
          }), {
            reportAllChanges: null === (SS = this.webVitalConfig) || void 0 === SS ? void 0 : SS.reportAllChanges
          })
        }
        buildInitialValues(SS) {
          return {
            [SS.name.toLowerCase()]: SS.value,
            delta: SS.delta
          }
        }
        buildInitialContext(SS) {
          var HS;
          const gS = null !== (HS = SH("com.grafana.faro.lastNavigationId", mS)) && void 0 !== HS ? HS : yg;
          return {
            id: SS.id,
            rating: SS.rating,
            navigation_type: SS.navigationType,
            navigation_entry_id: gS
          }
        }
        pushMeasurement(SS, HS) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: SS
          }, {
            context: HS
          })
        }
        addIfPresent(SS, HS, gS) {
          gS && (SS[HS] = gS)
        }
        addNumberIfDefined(SS, HS, gS) {
          void 0 !== gS && (SS[HS] = gS)
        }
      },
      At = class extends Hg {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = gg
        }
        initialize() {
          this.logDebug("Initializing"), new Yt(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const yt = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Vt() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const HS of SS)
        if ("traceparent" === HS.name) {
          if (!yt.test(HS.description)) continue;
          const [, SS, gS] = HS.description.split("-");
          if (null != SS && null != gS) return {
            traceId: SS,
            spanId: gS
          };
          break
        }
    }

    function it(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: gS,
        monoNow: tS
      } = HS;
      return Math.min(gS, gS - (tS - SS))
    }

    function Wt(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [gS, tS] of Object.entries(HS)) {
        const HS = SS[gS];
        return null != HS && (vS(tS) ? tS.includes(HS) : HS === tS)
      }
      return !0
    }

    function zt(SS) {
      const {
        connectEnd: HS,
        connectStart: gS,
        decodedBodySize: tS,
        domainLookupEnd: bS,
        domainLookupStart: XS,
        duration: xS,
        encodedBodySize: NS,
        fetchStart: qS,
        initiatorType: uS,
        name: IS,
        nextHopProtocol: fS,
        redirectEnd: kS,
        redirectStart: aS,
        renderBlockingStatus: KS,
        requestStart: jS,
        responseEnd: GS,
        responseStart: CS,
        responseStatus: nS,
        secureConnectionStart: PS,
        transferSize: QS,
        workerStart: DS
      } = SS;
      return {
        name: IS,
        httpHost: pt(IS),
        duration: st(xS),
        tcpHandshakeTime: st(HS - gS),
        dnsLookupTime: st(bS - XS),
        tlsNegotiationTime: st(HS - PS),
        responseStatus: st(nS),
        redirectTime: st(kS - aS),
        requestTime: st(CS - jS),
        responseTime: st(GS - CS),
        fetchTime: st(GS - qS),
        serviceWorkerTime: st(DS > 0 ? qS - DS : 0),
        decodedBodySize: st(tS),
        encodedBodySize: st(NS),
        cacheHitStatus: function() {
          let SS = "fullLoad";
          0 === QS ? tS > 0 && (SS = "cache") : null != nS ? 304 === nS && (SS = "conditionalFetch") : NS > 0 && QS < NS && (SS = "conditionalFetch");
          return SS
        }(),
        renderBlockingStatus: st(KS),
        protocol: fS,
        initiatorType: uS,
        visibilityState: document.visibilityState,
        ttfb: st(CS - jS),
        transferSize: st(QS)
      }
    }

    function Ut(SS) {
      const {
        activationStart: HS,
        domComplete: gS,
        domContentLoadedEventEnd: tS,
        domContentLoadedEventStart: bS,
        domInteractive: XS,
        fetchStart: xS,
        loadEventEnd: NS,
        loadEventStart: qS,
        responseStart: uS,
        type: IS
      } = SS, fS = function() {
        var SS;
        return null != (null === (SS = performance.timing) || void 0 === SS ? void 0 : SS.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return IH(IH({}, zt(SS)), {}, {
        pageLoadTime: st(gS - xS),
        documentParsingTime: st(fS ? XS - fS : null),
        domProcessingTime: st(gS - XS),
        domContentLoadHandlerTime: st(tS - bS),
        onLoadTime: st(NS - qS),
        ttfb: st(Math.max(uS - (null !== HS && void 0 !== HS ? HS : 0), 0)),
        type: IS
      })
    }

    function pt(SS) {
      try {
        return new URL(SS).host || yg
      } catch (HS) {
        return yg
      }
    }

    function st(SS) {
      return null == SS ? yg : "number" === typeof SS ? Math.round(SS > 0 ? SS : 0).toString() : SS.toString()
    }
    const Bt = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function Mt(SS, HS, gS, tS, bS, XS, xS) {
      try {
        var NS = SS[XS](xS),
          qS = NS.value
      } catch (SS) {
        return void gS(SS)
      }
      NS.done ? HS(qS) : Promise.resolve(qS).then(tS, bS)
    }

    function Ft(SS) {
      return function() {
        var HS = this,
          gS = arguments;
        return new Promise((function(tS, bS) {
          var XS = SS.apply(HS, gS);

          function xS(SS) {
            Mt(XS, tS, bS, xS, NS, "next", SS)
          }

          function NS(SS) {
            Mt(XS, tS, bS, xS, NS, "throw", SS)
          }
          xS(void 0)
        }))
      }
    }
    const Rt = new ng;
    var Tt = class extends Hg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = gg
      }
      initialize() {
        var SS = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let HS = !1;
        const gS = () => {
          ! function(SS) {
            if ("complete" === document.readyState) SS();
            else {
              const HS = () => {
                "complete" === document.readyState && (SS(), document.removeEventListener("readystatechange", HS))
              };
              document.addEventListener("readystatechange", HS)
            }
          }(Ft((function*() {
            if (HS) return;
            const gS = SS.api.pushEvent,
              {
                faroNavigationId: tS
              } = yield function(SS) {
                let HS;
                const gS = new Promise((SS => {
                  HS = SS
                }));
                return new PerformanceObserver((gS => {
                  var tS;
                  const [bS] = gS.getEntries();
                  if (null == bS || oS(bS.name)) return;
                  const XS = bS.toJSON();
                  let xS = Vt(null === XS || void 0 === XS ? void 0 : XS.serverTiming);
                  const NS = null !== (tS = SH("com.grafana.faro.lastNavigationId", mS)) && void 0 !== tS ? tS : yg,
                    qS = IH(IH({}, Ut(XS)), {}, {
                      faroNavigationId: CH(),
                      faroPreviousNavigationId: NS
                    });
                  HH("com.grafana.faro.lastNavigationId", qS.faroNavigationId, mS), SS("faro.performance.navigation", qS, void 0, {
                    spanContext: xS,
                    timestampOverwriteMs: it(XS.startTime)
                  }), HS(qS)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), gS
              }(gS);
            HS || null == tS || function(SS, HS, gS, tS) {
              const bS = tS.trackResources;
              new PerformanceObserver((tS => {
                const XS = tS.getEntries(),
                  xS = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const NS of XS) {
                  if (oS(NS.name)) continue;
                  null === gS || void 0 === gS || gS.notify({
                    type: "resource"
                  });
                  const tS = NS.toJSON();
                  let XS = Vt(null === tS || void 0 === tS ? void 0 : tS.serverTiming);
                  (null == bS && Wt(tS, Bt) || bS) && HS("faro.performance.resource", IH(IH({}, zt(tS)), {}, {
                    faroNavigationId: SS,
                    faroResourceId: CH()
                  }), void 0, {
                    spanContext: XS,
                    timestampOverwriteMs: it(tS.startTime, xS)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(tS, gS, Rt, SS.config)
          })))
        };
        this.cancelInitialization = () => {
          HS = !0, document.removeEventListener("prerenderingchange", gS)
        }, document.prerendering ? document.addEventListener("prerenderingchange", gS, {
          once: !0
        }) : gS()
      }
      destroy() {
        var SS;
        null === (SS = this.cancelInitialization) || void 0 === SS || SS.call(this), this.cancelInitialization = void 0
      }
    };
    const ot = "data-faro-user-action-name",
      lt = ot.replace(/-name$/, "-timeout"),
      mt = 1e3;

    function et(SS) {
      return `data-${(SS.startsWith("data-")?SS.slice(5):SS).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function rt(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH;
      if (void 0 === SS) return HS;
      let tS = NaN;
      try {
        tS = "string" === typeof SS && "" === SS.trim() ? NaN : Number(SS)
      } catch (bS) {}
      return !Number.isFinite(tS) || tS <= 0 ? (gS(`initialActivityTimeout must be a finite number greater than zero; using ${HS} ms`), HS) : tS > 1e3 ? (gS(`initialActivityTimeout cannot exceed ${mt} ms; clamping to the maximum`), mt) : tS
    }

    function Sb(SS, HS, gS) {
      return void 0 !== SS && window.clearTimeout(SS), window.setTimeout((() => {
        HS()
      }), gS)
    }

    function Hb(SS) {
      return SS.type === Cg
    }
    let gb, tb;

    function bb() {
      return gb || (gb = new ng), tb || (tb = new MutationObserver(((SS, HS) => {
        gb.notify({
          type: "dom-mutation"
        })
      })), tb.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), gb
    }
    const Xb = "fetch",
      xb = "xhr";
    let Nb, qb, ub, Ib, fb = !1;

    function kb() {
      if (Nb) return Nb;

      function SS(SS) {
        Nb.notify({
          type: Gg,
          request: SS
        })
      }

      function HS(SS) {
        Nb.notify({
          type: Cg,
          request: SS
        })
      }
      return Nb = new ng, fb || (! function(SS) {
        let {
          onRequestEnd: HS,
          onRequestStart: gS
        } = SS;
        ub || (ub = window.fetch);
        window.fetch = function() {
          var SS, tS;
          const bS = null !== (SS = lS(arguments[0])) && void 0 !== SS ? SS : "",
            XS = oS(bS),
            xS = (null !== (tS = arguments[1]) && void 0 !== tS ? tS : {}).method,
            NS = CH();
          return XS || gS({
            url: bS,
            method: xS,
            requestId: NS,
            apiType: Xb
          }), ub.apply(this, arguments).then((SS => (XS || HS({
            url: bS,
            method: xS,
            requestId: NS,
            apiType: Xb
          }), SS))).catch((SS => {
            throw XS || HS({
              url: bS,
              method: xS,
              requestId: NS,
              apiType: Xb
            }), SS
          }))
        }
      }({
        onRequestStart: SS,
        onRequestEnd: HS
      }), function(SS) {
        let {
          onRequestStart: HS,
          onRequestEnd: gS
        } = SS;
        qb || (qb = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const SS = arguments[1],
            tS = oS(SS),
            bS = arguments[0],
            XS = CH();
          this.addEventListener("loadstart", (function() {
            tS || HS({
              url: SS,
              method: bS,
              requestId: XS,
              apiType: xb
            })
          })), this.addEventListener("load", (function() {
            tS || gS({
              url: SS,
              method: bS,
              requestId: XS,
              apiType: xb
            })
          })), this.addEventListener("error", (function() {
            tS || gS({
              url: SS,
              method: bS,
              requestId: XS,
              apiType: xb
            })
          })), this.addEventListener("abort", (function() {
            tS || gS({
              url: SS,
              method: bS,
              requestId: XS,
              apiType: xb
            })
          })), qb.apply(this, arguments)
        }
      }({
        onRequestStart: SS,
        onRequestEnd: HS
      }), fb = !0), Nb
    }
    let ab, Kb = !1;
    let jb = function(SS) {
      return SS[SS.Started = 0] = "Started", SS[SS.Halted = 1] = "Halted", SS[SS.Cancelled = 2] = "Cancelled", SS[SS.Ended = 3] = "Ended", SS
    }({});
    var Gb = class {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = SS, this.logDebug = HS, this.initialActivityTimeout = gS, this.http = kb(), this.dom = bb(), this.perf = (Ib || (Ib = new ng), Kb || (ab = Rt.subscribe((SS => {
          "resource" === SS.type && Ib.notify({
            type: "resource-entry"
          })
        })), Kb = !0), Ib), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new ng).merge(this.http, this.dom, this.perf).takeWhile((() => [jb.Started, jb.Halted].includes(this.userAction.getState()))).filter((SS => !!(this.userAction.getState() !== jb.Halted || Hb(SS) && this.runningRequests.has(SS.request.requestId)))).subscribe((SS => {
          (function(SS) {
            return SS.type === Gg
          })(SS) && this.runningRequests.set(SS.request.requestId, SS.request), Hb(SS) && this.runningRequests.delete(SS.request.requestId), Hb(SS) ? this.userAction.getState() === jb.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((SS => [jb.Ended, jb.Cancelled].includes(SS))).first().subscribe((() => this.cleanup())), this.startupTid = Sb(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === jb.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === jb.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Sb(this.haltTid, (() => {
          this.userAction.getState() === jb.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var SS, HS;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (SS = this.allMonitorsSub) || void 0 === SS || SS.unsubscribe(), null === (HS = this.stateSub) || void 0 === HS || HS.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(SS) {
        void 0 !== SS && window.clearTimeout(SS)
      }
    };

    function Cb(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BH;
      var gS;
      const {
        api: tS,
        config: bS,
        internalLogger: XS
      } = SS, xS = rt(null === (gS = bS.userActionsInstrumentation) || void 0 === gS ? void 0 : gS.initialActivityTimeout, 100, HS);
      return {
        processUserEvent: function(SS) {
          var HS, gS;
          const XS = null !== (HS = null === (gS = bS.userActionsInstrumentation) || void 0 === gS ? void 0 : gS.dataAttributeName) && void 0 !== HS ? HS : ot,
            xS = SS.target;
          if (!(xS instanceof Element)) return;
          const NS = function(SS, HS) {
              let gS = SS;
              for (; gS;) {
                if (gS.hasAttribute(HS)) return gS;
                gS = gS.parentElement
              }
              return null
            }(xS, et(XS)),
            qS = function(SS, HS) {
              if (!SS) return;
              const gS = function(SS) {
                  return et(SS).slice(5).replace(/-(.)/g, ((SS, HS) => HS.toUpperCase()))
                }(HS),
                tS = SS.dataset;
              for (const bS in tS)
                if (bS === gS) return tS[bS]
            }(NS, XS);
          if (!NS || !qS) return;
          const uS = function(SS, HS) {
            const gS = SS.getAttribute(function(SS) {
              const HS = et(SS);
              return HS.endsWith("-name") ? `${HS.slice(0,-5)}-timeout` : `${HS}-timeout`
            }(HS));
            return null === gS ? void 0 : Number(gS)
          }(NS, XS);
          tS.startUserAction(qS, {}, {
            triggerName: SS.type,
            initialActivityTimeout: uS
          })
        },
        processUserActionStarted: function(SS, gS) {
          const tS = SS,
            bS = rt(gS, xS, HS);
          new Gb(tS, XS.debug, bS).attach()
        }
      }
    }
    const nb = "user_action_start",
      Pb = {
        Normal: "normal",
        Critical: "critical"
      };
    var Qb = class {
        constructor() {
          this.buffer = []
        }
        addItem(SS) {
          this.buffer.push(SS)
        }
        flushBuffer(SS) {
          if (cS(SS))
            for (const HS of this.buffer) SS(HS);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Db = class extends ng {
        constructor(SS) {
          let {
            name: HS,
            parentId: gS,
            trigger: tS,
            transports: bS,
            attributes: XS,
            trackUserActionsExcludeItem: xS,
            importance: NS = Pb.Normal,
            pushEvent: qS
          } = SS;
          super(), this.name = HS, this.attributes = XS, this.id = CH(), this.trigger = tS, this.parentId = null !== gS && void 0 !== gS ? gS : this.id, this.trackUserActionsExcludeItem = xS, this.importance = NS, this._pushEvent = qS, this._itemBuffer = new Qb, this._transports = bS, this._state = 0, this._start()
        }
        addItem(SS) {
          return 0 === this._state && (this._itemBuffer.addItem(SS), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = kH(), this._startTimeMono = aH())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((SS => {
            this._transports.execute(SS)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const SS = kH(),
            HS = aH() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((SS => {
            if (function(SS, HS) {
                return (null === HS || void 0 === HS ? void 0 : HS(SS)) || "measurement" === SS.type && "web-vitals" === SS.payload.type
              }(SS, this.trackUserActionsExcludeItem)) return void this._transports.execute(SS);
            const HS = eH(eH({}, SS), {}, {
              payload: eH(eH({}, SS.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(HS)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", eH({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: SS.toString(),
            userActionDuration: HS.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, VH(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: SS => (SS.action = {
              id: this.id,
              name: this.name
            }, SS)
          })
        }
        getState() {
          return this._state
        }
      };
    const wb = new ng;

    function hb(SS, HS) {
      return !!SS && (0 === (null === SS || void 0 === SS ? void 0 : SS.getState()) && (SS.addItem(HS), !0))
    }
    var Zb = class extends Hg {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = gg
        }
        initialize() {
          const {
            processUserEvent: SS,
            processUserActionStarted: HS
          } = Cb(jS, (SS => this.logWarn(SS)));
          this._processUserEvent = SS, this._processKeydown = HS => {
            [" ", "Enter"].includes(HS.key) && SS(HS)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = wb.subscribe((SS => {
            let {
              type: gS,
              userAction: tS,
              initialActivityTimeout: bS
            } = SS;
            "user_action_start" === gS && HS(tS, bS)
          }))
        }
        destroy() {
          var SS;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (SS = this._userActionSub) || void 0 === SS || SS.unsubscribe()
        }
      },
      Jb = class extends Hg {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = gg, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(SS) {
          const HS = {
            blockedURI: SS.blockedURI,
            columnNumber: SS.columnNumber,
            disposition: SS.disposition,
            documentURI: SS.documentURI,
            effectiveDirective: SS.effectiveDirective,
            lineNumber: SS.lineNumber,
            originalPolicy: SS.originalPolicy,
            referrer: SS.referrer,
            sample: SS.sample,
            sourceFile: SS.sourceFile,
            statusCode: SS.statusCode,
            violatedDirective: SS.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", VH(HS))
        }
      };
    var Ob = class extends ng {
      constructor(SS, HS) {
        var gS, tS, bS, XS;
        super(), this._tracking = !1, this.eventsObservable = SS, this._options = {
          inactivityMs: null !== (gS = null === HS || void 0 === HS ? void 0 : HS.inactivityMs) && void 0 !== gS ? gS : 100,
          drainTimeoutMs: null !== (tS = null === HS || void 0 === HS ? void 0 : HS.drainTimeoutMs) && void 0 !== tS ? tS : 1e4,
          isOperationStart: null !== (bS = null === HS || void 0 === HS ? void 0 : HS.isOperationStart) && void 0 !== bS ? bS : () => {},
          isOperationEnd: null !== (XS = null === HS || void 0 === HS ? void 0 : HS.isOperationEnd) && void 0 !== XS ? XS : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((SS => {
          var HS;
          this._lastEventTime = aH(), null === (HS = this._currentEvents) || void 0 === HS || HS.push(SS);
          const gS = this._options.isOperationStart(SS);
          var tS;
          gS && (null === (tS = this._activeOperations) || void 0 === tS || tS.set(gS, !0));
          const bS = this._options.isOperationEnd(SS);
          var XS;
          bS && (null === (XS = this._activeOperations) || void 0 === XS || XS.delete(bS));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = aH(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let SS;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), SS = this.hasActiveOperations() ? aH() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: SS
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = db(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = db(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(SS) {
        SS && clearTimeout(SS)
      }
    };

    function db(SS, HS, gS) {
      return SS && clearTimeout(SS), SS = setTimeout((() => {
        HS()
      }), gS)
    }
    let cb;
    const vb = new Set,
      Eb = new Map;
    let Lb, Yb, Ab, yb, Vb, ib, Wb, zb, Ub = !1;
    var pb = class extends Hg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = gg
      }
      initialize() {
        const SS = kb(),
          HS = bb(),
          gS = function() {
            function SS(SS, HS) {
              const gS = null !== HS && void 0 !== HS ? HS : location.href;
              gS !== Yb && (Lb.notify({
                type: "url-change",
                from: Yb,
                to: gS,
                trigger: SS
              }), Yb = gS)
            }
            if (Lb || (Lb = new ng, Yb = location.href), !Ub)
              if ("navigation" in window && "NavigateEvent" in window) {
                Wb = HS => {
                  try {
                    const gS = null === HS || void 0 === HS ? void 0 : HS.destination;
                    (null === gS || void 0 === gS ? void 0 : gS.sameDocument) && "string" === typeof gS.url && SS("navigate", gS.url)
                  } catch (gS) {}
                }, window.navigation.addEventListener("navigate", Wb);
                const HS = window.NavigateEvent;
                HS && HS.prototype && "function" === typeof HS.prototype.intercept && (zb || (zb = HS.prototype.intercept), HS.prototype.intercept = function(HS) {
                  try {
                    const HS = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      gS = null === this || void 0 === this ? void 0 : this.destination;
                    HS && gS && !1 === gS.sameDocument && "string" === typeof gS.url && SS("navigate-intercept", gS.url)
                  } catch (gS) {}
                  return zb.call(this, HS)
                }), Ub = !0
              } else Ab || (Ab = window.history.pushState), window.history.pushState = function() {
                for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
                const bS = Ab.apply(window.history, gS);
                return SS("pushState"), bS
              }, yb || (yb = window.history.replaceState), window.history.replaceState = function() {
                for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
                const bS = yb.apply(window.history, gS);
                return SS("replaceState"), bS
              }, Vb = () => SS("popstate"), ib = () => SS("hashchange"), window.addEventListener("popstate", Vb), window.addEventListener("hashchange", ib), Ub = !0;
            return Lb
          }(),
          tS = (bS = ["pointerdown", "keydown"], cb || (cb = new ng), bS.forEach((SS => {
            if (!vb.has(SS)) {
              const HS = () => {
                cb.notify({
                  type: "interaction",
                  name: SS
                })
              };
              window.addEventListener(SS, HS), vb.add(SS), Eb.set(SS, HS)
            }
          })), cb);
        var bS;
        const XS = new Ob((new ng).merge(SS, HS, gS), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: SS => function(SS) {
            return SS.type === Gg
          }(SS) ? SS.request.requestId : void 0,
          isOperationEnd: SS => function(SS) {
            return SS.type === Cg
          }(SS) ? SS.request.requestId : void 0
        });
        XS.filter((SS => "tracking-ended" === SS.message)).subscribe((SS => {
          var HS, gS;
          if ((null === (HS = SS.events) || void 0 === HS ? void 0 : HS.some((SS => "url-change" === SS.type))) && (null === (gS = SS.events) || void 0 === gS ? void 0 : gS.some((SS => "dom-mutation" === SS.type)))) {
            var tS;
            const HS = null === (tS = SS.events) || void 0 === tS ? void 0 : tS.find((SS => "url-change" === SS.type));
            jS.api.pushEvent("faro.navigation", {
              fromUrl: null === HS || void 0 === HS ? void 0 : HS.from,
              toUrl: null === HS || void 0 === HS ? void 0 : HS.to,
              sameDocument: String(!0),
              duration: SS.duration
            })
          }
        })), tS.subscribe((() => {
          XS.startTracking()
        }))
      }
    };

    function sb() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const HS = [new Zb, new Ag, new At, new tg, new Vg, new pb];
      return !1 !== SS.enablePerformanceInstrumentation && HS.unshift(new Tt), !1 !== SS.enableContentSecurityPolicyInstrumentation && HS.push(new Jb), !1 !== SS.captureConsole && HS.push(new Lg), HS
    }
    var Bb = gS(6892);
    let Mb, Fb;

    function Rb() {
      const SS = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Mb === SS && Fb || (Fb = new Bb.UAParser(SS).getResult(), Mb = SS), Fb
    }
    const Tb = () => {
        const {
          browser: SS,
          os: HS,
          ua: gS
        } = Rb(), {
          name: tS,
          version: bS
        } = SS, {
          name: XS,
          version: xS
        } = HS, NS = navigator.language, qS = gS.includes("Mobi"), uS = function() {
          if (!tS || !bS) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== tS && void 0 !== tS ? tS : yg,
            version: null !== bS && void 0 !== bS ? bS : yg,
            os: `${null!==XS&&void 0!==XS?XS:yg} ${null!==xS&&void 0!==xS?xS:yg}`,
            userAgent: null !== gS && void 0 !== gS ? gS : yg,
            language: null !== NS && void 0 !== NS ? NS : yg,
            mobile: qS,
            brands: null !== uS && void 0 !== uS ? uS : yg,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      ob = () => {
        const {
          name: SS,
          version: HS
        } = Rb().os;
        if (!SS && !HS) return {};
        const gS = {};
        return SS && (gS.name = SS), HS && (gS.version = HS), {
          os: gS
        }
      };

    function lb(SS) {
      var HS, gS, tS;
      return {
        id: null !== (HS = null === (gS = jS.config) || void 0 === gS || null === (gS = gS.sessionTracking) || void 0 === gS || null === (tS = gS.generateSessionId) || void 0 === tS ? void 0 : tS.call(gS)) && void 0 !== HS ? HS : CH(),
        attributes: SS
      }
    }
    const mb = () => ({
      sdk: {
        name: "faro-web",
        version: gg
      }
    });
    var eb = class extends Sg {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let rb = function(SS) {
      return SS.EXCEPTION = "exception", SS.LOG = "log", SS.MEASUREMENT = "measurement", SS.TRACE = "trace", SS.EVENT = "event", SS
    }({});
    const SX = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function HX(SS, HS) {
      var gS, tS;
      if (void 0 === HS) return SS;
      if (void 0 === SS) return {
        resourceSpans: HS
      };
      const bS = null === (gS = SS.resourceSpans) || void 0 === gS ? void 0 : gS[0];
      if (void 0 === bS) return SS;
      const XS = (null === bS || void 0 === bS ? void 0 : bS.scopeSpans) || [],
        xS = (null === HS || void 0 === HS || null === (tS = HS[0]) || void 0 === tS ? void 0 : tS.scopeSpans) || [];
      return eH(eH({}, SS), {}, {
        resourceSpans: [eH(eH({}, bS), {}, {
          scopeSpans: [...XS, ...xS]
        })]
      })
    }

    function gX(SS) {
      let HS = {
        meta: {}
      };
      return void 0 !== SS[0] && (HS.meta = SS[0].meta), SS.forEach((SS => {
        switch (SS.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const gS = SX[SS.type],
              tS = HS[gS];
            HS = eH(eH({}, HS), {}, {
              [gS]: void 0 === tS ? [SS.payload] : [...tS, SS.payload]
            });
            break
          }
          case "trace":
            HS = eH(eH({}, HS), {}, {
              traces: HX(HS.traces, SS.payload.resourceSpans)
            })
        }
      })), HS
    }
    var tX = class extends eb {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = SS, this.name = "@grafana/faro-web-sdk:transport-console", this.version = gg
      }
      send(SS) {
        var HS;
        return this.unpatchedConsole[null !== (HS = this.options.level) && void 0 !== HS ? HS : Pg.DEBUG]("New event", gX([SS]))
      }
    };
    const bX = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      XX = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      xX = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      NX = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      qX = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      uX = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function IX(SS) {
      let {
        weekday: HS,
        day: gS,
        month: tS,
        year: bS,
        hour: XS,
        minute: xS,
        second: NS
      } = SS;
      if (bS < 1900 || gS < 1 || XS > 23 || xS > 59 || NS > 60) return;
      const qS = 60 === NS,
        uS = new Date(0);
      return uS.setUTCFullYear(bS, tS, gS), uS.setUTCHours(XS, xS, qS ? 59 : NS, 0), uS.getUTCDay() === HS && uS.getUTCDate() === gS && uS.getUTCMonth() === tS && uS.getUTCFullYear() === bS && uS.getUTCHours() === XS && uS.getUTCMinutes() === xS && uS.getUTCSeconds() === (qS ? 59 : NS) ? uS.getTime() + (qS ? 1e3 : 0) : void 0
    }
    var fX = class {
      constructor(SS) {
        this.options = SS, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var SS = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const HS = this.sequence++;
        let gS = !1;
        return {
          deliver: function() {
            var gS = Ft((function*(gS) {
              const tS = SS.options.getNow();
              let bS, XS = 0;
              for (;;) {
                var xS, NS, qS;
                const uS = SS.options.retry.maxAttempts - XS,
                  IS = yield SS.runAttempt((() => gS(uS, SS.unloading)), XS > 0);
                if (XS += IS.attemptsMade, "success" === IS.kind) return {
                  kind: "success",
                  attempts: XS,
                  elapsedTimeMs: SS.options.getNow() - tS
                };
                if (bS = IS.failure, "terminal" === IS.kind || SS.unloading) return {
                  kind: "terminal",
                  attempts: XS,
                  elapsedTimeMs: SS.options.getNow() - tS,
                  failure: bS
                };
                if (XS >= SS.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: XS,
                  elapsedTimeMs: SS.options.getNow() - tS,
                  failure: bS,
                  reason: "retries-exhausted"
                };
                if (null != IS.retryAfterMs && IS.retryAfterMs > SS.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: XS,
                  elapsedTimeMs: SS.options.getNow() - tS,
                  failure: bS,
                  reason: "retry-after-too-long"
                };
                const fS = Math.min(null !== (xS = IS.retryAfterMs) && void 0 !== xS ? xS : SS.options.retry.initialBackoffMs * Math.pow(SS.options.retry.backoffMultiplier, XS - 1), SS.options.retry.maxBackoffMs);
                if (null === (NS = (qS = SS.options).onRetry) || void 0 === NS || NS.call(qS, fS, XS + 1), yield SS.waitForTurn(HS, fS)) {
                  const HS = SS.options.retry.maxAttempts - XS,
                    bS = yield SS.runAttempt((() => gS(HS, !0)));
                  return XS += bS.attemptsMade, {
                    kind: "success" === bS.kind ? "success" : "terminal",
                    attempts: XS,
                    elapsedTimeMs: SS.options.getNow() - tS,
                    failure: "success" === bS.kind ? void 0 : bS.failure
                  }
                }
              }
            }));
            return function(SS) {
              return gS.apply(this, arguments)
            }
          }(),
          release: () => {
            gS || (gS = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const SS = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const HS of SS) HS.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((gS, tS) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const HS = () => {
                this.inProgress--, this.runNextAttempt()
              };
              SS().then((SS => {
                HS(), gS(SS)
              }), (SS => {
                HS(), tS(SS)
              }))
            },
            isRedelivery: HS
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const SS = this.options.getNow(),
            HS = this.attemptQueue.findIndex((HS => {
              let {
                isRedelivery: gS
              } = HS;
              return this.unloading || !gS || SS >= this.nextSendAt
            }));
          if (HS < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - SS)));
          const [gS] = this.attemptQueue.splice(HS, 1);
          gS.isRedelivery && !this.unloading && (this.nextSendAt = SS + 1), gS.run()
        }
      }
      waitForTurn(SS, HS) {
        const gS = Math.min(HS * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((HS => {
          this.waiting.push({
            sequence: SS,
            readyAt: this.options.getNow() + gS,
            resolve: HS
          }), this.waiting.sort(((SS, HS) => SS.readyAt === HS.readyAt ? SS.sequence - HS.sequence : SS.readyAt - HS.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const SS = this.waiting[0],
          HS = SS.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const HS = this.waiting.indexOf(SS);
          HS >= 0 && this.waiting.splice(HS, 1), SS.resolve(!1), this.scheduleNext()
        }), Math.max(0, HS - this.options.getNow()))
      }
    };

    function kX(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if ({}.hasOwnProperty.call(SS, tS)) {
            if (HS.includes(tS)) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.includes(gS) || {}.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function aX(SS) {
      const {
        size: HS,
        concurrency: gS
      } = SS, tS = [];
      let bS = 0;
      const XS = () => {
        if (bS < gS && tS.length) {
          const {
            producer: SS,
            resolve: HS,
            reject: gS
          } = tS.shift();
          bS++, SS().then((SS => {
            bS--, XS(), HS(SS)
          }), (SS => {
            bS--, XS(), gS(SS)
          }))
        }
      };
      return {
        add: SS => {
          if (tS.length + bS >= HS) throw new Error("Task buffer full");
          return new Promise(((HS, gS) => {
            tS.push({
              producer: SS,
              resolve: HS,
              reject: gS
            }), XS()
          }))
        }
      }
    }
    const KX = ["headers"],
      jX = ["keepalive", "signal"],
      GX = new Set([408, 425, 429, 500, 502, 503, 504]),
      CX = new Set([429, 503]);
    let nX = 0,
      PX = 0;
    var QX = class extends Error {};
    var DX = class extends eb {
      constructor(SS) {
        var HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS;
        super(), this.options = SS, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = gg, this.pendingCustomSends = 0, this.getNow = null !== (HS = SS.getNow) && void 0 !== HS ? HS : Date.now, this.requestTimeoutMs = null !== (gS = SS.requestTimeoutMs) && void 0 !== gS ? gS : 1e4, this.compressionEnabled = null !== (tS = SS.requestCompression) && void 0 !== tS && tS && "undefined" !== typeof CompressionStream, SS.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new fX({
          bufferSize: null !== (bS = SS.bufferSize) && void 0 !== bS ? bS : 30,
          concurrency: null !== (XS = SS.concurrency) && void 0 !== XS ? XS : 5,
          retry: {
            maxAttempts: null !== (xS = null === (NS = SS.retry) || void 0 === NS ? void 0 : NS.maxAttempts) && void 0 !== xS ? xS : 3,
            initialBackoffMs: null !== (qS = null !== (uS = null === (IS = SS.retry) || void 0 === IS ? void 0 : IS.initialBackoffMs) && void 0 !== uS ? uS : SS.defaultRateLimitBackoffMs) && void 0 !== qS ? qS : 1e3,
            maxBackoffMs: null !== (fS = null === (kS = SS.retry) || void 0 === kS ? void 0 : kS.maxBackoffMs) && void 0 !== fS ? fS : 3e4,
            backoffMultiplier: null !== (aS = null === (KS = SS.retry) || void 0 === KS ? void 0 : KS.backoffMultiplier) && void 0 !== aS ? aS : 2
          },
          getNow: this.getNow,
          getRandom: null !== (jS = SS.getRandom) && void 0 !== jS ? jS : Math.random,
          onRetry: (SS, HS) => {
            this.logDebug(`Retrying failed request after ${SS}ms. Attempt ${HS}.`)
          }
        }), this.customPromiseBuffer = aX({
          size: null !== (GS = SS.bufferSize) && void 0 !== GS ? GS : 30,
          concurrency: null !== (CS = SS.concurrency) && void 0 !== CS ? CS : 5
        }), this.defaultPromiseBuffer = {
          add: SS => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(SS);
            const HS = this.deliveryQueue.reserve();
            if (!HS) throw new Error("Task buffer full");
            return this.runBufferedTask(HS, SS)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (SS => {
          SS.persisted && this.deliveryQueue.resume()
        })))
      }
      send(SS) {
        var HS = this;
        return Ft((function*() {
          const gS = HS.promiseBuffer;
          if (gS !== HS.defaultPromiseBuffer || gS.add !== HS.defaultBufferAdd) {
            HS.pendingCustomSends++;
            try {
              yield gS.add((() => HS.deliver(SS)))
            } catch (tS) {
              HS.logError("Permanent delivery failure", {
                error: tS,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              HS.pendingCustomSends--
            }
          } else yield HS.deliver(SS)
        }))()
      }
      runBufferedTask(SS, HS) {
        return Ft((function*() {
          let gS;
          try {
            return yield SS.deliver(Ft((function*() {
              return gS = yield HS(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), gS
          } finally {
            SS.release()
          }
        }))()
      }
      deliver(SS) {
        var HS = this;
        return Ft((function*() {
          const gS = HS.deliveryQueue.reserve();
          if (gS) try {
            const tS = yield HS.prepareRequest(SS), bS = yield gS.deliver(((SS, gS) => HS.performAttempt(tS, SS, gS)));
            "terminal" === bS.kind && HS.logError("retries-exhausted" === bS.reason ? "Delivery retries exhausted" : "Permanent delivery failure", IH(IH({}, bS.failure), {}, {
              reason: bS.reason,
              attempts: bS.attempts,
              elapsedTimeMs: bS.elapsedTimeMs
            }))
          } catch (tS) {
            HS.logError("Permanent delivery failure", {
              error: tS,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            gS.release()
          } else HS.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var SS;
        return [this.options.url].concat(null !== (SS = this.config.ignoreUrls) && void 0 !== SS ? SS : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(SS) {
        var HS = this;
        return Ft((function*() {
          var gS, tS;
          const bS = gX(SS),
            XS = null === (gS = bS.meta.session) || void 0 === gS ? void 0 : gS.id,
            xS = JSON.stringify(bS),
            NS = null !== (tS = HS.options.requestOptions) && void 0 !== tS ? tS : {},
            {
              headers: qS = {}
            } = NS,
            uS = kX(NS, KX),
            {
              keepalive: IS,
              signal: fS
            } = uS,
            kS = kX(uS, jX),
            aS = {};
          for (const [SS, HS] of Object.entries(qS)) aS[SS] = "function" === typeof HS ? yield HS(): HS;
          let KS = xS,
            jS = function(SS) {
              return "undefined" === typeof TextEncoder ? SS.length : (new TextEncoder).encode(SS).byteLength
            }(xS);
          const GS = {};
          return HS.compressionEnabled && (KS = yield HS.compress(xS), jS = KS.size, GS["Content-Encoding"] = "gzip"), {
            bodySize: jS,
            sessionId: XS,
            requestInit: IH({
              method: "POST",
              headers: IH(IH(IH(IH(IH({
                "Content-Type": "application/json"
              }, GS), aS), HS.options.apiKey ? {
                "x-api-key": HS.options.apiKey
              } : {}), XS ? {
                "x-faro-session-id": XS
              } : {}), {}, {
                "Idempotency-Key": CH(20)
              }),
              body: KS
            }, kS)
          }
        }))()
      }
      performAttempt(SS, HS, gS) {
        var tS = this;
        return Ft((function*() {
          var bS;
          const XS = null === (bS = tS.options.requestOptions) || void 0 === bS ? void 0 : bS.signal;
          if (null === XS || void 0 === XS ? void 0 : XS.aborted) return {
            kind: "terminal",
            failure: {
              error: XS.reason
            },
            attemptsMade: 0
          };
          let xS = 0;
          try {
            var NS;
            const bS = yield tS.fetchWithKeepaliveFallback(SS.requestInit, SS.bodySize, !!gS || (null === (NS = tS.options.requestOptions) || void 0 === NS ? void 0 : NS.keepalive), HS, (() => xS++));
            if (tS.handleResponse(bS, SS.sessionId), bS.status >= 200 && bS.status < 300) return {
              kind: "success",
              attemptsMade: xS
            };
            const XS = {
              status: bS.status
            };
            return !GX.has(bS.status) || gS ? {
              kind: "terminal",
              failure: XS,
              attemptsMade: xS
            } : {
              kind: "retry",
              failure: XS,
              attemptsMade: xS,
              retryAfterMs: CX.has(bS.status) ? tS.getRetryAfterDelayMs(bS) : void 0
            }
          } catch (qS) {
            const SS = {
              error: qS
            };
            return (null === XS || void 0 === XS ? void 0 : XS.aborted) || !tS.isFetchNetworkError(qS) || gS ? {
              kind: "terminal",
              failure: SS,
              attemptsMade: xS
            } : {
              kind: "retry",
              failure: SS,
              attemptsMade: xS
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(SS, HS, gS, tS, bS) {
        var XS = this;
        return Ft((function*() {
          const xS = XS.getNow(),
            NS = XS.reserveKeepalive(HS, gS);
          try {
            return yield XS.fetchWithTimeout(IH(IH({}, SS), {}, {
              keepalive: NS.keepalive
            }), XS.requestTimeoutMs, bS)
          } catch (uS) {
            var qS;
            if (NS.keepalive && tS > 1 && XS.isFetchNetworkError(uS) && !(uS instanceof QX) && !(null === (qS = XS.options.requestOptions) || void 0 === qS || null === (qS = qS.signal) || void 0 === qS ? void 0 : qS.aborted)) {
              XS.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const HS = XS.requestTimeoutMs - (XS.getNow() - xS);
              return XS.fetchWithTimeout(IH(IH({}, SS), {}, {
                keepalive: !1
              }), HS, bS)
            }
            throw uS
          } finally {
            NS.release()
          }
        }))()
      }
      fetchWithTimeout(SS, HS, gS) {
        var tS = this;
        return Ft((function*() {
          var bS;
          const XS = null === (bS = tS.options.requestOptions) || void 0 === bS ? void 0 : bS.signal;
          if (tS.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return gS(), fetch(tS.options.url, IH(IH({}, SS), {}, {
            signal: XS
          }));
          if (HS <= 0) throw new QX("Request timed out");
          const xS = new AbortController,
            NS = () => xS.abort(null === XS || void 0 === XS ? void 0 : XS.reason);
          null === XS || void 0 === XS || XS.addEventListener("abort", NS, {
            once: !0
          });
          let qS = !1;
          const uS = setTimeout((() => {
            qS = !0, xS.abort()
          }), HS);
          try {
            return gS(), yield fetch(tS.options.url, IH(IH({}, SS), {}, {
              signal: xS.signal
            }))
          } catch (IS) {
            if (qS && !(null === XS || void 0 === XS ? void 0 : XS.aborted)) throw new QX("Request timed out");
            throw IS
          } finally {
            clearTimeout(uS), null === XS || void 0 === XS || XS.removeEventListener("abort", NS)
          }
        }))()
      }
      getRetryAfterDelayMs(SS) {
        const HS = SS.headers.get("Retry-After");
        if (!HS) return;
        if (/^\d+$/.test(HS)) {
          const SS = 1e3 * Number(HS);
          return Number.isFinite(SS) ? SS : Number.POSITIVE_INFINITY
        }
        const gS = this.getNow(),
          tS = function(SS, HS) {
            const gS = bX.exec(SS);
            if (gS) {
              const [, SS, HS, tS, bS, XS, xS, NS] = gS;
              return IX({
                weekday: NX.indexOf(SS),
                day: Number(HS),
                month: uX.indexOf(tS),
                year: Number(bS),
                hour: Number(XS),
                minute: Number(xS),
                second: Number(NS)
              })
            }
            const tS = XX.exec(SS);
            if (tS) {
              const [, SS, gS, xS, NS, qS, uS, IS] = tS, fS = new Date(HS);
              if (Number.isNaN(fS.getTime())) return;
              const kS = fS.getUTCFullYear();
              let aS = 100 * Math.floor(kS / 100) + Number(NS);
              aS < kS && (aS += 100);
              const KS = uX.indexOf(xS),
                jS = {
                  month: KS,
                  day: Number(gS),
                  hour: Number(qS),
                  minute: Number(uS),
                  second: Number(IS),
                  millisecond: 0
                },
                GS = {
                  month: fS.getUTCMonth(),
                  day: fS.getUTCDate(),
                  hour: fS.getUTCHours(),
                  minute: fS.getUTCMinutes(),
                  second: fS.getUTCSeconds(),
                  millisecond: fS.getUTCMilliseconds()
                };
              return (aS > kS + 50 || aS === kS + 50 && (XS = GS, ((bS = jS).month - XS.month || bS.day - XS.day || bS.hour - XS.hour || bS.minute - XS.minute || bS.second - XS.second || bS.millisecond - XS.millisecond) > 0)) && (aS -= 100), IX({
                weekday: qX.indexOf(SS),
                day: Number(gS),
                month: KS,
                year: aS,
                hour: Number(qS),
                minute: Number(uS),
                second: Number(IS)
              })
            }
            var bS, XS;
            const xS = xX.exec(SS);
            if (!xS) return;
            const [, NS, qS, uS, IS, fS, kS, aS, KS] = xS;
            return IX({
              weekday: NX.indexOf(NS),
              day: Number(null !== uS && void 0 !== uS ? uS : IS),
              month: uX.indexOf(qS),
              year: Number(KS),
              hour: Number(fS),
              minute: Number(kS),
              second: Number(aS)
            })
          }(HS, gS);
        return null == tS ? void 0 : Math.max(0, tS - gS)
      }
      reserveKeepalive(SS, HS) {
        if (!1 === HS || SS > 6e4 || nX + SS > 6e4 || PX >= 9) return {
          keepalive: !1,
          release: BH
        };
        nX += SS, PX++;
        let gS = !1;
        return {
          keepalive: !0,
          release: () => {
            gS || (gS = !0, nX -= SS, PX--)
          }
        }
      }
      handleResponse(SS, HS) {
        202 === SS.status && "invalid" === SS.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), HS), SS.text().catch(BH)
      }
      isFetchNetworkError(SS) {
        return SS instanceof TypeError || SS instanceof QX || SS instanceof DOMException && "AbortError" === SS.name
      }
      compress(SS) {
        return Ft((function*() {
          const HS = [],
            gS = new ReadableStream({
              start(HS) {
                HS.enqueue((new TextEncoder).encode(SS)), HS.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: SS,
              value: tS
            } = yield gS.read();
            if (SS) return new Blob(HS);
            HS.push(tS)
          }
        }))()
      }
      extendFaroSession(SS, HS, gS) {
        var tS, bS;
        const XS = SS.sessionTracking;
        if (!(null === XS || void 0 === XS ? void 0 : XS.enabled)) return void HS("Session expired.");
        const {
          fetchUserSession: xS,
          storeUserSession: NS
        } = sH(XS), qS = null === (tS = this.metas.value.session) || void 0 === tS ? void 0 : tS.id, uS = null === (bS = xS()) || void 0 === bS ? void 0 : bS.sessionId;
        gS && gS === qS && gS === uS ? (vH({
          fetchUserSession: xS,
          storeUserSession: NS
        })({
          forceSessionExtend: !0
        }), HS("Session expired; created new session.")) : HS("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const wX = () => {
      const SS = window.k6;
      return {
        k6: IH({
          isK6Browser: !0
        }, (null === SS || void 0 === SS ? void 0 : SS.testRunId) && {
          testRunId: null === SS || void 0 === SS ? void 0 : SS.testRunId
        })
      }
    };
    let hX, ZX;

    function JX() {
      let {
        generatePageId: SS,
        initialPageMeta: HS
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const gS = location.href;
        return cS(SS) && hX !== gS && (hX = gS, ZX = SS(location)), {
          page: IH(IH({
            url: gS
          }, ZX ? {
            id: ZX
          } : {}), HS)
        }
      }
    }

    function OX() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH,
        HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gS = FH;
      return HS > 0 && (gS.error = HS >= 1 ? function() {
        for (var HS = arguments.length, tS = new Array(HS), bS = 0; bS < HS; bS++) tS[bS] = arguments[bS];
        SS.error(`${gS.prefix}\n`, ...tS)
      } : BH, gS.warn = HS >= 2 ? function() {
        for (var HS = arguments.length, tS = new Array(HS), bS = 0; bS < HS; bS++) tS[bS] = arguments[bS];
        SS.warn(`${gS.prefix}\n`, ...tS)
      } : BH, gS.info = HS >= 3 ? function() {
        for (var HS = arguments.length, tS = new Array(HS), bS = 0; bS < HS; bS++) tS[bS] = arguments[bS];
        SS.info(`${gS.prefix}\n`, ...tS)
      } : BH, gS.debug = HS >= 4 ? function() {
        for (var HS = arguments.length, tS = new Array(HS), bS = 0; bS < HS; bS++) tS[bS] = arguments[bS];
        SS.debug(`${gS.prefix}\n`, ...tS)
      } : BH), gS
    }
    const dX = "faro",
      cX = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      vX = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function EX(SS) {
      var HS, gS, bS, XS, xS, NS;
      const qS = [],
        IS = OX(SS.unpatchedConsole, SS.internalLoggerLevel);
      SS.transports ? ((SS.url || SS.apiKey) && IS.error('if "transports" is defined, "url" and "apiKey" should not be defined'), qS.push(...SS.transports)) : SS.url ? qS.push(new DX({
        url: SS.url,
        apiKey: SS.apiKey,
        requestCompression: SS.requestCompression
      })) : IS.error('either "url" or "transports" must be defined');
      const {
        dedupe: fS = !0,
        eventDomain: kS = tS,
        globalObjectKey: aS = dX,
        instrumentations: KS = sb(),
        internalLoggerLevel: jS = RH,
        isolate: GS = !1,
        logArgsSerializer: CS = Eg,
        metas: nS = YX(SS),
        paused: PS = !1,
        preventGlobalExposure: QS = !1,
        unpatchedConsole: DS = rH,
        url: wS,
        experimental: hS
      } = SS, ZS = kX(SS, vX), JS = null !== (HS = null === hS || void 0 === hS ? void 0 : hS.trackNavigation) && void 0 !== HS && HS, OS = {
        dataAttributeName: et(null !== (gS = null === (bS = SS.userActionsInstrumentation) || void 0 === bS ? void 0 : bS.dataAttributeName) && void 0 !== gS ? gS : ot),
        excludeItem: null === (XS = SS.userActionsInstrumentation) || void 0 === XS ? void 0 : XS.excludeItem,
        initialActivityTimeout: rt(null === (xS = SS.userActionsInstrumentation) || void 0 === xS ? void 0 : xS.initialActivityTimeout, 100, (SS => IS.warn(SS)))
      };
      return IH(IH({}, ZS), {}, {
        batching: IH(IH({}, cX), SS.batching),
        dedupe: fS,
        globalObjectKey: aS,
        instrumentations: LX(KS, SS),
        internalLoggerLevel: jS,
        isolate: GS,
        logArgsSerializer: CS,
        metas: nS,
        parseStacktrace: jg,
        paused: PS,
        preventGlobalExposure: QS,
        transports: qS,
        unpatchedConsole: DS,
        eventDomain: kS,
        ignoreUrls: [...null !== (NS = SS.ignoreUrls) && void 0 !== NS ? NS : [], ...wS ? [wS] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: IH(IH(IH({}, uS), SS.sessionTracking), AX({
          trackGeolocation: SS.trackGeolocation,
          sessionTracking: SS.sessionTracking
        })),
        userActionsInstrumentation: OS,
        experimental: {
          trackNavigation: JS
        }
      })
    }

    function LX(SS, HS) {
      let {
        experimental: gS
      } = HS;
      var tS;
      const bS = null !== (tS = null === gS || void 0 === gS ? void 0 : gS.trackNavigation) && void 0 !== tS && tS;
      return SS.filter((SS => !("@grafana/faro-web-sdk:instrumentation-navigation" === SS.name && !bS)))
    }

    function YX(SS) {
      var HS, gS, tS;
      const {
        page: bS,
        generatePageId: XS
      } = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.pageTracking) && void 0 !== HS ? HS : {}, xS = [Tb, ob, JX({
        generatePageId: XS,
        initialPageMeta: bS
      }), ...null !== (gS = SS.metas) && void 0 !== gS ? gS : [], mb];
      return dS(null === (tS = window) || void 0 === tS ? void 0 : tS.k6) ? [...xS, wX] : xS
    }

    function AX(SS) {
      let {
        trackGeolocation: HS,
        sessionTracking: gS
      } = SS;
      var tS;
      const bS = {};
      return JS(HS) && (bS.geoLocationTrackingEnabled = HS), RS(bS) ? {} : {
        session: IH(IH({}, null !== (tS = null === gS || void 0 === gS ? void 0 : gS.session) && void 0 !== tS ? tS : {}), {}, {
          overrides: bS
        })
      }
    }
    const yX = new WeakSet;

    function VX(SS) {
      return yX.add(SS), SS
    }

    function iX(SS, HS) {
      if (SS.capture) return VX(SS.capture(HS));
      const gS = VX(SS.value);
      return null === HS || void 0 === HS || HS(), gS
    }

    function WX(SS) {
      const HS = `__faroBundleId_${SS}`,
        gS = null === IS || void 0 === IS ? void 0 : IS[HS];
      if ("string" === typeof gS && "" !== gS) return gS;
      const tS = "undefined" !== typeof window ? window[HS] : void 0;
      return "string" === typeof tS && "" !== tS ? tS : void 0
    }

    function zX(SS) {
      var HS, gS;
      const tS = SS.config.app.name,
        bS = tS ? function(SS) {
          return null === IS || void 0 === IS ? void 0 : IS[`__faroGitHash_${SS}`]
        }(tS) : void 0,
        XS = {
          sdk: {
            version: gg,
            name: "faro"
          },
          app: eH({
            bundleId: tS && WX(tS)
          }, void 0 !== bS ? {
            gitHash: bS
          } : {})
        },
        xS = null === (HS = SS.config.sessionTracking) || void 0 === HS ? void 0 : HS.session;
      xS && SS.api.setSession(xS), SS.config.app && (XS.app = eH(eH({}, SS.config.app), XS.app)), SS.config.user && (XS.user = SS.config.user), SS.config.view && (XS.view = SS.config.view), SS.metas.add(XS, ...null !== (gS = SS.config.metas) && void 0 !== gS ? gS : [])
    }
    var UX = class {
      constructor(SS, HS) {
        var gS, tS;
        this.signalBuffer = [], this.itemLimit = null !== (gS = null === HS || void 0 === HS ? void 0 : HS.itemLimit) && void 0 !== gS ? gS : 50, this.sendTimeout = null !== (tS = null === HS || void 0 === HS ? void 0 : HS.sendTimeout) && void 0 !== tS ? tS : 250, this.paused = (null === HS || void 0 === HS ? void 0 : HS.paused) || !1, this.sendFn = SS, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(SS) {
        this.paused || (this.signalBuffer.push(SS), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(SS) {
        const HS = new Map;
        return SS.forEach((SS => {
          const gS = JSON.stringify(SS.meta);
          let tS = HS.get(gS);
          tS = void 0 === tS ? [SS] : [...tS, SS], HS.set(gS, tS)
        })), Array.from(HS.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const SS = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(SS).forEach(this.sendFn)
        } catch (HS) {
          throw this.signalBuffer = [...SS, ...this.signalBuffer], this.trimBufferToLimit(), HS
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function pX(SS, HS, gS, tS) {
      var bS;
      HS.debug("Initializing transports");
      const XS = [];
      let xS = [];
      const NS = SS => {
        let HS = SS;
        for (const tS of xS) {
          const SS = HS.map(tS).filter(Boolean);
          if (0 === SS.length) return [];
          HS = sX(SS, gS)
        }
        return HS
      };
      let qS;
      (null === (bS = gS.batching) || void 0 === bS ? void 0 : bS.enabled) && (qS = new UX((SS => {
        const gS = NS(SS);
        if (0 !== gS.length)
          for (const tS of XS) HS.debug(`Transporting item using ${tS.name}\n`, gS), tS.isBatched() && tS.send(gS)
      }), {
        sendTimeout: gS.batching.sendTimeout,
        itemLimit: gS.batching.itemLimit,
        paused: gS.paused
      }));
      return {
        add: function() {
          HS.debug("Adding transports");
          for (var bS = arguments.length, xS = new Array(bS), NS = 0; NS < bS; NS++) xS[NS] = arguments[NS];
          xS.forEach((bS => {
            HS.debug(`Adding "${bS.name}" transport`), XS.some((SS => SS === bS)) ? HS.warn(`Transport ${bS.name} is already added`) : (bS.unpatchedConsole = SS, bS.internalLogger = HS, bS.config = gS, bS.metas = tS, XS.push(bS))
          }))
        },
        addBeforeSendHooks: function() {
          HS.debug("Adding beforeSendHooks\n", xS);
          for (var SS = arguments.length, gS = new Array(SS), tS = 0; tS < SS; tS++) gS[tS] = arguments[tS];
          gS.forEach((SS => {
            SS && xS.push(SS)
          }))
        },
        getBeforeSendHooks: () => [...xS],
        execute: SS => {
          var bS;
          if (!gS.paused && UH(tS).shouldCapture()) {
            if (fS = SS.meta, !yX.has(fS)) {
              var xS, uS, IS;
              const HS = null === (xS = tS.value.session) || void 0 === xS ? void 0 : xS.id,
                bS = iX(tS);
              if (gS.paused) return;
              const XS = eH({}, SS.meta);
              (null === (uS = XS.session) || void 0 === uS ? void 0 : uS.id) === HS && (null === (IS = bS.session) || void 0 === IS ? void 0 : IS.id) !== HS && (void 0 === bS.session ? delete XS.session : XS.session = bS.session), SS = eH(eH({}, SS), {}, {
                meta: VX(XS)
              })
            }
            var fS;
            (null === (bS = gS.batching) || void 0 === bS ? void 0 : bS.enabled) && (null === qS || void 0 === qS || qS.addItem(SS)), (SS => {
              var tS;
              if ((null === (tS = gS.batching) || void 0 === tS ? void 0 : tS.enabled) && XS.every((SS => SS.isBatched()))) return;
              const [bS] = NS([SS]);
              if (void 0 !== bS)
                for (const NS of XS) {
                  var xS;
                  HS.debug(`Transporting item using ${NS.name}\n`, bS), NS.isBatched() ? (null === (xS = gS.batching) || void 0 === xS ? void 0 : xS.enabled) || NS.send([bS]) : NS.send(bS)
                }
            })(SS)
          }
        },
        isPaused: () => gS.paused,
        pause: () => {
          HS.debug("Pausing transports"), null === qS || void 0 === qS || qS.pause(), gS.paused = !0
        },
        remove: function() {
          HS.debug("Removing transports");
          for (var SS = arguments.length, gS = new Array(SS), tS = 0; tS < SS; tS++) gS[tS] = arguments[tS];
          gS.forEach((SS => {
            HS.debug(`Removing "${SS.name}" transport`);
            const gS = XS.indexOf(SS); - 1 !== gS ? XS.splice(gS, 1) : HS.warn(`Transport "${SS.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var SS = arguments.length, gS = new Array(SS), tS = 0; tS < SS; tS++) gS[tS] = arguments[tS];
          HS.debug("Removing beforeSendHooks"), xS = xS.filter((SS => !gS.includes(SS)))
        },
        get transports() {
          return [...XS]
        },
        unpause: () => {
          HS.debug("Unpausing transports"), null === qS || void 0 === qS || qS.start(), gS.paused = !1
        }
      }
    }

    function sX(SS, HS) {
      if (HS.preserveOriginalError)
        for (const gS of SS) "exception" === gS.type && delete gS.payload.originalError;
      return SS
    }
    let BX = rH;

    function MX(SS) {
      var HS;
      return BX = null !== (HS = SS.unpatchedConsole) && void 0 !== HS ? HS : BX, BX
    }
    let FX, RX = FH;

    function TX(SS, HS) {
      return RX = OX(SS, HS.internalLoggerLevel), RX
    }

    function oX(SS) {
      let {
        internalLogger: HS,
        config: gS,
        metas: tS,
        transports: bS,
        tracesApi: XS,
        userActionsApi: xS
      } = SS;
      var NS;
      HS.debug("Initializing exceptions API");
      let qS = null;
      FX = null !== (NS = gS.parseStacktrace) && void 0 !== NS ? NS : FX;
      const uS = SS => {
          HS.debug("Changing stacktrace parser"), FX = null !== SS && void 0 !== SS ? SS : FX
        },
        {
          ignoreErrors: IS = [],
          preserveOriginalError: fS
        } = gS;
      return uS(gS.parseStacktrace), {
        changeStacktraceParser: uS,
        getStacktraceParser: () => FX,
        pushError: function(SS) {
          let {
            skipDedupe: NS,
            stackFrames: uS,
            type: kS,
            context: aS,
            spanContext: KS,
            timestampOverwriteMs: jS,
            originalError: GS,
            fingerprint: CS,
            fatal: nS
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(SS, HS) {
              const {
                message: gS,
                name: tS,
                stack: bS
              } = HS;
              return XS = SS, xS = gS + " " + tS + " " + bS, XS.some((SS => wS(SS) ? xS.includes(SS) : !!xS.match(SS)));
              var XS, xS
            }(IS, null !== GS && void 0 !== GS ? GS : SS)) try {
            var PS, QS;
            if (!UH(tS).shouldCapture()) return;
            const IS = VH(eH(eH({}, function(SS) {
                let HS = SS.cause;
                iS(HS) ? HS = SS.cause.toString() : null !== HS && (dS(SS.cause) || vS(SS.cause)) ? HS = yH(SS.cause) : null != HS && (HS = SS.cause.toString());
                return null == HS ? {} : {
                  cause: HS
                }
              }(null !== GS && void 0 !== GS ? GS : SS)), null !== aS && void 0 !== aS ? aS : {})),
              wS = eH(eH(eH(eH({
                type: kS || SS.name || "Error",
                value: SS.message,
                timestamp: jS ? jH(jS) : KH(),
                trace: KS ? {
                  trace_id: KS.traceId,
                  span_id: KS.spanId
                } : XS.getTraceContext()
              }, RS(IS) ? {} : {
                context: IS
              }), fS ? {
                originalError: GS
              } : {}), CS ? {
                fingerprint: CS
              } : {}), void 0 !== nS ? {
                fatal: nS
              } : {});
            uS = null !== (PS = uS) && void 0 !== PS ? PS : SS.stack ? null === FX || void 0 === FX ? void 0 : FX(SS).frames : void 0, (null === uS || void 0 === uS ? void 0 : uS.length) && (wS.stacktrace = {
              frames: uS
            });
            const hS = {
              type: wS.type,
              value: wS.value,
              stacktrace: wS.stacktrace,
              context: wS.context,
              fingerprint: wS.fingerprint,
              fatal: null !== (QS = wS.fatal) && void 0 !== QS && QS
            };
            if (!NS && gS.dedupe && !DS(qS) && nH(hS, qS)) return void HS.debug("Skipping error push because it is the same as the last one\n", wS);
            const ZS = qS,
              JS = iX(tS);
            if (qS !== ZS && !NS && gS.dedupe && nH(hS, qS)) return;
            qS = hS;
            const OS = {
              meta: JS,
              payload: wS,
              type: "exception"
            };
            HS.debug("Pushing exception\n", OS), hb(xS.getActiveUserAction(), OS) || bS.execute(OS)
          } catch (hS) {
            HS.error("Error pushing event", hS)
          }
        }
      }
    }

    function lX(SS, HS, gS, tS, bS) {
      HS.debug("Initializing API");
      let XS = null;
      const xS = function(SS) {
          let {
            transports: HS,
            internalLogger: gS,
            config: tS,
            pushEvent: bS
          } = SS;
          var XS;
          const xS = null === (XS = tS.userActionsInstrumentation) || void 0 === XS ? void 0 : XS.excludeItem;
          let NS;
          const qS = () => NS;
          return {
            startUserAction: (SS, tS, XS) => {
              if (void 0 === qS()) {
                const gS = new Db({
                  name: SS,
                  transports: HS,
                  attributes: tS,
                  trigger: (null === XS || void 0 === XS ? void 0 : XS.triggerName) || "faroApiCall",
                  importance: (null === XS || void 0 === XS ? void 0 : XS.importance) || Pb.Normal,
                  trackUserActionsExcludeItem: xS,
                  pushEvent: bS
                });
                return gS.filter((SS => [3, 2].includes(SS))).first().subscribe((() => {
                  NS = void 0
                })), wb.notify({
                  type: nb,
                  userAction: gS,
                  initialActivityTimeout: null === XS || void 0 === XS ? void 0 : XS.initialActivityTimeout
                }), NS = gS, NS
              }
              gS.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: qS
          }
        }({
          transports: bS,
          config: gS,
          internalLogger: HS,
          pushEvent: (SS, gS, tS, bS) => {
            XS ? XS(SS, gS, tS, bS) : HS.warn("pushEventImpl is not initialized. Event dropped:", {
              name: SS,
              attributes: gS,
              domain: tS,
              options: bS
            })
          }
        }),
        NS = function(SS, HS, gS, tS, bS) {
          let XS;
          return HS.debug("Initializing traces API"), {
            getOTEL: () => XS,
            getTraceContext: () => {
              const SS = null === XS || void 0 === XS ? void 0 : XS.trace.getSpanContext(XS.context.active());
              return SS ? {
                trace_id: SS.traceId,
                span_id: SS.spanId
              } : void 0
            },
            initOTEL: (SS, gS) => {
              HS.debug("Initializing OpenTelemetry"), XS = {
                trace: SS,
                context: gS
              }
            },
            isOTELInitialized: () => !!XS,
            pushTraces: SS => {
              try {
                if (!UH(tS).shouldCapture()) return;
                const gS = {
                  type: "trace",
                  payload: SS,
                  meta: iX(tS)
                };
                HS.debug("Pushing trace\n", gS), bS.execute(gS)
              } catch (gS) {
                HS.error("Error pushing trace\n", gS)
              }
            }
          }
        }(0, HS, 0, tS, bS),
        qS = {
          unpatchedConsole: SS,
          internalLogger: HS,
          userActionsApi: xS,
          config: gS,
          metas: tS,
          transports: bS,
          tracesApi: NS
        },
        uS = function(SS) {
          let {
            internalLogger: HS,
            config: gS,
            metas: tS,
            transports: bS,
            tracesApi: XS,
            userActionsApi: xS
          } = SS, NS = null;
          return {
            pushEvent: function(SS, qS, uS) {
              let {
                skipDedupe: IS,
                spanContext: fS,
                timestampOverwriteMs: kS,
                customPayloadTransformer: aS = SS => SS
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!UH(tS).shouldCapture()) return;
                const KS = VH(qS),
                  jS = aS({
                    name: SS,
                    domain: null !== uS && void 0 !== uS ? uS : gS.eventDomain,
                    attributes: RS(KS) ? void 0 : KS,
                    timestamp: kS ? jH(kS) : KH(),
                    trace: fS ? {
                      trace_id: fS.traceId,
                      span_id: fS.spanId
                    } : XS.getTraceContext()
                  }),
                  GS = {
                    name: jS.name,
                    attributes: jS.attributes,
                    domain: jS.domain
                  };
                if (!IS && gS.dedupe && !DS(NS) && nH(GS, NS)) return void HS.debug("Skipping event push because it is the same as the last one\n", jS);
                const CS = NS,
                  nS = iX(tS);
                if (NS !== CS && !IS && gS.dedupe && nH(GS, NS)) return;
                NS = GS;
                const PS = {
                  meta: nS,
                  payload: jS,
                  type: "event"
                };
                HS.debug("Pushing event\n", PS), hb(xS.getActiveUserAction(), PS) || bS.execute(PS)
              } catch (KS) {
                HS.error("Error pushing event", KS)
              }
            }
          }
        }(qS);
      return XS = uS.pushEvent, eH(eH(eH(eH(eH(eH(eH({}, NS), oX(qS)), function(SS) {
        let HS, gS, tS, bS, {
          internalLogger: XS,
          metas: xS
        } = SS;
        XS.debug("Initializing meta API");
        const NS = SS => {
            gS && xS.remove(gS), gS = {
              user: SS
            }, xS.add(gS)
          },
          qS = (SS, gS) => {
            var tS;
            const bS = null === gS || void 0 === gS ? void 0 : gS.overrides,
              XS = bS ? {
                overrides: eH(eH({}, null === HS || void 0 === HS || null === (tS = HS.session) || void 0 === tS ? void 0 : tS.overrides), bS)
              } : {};
            HS && xS.remove(HS), HS = {
              session: eH(eH({}, RS(SS) ? void 0 : SS), XS)
            }, xS.add(HS)
          },
          uS = (SS, HS) => {
            UH(xS).notifySessionUpdate({
              type: "replace",
              session: SS,
              overrides: null === HS || void 0 === HS ? void 0 : HS.overrides
            }), qS(SS, HS)
          },
          IS = () => xS.value.session,
          fS = () => xS.value.page;
        return {
          setUser: NS,
          resetUser: NS,
          setSession: uS,
          resetSession: uS,
          getSession: IS,
          setView: (SS, HS) => {
            var gS;
            if ((null === HS || void 0 === HS ? void 0 : HS.overrides) && (UH(xS).notifySessionUpdate({
                type: "overrides",
                overrides: HS.overrides
              }), qS(IS(), {
                overrides: HS.overrides
              })), (null === tS || void 0 === tS || null === (gS = tS.view) || void 0 === gS ? void 0 : gS.name) === (null === SS || void 0 === SS ? void 0 : SS.name)) return;
            const bS = tS;
            tS = {
              view: SS
            }, xS.add(tS), bS && xS.remove(bS)
          },
          getView: () => xS.value.view,
          setPage: SS => {
            var HS;
            const gS = wS(SS) ? eH(eH({}, null !== (HS = null === bS || void 0 === bS ? void 0 : bS.page) && void 0 !== HS ? HS : fS()), {}, {
              id: SS
            }) : SS;
            bS && xS.remove(bS), bS = {
              page: gS
            }, xS.add(bS)
          },
          getPage: fS
        }
      }(qS)), function(SS) {
        let {
          internalLogger: HS,
          config: gS,
          metas: tS,
          transports: bS,
          tracesApi: XS,
          userActionsApi: xS
        } = SS;
        var NS;
        HS.debug("Initializing logs API");
        let qS = null;
        const uS = null !== (NS = gS.logArgsSerializer) && void 0 !== NS ? NS : Eg;
        return {
          pushLog: function(SS) {
            let {
              context: NS,
              level: IS,
              skipDedupe: fS,
              spanContext: kS,
              timestampOverwriteMs: aS
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!UH(tS).shouldCapture()) return;
              const KS = VH(NS),
                jS = {
                  message: uS(SS),
                  level: null !== IS && void 0 !== IS ? IS : "log",
                  context: RS(KS) ? void 0 : KS,
                  timestamp: aS ? jH(aS) : KH(),
                  trace: kS ? {
                    trace_id: kS.traceId,
                    span_id: kS.spanId
                  } : XS.getTraceContext()
                },
                GS = {
                  message: jS.message,
                  level: jS.level,
                  context: jS.context
                };
              if (!fS && gS.dedupe && !DS(qS) && nH(GS, qS)) return void HS.debug("Skipping log push because it is the same as the last one\n", jS);
              const CS = qS,
                nS = iX(tS);
              if (qS !== CS && !fS && gS.dedupe && nH(GS, qS)) return;
              qS = GS;
              const PS = {
                type: "log",
                payload: jS,
                meta: nS
              };
              HS.debug("Pushing log\n", PS), hb(xS.getActiveUserAction(), PS) || bS.execute(PS)
            } catch (KS) {
              HS.error("Error pushing log\n", KS)
            }
          }
        }
      }(qS)), function(SS) {
        let {
          internalLogger: HS,
          config: gS,
          metas: tS,
          transports: bS,
          tracesApi: XS,
          userActionsApi: xS
        } = SS;
        HS.debug("Initializing measurements API");
        let NS = null;
        return {
          pushMeasurement: function(SS) {
            let {
              skipDedupe: qS,
              context: uS,
              spanContext: IS,
              timestampOverwriteMs: fS
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!UH(tS).shouldCapture()) return;
              const kS = VH(uS),
                aS = eH(eH({}, SS), {}, {
                  trace: IS ? {
                    trace_id: IS.traceId,
                    span_id: IS.spanId
                  } : XS.getTraceContext(),
                  timestamp: fS ? jH(fS) : KH(),
                  context: RS(kS) ? void 0 : kS
                }),
                KS = {
                  type: aS.type,
                  values: aS.values,
                  context: aS.context
                };
              if (!qS && gS.dedupe && !DS(NS) && nH(KS, NS)) return void HS.debug("Skipping measurement push because it is the same as the last one\n", aS);
              const jS = NS,
                GS = iX(tS);
              if (NS !== jS && !qS && gS.dedupe && nH(KS, NS)) return;
              NS = KS;
              const CS = {
                type: "measurement",
                payload: aS,
                meta: GS
              };
              HS.debug("Pushing measurement\n", CS), hb(xS.getActiveUserAction(), CS) || bS.execute(CS)
            } catch (kS) {
              HS.error("Error pushing measurement\n", kS)
            }
          }
        }
      }(qS)), uS), xS)
    }

    function mX(SS) {
      const HS = MX(SS),
        gS = TX(HS, SS);
      if (KS() && !SS.isolate) return void gS.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      gS.debug("Initializing");
      const tS = function(SS, HS) {
          let gS, tS = [],
            bS = [],
            XS = [],
            xS = 0,
            NS = 0;
          const qS = () => tS.reduce(((SS, HS) => Object.assign(SS, cS(HS) ? HS() : HS)), {}),
            uS = () => {
              if (bS.length) {
                const SS = qS();
                bS.forEach((HS => HS(SS)))
              }
            };
          return {
            add: function() {
              for (var SS = arguments.length, gS = new Array(SS), bS = 0; bS < SS; bS++) gS[bS] = arguments[bS];
              HS.debug("Adding metas\n", gS), tS.push(...gS), uS()
            },
            remove: function() {
              for (var SS = arguments.length, gS = new Array(SS), bS = 0; bS < SS; bS++) gS[bS] = arguments[bS];
              HS.debug("Removing metas\n", gS), tS = tS.filter((SS => !gS.includes(SS))), uS()
            },
            addListener: SS => {
              HS.debug("Adding metas listener\n", SS), bS.push(SS)
            },
            removeListener: SS => {
              HS.debug("Removing metas listener\n", SS), bS = bS.filter((HS => HS !== SS))
            },
            capture: SS => {
              var HS;
              const tS = void 0 !== gS,
                bS = null !== (HS = gS) && void 0 !== HS ? HS : XS;
              tS || (gS = bS, xS = 0, NS = bS.length);
              try {
                for (; xS < NS;) {
                  const SS = bS[xS++];
                  null === SS || void 0 === SS || SS()
                }
                const HS = VX(qS());
                return null === SS || void 0 === SS || SS(), HS
              } finally {
                tS || (gS = void 0)
              }
            },
            addCaptureListener: SS => {
              XS.push(SS)
            },
            removeCaptureListener: SS => {
              XS = XS.filter((HS => HS !== SS))
            },
            get value() {
              return qS()
            }
          }
        }(0, gS),
        bS = pX(HS, gS, SS, tS),
        XS = lX(HS, gS, SS, tS, bS),
        xS = function(SS, HS, gS, tS, bS, XS) {
          HS.debug("Initializing instrumentations");
          const xS = [];
          return {
            add: function() {
              HS.debug("Adding instrumentations");
              for (var NS = arguments.length, qS = new Array(NS), uS = 0; uS < NS; uS++) qS[uS] = arguments[uS];
              qS.forEach((NS => {
                HS.debug(`Adding "${NS.name}" instrumentation`), xS.some((SS => SS.name === NS.name)) ? HS.warn(`Instrumentation ${NS.name} is already added`) : (NS.unpatchedConsole = SS, NS.internalLogger = HS, NS.config = gS, NS.metas = tS, NS.transports = bS, NS.api = XS, xS.push(NS), NS.initialize())
              }))
            },
            get instrumentations() {
              return [...xS]
            },
            remove: function() {
              HS.debug("Removing instrumentations");
              for (var SS = arguments.length, gS = new Array(SS), tS = 0; tS < SS; tS++) gS[tS] = arguments[tS];
              gS.forEach((SS => {
                var gS, tS;
                HS.debug(`Removing "${SS.name}" instrumentation`);
                const bS = xS.reduce(((HS, gS, tS) => null === HS && gS.name === SS.name ? tS : null), null);
                null !== bS ? (null === (gS = (tS = xS[bS]).destroy) || void 0 === gS || gS.call(tS), xS.splice(bS, 1)) : HS.warn(`Instrumentation "${SS.name}" is not added`)
              }))
            }
          }
        }(HS, gS, SS, tS, bS, XS),
        NS = GS(HS, gS, SS, tS, bS, XS, xS);
      return zX(NS),
        function(SS) {
          SS.transports.add(...SS.config.transports), SS.transports.addBeforeSendHooks(SS.config.beforeSend)
        }(NS),
        function(SS) {
          SS.instrumentations.add(...SS.config.instrumentations)
        }(NS), NS
    }

    function eX(SS) {
      const HS = EX(SS);
      if (HS) return mX(HS)
    }
  },
  6892: function(SS, HS, gS) {
    var tS;
    ! function(bS, XS) {
      var xS = "function",
        NS = "undefined",
        qS = "object",
        uS = "string",
        IS = "major",
        fS = "model",
        kS = "name",
        aS = "type",
        KS = "vendor",
        jS = "version",
        GS = "architecture",
        CS = "console",
        nS = "mobile",
        PS = "tablet",
        QS = "smarttv",
        DS = "wearable",
        wS = "embedded",
        hS = "Amazon",
        ZS = "Apple",
        JS = "ASUS",
        OS = "BlackBerry",
        dS = "Browser",
        cS = "Chrome",
        vS = "Firefox",
        ES = "Google",
        LS = "Honor",
        YS = "Huawei",
        AS = "LG",
        yS = "Microsoft",
        VS = "Motorola",
        iS = "Nvidia",
        WS = "OnePlus",
        zS = "Opera",
        US = "OPPO",
        pS = "Samsung",
        sS = "Sharp",
        BS = "Sony",
        MS = "Xiaomi",
        FS = "Zebra",
        RS = "Facebook",
        TS = "Chromium OS",
        oS = "Mac OS",
        lS = " Browser",
        mS = function(SS) {
          for (var HS = {}, gS = 0; gS < SS.length; gS++) HS[SS[gS].toUpperCase()] = SS[gS];
          return HS
        },
        eS = function(SS, HS) {
          return typeof SS === uS && -1 !== rS(HS).indexOf(rS(SS))
        },
        rS = function(SS) {
          return SS.toLowerCase()
        },
        SH = function(SS, HS) {
          if (typeof SS === uS) return SS = SS.replace(/^\s\s*/, ""), typeof HS === NS ? SS : SS.substring(0, 500)
        },
        HH = function(SS, HS) {
          for (var gS, tS, bS, NS, uS, IS, fS = 0; fS < HS.length && !uS;) {
            var kS = HS[fS],
              aS = HS[fS + 1];
            for (gS = tS = 0; gS < kS.length && !uS && kS[gS];)
              if (uS = kS[gS++].exec(SS))
                for (bS = 0; bS < aS.length; bS++) IS = uS[++tS], typeof(NS = aS[bS]) === qS && NS.length > 0 ? 2 === NS.length ? typeof NS[1] == xS ? this[NS[0]] = NS[1].call(this, IS) : this[NS[0]] = NS[1] : 3 === NS.length ? typeof NS[1] !== xS || NS[1].exec && NS[1].test ? this[NS[0]] = IS ? IS.replace(NS[1], NS[2]) : XS : this[NS[0]] = IS ? NS[1].call(this, IS, NS[2]) : XS : 4 === NS.length && (this[NS[0]] = IS ? NS[3].call(this, IS.replace(NS[1], NS[2])) : XS) : this[NS] = IS || XS;
            fS += 2
          }
        },
        gH = function(SS, HS) {
          for (var gS in HS)
            if (typeof HS[gS] === qS && HS[gS].length > 0) {
              for (var tS = 0; tS < HS[gS].length; tS++)
                if (eS(HS[gS][tS], SS)) return "?" === gS ? XS : gS
            } else if (eS(HS[gS], SS)) return "?" === gS ? XS : gS;
          return HS.hasOwnProperty("*") ? HS["*"] : SS
        },
        tH = {
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
        bH = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [jS, [kS, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [jS, [kS, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [kS, jS],
            [/opios[\/ ]+([\w\.]+)/i],
            [jS, [kS, zS + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [jS, [kS, zS + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [jS, [kS, zS]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [jS, [kS, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [jS, [kS, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [kS, jS],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [jS, [kS, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [jS, [kS, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [jS, [kS, "UC" + dS]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [jS, [kS, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [jS, [kS, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [jS, [kS, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [jS, [kS, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [jS, [kS, "Smart Lenovo " + dS]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [kS, /(.+)/, "$1 Secure " + dS], jS
            ],
            [/\bfocus\/([\w\.]+)/i],
            [jS, [kS, vS + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [jS, [kS, zS + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [jS, [kS, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [jS, [kS, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [jS, [kS, zS + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [jS, [kS, "MIUI" + lS]],
            [/fxios\/([\w\.-]+)/i],
            [jS, [kS, vS]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [jS, [kS, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [kS, /(.+)/, "$1Browser"], jS
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [kS, /(.+)/, "$1" + lS], jS
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [jS, [kS, pS + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [jS, [kS, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [kS, "Sogou Mobile"], jS
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [kS, jS],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [kS],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [jS, kS],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [kS, RS], jS
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [kS, jS],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [jS, [kS, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [jS, [kS, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [jS, [kS, cS + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [kS, cS + " WebView"], jS
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [jS, [kS, "Android " + dS]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [kS, jS],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [jS, [kS, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [jS, kS],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [kS, [jS, gH, {
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
            [kS, jS],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [kS, "Netscape"], jS
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [kS, jS],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [jS, [kS, vS + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [kS, [jS, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [kS, [jS, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [GS, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [GS, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [GS, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [GS, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [GS, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [GS, /ower/, "", rS]
            ],
            [/ sun4\w[;\)]/i],
            [
              [GS, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [GS, rS]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [fS, [KS, pS],
              [aS, PS]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [fS, [KS, pS],
              [aS, nS]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [fS, [KS, ZS],
              [aS, nS]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [fS, [KS, ZS],
              [aS, PS]
            ],
            [/(macintosh);/i],
            [fS, [KS, ZS]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [fS, [KS, sS],
              [aS, nS]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [fS, [KS, LS],
              [aS, PS]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [fS, [KS, LS],
              [aS, nS]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [fS, [KS, YS],
              [aS, PS]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [fS, [KS, YS],
              [aS, nS]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [fS, /_/g, " "],
              [KS, MS],
              [aS, PS]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [fS, /_/g, " "],
              [KS, MS],
              [aS, nS]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [fS, [KS, US],
              [aS, nS]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [fS, [KS, gH, {
                OnePlus: ["304", "403", "203"],
                "*": US
              }],
              [aS, PS]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [fS, [KS, "Vivo"],
              [aS, nS]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [fS, [KS, "Realme"],
              [aS, nS]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [fS, [KS, VS],
              [aS, nS]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [fS, [KS, VS],
              [aS, PS]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [fS, [KS, AS],
              [aS, PS]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [fS, [KS, AS],
              [aS, nS]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [fS, [KS, "Lenovo"],
              [aS, PS]
            ],
            [/(nokia) (t[12][01])/i],
            [KS, fS, [aS, PS]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [fS, /_/g, " "],
              [aS, nS],
              [KS, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [fS, [KS, ES],
              [aS, PS]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [fS, [KS, ES],
              [aS, nS]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [fS, [KS, BS],
              [aS, nS]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [fS, "Xperia Tablet"],
              [KS, BS],
              [aS, PS]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [fS, [KS, WS],
              [aS, nS]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [fS, [KS, hS],
              [aS, PS]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [fS, /(.+)/g, "Fire Phone $1"],
              [KS, hS],
              [aS, nS]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [fS, KS, [aS, PS]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [fS, [KS, OS],
              [aS, nS]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [fS, [KS, JS],
              [aS, PS]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [fS, [KS, JS],
              [aS, nS]
            ],
            [/(nexus 9)/i],
            [fS, [KS, "HTC"],
              [aS, PS]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [KS, [fS, /_/g, " "],
              [aS, nS]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [fS, [KS, "TCL"],
              [aS, PS]
            ],
            [/(itel) ((\w+))/i],
            [
              [KS, rS], fS, [aS, gH, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [fS, [KS, "Acer"],
              [aS, PS]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [fS, [KS, "Meizu"],
              [aS, nS]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [fS, [KS, "Ulefone"],
              [aS, nS]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [fS, [KS, "Energizer"],
              [aS, nS]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [fS, [KS, "Cat"],
              [aS, nS]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [fS, [KS, "Smartfren"],
              [aS, nS]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [fS, [KS, "Nothing"],
              [aS, nS]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [fS, [KS, "Archos"],
              [aS, PS]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [fS, [KS, "Archos"],
              [aS, nS]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [KS, fS, [aS, PS]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [KS, fS, [aS, nS]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [KS, fS, [aS, PS]],
            [/(surface duo)/i],
            [fS, [KS, yS],
              [aS, PS]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [fS, [KS, "Fairphone"],
              [aS, nS]
            ],
            [/(u304aa)/i],
            [fS, [KS, "AT&T"],
              [aS, nS]
            ],
            [/\bsie-(\w*)/i],
            [fS, [KS, "Siemens"],
              [aS, nS]
            ],
            [/\b(rct\w+) b/i],
            [fS, [KS, "RCA"],
              [aS, PS]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [fS, [KS, "Dell"],
              [aS, PS]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [fS, [KS, "Verizon"],
              [aS, PS]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [fS, [KS, "Barnes & Noble"],
              [aS, PS]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [fS, [KS, "NuVision"],
              [aS, PS]
            ],
            [/\b(k88) b/i],
            [fS, [KS, "ZTE"],
              [aS, PS]
            ],
            [/\b(nx\d{3}j) b/i],
            [fS, [KS, "ZTE"],
              [aS, nS]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [fS, [KS, "Swiss"],
              [aS, nS]
            ],
            [/\b(zur\d{3}) b/i],
            [fS, [KS, "Swiss"],
              [aS, PS]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [fS, [KS, "Zeki"],
              [aS, PS]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [KS, "Dragon Touch"], fS, [aS, PS]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [fS, [KS, "Insignia"],
              [aS, PS]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [fS, [KS, "NextBook"],
              [aS, PS]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [KS, "Voice"], fS, [aS, nS]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [KS, "LvTel"], fS, [aS, nS]
            ],
            [/\b(ph-1) /i],
            [fS, [KS, "Essential"],
              [aS, nS]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [fS, [KS, "Envizen"],
              [aS, PS]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [fS, [KS, "MachSpeed"],
              [aS, PS]
            ],
            [/\btu_(1491) b/i],
            [fS, [KS, "Rotor"],
              [aS, PS]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [fS, [KS, iS],
              [aS, PS]
            ],
            [/(sprint) (\w+)/i],
            [KS, fS, [aS, nS]],
            [/(kin\.[onetw]{3})/i],
            [
              [fS, /\./g, " "],
              [KS, yS],
              [aS, nS]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [fS, [KS, FS],
              [aS, PS]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [fS, [KS, FS],
              [aS, nS]
            ],
            [/smart-tv.+(samsung)/i],
            [KS, [aS, QS]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [fS, /^/, "SmartTV"],
              [KS, pS],
              [aS, QS]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [KS, AS],
              [aS, QS]
            ],
            [/(apple) ?tv/i],
            [KS, [fS, ZS + " TV"],
              [aS, QS]
            ],
            [/crkey/i],
            [
              [fS, cS + "cast"],
              [KS, ES],
              [aS, QS]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [fS, [KS, hS],
              [aS, QS]
            ],
            [/(shield \w+ tv)/i],
            [fS, [KS, iS],
              [aS, QS]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [fS, [KS, sS],
              [aS, QS]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [fS, [KS, BS],
              [aS, QS]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [fS, [KS, MS],
              [aS, QS]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [KS, fS, [aS, QS]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [KS, SH],
              [fS, SH],
              [aS, QS]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [fS, [aS, QS]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [aS, QS]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [KS, fS, [aS, CS]],
            [/droid.+; (shield)( bui|\))/i],
            [fS, [KS, iS],
              [aS, CS]
            ],
            [/(playstation \w+)/i],
            [fS, [KS, BS],
              [aS, CS]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [fS, [KS, yS],
              [aS, CS]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [fS, [KS, pS],
              [aS, DS]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [KS, fS, [aS, DS]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [fS, [KS, US],
              [aS, DS]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [fS, [KS, ZS],
              [aS, DS]
            ],
            [/(opwwe\d{3})/i],
            [fS, [KS, WS],
              [aS, DS]
            ],
            [/(moto 360)/i],
            [fS, [KS, VS],
              [aS, DS]
            ],
            [/(smartwatch 3)/i],
            [fS, [KS, BS],
              [aS, DS]
            ],
            [/(g watch r)/i],
            [fS, [KS, AS],
              [aS, DS]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [fS, [KS, FS],
              [aS, DS]
            ],
            [/droid.+; (glass) \d/i],
            [fS, [KS, ES],
              [aS, DS]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [KS, fS, [aS, DS]],
            [/; (quest( \d| pro)?)/i],
            [fS, [KS, RS],
              [aS, DS]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [KS, [aS, wS]],
            [/(aeobc)\b/i],
            [fS, [KS, hS],
              [aS, wS]
            ],
            [/(homepod).+mac os/i],
            [fS, [KS, ZS],
              [aS, wS]
            ],
            [/windows iot/i],
            [
              [aS, wS]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [fS, [aS, nS]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [fS, [aS, PS]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [aS, PS]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [aS, nS]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [fS, [KS, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [jS, [kS, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [kS, jS],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [jS, [kS, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [kS, jS],
            [/ladybird\//i],
            [
              [kS, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [jS, kS]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [kS, jS],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [kS, [jS, gH, tH]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [jS, gH, tH],
              [kS, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [jS, /_/g, "."],
              [kS, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [kS, oS],
              [jS, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [jS, kS],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [kS, /(.+)/, "$1 Touch"], jS
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [kS, jS],
            [/\(bb(10);/i],
            [jS, [kS, OS]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [jS, [kS, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [jS, [kS, vS + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [jS, [kS, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [jS, [kS, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [jS, [kS, cS + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [kS, TS], jS
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [kS, jS],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [kS, "Solaris"], jS
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [kS, jS]
          ]
        },
        XH = function(SS, HS) {
          if (typeof SS === qS && (HS = SS, SS = XS), !(this instanceof XH)) return new XH(SS, HS).getResult();
          var gS = typeof bS !== NS && bS.navigator ? bS.navigator : XS,
            tS = SS || (gS && gS.userAgent ? gS.userAgent : ""),
            CS = gS && gS.userAgentData ? gS.userAgentData : XS,
            QS = HS ? function(SS, HS) {
              var gS = {};
              for (var tS in SS) HS[tS] && HS[tS].length % 2 === 0 ? gS[tS] = HS[tS].concat(SS[tS]) : gS[tS] = SS[tS];
              return gS
            }(bH, HS) : bH,
            DS = gS && gS.userAgent == tS;
          return this.getBrowser = function() {
            var SS, HS = {};
            return HS[kS] = XS, HS[jS] = XS, HH.call(HS, tS, QS.browser), HS[IS] = typeof(SS = HS[jS]) === uS ? SS.replace(/[^\d\.]/g, "").split(".")[0] : XS, DS && gS && gS.brave && typeof gS.brave.isBrave == xS && (HS[kS] = "Brave"), HS
          }, this.getCPU = function() {
            var SS = {};
            return SS[GS] = XS, HH.call(SS, tS, QS.cpu), SS
          }, this.getDevice = function() {
            var SS = {};
            return SS[KS] = XS, SS[fS] = XS, SS[aS] = XS, HH.call(SS, tS, QS.device), DS && !SS[aS] && CS && CS.mobile && (SS[aS] = nS), DS && "Macintosh" == SS[fS] && gS && typeof gS.standalone !== NS && gS.maxTouchPoints && gS.maxTouchPoints > 2 && (SS[fS] = "iPad", SS[aS] = PS), SS
          }, this.AK = function() {
            var SS = {};
            return SS[kS] = XS, SS[jS] = XS, HH.call(SS, tS, QS.engine), SS
          }, this.getOS = function() {
            var SS = {};
            return SS[kS] = XS, SS[jS] = XS, HH.call(SS, tS, QS.os), DS && !SS[kS] && CS && CS.platform && "Unknown" != CS.platform && (SS[kS] = CS.platform.replace(/chrome os/i, TS).replace(/macos/i, oS)), SS
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.AK(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return tS
          }, this.setUA = function(SS) {
            return tS = typeof SS === uS && SS.length > 500 ? SH(SS, 500) : SS, this
          }, this.setUA(tS), this
        };
      XH.VERSION = "1.0.41", XH.BROWSER = mS([kS, jS, IS]), XH.CPU = mS([GS]), XH.DEVICE = mS([fS, KS, aS, CS, nS, QS, PS, DS, wS]), XH.ENGINE = XH.OS = mS([kS, jS]), typeof HS !== NS ? (SS.exports && (HS = SS.exports = XH), HS.UAParser = XH) : gS.amdO ? (tS = function() {
        return XH
      }.call(HS, gS, HS, SS)) === XS || (SS.exports = tS) : typeof bS !== NS && (bS.UAParser = XH);
      var xH = typeof bS !== NS && (bS.jQuery || bS.Zepto);
      if (xH && !xH.ua) {
        var NH = new XH;
        xH.ua = NH.getResult(), xH.ua.get = function() {
          return NH.getUA()
        }, xH.ua.set = function(SS) {
          NH.setUA(SS);
          var HS = NH.getResult();
          for (var gS in HS) xH.ua[gS] = HS[gS]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);