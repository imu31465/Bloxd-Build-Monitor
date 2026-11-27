export const id = 38;
export const ids = [38];
export const modules = {
  7829: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BaseExtension: () => RG,
      BaseInstrumentation: () => JG,
      BaseTransport: () => st,
      CSPInstrumentation: () => lt,
      ConsoleInstrumentation: () => xG,
      ConsoleTransport: () => yu,
      EVENT_CLICK: () => WJ,
      EVENT_NAVIGATION: () => AJ,
      EVENT_ROUTE_CHANGE: () => pJ,
      EVENT_SESSION_EXTEND: () => BJ,
      EVENT_SESSION_RESUME: () => MJ,
      EVENT_SESSION_START: () => XJ,
      EVENT_VIEW_CHANGED: () => CJ,
      ErrorsInstrumentation: () => DG,
      FetchTransport: () => Cu,
      InternalLoggerLevel: () => dJ,
      LogLevel: () => WG,
      MAX_SESSION_PERSISTENCE_TIME: () => iR,
      NavigationInstrumentation: () => zt,
      Observable: () => UG,
      PerformanceInstrumentation: () => Yy,
      PersistentSessionsManager: () => cJ,
      SESSION_EXPIRATION_TIME: () => uR,
      SESSION_INACTIVITY_TIME: () => ZR,
      STORAGE_KEY: () => tR,
      SessionInstrumentation: () => yG,
      TransportItemType: () => ht,
      UserActionInstrumentation: () => Bt,
      UserActionState: () => et,
      VERSION: () => GG,
      ViewInstrumentation: () => oG,
      VolatileSessionsManager: () => PJ,
      WebVitalsInstrumentation: () => Ny,
      allLogLevels: () => CG,
      browserMeta: () => kt,
      buildStackFrame: () => tG,
      captureMetas: () => cu,
      createInternalLogger: () => pu,
      createPromiseBuffer: () => ru,
      createSession: () => Ft,
      deepEqual: () => UJ,
      defaultEventDomain: () => yR,
      defaultExceptionType: () => lG,
      defaultGlobalObjectKey: () => gu,
      defaultInternalLoggerLevel: () => YJ,
      defaultLogLevel: () => AG,
      faro: () => aR,
      genShortID: () => nJ,
      getCurrentTimestamp: () => eJ,
      getDataFromSafariExtensions: () => wG,
      getIgnoreUrls: () => kR,
      getInternalFaroFromGlobalObject: () => wR,
      getStackFramesFromError: () => eG,
      getTransportBody: () => Gu,
      getUrlFromResource: () => FR,
      getWebInstrumentations: () => St,
      globalObject: () => VR,
      initializeFaro: () => su,
      internalGlobalObjectKey: () => KR,
      isArray: () => vR,
      isBoolean: () => lR,
      isDomError: () => IR,
      isDomException: () => mR,
      isElement: () => SR,
      isElementDefined: () => zR,
      WK: () => YR,
      isError: () => cR,
      isErrorDefined: () => oR,
      isErrorEvent: () => PR,
      isEvent: () => HR,
      isEventDefined: () => DR,
      isFunction: () => bR,
      isInstanceOf: () => WR,
      isInt: () => BR,
      isInternalFaroOnGlobalObject: () => eR,
      isMap: () => dR,
      isMapDefined: () => jR,
      isNull: () => CR,
      isNumber: () => MR,
      isObject: () => gR,
      isPrimitive: () => NR,
      isRegExp: () => OR,
      isString: () => XR,
      isSymbol: () => pR,
      isSyntheticEvent: () => ER,
      isThenable: () => xR,
      isToString: () => UR,
      isTypeof: () => nR,
      isUndefined: () => AR,
      makeCoreConfig: () => Ou,
      noop: () => jJ,
      osMeta: () => Qt,
      parseStacktrace: () => aG,
      sdkMeta: () => Tt,
      setInternalFaroOnGlobalObject: () => rR,
      transportItemTypeToBodyKey: () => Ru,
      unknownString: () => HG,
      userActionDataAttribute: () => ky,
      userActionTimeoutDataAttribute: () => Qy
    });
    const yR = "browser",
      tR = "com.grafana.faro.session",
      uR = 144e5,
      ZR = 9e5,
      qR = 1e3,
      iR = ZR,
      fR = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: iR
      };
    const VR = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof GR.g ? GR.g : "undefined" !== typeof self ? self : void 0;
    const KR = "_faroInternal";

    function wR() {
      return VR[KR]
    }

    function rR(RR) {
      RR.config.isolate ? RR.internalLogger.debug("Skipping registering internal Faro instance on global object") : (RR.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(VR, KR, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: RR
      }))
    }

    function eR() {
      return KR in VR
    }
    let aR = {
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

    function LR(RR, JR, GR, yR, tR, uR, ZR) {
      return JR.debug("Initializing Faro"), aR = {
          api: uR,
          config: GR,
          instrumentations: ZR,
          internalLogger: JR,
          metas: yR,
          pause: tR.pause,
          transports: tR,
          unpatchedConsole: RR,
          unpause: tR.unpause
        }, rR(aR),
        function(RR) {
          if (RR.config.preventGlobalExposure) RR.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (RR.internalLogger.debug(`Registering public faro reference in the global scope using "${RR.config.globalObjectKey}" key`), RR.config.globalObjectKey in VR) return void RR.internalLogger.warn(`Skipping global registration due to key "${RR.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(VR, RR.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: RR
            })
          }
        }(aR), aR
    }

    function nR(RR, JR) {
      return typeof RR === JR
    }

    function UR(RR, JR) {
      return Object.prototype.toString.call(RR) === `[object ${JR}]`
    }

    function WR(RR, JR) {
      try {
        return RR instanceof JR
      } catch (GR) {
        return !1
      }
    }
    const AR = RR => nR(RR, "undefined"),
      CR = RR => nR(RR, "null"),
      XR = RR => nR(RR, "string"),
      MR = RR => nR(RR, "number") && !isNaN(RR) || nR(RR, "bigint"),
      BR = RR => MR(RR) && Number.isInteger(RR),
      lR = RR => nR(RR, "boolean"),
      pR = RR => nR(RR, "symbol"),
      gR = RR => !CR(RR) && nR(RR, "object"),
      bR = RR => nR(RR, "function"),
      vR = RR => UR(RR, "Array"),
      OR = RR => UR(RR, "RegExp"),
      xR = RR => bR(null === RR || void 0 === RR ? void 0 : RR.then),
      NR = RR => !gR(RR) && !bR(RR),
      DR = "undefined" !== typeof Event,
      HR = RR => DR && WR(RR, Event),
      oR = "undefined" !== typeof Error,
      cR = RR => oR && WR(RR, Error),
      PR = RR => UR(RR, "ErrorEvent"),
      IR = RR => UR(RR, "DOMError"),
      mR = RR => UR(RR, "DOMException"),
      zR = "undefined" !== typeof Element,
      SR = RR => zR && WR(RR, Element),
      jR = "undefined" !== typeof Map,
      dR = RR => jR && WR(RR, Map),
      ER = RR => gR(RR) && "nativeEvent" in RR && "preventDefault" in RR && "stopPropagation" in RR;

    function YR(RR) {
      return null == RR || (vR(RR) || XR(RR) ? 0 === RR.length : !!gR(RR) && 0 === Object.keys(RR).length)
    }

    function kR() {
      return aR.transports.transports.flatMap((RR => RR.getIgnoreUrls()))
    }

    function QR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return kR().some((JR => RR && null != RR.match(JR)))
    }

    function FR(RR) {
      return XR(RR) ? RR : RR instanceof URL ? RR.href : !YR(RR) && bR(null === RR || void 0 === RR ? void 0 : RR.toString) ? RR.toString() : void 0
    }
    const TR = "sessionStorage",
      sR = "localStorage";

    function hR(RR) {
      try {
        let JR;
        JR = window[RR];
        const GR = "__faro_storage_test__";
        return JR.setItem(GR, GR), JR.removeItem(GR), !0
      } catch (GR) {
        var JR;
        return null === (JR = aR.internalLogger) || void 0 === JR || JR.info(`Web storage of type ${RR} is not available. Reason: ${GR}`), !1
      }
    }

    function RJ(RR, JR) {
      return uJ(JR) ? window[JR].getItem(RR) : null
    }

    function JJ(RR, JR, GR) {
      if (uJ(GR)) try {
        window[GR].setItem(RR, JR)
      } catch (yR) {}
    }

    function GJ(RR, JR) {
      uJ(JR) && window[JR].removeItem(RR)
    }
    const yJ = hR(sR),
      tJ = hR(TR);

    function uJ(RR) {
      return RR === sR ? yJ : RR === TR && tJ
    }

    function ZJ(RR) {
      return ZJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, ZJ(RR)
    }

    function qJ(RR) {
      var JR = function(RR, JR) {
        if ("object" != ZJ(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != ZJ(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == ZJ(JR) ? JR : JR + ""
    }

    function iJ(RR, JR, GR) {
      return (JR = qJ(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function fJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function VJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? fJ(Object(GR), !0).forEach((function(JR) {
          iJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : fJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function KJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aR;
      var JR, GR, yR;
      const tR = RR.config.sessionTracking,
        uR = null !== (JR = null !== (GR = null === tR || void 0 === tR || null === (yR = tR.sampler) || void 0 === yR ? void 0 : yR.call(tR, {
          metas: RR.metas.value
        })) && void 0 !== GR ? GR : null === tR || void 0 === tR ? void 0 : tR.samplingRate) && void 0 !== JR ? JR : 1,
        ZR = "number" === typeof uR ? function(RR) {
          return Math.min(1, Math.max(0, RR))
        }(uR) : 0;
      if (!(ZR > 0)) return !1;
      if (1 === ZR) return !0;
      try {
        const RR = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === RR || void 0 === RR ? void 0 : RR.getRandomValues)) {
          const JR = new Uint32Array(1);
          return RR.getRandomValues(JR), JR[0] / Math.pow(2, 32) < ZR
        }
      } catch (qR) {}
      return Math.random() < ZR
    }

    function wJ() {
      return Date.now()
    }

    function rJ() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function eJ() {
      return (new Date).toISOString()
    }

    function aJ(RR) {
      return new Date(RR).toISOString()
    }
    const LJ = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function nJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const JR = new Uint32Array(RR),
        GR = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === GR || void 0 === GR ? void 0 : GR.getRandomValues) GR.getRandomValues(JR);
      else
        for (let tR = 0; tR < RR; tR++) JR[tR] = Math.floor(4294967296 * Math.random());
      let yR = "";
      for (let tR = 0; tR < RR; tR++) yR += LJ[JR[tR] % 59];
      return yR
    }

    function UJ(RR, JR) {
      if (RR === JR) return !0;
      if (nR(RR, "number") && isNaN(RR)) return nR(JR, "number") && isNaN(JR);
      const GR = vR(RR),
        yR = vR(JR);
      if (GR !== yR) return !1;
      if (GR && yR) {
        const GR = RR.length;
        if (GR !== JR.length) return !1;
        for (let yR = GR; 0 !== yR--;)
          if (!UJ(RR[yR], JR[yR])) return !1;
        return !0
      }
      const tR = gR(RR),
        uR = gR(JR);
      if (tR !== uR) return !1;
      if (RR && JR && tR && uR) {
        const GR = Object.keys(RR),
          yR = Object.keys(JR);
        if (GR.length !== yR.length) return !1;
        for (let RR of GR)
          if (!yR.includes(RR)) return !1;
        for (let tR of GR)
          if (!UJ(RR[tR], JR[tR])) return !1;
        return !0
      }
      return !1
    }
    const WJ = "click",
      AJ = "navigation",
      CJ = "view_changed",
      XJ = "session_start",
      MJ = "session_resume",
      BJ = "session_extend",
      lJ = "service_name_override",
      pJ = "route_change";

    function gJ() {
      let {
        sessionId: RR,
        started: JR,
        lastActivity: GR,
        isSampled: yR = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, tR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aR;
      var uR;
      const ZR = wJ(),
        qR = null === (uR = tR.config) || void 0 === uR || null === (uR = uR.sessionTracking) || void 0 === uR ? void 0 : uR.generateSessionId;
      return null == RR && (RR = "function" === typeof qR ? qR() : nJ()), {
        sessionId: RR,
        lastActivity: null !== GR && void 0 !== GR ? GR : ZR,
        started: null !== JR && void 0 !== JR ? JR : ZR,
        isSampled: yR
      }
    }

    function bJ(RR) {
      if (null == RR) return !1;
      const JR = wJ();
      return JR - RR.started < 144e5 && JR - RR.lastActivity < ZR
    }

    function vJ(RR) {
      let {
        fetchUserSession: JR,
        storeUserSession: GR,
        adoptSession: yR,
        updateInterval: tR = 0
      } = RR, qR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aR, iR = 0;
      return function() {
        let {
          forceSessionExtend: RR = !1,
          refreshActivity: fR = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var VR, KR;
        if (!JR || !GR) return;
        const wR = wJ();
        if (!RR && wR < iR && iR - wR <= tR) return;
        const rR = qR.config.sessionTracking,
          eR = null === rR || void 0 === rR ? void 0 : rR.persistent;
        if (eR && !yJ || !eR && !tJ) return;
        const aR = JR();
        if (iR = Math.min(wR + tR, (null !== (VR = null === aR || void 0 === aR ? void 0 : aR.started) && void 0 !== VR ? VR : wR) + uR, (null !== (KR = null === aR || void 0 === aR ? void 0 : aR.lastActivity) && void 0 !== KR ? KR : wR) + ZR), !1 === RR && bJ(aR)) {
          var LR;
          fR && GR(VJ(VJ({}, aR), {}, {
            lastActivity: wR
          }));
          const RR = null === (LR = qR.metas.value.session) || void 0 === LR ? void 0 : LR.id;
          null != yR && null != aR.sessionMeta && aR.sessionId !== RR && yR(aR.sessionMeta)
        } else {
          var nR, UR, WR;
          let RR = xJ(gJ({
            isSampled: KJ(qR)
          }, qR), aR, qR);
          iR = wR + tR, GR(RR), null === (nR = qR.api) || void 0 === nR || nR.setSession(RR.sessionMeta), null === rR || void 0 === rR || null === (UR = rR.onSessionChange) || void 0 === UR || UR.call(rR, null !== (WR = null === aR || void 0 === aR ? void 0 : aR.sessionMeta) && void 0 !== WR ? WR : null, RR.sessionMeta)
        }
      }
    }

    function OJ(RR) {
      let JR, {
          fetchUserSession: GR,
          storeUserSession: yR,
          updateInterval: tR = 0
        } = RR,
        uR = 0;
      return RR => {
        const ZR = wJ();
        if (RR === JR && ZR < uR && uR - ZR <= tR) return;
        JR = RR, uR = ZR + tR;
        const qR = GR();
        (null === qR || void 0 === qR ? void 0 : qR.sessionId) === RR && bJ(qR) && yR(VJ(VJ({}, qR), {}, {
          lastActivity: ZR
        }))
      }
    }

    function xJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aR;
      var yR, tR, uR, ZR, qR, iR;
      const fR = VJ(VJ({}, RR), {}, {
          sessionMeta: {
            id: RR.sessionId,
            attributes: DJ(VJ(VJ(VJ({}, null === (yR = GR.config.sessionTracking) || void 0 === yR || null === (yR = yR.session) || void 0 === yR ? void 0 : yR.attributes), null !== (tR = null === (uR = GR.metas.value.session) || void 0 === uR ? void 0 : uR.attributes) && void 0 !== tR ? tR : {}), {}, {
              isSampled: RR.isSampled.toString()
            }))
          }
        }),
        VR = null !== (ZR = null === (qR = GR.metas.value.session) || void 0 === qR ? void 0 : qR.overrides) && void 0 !== ZR ? ZR : null === JR || void 0 === JR || null === (iR = JR.sessionMeta) || void 0 === iR ? void 0 : iR.overrides;
      YR(VR) || (fR.sessionMeta.overrides = VR);
      const KR = null === JR || void 0 === JR ? void 0 : JR.sessionId;
      return null != KR && (fR.sessionMeta.attributes.previousSession = KR), fR
    }

    function NJ(RR) {
      let {
        fetchUserSession: JR,
        storeUserSession: GR
      } = RR, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aR, tR = !1;
      return function(RR) {
        if (tR) return;
        const uR = RR.session,
          ZR = JR();
        let qR = null === uR || void 0 === uR ? void 0 : uR.id;
        const iR = null === uR || void 0 === uR ? void 0 : uR.attributes,
          fR = null === uR || void 0 === uR ? void 0 : uR.overrides,
          VR = null === ZR || void 0 === ZR ? void 0 : ZR.sessionMeta,
          KR = null === VR || void 0 === VR ? void 0 : VR.overrides,
          wR = !!fR && !UJ(fR, KR),
          rR = !!iR && !UJ(iR, null === VR || void 0 === VR ? void 0 : VR.attributes);
        if (uR && qR !== (null === ZR || void 0 === ZR ? void 0 : ZR.sessionId) || rR || wR) {
          var eR, aR;
          const RR = null != ZR && qR === ZR.sessionId,
            JR = xJ(RR ? ZR : gJ({
              sessionId: qR,
              isSampled: KJ(yR)
            }, yR), ZR, yR),
            uR = null === ZR || void 0 === ZR || null === (eR = ZR.sessionMeta) || void 0 === eR || null === (eR = eR.attributes) || void 0 === eR ? void 0 : eR.previousSession;
          RR && null != uR && uR !== JR.sessionId && (JR.sessionMeta.attributes.previousSession = uR), (null === (aR = JR.sessionMeta.attributes) || void 0 === aR ? void 0 : aR.previousSession) === JR.sessionId && delete JR.sessionMeta.attributes.previousSession, GR(JR),
            function(RR, JR) {
              let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var tR, uR, ZR;
              if (!JR) return;
              const qR = GR.serviceName,
                iR = null !== (tR = null !== (uR = yR.serviceName) && void 0 !== uR ? uR : null === (ZR = RR.metas.value.app) || void 0 === ZR ? void 0 : ZR.name) && void 0 !== tR ? tR : "";
              qR && qR !== iR && RR.api.pushEvent(lJ, {
                serviceName: qR,
                previousServiceName: iR
              })
            }(yR, wR, fR, KR), tR = !0;
          try {
            yR.api.setSession(JR.sessionMeta)
          } finally {
            tR = !1
          }
        }
      }
    }

    function DJ(RR) {
      const JR = {};
      for (const GR of Object.keys(RR)) {
        const yR = RR[GR];
        void 0 !== yR && (JR[GR] = yR)
      }
      return JR
    }

    function HJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== RR && void 0 !== RR ? RR : {}, function() {
        const RR = new WeakSet;
        return function(JR, GR) {
          if (gR(GR) && null !== GR) {
            if (RR.has(GR)) return null;
            RR.add(GR)
          }
          return GR
        }
      }())
    }

    function oJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const JR = {};
      for (const [GR, yR] of Object.entries(RR)) JR[GR] = gR(yR) && null !== yR ? HJ(yR) : String(yR);
      return JR
    }
    var cJ = class RR {
      constructor() {
        var JR = this;
        let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aR;
        this.context = GR, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = RR => {
          this.adopting = !0;
          try {
            var JR;
            null === (JR = this.context.api) || void 0 === JR || JR.setSession(RR)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: RR = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return JR.updateUserSession({
            refreshActivity: RR
          })
        }, this.recordActivity = OJ({
          fetchUserSession: RR.fetchUserSession,
          storeUserSession: RR.storeUserSession,
          updateInterval: qR
        }), this.updateUserSession = vJ({
          fetchUserSession: RR.fetchUserSession,
          storeUserSession: RR.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: qR
        }, GR), this.init()
      }
      static removeUserSession() {
        GJ(tR, RR.storageTypeLocal)
      }
      static storeUserSession(JR) {
        JJ(tR, HJ(JR), RR.storageTypeLocal)
      }
      static fetchUserSession() {
        const JR = RJ(tR, RR.storageTypeLocal);
        return JR ? JSON.parse(JR) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var RR;
            this.updateSession({
              refreshActivity: !1
            });
            const JR = null === (RR = this.context.api) || void 0 === RR || null === (RR = RR.getSession()) || void 0 === RR ? void 0 : RR.id;
            JR && this.recordActivity(JR)
          }
        })), this.context.metas.addListener(NJ({
          fetchUserSession: RR.fetchUserSession,
          storeUserSession: RR.storeUserSession
        }, this.context))
      }
    };
    cJ.storageTypeLocal = sR;
    var PJ = class RR {
      constructor() {
        var JR = this;
        let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aR;
        this.context = GR, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: RR = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return JR.updateUserSession({
            refreshActivity: RR
          })
        }, this.recordActivity = OJ({
          fetchUserSession: RR.fetchUserSession,
          storeUserSession: RR.storeUserSession,
          updateInterval: qR
        }), this.updateUserSession = vJ({
          fetchUserSession: RR.fetchUserSession,
          storeUserSession: RR.storeUserSession,
          updateInterval: qR
        }, GR), this.init()
      }
      static removeUserSession() {
        GJ(tR, RR.storageTypeSession)
      }
      static storeUserSession(JR) {
        JJ(tR, HJ(JR), RR.storageTypeSession)
      }
      static fetchUserSession() {
        const JR = RJ(tR, RR.storageTypeSession);
        return JR ? JSON.parse(JR) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var RR;
            this.updateSession({
              refreshActivity: !1
            });
            const JR = null === (RR = this.context.api) || void 0 === RR || null === (RR = RR.getSession()) || void 0 === RR ? void 0 : RR.id;
            JR && this.recordActivity(JR)
          }
        })), this.context.metas.addListener(NJ({
          fetchUserSession: RR.fetchUserSession,
          storeUserSession: RR.storeUserSession
        }, this.context))
      }
    };
    PJ.storageTypeSession = TR;
    const IJ = new WeakMap;

    function mJ(RR) {
      let JR = IJ.get(RR);
      if (!JR) {
        let GR = [],
          yR = [];
        JR = {
          addSessionUpdateListener: RR => {
            GR.push(RR)
          },
          removeSessionUpdateListener: RR => {
            GR = GR.filter((JR => JR !== RR))
          },
          notifySessionUpdate: RR => {
            GR.forEach((JR => JR(RR)))
          },
          shouldCapture: () => yR.every((RR => RR())),
          addCaptureFilter: RR => {
            yR.push(RR)
          },
          removeCaptureFilter: RR => {
            yR = yR.filter((JR => JR !== RR))
          }
        }, IJ.set(RR, JR)
      }
      return JR
    }
    var zJ = class {
      constructor(RR, JR, GR) {
        this.metas = RR, this.transports = JR, this.onActivate = GR, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = RR => {
          var JR, GR, yR;
          const tR = this.pending;
          var uR, ZR;
          if ("overrides" === RR.type) return void(this.pending = {
            reset: null !== (uR = null === tR || void 0 === tR ? void 0 : tR.reset) && void 0 !== uR && uR,
            inheritOverrides: null === (ZR = null === tR || void 0 === tR ? void 0 : tR.inheritOverrides) || void 0 === ZR || ZR,
            session: VJ(VJ({}, null === tR || void 0 === tR ? void 0 : tR.session), {}, {
              overrides: VJ(VJ({}, null === tR || void 0 === tR ? void 0 : tR.session.overrides), RR.overrides)
            })
          });
          const qR = RR.session,
            iR = YR(qR) || null != qR && "id" in qR && !qR.id,
            fR = null !== (JR = null === qR || void 0 === qR ? void 0 : qR.overrides) && void 0 !== JR ? JR : null === tR || void 0 === tR ? void 0 : tR.session.overrides;
          this.pending = {
            reset: iR || !(null === qR || void 0 === qR ? void 0 : qR.id) && null !== (GR = null === tR || void 0 === tR ? void 0 : tR.reset) && void 0 !== GR && GR,
            inheritOverrides: !(!RR.overrides && void 0 !== (null === qR || void 0 === qR ? void 0 : qR.overrides)) && (null === (yR = null === tR || void 0 === tR ? void 0 : tR.inheritOverrides) || void 0 === yR || yR),
            session: {
              id: null === qR || void 0 === qR ? void 0 : qR.id,
              attributes: (null === qR || void 0 === qR ? void 0 : qR.attributes) && VJ({}, qR.attributes),
              overrides: RR.overrides ? VJ(VJ({}, null === tR || void 0 === tR ? void 0 : tR.session.overrides), RR.overrides) : fR && VJ({}, fR)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var RR, JR;
        this.waiting = !0, mJ(this.metas).addSessionUpdateListener(this.recordUpdate), mJ(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (RR = (JR = this.metas).addCaptureListener) || void 0 === RR || RR.call(JR, this.activate), this.activate()
      }
      destroy() {
        var RR, JR;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), mJ(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (RR = (JR = this.metas).removeCaptureListener) || void 0 === RR || RR.call(JR, this.activate), mJ(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function SJ(RR) {
      return (null === RR || void 0 === RR ? void 0 : RR.persistent) ? cJ : PJ
    }

    function jJ() {}
    let dJ = function(RR) {
      return RR[RR.OFF = 0] = "OFF", RR[RR.ERROR = 1] = "ERROR", RR[RR.WARN = 2] = "WARN", RR[RR.INFO = 3] = "INFO", RR[RR.VERBOSE = 4] = "VERBOSE", RR
    }({});
    const EJ = {
        debug: jJ,
        error: jJ,
        info: jJ,
        prefix: "Faro",
        warn: jJ
      },
      YJ = 1;

    function kJ(RR) {
      return kJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, kJ(RR)
    }

    function QJ(RR) {
      var JR = function(RR, JR) {
        if ("object" != kJ(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != kJ(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == kJ(JR) ? JR : JR + ""
    }

    function FJ(RR, JR, GR) {
      return (JR = QJ(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function TJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function sJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? TJ(Object(GR), !0).forEach((function(JR) {
          FJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : TJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }
    const hJ = sJ({}, console);
    var RG = class {
        constructor() {
          this.unpatchedConsole = hJ, this.internalLogger = EJ, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          this.internalLogger.debug(`${this.name}\n`, ...JR)
        }
        logInfo() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          this.internalLogger.info(`${this.name}\n`, ...JR)
        }
        logWarn() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          this.internalLogger.warn(`${this.name}\n`, ...JR)
        }
        logError() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          this.internalLogger.error(`${this.name}\n`, ...JR)
        }
      },
      JG = class extends RG {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const GG = "2.12.1";
    var yG = class extends JG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = GG, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(RR) {
        var JR;
        const GR = RR.session;
        if (GR && GR.id !== (null === (JR = this.notifiedSession) || void 0 === JR ? void 0 : JR.id)) {
          var yR;
          if (this.isAdoptingSession()) return void(this.notifiedSession = GR);
          if (this.notifiedSession && this.notifiedSession.id === (null === (yR = GR.attributes) || void 0 === yR ? void 0 : yR.previousSession)) return this.api.pushEvent(BJ, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = GR);
          this.notifiedSession = GR, this.api.pushEvent(XJ, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(RR, JR, GR) {
        const yR = null === GR || void 0 === GR ? void 0 : GR.session;
        let tR, uR, ZR = RR.fetchUserSession();
        if (JR.persistent && JR.maxSessionPersistenceTime && ZR) {
          const RR = wJ();
          ZR.lastActivity < RR - JR.maxSessionPersistenceTime && (cJ.removeUserSession(), ZR = null)
        }
        const qR = bJ(ZR);
        if ((null === GR || void 0 === GR ? void 0 : GR.reset) || !qR || (null === yR || void 0 === yR ? void 0 : yR.id) && yR.id !== (null === ZR || void 0 === ZR ? void 0 : ZR.sessionId)) {
          var iR, fR, VR, KR, wR, rR;
          uR = gJ({
            sessionId: (null === GR || void 0 === GR ? void 0 : GR.reset) ? void 0 : null !== (iR = null === yR || void 0 === yR ? void 0 : yR.id) && void 0 !== iR ? iR : null === (fR = JR.session) || void 0 === fR ? void 0 : fR.id,
            isSampled: KJ(this)
          }, this);
          const RR = uR.sessionId,
            eR = GR && qR ? null === ZR || void 0 === ZR || null === (VR = ZR.sessionMeta) || void 0 === VR ? void 0 : VR.overrides : void 0,
            aR = eR ? VJ(VJ({}, null === (KR = JR.session) || void 0 === KR ? void 0 : KR.overrides), eR) : null === (wR = JR.session) || void 0 === wR ? void 0 : wR.overrides;
          uR.sessionMeta = VJ({
            id: RR,
            attributes: VJ({
              isSampled: uR.isSampled.toString()
            }, null === (rR = JR.session) || void 0 === rR ? void 0 : rR.attributes)
          }, aR ? {
            overrides: aR
          } : {}), tR = XJ
        } else {
          var eR, aR;
          const RR = null === ZR || void 0 === ZR ? void 0 : ZR.sessionId;
          uR = gJ({
            sessionId: RR,
            isSampled: ZR.isSampled || !1,
            started: null === ZR || void 0 === ZR ? void 0 : ZR.started
          }, this);
          const GR = null === ZR || void 0 === ZR ? void 0 : ZR.sessionMeta,
            yR = VJ(VJ({}, null === (eR = JR.session) || void 0 === eR ? void 0 : eR.overrides), null === GR || void 0 === GR ? void 0 : GR.overrides);
          uR.sessionMeta = VJ(VJ({}, JR.session), {}, {
            id: RR,
            attributes: VJ(VJ(VJ({}, null === (aR = JR.session) || void 0 === aR ? void 0 : aR.attributes), null === GR || void 0 === GR ? void 0 : GR.attributes), {}, {
              isSampled: uR.isSampled.toString()
            }),
            overrides: yR
          }), tR = MJ
        }
        var LR;
        if (yR && (uR.sessionMeta = VJ(VJ({}, uR.sessionMeta), {}, {
            attributes: VJ(VJ(VJ({}, null === (LR = uR.sessionMeta) || void 0 === LR ? void 0 : LR.attributes), yR.attributes), {}, {
              isSampled: uR.isSampled.toString()
            })
          }), yR.overrides)) {
          const RR = (null === GR || void 0 === GR ? void 0 : GR.inheritOverrides) ? VJ(VJ({}, uR.sessionMeta.overrides), yR.overrides) : yR.overrides;
          Object.keys(RR).length > 0 ? uR.sessionMeta.overrides = RR : delete uR.sessionMeta.overrides
        }
        return {
          initialSession: uR,
          lifecycleType: tR
        }
      }
      registerBeforeSendHook(RR) {
        var JR;
        this.beforeSendHook = JR => {
          var GR, yR;
          const tR = null === (GR = JR.meta.session) || void 0 === GR ? void 0 : GR.id;
          tR && !this.transports.isPaused() && RR(tR);
          const uR = null === (yR = JR.meta.session) || void 0 === yR ? void 0 : yR.attributes;
          if (uR && "true" === (null === uR || void 0 === uR ? void 0 : uR.isSampled)) {
            var ZR;
            let RR = JSON.parse(JSON.stringify(JR));
            const GR = null === (ZR = RR.meta.session) || void 0 === ZR ? void 0 : ZR.attributes;
            var qR;
            if (null === GR || void 0 === GR || delete GR.isSampled, 0 === Object.keys(null !== GR && void 0 !== GR ? GR : {}).length) null === (qR = RR.meta.session) || void 0 === qR || delete qR.attributes;
            return RR
          }
          return null
        }, null === (JR = this.transports) || void 0 === JR || JR.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var RR;
        this.logDebug("init session instrumentation");
        const JR = document.prerendering;
        var GR;
        if ((null === (RR = this.config.sessionTracking) || void 0 === RR ? void 0 : RR.enabled) && (JR || this.prerenderSession)) return null !== (GR = this.prerenderSession) && void 0 !== GR || (this.prerenderSession = new zJ(this.metas, this.transports, (RR => {
          this.prerenderSession = void 0, this.initializeSession(RR)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(RR) {
        const JR = this.config.sessionTracking;
        if (null === JR || void 0 === JR ? void 0 : JR.enabled) {
          var GR, yR;
          const tR = SJ(JR),
            uR = new tR(this);
          this.isAdoptingSession = uR.isAdopting, this.registerBeforeSendHook(uR.recordActivity);
          const {
            initialSession: ZR,
            lifecycleType: qR
          } = this.createInitialSession(tR, JR, RR);
          tR.storeUserSession(ZR);
          const iR = ZR.sessionMeta;
          this.notifiedSession = iR, this.api.setSession(iR), this.captureListener = () => {
            this.transports.isPaused() || uR.updateSession({
              refreshActivity: !1
            })
          }, null === (GR = (yR = this.metas).addCaptureListener) || void 0 === GR || GR.call(yR, this.captureListener), qR === XJ && this.api.pushEvent(XJ, {}, void 0, {
            skipDedupe: !0
          }), qR === MJ && this.api.pushEvent(MJ, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var RR, JR, GR;
        (null === (RR = this.prerenderSession) || void 0 === RR || RR.destroy(), this.captureListener) && (null === (JR = (GR = this.metas).removeCaptureListener) || void 0 === JR || JR.call(GR, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function tG(RR, JR, GR, yR) {
      const tR = {
        filename: RR || document.location.href,
        function: JR || "?"
      };
      return void 0 !== GR && (tR.lineno = GR), void 0 !== yR && (tR.colno = yR), tR
    }
    const uG = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ZG = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      qG = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      iG = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      fG = "safari-extension",
      VG = "safari-web-extension",
      KG = /Minified React error #\d+;/i;

    function wG(RR, JR) {
      const GR = null === RR || void 0 === RR ? void 0 : RR.includes(fG),
        yR = !GR && (null === RR || void 0 === RR ? void 0 : RR.includes("safari-web-extension"));
      return GR || yR ? [(null === RR || void 0 === RR ? void 0 : RR.includes("@")) ? RR.split("@")[0] : RR, GR ? `${fG}:${JR}` : `${VG}:${JR}`] : [RR, JR]
    }
    const rG = 1024;

    function eG(RR) {
      let JR = [];
      RR.stacktrace ? JR = RR.stacktrace.split("\n").filter(((RR, JR) => JR % 2 === 0)) : RR.stack && (JR = RR.stack.split("\n"));
      const GR = JR.reduce(((JR, GR, yR) => {
        if (GR.length > rG) return JR;
        let tR, uR, ZR, qR, iR;
        if (tR = uG.exec(GR)) {
          if (uR = tR[1], ZR = tR[2], qR = tR[3], iR = tR[4], null === ZR || void 0 === ZR ? void 0 : ZR.startsWith("eval")) {
            const RR = ZG.exec(ZR);
            RR && (ZR = RR[1], qR = RR[2], iR = RR[3])
          }
          ZR = (null === ZR || void 0 === ZR ? void 0 : ZR.startsWith("address at ")) ? ZR.substring(11) : ZR, [uR, ZR] = wG(uR, ZR)
        } else if (tR = qG.exec(GR)) {
          if (uR = tR[1], ZR = tR[3], qR = tR[4], iR = tR[5], ZR && ZR.includes(" > eval")) {
            const RR = iG.exec(ZR);
            RR && (uR = uR || "eval", ZR = RR[1], qR = RR[2])
          } else 0 === yR && !iR && MR(RR.columnNumber) && (iR = String(RR.columnNumber + 1));
          [uR, ZR] = wG(uR, ZR)
        }
        return (ZR || uR) && JR.push(tG(ZR, uR, qR ? Number(qR) : void 0, iR ? Number(iR) : void 0)), JR
      }), []);
      return KG.test(RR.message) ? GR.slice(1) : GR
    }

    function aG(RR) {
      return {
        frames: eG(RR)
      }
    }
    const LG = "http-request-start",
      nG = "http-request-end";
    var UG = class RR {
      constructor() {
        this.subscribers = []
      }
      subscribe(RR) {
        return this.subscribers.push(RR), {
          unsubscribe: () => this.unsubscribe(RR)
        }
      }
      unsubscribe(RR) {
        this.subscribers = this.subscribers.filter((JR => JR !== RR))
      }
      notify(RR) {
        this.subscribers.forEach((JR => JR(RR)))
      }
      first() {
        const JR = new RR,
          GR = RR => {
            JR.notify(RR), yR.unsubscribe()
          },
          yR = this.subscribe(GR),
          tR = JR.unsubscribe.bind(JR);
        return this.withUnsubscribeOverride(JR, tR, GR)
      }
      takeWhile(JR) {
        const GR = new RR,
          yR = RR => {
            JR(RR) ? GR.notify(RR) : GR.unsubscribe(yR)
          };
        this.subscribe(yR);
        const tR = GR.unsubscribe.bind(GR);
        return this.withUnsubscribeOverride(GR, tR, yR)
      }
      filter(JR) {
        const GR = new RR,
          yR = RR => {
            JR(RR) && GR.notify(RR)
          };
        this.subscribe(yR);
        const tR = GR.unsubscribe.bind(GR);
        return this.withUnsubscribeOverride(GR, tR, yR)
      }
      merge() {
        const JR = new RR,
          GR = [];
        for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
        tR.forEach((RR => {
          const yR = RR.subscribe((RR => {
            JR.notify(RR)
          }));
          GR.push(yR)
        }));
        const ZR = JR.unsubscribeAll.bind(JR);
        return JR.unsubscribe = () => {
          GR.forEach((RR => RR.unsubscribe())), ZR()
        }, JR
      }
      withUnsubscribeOverride(RR, JR, GR) {
        return RR.unsubscribe = RR => {
          JR(RR), this.unsubscribe(GR)
        }, RR
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let WG = function(RR) {
      return RR.TRACE = "trace", RR.DEBUG = "debug", RR.INFO = "info", RR.LOG = "log", RR.WARN = "warn", RR.ERROR = "error", RR
    }({});
    const AG = "log",
      CG = ["trace", "debug", "info", "log", "warn", "error"];
    let XG, MG = !1;
    const BG = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      lG = "Error",
      pG = RR => RR.map((RR => gR(RR) ? HJ(RR) : String(RR))).join(" ");

    function gG(RR) {
      let JR, GR, yR, tR, uR = [];
      if (PR(RR) && RR.error) JR = RR.error.message, GR = RR.error.name, uR = eG(RR.error);
      else if ((yR = IR(RR)) || mR(RR)) {
        const {
          name: tR,
          message: uR
        } = RR;
        GR = null !== tR && void 0 !== tR ? tR : yR ? "DOMError" : "DOMException", JR = uR ? `${GR}: ${uR}` : GR
      } else cR(RR) ? (GR = RR.name, JR = RR.message, uR = eG(RR)) : (gR(RR) || (tR = HR(RR))) && (GR = tR ? RR.constructor.name : void 0, JR = `Non-Error exception captured with keys: ${Object.keys(RR)}`);
      return [JR, GR, uR]
    }

    function bG(RR) {
      const [JR, GR, yR, tR, uR] = RR;
      let ZR, qR, iR = [];
      const fR = XR(JR),
        VR = tG(GR, "?", yR, tR);
      return uR || !fR ? ([ZR, qR, iR] = gG(null !== uR && void 0 !== uR ? uR : JR), 0 === iR.length && (iR = [VR])) : fR && ([ZR, qR] = function(RR) {
        var JR, GR;
        const yR = RR.match(BG),
          tR = null !== (JR = null === yR || void 0 === yR ? void 0 : yR[1]) && void 0 !== JR ? JR : lG;
        return [null !== (GR = null === yR || void 0 === yR ? void 0 : yR[2]) && void 0 !== GR ? GR : RR, tR]
      }(JR), iR = [VR]), {
        value: ZR,
        type: qR,
        stackFrames: iR
      }
    }

    function vG(RR, JR) {
      return cR(RR[0]) ? bG(RR) : {
        value: JR(RR)
      }
    }
    const OG = RR => RR.map((RR => {
      try {
        return String(RR)
      } catch (JR) {
        return ""
      }
    })).join(" ");
    var xG = class RR extends JG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = GG, this.errorSerializer = OG
      }
      initialize() {
        var JR, GR;
        const yR = this.config.consoleInstrumentation,
          tR = (null === yR || void 0 === yR ? void 0 : yR.serializeErrors) || !!(null === yR || void 0 === yR ? void 0 : yR.errorSerializer);
        this.errorSerializer = tR ? null !== (JR = null === yR || void 0 === yR ? void 0 : yR.errorSerializer) && void 0 !== JR ? JR : pG : OG;
        const uR = null !== (GR = null === yR || void 0 === yR ? void 0 : yR.disabledLevels) && void 0 !== GR ? GR : RR.defaultDisabledLevels,
          ZR = function(RR) {
            if (XG || (XG = new UG), !MG) {
              const JR = null !== RR && void 0 !== RR ? RR : hJ;
              CG.forEach((RR => {
                console[RR] = function() {
                  for (var GR, yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
                  XG.notify({
                    type: "console",
                    level: RR,
                    args: tR
                  }), null === (GR = JR[RR]) || void 0 === GR || GR.apply(console, tR)
                }
              })), MG = !0
            }
            return XG
          }(this.unpatchedConsole);
        this.subscription = ZR.subscribe((JR => {
          let {
            level: GR,
            args: tR
          } = JR;
          if (!uR.includes(GR)) try {
            if (GR !== WG.ERROR || (null === yR || void 0 === yR ? void 0 : yR.consoleErrorAsLog))
              if (GR === WG.ERROR && (null === yR || void 0 === yR ? void 0 : yR.consoleErrorAsLog)) {
                const {
                  value: JR,
                  type: yR,
                  stackFrames: uR
                } = vG(tR, this.errorSerializer);
                this.api.pushLog(JR ? [RR.consoleErrorPrefix + JR] : tR, {
                  level: GR,
                  context: {
                    value: null !== JR && void 0 !== JR ? JR : "",
                    type: null !== yR && void 0 !== yR ? yR : "",
                    stackFrames: (null === uR || void 0 === uR ? void 0 : uR.length) ? pG(uR) : ""
                  }
                })
              } else this.api.pushLog(tR, {
                level: GR
              });
            else {
              const {
                value: JR,
                type: GR,
                stackFrames: yR
              } = vG(tR, this.errorSerializer);
              if (JR && !GR && !yR) return void this.api.pushError(new Error(RR.consoleErrorPrefix + JR));
              this.api.pushError(new Error(RR.consoleErrorPrefix + JR), {
                type: GR,
                stackFrames: yR
              })
            }
          } catch (ZR) {
            this.logError(ZR)
          }
        }))
      }
      destroy() {
        var RR;
        null === (RR = this.subscription) || void 0 === RR || RR.unsubscribe(), this.subscription = void 0
      }
    };
    xG.defaultDisabledLevels = [WG.DEBUG, WG.TRACE, WG.LOG], xG.consoleErrorPrefix = "console.error: ";
    const NG = [];
    var DG = class extends JG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = GG
      }
      initialize() {
        this.logDebug("Initializing"),
          function(RR) {
            const JR = window.onerror;
            window.onerror = function() {
              for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
              try {
                const {
                  value: JR,
                  type: GR,
                  stackFrames: tR
                } = bG(yR), uR = yR[4];
                if (JR) {
                  const yR = {
                    type: GR,
                    stackFrames: tR
                  };
                  null != uR && (yR.originalError = uR), RR.pushError(new Error(JR), yR)
                }
              } finally {
                null === JR || void 0 === JR || JR.apply(window, yR)
              }
            }
          }(this.api),
          function(RR) {
            const JR = JR => {
              var GR;
              let yR, tR, uR = JR;
              if (uR.reason) uR = JR.reason;
              else if (null === (GR = JR.detail) || void 0 === GR ? void 0 : GR.reason) {
                var ZR;
                uR = null === (ZR = JR.detail) || void 0 === ZR ? void 0 : ZR.reason
              }
              let qR = [];
              NR(uR) ? (yR = `Non-Error promise rejection captured with value: ${String(uR)}`, tR = "UnhandledRejection") : [yR, tR, qR] = gG(uR), yR && RR.pushError(new Error(yR), {
                type: tR,
                stackFrames: qR
              })
            };
            window.addEventListener("unhandledrejection", JR), NG.push(JR)
          }(this.api)
      }
    };
    const HG = "unknown";
    var oG = class extends JG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = GG, this.waitingForActivation = !1, this.sendViewChangedEvent = RR => {
          var JR;
          if (this.waitingForActivation || document.prerendering) return;
          const GR = RR.view;
          if (GR && GR.name !== (null === (JR = this.notifiedView) || void 0 === JR ? void 0 : JR.name)) {
            var yR, tR, uR;
            const RR = null !== (yR = null === (tR = this.notifiedView) || void 0 === tR ? void 0 : tR.name) && void 0 !== yR ? yR : HG;
            this.notifiedView = GR, this.api.pushEvent(CJ, {
              fromView: RR,
              toView: null !== (uR = GR.name) && void 0 !== uR ? uR : HG
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
    class cG {
      t;
      o = 0;
      i = [];
      l(RR) {
        if (RR.hadRecentInput) return;
        const JR = this.i[0],
          GR = this.i.at(-1);
        this.o && JR && GR && RR.startTime - GR.startTime < 1e3 && RR.startTime - JR.startTime < 5e3 ? (this.o += RR.value, this.i.push(RR)) : (this.o = RR.value, this.i = [RR]), this.t?.(RR)
      }
    }
    const PG = () => {
        const RR = performance.getEntriesByType("navigation")[0];
        if (RR && RR.responseStart > 0 && RR.responseStart < performance.now()) return RR
      },
      IG = RR => {
        if ("loading" === document.readyState) return "loading";
        const JR = PG();
        if (JR) {
          if (RR < JR.domInteractive) return "loading";
          if (0 === JR.domContentLoadedEventStart || RR < JR.domContentLoadedEventStart) return "dom-interactive";
          if (0 === JR.domComplete || RR < JR.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      mG = RR => {
        const JR = RR.nodeName;
        return 1 === RR.nodeType ? JR.toLowerCase() : JR.toUpperCase().replace(/^#/, "")
      },
      zG = RR => {
        let JR = "";
        try {
          for (; 9 !== RR?.nodeType;) {
            const GR = RR,
              yR = GR.id ? "#" + GR.id : [mG(GR), ...Array.from(GR.classList ?? []).sort()].join(".");
            if (JR.length + yR.length > 99) return JR || yR;
            if (JR = JR ? yR + ">" + JR : yR, GR.id) break;
            RR = GR.parentNode
          }
        } catch {}
        return JR
      },
      SG = new WeakMap;

    function jG(RR, JR) {
      let GR = SG.get(JR);
      return GR || (GR = new WeakMap, SG.set(JR, GR)), GR.get(RR) || GR.set(RR, new JR), GR.get(RR)
    }
    let dG = -1;
    const EG = () => dG,
      YG = RR => {
        addEventListener("pageshow", (JR => {
          JR.persisted && (dG = JR.timeStamp, RR(JR))
        }), !0)
      },
      kG = (RR, JR, GR, yR) => {
        let tR, uR;
        return ZR => {
          JR.value >= 0 && (ZR || yR) && (uR = JR.value - (tR ?? 0), (uR || void 0 === tR) && (tR = JR.value, JR.delta = uR, JR.rating = ((RR, JR) => RR > JR[1] ? "poor" : RR > JR[0] ? "needs-improvement" : "good")(JR.value, GR), RR(JR)))
        }
      },
      QG = RR => {
        requestAnimationFrame((() => requestAnimationFrame((() => RR()))))
      },
      FG = () => PG()?.activationStart ?? 0;
    let TG = -1;
    const sG = new Set,
      hG = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Ry = RR => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === RR.type)
            for (const RR of sG) RR();
          isFinite(TG) || (TG = "visibilitychange" === RR.type ? RR.timeStamp : 0, removeEventListener("prerenderingchange", Ry, !0))
        }
      },
      Jy = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (TG = 1 / 0), TG < 0) {
          const RR = FG(),
            JR = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((JR => "hidden" === JR.name && JR.startTime >= RR))?.startTime;
          TG = JR ?? hG(), addEventListener("visibilitychange", Ry, !0), addEventListener("prerenderingchange", Ry, !0), YG((() => {
            setTimeout((() => {
              TG = hG()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return TG
          },
          onHidden(RR) {
            sG.add(RR)
          }
        }
      },
      Gy = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0,
          ZR = arguments.length > 6 ? arguments[6] : void 0;
        const qR = PG(),
          iR = qR?.navigationId || 0;
        let fR = "navigate";
        return GR ? fR = GR : EG() >= 0 ? fR = "back-forward-cache" : qR && (document.prerendering || FG() > 0 ? fR = "prerender" : document.wasDiscarded ? fR = "restore" : qR.type && (fR = qR.type.replace(/_/g, "-"))), {
          name: RR,
          value: JR,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: fR,
          navigationId: yR || iR,
          navigationInteractionId: tR,
          navigationURL: uR || qR?.name,
          navigationStartTime: ZR || 0
        }
      },
      yy = function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const yR = RR.filter((RR => PerformanceObserver.supportedEntryTypes.includes(RR)));
          if (yR.length > 0) {
            const RR = new PerformanceObserver((RR => {
              queueMicrotask((() => {
                const GR = RR.getEntries();
                yR.length > 1 && GR.sort(((RR, JR) => RR.startTime + RR.duration - (JR.startTime + JR.duration))), JR(GR)
              }))
            }));
            for (const JR of yR) RR.observe({
              type: JR,
              buffered: !0,
              ...GR
            });
            return RR
          }
        } catch {}
      },
      ty = RR => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && RR && RR.reportSoftNavs,
      uy = (RR, JR) => {
        if (RR.set(JR.navigationId, JR), RR.size > 2) {
          const JR = RR.keys().next().value;
          void 0 !== JR && RR.delete(JR)
        }
      },
      Zy = RR => {
        let JR = !1;
        return () => {
          JR || (RR(), JR = !0)
        }
      };
    class qy {
      u
    }
    const iy = RR => {
        document.prerendering ? addEventListener("prerenderingchange", RR, !0) : RR()
      },
      fy = [1800, 3e3],
      Vy = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = ty(JR);
        iy((() => {
          const yR = jG(JR, qy),
            tR = Jy();
          let uR, ZR = Gy("FCP");
          const qR = yy(["paint"], (RR => {
            for (const JR of RR) "first-contentful-paint" === JR.name && (qR.disconnect(), JR.startTime < tR.firstHiddenTime && (ZR.value = Math.max(JR.startTime - FG(), 0), ZR.entries.push(JR), ZR.navigationId = JR.navigationId || ZR.navigationId, uR(!0)))
          }));
          qR && (uR = kG(RR, ZR, fy, JR.reportAllChanges), YG((GR => {
            ZR = Gy("FCP", -1, "back-forward-cache", ZR.navigationId, ZR.navigationInteractionId, ZR.navigationURL, EG()), uR = kG(RR, ZR, fy, JR.reportAllChanges), QG((() => {
              ZR.value = performance.now() - GR.timeStamp, uR(!0)
            }))
          }))), GR && yy(["soft-navigation"], (GR => {
            GR.forEach((GR => {
              yR.u && GR.navigationId && uy(yR.u, GR);
              const tR = Math.max((GR.presentationTime || GR.paintTime || 0) - GR.startTime, 0);
              ZR = Gy("FCP", tR, "soft-navigation", GR.navigationId, GR.interactionId, GR.name, GR.startTime), uR = kG(RR, ZR, fy, JR.reportAllChanges), uR(!0)
            }))
          }), JR)
        }))
      },
      Ky = [.1, .25],
      wy = RR => RR.find((RR => 1 === RR.node?.nodeType)) || RR[0];
    let ry = 0,
      ey = 1 / 0,
      ay = 0;
    const Ly = RR => {
      for (const JR of RR) JR.interactionId && (ey = Math.min(ey, JR.interactionId), ay = Math.max(ay, JR.interactionId), ry = ay ? (ay - ey) / 7 + 1 : 0)
    };
    let ny;
    const Uy = () => ny ? ry : performance.interactionCount ?? 0;
    class Wy {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Uy() - this.h
      }
      D() {
        this.h = Uy(), this.v.length = 0, this.p.clear()
      }
      S(RR) {
        const JR = this.T(),
          GR = Math.min(this.v.length - 1, Math.floor(JR / 50));
        return !JR || -1 !== GR || "soft-navigation" !== RR && "back-forward-cache" !== RR ? this.v[GR] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(RR) {
        if (this.m?.(RR), !RR.interactionId) return;
        const JR = this.v.at(-1);
        let GR = this.p.get(RR.interactionId);
        if (GR || this.v.length < 10 || RR.duration > JR.k) {
          if (GR ? RR.duration > GR.k ? (GR.entries = [RR], GR.k = RR.duration) : RR.duration === GR.k && RR.startTime === GR.entries[0].startTime && GR.entries.push(RR) : (GR = {
              id: RR.interactionId,
              entries: [RR],
              k: RR.duration
            }, this.p.set(GR.id, GR), this.v.push(GR)), this.v.sort(((RR, JR) => JR.k - RR.k)), this.v.length > 10) {
            const RR = this.v.splice(10);
            for (const JR of RR) this.p.delete(JR.id)
          }
          this.M?.(GR)
        }
      }
    }
    const Ay = RR => {
        const JR = "requestIdleCallback" in globalThis ? 1e3 : 0,
          GR = globalThis.requestIdleCallback || setTimeout,
          yR = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) RR();
        else {
          const tR = Zy(RR);
          let uR = -1;
          const ZR = () => {
            yR(uR), tR()
          };
          addEventListener("visibilitychange", ZR, {
            once: !0,
            capture: !0
          }), uR = GR((() => {
            removeEventListener("visibilitychange", ZR, {
              capture: !0
            }), tR()
          }), {
            timeout: JR
          })
        }
      },
      Cy = [200, 500],
      Xy = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = jG(JR = Object.assign({}, JR), Wy);
        let yR = [],
          tR = [],
          uR = 0;
        const ZR = new WeakMap,
          qR = new WeakMap;
        let iR = !1;
        const fR = () => {
            iR || (iR = !0, Ay(VR))
          },
          VR = () => {
            const RR = new Set(GR.v.map((RR => ZR.get(RR.entries[0])))),
              JR = tR.length - 10;
            tR = tR.filter(((GR, yR) => yR >= JR || RR.has(GR)));
            const qR = new Set;
            for (const GR of tR) {
              const RR = KR(GR.startTime, GR.processingEnd);
              for (const JR of RR) qR.add(JR)
            }
            const fR = yR.length - 10;
            yR = yR.filter(((RR, JR) => qR.has(RR) || JR >= fR && RR.startTime > uR)), iR = !1
          };
        GR.m = RR => {
          const GR = RR.startTime + RR.duration;
          let yR;
          uR = Math.max(uR, RR.processingEnd);
          for (let uR = tR.length - 1; uR >= 0; uR--) {
            const ZR = tR[uR];
            if (Math.abs(GR - ZR.renderTime) <= 8) {
              yR = ZR, yR.startTime = Math.min(RR.startTime, yR.startTime), yR.processingStart = Math.min(RR.processingStart, yR.processingStart), yR.processingEnd = Math.max(RR.processingEnd, yR.processingEnd), JR.includeProcessedEventEntries && yR.entries.push(RR);
              break
            }
          }
          yR || (yR = {
            startTime: RR.startTime,
            processingStart: RR.processingStart,
            processingEnd: RR.processingEnd,
            renderTime: GR,
            entries: JR.includeProcessedEventEntries ? [RR] : []
          }, tR.push(yR)), RR.interactionId && ZR.set(RR, yR), fR()
        }, GR.M = RR => {
          if (!qR.get(RR)) {
            const GR = RR.entries.find((RR => RR.target))?.target;
            if (GR) {
              const yR = JR.generateTarget?.(GR) ?? zG(GR);
              qR.set(RR, yR)
            } else {
              const JR = RR.entries.find((RR => RR.targetSelector))?.targetSelector;
              JR && qR.set(RR, JR)
            }
          }
        };
        const KR = (RR, JR) => {
          const GR = [];
          for (const tR of yR)
            if (!(tR.startTime + tR.duration < RR)) {
              if (tR.startTime > JR) break;
              GR.push(tR)
            } return GR
        };
        yy(["long-animation-frame"], (RR => {
            yR = yR.concat(RR), fR()
          }), JR),
          function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const GR = Jy();
            iy((() => {
              "interactionCount" in performance || ny || (ny = yy(["event"], Ly, {
                durationThreshold: 0
              }));
              let yR, tR = Gy("INP");
              const uR = jG(JR, Wy),
                ZR = (GR, ZR, qR, iR, fR) => {
                  uR.D(), tR = Gy("INP", -1, GR, ZR, qR, iR, fR), yR = kG(RR, tR, Cy, JR.reportAllChanges)
                },
                qR = () => {
                  const RR = uR.S(tR.navigationType);
                  RR && RR.k !== tR.value && (tR.value = RR.k, tR.entries = RR.entries, yR())
                },
                iR = RR => {
                  qR(), yR(!0), ZR("soft-navigation", RR.navigationId, RR.interactionId, RR.name, RR.startTime)
                },
                fR = function(RR) {
                  let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Ay((() => {
                    for (const JR of RR) "soft-navigation" !== JR.entryType ? uR.l(JR) : iR(JR);
                    qR(), JR && yR(!0)
                  }))
                },
                VR = ["event", "first-input"];
              ty(JR) && VR.push("soft-navigation");
              const KR = yy(VR, fR, {
                ...JR,
                durationThreshold: JR.durationThreshold ?? 40
              });
              yR = kG(RR, tR, Cy, JR.reportAllChanges), KR && (GR.onHidden((() => {
                fR(KR.takeRecords(), !0)
              })), YG((() => {
                ZR("back-forward-cache", tR.navigationId, tR.navigationInteractionId, tR.navigationURL, EG())
              })))
            }))
          }((JR => {
            RR((RR => {
              if (0 === RR.entries.length) {
                const JR = RR.navigationStartTime || 0,
                  GR = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: RR.value,
                    loadState: IG(JR)
                  };
                return Object.assign(RR, {
                  attribution: GR
                })
              }
              const JR = RR.entries[0],
                yR = ZR.get(JR),
                tR = Math.max(yR.processingStart, JR.startTime),
                uR = Math.max(JR.startTime + JR.duration, tR),
                iR = Math.min(yR.processingEnd, uR),
                fR = yR.entries.sort(((RR, JR) => RR.processingStart - JR.processingStart)),
                VR = KR(JR.startTime, iR),
                wR = GR.p.get(JR.interactionId),
                rR = {
                  interactionTarget: qR.get(wR),
                  interactionType: JR.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: JR.startTime,
                  nextPaintTime: uR,
                  processedEventEntries: fR,
                  longAnimationFrameEntries: VR,
                  inputDelay: tR - JR.startTime,
                  processingDuration: iR - tR,
                  presentationDelay: uR - iR,
                  loadState: IG(JR.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (RR => {
                const JR = RR.interactionTime,
                  GR = RR.nextPaintTime;
                if (!RR.longAnimationFrameEntries?.length || !JR || !GR) return;
                const yR = RR.inputDelay,
                  tR = RR.processingDuration;
                let uR, ZR, qR = 0,
                  iR = 0,
                  fR = 0,
                  VR = 0;
                for (const rR of RR.longAnimationFrameEntries) {
                  iR = iR + rR.startTime + rR.duration - rR.styleAndLayoutStart;
                  for (const RR of rR.scripts) {
                    const GR = RR.startTime + RR.duration;
                    if (GR < JR) continue;
                    const fR = GR - Math.max(JR, RR.startTime),
                      KR = RR.duration ? fR / RR.duration * RR.forcedStyleAndLayoutDuration : 0;
                    qR += fR - KR, iR += KR, fR > VR && (ZR = RR.startTime < JR + yR ? "input-delay" : RR.startTime >= JR + yR + tR ? "presentation-delay" : "processing-duration", uR = RR, VR = fR)
                  }
                }
                const KR = RR.longAnimationFrameEntries.at(-1),
                  wR = KR ? KR.startTime + KR.duration : 0;
                wR >= JR + yR + tR && (fR = GR - wR), uR && ZR && (RR.longestScript = {
                  entry: uR,
                  subpart: ZR,
                  intersectingDuration: VR
                }), RR.totalScriptDuration = qR, RR.totalStyleAndLayoutDuration = iR, RR.totalPaintDuration = fR, RR.totalUnattributedDuration = GR - JR - qR - iR - fR
              })(rR), Object.assign(RR, {
                attribution: rR
              })
            })(JR))
          }), JR)
      };
    class My {
      m;
      u;
      l(RR) {
        this.m?.(RR)
      }
    }
    const By = [2500, 4e3];
    let ly = 50;
    const py = [];
    yy(["resource"], (RR => {
      for (const JR of RR) py.push(JR), py.length > ly && py.shift()
    }));
    const gy = [800, 1800],
      by = RR => {
        document.prerendering ? iy((() => by(RR))) : "complete" !== document.readyState ? addEventListener("load", (() => by(RR)), !0) : setTimeout(RR)
      },
      vy = "load_state",
      Oy = "time_to_first_byte";
    var xy = class {
        constructor(RR, JR) {
          this.corePushMeasurement = RR, this.webVitalConfig = JR
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var RR;
          ! function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const GR = jG(JR = Object.assign({}, JR), cG),
              yR = new WeakMap;
            GR.t = RR => {
                if (RR?.sources?.length) {
                  const GR = wy(RR.sources),
                    tR = GR?.node;
                  if (tR) {
                    const RR = JR.generateTarget?.(tR) ?? zG(tR);
                    yR.set(GR, RR)
                  }
                }
              },
              function(RR) {
                let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const GR = Jy();
                Vy(Zy((() => {
                  let yR, tR = Gy("CLS", 0);
                  const uR = jG(JR, cG),
                    ZR = (GR, ZR, qR, iR, fR) => {
                      tR = Gy("CLS", 0, GR, ZR, qR, iR, fR), uR.o = 0, yR = kG(RR, tR, Ky, JR.reportAllChanges)
                    },
                    qR = function() {
                      let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      uR.o > tR.value && (tR.value = uR.o, tR.entries = uR.i), yR(RR)
                    },
                    iR = RR => {
                      qR(!0), ZR("soft-navigation", RR.navigationId, RR.interactionId, RR.name, RR.startTime)
                    },
                    fR = RR => {
                      for (const JR of RR) "soft-navigation" !== JR.entryType ? uR.l(JR) : iR(JR);
                      qR()
                    },
                    VR = ["layout-shift"];
                  ty(JR) && VR.push("soft-navigation");
                  const KR = yy(VR, fR);
                  KR && (yR = kG(RR, tR, Ky, JR.reportAllChanges), GR.onHidden((() => {
                    fR(KR.takeRecords()), yR(!0)
                  })), YG((() => {
                    ZR("back-forward-cache", tR.navigationId, tR.navigationInteractionId, tR.navigationURL, EG()), QG(yR)
                  })), setTimeout(yR))
                })))
              }((JR => {
                RR((RR => {
                  let JR = {};
                  if (RR.entries.length) {
                    const GR = RR.entries.reduce(((RR, JR) => RR.value > JR.value ? RR : JR));
                    if (GR?.sources?.length) {
                      const RR = wy(GR.sources);
                      RR && (JR = {
                        largestShiftTarget: yR.get(RR),
                        largestShiftTime: GR.startTime,
                        largestShiftValue: GR.value,
                        largestShiftSource: RR,
                        largestShiftEntry: GR,
                        loadState: IG(GR.startTime)
                      })
                    }
                  }
                  return Object.assign(RR, {
                    attribution: JR
                  })
                })(JR))
              }), JR)
          }((RR => {
            const {
              loadState: JR,
              largestShiftValue: GR,
              largestShiftTime: yR,
              largestShiftTarget: tR
            } = RR.attribution, uR = this.buildInitialValues(RR);
            this.addIfPresent(uR, "largest_shift_value", GR), this.addIfPresent(uR, "largest_shift_time", yR);
            const ZR = this.buildInitialContext(RR);
            this.addIfPresent(ZR, vy, JR), this.addIfPresent(ZR, "largest_shift_target", tR), this.pushMeasurement(uR, ZR)
          }), {
            reportAllChanges: null === (RR = this.webVitalConfig) || void 0 === RR ? void 0 : RR.reportAllChanges
          })
        }
        measureFCP() {
          var RR;
          ! function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const GR = jG(JR = Object.assign({}, JR), qy);
            ty(JR) && (GR.u = new Map), Vy((JR => {
              RR((RR => {
                let JR = {
                  timeToFirstByte: 0,
                  firstByteToFCP: RR.value,
                  loadState: IG(EG())
                };
                if ("soft-navigation" !== RR.navigationType) {
                  if (RR.entries.length) {
                    const GR = PG(),
                      yR = RR.entries.at(-1);
                    if (GR) {
                      const tR = GR.responseStart,
                        uR = GR.activationStart || 0,
                        ZR = Math.max(0, tR - uR);
                      JR = {
                        timeToFirstByte: ZR,
                        firstByteToFCP: RR.value - ZR,
                        loadState: IG(RR.entries[0].startTime),
                        navigationEntry: GR,
                        fcpEntry: yR
                      }
                    }
                  }
                } else {
                  const yR = GR.u?.get(RR.navigationId);
                  yR && (JR = {
                    timeToFirstByte: 0,
                    firstByteToFCP: RR.value,
                    loadState: "complete",
                    navigationEntry: yR
                  })
                }
                return Object.assign(RR, {
                  attribution: JR
                })
              })(JR))
            }), JR)
          }((RR => {
            const {
              firstByteToFCP: JR,
              timeToFirstByte: GR,
              loadState: yR
            } = RR.attribution, tR = this.buildInitialValues(RR);
            this.addIfPresent(tR, "first_byte_to_fcp", JR), this.addIfPresent(tR, Oy, GR);
            const uR = this.buildInitialContext(RR);
            this.addIfPresent(uR, vy, yR), this.pushMeasurement(tR, uR)
          }), {
            reportAllChanges: null === (RR = this.webVitalConfig) || void 0 === RR ? void 0 : RR.reportAllChanges
          })
        }
        measureINP() {
          var RR;
          Xy((RR => {
            var JR;
            const {
              interactionTime: GR,
              presentationDelay: yR,
              inputDelay: tR,
              processingDuration: uR,
              nextPaintTime: ZR,
              loadState: qR,
              interactionTarget: iR,
              interactionType: fR,
              totalScriptDuration: VR,
              totalStyleAndLayoutDuration: KR,
              totalPaintDuration: wR,
              totalUnattributedDuration: rR,
              longestScript: eR
            } = RR.attribution, aR = this.buildInitialValues(RR);
            this.addIfPresent(aR, "interaction_time", GR), this.addIfPresent(aR, "presentation_delay", yR), this.addIfPresent(aR, "input_delay", tR), this.addIfPresent(aR, "processing_duration", uR), this.addIfPresent(aR, "next_paint_time", ZR), this.addNumberIfDefined(aR, "total_script_duration", VR), this.addNumberIfDefined(aR, "total_style_and_layout_duration", KR), this.addNumberIfDefined(aR, "total_paint_duration", wR), this.addNumberIfDefined(aR, "total_unattributed_duration", rR), this.addNumberIfDefined(aR, "longest_script_intersecting_duration", null === eR || void 0 === eR ? void 0 : eR.intersectingDuration);
            const LR = this.buildInitialContext(RR);
            this.addIfPresent(LR, vy, qR), this.addIfPresent(LR, "interaction_target", iR), this.addIfPresent(LR, "interaction_type", fR), this.addIfPresent(LR, "longest_script_subpart", null === eR || void 0 === eR ? void 0 : eR.subpart), this.addIfPresent(LR, "longest_script_invoker_type", null === eR || void 0 === eR ? void 0 : eR.entry.invokerType), (null === (JR = this.webVitalConfig) || void 0 === JR ? void 0 : JR.trackAttributionSources) && (this.addIfPresent(LR, "longest_script_invoker", null === eR || void 0 === eR ? void 0 : eR.entry.invoker), this.addIfPresent(LR, "longest_script_source_url", null === eR || void 0 === eR ? void 0 : eR.entry.sourceURL), this.addIfPresent(LR, "longest_script_source_function_name", null === eR || void 0 === eR ? void 0 : eR.entry.sourceFunctionName), this.addIfPresent(LR, "longest_script_source_char_position", void 0 !== (null === eR || void 0 === eR ? void 0 : eR.entry.sourceCharPosition) ? String(eR.entry.sourceCharPosition) : void 0)), this.pushMeasurement(aR, LR)
          }), {
            reportAllChanges: null === (RR = this.webVitalConfig) || void 0 === RR ? void 0 : RR.reportAllChanges
          })
        }
        measureLCP() {
          var RR;
          ! function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (JR = Object.assign({}, JR)).resourceBufferSize && (ly = JR.resourceBufferSize);
            const GR = jG(JR, My),
              yR = new WeakMap;
            ty(JR) && (GR.u = new Map), GR.m = RR => {
                const GR = RR.element;
                if (GR) {
                  const tR = JR.generateTarget?.(GR) ?? zG(GR);
                  yR.set(RR, tR)
                } else RR.id && yR.set(RR, `#${RR.id}`)
              },
              function(RR) {
                let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  GR = !1;
                const yR = ty(JR);
                iy((() => {
                  let tR, uR = Jy(),
                    ZR = Gy("LCP");
                  const qR = jG(JR, My),
                    iR = (yR, qR, iR, fR, VR) => {
                      ZR = Gy("LCP", -1, yR, qR, iR, fR, VR), tR = kG(RR, ZR, By, JR.reportAllChanges), GR = !1, "soft-navigation" === yR && (uR = Jy(!0))
                    },
                    fR = RR => {
                      qR.u && RR.navigationId && uy(qR.u, RR), GR || tR(!0), iR("soft-navigation", RR.navigationId, RR.interactionId, RR.name, RR.startTime);
                      const JR = RR.getLargestInteractionContentfulPaint?.();
                      JR && VR([JR])
                    },
                    VR = RR => {
                      JR.reportAllChanges || yR || (RR = RR.slice(-1));
                      for (const JR of RR) {
                        if (!JR) continue;
                        if ("soft-navigation" === JR.entryType) {
                          fR(JR);
                          continue
                        }
                        let RR = 0,
                          GR = [],
                          yR = JR.startTime;
                        if ("largest-contentful-paint" === JR.entryType) RR = Math.max(JR.startTime - FG(), 0), qR.l(JR), GR = [JR];
                        else if ("interaction-contentful-paint" === JR.entryType) {
                          const tR = JR;
                          if (!ZR.navigationId) continue;
                          if ("interactionId" in tR && tR.interactionId != ZR.navigationInteractionId) continue;
                          yR = tR.largestContentfulPaint?.renderTime || 0, RR = Math.max(yR - JR.startTime, 0), tR.largestContentfulPaint && (qR.l(tR.largestContentfulPaint), GR = [tR.largestContentfulPaint])
                        }
                        yR < uR.firstHiddenTime && (ZR.value = RR, ZR.entries = GR, tR())
                      }
                    },
                    KR = ["largest-contentful-paint"];
                  yR && KR.push("interaction-contentful-paint", "soft-navigation");
                  const wR = yy(KR, VR);
                  if (wR) {
                    tR = kG(RR, ZR, By, JR.reportAllChanges);
                    const uR = ["keydown", "click", "visibilitychange"],
                      qR = RR => {
                        if (RR.isTrusted && !GR) {
                          const RR = ZR.id;
                          Ay((() => {
                            if (!GR) {
                              if (!yR) {
                                wR.disconnect();
                                for (const RR of uR) removeEventListener(RR, qR, {
                                  capture: !0
                                })
                              }
                              RR === ZR.id && (GR = !0, tR(!0))
                            }
                          }))
                        }
                      };
                    for (const RR of uR) addEventListener(RR, qR, {
                      capture: !0
                    });
                    YG((yR => {
                      iR("back-forward-cache", ZR.navigationId, ZR.navigationInteractionId, ZR.navigationURL, EG()), tR = kG(RR, ZR, By, JR.reportAllChanges), QG((() => {
                        ZR.value = performance.now() - yR.timeStamp, GR = !0, tR(!0)
                      }))
                    }))
                  }
                }))
              }((JR => {
                RR((RR => {
                  let JR = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: RR.value
                  };
                  if (RR.entries.length) {
                    const tR = RR.entries.at(-1),
                      uR = RR => RR.name === tR.url && (RR.requestStart || RR.startTime) <= tR.startTime,
                      ZR = tR.url && (py.findLast(uR) || performance.getEntriesByType("resource").findLast(uR));
                    let qR;
                    JR.target = yR.get(tR), JR.lcpEntry = tR, tR.url && (JR.url = tR.url), ZR && (JR.lcpResourceEntry = ZR);
                    let iR = 0,
                      fR = 0;
                    if ("soft-navigation" !== RR.navigationType ? (qR = PG(), iR = qR?.activationStart ?? 0, fR = qR?.responseStart ?? 0) : (iR = RR.navigationStartTime || 0, qR = GR.u?.get(RR.navigationId)), qR) {
                      const GR = Math.max(0, fR - iR),
                        yR = Math.max(GR, ZR ? (ZR.requestStart || ZR.startTime) - iR : 0),
                        tR = Math.min(RR.value, Math.max(yR, ZR ? ZR.responseEnd - iR : 0));
                      JR = {
                        ...JR,
                        timeToFirstByte: GR,
                        resourceLoadDelay: yR - GR,
                        resourceLoadDuration: tR - yR,
                        elementRenderDelay: RR.value - tR,
                        navigationEntry: qR
                      }
                    }
                  }
                  return Object.assign(RR, {
                    attribution: JR
                  })
                })(JR))
              }), JR)
          }((RR => {
            var JR;
            const {
              elementRenderDelay: GR,
              resourceLoadDelay: yR,
              resourceLoadDuration: tR,
              timeToFirstByte: uR,
              target: ZR,
              url: qR,
              lcpResourceEntry: iR
            } = RR.attribution, fR = this.buildInitialValues(RR);
            this.addIfPresent(fR, "element_render_delay", GR), this.addIfPresent(fR, "resource_load_delay", yR), this.addIfPresent(fR, "resource_load_duration", tR), this.addIfPresent(fR, Oy, uR);
            const VR = this.buildInitialContext(RR);
            this.addIfPresent(VR, "element", ZR), (null === (JR = this.webVitalConfig) || void 0 === JR ? void 0 : JR.trackAttributionSources) && (this.addIfPresent(VR, "resource_url", qR), this.addIfPresent(VR, "resource_delivery_type", null === iR || void 0 === iR ? void 0 : iR.deliveryType), this.addIfPresent(VR, "resource_initiator_type", null === iR || void 0 === iR ? void 0 : iR.initiatorType)), this.pushMeasurement(fR, VR)
          }), {
            reportAllChanges: null === (RR = this.webVitalConfig) || void 0 === RR ? void 0 : RR.reportAllChanges
          })
        }
        measureTTFB() {
          var RR;
          ! function(RR) {
            ! function(RR) {
              let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const GR = ty(JR);
              let yR = Gy("TTFB"),
                tR = kG(RR, yR, gy, JR.reportAllChanges);
              by((() => {
                const uR = PG();
                if (uR) {
                  const ZR = uR.responseStart;
                  yR.value = Math.max(ZR - FG(), 0), yR.entries = [uR], tR(!0), YG((() => {
                    yR = Gy("TTFB", 0, "back-forward-cache", yR.navigationId, yR.navigationInteractionId, yR.navigationURL, EG()), tR = kG(RR, yR, gy, JR.reportAllChanges), tR(!0)
                  })), GR && yy(["soft-navigation"], (GR => {
                    GR.forEach((GR => {
                      GR.navigationId && (yR = Gy("TTFB", 0, "soft-navigation", GR.navigationId, GR.interactionId, GR.name, GR.startTime), yR.entries = [GR], tR = kG(RR, yR, gy, JR.reportAllChanges), tR(!0))
                    }))
                  }), JR)
                }
              }))
            }((JR => {
              RR((RR => {
                const JR = RR.entries[0];
                let GR = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: JR
                };
                if (RR.entries.length && JR instanceof PerformanceNavigationTiming) {
                  const yR = JR.activationStart || 0,
                    tR = Math.max((JR.workerStart || JR.fetchStart || 0) - yR, 0),
                    uR = Math.max(JR.domainLookupStart - yR, 0),
                    ZR = Math.max(JR.connectStart - yR, 0),
                    qR = Math.max(JR.connectEnd - yR, 0);
                  GR = {
                    waitingDuration: tR,
                    cacheDuration: uR - tR,
                    dnsDuration: ZR - uR,
                    connectionDuration: qR - ZR,
                    requestDuration: RR.value - qR,
                    navigationEntry: JR
                  }
                }
                return Object.assign(RR, {
                  attribution: GR
                })
              })(JR))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((RR => {
            const {
              dnsDuration: JR,
              connectionDuration: GR,
              requestDuration: yR,
              waitingDuration: tR,
              cacheDuration: uR
            } = RR.attribution, ZR = this.buildInitialValues(RR);
            this.addIfPresent(ZR, "dns_duration", JR), this.addIfPresent(ZR, "connection_duration", GR), this.addIfPresent(ZR, "request_duration", yR), this.addIfPresent(ZR, "waiting_duration", tR), this.addIfPresent(ZR, "cache_duration", uR);
            const qR = this.buildInitialContext(RR);
            this.pushMeasurement(ZR, qR)
          }), {
            reportAllChanges: null === (RR = this.webVitalConfig) || void 0 === RR ? void 0 : RR.reportAllChanges
          })
        }
        buildInitialValues(RR) {
          return {
            [RR.name.toLowerCase()]: RR.value,
            delta: RR.delta
          }
        }
        buildInitialContext(RR) {
          var JR;
          const GR = null !== (JR = RJ("com.grafana.faro.lastNavigationId", TR)) && void 0 !== JR ? JR : HG;
          return {
            id: RR.id,
            rating: RR.rating,
            navigation_type: RR.navigationType,
            navigation_entry_id: GR
          }
        }
        pushMeasurement(RR, JR) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: RR
          }, {
            context: JR
          })
        }
        addIfPresent(RR, JR, GR) {
          GR && (RR[JR] = GR)
        }
        addNumberIfDefined(RR, JR, GR) {
          void 0 !== GR && (RR[JR] = GR)
        }
      },
      Ny = class extends JG {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = GG
        }
        initialize() {
          this.logDebug("Initializing"), new xy(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Dy = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Hy() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const JR of RR)
        if ("traceparent" === JR.name) {
          if (!Dy.test(JR.description)) continue;
          const [, RR, GR] = JR.description.split("-");
          if (null != RR && null != GR) return {
            traceId: RR,
            spanId: GR
          };
          break
        }
    }

    function oy(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: GR,
        monoNow: yR
      } = JR;
      return Math.min(GR, GR - (yR - RR))
    }

    function cy(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [GR, yR] of Object.entries(JR)) {
        const JR = RR[GR];
        return null != JR && (vR(yR) ? yR.includes(JR) : JR === yR)
      }
      return !0
    }

    function Py(RR) {
      const {
        connectEnd: JR,
        connectStart: GR,
        decodedBodySize: yR,
        domainLookupEnd: tR,
        domainLookupStart: uR,
        duration: ZR,
        encodedBodySize: qR,
        fetchStart: iR,
        initiatorType: fR,
        name: VR,
        nextHopProtocol: KR,
        redirectEnd: wR,
        redirectStart: rR,
        renderBlockingStatus: eR,
        requestStart: aR,
        responseEnd: LR,
        responseStart: nR,
        responseStatus: UR,
        secureConnectionStart: WR,
        transferSize: AR,
        workerStart: CR
      } = RR;
      return {
        name: VR,
        httpHost: my(VR),
        duration: zy(ZR),
        tcpHandshakeTime: zy(JR - GR),
        dnsLookupTime: zy(tR - uR),
        tlsNegotiationTime: zy(JR - WR),
        responseStatus: zy(UR),
        redirectTime: zy(wR - rR),
        requestTime: zy(nR - aR),
        responseTime: zy(LR - nR),
        fetchTime: zy(LR - iR),
        serviceWorkerTime: zy(CR > 0 ? iR - CR : 0),
        decodedBodySize: zy(yR),
        encodedBodySize: zy(qR),
        cacheHitStatus: function() {
          let RR = "fullLoad";
          0 === AR ? yR > 0 && (RR = "cache") : null != UR ? 304 === UR && (RR = "conditionalFetch") : qR > 0 && AR < qR && (RR = "conditionalFetch");
          return RR
        }(),
        renderBlockingStatus: zy(eR),
        protocol: KR,
        initiatorType: fR,
        visibilityState: document.visibilityState,
        ttfb: zy(nR - aR),
        transferSize: zy(AR)
      }
    }

    function Iy(RR) {
      const {
        activationStart: JR,
        domComplete: GR,
        domContentLoadedEventEnd: yR,
        domContentLoadedEventStart: tR,
        domInteractive: uR,
        fetchStart: ZR,
        loadEventEnd: qR,
        loadEventStart: iR,
        responseStart: fR,
        type: VR
      } = RR, KR = function() {
        var RR;
        return null != (null === (RR = performance.timing) || void 0 === RR ? void 0 : RR.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return VJ(VJ({}, Py(RR)), {}, {
        pageLoadTime: zy(GR - ZR),
        documentParsingTime: zy(KR ? uR - KR : null),
        domProcessingTime: zy(GR - uR),
        domContentLoadHandlerTime: zy(yR - tR),
        onLoadTime: zy(qR - iR),
        ttfb: zy(Math.max(fR - (null !== JR && void 0 !== JR ? JR : 0), 0)),
        type: VR
      })
    }

    function my(RR) {
      try {
        return new URL(RR).host || HG
      } catch (JR) {
        return HG
      }
    }

    function zy(RR) {
      return null == RR ? HG : "number" === typeof RR ? Math.round(RR > 0 ? RR : 0).toString() : RR.toString()
    }
    const Sy = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function jy(RR, JR, GR, yR, tR, uR, ZR) {
      try {
        var qR = RR[uR](ZR),
          iR = qR.value
      } catch (RR) {
        return void GR(RR)
      }
      qR.done ? JR(iR) : Promise.resolve(iR).then(yR, tR)
    }

    function dy(RR) {
      return function() {
        var JR = this,
          GR = arguments;
        return new Promise((function(yR, tR) {
          var uR = RR.apply(JR, GR);

          function ZR(RR) {
            jy(uR, yR, tR, ZR, qR, "next", RR)
          }

          function qR(RR) {
            jy(uR, yR, tR, ZR, qR, "throw", RR)
          }
          ZR(void 0)
        }))
      }
    }
    const Ey = new UG;
    var Yy = class extends JG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = GG
      }
      initialize() {
        var RR = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let JR = !1;
        const GR = () => {
          ! function(RR) {
            if ("complete" === document.readyState) RR();
            else {
              const JR = () => {
                "complete" === document.readyState && (RR(), document.removeEventListener("readystatechange", JR))
              };
              document.addEventListener("readystatechange", JR)
            }
          }(dy((function*() {
            if (JR) return;
            const GR = RR.api.pushEvent,
              {
                faroNavigationId: yR
              } = yield function(RR) {
                let JR;
                const GR = new Promise((RR => {
                  JR = RR
                }));
                return new PerformanceObserver((GR => {
                  var yR;
                  const [tR] = GR.getEntries();
                  if (null == tR || QR(tR.name)) return;
                  const uR = tR.toJSON();
                  let ZR = Hy(null === uR || void 0 === uR ? void 0 : uR.serverTiming);
                  const qR = null !== (yR = RJ("com.grafana.faro.lastNavigationId", TR)) && void 0 !== yR ? yR : HG,
                    iR = VJ(VJ({}, Iy(uR)), {}, {
                      faroNavigationId: nJ(),
                      faroPreviousNavigationId: qR
                    });
                  JJ("com.grafana.faro.lastNavigationId", iR.faroNavigationId, TR), RR("faro.performance.navigation", iR, void 0, {
                    spanContext: ZR,
                    timestampOverwriteMs: oy(uR.startTime)
                  }), JR(iR)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), GR
              }(GR);
            JR || null == yR || function(RR, JR, GR, yR) {
              const tR = yR.trackResources;
              new PerformanceObserver((yR => {
                const uR = yR.getEntries(),
                  ZR = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const qR of uR) {
                  if (QR(qR.name)) continue;
                  null === GR || void 0 === GR || GR.notify({
                    type: "resource"
                  });
                  const yR = qR.toJSON();
                  let uR = Hy(null === yR || void 0 === yR ? void 0 : yR.serverTiming);
                  (null == tR && cy(yR, Sy) || tR) && JR("faro.performance.resource", VJ(VJ({}, Py(yR)), {}, {
                    faroNavigationId: RR,
                    faroResourceId: nJ()
                  }), void 0, {
                    spanContext: uR,
                    timestampOverwriteMs: oy(yR.startTime, ZR)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(yR, GR, Ey, RR.config)
          })))
        };
        this.cancelInitialization = () => {
          JR = !0, document.removeEventListener("prerenderingchange", GR)
        }, document.prerendering ? document.addEventListener("prerenderingchange", GR, {
          once: !0
        }) : GR()
      }
      destroy() {
        var RR;
        null === (RR = this.cancelInitialization) || void 0 === RR || RR.call(this), this.cancelInitialization = void 0
      }
    };
    const ky = "data-faro-user-action-name",
      Qy = ky.replace(/-name$/, "-timeout"),
      Fy = 1e3;

    function Ty(RR) {
      return `data-${(RR.startsWith("data-")?RR.slice(5):RR).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function sy(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jJ;
      if (void 0 === RR) return JR;
      let yR = NaN;
      try {
        yR = "string" === typeof RR && "" === RR.trim() ? NaN : Number(RR)
      } catch (tR) {}
      return !Number.isFinite(yR) || yR <= 0 ? (GR(`initialActivityTimeout must be a finite number greater than zero; using ${JR} ms`), JR) : yR > 1e3 ? (GR(`initialActivityTimeout cannot exceed ${Fy} ms; clamping to the maximum`), Fy) : yR
    }

    function hy(RR, JR, GR) {
      return void 0 !== RR && window.clearTimeout(RR), window.setTimeout((() => {
        JR()
      }), GR)
    }

    function Rt(RR) {
      return RR.type === nG
    }
    let Jt, Gt;

    function yt() {
      return Jt || (Jt = new UG), Gt || (Gt = new MutationObserver(((RR, JR) => {
        Jt.notify({
          type: "dom-mutation"
        })
      })), Gt.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Jt
    }
    const tt = "fetch",
      ut = "xhr";
    let Zt, qt, it, ft, Vt = !1;

    function Kt() {
      if (Zt) return Zt;

      function RR(RR) {
        Zt.notify({
          type: LG,
          request: RR
        })
      }

      function JR(RR) {
        Zt.notify({
          type: nG,
          request: RR
        })
      }
      return Zt = new UG, Vt || (! function(RR) {
        let {
          onRequestEnd: JR,
          onRequestStart: GR
        } = RR;
        it || (it = window.fetch);
        window.fetch = function() {
          var RR, yR;
          const tR = null !== (RR = FR(arguments[0])) && void 0 !== RR ? RR : "",
            uR = QR(tR),
            ZR = (null !== (yR = arguments[1]) && void 0 !== yR ? yR : {}).method,
            qR = nJ();
          return uR || GR({
            url: tR,
            method: ZR,
            requestId: qR,
            apiType: tt
          }), it.apply(this, arguments).then((RR => (uR || JR({
            url: tR,
            method: ZR,
            requestId: qR,
            apiType: tt
          }), RR))).catch((RR => {
            throw uR || JR({
              url: tR,
              method: ZR,
              requestId: qR,
              apiType: tt
            }), RR
          }))
        }
      }({
        onRequestStart: RR,
        onRequestEnd: JR
      }), function(RR) {
        let {
          onRequestStart: JR,
          onRequestEnd: GR
        } = RR;
        qt || (qt = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const RR = arguments[1],
            yR = QR(RR),
            tR = arguments[0],
            uR = nJ();
          this.addEventListener("loadstart", (function() {
            yR || JR({
              url: RR,
              method: tR,
              requestId: uR,
              apiType: ut
            })
          })), this.addEventListener("load", (function() {
            yR || GR({
              url: RR,
              method: tR,
              requestId: uR,
              apiType: ut
            })
          })), this.addEventListener("error", (function() {
            yR || GR({
              url: RR,
              method: tR,
              requestId: uR,
              apiType: ut
            })
          })), this.addEventListener("abort", (function() {
            yR || GR({
              url: RR,
              method: tR,
              requestId: uR,
              apiType: ut
            })
          })), qt.apply(this, arguments)
        }
      }({
        onRequestStart: RR,
        onRequestEnd: JR
      }), Vt = !0), Zt
    }
    let wt, rt = !1;
    let et = function(RR) {
      return RR[RR.Started = 0] = "Started", RR[RR.Halted = 1] = "Halted", RR[RR.Cancelled = 2] = "Cancelled", RR[RR.Ended = 3] = "Ended", RR
    }({});
    var Lt = class {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = RR, this.logDebug = JR, this.initialActivityTimeout = GR, this.http = Kt(), this.dom = yt(), this.perf = (ft || (ft = new UG), rt || (wt = Ey.subscribe((RR => {
          "resource" === RR.type && ft.notify({
            type: "resource-entry"
          })
        })), rt = !0), ft), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new UG).merge(this.http, this.dom, this.perf).takeWhile((() => [et.Started, et.Halted].includes(this.userAction.getState()))).filter((RR => !!(this.userAction.getState() !== et.Halted || Rt(RR) && this.runningRequests.has(RR.request.requestId)))).subscribe((RR => {
          (function(RR) {
            return RR.type === LG
          })(RR) && this.runningRequests.set(RR.request.requestId, RR.request), Rt(RR) && this.runningRequests.delete(RR.request.requestId), Rt(RR) ? this.userAction.getState() === et.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((RR => [et.Ended, et.Cancelled].includes(RR))).first().subscribe((() => this.cleanup())), this.startupTid = hy(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === et.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === et.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = hy(this.haltTid, (() => {
          this.userAction.getState() === et.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var RR, JR;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (RR = this.allMonitorsSub) || void 0 === RR || RR.unsubscribe(), null === (JR = this.stateSub) || void 0 === JR || JR.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(RR) {
        void 0 !== RR && window.clearTimeout(RR)
      }
    };

    function nt(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jJ;
      var GR;
      const {
        api: yR,
        config: tR,
        internalLogger: uR
      } = RR, ZR = sy(null === (GR = tR.userActionsInstrumentation) || void 0 === GR ? void 0 : GR.initialActivityTimeout, 100, JR);
      return {
        processUserEvent: function(RR) {
          var JR, GR;
          const uR = null !== (JR = null === (GR = tR.userActionsInstrumentation) || void 0 === GR ? void 0 : GR.dataAttributeName) && void 0 !== JR ? JR : ky,
            ZR = RR.target;
          if (!(ZR instanceof Element)) return;
          const qR = function(RR, JR) {
              let GR = RR;
              for (; GR;) {
                if (GR.hasAttribute(JR)) return GR;
                GR = GR.parentElement
              }
              return null
            }(ZR, Ty(uR)),
            iR = function(RR, JR) {
              if (!RR) return;
              const GR = function(RR) {
                  return Ty(RR).slice(5).replace(/-(.)/g, ((RR, JR) => JR.toUpperCase()))
                }(JR),
                yR = RR.dataset;
              for (const tR in yR)
                if (tR === GR) return yR[tR]
            }(qR, uR);
          if (!qR || !iR) return;
          const fR = function(RR, JR) {
            const GR = RR.getAttribute(function(RR) {
              const JR = Ty(RR);
              return JR.endsWith("-name") ? `${JR.slice(0,-5)}-timeout` : `${JR}-timeout`
            }(JR));
            return null === GR ? void 0 : Number(GR)
          }(qR, uR);
          yR.startUserAction(iR, {}, {
            triggerName: RR.type,
            initialActivityTimeout: fR
          })
        },
        processUserActionStarted: function(RR, GR) {
          const yR = RR,
            tR = sy(GR, ZR, JR);
          new Lt(yR, uR.debug, tR).attach()
        }
      }
    }
    const Ut = "user_action_start",
      Wt = {
        Normal: "normal",
        Critical: "critical"
      };
    var At = class {
        constructor() {
          this.buffer = []
        }
        addItem(RR) {
          this.buffer.push(RR)
        }
        flushBuffer(RR) {
          if (bR(RR))
            for (const JR of this.buffer) RR(JR);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Ct = class extends UG {
        constructor(RR) {
          let {
            name: JR,
            parentId: GR,
            trigger: yR,
            transports: tR,
            attributes: uR,
            trackUserActionsExcludeItem: ZR,
            importance: qR = Wt.Normal,
            pushEvent: iR
          } = RR;
          super(), this.name = JR, this.attributes = uR, this.id = nJ(), this.trigger = yR, this.parentId = null !== GR && void 0 !== GR ? GR : this.id, this.trackUserActionsExcludeItem = ZR, this.importance = qR, this._pushEvent = iR, this._itemBuffer = new At, this._transports = tR, this._state = 0, this._start()
        }
        addItem(RR) {
          return 0 === this._state && (this._itemBuffer.addItem(RR), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = wJ(), this._startTimeMono = rJ())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((RR => {
            this._transports.execute(RR)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const RR = wJ(),
            JR = rJ() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((RR => {
            if (function(RR, JR) {
                return (null === JR || void 0 === JR ? void 0 : JR(RR)) || "measurement" === RR.type && "web-vitals" === RR.payload.type
              }(RR, this.trackUserActionsExcludeItem)) return void this._transports.execute(RR);
            const JR = sJ(sJ({}, RR), {}, {
              payload: sJ(sJ({}, RR.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(JR)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", sJ({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: RR.toString(),
            userActionDuration: JR.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, oJ(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: RR => (RR.action = {
              id: this.id,
              name: this.name
            }, RR)
          })
        }
        getState() {
          return this._state
        }
      };
    const Xt = new UG;

    function Mt(RR, JR) {
      return !!RR && (0 === (null === RR || void 0 === RR ? void 0 : RR.getState()) && (RR.addItem(JR), !0))
    }
    var Bt = class extends JG {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = GG
        }
        initialize() {
          const {
            processUserEvent: RR,
            processUserActionStarted: JR
          } = nt(aR, (RR => this.logWarn(RR)));
          this._processUserEvent = RR, this._processKeydown = JR => {
            [" ", "Enter"].includes(JR.key) && RR(JR)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Xt.subscribe((RR => {
            let {
              type: GR,
              userAction: yR,
              initialActivityTimeout: tR
            } = RR;
            "user_action_start" === GR && JR(yR, tR)
          }))
        }
        destroy() {
          var RR;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (RR = this._userActionSub) || void 0 === RR || RR.unsubscribe()
        }
      },
      lt = class extends JG {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = GG, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(RR) {
          const JR = {
            blockedURI: RR.blockedURI,
            columnNumber: RR.columnNumber,
            disposition: RR.disposition,
            documentURI: RR.documentURI,
            effectiveDirective: RR.effectiveDirective,
            lineNumber: RR.lineNumber,
            originalPolicy: RR.originalPolicy,
            referrer: RR.referrer,
            sample: RR.sample,
            sourceFile: RR.sourceFile,
            statusCode: RR.statusCode,
            violatedDirective: RR.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", oJ(JR))
        }
      };
    var pt = class extends UG {
      constructor(RR, JR) {
        var GR, yR, tR, uR;
        super(), this._tracking = !1, this.eventsObservable = RR, this._options = {
          inactivityMs: null !== (GR = null === JR || void 0 === JR ? void 0 : JR.inactivityMs) && void 0 !== GR ? GR : 100,
          drainTimeoutMs: null !== (yR = null === JR || void 0 === JR ? void 0 : JR.drainTimeoutMs) && void 0 !== yR ? yR : 1e4,
          isOperationStart: null !== (tR = null === JR || void 0 === JR ? void 0 : JR.isOperationStart) && void 0 !== tR ? tR : () => {},
          isOperationEnd: null !== (uR = null === JR || void 0 === JR ? void 0 : JR.isOperationEnd) && void 0 !== uR ? uR : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((RR => {
          var JR;
          this._lastEventTime = rJ(), null === (JR = this._currentEvents) || void 0 === JR || JR.push(RR);
          const GR = this._options.isOperationStart(RR);
          var yR;
          GR && (null === (yR = this._activeOperations) || void 0 === yR || yR.set(GR, !0));
          const tR = this._options.isOperationEnd(RR);
          var uR;
          tR && (null === (uR = this._activeOperations) || void 0 === uR || uR.delete(tR));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = rJ(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let RR;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), RR = this.hasActiveOperations() ? rJ() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: RR
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = gt(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = gt(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(RR) {
        RR && clearTimeout(RR)
      }
    };

    function gt(RR, JR, GR) {
      return RR && clearTimeout(RR), RR = setTimeout((() => {
        JR()
      }), GR)
    }
    let bt;
    const vt = new Set,
      Ot = new Map;
    let xt, Nt, Dt, Ht, ot, ct, Pt, It, mt = !1;
    var zt = class extends JG {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = GG
      }
      initialize() {
        const RR = Kt(),
          JR = yt(),
          GR = function() {
            function RR(RR, JR) {
              const GR = null !== JR && void 0 !== JR ? JR : location.href;
              GR !== Nt && (xt.notify({
                type: "url-change",
                from: Nt,
                to: GR,
                trigger: RR
              }), Nt = GR)
            }
            if (xt || (xt = new UG, Nt = location.href), !mt)
              if ("navigation" in window && "NavigateEvent" in window) {
                Pt = JR => {
                  try {
                    const GR = null === JR || void 0 === JR ? void 0 : JR.destination;
                    (null === GR || void 0 === GR ? void 0 : GR.sameDocument) && "string" === typeof GR.url && RR("navigate", GR.url)
                  } catch (GR) {}
                }, window.navigation.addEventListener("navigate", Pt);
                const JR = window.NavigateEvent;
                JR && JR.prototype && "function" === typeof JR.prototype.intercept && (It || (It = JR.prototype.intercept), JR.prototype.intercept = function(JR) {
                  try {
                    const JR = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      GR = null === this || void 0 === this ? void 0 : this.destination;
                    JR && GR && !1 === GR.sameDocument && "string" === typeof GR.url && RR("navigate-intercept", GR.url)
                  } catch (GR) {}
                  return It.call(this, JR)
                }), mt = !0
              } else Dt || (Dt = window.history.pushState), window.history.pushState = function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                const tR = Dt.apply(window.history, GR);
                return RR("pushState"), tR
              }, Ht || (Ht = window.history.replaceState), window.history.replaceState = function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                const tR = Ht.apply(window.history, GR);
                return RR("replaceState"), tR
              }, ot = () => RR("popstate"), ct = () => RR("hashchange"), window.addEventListener("popstate", ot), window.addEventListener("hashchange", ct), mt = !0;
            return xt
          }(),
          yR = (tR = ["pointerdown", "keydown"], bt || (bt = new UG), tR.forEach((RR => {
            if (!vt.has(RR)) {
              const JR = () => {
                bt.notify({
                  type: "interaction",
                  name: RR
                })
              };
              window.addEventListener(RR, JR), vt.add(RR), Ot.set(RR, JR)
            }
          })), bt);
        var tR;
        const uR = new pt((new UG).merge(RR, JR, GR), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: RR => function(RR) {
            return RR.type === LG
          }(RR) ? RR.request.requestId : void 0,
          isOperationEnd: RR => function(RR) {
            return RR.type === nG
          }(RR) ? RR.request.requestId : void 0
        });
        uR.filter((RR => "tracking-ended" === RR.message)).subscribe((RR => {
          var JR, GR;
          if ((null === (JR = RR.events) || void 0 === JR ? void 0 : JR.some((RR => "url-change" === RR.type))) && (null === (GR = RR.events) || void 0 === GR ? void 0 : GR.some((RR => "dom-mutation" === RR.type)))) {
            var yR;
            const JR = null === (yR = RR.events) || void 0 === yR ? void 0 : yR.find((RR => "url-change" === RR.type));
            aR.api.pushEvent("faro.navigation", {
              fromUrl: null === JR || void 0 === JR ? void 0 : JR.from,
              toUrl: null === JR || void 0 === JR ? void 0 : JR.to,
              sameDocument: String(!0),
              duration: RR.duration
            })
          }
        })), yR.subscribe((() => {
          uR.startTracking()
        }))
      }
    };

    function St() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const JR = [new Bt, new DG, new Ny, new yG, new oG, new zt];
      return !1 !== RR.enablePerformanceInstrumentation && JR.unshift(new Yy), !1 !== RR.enableContentSecurityPolicyInstrumentation && JR.push(new lt), !1 !== RR.captureConsole && JR.push(new xG), JR
    }
    var jt = GR(7831);
    let dt, Et;

    function Yt() {
      const RR = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return dt === RR && Et || (Et = new jt.UAParser(RR).getResult(), dt = RR), Et
    }
    const kt = () => {
        const {
          browser: RR,
          os: JR,
          ua: GR
        } = Yt(), {
          name: yR,
          version: tR
        } = RR, {
          name: uR,
          version: ZR
        } = JR, qR = navigator.language, iR = GR.includes("Mobi"), fR = function() {
          if (!yR || !tR) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== yR && void 0 !== yR ? yR : HG,
            version: null !== tR && void 0 !== tR ? tR : HG,
            os: `${null!==uR&&void 0!==uR?uR:HG} ${null!==ZR&&void 0!==ZR?ZR:HG}`,
            userAgent: null !== GR && void 0 !== GR ? GR : HG,
            language: null !== qR && void 0 !== qR ? qR : HG,
            mobile: iR,
            brands: null !== fR && void 0 !== fR ? fR : HG,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Qt = () => {
        const {
          name: RR,
          version: JR
        } = Yt().os;
        if (!RR && !JR) return {};
        const GR = {};
        return RR && (GR.name = RR), JR && (GR.version = JR), {
          os: GR
        }
      };

    function Ft(RR) {
      var JR, GR, yR;
      return {
        id: null !== (JR = null === (GR = aR.config) || void 0 === GR || null === (GR = GR.sessionTracking) || void 0 === GR || null === (yR = GR.generateSessionId) || void 0 === yR ? void 0 : yR.call(GR)) && void 0 !== JR ? JR : nJ(),
        attributes: RR
      }
    }
    const Tt = () => ({
      sdk: {
        name: "faro-web",
        version: GG
      }
    });
    var st = class extends RG {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ht = function(RR) {
      return RR.EXCEPTION = "exception", RR.LOG = "log", RR.MEASUREMENT = "measurement", RR.TRACE = "trace", RR.EVENT = "event", RR
    }({});
    const Ru = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Ju(RR, JR) {
      var GR, yR;
      if (void 0 === JR) return RR;
      if (void 0 === RR) return {
        resourceSpans: JR
      };
      const tR = null === (GR = RR.resourceSpans) || void 0 === GR ? void 0 : GR[0];
      if (void 0 === tR) return RR;
      const uR = (null === tR || void 0 === tR ? void 0 : tR.scopeSpans) || [],
        ZR = (null === JR || void 0 === JR || null === (yR = JR[0]) || void 0 === yR ? void 0 : yR.scopeSpans) || [];
      return sJ(sJ({}, RR), {}, {
        resourceSpans: [sJ(sJ({}, tR), {}, {
          scopeSpans: [...uR, ...ZR]
        })]
      })
    }

    function Gu(RR) {
      let JR = {
        meta: {}
      };
      return void 0 !== RR[0] && (JR.meta = RR[0].meta), RR.forEach((RR => {
        switch (RR.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const GR = Ru[RR.type],
              yR = JR[GR];
            JR = sJ(sJ({}, JR), {}, {
              [GR]: void 0 === yR ? [RR.payload] : [...yR, RR.payload]
            });
            break
          }
          case "trace":
            JR = sJ(sJ({}, JR), {}, {
              traces: Ju(JR.traces, RR.payload.resourceSpans)
            })
        }
      })), JR
    }
    var yu = class extends st {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = RR, this.name = "@grafana/faro-web-sdk:transport-console", this.version = GG
      }
      send(RR) {
        var JR;
        return this.unpatchedConsole[null !== (JR = this.options.level) && void 0 !== JR ? JR : WG.DEBUG]("New event", Gu([RR]))
      }
    };
    const tu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      uu = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Zu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      qu = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      iu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      fu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Vu(RR) {
      let {
        weekday: JR,
        day: GR,
        month: yR,
        year: tR,
        hour: uR,
        minute: ZR,
        second: qR
      } = RR;
      if (tR < 1900 || GR < 1 || uR > 23 || ZR > 59 || qR > 60) return;
      const iR = 60 === qR,
        fR = new Date(0);
      return fR.setUTCFullYear(tR, yR, GR), fR.setUTCHours(uR, ZR, iR ? 59 : qR, 0), fR.getUTCDay() === JR && fR.getUTCDate() === GR && fR.getUTCMonth() === yR && fR.getUTCFullYear() === tR && fR.getUTCHours() === uR && fR.getUTCMinutes() === ZR && fR.getUTCSeconds() === (iR ? 59 : qR) ? fR.getTime() + (iR ? 1e3 : 0) : void 0
    }
    var Ku = class {
      constructor(RR) {
        this.options = RR, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var RR = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const JR = this.sequence++;
        let GR = !1;
        return {
          deliver: function() {
            var GR = dy((function*(GR) {
              const yR = RR.options.getNow();
              let tR, uR = 0;
              for (;;) {
                var ZR, qR, iR;
                const fR = RR.options.retry.maxAttempts - uR,
                  VR = yield RR.runAttempt((() => GR(fR, RR.unloading)), uR > 0);
                if (uR += VR.attemptsMade, "success" === VR.kind) return {
                  kind: "success",
                  attempts: uR,
                  elapsedTimeMs: RR.options.getNow() - yR
                };
                if (tR = VR.failure, "terminal" === VR.kind || RR.unloading) return {
                  kind: "terminal",
                  attempts: uR,
                  elapsedTimeMs: RR.options.getNow() - yR,
                  failure: tR
                };
                if (uR >= RR.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: uR,
                  elapsedTimeMs: RR.options.getNow() - yR,
                  failure: tR,
                  reason: "retries-exhausted"
                };
                if (null != VR.retryAfterMs && VR.retryAfterMs > RR.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: uR,
                  elapsedTimeMs: RR.options.getNow() - yR,
                  failure: tR,
                  reason: "retry-after-too-long"
                };
                const KR = Math.min(null !== (ZR = VR.retryAfterMs) && void 0 !== ZR ? ZR : RR.options.retry.initialBackoffMs * Math.pow(RR.options.retry.backoffMultiplier, uR - 1), RR.options.retry.maxBackoffMs);
                if (null === (qR = (iR = RR.options).onRetry) || void 0 === qR || qR.call(iR, KR, uR + 1), yield RR.waitForTurn(JR, KR)) {
                  const JR = RR.options.retry.maxAttempts - uR,
                    tR = yield RR.runAttempt((() => GR(JR, !0)));
                  return uR += tR.attemptsMade, {
                    kind: "success" === tR.kind ? "success" : "terminal",
                    attempts: uR,
                    elapsedTimeMs: RR.options.getNow() - yR,
                    failure: "success" === tR.kind ? void 0 : tR.failure
                  }
                }
              }
            }));
            return function(RR) {
              return GR.apply(this, arguments)
            }
          }(),
          release: () => {
            GR || (GR = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const RR = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const JR of RR) JR.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((GR, yR) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const JR = () => {
                this.inProgress--, this.runNextAttempt()
              };
              RR().then((RR => {
                JR(), GR(RR)
              }), (RR => {
                JR(), yR(RR)
              }))
            },
            isRedelivery: JR
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const RR = this.options.getNow(),
            JR = this.attemptQueue.findIndex((JR => {
              let {
                isRedelivery: GR
              } = JR;
              return this.unloading || !GR || RR >= this.nextSendAt
            }));
          if (JR < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - RR)));
          const [GR] = this.attemptQueue.splice(JR, 1);
          GR.isRedelivery && !this.unloading && (this.nextSendAt = RR + 1), GR.run()
        }
      }
      waitForTurn(RR, JR) {
        const GR = Math.min(JR * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((JR => {
          this.waiting.push({
            sequence: RR,
            readyAt: this.options.getNow() + GR,
            resolve: JR
          }), this.waiting.sort(((RR, JR) => RR.readyAt === JR.readyAt ? RR.sequence - JR.sequence : RR.readyAt - JR.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const RR = this.waiting[0],
          JR = RR.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const JR = this.waiting.indexOf(RR);
          JR >= 0 && this.waiting.splice(JR, 1), RR.resolve(!1), this.scheduleNext()
        }), Math.max(0, JR - this.options.getNow()))
      }
    };

    function wu(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if ({}.hasOwnProperty.call(RR, yR)) {
            if (JR.includes(yR)) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.includes(GR) || {}.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function ru(RR) {
      const {
        size: JR,
        concurrency: GR
      } = RR, yR = [];
      let tR = 0;
      const uR = () => {
        if (tR < GR && yR.length) {
          const {
            producer: RR,
            resolve: JR,
            reject: GR
          } = yR.shift();
          tR++, RR().then((RR => {
            tR--, uR(), JR(RR)
          }), (RR => {
            tR--, uR(), GR(RR)
          }))
        }
      };
      return {
        add: RR => {
          if (yR.length + tR >= JR) throw new Error("Task buffer full");
          return new Promise(((JR, GR) => {
            yR.push({
              producer: RR,
              resolve: JR,
              reject: GR
            }), uR()
          }))
        }
      }
    }
    const eu = ["headers"],
      au = ["keepalive", "signal"],
      Lu = new Set([408, 425, 429, 500, 502, 503, 504]),
      nu = new Set([429, 503]);
    let Uu = 0,
      Wu = 0;
    var Au = class extends Error {};
    var Cu = class extends st {
      constructor(RR) {
        var JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR;
        super(), this.options = RR, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = GG, this.pendingCustomSends = 0, this.getNow = null !== (JR = RR.getNow) && void 0 !== JR ? JR : Date.now, this.requestTimeoutMs = null !== (GR = RR.requestTimeoutMs) && void 0 !== GR ? GR : 1e4, this.compressionEnabled = null !== (yR = RR.requestCompression) && void 0 !== yR && yR && "undefined" !== typeof CompressionStream, RR.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Ku({
          bufferSize: null !== (tR = RR.bufferSize) && void 0 !== tR ? tR : 30,
          concurrency: null !== (uR = RR.concurrency) && void 0 !== uR ? uR : 5,
          retry: {
            maxAttempts: null !== (ZR = null === (qR = RR.retry) || void 0 === qR ? void 0 : qR.maxAttempts) && void 0 !== ZR ? ZR : 3,
            initialBackoffMs: null !== (iR = null !== (fR = null === (VR = RR.retry) || void 0 === VR ? void 0 : VR.initialBackoffMs) && void 0 !== fR ? fR : RR.defaultRateLimitBackoffMs) && void 0 !== iR ? iR : 1e3,
            maxBackoffMs: null !== (KR = null === (wR = RR.retry) || void 0 === wR ? void 0 : wR.maxBackoffMs) && void 0 !== KR ? KR : 3e4,
            backoffMultiplier: null !== (rR = null === (eR = RR.retry) || void 0 === eR ? void 0 : eR.backoffMultiplier) && void 0 !== rR ? rR : 2
          },
          getNow: this.getNow,
          getRandom: null !== (aR = RR.getRandom) && void 0 !== aR ? aR : Math.random,
          onRetry: (RR, JR) => {
            this.logDebug(`Retrying failed request after ${RR}ms. Attempt ${JR}.`)
          }
        }), this.customPromiseBuffer = ru({
          size: null !== (LR = RR.bufferSize) && void 0 !== LR ? LR : 30,
          concurrency: null !== (nR = RR.concurrency) && void 0 !== nR ? nR : 5
        }), this.defaultPromiseBuffer = {
          add: RR => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(RR);
            const JR = this.deliveryQueue.reserve();
            if (!JR) throw new Error("Task buffer full");
            return this.runBufferedTask(JR, RR)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (RR => {
          RR.persisted && this.deliveryQueue.resume()
        })))
      }
      send(RR) {
        var JR = this;
        return dy((function*() {
          const GR = JR.promiseBuffer;
          if (GR !== JR.defaultPromiseBuffer || GR.add !== JR.defaultBufferAdd) {
            JR.pendingCustomSends++;
            try {
              yield GR.add((() => JR.deliver(RR)))
            } catch (yR) {
              JR.logError("Permanent delivery failure", {
                error: yR,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              JR.pendingCustomSends--
            }
          } else yield JR.deliver(RR)
        }))()
      }
      runBufferedTask(RR, JR) {
        return dy((function*() {
          let GR;
          try {
            return yield RR.deliver(dy((function*() {
              return GR = yield JR(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), GR
          } finally {
            RR.release()
          }
        }))()
      }
      deliver(RR) {
        var JR = this;
        return dy((function*() {
          const GR = JR.deliveryQueue.reserve();
          if (GR) try {
            const yR = yield JR.prepareRequest(RR), tR = yield GR.deliver(((RR, GR) => JR.performAttempt(yR, RR, GR)));
            "terminal" === tR.kind && JR.logError("retries-exhausted" === tR.reason ? "Delivery retries exhausted" : "Permanent delivery failure", VJ(VJ({}, tR.failure), {}, {
              reason: tR.reason,
              attempts: tR.attempts,
              elapsedTimeMs: tR.elapsedTimeMs
            }))
          } catch (yR) {
            JR.logError("Permanent delivery failure", {
              error: yR,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            GR.release()
          } else JR.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var RR;
        return [this.options.url].concat(null !== (RR = this.config.ignoreUrls) && void 0 !== RR ? RR : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(RR) {
        var JR = this;
        return dy((function*() {
          var GR, yR;
          const tR = Gu(RR),
            uR = null === (GR = tR.meta.session) || void 0 === GR ? void 0 : GR.id,
            ZR = JSON.stringify(tR),
            qR = null !== (yR = JR.options.requestOptions) && void 0 !== yR ? yR : {},
            {
              headers: iR = {}
            } = qR,
            fR = wu(qR, eu),
            {
              keepalive: VR,
              signal: KR
            } = fR,
            wR = wu(fR, au),
            rR = {};
          for (const [RR, JR] of Object.entries(iR)) rR[RR] = "function" === typeof JR ? yield JR(): JR;
          let eR = ZR,
            aR = function(RR) {
              return "undefined" === typeof TextEncoder ? RR.length : (new TextEncoder).encode(RR).byteLength
            }(ZR);
          const LR = {};
          return JR.compressionEnabled && (eR = yield JR.compress(ZR), aR = eR.size, LR["Content-Encoding"] = "gzip"), {
            bodySize: aR,
            sessionId: uR,
            requestInit: VJ({
              method: "POST",
              headers: VJ(VJ(VJ(VJ(VJ({
                "Content-Type": "application/json"
              }, LR), rR), JR.options.apiKey ? {
                "x-api-key": JR.options.apiKey
              } : {}), uR ? {
                "x-faro-session-id": uR
              } : {}), {}, {
                "Idempotency-Key": nJ(20)
              }),
              body: eR
            }, wR)
          }
        }))()
      }
      performAttempt(RR, JR, GR) {
        var yR = this;
        return dy((function*() {
          var tR;
          const uR = null === (tR = yR.options.requestOptions) || void 0 === tR ? void 0 : tR.signal;
          if (null === uR || void 0 === uR ? void 0 : uR.aborted) return {
            kind: "terminal",
            failure: {
              error: uR.reason
            },
            attemptsMade: 0
          };
          let ZR = 0;
          try {
            var qR;
            const tR = yield yR.fetchWithKeepaliveFallback(RR.requestInit, RR.bodySize, !!GR || (null === (qR = yR.options.requestOptions) || void 0 === qR ? void 0 : qR.keepalive), JR, (() => ZR++));
            if (yR.handleResponse(tR, RR.sessionId), tR.status >= 200 && tR.status < 300) return {
              kind: "success",
              attemptsMade: ZR
            };
            const uR = {
              status: tR.status
            };
            return !Lu.has(tR.status) || GR ? {
              kind: "terminal",
              failure: uR,
              attemptsMade: ZR
            } : {
              kind: "retry",
              failure: uR,
              attemptsMade: ZR,
              retryAfterMs: nu.has(tR.status) ? yR.getRetryAfterDelayMs(tR) : void 0
            }
          } catch (iR) {
            const RR = {
              error: iR
            };
            return (null === uR || void 0 === uR ? void 0 : uR.aborted) || !yR.isFetchNetworkError(iR) || GR ? {
              kind: "terminal",
              failure: RR,
              attemptsMade: ZR
            } : {
              kind: "retry",
              failure: RR,
              attemptsMade: ZR
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(RR, JR, GR, yR, tR) {
        var uR = this;
        return dy((function*() {
          const ZR = uR.getNow(),
            qR = uR.reserveKeepalive(JR, GR);
          try {
            return yield uR.fetchWithTimeout(VJ(VJ({}, RR), {}, {
              keepalive: qR.keepalive
            }), uR.requestTimeoutMs, tR)
          } catch (fR) {
            var iR;
            if (qR.keepalive && yR > 1 && uR.isFetchNetworkError(fR) && !(fR instanceof Au) && !(null === (iR = uR.options.requestOptions) || void 0 === iR || null === (iR = iR.signal) || void 0 === iR ? void 0 : iR.aborted)) {
              uR.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const JR = uR.requestTimeoutMs - (uR.getNow() - ZR);
              return uR.fetchWithTimeout(VJ(VJ({}, RR), {}, {
                keepalive: !1
              }), JR, tR)
            }
            throw fR
          } finally {
            qR.release()
          }
        }))()
      }
      fetchWithTimeout(RR, JR, GR) {
        var yR = this;
        return dy((function*() {
          var tR;
          const uR = null === (tR = yR.options.requestOptions) || void 0 === tR ? void 0 : tR.signal;
          if (yR.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return GR(), fetch(yR.options.url, VJ(VJ({}, RR), {}, {
            signal: uR
          }));
          if (JR <= 0) throw new Au("Request timed out");
          const ZR = new AbortController,
            qR = () => ZR.abort(null === uR || void 0 === uR ? void 0 : uR.reason);
          null === uR || void 0 === uR || uR.addEventListener("abort", qR, {
            once: !0
          });
          let iR = !1;
          const fR = setTimeout((() => {
            iR = !0, ZR.abort()
          }), JR);
          try {
            return GR(), yield fetch(yR.options.url, VJ(VJ({}, RR), {}, {
              signal: ZR.signal
            }))
          } catch (VR) {
            if (iR && !(null === uR || void 0 === uR ? void 0 : uR.aborted)) throw new Au("Request timed out");
            throw VR
          } finally {
            clearTimeout(fR), null === uR || void 0 === uR || uR.removeEventListener("abort", qR)
          }
        }))()
      }
      getRetryAfterDelayMs(RR) {
        const JR = RR.headers.get("Retry-After");
        if (!JR) return;
        if (/^\d+$/.test(JR)) {
          const RR = 1e3 * Number(JR);
          return Number.isFinite(RR) ? RR : Number.POSITIVE_INFINITY
        }
        const GR = this.getNow(),
          yR = function(RR, JR) {
            const GR = tu.exec(RR);
            if (GR) {
              const [, RR, JR, yR, tR, uR, ZR, qR] = GR;
              return Vu({
                weekday: qu.indexOf(RR),
                day: Number(JR),
                month: fu.indexOf(yR),
                year: Number(tR),
                hour: Number(uR),
                minute: Number(ZR),
                second: Number(qR)
              })
            }
            const yR = uu.exec(RR);
            if (yR) {
              const [, RR, GR, ZR, qR, iR, fR, VR] = yR, KR = new Date(JR);
              if (Number.isNaN(KR.getTime())) return;
              const wR = KR.getUTCFullYear();
              let rR = 100 * Math.floor(wR / 100) + Number(qR);
              rR < wR && (rR += 100);
              const eR = fu.indexOf(ZR),
                aR = {
                  month: eR,
                  day: Number(GR),
                  hour: Number(iR),
                  minute: Number(fR),
                  second: Number(VR),
                  millisecond: 0
                },
                LR = {
                  month: KR.getUTCMonth(),
                  day: KR.getUTCDate(),
                  hour: KR.getUTCHours(),
                  minute: KR.getUTCMinutes(),
                  second: KR.getUTCSeconds(),
                  millisecond: KR.getUTCMilliseconds()
                };
              return (rR > wR + 50 || rR === wR + 50 && (uR = LR, ((tR = aR).month - uR.month || tR.day - uR.day || tR.hour - uR.hour || tR.minute - uR.minute || tR.second - uR.second || tR.millisecond - uR.millisecond) > 0)) && (rR -= 100), Vu({
                weekday: iu.indexOf(RR),
                day: Number(GR),
                month: eR,
                year: rR,
                hour: Number(iR),
                minute: Number(fR),
                second: Number(VR)
              })
            }
            var tR, uR;
            const ZR = Zu.exec(RR);
            if (!ZR) return;
            const [, qR, iR, fR, VR, KR, wR, rR, eR] = ZR;
            return Vu({
              weekday: qu.indexOf(qR),
              day: Number(null !== fR && void 0 !== fR ? fR : VR),
              month: fu.indexOf(iR),
              year: Number(eR),
              hour: Number(KR),
              minute: Number(wR),
              second: Number(rR)
            })
          }(JR, GR);
        return null == yR ? void 0 : Math.max(0, yR - GR)
      }
      reserveKeepalive(RR, JR) {
        if (!1 === JR || RR > 6e4 || Uu + RR > 6e4 || Wu >= 9) return {
          keepalive: !1,
          release: jJ
        };
        Uu += RR, Wu++;
        let GR = !1;
        return {
          keepalive: !0,
          release: () => {
            GR || (GR = !0, Uu -= RR, Wu--)
          }
        }
      }
      handleResponse(RR, JR) {
        202 === RR.status && "invalid" === RR.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), JR), RR.text().catch(jJ)
      }
      isFetchNetworkError(RR) {
        return RR instanceof TypeError || RR instanceof Au || RR instanceof DOMException && "AbortError" === RR.name
      }
      compress(RR) {
        return dy((function*() {
          const JR = [],
            GR = new ReadableStream({
              start(JR) {
                JR.enqueue((new TextEncoder).encode(RR)), JR.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: RR,
              value: yR
            } = yield GR.read();
            if (RR) return new Blob(JR);
            JR.push(yR)
          }
        }))()
      }
      extendFaroSession(RR, JR, GR) {
        var yR, tR;
        const uR = RR.sessionTracking;
        if (!(null === uR || void 0 === uR ? void 0 : uR.enabled)) return void JR("Session expired.");
        const {
          fetchUserSession: ZR,
          storeUserSession: qR
        } = SJ(uR), iR = null === (yR = this.metas.value.session) || void 0 === yR ? void 0 : yR.id, fR = null === (tR = ZR()) || void 0 === tR ? void 0 : tR.sessionId;
        GR && GR === iR && GR === fR ? (vJ({
          fetchUserSession: ZR,
          storeUserSession: qR
        })({
          forceSessionExtend: !0
        }), JR("Session expired; created new session.")) : JR("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Xu = () => {
      const RR = window.k6;
      return {
        k6: VJ({
          isK6Browser: !0
        }, (null === RR || void 0 === RR ? void 0 : RR.testRunId) && {
          testRunId: null === RR || void 0 === RR ? void 0 : RR.testRunId
        })
      }
    };
    let Mu, Bu;

    function lu() {
      let {
        generatePageId: RR,
        initialPageMeta: JR
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const GR = location.href;
        return bR(RR) && Mu !== GR && (Mu = GR, Bu = RR(location)), {
          page: VJ(VJ({
            url: GR
          }, Bu ? {
            id: Bu
          } : {}), JR)
        }
      }
    }

    function pu() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hJ,
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GR = EJ;
      return JR > 0 && (GR.error = JR >= 1 ? function() {
        for (var JR = arguments.length, yR = new Array(JR), tR = 0; tR < JR; tR++) yR[tR] = arguments[tR];
        RR.error(`${GR.prefix}\n`, ...yR)
      } : jJ, GR.warn = JR >= 2 ? function() {
        for (var JR = arguments.length, yR = new Array(JR), tR = 0; tR < JR; tR++) yR[tR] = arguments[tR];
        RR.warn(`${GR.prefix}\n`, ...yR)
      } : jJ, GR.info = JR >= 3 ? function() {
        for (var JR = arguments.length, yR = new Array(JR), tR = 0; tR < JR; tR++) yR[tR] = arguments[tR];
        RR.info(`${GR.prefix}\n`, ...yR)
      } : jJ, GR.debug = JR >= 4 ? function() {
        for (var JR = arguments.length, yR = new Array(JR), tR = 0; tR < JR; tR++) yR[tR] = arguments[tR];
        RR.debug(`${GR.prefix}\n`, ...yR)
      } : jJ), GR
    }
    const gu = "faro",
      bu = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      vu = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Ou(RR) {
      var JR, GR, tR, uR, ZR, qR;
      const iR = [],
        VR = pu(RR.unpatchedConsole, RR.internalLoggerLevel);
      RR.transports ? ((RR.url || RR.apiKey) && VR.error('if "transports" is defined, "url" and "apiKey" should not be defined'), iR.push(...RR.transports)) : RR.url ? iR.push(new Cu({
        url: RR.url,
        apiKey: RR.apiKey,
        requestCompression: RR.requestCompression
      })) : VR.error('either "url" or "transports" must be defined');
      const {
        dedupe: KR = !0,
        eventDomain: wR = yR,
        globalObjectKey: rR = gu,
        instrumentations: eR = St(),
        internalLoggerLevel: aR = YJ,
        isolate: LR = !1,
        logArgsSerializer: nR = OG,
        metas: UR = Nu(RR),
        paused: WR = !1,
        preventGlobalExposure: AR = !1,
        unpatchedConsole: CR = hJ,
        url: XR,
        experimental: MR
      } = RR, BR = wu(RR, vu), lR = null !== (JR = null === MR || void 0 === MR ? void 0 : MR.trackNavigation) && void 0 !== JR && JR, pR = {
        dataAttributeName: Ty(null !== (GR = null === (tR = RR.userActionsInstrumentation) || void 0 === tR ? void 0 : tR.dataAttributeName) && void 0 !== GR ? GR : ky),
        excludeItem: null === (uR = RR.userActionsInstrumentation) || void 0 === uR ? void 0 : uR.excludeItem,
        initialActivityTimeout: sy(null === (ZR = RR.userActionsInstrumentation) || void 0 === ZR ? void 0 : ZR.initialActivityTimeout, 100, (RR => VR.warn(RR)))
      };
      return VJ(VJ({}, BR), {}, {
        batching: VJ(VJ({}, bu), RR.batching),
        dedupe: KR,
        globalObjectKey: rR,
        instrumentations: xu(eR, RR),
        internalLoggerLevel: aR,
        isolate: LR,
        logArgsSerializer: nR,
        metas: UR,
        parseStacktrace: aG,
        paused: WR,
        preventGlobalExposure: AR,
        transports: iR,
        unpatchedConsole: CR,
        eventDomain: wR,
        ignoreUrls: [...null !== (qR = RR.ignoreUrls) && void 0 !== qR ? qR : [], ...XR ? [XR] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: VJ(VJ(VJ({}, fR), RR.sessionTracking), Du({
          trackGeolocation: RR.trackGeolocation,
          sessionTracking: RR.sessionTracking
        })),
        userActionsInstrumentation: pR,
        experimental: {
          trackNavigation: lR
        }
      })
    }

    function xu(RR, JR) {
      let {
        experimental: GR
      } = JR;
      var yR;
      const tR = null !== (yR = null === GR || void 0 === GR ? void 0 : GR.trackNavigation) && void 0 !== yR && yR;
      return RR.filter((RR => !("@grafana/faro-web-sdk:instrumentation-navigation" === RR.name && !tR)))
    }

    function Nu(RR) {
      var JR, GR, yR;
      const {
        page: tR,
        generatePageId: uR
      } = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.pageTracking) && void 0 !== JR ? JR : {}, ZR = [kt, Qt, lu({
        generatePageId: uR,
        initialPageMeta: tR
      }), ...null !== (GR = RR.metas) && void 0 !== GR ? GR : [], Tt];
      return gR(null === (yR = window) || void 0 === yR ? void 0 : yR.k6) ? [...ZR, Xu] : ZR
    }

    function Du(RR) {
      let {
        trackGeolocation: JR,
        sessionTracking: GR
      } = RR;
      var yR;
      const tR = {};
      return lR(JR) && (tR.geoLocationTrackingEnabled = JR), YR(tR) ? {} : {
        session: VJ(VJ({}, null !== (yR = null === GR || void 0 === GR ? void 0 : GR.session) && void 0 !== yR ? yR : {}), {}, {
          overrides: tR
        })
      }
    }
    const Hu = new WeakSet;

    function ou(RR) {
      return Hu.add(RR), RR
    }

    function cu(RR, JR) {
      if (RR.capture) return ou(RR.capture(JR));
      const GR = ou(RR.value);
      return null === JR || void 0 === JR || JR(), GR
    }

    function Pu(RR) {
      const JR = `__faroBundleId_${RR}`,
        GR = null === VR || void 0 === VR ? void 0 : VR[JR];
      if ("string" === typeof GR && "" !== GR) return GR;
      const yR = "undefined" !== typeof window ? window[JR] : void 0;
      return "string" === typeof yR && "" !== yR ? yR : void 0
    }

    function Iu(RR) {
      var JR, GR;
      const yR = RR.config.app.name,
        tR = yR ? function(RR) {
          return null === VR || void 0 === VR ? void 0 : VR[`__faroGitHash_${RR}`]
        }(yR) : void 0,
        uR = {
          sdk: {
            version: GG,
            name: "faro"
          },
          app: sJ({
            bundleId: yR && Pu(yR)
          }, void 0 !== tR ? {
            gitHash: tR
          } : {})
        },
        ZR = null === (JR = RR.config.sessionTracking) || void 0 === JR ? void 0 : JR.session;
      ZR && RR.api.setSession(ZR), RR.config.app && (uR.app = sJ(sJ({}, RR.config.app), uR.app)), RR.config.user && (uR.user = RR.config.user), RR.config.view && (uR.view = RR.config.view), RR.metas.add(uR, ...null !== (GR = RR.config.metas) && void 0 !== GR ? GR : [])
    }
    var mu = class {
      constructor(RR, JR) {
        var GR, yR;
        this.signalBuffer = [], this.itemLimit = null !== (GR = null === JR || void 0 === JR ? void 0 : JR.itemLimit) && void 0 !== GR ? GR : 50, this.sendTimeout = null !== (yR = null === JR || void 0 === JR ? void 0 : JR.sendTimeout) && void 0 !== yR ? yR : 250, this.paused = (null === JR || void 0 === JR ? void 0 : JR.paused) || !1, this.sendFn = RR, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(RR) {
        this.paused || (this.signalBuffer.push(RR), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(RR) {
        const JR = new Map;
        return RR.forEach((RR => {
          const GR = JSON.stringify(RR.meta);
          let yR = JR.get(GR);
          yR = void 0 === yR ? [RR] : [...yR, RR], JR.set(GR, yR)
        })), Array.from(JR.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const RR = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(RR).forEach(this.sendFn)
        } catch (JR) {
          throw this.signalBuffer = [...RR, ...this.signalBuffer], this.trimBufferToLimit(), JR
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function zu(RR, JR, GR, yR) {
      var tR;
      JR.debug("Initializing transports");
      const uR = [];
      let ZR = [];
      const qR = RR => {
        let JR = RR;
        for (const yR of ZR) {
          const RR = JR.map(yR).filter(Boolean);
          if (0 === RR.length) return [];
          JR = Su(RR, GR)
        }
        return JR
      };
      let iR;
      (null === (tR = GR.batching) || void 0 === tR ? void 0 : tR.enabled) && (iR = new mu((RR => {
        const GR = qR(RR);
        if (0 !== GR.length)
          for (const yR of uR) JR.debug(`Transporting item using ${yR.name}\n`, GR), yR.isBatched() && yR.send(GR)
      }), {
        sendTimeout: GR.batching.sendTimeout,
        itemLimit: GR.batching.itemLimit,
        paused: GR.paused
      }));
      return {
        add: function() {
          JR.debug("Adding transports");
          for (var tR = arguments.length, ZR = new Array(tR), qR = 0; qR < tR; qR++) ZR[qR] = arguments[qR];
          ZR.forEach((tR => {
            JR.debug(`Adding "${tR.name}" transport`), uR.some((RR => RR === tR)) ? JR.warn(`Transport ${tR.name} is already added`) : (tR.unpatchedConsole = RR, tR.internalLogger = JR, tR.config = GR, tR.metas = yR, uR.push(tR))
          }))
        },
        addBeforeSendHooks: function() {
          JR.debug("Adding beforeSendHooks\n", ZR);
          for (var RR = arguments.length, GR = new Array(RR), yR = 0; yR < RR; yR++) GR[yR] = arguments[yR];
          GR.forEach((RR => {
            RR && ZR.push(RR)
          }))
        },
        getBeforeSendHooks: () => [...ZR],
        execute: RR => {
          var tR;
          if (!GR.paused && mJ(yR).shouldCapture()) {
            if (KR = RR.meta, !Hu.has(KR)) {
              var ZR, fR, VR;
              const JR = null === (ZR = yR.value.session) || void 0 === ZR ? void 0 : ZR.id,
                tR = cu(yR);
              if (GR.paused) return;
              const uR = sJ({}, RR.meta);
              (null === (fR = uR.session) || void 0 === fR ? void 0 : fR.id) === JR && (null === (VR = tR.session) || void 0 === VR ? void 0 : VR.id) !== JR && (void 0 === tR.session ? delete uR.session : uR.session = tR.session), RR = sJ(sJ({}, RR), {}, {
                meta: ou(uR)
              })
            }
            var KR;
            (null === (tR = GR.batching) || void 0 === tR ? void 0 : tR.enabled) && (null === iR || void 0 === iR || iR.addItem(RR)), (RR => {
              var yR;
              if ((null === (yR = GR.batching) || void 0 === yR ? void 0 : yR.enabled) && uR.every((RR => RR.isBatched()))) return;
              const [tR] = qR([RR]);
              if (void 0 !== tR)
                for (const qR of uR) {
                  var ZR;
                  JR.debug(`Transporting item using ${qR.name}\n`, tR), qR.isBatched() ? (null === (ZR = GR.batching) || void 0 === ZR ? void 0 : ZR.enabled) || qR.send([tR]) : qR.send(tR)
                }
            })(RR)
          }
        },
        isPaused: () => GR.paused,
        pause: () => {
          JR.debug("Pausing transports"), null === iR || void 0 === iR || iR.pause(), GR.paused = !0
        },
        remove: function() {
          JR.debug("Removing transports");
          for (var RR = arguments.length, GR = new Array(RR), yR = 0; yR < RR; yR++) GR[yR] = arguments[yR];
          GR.forEach((RR => {
            JR.debug(`Removing "${RR.name}" transport`);
            const GR = uR.indexOf(RR); - 1 !== GR ? uR.splice(GR, 1) : JR.warn(`Transport "${RR.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var RR = arguments.length, GR = new Array(RR), yR = 0; yR < RR; yR++) GR[yR] = arguments[yR];
          JR.debug("Removing beforeSendHooks"), ZR = ZR.filter((RR => !GR.includes(RR)))
        },
        get transports() {
          return [...uR]
        },
        unpause: () => {
          JR.debug("Unpausing transports"), null === iR || void 0 === iR || iR.start(), GR.paused = !1
        }
      }
    }

    function Su(RR, JR) {
      if (JR.preserveOriginalError)
        for (const GR of RR) "exception" === GR.type && delete GR.payload.originalError;
      return RR
    }
    let ju = hJ;

    function du(RR) {
      var JR;
      return ju = null !== (JR = RR.unpatchedConsole) && void 0 !== JR ? JR : ju, ju
    }
    let Eu, Yu = EJ;

    function ku(RR, JR) {
      return Yu = pu(RR, JR.internalLoggerLevel), Yu
    }

    function Qu(RR) {
      let {
        internalLogger: JR,
        config: GR,
        metas: yR,
        transports: tR,
        tracesApi: uR,
        userActionsApi: ZR
      } = RR;
      var qR;
      JR.debug("Initializing exceptions API");
      let iR = null;
      Eu = null !== (qR = GR.parseStacktrace) && void 0 !== qR ? qR : Eu;
      const fR = RR => {
          JR.debug("Changing stacktrace parser"), Eu = null !== RR && void 0 !== RR ? RR : Eu
        },
        {
          ignoreErrors: VR = [],
          preserveOriginalError: KR
        } = GR;
      return fR(GR.parseStacktrace), {
        changeStacktraceParser: fR,
        getStacktraceParser: () => Eu,
        pushError: function(RR) {
          let {
            skipDedupe: qR,
            stackFrames: fR,
            type: wR,
            context: rR,
            spanContext: eR,
            timestampOverwriteMs: aR,
            originalError: LR,
            fingerprint: nR,
            fatal: UR
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(RR, JR) {
              const {
                message: GR,
                name: yR,
                stack: tR
              } = JR;
              return uR = RR, ZR = GR + " " + yR + " " + tR, uR.some((RR => XR(RR) ? ZR.includes(RR) : !!ZR.match(RR)));
              var uR, ZR
            }(VR, null !== LR && void 0 !== LR ? LR : RR)) try {
            var WR, AR;
            if (!mJ(yR).shouldCapture()) return;
            const VR = oJ(sJ(sJ({}, function(RR) {
                let JR = RR.cause;
                cR(JR) ? JR = RR.cause.toString() : null !== JR && (gR(RR.cause) || vR(RR.cause)) ? JR = HJ(RR.cause) : null != JR && (JR = RR.cause.toString());
                return null == JR ? {} : {
                  cause: JR
                }
              }(null !== LR && void 0 !== LR ? LR : RR)), null !== rR && void 0 !== rR ? rR : {})),
              XR = sJ(sJ(sJ(sJ({
                type: wR || RR.name || "Error",
                value: RR.message,
                timestamp: aR ? aJ(aR) : eJ(),
                trace: eR ? {
                  trace_id: eR.traceId,
                  span_id: eR.spanId
                } : uR.getTraceContext()
              }, YR(VR) ? {} : {
                context: VR
              }), KR ? {
                originalError: LR
              } : {}), nR ? {
                fingerprint: nR
              } : {}), void 0 !== UR ? {
                fatal: UR
              } : {});
            fR = null !== (WR = fR) && void 0 !== WR ? WR : RR.stack ? null === Eu || void 0 === Eu ? void 0 : Eu(RR).frames : void 0, (null === fR || void 0 === fR ? void 0 : fR.length) && (XR.stacktrace = {
              frames: fR
            });
            const MR = {
              type: XR.type,
              value: XR.value,
              stacktrace: XR.stacktrace,
              context: XR.context,
              fingerprint: XR.fingerprint,
              fatal: null !== (AR = XR.fatal) && void 0 !== AR && AR
            };
            if (!qR && GR.dedupe && !CR(iR) && UJ(MR, iR)) return void JR.debug("Skipping error push because it is the same as the last one\n", XR);
            const BR = iR,
              lR = cu(yR);
            if (iR !== BR && !qR && GR.dedupe && UJ(MR, iR)) return;
            iR = MR;
            const pR = {
              meta: lR,
              payload: XR,
              type: "exception"
            };
            JR.debug("Pushing exception\n", pR), Mt(ZR.getActiveUserAction(), pR) || tR.execute(pR)
          } catch (MR) {
            JR.error("Error pushing event", MR)
          }
        }
      }
    }

    function Fu(RR, JR, GR, yR, tR) {
      JR.debug("Initializing API");
      let uR = null;
      const ZR = function(RR) {
          let {
            transports: JR,
            internalLogger: GR,
            config: yR,
            pushEvent: tR
          } = RR;
          var uR;
          const ZR = null === (uR = yR.userActionsInstrumentation) || void 0 === uR ? void 0 : uR.excludeItem;
          let qR;
          const iR = () => qR;
          return {
            startUserAction: (RR, yR, uR) => {
              if (void 0 === iR()) {
                const GR = new Ct({
                  name: RR,
                  transports: JR,
                  attributes: yR,
                  trigger: (null === uR || void 0 === uR ? void 0 : uR.triggerName) || "faroApiCall",
                  importance: (null === uR || void 0 === uR ? void 0 : uR.importance) || Wt.Normal,
                  trackUserActionsExcludeItem: ZR,
                  pushEvent: tR
                });
                return GR.filter((RR => [3, 2].includes(RR))).first().subscribe((() => {
                  qR = void 0
                })), Xt.notify({
                  type: Ut,
                  userAction: GR,
                  initialActivityTimeout: null === uR || void 0 === uR ? void 0 : uR.initialActivityTimeout
                }), qR = GR, qR
              }
              GR.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: iR
          }
        }({
          transports: tR,
          config: GR,
          internalLogger: JR,
          pushEvent: (RR, GR, yR, tR) => {
            uR ? uR(RR, GR, yR, tR) : JR.warn("pushEventImpl is not initialized. Event dropped:", {
              name: RR,
              attributes: GR,
              domain: yR,
              options: tR
            })
          }
        }),
        qR = function(RR, JR, GR, yR, tR) {
          let uR;
          return JR.debug("Initializing traces API"), {
            getOTEL: () => uR,
            getTraceContext: () => {
              const RR = null === uR || void 0 === uR ? void 0 : uR.trace.getSpanContext(uR.context.active());
              return RR ? {
                trace_id: RR.traceId,
                span_id: RR.spanId
              } : void 0
            },
            initOTEL: (RR, GR) => {
              JR.debug("Initializing OpenTelemetry"), uR = {
                trace: RR,
                context: GR
              }
            },
            isOTELInitialized: () => !!uR,
            pushTraces: RR => {
              try {
                if (!mJ(yR).shouldCapture()) return;
                const GR = {
                  type: "trace",
                  payload: RR,
                  meta: cu(yR)
                };
                JR.debug("Pushing trace\n", GR), tR.execute(GR)
              } catch (GR) {
                JR.error("Error pushing trace\n", GR)
              }
            }
          }
        }(0, JR, 0, yR, tR),
        iR = {
          unpatchedConsole: RR,
          internalLogger: JR,
          userActionsApi: ZR,
          config: GR,
          metas: yR,
          transports: tR,
          tracesApi: qR
        },
        fR = function(RR) {
          let {
            internalLogger: JR,
            config: GR,
            metas: yR,
            transports: tR,
            tracesApi: uR,
            userActionsApi: ZR
          } = RR, qR = null;
          return {
            pushEvent: function(RR, iR, fR) {
              let {
                skipDedupe: VR,
                spanContext: KR,
                timestampOverwriteMs: wR,
                customPayloadTransformer: rR = RR => RR
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!mJ(yR).shouldCapture()) return;
                const eR = oJ(iR),
                  aR = rR({
                    name: RR,
                    domain: null !== fR && void 0 !== fR ? fR : GR.eventDomain,
                    attributes: YR(eR) ? void 0 : eR,
                    timestamp: wR ? aJ(wR) : eJ(),
                    trace: KR ? {
                      trace_id: KR.traceId,
                      span_id: KR.spanId
                    } : uR.getTraceContext()
                  }),
                  LR = {
                    name: aR.name,
                    attributes: aR.attributes,
                    domain: aR.domain
                  };
                if (!VR && GR.dedupe && !CR(qR) && UJ(LR, qR)) return void JR.debug("Skipping event push because it is the same as the last one\n", aR);
                const nR = qR,
                  UR = cu(yR);
                if (qR !== nR && !VR && GR.dedupe && UJ(LR, qR)) return;
                qR = LR;
                const WR = {
                  meta: UR,
                  payload: aR,
                  type: "event"
                };
                JR.debug("Pushing event\n", WR), Mt(ZR.getActiveUserAction(), WR) || tR.execute(WR)
              } catch (eR) {
                JR.error("Error pushing event", eR)
              }
            }
          }
        }(iR);
      return uR = fR.pushEvent, sJ(sJ(sJ(sJ(sJ(sJ(sJ({}, qR), Qu(iR)), function(RR) {
        let JR, GR, yR, tR, {
          internalLogger: uR,
          metas: ZR
        } = RR;
        uR.debug("Initializing meta API");
        const qR = RR => {
            GR && ZR.remove(GR), GR = {
              user: RR
            }, ZR.add(GR)
          },
          iR = (RR, GR) => {
            var yR;
            const tR = null === GR || void 0 === GR ? void 0 : GR.overrides,
              uR = tR ? {
                overrides: sJ(sJ({}, null === JR || void 0 === JR || null === (yR = JR.session) || void 0 === yR ? void 0 : yR.overrides), tR)
              } : {};
            JR && ZR.remove(JR), JR = {
              session: sJ(sJ({}, YR(RR) ? void 0 : RR), uR)
            }, ZR.add(JR)
          },
          fR = (RR, JR) => {
            mJ(ZR).notifySessionUpdate({
              type: "replace",
              session: RR,
              overrides: null === JR || void 0 === JR ? void 0 : JR.overrides
            }), iR(RR, JR)
          },
          VR = () => ZR.value.session,
          KR = () => ZR.value.page;
        return {
          setUser: qR,
          resetUser: qR,
          setSession: fR,
          resetSession: fR,
          getSession: VR,
          setView: (RR, JR) => {
            var GR;
            if ((null === JR || void 0 === JR ? void 0 : JR.overrides) && (mJ(ZR).notifySessionUpdate({
                type: "overrides",
                overrides: JR.overrides
              }), iR(VR(), {
                overrides: JR.overrides
              })), (null === yR || void 0 === yR || null === (GR = yR.view) || void 0 === GR ? void 0 : GR.name) === (null === RR || void 0 === RR ? void 0 : RR.name)) return;
            const tR = yR;
            yR = {
              view: RR
            }, ZR.add(yR), tR && ZR.remove(tR)
          },
          getView: () => ZR.value.view,
          setPage: RR => {
            var JR;
            const GR = XR(RR) ? sJ(sJ({}, null !== (JR = null === tR || void 0 === tR ? void 0 : tR.page) && void 0 !== JR ? JR : KR()), {}, {
              id: RR
            }) : RR;
            tR && ZR.remove(tR), tR = {
              page: GR
            }, ZR.add(tR)
          },
          getPage: KR
        }
      }(iR)), function(RR) {
        let {
          internalLogger: JR,
          config: GR,
          metas: yR,
          transports: tR,
          tracesApi: uR,
          userActionsApi: ZR
        } = RR;
        var qR;
        JR.debug("Initializing logs API");
        let iR = null;
        const fR = null !== (qR = GR.logArgsSerializer) && void 0 !== qR ? qR : OG;
        return {
          pushLog: function(RR) {
            let {
              context: qR,
              level: VR,
              skipDedupe: KR,
              spanContext: wR,
              timestampOverwriteMs: rR
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!mJ(yR).shouldCapture()) return;
              const eR = oJ(qR),
                aR = {
                  message: fR(RR),
                  level: null !== VR && void 0 !== VR ? VR : "log",
                  context: YR(eR) ? void 0 : eR,
                  timestamp: rR ? aJ(rR) : eJ(),
                  trace: wR ? {
                    trace_id: wR.traceId,
                    span_id: wR.spanId
                  } : uR.getTraceContext()
                },
                LR = {
                  message: aR.message,
                  level: aR.level,
                  context: aR.context
                };
              if (!KR && GR.dedupe && !CR(iR) && UJ(LR, iR)) return void JR.debug("Skipping log push because it is the same as the last one\n", aR);
              const nR = iR,
                UR = cu(yR);
              if (iR !== nR && !KR && GR.dedupe && UJ(LR, iR)) return;
              iR = LR;
              const WR = {
                type: "log",
                payload: aR,
                meta: UR
              };
              JR.debug("Pushing log\n", WR), Mt(ZR.getActiveUserAction(), WR) || tR.execute(WR)
            } catch (eR) {
              JR.error("Error pushing log\n", eR)
            }
          }
        }
      }(iR)), function(RR) {
        let {
          internalLogger: JR,
          config: GR,
          metas: yR,
          transports: tR,
          tracesApi: uR,
          userActionsApi: ZR
        } = RR;
        JR.debug("Initializing measurements API");
        let qR = null;
        return {
          pushMeasurement: function(RR) {
            let {
              skipDedupe: iR,
              context: fR,
              spanContext: VR,
              timestampOverwriteMs: KR
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!mJ(yR).shouldCapture()) return;
              const wR = oJ(fR),
                rR = sJ(sJ({}, RR), {}, {
                  trace: VR ? {
                    trace_id: VR.traceId,
                    span_id: VR.spanId
                  } : uR.getTraceContext(),
                  timestamp: KR ? aJ(KR) : eJ(),
                  context: YR(wR) ? void 0 : wR
                }),
                eR = {
                  type: rR.type,
                  values: rR.values,
                  context: rR.context
                };
              if (!iR && GR.dedupe && !CR(qR) && UJ(eR, qR)) return void JR.debug("Skipping measurement push because it is the same as the last one\n", rR);
              const aR = qR,
                LR = cu(yR);
              if (qR !== aR && !iR && GR.dedupe && UJ(eR, qR)) return;
              qR = eR;
              const nR = {
                type: "measurement",
                payload: rR,
                meta: LR
              };
              JR.debug("Pushing measurement\n", nR), Mt(ZR.getActiveUserAction(), nR) || tR.execute(nR)
            } catch (wR) {
              JR.error("Error pushing measurement\n", wR)
            }
          }
        }
      }(iR)), fR), ZR)
    }

    function Tu(RR) {
      const JR = du(RR),
        GR = ku(JR, RR);
      if (eR() && !RR.isolate) return void GR.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      GR.debug("Initializing");
      const yR = function(RR, JR) {
          let GR, yR = [],
            tR = [],
            uR = [],
            ZR = 0,
            qR = 0;
          const iR = () => yR.reduce(((RR, JR) => Object.assign(RR, bR(JR) ? JR() : JR)), {}),
            fR = () => {
              if (tR.length) {
                const RR = iR();
                tR.forEach((JR => JR(RR)))
              }
            };
          return {
            add: function() {
              for (var RR = arguments.length, GR = new Array(RR), tR = 0; tR < RR; tR++) GR[tR] = arguments[tR];
              JR.debug("Adding metas\n", GR), yR.push(...GR), fR()
            },
            remove: function() {
              for (var RR = arguments.length, GR = new Array(RR), tR = 0; tR < RR; tR++) GR[tR] = arguments[tR];
              JR.debug("Removing metas\n", GR), yR = yR.filter((RR => !GR.includes(RR))), fR()
            },
            addListener: RR => {
              JR.debug("Adding metas listener\n", RR), tR.push(RR)
            },
            removeListener: RR => {
              JR.debug("Removing metas listener\n", RR), tR = tR.filter((JR => JR !== RR))
            },
            capture: RR => {
              var JR;
              const yR = void 0 !== GR,
                tR = null !== (JR = GR) && void 0 !== JR ? JR : uR;
              yR || (GR = tR, ZR = 0, qR = tR.length);
              try {
                for (; ZR < qR;) {
                  const RR = tR[ZR++];
                  null === RR || void 0 === RR || RR()
                }
                const JR = ou(iR());
                return null === RR || void 0 === RR || RR(), JR
              } finally {
                yR || (GR = void 0)
              }
            },
            addCaptureListener: RR => {
              uR.push(RR)
            },
            removeCaptureListener: RR => {
              uR = uR.filter((JR => JR !== RR))
            },
            get value() {
              return iR()
            }
          }
        }(0, GR),
        tR = zu(JR, GR, RR, yR),
        uR = Fu(JR, GR, RR, yR, tR),
        ZR = function(RR, JR, GR, yR, tR, uR) {
          JR.debug("Initializing instrumentations");
          const ZR = [];
          return {
            add: function() {
              JR.debug("Adding instrumentations");
              for (var qR = arguments.length, iR = new Array(qR), fR = 0; fR < qR; fR++) iR[fR] = arguments[fR];
              iR.forEach((qR => {
                JR.debug(`Adding "${qR.name}" instrumentation`), ZR.some((RR => RR.name === qR.name)) ? JR.warn(`Instrumentation ${qR.name} is already added`) : (qR.unpatchedConsole = RR, qR.internalLogger = JR, qR.config = GR, qR.metas = yR, qR.transports = tR, qR.api = uR, ZR.push(qR), qR.initialize())
              }))
            },
            get instrumentations() {
              return [...ZR]
            },
            remove: function() {
              JR.debug("Removing instrumentations");
              for (var RR = arguments.length, GR = new Array(RR), yR = 0; yR < RR; yR++) GR[yR] = arguments[yR];
              GR.forEach((RR => {
                var GR, yR;
                JR.debug(`Removing "${RR.name}" instrumentation`);
                const tR = ZR.reduce(((JR, GR, yR) => null === JR && GR.name === RR.name ? yR : null), null);
                null !== tR ? (null === (GR = (yR = ZR[tR]).destroy) || void 0 === GR || GR.call(yR), ZR.splice(tR, 1)) : JR.warn(`Instrumentation "${RR.name}" is not added`)
              }))
            }
          }
        }(JR, GR, RR, yR, tR, uR),
        qR = LR(JR, GR, RR, yR, tR, uR, ZR);
      return Iu(qR),
        function(RR) {
          RR.transports.add(...RR.config.transports), RR.transports.addBeforeSendHooks(RR.config.beforeSend)
        }(qR),
        function(RR) {
          RR.instrumentations.add(...RR.config.instrumentations)
        }(qR), qR
    }

    function su(RR) {
      const JR = Ou(RR);
      if (JR) return Tu(JR)
    }
  },
  7831: function(RR, JR, GR) {
    var yR;
    ! function(tR, uR) {
      var ZR = "function",
        qR = "undefined",
        iR = "object",
        fR = "string",
        VR = "major",
        KR = "model",
        wR = "name",
        rR = "type",
        eR = "vendor",
        aR = "version",
        LR = "architecture",
        nR = "console",
        UR = "mobile",
        WR = "tablet",
        AR = "smarttv",
        CR = "wearable",
        XR = "embedded",
        MR = "Amazon",
        BR = "Apple",
        lR = "ASUS",
        pR = "BlackBerry",
        gR = "Browser",
        bR = "Chrome",
        vR = "Firefox",
        OR = "Google",
        xR = "Honor",
        NR = "Huawei",
        DR = "LG",
        HR = "Microsoft",
        oR = "Motorola",
        cR = "Nvidia",
        PR = "OnePlus",
        IR = "Opera",
        mR = "OPPO",
        zR = "Samsung",
        SR = "Sharp",
        jR = "Sony",
        dR = "Xiaomi",
        ER = "Zebra",
        YR = "Facebook",
        kR = "Chromium OS",
        QR = "Mac OS",
        FR = " Browser",
        TR = function(RR) {
          for (var JR = {}, GR = 0; GR < RR.length; GR++) JR[RR[GR].toUpperCase()] = RR[GR];
          return JR
        },
        sR = function(RR, JR) {
          return typeof RR === fR && -1 !== hR(JR).indexOf(hR(RR))
        },
        hR = function(RR) {
          return RR.toLowerCase()
        },
        RJ = function(RR, JR) {
          if (typeof RR === fR) return RR = RR.replace(/^\s\s*/, ""), typeof JR === qR ? RR : RR.substring(0, 500)
        },
        JJ = function(RR, JR) {
          for (var GR, yR, tR, qR, fR, VR, KR = 0; KR < JR.length && !fR;) {
            var wR = JR[KR],
              rR = JR[KR + 1];
            for (GR = yR = 0; GR < wR.length && !fR && wR[GR];)
              if (fR = wR[GR++].exec(RR))
                for (tR = 0; tR < rR.length; tR++) VR = fR[++yR], typeof(qR = rR[tR]) === iR && qR.length > 0 ? 2 === qR.length ? typeof qR[1] == ZR ? this[qR[0]] = qR[1].call(this, VR) : this[qR[0]] = qR[1] : 3 === qR.length ? typeof qR[1] !== ZR || qR[1].exec && qR[1].test ? this[qR[0]] = VR ? VR.replace(qR[1], qR[2]) : uR : this[qR[0]] = VR ? qR[1].call(this, VR, qR[2]) : uR : 4 === qR.length && (this[qR[0]] = VR ? qR[3].call(this, VR.replace(qR[1], qR[2])) : uR) : this[qR] = VR || uR;
            KR += 2
          }
        },
        GJ = function(RR, JR) {
          for (var GR in JR)
            if (typeof JR[GR] === iR && JR[GR].length > 0) {
              for (var yR = 0; yR < JR[GR].length; yR++)
                if (sR(JR[GR][yR], RR)) return "?" === GR ? uR : GR
            } else if (sR(JR[GR], RR)) return "?" === GR ? uR : GR;
          return JR.hasOwnProperty("*") ? JR["*"] : RR
        },
        yJ = {
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
        tJ = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [aR, [wR, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [aR, [wR, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [wR, aR],
            [/opios[\/ ]+([\w\.]+)/i],
            [aR, [wR, IR + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [aR, [wR, IR + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [aR, [wR, IR]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [aR, [wR, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [aR, [wR, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [wR, aR],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [aR, [wR, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [aR, [wR, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [aR, [wR, "UC" + gR]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [aR, [wR, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [aR, [wR, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [aR, [wR, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [aR, [wR, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [aR, [wR, "Smart Lenovo " + gR]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [wR, /(.+)/, "$1 Secure " + gR], aR
            ],
            [/\bfocus\/([\w\.]+)/i],
            [aR, [wR, vR + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [aR, [wR, IR + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [aR, [wR, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [aR, [wR, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [aR, [wR, IR + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [aR, [wR, "MIUI" + FR]],
            [/fxios\/([\w\.-]+)/i],
            [aR, [wR, vR]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [aR, [wR, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [wR, /(.+)/, "$1Browser"], aR
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [wR, /(.+)/, "$1" + FR], aR
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [aR, [wR, zR + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [aR, [wR, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [wR, "Sogou Mobile"], aR
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [wR, aR],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [wR],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [aR, wR],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [wR, YR], aR
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [wR, aR],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [aR, [wR, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [aR, [wR, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [aR, [wR, bR + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [wR, bR + " WebView"], aR
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [aR, [wR, "Android " + gR]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [wR, aR],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [aR, [wR, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [aR, wR],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [wR, [aR, GJ, {
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
            [wR, aR],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [wR, "Netscape"], aR
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [wR, aR],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [aR, [wR, vR + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [wR, [aR, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [wR, [aR, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [LR, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [LR, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [LR, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [LR, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [LR, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [LR, /ower/, "", hR]
            ],
            [/ sun4\w[;\)]/i],
            [
              [LR, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [LR, hR]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [KR, [eR, zR],
              [rR, WR]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [KR, [eR, zR],
              [rR, UR]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [KR, [eR, BR],
              [rR, UR]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [KR, [eR, BR],
              [rR, WR]
            ],
            [/(macintosh);/i],
            [KR, [eR, BR]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [KR, [eR, SR],
              [rR, UR]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [KR, [eR, xR],
              [rR, WR]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [KR, [eR, xR],
              [rR, UR]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [KR, [eR, NR],
              [rR, WR]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [KR, [eR, NR],
              [rR, UR]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [KR, /_/g, " "],
              [eR, dR],
              [rR, WR]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [KR, /_/g, " "],
              [eR, dR],
              [rR, UR]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [KR, [eR, mR],
              [rR, UR]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [KR, [eR, GJ, {
                OnePlus: ["304", "403", "203"],
                "*": mR
              }],
              [rR, WR]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [KR, [eR, "Vivo"],
              [rR, UR]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [KR, [eR, "Realme"],
              [rR, UR]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [KR, [eR, oR],
              [rR, UR]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [KR, [eR, oR],
              [rR, WR]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [KR, [eR, DR],
              [rR, WR]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [KR, [eR, DR],
              [rR, UR]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [KR, [eR, "Lenovo"],
              [rR, WR]
            ],
            [/(nokia) (t[12][01])/i],
            [eR, KR, [rR, WR]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [KR, /_/g, " "],
              [rR, UR],
              [eR, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [KR, [eR, OR],
              [rR, WR]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [KR, [eR, OR],
              [rR, UR]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [KR, [eR, jR],
              [rR, UR]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [KR, "Xperia Tablet"],
              [eR, jR],
              [rR, WR]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [KR, [eR, PR],
              [rR, UR]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [KR, [eR, MR],
              [rR, WR]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [KR, /(.+)/g, "Fire Phone $1"],
              [eR, MR],
              [rR, UR]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [KR, eR, [rR, WR]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [KR, [eR, pR],
              [rR, UR]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [KR, [eR, lR],
              [rR, WR]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [KR, [eR, lR],
              [rR, UR]
            ],
            [/(nexus 9)/i],
            [KR, [eR, "HTC"],
              [rR, WR]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [eR, [KR, /_/g, " "],
              [rR, UR]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [KR, [eR, "TCL"],
              [rR, WR]
            ],
            [/(itel) ((\w+))/i],
            [
              [eR, hR], KR, [rR, GJ, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [KR, [eR, "Acer"],
              [rR, WR]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [KR, [eR, "Meizu"],
              [rR, UR]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [KR, [eR, "Ulefone"],
              [rR, UR]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [KR, [eR, "Energizer"],
              [rR, UR]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [KR, [eR, "Cat"],
              [rR, UR]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [KR, [eR, "Smartfren"],
              [rR, UR]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [KR, [eR, "Nothing"],
              [rR, UR]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [KR, [eR, "Archos"],
              [rR, WR]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [KR, [eR, "Archos"],
              [rR, UR]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [eR, KR, [rR, WR]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [eR, KR, [rR, UR]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [eR, KR, [rR, WR]],
            [/(surface duo)/i],
            [KR, [eR, HR],
              [rR, WR]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [KR, [eR, "Fairphone"],
              [rR, UR]
            ],
            [/(u304aa)/i],
            [KR, [eR, "AT&T"],
              [rR, UR]
            ],
            [/\bsie-(\w*)/i],
            [KR, [eR, "Siemens"],
              [rR, UR]
            ],
            [/\b(rct\w+) b/i],
            [KR, [eR, "RCA"],
              [rR, WR]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [KR, [eR, "Dell"],
              [rR, WR]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [KR, [eR, "Verizon"],
              [rR, WR]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [KR, [eR, "Barnes & Noble"],
              [rR, WR]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [KR, [eR, "NuVision"],
              [rR, WR]
            ],
            [/\b(k88) b/i],
            [KR, [eR, "ZTE"],
              [rR, WR]
            ],
            [/\b(nx\d{3}j) b/i],
            [KR, [eR, "ZTE"],
              [rR, UR]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [KR, [eR, "Swiss"],
              [rR, UR]
            ],
            [/\b(zur\d{3}) b/i],
            [KR, [eR, "Swiss"],
              [rR, WR]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [KR, [eR, "Zeki"],
              [rR, WR]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [eR, "Dragon Touch"], KR, [rR, WR]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [KR, [eR, "Insignia"],
              [rR, WR]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [KR, [eR, "NextBook"],
              [rR, WR]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [eR, "Voice"], KR, [rR, UR]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [eR, "LvTel"], KR, [rR, UR]
            ],
            [/\b(ph-1) /i],
            [KR, [eR, "Essential"],
              [rR, UR]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [KR, [eR, "Envizen"],
              [rR, WR]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [KR, [eR, "MachSpeed"],
              [rR, WR]
            ],
            [/\btu_(1491) b/i],
            [KR, [eR, "Rotor"],
              [rR, WR]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [KR, [eR, cR],
              [rR, WR]
            ],
            [/(sprint) (\w+)/i],
            [eR, KR, [rR, UR]],
            [/(kin\.[onetw]{3})/i],
            [
              [KR, /\./g, " "],
              [eR, HR],
              [rR, UR]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [KR, [eR, ER],
              [rR, WR]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [KR, [eR, ER],
              [rR, UR]
            ],
            [/smart-tv.+(samsung)/i],
            [eR, [rR, AR]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [KR, /^/, "SmartTV"],
              [eR, zR],
              [rR, AR]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [eR, DR],
              [rR, AR]
            ],
            [/(apple) ?tv/i],
            [eR, [KR, BR + " TV"],
              [rR, AR]
            ],
            [/crkey/i],
            [
              [KR, bR + "cast"],
              [eR, OR],
              [rR, AR]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [KR, [eR, MR],
              [rR, AR]
            ],
            [/(shield \w+ tv)/i],
            [KR, [eR, cR],
              [rR, AR]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [KR, [eR, SR],
              [rR, AR]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [KR, [eR, jR],
              [rR, AR]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [KR, [eR, dR],
              [rR, AR]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [eR, KR, [rR, AR]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [eR, RJ],
              [KR, RJ],
              [rR, AR]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [KR, [rR, AR]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [rR, AR]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [eR, KR, [rR, nR]],
            [/droid.+; (shield)( bui|\))/i],
            [KR, [eR, cR],
              [rR, nR]
            ],
            [/(playstation \w+)/i],
            [KR, [eR, jR],
              [rR, nR]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [KR, [eR, HR],
              [rR, nR]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [KR, [eR, zR],
              [rR, CR]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [eR, KR, [rR, CR]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [KR, [eR, mR],
              [rR, CR]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [KR, [eR, BR],
              [rR, CR]
            ],
            [/(opwwe\d{3})/i],
            [KR, [eR, PR],
              [rR, CR]
            ],
            [/(moto 360)/i],
            [KR, [eR, oR],
              [rR, CR]
            ],
            [/(smartwatch 3)/i],
            [KR, [eR, jR],
              [rR, CR]
            ],
            [/(g watch r)/i],
            [KR, [eR, DR],
              [rR, CR]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [KR, [eR, ER],
              [rR, CR]
            ],
            [/droid.+; (glass) \d/i],
            [KR, [eR, OR],
              [rR, CR]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [eR, KR, [rR, CR]],
            [/; (quest( \d| pro)?)/i],
            [KR, [eR, YR],
              [rR, CR]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [eR, [rR, XR]],
            [/(aeobc)\b/i],
            [KR, [eR, MR],
              [rR, XR]
            ],
            [/(homepod).+mac os/i],
            [KR, [eR, BR],
              [rR, XR]
            ],
            [/windows iot/i],
            [
              [rR, XR]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [KR, [rR, UR]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [KR, [rR, WR]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [rR, WR]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [rR, UR]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [KR, [eR, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [aR, [wR, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [wR, aR],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [aR, [wR, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [wR, aR],
            [/ladybird\//i],
            [
              [wR, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [aR, wR]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [wR, aR],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [wR, [aR, GJ, yJ]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [aR, GJ, yJ],
              [wR, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [aR, /_/g, "."],
              [wR, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [wR, QR],
              [aR, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [aR, wR],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [wR, /(.+)/, "$1 Touch"], aR
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [wR, aR],
            [/\(bb(10);/i],
            [aR, [wR, pR]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [aR, [wR, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [aR, [wR, vR + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [aR, [wR, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [aR, [wR, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [aR, [wR, bR + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [wR, kR], aR
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [wR, aR],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [wR, "Solaris"], aR
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [wR, aR]
          ]
        },
        uJ = function(RR, JR) {
          if (typeof RR === iR && (JR = RR, RR = uR), !(this instanceof uJ)) return new uJ(RR, JR).getResult();
          var GR = typeof tR !== qR && tR.navigator ? tR.navigator : uR,
            yR = RR || (GR && GR.userAgent ? GR.userAgent : ""),
            nR = GR && GR.userAgentData ? GR.userAgentData : uR,
            AR = JR ? function(RR, JR) {
              var GR = {};
              for (var yR in RR) JR[yR] && JR[yR].length % 2 === 0 ? GR[yR] = JR[yR].concat(RR[yR]) : GR[yR] = RR[yR];
              return GR
            }(tJ, JR) : tJ,
            CR = GR && GR.userAgent == yR;
          return this.getBrowser = function() {
            var RR, JR = {};
            return JR[wR] = uR, JR[aR] = uR, JJ.call(JR, yR, AR.browser), JR[VR] = typeof(RR = JR[aR]) === fR ? RR.replace(/[^\d\.]/g, "").split(".")[0] : uR, CR && GR && GR.brave && typeof GR.brave.isBrave == ZR && (JR[wR] = "Brave"), JR
          }, this.getCPU = function() {
            var RR = {};
            return RR[LR] = uR, JJ.call(RR, yR, AR.cpu), RR
          }, this.getDevice = function() {
            var RR = {};
            return RR[eR] = uR, RR[KR] = uR, RR[rR] = uR, JJ.call(RR, yR, AR.device), CR && !RR[rR] && nR && nR.mobile && (RR[rR] = UR), CR && "Macintosh" == RR[KR] && GR && typeof GR.standalone !== qR && GR.maxTouchPoints && GR.maxTouchPoints > 2 && (RR[KR] = "iPad", RR[rR] = WR), RR
          }, this.ke = function() {
            var RR = {};
            return RR[wR] = uR, RR[aR] = uR, JJ.call(RR, yR, AR.engine), RR
          }, this.getOS = function() {
            var RR = {};
            return RR[wR] = uR, RR[aR] = uR, JJ.call(RR, yR, AR.os), CR && !RR[wR] && nR && nR.platform && "Unknown" != nR.platform && (RR[wR] = nR.platform.replace(/chrome os/i, kR).replace(/macos/i, QR)), RR
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.ke(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return yR
          }, this.setUA = function(RR) {
            return yR = typeof RR === fR && RR.length > 500 ? RJ(RR, 500) : RR, this
          }, this.setUA(yR), this
        };
      uJ.VERSION = "1.0.41", uJ.BROWSER = TR([wR, aR, VR]), uJ.CPU = TR([LR]), uJ.DEVICE = TR([KR, eR, rR, nR, UR, AR, WR, CR, XR]), uJ.ENGINE = uJ.OS = TR([wR, aR]), typeof JR !== qR ? (RR.exports && (JR = RR.exports = uJ), JR.UAParser = uJ) : GR.amdO ? (yR = function() {
        return uJ
      }.call(JR, GR, JR, RR)) === uR || (RR.exports = yR) : typeof tR !== qR && (tR.UAParser = uJ);
      var ZJ = typeof tR !== qR && (tR.jQuery || tR.Zepto);
      if (ZJ && !ZJ.ua) {
        var qJ = new uJ;
        ZJ.ua = qJ.getResult(), ZJ.ua.get = function() {
          return qJ.getUA()
        }, ZJ.ua.set = function(RR) {
          qJ.setUA(RR);
          var JR = qJ.getResult();
          for (var GR in JR) ZJ.ua[GR] = JR[GR]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);