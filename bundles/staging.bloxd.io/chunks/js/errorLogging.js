export const id = 31;
export const ids = [31];
export const modules = {
  6843: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BaseExtension: () => BZ,
      BaseInstrumentation: () => IZ,
      BaseTransport: () => KJ,
      CSPInstrumentation: () => wJ,
      ConsoleInstrumentation: () => MZ,
      ConsoleTransport: () => Zo,
      EVENT_CLICK: () => WI,
      EVENT_NAVIGATION: () => dI,
      EVENT_ROUTE_CHANGE: () => YI,
      EVENT_SESSION_EXTEND: () => wI,
      EVENT_SESSION_RESUME: () => sI,
      EVENT_SESSION_START: () => QI,
      EVENT_VIEW_CHANGED: () => CI,
      ErrorsInstrumentation: () => PZ,
      FetchTransport: () => Co,
      InternalLoggerLevel: () => AI,
      LogLevel: () => WZ,
      MAX_SESSION_PERSISTENCE_TIME: () => kB,
      NavigationInstrumentation: () => eJ,
      Observable: () => UZ,
      PerformanceInstrumentation: () => bT,
      PersistentSessionsManager: () => mI,
      SESSION_EXPIRATION_TIME: () => oB,
      SESSION_INACTIVITY_TIME: () => GB,
      STORAGE_KEY: () => JB,
      SessionInstrumentation: () => TZ,
      TransportItemType: () => VJ,
      UserActionInstrumentation: () => sJ,
      UserActionState: () => NJ,
      VERSION: () => ZZ,
      ViewInstrumentation: () => rZ,
      VolatileSessionsManager: () => XI,
      WebVitalsInstrumentation: () => jT,
      allLogLevels: () => CZ,
      browserMeta: () => bJ,
      buildStackFrame: () => JZ,
      captureMetas: () => mo,
      createInternalLogger: () => Yo,
      createPromiseBuffer: () => zo,
      createSession: () => EJ,
      deepEqual: () => UI,
      defaultEventDomain: () => TB,
      defaultExceptionType: () => OZ,
      defaultGlobalObjectKey: () => io,
      defaultInternalLoggerLevel: () => bI,
      defaultLogLevel: () => dZ,
      faro: () => gB,
      genShortID: () => yI,
      getCurrentTimestamp: () => NI,
      getDataFromSafariExtensions: () => zZ,
      getIgnoreUrls: () => xB,
      getInternalFaroFromGlobalObject: () => zB,
      getStackFramesFromError: () => NZ,
      getTransportBody: () => Io,
      getUrlFromResource: () => DB,
      getWebInstrumentations: () => uJ,
      globalObject: () => nB,
      initializeFaro: () => So,
      internalGlobalObjectKey: () => hB,
      isArray: () => aB,
      isBoolean: () => OB,
      isDomError: () => LB,
      isDomException: () => eB,
      isElement: () => fB,
      isElementDefined: () => uB,
      hN: () => bB,
      isError: () => mB,
      isErrorDefined: () => rB,
      isErrorEvent: () => XB,
      isEvent: () => RB,
      isEventDefined: () => PB,
      isFunction: () => pB,
      isInstanceOf: () => WB,
      isInt: () => wB,
      isInternalFaroOnGlobalObject: () => NB,
      isMap: () => AB,
      isMapDefined: () => lB,
      isNull: () => CB,
      isNumber: () => sB,
      isObject: () => iB,
      isPrimitive: () => jB,
      isRegExp: () => HB,
      isString: () => QB,
      isSymbol: () => YB,
      isSyntheticEvent: () => tB,
      isThenable: () => MB,
      isToString: () => UB,
      isTypeof: () => yB,
      isUndefined: () => dB,
      makeCoreConfig: () => Ho,
      noop: () => lI,
      osMeta: () => xJ,
      parseStacktrace: () => gZ,
      sdkMeta: () => DJ,
      setInternalFaroOnGlobalObject: () => FB,
      transportItemTypeToBodyKey: () => SJ,
      unknownString: () => RZ,
      userActionDataAttribute: () => xT,
      userActionTimeoutDataAttribute: () => ET
    });
    const TB = "browser",
      JB = "com.grafana.faro.session",
      oB = 144e5,
      GB = 9e5,
      vB = 1e3,
      kB = GB,
      cB = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: kB
      };
    const nB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof ZB.g ? ZB.g : "undefined" !== typeof self ? self : void 0;
    const hB = "_faroInternal";

    function zB() {
      return nB[hB]
    }

    function FB(BB) {
      BB.config.isolate ? BB.internalLogger.debug("Skipping registering internal Faro instance on global object") : (BB.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(nB, hB, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: BB
      }))
    }

    function NB() {
      return hB in nB
    }
    let gB = {
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

    function qB(BB, IB, ZB, TB, JB, oB, GB) {
      return IB.debug("Initializing Faro"), gB = {
          api: oB,
          config: ZB,
          instrumentations: GB,
          internalLogger: IB,
          metas: TB,
          pause: JB.pause,
          transports: JB,
          unpatchedConsole: BB,
          unpause: JB.unpause
        }, FB(gB),
        function(BB) {
          if (BB.config.preventGlobalExposure) BB.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (BB.internalLogger.debug(`Registering public faro reference in the global scope using "${BB.config.globalObjectKey}" key`), BB.config.globalObjectKey in nB) return void BB.internalLogger.warn(`Skipping global registration due to key "${BB.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(nB, BB.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: BB
            })
          }
        }(gB), gB
    }

    function yB(BB, IB) {
      return typeof BB === IB
    }

    function UB(BB, IB) {
      return Object.prototype.toString.call(BB) === `[object ${IB}]`
    }

    function WB(BB, IB) {
      try {
        return BB instanceof IB
      } catch (ZB) {
        return !1
      }
    }
    const dB = BB => yB(BB, "undefined"),
      CB = BB => yB(BB, "null"),
      QB = BB => yB(BB, "string"),
      sB = BB => yB(BB, "number") && !isNaN(BB) || yB(BB, "bigint"),
      wB = BB => sB(BB) && Number.isInteger(BB),
      OB = BB => yB(BB, "boolean"),
      YB = BB => yB(BB, "symbol"),
      iB = BB => !CB(BB) && yB(BB, "object"),
      pB = BB => yB(BB, "function"),
      aB = BB => UB(BB, "Array"),
      HB = BB => UB(BB, "RegExp"),
      MB = BB => pB(null === BB || void 0 === BB ? void 0 : BB.then),
      jB = BB => !iB(BB) && !pB(BB),
      PB = "undefined" !== typeof Event,
      RB = BB => PB && WB(BB, Event),
      rB = "undefined" !== typeof Error,
      mB = BB => rB && WB(BB, Error),
      XB = BB => UB(BB, "ErrorEvent"),
      LB = BB => UB(BB, "DOMError"),
      eB = BB => UB(BB, "DOMException"),
      uB = "undefined" !== typeof Element,
      fB = BB => uB && WB(BB, Element),
      lB = "undefined" !== typeof Map,
      AB = BB => lB && WB(BB, Map),
      tB = BB => iB(BB) && "nativeEvent" in BB && "preventDefault" in BB && "stopPropagation" in BB;

    function bB(BB) {
      return null == BB || (aB(BB) || QB(BB) ? 0 === BB.length : !!iB(BB) && 0 === Object.keys(BB).length)
    }

    function xB() {
      return gB.transports.transports.flatMap((BB => BB.getIgnoreUrls()))
    }

    function EB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return xB().some((IB => BB && null != BB.match(IB)))
    }

    function DB(BB) {
      return QB(BB) ? BB : BB instanceof URL ? BB.href : !bB(BB) && pB(null === BB || void 0 === BB ? void 0 : BB.toString) ? BB.toString() : void 0
    }
    const KB = "sessionStorage",
      VB = "localStorage";

    function SB(BB) {
      try {
        let IB;
        IB = window[BB];
        const ZB = "__faro_storage_test__";
        return IB.setItem(ZB, ZB), IB.removeItem(ZB), !0
      } catch (ZB) {
        var IB;
        return null === (IB = gB.internalLogger) || void 0 === IB || IB.info(`Web storage of type ${BB} is not available. Reason: ${ZB}`), !1
      }
    }

    function BI(BB, IB) {
      return oI(IB) ? window[IB].getItem(BB) : null
    }

    function II(BB, IB, ZB) {
      if (oI(ZB)) try {
        window[ZB].setItem(BB, IB)
      } catch (TB) {}
    }

    function ZI(BB, IB) {
      oI(IB) && window[IB].removeItem(BB)
    }
    const TI = SB(VB),
      JI = SB(KB);

    function oI(BB) {
      return BB === VB ? TI : BB === KB && JI
    }

    function GI(BB) {
      return GI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, GI(BB)
    }

    function vI(BB) {
      var IB = function(BB, IB) {
        if ("object" != GI(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != GI(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == GI(IB) ? IB : IB + ""
    }

    function kI(BB, IB, ZB) {
      return (IB = vI(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function cI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function nI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? cI(Object(ZB), !0).forEach((function(IB) {
          kI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : cI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function hI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gB;
      var IB, ZB, TB;
      const JB = BB.config.sessionTracking,
        oB = null !== (IB = null !== (ZB = null === JB || void 0 === JB || null === (TB = JB.sampler) || void 0 === TB ? void 0 : TB.call(JB, {
          metas: BB.metas.value
        })) && void 0 !== ZB ? ZB : null === JB || void 0 === JB ? void 0 : JB.samplingRate) && void 0 !== IB ? IB : 1,
        GB = "number" === typeof oB ? function(BB) {
          return Math.min(1, Math.max(0, BB))
        }(oB) : 0;
      if (!(GB > 0)) return !1;
      if (1 === GB) return !0;
      try {
        const BB = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === BB || void 0 === BB ? void 0 : BB.getRandomValues)) {
          const IB = new Uint32Array(1);
          return BB.getRandomValues(IB), IB[0] / Math.pow(2, 32) < GB
        }
      } catch (vB) {}
      return Math.random() < GB
    }

    function zI() {
      return Date.now()
    }

    function FI() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function NI() {
      return (new Date).toISOString()
    }

    function gI(BB) {
      return new Date(BB).toISOString()
    }
    const qI = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function yI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const IB = new Uint32Array(BB),
        ZB = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === ZB || void 0 === ZB ? void 0 : ZB.getRandomValues) ZB.getRandomValues(IB);
      else
        for (let JB = 0; JB < BB; JB++) IB[JB] = Math.floor(4294967296 * Math.random());
      let TB = "";
      for (let JB = 0; JB < BB; JB++) TB += qI[IB[JB] % 59];
      return TB
    }

    function UI(BB, IB) {
      if (BB === IB) return !0;
      if (yB(BB, "number") && isNaN(BB)) return yB(IB, "number") && isNaN(IB);
      const ZB = aB(BB),
        TB = aB(IB);
      if (ZB !== TB) return !1;
      if (ZB && TB) {
        const ZB = BB.length;
        if (ZB !== IB.length) return !1;
        for (let TB = ZB; 0 !== TB--;)
          if (!UI(BB[TB], IB[TB])) return !1;
        return !0
      }
      const JB = iB(BB),
        oB = iB(IB);
      if (JB !== oB) return !1;
      if (BB && IB && JB && oB) {
        const ZB = Object.keys(BB),
          TB = Object.keys(IB);
        if (ZB.length !== TB.length) return !1;
        for (let BB of ZB)
          if (!TB.includes(BB)) return !1;
        for (let JB of ZB)
          if (!UI(BB[JB], IB[JB])) return !1;
        return !0
      }
      return !1
    }
    const WI = "click",
      dI = "navigation",
      CI = "view_changed",
      QI = "session_start",
      sI = "session_resume",
      wI = "session_extend",
      OI = "service_name_override",
      YI = "route_change";

    function iI() {
      let {
        sessionId: BB,
        started: IB,
        lastActivity: ZB,
        isSampled: TB = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, JB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gB;
      var oB;
      const GB = zI(),
        vB = null === (oB = JB.config) || void 0 === oB || null === (oB = oB.sessionTracking) || void 0 === oB ? void 0 : oB.generateSessionId;
      return null == BB && (BB = "function" === typeof vB ? vB() : yI()), {
        sessionId: BB,
        lastActivity: null !== ZB && void 0 !== ZB ? ZB : GB,
        started: null !== IB && void 0 !== IB ? IB : GB,
        isSampled: TB
      }
    }

    function pI(BB) {
      if (null == BB) return !1;
      const IB = zI();
      return IB - BB.started < 144e5 && IB - BB.lastActivity < GB
    }

    function aI(BB) {
      let {
        fetchUserSession: IB,
        storeUserSession: ZB,
        adoptSession: TB,
        updateInterval: JB = 0
      } = BB, vB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gB, kB = 0;
      return function() {
        let {
          forceSessionExtend: BB = !1,
          refreshActivity: cB = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var nB, hB;
        if (!IB || !ZB) return;
        const zB = zI();
        if (!BB && zB < kB && kB - zB <= JB) return;
        const FB = vB.config.sessionTracking,
          NB = null === FB || void 0 === FB ? void 0 : FB.persistent;
        if (NB && !TI || !NB && !JI) return;
        const gB = IB();
        if (kB = Math.min(zB + JB, (null !== (nB = null === gB || void 0 === gB ? void 0 : gB.started) && void 0 !== nB ? nB : zB) + oB, (null !== (hB = null === gB || void 0 === gB ? void 0 : gB.lastActivity) && void 0 !== hB ? hB : zB) + GB), !1 === BB && pI(gB)) {
          var qB;
          cB && ZB(nI(nI({}, gB), {}, {
            lastActivity: zB
          }));
          const BB = null === (qB = vB.metas.value.session) || void 0 === qB ? void 0 : qB.id;
          null != TB && null != gB.sessionMeta && gB.sessionId !== BB && TB(gB.sessionMeta)
        } else {
          var yB, UB, WB;
          let BB = MI(iI({
            isSampled: hI(vB)
          }, vB), gB, vB);
          kB = zB + JB, ZB(BB), null === (yB = vB.api) || void 0 === yB || yB.setSession(BB.sessionMeta), null === FB || void 0 === FB || null === (UB = FB.onSessionChange) || void 0 === UB || UB.call(FB, null !== (WB = null === gB || void 0 === gB ? void 0 : gB.sessionMeta) && void 0 !== WB ? WB : null, BB.sessionMeta)
        }
      }
    }

    function HI(BB) {
      let IB, {
          fetchUserSession: ZB,
          storeUserSession: TB,
          updateInterval: JB = 0
        } = BB,
        oB = 0;
      return BB => {
        const GB = zI();
        if (BB === IB && GB < oB && oB - GB <= JB) return;
        IB = BB, oB = GB + JB;
        const vB = ZB();
        (null === vB || void 0 === vB ? void 0 : vB.sessionId) === BB && pI(vB) && TB(nI(nI({}, vB), {}, {
          lastActivity: GB
        }))
      }
    }

    function MI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gB;
      var TB, JB, oB, GB, vB, kB;
      const cB = nI(nI({}, BB), {}, {
          sessionMeta: {
            id: BB.sessionId,
            attributes: PI(nI(nI(nI({}, null === (TB = ZB.config.sessionTracking) || void 0 === TB || null === (TB = TB.session) || void 0 === TB ? void 0 : TB.attributes), null !== (JB = null === (oB = ZB.metas.value.session) || void 0 === oB ? void 0 : oB.attributes) && void 0 !== JB ? JB : {}), {}, {
              isSampled: BB.isSampled.toString()
            }))
          }
        }),
        nB = null !== (GB = null === (vB = ZB.metas.value.session) || void 0 === vB ? void 0 : vB.overrides) && void 0 !== GB ? GB : null === IB || void 0 === IB || null === (kB = IB.sessionMeta) || void 0 === kB ? void 0 : kB.overrides;
      bB(nB) || (cB.sessionMeta.overrides = nB);
      const hB = null === IB || void 0 === IB ? void 0 : IB.sessionId;
      return null != hB && (cB.sessionMeta.attributes.previousSession = hB), cB
    }

    function jI(BB) {
      let {
        fetchUserSession: IB,
        storeUserSession: ZB
      } = BB, TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gB, JB = !1;
      return function(BB) {
        if (JB) return;
        const oB = BB.session,
          GB = IB();
        let vB = null === oB || void 0 === oB ? void 0 : oB.id;
        const kB = null === oB || void 0 === oB ? void 0 : oB.attributes,
          cB = null === oB || void 0 === oB ? void 0 : oB.overrides,
          nB = null === GB || void 0 === GB ? void 0 : GB.sessionMeta,
          hB = null === nB || void 0 === nB ? void 0 : nB.overrides,
          zB = !!cB && !UI(cB, hB),
          FB = !!kB && !UI(kB, null === nB || void 0 === nB ? void 0 : nB.attributes);
        if (oB && vB !== (null === GB || void 0 === GB ? void 0 : GB.sessionId) || FB || zB) {
          var NB, gB;
          const BB = null != GB && vB === GB.sessionId,
            IB = MI(BB ? GB : iI({
              sessionId: vB,
              isSampled: hI(TB)
            }, TB), GB, TB),
            oB = null === GB || void 0 === GB || null === (NB = GB.sessionMeta) || void 0 === NB || null === (NB = NB.attributes) || void 0 === NB ? void 0 : NB.previousSession;
          BB && null != oB && oB !== IB.sessionId && (IB.sessionMeta.attributes.previousSession = oB), (null === (gB = IB.sessionMeta.attributes) || void 0 === gB ? void 0 : gB.previousSession) === IB.sessionId && delete IB.sessionMeta.attributes.previousSession, ZB(IB),
            function(BB, IB) {
              let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var JB, oB, GB;
              if (!IB) return;
              const vB = ZB.serviceName,
                kB = null !== (JB = null !== (oB = TB.serviceName) && void 0 !== oB ? oB : null === (GB = BB.metas.value.app) || void 0 === GB ? void 0 : GB.name) && void 0 !== JB ? JB : "";
              vB && vB !== kB && BB.api.pushEvent(OI, {
                serviceName: vB,
                previousServiceName: kB
              })
            }(TB, zB, cB, hB), JB = !0;
          try {
            TB.api.setSession(IB.sessionMeta)
          } finally {
            JB = !1
          }
        }
      }
    }

    function PI(BB) {
      const IB = {};
      for (const ZB of Object.keys(BB)) {
        const TB = BB[ZB];
        void 0 !== TB && (IB[ZB] = TB)
      }
      return IB
    }

    function RI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== BB && void 0 !== BB ? BB : {}, function() {
        const BB = new WeakSet;
        return function(IB, ZB) {
          if (iB(ZB) && null !== ZB) {
            if (BB.has(ZB)) return null;
            BB.add(ZB)
          }
          return ZB
        }
      }())
    }

    function rI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const IB = {};
      for (const [ZB, TB] of Object.entries(BB)) IB[ZB] = iB(TB) && null !== TB ? RI(TB) : String(TB);
      return IB
    }
    var mI = class BB {
      constructor() {
        var IB = this;
        let ZB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gB;
        this.context = ZB, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = BB => {
          this.adopting = !0;
          try {
            var IB;
            null === (IB = this.context.api) || void 0 === IB || IB.setSession(BB)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return IB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = HI({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: vB
        }), this.updateUserSession = aI({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: vB
        }, ZB), this.init()
      }
      static removeUserSession() {
        ZI(JB, BB.storageTypeLocal)
      }
      static storeUserSession(IB) {
        II(JB, RI(IB), BB.storageTypeLocal)
      }
      static fetchUserSession() {
        const IB = BI(JB, BB.storageTypeLocal);
        return IB ? JSON.parse(IB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const IB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            IB && this.recordActivity(IB)
          }
        })), this.context.metas.addListener(jI({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    mI.storageTypeLocal = VB;
    var XI = class BB {
      constructor() {
        var IB = this;
        let ZB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gB;
        this.context = ZB, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return IB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = HI({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: vB
        }), this.updateUserSession = aI({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: vB
        }, ZB), this.init()
      }
      static removeUserSession() {
        ZI(JB, BB.storageTypeSession)
      }
      static storeUserSession(IB) {
        II(JB, RI(IB), BB.storageTypeSession)
      }
      static fetchUserSession() {
        const IB = BI(JB, BB.storageTypeSession);
        return IB ? JSON.parse(IB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const IB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            IB && this.recordActivity(IB)
          }
        })), this.context.metas.addListener(jI({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    XI.storageTypeSession = KB;
    const LI = new WeakMap;

    function eI(BB) {
      let IB = LI.get(BB);
      if (!IB) {
        let ZB = [],
          TB = [];
        IB = {
          addSessionUpdateListener: BB => {
            ZB.push(BB)
          },
          removeSessionUpdateListener: BB => {
            ZB = ZB.filter((IB => IB !== BB))
          },
          notifySessionUpdate: BB => {
            ZB.forEach((IB => IB(BB)))
          },
          shouldCapture: () => TB.every((BB => BB())),
          addCaptureFilter: BB => {
            TB.push(BB)
          },
          removeCaptureFilter: BB => {
            TB = TB.filter((IB => IB !== BB))
          }
        }, LI.set(BB, IB)
      }
      return IB
    }
    var uI = class {
      constructor(BB, IB, ZB) {
        this.metas = BB, this.transports = IB, this.onActivate = ZB, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = BB => {
          var IB, ZB, TB;
          const JB = this.pending;
          var oB, GB;
          if ("overrides" === BB.type) return void(this.pending = {
            reset: null !== (oB = null === JB || void 0 === JB ? void 0 : JB.reset) && void 0 !== oB && oB,
            inheritOverrides: null === (GB = null === JB || void 0 === JB ? void 0 : JB.inheritOverrides) || void 0 === GB || GB,
            session: nI(nI({}, null === JB || void 0 === JB ? void 0 : JB.session), {}, {
              overrides: nI(nI({}, null === JB || void 0 === JB ? void 0 : JB.session.overrides), BB.overrides)
            })
          });
          const vB = BB.session,
            kB = bB(vB) || null != vB && "id" in vB && !vB.id,
            cB = null !== (IB = null === vB || void 0 === vB ? void 0 : vB.overrides) && void 0 !== IB ? IB : null === JB || void 0 === JB ? void 0 : JB.session.overrides;
          this.pending = {
            reset: kB || !(null === vB || void 0 === vB ? void 0 : vB.id) && null !== (ZB = null === JB || void 0 === JB ? void 0 : JB.reset) && void 0 !== ZB && ZB,
            inheritOverrides: !(!BB.overrides && void 0 !== (null === vB || void 0 === vB ? void 0 : vB.overrides)) && (null === (TB = null === JB || void 0 === JB ? void 0 : JB.inheritOverrides) || void 0 === TB || TB),
            session: {
              id: null === vB || void 0 === vB ? void 0 : vB.id,
              attributes: (null === vB || void 0 === vB ? void 0 : vB.attributes) && nI({}, vB.attributes),
              overrides: BB.overrides ? nI(nI({}, null === JB || void 0 === JB ? void 0 : JB.session.overrides), BB.overrides) : cB && nI({}, cB)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var BB, IB;
        this.waiting = !0, eI(this.metas).addSessionUpdateListener(this.recordUpdate), eI(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (BB = (IB = this.metas).addCaptureListener) || void 0 === BB || BB.call(IB, this.activate), this.activate()
      }
      destroy() {
        var BB, IB;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), eI(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (BB = (IB = this.metas).removeCaptureListener) || void 0 === BB || BB.call(IB, this.activate), eI(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function fI(BB) {
      return (null === BB || void 0 === BB ? void 0 : BB.persistent) ? mI : XI
    }

    function lI() {}
    let AI = function(BB) {
      return BB[BB.OFF = 0] = "OFF", BB[BB.ERROR = 1] = "ERROR", BB[BB.WARN = 2] = "WARN", BB[BB.INFO = 3] = "INFO", BB[BB.VERBOSE = 4] = "VERBOSE", BB
    }({});
    const tI = {
        debug: lI,
        error: lI,
        info: lI,
        prefix: "Faro",
        warn: lI
      },
      bI = 1;

    function xI(BB) {
      return xI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, xI(BB)
    }

    function EI(BB) {
      var IB = function(BB, IB) {
        if ("object" != xI(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != xI(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == xI(IB) ? IB : IB + ""
    }

    function DI(BB, IB, ZB) {
      return (IB = EI(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function KI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function VI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? KI(Object(ZB), !0).forEach((function(IB) {
          DI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : KI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }
    const SI = VI({}, console);
    var BZ = class {
        constructor() {
          this.unpatchedConsole = SI, this.internalLogger = tI, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
          this.internalLogger.debug(`${this.name}\n`, ...IB)
        }
        logInfo() {
          for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
          this.internalLogger.info(`${this.name}\n`, ...IB)
        }
        logWarn() {
          for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
          this.internalLogger.warn(`${this.name}\n`, ...IB)
        }
        logError() {
          for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
          this.internalLogger.error(`${this.name}\n`, ...IB)
        }
      },
      IZ = class extends BZ {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ZZ = "2.12.1";
    var TZ = class extends IZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ZZ, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(BB) {
        var IB;
        const ZB = BB.session;
        if (ZB && ZB.id !== (null === (IB = this.notifiedSession) || void 0 === IB ? void 0 : IB.id)) {
          var TB;
          if (this.isAdoptingSession()) return void(this.notifiedSession = ZB);
          if (this.notifiedSession && this.notifiedSession.id === (null === (TB = ZB.attributes) || void 0 === TB ? void 0 : TB.previousSession)) return this.api.pushEvent(wI, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = ZB);
          this.notifiedSession = ZB, this.api.pushEvent(QI, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(BB, IB, ZB) {
        const TB = null === ZB || void 0 === ZB ? void 0 : ZB.session;
        let JB, oB, GB = BB.fetchUserSession();
        if (IB.persistent && IB.maxSessionPersistenceTime && GB) {
          const BB = zI();
          GB.lastActivity < BB - IB.maxSessionPersistenceTime && (mI.removeUserSession(), GB = null)
        }
        const vB = pI(GB);
        if ((null === ZB || void 0 === ZB ? void 0 : ZB.reset) || !vB || (null === TB || void 0 === TB ? void 0 : TB.id) && TB.id !== (null === GB || void 0 === GB ? void 0 : GB.sessionId)) {
          var kB, cB, nB, hB, zB, FB;
          oB = iI({
            sessionId: (null === ZB || void 0 === ZB ? void 0 : ZB.reset) ? void 0 : null !== (kB = null === TB || void 0 === TB ? void 0 : TB.id) && void 0 !== kB ? kB : null === (cB = IB.session) || void 0 === cB ? void 0 : cB.id,
            isSampled: hI(this)
          }, this);
          const BB = oB.sessionId,
            NB = ZB && vB ? null === GB || void 0 === GB || null === (nB = GB.sessionMeta) || void 0 === nB ? void 0 : nB.overrides : void 0,
            gB = NB ? nI(nI({}, null === (hB = IB.session) || void 0 === hB ? void 0 : hB.overrides), NB) : null === (zB = IB.session) || void 0 === zB ? void 0 : zB.overrides;
          oB.sessionMeta = nI({
            id: BB,
            attributes: nI({
              isSampled: oB.isSampled.toString()
            }, null === (FB = IB.session) || void 0 === FB ? void 0 : FB.attributes)
          }, gB ? {
            overrides: gB
          } : {}), JB = QI
        } else {
          var NB, gB;
          const BB = null === GB || void 0 === GB ? void 0 : GB.sessionId;
          oB = iI({
            sessionId: BB,
            isSampled: GB.isSampled || !1,
            started: null === GB || void 0 === GB ? void 0 : GB.started
          }, this);
          const ZB = null === GB || void 0 === GB ? void 0 : GB.sessionMeta,
            TB = nI(nI({}, null === (NB = IB.session) || void 0 === NB ? void 0 : NB.overrides), null === ZB || void 0 === ZB ? void 0 : ZB.overrides);
          oB.sessionMeta = nI(nI({}, IB.session), {}, {
            id: BB,
            attributes: nI(nI(nI({}, null === (gB = IB.session) || void 0 === gB ? void 0 : gB.attributes), null === ZB || void 0 === ZB ? void 0 : ZB.attributes), {}, {
              isSampled: oB.isSampled.toString()
            }),
            overrides: TB
          }), JB = sI
        }
        var qB;
        if (TB && (oB.sessionMeta = nI(nI({}, oB.sessionMeta), {}, {
            attributes: nI(nI(nI({}, null === (qB = oB.sessionMeta) || void 0 === qB ? void 0 : qB.attributes), TB.attributes), {}, {
              isSampled: oB.isSampled.toString()
            })
          }), TB.overrides)) {
          const BB = (null === ZB || void 0 === ZB ? void 0 : ZB.inheritOverrides) ? nI(nI({}, oB.sessionMeta.overrides), TB.overrides) : TB.overrides;
          Object.keys(BB).length > 0 ? oB.sessionMeta.overrides = BB : delete oB.sessionMeta.overrides
        }
        return {
          initialSession: oB,
          lifecycleType: JB
        }
      }
      registerBeforeSendHook(BB) {
        var IB;
        this.beforeSendHook = IB => {
          var ZB, TB;
          const JB = null === (ZB = IB.meta.session) || void 0 === ZB ? void 0 : ZB.id;
          JB && !this.transports.isPaused() && BB(JB);
          const oB = null === (TB = IB.meta.session) || void 0 === TB ? void 0 : TB.attributes;
          if (oB && "true" === (null === oB || void 0 === oB ? void 0 : oB.isSampled)) {
            var GB;
            let BB = JSON.parse(JSON.stringify(IB));
            const ZB = null === (GB = BB.meta.session) || void 0 === GB ? void 0 : GB.attributes;
            var vB;
            if (null === ZB || void 0 === ZB || delete ZB.isSampled, 0 === Object.keys(null !== ZB && void 0 !== ZB ? ZB : {}).length) null === (vB = BB.meta.session) || void 0 === vB || delete vB.attributes;
            return BB
          }
          return null
        }, null === (IB = this.transports) || void 0 === IB || IB.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var BB;
        this.logDebug("init session instrumentation");
        const IB = document.prerendering;
        var ZB;
        if ((null === (BB = this.config.sessionTracking) || void 0 === BB ? void 0 : BB.enabled) && (IB || this.prerenderSession)) return null !== (ZB = this.prerenderSession) && void 0 !== ZB || (this.prerenderSession = new uI(this.metas, this.transports, (BB => {
          this.prerenderSession = void 0, this.initializeSession(BB)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(BB) {
        const IB = this.config.sessionTracking;
        if (null === IB || void 0 === IB ? void 0 : IB.enabled) {
          var ZB, TB;
          const JB = fI(IB),
            oB = new JB(this);
          this.isAdoptingSession = oB.isAdopting, this.registerBeforeSendHook(oB.recordActivity);
          const {
            initialSession: GB,
            lifecycleType: vB
          } = this.createInitialSession(JB, IB, BB);
          JB.storeUserSession(GB);
          const kB = GB.sessionMeta;
          this.notifiedSession = kB, this.api.setSession(kB), this.captureListener = () => {
            this.transports.isPaused() || oB.updateSession({
              refreshActivity: !1
            })
          }, null === (ZB = (TB = this.metas).addCaptureListener) || void 0 === ZB || ZB.call(TB, this.captureListener), vB === QI && this.api.pushEvent(QI, {}, void 0, {
            skipDedupe: !0
          }), vB === sI && this.api.pushEvent(sI, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var BB, IB, ZB;
        (null === (BB = this.prerenderSession) || void 0 === BB || BB.destroy(), this.captureListener) && (null === (IB = (ZB = this.metas).removeCaptureListener) || void 0 === IB || IB.call(ZB, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function JZ(BB, IB, ZB, TB) {
      const JB = {
        filename: BB || document.location.href,
        function: IB || "?"
      };
      return void 0 !== ZB && (JB.lineno = ZB), void 0 !== TB && (JB.colno = TB), JB
    }
    const oZ = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      GZ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      vZ = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      kZ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      cZ = "safari-extension",
      nZ = "safari-web-extension",
      hZ = /Minified React error #\d+;/i;

    function zZ(BB, IB) {
      const ZB = null === BB || void 0 === BB ? void 0 : BB.includes(cZ),
        TB = !ZB && (null === BB || void 0 === BB ? void 0 : BB.includes("safari-web-extension"));
      return ZB || TB ? [(null === BB || void 0 === BB ? void 0 : BB.includes("@")) ? BB.split("@")[0] : BB, ZB ? `${cZ}:${IB}` : `${nZ}:${IB}`] : [BB, IB]
    }
    const FZ = 1024;

    function NZ(BB) {
      let IB = [];
      BB.stacktrace ? IB = BB.stacktrace.split("\n").filter(((BB, IB) => IB % 2 === 0)) : BB.stack && (IB = BB.stack.split("\n"));
      const ZB = IB.reduce(((IB, ZB, TB) => {
        if (ZB.length > FZ) return IB;
        let JB, oB, GB, vB, kB;
        if (JB = oZ.exec(ZB)) {
          if (oB = JB[1], GB = JB[2], vB = JB[3], kB = JB[4], null === GB || void 0 === GB ? void 0 : GB.startsWith("eval")) {
            const BB = GZ.exec(GB);
            BB && (GB = BB[1], vB = BB[2], kB = BB[3])
          }
          GB = (null === GB || void 0 === GB ? void 0 : GB.startsWith("address at ")) ? GB.substring(11) : GB, [oB, GB] = zZ(oB, GB)
        } else if (JB = vZ.exec(ZB)) {
          if (oB = JB[1], GB = JB[3], vB = JB[4], kB = JB[5], GB && GB.includes(" > eval")) {
            const BB = kZ.exec(GB);
            BB && (oB = oB || "eval", GB = BB[1], vB = BB[2])
          } else 0 === TB && !kB && sB(BB.columnNumber) && (kB = String(BB.columnNumber + 1));
          [oB, GB] = zZ(oB, GB)
        }
        return (GB || oB) && IB.push(JZ(GB, oB, vB ? Number(vB) : void 0, kB ? Number(kB) : void 0)), IB
      }), []);
      return hZ.test(BB.message) ? ZB.slice(1) : ZB
    }

    function gZ(BB) {
      return {
        frames: NZ(BB)
      }
    }
    const qZ = "http-request-start",
      yZ = "http-request-end";
    var UZ = class BB {
      constructor() {
        this.subscribers = []
      }
      subscribe(BB) {
        return this.subscribers.push(BB), {
          unsubscribe: () => this.unsubscribe(BB)
        }
      }
      unsubscribe(BB) {
        this.subscribers = this.subscribers.filter((IB => IB !== BB))
      }
      notify(BB) {
        this.subscribers.forEach((IB => IB(BB)))
      }
      first() {
        const IB = new BB,
          ZB = BB => {
            IB.notify(BB), TB.unsubscribe()
          },
          TB = this.subscribe(ZB),
          JB = IB.unsubscribe.bind(IB);
        return this.withUnsubscribeOverride(IB, JB, ZB)
      }
      takeWhile(IB) {
        const ZB = new BB,
          TB = BB => {
            IB(BB) ? ZB.notify(BB) : ZB.unsubscribe(TB)
          };
        this.subscribe(TB);
        const JB = ZB.unsubscribe.bind(ZB);
        return this.withUnsubscribeOverride(ZB, JB, TB)
      }
      filter(IB) {
        const ZB = new BB,
          TB = BB => {
            IB(BB) && ZB.notify(BB)
          };
        this.subscribe(TB);
        const JB = ZB.unsubscribe.bind(ZB);
        return this.withUnsubscribeOverride(ZB, JB, TB)
      }
      merge() {
        const IB = new BB,
          ZB = [];
        for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
        JB.forEach((BB => {
          const TB = BB.subscribe((BB => {
            IB.notify(BB)
          }));
          ZB.push(TB)
        }));
        const GB = IB.unsubscribeAll.bind(IB);
        return IB.unsubscribe = () => {
          ZB.forEach((BB => BB.unsubscribe())), GB()
        }, IB
      }
      withUnsubscribeOverride(BB, IB, ZB) {
        return BB.unsubscribe = BB => {
          IB(BB), this.unsubscribe(ZB)
        }, BB
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let WZ = function(BB) {
      return BB.TRACE = "trace", BB.DEBUG = "debug", BB.INFO = "info", BB.LOG = "log", BB.WARN = "warn", BB.ERROR = "error", BB
    }({});
    const dZ = "log",
      CZ = ["trace", "debug", "info", "log", "warn", "error"];
    let QZ, sZ = !1;
    const wZ = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      OZ = "Error",
      YZ = BB => BB.map((BB => iB(BB) ? RI(BB) : String(BB))).join(" ");

    function iZ(BB) {
      let IB, ZB, TB, JB, oB = [];
      if (XB(BB) && BB.error) IB = BB.error.message, ZB = BB.error.name, oB = NZ(BB.error);
      else if ((TB = LB(BB)) || eB(BB)) {
        const {
          name: JB,
          message: oB
        } = BB;
        ZB = null !== JB && void 0 !== JB ? JB : TB ? "DOMError" : "DOMException", IB = oB ? `${ZB}: ${oB}` : ZB
      } else mB(BB) ? (ZB = BB.name, IB = BB.message, oB = NZ(BB)) : (iB(BB) || (JB = RB(BB))) && (ZB = JB ? BB.constructor.name : void 0, IB = `Non-Error exception captured with keys: ${Object.keys(BB)}`);
      return [IB, ZB, oB]
    }

    function pZ(BB) {
      const [IB, ZB, TB, JB, oB] = BB;
      let GB, vB, kB = [];
      const cB = QB(IB),
        nB = JZ(ZB, "?", TB, JB);
      return oB || !cB ? ([GB, vB, kB] = iZ(null !== oB && void 0 !== oB ? oB : IB), 0 === kB.length && (kB = [nB])) : cB && ([GB, vB] = function(BB) {
        var IB, ZB;
        const TB = BB.match(wZ),
          JB = null !== (IB = null === TB || void 0 === TB ? void 0 : TB[1]) && void 0 !== IB ? IB : OZ;
        return [null !== (ZB = null === TB || void 0 === TB ? void 0 : TB[2]) && void 0 !== ZB ? ZB : BB, JB]
      }(IB), kB = [nB]), {
        value: GB,
        type: vB,
        stackFrames: kB
      }
    }

    function aZ(BB, IB) {
      return mB(BB[0]) ? pZ(BB) : {
        value: IB(BB)
      }
    }
    const HZ = BB => BB.map((BB => {
      try {
        return String(BB)
      } catch (IB) {
        return ""
      }
    })).join(" ");
    var MZ = class BB extends IZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ZZ, this.errorSerializer = HZ
      }
      initialize() {
        var IB, ZB;
        const TB = this.config.consoleInstrumentation,
          JB = (null === TB || void 0 === TB ? void 0 : TB.serializeErrors) || !!(null === TB || void 0 === TB ? void 0 : TB.errorSerializer);
        this.errorSerializer = JB ? null !== (IB = null === TB || void 0 === TB ? void 0 : TB.errorSerializer) && void 0 !== IB ? IB : YZ : HZ;
        const oB = null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.disabledLevels) && void 0 !== ZB ? ZB : BB.defaultDisabledLevels,
          GB = function(BB) {
            if (QZ || (QZ = new UZ), !sZ) {
              const IB = null !== BB && void 0 !== BB ? BB : SI;
              CZ.forEach((BB => {
                console[BB] = function() {
                  for (var ZB, TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
                  QZ.notify({
                    type: "console",
                    level: BB,
                    args: JB
                  }), null === (ZB = IB[BB]) || void 0 === ZB || ZB.apply(console, JB)
                }
              })), sZ = !0
            }
            return QZ
          }(this.unpatchedConsole);
        this.subscription = GB.subscribe((IB => {
          let {
            level: ZB,
            args: JB
          } = IB;
          if (!oB.includes(ZB)) try {
            if (ZB !== WZ.ERROR || (null === TB || void 0 === TB ? void 0 : TB.consoleErrorAsLog))
              if (ZB === WZ.ERROR && (null === TB || void 0 === TB ? void 0 : TB.consoleErrorAsLog)) {
                const {
                  value: IB,
                  type: TB,
                  stackFrames: oB
                } = aZ(JB, this.errorSerializer);
                this.api.pushLog(IB ? [BB.consoleErrorPrefix + IB] : JB, {
                  level: ZB,
                  context: {
                    value: null !== IB && void 0 !== IB ? IB : "",
                    type: null !== TB && void 0 !== TB ? TB : "",
                    stackFrames: (null === oB || void 0 === oB ? void 0 : oB.length) ? YZ(oB) : ""
                  }
                })
              } else this.api.pushLog(JB, {
                level: ZB
              });
            else {
              const {
                value: IB,
                type: ZB,
                stackFrames: TB
              } = aZ(JB, this.errorSerializer);
              if (IB && !ZB && !TB) return void this.api.pushError(new Error(BB.consoleErrorPrefix + IB));
              this.api.pushError(new Error(BB.consoleErrorPrefix + IB), {
                type: ZB,
                stackFrames: TB
              })
            }
          } catch (GB) {
            this.logError(GB)
          }
        }))
      }
      destroy() {
        var BB;
        null === (BB = this.subscription) || void 0 === BB || BB.unsubscribe(), this.subscription = void 0
      }
    };
    MZ.defaultDisabledLevels = [WZ.DEBUG, WZ.TRACE, WZ.LOG], MZ.consoleErrorPrefix = "console.error: ";
    const jZ = [];
    var PZ = class extends IZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ZZ
      }
      initialize() {
        this.logDebug("Initializing"),
          function(BB) {
            const IB = window.onerror;
            window.onerror = function() {
              for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
              try {
                const {
                  value: IB,
                  type: ZB,
                  stackFrames: JB
                } = pZ(TB), oB = TB[4];
                if (IB) {
                  const TB = {
                    type: ZB,
                    stackFrames: JB
                  };
                  null != oB && (TB.originalError = oB), BB.pushError(new Error(IB), TB)
                }
              } finally {
                null === IB || void 0 === IB || IB.apply(window, TB)
              }
            }
          }(this.api),
          function(BB) {
            const IB = IB => {
              var ZB;
              let TB, JB, oB = IB;
              if (oB.reason) oB = IB.reason;
              else if (null === (ZB = IB.detail) || void 0 === ZB ? void 0 : ZB.reason) {
                var GB;
                oB = null === (GB = IB.detail) || void 0 === GB ? void 0 : GB.reason
              }
              let vB = [];
              jB(oB) ? (TB = `Non-Error promise rejection captured with value: ${String(oB)}`, JB = "UnhandledRejection") : [TB, JB, vB] = iZ(oB), TB && BB.pushError(new Error(TB), {
                type: JB,
                stackFrames: vB
              })
            };
            window.addEventListener("unhandledrejection", IB), jZ.push(IB)
          }(this.api)
      }
    };
    const RZ = "unknown";
    var rZ = class extends IZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ZZ, this.waitingForActivation = !1, this.sendViewChangedEvent = BB => {
          var IB;
          if (this.waitingForActivation || document.prerendering) return;
          const ZB = BB.view;
          if (ZB && ZB.name !== (null === (IB = this.notifiedView) || void 0 === IB ? void 0 : IB.name)) {
            var TB, JB, oB;
            const BB = null !== (TB = null === (JB = this.notifiedView) || void 0 === JB ? void 0 : JB.name) && void 0 !== TB ? TB : RZ;
            this.notifiedView = ZB, this.api.pushEvent(CI, {
              fromView: BB,
              toView: null !== (oB = ZB.name) && void 0 !== oB ? oB : RZ
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
    class mZ {
      t;
      o = 0;
      i = [];
      l(BB) {
        if (BB.hadRecentInput) return;
        const IB = this.i[0],
          ZB = this.i.at(-1);
        this.o && IB && ZB && BB.startTime - ZB.startTime < 1e3 && BB.startTime - IB.startTime < 5e3 ? (this.o += BB.value, this.i.push(BB)) : (this.o = BB.value, this.i = [BB]), this.t?.(BB)
      }
    }
    const XZ = () => {
        const BB = performance.getEntriesByType("navigation")[0];
        if (BB && BB.responseStart > 0 && BB.responseStart < performance.now()) return BB
      },
      LZ = BB => {
        if ("loading" === document.readyState) return "loading";
        const IB = XZ();
        if (IB) {
          if (BB < IB.domInteractive) return "loading";
          if (0 === IB.domContentLoadedEventStart || BB < IB.domContentLoadedEventStart) return "dom-interactive";
          if (0 === IB.domComplete || BB < IB.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      eZ = BB => {
        const IB = BB.nodeName;
        return 1 === BB.nodeType ? IB.toLowerCase() : IB.toUpperCase().replace(/^#/, "")
      },
      uZ = BB => {
        let IB = "";
        try {
          for (; 9 !== BB?.nodeType;) {
            const ZB = BB,
              TB = ZB.id ? "#" + ZB.id : [eZ(ZB), ...Array.from(ZB.classList ?? []).sort()].join(".");
            if (IB.length + TB.length > 99) return IB || TB;
            if (IB = IB ? TB + ">" + IB : TB, ZB.id) break;
            BB = ZB.parentNode
          }
        } catch {}
        return IB
      },
      fZ = new WeakMap;

    function lZ(BB, IB) {
      let ZB = fZ.get(IB);
      return ZB || (ZB = new WeakMap, fZ.set(IB, ZB)), ZB.get(BB) || ZB.set(BB, new IB), ZB.get(BB)
    }
    let AZ = -1;
    const tZ = () => AZ,
      bZ = BB => {
        addEventListener("pageshow", (IB => {
          IB.persisted && (AZ = IB.timeStamp, BB(IB))
        }), !0)
      },
      xZ = (BB, IB, ZB, TB) => {
        let JB, oB;
        return GB => {
          IB.value >= 0 && (GB || TB) && (oB = IB.value - (JB ?? 0), (oB || void 0 === JB) && (JB = IB.value, IB.delta = oB, IB.rating = ((BB, IB) => BB > IB[1] ? "poor" : BB > IB[0] ? "needs-improvement" : "good")(IB.value, ZB), BB(IB)))
        }
      },
      EZ = BB => {
        requestAnimationFrame((() => requestAnimationFrame((() => BB()))))
      },
      DZ = () => XZ()?.activationStart ?? 0;
    let KZ = -1;
    const VZ = new Set,
      SZ = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      BT = BB => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === BB.type)
            for (const BB of VZ) BB();
          isFinite(KZ) || (KZ = "visibilitychange" === BB.type ? BB.timeStamp : 0, removeEventListener("prerenderingchange", BT, !0))
        }
      },
      IT = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (KZ = 1 / 0), KZ < 0) {
          const BB = DZ(),
            IB = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((IB => "hidden" === IB.name && IB.startTime >= BB))?.startTime;
          KZ = IB ?? SZ(), addEventListener("visibilitychange", BT, !0), addEventListener("prerenderingchange", BT, !0), bZ((() => {
            setTimeout((() => {
              KZ = SZ()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return KZ
          },
          onHidden(BB) {
            VZ.add(BB)
          }
        }
      },
      ZT = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          GB = arguments.length > 6 ? arguments[6] : void 0;
        const vB = XZ(),
          kB = vB?.navigationId || 0;
        let cB = "navigate";
        return ZB ? cB = ZB : tZ() >= 0 ? cB = "back-forward-cache" : vB && (document.prerendering || DZ() > 0 ? cB = "prerender" : document.wasDiscarded ? cB = "restore" : vB.type && (cB = vB.type.replace(/_/g, "-"))), {
          name: BB,
          value: IB,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: cB,
          navigationId: TB || kB,
          navigationInteractionId: JB,
          navigationURL: oB || vB?.name,
          navigationStartTime: GB || 0
        }
      },
      TT = function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const TB = BB.filter((BB => PerformanceObserver.supportedEntryTypes.includes(BB)));
          if (TB.length > 0) {
            const BB = new PerformanceObserver((BB => {
              queueMicrotask((() => {
                const ZB = BB.getEntries();
                TB.length > 1 && ZB.sort(((BB, IB) => BB.startTime + BB.duration - (IB.startTime + IB.duration))), IB(ZB)
              }))
            }));
            for (const IB of TB) BB.observe({
              type: IB,
              buffered: !0,
              ...ZB
            });
            return BB
          }
        } catch {}
      },
      JT = BB => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && BB && BB.reportSoftNavs,
      oT = (BB, IB) => {
        if (BB.set(IB.navigationId, IB), BB.size > 2) {
          const IB = BB.keys().next().value;
          void 0 !== IB && BB.delete(IB)
        }
      },
      GT = BB => {
        let IB = !1;
        return () => {
          IB || (BB(), IB = !0)
        }
      };
    class vT {
      u
    }
    const kT = BB => {
        document.prerendering ? addEventListener("prerenderingchange", BB, !0) : BB()
      },
      cT = [1800, 3e3],
      nT = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZB = JT(IB);
        kT((() => {
          const TB = lZ(IB, vT),
            JB = IT();
          let oB, GB = ZT("FCP");
          const vB = TT(["paint"], (BB => {
            for (const IB of BB) "first-contentful-paint" === IB.name && (vB.disconnect(), IB.startTime < JB.firstHiddenTime && (GB.value = Math.max(IB.startTime - DZ(), 0), GB.entries.push(IB), GB.navigationId = IB.navigationId || GB.navigationId, oB(!0)))
          }));
          vB && (oB = xZ(BB, GB, cT, IB.reportAllChanges), bZ((ZB => {
            GB = ZT("FCP", -1, "back-forward-cache", GB.navigationId, GB.navigationInteractionId, GB.navigationURL, tZ()), oB = xZ(BB, GB, cT, IB.reportAllChanges), EZ((() => {
              GB.value = performance.now() - ZB.timeStamp, oB(!0)
            }))
          }))), ZB && TT(["soft-navigation"], (ZB => {
            ZB.forEach((ZB => {
              TB.u && ZB.navigationId && oT(TB.u, ZB);
              const JB = Math.max((ZB.presentationTime || ZB.paintTime || 0) - ZB.startTime, 0);
              GB = ZT("FCP", JB, "soft-navigation", ZB.navigationId, ZB.interactionId, ZB.name, ZB.startTime), oB = xZ(BB, GB, cT, IB.reportAllChanges), oB(!0)
            }))
          }), IB)
        }))
      },
      hT = [.1, .25],
      zT = BB => BB.find((BB => 1 === BB.node?.nodeType)) || BB[0];
    let FT = 0,
      NT = 1 / 0,
      gT = 0;
    const qT = BB => {
      for (const IB of BB) IB.interactionId && (NT = Math.min(NT, IB.interactionId), gT = Math.max(gT, IB.interactionId), FT = gT ? (gT - NT) / 7 + 1 : 0)
    };
    let yT;
    const UT = () => yT ? FT : performance.interactionCount ?? 0;
    class WT {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return UT() - this.h
      }
      D() {
        this.h = UT(), this.v.length = 0, this.p.clear()
      }
      S(BB) {
        const IB = this.T(),
          ZB = Math.min(this.v.length - 1, Math.floor(IB / 50));
        return !IB || -1 !== ZB || "soft-navigation" !== BB && "back-forward-cache" !== BB ? this.v[ZB] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(BB) {
        if (this.m?.(BB), !BB.interactionId) return;
        const IB = this.v.at(-1);
        let ZB = this.p.get(BB.interactionId);
        if (ZB || this.v.length < 10 || BB.duration > IB.k) {
          if (ZB ? BB.duration > ZB.k ? (ZB.entries = [BB], ZB.k = BB.duration) : BB.duration === ZB.k && BB.startTime === ZB.entries[0].startTime && ZB.entries.push(BB) : (ZB = {
              id: BB.interactionId,
              entries: [BB],
              k: BB.duration
            }, this.p.set(ZB.id, ZB), this.v.push(ZB)), this.v.sort(((BB, IB) => IB.k - BB.k)), this.v.length > 10) {
            const BB = this.v.splice(10);
            for (const IB of BB) this.p.delete(IB.id)
          }
          this.M?.(ZB)
        }
      }
    }
    const dT = BB => {
        const IB = "requestIdleCallback" in globalThis ? 1e3 : 0,
          ZB = globalThis.requestIdleCallback || setTimeout,
          TB = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) BB();
        else {
          const JB = GT(BB);
          let oB = -1;
          const GB = () => {
            TB(oB), JB()
          };
          addEventListener("visibilitychange", GB, {
            once: !0,
            capture: !0
          }), oB = ZB((() => {
            removeEventListener("visibilitychange", GB, {
              capture: !0
            }), JB()
          }), {
            timeout: IB
          })
        }
      },
      CT = [200, 500],
      QT = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZB = lZ(IB = Object.assign({}, IB), WT);
        let TB = [],
          JB = [],
          oB = 0;
        const GB = new WeakMap,
          vB = new WeakMap;
        let kB = !1;
        const cB = () => {
            kB || (kB = !0, dT(nB))
          },
          nB = () => {
            const BB = new Set(ZB.v.map((BB => GB.get(BB.entries[0])))),
              IB = JB.length - 10;
            JB = JB.filter(((ZB, TB) => TB >= IB || BB.has(ZB)));
            const vB = new Set;
            for (const ZB of JB) {
              const BB = hB(ZB.startTime, ZB.processingEnd);
              for (const IB of BB) vB.add(IB)
            }
            const cB = TB.length - 10;
            TB = TB.filter(((BB, IB) => vB.has(BB) || IB >= cB && BB.startTime > oB)), kB = !1
          };
        ZB.m = BB => {
          const ZB = BB.startTime + BB.duration;
          let TB;
          oB = Math.max(oB, BB.processingEnd);
          for (let oB = JB.length - 1; oB >= 0; oB--) {
            const GB = JB[oB];
            if (Math.abs(ZB - GB.renderTime) <= 8) {
              TB = GB, TB.startTime = Math.min(BB.startTime, TB.startTime), TB.processingStart = Math.min(BB.processingStart, TB.processingStart), TB.processingEnd = Math.max(BB.processingEnd, TB.processingEnd), IB.includeProcessedEventEntries && TB.entries.push(BB);
              break
            }
          }
          TB || (TB = {
            startTime: BB.startTime,
            processingStart: BB.processingStart,
            processingEnd: BB.processingEnd,
            renderTime: ZB,
            entries: IB.includeProcessedEventEntries ? [BB] : []
          }, JB.push(TB)), BB.interactionId && GB.set(BB, TB), cB()
        }, ZB.M = BB => {
          if (!vB.get(BB)) {
            const ZB = BB.entries.find((BB => BB.target))?.target;
            if (ZB) {
              const TB = IB.generateTarget?.(ZB) ?? uZ(ZB);
              vB.set(BB, TB)
            } else {
              const IB = BB.entries.find((BB => BB.targetSelector))?.targetSelector;
              IB && vB.set(BB, IB)
            }
          }
        };
        const hB = (BB, IB) => {
          const ZB = [];
          for (const JB of TB)
            if (!(JB.startTime + JB.duration < BB)) {
              if (JB.startTime > IB) break;
              ZB.push(JB)
            } return ZB
        };
        TT(["long-animation-frame"], (BB => {
            TB = TB.concat(BB), cB()
          }), IB),
          function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const ZB = IT();
            kT((() => {
              "interactionCount" in performance || yT || (yT = TT(["event"], qT, {
                durationThreshold: 0
              }));
              let TB, JB = ZT("INP");
              const oB = lZ(IB, WT),
                GB = (ZB, GB, vB, kB, cB) => {
                  oB.D(), JB = ZT("INP", -1, ZB, GB, vB, kB, cB), TB = xZ(BB, JB, CT, IB.reportAllChanges)
                },
                vB = () => {
                  const BB = oB.S(JB.navigationType);
                  BB && BB.k !== JB.value && (JB.value = BB.k, JB.entries = BB.entries, TB())
                },
                kB = BB => {
                  vB(), TB(!0), GB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                },
                cB = function(BB) {
                  let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  dT((() => {
                    for (const IB of BB) "soft-navigation" !== IB.entryType ? oB.l(IB) : kB(IB);
                    vB(), IB && TB(!0)
                  }))
                },
                nB = ["event", "first-input"];
              JT(IB) && nB.push("soft-navigation");
              const hB = TT(nB, cB, {
                ...IB,
                durationThreshold: IB.durationThreshold ?? 40
              });
              TB = xZ(BB, JB, CT, IB.reportAllChanges), hB && (ZB.onHidden((() => {
                cB(hB.takeRecords(), !0)
              })), bZ((() => {
                GB("back-forward-cache", JB.navigationId, JB.navigationInteractionId, JB.navigationURL, tZ())
              })))
            }))
          }((IB => {
            BB((BB => {
              if (0 === BB.entries.length) {
                const IB = BB.navigationStartTime || 0,
                  ZB = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: BB.value,
                    loadState: LZ(IB)
                  };
                return Object.assign(BB, {
                  attribution: ZB
                })
              }
              const IB = BB.entries[0],
                TB = GB.get(IB),
                JB = Math.max(TB.processingStart, IB.startTime),
                oB = Math.max(IB.startTime + IB.duration, JB),
                kB = Math.min(TB.processingEnd, oB),
                cB = TB.entries.sort(((BB, IB) => BB.processingStart - IB.processingStart)),
                nB = hB(IB.startTime, kB),
                zB = ZB.p.get(IB.interactionId),
                FB = {
                  interactionTarget: vB.get(zB),
                  interactionType: IB.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: IB.startTime,
                  nextPaintTime: oB,
                  processedEventEntries: cB,
                  longAnimationFrameEntries: nB,
                  inputDelay: JB - IB.startTime,
                  processingDuration: kB - JB,
                  presentationDelay: oB - kB,
                  loadState: LZ(IB.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (BB => {
                const IB = BB.interactionTime,
                  ZB = BB.nextPaintTime;
                if (!BB.longAnimationFrameEntries?.length || !IB || !ZB) return;
                const TB = BB.inputDelay,
                  JB = BB.processingDuration;
                let oB, GB, vB = 0,
                  kB = 0,
                  cB = 0,
                  nB = 0;
                for (const FB of BB.longAnimationFrameEntries) {
                  kB = kB + FB.startTime + FB.duration - FB.styleAndLayoutStart;
                  for (const BB of FB.scripts) {
                    const ZB = BB.startTime + BB.duration;
                    if (ZB < IB) continue;
                    const cB = ZB - Math.max(IB, BB.startTime),
                      hB = BB.duration ? cB / BB.duration * BB.forcedStyleAndLayoutDuration : 0;
                    vB += cB - hB, kB += hB, cB > nB && (GB = BB.startTime < IB + TB ? "input-delay" : BB.startTime >= IB + TB + JB ? "presentation-delay" : "processing-duration", oB = BB, nB = cB)
                  }
                }
                const hB = BB.longAnimationFrameEntries.at(-1),
                  zB = hB ? hB.startTime + hB.duration : 0;
                zB >= IB + TB + JB && (cB = ZB - zB), oB && GB && (BB.longestScript = {
                  entry: oB,
                  subpart: GB,
                  intersectingDuration: nB
                }), BB.totalScriptDuration = vB, BB.totalStyleAndLayoutDuration = kB, BB.totalPaintDuration = cB, BB.totalUnattributedDuration = ZB - IB - vB - kB - cB
              })(FB), Object.assign(BB, {
                attribution: FB
              })
            })(IB))
          }), IB)
      };
    class sT {
      m;
      u;
      l(BB) {
        this.m?.(BB)
      }
    }
    const wT = [2500, 4e3];
    let OT = 50;
    const YT = [];
    TT(["resource"], (BB => {
      for (const IB of BB) YT.push(IB), YT.length > OT && YT.shift()
    }));
    const iT = [800, 1800],
      pT = BB => {
        document.prerendering ? kT((() => pT(BB))) : "complete" !== document.readyState ? addEventListener("load", (() => pT(BB)), !0) : setTimeout(BB)
      },
      aT = "load_state",
      HT = "time_to_first_byte";
    var MT = class {
        constructor(BB, IB) {
          this.corePushMeasurement = BB, this.webVitalConfig = IB
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var BB;
          ! function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZB = lZ(IB = Object.assign({}, IB), mZ),
              TB = new WeakMap;
            ZB.t = BB => {
                if (BB?.sources?.length) {
                  const ZB = zT(BB.sources),
                    JB = ZB?.node;
                  if (JB) {
                    const BB = IB.generateTarget?.(JB) ?? uZ(JB);
                    TB.set(ZB, BB)
                  }
                }
              },
              function(BB) {
                let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const ZB = IT();
                nT(GT((() => {
                  let TB, JB = ZT("CLS", 0);
                  const oB = lZ(IB, mZ),
                    GB = (ZB, GB, vB, kB, cB) => {
                      JB = ZT("CLS", 0, ZB, GB, vB, kB, cB), oB.o = 0, TB = xZ(BB, JB, hT, IB.reportAllChanges)
                    },
                    vB = function() {
                      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      oB.o > JB.value && (JB.value = oB.o, JB.entries = oB.i), TB(BB)
                    },
                    kB = BB => {
                      vB(!0), GB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                    },
                    cB = BB => {
                      for (const IB of BB) "soft-navigation" !== IB.entryType ? oB.l(IB) : kB(IB);
                      vB()
                    },
                    nB = ["layout-shift"];
                  JT(IB) && nB.push("soft-navigation");
                  const hB = TT(nB, cB);
                  hB && (TB = xZ(BB, JB, hT, IB.reportAllChanges), ZB.onHidden((() => {
                    cB(hB.takeRecords()), TB(!0)
                  })), bZ((() => {
                    GB("back-forward-cache", JB.navigationId, JB.navigationInteractionId, JB.navigationURL, tZ()), EZ(TB)
                  })), setTimeout(TB))
                })))
              }((IB => {
                BB((BB => {
                  let IB = {};
                  if (BB.entries.length) {
                    const ZB = BB.entries.reduce(((BB, IB) => BB.value > IB.value ? BB : IB));
                    if (ZB?.sources?.length) {
                      const BB = zT(ZB.sources);
                      BB && (IB = {
                        largestShiftTarget: TB.get(BB),
                        largestShiftTime: ZB.startTime,
                        largestShiftValue: ZB.value,
                        largestShiftSource: BB,
                        largestShiftEntry: ZB,
                        loadState: LZ(ZB.startTime)
                      })
                    }
                  }
                  return Object.assign(BB, {
                    attribution: IB
                  })
                })(IB))
              }), IB)
          }((BB => {
            const {
              loadState: IB,
              largestShiftValue: ZB,
              largestShiftTime: TB,
              largestShiftTarget: JB
            } = BB.attribution, oB = this.buildInitialValues(BB);
            this.addIfPresent(oB, "largest_shift_value", ZB), this.addIfPresent(oB, "largest_shift_time", TB);
            const GB = this.buildInitialContext(BB);
            this.addIfPresent(GB, aT, IB), this.addIfPresent(GB, "largest_shift_target", JB), this.pushMeasurement(oB, GB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureFCP() {
          var BB;
          ! function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZB = lZ(IB = Object.assign({}, IB), vT);
            JT(IB) && (ZB.u = new Map), nT((IB => {
              BB((BB => {
                let IB = {
                  timeToFirstByte: 0,
                  firstByteToFCP: BB.value,
                  loadState: LZ(tZ())
                };
                if ("soft-navigation" !== BB.navigationType) {
                  if (BB.entries.length) {
                    const ZB = XZ(),
                      TB = BB.entries.at(-1);
                    if (ZB) {
                      const JB = ZB.responseStart,
                        oB = ZB.activationStart || 0,
                        GB = Math.max(0, JB - oB);
                      IB = {
                        timeToFirstByte: GB,
                        firstByteToFCP: BB.value - GB,
                        loadState: LZ(BB.entries[0].startTime),
                        navigationEntry: ZB,
                        fcpEntry: TB
                      }
                    }
                  }
                } else {
                  const TB = ZB.u?.get(BB.navigationId);
                  TB && (IB = {
                    timeToFirstByte: 0,
                    firstByteToFCP: BB.value,
                    loadState: "complete",
                    navigationEntry: TB
                  })
                }
                return Object.assign(BB, {
                  attribution: IB
                })
              })(IB))
            }), IB)
          }((BB => {
            const {
              firstByteToFCP: IB,
              timeToFirstByte: ZB,
              loadState: TB
            } = BB.attribution, JB = this.buildInitialValues(BB);
            this.addIfPresent(JB, "first_byte_to_fcp", IB), this.addIfPresent(JB, HT, ZB);
            const oB = this.buildInitialContext(BB);
            this.addIfPresent(oB, aT, TB), this.pushMeasurement(JB, oB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureINP() {
          var BB;
          QT((BB => {
            var IB;
            const {
              interactionTime: ZB,
              presentationDelay: TB,
              inputDelay: JB,
              processingDuration: oB,
              nextPaintTime: GB,
              loadState: vB,
              interactionTarget: kB,
              interactionType: cB,
              totalScriptDuration: nB,
              totalStyleAndLayoutDuration: hB,
              totalPaintDuration: zB,
              totalUnattributedDuration: FB,
              longestScript: NB
            } = BB.attribution, gB = this.buildInitialValues(BB);
            this.addIfPresent(gB, "interaction_time", ZB), this.addIfPresent(gB, "presentation_delay", TB), this.addIfPresent(gB, "input_delay", JB), this.addIfPresent(gB, "processing_duration", oB), this.addIfPresent(gB, "next_paint_time", GB), this.addNumberIfDefined(gB, "total_script_duration", nB), this.addNumberIfDefined(gB, "total_style_and_layout_duration", hB), this.addNumberIfDefined(gB, "total_paint_duration", zB), this.addNumberIfDefined(gB, "total_unattributed_duration", FB), this.addNumberIfDefined(gB, "longest_script_intersecting_duration", null === NB || void 0 === NB ? void 0 : NB.intersectingDuration);
            const qB = this.buildInitialContext(BB);
            this.addIfPresent(qB, aT, vB), this.addIfPresent(qB, "interaction_target", kB), this.addIfPresent(qB, "interaction_type", cB), this.addIfPresent(qB, "longest_script_subpart", null === NB || void 0 === NB ? void 0 : NB.subpart), this.addIfPresent(qB, "longest_script_invoker_type", null === NB || void 0 === NB ? void 0 : NB.entry.invokerType), (null === (IB = this.webVitalConfig) || void 0 === IB ? void 0 : IB.trackAttributionSources) && (this.addIfPresent(qB, "longest_script_invoker", null === NB || void 0 === NB ? void 0 : NB.entry.invoker), this.addIfPresent(qB, "longest_script_source_url", null === NB || void 0 === NB ? void 0 : NB.entry.sourceURL), this.addIfPresent(qB, "longest_script_source_function_name", null === NB || void 0 === NB ? void 0 : NB.entry.sourceFunctionName), this.addIfPresent(qB, "longest_script_source_char_position", void 0 !== (null === NB || void 0 === NB ? void 0 : NB.entry.sourceCharPosition) ? String(NB.entry.sourceCharPosition) : void 0)), this.pushMeasurement(gB, qB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureLCP() {
          var BB;
          ! function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (IB = Object.assign({}, IB)).resourceBufferSize && (OT = IB.resourceBufferSize);
            const ZB = lZ(IB, sT),
              TB = new WeakMap;
            JT(IB) && (ZB.u = new Map), ZB.m = BB => {
                const ZB = BB.element;
                if (ZB) {
                  const JB = IB.generateTarget?.(ZB) ?? uZ(ZB);
                  TB.set(BB, JB)
                } else BB.id && TB.set(BB, `#${BB.id}`)
              },
              function(BB) {
                let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  ZB = !1;
                const TB = JT(IB);
                kT((() => {
                  let JB, oB = IT(),
                    GB = ZT("LCP");
                  const vB = lZ(IB, sT),
                    kB = (TB, vB, kB, cB, nB) => {
                      GB = ZT("LCP", -1, TB, vB, kB, cB, nB), JB = xZ(BB, GB, wT, IB.reportAllChanges), ZB = !1, "soft-navigation" === TB && (oB = IT(!0))
                    },
                    cB = BB => {
                      vB.u && BB.navigationId && oT(vB.u, BB), ZB || JB(!0), kB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime);
                      const IB = BB.getLargestInteractionContentfulPaint?.();
                      IB && nB([IB])
                    },
                    nB = BB => {
                      IB.reportAllChanges || TB || (BB = BB.slice(-1));
                      for (const IB of BB) {
                        if (!IB) continue;
                        if ("soft-navigation" === IB.entryType) {
                          cB(IB);
                          continue
                        }
                        let BB = 0,
                          ZB = [],
                          TB = IB.startTime;
                        if ("largest-contentful-paint" === IB.entryType) BB = Math.max(IB.startTime - DZ(), 0), vB.l(IB), ZB = [IB];
                        else if ("interaction-contentful-paint" === IB.entryType) {
                          const JB = IB;
                          if (!GB.navigationId) continue;
                          if ("interactionId" in JB && JB.interactionId != GB.navigationInteractionId) continue;
                          TB = JB.largestContentfulPaint?.renderTime || 0, BB = Math.max(TB - IB.startTime, 0), JB.largestContentfulPaint && (vB.l(JB.largestContentfulPaint), ZB = [JB.largestContentfulPaint])
                        }
                        TB < oB.firstHiddenTime && (GB.value = BB, GB.entries = ZB, JB())
                      }
                    },
                    hB = ["largest-contentful-paint"];
                  TB && hB.push("interaction-contentful-paint", "soft-navigation");
                  const zB = TT(hB, nB);
                  if (zB) {
                    JB = xZ(BB, GB, wT, IB.reportAllChanges);
                    const oB = ["keydown", "click", "visibilitychange"],
                      vB = BB => {
                        if (BB.isTrusted && !ZB) {
                          const BB = GB.id;
                          dT((() => {
                            if (!ZB) {
                              if (!TB) {
                                zB.disconnect();
                                for (const BB of oB) removeEventListener(BB, vB, {
                                  capture: !0
                                })
                              }
                              BB === GB.id && (ZB = !0, JB(!0))
                            }
                          }))
                        }
                      };
                    for (const BB of oB) addEventListener(BB, vB, {
                      capture: !0
                    });
                    bZ((TB => {
                      kB("back-forward-cache", GB.navigationId, GB.navigationInteractionId, GB.navigationURL, tZ()), JB = xZ(BB, GB, wT, IB.reportAllChanges), EZ((() => {
                        GB.value = performance.now() - TB.timeStamp, ZB = !0, JB(!0)
                      }))
                    }))
                  }
                }))
              }((IB => {
                BB((BB => {
                  let IB = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: BB.value
                  };
                  if (BB.entries.length) {
                    const JB = BB.entries.at(-1),
                      oB = BB => BB.name === JB.url && (BB.requestStart || BB.startTime) <= JB.startTime,
                      GB = JB.url && (YT.findLast(oB) || performance.getEntriesByType("resource").findLast(oB));
                    let vB;
                    IB.target = TB.get(JB), IB.lcpEntry = JB, JB.url && (IB.url = JB.url), GB && (IB.lcpResourceEntry = GB);
                    let kB = 0,
                      cB = 0;
                    if ("soft-navigation" !== BB.navigationType ? (vB = XZ(), kB = vB?.activationStart ?? 0, cB = vB?.responseStart ?? 0) : (kB = BB.navigationStartTime || 0, vB = ZB.u?.get(BB.navigationId)), vB) {
                      const ZB = Math.max(0, cB - kB),
                        TB = Math.max(ZB, GB ? (GB.requestStart || GB.startTime) - kB : 0),
                        JB = Math.min(BB.value, Math.max(TB, GB ? GB.responseEnd - kB : 0));
                      IB = {
                        ...IB,
                        timeToFirstByte: ZB,
                        resourceLoadDelay: TB - ZB,
                        resourceLoadDuration: JB - TB,
                        elementRenderDelay: BB.value - JB,
                        navigationEntry: vB
                      }
                    }
                  }
                  return Object.assign(BB, {
                    attribution: IB
                  })
                })(IB))
              }), IB)
          }((BB => {
            var IB;
            const {
              elementRenderDelay: ZB,
              resourceLoadDelay: TB,
              resourceLoadDuration: JB,
              timeToFirstByte: oB,
              target: GB,
              url: vB,
              lcpResourceEntry: kB
            } = BB.attribution, cB = this.buildInitialValues(BB);
            this.addIfPresent(cB, "element_render_delay", ZB), this.addIfPresent(cB, "resource_load_delay", TB), this.addIfPresent(cB, "resource_load_duration", JB), this.addIfPresent(cB, HT, oB);
            const nB = this.buildInitialContext(BB);
            this.addIfPresent(nB, "element", GB), (null === (IB = this.webVitalConfig) || void 0 === IB ? void 0 : IB.trackAttributionSources) && (this.addIfPresent(nB, "resource_url", vB), this.addIfPresent(nB, "resource_delivery_type", null === kB || void 0 === kB ? void 0 : kB.deliveryType), this.addIfPresent(nB, "resource_initiator_type", null === kB || void 0 === kB ? void 0 : kB.initiatorType)), this.pushMeasurement(cB, nB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureTTFB() {
          var BB;
          ! function(BB) {
            ! function(BB) {
              let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const ZB = JT(IB);
              let TB = ZT("TTFB"),
                JB = xZ(BB, TB, iT, IB.reportAllChanges);
              pT((() => {
                const oB = XZ();
                if (oB) {
                  const GB = oB.responseStart;
                  TB.value = Math.max(GB - DZ(), 0), TB.entries = [oB], JB(!0), bZ((() => {
                    TB = ZT("TTFB", 0, "back-forward-cache", TB.navigationId, TB.navigationInteractionId, TB.navigationURL, tZ()), JB = xZ(BB, TB, iT, IB.reportAllChanges), JB(!0)
                  })), ZB && TT(["soft-navigation"], (ZB => {
                    ZB.forEach((ZB => {
                      ZB.navigationId && (TB = ZT("TTFB", 0, "soft-navigation", ZB.navigationId, ZB.interactionId, ZB.name, ZB.startTime), TB.entries = [ZB], JB = xZ(BB, TB, iT, IB.reportAllChanges), JB(!0))
                    }))
                  }), IB)
                }
              }))
            }((IB => {
              BB((BB => {
                const IB = BB.entries[0];
                let ZB = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: IB
                };
                if (BB.entries.length && IB instanceof PerformanceNavigationTiming) {
                  const TB = IB.activationStart || 0,
                    JB = Math.max((IB.workerStart || IB.fetchStart || 0) - TB, 0),
                    oB = Math.max(IB.domainLookupStart - TB, 0),
                    GB = Math.max(IB.connectStart - TB, 0),
                    vB = Math.max(IB.connectEnd - TB, 0);
                  ZB = {
                    waitingDuration: JB,
                    cacheDuration: oB - JB,
                    dnsDuration: GB - oB,
                    connectionDuration: vB - GB,
                    requestDuration: BB.value - vB,
                    navigationEntry: IB
                  }
                }
                return Object.assign(BB, {
                  attribution: ZB
                })
              })(IB))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((BB => {
            const {
              dnsDuration: IB,
              connectionDuration: ZB,
              requestDuration: TB,
              waitingDuration: JB,
              cacheDuration: oB
            } = BB.attribution, GB = this.buildInitialValues(BB);
            this.addIfPresent(GB, "dns_duration", IB), this.addIfPresent(GB, "connection_duration", ZB), this.addIfPresent(GB, "request_duration", TB), this.addIfPresent(GB, "waiting_duration", JB), this.addIfPresent(GB, "cache_duration", oB);
            const vB = this.buildInitialContext(BB);
            this.pushMeasurement(GB, vB)
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
          var IB;
          const ZB = null !== (IB = BI("com.grafana.faro.lastNavigationId", KB)) && void 0 !== IB ? IB : RZ;
          return {
            id: BB.id,
            rating: BB.rating,
            navigation_type: BB.navigationType,
            navigation_entry_id: ZB
          }
        }
        pushMeasurement(BB, IB) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: BB
          }, {
            context: IB
          })
        }
        addIfPresent(BB, IB, ZB) {
          ZB && (BB[IB] = ZB)
        }
        addNumberIfDefined(BB, IB, ZB) {
          void 0 !== ZB && (BB[IB] = ZB)
        }
      },
      jT = class extends IZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ZZ
        }
        initialize() {
          this.logDebug("Initializing"), new MT(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const PT = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function RT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const IB of BB)
        if ("traceparent" === IB.name) {
          if (!PT.test(IB.description)) continue;
          const [, BB, ZB] = IB.description.split("-");
          if (null != BB && null != ZB) return {
            traceId: BB,
            spanId: ZB
          };
          break
        }
    }

    function rT(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: ZB,
        monoNow: TB
      } = IB;
      return Math.min(ZB, ZB - (TB - BB))
    }

    function mT(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [ZB, TB] of Object.entries(IB)) {
        const IB = BB[ZB];
        return null != IB && (aB(TB) ? TB.includes(IB) : IB === TB)
      }
      return !0
    }

    function XT(BB) {
      const {
        connectEnd: IB,
        connectStart: ZB,
        decodedBodySize: TB,
        domainLookupEnd: JB,
        domainLookupStart: oB,
        duration: GB,
        encodedBodySize: vB,
        fetchStart: kB,
        initiatorType: cB,
        name: nB,
        nextHopProtocol: hB,
        redirectEnd: zB,
        redirectStart: FB,
        renderBlockingStatus: NB,
        requestStart: gB,
        responseEnd: qB,
        responseStart: yB,
        responseStatus: UB,
        secureConnectionStart: WB,
        transferSize: dB,
        workerStart: CB
      } = BB;
      return {
        name: nB,
        httpHost: eT(nB),
        duration: uT(GB),
        tcpHandshakeTime: uT(IB - ZB),
        dnsLookupTime: uT(JB - oB),
        tlsNegotiationTime: uT(IB - WB),
        responseStatus: uT(UB),
        redirectTime: uT(zB - FB),
        requestTime: uT(yB - gB),
        responseTime: uT(qB - yB),
        fetchTime: uT(qB - kB),
        serviceWorkerTime: uT(CB > 0 ? kB - CB : 0),
        decodedBodySize: uT(TB),
        encodedBodySize: uT(vB),
        cacheHitStatus: function() {
          let BB = "fullLoad";
          0 === dB ? TB > 0 && (BB = "cache") : null != UB ? 304 === UB && (BB = "conditionalFetch") : vB > 0 && dB < vB && (BB = "conditionalFetch");
          return BB
        }(),
        renderBlockingStatus: uT(NB),
        protocol: hB,
        initiatorType: cB,
        visibilityState: document.visibilityState,
        ttfb: uT(yB - gB),
        transferSize: uT(dB)
      }
    }

    function LT(BB) {
      const {
        activationStart: IB,
        domComplete: ZB,
        domContentLoadedEventEnd: TB,
        domContentLoadedEventStart: JB,
        domInteractive: oB,
        fetchStart: GB,
        loadEventEnd: vB,
        loadEventStart: kB,
        responseStart: cB,
        type: nB
      } = BB, hB = function() {
        var BB;
        return null != (null === (BB = performance.timing) || void 0 === BB ? void 0 : BB.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return nI(nI({}, XT(BB)), {}, {
        pageLoadTime: uT(ZB - GB),
        documentParsingTime: uT(hB ? oB - hB : null),
        domProcessingTime: uT(ZB - oB),
        domContentLoadHandlerTime: uT(TB - JB),
        onLoadTime: uT(vB - kB),
        ttfb: uT(Math.max(cB - (null !== IB && void 0 !== IB ? IB : 0), 0)),
        type: nB
      })
    }

    function eT(BB) {
      try {
        return new URL(BB).host || RZ
      } catch (IB) {
        return RZ
      }
    }

    function uT(BB) {
      return null == BB ? RZ : "number" === typeof BB ? Math.round(BB > 0 ? BB : 0).toString() : BB.toString()
    }
    const fT = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function lT(BB, IB, ZB, TB, JB, oB, GB) {
      try {
        var vB = BB[oB](GB),
          kB = vB.value
      } catch (BB) {
        return void ZB(BB)
      }
      vB.done ? IB(kB) : Promise.resolve(kB).then(TB, JB)
    }

    function AT(BB) {
      return function() {
        var IB = this,
          ZB = arguments;
        return new Promise((function(TB, JB) {
          var oB = BB.apply(IB, ZB);

          function GB(BB) {
            lT(oB, TB, JB, GB, vB, "next", BB)
          }

          function vB(BB) {
            lT(oB, TB, JB, GB, vB, "throw", BB)
          }
          GB(void 0)
        }))
      }
    }
    const tT = new UZ;
    var bT = class extends IZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ZZ
      }
      initialize() {
        var BB = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let IB = !1;
        const ZB = () => {
          ! function(BB) {
            if ("complete" === document.readyState) BB();
            else {
              const IB = () => {
                "complete" === document.readyState && (BB(), document.removeEventListener("readystatechange", IB))
              };
              document.addEventListener("readystatechange", IB)
            }
          }(AT((function*() {
            if (IB) return;
            const ZB = BB.api.pushEvent,
              {
                faroNavigationId: TB
              } = yield function(BB) {
                let IB;
                const ZB = new Promise((BB => {
                  IB = BB
                }));
                return new PerformanceObserver((ZB => {
                  var TB;
                  const [JB] = ZB.getEntries();
                  if (null == JB || EB(JB.name)) return;
                  const oB = JB.toJSON();
                  let GB = RT(null === oB || void 0 === oB ? void 0 : oB.serverTiming);
                  const vB = null !== (TB = BI("com.grafana.faro.lastNavigationId", KB)) && void 0 !== TB ? TB : RZ,
                    kB = nI(nI({}, LT(oB)), {}, {
                      faroNavigationId: yI(),
                      faroPreviousNavigationId: vB
                    });
                  II("com.grafana.faro.lastNavigationId", kB.faroNavigationId, KB), BB("faro.performance.navigation", kB, void 0, {
                    spanContext: GB,
                    timestampOverwriteMs: rT(oB.startTime)
                  }), IB(kB)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), ZB
              }(ZB);
            IB || null == TB || function(BB, IB, ZB, TB) {
              const JB = TB.trackResources;
              new PerformanceObserver((TB => {
                const oB = TB.getEntries(),
                  GB = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const vB of oB) {
                  if (EB(vB.name)) continue;
                  null === ZB || void 0 === ZB || ZB.notify({
                    type: "resource"
                  });
                  const TB = vB.toJSON();
                  let oB = RT(null === TB || void 0 === TB ? void 0 : TB.serverTiming);
                  (null == JB && mT(TB, fT) || JB) && IB("faro.performance.resource", nI(nI({}, XT(TB)), {}, {
                    faroNavigationId: BB,
                    faroResourceId: yI()
                  }), void 0, {
                    spanContext: oB,
                    timestampOverwriteMs: rT(TB.startTime, GB)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(TB, ZB, tT, BB.config)
          })))
        };
        this.cancelInitialization = () => {
          IB = !0, document.removeEventListener("prerenderingchange", ZB)
        }, document.prerendering ? document.addEventListener("prerenderingchange", ZB, {
          once: !0
        }) : ZB()
      }
      destroy() {
        var BB;
        null === (BB = this.cancelInitialization) || void 0 === BB || BB.call(this), this.cancelInitialization = void 0
      }
    };
    const xT = "data-faro-user-action-name",
      ET = xT.replace(/-name$/, "-timeout"),
      DT = 1e3;

    function KT(BB) {
      return `data-${(BB.startsWith("data-")?BB.slice(5):BB).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function VT(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lI;
      if (void 0 === BB) return IB;
      let TB = NaN;
      try {
        TB = "string" === typeof BB && "" === BB.trim() ? NaN : Number(BB)
      } catch (JB) {}
      return !Number.isFinite(TB) || TB <= 0 ? (ZB(`initialActivityTimeout must be a finite number greater than zero; using ${IB} ms`), IB) : TB > 1e3 ? (ZB(`initialActivityTimeout cannot exceed ${DT} ms; clamping to the maximum`), DT) : TB
    }

    function ST(BB, IB, ZB) {
      return void 0 !== BB && window.clearTimeout(BB), window.setTimeout((() => {
        IB()
      }), ZB)
    }

    function BJ(BB) {
      return BB.type === yZ
    }
    let IJ, ZJ;

    function TJ() {
      return IJ || (IJ = new UZ), ZJ || (ZJ = new MutationObserver(((BB, IB) => {
        IJ.notify({
          type: "dom-mutation"
        })
      })), ZJ.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), IJ
    }
    const JJ = "fetch",
      oJ = "xhr";
    let GJ, vJ, kJ, cJ, nJ = !1;

    function hJ() {
      if (GJ) return GJ;

      function BB(BB) {
        GJ.notify({
          type: qZ,
          request: BB
        })
      }

      function IB(BB) {
        GJ.notify({
          type: yZ,
          request: BB
        })
      }
      return GJ = new UZ, nJ || (! function(BB) {
        let {
          onRequestEnd: IB,
          onRequestStart: ZB
        } = BB;
        kJ || (kJ = window.fetch);
        window.fetch = function() {
          var BB, TB;
          const JB = null !== (BB = DB(arguments[0])) && void 0 !== BB ? BB : "",
            oB = EB(JB),
            GB = (null !== (TB = arguments[1]) && void 0 !== TB ? TB : {}).method,
            vB = yI();
          return oB || ZB({
            url: JB,
            method: GB,
            requestId: vB,
            apiType: JJ
          }), kJ.apply(this, arguments).then((BB => (oB || IB({
            url: JB,
            method: GB,
            requestId: vB,
            apiType: JJ
          }), BB))).catch((BB => {
            throw oB || IB({
              url: JB,
              method: GB,
              requestId: vB,
              apiType: JJ
            }), BB
          }))
        }
      }({
        onRequestStart: BB,
        onRequestEnd: IB
      }), function(BB) {
        let {
          onRequestStart: IB,
          onRequestEnd: ZB
        } = BB;
        vJ || (vJ = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const BB = arguments[1],
            TB = EB(BB),
            JB = arguments[0],
            oB = yI();
          this.addEventListener("loadstart", (function() {
            TB || IB({
              url: BB,
              method: JB,
              requestId: oB,
              apiType: oJ
            })
          })), this.addEventListener("load", (function() {
            TB || ZB({
              url: BB,
              method: JB,
              requestId: oB,
              apiType: oJ
            })
          })), this.addEventListener("error", (function() {
            TB || ZB({
              url: BB,
              method: JB,
              requestId: oB,
              apiType: oJ
            })
          })), this.addEventListener("abort", (function() {
            TB || ZB({
              url: BB,
              method: JB,
              requestId: oB,
              apiType: oJ
            })
          })), vJ.apply(this, arguments)
        }
      }({
        onRequestStart: BB,
        onRequestEnd: IB
      }), nJ = !0), GJ
    }
    let zJ, FJ = !1;
    let NJ = function(BB) {
      return BB[BB.Started = 0] = "Started", BB[BB.Halted = 1] = "Halted", BB[BB.Cancelled = 2] = "Cancelled", BB[BB.Ended = 3] = "Ended", BB
    }({});
    var gJ = class {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = BB, this.logDebug = IB, this.initialActivityTimeout = ZB, this.http = hJ(), this.dom = TJ(), this.perf = (cJ || (cJ = new UZ), FJ || (zJ = tT.subscribe((BB => {
          "resource" === BB.type && cJ.notify({
            type: "resource-entry"
          })
        })), FJ = !0), cJ), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new UZ).merge(this.http, this.dom, this.perf).takeWhile((() => [NJ.Started, NJ.Halted].includes(this.userAction.getState()))).filter((BB => !!(this.userAction.getState() !== NJ.Halted || BJ(BB) && this.runningRequests.has(BB.request.requestId)))).subscribe((BB => {
          (function(BB) {
            return BB.type === qZ
          })(BB) && this.runningRequests.set(BB.request.requestId, BB.request), BJ(BB) && this.runningRequests.delete(BB.request.requestId), BJ(BB) ? this.userAction.getState() === NJ.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((BB => [NJ.Ended, NJ.Cancelled].includes(BB))).first().subscribe((() => this.cleanup())), this.startupTid = ST(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === NJ.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === NJ.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = ST(this.haltTid, (() => {
          this.userAction.getState() === NJ.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var BB, IB;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (BB = this.allMonitorsSub) || void 0 === BB || BB.unsubscribe(), null === (IB = this.stateSub) || void 0 === IB || IB.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(BB) {
        void 0 !== BB && window.clearTimeout(BB)
      }
    };

    function qJ(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lI;
      var ZB;
      const {
        api: TB,
        config: JB,
        internalLogger: oB
      } = BB, GB = VT(null === (ZB = JB.userActionsInstrumentation) || void 0 === ZB ? void 0 : ZB.initialActivityTimeout, 100, IB);
      return {
        processUserEvent: function(BB) {
          var IB, ZB;
          const oB = null !== (IB = null === (ZB = JB.userActionsInstrumentation) || void 0 === ZB ? void 0 : ZB.dataAttributeName) && void 0 !== IB ? IB : xT,
            GB = BB.target;
          if (!(GB instanceof Element)) return;
          const vB = function(BB, IB) {
              let ZB = BB;
              for (; ZB;) {
                if (ZB.hasAttribute(IB)) return ZB;
                ZB = ZB.parentElement
              }
              return null
            }(GB, KT(oB)),
            kB = function(BB, IB) {
              if (!BB) return;
              const ZB = function(BB) {
                  return KT(BB).slice(5).replace(/-(.)/g, ((BB, IB) => IB.toUpperCase()))
                }(IB),
                TB = BB.dataset;
              for (const JB in TB)
                if (JB === ZB) return TB[JB]
            }(vB, oB);
          if (!vB || !kB) return;
          const cB = function(BB, IB) {
            const ZB = BB.getAttribute(function(BB) {
              const IB = KT(BB);
              return IB.endsWith("-name") ? `${IB.slice(0,-5)}-timeout` : `${IB}-timeout`
            }(IB));
            return null === ZB ? void 0 : Number(ZB)
          }(vB, oB);
          TB.startUserAction(kB, {}, {
            triggerName: BB.type,
            initialActivityTimeout: cB
          })
        },
        processUserActionStarted: function(BB, ZB) {
          const TB = BB,
            JB = VT(ZB, GB, IB);
          new gJ(TB, oB.debug, JB).attach()
        }
      }
    }
    const yJ = "user_action_start",
      UJ = {
        Normal: "normal",
        Critical: "critical"
      };
    var WJ = class {
        constructor() {
          this.buffer = []
        }
        addItem(BB) {
          this.buffer.push(BB)
        }
        flushBuffer(BB) {
          if (pB(BB))
            for (const IB of this.buffer) BB(IB);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      dJ = class extends UZ {
        constructor(BB) {
          let {
            name: IB,
            parentId: ZB,
            trigger: TB,
            transports: JB,
            attributes: oB,
            trackUserActionsExcludeItem: GB,
            importance: vB = UJ.Normal,
            pushEvent: kB
          } = BB;
          super(), this.name = IB, this.attributes = oB, this.id = yI(), this.trigger = TB, this.parentId = null !== ZB && void 0 !== ZB ? ZB : this.id, this.trackUserActionsExcludeItem = GB, this.importance = vB, this._pushEvent = kB, this._itemBuffer = new WJ, this._transports = JB, this._state = 0, this._start()
        }
        addItem(BB) {
          return 0 === this._state && (this._itemBuffer.addItem(BB), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = zI(), this._startTimeMono = FI())
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
          const BB = zI(),
            IB = FI() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((BB => {
            if (function(BB, IB) {
                return (null === IB || void 0 === IB ? void 0 : IB(BB)) || "measurement" === BB.type && "web-vitals" === BB.payload.type
              }(BB, this.trackUserActionsExcludeItem)) return void this._transports.execute(BB);
            const IB = VI(VI({}, BB), {}, {
              payload: VI(VI({}, BB.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(IB)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", VI({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: BB.toString(),
            userActionDuration: IB.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, rI(this.attributes)), void 0, {
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
    const CJ = new UZ;

    function QJ(BB, IB) {
      return !!BB && (0 === (null === BB || void 0 === BB ? void 0 : BB.getState()) && (BB.addItem(IB), !0))
    }
    var sJ = class extends IZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ZZ
        }
        initialize() {
          const {
            processUserEvent: BB,
            processUserActionStarted: IB
          } = qJ(gB, (BB => this.logWarn(BB)));
          this._processUserEvent = BB, this._processKeydown = IB => {
            [" ", "Enter"].includes(IB.key) && BB(IB)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = CJ.subscribe((BB => {
            let {
              type: ZB,
              userAction: TB,
              initialActivityTimeout: JB
            } = BB;
            "user_action_start" === ZB && IB(TB, JB)
          }))
        }
        destroy() {
          var BB;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (BB = this._userActionSub) || void 0 === BB || BB.unsubscribe()
        }
      },
      wJ = class extends IZ {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ZZ, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(BB) {
          const IB = {
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
          this.api.pushEvent("securitypolicyviolation", rI(IB))
        }
      };
    var OJ = class extends UZ {
      constructor(BB, IB) {
        var ZB, TB, JB, oB;
        super(), this._tracking = !1, this.eventsObservable = BB, this._options = {
          inactivityMs: null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.inactivityMs) && void 0 !== ZB ? ZB : 100,
          drainTimeoutMs: null !== (TB = null === IB || void 0 === IB ? void 0 : IB.drainTimeoutMs) && void 0 !== TB ? TB : 1e4,
          isOperationStart: null !== (JB = null === IB || void 0 === IB ? void 0 : IB.isOperationStart) && void 0 !== JB ? JB : () => {},
          isOperationEnd: null !== (oB = null === IB || void 0 === IB ? void 0 : IB.isOperationEnd) && void 0 !== oB ? oB : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((BB => {
          var IB;
          this._lastEventTime = FI(), null === (IB = this._currentEvents) || void 0 === IB || IB.push(BB);
          const ZB = this._options.isOperationStart(BB);
          var TB;
          ZB && (null === (TB = this._activeOperations) || void 0 === TB || TB.set(ZB, !0));
          const JB = this._options.isOperationEnd(BB);
          var oB;
          JB && (null === (oB = this._activeOperations) || void 0 === oB || oB.delete(JB));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = FI(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let BB;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), BB = this.hasActiveOperations() ? FI() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: BB
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = YJ(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = YJ(this._drainTid, (() => {
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

    function YJ(BB, IB, ZB) {
      return BB && clearTimeout(BB), BB = setTimeout((() => {
        IB()
      }), ZB)
    }
    let iJ;
    const pJ = new Set,
      aJ = new Map;
    let HJ, MJ, jJ, PJ, RJ, rJ, mJ, XJ, LJ = !1;
    var eJ = class extends IZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ZZ
      }
      initialize() {
        const BB = hJ(),
          IB = TJ(),
          ZB = function() {
            function BB(BB, IB) {
              const ZB = null !== IB && void 0 !== IB ? IB : location.href;
              ZB !== MJ && (HJ.notify({
                type: "url-change",
                from: MJ,
                to: ZB,
                trigger: BB
              }), MJ = ZB)
            }
            if (HJ || (HJ = new UZ, MJ = location.href), !LJ)
              if ("navigation" in window && "NavigateEvent" in window) {
                mJ = IB => {
                  try {
                    const ZB = null === IB || void 0 === IB ? void 0 : IB.destination;
                    (null === ZB || void 0 === ZB ? void 0 : ZB.sameDocument) && "string" === typeof ZB.url && BB("navigate", ZB.url)
                  } catch (ZB) {}
                }, window.navigation.addEventListener("navigate", mJ);
                const IB = window.NavigateEvent;
                IB && IB.prototype && "function" === typeof IB.prototype.intercept && (XJ || (XJ = IB.prototype.intercept), IB.prototype.intercept = function(IB) {
                  try {
                    const IB = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      ZB = null === this || void 0 === this ? void 0 : this.destination;
                    IB && ZB && !1 === ZB.sameDocument && "string" === typeof ZB.url && BB("navigate-intercept", ZB.url)
                  } catch (ZB) {}
                  return XJ.call(this, IB)
                }), LJ = !0
              } else jJ || (jJ = window.history.pushState), window.history.pushState = function() {
                for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
                const JB = jJ.apply(window.history, ZB);
                return BB("pushState"), JB
              }, PJ || (PJ = window.history.replaceState), window.history.replaceState = function() {
                for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
                const JB = PJ.apply(window.history, ZB);
                return BB("replaceState"), JB
              }, RJ = () => BB("popstate"), rJ = () => BB("hashchange"), window.addEventListener("popstate", RJ), window.addEventListener("hashchange", rJ), LJ = !0;
            return HJ
          }(),
          TB = (JB = ["pointerdown", "keydown"], iJ || (iJ = new UZ), JB.forEach((BB => {
            if (!pJ.has(BB)) {
              const IB = () => {
                iJ.notify({
                  type: "interaction",
                  name: BB
                })
              };
              window.addEventListener(BB, IB), pJ.add(BB), aJ.set(BB, IB)
            }
          })), iJ);
        var JB;
        const oB = new OJ((new UZ).merge(BB, IB, ZB), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: BB => function(BB) {
            return BB.type === qZ
          }(BB) ? BB.request.requestId : void 0,
          isOperationEnd: BB => function(BB) {
            return BB.type === yZ
          }(BB) ? BB.request.requestId : void 0
        });
        oB.filter((BB => "tracking-ended" === BB.message)).subscribe((BB => {
          var IB, ZB;
          if ((null === (IB = BB.events) || void 0 === IB ? void 0 : IB.some((BB => "url-change" === BB.type))) && (null === (ZB = BB.events) || void 0 === ZB ? void 0 : ZB.some((BB => "dom-mutation" === BB.type)))) {
            var TB;
            const IB = null === (TB = BB.events) || void 0 === TB ? void 0 : TB.find((BB => "url-change" === BB.type));
            gB.api.pushEvent("faro.navigation", {
              fromUrl: null === IB || void 0 === IB ? void 0 : IB.from,
              toUrl: null === IB || void 0 === IB ? void 0 : IB.to,
              sameDocument: String(!0),
              duration: BB.duration
            })
          }
        })), TB.subscribe((() => {
          oB.startTracking()
        }))
      }
    };

    function uJ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const IB = [new sJ, new PZ, new jT, new TZ, new rZ, new eJ];
      return !1 !== BB.enablePerformanceInstrumentation && IB.unshift(new bT), !1 !== BB.enableContentSecurityPolicyInstrumentation && IB.push(new wJ), !1 !== BB.captureConsole && IB.push(new MZ), IB
    }
    var fJ = ZB(6850);
    let lJ, AJ;

    function tJ() {
      const BB = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return lJ === BB && AJ || (AJ = new fJ.UAParser(BB).getResult(), lJ = BB), AJ
    }
    const bJ = () => {
        const {
          browser: BB,
          os: IB,
          ua: ZB
        } = tJ(), {
          name: TB,
          version: JB
        } = BB, {
          name: oB,
          version: GB
        } = IB, vB = navigator.language, kB = ZB.includes("Mobi"), cB = function() {
          if (!TB || !JB) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== TB && void 0 !== TB ? TB : RZ,
            version: null !== JB && void 0 !== JB ? JB : RZ,
            os: `${null!==oB&&void 0!==oB?oB:RZ} ${null!==GB&&void 0!==GB?GB:RZ}`,
            userAgent: null !== ZB && void 0 !== ZB ? ZB : RZ,
            language: null !== vB && void 0 !== vB ? vB : RZ,
            mobile: kB,
            brands: null !== cB && void 0 !== cB ? cB : RZ,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      xJ = () => {
        const {
          name: BB,
          version: IB
        } = tJ().os;
        if (!BB && !IB) return {};
        const ZB = {};
        return BB && (ZB.name = BB), IB && (ZB.version = IB), {
          os: ZB
        }
      };

    function EJ(BB) {
      var IB, ZB, TB;
      return {
        id: null !== (IB = null === (ZB = gB.config) || void 0 === ZB || null === (ZB = ZB.sessionTracking) || void 0 === ZB || null === (TB = ZB.generateSessionId) || void 0 === TB ? void 0 : TB.call(ZB)) && void 0 !== IB ? IB : yI(),
        attributes: BB
      }
    }
    const DJ = () => ({
      sdk: {
        name: "faro-web",
        version: ZZ
      }
    });
    var KJ = class extends BZ {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let VJ = function(BB) {
      return BB.EXCEPTION = "exception", BB.LOG = "log", BB.MEASUREMENT = "measurement", BB.TRACE = "trace", BB.EVENT = "event", BB
    }({});
    const SJ = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Bo(BB, IB) {
      var ZB, TB;
      if (void 0 === IB) return BB;
      if (void 0 === BB) return {
        resourceSpans: IB
      };
      const JB = null === (ZB = BB.resourceSpans) || void 0 === ZB ? void 0 : ZB[0];
      if (void 0 === JB) return BB;
      const oB = (null === JB || void 0 === JB ? void 0 : JB.scopeSpans) || [],
        GB = (null === IB || void 0 === IB || null === (TB = IB[0]) || void 0 === TB ? void 0 : TB.scopeSpans) || [];
      return VI(VI({}, BB), {}, {
        resourceSpans: [VI(VI({}, JB), {}, {
          scopeSpans: [...oB, ...GB]
        })]
      })
    }

    function Io(BB) {
      let IB = {
        meta: {}
      };
      return void 0 !== BB[0] && (IB.meta = BB[0].meta), BB.forEach((BB => {
        switch (BB.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const ZB = SJ[BB.type],
              TB = IB[ZB];
            IB = VI(VI({}, IB), {}, {
              [ZB]: void 0 === TB ? [BB.payload] : [...TB, BB.payload]
            });
            break
          }
          case "trace":
            IB = VI(VI({}, IB), {}, {
              traces: Bo(IB.traces, BB.payload.resourceSpans)
            })
        }
      })), IB
    }
    var Zo = class extends KJ {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ZZ
      }
      send(BB) {
        var IB;
        return this.unpatchedConsole[null !== (IB = this.options.level) && void 0 !== IB ? IB : WZ.DEBUG]("New event", Io([BB]))
      }
    };
    const To = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Jo = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      oo = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Go = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      vo = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      ko = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function co(BB) {
      let {
        weekday: IB,
        day: ZB,
        month: TB,
        year: JB,
        hour: oB,
        minute: GB,
        second: vB
      } = BB;
      if (JB < 1900 || ZB < 1 || oB > 23 || GB > 59 || vB > 60) return;
      const kB = 60 === vB,
        cB = new Date(0);
      return cB.setUTCFullYear(JB, TB, ZB), cB.setUTCHours(oB, GB, kB ? 59 : vB, 0), cB.getUTCDay() === IB && cB.getUTCDate() === ZB && cB.getUTCMonth() === TB && cB.getUTCFullYear() === JB && cB.getUTCHours() === oB && cB.getUTCMinutes() === GB && cB.getUTCSeconds() === (kB ? 59 : vB) ? cB.getTime() + (kB ? 1e3 : 0) : void 0
    }
    var no = class {
      constructor(BB) {
        this.options = BB, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var BB = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const IB = this.sequence++;
        let ZB = !1;
        return {
          deliver: function() {
            var ZB = AT((function*(ZB) {
              const TB = BB.options.getNow();
              let JB, oB = 0;
              for (;;) {
                var GB, vB, kB;
                const cB = BB.options.retry.maxAttempts - oB,
                  nB = yield BB.runAttempt((() => ZB(cB, BB.unloading)), oB > 0);
                if (oB += nB.attemptsMade, "success" === nB.kind) return {
                  kind: "success",
                  attempts: oB,
                  elapsedTimeMs: BB.options.getNow() - TB
                };
                if (JB = nB.failure, "terminal" === nB.kind || BB.unloading) return {
                  kind: "terminal",
                  attempts: oB,
                  elapsedTimeMs: BB.options.getNow() - TB,
                  failure: JB
                };
                if (oB >= BB.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: oB,
                  elapsedTimeMs: BB.options.getNow() - TB,
                  failure: JB,
                  reason: "retries-exhausted"
                };
                if (null != nB.retryAfterMs && nB.retryAfterMs > BB.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: oB,
                  elapsedTimeMs: BB.options.getNow() - TB,
                  failure: JB,
                  reason: "retry-after-too-long"
                };
                const hB = Math.min(null !== (GB = nB.retryAfterMs) && void 0 !== GB ? GB : BB.options.retry.initialBackoffMs * Math.pow(BB.options.retry.backoffMultiplier, oB - 1), BB.options.retry.maxBackoffMs);
                if (null === (vB = (kB = BB.options).onRetry) || void 0 === vB || vB.call(kB, hB, oB + 1), yield BB.waitForTurn(IB, hB)) {
                  const IB = BB.options.retry.maxAttempts - oB,
                    JB = yield BB.runAttempt((() => ZB(IB, !0)));
                  return oB += JB.attemptsMade, {
                    kind: "success" === JB.kind ? "success" : "terminal",
                    attempts: oB,
                    elapsedTimeMs: BB.options.getNow() - TB,
                    failure: "success" === JB.kind ? void 0 : JB.failure
                  }
                }
              }
            }));
            return function(BB) {
              return ZB.apply(this, arguments)
            }
          }(),
          release: () => {
            ZB || (ZB = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const BB = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const IB of BB) IB.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((ZB, TB) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const IB = () => {
                this.inProgress--, this.runNextAttempt()
              };
              BB().then((BB => {
                IB(), ZB(BB)
              }), (BB => {
                IB(), TB(BB)
              }))
            },
            isRedelivery: IB
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const BB = this.options.getNow(),
            IB = this.attemptQueue.findIndex((IB => {
              let {
                isRedelivery: ZB
              } = IB;
              return this.unloading || !ZB || BB >= this.nextSendAt
            }));
          if (IB < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - BB)));
          const [ZB] = this.attemptQueue.splice(IB, 1);
          ZB.isRedelivery && !this.unloading && (this.nextSendAt = BB + 1), ZB.run()
        }
      }
      waitForTurn(BB, IB) {
        const ZB = Math.min(IB * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((IB => {
          this.waiting.push({
            sequence: BB,
            readyAt: this.options.getNow() + ZB,
            resolve: IB
          }), this.waiting.sort(((BB, IB) => BB.readyAt === IB.readyAt ? BB.sequence - IB.sequence : BB.readyAt - IB.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const BB = this.waiting[0],
          IB = BB.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const IB = this.waiting.indexOf(BB);
          IB >= 0 && this.waiting.splice(IB, 1), BB.resolve(!1), this.scheduleNext()
        }), Math.max(0, IB - this.options.getNow()))
      }
    };

    function ho(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if ({}.hasOwnProperty.call(BB, TB)) {
            if (IB.includes(TB)) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.includes(ZB) || {}.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function zo(BB) {
      const {
        size: IB,
        concurrency: ZB
      } = BB, TB = [];
      let JB = 0;
      const oB = () => {
        if (JB < ZB && TB.length) {
          const {
            producer: BB,
            resolve: IB,
            reject: ZB
          } = TB.shift();
          JB++, BB().then((BB => {
            JB--, oB(), IB(BB)
          }), (BB => {
            JB--, oB(), ZB(BB)
          }))
        }
      };
      return {
        add: BB => {
          if (TB.length + JB >= IB) throw new Error("Task buffer full");
          return new Promise(((IB, ZB) => {
            TB.push({
              producer: BB,
              resolve: IB,
              reject: ZB
            }), oB()
          }))
        }
      }
    }
    const Fo = ["headers"],
      No = ["keepalive", "signal"],
      go = new Set([408, 425, 429, 500, 502, 503, 504]),
      qo = new Set([429, 503]);
    let yo = 0,
      Uo = 0;
    var Wo = class extends Error {};
    var Co = class extends KJ {
      constructor(BB) {
        var IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB;
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ZZ, this.pendingCustomSends = 0, this.getNow = null !== (IB = BB.getNow) && void 0 !== IB ? IB : Date.now, this.requestTimeoutMs = null !== (ZB = BB.requestTimeoutMs) && void 0 !== ZB ? ZB : 1e4, this.compressionEnabled = null !== (TB = BB.requestCompression) && void 0 !== TB && TB && "undefined" !== typeof CompressionStream, BB.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new no({
          bufferSize: null !== (JB = BB.bufferSize) && void 0 !== JB ? JB : 30,
          concurrency: null !== (oB = BB.concurrency) && void 0 !== oB ? oB : 5,
          retry: {
            maxAttempts: null !== (GB = null === (vB = BB.retry) || void 0 === vB ? void 0 : vB.maxAttempts) && void 0 !== GB ? GB : 3,
            initialBackoffMs: null !== (kB = null !== (cB = null === (nB = BB.retry) || void 0 === nB ? void 0 : nB.initialBackoffMs) && void 0 !== cB ? cB : BB.defaultRateLimitBackoffMs) && void 0 !== kB ? kB : 1e3,
            maxBackoffMs: null !== (hB = null === (zB = BB.retry) || void 0 === zB ? void 0 : zB.maxBackoffMs) && void 0 !== hB ? hB : 3e4,
            backoffMultiplier: null !== (FB = null === (NB = BB.retry) || void 0 === NB ? void 0 : NB.backoffMultiplier) && void 0 !== FB ? FB : 2
          },
          getNow: this.getNow,
          getRandom: null !== (gB = BB.getRandom) && void 0 !== gB ? gB : Math.random,
          onRetry: (BB, IB) => {
            this.logDebug(`Retrying failed request after ${BB}ms. Attempt ${IB}.`)
          }
        }), this.customPromiseBuffer = zo({
          size: null !== (qB = BB.bufferSize) && void 0 !== qB ? qB : 30,
          concurrency: null !== (yB = BB.concurrency) && void 0 !== yB ? yB : 5
        }), this.defaultPromiseBuffer = {
          add: BB => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(BB);
            const IB = this.deliveryQueue.reserve();
            if (!IB) throw new Error("Task buffer full");
            return this.runBufferedTask(IB, BB)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (BB => {
          BB.persisted && this.deliveryQueue.resume()
        })))
      }
      send(BB) {
        var IB = this;
        return AT((function*() {
          const ZB = IB.promiseBuffer;
          if (ZB !== IB.defaultPromiseBuffer || ZB.add !== IB.defaultBufferAdd) {
            IB.pendingCustomSends++;
            try {
              yield ZB.add((() => IB.deliver(BB)))
            } catch (TB) {
              IB.logError("Permanent delivery failure", {
                error: TB,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              IB.pendingCustomSends--
            }
          } else yield IB.deliver(BB)
        }))()
      }
      runBufferedTask(BB, IB) {
        return AT((function*() {
          let ZB;
          try {
            return yield BB.deliver(AT((function*() {
              return ZB = yield IB(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), ZB
          } finally {
            BB.release()
          }
        }))()
      }
      deliver(BB) {
        var IB = this;
        return AT((function*() {
          const ZB = IB.deliveryQueue.reserve();
          if (ZB) try {
            const TB = yield IB.prepareRequest(BB), JB = yield ZB.deliver(((BB, ZB) => IB.performAttempt(TB, BB, ZB)));
            "terminal" === JB.kind && IB.logError("retries-exhausted" === JB.reason ? "Delivery retries exhausted" : "Permanent delivery failure", nI(nI({}, JB.failure), {}, {
              reason: JB.reason,
              attempts: JB.attempts,
              elapsedTimeMs: JB.elapsedTimeMs
            }))
          } catch (TB) {
            IB.logError("Permanent delivery failure", {
              error: TB,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            ZB.release()
          } else IB.logError("Permanent delivery failure", {
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
        var IB = this;
        return AT((function*() {
          var ZB, TB;
          const JB = Io(BB),
            oB = null === (ZB = JB.meta.session) || void 0 === ZB ? void 0 : ZB.id,
            GB = JSON.stringify(JB),
            vB = null !== (TB = IB.options.requestOptions) && void 0 !== TB ? TB : {},
            {
              headers: kB = {}
            } = vB,
            cB = ho(vB, Fo),
            {
              keepalive: nB,
              signal: hB
            } = cB,
            zB = ho(cB, No),
            FB = {};
          for (const [BB, IB] of Object.entries(kB)) FB[BB] = "function" === typeof IB ? yield IB(): IB;
          let NB = GB,
            gB = function(BB) {
              return "undefined" === typeof TextEncoder ? BB.length : (new TextEncoder).encode(BB).byteLength
            }(GB);
          const qB = {};
          return IB.compressionEnabled && (NB = yield IB.compress(GB), gB = NB.size, qB["Content-Encoding"] = "gzip"), {
            bodySize: gB,
            sessionId: oB,
            requestInit: nI({
              method: "POST",
              headers: nI(nI(nI(nI(nI({
                "Content-Type": "application/json"
              }, qB), FB), IB.options.apiKey ? {
                "x-api-key": IB.options.apiKey
              } : {}), oB ? {
                "x-faro-session-id": oB
              } : {}), {}, {
                "Idempotency-Key": yI(20)
              }),
              body: NB
            }, zB)
          }
        }))()
      }
      performAttempt(BB, IB, ZB) {
        var TB = this;
        return AT((function*() {
          var JB;
          const oB = null === (JB = TB.options.requestOptions) || void 0 === JB ? void 0 : JB.signal;
          if (null === oB || void 0 === oB ? void 0 : oB.aborted) return {
            kind: "terminal",
            failure: {
              error: oB.reason
            },
            attemptsMade: 0
          };
          let GB = 0;
          try {
            var vB;
            const JB = yield TB.fetchWithKeepaliveFallback(BB.requestInit, BB.bodySize, !!ZB || (null === (vB = TB.options.requestOptions) || void 0 === vB ? void 0 : vB.keepalive), IB, (() => GB++));
            if (TB.handleResponse(JB, BB.sessionId), JB.status >= 200 && JB.status < 300) return {
              kind: "success",
              attemptsMade: GB
            };
            const oB = {
              status: JB.status
            };
            return !go.has(JB.status) || ZB ? {
              kind: "terminal",
              failure: oB,
              attemptsMade: GB
            } : {
              kind: "retry",
              failure: oB,
              attemptsMade: GB,
              retryAfterMs: qo.has(JB.status) ? TB.getRetryAfterDelayMs(JB) : void 0
            }
          } catch (kB) {
            const BB = {
              error: kB
            };
            return (null === oB || void 0 === oB ? void 0 : oB.aborted) || !TB.isFetchNetworkError(kB) || ZB ? {
              kind: "terminal",
              failure: BB,
              attemptsMade: GB
            } : {
              kind: "retry",
              failure: BB,
              attemptsMade: GB
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(BB, IB, ZB, TB, JB) {
        var oB = this;
        return AT((function*() {
          const GB = oB.getNow(),
            vB = oB.reserveKeepalive(IB, ZB);
          try {
            return yield oB.fetchWithTimeout(nI(nI({}, BB), {}, {
              keepalive: vB.keepalive
            }), oB.requestTimeoutMs, JB)
          } catch (cB) {
            var kB;
            if (vB.keepalive && TB > 1 && oB.isFetchNetworkError(cB) && !(cB instanceof Wo) && !(null === (kB = oB.options.requestOptions) || void 0 === kB || null === (kB = kB.signal) || void 0 === kB ? void 0 : kB.aborted)) {
              oB.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const IB = oB.requestTimeoutMs - (oB.getNow() - GB);
              return oB.fetchWithTimeout(nI(nI({}, BB), {}, {
                keepalive: !1
              }), IB, JB)
            }
            throw cB
          } finally {
            vB.release()
          }
        }))()
      }
      fetchWithTimeout(BB, IB, ZB) {
        var TB = this;
        return AT((function*() {
          var JB;
          const oB = null === (JB = TB.options.requestOptions) || void 0 === JB ? void 0 : JB.signal;
          if (TB.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return ZB(), fetch(TB.options.url, nI(nI({}, BB), {}, {
            signal: oB
          }));
          if (IB <= 0) throw new Wo("Request timed out");
          const GB = new AbortController,
            vB = () => GB.abort(null === oB || void 0 === oB ? void 0 : oB.reason);
          null === oB || void 0 === oB || oB.addEventListener("abort", vB, {
            once: !0
          });
          let kB = !1;
          const cB = setTimeout((() => {
            kB = !0, GB.abort()
          }), IB);
          try {
            return ZB(), yield fetch(TB.options.url, nI(nI({}, BB), {}, {
              signal: GB.signal
            }))
          } catch (nB) {
            if (kB && !(null === oB || void 0 === oB ? void 0 : oB.aborted)) throw new Wo("Request timed out");
            throw nB
          } finally {
            clearTimeout(cB), null === oB || void 0 === oB || oB.removeEventListener("abort", vB)
          }
        }))()
      }
      getRetryAfterDelayMs(BB) {
        const IB = BB.headers.get("Retry-After");
        if (!IB) return;
        if (/^\d+$/.test(IB)) {
          const BB = 1e3 * Number(IB);
          return Number.isFinite(BB) ? BB : Number.POSITIVE_INFINITY
        }
        const ZB = this.getNow(),
          TB = function(BB, IB) {
            const ZB = To.exec(BB);
            if (ZB) {
              const [, BB, IB, TB, JB, oB, GB, vB] = ZB;
              return co({
                weekday: Go.indexOf(BB),
                day: Number(IB),
                month: ko.indexOf(TB),
                year: Number(JB),
                hour: Number(oB),
                minute: Number(GB),
                second: Number(vB)
              })
            }
            const TB = Jo.exec(BB);
            if (TB) {
              const [, BB, ZB, GB, vB, kB, cB, nB] = TB, hB = new Date(IB);
              if (Number.isNaN(hB.getTime())) return;
              const zB = hB.getUTCFullYear();
              let FB = 100 * Math.floor(zB / 100) + Number(vB);
              FB < zB && (FB += 100);
              const NB = ko.indexOf(GB),
                gB = {
                  month: NB,
                  day: Number(ZB),
                  hour: Number(kB),
                  minute: Number(cB),
                  second: Number(nB),
                  millisecond: 0
                },
                qB = {
                  month: hB.getUTCMonth(),
                  day: hB.getUTCDate(),
                  hour: hB.getUTCHours(),
                  minute: hB.getUTCMinutes(),
                  second: hB.getUTCSeconds(),
                  millisecond: hB.getUTCMilliseconds()
                };
              return (FB > zB + 50 || FB === zB + 50 && (oB = qB, ((JB = gB).month - oB.month || JB.day - oB.day || JB.hour - oB.hour || JB.minute - oB.minute || JB.second - oB.second || JB.millisecond - oB.millisecond) > 0)) && (FB -= 100), co({
                weekday: vo.indexOf(BB),
                day: Number(ZB),
                month: NB,
                year: FB,
                hour: Number(kB),
                minute: Number(cB),
                second: Number(nB)
              })
            }
            var JB, oB;
            const GB = oo.exec(BB);
            if (!GB) return;
            const [, vB, kB, cB, nB, hB, zB, FB, NB] = GB;
            return co({
              weekday: Go.indexOf(vB),
              day: Number(null !== cB && void 0 !== cB ? cB : nB),
              month: ko.indexOf(kB),
              year: Number(NB),
              hour: Number(hB),
              minute: Number(zB),
              second: Number(FB)
            })
          }(IB, ZB);
        return null == TB ? void 0 : Math.max(0, TB - ZB)
      }
      reserveKeepalive(BB, IB) {
        if (!1 === IB || BB > 6e4 || yo + BB > 6e4 || Uo >= 9) return {
          keepalive: !1,
          release: lI
        };
        yo += BB, Uo++;
        let ZB = !1;
        return {
          keepalive: !0,
          release: () => {
            ZB || (ZB = !0, yo -= BB, Uo--)
          }
        }
      }
      handleResponse(BB, IB) {
        202 === BB.status && "invalid" === BB.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), IB), BB.text().catch(lI)
      }
      isFetchNetworkError(BB) {
        return BB instanceof TypeError || BB instanceof Wo || BB instanceof DOMException && "AbortError" === BB.name
      }
      compress(BB) {
        return AT((function*() {
          const IB = [],
            ZB = new ReadableStream({
              start(IB) {
                IB.enqueue((new TextEncoder).encode(BB)), IB.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: BB,
              value: TB
            } = yield ZB.read();
            if (BB) return new Blob(IB);
            IB.push(TB)
          }
        }))()
      }
      extendFaroSession(BB, IB, ZB) {
        var TB, JB;
        const oB = BB.sessionTracking;
        if (!(null === oB || void 0 === oB ? void 0 : oB.enabled)) return void IB("Session expired.");
        const {
          fetchUserSession: GB,
          storeUserSession: vB
        } = fI(oB), kB = null === (TB = this.metas.value.session) || void 0 === TB ? void 0 : TB.id, cB = null === (JB = GB()) || void 0 === JB ? void 0 : JB.sessionId;
        ZB && ZB === kB && ZB === cB ? (aI({
          fetchUserSession: GB,
          storeUserSession: vB
        })({
          forceSessionExtend: !0
        }), IB("Session expired; created new session.")) : IB("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Qo = () => {
      const BB = window.k6;
      return {
        k6: nI({
          isK6Browser: !0
        }, (null === BB || void 0 === BB ? void 0 : BB.testRunId) && {
          testRunId: null === BB || void 0 === BB ? void 0 : BB.testRunId
        })
      }
    };
    let so, wo;

    function Oo() {
      let {
        generatePageId: BB,
        initialPageMeta: IB
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const ZB = location.href;
        return pB(BB) && so !== ZB && (so = ZB, wo = BB(location)), {
          page: nI(nI({
            url: ZB
          }, wo ? {
            id: wo
          } : {}), IB)
        }
      }
    }

    function Yo() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SI,
        IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZB = tI;
      return IB > 0 && (ZB.error = IB >= 1 ? function() {
        for (var IB = arguments.length, TB = new Array(IB), JB = 0; JB < IB; JB++) TB[JB] = arguments[JB];
        BB.error(`${ZB.prefix}\n`, ...TB)
      } : lI, ZB.warn = IB >= 2 ? function() {
        for (var IB = arguments.length, TB = new Array(IB), JB = 0; JB < IB; JB++) TB[JB] = arguments[JB];
        BB.warn(`${ZB.prefix}\n`, ...TB)
      } : lI, ZB.info = IB >= 3 ? function() {
        for (var IB = arguments.length, TB = new Array(IB), JB = 0; JB < IB; JB++) TB[JB] = arguments[JB];
        BB.info(`${ZB.prefix}\n`, ...TB)
      } : lI, ZB.debug = IB >= 4 ? function() {
        for (var IB = arguments.length, TB = new Array(IB), JB = 0; JB < IB; JB++) TB[JB] = arguments[JB];
        BB.debug(`${ZB.prefix}\n`, ...TB)
      } : lI), ZB
    }
    const io = "faro",
      po = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      ao = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Ho(BB) {
      var IB, ZB, JB, oB, GB, vB;
      const kB = [],
        nB = Yo(BB.unpatchedConsole, BB.internalLoggerLevel);
      BB.transports ? ((BB.url || BB.apiKey) && nB.error('if "transports" is defined, "url" and "apiKey" should not be defined'), kB.push(...BB.transports)) : BB.url ? kB.push(new Co({
        url: BB.url,
        apiKey: BB.apiKey,
        requestCompression: BB.requestCompression
      })) : nB.error('either "url" or "transports" must be defined');
      const {
        dedupe: hB = !0,
        eventDomain: zB = TB,
        globalObjectKey: FB = io,
        instrumentations: NB = uJ(),
        internalLoggerLevel: gB = bI,
        isolate: qB = !1,
        logArgsSerializer: yB = HZ,
        metas: UB = jo(BB),
        paused: WB = !1,
        preventGlobalExposure: dB = !1,
        unpatchedConsole: CB = SI,
        url: QB,
        experimental: sB
      } = BB, wB = ho(BB, ao), OB = null !== (IB = null === sB || void 0 === sB ? void 0 : sB.trackNavigation) && void 0 !== IB && IB, YB = {
        dataAttributeName: KT(null !== (ZB = null === (JB = BB.userActionsInstrumentation) || void 0 === JB ? void 0 : JB.dataAttributeName) && void 0 !== ZB ? ZB : xT),
        excludeItem: null === (oB = BB.userActionsInstrumentation) || void 0 === oB ? void 0 : oB.excludeItem,
        initialActivityTimeout: VT(null === (GB = BB.userActionsInstrumentation) || void 0 === GB ? void 0 : GB.initialActivityTimeout, 100, (BB => nB.warn(BB)))
      };
      return nI(nI({}, wB), {}, {
        batching: nI(nI({}, po), BB.batching),
        dedupe: hB,
        globalObjectKey: FB,
        instrumentations: Mo(NB, BB),
        internalLoggerLevel: gB,
        isolate: qB,
        logArgsSerializer: yB,
        metas: UB,
        parseStacktrace: gZ,
        paused: WB,
        preventGlobalExposure: dB,
        transports: kB,
        unpatchedConsole: CB,
        eventDomain: zB,
        ignoreUrls: [...null !== (vB = BB.ignoreUrls) && void 0 !== vB ? vB : [], ...QB ? [QB] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: nI(nI(nI({}, cB), BB.sessionTracking), Po({
          trackGeolocation: BB.trackGeolocation,
          sessionTracking: BB.sessionTracking
        })),
        userActionsInstrumentation: YB,
        experimental: {
          trackNavigation: OB
        }
      })
    }

    function Mo(BB, IB) {
      let {
        experimental: ZB
      } = IB;
      var TB;
      const JB = null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.trackNavigation) && void 0 !== TB && TB;
      return BB.filter((BB => !("@grafana/faro-web-sdk:instrumentation-navigation" === BB.name && !JB)))
    }

    function jo(BB) {
      var IB, ZB, TB;
      const {
        page: JB,
        generatePageId: oB
      } = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.pageTracking) && void 0 !== IB ? IB : {}, GB = [bJ, xJ, Oo({
        generatePageId: oB,
        initialPageMeta: JB
      }), ...null !== (ZB = BB.metas) && void 0 !== ZB ? ZB : [], DJ];
      return iB(null === (TB = window) || void 0 === TB ? void 0 : TB.k6) ? [...GB, Qo] : GB
    }

    function Po(BB) {
      let {
        trackGeolocation: IB,
        sessionTracking: ZB
      } = BB;
      var TB;
      const JB = {};
      return OB(IB) && (JB.geoLocationTrackingEnabled = IB), bB(JB) ? {} : {
        session: nI(nI({}, null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.session) && void 0 !== TB ? TB : {}), {}, {
          overrides: JB
        })
      }
    }
    const Ro = new WeakSet;

    function ro(BB) {
      return Ro.add(BB), BB
    }

    function mo(BB, IB) {
      if (BB.capture) return ro(BB.capture(IB));
      const ZB = ro(BB.value);
      return null === IB || void 0 === IB || IB(), ZB
    }

    function Xo(BB) {
      const IB = `__faroBundleId_${BB}`,
        ZB = null === nB || void 0 === nB ? void 0 : nB[IB];
      if ("string" === typeof ZB && "" !== ZB) return ZB;
      const TB = "undefined" !== typeof window ? window[IB] : void 0;
      return "string" === typeof TB && "" !== TB ? TB : void 0
    }

    function Lo(BB) {
      var IB, ZB;
      const TB = BB.config.app.name,
        JB = TB ? function(BB) {
          return null === nB || void 0 === nB ? void 0 : nB[`__faroGitHash_${BB}`]
        }(TB) : void 0,
        oB = {
          sdk: {
            version: ZZ,
            name: "faro"
          },
          app: VI({
            bundleId: TB && Xo(TB)
          }, void 0 !== JB ? {
            gitHash: JB
          } : {})
        },
        GB = null === (IB = BB.config.sessionTracking) || void 0 === IB ? void 0 : IB.session;
      GB && BB.api.setSession(GB), BB.config.app && (oB.app = VI(VI({}, BB.config.app), oB.app)), BB.config.user && (oB.user = BB.config.user), BB.config.view && (oB.view = BB.config.view), BB.metas.add(oB, ...null !== (ZB = BB.config.metas) && void 0 !== ZB ? ZB : [])
    }
    var eo = class {
      constructor(BB, IB) {
        var ZB, TB;
        this.signalBuffer = [], this.itemLimit = null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.itemLimit) && void 0 !== ZB ? ZB : 50, this.sendTimeout = null !== (TB = null === IB || void 0 === IB ? void 0 : IB.sendTimeout) && void 0 !== TB ? TB : 250, this.paused = (null === IB || void 0 === IB ? void 0 : IB.paused) || !1, this.sendFn = BB, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const IB = new Map;
        return BB.forEach((BB => {
          const ZB = JSON.stringify(BB.meta);
          let TB = IB.get(ZB);
          TB = void 0 === TB ? [BB] : [...TB, BB], IB.set(ZB, TB)
        })), Array.from(IB.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const BB = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(BB).forEach(this.sendFn)
        } catch (IB) {
          throw this.signalBuffer = [...BB, ...this.signalBuffer], this.trimBufferToLimit(), IB
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function uo(BB, IB, ZB, TB) {
      var JB;
      IB.debug("Initializing transports");
      const oB = [];
      let GB = [];
      const vB = BB => {
        let IB = BB;
        for (const TB of GB) {
          const BB = IB.map(TB).filter(Boolean);
          if (0 === BB.length) return [];
          IB = fo(BB, ZB)
        }
        return IB
      };
      let kB;
      (null === (JB = ZB.batching) || void 0 === JB ? void 0 : JB.enabled) && (kB = new eo((BB => {
        const ZB = vB(BB);
        if (0 !== ZB.length)
          for (const TB of oB) IB.debug(`Transporting item using ${TB.name}\n`, ZB), TB.isBatched() && TB.send(ZB)
      }), {
        sendTimeout: ZB.batching.sendTimeout,
        itemLimit: ZB.batching.itemLimit,
        paused: ZB.paused
      }));
      return {
        add: function() {
          IB.debug("Adding transports");
          for (var JB = arguments.length, GB = new Array(JB), vB = 0; vB < JB; vB++) GB[vB] = arguments[vB];
          GB.forEach((JB => {
            IB.debug(`Adding "${JB.name}" transport`), oB.some((BB => BB === JB)) ? IB.warn(`Transport ${JB.name} is already added`) : (JB.unpatchedConsole = BB, JB.internalLogger = IB, JB.config = ZB, JB.metas = TB, oB.push(JB))
          }))
        },
        addBeforeSendHooks: function() {
          IB.debug("Adding beforeSendHooks\n", GB);
          for (var BB = arguments.length, ZB = new Array(BB), TB = 0; TB < BB; TB++) ZB[TB] = arguments[TB];
          ZB.forEach((BB => {
            BB && GB.push(BB)
          }))
        },
        getBeforeSendHooks: () => [...GB],
        execute: BB => {
          var JB;
          if (!ZB.paused && eI(TB).shouldCapture()) {
            if (hB = BB.meta, !Ro.has(hB)) {
              var GB, cB, nB;
              const IB = null === (GB = TB.value.session) || void 0 === GB ? void 0 : GB.id,
                JB = mo(TB);
              if (ZB.paused) return;
              const oB = VI({}, BB.meta);
              (null === (cB = oB.session) || void 0 === cB ? void 0 : cB.id) === IB && (null === (nB = JB.session) || void 0 === nB ? void 0 : nB.id) !== IB && (void 0 === JB.session ? delete oB.session : oB.session = JB.session), BB = VI(VI({}, BB), {}, {
                meta: ro(oB)
              })
            }
            var hB;
            (null === (JB = ZB.batching) || void 0 === JB ? void 0 : JB.enabled) && (null === kB || void 0 === kB || kB.addItem(BB)), (BB => {
              var TB;
              if ((null === (TB = ZB.batching) || void 0 === TB ? void 0 : TB.enabled) && oB.every((BB => BB.isBatched()))) return;
              const [JB] = vB([BB]);
              if (void 0 !== JB)
                for (const vB of oB) {
                  var GB;
                  IB.debug(`Transporting item using ${vB.name}\n`, JB), vB.isBatched() ? (null === (GB = ZB.batching) || void 0 === GB ? void 0 : GB.enabled) || vB.send([JB]) : vB.send(JB)
                }
            })(BB)
          }
        },
        isPaused: () => ZB.paused,
        pause: () => {
          IB.debug("Pausing transports"), null === kB || void 0 === kB || kB.pause(), ZB.paused = !0
        },
        remove: function() {
          IB.debug("Removing transports");
          for (var BB = arguments.length, ZB = new Array(BB), TB = 0; TB < BB; TB++) ZB[TB] = arguments[TB];
          ZB.forEach((BB => {
            IB.debug(`Removing "${BB.name}" transport`);
            const ZB = oB.indexOf(BB); - 1 !== ZB ? oB.splice(ZB, 1) : IB.warn(`Transport "${BB.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var BB = arguments.length, ZB = new Array(BB), TB = 0; TB < BB; TB++) ZB[TB] = arguments[TB];
          IB.debug("Removing beforeSendHooks"), GB = GB.filter((BB => !ZB.includes(BB)))
        },
        get transports() {
          return [...oB]
        },
        unpause: () => {
          IB.debug("Unpausing transports"), null === kB || void 0 === kB || kB.start(), ZB.paused = !1
        }
      }
    }

    function fo(BB, IB) {
      if (IB.preserveOriginalError)
        for (const ZB of BB) "exception" === ZB.type && delete ZB.payload.originalError;
      return BB
    }
    let Ao = SI;

    function to(BB) {
      var IB;
      return Ao = null !== (IB = BB.unpatchedConsole) && void 0 !== IB ? IB : Ao, Ao
    }
    let bo, xo = tI;

    function Eo(BB, IB) {
      return xo = Yo(BB, IB.internalLoggerLevel), xo
    }

    function Do(BB) {
      let {
        internalLogger: IB,
        config: ZB,
        metas: TB,
        transports: JB,
        tracesApi: oB,
        userActionsApi: GB
      } = BB;
      var vB;
      IB.debug("Initializing exceptions API");
      let kB = null;
      bo = null !== (vB = ZB.parseStacktrace) && void 0 !== vB ? vB : bo;
      const cB = BB => {
          IB.debug("Changing stacktrace parser"), bo = null !== BB && void 0 !== BB ? BB : bo
        },
        {
          ignoreErrors: nB = [],
          preserveOriginalError: hB
        } = ZB;
      return cB(ZB.parseStacktrace), {
        changeStacktraceParser: cB,
        getStacktraceParser: () => bo,
        pushError: function(BB) {
          let {
            skipDedupe: vB,
            stackFrames: cB,
            type: zB,
            context: FB,
            spanContext: NB,
            timestampOverwriteMs: gB,
            originalError: qB,
            fingerprint: yB,
            fatal: UB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(BB, IB) {
              const {
                message: ZB,
                name: TB,
                stack: JB
              } = IB;
              return oB = BB, GB = ZB + " " + TB + " " + JB, oB.some((BB => QB(BB) ? GB.includes(BB) : !!GB.match(BB)));
              var oB, GB
            }(nB, null !== qB && void 0 !== qB ? qB : BB)) try {
            var WB, dB;
            if (!eI(TB).shouldCapture()) return;
            const nB = rI(VI(VI({}, function(BB) {
                let IB = BB.cause;
                mB(IB) ? IB = BB.cause.toString() : null !== IB && (iB(BB.cause) || aB(BB.cause)) ? IB = RI(BB.cause) : null != IB && (IB = BB.cause.toString());
                return null == IB ? {} : {
                  cause: IB
                }
              }(null !== qB && void 0 !== qB ? qB : BB)), null !== FB && void 0 !== FB ? FB : {})),
              QB = VI(VI(VI(VI({
                type: zB || BB.name || "Error",
                value: BB.message,
                timestamp: gB ? gI(gB) : NI(),
                trace: NB ? {
                  trace_id: NB.traceId,
                  span_id: NB.spanId
                } : oB.getTraceContext()
              }, bB(nB) ? {} : {
                context: nB
              }), hB ? {
                originalError: qB
              } : {}), yB ? {
                fingerprint: yB
              } : {}), void 0 !== UB ? {
                fatal: UB
              } : {});
            cB = null !== (WB = cB) && void 0 !== WB ? WB : BB.stack ? null === bo || void 0 === bo ? void 0 : bo(BB).frames : void 0, (null === cB || void 0 === cB ? void 0 : cB.length) && (QB.stacktrace = {
              frames: cB
            });
            const sB = {
              type: QB.type,
              value: QB.value,
              stacktrace: QB.stacktrace,
              context: QB.context,
              fingerprint: QB.fingerprint,
              fatal: null !== (dB = QB.fatal) && void 0 !== dB && dB
            };
            if (!vB && ZB.dedupe && !CB(kB) && UI(sB, kB)) return void IB.debug("Skipping error push because it is the same as the last one\n", QB);
            const wB = kB,
              OB = mo(TB);
            if (kB !== wB && !vB && ZB.dedupe && UI(sB, kB)) return;
            kB = sB;
            const YB = {
              meta: OB,
              payload: QB,
              type: "exception"
            };
            IB.debug("Pushing exception\n", YB), QJ(GB.getActiveUserAction(), YB) || JB.execute(YB)
          } catch (sB) {
            IB.error("Error pushing event", sB)
          }
        }
      }
    }

    function Ko(BB, IB, ZB, TB, JB) {
      IB.debug("Initializing API");
      let oB = null;
      const GB = function(BB) {
          let {
            transports: IB,
            internalLogger: ZB,
            config: TB,
            pushEvent: JB
          } = BB;
          var oB;
          const GB = null === (oB = TB.userActionsInstrumentation) || void 0 === oB ? void 0 : oB.excludeItem;
          let vB;
          const kB = () => vB;
          return {
            startUserAction: (BB, TB, oB) => {
              if (void 0 === kB()) {
                const ZB = new dJ({
                  name: BB,
                  transports: IB,
                  attributes: TB,
                  trigger: (null === oB || void 0 === oB ? void 0 : oB.triggerName) || "faroApiCall",
                  importance: (null === oB || void 0 === oB ? void 0 : oB.importance) || UJ.Normal,
                  trackUserActionsExcludeItem: GB,
                  pushEvent: JB
                });
                return ZB.filter((BB => [3, 2].includes(BB))).first().subscribe((() => {
                  vB = void 0
                })), CJ.notify({
                  type: yJ,
                  userAction: ZB,
                  initialActivityTimeout: null === oB || void 0 === oB ? void 0 : oB.initialActivityTimeout
                }), vB = ZB, vB
              }
              ZB.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: kB
          }
        }({
          transports: JB,
          config: ZB,
          internalLogger: IB,
          pushEvent: (BB, ZB, TB, JB) => {
            oB ? oB(BB, ZB, TB, JB) : IB.warn("pushEventImpl is not initialized. Event dropped:", {
              name: BB,
              attributes: ZB,
              domain: TB,
              options: JB
            })
          }
        }),
        vB = function(BB, IB, ZB, TB, JB) {
          let oB;
          return IB.debug("Initializing traces API"), {
            getOTEL: () => oB,
            getTraceContext: () => {
              const BB = null === oB || void 0 === oB ? void 0 : oB.trace.getSpanContext(oB.context.active());
              return BB ? {
                trace_id: BB.traceId,
                span_id: BB.spanId
              } : void 0
            },
            initOTEL: (BB, ZB) => {
              IB.debug("Initializing OpenTelemetry"), oB = {
                trace: BB,
                context: ZB
              }
            },
            isOTELInitialized: () => !!oB,
            pushTraces: BB => {
              try {
                if (!eI(TB).shouldCapture()) return;
                const ZB = {
                  type: "trace",
                  payload: BB,
                  meta: mo(TB)
                };
                IB.debug("Pushing trace\n", ZB), JB.execute(ZB)
              } catch (ZB) {
                IB.error("Error pushing trace\n", ZB)
              }
            }
          }
        }(0, IB, 0, TB, JB),
        kB = {
          unpatchedConsole: BB,
          internalLogger: IB,
          userActionsApi: GB,
          config: ZB,
          metas: TB,
          transports: JB,
          tracesApi: vB
        },
        cB = function(BB) {
          let {
            internalLogger: IB,
            config: ZB,
            metas: TB,
            transports: JB,
            tracesApi: oB,
            userActionsApi: GB
          } = BB, vB = null;
          return {
            pushEvent: function(BB, kB, cB) {
              let {
                skipDedupe: nB,
                spanContext: hB,
                timestampOverwriteMs: zB,
                customPayloadTransformer: FB = BB => BB
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!eI(TB).shouldCapture()) return;
                const NB = rI(kB),
                  gB = FB({
                    name: BB,
                    domain: null !== cB && void 0 !== cB ? cB : ZB.eventDomain,
                    attributes: bB(NB) ? void 0 : NB,
                    timestamp: zB ? gI(zB) : NI(),
                    trace: hB ? {
                      trace_id: hB.traceId,
                      span_id: hB.spanId
                    } : oB.getTraceContext()
                  }),
                  qB = {
                    name: gB.name,
                    attributes: gB.attributes,
                    domain: gB.domain
                  };
                if (!nB && ZB.dedupe && !CB(vB) && UI(qB, vB)) return void IB.debug("Skipping event push because it is the same as the last one\n", gB);
                const yB = vB,
                  UB = mo(TB);
                if (vB !== yB && !nB && ZB.dedupe && UI(qB, vB)) return;
                vB = qB;
                const WB = {
                  meta: UB,
                  payload: gB,
                  type: "event"
                };
                IB.debug("Pushing event\n", WB), QJ(GB.getActiveUserAction(), WB) || JB.execute(WB)
              } catch (NB) {
                IB.error("Error pushing event", NB)
              }
            }
          }
        }(kB);
      return oB = cB.pushEvent, VI(VI(VI(VI(VI(VI(VI({}, vB), Do(kB)), function(BB) {
        let IB, ZB, TB, JB, {
          internalLogger: oB,
          metas: GB
        } = BB;
        oB.debug("Initializing meta API");
        const vB = BB => {
            ZB && GB.remove(ZB), ZB = {
              user: BB
            }, GB.add(ZB)
          },
          kB = (BB, ZB) => {
            var TB;
            const JB = null === ZB || void 0 === ZB ? void 0 : ZB.overrides,
              oB = JB ? {
                overrides: VI(VI({}, null === IB || void 0 === IB || null === (TB = IB.session) || void 0 === TB ? void 0 : TB.overrides), JB)
              } : {};
            IB && GB.remove(IB), IB = {
              session: VI(VI({}, bB(BB) ? void 0 : BB), oB)
            }, GB.add(IB)
          },
          cB = (BB, IB) => {
            eI(GB).notifySessionUpdate({
              type: "replace",
              session: BB,
              overrides: null === IB || void 0 === IB ? void 0 : IB.overrides
            }), kB(BB, IB)
          },
          nB = () => GB.value.session,
          hB = () => GB.value.page;
        return {
          setUser: vB,
          resetUser: vB,
          setSession: cB,
          resetSession: cB,
          getSession: nB,
          setView: (BB, IB) => {
            var ZB;
            if ((null === IB || void 0 === IB ? void 0 : IB.overrides) && (eI(GB).notifySessionUpdate({
                type: "overrides",
                overrides: IB.overrides
              }), kB(nB(), {
                overrides: IB.overrides
              })), (null === TB || void 0 === TB || null === (ZB = TB.view) || void 0 === ZB ? void 0 : ZB.name) === (null === BB || void 0 === BB ? void 0 : BB.name)) return;
            const JB = TB;
            TB = {
              view: BB
            }, GB.add(TB), JB && GB.remove(JB)
          },
          getView: () => GB.value.view,
          setPage: BB => {
            var IB;
            const ZB = QB(BB) ? VI(VI({}, null !== (IB = null === JB || void 0 === JB ? void 0 : JB.page) && void 0 !== IB ? IB : hB()), {}, {
              id: BB
            }) : BB;
            JB && GB.remove(JB), JB = {
              page: ZB
            }, GB.add(JB)
          },
          getPage: hB
        }
      }(kB)), function(BB) {
        let {
          internalLogger: IB,
          config: ZB,
          metas: TB,
          transports: JB,
          tracesApi: oB,
          userActionsApi: GB
        } = BB;
        var vB;
        IB.debug("Initializing logs API");
        let kB = null;
        const cB = null !== (vB = ZB.logArgsSerializer) && void 0 !== vB ? vB : HZ;
        return {
          pushLog: function(BB) {
            let {
              context: vB,
              level: nB,
              skipDedupe: hB,
              spanContext: zB,
              timestampOverwriteMs: FB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!eI(TB).shouldCapture()) return;
              const NB = rI(vB),
                gB = {
                  message: cB(BB),
                  level: null !== nB && void 0 !== nB ? nB : "log",
                  context: bB(NB) ? void 0 : NB,
                  timestamp: FB ? gI(FB) : NI(),
                  trace: zB ? {
                    trace_id: zB.traceId,
                    span_id: zB.spanId
                  } : oB.getTraceContext()
                },
                qB = {
                  message: gB.message,
                  level: gB.level,
                  context: gB.context
                };
              if (!hB && ZB.dedupe && !CB(kB) && UI(qB, kB)) return void IB.debug("Skipping log push because it is the same as the last one\n", gB);
              const yB = kB,
                UB = mo(TB);
              if (kB !== yB && !hB && ZB.dedupe && UI(qB, kB)) return;
              kB = qB;
              const WB = {
                type: "log",
                payload: gB,
                meta: UB
              };
              IB.debug("Pushing log\n", WB), QJ(GB.getActiveUserAction(), WB) || JB.execute(WB)
            } catch (NB) {
              IB.error("Error pushing log\n", NB)
            }
          }
        }
      }(kB)), function(BB) {
        let {
          internalLogger: IB,
          config: ZB,
          metas: TB,
          transports: JB,
          tracesApi: oB,
          userActionsApi: GB
        } = BB;
        IB.debug("Initializing measurements API");
        let vB = null;
        return {
          pushMeasurement: function(BB) {
            let {
              skipDedupe: kB,
              context: cB,
              spanContext: nB,
              timestampOverwriteMs: hB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!eI(TB).shouldCapture()) return;
              const zB = rI(cB),
                FB = VI(VI({}, BB), {}, {
                  trace: nB ? {
                    trace_id: nB.traceId,
                    span_id: nB.spanId
                  } : oB.getTraceContext(),
                  timestamp: hB ? gI(hB) : NI(),
                  context: bB(zB) ? void 0 : zB
                }),
                NB = {
                  type: FB.type,
                  values: FB.values,
                  context: FB.context
                };
              if (!kB && ZB.dedupe && !CB(vB) && UI(NB, vB)) return void IB.debug("Skipping measurement push because it is the same as the last one\n", FB);
              const gB = vB,
                qB = mo(TB);
              if (vB !== gB && !kB && ZB.dedupe && UI(NB, vB)) return;
              vB = NB;
              const yB = {
                type: "measurement",
                payload: FB,
                meta: qB
              };
              IB.debug("Pushing measurement\n", yB), QJ(GB.getActiveUserAction(), yB) || JB.execute(yB)
            } catch (zB) {
              IB.error("Error pushing measurement\n", zB)
            }
          }
        }
      }(kB)), cB), GB)
    }

    function Vo(BB) {
      const IB = to(BB),
        ZB = Eo(IB, BB);
      if (NB() && !BB.isolate) return void ZB.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      ZB.debug("Initializing");
      const TB = function(BB, IB) {
          let ZB, TB = [],
            JB = [],
            oB = [],
            GB = 0,
            vB = 0;
          const kB = () => TB.reduce(((BB, IB) => Object.assign(BB, pB(IB) ? IB() : IB)), {}),
            cB = () => {
              if (JB.length) {
                const BB = kB();
                JB.forEach((IB => IB(BB)))
              }
            };
          return {
            add: function() {
              for (var BB = arguments.length, ZB = new Array(BB), JB = 0; JB < BB; JB++) ZB[JB] = arguments[JB];
              IB.debug("Adding metas\n", ZB), TB.push(...ZB), cB()
            },
            remove: function() {
              for (var BB = arguments.length, ZB = new Array(BB), JB = 0; JB < BB; JB++) ZB[JB] = arguments[JB];
              IB.debug("Removing metas\n", ZB), TB = TB.filter((BB => !ZB.includes(BB))), cB()
            },
            addListener: BB => {
              IB.debug("Adding metas listener\n", BB), JB.push(BB)
            },
            removeListener: BB => {
              IB.debug("Removing metas listener\n", BB), JB = JB.filter((IB => IB !== BB))
            },
            capture: BB => {
              var IB;
              const TB = void 0 !== ZB,
                JB = null !== (IB = ZB) && void 0 !== IB ? IB : oB;
              TB || (ZB = JB, GB = 0, vB = JB.length);
              try {
                for (; GB < vB;) {
                  const BB = JB[GB++];
                  null === BB || void 0 === BB || BB()
                }
                const IB = ro(kB());
                return null === BB || void 0 === BB || BB(), IB
              } finally {
                TB || (ZB = void 0)
              }
            },
            addCaptureListener: BB => {
              oB.push(BB)
            },
            removeCaptureListener: BB => {
              oB = oB.filter((IB => IB !== BB))
            },
            get value() {
              return kB()
            }
          }
        }(0, ZB),
        JB = uo(IB, ZB, BB, TB),
        oB = Ko(IB, ZB, BB, TB, JB),
        GB = function(BB, IB, ZB, TB, JB, oB) {
          IB.debug("Initializing instrumentations");
          const GB = [];
          return {
            add: function() {
              IB.debug("Adding instrumentations");
              for (var vB = arguments.length, kB = new Array(vB), cB = 0; cB < vB; cB++) kB[cB] = arguments[cB];
              kB.forEach((vB => {
                IB.debug(`Adding "${vB.name}" instrumentation`), GB.some((BB => BB.name === vB.name)) ? IB.warn(`Instrumentation ${vB.name} is already added`) : (vB.unpatchedConsole = BB, vB.internalLogger = IB, vB.config = ZB, vB.metas = TB, vB.transports = JB, vB.api = oB, GB.push(vB), vB.initialize())
              }))
            },
            get instrumentations() {
              return [...GB]
            },
            remove: function() {
              IB.debug("Removing instrumentations");
              for (var BB = arguments.length, ZB = new Array(BB), TB = 0; TB < BB; TB++) ZB[TB] = arguments[TB];
              ZB.forEach((BB => {
                var ZB, TB;
                IB.debug(`Removing "${BB.name}" instrumentation`);
                const JB = GB.reduce(((IB, ZB, TB) => null === IB && ZB.name === BB.name ? TB : null), null);
                null !== JB ? (null === (ZB = (TB = GB[JB]).destroy) || void 0 === ZB || ZB.call(TB), GB.splice(JB, 1)) : IB.warn(`Instrumentation "${BB.name}" is not added`)
              }))
            }
          }
        }(IB, ZB, BB, TB, JB, oB),
        vB = qB(IB, ZB, BB, TB, JB, oB, GB);
      return Lo(vB),
        function(BB) {
          BB.transports.add(...BB.config.transports), BB.transports.addBeforeSendHooks(BB.config.beforeSend)
        }(vB),
        function(BB) {
          BB.instrumentations.add(...BB.config.instrumentations)
        }(vB), vB
    }

    function So(BB) {
      const IB = Ho(BB);
      if (IB) return Vo(IB)
    }
  },
  6850: function(BB, IB, ZB) {
    var TB;
    ! function(JB, oB) {
      var GB = "function",
        vB = "undefined",
        kB = "object",
        cB = "string",
        nB = "major",
        hB = "model",
        zB = "name",
        FB = "type",
        NB = "vendor",
        gB = "version",
        qB = "architecture",
        yB = "console",
        UB = "mobile",
        WB = "tablet",
        dB = "smarttv",
        CB = "wearable",
        QB = "embedded",
        sB = "Amazon",
        wB = "Apple",
        OB = "ASUS",
        YB = "BlackBerry",
        iB = "Browser",
        pB = "Chrome",
        aB = "Firefox",
        HB = "Google",
        MB = "Honor",
        jB = "Huawei",
        PB = "LG",
        RB = "Microsoft",
        rB = "Motorola",
        mB = "Nvidia",
        XB = "OnePlus",
        LB = "Opera",
        eB = "OPPO",
        uB = "Samsung",
        fB = "Sharp",
        lB = "Sony",
        AB = "Xiaomi",
        tB = "Zebra",
        bB = "Facebook",
        xB = "Chromium OS",
        EB = "Mac OS",
        DB = " Browser",
        KB = function(BB) {
          for (var IB = {}, ZB = 0; ZB < BB.length; ZB++) IB[BB[ZB].toUpperCase()] = BB[ZB];
          return IB
        },
        VB = function(BB, IB) {
          return typeof BB === cB && -1 !== SB(IB).indexOf(SB(BB))
        },
        SB = function(BB) {
          return BB.toLowerCase()
        },
        BI = function(BB, IB) {
          if (typeof BB === cB) return BB = BB.replace(/^\s\s*/, ""), typeof IB === vB ? BB : BB.substring(0, 500)
        },
        II = function(BB, IB) {
          for (var ZB, TB, JB, vB, cB, nB, hB = 0; hB < IB.length && !cB;) {
            var zB = IB[hB],
              FB = IB[hB + 1];
            for (ZB = TB = 0; ZB < zB.length && !cB && zB[ZB];)
              if (cB = zB[ZB++].exec(BB))
                for (JB = 0; JB < FB.length; JB++) nB = cB[++TB], typeof(vB = FB[JB]) === kB && vB.length > 0 ? 2 === vB.length ? typeof vB[1] == GB ? this[vB[0]] = vB[1].call(this, nB) : this[vB[0]] = vB[1] : 3 === vB.length ? typeof vB[1] !== GB || vB[1].exec && vB[1].test ? this[vB[0]] = nB ? nB.replace(vB[1], vB[2]) : oB : this[vB[0]] = nB ? vB[1].call(this, nB, vB[2]) : oB : 4 === vB.length && (this[vB[0]] = nB ? vB[3].call(this, nB.replace(vB[1], vB[2])) : oB) : this[vB] = nB || oB;
            hB += 2
          }
        },
        ZI = function(BB, IB) {
          for (var ZB in IB)
            if (typeof IB[ZB] === kB && IB[ZB].length > 0) {
              for (var TB = 0; TB < IB[ZB].length; TB++)
                if (VB(IB[ZB][TB], BB)) return "?" === ZB ? oB : ZB
            } else if (VB(IB[ZB], BB)) return "?" === ZB ? oB : ZB;
          return IB.hasOwnProperty("*") ? IB["*"] : BB
        },
        TI = {
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
        JI = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [gB, [zB, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [gB, [zB, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [zB, gB],
            [/opios[\/ ]+([\w\.]+)/i],
            [gB, [zB, LB + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [gB, [zB, LB + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [gB, [zB, LB]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [gB, [zB, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [gB, [zB, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [zB, gB],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [gB, [zB, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [gB, [zB, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [gB, [zB, "UC" + iB]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [gB, [zB, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [gB, [zB, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [gB, [zB, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [gB, [zB, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [gB, [zB, "Smart Lenovo " + iB]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [zB, /(.+)/, "$1 Secure " + iB], gB
            ],
            [/\bfocus\/([\w\.]+)/i],
            [gB, [zB, aB + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [gB, [zB, LB + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [gB, [zB, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [gB, [zB, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [gB, [zB, LB + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [gB, [zB, "MIUI" + DB]],
            [/fxios\/([\w\.-]+)/i],
            [gB, [zB, aB]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [gB, [zB, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [zB, /(.+)/, "$1Browser"], gB
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [zB, /(.+)/, "$1" + DB], gB
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [gB, [zB, uB + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [gB, [zB, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [zB, "Sogou Mobile"], gB
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [zB, gB],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [zB],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [gB, zB],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [zB, bB], gB
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [zB, gB],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [gB, [zB, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [gB, [zB, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [gB, [zB, pB + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [zB, pB + " WebView"], gB
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [gB, [zB, "Android " + iB]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [zB, gB],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [gB, [zB, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [gB, zB],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [zB, [gB, ZI, {
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
            [zB, gB],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [zB, "Netscape"], gB
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [zB, gB],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [gB, [zB, aB + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [zB, [gB, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [zB, [gB, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [qB, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [qB, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [qB, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [qB, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [qB, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [qB, /ower/, "", SB]
            ],
            [/ sun4\w[;\)]/i],
            [
              [qB, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [qB, SB]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [hB, [NB, uB],
              [FB, WB]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [hB, [NB, uB],
              [FB, UB]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [hB, [NB, wB],
              [FB, UB]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [hB, [NB, wB],
              [FB, WB]
            ],
            [/(macintosh);/i],
            [hB, [NB, wB]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [hB, [NB, fB],
              [FB, UB]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [hB, [NB, MB],
              [FB, WB]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [hB, [NB, MB],
              [FB, UB]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [hB, [NB, jB],
              [FB, WB]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [hB, [NB, jB],
              [FB, UB]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [hB, /_/g, " "],
              [NB, AB],
              [FB, WB]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [hB, /_/g, " "],
              [NB, AB],
              [FB, UB]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [hB, [NB, eB],
              [FB, UB]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [hB, [NB, ZI, {
                OnePlus: ["304", "403", "203"],
                "*": eB
              }],
              [FB, WB]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [hB, [NB, "Vivo"],
              [FB, UB]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [hB, [NB, "Realme"],
              [FB, UB]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [hB, [NB, rB],
              [FB, UB]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [hB, [NB, rB],
              [FB, WB]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [hB, [NB, PB],
              [FB, WB]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [hB, [NB, PB],
              [FB, UB]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [hB, [NB, "Lenovo"],
              [FB, WB]
            ],
            [/(nokia) (t[12][01])/i],
            [NB, hB, [FB, WB]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [hB, /_/g, " "],
              [FB, UB],
              [NB, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [hB, [NB, HB],
              [FB, WB]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [hB, [NB, HB],
              [FB, UB]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [hB, [NB, lB],
              [FB, UB]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [hB, "Xperia Tablet"],
              [NB, lB],
              [FB, WB]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [hB, [NB, XB],
              [FB, UB]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [hB, [NB, sB],
              [FB, WB]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [hB, /(.+)/g, "Fire Phone $1"],
              [NB, sB],
              [FB, UB]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [hB, NB, [FB, WB]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [hB, [NB, YB],
              [FB, UB]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [hB, [NB, OB],
              [FB, WB]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [hB, [NB, OB],
              [FB, UB]
            ],
            [/(nexus 9)/i],
            [hB, [NB, "HTC"],
              [FB, WB]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [NB, [hB, /_/g, " "],
              [FB, UB]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [hB, [NB, "TCL"],
              [FB, WB]
            ],
            [/(itel) ((\w+))/i],
            [
              [NB, SB], hB, [FB, ZI, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [hB, [NB, "Acer"],
              [FB, WB]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [hB, [NB, "Meizu"],
              [FB, UB]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [hB, [NB, "Ulefone"],
              [FB, UB]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [hB, [NB, "Energizer"],
              [FB, UB]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [hB, [NB, "Cat"],
              [FB, UB]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [hB, [NB, "Smartfren"],
              [FB, UB]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [hB, [NB, "Nothing"],
              [FB, UB]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [hB, [NB, "Archos"],
              [FB, WB]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [hB, [NB, "Archos"],
              [FB, UB]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [NB, hB, [FB, WB]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [NB, hB, [FB, UB]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [NB, hB, [FB, WB]],
            [/(surface duo)/i],
            [hB, [NB, RB],
              [FB, WB]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [hB, [NB, "Fairphone"],
              [FB, UB]
            ],
            [/(u304aa)/i],
            [hB, [NB, "AT&T"],
              [FB, UB]
            ],
            [/\bsie-(\w*)/i],
            [hB, [NB, "Siemens"],
              [FB, UB]
            ],
            [/\b(rct\w+) b/i],
            [hB, [NB, "RCA"],
              [FB, WB]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [hB, [NB, "Dell"],
              [FB, WB]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [hB, [NB, "Verizon"],
              [FB, WB]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [hB, [NB, "Barnes & Noble"],
              [FB, WB]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [hB, [NB, "NuVision"],
              [FB, WB]
            ],
            [/\b(k88) b/i],
            [hB, [NB, "ZTE"],
              [FB, WB]
            ],
            [/\b(nx\d{3}j) b/i],
            [hB, [NB, "ZTE"],
              [FB, UB]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [hB, [NB, "Swiss"],
              [FB, UB]
            ],
            [/\b(zur\d{3}) b/i],
            [hB, [NB, "Swiss"],
              [FB, WB]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [hB, [NB, "Zeki"],
              [FB, WB]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [NB, "Dragon Touch"], hB, [FB, WB]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [hB, [NB, "Insignia"],
              [FB, WB]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [hB, [NB, "NextBook"],
              [FB, WB]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [NB, "Voice"], hB, [FB, UB]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [NB, "LvTel"], hB, [FB, UB]
            ],
            [/\b(ph-1) /i],
            [hB, [NB, "Essential"],
              [FB, UB]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [hB, [NB, "Envizen"],
              [FB, WB]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [hB, [NB, "MachSpeed"],
              [FB, WB]
            ],
            [/\btu_(1491) b/i],
            [hB, [NB, "Rotor"],
              [FB, WB]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [hB, [NB, mB],
              [FB, WB]
            ],
            [/(sprint) (\w+)/i],
            [NB, hB, [FB, UB]],
            [/(kin\.[onetw]{3})/i],
            [
              [hB, /\./g, " "],
              [NB, RB],
              [FB, UB]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [hB, [NB, tB],
              [FB, WB]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [hB, [NB, tB],
              [FB, UB]
            ],
            [/smart-tv.+(samsung)/i],
            [NB, [FB, dB]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [hB, /^/, "SmartTV"],
              [NB, uB],
              [FB, dB]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [NB, PB],
              [FB, dB]
            ],
            [/(apple) ?tv/i],
            [NB, [hB, wB + " TV"],
              [FB, dB]
            ],
            [/crkey/i],
            [
              [hB, pB + "cast"],
              [NB, HB],
              [FB, dB]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [hB, [NB, sB],
              [FB, dB]
            ],
            [/(shield \w+ tv)/i],
            [hB, [NB, mB],
              [FB, dB]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [hB, [NB, fB],
              [FB, dB]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [hB, [NB, lB],
              [FB, dB]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [hB, [NB, AB],
              [FB, dB]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [NB, hB, [FB, dB]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [NB, BI],
              [hB, BI],
              [FB, dB]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [hB, [FB, dB]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [FB, dB]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [NB, hB, [FB, yB]],
            [/droid.+; (shield)( bui|\))/i],
            [hB, [NB, mB],
              [FB, yB]
            ],
            [/(playstation \w+)/i],
            [hB, [NB, lB],
              [FB, yB]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [hB, [NB, RB],
              [FB, yB]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [hB, [NB, uB],
              [FB, CB]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [NB, hB, [FB, CB]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [hB, [NB, eB],
              [FB, CB]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [hB, [NB, wB],
              [FB, CB]
            ],
            [/(opwwe\d{3})/i],
            [hB, [NB, XB],
              [FB, CB]
            ],
            [/(moto 360)/i],
            [hB, [NB, rB],
              [FB, CB]
            ],
            [/(smartwatch 3)/i],
            [hB, [NB, lB],
              [FB, CB]
            ],
            [/(g watch r)/i],
            [hB, [NB, PB],
              [FB, CB]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [hB, [NB, tB],
              [FB, CB]
            ],
            [/droid.+; (glass) \d/i],
            [hB, [NB, HB],
              [FB, CB]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [NB, hB, [FB, CB]],
            [/; (quest( \d| pro)?)/i],
            [hB, [NB, bB],
              [FB, CB]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [NB, [FB, QB]],
            [/(aeobc)\b/i],
            [hB, [NB, sB],
              [FB, QB]
            ],
            [/(homepod).+mac os/i],
            [hB, [NB, wB],
              [FB, QB]
            ],
            [/windows iot/i],
            [
              [FB, QB]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [hB, [FB, UB]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [hB, [FB, WB]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [FB, WB]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [FB, UB]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [hB, [NB, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [gB, [zB, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [zB, gB],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [gB, [zB, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [zB, gB],
            [/ladybird\//i],
            [
              [zB, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [gB, zB]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [zB, gB],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [zB, [gB, ZI, TI]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [gB, ZI, TI],
              [zB, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [gB, /_/g, "."],
              [zB, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [zB, EB],
              [gB, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [gB, zB],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [zB, /(.+)/, "$1 Touch"], gB
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [zB, gB],
            [/\(bb(10);/i],
            [gB, [zB, YB]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [gB, [zB, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [gB, [zB, aB + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [gB, [zB, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [gB, [zB, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [gB, [zB, pB + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [zB, xB], gB
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [zB, gB],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [zB, "Solaris"], gB
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [zB, gB]
          ]
        },
        oI = function(BB, IB) {
          if (typeof BB === kB && (IB = BB, BB = oB), !(this instanceof oI)) return new oI(BB, IB).getResult();
          var ZB = typeof JB !== vB && JB.navigator ? JB.navigator : oB,
            TB = BB || (ZB && ZB.userAgent ? ZB.userAgent : ""),
            yB = ZB && ZB.userAgentData ? ZB.userAgentData : oB,
            dB = IB ? function(BB, IB) {
              var ZB = {};
              for (var TB in BB) IB[TB] && IB[TB].length % 2 === 0 ? ZB[TB] = IB[TB].concat(BB[TB]) : ZB[TB] = BB[TB];
              return ZB
            }(JI, IB) : JI,
            CB = ZB && ZB.userAgent == TB;
          return this.getBrowser = function() {
            var BB, IB = {};
            return IB[zB] = oB, IB[gB] = oB, II.call(IB, TB, dB.browser), IB[nB] = typeof(BB = IB[gB]) === cB ? BB.replace(/[^\d\.]/g, "").split(".")[0] : oB, CB && ZB && ZB.brave && typeof ZB.brave.isBrave == GB && (IB[zB] = "Brave"), IB
          }, this.getCPU = function() {
            var BB = {};
            return BB[qB] = oB, II.call(BB, TB, dB.cpu), BB
          }, this.getDevice = function() {
            var BB = {};
            return BB[NB] = oB, BB[hB] = oB, BB[FB] = oB, II.call(BB, TB, dB.device), CB && !BB[FB] && yB && yB.mobile && (BB[FB] = UB), CB && "Macintosh" == BB[hB] && ZB && typeof ZB.standalone !== vB && ZB.maxTouchPoints && ZB.maxTouchPoints > 2 && (BB[hB] = "iPad", BB[FB] = WB), BB
          }, this.PN = function() {
            var BB = {};
            return BB[zB] = oB, BB[gB] = oB, II.call(BB, TB, dB.engine), BB
          }, this.getOS = function() {
            var BB = {};
            return BB[zB] = oB, BB[gB] = oB, II.call(BB, TB, dB.os), CB && !BB[zB] && yB && yB.platform && "Unknown" != yB.platform && (BB[zB] = yB.platform.replace(/chrome os/i, xB).replace(/macos/i, EB)), BB
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.PN(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return TB
          }, this.setUA = function(BB) {
            return TB = typeof BB === cB && BB.length > 500 ? BI(BB, 500) : BB, this
          }, this.setUA(TB), this
        };
      oI.VERSION = "1.0.41", oI.BROWSER = KB([zB, gB, nB]), oI.CPU = KB([qB]), oI.DEVICE = KB([hB, NB, FB, yB, UB, dB, WB, CB, QB]), oI.ENGINE = oI.OS = KB([zB, gB]), typeof IB !== vB ? (BB.exports && (IB = BB.exports = oI), IB.UAParser = oI) : ZB.amdO ? (TB = function() {
        return oI
      }.call(IB, ZB, IB, BB)) === oB || (BB.exports = TB) : typeof JB !== vB && (JB.UAParser = oI);
      var GI = typeof JB !== vB && (JB.jQuery || JB.Zepto);
      if (GI && !GI.ua) {
        var vI = new oI;
        GI.ua = vI.getResult(), GI.ua.get = function() {
          return vI.getUA()
        }, GI.ua.set = function(BB) {
          vI.setUA(BB);
          var IB = vI.getResult();
          for (var ZB in IB) GI.ua[ZB] = IB[ZB]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);