export const id = 37;
export const ids = [37];
export const modules = {
  7237: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BaseExtension: () => HL,
      BaseInstrumentation: () => BL,
      BaseTransport: () => ir,
      CSPInstrumentation: () => Or,
      ConsoleInstrumentation: () => lL,
      ConsoleTransport: () => LS,
      EVENT_CLICK: () => vB,
      EVENT_NAVIGATION: () => PB,
      EVENT_ROUTE_CHANGE: () => kB,
      EVENT_SESSION_EXTEND: () => OB,
      EVENT_SESSION_RESUME: () => VB,
      EVENT_SESSION_START: () => UB,
      EVENT_VIEW_CHANGED: () => TB,
      ErrorsInstrumentation: () => cL,
      FetchTransport: () => PS,
      InternalLoggerLevel: () => wB,
      LogLevel: () => vL,
      MAX_SESSION_PERSISTENCE_TIME: () => zH,
      NavigationInstrumentation: () => jr,
      Observable: () => xL,
      PerformanceInstrumentation: () => dA,
      PersistentSessionsManager: () => gB,
      SESSION_EXPIRATION_TIME: () => SH,
      SESSION_INACTIVITY_TIME: () => hH,
      STORAGE_KEY: () => rH,
      SessionInstrumentation: () => AL,
      TransportItemType: () => pr,
      UserActionInstrumentation: () => Vr,
      UserActionState: () => ur,
      VERSION: () => LL,
      ViewInstrumentation: () => qL,
      VolatileSessionsManager: () => NB,
      WebVitalsInstrumentation: () => KA,
      allLogLevels: () => TL,
      browserMeta: () => dr,
      buildStackFrame: () => rL,
      captureMetas: () => qS,
      createInternalLogger: () => bS,
      createPromiseBuffer: () => GS,
      createSession: () => sr,
      deepEqual: () => xB,
      defaultEventDomain: () => AH,
      defaultExceptionType: () => bL,
      defaultGlobalObjectKey: () => kS,
      defaultInternalLoggerLevel: () => dB,
      defaultLogLevel: () => PL,
      faro: () => QH,
      genShortID: () => MB,
      getCurrentTimestamp: () => uB,
      getDataFromSafariExtensions: () => GL,
      getIgnoreUrls: () => aH,
      getInternalFaroFromGlobalObject: () => GH,
      getStackFramesFromError: () => uL,
      getTransportBody: () => BS,
      getUrlFromResource: () => JH,
      getWebInstrumentations: () => nr,
      globalObject: () => EH,
      initializeFaro: () => iS,
      internalGlobalObjectKey: () => XH,
      isArray: () => IH,
      isBoolean: () => bH,
      isDomError: () => RH,
      isDomException: () => jH,
      isElement: () => FH,
      isElementDefined: () => nH,
      TX: () => dH,
      isError: () => gH,
      isErrorDefined: () => qH,
      isErrorEvent: () => NH,
      isEvent: () => eH,
      isEventDefined: () => cH,
      isFunction: () => oH,
      isInstanceOf: () => vH,
      isInt: () => OH,
      isInternalFaroOnGlobalObject: () => uH,
      isMap: () => wH,
      isMapDefined: () => DH,
      isNull: () => TH,
      isNumber: () => VH,
      isObject: () => mH,
      isPrimitive: () => KH,
      isRegExp: () => fH,
      isString: () => UH,
      isSymbol: () => kH,
      isSyntheticEvent: () => ZH,
      isThenable: () => lH,
      isToString: () => xH,
      isTypeof: () => MH,
      isUndefined: () => PH,
      makeCoreConfig: () => IS,
      noop: () => DB,
      osMeta: () => ar,
      parseStacktrace: () => QL,
      sdkMeta: () => Jr,
      setInternalFaroOnGlobalObject: () => YH,
      transportItemTypeToBodyKey: () => yr,
      unknownString: () => eL,
      userActionDataAttribute: () => aA,
      userActionTimeoutDataAttribute: () => sA
    });
    const AH = "browser",
      rH = "com.grafana.faro.session",
      SH = 144e5,
      hH = 9e5,
      tH = 1e3,
      zH = hH,
      CH = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: zH
      };
    const EH = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof LH.g ? LH.g : "undefined" !== typeof self ? self : void 0;
    const XH = "_faroInternal";

    function GH() {
      return EH[XH]
    }

    function YH(HH) {
      HH.config.isolate ? HH.internalLogger.debug("Skipping registering internal Faro instance on global object") : (HH.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(EH, XH, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: HH
      }))
    }

    function uH() {
      return XH in EH
    }
    let QH = {
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

    function WH(HH, BH, LH, AH, rH, SH, hH) {
      return BH.debug("Initializing Faro"), QH = {
          api: SH,
          config: LH,
          instrumentations: hH,
          internalLogger: BH,
          metas: AH,
          pause: rH.pause,
          transports: rH,
          unpatchedConsole: HH,
          unpause: rH.unpause
        }, YH(QH),
        function(HH) {
          if (HH.config.preventGlobalExposure) HH.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (HH.internalLogger.debug(`Registering public faro reference in the global scope using "${HH.config.globalObjectKey}" key`), HH.config.globalObjectKey in EH) return void HH.internalLogger.warn(`Skipping global registration due to key "${HH.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(EH, HH.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: HH
            })
          }
        }(QH), QH
    }

    function MH(HH, BH) {
      return typeof HH === BH
    }

    function xH(HH, BH) {
      return Object.prototype.toString.call(HH) === `[object ${BH}]`
    }

    function vH(HH, BH) {
      try {
        return HH instanceof BH
      } catch (LH) {
        return !1
      }
    }
    const PH = HH => MH(HH, "undefined"),
      TH = HH => MH(HH, "null"),
      UH = HH => MH(HH, "string"),
      VH = HH => MH(HH, "number") && !isNaN(HH) || MH(HH, "bigint"),
      OH = HH => VH(HH) && Number.isInteger(HH),
      bH = HH => MH(HH, "boolean"),
      kH = HH => MH(HH, "symbol"),
      mH = HH => !TH(HH) && MH(HH, "object"),
      oH = HH => MH(HH, "function"),
      IH = HH => xH(HH, "Array"),
      fH = HH => xH(HH, "RegExp"),
      lH = HH => oH(null === HH || void 0 === HH ? void 0 : HH.then),
      KH = HH => !mH(HH) && !oH(HH),
      cH = "undefined" !== typeof Event,
      eH = HH => cH && vH(HH, Event),
      qH = "undefined" !== typeof Error,
      gH = HH => qH && vH(HH, Error),
      NH = HH => xH(HH, "ErrorEvent"),
      RH = HH => xH(HH, "DOMError"),
      jH = HH => xH(HH, "DOMException"),
      nH = "undefined" !== typeof Element,
      FH = HH => nH && vH(HH, Element),
      DH = "undefined" !== typeof Map,
      wH = HH => DH && vH(HH, Map),
      ZH = HH => mH(HH) && "nativeEvent" in HH && "preventDefault" in HH && "stopPropagation" in HH;

    function dH(HH) {
      return null == HH || (IH(HH) || UH(HH) ? 0 === HH.length : !!mH(HH) && 0 === Object.keys(HH).length)
    }

    function aH() {
      return QH.transports.transports.flatMap((HH => HH.getIgnoreUrls()))
    }

    function sH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return aH().some((BH => HH && null != HH.match(BH)))
    }

    function JH(HH) {
      return UH(HH) ? HH : HH instanceof URL ? HH.href : !dH(HH) && oH(null === HH || void 0 === HH ? void 0 : HH.toString) ? HH.toString() : void 0
    }
    const iH = "sessionStorage",
      pH = "localStorage";

    function yH(HH) {
      try {
        let BH;
        BH = window[HH];
        const LH = "__faro_storage_test__";
        return BH.setItem(LH, LH), BH.removeItem(LH), !0
      } catch (LH) {
        var BH;
        return null === (BH = QH.internalLogger) || void 0 === BH || BH.info(`Web storage of type ${HH} is not available. Reason: ${LH}`), !1
      }
    }

    function HB(HH, BH) {
      return SB(BH) ? window[BH].getItem(HH) : null
    }

    function BB(HH, BH, LH) {
      if (SB(LH)) try {
        window[LH].setItem(HH, BH)
      } catch (AH) {}
    }

    function LB(HH, BH) {
      SB(BH) && window[BH].removeItem(HH)
    }
    const AB = yH(pH),
      rB = yH(iH);

    function SB(HH) {
      return HH === pH ? AB : HH === iH && rB
    }

    function hB(HH) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, hB(HH)
    }

    function tB(HH) {
      var BH = function(HH, BH) {
        if ("object" != hB(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != hB(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == hB(BH) ? BH : BH + ""
    }

    function zB(HH, BH, LH) {
      return (BH = tB(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function CB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function EB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? CB(Object(LH), !0).forEach((function(BH) {
          zB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : CB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function XB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QH;
      var BH, LH, AH;
      const rH = HH.config.sessionTracking,
        SH = null !== (BH = null !== (LH = null === rH || void 0 === rH || null === (AH = rH.sampler) || void 0 === AH ? void 0 : AH.call(rH, {
          metas: HH.metas.value
        })) && void 0 !== LH ? LH : null === rH || void 0 === rH ? void 0 : rH.samplingRate) && void 0 !== BH ? BH : 1,
        hH = "number" === typeof SH ? function(HH) {
          return Math.min(1, Math.max(0, HH))
        }(SH) : 0;
      if (!(hH > 0)) return !1;
      if (1 === hH) return !0;
      try {
        const HH = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === HH || void 0 === HH ? void 0 : HH.getRandomValues)) {
          const BH = new Uint32Array(1);
          return HH.getRandomValues(BH), BH[0] / Math.pow(2, 32) < hH
        }
      } catch (tH) {}
      return Math.random() < hH
    }

    function GB() {
      return Date.now()
    }

    function YB() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function uB() {
      return (new Date).toISOString()
    }

    function QB(HH) {
      return new Date(HH).toISOString()
    }
    const WB = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function MB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const BH = new Uint32Array(HH),
        LH = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === LH || void 0 === LH ? void 0 : LH.getRandomValues) LH.getRandomValues(BH);
      else
        for (let rH = 0; rH < HH; rH++) BH[rH] = Math.floor(4294967296 * Math.random());
      let AH = "";
      for (let rH = 0; rH < HH; rH++) AH += WB[BH[rH] % 59];
      return AH
    }

    function xB(HH, BH) {
      if (HH === BH) return !0;
      if (MH(HH, "number") && isNaN(HH)) return MH(BH, "number") && isNaN(BH);
      const LH = IH(HH),
        AH = IH(BH);
      if (LH !== AH) return !1;
      if (LH && AH) {
        const LH = HH.length;
        if (LH !== BH.length) return !1;
        for (let AH = LH; 0 !== AH--;)
          if (!xB(HH[AH], BH[AH])) return !1;
        return !0
      }
      const rH = mH(HH),
        SH = mH(BH);
      if (rH !== SH) return !1;
      if (HH && BH && rH && SH) {
        const LH = Object.keys(HH),
          AH = Object.keys(BH);
        if (LH.length !== AH.length) return !1;
        for (let HH of LH)
          if (!AH.includes(HH)) return !1;
        for (let rH of LH)
          if (!xB(HH[rH], BH[rH])) return !1;
        return !0
      }
      return !1
    }
    const vB = "click",
      PB = "navigation",
      TB = "view_changed",
      UB = "session_start",
      VB = "session_resume",
      OB = "session_extend",
      bB = "service_name_override",
      kB = "route_change";

    function mB() {
      let {
        sessionId: HH,
        started: BH,
        lastActivity: LH,
        isSampled: AH = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, rH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QH;
      var SH;
      const hH = GB(),
        tH = null === (SH = rH.config) || void 0 === SH || null === (SH = SH.sessionTracking) || void 0 === SH ? void 0 : SH.generateSessionId;
      return null == HH && (HH = "function" === typeof tH ? tH() : MB()), {
        sessionId: HH,
        lastActivity: null !== LH && void 0 !== LH ? LH : hH,
        started: null !== BH && void 0 !== BH ? BH : hH,
        isSampled: AH
      }
    }

    function oB(HH) {
      if (null == HH) return !1;
      const BH = GB();
      return BH - HH.started < 144e5 && BH - HH.lastActivity < hH
    }

    function IB(HH) {
      let {
        fetchUserSession: BH,
        storeUserSession: LH,
        adoptSession: AH,
        updateInterval: rH = 0
      } = HH, tH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QH, zH = 0;
      return function() {
        let {
          forceSessionExtend: HH = !1,
          refreshActivity: CH = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var EH, XH;
        if (!BH || !LH) return;
        const GH = GB();
        if (!HH && GH < zH && zH - GH <= rH) return;
        const YH = tH.config.sessionTracking,
          uH = null === YH || void 0 === YH ? void 0 : YH.persistent;
        if (uH && !AB || !uH && !rB) return;
        const QH = BH();
        if (zH = Math.min(GH + rH, (null !== (EH = null === QH || void 0 === QH ? void 0 : QH.started) && void 0 !== EH ? EH : GH) + SH, (null !== (XH = null === QH || void 0 === QH ? void 0 : QH.lastActivity) && void 0 !== XH ? XH : GH) + hH), !1 === HH && oB(QH)) {
          var WH;
          CH && LH(EB(EB({}, QH), {}, {
            lastActivity: GH
          }));
          const HH = null === (WH = tH.metas.value.session) || void 0 === WH ? void 0 : WH.id;
          null != AH && null != QH.sessionMeta && QH.sessionId !== HH && AH(QH.sessionMeta)
        } else {
          var MH, xH, vH;
          let HH = lB(mB({
            isSampled: XB(tH)
          }, tH), QH, tH);
          zH = GH + rH, LH(HH), null === (MH = tH.api) || void 0 === MH || MH.setSession(HH.sessionMeta), null === YH || void 0 === YH || null === (xH = YH.onSessionChange) || void 0 === xH || xH.call(YH, null !== (vH = null === QH || void 0 === QH ? void 0 : QH.sessionMeta) && void 0 !== vH ? vH : null, HH.sessionMeta)
        }
      }
    }

    function fB(HH) {
      let BH, {
          fetchUserSession: LH,
          storeUserSession: AH,
          updateInterval: rH = 0
        } = HH,
        SH = 0;
      return HH => {
        const hH = GB();
        if (HH === BH && hH < SH && SH - hH <= rH) return;
        BH = HH, SH = hH + rH;
        const tH = LH();
        (null === tH || void 0 === tH ? void 0 : tH.sessionId) === HH && oB(tH) && AH(EB(EB({}, tH), {}, {
          lastActivity: hH
        }))
      }
    }

    function lB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QH;
      var AH, rH, SH, hH, tH, zH;
      const CH = EB(EB({}, HH), {}, {
          sessionMeta: {
            id: HH.sessionId,
            attributes: cB(EB(EB(EB({}, null === (AH = LH.config.sessionTracking) || void 0 === AH || null === (AH = AH.session) || void 0 === AH ? void 0 : AH.attributes), null !== (rH = null === (SH = LH.metas.value.session) || void 0 === SH ? void 0 : SH.attributes) && void 0 !== rH ? rH : {}), {}, {
              isSampled: HH.isSampled.toString()
            }))
          }
        }),
        EH = null !== (hH = null === (tH = LH.metas.value.session) || void 0 === tH ? void 0 : tH.overrides) && void 0 !== hH ? hH : null === BH || void 0 === BH || null === (zH = BH.sessionMeta) || void 0 === zH ? void 0 : zH.overrides;
      dH(EH) || (CH.sessionMeta.overrides = EH);
      const XH = null === BH || void 0 === BH ? void 0 : BH.sessionId;
      return null != XH && (CH.sessionMeta.attributes.previousSession = XH), CH
    }

    function KB(HH) {
      let {
        fetchUserSession: BH,
        storeUserSession: LH
      } = HH, AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QH, rH = !1;
      return function(HH) {
        if (rH) return;
        const SH = HH.session,
          hH = BH();
        let tH = null === SH || void 0 === SH ? void 0 : SH.id;
        const zH = null === SH || void 0 === SH ? void 0 : SH.attributes,
          CH = null === SH || void 0 === SH ? void 0 : SH.overrides,
          EH = null === hH || void 0 === hH ? void 0 : hH.sessionMeta,
          XH = null === EH || void 0 === EH ? void 0 : EH.overrides,
          GH = !!CH && !xB(CH, XH),
          YH = !!zH && !xB(zH, null === EH || void 0 === EH ? void 0 : EH.attributes);
        if (SH && tH !== (null === hH || void 0 === hH ? void 0 : hH.sessionId) || YH || GH) {
          var uH, QH;
          const HH = null != hH && tH === hH.sessionId,
            BH = lB(HH ? hH : mB({
              sessionId: tH,
              isSampled: XB(AH)
            }, AH), hH, AH),
            SH = null === hH || void 0 === hH || null === (uH = hH.sessionMeta) || void 0 === uH || null === (uH = uH.attributes) || void 0 === uH ? void 0 : uH.previousSession;
          HH && null != SH && SH !== BH.sessionId && (BH.sessionMeta.attributes.previousSession = SH), (null === (QH = BH.sessionMeta.attributes) || void 0 === QH ? void 0 : QH.previousSession) === BH.sessionId && delete BH.sessionMeta.attributes.previousSession, LH(BH),
            function(HH, BH) {
              let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var rH, SH, hH;
              if (!BH) return;
              const tH = LH.serviceName,
                zH = null !== (rH = null !== (SH = AH.serviceName) && void 0 !== SH ? SH : null === (hH = HH.metas.value.app) || void 0 === hH ? void 0 : hH.name) && void 0 !== rH ? rH : "";
              tH && tH !== zH && HH.api.pushEvent(bB, {
                serviceName: tH,
                previousServiceName: zH
              })
            }(AH, GH, CH, XH), rH = !0;
          try {
            AH.api.setSession(BH.sessionMeta)
          } finally {
            rH = !1
          }
        }
      }
    }

    function cB(HH) {
      const BH = {};
      for (const LH of Object.keys(HH)) {
        const AH = HH[LH];
        void 0 !== AH && (BH[LH] = AH)
      }
      return BH
    }

    function eB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== HH && void 0 !== HH ? HH : {}, function() {
        const HH = new WeakSet;
        return function(BH, LH) {
          if (mH(LH) && null !== LH) {
            if (HH.has(LH)) return null;
            HH.add(LH)
          }
          return LH
        }
      }())
    }

    function qB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const BH = {};
      for (const [LH, AH] of Object.entries(HH)) BH[LH] = mH(AH) && null !== AH ? eB(AH) : String(AH);
      return BH
    }
    var gB = class HH {
      constructor() {
        var BH = this;
        let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QH;
        this.context = LH, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = HH => {
          this.adopting = !0;
          try {
            var BH;
            null === (BH = this.context.api) || void 0 === BH || BH.setSession(HH)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: HH = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return BH.updateUserSession({
            refreshActivity: HH
          })
        }, this.recordActivity = fB({
          fetchUserSession: HH.fetchUserSession,
          storeUserSession: HH.storeUserSession,
          updateInterval: tH
        }), this.updateUserSession = IB({
          fetchUserSession: HH.fetchUserSession,
          storeUserSession: HH.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: tH
        }, LH), this.init()
      }
      static removeUserSession() {
        LB(rH, HH.storageTypeLocal)
      }
      static storeUserSession(BH) {
        BB(rH, eB(BH), HH.storageTypeLocal)
      }
      static fetchUserSession() {
        const BH = HB(rH, HH.storageTypeLocal);
        return BH ? JSON.parse(BH) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var HH;
            this.updateSession({
              refreshActivity: !1
            });
            const BH = null === (HH = this.context.api) || void 0 === HH || null === (HH = HH.getSession()) || void 0 === HH ? void 0 : HH.id;
            BH && this.recordActivity(BH)
          }
        })), this.context.metas.addListener(KB({
          fetchUserSession: HH.fetchUserSession,
          storeUserSession: HH.storeUserSession
        }, this.context))
      }
    };
    gB.storageTypeLocal = pH;
    var NB = class HH {
      constructor() {
        var BH = this;
        let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QH;
        this.context = LH, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: HH = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return BH.updateUserSession({
            refreshActivity: HH
          })
        }, this.recordActivity = fB({
          fetchUserSession: HH.fetchUserSession,
          storeUserSession: HH.storeUserSession,
          updateInterval: tH
        }), this.updateUserSession = IB({
          fetchUserSession: HH.fetchUserSession,
          storeUserSession: HH.storeUserSession,
          updateInterval: tH
        }, LH), this.init()
      }
      static removeUserSession() {
        LB(rH, HH.storageTypeSession)
      }
      static storeUserSession(BH) {
        BB(rH, eB(BH), HH.storageTypeSession)
      }
      static fetchUserSession() {
        const BH = HB(rH, HH.storageTypeSession);
        return BH ? JSON.parse(BH) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var HH;
            this.updateSession({
              refreshActivity: !1
            });
            const BH = null === (HH = this.context.api) || void 0 === HH || null === (HH = HH.getSession()) || void 0 === HH ? void 0 : HH.id;
            BH && this.recordActivity(BH)
          }
        })), this.context.metas.addListener(KB({
          fetchUserSession: HH.fetchUserSession,
          storeUserSession: HH.storeUserSession
        }, this.context))
      }
    };
    NB.storageTypeSession = iH;
    const RB = new WeakMap;

    function jB(HH) {
      let BH = RB.get(HH);
      if (!BH) {
        let LH = [],
          AH = [];
        BH = {
          addSessionUpdateListener: HH => {
            LH.push(HH)
          },
          removeSessionUpdateListener: HH => {
            LH = LH.filter((BH => BH !== HH))
          },
          notifySessionUpdate: HH => {
            LH.forEach((BH => BH(HH)))
          },
          shouldCapture: () => AH.every((HH => HH())),
          addCaptureFilter: HH => {
            AH.push(HH)
          },
          removeCaptureFilter: HH => {
            AH = AH.filter((BH => BH !== HH))
          }
        }, RB.set(HH, BH)
      }
      return BH
    }
    var nB = class {
      constructor(HH, BH, LH) {
        this.metas = HH, this.transports = BH, this.onActivate = LH, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = HH => {
          var BH, LH, AH;
          const rH = this.pending;
          var SH, hH;
          if ("overrides" === HH.type) return void(this.pending = {
            reset: null !== (SH = null === rH || void 0 === rH ? void 0 : rH.reset) && void 0 !== SH && SH,
            inheritOverrides: null === (hH = null === rH || void 0 === rH ? void 0 : rH.inheritOverrides) || void 0 === hH || hH,
            session: EB(EB({}, null === rH || void 0 === rH ? void 0 : rH.session), {}, {
              overrides: EB(EB({}, null === rH || void 0 === rH ? void 0 : rH.session.overrides), HH.overrides)
            })
          });
          const tH = HH.session,
            zH = dH(tH) || null != tH && "id" in tH && !tH.id,
            CH = null !== (BH = null === tH || void 0 === tH ? void 0 : tH.overrides) && void 0 !== BH ? BH : null === rH || void 0 === rH ? void 0 : rH.session.overrides;
          this.pending = {
            reset: zH || !(null === tH || void 0 === tH ? void 0 : tH.id) && null !== (LH = null === rH || void 0 === rH ? void 0 : rH.reset) && void 0 !== LH && LH,
            inheritOverrides: !(!HH.overrides && void 0 !== (null === tH || void 0 === tH ? void 0 : tH.overrides)) && (null === (AH = null === rH || void 0 === rH ? void 0 : rH.inheritOverrides) || void 0 === AH || AH),
            session: {
              id: null === tH || void 0 === tH ? void 0 : tH.id,
              attributes: (null === tH || void 0 === tH ? void 0 : tH.attributes) && EB({}, tH.attributes),
              overrides: HH.overrides ? EB(EB({}, null === rH || void 0 === rH ? void 0 : rH.session.overrides), HH.overrides) : CH && EB({}, CH)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var HH, BH;
        this.waiting = !0, jB(this.metas).addSessionUpdateListener(this.recordUpdate), jB(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (HH = (BH = this.metas).addCaptureListener) || void 0 === HH || HH.call(BH, this.activate), this.activate()
      }
      destroy() {
        var HH, BH;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), jB(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (HH = (BH = this.metas).removeCaptureListener) || void 0 === HH || HH.call(BH, this.activate), jB(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function FB(HH) {
      return (null === HH || void 0 === HH ? void 0 : HH.persistent) ? gB : NB
    }

    function DB() {}
    let wB = function(HH) {
      return HH[HH.OFF = 0] = "OFF", HH[HH.ERROR = 1] = "ERROR", HH[HH.WARN = 2] = "WARN", HH[HH.INFO = 3] = "INFO", HH[HH.VERBOSE = 4] = "VERBOSE", HH
    }({});
    const ZB = {
        debug: DB,
        error: DB,
        info: DB,
        prefix: "Faro",
        warn: DB
      },
      dB = 1;

    function aB(HH) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, aB(HH)
    }

    function sB(HH) {
      var BH = function(HH, BH) {
        if ("object" != aB(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != aB(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == aB(BH) ? BH : BH + ""
    }

    function JB(HH, BH, LH) {
      return (BH = sB(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function iB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function pB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? iB(Object(LH), !0).forEach((function(BH) {
          JB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : iB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }
    const yB = pB({}, console);
    var HL = class {
        constructor() {
          this.unpatchedConsole = yB, this.internalLogger = ZB, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          this.internalLogger.debug(`${this.name}\n`, ...BH)
        }
        logInfo() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          this.internalLogger.info(`${this.name}\n`, ...BH)
        }
        logWarn() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          this.internalLogger.warn(`${this.name}\n`, ...BH)
        }
        logError() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          this.internalLogger.error(`${this.name}\n`, ...BH)
        }
      },
      BL = class extends HL {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const LL = "2.12.1";
    var AL = class extends BL {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = LL, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(HH) {
        var BH;
        const LH = HH.session;
        if (LH && LH.id !== (null === (BH = this.notifiedSession) || void 0 === BH ? void 0 : BH.id)) {
          var AH;
          if (this.isAdoptingSession()) return void(this.notifiedSession = LH);
          if (this.notifiedSession && this.notifiedSession.id === (null === (AH = LH.attributes) || void 0 === AH ? void 0 : AH.previousSession)) return this.api.pushEvent(OB, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = LH);
          this.notifiedSession = LH, this.api.pushEvent(UB, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(HH, BH, LH) {
        const AH = null === LH || void 0 === LH ? void 0 : LH.session;
        let rH, SH, hH = HH.fetchUserSession();
        if (BH.persistent && BH.maxSessionPersistenceTime && hH) {
          const HH = GB();
          hH.lastActivity < HH - BH.maxSessionPersistenceTime && (gB.removeUserSession(), hH = null)
        }
        const tH = oB(hH);
        if ((null === LH || void 0 === LH ? void 0 : LH.reset) || !tH || (null === AH || void 0 === AH ? void 0 : AH.id) && AH.id !== (null === hH || void 0 === hH ? void 0 : hH.sessionId)) {
          var zH, CH, EH, XH, GH, YH;
          SH = mB({
            sessionId: (null === LH || void 0 === LH ? void 0 : LH.reset) ? void 0 : null !== (zH = null === AH || void 0 === AH ? void 0 : AH.id) && void 0 !== zH ? zH : null === (CH = BH.session) || void 0 === CH ? void 0 : CH.id,
            isSampled: XB(this)
          }, this);
          const HH = SH.sessionId,
            uH = LH && tH ? null === hH || void 0 === hH || null === (EH = hH.sessionMeta) || void 0 === EH ? void 0 : EH.overrides : void 0,
            QH = uH ? EB(EB({}, null === (XH = BH.session) || void 0 === XH ? void 0 : XH.overrides), uH) : null === (GH = BH.session) || void 0 === GH ? void 0 : GH.overrides;
          SH.sessionMeta = EB({
            id: HH,
            attributes: EB({
              isSampled: SH.isSampled.toString()
            }, null === (YH = BH.session) || void 0 === YH ? void 0 : YH.attributes)
          }, QH ? {
            overrides: QH
          } : {}), rH = UB
        } else {
          var uH, QH;
          const HH = null === hH || void 0 === hH ? void 0 : hH.sessionId;
          SH = mB({
            sessionId: HH,
            isSampled: hH.isSampled || !1,
            started: null === hH || void 0 === hH ? void 0 : hH.started
          }, this);
          const LH = null === hH || void 0 === hH ? void 0 : hH.sessionMeta,
            AH = EB(EB({}, null === (uH = BH.session) || void 0 === uH ? void 0 : uH.overrides), null === LH || void 0 === LH ? void 0 : LH.overrides);
          SH.sessionMeta = EB(EB({}, BH.session), {}, {
            id: HH,
            attributes: EB(EB(EB({}, null === (QH = BH.session) || void 0 === QH ? void 0 : QH.attributes), null === LH || void 0 === LH ? void 0 : LH.attributes), {}, {
              isSampled: SH.isSampled.toString()
            }),
            overrides: AH
          }), rH = VB
        }
        var WH;
        if (AH && (SH.sessionMeta = EB(EB({}, SH.sessionMeta), {}, {
            attributes: EB(EB(EB({}, null === (WH = SH.sessionMeta) || void 0 === WH ? void 0 : WH.attributes), AH.attributes), {}, {
              isSampled: SH.isSampled.toString()
            })
          }), AH.overrides)) {
          const HH = (null === LH || void 0 === LH ? void 0 : LH.inheritOverrides) ? EB(EB({}, SH.sessionMeta.overrides), AH.overrides) : AH.overrides;
          Object.keys(HH).length > 0 ? SH.sessionMeta.overrides = HH : delete SH.sessionMeta.overrides
        }
        return {
          initialSession: SH,
          lifecycleType: rH
        }
      }
      registerBeforeSendHook(HH) {
        var BH;
        this.beforeSendHook = BH => {
          var LH, AH;
          const rH = null === (LH = BH.meta.session) || void 0 === LH ? void 0 : LH.id;
          rH && !this.transports.isPaused() && HH(rH);
          const SH = null === (AH = BH.meta.session) || void 0 === AH ? void 0 : AH.attributes;
          if (SH && "true" === (null === SH || void 0 === SH ? void 0 : SH.isSampled)) {
            var hH;
            let HH = JSON.parse(JSON.stringify(BH));
            const LH = null === (hH = HH.meta.session) || void 0 === hH ? void 0 : hH.attributes;
            var tH;
            if (null === LH || void 0 === LH || delete LH.isSampled, 0 === Object.keys(null !== LH && void 0 !== LH ? LH : {}).length) null === (tH = HH.meta.session) || void 0 === tH || delete tH.attributes;
            return HH
          }
          return null
        }, null === (BH = this.transports) || void 0 === BH || BH.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var HH;
        this.logDebug("init session instrumentation");
        const BH = document.prerendering;
        var LH;
        if ((null === (HH = this.config.sessionTracking) || void 0 === HH ? void 0 : HH.enabled) && (BH || this.prerenderSession)) return null !== (LH = this.prerenderSession) && void 0 !== LH || (this.prerenderSession = new nB(this.metas, this.transports, (HH => {
          this.prerenderSession = void 0, this.initializeSession(HH)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(HH) {
        const BH = this.config.sessionTracking;
        if (null === BH || void 0 === BH ? void 0 : BH.enabled) {
          var LH, AH;
          const rH = FB(BH),
            SH = new rH(this);
          this.isAdoptingSession = SH.isAdopting, this.registerBeforeSendHook(SH.recordActivity);
          const {
            initialSession: hH,
            lifecycleType: tH
          } = this.createInitialSession(rH, BH, HH);
          rH.storeUserSession(hH);
          const zH = hH.sessionMeta;
          this.notifiedSession = zH, this.api.setSession(zH), this.captureListener = () => {
            this.transports.isPaused() || SH.updateSession({
              refreshActivity: !1
            })
          }, null === (LH = (AH = this.metas).addCaptureListener) || void 0 === LH || LH.call(AH, this.captureListener), tH === UB && this.api.pushEvent(UB, {}, void 0, {
            skipDedupe: !0
          }), tH === VB && this.api.pushEvent(VB, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var HH, BH, LH;
        (null === (HH = this.prerenderSession) || void 0 === HH || HH.destroy(), this.captureListener) && (null === (BH = (LH = this.metas).removeCaptureListener) || void 0 === BH || BH.call(LH, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function rL(HH, BH, LH, AH) {
      const rH = {
        filename: HH || document.location.href,
        function: BH || "?"
      };
      return void 0 !== LH && (rH.lineno = LH), void 0 !== AH && (rH.colno = AH), rH
    }
    const SL = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      hL = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      tL = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      zL = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      CL = "safari-extension",
      EL = "safari-web-extension",
      XL = /Minified React error #\d+;/i;

    function GL(HH, BH) {
      const LH = null === HH || void 0 === HH ? void 0 : HH.includes(CL),
        AH = !LH && (null === HH || void 0 === HH ? void 0 : HH.includes("safari-web-extension"));
      return LH || AH ? [(null === HH || void 0 === HH ? void 0 : HH.includes("@")) ? HH.split("@")[0] : HH, LH ? `${CL}:${BH}` : `${EL}:${BH}`] : [HH, BH]
    }
    const YL = 1024;

    function uL(HH) {
      let BH = [];
      HH.stacktrace ? BH = HH.stacktrace.split("\n").filter(((HH, BH) => BH % 2 === 0)) : HH.stack && (BH = HH.stack.split("\n"));
      const LH = BH.reduce(((BH, LH, AH) => {
        if (LH.length > YL) return BH;
        let rH, SH, hH, tH, zH;
        if (rH = SL.exec(LH)) {
          if (SH = rH[1], hH = rH[2], tH = rH[3], zH = rH[4], null === hH || void 0 === hH ? void 0 : hH.startsWith("eval")) {
            const HH = hL.exec(hH);
            HH && (hH = HH[1], tH = HH[2], zH = HH[3])
          }
          hH = (null === hH || void 0 === hH ? void 0 : hH.startsWith("address at ")) ? hH.substring(11) : hH, [SH, hH] = GL(SH, hH)
        } else if (rH = tL.exec(LH)) {
          if (SH = rH[1], hH = rH[3], tH = rH[4], zH = rH[5], hH && hH.includes(" > eval")) {
            const HH = zL.exec(hH);
            HH && (SH = SH || "eval", hH = HH[1], tH = HH[2])
          } else 0 === AH && !zH && VH(HH.columnNumber) && (zH = String(HH.columnNumber + 1));
          [SH, hH] = GL(SH, hH)
        }
        return (hH || SH) && BH.push(rL(hH, SH, tH ? Number(tH) : void 0, zH ? Number(zH) : void 0)), BH
      }), []);
      return XL.test(HH.message) ? LH.slice(1) : LH
    }

    function QL(HH) {
      return {
        frames: uL(HH)
      }
    }
    const WL = "http-request-start",
      ML = "http-request-end";
    var xL = class HH {
      constructor() {
        this.subscribers = []
      }
      subscribe(HH) {
        return this.subscribers.push(HH), {
          unsubscribe: () => this.unsubscribe(HH)
        }
      }
      unsubscribe(HH) {
        this.subscribers = this.subscribers.filter((BH => BH !== HH))
      }
      notify(HH) {
        this.subscribers.forEach((BH => BH(HH)))
      }
      first() {
        const BH = new HH,
          LH = HH => {
            BH.notify(HH), AH.unsubscribe()
          },
          AH = this.subscribe(LH),
          rH = BH.unsubscribe.bind(BH);
        return this.withUnsubscribeOverride(BH, rH, LH)
      }
      takeWhile(BH) {
        const LH = new HH,
          AH = HH => {
            BH(HH) ? LH.notify(HH) : LH.unsubscribe(AH)
          };
        this.subscribe(AH);
        const rH = LH.unsubscribe.bind(LH);
        return this.withUnsubscribeOverride(LH, rH, AH)
      }
      filter(BH) {
        const LH = new HH,
          AH = HH => {
            BH(HH) && LH.notify(HH)
          };
        this.subscribe(AH);
        const rH = LH.unsubscribe.bind(LH);
        return this.withUnsubscribeOverride(LH, rH, AH)
      }
      merge() {
        const BH = new HH,
          LH = [];
        for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
        rH.forEach((HH => {
          const AH = HH.subscribe((HH => {
            BH.notify(HH)
          }));
          LH.push(AH)
        }));
        const hH = BH.unsubscribeAll.bind(BH);
        return BH.unsubscribe = () => {
          LH.forEach((HH => HH.unsubscribe())), hH()
        }, BH
      }
      withUnsubscribeOverride(HH, BH, LH) {
        return HH.unsubscribe = HH => {
          BH(HH), this.unsubscribe(LH)
        }, HH
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let vL = function(HH) {
      return HH.TRACE = "trace", HH.DEBUG = "debug", HH.INFO = "info", HH.LOG = "log", HH.WARN = "warn", HH.ERROR = "error", HH
    }({});
    const PL = "log",
      TL = ["trace", "debug", "info", "log", "warn", "error"];
    let UL, VL = !1;
    const OL = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      bL = "Error",
      kL = HH => HH.map((HH => mH(HH) ? eB(HH) : String(HH))).join(" ");

    function mL(HH) {
      let BH, LH, AH, rH, SH = [];
      if (NH(HH) && HH.error) BH = HH.error.message, LH = HH.error.name, SH = uL(HH.error);
      else if ((AH = RH(HH)) || jH(HH)) {
        const {
          name: rH,
          message: SH
        } = HH;
        LH = null !== rH && void 0 !== rH ? rH : AH ? "DOMError" : "DOMException", BH = SH ? `${LH}: ${SH}` : LH
      } else gH(HH) ? (LH = HH.name, BH = HH.message, SH = uL(HH)) : (mH(HH) || (rH = eH(HH))) && (LH = rH ? HH.constructor.name : void 0, BH = `Non-Error exception captured with keys: ${Object.keys(HH)}`);
      return [BH, LH, SH]
    }

    function oL(HH) {
      const [BH, LH, AH, rH, SH] = HH;
      let hH, tH, zH = [];
      const CH = UH(BH),
        EH = rL(LH, "?", AH, rH);
      return SH || !CH ? ([hH, tH, zH] = mL(null !== SH && void 0 !== SH ? SH : BH), 0 === zH.length && (zH = [EH])) : CH && ([hH, tH] = function(HH) {
        var BH, LH;
        const AH = HH.match(OL),
          rH = null !== (BH = null === AH || void 0 === AH ? void 0 : AH[1]) && void 0 !== BH ? BH : bL;
        return [null !== (LH = null === AH || void 0 === AH ? void 0 : AH[2]) && void 0 !== LH ? LH : HH, rH]
      }(BH), zH = [EH]), {
        value: hH,
        type: tH,
        stackFrames: zH
      }
    }

    function IL(HH, BH) {
      return gH(HH[0]) ? oL(HH) : {
        value: BH(HH)
      }
    }
    const fL = HH => HH.map((HH => {
      try {
        return String(HH)
      } catch (BH) {
        return ""
      }
    })).join(" ");
    var lL = class HH extends BL {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = LL, this.errorSerializer = fL
      }
      initialize() {
        var BH, LH;
        const AH = this.config.consoleInstrumentation,
          rH = (null === AH || void 0 === AH ? void 0 : AH.serializeErrors) || !!(null === AH || void 0 === AH ? void 0 : AH.errorSerializer);
        this.errorSerializer = rH ? null !== (BH = null === AH || void 0 === AH ? void 0 : AH.errorSerializer) && void 0 !== BH ? BH : kL : fL;
        const SH = null !== (LH = null === AH || void 0 === AH ? void 0 : AH.disabledLevels) && void 0 !== LH ? LH : HH.defaultDisabledLevels,
          hH = function(HH) {
            if (UL || (UL = new xL), !VL) {
              const BH = null !== HH && void 0 !== HH ? HH : yB;
              TL.forEach((HH => {
                console[HH] = function() {
                  for (var LH, AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
                  UL.notify({
                    type: "console",
                    level: HH,
                    args: rH
                  }), null === (LH = BH[HH]) || void 0 === LH || LH.apply(console, rH)
                }
              })), VL = !0
            }
            return UL
          }(this.unpatchedConsole);
        this.subscription = hH.subscribe((BH => {
          let {
            level: LH,
            args: rH
          } = BH;
          if (!SH.includes(LH)) try {
            if (LH !== vL.ERROR || (null === AH || void 0 === AH ? void 0 : AH.consoleErrorAsLog))
              if (LH === vL.ERROR && (null === AH || void 0 === AH ? void 0 : AH.consoleErrorAsLog)) {
                const {
                  value: BH,
                  type: AH,
                  stackFrames: SH
                } = IL(rH, this.errorSerializer);
                this.api.pushLog(BH ? [HH.consoleErrorPrefix + BH] : rH, {
                  level: LH,
                  context: {
                    value: null !== BH && void 0 !== BH ? BH : "",
                    type: null !== AH && void 0 !== AH ? AH : "",
                    stackFrames: (null === SH || void 0 === SH ? void 0 : SH.length) ? kL(SH) : ""
                  }
                })
              } else this.api.pushLog(rH, {
                level: LH
              });
            else {
              const {
                value: BH,
                type: LH,
                stackFrames: AH
              } = IL(rH, this.errorSerializer);
              if (BH && !LH && !AH) return void this.api.pushError(new Error(HH.consoleErrorPrefix + BH));
              this.api.pushError(new Error(HH.consoleErrorPrefix + BH), {
                type: LH,
                stackFrames: AH
              })
            }
          } catch (hH) {
            this.logError(hH)
          }
        }))
      }
      destroy() {
        var HH;
        null === (HH = this.subscription) || void 0 === HH || HH.unsubscribe(), this.subscription = void 0
      }
    };
    lL.defaultDisabledLevels = [vL.DEBUG, vL.TRACE, vL.LOG], lL.consoleErrorPrefix = "console.error: ";
    const KL = [];
    var cL = class extends BL {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = LL
      }
      initialize() {
        this.logDebug("Initializing"),
          function(HH) {
            const BH = window.onerror;
            window.onerror = function() {
              for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
              try {
                const {
                  value: BH,
                  type: LH,
                  stackFrames: rH
                } = oL(AH), SH = AH[4];
                if (BH) {
                  const AH = {
                    type: LH,
                    stackFrames: rH
                  };
                  null != SH && (AH.originalError = SH), HH.pushError(new Error(BH), AH)
                }
              } finally {
                null === BH || void 0 === BH || BH.apply(window, AH)
              }
            }
          }(this.api),
          function(HH) {
            const BH = BH => {
              var LH;
              let AH, rH, SH = BH;
              if (SH.reason) SH = BH.reason;
              else if (null === (LH = BH.detail) || void 0 === LH ? void 0 : LH.reason) {
                var hH;
                SH = null === (hH = BH.detail) || void 0 === hH ? void 0 : hH.reason
              }
              let tH = [];
              KH(SH) ? (AH = `Non-Error promise rejection captured with value: ${String(SH)}`, rH = "UnhandledRejection") : [AH, rH, tH] = mL(SH), AH && HH.pushError(new Error(AH), {
                type: rH,
                stackFrames: tH
              })
            };
            window.addEventListener("unhandledrejection", BH), KL.push(BH)
          }(this.api)
      }
    };
    const eL = "unknown";
    var qL = class extends BL {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = LL, this.waitingForActivation = !1, this.sendViewChangedEvent = HH => {
          var BH;
          if (this.waitingForActivation || document.prerendering) return;
          const LH = HH.view;
          if (LH && LH.name !== (null === (BH = this.notifiedView) || void 0 === BH ? void 0 : BH.name)) {
            var AH, rH, SH;
            const HH = null !== (AH = null === (rH = this.notifiedView) || void 0 === rH ? void 0 : rH.name) && void 0 !== AH ? AH : eL;
            this.notifiedView = LH, this.api.pushEvent(TB, {
              fromView: HH,
              toView: null !== (SH = LH.name) && void 0 !== SH ? SH : eL
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
    class gL {
      t;
      o = 0;
      i = [];
      l(HH) {
        if (HH.hadRecentInput) return;
        const BH = this.i[0],
          LH = this.i.at(-1);
        this.o && BH && LH && HH.startTime - LH.startTime < 1e3 && HH.startTime - BH.startTime < 5e3 ? (this.o += HH.value, this.i.push(HH)) : (this.o = HH.value, this.i = [HH]), this.t?.(HH)
      }
    }
    const NL = () => {
        const HH = performance.getEntriesByType("navigation")[0];
        if (HH && HH.responseStart > 0 && HH.responseStart < performance.now()) return HH
      },
      RL = HH => {
        if ("loading" === document.readyState) return "loading";
        const BH = NL();
        if (BH) {
          if (HH < BH.domInteractive) return "loading";
          if (0 === BH.domContentLoadedEventStart || HH < BH.domContentLoadedEventStart) return "dom-interactive";
          if (0 === BH.domComplete || HH < BH.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      jL = HH => {
        const BH = HH.nodeName;
        return 1 === HH.nodeType ? BH.toLowerCase() : BH.toUpperCase().replace(/^#/, "")
      },
      nL = HH => {
        let BH = "";
        try {
          for (; 9 !== HH?.nodeType;) {
            const LH = HH,
              AH = LH.id ? "#" + LH.id : [jL(LH), ...Array.from(LH.classList ?? []).sort()].join(".");
            if (BH.length + AH.length > 99) return BH || AH;
            if (BH = BH ? AH + ">" + BH : AH, LH.id) break;
            HH = LH.parentNode
          }
        } catch {}
        return BH
      },
      FL = new WeakMap;

    function DL(HH, BH) {
      let LH = FL.get(BH);
      return LH || (LH = new WeakMap, FL.set(BH, LH)), LH.get(HH) || LH.set(HH, new BH), LH.get(HH)
    }
    let wL = -1;
    const ZL = () => wL,
      dL = HH => {
        addEventListener("pageshow", (BH => {
          BH.persisted && (wL = BH.timeStamp, HH(BH))
        }), !0)
      },
      aL = (HH, BH, LH, AH) => {
        let rH, SH;
        return hH => {
          BH.value >= 0 && (hH || AH) && (SH = BH.value - (rH ?? 0), (SH || void 0 === rH) && (rH = BH.value, BH.delta = SH, BH.rating = ((HH, BH) => HH > BH[1] ? "poor" : HH > BH[0] ? "needs-improvement" : "good")(BH.value, LH), HH(BH)))
        }
      },
      sL = HH => {
        requestAnimationFrame((() => requestAnimationFrame((() => HH()))))
      },
      JL = () => NL()?.activationStart ?? 0;
    let iL = -1;
    const pL = new Set,
      yL = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      HA = HH => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === HH.type)
            for (const HH of pL) HH();
          isFinite(iL) || (iL = "visibilitychange" === HH.type ? HH.timeStamp : 0, removeEventListener("prerenderingchange", HA, !0))
        }
      },
      BA = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (iL = 1 / 0), iL < 0) {
          const HH = JL(),
            BH = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((BH => "hidden" === BH.name && BH.startTime >= HH))?.startTime;
          iL = BH ?? yL(), addEventListener("visibilitychange", HA, !0), addEventListener("prerenderingchange", HA, !0), dL((() => {
            setTimeout((() => {
              iL = yL()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return iL
          },
          onHidden(HH) {
            pL.add(HH)
          }
        }
      },
      LA = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0,
          hH = arguments.length > 6 ? arguments[6] : void 0;
        const tH = NL(),
          zH = tH?.navigationId || 0;
        let CH = "navigate";
        return LH ? CH = LH : ZL() >= 0 ? CH = "back-forward-cache" : tH && (document.prerendering || JL() > 0 ? CH = "prerender" : document.wasDiscarded ? CH = "restore" : tH.type && (CH = tH.type.replace(/_/g, "-"))), {
          name: HH,
          value: BH,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: CH,
          navigationId: AH || zH,
          navigationInteractionId: rH,
          navigationURL: SH || tH?.name,
          navigationStartTime: hH || 0
        }
      },
      AA = function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const AH = HH.filter((HH => PerformanceObserver.supportedEntryTypes.includes(HH)));
          if (AH.length > 0) {
            const HH = new PerformanceObserver((HH => {
              queueMicrotask((() => {
                const LH = HH.getEntries();
                AH.length > 1 && LH.sort(((HH, BH) => HH.startTime + HH.duration - (BH.startTime + BH.duration))), BH(LH)
              }))
            }));
            for (const BH of AH) HH.observe({
              type: BH,
              buffered: !0,
              ...LH
            });
            return HH
          }
        } catch {}
      },
      rA = HH => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && HH && HH.reportSoftNavs,
      SA = (HH, BH) => {
        if (HH.set(BH.navigationId, BH), HH.size > 2) {
          const BH = HH.keys().next().value;
          void 0 !== BH && HH.delete(BH)
        }
      },
      hA = HH => {
        let BH = !1;
        return () => {
          BH || (HH(), BH = !0)
        }
      };
    class tA {
      u
    }
    const zA = HH => {
        document.prerendering ? addEventListener("prerenderingchange", HH, !0) : HH()
      },
      CA = [1800, 3e3],
      EA = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = rA(BH);
        zA((() => {
          const AH = DL(BH, tA),
            rH = BA();
          let SH, hH = LA("FCP");
          const tH = AA(["paint"], (HH => {
            for (const BH of HH) "first-contentful-paint" === BH.name && (tH.disconnect(), BH.startTime < rH.firstHiddenTime && (hH.value = Math.max(BH.startTime - JL(), 0), hH.entries.push(BH), hH.navigationId = BH.navigationId || hH.navigationId, SH(!0)))
          }));
          tH && (SH = aL(HH, hH, CA, BH.reportAllChanges), dL((LH => {
            hH = LA("FCP", -1, "back-forward-cache", hH.navigationId, hH.navigationInteractionId, hH.navigationURL, ZL()), SH = aL(HH, hH, CA, BH.reportAllChanges), sL((() => {
              hH.value = performance.now() - LH.timeStamp, SH(!0)
            }))
          }))), LH && AA(["soft-navigation"], (LH => {
            LH.forEach((LH => {
              AH.u && LH.navigationId && SA(AH.u, LH);
              const rH = Math.max((LH.presentationTime || LH.paintTime || 0) - LH.startTime, 0);
              hH = LA("FCP", rH, "soft-navigation", LH.navigationId, LH.interactionId, LH.name, LH.startTime), SH = aL(HH, hH, CA, BH.reportAllChanges), SH(!0)
            }))
          }), BH)
        }))
      },
      XA = [.1, .25],
      GA = HH => HH.find((HH => 1 === HH.node?.nodeType)) || HH[0];
    let YA = 0,
      uA = 1 / 0,
      QA = 0;
    const WA = HH => {
      for (const BH of HH) BH.interactionId && (uA = Math.min(uA, BH.interactionId), QA = Math.max(QA, BH.interactionId), YA = QA ? (QA - uA) / 7 + 1 : 0)
    };
    let MA;
    const xA = () => MA ? YA : performance.interactionCount ?? 0;
    class vA {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return xA() - this.h
      }
      D() {
        this.h = xA(), this.v.length = 0, this.p.clear()
      }
      S(HH) {
        const BH = this.T(),
          LH = Math.min(this.v.length - 1, Math.floor(BH / 50));
        return !BH || -1 !== LH || "soft-navigation" !== HH && "back-forward-cache" !== HH ? this.v[LH] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(HH) {
        if (this.m?.(HH), !HH.interactionId) return;
        const BH = this.v.at(-1);
        let LH = this.p.get(HH.interactionId);
        if (LH || this.v.length < 10 || HH.duration > BH.k) {
          if (LH ? HH.duration > LH.k ? (LH.entries = [HH], LH.k = HH.duration) : HH.duration === LH.k && HH.startTime === LH.entries[0].startTime && LH.entries.push(HH) : (LH = {
              id: HH.interactionId,
              entries: [HH],
              k: HH.duration
            }, this.p.set(LH.id, LH), this.v.push(LH)), this.v.sort(((HH, BH) => BH.k - HH.k)), this.v.length > 10) {
            const HH = this.v.splice(10);
            for (const BH of HH) this.p.delete(BH.id)
          }
          this.M?.(LH)
        }
      }
    }
    const PA = HH => {
        const BH = "requestIdleCallback" in globalThis ? 1e3 : 0,
          LH = globalThis.requestIdleCallback || setTimeout,
          AH = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) HH();
        else {
          const rH = hA(HH);
          let SH = -1;
          const hH = () => {
            AH(SH), rH()
          };
          addEventListener("visibilitychange", hH, {
            once: !0,
            capture: !0
          }), SH = LH((() => {
            removeEventListener("visibilitychange", hH, {
              capture: !0
            }), rH()
          }), {
            timeout: BH
          })
        }
      },
      TA = [200, 500],
      UA = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = DL(BH = Object.assign({}, BH), vA);
        let AH = [],
          rH = [],
          SH = 0;
        const hH = new WeakMap,
          tH = new WeakMap;
        let zH = !1;
        const CH = () => {
            zH || (zH = !0, PA(EH))
          },
          EH = () => {
            const HH = new Set(LH.v.map((HH => hH.get(HH.entries[0])))),
              BH = rH.length - 10;
            rH = rH.filter(((LH, AH) => AH >= BH || HH.has(LH)));
            const tH = new Set;
            for (const LH of rH) {
              const HH = XH(LH.startTime, LH.processingEnd);
              for (const BH of HH) tH.add(BH)
            }
            const CH = AH.length - 10;
            AH = AH.filter(((HH, BH) => tH.has(HH) || BH >= CH && HH.startTime > SH)), zH = !1
          };
        LH.m = HH => {
          const LH = HH.startTime + HH.duration;
          let AH;
          SH = Math.max(SH, HH.processingEnd);
          for (let SH = rH.length - 1; SH >= 0; SH--) {
            const hH = rH[SH];
            if (Math.abs(LH - hH.renderTime) <= 8) {
              AH = hH, AH.startTime = Math.min(HH.startTime, AH.startTime), AH.processingStart = Math.min(HH.processingStart, AH.processingStart), AH.processingEnd = Math.max(HH.processingEnd, AH.processingEnd), BH.includeProcessedEventEntries && AH.entries.push(HH);
              break
            }
          }
          AH || (AH = {
            startTime: HH.startTime,
            processingStart: HH.processingStart,
            processingEnd: HH.processingEnd,
            renderTime: LH,
            entries: BH.includeProcessedEventEntries ? [HH] : []
          }, rH.push(AH)), HH.interactionId && hH.set(HH, AH), CH()
        }, LH.M = HH => {
          if (!tH.get(HH)) {
            const LH = HH.entries.find((HH => HH.target))?.target;
            if (LH) {
              const AH = BH.generateTarget?.(LH) ?? nL(LH);
              tH.set(HH, AH)
            } else {
              const BH = HH.entries.find((HH => HH.targetSelector))?.targetSelector;
              BH && tH.set(HH, BH)
            }
          }
        };
        const XH = (HH, BH) => {
          const LH = [];
          for (const rH of AH)
            if (!(rH.startTime + rH.duration < HH)) {
              if (rH.startTime > BH) break;
              LH.push(rH)
            } return LH
        };
        AA(["long-animation-frame"], (HH => {
            AH = AH.concat(HH), CH()
          }), BH),
          function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const LH = BA();
            zA((() => {
              "interactionCount" in performance || MA || (MA = AA(["event"], WA, {
                durationThreshold: 0
              }));
              let AH, rH = LA("INP");
              const SH = DL(BH, vA),
                hH = (LH, hH, tH, zH, CH) => {
                  SH.D(), rH = LA("INP", -1, LH, hH, tH, zH, CH), AH = aL(HH, rH, TA, BH.reportAllChanges)
                },
                tH = () => {
                  const HH = SH.S(rH.navigationType);
                  HH && HH.k !== rH.value && (rH.value = HH.k, rH.entries = HH.entries, AH())
                },
                zH = HH => {
                  tH(), AH(!0), hH("soft-navigation", HH.navigationId, HH.interactionId, HH.name, HH.startTime)
                },
                CH = function(HH) {
                  let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  PA((() => {
                    for (const BH of HH) "soft-navigation" !== BH.entryType ? SH.l(BH) : zH(BH);
                    tH(), BH && AH(!0)
                  }))
                },
                EH = ["event", "first-input"];
              rA(BH) && EH.push("soft-navigation");
              const XH = AA(EH, CH, {
                ...BH,
                durationThreshold: BH.durationThreshold ?? 40
              });
              AH = aL(HH, rH, TA, BH.reportAllChanges), XH && (LH.onHidden((() => {
                CH(XH.takeRecords(), !0)
              })), dL((() => {
                hH("back-forward-cache", rH.navigationId, rH.navigationInteractionId, rH.navigationURL, ZL())
              })))
            }))
          }((BH => {
            HH((HH => {
              if (0 === HH.entries.length) {
                const BH = HH.navigationStartTime || 0,
                  LH = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: HH.value,
                    loadState: RL(BH)
                  };
                return Object.assign(HH, {
                  attribution: LH
                })
              }
              const BH = HH.entries[0],
                AH = hH.get(BH),
                rH = Math.max(AH.processingStart, BH.startTime),
                SH = Math.max(BH.startTime + BH.duration, rH),
                zH = Math.min(AH.processingEnd, SH),
                CH = AH.entries.sort(((HH, BH) => HH.processingStart - BH.processingStart)),
                EH = XH(BH.startTime, zH),
                GH = LH.p.get(BH.interactionId),
                YH = {
                  interactionTarget: tH.get(GH),
                  interactionType: BH.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: BH.startTime,
                  nextPaintTime: SH,
                  processedEventEntries: CH,
                  longAnimationFrameEntries: EH,
                  inputDelay: rH - BH.startTime,
                  processingDuration: zH - rH,
                  presentationDelay: SH - zH,
                  loadState: RL(BH.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (HH => {
                const BH = HH.interactionTime,
                  LH = HH.nextPaintTime;
                if (!HH.longAnimationFrameEntries?.length || !BH || !LH) return;
                const AH = HH.inputDelay,
                  rH = HH.processingDuration;
                let SH, hH, tH = 0,
                  zH = 0,
                  CH = 0,
                  EH = 0;
                for (const YH of HH.longAnimationFrameEntries) {
                  zH = zH + YH.startTime + YH.duration - YH.styleAndLayoutStart;
                  for (const HH of YH.scripts) {
                    const LH = HH.startTime + HH.duration;
                    if (LH < BH) continue;
                    const CH = LH - Math.max(BH, HH.startTime),
                      XH = HH.duration ? CH / HH.duration * HH.forcedStyleAndLayoutDuration : 0;
                    tH += CH - XH, zH += XH, CH > EH && (hH = HH.startTime < BH + AH ? "input-delay" : HH.startTime >= BH + AH + rH ? "presentation-delay" : "processing-duration", SH = HH, EH = CH)
                  }
                }
                const XH = HH.longAnimationFrameEntries.at(-1),
                  GH = XH ? XH.startTime + XH.duration : 0;
                GH >= BH + AH + rH && (CH = LH - GH), SH && hH && (HH.longestScript = {
                  entry: SH,
                  subpart: hH,
                  intersectingDuration: EH
                }), HH.totalScriptDuration = tH, HH.totalStyleAndLayoutDuration = zH, HH.totalPaintDuration = CH, HH.totalUnattributedDuration = LH - BH - tH - zH - CH
              })(YH), Object.assign(HH, {
                attribution: YH
              })
            })(BH))
          }), BH)
      };
    class VA {
      m;
      u;
      l(HH) {
        this.m?.(HH)
      }
    }
    const OA = [2500, 4e3];
    let bA = 50;
    const kA = [];
    AA(["resource"], (HH => {
      for (const BH of HH) kA.push(BH), kA.length > bA && kA.shift()
    }));
    const mA = [800, 1800],
      oA = HH => {
        document.prerendering ? zA((() => oA(HH))) : "complete" !== document.readyState ? addEventListener("load", (() => oA(HH)), !0) : setTimeout(HH)
      },
      IA = "load_state",
      fA = "time_to_first_byte";
    var lA = class {
        constructor(HH, BH) {
          this.corePushMeasurement = HH, this.webVitalConfig = BH
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var HH;
          ! function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const LH = DL(BH = Object.assign({}, BH), gL),
              AH = new WeakMap;
            LH.t = HH => {
                if (HH?.sources?.length) {
                  const LH = GA(HH.sources),
                    rH = LH?.node;
                  if (rH) {
                    const HH = BH.generateTarget?.(rH) ?? nL(rH);
                    AH.set(LH, HH)
                  }
                }
              },
              function(HH) {
                let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const LH = BA();
                EA(hA((() => {
                  let AH, rH = LA("CLS", 0);
                  const SH = DL(BH, gL),
                    hH = (LH, hH, tH, zH, CH) => {
                      rH = LA("CLS", 0, LH, hH, tH, zH, CH), SH.o = 0, AH = aL(HH, rH, XA, BH.reportAllChanges)
                    },
                    tH = function() {
                      let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      SH.o > rH.value && (rH.value = SH.o, rH.entries = SH.i), AH(HH)
                    },
                    zH = HH => {
                      tH(!0), hH("soft-navigation", HH.navigationId, HH.interactionId, HH.name, HH.startTime)
                    },
                    CH = HH => {
                      for (const BH of HH) "soft-navigation" !== BH.entryType ? SH.l(BH) : zH(BH);
                      tH()
                    },
                    EH = ["layout-shift"];
                  rA(BH) && EH.push("soft-navigation");
                  const XH = AA(EH, CH);
                  XH && (AH = aL(HH, rH, XA, BH.reportAllChanges), LH.onHidden((() => {
                    CH(XH.takeRecords()), AH(!0)
                  })), dL((() => {
                    hH("back-forward-cache", rH.navigationId, rH.navigationInteractionId, rH.navigationURL, ZL()), sL(AH)
                  })), setTimeout(AH))
                })))
              }((BH => {
                HH((HH => {
                  let BH = {};
                  if (HH.entries.length) {
                    const LH = HH.entries.reduce(((HH, BH) => HH.value > BH.value ? HH : BH));
                    if (LH?.sources?.length) {
                      const HH = GA(LH.sources);
                      HH && (BH = {
                        largestShiftTarget: AH.get(HH),
                        largestShiftTime: LH.startTime,
                        largestShiftValue: LH.value,
                        largestShiftSource: HH,
                        largestShiftEntry: LH,
                        loadState: RL(LH.startTime)
                      })
                    }
                  }
                  return Object.assign(HH, {
                    attribution: BH
                  })
                })(BH))
              }), BH)
          }((HH => {
            const {
              loadState: BH,
              largestShiftValue: LH,
              largestShiftTime: AH,
              largestShiftTarget: rH
            } = HH.attribution, SH = this.buildInitialValues(HH);
            this.addIfPresent(SH, "largest_shift_value", LH), this.addIfPresent(SH, "largest_shift_time", AH);
            const hH = this.buildInitialContext(HH);
            this.addIfPresent(hH, IA, BH), this.addIfPresent(hH, "largest_shift_target", rH), this.pushMeasurement(SH, hH)
          }), {
            reportAllChanges: null === (HH = this.webVitalConfig) || void 0 === HH ? void 0 : HH.reportAllChanges
          })
        }
        measureFCP() {
          var HH;
          ! function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const LH = DL(BH = Object.assign({}, BH), tA);
            rA(BH) && (LH.u = new Map), EA((BH => {
              HH((HH => {
                let BH = {
                  timeToFirstByte: 0,
                  firstByteToFCP: HH.value,
                  loadState: RL(ZL())
                };
                if ("soft-navigation" !== HH.navigationType) {
                  if (HH.entries.length) {
                    const LH = NL(),
                      AH = HH.entries.at(-1);
                    if (LH) {
                      const rH = LH.responseStart,
                        SH = LH.activationStart || 0,
                        hH = Math.max(0, rH - SH);
                      BH = {
                        timeToFirstByte: hH,
                        firstByteToFCP: HH.value - hH,
                        loadState: RL(HH.entries[0].startTime),
                        navigationEntry: LH,
                        fcpEntry: AH
                      }
                    }
                  }
                } else {
                  const AH = LH.u?.get(HH.navigationId);
                  AH && (BH = {
                    timeToFirstByte: 0,
                    firstByteToFCP: HH.value,
                    loadState: "complete",
                    navigationEntry: AH
                  })
                }
                return Object.assign(HH, {
                  attribution: BH
                })
              })(BH))
            }), BH)
          }((HH => {
            const {
              firstByteToFCP: BH,
              timeToFirstByte: LH,
              loadState: AH
            } = HH.attribution, rH = this.buildInitialValues(HH);
            this.addIfPresent(rH, "first_byte_to_fcp", BH), this.addIfPresent(rH, fA, LH);
            const SH = this.buildInitialContext(HH);
            this.addIfPresent(SH, IA, AH), this.pushMeasurement(rH, SH)
          }), {
            reportAllChanges: null === (HH = this.webVitalConfig) || void 0 === HH ? void 0 : HH.reportAllChanges
          })
        }
        measureINP() {
          var HH;
          UA((HH => {
            var BH;
            const {
              interactionTime: LH,
              presentationDelay: AH,
              inputDelay: rH,
              processingDuration: SH,
              nextPaintTime: hH,
              loadState: tH,
              interactionTarget: zH,
              interactionType: CH,
              totalScriptDuration: EH,
              totalStyleAndLayoutDuration: XH,
              totalPaintDuration: GH,
              totalUnattributedDuration: YH,
              longestScript: uH
            } = HH.attribution, QH = this.buildInitialValues(HH);
            this.addIfPresent(QH, "interaction_time", LH), this.addIfPresent(QH, "presentation_delay", AH), this.addIfPresent(QH, "input_delay", rH), this.addIfPresent(QH, "processing_duration", SH), this.addIfPresent(QH, "next_paint_time", hH), this.addNumberIfDefined(QH, "total_script_duration", EH), this.addNumberIfDefined(QH, "total_style_and_layout_duration", XH), this.addNumberIfDefined(QH, "total_paint_duration", GH), this.addNumberIfDefined(QH, "total_unattributed_duration", YH), this.addNumberIfDefined(QH, "longest_script_intersecting_duration", null === uH || void 0 === uH ? void 0 : uH.intersectingDuration);
            const WH = this.buildInitialContext(HH);
            this.addIfPresent(WH, IA, tH), this.addIfPresent(WH, "interaction_target", zH), this.addIfPresent(WH, "interaction_type", CH), this.addIfPresent(WH, "longest_script_subpart", null === uH || void 0 === uH ? void 0 : uH.subpart), this.addIfPresent(WH, "longest_script_invoker_type", null === uH || void 0 === uH ? void 0 : uH.entry.invokerType), (null === (BH = this.webVitalConfig) || void 0 === BH ? void 0 : BH.trackAttributionSources) && (this.addIfPresent(WH, "longest_script_invoker", null === uH || void 0 === uH ? void 0 : uH.entry.invoker), this.addIfPresent(WH, "longest_script_source_url", null === uH || void 0 === uH ? void 0 : uH.entry.sourceURL), this.addIfPresent(WH, "longest_script_source_function_name", null === uH || void 0 === uH ? void 0 : uH.entry.sourceFunctionName), this.addIfPresent(WH, "longest_script_source_char_position", void 0 !== (null === uH || void 0 === uH ? void 0 : uH.entry.sourceCharPosition) ? String(uH.entry.sourceCharPosition) : void 0)), this.pushMeasurement(QH, WH)
          }), {
            reportAllChanges: null === (HH = this.webVitalConfig) || void 0 === HH ? void 0 : HH.reportAllChanges
          })
        }
        measureLCP() {
          var HH;
          ! function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (BH = Object.assign({}, BH)).resourceBufferSize && (bA = BH.resourceBufferSize);
            const LH = DL(BH, VA),
              AH = new WeakMap;
            rA(BH) && (LH.u = new Map), LH.m = HH => {
                const LH = HH.element;
                if (LH) {
                  const rH = BH.generateTarget?.(LH) ?? nL(LH);
                  AH.set(HH, rH)
                } else HH.id && AH.set(HH, `#${HH.id}`)
              },
              function(HH) {
                let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  LH = !1;
                const AH = rA(BH);
                zA((() => {
                  let rH, SH = BA(),
                    hH = LA("LCP");
                  const tH = DL(BH, VA),
                    zH = (AH, tH, zH, CH, EH) => {
                      hH = LA("LCP", -1, AH, tH, zH, CH, EH), rH = aL(HH, hH, OA, BH.reportAllChanges), LH = !1, "soft-navigation" === AH && (SH = BA(!0))
                    },
                    CH = HH => {
                      tH.u && HH.navigationId && SA(tH.u, HH), LH || rH(!0), zH("soft-navigation", HH.navigationId, HH.interactionId, HH.name, HH.startTime);
                      const BH = HH.getLargestInteractionContentfulPaint?.();
                      BH && EH([BH])
                    },
                    EH = HH => {
                      BH.reportAllChanges || AH || (HH = HH.slice(-1));
                      for (const BH of HH) {
                        if (!BH) continue;
                        if ("soft-navigation" === BH.entryType) {
                          CH(BH);
                          continue
                        }
                        let HH = 0,
                          LH = [],
                          AH = BH.startTime;
                        if ("largest-contentful-paint" === BH.entryType) HH = Math.max(BH.startTime - JL(), 0), tH.l(BH), LH = [BH];
                        else if ("interaction-contentful-paint" === BH.entryType) {
                          const rH = BH;
                          if (!hH.navigationId) continue;
                          if ("interactionId" in rH && rH.interactionId != hH.navigationInteractionId) continue;
                          AH = rH.largestContentfulPaint?.renderTime || 0, HH = Math.max(AH - BH.startTime, 0), rH.largestContentfulPaint && (tH.l(rH.largestContentfulPaint), LH = [rH.largestContentfulPaint])
                        }
                        AH < SH.firstHiddenTime && (hH.value = HH, hH.entries = LH, rH())
                      }
                    },
                    XH = ["largest-contentful-paint"];
                  AH && XH.push("interaction-contentful-paint", "soft-navigation");
                  const GH = AA(XH, EH);
                  if (GH) {
                    rH = aL(HH, hH, OA, BH.reportAllChanges);
                    const SH = ["keydown", "click", "visibilitychange"],
                      tH = HH => {
                        if (HH.isTrusted && !LH) {
                          const HH = hH.id;
                          PA((() => {
                            if (!LH) {
                              if (!AH) {
                                GH.disconnect();
                                for (const HH of SH) removeEventListener(HH, tH, {
                                  capture: !0
                                })
                              }
                              HH === hH.id && (LH = !0, rH(!0))
                            }
                          }))
                        }
                      };
                    for (const HH of SH) addEventListener(HH, tH, {
                      capture: !0
                    });
                    dL((AH => {
                      zH("back-forward-cache", hH.navigationId, hH.navigationInteractionId, hH.navigationURL, ZL()), rH = aL(HH, hH, OA, BH.reportAllChanges), sL((() => {
                        hH.value = performance.now() - AH.timeStamp, LH = !0, rH(!0)
                      }))
                    }))
                  }
                }))
              }((BH => {
                HH((HH => {
                  let BH = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: HH.value
                  };
                  if (HH.entries.length) {
                    const rH = HH.entries.at(-1),
                      SH = HH => HH.name === rH.url && (HH.requestStart || HH.startTime) <= rH.startTime,
                      hH = rH.url && (kA.findLast(SH) || performance.getEntriesByType("resource").findLast(SH));
                    let tH;
                    BH.target = AH.get(rH), BH.lcpEntry = rH, rH.url && (BH.url = rH.url), hH && (BH.lcpResourceEntry = hH);
                    let zH = 0,
                      CH = 0;
                    if ("soft-navigation" !== HH.navigationType ? (tH = NL(), zH = tH?.activationStart ?? 0, CH = tH?.responseStart ?? 0) : (zH = HH.navigationStartTime || 0, tH = LH.u?.get(HH.navigationId)), tH) {
                      const LH = Math.max(0, CH - zH),
                        AH = Math.max(LH, hH ? (hH.requestStart || hH.startTime) - zH : 0),
                        rH = Math.min(HH.value, Math.max(AH, hH ? hH.responseEnd - zH : 0));
                      BH = {
                        ...BH,
                        timeToFirstByte: LH,
                        resourceLoadDelay: AH - LH,
                        resourceLoadDuration: rH - AH,
                        elementRenderDelay: HH.value - rH,
                        navigationEntry: tH
                      }
                    }
                  }
                  return Object.assign(HH, {
                    attribution: BH
                  })
                })(BH))
              }), BH)
          }((HH => {
            var BH;
            const {
              elementRenderDelay: LH,
              resourceLoadDelay: AH,
              resourceLoadDuration: rH,
              timeToFirstByte: SH,
              target: hH,
              url: tH,
              lcpResourceEntry: zH
            } = HH.attribution, CH = this.buildInitialValues(HH);
            this.addIfPresent(CH, "element_render_delay", LH), this.addIfPresent(CH, "resource_load_delay", AH), this.addIfPresent(CH, "resource_load_duration", rH), this.addIfPresent(CH, fA, SH);
            const EH = this.buildInitialContext(HH);
            this.addIfPresent(EH, "element", hH), (null === (BH = this.webVitalConfig) || void 0 === BH ? void 0 : BH.trackAttributionSources) && (this.addIfPresent(EH, "resource_url", tH), this.addIfPresent(EH, "resource_delivery_type", null === zH || void 0 === zH ? void 0 : zH.deliveryType), this.addIfPresent(EH, "resource_initiator_type", null === zH || void 0 === zH ? void 0 : zH.initiatorType)), this.pushMeasurement(CH, EH)
          }), {
            reportAllChanges: null === (HH = this.webVitalConfig) || void 0 === HH ? void 0 : HH.reportAllChanges
          })
        }
        measureTTFB() {
          var HH;
          ! function(HH) {
            ! function(HH) {
              let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const LH = rA(BH);
              let AH = LA("TTFB"),
                rH = aL(HH, AH, mA, BH.reportAllChanges);
              oA((() => {
                const SH = NL();
                if (SH) {
                  const hH = SH.responseStart;
                  AH.value = Math.max(hH - JL(), 0), AH.entries = [SH], rH(!0), dL((() => {
                    AH = LA("TTFB", 0, "back-forward-cache", AH.navigationId, AH.navigationInteractionId, AH.navigationURL, ZL()), rH = aL(HH, AH, mA, BH.reportAllChanges), rH(!0)
                  })), LH && AA(["soft-navigation"], (LH => {
                    LH.forEach((LH => {
                      LH.navigationId && (AH = LA("TTFB", 0, "soft-navigation", LH.navigationId, LH.interactionId, LH.name, LH.startTime), AH.entries = [LH], rH = aL(HH, AH, mA, BH.reportAllChanges), rH(!0))
                    }))
                  }), BH)
                }
              }))
            }((BH => {
              HH((HH => {
                const BH = HH.entries[0];
                let LH = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: BH
                };
                if (HH.entries.length && BH instanceof PerformanceNavigationTiming) {
                  const AH = BH.activationStart || 0,
                    rH = Math.max((BH.workerStart || BH.fetchStart || 0) - AH, 0),
                    SH = Math.max(BH.domainLookupStart - AH, 0),
                    hH = Math.max(BH.connectStart - AH, 0),
                    tH = Math.max(BH.connectEnd - AH, 0);
                  LH = {
                    waitingDuration: rH,
                    cacheDuration: SH - rH,
                    dnsDuration: hH - SH,
                    connectionDuration: tH - hH,
                    requestDuration: HH.value - tH,
                    navigationEntry: BH
                  }
                }
                return Object.assign(HH, {
                  attribution: LH
                })
              })(BH))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((HH => {
            const {
              dnsDuration: BH,
              connectionDuration: LH,
              requestDuration: AH,
              waitingDuration: rH,
              cacheDuration: SH
            } = HH.attribution, hH = this.buildInitialValues(HH);
            this.addIfPresent(hH, "dns_duration", BH), this.addIfPresent(hH, "connection_duration", LH), this.addIfPresent(hH, "request_duration", AH), this.addIfPresent(hH, "waiting_duration", rH), this.addIfPresent(hH, "cache_duration", SH);
            const tH = this.buildInitialContext(HH);
            this.pushMeasurement(hH, tH)
          }), {
            reportAllChanges: null === (HH = this.webVitalConfig) || void 0 === HH ? void 0 : HH.reportAllChanges
          })
        }
        buildInitialValues(HH) {
          return {
            [HH.name.toLowerCase()]: HH.value,
            delta: HH.delta
          }
        }
        buildInitialContext(HH) {
          var BH;
          const LH = null !== (BH = HB("com.grafana.faro.lastNavigationId", iH)) && void 0 !== BH ? BH : eL;
          return {
            id: HH.id,
            rating: HH.rating,
            navigation_type: HH.navigationType,
            navigation_entry_id: LH
          }
        }
        pushMeasurement(HH, BH) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: HH
          }, {
            context: BH
          })
        }
        addIfPresent(HH, BH, LH) {
          LH && (HH[BH] = LH)
        }
        addNumberIfDefined(HH, BH, LH) {
          void 0 !== LH && (HH[BH] = LH)
        }
      },
      KA = class extends BL {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = LL
        }
        initialize() {
          this.logDebug("Initializing"), new lA(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const cA = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function eA() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const BH of HH)
        if ("traceparent" === BH.name) {
          if (!cA.test(BH.description)) continue;
          const [, HH, LH] = BH.description.split("-");
          if (null != HH && null != LH) return {
            traceId: HH,
            spanId: LH
          };
          break
        }
    }

    function qA(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: LH,
        monoNow: AH
      } = BH;
      return Math.min(LH, LH - (AH - HH))
    }

    function gA(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [LH, AH] of Object.entries(BH)) {
        const BH = HH[LH];
        return null != BH && (IH(AH) ? AH.includes(BH) : BH === AH)
      }
      return !0
    }

    function NA(HH) {
      const {
        connectEnd: BH,
        connectStart: LH,
        decodedBodySize: AH,
        domainLookupEnd: rH,
        domainLookupStart: SH,
        duration: hH,
        encodedBodySize: tH,
        fetchStart: zH,
        initiatorType: CH,
        name: EH,
        nextHopProtocol: XH,
        redirectEnd: GH,
        redirectStart: YH,
        renderBlockingStatus: uH,
        requestStart: QH,
        responseEnd: WH,
        responseStart: MH,
        responseStatus: xH,
        secureConnectionStart: vH,
        transferSize: PH,
        workerStart: TH
      } = HH;
      return {
        name: EH,
        httpHost: jA(EH),
        duration: nA(hH),
        tcpHandshakeTime: nA(BH - LH),
        dnsLookupTime: nA(rH - SH),
        tlsNegotiationTime: nA(BH - vH),
        responseStatus: nA(xH),
        redirectTime: nA(GH - YH),
        requestTime: nA(MH - QH),
        responseTime: nA(WH - MH),
        fetchTime: nA(WH - zH),
        serviceWorkerTime: nA(TH > 0 ? zH - TH : 0),
        decodedBodySize: nA(AH),
        encodedBodySize: nA(tH),
        cacheHitStatus: function() {
          let HH = "fullLoad";
          0 === PH ? AH > 0 && (HH = "cache") : null != xH ? 304 === xH && (HH = "conditionalFetch") : tH > 0 && PH < tH && (HH = "conditionalFetch");
          return HH
        }(),
        renderBlockingStatus: nA(uH),
        protocol: XH,
        initiatorType: CH,
        visibilityState: document.visibilityState,
        ttfb: nA(MH - QH),
        transferSize: nA(PH)
      }
    }

    function RA(HH) {
      const {
        activationStart: BH,
        domComplete: LH,
        domContentLoadedEventEnd: AH,
        domContentLoadedEventStart: rH,
        domInteractive: SH,
        fetchStart: hH,
        loadEventEnd: tH,
        loadEventStart: zH,
        responseStart: CH,
        type: EH
      } = HH, XH = function() {
        var HH;
        return null != (null === (HH = performance.timing) || void 0 === HH ? void 0 : HH.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return EB(EB({}, NA(HH)), {}, {
        pageLoadTime: nA(LH - hH),
        documentParsingTime: nA(XH ? SH - XH : null),
        domProcessingTime: nA(LH - SH),
        domContentLoadHandlerTime: nA(AH - rH),
        onLoadTime: nA(tH - zH),
        ttfb: nA(Math.max(CH - (null !== BH && void 0 !== BH ? BH : 0), 0)),
        type: EH
      })
    }

    function jA(HH) {
      try {
        return new URL(HH).host || eL
      } catch (BH) {
        return eL
      }
    }

    function nA(HH) {
      return null == HH ? eL : "number" === typeof HH ? Math.round(HH > 0 ? HH : 0).toString() : HH.toString()
    }
    const FA = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function DA(HH, BH, LH, AH, rH, SH, hH) {
      try {
        var tH = HH[SH](hH),
          zH = tH.value
      } catch (HH) {
        return void LH(HH)
      }
      tH.done ? BH(zH) : Promise.resolve(zH).then(AH, rH)
    }

    function wA(HH) {
      return function() {
        var BH = this,
          LH = arguments;
        return new Promise((function(AH, rH) {
          var SH = HH.apply(BH, LH);

          function hH(HH) {
            DA(SH, AH, rH, hH, tH, "next", HH)
          }

          function tH(HH) {
            DA(SH, AH, rH, hH, tH, "throw", HH)
          }
          hH(void 0)
        }))
      }
    }
    const ZA = new xL;
    var dA = class extends BL {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = LL
      }
      initialize() {
        var HH = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let BH = !1;
        const LH = () => {
          ! function(HH) {
            if ("complete" === document.readyState) HH();
            else {
              const BH = () => {
                "complete" === document.readyState && (HH(), document.removeEventListener("readystatechange", BH))
              };
              document.addEventListener("readystatechange", BH)
            }
          }(wA((function*() {
            if (BH) return;
            const LH = HH.api.pushEvent,
              {
                faroNavigationId: AH
              } = yield function(HH) {
                let BH;
                const LH = new Promise((HH => {
                  BH = HH
                }));
                return new PerformanceObserver((LH => {
                  var AH;
                  const [rH] = LH.getEntries();
                  if (null == rH || sH(rH.name)) return;
                  const SH = rH.toJSON();
                  let hH = eA(null === SH || void 0 === SH ? void 0 : SH.serverTiming);
                  const tH = null !== (AH = HB("com.grafana.faro.lastNavigationId", iH)) && void 0 !== AH ? AH : eL,
                    zH = EB(EB({}, RA(SH)), {}, {
                      faroNavigationId: MB(),
                      faroPreviousNavigationId: tH
                    });
                  BB("com.grafana.faro.lastNavigationId", zH.faroNavigationId, iH), HH("faro.performance.navigation", zH, void 0, {
                    spanContext: hH,
                    timestampOverwriteMs: qA(SH.startTime)
                  }), BH(zH)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), LH
              }(LH);
            BH || null == AH || function(HH, BH, LH, AH) {
              const rH = AH.trackResources;
              new PerformanceObserver((AH => {
                const SH = AH.getEntries(),
                  hH = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const tH of SH) {
                  if (sH(tH.name)) continue;
                  null === LH || void 0 === LH || LH.notify({
                    type: "resource"
                  });
                  const AH = tH.toJSON();
                  let SH = eA(null === AH || void 0 === AH ? void 0 : AH.serverTiming);
                  (null == rH && gA(AH, FA) || rH) && BH("faro.performance.resource", EB(EB({}, NA(AH)), {}, {
                    faroNavigationId: HH,
                    faroResourceId: MB()
                  }), void 0, {
                    spanContext: SH,
                    timestampOverwriteMs: qA(AH.startTime, hH)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(AH, LH, ZA, HH.config)
          })))
        };
        this.cancelInitialization = () => {
          BH = !0, document.removeEventListener("prerenderingchange", LH)
        }, document.prerendering ? document.addEventListener("prerenderingchange", LH, {
          once: !0
        }) : LH()
      }
      destroy() {
        var HH;
        null === (HH = this.cancelInitialization) || void 0 === HH || HH.call(this), this.cancelInitialization = void 0
      }
    };
    const aA = "data-faro-user-action-name",
      sA = aA.replace(/-name$/, "-timeout"),
      JA = 1e3;

    function iA(HH) {
      return `data-${(HH.startsWith("data-")?HH.slice(5):HH).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function pA(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB;
      if (void 0 === HH) return BH;
      let AH = NaN;
      try {
        AH = "string" === typeof HH && "" === HH.trim() ? NaN : Number(HH)
      } catch (rH) {}
      return !Number.isFinite(AH) || AH <= 0 ? (LH(`initialActivityTimeout must be a finite number greater than zero; using ${BH} ms`), BH) : AH > 1e3 ? (LH(`initialActivityTimeout cannot exceed ${JA} ms; clamping to the maximum`), JA) : AH
    }

    function yA(HH, BH, LH) {
      return void 0 !== HH && window.clearTimeout(HH), window.setTimeout((() => {
        BH()
      }), LH)
    }

    function Hr(HH) {
      return HH.type === ML
    }
    let Br, Lr;

    function Ar() {
      return Br || (Br = new xL), Lr || (Lr = new MutationObserver(((HH, BH) => {
        Br.notify({
          type: "dom-mutation"
        })
      })), Lr.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Br
    }
    const rr = "fetch",
      Sr = "xhr";
    let hr, tr, zr, Cr, Er = !1;

    function Xr() {
      if (hr) return hr;

      function HH(HH) {
        hr.notify({
          type: WL,
          request: HH
        })
      }

      function BH(HH) {
        hr.notify({
          type: ML,
          request: HH
        })
      }
      return hr = new xL, Er || (! function(HH) {
        let {
          onRequestEnd: BH,
          onRequestStart: LH
        } = HH;
        zr || (zr = window.fetch);
        window.fetch = function() {
          var HH, AH;
          const rH = null !== (HH = JH(arguments[0])) && void 0 !== HH ? HH : "",
            SH = sH(rH),
            hH = (null !== (AH = arguments[1]) && void 0 !== AH ? AH : {}).method,
            tH = MB();
          return SH || LH({
            url: rH,
            method: hH,
            requestId: tH,
            apiType: rr
          }), zr.apply(this, arguments).then((HH => (SH || BH({
            url: rH,
            method: hH,
            requestId: tH,
            apiType: rr
          }), HH))).catch((HH => {
            throw SH || BH({
              url: rH,
              method: hH,
              requestId: tH,
              apiType: rr
            }), HH
          }))
        }
      }({
        onRequestStart: HH,
        onRequestEnd: BH
      }), function(HH) {
        let {
          onRequestStart: BH,
          onRequestEnd: LH
        } = HH;
        tr || (tr = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const HH = arguments[1],
            AH = sH(HH),
            rH = arguments[0],
            SH = MB();
          this.addEventListener("loadstart", (function() {
            AH || BH({
              url: HH,
              method: rH,
              requestId: SH,
              apiType: Sr
            })
          })), this.addEventListener("load", (function() {
            AH || LH({
              url: HH,
              method: rH,
              requestId: SH,
              apiType: Sr
            })
          })), this.addEventListener("error", (function() {
            AH || LH({
              url: HH,
              method: rH,
              requestId: SH,
              apiType: Sr
            })
          })), this.addEventListener("abort", (function() {
            AH || LH({
              url: HH,
              method: rH,
              requestId: SH,
              apiType: Sr
            })
          })), tr.apply(this, arguments)
        }
      }({
        onRequestStart: HH,
        onRequestEnd: BH
      }), Er = !0), hr
    }
    let Gr, Yr = !1;
    let ur = function(HH) {
      return HH[HH.Started = 0] = "Started", HH[HH.Halted = 1] = "Halted", HH[HH.Cancelled = 2] = "Cancelled", HH[HH.Ended = 3] = "Ended", HH
    }({});
    var Qr = class {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = HH, this.logDebug = BH, this.initialActivityTimeout = LH, this.http = Xr(), this.dom = Ar(), this.perf = (Cr || (Cr = new xL), Yr || (Gr = ZA.subscribe((HH => {
          "resource" === HH.type && Cr.notify({
            type: "resource-entry"
          })
        })), Yr = !0), Cr), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new xL).merge(this.http, this.dom, this.perf).takeWhile((() => [ur.Started, ur.Halted].includes(this.userAction.getState()))).filter((HH => !!(this.userAction.getState() !== ur.Halted || Hr(HH) && this.runningRequests.has(HH.request.requestId)))).subscribe((HH => {
          (function(HH) {
            return HH.type === WL
          })(HH) && this.runningRequests.set(HH.request.requestId, HH.request), Hr(HH) && this.runningRequests.delete(HH.request.requestId), Hr(HH) ? this.userAction.getState() === ur.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((HH => [ur.Ended, ur.Cancelled].includes(HH))).first().subscribe((() => this.cleanup())), this.startupTid = yA(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === ur.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === ur.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = yA(this.haltTid, (() => {
          this.userAction.getState() === ur.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var HH, BH;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (HH = this.allMonitorsSub) || void 0 === HH || HH.unsubscribe(), null === (BH = this.stateSub) || void 0 === BH || BH.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(HH) {
        void 0 !== HH && window.clearTimeout(HH)
      }
    };

    function Wr(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB;
      var LH;
      const {
        api: AH,
        config: rH,
        internalLogger: SH
      } = HH, hH = pA(null === (LH = rH.userActionsInstrumentation) || void 0 === LH ? void 0 : LH.initialActivityTimeout, 100, BH);
      return {
        processUserEvent: function(HH) {
          var BH, LH;
          const SH = null !== (BH = null === (LH = rH.userActionsInstrumentation) || void 0 === LH ? void 0 : LH.dataAttributeName) && void 0 !== BH ? BH : aA,
            hH = HH.target;
          if (!(hH instanceof Element)) return;
          const tH = function(HH, BH) {
              let LH = HH;
              for (; LH;) {
                if (LH.hasAttribute(BH)) return LH;
                LH = LH.parentElement
              }
              return null
            }(hH, iA(SH)),
            zH = function(HH, BH) {
              if (!HH) return;
              const LH = function(HH) {
                  return iA(HH).slice(5).replace(/-(.)/g, ((HH, BH) => BH.toUpperCase()))
                }(BH),
                AH = HH.dataset;
              for (const rH in AH)
                if (rH === LH) return AH[rH]
            }(tH, SH);
          if (!tH || !zH) return;
          const CH = function(HH, BH) {
            const LH = HH.getAttribute(function(HH) {
              const BH = iA(HH);
              return BH.endsWith("-name") ? `${BH.slice(0,-5)}-timeout` : `${BH}-timeout`
            }(BH));
            return null === LH ? void 0 : Number(LH)
          }(tH, SH);
          AH.startUserAction(zH, {}, {
            triggerName: HH.type,
            initialActivityTimeout: CH
          })
        },
        processUserActionStarted: function(HH, LH) {
          const AH = HH,
            rH = pA(LH, hH, BH);
          new Qr(AH, SH.debug, rH).attach()
        }
      }
    }
    const Mr = "user_action_start",
      xr = {
        Normal: "normal",
        Critical: "critical"
      };
    var vr = class {
        constructor() {
          this.buffer = []
        }
        addItem(HH) {
          this.buffer.push(HH)
        }
        flushBuffer(HH) {
          if (oH(HH))
            for (const BH of this.buffer) HH(BH);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Pr = class extends xL {
        constructor(HH) {
          let {
            name: BH,
            parentId: LH,
            trigger: AH,
            transports: rH,
            attributes: SH,
            trackUserActionsExcludeItem: hH,
            importance: tH = xr.Normal,
            pushEvent: zH
          } = HH;
          super(), this.name = BH, this.attributes = SH, this.id = MB(), this.trigger = AH, this.parentId = null !== LH && void 0 !== LH ? LH : this.id, this.trackUserActionsExcludeItem = hH, this.importance = tH, this._pushEvent = zH, this._itemBuffer = new vr, this._transports = rH, this._state = 0, this._start()
        }
        addItem(HH) {
          return 0 === this._state && (this._itemBuffer.addItem(HH), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = GB(), this._startTimeMono = YB())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((HH => {
            this._transports.execute(HH)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const HH = GB(),
            BH = YB() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((HH => {
            if (function(HH, BH) {
                return (null === BH || void 0 === BH ? void 0 : BH(HH)) || "measurement" === HH.type && "web-vitals" === HH.payload.type
              }(HH, this.trackUserActionsExcludeItem)) return void this._transports.execute(HH);
            const BH = pB(pB({}, HH), {}, {
              payload: pB(pB({}, HH.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(BH)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", pB({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: HH.toString(),
            userActionDuration: BH.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, qB(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: HH => (HH.action = {
              id: this.id,
              name: this.name
            }, HH)
          })
        }
        getState() {
          return this._state
        }
      };
    const Tr = new xL;

    function Ur(HH, BH) {
      return !!HH && (0 === (null === HH || void 0 === HH ? void 0 : HH.getState()) && (HH.addItem(BH), !0))
    }
    var Vr = class extends BL {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = LL
        }
        initialize() {
          const {
            processUserEvent: HH,
            processUserActionStarted: BH
          } = Wr(QH, (HH => this.logWarn(HH)));
          this._processUserEvent = HH, this._processKeydown = BH => {
            [" ", "Enter"].includes(BH.key) && HH(BH)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Tr.subscribe((HH => {
            let {
              type: LH,
              userAction: AH,
              initialActivityTimeout: rH
            } = HH;
            "user_action_start" === LH && BH(AH, rH)
          }))
        }
        destroy() {
          var HH;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (HH = this._userActionSub) || void 0 === HH || HH.unsubscribe()
        }
      },
      Or = class extends BL {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = LL, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(HH) {
          const BH = {
            blockedURI: HH.blockedURI,
            columnNumber: HH.columnNumber,
            disposition: HH.disposition,
            documentURI: HH.documentURI,
            effectiveDirective: HH.effectiveDirective,
            lineNumber: HH.lineNumber,
            originalPolicy: HH.originalPolicy,
            referrer: HH.referrer,
            sample: HH.sample,
            sourceFile: HH.sourceFile,
            statusCode: HH.statusCode,
            violatedDirective: HH.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", qB(BH))
        }
      };
    var br = class extends xL {
      constructor(HH, BH) {
        var LH, AH, rH, SH;
        super(), this._tracking = !1, this.eventsObservable = HH, this._options = {
          inactivityMs: null !== (LH = null === BH || void 0 === BH ? void 0 : BH.inactivityMs) && void 0 !== LH ? LH : 100,
          drainTimeoutMs: null !== (AH = null === BH || void 0 === BH ? void 0 : BH.drainTimeoutMs) && void 0 !== AH ? AH : 1e4,
          isOperationStart: null !== (rH = null === BH || void 0 === BH ? void 0 : BH.isOperationStart) && void 0 !== rH ? rH : () => {},
          isOperationEnd: null !== (SH = null === BH || void 0 === BH ? void 0 : BH.isOperationEnd) && void 0 !== SH ? SH : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((HH => {
          var BH;
          this._lastEventTime = YB(), null === (BH = this._currentEvents) || void 0 === BH || BH.push(HH);
          const LH = this._options.isOperationStart(HH);
          var AH;
          LH && (null === (AH = this._activeOperations) || void 0 === AH || AH.set(LH, !0));
          const rH = this._options.isOperationEnd(HH);
          var SH;
          rH && (null === (SH = this._activeOperations) || void 0 === SH || SH.delete(rH));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = YB(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let HH;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), HH = this.hasActiveOperations() ? YB() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: HH
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = kr(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = kr(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(HH) {
        HH && clearTimeout(HH)
      }
    };

    function kr(HH, BH, LH) {
      return HH && clearTimeout(HH), HH = setTimeout((() => {
        BH()
      }), LH)
    }
    let mr;
    const or = new Set,
      Ir = new Map;
    let fr, lr, Kr, cr, er, qr, gr, Nr, Rr = !1;
    var jr = class extends BL {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = LL
      }
      initialize() {
        const HH = Xr(),
          BH = Ar(),
          LH = function() {
            function HH(HH, BH) {
              const LH = null !== BH && void 0 !== BH ? BH : location.href;
              LH !== lr && (fr.notify({
                type: "url-change",
                from: lr,
                to: LH,
                trigger: HH
              }), lr = LH)
            }
            if (fr || (fr = new xL, lr = location.href), !Rr)
              if ("navigation" in window && "NavigateEvent" in window) {
                gr = BH => {
                  try {
                    const LH = null === BH || void 0 === BH ? void 0 : BH.destination;
                    (null === LH || void 0 === LH ? void 0 : LH.sameDocument) && "string" === typeof LH.url && HH("navigate", LH.url)
                  } catch (LH) {}
                }, window.navigation.addEventListener("navigate", gr);
                const BH = window.NavigateEvent;
                BH && BH.prototype && "function" === typeof BH.prototype.intercept && (Nr || (Nr = BH.prototype.intercept), BH.prototype.intercept = function(BH) {
                  try {
                    const BH = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      LH = null === this || void 0 === this ? void 0 : this.destination;
                    BH && LH && !1 === LH.sameDocument && "string" === typeof LH.url && HH("navigate-intercept", LH.url)
                  } catch (LH) {}
                  return Nr.call(this, BH)
                }), Rr = !0
              } else Kr || (Kr = window.history.pushState), window.history.pushState = function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                const rH = Kr.apply(window.history, LH);
                return HH("pushState"), rH
              }, cr || (cr = window.history.replaceState), window.history.replaceState = function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                const rH = cr.apply(window.history, LH);
                return HH("replaceState"), rH
              }, er = () => HH("popstate"), qr = () => HH("hashchange"), window.addEventListener("popstate", er), window.addEventListener("hashchange", qr), Rr = !0;
            return fr
          }(),
          AH = (rH = ["pointerdown", "keydown"], mr || (mr = new xL), rH.forEach((HH => {
            if (!or.has(HH)) {
              const BH = () => {
                mr.notify({
                  type: "interaction",
                  name: HH
                })
              };
              window.addEventListener(HH, BH), or.add(HH), Ir.set(HH, BH)
            }
          })), mr);
        var rH;
        const SH = new br((new xL).merge(HH, BH, LH), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: HH => function(HH) {
            return HH.type === WL
          }(HH) ? HH.request.requestId : void 0,
          isOperationEnd: HH => function(HH) {
            return HH.type === ML
          }(HH) ? HH.request.requestId : void 0
        });
        SH.filter((HH => "tracking-ended" === HH.message)).subscribe((HH => {
          var BH, LH;
          if ((null === (BH = HH.events) || void 0 === BH ? void 0 : BH.some((HH => "url-change" === HH.type))) && (null === (LH = HH.events) || void 0 === LH ? void 0 : LH.some((HH => "dom-mutation" === HH.type)))) {
            var AH;
            const BH = null === (AH = HH.events) || void 0 === AH ? void 0 : AH.find((HH => "url-change" === HH.type));
            QH.api.pushEvent("faro.navigation", {
              fromUrl: null === BH || void 0 === BH ? void 0 : BH.from,
              toUrl: null === BH || void 0 === BH ? void 0 : BH.to,
              sameDocument: String(!0),
              duration: HH.duration
            })
          }
        })), AH.subscribe((() => {
          SH.startTracking()
        }))
      }
    };

    function nr() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const BH = [new Vr, new cL, new KA, new AL, new qL, new jr];
      return !1 !== HH.enablePerformanceInstrumentation && BH.unshift(new dA), !1 !== HH.enableContentSecurityPolicyInstrumentation && BH.push(new Or), !1 !== HH.captureConsole && BH.push(new lL), BH
    }
    var Fr = LH(7240);
    let Dr, wr;

    function Zr() {
      const HH = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Dr === HH && wr || (wr = new Fr.UAParser(HH).getResult(), Dr = HH), wr
    }
    const dr = () => {
        const {
          browser: HH,
          os: BH,
          ua: LH
        } = Zr(), {
          name: AH,
          version: rH
        } = HH, {
          name: SH,
          version: hH
        } = BH, tH = navigator.language, zH = LH.includes("Mobi"), CH = function() {
          if (!AH || !rH) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== AH && void 0 !== AH ? AH : eL,
            version: null !== rH && void 0 !== rH ? rH : eL,
            os: `${null!==SH&&void 0!==SH?SH:eL} ${null!==hH&&void 0!==hH?hH:eL}`,
            userAgent: null !== LH && void 0 !== LH ? LH : eL,
            language: null !== tH && void 0 !== tH ? tH : eL,
            mobile: zH,
            brands: null !== CH && void 0 !== CH ? CH : eL,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      ar = () => {
        const {
          name: HH,
          version: BH
        } = Zr().os;
        if (!HH && !BH) return {};
        const LH = {};
        return HH && (LH.name = HH), BH && (LH.version = BH), {
          os: LH
        }
      };

    function sr(HH) {
      var BH, LH, AH;
      return {
        id: null !== (BH = null === (LH = QH.config) || void 0 === LH || null === (LH = LH.sessionTracking) || void 0 === LH || null === (AH = LH.generateSessionId) || void 0 === AH ? void 0 : AH.call(LH)) && void 0 !== BH ? BH : MB(),
        attributes: HH
      }
    }
    const Jr = () => ({
      sdk: {
        name: "faro-web",
        version: LL
      }
    });
    var ir = class extends HL {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let pr = function(HH) {
      return HH.EXCEPTION = "exception", HH.LOG = "log", HH.MEASUREMENT = "measurement", HH.TRACE = "trace", HH.EVENT = "event", HH
    }({});
    const yr = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function HS(HH, BH) {
      var LH, AH;
      if (void 0 === BH) return HH;
      if (void 0 === HH) return {
        resourceSpans: BH
      };
      const rH = null === (LH = HH.resourceSpans) || void 0 === LH ? void 0 : LH[0];
      if (void 0 === rH) return HH;
      const SH = (null === rH || void 0 === rH ? void 0 : rH.scopeSpans) || [],
        hH = (null === BH || void 0 === BH || null === (AH = BH[0]) || void 0 === AH ? void 0 : AH.scopeSpans) || [];
      return pB(pB({}, HH), {}, {
        resourceSpans: [pB(pB({}, rH), {}, {
          scopeSpans: [...SH, ...hH]
        })]
      })
    }

    function BS(HH) {
      let BH = {
        meta: {}
      };
      return void 0 !== HH[0] && (BH.meta = HH[0].meta), HH.forEach((HH => {
        switch (HH.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const LH = yr[HH.type],
              AH = BH[LH];
            BH = pB(pB({}, BH), {}, {
              [LH]: void 0 === AH ? [HH.payload] : [...AH, HH.payload]
            });
            break
          }
          case "trace":
            BH = pB(pB({}, BH), {}, {
              traces: HS(BH.traces, HH.payload.resourceSpans)
            })
        }
      })), BH
    }
    var LS = class extends ir {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = HH, this.name = "@grafana/faro-web-sdk:transport-console", this.version = LL
      }
      send(HH) {
        var BH;
        return this.unpatchedConsole[null !== (BH = this.options.level) && void 0 !== BH ? BH : vL.DEBUG]("New event", BS([HH]))
      }
    };
    const AS = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      rS = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      SS = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      hS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      tS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      zS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function CS(HH) {
      let {
        weekday: BH,
        day: LH,
        month: AH,
        year: rH,
        hour: SH,
        minute: hH,
        second: tH
      } = HH;
      if (rH < 1900 || LH < 1 || SH > 23 || hH > 59 || tH > 60) return;
      const zH = 60 === tH,
        CH = new Date(0);
      return CH.setUTCFullYear(rH, AH, LH), CH.setUTCHours(SH, hH, zH ? 59 : tH, 0), CH.getUTCDay() === BH && CH.getUTCDate() === LH && CH.getUTCMonth() === AH && CH.getUTCFullYear() === rH && CH.getUTCHours() === SH && CH.getUTCMinutes() === hH && CH.getUTCSeconds() === (zH ? 59 : tH) ? CH.getTime() + (zH ? 1e3 : 0) : void 0
    }
    var ES = class {
      constructor(HH) {
        this.options = HH, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var HH = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const BH = this.sequence++;
        let LH = !1;
        return {
          deliver: function() {
            var LH = wA((function*(LH) {
              const AH = HH.options.getNow();
              let rH, SH = 0;
              for (;;) {
                var hH, tH, zH;
                const CH = HH.options.retry.maxAttempts - SH,
                  EH = yield HH.runAttempt((() => LH(CH, HH.unloading)), SH > 0);
                if (SH += EH.attemptsMade, "success" === EH.kind) return {
                  kind: "success",
                  attempts: SH,
                  elapsedTimeMs: HH.options.getNow() - AH
                };
                if (rH = EH.failure, "terminal" === EH.kind || HH.unloading) return {
                  kind: "terminal",
                  attempts: SH,
                  elapsedTimeMs: HH.options.getNow() - AH,
                  failure: rH
                };
                if (SH >= HH.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: SH,
                  elapsedTimeMs: HH.options.getNow() - AH,
                  failure: rH,
                  reason: "retries-exhausted"
                };
                if (null != EH.retryAfterMs && EH.retryAfterMs > HH.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: SH,
                  elapsedTimeMs: HH.options.getNow() - AH,
                  failure: rH,
                  reason: "retry-after-too-long"
                };
                const XH = Math.min(null !== (hH = EH.retryAfterMs) && void 0 !== hH ? hH : HH.options.retry.initialBackoffMs * Math.pow(HH.options.retry.backoffMultiplier, SH - 1), HH.options.retry.maxBackoffMs);
                if (null === (tH = (zH = HH.options).onRetry) || void 0 === tH || tH.call(zH, XH, SH + 1), yield HH.waitForTurn(BH, XH)) {
                  const BH = HH.options.retry.maxAttempts - SH,
                    rH = yield HH.runAttempt((() => LH(BH, !0)));
                  return SH += rH.attemptsMade, {
                    kind: "success" === rH.kind ? "success" : "terminal",
                    attempts: SH,
                    elapsedTimeMs: HH.options.getNow() - AH,
                    failure: "success" === rH.kind ? void 0 : rH.failure
                  }
                }
              }
            }));
            return function(HH) {
              return LH.apply(this, arguments)
            }
          }(),
          release: () => {
            LH || (LH = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const HH = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const BH of HH) BH.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((LH, AH) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const BH = () => {
                this.inProgress--, this.runNextAttempt()
              };
              HH().then((HH => {
                BH(), LH(HH)
              }), (HH => {
                BH(), AH(HH)
              }))
            },
            isRedelivery: BH
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const HH = this.options.getNow(),
            BH = this.attemptQueue.findIndex((BH => {
              let {
                isRedelivery: LH
              } = BH;
              return this.unloading || !LH || HH >= this.nextSendAt
            }));
          if (BH < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - HH)));
          const [LH] = this.attemptQueue.splice(BH, 1);
          LH.isRedelivery && !this.unloading && (this.nextSendAt = HH + 1), LH.run()
        }
      }
      waitForTurn(HH, BH) {
        const LH = Math.min(BH * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((BH => {
          this.waiting.push({
            sequence: HH,
            readyAt: this.options.getNow() + LH,
            resolve: BH
          }), this.waiting.sort(((HH, BH) => HH.readyAt === BH.readyAt ? HH.sequence - BH.sequence : HH.readyAt - BH.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const HH = this.waiting[0],
          BH = HH.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const BH = this.waiting.indexOf(HH);
          BH >= 0 && this.waiting.splice(BH, 1), HH.resolve(!1), this.scheduleNext()
        }), Math.max(0, BH - this.options.getNow()))
      }
    };

    function XS(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if ({}.hasOwnProperty.call(HH, AH)) {
            if (BH.includes(AH)) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.includes(LH) || {}.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function GS(HH) {
      const {
        size: BH,
        concurrency: LH
      } = HH, AH = [];
      let rH = 0;
      const SH = () => {
        if (rH < LH && AH.length) {
          const {
            producer: HH,
            resolve: BH,
            reject: LH
          } = AH.shift();
          rH++, HH().then((HH => {
            rH--, SH(), BH(HH)
          }), (HH => {
            rH--, SH(), LH(HH)
          }))
        }
      };
      return {
        add: HH => {
          if (AH.length + rH >= BH) throw new Error("Task buffer full");
          return new Promise(((BH, LH) => {
            AH.push({
              producer: HH,
              resolve: BH,
              reject: LH
            }), SH()
          }))
        }
      }
    }
    const YS = ["headers"],
      uS = ["keepalive", "signal"],
      QS = new Set([408, 425, 429, 500, 502, 503, 504]),
      WS = new Set([429, 503]);
    let MS = 0,
      xS = 0;
    var vS = class extends Error {};
    var PS = class extends ir {
      constructor(HH) {
        var BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH;
        super(), this.options = HH, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = LL, this.pendingCustomSends = 0, this.getNow = null !== (BH = HH.getNow) && void 0 !== BH ? BH : Date.now, this.requestTimeoutMs = null !== (LH = HH.requestTimeoutMs) && void 0 !== LH ? LH : 1e4, this.compressionEnabled = null !== (AH = HH.requestCompression) && void 0 !== AH && AH && "undefined" !== typeof CompressionStream, HH.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new ES({
          bufferSize: null !== (rH = HH.bufferSize) && void 0 !== rH ? rH : 30,
          concurrency: null !== (SH = HH.concurrency) && void 0 !== SH ? SH : 5,
          retry: {
            maxAttempts: null !== (hH = null === (tH = HH.retry) || void 0 === tH ? void 0 : tH.maxAttempts) && void 0 !== hH ? hH : 3,
            initialBackoffMs: null !== (zH = null !== (CH = null === (EH = HH.retry) || void 0 === EH ? void 0 : EH.initialBackoffMs) && void 0 !== CH ? CH : HH.defaultRateLimitBackoffMs) && void 0 !== zH ? zH : 1e3,
            maxBackoffMs: null !== (XH = null === (GH = HH.retry) || void 0 === GH ? void 0 : GH.maxBackoffMs) && void 0 !== XH ? XH : 3e4,
            backoffMultiplier: null !== (YH = null === (uH = HH.retry) || void 0 === uH ? void 0 : uH.backoffMultiplier) && void 0 !== YH ? YH : 2
          },
          getNow: this.getNow,
          getRandom: null !== (QH = HH.getRandom) && void 0 !== QH ? QH : Math.random,
          onRetry: (HH, BH) => {
            this.logDebug(`Retrying failed request after ${HH}ms. Attempt ${BH}.`)
          }
        }), this.customPromiseBuffer = GS({
          size: null !== (WH = HH.bufferSize) && void 0 !== WH ? WH : 30,
          concurrency: null !== (MH = HH.concurrency) && void 0 !== MH ? MH : 5
        }), this.defaultPromiseBuffer = {
          add: HH => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(HH);
            const BH = this.deliveryQueue.reserve();
            if (!BH) throw new Error("Task buffer full");
            return this.runBufferedTask(BH, HH)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (HH => {
          HH.persisted && this.deliveryQueue.resume()
        })))
      }
      send(HH) {
        var BH = this;
        return wA((function*() {
          const LH = BH.promiseBuffer;
          if (LH !== BH.defaultPromiseBuffer || LH.add !== BH.defaultBufferAdd) {
            BH.pendingCustomSends++;
            try {
              yield LH.add((() => BH.deliver(HH)))
            } catch (AH) {
              BH.logError("Permanent delivery failure", {
                error: AH,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              BH.pendingCustomSends--
            }
          } else yield BH.deliver(HH)
        }))()
      }
      runBufferedTask(HH, BH) {
        return wA((function*() {
          let LH;
          try {
            return yield HH.deliver(wA((function*() {
              return LH = yield BH(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), LH
          } finally {
            HH.release()
          }
        }))()
      }
      deliver(HH) {
        var BH = this;
        return wA((function*() {
          const LH = BH.deliveryQueue.reserve();
          if (LH) try {
            const AH = yield BH.prepareRequest(HH), rH = yield LH.deliver(((HH, LH) => BH.performAttempt(AH, HH, LH)));
            "terminal" === rH.kind && BH.logError("retries-exhausted" === rH.reason ? "Delivery retries exhausted" : "Permanent delivery failure", EB(EB({}, rH.failure), {}, {
              reason: rH.reason,
              attempts: rH.attempts,
              elapsedTimeMs: rH.elapsedTimeMs
            }))
          } catch (AH) {
            BH.logError("Permanent delivery failure", {
              error: AH,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            LH.release()
          } else BH.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var HH;
        return [this.options.url].concat(null !== (HH = this.config.ignoreUrls) && void 0 !== HH ? HH : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(HH) {
        var BH = this;
        return wA((function*() {
          var LH, AH;
          const rH = BS(HH),
            SH = null === (LH = rH.meta.session) || void 0 === LH ? void 0 : LH.id,
            hH = JSON.stringify(rH),
            tH = null !== (AH = BH.options.requestOptions) && void 0 !== AH ? AH : {},
            {
              headers: zH = {}
            } = tH,
            CH = XS(tH, YS),
            {
              keepalive: EH,
              signal: XH
            } = CH,
            GH = XS(CH, uS),
            YH = {};
          for (const [HH, BH] of Object.entries(zH)) YH[HH] = "function" === typeof BH ? yield BH(): BH;
          let uH = hH,
            QH = function(HH) {
              return "undefined" === typeof TextEncoder ? HH.length : (new TextEncoder).encode(HH).byteLength
            }(hH);
          const WH = {};
          return BH.compressionEnabled && (uH = yield BH.compress(hH), QH = uH.size, WH["Content-Encoding"] = "gzip"), {
            bodySize: QH,
            sessionId: SH,
            requestInit: EB({
              method: "POST",
              headers: EB(EB(EB(EB(EB({
                "Content-Type": "application/json"
              }, WH), YH), BH.options.apiKey ? {
                "x-api-key": BH.options.apiKey
              } : {}), SH ? {
                "x-faro-session-id": SH
              } : {}), {}, {
                "Idempotency-Key": MB(20)
              }),
              body: uH
            }, GH)
          }
        }))()
      }
      performAttempt(HH, BH, LH) {
        var AH = this;
        return wA((function*() {
          var rH;
          const SH = null === (rH = AH.options.requestOptions) || void 0 === rH ? void 0 : rH.signal;
          if (null === SH || void 0 === SH ? void 0 : SH.aborted) return {
            kind: "terminal",
            failure: {
              error: SH.reason
            },
            attemptsMade: 0
          };
          let hH = 0;
          try {
            var tH;
            const rH = yield AH.fetchWithKeepaliveFallback(HH.requestInit, HH.bodySize, !!LH || (null === (tH = AH.options.requestOptions) || void 0 === tH ? void 0 : tH.keepalive), BH, (() => hH++));
            if (AH.handleResponse(rH, HH.sessionId), rH.status >= 200 && rH.status < 300) return {
              kind: "success",
              attemptsMade: hH
            };
            const SH = {
              status: rH.status
            };
            return !QS.has(rH.status) || LH ? {
              kind: "terminal",
              failure: SH,
              attemptsMade: hH
            } : {
              kind: "retry",
              failure: SH,
              attemptsMade: hH,
              retryAfterMs: WS.has(rH.status) ? AH.getRetryAfterDelayMs(rH) : void 0
            }
          } catch (zH) {
            const HH = {
              error: zH
            };
            return (null === SH || void 0 === SH ? void 0 : SH.aborted) || !AH.isFetchNetworkError(zH) || LH ? {
              kind: "terminal",
              failure: HH,
              attemptsMade: hH
            } : {
              kind: "retry",
              failure: HH,
              attemptsMade: hH
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(HH, BH, LH, AH, rH) {
        var SH = this;
        return wA((function*() {
          const hH = SH.getNow(),
            tH = SH.reserveKeepalive(BH, LH);
          try {
            return yield SH.fetchWithTimeout(EB(EB({}, HH), {}, {
              keepalive: tH.keepalive
            }), SH.requestTimeoutMs, rH)
          } catch (CH) {
            var zH;
            if (tH.keepalive && AH > 1 && SH.isFetchNetworkError(CH) && !(CH instanceof vS) && !(null === (zH = SH.options.requestOptions) || void 0 === zH || null === (zH = zH.signal) || void 0 === zH ? void 0 : zH.aborted)) {
              SH.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const BH = SH.requestTimeoutMs - (SH.getNow() - hH);
              return SH.fetchWithTimeout(EB(EB({}, HH), {}, {
                keepalive: !1
              }), BH, rH)
            }
            throw CH
          } finally {
            tH.release()
          }
        }))()
      }
      fetchWithTimeout(HH, BH, LH) {
        var AH = this;
        return wA((function*() {
          var rH;
          const SH = null === (rH = AH.options.requestOptions) || void 0 === rH ? void 0 : rH.signal;
          if (AH.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return LH(), fetch(AH.options.url, EB(EB({}, HH), {}, {
            signal: SH
          }));
          if (BH <= 0) throw new vS("Request timed out");
          const hH = new AbortController,
            tH = () => hH.abort(null === SH || void 0 === SH ? void 0 : SH.reason);
          null === SH || void 0 === SH || SH.addEventListener("abort", tH, {
            once: !0
          });
          let zH = !1;
          const CH = setTimeout((() => {
            zH = !0, hH.abort()
          }), BH);
          try {
            return LH(), yield fetch(AH.options.url, EB(EB({}, HH), {}, {
              signal: hH.signal
            }))
          } catch (EH) {
            if (zH && !(null === SH || void 0 === SH ? void 0 : SH.aborted)) throw new vS("Request timed out");
            throw EH
          } finally {
            clearTimeout(CH), null === SH || void 0 === SH || SH.removeEventListener("abort", tH)
          }
        }))()
      }
      getRetryAfterDelayMs(HH) {
        const BH = HH.headers.get("Retry-After");
        if (!BH) return;
        if (/^\d+$/.test(BH)) {
          const HH = 1e3 * Number(BH);
          return Number.isFinite(HH) ? HH : Number.POSITIVE_INFINITY
        }
        const LH = this.getNow(),
          AH = function(HH, BH) {
            const LH = AS.exec(HH);
            if (LH) {
              const [, HH, BH, AH, rH, SH, hH, tH] = LH;
              return CS({
                weekday: hS.indexOf(HH),
                day: Number(BH),
                month: zS.indexOf(AH),
                year: Number(rH),
                hour: Number(SH),
                minute: Number(hH),
                second: Number(tH)
              })
            }
            const AH = rS.exec(HH);
            if (AH) {
              const [, HH, LH, hH, tH, zH, CH, EH] = AH, XH = new Date(BH);
              if (Number.isNaN(XH.getTime())) return;
              const GH = XH.getUTCFullYear();
              let YH = 100 * Math.floor(GH / 100) + Number(tH);
              YH < GH && (YH += 100);
              const uH = zS.indexOf(hH),
                QH = {
                  month: uH,
                  day: Number(LH),
                  hour: Number(zH),
                  minute: Number(CH),
                  second: Number(EH),
                  millisecond: 0
                },
                WH = {
                  month: XH.getUTCMonth(),
                  day: XH.getUTCDate(),
                  hour: XH.getUTCHours(),
                  minute: XH.getUTCMinutes(),
                  second: XH.getUTCSeconds(),
                  millisecond: XH.getUTCMilliseconds()
                };
              return (YH > GH + 50 || YH === GH + 50 && (SH = WH, ((rH = QH).month - SH.month || rH.day - SH.day || rH.hour - SH.hour || rH.minute - SH.minute || rH.second - SH.second || rH.millisecond - SH.millisecond) > 0)) && (YH -= 100), CS({
                weekday: tS.indexOf(HH),
                day: Number(LH),
                month: uH,
                year: YH,
                hour: Number(zH),
                minute: Number(CH),
                second: Number(EH)
              })
            }
            var rH, SH;
            const hH = SS.exec(HH);
            if (!hH) return;
            const [, tH, zH, CH, EH, XH, GH, YH, uH] = hH;
            return CS({
              weekday: hS.indexOf(tH),
              day: Number(null !== CH && void 0 !== CH ? CH : EH),
              month: zS.indexOf(zH),
              year: Number(uH),
              hour: Number(XH),
              minute: Number(GH),
              second: Number(YH)
            })
          }(BH, LH);
        return null == AH ? void 0 : Math.max(0, AH - LH)
      }
      reserveKeepalive(HH, BH) {
        if (!1 === BH || HH > 6e4 || MS + HH > 6e4 || xS >= 9) return {
          keepalive: !1,
          release: DB
        };
        MS += HH, xS++;
        let LH = !1;
        return {
          keepalive: !0,
          release: () => {
            LH || (LH = !0, MS -= HH, xS--)
          }
        }
      }
      handleResponse(HH, BH) {
        202 === HH.status && "invalid" === HH.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), BH), HH.text().catch(DB)
      }
      isFetchNetworkError(HH) {
        return HH instanceof TypeError || HH instanceof vS || HH instanceof DOMException && "AbortError" === HH.name
      }
      compress(HH) {
        return wA((function*() {
          const BH = [],
            LH = new ReadableStream({
              start(BH) {
                BH.enqueue((new TextEncoder).encode(HH)), BH.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: HH,
              value: AH
            } = yield LH.read();
            if (HH) return new Blob(BH);
            BH.push(AH)
          }
        }))()
      }
      extendFaroSession(HH, BH, LH) {
        var AH, rH;
        const SH = HH.sessionTracking;
        if (!(null === SH || void 0 === SH ? void 0 : SH.enabled)) return void BH("Session expired.");
        const {
          fetchUserSession: hH,
          storeUserSession: tH
        } = FB(SH), zH = null === (AH = this.metas.value.session) || void 0 === AH ? void 0 : AH.id, CH = null === (rH = hH()) || void 0 === rH ? void 0 : rH.sessionId;
        LH && LH === zH && LH === CH ? (IB({
          fetchUserSession: hH,
          storeUserSession: tH
        })({
          forceSessionExtend: !0
        }), BH("Session expired; created new session.")) : BH("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const TS = () => {
      const HH = window.k6;
      return {
        k6: EB({
          isK6Browser: !0
        }, (null === HH || void 0 === HH ? void 0 : HH.testRunId) && {
          testRunId: null === HH || void 0 === HH ? void 0 : HH.testRunId
        })
      }
    };
    let US, VS;

    function OS() {
      let {
        generatePageId: HH,
        initialPageMeta: BH
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const LH = location.href;
        return oH(HH) && US !== LH && (US = LH, VS = HH(location)), {
          page: EB(EB({
            url: LH
          }, VS ? {
            id: VS
          } : {}), BH)
        }
      }
    }

    function bS() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yB,
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const LH = ZB;
      return BH > 0 && (LH.error = BH >= 1 ? function() {
        for (var BH = arguments.length, AH = new Array(BH), rH = 0; rH < BH; rH++) AH[rH] = arguments[rH];
        HH.error(`${LH.prefix}\n`, ...AH)
      } : DB, LH.warn = BH >= 2 ? function() {
        for (var BH = arguments.length, AH = new Array(BH), rH = 0; rH < BH; rH++) AH[rH] = arguments[rH];
        HH.warn(`${LH.prefix}\n`, ...AH)
      } : DB, LH.info = BH >= 3 ? function() {
        for (var BH = arguments.length, AH = new Array(BH), rH = 0; rH < BH; rH++) AH[rH] = arguments[rH];
        HH.info(`${LH.prefix}\n`, ...AH)
      } : DB, LH.debug = BH >= 4 ? function() {
        for (var BH = arguments.length, AH = new Array(BH), rH = 0; rH < BH; rH++) AH[rH] = arguments[rH];
        HH.debug(`${LH.prefix}\n`, ...AH)
      } : DB), LH
    }
    const kS = "faro",
      mS = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      oS = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function IS(HH) {
      var BH, LH, rH, SH, hH, tH;
      const zH = [],
        EH = bS(HH.unpatchedConsole, HH.internalLoggerLevel);
      HH.transports ? ((HH.url || HH.apiKey) && EH.error('if "transports" is defined, "url" and "apiKey" should not be defined'), zH.push(...HH.transports)) : HH.url ? zH.push(new PS({
        url: HH.url,
        apiKey: HH.apiKey,
        requestCompression: HH.requestCompression
      })) : EH.error('either "url" or "transports" must be defined');
      const {
        dedupe: XH = !0,
        eventDomain: GH = AH,
        globalObjectKey: YH = kS,
        instrumentations: uH = nr(),
        internalLoggerLevel: QH = dB,
        isolate: WH = !1,
        logArgsSerializer: MH = fL,
        metas: xH = lS(HH),
        paused: vH = !1,
        preventGlobalExposure: PH = !1,
        unpatchedConsole: TH = yB,
        url: UH,
        experimental: VH
      } = HH, OH = XS(HH, oS), bH = null !== (BH = null === VH || void 0 === VH ? void 0 : VH.trackNavigation) && void 0 !== BH && BH, kH = {
        dataAttributeName: iA(null !== (LH = null === (rH = HH.userActionsInstrumentation) || void 0 === rH ? void 0 : rH.dataAttributeName) && void 0 !== LH ? LH : aA),
        excludeItem: null === (SH = HH.userActionsInstrumentation) || void 0 === SH ? void 0 : SH.excludeItem,
        initialActivityTimeout: pA(null === (hH = HH.userActionsInstrumentation) || void 0 === hH ? void 0 : hH.initialActivityTimeout, 100, (HH => EH.warn(HH)))
      };
      return EB(EB({}, OH), {}, {
        batching: EB(EB({}, mS), HH.batching),
        dedupe: XH,
        globalObjectKey: YH,
        instrumentations: fS(uH, HH),
        internalLoggerLevel: QH,
        isolate: WH,
        logArgsSerializer: MH,
        metas: xH,
        parseStacktrace: QL,
        paused: vH,
        preventGlobalExposure: PH,
        transports: zH,
        unpatchedConsole: TH,
        eventDomain: GH,
        ignoreUrls: [...null !== (tH = HH.ignoreUrls) && void 0 !== tH ? tH : [], ...UH ? [UH] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: EB(EB(EB({}, CH), HH.sessionTracking), KS({
          trackGeolocation: HH.trackGeolocation,
          sessionTracking: HH.sessionTracking
        })),
        userActionsInstrumentation: kH,
        experimental: {
          trackNavigation: bH
        }
      })
    }

    function fS(HH, BH) {
      let {
        experimental: LH
      } = BH;
      var AH;
      const rH = null !== (AH = null === LH || void 0 === LH ? void 0 : LH.trackNavigation) && void 0 !== AH && AH;
      return HH.filter((HH => !("@grafana/faro-web-sdk:instrumentation-navigation" === HH.name && !rH)))
    }

    function lS(HH) {
      var BH, LH, AH;
      const {
        page: rH,
        generatePageId: SH
      } = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.pageTracking) && void 0 !== BH ? BH : {}, hH = [dr, ar, OS({
        generatePageId: SH,
        initialPageMeta: rH
      }), ...null !== (LH = HH.metas) && void 0 !== LH ? LH : [], Jr];
      return mH(null === (AH = window) || void 0 === AH ? void 0 : AH.k6) ? [...hH, TS] : hH
    }

    function KS(HH) {
      let {
        trackGeolocation: BH,
        sessionTracking: LH
      } = HH;
      var AH;
      const rH = {};
      return bH(BH) && (rH.geoLocationTrackingEnabled = BH), dH(rH) ? {} : {
        session: EB(EB({}, null !== (AH = null === LH || void 0 === LH ? void 0 : LH.session) && void 0 !== AH ? AH : {}), {}, {
          overrides: rH
        })
      }
    }
    const cS = new WeakSet;

    function eS(HH) {
      return cS.add(HH), HH
    }

    function qS(HH, BH) {
      if (HH.capture) return eS(HH.capture(BH));
      const LH = eS(HH.value);
      return null === BH || void 0 === BH || BH(), LH
    }

    function gS(HH) {
      const BH = `__faroBundleId_${HH}`,
        LH = null === EH || void 0 === EH ? void 0 : EH[BH];
      if ("string" === typeof LH && "" !== LH) return LH;
      const AH = "undefined" !== typeof window ? window[BH] : void 0;
      return "string" === typeof AH && "" !== AH ? AH : void 0
    }

    function NS(HH) {
      var BH, LH;
      const AH = HH.config.app.name,
        rH = AH ? function(HH) {
          return null === EH || void 0 === EH ? void 0 : EH[`__faroGitHash_${HH}`]
        }(AH) : void 0,
        SH = {
          sdk: {
            version: LL,
            name: "faro"
          },
          app: pB({
            bundleId: AH && gS(AH)
          }, void 0 !== rH ? {
            gitHash: rH
          } : {})
        },
        hH = null === (BH = HH.config.sessionTracking) || void 0 === BH ? void 0 : BH.session;
      hH && HH.api.setSession(hH), HH.config.app && (SH.app = pB(pB({}, HH.config.app), SH.app)), HH.config.user && (SH.user = HH.config.user), HH.config.view && (SH.view = HH.config.view), HH.metas.add(SH, ...null !== (LH = HH.config.metas) && void 0 !== LH ? LH : [])
    }
    var RS = class {
      constructor(HH, BH) {
        var LH, AH;
        this.signalBuffer = [], this.itemLimit = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.itemLimit) && void 0 !== LH ? LH : 50, this.sendTimeout = null !== (AH = null === BH || void 0 === BH ? void 0 : BH.sendTimeout) && void 0 !== AH ? AH : 250, this.paused = (null === BH || void 0 === BH ? void 0 : BH.paused) || !1, this.sendFn = HH, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(HH) {
        this.paused || (this.signalBuffer.push(HH), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(HH) {
        const BH = new Map;
        return HH.forEach((HH => {
          const LH = JSON.stringify(HH.meta);
          let AH = BH.get(LH);
          AH = void 0 === AH ? [HH] : [...AH, HH], BH.set(LH, AH)
        })), Array.from(BH.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const HH = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(HH).forEach(this.sendFn)
        } catch (BH) {
          throw this.signalBuffer = [...HH, ...this.signalBuffer], this.trimBufferToLimit(), BH
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function jS(HH, BH, LH, AH) {
      var rH;
      BH.debug("Initializing transports");
      const SH = [];
      let hH = [];
      const tH = HH => {
        let BH = HH;
        for (const AH of hH) {
          const HH = BH.map(AH).filter(Boolean);
          if (0 === HH.length) return [];
          BH = nS(HH, LH)
        }
        return BH
      };
      let zH;
      (null === (rH = LH.batching) || void 0 === rH ? void 0 : rH.enabled) && (zH = new RS((HH => {
        const LH = tH(HH);
        if (0 !== LH.length)
          for (const AH of SH) BH.debug(`Transporting item using ${AH.name}\n`, LH), AH.isBatched() && AH.send(LH)
      }), {
        sendTimeout: LH.batching.sendTimeout,
        itemLimit: LH.batching.itemLimit,
        paused: LH.paused
      }));
      return {
        add: function() {
          BH.debug("Adding transports");
          for (var rH = arguments.length, hH = new Array(rH), tH = 0; tH < rH; tH++) hH[tH] = arguments[tH];
          hH.forEach((rH => {
            BH.debug(`Adding "${rH.name}" transport`), SH.some((HH => HH === rH)) ? BH.warn(`Transport ${rH.name} is already added`) : (rH.unpatchedConsole = HH, rH.internalLogger = BH, rH.config = LH, rH.metas = AH, SH.push(rH))
          }))
        },
        addBeforeSendHooks: function() {
          BH.debug("Adding beforeSendHooks\n", hH);
          for (var HH = arguments.length, LH = new Array(HH), AH = 0; AH < HH; AH++) LH[AH] = arguments[AH];
          LH.forEach((HH => {
            HH && hH.push(HH)
          }))
        },
        getBeforeSendHooks: () => [...hH],
        execute: HH => {
          var rH;
          if (!LH.paused && jB(AH).shouldCapture()) {
            if (XH = HH.meta, !cS.has(XH)) {
              var hH, CH, EH;
              const BH = null === (hH = AH.value.session) || void 0 === hH ? void 0 : hH.id,
                rH = qS(AH);
              if (LH.paused) return;
              const SH = pB({}, HH.meta);
              (null === (CH = SH.session) || void 0 === CH ? void 0 : CH.id) === BH && (null === (EH = rH.session) || void 0 === EH ? void 0 : EH.id) !== BH && (void 0 === rH.session ? delete SH.session : SH.session = rH.session), HH = pB(pB({}, HH), {}, {
                meta: eS(SH)
              })
            }
            var XH;
            (null === (rH = LH.batching) || void 0 === rH ? void 0 : rH.enabled) && (null === zH || void 0 === zH || zH.addItem(HH)), (HH => {
              var AH;
              if ((null === (AH = LH.batching) || void 0 === AH ? void 0 : AH.enabled) && SH.every((HH => HH.isBatched()))) return;
              const [rH] = tH([HH]);
              if (void 0 !== rH)
                for (const tH of SH) {
                  var hH;
                  BH.debug(`Transporting item using ${tH.name}\n`, rH), tH.isBatched() ? (null === (hH = LH.batching) || void 0 === hH ? void 0 : hH.enabled) || tH.send([rH]) : tH.send(rH)
                }
            })(HH)
          }
        },
        isPaused: () => LH.paused,
        pause: () => {
          BH.debug("Pausing transports"), null === zH || void 0 === zH || zH.pause(), LH.paused = !0
        },
        remove: function() {
          BH.debug("Removing transports");
          for (var HH = arguments.length, LH = new Array(HH), AH = 0; AH < HH; AH++) LH[AH] = arguments[AH];
          LH.forEach((HH => {
            BH.debug(`Removing "${HH.name}" transport`);
            const LH = SH.indexOf(HH); - 1 !== LH ? SH.splice(LH, 1) : BH.warn(`Transport "${HH.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var HH = arguments.length, LH = new Array(HH), AH = 0; AH < HH; AH++) LH[AH] = arguments[AH];
          BH.debug("Removing beforeSendHooks"), hH = hH.filter((HH => !LH.includes(HH)))
        },
        get transports() {
          return [...SH]
        },
        unpause: () => {
          BH.debug("Unpausing transports"), null === zH || void 0 === zH || zH.start(), LH.paused = !1
        }
      }
    }

    function nS(HH, BH) {
      if (BH.preserveOriginalError)
        for (const LH of HH) "exception" === LH.type && delete LH.payload.originalError;
      return HH
    }
    let FS = yB;

    function DS(HH) {
      var BH;
      return FS = null !== (BH = HH.unpatchedConsole) && void 0 !== BH ? BH : FS, FS
    }
    let wS, ZS = ZB;

    function dS(HH, BH) {
      return ZS = bS(HH, BH.internalLoggerLevel), ZS
    }

    function aS(HH) {
      let {
        internalLogger: BH,
        config: LH,
        metas: AH,
        transports: rH,
        tracesApi: SH,
        userActionsApi: hH
      } = HH;
      var tH;
      BH.debug("Initializing exceptions API");
      let zH = null;
      wS = null !== (tH = LH.parseStacktrace) && void 0 !== tH ? tH : wS;
      const CH = HH => {
          BH.debug("Changing stacktrace parser"), wS = null !== HH && void 0 !== HH ? HH : wS
        },
        {
          ignoreErrors: EH = [],
          preserveOriginalError: XH
        } = LH;
      return CH(LH.parseStacktrace), {
        changeStacktraceParser: CH,
        getStacktraceParser: () => wS,
        pushError: function(HH) {
          let {
            skipDedupe: tH,
            stackFrames: CH,
            type: GH,
            context: YH,
            spanContext: uH,
            timestampOverwriteMs: QH,
            originalError: WH,
            fingerprint: MH,
            fatal: xH
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(HH, BH) {
              const {
                message: LH,
                name: AH,
                stack: rH
              } = BH;
              return SH = HH, hH = LH + " " + AH + " " + rH, SH.some((HH => UH(HH) ? hH.includes(HH) : !!hH.match(HH)));
              var SH, hH
            }(EH, null !== WH && void 0 !== WH ? WH : HH)) try {
            var vH, PH;
            if (!jB(AH).shouldCapture()) return;
            const EH = qB(pB(pB({}, function(HH) {
                let BH = HH.cause;
                gH(BH) ? BH = HH.cause.toString() : null !== BH && (mH(HH.cause) || IH(HH.cause)) ? BH = eB(HH.cause) : null != BH && (BH = HH.cause.toString());
                return null == BH ? {} : {
                  cause: BH
                }
              }(null !== WH && void 0 !== WH ? WH : HH)), null !== YH && void 0 !== YH ? YH : {})),
              UH = pB(pB(pB(pB({
                type: GH || HH.name || "Error",
                value: HH.message,
                timestamp: QH ? QB(QH) : uB(),
                trace: uH ? {
                  trace_id: uH.traceId,
                  span_id: uH.spanId
                } : SH.getTraceContext()
              }, dH(EH) ? {} : {
                context: EH
              }), XH ? {
                originalError: WH
              } : {}), MH ? {
                fingerprint: MH
              } : {}), void 0 !== xH ? {
                fatal: xH
              } : {});
            CH = null !== (vH = CH) && void 0 !== vH ? vH : HH.stack ? null === wS || void 0 === wS ? void 0 : wS(HH).frames : void 0, (null === CH || void 0 === CH ? void 0 : CH.length) && (UH.stacktrace = {
              frames: CH
            });
            const VH = {
              type: UH.type,
              value: UH.value,
              stacktrace: UH.stacktrace,
              context: UH.context,
              fingerprint: UH.fingerprint,
              fatal: null !== (PH = UH.fatal) && void 0 !== PH && PH
            };
            if (!tH && LH.dedupe && !TH(zH) && xB(VH, zH)) return void BH.debug("Skipping error push because it is the same as the last one\n", UH);
            const OH = zH,
              bH = qS(AH);
            if (zH !== OH && !tH && LH.dedupe && xB(VH, zH)) return;
            zH = VH;
            const kH = {
              meta: bH,
              payload: UH,
              type: "exception"
            };
            BH.debug("Pushing exception\n", kH), Ur(hH.getActiveUserAction(), kH) || rH.execute(kH)
          } catch (VH) {
            BH.error("Error pushing event", VH)
          }
        }
      }
    }

    function sS(HH, BH, LH, AH, rH) {
      BH.debug("Initializing API");
      let SH = null;
      const hH = function(HH) {
          let {
            transports: BH,
            internalLogger: LH,
            config: AH,
            pushEvent: rH
          } = HH;
          var SH;
          const hH = null === (SH = AH.userActionsInstrumentation) || void 0 === SH ? void 0 : SH.excludeItem;
          let tH;
          const zH = () => tH;
          return {
            startUserAction: (HH, AH, SH) => {
              if (void 0 === zH()) {
                const LH = new Pr({
                  name: HH,
                  transports: BH,
                  attributes: AH,
                  trigger: (null === SH || void 0 === SH ? void 0 : SH.triggerName) || "faroApiCall",
                  importance: (null === SH || void 0 === SH ? void 0 : SH.importance) || xr.Normal,
                  trackUserActionsExcludeItem: hH,
                  pushEvent: rH
                });
                return LH.filter((HH => [3, 2].includes(HH))).first().subscribe((() => {
                  tH = void 0
                })), Tr.notify({
                  type: Mr,
                  userAction: LH,
                  initialActivityTimeout: null === SH || void 0 === SH ? void 0 : SH.initialActivityTimeout
                }), tH = LH, tH
              }
              LH.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: zH
          }
        }({
          transports: rH,
          config: LH,
          internalLogger: BH,
          pushEvent: (HH, LH, AH, rH) => {
            SH ? SH(HH, LH, AH, rH) : BH.warn("pushEventImpl is not initialized. Event dropped:", {
              name: HH,
              attributes: LH,
              domain: AH,
              options: rH
            })
          }
        }),
        tH = function(HH, BH, LH, AH, rH) {
          let SH;
          return BH.debug("Initializing traces API"), {
            getOTEL: () => SH,
            getTraceContext: () => {
              const HH = null === SH || void 0 === SH ? void 0 : SH.trace.getSpanContext(SH.context.active());
              return HH ? {
                trace_id: HH.traceId,
                span_id: HH.spanId
              } : void 0
            },
            initOTEL: (HH, LH) => {
              BH.debug("Initializing OpenTelemetry"), SH = {
                trace: HH,
                context: LH
              }
            },
            isOTELInitialized: () => !!SH,
            pushTraces: HH => {
              try {
                if (!jB(AH).shouldCapture()) return;
                const LH = {
                  type: "trace",
                  payload: HH,
                  meta: qS(AH)
                };
                BH.debug("Pushing trace\n", LH), rH.execute(LH)
              } catch (LH) {
                BH.error("Error pushing trace\n", LH)
              }
            }
          }
        }(0, BH, 0, AH, rH),
        zH = {
          unpatchedConsole: HH,
          internalLogger: BH,
          userActionsApi: hH,
          config: LH,
          metas: AH,
          transports: rH,
          tracesApi: tH
        },
        CH = function(HH) {
          let {
            internalLogger: BH,
            config: LH,
            metas: AH,
            transports: rH,
            tracesApi: SH,
            userActionsApi: hH
          } = HH, tH = null;
          return {
            pushEvent: function(HH, zH, CH) {
              let {
                skipDedupe: EH,
                spanContext: XH,
                timestampOverwriteMs: GH,
                customPayloadTransformer: YH = HH => HH
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!jB(AH).shouldCapture()) return;
                const uH = qB(zH),
                  QH = YH({
                    name: HH,
                    domain: null !== CH && void 0 !== CH ? CH : LH.eventDomain,
                    attributes: dH(uH) ? void 0 : uH,
                    timestamp: GH ? QB(GH) : uB(),
                    trace: XH ? {
                      trace_id: XH.traceId,
                      span_id: XH.spanId
                    } : SH.getTraceContext()
                  }),
                  WH = {
                    name: QH.name,
                    attributes: QH.attributes,
                    domain: QH.domain
                  };
                if (!EH && LH.dedupe && !TH(tH) && xB(WH, tH)) return void BH.debug("Skipping event push because it is the same as the last one\n", QH);
                const MH = tH,
                  xH = qS(AH);
                if (tH !== MH && !EH && LH.dedupe && xB(WH, tH)) return;
                tH = WH;
                const vH = {
                  meta: xH,
                  payload: QH,
                  type: "event"
                };
                BH.debug("Pushing event\n", vH), Ur(hH.getActiveUserAction(), vH) || rH.execute(vH)
              } catch (uH) {
                BH.error("Error pushing event", uH)
              }
            }
          }
        }(zH);
      return SH = CH.pushEvent, pB(pB(pB(pB(pB(pB(pB({}, tH), aS(zH)), function(HH) {
        let BH, LH, AH, rH, {
          internalLogger: SH,
          metas: hH
        } = HH;
        SH.debug("Initializing meta API");
        const tH = HH => {
            LH && hH.remove(LH), LH = {
              user: HH
            }, hH.add(LH)
          },
          zH = (HH, LH) => {
            var AH;
            const rH = null === LH || void 0 === LH ? void 0 : LH.overrides,
              SH = rH ? {
                overrides: pB(pB({}, null === BH || void 0 === BH || null === (AH = BH.session) || void 0 === AH ? void 0 : AH.overrides), rH)
              } : {};
            BH && hH.remove(BH), BH = {
              session: pB(pB({}, dH(HH) ? void 0 : HH), SH)
            }, hH.add(BH)
          },
          CH = (HH, BH) => {
            jB(hH).notifySessionUpdate({
              type: "replace",
              session: HH,
              overrides: null === BH || void 0 === BH ? void 0 : BH.overrides
            }), zH(HH, BH)
          },
          EH = () => hH.value.session,
          XH = () => hH.value.page;
        return {
          setUser: tH,
          resetUser: tH,
          setSession: CH,
          resetSession: CH,
          getSession: EH,
          setView: (HH, BH) => {
            var LH;
            if ((null === BH || void 0 === BH ? void 0 : BH.overrides) && (jB(hH).notifySessionUpdate({
                type: "overrides",
                overrides: BH.overrides
              }), zH(EH(), {
                overrides: BH.overrides
              })), (null === AH || void 0 === AH || null === (LH = AH.view) || void 0 === LH ? void 0 : LH.name) === (null === HH || void 0 === HH ? void 0 : HH.name)) return;
            const rH = AH;
            AH = {
              view: HH
            }, hH.add(AH), rH && hH.remove(rH)
          },
          getView: () => hH.value.view,
          setPage: HH => {
            var BH;
            const LH = UH(HH) ? pB(pB({}, null !== (BH = null === rH || void 0 === rH ? void 0 : rH.page) && void 0 !== BH ? BH : XH()), {}, {
              id: HH
            }) : HH;
            rH && hH.remove(rH), rH = {
              page: LH
            }, hH.add(rH)
          },
          getPage: XH
        }
      }(zH)), function(HH) {
        let {
          internalLogger: BH,
          config: LH,
          metas: AH,
          transports: rH,
          tracesApi: SH,
          userActionsApi: hH
        } = HH;
        var tH;
        BH.debug("Initializing logs API");
        let zH = null;
        const CH = null !== (tH = LH.logArgsSerializer) && void 0 !== tH ? tH : fL;
        return {
          pushLog: function(HH) {
            let {
              context: tH,
              level: EH,
              skipDedupe: XH,
              spanContext: GH,
              timestampOverwriteMs: YH
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!jB(AH).shouldCapture()) return;
              const uH = qB(tH),
                QH = {
                  message: CH(HH),
                  level: null !== EH && void 0 !== EH ? EH : "log",
                  context: dH(uH) ? void 0 : uH,
                  timestamp: YH ? QB(YH) : uB(),
                  trace: GH ? {
                    trace_id: GH.traceId,
                    span_id: GH.spanId
                  } : SH.getTraceContext()
                },
                WH = {
                  message: QH.message,
                  level: QH.level,
                  context: QH.context
                };
              if (!XH && LH.dedupe && !TH(zH) && xB(WH, zH)) return void BH.debug("Skipping log push because it is the same as the last one\n", QH);
              const MH = zH,
                xH = qS(AH);
              if (zH !== MH && !XH && LH.dedupe && xB(WH, zH)) return;
              zH = WH;
              const vH = {
                type: "log",
                payload: QH,
                meta: xH
              };
              BH.debug("Pushing log\n", vH), Ur(hH.getActiveUserAction(), vH) || rH.execute(vH)
            } catch (uH) {
              BH.error("Error pushing log\n", uH)
            }
          }
        }
      }(zH)), function(HH) {
        let {
          internalLogger: BH,
          config: LH,
          metas: AH,
          transports: rH,
          tracesApi: SH,
          userActionsApi: hH
        } = HH;
        BH.debug("Initializing measurements API");
        let tH = null;
        return {
          pushMeasurement: function(HH) {
            let {
              skipDedupe: zH,
              context: CH,
              spanContext: EH,
              timestampOverwriteMs: XH
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!jB(AH).shouldCapture()) return;
              const GH = qB(CH),
                YH = pB(pB({}, HH), {}, {
                  trace: EH ? {
                    trace_id: EH.traceId,
                    span_id: EH.spanId
                  } : SH.getTraceContext(),
                  timestamp: XH ? QB(XH) : uB(),
                  context: dH(GH) ? void 0 : GH
                }),
                uH = {
                  type: YH.type,
                  values: YH.values,
                  context: YH.context
                };
              if (!zH && LH.dedupe && !TH(tH) && xB(uH, tH)) return void BH.debug("Skipping measurement push because it is the same as the last one\n", YH);
              const QH = tH,
                WH = qS(AH);
              if (tH !== QH && !zH && LH.dedupe && xB(uH, tH)) return;
              tH = uH;
              const MH = {
                type: "measurement",
                payload: YH,
                meta: WH
              };
              BH.debug("Pushing measurement\n", MH), Ur(hH.getActiveUserAction(), MH) || rH.execute(MH)
            } catch (GH) {
              BH.error("Error pushing measurement\n", GH)
            }
          }
        }
      }(zH)), CH), hH)
    }

    function JS(HH) {
      const BH = DS(HH),
        LH = dS(BH, HH);
      if (uH() && !HH.isolate) return void LH.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      LH.debug("Initializing");
      const AH = function(HH, BH) {
          let LH, AH = [],
            rH = [],
            SH = [],
            hH = 0,
            tH = 0;
          const zH = () => AH.reduce(((HH, BH) => Object.assign(HH, oH(BH) ? BH() : BH)), {}),
            CH = () => {
              if (rH.length) {
                const HH = zH();
                rH.forEach((BH => BH(HH)))
              }
            };
          return {
            add: function() {
              for (var HH = arguments.length, LH = new Array(HH), rH = 0; rH < HH; rH++) LH[rH] = arguments[rH];
              BH.debug("Adding metas\n", LH), AH.push(...LH), CH()
            },
            remove: function() {
              for (var HH = arguments.length, LH = new Array(HH), rH = 0; rH < HH; rH++) LH[rH] = arguments[rH];
              BH.debug("Removing metas\n", LH), AH = AH.filter((HH => !LH.includes(HH))), CH()
            },
            addListener: HH => {
              BH.debug("Adding metas listener\n", HH), rH.push(HH)
            },
            removeListener: HH => {
              BH.debug("Removing metas listener\n", HH), rH = rH.filter((BH => BH !== HH))
            },
            capture: HH => {
              var BH;
              const AH = void 0 !== LH,
                rH = null !== (BH = LH) && void 0 !== BH ? BH : SH;
              AH || (LH = rH, hH = 0, tH = rH.length);
              try {
                for (; hH < tH;) {
                  const HH = rH[hH++];
                  null === HH || void 0 === HH || HH()
                }
                const BH = eS(zH());
                return null === HH || void 0 === HH || HH(), BH
              } finally {
                AH || (LH = void 0)
              }
            },
            addCaptureListener: HH => {
              SH.push(HH)
            },
            removeCaptureListener: HH => {
              SH = SH.filter((BH => BH !== HH))
            },
            get value() {
              return zH()
            }
          }
        }(0, LH),
        rH = jS(BH, LH, HH, AH),
        SH = sS(BH, LH, HH, AH, rH),
        hH = function(HH, BH, LH, AH, rH, SH) {
          BH.debug("Initializing instrumentations");
          const hH = [];
          return {
            add: function() {
              BH.debug("Adding instrumentations");
              for (var tH = arguments.length, zH = new Array(tH), CH = 0; CH < tH; CH++) zH[CH] = arguments[CH];
              zH.forEach((tH => {
                BH.debug(`Adding "${tH.name}" instrumentation`), hH.some((HH => HH.name === tH.name)) ? BH.warn(`Instrumentation ${tH.name} is already added`) : (tH.unpatchedConsole = HH, tH.internalLogger = BH, tH.config = LH, tH.metas = AH, tH.transports = rH, tH.api = SH, hH.push(tH), tH.initialize())
              }))
            },
            get instrumentations() {
              return [...hH]
            },
            remove: function() {
              BH.debug("Removing instrumentations");
              for (var HH = arguments.length, LH = new Array(HH), AH = 0; AH < HH; AH++) LH[AH] = arguments[AH];
              LH.forEach((HH => {
                var LH, AH;
                BH.debug(`Removing "${HH.name}" instrumentation`);
                const rH = hH.reduce(((BH, LH, AH) => null === BH && LH.name === HH.name ? AH : null), null);
                null !== rH ? (null === (LH = (AH = hH[rH]).destroy) || void 0 === LH || LH.call(AH), hH.splice(rH, 1)) : BH.warn(`Instrumentation "${HH.name}" is not added`)
              }))
            }
          }
        }(BH, LH, HH, AH, rH, SH),
        tH = WH(BH, LH, HH, AH, rH, SH, hH);
      return NS(tH),
        function(HH) {
          HH.transports.add(...HH.config.transports), HH.transports.addBeforeSendHooks(HH.config.beforeSend)
        }(tH),
        function(HH) {
          HH.instrumentations.add(...HH.config.instrumentations)
        }(tH), tH
    }

    function iS(HH) {
      const BH = IS(HH);
      if (BH) return JS(BH)
    }
  },
  7240: function(HH, BH, LH) {
    var AH;
    ! function(rH, SH) {
      var hH = "function",
        tH = "undefined",
        zH = "object",
        CH = "string",
        EH = "major",
        XH = "model",
        GH = "name",
        YH = "type",
        uH = "vendor",
        QH = "version",
        WH = "architecture",
        MH = "console",
        xH = "mobile",
        vH = "tablet",
        PH = "smarttv",
        TH = "wearable",
        UH = "embedded",
        VH = "Amazon",
        OH = "Apple",
        bH = "ASUS",
        kH = "BlackBerry",
        mH = "Browser",
        oH = "Chrome",
        IH = "Firefox",
        fH = "Google",
        lH = "Honor",
        KH = "Huawei",
        cH = "LG",
        eH = "Microsoft",
        qH = "Motorola",
        gH = "Nvidia",
        NH = "OnePlus",
        RH = "Opera",
        jH = "OPPO",
        nH = "Samsung",
        FH = "Sharp",
        DH = "Sony",
        wH = "Xiaomi",
        ZH = "Zebra",
        dH = "Facebook",
        aH = "Chromium OS",
        sH = "Mac OS",
        JH = " Browser",
        iH = function(HH) {
          for (var BH = {}, LH = 0; LH < HH.length; LH++) BH[HH[LH].toUpperCase()] = HH[LH];
          return BH
        },
        pH = function(HH, BH) {
          return typeof HH === CH && -1 !== yH(BH).indexOf(yH(HH))
        },
        yH = function(HH) {
          return HH.toLowerCase()
        },
        HB = function(HH, BH) {
          if (typeof HH === CH) return HH = HH.replace(/^\s\s*/, ""), typeof BH === tH ? HH : HH.substring(0, 500)
        },
        BB = function(HH, BH) {
          for (var LH, AH, rH, tH, CH, EH, XH = 0; XH < BH.length && !CH;) {
            var GH = BH[XH],
              YH = BH[XH + 1];
            for (LH = AH = 0; LH < GH.length && !CH && GH[LH];)
              if (CH = GH[LH++].exec(HH))
                for (rH = 0; rH < YH.length; rH++) EH = CH[++AH], typeof(tH = YH[rH]) === zH && tH.length > 0 ? 2 === tH.length ? typeof tH[1] == hH ? this[tH[0]] = tH[1].call(this, EH) : this[tH[0]] = tH[1] : 3 === tH.length ? typeof tH[1] !== hH || tH[1].exec && tH[1].test ? this[tH[0]] = EH ? EH.replace(tH[1], tH[2]) : SH : this[tH[0]] = EH ? tH[1].call(this, EH, tH[2]) : SH : 4 === tH.length && (this[tH[0]] = EH ? tH[3].call(this, EH.replace(tH[1], tH[2])) : SH) : this[tH] = EH || SH;
            XH += 2
          }
        },
        LB = function(HH, BH) {
          for (var LH in BH)
            if (typeof BH[LH] === zH && BH[LH].length > 0) {
              for (var AH = 0; AH < BH[LH].length; AH++)
                if (pH(BH[LH][AH], HH)) return "?" === LH ? SH : LH
            } else if (pH(BH[LH], HH)) return "?" === LH ? SH : LH;
          return BH.hasOwnProperty("*") ? BH["*"] : HH
        },
        AB = {
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
        rB = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [QH, [GH, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [QH, [GH, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [GH, QH],
            [/opios[\/ ]+([\w\.]+)/i],
            [QH, [GH, RH + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [QH, [GH, RH + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [QH, [GH, RH]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [QH, [GH, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [QH, [GH, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [GH, QH],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [QH, [GH, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [QH, [GH, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [QH, [GH, "UC" + mH]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [QH, [GH, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [QH, [GH, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [QH, [GH, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [QH, [GH, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [QH, [GH, "Smart Lenovo " + mH]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [GH, /(.+)/, "$1 Secure " + mH], QH
            ],
            [/\bfocus\/([\w\.]+)/i],
            [QH, [GH, IH + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [QH, [GH, RH + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [QH, [GH, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [QH, [GH, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [QH, [GH, RH + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [QH, [GH, "MIUI" + JH]],
            [/fxios\/([\w\.-]+)/i],
            [QH, [GH, IH]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [QH, [GH, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [GH, /(.+)/, "$1Browser"], QH
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [GH, /(.+)/, "$1" + JH], QH
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [QH, [GH, nH + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [QH, [GH, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [GH, "Sogou Mobile"], QH
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [GH, QH],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [GH],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [QH, GH],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [GH, dH], QH
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [GH, QH],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [QH, [GH, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [QH, [GH, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [QH, [GH, oH + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [GH, oH + " WebView"], QH
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [QH, [GH, "Android " + mH]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [GH, QH],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [QH, [GH, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [QH, GH],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [GH, [QH, LB, {
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
            [GH, QH],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [GH, "Netscape"], QH
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [GH, QH],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [QH, [GH, IH + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [GH, [QH, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [GH, [QH, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [WH, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [WH, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [WH, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [WH, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [WH, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [WH, /ower/, "", yH]
            ],
            [/ sun4\w[;\)]/i],
            [
              [WH, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [WH, yH]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [XH, [uH, nH],
              [YH, vH]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [XH, [uH, nH],
              [YH, xH]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [XH, [uH, OH],
              [YH, xH]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [XH, [uH, OH],
              [YH, vH]
            ],
            [/(macintosh);/i],
            [XH, [uH, OH]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [XH, [uH, FH],
              [YH, xH]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [XH, [uH, lH],
              [YH, vH]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [XH, [uH, lH],
              [YH, xH]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [XH, [uH, KH],
              [YH, vH]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [XH, [uH, KH],
              [YH, xH]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [XH, /_/g, " "],
              [uH, wH],
              [YH, vH]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [XH, /_/g, " "],
              [uH, wH],
              [YH, xH]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [XH, [uH, jH],
              [YH, xH]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [XH, [uH, LB, {
                OnePlus: ["304", "403", "203"],
                "*": jH
              }],
              [YH, vH]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [XH, [uH, "Vivo"],
              [YH, xH]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [XH, [uH, "Realme"],
              [YH, xH]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [XH, [uH, qH],
              [YH, xH]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [XH, [uH, qH],
              [YH, vH]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [XH, [uH, cH],
              [YH, vH]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [XH, [uH, cH],
              [YH, xH]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [XH, [uH, "Lenovo"],
              [YH, vH]
            ],
            [/(nokia) (t[12][01])/i],
            [uH, XH, [YH, vH]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [XH, /_/g, " "],
              [YH, xH],
              [uH, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [XH, [uH, fH],
              [YH, vH]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [XH, [uH, fH],
              [YH, xH]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [XH, [uH, DH],
              [YH, xH]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [XH, "Xperia Tablet"],
              [uH, DH],
              [YH, vH]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [XH, [uH, NH],
              [YH, xH]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [XH, [uH, VH],
              [YH, vH]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [XH, /(.+)/g, "Fire Phone $1"],
              [uH, VH],
              [YH, xH]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [XH, uH, [YH, vH]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [XH, [uH, kH],
              [YH, xH]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [XH, [uH, bH],
              [YH, vH]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [XH, [uH, bH],
              [YH, xH]
            ],
            [/(nexus 9)/i],
            [XH, [uH, "HTC"],
              [YH, vH]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [uH, [XH, /_/g, " "],
              [YH, xH]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [XH, [uH, "TCL"],
              [YH, vH]
            ],
            [/(itel) ((\w+))/i],
            [
              [uH, yH], XH, [YH, LB, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [XH, [uH, "Acer"],
              [YH, vH]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [XH, [uH, "Meizu"],
              [YH, xH]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [XH, [uH, "Ulefone"],
              [YH, xH]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [XH, [uH, "Energizer"],
              [YH, xH]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [XH, [uH, "Cat"],
              [YH, xH]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [XH, [uH, "Smartfren"],
              [YH, xH]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [XH, [uH, "Nothing"],
              [YH, xH]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [XH, [uH, "Archos"],
              [YH, vH]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [XH, [uH, "Archos"],
              [YH, xH]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [uH, XH, [YH, vH]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [uH, XH, [YH, xH]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [uH, XH, [YH, vH]],
            [/(surface duo)/i],
            [XH, [uH, eH],
              [YH, vH]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [XH, [uH, "Fairphone"],
              [YH, xH]
            ],
            [/(u304aa)/i],
            [XH, [uH, "AT&T"],
              [YH, xH]
            ],
            [/\bsie-(\w*)/i],
            [XH, [uH, "Siemens"],
              [YH, xH]
            ],
            [/\b(rct\w+) b/i],
            [XH, [uH, "RCA"],
              [YH, vH]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [XH, [uH, "Dell"],
              [YH, vH]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [XH, [uH, "Verizon"],
              [YH, vH]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [XH, [uH, "Barnes & Noble"],
              [YH, vH]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [XH, [uH, "NuVision"],
              [YH, vH]
            ],
            [/\b(k88) b/i],
            [XH, [uH, "ZTE"],
              [YH, vH]
            ],
            [/\b(nx\d{3}j) b/i],
            [XH, [uH, "ZTE"],
              [YH, xH]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [XH, [uH, "Swiss"],
              [YH, xH]
            ],
            [/\b(zur\d{3}) b/i],
            [XH, [uH, "Swiss"],
              [YH, vH]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [XH, [uH, "Zeki"],
              [YH, vH]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [uH, "Dragon Touch"], XH, [YH, vH]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [XH, [uH, "Insignia"],
              [YH, vH]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [XH, [uH, "NextBook"],
              [YH, vH]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [uH, "Voice"], XH, [YH, xH]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [uH, "LvTel"], XH, [YH, xH]
            ],
            [/\b(ph-1) /i],
            [XH, [uH, "Essential"],
              [YH, xH]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [XH, [uH, "Envizen"],
              [YH, vH]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [XH, [uH, "MachSpeed"],
              [YH, vH]
            ],
            [/\btu_(1491) b/i],
            [XH, [uH, "Rotor"],
              [YH, vH]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [XH, [uH, gH],
              [YH, vH]
            ],
            [/(sprint) (\w+)/i],
            [uH, XH, [YH, xH]],
            [/(kin\.[onetw]{3})/i],
            [
              [XH, /\./g, " "],
              [uH, eH],
              [YH, xH]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [XH, [uH, ZH],
              [YH, vH]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [XH, [uH, ZH],
              [YH, xH]
            ],
            [/smart-tv.+(samsung)/i],
            [uH, [YH, PH]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [XH, /^/, "SmartTV"],
              [uH, nH],
              [YH, PH]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [uH, cH],
              [YH, PH]
            ],
            [/(apple) ?tv/i],
            [uH, [XH, OH + " TV"],
              [YH, PH]
            ],
            [/crkey/i],
            [
              [XH, oH + "cast"],
              [uH, fH],
              [YH, PH]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [XH, [uH, VH],
              [YH, PH]
            ],
            [/(shield \w+ tv)/i],
            [XH, [uH, gH],
              [YH, PH]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [XH, [uH, FH],
              [YH, PH]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [XH, [uH, DH],
              [YH, PH]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [XH, [uH, wH],
              [YH, PH]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [uH, XH, [YH, PH]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [uH, HB],
              [XH, HB],
              [YH, PH]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [XH, [YH, PH]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [YH, PH]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [uH, XH, [YH, MH]],
            [/droid.+; (shield)( bui|\))/i],
            [XH, [uH, gH],
              [YH, MH]
            ],
            [/(playstation \w+)/i],
            [XH, [uH, DH],
              [YH, MH]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [XH, [uH, eH],
              [YH, MH]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [XH, [uH, nH],
              [YH, TH]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [uH, XH, [YH, TH]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [XH, [uH, jH],
              [YH, TH]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [XH, [uH, OH],
              [YH, TH]
            ],
            [/(opwwe\d{3})/i],
            [XH, [uH, NH],
              [YH, TH]
            ],
            [/(moto 360)/i],
            [XH, [uH, qH],
              [YH, TH]
            ],
            [/(smartwatch 3)/i],
            [XH, [uH, DH],
              [YH, TH]
            ],
            [/(g watch r)/i],
            [XH, [uH, cH],
              [YH, TH]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [XH, [uH, ZH],
              [YH, TH]
            ],
            [/droid.+; (glass) \d/i],
            [XH, [uH, fH],
              [YH, TH]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [uH, XH, [YH, TH]],
            [/; (quest( \d| pro)?)/i],
            [XH, [uH, dH],
              [YH, TH]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [uH, [YH, UH]],
            [/(aeobc)\b/i],
            [XH, [uH, VH],
              [YH, UH]
            ],
            [/(homepod).+mac os/i],
            [XH, [uH, OH],
              [YH, UH]
            ],
            [/windows iot/i],
            [
              [YH, UH]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [XH, [YH, xH]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [XH, [YH, vH]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [YH, vH]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [YH, xH]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [XH, [uH, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [QH, [GH, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [GH, QH],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [QH, [GH, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [GH, QH],
            [/ladybird\//i],
            [
              [GH, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [QH, GH]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [GH, QH],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [GH, [QH, LB, AB]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [QH, LB, AB],
              [GH, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [QH, /_/g, "."],
              [GH, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [GH, sH],
              [QH, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [QH, GH],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [GH, /(.+)/, "$1 Touch"], QH
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [GH, QH],
            [/\(bb(10);/i],
            [QH, [GH, kH]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [QH, [GH, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [QH, [GH, IH + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [QH, [GH, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [QH, [GH, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [QH, [GH, oH + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [GH, aH], QH
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [GH, QH],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [GH, "Solaris"], QH
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [GH, QH]
          ]
        },
        SB = function(HH, BH) {
          if (typeof HH === zH && (BH = HH, HH = SH), !(this instanceof SB)) return new SB(HH, BH).getResult();
          var LH = typeof rH !== tH && rH.navigator ? rH.navigator : SH,
            AH = HH || (LH && LH.userAgent ? LH.userAgent : ""),
            MH = LH && LH.userAgentData ? LH.userAgentData : SH,
            PH = BH ? function(HH, BH) {
              var LH = {};
              for (var AH in HH) BH[AH] && BH[AH].length % 2 === 0 ? LH[AH] = BH[AH].concat(HH[AH]) : LH[AH] = HH[AH];
              return LH
            }(rB, BH) : rB,
            TH = LH && LH.userAgent == AH;
          return this.getBrowser = function() {
            var HH, BH = {};
            return BH[GH] = SH, BH[QH] = SH, BB.call(BH, AH, PH.browser), BH[EH] = typeof(HH = BH[QH]) === CH ? HH.replace(/[^\d\.]/g, "").split(".")[0] : SH, TH && LH && LH.brave && typeof LH.brave.isBrave == hH && (BH[GH] = "Brave"), BH
          }, this.getCPU = function() {
            var HH = {};
            return HH[WH] = SH, BB.call(HH, AH, PH.cpu), HH
          }, this.getDevice = function() {
            var HH = {};
            return HH[uH] = SH, HH[XH] = SH, HH[YH] = SH, BB.call(HH, AH, PH.device), TH && !HH[YH] && MH && MH.mobile && (HH[YH] = xH), TH && "Macintosh" == HH[XH] && LH && typeof LH.standalone !== tH && LH.maxTouchPoints && LH.maxTouchPoints > 2 && (HH[XH] = "iPad", HH[YH] = vH), HH
          }, this.Iu = function() {
            var HH = {};
            return HH[GH] = SH, HH[QH] = SH, BB.call(HH, AH, PH.engine), HH
          }, this.getOS = function() {
            var HH = {};
            return HH[GH] = SH, HH[QH] = SH, BB.call(HH, AH, PH.os), TH && !HH[GH] && MH && MH.platform && "Unknown" != MH.platform && (HH[GH] = MH.platform.replace(/chrome os/i, aH).replace(/macos/i, sH)), HH
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Iu(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return AH
          }, this.setUA = function(HH) {
            return AH = typeof HH === CH && HH.length > 500 ? HB(HH, 500) : HH, this
          }, this.setUA(AH), this
        };
      SB.VERSION = "1.0.41", SB.BROWSER = iH([GH, QH, EH]), SB.CPU = iH([WH]), SB.DEVICE = iH([XH, uH, YH, MH, xH, PH, vH, TH, UH]), SB.ENGINE = SB.OS = iH([GH, QH]), typeof BH !== tH ? (HH.exports && (BH = HH.exports = SB), BH.UAParser = SB) : LH.amdO ? (AH = function() {
        return SB
      }.call(BH, LH, BH, HH)) === SH || (HH.exports = AH) : typeof rH !== tH && (rH.UAParser = SB);
      var hB = typeof rH !== tH && (rH.jQuery || rH.Zepto);
      if (hB && !hB.ua) {
        var tB = new SB;
        hB.ua = tB.getResult(), hB.ua.get = function() {
          return tB.getUA()
        }, hB.ua.set = function(HH) {
          tB.setUA(HH);
          var BH = tB.getResult();
          for (var LH in BH) hB.ua[LH] = BH[LH]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);