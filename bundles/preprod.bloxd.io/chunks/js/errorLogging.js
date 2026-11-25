export const id = 32;
export const ids = [32];
export const modules = {
  7049: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BaseExtension: () => QX,
      BaseInstrumentation: () => WX,
      BaseTransport: () => mq,
      CSPInstrumentation: () => Hq,
      ConsoleInstrumentation: () => AX,
      ConsoleTransport: () => wT,
      EVENT_CLICK: () => pW,
      EVENT_NAVIGATION: () => GW,
      EVENT_ROUTE_CHANGE: () => aW,
      EVENT_SESSION_EXTEND: () => dW,
      EVENT_SESSION_RESUME: () => vW,
      EVENT_SESSION_START: () => bW,
      EVENT_VIEW_CHANGED: () => UW,
      ErrorsInstrumentation: () => EX,
      FetchTransport: () => UT,
      InternalLoggerLevel: () => nW,
      LogLevel: () => pX,
      MAX_SESSION_PERSISTENCE_TIME: () => FQ,
      NavigationInstrumentation: () => tq,
      Observable: () => DX,
      PerformanceInstrumentation: () => Nw,
      PersistentSessionsManager: () => LW,
      SESSION_EXPIRATION_TIME: () => TQ,
      SESSION_INACTIVITY_TIME: () => zQ,
      STORAGE_KEY: () => qQ,
      SessionInstrumentation: () => wX,
      TransportItemType: () => Mq,
      UserActionInstrumentation: () => dq,
      UserActionState: () => Bq,
      VERSION: () => XX,
      ViewInstrumentation: () => uX,
      VolatileSessionsManager: () => kW,
      WebVitalsInstrumentation: () => Ew,
      allLogLevels: () => UX,
      browserMeta: () => Nq,
      buildStackFrame: () => qX,
      captureMetas: () => LT,
      createInternalLogger: () => aT,
      createPromiseBuffer: () => IT,
      createSession: () => Oq,
      deepEqual: () => DW,
      defaultEventDomain: () => wQ,
      defaultExceptionType: () => HX,
      defaultGlobalObjectKey: () => lT,
      defaultInternalLoggerLevel: () => YW,
      defaultLogLevel: () => GX,
      faro: () => BQ,
      genShortID: () => VW,
      getCurrentTimestamp: () => jW,
      getDataFromSafariExtensions: () => rX,
      getIgnoreUrls: () => NQ,
      getInternalFaroFromGlobalObject: () => rQ,
      getStackFramesFromError: () => jX,
      getTransportBody: () => XT,
      getUrlFromResource: () => OQ,
      getWebInstrumentations: () => oq,
      globalObject: () => gQ,
      initializeFaro: () => mT,
      internalGlobalObjectKey: () => JQ,
      isArray: () => iQ,
      isBoolean: () => HQ,
      isDomError: () => fQ,
      isDomException: () => SQ,
      isElement: () => oQ,
      isElementDefined: () => tQ,
      mI: () => YQ,
      isError: () => LQ,
      isErrorDefined: () => uQ,
      isErrorEvent: () => kQ,
      isEvent: () => CQ,
      isEventDefined: () => EQ,
      isFunction: () => hQ,
      isInstanceOf: () => pQ,
      isInt: () => dQ,
      isInternalFaroOnGlobalObject: () => jQ,
      isMap: () => nQ,
      isMapDefined: () => eQ,
      isNull: () => UQ,
      isNumber: () => vQ,
      isObject: () => lQ,
      isPrimitive: () => RQ,
      isRegExp: () => cQ,
      isString: () => bQ,
      isSymbol: () => aQ,
      isSyntheticEvent: () => xQ,
      isThenable: () => AQ,
      isToString: () => DQ,
      isTypeof: () => VQ,
      isUndefined: () => GQ,
      makeCoreConfig: () => cT,
      noop: () => eW,
      osMeta: () => Zq,
      parseStacktrace: () => BX,
      sdkMeta: () => Kq,
      setInternalFaroOnGlobalObject: () => IQ,
      transportItemTypeToBodyKey: () => QT,
      unknownString: () => CX,
      userActionDataAttribute: () => Zw,
      userActionTimeoutDataAttribute: () => Ow
    });
    const wQ = "browser",
      qQ = "com.grafana.faro.session",
      TQ = 144e5,
      zQ = 9e5,
      sQ = 1e3,
      FQ = zQ,
      PQ = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: FQ
      };
    const gQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof XQ.g ? XQ.g : "undefined" !== typeof self ? self : void 0;
    const JQ = "_faroInternal";

    function rQ() {
      return gQ[JQ]
    }

    function IQ(QQ) {
      QQ.config.isolate ? QQ.internalLogger.debug("Skipping registering internal Faro instance on global object") : (QQ.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(gQ, JQ, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: QQ
      }))
    }

    function jQ() {
      return JQ in gQ
    }
    let BQ = {
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

    function yQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      return WQ.debug("Initializing Faro"), BQ = {
          api: TQ,
          config: XQ,
          instrumentations: zQ,
          internalLogger: WQ,
          metas: wQ,
          pause: qQ.pause,
          transports: qQ,
          unpatchedConsole: QQ,
          unpause: qQ.unpause
        }, IQ(BQ),
        function(QQ) {
          if (QQ.config.preventGlobalExposure) QQ.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (QQ.internalLogger.debug(`Registering public faro reference in the global scope using "${QQ.config.globalObjectKey}" key`), QQ.config.globalObjectKey in gQ) return void QQ.internalLogger.warn(`Skipping global registration due to key "${QQ.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(gQ, QQ.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: QQ
            })
          }
        }(BQ), BQ
    }

    function VQ(QQ, WQ) {
      return typeof QQ === WQ
    }

    function DQ(QQ, WQ) {
      return Object.prototype.toString.call(QQ) === `[object ${WQ}]`
    }

    function pQ(QQ, WQ) {
      try {
        return QQ instanceof WQ
      } catch (XQ) {
        return !1
      }
    }
    const GQ = QQ => VQ(QQ, "undefined"),
      UQ = QQ => VQ(QQ, "null"),
      bQ = QQ => VQ(QQ, "string"),
      vQ = QQ => VQ(QQ, "number") && !isNaN(QQ) || VQ(QQ, "bigint"),
      dQ = QQ => vQ(QQ) && Number.isInteger(QQ),
      HQ = QQ => VQ(QQ, "boolean"),
      aQ = QQ => VQ(QQ, "symbol"),
      lQ = QQ => !UQ(QQ) && VQ(QQ, "object"),
      hQ = QQ => VQ(QQ, "function"),
      iQ = QQ => DQ(QQ, "Array"),
      cQ = QQ => DQ(QQ, "RegExp"),
      AQ = QQ => hQ(null === QQ || void 0 === QQ ? void 0 : QQ.then),
      RQ = QQ => !lQ(QQ) && !hQ(QQ),
      EQ = "undefined" !== typeof Event,
      CQ = QQ => EQ && pQ(QQ, Event),
      uQ = "undefined" !== typeof Error,
      LQ = QQ => uQ && pQ(QQ, Error),
      kQ = QQ => DQ(QQ, "ErrorEvent"),
      fQ = QQ => DQ(QQ, "DOMError"),
      SQ = QQ => DQ(QQ, "DOMException"),
      tQ = "undefined" !== typeof Element,
      oQ = QQ => tQ && pQ(QQ, Element),
      eQ = "undefined" !== typeof Map,
      nQ = QQ => eQ && pQ(QQ, Map),
      xQ = QQ => lQ(QQ) && "nativeEvent" in QQ && "preventDefault" in QQ && "stopPropagation" in QQ;

    function YQ(QQ) {
      return null == QQ || (iQ(QQ) || bQ(QQ) ? 0 === QQ.length : !!lQ(QQ) && 0 === Object.keys(QQ).length)
    }

    function NQ() {
      return BQ.transports.transports.flatMap((QQ => QQ.getIgnoreUrls()))
    }

    function ZQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return NQ().some((WQ => QQ && null != QQ.match(WQ)))
    }

    function OQ(QQ) {
      return bQ(QQ) ? QQ : QQ instanceof URL ? QQ.href : !YQ(QQ) && hQ(null === QQ || void 0 === QQ ? void 0 : QQ.toString) ? QQ.toString() : void 0
    }
    const KQ = "sessionStorage",
      mQ = "localStorage";

    function MQ(QQ) {
      try {
        let WQ;
        WQ = window[QQ];
        const XQ = "__faro_storage_test__";
        return WQ.setItem(XQ, XQ), WQ.removeItem(XQ), !0
      } catch (XQ) {
        var WQ;
        return null === (WQ = BQ.internalLogger) || void 0 === WQ || WQ.info(`Web storage of type ${QQ} is not available. Reason: ${XQ}`), !1
      }
    }

    function QW(QQ, WQ) {
      return TW(WQ) ? window[WQ].getItem(QQ) : null
    }

    function WW(QQ, WQ, XQ) {
      if (TW(XQ)) try {
        window[XQ].setItem(QQ, WQ)
      } catch (wQ) {}
    }

    function XW(QQ, WQ) {
      TW(WQ) && window[WQ].removeItem(QQ)
    }
    const wW = MQ(mQ),
      qW = MQ(KQ);

    function TW(QQ) {
      return QQ === mQ ? wW : QQ === KQ && qW
    }

    function zW(QQ) {
      return zW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, zW(QQ)
    }

    function sW(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != zW(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != zW(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == zW(WQ) ? WQ : WQ + ""
    }

    function FW(QQ, WQ, XQ) {
      return (WQ = sW(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function PW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function gW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? PW(Object(XQ), !0).forEach((function(WQ) {
          FW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : PW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function JW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BQ;
      var WQ, XQ, wQ;
      const qQ = QQ.config.sessionTracking,
        TQ = null !== (WQ = null !== (XQ = null === qQ || void 0 === qQ || null === (wQ = qQ.sampler) || void 0 === wQ ? void 0 : wQ.call(qQ, {
          metas: QQ.metas.value
        })) && void 0 !== XQ ? XQ : null === qQ || void 0 === qQ ? void 0 : qQ.samplingRate) && void 0 !== WQ ? WQ : 1,
        zQ = "number" === typeof TQ ? function(QQ) {
          return Math.min(1, Math.max(0, QQ))
        }(TQ) : 0;
      if (!(zQ > 0)) return !1;
      if (1 === zQ) return !0;
      try {
        const QQ = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.getRandomValues)) {
          const WQ = new Uint32Array(1);
          return QQ.getRandomValues(WQ), WQ[0] / Math.pow(2, 32) < zQ
        }
      } catch (sQ) {}
      return Math.random() < zQ
    }

    function rW() {
      return Date.now()
    }

    function IW() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function jW() {
      return (new Date).toISOString()
    }

    function BW(QQ) {
      return new Date(QQ).toISOString()
    }
    const yW = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function VW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const WQ = new Uint32Array(QQ),
        XQ = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === XQ || void 0 === XQ ? void 0 : XQ.getRandomValues) XQ.getRandomValues(WQ);
      else
        for (let qQ = 0; qQ < QQ; qQ++) WQ[qQ] = Math.floor(4294967296 * Math.random());
      let wQ = "";
      for (let qQ = 0; qQ < QQ; qQ++) wQ += yW[WQ[qQ] % 59];
      return wQ
    }

    function DW(QQ, WQ) {
      if (QQ === WQ) return !0;
      if (VQ(QQ, "number") && isNaN(QQ)) return VQ(WQ, "number") && isNaN(WQ);
      const XQ = iQ(QQ),
        wQ = iQ(WQ);
      if (XQ !== wQ) return !1;
      if (XQ && wQ) {
        const XQ = QQ.length;
        if (XQ !== WQ.length) return !1;
        for (let wQ = XQ; 0 !== wQ--;)
          if (!DW(QQ[wQ], WQ[wQ])) return !1;
        return !0
      }
      const qQ = lQ(QQ),
        TQ = lQ(WQ);
      if (qQ !== TQ) return !1;
      if (QQ && WQ && qQ && TQ) {
        const XQ = Object.keys(QQ),
          wQ = Object.keys(WQ);
        if (XQ.length !== wQ.length) return !1;
        for (let QQ of XQ)
          if (!wQ.includes(QQ)) return !1;
        for (let qQ of XQ)
          if (!DW(QQ[qQ], WQ[qQ])) return !1;
        return !0
      }
      return !1
    }
    const pW = "click",
      GW = "navigation",
      UW = "view_changed",
      bW = "session_start",
      vW = "session_resume",
      dW = "session_extend",
      HW = "service_name_override",
      aW = "route_change";

    function lW() {
      let {
        sessionId: QQ,
        started: WQ,
        lastActivity: XQ,
        isSampled: wQ = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, qQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BQ;
      var TQ;
      const zQ = rW(),
        sQ = null === (TQ = qQ.config) || void 0 === TQ || null === (TQ = TQ.sessionTracking) || void 0 === TQ ? void 0 : TQ.generateSessionId;
      return null == QQ && (QQ = "function" === typeof sQ ? sQ() : VW()), {
        sessionId: QQ,
        lastActivity: null !== XQ && void 0 !== XQ ? XQ : zQ,
        started: null !== WQ && void 0 !== WQ ? WQ : zQ,
        isSampled: wQ
      }
    }

    function hW(QQ) {
      if (null == QQ) return !1;
      const WQ = rW();
      return WQ - QQ.started < 144e5 && WQ - QQ.lastActivity < zQ
    }

    function iW(QQ) {
      let {
        fetchUserSession: WQ,
        storeUserSession: XQ,
        adoptSession: wQ,
        updateInterval: qQ = 0
      } = QQ, sQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BQ, FQ = 0;
      return function() {
        let {
          forceSessionExtend: QQ = !1,
          refreshActivity: PQ = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var gQ, JQ;
        if (!WQ || !XQ) return;
        const rQ = rW();
        if (!QQ && rQ < FQ && FQ - rQ <= qQ) return;
        const IQ = sQ.config.sessionTracking,
          jQ = null === IQ || void 0 === IQ ? void 0 : IQ.persistent;
        if (jQ && !wW || !jQ && !qW) return;
        const BQ = WQ();
        if (FQ = Math.min(rQ + qQ, (null !== (gQ = null === BQ || void 0 === BQ ? void 0 : BQ.started) && void 0 !== gQ ? gQ : rQ) + TQ, (null !== (JQ = null === BQ || void 0 === BQ ? void 0 : BQ.lastActivity) && void 0 !== JQ ? JQ : rQ) + zQ), !1 === QQ && hW(BQ)) {
          var yQ;
          PQ && XQ(gW(gW({}, BQ), {}, {
            lastActivity: rQ
          }));
          const QQ = null === (yQ = sQ.metas.value.session) || void 0 === yQ ? void 0 : yQ.id;
          null != wQ && null != BQ.sessionMeta && BQ.sessionId !== QQ && wQ(BQ.sessionMeta)
        } else {
          var VQ, DQ, pQ;
          let QQ = AW(lW({
            isSampled: JW(sQ)
          }, sQ), BQ, sQ);
          FQ = rQ + qQ, XQ(QQ), null === (VQ = sQ.api) || void 0 === VQ || VQ.setSession(QQ.sessionMeta), null === IQ || void 0 === IQ || null === (DQ = IQ.onSessionChange) || void 0 === DQ || DQ.call(IQ, null !== (pQ = null === BQ || void 0 === BQ ? void 0 : BQ.sessionMeta) && void 0 !== pQ ? pQ : null, QQ.sessionMeta)
        }
      }
    }

    function cW(QQ) {
      let WQ, {
          fetchUserSession: XQ,
          storeUserSession: wQ,
          updateInterval: qQ = 0
        } = QQ,
        TQ = 0;
      return QQ => {
        const zQ = rW();
        if (QQ === WQ && zQ < TQ && TQ - zQ <= qQ) return;
        WQ = QQ, TQ = zQ + qQ;
        const sQ = XQ();
        (null === sQ || void 0 === sQ ? void 0 : sQ.sessionId) === QQ && hW(sQ) && wQ(gW(gW({}, sQ), {}, {
          lastActivity: zQ
        }))
      }
    }

    function AW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BQ;
      var wQ, qQ, TQ, zQ, sQ, FQ;
      const PQ = gW(gW({}, QQ), {}, {
          sessionMeta: {
            id: QQ.sessionId,
            attributes: EW(gW(gW(gW({}, null === (wQ = XQ.config.sessionTracking) || void 0 === wQ || null === (wQ = wQ.session) || void 0 === wQ ? void 0 : wQ.attributes), null !== (qQ = null === (TQ = XQ.metas.value.session) || void 0 === TQ ? void 0 : TQ.attributes) && void 0 !== qQ ? qQ : {}), {}, {
              isSampled: QQ.isSampled.toString()
            }))
          }
        }),
        gQ = null !== (zQ = null === (sQ = XQ.metas.value.session) || void 0 === sQ ? void 0 : sQ.overrides) && void 0 !== zQ ? zQ : null === WQ || void 0 === WQ || null === (FQ = WQ.sessionMeta) || void 0 === FQ ? void 0 : FQ.overrides;
      YQ(gQ) || (PQ.sessionMeta.overrides = gQ);
      const JQ = null === WQ || void 0 === WQ ? void 0 : WQ.sessionId;
      return null != JQ && (PQ.sessionMeta.attributes.previousSession = JQ), PQ
    }

    function RW(QQ) {
      let {
        fetchUserSession: WQ,
        storeUserSession: XQ
      } = QQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BQ, qQ = !1;
      return function(QQ) {
        if (qQ) return;
        const TQ = QQ.session,
          zQ = WQ();
        let sQ = null === TQ || void 0 === TQ ? void 0 : TQ.id;
        const FQ = null === TQ || void 0 === TQ ? void 0 : TQ.attributes,
          PQ = null === TQ || void 0 === TQ ? void 0 : TQ.overrides,
          gQ = null === zQ || void 0 === zQ ? void 0 : zQ.sessionMeta,
          JQ = null === gQ || void 0 === gQ ? void 0 : gQ.overrides,
          rQ = !!PQ && !DW(PQ, JQ),
          IQ = !!FQ && !DW(FQ, null === gQ || void 0 === gQ ? void 0 : gQ.attributes);
        if (TQ && sQ !== (null === zQ || void 0 === zQ ? void 0 : zQ.sessionId) || IQ || rQ) {
          var jQ, BQ;
          const QQ = null != zQ && sQ === zQ.sessionId,
            WQ = AW(QQ ? zQ : lW({
              sessionId: sQ,
              isSampled: JW(wQ)
            }, wQ), zQ, wQ),
            TQ = null === zQ || void 0 === zQ || null === (jQ = zQ.sessionMeta) || void 0 === jQ || null === (jQ = jQ.attributes) || void 0 === jQ ? void 0 : jQ.previousSession;
          QQ && null != TQ && TQ !== WQ.sessionId && (WQ.sessionMeta.attributes.previousSession = TQ), (null === (BQ = WQ.sessionMeta.attributes) || void 0 === BQ ? void 0 : BQ.previousSession) === WQ.sessionId && delete WQ.sessionMeta.attributes.previousSession, XQ(WQ),
            function(QQ, WQ) {
              let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var qQ, TQ, zQ;
              if (!WQ) return;
              const sQ = XQ.serviceName,
                FQ = null !== (qQ = null !== (TQ = wQ.serviceName) && void 0 !== TQ ? TQ : null === (zQ = QQ.metas.value.app) || void 0 === zQ ? void 0 : zQ.name) && void 0 !== qQ ? qQ : "";
              sQ && sQ !== FQ && QQ.api.pushEvent(HW, {
                serviceName: sQ,
                previousServiceName: FQ
              })
            }(wQ, rQ, PQ, JQ), qQ = !0;
          try {
            wQ.api.setSession(WQ.sessionMeta)
          } finally {
            qQ = !1
          }
        }
      }
    }

    function EW(QQ) {
      const WQ = {};
      for (const XQ of Object.keys(QQ)) {
        const wQ = QQ[XQ];
        void 0 !== wQ && (WQ[XQ] = wQ)
      }
      return WQ
    }

    function CW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== QQ && void 0 !== QQ ? QQ : {}, function() {
        const QQ = new WeakSet;
        return function(WQ, XQ) {
          if (lQ(XQ) && null !== XQ) {
            if (QQ.has(XQ)) return null;
            QQ.add(XQ)
          }
          return XQ
        }
      }())
    }

    function uW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const WQ = {};
      for (const [XQ, wQ] of Object.entries(QQ)) WQ[XQ] = lQ(wQ) && null !== wQ ? CW(wQ) : String(wQ);
      return WQ
    }
    var LW = class QQ {
      constructor() {
        var WQ = this;
        let XQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BQ;
        this.context = XQ, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = QQ => {
          this.adopting = !0;
          try {
            var WQ;
            null === (WQ = this.context.api) || void 0 === WQ || WQ.setSession(QQ)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: QQ = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return WQ.updateUserSession({
            refreshActivity: QQ
          })
        }, this.recordActivity = cW({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          updateInterval: sQ
        }), this.updateUserSession = iW({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: sQ
        }, XQ), this.init()
      }
      static removeUserSession() {
        XW(qQ, QQ.storageTypeLocal)
      }
      static storeUserSession(WQ) {
        WW(qQ, CW(WQ), QQ.storageTypeLocal)
      }
      static fetchUserSession() {
        const WQ = QW(qQ, QQ.storageTypeLocal);
        return WQ ? JSON.parse(WQ) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var QQ;
            this.updateSession({
              refreshActivity: !1
            });
            const WQ = null === (QQ = this.context.api) || void 0 === QQ || null === (QQ = QQ.getSession()) || void 0 === QQ ? void 0 : QQ.id;
            WQ && this.recordActivity(WQ)
          }
        })), this.context.metas.addListener(RW({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession
        }, this.context))
      }
    };
    LW.storageTypeLocal = mQ;
    var kW = class QQ {
      constructor() {
        var WQ = this;
        let XQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BQ;
        this.context = XQ, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: QQ = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return WQ.updateUserSession({
            refreshActivity: QQ
          })
        }, this.recordActivity = cW({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          updateInterval: sQ
        }), this.updateUserSession = iW({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession,
          updateInterval: sQ
        }, XQ), this.init()
      }
      static removeUserSession() {
        XW(qQ, QQ.storageTypeSession)
      }
      static storeUserSession(WQ) {
        WW(qQ, CW(WQ), QQ.storageTypeSession)
      }
      static fetchUserSession() {
        const WQ = QW(qQ, QQ.storageTypeSession);
        return WQ ? JSON.parse(WQ) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var QQ;
            this.updateSession({
              refreshActivity: !1
            });
            const WQ = null === (QQ = this.context.api) || void 0 === QQ || null === (QQ = QQ.getSession()) || void 0 === QQ ? void 0 : QQ.id;
            WQ && this.recordActivity(WQ)
          }
        })), this.context.metas.addListener(RW({
          fetchUserSession: QQ.fetchUserSession,
          storeUserSession: QQ.storeUserSession
        }, this.context))
      }
    };
    kW.storageTypeSession = KQ;
    const fW = new WeakMap;

    function SW(QQ) {
      let WQ = fW.get(QQ);
      if (!WQ) {
        let XQ = [],
          wQ = [];
        WQ = {
          addSessionUpdateListener: QQ => {
            XQ.push(QQ)
          },
          removeSessionUpdateListener: QQ => {
            XQ = XQ.filter((WQ => WQ !== QQ))
          },
          notifySessionUpdate: QQ => {
            XQ.forEach((WQ => WQ(QQ)))
          },
          shouldCapture: () => wQ.every((QQ => QQ())),
          addCaptureFilter: QQ => {
            wQ.push(QQ)
          },
          removeCaptureFilter: QQ => {
            wQ = wQ.filter((WQ => WQ !== QQ))
          }
        }, fW.set(QQ, WQ)
      }
      return WQ
    }
    var tW = class {
      constructor(QQ, WQ, XQ) {
        this.metas = QQ, this.transports = WQ, this.onActivate = XQ, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = QQ => {
          var WQ, XQ, wQ;
          const qQ = this.pending;
          var TQ, zQ;
          if ("overrides" === QQ.type) return void(this.pending = {
            reset: null !== (TQ = null === qQ || void 0 === qQ ? void 0 : qQ.reset) && void 0 !== TQ && TQ,
            inheritOverrides: null === (zQ = null === qQ || void 0 === qQ ? void 0 : qQ.inheritOverrides) || void 0 === zQ || zQ,
            session: gW(gW({}, null === qQ || void 0 === qQ ? void 0 : qQ.session), {}, {
              overrides: gW(gW({}, null === qQ || void 0 === qQ ? void 0 : qQ.session.overrides), QQ.overrides)
            })
          });
          const sQ = QQ.session,
            FQ = YQ(sQ) || null != sQ && "id" in sQ && !sQ.id,
            PQ = null !== (WQ = null === sQ || void 0 === sQ ? void 0 : sQ.overrides) && void 0 !== WQ ? WQ : null === qQ || void 0 === qQ ? void 0 : qQ.session.overrides;
          this.pending = {
            reset: FQ || !(null === sQ || void 0 === sQ ? void 0 : sQ.id) && null !== (XQ = null === qQ || void 0 === qQ ? void 0 : qQ.reset) && void 0 !== XQ && XQ,
            inheritOverrides: !(!QQ.overrides && void 0 !== (null === sQ || void 0 === sQ ? void 0 : sQ.overrides)) && (null === (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.inheritOverrides) || void 0 === wQ || wQ),
            session: {
              id: null === sQ || void 0 === sQ ? void 0 : sQ.id,
              attributes: (null === sQ || void 0 === sQ ? void 0 : sQ.attributes) && gW({}, sQ.attributes),
              overrides: QQ.overrides ? gW(gW({}, null === qQ || void 0 === qQ ? void 0 : qQ.session.overrides), QQ.overrides) : PQ && gW({}, PQ)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var QQ, WQ;
        this.waiting = !0, SW(this.metas).addSessionUpdateListener(this.recordUpdate), SW(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (QQ = (WQ = this.metas).addCaptureListener) || void 0 === QQ || QQ.call(WQ, this.activate), this.activate()
      }
      destroy() {
        var QQ, WQ;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), SW(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (QQ = (WQ = this.metas).removeCaptureListener) || void 0 === QQ || QQ.call(WQ, this.activate), SW(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function oW(QQ) {
      return (null === QQ || void 0 === QQ ? void 0 : QQ.persistent) ? LW : kW
    }

    function eW() {}
    let nW = function(QQ) {
      return QQ[QQ.OFF = 0] = "OFF", QQ[QQ.ERROR = 1] = "ERROR", QQ[QQ.WARN = 2] = "WARN", QQ[QQ.INFO = 3] = "INFO", QQ[QQ.VERBOSE = 4] = "VERBOSE", QQ
    }({});
    const xW = {
        debug: eW,
        error: eW,
        info: eW,
        prefix: "Faro",
        warn: eW
      },
      YW = 1;

    function NW(QQ) {
      return NW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, NW(QQ)
    }

    function ZW(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != NW(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != NW(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == NW(WQ) ? WQ : WQ + ""
    }

    function OW(QQ, WQ, XQ) {
      return (WQ = ZW(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function KW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function mW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? KW(Object(XQ), !0).forEach((function(WQ) {
          OW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : KW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }
    const MW = mW({}, console);
    var QX = class {
        constructor() {
          this.unpatchedConsole = MW, this.internalLogger = xW, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
          this.internalLogger.debug(`${this.name}\n`, ...WQ)
        }
        logInfo() {
          for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
          this.internalLogger.info(`${this.name}\n`, ...WQ)
        }
        logWarn() {
          for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
          this.internalLogger.warn(`${this.name}\n`, ...WQ)
        }
        logError() {
          for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
          this.internalLogger.error(`${this.name}\n`, ...WQ)
        }
      },
      WX = class extends QX {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const XX = "2.12.1";
    var wX = class extends WX {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = XX, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(QQ) {
        var WQ;
        const XQ = QQ.session;
        if (XQ && XQ.id !== (null === (WQ = this.notifiedSession) || void 0 === WQ ? void 0 : WQ.id)) {
          var wQ;
          if (this.isAdoptingSession()) return void(this.notifiedSession = XQ);
          if (this.notifiedSession && this.notifiedSession.id === (null === (wQ = XQ.attributes) || void 0 === wQ ? void 0 : wQ.previousSession)) return this.api.pushEvent(dW, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = XQ);
          this.notifiedSession = XQ, this.api.pushEvent(bW, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(QQ, WQ, XQ) {
        const wQ = null === XQ || void 0 === XQ ? void 0 : XQ.session;
        let qQ, TQ, zQ = QQ.fetchUserSession();
        if (WQ.persistent && WQ.maxSessionPersistenceTime && zQ) {
          const QQ = rW();
          zQ.lastActivity < QQ - WQ.maxSessionPersistenceTime && (LW.removeUserSession(), zQ = null)
        }
        const sQ = hW(zQ);
        if ((null === XQ || void 0 === XQ ? void 0 : XQ.reset) || !sQ || (null === wQ || void 0 === wQ ? void 0 : wQ.id) && wQ.id !== (null === zQ || void 0 === zQ ? void 0 : zQ.sessionId)) {
          var FQ, PQ, gQ, JQ, rQ, IQ;
          TQ = lW({
            sessionId: (null === XQ || void 0 === XQ ? void 0 : XQ.reset) ? void 0 : null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.id) && void 0 !== FQ ? FQ : null === (PQ = WQ.session) || void 0 === PQ ? void 0 : PQ.id,
            isSampled: JW(this)
          }, this);
          const QQ = TQ.sessionId,
            jQ = XQ && sQ ? null === zQ || void 0 === zQ || null === (gQ = zQ.sessionMeta) || void 0 === gQ ? void 0 : gQ.overrides : void 0,
            BQ = jQ ? gW(gW({}, null === (JQ = WQ.session) || void 0 === JQ ? void 0 : JQ.overrides), jQ) : null === (rQ = WQ.session) || void 0 === rQ ? void 0 : rQ.overrides;
          TQ.sessionMeta = gW({
            id: QQ,
            attributes: gW({
              isSampled: TQ.isSampled.toString()
            }, null === (IQ = WQ.session) || void 0 === IQ ? void 0 : IQ.attributes)
          }, BQ ? {
            overrides: BQ
          } : {}), qQ = bW
        } else {
          var jQ, BQ;
          const QQ = null === zQ || void 0 === zQ ? void 0 : zQ.sessionId;
          TQ = lW({
            sessionId: QQ,
            isSampled: zQ.isSampled || !1,
            started: null === zQ || void 0 === zQ ? void 0 : zQ.started
          }, this);
          const XQ = null === zQ || void 0 === zQ ? void 0 : zQ.sessionMeta,
            wQ = gW(gW({}, null === (jQ = WQ.session) || void 0 === jQ ? void 0 : jQ.overrides), null === XQ || void 0 === XQ ? void 0 : XQ.overrides);
          TQ.sessionMeta = gW(gW({}, WQ.session), {}, {
            id: QQ,
            attributes: gW(gW(gW({}, null === (BQ = WQ.session) || void 0 === BQ ? void 0 : BQ.attributes), null === XQ || void 0 === XQ ? void 0 : XQ.attributes), {}, {
              isSampled: TQ.isSampled.toString()
            }),
            overrides: wQ
          }), qQ = vW
        }
        var yQ;
        if (wQ && (TQ.sessionMeta = gW(gW({}, TQ.sessionMeta), {}, {
            attributes: gW(gW(gW({}, null === (yQ = TQ.sessionMeta) || void 0 === yQ ? void 0 : yQ.attributes), wQ.attributes), {}, {
              isSampled: TQ.isSampled.toString()
            })
          }), wQ.overrides)) {
          const QQ = (null === XQ || void 0 === XQ ? void 0 : XQ.inheritOverrides) ? gW(gW({}, TQ.sessionMeta.overrides), wQ.overrides) : wQ.overrides;
          Object.keys(QQ).length > 0 ? TQ.sessionMeta.overrides = QQ : delete TQ.sessionMeta.overrides
        }
        return {
          initialSession: TQ,
          lifecycleType: qQ
        }
      }
      registerBeforeSendHook(QQ) {
        var WQ;
        this.beforeSendHook = WQ => {
          var XQ, wQ;
          const qQ = null === (XQ = WQ.meta.session) || void 0 === XQ ? void 0 : XQ.id;
          qQ && !this.transports.isPaused() && QQ(qQ);
          const TQ = null === (wQ = WQ.meta.session) || void 0 === wQ ? void 0 : wQ.attributes;
          if (TQ && "true" === (null === TQ || void 0 === TQ ? void 0 : TQ.isSampled)) {
            var zQ;
            let QQ = JSON.parse(JSON.stringify(WQ));
            const XQ = null === (zQ = QQ.meta.session) || void 0 === zQ ? void 0 : zQ.attributes;
            var sQ;
            if (null === XQ || void 0 === XQ || delete XQ.isSampled, 0 === Object.keys(null !== XQ && void 0 !== XQ ? XQ : {}).length) null === (sQ = QQ.meta.session) || void 0 === sQ || delete sQ.attributes;
            return QQ
          }
          return null
        }, null === (WQ = this.transports) || void 0 === WQ || WQ.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var QQ;
        this.logDebug("init session instrumentation");
        const WQ = document.prerendering;
        var XQ;
        if ((null === (QQ = this.config.sessionTracking) || void 0 === QQ ? void 0 : QQ.enabled) && (WQ || this.prerenderSession)) return null !== (XQ = this.prerenderSession) && void 0 !== XQ || (this.prerenderSession = new tW(this.metas, this.transports, (QQ => {
          this.prerenderSession = void 0, this.initializeSession(QQ)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(QQ) {
        const WQ = this.config.sessionTracking;
        if (null === WQ || void 0 === WQ ? void 0 : WQ.enabled) {
          var XQ, wQ;
          const qQ = oW(WQ),
            TQ = new qQ(this);
          this.isAdoptingSession = TQ.isAdopting, this.registerBeforeSendHook(TQ.recordActivity);
          const {
            initialSession: zQ,
            lifecycleType: sQ
          } = this.createInitialSession(qQ, WQ, QQ);
          qQ.storeUserSession(zQ);
          const FQ = zQ.sessionMeta;
          this.notifiedSession = FQ, this.api.setSession(FQ), this.captureListener = () => {
            this.transports.isPaused() || TQ.updateSession({
              refreshActivity: !1
            })
          }, null === (XQ = (wQ = this.metas).addCaptureListener) || void 0 === XQ || XQ.call(wQ, this.captureListener), sQ === bW && this.api.pushEvent(bW, {}, void 0, {
            skipDedupe: !0
          }), sQ === vW && this.api.pushEvent(vW, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var QQ, WQ, XQ;
        (null === (QQ = this.prerenderSession) || void 0 === QQ || QQ.destroy(), this.captureListener) && (null === (WQ = (XQ = this.metas).removeCaptureListener) || void 0 === WQ || WQ.call(XQ, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function qX(QQ, WQ, XQ, wQ) {
      const qQ = {
        filename: QQ || document.location.href,
        function: WQ || "?"
      };
      return void 0 !== XQ && (qQ.lineno = XQ), void 0 !== wQ && (qQ.colno = wQ), qQ
    }
    const TX = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      zX = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      sX = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      FX = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      PX = "safari-extension",
      gX = "safari-web-extension",
      JX = /Minified React error #\d+;/i;

    function rX(QQ, WQ) {
      const XQ = null === QQ || void 0 === QQ ? void 0 : QQ.includes(PX),
        wQ = !XQ && (null === QQ || void 0 === QQ ? void 0 : QQ.includes("safari-web-extension"));
      return XQ || wQ ? [(null === QQ || void 0 === QQ ? void 0 : QQ.includes("@")) ? QQ.split("@")[0] : QQ, XQ ? `${PX}:${WQ}` : `${gX}:${WQ}`] : [QQ, WQ]
    }
    const IX = 1024;

    function jX(QQ) {
      let WQ = [];
      QQ.stacktrace ? WQ = QQ.stacktrace.split("\n").filter(((QQ, WQ) => WQ % 2 === 0)) : QQ.stack && (WQ = QQ.stack.split("\n"));
      const XQ = WQ.reduce(((WQ, XQ, wQ) => {
        if (XQ.length > IX) return WQ;
        let qQ, TQ, zQ, sQ, FQ;
        if (qQ = TX.exec(XQ)) {
          if (TQ = qQ[1], zQ = qQ[2], sQ = qQ[3], FQ = qQ[4], null === zQ || void 0 === zQ ? void 0 : zQ.startsWith("eval")) {
            const QQ = zX.exec(zQ);
            QQ && (zQ = QQ[1], sQ = QQ[2], FQ = QQ[3])
          }
          zQ = (null === zQ || void 0 === zQ ? void 0 : zQ.startsWith("address at ")) ? zQ.substring(11) : zQ, [TQ, zQ] = rX(TQ, zQ)
        } else if (qQ = sX.exec(XQ)) {
          if (TQ = qQ[1], zQ = qQ[3], sQ = qQ[4], FQ = qQ[5], zQ && zQ.includes(" > eval")) {
            const QQ = FX.exec(zQ);
            QQ && (TQ = TQ || "eval", zQ = QQ[1], sQ = QQ[2])
          } else 0 === wQ && !FQ && vQ(QQ.columnNumber) && (FQ = String(QQ.columnNumber + 1));
          [TQ, zQ] = rX(TQ, zQ)
        }
        return (zQ || TQ) && WQ.push(qX(zQ, TQ, sQ ? Number(sQ) : void 0, FQ ? Number(FQ) : void 0)), WQ
      }), []);
      return JX.test(QQ.message) ? XQ.slice(1) : XQ
    }

    function BX(QQ) {
      return {
        frames: jX(QQ)
      }
    }
    const yX = "http-request-start",
      VX = "http-request-end";
    var DX = class QQ {
      constructor() {
        this.subscribers = []
      }
      subscribe(QQ) {
        return this.subscribers.push(QQ), {
          unsubscribe: () => this.unsubscribe(QQ)
        }
      }
      unsubscribe(QQ) {
        this.subscribers = this.subscribers.filter((WQ => WQ !== QQ))
      }
      notify(QQ) {
        this.subscribers.forEach((WQ => WQ(QQ)))
      }
      first() {
        const WQ = new QQ,
          XQ = QQ => {
            WQ.notify(QQ), wQ.unsubscribe()
          },
          wQ = this.subscribe(XQ),
          qQ = WQ.unsubscribe.bind(WQ);
        return this.withUnsubscribeOverride(WQ, qQ, XQ)
      }
      takeWhile(WQ) {
        const XQ = new QQ,
          wQ = QQ => {
            WQ(QQ) ? XQ.notify(QQ) : XQ.unsubscribe(wQ)
          };
        this.subscribe(wQ);
        const qQ = XQ.unsubscribe.bind(XQ);
        return this.withUnsubscribeOverride(XQ, qQ, wQ)
      }
      filter(WQ) {
        const XQ = new QQ,
          wQ = QQ => {
            WQ(QQ) && XQ.notify(QQ)
          };
        this.subscribe(wQ);
        const qQ = XQ.unsubscribe.bind(XQ);
        return this.withUnsubscribeOverride(XQ, qQ, wQ)
      }
      merge() {
        const WQ = new QQ,
          XQ = [];
        for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
        qQ.forEach((QQ => {
          const wQ = QQ.subscribe((QQ => {
            WQ.notify(QQ)
          }));
          XQ.push(wQ)
        }));
        const zQ = WQ.unsubscribeAll.bind(WQ);
        return WQ.unsubscribe = () => {
          XQ.forEach((QQ => QQ.unsubscribe())), zQ()
        }, WQ
      }
      withUnsubscribeOverride(QQ, WQ, XQ) {
        return QQ.unsubscribe = QQ => {
          WQ(QQ), this.unsubscribe(XQ)
        }, QQ
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let pX = function(QQ) {
      return QQ.TRACE = "trace", QQ.DEBUG = "debug", QQ.INFO = "info", QQ.LOG = "log", QQ.WARN = "warn", QQ.ERROR = "error", QQ
    }({});
    const GX = "log",
      UX = ["trace", "debug", "info", "log", "warn", "error"];
    let bX, vX = !1;
    const dX = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      HX = "Error",
      aX = QQ => QQ.map((QQ => lQ(QQ) ? CW(QQ) : String(QQ))).join(" ");

    function lX(QQ) {
      let WQ, XQ, wQ, qQ, TQ = [];
      if (kQ(QQ) && QQ.error) WQ = QQ.error.message, XQ = QQ.error.name, TQ = jX(QQ.error);
      else if ((wQ = fQ(QQ)) || SQ(QQ)) {
        const {
          name: qQ,
          message: TQ
        } = QQ;
        XQ = null !== qQ && void 0 !== qQ ? qQ : wQ ? "DOMError" : "DOMException", WQ = TQ ? `${XQ}: ${TQ}` : XQ
      } else LQ(QQ) ? (XQ = QQ.name, WQ = QQ.message, TQ = jX(QQ)) : (lQ(QQ) || (qQ = CQ(QQ))) && (XQ = qQ ? QQ.constructor.name : void 0, WQ = `Non-Error exception captured with keys: ${Object.keys(QQ)}`);
      return [WQ, XQ, TQ]
    }

    function hX(QQ) {
      const [WQ, XQ, wQ, qQ, TQ] = QQ;
      let zQ, sQ, FQ = [];
      const PQ = bQ(WQ),
        gQ = qX(XQ, "?", wQ, qQ);
      return TQ || !PQ ? ([zQ, sQ, FQ] = lX(null !== TQ && void 0 !== TQ ? TQ : WQ), 0 === FQ.length && (FQ = [gQ])) : PQ && ([zQ, sQ] = function(QQ) {
        var WQ, XQ;
        const wQ = QQ.match(dX),
          qQ = null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ[1]) && void 0 !== WQ ? WQ : HX;
        return [null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ[2]) && void 0 !== XQ ? XQ : QQ, qQ]
      }(WQ), FQ = [gQ]), {
        value: zQ,
        type: sQ,
        stackFrames: FQ
      }
    }

    function iX(QQ, WQ) {
      return LQ(QQ[0]) ? hX(QQ) : {
        value: WQ(QQ)
      }
    }
    const cX = QQ => QQ.map((QQ => {
      try {
        return String(QQ)
      } catch (WQ) {
        return ""
      }
    })).join(" ");
    var AX = class QQ extends WX {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = XX, this.errorSerializer = cX
      }
      initialize() {
        var WQ, XQ;
        const wQ = this.config.consoleInstrumentation,
          qQ = (null === wQ || void 0 === wQ ? void 0 : wQ.serializeErrors) || !!(null === wQ || void 0 === wQ ? void 0 : wQ.errorSerializer);
        this.errorSerializer = qQ ? null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.errorSerializer) && void 0 !== WQ ? WQ : aX : cX;
        const TQ = null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ.disabledLevels) && void 0 !== XQ ? XQ : QQ.defaultDisabledLevels,
          zQ = function(QQ) {
            if (bX || (bX = new DX), !vX) {
              const WQ = null !== QQ && void 0 !== QQ ? QQ : MW;
              UX.forEach((QQ => {
                console[QQ] = function() {
                  for (var XQ, wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
                  bX.notify({
                    type: "console",
                    level: QQ,
                    args: qQ
                  }), null === (XQ = WQ[QQ]) || void 0 === XQ || XQ.apply(console, qQ)
                }
              })), vX = !0
            }
            return bX
          }(this.unpatchedConsole);
        this.subscription = zQ.subscribe((WQ => {
          let {
            level: XQ,
            args: qQ
          } = WQ;
          if (!TQ.includes(XQ)) try {
            if (XQ !== pX.ERROR || (null === wQ || void 0 === wQ ? void 0 : wQ.consoleErrorAsLog))
              if (XQ === pX.ERROR && (null === wQ || void 0 === wQ ? void 0 : wQ.consoleErrorAsLog)) {
                const {
                  value: WQ,
                  type: wQ,
                  stackFrames: TQ
                } = iX(qQ, this.errorSerializer);
                this.api.pushLog(WQ ? [QQ.consoleErrorPrefix + WQ] : qQ, {
                  level: XQ,
                  context: {
                    value: null !== WQ && void 0 !== WQ ? WQ : "",
                    type: null !== wQ && void 0 !== wQ ? wQ : "",
                    stackFrames: (null === TQ || void 0 === TQ ? void 0 : TQ.length) ? aX(TQ) : ""
                  }
                })
              } else this.api.pushLog(qQ, {
                level: XQ
              });
            else {
              const {
                value: WQ,
                type: XQ,
                stackFrames: wQ
              } = iX(qQ, this.errorSerializer);
              if (WQ && !XQ && !wQ) return void this.api.pushError(new Error(QQ.consoleErrorPrefix + WQ));
              this.api.pushError(new Error(QQ.consoleErrorPrefix + WQ), {
                type: XQ,
                stackFrames: wQ
              })
            }
          } catch (zQ) {
            this.logError(zQ)
          }
        }))
      }
      destroy() {
        var QQ;
        null === (QQ = this.subscription) || void 0 === QQ || QQ.unsubscribe(), this.subscription = void 0
      }
    };
    AX.defaultDisabledLevels = [pX.DEBUG, pX.TRACE, pX.LOG], AX.consoleErrorPrefix = "console.error: ";
    const RX = [];
    var EX = class extends WX {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = XX
      }
      initialize() {
        this.logDebug("Initializing"),
          function(QQ) {
            const WQ = window.onerror;
            window.onerror = function() {
              for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
              try {
                const {
                  value: WQ,
                  type: XQ,
                  stackFrames: qQ
                } = hX(wQ), TQ = wQ[4];
                if (WQ) {
                  const wQ = {
                    type: XQ,
                    stackFrames: qQ
                  };
                  null != TQ && (wQ.originalError = TQ), QQ.pushError(new Error(WQ), wQ)
                }
              } finally {
                null === WQ || void 0 === WQ || WQ.apply(window, wQ)
              }
            }
          }(this.api),
          function(QQ) {
            const WQ = WQ => {
              var XQ;
              let wQ, qQ, TQ = WQ;
              if (TQ.reason) TQ = WQ.reason;
              else if (null === (XQ = WQ.detail) || void 0 === XQ ? void 0 : XQ.reason) {
                var zQ;
                TQ = null === (zQ = WQ.detail) || void 0 === zQ ? void 0 : zQ.reason
              }
              let sQ = [];
              RQ(TQ) ? (wQ = `Non-Error promise rejection captured with value: ${String(TQ)}`, qQ = "UnhandledRejection") : [wQ, qQ, sQ] = lX(TQ), wQ && QQ.pushError(new Error(wQ), {
                type: qQ,
                stackFrames: sQ
              })
            };
            window.addEventListener("unhandledrejection", WQ), RX.push(WQ)
          }(this.api)
      }
    };
    const CX = "unknown";
    var uX = class extends WX {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = XX, this.waitingForActivation = !1, this.sendViewChangedEvent = QQ => {
          var WQ;
          if (this.waitingForActivation || document.prerendering) return;
          const XQ = QQ.view;
          if (XQ && XQ.name !== (null === (WQ = this.notifiedView) || void 0 === WQ ? void 0 : WQ.name)) {
            var wQ, qQ, TQ;
            const QQ = null !== (wQ = null === (qQ = this.notifiedView) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== wQ ? wQ : CX;
            this.notifiedView = XQ, this.api.pushEvent(UW, {
              fromView: QQ,
              toView: null !== (TQ = XQ.name) && void 0 !== TQ ? TQ : CX
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
    class LX {
      t;
      o = 0;
      i = [];
      l(QQ) {
        if (QQ.hadRecentInput) return;
        const WQ = this.i[0],
          XQ = this.i.at(-1);
        this.o && WQ && XQ && QQ.startTime - XQ.startTime < 1e3 && QQ.startTime - WQ.startTime < 5e3 ? (this.o += QQ.value, this.i.push(QQ)) : (this.o = QQ.value, this.i = [QQ]), this.t?.(QQ)
      }
    }
    const kX = () => {
        const QQ = performance.getEntriesByType("navigation")[0];
        if (QQ && QQ.responseStart > 0 && QQ.responseStart < performance.now()) return QQ
      },
      fX = QQ => {
        if ("loading" === document.readyState) return "loading";
        const WQ = kX();
        if (WQ) {
          if (QQ < WQ.domInteractive) return "loading";
          if (0 === WQ.domContentLoadedEventStart || QQ < WQ.domContentLoadedEventStart) return "dom-interactive";
          if (0 === WQ.domComplete || QQ < WQ.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      SX = QQ => {
        const WQ = QQ.nodeName;
        return 1 === QQ.nodeType ? WQ.toLowerCase() : WQ.toUpperCase().replace(/^#/, "")
      },
      tX = QQ => {
        let WQ = "";
        try {
          for (; 9 !== QQ?.nodeType;) {
            const XQ = QQ,
              wQ = XQ.id ? "#" + XQ.id : [SX(XQ), ...Array.from(XQ.classList ?? []).sort()].join(".");
            if (WQ.length + wQ.length > 99) return WQ || wQ;
            if (WQ = WQ ? wQ + ">" + WQ : wQ, XQ.id) break;
            QQ = XQ.parentNode
          }
        } catch {}
        return WQ
      },
      oX = new WeakMap;

    function eX(QQ, WQ) {
      let XQ = oX.get(WQ);
      return XQ || (XQ = new WeakMap, oX.set(WQ, XQ)), XQ.get(QQ) || XQ.set(QQ, new WQ), XQ.get(QQ)
    }
    let nX = -1;
    const xX = () => nX,
      YX = QQ => {
        addEventListener("pageshow", (WQ => {
          WQ.persisted && (nX = WQ.timeStamp, QQ(WQ))
        }), !0)
      },
      NX = (QQ, WQ, XQ, wQ) => {
        let qQ, TQ;
        return zQ => {
          WQ.value >= 0 && (zQ || wQ) && (TQ = WQ.value - (qQ ?? 0), (TQ || void 0 === qQ) && (qQ = WQ.value, WQ.delta = TQ, WQ.rating = ((QQ, WQ) => QQ > WQ[1] ? "poor" : QQ > WQ[0] ? "needs-improvement" : "good")(WQ.value, XQ), QQ(WQ)))
        }
      },
      ZX = QQ => {
        requestAnimationFrame((() => requestAnimationFrame((() => QQ()))))
      },
      OX = () => kX()?.activationStart ?? 0;
    let KX = -1;
    const mX = new Set,
      MX = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Qw = QQ => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === QQ.type)
            for (const QQ of mX) QQ();
          isFinite(KX) || (KX = "visibilitychange" === QQ.type ? QQ.timeStamp : 0, removeEventListener("prerenderingchange", Qw, !0))
        }
      },
      Ww = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (KX = 1 / 0), KX < 0) {
          const QQ = OX(),
            WQ = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((WQ => "hidden" === WQ.name && WQ.startTime >= QQ))?.startTime;
          KX = WQ ?? MX(), addEventListener("visibilitychange", Qw, !0), addEventListener("prerenderingchange", Qw, !0), YX((() => {
            setTimeout((() => {
              KX = MX()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return KX
          },
          onHidden(QQ) {
            mX.add(QQ)
          }
        }
      },
      Xw = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0,
          zQ = arguments.length > 6 ? arguments[6] : void 0;
        const sQ = kX(),
          FQ = sQ?.navigationId || 0;
        let PQ = "navigate";
        return XQ ? PQ = XQ : xX() >= 0 ? PQ = "back-forward-cache" : sQ && (document.prerendering || OX() > 0 ? PQ = "prerender" : document.wasDiscarded ? PQ = "restore" : sQ.type && (PQ = sQ.type.replace(/_/g, "-"))), {
          name: QQ,
          value: WQ,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: PQ,
          navigationId: wQ || FQ,
          navigationInteractionId: qQ,
          navigationURL: TQ || sQ?.name,
          navigationStartTime: zQ || 0
        }
      },
      ww = function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const wQ = QQ.filter((QQ => PerformanceObserver.supportedEntryTypes.includes(QQ)));
          if (wQ.length > 0) {
            const QQ = new PerformanceObserver((QQ => {
              queueMicrotask((() => {
                const XQ = QQ.getEntries();
                wQ.length > 1 && XQ.sort(((QQ, WQ) => QQ.startTime + QQ.duration - (WQ.startTime + WQ.duration))), WQ(XQ)
              }))
            }));
            for (const WQ of wQ) QQ.observe({
              type: WQ,
              buffered: !0,
              ...XQ
            });
            return QQ
          }
        } catch {}
      },
      qw = QQ => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && QQ && QQ.reportSoftNavs,
      Tw = (QQ, WQ) => {
        if (QQ.set(WQ.navigationId, WQ), QQ.size > 2) {
          const WQ = QQ.keys().next().value;
          void 0 !== WQ && QQ.delete(WQ)
        }
      },
      zw = QQ => {
        let WQ = !1;
        return () => {
          WQ || (QQ(), WQ = !0)
        }
      };
    class sw {
      u
    }
    const Fw = QQ => {
        document.prerendering ? addEventListener("prerenderingchange", QQ, !0) : QQ()
      },
      Pw = [1800, 3e3],
      gw = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const XQ = qw(WQ);
        Fw((() => {
          const wQ = eX(WQ, sw),
            qQ = Ww();
          let TQ, zQ = Xw("FCP");
          const sQ = ww(["paint"], (QQ => {
            for (const WQ of QQ) "first-contentful-paint" === WQ.name && (sQ.disconnect(), WQ.startTime < qQ.firstHiddenTime && (zQ.value = Math.max(WQ.startTime - OX(), 0), zQ.entries.push(WQ), zQ.navigationId = WQ.navigationId || zQ.navigationId, TQ(!0)))
          }));
          sQ && (TQ = NX(QQ, zQ, Pw, WQ.reportAllChanges), YX((XQ => {
            zQ = Xw("FCP", -1, "back-forward-cache", zQ.navigationId, zQ.navigationInteractionId, zQ.navigationURL, xX()), TQ = NX(QQ, zQ, Pw, WQ.reportAllChanges), ZX((() => {
              zQ.value = performance.now() - XQ.timeStamp, TQ(!0)
            }))
          }))), XQ && ww(["soft-navigation"], (XQ => {
            XQ.forEach((XQ => {
              wQ.u && XQ.navigationId && Tw(wQ.u, XQ);
              const qQ = Math.max((XQ.presentationTime || XQ.paintTime || 0) - XQ.startTime, 0);
              zQ = Xw("FCP", qQ, "soft-navigation", XQ.navigationId, XQ.interactionId, XQ.name, XQ.startTime), TQ = NX(QQ, zQ, Pw, WQ.reportAllChanges), TQ(!0)
            }))
          }), WQ)
        }))
      },
      Jw = [.1, .25],
      rw = QQ => QQ.find((QQ => 1 === QQ.node?.nodeType)) || QQ[0];
    let Iw = 0,
      jw = 1 / 0,
      Bw = 0;
    const yw = QQ => {
      for (const WQ of QQ) WQ.interactionId && (jw = Math.min(jw, WQ.interactionId), Bw = Math.max(Bw, WQ.interactionId), Iw = Bw ? (Bw - jw) / 7 + 1 : 0)
    };
    let Vw;
    const Dw = () => Vw ? Iw : performance.interactionCount ?? 0;
    class pw {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Dw() - this.h
      }
      D() {
        this.h = Dw(), this.v.length = 0, this.p.clear()
      }
      S(QQ) {
        const WQ = this.T(),
          XQ = Math.min(this.v.length - 1, Math.floor(WQ / 50));
        return !WQ || -1 !== XQ || "soft-navigation" !== QQ && "back-forward-cache" !== QQ ? this.v[XQ] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(QQ) {
        if (this.m?.(QQ), !QQ.interactionId) return;
        const WQ = this.v.at(-1);
        let XQ = this.p.get(QQ.interactionId);
        if (XQ || this.v.length < 10 || QQ.duration > WQ.k) {
          if (XQ ? QQ.duration > XQ.k ? (XQ.entries = [QQ], XQ.k = QQ.duration) : QQ.duration === XQ.k && QQ.startTime === XQ.entries[0].startTime && XQ.entries.push(QQ) : (XQ = {
              id: QQ.interactionId,
              entries: [QQ],
              k: QQ.duration
            }, this.p.set(XQ.id, XQ), this.v.push(XQ)), this.v.sort(((QQ, WQ) => WQ.k - QQ.k)), this.v.length > 10) {
            const QQ = this.v.splice(10);
            for (const WQ of QQ) this.p.delete(WQ.id)
          }
          this.M?.(XQ)
        }
      }
    }
    const Gw = QQ => {
        const WQ = "requestIdleCallback" in globalThis ? 1e3 : 0,
          XQ = globalThis.requestIdleCallback || setTimeout,
          wQ = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) QQ();
        else {
          const qQ = zw(QQ);
          let TQ = -1;
          const zQ = () => {
            wQ(TQ), qQ()
          };
          addEventListener("visibilitychange", zQ, {
            once: !0,
            capture: !0
          }), TQ = XQ((() => {
            removeEventListener("visibilitychange", zQ, {
              capture: !0
            }), qQ()
          }), {
            timeout: WQ
          })
        }
      },
      Uw = [200, 500],
      bw = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const XQ = eX(WQ = Object.assign({}, WQ), pw);
        let wQ = [],
          qQ = [],
          TQ = 0;
        const zQ = new WeakMap,
          sQ = new WeakMap;
        let FQ = !1;
        const PQ = () => {
            FQ || (FQ = !0, Gw(gQ))
          },
          gQ = () => {
            const QQ = new Set(XQ.v.map((QQ => zQ.get(QQ.entries[0])))),
              WQ = qQ.length - 10;
            qQ = qQ.filter(((XQ, wQ) => wQ >= WQ || QQ.has(XQ)));
            const sQ = new Set;
            for (const XQ of qQ) {
              const QQ = JQ(XQ.startTime, XQ.processingEnd);
              for (const WQ of QQ) sQ.add(WQ)
            }
            const PQ = wQ.length - 10;
            wQ = wQ.filter(((QQ, WQ) => sQ.has(QQ) || WQ >= PQ && QQ.startTime > TQ)), FQ = !1
          };
        XQ.m = QQ => {
          const XQ = QQ.startTime + QQ.duration;
          let wQ;
          TQ = Math.max(TQ, QQ.processingEnd);
          for (let TQ = qQ.length - 1; TQ >= 0; TQ--) {
            const zQ = qQ[TQ];
            if (Math.abs(XQ - zQ.renderTime) <= 8) {
              wQ = zQ, wQ.startTime = Math.min(QQ.startTime, wQ.startTime), wQ.processingStart = Math.min(QQ.processingStart, wQ.processingStart), wQ.processingEnd = Math.max(QQ.processingEnd, wQ.processingEnd), WQ.includeProcessedEventEntries && wQ.entries.push(QQ);
              break
            }
          }
          wQ || (wQ = {
            startTime: QQ.startTime,
            processingStart: QQ.processingStart,
            processingEnd: QQ.processingEnd,
            renderTime: XQ,
            entries: WQ.includeProcessedEventEntries ? [QQ] : []
          }, qQ.push(wQ)), QQ.interactionId && zQ.set(QQ, wQ), PQ()
        }, XQ.M = QQ => {
          if (!sQ.get(QQ)) {
            const XQ = QQ.entries.find((QQ => QQ.target))?.target;
            if (XQ) {
              const wQ = WQ.generateTarget?.(XQ) ?? tX(XQ);
              sQ.set(QQ, wQ)
            } else {
              const WQ = QQ.entries.find((QQ => QQ.targetSelector))?.targetSelector;
              WQ && sQ.set(QQ, WQ)
            }
          }
        };
        const JQ = (QQ, WQ) => {
          const XQ = [];
          for (const qQ of wQ)
            if (!(qQ.startTime + qQ.duration < QQ)) {
              if (qQ.startTime > WQ) break;
              XQ.push(qQ)
            } return XQ
        };
        ww(["long-animation-frame"], (QQ => {
            wQ = wQ.concat(QQ), PQ()
          }), WQ),
          function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const XQ = Ww();
            Fw((() => {
              "interactionCount" in performance || Vw || (Vw = ww(["event"], yw, {
                durationThreshold: 0
              }));
              let wQ, qQ = Xw("INP");
              const TQ = eX(WQ, pw),
                zQ = (XQ, zQ, sQ, FQ, PQ) => {
                  TQ.D(), qQ = Xw("INP", -1, XQ, zQ, sQ, FQ, PQ), wQ = NX(QQ, qQ, Uw, WQ.reportAllChanges)
                },
                sQ = () => {
                  const QQ = TQ.S(qQ.navigationType);
                  QQ && QQ.k !== qQ.value && (qQ.value = QQ.k, qQ.entries = QQ.entries, wQ())
                },
                FQ = QQ => {
                  sQ(), wQ(!0), zQ("soft-navigation", QQ.navigationId, QQ.interactionId, QQ.name, QQ.startTime)
                },
                PQ = function(QQ) {
                  let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Gw((() => {
                    for (const WQ of QQ) "soft-navigation" !== WQ.entryType ? TQ.l(WQ) : FQ(WQ);
                    sQ(), WQ && wQ(!0)
                  }))
                },
                gQ = ["event", "first-input"];
              qw(WQ) && gQ.push("soft-navigation");
              const JQ = ww(gQ, PQ, {
                ...WQ,
                durationThreshold: WQ.durationThreshold ?? 40
              });
              wQ = NX(QQ, qQ, Uw, WQ.reportAllChanges), JQ && (XQ.onHidden((() => {
                PQ(JQ.takeRecords(), !0)
              })), YX((() => {
                zQ("back-forward-cache", qQ.navigationId, qQ.navigationInteractionId, qQ.navigationURL, xX())
              })))
            }))
          }((WQ => {
            QQ((QQ => {
              if (0 === QQ.entries.length) {
                const WQ = QQ.navigationStartTime || 0,
                  XQ = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: QQ.value,
                    loadState: fX(WQ)
                  };
                return Object.assign(QQ, {
                  attribution: XQ
                })
              }
              const WQ = QQ.entries[0],
                wQ = zQ.get(WQ),
                qQ = Math.max(wQ.processingStart, WQ.startTime),
                TQ = Math.max(WQ.startTime + WQ.duration, qQ),
                FQ = Math.min(wQ.processingEnd, TQ),
                PQ = wQ.entries.sort(((QQ, WQ) => QQ.processingStart - WQ.processingStart)),
                gQ = JQ(WQ.startTime, FQ),
                rQ = XQ.p.get(WQ.interactionId),
                IQ = {
                  interactionTarget: sQ.get(rQ),
                  interactionType: WQ.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: WQ.startTime,
                  nextPaintTime: TQ,
                  processedEventEntries: PQ,
                  longAnimationFrameEntries: gQ,
                  inputDelay: qQ - WQ.startTime,
                  processingDuration: FQ - qQ,
                  presentationDelay: TQ - FQ,
                  loadState: fX(WQ.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (QQ => {
                const WQ = QQ.interactionTime,
                  XQ = QQ.nextPaintTime;
                if (!QQ.longAnimationFrameEntries?.length || !WQ || !XQ) return;
                const wQ = QQ.inputDelay,
                  qQ = QQ.processingDuration;
                let TQ, zQ, sQ = 0,
                  FQ = 0,
                  PQ = 0,
                  gQ = 0;
                for (const IQ of QQ.longAnimationFrameEntries) {
                  FQ = FQ + IQ.startTime + IQ.duration - IQ.styleAndLayoutStart;
                  for (const QQ of IQ.scripts) {
                    const XQ = QQ.startTime + QQ.duration;
                    if (XQ < WQ) continue;
                    const PQ = XQ - Math.max(WQ, QQ.startTime),
                      JQ = QQ.duration ? PQ / QQ.duration * QQ.forcedStyleAndLayoutDuration : 0;
                    sQ += PQ - JQ, FQ += JQ, PQ > gQ && (zQ = QQ.startTime < WQ + wQ ? "input-delay" : QQ.startTime >= WQ + wQ + qQ ? "presentation-delay" : "processing-duration", TQ = QQ, gQ = PQ)
                  }
                }
                const JQ = QQ.longAnimationFrameEntries.at(-1),
                  rQ = JQ ? JQ.startTime + JQ.duration : 0;
                rQ >= WQ + wQ + qQ && (PQ = XQ - rQ), TQ && zQ && (QQ.longestScript = {
                  entry: TQ,
                  subpart: zQ,
                  intersectingDuration: gQ
                }), QQ.totalScriptDuration = sQ, QQ.totalStyleAndLayoutDuration = FQ, QQ.totalPaintDuration = PQ, QQ.totalUnattributedDuration = XQ - WQ - sQ - FQ - PQ
              })(IQ), Object.assign(QQ, {
                attribution: IQ
              })
            })(WQ))
          }), WQ)
      };
    class vw {
      m;
      u;
      l(QQ) {
        this.m?.(QQ)
      }
    }
    const dw = [2500, 4e3];
    let Hw = 50;
    const aw = [];
    ww(["resource"], (QQ => {
      for (const WQ of QQ) aw.push(WQ), aw.length > Hw && aw.shift()
    }));
    const lw = [800, 1800],
      hw = QQ => {
        document.prerendering ? Fw((() => hw(QQ))) : "complete" !== document.readyState ? addEventListener("load", (() => hw(QQ)), !0) : setTimeout(QQ)
      },
      iw = "load_state",
      Aw = "time_to_first_byte";
    var Rw = class {
        constructor(QQ, WQ) {
          this.corePushMeasurement = QQ, this.webVitalConfig = WQ
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var QQ;
          ! function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const XQ = eX(WQ = Object.assign({}, WQ), LX),
              wQ = new WeakMap;
            XQ.t = QQ => {
                if (QQ?.sources?.length) {
                  const XQ = rw(QQ.sources),
                    qQ = XQ?.node;
                  if (qQ) {
                    const QQ = WQ.generateTarget?.(qQ) ?? tX(qQ);
                    wQ.set(XQ, QQ)
                  }
                }
              },
              function(QQ) {
                let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const XQ = Ww();
                gw(zw((() => {
                  let wQ, qQ = Xw("CLS", 0);
                  const TQ = eX(WQ, LX),
                    zQ = (XQ, zQ, sQ, FQ, PQ) => {
                      qQ = Xw("CLS", 0, XQ, zQ, sQ, FQ, PQ), TQ.o = 0, wQ = NX(QQ, qQ, Jw, WQ.reportAllChanges)
                    },
                    sQ = function() {
                      let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      TQ.o > qQ.value && (qQ.value = TQ.o, qQ.entries = TQ.i), wQ(QQ)
                    },
                    FQ = QQ => {
                      sQ(!0), zQ("soft-navigation", QQ.navigationId, QQ.interactionId, QQ.name, QQ.startTime)
                    },
                    PQ = QQ => {
                      for (const WQ of QQ) "soft-navigation" !== WQ.entryType ? TQ.l(WQ) : FQ(WQ);
                      sQ()
                    },
                    gQ = ["layout-shift"];
                  qw(WQ) && gQ.push("soft-navigation");
                  const JQ = ww(gQ, PQ);
                  JQ && (wQ = NX(QQ, qQ, Jw, WQ.reportAllChanges), XQ.onHidden((() => {
                    PQ(JQ.takeRecords()), wQ(!0)
                  })), YX((() => {
                    zQ("back-forward-cache", qQ.navigationId, qQ.navigationInteractionId, qQ.navigationURL, xX()), ZX(wQ)
                  })), setTimeout(wQ))
                })))
              }((WQ => {
                QQ((QQ => {
                  let WQ = {};
                  if (QQ.entries.length) {
                    const XQ = QQ.entries.reduce(((QQ, WQ) => QQ.value > WQ.value ? QQ : WQ));
                    if (XQ?.sources?.length) {
                      const QQ = rw(XQ.sources);
                      QQ && (WQ = {
                        largestShiftTarget: wQ.get(QQ),
                        largestShiftTime: XQ.startTime,
                        largestShiftValue: XQ.value,
                        largestShiftSource: QQ,
                        largestShiftEntry: XQ,
                        loadState: fX(XQ.startTime)
                      })
                    }
                  }
                  return Object.assign(QQ, {
                    attribution: WQ
                  })
                })(WQ))
              }), WQ)
          }((QQ => {
            const {
              loadState: WQ,
              largestShiftValue: XQ,
              largestShiftTime: wQ,
              largestShiftTarget: qQ
            } = QQ.attribution, TQ = this.buildInitialValues(QQ);
            this.addIfPresent(TQ, "largest_shift_value", XQ), this.addIfPresent(TQ, "largest_shift_time", wQ);
            const zQ = this.buildInitialContext(QQ);
            this.addIfPresent(zQ, iw, WQ), this.addIfPresent(zQ, "largest_shift_target", qQ), this.pushMeasurement(TQ, zQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureFCP() {
          var QQ;
          ! function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const XQ = eX(WQ = Object.assign({}, WQ), sw);
            qw(WQ) && (XQ.u = new Map), gw((WQ => {
              QQ((QQ => {
                let WQ = {
                  timeToFirstByte: 0,
                  firstByteToFCP: QQ.value,
                  loadState: fX(xX())
                };
                if ("soft-navigation" !== QQ.navigationType) {
                  if (QQ.entries.length) {
                    const XQ = kX(),
                      wQ = QQ.entries.at(-1);
                    if (XQ) {
                      const qQ = XQ.responseStart,
                        TQ = XQ.activationStart || 0,
                        zQ = Math.max(0, qQ - TQ);
                      WQ = {
                        timeToFirstByte: zQ,
                        firstByteToFCP: QQ.value - zQ,
                        loadState: fX(QQ.entries[0].startTime),
                        navigationEntry: XQ,
                        fcpEntry: wQ
                      }
                    }
                  }
                } else {
                  const wQ = XQ.u?.get(QQ.navigationId);
                  wQ && (WQ = {
                    timeToFirstByte: 0,
                    firstByteToFCP: QQ.value,
                    loadState: "complete",
                    navigationEntry: wQ
                  })
                }
                return Object.assign(QQ, {
                  attribution: WQ
                })
              })(WQ))
            }), WQ)
          }((QQ => {
            const {
              firstByteToFCP: WQ,
              timeToFirstByte: XQ,
              loadState: wQ
            } = QQ.attribution, qQ = this.buildInitialValues(QQ);
            this.addIfPresent(qQ, "first_byte_to_fcp", WQ), this.addIfPresent(qQ, Aw, XQ);
            const TQ = this.buildInitialContext(QQ);
            this.addIfPresent(TQ, iw, wQ), this.pushMeasurement(qQ, TQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureINP() {
          var QQ;
          bw((QQ => {
            var WQ;
            const {
              interactionTime: XQ,
              presentationDelay: wQ,
              inputDelay: qQ,
              processingDuration: TQ,
              nextPaintTime: zQ,
              loadState: sQ,
              interactionTarget: FQ,
              interactionType: PQ,
              totalScriptDuration: gQ,
              totalStyleAndLayoutDuration: JQ,
              totalPaintDuration: rQ,
              totalUnattributedDuration: IQ,
              longestScript: jQ
            } = QQ.attribution, BQ = this.buildInitialValues(QQ);
            this.addIfPresent(BQ, "interaction_time", XQ), this.addIfPresent(BQ, "presentation_delay", wQ), this.addIfPresent(BQ, "input_delay", qQ), this.addIfPresent(BQ, "processing_duration", TQ), this.addIfPresent(BQ, "next_paint_time", zQ), this.addNumberIfDefined(BQ, "total_script_duration", gQ), this.addNumberIfDefined(BQ, "total_style_and_layout_duration", JQ), this.addNumberIfDefined(BQ, "total_paint_duration", rQ), this.addNumberIfDefined(BQ, "total_unattributed_duration", IQ), this.addNumberIfDefined(BQ, "longest_script_intersecting_duration", null === jQ || void 0 === jQ ? void 0 : jQ.intersectingDuration);
            const yQ = this.buildInitialContext(QQ);
            this.addIfPresent(yQ, iw, sQ), this.addIfPresent(yQ, "interaction_target", FQ), this.addIfPresent(yQ, "interaction_type", PQ), this.addIfPresent(yQ, "longest_script_subpart", null === jQ || void 0 === jQ ? void 0 : jQ.subpart), this.addIfPresent(yQ, "longest_script_invoker_type", null === jQ || void 0 === jQ ? void 0 : jQ.entry.invokerType), (null === (WQ = this.webVitalConfig) || void 0 === WQ ? void 0 : WQ.trackAttributionSources) && (this.addIfPresent(yQ, "longest_script_invoker", null === jQ || void 0 === jQ ? void 0 : jQ.entry.invoker), this.addIfPresent(yQ, "longest_script_source_url", null === jQ || void 0 === jQ ? void 0 : jQ.entry.sourceURL), this.addIfPresent(yQ, "longest_script_source_function_name", null === jQ || void 0 === jQ ? void 0 : jQ.entry.sourceFunctionName), this.addIfPresent(yQ, "longest_script_source_char_position", void 0 !== (null === jQ || void 0 === jQ ? void 0 : jQ.entry.sourceCharPosition) ? String(jQ.entry.sourceCharPosition) : void 0)), this.pushMeasurement(BQ, yQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureLCP() {
          var QQ;
          ! function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (WQ = Object.assign({}, WQ)).resourceBufferSize && (Hw = WQ.resourceBufferSize);
            const XQ = eX(WQ, vw),
              wQ = new WeakMap;
            qw(WQ) && (XQ.u = new Map), XQ.m = QQ => {
                const XQ = QQ.element;
                if (XQ) {
                  const qQ = WQ.generateTarget?.(XQ) ?? tX(XQ);
                  wQ.set(QQ, qQ)
                } else QQ.id && wQ.set(QQ, `#${QQ.id}`)
              },
              function(QQ) {
                let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  XQ = !1;
                const wQ = qw(WQ);
                Fw((() => {
                  let qQ, TQ = Ww(),
                    zQ = Xw("LCP");
                  const sQ = eX(WQ, vw),
                    FQ = (wQ, sQ, FQ, PQ, gQ) => {
                      zQ = Xw("LCP", -1, wQ, sQ, FQ, PQ, gQ), qQ = NX(QQ, zQ, dw, WQ.reportAllChanges), XQ = !1, "soft-navigation" === wQ && (TQ = Ww(!0))
                    },
                    PQ = QQ => {
                      sQ.u && QQ.navigationId && Tw(sQ.u, QQ), XQ || qQ(!0), FQ("soft-navigation", QQ.navigationId, QQ.interactionId, QQ.name, QQ.startTime);
                      const WQ = QQ.getLargestInteractionContentfulPaint?.();
                      WQ && gQ([WQ])
                    },
                    gQ = QQ => {
                      WQ.reportAllChanges || wQ || (QQ = QQ.slice(-1));
                      for (const WQ of QQ) {
                        if (!WQ) continue;
                        if ("soft-navigation" === WQ.entryType) {
                          PQ(WQ);
                          continue
                        }
                        let QQ = 0,
                          XQ = [],
                          wQ = WQ.startTime;
                        if ("largest-contentful-paint" === WQ.entryType) QQ = Math.max(WQ.startTime - OX(), 0), sQ.l(WQ), XQ = [WQ];
                        else if ("interaction-contentful-paint" === WQ.entryType) {
                          const qQ = WQ;
                          if (!zQ.navigationId) continue;
                          if ("interactionId" in qQ && qQ.interactionId != zQ.navigationInteractionId) continue;
                          wQ = qQ.largestContentfulPaint?.renderTime || 0, QQ = Math.max(wQ - WQ.startTime, 0), qQ.largestContentfulPaint && (sQ.l(qQ.largestContentfulPaint), XQ = [qQ.largestContentfulPaint])
                        }
                        wQ < TQ.firstHiddenTime && (zQ.value = QQ, zQ.entries = XQ, qQ())
                      }
                    },
                    JQ = ["largest-contentful-paint"];
                  wQ && JQ.push("interaction-contentful-paint", "soft-navigation");
                  const rQ = ww(JQ, gQ);
                  if (rQ) {
                    qQ = NX(QQ, zQ, dw, WQ.reportAllChanges);
                    const TQ = ["keydown", "click", "visibilitychange"],
                      sQ = QQ => {
                        if (QQ.isTrusted && !XQ) {
                          const QQ = zQ.id;
                          Gw((() => {
                            if (!XQ) {
                              if (!wQ) {
                                rQ.disconnect();
                                for (const QQ of TQ) removeEventListener(QQ, sQ, {
                                  capture: !0
                                })
                              }
                              QQ === zQ.id && (XQ = !0, qQ(!0))
                            }
                          }))
                        }
                      };
                    for (const QQ of TQ) addEventListener(QQ, sQ, {
                      capture: !0
                    });
                    YX((wQ => {
                      FQ("back-forward-cache", zQ.navigationId, zQ.navigationInteractionId, zQ.navigationURL, xX()), qQ = NX(QQ, zQ, dw, WQ.reportAllChanges), ZX((() => {
                        zQ.value = performance.now() - wQ.timeStamp, XQ = !0, qQ(!0)
                      }))
                    }))
                  }
                }))
              }((WQ => {
                QQ((QQ => {
                  let WQ = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: QQ.value
                  };
                  if (QQ.entries.length) {
                    const qQ = QQ.entries.at(-1),
                      TQ = QQ => QQ.name === qQ.url && (QQ.requestStart || QQ.startTime) <= qQ.startTime,
                      zQ = qQ.url && (aw.findLast(TQ) || performance.getEntriesByType("resource").findLast(TQ));
                    let sQ;
                    WQ.target = wQ.get(qQ), WQ.lcpEntry = qQ, qQ.url && (WQ.url = qQ.url), zQ && (WQ.lcpResourceEntry = zQ);
                    let FQ = 0,
                      PQ = 0;
                    if ("soft-navigation" !== QQ.navigationType ? (sQ = kX(), FQ = sQ?.activationStart ?? 0, PQ = sQ?.responseStart ?? 0) : (FQ = QQ.navigationStartTime || 0, sQ = XQ.u?.get(QQ.navigationId)), sQ) {
                      const XQ = Math.max(0, PQ - FQ),
                        wQ = Math.max(XQ, zQ ? (zQ.requestStart || zQ.startTime) - FQ : 0),
                        qQ = Math.min(QQ.value, Math.max(wQ, zQ ? zQ.responseEnd - FQ : 0));
                      WQ = {
                        ...WQ,
                        timeToFirstByte: XQ,
                        resourceLoadDelay: wQ - XQ,
                        resourceLoadDuration: qQ - wQ,
                        elementRenderDelay: QQ.value - qQ,
                        navigationEntry: sQ
                      }
                    }
                  }
                  return Object.assign(QQ, {
                    attribution: WQ
                  })
                })(WQ))
              }), WQ)
          }((QQ => {
            var WQ;
            const {
              elementRenderDelay: XQ,
              resourceLoadDelay: wQ,
              resourceLoadDuration: qQ,
              timeToFirstByte: TQ,
              target: zQ,
              url: sQ,
              lcpResourceEntry: FQ
            } = QQ.attribution, PQ = this.buildInitialValues(QQ);
            this.addIfPresent(PQ, "element_render_delay", XQ), this.addIfPresent(PQ, "resource_load_delay", wQ), this.addIfPresent(PQ, "resource_load_duration", qQ), this.addIfPresent(PQ, Aw, TQ);
            const gQ = this.buildInitialContext(QQ);
            this.addIfPresent(gQ, "element", zQ), (null === (WQ = this.webVitalConfig) || void 0 === WQ ? void 0 : WQ.trackAttributionSources) && (this.addIfPresent(gQ, "resource_url", sQ), this.addIfPresent(gQ, "resource_delivery_type", null === FQ || void 0 === FQ ? void 0 : FQ.deliveryType), this.addIfPresent(gQ, "resource_initiator_type", null === FQ || void 0 === FQ ? void 0 : FQ.initiatorType)), this.pushMeasurement(PQ, gQ)
          }), {
            reportAllChanges: null === (QQ = this.webVitalConfig) || void 0 === QQ ? void 0 : QQ.reportAllChanges
          })
        }
        measureTTFB() {
          var QQ;
          ! function(QQ) {
            ! function(QQ) {
              let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const XQ = qw(WQ);
              let wQ = Xw("TTFB"),
                qQ = NX(QQ, wQ, lw, WQ.reportAllChanges);
              hw((() => {
                const TQ = kX();
                if (TQ) {
                  const zQ = TQ.responseStart;
                  wQ.value = Math.max(zQ - OX(), 0), wQ.entries = [TQ], qQ(!0), YX((() => {
                    wQ = Xw("TTFB", 0, "back-forward-cache", wQ.navigationId, wQ.navigationInteractionId, wQ.navigationURL, xX()), qQ = NX(QQ, wQ, lw, WQ.reportAllChanges), qQ(!0)
                  })), XQ && ww(["soft-navigation"], (XQ => {
                    XQ.forEach((XQ => {
                      XQ.navigationId && (wQ = Xw("TTFB", 0, "soft-navigation", XQ.navigationId, XQ.interactionId, XQ.name, XQ.startTime), wQ.entries = [XQ], qQ = NX(QQ, wQ, lw, WQ.reportAllChanges), qQ(!0))
                    }))
                  }), WQ)
                }
              }))
            }((WQ => {
              QQ((QQ => {
                const WQ = QQ.entries[0];
                let XQ = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: WQ
                };
                if (QQ.entries.length && WQ instanceof PerformanceNavigationTiming) {
                  const wQ = WQ.activationStart || 0,
                    qQ = Math.max((WQ.workerStart || WQ.fetchStart || 0) - wQ, 0),
                    TQ = Math.max(WQ.domainLookupStart - wQ, 0),
                    zQ = Math.max(WQ.connectStart - wQ, 0),
                    sQ = Math.max(WQ.connectEnd - wQ, 0);
                  XQ = {
                    waitingDuration: qQ,
                    cacheDuration: TQ - qQ,
                    dnsDuration: zQ - TQ,
                    connectionDuration: sQ - zQ,
                    requestDuration: QQ.value - sQ,
                    navigationEntry: WQ
                  }
                }
                return Object.assign(QQ, {
                  attribution: XQ
                })
              })(WQ))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((QQ => {
            const {
              dnsDuration: WQ,
              connectionDuration: XQ,
              requestDuration: wQ,
              waitingDuration: qQ,
              cacheDuration: TQ
            } = QQ.attribution, zQ = this.buildInitialValues(QQ);
            this.addIfPresent(zQ, "dns_duration", WQ), this.addIfPresent(zQ, "connection_duration", XQ), this.addIfPresent(zQ, "request_duration", wQ), this.addIfPresent(zQ, "waiting_duration", qQ), this.addIfPresent(zQ, "cache_duration", TQ);
            const sQ = this.buildInitialContext(QQ);
            this.pushMeasurement(zQ, sQ)
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
          var WQ;
          const XQ = null !== (WQ = QW("com.grafana.faro.lastNavigationId", KQ)) && void 0 !== WQ ? WQ : CX;
          return {
            id: QQ.id,
            rating: QQ.rating,
            navigation_type: QQ.navigationType,
            navigation_entry_id: XQ
          }
        }
        pushMeasurement(QQ, WQ) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: QQ
          }, {
            context: WQ
          })
        }
        addIfPresent(QQ, WQ, XQ) {
          XQ && (QQ[WQ] = XQ)
        }
        addNumberIfDefined(QQ, WQ, XQ) {
          void 0 !== XQ && (QQ[WQ] = XQ)
        }
      },
      Ew = class extends WX {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = XX
        }
        initialize() {
          this.logDebug("Initializing"), new Rw(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Cw = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function uw() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const WQ of QQ)
        if ("traceparent" === WQ.name) {
          if (!Cw.test(WQ.description)) continue;
          const [, QQ, XQ] = WQ.description.split("-");
          if (null != QQ && null != XQ) return {
            traceId: QQ,
            spanId: XQ
          };
          break
        }
    }

    function Lw(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: XQ,
        monoNow: wQ
      } = WQ;
      return Math.min(XQ, XQ - (wQ - QQ))
    }

    function kw(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [XQ, wQ] of Object.entries(WQ)) {
        const WQ = QQ[XQ];
        return null != WQ && (iQ(wQ) ? wQ.includes(WQ) : WQ === wQ)
      }
      return !0
    }

    function fw(QQ) {
      const {
        connectEnd: WQ,
        connectStart: XQ,
        decodedBodySize: wQ,
        domainLookupEnd: qQ,
        domainLookupStart: TQ,
        duration: zQ,
        encodedBodySize: sQ,
        fetchStart: FQ,
        initiatorType: PQ,
        name: gQ,
        nextHopProtocol: JQ,
        redirectEnd: rQ,
        redirectStart: IQ,
        renderBlockingStatus: jQ,
        requestStart: BQ,
        responseEnd: yQ,
        responseStart: VQ,
        responseStatus: DQ,
        secureConnectionStart: pQ,
        transferSize: GQ,
        workerStart: UQ
      } = QQ;
      return {
        name: gQ,
        httpHost: tw(gQ),
        duration: ow(zQ),
        tcpHandshakeTime: ow(WQ - XQ),
        dnsLookupTime: ow(qQ - TQ),
        tlsNegotiationTime: ow(WQ - pQ),
        responseStatus: ow(DQ),
        redirectTime: ow(rQ - IQ),
        requestTime: ow(VQ - BQ),
        responseTime: ow(yQ - VQ),
        fetchTime: ow(yQ - FQ),
        serviceWorkerTime: ow(UQ > 0 ? FQ - UQ : 0),
        decodedBodySize: ow(wQ),
        encodedBodySize: ow(sQ),
        cacheHitStatus: function() {
          let QQ = "fullLoad";
          0 === GQ ? wQ > 0 && (QQ = "cache") : null != DQ ? 304 === DQ && (QQ = "conditionalFetch") : sQ > 0 && GQ < sQ && (QQ = "conditionalFetch");
          return QQ
        }(),
        renderBlockingStatus: ow(jQ),
        protocol: JQ,
        initiatorType: PQ,
        visibilityState: document.visibilityState,
        ttfb: ow(VQ - BQ),
        transferSize: ow(GQ)
      }
    }

    function Sw(QQ) {
      const {
        activationStart: WQ,
        domComplete: XQ,
        domContentLoadedEventEnd: wQ,
        domContentLoadedEventStart: qQ,
        domInteractive: TQ,
        fetchStart: zQ,
        loadEventEnd: sQ,
        loadEventStart: FQ,
        responseStart: PQ,
        type: gQ
      } = QQ, JQ = function() {
        var QQ;
        return null != (null === (QQ = performance.timing) || void 0 === QQ ? void 0 : QQ.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return gW(gW({}, fw(QQ)), {}, {
        pageLoadTime: ow(XQ - zQ),
        documentParsingTime: ow(JQ ? TQ - JQ : null),
        domProcessingTime: ow(XQ - TQ),
        domContentLoadHandlerTime: ow(wQ - qQ),
        onLoadTime: ow(sQ - FQ),
        ttfb: ow(Math.max(PQ - (null !== WQ && void 0 !== WQ ? WQ : 0), 0)),
        type: gQ
      })
    }

    function tw(QQ) {
      try {
        return new URL(QQ).host || CX
      } catch (WQ) {
        return CX
      }
    }

    function ow(QQ) {
      return null == QQ ? CX : "number" === typeof QQ ? Math.round(QQ > 0 ? QQ : 0).toString() : QQ.toString()
    }
    const ew = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function nw(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      try {
        var sQ = QQ[TQ](zQ),
          FQ = sQ.value
      } catch (QQ) {
        return void XQ(QQ)
      }
      sQ.done ? WQ(FQ) : Promise.resolve(FQ).then(wQ, qQ)
    }

    function xw(QQ) {
      return function() {
        var WQ = this,
          XQ = arguments;
        return new Promise((function(wQ, qQ) {
          var TQ = QQ.apply(WQ, XQ);

          function zQ(QQ) {
            nw(TQ, wQ, qQ, zQ, sQ, "next", QQ)
          }

          function sQ(QQ) {
            nw(TQ, wQ, qQ, zQ, sQ, "throw", QQ)
          }
          zQ(void 0)
        }))
      }
    }
    const Yw = new DX;
    var Nw = class extends WX {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = XX
      }
      initialize() {
        var QQ = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let WQ = !1;
        const XQ = () => {
          ! function(QQ) {
            if ("complete" === document.readyState) QQ();
            else {
              const WQ = () => {
                "complete" === document.readyState && (QQ(), document.removeEventListener("readystatechange", WQ))
              };
              document.addEventListener("readystatechange", WQ)
            }
          }(xw((function*() {
            if (WQ) return;
            const XQ = QQ.api.pushEvent,
              {
                faroNavigationId: wQ
              } = yield function(QQ) {
                let WQ;
                const XQ = new Promise((QQ => {
                  WQ = QQ
                }));
                return new PerformanceObserver((XQ => {
                  var wQ;
                  const [qQ] = XQ.getEntries();
                  if (null == qQ || ZQ(qQ.name)) return;
                  const TQ = qQ.toJSON();
                  let zQ = uw(null === TQ || void 0 === TQ ? void 0 : TQ.serverTiming);
                  const sQ = null !== (wQ = QW("com.grafana.faro.lastNavigationId", KQ)) && void 0 !== wQ ? wQ : CX,
                    FQ = gW(gW({}, Sw(TQ)), {}, {
                      faroNavigationId: VW(),
                      faroPreviousNavigationId: sQ
                    });
                  WW("com.grafana.faro.lastNavigationId", FQ.faroNavigationId, KQ), QQ("faro.performance.navigation", FQ, void 0, {
                    spanContext: zQ,
                    timestampOverwriteMs: Lw(TQ.startTime)
                  }), WQ(FQ)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), XQ
              }(XQ);
            WQ || null == wQ || function(QQ, WQ, XQ, wQ) {
              const qQ = wQ.trackResources;
              new PerformanceObserver((wQ => {
                const TQ = wQ.getEntries(),
                  zQ = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const sQ of TQ) {
                  if (ZQ(sQ.name)) continue;
                  null === XQ || void 0 === XQ || XQ.notify({
                    type: "resource"
                  });
                  const wQ = sQ.toJSON();
                  let TQ = uw(null === wQ || void 0 === wQ ? void 0 : wQ.serverTiming);
                  (null == qQ && kw(wQ, ew) || qQ) && WQ("faro.performance.resource", gW(gW({}, fw(wQ)), {}, {
                    faroNavigationId: QQ,
                    faroResourceId: VW()
                  }), void 0, {
                    spanContext: TQ,
                    timestampOverwriteMs: Lw(wQ.startTime, zQ)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(wQ, XQ, Yw, QQ.config)
          })))
        };
        this.cancelInitialization = () => {
          WQ = !0, document.removeEventListener("prerenderingchange", XQ)
        }, document.prerendering ? document.addEventListener("prerenderingchange", XQ, {
          once: !0
        }) : XQ()
      }
      destroy() {
        var QQ;
        null === (QQ = this.cancelInitialization) || void 0 === QQ || QQ.call(this), this.cancelInitialization = void 0
      }
    };
    const Zw = "data-faro-user-action-name",
      Ow = Zw.replace(/-name$/, "-timeout"),
      Kw = 1e3;

    function mw(QQ) {
      return `data-${(QQ.startsWith("data-")?QQ.slice(5):QQ).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Mw(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eW;
      if (void 0 === QQ) return WQ;
      let wQ = NaN;
      try {
        wQ = "string" === typeof QQ && "" === QQ.trim() ? NaN : Number(QQ)
      } catch (qQ) {}
      return !Number.isFinite(wQ) || wQ <= 0 ? (XQ(`initialActivityTimeout must be a finite number greater than zero; using ${WQ} ms`), WQ) : wQ > 1e3 ? (XQ(`initialActivityTimeout cannot exceed ${Kw} ms; clamping to the maximum`), Kw) : wQ
    }

    function Qq(QQ, WQ, XQ) {
      return void 0 !== QQ && window.clearTimeout(QQ), window.setTimeout((() => {
        WQ()
      }), XQ)
    }

    function Wq(QQ) {
      return QQ.type === VX
    }
    let Xq, wq;

    function qq() {
      return Xq || (Xq = new DX), wq || (wq = new MutationObserver(((QQ, WQ) => {
        Xq.notify({
          type: "dom-mutation"
        })
      })), wq.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Xq
    }
    const Tq = "fetch",
      zq = "xhr";
    let sq, Fq, Pq, gq, Jq = !1;

    function rq() {
      if (sq) return sq;

      function QQ(QQ) {
        sq.notify({
          type: yX,
          request: QQ
        })
      }

      function WQ(QQ) {
        sq.notify({
          type: VX,
          request: QQ
        })
      }
      return sq = new DX, Jq || (! function(QQ) {
        let {
          onRequestEnd: WQ,
          onRequestStart: XQ
        } = QQ;
        Pq || (Pq = window.fetch);
        window.fetch = function() {
          var QQ, wQ;
          const qQ = null !== (QQ = OQ(arguments[0])) && void 0 !== QQ ? QQ : "",
            TQ = ZQ(qQ),
            zQ = (null !== (wQ = arguments[1]) && void 0 !== wQ ? wQ : {}).method,
            sQ = VW();
          return TQ || XQ({
            url: qQ,
            method: zQ,
            requestId: sQ,
            apiType: Tq
          }), Pq.apply(this, arguments).then((QQ => (TQ || WQ({
            url: qQ,
            method: zQ,
            requestId: sQ,
            apiType: Tq
          }), QQ))).catch((QQ => {
            throw TQ || WQ({
              url: qQ,
              method: zQ,
              requestId: sQ,
              apiType: Tq
            }), QQ
          }))
        }
      }({
        onRequestStart: QQ,
        onRequestEnd: WQ
      }), function(QQ) {
        let {
          onRequestStart: WQ,
          onRequestEnd: XQ
        } = QQ;
        Fq || (Fq = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const QQ = arguments[1],
            wQ = ZQ(QQ),
            qQ = arguments[0],
            TQ = VW();
          this.addEventListener("loadstart", (function() {
            wQ || WQ({
              url: QQ,
              method: qQ,
              requestId: TQ,
              apiType: zq
            })
          })), this.addEventListener("load", (function() {
            wQ || XQ({
              url: QQ,
              method: qQ,
              requestId: TQ,
              apiType: zq
            })
          })), this.addEventListener("error", (function() {
            wQ || XQ({
              url: QQ,
              method: qQ,
              requestId: TQ,
              apiType: zq
            })
          })), this.addEventListener("abort", (function() {
            wQ || XQ({
              url: QQ,
              method: qQ,
              requestId: TQ,
              apiType: zq
            })
          })), Fq.apply(this, arguments)
        }
      }({
        onRequestStart: QQ,
        onRequestEnd: WQ
      }), Jq = !0), sq
    }
    let Iq, jq = !1;
    let Bq = function(QQ) {
      return QQ[QQ.Started = 0] = "Started", QQ[QQ.Halted = 1] = "Halted", QQ[QQ.Cancelled = 2] = "Cancelled", QQ[QQ.Ended = 3] = "Ended", QQ
    }({});
    var yq = class {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = QQ, this.logDebug = WQ, this.initialActivityTimeout = XQ, this.http = rq(), this.dom = qq(), this.perf = (gq || (gq = new DX), jq || (Iq = Yw.subscribe((QQ => {
          "resource" === QQ.type && gq.notify({
            type: "resource-entry"
          })
        })), jq = !0), gq), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new DX).merge(this.http, this.dom, this.perf).takeWhile((() => [Bq.Started, Bq.Halted].includes(this.userAction.getState()))).filter((QQ => !!(this.userAction.getState() !== Bq.Halted || Wq(QQ) && this.runningRequests.has(QQ.request.requestId)))).subscribe((QQ => {
          (function(QQ) {
            return QQ.type === yX
          })(QQ) && this.runningRequests.set(QQ.request.requestId, QQ.request), Wq(QQ) && this.runningRequests.delete(QQ.request.requestId), Wq(QQ) ? this.userAction.getState() === Bq.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((QQ => [Bq.Ended, Bq.Cancelled].includes(QQ))).first().subscribe((() => this.cleanup())), this.startupTid = Qq(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Bq.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Bq.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Qq(this.haltTid, (() => {
          this.userAction.getState() === Bq.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var QQ, WQ;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (QQ = this.allMonitorsSub) || void 0 === QQ || QQ.unsubscribe(), null === (WQ = this.stateSub) || void 0 === WQ || WQ.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(QQ) {
        void 0 !== QQ && window.clearTimeout(QQ)
      }
    };

    function Vq(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eW;
      var XQ;
      const {
        api: wQ,
        config: qQ,
        internalLogger: TQ
      } = QQ, zQ = Mw(null === (XQ = qQ.userActionsInstrumentation) || void 0 === XQ ? void 0 : XQ.initialActivityTimeout, 100, WQ);
      return {
        processUserEvent: function(QQ) {
          var WQ, XQ;
          const TQ = null !== (WQ = null === (XQ = qQ.userActionsInstrumentation) || void 0 === XQ ? void 0 : XQ.dataAttributeName) && void 0 !== WQ ? WQ : Zw,
            zQ = QQ.target;
          if (!(zQ instanceof Element)) return;
          const sQ = function(QQ, WQ) {
              let XQ = QQ;
              for (; XQ;) {
                if (XQ.hasAttribute(WQ)) return XQ;
                XQ = XQ.parentElement
              }
              return null
            }(zQ, mw(TQ)),
            FQ = function(QQ, WQ) {
              if (!QQ) return;
              const XQ = function(QQ) {
                  return mw(QQ).slice(5).replace(/-(.)/g, ((QQ, WQ) => WQ.toUpperCase()))
                }(WQ),
                wQ = QQ.dataset;
              for (const qQ in wQ)
                if (qQ === XQ) return wQ[qQ]
            }(sQ, TQ);
          if (!sQ || !FQ) return;
          const PQ = function(QQ, WQ) {
            const XQ = QQ.getAttribute(function(QQ) {
              const WQ = mw(QQ);
              return WQ.endsWith("-name") ? `${WQ.slice(0,-5)}-timeout` : `${WQ}-timeout`
            }(WQ));
            return null === XQ ? void 0 : Number(XQ)
          }(sQ, TQ);
          wQ.startUserAction(FQ, {}, {
            triggerName: QQ.type,
            initialActivityTimeout: PQ
          })
        },
        processUserActionStarted: function(QQ, XQ) {
          const wQ = QQ,
            qQ = Mw(XQ, zQ, WQ);
          new yq(wQ, TQ.debug, qQ).attach()
        }
      }
    }
    const Dq = "user_action_start",
      pq = {
        Normal: "normal",
        Critical: "critical"
      };
    var Gq = class {
        constructor() {
          this.buffer = []
        }
        addItem(QQ) {
          this.buffer.push(QQ)
        }
        flushBuffer(QQ) {
          if (hQ(QQ))
            for (const WQ of this.buffer) QQ(WQ);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Uq = class extends DX {
        constructor(QQ) {
          let {
            name: WQ,
            parentId: XQ,
            trigger: wQ,
            transports: qQ,
            attributes: TQ,
            trackUserActionsExcludeItem: zQ,
            importance: sQ = pq.Normal,
            pushEvent: FQ
          } = QQ;
          super(), this.name = WQ, this.attributes = TQ, this.id = VW(), this.trigger = wQ, this.parentId = null !== XQ && void 0 !== XQ ? XQ : this.id, this.trackUserActionsExcludeItem = zQ, this.importance = sQ, this._pushEvent = FQ, this._itemBuffer = new Gq, this._transports = qQ, this._state = 0, this._start()
        }
        addItem(QQ) {
          return 0 === this._state && (this._itemBuffer.addItem(QQ), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = rW(), this._startTimeMono = IW())
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
          const QQ = rW(),
            WQ = IW() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((QQ => {
            if (function(QQ, WQ) {
                return (null === WQ || void 0 === WQ ? void 0 : WQ(QQ)) || "measurement" === QQ.type && "web-vitals" === QQ.payload.type
              }(QQ, this.trackUserActionsExcludeItem)) return void this._transports.execute(QQ);
            const WQ = mW(mW({}, QQ), {}, {
              payload: mW(mW({}, QQ.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(WQ)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", mW({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: QQ.toString(),
            userActionDuration: WQ.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, uW(this.attributes)), void 0, {
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
    const bq = new DX;

    function vq(QQ, WQ) {
      return !!QQ && (0 === (null === QQ || void 0 === QQ ? void 0 : QQ.getState()) && (QQ.addItem(WQ), !0))
    }
    var dq = class extends WX {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = XX
        }
        initialize() {
          const {
            processUserEvent: QQ,
            processUserActionStarted: WQ
          } = Vq(BQ, (QQ => this.logWarn(QQ)));
          this._processUserEvent = QQ, this._processKeydown = WQ => {
            [" ", "Enter"].includes(WQ.key) && QQ(WQ)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = bq.subscribe((QQ => {
            let {
              type: XQ,
              userAction: wQ,
              initialActivityTimeout: qQ
            } = QQ;
            "user_action_start" === XQ && WQ(wQ, qQ)
          }))
        }
        destroy() {
          var QQ;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (QQ = this._userActionSub) || void 0 === QQ || QQ.unsubscribe()
        }
      },
      Hq = class extends WX {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = XX, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(QQ) {
          const WQ = {
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
          this.api.pushEvent("securitypolicyviolation", uW(WQ))
        }
      };
    var aq = class extends DX {
      constructor(QQ, WQ) {
        var XQ, wQ, qQ, TQ;
        super(), this._tracking = !1, this.eventsObservable = QQ, this._options = {
          inactivityMs: null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.inactivityMs) && void 0 !== XQ ? XQ : 100,
          drainTimeoutMs: null !== (wQ = null === WQ || void 0 === WQ ? void 0 : WQ.drainTimeoutMs) && void 0 !== wQ ? wQ : 1e4,
          isOperationStart: null !== (qQ = null === WQ || void 0 === WQ ? void 0 : WQ.isOperationStart) && void 0 !== qQ ? qQ : () => {},
          isOperationEnd: null !== (TQ = null === WQ || void 0 === WQ ? void 0 : WQ.isOperationEnd) && void 0 !== TQ ? TQ : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((QQ => {
          var WQ;
          this._lastEventTime = IW(), null === (WQ = this._currentEvents) || void 0 === WQ || WQ.push(QQ);
          const XQ = this._options.isOperationStart(QQ);
          var wQ;
          XQ && (null === (wQ = this._activeOperations) || void 0 === wQ || wQ.set(XQ, !0));
          const qQ = this._options.isOperationEnd(QQ);
          var TQ;
          qQ && (null === (TQ = this._activeOperations) || void 0 === TQ || TQ.delete(qQ));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = IW(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let QQ;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), QQ = this.hasActiveOperations() ? IW() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: QQ
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = lq(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = lq(this._drainTid, (() => {
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

    function lq(QQ, WQ, XQ) {
      return QQ && clearTimeout(QQ), QQ = setTimeout((() => {
        WQ()
      }), XQ)
    }
    let hq;
    const iq = new Set,
      cq = new Map;
    let Aq, Rq, Eq, Cq, uq, Lq, kq, fq, Sq = !1;
    var tq = class extends WX {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = XX
      }
      initialize() {
        const QQ = rq(),
          WQ = qq(),
          XQ = function() {
            function QQ(QQ, WQ) {
              const XQ = null !== WQ && void 0 !== WQ ? WQ : location.href;
              XQ !== Rq && (Aq.notify({
                type: "url-change",
                from: Rq,
                to: XQ,
                trigger: QQ
              }), Rq = XQ)
            }
            if (Aq || (Aq = new DX, Rq = location.href), !Sq)
              if ("navigation" in window && "NavigateEvent" in window) {
                kq = WQ => {
                  try {
                    const XQ = null === WQ || void 0 === WQ ? void 0 : WQ.destination;
                    (null === XQ || void 0 === XQ ? void 0 : XQ.sameDocument) && "string" === typeof XQ.url && QQ("navigate", XQ.url)
                  } catch (XQ) {}
                }, window.navigation.addEventListener("navigate", kq);
                const WQ = window.NavigateEvent;
                WQ && WQ.prototype && "function" === typeof WQ.prototype.intercept && (fq || (fq = WQ.prototype.intercept), WQ.prototype.intercept = function(WQ) {
                  try {
                    const WQ = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      XQ = null === this || void 0 === this ? void 0 : this.destination;
                    WQ && XQ && !1 === XQ.sameDocument && "string" === typeof XQ.url && QQ("navigate-intercept", XQ.url)
                  } catch (XQ) {}
                  return fq.call(this, WQ)
                }), Sq = !0
              } else Eq || (Eq = window.history.pushState), window.history.pushState = function() {
                for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
                const qQ = Eq.apply(window.history, XQ);
                return QQ("pushState"), qQ
              }, Cq || (Cq = window.history.replaceState), window.history.replaceState = function() {
                for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
                const qQ = Cq.apply(window.history, XQ);
                return QQ("replaceState"), qQ
              }, uq = () => QQ("popstate"), Lq = () => QQ("hashchange"), window.addEventListener("popstate", uq), window.addEventListener("hashchange", Lq), Sq = !0;
            return Aq
          }(),
          wQ = (qQ = ["pointerdown", "keydown"], hq || (hq = new DX), qQ.forEach((QQ => {
            if (!iq.has(QQ)) {
              const WQ = () => {
                hq.notify({
                  type: "interaction",
                  name: QQ
                })
              };
              window.addEventListener(QQ, WQ), iq.add(QQ), cq.set(QQ, WQ)
            }
          })), hq);
        var qQ;
        const TQ = new aq((new DX).merge(QQ, WQ, XQ), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: QQ => function(QQ) {
            return QQ.type === yX
          }(QQ) ? QQ.request.requestId : void 0,
          isOperationEnd: QQ => function(QQ) {
            return QQ.type === VX
          }(QQ) ? QQ.request.requestId : void 0
        });
        TQ.filter((QQ => "tracking-ended" === QQ.message)).subscribe((QQ => {
          var WQ, XQ;
          if ((null === (WQ = QQ.events) || void 0 === WQ ? void 0 : WQ.some((QQ => "url-change" === QQ.type))) && (null === (XQ = QQ.events) || void 0 === XQ ? void 0 : XQ.some((QQ => "dom-mutation" === QQ.type)))) {
            var wQ;
            const WQ = null === (wQ = QQ.events) || void 0 === wQ ? void 0 : wQ.find((QQ => "url-change" === QQ.type));
            BQ.api.pushEvent("faro.navigation", {
              fromUrl: null === WQ || void 0 === WQ ? void 0 : WQ.from,
              toUrl: null === WQ || void 0 === WQ ? void 0 : WQ.to,
              sameDocument: String(!0),
              duration: QQ.duration
            })
          }
        })), wQ.subscribe((() => {
          TQ.startTracking()
        }))
      }
    };

    function oq() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const WQ = [new dq, new EX, new Ew, new wX, new uX, new tq];
      return !1 !== QQ.enablePerformanceInstrumentation && WQ.unshift(new Nw), !1 !== QQ.enableContentSecurityPolicyInstrumentation && WQ.push(new Hq), !1 !== QQ.captureConsole && WQ.push(new AX), WQ
    }
    var eq = XQ(7054);
    let nq, xq;

    function Yq() {
      const QQ = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return nq === QQ && xq || (xq = new eq.UAParser(QQ).getResult(), nq = QQ), xq
    }
    const Nq = () => {
        const {
          browser: QQ,
          os: WQ,
          ua: XQ
        } = Yq(), {
          name: wQ,
          version: qQ
        } = QQ, {
          name: TQ,
          version: zQ
        } = WQ, sQ = navigator.language, FQ = XQ.includes("Mobi"), PQ = function() {
          if (!wQ || !qQ) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== wQ && void 0 !== wQ ? wQ : CX,
            version: null !== qQ && void 0 !== qQ ? qQ : CX,
            os: `${null!==TQ&&void 0!==TQ?TQ:CX} ${null!==zQ&&void 0!==zQ?zQ:CX}`,
            userAgent: null !== XQ && void 0 !== XQ ? XQ : CX,
            language: null !== sQ && void 0 !== sQ ? sQ : CX,
            mobile: FQ,
            brands: null !== PQ && void 0 !== PQ ? PQ : CX,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Zq = () => {
        const {
          name: QQ,
          version: WQ
        } = Yq().os;
        if (!QQ && !WQ) return {};
        const XQ = {};
        return QQ && (XQ.name = QQ), WQ && (XQ.version = WQ), {
          os: XQ
        }
      };

    function Oq(QQ) {
      var WQ, XQ, wQ;
      return {
        id: null !== (WQ = null === (XQ = BQ.config) || void 0 === XQ || null === (XQ = XQ.sessionTracking) || void 0 === XQ || null === (wQ = XQ.generateSessionId) || void 0 === wQ ? void 0 : wQ.call(XQ)) && void 0 !== WQ ? WQ : VW(),
        attributes: QQ
      }
    }
    const Kq = () => ({
      sdk: {
        name: "faro-web",
        version: XX
      }
    });
    var mq = class extends QX {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Mq = function(QQ) {
      return QQ.EXCEPTION = "exception", QQ.LOG = "log", QQ.MEASUREMENT = "measurement", QQ.TRACE = "trace", QQ.EVENT = "event", QQ
    }({});
    const QT = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function WT(QQ, WQ) {
      var XQ, wQ;
      if (void 0 === WQ) return QQ;
      if (void 0 === QQ) return {
        resourceSpans: WQ
      };
      const qQ = null === (XQ = QQ.resourceSpans) || void 0 === XQ ? void 0 : XQ[0];
      if (void 0 === qQ) return QQ;
      const TQ = (null === qQ || void 0 === qQ ? void 0 : qQ.scopeSpans) || [],
        zQ = (null === WQ || void 0 === WQ || null === (wQ = WQ[0]) || void 0 === wQ ? void 0 : wQ.scopeSpans) || [];
      return mW(mW({}, QQ), {}, {
        resourceSpans: [mW(mW({}, qQ), {}, {
          scopeSpans: [...TQ, ...zQ]
        })]
      })
    }

    function XT(QQ) {
      let WQ = {
        meta: {}
      };
      return void 0 !== QQ[0] && (WQ.meta = QQ[0].meta), QQ.forEach((QQ => {
        switch (QQ.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const XQ = QT[QQ.type],
              wQ = WQ[XQ];
            WQ = mW(mW({}, WQ), {}, {
              [XQ]: void 0 === wQ ? [QQ.payload] : [...wQ, QQ.payload]
            });
            break
          }
          case "trace":
            WQ = mW(mW({}, WQ), {}, {
              traces: WT(WQ.traces, QQ.payload.resourceSpans)
            })
        }
      })), WQ
    }
    var wT = class extends mq {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = QQ, this.name = "@grafana/faro-web-sdk:transport-console", this.version = XX
      }
      send(QQ) {
        var WQ;
        return this.unpatchedConsole[null !== (WQ = this.options.level) && void 0 !== WQ ? WQ : pX.DEBUG]("New event", XT([QQ]))
      }
    };
    const qT = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      TT = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      zT = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      sT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      FT = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      PT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function gT(QQ) {
      let {
        weekday: WQ,
        day: XQ,
        month: wQ,
        year: qQ,
        hour: TQ,
        minute: zQ,
        second: sQ
      } = QQ;
      if (qQ < 1900 || XQ < 1 || TQ > 23 || zQ > 59 || sQ > 60) return;
      const FQ = 60 === sQ,
        PQ = new Date(0);
      return PQ.setUTCFullYear(qQ, wQ, XQ), PQ.setUTCHours(TQ, zQ, FQ ? 59 : sQ, 0), PQ.getUTCDay() === WQ && PQ.getUTCDate() === XQ && PQ.getUTCMonth() === wQ && PQ.getUTCFullYear() === qQ && PQ.getUTCHours() === TQ && PQ.getUTCMinutes() === zQ && PQ.getUTCSeconds() === (FQ ? 59 : sQ) ? PQ.getTime() + (FQ ? 1e3 : 0) : void 0
    }
    var JT = class {
      constructor(QQ) {
        this.options = QQ, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var QQ = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const WQ = this.sequence++;
        let XQ = !1;
        return {
          deliver: function() {
            var XQ = xw((function*(XQ) {
              const wQ = QQ.options.getNow();
              let qQ, TQ = 0;
              for (;;) {
                var zQ, sQ, FQ;
                const PQ = QQ.options.retry.maxAttempts - TQ,
                  gQ = yield QQ.runAttempt((() => XQ(PQ, QQ.unloading)), TQ > 0);
                if (TQ += gQ.attemptsMade, "success" === gQ.kind) return {
                  kind: "success",
                  attempts: TQ,
                  elapsedTimeMs: QQ.options.getNow() - wQ
                };
                if (qQ = gQ.failure, "terminal" === gQ.kind || QQ.unloading) return {
                  kind: "terminal",
                  attempts: TQ,
                  elapsedTimeMs: QQ.options.getNow() - wQ,
                  failure: qQ
                };
                if (TQ >= QQ.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: TQ,
                  elapsedTimeMs: QQ.options.getNow() - wQ,
                  failure: qQ,
                  reason: "retries-exhausted"
                };
                if (null != gQ.retryAfterMs && gQ.retryAfterMs > QQ.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: TQ,
                  elapsedTimeMs: QQ.options.getNow() - wQ,
                  failure: qQ,
                  reason: "retry-after-too-long"
                };
                const JQ = Math.min(null !== (zQ = gQ.retryAfterMs) && void 0 !== zQ ? zQ : QQ.options.retry.initialBackoffMs * Math.pow(QQ.options.retry.backoffMultiplier, TQ - 1), QQ.options.retry.maxBackoffMs);
                if (null === (sQ = (FQ = QQ.options).onRetry) || void 0 === sQ || sQ.call(FQ, JQ, TQ + 1), yield QQ.waitForTurn(WQ, JQ)) {
                  const WQ = QQ.options.retry.maxAttempts - TQ,
                    qQ = yield QQ.runAttempt((() => XQ(WQ, !0)));
                  return TQ += qQ.attemptsMade, {
                    kind: "success" === qQ.kind ? "success" : "terminal",
                    attempts: TQ,
                    elapsedTimeMs: QQ.options.getNow() - wQ,
                    failure: "success" === qQ.kind ? void 0 : qQ.failure
                  }
                }
              }
            }));
            return function(QQ) {
              return XQ.apply(this, arguments)
            }
          }(),
          release: () => {
            XQ || (XQ = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const QQ = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const WQ of QQ) WQ.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((XQ, wQ) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const WQ = () => {
                this.inProgress--, this.runNextAttempt()
              };
              QQ().then((QQ => {
                WQ(), XQ(QQ)
              }), (QQ => {
                WQ(), wQ(QQ)
              }))
            },
            isRedelivery: WQ
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const QQ = this.options.getNow(),
            WQ = this.attemptQueue.findIndex((WQ => {
              let {
                isRedelivery: XQ
              } = WQ;
              return this.unloading || !XQ || QQ >= this.nextSendAt
            }));
          if (WQ < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - QQ)));
          const [XQ] = this.attemptQueue.splice(WQ, 1);
          XQ.isRedelivery && !this.unloading && (this.nextSendAt = QQ + 1), XQ.run()
        }
      }
      waitForTurn(QQ, WQ) {
        const XQ = Math.min(WQ * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((WQ => {
          this.waiting.push({
            sequence: QQ,
            readyAt: this.options.getNow() + XQ,
            resolve: WQ
          }), this.waiting.sort(((QQ, WQ) => QQ.readyAt === WQ.readyAt ? QQ.sequence - WQ.sequence : QQ.readyAt - WQ.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const QQ = this.waiting[0],
          WQ = QQ.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const WQ = this.waiting.indexOf(QQ);
          WQ >= 0 && this.waiting.splice(WQ, 1), QQ.resolve(!1), this.scheduleNext()
        }), Math.max(0, WQ - this.options.getNow()))
      }
    };

    function rT(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if ({}.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.includes(wQ)) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.includes(XQ) || {}.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function IT(QQ) {
      const {
        size: WQ,
        concurrency: XQ
      } = QQ, wQ = [];
      let qQ = 0;
      const TQ = () => {
        if (qQ < XQ && wQ.length) {
          const {
            producer: QQ,
            resolve: WQ,
            reject: XQ
          } = wQ.shift();
          qQ++, QQ().then((QQ => {
            qQ--, TQ(), WQ(QQ)
          }), (QQ => {
            qQ--, TQ(), XQ(QQ)
          }))
        }
      };
      return {
        add: QQ => {
          if (wQ.length + qQ >= WQ) throw new Error("Task buffer full");
          return new Promise(((WQ, XQ) => {
            wQ.push({
              producer: QQ,
              resolve: WQ,
              reject: XQ
            }), TQ()
          }))
        }
      }
    }
    const jT = ["headers"],
      BT = ["keepalive", "signal"],
      yT = new Set([408, 425, 429, 500, 502, 503, 504]),
      VT = new Set([429, 503]);
    let DT = 0,
      pT = 0;
    var GT = class extends Error {};
    var UT = class extends mq {
      constructor(QQ) {
        var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ;
        super(), this.options = QQ, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = XX, this.pendingCustomSends = 0, this.getNow = null !== (WQ = QQ.getNow) && void 0 !== WQ ? WQ : Date.now, this.requestTimeoutMs = null !== (XQ = QQ.requestTimeoutMs) && void 0 !== XQ ? XQ : 1e4, this.compressionEnabled = null !== (wQ = QQ.requestCompression) && void 0 !== wQ && wQ && "undefined" !== typeof CompressionStream, QQ.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new JT({
          bufferSize: null !== (qQ = QQ.bufferSize) && void 0 !== qQ ? qQ : 30,
          concurrency: null !== (TQ = QQ.concurrency) && void 0 !== TQ ? TQ : 5,
          retry: {
            maxAttempts: null !== (zQ = null === (sQ = QQ.retry) || void 0 === sQ ? void 0 : sQ.maxAttempts) && void 0 !== zQ ? zQ : 3,
            initialBackoffMs: null !== (FQ = null !== (PQ = null === (gQ = QQ.retry) || void 0 === gQ ? void 0 : gQ.initialBackoffMs) && void 0 !== PQ ? PQ : QQ.defaultRateLimitBackoffMs) && void 0 !== FQ ? FQ : 1e3,
            maxBackoffMs: null !== (JQ = null === (rQ = QQ.retry) || void 0 === rQ ? void 0 : rQ.maxBackoffMs) && void 0 !== JQ ? JQ : 3e4,
            backoffMultiplier: null !== (IQ = null === (jQ = QQ.retry) || void 0 === jQ ? void 0 : jQ.backoffMultiplier) && void 0 !== IQ ? IQ : 2
          },
          getNow: this.getNow,
          getRandom: null !== (BQ = QQ.getRandom) && void 0 !== BQ ? BQ : Math.random,
          onRetry: (QQ, WQ) => {
            this.logDebug(`Retrying failed request after ${QQ}ms. Attempt ${WQ}.`)
          }
        }), this.customPromiseBuffer = IT({
          size: null !== (yQ = QQ.bufferSize) && void 0 !== yQ ? yQ : 30,
          concurrency: null !== (VQ = QQ.concurrency) && void 0 !== VQ ? VQ : 5
        }), this.defaultPromiseBuffer = {
          add: QQ => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(QQ);
            const WQ = this.deliveryQueue.reserve();
            if (!WQ) throw new Error("Task buffer full");
            return this.runBufferedTask(WQ, QQ)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (QQ => {
          QQ.persisted && this.deliveryQueue.resume()
        })))
      }
      send(QQ) {
        var WQ = this;
        return xw((function*() {
          const XQ = WQ.promiseBuffer;
          if (XQ !== WQ.defaultPromiseBuffer || XQ.add !== WQ.defaultBufferAdd) {
            WQ.pendingCustomSends++;
            try {
              yield XQ.add((() => WQ.deliver(QQ)))
            } catch (wQ) {
              WQ.logError("Permanent delivery failure", {
                error: wQ,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              WQ.pendingCustomSends--
            }
          } else yield WQ.deliver(QQ)
        }))()
      }
      runBufferedTask(QQ, WQ) {
        return xw((function*() {
          let XQ;
          try {
            return yield QQ.deliver(xw((function*() {
              return XQ = yield WQ(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), XQ
          } finally {
            QQ.release()
          }
        }))()
      }
      deliver(QQ) {
        var WQ = this;
        return xw((function*() {
          const XQ = WQ.deliveryQueue.reserve();
          if (XQ) try {
            const wQ = yield WQ.prepareRequest(QQ), qQ = yield XQ.deliver(((QQ, XQ) => WQ.performAttempt(wQ, QQ, XQ)));
            "terminal" === qQ.kind && WQ.logError("retries-exhausted" === qQ.reason ? "Delivery retries exhausted" : "Permanent delivery failure", gW(gW({}, qQ.failure), {}, {
              reason: qQ.reason,
              attempts: qQ.attempts,
              elapsedTimeMs: qQ.elapsedTimeMs
            }))
          } catch (wQ) {
            WQ.logError("Permanent delivery failure", {
              error: wQ,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            XQ.release()
          } else WQ.logError("Permanent delivery failure", {
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
        var WQ = this;
        return xw((function*() {
          var XQ, wQ;
          const qQ = XT(QQ),
            TQ = null === (XQ = qQ.meta.session) || void 0 === XQ ? void 0 : XQ.id,
            zQ = JSON.stringify(qQ),
            sQ = null !== (wQ = WQ.options.requestOptions) && void 0 !== wQ ? wQ : {},
            {
              headers: FQ = {}
            } = sQ,
            PQ = rT(sQ, jT),
            {
              keepalive: gQ,
              signal: JQ
            } = PQ,
            rQ = rT(PQ, BT),
            IQ = {};
          for (const [QQ, WQ] of Object.entries(FQ)) IQ[QQ] = "function" === typeof WQ ? yield WQ(): WQ;
          let jQ = zQ,
            BQ = function(QQ) {
              return "undefined" === typeof TextEncoder ? QQ.length : (new TextEncoder).encode(QQ).byteLength
            }(zQ);
          const yQ = {};
          return WQ.compressionEnabled && (jQ = yield WQ.compress(zQ), BQ = jQ.size, yQ["Content-Encoding"] = "gzip"), {
            bodySize: BQ,
            sessionId: TQ,
            requestInit: gW({
              method: "POST",
              headers: gW(gW(gW(gW(gW({
                "Content-Type": "application/json"
              }, yQ), IQ), WQ.options.apiKey ? {
                "x-api-key": WQ.options.apiKey
              } : {}), TQ ? {
                "x-faro-session-id": TQ
              } : {}), {}, {
                "Idempotency-Key": VW(20)
              }),
              body: jQ
            }, rQ)
          }
        }))()
      }
      performAttempt(QQ, WQ, XQ) {
        var wQ = this;
        return xw((function*() {
          var qQ;
          const TQ = null === (qQ = wQ.options.requestOptions) || void 0 === qQ ? void 0 : qQ.signal;
          if (null === TQ || void 0 === TQ ? void 0 : TQ.aborted) return {
            kind: "terminal",
            failure: {
              error: TQ.reason
            },
            attemptsMade: 0
          };
          let zQ = 0;
          try {
            var sQ;
            const qQ = yield wQ.fetchWithKeepaliveFallback(QQ.requestInit, QQ.bodySize, !!XQ || (null === (sQ = wQ.options.requestOptions) || void 0 === sQ ? void 0 : sQ.keepalive), WQ, (() => zQ++));
            if (wQ.handleResponse(qQ, QQ.sessionId), qQ.status >= 200 && qQ.status < 300) return {
              kind: "success",
              attemptsMade: zQ
            };
            const TQ = {
              status: qQ.status
            };
            return !yT.has(qQ.status) || XQ ? {
              kind: "terminal",
              failure: TQ,
              attemptsMade: zQ
            } : {
              kind: "retry",
              failure: TQ,
              attemptsMade: zQ,
              retryAfterMs: VT.has(qQ.status) ? wQ.getRetryAfterDelayMs(qQ) : void 0
            }
          } catch (FQ) {
            const QQ = {
              error: FQ
            };
            return (null === TQ || void 0 === TQ ? void 0 : TQ.aborted) || !wQ.isFetchNetworkError(FQ) || XQ ? {
              kind: "terminal",
              failure: QQ,
              attemptsMade: zQ
            } : {
              kind: "retry",
              failure: QQ,
              attemptsMade: zQ
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(QQ, WQ, XQ, wQ, qQ) {
        var TQ = this;
        return xw((function*() {
          const zQ = TQ.getNow(),
            sQ = TQ.reserveKeepalive(WQ, XQ);
          try {
            return yield TQ.fetchWithTimeout(gW(gW({}, QQ), {}, {
              keepalive: sQ.keepalive
            }), TQ.requestTimeoutMs, qQ)
          } catch (PQ) {
            var FQ;
            if (sQ.keepalive && wQ > 1 && TQ.isFetchNetworkError(PQ) && !(PQ instanceof GT) && !(null === (FQ = TQ.options.requestOptions) || void 0 === FQ || null === (FQ = FQ.signal) || void 0 === FQ ? void 0 : FQ.aborted)) {
              TQ.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const WQ = TQ.requestTimeoutMs - (TQ.getNow() - zQ);
              return TQ.fetchWithTimeout(gW(gW({}, QQ), {}, {
                keepalive: !1
              }), WQ, qQ)
            }
            throw PQ
          } finally {
            sQ.release()
          }
        }))()
      }
      fetchWithTimeout(QQ, WQ, XQ) {
        var wQ = this;
        return xw((function*() {
          var qQ;
          const TQ = null === (qQ = wQ.options.requestOptions) || void 0 === qQ ? void 0 : qQ.signal;
          if (wQ.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return XQ(), fetch(wQ.options.url, gW(gW({}, QQ), {}, {
            signal: TQ
          }));
          if (WQ <= 0) throw new GT("Request timed out");
          const zQ = new AbortController,
            sQ = () => zQ.abort(null === TQ || void 0 === TQ ? void 0 : TQ.reason);
          null === TQ || void 0 === TQ || TQ.addEventListener("abort", sQ, {
            once: !0
          });
          let FQ = !1;
          const PQ = setTimeout((() => {
            FQ = !0, zQ.abort()
          }), WQ);
          try {
            return XQ(), yield fetch(wQ.options.url, gW(gW({}, QQ), {}, {
              signal: zQ.signal
            }))
          } catch (gQ) {
            if (FQ && !(null === TQ || void 0 === TQ ? void 0 : TQ.aborted)) throw new GT("Request timed out");
            throw gQ
          } finally {
            clearTimeout(PQ), null === TQ || void 0 === TQ || TQ.removeEventListener("abort", sQ)
          }
        }))()
      }
      getRetryAfterDelayMs(QQ) {
        const WQ = QQ.headers.get("Retry-After");
        if (!WQ) return;
        if (/^\d+$/.test(WQ)) {
          const QQ = 1e3 * Number(WQ);
          return Number.isFinite(QQ) ? QQ : Number.POSITIVE_INFINITY
        }
        const XQ = this.getNow(),
          wQ = function(QQ, WQ) {
            const XQ = qT.exec(QQ);
            if (XQ) {
              const [, QQ, WQ, wQ, qQ, TQ, zQ, sQ] = XQ;
              return gT({
                weekday: sT.indexOf(QQ),
                day: Number(WQ),
                month: PT.indexOf(wQ),
                year: Number(qQ),
                hour: Number(TQ),
                minute: Number(zQ),
                second: Number(sQ)
              })
            }
            const wQ = TT.exec(QQ);
            if (wQ) {
              const [, QQ, XQ, zQ, sQ, FQ, PQ, gQ] = wQ, JQ = new Date(WQ);
              if (Number.isNaN(JQ.getTime())) return;
              const rQ = JQ.getUTCFullYear();
              let IQ = 100 * Math.floor(rQ / 100) + Number(sQ);
              IQ < rQ && (IQ += 100);
              const jQ = PT.indexOf(zQ),
                BQ = {
                  month: jQ,
                  day: Number(XQ),
                  hour: Number(FQ),
                  minute: Number(PQ),
                  second: Number(gQ),
                  millisecond: 0
                },
                yQ = {
                  month: JQ.getUTCMonth(),
                  day: JQ.getUTCDate(),
                  hour: JQ.getUTCHours(),
                  minute: JQ.getUTCMinutes(),
                  second: JQ.getUTCSeconds(),
                  millisecond: JQ.getUTCMilliseconds()
                };
              return (IQ > rQ + 50 || IQ === rQ + 50 && (TQ = yQ, ((qQ = BQ).month - TQ.month || qQ.day - TQ.day || qQ.hour - TQ.hour || qQ.minute - TQ.minute || qQ.second - TQ.second || qQ.millisecond - TQ.millisecond) > 0)) && (IQ -= 100), gT({
                weekday: FT.indexOf(QQ),
                day: Number(XQ),
                month: jQ,
                year: IQ,
                hour: Number(FQ),
                minute: Number(PQ),
                second: Number(gQ)
              })
            }
            var qQ, TQ;
            const zQ = zT.exec(QQ);
            if (!zQ) return;
            const [, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ] = zQ;
            return gT({
              weekday: sT.indexOf(sQ),
              day: Number(null !== PQ && void 0 !== PQ ? PQ : gQ),
              month: PT.indexOf(FQ),
              year: Number(jQ),
              hour: Number(JQ),
              minute: Number(rQ),
              second: Number(IQ)
            })
          }(WQ, XQ);
        return null == wQ ? void 0 : Math.max(0, wQ - XQ)
      }
      reserveKeepalive(QQ, WQ) {
        if (!1 === WQ || QQ > 6e4 || DT + QQ > 6e4 || pT >= 9) return {
          keepalive: !1,
          release: eW
        };
        DT += QQ, pT++;
        let XQ = !1;
        return {
          keepalive: !0,
          release: () => {
            XQ || (XQ = !0, DT -= QQ, pT--)
          }
        }
      }
      handleResponse(QQ, WQ) {
        202 === QQ.status && "invalid" === QQ.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), WQ), QQ.text().catch(eW)
      }
      isFetchNetworkError(QQ) {
        return QQ instanceof TypeError || QQ instanceof GT || QQ instanceof DOMException && "AbortError" === QQ.name
      }
      compress(QQ) {
        return xw((function*() {
          const WQ = [],
            XQ = new ReadableStream({
              start(WQ) {
                WQ.enqueue((new TextEncoder).encode(QQ)), WQ.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: QQ,
              value: wQ
            } = yield XQ.read();
            if (QQ) return new Blob(WQ);
            WQ.push(wQ)
          }
        }))()
      }
      extendFaroSession(QQ, WQ, XQ) {
        var wQ, qQ;
        const TQ = QQ.sessionTracking;
        if (!(null === TQ || void 0 === TQ ? void 0 : TQ.enabled)) return void WQ("Session expired.");
        const {
          fetchUserSession: zQ,
          storeUserSession: sQ
        } = oW(TQ), FQ = null === (wQ = this.metas.value.session) || void 0 === wQ ? void 0 : wQ.id, PQ = null === (qQ = zQ()) || void 0 === qQ ? void 0 : qQ.sessionId;
        XQ && XQ === FQ && XQ === PQ ? (iW({
          fetchUserSession: zQ,
          storeUserSession: sQ
        })({
          forceSessionExtend: !0
        }), WQ("Session expired; created new session.")) : WQ("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const bT = () => {
      const QQ = window.k6;
      return {
        k6: gW({
          isK6Browser: !0
        }, (null === QQ || void 0 === QQ ? void 0 : QQ.testRunId) && {
          testRunId: null === QQ || void 0 === QQ ? void 0 : QQ.testRunId
        })
      }
    };
    let vT, dT;

    function HT() {
      let {
        generatePageId: QQ,
        initialPageMeta: WQ
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const XQ = location.href;
        return hQ(QQ) && vT !== XQ && (vT = XQ, dT = QQ(location)), {
          page: gW(gW({
            url: XQ
          }, dT ? {
            id: dT
          } : {}), WQ)
        }
      }
    }

    function aT() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MW,
        WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const XQ = xW;
      return WQ > 0 && (XQ.error = WQ >= 1 ? function() {
        for (var WQ = arguments.length, wQ = new Array(WQ), qQ = 0; qQ < WQ; qQ++) wQ[qQ] = arguments[qQ];
        QQ.error(`${XQ.prefix}\n`, ...wQ)
      } : eW, XQ.warn = WQ >= 2 ? function() {
        for (var WQ = arguments.length, wQ = new Array(WQ), qQ = 0; qQ < WQ; qQ++) wQ[qQ] = arguments[qQ];
        QQ.warn(`${XQ.prefix}\n`, ...wQ)
      } : eW, XQ.info = WQ >= 3 ? function() {
        for (var WQ = arguments.length, wQ = new Array(WQ), qQ = 0; qQ < WQ; qQ++) wQ[qQ] = arguments[qQ];
        QQ.info(`${XQ.prefix}\n`, ...wQ)
      } : eW, XQ.debug = WQ >= 4 ? function() {
        for (var WQ = arguments.length, wQ = new Array(WQ), qQ = 0; qQ < WQ; qQ++) wQ[qQ] = arguments[qQ];
        QQ.debug(`${XQ.prefix}\n`, ...wQ)
      } : eW), XQ
    }
    const lT = "faro",
      hT = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      iT = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function cT(QQ) {
      var WQ, XQ, qQ, TQ, zQ, sQ;
      const FQ = [],
        gQ = aT(QQ.unpatchedConsole, QQ.internalLoggerLevel);
      QQ.transports ? ((QQ.url || QQ.apiKey) && gQ.error('if "transports" is defined, "url" and "apiKey" should not be defined'), FQ.push(...QQ.transports)) : QQ.url ? FQ.push(new UT({
        url: QQ.url,
        apiKey: QQ.apiKey,
        requestCompression: QQ.requestCompression
      })) : gQ.error('either "url" or "transports" must be defined');
      const {
        dedupe: JQ = !0,
        eventDomain: rQ = wQ,
        globalObjectKey: IQ = lT,
        instrumentations: jQ = oq(),
        internalLoggerLevel: BQ = YW,
        isolate: yQ = !1,
        logArgsSerializer: VQ = cX,
        metas: DQ = RT(QQ),
        paused: pQ = !1,
        preventGlobalExposure: GQ = !1,
        unpatchedConsole: UQ = MW,
        url: bQ,
        experimental: vQ
      } = QQ, dQ = rT(QQ, iT), HQ = null !== (WQ = null === vQ || void 0 === vQ ? void 0 : vQ.trackNavigation) && void 0 !== WQ && WQ, aQ = {
        dataAttributeName: mw(null !== (XQ = null === (qQ = QQ.userActionsInstrumentation) || void 0 === qQ ? void 0 : qQ.dataAttributeName) && void 0 !== XQ ? XQ : Zw),
        excludeItem: null === (TQ = QQ.userActionsInstrumentation) || void 0 === TQ ? void 0 : TQ.excludeItem,
        initialActivityTimeout: Mw(null === (zQ = QQ.userActionsInstrumentation) || void 0 === zQ ? void 0 : zQ.initialActivityTimeout, 100, (QQ => gQ.warn(QQ)))
      };
      return gW(gW({}, dQ), {}, {
        batching: gW(gW({}, hT), QQ.batching),
        dedupe: JQ,
        globalObjectKey: IQ,
        instrumentations: AT(jQ, QQ),
        internalLoggerLevel: BQ,
        isolate: yQ,
        logArgsSerializer: VQ,
        metas: DQ,
        parseStacktrace: BX,
        paused: pQ,
        preventGlobalExposure: GQ,
        transports: FQ,
        unpatchedConsole: UQ,
        eventDomain: rQ,
        ignoreUrls: [...null !== (sQ = QQ.ignoreUrls) && void 0 !== sQ ? sQ : [], ...bQ ? [bQ] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: gW(gW(gW({}, PQ), QQ.sessionTracking), ET({
          trackGeolocation: QQ.trackGeolocation,
          sessionTracking: QQ.sessionTracking
        })),
        userActionsInstrumentation: aQ,
        experimental: {
          trackNavigation: HQ
        }
      })
    }

    function AT(QQ, WQ) {
      let {
        experimental: XQ
      } = WQ;
      var wQ;
      const qQ = null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.trackNavigation) && void 0 !== wQ && wQ;
      return QQ.filter((QQ => !("@grafana/faro-web-sdk:instrumentation-navigation" === QQ.name && !qQ)))
    }

    function RT(QQ) {
      var WQ, XQ, wQ;
      const {
        page: qQ,
        generatePageId: TQ
      } = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.pageTracking) && void 0 !== WQ ? WQ : {}, zQ = [Nq, Zq, HT({
        generatePageId: TQ,
        initialPageMeta: qQ
      }), ...null !== (XQ = QQ.metas) && void 0 !== XQ ? XQ : [], Kq];
      return lQ(null === (wQ = window) || void 0 === wQ ? void 0 : wQ.k6) ? [...zQ, bT] : zQ
    }

    function ET(QQ) {
      let {
        trackGeolocation: WQ,
        sessionTracking: XQ
      } = QQ;
      var wQ;
      const qQ = {};
      return HQ(WQ) && (qQ.geoLocationTrackingEnabled = WQ), YQ(qQ) ? {} : {
        session: gW(gW({}, null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.session) && void 0 !== wQ ? wQ : {}), {}, {
          overrides: qQ
        })
      }
    }
    const CT = new WeakSet;

    function uT(QQ) {
      return CT.add(QQ), QQ
    }

    function LT(QQ, WQ) {
      if (QQ.capture) return uT(QQ.capture(WQ));
      const XQ = uT(QQ.value);
      return null === WQ || void 0 === WQ || WQ(), XQ
    }

    function kT(QQ) {
      const WQ = `__faroBundleId_${QQ}`,
        XQ = null === gQ || void 0 === gQ ? void 0 : gQ[WQ];
      if ("string" === typeof XQ && "" !== XQ) return XQ;
      const wQ = "undefined" !== typeof window ? window[WQ] : void 0;
      return "string" === typeof wQ && "" !== wQ ? wQ : void 0
    }

    function fT(QQ) {
      var WQ, XQ;
      const wQ = QQ.config.app.name,
        qQ = wQ ? function(QQ) {
          return null === gQ || void 0 === gQ ? void 0 : gQ[`__faroGitHash_${QQ}`]
        }(wQ) : void 0,
        TQ = {
          sdk: {
            version: XX,
            name: "faro"
          },
          app: mW({
            bundleId: wQ && kT(wQ)
          }, void 0 !== qQ ? {
            gitHash: qQ
          } : {})
        },
        zQ = null === (WQ = QQ.config.sessionTracking) || void 0 === WQ ? void 0 : WQ.session;
      zQ && QQ.api.setSession(zQ), QQ.config.app && (TQ.app = mW(mW({}, QQ.config.app), TQ.app)), QQ.config.user && (TQ.user = QQ.config.user), QQ.config.view && (TQ.view = QQ.config.view), QQ.metas.add(TQ, ...null !== (XQ = QQ.config.metas) && void 0 !== XQ ? XQ : [])
    }
    var ST = class {
      constructor(QQ, WQ) {
        var XQ, wQ;
        this.signalBuffer = [], this.itemLimit = null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.itemLimit) && void 0 !== XQ ? XQ : 50, this.sendTimeout = null !== (wQ = null === WQ || void 0 === WQ ? void 0 : WQ.sendTimeout) && void 0 !== wQ ? wQ : 250, this.paused = (null === WQ || void 0 === WQ ? void 0 : WQ.paused) || !1, this.sendFn = QQ, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const WQ = new Map;
        return QQ.forEach((QQ => {
          const XQ = JSON.stringify(QQ.meta);
          let wQ = WQ.get(XQ);
          wQ = void 0 === wQ ? [QQ] : [...wQ, QQ], WQ.set(XQ, wQ)
        })), Array.from(WQ.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const QQ = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(QQ).forEach(this.sendFn)
        } catch (WQ) {
          throw this.signalBuffer = [...QQ, ...this.signalBuffer], this.trimBufferToLimit(), WQ
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function tT(QQ, WQ, XQ, wQ) {
      var qQ;
      WQ.debug("Initializing transports");
      const TQ = [];
      let zQ = [];
      const sQ = QQ => {
        let WQ = QQ;
        for (const wQ of zQ) {
          const QQ = WQ.map(wQ).filter(Boolean);
          if (0 === QQ.length) return [];
          WQ = oT(QQ, XQ)
        }
        return WQ
      };
      let FQ;
      (null === (qQ = XQ.batching) || void 0 === qQ ? void 0 : qQ.enabled) && (FQ = new ST((QQ => {
        const XQ = sQ(QQ);
        if (0 !== XQ.length)
          for (const wQ of TQ) WQ.debug(`Transporting item using ${wQ.name}\n`, XQ), wQ.isBatched() && wQ.send(XQ)
      }), {
        sendTimeout: XQ.batching.sendTimeout,
        itemLimit: XQ.batching.itemLimit,
        paused: XQ.paused
      }));
      return {
        add: function() {
          WQ.debug("Adding transports");
          for (var qQ = arguments.length, zQ = new Array(qQ), sQ = 0; sQ < qQ; sQ++) zQ[sQ] = arguments[sQ];
          zQ.forEach((qQ => {
            WQ.debug(`Adding "${qQ.name}" transport`), TQ.some((QQ => QQ === qQ)) ? WQ.warn(`Transport ${qQ.name} is already added`) : (qQ.unpatchedConsole = QQ, qQ.internalLogger = WQ, qQ.config = XQ, qQ.metas = wQ, TQ.push(qQ))
          }))
        },
        addBeforeSendHooks: function() {
          WQ.debug("Adding beforeSendHooks\n", zQ);
          for (var QQ = arguments.length, XQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) XQ[wQ] = arguments[wQ];
          XQ.forEach((QQ => {
            QQ && zQ.push(QQ)
          }))
        },
        getBeforeSendHooks: () => [...zQ],
        execute: QQ => {
          var qQ;
          if (!XQ.paused && SW(wQ).shouldCapture()) {
            if (JQ = QQ.meta, !CT.has(JQ)) {
              var zQ, PQ, gQ;
              const WQ = null === (zQ = wQ.value.session) || void 0 === zQ ? void 0 : zQ.id,
                qQ = LT(wQ);
              if (XQ.paused) return;
              const TQ = mW({}, QQ.meta);
              (null === (PQ = TQ.session) || void 0 === PQ ? void 0 : PQ.id) === WQ && (null === (gQ = qQ.session) || void 0 === gQ ? void 0 : gQ.id) !== WQ && (void 0 === qQ.session ? delete TQ.session : TQ.session = qQ.session), QQ = mW(mW({}, QQ), {}, {
                meta: uT(TQ)
              })
            }
            var JQ;
            (null === (qQ = XQ.batching) || void 0 === qQ ? void 0 : qQ.enabled) && (null === FQ || void 0 === FQ || FQ.addItem(QQ)), (QQ => {
              var wQ;
              if ((null === (wQ = XQ.batching) || void 0 === wQ ? void 0 : wQ.enabled) && TQ.every((QQ => QQ.isBatched()))) return;
              const [qQ] = sQ([QQ]);
              if (void 0 !== qQ)
                for (const sQ of TQ) {
                  var zQ;
                  WQ.debug(`Transporting item using ${sQ.name}\n`, qQ), sQ.isBatched() ? (null === (zQ = XQ.batching) || void 0 === zQ ? void 0 : zQ.enabled) || sQ.send([qQ]) : sQ.send(qQ)
                }
            })(QQ)
          }
        },
        isPaused: () => XQ.paused,
        pause: () => {
          WQ.debug("Pausing transports"), null === FQ || void 0 === FQ || FQ.pause(), XQ.paused = !0
        },
        remove: function() {
          WQ.debug("Removing transports");
          for (var QQ = arguments.length, XQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) XQ[wQ] = arguments[wQ];
          XQ.forEach((QQ => {
            WQ.debug(`Removing "${QQ.name}" transport`);
            const XQ = TQ.indexOf(QQ); - 1 !== XQ ? TQ.splice(XQ, 1) : WQ.warn(`Transport "${QQ.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var QQ = arguments.length, XQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) XQ[wQ] = arguments[wQ];
          WQ.debug("Removing beforeSendHooks"), zQ = zQ.filter((QQ => !XQ.includes(QQ)))
        },
        get transports() {
          return [...TQ]
        },
        unpause: () => {
          WQ.debug("Unpausing transports"), null === FQ || void 0 === FQ || FQ.start(), XQ.paused = !1
        }
      }
    }

    function oT(QQ, WQ) {
      if (WQ.preserveOriginalError)
        for (const XQ of QQ) "exception" === XQ.type && delete XQ.payload.originalError;
      return QQ
    }
    let eT = MW;

    function nT(QQ) {
      var WQ;
      return eT = null !== (WQ = QQ.unpatchedConsole) && void 0 !== WQ ? WQ : eT, eT
    }
    let xT, YT = xW;

    function NT(QQ, WQ) {
      return YT = aT(QQ, WQ.internalLoggerLevel), YT
    }

    function ZT(QQ) {
      let {
        internalLogger: WQ,
        config: XQ,
        metas: wQ,
        transports: qQ,
        tracesApi: TQ,
        userActionsApi: zQ
      } = QQ;
      var sQ;
      WQ.debug("Initializing exceptions API");
      let FQ = null;
      xT = null !== (sQ = XQ.parseStacktrace) && void 0 !== sQ ? sQ : xT;
      const PQ = QQ => {
          WQ.debug("Changing stacktrace parser"), xT = null !== QQ && void 0 !== QQ ? QQ : xT
        },
        {
          ignoreErrors: gQ = [],
          preserveOriginalError: JQ
        } = XQ;
      return PQ(XQ.parseStacktrace), {
        changeStacktraceParser: PQ,
        getStacktraceParser: () => xT,
        pushError: function(QQ) {
          let {
            skipDedupe: sQ,
            stackFrames: PQ,
            type: rQ,
            context: IQ,
            spanContext: jQ,
            timestampOverwriteMs: BQ,
            originalError: yQ,
            fingerprint: VQ,
            fatal: DQ
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(QQ, WQ) {
              const {
                message: XQ,
                name: wQ,
                stack: qQ
              } = WQ;
              return TQ = QQ, zQ = XQ + " " + wQ + " " + qQ, TQ.some((QQ => bQ(QQ) ? zQ.includes(QQ) : !!zQ.match(QQ)));
              var TQ, zQ
            }(gQ, null !== yQ && void 0 !== yQ ? yQ : QQ)) try {
            var pQ, GQ;
            if (!SW(wQ).shouldCapture()) return;
            const gQ = uW(mW(mW({}, function(QQ) {
                let WQ = QQ.cause;
                LQ(WQ) ? WQ = QQ.cause.toString() : null !== WQ && (lQ(QQ.cause) || iQ(QQ.cause)) ? WQ = CW(QQ.cause) : null != WQ && (WQ = QQ.cause.toString());
                return null == WQ ? {} : {
                  cause: WQ
                }
              }(null !== yQ && void 0 !== yQ ? yQ : QQ)), null !== IQ && void 0 !== IQ ? IQ : {})),
              bQ = mW(mW(mW(mW({
                type: rQ || QQ.name || "Error",
                value: QQ.message,
                timestamp: BQ ? BW(BQ) : jW(),
                trace: jQ ? {
                  trace_id: jQ.traceId,
                  span_id: jQ.spanId
                } : TQ.getTraceContext()
              }, YQ(gQ) ? {} : {
                context: gQ
              }), JQ ? {
                originalError: yQ
              } : {}), VQ ? {
                fingerprint: VQ
              } : {}), void 0 !== DQ ? {
                fatal: DQ
              } : {});
            PQ = null !== (pQ = PQ) && void 0 !== pQ ? pQ : QQ.stack ? null === xT || void 0 === xT ? void 0 : xT(QQ).frames : void 0, (null === PQ || void 0 === PQ ? void 0 : PQ.length) && (bQ.stacktrace = {
              frames: PQ
            });
            const vQ = {
              type: bQ.type,
              value: bQ.value,
              stacktrace: bQ.stacktrace,
              context: bQ.context,
              fingerprint: bQ.fingerprint,
              fatal: null !== (GQ = bQ.fatal) && void 0 !== GQ && GQ
            };
            if (!sQ && XQ.dedupe && !UQ(FQ) && DW(vQ, FQ)) return void WQ.debug("Skipping error push because it is the same as the last one\n", bQ);
            const dQ = FQ,
              HQ = LT(wQ);
            if (FQ !== dQ && !sQ && XQ.dedupe && DW(vQ, FQ)) return;
            FQ = vQ;
            const aQ = {
              meta: HQ,
              payload: bQ,
              type: "exception"
            };
            WQ.debug("Pushing exception\n", aQ), vq(zQ.getActiveUserAction(), aQ) || qQ.execute(aQ)
          } catch (vQ) {
            WQ.error("Error pushing event", vQ)
          }
        }
      }
    }

    function OT(QQ, WQ, XQ, wQ, qQ) {
      WQ.debug("Initializing API");
      let TQ = null;
      const zQ = function(QQ) {
          let {
            transports: WQ,
            internalLogger: XQ,
            config: wQ,
            pushEvent: qQ
          } = QQ;
          var TQ;
          const zQ = null === (TQ = wQ.userActionsInstrumentation) || void 0 === TQ ? void 0 : TQ.excludeItem;
          let sQ;
          const FQ = () => sQ;
          return {
            startUserAction: (QQ, wQ, TQ) => {
              if (void 0 === FQ()) {
                const XQ = new Uq({
                  name: QQ,
                  transports: WQ,
                  attributes: wQ,
                  trigger: (null === TQ || void 0 === TQ ? void 0 : TQ.triggerName) || "faroApiCall",
                  importance: (null === TQ || void 0 === TQ ? void 0 : TQ.importance) || pq.Normal,
                  trackUserActionsExcludeItem: zQ,
                  pushEvent: qQ
                });
                return XQ.filter((QQ => [3, 2].includes(QQ))).first().subscribe((() => {
                  sQ = void 0
                })), bq.notify({
                  type: Dq,
                  userAction: XQ,
                  initialActivityTimeout: null === TQ || void 0 === TQ ? void 0 : TQ.initialActivityTimeout
                }), sQ = XQ, sQ
              }
              XQ.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: FQ
          }
        }({
          transports: qQ,
          config: XQ,
          internalLogger: WQ,
          pushEvent: (QQ, XQ, wQ, qQ) => {
            TQ ? TQ(QQ, XQ, wQ, qQ) : WQ.warn("pushEventImpl is not initialized. Event dropped:", {
              name: QQ,
              attributes: XQ,
              domain: wQ,
              options: qQ
            })
          }
        }),
        sQ = function(QQ, WQ, XQ, wQ, qQ) {
          let TQ;
          return WQ.debug("Initializing traces API"), {
            getOTEL: () => TQ,
            getTraceContext: () => {
              const QQ = null === TQ || void 0 === TQ ? void 0 : TQ.trace.getSpanContext(TQ.context.active());
              return QQ ? {
                trace_id: QQ.traceId,
                span_id: QQ.spanId
              } : void 0
            },
            initOTEL: (QQ, XQ) => {
              WQ.debug("Initializing OpenTelemetry"), TQ = {
                trace: QQ,
                context: XQ
              }
            },
            isOTELInitialized: () => !!TQ,
            pushTraces: QQ => {
              try {
                if (!SW(wQ).shouldCapture()) return;
                const XQ = {
                  type: "trace",
                  payload: QQ,
                  meta: LT(wQ)
                };
                WQ.debug("Pushing trace\n", XQ), qQ.execute(XQ)
              } catch (XQ) {
                WQ.error("Error pushing trace\n", XQ)
              }
            }
          }
        }(0, WQ, 0, wQ, qQ),
        FQ = {
          unpatchedConsole: QQ,
          internalLogger: WQ,
          userActionsApi: zQ,
          config: XQ,
          metas: wQ,
          transports: qQ,
          tracesApi: sQ
        },
        PQ = function(QQ) {
          let {
            internalLogger: WQ,
            config: XQ,
            metas: wQ,
            transports: qQ,
            tracesApi: TQ,
            userActionsApi: zQ
          } = QQ, sQ = null;
          return {
            pushEvent: function(QQ, FQ, PQ) {
              let {
                skipDedupe: gQ,
                spanContext: JQ,
                timestampOverwriteMs: rQ,
                customPayloadTransformer: IQ = QQ => QQ
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!SW(wQ).shouldCapture()) return;
                const jQ = uW(FQ),
                  BQ = IQ({
                    name: QQ,
                    domain: null !== PQ && void 0 !== PQ ? PQ : XQ.eventDomain,
                    attributes: YQ(jQ) ? void 0 : jQ,
                    timestamp: rQ ? BW(rQ) : jW(),
                    trace: JQ ? {
                      trace_id: JQ.traceId,
                      span_id: JQ.spanId
                    } : TQ.getTraceContext()
                  }),
                  yQ = {
                    name: BQ.name,
                    attributes: BQ.attributes,
                    domain: BQ.domain
                  };
                if (!gQ && XQ.dedupe && !UQ(sQ) && DW(yQ, sQ)) return void WQ.debug("Skipping event push because it is the same as the last one\n", BQ);
                const VQ = sQ,
                  DQ = LT(wQ);
                if (sQ !== VQ && !gQ && XQ.dedupe && DW(yQ, sQ)) return;
                sQ = yQ;
                const pQ = {
                  meta: DQ,
                  payload: BQ,
                  type: "event"
                };
                WQ.debug("Pushing event\n", pQ), vq(zQ.getActiveUserAction(), pQ) || qQ.execute(pQ)
              } catch (jQ) {
                WQ.error("Error pushing event", jQ)
              }
            }
          }
        }(FQ);
      return TQ = PQ.pushEvent, mW(mW(mW(mW(mW(mW(mW({}, sQ), ZT(FQ)), function(QQ) {
        let WQ, XQ, wQ, qQ, {
          internalLogger: TQ,
          metas: zQ
        } = QQ;
        TQ.debug("Initializing meta API");
        const sQ = QQ => {
            XQ && zQ.remove(XQ), XQ = {
              user: QQ
            }, zQ.add(XQ)
          },
          FQ = (QQ, XQ) => {
            var wQ;
            const qQ = null === XQ || void 0 === XQ ? void 0 : XQ.overrides,
              TQ = qQ ? {
                overrides: mW(mW({}, null === WQ || void 0 === WQ || null === (wQ = WQ.session) || void 0 === wQ ? void 0 : wQ.overrides), qQ)
              } : {};
            WQ && zQ.remove(WQ), WQ = {
              session: mW(mW({}, YQ(QQ) ? void 0 : QQ), TQ)
            }, zQ.add(WQ)
          },
          PQ = (QQ, WQ) => {
            SW(zQ).notifySessionUpdate({
              type: "replace",
              session: QQ,
              overrides: null === WQ || void 0 === WQ ? void 0 : WQ.overrides
            }), FQ(QQ, WQ)
          },
          gQ = () => zQ.value.session,
          JQ = () => zQ.value.page;
        return {
          setUser: sQ,
          resetUser: sQ,
          setSession: PQ,
          resetSession: PQ,
          getSession: gQ,
          setView: (QQ, WQ) => {
            var XQ;
            if ((null === WQ || void 0 === WQ ? void 0 : WQ.overrides) && (SW(zQ).notifySessionUpdate({
                type: "overrides",
                overrides: WQ.overrides
              }), FQ(gQ(), {
                overrides: WQ.overrides
              })), (null === wQ || void 0 === wQ || null === (XQ = wQ.view) || void 0 === XQ ? void 0 : XQ.name) === (null === QQ || void 0 === QQ ? void 0 : QQ.name)) return;
            const qQ = wQ;
            wQ = {
              view: QQ
            }, zQ.add(wQ), qQ && zQ.remove(qQ)
          },
          getView: () => zQ.value.view,
          setPage: QQ => {
            var WQ;
            const XQ = bQ(QQ) ? mW(mW({}, null !== (WQ = null === qQ || void 0 === qQ ? void 0 : qQ.page) && void 0 !== WQ ? WQ : JQ()), {}, {
              id: QQ
            }) : QQ;
            qQ && zQ.remove(qQ), qQ = {
              page: XQ
            }, zQ.add(qQ)
          },
          getPage: JQ
        }
      }(FQ)), function(QQ) {
        let {
          internalLogger: WQ,
          config: XQ,
          metas: wQ,
          transports: qQ,
          tracesApi: TQ,
          userActionsApi: zQ
        } = QQ;
        var sQ;
        WQ.debug("Initializing logs API");
        let FQ = null;
        const PQ = null !== (sQ = XQ.logArgsSerializer) && void 0 !== sQ ? sQ : cX;
        return {
          pushLog: function(QQ) {
            let {
              context: sQ,
              level: gQ,
              skipDedupe: JQ,
              spanContext: rQ,
              timestampOverwriteMs: IQ
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!SW(wQ).shouldCapture()) return;
              const jQ = uW(sQ),
                BQ = {
                  message: PQ(QQ),
                  level: null !== gQ && void 0 !== gQ ? gQ : "log",
                  context: YQ(jQ) ? void 0 : jQ,
                  timestamp: IQ ? BW(IQ) : jW(),
                  trace: rQ ? {
                    trace_id: rQ.traceId,
                    span_id: rQ.spanId
                  } : TQ.getTraceContext()
                },
                yQ = {
                  message: BQ.message,
                  level: BQ.level,
                  context: BQ.context
                };
              if (!JQ && XQ.dedupe && !UQ(FQ) && DW(yQ, FQ)) return void WQ.debug("Skipping log push because it is the same as the last one\n", BQ);
              const VQ = FQ,
                DQ = LT(wQ);
              if (FQ !== VQ && !JQ && XQ.dedupe && DW(yQ, FQ)) return;
              FQ = yQ;
              const pQ = {
                type: "log",
                payload: BQ,
                meta: DQ
              };
              WQ.debug("Pushing log\n", pQ), vq(zQ.getActiveUserAction(), pQ) || qQ.execute(pQ)
            } catch (jQ) {
              WQ.error("Error pushing log\n", jQ)
            }
          }
        }
      }(FQ)), function(QQ) {
        let {
          internalLogger: WQ,
          config: XQ,
          metas: wQ,
          transports: qQ,
          tracesApi: TQ,
          userActionsApi: zQ
        } = QQ;
        WQ.debug("Initializing measurements API");
        let sQ = null;
        return {
          pushMeasurement: function(QQ) {
            let {
              skipDedupe: FQ,
              context: PQ,
              spanContext: gQ,
              timestampOverwriteMs: JQ
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!SW(wQ).shouldCapture()) return;
              const rQ = uW(PQ),
                IQ = mW(mW({}, QQ), {}, {
                  trace: gQ ? {
                    trace_id: gQ.traceId,
                    span_id: gQ.spanId
                  } : TQ.getTraceContext(),
                  timestamp: JQ ? BW(JQ) : jW(),
                  context: YQ(rQ) ? void 0 : rQ
                }),
                jQ = {
                  type: IQ.type,
                  values: IQ.values,
                  context: IQ.context
                };
              if (!FQ && XQ.dedupe && !UQ(sQ) && DW(jQ, sQ)) return void WQ.debug("Skipping measurement push because it is the same as the last one\n", IQ);
              const BQ = sQ,
                yQ = LT(wQ);
              if (sQ !== BQ && !FQ && XQ.dedupe && DW(jQ, sQ)) return;
              sQ = jQ;
              const VQ = {
                type: "measurement",
                payload: IQ,
                meta: yQ
              };
              WQ.debug("Pushing measurement\n", VQ), vq(zQ.getActiveUserAction(), VQ) || qQ.execute(VQ)
            } catch (rQ) {
              WQ.error("Error pushing measurement\n", rQ)
            }
          }
        }
      }(FQ)), PQ), zQ)
    }

    function KT(QQ) {
      const WQ = nT(QQ),
        XQ = NT(WQ, QQ);
      if (jQ() && !QQ.isolate) return void XQ.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      XQ.debug("Initializing");
      const wQ = function(QQ, WQ) {
          let XQ, wQ = [],
            qQ = [],
            TQ = [],
            zQ = 0,
            sQ = 0;
          const FQ = () => wQ.reduce(((QQ, WQ) => Object.assign(QQ, hQ(WQ) ? WQ() : WQ)), {}),
            PQ = () => {
              if (qQ.length) {
                const QQ = FQ();
                qQ.forEach((WQ => WQ(QQ)))
              }
            };
          return {
            add: function() {
              for (var QQ = arguments.length, XQ = new Array(QQ), qQ = 0; qQ < QQ; qQ++) XQ[qQ] = arguments[qQ];
              WQ.debug("Adding metas\n", XQ), wQ.push(...XQ), PQ()
            },
            remove: function() {
              for (var QQ = arguments.length, XQ = new Array(QQ), qQ = 0; qQ < QQ; qQ++) XQ[qQ] = arguments[qQ];
              WQ.debug("Removing metas\n", XQ), wQ = wQ.filter((QQ => !XQ.includes(QQ))), PQ()
            },
            addListener: QQ => {
              WQ.debug("Adding metas listener\n", QQ), qQ.push(QQ)
            },
            removeListener: QQ => {
              WQ.debug("Removing metas listener\n", QQ), qQ = qQ.filter((WQ => WQ !== QQ))
            },
            capture: QQ => {
              var WQ;
              const wQ = void 0 !== XQ,
                qQ = null !== (WQ = XQ) && void 0 !== WQ ? WQ : TQ;
              wQ || (XQ = qQ, zQ = 0, sQ = qQ.length);
              try {
                for (; zQ < sQ;) {
                  const QQ = qQ[zQ++];
                  null === QQ || void 0 === QQ || QQ()
                }
                const WQ = uT(FQ());
                return null === QQ || void 0 === QQ || QQ(), WQ
              } finally {
                wQ || (XQ = void 0)
              }
            },
            addCaptureListener: QQ => {
              TQ.push(QQ)
            },
            removeCaptureListener: QQ => {
              TQ = TQ.filter((WQ => WQ !== QQ))
            },
            get value() {
              return FQ()
            }
          }
        }(0, XQ),
        qQ = tT(WQ, XQ, QQ, wQ),
        TQ = OT(WQ, XQ, QQ, wQ, qQ),
        zQ = function(QQ, WQ, XQ, wQ, qQ, TQ) {
          WQ.debug("Initializing instrumentations");
          const zQ = [];
          return {
            add: function() {
              WQ.debug("Adding instrumentations");
              for (var sQ = arguments.length, FQ = new Array(sQ), PQ = 0; PQ < sQ; PQ++) FQ[PQ] = arguments[PQ];
              FQ.forEach((sQ => {
                WQ.debug(`Adding "${sQ.name}" instrumentation`), zQ.some((QQ => QQ.name === sQ.name)) ? WQ.warn(`Instrumentation ${sQ.name} is already added`) : (sQ.unpatchedConsole = QQ, sQ.internalLogger = WQ, sQ.config = XQ, sQ.metas = wQ, sQ.transports = qQ, sQ.api = TQ, zQ.push(sQ), sQ.initialize())
              }))
            },
            get instrumentations() {
              return [...zQ]
            },
            remove: function() {
              WQ.debug("Removing instrumentations");
              for (var QQ = arguments.length, XQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) XQ[wQ] = arguments[wQ];
              XQ.forEach((QQ => {
                var XQ, wQ;
                WQ.debug(`Removing "${QQ.name}" instrumentation`);
                const qQ = zQ.reduce(((WQ, XQ, wQ) => null === WQ && XQ.name === QQ.name ? wQ : null), null);
                null !== qQ ? (null === (XQ = (wQ = zQ[qQ]).destroy) || void 0 === XQ || XQ.call(wQ), zQ.splice(qQ, 1)) : WQ.warn(`Instrumentation "${QQ.name}" is not added`)
              }))
            }
          }
        }(WQ, XQ, QQ, wQ, qQ, TQ),
        sQ = yQ(WQ, XQ, QQ, wQ, qQ, TQ, zQ);
      return fT(sQ),
        function(QQ) {
          QQ.transports.add(...QQ.config.transports), QQ.transports.addBeforeSendHooks(QQ.config.beforeSend)
        }(sQ),
        function(QQ) {
          QQ.instrumentations.add(...QQ.config.instrumentations)
        }(sQ), sQ
    }

    function mT(QQ) {
      const WQ = cT(QQ);
      if (WQ) return KT(WQ)
    }
  },
  7054: function(QQ, WQ, XQ) {
    var wQ;
    ! function(qQ, TQ) {
      var zQ = "function",
        sQ = "undefined",
        FQ = "object",
        PQ = "string",
        gQ = "major",
        JQ = "model",
        rQ = "name",
        IQ = "type",
        jQ = "vendor",
        BQ = "version",
        yQ = "architecture",
        VQ = "console",
        DQ = "mobile",
        pQ = "tablet",
        GQ = "smarttv",
        UQ = "wearable",
        bQ = "embedded",
        vQ = "Amazon",
        dQ = "Apple",
        HQ = "ASUS",
        aQ = "BlackBerry",
        lQ = "Browser",
        hQ = "Chrome",
        iQ = "Firefox",
        cQ = "Google",
        AQ = "Honor",
        RQ = "Huawei",
        EQ = "LG",
        CQ = "Microsoft",
        uQ = "Motorola",
        LQ = "Nvidia",
        kQ = "OnePlus",
        fQ = "Opera",
        SQ = "OPPO",
        tQ = "Samsung",
        oQ = "Sharp",
        eQ = "Sony",
        nQ = "Xiaomi",
        xQ = "Zebra",
        YQ = "Facebook",
        NQ = "Chromium OS",
        ZQ = "Mac OS",
        OQ = " Browser",
        KQ = function(QQ) {
          for (var WQ = {}, XQ = 0; XQ < QQ.length; XQ++) WQ[QQ[XQ].toUpperCase()] = QQ[XQ];
          return WQ
        },
        mQ = function(QQ, WQ) {
          return typeof QQ === PQ && -1 !== MQ(WQ).indexOf(MQ(QQ))
        },
        MQ = function(QQ) {
          return QQ.toLowerCase()
        },
        QW = function(QQ, WQ) {
          if (typeof QQ === PQ) return QQ = QQ.replace(/^\s\s*/, ""), typeof WQ === sQ ? QQ : QQ.substring(0, 500)
        },
        WW = function(QQ, WQ) {
          for (var XQ, wQ, qQ, sQ, PQ, gQ, JQ = 0; JQ < WQ.length && !PQ;) {
            var rQ = WQ[JQ],
              IQ = WQ[JQ + 1];
            for (XQ = wQ = 0; XQ < rQ.length && !PQ && rQ[XQ];)
              if (PQ = rQ[XQ++].exec(QQ))
                for (qQ = 0; qQ < IQ.length; qQ++) gQ = PQ[++wQ], typeof(sQ = IQ[qQ]) === FQ && sQ.length > 0 ? 2 === sQ.length ? typeof sQ[1] == zQ ? this[sQ[0]] = sQ[1].call(this, gQ) : this[sQ[0]] = sQ[1] : 3 === sQ.length ? typeof sQ[1] !== zQ || sQ[1].exec && sQ[1].test ? this[sQ[0]] = gQ ? gQ.replace(sQ[1], sQ[2]) : TQ : this[sQ[0]] = gQ ? sQ[1].call(this, gQ, sQ[2]) : TQ : 4 === sQ.length && (this[sQ[0]] = gQ ? sQ[3].call(this, gQ.replace(sQ[1], sQ[2])) : TQ) : this[sQ] = gQ || TQ;
            JQ += 2
          }
        },
        XW = function(QQ, WQ) {
          for (var XQ in WQ)
            if (typeof WQ[XQ] === FQ && WQ[XQ].length > 0) {
              for (var wQ = 0; wQ < WQ[XQ].length; wQ++)
                if (mQ(WQ[XQ][wQ], QQ)) return "?" === XQ ? TQ : XQ
            } else if (mQ(WQ[XQ], QQ)) return "?" === XQ ? TQ : XQ;
          return WQ.hasOwnProperty("*") ? WQ["*"] : QQ
        },
        wW = {
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
        qW = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [BQ, [rQ, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [BQ, [rQ, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [rQ, BQ],
            [/opios[\/ ]+([\w\.]+)/i],
            [BQ, [rQ, fQ + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [BQ, [rQ, fQ + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [BQ, [rQ, fQ]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [BQ, [rQ, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [BQ, [rQ, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [rQ, BQ],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [BQ, [rQ, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [BQ, [rQ, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [BQ, [rQ, "UC" + lQ]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [BQ, [rQ, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [BQ, [rQ, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [BQ, [rQ, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [BQ, [rQ, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [BQ, [rQ, "Smart Lenovo " + lQ]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [rQ, /(.+)/, "$1 Secure " + lQ], BQ
            ],
            [/\bfocus\/([\w\.]+)/i],
            [BQ, [rQ, iQ + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [BQ, [rQ, fQ + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [BQ, [rQ, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [BQ, [rQ, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [BQ, [rQ, fQ + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [BQ, [rQ, "MIUI" + OQ]],
            [/fxios\/([\w\.-]+)/i],
            [BQ, [rQ, iQ]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [BQ, [rQ, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [rQ, /(.+)/, "$1Browser"], BQ
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [rQ, /(.+)/, "$1" + OQ], BQ
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [BQ, [rQ, tQ + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [BQ, [rQ, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [rQ, "Sogou Mobile"], BQ
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [rQ, BQ],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [rQ],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [BQ, rQ],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [rQ, YQ], BQ
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [rQ, BQ],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [BQ, [rQ, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [BQ, [rQ, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [BQ, [rQ, hQ + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [rQ, hQ + " WebView"], BQ
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [BQ, [rQ, "Android " + lQ]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [rQ, BQ],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [BQ, [rQ, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [BQ, rQ],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [rQ, [BQ, XW, {
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
            [rQ, BQ],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [rQ, "Netscape"], BQ
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [rQ, BQ],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [BQ, [rQ, iQ + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [rQ, [BQ, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [rQ, [BQ, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [yQ, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [yQ, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [yQ, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [yQ, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [yQ, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [yQ, /ower/, "", MQ]
            ],
            [/ sun4\w[;\)]/i],
            [
              [yQ, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [yQ, MQ]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [JQ, [jQ, tQ],
              [IQ, pQ]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [JQ, [jQ, tQ],
              [IQ, DQ]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [JQ, [jQ, dQ],
              [IQ, DQ]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [JQ, [jQ, dQ],
              [IQ, pQ]
            ],
            [/(macintosh);/i],
            [JQ, [jQ, dQ]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [JQ, [jQ, oQ],
              [IQ, DQ]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [JQ, [jQ, AQ],
              [IQ, pQ]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [JQ, [jQ, AQ],
              [IQ, DQ]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [JQ, [jQ, RQ],
              [IQ, pQ]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [JQ, [jQ, RQ],
              [IQ, DQ]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [JQ, /_/g, " "],
              [jQ, nQ],
              [IQ, pQ]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [JQ, /_/g, " "],
              [jQ, nQ],
              [IQ, DQ]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [JQ, [jQ, SQ],
              [IQ, DQ]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [JQ, [jQ, XW, {
                OnePlus: ["304", "403", "203"],
                "*": SQ
              }],
              [IQ, pQ]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [JQ, [jQ, "Vivo"],
              [IQ, DQ]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [JQ, [jQ, "Realme"],
              [IQ, DQ]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [JQ, [jQ, uQ],
              [IQ, DQ]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [JQ, [jQ, uQ],
              [IQ, pQ]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [JQ, [jQ, EQ],
              [IQ, pQ]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [JQ, [jQ, EQ],
              [IQ, DQ]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [JQ, [jQ, "Lenovo"],
              [IQ, pQ]
            ],
            [/(nokia) (t[12][01])/i],
            [jQ, JQ, [IQ, pQ]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [JQ, /_/g, " "],
              [IQ, DQ],
              [jQ, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [JQ, [jQ, cQ],
              [IQ, pQ]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [JQ, [jQ, cQ],
              [IQ, DQ]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [JQ, [jQ, eQ],
              [IQ, DQ]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [JQ, "Xperia Tablet"],
              [jQ, eQ],
              [IQ, pQ]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [JQ, [jQ, kQ],
              [IQ, DQ]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [JQ, [jQ, vQ],
              [IQ, pQ]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [JQ, /(.+)/g, "Fire Phone $1"],
              [jQ, vQ],
              [IQ, DQ]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [JQ, jQ, [IQ, pQ]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [JQ, [jQ, aQ],
              [IQ, DQ]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [JQ, [jQ, HQ],
              [IQ, pQ]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [JQ, [jQ, HQ],
              [IQ, DQ]
            ],
            [/(nexus 9)/i],
            [JQ, [jQ, "HTC"],
              [IQ, pQ]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [jQ, [JQ, /_/g, " "],
              [IQ, DQ]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [JQ, [jQ, "TCL"],
              [IQ, pQ]
            ],
            [/(itel) ((\w+))/i],
            [
              [jQ, MQ], JQ, [IQ, XW, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [JQ, [jQ, "Acer"],
              [IQ, pQ]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [JQ, [jQ, "Meizu"],
              [IQ, DQ]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [JQ, [jQ, "Ulefone"],
              [IQ, DQ]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [JQ, [jQ, "Energizer"],
              [IQ, DQ]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [JQ, [jQ, "Cat"],
              [IQ, DQ]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [JQ, [jQ, "Smartfren"],
              [IQ, DQ]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [JQ, [jQ, "Nothing"],
              [IQ, DQ]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [JQ, [jQ, "Archos"],
              [IQ, pQ]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [JQ, [jQ, "Archos"],
              [IQ, DQ]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [jQ, JQ, [IQ, pQ]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [jQ, JQ, [IQ, DQ]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [jQ, JQ, [IQ, pQ]],
            [/(surface duo)/i],
            [JQ, [jQ, CQ],
              [IQ, pQ]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [JQ, [jQ, "Fairphone"],
              [IQ, DQ]
            ],
            [/(u304aa)/i],
            [JQ, [jQ, "AT&T"],
              [IQ, DQ]
            ],
            [/\bsie-(\w*)/i],
            [JQ, [jQ, "Siemens"],
              [IQ, DQ]
            ],
            [/\b(rct\w+) b/i],
            [JQ, [jQ, "RCA"],
              [IQ, pQ]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [JQ, [jQ, "Dell"],
              [IQ, pQ]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [JQ, [jQ, "Verizon"],
              [IQ, pQ]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [JQ, [jQ, "Barnes & Noble"],
              [IQ, pQ]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [JQ, [jQ, "NuVision"],
              [IQ, pQ]
            ],
            [/\b(k88) b/i],
            [JQ, [jQ, "ZTE"],
              [IQ, pQ]
            ],
            [/\b(nx\d{3}j) b/i],
            [JQ, [jQ, "ZTE"],
              [IQ, DQ]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [JQ, [jQ, "Swiss"],
              [IQ, DQ]
            ],
            [/\b(zur\d{3}) b/i],
            [JQ, [jQ, "Swiss"],
              [IQ, pQ]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [JQ, [jQ, "Zeki"],
              [IQ, pQ]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [jQ, "Dragon Touch"], JQ, [IQ, pQ]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [JQ, [jQ, "Insignia"],
              [IQ, pQ]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [JQ, [jQ, "NextBook"],
              [IQ, pQ]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [jQ, "Voice"], JQ, [IQ, DQ]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [jQ, "LvTel"], JQ, [IQ, DQ]
            ],
            [/\b(ph-1) /i],
            [JQ, [jQ, "Essential"],
              [IQ, DQ]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [JQ, [jQ, "Envizen"],
              [IQ, pQ]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [JQ, [jQ, "MachSpeed"],
              [IQ, pQ]
            ],
            [/\btu_(1491) b/i],
            [JQ, [jQ, "Rotor"],
              [IQ, pQ]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [JQ, [jQ, LQ],
              [IQ, pQ]
            ],
            [/(sprint) (\w+)/i],
            [jQ, JQ, [IQ, DQ]],
            [/(kin\.[onetw]{3})/i],
            [
              [JQ, /\./g, " "],
              [jQ, CQ],
              [IQ, DQ]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [JQ, [jQ, xQ],
              [IQ, pQ]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [JQ, [jQ, xQ],
              [IQ, DQ]
            ],
            [/smart-tv.+(samsung)/i],
            [jQ, [IQ, GQ]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [JQ, /^/, "SmartTV"],
              [jQ, tQ],
              [IQ, GQ]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [jQ, EQ],
              [IQ, GQ]
            ],
            [/(apple) ?tv/i],
            [jQ, [JQ, dQ + " TV"],
              [IQ, GQ]
            ],
            [/crkey/i],
            [
              [JQ, hQ + "cast"],
              [jQ, cQ],
              [IQ, GQ]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [JQ, [jQ, vQ],
              [IQ, GQ]
            ],
            [/(shield \w+ tv)/i],
            [JQ, [jQ, LQ],
              [IQ, GQ]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [JQ, [jQ, oQ],
              [IQ, GQ]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [JQ, [jQ, eQ],
              [IQ, GQ]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [JQ, [jQ, nQ],
              [IQ, GQ]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [jQ, JQ, [IQ, GQ]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [jQ, QW],
              [JQ, QW],
              [IQ, GQ]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [JQ, [IQ, GQ]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [IQ, GQ]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [jQ, JQ, [IQ, VQ]],
            [/droid.+; (shield)( bui|\))/i],
            [JQ, [jQ, LQ],
              [IQ, VQ]
            ],
            [/(playstation \w+)/i],
            [JQ, [jQ, eQ],
              [IQ, VQ]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [JQ, [jQ, CQ],
              [IQ, VQ]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [JQ, [jQ, tQ],
              [IQ, UQ]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [jQ, JQ, [IQ, UQ]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [JQ, [jQ, SQ],
              [IQ, UQ]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [JQ, [jQ, dQ],
              [IQ, UQ]
            ],
            [/(opwwe\d{3})/i],
            [JQ, [jQ, kQ],
              [IQ, UQ]
            ],
            [/(moto 360)/i],
            [JQ, [jQ, uQ],
              [IQ, UQ]
            ],
            [/(smartwatch 3)/i],
            [JQ, [jQ, eQ],
              [IQ, UQ]
            ],
            [/(g watch r)/i],
            [JQ, [jQ, EQ],
              [IQ, UQ]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [JQ, [jQ, xQ],
              [IQ, UQ]
            ],
            [/droid.+; (glass) \d/i],
            [JQ, [jQ, cQ],
              [IQ, UQ]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [jQ, JQ, [IQ, UQ]],
            [/; (quest( \d| pro)?)/i],
            [JQ, [jQ, YQ],
              [IQ, UQ]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [jQ, [IQ, bQ]],
            [/(aeobc)\b/i],
            [JQ, [jQ, vQ],
              [IQ, bQ]
            ],
            [/(homepod).+mac os/i],
            [JQ, [jQ, dQ],
              [IQ, bQ]
            ],
            [/windows iot/i],
            [
              [IQ, bQ]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [JQ, [IQ, DQ]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [JQ, [IQ, pQ]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [IQ, pQ]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [IQ, DQ]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [JQ, [jQ, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [BQ, [rQ, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [rQ, BQ],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [BQ, [rQ, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [rQ, BQ],
            [/ladybird\//i],
            [
              [rQ, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [BQ, rQ]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [rQ, BQ],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [rQ, [BQ, XW, wW]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [BQ, XW, wW],
              [rQ, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [BQ, /_/g, "."],
              [rQ, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [rQ, ZQ],
              [BQ, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [BQ, rQ],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [rQ, /(.+)/, "$1 Touch"], BQ
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [rQ, BQ],
            [/\(bb(10);/i],
            [BQ, [rQ, aQ]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [BQ, [rQ, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [BQ, [rQ, iQ + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [BQ, [rQ, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [BQ, [rQ, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [BQ, [rQ, hQ + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [rQ, NQ], BQ
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [rQ, BQ],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [rQ, "Solaris"], BQ
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [rQ, BQ]
          ]
        },
        TW = function(QQ, WQ) {
          if (typeof QQ === FQ && (WQ = QQ, QQ = TQ), !(this instanceof TW)) return new TW(QQ, WQ).getResult();
          var XQ = typeof qQ !== sQ && qQ.navigator ? qQ.navigator : TQ,
            wQ = QQ || (XQ && XQ.userAgent ? XQ.userAgent : ""),
            VQ = XQ && XQ.userAgentData ? XQ.userAgentData : TQ,
            GQ = WQ ? function(QQ, WQ) {
              var XQ = {};
              for (var wQ in QQ) WQ[wQ] && WQ[wQ].length % 2 === 0 ? XQ[wQ] = WQ[wQ].concat(QQ[wQ]) : XQ[wQ] = QQ[wQ];
              return XQ
            }(qW, WQ) : qW,
            UQ = XQ && XQ.userAgent == wQ;
          return this.getBrowser = function() {
            var QQ, WQ = {};
            return WQ[rQ] = TQ, WQ[BQ] = TQ, WW.call(WQ, wQ, GQ.browser), WQ[gQ] = typeof(QQ = WQ[BQ]) === PQ ? QQ.replace(/[^\d\.]/g, "").split(".")[0] : TQ, UQ && XQ && XQ.brave && typeof XQ.brave.isBrave == zQ && (WQ[rQ] = "Brave"), WQ
          }, this.getCPU = function() {
            var QQ = {};
            return QQ[yQ] = TQ, WW.call(QQ, wQ, GQ.cpu), QQ
          }, this.getDevice = function() {
            var QQ = {};
            return QQ[jQ] = TQ, QQ[JQ] = TQ, QQ[IQ] = TQ, WW.call(QQ, wQ, GQ.device), UQ && !QQ[IQ] && VQ && VQ.mobile && (QQ[IQ] = DQ), UQ && "Macintosh" == QQ[JQ] && XQ && typeof XQ.standalone !== sQ && XQ.maxTouchPoints && XQ.maxTouchPoints > 2 && (QQ[JQ] = "iPad", QQ[IQ] = pQ), QQ
          }, this.Uj = function() {
            var QQ = {};
            return QQ[rQ] = TQ, QQ[BQ] = TQ, WW.call(QQ, wQ, GQ.engine), QQ
          }, this.getOS = function() {
            var QQ = {};
            return QQ[rQ] = TQ, QQ[BQ] = TQ, WW.call(QQ, wQ, GQ.os), UQ && !QQ[rQ] && VQ && VQ.platform && "Unknown" != VQ.platform && (QQ[rQ] = VQ.platform.replace(/chrome os/i, NQ).replace(/macos/i, ZQ)), QQ
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Uj(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return wQ
          }, this.setUA = function(QQ) {
            return wQ = typeof QQ === PQ && QQ.length > 500 ? QW(QQ, 500) : QQ, this
          }, this.setUA(wQ), this
        };
      TW.VERSION = "1.0.41", TW.BROWSER = KQ([rQ, BQ, gQ]), TW.CPU = KQ([yQ]), TW.DEVICE = KQ([JQ, jQ, IQ, VQ, DQ, GQ, pQ, UQ, bQ]), TW.ENGINE = TW.OS = KQ([rQ, BQ]), typeof WQ !== sQ ? (QQ.exports && (WQ = QQ.exports = TW), WQ.UAParser = TW) : XQ.amdO ? (wQ = function() {
        return TW
      }.call(WQ, XQ, WQ, QQ)) === TQ || (QQ.exports = wQ) : typeof qQ !== sQ && (qQ.UAParser = TW);
      var zW = typeof qQ !== sQ && (qQ.jQuery || qQ.Zepto);
      if (zW && !zW.ua) {
        var sW = new TW;
        zW.ua = sW.getResult(), zW.ua.get = function() {
          return sW.getUA()
        }, zW.ua.set = function(QQ) {
          sW.setUA(QQ);
          var WQ = sW.getResult();
          for (var XQ in WQ) zW.ua[XQ] = WQ[XQ]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);