export const id = 31;
export const ids = [31];
export const modules = {
  6521: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BaseExtension: () => Qw,
      BaseInstrumentation: () => Fw,
      BaseTransport: () => Bq,
      CSPInstrumentation: () => Wq,
      ConsoleInstrumentation: () => Nw,
      ConsoleTransport: () => Lo,
      EVENT_CLICK: () => GF,
      EVENT_NAVIGATION: () => pF,
      EVENT_ROUTE_CHANGE: () => RF,
      EVENT_SESSION_EXTEND: () => iF,
      EVENT_SESSION_RESUME: () => SF,
      EVENT_SESSION_START: () => CF,
      EVENT_VIEW_CHANGED: () => cF,
      ErrorsInstrumentation: () => Kw,
      FetchTransport: () => co,
      InternalLoggerLevel: () => JF,
      LogLevel: () => Gw,
      MAX_SESSION_PERSISTENCE_TIME: () => vQ,
      NavigationInstrumentation: () => fq,
      Observable: () => Mw,
      PerformanceInstrumentation: () => gL,
      PersistentSessionsManager: () => lF,
      SESSION_EXPIRATION_TIME: () => oQ,
      SESSION_INACTIVITY_TIME: () => DQ,
      STORAGE_KEY: () => qQ,
      SessionInstrumentation: () => Lw,
      TransportItemType: () => dq,
      UserActionInstrumentation: () => iq,
      UserActionState: () => Aq,
      VERSION: () => ww,
      ViewInstrumentation: () => lw,
      VolatileSessionsManager: () => jF,
      WebVitalsInstrumentation: () => TL,
      allLogLevels: () => Cw,
      browserMeta: () => gq,
      buildStackFrame: () => qw,
      captureMetas: () => jo,
      createInternalLogger: () => Ro,
      createPromiseBuffer: () => Yo,
      createSession: () => Zq,
      deepEqual: () => MF,
      defaultEventDomain: () => LQ,
      defaultExceptionType: () => Rw,
      defaultGlobalObjectKey: () => Oo,
      defaultInternalLoggerLevel: () => nF,
      defaultLogLevel: () => pw,
      faro: () => AQ,
      genShortID: () => eF,
      getCurrentTimestamp: () => xF,
      getDataFromSafariExtensions: () => bw,
      getIgnoreUrls: () => gQ,
      getInternalFaroFromGlobalObject: () => bQ,
      getStackFramesFromError: () => xw,
      getTransportBody: () => wo,
      getUrlFromResource: () => ZQ,
      getWebInstrumentations: () => Vq,
      globalObject: () => uQ,
      initializeFaro: () => QD,
      internalGlobalObjectKey: () => HQ,
      isArray: () => rQ,
      isBoolean: () => WQ,
      isDomError: () => aQ,
      isDomException: () => XQ,
      isElement: () => VQ,
      isElementDefined: () => fQ,
      BY: () => nQ,
      isError: () => lQ,
      isErrorDefined: () => zQ,
      isErrorEvent: () => jQ,
      isEvent: () => KQ,
      isEventDefined: () => TQ,
      isFunction: () => sQ,
      isInstanceOf: () => GQ,
      isInt: () => iQ,
      isInternalFaroOnGlobalObject: () => xQ,
      isMap: () => JQ,
      isMapDefined: () => hQ,
      isNull: () => cQ,
      isNumber: () => SQ,
      isObject: () => OQ,
      isPrimitive: () => NQ,
      isRegExp: () => IQ,
      isString: () => CQ,
      isSymbol: () => RQ,
      isSyntheticEvent: () => EQ,
      isThenable: () => UQ,
      isToString: () => MQ,
      isTypeof: () => eQ,
      isUndefined: () => pQ,
      makeCoreConfig: () => Io,
      noop: () => hF,
      osMeta: () => Pq,
      parseStacktrace: () => Aw,
      sdkMeta: () => yq,
      setInternalFaroOnGlobalObject: () => YQ,
      transportItemTypeToBodyKey: () => Qo,
      unknownString: () => zw,
      userActionDataAttribute: () => PL,
      userActionTimeoutDataAttribute: () => ZL
    });
    const LQ = "browser",
      qQ = "com.grafana.faro.session",
      oQ = 144e5,
      DQ = 9e5,
      kQ = 1e3,
      vQ = DQ,
      mQ = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: vQ
      };
    const uQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof wQ.g ? wQ.g : "undefined" !== typeof self ? self : void 0;
    const HQ = "_faroInternal";

    function bQ() {
      return uQ[HQ]
    }

    function YQ(QQ) {
      QQ.config.isolate ? QQ.internalLogger.debug("Skipping registering internal Faro instance on global object") : (QQ.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(uQ, HQ, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: QQ
      }))
    }

    function xQ() {
      return HQ in uQ
    }
    let AQ = {
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

    function tQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      return FQ.debug("Initializing Faro"), AQ = {
          api: oQ,
          config: wQ,
          instrumentations: DQ,
          internalLogger: FQ,
          metas: LQ,
          pause: qQ.pause,
          transports: qQ,
          unpatchedConsole: QQ,
          unpause: qQ.unpause
        }, YQ(AQ),
        function(QQ) {
          if (QQ.config.preventGlobalExposure) QQ.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (QQ.internalLogger.debug(`Registering public faro reference in the global scope using "${QQ.config.globalObjectKey}" key`), QQ.config.globalObjectKey in uQ) return void QQ.internalLogger.warn(`Skipping global registration due to key "${QQ.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(uQ, QQ.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: QQ
            })
          }
        }(AQ), AQ
    }

    function eQ(QQ, FQ) {
      return typeof QQ === FQ
    }

    function MQ(QQ, FQ) {
      return Object.prototype.toString.call(QQ) === `[object ${FQ}]`
    }

    function GQ(QQ, FQ) {
      try {
        return QQ instanceof FQ
      } catch (wQ) {
        return !1
      }
    }
    const pQ = QQ => eQ(QQ, "undefined"),
      cQ = QQ => eQ(QQ, "null"),
      CQ = QQ => eQ(QQ, "string"),
      SQ = QQ => eQ(QQ, "number") && !isNaN(QQ) || eQ(QQ, "bigint"),
      iQ = QQ => SQ(QQ) && Number.isInteger(QQ),
      WQ = QQ => eQ(QQ, "boolean"),
      RQ = QQ => eQ(QQ, "symbol"),
      OQ = QQ => !cQ(QQ) && eQ(QQ, "object"),
      sQ = QQ => eQ(QQ, "function"),
      rQ = QQ => MQ(QQ, "Array"),
      IQ = QQ => MQ(QQ, "RegExp"),
      UQ = QQ => sQ(null === QQ || void 0 === QQ ? void 0 : QQ.then),
      NQ = QQ => !OQ(QQ) && !sQ(QQ),
      TQ = "undefined" !== typeof Event,
      KQ = QQ => TQ && GQ(QQ, Event),
      zQ = "undefined" !== typeof Error,
      lQ = QQ => zQ && GQ(QQ, Error),
      jQ = QQ => MQ(QQ, "ErrorEvent"),
      aQ = QQ => MQ(QQ, "DOMError"),
      XQ = QQ => MQ(QQ, "DOMException"),
      fQ = "undefined" !== typeof Element,
      VQ = QQ => fQ && GQ(QQ, Element),
      hQ = "undefined" !== typeof Map,
      JQ = QQ => hQ && GQ(QQ, Map),
      EQ = QQ => OQ(QQ) && "nativeEvent" in QQ && "preventDefault" in QQ && "stopPropagation" in QQ;

    function nQ(QQ) {
      return null == QQ || (rQ(QQ) || CQ(QQ) ? 0 === QQ.length : !!OQ(QQ) && 0 === Object.keys(QQ).length)
    }

    function gQ() {
      return AQ.transports.transports.flatMap((QQ => QQ.getIgnoreUrls()))
    }

    function PQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return gQ().some((FQ => QQ && null != QQ.match(FQ)))
    }

    function ZQ(QQ) {
      return CQ(QQ) ? QQ : QQ instanceof URL ? QQ.href : !nQ(QQ) && sQ(null === QQ || void 0 === QQ ? void 0 : QQ.toString) ? QQ.toString() : void 0
    }
    const yQ = "sessionStorage",
      BQ = "localStorage";

    function dQ(QQ) {
      try {
        let FQ;
        FQ = window[QQ];
        const wQ = "__faro_storage_test__";
        return FQ.setItem(wQ, wQ), FQ.removeItem(wQ), !0
      } catch (wQ) {
        var FQ;
        return null === (FQ = AQ.internalLogger) || void 0 === FQ || FQ.info(`Web storage of type ${QQ} is not available. Reason: ${wQ}`), !1
      }
    }

    function QF(QQ, FQ) {
      return oF(FQ) ? window[FQ].getItem(QQ) : null
    }

    function FF(QQ, FQ, wQ) {
      if (oF(wQ)) try {
        window[wQ].setItem(QQ, FQ)
      } catch (LQ) {}
    }

    function wF(QQ, FQ) {
      oF(FQ) && window[FQ].removeItem(QQ)
    }
    const LF = dQ(BQ),
      qF = dQ(yQ);

    function oF(QQ) {
      return QQ === BQ ? LF : QQ === yQ && qF
    }

    function DF(QQ) {
      return DF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, DF(QQ)
    }

    function kF(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != DF(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != DF(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == DF(FQ) ? FQ : FQ + ""
    }

    function vF(QQ, FQ, wQ) {
      return (FQ = kF(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function mF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function uF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? mF(Object(wQ), !0).forEach((function(FQ) {
          vF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : mF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function HF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AQ;
      var FQ, wQ, LQ;
      const qQ = QQ.config.sessionTracking,
        oQ = null !== (FQ = null !== (wQ = null === qQ || void 0 === qQ || null === (LQ = qQ.sampler) || void 0 === LQ ? void 0 : LQ.call(qQ, {
          metas: QQ.metas.value
        })) && void 0 !== wQ ? wQ : null === qQ || void 0 === qQ ? void 0 : qQ.samplingRate) && void 0 !== FQ ? FQ : 1,
        DQ = "number" === typeof oQ ? function(QQ) {
          return Math.min(1, Math.max(0, QQ))
        }(oQ) : 0;
      if (!(DQ > 0)) return !1;
      if (1 === DQ) return !0;
      try {
        const QQ = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.getRandomValues)) {
          const FQ = new Uint32Array(1);
          return QQ.getRandomValues(FQ), FQ[0] / Math.pow(2, 32) < DQ
        }
      } catch (kQ) {}
      return Math.random() < DQ
    }

    function bF() {
      return Date.now()
    }

    function YF() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function xF() {
      return (new Date).toISOString()
    }

    function AF(QQ) {
      return new Date(QQ).toISOString()
    }
    const tF = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function eF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const FQ = new Uint32Array(QQ),
        wQ = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === wQ || void 0 === wQ ? void 0 : wQ.getRandomValues) wQ.getRandomValues(FQ);
      else
        for (let qQ = 0; qQ < QQ; qQ++) FQ[qQ] = Math.floor(4294967296 * Math.random());
      let LQ = "";
      for (let qQ = 0; qQ < QQ; qQ++) LQ += tF[FQ[qQ] % 59];
      return LQ
    }

    function MF(QQ, FQ) {
      if (QQ === FQ) return !0;
      if (eQ(QQ, "number") && isNaN(QQ)) return eQ(FQ, "number") && isNaN(FQ);
      const wQ = rQ(QQ),
        LQ = rQ(FQ);
      if (wQ !== LQ) return !1;
      if (wQ && LQ) {
        const wQ = QQ.length;
        if (wQ !== FQ.length) return !1;
        for (let LQ = wQ; 0 !== LQ--;)
          if (!MF(QQ[LQ], FQ[LQ])) return !1;
        return !0
      }
      const qQ = OQ(QQ),
        oQ = OQ(FQ);
      if (qQ !== oQ) return !1;
      if (QQ && FQ && qQ && oQ) {
        const wQ = Object.keys(QQ),
          LQ = Object.keys(FQ);
        if (wQ.length !== LQ.length) return !1;
        for (let QQ of wQ)
          if (!LQ.includes(QQ)) return !1;
        for (let qQ of wQ)
          if (!MF(QQ[qQ], FQ[qQ])) return !1;
        return !0
      }
      return !1
    }
    const GF = "click",
      pF = "navigation",
      cF = "view_changed",
      CF = "session_start",
      SF = "session_resume",
      iF = "session_extend",
      WF = "service_name_override",
      RF = "route_change";

    function OF() {
      let {
        sessionId: QQ,
        started: FQ,
        lastActivity: wQ,
        isSampled: LQ = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, qQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AQ;
      var oQ;
      const DQ = bF(),
        kQ = null === (oQ = qQ.config) || void 0 === oQ || null === (oQ = oQ.sessionTracking) || void 0 === oQ ? void 0 : oQ.generateSessionId;
      return null == QQ && (QQ = "function" === typeof kQ ? kQ() : eF()), {
        sessionId: QQ,
        lastActivity: null !== wQ && void 0 !== wQ ? wQ : DQ,
        started: null !== FQ && void 0 !== FQ ? FQ : DQ,
        isSampled: LQ
      }
    }

    function sF(QQ) {
      if (null == QQ) return !1;
      const FQ = bF();
      return FQ - QQ.started < 144e5 && FQ - QQ.lastActivity < DQ
    }

    function rF(QQ) {
      let {
        fetchUserSession: FQ,
        storeUserSession: wQ,
        adoptSession: LQ,
        updateInterval: qQ = 0
      } = QQ, kQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AQ, vQ = 0;
      return function() {
        let {
          forceSessionExtend: QQ = !1,
          refreshActivity: mQ = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var uQ, HQ;
        if (!FQ || !wQ) return;
        const bQ = bF();
        if (!QQ && bQ < vQ && vQ - bQ <= qQ) return;
        const YQ = kQ.config.sessionTracking,
          xQ = null === YQ || void 0 === YQ ? void 0 : YQ.persistent;
        if (xQ && !LF || !xQ && !qF) return;
        const AQ = FQ();
        if (vQ = Math.min(bQ + qQ, (null !== (uQ = null === AQ || void 0 === AQ ? void 0 : AQ.started) && void 0 !== uQ ? uQ : bQ) + oQ, (null !== (HQ = null === AQ || void 0 === AQ ? void 0 : AQ.lastActivity) && void 0 !== HQ ? HQ : bQ) + DQ), !1 === QQ && sF(AQ)) {
          var tQ;
          mQ && wQ(uF(uF({}, AQ), {}, {
            lastActivity: bQ
          }));
          const QQ = null === (tQ = kQ.metas.value.session) || void 0 === tQ ? void 0 : tQ.id;
          null != LQ && null != AQ.sessionMeta && AQ.sessionId !== QQ && LQ(AQ.sessionMeta)
        } else {
          var eQ, MQ, GQ;
          let QQ = UF(OF({
            isSampled: HF(kQ)
          }, kQ), AQ, kQ);
          vQ = bQ + qQ, wQ(QQ), null === (eQ = kQ.api) || void 0 === eQ || eQ.setSession(QQ.sessionMeta), null === YQ || void 0 === YQ || null === (MQ = YQ.onSessionChange) || void 0 === MQ || MQ.call(YQ, null !== (GQ = null === AQ || void 0 === AQ ? void 0 : AQ.sessionMeta) && void 0 !== GQ ? GQ : null, QQ.sessionMeta)
        }
      }
    }

    function IF(QQ) {
      let FQ, {
          fetchUserSession: wQ,
          storeUserSession: LQ,
          updateInterval: qQ = 0
        } = QQ,
        oQ = 0;
      return QQ => {
        const DQ = bF();
        if (QQ === FQ && DQ < oQ && oQ - DQ <= qQ) return;
        FQ = QQ, oQ = DQ + qQ;
        const kQ = wQ();
        (null === kQ || void 0 === kQ ? void 0 : kQ.sessionId) === QQ && sF(kQ) && LQ(uF(uF({}, kQ), {}, {
          lastActivity: DQ
        }))
      }
    }

    function UF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AQ;
      var LQ, qQ, oQ, DQ, kQ, vQ;
      const mQ = uF(uF({}, QQ), {}, {
          sessionMeta: {
            id: QQ.sessionId,
            attributes: TF(uF(uF(uF({}, null === (LQ = wQ.config.sessionTracking) || void 0 === LQ || null === (LQ = LQ.session) || void 0 === LQ ? void 0 : LQ.attributes), null !== (qQ = null === (oQ = wQ.metas.value.session) || void 0 === oQ ? void 0 : oQ.attributes) && void 0 !== qQ ? qQ : {}), {}, {
              isSampled: QQ.isSampled.toString()
            }))
          }
        }),
        uQ = null !== (DQ = null === (kQ = wQ.metas.value.session) || void 0 === kQ ? void 0 : kQ.overrides) && void 0 !== DQ ? DQ : null === FQ || void 0 === FQ || null === (vQ = FQ.sessionMeta) || void 0 === vQ ? void 0 : vQ.overrides;
      nQ(uQ) || (mQ.sessionMeta.overrides = uQ);
      const HQ = null === FQ || void 0 === FQ ? void 0 : FQ.sessionId;
      return null != HQ && (mQ.sessionMeta.attributes.previousSession = HQ), mQ
    }

    function NF(QQ) {
      let {
        fetchUserSession: FQ,
        storeUserSession: wQ
      } = QQ, LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AQ, qQ = !1;
      return function(QQ) {
        if (qQ) return;
        const oQ = QQ.session,
          DQ = FQ();
        let kQ = null === oQ || void 0 === oQ ? void 0 : oQ.id;
        const vQ = null === oQ || void 0 === oQ ? void 0 : oQ.attributes,
          mQ = null === oQ || void 0 === oQ ? void 0 : oQ.overrides,
          uQ = null === DQ || void 0 === DQ ? void 0 : DQ.sessionMeta,
          HQ = null === uQ || void 0 === uQ ? void 0 : uQ.overrides,
          bQ = !!mQ && !MF(mQ, HQ),
          YQ = !!vQ && !MF(vQ, null === uQ || void 0 === uQ ? void 0 : uQ.attributes);
        if (oQ && kQ !== (null === DQ || void 0 === DQ ? void 0 : DQ.sessionId) || YQ || bQ) {
          var xQ, AQ;
          const QQ = null != DQ && kQ === DQ.sessionId,
            FQ = UF(QQ ? DQ : OF({
              sessionId: kQ,
              isSampled: HF(LQ)
            }, LQ), DQ, LQ),
            oQ = null === DQ || void 0 === DQ || null === (xQ = DQ.sessionMeta) || void 0 === xQ || null === (xQ = xQ.attributes) || void 0 === xQ ? void 0 : xQ.previousSession;
          QQ && null != oQ && oQ !== FQ.sessionId && (FQ.sessionMeta.attributes.previousSession = oQ), (null === (AQ = FQ.sessionMeta.attributes) || void 0 === AQ ? void 0 : AQ.previousSession) === FQ.sessionId && delete FQ.sessionMeta.attributes.previousSession, wQ(FQ),
            function(QQ, FQ) {
              let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var qQ, oQ, DQ;
              if (!FQ) return;
              const kQ = wQ.serviceName,
                vQ = null !== (qQ = null !== (oQ = LQ.serviceName) && void 0 !== oQ ? oQ : null === (DQ = QQ.metas.value.app) || void 0 === DQ ? void 0 : DQ.name) && void 0 !== qQ ? qQ : "";
              kQ && kQ !== vQ && QQ.api.pushEvent(WF, {
                serviceName: kQ,
                previousServiceName: vQ
              })
            }(LQ, bQ, mQ, HQ), qQ = !0;
          try {
            LQ.api.setSession(FQ.sessionMeta)
          } finally {
            qQ = !1
          }
        }
      }
    }

    function TF(QQ) {
      const FQ = {};
      for (const wQ of Object.keys(QQ)) {
        const LQ = QQ[wQ];
        void 0 !== LQ && (FQ[wQ] = LQ)
      }
      return FQ
    }

    function KF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== QQ && void 0 !== QQ ? QQ : {}, function() {
        const QQ = new WeakSet;
        return function(FQ, wQ) {
          if (OQ(wQ) && null !== wQ) {
            if (QQ.has(wQ)) return null;
            QQ.add(wQ)
          }
          return wQ
        }
      }())
    }

    function zF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const FQ = {};
      for (const [wQ, LQ] of Object.entries(QQ)) FQ[wQ] = OQ(LQ) && null !== LQ ? KF(LQ) : String(LQ);
      return FQ
    }
    var lF = class QQ {
      constructor() {
        var FQ = this;
        let wQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AQ;
        this.context = wQ, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = QQ => {
          this.adopting = !0;
          try {
            var FQ;
            null === (FQ = this.context.api) || void 0 === FQ || FQ.setSession(QQ)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: QQ = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return FQ.updateUserSession({
            refreshActivity: QQ
          })
        }, this.recordActivity = IF({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          updateInterval: kQ
        }), this.updateUserSession = rF({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: kQ
        }, wQ), this.init()
      }
      static removeUserSession() {
        wF(qQ, QQ.storageTypeLocal)
      }
      static storeUserSession(FQ) {
        FF(qQ, KF(FQ), QQ.storageTypeLocal)
      }
      static fetchUserSession() {
        const FQ = QF(qQ, QQ.storageTypeLocal);
        return FQ ? JSON.parse(FQ) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var QQ;
            this.updateSession({
              refreshActivity: !1
            });
            const FQ = null === (QQ = this.context.api) || void 0 === QQ || null === (QQ = QQ.getSession()) || void 0 === QQ ? void 0 : QQ.id;
            FQ && this.recordActivity(FQ)
          }
        })), this.context.metas.addListener(NF({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession
        }, this.context))
      }
    };
    lF.storageTypeLocal = BQ;
    var jF = class QQ {
      constructor() {
        var FQ = this;
        let wQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AQ;
        this.context = wQ, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: QQ = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return FQ.updateUserSession({
            refreshActivity: QQ
          })
        }, this.recordActivity = IF({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          updateInterval: kQ
        }), this.updateUserSession = rF({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          updateInterval: kQ
        }, wQ), this.init()
      }
      static removeUserSession() {
        wF(qQ, QQ.storageTypeSession)
      }
      static storeUserSession(FQ) {
        FF(qQ, KF(FQ), QQ.storageTypeSession)
      }
      static fetchUserSession() {
        const FQ = QF(qQ, QQ.storageTypeSession);
        return FQ ? JSON.parse(FQ) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var QQ;
            this.updateSession({
              refreshActivity: !1
            });
            const FQ = null === (QQ = this.context.api) || void 0 === QQ || null === (QQ = QQ.getSession()) || void 0 === QQ ? void 0 : QQ.id;
            FQ && this.recordActivity(FQ)
          }
        })), this.context.metas.addListener(NF({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession
        }, this.context))
      }
    };
    jF.storageTypeSession = yQ;
    const aF = new WeakMap;

    function XF(QQ) {
      let FQ = aF.get(QQ);
      if (!FQ) {
        let wQ = [],
          LQ = [];
        FQ = {
          addSessionUpdateListener: QQ => {
            wQ.push(QQ)
          },
          removeSessionUpdateListener: QQ => {
            wQ = wQ.filter((FQ => FQ !== QQ))
          },
          notifySessionUpdate: QQ => {
            wQ.forEach((FQ => FQ(QQ)))
          },
          shouldCapture: () => LQ.every((QQ => QQ())),
          addCaptureFilter: QQ => {
            LQ.push(QQ)
          },
          removeCaptureFilter: QQ => {
            LQ = LQ.filter((FQ => FQ !== QQ))
          }
        }, aF.set(QQ, FQ)
      }
      return FQ
    }
    var fF = class {
      constructor(QQ, FQ, wQ) {
        this.metas = QQ, this.transports = FQ, this.onActivate = wQ, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = QQ => {
          var FQ, wQ, LQ;
          const qQ = this.pending;
          var oQ, DQ;
          if ("overrides" === QQ.type) return void(this.pending = {
            reset: null !== (oQ = null === qQ || void 0 === qQ ? void 0 : qQ.reset) && void 0 !== oQ && oQ,
            inheritOverrides: null === (DQ = null === qQ || void 0 === qQ ? void 0 : qQ.inheritOverrides) || void 0 === DQ || DQ,
            session: uF(uF({}, null === qQ || void 0 === qQ ? void 0 : qQ.session), {}, {
              overrides: uF(uF({}, null === qQ || void 0 === qQ ? void 0 : qQ.session.overrides), QQ.overrides)
            })
          });
          const kQ = QQ.session,
            vQ = nQ(kQ) || null != kQ && "id" in kQ && !kQ.id,
            mQ = null !== (FQ = null === kQ || void 0 === kQ ? void 0 : kQ.overrides) && void 0 !== FQ ? FQ : null === qQ || void 0 === qQ ? void 0 : qQ.session.overrides;
          this.pending = {
            reset: vQ || !(null === kQ || void 0 === kQ ? void 0 : kQ.id) && null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.reset) && void 0 !== wQ && wQ,
            inheritOverrides: !(!QQ.overrides && void 0 !== (null === kQ || void 0 === kQ ? void 0 : kQ.overrides)) && (null === (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.inheritOverrides) || void 0 === LQ || LQ),
            session: {
              id: null === kQ || void 0 === kQ ? void 0 : kQ.id,
              attributes: (null === kQ || void 0 === kQ ? void 0 : kQ.attributes) && uF({}, kQ.attributes),
              overrides: QQ.overrides ? uF(uF({}, null === qQ || void 0 === qQ ? void 0 : qQ.session.overrides), QQ.overrides) : mQ && uF({}, mQ)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var QQ, FQ;
        this.waiting = !0, XF(this.metas).addSessionUpdateListener(this.recordUpdate), XF(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (QQ = (FQ = this.metas).addCaptureListener) || void 0 === QQ || QQ.call(FQ, this.activate), this.activate()
      }
      destroy() {
        var QQ, FQ;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), XF(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (QQ = (FQ = this.metas).removeCaptureListener) || void 0 === QQ || QQ.call(FQ, this.activate), XF(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function VF(QQ) {
      return (null === QQ || void 0 === QQ ? void 0 : QQ.persistent) ? lF : jF
    }

    function hF() {}
    let JF = function(QQ) {
      return QQ[QQ.OFF = 0] = "OFF", QQ[QQ.ERROR = 1] = "ERROR", QQ[QQ.WARN = 2] = "WARN", QQ[QQ.INFO = 3] = "INFO", QQ[QQ.VERBOSE = 4] = "VERBOSE", QQ
    }({});
    const EF = {
        debug: hF,
        error: hF,
        info: hF,
        prefix: "Faro",
        warn: hF
      },
      nF = 1;

    function gF(QQ) {
      return gF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, gF(QQ)
    }

    function PF(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != gF(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != gF(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == gF(FQ) ? FQ : FQ + ""
    }

    function ZF(QQ, FQ, wQ) {
      return (FQ = PF(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function yF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function BF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? yF(Object(wQ), !0).forEach((function(FQ) {
          ZF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : yF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }
    const dF = BF({}, console);
    var Qw = class {
        constructor() {
          this.unpatchedConsole = dF, this.internalLogger = EF, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
          this.internalLogger.debug(`${this.name}\n`, ...FQ)
        }
        logInfo() {
          for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
          this.internalLogger.info(`${this.name}\n`, ...FQ)
        }
        logWarn() {
          for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
          this.internalLogger.warn(`${this.name}\n`, ...FQ)
        }
        logError() {
          for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
          this.internalLogger.error(`${this.name}\n`, ...FQ)
        }
      },
      Fw = class extends Qw {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ww = "2.12.1";
    var Lw = class extends Fw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ww, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(QQ) {
        var FQ;
        const wQ = QQ.session;
        if (wQ && wQ.id !== (null === (FQ = this.notifiedSession) || void 0 === FQ ? void 0 : FQ.id)) {
          var LQ;
          if (this.isAdoptingSession()) return void(this.notifiedSession = wQ);
          if (this.notifiedSession && this.notifiedSession.id === (null === (LQ = wQ.attributes) || void 0 === LQ ? void 0 : LQ.previousSession)) return this.api.pushEvent(iF, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = wQ);
          this.notifiedSession = wQ, this.api.pushEvent(CF, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(QQ, FQ, wQ) {
        const LQ = null === wQ || void 0 === wQ ? void 0 : wQ.session;
        let qQ, oQ, DQ = QQ.fetchUserSession();
        if (FQ.persistent && FQ.maxSessionPersistenceTime && DQ) {
          const QQ = bF();
          DQ.lastActivity < QQ - FQ.maxSessionPersistenceTime && (lF.removeUserSession(), DQ = null)
        }
        const kQ = sF(DQ);
        if ((null === wQ || void 0 === wQ ? void 0 : wQ.reset) || !kQ || (null === LQ || void 0 === LQ ? void 0 : LQ.id) && LQ.id !== (null === DQ || void 0 === DQ ? void 0 : DQ.sessionId)) {
          var vQ, mQ, uQ, HQ, bQ, YQ;
          oQ = OF({
            sessionId: (null === wQ || void 0 === wQ ? void 0 : wQ.reset) ? void 0 : null !== (vQ = null === LQ || void 0 === LQ ? void 0 : LQ.id) && void 0 !== vQ ? vQ : null === (mQ = FQ.session) || void 0 === mQ ? void 0 : mQ.id,
            isSampled: HF(this)
          }, this);
          const QQ = oQ.sessionId,
            xQ = wQ && kQ ? null === DQ || void 0 === DQ || null === (uQ = DQ.sessionMeta) || void 0 === uQ ? void 0 : uQ.overrides : void 0,
            AQ = xQ ? uF(uF({}, null === (HQ = FQ.session) || void 0 === HQ ? void 0 : HQ.overrides), xQ) : null === (bQ = FQ.session) || void 0 === bQ ? void 0 : bQ.overrides;
          oQ.sessionMeta = uF({
            id: QQ,
            attributes: uF({
              isSampled: oQ.isSampled.toString()
            }, null === (YQ = FQ.session) || void 0 === YQ ? void 0 : YQ.attributes)
          }, AQ ? {
            overrides: AQ
          } : {}), qQ = CF
        } else {
          var xQ, AQ;
          const QQ = null === DQ || void 0 === DQ ? void 0 : DQ.sessionId;
          oQ = OF({
            sessionId: QQ,
            isSampled: DQ.isSampled || !1,
            started: null === DQ || void 0 === DQ ? void 0 : DQ.started
          }, this);
          const wQ = null === DQ || void 0 === DQ ? void 0 : DQ.sessionMeta,
            LQ = uF(uF({}, null === (xQ = FQ.session) || void 0 === xQ ? void 0 : xQ.overrides), null === wQ || void 0 === wQ ? void 0 : wQ.overrides);
          oQ.sessionMeta = uF(uF({}, FQ.session), {}, {
            id: QQ,
            attributes: uF(uF(uF({}, null === (AQ = FQ.session) || void 0 === AQ ? void 0 : AQ.attributes), null === wQ || void 0 === wQ ? void 0 : wQ.attributes), {}, {
              isSampled: oQ.isSampled.toString()
            }),
            overrides: LQ
          }), qQ = SF
        }
        var tQ;
        if (LQ && (oQ.sessionMeta = uF(uF({}, oQ.sessionMeta), {}, {
            attributes: uF(uF(uF({}, null === (tQ = oQ.sessionMeta) || void 0 === tQ ? void 0 : tQ.attributes), LQ.attributes), {}, {
              isSampled: oQ.isSampled.toString()
            })
          }), LQ.overrides)) {
          const QQ = (null === wQ || void 0 === wQ ? void 0 : wQ.inheritOverrides) ? uF(uF({}, oQ.sessionMeta.overrides), LQ.overrides) : LQ.overrides;
          Object.keys(QQ).length > 0 ? oQ.sessionMeta.overrides = QQ : delete oQ.sessionMeta.overrides
        }
        return {
          initialSession: oQ,
          lifecycleType: qQ
        }
      }
      registerBeforeSendHook(QQ) {
        var FQ;
        this.beforeSendHook = FQ => {
          var wQ, LQ;
          const qQ = null === (wQ = FQ.meta.session) || void 0 === wQ ? void 0 : wQ.id;
          qQ && !this.transports.isPaused() && QQ(qQ);
          const oQ = null === (LQ = FQ.meta.session) || void 0 === LQ ? void 0 : LQ.attributes;
          if (oQ && "true" === (null === oQ || void 0 === oQ ? void 0 : oQ.isSampled)) {
            var DQ;
            let QQ = JSON.parse(JSON.stringify(FQ));
            const wQ = null === (DQ = QQ.meta.session) || void 0 === DQ ? void 0 : DQ.attributes;
            var kQ;
            if (null === wQ || void 0 === wQ || delete wQ.isSampled, 0 === Object.keys(null !== wQ && void 0 !== wQ ? wQ : {}).length) null === (kQ = QQ.meta.session) || void 0 === kQ || delete kQ.attributes;
            return QQ
          }
          return null
        }, null === (FQ = this.transports) || void 0 === FQ || FQ.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var QQ;
        this.logDebug("init session instrumentation");
        const FQ = document.prerendering;
        var wQ;
        if ((null === (QQ = this.config.sessionTracking) || void 0 === QQ ? void 0 : QQ.enabled) && (FQ || this.prerenderSession)) return null !== (wQ = this.prerenderSession) && void 0 !== wQ || (this.prerenderSession = new fF(this.metas, this.transports, (QQ => {
          this.prerenderSession = void 0, this.initializeSession(QQ)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(QQ) {
        const FQ = this.config.sessionTracking;
        if (null === FQ || void 0 === FQ ? void 0 : FQ.enabled) {
          var wQ, LQ;
          const qQ = VF(FQ),
            oQ = new qQ(this);
          this.isAdoptingSession = oQ.isAdopting, this.registerBeforeSendHook(oQ.recordActivity);
          const {
            initialSession: DQ,
            lifecycleType: kQ
          } = this.createInitialSession(qQ, FQ, QQ);
          qQ.storeUserSession(DQ);
          const vQ = DQ.sessionMeta;
          this.notifiedSession = vQ, this.api.setSession(vQ), this.captureListener = () => {
            this.transports.isPaused() || oQ.updateSession({
              refreshActivity: !1
            })
          }, null === (wQ = (LQ = this.metas).addCaptureListener) || void 0 === wQ || wQ.call(LQ, this.captureListener), kQ === CF && this.api.pushEvent(CF, {}, void 0, {
            skipDedupe: !0
          }), kQ === SF && this.api.pushEvent(SF, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var QQ, FQ, wQ;
        (null === (QQ = this.prerenderSession) || void 0 === QQ || QQ.destroy(), this.captureListener) && (null === (FQ = (wQ = this.metas).removeCaptureListener) || void 0 === FQ || FQ.call(wQ, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function qw(QQ, FQ, wQ, LQ) {
      const qQ = {
        filename: QQ || document.location.href,
        function: FQ || "?"
      };
      return void 0 !== wQ && (qQ.lineno = wQ), void 0 !== LQ && (qQ.colno = LQ), qQ
    }
    const ow = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Dw = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      kw = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      vw = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      mw = "safari-extension",
      uw = "safari-web-extension",
      Hw = /Minified React error #\d+;/i;

    function bw(QQ, FQ) {
      const wQ = null === QQ || void 0 === QQ ? void 0 : QQ.includes(mw),
        LQ = !wQ && (null === QQ || void 0 === QQ ? void 0 : QQ.includes("safari-web-extension"));
      return wQ || LQ ? [(null === QQ || void 0 === QQ ? void 0 : QQ.includes("@")) ? QQ.split("@")[0] : QQ, wQ ? `${mw}:${FQ}` : `${uw}:${FQ}`] : [QQ, FQ]
    }
    const Yw = 1024;

    function xw(QQ) {
      let FQ = [];
      QQ.stacktrace ? FQ = QQ.stacktrace.split("\n").filter(((QQ, FQ) => FQ % 2 === 0)) : QQ.stack && (FQ = QQ.stack.split("\n"));
      const wQ = FQ.reduce(((FQ, wQ, LQ) => {
        if (wQ.length > Yw) return FQ;
        let qQ, oQ, DQ, kQ, vQ;
        if (qQ = ow.exec(wQ)) {
          if (oQ = qQ[1], DQ = qQ[2], kQ = qQ[3], vQ = qQ[4], null === DQ || void 0 === DQ ? void 0 : DQ.startsWith("eval")) {
            const QQ = Dw.exec(DQ);
            QQ && (DQ = QQ[1], kQ = QQ[2], vQ = QQ[3])
          }
          DQ = (null === DQ || void 0 === DQ ? void 0 : DQ.startsWith("address at ")) ? DQ.substring(11) : DQ, [oQ, DQ] = bw(oQ, DQ)
        } else if (qQ = kw.exec(wQ)) {
          if (oQ = qQ[1], DQ = qQ[3], kQ = qQ[4], vQ = qQ[5], DQ && DQ.includes(" > eval")) {
            const QQ = vw.exec(DQ);
            QQ && (oQ = oQ || "eval", DQ = QQ[1], kQ = QQ[2])
          } else 0 === LQ && !vQ && SQ(QQ.columnNumber) && (vQ = String(QQ.columnNumber + 1));
          [oQ, DQ] = bw(oQ, DQ)
        }
        return (DQ || oQ) && FQ.push(qw(DQ, oQ, kQ ? Number(kQ) : void 0, vQ ? Number(vQ) : void 0)), FQ
      }), []);
      return Hw.test(QQ.message) ? wQ.slice(1) : wQ
    }

    function Aw(QQ) {
      return {
        frames: xw(QQ)
      }
    }
    const tw = "http-request-start",
      ew = "http-request-end";
    var Mw = class QQ {
      constructor() {
        this.subscribers = []
      }
      subscribe(QQ) {
        return this.subscribers.push(QQ), {
          unsubscribe: () => this.unsubscribe(QQ)
        }
      }
      unsubscribe(QQ) {
        this.subscribers = this.subscribers.filter((FQ => FQ !== QQ))
      }
      notify(QQ) {
        this.subscribers.forEach((FQ => FQ(QQ)))
      }
      first() {
        const FQ = new QQ,
          wQ = QQ => {
            FQ.notify(QQ), LQ.unsubscribe()
          },
          LQ = this.subscribe(wQ),
          qQ = FQ.unsubscribe.bind(FQ);
        return this.withUnsubscribeOverride(FQ, qQ, wQ)
      }
      takeWhile(FQ) {
        const wQ = new QQ,
          LQ = QQ => {
            FQ(QQ) ? wQ.notify(QQ) : wQ.unsubscribe(LQ)
          };
        this.subscribe(LQ);
        const qQ = wQ.unsubscribe.bind(wQ);
        return this.withUnsubscribeOverride(wQ, qQ, LQ)
      }
      filter(FQ) {
        const wQ = new QQ,
          LQ = QQ => {
            FQ(QQ) && wQ.notify(QQ)
          };
        this.subscribe(LQ);
        const qQ = wQ.unsubscribe.bind(wQ);
        return this.withUnsubscribeOverride(wQ, qQ, LQ)
      }
      merge() {
        const FQ = new QQ,
          wQ = [];
        for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
        qQ.forEach((QQ => {
          const LQ = QQ.subscribe((QQ => {
            FQ.notify(QQ)
          }));
          wQ.push(LQ)
        }));
        const DQ = FQ.unsubscribeAll.bind(FQ);
        return FQ.unsubscribe = () => {
          wQ.forEach((QQ => QQ.unsubscribe())), DQ()
        }, FQ
      }
      withUnsubscribeOverride(QQ, FQ, wQ) {
        return QQ.unsubscribe = QQ => {
          FQ(QQ), this.unsubscribe(wQ)
        }, QQ
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Gw = function(QQ) {
      return QQ.TRACE = "trace", QQ.DEBUG = "debug", QQ.INFO = "info", QQ.LOG = "log", QQ.WARN = "warn", QQ.ERROR = "error", QQ
    }({});
    const pw = "log",
      Cw = ["trace", "debug", "info", "log", "warn", "error"];
    let Sw, iw = !1;
    const Ww = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Rw = "Error",
      Ow = QQ => QQ.map((QQ => OQ(QQ) ? KF(QQ) : String(QQ))).join(" ");

    function sw(QQ) {
      let FQ, wQ, LQ, qQ, oQ = [];
      if (jQ(QQ) && QQ.error) FQ = QQ.error.message, wQ = QQ.error.name, oQ = xw(QQ.error);
      else if ((LQ = aQ(QQ)) || XQ(QQ)) {
        const {
          name: qQ,
          message: oQ
        } = QQ;
        wQ = null !== qQ && void 0 !== qQ ? qQ : LQ ? "DOMError" : "DOMException", FQ = oQ ? `${wQ}: ${oQ}` : wQ
      } else lQ(QQ) ? (wQ = QQ.name, FQ = QQ.message, oQ = xw(QQ)) : (OQ(QQ) || (qQ = KQ(QQ))) && (wQ = qQ ? QQ.constructor.name : void 0, FQ = `Non-Error exception captured with keys: ${Object.keys(QQ)}`);
      return [FQ, wQ, oQ]
    }

    function rw(QQ) {
      const [FQ, wQ, LQ, qQ, oQ] = QQ;
      let DQ, kQ, vQ = [];
      const mQ = CQ(FQ),
        uQ = qw(wQ, "?", LQ, qQ);
      return oQ || !mQ ? ([DQ, kQ, vQ] = sw(null !== oQ && void 0 !== oQ ? oQ : FQ), 0 === vQ.length && (vQ = [uQ])) : mQ && ([DQ, kQ] = function(QQ) {
        var FQ, wQ;
        const LQ = QQ.match(Ww),
          qQ = null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ[1]) && void 0 !== FQ ? FQ : Rw;
        return [null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ[2]) && void 0 !== wQ ? wQ : QQ, qQ]
      }(FQ), vQ = [uQ]), {
        value: DQ,
        type: kQ,
        stackFrames: vQ
      }
    }

    function Iw(QQ, FQ) {
      return lQ(QQ[0]) ? rw(QQ) : {
        value: FQ(QQ)
      }
    }
    const Uw = QQ => QQ.map((QQ => {
      try {
        return String(QQ)
      } catch (FQ) {
        return ""
      }
    })).join(" ");
    var Nw = class QQ extends Fw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ww, this.errorSerializer = Uw
      }
      initialize() {
        var FQ, wQ;
        const LQ = this.config.consoleInstrumentation,
          qQ = (null === LQ || void 0 === LQ ? void 0 : LQ.serializeErrors) || !!(null === LQ || void 0 === LQ ? void 0 : LQ.errorSerializer);
        this.errorSerializer = qQ ? null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.errorSerializer) && void 0 !== FQ ? FQ : Ow : Uw;
        const oQ = null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ.disabledLevels) && void 0 !== wQ ? wQ : QQ.defaultDisabledLevels,
          DQ = function(QQ) {
            if (Sw || (Sw = new Mw), !iw) {
              const FQ = null !== QQ && void 0 !== QQ ? QQ : dF;
              Cw.forEach((QQ => {
                console[QQ] = function() {
                  for (var wQ, LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
                  Sw.notify({
                    type: "console",
                    level: QQ,
                    args: qQ
                  }), null === (wQ = FQ[QQ]) || void 0 === wQ || wQ.apply(console, qQ)
                }
              })), iw = !0
            }
            return Sw
          }(this.unpatchedConsole);
        this.subscription = DQ.subscribe((FQ => {
          let {
            level: wQ,
            args: qQ
          } = FQ;
          if (!oQ.includes(wQ)) try {
            if (wQ !== Gw.ERROR || (null === LQ || void 0 === LQ ? void 0 : LQ.consoleErrorAsLog))
              if (wQ === Gw.ERROR && (null === LQ || void 0 === LQ ? void 0 : LQ.consoleErrorAsLog)) {
                const {
                  value: FQ,
                  type: LQ,
                  stackFrames: oQ
                } = Iw(qQ, this.errorSerializer);
                this.api.pushLog(FQ ? [QQ.consoleErrorPrefix + FQ] : qQ, {
                  level: wQ,
                  context: {
                    value: null !== FQ && void 0 !== FQ ? FQ : "",
                    type: null !== LQ && void 0 !== LQ ? LQ : "",
                    stackFrames: (null === oQ || void 0 === oQ ? void 0 : oQ.length) ? Ow(oQ) : ""
                  }
                })
              } else this.api.pushLog(qQ, {
                level: wQ
              });
            else {
              const {
                value: FQ,
                type: wQ,
                stackFrames: LQ
              } = Iw(qQ, this.errorSerializer);
              if (FQ && !wQ && !LQ) return void this.api.pushError(new Error(QQ.consoleErrorPrefix + FQ));
              this.api.pushError(new Error(QQ.consoleErrorPrefix + FQ), {
                type: wQ,
                stackFrames: LQ
              })
            }
          } catch (DQ) {
            this.logError(DQ)
          }
        }))
      }
      destroy() {
        var QQ;
        null === (QQ = this.subscription) || void 0 === QQ || QQ.unsubscribe(), this.subscription = void 0
      }
    };
    Nw.defaultDisabledLevels = [Gw.DEBUG, Gw.TRACE, Gw.LOG], Nw.consoleErrorPrefix = "console.error: ";
    const Tw = [];
    var Kw = class extends Fw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ww
      }
      initialize() {
        this.logDebug("Initializing"),
          function(QQ) {
            const FQ = window.onerror;
            window.onerror = function() {
              for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
              try {
                const {
                  value: FQ,
                  type: wQ,
                  stackFrames: qQ
                } = rw(LQ), oQ = LQ[4];
                if (FQ) {
                  const LQ = {
                    type: wQ,
                    stackFrames: qQ
                  };
                  null != oQ && (LQ.originalError = oQ), QQ.pushError(new Error(FQ), LQ)
                }
              } finally {
                null === FQ || void 0 === FQ || FQ.apply(window, LQ)
              }
            }
          }(this.api),
          function(QQ) {
            const FQ = FQ => {
              var wQ;
              let LQ, qQ, oQ = FQ;
              if (oQ.reason) oQ = FQ.reason;
              else if (null === (wQ = FQ.detail) || void 0 === wQ ? void 0 : wQ.reason) {
                var DQ;
                oQ = null === (DQ = FQ.detail) || void 0 === DQ ? void 0 : DQ.reason
              }
              let kQ = [];
              NQ(oQ) ? (LQ = `Non-Error promise rejection captured with value: ${String(oQ)}`, qQ = "UnhandledRejection") : [LQ, qQ, kQ] = sw(oQ), LQ && QQ.pushError(new Error(LQ), {
                type: qQ,
                stackFrames: kQ
              })
            };
            window.addEventListener("unhandledrejection", FQ), Tw.push(FQ)
          }(this.api)
      }
    };
    const zw = "unknown";
    var lw = class extends Fw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ww, this.waitingForActivation = !1, this.sendViewChangedEvent = QQ => {
          var FQ;
          if (this.waitingForActivation || document.prerendering) return;
          const wQ = QQ.view;
          if (wQ && wQ.name !== (null === (FQ = this.notifiedView) || void 0 === FQ ? void 0 : FQ.name)) {
            var LQ, qQ, oQ;
            const QQ = null !== (LQ = null === (qQ = this.notifiedView) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== LQ ? LQ : zw;
            this.notifiedView = wQ, this.api.pushEvent(cF, {
              fromView: QQ,
              toView: null !== (oQ = wQ.name) && void 0 !== oQ ? oQ : zw
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
    class jw {
      t;
      o = 0;
      i = [];
      l(QQ) {
        if (QQ.hadRecentInput) return;
        const FQ = this.i[0],
          wQ = this.i.at(-1);
        this.o && FQ && wQ && QQ.startTime - wQ.startTime < 1e3 && QQ.startTime - FQ.startTime < 5e3 ? (this.o += QQ.value, this.i.push(QQ)) : (this.o = QQ.value, this.i = [QQ]), this.t?.(QQ)
      }
    }
    const aw = () => {
        const QQ = performance.getEntriesByType("navigation")[0];
        if (QQ && QQ.responseStart > 0 && QQ.responseStart < performance.now()) return QQ
      },
      Xw = QQ => {
        if ("loading" === document.readyState) return "loading";
        const FQ = aw();
        if (FQ) {
          if (QQ < FQ.domInteractive) return "loading";
          if (0 === FQ.domContentLoadedEventStart || QQ < FQ.domContentLoadedEventStart) return "dom-interactive";
          if (0 === FQ.domComplete || QQ < FQ.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      fw = QQ => {
        const FQ = QQ.nodeName;
        return 1 === QQ.nodeType ? FQ.toLowerCase() : FQ.toUpperCase().replace(/^#/, "")
      },
      Vw = QQ => {
        let FQ = "";
        try {
          for (; 9 !== QQ?.nodeType;) {
            const wQ = QQ,
              LQ = wQ.id ? "#" + wQ.id : [fw(wQ), ...Array.from(wQ.classList ?? []).sort()].join(".");
            if (FQ.length + LQ.length > 99) return FQ || LQ;
            if (FQ = FQ ? LQ + ">" + FQ : LQ, wQ.id) break;
            QQ = wQ.parentNode
          }
        } catch {}
        return FQ
      },
      hw = new WeakMap;

    function Jw(QQ, FQ) {
      let wQ = hw.get(FQ);
      return wQ || (wQ = new WeakMap, hw.set(FQ, wQ)), wQ.get(QQ) || wQ.set(QQ, new FQ), wQ.get(QQ)
    }
    let Ew = -1;
    const nw = () => Ew,
      gw = QQ => {
        addEventListener("pageshow", (FQ => {
          FQ.persisted && (Ew = FQ.timeStamp, QQ(FQ))
        }), !0)
      },
      Pw = (QQ, FQ, wQ, LQ) => {
        let qQ, oQ;
        return DQ => {
          FQ.value >= 0 && (DQ || LQ) && (oQ = FQ.value - (qQ ?? 0), (oQ || void 0 === qQ) && (qQ = FQ.value, FQ.delta = oQ, FQ.rating = ((QQ, FQ) => QQ > FQ[1] ? "poor" : QQ > FQ[0] ? "needs-improvement" : "good")(FQ.value, wQ), QQ(FQ)))
        }
      },
      Zw = QQ => {
        requestAnimationFrame((() => requestAnimationFrame((() => QQ()))))
      },
      yw = () => aw()?.activationStart ?? 0;
    let Bw = -1;
    const dw = new Set,
      QL = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      FL = QQ => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === QQ.type)
            for (const QQ of dw) QQ();
          isFinite(Bw) || (Bw = "visibilitychange" === QQ.type ? QQ.timeStamp : 0, removeEventListener("prerenderingchange", FL, !0))
        }
      },
      wL = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Bw = 1 / 0), Bw < 0) {
          const QQ = yw(),
            FQ = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((FQ => "hidden" === FQ.name && FQ.startTime >= QQ))?.startTime;
          Bw = FQ ?? QL(), addEventListener("visibilitychange", FL, !0), addEventListener("prerenderingchange", FL, !0), gw((() => {
            setTimeout((() => {
              Bw = QL()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Bw
          },
          onHidden(QQ) {
            dw.add(QQ)
          }
        }
      },
      LL = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0,
          DQ = arguments.length > 6 ? arguments[6] : void 0;
        const kQ = aw(),
          vQ = kQ?.navigationId || 0;
        let mQ = "navigate";
        return wQ ? mQ = wQ : nw() >= 0 ? mQ = "back-forward-cache" : kQ && (document.prerendering || yw() > 0 ? mQ = "prerender" : document.wasDiscarded ? mQ = "restore" : kQ.type && (mQ = kQ.type.replace(/_/g, "-"))), {
          name: QQ,
          value: FQ,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: mQ,
          navigationId: LQ || vQ,
          navigationInteractionId: qQ,
          navigationURL: oQ || kQ?.name,
          navigationStartTime: DQ || 0
        }
      },
      qL = function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const LQ = QQ.filter((QQ => PerformanceObserver.supportedEntryTypes.includes(QQ)));
          if (LQ.length > 0) {
            const QQ = new PerformanceObserver((QQ => {
              queueMicrotask((() => {
                const wQ = QQ.getEntries();
                LQ.length > 1 && wQ.sort(((QQ, FQ) => QQ.startTime + QQ.duration - (FQ.startTime + FQ.duration))), FQ(wQ)
              }))
            }));
            for (const FQ of LQ) QQ.observe({
              type: FQ,
              buffered: !0,
              ...wQ
            });
            return QQ
          }
        } catch {}
      },
      oL = QQ => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && QQ && QQ.reportSoftNavs,
      DL = (QQ, FQ) => {
        if (QQ.set(FQ.navigationId, FQ), QQ.size > 2) {
          const FQ = QQ.keys().next().value;
          void 0 !== FQ && QQ.delete(FQ)
        }
      },
      kL = QQ => {
        let FQ = !1;
        return () => {
          FQ || (QQ(), FQ = !0)
        }
      };
    class vL {
      u
    }
    const mL = QQ => {
        document.prerendering ? addEventListener("prerenderingchange", QQ, !0) : QQ()
      },
      uL = [1800, 3e3],
      HL = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wQ = oL(FQ);
        mL((() => {
          const LQ = Jw(FQ, vL),
            qQ = wL();
          let oQ, DQ = LL("FCP");
          const kQ = qL(["paint"], (QQ => {
            for (const FQ of QQ) "first-contentful-paint" === FQ.name && (kQ.disconnect(), FQ.startTime < qQ.firstHiddenTime && (DQ.value = Math.max(FQ.startTime - yw(), 0), DQ.entries.push(FQ), DQ.navigationId = FQ.navigationId || DQ.navigationId, oQ(!0)))
          }));
          kQ && (oQ = Pw(QQ, DQ, uL, FQ.reportAllChanges), gw((wQ => {
            DQ = LL("FCP", -1, "back-forward-cache", DQ.navigationId, DQ.navigationInteractionId, DQ.navigationURL, nw()), oQ = Pw(QQ, DQ, uL, FQ.reportAllChanges), Zw((() => {
              DQ.value = performance.now() - wQ.timeStamp, oQ(!0)
            }))
          }))), wQ && qL(["soft-navigation"], (wQ => {
            wQ.forEach((wQ => {
              LQ.u && wQ.navigationId && DL(LQ.u, wQ);
              const qQ = Math.max((wQ.presentationTime || wQ.paintTime || 0) - wQ.startTime, 0);
              DQ = LL("FCP", qQ, "soft-navigation", wQ.navigationId, wQ.interactionId, wQ.name, wQ.startTime), oQ = Pw(QQ, DQ, uL, FQ.reportAllChanges), oQ(!0)
            }))
          }), FQ)
        }))
      },
      bL = [.1, .25],
      YL = QQ => QQ.find((QQ => 1 === QQ.node?.nodeType)) || QQ[0];
    let xL = 0,
      AL = 1 / 0,
      tL = 0;
    const eL = QQ => {
      for (const FQ of QQ) FQ.interactionId && (AL = Math.min(AL, FQ.interactionId), tL = Math.max(tL, FQ.interactionId), xL = tL ? (tL - AL) / 7 + 1 : 0)
    };
    let ML;
    const GL = () => ML ? xL : performance.interactionCount ?? 0;
    class pL {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return GL() - this.h
      }
      D() {
        this.h = GL(), this.v.length = 0, this.p.clear()
      }
      S(QQ) {
        const FQ = this.T(),
          wQ = Math.min(this.v.length - 1, Math.floor(FQ / 50));
        return !FQ || -1 !== wQ || "soft-navigation" !== QQ && "back-forward-cache" !== QQ ? this.v[wQ] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(QQ) {
        if (this.m?.(QQ), !QQ.interactionId) return;
        const FQ = this.v.at(-1);
        let wQ = this.p.get(QQ.interactionId);
        if (wQ || this.v.length < 10 || QQ.duration > FQ.k) {
          if (wQ ? QQ.duration > wQ.k ? (wQ.entries = [QQ], wQ.k = QQ.duration) : QQ.duration === wQ.k && QQ.startTime === wQ.entries[0].startTime && wQ.entries.push(QQ) : (wQ = {
              id: QQ.interactionId,
              entries: [QQ],
              k: QQ.duration
            }, this.p.set(wQ.id, wQ), this.v.push(wQ)), this.v.sort(((QQ, FQ) => FQ.k - QQ.k)), this.v.length > 10) {
            const QQ = this.v.splice(10);
            for (const FQ of QQ) this.p.delete(FQ.id)
          }
          this.M?.(wQ)
        }
      }
    }
    const cL = QQ => {
        const FQ = "requestIdleCallback" in globalThis ? 1e3 : 0,
          wQ = globalThis.requestIdleCallback || setTimeout,
          LQ = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) QQ();
        else {
          const qQ = kL(QQ);
          let oQ = -1;
          const DQ = () => {
            LQ(oQ), qQ()
          };
          addEventListener("visibilitychange", DQ, {
            once: !0,
            capture: !0
          }), oQ = wQ((() => {
            removeEventListener("visibilitychange", DQ, {
              capture: !0
            }), qQ()
          }), {
            timeout: FQ
          })
        }
      },
      CL = [200, 500],
      SL = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wQ = Jw(FQ = Object.assign({}, FQ), pL);
        let LQ = [],
          qQ = [],
          oQ = 0;
        const DQ = new WeakMap,
          kQ = new WeakMap;
        let vQ = !1;
        const mQ = () => {
            vQ || (vQ = !0, cL(uQ))
          },
          uQ = () => {
            const QQ = new Set(wQ.v.map((QQ => DQ.get(QQ.entries[0])))),
              FQ = qQ.length - 10;
            qQ = qQ.filter(((wQ, LQ) => LQ >= FQ || QQ.has(wQ)));
            const kQ = new Set;
            for (const wQ of qQ) {
              const QQ = HQ(wQ.startTime, wQ.processingEnd);
              for (const FQ of QQ) kQ.add(FQ)
            }
            const mQ = LQ.length - 10;
            LQ = LQ.filter(((QQ, FQ) => kQ.has(QQ) || FQ >= mQ && QQ.startTime > oQ)), vQ = !1
          };
        wQ.m = QQ => {
          const wQ = QQ.startTime + QQ.duration;
          let LQ;
          oQ = Math.max(oQ, QQ.processingEnd);
          for (let oQ = qQ.length - 1; oQ >= 0; oQ--) {
            const DQ = qQ[oQ];
            if (Math.abs(wQ - DQ.renderTime) <= 8) {
              LQ = DQ, LQ.startTime = Math.min(QQ.startTime, LQ.startTime), LQ.processingStart = Math.min(QQ.processingStart, LQ.processingStart), LQ.processingEnd = Math.max(QQ.processingEnd, LQ.processingEnd), FQ.includeProcessedEventEntries && LQ.entries.push(QQ);
              break
            }
          }
          LQ || (LQ = {
            startTime: QQ.startTime,
            processingStart: QQ.processingStart,
            processingEnd: QQ.processingEnd,
            renderTime: wQ,
            entries: FQ.includeProcessedEventEntries ? [QQ] : []
          }, qQ.push(LQ)), QQ.interactionId && DQ.set(QQ, LQ), mQ()
        }, wQ.M = QQ => {
          if (!kQ.get(QQ)) {
            const wQ = QQ.entries.find((QQ => QQ.target))?.target;
            if (wQ) {
              const LQ = FQ.generateTarget?.(wQ) ?? Vw(wQ);
              kQ.set(QQ, LQ)
            } else {
              const FQ = QQ.entries.find((QQ => QQ.targetSelector))?.targetSelector;
              FQ && kQ.set(QQ, FQ)
            }
          }
        };
        const HQ = (QQ, FQ) => {
          const wQ = [];
          for (const qQ of LQ)
            if (!(qQ.startTime + qQ.duration < QQ)) {
              if (qQ.startTime > FQ) break;
              wQ.push(qQ)
            } return wQ
        };
        qL(["long-animation-frame"], (QQ => {
            LQ = LQ.concat(QQ), mQ()
          }), FQ),
          function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const wQ = wL();
            mL((() => {
              "interactionCount" in performance || ML || (ML = qL(["event"], eL, {
                durationThreshold: 0
              }));
              let LQ, qQ = LL("INP");
              const oQ = Jw(FQ, pL),
                DQ = (wQ, DQ, kQ, vQ, mQ) => {
                  oQ.D(), qQ = LL("INP", -1, wQ, DQ, kQ, vQ, mQ), LQ = Pw(QQ, qQ, CL, FQ.reportAllChanges)
                },
                kQ = () => {
                  const QQ = oQ.S(qQ.navigationType);
                  QQ && QQ.k !== qQ.value && (qQ.value = QQ.k, qQ.entries = QQ.entries, LQ())
                },
                vQ = QQ => {
                  kQ(), LQ(!0), DQ("soft-navigation", QQ.navigationId, QQ.interactionId, QQ.name, QQ.startTime)
                },
                mQ = function(QQ) {
                  let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  cL((() => {
                    for (const FQ of QQ) "soft-navigation" !== FQ.entryType ? oQ.l(FQ) : vQ(FQ);
                    kQ(), FQ && LQ(!0)
                  }))
                },
                uQ = ["event", "first-input"];
              oL(FQ) && uQ.push("soft-navigation");
              const HQ = qL(uQ, mQ, {
                ...FQ,
                durationThreshold: FQ.durationThreshold ?? 40
              });
              LQ = Pw(QQ, qQ, CL, FQ.reportAllChanges), HQ && (wQ.onHidden((() => {
                mQ(HQ.takeRecords(), !0)
              })), gw((() => {
                DQ("back-forward-cache", qQ.navigationId, qQ.navigationInteractionId, qQ.navigationURL, nw())
              })))
            }))
          }((FQ => {
            QQ((QQ => {
              if (0 === QQ.entries.length) {
                const FQ = QQ.navigationStartTime || 0,
                  wQ = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: QQ.value,
                    loadState: Xw(FQ)
                  };
                return Object.assign(QQ, {
                  attribution: wQ
                })
              }
              const FQ = QQ.entries[0],
                LQ = DQ.get(FQ),
                qQ = Math.max(LQ.processingStart, FQ.startTime),
                oQ = Math.max(FQ.startTime + FQ.duration, qQ),
                vQ = Math.min(LQ.processingEnd, oQ),
                mQ = LQ.entries.sort(((QQ, FQ) => QQ.processingStart - FQ.processingStart)),
                uQ = HQ(FQ.startTime, vQ),
                bQ = wQ.p.get(FQ.interactionId),
                YQ = {
                  interactionTarget: kQ.get(bQ),
                  interactionType: FQ.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: FQ.startTime,
                  nextPaintTime: oQ,
                  processedEventEntries: mQ,
                  longAnimationFrameEntries: uQ,
                  inputDelay: qQ - FQ.startTime,
                  processingDuration: vQ - qQ,
                  presentationDelay: oQ - vQ,
                  loadState: Xw(FQ.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (QQ => {
                const FQ = QQ.interactionTime,
                  wQ = QQ.nextPaintTime;
                if (!QQ.longAnimationFrameEntries?.length || !FQ || !wQ) return;
                const LQ = QQ.inputDelay,
                  qQ = QQ.processingDuration;
                let oQ, DQ, kQ = 0,
                  vQ = 0,
                  mQ = 0,
                  uQ = 0;
                for (const YQ of QQ.longAnimationFrameEntries) {
                  vQ = vQ + YQ.startTime + YQ.duration - YQ.styleAndLayoutStart;
                  for (const QQ of YQ.scripts) {
                    const wQ = QQ.startTime + QQ.duration;
                    if (wQ < FQ) continue;
                    const mQ = wQ - Math.max(FQ, QQ.startTime),
                      HQ = QQ.duration ? mQ / QQ.duration * QQ.forcedStyleAndLayoutDuration : 0;
                    kQ += mQ - HQ, vQ += HQ, mQ > uQ && (DQ = QQ.startTime < FQ + LQ ? "input-delay" : QQ.startTime >= FQ + LQ + qQ ? "presentation-delay" : "processing-duration", oQ = QQ, uQ = mQ)
                  }
                }
                const HQ = QQ.longAnimationFrameEntries.at(-1),
                  bQ = HQ ? HQ.startTime + HQ.duration : 0;
                bQ >= FQ + LQ + qQ && (mQ = wQ - bQ), oQ && DQ && (QQ.longestScript = {
                  entry: oQ,
                  subpart: DQ,
                  intersectingDuration: uQ
                }), QQ.totalScriptDuration = kQ, QQ.totalStyleAndLayoutDuration = vQ, QQ.totalPaintDuration = mQ, QQ.totalUnattributedDuration = wQ - FQ - kQ - vQ - mQ
              })(YQ), Object.assign(QQ, {
                attribution: YQ
              })
            })(FQ))
          }), FQ)
      };
    class iL {
      m;
      u;
      l(QQ) {
        this.m?.(QQ)
      }
    }
    const WL = [2500, 4e3];
    let RL = 50;
    const OL = [];
    qL(["resource"], (QQ => {
      for (const FQ of QQ) OL.push(FQ), OL.length > RL && OL.shift()
    }));
    const sL = [800, 1800],
      rL = QQ => {
        document.prerendering ? mL((() => rL(QQ))) : "complete" !== document.readyState ? addEventListener("load", (() => rL(QQ)), !0) : setTimeout(QQ)
      },
      IL = "load_state",
      UL = "time_to_first_byte";
    var NL = class {
        constructor(QQ, FQ) {
          this.corePushMeasurement = QQ, this.webVitalConfig = FQ
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var QQ;
          ! function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const wQ = Jw(FQ = Object.assign({}, FQ), jw),
              LQ = new WeakMap;
            wQ.t = QQ => {
                if (QQ?.sources?.length) {
                  const wQ = YL(QQ.sources),
                    qQ = wQ?.node;
                  if (qQ) {
                    const QQ = FQ.generateTarget?.(qQ) ?? Vw(qQ);
                    LQ.set(wQ, QQ)
                  }
                }
              },
              function(QQ) {
                let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const wQ = wL();
                HL(kL((() => {
                  let LQ, qQ = LL("CLS", 0);
                  const oQ = Jw(FQ, jw),
                    DQ = (wQ, DQ, kQ, vQ, mQ) => {
                      qQ = LL("CLS", 0, wQ, DQ, kQ, vQ, mQ), oQ.o = 0, LQ = Pw(QQ, qQ, bL, FQ.reportAllChanges)
                    },
                    kQ = function() {
                      let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      oQ.o > qQ.value && (qQ.value = oQ.o, qQ.entries = oQ.i), LQ(QQ)
                    },
                    vQ = QQ => {
                      kQ(!0), DQ("soft-navigation", QQ.navigationId, QQ.interactionId, QQ.name, QQ.startTime)
                    },
                    mQ = QQ => {
                      for (const FQ of QQ) "soft-navigation" !== FQ.entryType ? oQ.l(FQ) : vQ(FQ);
                      kQ()
                    },
                    uQ = ["layout-shift"];
                  oL(FQ) && uQ.push("soft-navigation");
                  const HQ = qL(uQ, mQ);
                  HQ && (LQ = Pw(QQ, qQ, bL, FQ.reportAllChanges), wQ.onHidden((() => {
                    mQ(HQ.takeRecords()), LQ(!0)
                  })), gw((() => {
                    DQ("back-forward-cache", qQ.navigationId, qQ.navigationInteractionId, qQ.navigationURL, nw()), Zw(LQ)
                  })), setTimeout(LQ))
                })))
              }((FQ => {
                QQ((QQ => {
                  let FQ = {};
                  if (QQ.entries.length) {
                    const wQ = QQ.entries.reduce(((QQ, FQ) => QQ.value > FQ.value ? QQ : FQ));
                    if (wQ?.sources?.length) {
                      const QQ = YL(wQ.sources);
                      QQ && (FQ = {
                        largestShiftTarget: LQ.get(QQ),
                        largestShiftTime: wQ.startTime,
                        largestShiftValue: wQ.value,
                        largestShiftSource: QQ,
                        largestShiftEntry: wQ,
                        loadState: Xw(wQ.startTime)
                      })
                    }
                  }
                  return Object.assign(QQ, {
                    attribution: FQ
                  })
                })(FQ))
              }), FQ)
          }((QQ => {
            const {
              loadState: FQ,
              largestShiftValue: wQ,
              largestShiftTime: LQ,
              largestShiftTarget: qQ
            } = QQ.attribution, oQ = this.buildInitialValues(QQ);
            this.addIfPresent(oQ, "largest_shift_value", wQ), this.addIfPresent(oQ, "largest_shift_time", LQ);
            const DQ = this.buildInitialContext(QQ);
            this.addIfPresent(DQ, IL, FQ), this.addIfPresent(DQ, "largest_shift_target", qQ), this.pushMeasurement(oQ, DQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureFCP() {
          var QQ;
          ! function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const wQ = Jw(FQ = Object.assign({}, FQ), vL);
            oL(FQ) && (wQ.u = new Map), HL((FQ => {
              QQ((QQ => {
                let FQ = {
                  timeToFirstByte: 0,
                  firstByteToFCP: QQ.value,
                  loadState: Xw(nw())
                };
                if ("soft-navigation" !== QQ.navigationType) {
                  if (QQ.entries.length) {
                    const wQ = aw(),
                      LQ = QQ.entries.at(-1);
                    if (wQ) {
                      const qQ = wQ.responseStart,
                        oQ = wQ.activationStart || 0,
                        DQ = Math.max(0, qQ - oQ);
                      FQ = {
                        timeToFirstByte: DQ,
                        firstByteToFCP: QQ.value - DQ,
                        loadState: Xw(QQ.entries[0].startTime),
                        navigationEntry: wQ,
                        fcpEntry: LQ
                      }
                    }
                  }
                } else {
                  const LQ = wQ.u?.get(QQ.navigationId);
                  LQ && (FQ = {
                    timeToFirstByte: 0,
                    firstByteToFCP: QQ.value,
                    loadState: "complete",
                    navigationEntry: LQ
                  })
                }
                return Object.assign(QQ, {
                  attribution: FQ
                })
              })(FQ))
            }), FQ)
          }((QQ => {
            const {
              firstByteToFCP: FQ,
              timeToFirstByte: wQ,
              loadState: LQ
            } = QQ.attribution, qQ = this.buildInitialValues(QQ);
            this.addIfPresent(qQ, "first_byte_to_fcp", FQ), this.addIfPresent(qQ, UL, wQ);
            const oQ = this.buildInitialContext(QQ);
            this.addIfPresent(oQ, IL, LQ), this.pushMeasurement(qQ, oQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureINP() {
          var QQ;
          SL((QQ => {
            var FQ;
            const {
              interactionTime: wQ,
              presentationDelay: LQ,
              inputDelay: qQ,
              processingDuration: oQ,
              nextPaintTime: DQ,
              loadState: kQ,
              interactionTarget: vQ,
              interactionType: mQ,
              totalScriptDuration: uQ,
              totalStyleAndLayoutDuration: HQ,
              totalPaintDuration: bQ,
              totalUnattributedDuration: YQ,
              longestScript: xQ
            } = QQ.attribution, AQ = this.buildInitialValues(QQ);
            this.addIfPresent(AQ, "interaction_time", wQ), this.addIfPresent(AQ, "presentation_delay", LQ), this.addIfPresent(AQ, "input_delay", qQ), this.addIfPresent(AQ, "processing_duration", oQ), this.addIfPresent(AQ, "next_paint_time", DQ), this.addNumberIfDefined(AQ, "total_script_duration", uQ), this.addNumberIfDefined(AQ, "total_style_and_layout_duration", HQ), this.addNumberIfDefined(AQ, "total_paint_duration", bQ), this.addNumberIfDefined(AQ, "total_unattributed_duration", YQ), this.addNumberIfDefined(AQ, "longest_script_intersecting_duration", null === xQ || void 0 === xQ ? void 0 : xQ.intersectingDuration);
            const tQ = this.buildInitialContext(QQ);
            this.addIfPresent(tQ, IL, kQ), this.addIfPresent(tQ, "interaction_target", vQ), this.addIfPresent(tQ, "interaction_type", mQ), this.addIfPresent(tQ, "longest_script_subpart", null === xQ || void 0 === xQ ? void 0 : xQ.subpart), this.addIfPresent(tQ, "longest_script_invoker_type", null === xQ || void 0 === xQ ? void 0 : xQ.entry.invokerType), (null === (FQ = this.webVitalConfig) || void 0 === FQ ? void 0 : FQ.trackAttributionSources) && (this.addIfPresent(tQ, "longest_script_invoker", null === xQ || void 0 === xQ ? void 0 : xQ.entry.invoker), this.addIfPresent(tQ, "longest_script_source_url", null === xQ || void 0 === xQ ? void 0 : xQ.entry.sourceURL), this.addIfPresent(tQ, "longest_script_source_function_name", null === xQ || void 0 === xQ ? void 0 : xQ.entry.sourceFunctionName), this.addIfPresent(tQ, "longest_script_source_char_position", void 0 !== (null === xQ || void 0 === xQ ? void 0 : xQ.entry.sourceCharPosition) ? String(xQ.entry.sourceCharPosition) : void 0)), this.pushMeasurement(AQ, tQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureLCP() {
          var QQ;
          ! function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (FQ = Object.assign({}, FQ)).resourceBufferSize && (RL = FQ.resourceBufferSize);
            const wQ = Jw(FQ, iL),
              LQ = new WeakMap;
            oL(FQ) && (wQ.u = new Map), wQ.m = QQ => {
                const wQ = QQ.element;
                if (wQ) {
                  const qQ = FQ.generateTarget?.(wQ) ?? Vw(wQ);
                  LQ.set(QQ, qQ)
                } else QQ.id && LQ.set(QQ, `#${QQ.id}`)
              },
              function(QQ) {
                let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  wQ = !1;
                const LQ = oL(FQ);
                mL((() => {
                  let qQ, oQ = wL(),
                    DQ = LL("LCP");
                  const kQ = Jw(FQ, iL),
                    vQ = (LQ, kQ, vQ, mQ, uQ) => {
                      DQ = LL("LCP", -1, LQ, kQ, vQ, mQ, uQ), qQ = Pw(QQ, DQ, WL, FQ.reportAllChanges), wQ = !1, "soft-navigation" === LQ && (oQ = wL(!0))
                    },
                    mQ = QQ => {
                      kQ.u && QQ.navigationId && DL(kQ.u, QQ), wQ || qQ(!0), vQ("soft-navigation", QQ.navigationId, QQ.interactionId, QQ.name, QQ.startTime);
                      const FQ = QQ.getLargestInteractionContentfulPaint?.();
                      FQ && uQ([FQ])
                    },
                    uQ = QQ => {
                      FQ.reportAllChanges || LQ || (QQ = QQ.slice(-1));
                      for (const FQ of QQ) {
                        if (!FQ) continue;
                        if ("soft-navigation" === FQ.entryType) {
                          mQ(FQ);
                          continue
                        }
                        let QQ = 0,
                          wQ = [],
                          LQ = FQ.startTime;
                        if ("largest-contentful-paint" === FQ.entryType) QQ = Math.max(FQ.startTime - yw(), 0), kQ.l(FQ), wQ = [FQ];
                        else if ("interaction-contentful-paint" === FQ.entryType) {
                          const qQ = FQ;
                          if (!DQ.navigationId) continue;
                          if ("interactionId" in qQ && qQ.interactionId != DQ.navigationInteractionId) continue;
                          LQ = qQ.largestContentfulPaint?.renderTime || 0, QQ = Math.max(LQ - FQ.startTime, 0), qQ.largestContentfulPaint && (kQ.l(qQ.largestContentfulPaint), wQ = [qQ.largestContentfulPaint])
                        }
                        LQ < oQ.firstHiddenTime && (DQ.value = QQ, DQ.entries = wQ, qQ())
                      }
                    },
                    HQ = ["largest-contentful-paint"];
                  LQ && HQ.push("interaction-contentful-paint", "soft-navigation");
                  const bQ = qL(HQ, uQ);
                  if (bQ) {
                    qQ = Pw(QQ, DQ, WL, FQ.reportAllChanges);
                    const oQ = ["keydown", "click", "visibilitychange"],
                      kQ = QQ => {
                        if (QQ.isTrusted && !wQ) {
                          const QQ = DQ.id;
                          cL((() => {
                            if (!wQ) {
                              if (!LQ) {
                                bQ.disconnect();
                                for (const QQ of oQ) removeEventListener(QQ, kQ, {
                                  capture: !0
                                })
                              }
                              QQ === DQ.id && (wQ = !0, qQ(!0))
                            }
                          }))
                        }
                      };
                    for (const QQ of oQ) addEventListener(QQ, kQ, {
                      capture: !0
                    });
                    gw((LQ => {
                      vQ("back-forward-cache", DQ.navigationId, DQ.navigationInteractionId, DQ.navigationURL, nw()), qQ = Pw(QQ, DQ, WL, FQ.reportAllChanges), Zw((() => {
                        DQ.value = performance.now() - LQ.timeStamp, wQ = !0, qQ(!0)
                      }))
                    }))
                  }
                }))
              }((FQ => {
                QQ((QQ => {
                  let FQ = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: QQ.value
                  };
                  if (QQ.entries.length) {
                    const qQ = QQ.entries.at(-1),
                      oQ = QQ => QQ.name === qQ.url && (QQ.requestStart || QQ.startTime) <= qQ.startTime,
                      DQ = qQ.url && (OL.findLast(oQ) || performance.getEntriesByType("resource").findLast(oQ));
                    let kQ;
                    FQ.target = LQ.get(qQ), FQ.lcpEntry = qQ, qQ.url && (FQ.url = qQ.url), DQ && (FQ.lcpResourceEntry = DQ);
                    let vQ = 0,
                      mQ = 0;
                    if ("soft-navigation" !== QQ.navigationType ? (kQ = aw(), vQ = kQ?.activationStart ?? 0, mQ = kQ?.responseStart ?? 0) : (vQ = QQ.navigationStartTime || 0, kQ = wQ.u?.get(QQ.navigationId)), kQ) {
                      const wQ = Math.max(0, mQ - vQ),
                        LQ = Math.max(wQ, DQ ? (DQ.requestStart || DQ.startTime) - vQ : 0),
                        qQ = Math.min(QQ.value, Math.max(LQ, DQ ? DQ.responseEnd - vQ : 0));
                      FQ = {
                        ...FQ,
                        timeToFirstByte: wQ,
                        resourceLoadDelay: LQ - wQ,
                        resourceLoadDuration: qQ - LQ,
                        elementRenderDelay: QQ.value - qQ,
                        navigationEntry: kQ
                      }
                    }
                  }
                  return Object.assign(QQ, {
                    attribution: FQ
                  })
                })(FQ))
              }), FQ)
          }((QQ => {
            var FQ;
            const {
              elementRenderDelay: wQ,
              resourceLoadDelay: LQ,
              resourceLoadDuration: qQ,
              timeToFirstByte: oQ,
              target: DQ,
              url: kQ,
              lcpResourceEntry: vQ
            } = QQ.attribution, mQ = this.buildInitialValues(QQ);
            this.addIfPresent(mQ, "element_render_delay", wQ), this.addIfPresent(mQ, "resource_load_delay", LQ), this.addIfPresent(mQ, "resource_load_duration", qQ), this.addIfPresent(mQ, UL, oQ);
            const uQ = this.buildInitialContext(QQ);
            this.addIfPresent(uQ, "element", DQ), (null === (FQ = this.webVitalConfig) || void 0 === FQ ? void 0 : FQ.trackAttributionSources) && (this.addIfPresent(uQ, "resource_url", kQ), this.addIfPresent(uQ, "resource_delivery_type", null === vQ || void 0 === vQ ? void 0 : vQ.deliveryType), this.addIfPresent(uQ, "resource_initiator_type", null === vQ || void 0 === vQ ? void 0 : vQ.initiatorType)), this.pushMeasurement(mQ, uQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureTTFB() {
          var QQ;
          ! function(QQ) {
            ! function(QQ) {
              let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const wQ = oL(FQ);
              let LQ = LL("TTFB"),
                qQ = Pw(QQ, LQ, sL, FQ.reportAllChanges);
              rL((() => {
                const oQ = aw();
                if (oQ) {
                  const DQ = oQ.responseStart;
                  LQ.value = Math.max(DQ - yw(), 0), LQ.entries = [oQ], qQ(!0), gw((() => {
                    LQ = LL("TTFB", 0, "back-forward-cache", LQ.navigationId, LQ.navigationInteractionId, LQ.navigationURL, nw()), qQ = Pw(QQ, LQ, sL, FQ.reportAllChanges), qQ(!0)
                  })), wQ && qL(["soft-navigation"], (wQ => {
                    wQ.forEach((wQ => {
                      wQ.navigationId && (LQ = LL("TTFB", 0, "soft-navigation", wQ.navigationId, wQ.interactionId, wQ.name, wQ.startTime), LQ.entries = [wQ], qQ = Pw(QQ, LQ, sL, FQ.reportAllChanges), qQ(!0))
                    }))
                  }), FQ)
                }
              }))
            }((FQ => {
              QQ((QQ => {
                const FQ = QQ.entries[0];
                let wQ = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: FQ
                };
                if (QQ.entries.length && FQ instanceof PerformanceNavigationTiming) {
                  const LQ = FQ.activationStart || 0,
                    qQ = Math.max((FQ.workerStart || FQ.fetchStart || 0) - LQ, 0),
                    oQ = Math.max(FQ.domainLookupStart - LQ, 0),
                    DQ = Math.max(FQ.connectStart - LQ, 0),
                    kQ = Math.max(FQ.connectEnd - LQ, 0);
                  wQ = {
                    waitingDuration: qQ,
                    cacheDuration: oQ - qQ,
                    dnsDuration: DQ - oQ,
                    connectionDuration: kQ - DQ,
                    requestDuration: QQ.value - kQ,
                    navigationEntry: FQ
                  }
                }
                return Object.assign(QQ, {
                  attribution: wQ
                })
              })(FQ))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((QQ => {
            const {
              dnsDuration: FQ,
              connectionDuration: wQ,
              requestDuration: LQ,
              waitingDuration: qQ,
              cacheDuration: oQ
            } = QQ.attribution, DQ = this.buildInitialValues(QQ);
            this.addIfPresent(DQ, "dns_duration", FQ), this.addIfPresent(DQ, "connection_duration", wQ), this.addIfPresent(DQ, "request_duration", LQ), this.addIfPresent(DQ, "waiting_duration", qQ), this.addIfPresent(DQ, "cache_duration", oQ);
            const kQ = this.buildInitialContext(QQ);
            this.pushMeasurement(DQ, kQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        buildInitialValues(QQ) {
          return {
            [QQ.name.toLowerCase()]: QQ.value,
            delta: QQ.delta
          }
        }
        buildInitialContext(QQ) {
          var FQ;
          const wQ = null !== (FQ = QF("com.grafana.faro.lastNavigationId", yQ)) && void 0 !== FQ ? FQ : zw;
          return {
            id: QQ.id,
            rating: QQ.rating,
            navigation_type: QQ.navigationType,
            navigation_entry_id: wQ
          }
        }
        pushMeasurement(QQ, FQ) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: QQ
          }, {
            context: FQ
          })
        }
        addIfPresent(QQ, FQ, wQ) {
          wQ && (QQ[FQ] = wQ)
        }
        addNumberIfDefined(QQ, FQ, wQ) {
          void 0 !== wQ && (QQ[FQ] = wQ)
        }
      },
      TL = class extends Fw {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ww
        }
        initialize() {
          this.logDebug("Initializing"), new NL(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const KL = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function zL() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const FQ of QQ)
        if ("traceparent" === FQ.name) {
          if (!KL.test(FQ.description)) continue;
          const [, QQ, wQ] = FQ.description.split("-");
          if (null != QQ && null != wQ) return {
            traceId: QQ,
            spanId: wQ
          };
          break
        }
    }

    function lL(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: wQ,
        monoNow: LQ
      } = FQ;
      return Math.min(wQ, wQ - (LQ - QQ))
    }

    function jL(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [wQ, LQ] of Object.entries(FQ)) {
        const FQ = QQ[wQ];
        return null != FQ && (rQ(LQ) ? LQ.includes(FQ) : FQ === LQ)
      }
      return !0
    }

    function aL(QQ) {
      const {
        connectEnd: FQ,
        connectStart: wQ,
        decodedBodySize: LQ,
        domainLookupEnd: qQ,
        domainLookupStart: oQ,
        duration: DQ,
        encodedBodySize: kQ,
        fetchStart: vQ,
        initiatorType: mQ,
        name: uQ,
        nextHopProtocol: HQ,
        redirectEnd: bQ,
        redirectStart: YQ,
        renderBlockingStatus: xQ,
        requestStart: AQ,
        responseEnd: tQ,
        responseStart: eQ,
        responseStatus: MQ,
        secureConnectionStart: GQ,
        transferSize: pQ,
        workerStart: cQ
      } = QQ;
      return {
        name: uQ,
        httpHost: fL(uQ),
        duration: VL(DQ),
        tcpHandshakeTime: VL(FQ - wQ),
        dnsLookupTime: VL(qQ - oQ),
        tlsNegotiationTime: VL(FQ - GQ),
        responseStatus: VL(MQ),
        redirectTime: VL(bQ - YQ),
        requestTime: VL(eQ - AQ),
        responseTime: VL(tQ - eQ),
        fetchTime: VL(tQ - vQ),
        serviceWorkerTime: VL(cQ > 0 ? vQ - cQ : 0),
        decodedBodySize: VL(LQ),
        encodedBodySize: VL(kQ),
        cacheHitStatus: function() {
          let QQ = "fullLoad";
          0 === pQ ? LQ > 0 && (QQ = "cache") : null != MQ ? 304 === MQ && (QQ = "conditionalFetch") : kQ > 0 && pQ < kQ && (QQ = "conditionalFetch");
          return QQ
        }(),
        renderBlockingStatus: VL(xQ),
        protocol: HQ,
        initiatorType: mQ,
        visibilityState: document.visibilityState,
        ttfb: VL(eQ - AQ),
        transferSize: VL(pQ)
      }
    }

    function XL(QQ) {
      const {
        activationStart: FQ,
        domComplete: wQ,
        domContentLoadedEventEnd: LQ,
        domContentLoadedEventStart: qQ,
        domInteractive: oQ,
        fetchStart: DQ,
        loadEventEnd: kQ,
        loadEventStart: vQ,
        responseStart: mQ,
        type: uQ
      } = QQ, HQ = function() {
        var QQ;
        return null != (null === (QQ = performance.timing) || void 0 === QQ ? void 0 : QQ.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return uF(uF({}, aL(QQ)), {}, {
        pageLoadTime: VL(wQ - DQ),
        documentParsingTime: VL(HQ ? oQ - HQ : null),
        domProcessingTime: VL(wQ - oQ),
        domContentLoadHandlerTime: VL(LQ - qQ),
        onLoadTime: VL(kQ - vQ),
        ttfb: VL(Math.max(mQ - (null !== FQ && void 0 !== FQ ? FQ : 0), 0)),
        type: uQ
      })
    }

    function fL(QQ) {
      try {
        return new URL(QQ).host || zw
      } catch (FQ) {
        return zw
      }
    }

    function VL(QQ) {
      return null == QQ ? zw : "number" === typeof QQ ? Math.round(QQ > 0 ? QQ : 0).toString() : QQ.toString()
    }
    const hL = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function JL(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      try {
        var kQ = QQ[oQ](DQ),
          vQ = kQ.value
      } catch (QQ) {
        return void wQ(QQ)
      }
      kQ.done ? FQ(vQ) : Promise.resolve(vQ).then(LQ, qQ)
    }

    function EL(QQ) {
      return function() {
        var FQ = this,
          wQ = arguments;
        return new Promise((function(LQ, qQ) {
          var oQ = QQ.apply(FQ, wQ);

          function DQ(QQ) {
            JL(oQ, LQ, qQ, DQ, kQ, "next", QQ)
          }

          function kQ(QQ) {
            JL(oQ, LQ, qQ, DQ, kQ, "throw", QQ)
          }
          DQ(void 0)
        }))
      }
    }
    const nL = new Mw;
    var gL = class extends Fw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ww
      }
      initialize() {
        var QQ = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let FQ = !1;
        const wQ = () => {
          ! function(QQ) {
            if ("complete" === document.readyState) QQ();
            else {
              const FQ = () => {
                "complete" === document.readyState && (QQ(), document.removeEventListener("readystatechange", FQ))
              };
              document.addEventListener("readystatechange", FQ)
            }
          }(EL((function*() {
            if (FQ) return;
            const wQ = QQ.api.pushEvent,
              {
                faroNavigationId: LQ
              } = yield function(QQ) {
                let FQ;
                const wQ = new Promise((QQ => {
                  FQ = QQ
                }));
                return new PerformanceObserver((wQ => {
                  var LQ;
                  const [qQ] = wQ.getEntries();
                  if (null == qQ || PQ(qQ.name)) return;
                  const oQ = qQ.toJSON();
                  let DQ = zL(null === oQ || void 0 === oQ ? void 0 : oQ.serverTiming);
                  const kQ = null !== (LQ = QF("com.grafana.faro.lastNavigationId", yQ)) && void 0 !== LQ ? LQ : zw,
                    vQ = uF(uF({}, XL(oQ)), {}, {
                      faroNavigationId: eF(),
                      faroPreviousNavigationId: kQ
                    });
                  FF("com.grafana.faro.lastNavigationId", vQ.faroNavigationId, yQ), QQ("faro.performance.navigation", vQ, void 0, {
                    spanContext: DQ,
                    timestampOverwriteMs: lL(oQ.startTime)
                  }), FQ(vQ)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), wQ
              }(wQ);
            FQ || null == LQ || function(QQ, FQ, wQ, LQ) {
              const qQ = LQ.trackResources;
              new PerformanceObserver((LQ => {
                const oQ = LQ.getEntries(),
                  DQ = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const kQ of oQ) {
                  if (PQ(kQ.name)) continue;
                  null === wQ || void 0 === wQ || wQ.notify({
                    type: "resource"
                  });
                  const LQ = kQ.toJSON();
                  let oQ = zL(null === LQ || void 0 === LQ ? void 0 : LQ.serverTiming);
                  (null == qQ && jL(LQ, hL) || qQ) && FQ("faro.performance.resource", uF(uF({}, aL(LQ)), {}, {
                    faroNavigationId: QQ,
                    faroResourceId: eF()
                  }), void 0, {
                    spanContext: oQ,
                    timestampOverwriteMs: lL(LQ.startTime, DQ)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(LQ, wQ, nL, QQ.config)
          })))
        };
        this.cancelInitialization = () => {
          FQ = !0, document.removeEventListener("prerenderingchange", wQ)
        }, document.prerendering ? document.addEventListener("prerenderingchange", wQ, {
          once: !0
        }) : wQ()
      }
      destroy() {
        var QQ;
        null === (QQ = this.cancelInitialization) || void 0 === QQ || QQ.call(this), this.cancelInitialization = void 0
      }
    };
    const PL = "data-faro-user-action-name",
      ZL = PL.replace(/-name$/, "-timeout"),
      yL = 1e3;

    function BL(QQ) {
      return `data-${(QQ.startsWith("data-")?QQ.slice(5):QQ).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function dL(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hF;
      if (void 0 === QQ) return FQ;
      let LQ = NaN;
      try {
        LQ = "string" === typeof QQ && "" === QQ.trim() ? NaN : Number(QQ)
      } catch (qQ) {}
      return !Number.isFinite(LQ) || LQ <= 0 ? (wQ(`initialActivityTimeout must be a finite number greater than zero; using ${FQ} ms`), FQ) : LQ > 1e3 ? (wQ(`initialActivityTimeout cannot exceed ${yL} ms; clamping to the maximum`), yL) : LQ
    }

    function Qq(QQ, FQ, wQ) {
      return void 0 !== QQ && window.clearTimeout(QQ), window.setTimeout((() => {
        FQ()
      }), wQ)
    }

    function Fq(QQ) {
      return QQ.type === ew
    }
    let wq, Lq;

    function qq() {
      return wq || (wq = new Mw), Lq || (Lq = new MutationObserver(((QQ, FQ) => {
        wq.notify({
          type: "dom-mutation"
        })
      })), Lq.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), wq
    }
    const oq = "fetch",
      Dq = "xhr";
    let kq, vq, mq, uq, Hq = !1;

    function bq() {
      if (kq) return kq;

      function QQ(QQ) {
        kq.notify({
          type: tw,
          request: QQ
        })
      }

      function FQ(QQ) {
        kq.notify({
          type: ew,
          request: QQ
        })
      }
      return kq = new Mw, Hq || (! function(QQ) {
        let {
          onRequestEnd: FQ,
          onRequestStart: wQ
        } = QQ;
        mq || (mq = window.fetch);
        window.fetch = function() {
          var QQ, LQ;
          const qQ = null !== (QQ = ZQ(arguments[0])) && void 0 !== QQ ? QQ : "",
            oQ = PQ(qQ),
            DQ = (null !== (LQ = arguments[1]) && void 0 !== LQ ? LQ : {}).method,
            kQ = eF();
          return oQ || wQ({
            url: qQ,
            method: DQ,
            requestId: kQ,
            apiType: oq
          }), mq.apply(this, arguments).then((QQ => (oQ || FQ({
            url: qQ,
            method: DQ,
            requestId: kQ,
            apiType: oq
          }), QQ))).catch((QQ => {
            throw oQ || FQ({
              url: qQ,
              method: DQ,
              requestId: kQ,
              apiType: oq
            }), QQ
          }))
        }
      }({
        onRequestStart: QQ,
        onRequestEnd: FQ
      }), function(QQ) {
        let {
          onRequestStart: FQ,
          onRequestEnd: wQ
        } = QQ;
        vq || (vq = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const QQ = arguments[1],
            LQ = PQ(QQ),
            qQ = arguments[0],
            oQ = eF();
          this.addEventListener("loadstart", (function() {
            LQ || FQ({
              url: QQ,
              method: qQ,
              requestId: oQ,
              apiType: Dq
            })
          })), this.addEventListener("load", (function() {
            LQ || wQ({
              url: QQ,
              method: qQ,
              requestId: oQ,
              apiType: Dq
            })
          })), this.addEventListener("error", (function() {
            LQ || wQ({
              url: QQ,
              method: qQ,
              requestId: oQ,
              apiType: Dq
            })
          })), this.addEventListener("abort", (function() {
            LQ || wQ({
              url: QQ,
              method: qQ,
              requestId: oQ,
              apiType: Dq
            })
          })), vq.apply(this, arguments)
        }
      }({
        onRequestStart: QQ,
        onRequestEnd: FQ
      }), Hq = !0), kq
    }
    let Yq, xq = !1;
    let Aq = function(QQ) {
      return QQ[QQ.Started = 0] = "Started", QQ[QQ.Halted = 1] = "Halted", QQ[QQ.Cancelled = 2] = "Cancelled", QQ[QQ.Ended = 3] = "Ended", QQ
    }({});
    var tq = class {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = QQ, this.logDebug = FQ, this.initialActivityTimeout = wQ, this.http = bq(), this.dom = qq(), this.perf = (uq || (uq = new Mw), xq || (Yq = nL.subscribe((QQ => {
          "resource" === QQ.type && uq.notify({
            type: "resource-entry"
          })
        })), xq = !0), uq), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Mw).merge(this.http, this.dom, this.perf).takeWhile((() => [Aq.Started, Aq.Halted].includes(this.userAction.getState()))).filter((QQ => !!(this.userAction.getState() !== Aq.Halted || Fq(QQ) && this.runningRequests.has(QQ.request.requestId)))).subscribe((QQ => {
          (function(QQ) {
            return QQ.type === tw
          })(QQ) && this.runningRequests.set(QQ.request.requestId, QQ.request), Fq(QQ) && this.runningRequests.delete(QQ.request.requestId), Fq(QQ) ? this.userAction.getState() === Aq.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((QQ => [Aq.Ended, Aq.Cancelled].includes(QQ))).first().subscribe((() => this.cleanup())), this.startupTid = Qq(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Aq.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Aq.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Qq(this.haltTid, (() => {
          this.userAction.getState() === Aq.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var QQ, FQ;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (QQ = this.allMonitorsSub) || void 0 === QQ || QQ.unsubscribe(), null === (FQ = this.stateSub) || void 0 === FQ || FQ.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(QQ) {
        void 0 !== QQ && window.clearTimeout(QQ)
      }
    };

    function eq(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hF;
      var wQ;
      const {
        api: LQ,
        config: qQ,
        internalLogger: oQ
      } = QQ, DQ = dL(null === (wQ = qQ.userActionsInstrumentation) || void 0 === wQ ? void 0 : wQ.initialActivityTimeout, 100, FQ);
      return {
        processUserEvent: function(QQ) {
          var FQ, wQ;
          const oQ = null !== (FQ = null === (wQ = qQ.userActionsInstrumentation) || void 0 === wQ ? void 0 : wQ.dataAttributeName) && void 0 !== FQ ? FQ : PL,
            DQ = QQ.target;
          if (!(DQ instanceof Element)) return;
          const kQ = function(QQ, FQ) {
              let wQ = QQ;
              for (; wQ;) {
                if (wQ.hasAttribute(FQ)) return wQ;
                wQ = wQ.parentElement
              }
              return null
            }(DQ, BL(oQ)),
            vQ = function(QQ, FQ) {
              if (!QQ) return;
              const wQ = function(QQ) {
                  return BL(QQ).slice(5).replace(/-(.)/g, ((QQ, FQ) => FQ.toUpperCase()))
                }(FQ),
                LQ = QQ.dataset;
              for (const qQ in LQ)
                if (qQ === wQ) return LQ[qQ]
            }(kQ, oQ);
          if (!kQ || !vQ) return;
          const mQ = function(QQ, FQ) {
            const wQ = QQ.getAttribute(function(QQ) {
              const FQ = BL(QQ);
              return FQ.endsWith("-name") ? `${FQ.slice(0,-5)}-timeout` : `${FQ}-timeout`
            }(FQ));
            return null === wQ ? void 0 : Number(wQ)
          }(kQ, oQ);
          LQ.startUserAction(vQ, {}, {
            triggerName: QQ.type,
            initialActivityTimeout: mQ
          })
        },
        processUserActionStarted: function(QQ, wQ) {
          const LQ = QQ,
            qQ = dL(wQ, DQ, FQ);
          new tq(LQ, oQ.debug, qQ).attach()
        }
      }
    }
    const Mq = "user_action_start",
      Gq = {
        Normal: "normal",
        Critical: "critical"
      };
    var pq = class {
        constructor() {
          this.buffer = []
        }
        addItem(QQ) {
          this.buffer.push(QQ)
        }
        flushBuffer(QQ) {
          if (sQ(QQ))
            for (const FQ of this.buffer) QQ(FQ);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      cq = class extends Mw {
        constructor(QQ) {
          let {
            name: FQ,
            parentId: wQ,
            trigger: LQ,
            transports: qQ,
            attributes: oQ,
            trackUserActionsExcludeItem: DQ,
            importance: kQ = Gq.Normal,
            pushEvent: vQ
          } = QQ;
          super(), this.name = FQ, this.attributes = oQ, this.id = eF(), this.trigger = LQ, this.parentId = null !== wQ && void 0 !== wQ ? wQ : this.id, this.trackUserActionsExcludeItem = DQ, this.importance = kQ, this._pushEvent = vQ, this._itemBuffer = new pq, this._transports = qQ, this._state = 0, this._start()
        }
        addItem(QQ) {
          return 0 === this._state && (this._itemBuffer.addItem(QQ), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = bF(), this._startTimeMono = YF())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((QQ => {
            this._transports.execute(QQ)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const QQ = bF(),
            FQ = YF() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((QQ => {
            if (function(QQ, FQ) {
                return (null === FQ || void 0 === FQ ? void 0 : FQ(QQ)) || "measurement" === QQ.type && "web-vitals" === QQ.payload.type
              }(QQ, this.trackUserActionsExcludeItem)) return void this._transports.execute(QQ);
            const FQ = BF(BF({}, QQ), {}, {
              payload: BF(BF({}, QQ.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(FQ)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", BF({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: QQ.toString(),
            userActionDuration: FQ.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, zF(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: QQ => (QQ.action = {
              id: this.id,
              name: this.name
            }, QQ)
          })
        }
        getState() {
          return this._state
        }
      };
    const Cq = new Mw;

    function Sq(QQ, FQ) {
      return !!QQ && (0 === (null === QQ || void 0 === QQ ? void 0 : QQ.getState()) && (QQ.addItem(FQ), !0))
    }
    var iq = class extends Fw {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ww
        }
        initialize() {
          const {
            processUserEvent: QQ,
            processUserActionStarted: FQ
          } = eq(AQ, (QQ => this.logWarn(QQ)));
          this._processUserEvent = QQ, this._processKeydown = FQ => {
            [" ", "Enter"].includes(FQ.key) && QQ(FQ)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Cq.subscribe((QQ => {
            let {
              type: wQ,
              userAction: LQ,
              initialActivityTimeout: qQ
            } = QQ;
            "user_action_start" === wQ && FQ(LQ, qQ)
          }))
        }
        destroy() {
          var QQ;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (QQ = this._userActionSub) || void 0 === QQ || QQ.unsubscribe()
        }
      },
      Wq = class extends Fw {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ww, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(QQ) {
          const FQ = {
            blockedURI: QQ.blockedURI,
            columnNumber: QQ.columnNumber,
            disposition: QQ.disposition,
            documentURI: QQ.documentURI,
            effectiveDirective: QQ.effectiveDirective,
            lineNumber: QQ.lineNumber,
            originalPolicy: QQ.originalPolicy,
            referrer: QQ.referrer,
            sample: QQ.sample,
            sourceFile: QQ.sourceFile,
            statusCode: QQ.statusCode,
            violatedDirective: QQ.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", zF(FQ))
        }
      };
    var Rq = class extends Mw {
      constructor(QQ, FQ) {
        var wQ, LQ, qQ, oQ;
        super(), this._tracking = !1, this.eventsObservable = QQ, this._options = {
          inactivityMs: null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.inactivityMs) && void 0 !== wQ ? wQ : 100,
          drainTimeoutMs: null !== (LQ = null === FQ || void 0 === FQ ? void 0 : FQ.drainTimeoutMs) && void 0 !== LQ ? LQ : 1e4,
          isOperationStart: null !== (qQ = null === FQ || void 0 === FQ ? void 0 : FQ.isOperationStart) && void 0 !== qQ ? qQ : () => {},
          isOperationEnd: null !== (oQ = null === FQ || void 0 === FQ ? void 0 : FQ.isOperationEnd) && void 0 !== oQ ? oQ : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((QQ => {
          var FQ;
          this._lastEventTime = YF(), null === (FQ = this._currentEvents) || void 0 === FQ || FQ.push(QQ);
          const wQ = this._options.isOperationStart(QQ);
          var LQ;
          wQ && (null === (LQ = this._activeOperations) || void 0 === LQ || LQ.set(wQ, !0));
          const qQ = this._options.isOperationEnd(QQ);
          var oQ;
          qQ && (null === (oQ = this._activeOperations) || void 0 === oQ || oQ.delete(qQ));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = YF(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let QQ;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), QQ = this.hasActiveOperations() ? YF() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: QQ
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Oq(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Oq(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(QQ) {
        QQ && clearTimeout(QQ)
      }
    };

    function Oq(QQ, FQ, wQ) {
      return QQ && clearTimeout(QQ), QQ = setTimeout((() => {
        FQ()
      }), wQ)
    }
    let sq;
    const rq = new Set,
      Iq = new Map;
    let Uq, Nq, Tq, Kq, zq, lq, jq, aq, Xq = !1;
    var fq = class extends Fw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ww
      }
      initialize() {
        const QQ = bq(),
          FQ = qq(),
          wQ = function() {
            function QQ(QQ, FQ) {
              const wQ = null !== FQ && void 0 !== FQ ? FQ : location.href;
              wQ !== Nq && (Uq.notify({
                type: "url-change",
                from: Nq,
                to: wQ,
                trigger: QQ
              }), Nq = wQ)
            }
            if (Uq || (Uq = new Mw, Nq = location.href), !Xq)
              if ("navigation" in window && "NavigateEvent" in window) {
                jq = FQ => {
                  try {
                    const wQ = null === FQ || void 0 === FQ ? void 0 : FQ.destination;
                    (null === wQ || void 0 === wQ ? void 0 : wQ.sameDocument) && "string" === typeof wQ.url && QQ("navigate", wQ.url)
                  } catch (wQ) {}
                }, window.navigation.addEventListener("navigate", jq);
                const FQ = window.NavigateEvent;
                FQ && FQ.prototype && "function" === typeof FQ.prototype.intercept && (aq || (aq = FQ.prototype.intercept), FQ.prototype.intercept = function(FQ) {
                  try {
                    const FQ = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      wQ = null === this || void 0 === this ? void 0 : this.destination;
                    FQ && wQ && !1 === wQ.sameDocument && "string" === typeof wQ.url && QQ("navigate-intercept", wQ.url)
                  } catch (wQ) {}
                  return aq.call(this, FQ)
                }), Xq = !0
              } else Tq || (Tq = window.history.pushState), window.history.pushState = function() {
                for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
                const qQ = Tq.apply(window.history, wQ);
                return QQ("pushState"), qQ
              }, Kq || (Kq = window.history.replaceState), window.history.replaceState = function() {
                for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
                const qQ = Kq.apply(window.history, wQ);
                return QQ("replaceState"), qQ
              }, zq = () => QQ("popstate"), lq = () => QQ("hashchange"), window.addEventListener("popstate", zq), window.addEventListener("hashchange", lq), Xq = !0;
            return Uq
          }(),
          LQ = (qQ = ["pointerdown", "keydown"], sq || (sq = new Mw), qQ.forEach((QQ => {
            if (!rq.has(QQ)) {
              const FQ = () => {
                sq.notify({
                  type: "interaction",
                  name: QQ
                })
              };
              window.addEventListener(QQ, FQ), rq.add(QQ), Iq.set(QQ, FQ)
            }
          })), sq);
        var qQ;
        const oQ = new Rq((new Mw).merge(QQ, FQ, wQ), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: QQ => function(QQ) {
            return QQ.type === tw
          }(QQ) ? QQ.request.requestId : void 0,
          isOperationEnd: QQ => function(QQ) {
            return QQ.type === ew
          }(QQ) ? QQ.request.requestId : void 0
        });
        oQ.filter((QQ => "tracking-ended" === QQ.message)).subscribe((QQ => {
          var FQ, wQ;
          if ((null === (FQ = QQ.events) || void 0 === FQ ? void 0 : FQ.some((QQ => "url-change" === QQ.type))) && (null === (wQ = QQ.events) || void 0 === wQ ? void 0 : wQ.some((QQ => "dom-mutation" === QQ.type)))) {
            var LQ;
            const FQ = null === (LQ = QQ.events) || void 0 === LQ ? void 0 : LQ.find((QQ => "url-change" === QQ.type));
            AQ.api.pushEvent("faro.navigation", {
              fromUrl: null === FQ || void 0 === FQ ? void 0 : FQ.from,
              toUrl: null === FQ || void 0 === FQ ? void 0 : FQ.to,
              sameDocument: String(!0),
              duration: QQ.duration
            })
          }
        })), LQ.subscribe((() => {
          oQ.startTracking()
        }))
      }
    };

    function Vq() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const FQ = [new iq, new Kw, new TL, new Lw, new lw, new fq];
      return !1 !== QQ.enablePerformanceInstrumentation && FQ.unshift(new gL), !1 !== QQ.enableContentSecurityPolicyInstrumentation && FQ.push(new Wq), !1 !== QQ.captureConsole && FQ.push(new Nw), FQ
    }
    var hq = wQ(6526);
    let Jq, Eq;

    function nq() {
      const QQ = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Jq === QQ && Eq || (Eq = new hq.UAParser(QQ).getResult(), Jq = QQ), Eq
    }
    const gq = () => {
        const {
          browser: QQ,
          os: FQ,
          ua: wQ
        } = nq(), {
          name: LQ,
          version: qQ
        } = QQ, {
          name: oQ,
          version: DQ
        } = FQ, kQ = navigator.language, vQ = wQ.includes("Mobi"), mQ = function() {
          if (!LQ || !qQ) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== LQ && void 0 !== LQ ? LQ : zw,
            version: null !== qQ && void 0 !== qQ ? qQ : zw,
            os: `${null!==oQ&&void 0!==oQ?oQ:zw} ${null!==DQ&&void 0!==DQ?DQ:zw}`,
            userAgent: null !== wQ && void 0 !== wQ ? wQ : zw,
            language: null !== kQ && void 0 !== kQ ? kQ : zw,
            mobile: vQ,
            brands: null !== mQ && void 0 !== mQ ? mQ : zw,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Pq = () => {
        const {
          name: QQ,
          version: FQ
        } = nq().os;
        if (!QQ && !FQ) return {};
        const wQ = {};
        return QQ && (wQ.name = QQ), FQ && (wQ.version = FQ), {
          os: wQ
        }
      };

    function Zq(QQ) {
      var FQ, wQ, LQ;
      return {
        id: null !== (FQ = null === (wQ = AQ.config) || void 0 === wQ || null === (wQ = wQ.sessionTracking) || void 0 === wQ || null === (LQ = wQ.generateSessionId) || void 0 === LQ ? void 0 : LQ.call(wQ)) && void 0 !== FQ ? FQ : eF(),
        attributes: QQ
      }
    }
    const yq = () => ({
      sdk: {
        name: "faro-web",
        version: ww
      }
    });
    var Bq = class extends Qw {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let dq = function(QQ) {
      return QQ.EXCEPTION = "exception", QQ.LOG = "log", QQ.MEASUREMENT = "measurement", QQ.TRACE = "trace", QQ.EVENT = "event", QQ
    }({});
    const Qo = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Fo(QQ, FQ) {
      var wQ, LQ;
      if (void 0 === FQ) return QQ;
      if (void 0 === QQ) return {
        resourceSpans: FQ
      };
      const qQ = null === (wQ = QQ.resourceSpans) || void 0 === wQ ? void 0 : wQ[0];
      if (void 0 === qQ) return QQ;
      const oQ = (null === qQ || void 0 === qQ ? void 0 : qQ.scopeSpans) || [],
        DQ = (null === FQ || void 0 === FQ || null === (LQ = FQ[0]) || void 0 === LQ ? void 0 : LQ.scopeSpans) || [];
      return BF(BF({}, QQ), {}, {
        resourceSpans: [BF(BF({}, qQ), {}, {
          scopeSpans: [...oQ, ...DQ]
        })]
      })
    }

    function wo(QQ) {
      let FQ = {
        meta: {}
      };
      return void 0 !== QQ[0] && (FQ.meta = QQ[0].meta), QQ.forEach((QQ => {
        switch (QQ.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const wQ = Qo[QQ.type],
              LQ = FQ[wQ];
            FQ = BF(BF({}, FQ), {}, {
              [wQ]: void 0 === LQ ? [QQ.payload] : [...LQ, QQ.payload]
            });
            break
          }
          case "trace":
            FQ = BF(BF({}, FQ), {}, {
              traces: Fo(FQ.traces, QQ.payload.resourceSpans)
            })
        }
      })), FQ
    }
    var Lo = class extends Bq {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = QQ, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ww
      }
      send(QQ) {
        var FQ;
        return this.unpatchedConsole[null !== (FQ = this.options.level) && void 0 !== FQ ? FQ : Gw.DEBUG]("New event", wo([QQ]))
      }
    };
    const qo = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      oo = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Do = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      ko = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      vo = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function uo(QQ) {
      let {
        weekday: FQ,
        day: wQ,
        month: LQ,
        year: qQ,
        hour: oQ,
        minute: DQ,
        second: kQ
      } = QQ;
      if (qQ < 1900 || wQ < 1 || oQ > 23 || DQ > 59 || kQ > 60) return;
      const vQ = 60 === kQ,
        mQ = new Date(0);
      return mQ.setUTCFullYear(qQ, LQ, wQ), mQ.setUTCHours(oQ, DQ, vQ ? 59 : kQ, 0), mQ.getUTCDay() === FQ && mQ.getUTCDate() === wQ && mQ.getUTCMonth() === LQ && mQ.getUTCFullYear() === qQ && mQ.getUTCHours() === oQ && mQ.getUTCMinutes() === DQ && mQ.getUTCSeconds() === (vQ ? 59 : kQ) ? mQ.getTime() + (vQ ? 1e3 : 0) : void 0
    }
    var Ho = class {
      constructor(QQ) {
        this.options = QQ, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var QQ = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const FQ = this.sequence++;
        let wQ = !1;
        return {
          deliver: function() {
            var wQ = EL((function*(wQ) {
              const LQ = QQ.options.getNow();
              let qQ, oQ = 0;
              for (;;) {
                var DQ, kQ, vQ;
                const mQ = QQ.options.retry.maxAttempts - oQ,
                  uQ = yield QQ.runAttempt((() => wQ(mQ, QQ.unloading)), oQ > 0);
                if (oQ += uQ.attemptsMade, "success" === uQ.kind) return {
                  kind: "success",
                  attempts: oQ,
                  elapsedTimeMs: QQ.options.getNow() - LQ
                };
                if (qQ = uQ.failure, "terminal" === uQ.kind || QQ.unloading) return {
                  kind: "terminal",
                  attempts: oQ,
                  elapsedTimeMs: QQ.options.getNow() - LQ,
                  failure: qQ
                };
                if (oQ >= QQ.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: oQ,
                  elapsedTimeMs: QQ.options.getNow() - LQ,
                  failure: qQ,
                  reason: "retries-exhausted"
                };
                if (null != uQ.retryAfterMs && uQ.retryAfterMs > QQ.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: oQ,
                  elapsedTimeMs: QQ.options.getNow() - LQ,
                  failure: qQ,
                  reason: "retry-after-too-long"
                };
                const HQ = Math.min(null !== (DQ = uQ.retryAfterMs) && void 0 !== DQ ? DQ : QQ.options.retry.initialBackoffMs * Math.pow(QQ.options.retry.backoffMultiplier, oQ - 1), QQ.options.retry.maxBackoffMs);
                if (null === (kQ = (vQ = QQ.options).onRetry) || void 0 === kQ || kQ.call(vQ, HQ, oQ + 1), yield QQ.waitForTurn(FQ, HQ)) {
                  const FQ = QQ.options.retry.maxAttempts - oQ,
                    qQ = yield QQ.runAttempt((() => wQ(FQ, !0)));
                  return oQ += qQ.attemptsMade, {
                    kind: "success" === qQ.kind ? "success" : "terminal",
                    attempts: oQ,
                    elapsedTimeMs: QQ.options.getNow() - LQ,
                    failure: "success" === qQ.kind ? void 0 : qQ.failure
                  }
                }
              }
            }));
            return function(QQ) {
              return wQ.apply(this, arguments)
            }
          }(),
          release: () => {
            wQ || (wQ = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const QQ = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const FQ of QQ) FQ.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((wQ, LQ) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const FQ = () => {
                this.inProgress--, this.runNextAttempt()
              };
              QQ().then((QQ => {
                FQ(), wQ(QQ)
              }), (QQ => {
                FQ(), LQ(QQ)
              }))
            },
            isRedelivery: FQ
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const QQ = this.options.getNow(),
            FQ = this.attemptQueue.findIndex((FQ => {
              let {
                isRedelivery: wQ
              } = FQ;
              return this.unloading || !wQ || QQ >= this.nextSendAt
            }));
          if (FQ < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - QQ)));
          const [wQ] = this.attemptQueue.splice(FQ, 1);
          wQ.isRedelivery && !this.unloading && (this.nextSendAt = QQ + 1), wQ.run()
        }
      }
      waitForTurn(QQ, FQ) {
        const wQ = Math.min(FQ * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((FQ => {
          this.waiting.push({
            sequence: QQ,
            readyAt: this.options.getNow() + wQ,
            resolve: FQ
          }), this.waiting.sort(((QQ, FQ) => QQ.readyAt === FQ.readyAt ? QQ.sequence - FQ.sequence : QQ.readyAt - FQ.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const QQ = this.waiting[0],
          FQ = QQ.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const FQ = this.waiting.indexOf(QQ);
          FQ >= 0 && this.waiting.splice(FQ, 1), QQ.resolve(!1), this.scheduleNext()
        }), Math.max(0, FQ - this.options.getNow()))
      }
    };

    function bo(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if ({}.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.includes(LQ)) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.includes(wQ) || {}.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function Yo(QQ) {
      const {
        size: FQ,
        concurrency: wQ
      } = QQ, LQ = [];
      let qQ = 0;
      const oQ = () => {
        if (qQ < wQ && LQ.length) {
          const {
            producer: QQ,
            resolve: FQ,
            reject: wQ
          } = LQ.shift();
          qQ++, QQ().then((QQ => {
            qQ--, oQ(), FQ(QQ)
          }), (QQ => {
            qQ--, oQ(), wQ(QQ)
          }))
        }
      };
      return {
        add: QQ => {
          if (LQ.length + qQ >= FQ) throw new Error("Task buffer full");
          return new Promise(((FQ, wQ) => {
            LQ.push({
              producer: QQ,
              resolve: FQ,
              reject: wQ
            }), oQ()
          }))
        }
      }
    }
    const xo = ["headers"],
      Ao = ["keepalive", "signal"],
      to = new Set([408, 425, 429, 500, 502, 503, 504]),
      eo = new Set([429, 503]);
    let Mo = 0,
      Go = 0;
    var po = class extends Error {};
    var co = class extends Bq {
      constructor(QQ) {
        var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ;
        super(), this.options = QQ, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ww, this.pendingCustomSends = 0, this.getNow = null !== (FQ = QQ.getNow) && void 0 !== FQ ? FQ : Date.now, this.requestTimeoutMs = null !== (wQ = QQ.requestTimeoutMs) && void 0 !== wQ ? wQ : 1e4, this.compressionEnabled = null !== (LQ = QQ.requestCompression) && void 0 !== LQ && LQ && "undefined" !== typeof CompressionStream, QQ.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Ho({
          bufferSize: null !== (qQ = QQ.bufferSize) && void 0 !== qQ ? qQ : 30,
          concurrency: null !== (oQ = QQ.concurrency) && void 0 !== oQ ? oQ : 5,
          retry: {
            maxAttempts: null !== (DQ = null === (kQ = QQ.retry) || void 0 === kQ ? void 0 : kQ.maxAttempts) && void 0 !== DQ ? DQ : 3,
            initialBackoffMs: null !== (vQ = null !== (mQ = null === (uQ = QQ.retry) || void 0 === uQ ? void 0 : uQ.initialBackoffMs) && void 0 !== mQ ? mQ : QQ.defaultRateLimitBackoffMs) && void 0 !== vQ ? vQ : 1e3,
            maxBackoffMs: null !== (HQ = null === (bQ = QQ.retry) || void 0 === bQ ? void 0 : bQ.maxBackoffMs) && void 0 !== HQ ? HQ : 3e4,
            backoffMultiplier: null !== (YQ = null === (xQ = QQ.retry) || void 0 === xQ ? void 0 : xQ.backoffMultiplier) && void 0 !== YQ ? YQ : 2
          },
          getNow: this.getNow,
          getRandom: null !== (AQ = QQ.getRandom) && void 0 !== AQ ? AQ : Math.random,
          onRetry: (QQ, FQ) => {
            this.logDebug(`Retrying failed request after ${QQ}ms. Attempt ${FQ}.`)
          }
        }), this.customPromiseBuffer = Yo({
          size: null !== (tQ = QQ.bufferSize) && void 0 !== tQ ? tQ : 30,
          concurrency: null !== (eQ = QQ.concurrency) && void 0 !== eQ ? eQ : 5
        }), this.defaultPromiseBuffer = {
          add: QQ => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(QQ);
            const FQ = this.deliveryQueue.reserve();
            if (!FQ) throw new Error("Task buffer full");
            return this.runBufferedTask(FQ, QQ)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (QQ => {
          QQ.persisted && this.deliveryQueue.resume()
        })))
      }
      send(QQ) {
        var FQ = this;
        return EL((function*() {
          const wQ = FQ.promiseBuffer;
          if (wQ !== FQ.defaultPromiseBuffer || wQ.add !== FQ.defaultBufferAdd) {
            FQ.pendingCustomSends++;
            try {
              yield wQ.add((() => FQ.deliver(QQ)))
            } catch (LQ) {
              FQ.logError("Permanent delivery failure", {
                error: LQ,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              FQ.pendingCustomSends--
            }
          } else yield FQ.deliver(QQ)
        }))()
      }
      runBufferedTask(QQ, FQ) {
        return EL((function*() {
          let wQ;
          try {
            return yield QQ.deliver(EL((function*() {
              return wQ = yield FQ(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), wQ
          } finally {
            QQ.release()
          }
        }))()
      }
      deliver(QQ) {
        var FQ = this;
        return EL((function*() {
          const wQ = FQ.deliveryQueue.reserve();
          if (wQ) try {
            const LQ = yield FQ.prepareRequest(QQ), qQ = yield wQ.deliver(((QQ, wQ) => FQ.performAttempt(LQ, QQ, wQ)));
            "terminal" === qQ.kind && FQ.logError("retries-exhausted" === qQ.reason ? "Delivery retries exhausted" : "Permanent delivery failure", uF(uF({}, qQ.failure), {}, {
              reason: qQ.reason,
              attempts: qQ.attempts,
              elapsedTimeMs: qQ.elapsedTimeMs
            }))
          } catch (LQ) {
            FQ.logError("Permanent delivery failure", {
              error: LQ,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            wQ.release()
          } else FQ.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var QQ;
        return [this.options.url].concat(null !== (QQ = this.config.ignoreUrls) && void 0 !== QQ ? QQ : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(QQ) {
        var FQ = this;
        return EL((function*() {
          var wQ, LQ;
          const qQ = wo(QQ),
            oQ = null === (wQ = qQ.meta.session) || void 0 === wQ ? void 0 : wQ.id,
            DQ = JSON.stringify(qQ),
            kQ = null !== (LQ = FQ.options.requestOptions) && void 0 !== LQ ? LQ : {},
            {
              headers: vQ = {}
            } = kQ,
            mQ = bo(kQ, xo),
            {
              keepalive: uQ,
              signal: HQ
            } = mQ,
            bQ = bo(mQ, Ao),
            YQ = {};
          for (const [QQ, FQ] of Object.entries(vQ)) YQ[QQ] = "function" === typeof FQ ? yield FQ(): FQ;
          let xQ = DQ,
            AQ = function(QQ) {
              return "undefined" === typeof TextEncoder ? QQ.length : (new TextEncoder).encode(QQ).byteLength
            }(DQ);
          const tQ = {};
          return FQ.compressionEnabled && (xQ = yield FQ.compress(DQ), AQ = xQ.size, tQ["Content-Encoding"] = "gzip"), {
            bodySize: AQ,
            sessionId: oQ,
            requestInit: uF({
              method: "POST",
              headers: uF(uF(uF(uF(uF({
                "Content-Type": "application/json"
              }, tQ), YQ), FQ.options.apiKey ? {
                "x-api-key": FQ.options.apiKey
              } : {}), oQ ? {
                "x-faro-session-id": oQ
              } : {}), {}, {
                "Idempotency-Key": eF(20)
              }),
              body: xQ
            }, bQ)
          }
        }))()
      }
      performAttempt(QQ, FQ, wQ) {
        var LQ = this;
        return EL((function*() {
          var qQ;
          const oQ = null === (qQ = LQ.options.requestOptions) || void 0 === qQ ? void 0 : qQ.signal;
          if (null === oQ || void 0 === oQ ? void 0 : oQ.aborted) return {
            kind: "terminal",
            failure: {
              error: oQ.reason
            },
            attemptsMade: 0
          };
          let DQ = 0;
          try {
            var kQ;
            const qQ = yield LQ.fetchWithKeepaliveFallback(QQ.requestInit, QQ.bodySize, !!wQ || (null === (kQ = LQ.options.requestOptions) || void 0 === kQ ? void 0 : kQ.keepalive), FQ, (() => DQ++));
            if (LQ.handleResponse(qQ, QQ.sessionId), qQ.status >= 200 && qQ.status < 300) return {
              kind: "success",
              attemptsMade: DQ
            };
            const oQ = {
              status: qQ.status
            };
            return !to.has(qQ.status) || wQ ? {
              kind: "terminal",
              failure: oQ,
              attemptsMade: DQ
            } : {
              kind: "retry",
              failure: oQ,
              attemptsMade: DQ,
              retryAfterMs: eo.has(qQ.status) ? LQ.getRetryAfterDelayMs(qQ) : void 0
            }
          } catch (vQ) {
            const QQ = {
              error: vQ
            };
            return (null === oQ || void 0 === oQ ? void 0 : oQ.aborted) || !LQ.isFetchNetworkError(vQ) || wQ ? {
              kind: "terminal",
              failure: QQ,
              attemptsMade: DQ
            } : {
              kind: "retry",
              failure: QQ,
              attemptsMade: DQ
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(QQ, FQ, wQ, LQ, qQ) {
        var oQ = this;
        return EL((function*() {
          const DQ = oQ.getNow(),
            kQ = oQ.reserveKeepalive(FQ, wQ);
          try {
            return yield oQ.fetchWithTimeout(uF(uF({}, QQ), {}, {
              keepalive: kQ.keepalive
            }), oQ.requestTimeoutMs, qQ)
          } catch (mQ) {
            var vQ;
            if (kQ.keepalive && LQ > 1 && oQ.isFetchNetworkError(mQ) && !(mQ instanceof po) && !(null === (vQ = oQ.options.requestOptions) || void 0 === vQ || null === (vQ = vQ.signal) || void 0 === vQ ? void 0 : vQ.aborted)) {
              oQ.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const FQ = oQ.requestTimeoutMs - (oQ.getNow() - DQ);
              return oQ.fetchWithTimeout(uF(uF({}, QQ), {}, {
                keepalive: !1
              }), FQ, qQ)
            }
            throw mQ
          } finally {
            kQ.release()
          }
        }))()
      }
      fetchWithTimeout(QQ, FQ, wQ) {
        var LQ = this;
        return EL((function*() {
          var qQ;
          const oQ = null === (qQ = LQ.options.requestOptions) || void 0 === qQ ? void 0 : qQ.signal;
          if (LQ.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return wQ(), fetch(LQ.options.url, uF(uF({}, QQ), {}, {
            signal: oQ
          }));
          if (FQ <= 0) throw new po("Request timed out");
          const DQ = new AbortController,
            kQ = () => DQ.abort(null === oQ || void 0 === oQ ? void 0 : oQ.reason);
          null === oQ || void 0 === oQ || oQ.addEventListener("abort", kQ, {
            once: !0
          });
          let vQ = !1;
          const mQ = setTimeout((() => {
            vQ = !0, DQ.abort()
          }), FQ);
          try {
            return wQ(), yield fetch(LQ.options.url, uF(uF({}, QQ), {}, {
              signal: DQ.signal
            }))
          } catch (uQ) {
            if (vQ && !(null === oQ || void 0 === oQ ? void 0 : oQ.aborted)) throw new po("Request timed out");
            throw uQ
          } finally {
            clearTimeout(mQ), null === oQ || void 0 === oQ || oQ.removeEventListener("abort", kQ)
          }
        }))()
      }
      getRetryAfterDelayMs(QQ) {
        const FQ = QQ.headers.get("Retry-After");
        if (!FQ) return;
        if (/^\d+$/.test(FQ)) {
          const QQ = 1e3 * Number(FQ);
          return Number.isFinite(QQ) ? QQ : Number.POSITIVE_INFINITY
        }
        const wQ = this.getNow(),
          LQ = function(QQ, FQ) {
            const wQ = qo.exec(QQ);
            if (wQ) {
              const [, QQ, FQ, LQ, qQ, oQ, DQ, kQ] = wQ;
              return uo({
                weekday: ko.indexOf(QQ),
                day: Number(FQ),
                month: mo.indexOf(LQ),
                year: Number(qQ),
                hour: Number(oQ),
                minute: Number(DQ),
                second: Number(kQ)
              })
            }
            const LQ = oo.exec(QQ);
            if (LQ) {
              const [, QQ, wQ, DQ, kQ, vQ, mQ, uQ] = LQ, HQ = new Date(FQ);
              if (Number.isNaN(HQ.getTime())) return;
              const bQ = HQ.getUTCFullYear();
              let YQ = 100 * Math.floor(bQ / 100) + Number(kQ);
              YQ < bQ && (YQ += 100);
              const xQ = mo.indexOf(DQ),
                AQ = {
                  month: xQ,
                  day: Number(wQ),
                  hour: Number(vQ),
                  minute: Number(mQ),
                  second: Number(uQ),
                  millisecond: 0
                },
                tQ = {
                  month: HQ.getUTCMonth(),
                  day: HQ.getUTCDate(),
                  hour: HQ.getUTCHours(),
                  minute: HQ.getUTCMinutes(),
                  second: HQ.getUTCSeconds(),
                  millisecond: HQ.getUTCMilliseconds()
                };
              return (YQ > bQ + 50 || YQ === bQ + 50 && (oQ = tQ, ((qQ = AQ).month - oQ.month || qQ.day - oQ.day || qQ.hour - oQ.hour || qQ.minute - oQ.minute || qQ.second - oQ.second || qQ.millisecond - oQ.millisecond) > 0)) && (YQ -= 100), uo({
                weekday: vo.indexOf(QQ),
                day: Number(wQ),
                month: xQ,
                year: YQ,
                hour: Number(vQ),
                minute: Number(mQ),
                second: Number(uQ)
              })
            }
            var qQ, oQ;
            const DQ = Do.exec(QQ);
            if (!DQ) return;
            const [, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ] = DQ;
            return uo({
              weekday: ko.indexOf(kQ),
              day: Number(null !== mQ && void 0 !== mQ ? mQ : uQ),
              month: mo.indexOf(vQ),
              year: Number(xQ),
              hour: Number(HQ),
              minute: Number(bQ),
              second: Number(YQ)
            })
          }(FQ, wQ);
        return null == LQ ? void 0 : Math.max(0, LQ - wQ)
      }
      reserveKeepalive(QQ, FQ) {
        if (!1 === FQ || QQ > 6e4 || Mo + QQ > 6e4 || Go >= 9) return {
          keepalive: !1,
          release: hF
        };
        Mo += QQ, Go++;
        let wQ = !1;
        return {
          keepalive: !0,
          release: () => {
            wQ || (wQ = !0, Mo -= QQ, Go--)
          }
        }
      }
      handleResponse(QQ, FQ) {
        202 === QQ.status && "invalid" === QQ.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), FQ), QQ.text().catch(hF)
      }
      isFetchNetworkError(QQ) {
        return QQ instanceof TypeError || QQ instanceof po || QQ instanceof DOMException && "AbortError" === QQ.name
      }
      compress(QQ) {
        return EL((function*() {
          const FQ = [],
            wQ = new ReadableStream({
              start(FQ) {
                FQ.enqueue((new TextEncoder).encode(QQ)), FQ.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: QQ,
              value: LQ
            } = yield wQ.read();
            if (QQ) return new Blob(FQ);
            FQ.push(LQ)
          }
        }))()
      }
      extendFaroSession(QQ, FQ, wQ) {
        var LQ, qQ;
        const oQ = QQ.sessionTracking;
        if (!(null === oQ || void 0 === oQ ? void 0 : oQ.enabled)) return void FQ("Session expired.");
        const {
          fetchUserSession: DQ,
          storeUserSession: kQ
        } = VF(oQ), vQ = null === (LQ = this.metas.value.session) || void 0 === LQ ? void 0 : LQ.id, mQ = null === (qQ = DQ()) || void 0 === qQ ? void 0 : qQ.sessionId;
        wQ && wQ === vQ && wQ === mQ ? (rF({
          fetchUserSession: DQ,
          storeUserSession: kQ
        })({
          forceSessionExtend: !0
        }), FQ("Session expired; created new session.")) : FQ("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Co = () => {
      const QQ = window.k6;
      return {
        k6: uF({
          isK6Browser: !0
        }, (null === QQ || void 0 === QQ ? void 0 : QQ.testRunId) && {
          testRunId: null === QQ || void 0 === QQ ? void 0 : QQ.testRunId
        })
      }
    };
    let So, io;

    function Wo() {
      let {
        generatePageId: QQ,
        initialPageMeta: FQ
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const wQ = location.href;
        return sQ(QQ) && So !== wQ && (So = wQ, io = QQ(location)), {
          page: uF(uF({
            url: wQ
          }, io ? {
            id: io
          } : {}), FQ)
        }
      }
    }

    function Ro() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dF,
        FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const wQ = EF;
      return FQ > 0 && (wQ.error = FQ >= 1 ? function() {
        for (var FQ = arguments.length, LQ = new Array(FQ), qQ = 0; qQ < FQ; qQ++) LQ[qQ] = arguments[qQ];
        QQ.error(`${wQ.prefix}\n`, ...LQ)
      } : hF, wQ.warn = FQ >= 2 ? function() {
        for (var FQ = arguments.length, LQ = new Array(FQ), qQ = 0; qQ < FQ; qQ++) LQ[qQ] = arguments[qQ];
        QQ.warn(`${wQ.prefix}\n`, ...LQ)
      } : hF, wQ.info = FQ >= 3 ? function() {
        for (var FQ = arguments.length, LQ = new Array(FQ), qQ = 0; qQ < FQ; qQ++) LQ[qQ] = arguments[qQ];
        QQ.info(`${wQ.prefix}\n`, ...LQ)
      } : hF, wQ.debug = FQ >= 4 ? function() {
        for (var FQ = arguments.length, LQ = new Array(FQ), qQ = 0; qQ < FQ; qQ++) LQ[qQ] = arguments[qQ];
        QQ.debug(`${wQ.prefix}\n`, ...LQ)
      } : hF), wQ
    }
    const Oo = "faro",
      so = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      ro = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Io(QQ) {
      var FQ, wQ, qQ, oQ, DQ, kQ;
      const vQ = [],
        uQ = Ro(QQ.unpatchedConsole, QQ.internalLoggerLevel);
      QQ.transports ? ((QQ.url || QQ.apiKey) && uQ.error('if "transports" is defined, "url" and "apiKey" should not be defined'), vQ.push(...QQ.transports)) : QQ.url ? vQ.push(new co({
        url: QQ.url,
        apiKey: QQ.apiKey,
        requestCompression: QQ.requestCompression
      })) : uQ.error('either "url" or "transports" must be defined');
      const {
        dedupe: HQ = !0,
        eventDomain: bQ = LQ,
        globalObjectKey: YQ = Oo,
        instrumentations: xQ = Vq(),
        internalLoggerLevel: AQ = nF,
        isolate: tQ = !1,
        logArgsSerializer: eQ = Uw,
        metas: MQ = No(QQ),
        paused: GQ = !1,
        preventGlobalExposure: pQ = !1,
        unpatchedConsole: cQ = dF,
        url: CQ,
        experimental: SQ
      } = QQ, iQ = bo(QQ, ro), WQ = null !== (FQ = null === SQ || void 0 === SQ ? void 0 : SQ.trackNavigation) && void 0 !== FQ && FQ, RQ = {
        dataAttributeName: BL(null !== (wQ = null === (qQ = QQ.userActionsInstrumentation) || void 0 === qQ ? void 0 : qQ.dataAttributeName) && void 0 !== wQ ? wQ : PL),
        excludeItem: null === (oQ = QQ.userActionsInstrumentation) || void 0 === oQ ? void 0 : oQ.excludeItem,
        initialActivityTimeout: dL(null === (DQ = QQ.userActionsInstrumentation) || void 0 === DQ ? void 0 : DQ.initialActivityTimeout, 100, (QQ => uQ.warn(QQ)))
      };
      return uF(uF({}, iQ), {}, {
        batching: uF(uF({}, so), QQ.batching),
        dedupe: HQ,
        globalObjectKey: YQ,
        instrumentations: Uo(xQ, QQ),
        internalLoggerLevel: AQ,
        isolate: tQ,
        logArgsSerializer: eQ,
        metas: MQ,
        parseStacktrace: Aw,
        paused: GQ,
        preventGlobalExposure: pQ,
        transports: vQ,
        unpatchedConsole: cQ,
        eventDomain: bQ,
        ignoreUrls: [...null !== (kQ = QQ.ignoreUrls) && void 0 !== kQ ? kQ : [], ...CQ ? [CQ] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: uF(uF(uF({}, mQ), QQ.sessionTracking), To({
          trackGeolocation: QQ.trackGeolocation,
          sessionTracking: QQ.sessionTracking
        })),
        userActionsInstrumentation: RQ,
        experimental: {
          trackNavigation: WQ
        }
      })
    }

    function Uo(QQ, FQ) {
      let {
        experimental: wQ
      } = FQ;
      var LQ;
      const qQ = null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.trackNavigation) && void 0 !== LQ && LQ;
      return QQ.filter((QQ => !("@grafana/faro-web-sdk:instrumentation-navigation" === QQ.name && !qQ)))
    }

    function No(QQ) {
      var FQ, wQ, LQ;
      const {
        page: qQ,
        generatePageId: oQ
      } = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.pageTracking) && void 0 !== FQ ? FQ : {}, DQ = [gq, Pq, Wo({
        generatePageId: oQ,
        initialPageMeta: qQ
      }), ...null !== (wQ = QQ.metas) && void 0 !== wQ ? wQ : [], yq];
      return OQ(null === (LQ = window) || void 0 === LQ ? void 0 : LQ.k6) ? [...DQ, Co] : DQ
    }

    function To(QQ) {
      let {
        trackGeolocation: FQ,
        sessionTracking: wQ
      } = QQ;
      var LQ;
      const qQ = {};
      return WQ(FQ) && (qQ.geoLocationTrackingEnabled = FQ), nQ(qQ) ? {} : {
        session: uF(uF({}, null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.session) && void 0 !== LQ ? LQ : {}), {}, {
          overrides: qQ
        })
      }
    }
    const Ko = new WeakSet;

    function zo(QQ) {
      return Ko.add(QQ), QQ
    }

    function jo(QQ, FQ) {
      if (QQ.capture) return zo(QQ.capture(FQ));
      const wQ = zo(QQ.value);
      return null === FQ || void 0 === FQ || FQ(), wQ
    }

    function ao(QQ) {
      const FQ = `__faroBundleId_${QQ}`,
        wQ = null === uQ || void 0 === uQ ? void 0 : uQ[FQ];
      if ("string" === typeof wQ && "" !== wQ) return wQ;
      const LQ = "undefined" !== typeof window ? window[FQ] : void 0;
      return "string" === typeof LQ && "" !== LQ ? LQ : void 0
    }

    function Xo(QQ) {
      var FQ, wQ;
      const LQ = QQ.config.app.name,
        qQ = LQ ? function(QQ) {
          return null === uQ || void 0 === uQ ? void 0 : uQ[`__faroGitHash_${QQ}`]
        }(LQ) : void 0,
        oQ = {
          sdk: {
            version: ww,
            name: "faro"
          },
          app: BF({
            bundleId: LQ && ao(LQ)
          }, void 0 !== qQ ? {
            gitHash: qQ
          } : {})
        },
        DQ = null === (FQ = QQ.config.sessionTracking) || void 0 === FQ ? void 0 : FQ.session;
      DQ && QQ.api.setSession(DQ), QQ.config.app && (oQ.app = BF(BF({}, QQ.config.app), oQ.app)), QQ.config.user && (oQ.user = QQ.config.user), QQ.config.view && (oQ.view = QQ.config.view), QQ.metas.add(oQ, ...null !== (wQ = QQ.config.metas) && void 0 !== wQ ? wQ : [])
    }
    var fo = class {
      constructor(QQ, FQ) {
        var wQ, LQ;
        this.signalBuffer = [], this.itemLimit = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.itemLimit) && void 0 !== wQ ? wQ : 50, this.sendTimeout = null !== (LQ = null === FQ || void 0 === FQ ? void 0 : FQ.sendTimeout) && void 0 !== LQ ? LQ : 250, this.paused = (null === FQ || void 0 === FQ ? void 0 : FQ.paused) || !1, this.sendFn = QQ, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(QQ) {
        this.paused || (this.signalBuffer.push(QQ), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(QQ) {
        const FQ = new Map;
        return QQ.forEach((QQ => {
          const wQ = JSON.stringify(QQ.meta);
          let LQ = FQ.get(wQ);
          LQ = void 0 === LQ ? [QQ] : [...LQ, QQ], FQ.set(wQ, LQ)
        })), Array.from(FQ.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const QQ = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(QQ).forEach(this.sendFn)
        } catch (FQ) {
          throw this.signalBuffer = [...QQ, ...this.signalBuffer], this.trimBufferToLimit(), FQ
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Vo(QQ, FQ, wQ, LQ) {
      var qQ;
      FQ.debug("Initializing transports");
      const oQ = [];
      let DQ = [];
      const kQ = QQ => {
        let FQ = QQ;
        for (const LQ of DQ) {
          const QQ = FQ.map(LQ).filter(Boolean);
          if (0 === QQ.length) return [];
          FQ = ho(QQ, wQ)
        }
        return FQ
      };
      let vQ;
      (null === (qQ = wQ.batching) || void 0 === qQ ? void 0 : qQ.enabled) && (vQ = new fo((QQ => {
        const wQ = kQ(QQ);
        if (0 !== wQ.length)
          for (const LQ of oQ) FQ.debug(`Transporting item using ${LQ.name}\n`, wQ), LQ.isBatched() && LQ.send(wQ)
      }), {
        sendTimeout: wQ.batching.sendTimeout,
        itemLimit: wQ.batching.itemLimit,
        paused: wQ.paused
      }));
      return {
        add: function() {
          FQ.debug("Adding transports");
          for (var qQ = arguments.length, DQ = new Array(qQ), kQ = 0; kQ < qQ; kQ++) DQ[kQ] = arguments[kQ];
          DQ.forEach((qQ => {
            FQ.debug(`Adding "${qQ.name}" transport`), oQ.some((QQ => QQ === qQ)) ? FQ.warn(`Transport ${qQ.name} is already added`) : (qQ.unpatchedConsole = QQ, qQ.internalLogger = FQ, qQ.config = wQ, qQ.metas = LQ, oQ.push(qQ))
          }))
        },
        addBeforeSendHooks: function() {
          FQ.debug("Adding beforeSendHooks\n", DQ);
          for (var QQ = arguments.length, wQ = new Array(QQ), LQ = 0; LQ < QQ; LQ++) wQ[LQ] = arguments[LQ];
          wQ.forEach((QQ => {
            QQ && DQ.push(QQ)
          }))
        },
        getBeforeSendHooks: () => [...DQ],
        execute: QQ => {
          var qQ;
          if (!wQ.paused && XF(LQ).shouldCapture()) {
            if (HQ = QQ.meta, !Ko.has(HQ)) {
              var DQ, mQ, uQ;
              const FQ = null === (DQ = LQ.value.session) || void 0 === DQ ? void 0 : DQ.id,
                qQ = jo(LQ);
              if (wQ.paused) return;
              const oQ = BF({}, QQ.meta);
              (null === (mQ = oQ.session) || void 0 === mQ ? void 0 : mQ.id) === FQ && (null === (uQ = qQ.session) || void 0 === uQ ? void 0 : uQ.id) !== FQ && (void 0 === qQ.session ? delete oQ.session : oQ.session = qQ.session), QQ = BF(BF({}, QQ), {}, {
                meta: zo(oQ)
              })
            }
            var HQ;
            (null === (qQ = wQ.batching) || void 0 === qQ ? void 0 : qQ.enabled) && (null === vQ || void 0 === vQ || vQ.addItem(QQ)), (QQ => {
              var LQ;
              if ((null === (LQ = wQ.batching) || void 0 === LQ ? void 0 : LQ.enabled) && oQ.every((QQ => QQ.isBatched()))) return;
              const [qQ] = kQ([QQ]);
              if (void 0 !== qQ)
                for (const kQ of oQ) {
                  var DQ;
                  FQ.debug(`Transporting item using ${kQ.name}\n`, qQ), kQ.isBatched() ? (null === (DQ = wQ.batching) || void 0 === DQ ? void 0 : DQ.enabled) || kQ.send([qQ]) : kQ.send(qQ)
                }
            })(QQ)
          }
        },
        isPaused: () => wQ.paused,
        pause: () => {
          FQ.debug("Pausing transports"), null === vQ || void 0 === vQ || vQ.pause(), wQ.paused = !0
        },
        remove: function() {
          FQ.debug("Removing transports");
          for (var QQ = arguments.length, wQ = new Array(QQ), LQ = 0; LQ < QQ; LQ++) wQ[LQ] = arguments[LQ];
          wQ.forEach((QQ => {
            FQ.debug(`Removing "${QQ.name}" transport`);
            const wQ = oQ.indexOf(QQ); - 1 !== wQ ? oQ.splice(wQ, 1) : FQ.warn(`Transport "${QQ.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var QQ = arguments.length, wQ = new Array(QQ), LQ = 0; LQ < QQ; LQ++) wQ[LQ] = arguments[LQ];
          FQ.debug("Removing beforeSendHooks"), DQ = DQ.filter((QQ => !wQ.includes(QQ)))
        },
        get transports() {
          return [...oQ]
        },
        unpause: () => {
          FQ.debug("Unpausing transports"), null === vQ || void 0 === vQ || vQ.start(), wQ.paused = !1
        }
      }
    }

    function ho(QQ, FQ) {
      if (FQ.preserveOriginalError)
        for (const wQ of QQ) "exception" === wQ.type && delete wQ.payload.originalError;
      return QQ
    }
    let Jo = dF;

    function Eo(QQ) {
      var FQ;
      return Jo = null !== (FQ = QQ.unpatchedConsole) && void 0 !== FQ ? FQ : Jo, Jo
    }
    let no, go = EF;

    function Po(QQ, FQ) {
      return go = Ro(QQ, FQ.internalLoggerLevel), go
    }

    function Zo(QQ) {
      let {
        internalLogger: FQ,
        config: wQ,
        metas: LQ,
        transports: qQ,
        tracesApi: oQ,
        userActionsApi: DQ
      } = QQ;
      var kQ;
      FQ.debug("Initializing exceptions API");
      let vQ = null;
      no = null !== (kQ = wQ.parseStacktrace) && void 0 !== kQ ? kQ : no;
      const mQ = QQ => {
          FQ.debug("Changing stacktrace parser"), no = null !== QQ && void 0 !== QQ ? QQ : no
        },
        {
          ignoreErrors: uQ = [],
          preserveOriginalError: HQ
        } = wQ;
      return mQ(wQ.parseStacktrace), {
        changeStacktraceParser: mQ,
        getStacktraceParser: () => no,
        pushError: function(QQ) {
          let {
            skipDedupe: kQ,
            stackFrames: mQ,
            type: bQ,
            context: YQ,
            spanContext: xQ,
            timestampOverwriteMs: AQ,
            originalError: tQ,
            fingerprint: eQ,
            fatal: MQ
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(QQ, FQ) {
              const {
                message: wQ,
                name: LQ,
                stack: qQ
              } = FQ;
              return oQ = QQ, DQ = wQ + " " + LQ + " " + qQ, oQ.some((QQ => CQ(QQ) ? DQ.includes(QQ) : !!DQ.match(QQ)));
              var oQ, DQ
            }(uQ, null !== tQ && void 0 !== tQ ? tQ : QQ)) try {
            var GQ, pQ;
            if (!XF(LQ).shouldCapture()) return;
            const uQ = zF(BF(BF({}, function(QQ) {
                let FQ = QQ.cause;
                lQ(FQ) ? FQ = QQ.cause.toString() : null !== FQ && (OQ(QQ.cause) || rQ(QQ.cause)) ? FQ = KF(QQ.cause) : null != FQ && (FQ = QQ.cause.toString());
                return null == FQ ? {} : {
                  cause: FQ
                }
              }(null !== tQ && void 0 !== tQ ? tQ : QQ)), null !== YQ && void 0 !== YQ ? YQ : {})),
              CQ = BF(BF(BF(BF({
                type: bQ || QQ.name || "Error",
                value: QQ.message,
                timestamp: AQ ? AF(AQ) : xF(),
                trace: xQ ? {
                  trace_id: xQ.traceId,
                  span_id: xQ.spanId
                } : oQ.getTraceContext()
              }, nQ(uQ) ? {} : {
                context: uQ
              }), HQ ? {
                originalError: tQ
              } : {}), eQ ? {
                fingerprint: eQ
              } : {}), void 0 !== MQ ? {
                fatal: MQ
              } : {});
            mQ = null !== (GQ = mQ) && void 0 !== GQ ? GQ : QQ.stack ? null === no || void 0 === no ? void 0 : no(QQ).frames : void 0, (null === mQ || void 0 === mQ ? void 0 : mQ.length) && (CQ.stacktrace = {
              frames: mQ
            });
            const SQ = {
              type: CQ.type,
              value: CQ.value,
              stacktrace: CQ.stacktrace,
              context: CQ.context,
              fingerprint: CQ.fingerprint,
              fatal: null !== (pQ = CQ.fatal) && void 0 !== pQ && pQ
            };
            if (!kQ && wQ.dedupe && !cQ(vQ) && MF(SQ, vQ)) return void FQ.debug("Skipping error push because it is the same as the last one\n", CQ);
            const iQ = vQ,
              WQ = jo(LQ);
            if (vQ !== iQ && !kQ && wQ.dedupe && MF(SQ, vQ)) return;
            vQ = SQ;
            const RQ = {
              meta: WQ,
              payload: CQ,
              type: "exception"
            };
            FQ.debug("Pushing exception\n", RQ), Sq(DQ.getActiveUserAction(), RQ) || qQ.execute(RQ)
          } catch (SQ) {
            FQ.error("Error pushing event", SQ)
          }
        }
      }
    }

    function yo(QQ, FQ, wQ, LQ, qQ) {
      FQ.debug("Initializing API");
      let oQ = null;
      const DQ = function(QQ) {
          let {
            transports: FQ,
            internalLogger: wQ,
            config: LQ,
            pushEvent: qQ
          } = QQ;
          var oQ;
          const DQ = null === (oQ = LQ.userActionsInstrumentation) || void 0 === oQ ? void 0 : oQ.excludeItem;
          let kQ;
          const vQ = () => kQ;
          return {
            startUserAction: (QQ, LQ, oQ) => {
              if (void 0 === vQ()) {
                const wQ = new cq({
                  name: QQ,
                  transports: FQ,
                  attributes: LQ,
                  trigger: (null === oQ || void 0 === oQ ? void 0 : oQ.triggerName) || "faroApiCall",
                  importance: (null === oQ || void 0 === oQ ? void 0 : oQ.importance) || Gq.Normal,
                  trackUserActionsExcludeItem: DQ,
                  pushEvent: qQ
                });
                return wQ.filter((QQ => [3, 2].includes(QQ))).first().subscribe((() => {
                  kQ = void 0
                })), Cq.notify({
                  type: Mq,
                  userAction: wQ,
                  initialActivityTimeout: null === oQ || void 0 === oQ ? void 0 : oQ.initialActivityTimeout
                }), kQ = wQ, kQ
              }
              wQ.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: vQ
          }
        }({
          transports: qQ,
          config: wQ,
          internalLogger: FQ,
          pushEvent: (QQ, wQ, LQ, qQ) => {
            oQ ? oQ(QQ, wQ, LQ, qQ) : FQ.warn("pushEventImpl is not initialized. Event dropped:", {
              name: QQ,
              attributes: wQ,
              domain: LQ,
              options: qQ
            })
          }
        }),
        kQ = function(QQ, FQ, wQ, LQ, qQ) {
          let oQ;
          return FQ.debug("Initializing traces API"), {
            getOTEL: () => oQ,
            getTraceContext: () => {
              const QQ = null === oQ || void 0 === oQ ? void 0 : oQ.trace.getSpanContext(oQ.context.active());
              return QQ ? {
                trace_id: QQ.traceId,
                span_id: QQ.spanId
              } : void 0
            },
            initOTEL: (QQ, wQ) => {
              FQ.debug("Initializing OpenTelemetry"), oQ = {
                trace: QQ,
                context: wQ
              }
            },
            isOTELInitialized: () => !!oQ,
            pushTraces: QQ => {
              try {
                if (!XF(LQ).shouldCapture()) return;
                const wQ = {
                  type: "trace",
                  payload: QQ,
                  meta: jo(LQ)
                };
                FQ.debug("Pushing trace\n", wQ), qQ.execute(wQ)
              } catch (wQ) {
                FQ.error("Error pushing trace\n", wQ)
              }
            }
          }
        }(0, FQ, 0, LQ, qQ),
        vQ = {
          unpatchedConsole: QQ,
          internalLogger: FQ,
          userActionsApi: DQ,
          config: wQ,
          metas: LQ,
          transports: qQ,
          tracesApi: kQ
        },
        mQ = function(QQ) {
          let {
            internalLogger: FQ,
            config: wQ,
            metas: LQ,
            transports: qQ,
            tracesApi: oQ,
            userActionsApi: DQ
          } = QQ, kQ = null;
          return {
            pushEvent: function(QQ, vQ, mQ) {
              let {
                skipDedupe: uQ,
                spanContext: HQ,
                timestampOverwriteMs: bQ,
                customPayloadTransformer: YQ = QQ => QQ
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!XF(LQ).shouldCapture()) return;
                const xQ = zF(vQ),
                  AQ = YQ({
                    name: QQ,
                    domain: null !== mQ && void 0 !== mQ ? mQ : wQ.eventDomain,
                    attributes: nQ(xQ) ? void 0 : xQ,
                    timestamp: bQ ? AF(bQ) : xF(),
                    trace: HQ ? {
                      trace_id: HQ.traceId,
                      span_id: HQ.spanId
                    } : oQ.getTraceContext()
                  }),
                  tQ = {
                    name: AQ.name,
                    attributes: AQ.attributes,
                    domain: AQ.domain
                  };
                if (!uQ && wQ.dedupe && !cQ(kQ) && MF(tQ, kQ)) return void FQ.debug("Skipping event push because it is the same as the last one\n", AQ);
                const eQ = kQ,
                  MQ = jo(LQ);
                if (kQ !== eQ && !uQ && wQ.dedupe && MF(tQ, kQ)) return;
                kQ = tQ;
                const GQ = {
                  meta: MQ,
                  payload: AQ,
                  type: "event"
                };
                FQ.debug("Pushing event\n", GQ), Sq(DQ.getActiveUserAction(), GQ) || qQ.execute(GQ)
              } catch (xQ) {
                FQ.error("Error pushing event", xQ)
              }
            }
          }
        }(vQ);
      return oQ = mQ.pushEvent, BF(BF(BF(BF(BF(BF(BF({}, kQ), Zo(vQ)), function(QQ) {
        let FQ, wQ, LQ, qQ, {
          internalLogger: oQ,
          metas: DQ
        } = QQ;
        oQ.debug("Initializing meta API");
        const kQ = QQ => {
            wQ && DQ.remove(wQ), wQ = {
              user: QQ
            }, DQ.add(wQ)
          },
          vQ = (QQ, wQ) => {
            var LQ;
            const qQ = null === wQ || void 0 === wQ ? void 0 : wQ.overrides,
              oQ = qQ ? {
                overrides: BF(BF({}, null === FQ || void 0 === FQ || null === (LQ = FQ.session) || void 0 === LQ ? void 0 : LQ.overrides), qQ)
              } : {};
            FQ && DQ.remove(FQ), FQ = {
              session: BF(BF({}, nQ(QQ) ? void 0 : QQ), oQ)
            }, DQ.add(FQ)
          },
          mQ = (QQ, FQ) => {
            XF(DQ).notifySessionUpdate({
              type: "replace",
              session: QQ,
              overrides: null === FQ || void 0 === FQ ? void 0 : FQ.overrides
            }), vQ(QQ, FQ)
          },
          uQ = () => DQ.value.session,
          HQ = () => DQ.value.page;
        return {
          setUser: kQ,
          resetUser: kQ,
          setSession: mQ,
          resetSession: mQ,
          getSession: uQ,
          setView: (QQ, FQ) => {
            var wQ;
            if ((null === FQ || void 0 === FQ ? void 0 : FQ.overrides) && (XF(DQ).notifySessionUpdate({
                type: "overrides",
                overrides: FQ.overrides
              }), vQ(uQ(), {
                overrides: FQ.overrides
              })), (null === LQ || void 0 === LQ || null === (wQ = LQ.view) || void 0 === wQ ? void 0 : wQ.name) === (null === QQ || void 0 === QQ ? void 0 : QQ.name)) return;
            const qQ = LQ;
            LQ = {
              view: QQ
            }, DQ.add(LQ), qQ && DQ.remove(qQ)
          },
          getView: () => DQ.value.view,
          setPage: QQ => {
            var FQ;
            const wQ = CQ(QQ) ? BF(BF({}, null !== (FQ = null === qQ || void 0 === qQ ? void 0 : qQ.page) && void 0 !== FQ ? FQ : HQ()), {}, {
              id: QQ
            }) : QQ;
            qQ && DQ.remove(qQ), qQ = {
              page: wQ
            }, DQ.add(qQ)
          },
          getPage: HQ
        }
      }(vQ)), function(QQ) {
        let {
          internalLogger: FQ,
          config: wQ,
          metas: LQ,
          transports: qQ,
          tracesApi: oQ,
          userActionsApi: DQ
        } = QQ;
        var kQ;
        FQ.debug("Initializing logs API");
        let vQ = null;
        const mQ = null !== (kQ = wQ.logArgsSerializer) && void 0 !== kQ ? kQ : Uw;
        return {
          pushLog: function(QQ) {
            let {
              context: kQ,
              level: uQ,
              skipDedupe: HQ,
              spanContext: bQ,
              timestampOverwriteMs: YQ
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!XF(LQ).shouldCapture()) return;
              const xQ = zF(kQ),
                AQ = {
                  message: mQ(QQ),
                  level: null !== uQ && void 0 !== uQ ? uQ : "log",
                  context: nQ(xQ) ? void 0 : xQ,
                  timestamp: YQ ? AF(YQ) : xF(),
                  trace: bQ ? {
                    trace_id: bQ.traceId,
                    span_id: bQ.spanId
                  } : oQ.getTraceContext()
                },
                tQ = {
                  message: AQ.message,
                  level: AQ.level,
                  context: AQ.context
                };
              if (!HQ && wQ.dedupe && !cQ(vQ) && MF(tQ, vQ)) return void FQ.debug("Skipping log push because it is the same as the last one\n", AQ);
              const eQ = vQ,
                MQ = jo(LQ);
              if (vQ !== eQ && !HQ && wQ.dedupe && MF(tQ, vQ)) return;
              vQ = tQ;
              const GQ = {
                type: "log",
                payload: AQ,
                meta: MQ
              };
              FQ.debug("Pushing log\n", GQ), Sq(DQ.getActiveUserAction(), GQ) || qQ.execute(GQ)
            } catch (xQ) {
              FQ.error("Error pushing log\n", xQ)
            }
          }
        }
      }(vQ)), function(QQ) {
        let {
          internalLogger: FQ,
          config: wQ,
          metas: LQ,
          transports: qQ,
          tracesApi: oQ,
          userActionsApi: DQ
        } = QQ;
        FQ.debug("Initializing measurements API");
        let kQ = null;
        return {
          pushMeasurement: function(QQ) {
            let {
              skipDedupe: vQ,
              context: mQ,
              spanContext: uQ,
              timestampOverwriteMs: HQ
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!XF(LQ).shouldCapture()) return;
              const bQ = zF(mQ),
                YQ = BF(BF({}, QQ), {}, {
                  trace: uQ ? {
                    trace_id: uQ.traceId,
                    span_id: uQ.spanId
                  } : oQ.getTraceContext(),
                  timestamp: HQ ? AF(HQ) : xF(),
                  context: nQ(bQ) ? void 0 : bQ
                }),
                xQ = {
                  type: YQ.type,
                  values: YQ.values,
                  context: YQ.context
                };
              if (!vQ && wQ.dedupe && !cQ(kQ) && MF(xQ, kQ)) return void FQ.debug("Skipping measurement push because it is the same as the last one\n", YQ);
              const AQ = kQ,
                tQ = jo(LQ);
              if (kQ !== AQ && !vQ && wQ.dedupe && MF(xQ, kQ)) return;
              kQ = xQ;
              const eQ = {
                type: "measurement",
                payload: YQ,
                meta: tQ
              };
              FQ.debug("Pushing measurement\n", eQ), Sq(DQ.getActiveUserAction(), eQ) || qQ.execute(eQ)
            } catch (bQ) {
              FQ.error("Error pushing measurement\n", bQ)
            }
          }
        }
      }(vQ)), mQ), DQ)
    }

    function Bo(QQ) {
      const FQ = Eo(QQ),
        wQ = Po(FQ, QQ);
      if (xQ() && !QQ.isolate) return void wQ.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      wQ.debug("Initializing");
      const LQ = function(QQ, FQ) {
          let wQ, LQ = [],
            qQ = [],
            oQ = [],
            DQ = 0,
            kQ = 0;
          const vQ = () => LQ.reduce(((QQ, FQ) => Object.assign(QQ, sQ(FQ) ? FQ() : FQ)), {}),
            mQ = () => {
              if (qQ.length) {
                const QQ = vQ();
                qQ.forEach((FQ => FQ(QQ)))
              }
            };
          return {
            add: function() {
              for (var QQ = arguments.length, wQ = new Array(QQ), qQ = 0; qQ < QQ; qQ++) wQ[qQ] = arguments[qQ];
              FQ.debug("Adding metas\n", wQ), LQ.push(...wQ), mQ()
            },
            remove: function() {
              for (var QQ = arguments.length, wQ = new Array(QQ), qQ = 0; qQ < QQ; qQ++) wQ[qQ] = arguments[qQ];
              FQ.debug("Removing metas\n", wQ), LQ = LQ.filter((QQ => !wQ.includes(QQ))), mQ()
            },
            addListener: QQ => {
              FQ.debug("Adding metas listener\n", QQ), qQ.push(QQ)
            },
            removeListener: QQ => {
              FQ.debug("Removing metas listener\n", QQ), qQ = qQ.filter((FQ => FQ !== QQ))
            },
            capture: QQ => {
              var FQ;
              const LQ = void 0 !== wQ,
                qQ = null !== (FQ = wQ) && void 0 !== FQ ? FQ : oQ;
              LQ || (wQ = qQ, DQ = 0, kQ = qQ.length);
              try {
                for (; DQ < kQ;) {
                  const QQ = qQ[DQ++];
                  null === QQ || void 0 === QQ || QQ()
                }
                const FQ = zo(vQ());
                return null === QQ || void 0 === QQ || QQ(), FQ
              } finally {
                LQ || (wQ = void 0)
              }
            },
            addCaptureListener: QQ => {
              oQ.push(QQ)
            },
            removeCaptureListener: QQ => {
              oQ = oQ.filter((FQ => FQ !== QQ))
            },
            get value() {
              return vQ()
            }
          }
        }(0, wQ),
        qQ = Vo(FQ, wQ, QQ, LQ),
        oQ = yo(FQ, wQ, QQ, LQ, qQ),
        DQ = function(QQ, FQ, wQ, LQ, qQ, oQ) {
          FQ.debug("Initializing instrumentations");
          const DQ = [];
          return {
            add: function() {
              FQ.debug("Adding instrumentations");
              for (var kQ = arguments.length, vQ = new Array(kQ), mQ = 0; mQ < kQ; mQ++) vQ[mQ] = arguments[mQ];
              vQ.forEach((kQ => {
                FQ.debug(`Adding "${kQ.name}" instrumentation`), DQ.some((QQ => QQ.name === kQ.name)) ? FQ.warn(`Instrumentation ${kQ.name} is already added`) : (kQ.unpatchedConsole = QQ, kQ.internalLogger = FQ, kQ.config = wQ, kQ.metas = LQ, kQ.transports = qQ, kQ.api = oQ, DQ.push(kQ), kQ.initialize())
              }))
            },
            get instrumentations() {
              return [...DQ]
            },
            remove: function() {
              FQ.debug("Removing instrumentations");
              for (var QQ = arguments.length, wQ = new Array(QQ), LQ = 0; LQ < QQ; LQ++) wQ[LQ] = arguments[LQ];
              wQ.forEach((QQ => {
                var wQ, LQ;
                FQ.debug(`Removing "${QQ.name}" instrumentation`);
                const qQ = DQ.reduce(((FQ, wQ, LQ) => null === FQ && wQ.name === QQ.name ? LQ : null), null);
                null !== qQ ? (null === (wQ = (LQ = DQ[qQ]).destroy) || void 0 === wQ || wQ.call(LQ), DQ.splice(qQ, 1)) : FQ.warn(`Instrumentation "${QQ.name}" is not added`)
              }))
            }
          }
        }(FQ, wQ, QQ, LQ, qQ, oQ),
        kQ = tQ(FQ, wQ, QQ, LQ, qQ, oQ, DQ);
      return Xo(kQ),
        function(QQ) {
          QQ.transports.add(...QQ.config.transports), QQ.transports.addBeforeSendHooks(QQ.config.beforeSend)
        }(kQ),
        function(QQ) {
          QQ.instrumentations.add(...QQ.config.instrumentations)
        }(kQ), kQ
    }

    function QD(QQ) {
      const FQ = Io(QQ);
      if (FQ) return Bo(FQ)
    }
  },
  6526: function(QQ, FQ, wQ) {
    var LQ;
    ! function(qQ, oQ) {
      var DQ = "function",
        kQ = "undefined",
        vQ = "object",
        mQ = "string",
        uQ = "major",
        HQ = "model",
        bQ = "name",
        YQ = "type",
        xQ = "vendor",
        AQ = "version",
        tQ = "architecture",
        eQ = "console",
        MQ = "mobile",
        GQ = "tablet",
        pQ = "smarttv",
        cQ = "wearable",
        CQ = "embedded",
        SQ = "Amazon",
        iQ = "Apple",
        WQ = "ASUS",
        RQ = "BlackBerry",
        OQ = "Browser",
        sQ = "Chrome",
        rQ = "Firefox",
        IQ = "Google",
        UQ = "Honor",
        NQ = "Huawei",
        TQ = "LG",
        KQ = "Microsoft",
        zQ = "Motorola",
        lQ = "Nvidia",
        jQ = "OnePlus",
        aQ = "Opera",
        XQ = "OPPO",
        fQ = "Samsung",
        VQ = "Sharp",
        hQ = "Sony",
        JQ = "Xiaomi",
        EQ = "Zebra",
        nQ = "Facebook",
        gQ = "Chromium OS",
        PQ = "Mac OS",
        ZQ = " Browser",
        yQ = function(QQ) {
          for (var FQ = {}, wQ = 0; wQ < QQ.length; wQ++) FQ[QQ[wQ].toUpperCase()] = QQ[wQ];
          return FQ
        },
        BQ = function(QQ, FQ) {
          return typeof QQ === mQ && -1 !== dQ(FQ).indexOf(dQ(QQ))
        },
        dQ = function(QQ) {
          return QQ.toLowerCase()
        },
        QF = function(QQ, FQ) {
          if (typeof QQ === mQ) return QQ = QQ.replace(/^\s\s*/, ""), typeof FQ === kQ ? QQ : QQ.substring(0, 500)
        },
        FF = function(QQ, FQ) {
          for (var wQ, LQ, qQ, kQ, mQ, uQ, HQ = 0; HQ < FQ.length && !mQ;) {
            var bQ = FQ[HQ],
              YQ = FQ[HQ + 1];
            for (wQ = LQ = 0; wQ < bQ.length && !mQ && bQ[wQ];)
              if (mQ = bQ[wQ++].exec(QQ))
                for (qQ = 0; qQ < YQ.length; qQ++) uQ = mQ[++LQ], typeof(kQ = YQ[qQ]) === vQ && kQ.length > 0 ? 2 === kQ.length ? typeof kQ[1] == DQ ? this[kQ[0]] = kQ[1].call(this, uQ) : this[kQ[0]] = kQ[1] : 3 === kQ.length ? typeof kQ[1] !== DQ || kQ[1].exec && kQ[1].test ? this[kQ[0]] = uQ ? uQ.replace(kQ[1], kQ[2]) : oQ : this[kQ[0]] = uQ ? kQ[1].call(this, uQ, kQ[2]) : oQ : 4 === kQ.length && (this[kQ[0]] = uQ ? kQ[3].call(this, uQ.replace(kQ[1], kQ[2])) : oQ) : this[kQ] = uQ || oQ;
            HQ += 2
          }
        },
        wF = function(QQ, FQ) {
          for (var wQ in FQ)
            if (typeof FQ[wQ] === vQ && FQ[wQ].length > 0) {
              for (var LQ = 0; LQ < FQ[wQ].length; LQ++)
                if (BQ(FQ[wQ][LQ], QQ)) return "?" === wQ ? oQ : wQ
            } else if (BQ(FQ[wQ], QQ)) return "?" === wQ ? oQ : wQ;
          return FQ.hasOwnProperty("*") ? FQ["*"] : QQ
        },
        LF = {
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
        qF = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [AQ, [bQ, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [AQ, [bQ, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [bQ, AQ],
            [/opios[\/ ]+([\w\.]+)/i],
            [AQ, [bQ, aQ + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [AQ, [bQ, aQ + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [AQ, [bQ, aQ]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [AQ, [bQ, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [AQ, [bQ, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [bQ, AQ],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [AQ, [bQ, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [AQ, [bQ, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [AQ, [bQ, "UC" + OQ]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [AQ, [bQ, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [AQ, [bQ, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [AQ, [bQ, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [AQ, [bQ, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [AQ, [bQ, "Smart Lenovo " + OQ]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [bQ, /(.+)/, "$1 Secure " + OQ], AQ
            ],
            [/\bfocus\/([\w\.]+)/i],
            [AQ, [bQ, rQ + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [AQ, [bQ, aQ + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [AQ, [bQ, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [AQ, [bQ, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [AQ, [bQ, aQ + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [AQ, [bQ, "MIUI" + ZQ]],
            [/fxios\/([\w\.-]+)/i],
            [AQ, [bQ, rQ]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [AQ, [bQ, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [bQ, /(.+)/, "$1Browser"], AQ
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [bQ, /(.+)/, "$1" + ZQ], AQ
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [AQ, [bQ, fQ + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [AQ, [bQ, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [bQ, "Sogou Mobile"], AQ
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [bQ, AQ],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [bQ],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [AQ, bQ],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [bQ, nQ], AQ
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [bQ, AQ],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [AQ, [bQ, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [AQ, [bQ, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [AQ, [bQ, sQ + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [bQ, sQ + " WebView"], AQ
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [AQ, [bQ, "Android " + OQ]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [bQ, AQ],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [AQ, [bQ, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [AQ, bQ],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [bQ, [AQ, wF, {
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
            [bQ, AQ],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [bQ, "Netscape"], AQ
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [bQ, AQ],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [AQ, [bQ, rQ + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [bQ, [AQ, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [bQ, [AQ, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [tQ, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [tQ, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [tQ, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [tQ, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [tQ, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [tQ, /ower/, "", dQ]
            ],
            [/ sun4\w[;\)]/i],
            [
              [tQ, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [tQ, dQ]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [HQ, [xQ, fQ],
              [YQ, GQ]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [HQ, [xQ, fQ],
              [YQ, MQ]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [HQ, [xQ, iQ],
              [YQ, MQ]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [HQ, [xQ, iQ],
              [YQ, GQ]
            ],
            [/(macintosh);/i],
            [HQ, [xQ, iQ]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [HQ, [xQ, VQ],
              [YQ, MQ]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [HQ, [xQ, UQ],
              [YQ, GQ]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [HQ, [xQ, UQ],
              [YQ, MQ]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [HQ, [xQ, NQ],
              [YQ, GQ]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [HQ, [xQ, NQ],
              [YQ, MQ]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [HQ, /_/g, " "],
              [xQ, JQ],
              [YQ, GQ]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [HQ, /_/g, " "],
              [xQ, JQ],
              [YQ, MQ]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [HQ, [xQ, XQ],
              [YQ, MQ]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [HQ, [xQ, wF, {
                OnePlus: ["304", "403", "203"],
                "*": XQ
              }],
              [YQ, GQ]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [HQ, [xQ, "Vivo"],
              [YQ, MQ]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [HQ, [xQ, "Realme"],
              [YQ, MQ]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [HQ, [xQ, zQ],
              [YQ, MQ]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [HQ, [xQ, zQ],
              [YQ, GQ]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [HQ, [xQ, TQ],
              [YQ, GQ]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [HQ, [xQ, TQ],
              [YQ, MQ]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [HQ, [xQ, "Lenovo"],
              [YQ, GQ]
            ],
            [/(nokia) (t[12][01])/i],
            [xQ, HQ, [YQ, GQ]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [HQ, /_/g, " "],
              [YQ, MQ],
              [xQ, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [HQ, [xQ, IQ],
              [YQ, GQ]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [HQ, [xQ, IQ],
              [YQ, MQ]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [HQ, [xQ, hQ],
              [YQ, MQ]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [HQ, "Xperia Tablet"],
              [xQ, hQ],
              [YQ, GQ]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [HQ, [xQ, jQ],
              [YQ, MQ]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [HQ, [xQ, SQ],
              [YQ, GQ]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [HQ, /(.+)/g, "Fire Phone $1"],
              [xQ, SQ],
              [YQ, MQ]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [HQ, xQ, [YQ, GQ]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [HQ, [xQ, RQ],
              [YQ, MQ]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [HQ, [xQ, WQ],
              [YQ, GQ]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [HQ, [xQ, WQ],
              [YQ, MQ]
            ],
            [/(nexus 9)/i],
            [HQ, [xQ, "HTC"],
              [YQ, GQ]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [xQ, [HQ, /_/g, " "],
              [YQ, MQ]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [HQ, [xQ, "TCL"],
              [YQ, GQ]
            ],
            [/(itel) ((\w+))/i],
            [
              [xQ, dQ], HQ, [YQ, wF, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [HQ, [xQ, "Acer"],
              [YQ, GQ]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [HQ, [xQ, "Meizu"],
              [YQ, MQ]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [HQ, [xQ, "Ulefone"],
              [YQ, MQ]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [HQ, [xQ, "Energizer"],
              [YQ, MQ]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [HQ, [xQ, "Cat"],
              [YQ, MQ]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [HQ, [xQ, "Smartfren"],
              [YQ, MQ]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [HQ, [xQ, "Nothing"],
              [YQ, MQ]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [HQ, [xQ, "Archos"],
              [YQ, GQ]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [HQ, [xQ, "Archos"],
              [YQ, MQ]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [xQ, HQ, [YQ, GQ]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [xQ, HQ, [YQ, MQ]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [xQ, HQ, [YQ, GQ]],
            [/(surface duo)/i],
            [HQ, [xQ, KQ],
              [YQ, GQ]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [HQ, [xQ, "Fairphone"],
              [YQ, MQ]
            ],
            [/(u304aa)/i],
            [HQ, [xQ, "AT&T"],
              [YQ, MQ]
            ],
            [/\bsie-(\w*)/i],
            [HQ, [xQ, "Siemens"],
              [YQ, MQ]
            ],
            [/\b(rct\w+) b/i],
            [HQ, [xQ, "RCA"],
              [YQ, GQ]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [HQ, [xQ, "Dell"],
              [YQ, GQ]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [HQ, [xQ, "Verizon"],
              [YQ, GQ]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [HQ, [xQ, "Barnes & Noble"],
              [YQ, GQ]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [HQ, [xQ, "NuVision"],
              [YQ, GQ]
            ],
            [/\b(k88) b/i],
            [HQ, [xQ, "ZTE"],
              [YQ, GQ]
            ],
            [/\b(nx\d{3}j) b/i],
            [HQ, [xQ, "ZTE"],
              [YQ, MQ]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [HQ, [xQ, "Swiss"],
              [YQ, MQ]
            ],
            [/\b(zur\d{3}) b/i],
            [HQ, [xQ, "Swiss"],
              [YQ, GQ]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [HQ, [xQ, "Zeki"],
              [YQ, GQ]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [xQ, "Dragon Touch"], HQ, [YQ, GQ]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [HQ, [xQ, "Insignia"],
              [YQ, GQ]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [HQ, [xQ, "NextBook"],
              [YQ, GQ]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [xQ, "Voice"], HQ, [YQ, MQ]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [xQ, "LvTel"], HQ, [YQ, MQ]
            ],
            [/\b(ph-1) /i],
            [HQ, [xQ, "Essential"],
              [YQ, MQ]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [HQ, [xQ, "Envizen"],
              [YQ, GQ]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [HQ, [xQ, "MachSpeed"],
              [YQ, GQ]
            ],
            [/\btu_(1491) b/i],
            [HQ, [xQ, "Rotor"],
              [YQ, GQ]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [HQ, [xQ, lQ],
              [YQ, GQ]
            ],
            [/(sprint) (\w+)/i],
            [xQ, HQ, [YQ, MQ]],
            [/(kin\.[onetw]{3})/i],
            [
              [HQ, /\./g, " "],
              [xQ, KQ],
              [YQ, MQ]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [HQ, [xQ, EQ],
              [YQ, GQ]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [HQ, [xQ, EQ],
              [YQ, MQ]
            ],
            [/smart-tv.+(samsung)/i],
            [xQ, [YQ, pQ]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [HQ, /^/, "SmartTV"],
              [xQ, fQ],
              [YQ, pQ]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [xQ, TQ],
              [YQ, pQ]
            ],
            [/(apple) ?tv/i],
            [xQ, [HQ, iQ + " TV"],
              [YQ, pQ]
            ],
            [/crkey/i],
            [
              [HQ, sQ + "cast"],
              [xQ, IQ],
              [YQ, pQ]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [HQ, [xQ, SQ],
              [YQ, pQ]
            ],
            [/(shield \w+ tv)/i],
            [HQ, [xQ, lQ],
              [YQ, pQ]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [HQ, [xQ, VQ],
              [YQ, pQ]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [HQ, [xQ, hQ],
              [YQ, pQ]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [HQ, [xQ, JQ],
              [YQ, pQ]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [xQ, HQ, [YQ, pQ]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [xQ, QF],
              [HQ, QF],
              [YQ, pQ]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [HQ, [YQ, pQ]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [YQ, pQ]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [xQ, HQ, [YQ, eQ]],
            [/droid.+; (shield)( bui|\))/i],
            [HQ, [xQ, lQ],
              [YQ, eQ]
            ],
            [/(playstation \w+)/i],
            [HQ, [xQ, hQ],
              [YQ, eQ]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [HQ, [xQ, KQ],
              [YQ, eQ]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [HQ, [xQ, fQ],
              [YQ, cQ]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [xQ, HQ, [YQ, cQ]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [HQ, [xQ, XQ],
              [YQ, cQ]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [HQ, [xQ, iQ],
              [YQ, cQ]
            ],
            [/(opwwe\d{3})/i],
            [HQ, [xQ, jQ],
              [YQ, cQ]
            ],
            [/(moto 360)/i],
            [HQ, [xQ, zQ],
              [YQ, cQ]
            ],
            [/(smartwatch 3)/i],
            [HQ, [xQ, hQ],
              [YQ, cQ]
            ],
            [/(g watch r)/i],
            [HQ, [xQ, TQ],
              [YQ, cQ]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [HQ, [xQ, EQ],
              [YQ, cQ]
            ],
            [/droid.+; (glass) \d/i],
            [HQ, [xQ, IQ],
              [YQ, cQ]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [xQ, HQ, [YQ, cQ]],
            [/; (quest( \d| pro)?)/i],
            [HQ, [xQ, nQ],
              [YQ, cQ]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [xQ, [YQ, CQ]],
            [/(aeobc)\b/i],
            [HQ, [xQ, SQ],
              [YQ, CQ]
            ],
            [/(homepod).+mac os/i],
            [HQ, [xQ, iQ],
              [YQ, CQ]
            ],
            [/windows iot/i],
            [
              [YQ, CQ]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [HQ, [YQ, MQ]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [HQ, [YQ, GQ]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [YQ, GQ]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [YQ, MQ]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [HQ, [xQ, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [AQ, [bQ, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [bQ, AQ],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [AQ, [bQ, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [bQ, AQ],
            [/ladybird\//i],
            [
              [bQ, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [AQ, bQ]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [bQ, AQ],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [bQ, [AQ, wF, LF]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [AQ, wF, LF],
              [bQ, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [AQ, /_/g, "."],
              [bQ, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [bQ, PQ],
              [AQ, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [AQ, bQ],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [bQ, /(.+)/, "$1 Touch"], AQ
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [bQ, AQ],
            [/\(bb(10);/i],
            [AQ, [bQ, RQ]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [AQ, [bQ, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [AQ, [bQ, rQ + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [AQ, [bQ, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [AQ, [bQ, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [AQ, [bQ, sQ + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [bQ, gQ], AQ
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [bQ, AQ],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [bQ, "Solaris"], AQ
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [bQ, AQ]
          ]
        },
        oF = function(QQ, FQ) {
          if (typeof QQ === vQ && (FQ = QQ, QQ = oQ), !(this instanceof oF)) return new oF(QQ, FQ).getResult();
          var wQ = typeof qQ !== kQ && qQ.navigator ? qQ.navigator : oQ,
            LQ = QQ || (wQ && wQ.userAgent ? wQ.userAgent : ""),
            eQ = wQ && wQ.userAgentData ? wQ.userAgentData : oQ,
            pQ = FQ ? function(QQ, FQ) {
              var wQ = {};
              for (var LQ in QQ) FQ[LQ] && FQ[LQ].length % 2 === 0 ? wQ[LQ] = FQ[LQ].concat(QQ[LQ]) : wQ[LQ] = QQ[LQ];
              return wQ
            }(qF, FQ) : qF,
            cQ = wQ && wQ.userAgent == LQ;
          return this.getBrowser = function() {
            var QQ, FQ = {};
            return FQ[bQ] = oQ, FQ[AQ] = oQ, FF.call(FQ, LQ, pQ.browser), FQ[uQ] = typeof(QQ = FQ[AQ]) === mQ ? QQ.replace(/[^\d\.]/g, "").split(".")[0] : oQ, cQ && wQ && wQ.brave && typeof wQ.brave.isBrave == DQ && (FQ[bQ] = "Brave"), FQ
          }, this.getCPU = function() {
            var QQ = {};
            return QQ[tQ] = oQ, FF.call(QQ, LQ, pQ.cpu), QQ
          }, this.getDevice = function() {
            var QQ = {};
            return QQ[xQ] = oQ, QQ[HQ] = oQ, QQ[YQ] = oQ, FF.call(QQ, LQ, pQ.device), cQ && !QQ[YQ] && eQ && eQ.mobile && (QQ[YQ] = MQ), cQ && "Macintosh" == QQ[HQ] && wQ && typeof wQ.standalone !== kQ && wQ.maxTouchPoints && wQ.maxTouchPoints > 2 && (QQ[HQ] = "iPad", QQ[YQ] = GQ), QQ
          }, this.Wx = function() {
            var QQ = {};
            return QQ[bQ] = oQ, QQ[AQ] = oQ, FF.call(QQ, LQ, pQ.engine), QQ
          }, this.getOS = function() {
            var QQ = {};
            return QQ[bQ] = oQ, QQ[AQ] = oQ, FF.call(QQ, LQ, pQ.os), cQ && !QQ[bQ] && eQ && eQ.platform && "Unknown" != eQ.platform && (QQ[bQ] = eQ.platform.replace(/chrome os/i, gQ).replace(/macos/i, PQ)), QQ
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Wx(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return LQ
          }, this.setUA = function(QQ) {
            return LQ = typeof QQ === mQ && QQ.length > 500 ? QF(QQ, 500) : QQ, this
          }, this.setUA(LQ), this
        };
      oF.VERSION = "1.0.41", oF.BROWSER = yQ([bQ, AQ, uQ]), oF.CPU = yQ([tQ]), oF.DEVICE = yQ([HQ, xQ, YQ, eQ, MQ, pQ, GQ, cQ, CQ]), oF.ENGINE = oF.OS = yQ([bQ, AQ]), typeof FQ !== kQ ? (QQ.exports && (FQ = QQ.exports = oF), FQ.UAParser = oF) : wQ.amdO ? (LQ = function() {
        return oF
      }.call(FQ, wQ, FQ, QQ)) === oQ || (QQ.exports = LQ) : typeof qQ !== kQ && (qQ.UAParser = oF);
      var DF = typeof qQ !== kQ && (qQ.jQuery || qQ.Zepto);
      if (DF && !DF.ua) {
        var kF = new oF;
        DF.ua = kF.getResult(), DF.ua.get = function() {
          return kF.getUA()
        }, DF.ua.set = function(QQ) {
          kF.setUA(QQ);
          var FQ = kF.getResult();
          for (var wQ in FQ) DF.ua[wQ] = FQ[wQ]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);