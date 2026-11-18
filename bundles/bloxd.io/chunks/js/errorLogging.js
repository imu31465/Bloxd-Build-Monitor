export const id = 29;
export const ids = [29];
export const modules = {
  7402: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BaseExtension: () => Bd,
      BaseInstrumentation: () => Td,
      BaseTransport: () => ny,
      CSPInstrumentation: () => My,
      ConsoleInstrumentation: () => Id,
      ConsoleTransport: () => Vp,
      EVENT_CLICK: () => mT,
      EVENT_NAVIGATION: () => iT,
      EVENT_ROUTE_CHANGE: () => zT,
      EVENT_SESSION_EXTEND: () => sT,
      EVENT_SESSION_RESUME: () => fT,
      EVENT_SESSION_START: () => tT,
      EVENT_VIEW_CHANGED: () => NT,
      ErrorsInstrumentation: () => Sd,
      FetchTransport: () => tp,
      InternalLoggerLevel: () => CT,
      LogLevel: () => md,
      MAX_SESSION_PERSISTENCE_TIME: () => YB,
      NavigationInstrumentation: () => Xy,
      Observable: () => vd,
      PerformanceInstrumentation: () => xV,
      PersistentSessionsManager: () => QT,
      SESSION_EXPIRATION_TIME: () => pB,
      SESSION_INACTIVITY_TIME: () => lB,
      STORAGE_KEY: () => yB,
      SessionInstrumentation: () => Vd,
      TransportItemType: () => ey,
      UserActionInstrumentation: () => sy,
      UserActionState: () => uy,
      VERSION: () => dd,
      ViewInstrumentation: () => Qd,
      VolatileSessionsManager: () => RT,
      WebVitalsInstrumentation: () => cV,
      allLogLevels: () => td,
      browserMeta: () => xy,
      buildStackFrame: () => yd,
      captureMetas: () => Rp,
      createInternalLogger: () => wp,
      createPromiseBuffer: () => Op,
      createSession: () => Ay,
      deepEqual: () => vT,
      defaultEventDomain: () => VB,
      defaultExceptionType: () => zd,
      defaultGlobalObjectKey: () => Up,
      defaultInternalLoggerLevel: () => qT,
      defaultLogLevel: () => Nd,
      faro: () => uB,
      genShortID: () => ET,
      getCurrentTimestamp: () => DT,
      getDataFromSafariExtensions: () => Ld,
      getIgnoreUrls: () => xB,
      getInternalFaroFromGlobalObject: () => LB,
      getStackFramesFromError: () => Dd,
      getTransportBody: () => dp,
      getUrlFromResource: () => AB,
      getWebInstrumentations: () => Wy,
      globalObject: () => oB,
      initializeFaro: () => ep,
      internalGlobalObjectKey: () => kB,
      isArray: () => FB,
      isBoolean: () => MB,
      isDomError: () => aB,
      isDomException: () => ZB,
      isElement: () => WB,
      isElementDefined: () => XB,
      OD: () => qB,
      isError: () => QB,
      isErrorDefined: () => PB,
      isErrorEvent: () => RB,
      isEvent: () => SB,
      isEventDefined: () => cB,
      isFunction: () => UB,
      isInstanceOf: () => mB,
      isInt: () => sB,
      isInternalFaroOnGlobalObject: () => DB,
      isMap: () => CB,
      isMapDefined: () => hB,
      isNull: () => NB,
      isNumber: () => fB,
      isObject: () => wB,
      isPrimitive: () => IB,
      isRegExp: () => KB,
      isString: () => tB,
      isSymbol: () => zB,
      isSyntheticEvent: () => GB,
      isThenable: () => rB,
      isToString: () => vB,
      isTypeof: () => EB,
      isUndefined: () => iB,
      makeCoreConfig: () => rp,
      noop: () => hT,
      osMeta: () => jy,
      parseStacktrace: () => ud,
      sdkMeta: () => by,
      setInternalFaroOnGlobalObject: () => OB,
      transportItemTypeToBodyKey: () => Bp,
      unknownString: () => Pd,
      userActionDataAttribute: () => jV,
      userActionTimeoutDataAttribute: () => AV
    });
    const VB = "browser",
      yB = "com.grafana.faro.session",
      pB = 144e5,
      lB = 9e5,
      JB = 1e3,
      YB = lB,
      gB = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: YB
      };
    const oB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof dB.g ? dB.g : "undefined" !== typeof self ? self : void 0;
    const kB = "_faroInternal";

    function LB() {
      return oB[kB]
    }

    function OB(BB) {
      BB.config.isolate ? BB.internalLogger.debug("Skipping registering internal Faro instance on global object") : (BB.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(oB, kB, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: BB
      }))
    }

    function DB() {
      return kB in oB
    }
    let uB = {
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

    function HB(BB, TB, dB, VB, yB, pB, lB) {
      return TB.debug("Initializing Faro"), uB = {
          api: pB,
          config: dB,
          instrumentations: lB,
          internalLogger: TB,
          metas: VB,
          pause: yB.pause,
          transports: yB,
          unpatchedConsole: BB,
          unpause: yB.unpause
        }, OB(uB),
        function(BB) {
          if (BB.config.preventGlobalExposure) BB.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (BB.internalLogger.debug(`Registering public faro reference in the global scope using "${BB.config.globalObjectKey}" key`), BB.config.globalObjectKey in oB) return void BB.internalLogger.warn(`Skipping global registration due to key "${BB.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(oB, BB.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: BB
            })
          }
        }(uB), uB
    }

    function EB(BB, TB) {
      return typeof BB === TB
    }

    function vB(BB, TB) {
      return Object.prototype.toString.call(BB) === `[object ${TB}]`
    }

    function mB(BB, TB) {
      try {
        return BB instanceof TB
      } catch (dB) {
        return !1
      }
    }
    const iB = BB => EB(BB, "undefined"),
      NB = BB => EB(BB, "null"),
      tB = BB => EB(BB, "string"),
      fB = BB => EB(BB, "number") && !isNaN(BB) || EB(BB, "bigint"),
      sB = BB => fB(BB) && Number.isInteger(BB),
      MB = BB => EB(BB, "boolean"),
      zB = BB => EB(BB, "symbol"),
      wB = BB => !NB(BB) && EB(BB, "object"),
      UB = BB => EB(BB, "function"),
      FB = BB => vB(BB, "Array"),
      KB = BB => vB(BB, "RegExp"),
      rB = BB => UB(null === BB || void 0 === BB ? void 0 : BB.then),
      IB = BB => !wB(BB) && !UB(BB),
      cB = "undefined" !== typeof Event,
      SB = BB => cB && mB(BB, Event),
      PB = "undefined" !== typeof Error,
      QB = BB => PB && mB(BB, Error),
      RB = BB => vB(BB, "ErrorEvent"),
      aB = BB => vB(BB, "DOMError"),
      ZB = BB => vB(BB, "DOMException"),
      XB = "undefined" !== typeof Element,
      WB = BB => XB && mB(BB, Element),
      hB = "undefined" !== typeof Map,
      CB = BB => hB && mB(BB, Map),
      GB = BB => wB(BB) && "nativeEvent" in BB && "preventDefault" in BB && "stopPropagation" in BB;

    function qB(BB) {
      return null == BB || (FB(BB) || tB(BB) ? 0 === BB.length : !!wB(BB) && 0 === Object.keys(BB).length)
    }

    function xB() {
      return uB.transports.transports.flatMap((BB => BB.getIgnoreUrls()))
    }

    function jB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return xB().some((TB => BB && null != BB.match(TB)))
    }

    function AB(BB) {
      return tB(BB) ? BB : BB instanceof URL ? BB.href : !qB(BB) && UB(null === BB || void 0 === BB ? void 0 : BB.toString) ? BB.toString() : void 0
    }
    const bB = "sessionStorage",
      nB = "localStorage";

    function eB(BB) {
      try {
        let TB;
        TB = window[BB];
        const dB = "__faro_storage_test__";
        return TB.setItem(dB, dB), TB.removeItem(dB), !0
      } catch (dB) {
        var TB;
        return null === (TB = uB.internalLogger) || void 0 === TB || TB.info(`Web storage of type ${BB} is not available. Reason: ${dB}`), !1
      }
    }

    function BT(BB, TB) {
      return pT(TB) ? window[TB].getItem(BB) : null
    }

    function TT(BB, TB, dB) {
      if (pT(dB)) try {
        window[dB].setItem(BB, TB)
      } catch (VB) {}
    }

    function dT(BB, TB) {
      pT(TB) && window[TB].removeItem(BB)
    }
    const VT = eB(nB),
      yT = eB(bB);

    function pT(BB) {
      return BB === nB ? VT : BB === bB && yT
    }

    function lT(BB) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lT(BB)
    }

    function JT(BB) {
      var TB = function(BB, TB) {
        if ("object" != lT(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != lT(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == lT(TB) ? TB : TB + ""
    }

    function YT(BB, TB, dB) {
      return (TB = JT(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function gT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function oT(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? gT(Object(dB), !0).forEach((function(TB) {
          YT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : gT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function kT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uB;
      var TB, dB, VB;
      const yB = BB.config.sessionTracking,
        pB = null !== (TB = null !== (dB = null === yB || void 0 === yB || null === (VB = yB.sampler) || void 0 === VB ? void 0 : VB.call(yB, {
          metas: BB.metas.value
        })) && void 0 !== dB ? dB : null === yB || void 0 === yB ? void 0 : yB.samplingRate) && void 0 !== TB ? TB : 1,
        lB = "number" === typeof pB ? function(BB) {
          return Math.min(1, Math.max(0, BB))
        }(pB) : 0;
      if (!(lB > 0)) return !1;
      if (1 === lB) return !0;
      try {
        const BB = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === BB || void 0 === BB ? void 0 : BB.getRandomValues)) {
          const TB = new Uint32Array(1);
          return BB.getRandomValues(TB), TB[0] / Math.pow(2, 32) < lB
        }
      } catch (JB) {}
      return Math.random() < lB
    }

    function LT() {
      return Date.now()
    }

    function OT() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function DT() {
      return (new Date).toISOString()
    }

    function uT(BB) {
      return new Date(BB).toISOString()
    }
    const HT = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function ET() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const TB = new Uint32Array(BB),
        dB = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === dB || void 0 === dB ? void 0 : dB.getRandomValues) dB.getRandomValues(TB);
      else
        for (let yB = 0; yB < BB; yB++) TB[yB] = Math.floor(4294967296 * Math.random());
      let VB = "";
      for (let yB = 0; yB < BB; yB++) VB += HT[TB[yB] % 59];
      return VB
    }

    function vT(BB, TB) {
      if (BB === TB) return !0;
      if (EB(BB, "number") && isNaN(BB)) return EB(TB, "number") && isNaN(TB);
      const dB = FB(BB),
        VB = FB(TB);
      if (dB !== VB) return !1;
      if (dB && VB) {
        const dB = BB.length;
        if (dB !== TB.length) return !1;
        for (let VB = dB; 0 !== VB--;)
          if (!vT(BB[VB], TB[VB])) return !1;
        return !0
      }
      const yB = wB(BB),
        pB = wB(TB);
      if (yB !== pB) return !1;
      if (BB && TB && yB && pB) {
        const dB = Object.keys(BB),
          VB = Object.keys(TB);
        if (dB.length !== VB.length) return !1;
        for (let BB of dB)
          if (!VB.includes(BB)) return !1;
        for (let yB of dB)
          if (!vT(BB[yB], TB[yB])) return !1;
        return !0
      }
      return !1
    }
    const mT = "click",
      iT = "navigation",
      NT = "view_changed",
      tT = "session_start",
      fT = "session_resume",
      sT = "session_extend",
      MT = "service_name_override",
      zT = "route_change";

    function wT() {
      let {
        sessionId: BB,
        started: TB,
        lastActivity: dB,
        isSampled: VB = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, yB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB;
      var pB;
      const lB = LT(),
        JB = null === (pB = yB.config) || void 0 === pB || null === (pB = pB.sessionTracking) || void 0 === pB ? void 0 : pB.generateSessionId;
      return null == BB && (BB = "function" === typeof JB ? JB() : ET()), {
        sessionId: BB,
        lastActivity: null !== dB && void 0 !== dB ? dB : lB,
        started: null !== TB && void 0 !== TB ? TB : lB,
        isSampled: VB
      }
    }

    function UT(BB) {
      if (null == BB) return !1;
      const TB = LT();
      return TB - BB.started < 144e5 && TB - BB.lastActivity < lB
    }

    function FT(BB) {
      let {
        fetchUserSession: TB,
        storeUserSession: dB,
        adoptSession: VB,
        updateInterval: yB = 0
      } = BB, JB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB, YB = 0;
      return function() {
        let {
          forceSessionExtend: BB = !1,
          refreshActivity: gB = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var oB, kB;
        if (!TB || !dB) return;
        const LB = LT();
        if (!BB && LB < YB && YB - LB <= yB) return;
        const OB = JB.config.sessionTracking,
          DB = null === OB || void 0 === OB ? void 0 : OB.persistent;
        if (DB && !VT || !DB && !yT) return;
        const uB = TB();
        if (YB = Math.min(LB + yB, (null !== (oB = null === uB || void 0 === uB ? void 0 : uB.started) && void 0 !== oB ? oB : LB) + pB, (null !== (kB = null === uB || void 0 === uB ? void 0 : uB.lastActivity) && void 0 !== kB ? kB : LB) + lB), !1 === BB && UT(uB)) {
          var HB;
          gB && dB(oT(oT({}, uB), {}, {
            lastActivity: LB
          }));
          const BB = null === (HB = JB.metas.value.session) || void 0 === HB ? void 0 : HB.id;
          null != VB && null != uB.sessionMeta && uB.sessionId !== BB && VB(uB.sessionMeta)
        } else {
          var EB, vB, mB;
          let BB = rT(wT({
            isSampled: kT(JB)
          }, JB), uB, JB);
          YB = LB + yB, dB(BB), null === (EB = JB.api) || void 0 === EB || EB.setSession(BB.sessionMeta), null === OB || void 0 === OB || null === (vB = OB.onSessionChange) || void 0 === vB || vB.call(OB, null !== (mB = null === uB || void 0 === uB ? void 0 : uB.sessionMeta) && void 0 !== mB ? mB : null, BB.sessionMeta)
        }
      }
    }

    function KT(BB) {
      let TB, {
          fetchUserSession: dB,
          storeUserSession: VB,
          updateInterval: yB = 0
        } = BB,
        pB = 0;
      return BB => {
        const lB = LT();
        if (BB === TB && lB < pB && pB - lB <= yB) return;
        TB = BB, pB = lB + yB;
        const JB = dB();
        (null === JB || void 0 === JB ? void 0 : JB.sessionId) === BB && UT(JB) && VB(oT(oT({}, JB), {}, {
          lastActivity: lB
        }))
      }
    }

    function rT(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uB;
      var VB, yB, pB, lB, JB, YB;
      const gB = oT(oT({}, BB), {}, {
          sessionMeta: {
            id: BB.sessionId,
            attributes: cT(oT(oT(oT({}, null === (VB = dB.config.sessionTracking) || void 0 === VB || null === (VB = VB.session) || void 0 === VB ? void 0 : VB.attributes), null !== (yB = null === (pB = dB.metas.value.session) || void 0 === pB ? void 0 : pB.attributes) && void 0 !== yB ? yB : {}), {}, {
              isSampled: BB.isSampled.toString()
            }))
          }
        }),
        oB = null !== (lB = null === (JB = dB.metas.value.session) || void 0 === JB ? void 0 : JB.overrides) && void 0 !== lB ? lB : null === TB || void 0 === TB || null === (YB = TB.sessionMeta) || void 0 === YB ? void 0 : YB.overrides;
      qB(oB) || (gB.sessionMeta.overrides = oB);
      const kB = null === TB || void 0 === TB ? void 0 : TB.sessionId;
      return null != kB && (gB.sessionMeta.attributes.previousSession = kB), gB
    }

    function IT(BB) {
      let {
        fetchUserSession: TB,
        storeUserSession: dB
      } = BB, VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB, yB = !1;
      return function(BB) {
        if (yB) return;
        const pB = BB.session,
          lB = TB();
        let JB = null === pB || void 0 === pB ? void 0 : pB.id;
        const YB = null === pB || void 0 === pB ? void 0 : pB.attributes,
          gB = null === pB || void 0 === pB ? void 0 : pB.overrides,
          oB = null === lB || void 0 === lB ? void 0 : lB.sessionMeta,
          kB = null === oB || void 0 === oB ? void 0 : oB.overrides,
          LB = !!gB && !vT(gB, kB),
          OB = !!YB && !vT(YB, null === oB || void 0 === oB ? void 0 : oB.attributes);
        if (pB && JB !== (null === lB || void 0 === lB ? void 0 : lB.sessionId) || OB || LB) {
          var DB, uB;
          const BB = null != lB && JB === lB.sessionId,
            TB = rT(BB ? lB : wT({
              sessionId: JB,
              isSampled: kT(VB)
            }, VB), lB, VB),
            pB = null === lB || void 0 === lB || null === (DB = lB.sessionMeta) || void 0 === DB || null === (DB = DB.attributes) || void 0 === DB ? void 0 : DB.previousSession;
          BB && null != pB && pB !== TB.sessionId && (TB.sessionMeta.attributes.previousSession = pB), (null === (uB = TB.sessionMeta.attributes) || void 0 === uB ? void 0 : uB.previousSession) === TB.sessionId && delete TB.sessionMeta.attributes.previousSession, dB(TB),
            function(BB, TB) {
              let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var yB, pB, lB;
              if (!TB) return;
              const JB = dB.serviceName,
                YB = null !== (yB = null !== (pB = VB.serviceName) && void 0 !== pB ? pB : null === (lB = BB.metas.value.app) || void 0 === lB ? void 0 : lB.name) && void 0 !== yB ? yB : "";
              JB && JB !== YB && BB.api.pushEvent(MT, {
                serviceName: JB,
                previousServiceName: YB
              })
            }(VB, LB, gB, kB), yB = !0;
          try {
            VB.api.setSession(TB.sessionMeta)
          } finally {
            yB = !1
          }
        }
      }
    }

    function cT(BB) {
      const TB = {};
      for (const dB of Object.keys(BB)) {
        const VB = BB[dB];
        void 0 !== VB && (TB[dB] = VB)
      }
      return TB
    }

    function ST() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== BB && void 0 !== BB ? BB : {}, function() {
        const BB = new WeakSet;
        return function(TB, dB) {
          if (wB(dB) && null !== dB) {
            if (BB.has(dB)) return null;
            BB.add(dB)
          }
          return dB
        }
      }())
    }

    function PT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const TB = {};
      for (const [dB, VB] of Object.entries(BB)) TB[dB] = wB(VB) && null !== VB ? ST(VB) : String(VB);
      return TB
    }
    var QT = class BB {
      constructor() {
        var TB = this;
        let dB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uB;
        this.context = dB, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = BB => {
          this.adopting = !0;
          try {
            var TB;
            null === (TB = this.context.api) || void 0 === TB || TB.setSession(BB)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return TB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = KT({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: JB
        }), this.updateUserSession = FT({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: JB
        }, dB), this.init()
      }
      static removeUserSession() {
        dT(yB, BB.storageTypeLocal)
      }
      static storeUserSession(TB) {
        TT(yB, ST(TB), BB.storageTypeLocal)
      }
      static fetchUserSession() {
        const TB = BT(yB, BB.storageTypeLocal);
        return TB ? JSON.parse(TB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const TB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            TB && this.recordActivity(TB)
          }
        })), this.context.metas.addListener(IT({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    QT.storageTypeLocal = nB;
    var RT = class BB {
      constructor() {
        var TB = this;
        let dB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uB;
        this.context = dB, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return TB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = KT({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: JB
        }), this.updateUserSession = FT({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: JB
        }, dB), this.init()
      }
      static removeUserSession() {
        dT(yB, BB.storageTypeSession)
      }
      static storeUserSession(TB) {
        TT(yB, ST(TB), BB.storageTypeSession)
      }
      static fetchUserSession() {
        const TB = BT(yB, BB.storageTypeSession);
        return TB ? JSON.parse(TB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const TB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            TB && this.recordActivity(TB)
          }
        })), this.context.metas.addListener(IT({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    RT.storageTypeSession = bB;
    const aT = new WeakMap;

    function ZT(BB) {
      let TB = aT.get(BB);
      if (!TB) {
        let dB = [],
          VB = [];
        TB = {
          addSessionUpdateListener: BB => {
            dB.push(BB)
          },
          removeSessionUpdateListener: BB => {
            dB = dB.filter((TB => TB !== BB))
          },
          notifySessionUpdate: BB => {
            dB.forEach((TB => TB(BB)))
          },
          shouldCapture: () => VB.every((BB => BB())),
          addCaptureFilter: BB => {
            VB.push(BB)
          },
          removeCaptureFilter: BB => {
            VB = VB.filter((TB => TB !== BB))
          }
        }, aT.set(BB, TB)
      }
      return TB
    }
    var XT = class {
      constructor(BB, TB, dB) {
        this.metas = BB, this.transports = TB, this.onActivate = dB, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = BB => {
          var TB, dB, VB;
          const yB = this.pending;
          var pB, lB;
          if ("overrides" === BB.type) return void(this.pending = {
            reset: null !== (pB = null === yB || void 0 === yB ? void 0 : yB.reset) && void 0 !== pB && pB,
            inheritOverrides: null === (lB = null === yB || void 0 === yB ? void 0 : yB.inheritOverrides) || void 0 === lB || lB,
            session: oT(oT({}, null === yB || void 0 === yB ? void 0 : yB.session), {}, {
              overrides: oT(oT({}, null === yB || void 0 === yB ? void 0 : yB.session.overrides), BB.overrides)
            })
          });
          const JB = BB.session,
            YB = qB(JB) || null != JB && "id" in JB && !JB.id,
            gB = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.overrides) && void 0 !== TB ? TB : null === yB || void 0 === yB ? void 0 : yB.session.overrides;
          this.pending = {
            reset: YB || !(null === JB || void 0 === JB ? void 0 : JB.id) && null !== (dB = null === yB || void 0 === yB ? void 0 : yB.reset) && void 0 !== dB && dB,
            inheritOverrides: !(!BB.overrides && void 0 !== (null === JB || void 0 === JB ? void 0 : JB.overrides)) && (null === (VB = null === yB || void 0 === yB ? void 0 : yB.inheritOverrides) || void 0 === VB || VB),
            session: {
              id: null === JB || void 0 === JB ? void 0 : JB.id,
              attributes: (null === JB || void 0 === JB ? void 0 : JB.attributes) && oT({}, JB.attributes),
              overrides: BB.overrides ? oT(oT({}, null === yB || void 0 === yB ? void 0 : yB.session.overrides), BB.overrides) : gB && oT({}, gB)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var BB, TB;
        this.waiting = !0, ZT(this.metas).addSessionUpdateListener(this.recordUpdate), ZT(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (BB = (TB = this.metas).addCaptureListener) || void 0 === BB || BB.call(TB, this.activate), this.activate()
      }
      destroy() {
        var BB, TB;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), ZT(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (BB = (TB = this.metas).removeCaptureListener) || void 0 === BB || BB.call(TB, this.activate), ZT(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function WT(BB) {
      return (null === BB || void 0 === BB ? void 0 : BB.persistent) ? QT : RT
    }

    function hT() {}
    let CT = function(BB) {
      return BB[BB.OFF = 0] = "OFF", BB[BB.ERROR = 1] = "ERROR", BB[BB.WARN = 2] = "WARN", BB[BB.INFO = 3] = "INFO", BB[BB.VERBOSE = 4] = "VERBOSE", BB
    }({});
    const GT = {
        debug: hT,
        error: hT,
        info: hT,
        prefix: "Faro",
        warn: hT
      },
      qT = 1;

    function xT(BB) {
      return xT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, xT(BB)
    }

    function jT(BB) {
      var TB = function(BB, TB) {
        if ("object" != xT(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != xT(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == xT(TB) ? TB : TB + ""
    }

    function AT(BB, TB, dB) {
      return (TB = jT(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function bT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function nT(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? bT(Object(dB), !0).forEach((function(TB) {
          AT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : bT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }
    const eT = nT({}, console);
    var Bd = class {
        constructor() {
          this.unpatchedConsole = eT, this.internalLogger = GT, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
          this.internalLogger.debug(`${this.name}\n`, ...TB)
        }
        logInfo() {
          for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
          this.internalLogger.info(`${this.name}\n`, ...TB)
        }
        logWarn() {
          for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
          this.internalLogger.warn(`${this.name}\n`, ...TB)
        }
        logError() {
          for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
          this.internalLogger.error(`${this.name}\n`, ...TB)
        }
      },
      Td = class extends Bd {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const dd = "2.12.1";
    var Vd = class extends Td {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = dd, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(BB) {
        var TB;
        const dB = BB.session;
        if (dB && dB.id !== (null === (TB = this.notifiedSession) || void 0 === TB ? void 0 : TB.id)) {
          var VB;
          if (this.isAdoptingSession()) return void(this.notifiedSession = dB);
          if (this.notifiedSession && this.notifiedSession.id === (null === (VB = dB.attributes) || void 0 === VB ? void 0 : VB.previousSession)) return this.api.pushEvent(sT, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = dB);
          this.notifiedSession = dB, this.api.pushEvent(tT, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(BB, TB, dB) {
        const VB = null === dB || void 0 === dB ? void 0 : dB.session;
        let yB, pB, lB = BB.fetchUserSession();
        if (TB.persistent && TB.maxSessionPersistenceTime && lB) {
          const BB = LT();
          lB.lastActivity < BB - TB.maxSessionPersistenceTime && (QT.removeUserSession(), lB = null)
        }
        const JB = UT(lB);
        if ((null === dB || void 0 === dB ? void 0 : dB.reset) || !JB || (null === VB || void 0 === VB ? void 0 : VB.id) && VB.id !== (null === lB || void 0 === lB ? void 0 : lB.sessionId)) {
          var YB, gB, oB, kB, LB, OB;
          pB = wT({
            sessionId: (null === dB || void 0 === dB ? void 0 : dB.reset) ? void 0 : null !== (YB = null === VB || void 0 === VB ? void 0 : VB.id) && void 0 !== YB ? YB : null === (gB = TB.session) || void 0 === gB ? void 0 : gB.id,
            isSampled: kT(this)
          }, this);
          const BB = pB.sessionId,
            DB = dB && JB ? null === lB || void 0 === lB || null === (oB = lB.sessionMeta) || void 0 === oB ? void 0 : oB.overrides : void 0,
            uB = DB ? oT(oT({}, null === (kB = TB.session) || void 0 === kB ? void 0 : kB.overrides), DB) : null === (LB = TB.session) || void 0 === LB ? void 0 : LB.overrides;
          pB.sessionMeta = oT({
            id: BB,
            attributes: oT({
              isSampled: pB.isSampled.toString()
            }, null === (OB = TB.session) || void 0 === OB ? void 0 : OB.attributes)
          }, uB ? {
            overrides: uB
          } : {}), yB = tT
        } else {
          var DB, uB;
          const BB = null === lB || void 0 === lB ? void 0 : lB.sessionId;
          pB = wT({
            sessionId: BB,
            isSampled: lB.isSampled || !1,
            started: null === lB || void 0 === lB ? void 0 : lB.started
          }, this);
          const dB = null === lB || void 0 === lB ? void 0 : lB.sessionMeta,
            VB = oT(oT({}, null === (DB = TB.session) || void 0 === DB ? void 0 : DB.overrides), null === dB || void 0 === dB ? void 0 : dB.overrides);
          pB.sessionMeta = oT(oT({}, TB.session), {}, {
            id: BB,
            attributes: oT(oT(oT({}, null === (uB = TB.session) || void 0 === uB ? void 0 : uB.attributes), null === dB || void 0 === dB ? void 0 : dB.attributes), {}, {
              isSampled: pB.isSampled.toString()
            }),
            overrides: VB
          }), yB = fT
        }
        var HB;
        if (VB && (pB.sessionMeta = oT(oT({}, pB.sessionMeta), {}, {
            attributes: oT(oT(oT({}, null === (HB = pB.sessionMeta) || void 0 === HB ? void 0 : HB.attributes), VB.attributes), {}, {
              isSampled: pB.isSampled.toString()
            })
          }), VB.overrides)) {
          const BB = (null === dB || void 0 === dB ? void 0 : dB.inheritOverrides) ? oT(oT({}, pB.sessionMeta.overrides), VB.overrides) : VB.overrides;
          Object.keys(BB).length > 0 ? pB.sessionMeta.overrides = BB : delete pB.sessionMeta.overrides
        }
        return {
          initialSession: pB,
          lifecycleType: yB
        }
      }
      registerBeforeSendHook(BB) {
        var TB;
        this.beforeSendHook = TB => {
          var dB, VB;
          const yB = null === (dB = TB.meta.session) || void 0 === dB ? void 0 : dB.id;
          yB && !this.transports.isPaused() && BB(yB);
          const pB = null === (VB = TB.meta.session) || void 0 === VB ? void 0 : VB.attributes;
          if (pB && "true" === (null === pB || void 0 === pB ? void 0 : pB.isSampled)) {
            var lB;
            let BB = JSON.parse(JSON.stringify(TB));
            const dB = null === (lB = BB.meta.session) || void 0 === lB ? void 0 : lB.attributes;
            var JB;
            if (null === dB || void 0 === dB || delete dB.isSampled, 0 === Object.keys(null !== dB && void 0 !== dB ? dB : {}).length) null === (JB = BB.meta.session) || void 0 === JB || delete JB.attributes;
            return BB
          }
          return null
        }, null === (TB = this.transports) || void 0 === TB || TB.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var BB;
        this.logDebug("init session instrumentation");
        const TB = document.prerendering;
        var dB;
        if ((null === (BB = this.config.sessionTracking) || void 0 === BB ? void 0 : BB.enabled) && (TB || this.prerenderSession)) return null !== (dB = this.prerenderSession) && void 0 !== dB || (this.prerenderSession = new XT(this.metas, this.transports, (BB => {
          this.prerenderSession = void 0, this.initializeSession(BB)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(BB) {
        const TB = this.config.sessionTracking;
        if (null === TB || void 0 === TB ? void 0 : TB.enabled) {
          var dB, VB;
          const yB = WT(TB),
            pB = new yB(this);
          this.isAdoptingSession = pB.isAdopting, this.registerBeforeSendHook(pB.recordActivity);
          const {
            initialSession: lB,
            lifecycleType: JB
          } = this.createInitialSession(yB, TB, BB);
          yB.storeUserSession(lB);
          const YB = lB.sessionMeta;
          this.notifiedSession = YB, this.api.setSession(YB), this.captureListener = () => {
            this.transports.isPaused() || pB.updateSession({
              refreshActivity: !1
            })
          }, null === (dB = (VB = this.metas).addCaptureListener) || void 0 === dB || dB.call(VB, this.captureListener), JB === tT && this.api.pushEvent(tT, {}, void 0, {
            skipDedupe: !0
          }), JB === fT && this.api.pushEvent(fT, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var BB, TB, dB;
        (null === (BB = this.prerenderSession) || void 0 === BB || BB.destroy(), this.captureListener) && (null === (TB = (dB = this.metas).removeCaptureListener) || void 0 === TB || TB.call(dB, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function yd(BB, TB, dB, VB) {
      const yB = {
        filename: BB || document.location.href,
        function: TB || "?"
      };
      return void 0 !== dB && (yB.lineno = dB), void 0 !== VB && (yB.colno = VB), yB
    }
    const pd = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ld = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Jd = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Yd = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      gd = "safari-extension",
      od = "safari-web-extension",
      kd = /Minified React error #\d+;/i;

    function Ld(BB, TB) {
      const dB = null === BB || void 0 === BB ? void 0 : BB.includes(gd),
        VB = !dB && (null === BB || void 0 === BB ? void 0 : BB.includes("safari-web-extension"));
      return dB || VB ? [(null === BB || void 0 === BB ? void 0 : BB.includes("@")) ? BB.split("@")[0] : BB, dB ? `${gd}:${TB}` : `${od}:${TB}`] : [BB, TB]
    }
    const Od = 1024;

    function Dd(BB) {
      let TB = [];
      BB.stacktrace ? TB = BB.stacktrace.split("\n").filter(((BB, TB) => TB % 2 === 0)) : BB.stack && (TB = BB.stack.split("\n"));
      const dB = TB.reduce(((TB, dB, VB) => {
        if (dB.length > Od) return TB;
        let yB, pB, lB, JB, YB;
        if (yB = pd.exec(dB)) {
          if (pB = yB[1], lB = yB[2], JB = yB[3], YB = yB[4], null === lB || void 0 === lB ? void 0 : lB.startsWith("eval")) {
            const BB = ld.exec(lB);
            BB && (lB = BB[1], JB = BB[2], YB = BB[3])
          }
          lB = (null === lB || void 0 === lB ? void 0 : lB.startsWith("address at ")) ? lB.substring(11) : lB, [pB, lB] = Ld(pB, lB)
        } else if (yB = Jd.exec(dB)) {
          if (pB = yB[1], lB = yB[3], JB = yB[4], YB = yB[5], lB && lB.includes(" > eval")) {
            const BB = Yd.exec(lB);
            BB && (pB = pB || "eval", lB = BB[1], JB = BB[2])
          } else 0 === VB && !YB && fB(BB.columnNumber) && (YB = String(BB.columnNumber + 1));
          [pB, lB] = Ld(pB, lB)
        }
        return (lB || pB) && TB.push(yd(lB, pB, JB ? Number(JB) : void 0, YB ? Number(YB) : void 0)), TB
      }), []);
      return kd.test(BB.message) ? dB.slice(1) : dB
    }

    function ud(BB) {
      return {
        frames: Dd(BB)
      }
    }
    const Hd = "http-request-start",
      Ed = "http-request-end";
    var vd = class BB {
      constructor() {
        this.subscribers = []
      }
      subscribe(BB) {
        return this.subscribers.push(BB), {
          unsubscribe: () => this.unsubscribe(BB)
        }
      }
      unsubscribe(BB) {
        this.subscribers = this.subscribers.filter((TB => TB !== BB))
      }
      notify(BB) {
        this.subscribers.forEach((TB => TB(BB)))
      }
      first() {
        const TB = new BB,
          dB = BB => {
            TB.notify(BB), VB.unsubscribe()
          },
          VB = this.subscribe(dB),
          yB = TB.unsubscribe.bind(TB);
        return this.withUnsubscribeOverride(TB, yB, dB)
      }
      takeWhile(TB) {
        const dB = new BB,
          VB = BB => {
            TB(BB) ? dB.notify(BB) : dB.unsubscribe(VB)
          };
        this.subscribe(VB);
        const yB = dB.unsubscribe.bind(dB);
        return this.withUnsubscribeOverride(dB, yB, VB)
      }
      filter(TB) {
        const dB = new BB,
          VB = BB => {
            TB(BB) && dB.notify(BB)
          };
        this.subscribe(VB);
        const yB = dB.unsubscribe.bind(dB);
        return this.withUnsubscribeOverride(dB, yB, VB)
      }
      merge() {
        const TB = new BB,
          dB = [];
        for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
        yB.forEach((BB => {
          const VB = BB.subscribe((BB => {
            TB.notify(BB)
          }));
          dB.push(VB)
        }));
        const lB = TB.unsubscribeAll.bind(TB);
        return TB.unsubscribe = () => {
          dB.forEach((BB => BB.unsubscribe())), lB()
        }, TB
      }
      withUnsubscribeOverride(BB, TB, dB) {
        return BB.unsubscribe = BB => {
          TB(BB), this.unsubscribe(dB)
        }, BB
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let md = function(BB) {
      return BB.TRACE = "trace", BB.DEBUG = "debug", BB.INFO = "info", BB.LOG = "log", BB.WARN = "warn", BB.ERROR = "error", BB
    }({});
    const Nd = "log",
      td = ["trace", "debug", "info", "log", "warn", "error"];
    let fd, sd = !1;
    const Md = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      zd = "Error",
      wd = BB => BB.map((BB => wB(BB) ? ST(BB) : String(BB))).join(" ");

    function Ud(BB) {
      let TB, dB, VB, yB, pB = [];
      if (RB(BB) && BB.error) TB = BB.error.message, dB = BB.error.name, pB = Dd(BB.error);
      else if ((VB = aB(BB)) || ZB(BB)) {
        const {
          name: yB,
          message: pB
        } = BB;
        dB = null !== yB && void 0 !== yB ? yB : VB ? "DOMError" : "DOMException", TB = pB ? `${dB}: ${pB}` : dB
      } else QB(BB) ? (dB = BB.name, TB = BB.message, pB = Dd(BB)) : (wB(BB) || (yB = SB(BB))) && (dB = yB ? BB.constructor.name : void 0, TB = `Non-Error exception captured with keys: ${Object.keys(BB)}`);
      return [TB, dB, pB]
    }

    function Fd(BB) {
      const [TB, dB, VB, yB, pB] = BB;
      let lB, JB, YB = [];
      const gB = tB(TB),
        oB = yd(dB, "?", VB, yB);
      return pB || !gB ? ([lB, JB, YB] = Ud(null !== pB && void 0 !== pB ? pB : TB), 0 === YB.length && (YB = [oB])) : gB && ([lB, JB] = function(BB) {
        var TB, dB;
        const VB = BB.match(Md),
          yB = null !== (TB = null === VB || void 0 === VB ? void 0 : VB[1]) && void 0 !== TB ? TB : zd;
        return [null !== (dB = null === VB || void 0 === VB ? void 0 : VB[2]) && void 0 !== dB ? dB : BB, yB]
      }(TB), YB = [oB]), {
        value: lB,
        type: JB,
        stackFrames: YB
      }
    }

    function Kd(BB, TB) {
      return QB(BB[0]) ? Fd(BB) : {
        value: TB(BB)
      }
    }
    const rd = BB => BB.map((BB => {
      try {
        return String(BB)
      } catch (TB) {
        return ""
      }
    })).join(" ");
    var Id = class BB extends Td {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = dd, this.errorSerializer = rd
      }
      initialize() {
        var TB, dB;
        const VB = this.config.consoleInstrumentation,
          yB = (null === VB || void 0 === VB ? void 0 : VB.serializeErrors) || !!(null === VB || void 0 === VB ? void 0 : VB.errorSerializer);
        this.errorSerializer = yB ? null !== (TB = null === VB || void 0 === VB ? void 0 : VB.errorSerializer) && void 0 !== TB ? TB : wd : rd;
        const pB = null !== (dB = null === VB || void 0 === VB ? void 0 : VB.disabledLevels) && void 0 !== dB ? dB : BB.defaultDisabledLevels,
          lB = function(BB) {
            if (fd || (fd = new vd), !sd) {
              const TB = null !== BB && void 0 !== BB ? BB : eT;
              td.forEach((BB => {
                console[BB] = function() {
                  for (var dB, VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
                  fd.notify({
                    type: "console",
                    level: BB,
                    args: yB
                  }), null === (dB = TB[BB]) || void 0 === dB || dB.apply(console, yB)
                }
              })), sd = !0
            }
            return fd
          }(this.unpatchedConsole);
        this.subscription = lB.subscribe((TB => {
          let {
            level: dB,
            args: yB
          } = TB;
          if (!pB.includes(dB)) try {
            if (dB !== md.ERROR || (null === VB || void 0 === VB ? void 0 : VB.consoleErrorAsLog))
              if (dB === md.ERROR && (null === VB || void 0 === VB ? void 0 : VB.consoleErrorAsLog)) {
                const {
                  value: TB,
                  type: VB,
                  stackFrames: pB
                } = Kd(yB, this.errorSerializer);
                this.api.pushLog(TB ? [BB.consoleErrorPrefix + TB] : yB, {
                  level: dB,
                  context: {
                    value: null !== TB && void 0 !== TB ? TB : "",
                    type: null !== VB && void 0 !== VB ? VB : "",
                    stackFrames: (null === pB || void 0 === pB ? void 0 : pB.length) ? wd(pB) : ""
                  }
                })
              } else this.api.pushLog(yB, {
                level: dB
              });
            else {
              const {
                value: TB,
                type: dB,
                stackFrames: VB
              } = Kd(yB, this.errorSerializer);
              if (TB && !dB && !VB) return void this.api.pushError(new Error(BB.consoleErrorPrefix + TB));
              this.api.pushError(new Error(BB.consoleErrorPrefix + TB), {
                type: dB,
                stackFrames: VB
              })
            }
          } catch (lB) {
            this.logError(lB)
          }
        }))
      }
      destroy() {
        var BB;
        null === (BB = this.subscription) || void 0 === BB || BB.unsubscribe(), this.subscription = void 0
      }
    };
    Id.defaultDisabledLevels = [md.DEBUG, md.TRACE, md.LOG], Id.consoleErrorPrefix = "console.error: ";
    const cd = [];
    var Sd = class extends Td {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = dd
      }
      initialize() {
        this.logDebug("Initializing"),
          function(BB) {
            const TB = window.onerror;
            window.onerror = function() {
              for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
              try {
                const {
                  value: TB,
                  type: dB,
                  stackFrames: yB
                } = Fd(VB), pB = VB[4];
                if (TB) {
                  const VB = {
                    type: dB,
                    stackFrames: yB
                  };
                  null != pB && (VB.originalError = pB), BB.pushError(new Error(TB), VB)
                }
              } finally {
                null === TB || void 0 === TB || TB.apply(window, VB)
              }
            }
          }(this.api),
          function(BB) {
            const TB = TB => {
              var dB;
              let VB, yB, pB = TB;
              if (pB.reason) pB = TB.reason;
              else if (null === (dB = TB.detail) || void 0 === dB ? void 0 : dB.reason) {
                var lB;
                pB = null === (lB = TB.detail) || void 0 === lB ? void 0 : lB.reason
              }
              let JB = [];
              IB(pB) ? (VB = `Non-Error promise rejection captured with value: ${String(pB)}`, yB = "UnhandledRejection") : [VB, yB, JB] = Ud(pB), VB && BB.pushError(new Error(VB), {
                type: yB,
                stackFrames: JB
              })
            };
            window.addEventListener("unhandledrejection", TB), cd.push(TB)
          }(this.api)
      }
    };
    const Pd = "unknown";
    var Qd = class extends Td {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = dd, this.waitingForActivation = !1, this.sendViewChangedEvent = BB => {
          var TB;
          if (this.waitingForActivation || document.prerendering) return;
          const dB = BB.view;
          if (dB && dB.name !== (null === (TB = this.notifiedView) || void 0 === TB ? void 0 : TB.name)) {
            var VB, yB, pB;
            const BB = null !== (VB = null === (yB = this.notifiedView) || void 0 === yB ? void 0 : yB.name) && void 0 !== VB ? VB : Pd;
            this.notifiedView = dB, this.api.pushEvent(NT, {
              fromView: BB,
              toView: null !== (pB = dB.name) && void 0 !== pB ? pB : Pd
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
    class Rd {
      t;
      o = 0;
      i = [];
      l(BB) {
        if (BB.hadRecentInput) return;
        const TB = this.i[0],
          dB = this.i.at(-1);
        this.o && TB && dB && BB.startTime - dB.startTime < 1e3 && BB.startTime - TB.startTime < 5e3 ? (this.o += BB.value, this.i.push(BB)) : (this.o = BB.value, this.i = [BB]), this.t?.(BB)
      }
    }
    const ad = () => {
        const BB = performance.getEntriesByType("navigation")[0];
        if (BB && BB.responseStart > 0 && BB.responseStart < performance.now()) return BB
      },
      Zd = BB => {
        if ("loading" === document.readyState) return "loading";
        const TB = ad();
        if (TB) {
          if (BB < TB.domInteractive) return "loading";
          if (0 === TB.domContentLoadedEventStart || BB < TB.domContentLoadedEventStart) return "dom-interactive";
          if (0 === TB.domComplete || BB < TB.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Xd = BB => {
        const TB = BB.nodeName;
        return 1 === BB.nodeType ? TB.toLowerCase() : TB.toUpperCase().replace(/^#/, "")
      },
      Wd = BB => {
        let TB = "";
        try {
          for (; 9 !== BB?.nodeType;) {
            const dB = BB,
              VB = dB.id ? "#" + dB.id : [Xd(dB), ...Array.from(dB.classList ?? []).sort()].join(".");
            if (TB.length + VB.length > 99) return TB || VB;
            if (TB = TB ? VB + ">" + TB : VB, dB.id) break;
            BB = dB.parentNode
          }
        } catch {}
        return TB
      },
      hd = new WeakMap;

    function Cd(BB, TB) {
      let dB = hd.get(TB);
      return dB || (dB = new WeakMap, hd.set(TB, dB)), dB.get(BB) || dB.set(BB, new TB), dB.get(BB)
    }
    let Gd = -1;
    const qd = () => Gd,
      xd = BB => {
        addEventListener("pageshow", (TB => {
          TB.persisted && (Gd = TB.timeStamp, BB(TB))
        }), !0)
      },
      jd = (BB, TB, dB, VB) => {
        let yB, pB;
        return lB => {
          TB.value >= 0 && (lB || VB) && (pB = TB.value - (yB ?? 0), (pB || void 0 === yB) && (yB = TB.value, TB.delta = pB, TB.rating = ((BB, TB) => BB > TB[1] ? "poor" : BB > TB[0] ? "needs-improvement" : "good")(TB.value, dB), BB(TB)))
        }
      },
      Ad = BB => {
        requestAnimationFrame((() => requestAnimationFrame((() => BB()))))
      },
      bd = () => ad()?.activationStart ?? 0;
    let nd = -1;
    const ed = new Set,
      BV = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      TV = BB => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === BB.type)
            for (const BB of ed) BB();
          isFinite(nd) || (nd = "visibilitychange" === BB.type ? BB.timeStamp : 0, removeEventListener("prerenderingchange", TV, !0))
        }
      },
      dV = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (nd = 1 / 0), nd < 0) {
          const BB = bd(),
            TB = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((TB => "hidden" === TB.name && TB.startTime >= BB))?.startTime;
          nd = TB ?? BV(), addEventListener("visibilitychange", TV, !0), addEventListener("prerenderingchange", TV, !0), xd((() => {
            setTimeout((() => {
              nd = BV()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return nd
          },
          onHidden(BB) {
            ed.add(BB)
          }
        }
      },
      VV = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0,
          lB = arguments.length > 6 ? arguments[6] : void 0;
        const JB = ad(),
          YB = JB?.navigationId || 0;
        let gB = "navigate";
        return dB ? gB = dB : qd() >= 0 ? gB = "back-forward-cache" : JB && (document.prerendering || bd() > 0 ? gB = "prerender" : document.wasDiscarded ? gB = "restore" : JB.type && (gB = JB.type.replace(/_/g, "-"))), {
          name: BB,
          value: TB,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: gB,
          navigationId: VB || YB,
          navigationInteractionId: yB,
          navigationURL: pB || JB?.name,
          navigationStartTime: lB || 0
        }
      },
      yV = function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const VB = BB.filter((BB => PerformanceObserver.supportedEntryTypes.includes(BB)));
          if (VB.length > 0) {
            const BB = new PerformanceObserver((BB => {
              queueMicrotask((() => {
                const dB = BB.getEntries();
                VB.length > 1 && dB.sort(((BB, TB) => BB.startTime + BB.duration - (TB.startTime + TB.duration))), TB(dB)
              }))
            }));
            for (const TB of VB) BB.observe({
              type: TB,
              buffered: !0,
              ...dB
            });
            return BB
          }
        } catch {}
      },
      pV = BB => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && BB && BB.reportSoftNavs,
      lV = (BB, TB) => {
        if (BB.set(TB.navigationId, TB), BB.size > 2) {
          const TB = BB.keys().next().value;
          void 0 !== TB && BB.delete(TB)
        }
      },
      JV = BB => {
        let TB = !1;
        return () => {
          TB || (BB(), TB = !0)
        }
      };
    class YV {
      u
    }
    const gV = BB => {
        document.prerendering ? addEventListener("prerenderingchange", BB, !0) : BB()
      },
      oV = [1800, 3e3],
      kV = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const dB = pV(TB);
        gV((() => {
          const VB = Cd(TB, YV),
            yB = dV();
          let pB, lB = VV("FCP");
          const JB = yV(["paint"], (BB => {
            for (const TB of BB) "first-contentful-paint" === TB.name && (JB.disconnect(), TB.startTime < yB.firstHiddenTime && (lB.value = Math.max(TB.startTime - bd(), 0), lB.entries.push(TB), lB.navigationId = TB.navigationId || lB.navigationId, pB(!0)))
          }));
          JB && (pB = jd(BB, lB, oV, TB.reportAllChanges), xd((dB => {
            lB = VV("FCP", -1, "back-forward-cache", lB.navigationId, lB.navigationInteractionId, lB.navigationURL, qd()), pB = jd(BB, lB, oV, TB.reportAllChanges), Ad((() => {
              lB.value = performance.now() - dB.timeStamp, pB(!0)
            }))
          }))), dB && yV(["soft-navigation"], (dB => {
            dB.forEach((dB => {
              VB.u && dB.navigationId && lV(VB.u, dB);
              const yB = Math.max((dB.presentationTime || dB.paintTime || 0) - dB.startTime, 0);
              lB = VV("FCP", yB, "soft-navigation", dB.navigationId, dB.interactionId, dB.name, dB.startTime), pB = jd(BB, lB, oV, TB.reportAllChanges), pB(!0)
            }))
          }), TB)
        }))
      },
      LV = [.1, .25],
      OV = BB => BB.find((BB => 1 === BB.node?.nodeType)) || BB[0];
    let DV = 0,
      uV = 1 / 0,
      HV = 0;
    const EV = BB => {
      for (const TB of BB) TB.interactionId && (uV = Math.min(uV, TB.interactionId), HV = Math.max(HV, TB.interactionId), DV = HV ? (HV - uV) / 7 + 1 : 0)
    };
    let vV;
    const mV = () => vV ? DV : performance.interactionCount ?? 0;
    class iV {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return mV() - this.h
      }
      D() {
        this.h = mV(), this.v.length = 0, this.p.clear()
      }
      S(BB) {
        const TB = this.T(),
          dB = Math.min(this.v.length - 1, Math.floor(TB / 50));
        return !TB || -1 !== dB || "soft-navigation" !== BB && "back-forward-cache" !== BB ? this.v[dB] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(BB) {
        if (this.m?.(BB), !BB.interactionId) return;
        const TB = this.v.at(-1);
        let dB = this.p.get(BB.interactionId);
        if (dB || this.v.length < 10 || BB.duration > TB.k) {
          if (dB ? BB.duration > dB.k ? (dB.entries = [BB], dB.k = BB.duration) : BB.duration === dB.k && BB.startTime === dB.entries[0].startTime && dB.entries.push(BB) : (dB = {
              id: BB.interactionId,
              entries: [BB],
              k: BB.duration
            }, this.p.set(dB.id, dB), this.v.push(dB)), this.v.sort(((BB, TB) => TB.k - BB.k)), this.v.length > 10) {
            const BB = this.v.splice(10);
            for (const TB of BB) this.p.delete(TB.id)
          }
          this.M?.(dB)
        }
      }
    }
    const NV = BB => {
        const TB = "requestIdleCallback" in globalThis ? 1e3 : 0,
          dB = globalThis.requestIdleCallback || setTimeout,
          VB = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) BB();
        else {
          const yB = JV(BB);
          let pB = -1;
          const lB = () => {
            VB(pB), yB()
          };
          addEventListener("visibilitychange", lB, {
            once: !0,
            capture: !0
          }), pB = dB((() => {
            removeEventListener("visibilitychange", lB, {
              capture: !0
            }), yB()
          }), {
            timeout: TB
          })
        }
      },
      tV = [200, 500],
      fV = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const dB = Cd(TB = Object.assign({}, TB), iV);
        let VB = [],
          yB = [],
          pB = 0;
        const lB = new WeakMap,
          JB = new WeakMap;
        let YB = !1;
        const gB = () => {
            YB || (YB = !0, NV(oB))
          },
          oB = () => {
            const BB = new Set(dB.v.map((BB => lB.get(BB.entries[0])))),
              TB = yB.length - 10;
            yB = yB.filter(((dB, VB) => VB >= TB || BB.has(dB)));
            const JB = new Set;
            for (const dB of yB) {
              const BB = kB(dB.startTime, dB.processingEnd);
              for (const TB of BB) JB.add(TB)
            }
            const gB = VB.length - 10;
            VB = VB.filter(((BB, TB) => JB.has(BB) || TB >= gB && BB.startTime > pB)), YB = !1
          };
        dB.m = BB => {
          const dB = BB.startTime + BB.duration;
          let VB;
          pB = Math.max(pB, BB.processingEnd);
          for (let pB = yB.length - 1; pB >= 0; pB--) {
            const lB = yB[pB];
            if (Math.abs(dB - lB.renderTime) <= 8) {
              VB = lB, VB.startTime = Math.min(BB.startTime, VB.startTime), VB.processingStart = Math.min(BB.processingStart, VB.processingStart), VB.processingEnd = Math.max(BB.processingEnd, VB.processingEnd), TB.includeProcessedEventEntries && VB.entries.push(BB);
              break
            }
          }
          VB || (VB = {
            startTime: BB.startTime,
            processingStart: BB.processingStart,
            processingEnd: BB.processingEnd,
            renderTime: dB,
            entries: TB.includeProcessedEventEntries ? [BB] : []
          }, yB.push(VB)), BB.interactionId && lB.set(BB, VB), gB()
        }, dB.M = BB => {
          if (!JB.get(BB)) {
            const dB = BB.entries.find((BB => BB.target))?.target;
            if (dB) {
              const VB = TB.generateTarget?.(dB) ?? Wd(dB);
              JB.set(BB, VB)
            } else {
              const TB = BB.entries.find((BB => BB.targetSelector))?.targetSelector;
              TB && JB.set(BB, TB)
            }
          }
        };
        const kB = (BB, TB) => {
          const dB = [];
          for (const yB of VB)
            if (!(yB.startTime + yB.duration < BB)) {
              if (yB.startTime > TB) break;
              dB.push(yB)
            } return dB
        };
        yV(["long-animation-frame"], (BB => {
            VB = VB.concat(BB), gB()
          }), TB),
          function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const dB = dV();
            gV((() => {
              "interactionCount" in performance || vV || (vV = yV(["event"], EV, {
                durationThreshold: 0
              }));
              let VB, yB = VV("INP");
              const pB = Cd(TB, iV),
                lB = (dB, lB, JB, YB, gB) => {
                  pB.D(), yB = VV("INP", -1, dB, lB, JB, YB, gB), VB = jd(BB, yB, tV, TB.reportAllChanges)
                },
                JB = () => {
                  const BB = pB.S(yB.navigationType);
                  BB && BB.k !== yB.value && (yB.value = BB.k, yB.entries = BB.entries, VB())
                },
                YB = BB => {
                  JB(), VB(!0), lB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                },
                gB = function(BB) {
                  let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  NV((() => {
                    for (const TB of BB) "soft-navigation" !== TB.entryType ? pB.l(TB) : YB(TB);
                    JB(), TB && VB(!0)
                  }))
                },
                oB = ["event", "first-input"];
              pV(TB) && oB.push("soft-navigation");
              const kB = yV(oB, gB, {
                ...TB,
                durationThreshold: TB.durationThreshold ?? 40
              });
              VB = jd(BB, yB, tV, TB.reportAllChanges), kB && (dB.onHidden((() => {
                gB(kB.takeRecords(), !0)
              })), xd((() => {
                lB("back-forward-cache", yB.navigationId, yB.navigationInteractionId, yB.navigationURL, qd())
              })))
            }))
          }((TB => {
            BB((BB => {
              if (0 === BB.entries.length) {
                const TB = BB.navigationStartTime || 0,
                  dB = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: BB.value,
                    loadState: Zd(TB)
                  };
                return Object.assign(BB, {
                  attribution: dB
                })
              }
              const TB = BB.entries[0],
                VB = lB.get(TB),
                yB = Math.max(VB.processingStart, TB.startTime),
                pB = Math.max(TB.startTime + TB.duration, yB),
                YB = Math.min(VB.processingEnd, pB),
                gB = VB.entries.sort(((BB, TB) => BB.processingStart - TB.processingStart)),
                oB = kB(TB.startTime, YB),
                LB = dB.p.get(TB.interactionId),
                OB = {
                  interactionTarget: JB.get(LB),
                  interactionType: TB.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: TB.startTime,
                  nextPaintTime: pB,
                  processedEventEntries: gB,
                  longAnimationFrameEntries: oB,
                  inputDelay: yB - TB.startTime,
                  processingDuration: YB - yB,
                  presentationDelay: pB - YB,
                  loadState: Zd(TB.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (BB => {
                const TB = BB.interactionTime,
                  dB = BB.nextPaintTime;
                if (!BB.longAnimationFrameEntries?.length || !TB || !dB) return;
                const VB = BB.inputDelay,
                  yB = BB.processingDuration;
                let pB, lB, JB = 0,
                  YB = 0,
                  gB = 0,
                  oB = 0;
                for (const OB of BB.longAnimationFrameEntries) {
                  YB = YB + OB.startTime + OB.duration - OB.styleAndLayoutStart;
                  for (const BB of OB.scripts) {
                    const dB = BB.startTime + BB.duration;
                    if (dB < TB) continue;
                    const gB = dB - Math.max(TB, BB.startTime),
                      kB = BB.duration ? gB / BB.duration * BB.forcedStyleAndLayoutDuration : 0;
                    JB += gB - kB, YB += kB, gB > oB && (lB = BB.startTime < TB + VB ? "input-delay" : BB.startTime >= TB + VB + yB ? "presentation-delay" : "processing-duration", pB = BB, oB = gB)
                  }
                }
                const kB = BB.longAnimationFrameEntries.at(-1),
                  LB = kB ? kB.startTime + kB.duration : 0;
                LB >= TB + VB + yB && (gB = dB - LB), pB && lB && (BB.longestScript = {
                  entry: pB,
                  subpart: lB,
                  intersectingDuration: oB
                }), BB.totalScriptDuration = JB, BB.totalStyleAndLayoutDuration = YB, BB.totalPaintDuration = gB, BB.totalUnattributedDuration = dB - TB - JB - YB - gB
              })(OB), Object.assign(BB, {
                attribution: OB
              })
            })(TB))
          }), TB)
      };
    class sV {
      m;
      u;
      l(BB) {
        this.m?.(BB)
      }
    }
    const MV = [2500, 4e3];
    let zV = 50;
    const wV = [];
    yV(["resource"], (BB => {
      for (const TB of BB) wV.push(TB), wV.length > zV && wV.shift()
    }));
    const UV = [800, 1800],
      FV = BB => {
        document.prerendering ? gV((() => FV(BB))) : "complete" !== document.readyState ? addEventListener("load", (() => FV(BB)), !0) : setTimeout(BB)
      },
      KV = "load_state",
      rV = "time_to_first_byte";
    var IV = class {
        constructor(BB, TB) {
          this.corePushMeasurement = BB, this.webVitalConfig = TB
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var BB;
          ! function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const dB = Cd(TB = Object.assign({}, TB), Rd),
              VB = new WeakMap;
            dB.t = BB => {
                if (BB?.sources?.length) {
                  const dB = OV(BB.sources),
                    yB = dB?.node;
                  if (yB) {
                    const BB = TB.generateTarget?.(yB) ?? Wd(yB);
                    VB.set(dB, BB)
                  }
                }
              },
              function(BB) {
                let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const dB = dV();
                kV(JV((() => {
                  let VB, yB = VV("CLS", 0);
                  const pB = Cd(TB, Rd),
                    lB = (dB, lB, JB, YB, gB) => {
                      yB = VV("CLS", 0, dB, lB, JB, YB, gB), pB.o = 0, VB = jd(BB, yB, LV, TB.reportAllChanges)
                    },
                    JB = function() {
                      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      pB.o > yB.value && (yB.value = pB.o, yB.entries = pB.i), VB(BB)
                    },
                    YB = BB => {
                      JB(!0), lB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                    },
                    gB = BB => {
                      for (const TB of BB) "soft-navigation" !== TB.entryType ? pB.l(TB) : YB(TB);
                      JB()
                    },
                    oB = ["layout-shift"];
                  pV(TB) && oB.push("soft-navigation");
                  const kB = yV(oB, gB);
                  kB && (VB = jd(BB, yB, LV, TB.reportAllChanges), dB.onHidden((() => {
                    gB(kB.takeRecords()), VB(!0)
                  })), xd((() => {
                    lB("back-forward-cache", yB.navigationId, yB.navigationInteractionId, yB.navigationURL, qd()), Ad(VB)
                  })), setTimeout(VB))
                })))
              }((TB => {
                BB((BB => {
                  let TB = {};
                  if (BB.entries.length) {
                    const dB = BB.entries.reduce(((BB, TB) => BB.value > TB.value ? BB : TB));
                    if (dB?.sources?.length) {
                      const BB = OV(dB.sources);
                      BB && (TB = {
                        largestShiftTarget: VB.get(BB),
                        largestShiftTime: dB.startTime,
                        largestShiftValue: dB.value,
                        largestShiftSource: BB,
                        largestShiftEntry: dB,
                        loadState: Zd(dB.startTime)
                      })
                    }
                  }
                  return Object.assign(BB, {
                    attribution: TB
                  })
                })(TB))
              }), TB)
          }((BB => {
            const {
              loadState: TB,
              largestShiftValue: dB,
              largestShiftTime: VB,
              largestShiftTarget: yB
            } = BB.attribution, pB = this.buildInitialValues(BB);
            this.addIfPresent(pB, "largest_shift_value", dB), this.addIfPresent(pB, "largest_shift_time", VB);
            const lB = this.buildInitialContext(BB);
            this.addIfPresent(lB, KV, TB), this.addIfPresent(lB, "largest_shift_target", yB), this.pushMeasurement(pB, lB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureFCP() {
          var BB;
          ! function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const dB = Cd(TB = Object.assign({}, TB), YV);
            pV(TB) && (dB.u = new Map), kV((TB => {
              BB((BB => {
                let TB = {
                  timeToFirstByte: 0,
                  firstByteToFCP: BB.value,
                  loadState: Zd(qd())
                };
                if ("soft-navigation" !== BB.navigationType) {
                  if (BB.entries.length) {
                    const dB = ad(),
                      VB = BB.entries.at(-1);
                    if (dB) {
                      const yB = dB.responseStart,
                        pB = dB.activationStart || 0,
                        lB = Math.max(0, yB - pB);
                      TB = {
                        timeToFirstByte: lB,
                        firstByteToFCP: BB.value - lB,
                        loadState: Zd(BB.entries[0].startTime),
                        navigationEntry: dB,
                        fcpEntry: VB
                      }
                    }
                  }
                } else {
                  const VB = dB.u?.get(BB.navigationId);
                  VB && (TB = {
                    timeToFirstByte: 0,
                    firstByteToFCP: BB.value,
                    loadState: "complete",
                    navigationEntry: VB
                  })
                }
                return Object.assign(BB, {
                  attribution: TB
                })
              })(TB))
            }), TB)
          }((BB => {
            const {
              firstByteToFCP: TB,
              timeToFirstByte: dB,
              loadState: VB
            } = BB.attribution, yB = this.buildInitialValues(BB);
            this.addIfPresent(yB, "first_byte_to_fcp", TB), this.addIfPresent(yB, rV, dB);
            const pB = this.buildInitialContext(BB);
            this.addIfPresent(pB, KV, VB), this.pushMeasurement(yB, pB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureINP() {
          var BB;
          fV((BB => {
            var TB;
            const {
              interactionTime: dB,
              presentationDelay: VB,
              inputDelay: yB,
              processingDuration: pB,
              nextPaintTime: lB,
              loadState: JB,
              interactionTarget: YB,
              interactionType: gB,
              totalScriptDuration: oB,
              totalStyleAndLayoutDuration: kB,
              totalPaintDuration: LB,
              totalUnattributedDuration: OB,
              longestScript: DB
            } = BB.attribution, uB = this.buildInitialValues(BB);
            this.addIfPresent(uB, "interaction_time", dB), this.addIfPresent(uB, "presentation_delay", VB), this.addIfPresent(uB, "input_delay", yB), this.addIfPresent(uB, "processing_duration", pB), this.addIfPresent(uB, "next_paint_time", lB), this.addNumberIfDefined(uB, "total_script_duration", oB), this.addNumberIfDefined(uB, "total_style_and_layout_duration", kB), this.addNumberIfDefined(uB, "total_paint_duration", LB), this.addNumberIfDefined(uB, "total_unattributed_duration", OB), this.addNumberIfDefined(uB, "longest_script_intersecting_duration", null === DB || void 0 === DB ? void 0 : DB.intersectingDuration);
            const HB = this.buildInitialContext(BB);
            this.addIfPresent(HB, KV, JB), this.addIfPresent(HB, "interaction_target", YB), this.addIfPresent(HB, "interaction_type", gB), this.addIfPresent(HB, "longest_script_subpart", null === DB || void 0 === DB ? void 0 : DB.subpart), this.addIfPresent(HB, "longest_script_invoker_type", null === DB || void 0 === DB ? void 0 : DB.entry.invokerType), (null === (TB = this.webVitalConfig) || void 0 === TB ? void 0 : TB.trackAttributionSources) && (this.addIfPresent(HB, "longest_script_invoker", null === DB || void 0 === DB ? void 0 : DB.entry.invoker), this.addIfPresent(HB, "longest_script_source_url", null === DB || void 0 === DB ? void 0 : DB.entry.sourceURL), this.addIfPresent(HB, "longest_script_source_function_name", null === DB || void 0 === DB ? void 0 : DB.entry.sourceFunctionName), this.addIfPresent(HB, "longest_script_source_char_position", void 0 !== (null === DB || void 0 === DB ? void 0 : DB.entry.sourceCharPosition) ? String(DB.entry.sourceCharPosition) : void 0)), this.pushMeasurement(uB, HB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureLCP() {
          var BB;
          ! function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (TB = Object.assign({}, TB)).resourceBufferSize && (zV = TB.resourceBufferSize);
            const dB = Cd(TB, sV),
              VB = new WeakMap;
            pV(TB) && (dB.u = new Map), dB.m = BB => {
                const dB = BB.element;
                if (dB) {
                  const yB = TB.generateTarget?.(dB) ?? Wd(dB);
                  VB.set(BB, yB)
                } else BB.id && VB.set(BB, `#${BB.id}`)
              },
              function(BB) {
                let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  dB = !1;
                const VB = pV(TB);
                gV((() => {
                  let yB, pB = dV(),
                    lB = VV("LCP");
                  const JB = Cd(TB, sV),
                    YB = (VB, JB, YB, gB, oB) => {
                      lB = VV("LCP", -1, VB, JB, YB, gB, oB), yB = jd(BB, lB, MV, TB.reportAllChanges), dB = !1, "soft-navigation" === VB && (pB = dV(!0))
                    },
                    gB = BB => {
                      JB.u && BB.navigationId && lV(JB.u, BB), dB || yB(!0), YB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime);
                      const TB = BB.getLargestInteractionContentfulPaint?.();
                      TB && oB([TB])
                    },
                    oB = BB => {
                      TB.reportAllChanges || VB || (BB = BB.slice(-1));
                      for (const TB of BB) {
                        if (!TB) continue;
                        if ("soft-navigation" === TB.entryType) {
                          gB(TB);
                          continue
                        }
                        let BB = 0,
                          dB = [],
                          VB = TB.startTime;
                        if ("largest-contentful-paint" === TB.entryType) BB = Math.max(TB.startTime - bd(), 0), JB.l(TB), dB = [TB];
                        else if ("interaction-contentful-paint" === TB.entryType) {
                          const yB = TB;
                          if (!lB.navigationId) continue;
                          if ("interactionId" in yB && yB.interactionId != lB.navigationInteractionId) continue;
                          VB = yB.largestContentfulPaint?.renderTime || 0, BB = Math.max(VB - TB.startTime, 0), yB.largestContentfulPaint && (JB.l(yB.largestContentfulPaint), dB = [yB.largestContentfulPaint])
                        }
                        VB < pB.firstHiddenTime && (lB.value = BB, lB.entries = dB, yB())
                      }
                    },
                    kB = ["largest-contentful-paint"];
                  VB && kB.push("interaction-contentful-paint", "soft-navigation");
                  const LB = yV(kB, oB);
                  if (LB) {
                    yB = jd(BB, lB, MV, TB.reportAllChanges);
                    const pB = ["keydown", "click", "visibilitychange"],
                      JB = BB => {
                        if (BB.isTrusted && !dB) {
                          const BB = lB.id;
                          NV((() => {
                            if (!dB) {
                              if (!VB) {
                                LB.disconnect();
                                for (const BB of pB) removeEventListener(BB, JB, {
                                  capture: !0
                                })
                              }
                              BB === lB.id && (dB = !0, yB(!0))
                            }
                          }))
                        }
                      };
                    for (const BB of pB) addEventListener(BB, JB, {
                      capture: !0
                    });
                    xd((VB => {
                      YB("back-forward-cache", lB.navigationId, lB.navigationInteractionId, lB.navigationURL, qd()), yB = jd(BB, lB, MV, TB.reportAllChanges), Ad((() => {
                        lB.value = performance.now() - VB.timeStamp, dB = !0, yB(!0)
                      }))
                    }))
                  }
                }))
              }((TB => {
                BB((BB => {
                  let TB = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: BB.value
                  };
                  if (BB.entries.length) {
                    const yB = BB.entries.at(-1),
                      pB = BB => BB.name === yB.url && (BB.requestStart || BB.startTime) <= yB.startTime,
                      lB = yB.url && (wV.findLast(pB) || performance.getEntriesByType("resource").findLast(pB));
                    let JB;
                    TB.target = VB.get(yB), TB.lcpEntry = yB, yB.url && (TB.url = yB.url), lB && (TB.lcpResourceEntry = lB);
                    let YB = 0,
                      gB = 0;
                    if ("soft-navigation" !== BB.navigationType ? (JB = ad(), YB = JB?.activationStart ?? 0, gB = JB?.responseStart ?? 0) : (YB = BB.navigationStartTime || 0, JB = dB.u?.get(BB.navigationId)), JB) {
                      const dB = Math.max(0, gB - YB),
                        VB = Math.max(dB, lB ? (lB.requestStart || lB.startTime) - YB : 0),
                        yB = Math.min(BB.value, Math.max(VB, lB ? lB.responseEnd - YB : 0));
                      TB = {
                        ...TB,
                        timeToFirstByte: dB,
                        resourceLoadDelay: VB - dB,
                        resourceLoadDuration: yB - VB,
                        elementRenderDelay: BB.value - yB,
                        navigationEntry: JB
                      }
                    }
                  }
                  return Object.assign(BB, {
                    attribution: TB
                  })
                })(TB))
              }), TB)
          }((BB => {
            var TB;
            const {
              elementRenderDelay: dB,
              resourceLoadDelay: VB,
              resourceLoadDuration: yB,
              timeToFirstByte: pB,
              target: lB,
              url: JB,
              lcpResourceEntry: YB
            } = BB.attribution, gB = this.buildInitialValues(BB);
            this.addIfPresent(gB, "element_render_delay", dB), this.addIfPresent(gB, "resource_load_delay", VB), this.addIfPresent(gB, "resource_load_duration", yB), this.addIfPresent(gB, rV, pB);
            const oB = this.buildInitialContext(BB);
            this.addIfPresent(oB, "element", lB), (null === (TB = this.webVitalConfig) || void 0 === TB ? void 0 : TB.trackAttributionSources) && (this.addIfPresent(oB, "resource_url", JB), this.addIfPresent(oB, "resource_delivery_type", null === YB || void 0 === YB ? void 0 : YB.deliveryType), this.addIfPresent(oB, "resource_initiator_type", null === YB || void 0 === YB ? void 0 : YB.initiatorType)), this.pushMeasurement(gB, oB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureTTFB() {
          var BB;
          ! function(BB) {
            ! function(BB) {
              let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const dB = pV(TB);
              let VB = VV("TTFB"),
                yB = jd(BB, VB, UV, TB.reportAllChanges);
              FV((() => {
                const pB = ad();
                if (pB) {
                  const lB = pB.responseStart;
                  VB.value = Math.max(lB - bd(), 0), VB.entries = [pB], yB(!0), xd((() => {
                    VB = VV("TTFB", 0, "back-forward-cache", VB.navigationId, VB.navigationInteractionId, VB.navigationURL, qd()), yB = jd(BB, VB, UV, TB.reportAllChanges), yB(!0)
                  })), dB && yV(["soft-navigation"], (dB => {
                    dB.forEach((dB => {
                      dB.navigationId && (VB = VV("TTFB", 0, "soft-navigation", dB.navigationId, dB.interactionId, dB.name, dB.startTime), VB.entries = [dB], yB = jd(BB, VB, UV, TB.reportAllChanges), yB(!0))
                    }))
                  }), TB)
                }
              }))
            }((TB => {
              BB((BB => {
                const TB = BB.entries[0];
                let dB = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: TB
                };
                if (BB.entries.length && TB instanceof PerformanceNavigationTiming) {
                  const VB = TB.activationStart || 0,
                    yB = Math.max((TB.workerStart || TB.fetchStart || 0) - VB, 0),
                    pB = Math.max(TB.domainLookupStart - VB, 0),
                    lB = Math.max(TB.connectStart - VB, 0),
                    JB = Math.max(TB.connectEnd - VB, 0);
                  dB = {
                    waitingDuration: yB,
                    cacheDuration: pB - yB,
                    dnsDuration: lB - pB,
                    connectionDuration: JB - lB,
                    requestDuration: BB.value - JB,
                    navigationEntry: TB
                  }
                }
                return Object.assign(BB, {
                  attribution: dB
                })
              })(TB))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((BB => {
            const {
              dnsDuration: TB,
              connectionDuration: dB,
              requestDuration: VB,
              waitingDuration: yB,
              cacheDuration: pB
            } = BB.attribution, lB = this.buildInitialValues(BB);
            this.addIfPresent(lB, "dns_duration", TB), this.addIfPresent(lB, "connection_duration", dB), this.addIfPresent(lB, "request_duration", VB), this.addIfPresent(lB, "waiting_duration", yB), this.addIfPresent(lB, "cache_duration", pB);
            const JB = this.buildInitialContext(BB);
            this.pushMeasurement(lB, JB)
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
          var TB;
          const dB = null !== (TB = BT("com.grafana.faro.lastNavigationId", bB)) && void 0 !== TB ? TB : Pd;
          return {
            id: BB.id,
            rating: BB.rating,
            navigation_type: BB.navigationType,
            navigation_entry_id: dB
          }
        }
        pushMeasurement(BB, TB) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: BB
          }, {
            context: TB
          })
        }
        addIfPresent(BB, TB, dB) {
          dB && (BB[TB] = dB)
        }
        addNumberIfDefined(BB, TB, dB) {
          void 0 !== dB && (BB[TB] = dB)
        }
      },
      cV = class extends Td {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = dd
        }
        initialize() {
          this.logDebug("Initializing"), new IV(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const SV = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function PV() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const TB of BB)
        if ("traceparent" === TB.name) {
          if (!SV.test(TB.description)) continue;
          const [, BB, dB] = TB.description.split("-");
          if (null != BB && null != dB) return {
            traceId: BB,
            spanId: dB
          };
          break
        }
    }

    function QV(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: dB,
        monoNow: VB
      } = TB;
      return Math.min(dB, dB - (VB - BB))
    }

    function RV(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [dB, VB] of Object.entries(TB)) {
        const TB = BB[dB];
        return null != TB && (FB(VB) ? VB.includes(TB) : TB === VB)
      }
      return !0
    }

    function aV(BB) {
      const {
        connectEnd: TB,
        connectStart: dB,
        decodedBodySize: VB,
        domainLookupEnd: yB,
        domainLookupStart: pB,
        duration: lB,
        encodedBodySize: JB,
        fetchStart: YB,
        initiatorType: gB,
        name: oB,
        nextHopProtocol: kB,
        redirectEnd: LB,
        redirectStart: OB,
        renderBlockingStatus: DB,
        requestStart: uB,
        responseEnd: HB,
        responseStart: EB,
        responseStatus: vB,
        secureConnectionStart: mB,
        transferSize: iB,
        workerStart: NB
      } = BB;
      return {
        name: oB,
        httpHost: XV(oB),
        duration: WV(lB),
        tcpHandshakeTime: WV(TB - dB),
        dnsLookupTime: WV(yB - pB),
        tlsNegotiationTime: WV(TB - mB),
        responseStatus: WV(vB),
        redirectTime: WV(LB - OB),
        requestTime: WV(EB - uB),
        responseTime: WV(HB - EB),
        fetchTime: WV(HB - YB),
        serviceWorkerTime: WV(NB > 0 ? YB - NB : 0),
        decodedBodySize: WV(VB),
        encodedBodySize: WV(JB),
        cacheHitStatus: function() {
          let BB = "fullLoad";
          0 === iB ? VB > 0 && (BB = "cache") : null != vB ? 304 === vB && (BB = "conditionalFetch") : JB > 0 && iB < JB && (BB = "conditionalFetch");
          return BB
        }(),
        renderBlockingStatus: WV(DB),
        protocol: kB,
        initiatorType: gB,
        visibilityState: document.visibilityState,
        ttfb: WV(EB - uB),
        transferSize: WV(iB)
      }
    }

    function ZV(BB) {
      const {
        activationStart: TB,
        domComplete: dB,
        domContentLoadedEventEnd: VB,
        domContentLoadedEventStart: yB,
        domInteractive: pB,
        fetchStart: lB,
        loadEventEnd: JB,
        loadEventStart: YB,
        responseStart: gB,
        type: oB
      } = BB, kB = function() {
        var BB;
        return null != (null === (BB = performance.timing) || void 0 === BB ? void 0 : BB.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return oT(oT({}, aV(BB)), {}, {
        pageLoadTime: WV(dB - lB),
        documentParsingTime: WV(kB ? pB - kB : null),
        domProcessingTime: WV(dB - pB),
        domContentLoadHandlerTime: WV(VB - yB),
        onLoadTime: WV(JB - YB),
        ttfb: WV(Math.max(gB - (null !== TB && void 0 !== TB ? TB : 0), 0)),
        type: oB
      })
    }

    function XV(BB) {
      try {
        return new URL(BB).host || Pd
      } catch (TB) {
        return Pd
      }
    }

    function WV(BB) {
      return null == BB ? Pd : "number" === typeof BB ? Math.round(BB > 0 ? BB : 0).toString() : BB.toString()
    }
    const hV = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function CV(BB, TB, dB, VB, yB, pB, lB) {
      try {
        var JB = BB[pB](lB),
          YB = JB.value
      } catch (BB) {
        return void dB(BB)
      }
      JB.done ? TB(YB) : Promise.resolve(YB).then(VB, yB)
    }

    function GV(BB) {
      return function() {
        var TB = this,
          dB = arguments;
        return new Promise((function(VB, yB) {
          var pB = BB.apply(TB, dB);

          function lB(BB) {
            CV(pB, VB, yB, lB, JB, "next", BB)
          }

          function JB(BB) {
            CV(pB, VB, yB, lB, JB, "throw", BB)
          }
          lB(void 0)
        }))
      }
    }
    const qV = new vd;
    var xV = class extends Td {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = dd
      }
      initialize() {
        var BB = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let TB = !1;
        const dB = () => {
          ! function(BB) {
            if ("complete" === document.readyState) BB();
            else {
              const TB = () => {
                "complete" === document.readyState && (BB(), document.removeEventListener("readystatechange", TB))
              };
              document.addEventListener("readystatechange", TB)
            }
          }(GV((function*() {
            if (TB) return;
            const dB = BB.api.pushEvent,
              {
                faroNavigationId: VB
              } = yield function(BB) {
                let TB;
                const dB = new Promise((BB => {
                  TB = BB
                }));
                return new PerformanceObserver((dB => {
                  var VB;
                  const [yB] = dB.getEntries();
                  if (null == yB || jB(yB.name)) return;
                  const pB = yB.toJSON();
                  let lB = PV(null === pB || void 0 === pB ? void 0 : pB.serverTiming);
                  const JB = null !== (VB = BT("com.grafana.faro.lastNavigationId", bB)) && void 0 !== VB ? VB : Pd,
                    YB = oT(oT({}, ZV(pB)), {}, {
                      faroNavigationId: ET(),
                      faroPreviousNavigationId: JB
                    });
                  TT("com.grafana.faro.lastNavigationId", YB.faroNavigationId, bB), BB("faro.performance.navigation", YB, void 0, {
                    spanContext: lB,
                    timestampOverwriteMs: QV(pB.startTime)
                  }), TB(YB)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), dB
              }(dB);
            TB || null == VB || function(BB, TB, dB, VB) {
              const yB = VB.trackResources;
              new PerformanceObserver((VB => {
                const pB = VB.getEntries(),
                  lB = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const JB of pB) {
                  if (jB(JB.name)) continue;
                  null === dB || void 0 === dB || dB.notify({
                    type: "resource"
                  });
                  const VB = JB.toJSON();
                  let pB = PV(null === VB || void 0 === VB ? void 0 : VB.serverTiming);
                  (null == yB && RV(VB, hV) || yB) && TB("faro.performance.resource", oT(oT({}, aV(VB)), {}, {
                    faroNavigationId: BB,
                    faroResourceId: ET()
                  }), void 0, {
                    spanContext: pB,
                    timestampOverwriteMs: QV(VB.startTime, lB)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(VB, dB, qV, BB.config)
          })))
        };
        this.cancelInitialization = () => {
          TB = !0, document.removeEventListener("prerenderingchange", dB)
        }, document.prerendering ? document.addEventListener("prerenderingchange", dB, {
          once: !0
        }) : dB()
      }
      destroy() {
        var BB;
        null === (BB = this.cancelInitialization) || void 0 === BB || BB.call(this), this.cancelInitialization = void 0
      }
    };
    const jV = "data-faro-user-action-name",
      AV = jV.replace(/-name$/, "-timeout"),
      bV = 1e3;

    function nV(BB) {
      return `data-${(BB.startsWith("data-")?BB.slice(5):BB).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function eV(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hT;
      if (void 0 === BB) return TB;
      let VB = NaN;
      try {
        VB = "string" === typeof BB && "" === BB.trim() ? NaN : Number(BB)
      } catch (yB) {}
      return !Number.isFinite(VB) || VB <= 0 ? (dB(`initialActivityTimeout must be a finite number greater than zero; using ${TB} ms`), TB) : VB > 1e3 ? (dB(`initialActivityTimeout cannot exceed ${bV} ms; clamping to the maximum`), bV) : VB
    }

    function By(BB, TB, dB) {
      return void 0 !== BB && window.clearTimeout(BB), window.setTimeout((() => {
        TB()
      }), dB)
    }

    function Ty(BB) {
      return BB.type === Ed
    }
    let dy, Vy;

    function yy() {
      return dy || (dy = new vd), Vy || (Vy = new MutationObserver(((BB, TB) => {
        dy.notify({
          type: "dom-mutation"
        })
      })), Vy.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), dy
    }
    const py = "fetch",
      ly = "xhr";
    let Jy, Yy, gy, oy, ky = !1;

    function Ly() {
      if (Jy) return Jy;

      function BB(BB) {
        Jy.notify({
          type: Hd,
          request: BB
        })
      }

      function TB(BB) {
        Jy.notify({
          type: Ed,
          request: BB
        })
      }
      return Jy = new vd, ky || (! function(BB) {
        let {
          onRequestEnd: TB,
          onRequestStart: dB
        } = BB;
        gy || (gy = window.fetch);
        window.fetch = function() {
          var BB, VB;
          const yB = null !== (BB = AB(arguments[0])) && void 0 !== BB ? BB : "",
            pB = jB(yB),
            lB = (null !== (VB = arguments[1]) && void 0 !== VB ? VB : {}).method,
            JB = ET();
          return pB || dB({
            url: yB,
            method: lB,
            requestId: JB,
            apiType: py
          }), gy.apply(this, arguments).then((BB => (pB || TB({
            url: yB,
            method: lB,
            requestId: JB,
            apiType: py
          }), BB))).catch((BB => {
            throw pB || TB({
              url: yB,
              method: lB,
              requestId: JB,
              apiType: py
            }), BB
          }))
        }
      }({
        onRequestStart: BB,
        onRequestEnd: TB
      }), function(BB) {
        let {
          onRequestStart: TB,
          onRequestEnd: dB
        } = BB;
        Yy || (Yy = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const BB = arguments[1],
            VB = jB(BB),
            yB = arguments[0],
            pB = ET();
          this.addEventListener("loadstart", (function() {
            VB || TB({
              url: BB,
              method: yB,
              requestId: pB,
              apiType: ly
            })
          })), this.addEventListener("load", (function() {
            VB || dB({
              url: BB,
              method: yB,
              requestId: pB,
              apiType: ly
            })
          })), this.addEventListener("error", (function() {
            VB || dB({
              url: BB,
              method: yB,
              requestId: pB,
              apiType: ly
            })
          })), this.addEventListener("abort", (function() {
            VB || dB({
              url: BB,
              method: yB,
              requestId: pB,
              apiType: ly
            })
          })), Yy.apply(this, arguments)
        }
      }({
        onRequestStart: BB,
        onRequestEnd: TB
      }), ky = !0), Jy
    }
    let Oy, Dy = !1;
    let uy = function(BB) {
      return BB[BB.Started = 0] = "Started", BB[BB.Halted = 1] = "Halted", BB[BB.Cancelled = 2] = "Cancelled", BB[BB.Ended = 3] = "Ended", BB
    }({});
    var Hy = class {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = BB, this.logDebug = TB, this.initialActivityTimeout = dB, this.http = Ly(), this.dom = yy(), this.perf = (oy || (oy = new vd), Dy || (Oy = qV.subscribe((BB => {
          "resource" === BB.type && oy.notify({
            type: "resource-entry"
          })
        })), Dy = !0), oy), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new vd).merge(this.http, this.dom, this.perf).takeWhile((() => [uy.Started, uy.Halted].includes(this.userAction.getState()))).filter((BB => !!(this.userAction.getState() !== uy.Halted || Ty(BB) && this.runningRequests.has(BB.request.requestId)))).subscribe((BB => {
          (function(BB) {
            return BB.type === Hd
          })(BB) && this.runningRequests.set(BB.request.requestId, BB.request), Ty(BB) && this.runningRequests.delete(BB.request.requestId), Ty(BB) ? this.userAction.getState() === uy.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((BB => [uy.Ended, uy.Cancelled].includes(BB))).first().subscribe((() => this.cleanup())), this.startupTid = By(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === uy.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === uy.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = By(this.haltTid, (() => {
          this.userAction.getState() === uy.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var BB, TB;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (BB = this.allMonitorsSub) || void 0 === BB || BB.unsubscribe(), null === (TB = this.stateSub) || void 0 === TB || TB.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(BB) {
        void 0 !== BB && window.clearTimeout(BB)
      }
    };

    function Ey(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hT;
      var dB;
      const {
        api: VB,
        config: yB,
        internalLogger: pB
      } = BB, lB = eV(null === (dB = yB.userActionsInstrumentation) || void 0 === dB ? void 0 : dB.initialActivityTimeout, 100, TB);
      return {
        processUserEvent: function(BB) {
          var TB, dB;
          const pB = null !== (TB = null === (dB = yB.userActionsInstrumentation) || void 0 === dB ? void 0 : dB.dataAttributeName) && void 0 !== TB ? TB : jV,
            lB = BB.target;
          if (!(lB instanceof Element)) return;
          const JB = function(BB, TB) {
              let dB = BB;
              for (; dB;) {
                if (dB.hasAttribute(TB)) return dB;
                dB = dB.parentElement
              }
              return null
            }(lB, nV(pB)),
            YB = function(BB, TB) {
              if (!BB) return;
              const dB = function(BB) {
                  return nV(BB).slice(5).replace(/-(.)/g, ((BB, TB) => TB.toUpperCase()))
                }(TB),
                VB = BB.dataset;
              for (const yB in VB)
                if (yB === dB) return VB[yB]
            }(JB, pB);
          if (!JB || !YB) return;
          const gB = function(BB, TB) {
            const dB = BB.getAttribute(function(BB) {
              const TB = nV(BB);
              return TB.endsWith("-name") ? `${TB.slice(0,-5)}-timeout` : `${TB}-timeout`
            }(TB));
            return null === dB ? void 0 : Number(dB)
          }(JB, pB);
          VB.startUserAction(YB, {}, {
            triggerName: BB.type,
            initialActivityTimeout: gB
          })
        },
        processUserActionStarted: function(BB, dB) {
          const VB = BB,
            yB = eV(dB, lB, TB);
          new Hy(VB, pB.debug, yB).attach()
        }
      }
    }
    const vy = "user_action_start",
      my = {
        Normal: "normal",
        Critical: "critical"
      };
    var iy = class {
        constructor() {
          this.buffer = []
        }
        addItem(BB) {
          this.buffer.push(BB)
        }
        flushBuffer(BB) {
          if (UB(BB))
            for (const TB of this.buffer) BB(TB);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Ny = class extends vd {
        constructor(BB) {
          let {
            name: TB,
            parentId: dB,
            trigger: VB,
            transports: yB,
            attributes: pB,
            trackUserActionsExcludeItem: lB,
            importance: JB = my.Normal,
            pushEvent: YB
          } = BB;
          super(), this.name = TB, this.attributes = pB, this.id = ET(), this.trigger = VB, this.parentId = null !== dB && void 0 !== dB ? dB : this.id, this.trackUserActionsExcludeItem = lB, this.importance = JB, this._pushEvent = YB, this._itemBuffer = new iy, this._transports = yB, this._state = 0, this._start()
        }
        addItem(BB) {
          return 0 === this._state && (this._itemBuffer.addItem(BB), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = LT(), this._startTimeMono = OT())
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
          const BB = LT(),
            TB = OT() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((BB => {
            if (function(BB, TB) {
                return (null === TB || void 0 === TB ? void 0 : TB(BB)) || "measurement" === BB.type && "web-vitals" === BB.payload.type
              }(BB, this.trackUserActionsExcludeItem)) return void this._transports.execute(BB);
            const TB = nT(nT({}, BB), {}, {
              payload: nT(nT({}, BB.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(TB)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", nT({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: BB.toString(),
            userActionDuration: TB.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, PT(this.attributes)), void 0, {
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
    const ty = new vd;

    function fy(BB, TB) {
      return !!BB && (0 === (null === BB || void 0 === BB ? void 0 : BB.getState()) && (BB.addItem(TB), !0))
    }
    var sy = class extends Td {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = dd
        }
        initialize() {
          const {
            processUserEvent: BB,
            processUserActionStarted: TB
          } = Ey(uB, (BB => this.logWarn(BB)));
          this._processUserEvent = BB, this._processKeydown = TB => {
            [" ", "Enter"].includes(TB.key) && BB(TB)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = ty.subscribe((BB => {
            let {
              type: dB,
              userAction: VB,
              initialActivityTimeout: yB
            } = BB;
            "user_action_start" === dB && TB(VB, yB)
          }))
        }
        destroy() {
          var BB;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (BB = this._userActionSub) || void 0 === BB || BB.unsubscribe()
        }
      },
      My = class extends Td {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = dd, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(BB) {
          const TB = {
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
          this.api.pushEvent("securitypolicyviolation", PT(TB))
        }
      };
    var zy = class extends vd {
      constructor(BB, TB) {
        var dB, VB, yB, pB;
        super(), this._tracking = !1, this.eventsObservable = BB, this._options = {
          inactivityMs: null !== (dB = null === TB || void 0 === TB ? void 0 : TB.inactivityMs) && void 0 !== dB ? dB : 100,
          drainTimeoutMs: null !== (VB = null === TB || void 0 === TB ? void 0 : TB.drainTimeoutMs) && void 0 !== VB ? VB : 1e4,
          isOperationStart: null !== (yB = null === TB || void 0 === TB ? void 0 : TB.isOperationStart) && void 0 !== yB ? yB : () => {},
          isOperationEnd: null !== (pB = null === TB || void 0 === TB ? void 0 : TB.isOperationEnd) && void 0 !== pB ? pB : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((BB => {
          var TB;
          this._lastEventTime = OT(), null === (TB = this._currentEvents) || void 0 === TB || TB.push(BB);
          const dB = this._options.isOperationStart(BB);
          var VB;
          dB && (null === (VB = this._activeOperations) || void 0 === VB || VB.set(dB, !0));
          const yB = this._options.isOperationEnd(BB);
          var pB;
          yB && (null === (pB = this._activeOperations) || void 0 === pB || pB.delete(yB));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = OT(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let BB;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), BB = this.hasActiveOperations() ? OT() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: BB
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = wy(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = wy(this._drainTid, (() => {
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

    function wy(BB, TB, dB) {
      return BB && clearTimeout(BB), BB = setTimeout((() => {
        TB()
      }), dB)
    }
    let Uy;
    const Fy = new Set,
      Ky = new Map;
    let ry, Iy, cy, Sy, Py, Qy, Ry, ay, Zy = !1;
    var Xy = class extends Td {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = dd
      }
      initialize() {
        const BB = Ly(),
          TB = yy(),
          dB = function() {
            function BB(BB, TB) {
              const dB = null !== TB && void 0 !== TB ? TB : location.href;
              dB !== Iy && (ry.notify({
                type: "url-change",
                from: Iy,
                to: dB,
                trigger: BB
              }), Iy = dB)
            }
            if (ry || (ry = new vd, Iy = location.href), !Zy)
              if ("navigation" in window && "NavigateEvent" in window) {
                Ry = TB => {
                  try {
                    const dB = null === TB || void 0 === TB ? void 0 : TB.destination;
                    (null === dB || void 0 === dB ? void 0 : dB.sameDocument) && "string" === typeof dB.url && BB("navigate", dB.url)
                  } catch (dB) {}
                }, window.navigation.addEventListener("navigate", Ry);
                const TB = window.NavigateEvent;
                TB && TB.prototype && "function" === typeof TB.prototype.intercept && (ay || (ay = TB.prototype.intercept), TB.prototype.intercept = function(TB) {
                  try {
                    const TB = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      dB = null === this || void 0 === this ? void 0 : this.destination;
                    TB && dB && !1 === dB.sameDocument && "string" === typeof dB.url && BB("navigate-intercept", dB.url)
                  } catch (dB) {}
                  return ay.call(this, TB)
                }), Zy = !0
              } else cy || (cy = window.history.pushState), window.history.pushState = function() {
                for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
                const yB = cy.apply(window.history, dB);
                return BB("pushState"), yB
              }, Sy || (Sy = window.history.replaceState), window.history.replaceState = function() {
                for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
                const yB = Sy.apply(window.history, dB);
                return BB("replaceState"), yB
              }, Py = () => BB("popstate"), Qy = () => BB("hashchange"), window.addEventListener("popstate", Py), window.addEventListener("hashchange", Qy), Zy = !0;
            return ry
          }(),
          VB = (yB = ["pointerdown", "keydown"], Uy || (Uy = new vd), yB.forEach((BB => {
            if (!Fy.has(BB)) {
              const TB = () => {
                Uy.notify({
                  type: "interaction",
                  name: BB
                })
              };
              window.addEventListener(BB, TB), Fy.add(BB), Ky.set(BB, TB)
            }
          })), Uy);
        var yB;
        const pB = new zy((new vd).merge(BB, TB, dB), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: BB => function(BB) {
            return BB.type === Hd
          }(BB) ? BB.request.requestId : void 0,
          isOperationEnd: BB => function(BB) {
            return BB.type === Ed
          }(BB) ? BB.request.requestId : void 0
        });
        pB.filter((BB => "tracking-ended" === BB.message)).subscribe((BB => {
          var TB, dB;
          if ((null === (TB = BB.events) || void 0 === TB ? void 0 : TB.some((BB => "url-change" === BB.type))) && (null === (dB = BB.events) || void 0 === dB ? void 0 : dB.some((BB => "dom-mutation" === BB.type)))) {
            var VB;
            const TB = null === (VB = BB.events) || void 0 === VB ? void 0 : VB.find((BB => "url-change" === BB.type));
            uB.api.pushEvent("faro.navigation", {
              fromUrl: null === TB || void 0 === TB ? void 0 : TB.from,
              toUrl: null === TB || void 0 === TB ? void 0 : TB.to,
              sameDocument: String(!0),
              duration: BB.duration
            })
          }
        })), VB.subscribe((() => {
          pB.startTracking()
        }))
      }
    };

    function Wy() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const TB = [new sy, new Sd, new cV, new Vd, new Qd, new Xy];
      return !1 !== BB.enablePerformanceInstrumentation && TB.unshift(new xV), !1 !== BB.enableContentSecurityPolicyInstrumentation && TB.push(new My), !1 !== BB.captureConsole && TB.push(new Id), TB
    }
    var hy = dB(7404);
    let Cy, Gy;

    function qy() {
      const BB = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Cy === BB && Gy || (Gy = new hy.UAParser(BB).getResult(), Cy = BB), Gy
    }
    const xy = () => {
        const {
          browser: BB,
          os: TB,
          ua: dB
        } = qy(), {
          name: VB,
          version: yB
        } = BB, {
          name: pB,
          version: lB
        } = TB, JB = navigator.language, YB = dB.includes("Mobi"), gB = function() {
          if (!VB || !yB) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== VB && void 0 !== VB ? VB : Pd,
            version: null !== yB && void 0 !== yB ? yB : Pd,
            os: `${null!==pB&&void 0!==pB?pB:Pd} ${null!==lB&&void 0!==lB?lB:Pd}`,
            userAgent: null !== dB && void 0 !== dB ? dB : Pd,
            language: null !== JB && void 0 !== JB ? JB : Pd,
            mobile: YB,
            brands: null !== gB && void 0 !== gB ? gB : Pd,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      jy = () => {
        const {
          name: BB,
          version: TB
        } = qy().os;
        if (!BB && !TB) return {};
        const dB = {};
        return BB && (dB.name = BB), TB && (dB.version = TB), {
          os: dB
        }
      };

    function Ay(BB) {
      var TB, dB, VB;
      return {
        id: null !== (TB = null === (dB = uB.config) || void 0 === dB || null === (dB = dB.sessionTracking) || void 0 === dB || null === (VB = dB.generateSessionId) || void 0 === VB ? void 0 : VB.call(dB)) && void 0 !== TB ? TB : ET(),
        attributes: BB
      }
    }
    const by = () => ({
      sdk: {
        name: "faro-web",
        version: dd
      }
    });
    var ny = class extends Bd {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ey = function(BB) {
      return BB.EXCEPTION = "exception", BB.LOG = "log", BB.MEASUREMENT = "measurement", BB.TRACE = "trace", BB.EVENT = "event", BB
    }({});
    const Bp = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Tp(BB, TB) {
      var dB, VB;
      if (void 0 === TB) return BB;
      if (void 0 === BB) return {
        resourceSpans: TB
      };
      const yB = null === (dB = BB.resourceSpans) || void 0 === dB ? void 0 : dB[0];
      if (void 0 === yB) return BB;
      const pB = (null === yB || void 0 === yB ? void 0 : yB.scopeSpans) || [],
        lB = (null === TB || void 0 === TB || null === (VB = TB[0]) || void 0 === VB ? void 0 : VB.scopeSpans) || [];
      return nT(nT({}, BB), {}, {
        resourceSpans: [nT(nT({}, yB), {}, {
          scopeSpans: [...pB, ...lB]
        })]
      })
    }

    function dp(BB) {
      let TB = {
        meta: {}
      };
      return void 0 !== BB[0] && (TB.meta = BB[0].meta), BB.forEach((BB => {
        switch (BB.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const dB = Bp[BB.type],
              VB = TB[dB];
            TB = nT(nT({}, TB), {}, {
              [dB]: void 0 === VB ? [BB.payload] : [...VB, BB.payload]
            });
            break
          }
          case "trace":
            TB = nT(nT({}, TB), {}, {
              traces: Tp(TB.traces, BB.payload.resourceSpans)
            })
        }
      })), TB
    }
    var Vp = class extends ny {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-console", this.version = dd
      }
      send(BB) {
        var TB;
        return this.unpatchedConsole[null !== (TB = this.options.level) && void 0 !== TB ? TB : md.DEBUG]("New event", dp([BB]))
      }
    };
    const yp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      pp = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      lp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Jp = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Yp = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      gp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function op(BB) {
      let {
        weekday: TB,
        day: dB,
        month: VB,
        year: yB,
        hour: pB,
        minute: lB,
        second: JB
      } = BB;
      if (yB < 1900 || dB < 1 || pB > 23 || lB > 59 || JB > 60) return;
      const YB = 60 === JB,
        gB = new Date(0);
      return gB.setUTCFullYear(yB, VB, dB), gB.setUTCHours(pB, lB, YB ? 59 : JB, 0), gB.getUTCDay() === TB && gB.getUTCDate() === dB && gB.getUTCMonth() === VB && gB.getUTCFullYear() === yB && gB.getUTCHours() === pB && gB.getUTCMinutes() === lB && gB.getUTCSeconds() === (YB ? 59 : JB) ? gB.getTime() + (YB ? 1e3 : 0) : void 0
    }
    var kp = class {
      constructor(BB) {
        this.options = BB, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var BB = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const TB = this.sequence++;
        let dB = !1;
        return {
          deliver: function() {
            var dB = GV((function*(dB) {
              const VB = BB.options.getNow();
              let yB, pB = 0;
              for (;;) {
                var lB, JB, YB;
                const gB = BB.options.retry.maxAttempts - pB,
                  oB = yield BB.runAttempt((() => dB(gB, BB.unloading)), pB > 0);
                if (pB += oB.attemptsMade, "success" === oB.kind) return {
                  kind: "success",
                  attempts: pB,
                  elapsedTimeMs: BB.options.getNow() - VB
                };
                if (yB = oB.failure, "terminal" === oB.kind || BB.unloading) return {
                  kind: "terminal",
                  attempts: pB,
                  elapsedTimeMs: BB.options.getNow() - VB,
                  failure: yB
                };
                if (pB >= BB.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: pB,
                  elapsedTimeMs: BB.options.getNow() - VB,
                  failure: yB,
                  reason: "retries-exhausted"
                };
                if (null != oB.retryAfterMs && oB.retryAfterMs > BB.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: pB,
                  elapsedTimeMs: BB.options.getNow() - VB,
                  failure: yB,
                  reason: "retry-after-too-long"
                };
                const kB = Math.min(null !== (lB = oB.retryAfterMs) && void 0 !== lB ? lB : BB.options.retry.initialBackoffMs * Math.pow(BB.options.retry.backoffMultiplier, pB - 1), BB.options.retry.maxBackoffMs);
                if (null === (JB = (YB = BB.options).onRetry) || void 0 === JB || JB.call(YB, kB, pB + 1), yield BB.waitForTurn(TB, kB)) {
                  const TB = BB.options.retry.maxAttempts - pB,
                    yB = yield BB.runAttempt((() => dB(TB, !0)));
                  return pB += yB.attemptsMade, {
                    kind: "success" === yB.kind ? "success" : "terminal",
                    attempts: pB,
                    elapsedTimeMs: BB.options.getNow() - VB,
                    failure: "success" === yB.kind ? void 0 : yB.failure
                  }
                }
              }
            }));
            return function(BB) {
              return dB.apply(this, arguments)
            }
          }(),
          release: () => {
            dB || (dB = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const BB = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const TB of BB) TB.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((dB, VB) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const TB = () => {
                this.inProgress--, this.runNextAttempt()
              };
              BB().then((BB => {
                TB(), dB(BB)
              }), (BB => {
                TB(), VB(BB)
              }))
            },
            isRedelivery: TB
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const BB = this.options.getNow(),
            TB = this.attemptQueue.findIndex((TB => {
              let {
                isRedelivery: dB
              } = TB;
              return this.unloading || !dB || BB >= this.nextSendAt
            }));
          if (TB < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - BB)));
          const [dB] = this.attemptQueue.splice(TB, 1);
          dB.isRedelivery && !this.unloading && (this.nextSendAt = BB + 1), dB.run()
        }
      }
      waitForTurn(BB, TB) {
        const dB = Math.min(TB * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((TB => {
          this.waiting.push({
            sequence: BB,
            readyAt: this.options.getNow() + dB,
            resolve: TB
          }), this.waiting.sort(((BB, TB) => BB.readyAt === TB.readyAt ? BB.sequence - TB.sequence : BB.readyAt - TB.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const BB = this.waiting[0],
          TB = BB.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const TB = this.waiting.indexOf(BB);
          TB >= 0 && this.waiting.splice(TB, 1), BB.resolve(!1), this.scheduleNext()
        }), Math.max(0, TB - this.options.getNow()))
      }
    };

    function Lp(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if ({}.hasOwnProperty.call(BB, VB)) {
            if (TB.includes(VB)) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.includes(dB) || {}.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function Op(BB) {
      const {
        size: TB,
        concurrency: dB
      } = BB, VB = [];
      let yB = 0;
      const pB = () => {
        if (yB < dB && VB.length) {
          const {
            producer: BB,
            resolve: TB,
            reject: dB
          } = VB.shift();
          yB++, BB().then((BB => {
            yB--, pB(), TB(BB)
          }), (BB => {
            yB--, pB(), dB(BB)
          }))
        }
      };
      return {
        add: BB => {
          if (VB.length + yB >= TB) throw new Error("Task buffer full");
          return new Promise(((TB, dB) => {
            VB.push({
              producer: BB,
              resolve: TB,
              reject: dB
            }), pB()
          }))
        }
      }
    }
    const Dp = ["headers"],
      Hp = ["keepalive", "signal"],
      Ep = new Set([408, 425, 429, 500, 502, 503, 504]),
      vp = new Set([429, 503]);
    let mp = 0,
      ip = 0;
    var Np = class extends Error {};
    var tp = class extends ny {
      constructor(BB) {
        var TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB;
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = dd, this.pendingCustomSends = 0, this.getNow = null !== (TB = BB.getNow) && void 0 !== TB ? TB : Date.now, this.requestTimeoutMs = null !== (dB = BB.requestTimeoutMs) && void 0 !== dB ? dB : 1e4, this.compressionEnabled = null !== (VB = BB.requestCompression) && void 0 !== VB && VB && "undefined" !== typeof CompressionStream, BB.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new kp({
          bufferSize: null !== (yB = BB.bufferSize) && void 0 !== yB ? yB : 30,
          concurrency: null !== (pB = BB.concurrency) && void 0 !== pB ? pB : 5,
          retry: {
            maxAttempts: null !== (lB = null === (JB = BB.retry) || void 0 === JB ? void 0 : JB.maxAttempts) && void 0 !== lB ? lB : 3,
            initialBackoffMs: null !== (YB = null !== (gB = null === (oB = BB.retry) || void 0 === oB ? void 0 : oB.initialBackoffMs) && void 0 !== gB ? gB : BB.defaultRateLimitBackoffMs) && void 0 !== YB ? YB : 1e3,
            maxBackoffMs: null !== (kB = null === (LB = BB.retry) || void 0 === LB ? void 0 : LB.maxBackoffMs) && void 0 !== kB ? kB : 3e4,
            backoffMultiplier: null !== (OB = null === (DB = BB.retry) || void 0 === DB ? void 0 : DB.backoffMultiplier) && void 0 !== OB ? OB : 2
          },
          getNow: this.getNow,
          getRandom: null !== (uB = BB.getRandom) && void 0 !== uB ? uB : Math.random,
          onRetry: (BB, TB) => {
            this.logDebug(`Retrying failed request after ${BB}ms. Attempt ${TB}.`)
          }
        }), this.customPromiseBuffer = Op({
          size: null !== (HB = BB.bufferSize) && void 0 !== HB ? HB : 30,
          concurrency: null !== (EB = BB.concurrency) && void 0 !== EB ? EB : 5
        }), this.defaultPromiseBuffer = {
          add: BB => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(BB);
            const TB = this.deliveryQueue.reserve();
            if (!TB) throw new Error("Task buffer full");
            return this.runBufferedTask(TB, BB)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (BB => {
          BB.persisted && this.deliveryQueue.resume()
        })))
      }
      send(BB) {
        var TB = this;
        return GV((function*() {
          const dB = TB.promiseBuffer;
          if (dB !== TB.defaultPromiseBuffer || dB.add !== TB.defaultBufferAdd) {
            TB.pendingCustomSends++;
            try {
              yield dB.add((() => TB.deliver(BB)))
            } catch (VB) {
              TB.logError("Permanent delivery failure", {
                error: VB,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              TB.pendingCustomSends--
            }
          } else yield TB.deliver(BB)
        }))()
      }
      runBufferedTask(BB, TB) {
        return GV((function*() {
          let dB;
          try {
            return yield BB.deliver(GV((function*() {
              return dB = yield TB(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), dB
          } finally {
            BB.release()
          }
        }))()
      }
      deliver(BB) {
        var TB = this;
        return GV((function*() {
          const dB = TB.deliveryQueue.reserve();
          if (dB) try {
            const VB = yield TB.prepareRequest(BB), yB = yield dB.deliver(((BB, dB) => TB.performAttempt(VB, BB, dB)));
            "terminal" === yB.kind && TB.logError("retries-exhausted" === yB.reason ? "Delivery retries exhausted" : "Permanent delivery failure", oT(oT({}, yB.failure), {}, {
              reason: yB.reason,
              attempts: yB.attempts,
              elapsedTimeMs: yB.elapsedTimeMs
            }))
          } catch (VB) {
            TB.logError("Permanent delivery failure", {
              error: VB,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            dB.release()
          } else TB.logError("Permanent delivery failure", {
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
        var TB = this;
        return GV((function*() {
          var dB, VB;
          const yB = dp(BB),
            pB = null === (dB = yB.meta.session) || void 0 === dB ? void 0 : dB.id,
            lB = JSON.stringify(yB),
            JB = null !== (VB = TB.options.requestOptions) && void 0 !== VB ? VB : {},
            {
              headers: YB = {}
            } = JB,
            gB = Lp(JB, Dp),
            {
              keepalive: oB,
              signal: kB
            } = gB,
            LB = Lp(gB, Hp),
            OB = {};
          for (const [BB, TB] of Object.entries(YB)) OB[BB] = "function" === typeof TB ? yield TB(): TB;
          let DB = lB,
            uB = function(BB) {
              return "undefined" === typeof TextEncoder ? BB.length : (new TextEncoder).encode(BB).byteLength
            }(lB);
          const HB = {};
          return TB.compressionEnabled && (DB = yield TB.compress(lB), uB = DB.size, HB["Content-Encoding"] = "gzip"), {
            bodySize: uB,
            sessionId: pB,
            requestInit: oT({
              method: "POST",
              headers: oT(oT(oT(oT(oT({
                "Content-Type": "application/json"
              }, HB), OB), TB.options.apiKey ? {
                "x-api-key": TB.options.apiKey
              } : {}), pB ? {
                "x-faro-session-id": pB
              } : {}), {}, {
                "Idempotency-Key": ET(20)
              }),
              body: DB
            }, LB)
          }
        }))()
      }
      performAttempt(BB, TB, dB) {
        var VB = this;
        return GV((function*() {
          var yB;
          const pB = null === (yB = VB.options.requestOptions) || void 0 === yB ? void 0 : yB.signal;
          if (null === pB || void 0 === pB ? void 0 : pB.aborted) return {
            kind: "terminal",
            failure: {
              error: pB.reason
            },
            attemptsMade: 0
          };
          let lB = 0;
          try {
            var JB;
            const yB = yield VB.fetchWithKeepaliveFallback(BB.requestInit, BB.bodySize, !!dB || (null === (JB = VB.options.requestOptions) || void 0 === JB ? void 0 : JB.keepalive), TB, (() => lB++));
            if (VB.handleResponse(yB, BB.sessionId), yB.status >= 200 && yB.status < 300) return {
              kind: "success",
              attemptsMade: lB
            };
            const pB = {
              status: yB.status
            };
            return !Ep.has(yB.status) || dB ? {
              kind: "terminal",
              failure: pB,
              attemptsMade: lB
            } : {
              kind: "retry",
              failure: pB,
              attemptsMade: lB,
              retryAfterMs: vp.has(yB.status) ? VB.getRetryAfterDelayMs(yB) : void 0
            }
          } catch (YB) {
            const BB = {
              error: YB
            };
            return (null === pB || void 0 === pB ? void 0 : pB.aborted) || !VB.isFetchNetworkError(YB) || dB ? {
              kind: "terminal",
              failure: BB,
              attemptsMade: lB
            } : {
              kind: "retry",
              failure: BB,
              attemptsMade: lB
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(BB, TB, dB, VB, yB) {
        var pB = this;
        return GV((function*() {
          const lB = pB.getNow(),
            JB = pB.reserveKeepalive(TB, dB);
          try {
            return yield pB.fetchWithTimeout(oT(oT({}, BB), {}, {
              keepalive: JB.keepalive
            }), pB.requestTimeoutMs, yB)
          } catch (gB) {
            var YB;
            if (JB.keepalive && VB > 1 && pB.isFetchNetworkError(gB) && !(gB instanceof Np) && !(null === (YB = pB.options.requestOptions) || void 0 === YB || null === (YB = YB.signal) || void 0 === YB ? void 0 : YB.aborted)) {
              pB.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const TB = pB.requestTimeoutMs - (pB.getNow() - lB);
              return pB.fetchWithTimeout(oT(oT({}, BB), {}, {
                keepalive: !1
              }), TB, yB)
            }
            throw gB
          } finally {
            JB.release()
          }
        }))()
      }
      fetchWithTimeout(BB, TB, dB) {
        var VB = this;
        return GV((function*() {
          var yB;
          const pB = null === (yB = VB.options.requestOptions) || void 0 === yB ? void 0 : yB.signal;
          if (VB.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return dB(), fetch(VB.options.url, oT(oT({}, BB), {}, {
            signal: pB
          }));
          if (TB <= 0) throw new Np("Request timed out");
          const lB = new AbortController,
            JB = () => lB.abort(null === pB || void 0 === pB ? void 0 : pB.reason);
          null === pB || void 0 === pB || pB.addEventListener("abort", JB, {
            once: !0
          });
          let YB = !1;
          const gB = setTimeout((() => {
            YB = !0, lB.abort()
          }), TB);
          try {
            return dB(), yield fetch(VB.options.url, oT(oT({}, BB), {}, {
              signal: lB.signal
            }))
          } catch (oB) {
            if (YB && !(null === pB || void 0 === pB ? void 0 : pB.aborted)) throw new Np("Request timed out");
            throw oB
          } finally {
            clearTimeout(gB), null === pB || void 0 === pB || pB.removeEventListener("abort", JB)
          }
        }))()
      }
      getRetryAfterDelayMs(BB) {
        const TB = BB.headers.get("Retry-After");
        if (!TB) return;
        if (/^\d+$/.test(TB)) {
          const BB = 1e3 * Number(TB);
          return Number.isFinite(BB) ? BB : Number.POSITIVE_INFINITY
        }
        const dB = this.getNow(),
          VB = function(BB, TB) {
            const dB = yp.exec(BB);
            if (dB) {
              const [, BB, TB, VB, yB, pB, lB, JB] = dB;
              return op({
                weekday: Jp.indexOf(BB),
                day: Number(TB),
                month: gp.indexOf(VB),
                year: Number(yB),
                hour: Number(pB),
                minute: Number(lB),
                second: Number(JB)
              })
            }
            const VB = pp.exec(BB);
            if (VB) {
              const [, BB, dB, lB, JB, YB, gB, oB] = VB, kB = new Date(TB);
              if (Number.isNaN(kB.getTime())) return;
              const LB = kB.getUTCFullYear();
              let OB = 100 * Math.floor(LB / 100) + Number(JB);
              OB < LB && (OB += 100);
              const DB = gp.indexOf(lB),
                uB = {
                  month: DB,
                  day: Number(dB),
                  hour: Number(YB),
                  minute: Number(gB),
                  second: Number(oB),
                  millisecond: 0
                },
                HB = {
                  month: kB.getUTCMonth(),
                  day: kB.getUTCDate(),
                  hour: kB.getUTCHours(),
                  minute: kB.getUTCMinutes(),
                  second: kB.getUTCSeconds(),
                  millisecond: kB.getUTCMilliseconds()
                };
              return (OB > LB + 50 || OB === LB + 50 && (pB = HB, ((yB = uB).month - pB.month || yB.day - pB.day || yB.hour - pB.hour || yB.minute - pB.minute || yB.second - pB.second || yB.millisecond - pB.millisecond) > 0)) && (OB -= 100), op({
                weekday: Yp.indexOf(BB),
                day: Number(dB),
                month: DB,
                year: OB,
                hour: Number(YB),
                minute: Number(gB),
                second: Number(oB)
              })
            }
            var yB, pB;
            const lB = lp.exec(BB);
            if (!lB) return;
            const [, JB, YB, gB, oB, kB, LB, OB, DB] = lB;
            return op({
              weekday: Jp.indexOf(JB),
              day: Number(null !== gB && void 0 !== gB ? gB : oB),
              month: gp.indexOf(YB),
              year: Number(DB),
              hour: Number(kB),
              minute: Number(LB),
              second: Number(OB)
            })
          }(TB, dB);
        return null == VB ? void 0 : Math.max(0, VB - dB)
      }
      reserveKeepalive(BB, TB) {
        if (!1 === TB || BB > 6e4 || mp + BB > 6e4 || ip >= 9) return {
          keepalive: !1,
          release: hT
        };
        mp += BB, ip++;
        let dB = !1;
        return {
          keepalive: !0,
          release: () => {
            dB || (dB = !0, mp -= BB, ip--)
          }
        }
      }
      handleResponse(BB, TB) {
        202 === BB.status && "invalid" === BB.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), TB), BB.text().catch(hT)
      }
      isFetchNetworkError(BB) {
        return BB instanceof TypeError || BB instanceof Np || BB instanceof DOMException && "AbortError" === BB.name
      }
      compress(BB) {
        return GV((function*() {
          const TB = [],
            dB = new ReadableStream({
              start(TB) {
                TB.enqueue((new TextEncoder).encode(BB)), TB.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: BB,
              value: VB
            } = yield dB.read();
            if (BB) return new Blob(TB);
            TB.push(VB)
          }
        }))()
      }
      extendFaroSession(BB, TB, dB) {
        var VB, yB;
        const pB = BB.sessionTracking;
        if (!(null === pB || void 0 === pB ? void 0 : pB.enabled)) return void TB("Session expired.");
        const {
          fetchUserSession: lB,
          storeUserSession: JB
        } = WT(pB), YB = null === (VB = this.metas.value.session) || void 0 === VB ? void 0 : VB.id, gB = null === (yB = lB()) || void 0 === yB ? void 0 : yB.sessionId;
        dB && dB === YB && dB === gB ? (FT({
          fetchUserSession: lB,
          storeUserSession: JB
        })({
          forceSessionExtend: !0
        }), TB("Session expired; created new session.")) : TB("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const fp = () => {
      const BB = window.k6;
      return {
        k6: oT({
          isK6Browser: !0
        }, (null === BB || void 0 === BB ? void 0 : BB.testRunId) && {
          testRunId: null === BB || void 0 === BB ? void 0 : BB.testRunId
        })
      }
    };
    let sp, Mp;

    function zp() {
      let {
        generatePageId: BB,
        initialPageMeta: TB
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const dB = location.href;
        return UB(BB) && sp !== dB && (sp = dB, Mp = BB(location)), {
          page: oT(oT({
            url: dB
          }, Mp ? {
            id: Mp
          } : {}), TB)
        }
      }
    }

    function wp() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT,
        TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const dB = GT;
      return TB > 0 && (dB.error = TB >= 1 ? function() {
        for (var TB = arguments.length, VB = new Array(TB), yB = 0; yB < TB; yB++) VB[yB] = arguments[yB];
        BB.error(`${dB.prefix}\n`, ...VB)
      } : hT, dB.warn = TB >= 2 ? function() {
        for (var TB = arguments.length, VB = new Array(TB), yB = 0; yB < TB; yB++) VB[yB] = arguments[yB];
        BB.warn(`${dB.prefix}\n`, ...VB)
      } : hT, dB.info = TB >= 3 ? function() {
        for (var TB = arguments.length, VB = new Array(TB), yB = 0; yB < TB; yB++) VB[yB] = arguments[yB];
        BB.info(`${dB.prefix}\n`, ...VB)
      } : hT, dB.debug = TB >= 4 ? function() {
        for (var TB = arguments.length, VB = new Array(TB), yB = 0; yB < TB; yB++) VB[yB] = arguments[yB];
        BB.debug(`${dB.prefix}\n`, ...VB)
      } : hT), dB
    }
    const Up = "faro",
      Fp = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Kp = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function rp(BB) {
      var TB, dB, yB, pB, lB, JB;
      const YB = [],
        oB = wp(BB.unpatchedConsole, BB.internalLoggerLevel);
      BB.transports ? ((BB.url || BB.apiKey) && oB.error('if "transports" is defined, "url" and "apiKey" should not be defined'), YB.push(...BB.transports)) : BB.url ? YB.push(new tp({
        url: BB.url,
        apiKey: BB.apiKey,
        requestCompression: BB.requestCompression
      })) : oB.error('either "url" or "transports" must be defined');
      const {
        dedupe: kB = !0,
        eventDomain: LB = VB,
        globalObjectKey: OB = Up,
        instrumentations: DB = Wy(),
        internalLoggerLevel: uB = qT,
        isolate: HB = !1,
        logArgsSerializer: EB = rd,
        metas: vB = cp(BB),
        paused: mB = !1,
        preventGlobalExposure: iB = !1,
        unpatchedConsole: NB = eT,
        url: tB,
        experimental: fB
      } = BB, sB = Lp(BB, Kp), MB = null !== (TB = null === fB || void 0 === fB ? void 0 : fB.trackNavigation) && void 0 !== TB && TB, zB = {
        dataAttributeName: nV(null !== (dB = null === (yB = BB.userActionsInstrumentation) || void 0 === yB ? void 0 : yB.dataAttributeName) && void 0 !== dB ? dB : jV),
        excludeItem: null === (pB = BB.userActionsInstrumentation) || void 0 === pB ? void 0 : pB.excludeItem,
        initialActivityTimeout: eV(null === (lB = BB.userActionsInstrumentation) || void 0 === lB ? void 0 : lB.initialActivityTimeout, 100, (BB => oB.warn(BB)))
      };
      return oT(oT({}, sB), {}, {
        batching: oT(oT({}, Fp), BB.batching),
        dedupe: kB,
        globalObjectKey: OB,
        instrumentations: Ip(DB, BB),
        internalLoggerLevel: uB,
        isolate: HB,
        logArgsSerializer: EB,
        metas: vB,
        parseStacktrace: ud,
        paused: mB,
        preventGlobalExposure: iB,
        transports: YB,
        unpatchedConsole: NB,
        eventDomain: LB,
        ignoreUrls: [...null !== (JB = BB.ignoreUrls) && void 0 !== JB ? JB : [], ...tB ? [tB] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: oT(oT(oT({}, gB), BB.sessionTracking), Sp({
          trackGeolocation: BB.trackGeolocation,
          sessionTracking: BB.sessionTracking
        })),
        userActionsInstrumentation: zB,
        experimental: {
          trackNavigation: MB
        }
      })
    }

    function Ip(BB, TB) {
      let {
        experimental: dB
      } = TB;
      var VB;
      const yB = null !== (VB = null === dB || void 0 === dB ? void 0 : dB.trackNavigation) && void 0 !== VB && VB;
      return BB.filter((BB => !("@grafana/faro-web-sdk:instrumentation-navigation" === BB.name && !yB)))
    }

    function cp(BB) {
      var TB, dB, VB;
      const {
        page: yB,
        generatePageId: pB
      } = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.pageTracking) && void 0 !== TB ? TB : {}, lB = [xy, jy, zp({
        generatePageId: pB,
        initialPageMeta: yB
      }), ...null !== (dB = BB.metas) && void 0 !== dB ? dB : [], by];
      return wB(null === (VB = window) || void 0 === VB ? void 0 : VB.k6) ? [...lB, fp] : lB
    }

    function Sp(BB) {
      let {
        trackGeolocation: TB,
        sessionTracking: dB
      } = BB;
      var VB;
      const yB = {};
      return MB(TB) && (yB.geoLocationTrackingEnabled = TB), qB(yB) ? {} : {
        session: oT(oT({}, null !== (VB = null === dB || void 0 === dB ? void 0 : dB.session) && void 0 !== VB ? VB : {}), {}, {
          overrides: yB
        })
      }
    }
    const Pp = new WeakSet;

    function Qp(BB) {
      return Pp.add(BB), BB
    }

    function Rp(BB, TB) {
      if (BB.capture) return Qp(BB.capture(TB));
      const dB = Qp(BB.value);
      return null === TB || void 0 === TB || TB(), dB
    }

    function ap(BB) {
      const TB = `__faroBundleId_${BB}`,
        dB = null === oB || void 0 === oB ? void 0 : oB[TB];
      if ("string" === typeof dB && "" !== dB) return dB;
      const VB = "undefined" !== typeof window ? window[TB] : void 0;
      return "string" === typeof VB && "" !== VB ? VB : void 0
    }

    function Zp(BB) {
      var TB, dB;
      const VB = BB.config.app.name,
        yB = VB ? function(BB) {
          return null === oB || void 0 === oB ? void 0 : oB[`__faroGitHash_${BB}`]
        }(VB) : void 0,
        pB = {
          sdk: {
            version: dd,
            name: "faro"
          },
          app: nT({
            bundleId: VB && ap(VB)
          }, void 0 !== yB ? {
            gitHash: yB
          } : {})
        },
        lB = null === (TB = BB.config.sessionTracking) || void 0 === TB ? void 0 : TB.session;
      lB && BB.api.setSession(lB), BB.config.app && (pB.app = nT(nT({}, BB.config.app), pB.app)), BB.config.user && (pB.user = BB.config.user), BB.config.view && (pB.view = BB.config.view), BB.metas.add(pB, ...null !== (dB = BB.config.metas) && void 0 !== dB ? dB : [])
    }
    var Xp = class {
      constructor(BB, TB) {
        var dB, VB;
        this.signalBuffer = [], this.itemLimit = null !== (dB = null === TB || void 0 === TB ? void 0 : TB.itemLimit) && void 0 !== dB ? dB : 50, this.sendTimeout = null !== (VB = null === TB || void 0 === TB ? void 0 : TB.sendTimeout) && void 0 !== VB ? VB : 250, this.paused = (null === TB || void 0 === TB ? void 0 : TB.paused) || !1, this.sendFn = BB, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const TB = new Map;
        return BB.forEach((BB => {
          const dB = JSON.stringify(BB.meta);
          let VB = TB.get(dB);
          VB = void 0 === VB ? [BB] : [...VB, BB], TB.set(dB, VB)
        })), Array.from(TB.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const BB = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(BB).forEach(this.sendFn)
        } catch (TB) {
          throw this.signalBuffer = [...BB, ...this.signalBuffer], this.trimBufferToLimit(), TB
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Wp(BB, TB, dB, VB) {
      var yB;
      TB.debug("Initializing transports");
      const pB = [];
      let lB = [];
      const JB = BB => {
        let TB = BB;
        for (const VB of lB) {
          const BB = TB.map(VB).filter(Boolean);
          if (0 === BB.length) return [];
          TB = hp(BB, dB)
        }
        return TB
      };
      let YB;
      (null === (yB = dB.batching) || void 0 === yB ? void 0 : yB.enabled) && (YB = new Xp((BB => {
        const dB = JB(BB);
        if (0 !== dB.length)
          for (const VB of pB) TB.debug(`Transporting item using ${VB.name}\n`, dB), VB.isBatched() && VB.send(dB)
      }), {
        sendTimeout: dB.batching.sendTimeout,
        itemLimit: dB.batching.itemLimit,
        paused: dB.paused
      }));
      return {
        add: function() {
          TB.debug("Adding transports");
          for (var yB = arguments.length, lB = new Array(yB), JB = 0; JB < yB; JB++) lB[JB] = arguments[JB];
          lB.forEach((yB => {
            TB.debug(`Adding "${yB.name}" transport`), pB.some((BB => BB === yB)) ? TB.warn(`Transport ${yB.name} is already added`) : (yB.unpatchedConsole = BB, yB.internalLogger = TB, yB.config = dB, yB.metas = VB, pB.push(yB))
          }))
        },
        addBeforeSendHooks: function() {
          TB.debug("Adding beforeSendHooks\n", lB);
          for (var BB = arguments.length, dB = new Array(BB), VB = 0; VB < BB; VB++) dB[VB] = arguments[VB];
          dB.forEach((BB => {
            BB && lB.push(BB)
          }))
        },
        getBeforeSendHooks: () => [...lB],
        execute: BB => {
          var yB;
          if (!dB.paused && ZT(VB).shouldCapture()) {
            if (kB = BB.meta, !Pp.has(kB)) {
              var lB, gB, oB;
              const TB = null === (lB = VB.value.session) || void 0 === lB ? void 0 : lB.id,
                yB = Rp(VB);
              if (dB.paused) return;
              const pB = nT({}, BB.meta);
              (null === (gB = pB.session) || void 0 === gB ? void 0 : gB.id) === TB && (null === (oB = yB.session) || void 0 === oB ? void 0 : oB.id) !== TB && (void 0 === yB.session ? delete pB.session : pB.session = yB.session), BB = nT(nT({}, BB), {}, {
                meta: Qp(pB)
              })
            }
            var kB;
            (null === (yB = dB.batching) || void 0 === yB ? void 0 : yB.enabled) && (null === YB || void 0 === YB || YB.addItem(BB)), (BB => {
              var VB;
              if ((null === (VB = dB.batching) || void 0 === VB ? void 0 : VB.enabled) && pB.every((BB => BB.isBatched()))) return;
              const [yB] = JB([BB]);
              if (void 0 !== yB)
                for (const JB of pB) {
                  var lB;
                  TB.debug(`Transporting item using ${JB.name}\n`, yB), JB.isBatched() ? (null === (lB = dB.batching) || void 0 === lB ? void 0 : lB.enabled) || JB.send([yB]) : JB.send(yB)
                }
            })(BB)
          }
        },
        isPaused: () => dB.paused,
        pause: () => {
          TB.debug("Pausing transports"), null === YB || void 0 === YB || YB.pause(), dB.paused = !0
        },
        remove: function() {
          TB.debug("Removing transports");
          for (var BB = arguments.length, dB = new Array(BB), VB = 0; VB < BB; VB++) dB[VB] = arguments[VB];
          dB.forEach((BB => {
            TB.debug(`Removing "${BB.name}" transport`);
            const dB = pB.indexOf(BB); - 1 !== dB ? pB.splice(dB, 1) : TB.warn(`Transport "${BB.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var BB = arguments.length, dB = new Array(BB), VB = 0; VB < BB; VB++) dB[VB] = arguments[VB];
          TB.debug("Removing beforeSendHooks"), lB = lB.filter((BB => !dB.includes(BB)))
        },
        get transports() {
          return [...pB]
        },
        unpause: () => {
          TB.debug("Unpausing transports"), null === YB || void 0 === YB || YB.start(), dB.paused = !1
        }
      }
    }

    function hp(BB, TB) {
      if (TB.preserveOriginalError)
        for (const dB of BB) "exception" === dB.type && delete dB.payload.originalError;
      return BB
    }
    let Cp = eT;

    function Gp(BB) {
      var TB;
      return Cp = null !== (TB = BB.unpatchedConsole) && void 0 !== TB ? TB : Cp, Cp
    }
    let qp, xp = GT;

    function jp(BB, TB) {
      return xp = wp(BB, TB.internalLoggerLevel), xp
    }

    function Ap(BB) {
      let {
        internalLogger: TB,
        config: dB,
        metas: VB,
        transports: yB,
        tracesApi: pB,
        userActionsApi: lB
      } = BB;
      var JB;
      TB.debug("Initializing exceptions API");
      let YB = null;
      qp = null !== (JB = dB.parseStacktrace) && void 0 !== JB ? JB : qp;
      const gB = BB => {
          TB.debug("Changing stacktrace parser"), qp = null !== BB && void 0 !== BB ? BB : qp
        },
        {
          ignoreErrors: oB = [],
          preserveOriginalError: kB
        } = dB;
      return gB(dB.parseStacktrace), {
        changeStacktraceParser: gB,
        getStacktraceParser: () => qp,
        pushError: function(BB) {
          let {
            skipDedupe: JB,
            stackFrames: gB,
            type: LB,
            context: OB,
            spanContext: DB,
            timestampOverwriteMs: uB,
            originalError: HB,
            fingerprint: EB,
            fatal: vB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(BB, TB) {
              const {
                message: dB,
                name: VB,
                stack: yB
              } = TB;
              return pB = BB, lB = dB + " " + VB + " " + yB, pB.some((BB => tB(BB) ? lB.includes(BB) : !!lB.match(BB)));
              var pB, lB
            }(oB, null !== HB && void 0 !== HB ? HB : BB)) try {
            var mB, iB;
            if (!ZT(VB).shouldCapture()) return;
            const oB = PT(nT(nT({}, function(BB) {
                let TB = BB.cause;
                QB(TB) ? TB = BB.cause.toString() : null !== TB && (wB(BB.cause) || FB(BB.cause)) ? TB = ST(BB.cause) : null != TB && (TB = BB.cause.toString());
                return null == TB ? {} : {
                  cause: TB
                }
              }(null !== HB && void 0 !== HB ? HB : BB)), null !== OB && void 0 !== OB ? OB : {})),
              tB = nT(nT(nT(nT({
                type: LB || BB.name || "Error",
                value: BB.message,
                timestamp: uB ? uT(uB) : DT(),
                trace: DB ? {
                  trace_id: DB.traceId,
                  span_id: DB.spanId
                } : pB.getTraceContext()
              }, qB(oB) ? {} : {
                context: oB
              }), kB ? {
                originalError: HB
              } : {}), EB ? {
                fingerprint: EB
              } : {}), void 0 !== vB ? {
                fatal: vB
              } : {});
            gB = null !== (mB = gB) && void 0 !== mB ? mB : BB.stack ? null === qp || void 0 === qp ? void 0 : qp(BB).frames : void 0, (null === gB || void 0 === gB ? void 0 : gB.length) && (tB.stacktrace = {
              frames: gB
            });
            const fB = {
              type: tB.type,
              value: tB.value,
              stacktrace: tB.stacktrace,
              context: tB.context,
              fingerprint: tB.fingerprint,
              fatal: null !== (iB = tB.fatal) && void 0 !== iB && iB
            };
            if (!JB && dB.dedupe && !NB(YB) && vT(fB, YB)) return void TB.debug("Skipping error push because it is the same as the last one\n", tB);
            const sB = YB,
              MB = Rp(VB);
            if (YB !== sB && !JB && dB.dedupe && vT(fB, YB)) return;
            YB = fB;
            const zB = {
              meta: MB,
              payload: tB,
              type: "exception"
            };
            TB.debug("Pushing exception\n", zB), fy(lB.getActiveUserAction(), zB) || yB.execute(zB)
          } catch (fB) {
            TB.error("Error pushing event", fB)
          }
        }
      }
    }

    function bp(BB, TB, dB, VB, yB) {
      TB.debug("Initializing API");
      let pB = null;
      const lB = function(BB) {
          let {
            transports: TB,
            internalLogger: dB,
            config: VB,
            pushEvent: yB
          } = BB;
          var pB;
          const lB = null === (pB = VB.userActionsInstrumentation) || void 0 === pB ? void 0 : pB.excludeItem;
          let JB;
          const YB = () => JB;
          return {
            startUserAction: (BB, VB, pB) => {
              if (void 0 === YB()) {
                const dB = new Ny({
                  name: BB,
                  transports: TB,
                  attributes: VB,
                  trigger: (null === pB || void 0 === pB ? void 0 : pB.triggerName) || "faroApiCall",
                  importance: (null === pB || void 0 === pB ? void 0 : pB.importance) || my.Normal,
                  trackUserActionsExcludeItem: lB,
                  pushEvent: yB
                });
                return dB.filter((BB => [3, 2].includes(BB))).first().subscribe((() => {
                  JB = void 0
                })), ty.notify({
                  type: vy,
                  userAction: dB,
                  initialActivityTimeout: null === pB || void 0 === pB ? void 0 : pB.initialActivityTimeout
                }), JB = dB, JB
              }
              dB.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: YB
          }
        }({
          transports: yB,
          config: dB,
          internalLogger: TB,
          pushEvent: (BB, dB, VB, yB) => {
            pB ? pB(BB, dB, VB, yB) : TB.warn("pushEventImpl is not initialized. Event dropped:", {
              name: BB,
              attributes: dB,
              domain: VB,
              options: yB
            })
          }
        }),
        JB = function(BB, TB, dB, VB, yB) {
          let pB;
          return TB.debug("Initializing traces API"), {
            getOTEL: () => pB,
            getTraceContext: () => {
              const BB = null === pB || void 0 === pB ? void 0 : pB.trace.getSpanContext(pB.context.active());
              return BB ? {
                trace_id: BB.traceId,
                span_id: BB.spanId
              } : void 0
            },
            initOTEL: (BB, dB) => {
              TB.debug("Initializing OpenTelemetry"), pB = {
                trace: BB,
                context: dB
              }
            },
            isOTELInitialized: () => !!pB,
            pushTraces: BB => {
              try {
                if (!ZT(VB).shouldCapture()) return;
                const dB = {
                  type: "trace",
                  payload: BB,
                  meta: Rp(VB)
                };
                TB.debug("Pushing trace\n", dB), yB.execute(dB)
              } catch (dB) {
                TB.error("Error pushing trace\n", dB)
              }
            }
          }
        }(0, TB, 0, VB, yB),
        YB = {
          unpatchedConsole: BB,
          internalLogger: TB,
          userActionsApi: lB,
          config: dB,
          metas: VB,
          transports: yB,
          tracesApi: JB
        },
        gB = function(BB) {
          let {
            internalLogger: TB,
            config: dB,
            metas: VB,
            transports: yB,
            tracesApi: pB,
            userActionsApi: lB
          } = BB, JB = null;
          return {
            pushEvent: function(BB, YB, gB) {
              let {
                skipDedupe: oB,
                spanContext: kB,
                timestampOverwriteMs: LB,
                customPayloadTransformer: OB = BB => BB
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!ZT(VB).shouldCapture()) return;
                const DB = PT(YB),
                  uB = OB({
                    name: BB,
                    domain: null !== gB && void 0 !== gB ? gB : dB.eventDomain,
                    attributes: qB(DB) ? void 0 : DB,
                    timestamp: LB ? uT(LB) : DT(),
                    trace: kB ? {
                      trace_id: kB.traceId,
                      span_id: kB.spanId
                    } : pB.getTraceContext()
                  }),
                  HB = {
                    name: uB.name,
                    attributes: uB.attributes,
                    domain: uB.domain
                  };
                if (!oB && dB.dedupe && !NB(JB) && vT(HB, JB)) return void TB.debug("Skipping event push because it is the same as the last one\n", uB);
                const EB = JB,
                  vB = Rp(VB);
                if (JB !== EB && !oB && dB.dedupe && vT(HB, JB)) return;
                JB = HB;
                const mB = {
                  meta: vB,
                  payload: uB,
                  type: "event"
                };
                TB.debug("Pushing event\n", mB), fy(lB.getActiveUserAction(), mB) || yB.execute(mB)
              } catch (DB) {
                TB.error("Error pushing event", DB)
              }
            }
          }
        }(YB);
      return pB = gB.pushEvent, nT(nT(nT(nT(nT(nT(nT({}, JB), Ap(YB)), function(BB) {
        let TB, dB, VB, yB, {
          internalLogger: pB,
          metas: lB
        } = BB;
        pB.debug("Initializing meta API");
        const JB = BB => {
            dB && lB.remove(dB), dB = {
              user: BB
            }, lB.add(dB)
          },
          YB = (BB, dB) => {
            var VB;
            const yB = null === dB || void 0 === dB ? void 0 : dB.overrides,
              pB = yB ? {
                overrides: nT(nT({}, null === TB || void 0 === TB || null === (VB = TB.session) || void 0 === VB ? void 0 : VB.overrides), yB)
              } : {};
            TB && lB.remove(TB), TB = {
              session: nT(nT({}, qB(BB) ? void 0 : BB), pB)
            }, lB.add(TB)
          },
          gB = (BB, TB) => {
            ZT(lB).notifySessionUpdate({
              type: "replace",
              session: BB,
              overrides: null === TB || void 0 === TB ? void 0 : TB.overrides
            }), YB(BB, TB)
          },
          oB = () => lB.value.session,
          kB = () => lB.value.page;
        return {
          setUser: JB,
          resetUser: JB,
          setSession: gB,
          resetSession: gB,
          getSession: oB,
          setView: (BB, TB) => {
            var dB;
            if ((null === TB || void 0 === TB ? void 0 : TB.overrides) && (ZT(lB).notifySessionUpdate({
                type: "overrides",
                overrides: TB.overrides
              }), YB(oB(), {
                overrides: TB.overrides
              })), (null === VB || void 0 === VB || null === (dB = VB.view) || void 0 === dB ? void 0 : dB.name) === (null === BB || void 0 === BB ? void 0 : BB.name)) return;
            const yB = VB;
            VB = {
              view: BB
            }, lB.add(VB), yB && lB.remove(yB)
          },
          getView: () => lB.value.view,
          setPage: BB => {
            var TB;
            const dB = tB(BB) ? nT(nT({}, null !== (TB = null === yB || void 0 === yB ? void 0 : yB.page) && void 0 !== TB ? TB : kB()), {}, {
              id: BB
            }) : BB;
            yB && lB.remove(yB), yB = {
              page: dB
            }, lB.add(yB)
          },
          getPage: kB
        }
      }(YB)), function(BB) {
        let {
          internalLogger: TB,
          config: dB,
          metas: VB,
          transports: yB,
          tracesApi: pB,
          userActionsApi: lB
        } = BB;
        var JB;
        TB.debug("Initializing logs API");
        let YB = null;
        const gB = null !== (JB = dB.logArgsSerializer) && void 0 !== JB ? JB : rd;
        return {
          pushLog: function(BB) {
            let {
              context: JB,
              level: oB,
              skipDedupe: kB,
              spanContext: LB,
              timestampOverwriteMs: OB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!ZT(VB).shouldCapture()) return;
              const DB = PT(JB),
                uB = {
                  message: gB(BB),
                  level: null !== oB && void 0 !== oB ? oB : "log",
                  context: qB(DB) ? void 0 : DB,
                  timestamp: OB ? uT(OB) : DT(),
                  trace: LB ? {
                    trace_id: LB.traceId,
                    span_id: LB.spanId
                  } : pB.getTraceContext()
                },
                HB = {
                  message: uB.message,
                  level: uB.level,
                  context: uB.context
                };
              if (!kB && dB.dedupe && !NB(YB) && vT(HB, YB)) return void TB.debug("Skipping log push because it is the same as the last one\n", uB);
              const EB = YB,
                vB = Rp(VB);
              if (YB !== EB && !kB && dB.dedupe && vT(HB, YB)) return;
              YB = HB;
              const mB = {
                type: "log",
                payload: uB,
                meta: vB
              };
              TB.debug("Pushing log\n", mB), fy(lB.getActiveUserAction(), mB) || yB.execute(mB)
            } catch (DB) {
              TB.error("Error pushing log\n", DB)
            }
          }
        }
      }(YB)), function(BB) {
        let {
          internalLogger: TB,
          config: dB,
          metas: VB,
          transports: yB,
          tracesApi: pB,
          userActionsApi: lB
        } = BB;
        TB.debug("Initializing measurements API");
        let JB = null;
        return {
          pushMeasurement: function(BB) {
            let {
              skipDedupe: YB,
              context: gB,
              spanContext: oB,
              timestampOverwriteMs: kB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!ZT(VB).shouldCapture()) return;
              const LB = PT(gB),
                OB = nT(nT({}, BB), {}, {
                  trace: oB ? {
                    trace_id: oB.traceId,
                    span_id: oB.spanId
                  } : pB.getTraceContext(),
                  timestamp: kB ? uT(kB) : DT(),
                  context: qB(LB) ? void 0 : LB
                }),
                DB = {
                  type: OB.type,
                  values: OB.values,
                  context: OB.context
                };
              if (!YB && dB.dedupe && !NB(JB) && vT(DB, JB)) return void TB.debug("Skipping measurement push because it is the same as the last one\n", OB);
              const uB = JB,
                HB = Rp(VB);
              if (JB !== uB && !YB && dB.dedupe && vT(DB, JB)) return;
              JB = DB;
              const EB = {
                type: "measurement",
                payload: OB,
                meta: HB
              };
              TB.debug("Pushing measurement\n", EB), fy(lB.getActiveUserAction(), EB) || yB.execute(EB)
            } catch (LB) {
              TB.error("Error pushing measurement\n", LB)
            }
          }
        }
      }(YB)), gB), lB)
    }

    function np(BB) {
      const TB = Gp(BB),
        dB = jp(TB, BB);
      if (DB() && !BB.isolate) return void dB.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      dB.debug("Initializing");
      const VB = function(BB, TB) {
          let dB, VB = [],
            yB = [],
            pB = [],
            lB = 0,
            JB = 0;
          const YB = () => VB.reduce(((BB, TB) => Object.assign(BB, UB(TB) ? TB() : TB)), {}),
            gB = () => {
              if (yB.length) {
                const BB = YB();
                yB.forEach((TB => TB(BB)))
              }
            };
          return {
            add: function() {
              for (var BB = arguments.length, dB = new Array(BB), yB = 0; yB < BB; yB++) dB[yB] = arguments[yB];
              TB.debug("Adding metas\n", dB), VB.push(...dB), gB()
            },
            remove: function() {
              for (var BB = arguments.length, dB = new Array(BB), yB = 0; yB < BB; yB++) dB[yB] = arguments[yB];
              TB.debug("Removing metas\n", dB), VB = VB.filter((BB => !dB.includes(BB))), gB()
            },
            addListener: BB => {
              TB.debug("Adding metas listener\n", BB), yB.push(BB)
            },
            removeListener: BB => {
              TB.debug("Removing metas listener\n", BB), yB = yB.filter((TB => TB !== BB))
            },
            capture: BB => {
              var TB;
              const VB = void 0 !== dB,
                yB = null !== (TB = dB) && void 0 !== TB ? TB : pB;
              VB || (dB = yB, lB = 0, JB = yB.length);
              try {
                for (; lB < JB;) {
                  const BB = yB[lB++];
                  null === BB || void 0 === BB || BB()
                }
                const TB = Qp(YB());
                return null === BB || void 0 === BB || BB(), TB
              } finally {
                VB || (dB = void 0)
              }
            },
            addCaptureListener: BB => {
              pB.push(BB)
            },
            removeCaptureListener: BB => {
              pB = pB.filter((TB => TB !== BB))
            },
            get value() {
              return YB()
            }
          }
        }(0, dB),
        yB = Wp(TB, dB, BB, VB),
        pB = bp(TB, dB, BB, VB, yB),
        lB = function(BB, TB, dB, VB, yB, pB) {
          TB.debug("Initializing instrumentations");
          const lB = [];
          return {
            add: function() {
              TB.debug("Adding instrumentations");
              for (var JB = arguments.length, YB = new Array(JB), gB = 0; gB < JB; gB++) YB[gB] = arguments[gB];
              YB.forEach((JB => {
                TB.debug(`Adding "${JB.name}" instrumentation`), lB.some((BB => BB.name === JB.name)) ? TB.warn(`Instrumentation ${JB.name} is already added`) : (JB.unpatchedConsole = BB, JB.internalLogger = TB, JB.config = dB, JB.metas = VB, JB.transports = yB, JB.api = pB, lB.push(JB), JB.initialize())
              }))
            },
            get instrumentations() {
              return [...lB]
            },
            remove: function() {
              TB.debug("Removing instrumentations");
              for (var BB = arguments.length, dB = new Array(BB), VB = 0; VB < BB; VB++) dB[VB] = arguments[VB];
              dB.forEach((BB => {
                var dB, VB;
                TB.debug(`Removing "${BB.name}" instrumentation`);
                const yB = lB.reduce(((TB, dB, VB) => null === TB && dB.name === BB.name ? VB : null), null);
                null !== yB ? (null === (dB = (VB = lB[yB]).destroy) || void 0 === dB || dB.call(VB), lB.splice(yB, 1)) : TB.warn(`Instrumentation "${BB.name}" is not added`)
              }))
            }
          }
        }(TB, dB, BB, VB, yB, pB),
        JB = HB(TB, dB, BB, VB, yB, pB, lB);
      return Zp(JB),
        function(BB) {
          BB.transports.add(...BB.config.transports), BB.transports.addBeforeSendHooks(BB.config.beforeSend)
        }(JB),
        function(BB) {
          BB.instrumentations.add(...BB.config.instrumentations)
        }(JB), JB
    }

    function ep(BB) {
      const TB = rp(BB);
      if (TB) return np(TB)
    }
  },
  7404: function(BB, TB, dB) {
    var VB;
    ! function(yB, pB) {
      var lB = "function",
        JB = "undefined",
        YB = "object",
        gB = "string",
        oB = "major",
        kB = "model",
        LB = "name",
        OB = "type",
        DB = "vendor",
        uB = "version",
        HB = "architecture",
        EB = "console",
        vB = "mobile",
        mB = "tablet",
        iB = "smarttv",
        NB = "wearable",
        tB = "embedded",
        fB = "Amazon",
        sB = "Apple",
        MB = "ASUS",
        zB = "BlackBerry",
        wB = "Browser",
        UB = "Chrome",
        FB = "Firefox",
        KB = "Google",
        rB = "Honor",
        IB = "Huawei",
        cB = "LG",
        SB = "Microsoft",
        PB = "Motorola",
        QB = "Nvidia",
        RB = "OnePlus",
        aB = "Opera",
        ZB = "OPPO",
        XB = "Samsung",
        WB = "Sharp",
        hB = "Sony",
        CB = "Xiaomi",
        GB = "Zebra",
        qB = "Facebook",
        xB = "Chromium OS",
        jB = "Mac OS",
        AB = " Browser",
        bB = function(BB) {
          for (var TB = {}, dB = 0; dB < BB.length; dB++) TB[BB[dB].toUpperCase()] = BB[dB];
          return TB
        },
        nB = function(BB, TB) {
          return typeof BB === gB && -1 !== eB(TB).indexOf(eB(BB))
        },
        eB = function(BB) {
          return BB.toLowerCase()
        },
        BT = function(BB, TB) {
          if (typeof BB === gB) return BB = BB.replace(/^\s\s*/, ""), typeof TB === JB ? BB : BB.substring(0, 500)
        },
        TT = function(BB, TB) {
          for (var dB, VB, yB, JB, gB, oB, kB = 0; kB < TB.length && !gB;) {
            var LB = TB[kB],
              OB = TB[kB + 1];
            for (dB = VB = 0; dB < LB.length && !gB && LB[dB];)
              if (gB = LB[dB++].exec(BB))
                for (yB = 0; yB < OB.length; yB++) oB = gB[++VB], typeof(JB = OB[yB]) === YB && JB.length > 0 ? 2 === JB.length ? typeof JB[1] == lB ? this[JB[0]] = JB[1].call(this, oB) : this[JB[0]] = JB[1] : 3 === JB.length ? typeof JB[1] !== lB || JB[1].exec && JB[1].test ? this[JB[0]] = oB ? oB.replace(JB[1], JB[2]) : pB : this[JB[0]] = oB ? JB[1].call(this, oB, JB[2]) : pB : 4 === JB.length && (this[JB[0]] = oB ? JB[3].call(this, oB.replace(JB[1], JB[2])) : pB) : this[JB] = oB || pB;
            kB += 2
          }
        },
        dT = function(BB, TB) {
          for (var dB in TB)
            if (typeof TB[dB] === YB && TB[dB].length > 0) {
              for (var VB = 0; VB < TB[dB].length; VB++)
                if (nB(TB[dB][VB], BB)) return "?" === dB ? pB : dB
            } else if (nB(TB[dB], BB)) return "?" === dB ? pB : dB;
          return TB.hasOwnProperty("*") ? TB["*"] : BB
        },
        VT = {
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
        yT = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [uB, [LB, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [uB, [LB, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [LB, uB],
            [/opios[\/ ]+([\w\.]+)/i],
            [uB, [LB, aB + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [uB, [LB, aB + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [uB, [LB, aB]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [uB, [LB, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [uB, [LB, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [LB, uB],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [uB, [LB, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [uB, [LB, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [uB, [LB, "UC" + wB]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [uB, [LB, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [uB, [LB, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [uB, [LB, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [uB, [LB, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [uB, [LB, "Smart Lenovo " + wB]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [LB, /(.+)/, "$1 Secure " + wB], uB
            ],
            [/\bfocus\/([\w\.]+)/i],
            [uB, [LB, FB + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [uB, [LB, aB + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [uB, [LB, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [uB, [LB, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [uB, [LB, aB + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [uB, [LB, "MIUI" + AB]],
            [/fxios\/([\w\.-]+)/i],
            [uB, [LB, FB]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [uB, [LB, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [LB, /(.+)/, "$1Browser"], uB
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [LB, /(.+)/, "$1" + AB], uB
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [uB, [LB, XB + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [uB, [LB, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [LB, "Sogou Mobile"], uB
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [LB, uB],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [LB],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [uB, LB],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [LB, qB], uB
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [LB, uB],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [uB, [LB, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [uB, [LB, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [uB, [LB, UB + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [LB, UB + " WebView"], uB
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [uB, [LB, "Android " + wB]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [LB, uB],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [uB, [LB, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [uB, LB],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [LB, [uB, dT, {
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
            [LB, uB],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [LB, "Netscape"], uB
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [LB, uB],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [uB, [LB, FB + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [LB, [uB, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [LB, [uB, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [HB, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [HB, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [HB, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [HB, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [HB, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [HB, /ower/, "", eB]
            ],
            [/ sun4\w[;\)]/i],
            [
              [HB, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [HB, eB]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [kB, [DB, XB],
              [OB, mB]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [kB, [DB, XB],
              [OB, vB]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [kB, [DB, sB],
              [OB, vB]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [kB, [DB, sB],
              [OB, mB]
            ],
            [/(macintosh);/i],
            [kB, [DB, sB]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [kB, [DB, WB],
              [OB, vB]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [kB, [DB, rB],
              [OB, mB]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [kB, [DB, rB],
              [OB, vB]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [kB, [DB, IB],
              [OB, mB]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [kB, [DB, IB],
              [OB, vB]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [kB, /_/g, " "],
              [DB, CB],
              [OB, mB]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [kB, /_/g, " "],
              [DB, CB],
              [OB, vB]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [kB, [DB, ZB],
              [OB, vB]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [kB, [DB, dT, {
                OnePlus: ["304", "403", "203"],
                "*": ZB
              }],
              [OB, mB]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [kB, [DB, "Vivo"],
              [OB, vB]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [kB, [DB, "Realme"],
              [OB, vB]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [kB, [DB, PB],
              [OB, vB]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [kB, [DB, PB],
              [OB, mB]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [kB, [DB, cB],
              [OB, mB]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [kB, [DB, cB],
              [OB, vB]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [kB, [DB, "Lenovo"],
              [OB, mB]
            ],
            [/(nokia) (t[12][01])/i],
            [DB, kB, [OB, mB]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [kB, /_/g, " "],
              [OB, vB],
              [DB, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [kB, [DB, KB],
              [OB, mB]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [kB, [DB, KB],
              [OB, vB]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [kB, [DB, hB],
              [OB, vB]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [kB, "Xperia Tablet"],
              [DB, hB],
              [OB, mB]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [kB, [DB, RB],
              [OB, vB]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [kB, [DB, fB],
              [OB, mB]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [kB, /(.+)/g, "Fire Phone $1"],
              [DB, fB],
              [OB, vB]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [kB, DB, [OB, mB]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [kB, [DB, zB],
              [OB, vB]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [kB, [DB, MB],
              [OB, mB]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [kB, [DB, MB],
              [OB, vB]
            ],
            [/(nexus 9)/i],
            [kB, [DB, "HTC"],
              [OB, mB]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [DB, [kB, /_/g, " "],
              [OB, vB]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [kB, [DB, "TCL"],
              [OB, mB]
            ],
            [/(itel) ((\w+))/i],
            [
              [DB, eB], kB, [OB, dT, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [kB, [DB, "Acer"],
              [OB, mB]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [kB, [DB, "Meizu"],
              [OB, vB]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [kB, [DB, "Ulefone"],
              [OB, vB]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [kB, [DB, "Energizer"],
              [OB, vB]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [kB, [DB, "Cat"],
              [OB, vB]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [kB, [DB, "Smartfren"],
              [OB, vB]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [kB, [DB, "Nothing"],
              [OB, vB]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [kB, [DB, "Archos"],
              [OB, mB]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [kB, [DB, "Archos"],
              [OB, vB]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [DB, kB, [OB, mB]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [DB, kB, [OB, vB]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [DB, kB, [OB, mB]],
            [/(surface duo)/i],
            [kB, [DB, SB],
              [OB, mB]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [kB, [DB, "Fairphone"],
              [OB, vB]
            ],
            [/(u304aa)/i],
            [kB, [DB, "AT&T"],
              [OB, vB]
            ],
            [/\bsie-(\w*)/i],
            [kB, [DB, "Siemens"],
              [OB, vB]
            ],
            [/\b(rct\w+) b/i],
            [kB, [DB, "RCA"],
              [OB, mB]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [kB, [DB, "Dell"],
              [OB, mB]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [kB, [DB, "Verizon"],
              [OB, mB]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [kB, [DB, "Barnes & Noble"],
              [OB, mB]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [kB, [DB, "NuVision"],
              [OB, mB]
            ],
            [/\b(k88) b/i],
            [kB, [DB, "ZTE"],
              [OB, mB]
            ],
            [/\b(nx\d{3}j) b/i],
            [kB, [DB, "ZTE"],
              [OB, vB]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [kB, [DB, "Swiss"],
              [OB, vB]
            ],
            [/\b(zur\d{3}) b/i],
            [kB, [DB, "Swiss"],
              [OB, mB]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [kB, [DB, "Zeki"],
              [OB, mB]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [DB, "Dragon Touch"], kB, [OB, mB]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [kB, [DB, "Insignia"],
              [OB, mB]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [kB, [DB, "NextBook"],
              [OB, mB]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [DB, "Voice"], kB, [OB, vB]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [DB, "LvTel"], kB, [OB, vB]
            ],
            [/\b(ph-1) /i],
            [kB, [DB, "Essential"],
              [OB, vB]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [kB, [DB, "Envizen"],
              [OB, mB]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [kB, [DB, "MachSpeed"],
              [OB, mB]
            ],
            [/\btu_(1491) b/i],
            [kB, [DB, "Rotor"],
              [OB, mB]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [kB, [DB, QB],
              [OB, mB]
            ],
            [/(sprint) (\w+)/i],
            [DB, kB, [OB, vB]],
            [/(kin\.[onetw]{3})/i],
            [
              [kB, /\./g, " "],
              [DB, SB],
              [OB, vB]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [kB, [DB, GB],
              [OB, mB]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [kB, [DB, GB],
              [OB, vB]
            ],
            [/smart-tv.+(samsung)/i],
            [DB, [OB, iB]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [kB, /^/, "SmartTV"],
              [DB, XB],
              [OB, iB]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [DB, cB],
              [OB, iB]
            ],
            [/(apple) ?tv/i],
            [DB, [kB, sB + " TV"],
              [OB, iB]
            ],
            [/crkey/i],
            [
              [kB, UB + "cast"],
              [DB, KB],
              [OB, iB]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [kB, [DB, fB],
              [OB, iB]
            ],
            [/(shield \w+ tv)/i],
            [kB, [DB, QB],
              [OB, iB]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [kB, [DB, WB],
              [OB, iB]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [kB, [DB, hB],
              [OB, iB]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [kB, [DB, CB],
              [OB, iB]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [DB, kB, [OB, iB]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [DB, BT],
              [kB, BT],
              [OB, iB]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [kB, [OB, iB]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [OB, iB]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [DB, kB, [OB, EB]],
            [/droid.+; (shield)( bui|\))/i],
            [kB, [DB, QB],
              [OB, EB]
            ],
            [/(playstation \w+)/i],
            [kB, [DB, hB],
              [OB, EB]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [kB, [DB, SB],
              [OB, EB]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [kB, [DB, XB],
              [OB, NB]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [DB, kB, [OB, NB]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [kB, [DB, ZB],
              [OB, NB]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [kB, [DB, sB],
              [OB, NB]
            ],
            [/(opwwe\d{3})/i],
            [kB, [DB, RB],
              [OB, NB]
            ],
            [/(moto 360)/i],
            [kB, [DB, PB],
              [OB, NB]
            ],
            [/(smartwatch 3)/i],
            [kB, [DB, hB],
              [OB, NB]
            ],
            [/(g watch r)/i],
            [kB, [DB, cB],
              [OB, NB]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [kB, [DB, GB],
              [OB, NB]
            ],
            [/droid.+; (glass) \d/i],
            [kB, [DB, KB],
              [OB, NB]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [DB, kB, [OB, NB]],
            [/; (quest( \d| pro)?)/i],
            [kB, [DB, qB],
              [OB, NB]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [DB, [OB, tB]],
            [/(aeobc)\b/i],
            [kB, [DB, fB],
              [OB, tB]
            ],
            [/(homepod).+mac os/i],
            [kB, [DB, sB],
              [OB, tB]
            ],
            [/windows iot/i],
            [
              [OB, tB]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [kB, [OB, vB]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [kB, [OB, mB]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [OB, mB]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [OB, vB]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [kB, [DB, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [uB, [LB, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [LB, uB],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [uB, [LB, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [LB, uB],
            [/ladybird\//i],
            [
              [LB, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [uB, LB]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [LB, uB],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [LB, [uB, dT, VT]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [uB, dT, VT],
              [LB, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [uB, /_/g, "."],
              [LB, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [LB, jB],
              [uB, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [uB, LB],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [LB, /(.+)/, "$1 Touch"], uB
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [LB, uB],
            [/\(bb(10);/i],
            [uB, [LB, zB]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [uB, [LB, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [uB, [LB, FB + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [uB, [LB, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [uB, [LB, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [uB, [LB, UB + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [LB, xB], uB
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [LB, uB],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [LB, "Solaris"], uB
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [LB, uB]
          ]
        },
        pT = function(BB, TB) {
          if (typeof BB === YB && (TB = BB, BB = pB), !(this instanceof pT)) return new pT(BB, TB).getResult();
          var dB = typeof yB !== JB && yB.navigator ? yB.navigator : pB,
            VB = BB || (dB && dB.userAgent ? dB.userAgent : ""),
            EB = dB && dB.userAgentData ? dB.userAgentData : pB,
            iB = TB ? function(BB, TB) {
              var dB = {};
              for (var VB in BB) TB[VB] && TB[VB].length % 2 === 0 ? dB[VB] = TB[VB].concat(BB[VB]) : dB[VB] = BB[VB];
              return dB
            }(yT, TB) : yT,
            NB = dB && dB.userAgent == VB;
          return this.getBrowser = function() {
            var BB, TB = {};
            return TB[LB] = pB, TB[uB] = pB, TT.call(TB, VB, iB.browser), TB[oB] = typeof(BB = TB[uB]) === gB ? BB.replace(/[^\d\.]/g, "").split(".")[0] : pB, NB && dB && dB.brave && typeof dB.brave.isBrave == lB && (TB[LB] = "Brave"), TB
          }, this.getCPU = function() {
            var BB = {};
            return BB[HB] = pB, TT.call(BB, VB, iB.cpu), BB
          }, this.getDevice = function() {
            var BB = {};
            return BB[DB] = pB, BB[kB] = pB, BB[OB] = pB, TT.call(BB, VB, iB.device), NB && !BB[OB] && EB && EB.mobile && (BB[OB] = vB), NB && "Macintosh" == BB[kB] && dB && typeof dB.standalone !== JB && dB.maxTouchPoints && dB.maxTouchPoints > 2 && (BB[kB] = "iPad", BB[OB] = mB), BB
          }, this.PD = function() {
            var BB = {};
            return BB[LB] = pB, BB[uB] = pB, TT.call(BB, VB, iB.engine), BB
          }, this.getOS = function() {
            var BB = {};
            return BB[LB] = pB, BB[uB] = pB, TT.call(BB, VB, iB.os), NB && !BB[LB] && EB && EB.platform && "Unknown" != EB.platform && (BB[LB] = EB.platform.replace(/chrome os/i, xB).replace(/macos/i, jB)), BB
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.PD(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return VB
          }, this.setUA = function(BB) {
            return VB = typeof BB === gB && BB.length > 500 ? BT(BB, 500) : BB, this
          }, this.setUA(VB), this
        };
      pT.VERSION = "1.0.41", pT.BROWSER = bB([LB, uB, oB]), pT.CPU = bB([HB]), pT.DEVICE = bB([kB, DB, OB, EB, vB, iB, mB, NB, tB]), pT.ENGINE = pT.OS = bB([LB, uB]), typeof TB !== JB ? (BB.exports && (TB = BB.exports = pT), TB.UAParser = pT) : dB.amdO ? (VB = function() {
        return pT
      }.call(TB, dB, TB, BB)) === pB || (BB.exports = VB) : typeof yB !== JB && (yB.UAParser = pT);
      var lT = typeof yB !== JB && (yB.jQuery || yB.Zepto);
      if (lT && !lT.ua) {
        var JT = new pT;
        lT.ua = JT.getResult(), lT.ua.get = function() {
          return JT.getUA()
        }, lT.ua.set = function(BB) {
          JT.setUA(BB);
          var TB = JT.getResult();
          for (var dB in TB) lT.ua[dB] = TB[dB]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);