export const id = 37;
export const ids = [37];
export const modules = {
  7225: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BaseExtension: () => BG,
      BaseInstrumentation: () => OG,
      BaseTransport: () => sD,
      CSPInstrumentation: () => UD,
      ConsoleInstrumentation: () => IG,
      ConsoleTransport: () => GQ,
      EVENT_CLICK: () => WO,
      EVENT_NAVIGATION: () => AO,
      EVENT_ROUTE_CHANGE: () => kO,
      EVENT_SESSION_EXTEND: () => UO,
      EVENT_SESSION_RESUME: () => nO,
      EVENT_SESSION_START: () => SO,
      EVENT_VIEW_CHANGED: () => VO,
      ErrorsInstrumentation: () => iG,
      FetchTransport: () => AQ,
      InternalLoggerLevel: () => eO,
      LogLevel: () => WG,
      MAX_SESSION_PERSISTENCE_TIME: () => yB,
      NavigationInstrumentation: () => ED,
      Observable: () => RG,
      PerformanceInstrumentation: () => bY,
      PersistentSessionsManager: () => rO,
      SESSION_EXPIRATION_TIME: () => QB,
      SESSION_INACTIVITY_TIME: () => oB,
      STORAGE_KEY: () => DB,
      SessionInstrumentation: () => YG,
      TransportItemType: () => xD,
      UserActionInstrumentation: () => nD,
      UserActionState: () => pD,
      VERSION: () => GG,
      ViewInstrumentation: () => gG,
      VolatileSessionsManager: () => XO,
      WebVitalsInstrumentation: () => FY,
      allLogLevels: () => VG,
      browserMeta: () => bD,
      buildStackFrame: () => DG,
      captureMetas: () => gQ,
      createInternalLogger: () => fQ,
      createPromiseBuffer: () => zQ,
      createSession: () => HD,
      deepEqual: () => RO,
      defaultEventDomain: () => YB,
      defaultExceptionType: () => fG,
      defaultGlobalObjectKey: () => kQ,
      defaultInternalLoggerLevel: () => bO,
      defaultLogLevel: () => AG,
      faro: () => qB,
      genShortID: () => NO,
      getCurrentTimestamp: () => pO,
      getDataFromSafariExtensions: () => zG,
      getIgnoreUrls: () => CB,
      getInternalFaroFromGlobalObject: () => zB,
      getStackFramesFromError: () => pG,
      getTransportBody: () => OQ,
      getUrlFromResource: () => vB,
      getWebInstrumentations: () => cD,
      globalObject: () => MB,
      initializeFaro: () => sQ,
      internalGlobalObjectKey: () => PB,
      isArray: () => uB,
      isBoolean: () => fB,
      isDomError: () => wB,
      isDomException: () => EB,
      isElement: () => hB,
      isElementDefined: () => cB,
      NP: () => bB,
      isError: () => rB,
      isErrorDefined: () => gB,
      isErrorEvent: () => XB,
      isEvent: () => LB,
      isEventDefined: () => iB,
      isFunction: () => KB,
      isInstanceOf: () => WB,
      isInt: () => UB,
      isInternalFaroOnGlobalObject: () => pB,
      isMap: () => eB,
      isMapDefined: () => aB,
      isNull: () => VB,
      isNumber: () => nB,
      isObject: () => dB,
      isPrimitive: () => FB,
      isRegExp: () => mB,
      isString: () => SB,
      isSymbol: () => kB,
      isSyntheticEvent: () => TB,
      isThenable: () => IB,
      isToString: () => RB,
      isTypeof: () => NB,
      isUndefined: () => AB,
      makeCoreConfig: () => uQ,
      noop: () => aO,
      osMeta: () => CD,
      parseStacktrace: () => qG,
      sdkMeta: () => vD,
      setInternalFaroOnGlobalObject: () => lB,
      transportItemTypeToBodyKey: () => tD,
      unknownString: () => LG,
      userActionDataAttribute: () => CY,
      userActionTimeoutDataAttribute: () => HY
    });
    const YB = "browser",
      DB = "com.grafana.faro.session",
      QB = 144e5,
      oB = 9e5,
      jB = 1e3,
      yB = oB,
      JB = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: yB
      };
    const MB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof GB.g ? GB.g : "undefined" !== typeof self ? self : void 0;
    const PB = "_faroInternal";

    function zB() {
      return MB[PB]
    }

    function lB(BB) {
      BB.config.isolate ? BB.internalLogger.debug("Skipping registering internal Faro instance on global object") : (BB.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(MB, PB, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: BB
      }))
    }

    function pB() {
      return PB in MB
    }
    let qB = {
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

    function ZB(BB, OB, GB, YB, DB, QB, oB) {
      return OB.debug("Initializing Faro"), qB = {
          api: QB,
          config: GB,
          instrumentations: oB,
          internalLogger: OB,
          metas: YB,
          pause: DB.pause,
          transports: DB,
          unpatchedConsole: BB,
          unpause: DB.unpause
        }, lB(qB),
        function(BB) {
          if (BB.config.preventGlobalExposure) BB.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (BB.internalLogger.debug(`Registering public faro reference in the global scope using "${BB.config.globalObjectKey}" key`), BB.config.globalObjectKey in MB) return void BB.internalLogger.warn(`Skipping global registration due to key "${BB.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(MB, BB.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: BB
            })
          }
        }(qB), qB
    }

    function NB(BB, OB) {
      return typeof BB === OB
    }

    function RB(BB, OB) {
      return Object.prototype.toString.call(BB) === `[object ${OB}]`
    }

    function WB(BB, OB) {
      try {
        return BB instanceof OB
      } catch (GB) {
        return !1
      }
    }
    const AB = BB => NB(BB, "undefined"),
      VB = BB => NB(BB, "null"),
      SB = BB => NB(BB, "string"),
      nB = BB => NB(BB, "number") && !isNaN(BB) || NB(BB, "bigint"),
      UB = BB => nB(BB) && Number.isInteger(BB),
      fB = BB => NB(BB, "boolean"),
      kB = BB => NB(BB, "symbol"),
      dB = BB => !VB(BB) && NB(BB, "object"),
      KB = BB => NB(BB, "function"),
      uB = BB => RB(BB, "Array"),
      mB = BB => RB(BB, "RegExp"),
      IB = BB => KB(null === BB || void 0 === BB ? void 0 : BB.then),
      FB = BB => !dB(BB) && !KB(BB),
      iB = "undefined" !== typeof Event,
      LB = BB => iB && WB(BB, Event),
      gB = "undefined" !== typeof Error,
      rB = BB => gB && WB(BB, Error),
      XB = BB => RB(BB, "ErrorEvent"),
      wB = BB => RB(BB, "DOMError"),
      EB = BB => RB(BB, "DOMException"),
      cB = "undefined" !== typeof Element,
      hB = BB => cB && WB(BB, Element),
      aB = "undefined" !== typeof Map,
      eB = BB => aB && WB(BB, Map),
      TB = BB => dB(BB) && "nativeEvent" in BB && "preventDefault" in BB && "stopPropagation" in BB;

    function bB(BB) {
      return null == BB || (uB(BB) || SB(BB) ? 0 === BB.length : !!dB(BB) && 0 === Object.keys(BB).length)
    }

    function CB() {
      return qB.transports.transports.flatMap((BB => BB.getIgnoreUrls()))
    }

    function HB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return CB().some((OB => BB && null != BB.match(OB)))
    }

    function vB(BB) {
      return SB(BB) ? BB : BB instanceof URL ? BB.href : !bB(BB) && KB(null === BB || void 0 === BB ? void 0 : BB.toString) ? BB.toString() : void 0
    }
    const sB = "sessionStorage",
      xB = "localStorage";

    function tB(BB) {
      try {
        let OB;
        OB = window[BB];
        const GB = "__faro_storage_test__";
        return OB.setItem(GB, GB), OB.removeItem(GB), !0
      } catch (GB) {
        var OB;
        return null === (OB = qB.internalLogger) || void 0 === OB || OB.info(`Web storage of type ${BB} is not available. Reason: ${GB}`), !1
      }
    }

    function BO(BB, OB) {
      return QO(OB) ? window[OB].getItem(BB) : null
    }

    function OO(BB, OB, GB) {
      if (QO(GB)) try {
        window[GB].setItem(BB, OB)
      } catch (YB) {}
    }

    function GO(BB, OB) {
      QO(OB) && window[OB].removeItem(BB)
    }
    const YO = tB(xB),
      DO = tB(sB);

    function QO(BB) {
      return BB === xB ? YO : BB === sB && DO
    }

    function oO(BB) {
      return oO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, oO(BB)
    }

    function jO(BB) {
      var OB = function(BB, OB) {
        if ("object" != oO(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != oO(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == oO(OB) ? OB : OB + ""
    }

    function yO(BB, OB, GB) {
      return (OB = jO(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function JO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function MO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? JO(Object(GB), !0).forEach((function(OB) {
          yO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : JO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function PO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qB;
      var OB, GB, YB;
      const DB = BB.config.sessionTracking,
        QB = null !== (OB = null !== (GB = null === DB || void 0 === DB || null === (YB = DB.sampler) || void 0 === YB ? void 0 : YB.call(DB, {
          metas: BB.metas.value
        })) && void 0 !== GB ? GB : null === DB || void 0 === DB ? void 0 : DB.samplingRate) && void 0 !== OB ? OB : 1,
        oB = "number" === typeof QB ? function(BB) {
          return Math.min(1, Math.max(0, BB))
        }(QB) : 0;
      if (!(oB > 0)) return !1;
      if (1 === oB) return !0;
      try {
        const BB = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === BB || void 0 === BB ? void 0 : BB.getRandomValues)) {
          const OB = new Uint32Array(1);
          return BB.getRandomValues(OB), OB[0] / Math.pow(2, 32) < oB
        }
      } catch (jB) {}
      return Math.random() < oB
    }

    function zO() {
      return Date.now()
    }

    function lO() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function pO() {
      return (new Date).toISOString()
    }

    function qO(BB) {
      return new Date(BB).toISOString()
    }
    const ZO = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function NO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const OB = new Uint32Array(BB),
        GB = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === GB || void 0 === GB ? void 0 : GB.getRandomValues) GB.getRandomValues(OB);
      else
        for (let DB = 0; DB < BB; DB++) OB[DB] = Math.floor(4294967296 * Math.random());
      let YB = "";
      for (let DB = 0; DB < BB; DB++) YB += ZO[OB[DB] % 59];
      return YB
    }

    function RO(BB, OB) {
      if (BB === OB) return !0;
      if (NB(BB, "number") && isNaN(BB)) return NB(OB, "number") && isNaN(OB);
      const GB = uB(BB),
        YB = uB(OB);
      if (GB !== YB) return !1;
      if (GB && YB) {
        const GB = BB.length;
        if (GB !== OB.length) return !1;
        for (let YB = GB; 0 !== YB--;)
          if (!RO(BB[YB], OB[YB])) return !1;
        return !0
      }
      const DB = dB(BB),
        QB = dB(OB);
      if (DB !== QB) return !1;
      if (BB && OB && DB && QB) {
        const GB = Object.keys(BB),
          YB = Object.keys(OB);
        if (GB.length !== YB.length) return !1;
        for (let BB of GB)
          if (!YB.includes(BB)) return !1;
        for (let DB of GB)
          if (!RO(BB[DB], OB[DB])) return !1;
        return !0
      }
      return !1
    }
    const WO = "click",
      AO = "navigation",
      VO = "view_changed",
      SO = "session_start",
      nO = "session_resume",
      UO = "session_extend",
      fO = "service_name_override",
      kO = "route_change";

    function dO() {
      let {
        sessionId: BB,
        started: OB,
        lastActivity: GB,
        isSampled: YB = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, DB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB;
      var QB;
      const oB = zO(),
        jB = null === (QB = DB.config) || void 0 === QB || null === (QB = QB.sessionTracking) || void 0 === QB ? void 0 : QB.generateSessionId;
      return null == BB && (BB = "function" === typeof jB ? jB() : NO()), {
        sessionId: BB,
        lastActivity: null !== GB && void 0 !== GB ? GB : oB,
        started: null !== OB && void 0 !== OB ? OB : oB,
        isSampled: YB
      }
    }

    function KO(BB) {
      if (null == BB) return !1;
      const OB = zO();
      return OB - BB.started < 144e5 && OB - BB.lastActivity < oB
    }

    function uO(BB) {
      let {
        fetchUserSession: OB,
        storeUserSession: GB,
        adoptSession: YB,
        updateInterval: DB = 0
      } = BB, jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB, yB = 0;
      return function() {
        let {
          forceSessionExtend: BB = !1,
          refreshActivity: JB = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var MB, PB;
        if (!OB || !GB) return;
        const zB = zO();
        if (!BB && zB < yB && yB - zB <= DB) return;
        const lB = jB.config.sessionTracking,
          pB = null === lB || void 0 === lB ? void 0 : lB.persistent;
        if (pB && !YO || !pB && !DO) return;
        const qB = OB();
        if (yB = Math.min(zB + DB, (null !== (MB = null === qB || void 0 === qB ? void 0 : qB.started) && void 0 !== MB ? MB : zB) + QB, (null !== (PB = null === qB || void 0 === qB ? void 0 : qB.lastActivity) && void 0 !== PB ? PB : zB) + oB), !1 === BB && KO(qB)) {
          var ZB;
          JB && GB(MO(MO({}, qB), {}, {
            lastActivity: zB
          }));
          const BB = null === (ZB = jB.metas.value.session) || void 0 === ZB ? void 0 : ZB.id;
          null != YB && null != qB.sessionMeta && qB.sessionId !== BB && YB(qB.sessionMeta)
        } else {
          var NB, RB, WB;
          let BB = IO(dO({
            isSampled: PO(jB)
          }, jB), qB, jB);
          yB = zB + DB, GB(BB), null === (NB = jB.api) || void 0 === NB || NB.setSession(BB.sessionMeta), null === lB || void 0 === lB || null === (RB = lB.onSessionChange) || void 0 === RB || RB.call(lB, null !== (WB = null === qB || void 0 === qB ? void 0 : qB.sessionMeta) && void 0 !== WB ? WB : null, BB.sessionMeta)
        }
      }
    }

    function mO(BB) {
      let OB, {
          fetchUserSession: GB,
          storeUserSession: YB,
          updateInterval: DB = 0
        } = BB,
        QB = 0;
      return BB => {
        const oB = zO();
        if (BB === OB && oB < QB && QB - oB <= DB) return;
        OB = BB, QB = oB + DB;
        const jB = GB();
        (null === jB || void 0 === jB ? void 0 : jB.sessionId) === BB && KO(jB) && YB(MO(MO({}, jB), {}, {
          lastActivity: oB
        }))
      }
    }

    function IO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qB;
      var YB, DB, QB, oB, jB, yB;
      const JB = MO(MO({}, BB), {}, {
          sessionMeta: {
            id: BB.sessionId,
            attributes: iO(MO(MO(MO({}, null === (YB = GB.config.sessionTracking) || void 0 === YB || null === (YB = YB.session) || void 0 === YB ? void 0 : YB.attributes), null !== (DB = null === (QB = GB.metas.value.session) || void 0 === QB ? void 0 : QB.attributes) && void 0 !== DB ? DB : {}), {}, {
              isSampled: BB.isSampled.toString()
            }))
          }
        }),
        MB = null !== (oB = null === (jB = GB.metas.value.session) || void 0 === jB ? void 0 : jB.overrides) && void 0 !== oB ? oB : null === OB || void 0 === OB || null === (yB = OB.sessionMeta) || void 0 === yB ? void 0 : yB.overrides;
      bB(MB) || (JB.sessionMeta.overrides = MB);
      const PB = null === OB || void 0 === OB ? void 0 : OB.sessionId;
      return null != PB && (JB.sessionMeta.attributes.previousSession = PB), JB
    }

    function FO(BB) {
      let {
        fetchUserSession: OB,
        storeUserSession: GB
      } = BB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB, DB = !1;
      return function(BB) {
        if (DB) return;
        const QB = BB.session,
          oB = OB();
        let jB = null === QB || void 0 === QB ? void 0 : QB.id;
        const yB = null === QB || void 0 === QB ? void 0 : QB.attributes,
          JB = null === QB || void 0 === QB ? void 0 : QB.overrides,
          MB = null === oB || void 0 === oB ? void 0 : oB.sessionMeta,
          PB = null === MB || void 0 === MB ? void 0 : MB.overrides,
          zB = !!JB && !RO(JB, PB),
          lB = !!yB && !RO(yB, null === MB || void 0 === MB ? void 0 : MB.attributes);
        if (QB && jB !== (null === oB || void 0 === oB ? void 0 : oB.sessionId) || lB || zB) {
          var pB, qB;
          const BB = null != oB && jB === oB.sessionId,
            OB = IO(BB ? oB : dO({
              sessionId: jB,
              isSampled: PO(YB)
            }, YB), oB, YB),
            QB = null === oB || void 0 === oB || null === (pB = oB.sessionMeta) || void 0 === pB || null === (pB = pB.attributes) || void 0 === pB ? void 0 : pB.previousSession;
          BB && null != QB && QB !== OB.sessionId && (OB.sessionMeta.attributes.previousSession = QB), (null === (qB = OB.sessionMeta.attributes) || void 0 === qB ? void 0 : qB.previousSession) === OB.sessionId && delete OB.sessionMeta.attributes.previousSession, GB(OB),
            function(BB, OB) {
              let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var DB, QB, oB;
              if (!OB) return;
              const jB = GB.serviceName,
                yB = null !== (DB = null !== (QB = YB.serviceName) && void 0 !== QB ? QB : null === (oB = BB.metas.value.app) || void 0 === oB ? void 0 : oB.name) && void 0 !== DB ? DB : "";
              jB && jB !== yB && BB.api.pushEvent(fO, {
                serviceName: jB,
                previousServiceName: yB
              })
            }(YB, zB, JB, PB), DB = !0;
          try {
            YB.api.setSession(OB.sessionMeta)
          } finally {
            DB = !1
          }
        }
      }
    }

    function iO(BB) {
      const OB = {};
      for (const GB of Object.keys(BB)) {
        const YB = BB[GB];
        void 0 !== YB && (OB[GB] = YB)
      }
      return OB
    }

    function LO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== BB && void 0 !== BB ? BB : {}, function() {
        const BB = new WeakSet;
        return function(OB, GB) {
          if (dB(GB) && null !== GB) {
            if (BB.has(GB)) return null;
            BB.add(GB)
          }
          return GB
        }
      }())
    }

    function gO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const OB = {};
      for (const [GB, YB] of Object.entries(BB)) OB[GB] = dB(YB) && null !== YB ? LO(YB) : String(YB);
      return OB
    }
    var rO = class BB {
      constructor() {
        var OB = this;
        let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qB;
        this.context = GB, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = BB => {
          this.adopting = !0;
          try {
            var OB;
            null === (OB = this.context.api) || void 0 === OB || OB.setSession(BB)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return OB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = mO({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: jB
        }), this.updateUserSession = uO({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: jB
        }, GB), this.init()
      }
      static removeUserSession() {
        GO(DB, BB.storageTypeLocal)
      }
      static storeUserSession(OB) {
        OO(DB, LO(OB), BB.storageTypeLocal)
      }
      static fetchUserSession() {
        const OB = BO(DB, BB.storageTypeLocal);
        return OB ? JSON.parse(OB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const OB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            OB && this.recordActivity(OB)
          }
        })), this.context.metas.addListener(FO({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    rO.storageTypeLocal = xB;
    var XO = class BB {
      constructor() {
        var OB = this;
        let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qB;
        this.context = GB, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return OB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = mO({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: jB
        }), this.updateUserSession = uO({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: jB
        }, GB), this.init()
      }
      static removeUserSession() {
        GO(DB, BB.storageTypeSession)
      }
      static storeUserSession(OB) {
        OO(DB, LO(OB), BB.storageTypeSession)
      }
      static fetchUserSession() {
        const OB = BO(DB, BB.storageTypeSession);
        return OB ? JSON.parse(OB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const OB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            OB && this.recordActivity(OB)
          }
        })), this.context.metas.addListener(FO({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    XO.storageTypeSession = sB;
    const wO = new WeakMap;

    function EO(BB) {
      let OB = wO.get(BB);
      if (!OB) {
        let GB = [],
          YB = [];
        OB = {
          addSessionUpdateListener: BB => {
            GB.push(BB)
          },
          removeSessionUpdateListener: BB => {
            GB = GB.filter((OB => OB !== BB))
          },
          notifySessionUpdate: BB => {
            GB.forEach((OB => OB(BB)))
          },
          shouldCapture: () => YB.every((BB => BB())),
          addCaptureFilter: BB => {
            YB.push(BB)
          },
          removeCaptureFilter: BB => {
            YB = YB.filter((OB => OB !== BB))
          }
        }, wO.set(BB, OB)
      }
      return OB
    }
    var cO = class {
      constructor(BB, OB, GB) {
        this.metas = BB, this.transports = OB, this.onActivate = GB, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = BB => {
          var OB, GB, YB;
          const DB = this.pending;
          var QB, oB;
          if ("overrides" === BB.type) return void(this.pending = {
            reset: null !== (QB = null === DB || void 0 === DB ? void 0 : DB.reset) && void 0 !== QB && QB,
            inheritOverrides: null === (oB = null === DB || void 0 === DB ? void 0 : DB.inheritOverrides) || void 0 === oB || oB,
            session: MO(MO({}, null === DB || void 0 === DB ? void 0 : DB.session), {}, {
              overrides: MO(MO({}, null === DB || void 0 === DB ? void 0 : DB.session.overrides), BB.overrides)
            })
          });
          const jB = BB.session,
            yB = bB(jB) || null != jB && "id" in jB && !jB.id,
            JB = null !== (OB = null === jB || void 0 === jB ? void 0 : jB.overrides) && void 0 !== OB ? OB : null === DB || void 0 === DB ? void 0 : DB.session.overrides;
          this.pending = {
            reset: yB || !(null === jB || void 0 === jB ? void 0 : jB.id) && null !== (GB = null === DB || void 0 === DB ? void 0 : DB.reset) && void 0 !== GB && GB,
            inheritOverrides: !(!BB.overrides && void 0 !== (null === jB || void 0 === jB ? void 0 : jB.overrides)) && (null === (YB = null === DB || void 0 === DB ? void 0 : DB.inheritOverrides) || void 0 === YB || YB),
            session: {
              id: null === jB || void 0 === jB ? void 0 : jB.id,
              attributes: (null === jB || void 0 === jB ? void 0 : jB.attributes) && MO({}, jB.attributes),
              overrides: BB.overrides ? MO(MO({}, null === DB || void 0 === DB ? void 0 : DB.session.overrides), BB.overrides) : JB && MO({}, JB)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var BB, OB;
        this.waiting = !0, EO(this.metas).addSessionUpdateListener(this.recordUpdate), EO(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (BB = (OB = this.metas).addCaptureListener) || void 0 === BB || BB.call(OB, this.activate), this.activate()
      }
      destroy() {
        var BB, OB;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), EO(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (BB = (OB = this.metas).removeCaptureListener) || void 0 === BB || BB.call(OB, this.activate), EO(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function hO(BB) {
      return (null === BB || void 0 === BB ? void 0 : BB.persistent) ? rO : XO
    }

    function aO() {}
    let eO = function(BB) {
      return BB[BB.OFF = 0] = "OFF", BB[BB.ERROR = 1] = "ERROR", BB[BB.WARN = 2] = "WARN", BB[BB.INFO = 3] = "INFO", BB[BB.VERBOSE = 4] = "VERBOSE", BB
    }({});
    const TO = {
        debug: aO,
        error: aO,
        info: aO,
        prefix: "Faro",
        warn: aO
      },
      bO = 1;

    function CO(BB) {
      return CO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, CO(BB)
    }

    function HO(BB) {
      var OB = function(BB, OB) {
        if ("object" != CO(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != CO(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == CO(OB) ? OB : OB + ""
    }

    function vO(BB, OB, GB) {
      return (OB = HO(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function sO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function xO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? sO(Object(GB), !0).forEach((function(OB) {
          vO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : sO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }
    const tO = xO({}, console);
    var BG = class {
        constructor() {
          this.unpatchedConsole = tO, this.internalLogger = TO, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          this.internalLogger.debug(`${this.name}\n`, ...OB)
        }
        logInfo() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          this.internalLogger.info(`${this.name}\n`, ...OB)
        }
        logWarn() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          this.internalLogger.warn(`${this.name}\n`, ...OB)
        }
        logError() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          this.internalLogger.error(`${this.name}\n`, ...OB)
        }
      },
      OG = class extends BG {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const GG = "2.12.1";
    var YG = class extends OG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = GG, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(BB) {
        var OB;
        const GB = BB.session;
        if (GB && GB.id !== (null === (OB = this.notifiedSession) || void 0 === OB ? void 0 : OB.id)) {
          var YB;
          if (this.isAdoptingSession()) return void(this.notifiedSession = GB);
          if (this.notifiedSession && this.notifiedSession.id === (null === (YB = GB.attributes) || void 0 === YB ? void 0 : YB.previousSession)) return this.api.pushEvent(UO, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = GB);
          this.notifiedSession = GB, this.api.pushEvent(SO, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(BB, OB, GB) {
        const YB = null === GB || void 0 === GB ? void 0 : GB.session;
        let DB, QB, oB = BB.fetchUserSession();
        if (OB.persistent && OB.maxSessionPersistenceTime && oB) {
          const BB = zO();
          oB.lastActivity < BB - OB.maxSessionPersistenceTime && (rO.removeUserSession(), oB = null)
        }
        const jB = KO(oB);
        if ((null === GB || void 0 === GB ? void 0 : GB.reset) || !jB || (null === YB || void 0 === YB ? void 0 : YB.id) && YB.id !== (null === oB || void 0 === oB ? void 0 : oB.sessionId)) {
          var yB, JB, MB, PB, zB, lB;
          QB = dO({
            sessionId: (null === GB || void 0 === GB ? void 0 : GB.reset) ? void 0 : null !== (yB = null === YB || void 0 === YB ? void 0 : YB.id) && void 0 !== yB ? yB : null === (JB = OB.session) || void 0 === JB ? void 0 : JB.id,
            isSampled: PO(this)
          }, this);
          const BB = QB.sessionId,
            pB = GB && jB ? null === oB || void 0 === oB || null === (MB = oB.sessionMeta) || void 0 === MB ? void 0 : MB.overrides : void 0,
            qB = pB ? MO(MO({}, null === (PB = OB.session) || void 0 === PB ? void 0 : PB.overrides), pB) : null === (zB = OB.session) || void 0 === zB ? void 0 : zB.overrides;
          QB.sessionMeta = MO({
            id: BB,
            attributes: MO({
              isSampled: QB.isSampled.toString()
            }, null === (lB = OB.session) || void 0 === lB ? void 0 : lB.attributes)
          }, qB ? {
            overrides: qB
          } : {}), DB = SO
        } else {
          var pB, qB;
          const BB = null === oB || void 0 === oB ? void 0 : oB.sessionId;
          QB = dO({
            sessionId: BB,
            isSampled: oB.isSampled || !1,
            started: null === oB || void 0 === oB ? void 0 : oB.started
          }, this);
          const GB = null === oB || void 0 === oB ? void 0 : oB.sessionMeta,
            YB = MO(MO({}, null === (pB = OB.session) || void 0 === pB ? void 0 : pB.overrides), null === GB || void 0 === GB ? void 0 : GB.overrides);
          QB.sessionMeta = MO(MO({}, OB.session), {}, {
            id: BB,
            attributes: MO(MO(MO({}, null === (qB = OB.session) || void 0 === qB ? void 0 : qB.attributes), null === GB || void 0 === GB ? void 0 : GB.attributes), {}, {
              isSampled: QB.isSampled.toString()
            }),
            overrides: YB
          }), DB = nO
        }
        var ZB;
        if (YB && (QB.sessionMeta = MO(MO({}, QB.sessionMeta), {}, {
            attributes: MO(MO(MO({}, null === (ZB = QB.sessionMeta) || void 0 === ZB ? void 0 : ZB.attributes), YB.attributes), {}, {
              isSampled: QB.isSampled.toString()
            })
          }), YB.overrides)) {
          const BB = (null === GB || void 0 === GB ? void 0 : GB.inheritOverrides) ? MO(MO({}, QB.sessionMeta.overrides), YB.overrides) : YB.overrides;
          Object.keys(BB).length > 0 ? QB.sessionMeta.overrides = BB : delete QB.sessionMeta.overrides
        }
        return {
          initialSession: QB,
          lifecycleType: DB
        }
      }
      registerBeforeSendHook(BB) {
        var OB;
        this.beforeSendHook = OB => {
          var GB, YB;
          const DB = null === (GB = OB.meta.session) || void 0 === GB ? void 0 : GB.id;
          DB && !this.transports.isPaused() && BB(DB);
          const QB = null === (YB = OB.meta.session) || void 0 === YB ? void 0 : YB.attributes;
          if (QB && "true" === (null === QB || void 0 === QB ? void 0 : QB.isSampled)) {
            var oB;
            let BB = JSON.parse(JSON.stringify(OB));
            const GB = null === (oB = BB.meta.session) || void 0 === oB ? void 0 : oB.attributes;
            var jB;
            if (null === GB || void 0 === GB || delete GB.isSampled, 0 === Object.keys(null !== GB && void 0 !== GB ? GB : {}).length) null === (jB = BB.meta.session) || void 0 === jB || delete jB.attributes;
            return BB
          }
          return null
        }, null === (OB = this.transports) || void 0 === OB || OB.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var BB;
        this.logDebug("init session instrumentation");
        const OB = document.prerendering;
        var GB;
        if ((null === (BB = this.config.sessionTracking) || void 0 === BB ? void 0 : BB.enabled) && (OB || this.prerenderSession)) return null !== (GB = this.prerenderSession) && void 0 !== GB || (this.prerenderSession = new cO(this.metas, this.transports, (BB => {
          this.prerenderSession = void 0, this.initializeSession(BB)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(BB) {
        const OB = this.config.sessionTracking;
        if (null === OB || void 0 === OB ? void 0 : OB.enabled) {
          var GB, YB;
          const DB = hO(OB),
            QB = new DB(this);
          this.isAdoptingSession = QB.isAdopting, this.registerBeforeSendHook(QB.recordActivity);
          const {
            initialSession: oB,
            lifecycleType: jB
          } = this.createInitialSession(DB, OB, BB);
          DB.storeUserSession(oB);
          const yB = oB.sessionMeta;
          this.notifiedSession = yB, this.api.setSession(yB), this.captureListener = () => {
            this.transports.isPaused() || QB.updateSession({
              refreshActivity: !1
            })
          }, null === (GB = (YB = this.metas).addCaptureListener) || void 0 === GB || GB.call(YB, this.captureListener), jB === SO && this.api.pushEvent(SO, {}, void 0, {
            skipDedupe: !0
          }), jB === nO && this.api.pushEvent(nO, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var BB, OB, GB;
        (null === (BB = this.prerenderSession) || void 0 === BB || BB.destroy(), this.captureListener) && (null === (OB = (GB = this.metas).removeCaptureListener) || void 0 === OB || OB.call(GB, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function DG(BB, OB, GB, YB) {
      const DB = {
        filename: BB || document.location.href,
        function: OB || "?"
      };
      return void 0 !== GB && (DB.lineno = GB), void 0 !== YB && (DB.colno = YB), DB
    }
    const QG = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      oG = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      jG = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      yG = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      JG = "safari-extension",
      MG = "safari-web-extension",
      PG = /Minified React error #\d+;/i;

    function zG(BB, OB) {
      const GB = null === BB || void 0 === BB ? void 0 : BB.includes(JG),
        YB = !GB && (null === BB || void 0 === BB ? void 0 : BB.includes("safari-web-extension"));
      return GB || YB ? [(null === BB || void 0 === BB ? void 0 : BB.includes("@")) ? BB.split("@")[0] : BB, GB ? `${JG}:${OB}` : `${MG}:${OB}`] : [BB, OB]
    }
    const lG = 1024;

    function pG(BB) {
      let OB = [];
      BB.stacktrace ? OB = BB.stacktrace.split("\n").filter(((BB, OB) => OB % 2 === 0)) : BB.stack && (OB = BB.stack.split("\n"));
      const GB = OB.reduce(((OB, GB, YB) => {
        if (GB.length > lG) return OB;
        let DB, QB, oB, jB, yB;
        if (DB = QG.exec(GB)) {
          if (QB = DB[1], oB = DB[2], jB = DB[3], yB = DB[4], null === oB || void 0 === oB ? void 0 : oB.startsWith("eval")) {
            const BB = oG.exec(oB);
            BB && (oB = BB[1], jB = BB[2], yB = BB[3])
          }
          oB = (null === oB || void 0 === oB ? void 0 : oB.startsWith("address at ")) ? oB.substring(11) : oB, [QB, oB] = zG(QB, oB)
        } else if (DB = jG.exec(GB)) {
          if (QB = DB[1], oB = DB[3], jB = DB[4], yB = DB[5], oB && oB.includes(" > eval")) {
            const BB = yG.exec(oB);
            BB && (QB = QB || "eval", oB = BB[1], jB = BB[2])
          } else 0 === YB && !yB && nB(BB.columnNumber) && (yB = String(BB.columnNumber + 1));
          [QB, oB] = zG(QB, oB)
        }
        return (oB || QB) && OB.push(DG(oB, QB, jB ? Number(jB) : void 0, yB ? Number(yB) : void 0)), OB
      }), []);
      return PG.test(BB.message) ? GB.slice(1) : GB
    }

    function qG(BB) {
      return {
        frames: pG(BB)
      }
    }
    const ZG = "http-request-start",
      NG = "http-request-end";
    var RG = class BB {
      constructor() {
        this.subscribers = []
      }
      subscribe(BB) {
        return this.subscribers.push(BB), {
          unsubscribe: () => this.unsubscribe(BB)
        }
      }
      unsubscribe(BB) {
        this.subscribers = this.subscribers.filter((OB => OB !== BB))
      }
      notify(BB) {
        this.subscribers.forEach((OB => OB(BB)))
      }
      first() {
        const OB = new BB,
          GB = BB => {
            OB.notify(BB), YB.unsubscribe()
          },
          YB = this.subscribe(GB),
          DB = OB.unsubscribe.bind(OB);
        return this.withUnsubscribeOverride(OB, DB, GB)
      }
      takeWhile(OB) {
        const GB = new BB,
          YB = BB => {
            OB(BB) ? GB.notify(BB) : GB.unsubscribe(YB)
          };
        this.subscribe(YB);
        const DB = GB.unsubscribe.bind(GB);
        return this.withUnsubscribeOverride(GB, DB, YB)
      }
      filter(OB) {
        const GB = new BB,
          YB = BB => {
            OB(BB) && GB.notify(BB)
          };
        this.subscribe(YB);
        const DB = GB.unsubscribe.bind(GB);
        return this.withUnsubscribeOverride(GB, DB, YB)
      }
      merge() {
        const OB = new BB,
          GB = [];
        for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
        DB.forEach((BB => {
          const YB = BB.subscribe((BB => {
            OB.notify(BB)
          }));
          GB.push(YB)
        }));
        const oB = OB.unsubscribeAll.bind(OB);
        return OB.unsubscribe = () => {
          GB.forEach((BB => BB.unsubscribe())), oB()
        }, OB
      }
      withUnsubscribeOverride(BB, OB, GB) {
        return BB.unsubscribe = BB => {
          OB(BB), this.unsubscribe(GB)
        }, BB
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let WG = function(BB) {
      return BB.TRACE = "trace", BB.DEBUG = "debug", BB.INFO = "info", BB.LOG = "log", BB.WARN = "warn", BB.ERROR = "error", BB
    }({});
    const AG = "log",
      VG = ["trace", "debug", "info", "log", "warn", "error"];
    let SG, nG = !1;
    const UG = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      fG = "Error",
      kG = BB => BB.map((BB => dB(BB) ? LO(BB) : String(BB))).join(" ");

    function dG(BB) {
      let OB, GB, YB, DB, QB = [];
      if (XB(BB) && BB.error) OB = BB.error.message, GB = BB.error.name, QB = pG(BB.error);
      else if ((YB = wB(BB)) || EB(BB)) {
        const {
          name: DB,
          message: QB
        } = BB;
        GB = null !== DB && void 0 !== DB ? DB : YB ? "DOMError" : "DOMException", OB = QB ? `${GB}: ${QB}` : GB
      } else rB(BB) ? (GB = BB.name, OB = BB.message, QB = pG(BB)) : (dB(BB) || (DB = LB(BB))) && (GB = DB ? BB.constructor.name : void 0, OB = `Non-Error exception captured with keys: ${Object.keys(BB)}`);
      return [OB, GB, QB]
    }

    function KG(BB) {
      const [OB, GB, YB, DB, QB] = BB;
      let oB, jB, yB = [];
      const JB = SB(OB),
        MB = DG(GB, "?", YB, DB);
      return QB || !JB ? ([oB, jB, yB] = dG(null !== QB && void 0 !== QB ? QB : OB), 0 === yB.length && (yB = [MB])) : JB && ([oB, jB] = function(BB) {
        var OB, GB;
        const YB = BB.match(UG),
          DB = null !== (OB = null === YB || void 0 === YB ? void 0 : YB[1]) && void 0 !== OB ? OB : fG;
        return [null !== (GB = null === YB || void 0 === YB ? void 0 : YB[2]) && void 0 !== GB ? GB : BB, DB]
      }(OB), yB = [MB]), {
        value: oB,
        type: jB,
        stackFrames: yB
      }
    }

    function uG(BB, OB) {
      return rB(BB[0]) ? KG(BB) : {
        value: OB(BB)
      }
    }
    const mG = BB => BB.map((BB => {
      try {
        return String(BB)
      } catch (OB) {
        return ""
      }
    })).join(" ");
    var IG = class BB extends OG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = GG, this.errorSerializer = mG
      }
      initialize() {
        var OB, GB;
        const YB = this.config.consoleInstrumentation,
          DB = (null === YB || void 0 === YB ? void 0 : YB.serializeErrors) || !!(null === YB || void 0 === YB ? void 0 : YB.errorSerializer);
        this.errorSerializer = DB ? null !== (OB = null === YB || void 0 === YB ? void 0 : YB.errorSerializer) && void 0 !== OB ? OB : kG : mG;
        const QB = null !== (GB = null === YB || void 0 === YB ? void 0 : YB.disabledLevels) && void 0 !== GB ? GB : BB.defaultDisabledLevels,
          oB = function(BB) {
            if (SG || (SG = new RG), !nG) {
              const OB = null !== BB && void 0 !== BB ? BB : tO;
              VG.forEach((BB => {
                console[BB] = function() {
                  for (var GB, YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
                  SG.notify({
                    type: "console",
                    level: BB,
                    args: DB
                  }), null === (GB = OB[BB]) || void 0 === GB || GB.apply(console, DB)
                }
              })), nG = !0
            }
            return SG
          }(this.unpatchedConsole);
        this.subscription = oB.subscribe((OB => {
          let {
            level: GB,
            args: DB
          } = OB;
          if (!QB.includes(GB)) try {
            if (GB !== WG.ERROR || (null === YB || void 0 === YB ? void 0 : YB.consoleErrorAsLog))
              if (GB === WG.ERROR && (null === YB || void 0 === YB ? void 0 : YB.consoleErrorAsLog)) {
                const {
                  value: OB,
                  type: YB,
                  stackFrames: QB
                } = uG(DB, this.errorSerializer);
                this.api.pushLog(OB ? [BB.consoleErrorPrefix + OB] : DB, {
                  level: GB,
                  context: {
                    value: null !== OB && void 0 !== OB ? OB : "",
                    type: null !== YB && void 0 !== YB ? YB : "",
                    stackFrames: (null === QB || void 0 === QB ? void 0 : QB.length) ? kG(QB) : ""
                  }
                })
              } else this.api.pushLog(DB, {
                level: GB
              });
            else {
              const {
                value: OB,
                type: GB,
                stackFrames: YB
              } = uG(DB, this.errorSerializer);
              if (OB && !GB && !YB) return void this.api.pushError(new Error(BB.consoleErrorPrefix + OB));
              this.api.pushError(new Error(BB.consoleErrorPrefix + OB), {
                type: GB,
                stackFrames: YB
              })
            }
          } catch (oB) {
            this.logError(oB)
          }
        }))
      }
      destroy() {
        var BB;
        null === (BB = this.subscription) || void 0 === BB || BB.unsubscribe(), this.subscription = void 0
      }
    };
    IG.defaultDisabledLevels = [WG.DEBUG, WG.TRACE, WG.LOG], IG.consoleErrorPrefix = "console.error: ";
    const FG = [];
    var iG = class extends OG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = GG
      }
      initialize() {
        this.logDebug("Initializing"),
          function(BB) {
            const OB = window.onerror;
            window.onerror = function() {
              for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
              try {
                const {
                  value: OB,
                  type: GB,
                  stackFrames: DB
                } = KG(YB), QB = YB[4];
                if (OB) {
                  const YB = {
                    type: GB,
                    stackFrames: DB
                  };
                  null != QB && (YB.originalError = QB), BB.pushError(new Error(OB), YB)
                }
              } finally {
                null === OB || void 0 === OB || OB.apply(window, YB)
              }
            }
          }(this.api),
          function(BB) {
            const OB = OB => {
              var GB;
              let YB, DB, QB = OB;
              if (QB.reason) QB = OB.reason;
              else if (null === (GB = OB.detail) || void 0 === GB ? void 0 : GB.reason) {
                var oB;
                QB = null === (oB = OB.detail) || void 0 === oB ? void 0 : oB.reason
              }
              let jB = [];
              FB(QB) ? (YB = `Non-Error promise rejection captured with value: ${String(QB)}`, DB = "UnhandledRejection") : [YB, DB, jB] = dG(QB), YB && BB.pushError(new Error(YB), {
                type: DB,
                stackFrames: jB
              })
            };
            window.addEventListener("unhandledrejection", OB), FG.push(OB)
          }(this.api)
      }
    };
    const LG = "unknown";
    var gG = class extends OG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = GG, this.waitingForActivation = !1, this.sendViewChangedEvent = BB => {
          var OB;
          if (this.waitingForActivation || document.prerendering) return;
          const GB = BB.view;
          if (GB && GB.name !== (null === (OB = this.notifiedView) || void 0 === OB ? void 0 : OB.name)) {
            var YB, DB, QB;
            const BB = null !== (YB = null === (DB = this.notifiedView) || void 0 === DB ? void 0 : DB.name) && void 0 !== YB ? YB : LG;
            this.notifiedView = GB, this.api.pushEvent(VO, {
              fromView: BB,
              toView: null !== (QB = GB.name) && void 0 !== QB ? QB : LG
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
    class rG {
      t;
      o = 0;
      i = [];
      l(BB) {
        if (BB.hadRecentInput) return;
        const OB = this.i[0],
          GB = this.i.at(-1);
        this.o && OB && GB && BB.startTime - GB.startTime < 1e3 && BB.startTime - OB.startTime < 5e3 ? (this.o += BB.value, this.i.push(BB)) : (this.o = BB.value, this.i = [BB]), this.t?.(BB)
      }
    }
    const XG = () => {
        const BB = performance.getEntriesByType("navigation")[0];
        if (BB && BB.responseStart > 0 && BB.responseStart < performance.now()) return BB
      },
      wG = BB => {
        if ("loading" === document.readyState) return "loading";
        const OB = XG();
        if (OB) {
          if (BB < OB.domInteractive) return "loading";
          if (0 === OB.domContentLoadedEventStart || BB < OB.domContentLoadedEventStart) return "dom-interactive";
          if (0 === OB.domComplete || BB < OB.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      EG = BB => {
        const OB = BB.nodeName;
        return 1 === BB.nodeType ? OB.toLowerCase() : OB.toUpperCase().replace(/^#/, "")
      },
      cG = BB => {
        let OB = "";
        try {
          for (; 9 !== BB?.nodeType;) {
            const GB = BB,
              YB = GB.id ? "#" + GB.id : [EG(GB), ...Array.from(GB.classList ?? []).sort()].join(".");
            if (OB.length + YB.length > 99) return OB || YB;
            if (OB = OB ? YB + ">" + OB : YB, GB.id) break;
            BB = GB.parentNode
          }
        } catch {}
        return OB
      },
      hG = new WeakMap;

    function aG(BB, OB) {
      let GB = hG.get(OB);
      return GB || (GB = new WeakMap, hG.set(OB, GB)), GB.get(BB) || GB.set(BB, new OB), GB.get(BB)
    }
    let eG = -1;
    const TG = () => eG,
      bG = BB => {
        addEventListener("pageshow", (OB => {
          OB.persisted && (eG = OB.timeStamp, BB(OB))
        }), !0)
      },
      CG = (BB, OB, GB, YB) => {
        let DB, QB;
        return oB => {
          OB.value >= 0 && (oB || YB) && (QB = OB.value - (DB ?? 0), (QB || void 0 === DB) && (DB = OB.value, OB.delta = QB, OB.rating = ((BB, OB) => BB > OB[1] ? "poor" : BB > OB[0] ? "needs-improvement" : "good")(OB.value, GB), BB(OB)))
        }
      },
      HG = BB => {
        requestAnimationFrame((() => requestAnimationFrame((() => BB()))))
      },
      vG = () => XG()?.activationStart ?? 0;
    let sG = -1;
    const xG = new Set,
      tG = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      BY = BB => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === BB.type)
            for (const BB of xG) BB();
          isFinite(sG) || (sG = "visibilitychange" === BB.type ? BB.timeStamp : 0, removeEventListener("prerenderingchange", BY, !0))
        }
      },
      OY = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (sG = 1 / 0), sG < 0) {
          const BB = vG(),
            OB = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((OB => "hidden" === OB.name && OB.startTime >= BB))?.startTime;
          sG = OB ?? tG(), addEventListener("visibilitychange", BY, !0), addEventListener("prerenderingchange", BY, !0), bG((() => {
            setTimeout((() => {
              sG = tG()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return sG
          },
          onHidden(BB) {
            xG.add(BB)
          }
        }
      },
      GY = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          oB = arguments.length > 6 ? arguments[6] : void 0;
        const jB = XG(),
          yB = jB?.navigationId || 0;
        let JB = "navigate";
        return GB ? JB = GB : TG() >= 0 ? JB = "back-forward-cache" : jB && (document.prerendering || vG() > 0 ? JB = "prerender" : document.wasDiscarded ? JB = "restore" : jB.type && (JB = jB.type.replace(/_/g, "-"))), {
          name: BB,
          value: OB,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: JB,
          navigationId: YB || yB,
          navigationInteractionId: DB,
          navigationURL: QB || jB?.name,
          navigationStartTime: oB || 0
        }
      },
      YY = function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const YB = BB.filter((BB => PerformanceObserver.supportedEntryTypes.includes(BB)));
          if (YB.length > 0) {
            const BB = new PerformanceObserver((BB => {
              queueMicrotask((() => {
                const GB = BB.getEntries();
                YB.length > 1 && GB.sort(((BB, OB) => BB.startTime + BB.duration - (OB.startTime + OB.duration))), OB(GB)
              }))
            }));
            for (const OB of YB) BB.observe({
              type: OB,
              buffered: !0,
              ...GB
            });
            return BB
          }
        } catch {}
      },
      DY = BB => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && BB && BB.reportSoftNavs,
      QY = (BB, OB) => {
        if (BB.set(OB.navigationId, OB), BB.size > 2) {
          const OB = BB.keys().next().value;
          void 0 !== OB && BB.delete(OB)
        }
      },
      oY = BB => {
        let OB = !1;
        return () => {
          OB || (BB(), OB = !0)
        }
      };
    class jY {
      u
    }
    const yY = BB => {
        document.prerendering ? addEventListener("prerenderingchange", BB, !0) : BB()
      },
      JY = [1800, 3e3],
      MY = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = DY(OB);
        yY((() => {
          const YB = aG(OB, jY),
            DB = OY();
          let QB, oB = GY("FCP");
          const jB = YY(["paint"], (BB => {
            for (const OB of BB) "first-contentful-paint" === OB.name && (jB.disconnect(), OB.startTime < DB.firstHiddenTime && (oB.value = Math.max(OB.startTime - vG(), 0), oB.entries.push(OB), oB.navigationId = OB.navigationId || oB.navigationId, QB(!0)))
          }));
          jB && (QB = CG(BB, oB, JY, OB.reportAllChanges), bG((GB => {
            oB = GY("FCP", -1, "back-forward-cache", oB.navigationId, oB.navigationInteractionId, oB.navigationURL, TG()), QB = CG(BB, oB, JY, OB.reportAllChanges), HG((() => {
              oB.value = performance.now() - GB.timeStamp, QB(!0)
            }))
          }))), GB && YY(["soft-navigation"], (GB => {
            GB.forEach((GB => {
              YB.u && GB.navigationId && QY(YB.u, GB);
              const DB = Math.max((GB.presentationTime || GB.paintTime || 0) - GB.startTime, 0);
              oB = GY("FCP", DB, "soft-navigation", GB.navigationId, GB.interactionId, GB.name, GB.startTime), QB = CG(BB, oB, JY, OB.reportAllChanges), QB(!0)
            }))
          }), OB)
        }))
      },
      PY = [.1, .25],
      zY = BB => BB.find((BB => 1 === BB.node?.nodeType)) || BB[0];
    let lY = 0,
      pY = 1 / 0,
      qY = 0;
    const ZY = BB => {
      for (const OB of BB) OB.interactionId && (pY = Math.min(pY, OB.interactionId), qY = Math.max(qY, OB.interactionId), lY = qY ? (qY - pY) / 7 + 1 : 0)
    };
    let NY;
    const RY = () => NY ? lY : performance.interactionCount ?? 0;
    class WY {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return RY() - this.h
      }
      D() {
        this.h = RY(), this.v.length = 0, this.p.clear()
      }
      S(BB) {
        const OB = this.T(),
          GB = Math.min(this.v.length - 1, Math.floor(OB / 50));
        return !OB || -1 !== GB || "soft-navigation" !== BB && "back-forward-cache" !== BB ? this.v[GB] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(BB) {
        if (this.m?.(BB), !BB.interactionId) return;
        const OB = this.v.at(-1);
        let GB = this.p.get(BB.interactionId);
        if (GB || this.v.length < 10 || BB.duration > OB.k) {
          if (GB ? BB.duration > GB.k ? (GB.entries = [BB], GB.k = BB.duration) : BB.duration === GB.k && BB.startTime === GB.entries[0].startTime && GB.entries.push(BB) : (GB = {
              id: BB.interactionId,
              entries: [BB],
              k: BB.duration
            }, this.p.set(GB.id, GB), this.v.push(GB)), this.v.sort(((BB, OB) => OB.k - BB.k)), this.v.length > 10) {
            const BB = this.v.splice(10);
            for (const OB of BB) this.p.delete(OB.id)
          }
          this.M?.(GB)
        }
      }
    }
    const AY = BB => {
        const OB = "requestIdleCallback" in globalThis ? 1e3 : 0,
          GB = globalThis.requestIdleCallback || setTimeout,
          YB = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) BB();
        else {
          const DB = oY(BB);
          let QB = -1;
          const oB = () => {
            YB(QB), DB()
          };
          addEventListener("visibilitychange", oB, {
            once: !0,
            capture: !0
          }), QB = GB((() => {
            removeEventListener("visibilitychange", oB, {
              capture: !0
            }), DB()
          }), {
            timeout: OB
          })
        }
      },
      VY = [200, 500],
      SY = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = aG(OB = Object.assign({}, OB), WY);
        let YB = [],
          DB = [],
          QB = 0;
        const oB = new WeakMap,
          jB = new WeakMap;
        let yB = !1;
        const JB = () => {
            yB || (yB = !0, AY(MB))
          },
          MB = () => {
            const BB = new Set(GB.v.map((BB => oB.get(BB.entries[0])))),
              OB = DB.length - 10;
            DB = DB.filter(((GB, YB) => YB >= OB || BB.has(GB)));
            const jB = new Set;
            for (const GB of DB) {
              const BB = PB(GB.startTime, GB.processingEnd);
              for (const OB of BB) jB.add(OB)
            }
            const JB = YB.length - 10;
            YB = YB.filter(((BB, OB) => jB.has(BB) || OB >= JB && BB.startTime > QB)), yB = !1
          };
        GB.m = BB => {
          const GB = BB.startTime + BB.duration;
          let YB;
          QB = Math.max(QB, BB.processingEnd);
          for (let QB = DB.length - 1; QB >= 0; QB--) {
            const oB = DB[QB];
            if (Math.abs(GB - oB.renderTime) <= 8) {
              YB = oB, YB.startTime = Math.min(BB.startTime, YB.startTime), YB.processingStart = Math.min(BB.processingStart, YB.processingStart), YB.processingEnd = Math.max(BB.processingEnd, YB.processingEnd), OB.includeProcessedEventEntries && YB.entries.push(BB);
              break
            }
          }
          YB || (YB = {
            startTime: BB.startTime,
            processingStart: BB.processingStart,
            processingEnd: BB.processingEnd,
            renderTime: GB,
            entries: OB.includeProcessedEventEntries ? [BB] : []
          }, DB.push(YB)), BB.interactionId && oB.set(BB, YB), JB()
        }, GB.M = BB => {
          if (!jB.get(BB)) {
            const GB = BB.entries.find((BB => BB.target))?.target;
            if (GB) {
              const YB = OB.generateTarget?.(GB) ?? cG(GB);
              jB.set(BB, YB)
            } else {
              const OB = BB.entries.find((BB => BB.targetSelector))?.targetSelector;
              OB && jB.set(BB, OB)
            }
          }
        };
        const PB = (BB, OB) => {
          const GB = [];
          for (const DB of YB)
            if (!(DB.startTime + DB.duration < BB)) {
              if (DB.startTime > OB) break;
              GB.push(DB)
            } return GB
        };
        YY(["long-animation-frame"], (BB => {
            YB = YB.concat(BB), JB()
          }), OB),
          function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const GB = OY();
            yY((() => {
              "interactionCount" in performance || NY || (NY = YY(["event"], ZY, {
                durationThreshold: 0
              }));
              let YB, DB = GY("INP");
              const QB = aG(OB, WY),
                oB = (GB, oB, jB, yB, JB) => {
                  QB.D(), DB = GY("INP", -1, GB, oB, jB, yB, JB), YB = CG(BB, DB, VY, OB.reportAllChanges)
                },
                jB = () => {
                  const BB = QB.S(DB.navigationType);
                  BB && BB.k !== DB.value && (DB.value = BB.k, DB.entries = BB.entries, YB())
                },
                yB = BB => {
                  jB(), YB(!0), oB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                },
                JB = function(BB) {
                  let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  AY((() => {
                    for (const OB of BB) "soft-navigation" !== OB.entryType ? QB.l(OB) : yB(OB);
                    jB(), OB && YB(!0)
                  }))
                },
                MB = ["event", "first-input"];
              DY(OB) && MB.push("soft-navigation");
              const PB = YY(MB, JB, {
                ...OB,
                durationThreshold: OB.durationThreshold ?? 40
              });
              YB = CG(BB, DB, VY, OB.reportAllChanges), PB && (GB.onHidden((() => {
                JB(PB.takeRecords(), !0)
              })), bG((() => {
                oB("back-forward-cache", DB.navigationId, DB.navigationInteractionId, DB.navigationURL, TG())
              })))
            }))
          }((OB => {
            BB((BB => {
              if (0 === BB.entries.length) {
                const OB = BB.navigationStartTime || 0,
                  GB = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: BB.value,
                    loadState: wG(OB)
                  };
                return Object.assign(BB, {
                  attribution: GB
                })
              }
              const OB = BB.entries[0],
                YB = oB.get(OB),
                DB = Math.max(YB.processingStart, OB.startTime),
                QB = Math.max(OB.startTime + OB.duration, DB),
                yB = Math.min(YB.processingEnd, QB),
                JB = YB.entries.sort(((BB, OB) => BB.processingStart - OB.processingStart)),
                MB = PB(OB.startTime, yB),
                zB = GB.p.get(OB.interactionId),
                lB = {
                  interactionTarget: jB.get(zB),
                  interactionType: OB.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: OB.startTime,
                  nextPaintTime: QB,
                  processedEventEntries: JB,
                  longAnimationFrameEntries: MB,
                  inputDelay: DB - OB.startTime,
                  processingDuration: yB - DB,
                  presentationDelay: QB - yB,
                  loadState: wG(OB.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (BB => {
                const OB = BB.interactionTime,
                  GB = BB.nextPaintTime;
                if (!BB.longAnimationFrameEntries?.length || !OB || !GB) return;
                const YB = BB.inputDelay,
                  DB = BB.processingDuration;
                let QB, oB, jB = 0,
                  yB = 0,
                  JB = 0,
                  MB = 0;
                for (const lB of BB.longAnimationFrameEntries) {
                  yB = yB + lB.startTime + lB.duration - lB.styleAndLayoutStart;
                  for (const BB of lB.scripts) {
                    const GB = BB.startTime + BB.duration;
                    if (GB < OB) continue;
                    const JB = GB - Math.max(OB, BB.startTime),
                      PB = BB.duration ? JB / BB.duration * BB.forcedStyleAndLayoutDuration : 0;
                    jB += JB - PB, yB += PB, JB > MB && (oB = BB.startTime < OB + YB ? "input-delay" : BB.startTime >= OB + YB + DB ? "presentation-delay" : "processing-duration", QB = BB, MB = JB)
                  }
                }
                const PB = BB.longAnimationFrameEntries.at(-1),
                  zB = PB ? PB.startTime + PB.duration : 0;
                zB >= OB + YB + DB && (JB = GB - zB), QB && oB && (BB.longestScript = {
                  entry: QB,
                  subpart: oB,
                  intersectingDuration: MB
                }), BB.totalScriptDuration = jB, BB.totalStyleAndLayoutDuration = yB, BB.totalPaintDuration = JB, BB.totalUnattributedDuration = GB - OB - jB - yB - JB
              })(lB), Object.assign(BB, {
                attribution: lB
              })
            })(OB))
          }), OB)
      };
    class nY {
      m;
      u;
      l(BB) {
        this.m?.(BB)
      }
    }
    const UY = [2500, 4e3];
    let fY = 50;
    const kY = [];
    YY(["resource"], (BB => {
      for (const OB of BB) kY.push(OB), kY.length > fY && kY.shift()
    }));
    const dY = [800, 1800],
      KY = BB => {
        document.prerendering ? yY((() => KY(BB))) : "complete" !== document.readyState ? addEventListener("load", (() => KY(BB)), !0) : setTimeout(BB)
      },
      uY = "load_state",
      mY = "time_to_first_byte";
    var IY = class {
        constructor(BB, OB) {
          this.corePushMeasurement = BB, this.webVitalConfig = OB
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var BB;
          ! function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const GB = aG(OB = Object.assign({}, OB), rG),
              YB = new WeakMap;
            GB.t = BB => {
                if (BB?.sources?.length) {
                  const GB = zY(BB.sources),
                    DB = GB?.node;
                  if (DB) {
                    const BB = OB.generateTarget?.(DB) ?? cG(DB);
                    YB.set(GB, BB)
                  }
                }
              },
              function(BB) {
                let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const GB = OY();
                MY(oY((() => {
                  let YB, DB = GY("CLS", 0);
                  const QB = aG(OB, rG),
                    oB = (GB, oB, jB, yB, JB) => {
                      DB = GY("CLS", 0, GB, oB, jB, yB, JB), QB.o = 0, YB = CG(BB, DB, PY, OB.reportAllChanges)
                    },
                    jB = function() {
                      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      QB.o > DB.value && (DB.value = QB.o, DB.entries = QB.i), YB(BB)
                    },
                    yB = BB => {
                      jB(!0), oB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                    },
                    JB = BB => {
                      for (const OB of BB) "soft-navigation" !== OB.entryType ? QB.l(OB) : yB(OB);
                      jB()
                    },
                    MB = ["layout-shift"];
                  DY(OB) && MB.push("soft-navigation");
                  const PB = YY(MB, JB);
                  PB && (YB = CG(BB, DB, PY, OB.reportAllChanges), GB.onHidden((() => {
                    JB(PB.takeRecords()), YB(!0)
                  })), bG((() => {
                    oB("back-forward-cache", DB.navigationId, DB.navigationInteractionId, DB.navigationURL, TG()), HG(YB)
                  })), setTimeout(YB))
                })))
              }((OB => {
                BB((BB => {
                  let OB = {};
                  if (BB.entries.length) {
                    const GB = BB.entries.reduce(((BB, OB) => BB.value > OB.value ? BB : OB));
                    if (GB?.sources?.length) {
                      const BB = zY(GB.sources);
                      BB && (OB = {
                        largestShiftTarget: YB.get(BB),
                        largestShiftTime: GB.startTime,
                        largestShiftValue: GB.value,
                        largestShiftSource: BB,
                        largestShiftEntry: GB,
                        loadState: wG(GB.startTime)
                      })
                    }
                  }
                  return Object.assign(BB, {
                    attribution: OB
                  })
                })(OB))
              }), OB)
          }((BB => {
            const {
              loadState: OB,
              largestShiftValue: GB,
              largestShiftTime: YB,
              largestShiftTarget: DB
            } = BB.attribution, QB = this.buildInitialValues(BB);
            this.addIfPresent(QB, "largest_shift_value", GB), this.addIfPresent(QB, "largest_shift_time", YB);
            const oB = this.buildInitialContext(BB);
            this.addIfPresent(oB, uY, OB), this.addIfPresent(oB, "largest_shift_target", DB), this.pushMeasurement(QB, oB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureFCP() {
          var BB;
          ! function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const GB = aG(OB = Object.assign({}, OB), jY);
            DY(OB) && (GB.u = new Map), MY((OB => {
              BB((BB => {
                let OB = {
                  timeToFirstByte: 0,
                  firstByteToFCP: BB.value,
                  loadState: wG(TG())
                };
                if ("soft-navigation" !== BB.navigationType) {
                  if (BB.entries.length) {
                    const GB = XG(),
                      YB = BB.entries.at(-1);
                    if (GB) {
                      const DB = GB.responseStart,
                        QB = GB.activationStart || 0,
                        oB = Math.max(0, DB - QB);
                      OB = {
                        timeToFirstByte: oB,
                        firstByteToFCP: BB.value - oB,
                        loadState: wG(BB.entries[0].startTime),
                        navigationEntry: GB,
                        fcpEntry: YB
                      }
                    }
                  }
                } else {
                  const YB = GB.u?.get(BB.navigationId);
                  YB && (OB = {
                    timeToFirstByte: 0,
                    firstByteToFCP: BB.value,
                    loadState: "complete",
                    navigationEntry: YB
                  })
                }
                return Object.assign(BB, {
                  attribution: OB
                })
              })(OB))
            }), OB)
          }((BB => {
            const {
              firstByteToFCP: OB,
              timeToFirstByte: GB,
              loadState: YB
            } = BB.attribution, DB = this.buildInitialValues(BB);
            this.addIfPresent(DB, "first_byte_to_fcp", OB), this.addIfPresent(DB, mY, GB);
            const QB = this.buildInitialContext(BB);
            this.addIfPresent(QB, uY, YB), this.pushMeasurement(DB, QB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureINP() {
          var BB;
          SY((BB => {
            var OB;
            const {
              interactionTime: GB,
              presentationDelay: YB,
              inputDelay: DB,
              processingDuration: QB,
              nextPaintTime: oB,
              loadState: jB,
              interactionTarget: yB,
              interactionType: JB,
              totalScriptDuration: MB,
              totalStyleAndLayoutDuration: PB,
              totalPaintDuration: zB,
              totalUnattributedDuration: lB,
              longestScript: pB
            } = BB.attribution, qB = this.buildInitialValues(BB);
            this.addIfPresent(qB, "interaction_time", GB), this.addIfPresent(qB, "presentation_delay", YB), this.addIfPresent(qB, "input_delay", DB), this.addIfPresent(qB, "processing_duration", QB), this.addIfPresent(qB, "next_paint_time", oB), this.addNumberIfDefined(qB, "total_script_duration", MB), this.addNumberIfDefined(qB, "total_style_and_layout_duration", PB), this.addNumberIfDefined(qB, "total_paint_duration", zB), this.addNumberIfDefined(qB, "total_unattributed_duration", lB), this.addNumberIfDefined(qB, "longest_script_intersecting_duration", null === pB || void 0 === pB ? void 0 : pB.intersectingDuration);
            const ZB = this.buildInitialContext(BB);
            this.addIfPresent(ZB, uY, jB), this.addIfPresent(ZB, "interaction_target", yB), this.addIfPresent(ZB, "interaction_type", JB), this.addIfPresent(ZB, "longest_script_subpart", null === pB || void 0 === pB ? void 0 : pB.subpart), this.addIfPresent(ZB, "longest_script_invoker_type", null === pB || void 0 === pB ? void 0 : pB.entry.invokerType), (null === (OB = this.webVitalConfig) || void 0 === OB ? void 0 : OB.trackAttributionSources) && (this.addIfPresent(ZB, "longest_script_invoker", null === pB || void 0 === pB ? void 0 : pB.entry.invoker), this.addIfPresent(ZB, "longest_script_source_url", null === pB || void 0 === pB ? void 0 : pB.entry.sourceURL), this.addIfPresent(ZB, "longest_script_source_function_name", null === pB || void 0 === pB ? void 0 : pB.entry.sourceFunctionName), this.addIfPresent(ZB, "longest_script_source_char_position", void 0 !== (null === pB || void 0 === pB ? void 0 : pB.entry.sourceCharPosition) ? String(pB.entry.sourceCharPosition) : void 0)), this.pushMeasurement(qB, ZB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureLCP() {
          var BB;
          ! function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (OB = Object.assign({}, OB)).resourceBufferSize && (fY = OB.resourceBufferSize);
            const GB = aG(OB, nY),
              YB = new WeakMap;
            DY(OB) && (GB.u = new Map), GB.m = BB => {
                const GB = BB.element;
                if (GB) {
                  const DB = OB.generateTarget?.(GB) ?? cG(GB);
                  YB.set(BB, DB)
                } else BB.id && YB.set(BB, `#${BB.id}`)
              },
              function(BB) {
                let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  GB = !1;
                const YB = DY(OB);
                yY((() => {
                  let DB, QB = OY(),
                    oB = GY("LCP");
                  const jB = aG(OB, nY),
                    yB = (YB, jB, yB, JB, MB) => {
                      oB = GY("LCP", -1, YB, jB, yB, JB, MB), DB = CG(BB, oB, UY, OB.reportAllChanges), GB = !1, "soft-navigation" === YB && (QB = OY(!0))
                    },
                    JB = BB => {
                      jB.u && BB.navigationId && QY(jB.u, BB), GB || DB(!0), yB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime);
                      const OB = BB.getLargestInteractionContentfulPaint?.();
                      OB && MB([OB])
                    },
                    MB = BB => {
                      OB.reportAllChanges || YB || (BB = BB.slice(-1));
                      for (const OB of BB) {
                        if (!OB) continue;
                        if ("soft-navigation" === OB.entryType) {
                          JB(OB);
                          continue
                        }
                        let BB = 0,
                          GB = [],
                          YB = OB.startTime;
                        if ("largest-contentful-paint" === OB.entryType) BB = Math.max(OB.startTime - vG(), 0), jB.l(OB), GB = [OB];
                        else if ("interaction-contentful-paint" === OB.entryType) {
                          const DB = OB;
                          if (!oB.navigationId) continue;
                          if ("interactionId" in DB && DB.interactionId != oB.navigationInteractionId) continue;
                          YB = DB.largestContentfulPaint?.renderTime || 0, BB = Math.max(YB - OB.startTime, 0), DB.largestContentfulPaint && (jB.l(DB.largestContentfulPaint), GB = [DB.largestContentfulPaint])
                        }
                        YB < QB.firstHiddenTime && (oB.value = BB, oB.entries = GB, DB())
                      }
                    },
                    PB = ["largest-contentful-paint"];
                  YB && PB.push("interaction-contentful-paint", "soft-navigation");
                  const zB = YY(PB, MB);
                  if (zB) {
                    DB = CG(BB, oB, UY, OB.reportAllChanges);
                    const QB = ["keydown", "click", "visibilitychange"],
                      jB = BB => {
                        if (BB.isTrusted && !GB) {
                          const BB = oB.id;
                          AY((() => {
                            if (!GB) {
                              if (!YB) {
                                zB.disconnect();
                                for (const BB of QB) removeEventListener(BB, jB, {
                                  capture: !0
                                })
                              }
                              BB === oB.id && (GB = !0, DB(!0))
                            }
                          }))
                        }
                      };
                    for (const BB of QB) addEventListener(BB, jB, {
                      capture: !0
                    });
                    bG((YB => {
                      yB("back-forward-cache", oB.navigationId, oB.navigationInteractionId, oB.navigationURL, TG()), DB = CG(BB, oB, UY, OB.reportAllChanges), HG((() => {
                        oB.value = performance.now() - YB.timeStamp, GB = !0, DB(!0)
                      }))
                    }))
                  }
                }))
              }((OB => {
                BB((BB => {
                  let OB = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: BB.value
                  };
                  if (BB.entries.length) {
                    const DB = BB.entries.at(-1),
                      QB = BB => BB.name === DB.url && (BB.requestStart || BB.startTime) <= DB.startTime,
                      oB = DB.url && (kY.findLast(QB) || performance.getEntriesByType("resource").findLast(QB));
                    let jB;
                    OB.target = YB.get(DB), OB.lcpEntry = DB, DB.url && (OB.url = DB.url), oB && (OB.lcpResourceEntry = oB);
                    let yB = 0,
                      JB = 0;
                    if ("soft-navigation" !== BB.navigationType ? (jB = XG(), yB = jB?.activationStart ?? 0, JB = jB?.responseStart ?? 0) : (yB = BB.navigationStartTime || 0, jB = GB.u?.get(BB.navigationId)), jB) {
                      const GB = Math.max(0, JB - yB),
                        YB = Math.max(GB, oB ? (oB.requestStart || oB.startTime) - yB : 0),
                        DB = Math.min(BB.value, Math.max(YB, oB ? oB.responseEnd - yB : 0));
                      OB = {
                        ...OB,
                        timeToFirstByte: GB,
                        resourceLoadDelay: YB - GB,
                        resourceLoadDuration: DB - YB,
                        elementRenderDelay: BB.value - DB,
                        navigationEntry: jB
                      }
                    }
                  }
                  return Object.assign(BB, {
                    attribution: OB
                  })
                })(OB))
              }), OB)
          }((BB => {
            var OB;
            const {
              elementRenderDelay: GB,
              resourceLoadDelay: YB,
              resourceLoadDuration: DB,
              timeToFirstByte: QB,
              target: oB,
              url: jB,
              lcpResourceEntry: yB
            } = BB.attribution, JB = this.buildInitialValues(BB);
            this.addIfPresent(JB, "element_render_delay", GB), this.addIfPresent(JB, "resource_load_delay", YB), this.addIfPresent(JB, "resource_load_duration", DB), this.addIfPresent(JB, mY, QB);
            const MB = this.buildInitialContext(BB);
            this.addIfPresent(MB, "element", oB), (null === (OB = this.webVitalConfig) || void 0 === OB ? void 0 : OB.trackAttributionSources) && (this.addIfPresent(MB, "resource_url", jB), this.addIfPresent(MB, "resource_delivery_type", null === yB || void 0 === yB ? void 0 : yB.deliveryType), this.addIfPresent(MB, "resource_initiator_type", null === yB || void 0 === yB ? void 0 : yB.initiatorType)), this.pushMeasurement(JB, MB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureTTFB() {
          var BB;
          ! function(BB) {
            ! function(BB) {
              let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const GB = DY(OB);
              let YB = GY("TTFB"),
                DB = CG(BB, YB, dY, OB.reportAllChanges);
              KY((() => {
                const QB = XG();
                if (QB) {
                  const oB = QB.responseStart;
                  YB.value = Math.max(oB - vG(), 0), YB.entries = [QB], DB(!0), bG((() => {
                    YB = GY("TTFB", 0, "back-forward-cache", YB.navigationId, YB.navigationInteractionId, YB.navigationURL, TG()), DB = CG(BB, YB, dY, OB.reportAllChanges), DB(!0)
                  })), GB && YY(["soft-navigation"], (GB => {
                    GB.forEach((GB => {
                      GB.navigationId && (YB = GY("TTFB", 0, "soft-navigation", GB.navigationId, GB.interactionId, GB.name, GB.startTime), YB.entries = [GB], DB = CG(BB, YB, dY, OB.reportAllChanges), DB(!0))
                    }))
                  }), OB)
                }
              }))
            }((OB => {
              BB((BB => {
                const OB = BB.entries[0];
                let GB = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: OB
                };
                if (BB.entries.length && OB instanceof PerformanceNavigationTiming) {
                  const YB = OB.activationStart || 0,
                    DB = Math.max((OB.workerStart || OB.fetchStart || 0) - YB, 0),
                    QB = Math.max(OB.domainLookupStart - YB, 0),
                    oB = Math.max(OB.connectStart - YB, 0),
                    jB = Math.max(OB.connectEnd - YB, 0);
                  GB = {
                    waitingDuration: DB,
                    cacheDuration: QB - DB,
                    dnsDuration: oB - QB,
                    connectionDuration: jB - oB,
                    requestDuration: BB.value - jB,
                    navigationEntry: OB
                  }
                }
                return Object.assign(BB, {
                  attribution: GB
                })
              })(OB))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((BB => {
            const {
              dnsDuration: OB,
              connectionDuration: GB,
              requestDuration: YB,
              waitingDuration: DB,
              cacheDuration: QB
            } = BB.attribution, oB = this.buildInitialValues(BB);
            this.addIfPresent(oB, "dns_duration", OB), this.addIfPresent(oB, "connection_duration", GB), this.addIfPresent(oB, "request_duration", YB), this.addIfPresent(oB, "waiting_duration", DB), this.addIfPresent(oB, "cache_duration", QB);
            const jB = this.buildInitialContext(BB);
            this.pushMeasurement(oB, jB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        buildInitialValues(BB) {
          return {
            [BB.name.toLowerCase()]: BB.value,
            delta: BB.delta
          }
        }
        buildInitialContext(BB) {
          var OB;
          const GB = null !== (OB = BO("com.grafana.faro.lastNavigationId", sB)) && void 0 !== OB ? OB : LG;
          return {
            id: BB.id,
            rating: BB.rating,
            navigation_type: BB.navigationType,
            navigation_entry_id: GB
          }
        }
        pushMeasurement(BB, OB) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: BB
          }, {
            context: OB
          })
        }
        addIfPresent(BB, OB, GB) {
          GB && (BB[OB] = GB)
        }
        addNumberIfDefined(BB, OB, GB) {
          void 0 !== GB && (BB[OB] = GB)
        }
      },
      FY = class extends OG {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = GG
        }
        initialize() {
          this.logDebug("Initializing"), new IY(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const iY = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function LY() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const OB of BB)
        if ("traceparent" === OB.name) {
          if (!iY.test(OB.description)) continue;
          const [, BB, GB] = OB.description.split("-");
          if (null != BB && null != GB) return {
            traceId: BB,
            spanId: GB
          };
          break
        }
    }

    function gY(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: GB,
        monoNow: YB
      } = OB;
      return Math.min(GB, GB - (YB - BB))
    }

    function rY(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [GB, YB] of Object.entries(OB)) {
        const OB = BB[GB];
        return null != OB && (uB(YB) ? YB.includes(OB) : OB === YB)
      }
      return !0
    }

    function XY(BB) {
      const {
        connectEnd: OB,
        connectStart: GB,
        decodedBodySize: YB,
        domainLookupEnd: DB,
        domainLookupStart: QB,
        duration: oB,
        encodedBodySize: jB,
        fetchStart: yB,
        initiatorType: JB,
        name: MB,
        nextHopProtocol: PB,
        redirectEnd: zB,
        redirectStart: lB,
        renderBlockingStatus: pB,
        requestStart: qB,
        responseEnd: ZB,
        responseStart: NB,
        responseStatus: RB,
        secureConnectionStart: WB,
        transferSize: AB,
        workerStart: VB
      } = BB;
      return {
        name: MB,
        httpHost: EY(MB),
        duration: cY(oB),
        tcpHandshakeTime: cY(OB - GB),
        dnsLookupTime: cY(DB - QB),
        tlsNegotiationTime: cY(OB - WB),
        responseStatus: cY(RB),
        redirectTime: cY(zB - lB),
        requestTime: cY(NB - qB),
        responseTime: cY(ZB - NB),
        fetchTime: cY(ZB - yB),
        serviceWorkerTime: cY(VB > 0 ? yB - VB : 0),
        decodedBodySize: cY(YB),
        encodedBodySize: cY(jB),
        cacheHitStatus: function() {
          let BB = "fullLoad";
          0 === AB ? YB > 0 && (BB = "cache") : null != RB ? 304 === RB && (BB = "conditionalFetch") : jB > 0 && AB < jB && (BB = "conditionalFetch");
          return BB
        }(),
        renderBlockingStatus: cY(pB),
        protocol: PB,
        initiatorType: JB,
        visibilityState: document.visibilityState,
        ttfb: cY(NB - qB),
        transferSize: cY(AB)
      }
    }

    function wY(BB) {
      const {
        activationStart: OB,
        domComplete: GB,
        domContentLoadedEventEnd: YB,
        domContentLoadedEventStart: DB,
        domInteractive: QB,
        fetchStart: oB,
        loadEventEnd: jB,
        loadEventStart: yB,
        responseStart: JB,
        type: MB
      } = BB, PB = function() {
        var BB;
        return null != (null === (BB = performance.timing) || void 0 === BB ? void 0 : BB.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return MO(MO({}, XY(BB)), {}, {
        pageLoadTime: cY(GB - oB),
        documentParsingTime: cY(PB ? QB - PB : null),
        domProcessingTime: cY(GB - QB),
        domContentLoadHandlerTime: cY(YB - DB),
        onLoadTime: cY(jB - yB),
        ttfb: cY(Math.max(JB - (null !== OB && void 0 !== OB ? OB : 0), 0)),
        type: MB
      })
    }

    function EY(BB) {
      try {
        return new URL(BB).host || LG
      } catch (OB) {
        return LG
      }
    }

    function cY(BB) {
      return null == BB ? LG : "number" === typeof BB ? Math.round(BB > 0 ? BB : 0).toString() : BB.toString()
    }
    const hY = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function aY(BB, OB, GB, YB, DB, QB, oB) {
      try {
        var jB = BB[QB](oB),
          yB = jB.value
      } catch (BB) {
        return void GB(BB)
      }
      jB.done ? OB(yB) : Promise.resolve(yB).then(YB, DB)
    }

    function eY(BB) {
      return function() {
        var OB = this,
          GB = arguments;
        return new Promise((function(YB, DB) {
          var QB = BB.apply(OB, GB);

          function oB(BB) {
            aY(QB, YB, DB, oB, jB, "next", BB)
          }

          function jB(BB) {
            aY(QB, YB, DB, oB, jB, "throw", BB)
          }
          oB(void 0)
        }))
      }
    }
    const TY = new RG;
    var bY = class extends OG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = GG
      }
      initialize() {
        var BB = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let OB = !1;
        const GB = () => {
          ! function(BB) {
            if ("complete" === document.readyState) BB();
            else {
              const OB = () => {
                "complete" === document.readyState && (BB(), document.removeEventListener("readystatechange", OB))
              };
              document.addEventListener("readystatechange", OB)
            }
          }(eY((function*() {
            if (OB) return;
            const GB = BB.api.pushEvent,
              {
                faroNavigationId: YB
              } = yield function(BB) {
                let OB;
                const GB = new Promise((BB => {
                  OB = BB
                }));
                return new PerformanceObserver((GB => {
                  var YB;
                  const [DB] = GB.getEntries();
                  if (null == DB || HB(DB.name)) return;
                  const QB = DB.toJSON();
                  let oB = LY(null === QB || void 0 === QB ? void 0 : QB.serverTiming);
                  const jB = null !== (YB = BO("com.grafana.faro.lastNavigationId", sB)) && void 0 !== YB ? YB : LG,
                    yB = MO(MO({}, wY(QB)), {}, {
                      faroNavigationId: NO(),
                      faroPreviousNavigationId: jB
                    });
                  OO("com.grafana.faro.lastNavigationId", yB.faroNavigationId, sB), BB("faro.performance.navigation", yB, void 0, {
                    spanContext: oB,
                    timestampOverwriteMs: gY(QB.startTime)
                  }), OB(yB)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), GB
              }(GB);
            OB || null == YB || function(BB, OB, GB, YB) {
              const DB = YB.trackResources;
              new PerformanceObserver((YB => {
                const QB = YB.getEntries(),
                  oB = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const jB of QB) {
                  if (HB(jB.name)) continue;
                  null === GB || void 0 === GB || GB.notify({
                    type: "resource"
                  });
                  const YB = jB.toJSON();
                  let QB = LY(null === YB || void 0 === YB ? void 0 : YB.serverTiming);
                  (null == DB && rY(YB, hY) || DB) && OB("faro.performance.resource", MO(MO({}, XY(YB)), {}, {
                    faroNavigationId: BB,
                    faroResourceId: NO()
                  }), void 0, {
                    spanContext: QB,
                    timestampOverwriteMs: gY(YB.startTime, oB)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(YB, GB, TY, BB.config)
          })))
        };
        this.cancelInitialization = () => {
          OB = !0, document.removeEventListener("prerenderingchange", GB)
        }, document.prerendering ? document.addEventListener("prerenderingchange", GB, {
          once: !0
        }) : GB()
      }
      destroy() {
        var BB;
        null === (BB = this.cancelInitialization) || void 0 === BB || BB.call(this), this.cancelInitialization = void 0
      }
    };
    const CY = "data-faro-user-action-name",
      HY = CY.replace(/-name$/, "-timeout"),
      vY = 1e3;

    function sY(BB) {
      return `data-${(BB.startsWith("data-")?BB.slice(5):BB).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function xY(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aO;
      if (void 0 === BB) return OB;
      let YB = NaN;
      try {
        YB = "string" === typeof BB && "" === BB.trim() ? NaN : Number(BB)
      } catch (DB) {}
      return !Number.isFinite(YB) || YB <= 0 ? (GB(`initialActivityTimeout must be a finite number greater than zero; using ${OB} ms`), OB) : YB > 1e3 ? (GB(`initialActivityTimeout cannot exceed ${vY} ms; clamping to the maximum`), vY) : YB
    }

    function tY(BB, OB, GB) {
      return void 0 !== BB && window.clearTimeout(BB), window.setTimeout((() => {
        OB()
      }), GB)
    }

    function BD(BB) {
      return BB.type === NG
    }
    let OD, GD;

    function YD() {
      return OD || (OD = new RG), GD || (GD = new MutationObserver(((BB, OB) => {
        OD.notify({
          type: "dom-mutation"
        })
      })), GD.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), OD
    }
    const DD = "fetch",
      QD = "xhr";
    let oD, jD, yD, JD, MD = !1;

    function PD() {
      if (oD) return oD;

      function BB(BB) {
        oD.notify({
          type: ZG,
          request: BB
        })
      }

      function OB(BB) {
        oD.notify({
          type: NG,
          request: BB
        })
      }
      return oD = new RG, MD || (! function(BB) {
        let {
          onRequestEnd: OB,
          onRequestStart: GB
        } = BB;
        yD || (yD = window.fetch);
        window.fetch = function() {
          var BB, YB;
          const DB = null !== (BB = vB(arguments[0])) && void 0 !== BB ? BB : "",
            QB = HB(DB),
            oB = (null !== (YB = arguments[1]) && void 0 !== YB ? YB : {}).method,
            jB = NO();
          return QB || GB({
            url: DB,
            method: oB,
            requestId: jB,
            apiType: DD
          }), yD.apply(this, arguments).then((BB => (QB || OB({
            url: DB,
            method: oB,
            requestId: jB,
            apiType: DD
          }), BB))).catch((BB => {
            throw QB || OB({
              url: DB,
              method: oB,
              requestId: jB,
              apiType: DD
            }), BB
          }))
        }
      }({
        onRequestStart: BB,
        onRequestEnd: OB
      }), function(BB) {
        let {
          onRequestStart: OB,
          onRequestEnd: GB
        } = BB;
        jD || (jD = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const BB = arguments[1],
            YB = HB(BB),
            DB = arguments[0],
            QB = NO();
          this.addEventListener("loadstart", (function() {
            YB || OB({
              url: BB,
              method: DB,
              requestId: QB,
              apiType: QD
            })
          })), this.addEventListener("load", (function() {
            YB || GB({
              url: BB,
              method: DB,
              requestId: QB,
              apiType: QD
            })
          })), this.addEventListener("error", (function() {
            YB || GB({
              url: BB,
              method: DB,
              requestId: QB,
              apiType: QD
            })
          })), this.addEventListener("abort", (function() {
            YB || GB({
              url: BB,
              method: DB,
              requestId: QB,
              apiType: QD
            })
          })), jD.apply(this, arguments)
        }
      }({
        onRequestStart: BB,
        onRequestEnd: OB
      }), MD = !0), oD
    }
    let zD, lD = !1;
    let pD = function(BB) {
      return BB[BB.Started = 0] = "Started", BB[BB.Halted = 1] = "Halted", BB[BB.Cancelled = 2] = "Cancelled", BB[BB.Ended = 3] = "Ended", BB
    }({});
    var qD = class {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = BB, this.logDebug = OB, this.initialActivityTimeout = GB, this.http = PD(), this.dom = YD(), this.perf = (JD || (JD = new RG), lD || (zD = TY.subscribe((BB => {
          "resource" === BB.type && JD.notify({
            type: "resource-entry"
          })
        })), lD = !0), JD), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new RG).merge(this.http, this.dom, this.perf).takeWhile((() => [pD.Started, pD.Halted].includes(this.userAction.getState()))).filter((BB => !!(this.userAction.getState() !== pD.Halted || BD(BB) && this.runningRequests.has(BB.request.requestId)))).subscribe((BB => {
          (function(BB) {
            return BB.type === ZG
          })(BB) && this.runningRequests.set(BB.request.requestId, BB.request), BD(BB) && this.runningRequests.delete(BB.request.requestId), BD(BB) ? this.userAction.getState() === pD.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((BB => [pD.Ended, pD.Cancelled].includes(BB))).first().subscribe((() => this.cleanup())), this.startupTid = tY(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === pD.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === pD.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = tY(this.haltTid, (() => {
          this.userAction.getState() === pD.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var BB, OB;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (BB = this.allMonitorsSub) || void 0 === BB || BB.unsubscribe(), null === (OB = this.stateSub) || void 0 === OB || OB.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(BB) {
        void 0 !== BB && window.clearTimeout(BB)
      }
    };

    function ZD(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aO;
      var GB;
      const {
        api: YB,
        config: DB,
        internalLogger: QB
      } = BB, oB = xY(null === (GB = DB.userActionsInstrumentation) || void 0 === GB ? void 0 : GB.initialActivityTimeout, 100, OB);
      return {
        processUserEvent: function(BB) {
          var OB, GB;
          const QB = null !== (OB = null === (GB = DB.userActionsInstrumentation) || void 0 === GB ? void 0 : GB.dataAttributeName) && void 0 !== OB ? OB : CY,
            oB = BB.target;
          if (!(oB instanceof Element)) return;
          const jB = function(BB, OB) {
              let GB = BB;
              for (; GB;) {
                if (GB.hasAttribute(OB)) return GB;
                GB = GB.parentElement
              }
              return null
            }(oB, sY(QB)),
            yB = function(BB, OB) {
              if (!BB) return;
              const GB = function(BB) {
                  return sY(BB).slice(5).replace(/-(.)/g, ((BB, OB) => OB.toUpperCase()))
                }(OB),
                YB = BB.dataset;
              for (const DB in YB)
                if (DB === GB) return YB[DB]
            }(jB, QB);
          if (!jB || !yB) return;
          const JB = function(BB, OB) {
            const GB = BB.getAttribute(function(BB) {
              const OB = sY(BB);
              return OB.endsWith("-name") ? `${OB.slice(0,-5)}-timeout` : `${OB}-timeout`
            }(OB));
            return null === GB ? void 0 : Number(GB)
          }(jB, QB);
          YB.startUserAction(yB, {}, {
            triggerName: BB.type,
            initialActivityTimeout: JB
          })
        },
        processUserActionStarted: function(BB, GB) {
          const YB = BB,
            DB = xY(GB, oB, OB);
          new qD(YB, QB.debug, DB).attach()
        }
      }
    }
    const ND = "user_action_start",
      RD = {
        Normal: "normal",
        Critical: "critical"
      };
    var WD = class {
        constructor() {
          this.buffer = []
        }
        addItem(BB) {
          this.buffer.push(BB)
        }
        flushBuffer(BB) {
          if (KB(BB))
            for (const OB of this.buffer) BB(OB);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      AD = class extends RG {
        constructor(BB) {
          let {
            name: OB,
            parentId: GB,
            trigger: YB,
            transports: DB,
            attributes: QB,
            trackUserActionsExcludeItem: oB,
            importance: jB = RD.Normal,
            pushEvent: yB
          } = BB;
          super(), this.name = OB, this.attributes = QB, this.id = NO(), this.trigger = YB, this.parentId = null !== GB && void 0 !== GB ? GB : this.id, this.trackUserActionsExcludeItem = oB, this.importance = jB, this._pushEvent = yB, this._itemBuffer = new WD, this._transports = DB, this._state = 0, this._start()
        }
        addItem(BB) {
          return 0 === this._state && (this._itemBuffer.addItem(BB), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = zO(), this._startTimeMono = lO())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((BB => {
            this._transports.execute(BB)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const BB = zO(),
            OB = lO() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((BB => {
            if (function(BB, OB) {
                return (null === OB || void 0 === OB ? void 0 : OB(BB)) || "measurement" === BB.type && "web-vitals" === BB.payload.type
              }(BB, this.trackUserActionsExcludeItem)) return void this._transports.execute(BB);
            const OB = xO(xO({}, BB), {}, {
              payload: xO(xO({}, BB.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(OB)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", xO({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: BB.toString(),
            userActionDuration: OB.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, gO(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: BB => (BB.action = {
              id: this.id,
              name: this.name
            }, BB)
          })
        }
        getState() {
          return this._state
        }
      };
    const VD = new RG;

    function SD(BB, OB) {
      return !!BB && (0 === (null === BB || void 0 === BB ? void 0 : BB.getState()) && (BB.addItem(OB), !0))
    }
    var nD = class extends OG {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = GG
        }
        initialize() {
          const {
            processUserEvent: BB,
            processUserActionStarted: OB
          } = ZD(qB, (BB => this.logWarn(BB)));
          this._processUserEvent = BB, this._processKeydown = OB => {
            [" ", "Enter"].includes(OB.key) && BB(OB)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = VD.subscribe((BB => {
            let {
              type: GB,
              userAction: YB,
              initialActivityTimeout: DB
            } = BB;
            "user_action_start" === GB && OB(YB, DB)
          }))
        }
        destroy() {
          var BB;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (BB = this._userActionSub) || void 0 === BB || BB.unsubscribe()
        }
      },
      UD = class extends OG {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = GG, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(BB) {
          const OB = {
            blockedURI: BB.blockedURI,
            columnNumber: BB.columnNumber,
            disposition: BB.disposition,
            documentURI: BB.documentURI,
            effectiveDirective: BB.effectiveDirective,
            lineNumber: BB.lineNumber,
            originalPolicy: BB.originalPolicy,
            referrer: BB.referrer,
            sample: BB.sample,
            sourceFile: BB.sourceFile,
            statusCode: BB.statusCode,
            violatedDirective: BB.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", gO(OB))
        }
      };
    var fD = class extends RG {
      constructor(BB, OB) {
        var GB, YB, DB, QB;
        super(), this._tracking = !1, this.eventsObservable = BB, this._options = {
          inactivityMs: null !== (GB = null === OB || void 0 === OB ? void 0 : OB.inactivityMs) && void 0 !== GB ? GB : 100,
          drainTimeoutMs: null !== (YB = null === OB || void 0 === OB ? void 0 : OB.drainTimeoutMs) && void 0 !== YB ? YB : 1e4,
          isOperationStart: null !== (DB = null === OB || void 0 === OB ? void 0 : OB.isOperationStart) && void 0 !== DB ? DB : () => {},
          isOperationEnd: null !== (QB = null === OB || void 0 === OB ? void 0 : OB.isOperationEnd) && void 0 !== QB ? QB : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((BB => {
          var OB;
          this._lastEventTime = lO(), null === (OB = this._currentEvents) || void 0 === OB || OB.push(BB);
          const GB = this._options.isOperationStart(BB);
          var YB;
          GB && (null === (YB = this._activeOperations) || void 0 === YB || YB.set(GB, !0));
          const DB = this._options.isOperationEnd(BB);
          var QB;
          DB && (null === (QB = this._activeOperations) || void 0 === QB || QB.delete(DB));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = lO(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let BB;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), BB = this.hasActiveOperations() ? lO() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: BB
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = kD(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = kD(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(BB) {
        BB && clearTimeout(BB)
      }
    };

    function kD(BB, OB, GB) {
      return BB && clearTimeout(BB), BB = setTimeout((() => {
        OB()
      }), GB)
    }
    let dD;
    const KD = new Set,
      uD = new Map;
    let mD, ID, FD, iD, LD, gD, rD, XD, wD = !1;
    var ED = class extends OG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = GG
      }
      initialize() {
        const BB = PD(),
          OB = YD(),
          GB = function() {
            function BB(BB, OB) {
              const GB = null !== OB && void 0 !== OB ? OB : location.href;
              GB !== ID && (mD.notify({
                type: "url-change",
                from: ID,
                to: GB,
                trigger: BB
              }), ID = GB)
            }
            if (mD || (mD = new RG, ID = location.href), !wD)
              if ("navigation" in window && "NavigateEvent" in window) {
                rD = OB => {
                  try {
                    const GB = null === OB || void 0 === OB ? void 0 : OB.destination;
                    (null === GB || void 0 === GB ? void 0 : GB.sameDocument) && "string" === typeof GB.url && BB("navigate", GB.url)
                  } catch (GB) {}
                }, window.navigation.addEventListener("navigate", rD);
                const OB = window.NavigateEvent;
                OB && OB.prototype && "function" === typeof OB.prototype.intercept && (XD || (XD = OB.prototype.intercept), OB.prototype.intercept = function(OB) {
                  try {
                    const OB = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      GB = null === this || void 0 === this ? void 0 : this.destination;
                    OB && GB && !1 === GB.sameDocument && "string" === typeof GB.url && BB("navigate-intercept", GB.url)
                  } catch (GB) {}
                  return XD.call(this, OB)
                }), wD = !0
              } else FD || (FD = window.history.pushState), window.history.pushState = function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                const DB = FD.apply(window.history, GB);
                return BB("pushState"), DB
              }, iD || (iD = window.history.replaceState), window.history.replaceState = function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                const DB = iD.apply(window.history, GB);
                return BB("replaceState"), DB
              }, LD = () => BB("popstate"), gD = () => BB("hashchange"), window.addEventListener("popstate", LD), window.addEventListener("hashchange", gD), wD = !0;
            return mD
          }(),
          YB = (DB = ["pointerdown", "keydown"], dD || (dD = new RG), DB.forEach((BB => {
            if (!KD.has(BB)) {
              const OB = () => {
                dD.notify({
                  type: "interaction",
                  name: BB
                })
              };
              window.addEventListener(BB, OB), KD.add(BB), uD.set(BB, OB)
            }
          })), dD);
        var DB;
        const QB = new fD((new RG).merge(BB, OB, GB), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: BB => function(BB) {
            return BB.type === ZG
          }(BB) ? BB.request.requestId : void 0,
          isOperationEnd: BB => function(BB) {
            return BB.type === NG
          }(BB) ? BB.request.requestId : void 0
        });
        QB.filter((BB => "tracking-ended" === BB.message)).subscribe((BB => {
          var OB, GB;
          if ((null === (OB = BB.events) || void 0 === OB ? void 0 : OB.some((BB => "url-change" === BB.type))) && (null === (GB = BB.events) || void 0 === GB ? void 0 : GB.some((BB => "dom-mutation" === BB.type)))) {
            var YB;
            const OB = null === (YB = BB.events) || void 0 === YB ? void 0 : YB.find((BB => "url-change" === BB.type));
            qB.api.pushEvent("faro.navigation", {
              fromUrl: null === OB || void 0 === OB ? void 0 : OB.from,
              toUrl: null === OB || void 0 === OB ? void 0 : OB.to,
              sameDocument: String(!0),
              duration: BB.duration
            })
          }
        })), YB.subscribe((() => {
          QB.startTracking()
        }))
      }
    };

    function cD() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const OB = [new nD, new iG, new FY, new YG, new gG, new ED];
      return !1 !== BB.enablePerformanceInstrumentation && OB.unshift(new bY), !1 !== BB.enableContentSecurityPolicyInstrumentation && OB.push(new UD), !1 !== BB.captureConsole && OB.push(new IG), OB
    }
    var hD = GB(7227);
    let aD, eD;

    function TD() {
      const BB = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return aD === BB && eD || (eD = new hD.UAParser(BB).getResult(), aD = BB), eD
    }
    const bD = () => {
        const {
          browser: BB,
          os: OB,
          ua: GB
        } = TD(), {
          name: YB,
          version: DB
        } = BB, {
          name: QB,
          version: oB
        } = OB, jB = navigator.language, yB = GB.includes("Mobi"), JB = function() {
          if (!YB || !DB) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== YB && void 0 !== YB ? YB : LG,
            version: null !== DB && void 0 !== DB ? DB : LG,
            os: `${null!==QB&&void 0!==QB?QB:LG} ${null!==oB&&void 0!==oB?oB:LG}`,
            userAgent: null !== GB && void 0 !== GB ? GB : LG,
            language: null !== jB && void 0 !== jB ? jB : LG,
            mobile: yB,
            brands: null !== JB && void 0 !== JB ? JB : LG,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      CD = () => {
        const {
          name: BB,
          version: OB
        } = TD().os;
        if (!BB && !OB) return {};
        const GB = {};
        return BB && (GB.name = BB), OB && (GB.version = OB), {
          os: GB
        }
      };

    function HD(BB) {
      var OB, GB, YB;
      return {
        id: null !== (OB = null === (GB = qB.config) || void 0 === GB || null === (GB = GB.sessionTracking) || void 0 === GB || null === (YB = GB.generateSessionId) || void 0 === YB ? void 0 : YB.call(GB)) && void 0 !== OB ? OB : NO(),
        attributes: BB
      }
    }
    const vD = () => ({
      sdk: {
        name: "faro-web",
        version: GG
      }
    });
    var sD = class extends BG {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let xD = function(BB) {
      return BB.EXCEPTION = "exception", BB.LOG = "log", BB.MEASUREMENT = "measurement", BB.TRACE = "trace", BB.EVENT = "event", BB
    }({});
    const tD = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function BQ(BB, OB) {
      var GB, YB;
      if (void 0 === OB) return BB;
      if (void 0 === BB) return {
        resourceSpans: OB
      };
      const DB = null === (GB = BB.resourceSpans) || void 0 === GB ? void 0 : GB[0];
      if (void 0 === DB) return BB;
      const QB = (null === DB || void 0 === DB ? void 0 : DB.scopeSpans) || [],
        oB = (null === OB || void 0 === OB || null === (YB = OB[0]) || void 0 === YB ? void 0 : YB.scopeSpans) || [];
      return xO(xO({}, BB), {}, {
        resourceSpans: [xO(xO({}, DB), {}, {
          scopeSpans: [...QB, ...oB]
        })]
      })
    }

    function OQ(BB) {
      let OB = {
        meta: {}
      };
      return void 0 !== BB[0] && (OB.meta = BB[0].meta), BB.forEach((BB => {
        switch (BB.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const GB = tD[BB.type],
              YB = OB[GB];
            OB = xO(xO({}, OB), {}, {
              [GB]: void 0 === YB ? [BB.payload] : [...YB, BB.payload]
            });
            break
          }
          case "trace":
            OB = xO(xO({}, OB), {}, {
              traces: BQ(OB.traces, BB.payload.resourceSpans)
            })
        }
      })), OB
    }
    var GQ = class extends sD {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-console", this.version = GG
      }
      send(BB) {
        var OB;
        return this.unpatchedConsole[null !== (OB = this.options.level) && void 0 !== OB ? OB : WG.DEBUG]("New event", OQ([BB]))
      }
    };
    const YQ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      DQ = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      QQ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      oQ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      jQ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      yQ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function JQ(BB) {
      let {
        weekday: OB,
        day: GB,
        month: YB,
        year: DB,
        hour: QB,
        minute: oB,
        second: jB
      } = BB;
      if (DB < 1900 || GB < 1 || QB > 23 || oB > 59 || jB > 60) return;
      const yB = 60 === jB,
        JB = new Date(0);
      return JB.setUTCFullYear(DB, YB, GB), JB.setUTCHours(QB, oB, yB ? 59 : jB, 0), JB.getUTCDay() === OB && JB.getUTCDate() === GB && JB.getUTCMonth() === YB && JB.getUTCFullYear() === DB && JB.getUTCHours() === QB && JB.getUTCMinutes() === oB && JB.getUTCSeconds() === (yB ? 59 : jB) ? JB.getTime() + (yB ? 1e3 : 0) : void 0
    }
    var MQ = class {
      constructor(BB) {
        this.options = BB, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var BB = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const OB = this.sequence++;
        let GB = !1;
        return {
          deliver: function() {
            var GB = eY((function*(GB) {
              const YB = BB.options.getNow();
              let DB, QB = 0;
              for (;;) {
                var oB, jB, yB;
                const JB = BB.options.retry.maxAttempts - QB,
                  MB = yield BB.runAttempt((() => GB(JB, BB.unloading)), QB > 0);
                if (QB += MB.attemptsMade, "success" === MB.kind) return {
                  kind: "success",
                  attempts: QB,
                  elapsedTimeMs: BB.options.getNow() - YB
                };
                if (DB = MB.failure, "terminal" === MB.kind || BB.unloading) return {
                  kind: "terminal",
                  attempts: QB,
                  elapsedTimeMs: BB.options.getNow() - YB,
                  failure: DB
                };
                if (QB >= BB.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: QB,
                  elapsedTimeMs: BB.options.getNow() - YB,
                  failure: DB,
                  reason: "retries-exhausted"
                };
                if (null != MB.retryAfterMs && MB.retryAfterMs > BB.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: QB,
                  elapsedTimeMs: BB.options.getNow() - YB,
                  failure: DB,
                  reason: "retry-after-too-long"
                };
                const PB = Math.min(null !== (oB = MB.retryAfterMs) && void 0 !== oB ? oB : BB.options.retry.initialBackoffMs * Math.pow(BB.options.retry.backoffMultiplier, QB - 1), BB.options.retry.maxBackoffMs);
                if (null === (jB = (yB = BB.options).onRetry) || void 0 === jB || jB.call(yB, PB, QB + 1), yield BB.waitForTurn(OB, PB)) {
                  const OB = BB.options.retry.maxAttempts - QB,
                    DB = yield BB.runAttempt((() => GB(OB, !0)));
                  return QB += DB.attemptsMade, {
                    kind: "success" === DB.kind ? "success" : "terminal",
                    attempts: QB,
                    elapsedTimeMs: BB.options.getNow() - YB,
                    failure: "success" === DB.kind ? void 0 : DB.failure
                  }
                }
              }
            }));
            return function(BB) {
              return GB.apply(this, arguments)
            }
          }(),
          release: () => {
            GB || (GB = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const BB = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const OB of BB) OB.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((GB, YB) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const OB = () => {
                this.inProgress--, this.runNextAttempt()
              };
              BB().then((BB => {
                OB(), GB(BB)
              }), (BB => {
                OB(), YB(BB)
              }))
            },
            isRedelivery: OB
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const BB = this.options.getNow(),
            OB = this.attemptQueue.findIndex((OB => {
              let {
                isRedelivery: GB
              } = OB;
              return this.unloading || !GB || BB >= this.nextSendAt
            }));
          if (OB < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - BB)));
          const [GB] = this.attemptQueue.splice(OB, 1);
          GB.isRedelivery && !this.unloading && (this.nextSendAt = BB + 1), GB.run()
        }
      }
      waitForTurn(BB, OB) {
        const GB = Math.min(OB * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((OB => {
          this.waiting.push({
            sequence: BB,
            readyAt: this.options.getNow() + GB,
            resolve: OB
          }), this.waiting.sort(((BB, OB) => BB.readyAt === OB.readyAt ? BB.sequence - OB.sequence : BB.readyAt - OB.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const BB = this.waiting[0],
          OB = BB.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const OB = this.waiting.indexOf(BB);
          OB >= 0 && this.waiting.splice(OB, 1), BB.resolve(!1), this.scheduleNext()
        }), Math.max(0, OB - this.options.getNow()))
      }
    };

    function PQ(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if ({}.hasOwnProperty.call(BB, YB)) {
            if (OB.includes(YB)) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.includes(GB) || {}.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function zQ(BB) {
      const {
        size: OB,
        concurrency: GB
      } = BB, YB = [];
      let DB = 0;
      const QB = () => {
        if (DB < GB && YB.length) {
          const {
            producer: BB,
            resolve: OB,
            reject: GB
          } = YB.shift();
          DB++, BB().then((BB => {
            DB--, QB(), OB(BB)
          }), (BB => {
            DB--, QB(), GB(BB)
          }))
        }
      };
      return {
        add: BB => {
          if (YB.length + DB >= OB) throw new Error("Task buffer full");
          return new Promise(((OB, GB) => {
            YB.push({
              producer: BB,
              resolve: OB,
              reject: GB
            }), QB()
          }))
        }
      }
    }
    const lQ = ["headers"],
      pQ = ["keepalive", "signal"],
      qQ = new Set([408, 425, 429, 500, 502, 503, 504]),
      ZQ = new Set([429, 503]);
    let NQ = 0,
      RQ = 0;
    var WQ = class extends Error {};
    var AQ = class extends sD {
      constructor(BB) {
        var OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB;
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = GG, this.pendingCustomSends = 0, this.getNow = null !== (OB = BB.getNow) && void 0 !== OB ? OB : Date.now, this.requestTimeoutMs = null !== (GB = BB.requestTimeoutMs) && void 0 !== GB ? GB : 1e4, this.compressionEnabled = null !== (YB = BB.requestCompression) && void 0 !== YB && YB && "undefined" !== typeof CompressionStream, BB.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new MQ({
          bufferSize: null !== (DB = BB.bufferSize) && void 0 !== DB ? DB : 30,
          concurrency: null !== (QB = BB.concurrency) && void 0 !== QB ? QB : 5,
          retry: {
            maxAttempts: null !== (oB = null === (jB = BB.retry) || void 0 === jB ? void 0 : jB.maxAttempts) && void 0 !== oB ? oB : 3,
            initialBackoffMs: null !== (yB = null !== (JB = null === (MB = BB.retry) || void 0 === MB ? void 0 : MB.initialBackoffMs) && void 0 !== JB ? JB : BB.defaultRateLimitBackoffMs) && void 0 !== yB ? yB : 1e3,
            maxBackoffMs: null !== (PB = null === (zB = BB.retry) || void 0 === zB ? void 0 : zB.maxBackoffMs) && void 0 !== PB ? PB : 3e4,
            backoffMultiplier: null !== (lB = null === (pB = BB.retry) || void 0 === pB ? void 0 : pB.backoffMultiplier) && void 0 !== lB ? lB : 2
          },
          getNow: this.getNow,
          getRandom: null !== (qB = BB.getRandom) && void 0 !== qB ? qB : Math.random,
          onRetry: (BB, OB) => {
            this.logDebug(`Retrying failed request after ${BB}ms. Attempt ${OB}.`)
          }
        }), this.customPromiseBuffer = zQ({
          size: null !== (ZB = BB.bufferSize) && void 0 !== ZB ? ZB : 30,
          concurrency: null !== (NB = BB.concurrency) && void 0 !== NB ? NB : 5
        }), this.defaultPromiseBuffer = {
          add: BB => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(BB);
            const OB = this.deliveryQueue.reserve();
            if (!OB) throw new Error("Task buffer full");
            return this.runBufferedTask(OB, BB)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (BB => {
          BB.persisted && this.deliveryQueue.resume()
        })))
      }
      send(BB) {
        var OB = this;
        return eY((function*() {
          const GB = OB.promiseBuffer;
          if (GB !== OB.defaultPromiseBuffer || GB.add !== OB.defaultBufferAdd) {
            OB.pendingCustomSends++;
            try {
              yield GB.add((() => OB.deliver(BB)))
            } catch (YB) {
              OB.logError("Permanent delivery failure", {
                error: YB,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              OB.pendingCustomSends--
            }
          } else yield OB.deliver(BB)
        }))()
      }
      runBufferedTask(BB, OB) {
        return eY((function*() {
          let GB;
          try {
            return yield BB.deliver(eY((function*() {
              return GB = yield OB(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), GB
          } finally {
            BB.release()
          }
        }))()
      }
      deliver(BB) {
        var OB = this;
        return eY((function*() {
          const GB = OB.deliveryQueue.reserve();
          if (GB) try {
            const YB = yield OB.prepareRequest(BB), DB = yield GB.deliver(((BB, GB) => OB.performAttempt(YB, BB, GB)));
            "terminal" === DB.kind && OB.logError("retries-exhausted" === DB.reason ? "Delivery retries exhausted" : "Permanent delivery failure", MO(MO({}, DB.failure), {}, {
              reason: DB.reason,
              attempts: DB.attempts,
              elapsedTimeMs: DB.elapsedTimeMs
            }))
          } catch (YB) {
            OB.logError("Permanent delivery failure", {
              error: YB,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            GB.release()
          } else OB.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var BB;
        return [this.options.url].concat(null !== (BB = this.config.ignoreUrls) && void 0 !== BB ? BB : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(BB) {
        var OB = this;
        return eY((function*() {
          var GB, YB;
          const DB = OQ(BB),
            QB = null === (GB = DB.meta.session) || void 0 === GB ? void 0 : GB.id,
            oB = JSON.stringify(DB),
            jB = null !== (YB = OB.options.requestOptions) && void 0 !== YB ? YB : {},
            {
              headers: yB = {}
            } = jB,
            JB = PQ(jB, lQ),
            {
              keepalive: MB,
              signal: PB
            } = JB,
            zB = PQ(JB, pQ),
            lB = {};
          for (const [BB, OB] of Object.entries(yB)) lB[BB] = "function" === typeof OB ? yield OB(): OB;
          let pB = oB,
            qB = function(BB) {
              return "undefined" === typeof TextEncoder ? BB.length : (new TextEncoder).encode(BB).byteLength
            }(oB);
          const ZB = {};
          return OB.compressionEnabled && (pB = yield OB.compress(oB), qB = pB.size, ZB["Content-Encoding"] = "gzip"), {
            bodySize: qB,
            sessionId: QB,
            requestInit: MO({
              method: "POST",
              headers: MO(MO(MO(MO(MO({
                "Content-Type": "application/json"
              }, ZB), lB), OB.options.apiKey ? {
                "x-api-key": OB.options.apiKey
              } : {}), QB ? {
                "x-faro-session-id": QB
              } : {}), {}, {
                "Idempotency-Key": NO(20)
              }),
              body: pB
            }, zB)
          }
        }))()
      }
      performAttempt(BB, OB, GB) {
        var YB = this;
        return eY((function*() {
          var DB;
          const QB = null === (DB = YB.options.requestOptions) || void 0 === DB ? void 0 : DB.signal;
          if (null === QB || void 0 === QB ? void 0 : QB.aborted) return {
            kind: "terminal",
            failure: {
              error: QB.reason
            },
            attemptsMade: 0
          };
          let oB = 0;
          try {
            var jB;
            const DB = yield YB.fetchWithKeepaliveFallback(BB.requestInit, BB.bodySize, !!GB || (null === (jB = YB.options.requestOptions) || void 0 === jB ? void 0 : jB.keepalive), OB, (() => oB++));
            if (YB.handleResponse(DB, BB.sessionId), DB.status >= 200 && DB.status < 300) return {
              kind: "success",
              attemptsMade: oB
            };
            const QB = {
              status: DB.status
            };
            return !qQ.has(DB.status) || GB ? {
              kind: "terminal",
              failure: QB,
              attemptsMade: oB
            } : {
              kind: "retry",
              failure: QB,
              attemptsMade: oB,
              retryAfterMs: ZQ.has(DB.status) ? YB.getRetryAfterDelayMs(DB) : void 0
            }
          } catch (yB) {
            const BB = {
              error: yB
            };
            return (null === QB || void 0 === QB ? void 0 : QB.aborted) || !YB.isFetchNetworkError(yB) || GB ? {
              kind: "terminal",
              failure: BB,
              attemptsMade: oB
            } : {
              kind: "retry",
              failure: BB,
              attemptsMade: oB
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(BB, OB, GB, YB, DB) {
        var QB = this;
        return eY((function*() {
          const oB = QB.getNow(),
            jB = QB.reserveKeepalive(OB, GB);
          try {
            return yield QB.fetchWithTimeout(MO(MO({}, BB), {}, {
              keepalive: jB.keepalive
            }), QB.requestTimeoutMs, DB)
          } catch (JB) {
            var yB;
            if (jB.keepalive && YB > 1 && QB.isFetchNetworkError(JB) && !(JB instanceof WQ) && !(null === (yB = QB.options.requestOptions) || void 0 === yB || null === (yB = yB.signal) || void 0 === yB ? void 0 : yB.aborted)) {
              QB.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const OB = QB.requestTimeoutMs - (QB.getNow() - oB);
              return QB.fetchWithTimeout(MO(MO({}, BB), {}, {
                keepalive: !1
              }), OB, DB)
            }
            throw JB
          } finally {
            jB.release()
          }
        }))()
      }
      fetchWithTimeout(BB, OB, GB) {
        var YB = this;
        return eY((function*() {
          var DB;
          const QB = null === (DB = YB.options.requestOptions) || void 0 === DB ? void 0 : DB.signal;
          if (YB.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return GB(), fetch(YB.options.url, MO(MO({}, BB), {}, {
            signal: QB
          }));
          if (OB <= 0) throw new WQ("Request timed out");
          const oB = new AbortController,
            jB = () => oB.abort(null === QB || void 0 === QB ? void 0 : QB.reason);
          null === QB || void 0 === QB || QB.addEventListener("abort", jB, {
            once: !0
          });
          let yB = !1;
          const JB = setTimeout((() => {
            yB = !0, oB.abort()
          }), OB);
          try {
            return GB(), yield fetch(YB.options.url, MO(MO({}, BB), {}, {
              signal: oB.signal
            }))
          } catch (MB) {
            if (yB && !(null === QB || void 0 === QB ? void 0 : QB.aborted)) throw new WQ("Request timed out");
            throw MB
          } finally {
            clearTimeout(JB), null === QB || void 0 === QB || QB.removeEventListener("abort", jB)
          }
        }))()
      }
      getRetryAfterDelayMs(BB) {
        const OB = BB.headers.get("Retry-After");
        if (!OB) return;
        if (/^\d+$/.test(OB)) {
          const BB = 1e3 * Number(OB);
          return Number.isFinite(BB) ? BB : Number.POSITIVE_INFINITY
        }
        const GB = this.getNow(),
          YB = function(BB, OB) {
            const GB = YQ.exec(BB);
            if (GB) {
              const [, BB, OB, YB, DB, QB, oB, jB] = GB;
              return JQ({
                weekday: oQ.indexOf(BB),
                day: Number(OB),
                month: yQ.indexOf(YB),
                year: Number(DB),
                hour: Number(QB),
                minute: Number(oB),
                second: Number(jB)
              })
            }
            const YB = DQ.exec(BB);
            if (YB) {
              const [, BB, GB, oB, jB, yB, JB, MB] = YB, PB = new Date(OB);
              if (Number.isNaN(PB.getTime())) return;
              const zB = PB.getUTCFullYear();
              let lB = 100 * Math.floor(zB / 100) + Number(jB);
              lB < zB && (lB += 100);
              const pB = yQ.indexOf(oB),
                qB = {
                  month: pB,
                  day: Number(GB),
                  hour: Number(yB),
                  minute: Number(JB),
                  second: Number(MB),
                  millisecond: 0
                },
                ZB = {
                  month: PB.getUTCMonth(),
                  day: PB.getUTCDate(),
                  hour: PB.getUTCHours(),
                  minute: PB.getUTCMinutes(),
                  second: PB.getUTCSeconds(),
                  millisecond: PB.getUTCMilliseconds()
                };
              return (lB > zB + 50 || lB === zB + 50 && (QB = ZB, ((DB = qB).month - QB.month || DB.day - QB.day || DB.hour - QB.hour || DB.minute - QB.minute || DB.second - QB.second || DB.millisecond - QB.millisecond) > 0)) && (lB -= 100), JQ({
                weekday: jQ.indexOf(BB),
                day: Number(GB),
                month: pB,
                year: lB,
                hour: Number(yB),
                minute: Number(JB),
                second: Number(MB)
              })
            }
            var DB, QB;
            const oB = QQ.exec(BB);
            if (!oB) return;
            const [, jB, yB, JB, MB, PB, zB, lB, pB] = oB;
            return JQ({
              weekday: oQ.indexOf(jB),
              day: Number(null !== JB && void 0 !== JB ? JB : MB),
              month: yQ.indexOf(yB),
              year: Number(pB),
              hour: Number(PB),
              minute: Number(zB),
              second: Number(lB)
            })
          }(OB, GB);
        return null == YB ? void 0 : Math.max(0, YB - GB)
      }
      reserveKeepalive(BB, OB) {
        if (!1 === OB || BB > 6e4 || NQ + BB > 6e4 || RQ >= 9) return {
          keepalive: !1,
          release: aO
        };
        NQ += BB, RQ++;
        let GB = !1;
        return {
          keepalive: !0,
          release: () => {
            GB || (GB = !0, NQ -= BB, RQ--)
          }
        }
      }
      handleResponse(BB, OB) {
        202 === BB.status && "invalid" === BB.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), OB), BB.text().catch(aO)
      }
      isFetchNetworkError(BB) {
        return BB instanceof TypeError || BB instanceof WQ || BB instanceof DOMException && "AbortError" === BB.name
      }
      compress(BB) {
        return eY((function*() {
          const OB = [],
            GB = new ReadableStream({
              start(OB) {
                OB.enqueue((new TextEncoder).encode(BB)), OB.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: BB,
              value: YB
            } = yield GB.read();
            if (BB) return new Blob(OB);
            OB.push(YB)
          }
        }))()
      }
      extendFaroSession(BB, OB, GB) {
        var YB, DB;
        const QB = BB.sessionTracking;
        if (!(null === QB || void 0 === QB ? void 0 : QB.enabled)) return void OB("Session expired.");
        const {
          fetchUserSession: oB,
          storeUserSession: jB
        } = hO(QB), yB = null === (YB = this.metas.value.session) || void 0 === YB ? void 0 : YB.id, JB = null === (DB = oB()) || void 0 === DB ? void 0 : DB.sessionId;
        GB && GB === yB && GB === JB ? (uO({
          fetchUserSession: oB,
          storeUserSession: jB
        })({
          forceSessionExtend: !0
        }), OB("Session expired; created new session.")) : OB("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const VQ = () => {
      const BB = window.k6;
      return {
        k6: MO({
          isK6Browser: !0
        }, (null === BB || void 0 === BB ? void 0 : BB.testRunId) && {
          testRunId: null === BB || void 0 === BB ? void 0 : BB.testRunId
        })
      }
    };
    let SQ, nQ;

    function UQ() {
      let {
        generatePageId: BB,
        initialPageMeta: OB
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const GB = location.href;
        return KB(BB) && SQ !== GB && (SQ = GB, nQ = BB(location)), {
          page: MO(MO({
            url: GB
          }, nQ ? {
            id: nQ
          } : {}), OB)
        }
      }
    }

    function fQ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tO,
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GB = TO;
      return OB > 0 && (GB.error = OB >= 1 ? function() {
        for (var OB = arguments.length, YB = new Array(OB), DB = 0; DB < OB; DB++) YB[DB] = arguments[DB];
        BB.error(`${GB.prefix}\n`, ...YB)
      } : aO, GB.warn = OB >= 2 ? function() {
        for (var OB = arguments.length, YB = new Array(OB), DB = 0; DB < OB; DB++) YB[DB] = arguments[DB];
        BB.warn(`${GB.prefix}\n`, ...YB)
      } : aO, GB.info = OB >= 3 ? function() {
        for (var OB = arguments.length, YB = new Array(OB), DB = 0; DB < OB; DB++) YB[DB] = arguments[DB];
        BB.info(`${GB.prefix}\n`, ...YB)
      } : aO, GB.debug = OB >= 4 ? function() {
        for (var OB = arguments.length, YB = new Array(OB), DB = 0; DB < OB; DB++) YB[DB] = arguments[DB];
        BB.debug(`${GB.prefix}\n`, ...YB)
      } : aO), GB
    }
    const kQ = "faro",
      dQ = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      KQ = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function uQ(BB) {
      var OB, GB, DB, QB, oB, jB;
      const yB = [],
        MB = fQ(BB.unpatchedConsole, BB.internalLoggerLevel);
      BB.transports ? ((BB.url || BB.apiKey) && MB.error('if "transports" is defined, "url" and "apiKey" should not be defined'), yB.push(...BB.transports)) : BB.url ? yB.push(new AQ({
        url: BB.url,
        apiKey: BB.apiKey,
        requestCompression: BB.requestCompression
      })) : MB.error('either "url" or "transports" must be defined');
      const {
        dedupe: PB = !0,
        eventDomain: zB = YB,
        globalObjectKey: lB = kQ,
        instrumentations: pB = cD(),
        internalLoggerLevel: qB = bO,
        isolate: ZB = !1,
        logArgsSerializer: NB = mG,
        metas: RB = IQ(BB),
        paused: WB = !1,
        preventGlobalExposure: AB = !1,
        unpatchedConsole: VB = tO,
        url: SB,
        experimental: nB
      } = BB, UB = PQ(BB, KQ), fB = null !== (OB = null === nB || void 0 === nB ? void 0 : nB.trackNavigation) && void 0 !== OB && OB, kB = {
        dataAttributeName: sY(null !== (GB = null === (DB = BB.userActionsInstrumentation) || void 0 === DB ? void 0 : DB.dataAttributeName) && void 0 !== GB ? GB : CY),
        excludeItem: null === (QB = BB.userActionsInstrumentation) || void 0 === QB ? void 0 : QB.excludeItem,
        initialActivityTimeout: xY(null === (oB = BB.userActionsInstrumentation) || void 0 === oB ? void 0 : oB.initialActivityTimeout, 100, (BB => MB.warn(BB)))
      };
      return MO(MO({}, UB), {}, {
        batching: MO(MO({}, dQ), BB.batching),
        dedupe: PB,
        globalObjectKey: lB,
        instrumentations: mQ(pB, BB),
        internalLoggerLevel: qB,
        isolate: ZB,
        logArgsSerializer: NB,
        metas: RB,
        parseStacktrace: qG,
        paused: WB,
        preventGlobalExposure: AB,
        transports: yB,
        unpatchedConsole: VB,
        eventDomain: zB,
        ignoreUrls: [...null !== (jB = BB.ignoreUrls) && void 0 !== jB ? jB : [], ...SB ? [SB] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: MO(MO(MO({}, JB), BB.sessionTracking), FQ({
          trackGeolocation: BB.trackGeolocation,
          sessionTracking: BB.sessionTracking
        })),
        userActionsInstrumentation: kB,
        experimental: {
          trackNavigation: fB
        }
      })
    }

    function mQ(BB, OB) {
      let {
        experimental: GB
      } = OB;
      var YB;
      const DB = null !== (YB = null === GB || void 0 === GB ? void 0 : GB.trackNavigation) && void 0 !== YB && YB;
      return BB.filter((BB => !("@grafana/faro-web-sdk:instrumentation-navigation" === BB.name && !DB)))
    }

    function IQ(BB) {
      var OB, GB, YB;
      const {
        page: DB,
        generatePageId: QB
      } = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.pageTracking) && void 0 !== OB ? OB : {}, oB = [bD, CD, UQ({
        generatePageId: QB,
        initialPageMeta: DB
      }), ...null !== (GB = BB.metas) && void 0 !== GB ? GB : [], vD];
      return dB(null === (YB = window) || void 0 === YB ? void 0 : YB.k6) ? [...oB, VQ] : oB
    }

    function FQ(BB) {
      let {
        trackGeolocation: OB,
        sessionTracking: GB
      } = BB;
      var YB;
      const DB = {};
      return fB(OB) && (DB.geoLocationTrackingEnabled = OB), bB(DB) ? {} : {
        session: MO(MO({}, null !== (YB = null === GB || void 0 === GB ? void 0 : GB.session) && void 0 !== YB ? YB : {}), {}, {
          overrides: DB
        })
      }
    }
    const iQ = new WeakSet;

    function LQ(BB) {
      return iQ.add(BB), BB
    }

    function gQ(BB, OB) {
      if (BB.capture) return LQ(BB.capture(OB));
      const GB = LQ(BB.value);
      return null === OB || void 0 === OB || OB(), GB
    }

    function rQ(BB) {
      const OB = `__faroBundleId_${BB}`,
        GB = null === MB || void 0 === MB ? void 0 : MB[OB];
      if ("string" === typeof GB && "" !== GB) return GB;
      const YB = "undefined" !== typeof window ? window[OB] : void 0;
      return "string" === typeof YB && "" !== YB ? YB : void 0
    }

    function XQ(BB) {
      var OB, GB;
      const YB = BB.config.app.name,
        DB = YB ? function(BB) {
          return null === MB || void 0 === MB ? void 0 : MB[`__faroGitHash_${BB}`]
        }(YB) : void 0,
        QB = {
          sdk: {
            version: GG,
            name: "faro"
          },
          app: xO({
            bundleId: YB && rQ(YB)
          }, void 0 !== DB ? {
            gitHash: DB
          } : {})
        },
        oB = null === (OB = BB.config.sessionTracking) || void 0 === OB ? void 0 : OB.session;
      oB && BB.api.setSession(oB), BB.config.app && (QB.app = xO(xO({}, BB.config.app), QB.app)), BB.config.user && (QB.user = BB.config.user), BB.config.view && (QB.view = BB.config.view), BB.metas.add(QB, ...null !== (GB = BB.config.metas) && void 0 !== GB ? GB : [])
    }
    var wQ = class {
      constructor(BB, OB) {
        var GB, YB;
        this.signalBuffer = [], this.itemLimit = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.itemLimit) && void 0 !== GB ? GB : 50, this.sendTimeout = null !== (YB = null === OB || void 0 === OB ? void 0 : OB.sendTimeout) && void 0 !== YB ? YB : 250, this.paused = (null === OB || void 0 === OB ? void 0 : OB.paused) || !1, this.sendFn = BB, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(BB) {
        this.paused || (this.signalBuffer.push(BB), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(BB) {
        const OB = new Map;
        return BB.forEach((BB => {
          const GB = JSON.stringify(BB.meta);
          let YB = OB.get(GB);
          YB = void 0 === YB ? [BB] : [...YB, BB], OB.set(GB, YB)
        })), Array.from(OB.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const BB = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(BB).forEach(this.sendFn)
        } catch (OB) {
          throw this.signalBuffer = [...BB, ...this.signalBuffer], this.trimBufferToLimit(), OB
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function EQ(BB, OB, GB, YB) {
      var DB;
      OB.debug("Initializing transports");
      const QB = [];
      let oB = [];
      const jB = BB => {
        let OB = BB;
        for (const YB of oB) {
          const BB = OB.map(YB).filter(Boolean);
          if (0 === BB.length) return [];
          OB = cQ(BB, GB)
        }
        return OB
      };
      let yB;
      (null === (DB = GB.batching) || void 0 === DB ? void 0 : DB.enabled) && (yB = new wQ((BB => {
        const GB = jB(BB);
        if (0 !== GB.length)
          for (const YB of QB) OB.debug(`Transporting item using ${YB.name}\n`, GB), YB.isBatched() && YB.send(GB)
      }), {
        sendTimeout: GB.batching.sendTimeout,
        itemLimit: GB.batching.itemLimit,
        paused: GB.paused
      }));
      return {
        add: function() {
          OB.debug("Adding transports");
          for (var DB = arguments.length, oB = new Array(DB), jB = 0; jB < DB; jB++) oB[jB] = arguments[jB];
          oB.forEach((DB => {
            OB.debug(`Adding "${DB.name}" transport`), QB.some((BB => BB === DB)) ? OB.warn(`Transport ${DB.name} is already added`) : (DB.unpatchedConsole = BB, DB.internalLogger = OB, DB.config = GB, DB.metas = YB, QB.push(DB))
          }))
        },
        addBeforeSendHooks: function() {
          OB.debug("Adding beforeSendHooks\n", oB);
          for (var BB = arguments.length, GB = new Array(BB), YB = 0; YB < BB; YB++) GB[YB] = arguments[YB];
          GB.forEach((BB => {
            BB && oB.push(BB)
          }))
        },
        getBeforeSendHooks: () => [...oB],
        execute: BB => {
          var DB;
          if (!GB.paused && EO(YB).shouldCapture()) {
            if (PB = BB.meta, !iQ.has(PB)) {
              var oB, JB, MB;
              const OB = null === (oB = YB.value.session) || void 0 === oB ? void 0 : oB.id,
                DB = gQ(YB);
              if (GB.paused) return;
              const QB = xO({}, BB.meta);
              (null === (JB = QB.session) || void 0 === JB ? void 0 : JB.id) === OB && (null === (MB = DB.session) || void 0 === MB ? void 0 : MB.id) !== OB && (void 0 === DB.session ? delete QB.session : QB.session = DB.session), BB = xO(xO({}, BB), {}, {
                meta: LQ(QB)
              })
            }
            var PB;
            (null === (DB = GB.batching) || void 0 === DB ? void 0 : DB.enabled) && (null === yB || void 0 === yB || yB.addItem(BB)), (BB => {
              var YB;
              if ((null === (YB = GB.batching) || void 0 === YB ? void 0 : YB.enabled) && QB.every((BB => BB.isBatched()))) return;
              const [DB] = jB([BB]);
              if (void 0 !== DB)
                for (const jB of QB) {
                  var oB;
                  OB.debug(`Transporting item using ${jB.name}\n`, DB), jB.isBatched() ? (null === (oB = GB.batching) || void 0 === oB ? void 0 : oB.enabled) || jB.send([DB]) : jB.send(DB)
                }
            })(BB)
          }
        },
        isPaused: () => GB.paused,
        pause: () => {
          OB.debug("Pausing transports"), null === yB || void 0 === yB || yB.pause(), GB.paused = !0
        },
        remove: function() {
          OB.debug("Removing transports");
          for (var BB = arguments.length, GB = new Array(BB), YB = 0; YB < BB; YB++) GB[YB] = arguments[YB];
          GB.forEach((BB => {
            OB.debug(`Removing "${BB.name}" transport`);
            const GB = QB.indexOf(BB); - 1 !== GB ? QB.splice(GB, 1) : OB.warn(`Transport "${BB.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var BB = arguments.length, GB = new Array(BB), YB = 0; YB < BB; YB++) GB[YB] = arguments[YB];
          OB.debug("Removing beforeSendHooks"), oB = oB.filter((BB => !GB.includes(BB)))
        },
        get transports() {
          return [...QB]
        },
        unpause: () => {
          OB.debug("Unpausing transports"), null === yB || void 0 === yB || yB.start(), GB.paused = !1
        }
      }
    }

    function cQ(BB, OB) {
      if (OB.preserveOriginalError)
        for (const GB of BB) "exception" === GB.type && delete GB.payload.originalError;
      return BB
    }
    let hQ = tO;

    function aQ(BB) {
      var OB;
      return hQ = null !== (OB = BB.unpatchedConsole) && void 0 !== OB ? OB : hQ, hQ
    }
    let eQ, TQ = TO;

    function bQ(BB, OB) {
      return TQ = fQ(BB, OB.internalLoggerLevel), TQ
    }

    function CQ(BB) {
      let {
        internalLogger: OB,
        config: GB,
        metas: YB,
        transports: DB,
        tracesApi: QB,
        userActionsApi: oB
      } = BB;
      var jB;
      OB.debug("Initializing exceptions API");
      let yB = null;
      eQ = null !== (jB = GB.parseStacktrace) && void 0 !== jB ? jB : eQ;
      const JB = BB => {
          OB.debug("Changing stacktrace parser"), eQ = null !== BB && void 0 !== BB ? BB : eQ
        },
        {
          ignoreErrors: MB = [],
          preserveOriginalError: PB
        } = GB;
      return JB(GB.parseStacktrace), {
        changeStacktraceParser: JB,
        getStacktraceParser: () => eQ,
        pushError: function(BB) {
          let {
            skipDedupe: jB,
            stackFrames: JB,
            type: zB,
            context: lB,
            spanContext: pB,
            timestampOverwriteMs: qB,
            originalError: ZB,
            fingerprint: NB,
            fatal: RB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(BB, OB) {
              const {
                message: GB,
                name: YB,
                stack: DB
              } = OB;
              return QB = BB, oB = GB + " " + YB + " " + DB, QB.some((BB => SB(BB) ? oB.includes(BB) : !!oB.match(BB)));
              var QB, oB
            }(MB, null !== ZB && void 0 !== ZB ? ZB : BB)) try {
            var WB, AB;
            if (!EO(YB).shouldCapture()) return;
            const MB = gO(xO(xO({}, function(BB) {
                let OB = BB.cause;
                rB(OB) ? OB = BB.cause.toString() : null !== OB && (dB(BB.cause) || uB(BB.cause)) ? OB = LO(BB.cause) : null != OB && (OB = BB.cause.toString());
                return null == OB ? {} : {
                  cause: OB
                }
              }(null !== ZB && void 0 !== ZB ? ZB : BB)), null !== lB && void 0 !== lB ? lB : {})),
              SB = xO(xO(xO(xO({
                type: zB || BB.name || "Error",
                value: BB.message,
                timestamp: qB ? qO(qB) : pO(),
                trace: pB ? {
                  trace_id: pB.traceId,
                  span_id: pB.spanId
                } : QB.getTraceContext()
              }, bB(MB) ? {} : {
                context: MB
              }), PB ? {
                originalError: ZB
              } : {}), NB ? {
                fingerprint: NB
              } : {}), void 0 !== RB ? {
                fatal: RB
              } : {});
            JB = null !== (WB = JB) && void 0 !== WB ? WB : BB.stack ? null === eQ || void 0 === eQ ? void 0 : eQ(BB).frames : void 0, (null === JB || void 0 === JB ? void 0 : JB.length) && (SB.stacktrace = {
              frames: JB
            });
            const nB = {
              type: SB.type,
              value: SB.value,
              stacktrace: SB.stacktrace,
              context: SB.context,
              fingerprint: SB.fingerprint,
              fatal: null !== (AB = SB.fatal) && void 0 !== AB && AB
            };
            if (!jB && GB.dedupe && !VB(yB) && RO(nB, yB)) return void OB.debug("Skipping error push because it is the same as the last one\n", SB);
            const UB = yB,
              fB = gQ(YB);
            if (yB !== UB && !jB && GB.dedupe && RO(nB, yB)) return;
            yB = nB;
            const kB = {
              meta: fB,
              payload: SB,
              type: "exception"
            };
            OB.debug("Pushing exception\n", kB), SD(oB.getActiveUserAction(), kB) || DB.execute(kB)
          } catch (nB) {
            OB.error("Error pushing event", nB)
          }
        }
      }
    }

    function HQ(BB, OB, GB, YB, DB) {
      OB.debug("Initializing API");
      let QB = null;
      const oB = function(BB) {
          let {
            transports: OB,
            internalLogger: GB,
            config: YB,
            pushEvent: DB
          } = BB;
          var QB;
          const oB = null === (QB = YB.userActionsInstrumentation) || void 0 === QB ? void 0 : QB.excludeItem;
          let jB;
          const yB = () => jB;
          return {
            startUserAction: (BB, YB, QB) => {
              if (void 0 === yB()) {
                const GB = new AD({
                  name: BB,
                  transports: OB,
                  attributes: YB,
                  trigger: (null === QB || void 0 === QB ? void 0 : QB.triggerName) || "faroApiCall",
                  importance: (null === QB || void 0 === QB ? void 0 : QB.importance) || RD.Normal,
                  trackUserActionsExcludeItem: oB,
                  pushEvent: DB
                });
                return GB.filter((BB => [3, 2].includes(BB))).first().subscribe((() => {
                  jB = void 0
                })), VD.notify({
                  type: ND,
                  userAction: GB,
                  initialActivityTimeout: null === QB || void 0 === QB ? void 0 : QB.initialActivityTimeout
                }), jB = GB, jB
              }
              GB.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: yB
          }
        }({
          transports: DB,
          config: GB,
          internalLogger: OB,
          pushEvent: (BB, GB, YB, DB) => {
            QB ? QB(BB, GB, YB, DB) : OB.warn("pushEventImpl is not initialized. Event dropped:", {
              name: BB,
              attributes: GB,
              domain: YB,
              options: DB
            })
          }
        }),
        jB = function(BB, OB, GB, YB, DB) {
          let QB;
          return OB.debug("Initializing traces API"), {
            getOTEL: () => QB,
            getTraceContext: () => {
              const BB = null === QB || void 0 === QB ? void 0 : QB.trace.getSpanContext(QB.context.active());
              return BB ? {
                trace_id: BB.traceId,
                span_id: BB.spanId
              } : void 0
            },
            initOTEL: (BB, GB) => {
              OB.debug("Initializing OpenTelemetry"), QB = {
                trace: BB,
                context: GB
              }
            },
            isOTELInitialized: () => !!QB,
            pushTraces: BB => {
              try {
                if (!EO(YB).shouldCapture()) return;
                const GB = {
                  type: "trace",
                  payload: BB,
                  meta: gQ(YB)
                };
                OB.debug("Pushing trace\n", GB), DB.execute(GB)
              } catch (GB) {
                OB.error("Error pushing trace\n", GB)
              }
            }
          }
        }(0, OB, 0, YB, DB),
        yB = {
          unpatchedConsole: BB,
          internalLogger: OB,
          userActionsApi: oB,
          config: GB,
          metas: YB,
          transports: DB,
          tracesApi: jB
        },
        JB = function(BB) {
          let {
            internalLogger: OB,
            config: GB,
            metas: YB,
            transports: DB,
            tracesApi: QB,
            userActionsApi: oB
          } = BB, jB = null;
          return {
            pushEvent: function(BB, yB, JB) {
              let {
                skipDedupe: MB,
                spanContext: PB,
                timestampOverwriteMs: zB,
                customPayloadTransformer: lB = BB => BB
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!EO(YB).shouldCapture()) return;
                const pB = gO(yB),
                  qB = lB({
                    name: BB,
                    domain: null !== JB && void 0 !== JB ? JB : GB.eventDomain,
                    attributes: bB(pB) ? void 0 : pB,
                    timestamp: zB ? qO(zB) : pO(),
                    trace: PB ? {
                      trace_id: PB.traceId,
                      span_id: PB.spanId
                    } : QB.getTraceContext()
                  }),
                  ZB = {
                    name: qB.name,
                    attributes: qB.attributes,
                    domain: qB.domain
                  };
                if (!MB && GB.dedupe && !VB(jB) && RO(ZB, jB)) return void OB.debug("Skipping event push because it is the same as the last one\n", qB);
                const NB = jB,
                  RB = gQ(YB);
                if (jB !== NB && !MB && GB.dedupe && RO(ZB, jB)) return;
                jB = ZB;
                const WB = {
                  meta: RB,
                  payload: qB,
                  type: "event"
                };
                OB.debug("Pushing event\n", WB), SD(oB.getActiveUserAction(), WB) || DB.execute(WB)
              } catch (pB) {
                OB.error("Error pushing event", pB)
              }
            }
          }
        }(yB);
      return QB = JB.pushEvent, xO(xO(xO(xO(xO(xO(xO({}, jB), CQ(yB)), function(BB) {
        let OB, GB, YB, DB, {
          internalLogger: QB,
          metas: oB
        } = BB;
        QB.debug("Initializing meta API");
        const jB = BB => {
            GB && oB.remove(GB), GB = {
              user: BB
            }, oB.add(GB)
          },
          yB = (BB, GB) => {
            var YB;
            const DB = null === GB || void 0 === GB ? void 0 : GB.overrides,
              QB = DB ? {
                overrides: xO(xO({}, null === OB || void 0 === OB || null === (YB = OB.session) || void 0 === YB ? void 0 : YB.overrides), DB)
              } : {};
            OB && oB.remove(OB), OB = {
              session: xO(xO({}, bB(BB) ? void 0 : BB), QB)
            }, oB.add(OB)
          },
          JB = (BB, OB) => {
            EO(oB).notifySessionUpdate({
              type: "replace",
              session: BB,
              overrides: null === OB || void 0 === OB ? void 0 : OB.overrides
            }), yB(BB, OB)
          },
          MB = () => oB.value.session,
          PB = () => oB.value.page;
        return {
          setUser: jB,
          resetUser: jB,
          setSession: JB,
          resetSession: JB,
          getSession: MB,
          setView: (BB, OB) => {
            var GB;
            if ((null === OB || void 0 === OB ? void 0 : OB.overrides) && (EO(oB).notifySessionUpdate({
                type: "overrides",
                overrides: OB.overrides
              }), yB(MB(), {
                overrides: OB.overrides
              })), (null === YB || void 0 === YB || null === (GB = YB.view) || void 0 === GB ? void 0 : GB.name) === (null === BB || void 0 === BB ? void 0 : BB.name)) return;
            const DB = YB;
            YB = {
              view: BB
            }, oB.add(YB), DB && oB.remove(DB)
          },
          getView: () => oB.value.view,
          setPage: BB => {
            var OB;
            const GB = SB(BB) ? xO(xO({}, null !== (OB = null === DB || void 0 === DB ? void 0 : DB.page) && void 0 !== OB ? OB : PB()), {}, {
              id: BB
            }) : BB;
            DB && oB.remove(DB), DB = {
              page: GB
            }, oB.add(DB)
          },
          getPage: PB
        }
      }(yB)), function(BB) {
        let {
          internalLogger: OB,
          config: GB,
          metas: YB,
          transports: DB,
          tracesApi: QB,
          userActionsApi: oB
        } = BB;
        var jB;
        OB.debug("Initializing logs API");
        let yB = null;
        const JB = null !== (jB = GB.logArgsSerializer) && void 0 !== jB ? jB : mG;
        return {
          pushLog: function(BB) {
            let {
              context: jB,
              level: MB,
              skipDedupe: PB,
              spanContext: zB,
              timestampOverwriteMs: lB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!EO(YB).shouldCapture()) return;
              const pB = gO(jB),
                qB = {
                  message: JB(BB),
                  level: null !== MB && void 0 !== MB ? MB : "log",
                  context: bB(pB) ? void 0 : pB,
                  timestamp: lB ? qO(lB) : pO(),
                  trace: zB ? {
                    trace_id: zB.traceId,
                    span_id: zB.spanId
                  } : QB.getTraceContext()
                },
                ZB = {
                  message: qB.message,
                  level: qB.level,
                  context: qB.context
                };
              if (!PB && GB.dedupe && !VB(yB) && RO(ZB, yB)) return void OB.debug("Skipping log push because it is the same as the last one\n", qB);
              const NB = yB,
                RB = gQ(YB);
              if (yB !== NB && !PB && GB.dedupe && RO(ZB, yB)) return;
              yB = ZB;
              const WB = {
                type: "log",
                payload: qB,
                meta: RB
              };
              OB.debug("Pushing log\n", WB), SD(oB.getActiveUserAction(), WB) || DB.execute(WB)
            } catch (pB) {
              OB.error("Error pushing log\n", pB)
            }
          }
        }
      }(yB)), function(BB) {
        let {
          internalLogger: OB,
          config: GB,
          metas: YB,
          transports: DB,
          tracesApi: QB,
          userActionsApi: oB
        } = BB;
        OB.debug("Initializing measurements API");
        let jB = null;
        return {
          pushMeasurement: function(BB) {
            let {
              skipDedupe: yB,
              context: JB,
              spanContext: MB,
              timestampOverwriteMs: PB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!EO(YB).shouldCapture()) return;
              const zB = gO(JB),
                lB = xO(xO({}, BB), {}, {
                  trace: MB ? {
                    trace_id: MB.traceId,
                    span_id: MB.spanId
                  } : QB.getTraceContext(),
                  timestamp: PB ? qO(PB) : pO(),
                  context: bB(zB) ? void 0 : zB
                }),
                pB = {
                  type: lB.type,
                  values: lB.values,
                  context: lB.context
                };
              if (!yB && GB.dedupe && !VB(jB) && RO(pB, jB)) return void OB.debug("Skipping measurement push because it is the same as the last one\n", lB);
              const qB = jB,
                ZB = gQ(YB);
              if (jB !== qB && !yB && GB.dedupe && RO(pB, jB)) return;
              jB = pB;
              const NB = {
                type: "measurement",
                payload: lB,
                meta: ZB
              };
              OB.debug("Pushing measurement\n", NB), SD(oB.getActiveUserAction(), NB) || DB.execute(NB)
            } catch (zB) {
              OB.error("Error pushing measurement\n", zB)
            }
          }
        }
      }(yB)), JB), oB)
    }

    function vQ(BB) {
      const OB = aQ(BB),
        GB = bQ(OB, BB);
      if (pB() && !BB.isolate) return void GB.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      GB.debug("Initializing");
      const YB = function(BB, OB) {
          let GB, YB = [],
            DB = [],
            QB = [],
            oB = 0,
            jB = 0;
          const yB = () => YB.reduce(((BB, OB) => Object.assign(BB, KB(OB) ? OB() : OB)), {}),
            JB = () => {
              if (DB.length) {
                const BB = yB();
                DB.forEach((OB => OB(BB)))
              }
            };
          return {
            add: function() {
              for (var BB = arguments.length, GB = new Array(BB), DB = 0; DB < BB; DB++) GB[DB] = arguments[DB];
              OB.debug("Adding metas\n", GB), YB.push(...GB), JB()
            },
            remove: function() {
              for (var BB = arguments.length, GB = new Array(BB), DB = 0; DB < BB; DB++) GB[DB] = arguments[DB];
              OB.debug("Removing metas\n", GB), YB = YB.filter((BB => !GB.includes(BB))), JB()
            },
            addListener: BB => {
              OB.debug("Adding metas listener\n", BB), DB.push(BB)
            },
            removeListener: BB => {
              OB.debug("Removing metas listener\n", BB), DB = DB.filter((OB => OB !== BB))
            },
            capture: BB => {
              var OB;
              const YB = void 0 !== GB,
                DB = null !== (OB = GB) && void 0 !== OB ? OB : QB;
              YB || (GB = DB, oB = 0, jB = DB.length);
              try {
                for (; oB < jB;) {
                  const BB = DB[oB++];
                  null === BB || void 0 === BB || BB()
                }
                const OB = LQ(yB());
                return null === BB || void 0 === BB || BB(), OB
              } finally {
                YB || (GB = void 0)
              }
            },
            addCaptureListener: BB => {
              QB.push(BB)
            },
            removeCaptureListener: BB => {
              QB = QB.filter((OB => OB !== BB))
            },
            get value() {
              return yB()
            }
          }
        }(0, GB),
        DB = EQ(OB, GB, BB, YB),
        QB = HQ(OB, GB, BB, YB, DB),
        oB = function(BB, OB, GB, YB, DB, QB) {
          OB.debug("Initializing instrumentations");
          const oB = [];
          return {
            add: function() {
              OB.debug("Adding instrumentations");
              for (var jB = arguments.length, yB = new Array(jB), JB = 0; JB < jB; JB++) yB[JB] = arguments[JB];
              yB.forEach((jB => {
                OB.debug(`Adding "${jB.name}" instrumentation`), oB.some((BB => BB.name === jB.name)) ? OB.warn(`Instrumentation ${jB.name} is already added`) : (jB.unpatchedConsole = BB, jB.internalLogger = OB, jB.config = GB, jB.metas = YB, jB.transports = DB, jB.api = QB, oB.push(jB), jB.initialize())
              }))
            },
            get instrumentations() {
              return [...oB]
            },
            remove: function() {
              OB.debug("Removing instrumentations");
              for (var BB = arguments.length, GB = new Array(BB), YB = 0; YB < BB; YB++) GB[YB] = arguments[YB];
              GB.forEach((BB => {
                var GB, YB;
                OB.debug(`Removing "${BB.name}" instrumentation`);
                const DB = oB.reduce(((OB, GB, YB) => null === OB && GB.name === BB.name ? YB : null), null);
                null !== DB ? (null === (GB = (YB = oB[DB]).destroy) || void 0 === GB || GB.call(YB), oB.splice(DB, 1)) : OB.warn(`Instrumentation "${BB.name}" is not added`)
              }))
            }
          }
        }(OB, GB, BB, YB, DB, QB),
        jB = ZB(OB, GB, BB, YB, DB, QB, oB);
      return XQ(jB),
        function(BB) {
          BB.transports.add(...BB.config.transports), BB.transports.addBeforeSendHooks(BB.config.beforeSend)
        }(jB),
        function(BB) {
          BB.instrumentations.add(...BB.config.instrumentations)
        }(jB), jB
    }

    function sQ(BB) {
      const OB = uQ(BB);
      if (OB) return vQ(OB)
    }
  },
  7227: function(BB, OB, GB) {
    var YB;
    ! function(DB, QB) {
      var oB = "function",
        jB = "undefined",
        yB = "object",
        JB = "string",
        MB = "major",
        PB = "model",
        zB = "name",
        lB = "type",
        pB = "vendor",
        qB = "version",
        ZB = "architecture",
        NB = "console",
        RB = "mobile",
        WB = "tablet",
        AB = "smarttv",
        VB = "wearable",
        SB = "embedded",
        nB = "Amazon",
        UB = "Apple",
        fB = "ASUS",
        kB = "BlackBerry",
        dB = "Browser",
        KB = "Chrome",
        uB = "Firefox",
        mB = "Google",
        IB = "Honor",
        FB = "Huawei",
        iB = "LG",
        LB = "Microsoft",
        gB = "Motorola",
        rB = "Nvidia",
        XB = "OnePlus",
        wB = "Opera",
        EB = "OPPO",
        cB = "Samsung",
        hB = "Sharp",
        aB = "Sony",
        eB = "Xiaomi",
        TB = "Zebra",
        bB = "Facebook",
        CB = "Chromium OS",
        HB = "Mac OS",
        vB = " Browser",
        sB = function(BB) {
          for (var OB = {}, GB = 0; GB < BB.length; GB++) OB[BB[GB].toUpperCase()] = BB[GB];
          return OB
        },
        xB = function(BB, OB) {
          return typeof BB === JB && -1 !== tB(OB).indexOf(tB(BB))
        },
        tB = function(BB) {
          return BB.toLowerCase()
        },
        BO = function(BB, OB) {
          if (typeof BB === JB) return BB = BB.replace(/^\s\s*/, ""), typeof OB === jB ? BB : BB.substring(0, 500)
        },
        OO = function(BB, OB) {
          for (var GB, YB, DB, jB, JB, MB, PB = 0; PB < OB.length && !JB;) {
            var zB = OB[PB],
              lB = OB[PB + 1];
            for (GB = YB = 0; GB < zB.length && !JB && zB[GB];)
              if (JB = zB[GB++].exec(BB))
                for (DB = 0; DB < lB.length; DB++) MB = JB[++YB], typeof(jB = lB[DB]) === yB && jB.length > 0 ? 2 === jB.length ? typeof jB[1] == oB ? this[jB[0]] = jB[1].call(this, MB) : this[jB[0]] = jB[1] : 3 === jB.length ? typeof jB[1] !== oB || jB[1].exec && jB[1].test ? this[jB[0]] = MB ? MB.replace(jB[1], jB[2]) : QB : this[jB[0]] = MB ? jB[1].call(this, MB, jB[2]) : QB : 4 === jB.length && (this[jB[0]] = MB ? jB[3].call(this, MB.replace(jB[1], jB[2])) : QB) : this[jB] = MB || QB;
            PB += 2
          }
        },
        GO = function(BB, OB) {
          for (var GB in OB)
            if (typeof OB[GB] === yB && OB[GB].length > 0) {
              for (var YB = 0; YB < OB[GB].length; YB++)
                if (xB(OB[GB][YB], BB)) return "?" === GB ? QB : GB
            } else if (xB(OB[GB], BB)) return "?" === GB ? QB : GB;
          return OB.hasOwnProperty("*") ? OB["*"] : BB
        },
        YO = {
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
        DO = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [qB, [zB, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [qB, [zB, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [zB, qB],
            [/opios[\/ ]+([\w\.]+)/i],
            [qB, [zB, wB + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [qB, [zB, wB + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [qB, [zB, wB]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [qB, [zB, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [qB, [zB, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [zB, qB],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [qB, [zB, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [qB, [zB, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [qB, [zB, "UC" + dB]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [qB, [zB, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [qB, [zB, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [qB, [zB, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [qB, [zB, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [qB, [zB, "Smart Lenovo " + dB]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [zB, /(.+)/, "$1 Secure " + dB], qB
            ],
            [/\bfocus\/([\w\.]+)/i],
            [qB, [zB, uB + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [qB, [zB, wB + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [qB, [zB, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [qB, [zB, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [qB, [zB, wB + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [qB, [zB, "MIUI" + vB]],
            [/fxios\/([\w\.-]+)/i],
            [qB, [zB, uB]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [qB, [zB, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [zB, /(.+)/, "$1Browser"], qB
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [zB, /(.+)/, "$1" + vB], qB
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [qB, [zB, cB + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [qB, [zB, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [zB, "Sogou Mobile"], qB
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [zB, qB],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [zB],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [qB, zB],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [zB, bB], qB
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [zB, qB],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [qB, [zB, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [qB, [zB, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [qB, [zB, KB + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [zB, KB + " WebView"], qB
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [qB, [zB, "Android " + dB]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [zB, qB],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [qB, [zB, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [qB, zB],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [zB, [qB, GO, {
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
            [zB, qB],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [zB, "Netscape"], qB
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [zB, qB],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [qB, [zB, uB + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [zB, [qB, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [zB, [qB, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [ZB, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [ZB, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [ZB, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [ZB, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [ZB, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [ZB, /ower/, "", tB]
            ],
            [/ sun4\w[;\)]/i],
            [
              [ZB, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [ZB, tB]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [PB, [pB, cB],
              [lB, WB]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [PB, [pB, cB],
              [lB, RB]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [PB, [pB, UB],
              [lB, RB]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [PB, [pB, UB],
              [lB, WB]
            ],
            [/(macintosh);/i],
            [PB, [pB, UB]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [PB, [pB, hB],
              [lB, RB]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [PB, [pB, IB],
              [lB, WB]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [PB, [pB, IB],
              [lB, RB]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [PB, [pB, FB],
              [lB, WB]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [PB, [pB, FB],
              [lB, RB]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [PB, /_/g, " "],
              [pB, eB],
              [lB, WB]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [PB, /_/g, " "],
              [pB, eB],
              [lB, RB]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [PB, [pB, EB],
              [lB, RB]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [PB, [pB, GO, {
                OnePlus: ["304", "403", "203"],
                "*": EB
              }],
              [lB, WB]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [PB, [pB, "Vivo"],
              [lB, RB]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [PB, [pB, "Realme"],
              [lB, RB]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [PB, [pB, gB],
              [lB, RB]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [PB, [pB, gB],
              [lB, WB]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [PB, [pB, iB],
              [lB, WB]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [PB, [pB, iB],
              [lB, RB]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [PB, [pB, "Lenovo"],
              [lB, WB]
            ],
            [/(nokia) (t[12][01])/i],
            [pB, PB, [lB, WB]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [PB, /_/g, " "],
              [lB, RB],
              [pB, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [PB, [pB, mB],
              [lB, WB]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [PB, [pB, mB],
              [lB, RB]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [PB, [pB, aB],
              [lB, RB]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [PB, "Xperia Tablet"],
              [pB, aB],
              [lB, WB]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [PB, [pB, XB],
              [lB, RB]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [PB, [pB, nB],
              [lB, WB]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [PB, /(.+)/g, "Fire Phone $1"],
              [pB, nB],
              [lB, RB]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [PB, pB, [lB, WB]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [PB, [pB, kB],
              [lB, RB]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [PB, [pB, fB],
              [lB, WB]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [PB, [pB, fB],
              [lB, RB]
            ],
            [/(nexus 9)/i],
            [PB, [pB, "HTC"],
              [lB, WB]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [pB, [PB, /_/g, " "],
              [lB, RB]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [PB, [pB, "TCL"],
              [lB, WB]
            ],
            [/(itel) ((\w+))/i],
            [
              [pB, tB], PB, [lB, GO, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [PB, [pB, "Acer"],
              [lB, WB]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [PB, [pB, "Meizu"],
              [lB, RB]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [PB, [pB, "Ulefone"],
              [lB, RB]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [PB, [pB, "Energizer"],
              [lB, RB]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [PB, [pB, "Cat"],
              [lB, RB]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [PB, [pB, "Smartfren"],
              [lB, RB]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [PB, [pB, "Nothing"],
              [lB, RB]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [PB, [pB, "Archos"],
              [lB, WB]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [PB, [pB, "Archos"],
              [lB, RB]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [pB, PB, [lB, WB]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [pB, PB, [lB, RB]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [pB, PB, [lB, WB]],
            [/(surface duo)/i],
            [PB, [pB, LB],
              [lB, WB]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [PB, [pB, "Fairphone"],
              [lB, RB]
            ],
            [/(u304aa)/i],
            [PB, [pB, "AT&T"],
              [lB, RB]
            ],
            [/\bsie-(\w*)/i],
            [PB, [pB, "Siemens"],
              [lB, RB]
            ],
            [/\b(rct\w+) b/i],
            [PB, [pB, "RCA"],
              [lB, WB]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [PB, [pB, "Dell"],
              [lB, WB]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [PB, [pB, "Verizon"],
              [lB, WB]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [PB, [pB, "Barnes & Noble"],
              [lB, WB]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [PB, [pB, "NuVision"],
              [lB, WB]
            ],
            [/\b(k88) b/i],
            [PB, [pB, "ZTE"],
              [lB, WB]
            ],
            [/\b(nx\d{3}j) b/i],
            [PB, [pB, "ZTE"],
              [lB, RB]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [PB, [pB, "Swiss"],
              [lB, RB]
            ],
            [/\b(zur\d{3}) b/i],
            [PB, [pB, "Swiss"],
              [lB, WB]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [PB, [pB, "Zeki"],
              [lB, WB]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [pB, "Dragon Touch"], PB, [lB, WB]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [PB, [pB, "Insignia"],
              [lB, WB]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [PB, [pB, "NextBook"],
              [lB, WB]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [pB, "Voice"], PB, [lB, RB]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [pB, "LvTel"], PB, [lB, RB]
            ],
            [/\b(ph-1) /i],
            [PB, [pB, "Essential"],
              [lB, RB]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [PB, [pB, "Envizen"],
              [lB, WB]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [PB, [pB, "MachSpeed"],
              [lB, WB]
            ],
            [/\btu_(1491) b/i],
            [PB, [pB, "Rotor"],
              [lB, WB]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [PB, [pB, rB],
              [lB, WB]
            ],
            [/(sprint) (\w+)/i],
            [pB, PB, [lB, RB]],
            [/(kin\.[onetw]{3})/i],
            [
              [PB, /\./g, " "],
              [pB, LB],
              [lB, RB]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [PB, [pB, TB],
              [lB, WB]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [PB, [pB, TB],
              [lB, RB]
            ],
            [/smart-tv.+(samsung)/i],
            [pB, [lB, AB]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [PB, /^/, "SmartTV"],
              [pB, cB],
              [lB, AB]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [pB, iB],
              [lB, AB]
            ],
            [/(apple) ?tv/i],
            [pB, [PB, UB + " TV"],
              [lB, AB]
            ],
            [/crkey/i],
            [
              [PB, KB + "cast"],
              [pB, mB],
              [lB, AB]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [PB, [pB, nB],
              [lB, AB]
            ],
            [/(shield \w+ tv)/i],
            [PB, [pB, rB],
              [lB, AB]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [PB, [pB, hB],
              [lB, AB]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [PB, [pB, aB],
              [lB, AB]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [PB, [pB, eB],
              [lB, AB]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [pB, PB, [lB, AB]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [pB, BO],
              [PB, BO],
              [lB, AB]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [PB, [lB, AB]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [lB, AB]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [pB, PB, [lB, NB]],
            [/droid.+; (shield)( bui|\))/i],
            [PB, [pB, rB],
              [lB, NB]
            ],
            [/(playstation \w+)/i],
            [PB, [pB, aB],
              [lB, NB]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [PB, [pB, LB],
              [lB, NB]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [PB, [pB, cB],
              [lB, VB]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [pB, PB, [lB, VB]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [PB, [pB, EB],
              [lB, VB]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [PB, [pB, UB],
              [lB, VB]
            ],
            [/(opwwe\d{3})/i],
            [PB, [pB, XB],
              [lB, VB]
            ],
            [/(moto 360)/i],
            [PB, [pB, gB],
              [lB, VB]
            ],
            [/(smartwatch 3)/i],
            [PB, [pB, aB],
              [lB, VB]
            ],
            [/(g watch r)/i],
            [PB, [pB, iB],
              [lB, VB]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [PB, [pB, TB],
              [lB, VB]
            ],
            [/droid.+; (glass) \d/i],
            [PB, [pB, mB],
              [lB, VB]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [pB, PB, [lB, VB]],
            [/; (quest( \d| pro)?)/i],
            [PB, [pB, bB],
              [lB, VB]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [pB, [lB, SB]],
            [/(aeobc)\b/i],
            [PB, [pB, nB],
              [lB, SB]
            ],
            [/(homepod).+mac os/i],
            [PB, [pB, UB],
              [lB, SB]
            ],
            [/windows iot/i],
            [
              [lB, SB]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [PB, [lB, RB]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [PB, [lB, WB]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [lB, WB]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [lB, RB]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [PB, [pB, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [qB, [zB, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [zB, qB],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [qB, [zB, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [zB, qB],
            [/ladybird\//i],
            [
              [zB, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [qB, zB]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [zB, qB],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [zB, [qB, GO, YO]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [qB, GO, YO],
              [zB, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [qB, /_/g, "."],
              [zB, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [zB, HB],
              [qB, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [qB, zB],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [zB, /(.+)/, "$1 Touch"], qB
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [zB, qB],
            [/\(bb(10);/i],
            [qB, [zB, kB]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [qB, [zB, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [qB, [zB, uB + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [qB, [zB, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [qB, [zB, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [qB, [zB, KB + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [zB, CB], qB
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [zB, qB],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [zB, "Solaris"], qB
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [zB, qB]
          ]
        },
        QO = function(BB, OB) {
          if (typeof BB === yB && (OB = BB, BB = QB), !(this instanceof QO)) return new QO(BB, OB).getResult();
          var GB = typeof DB !== jB && DB.navigator ? DB.navigator : QB,
            YB = BB || (GB && GB.userAgent ? GB.userAgent : ""),
            NB = GB && GB.userAgentData ? GB.userAgentData : QB,
            AB = OB ? function(BB, OB) {
              var GB = {};
              for (var YB in BB) OB[YB] && OB[YB].length % 2 === 0 ? GB[YB] = OB[YB].concat(BB[YB]) : GB[YB] = BB[YB];
              return GB
            }(DO, OB) : DO,
            VB = GB && GB.userAgent == YB;
          return this.getBrowser = function() {
            var BB, OB = {};
            return OB[zB] = QB, OB[qB] = QB, OO.call(OB, YB, AB.browser), OB[MB] = typeof(BB = OB[qB]) === JB ? BB.replace(/[^\d\.]/g, "").split(".")[0] : QB, VB && GB && GB.brave && typeof GB.brave.isBrave == oB && (OB[zB] = "Brave"), OB
          }, this.getCPU = function() {
            var BB = {};
            return BB[ZB] = QB, OO.call(BB, YB, AB.cpu), BB
          }, this.getDevice = function() {
            var BB = {};
            return BB[pB] = QB, BB[PB] = QB, BB[lB] = QB, OO.call(BB, YB, AB.device), VB && !BB[lB] && NB && NB.mobile && (BB[lB] = RB), VB && "Macintosh" == BB[PB] && GB && typeof GB.standalone !== jB && GB.maxTouchPoints && GB.maxTouchPoints > 2 && (BB[PB] = "iPad", BB[lB] = WB), BB
          }, this.Lp = function() {
            var BB = {};
            return BB[zB] = QB, BB[qB] = QB, OO.call(BB, YB, AB.engine), BB
          }, this.getOS = function() {
            var BB = {};
            return BB[zB] = QB, BB[qB] = QB, OO.call(BB, YB, AB.os), VB && !BB[zB] && NB && NB.platform && "Unknown" != NB.platform && (BB[zB] = NB.platform.replace(/chrome os/i, CB).replace(/macos/i, HB)), BB
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Lp(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return YB
          }, this.setUA = function(BB) {
            return YB = typeof BB === JB && BB.length > 500 ? BO(BB, 500) : BB, this
          }, this.setUA(YB), this
        };
      QO.VERSION = "1.0.41", QO.BROWSER = sB([zB, qB, MB]), QO.CPU = sB([ZB]), QO.DEVICE = sB([PB, pB, lB, NB, RB, AB, WB, VB, SB]), QO.ENGINE = QO.OS = sB([zB, qB]), typeof OB !== jB ? (BB.exports && (OB = BB.exports = QO), OB.UAParser = QO) : GB.amdO ? (YB = function() {
        return QO
      }.call(OB, GB, OB, BB)) === QB || (BB.exports = YB) : typeof DB !== jB && (DB.UAParser = QO);
      var oO = typeof DB !== jB && (DB.jQuery || DB.Zepto);
      if (oO && !oO.ua) {
        var jO = new QO;
        oO.ua = jO.getResult(), oO.ua.get = function() {
          return jO.getUA()
        }, oO.ua.set = function(BB) {
          jO.setUA(BB);
          var OB = jO.getResult();
          for (var GB in OB) oO.ua[GB] = OB[GB]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);