export const id = 36;
export const ids = [36];
export const modules = {
  7156: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BaseExtension: () => Mi,
      BaseInstrumentation: () => ri,
      BaseTransport: () => cS,
      CSPInstrumentation: () => tS,
      ConsoleInstrumentation: () => Di,
      ConsoleTransport: () => Sj,
      EVENT_CLICK: () => Er,
      EVENT_NAVIGATION: () => Ur,
      EVENT_ROUTE_CHANGE: () => tr,
      EVENT_SESSION_EXTEND: () => br,
      EVENT_SESSION_RESUME: () => er,
      EVENT_SESSION_START: () => Cr,
      EVENT_VIEW_CHANGED: () => Gr,
      ErrorsInstrumentation: () => Zi,
      FetchTransport: () => Cj,
      InternalLoggerLevel: () => Fr,
      LogLevel: () => Ui,
      MAX_SESSION_PERSISTENCE_TIME: () => nM,
      NavigationInstrumentation: () => xS,
      Observable: () => Ei,
      PerformanceInstrumentation: () => KO,
      PersistentSessionsManager: () => or,
      SESSION_EXPIRATION_TIME: () => jM,
      SESSION_INACTIVITY_TIME: () => aM,
      STORAGE_KEY: () => SM,
      SessionInstrumentation: () => Oi,
      TransportItemType: () => Mj,
      UserActionInstrumentation: () => wS,
      UserActionState: () => dS,
      VERSION: () => ii,
      ViewInstrumentation: () => fi,
      VolatileSessionsManager: () => fr,
      WebVitalsInstrumentation: () => kO,
      allLogLevels: () => Ci,
      browserMeta: () => KS,
      buildStackFrame: () => Si,
      captureMetas: () => fj,
      createInternalLogger: () => gj,
      createPromiseBuffer: () => hj,
      createSession: () => TS,
      deepEqual: () => lr,
      defaultEventDomain: () => OM,
      defaultExceptionType: () => ti,
      defaultGlobalObjectKey: () => uj,
      defaultInternalLoggerLevel: () => Xr,
      defaultLogLevel: () => Gi,
      faro: () => JM,
      genShortID: () => yr,
      getCurrentTimestamp: () => hr,
      getDataFromSafariExtensions: () => mi,
      getIgnoreUrls: () => IM,
      getInternalFaroFromGlobalObject: () => mM,
      getStackFramesFromError: () => Ji,
      getTransportBody: () => Oj,
      getUrlFromResource: () => qM,
      getWebInstrumentations: () => vS,
      globalObject: () => zM,
      initializeFaro: () => cj,
      internalGlobalObjectKey: () => LM,
      isArray: () => RM,
      isBoolean: () => wM,
      isDomError: () => YM,
      isDomException: () => NM,
      isElement: () => xM,
      isElementDefined: () => AM,
      dL: () => XM,
      isError: () => oM,
      isErrorDefined: () => ZM,
      isErrorEvent: () => fM,
      isEvent: () => kM,
      isEventDefined: () => DM,
      isFunction: () => uM,
      isInstanceOf: () => EM,
      isInt: () => bM,
      isInternalFaroOnGlobalObject: () => hM,
      isMap: () => FM,
      isMapDefined: () => vM,
      isNull: () => GM,
      isNumber: () => eM,
      isObject: () => gM,
      isPrimitive: () => sM,
      isRegExp: () => pM,
      isString: () => CM,
      isSymbol: () => tM,
      isSyntheticEvent: () => BM,
      isThenable: () => WM,
      isToString: () => lM,
      isTypeof: () => yM,
      isUndefined: () => UM,
      makeCoreConfig: () => Wj,
      noop: () => vr,
      osMeta: () => qS,
      parseStacktrace: () => di,
      sdkMeta: () => VS,
      setInternalFaroOnGlobalObject: () => HM,
      transportItemTypeToBodyKey: () => rj,
      unknownString: () => oi,
      userActionDataAttribute: () => qO,
      userActionTimeoutDataAttribute: () => TO
    });
    const OM = "browser",
      SM = "com.grafana.faro.session",
      jM = 144e5,
      aM = 9e5,
      PM = 1e3,
      nM = aM,
      QM = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: nM
      };
    const zM = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof iM.g ? iM.g : "undefined" !== typeof self ? self : void 0;
    const LM = "_faroInternal";

    function mM() {
      return zM[LM]
    }

    function HM(MM) {
      MM.config.isolate ? MM.internalLogger.debug("Skipping registering internal Faro instance on global object") : (MM.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(zM, LM, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: MM
      }))
    }

    function hM() {
      return LM in zM
    }
    let JM = {
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

    function dM(MM, rM, iM, OM, SM, jM, aM) {
      return rM.debug("Initializing Faro"), JM = {
          api: jM,
          config: iM,
          instrumentations: aM,
          internalLogger: rM,
          metas: OM,
          pause: SM.pause,
          transports: SM,
          unpatchedConsole: MM,
          unpause: SM.unpause
        }, HM(JM),
        function(MM) {
          if (MM.config.preventGlobalExposure) MM.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (MM.internalLogger.debug(`Registering public faro reference in the global scope using "${MM.config.globalObjectKey}" key`), MM.config.globalObjectKey in zM) return void MM.internalLogger.warn(`Skipping global registration due to key "${MM.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(zM, MM.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: MM
            })
          }
        }(JM), JM
    }

    function yM(MM, rM) {
      return typeof MM === rM
    }

    function lM(MM, rM) {
      return Object.prototype.toString.call(MM) === `[object ${rM}]`
    }

    function EM(MM, rM) {
      try {
        return MM instanceof rM
      } catch (iM) {
        return !1
      }
    }
    const UM = MM => yM(MM, "undefined"),
      GM = MM => yM(MM, "null"),
      CM = MM => yM(MM, "string"),
      eM = MM => yM(MM, "number") && !isNaN(MM) || yM(MM, "bigint"),
      bM = MM => eM(MM) && Number.isInteger(MM),
      wM = MM => yM(MM, "boolean"),
      tM = MM => yM(MM, "symbol"),
      gM = MM => !GM(MM) && yM(MM, "object"),
      uM = MM => yM(MM, "function"),
      RM = MM => lM(MM, "Array"),
      pM = MM => lM(MM, "RegExp"),
      WM = MM => uM(null === MM || void 0 === MM ? void 0 : MM.then),
      sM = MM => !gM(MM) && !uM(MM),
      DM = "undefined" !== typeof Event,
      kM = MM => DM && EM(MM, Event),
      ZM = "undefined" !== typeof Error,
      oM = MM => ZM && EM(MM, Error),
      fM = MM => lM(MM, "ErrorEvent"),
      YM = MM => lM(MM, "DOMError"),
      NM = MM => lM(MM, "DOMException"),
      AM = "undefined" !== typeof Element,
      xM = MM => AM && EM(MM, Element),
      vM = "undefined" !== typeof Map,
      FM = MM => vM && EM(MM, Map),
      BM = MM => gM(MM) && "nativeEvent" in MM && "preventDefault" in MM && "stopPropagation" in MM;

    function XM(MM) {
      return null == MM || (RM(MM) || CM(MM) ? 0 === MM.length : !!gM(MM) && 0 === Object.keys(MM).length)
    }

    function IM() {
      return JM.transports.transports.flatMap((MM => MM.getIgnoreUrls()))
    }

    function KM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return IM().some((rM => MM && null != MM.match(rM)))
    }

    function qM(MM) {
      return CM(MM) ? MM : MM instanceof URL ? MM.href : !XM(MM) && uM(null === MM || void 0 === MM ? void 0 : MM.toString) ? MM.toString() : void 0
    }
    const TM = "sessionStorage",
      VM = "localStorage";

    function cM(MM) {
      try {
        let rM;
        rM = window[MM];
        const iM = "__faro_storage_test__";
        return rM.setItem(iM, iM), rM.removeItem(iM), !0
      } catch (iM) {
        var rM;
        return null === (rM = JM.internalLogger) || void 0 === rM || rM.info(`Web storage of type ${MM} is not available. Reason: ${iM}`), !1
      }
    }

    function Mr(MM, rM) {
      return jr(rM) ? window[rM].getItem(MM) : null
    }

    function rr(MM, rM, iM) {
      if (jr(iM)) try {
        window[iM].setItem(MM, rM)
      } catch (OM) {}
    }

    function ir(MM, rM) {
      jr(rM) && window[rM].removeItem(MM)
    }
    const Or = cM(VM),
      Sr = cM(TM);

    function jr(MM) {
      return MM === VM ? Or : MM === TM && Sr
    }

    function ar(MM) {
      return ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, ar(MM)
    }

    function Pr(MM) {
      var rM = function(MM, rM) {
        if ("object" != ar(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != ar(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == ar(rM) ? rM : rM + ""
    }

    function nr(MM, rM, iM) {
      return (rM = Pr(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function Qr(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function zr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? Qr(Object(iM), !0).forEach((function(rM) {
          nr(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : Qr(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function Lr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JM;
      var rM, iM, OM;
      const SM = MM.config.sessionTracking,
        jM = null !== (rM = null !== (iM = null === SM || void 0 === SM || null === (OM = SM.sampler) || void 0 === OM ? void 0 : OM.call(SM, {
          metas: MM.metas.value
        })) && void 0 !== iM ? iM : null === SM || void 0 === SM ? void 0 : SM.samplingRate) && void 0 !== rM ? rM : 1,
        aM = "number" === typeof jM ? function(MM) {
          return Math.min(1, Math.max(0, MM))
        }(jM) : 0;
      if (!(aM > 0)) return !1;
      if (1 === aM) return !0;
      try {
        const MM = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === MM || void 0 === MM ? void 0 : MM.getRandomValues)) {
          const rM = new Uint32Array(1);
          return MM.getRandomValues(rM), rM[0] / Math.pow(2, 32) < aM
        }
      } catch (PM) {}
      return Math.random() < aM
    }

    function mr() {
      return Date.now()
    }

    function Hr() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function hr() {
      return (new Date).toISOString()
    }

    function Jr(MM) {
      return new Date(MM).toISOString()
    }
    const dr = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function yr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const rM = new Uint32Array(MM),
        iM = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === iM || void 0 === iM ? void 0 : iM.getRandomValues) iM.getRandomValues(rM);
      else
        for (let SM = 0; SM < MM; SM++) rM[SM] = Math.floor(4294967296 * Math.random());
      let OM = "";
      for (let SM = 0; SM < MM; SM++) OM += dr[rM[SM] % 59];
      return OM
    }

    function lr(MM, rM) {
      if (MM === rM) return !0;
      if (yM(MM, "number") && isNaN(MM)) return yM(rM, "number") && isNaN(rM);
      const iM = RM(MM),
        OM = RM(rM);
      if (iM !== OM) return !1;
      if (iM && OM) {
        const iM = MM.length;
        if (iM !== rM.length) return !1;
        for (let OM = iM; 0 !== OM--;)
          if (!lr(MM[OM], rM[OM])) return !1;
        return !0
      }
      const SM = gM(MM),
        jM = gM(rM);
      if (SM !== jM) return !1;
      if (MM && rM && SM && jM) {
        const iM = Object.keys(MM),
          OM = Object.keys(rM);
        if (iM.length !== OM.length) return !1;
        for (let MM of iM)
          if (!OM.includes(MM)) return !1;
        for (let SM of iM)
          if (!lr(MM[SM], rM[SM])) return !1;
        return !0
      }
      return !1
    }
    const Er = "click",
      Ur = "navigation",
      Gr = "view_changed",
      Cr = "session_start",
      er = "session_resume",
      br = "session_extend",
      wr = "service_name_override",
      tr = "route_change";

    function gr() {
      let {
        sessionId: MM,
        started: rM,
        lastActivity: iM,
        isSampled: OM = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, SM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JM;
      var jM;
      const aM = mr(),
        PM = null === (jM = SM.config) || void 0 === jM || null === (jM = jM.sessionTracking) || void 0 === jM ? void 0 : jM.generateSessionId;
      return null == MM && (MM = "function" === typeof PM ? PM() : yr()), {
        sessionId: MM,
        lastActivity: null !== iM && void 0 !== iM ? iM : aM,
        started: null !== rM && void 0 !== rM ? rM : aM,
        isSampled: OM
      }
    }

    function ur(MM) {
      if (null == MM) return !1;
      const rM = mr();
      return rM - MM.started < 144e5 && rM - MM.lastActivity < aM
    }

    function Rr(MM) {
      let {
        fetchUserSession: rM,
        storeUserSession: iM,
        adoptSession: OM,
        updateInterval: SM = 0
      } = MM, PM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JM, nM = 0;
      return function() {
        let {
          forceSessionExtend: MM = !1,
          refreshActivity: QM = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var zM, LM;
        if (!rM || !iM) return;
        const mM = mr();
        if (!MM && mM < nM && nM - mM <= SM) return;
        const HM = PM.config.sessionTracking,
          hM = null === HM || void 0 === HM ? void 0 : HM.persistent;
        if (hM && !Or || !hM && !Sr) return;
        const JM = rM();
        if (nM = Math.min(mM + SM, (null !== (zM = null === JM || void 0 === JM ? void 0 : JM.started) && void 0 !== zM ? zM : mM) + jM, (null !== (LM = null === JM || void 0 === JM ? void 0 : JM.lastActivity) && void 0 !== LM ? LM : mM) + aM), !1 === MM && ur(JM)) {
          var dM;
          QM && iM(zr(zr({}, JM), {}, {
            lastActivity: mM
          }));
          const MM = null === (dM = PM.metas.value.session) || void 0 === dM ? void 0 : dM.id;
          null != OM && null != JM.sessionMeta && JM.sessionId !== MM && OM(JM.sessionMeta)
        } else {
          var yM, lM, EM;
          let MM = Wr(gr({
            isSampled: Lr(PM)
          }, PM), JM, PM);
          nM = mM + SM, iM(MM), null === (yM = PM.api) || void 0 === yM || yM.setSession(MM.sessionMeta), null === HM || void 0 === HM || null === (lM = HM.onSessionChange) || void 0 === lM || lM.call(HM, null !== (EM = null === JM || void 0 === JM ? void 0 : JM.sessionMeta) && void 0 !== EM ? EM : null, MM.sessionMeta)
        }
      }
    }

    function pr(MM) {
      let rM, {
          fetchUserSession: iM,
          storeUserSession: OM,
          updateInterval: SM = 0
        } = MM,
        jM = 0;
      return MM => {
        const aM = mr();
        if (MM === rM && aM < jM && jM - aM <= SM) return;
        rM = MM, jM = aM + SM;
        const PM = iM();
        (null === PM || void 0 === PM ? void 0 : PM.sessionId) === MM && ur(PM) && OM(zr(zr({}, PM), {}, {
          lastActivity: aM
        }))
      }
    }

    function Wr(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JM;
      var OM, SM, jM, aM, PM, nM;
      const QM = zr(zr({}, MM), {}, {
          sessionMeta: {
            id: MM.sessionId,
            attributes: Dr(zr(zr(zr({}, null === (OM = iM.config.sessionTracking) || void 0 === OM || null === (OM = OM.session) || void 0 === OM ? void 0 : OM.attributes), null !== (SM = null === (jM = iM.metas.value.session) || void 0 === jM ? void 0 : jM.attributes) && void 0 !== SM ? SM : {}), {}, {
              isSampled: MM.isSampled.toString()
            }))
          }
        }),
        zM = null !== (aM = null === (PM = iM.metas.value.session) || void 0 === PM ? void 0 : PM.overrides) && void 0 !== aM ? aM : null === rM || void 0 === rM || null === (nM = rM.sessionMeta) || void 0 === nM ? void 0 : nM.overrides;
      XM(zM) || (QM.sessionMeta.overrides = zM);
      const LM = null === rM || void 0 === rM ? void 0 : rM.sessionId;
      return null != LM && (QM.sessionMeta.attributes.previousSession = LM), QM
    }

    function sr(MM) {
      let {
        fetchUserSession: rM,
        storeUserSession: iM
      } = MM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JM, SM = !1;
      return function(MM) {
        if (SM) return;
        const jM = MM.session,
          aM = rM();
        let PM = null === jM || void 0 === jM ? void 0 : jM.id;
        const nM = null === jM || void 0 === jM ? void 0 : jM.attributes,
          QM = null === jM || void 0 === jM ? void 0 : jM.overrides,
          zM = null === aM || void 0 === aM ? void 0 : aM.sessionMeta,
          LM = null === zM || void 0 === zM ? void 0 : zM.overrides,
          mM = !!QM && !lr(QM, LM),
          HM = !!nM && !lr(nM, null === zM || void 0 === zM ? void 0 : zM.attributes);
        if (jM && PM !== (null === aM || void 0 === aM ? void 0 : aM.sessionId) || HM || mM) {
          var hM, JM;
          const MM = null != aM && PM === aM.sessionId,
            rM = Wr(MM ? aM : gr({
              sessionId: PM,
              isSampled: Lr(OM)
            }, OM), aM, OM),
            jM = null === aM || void 0 === aM || null === (hM = aM.sessionMeta) || void 0 === hM || null === (hM = hM.attributes) || void 0 === hM ? void 0 : hM.previousSession;
          MM && null != jM && jM !== rM.sessionId && (rM.sessionMeta.attributes.previousSession = jM), (null === (JM = rM.sessionMeta.attributes) || void 0 === JM ? void 0 : JM.previousSession) === rM.sessionId && delete rM.sessionMeta.attributes.previousSession, iM(rM),
            function(MM, rM) {
              let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var SM, jM, aM;
              if (!rM) return;
              const PM = iM.serviceName,
                nM = null !== (SM = null !== (jM = OM.serviceName) && void 0 !== jM ? jM : null === (aM = MM.metas.value.app) || void 0 === aM ? void 0 : aM.name) && void 0 !== SM ? SM : "";
              PM && PM !== nM && MM.api.pushEvent(wr, {
                serviceName: PM,
                previousServiceName: nM
              })
            }(OM, mM, QM, LM), SM = !0;
          try {
            OM.api.setSession(rM.sessionMeta)
          } finally {
            SM = !1
          }
        }
      }
    }

    function Dr(MM) {
      const rM = {};
      for (const iM of Object.keys(MM)) {
        const OM = MM[iM];
        void 0 !== OM && (rM[iM] = OM)
      }
      return rM
    }

    function kr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== MM && void 0 !== MM ? MM : {}, function() {
        const MM = new WeakSet;
        return function(rM, iM) {
          if (gM(iM) && null !== iM) {
            if (MM.has(iM)) return null;
            MM.add(iM)
          }
          return iM
        }
      }())
    }

    function Zr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const rM = {};
      for (const [iM, OM] of Object.entries(MM)) rM[iM] = gM(OM) && null !== OM ? kr(OM) : String(OM);
      return rM
    }
    var or = class MM {
      constructor() {
        var rM = this;
        let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JM;
        this.context = iM, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = MM => {
          this.adopting = !0;
          try {
            var rM;
            null === (rM = this.context.api) || void 0 === rM || rM.setSession(MM)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: MM = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return rM.updateUserSession({
            refreshActivity: MM
          })
        }, this.recordActivity = pr({
          fetchUserSession: MM.fetchUserSession,
          storeUserSession: MM.storeUserSession,
          updateInterval: PM
        }), this.updateUserSession = Rr({
          fetchUserSession: MM.fetchUserSession,
          storeUserSession: MM.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: PM
        }, iM), this.init()
      }
      static removeUserSession() {
        ir(SM, MM.storageTypeLocal)
      }
      static storeUserSession(rM) {
        rr(SM, kr(rM), MM.storageTypeLocal)
      }
      static fetchUserSession() {
        const rM = Mr(SM, MM.storageTypeLocal);
        return rM ? JSON.parse(rM) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var MM;
            this.updateSession({
              refreshActivity: !1
            });
            const rM = null === (MM = this.context.api) || void 0 === MM || null === (MM = MM.getSession()) || void 0 === MM ? void 0 : MM.id;
            rM && this.recordActivity(rM)
          }
        })), this.context.metas.addListener(sr({
          fetchUserSession: MM.fetchUserSession,
          storeUserSession: MM.storeUserSession
        }, this.context))
      }
    };
    or.storageTypeLocal = VM;
    var fr = class MM {
      constructor() {
        var rM = this;
        let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JM;
        this.context = iM, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: MM = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return rM.updateUserSession({
            refreshActivity: MM
          })
        }, this.recordActivity = pr({
          fetchUserSession: MM.fetchUserSession,
          storeUserSession: MM.storeUserSession,
          updateInterval: PM
        }), this.updateUserSession = Rr({
          fetchUserSession: MM.fetchUserSession,
          storeUserSession: MM.storeUserSession,
          updateInterval: PM
        }, iM), this.init()
      }
      static removeUserSession() {
        ir(SM, MM.storageTypeSession)
      }
      static storeUserSession(rM) {
        rr(SM, kr(rM), MM.storageTypeSession)
      }
      static fetchUserSession() {
        const rM = Mr(SM, MM.storageTypeSession);
        return rM ? JSON.parse(rM) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var MM;
            this.updateSession({
              refreshActivity: !1
            });
            const rM = null === (MM = this.context.api) || void 0 === MM || null === (MM = MM.getSession()) || void 0 === MM ? void 0 : MM.id;
            rM && this.recordActivity(rM)
          }
        })), this.context.metas.addListener(sr({
          fetchUserSession: MM.fetchUserSession,
          storeUserSession: MM.storeUserSession
        }, this.context))
      }
    };
    fr.storageTypeSession = TM;
    const Yr = new WeakMap;

    function Nr(MM) {
      let rM = Yr.get(MM);
      if (!rM) {
        let iM = [],
          OM = [];
        rM = {
          addSessionUpdateListener: MM => {
            iM.push(MM)
          },
          removeSessionUpdateListener: MM => {
            iM = iM.filter((rM => rM !== MM))
          },
          notifySessionUpdate: MM => {
            iM.forEach((rM => rM(MM)))
          },
          shouldCapture: () => OM.every((MM => MM())),
          addCaptureFilter: MM => {
            OM.push(MM)
          },
          removeCaptureFilter: MM => {
            OM = OM.filter((rM => rM !== MM))
          }
        }, Yr.set(MM, rM)
      }
      return rM
    }
    var Ar = class {
      constructor(MM, rM, iM) {
        this.metas = MM, this.transports = rM, this.onActivate = iM, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = MM => {
          var rM, iM, OM;
          const SM = this.pending;
          var jM, aM;
          if ("overrides" === MM.type) return void(this.pending = {
            reset: null !== (jM = null === SM || void 0 === SM ? void 0 : SM.reset) && void 0 !== jM && jM,
            inheritOverrides: null === (aM = null === SM || void 0 === SM ? void 0 : SM.inheritOverrides) || void 0 === aM || aM,
            session: zr(zr({}, null === SM || void 0 === SM ? void 0 : SM.session), {}, {
              overrides: zr(zr({}, null === SM || void 0 === SM ? void 0 : SM.session.overrides), MM.overrides)
            })
          });
          const PM = MM.session,
            nM = XM(PM) || null != PM && "id" in PM && !PM.id,
            QM = null !== (rM = null === PM || void 0 === PM ? void 0 : PM.overrides) && void 0 !== rM ? rM : null === SM || void 0 === SM ? void 0 : SM.session.overrides;
          this.pending = {
            reset: nM || !(null === PM || void 0 === PM ? void 0 : PM.id) && null !== (iM = null === SM || void 0 === SM ? void 0 : SM.reset) && void 0 !== iM && iM,
            inheritOverrides: !(!MM.overrides && void 0 !== (null === PM || void 0 === PM ? void 0 : PM.overrides)) && (null === (OM = null === SM || void 0 === SM ? void 0 : SM.inheritOverrides) || void 0 === OM || OM),
            session: {
              id: null === PM || void 0 === PM ? void 0 : PM.id,
              attributes: (null === PM || void 0 === PM ? void 0 : PM.attributes) && zr({}, PM.attributes),
              overrides: MM.overrides ? zr(zr({}, null === SM || void 0 === SM ? void 0 : SM.session.overrides), MM.overrides) : QM && zr({}, QM)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var MM, rM;
        this.waiting = !0, Nr(this.metas).addSessionUpdateListener(this.recordUpdate), Nr(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (MM = (rM = this.metas).addCaptureListener) || void 0 === MM || MM.call(rM, this.activate), this.activate()
      }
      destroy() {
        var MM, rM;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Nr(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (MM = (rM = this.metas).removeCaptureListener) || void 0 === MM || MM.call(rM, this.activate), Nr(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function xr(MM) {
      return (null === MM || void 0 === MM ? void 0 : MM.persistent) ? or : fr
    }

    function vr() {}
    let Fr = function(MM) {
      return MM[MM.OFF = 0] = "OFF", MM[MM.ERROR = 1] = "ERROR", MM[MM.WARN = 2] = "WARN", MM[MM.INFO = 3] = "INFO", MM[MM.VERBOSE = 4] = "VERBOSE", MM
    }({});
    const Br = {
        debug: vr,
        error: vr,
        info: vr,
        prefix: "Faro",
        warn: vr
      },
      Xr = 1;

    function Ir(MM) {
      return Ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Ir(MM)
    }

    function Kr(MM) {
      var rM = function(MM, rM) {
        if ("object" != Ir(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != Ir(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == Ir(rM) ? rM : rM + ""
    }

    function qr(MM, rM, iM) {
      return (rM = Kr(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function Tr(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function Vr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? Tr(Object(iM), !0).forEach((function(rM) {
          qr(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : Tr(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }
    const cr = Vr({}, console);
    var Mi = class {
        constructor() {
          this.unpatchedConsole = cr, this.internalLogger = Br, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          this.internalLogger.debug(`${this.name}\n`, ...rM)
        }
        logInfo() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          this.internalLogger.info(`${this.name}\n`, ...rM)
        }
        logWarn() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          this.internalLogger.warn(`${this.name}\n`, ...rM)
        }
        logError() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          this.internalLogger.error(`${this.name}\n`, ...rM)
        }
      },
      ri = class extends Mi {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ii = "2.12.1";
    var Oi = class extends ri {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ii, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(MM) {
        var rM;
        const iM = MM.session;
        if (iM && iM.id !== (null === (rM = this.notifiedSession) || void 0 === rM ? void 0 : rM.id)) {
          var OM;
          if (this.isAdoptingSession()) return void(this.notifiedSession = iM);
          if (this.notifiedSession && this.notifiedSession.id === (null === (OM = iM.attributes) || void 0 === OM ? void 0 : OM.previousSession)) return this.api.pushEvent(br, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = iM);
          this.notifiedSession = iM, this.api.pushEvent(Cr, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(MM, rM, iM) {
        const OM = null === iM || void 0 === iM ? void 0 : iM.session;
        let SM, jM, aM = MM.fetchUserSession();
        if (rM.persistent && rM.maxSessionPersistenceTime && aM) {
          const MM = mr();
          aM.lastActivity < MM - rM.maxSessionPersistenceTime && (or.removeUserSession(), aM = null)
        }
        const PM = ur(aM);
        if ((null === iM || void 0 === iM ? void 0 : iM.reset) || !PM || (null === OM || void 0 === OM ? void 0 : OM.id) && OM.id !== (null === aM || void 0 === aM ? void 0 : aM.sessionId)) {
          var nM, QM, zM, LM, mM, HM;
          jM = gr({
            sessionId: (null === iM || void 0 === iM ? void 0 : iM.reset) ? void 0 : null !== (nM = null === OM || void 0 === OM ? void 0 : OM.id) && void 0 !== nM ? nM : null === (QM = rM.session) || void 0 === QM ? void 0 : QM.id,
            isSampled: Lr(this)
          }, this);
          const MM = jM.sessionId,
            hM = iM && PM ? null === aM || void 0 === aM || null === (zM = aM.sessionMeta) || void 0 === zM ? void 0 : zM.overrides : void 0,
            JM = hM ? zr(zr({}, null === (LM = rM.session) || void 0 === LM ? void 0 : LM.overrides), hM) : null === (mM = rM.session) || void 0 === mM ? void 0 : mM.overrides;
          jM.sessionMeta = zr({
            id: MM,
            attributes: zr({
              isSampled: jM.isSampled.toString()
            }, null === (HM = rM.session) || void 0 === HM ? void 0 : HM.attributes)
          }, JM ? {
            overrides: JM
          } : {}), SM = Cr
        } else {
          var hM, JM;
          const MM = null === aM || void 0 === aM ? void 0 : aM.sessionId;
          jM = gr({
            sessionId: MM,
            isSampled: aM.isSampled || !1,
            started: null === aM || void 0 === aM ? void 0 : aM.started
          }, this);
          const iM = null === aM || void 0 === aM ? void 0 : aM.sessionMeta,
            OM = zr(zr({}, null === (hM = rM.session) || void 0 === hM ? void 0 : hM.overrides), null === iM || void 0 === iM ? void 0 : iM.overrides);
          jM.sessionMeta = zr(zr({}, rM.session), {}, {
            id: MM,
            attributes: zr(zr(zr({}, null === (JM = rM.session) || void 0 === JM ? void 0 : JM.attributes), null === iM || void 0 === iM ? void 0 : iM.attributes), {}, {
              isSampled: jM.isSampled.toString()
            }),
            overrides: OM
          }), SM = er
        }
        var dM;
        if (OM && (jM.sessionMeta = zr(zr({}, jM.sessionMeta), {}, {
            attributes: zr(zr(zr({}, null === (dM = jM.sessionMeta) || void 0 === dM ? void 0 : dM.attributes), OM.attributes), {}, {
              isSampled: jM.isSampled.toString()
            })
          }), OM.overrides)) {
          const MM = (null === iM || void 0 === iM ? void 0 : iM.inheritOverrides) ? zr(zr({}, jM.sessionMeta.overrides), OM.overrides) : OM.overrides;
          Object.keys(MM).length > 0 ? jM.sessionMeta.overrides = MM : delete jM.sessionMeta.overrides
        }
        return {
          initialSession: jM,
          lifecycleType: SM
        }
      }
      registerBeforeSendHook(MM) {
        var rM;
        this.beforeSendHook = rM => {
          var iM, OM;
          const SM = null === (iM = rM.meta.session) || void 0 === iM ? void 0 : iM.id;
          SM && !this.transports.isPaused() && MM(SM);
          const jM = null === (OM = rM.meta.session) || void 0 === OM ? void 0 : OM.attributes;
          if (jM && "true" === (null === jM || void 0 === jM ? void 0 : jM.isSampled)) {
            var aM;
            let MM = JSON.parse(JSON.stringify(rM));
            const iM = null === (aM = MM.meta.session) || void 0 === aM ? void 0 : aM.attributes;
            var PM;
            if (null === iM || void 0 === iM || delete iM.isSampled, 0 === Object.keys(null !== iM && void 0 !== iM ? iM : {}).length) null === (PM = MM.meta.session) || void 0 === PM || delete PM.attributes;
            return MM
          }
          return null
        }, null === (rM = this.transports) || void 0 === rM || rM.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var MM;
        this.logDebug("init session instrumentation");
        const rM = document.prerendering;
        var iM;
        if ((null === (MM = this.config.sessionTracking) || void 0 === MM ? void 0 : MM.enabled) && (rM || this.prerenderSession)) return null !== (iM = this.prerenderSession) && void 0 !== iM || (this.prerenderSession = new Ar(this.metas, this.transports, (MM => {
          this.prerenderSession = void 0, this.initializeSession(MM)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(MM) {
        const rM = this.config.sessionTracking;
        if (null === rM || void 0 === rM ? void 0 : rM.enabled) {
          var iM, OM;
          const SM = xr(rM),
            jM = new SM(this);
          this.isAdoptingSession = jM.isAdopting, this.registerBeforeSendHook(jM.recordActivity);
          const {
            initialSession: aM,
            lifecycleType: PM
          } = this.createInitialSession(SM, rM, MM);
          SM.storeUserSession(aM);
          const nM = aM.sessionMeta;
          this.notifiedSession = nM, this.api.setSession(nM), this.captureListener = () => {
            this.transports.isPaused() || jM.updateSession({
              refreshActivity: !1
            })
          }, null === (iM = (OM = this.metas).addCaptureListener) || void 0 === iM || iM.call(OM, this.captureListener), PM === Cr && this.api.pushEvent(Cr, {}, void 0, {
            skipDedupe: !0
          }), PM === er && this.api.pushEvent(er, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var MM, rM, iM;
        (null === (MM = this.prerenderSession) || void 0 === MM || MM.destroy(), this.captureListener) && (null === (rM = (iM = this.metas).removeCaptureListener) || void 0 === rM || rM.call(iM, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Si(MM, rM, iM, OM) {
      const SM = {
        filename: MM || document.location.href,
        function: rM || "?"
      };
      return void 0 !== iM && (SM.lineno = iM), void 0 !== OM && (SM.colno = OM), SM
    }
    const ji = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ai = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Pi = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      ni = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Qi = "safari-extension",
      zi = "safari-web-extension",
      Li = /Minified React error #\d+;/i;

    function mi(MM, rM) {
      const iM = null === MM || void 0 === MM ? void 0 : MM.includes(Qi),
        OM = !iM && (null === MM || void 0 === MM ? void 0 : MM.includes("safari-web-extension"));
      return iM || OM ? [(null === MM || void 0 === MM ? void 0 : MM.includes("@")) ? MM.split("@")[0] : MM, iM ? `${Qi}:${rM}` : `${zi}:${rM}`] : [MM, rM]
    }
    const Hi = 1024;

    function Ji(MM) {
      let rM = [];
      MM.stacktrace ? rM = MM.stacktrace.split("\n").filter(((MM, rM) => rM % 2 === 0)) : MM.stack && (rM = MM.stack.split("\n"));
      const iM = rM.reduce(((rM, iM, OM) => {
        if (iM.length > Hi) return rM;
        let SM, jM, aM, PM, nM;
        if (SM = ji.exec(iM)) {
          if (jM = SM[1], aM = SM[2], PM = SM[3], nM = SM[4], null === aM || void 0 === aM ? void 0 : aM.startsWith("eval")) {
            const MM = ai.exec(aM);
            MM && (aM = MM[1], PM = MM[2], nM = MM[3])
          }
          aM = (null === aM || void 0 === aM ? void 0 : aM.startsWith("address at ")) ? aM.substring(11) : aM, [jM, aM] = mi(jM, aM)
        } else if (SM = Pi.exec(iM)) {
          if (jM = SM[1], aM = SM[3], PM = SM[4], nM = SM[5], aM && aM.includes(" > eval")) {
            const MM = ni.exec(aM);
            MM && (jM = jM || "eval", aM = MM[1], PM = MM[2])
          } else 0 === OM && !nM && eM(MM.columnNumber) && (nM = String(MM.columnNumber + 1));
          [jM, aM] = mi(jM, aM)
        }
        return (aM || jM) && rM.push(Si(aM, jM, PM ? Number(PM) : void 0, nM ? Number(nM) : void 0)), rM
      }), []);
      return Li.test(MM.message) ? iM.slice(1) : iM
    }

    function di(MM) {
      return {
        frames: Ji(MM)
      }
    }
    const yi = "http-request-start",
      li = "http-request-end";
    var Ei = class MM {
      constructor() {
        this.subscribers = []
      }
      subscribe(MM) {
        return this.subscribers.push(MM), {
          unsubscribe: () => this.unsubscribe(MM)
        }
      }
      unsubscribe(MM) {
        this.subscribers = this.subscribers.filter((rM => rM !== MM))
      }
      notify(MM) {
        this.subscribers.forEach((rM => rM(MM)))
      }
      first() {
        const rM = new MM,
          iM = MM => {
            rM.notify(MM), OM.unsubscribe()
          },
          OM = this.subscribe(iM),
          SM = rM.unsubscribe.bind(rM);
        return this.withUnsubscribeOverride(rM, SM, iM)
      }
      takeWhile(rM) {
        const iM = new MM,
          OM = MM => {
            rM(MM) ? iM.notify(MM) : iM.unsubscribe(OM)
          };
        this.subscribe(OM);
        const SM = iM.unsubscribe.bind(iM);
        return this.withUnsubscribeOverride(iM, SM, OM)
      }
      filter(rM) {
        const iM = new MM,
          OM = MM => {
            rM(MM) && iM.notify(MM)
          };
        this.subscribe(OM);
        const SM = iM.unsubscribe.bind(iM);
        return this.withUnsubscribeOverride(iM, SM, OM)
      }
      merge() {
        const rM = new MM,
          iM = [];
        for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
        SM.forEach((MM => {
          const OM = MM.subscribe((MM => {
            rM.notify(MM)
          }));
          iM.push(OM)
        }));
        const aM = rM.unsubscribeAll.bind(rM);
        return rM.unsubscribe = () => {
          iM.forEach((MM => MM.unsubscribe())), aM()
        }, rM
      }
      withUnsubscribeOverride(MM, rM, iM) {
        return MM.unsubscribe = MM => {
          rM(MM), this.unsubscribe(iM)
        }, MM
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Ui = function(MM) {
      return MM.TRACE = "trace", MM.DEBUG = "debug", MM.INFO = "info", MM.LOG = "log", MM.WARN = "warn", MM.ERROR = "error", MM
    }({});
    const Gi = "log",
      Ci = ["trace", "debug", "info", "log", "warn", "error"];
    let ei, bi = !1;
    const wi = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      ti = "Error",
      gi = MM => MM.map((MM => gM(MM) ? kr(MM) : String(MM))).join(" ");

    function ui(MM) {
      let rM, iM, OM, SM, jM = [];
      if (fM(MM) && MM.error) rM = MM.error.message, iM = MM.error.name, jM = Ji(MM.error);
      else if ((OM = YM(MM)) || NM(MM)) {
        const {
          name: SM,
          message: jM
        } = MM;
        iM = null !== SM && void 0 !== SM ? SM : OM ? "DOMError" : "DOMException", rM = jM ? `${iM}: ${jM}` : iM
      } else oM(MM) ? (iM = MM.name, rM = MM.message, jM = Ji(MM)) : (gM(MM) || (SM = kM(MM))) && (iM = SM ? MM.constructor.name : void 0, rM = `Non-Error exception captured with keys: ${Object.keys(MM)}`);
      return [rM, iM, jM]
    }

    function Ri(MM) {
      const [rM, iM, OM, SM, jM] = MM;
      let aM, PM, nM = [];
      const QM = CM(rM),
        zM = Si(iM, "?", OM, SM);
      return jM || !QM ? ([aM, PM, nM] = ui(null !== jM && void 0 !== jM ? jM : rM), 0 === nM.length && (nM = [zM])) : QM && ([aM, PM] = function(MM) {
        var rM, iM;
        const OM = MM.match(wi),
          SM = null !== (rM = null === OM || void 0 === OM ? void 0 : OM[1]) && void 0 !== rM ? rM : ti;
        return [null !== (iM = null === OM || void 0 === OM ? void 0 : OM[2]) && void 0 !== iM ? iM : MM, SM]
      }(rM), nM = [zM]), {
        value: aM,
        type: PM,
        stackFrames: nM
      }
    }

    function Wi(MM, rM) {
      return oM(MM[0]) ? Ri(MM) : {
        value: rM(MM)
      }
    }
    const si = MM => MM.map((MM => {
      try {
        return String(MM)
      } catch (rM) {
        return ""
      }
    })).join(" ");
    var Di = class MM extends ri {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ii, this.errorSerializer = si
      }
      initialize() {
        var rM, iM;
        const OM = this.config.consoleInstrumentation,
          SM = (null === OM || void 0 === OM ? void 0 : OM.serializeErrors) || !!(null === OM || void 0 === OM ? void 0 : OM.errorSerializer);
        this.errorSerializer = SM ? null !== (rM = null === OM || void 0 === OM ? void 0 : OM.errorSerializer) && void 0 !== rM ? rM : gi : si;
        const jM = null !== (iM = null === OM || void 0 === OM ? void 0 : OM.disabledLevels) && void 0 !== iM ? iM : MM.defaultDisabledLevels,
          aM = function(MM) {
            if (ei || (ei = new Ei), !bi) {
              const rM = null !== MM && void 0 !== MM ? MM : cr;
              Ci.forEach((MM => {
                console[MM] = function() {
                  for (var iM, OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
                  ei.notify({
                    type: "console",
                    level: MM,
                    args: SM
                  }), null === (iM = rM[MM]) || void 0 === iM || iM.apply(console, SM)
                }
              })), bi = !0
            }
            return ei
          }(this.unpatchedConsole);
        this.subscription = aM.subscribe((rM => {
          let {
            level: iM,
            args: SM
          } = rM;
          if (!jM.includes(iM)) try {
            if (iM !== Ui.ERROR || (null === OM || void 0 === OM ? void 0 : OM.consoleErrorAsLog))
              if (iM === Ui.ERROR && (null === OM || void 0 === OM ? void 0 : OM.consoleErrorAsLog)) {
                const {
                  value: rM,
                  type: OM,
                  stackFrames: jM
                } = Wi(SM, this.errorSerializer);
                this.api.pushLog(rM ? [MM.consoleErrorPrefix + rM] : SM, {
                  level: iM,
                  context: {
                    value: null !== rM && void 0 !== rM ? rM : "",
                    type: null !== OM && void 0 !== OM ? OM : "",
                    stackFrames: (null === jM || void 0 === jM ? void 0 : jM.length) ? gi(jM) : ""
                  }
                })
              } else this.api.pushLog(SM, {
                level: iM
              });
            else {
              const {
                value: rM,
                type: iM,
                stackFrames: OM
              } = Wi(SM, this.errorSerializer);
              if (rM && !iM && !OM) return void this.api.pushError(new Error(MM.consoleErrorPrefix + rM));
              this.api.pushError(new Error(MM.consoleErrorPrefix + rM), {
                type: iM,
                stackFrames: OM
              })
            }
          } catch (aM) {
            this.logError(aM)
          }
        }))
      }
      destroy() {
        var MM;
        null === (MM = this.subscription) || void 0 === MM || MM.unsubscribe(), this.subscription = void 0
      }
    };
    Di.defaultDisabledLevels = [Ui.DEBUG, Ui.TRACE, Ui.LOG], Di.consoleErrorPrefix = "console.error: ";
    const ki = [];
    var Zi = class extends ri {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ii
      }
      initialize() {
        this.logDebug("Initializing"),
          function(MM) {
            const rM = window.onerror;
            window.onerror = function() {
              for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
              try {
                const {
                  value: rM,
                  type: iM,
                  stackFrames: SM
                } = Ri(OM), jM = OM[4];
                if (rM) {
                  const OM = {
                    type: iM,
                    stackFrames: SM
                  };
                  null != jM && (OM.originalError = jM), MM.pushError(new Error(rM), OM)
                }
              } finally {
                null === rM || void 0 === rM || rM.apply(window, OM)
              }
            }
          }(this.api),
          function(MM) {
            const rM = rM => {
              var iM;
              let OM, SM, jM = rM;
              if (jM.reason) jM = rM.reason;
              else if (null === (iM = rM.detail) || void 0 === iM ? void 0 : iM.reason) {
                var aM;
                jM = null === (aM = rM.detail) || void 0 === aM ? void 0 : aM.reason
              }
              let PM = [];
              sM(jM) ? (OM = `Non-Error promise rejection captured with value: ${String(jM)}`, SM = "UnhandledRejection") : [OM, SM, PM] = ui(jM), OM && MM.pushError(new Error(OM), {
                type: SM,
                stackFrames: PM
              })
            };
            window.addEventListener("unhandledrejection", rM), ki.push(rM)
          }(this.api)
      }
    };
    const oi = "unknown";
    var fi = class extends ri {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ii, this.waitingForActivation = !1, this.sendViewChangedEvent = MM => {
          var rM;
          if (this.waitingForActivation || document.prerendering) return;
          const iM = MM.view;
          if (iM && iM.name !== (null === (rM = this.notifiedView) || void 0 === rM ? void 0 : rM.name)) {
            var OM, SM, jM;
            const MM = null !== (OM = null === (SM = this.notifiedView) || void 0 === SM ? void 0 : SM.name) && void 0 !== OM ? OM : oi;
            this.notifiedView = iM, this.api.pushEvent(Gr, {
              fromView: MM,
              toView: null !== (jM = iM.name) && void 0 !== jM ? jM : oi
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
    class Yi {
      t;
      o = 0;
      i = [];
      l(MM) {
        if (MM.hadRecentInput) return;
        const rM = this.i[0],
          iM = this.i.at(-1);
        this.o && rM && iM && MM.startTime - iM.startTime < 1e3 && MM.startTime - rM.startTime < 5e3 ? (this.o += MM.value, this.i.push(MM)) : (this.o = MM.value, this.i = [MM]), this.t?.(MM)
      }
    }
    const Ni = () => {
        const MM = performance.getEntriesByType("navigation")[0];
        if (MM && MM.responseStart > 0 && MM.responseStart < performance.now()) return MM
      },
      Ai = MM => {
        if ("loading" === document.readyState) return "loading";
        const rM = Ni();
        if (rM) {
          if (MM < rM.domInteractive) return "loading";
          if (0 === rM.domContentLoadedEventStart || MM < rM.domContentLoadedEventStart) return "dom-interactive";
          if (0 === rM.domComplete || MM < rM.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      xi = MM => {
        const rM = MM.nodeName;
        return 1 === MM.nodeType ? rM.toLowerCase() : rM.toUpperCase().replace(/^#/, "")
      },
      vi = MM => {
        let rM = "";
        try {
          for (; 9 !== MM?.nodeType;) {
            const iM = MM,
              OM = iM.id ? "#" + iM.id : [xi(iM), ...Array.from(iM.classList ?? []).sort()].join(".");
            if (rM.length + OM.length > 99) return rM || OM;
            if (rM = rM ? OM + ">" + rM : OM, iM.id) break;
            MM = iM.parentNode
          }
        } catch {}
        return rM
      },
      Fi = new WeakMap;

    function Bi(MM, rM) {
      let iM = Fi.get(rM);
      return iM || (iM = new WeakMap, Fi.set(rM, iM)), iM.get(MM) || iM.set(MM, new rM), iM.get(MM)
    }
    let Xi = -1;
    const Ii = () => Xi,
      Ki = MM => {
        addEventListener("pageshow", (rM => {
          rM.persisted && (Xi = rM.timeStamp, MM(rM))
        }), !0)
      },
      qi = (MM, rM, iM, OM) => {
        let SM, jM;
        return aM => {
          rM.value >= 0 && (aM || OM) && (jM = rM.value - (SM ?? 0), (jM || void 0 === SM) && (SM = rM.value, rM.delta = jM, rM.rating = ((MM, rM) => MM > rM[1] ? "poor" : MM > rM[0] ? "needs-improvement" : "good")(rM.value, iM), MM(rM)))
        }
      },
      Ti = MM => {
        requestAnimationFrame((() => requestAnimationFrame((() => MM()))))
      },
      Vi = () => Ni()?.activationStart ?? 0;
    let ci = -1;
    const MO = new Set,
      rO = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      iO = MM => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === MM.type)
            for (const MM of MO) MM();
          isFinite(ci) || (ci = "visibilitychange" === MM.type ? MM.timeStamp : 0, removeEventListener("prerenderingchange", iO, !0))
        }
      },
      OO = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ci = 1 / 0), ci < 0) {
          const MM = Vi(),
            rM = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((rM => "hidden" === rM.name && rM.startTime >= MM))?.startTime;
          ci = rM ?? rO(), addEventListener("visibilitychange", iO, !0), addEventListener("prerenderingchange", iO, !0), Ki((() => {
            setTimeout((() => {
              ci = rO()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return ci
          },
          onHidden(MM) {
            MO.add(MM)
          }
        }
      },
      SO = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0,
          aM = arguments.length > 6 ? arguments[6] : void 0;
        const PM = Ni(),
          nM = PM?.navigationId || 0;
        let QM = "navigate";
        return iM ? QM = iM : Ii() >= 0 ? QM = "back-forward-cache" : PM && (document.prerendering || Vi() > 0 ? QM = "prerender" : document.wasDiscarded ? QM = "restore" : PM.type && (QM = PM.type.replace(/_/g, "-"))), {
          name: MM,
          value: rM,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: QM,
          navigationId: OM || nM,
          navigationInteractionId: SM,
          navigationURL: jM || PM?.name,
          navigationStartTime: aM || 0
        }
      },
      jO = function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const OM = MM.filter((MM => PerformanceObserver.supportedEntryTypes.includes(MM)));
          if (OM.length > 0) {
            const MM = new PerformanceObserver((MM => {
              queueMicrotask((() => {
                const iM = MM.getEntries();
                OM.length > 1 && iM.sort(((MM, rM) => MM.startTime + MM.duration - (rM.startTime + rM.duration))), rM(iM)
              }))
            }));
            for (const rM of OM) MM.observe({
              type: rM,
              buffered: !0,
              ...iM
            });
            return MM
          }
        } catch {}
      },
      aO = MM => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && MM && MM.reportSoftNavs,
      PO = (MM, rM) => {
        if (MM.set(rM.navigationId, rM), MM.size > 2) {
          const rM = MM.keys().next().value;
          void 0 !== rM && MM.delete(rM)
        }
      },
      nO = MM => {
        let rM = !1;
        return () => {
          rM || (MM(), rM = !0)
        }
      };
    class QO {
      u
    }
    const zO = MM => {
        document.prerendering ? addEventListener("prerenderingchange", MM, !0) : MM()
      },
      LO = [1800, 3e3],
      mO = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = aO(rM);
        zO((() => {
          const OM = Bi(rM, QO),
            SM = OO();
          let jM, aM = SO("FCP");
          const PM = jO(["paint"], (MM => {
            for (const rM of MM) "first-contentful-paint" === rM.name && (PM.disconnect(), rM.startTime < SM.firstHiddenTime && (aM.value = Math.max(rM.startTime - Vi(), 0), aM.entries.push(rM), aM.navigationId = rM.navigationId || aM.navigationId, jM(!0)))
          }));
          PM && (jM = qi(MM, aM, LO, rM.reportAllChanges), Ki((iM => {
            aM = SO("FCP", -1, "back-forward-cache", aM.navigationId, aM.navigationInteractionId, aM.navigationURL, Ii()), jM = qi(MM, aM, LO, rM.reportAllChanges), Ti((() => {
              aM.value = performance.now() - iM.timeStamp, jM(!0)
            }))
          }))), iM && jO(["soft-navigation"], (iM => {
            iM.forEach((iM => {
              OM.u && iM.navigationId && PO(OM.u, iM);
              const SM = Math.max((iM.presentationTime || iM.paintTime || 0) - iM.startTime, 0);
              aM = SO("FCP", SM, "soft-navigation", iM.navigationId, iM.interactionId, iM.name, iM.startTime), jM = qi(MM, aM, LO, rM.reportAllChanges), jM(!0)
            }))
          }), rM)
        }))
      },
      HO = [.1, .25],
      hO = MM => MM.find((MM => 1 === MM.node?.nodeType)) || MM[0];
    let JO = 0,
      dO = 1 / 0,
      yO = 0;
    const lO = MM => {
      for (const rM of MM) rM.interactionId && (dO = Math.min(dO, rM.interactionId), yO = Math.max(yO, rM.interactionId), JO = yO ? (yO - dO) / 7 + 1 : 0)
    };
    let EO;
    const UO = () => EO ? JO : performance.interactionCount ?? 0;
    class GO {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return UO() - this.h
      }
      D() {
        this.h = UO(), this.v.length = 0, this.p.clear()
      }
      S(MM) {
        const rM = this.T(),
          iM = Math.min(this.v.length - 1, Math.floor(rM / 50));
        return !rM || -1 !== iM || "soft-navigation" !== MM && "back-forward-cache" !== MM ? this.v[iM] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(MM) {
        if (this.m?.(MM), !MM.interactionId) return;
        const rM = this.v.at(-1);
        let iM = this.p.get(MM.interactionId);
        if (iM || this.v.length < 10 || MM.duration > rM.k) {
          if (iM ? MM.duration > iM.k ? (iM.entries = [MM], iM.k = MM.duration) : MM.duration === iM.k && MM.startTime === iM.entries[0].startTime && iM.entries.push(MM) : (iM = {
              id: MM.interactionId,
              entries: [MM],
              k: MM.duration
            }, this.p.set(iM.id, iM), this.v.push(iM)), this.v.sort(((MM, rM) => rM.k - MM.k)), this.v.length > 10) {
            const MM = this.v.splice(10);
            for (const rM of MM) this.p.delete(rM.id)
          }
          this.M?.(iM)
        }
      }
    }
    const CO = MM => {
        const rM = "requestIdleCallback" in globalThis ? 1e3 : 0,
          iM = globalThis.requestIdleCallback || setTimeout,
          OM = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) MM();
        else {
          const SM = nO(MM);
          let jM = -1;
          const aM = () => {
            OM(jM), SM()
          };
          addEventListener("visibilitychange", aM, {
            once: !0,
            capture: !0
          }), jM = iM((() => {
            removeEventListener("visibilitychange", aM, {
              capture: !0
            }), SM()
          }), {
            timeout: rM
          })
        }
      },
      eO = [200, 500],
      bO = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = Bi(rM = Object.assign({}, rM), GO);
        let OM = [],
          SM = [],
          jM = 0;
        const aM = new WeakMap,
          PM = new WeakMap;
        let nM = !1;
        const QM = () => {
            nM || (nM = !0, CO(zM))
          },
          zM = () => {
            const MM = new Set(iM.v.map((MM => aM.get(MM.entries[0])))),
              rM = SM.length - 10;
            SM = SM.filter(((iM, OM) => OM >= rM || MM.has(iM)));
            const PM = new Set;
            for (const iM of SM) {
              const MM = LM(iM.startTime, iM.processingEnd);
              for (const rM of MM) PM.add(rM)
            }
            const QM = OM.length - 10;
            OM = OM.filter(((MM, rM) => PM.has(MM) || rM >= QM && MM.startTime > jM)), nM = !1
          };
        iM.m = MM => {
          const iM = MM.startTime + MM.duration;
          let OM;
          jM = Math.max(jM, MM.processingEnd);
          for (let jM = SM.length - 1; jM >= 0; jM--) {
            const aM = SM[jM];
            if (Math.abs(iM - aM.renderTime) <= 8) {
              OM = aM, OM.startTime = Math.min(MM.startTime, OM.startTime), OM.processingStart = Math.min(MM.processingStart, OM.processingStart), OM.processingEnd = Math.max(MM.processingEnd, OM.processingEnd), rM.includeProcessedEventEntries && OM.entries.push(MM);
              break
            }
          }
          OM || (OM = {
            startTime: MM.startTime,
            processingStart: MM.processingStart,
            processingEnd: MM.processingEnd,
            renderTime: iM,
            entries: rM.includeProcessedEventEntries ? [MM] : []
          }, SM.push(OM)), MM.interactionId && aM.set(MM, OM), QM()
        }, iM.M = MM => {
          if (!PM.get(MM)) {
            const iM = MM.entries.find((MM => MM.target))?.target;
            if (iM) {
              const OM = rM.generateTarget?.(iM) ?? vi(iM);
              PM.set(MM, OM)
            } else {
              const rM = MM.entries.find((MM => MM.targetSelector))?.targetSelector;
              rM && PM.set(MM, rM)
            }
          }
        };
        const LM = (MM, rM) => {
          const iM = [];
          for (const SM of OM)
            if (!(SM.startTime + SM.duration < MM)) {
              if (SM.startTime > rM) break;
              iM.push(SM)
            } return iM
        };
        jO(["long-animation-frame"], (MM => {
            OM = OM.concat(MM), QM()
          }), rM),
          function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const iM = OO();
            zO((() => {
              "interactionCount" in performance || EO || (EO = jO(["event"], lO, {
                durationThreshold: 0
              }));
              let OM, SM = SO("INP");
              const jM = Bi(rM, GO),
                aM = (iM, aM, PM, nM, QM) => {
                  jM.D(), SM = SO("INP", -1, iM, aM, PM, nM, QM), OM = qi(MM, SM, eO, rM.reportAllChanges)
                },
                PM = () => {
                  const MM = jM.S(SM.navigationType);
                  MM && MM.k !== SM.value && (SM.value = MM.k, SM.entries = MM.entries, OM())
                },
                nM = MM => {
                  PM(), OM(!0), aM("soft-navigation", MM.navigationId, MM.interactionId, MM.name, MM.startTime)
                },
                QM = function(MM) {
                  let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  CO((() => {
                    for (const rM of MM) "soft-navigation" !== rM.entryType ? jM.l(rM) : nM(rM);
                    PM(), rM && OM(!0)
                  }))
                },
                zM = ["event", "first-input"];
              aO(rM) && zM.push("soft-navigation");
              const LM = jO(zM, QM, {
                ...rM,
                durationThreshold: rM.durationThreshold ?? 40
              });
              OM = qi(MM, SM, eO, rM.reportAllChanges), LM && (iM.onHidden((() => {
                QM(LM.takeRecords(), !0)
              })), Ki((() => {
                aM("back-forward-cache", SM.navigationId, SM.navigationInteractionId, SM.navigationURL, Ii())
              })))
            }))
          }((rM => {
            MM((MM => {
              if (0 === MM.entries.length) {
                const rM = MM.navigationStartTime || 0,
                  iM = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: MM.value,
                    loadState: Ai(rM)
                  };
                return Object.assign(MM, {
                  attribution: iM
                })
              }
              const rM = MM.entries[0],
                OM = aM.get(rM),
                SM = Math.max(OM.processingStart, rM.startTime),
                jM = Math.max(rM.startTime + rM.duration, SM),
                nM = Math.min(OM.processingEnd, jM),
                QM = OM.entries.sort(((MM, rM) => MM.processingStart - rM.processingStart)),
                zM = LM(rM.startTime, nM),
                mM = iM.p.get(rM.interactionId),
                HM = {
                  interactionTarget: PM.get(mM),
                  interactionType: rM.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: rM.startTime,
                  nextPaintTime: jM,
                  processedEventEntries: QM,
                  longAnimationFrameEntries: zM,
                  inputDelay: SM - rM.startTime,
                  processingDuration: nM - SM,
                  presentationDelay: jM - nM,
                  loadState: Ai(rM.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (MM => {
                const rM = MM.interactionTime,
                  iM = MM.nextPaintTime;
                if (!MM.longAnimationFrameEntries?.length || !rM || !iM) return;
                const OM = MM.inputDelay,
                  SM = MM.processingDuration;
                let jM, aM, PM = 0,
                  nM = 0,
                  QM = 0,
                  zM = 0;
                for (const HM of MM.longAnimationFrameEntries) {
                  nM = nM + HM.startTime + HM.duration - HM.styleAndLayoutStart;
                  for (const MM of HM.scripts) {
                    const iM = MM.startTime + MM.duration;
                    if (iM < rM) continue;
                    const QM = iM - Math.max(rM, MM.startTime),
                      LM = MM.duration ? QM / MM.duration * MM.forcedStyleAndLayoutDuration : 0;
                    PM += QM - LM, nM += LM, QM > zM && (aM = MM.startTime < rM + OM ? "input-delay" : MM.startTime >= rM + OM + SM ? "presentation-delay" : "processing-duration", jM = MM, zM = QM)
                  }
                }
                const LM = MM.longAnimationFrameEntries.at(-1),
                  mM = LM ? LM.startTime + LM.duration : 0;
                mM >= rM + OM + SM && (QM = iM - mM), jM && aM && (MM.longestScript = {
                  entry: jM,
                  subpart: aM,
                  intersectingDuration: zM
                }), MM.totalScriptDuration = PM, MM.totalStyleAndLayoutDuration = nM, MM.totalPaintDuration = QM, MM.totalUnattributedDuration = iM - rM - PM - nM - QM
              })(HM), Object.assign(MM, {
                attribution: HM
              })
            })(rM))
          }), rM)
      };
    class wO {
      m;
      u;
      l(MM) {
        this.m?.(MM)
      }
    }
    const tO = [2500, 4e3];
    let gO = 50;
    const uO = [];
    jO(["resource"], (MM => {
      for (const rM of MM) uO.push(rM), uO.length > gO && uO.shift()
    }));
    const RO = [800, 1800],
      pO = MM => {
        document.prerendering ? zO((() => pO(MM))) : "complete" !== document.readyState ? addEventListener("load", (() => pO(MM)), !0) : setTimeout(MM)
      },
      WO = "load_state",
      sO = "time_to_first_byte";
    var DO = class {
        constructor(MM, rM) {
          this.corePushMeasurement = MM, this.webVitalConfig = rM
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var MM;
          ! function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const iM = Bi(rM = Object.assign({}, rM), Yi),
              OM = new WeakMap;
            iM.t = MM => {
                if (MM?.sources?.length) {
                  const iM = hO(MM.sources),
                    SM = iM?.node;
                  if (SM) {
                    const MM = rM.generateTarget?.(SM) ?? vi(SM);
                    OM.set(iM, MM)
                  }
                }
              },
              function(MM) {
                let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const iM = OO();
                mO(nO((() => {
                  let OM, SM = SO("CLS", 0);
                  const jM = Bi(rM, Yi),
                    aM = (iM, aM, PM, nM, QM) => {
                      SM = SO("CLS", 0, iM, aM, PM, nM, QM), jM.o = 0, OM = qi(MM, SM, HO, rM.reportAllChanges)
                    },
                    PM = function() {
                      let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      jM.o > SM.value && (SM.value = jM.o, SM.entries = jM.i), OM(MM)
                    },
                    nM = MM => {
                      PM(!0), aM("soft-navigation", MM.navigationId, MM.interactionId, MM.name, MM.startTime)
                    },
                    QM = MM => {
                      for (const rM of MM) "soft-navigation" !== rM.entryType ? jM.l(rM) : nM(rM);
                      PM()
                    },
                    zM = ["layout-shift"];
                  aO(rM) && zM.push("soft-navigation");
                  const LM = jO(zM, QM);
                  LM && (OM = qi(MM, SM, HO, rM.reportAllChanges), iM.onHidden((() => {
                    QM(LM.takeRecords()), OM(!0)
                  })), Ki((() => {
                    aM("back-forward-cache", SM.navigationId, SM.navigationInteractionId, SM.navigationURL, Ii()), Ti(OM)
                  })), setTimeout(OM))
                })))
              }((rM => {
                MM((MM => {
                  let rM = {};
                  if (MM.entries.length) {
                    const iM = MM.entries.reduce(((MM, rM) => MM.value > rM.value ? MM : rM));
                    if (iM?.sources?.length) {
                      const MM = hO(iM.sources);
                      MM && (rM = {
                        largestShiftTarget: OM.get(MM),
                        largestShiftTime: iM.startTime,
                        largestShiftValue: iM.value,
                        largestShiftSource: MM,
                        largestShiftEntry: iM,
                        loadState: Ai(iM.startTime)
                      })
                    }
                  }
                  return Object.assign(MM, {
                    attribution: rM
                  })
                })(rM))
              }), rM)
          }((MM => {
            const {
              loadState: rM,
              largestShiftValue: iM,
              largestShiftTime: OM,
              largestShiftTarget: SM
            } = MM.attribution, jM = this.buildInitialValues(MM);
            this.addIfPresent(jM, "largest_shift_value", iM), this.addIfPresent(jM, "largest_shift_time", OM);
            const aM = this.buildInitialContext(MM);
            this.addIfPresent(aM, WO, rM), this.addIfPresent(aM, "largest_shift_target", SM), this.pushMeasurement(jM, aM)
          }), {
            reportAllChanges: null === (MM = this.webVitalConfig) || void 0 === MM ? void 0 : MM.reportAllChanges
          })
        }
        measureFCP() {
          var MM;
          ! function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const iM = Bi(rM = Object.assign({}, rM), QO);
            aO(rM) && (iM.u = new Map), mO((rM => {
              MM((MM => {
                let rM = {
                  timeToFirstByte: 0,
                  firstByteToFCP: MM.value,
                  loadState: Ai(Ii())
                };
                if ("soft-navigation" !== MM.navigationType) {
                  if (MM.entries.length) {
                    const iM = Ni(),
                      OM = MM.entries.at(-1);
                    if (iM) {
                      const SM = iM.responseStart,
                        jM = iM.activationStart || 0,
                        aM = Math.max(0, SM - jM);
                      rM = {
                        timeToFirstByte: aM,
                        firstByteToFCP: MM.value - aM,
                        loadState: Ai(MM.entries[0].startTime),
                        navigationEntry: iM,
                        fcpEntry: OM
                      }
                    }
                  }
                } else {
                  const OM = iM.u?.get(MM.navigationId);
                  OM && (rM = {
                    timeToFirstByte: 0,
                    firstByteToFCP: MM.value,
                    loadState: "complete",
                    navigationEntry: OM
                  })
                }
                return Object.assign(MM, {
                  attribution: rM
                })
              })(rM))
            }), rM)
          }((MM => {
            const {
              firstByteToFCP: rM,
              timeToFirstByte: iM,
              loadState: OM
            } = MM.attribution, SM = this.buildInitialValues(MM);
            this.addIfPresent(SM, "first_byte_to_fcp", rM), this.addIfPresent(SM, sO, iM);
            const jM = this.buildInitialContext(MM);
            this.addIfPresent(jM, WO, OM), this.pushMeasurement(SM, jM)
          }), {
            reportAllChanges: null === (MM = this.webVitalConfig) || void 0 === MM ? void 0 : MM.reportAllChanges
          })
        }
        measureINP() {
          var MM;
          bO((MM => {
            var rM;
            const {
              interactionTime: iM,
              presentationDelay: OM,
              inputDelay: SM,
              processingDuration: jM,
              nextPaintTime: aM,
              loadState: PM,
              interactionTarget: nM,
              interactionType: QM,
              totalScriptDuration: zM,
              totalStyleAndLayoutDuration: LM,
              totalPaintDuration: mM,
              totalUnattributedDuration: HM,
              longestScript: hM
            } = MM.attribution, JM = this.buildInitialValues(MM);
            this.addIfPresent(JM, "interaction_time", iM), this.addIfPresent(JM, "presentation_delay", OM), this.addIfPresent(JM, "input_delay", SM), this.addIfPresent(JM, "processing_duration", jM), this.addIfPresent(JM, "next_paint_time", aM), this.addNumberIfDefined(JM, "total_script_duration", zM), this.addNumberIfDefined(JM, "total_style_and_layout_duration", LM), this.addNumberIfDefined(JM, "total_paint_duration", mM), this.addNumberIfDefined(JM, "total_unattributed_duration", HM), this.addNumberIfDefined(JM, "longest_script_intersecting_duration", null === hM || void 0 === hM ? void 0 : hM.intersectingDuration);
            const dM = this.buildInitialContext(MM);
            this.addIfPresent(dM, WO, PM), this.addIfPresent(dM, "interaction_target", nM), this.addIfPresent(dM, "interaction_type", QM), this.addIfPresent(dM, "longest_script_subpart", null === hM || void 0 === hM ? void 0 : hM.subpart), this.addIfPresent(dM, "longest_script_invoker_type", null === hM || void 0 === hM ? void 0 : hM.entry.invokerType), (null === (rM = this.webVitalConfig) || void 0 === rM ? void 0 : rM.trackAttributionSources) && (this.addIfPresent(dM, "longest_script_invoker", null === hM || void 0 === hM ? void 0 : hM.entry.invoker), this.addIfPresent(dM, "longest_script_source_url", null === hM || void 0 === hM ? void 0 : hM.entry.sourceURL), this.addIfPresent(dM, "longest_script_source_function_name", null === hM || void 0 === hM ? void 0 : hM.entry.sourceFunctionName), this.addIfPresent(dM, "longest_script_source_char_position", void 0 !== (null === hM || void 0 === hM ? void 0 : hM.entry.sourceCharPosition) ? String(hM.entry.sourceCharPosition) : void 0)), this.pushMeasurement(JM, dM)
          }), {
            reportAllChanges: null === (MM = this.webVitalConfig) || void 0 === MM ? void 0 : MM.reportAllChanges
          })
        }
        measureLCP() {
          var MM;
          ! function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (rM = Object.assign({}, rM)).resourceBufferSize && (gO = rM.resourceBufferSize);
            const iM = Bi(rM, wO),
              OM = new WeakMap;
            aO(rM) && (iM.u = new Map), iM.m = MM => {
                const iM = MM.element;
                if (iM) {
                  const SM = rM.generateTarget?.(iM) ?? vi(iM);
                  OM.set(MM, SM)
                } else MM.id && OM.set(MM, `#${MM.id}`)
              },
              function(MM) {
                let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  iM = !1;
                const OM = aO(rM);
                zO((() => {
                  let SM, jM = OO(),
                    aM = SO("LCP");
                  const PM = Bi(rM, wO),
                    nM = (OM, PM, nM, QM, zM) => {
                      aM = SO("LCP", -1, OM, PM, nM, QM, zM), SM = qi(MM, aM, tO, rM.reportAllChanges), iM = !1, "soft-navigation" === OM && (jM = OO(!0))
                    },
                    QM = MM => {
                      PM.u && MM.navigationId && PO(PM.u, MM), iM || SM(!0), nM("soft-navigation", MM.navigationId, MM.interactionId, MM.name, MM.startTime);
                      const rM = MM.getLargestInteractionContentfulPaint?.();
                      rM && zM([rM])
                    },
                    zM = MM => {
                      rM.reportAllChanges || OM || (MM = MM.slice(-1));
                      for (const rM of MM) {
                        if (!rM) continue;
                        if ("soft-navigation" === rM.entryType) {
                          QM(rM);
                          continue
                        }
                        let MM = 0,
                          iM = [],
                          OM = rM.startTime;
                        if ("largest-contentful-paint" === rM.entryType) MM = Math.max(rM.startTime - Vi(), 0), PM.l(rM), iM = [rM];
                        else if ("interaction-contentful-paint" === rM.entryType) {
                          const SM = rM;
                          if (!aM.navigationId) continue;
                          if ("interactionId" in SM && SM.interactionId != aM.navigationInteractionId) continue;
                          OM = SM.largestContentfulPaint?.renderTime || 0, MM = Math.max(OM - rM.startTime, 0), SM.largestContentfulPaint && (PM.l(SM.largestContentfulPaint), iM = [SM.largestContentfulPaint])
                        }
                        OM < jM.firstHiddenTime && (aM.value = MM, aM.entries = iM, SM())
                      }
                    },
                    LM = ["largest-contentful-paint"];
                  OM && LM.push("interaction-contentful-paint", "soft-navigation");
                  const mM = jO(LM, zM);
                  if (mM) {
                    SM = qi(MM, aM, tO, rM.reportAllChanges);
                    const jM = ["keydown", "click", "visibilitychange"],
                      PM = MM => {
                        if (MM.isTrusted && !iM) {
                          const MM = aM.id;
                          CO((() => {
                            if (!iM) {
                              if (!OM) {
                                mM.disconnect();
                                for (const MM of jM) removeEventListener(MM, PM, {
                                  capture: !0
                                })
                              }
                              MM === aM.id && (iM = !0, SM(!0))
                            }
                          }))
                        }
                      };
                    for (const MM of jM) addEventListener(MM, PM, {
                      capture: !0
                    });
                    Ki((OM => {
                      nM("back-forward-cache", aM.navigationId, aM.navigationInteractionId, aM.navigationURL, Ii()), SM = qi(MM, aM, tO, rM.reportAllChanges), Ti((() => {
                        aM.value = performance.now() - OM.timeStamp, iM = !0, SM(!0)
                      }))
                    }))
                  }
                }))
              }((rM => {
                MM((MM => {
                  let rM = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: MM.value
                  };
                  if (MM.entries.length) {
                    const SM = MM.entries.at(-1),
                      jM = MM => MM.name === SM.url && (MM.requestStart || MM.startTime) <= SM.startTime,
                      aM = SM.url && (uO.findLast(jM) || performance.getEntriesByType("resource").findLast(jM));
                    let PM;
                    rM.target = OM.get(SM), rM.lcpEntry = SM, SM.url && (rM.url = SM.url), aM && (rM.lcpResourceEntry = aM);
                    let nM = 0,
                      QM = 0;
                    if ("soft-navigation" !== MM.navigationType ? (PM = Ni(), nM = PM?.activationStart ?? 0, QM = PM?.responseStart ?? 0) : (nM = MM.navigationStartTime || 0, PM = iM.u?.get(MM.navigationId)), PM) {
                      const iM = Math.max(0, QM - nM),
                        OM = Math.max(iM, aM ? (aM.requestStart || aM.startTime) - nM : 0),
                        SM = Math.min(MM.value, Math.max(OM, aM ? aM.responseEnd - nM : 0));
                      rM = {
                        ...rM,
                        timeToFirstByte: iM,
                        resourceLoadDelay: OM - iM,
                        resourceLoadDuration: SM - OM,
                        elementRenderDelay: MM.value - SM,
                        navigationEntry: PM
                      }
                    }
                  }
                  return Object.assign(MM, {
                    attribution: rM
                  })
                })(rM))
              }), rM)
          }((MM => {
            var rM;
            const {
              elementRenderDelay: iM,
              resourceLoadDelay: OM,
              resourceLoadDuration: SM,
              timeToFirstByte: jM,
              target: aM,
              url: PM,
              lcpResourceEntry: nM
            } = MM.attribution, QM = this.buildInitialValues(MM);
            this.addIfPresent(QM, "element_render_delay", iM), this.addIfPresent(QM, "resource_load_delay", OM), this.addIfPresent(QM, "resource_load_duration", SM), this.addIfPresent(QM, sO, jM);
            const zM = this.buildInitialContext(MM);
            this.addIfPresent(zM, "element", aM), (null === (rM = this.webVitalConfig) || void 0 === rM ? void 0 : rM.trackAttributionSources) && (this.addIfPresent(zM, "resource_url", PM), this.addIfPresent(zM, "resource_delivery_type", null === nM || void 0 === nM ? void 0 : nM.deliveryType), this.addIfPresent(zM, "resource_initiator_type", null === nM || void 0 === nM ? void 0 : nM.initiatorType)), this.pushMeasurement(QM, zM)
          }), {
            reportAllChanges: null === (MM = this.webVitalConfig) || void 0 === MM ? void 0 : MM.reportAllChanges
          })
        }
        measureTTFB() {
          var MM;
          ! function(MM) {
            ! function(MM) {
              let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const iM = aO(rM);
              let OM = SO("TTFB"),
                SM = qi(MM, OM, RO, rM.reportAllChanges);
              pO((() => {
                const jM = Ni();
                if (jM) {
                  const aM = jM.responseStart;
                  OM.value = Math.max(aM - Vi(), 0), OM.entries = [jM], SM(!0), Ki((() => {
                    OM = SO("TTFB", 0, "back-forward-cache", OM.navigationId, OM.navigationInteractionId, OM.navigationURL, Ii()), SM = qi(MM, OM, RO, rM.reportAllChanges), SM(!0)
                  })), iM && jO(["soft-navigation"], (iM => {
                    iM.forEach((iM => {
                      iM.navigationId && (OM = SO("TTFB", 0, "soft-navigation", iM.navigationId, iM.interactionId, iM.name, iM.startTime), OM.entries = [iM], SM = qi(MM, OM, RO, rM.reportAllChanges), SM(!0))
                    }))
                  }), rM)
                }
              }))
            }((rM => {
              MM((MM => {
                const rM = MM.entries[0];
                let iM = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: rM
                };
                if (MM.entries.length && rM instanceof PerformanceNavigationTiming) {
                  const OM = rM.activationStart || 0,
                    SM = Math.max((rM.workerStart || rM.fetchStart || 0) - OM, 0),
                    jM = Math.max(rM.domainLookupStart - OM, 0),
                    aM = Math.max(rM.connectStart - OM, 0),
                    PM = Math.max(rM.connectEnd - OM, 0);
                  iM = {
                    waitingDuration: SM,
                    cacheDuration: jM - SM,
                    dnsDuration: aM - jM,
                    connectionDuration: PM - aM,
                    requestDuration: MM.value - PM,
                    navigationEntry: rM
                  }
                }
                return Object.assign(MM, {
                  attribution: iM
                })
              })(rM))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((MM => {
            const {
              dnsDuration: rM,
              connectionDuration: iM,
              requestDuration: OM,
              waitingDuration: SM,
              cacheDuration: jM
            } = MM.attribution, aM = this.buildInitialValues(MM);
            this.addIfPresent(aM, "dns_duration", rM), this.addIfPresent(aM, "connection_duration", iM), this.addIfPresent(aM, "request_duration", OM), this.addIfPresent(aM, "waiting_duration", SM), this.addIfPresent(aM, "cache_duration", jM);
            const PM = this.buildInitialContext(MM);
            this.pushMeasurement(aM, PM)
          }), {
            reportAllChanges: null === (MM = this.webVitalConfig) || void 0 === MM ? void 0 : MM.reportAllChanges
          })
        }
        buildInitialValues(MM) {
          return {
            [MM.name.toLowerCase()]: MM.value,
            delta: MM.delta
          }
        }
        buildInitialContext(MM) {
          var rM;
          const iM = null !== (rM = Mr("com.grafana.faro.lastNavigationId", TM)) && void 0 !== rM ? rM : oi;
          return {
            id: MM.id,
            rating: MM.rating,
            navigation_type: MM.navigationType,
            navigation_entry_id: iM
          }
        }
        pushMeasurement(MM, rM) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: MM
          }, {
            context: rM
          })
        }
        addIfPresent(MM, rM, iM) {
          iM && (MM[rM] = iM)
        }
        addNumberIfDefined(MM, rM, iM) {
          void 0 !== iM && (MM[rM] = iM)
        }
      },
      kO = class extends ri {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ii
        }
        initialize() {
          this.logDebug("Initializing"), new DO(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const ZO = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function oO() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const rM of MM)
        if ("traceparent" === rM.name) {
          if (!ZO.test(rM.description)) continue;
          const [, MM, iM] = rM.description.split("-");
          if (null != MM && null != iM) return {
            traceId: MM,
            spanId: iM
          };
          break
        }
    }

    function fO(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: iM,
        monoNow: OM
      } = rM;
      return Math.min(iM, iM - (OM - MM))
    }

    function YO(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [iM, OM] of Object.entries(rM)) {
        const rM = MM[iM];
        return null != rM && (RM(OM) ? OM.includes(rM) : rM === OM)
      }
      return !0
    }

    function NO(MM) {
      const {
        connectEnd: rM,
        connectStart: iM,
        decodedBodySize: OM,
        domainLookupEnd: SM,
        domainLookupStart: jM,
        duration: aM,
        encodedBodySize: PM,
        fetchStart: nM,
        initiatorType: QM,
        name: zM,
        nextHopProtocol: LM,
        redirectEnd: mM,
        redirectStart: HM,
        renderBlockingStatus: hM,
        requestStart: JM,
        responseEnd: dM,
        responseStart: yM,
        responseStatus: lM,
        secureConnectionStart: EM,
        transferSize: UM,
        workerStart: GM
      } = MM;
      return {
        name: zM,
        httpHost: xO(zM),
        duration: vO(aM),
        tcpHandshakeTime: vO(rM - iM),
        dnsLookupTime: vO(SM - jM),
        tlsNegotiationTime: vO(rM - EM),
        responseStatus: vO(lM),
        redirectTime: vO(mM - HM),
        requestTime: vO(yM - JM),
        responseTime: vO(dM - yM),
        fetchTime: vO(dM - nM),
        serviceWorkerTime: vO(GM > 0 ? nM - GM : 0),
        decodedBodySize: vO(OM),
        encodedBodySize: vO(PM),
        cacheHitStatus: function() {
          let MM = "fullLoad";
          0 === UM ? OM > 0 && (MM = "cache") : null != lM ? 304 === lM && (MM = "conditionalFetch") : PM > 0 && UM < PM && (MM = "conditionalFetch");
          return MM
        }(),
        renderBlockingStatus: vO(hM),
        protocol: LM,
        initiatorType: QM,
        visibilityState: document.visibilityState,
        ttfb: vO(yM - JM),
        transferSize: vO(UM)
      }
    }

    function AO(MM) {
      const {
        activationStart: rM,
        domComplete: iM,
        domContentLoadedEventEnd: OM,
        domContentLoadedEventStart: SM,
        domInteractive: jM,
        fetchStart: aM,
        loadEventEnd: PM,
        loadEventStart: nM,
        responseStart: QM,
        type: zM
      } = MM, LM = function() {
        var MM;
        return null != (null === (MM = performance.timing) || void 0 === MM ? void 0 : MM.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return zr(zr({}, NO(MM)), {}, {
        pageLoadTime: vO(iM - aM),
        documentParsingTime: vO(LM ? jM - LM : null),
        domProcessingTime: vO(iM - jM),
        domContentLoadHandlerTime: vO(OM - SM),
        onLoadTime: vO(PM - nM),
        ttfb: vO(Math.max(QM - (null !== rM && void 0 !== rM ? rM : 0), 0)),
        type: zM
      })
    }

    function xO(MM) {
      try {
        return new URL(MM).host || oi
      } catch (rM) {
        return oi
      }
    }

    function vO(MM) {
      return null == MM ? oi : "number" === typeof MM ? Math.round(MM > 0 ? MM : 0).toString() : MM.toString()
    }
    const FO = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function BO(MM, rM, iM, OM, SM, jM, aM) {
      try {
        var PM = MM[jM](aM),
          nM = PM.value
      } catch (MM) {
        return void iM(MM)
      }
      PM.done ? rM(nM) : Promise.resolve(nM).then(OM, SM)
    }

    function XO(MM) {
      return function() {
        var rM = this,
          iM = arguments;
        return new Promise((function(OM, SM) {
          var jM = MM.apply(rM, iM);

          function aM(MM) {
            BO(jM, OM, SM, aM, PM, "next", MM)
          }

          function PM(MM) {
            BO(jM, OM, SM, aM, PM, "throw", MM)
          }
          aM(void 0)
        }))
      }
    }
    const IO = new Ei;
    var KO = class extends ri {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ii
      }
      initialize() {
        var MM = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let rM = !1;
        const iM = () => {
          ! function(MM) {
            if ("complete" === document.readyState) MM();
            else {
              const rM = () => {
                "complete" === document.readyState && (MM(), document.removeEventListener("readystatechange", rM))
              };
              document.addEventListener("readystatechange", rM)
            }
          }(XO((function*() {
            if (rM) return;
            const iM = MM.api.pushEvent,
              {
                faroNavigationId: OM
              } = yield function(MM) {
                let rM;
                const iM = new Promise((MM => {
                  rM = MM
                }));
                return new PerformanceObserver((iM => {
                  var OM;
                  const [SM] = iM.getEntries();
                  if (null == SM || KM(SM.name)) return;
                  const jM = SM.toJSON();
                  let aM = oO(null === jM || void 0 === jM ? void 0 : jM.serverTiming);
                  const PM = null !== (OM = Mr("com.grafana.faro.lastNavigationId", TM)) && void 0 !== OM ? OM : oi,
                    nM = zr(zr({}, AO(jM)), {}, {
                      faroNavigationId: yr(),
                      faroPreviousNavigationId: PM
                    });
                  rr("com.grafana.faro.lastNavigationId", nM.faroNavigationId, TM), MM("faro.performance.navigation", nM, void 0, {
                    spanContext: aM,
                    timestampOverwriteMs: fO(jM.startTime)
                  }), rM(nM)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), iM
              }(iM);
            rM || null == OM || function(MM, rM, iM, OM) {
              const SM = OM.trackResources;
              new PerformanceObserver((OM => {
                const jM = OM.getEntries(),
                  aM = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const PM of jM) {
                  if (KM(PM.name)) continue;
                  null === iM || void 0 === iM || iM.notify({
                    type: "resource"
                  });
                  const OM = PM.toJSON();
                  let jM = oO(null === OM || void 0 === OM ? void 0 : OM.serverTiming);
                  (null == SM && YO(OM, FO) || SM) && rM("faro.performance.resource", zr(zr({}, NO(OM)), {}, {
                    faroNavigationId: MM,
                    faroResourceId: yr()
                  }), void 0, {
                    spanContext: jM,
                    timestampOverwriteMs: fO(OM.startTime, aM)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(OM, iM, IO, MM.config)
          })))
        };
        this.cancelInitialization = () => {
          rM = !0, document.removeEventListener("prerenderingchange", iM)
        }, document.prerendering ? document.addEventListener("prerenderingchange", iM, {
          once: !0
        }) : iM()
      }
      destroy() {
        var MM;
        null === (MM = this.cancelInitialization) || void 0 === MM || MM.call(this), this.cancelInitialization = void 0
      }
    };
    const qO = "data-faro-user-action-name",
      TO = qO.replace(/-name$/, "-timeout"),
      VO = 1e3;

    function cO(MM) {
      return `data-${(MM.startsWith("data-")?MM.slice(5):MM).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function MS(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vr;
      if (void 0 === MM) return rM;
      let OM = NaN;
      try {
        OM = "string" === typeof MM && "" === MM.trim() ? NaN : Number(MM)
      } catch (SM) {}
      return !Number.isFinite(OM) || OM <= 0 ? (iM(`initialActivityTimeout must be a finite number greater than zero; using ${rM} ms`), rM) : OM > 1e3 ? (iM(`initialActivityTimeout cannot exceed ${VO} ms; clamping to the maximum`), VO) : OM
    }

    function rS(MM, rM, iM) {
      return void 0 !== MM && window.clearTimeout(MM), window.setTimeout((() => {
        rM()
      }), iM)
    }

    function iS(MM) {
      return MM.type === li
    }
    let OS, SS;

    function jS() {
      return OS || (OS = new Ei), SS || (SS = new MutationObserver(((MM, rM) => {
        OS.notify({
          type: "dom-mutation"
        })
      })), SS.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), OS
    }
    const aS = "fetch",
      PS = "xhr";
    let nS, QS, zS, LS, mS = !1;

    function HS() {
      if (nS) return nS;

      function MM(MM) {
        nS.notify({
          type: yi,
          request: MM
        })
      }

      function rM(MM) {
        nS.notify({
          type: li,
          request: MM
        })
      }
      return nS = new Ei, mS || (! function(MM) {
        let {
          onRequestEnd: rM,
          onRequestStart: iM
        } = MM;
        zS || (zS = window.fetch);
        window.fetch = function() {
          var MM, OM;
          const SM = null !== (MM = qM(arguments[0])) && void 0 !== MM ? MM : "",
            jM = KM(SM),
            aM = (null !== (OM = arguments[1]) && void 0 !== OM ? OM : {}).method,
            PM = yr();
          return jM || iM({
            url: SM,
            method: aM,
            requestId: PM,
            apiType: aS
          }), zS.apply(this, arguments).then((MM => (jM || rM({
            url: SM,
            method: aM,
            requestId: PM,
            apiType: aS
          }), MM))).catch((MM => {
            throw jM || rM({
              url: SM,
              method: aM,
              requestId: PM,
              apiType: aS
            }), MM
          }))
        }
      }({
        onRequestStart: MM,
        onRequestEnd: rM
      }), function(MM) {
        let {
          onRequestStart: rM,
          onRequestEnd: iM
        } = MM;
        QS || (QS = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const MM = arguments[1],
            OM = KM(MM),
            SM = arguments[0],
            jM = yr();
          this.addEventListener("loadstart", (function() {
            OM || rM({
              url: MM,
              method: SM,
              requestId: jM,
              apiType: PS
            })
          })), this.addEventListener("load", (function() {
            OM || iM({
              url: MM,
              method: SM,
              requestId: jM,
              apiType: PS
            })
          })), this.addEventListener("error", (function() {
            OM || iM({
              url: MM,
              method: SM,
              requestId: jM,
              apiType: PS
            })
          })), this.addEventListener("abort", (function() {
            OM || iM({
              url: MM,
              method: SM,
              requestId: jM,
              apiType: PS
            })
          })), QS.apply(this, arguments)
        }
      }({
        onRequestStart: MM,
        onRequestEnd: rM
      }), mS = !0), nS
    }
    let hS, JS = !1;
    let dS = function(MM) {
      return MM[MM.Started = 0] = "Started", MM[MM.Halted = 1] = "Halted", MM[MM.Cancelled = 2] = "Cancelled", MM[MM.Ended = 3] = "Ended", MM
    }({});
    var yS = class {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = MM, this.logDebug = rM, this.initialActivityTimeout = iM, this.http = HS(), this.dom = jS(), this.perf = (LS || (LS = new Ei), JS || (hS = IO.subscribe((MM => {
          "resource" === MM.type && LS.notify({
            type: "resource-entry"
          })
        })), JS = !0), LS), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Ei).merge(this.http, this.dom, this.perf).takeWhile((() => [dS.Started, dS.Halted].includes(this.userAction.getState()))).filter((MM => !!(this.userAction.getState() !== dS.Halted || iS(MM) && this.runningRequests.has(MM.request.requestId)))).subscribe((MM => {
          (function(MM) {
            return MM.type === yi
          })(MM) && this.runningRequests.set(MM.request.requestId, MM.request), iS(MM) && this.runningRequests.delete(MM.request.requestId), iS(MM) ? this.userAction.getState() === dS.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((MM => [dS.Ended, dS.Cancelled].includes(MM))).first().subscribe((() => this.cleanup())), this.startupTid = rS(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === dS.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === dS.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = rS(this.haltTid, (() => {
          this.userAction.getState() === dS.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var MM, rM;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (MM = this.allMonitorsSub) || void 0 === MM || MM.unsubscribe(), null === (rM = this.stateSub) || void 0 === rM || rM.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(MM) {
        void 0 !== MM && window.clearTimeout(MM)
      }
    };

    function lS(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vr;
      var iM;
      const {
        api: OM,
        config: SM,
        internalLogger: jM
      } = MM, aM = MS(null === (iM = SM.userActionsInstrumentation) || void 0 === iM ? void 0 : iM.initialActivityTimeout, 100, rM);
      return {
        processUserEvent: function(MM) {
          var rM, iM;
          const jM = null !== (rM = null === (iM = SM.userActionsInstrumentation) || void 0 === iM ? void 0 : iM.dataAttributeName) && void 0 !== rM ? rM : qO,
            aM = MM.target;
          if (!(aM instanceof Element)) return;
          const PM = function(MM, rM) {
              let iM = MM;
              for (; iM;) {
                if (iM.hasAttribute(rM)) return iM;
                iM = iM.parentElement
              }
              return null
            }(aM, cO(jM)),
            nM = function(MM, rM) {
              if (!MM) return;
              const iM = function(MM) {
                  return cO(MM).slice(5).replace(/-(.)/g, ((MM, rM) => rM.toUpperCase()))
                }(rM),
                OM = MM.dataset;
              for (const SM in OM)
                if (SM === iM) return OM[SM]
            }(PM, jM);
          if (!PM || !nM) return;
          const QM = function(MM, rM) {
            const iM = MM.getAttribute(function(MM) {
              const rM = cO(MM);
              return rM.endsWith("-name") ? `${rM.slice(0,-5)}-timeout` : `${rM}-timeout`
            }(rM));
            return null === iM ? void 0 : Number(iM)
          }(PM, jM);
          OM.startUserAction(nM, {}, {
            triggerName: MM.type,
            initialActivityTimeout: QM
          })
        },
        processUserActionStarted: function(MM, iM) {
          const OM = MM,
            SM = MS(iM, aM, rM);
          new yS(OM, jM.debug, SM).attach()
        }
      }
    }
    const ES = "user_action_start",
      US = {
        Normal: "normal",
        Critical: "critical"
      };
    var GS = class {
        constructor() {
          this.buffer = []
        }
        addItem(MM) {
          this.buffer.push(MM)
        }
        flushBuffer(MM) {
          if (uM(MM))
            for (const rM of this.buffer) MM(rM);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      CS = class extends Ei {
        constructor(MM) {
          let {
            name: rM,
            parentId: iM,
            trigger: OM,
            transports: SM,
            attributes: jM,
            trackUserActionsExcludeItem: aM,
            importance: PM = US.Normal,
            pushEvent: nM
          } = MM;
          super(), this.name = rM, this.attributes = jM, this.id = yr(), this.trigger = OM, this.parentId = null !== iM && void 0 !== iM ? iM : this.id, this.trackUserActionsExcludeItem = aM, this.importance = PM, this._pushEvent = nM, this._itemBuffer = new GS, this._transports = SM, this._state = 0, this._start()
        }
        addItem(MM) {
          return 0 === this._state && (this._itemBuffer.addItem(MM), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = mr(), this._startTimeMono = Hr())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((MM => {
            this._transports.execute(MM)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const MM = mr(),
            rM = Hr() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((MM => {
            if (function(MM, rM) {
                return (null === rM || void 0 === rM ? void 0 : rM(MM)) || "measurement" === MM.type && "web-vitals" === MM.payload.type
              }(MM, this.trackUserActionsExcludeItem)) return void this._transports.execute(MM);
            const rM = Vr(Vr({}, MM), {}, {
              payload: Vr(Vr({}, MM.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(rM)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Vr({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: MM.toString(),
            userActionDuration: rM.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Zr(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: MM => (MM.action = {
              id: this.id,
              name: this.name
            }, MM)
          })
        }
        getState() {
          return this._state
        }
      };
    const eS = new Ei;

    function bS(MM, rM) {
      return !!MM && (0 === (null === MM || void 0 === MM ? void 0 : MM.getState()) && (MM.addItem(rM), !0))
    }
    var wS = class extends ri {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ii
        }
        initialize() {
          const {
            processUserEvent: MM,
            processUserActionStarted: rM
          } = lS(JM, (MM => this.logWarn(MM)));
          this._processUserEvent = MM, this._processKeydown = rM => {
            [" ", "Enter"].includes(rM.key) && MM(rM)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = eS.subscribe((MM => {
            let {
              type: iM,
              userAction: OM,
              initialActivityTimeout: SM
            } = MM;
            "user_action_start" === iM && rM(OM, SM)
          }))
        }
        destroy() {
          var MM;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (MM = this._userActionSub) || void 0 === MM || MM.unsubscribe()
        }
      },
      tS = class extends ri {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ii, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(MM) {
          const rM = {
            blockedURI: MM.blockedURI,
            columnNumber: MM.columnNumber,
            disposition: MM.disposition,
            documentURI: MM.documentURI,
            effectiveDirective: MM.effectiveDirective,
            lineNumber: MM.lineNumber,
            originalPolicy: MM.originalPolicy,
            referrer: MM.referrer,
            sample: MM.sample,
            sourceFile: MM.sourceFile,
            statusCode: MM.statusCode,
            violatedDirective: MM.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Zr(rM))
        }
      };
    var gS = class extends Ei {
      constructor(MM, rM) {
        var iM, OM, SM, jM;
        super(), this._tracking = !1, this.eventsObservable = MM, this._options = {
          inactivityMs: null !== (iM = null === rM || void 0 === rM ? void 0 : rM.inactivityMs) && void 0 !== iM ? iM : 100,
          drainTimeoutMs: null !== (OM = null === rM || void 0 === rM ? void 0 : rM.drainTimeoutMs) && void 0 !== OM ? OM : 1e4,
          isOperationStart: null !== (SM = null === rM || void 0 === rM ? void 0 : rM.isOperationStart) && void 0 !== SM ? SM : () => {},
          isOperationEnd: null !== (jM = null === rM || void 0 === rM ? void 0 : rM.isOperationEnd) && void 0 !== jM ? jM : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((MM => {
          var rM;
          this._lastEventTime = Hr(), null === (rM = this._currentEvents) || void 0 === rM || rM.push(MM);
          const iM = this._options.isOperationStart(MM);
          var OM;
          iM && (null === (OM = this._activeOperations) || void 0 === OM || OM.set(iM, !0));
          const SM = this._options.isOperationEnd(MM);
          var jM;
          SM && (null === (jM = this._activeOperations) || void 0 === jM || jM.delete(SM));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Hr(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let MM;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), MM = this.hasActiveOperations() ? Hr() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: MM
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = uS(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = uS(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(MM) {
        MM && clearTimeout(MM)
      }
    };

    function uS(MM, rM, iM) {
      return MM && clearTimeout(MM), MM = setTimeout((() => {
        rM()
      }), iM)
    }
    let RS;
    const pS = new Set,
      WS = new Map;
    let sS, DS, kS, ZS, oS, fS, YS, NS, AS = !1;
    var xS = class extends ri {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ii
      }
      initialize() {
        const MM = HS(),
          rM = jS(),
          iM = function() {
            function MM(MM, rM) {
              const iM = null !== rM && void 0 !== rM ? rM : location.href;
              iM !== DS && (sS.notify({
                type: "url-change",
                from: DS,
                to: iM,
                trigger: MM
              }), DS = iM)
            }
            if (sS || (sS = new Ei, DS = location.href), !AS)
              if ("navigation" in window && "NavigateEvent" in window) {
                YS = rM => {
                  try {
                    const iM = null === rM || void 0 === rM ? void 0 : rM.destination;
                    (null === iM || void 0 === iM ? void 0 : iM.sameDocument) && "string" === typeof iM.url && MM("navigate", iM.url)
                  } catch (iM) {}
                }, window.navigation.addEventListener("navigate", YS);
                const rM = window.NavigateEvent;
                rM && rM.prototype && "function" === typeof rM.prototype.intercept && (NS || (NS = rM.prototype.intercept), rM.prototype.intercept = function(rM) {
                  try {
                    const rM = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      iM = null === this || void 0 === this ? void 0 : this.destination;
                    rM && iM && !1 === iM.sameDocument && "string" === typeof iM.url && MM("navigate-intercept", iM.url)
                  } catch (iM) {}
                  return NS.call(this, rM)
                }), AS = !0
              } else kS || (kS = window.history.pushState), window.history.pushState = function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                const SM = kS.apply(window.history, iM);
                return MM("pushState"), SM
              }, ZS || (ZS = window.history.replaceState), window.history.replaceState = function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                const SM = ZS.apply(window.history, iM);
                return MM("replaceState"), SM
              }, oS = () => MM("popstate"), fS = () => MM("hashchange"), window.addEventListener("popstate", oS), window.addEventListener("hashchange", fS), AS = !0;
            return sS
          }(),
          OM = (SM = ["pointerdown", "keydown"], RS || (RS = new Ei), SM.forEach((MM => {
            if (!pS.has(MM)) {
              const rM = () => {
                RS.notify({
                  type: "interaction",
                  name: MM
                })
              };
              window.addEventListener(MM, rM), pS.add(MM), WS.set(MM, rM)
            }
          })), RS);
        var SM;
        const jM = new gS((new Ei).merge(MM, rM, iM), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: MM => function(MM) {
            return MM.type === yi
          }(MM) ? MM.request.requestId : void 0,
          isOperationEnd: MM => function(MM) {
            return MM.type === li
          }(MM) ? MM.request.requestId : void 0
        });
        jM.filter((MM => "tracking-ended" === MM.message)).subscribe((MM => {
          var rM, iM;
          if ((null === (rM = MM.events) || void 0 === rM ? void 0 : rM.some((MM => "url-change" === MM.type))) && (null === (iM = MM.events) || void 0 === iM ? void 0 : iM.some((MM => "dom-mutation" === MM.type)))) {
            var OM;
            const rM = null === (OM = MM.events) || void 0 === OM ? void 0 : OM.find((MM => "url-change" === MM.type));
            JM.api.pushEvent("faro.navigation", {
              fromUrl: null === rM || void 0 === rM ? void 0 : rM.from,
              toUrl: null === rM || void 0 === rM ? void 0 : rM.to,
              sameDocument: String(!0),
              duration: MM.duration
            })
          }
        })), OM.subscribe((() => {
          jM.startTracking()
        }))
      }
    };

    function vS() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const rM = [new wS, new Zi, new kO, new Oi, new fi, new xS];
      return !1 !== MM.enablePerformanceInstrumentation && rM.unshift(new KO), !1 !== MM.enableContentSecurityPolicyInstrumentation && rM.push(new tS), !1 !== MM.captureConsole && rM.push(new Di), rM
    }
    var FS = iM(7161);
    let BS, XS;

    function IS() {
      const MM = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return BS === MM && XS || (XS = new FS.UAParser(MM).getResult(), BS = MM), XS
    }
    const KS = () => {
        const {
          browser: MM,
          os: rM,
          ua: iM
        } = IS(), {
          name: OM,
          version: SM
        } = MM, {
          name: jM,
          version: aM
        } = rM, PM = navigator.language, nM = iM.includes("Mobi"), QM = function() {
          if (!OM || !SM) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== OM && void 0 !== OM ? OM : oi,
            version: null !== SM && void 0 !== SM ? SM : oi,
            os: `${null!==jM&&void 0!==jM?jM:oi} ${null!==aM&&void 0!==aM?aM:oi}`,
            userAgent: null !== iM && void 0 !== iM ? iM : oi,
            language: null !== PM && void 0 !== PM ? PM : oi,
            mobile: nM,
            brands: null !== QM && void 0 !== QM ? QM : oi,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      qS = () => {
        const {
          name: MM,
          version: rM
        } = IS().os;
        if (!MM && !rM) return {};
        const iM = {};
        return MM && (iM.name = MM), rM && (iM.version = rM), {
          os: iM
        }
      };

    function TS(MM) {
      var rM, iM, OM;
      return {
        id: null !== (rM = null === (iM = JM.config) || void 0 === iM || null === (iM = iM.sessionTracking) || void 0 === iM || null === (OM = iM.generateSessionId) || void 0 === OM ? void 0 : OM.call(iM)) && void 0 !== rM ? rM : yr(),
        attributes: MM
      }
    }
    const VS = () => ({
      sdk: {
        name: "faro-web",
        version: ii
      }
    });
    var cS = class extends Mi {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Mj = function(MM) {
      return MM.EXCEPTION = "exception", MM.LOG = "log", MM.MEASUREMENT = "measurement", MM.TRACE = "trace", MM.EVENT = "event", MM
    }({});
    const rj = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function ij(MM, rM) {
      var iM, OM;
      if (void 0 === rM) return MM;
      if (void 0 === MM) return {
        resourceSpans: rM
      };
      const SM = null === (iM = MM.resourceSpans) || void 0 === iM ? void 0 : iM[0];
      if (void 0 === SM) return MM;
      const jM = (null === SM || void 0 === SM ? void 0 : SM.scopeSpans) || [],
        aM = (null === rM || void 0 === rM || null === (OM = rM[0]) || void 0 === OM ? void 0 : OM.scopeSpans) || [];
      return Vr(Vr({}, MM), {}, {
        resourceSpans: [Vr(Vr({}, SM), {}, {
          scopeSpans: [...jM, ...aM]
        })]
      })
    }

    function Oj(MM) {
      let rM = {
        meta: {}
      };
      return void 0 !== MM[0] && (rM.meta = MM[0].meta), MM.forEach((MM => {
        switch (MM.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const iM = rj[MM.type],
              OM = rM[iM];
            rM = Vr(Vr({}, rM), {}, {
              [iM]: void 0 === OM ? [MM.payload] : [...OM, MM.payload]
            });
            break
          }
          case "trace":
            rM = Vr(Vr({}, rM), {}, {
              traces: ij(rM.traces, MM.payload.resourceSpans)
            })
        }
      })), rM
    }
    var Sj = class extends cS {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = MM, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ii
      }
      send(MM) {
        var rM;
        return this.unpatchedConsole[null !== (rM = this.options.level) && void 0 !== rM ? rM : Ui.DEBUG]("New event", Oj([MM]))
      }
    };
    const jj = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      aj = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Pj = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      nj = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Qj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      zj = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Lj(MM) {
      let {
        weekday: rM,
        day: iM,
        month: OM,
        year: SM,
        hour: jM,
        minute: aM,
        second: PM
      } = MM;
      if (SM < 1900 || iM < 1 || jM > 23 || aM > 59 || PM > 60) return;
      const nM = 60 === PM,
        QM = new Date(0);
      return QM.setUTCFullYear(SM, OM, iM), QM.setUTCHours(jM, aM, nM ? 59 : PM, 0), QM.getUTCDay() === rM && QM.getUTCDate() === iM && QM.getUTCMonth() === OM && QM.getUTCFullYear() === SM && QM.getUTCHours() === jM && QM.getUTCMinutes() === aM && QM.getUTCSeconds() === (nM ? 59 : PM) ? QM.getTime() + (nM ? 1e3 : 0) : void 0
    }
    var mj = class {
      constructor(MM) {
        this.options = MM, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var MM = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const rM = this.sequence++;
        let iM = !1;
        return {
          deliver: function() {
            var iM = XO((function*(iM) {
              const OM = MM.options.getNow();
              let SM, jM = 0;
              for (;;) {
                var aM, PM, nM;
                const QM = MM.options.retry.maxAttempts - jM,
                  zM = yield MM.runAttempt((() => iM(QM, MM.unloading)), jM > 0);
                if (jM += zM.attemptsMade, "success" === zM.kind) return {
                  kind: "success",
                  attempts: jM,
                  elapsedTimeMs: MM.options.getNow() - OM
                };
                if (SM = zM.failure, "terminal" === zM.kind || MM.unloading) return {
                  kind: "terminal",
                  attempts: jM,
                  elapsedTimeMs: MM.options.getNow() - OM,
                  failure: SM
                };
                if (jM >= MM.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: jM,
                  elapsedTimeMs: MM.options.getNow() - OM,
                  failure: SM,
                  reason: "retries-exhausted"
                };
                if (null != zM.retryAfterMs && zM.retryAfterMs > MM.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: jM,
                  elapsedTimeMs: MM.options.getNow() - OM,
                  failure: SM,
                  reason: "retry-after-too-long"
                };
                const LM = Math.min(null !== (aM = zM.retryAfterMs) && void 0 !== aM ? aM : MM.options.retry.initialBackoffMs * Math.pow(MM.options.retry.backoffMultiplier, jM - 1), MM.options.retry.maxBackoffMs);
                if (null === (PM = (nM = MM.options).onRetry) || void 0 === PM || PM.call(nM, LM, jM + 1), yield MM.waitForTurn(rM, LM)) {
                  const rM = MM.options.retry.maxAttempts - jM,
                    SM = yield MM.runAttempt((() => iM(rM, !0)));
                  return jM += SM.attemptsMade, {
                    kind: "success" === SM.kind ? "success" : "terminal",
                    attempts: jM,
                    elapsedTimeMs: MM.options.getNow() - OM,
                    failure: "success" === SM.kind ? void 0 : SM.failure
                  }
                }
              }
            }));
            return function(MM) {
              return iM.apply(this, arguments)
            }
          }(),
          release: () => {
            iM || (iM = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const MM = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const rM of MM) rM.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((iM, OM) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const rM = () => {
                this.inProgress--, this.runNextAttempt()
              };
              MM().then((MM => {
                rM(), iM(MM)
              }), (MM => {
                rM(), OM(MM)
              }))
            },
            isRedelivery: rM
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const MM = this.options.getNow(),
            rM = this.attemptQueue.findIndex((rM => {
              let {
                isRedelivery: iM
              } = rM;
              return this.unloading || !iM || MM >= this.nextSendAt
            }));
          if (rM < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - MM)));
          const [iM] = this.attemptQueue.splice(rM, 1);
          iM.isRedelivery && !this.unloading && (this.nextSendAt = MM + 1), iM.run()
        }
      }
      waitForTurn(MM, rM) {
        const iM = Math.min(rM * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((rM => {
          this.waiting.push({
            sequence: MM,
            readyAt: this.options.getNow() + iM,
            resolve: rM
          }), this.waiting.sort(((MM, rM) => MM.readyAt === rM.readyAt ? MM.sequence - rM.sequence : MM.readyAt - rM.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const MM = this.waiting[0],
          rM = MM.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const rM = this.waiting.indexOf(MM);
          rM >= 0 && this.waiting.splice(rM, 1), MM.resolve(!1), this.scheduleNext()
        }), Math.max(0, rM - this.options.getNow()))
      }
    };

    function Hj(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if ({}.hasOwnProperty.call(MM, OM)) {
            if (rM.includes(OM)) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.includes(iM) || {}.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function hj(MM) {
      const {
        size: rM,
        concurrency: iM
      } = MM, OM = [];
      let SM = 0;
      const jM = () => {
        if (SM < iM && OM.length) {
          const {
            producer: MM,
            resolve: rM,
            reject: iM
          } = OM.shift();
          SM++, MM().then((MM => {
            SM--, jM(), rM(MM)
          }), (MM => {
            SM--, jM(), iM(MM)
          }))
        }
      };
      return {
        add: MM => {
          if (OM.length + SM >= rM) throw new Error("Task buffer full");
          return new Promise(((rM, iM) => {
            OM.push({
              producer: MM,
              resolve: rM,
              reject: iM
            }), jM()
          }))
        }
      }
    }
    const Jj = ["headers"],
      dj = ["keepalive", "signal"],
      yj = new Set([408, 425, 429, 500, 502, 503, 504]),
      lj = new Set([429, 503]);
    let Ej = 0,
      Uj = 0;
    var Gj = class extends Error {};
    var Cj = class extends cS {
      constructor(MM) {
        var rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM;
        super(), this.options = MM, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ii, this.pendingCustomSends = 0, this.getNow = null !== (rM = MM.getNow) && void 0 !== rM ? rM : Date.now, this.requestTimeoutMs = null !== (iM = MM.requestTimeoutMs) && void 0 !== iM ? iM : 1e4, this.compressionEnabled = null !== (OM = MM.requestCompression) && void 0 !== OM && OM && "undefined" !== typeof CompressionStream, MM.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new mj({
          bufferSize: null !== (SM = MM.bufferSize) && void 0 !== SM ? SM : 30,
          concurrency: null !== (jM = MM.concurrency) && void 0 !== jM ? jM : 5,
          retry: {
            maxAttempts: null !== (aM = null === (PM = MM.retry) || void 0 === PM ? void 0 : PM.maxAttempts) && void 0 !== aM ? aM : 3,
            initialBackoffMs: null !== (nM = null !== (QM = null === (zM = MM.retry) || void 0 === zM ? void 0 : zM.initialBackoffMs) && void 0 !== QM ? QM : MM.defaultRateLimitBackoffMs) && void 0 !== nM ? nM : 1e3,
            maxBackoffMs: null !== (LM = null === (mM = MM.retry) || void 0 === mM ? void 0 : mM.maxBackoffMs) && void 0 !== LM ? LM : 3e4,
            backoffMultiplier: null !== (HM = null === (hM = MM.retry) || void 0 === hM ? void 0 : hM.backoffMultiplier) && void 0 !== HM ? HM : 2
          },
          getNow: this.getNow,
          getRandom: null !== (JM = MM.getRandom) && void 0 !== JM ? JM : Math.random,
          onRetry: (MM, rM) => {
            this.logDebug(`Retrying failed request after ${MM}ms. Attempt ${rM}.`)
          }
        }), this.customPromiseBuffer = hj({
          size: null !== (dM = MM.bufferSize) && void 0 !== dM ? dM : 30,
          concurrency: null !== (yM = MM.concurrency) && void 0 !== yM ? yM : 5
        }), this.defaultPromiseBuffer = {
          add: MM => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(MM);
            const rM = this.deliveryQueue.reserve();
            if (!rM) throw new Error("Task buffer full");
            return this.runBufferedTask(rM, MM)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (MM => {
          MM.persisted && this.deliveryQueue.resume()
        })))
      }
      send(MM) {
        var rM = this;
        return XO((function*() {
          const iM = rM.promiseBuffer;
          if (iM !== rM.defaultPromiseBuffer || iM.add !== rM.defaultBufferAdd) {
            rM.pendingCustomSends++;
            try {
              yield iM.add((() => rM.deliver(MM)))
            } catch (OM) {
              rM.logError("Permanent delivery failure", {
                error: OM,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              rM.pendingCustomSends--
            }
          } else yield rM.deliver(MM)
        }))()
      }
      runBufferedTask(MM, rM) {
        return XO((function*() {
          let iM;
          try {
            return yield MM.deliver(XO((function*() {
              return iM = yield rM(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), iM
          } finally {
            MM.release()
          }
        }))()
      }
      deliver(MM) {
        var rM = this;
        return XO((function*() {
          const iM = rM.deliveryQueue.reserve();
          if (iM) try {
            const OM = yield rM.prepareRequest(MM), SM = yield iM.deliver(((MM, iM) => rM.performAttempt(OM, MM, iM)));
            "terminal" === SM.kind && rM.logError("retries-exhausted" === SM.reason ? "Delivery retries exhausted" : "Permanent delivery failure", zr(zr({}, SM.failure), {}, {
              reason: SM.reason,
              attempts: SM.attempts,
              elapsedTimeMs: SM.elapsedTimeMs
            }))
          } catch (OM) {
            rM.logError("Permanent delivery failure", {
              error: OM,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            iM.release()
          } else rM.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var MM;
        return [this.options.url].concat(null !== (MM = this.config.ignoreUrls) && void 0 !== MM ? MM : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(MM) {
        var rM = this;
        return XO((function*() {
          var iM, OM;
          const SM = Oj(MM),
            jM = null === (iM = SM.meta.session) || void 0 === iM ? void 0 : iM.id,
            aM = JSON.stringify(SM),
            PM = null !== (OM = rM.options.requestOptions) && void 0 !== OM ? OM : {},
            {
              headers: nM = {}
            } = PM,
            QM = Hj(PM, Jj),
            {
              keepalive: zM,
              signal: LM
            } = QM,
            mM = Hj(QM, dj),
            HM = {};
          for (const [MM, rM] of Object.entries(nM)) HM[MM] = "function" === typeof rM ? yield rM(): rM;
          let hM = aM,
            JM = function(MM) {
              return "undefined" === typeof TextEncoder ? MM.length : (new TextEncoder).encode(MM).byteLength
            }(aM);
          const dM = {};
          return rM.compressionEnabled && (hM = yield rM.compress(aM), JM = hM.size, dM["Content-Encoding"] = "gzip"), {
            bodySize: JM,
            sessionId: jM,
            requestInit: zr({
              method: "POST",
              headers: zr(zr(zr(zr(zr({
                "Content-Type": "application/json"
              }, dM), HM), rM.options.apiKey ? {
                "x-api-key": rM.options.apiKey
              } : {}), jM ? {
                "x-faro-session-id": jM
              } : {}), {}, {
                "Idempotency-Key": yr(20)
              }),
              body: hM
            }, mM)
          }
        }))()
      }
      performAttempt(MM, rM, iM) {
        var OM = this;
        return XO((function*() {
          var SM;
          const jM = null === (SM = OM.options.requestOptions) || void 0 === SM ? void 0 : SM.signal;
          if (null === jM || void 0 === jM ? void 0 : jM.aborted) return {
            kind: "terminal",
            failure: {
              error: jM.reason
            },
            attemptsMade: 0
          };
          let aM = 0;
          try {
            var PM;
            const SM = yield OM.fetchWithKeepaliveFallback(MM.requestInit, MM.bodySize, !!iM || (null === (PM = OM.options.requestOptions) || void 0 === PM ? void 0 : PM.keepalive), rM, (() => aM++));
            if (OM.handleResponse(SM, MM.sessionId), SM.status >= 200 && SM.status < 300) return {
              kind: "success",
              attemptsMade: aM
            };
            const jM = {
              status: SM.status
            };
            return !yj.has(SM.status) || iM ? {
              kind: "terminal",
              failure: jM,
              attemptsMade: aM
            } : {
              kind: "retry",
              failure: jM,
              attemptsMade: aM,
              retryAfterMs: lj.has(SM.status) ? OM.getRetryAfterDelayMs(SM) : void 0
            }
          } catch (nM) {
            const MM = {
              error: nM
            };
            return (null === jM || void 0 === jM ? void 0 : jM.aborted) || !OM.isFetchNetworkError(nM) || iM ? {
              kind: "terminal",
              failure: MM,
              attemptsMade: aM
            } : {
              kind: "retry",
              failure: MM,
              attemptsMade: aM
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(MM, rM, iM, OM, SM) {
        var jM = this;
        return XO((function*() {
          const aM = jM.getNow(),
            PM = jM.reserveKeepalive(rM, iM);
          try {
            return yield jM.fetchWithTimeout(zr(zr({}, MM), {}, {
              keepalive: PM.keepalive
            }), jM.requestTimeoutMs, SM)
          } catch (QM) {
            var nM;
            if (PM.keepalive && OM > 1 && jM.isFetchNetworkError(QM) && !(QM instanceof Gj) && !(null === (nM = jM.options.requestOptions) || void 0 === nM || null === (nM = nM.signal) || void 0 === nM ? void 0 : nM.aborted)) {
              jM.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const rM = jM.requestTimeoutMs - (jM.getNow() - aM);
              return jM.fetchWithTimeout(zr(zr({}, MM), {}, {
                keepalive: !1
              }), rM, SM)
            }
            throw QM
          } finally {
            PM.release()
          }
        }))()
      }
      fetchWithTimeout(MM, rM, iM) {
        var OM = this;
        return XO((function*() {
          var SM;
          const jM = null === (SM = OM.options.requestOptions) || void 0 === SM ? void 0 : SM.signal;
          if (OM.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return iM(), fetch(OM.options.url, zr(zr({}, MM), {}, {
            signal: jM
          }));
          if (rM <= 0) throw new Gj("Request timed out");
          const aM = new AbortController,
            PM = () => aM.abort(null === jM || void 0 === jM ? void 0 : jM.reason);
          null === jM || void 0 === jM || jM.addEventListener("abort", PM, {
            once: !0
          });
          let nM = !1;
          const QM = setTimeout((() => {
            nM = !0, aM.abort()
          }), rM);
          try {
            return iM(), yield fetch(OM.options.url, zr(zr({}, MM), {}, {
              signal: aM.signal
            }))
          } catch (zM) {
            if (nM && !(null === jM || void 0 === jM ? void 0 : jM.aborted)) throw new Gj("Request timed out");
            throw zM
          } finally {
            clearTimeout(QM), null === jM || void 0 === jM || jM.removeEventListener("abort", PM)
          }
        }))()
      }
      getRetryAfterDelayMs(MM) {
        const rM = MM.headers.get("Retry-After");
        if (!rM) return;
        if (/^\d+$/.test(rM)) {
          const MM = 1e3 * Number(rM);
          return Number.isFinite(MM) ? MM : Number.POSITIVE_INFINITY
        }
        const iM = this.getNow(),
          OM = function(MM, rM) {
            const iM = jj.exec(MM);
            if (iM) {
              const [, MM, rM, OM, SM, jM, aM, PM] = iM;
              return Lj({
                weekday: nj.indexOf(MM),
                day: Number(rM),
                month: zj.indexOf(OM),
                year: Number(SM),
                hour: Number(jM),
                minute: Number(aM),
                second: Number(PM)
              })
            }
            const OM = aj.exec(MM);
            if (OM) {
              const [, MM, iM, aM, PM, nM, QM, zM] = OM, LM = new Date(rM);
              if (Number.isNaN(LM.getTime())) return;
              const mM = LM.getUTCFullYear();
              let HM = 100 * Math.floor(mM / 100) + Number(PM);
              HM < mM && (HM += 100);
              const hM = zj.indexOf(aM),
                JM = {
                  month: hM,
                  day: Number(iM),
                  hour: Number(nM),
                  minute: Number(QM),
                  second: Number(zM),
                  millisecond: 0
                },
                dM = {
                  month: LM.getUTCMonth(),
                  day: LM.getUTCDate(),
                  hour: LM.getUTCHours(),
                  minute: LM.getUTCMinutes(),
                  second: LM.getUTCSeconds(),
                  millisecond: LM.getUTCMilliseconds()
                };
              return (HM > mM + 50 || HM === mM + 50 && (jM = dM, ((SM = JM).month - jM.month || SM.day - jM.day || SM.hour - jM.hour || SM.minute - jM.minute || SM.second - jM.second || SM.millisecond - jM.millisecond) > 0)) && (HM -= 100), Lj({
                weekday: Qj.indexOf(MM),
                day: Number(iM),
                month: hM,
                year: HM,
                hour: Number(nM),
                minute: Number(QM),
                second: Number(zM)
              })
            }
            var SM, jM;
            const aM = Pj.exec(MM);
            if (!aM) return;
            const [, PM, nM, QM, zM, LM, mM, HM, hM] = aM;
            return Lj({
              weekday: nj.indexOf(PM),
              day: Number(null !== QM && void 0 !== QM ? QM : zM),
              month: zj.indexOf(nM),
              year: Number(hM),
              hour: Number(LM),
              minute: Number(mM),
              second: Number(HM)
            })
          }(rM, iM);
        return null == OM ? void 0 : Math.max(0, OM - iM)
      }
      reserveKeepalive(MM, rM) {
        if (!1 === rM || MM > 6e4 || Ej + MM > 6e4 || Uj >= 9) return {
          keepalive: !1,
          release: vr
        };
        Ej += MM, Uj++;
        let iM = !1;
        return {
          keepalive: !0,
          release: () => {
            iM || (iM = !0, Ej -= MM, Uj--)
          }
        }
      }
      handleResponse(MM, rM) {
        202 === MM.status && "invalid" === MM.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), rM), MM.text().catch(vr)
      }
      isFetchNetworkError(MM) {
        return MM instanceof TypeError || MM instanceof Gj || MM instanceof DOMException && "AbortError" === MM.name
      }
      compress(MM) {
        return XO((function*() {
          const rM = [],
            iM = new ReadableStream({
              start(rM) {
                rM.enqueue((new TextEncoder).encode(MM)), rM.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: MM,
              value: OM
            } = yield iM.read();
            if (MM) return new Blob(rM);
            rM.push(OM)
          }
        }))()
      }
      extendFaroSession(MM, rM, iM) {
        var OM, SM;
        const jM = MM.sessionTracking;
        if (!(null === jM || void 0 === jM ? void 0 : jM.enabled)) return void rM("Session expired.");
        const {
          fetchUserSession: aM,
          storeUserSession: PM
        } = xr(jM), nM = null === (OM = this.metas.value.session) || void 0 === OM ? void 0 : OM.id, QM = null === (SM = aM()) || void 0 === SM ? void 0 : SM.sessionId;
        iM && iM === nM && iM === QM ? (Rr({
          fetchUserSession: aM,
          storeUserSession: PM
        })({
          forceSessionExtend: !0
        }), rM("Session expired; created new session.")) : rM("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const ej = () => {
      const MM = window.k6;
      return {
        k6: zr({
          isK6Browser: !0
        }, (null === MM || void 0 === MM ? void 0 : MM.testRunId) && {
          testRunId: null === MM || void 0 === MM ? void 0 : MM.testRunId
        })
      }
    };
    let bj, wj;

    function tj() {
      let {
        generatePageId: MM,
        initialPageMeta: rM
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const iM = location.href;
        return uM(MM) && bj !== iM && (bj = iM, wj = MM(location)), {
          page: zr(zr({
            url: iM
          }, wj ? {
            id: wj
          } : {}), rM)
        }
      }
    }

    function gj() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cr,
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const iM = Br;
      return rM > 0 && (iM.error = rM >= 1 ? function() {
        for (var rM = arguments.length, OM = new Array(rM), SM = 0; SM < rM; SM++) OM[SM] = arguments[SM];
        MM.error(`${iM.prefix}\n`, ...OM)
      } : vr, iM.warn = rM >= 2 ? function() {
        for (var rM = arguments.length, OM = new Array(rM), SM = 0; SM < rM; SM++) OM[SM] = arguments[SM];
        MM.warn(`${iM.prefix}\n`, ...OM)
      } : vr, iM.info = rM >= 3 ? function() {
        for (var rM = arguments.length, OM = new Array(rM), SM = 0; SM < rM; SM++) OM[SM] = arguments[SM];
        MM.info(`${iM.prefix}\n`, ...OM)
      } : vr, iM.debug = rM >= 4 ? function() {
        for (var rM = arguments.length, OM = new Array(rM), SM = 0; SM < rM; SM++) OM[SM] = arguments[SM];
        MM.debug(`${iM.prefix}\n`, ...OM)
      } : vr), iM
    }
    const uj = "faro",
      Rj = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      pj = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Wj(MM) {
      var rM, iM, SM, jM, aM, PM;
      const nM = [],
        zM = gj(MM.unpatchedConsole, MM.internalLoggerLevel);
      MM.transports ? ((MM.url || MM.apiKey) && zM.error('if "transports" is defined, "url" and "apiKey" should not be defined'), nM.push(...MM.transports)) : MM.url ? nM.push(new Cj({
        url: MM.url,
        apiKey: MM.apiKey,
        requestCompression: MM.requestCompression
      })) : zM.error('either "url" or "transports" must be defined');
      const {
        dedupe: LM = !0,
        eventDomain: mM = OM,
        globalObjectKey: HM = uj,
        instrumentations: hM = vS(),
        internalLoggerLevel: JM = Xr,
        isolate: dM = !1,
        logArgsSerializer: yM = si,
        metas: lM = Dj(MM),
        paused: EM = !1,
        preventGlobalExposure: UM = !1,
        unpatchedConsole: GM = cr,
        url: CM,
        experimental: eM
      } = MM, bM = Hj(MM, pj), wM = null !== (rM = null === eM || void 0 === eM ? void 0 : eM.trackNavigation) && void 0 !== rM && rM, tM = {
        dataAttributeName: cO(null !== (iM = null === (SM = MM.userActionsInstrumentation) || void 0 === SM ? void 0 : SM.dataAttributeName) && void 0 !== iM ? iM : qO),
        excludeItem: null === (jM = MM.userActionsInstrumentation) || void 0 === jM ? void 0 : jM.excludeItem,
        initialActivityTimeout: MS(null === (aM = MM.userActionsInstrumentation) || void 0 === aM ? void 0 : aM.initialActivityTimeout, 100, (MM => zM.warn(MM)))
      };
      return zr(zr({}, bM), {}, {
        batching: zr(zr({}, Rj), MM.batching),
        dedupe: LM,
        globalObjectKey: HM,
        instrumentations: sj(hM, MM),
        internalLoggerLevel: JM,
        isolate: dM,
        logArgsSerializer: yM,
        metas: lM,
        parseStacktrace: di,
        paused: EM,
        preventGlobalExposure: UM,
        transports: nM,
        unpatchedConsole: GM,
        eventDomain: mM,
        ignoreUrls: [...null !== (PM = MM.ignoreUrls) && void 0 !== PM ? PM : [], ...CM ? [CM] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: zr(zr(zr({}, QM), MM.sessionTracking), kj({
          trackGeolocation: MM.trackGeolocation,
          sessionTracking: MM.sessionTracking
        })),
        userActionsInstrumentation: tM,
        experimental: {
          trackNavigation: wM
        }
      })
    }

    function sj(MM, rM) {
      let {
        experimental: iM
      } = rM;
      var OM;
      const SM = null !== (OM = null === iM || void 0 === iM ? void 0 : iM.trackNavigation) && void 0 !== OM && OM;
      return MM.filter((MM => !("@grafana/faro-web-sdk:instrumentation-navigation" === MM.name && !SM)))
    }

    function Dj(MM) {
      var rM, iM, OM;
      const {
        page: SM,
        generatePageId: jM
      } = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.pageTracking) && void 0 !== rM ? rM : {}, aM = [KS, qS, tj({
        generatePageId: jM,
        initialPageMeta: SM
      }), ...null !== (iM = MM.metas) && void 0 !== iM ? iM : [], VS];
      return gM(null === (OM = window) || void 0 === OM ? void 0 : OM.k6) ? [...aM, ej] : aM
    }

    function kj(MM) {
      let {
        trackGeolocation: rM,
        sessionTracking: iM
      } = MM;
      var OM;
      const SM = {};
      return wM(rM) && (SM.geoLocationTrackingEnabled = rM), XM(SM) ? {} : {
        session: zr(zr({}, null !== (OM = null === iM || void 0 === iM ? void 0 : iM.session) && void 0 !== OM ? OM : {}), {}, {
          overrides: SM
        })
      }
    }
    const Zj = new WeakSet;

    function oj(MM) {
      return Zj.add(MM), MM
    }

    function fj(MM, rM) {
      if (MM.capture) return oj(MM.capture(rM));
      const iM = oj(MM.value);
      return null === rM || void 0 === rM || rM(), iM
    }

    function Yj(MM) {
      const rM = `__faroBundleId_${MM}`,
        iM = null === zM || void 0 === zM ? void 0 : zM[rM];
      if ("string" === typeof iM && "" !== iM) return iM;
      const OM = "undefined" !== typeof window ? window[rM] : void 0;
      return "string" === typeof OM && "" !== OM ? OM : void 0
    }

    function Nj(MM) {
      var rM, iM;
      const OM = MM.config.app.name,
        SM = OM ? function(MM) {
          return null === zM || void 0 === zM ? void 0 : zM[`__faroGitHash_${MM}`]
        }(OM) : void 0,
        jM = {
          sdk: {
            version: ii,
            name: "faro"
          },
          app: Vr({
            bundleId: OM && Yj(OM)
          }, void 0 !== SM ? {
            gitHash: SM
          } : {})
        },
        aM = null === (rM = MM.config.sessionTracking) || void 0 === rM ? void 0 : rM.session;
      aM && MM.api.setSession(aM), MM.config.app && (jM.app = Vr(Vr({}, MM.config.app), jM.app)), MM.config.user && (jM.user = MM.config.user), MM.config.view && (jM.view = MM.config.view), MM.metas.add(jM, ...null !== (iM = MM.config.metas) && void 0 !== iM ? iM : [])
    }
    var Aj = class {
      constructor(MM, rM) {
        var iM, OM;
        this.signalBuffer = [], this.itemLimit = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.itemLimit) && void 0 !== iM ? iM : 50, this.sendTimeout = null !== (OM = null === rM || void 0 === rM ? void 0 : rM.sendTimeout) && void 0 !== OM ? OM : 250, this.paused = (null === rM || void 0 === rM ? void 0 : rM.paused) || !1, this.sendFn = MM, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(MM) {
        this.paused || (this.signalBuffer.push(MM), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(MM) {
        const rM = new Map;
        return MM.forEach((MM => {
          const iM = JSON.stringify(MM.meta);
          let OM = rM.get(iM);
          OM = void 0 === OM ? [MM] : [...OM, MM], rM.set(iM, OM)
        })), Array.from(rM.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const MM = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(MM).forEach(this.sendFn)
        } catch (rM) {
          throw this.signalBuffer = [...MM, ...this.signalBuffer], this.trimBufferToLimit(), rM
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function xj(MM, rM, iM, OM) {
      var SM;
      rM.debug("Initializing transports");
      const jM = [];
      let aM = [];
      const PM = MM => {
        let rM = MM;
        for (const OM of aM) {
          const MM = rM.map(OM).filter(Boolean);
          if (0 === MM.length) return [];
          rM = vj(MM, iM)
        }
        return rM
      };
      let nM;
      (null === (SM = iM.batching) || void 0 === SM ? void 0 : SM.enabled) && (nM = new Aj((MM => {
        const iM = PM(MM);
        if (0 !== iM.length)
          for (const OM of jM) rM.debug(`Transporting item using ${OM.name}\n`, iM), OM.isBatched() && OM.send(iM)
      }), {
        sendTimeout: iM.batching.sendTimeout,
        itemLimit: iM.batching.itemLimit,
        paused: iM.paused
      }));
      return {
        add: function() {
          rM.debug("Adding transports");
          for (var SM = arguments.length, aM = new Array(SM), PM = 0; PM < SM; PM++) aM[PM] = arguments[PM];
          aM.forEach((SM => {
            rM.debug(`Adding "${SM.name}" transport`), jM.some((MM => MM === SM)) ? rM.warn(`Transport ${SM.name} is already added`) : (SM.unpatchedConsole = MM, SM.internalLogger = rM, SM.config = iM, SM.metas = OM, jM.push(SM))
          }))
        },
        addBeforeSendHooks: function() {
          rM.debug("Adding beforeSendHooks\n", aM);
          for (var MM = arguments.length, iM = new Array(MM), OM = 0; OM < MM; OM++) iM[OM] = arguments[OM];
          iM.forEach((MM => {
            MM && aM.push(MM)
          }))
        },
        getBeforeSendHooks: () => [...aM],
        execute: MM => {
          var SM;
          if (!iM.paused && Nr(OM).shouldCapture()) {
            if (LM = MM.meta, !Zj.has(LM)) {
              var aM, QM, zM;
              const rM = null === (aM = OM.value.session) || void 0 === aM ? void 0 : aM.id,
                SM = fj(OM);
              if (iM.paused) return;
              const jM = Vr({}, MM.meta);
              (null === (QM = jM.session) || void 0 === QM ? void 0 : QM.id) === rM && (null === (zM = SM.session) || void 0 === zM ? void 0 : zM.id) !== rM && (void 0 === SM.session ? delete jM.session : jM.session = SM.session), MM = Vr(Vr({}, MM), {}, {
                meta: oj(jM)
              })
            }
            var LM;
            (null === (SM = iM.batching) || void 0 === SM ? void 0 : SM.enabled) && (null === nM || void 0 === nM || nM.addItem(MM)), (MM => {
              var OM;
              if ((null === (OM = iM.batching) || void 0 === OM ? void 0 : OM.enabled) && jM.every((MM => MM.isBatched()))) return;
              const [SM] = PM([MM]);
              if (void 0 !== SM)
                for (const PM of jM) {
                  var aM;
                  rM.debug(`Transporting item using ${PM.name}\n`, SM), PM.isBatched() ? (null === (aM = iM.batching) || void 0 === aM ? void 0 : aM.enabled) || PM.send([SM]) : PM.send(SM)
                }
            })(MM)
          }
        },
        isPaused: () => iM.paused,
        pause: () => {
          rM.debug("Pausing transports"), null === nM || void 0 === nM || nM.pause(), iM.paused = !0
        },
        remove: function() {
          rM.debug("Removing transports");
          for (var MM = arguments.length, iM = new Array(MM), OM = 0; OM < MM; OM++) iM[OM] = arguments[OM];
          iM.forEach((MM => {
            rM.debug(`Removing "${MM.name}" transport`);
            const iM = jM.indexOf(MM); - 1 !== iM ? jM.splice(iM, 1) : rM.warn(`Transport "${MM.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var MM = arguments.length, iM = new Array(MM), OM = 0; OM < MM; OM++) iM[OM] = arguments[OM];
          rM.debug("Removing beforeSendHooks"), aM = aM.filter((MM => !iM.includes(MM)))
        },
        get transports() {
          return [...jM]
        },
        unpause: () => {
          rM.debug("Unpausing transports"), null === nM || void 0 === nM || nM.start(), iM.paused = !1
        }
      }
    }

    function vj(MM, rM) {
      if (rM.preserveOriginalError)
        for (const iM of MM) "exception" === iM.type && delete iM.payload.originalError;
      return MM
    }
    let Fj = cr;

    function Bj(MM) {
      var rM;
      return Fj = null !== (rM = MM.unpatchedConsole) && void 0 !== rM ? rM : Fj, Fj
    }
    let Xj, Ij = Br;

    function Kj(MM, rM) {
      return Ij = gj(MM, rM.internalLoggerLevel), Ij
    }

    function qj(MM) {
      let {
        internalLogger: rM,
        config: iM,
        metas: OM,
        transports: SM,
        tracesApi: jM,
        userActionsApi: aM
      } = MM;
      var PM;
      rM.debug("Initializing exceptions API");
      let nM = null;
      Xj = null !== (PM = iM.parseStacktrace) && void 0 !== PM ? PM : Xj;
      const QM = MM => {
          rM.debug("Changing stacktrace parser"), Xj = null !== MM && void 0 !== MM ? MM : Xj
        },
        {
          ignoreErrors: zM = [],
          preserveOriginalError: LM
        } = iM;
      return QM(iM.parseStacktrace), {
        changeStacktraceParser: QM,
        getStacktraceParser: () => Xj,
        pushError: function(MM) {
          let {
            skipDedupe: PM,
            stackFrames: QM,
            type: mM,
            context: HM,
            spanContext: hM,
            timestampOverwriteMs: JM,
            originalError: dM,
            fingerprint: yM,
            fatal: lM
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(MM, rM) {
              const {
                message: iM,
                name: OM,
                stack: SM
              } = rM;
              return jM = MM, aM = iM + " " + OM + " " + SM, jM.some((MM => CM(MM) ? aM.includes(MM) : !!aM.match(MM)));
              var jM, aM
            }(zM, null !== dM && void 0 !== dM ? dM : MM)) try {
            var EM, UM;
            if (!Nr(OM).shouldCapture()) return;
            const zM = Zr(Vr(Vr({}, function(MM) {
                let rM = MM.cause;
                oM(rM) ? rM = MM.cause.toString() : null !== rM && (gM(MM.cause) || RM(MM.cause)) ? rM = kr(MM.cause) : null != rM && (rM = MM.cause.toString());
                return null == rM ? {} : {
                  cause: rM
                }
              }(null !== dM && void 0 !== dM ? dM : MM)), null !== HM && void 0 !== HM ? HM : {})),
              CM = Vr(Vr(Vr(Vr({
                type: mM || MM.name || "Error",
                value: MM.message,
                timestamp: JM ? Jr(JM) : hr(),
                trace: hM ? {
                  trace_id: hM.traceId,
                  span_id: hM.spanId
                } : jM.getTraceContext()
              }, XM(zM) ? {} : {
                context: zM
              }), LM ? {
                originalError: dM
              } : {}), yM ? {
                fingerprint: yM
              } : {}), void 0 !== lM ? {
                fatal: lM
              } : {});
            QM = null !== (EM = QM) && void 0 !== EM ? EM : MM.stack ? null === Xj || void 0 === Xj ? void 0 : Xj(MM).frames : void 0, (null === QM || void 0 === QM ? void 0 : QM.length) && (CM.stacktrace = {
              frames: QM
            });
            const eM = {
              type: CM.type,
              value: CM.value,
              stacktrace: CM.stacktrace,
              context: CM.context,
              fingerprint: CM.fingerprint,
              fatal: null !== (UM = CM.fatal) && void 0 !== UM && UM
            };
            if (!PM && iM.dedupe && !GM(nM) && lr(eM, nM)) return void rM.debug("Skipping error push because it is the same as the last one\n", CM);
            const bM = nM,
              wM = fj(OM);
            if (nM !== bM && !PM && iM.dedupe && lr(eM, nM)) return;
            nM = eM;
            const tM = {
              meta: wM,
              payload: CM,
              type: "exception"
            };
            rM.debug("Pushing exception\n", tM), bS(aM.getActiveUserAction(), tM) || SM.execute(tM)
          } catch (eM) {
            rM.error("Error pushing event", eM)
          }
        }
      }
    }

    function Tj(MM, rM, iM, OM, SM) {
      rM.debug("Initializing API");
      let jM = null;
      const aM = function(MM) {
          let {
            transports: rM,
            internalLogger: iM,
            config: OM,
            pushEvent: SM
          } = MM;
          var jM;
          const aM = null === (jM = OM.userActionsInstrumentation) || void 0 === jM ? void 0 : jM.excludeItem;
          let PM;
          const nM = () => PM;
          return {
            startUserAction: (MM, OM, jM) => {
              if (void 0 === nM()) {
                const iM = new CS({
                  name: MM,
                  transports: rM,
                  attributes: OM,
                  trigger: (null === jM || void 0 === jM ? void 0 : jM.triggerName) || "faroApiCall",
                  importance: (null === jM || void 0 === jM ? void 0 : jM.importance) || US.Normal,
                  trackUserActionsExcludeItem: aM,
                  pushEvent: SM
                });
                return iM.filter((MM => [3, 2].includes(MM))).first().subscribe((() => {
                  PM = void 0
                })), eS.notify({
                  type: ES,
                  userAction: iM,
                  initialActivityTimeout: null === jM || void 0 === jM ? void 0 : jM.initialActivityTimeout
                }), PM = iM, PM
              }
              iM.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: nM
          }
        }({
          transports: SM,
          config: iM,
          internalLogger: rM,
          pushEvent: (MM, iM, OM, SM) => {
            jM ? jM(MM, iM, OM, SM) : rM.warn("pushEventImpl is not initialized. Event dropped:", {
              name: MM,
              attributes: iM,
              domain: OM,
              options: SM
            })
          }
        }),
        PM = function(MM, rM, iM, OM, SM) {
          let jM;
          return rM.debug("Initializing traces API"), {
            getOTEL: () => jM,
            getTraceContext: () => {
              const MM = null === jM || void 0 === jM ? void 0 : jM.trace.getSpanContext(jM.context.active());
              return MM ? {
                trace_id: MM.traceId,
                span_id: MM.spanId
              } : void 0
            },
            initOTEL: (MM, iM) => {
              rM.debug("Initializing OpenTelemetry"), jM = {
                trace: MM,
                context: iM
              }
            },
            isOTELInitialized: () => !!jM,
            pushTraces: MM => {
              try {
                if (!Nr(OM).shouldCapture()) return;
                const iM = {
                  type: "trace",
                  payload: MM,
                  meta: fj(OM)
                };
                rM.debug("Pushing trace\n", iM), SM.execute(iM)
              } catch (iM) {
                rM.error("Error pushing trace\n", iM)
              }
            }
          }
        }(0, rM, 0, OM, SM),
        nM = {
          unpatchedConsole: MM,
          internalLogger: rM,
          userActionsApi: aM,
          config: iM,
          metas: OM,
          transports: SM,
          tracesApi: PM
        },
        QM = function(MM) {
          let {
            internalLogger: rM,
            config: iM,
            metas: OM,
            transports: SM,
            tracesApi: jM,
            userActionsApi: aM
          } = MM, PM = null;
          return {
            pushEvent: function(MM, nM, QM) {
              let {
                skipDedupe: zM,
                spanContext: LM,
                timestampOverwriteMs: mM,
                customPayloadTransformer: HM = MM => MM
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Nr(OM).shouldCapture()) return;
                const hM = Zr(nM),
                  JM = HM({
                    name: MM,
                    domain: null !== QM && void 0 !== QM ? QM : iM.eventDomain,
                    attributes: XM(hM) ? void 0 : hM,
                    timestamp: mM ? Jr(mM) : hr(),
                    trace: LM ? {
                      trace_id: LM.traceId,
                      span_id: LM.spanId
                    } : jM.getTraceContext()
                  }),
                  dM = {
                    name: JM.name,
                    attributes: JM.attributes,
                    domain: JM.domain
                  };
                if (!zM && iM.dedupe && !GM(PM) && lr(dM, PM)) return void rM.debug("Skipping event push because it is the same as the last one\n", JM);
                const yM = PM,
                  lM = fj(OM);
                if (PM !== yM && !zM && iM.dedupe && lr(dM, PM)) return;
                PM = dM;
                const EM = {
                  meta: lM,
                  payload: JM,
                  type: "event"
                };
                rM.debug("Pushing event\n", EM), bS(aM.getActiveUserAction(), EM) || SM.execute(EM)
              } catch (hM) {
                rM.error("Error pushing event", hM)
              }
            }
          }
        }(nM);
      return jM = QM.pushEvent, Vr(Vr(Vr(Vr(Vr(Vr(Vr({}, PM), qj(nM)), function(MM) {
        let rM, iM, OM, SM, {
          internalLogger: jM,
          metas: aM
        } = MM;
        jM.debug("Initializing meta API");
        const PM = MM => {
            iM && aM.remove(iM), iM = {
              user: MM
            }, aM.add(iM)
          },
          nM = (MM, iM) => {
            var OM;
            const SM = null === iM || void 0 === iM ? void 0 : iM.overrides,
              jM = SM ? {
                overrides: Vr(Vr({}, null === rM || void 0 === rM || null === (OM = rM.session) || void 0 === OM ? void 0 : OM.overrides), SM)
              } : {};
            rM && aM.remove(rM), rM = {
              session: Vr(Vr({}, XM(MM) ? void 0 : MM), jM)
            }, aM.add(rM)
          },
          QM = (MM, rM) => {
            Nr(aM).notifySessionUpdate({
              type: "replace",
              session: MM,
              overrides: null === rM || void 0 === rM ? void 0 : rM.overrides
            }), nM(MM, rM)
          },
          zM = () => aM.value.session,
          LM = () => aM.value.page;
        return {
          setUser: PM,
          resetUser: PM,
          setSession: QM,
          resetSession: QM,
          getSession: zM,
          setView: (MM, rM) => {
            var iM;
            if ((null === rM || void 0 === rM ? void 0 : rM.overrides) && (Nr(aM).notifySessionUpdate({
                type: "overrides",
                overrides: rM.overrides
              }), nM(zM(), {
                overrides: rM.overrides
              })), (null === OM || void 0 === OM || null === (iM = OM.view) || void 0 === iM ? void 0 : iM.name) === (null === MM || void 0 === MM ? void 0 : MM.name)) return;
            const SM = OM;
            OM = {
              view: MM
            }, aM.add(OM), SM && aM.remove(SM)
          },
          getView: () => aM.value.view,
          setPage: MM => {
            var rM;
            const iM = CM(MM) ? Vr(Vr({}, null !== (rM = null === SM || void 0 === SM ? void 0 : SM.page) && void 0 !== rM ? rM : LM()), {}, {
              id: MM
            }) : MM;
            SM && aM.remove(SM), SM = {
              page: iM
            }, aM.add(SM)
          },
          getPage: LM
        }
      }(nM)), function(MM) {
        let {
          internalLogger: rM,
          config: iM,
          metas: OM,
          transports: SM,
          tracesApi: jM,
          userActionsApi: aM
        } = MM;
        var PM;
        rM.debug("Initializing logs API");
        let nM = null;
        const QM = null !== (PM = iM.logArgsSerializer) && void 0 !== PM ? PM : si;
        return {
          pushLog: function(MM) {
            let {
              context: PM,
              level: zM,
              skipDedupe: LM,
              spanContext: mM,
              timestampOverwriteMs: HM
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Nr(OM).shouldCapture()) return;
              const hM = Zr(PM),
                JM = {
                  message: QM(MM),
                  level: null !== zM && void 0 !== zM ? zM : "log",
                  context: XM(hM) ? void 0 : hM,
                  timestamp: HM ? Jr(HM) : hr(),
                  trace: mM ? {
                    trace_id: mM.traceId,
                    span_id: mM.spanId
                  } : jM.getTraceContext()
                },
                dM = {
                  message: JM.message,
                  level: JM.level,
                  context: JM.context
                };
              if (!LM && iM.dedupe && !GM(nM) && lr(dM, nM)) return void rM.debug("Skipping log push because it is the same as the last one\n", JM);
              const yM = nM,
                lM = fj(OM);
              if (nM !== yM && !LM && iM.dedupe && lr(dM, nM)) return;
              nM = dM;
              const EM = {
                type: "log",
                payload: JM,
                meta: lM
              };
              rM.debug("Pushing log\n", EM), bS(aM.getActiveUserAction(), EM) || SM.execute(EM)
            } catch (hM) {
              rM.error("Error pushing log\n", hM)
            }
          }
        }
      }(nM)), function(MM) {
        let {
          internalLogger: rM,
          config: iM,
          metas: OM,
          transports: SM,
          tracesApi: jM,
          userActionsApi: aM
        } = MM;
        rM.debug("Initializing measurements API");
        let PM = null;
        return {
          pushMeasurement: function(MM) {
            let {
              skipDedupe: nM,
              context: QM,
              spanContext: zM,
              timestampOverwriteMs: LM
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Nr(OM).shouldCapture()) return;
              const mM = Zr(QM),
                HM = Vr(Vr({}, MM), {}, {
                  trace: zM ? {
                    trace_id: zM.traceId,
                    span_id: zM.spanId
                  } : jM.getTraceContext(),
                  timestamp: LM ? Jr(LM) : hr(),
                  context: XM(mM) ? void 0 : mM
                }),
                hM = {
                  type: HM.type,
                  values: HM.values,
                  context: HM.context
                };
              if (!nM && iM.dedupe && !GM(PM) && lr(hM, PM)) return void rM.debug("Skipping measurement push because it is the same as the last one\n", HM);
              const JM = PM,
                dM = fj(OM);
              if (PM !== JM && !nM && iM.dedupe && lr(hM, PM)) return;
              PM = hM;
              const yM = {
                type: "measurement",
                payload: HM,
                meta: dM
              };
              rM.debug("Pushing measurement\n", yM), bS(aM.getActiveUserAction(), yM) || SM.execute(yM)
            } catch (mM) {
              rM.error("Error pushing measurement\n", mM)
            }
          }
        }
      }(nM)), QM), aM)
    }

    function Vj(MM) {
      const rM = Bj(MM),
        iM = Kj(rM, MM);
      if (hM() && !MM.isolate) return void iM.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      iM.debug("Initializing");
      const OM = function(MM, rM) {
          let iM, OM = [],
            SM = [],
            jM = [],
            aM = 0,
            PM = 0;
          const nM = () => OM.reduce(((MM, rM) => Object.assign(MM, uM(rM) ? rM() : rM)), {}),
            QM = () => {
              if (SM.length) {
                const MM = nM();
                SM.forEach((rM => rM(MM)))
              }
            };
          return {
            add: function() {
              for (var MM = arguments.length, iM = new Array(MM), SM = 0; SM < MM; SM++) iM[SM] = arguments[SM];
              rM.debug("Adding metas\n", iM), OM.push(...iM), QM()
            },
            remove: function() {
              for (var MM = arguments.length, iM = new Array(MM), SM = 0; SM < MM; SM++) iM[SM] = arguments[SM];
              rM.debug("Removing metas\n", iM), OM = OM.filter((MM => !iM.includes(MM))), QM()
            },
            addListener: MM => {
              rM.debug("Adding metas listener\n", MM), SM.push(MM)
            },
            removeListener: MM => {
              rM.debug("Removing metas listener\n", MM), SM = SM.filter((rM => rM !== MM))
            },
            capture: MM => {
              var rM;
              const OM = void 0 !== iM,
                SM = null !== (rM = iM) && void 0 !== rM ? rM : jM;
              OM || (iM = SM, aM = 0, PM = SM.length);
              try {
                for (; aM < PM;) {
                  const MM = SM[aM++];
                  null === MM || void 0 === MM || MM()
                }
                const rM = oj(nM());
                return null === MM || void 0 === MM || MM(), rM
              } finally {
                OM || (iM = void 0)
              }
            },
            addCaptureListener: MM => {
              jM.push(MM)
            },
            removeCaptureListener: MM => {
              jM = jM.filter((rM => rM !== MM))
            },
            get value() {
              return nM()
            }
          }
        }(0, iM),
        SM = xj(rM, iM, MM, OM),
        jM = Tj(rM, iM, MM, OM, SM),
        aM = function(MM, rM, iM, OM, SM, jM) {
          rM.debug("Initializing instrumentations");
          const aM = [];
          return {
            add: function() {
              rM.debug("Adding instrumentations");
              for (var PM = arguments.length, nM = new Array(PM), QM = 0; QM < PM; QM++) nM[QM] = arguments[QM];
              nM.forEach((PM => {
                rM.debug(`Adding "${PM.name}" instrumentation`), aM.some((MM => MM.name === PM.name)) ? rM.warn(`Instrumentation ${PM.name} is already added`) : (PM.unpatchedConsole = MM, PM.internalLogger = rM, PM.config = iM, PM.metas = OM, PM.transports = SM, PM.api = jM, aM.push(PM), PM.initialize())
              }))
            },
            get instrumentations() {
              return [...aM]
            },
            remove: function() {
              rM.debug("Removing instrumentations");
              for (var MM = arguments.length, iM = new Array(MM), OM = 0; OM < MM; OM++) iM[OM] = arguments[OM];
              iM.forEach((MM => {
                var iM, OM;
                rM.debug(`Removing "${MM.name}" instrumentation`);
                const SM = aM.reduce(((rM, iM, OM) => null === rM && iM.name === MM.name ? OM : null), null);
                null !== SM ? (null === (iM = (OM = aM[SM]).destroy) || void 0 === iM || iM.call(OM), aM.splice(SM, 1)) : rM.warn(`Instrumentation "${MM.name}" is not added`)
              }))
            }
          }
        }(rM, iM, MM, OM, SM, jM),
        PM = dM(rM, iM, MM, OM, SM, jM, aM);
      return Nj(PM),
        function(MM) {
          MM.transports.add(...MM.config.transports), MM.transports.addBeforeSendHooks(MM.config.beforeSend)
        }(PM),
        function(MM) {
          MM.instrumentations.add(...MM.config.instrumentations)
        }(PM), PM
    }

    function cj(MM) {
      const rM = Wj(MM);
      if (rM) return Vj(rM)
    }
  },
  7161: function(MM, rM, iM) {
    var OM;
    ! function(SM, jM) {
      var aM = "function",
        PM = "undefined",
        nM = "object",
        QM = "string",
        zM = "major",
        LM = "model",
        mM = "name",
        HM = "type",
        hM = "vendor",
        JM = "version",
        dM = "architecture",
        yM = "console",
        lM = "mobile",
        EM = "tablet",
        UM = "smarttv",
        GM = "wearable",
        CM = "embedded",
        eM = "Amazon",
        bM = "Apple",
        wM = "ASUS",
        tM = "BlackBerry",
        gM = "Browser",
        uM = "Chrome",
        RM = "Firefox",
        pM = "Google",
        WM = "Honor",
        sM = "Huawei",
        DM = "LG",
        kM = "Microsoft",
        ZM = "Motorola",
        oM = "Nvidia",
        fM = "OnePlus",
        YM = "Opera",
        NM = "OPPO",
        AM = "Samsung",
        xM = "Sharp",
        vM = "Sony",
        FM = "Xiaomi",
        BM = "Zebra",
        XM = "Facebook",
        IM = "Chromium OS",
        KM = "Mac OS",
        qM = " Browser",
        TM = function(MM) {
          for (var rM = {}, iM = 0; iM < MM.length; iM++) rM[MM[iM].toUpperCase()] = MM[iM];
          return rM
        },
        VM = function(MM, rM) {
          return typeof MM === QM && -1 !== cM(rM).indexOf(cM(MM))
        },
        cM = function(MM) {
          return MM.toLowerCase()
        },
        Mr = function(MM, rM) {
          if (typeof MM === QM) return MM = MM.replace(/^\s\s*/, ""), typeof rM === PM ? MM : MM.substring(0, 500)
        },
        rr = function(MM, rM) {
          for (var iM, OM, SM, PM, QM, zM, LM = 0; LM < rM.length && !QM;) {
            var mM = rM[LM],
              HM = rM[LM + 1];
            for (iM = OM = 0; iM < mM.length && !QM && mM[iM];)
              if (QM = mM[iM++].exec(MM))
                for (SM = 0; SM < HM.length; SM++) zM = QM[++OM], typeof(PM = HM[SM]) === nM && PM.length > 0 ? 2 === PM.length ? typeof PM[1] == aM ? this[PM[0]] = PM[1].call(this, zM) : this[PM[0]] = PM[1] : 3 === PM.length ? typeof PM[1] !== aM || PM[1].exec && PM[1].test ? this[PM[0]] = zM ? zM.replace(PM[1], PM[2]) : jM : this[PM[0]] = zM ? PM[1].call(this, zM, PM[2]) : jM : 4 === PM.length && (this[PM[0]] = zM ? PM[3].call(this, zM.replace(PM[1], PM[2])) : jM) : this[PM] = zM || jM;
            LM += 2
          }
        },
        ir = function(MM, rM) {
          for (var iM in rM)
            if (typeof rM[iM] === nM && rM[iM].length > 0) {
              for (var OM = 0; OM < rM[iM].length; OM++)
                if (VM(rM[iM][OM], MM)) return "?" === iM ? jM : iM
            } else if (VM(rM[iM], MM)) return "?" === iM ? jM : iM;
          return rM.hasOwnProperty("*") ? rM["*"] : MM
        },
        Or = {
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
        Sr = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [JM, [mM, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [JM, [mM, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [mM, JM],
            [/opios[\/ ]+([\w\.]+)/i],
            [JM, [mM, YM + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [JM, [mM, YM + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [JM, [mM, YM]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [JM, [mM, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [JM, [mM, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [mM, JM],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [JM, [mM, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [JM, [mM, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [JM, [mM, "UC" + gM]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [JM, [mM, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [JM, [mM, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [JM, [mM, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [JM, [mM, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [JM, [mM, "Smart Lenovo " + gM]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [mM, /(.+)/, "$1 Secure " + gM], JM
            ],
            [/\bfocus\/([\w\.]+)/i],
            [JM, [mM, RM + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [JM, [mM, YM + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [JM, [mM, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [JM, [mM, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [JM, [mM, YM + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [JM, [mM, "MIUI" + qM]],
            [/fxios\/([\w\.-]+)/i],
            [JM, [mM, RM]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [JM, [mM, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [mM, /(.+)/, "$1Browser"], JM
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [mM, /(.+)/, "$1" + qM], JM
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [JM, [mM, AM + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [JM, [mM, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [mM, "Sogou Mobile"], JM
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [mM, JM],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [mM],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [JM, mM],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [mM, XM], JM
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [mM, JM],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [JM, [mM, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [JM, [mM, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [JM, [mM, uM + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [mM, uM + " WebView"], JM
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [JM, [mM, "Android " + gM]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [mM, JM],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [JM, [mM, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [JM, mM],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [mM, [JM, ir, {
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
            [mM, JM],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [mM, "Netscape"], JM
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [mM, JM],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [JM, [mM, RM + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [mM, [JM, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [mM, [JM, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [dM, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [dM, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [dM, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [dM, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [dM, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [dM, /ower/, "", cM]
            ],
            [/ sun4\w[;\)]/i],
            [
              [dM, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [dM, cM]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [LM, [hM, AM],
              [HM, EM]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [LM, [hM, AM],
              [HM, lM]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [LM, [hM, bM],
              [HM, lM]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [LM, [hM, bM],
              [HM, EM]
            ],
            [/(macintosh);/i],
            [LM, [hM, bM]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [LM, [hM, xM],
              [HM, lM]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [LM, [hM, WM],
              [HM, EM]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [LM, [hM, WM],
              [HM, lM]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [LM, [hM, sM],
              [HM, EM]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [LM, [hM, sM],
              [HM, lM]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [LM, /_/g, " "],
              [hM, FM],
              [HM, EM]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [LM, /_/g, " "],
              [hM, FM],
              [HM, lM]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [LM, [hM, NM],
              [HM, lM]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [LM, [hM, ir, {
                OnePlus: ["304", "403", "203"],
                "*": NM
              }],
              [HM, EM]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [LM, [hM, "Vivo"],
              [HM, lM]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [LM, [hM, "Realme"],
              [HM, lM]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [LM, [hM, ZM],
              [HM, lM]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [LM, [hM, ZM],
              [HM, EM]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [LM, [hM, DM],
              [HM, EM]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [LM, [hM, DM],
              [HM, lM]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [LM, [hM, "Lenovo"],
              [HM, EM]
            ],
            [/(nokia) (t[12][01])/i],
            [hM, LM, [HM, EM]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [LM, /_/g, " "],
              [HM, lM],
              [hM, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [LM, [hM, pM],
              [HM, EM]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [LM, [hM, pM],
              [HM, lM]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [LM, [hM, vM],
              [HM, lM]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [LM, "Xperia Tablet"],
              [hM, vM],
              [HM, EM]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [LM, [hM, fM],
              [HM, lM]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [LM, [hM, eM],
              [HM, EM]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [LM, /(.+)/g, "Fire Phone $1"],
              [hM, eM],
              [HM, lM]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [LM, hM, [HM, EM]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [LM, [hM, tM],
              [HM, lM]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [LM, [hM, wM],
              [HM, EM]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [LM, [hM, wM],
              [HM, lM]
            ],
            [/(nexus 9)/i],
            [LM, [hM, "HTC"],
              [HM, EM]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [hM, [LM, /_/g, " "],
              [HM, lM]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [LM, [hM, "TCL"],
              [HM, EM]
            ],
            [/(itel) ((\w+))/i],
            [
              [hM, cM], LM, [HM, ir, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [LM, [hM, "Acer"],
              [HM, EM]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [LM, [hM, "Meizu"],
              [HM, lM]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [LM, [hM, "Ulefone"],
              [HM, lM]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [LM, [hM, "Energizer"],
              [HM, lM]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [LM, [hM, "Cat"],
              [HM, lM]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [LM, [hM, "Smartfren"],
              [HM, lM]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [LM, [hM, "Nothing"],
              [HM, lM]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [LM, [hM, "Archos"],
              [HM, EM]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [LM, [hM, "Archos"],
              [HM, lM]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [hM, LM, [HM, EM]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [hM, LM, [HM, lM]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [hM, LM, [HM, EM]],
            [/(surface duo)/i],
            [LM, [hM, kM],
              [HM, EM]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [LM, [hM, "Fairphone"],
              [HM, lM]
            ],
            [/(u304aa)/i],
            [LM, [hM, "AT&T"],
              [HM, lM]
            ],
            [/\bsie-(\w*)/i],
            [LM, [hM, "Siemens"],
              [HM, lM]
            ],
            [/\b(rct\w+) b/i],
            [LM, [hM, "RCA"],
              [HM, EM]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [LM, [hM, "Dell"],
              [HM, EM]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [LM, [hM, "Verizon"],
              [HM, EM]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [LM, [hM, "Barnes & Noble"],
              [HM, EM]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [LM, [hM, "NuVision"],
              [HM, EM]
            ],
            [/\b(k88) b/i],
            [LM, [hM, "ZTE"],
              [HM, EM]
            ],
            [/\b(nx\d{3}j) b/i],
            [LM, [hM, "ZTE"],
              [HM, lM]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [LM, [hM, "Swiss"],
              [HM, lM]
            ],
            [/\b(zur\d{3}) b/i],
            [LM, [hM, "Swiss"],
              [HM, EM]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [LM, [hM, "Zeki"],
              [HM, EM]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [hM, "Dragon Touch"], LM, [HM, EM]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [LM, [hM, "Insignia"],
              [HM, EM]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [LM, [hM, "NextBook"],
              [HM, EM]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [hM, "Voice"], LM, [HM, lM]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [hM, "LvTel"], LM, [HM, lM]
            ],
            [/\b(ph-1) /i],
            [LM, [hM, "Essential"],
              [HM, lM]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [LM, [hM, "Envizen"],
              [HM, EM]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [LM, [hM, "MachSpeed"],
              [HM, EM]
            ],
            [/\btu_(1491) b/i],
            [LM, [hM, "Rotor"],
              [HM, EM]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [LM, [hM, oM],
              [HM, EM]
            ],
            [/(sprint) (\w+)/i],
            [hM, LM, [HM, lM]],
            [/(kin\.[onetw]{3})/i],
            [
              [LM, /\./g, " "],
              [hM, kM],
              [HM, lM]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [LM, [hM, BM],
              [HM, EM]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [LM, [hM, BM],
              [HM, lM]
            ],
            [/smart-tv.+(samsung)/i],
            [hM, [HM, UM]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [LM, /^/, "SmartTV"],
              [hM, AM],
              [HM, UM]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [hM, DM],
              [HM, UM]
            ],
            [/(apple) ?tv/i],
            [hM, [LM, bM + " TV"],
              [HM, UM]
            ],
            [/crkey/i],
            [
              [LM, uM + "cast"],
              [hM, pM],
              [HM, UM]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [LM, [hM, eM],
              [HM, UM]
            ],
            [/(shield \w+ tv)/i],
            [LM, [hM, oM],
              [HM, UM]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [LM, [hM, xM],
              [HM, UM]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [LM, [hM, vM],
              [HM, UM]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [LM, [hM, FM],
              [HM, UM]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [hM, LM, [HM, UM]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [hM, Mr],
              [LM, Mr],
              [HM, UM]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [LM, [HM, UM]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [HM, UM]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [hM, LM, [HM, yM]],
            [/droid.+; (shield)( bui|\))/i],
            [LM, [hM, oM],
              [HM, yM]
            ],
            [/(playstation \w+)/i],
            [LM, [hM, vM],
              [HM, yM]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [LM, [hM, kM],
              [HM, yM]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [LM, [hM, AM],
              [HM, GM]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [hM, LM, [HM, GM]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [LM, [hM, NM],
              [HM, GM]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [LM, [hM, bM],
              [HM, GM]
            ],
            [/(opwwe\d{3})/i],
            [LM, [hM, fM],
              [HM, GM]
            ],
            [/(moto 360)/i],
            [LM, [hM, ZM],
              [HM, GM]
            ],
            [/(smartwatch 3)/i],
            [LM, [hM, vM],
              [HM, GM]
            ],
            [/(g watch r)/i],
            [LM, [hM, DM],
              [HM, GM]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [LM, [hM, BM],
              [HM, GM]
            ],
            [/droid.+; (glass) \d/i],
            [LM, [hM, pM],
              [HM, GM]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [hM, LM, [HM, GM]],
            [/; (quest( \d| pro)?)/i],
            [LM, [hM, XM],
              [HM, GM]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [hM, [HM, CM]],
            [/(aeobc)\b/i],
            [LM, [hM, eM],
              [HM, CM]
            ],
            [/(homepod).+mac os/i],
            [LM, [hM, bM],
              [HM, CM]
            ],
            [/windows iot/i],
            [
              [HM, CM]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [LM, [HM, lM]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [LM, [HM, EM]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [HM, EM]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [HM, lM]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [LM, [hM, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [JM, [mM, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [mM, JM],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [JM, [mM, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [mM, JM],
            [/ladybird\//i],
            [
              [mM, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [JM, mM]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [mM, JM],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [mM, [JM, ir, Or]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [JM, ir, Or],
              [mM, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [JM, /_/g, "."],
              [mM, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [mM, KM],
              [JM, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [JM, mM],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [mM, /(.+)/, "$1 Touch"], JM
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [mM, JM],
            [/\(bb(10);/i],
            [JM, [mM, tM]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [JM, [mM, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [JM, [mM, RM + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [JM, [mM, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [JM, [mM, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [JM, [mM, uM + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [mM, IM], JM
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [mM, JM],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [mM, "Solaris"], JM
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [mM, JM]
          ]
        },
        jr = function(MM, rM) {
          if (typeof MM === nM && (rM = MM, MM = jM), !(this instanceof jr)) return new jr(MM, rM).getResult();
          var iM = typeof SM !== PM && SM.navigator ? SM.navigator : jM,
            OM = MM || (iM && iM.userAgent ? iM.userAgent : ""),
            yM = iM && iM.userAgentData ? iM.userAgentData : jM,
            UM = rM ? function(MM, rM) {
              var iM = {};
              for (var OM in MM) rM[OM] && rM[OM].length % 2 === 0 ? iM[OM] = rM[OM].concat(MM[OM]) : iM[OM] = MM[OM];
              return iM
            }(Sr, rM) : Sr,
            GM = iM && iM.userAgent == OM;
          return this.getBrowser = function() {
            var MM, rM = {};
            return rM[mM] = jM, rM[JM] = jM, rr.call(rM, OM, UM.browser), rM[zM] = typeof(MM = rM[JM]) === QM ? MM.replace(/[^\d\.]/g, "").split(".")[0] : jM, GM && iM && iM.brave && typeof iM.brave.isBrave == aM && (rM[mM] = "Brave"), rM
          }, this.getCPU = function() {
            var MM = {};
            return MM[dM] = jM, rr.call(MM, OM, UM.cpu), MM
          }, this.getDevice = function() {
            var MM = {};
            return MM[hM] = jM, MM[LM] = jM, MM[HM] = jM, rr.call(MM, OM, UM.device), GM && !MM[HM] && yM && yM.mobile && (MM[HM] = lM), GM && "Macintosh" == MM[LM] && iM && typeof iM.standalone !== PM && iM.maxTouchPoints && iM.maxTouchPoints > 2 && (MM[LM] = "iPad", MM[HM] = EM), MM
          }, this.ph = function() {
            var MM = {};
            return MM[mM] = jM, MM[JM] = jM, rr.call(MM, OM, UM.engine), MM
          }, this.getOS = function() {
            var MM = {};
            return MM[mM] = jM, MM[JM] = jM, rr.call(MM, OM, UM.os), GM && !MM[mM] && yM && yM.platform && "Unknown" != yM.platform && (MM[mM] = yM.platform.replace(/chrome os/i, IM).replace(/macos/i, KM)), MM
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.ph(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return OM
          }, this.setUA = function(MM) {
            return OM = typeof MM === QM && MM.length > 500 ? Mr(MM, 500) : MM, this
          }, this.setUA(OM), this
        };
      jr.VERSION = "1.0.41", jr.BROWSER = TM([mM, JM, zM]), jr.CPU = TM([dM]), jr.DEVICE = TM([LM, hM, HM, yM, lM, UM, EM, GM, CM]), jr.ENGINE = jr.OS = TM([mM, JM]), typeof rM !== PM ? (MM.exports && (rM = MM.exports = jr), rM.UAParser = jr) : iM.amdO ? (OM = function() {
        return jr
      }.call(rM, iM, rM, MM)) === jM || (MM.exports = OM) : typeof SM !== PM && (SM.UAParser = jr);
      var ar = typeof SM !== PM && (SM.jQuery || SM.Zepto);
      if (ar && !ar.ua) {
        var Pr = new jr;
        ar.ua = Pr.getResult(), ar.ua.get = function() {
          return Pr.getUA()
        }, ar.ua.set = function(MM) {
          Pr.setUA(MM);
          var rM = Pr.getResult();
          for (var iM in rM) ar.ua[iM] = rM[iM]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);