export const id = 29;
export const ids = [29];
export const modules = {
  7382: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BaseExtension: () => JZ,
      BaseInstrumentation: () => cZ,
      BaseTransport: () => tU,
      CSPInstrumentation: () => KU,
      ConsoleInstrumentation: () => WZ,
      ConsoleTransport: () => Ze,
      EVENT_CLICK: () => vc,
      EVENT_NAVIGATION: () => mc,
      EVENT_ROUTE_CHANGE: () => Sc,
      EVENT_SESSION_EXTEND: () => Kc,
      EVENT_SESSION_RESUME: () => Vc,
      EVENT_SESSION_START: () => Ec,
      EVENT_VIEW_CHANGED: () => Qc,
      ErrorsInstrumentation: () => HZ,
      FetchTransport: () => me,
      InternalLoggerLevel: () => uc,
      LogLevel: () => vZ,
      MAX_SESSION_PERSISTENCE_TIME: () => qJ,
      NavigationInstrumentation: () => NU,
      Observable: () => rZ,
      PerformanceInstrumentation: () => RF,
      PersistentSessionsManager: () => pc,
      SESSION_EXPIRATION_TIME: () => eJ,
      SESSION_INACTIVITY_TIME: () => XJ,
      STORAGE_KEY: () => UJ,
      SessionInstrumentation: () => FZ,
      TransportItemType: () => oU,
      UserActionInstrumentation: () => VU,
      UserActionState: () => nU,
      VERSION: () => ZZ,
      ViewInstrumentation: () => kZ,
      VolatileSessionsManager: () => dc,
      WebVitalsInstrumentation: () => gF,
      allLogLevels: () => QZ,
      browserMeta: () => RU,
      buildStackFrame: () => UZ,
      captureMetas: () => ke,
      createInternalLogger: () => ye,
      createPromiseBuffer: () => De,
      createSession: () => aU,
      deepEqual: () => rc,
      defaultEventDomain: () => FJ,
      defaultExceptionType: () => yZ,
      defaultGlobalObjectKey: () => Se,
      defaultInternalLoggerLevel: () => Rc,
      defaultLogLevel: () => mZ,
      faro: () => GJ,
      genShortID: () => xc,
      getCurrentTimestamp: () => nc,
      getDataFromSafariExtensions: () => DZ,
      getIgnoreUrls: () => LJ,
      getInternalFaroFromGlobalObject: () => DJ,
      getStackFramesFromError: () => nZ,
      getTransportBody: () => ce,
      getUrlFromResource: () => BJ,
      getWebInstrumentations: () => OU,
      globalObject: () => YJ,
      initializeFaro: () => te,
      internalGlobalObjectKey: () => hJ,
      isArray: () => bJ,
      isBoolean: () => yJ,
      isDomError: () => zJ,
      isDomException: () => NJ,
      isElement: () => TJ,
      isElementDefined: () => OJ,
      jn: () => RJ,
      isError: () => pJ,
      isErrorDefined: () => kJ,
      isErrorEvent: () => dJ,
      isEvent: () => PJ,
      isEventDefined: () => HJ,
      isFunction: () => MJ,
      isInstanceOf: () => vJ,
      isInt: () => KJ,
      isInternalFaroOnGlobalObject: () => nJ,
      isMap: () => uJ,
      isMapDefined: () => CJ,
      isNull: () => QJ,
      isNumber: () => VJ,
      isObject: () => IJ,
      isPrimitive: () => gJ,
      isRegExp: () => wJ,
      isString: () => EJ,
      isSymbol: () => SJ,
      isSyntheticEvent: () => iJ,
      isThenable: () => WJ,
      isToString: () => rJ,
      isTypeof: () => xJ,
      isUndefined: () => mJ,
      makeCoreConfig: () => be,
      noop: () => Cc,
      osMeta: () => LU,
      parseStacktrace: () => GZ,
      sdkMeta: () => BU,
      setInternalFaroOnGlobalObject: () => sJ,
      transportItemTypeToBodyKey: () => lU,
      unknownString: () => PZ,
      userActionDataAttribute: () => LF,
      userActionTimeoutDataAttribute: () => aF
    });
    const FJ = "browser",
      UJ = "com.grafana.faro.session",
      eJ = 144e5,
      XJ = 9e5,
      AJ = 1e3,
      qJ = XJ,
      jJ = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: qJ
      };
    const YJ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof ZJ.g ? ZJ.g : "undefined" !== typeof self ? self : void 0;
    const hJ = "_faroInternal";

    function DJ() {
      return YJ[hJ]
    }

    function sJ(JJ) {
      JJ.config.isolate ? JJ.internalLogger.debug("Skipping registering internal Faro instance on global object") : (JJ.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(YJ, hJ, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: JJ
      }))
    }

    function nJ() {
      return hJ in YJ
    }
    let GJ = {
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

    function fJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      return cJ.debug("Initializing Faro"), GJ = {
          api: eJ,
          config: ZJ,
          instrumentations: XJ,
          internalLogger: cJ,
          metas: FJ,
          pause: UJ.pause,
          transports: UJ,
          unpatchedConsole: JJ,
          unpause: UJ.unpause
        }, sJ(GJ),
        function(JJ) {
          if (JJ.config.preventGlobalExposure) JJ.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (JJ.internalLogger.debug(`Registering public faro reference in the global scope using "${JJ.config.globalObjectKey}" key`), JJ.config.globalObjectKey in YJ) return void JJ.internalLogger.warn(`Skipping global registration due to key "${JJ.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(YJ, JJ.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: JJ
            })
          }
        }(GJ), GJ
    }

    function xJ(JJ, cJ) {
      return typeof JJ === cJ
    }

    function rJ(JJ, cJ) {
      return Object.prototype.toString.call(JJ) === `[object ${cJ}]`
    }

    function vJ(JJ, cJ) {
      try {
        return JJ instanceof cJ
      } catch (ZJ) {
        return !1
      }
    }
    const mJ = JJ => xJ(JJ, "undefined"),
      QJ = JJ => xJ(JJ, "null"),
      EJ = JJ => xJ(JJ, "string"),
      VJ = JJ => xJ(JJ, "number") && !isNaN(JJ) || xJ(JJ, "bigint"),
      KJ = JJ => VJ(JJ) && Number.isInteger(JJ),
      yJ = JJ => xJ(JJ, "boolean"),
      SJ = JJ => xJ(JJ, "symbol"),
      IJ = JJ => !QJ(JJ) && xJ(JJ, "object"),
      MJ = JJ => xJ(JJ, "function"),
      bJ = JJ => rJ(JJ, "Array"),
      wJ = JJ => rJ(JJ, "RegExp"),
      WJ = JJ => MJ(null === JJ || void 0 === JJ ? void 0 : JJ.then),
      gJ = JJ => !IJ(JJ) && !MJ(JJ),
      HJ = "undefined" !== typeof Event,
      PJ = JJ => HJ && vJ(JJ, Event),
      kJ = "undefined" !== typeof Error,
      pJ = JJ => kJ && vJ(JJ, Error),
      dJ = JJ => rJ(JJ, "ErrorEvent"),
      zJ = JJ => rJ(JJ, "DOMError"),
      NJ = JJ => rJ(JJ, "DOMException"),
      OJ = "undefined" !== typeof Element,
      TJ = JJ => OJ && vJ(JJ, Element),
      CJ = "undefined" !== typeof Map,
      uJ = JJ => CJ && vJ(JJ, Map),
      iJ = JJ => IJ(JJ) && "nativeEvent" in JJ && "preventDefault" in JJ && "stopPropagation" in JJ;

    function RJ(JJ) {
      return null == JJ || (bJ(JJ) || EJ(JJ) ? 0 === JJ.length : !!IJ(JJ) && 0 === Object.keys(JJ).length)
    }

    function LJ() {
      return GJ.transports.transports.flatMap((JJ => JJ.getIgnoreUrls()))
    }

    function aJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return LJ().some((cJ => JJ && null != JJ.match(cJ)))
    }

    function BJ(JJ) {
      return EJ(JJ) ? JJ : JJ instanceof URL ? JJ.href : !RJ(JJ) && MJ(null === JJ || void 0 === JJ ? void 0 : JJ.toString) ? JJ.toString() : void 0
    }
    const tJ = "sessionStorage",
      oJ = "localStorage";

    function lJ(JJ) {
      try {
        let cJ;
        cJ = window[JJ];
        const ZJ = "__faro_storage_test__";
        return cJ.setItem(ZJ, ZJ), cJ.removeItem(ZJ), !0
      } catch (ZJ) {
        var cJ;
        return null === (cJ = GJ.internalLogger) || void 0 === cJ || cJ.info(`Web storage of type ${JJ} is not available. Reason: ${ZJ}`), !1
      }
    }

    function Jc(JJ, cJ) {
      return ec(cJ) ? window[cJ].getItem(JJ) : null
    }

    function cc(JJ, cJ, ZJ) {
      if (ec(ZJ)) try {
        window[ZJ].setItem(JJ, cJ)
      } catch (FJ) {}
    }

    function Zc(JJ, cJ) {
      ec(cJ) && window[cJ].removeItem(JJ)
    }
    const Fc = lJ(oJ),
      Uc = lJ(tJ);

    function ec(JJ) {
      return JJ === oJ ? Fc : JJ === tJ && Uc
    }

    function Xc(JJ) {
      return Xc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, Xc(JJ)
    }

    function Ac(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != Xc(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != Xc(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == Xc(cJ) ? cJ : cJ + ""
    }

    function qc(JJ, cJ, ZJ) {
      return (cJ = Ac(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function jc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function Yc(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? jc(Object(ZJ), !0).forEach((function(cJ) {
          qc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : jc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function hc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GJ;
      var cJ, ZJ, FJ;
      const UJ = JJ.config.sessionTracking,
        eJ = null !== (cJ = null !== (ZJ = null === UJ || void 0 === UJ || null === (FJ = UJ.sampler) || void 0 === FJ ? void 0 : FJ.call(UJ, {
          metas: JJ.metas.value
        })) && void 0 !== ZJ ? ZJ : null === UJ || void 0 === UJ ? void 0 : UJ.samplingRate) && void 0 !== cJ ? cJ : 1,
        XJ = "number" === typeof eJ ? function(JJ) {
          return Math.min(1, Math.max(0, JJ))
        }(eJ) : 0;
      if (!(XJ > 0)) return !1;
      if (1 === XJ) return !0;
      try {
        const JJ = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === JJ || void 0 === JJ ? void 0 : JJ.getRandomValues)) {
          const cJ = new Uint32Array(1);
          return JJ.getRandomValues(cJ), cJ[0] / Math.pow(2, 32) < XJ
        }
      } catch (AJ) {}
      return Math.random() < XJ
    }

    function Dc() {
      return Date.now()
    }

    function sc() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function nc() {
      return (new Date).toISOString()
    }

    function Gc(JJ) {
      return new Date(JJ).toISOString()
    }
    const fc = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function xc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const cJ = new Uint32Array(JJ),
        ZJ = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === ZJ || void 0 === ZJ ? void 0 : ZJ.getRandomValues) ZJ.getRandomValues(cJ);
      else
        for (let UJ = 0; UJ < JJ; UJ++) cJ[UJ] = Math.floor(4294967296 * Math.random());
      let FJ = "";
      for (let UJ = 0; UJ < JJ; UJ++) FJ += fc[cJ[UJ] % 59];
      return FJ
    }

    function rc(JJ, cJ) {
      if (JJ === cJ) return !0;
      if (xJ(JJ, "number") && isNaN(JJ)) return xJ(cJ, "number") && isNaN(cJ);
      const ZJ = bJ(JJ),
        FJ = bJ(cJ);
      if (ZJ !== FJ) return !1;
      if (ZJ && FJ) {
        const ZJ = JJ.length;
        if (ZJ !== cJ.length) return !1;
        for (let FJ = ZJ; 0 !== FJ--;)
          if (!rc(JJ[FJ], cJ[FJ])) return !1;
        return !0
      }
      const UJ = IJ(JJ),
        eJ = IJ(cJ);
      if (UJ !== eJ) return !1;
      if (JJ && cJ && UJ && eJ) {
        const ZJ = Object.keys(JJ),
          FJ = Object.keys(cJ);
        if (ZJ.length !== FJ.length) return !1;
        for (let JJ of ZJ)
          if (!FJ.includes(JJ)) return !1;
        for (let UJ of ZJ)
          if (!rc(JJ[UJ], cJ[UJ])) return !1;
        return !0
      }
      return !1
    }
    const vc = "click",
      mc = "navigation",
      Qc = "view_changed",
      Ec = "session_start",
      Vc = "session_resume",
      Kc = "session_extend",
      yc = "service_name_override",
      Sc = "route_change";

    function Ic() {
      let {
        sessionId: JJ,
        started: cJ,
        lastActivity: ZJ,
        isSampled: FJ = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, UJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GJ;
      var eJ;
      const XJ = Dc(),
        AJ = null === (eJ = UJ.config) || void 0 === eJ || null === (eJ = eJ.sessionTracking) || void 0 === eJ ? void 0 : eJ.generateSessionId;
      return null == JJ && (JJ = "function" === typeof AJ ? AJ() : xc()), {
        sessionId: JJ,
        lastActivity: null !== ZJ && void 0 !== ZJ ? ZJ : XJ,
        started: null !== cJ && void 0 !== cJ ? cJ : XJ,
        isSampled: FJ
      }
    }

    function Mc(JJ) {
      if (null == JJ) return !1;
      const cJ = Dc();
      return cJ - JJ.started < 144e5 && cJ - JJ.lastActivity < XJ
    }

    function bc(JJ) {
      let {
        fetchUserSession: cJ,
        storeUserSession: ZJ,
        adoptSession: FJ,
        updateInterval: UJ = 0
      } = JJ, AJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GJ, qJ = 0;
      return function() {
        let {
          forceSessionExtend: JJ = !1,
          refreshActivity: jJ = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var YJ, hJ;
        if (!cJ || !ZJ) return;
        const DJ = Dc();
        if (!JJ && DJ < qJ && qJ - DJ <= UJ) return;
        const sJ = AJ.config.sessionTracking,
          nJ = null === sJ || void 0 === sJ ? void 0 : sJ.persistent;
        if (nJ && !Fc || !nJ && !Uc) return;
        const GJ = cJ();
        if (qJ = Math.min(DJ + UJ, (null !== (YJ = null === GJ || void 0 === GJ ? void 0 : GJ.started) && void 0 !== YJ ? YJ : DJ) + eJ, (null !== (hJ = null === GJ || void 0 === GJ ? void 0 : GJ.lastActivity) && void 0 !== hJ ? hJ : DJ) + XJ), !1 === JJ && Mc(GJ)) {
          var fJ;
          jJ && ZJ(Yc(Yc({}, GJ), {}, {
            lastActivity: DJ
          }));
          const JJ = null === (fJ = AJ.metas.value.session) || void 0 === fJ ? void 0 : fJ.id;
          null != FJ && null != GJ.sessionMeta && GJ.sessionId !== JJ && FJ(GJ.sessionMeta)
        } else {
          var xJ, rJ, vJ;
          let JJ = Wc(Ic({
            isSampled: hc(AJ)
          }, AJ), GJ, AJ);
          qJ = DJ + UJ, ZJ(JJ), null === (xJ = AJ.api) || void 0 === xJ || xJ.setSession(JJ.sessionMeta), null === sJ || void 0 === sJ || null === (rJ = sJ.onSessionChange) || void 0 === rJ || rJ.call(sJ, null !== (vJ = null === GJ || void 0 === GJ ? void 0 : GJ.sessionMeta) && void 0 !== vJ ? vJ : null, JJ.sessionMeta)
        }
      }
    }

    function wc(JJ) {
      let cJ, {
          fetchUserSession: ZJ,
          storeUserSession: FJ,
          updateInterval: UJ = 0
        } = JJ,
        eJ = 0;
      return JJ => {
        const XJ = Dc();
        if (JJ === cJ && XJ < eJ && eJ - XJ <= UJ) return;
        cJ = JJ, eJ = XJ + UJ;
        const AJ = ZJ();
        (null === AJ || void 0 === AJ ? void 0 : AJ.sessionId) === JJ && Mc(AJ) && FJ(Yc(Yc({}, AJ), {}, {
          lastActivity: XJ
        }))
      }
    }

    function Wc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GJ;
      var FJ, UJ, eJ, XJ, AJ, qJ;
      const jJ = Yc(Yc({}, JJ), {}, {
          sessionMeta: {
            id: JJ.sessionId,
            attributes: Hc(Yc(Yc(Yc({}, null === (FJ = ZJ.config.sessionTracking) || void 0 === FJ || null === (FJ = FJ.session) || void 0 === FJ ? void 0 : FJ.attributes), null !== (UJ = null === (eJ = ZJ.metas.value.session) || void 0 === eJ ? void 0 : eJ.attributes) && void 0 !== UJ ? UJ : {}), {}, {
              isSampled: JJ.isSampled.toString()
            }))
          }
        }),
        YJ = null !== (XJ = null === (AJ = ZJ.metas.value.session) || void 0 === AJ ? void 0 : AJ.overrides) && void 0 !== XJ ? XJ : null === cJ || void 0 === cJ || null === (qJ = cJ.sessionMeta) || void 0 === qJ ? void 0 : qJ.overrides;
      RJ(YJ) || (jJ.sessionMeta.overrides = YJ);
      const hJ = null === cJ || void 0 === cJ ? void 0 : cJ.sessionId;
      return null != hJ && (jJ.sessionMeta.attributes.previousSession = hJ), jJ
    }

    function gc(JJ) {
      let {
        fetchUserSession: cJ,
        storeUserSession: ZJ
      } = JJ, FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GJ, UJ = !1;
      return function(JJ) {
        if (UJ) return;
        const eJ = JJ.session,
          XJ = cJ();
        let AJ = null === eJ || void 0 === eJ ? void 0 : eJ.id;
        const qJ = null === eJ || void 0 === eJ ? void 0 : eJ.attributes,
          jJ = null === eJ || void 0 === eJ ? void 0 : eJ.overrides,
          YJ = null === XJ || void 0 === XJ ? void 0 : XJ.sessionMeta,
          hJ = null === YJ || void 0 === YJ ? void 0 : YJ.overrides,
          DJ = !!jJ && !rc(jJ, hJ),
          sJ = !!qJ && !rc(qJ, null === YJ || void 0 === YJ ? void 0 : YJ.attributes);
        if (eJ && AJ !== (null === XJ || void 0 === XJ ? void 0 : XJ.sessionId) || sJ || DJ) {
          var nJ, GJ;
          const JJ = null != XJ && AJ === XJ.sessionId,
            cJ = Wc(JJ ? XJ : Ic({
              sessionId: AJ,
              isSampled: hc(FJ)
            }, FJ), XJ, FJ),
            eJ = null === XJ || void 0 === XJ || null === (nJ = XJ.sessionMeta) || void 0 === nJ || null === (nJ = nJ.attributes) || void 0 === nJ ? void 0 : nJ.previousSession;
          JJ && null != eJ && eJ !== cJ.sessionId && (cJ.sessionMeta.attributes.previousSession = eJ), (null === (GJ = cJ.sessionMeta.attributes) || void 0 === GJ ? void 0 : GJ.previousSession) === cJ.sessionId && delete cJ.sessionMeta.attributes.previousSession, ZJ(cJ),
            function(JJ, cJ) {
              let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var UJ, eJ, XJ;
              if (!cJ) return;
              const AJ = ZJ.serviceName,
                qJ = null !== (UJ = null !== (eJ = FJ.serviceName) && void 0 !== eJ ? eJ : null === (XJ = JJ.metas.value.app) || void 0 === XJ ? void 0 : XJ.name) && void 0 !== UJ ? UJ : "";
              AJ && AJ !== qJ && JJ.api.pushEvent(yc, {
                serviceName: AJ,
                previousServiceName: qJ
              })
            }(FJ, DJ, jJ, hJ), UJ = !0;
          try {
            FJ.api.setSession(cJ.sessionMeta)
          } finally {
            UJ = !1
          }
        }
      }
    }

    function Hc(JJ) {
      const cJ = {};
      for (const ZJ of Object.keys(JJ)) {
        const FJ = JJ[ZJ];
        void 0 !== FJ && (cJ[ZJ] = FJ)
      }
      return cJ
    }

    function Pc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== JJ && void 0 !== JJ ? JJ : {}, function() {
        const JJ = new WeakSet;
        return function(cJ, ZJ) {
          if (IJ(ZJ) && null !== ZJ) {
            if (JJ.has(ZJ)) return null;
            JJ.add(ZJ)
          }
          return ZJ
        }
      }())
    }

    function kc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const cJ = {};
      for (const [ZJ, FJ] of Object.entries(JJ)) cJ[ZJ] = IJ(FJ) && null !== FJ ? Pc(FJ) : String(FJ);
      return cJ
    }
    var pc = class JJ {
      constructor() {
        var cJ = this;
        let ZJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GJ;
        this.context = ZJ, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = JJ => {
          this.adopting = !0;
          try {
            var cJ;
            null === (cJ = this.context.api) || void 0 === cJ || cJ.setSession(JJ)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: JJ = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return cJ.updateUserSession({
            refreshActivity: JJ
          })
        }, this.recordActivity = wc({
          fetchUserSession: JJ.fetchUserSession,
          storeUserSession: JJ.storeUserSession,
          updateInterval: AJ
        }), this.updateUserSession = bc({
          fetchUserSession: JJ.fetchUserSession,
          storeUserSession: JJ.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: AJ
        }, ZJ), this.init()
      }
      static removeUserSession() {
        Zc(UJ, JJ.storageTypeLocal)
      }
      static storeUserSession(cJ) {
        cc(UJ, Pc(cJ), JJ.storageTypeLocal)
      }
      static fetchUserSession() {
        const cJ = Jc(UJ, JJ.storageTypeLocal);
        return cJ ? JSON.parse(cJ) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var JJ;
            this.updateSession({
              refreshActivity: !1
            });
            const cJ = null === (JJ = this.context.api) || void 0 === JJ || null === (JJ = JJ.getSession()) || void 0 === JJ ? void 0 : JJ.id;
            cJ && this.recordActivity(cJ)
          }
        })), this.context.metas.addListener(gc({
          fetchUserSession: JJ.fetchUserSession,
          storeUserSession: JJ.storeUserSession
        }, this.context))
      }
    };
    pc.storageTypeLocal = oJ;
    var dc = class JJ {
      constructor() {
        var cJ = this;
        let ZJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GJ;
        this.context = ZJ, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: JJ = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return cJ.updateUserSession({
            refreshActivity: JJ
          })
        }, this.recordActivity = wc({
          fetchUserSession: JJ.fetchUserSession,
          storeUserSession: JJ.storeUserSession,
          updateInterval: AJ
        }), this.updateUserSession = bc({
          fetchUserSession: JJ.fetchUserSession,
          storeUserSession: JJ.storeUserSession,
          updateInterval: AJ
        }, ZJ), this.init()
      }
      static removeUserSession() {
        Zc(UJ, JJ.storageTypeSession)
      }
      static storeUserSession(cJ) {
        cc(UJ, Pc(cJ), JJ.storageTypeSession)
      }
      static fetchUserSession() {
        const cJ = Jc(UJ, JJ.storageTypeSession);
        return cJ ? JSON.parse(cJ) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var JJ;
            this.updateSession({
              refreshActivity: !1
            });
            const cJ = null === (JJ = this.context.api) || void 0 === JJ || null === (JJ = JJ.getSession()) || void 0 === JJ ? void 0 : JJ.id;
            cJ && this.recordActivity(cJ)
          }
        })), this.context.metas.addListener(gc({
          fetchUserSession: JJ.fetchUserSession,
          storeUserSession: JJ.storeUserSession
        }, this.context))
      }
    };
    dc.storageTypeSession = tJ;
    const zc = new WeakMap;

    function Nc(JJ) {
      let cJ = zc.get(JJ);
      if (!cJ) {
        let ZJ = [],
          FJ = [];
        cJ = {
          addSessionUpdateListener: JJ => {
            ZJ.push(JJ)
          },
          removeSessionUpdateListener: JJ => {
            ZJ = ZJ.filter((cJ => cJ !== JJ))
          },
          notifySessionUpdate: JJ => {
            ZJ.forEach((cJ => cJ(JJ)))
          },
          shouldCapture: () => FJ.every((JJ => JJ())),
          addCaptureFilter: JJ => {
            FJ.push(JJ)
          },
          removeCaptureFilter: JJ => {
            FJ = FJ.filter((cJ => cJ !== JJ))
          }
        }, zc.set(JJ, cJ)
      }
      return cJ
    }
    var Oc = class {
      constructor(JJ, cJ, ZJ) {
        this.metas = JJ, this.transports = cJ, this.onActivate = ZJ, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = JJ => {
          var cJ, ZJ, FJ;
          const UJ = this.pending;
          var eJ, XJ;
          if ("overrides" === JJ.type) return void(this.pending = {
            reset: null !== (eJ = null === UJ || void 0 === UJ ? void 0 : UJ.reset) && void 0 !== eJ && eJ,
            inheritOverrides: null === (XJ = null === UJ || void 0 === UJ ? void 0 : UJ.inheritOverrides) || void 0 === XJ || XJ,
            session: Yc(Yc({}, null === UJ || void 0 === UJ ? void 0 : UJ.session), {}, {
              overrides: Yc(Yc({}, null === UJ || void 0 === UJ ? void 0 : UJ.session.overrides), JJ.overrides)
            })
          });
          const AJ = JJ.session,
            qJ = RJ(AJ) || null != AJ && "id" in AJ && !AJ.id,
            jJ = null !== (cJ = null === AJ || void 0 === AJ ? void 0 : AJ.overrides) && void 0 !== cJ ? cJ : null === UJ || void 0 === UJ ? void 0 : UJ.session.overrides;
          this.pending = {
            reset: qJ || !(null === AJ || void 0 === AJ ? void 0 : AJ.id) && null !== (ZJ = null === UJ || void 0 === UJ ? void 0 : UJ.reset) && void 0 !== ZJ && ZJ,
            inheritOverrides: !(!JJ.overrides && void 0 !== (null === AJ || void 0 === AJ ? void 0 : AJ.overrides)) && (null === (FJ = null === UJ || void 0 === UJ ? void 0 : UJ.inheritOverrides) || void 0 === FJ || FJ),
            session: {
              id: null === AJ || void 0 === AJ ? void 0 : AJ.id,
              attributes: (null === AJ || void 0 === AJ ? void 0 : AJ.attributes) && Yc({}, AJ.attributes),
              overrides: JJ.overrides ? Yc(Yc({}, null === UJ || void 0 === UJ ? void 0 : UJ.session.overrides), JJ.overrides) : jJ && Yc({}, jJ)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var JJ, cJ;
        this.waiting = !0, Nc(this.metas).addSessionUpdateListener(this.recordUpdate), Nc(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (JJ = (cJ = this.metas).addCaptureListener) || void 0 === JJ || JJ.call(cJ, this.activate), this.activate()
      }
      destroy() {
        var JJ, cJ;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Nc(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (JJ = (cJ = this.metas).removeCaptureListener) || void 0 === JJ || JJ.call(cJ, this.activate), Nc(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Tc(JJ) {
      return (null === JJ || void 0 === JJ ? void 0 : JJ.persistent) ? pc : dc
    }

    function Cc() {}
    let uc = function(JJ) {
      return JJ[JJ.OFF = 0] = "OFF", JJ[JJ.ERROR = 1] = "ERROR", JJ[JJ.WARN = 2] = "WARN", JJ[JJ.INFO = 3] = "INFO", JJ[JJ.VERBOSE = 4] = "VERBOSE", JJ
    }({});
    const ic = {
        debug: Cc,
        error: Cc,
        info: Cc,
        prefix: "Faro",
        warn: Cc
      },
      Rc = 1;

    function Lc(JJ) {
      return Lc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, Lc(JJ)
    }

    function ac(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != Lc(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != Lc(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == Lc(cJ) ? cJ : cJ + ""
    }

    function Bc(JJ, cJ, ZJ) {
      return (cJ = ac(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function tc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function oc(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? tc(Object(ZJ), !0).forEach((function(cJ) {
          Bc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : tc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }
    const lc = oc({}, console);
    var JZ = class {
        constructor() {
          this.unpatchedConsole = lc, this.internalLogger = ic, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
          this.internalLogger.debug(`${this.name}\n`, ...cJ)
        }
        logInfo() {
          for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
          this.internalLogger.info(`${this.name}\n`, ...cJ)
        }
        logWarn() {
          for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
          this.internalLogger.warn(`${this.name}\n`, ...cJ)
        }
        logError() {
          for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
          this.internalLogger.error(`${this.name}\n`, ...cJ)
        }
      },
      cZ = class extends JZ {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ZZ = "2.12.1";
    var FZ = class extends cZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ZZ, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(JJ) {
        var cJ;
        const ZJ = JJ.session;
        if (ZJ && ZJ.id !== (null === (cJ = this.notifiedSession) || void 0 === cJ ? void 0 : cJ.id)) {
          var FJ;
          if (this.isAdoptingSession()) return void(this.notifiedSession = ZJ);
          if (this.notifiedSession && this.notifiedSession.id === (null === (FJ = ZJ.attributes) || void 0 === FJ ? void 0 : FJ.previousSession)) return this.api.pushEvent(Kc, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = ZJ);
          this.notifiedSession = ZJ, this.api.pushEvent(Ec, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(JJ, cJ, ZJ) {
        const FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.session;
        let UJ, eJ, XJ = JJ.fetchUserSession();
        if (cJ.persistent && cJ.maxSessionPersistenceTime && XJ) {
          const JJ = Dc();
          XJ.lastActivity < JJ - cJ.maxSessionPersistenceTime && (pc.removeUserSession(), XJ = null)
        }
        const AJ = Mc(XJ);
        if ((null === ZJ || void 0 === ZJ ? void 0 : ZJ.reset) || !AJ || (null === FJ || void 0 === FJ ? void 0 : FJ.id) && FJ.id !== (null === XJ || void 0 === XJ ? void 0 : XJ.sessionId)) {
          var qJ, jJ, YJ, hJ, DJ, sJ;
          eJ = Ic({
            sessionId: (null === ZJ || void 0 === ZJ ? void 0 : ZJ.reset) ? void 0 : null !== (qJ = null === FJ || void 0 === FJ ? void 0 : FJ.id) && void 0 !== qJ ? qJ : null === (jJ = cJ.session) || void 0 === jJ ? void 0 : jJ.id,
            isSampled: hc(this)
          }, this);
          const JJ = eJ.sessionId,
            nJ = ZJ && AJ ? null === XJ || void 0 === XJ || null === (YJ = XJ.sessionMeta) || void 0 === YJ ? void 0 : YJ.overrides : void 0,
            GJ = nJ ? Yc(Yc({}, null === (hJ = cJ.session) || void 0 === hJ ? void 0 : hJ.overrides), nJ) : null === (DJ = cJ.session) || void 0 === DJ ? void 0 : DJ.overrides;
          eJ.sessionMeta = Yc({
            id: JJ,
            attributes: Yc({
              isSampled: eJ.isSampled.toString()
            }, null === (sJ = cJ.session) || void 0 === sJ ? void 0 : sJ.attributes)
          }, GJ ? {
            overrides: GJ
          } : {}), UJ = Ec
        } else {
          var nJ, GJ;
          const JJ = null === XJ || void 0 === XJ ? void 0 : XJ.sessionId;
          eJ = Ic({
            sessionId: JJ,
            isSampled: XJ.isSampled || !1,
            started: null === XJ || void 0 === XJ ? void 0 : XJ.started
          }, this);
          const ZJ = null === XJ || void 0 === XJ ? void 0 : XJ.sessionMeta,
            FJ = Yc(Yc({}, null === (nJ = cJ.session) || void 0 === nJ ? void 0 : nJ.overrides), null === ZJ || void 0 === ZJ ? void 0 : ZJ.overrides);
          eJ.sessionMeta = Yc(Yc({}, cJ.session), {}, {
            id: JJ,
            attributes: Yc(Yc(Yc({}, null === (GJ = cJ.session) || void 0 === GJ ? void 0 : GJ.attributes), null === ZJ || void 0 === ZJ ? void 0 : ZJ.attributes), {}, {
              isSampled: eJ.isSampled.toString()
            }),
            overrides: FJ
          }), UJ = Vc
        }
        var fJ;
        if (FJ && (eJ.sessionMeta = Yc(Yc({}, eJ.sessionMeta), {}, {
            attributes: Yc(Yc(Yc({}, null === (fJ = eJ.sessionMeta) || void 0 === fJ ? void 0 : fJ.attributes), FJ.attributes), {}, {
              isSampled: eJ.isSampled.toString()
            })
          }), FJ.overrides)) {
          const JJ = (null === ZJ || void 0 === ZJ ? void 0 : ZJ.inheritOverrides) ? Yc(Yc({}, eJ.sessionMeta.overrides), FJ.overrides) : FJ.overrides;
          Object.keys(JJ).length > 0 ? eJ.sessionMeta.overrides = JJ : delete eJ.sessionMeta.overrides
        }
        return {
          initialSession: eJ,
          lifecycleType: UJ
        }
      }
      registerBeforeSendHook(JJ) {
        var cJ;
        this.beforeSendHook = cJ => {
          var ZJ, FJ;
          const UJ = null === (ZJ = cJ.meta.session) || void 0 === ZJ ? void 0 : ZJ.id;
          UJ && !this.transports.isPaused() && JJ(UJ);
          const eJ = null === (FJ = cJ.meta.session) || void 0 === FJ ? void 0 : FJ.attributes;
          if (eJ && "true" === (null === eJ || void 0 === eJ ? void 0 : eJ.isSampled)) {
            var XJ;
            let JJ = JSON.parse(JSON.stringify(cJ));
            const ZJ = null === (XJ = JJ.meta.session) || void 0 === XJ ? void 0 : XJ.attributes;
            var AJ;
            if (null === ZJ || void 0 === ZJ || delete ZJ.isSampled, 0 === Object.keys(null !== ZJ && void 0 !== ZJ ? ZJ : {}).length) null === (AJ = JJ.meta.session) || void 0 === AJ || delete AJ.attributes;
            return JJ
          }
          return null
        }, null === (cJ = this.transports) || void 0 === cJ || cJ.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var JJ;
        this.logDebug("init session instrumentation");
        const cJ = document.prerendering;
        var ZJ;
        if ((null === (JJ = this.config.sessionTracking) || void 0 === JJ ? void 0 : JJ.enabled) && (cJ || this.prerenderSession)) return null !== (ZJ = this.prerenderSession) && void 0 !== ZJ || (this.prerenderSession = new Oc(this.metas, this.transports, (JJ => {
          this.prerenderSession = void 0, this.initializeSession(JJ)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(JJ) {
        const cJ = this.config.sessionTracking;
        if (null === cJ || void 0 === cJ ? void 0 : cJ.enabled) {
          var ZJ, FJ;
          const UJ = Tc(cJ),
            eJ = new UJ(this);
          this.isAdoptingSession = eJ.isAdopting, this.registerBeforeSendHook(eJ.recordActivity);
          const {
            initialSession: XJ,
            lifecycleType: AJ
          } = this.createInitialSession(UJ, cJ, JJ);
          UJ.storeUserSession(XJ);
          const qJ = XJ.sessionMeta;
          this.notifiedSession = qJ, this.api.setSession(qJ), this.captureListener = () => {
            this.transports.isPaused() || eJ.updateSession({
              refreshActivity: !1
            })
          }, null === (ZJ = (FJ = this.metas).addCaptureListener) || void 0 === ZJ || ZJ.call(FJ, this.captureListener), AJ === Ec && this.api.pushEvent(Ec, {}, void 0, {
            skipDedupe: !0
          }), AJ === Vc && this.api.pushEvent(Vc, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var JJ, cJ, ZJ;
        (null === (JJ = this.prerenderSession) || void 0 === JJ || JJ.destroy(), this.captureListener) && (null === (cJ = (ZJ = this.metas).removeCaptureListener) || void 0 === cJ || cJ.call(ZJ, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function UZ(JJ, cJ, ZJ, FJ) {
      const UJ = {
        filename: JJ || document.location.href,
        function: cJ || "?"
      };
      return void 0 !== ZJ && (UJ.lineno = ZJ), void 0 !== FJ && (UJ.colno = FJ), UJ
    }
    const eZ = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      XZ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      AZ = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      qZ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      jZ = "safari-extension",
      YZ = "safari-web-extension",
      hZ = /Minified React error #\d+;/i;

    function DZ(JJ, cJ) {
      const ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.includes(jZ),
        FJ = !ZJ && (null === JJ || void 0 === JJ ? void 0 : JJ.includes("safari-web-extension"));
      return ZJ || FJ ? [(null === JJ || void 0 === JJ ? void 0 : JJ.includes("@")) ? JJ.split("@")[0] : JJ, ZJ ? `${jZ}:${cJ}` : `${YZ}:${cJ}`] : [JJ, cJ]
    }
    const sZ = 1024;

    function nZ(JJ) {
      let cJ = [];
      JJ.stacktrace ? cJ = JJ.stacktrace.split("\n").filter(((JJ, cJ) => cJ % 2 === 0)) : JJ.stack && (cJ = JJ.stack.split("\n"));
      const ZJ = cJ.reduce(((cJ, ZJ, FJ) => {
        if (ZJ.length > sZ) return cJ;
        let UJ, eJ, XJ, AJ, qJ;
        if (UJ = eZ.exec(ZJ)) {
          if (eJ = UJ[1], XJ = UJ[2], AJ = UJ[3], qJ = UJ[4], null === XJ || void 0 === XJ ? void 0 : XJ.startsWith("eval")) {
            const JJ = XZ.exec(XJ);
            JJ && (XJ = JJ[1], AJ = JJ[2], qJ = JJ[3])
          }
          XJ = (null === XJ || void 0 === XJ ? void 0 : XJ.startsWith("address at ")) ? XJ.substring(11) : XJ, [eJ, XJ] = DZ(eJ, XJ)
        } else if (UJ = AZ.exec(ZJ)) {
          if (eJ = UJ[1], XJ = UJ[3], AJ = UJ[4], qJ = UJ[5], XJ && XJ.includes(" > eval")) {
            const JJ = qZ.exec(XJ);
            JJ && (eJ = eJ || "eval", XJ = JJ[1], AJ = JJ[2])
          } else 0 === FJ && !qJ && VJ(JJ.columnNumber) && (qJ = String(JJ.columnNumber + 1));
          [eJ, XJ] = DZ(eJ, XJ)
        }
        return (XJ || eJ) && cJ.push(UZ(XJ, eJ, AJ ? Number(AJ) : void 0, qJ ? Number(qJ) : void 0)), cJ
      }), []);
      return hZ.test(JJ.message) ? ZJ.slice(1) : ZJ
    }

    function GZ(JJ) {
      return {
        frames: nZ(JJ)
      }
    }
    const fZ = "http-request-start",
      xZ = "http-request-end";
    var rZ = class JJ {
      constructor() {
        this.subscribers = []
      }
      subscribe(JJ) {
        return this.subscribers.push(JJ), {
          unsubscribe: () => this.unsubscribe(JJ)
        }
      }
      unsubscribe(JJ) {
        this.subscribers = this.subscribers.filter((cJ => cJ !== JJ))
      }
      notify(JJ) {
        this.subscribers.forEach((cJ => cJ(JJ)))
      }
      first() {
        const cJ = new JJ,
          ZJ = JJ => {
            cJ.notify(JJ), FJ.unsubscribe()
          },
          FJ = this.subscribe(ZJ),
          UJ = cJ.unsubscribe.bind(cJ);
        return this.withUnsubscribeOverride(cJ, UJ, ZJ)
      }
      takeWhile(cJ) {
        const ZJ = new JJ,
          FJ = JJ => {
            cJ(JJ) ? ZJ.notify(JJ) : ZJ.unsubscribe(FJ)
          };
        this.subscribe(FJ);
        const UJ = ZJ.unsubscribe.bind(ZJ);
        return this.withUnsubscribeOverride(ZJ, UJ, FJ)
      }
      filter(cJ) {
        const ZJ = new JJ,
          FJ = JJ => {
            cJ(JJ) && ZJ.notify(JJ)
          };
        this.subscribe(FJ);
        const UJ = ZJ.unsubscribe.bind(ZJ);
        return this.withUnsubscribeOverride(ZJ, UJ, FJ)
      }
      merge() {
        const cJ = new JJ,
          ZJ = [];
        for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
        UJ.forEach((JJ => {
          const FJ = JJ.subscribe((JJ => {
            cJ.notify(JJ)
          }));
          ZJ.push(FJ)
        }));
        const XJ = cJ.unsubscribeAll.bind(cJ);
        return cJ.unsubscribe = () => {
          ZJ.forEach((JJ => JJ.unsubscribe())), XJ()
        }, cJ
      }
      withUnsubscribeOverride(JJ, cJ, ZJ) {
        return JJ.unsubscribe = JJ => {
          cJ(JJ), this.unsubscribe(ZJ)
        }, JJ
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let vZ = function(JJ) {
      return JJ.TRACE = "trace", JJ.DEBUG = "debug", JJ.INFO = "info", JJ.LOG = "log", JJ.WARN = "warn", JJ.ERROR = "error", JJ
    }({});
    const mZ = "log",
      QZ = ["trace", "debug", "info", "log", "warn", "error"];
    let EZ, VZ = !1;
    const KZ = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      yZ = "Error",
      SZ = JJ => JJ.map((JJ => IJ(JJ) ? Pc(JJ) : String(JJ))).join(" ");

    function IZ(JJ) {
      let cJ, ZJ, FJ, UJ, eJ = [];
      if (dJ(JJ) && JJ.error) cJ = JJ.error.message, ZJ = JJ.error.name, eJ = nZ(JJ.error);
      else if ((FJ = zJ(JJ)) || NJ(JJ)) {
        const {
          name: UJ,
          message: eJ
        } = JJ;
        ZJ = null !== UJ && void 0 !== UJ ? UJ : FJ ? "DOMError" : "DOMException", cJ = eJ ? `${ZJ}: ${eJ}` : ZJ
      } else pJ(JJ) ? (ZJ = JJ.name, cJ = JJ.message, eJ = nZ(JJ)) : (IJ(JJ) || (UJ = PJ(JJ))) && (ZJ = UJ ? JJ.constructor.name : void 0, cJ = `Non-Error exception captured with keys: ${Object.keys(JJ)}`);
      return [cJ, ZJ, eJ]
    }

    function MZ(JJ) {
      const [cJ, ZJ, FJ, UJ, eJ] = JJ;
      let XJ, AJ, qJ = [];
      const jJ = EJ(cJ),
        YJ = UZ(ZJ, "?", FJ, UJ);
      return eJ || !jJ ? ([XJ, AJ, qJ] = IZ(null !== eJ && void 0 !== eJ ? eJ : cJ), 0 === qJ.length && (qJ = [YJ])) : jJ && ([XJ, AJ] = function(JJ) {
        var cJ, ZJ;
        const FJ = JJ.match(KZ),
          UJ = null !== (cJ = null === FJ || void 0 === FJ ? void 0 : FJ[1]) && void 0 !== cJ ? cJ : yZ;
        return [null !== (ZJ = null === FJ || void 0 === FJ ? void 0 : FJ[2]) && void 0 !== ZJ ? ZJ : JJ, UJ]
      }(cJ), qJ = [YJ]), {
        value: XJ,
        type: AJ,
        stackFrames: qJ
      }
    }

    function bZ(JJ, cJ) {
      return pJ(JJ[0]) ? MZ(JJ) : {
        value: cJ(JJ)
      }
    }
    const wZ = JJ => JJ.map((JJ => {
      try {
        return String(JJ)
      } catch (cJ) {
        return ""
      }
    })).join(" ");
    var WZ = class JJ extends cZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ZZ, this.errorSerializer = wZ
      }
      initialize() {
        var cJ, ZJ;
        const FJ = this.config.consoleInstrumentation,
          UJ = (null === FJ || void 0 === FJ ? void 0 : FJ.serializeErrors) || !!(null === FJ || void 0 === FJ ? void 0 : FJ.errorSerializer);
        this.errorSerializer = UJ ? null !== (cJ = null === FJ || void 0 === FJ ? void 0 : FJ.errorSerializer) && void 0 !== cJ ? cJ : SZ : wZ;
        const eJ = null !== (ZJ = null === FJ || void 0 === FJ ? void 0 : FJ.disabledLevels) && void 0 !== ZJ ? ZJ : JJ.defaultDisabledLevels,
          XJ = function(JJ) {
            if (EZ || (EZ = new rZ), !VZ) {
              const cJ = null !== JJ && void 0 !== JJ ? JJ : lc;
              QZ.forEach((JJ => {
                console[JJ] = function() {
                  for (var ZJ, FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
                  EZ.notify({
                    type: "console",
                    level: JJ,
                    args: UJ
                  }), null === (ZJ = cJ[JJ]) || void 0 === ZJ || ZJ.apply(console, UJ)
                }
              })), VZ = !0
            }
            return EZ
          }(this.unpatchedConsole);
        this.subscription = XJ.subscribe((cJ => {
          let {
            level: ZJ,
            args: UJ
          } = cJ;
          if (!eJ.includes(ZJ)) try {
            if (ZJ !== vZ.ERROR || (null === FJ || void 0 === FJ ? void 0 : FJ.consoleErrorAsLog))
              if (ZJ === vZ.ERROR && (null === FJ || void 0 === FJ ? void 0 : FJ.consoleErrorAsLog)) {
                const {
                  value: cJ,
                  type: FJ,
                  stackFrames: eJ
                } = bZ(UJ, this.errorSerializer);
                this.api.pushLog(cJ ? [JJ.consoleErrorPrefix + cJ] : UJ, {
                  level: ZJ,
                  context: {
                    value: null !== cJ && void 0 !== cJ ? cJ : "",
                    type: null !== FJ && void 0 !== FJ ? FJ : "",
                    stackFrames: (null === eJ || void 0 === eJ ? void 0 : eJ.length) ? SZ(eJ) : ""
                  }
                })
              } else this.api.pushLog(UJ, {
                level: ZJ
              });
            else {
              const {
                value: cJ,
                type: ZJ,
                stackFrames: FJ
              } = bZ(UJ, this.errorSerializer);
              if (cJ && !ZJ && !FJ) return void this.api.pushError(new Error(JJ.consoleErrorPrefix + cJ));
              this.api.pushError(new Error(JJ.consoleErrorPrefix + cJ), {
                type: ZJ,
                stackFrames: FJ
              })
            }
          } catch (XJ) {
            this.logError(XJ)
          }
        }))
      }
      destroy() {
        var JJ;
        null === (JJ = this.subscription) || void 0 === JJ || JJ.unsubscribe(), this.subscription = void 0
      }
    };
    WZ.defaultDisabledLevels = [vZ.DEBUG, vZ.TRACE, vZ.LOG], WZ.consoleErrorPrefix = "console.error: ";
    const gZ = [];
    var HZ = class extends cZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ZZ
      }
      initialize() {
        this.logDebug("Initializing"),
          function(JJ) {
            const cJ = window.onerror;
            window.onerror = function() {
              for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
              try {
                const {
                  value: cJ,
                  type: ZJ,
                  stackFrames: UJ
                } = MZ(FJ), eJ = FJ[4];
                if (cJ) {
                  const FJ = {
                    type: ZJ,
                    stackFrames: UJ
                  };
                  null != eJ && (FJ.originalError = eJ), JJ.pushError(new Error(cJ), FJ)
                }
              } finally {
                null === cJ || void 0 === cJ || cJ.apply(window, FJ)
              }
            }
          }(this.api),
          function(JJ) {
            const cJ = cJ => {
              var ZJ;
              let FJ, UJ, eJ = cJ;
              if (eJ.reason) eJ = cJ.reason;
              else if (null === (ZJ = cJ.detail) || void 0 === ZJ ? void 0 : ZJ.reason) {
                var XJ;
                eJ = null === (XJ = cJ.detail) || void 0 === XJ ? void 0 : XJ.reason
              }
              let AJ = [];
              gJ(eJ) ? (FJ = `Non-Error promise rejection captured with value: ${String(eJ)}`, UJ = "UnhandledRejection") : [FJ, UJ, AJ] = IZ(eJ), FJ && JJ.pushError(new Error(FJ), {
                type: UJ,
                stackFrames: AJ
              })
            };
            window.addEventListener("unhandledrejection", cJ), gZ.push(cJ)
          }(this.api)
      }
    };
    const PZ = "unknown";
    var kZ = class extends cZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ZZ, this.waitingForActivation = !1, this.sendViewChangedEvent = JJ => {
          var cJ;
          if (this.waitingForActivation || document.prerendering) return;
          const ZJ = JJ.view;
          if (ZJ && ZJ.name !== (null === (cJ = this.notifiedView) || void 0 === cJ ? void 0 : cJ.name)) {
            var FJ, UJ, eJ;
            const JJ = null !== (FJ = null === (UJ = this.notifiedView) || void 0 === UJ ? void 0 : UJ.name) && void 0 !== FJ ? FJ : PZ;
            this.notifiedView = ZJ, this.api.pushEvent(Qc, {
              fromView: JJ,
              toView: null !== (eJ = ZJ.name) && void 0 !== eJ ? eJ : PZ
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
    class pZ {
      t;
      o = 0;
      i = [];
      l(JJ) {
        if (JJ.hadRecentInput) return;
        const cJ = this.i[0],
          ZJ = this.i.at(-1);
        this.o && cJ && ZJ && JJ.startTime - ZJ.startTime < 1e3 && JJ.startTime - cJ.startTime < 5e3 ? (this.o += JJ.value, this.i.push(JJ)) : (this.o = JJ.value, this.i = [JJ]), this.t?.(JJ)
      }
    }
    const dZ = () => {
        const JJ = performance.getEntriesByType("navigation")[0];
        if (JJ && JJ.responseStart > 0 && JJ.responseStart < performance.now()) return JJ
      },
      zZ = JJ => {
        if ("loading" === document.readyState) return "loading";
        const cJ = dZ();
        if (cJ) {
          if (JJ < cJ.domInteractive) return "loading";
          if (0 === cJ.domContentLoadedEventStart || JJ < cJ.domContentLoadedEventStart) return "dom-interactive";
          if (0 === cJ.domComplete || JJ < cJ.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      NZ = JJ => {
        const cJ = JJ.nodeName;
        return 1 === JJ.nodeType ? cJ.toLowerCase() : cJ.toUpperCase().replace(/^#/, "")
      },
      OZ = JJ => {
        let cJ = "";
        try {
          for (; 9 !== JJ?.nodeType;) {
            const ZJ = JJ,
              FJ = ZJ.id ? "#" + ZJ.id : [NZ(ZJ), ...Array.from(ZJ.classList ?? []).sort()].join(".");
            if (cJ.length + FJ.length > 99) return cJ || FJ;
            if (cJ = cJ ? FJ + ">" + cJ : FJ, ZJ.id) break;
            JJ = ZJ.parentNode
          }
        } catch {}
        return cJ
      },
      TZ = new WeakMap;

    function CZ(JJ, cJ) {
      let ZJ = TZ.get(cJ);
      return ZJ || (ZJ = new WeakMap, TZ.set(cJ, ZJ)), ZJ.get(JJ) || ZJ.set(JJ, new cJ), ZJ.get(JJ)
    }
    let uZ = -1;
    const iZ = () => uZ,
      RZ = JJ => {
        addEventListener("pageshow", (cJ => {
          cJ.persisted && (uZ = cJ.timeStamp, JJ(cJ))
        }), !0)
      },
      LZ = (JJ, cJ, ZJ, FJ) => {
        let UJ, eJ;
        return XJ => {
          cJ.value >= 0 && (XJ || FJ) && (eJ = cJ.value - (UJ ?? 0), (eJ || void 0 === UJ) && (UJ = cJ.value, cJ.delta = eJ, cJ.rating = ((JJ, cJ) => JJ > cJ[1] ? "poor" : JJ > cJ[0] ? "needs-improvement" : "good")(cJ.value, ZJ), JJ(cJ)))
        }
      },
      aZ = JJ => {
        requestAnimationFrame((() => requestAnimationFrame((() => JJ()))))
      },
      BZ = () => dZ()?.activationStart ?? 0;
    let tZ = -1;
    const oZ = new Set,
      lZ = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      JF = JJ => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === JJ.type)
            for (const JJ of oZ) JJ();
          isFinite(tZ) || (tZ = "visibilitychange" === JJ.type ? JJ.timeStamp : 0, removeEventListener("prerenderingchange", JF, !0))
        }
      },
      cF = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (tZ = 1 / 0), tZ < 0) {
          const JJ = BZ(),
            cJ = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((cJ => "hidden" === cJ.name && cJ.startTime >= JJ))?.startTime;
          tZ = cJ ?? lZ(), addEventListener("visibilitychange", JF, !0), addEventListener("prerenderingchange", JF, !0), RZ((() => {
            setTimeout((() => {
              tZ = lZ()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return tZ
          },
          onHidden(JJ) {
            oZ.add(JJ)
          }
        }
      },
      ZF = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0,
          XJ = arguments.length > 6 ? arguments[6] : void 0;
        const AJ = dZ(),
          qJ = AJ?.navigationId || 0;
        let jJ = "navigate";
        return ZJ ? jJ = ZJ : iZ() >= 0 ? jJ = "back-forward-cache" : AJ && (document.prerendering || BZ() > 0 ? jJ = "prerender" : document.wasDiscarded ? jJ = "restore" : AJ.type && (jJ = AJ.type.replace(/_/g, "-"))), {
          name: JJ,
          value: cJ,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: jJ,
          navigationId: FJ || qJ,
          navigationInteractionId: UJ,
          navigationURL: eJ || AJ?.name,
          navigationStartTime: XJ || 0
        }
      },
      FF = function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const FJ = JJ.filter((JJ => PerformanceObserver.supportedEntryTypes.includes(JJ)));
          if (FJ.length > 0) {
            const JJ = new PerformanceObserver((JJ => {
              queueMicrotask((() => {
                const ZJ = JJ.getEntries();
                FJ.length > 1 && ZJ.sort(((JJ, cJ) => JJ.startTime + JJ.duration - (cJ.startTime + cJ.duration))), cJ(ZJ)
              }))
            }));
            for (const cJ of FJ) JJ.observe({
              type: cJ,
              buffered: !0,
              ...ZJ
            });
            return JJ
          }
        } catch {}
      },
      UF = JJ => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && JJ && JJ.reportSoftNavs,
      eF = (JJ, cJ) => {
        if (JJ.set(cJ.navigationId, cJ), JJ.size > 2) {
          const cJ = JJ.keys().next().value;
          void 0 !== cJ && JJ.delete(cJ)
        }
      },
      XF = JJ => {
        let cJ = !1;
        return () => {
          cJ || (JJ(), cJ = !0)
        }
      };
    class AF {
      u
    }
    const qF = JJ => {
        document.prerendering ? addEventListener("prerenderingchange", JJ, !0) : JJ()
      },
      jF = [1800, 3e3],
      YF = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZJ = UF(cJ);
        qF((() => {
          const FJ = CZ(cJ, AF),
            UJ = cF();
          let eJ, XJ = ZF("FCP");
          const AJ = FF(["paint"], (JJ => {
            for (const cJ of JJ) "first-contentful-paint" === cJ.name && (AJ.disconnect(), cJ.startTime < UJ.firstHiddenTime && (XJ.value = Math.max(cJ.startTime - BZ(), 0), XJ.entries.push(cJ), XJ.navigationId = cJ.navigationId || XJ.navigationId, eJ(!0)))
          }));
          AJ && (eJ = LZ(JJ, XJ, jF, cJ.reportAllChanges), RZ((ZJ => {
            XJ = ZF("FCP", -1, "back-forward-cache", XJ.navigationId, XJ.navigationInteractionId, XJ.navigationURL, iZ()), eJ = LZ(JJ, XJ, jF, cJ.reportAllChanges), aZ((() => {
              XJ.value = performance.now() - ZJ.timeStamp, eJ(!0)
            }))
          }))), ZJ && FF(["soft-navigation"], (ZJ => {
            ZJ.forEach((ZJ => {
              FJ.u && ZJ.navigationId && eF(FJ.u, ZJ);
              const UJ = Math.max((ZJ.presentationTime || ZJ.paintTime || 0) - ZJ.startTime, 0);
              XJ = ZF("FCP", UJ, "soft-navigation", ZJ.navigationId, ZJ.interactionId, ZJ.name, ZJ.startTime), eJ = LZ(JJ, XJ, jF, cJ.reportAllChanges), eJ(!0)
            }))
          }), cJ)
        }))
      },
      hF = [.1, .25],
      DF = JJ => JJ.find((JJ => 1 === JJ.node?.nodeType)) || JJ[0];
    let sF = 0,
      nF = 1 / 0,
      GF = 0;
    const fF = JJ => {
      for (const cJ of JJ) cJ.interactionId && (nF = Math.min(nF, cJ.interactionId), GF = Math.max(GF, cJ.interactionId), sF = GF ? (GF - nF) / 7 + 1 : 0)
    };
    let xF;
    const rF = () => xF ? sF : performance.interactionCount ?? 0;
    class vF {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return rF() - this.h
      }
      D() {
        this.h = rF(), this.v.length = 0, this.p.clear()
      }
      S(JJ) {
        const cJ = this.T(),
          ZJ = Math.min(this.v.length - 1, Math.floor(cJ / 50));
        return !cJ || -1 !== ZJ || "soft-navigation" !== JJ && "back-forward-cache" !== JJ ? this.v[ZJ] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(JJ) {
        if (this.m?.(JJ), !JJ.interactionId) return;
        const cJ = this.v.at(-1);
        let ZJ = this.p.get(JJ.interactionId);
        if (ZJ || this.v.length < 10 || JJ.duration > cJ.k) {
          if (ZJ ? JJ.duration > ZJ.k ? (ZJ.entries = [JJ], ZJ.k = JJ.duration) : JJ.duration === ZJ.k && JJ.startTime === ZJ.entries[0].startTime && ZJ.entries.push(JJ) : (ZJ = {
              id: JJ.interactionId,
              entries: [JJ],
              k: JJ.duration
            }, this.p.set(ZJ.id, ZJ), this.v.push(ZJ)), this.v.sort(((JJ, cJ) => cJ.k - JJ.k)), this.v.length > 10) {
            const JJ = this.v.splice(10);
            for (const cJ of JJ) this.p.delete(cJ.id)
          }
          this.M?.(ZJ)
        }
      }
    }
    const mF = JJ => {
        const cJ = "requestIdleCallback" in globalThis ? 1e3 : 0,
          ZJ = globalThis.requestIdleCallback || setTimeout,
          FJ = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) JJ();
        else {
          const UJ = XF(JJ);
          let eJ = -1;
          const XJ = () => {
            FJ(eJ), UJ()
          };
          addEventListener("visibilitychange", XJ, {
            once: !0,
            capture: !0
          }), eJ = ZJ((() => {
            removeEventListener("visibilitychange", XJ, {
              capture: !0
            }), UJ()
          }), {
            timeout: cJ
          })
        }
      },
      QF = [200, 500],
      EF = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZJ = CZ(cJ = Object.assign({}, cJ), vF);
        let FJ = [],
          UJ = [],
          eJ = 0;
        const XJ = new WeakMap,
          AJ = new WeakMap;
        let qJ = !1;
        const jJ = () => {
            qJ || (qJ = !0, mF(YJ))
          },
          YJ = () => {
            const JJ = new Set(ZJ.v.map((JJ => XJ.get(JJ.entries[0])))),
              cJ = UJ.length - 10;
            UJ = UJ.filter(((ZJ, FJ) => FJ >= cJ || JJ.has(ZJ)));
            const AJ = new Set;
            for (const ZJ of UJ) {
              const JJ = hJ(ZJ.startTime, ZJ.processingEnd);
              for (const cJ of JJ) AJ.add(cJ)
            }
            const jJ = FJ.length - 10;
            FJ = FJ.filter(((JJ, cJ) => AJ.has(JJ) || cJ >= jJ && JJ.startTime > eJ)), qJ = !1
          };
        ZJ.m = JJ => {
          const ZJ = JJ.startTime + JJ.duration;
          let FJ;
          eJ = Math.max(eJ, JJ.processingEnd);
          for (let eJ = UJ.length - 1; eJ >= 0; eJ--) {
            const XJ = UJ[eJ];
            if (Math.abs(ZJ - XJ.renderTime) <= 8) {
              FJ = XJ, FJ.startTime = Math.min(JJ.startTime, FJ.startTime), FJ.processingStart = Math.min(JJ.processingStart, FJ.processingStart), FJ.processingEnd = Math.max(JJ.processingEnd, FJ.processingEnd), cJ.includeProcessedEventEntries && FJ.entries.push(JJ);
              break
            }
          }
          FJ || (FJ = {
            startTime: JJ.startTime,
            processingStart: JJ.processingStart,
            processingEnd: JJ.processingEnd,
            renderTime: ZJ,
            entries: cJ.includeProcessedEventEntries ? [JJ] : []
          }, UJ.push(FJ)), JJ.interactionId && XJ.set(JJ, FJ), jJ()
        }, ZJ.M = JJ => {
          if (!AJ.get(JJ)) {
            const ZJ = JJ.entries.find((JJ => JJ.target))?.target;
            if (ZJ) {
              const FJ = cJ.generateTarget?.(ZJ) ?? OZ(ZJ);
              AJ.set(JJ, FJ)
            } else {
              const cJ = JJ.entries.find((JJ => JJ.targetSelector))?.targetSelector;
              cJ && AJ.set(JJ, cJ)
            }
          }
        };
        const hJ = (JJ, cJ) => {
          const ZJ = [];
          for (const UJ of FJ)
            if (!(UJ.startTime + UJ.duration < JJ)) {
              if (UJ.startTime > cJ) break;
              ZJ.push(UJ)
            } return ZJ
        };
        FF(["long-animation-frame"], (JJ => {
            FJ = FJ.concat(JJ), jJ()
          }), cJ),
          function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const ZJ = cF();
            qF((() => {
              "interactionCount" in performance || xF || (xF = FF(["event"], fF, {
                durationThreshold: 0
              }));
              let FJ, UJ = ZF("INP");
              const eJ = CZ(cJ, vF),
                XJ = (ZJ, XJ, AJ, qJ, jJ) => {
                  eJ.D(), UJ = ZF("INP", -1, ZJ, XJ, AJ, qJ, jJ), FJ = LZ(JJ, UJ, QF, cJ.reportAllChanges)
                },
                AJ = () => {
                  const JJ = eJ.S(UJ.navigationType);
                  JJ && JJ.k !== UJ.value && (UJ.value = JJ.k, UJ.entries = JJ.entries, FJ())
                },
                qJ = JJ => {
                  AJ(), FJ(!0), XJ("soft-navigation", JJ.navigationId, JJ.interactionId, JJ.name, JJ.startTime)
                },
                jJ = function(JJ) {
                  let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  mF((() => {
                    for (const cJ of JJ) "soft-navigation" !== cJ.entryType ? eJ.l(cJ) : qJ(cJ);
                    AJ(), cJ && FJ(!0)
                  }))
                },
                YJ = ["event", "first-input"];
              UF(cJ) && YJ.push("soft-navigation");
              const hJ = FF(YJ, jJ, {
                ...cJ,
                durationThreshold: cJ.durationThreshold ?? 40
              });
              FJ = LZ(JJ, UJ, QF, cJ.reportAllChanges), hJ && (ZJ.onHidden((() => {
                jJ(hJ.takeRecords(), !0)
              })), RZ((() => {
                XJ("back-forward-cache", UJ.navigationId, UJ.navigationInteractionId, UJ.navigationURL, iZ())
              })))
            }))
          }((cJ => {
            JJ((JJ => {
              if (0 === JJ.entries.length) {
                const cJ = JJ.navigationStartTime || 0,
                  ZJ = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: JJ.value,
                    loadState: zZ(cJ)
                  };
                return Object.assign(JJ, {
                  attribution: ZJ
                })
              }
              const cJ = JJ.entries[0],
                FJ = XJ.get(cJ),
                UJ = Math.max(FJ.processingStart, cJ.startTime),
                eJ = Math.max(cJ.startTime + cJ.duration, UJ),
                qJ = Math.min(FJ.processingEnd, eJ),
                jJ = FJ.entries.sort(((JJ, cJ) => JJ.processingStart - cJ.processingStart)),
                YJ = hJ(cJ.startTime, qJ),
                DJ = ZJ.p.get(cJ.interactionId),
                sJ = {
                  interactionTarget: AJ.get(DJ),
                  interactionType: cJ.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: cJ.startTime,
                  nextPaintTime: eJ,
                  processedEventEntries: jJ,
                  longAnimationFrameEntries: YJ,
                  inputDelay: UJ - cJ.startTime,
                  processingDuration: qJ - UJ,
                  presentationDelay: eJ - qJ,
                  loadState: zZ(cJ.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (JJ => {
                const cJ = JJ.interactionTime,
                  ZJ = JJ.nextPaintTime;
                if (!JJ.longAnimationFrameEntries?.length || !cJ || !ZJ) return;
                const FJ = JJ.inputDelay,
                  UJ = JJ.processingDuration;
                let eJ, XJ, AJ = 0,
                  qJ = 0,
                  jJ = 0,
                  YJ = 0;
                for (const sJ of JJ.longAnimationFrameEntries) {
                  qJ = qJ + sJ.startTime + sJ.duration - sJ.styleAndLayoutStart;
                  for (const JJ of sJ.scripts) {
                    const ZJ = JJ.startTime + JJ.duration;
                    if (ZJ < cJ) continue;
                    const jJ = ZJ - Math.max(cJ, JJ.startTime),
                      hJ = JJ.duration ? jJ / JJ.duration * JJ.forcedStyleAndLayoutDuration : 0;
                    AJ += jJ - hJ, qJ += hJ, jJ > YJ && (XJ = JJ.startTime < cJ + FJ ? "input-delay" : JJ.startTime >= cJ + FJ + UJ ? "presentation-delay" : "processing-duration", eJ = JJ, YJ = jJ)
                  }
                }
                const hJ = JJ.longAnimationFrameEntries.at(-1),
                  DJ = hJ ? hJ.startTime + hJ.duration : 0;
                DJ >= cJ + FJ + UJ && (jJ = ZJ - DJ), eJ && XJ && (JJ.longestScript = {
                  entry: eJ,
                  subpart: XJ,
                  intersectingDuration: YJ
                }), JJ.totalScriptDuration = AJ, JJ.totalStyleAndLayoutDuration = qJ, JJ.totalPaintDuration = jJ, JJ.totalUnattributedDuration = ZJ - cJ - AJ - qJ - jJ
              })(sJ), Object.assign(JJ, {
                attribution: sJ
              })
            })(cJ))
          }), cJ)
      };
    class VF {
      m;
      u;
      l(JJ) {
        this.m?.(JJ)
      }
    }
    const KF = [2500, 4e3];
    let yF = 50;
    const SF = [];
    FF(["resource"], (JJ => {
      for (const cJ of JJ) SF.push(cJ), SF.length > yF && SF.shift()
    }));
    const IF = [800, 1800],
      MF = JJ => {
        document.prerendering ? qF((() => MF(JJ))) : "complete" !== document.readyState ? addEventListener("load", (() => MF(JJ)), !0) : setTimeout(JJ)
      },
      bF = "load_state",
      wF = "time_to_first_byte";
    var WF = class {
        constructor(JJ, cJ) {
          this.corePushMeasurement = JJ, this.webVitalConfig = cJ
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var JJ;
          ! function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZJ = CZ(cJ = Object.assign({}, cJ), pZ),
              FJ = new WeakMap;
            ZJ.t = JJ => {
                if (JJ?.sources?.length) {
                  const ZJ = DF(JJ.sources),
                    UJ = ZJ?.node;
                  if (UJ) {
                    const JJ = cJ.generateTarget?.(UJ) ?? OZ(UJ);
                    FJ.set(ZJ, JJ)
                  }
                }
              },
              function(JJ) {
                let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const ZJ = cF();
                YF(XF((() => {
                  let FJ, UJ = ZF("CLS", 0);
                  const eJ = CZ(cJ, pZ),
                    XJ = (ZJ, XJ, AJ, qJ, jJ) => {
                      UJ = ZF("CLS", 0, ZJ, XJ, AJ, qJ, jJ), eJ.o = 0, FJ = LZ(JJ, UJ, hF, cJ.reportAllChanges)
                    },
                    AJ = function() {
                      let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      eJ.o > UJ.value && (UJ.value = eJ.o, UJ.entries = eJ.i), FJ(JJ)
                    },
                    qJ = JJ => {
                      AJ(!0), XJ("soft-navigation", JJ.navigationId, JJ.interactionId, JJ.name, JJ.startTime)
                    },
                    jJ = JJ => {
                      for (const cJ of JJ) "soft-navigation" !== cJ.entryType ? eJ.l(cJ) : qJ(cJ);
                      AJ()
                    },
                    YJ = ["layout-shift"];
                  UF(cJ) && YJ.push("soft-navigation");
                  const hJ = FF(YJ, jJ);
                  hJ && (FJ = LZ(JJ, UJ, hF, cJ.reportAllChanges), ZJ.onHidden((() => {
                    jJ(hJ.takeRecords()), FJ(!0)
                  })), RZ((() => {
                    XJ("back-forward-cache", UJ.navigationId, UJ.navigationInteractionId, UJ.navigationURL, iZ()), aZ(FJ)
                  })), setTimeout(FJ))
                })))
              }((cJ => {
                JJ((JJ => {
                  let cJ = {};
                  if (JJ.entries.length) {
                    const ZJ = JJ.entries.reduce(((JJ, cJ) => JJ.value > cJ.value ? JJ : cJ));
                    if (ZJ?.sources?.length) {
                      const JJ = DF(ZJ.sources);
                      JJ && (cJ = {
                        largestShiftTarget: FJ.get(JJ),
                        largestShiftTime: ZJ.startTime,
                        largestShiftValue: ZJ.value,
                        largestShiftSource: JJ,
                        largestShiftEntry: ZJ,
                        loadState: zZ(ZJ.startTime)
                      })
                    }
                  }
                  return Object.assign(JJ, {
                    attribution: cJ
                  })
                })(cJ))
              }), cJ)
          }((JJ => {
            const {
              loadState: cJ,
              largestShiftValue: ZJ,
              largestShiftTime: FJ,
              largestShiftTarget: UJ
            } = JJ.attribution, eJ = this.buildInitialValues(JJ);
            this.addIfPresent(eJ, "largest_shift_value", ZJ), this.addIfPresent(eJ, "largest_shift_time", FJ);
            const XJ = this.buildInitialContext(JJ);
            this.addIfPresent(XJ, bF, cJ), this.addIfPresent(XJ, "largest_shift_target", UJ), this.pushMeasurement(eJ, XJ)
          }), {
            reportAllChanges: null === (JJ = this.webVitalConfig) || void 0 === JJ ? void 0 : JJ.reportAllChanges
          })
        }
        measureFCP() {
          var JJ;
          ! function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZJ = CZ(cJ = Object.assign({}, cJ), AF);
            UF(cJ) && (ZJ.u = new Map), YF((cJ => {
              JJ((JJ => {
                let cJ = {
                  timeToFirstByte: 0,
                  firstByteToFCP: JJ.value,
                  loadState: zZ(iZ())
                };
                if ("soft-navigation" !== JJ.navigationType) {
                  if (JJ.entries.length) {
                    const ZJ = dZ(),
                      FJ = JJ.entries.at(-1);
                    if (ZJ) {
                      const UJ = ZJ.responseStart,
                        eJ = ZJ.activationStart || 0,
                        XJ = Math.max(0, UJ - eJ);
                      cJ = {
                        timeToFirstByte: XJ,
                        firstByteToFCP: JJ.value - XJ,
                        loadState: zZ(JJ.entries[0].startTime),
                        navigationEntry: ZJ,
                        fcpEntry: FJ
                      }
                    }
                  }
                } else {
                  const FJ = ZJ.u?.get(JJ.navigationId);
                  FJ && (cJ = {
                    timeToFirstByte: 0,
                    firstByteToFCP: JJ.value,
                    loadState: "complete",
                    navigationEntry: FJ
                  })
                }
                return Object.assign(JJ, {
                  attribution: cJ
                })
              })(cJ))
            }), cJ)
          }((JJ => {
            const {
              firstByteToFCP: cJ,
              timeToFirstByte: ZJ,
              loadState: FJ
            } = JJ.attribution, UJ = this.buildInitialValues(JJ);
            this.addIfPresent(UJ, "first_byte_to_fcp", cJ), this.addIfPresent(UJ, wF, ZJ);
            const eJ = this.buildInitialContext(JJ);
            this.addIfPresent(eJ, bF, FJ), this.pushMeasurement(UJ, eJ)
          }), {
            reportAllChanges: null === (JJ = this.webVitalConfig) || void 0 === JJ ? void 0 : JJ.reportAllChanges
          })
        }
        measureINP() {
          var JJ;
          EF((JJ => {
            var cJ;
            const {
              interactionTime: ZJ,
              presentationDelay: FJ,
              inputDelay: UJ,
              processingDuration: eJ,
              nextPaintTime: XJ,
              loadState: AJ,
              interactionTarget: qJ,
              interactionType: jJ,
              totalScriptDuration: YJ,
              totalStyleAndLayoutDuration: hJ,
              totalPaintDuration: DJ,
              totalUnattributedDuration: sJ,
              longestScript: nJ
            } = JJ.attribution, GJ = this.buildInitialValues(JJ);
            this.addIfPresent(GJ, "interaction_time", ZJ), this.addIfPresent(GJ, "presentation_delay", FJ), this.addIfPresent(GJ, "input_delay", UJ), this.addIfPresent(GJ, "processing_duration", eJ), this.addIfPresent(GJ, "next_paint_time", XJ), this.addNumberIfDefined(GJ, "total_script_duration", YJ), this.addNumberIfDefined(GJ, "total_style_and_layout_duration", hJ), this.addNumberIfDefined(GJ, "total_paint_duration", DJ), this.addNumberIfDefined(GJ, "total_unattributed_duration", sJ), this.addNumberIfDefined(GJ, "longest_script_intersecting_duration", null === nJ || void 0 === nJ ? void 0 : nJ.intersectingDuration);
            const fJ = this.buildInitialContext(JJ);
            this.addIfPresent(fJ, bF, AJ), this.addIfPresent(fJ, "interaction_target", qJ), this.addIfPresent(fJ, "interaction_type", jJ), this.addIfPresent(fJ, "longest_script_subpart", null === nJ || void 0 === nJ ? void 0 : nJ.subpart), this.addIfPresent(fJ, "longest_script_invoker_type", null === nJ || void 0 === nJ ? void 0 : nJ.entry.invokerType), (null === (cJ = this.webVitalConfig) || void 0 === cJ ? void 0 : cJ.trackAttributionSources) && (this.addIfPresent(fJ, "longest_script_invoker", null === nJ || void 0 === nJ ? void 0 : nJ.entry.invoker), this.addIfPresent(fJ, "longest_script_source_url", null === nJ || void 0 === nJ ? void 0 : nJ.entry.sourceURL), this.addIfPresent(fJ, "longest_script_source_function_name", null === nJ || void 0 === nJ ? void 0 : nJ.entry.sourceFunctionName), this.addIfPresent(fJ, "longest_script_source_char_position", void 0 !== (null === nJ || void 0 === nJ ? void 0 : nJ.entry.sourceCharPosition) ? String(nJ.entry.sourceCharPosition) : void 0)), this.pushMeasurement(GJ, fJ)
          }), {
            reportAllChanges: null === (JJ = this.webVitalConfig) || void 0 === JJ ? void 0 : JJ.reportAllChanges
          })
        }
        measureLCP() {
          var JJ;
          ! function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (cJ = Object.assign({}, cJ)).resourceBufferSize && (yF = cJ.resourceBufferSize);
            const ZJ = CZ(cJ, VF),
              FJ = new WeakMap;
            UF(cJ) && (ZJ.u = new Map), ZJ.m = JJ => {
                const ZJ = JJ.element;
                if (ZJ) {
                  const UJ = cJ.generateTarget?.(ZJ) ?? OZ(ZJ);
                  FJ.set(JJ, UJ)
                } else JJ.id && FJ.set(JJ, `#${JJ.id}`)
              },
              function(JJ) {
                let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  ZJ = !1;
                const FJ = UF(cJ);
                qF((() => {
                  let UJ, eJ = cF(),
                    XJ = ZF("LCP");
                  const AJ = CZ(cJ, VF),
                    qJ = (FJ, AJ, qJ, jJ, YJ) => {
                      XJ = ZF("LCP", -1, FJ, AJ, qJ, jJ, YJ), UJ = LZ(JJ, XJ, KF, cJ.reportAllChanges), ZJ = !1, "soft-navigation" === FJ && (eJ = cF(!0))
                    },
                    jJ = JJ => {
                      AJ.u && JJ.navigationId && eF(AJ.u, JJ), ZJ || UJ(!0), qJ("soft-navigation", JJ.navigationId, JJ.interactionId, JJ.name, JJ.startTime);
                      const cJ = JJ.getLargestInteractionContentfulPaint?.();
                      cJ && YJ([cJ])
                    },
                    YJ = JJ => {
                      cJ.reportAllChanges || FJ || (JJ = JJ.slice(-1));
                      for (const cJ of JJ) {
                        if (!cJ) continue;
                        if ("soft-navigation" === cJ.entryType) {
                          jJ(cJ);
                          continue
                        }
                        let JJ = 0,
                          ZJ = [],
                          FJ = cJ.startTime;
                        if ("largest-contentful-paint" === cJ.entryType) JJ = Math.max(cJ.startTime - BZ(), 0), AJ.l(cJ), ZJ = [cJ];
                        else if ("interaction-contentful-paint" === cJ.entryType) {
                          const UJ = cJ;
                          if (!XJ.navigationId) continue;
                          if ("interactionId" in UJ && UJ.interactionId != XJ.navigationInteractionId) continue;
                          FJ = UJ.largestContentfulPaint?.renderTime || 0, JJ = Math.max(FJ - cJ.startTime, 0), UJ.largestContentfulPaint && (AJ.l(UJ.largestContentfulPaint), ZJ = [UJ.largestContentfulPaint])
                        }
                        FJ < eJ.firstHiddenTime && (XJ.value = JJ, XJ.entries = ZJ, UJ())
                      }
                    },
                    hJ = ["largest-contentful-paint"];
                  FJ && hJ.push("interaction-contentful-paint", "soft-navigation");
                  const DJ = FF(hJ, YJ);
                  if (DJ) {
                    UJ = LZ(JJ, XJ, KF, cJ.reportAllChanges);
                    const eJ = ["keydown", "click", "visibilitychange"],
                      AJ = JJ => {
                        if (JJ.isTrusted && !ZJ) {
                          const JJ = XJ.id;
                          mF((() => {
                            if (!ZJ) {
                              if (!FJ) {
                                DJ.disconnect();
                                for (const JJ of eJ) removeEventListener(JJ, AJ, {
                                  capture: !0
                                })
                              }
                              JJ === XJ.id && (ZJ = !0, UJ(!0))
                            }
                          }))
                        }
                      };
                    for (const JJ of eJ) addEventListener(JJ, AJ, {
                      capture: !0
                    });
                    RZ((FJ => {
                      qJ("back-forward-cache", XJ.navigationId, XJ.navigationInteractionId, XJ.navigationURL, iZ()), UJ = LZ(JJ, XJ, KF, cJ.reportAllChanges), aZ((() => {
                        XJ.value = performance.now() - FJ.timeStamp, ZJ = !0, UJ(!0)
                      }))
                    }))
                  }
                }))
              }((cJ => {
                JJ((JJ => {
                  let cJ = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: JJ.value
                  };
                  if (JJ.entries.length) {
                    const UJ = JJ.entries.at(-1),
                      eJ = JJ => JJ.name === UJ.url && (JJ.requestStart || JJ.startTime) <= UJ.startTime,
                      XJ = UJ.url && (SF.findLast(eJ) || performance.getEntriesByType("resource").findLast(eJ));
                    let AJ;
                    cJ.target = FJ.get(UJ), cJ.lcpEntry = UJ, UJ.url && (cJ.url = UJ.url), XJ && (cJ.lcpResourceEntry = XJ);
                    let qJ = 0,
                      jJ = 0;
                    if ("soft-navigation" !== JJ.navigationType ? (AJ = dZ(), qJ = AJ?.activationStart ?? 0, jJ = AJ?.responseStart ?? 0) : (qJ = JJ.navigationStartTime || 0, AJ = ZJ.u?.get(JJ.navigationId)), AJ) {
                      const ZJ = Math.max(0, jJ - qJ),
                        FJ = Math.max(ZJ, XJ ? (XJ.requestStart || XJ.startTime) - qJ : 0),
                        UJ = Math.min(JJ.value, Math.max(FJ, XJ ? XJ.responseEnd - qJ : 0));
                      cJ = {
                        ...cJ,
                        timeToFirstByte: ZJ,
                        resourceLoadDelay: FJ - ZJ,
                        resourceLoadDuration: UJ - FJ,
                        elementRenderDelay: JJ.value - UJ,
                        navigationEntry: AJ
                      }
                    }
                  }
                  return Object.assign(JJ, {
                    attribution: cJ
                  })
                })(cJ))
              }), cJ)
          }((JJ => {
            var cJ;
            const {
              elementRenderDelay: ZJ,
              resourceLoadDelay: FJ,
              resourceLoadDuration: UJ,
              timeToFirstByte: eJ,
              target: XJ,
              url: AJ,
              lcpResourceEntry: qJ
            } = JJ.attribution, jJ = this.buildInitialValues(JJ);
            this.addIfPresent(jJ, "element_render_delay", ZJ), this.addIfPresent(jJ, "resource_load_delay", FJ), this.addIfPresent(jJ, "resource_load_duration", UJ), this.addIfPresent(jJ, wF, eJ);
            const YJ = this.buildInitialContext(JJ);
            this.addIfPresent(YJ, "element", XJ), (null === (cJ = this.webVitalConfig) || void 0 === cJ ? void 0 : cJ.trackAttributionSources) && (this.addIfPresent(YJ, "resource_url", AJ), this.addIfPresent(YJ, "resource_delivery_type", null === qJ || void 0 === qJ ? void 0 : qJ.deliveryType), this.addIfPresent(YJ, "resource_initiator_type", null === qJ || void 0 === qJ ? void 0 : qJ.initiatorType)), this.pushMeasurement(jJ, YJ)
          }), {
            reportAllChanges: null === (JJ = this.webVitalConfig) || void 0 === JJ ? void 0 : JJ.reportAllChanges
          })
        }
        measureTTFB() {
          var JJ;
          ! function(JJ) {
            ! function(JJ) {
              let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const ZJ = UF(cJ);
              let FJ = ZF("TTFB"),
                UJ = LZ(JJ, FJ, IF, cJ.reportAllChanges);
              MF((() => {
                const eJ = dZ();
                if (eJ) {
                  const XJ = eJ.responseStart;
                  FJ.value = Math.max(XJ - BZ(), 0), FJ.entries = [eJ], UJ(!0), RZ((() => {
                    FJ = ZF("TTFB", 0, "back-forward-cache", FJ.navigationId, FJ.navigationInteractionId, FJ.navigationURL, iZ()), UJ = LZ(JJ, FJ, IF, cJ.reportAllChanges), UJ(!0)
                  })), ZJ && FF(["soft-navigation"], (ZJ => {
                    ZJ.forEach((ZJ => {
                      ZJ.navigationId && (FJ = ZF("TTFB", 0, "soft-navigation", ZJ.navigationId, ZJ.interactionId, ZJ.name, ZJ.startTime), FJ.entries = [ZJ], UJ = LZ(JJ, FJ, IF, cJ.reportAllChanges), UJ(!0))
                    }))
                  }), cJ)
                }
              }))
            }((cJ => {
              JJ((JJ => {
                const cJ = JJ.entries[0];
                let ZJ = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: cJ
                };
                if (JJ.entries.length && cJ instanceof PerformanceNavigationTiming) {
                  const FJ = cJ.activationStart || 0,
                    UJ = Math.max((cJ.workerStart || cJ.fetchStart || 0) - FJ, 0),
                    eJ = Math.max(cJ.domainLookupStart - FJ, 0),
                    XJ = Math.max(cJ.connectStart - FJ, 0),
                    AJ = Math.max(cJ.connectEnd - FJ, 0);
                  ZJ = {
                    waitingDuration: UJ,
                    cacheDuration: eJ - UJ,
                    dnsDuration: XJ - eJ,
                    connectionDuration: AJ - XJ,
                    requestDuration: JJ.value - AJ,
                    navigationEntry: cJ
                  }
                }
                return Object.assign(JJ, {
                  attribution: ZJ
                })
              })(cJ))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((JJ => {
            const {
              dnsDuration: cJ,
              connectionDuration: ZJ,
              requestDuration: FJ,
              waitingDuration: UJ,
              cacheDuration: eJ
            } = JJ.attribution, XJ = this.buildInitialValues(JJ);
            this.addIfPresent(XJ, "dns_duration", cJ), this.addIfPresent(XJ, "connection_duration", ZJ), this.addIfPresent(XJ, "request_duration", FJ), this.addIfPresent(XJ, "waiting_duration", UJ), this.addIfPresent(XJ, "cache_duration", eJ);
            const AJ = this.buildInitialContext(JJ);
            this.pushMeasurement(XJ, AJ)
          }), {
            reportAllChanges: null === (JJ = this.webVitalConfig) || void 0 === JJ ? void 0 : JJ.reportAllChanges
          })
        }
        buildInitialValues(JJ) {
          return {
            [JJ.name.toLowerCase()]: JJ.value,
            delta: JJ.delta
          }
        }
        buildInitialContext(JJ) {
          var cJ;
          const ZJ = null !== (cJ = Jc("com.grafana.faro.lastNavigationId", tJ)) && void 0 !== cJ ? cJ : PZ;
          return {
            id: JJ.id,
            rating: JJ.rating,
            navigation_type: JJ.navigationType,
            navigation_entry_id: ZJ
          }
        }
        pushMeasurement(JJ, cJ) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: JJ
          }, {
            context: cJ
          })
        }
        addIfPresent(JJ, cJ, ZJ) {
          ZJ && (JJ[cJ] = ZJ)
        }
        addNumberIfDefined(JJ, cJ, ZJ) {
          void 0 !== ZJ && (JJ[cJ] = ZJ)
        }
      },
      gF = class extends cZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ZZ
        }
        initialize() {
          this.logDebug("Initializing"), new WF(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const HF = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function PF() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const cJ of JJ)
        if ("traceparent" === cJ.name) {
          if (!HF.test(cJ.description)) continue;
          const [, JJ, ZJ] = cJ.description.split("-");
          if (null != JJ && null != ZJ) return {
            traceId: JJ,
            spanId: ZJ
          };
          break
        }
    }

    function kF(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: ZJ,
        monoNow: FJ
      } = cJ;
      return Math.min(ZJ, ZJ - (FJ - JJ))
    }

    function pF(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [ZJ, FJ] of Object.entries(cJ)) {
        const cJ = JJ[ZJ];
        return null != cJ && (bJ(FJ) ? FJ.includes(cJ) : cJ === FJ)
      }
      return !0
    }

    function dF(JJ) {
      const {
        connectEnd: cJ,
        connectStart: ZJ,
        decodedBodySize: FJ,
        domainLookupEnd: UJ,
        domainLookupStart: eJ,
        duration: XJ,
        encodedBodySize: AJ,
        fetchStart: qJ,
        initiatorType: jJ,
        name: YJ,
        nextHopProtocol: hJ,
        redirectEnd: DJ,
        redirectStart: sJ,
        renderBlockingStatus: nJ,
        requestStart: GJ,
        responseEnd: fJ,
        responseStart: xJ,
        responseStatus: rJ,
        secureConnectionStart: vJ,
        transferSize: mJ,
        workerStart: QJ
      } = JJ;
      return {
        name: YJ,
        httpHost: NF(YJ),
        duration: OF(XJ),
        tcpHandshakeTime: OF(cJ - ZJ),
        dnsLookupTime: OF(UJ - eJ),
        tlsNegotiationTime: OF(cJ - vJ),
        responseStatus: OF(rJ),
        redirectTime: OF(DJ - sJ),
        requestTime: OF(xJ - GJ),
        responseTime: OF(fJ - xJ),
        fetchTime: OF(fJ - qJ),
        serviceWorkerTime: OF(QJ > 0 ? qJ - QJ : 0),
        decodedBodySize: OF(FJ),
        encodedBodySize: OF(AJ),
        cacheHitStatus: function() {
          let JJ = "fullLoad";
          0 === mJ ? FJ > 0 && (JJ = "cache") : null != rJ ? 304 === rJ && (JJ = "conditionalFetch") : AJ > 0 && mJ < AJ && (JJ = "conditionalFetch");
          return JJ
        }(),
        renderBlockingStatus: OF(nJ),
        protocol: hJ,
        initiatorType: jJ,
        visibilityState: document.visibilityState,
        ttfb: OF(xJ - GJ),
        transferSize: OF(mJ)
      }
    }

    function zF(JJ) {
      const {
        activationStart: cJ,
        domComplete: ZJ,
        domContentLoadedEventEnd: FJ,
        domContentLoadedEventStart: UJ,
        domInteractive: eJ,
        fetchStart: XJ,
        loadEventEnd: AJ,
        loadEventStart: qJ,
        responseStart: jJ,
        type: YJ
      } = JJ, hJ = function() {
        var JJ;
        return null != (null === (JJ = performance.timing) || void 0 === JJ ? void 0 : JJ.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Yc(Yc({}, dF(JJ)), {}, {
        pageLoadTime: OF(ZJ - XJ),
        documentParsingTime: OF(hJ ? eJ - hJ : null),
        domProcessingTime: OF(ZJ - eJ),
        domContentLoadHandlerTime: OF(FJ - UJ),
        onLoadTime: OF(AJ - qJ),
        ttfb: OF(Math.max(jJ - (null !== cJ && void 0 !== cJ ? cJ : 0), 0)),
        type: YJ
      })
    }

    function NF(JJ) {
      try {
        return new URL(JJ).host || PZ
      } catch (cJ) {
        return PZ
      }
    }

    function OF(JJ) {
      return null == JJ ? PZ : "number" === typeof JJ ? Math.round(JJ > 0 ? JJ : 0).toString() : JJ.toString()
    }
    const TF = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function CF(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      try {
        var AJ = JJ[eJ](XJ),
          qJ = AJ.value
      } catch (JJ) {
        return void ZJ(JJ)
      }
      AJ.done ? cJ(qJ) : Promise.resolve(qJ).then(FJ, UJ)
    }

    function uF(JJ) {
      return function() {
        var cJ = this,
          ZJ = arguments;
        return new Promise((function(FJ, UJ) {
          var eJ = JJ.apply(cJ, ZJ);

          function XJ(JJ) {
            CF(eJ, FJ, UJ, XJ, AJ, "next", JJ)
          }

          function AJ(JJ) {
            CF(eJ, FJ, UJ, XJ, AJ, "throw", JJ)
          }
          XJ(void 0)
        }))
      }
    }
    const iF = new rZ;
    var RF = class extends cZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ZZ
      }
      initialize() {
        var JJ = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let cJ = !1;
        const ZJ = () => {
          ! function(JJ) {
            if ("complete" === document.readyState) JJ();
            else {
              const cJ = () => {
                "complete" === document.readyState && (JJ(), document.removeEventListener("readystatechange", cJ))
              };
              document.addEventListener("readystatechange", cJ)
            }
          }(uF((function*() {
            if (cJ) return;
            const ZJ = JJ.api.pushEvent,
              {
                faroNavigationId: FJ
              } = yield function(JJ) {
                let cJ;
                const ZJ = new Promise((JJ => {
                  cJ = JJ
                }));
                return new PerformanceObserver((ZJ => {
                  var FJ;
                  const [UJ] = ZJ.getEntries();
                  if (null == UJ || aJ(UJ.name)) return;
                  const eJ = UJ.toJSON();
                  let XJ = PF(null === eJ || void 0 === eJ ? void 0 : eJ.serverTiming);
                  const AJ = null !== (FJ = Jc("com.grafana.faro.lastNavigationId", tJ)) && void 0 !== FJ ? FJ : PZ,
                    qJ = Yc(Yc({}, zF(eJ)), {}, {
                      faroNavigationId: xc(),
                      faroPreviousNavigationId: AJ
                    });
                  cc("com.grafana.faro.lastNavigationId", qJ.faroNavigationId, tJ), JJ("faro.performance.navigation", qJ, void 0, {
                    spanContext: XJ,
                    timestampOverwriteMs: kF(eJ.startTime)
                  }), cJ(qJ)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), ZJ
              }(ZJ);
            cJ || null == FJ || function(JJ, cJ, ZJ, FJ) {
              const UJ = FJ.trackResources;
              new PerformanceObserver((FJ => {
                const eJ = FJ.getEntries(),
                  XJ = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const AJ of eJ) {
                  if (aJ(AJ.name)) continue;
                  null === ZJ || void 0 === ZJ || ZJ.notify({
                    type: "resource"
                  });
                  const FJ = AJ.toJSON();
                  let eJ = PF(null === FJ || void 0 === FJ ? void 0 : FJ.serverTiming);
                  (null == UJ && pF(FJ, TF) || UJ) && cJ("faro.performance.resource", Yc(Yc({}, dF(FJ)), {}, {
                    faroNavigationId: JJ,
                    faroResourceId: xc()
                  }), void 0, {
                    spanContext: eJ,
                    timestampOverwriteMs: kF(FJ.startTime, XJ)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(FJ, ZJ, iF, JJ.config)
          })))
        };
        this.cancelInitialization = () => {
          cJ = !0, document.removeEventListener("prerenderingchange", ZJ)
        }, document.prerendering ? document.addEventListener("prerenderingchange", ZJ, {
          once: !0
        }) : ZJ()
      }
      destroy() {
        var JJ;
        null === (JJ = this.cancelInitialization) || void 0 === JJ || JJ.call(this), this.cancelInitialization = void 0
      }
    };
    const LF = "data-faro-user-action-name",
      aF = LF.replace(/-name$/, "-timeout"),
      BF = 1e3;

    function tF(JJ) {
      return `data-${(JJ.startsWith("data-")?JJ.slice(5):JJ).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function oF(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Cc;
      if (void 0 === JJ) return cJ;
      let FJ = NaN;
      try {
        FJ = "string" === typeof JJ && "" === JJ.trim() ? NaN : Number(JJ)
      } catch (UJ) {}
      return !Number.isFinite(FJ) || FJ <= 0 ? (ZJ(`initialActivityTimeout must be a finite number greater than zero; using ${cJ} ms`), cJ) : FJ > 1e3 ? (ZJ(`initialActivityTimeout cannot exceed ${BF} ms; clamping to the maximum`), BF) : FJ
    }

    function lF(JJ, cJ, ZJ) {
      return void 0 !== JJ && window.clearTimeout(JJ), window.setTimeout((() => {
        cJ()
      }), ZJ)
    }

    function JU(JJ) {
      return JJ.type === xZ
    }
    let cU, ZU;

    function FU() {
      return cU || (cU = new rZ), ZU || (ZU = new MutationObserver(((JJ, cJ) => {
        cU.notify({
          type: "dom-mutation"
        })
      })), ZU.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), cU
    }
    const UU = "fetch",
      eU = "xhr";
    let XU, AU, qU, jU, YU = !1;

    function hU() {
      if (XU) return XU;

      function JJ(JJ) {
        XU.notify({
          type: fZ,
          request: JJ
        })
      }

      function cJ(JJ) {
        XU.notify({
          type: xZ,
          request: JJ
        })
      }
      return XU = new rZ, YU || (! function(JJ) {
        let {
          onRequestEnd: cJ,
          onRequestStart: ZJ
        } = JJ;
        qU || (qU = window.fetch);
        window.fetch = function() {
          var JJ, FJ;
          const UJ = null !== (JJ = BJ(arguments[0])) && void 0 !== JJ ? JJ : "",
            eJ = aJ(UJ),
            XJ = (null !== (FJ = arguments[1]) && void 0 !== FJ ? FJ : {}).method,
            AJ = xc();
          return eJ || ZJ({
            url: UJ,
            method: XJ,
            requestId: AJ,
            apiType: UU
          }), qU.apply(this, arguments).then((JJ => (eJ || cJ({
            url: UJ,
            method: XJ,
            requestId: AJ,
            apiType: UU
          }), JJ))).catch((JJ => {
            throw eJ || cJ({
              url: UJ,
              method: XJ,
              requestId: AJ,
              apiType: UU
            }), JJ
          }))
        }
      }({
        onRequestStart: JJ,
        onRequestEnd: cJ
      }), function(JJ) {
        let {
          onRequestStart: cJ,
          onRequestEnd: ZJ
        } = JJ;
        AU || (AU = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const JJ = arguments[1],
            FJ = aJ(JJ),
            UJ = arguments[0],
            eJ = xc();
          this.addEventListener("loadstart", (function() {
            FJ || cJ({
              url: JJ,
              method: UJ,
              requestId: eJ,
              apiType: eU
            })
          })), this.addEventListener("load", (function() {
            FJ || ZJ({
              url: JJ,
              method: UJ,
              requestId: eJ,
              apiType: eU
            })
          })), this.addEventListener("error", (function() {
            FJ || ZJ({
              url: JJ,
              method: UJ,
              requestId: eJ,
              apiType: eU
            })
          })), this.addEventListener("abort", (function() {
            FJ || ZJ({
              url: JJ,
              method: UJ,
              requestId: eJ,
              apiType: eU
            })
          })), AU.apply(this, arguments)
        }
      }({
        onRequestStart: JJ,
        onRequestEnd: cJ
      }), YU = !0), XU
    }
    let DU, sU = !1;
    let nU = function(JJ) {
      return JJ[JJ.Started = 0] = "Started", JJ[JJ.Halted = 1] = "Halted", JJ[JJ.Cancelled = 2] = "Cancelled", JJ[JJ.Ended = 3] = "Ended", JJ
    }({});
    var GU = class {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = JJ, this.logDebug = cJ, this.initialActivityTimeout = ZJ, this.http = hU(), this.dom = FU(), this.perf = (jU || (jU = new rZ), sU || (DU = iF.subscribe((JJ => {
          "resource" === JJ.type && jU.notify({
            type: "resource-entry"
          })
        })), sU = !0), jU), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new rZ).merge(this.http, this.dom, this.perf).takeWhile((() => [nU.Started, nU.Halted].includes(this.userAction.getState()))).filter((JJ => !!(this.userAction.getState() !== nU.Halted || JU(JJ) && this.runningRequests.has(JJ.request.requestId)))).subscribe((JJ => {
          (function(JJ) {
            return JJ.type === fZ
          })(JJ) && this.runningRequests.set(JJ.request.requestId, JJ.request), JU(JJ) && this.runningRequests.delete(JJ.request.requestId), JU(JJ) ? this.userAction.getState() === nU.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((JJ => [nU.Ended, nU.Cancelled].includes(JJ))).first().subscribe((() => this.cleanup())), this.startupTid = lF(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === nU.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === nU.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = lF(this.haltTid, (() => {
          this.userAction.getState() === nU.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var JJ, cJ;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (JJ = this.allMonitorsSub) || void 0 === JJ || JJ.unsubscribe(), null === (cJ = this.stateSub) || void 0 === cJ || cJ.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(JJ) {
        void 0 !== JJ && window.clearTimeout(JJ)
      }
    };

    function fU(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc;
      var ZJ;
      const {
        api: FJ,
        config: UJ,
        internalLogger: eJ
      } = JJ, XJ = oF(null === (ZJ = UJ.userActionsInstrumentation) || void 0 === ZJ ? void 0 : ZJ.initialActivityTimeout, 100, cJ);
      return {
        processUserEvent: function(JJ) {
          var cJ, ZJ;
          const eJ = null !== (cJ = null === (ZJ = UJ.userActionsInstrumentation) || void 0 === ZJ ? void 0 : ZJ.dataAttributeName) && void 0 !== cJ ? cJ : LF,
            XJ = JJ.target;
          if (!(XJ instanceof Element)) return;
          const AJ = function(JJ, cJ) {
              let ZJ = JJ;
              for (; ZJ;) {
                if (ZJ.hasAttribute(cJ)) return ZJ;
                ZJ = ZJ.parentElement
              }
              return null
            }(XJ, tF(eJ)),
            qJ = function(JJ, cJ) {
              if (!JJ) return;
              const ZJ = function(JJ) {
                  return tF(JJ).slice(5).replace(/-(.)/g, ((JJ, cJ) => cJ.toUpperCase()))
                }(cJ),
                FJ = JJ.dataset;
              for (const UJ in FJ)
                if (UJ === ZJ) return FJ[UJ]
            }(AJ, eJ);
          if (!AJ || !qJ) return;
          const jJ = function(JJ, cJ) {
            const ZJ = JJ.getAttribute(function(JJ) {
              const cJ = tF(JJ);
              return cJ.endsWith("-name") ? `${cJ.slice(0,-5)}-timeout` : `${cJ}-timeout`
            }(cJ));
            return null === ZJ ? void 0 : Number(ZJ)
          }(AJ, eJ);
          FJ.startUserAction(qJ, {}, {
            triggerName: JJ.type,
            initialActivityTimeout: jJ
          })
        },
        processUserActionStarted: function(JJ, ZJ) {
          const FJ = JJ,
            UJ = oF(ZJ, XJ, cJ);
          new GU(FJ, eJ.debug, UJ).attach()
        }
      }
    }
    const xU = "user_action_start",
      rU = {
        Normal: "normal",
        Critical: "critical"
      };
    var vU = class {
        constructor() {
          this.buffer = []
        }
        addItem(JJ) {
          this.buffer.push(JJ)
        }
        flushBuffer(JJ) {
          if (MJ(JJ))
            for (const cJ of this.buffer) JJ(cJ);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      mU = class extends rZ {
        constructor(JJ) {
          let {
            name: cJ,
            parentId: ZJ,
            trigger: FJ,
            transports: UJ,
            attributes: eJ,
            trackUserActionsExcludeItem: XJ,
            importance: AJ = rU.Normal,
            pushEvent: qJ
          } = JJ;
          super(), this.name = cJ, this.attributes = eJ, this.id = xc(), this.trigger = FJ, this.parentId = null !== ZJ && void 0 !== ZJ ? ZJ : this.id, this.trackUserActionsExcludeItem = XJ, this.importance = AJ, this._pushEvent = qJ, this._itemBuffer = new vU, this._transports = UJ, this._state = 0, this._start()
        }
        addItem(JJ) {
          return 0 === this._state && (this._itemBuffer.addItem(JJ), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Dc(), this._startTimeMono = sc())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((JJ => {
            this._transports.execute(JJ)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const JJ = Dc(),
            cJ = sc() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((JJ => {
            if (function(JJ, cJ) {
                return (null === cJ || void 0 === cJ ? void 0 : cJ(JJ)) || "measurement" === JJ.type && "web-vitals" === JJ.payload.type
              }(JJ, this.trackUserActionsExcludeItem)) return void this._transports.execute(JJ);
            const cJ = oc(oc({}, JJ), {}, {
              payload: oc(oc({}, JJ.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(cJ)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", oc({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: JJ.toString(),
            userActionDuration: cJ.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, kc(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: JJ => (JJ.action = {
              id: this.id,
              name: this.name
            }, JJ)
          })
        }
        getState() {
          return this._state
        }
      };
    const QU = new rZ;

    function EU(JJ, cJ) {
      return !!JJ && (0 === (null === JJ || void 0 === JJ ? void 0 : JJ.getState()) && (JJ.addItem(cJ), !0))
    }
    var VU = class extends cZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ZZ
        }
        initialize() {
          const {
            processUserEvent: JJ,
            processUserActionStarted: cJ
          } = fU(GJ, (JJ => this.logWarn(JJ)));
          this._processUserEvent = JJ, this._processKeydown = cJ => {
            [" ", "Enter"].includes(cJ.key) && JJ(cJ)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = QU.subscribe((JJ => {
            let {
              type: ZJ,
              userAction: FJ,
              initialActivityTimeout: UJ
            } = JJ;
            "user_action_start" === ZJ && cJ(FJ, UJ)
          }))
        }
        destroy() {
          var JJ;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (JJ = this._userActionSub) || void 0 === JJ || JJ.unsubscribe()
        }
      },
      KU = class extends cZ {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ZZ, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(JJ) {
          const cJ = {
            blockedURI: JJ.blockedURI,
            columnNumber: JJ.columnNumber,
            disposition: JJ.disposition,
            documentURI: JJ.documentURI,
            effectiveDirective: JJ.effectiveDirective,
            lineNumber: JJ.lineNumber,
            originalPolicy: JJ.originalPolicy,
            referrer: JJ.referrer,
            sample: JJ.sample,
            sourceFile: JJ.sourceFile,
            statusCode: JJ.statusCode,
            violatedDirective: JJ.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", kc(cJ))
        }
      };
    var yU = class extends rZ {
      constructor(JJ, cJ) {
        var ZJ, FJ, UJ, eJ;
        super(), this._tracking = !1, this.eventsObservable = JJ, this._options = {
          inactivityMs: null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.inactivityMs) && void 0 !== ZJ ? ZJ : 100,
          drainTimeoutMs: null !== (FJ = null === cJ || void 0 === cJ ? void 0 : cJ.drainTimeoutMs) && void 0 !== FJ ? FJ : 1e4,
          isOperationStart: null !== (UJ = null === cJ || void 0 === cJ ? void 0 : cJ.isOperationStart) && void 0 !== UJ ? UJ : () => {},
          isOperationEnd: null !== (eJ = null === cJ || void 0 === cJ ? void 0 : cJ.isOperationEnd) && void 0 !== eJ ? eJ : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((JJ => {
          var cJ;
          this._lastEventTime = sc(), null === (cJ = this._currentEvents) || void 0 === cJ || cJ.push(JJ);
          const ZJ = this._options.isOperationStart(JJ);
          var FJ;
          ZJ && (null === (FJ = this._activeOperations) || void 0 === FJ || FJ.set(ZJ, !0));
          const UJ = this._options.isOperationEnd(JJ);
          var eJ;
          UJ && (null === (eJ = this._activeOperations) || void 0 === eJ || eJ.delete(UJ));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = sc(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let JJ;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), JJ = this.hasActiveOperations() ? sc() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: JJ
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = SU(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = SU(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(JJ) {
        JJ && clearTimeout(JJ)
      }
    };

    function SU(JJ, cJ, ZJ) {
      return JJ && clearTimeout(JJ), JJ = setTimeout((() => {
        cJ()
      }), ZJ)
    }
    let IU;
    const MU = new Set,
      bU = new Map;
    let wU, WU, gU, HU, PU, kU, pU, dU, zU = !1;
    var NU = class extends cZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ZZ
      }
      initialize() {
        const JJ = hU(),
          cJ = FU(),
          ZJ = function() {
            function JJ(JJ, cJ) {
              const ZJ = null !== cJ && void 0 !== cJ ? cJ : location.href;
              ZJ !== WU && (wU.notify({
                type: "url-change",
                from: WU,
                to: ZJ,
                trigger: JJ
              }), WU = ZJ)
            }
            if (wU || (wU = new rZ, WU = location.href), !zU)
              if ("navigation" in window && "NavigateEvent" in window) {
                pU = cJ => {
                  try {
                    const ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.destination;
                    (null === ZJ || void 0 === ZJ ? void 0 : ZJ.sameDocument) && "string" === typeof ZJ.url && JJ("navigate", ZJ.url)
                  } catch (ZJ) {}
                }, window.navigation.addEventListener("navigate", pU);
                const cJ = window.NavigateEvent;
                cJ && cJ.prototype && "function" === typeof cJ.prototype.intercept && (dU || (dU = cJ.prototype.intercept), cJ.prototype.intercept = function(cJ) {
                  try {
                    const cJ = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      ZJ = null === this || void 0 === this ? void 0 : this.destination;
                    cJ && ZJ && !1 === ZJ.sameDocument && "string" === typeof ZJ.url && JJ("navigate-intercept", ZJ.url)
                  } catch (ZJ) {}
                  return dU.call(this, cJ)
                }), zU = !0
              } else gU || (gU = window.history.pushState), window.history.pushState = function() {
                for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
                const UJ = gU.apply(window.history, ZJ);
                return JJ("pushState"), UJ
              }, HU || (HU = window.history.replaceState), window.history.replaceState = function() {
                for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
                const UJ = HU.apply(window.history, ZJ);
                return JJ("replaceState"), UJ
              }, PU = () => JJ("popstate"), kU = () => JJ("hashchange"), window.addEventListener("popstate", PU), window.addEventListener("hashchange", kU), zU = !0;
            return wU
          }(),
          FJ = (UJ = ["pointerdown", "keydown"], IU || (IU = new rZ), UJ.forEach((JJ => {
            if (!MU.has(JJ)) {
              const cJ = () => {
                IU.notify({
                  type: "interaction",
                  name: JJ
                })
              };
              window.addEventListener(JJ, cJ), MU.add(JJ), bU.set(JJ, cJ)
            }
          })), IU);
        var UJ;
        const eJ = new yU((new rZ).merge(JJ, cJ, ZJ), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: JJ => function(JJ) {
            return JJ.type === fZ
          }(JJ) ? JJ.request.requestId : void 0,
          isOperationEnd: JJ => function(JJ) {
            return JJ.type === xZ
          }(JJ) ? JJ.request.requestId : void 0
        });
        eJ.filter((JJ => "tracking-ended" === JJ.message)).subscribe((JJ => {
          var cJ, ZJ;
          if ((null === (cJ = JJ.events) || void 0 === cJ ? void 0 : cJ.some((JJ => "url-change" === JJ.type))) && (null === (ZJ = JJ.events) || void 0 === ZJ ? void 0 : ZJ.some((JJ => "dom-mutation" === JJ.type)))) {
            var FJ;
            const cJ = null === (FJ = JJ.events) || void 0 === FJ ? void 0 : FJ.find((JJ => "url-change" === JJ.type));
            GJ.api.pushEvent("faro.navigation", {
              fromUrl: null === cJ || void 0 === cJ ? void 0 : cJ.from,
              toUrl: null === cJ || void 0 === cJ ? void 0 : cJ.to,
              sameDocument: String(!0),
              duration: JJ.duration
            })
          }
        })), FJ.subscribe((() => {
          eJ.startTracking()
        }))
      }
    };

    function OU() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const cJ = [new VU, new HZ, new gF, new FZ, new kZ, new NU];
      return !1 !== JJ.enablePerformanceInstrumentation && cJ.unshift(new RF), !1 !== JJ.enableContentSecurityPolicyInstrumentation && cJ.push(new KU), !1 !== JJ.captureConsole && cJ.push(new WZ), cJ
    }
    var TU = ZJ(7391);
    let CU, uU;

    function iU() {
      const JJ = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return CU === JJ && uU || (uU = new TU.UAParser(JJ).getResult(), CU = JJ), uU
    }
    const RU = () => {
        const {
          browser: JJ,
          os: cJ,
          ua: ZJ
        } = iU(), {
          name: FJ,
          version: UJ
        } = JJ, {
          name: eJ,
          version: XJ
        } = cJ, AJ = navigator.language, qJ = ZJ.includes("Mobi"), jJ = function() {
          if (!FJ || !UJ) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== FJ && void 0 !== FJ ? FJ : PZ,
            version: null !== UJ && void 0 !== UJ ? UJ : PZ,
            os: `${null!==eJ&&void 0!==eJ?eJ:PZ} ${null!==XJ&&void 0!==XJ?XJ:PZ}`,
            userAgent: null !== ZJ && void 0 !== ZJ ? ZJ : PZ,
            language: null !== AJ && void 0 !== AJ ? AJ : PZ,
            mobile: qJ,
            brands: null !== jJ && void 0 !== jJ ? jJ : PZ,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      LU = () => {
        const {
          name: JJ,
          version: cJ
        } = iU().os;
        if (!JJ && !cJ) return {};
        const ZJ = {};
        return JJ && (ZJ.name = JJ), cJ && (ZJ.version = cJ), {
          os: ZJ
        }
      };

    function aU(JJ) {
      var cJ, ZJ, FJ;
      return {
        id: null !== (cJ = null === (ZJ = GJ.config) || void 0 === ZJ || null === (ZJ = ZJ.sessionTracking) || void 0 === ZJ || null === (FJ = ZJ.generateSessionId) || void 0 === FJ ? void 0 : FJ.call(ZJ)) && void 0 !== cJ ? cJ : xc(),
        attributes: JJ
      }
    }
    const BU = () => ({
      sdk: {
        name: "faro-web",
        version: ZZ
      }
    });
    var tU = class extends JZ {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let oU = function(JJ) {
      return JJ.EXCEPTION = "exception", JJ.LOG = "log", JJ.MEASUREMENT = "measurement", JJ.TRACE = "trace", JJ.EVENT = "event", JJ
    }({});
    const lU = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Je(JJ, cJ) {
      var ZJ, FJ;
      if (void 0 === cJ) return JJ;
      if (void 0 === JJ) return {
        resourceSpans: cJ
      };
      const UJ = null === (ZJ = JJ.resourceSpans) || void 0 === ZJ ? void 0 : ZJ[0];
      if (void 0 === UJ) return JJ;
      const eJ = (null === UJ || void 0 === UJ ? void 0 : UJ.scopeSpans) || [],
        XJ = (null === cJ || void 0 === cJ || null === (FJ = cJ[0]) || void 0 === FJ ? void 0 : FJ.scopeSpans) || [];
      return oc(oc({}, JJ), {}, {
        resourceSpans: [oc(oc({}, UJ), {}, {
          scopeSpans: [...eJ, ...XJ]
        })]
      })
    }

    function ce(JJ) {
      let cJ = {
        meta: {}
      };
      return void 0 !== JJ[0] && (cJ.meta = JJ[0].meta), JJ.forEach((JJ => {
        switch (JJ.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const ZJ = lU[JJ.type],
              FJ = cJ[ZJ];
            cJ = oc(oc({}, cJ), {}, {
              [ZJ]: void 0 === FJ ? [JJ.payload] : [...FJ, JJ.payload]
            });
            break
          }
          case "trace":
            cJ = oc(oc({}, cJ), {}, {
              traces: Je(cJ.traces, JJ.payload.resourceSpans)
            })
        }
      })), cJ
    }
    var Ze = class extends tU {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = JJ, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ZZ
      }
      send(JJ) {
        var cJ;
        return this.unpatchedConsole[null !== (cJ = this.options.level) && void 0 !== cJ ? cJ : vZ.DEBUG]("New event", ce([JJ]))
      }
    };
    const Fe = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Ue = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ee = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Xe = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Ae = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      qe = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function je(JJ) {
      let {
        weekday: cJ,
        day: ZJ,
        month: FJ,
        year: UJ,
        hour: eJ,
        minute: XJ,
        second: AJ
      } = JJ;
      if (UJ < 1900 || ZJ < 1 || eJ > 23 || XJ > 59 || AJ > 60) return;
      const qJ = 60 === AJ,
        jJ = new Date(0);
      return jJ.setUTCFullYear(UJ, FJ, ZJ), jJ.setUTCHours(eJ, XJ, qJ ? 59 : AJ, 0), jJ.getUTCDay() === cJ && jJ.getUTCDate() === ZJ && jJ.getUTCMonth() === FJ && jJ.getUTCFullYear() === UJ && jJ.getUTCHours() === eJ && jJ.getUTCMinutes() === XJ && jJ.getUTCSeconds() === (qJ ? 59 : AJ) ? jJ.getTime() + (qJ ? 1e3 : 0) : void 0
    }
    var Ye = class {
      constructor(JJ) {
        this.options = JJ, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var JJ = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const cJ = this.sequence++;
        let ZJ = !1;
        return {
          deliver: function() {
            var ZJ = uF((function*(ZJ) {
              const FJ = JJ.options.getNow();
              let UJ, eJ = 0;
              for (;;) {
                var XJ, AJ, qJ;
                const jJ = JJ.options.retry.maxAttempts - eJ,
                  YJ = yield JJ.runAttempt((() => ZJ(jJ, JJ.unloading)), eJ > 0);
                if (eJ += YJ.attemptsMade, "success" === YJ.kind) return {
                  kind: "success",
                  attempts: eJ,
                  elapsedTimeMs: JJ.options.getNow() - FJ
                };
                if (UJ = YJ.failure, "terminal" === YJ.kind || JJ.unloading) return {
                  kind: "terminal",
                  attempts: eJ,
                  elapsedTimeMs: JJ.options.getNow() - FJ,
                  failure: UJ
                };
                if (eJ >= JJ.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: eJ,
                  elapsedTimeMs: JJ.options.getNow() - FJ,
                  failure: UJ,
                  reason: "retries-exhausted"
                };
                if (null != YJ.retryAfterMs && YJ.retryAfterMs > JJ.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: eJ,
                  elapsedTimeMs: JJ.options.getNow() - FJ,
                  failure: UJ,
                  reason: "retry-after-too-long"
                };
                const hJ = Math.min(null !== (XJ = YJ.retryAfterMs) && void 0 !== XJ ? XJ : JJ.options.retry.initialBackoffMs * Math.pow(JJ.options.retry.backoffMultiplier, eJ - 1), JJ.options.retry.maxBackoffMs);
                if (null === (AJ = (qJ = JJ.options).onRetry) || void 0 === AJ || AJ.call(qJ, hJ, eJ + 1), yield JJ.waitForTurn(cJ, hJ)) {
                  const cJ = JJ.options.retry.maxAttempts - eJ,
                    UJ = yield JJ.runAttempt((() => ZJ(cJ, !0)));
                  return eJ += UJ.attemptsMade, {
                    kind: "success" === UJ.kind ? "success" : "terminal",
                    attempts: eJ,
                    elapsedTimeMs: JJ.options.getNow() - FJ,
                    failure: "success" === UJ.kind ? void 0 : UJ.failure
                  }
                }
              }
            }));
            return function(JJ) {
              return ZJ.apply(this, arguments)
            }
          }(),
          release: () => {
            ZJ || (ZJ = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const JJ = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const cJ of JJ) cJ.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((ZJ, FJ) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const cJ = () => {
                this.inProgress--, this.runNextAttempt()
              };
              JJ().then((JJ => {
                cJ(), ZJ(JJ)
              }), (JJ => {
                cJ(), FJ(JJ)
              }))
            },
            isRedelivery: cJ
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const JJ = this.options.getNow(),
            cJ = this.attemptQueue.findIndex((cJ => {
              let {
                isRedelivery: ZJ
              } = cJ;
              return this.unloading || !ZJ || JJ >= this.nextSendAt
            }));
          if (cJ < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - JJ)));
          const [ZJ] = this.attemptQueue.splice(cJ, 1);
          ZJ.isRedelivery && !this.unloading && (this.nextSendAt = JJ + 1), ZJ.run()
        }
      }
      waitForTurn(JJ, cJ) {
        const ZJ = Math.min(cJ * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((cJ => {
          this.waiting.push({
            sequence: JJ,
            readyAt: this.options.getNow() + ZJ,
            resolve: cJ
          }), this.waiting.sort(((JJ, cJ) => JJ.readyAt === cJ.readyAt ? JJ.sequence - cJ.sequence : JJ.readyAt - cJ.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const JJ = this.waiting[0],
          cJ = JJ.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const cJ = this.waiting.indexOf(JJ);
          cJ >= 0 && this.waiting.splice(cJ, 1), JJ.resolve(!1), this.scheduleNext()
        }), Math.max(0, cJ - this.options.getNow()))
      }
    };

    function he(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if ({}.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.includes(FJ)) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.includes(ZJ) || {}.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function De(JJ) {
      const {
        size: cJ,
        concurrency: ZJ
      } = JJ, FJ = [];
      let UJ = 0;
      const eJ = () => {
        if (UJ < ZJ && FJ.length) {
          const {
            producer: JJ,
            resolve: cJ,
            reject: ZJ
          } = FJ.shift();
          UJ++, JJ().then((JJ => {
            UJ--, eJ(), cJ(JJ)
          }), (JJ => {
            UJ--, eJ(), ZJ(JJ)
          }))
        }
      };
      return {
        add: JJ => {
          if (FJ.length + UJ >= cJ) throw new Error("Task buffer full");
          return new Promise(((cJ, ZJ) => {
            FJ.push({
              producer: JJ,
              resolve: cJ,
              reject: ZJ
            }), eJ()
          }))
        }
      }
    }
    const se = ["headers"],
      ne = ["keepalive", "signal"],
      Ge = new Set([408, 425, 429, 500, 502, 503, 504]),
      fe = new Set([429, 503]);
    let xe = 0,
      re = 0;
    var ve = class extends Error {};
    var me = class extends tU {
      constructor(JJ) {
        var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ;
        super(), this.options = JJ, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ZZ, this.pendingCustomSends = 0, this.getNow = null !== (cJ = JJ.getNow) && void 0 !== cJ ? cJ : Date.now, this.requestTimeoutMs = null !== (ZJ = JJ.requestTimeoutMs) && void 0 !== ZJ ? ZJ : 1e4, this.compressionEnabled = null !== (FJ = JJ.requestCompression) && void 0 !== FJ && FJ && "undefined" !== typeof CompressionStream, JJ.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Ye({
          bufferSize: null !== (UJ = JJ.bufferSize) && void 0 !== UJ ? UJ : 30,
          concurrency: null !== (eJ = JJ.concurrency) && void 0 !== eJ ? eJ : 5,
          retry: {
            maxAttempts: null !== (XJ = null === (AJ = JJ.retry) || void 0 === AJ ? void 0 : AJ.maxAttempts) && void 0 !== XJ ? XJ : 3,
            initialBackoffMs: null !== (qJ = null !== (jJ = null === (YJ = JJ.retry) || void 0 === YJ ? void 0 : YJ.initialBackoffMs) && void 0 !== jJ ? jJ : JJ.defaultRateLimitBackoffMs) && void 0 !== qJ ? qJ : 1e3,
            maxBackoffMs: null !== (hJ = null === (DJ = JJ.retry) || void 0 === DJ ? void 0 : DJ.maxBackoffMs) && void 0 !== hJ ? hJ : 3e4,
            backoffMultiplier: null !== (sJ = null === (nJ = JJ.retry) || void 0 === nJ ? void 0 : nJ.backoffMultiplier) && void 0 !== sJ ? sJ : 2
          },
          getNow: this.getNow,
          getRandom: null !== (GJ = JJ.getRandom) && void 0 !== GJ ? GJ : Math.random,
          onRetry: (JJ, cJ) => {
            this.logDebug(`Retrying failed request after ${JJ}ms. Attempt ${cJ}.`)
          }
        }), this.customPromiseBuffer = De({
          size: null !== (fJ = JJ.bufferSize) && void 0 !== fJ ? fJ : 30,
          concurrency: null !== (xJ = JJ.concurrency) && void 0 !== xJ ? xJ : 5
        }), this.defaultPromiseBuffer = {
          add: JJ => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(JJ);
            const cJ = this.deliveryQueue.reserve();
            if (!cJ) throw new Error("Task buffer full");
            return this.runBufferedTask(cJ, JJ)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (JJ => {
          JJ.persisted && this.deliveryQueue.resume()
        })))
      }
      send(JJ) {
        var cJ = this;
        return uF((function*() {
          const ZJ = cJ.promiseBuffer;
          if (ZJ !== cJ.defaultPromiseBuffer || ZJ.add !== cJ.defaultBufferAdd) {
            cJ.pendingCustomSends++;
            try {
              yield ZJ.add((() => cJ.deliver(JJ)))
            } catch (FJ) {
              cJ.logError("Permanent delivery failure", {
                error: FJ,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              cJ.pendingCustomSends--
            }
          } else yield cJ.deliver(JJ)
        }))()
      }
      runBufferedTask(JJ, cJ) {
        return uF((function*() {
          let ZJ;
          try {
            return yield JJ.deliver(uF((function*() {
              return ZJ = yield cJ(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), ZJ
          } finally {
            JJ.release()
          }
        }))()
      }
      deliver(JJ) {
        var cJ = this;
        return uF((function*() {
          const ZJ = cJ.deliveryQueue.reserve();
          if (ZJ) try {
            const FJ = yield cJ.prepareRequest(JJ), UJ = yield ZJ.deliver(((JJ, ZJ) => cJ.performAttempt(FJ, JJ, ZJ)));
            "terminal" === UJ.kind && cJ.logError("retries-exhausted" === UJ.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Yc(Yc({}, UJ.failure), {}, {
              reason: UJ.reason,
              attempts: UJ.attempts,
              elapsedTimeMs: UJ.elapsedTimeMs
            }))
          } catch (FJ) {
            cJ.logError("Permanent delivery failure", {
              error: FJ,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            ZJ.release()
          } else cJ.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var JJ;
        return [this.options.url].concat(null !== (JJ = this.config.ignoreUrls) && void 0 !== JJ ? JJ : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(JJ) {
        var cJ = this;
        return uF((function*() {
          var ZJ, FJ;
          const UJ = ce(JJ),
            eJ = null === (ZJ = UJ.meta.session) || void 0 === ZJ ? void 0 : ZJ.id,
            XJ = JSON.stringify(UJ),
            AJ = null !== (FJ = cJ.options.requestOptions) && void 0 !== FJ ? FJ : {},
            {
              headers: qJ = {}
            } = AJ,
            jJ = he(AJ, se),
            {
              keepalive: YJ,
              signal: hJ
            } = jJ,
            DJ = he(jJ, ne),
            sJ = {};
          for (const [JJ, cJ] of Object.entries(qJ)) sJ[JJ] = "function" === typeof cJ ? yield cJ(): cJ;
          let nJ = XJ,
            GJ = function(JJ) {
              return "undefined" === typeof TextEncoder ? JJ.length : (new TextEncoder).encode(JJ).byteLength
            }(XJ);
          const fJ = {};
          return cJ.compressionEnabled && (nJ = yield cJ.compress(XJ), GJ = nJ.size, fJ["Content-Encoding"] = "gzip"), {
            bodySize: GJ,
            sessionId: eJ,
            requestInit: Yc({
              method: "POST",
              headers: Yc(Yc(Yc(Yc(Yc({
                "Content-Type": "application/json"
              }, fJ), sJ), cJ.options.apiKey ? {
                "x-api-key": cJ.options.apiKey
              } : {}), eJ ? {
                "x-faro-session-id": eJ
              } : {}), {}, {
                "Idempotency-Key": xc(20)
              }),
              body: nJ
            }, DJ)
          }
        }))()
      }
      performAttempt(JJ, cJ, ZJ) {
        var FJ = this;
        return uF((function*() {
          var UJ;
          const eJ = null === (UJ = FJ.options.requestOptions) || void 0 === UJ ? void 0 : UJ.signal;
          if (null === eJ || void 0 === eJ ? void 0 : eJ.aborted) return {
            kind: "terminal",
            failure: {
              error: eJ.reason
            },
            attemptsMade: 0
          };
          let XJ = 0;
          try {
            var AJ;
            const UJ = yield FJ.fetchWithKeepaliveFallback(JJ.requestInit, JJ.bodySize, !!ZJ || (null === (AJ = FJ.options.requestOptions) || void 0 === AJ ? void 0 : AJ.keepalive), cJ, (() => XJ++));
            if (FJ.handleResponse(UJ, JJ.sessionId), UJ.status >= 200 && UJ.status < 300) return {
              kind: "success",
              attemptsMade: XJ
            };
            const eJ = {
              status: UJ.status
            };
            return !Ge.has(UJ.status) || ZJ ? {
              kind: "terminal",
              failure: eJ,
              attemptsMade: XJ
            } : {
              kind: "retry",
              failure: eJ,
              attemptsMade: XJ,
              retryAfterMs: fe.has(UJ.status) ? FJ.getRetryAfterDelayMs(UJ) : void 0
            }
          } catch (qJ) {
            const JJ = {
              error: qJ
            };
            return (null === eJ || void 0 === eJ ? void 0 : eJ.aborted) || !FJ.isFetchNetworkError(qJ) || ZJ ? {
              kind: "terminal",
              failure: JJ,
              attemptsMade: XJ
            } : {
              kind: "retry",
              failure: JJ,
              attemptsMade: XJ
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(JJ, cJ, ZJ, FJ, UJ) {
        var eJ = this;
        return uF((function*() {
          const XJ = eJ.getNow(),
            AJ = eJ.reserveKeepalive(cJ, ZJ);
          try {
            return yield eJ.fetchWithTimeout(Yc(Yc({}, JJ), {}, {
              keepalive: AJ.keepalive
            }), eJ.requestTimeoutMs, UJ)
          } catch (jJ) {
            var qJ;
            if (AJ.keepalive && FJ > 1 && eJ.isFetchNetworkError(jJ) && !(jJ instanceof ve) && !(null === (qJ = eJ.options.requestOptions) || void 0 === qJ || null === (qJ = qJ.signal) || void 0 === qJ ? void 0 : qJ.aborted)) {
              eJ.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const cJ = eJ.requestTimeoutMs - (eJ.getNow() - XJ);
              return eJ.fetchWithTimeout(Yc(Yc({}, JJ), {}, {
                keepalive: !1
              }), cJ, UJ)
            }
            throw jJ
          } finally {
            AJ.release()
          }
        }))()
      }
      fetchWithTimeout(JJ, cJ, ZJ) {
        var FJ = this;
        return uF((function*() {
          var UJ;
          const eJ = null === (UJ = FJ.options.requestOptions) || void 0 === UJ ? void 0 : UJ.signal;
          if (FJ.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return ZJ(), fetch(FJ.options.url, Yc(Yc({}, JJ), {}, {
            signal: eJ
          }));
          if (cJ <= 0) throw new ve("Request timed out");
          const XJ = new AbortController,
            AJ = () => XJ.abort(null === eJ || void 0 === eJ ? void 0 : eJ.reason);
          null === eJ || void 0 === eJ || eJ.addEventListener("abort", AJ, {
            once: !0
          });
          let qJ = !1;
          const jJ = setTimeout((() => {
            qJ = !0, XJ.abort()
          }), cJ);
          try {
            return ZJ(), yield fetch(FJ.options.url, Yc(Yc({}, JJ), {}, {
              signal: XJ.signal
            }))
          } catch (YJ) {
            if (qJ && !(null === eJ || void 0 === eJ ? void 0 : eJ.aborted)) throw new ve("Request timed out");
            throw YJ
          } finally {
            clearTimeout(jJ), null === eJ || void 0 === eJ || eJ.removeEventListener("abort", AJ)
          }
        }))()
      }
      getRetryAfterDelayMs(JJ) {
        const cJ = JJ.headers.get("Retry-After");
        if (!cJ) return;
        if (/^\d+$/.test(cJ)) {
          const JJ = 1e3 * Number(cJ);
          return Number.isFinite(JJ) ? JJ : Number.POSITIVE_INFINITY
        }
        const ZJ = this.getNow(),
          FJ = function(JJ, cJ) {
            const ZJ = Fe.exec(JJ);
            if (ZJ) {
              const [, JJ, cJ, FJ, UJ, eJ, XJ, AJ] = ZJ;
              return je({
                weekday: Xe.indexOf(JJ),
                day: Number(cJ),
                month: qe.indexOf(FJ),
                year: Number(UJ),
                hour: Number(eJ),
                minute: Number(XJ),
                second: Number(AJ)
              })
            }
            const FJ = Ue.exec(JJ);
            if (FJ) {
              const [, JJ, ZJ, XJ, AJ, qJ, jJ, YJ] = FJ, hJ = new Date(cJ);
              if (Number.isNaN(hJ.getTime())) return;
              const DJ = hJ.getUTCFullYear();
              let sJ = 100 * Math.floor(DJ / 100) + Number(AJ);
              sJ < DJ && (sJ += 100);
              const nJ = qe.indexOf(XJ),
                GJ = {
                  month: nJ,
                  day: Number(ZJ),
                  hour: Number(qJ),
                  minute: Number(jJ),
                  second: Number(YJ),
                  millisecond: 0
                },
                fJ = {
                  month: hJ.getUTCMonth(),
                  day: hJ.getUTCDate(),
                  hour: hJ.getUTCHours(),
                  minute: hJ.getUTCMinutes(),
                  second: hJ.getUTCSeconds(),
                  millisecond: hJ.getUTCMilliseconds()
                };
              return (sJ > DJ + 50 || sJ === DJ + 50 && (eJ = fJ, ((UJ = GJ).month - eJ.month || UJ.day - eJ.day || UJ.hour - eJ.hour || UJ.minute - eJ.minute || UJ.second - eJ.second || UJ.millisecond - eJ.millisecond) > 0)) && (sJ -= 100), je({
                weekday: Ae.indexOf(JJ),
                day: Number(ZJ),
                month: nJ,
                year: sJ,
                hour: Number(qJ),
                minute: Number(jJ),
                second: Number(YJ)
              })
            }
            var UJ, eJ;
            const XJ = ee.exec(JJ);
            if (!XJ) return;
            const [, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ] = XJ;
            return je({
              weekday: Xe.indexOf(AJ),
              day: Number(null !== jJ && void 0 !== jJ ? jJ : YJ),
              month: qe.indexOf(qJ),
              year: Number(nJ),
              hour: Number(hJ),
              minute: Number(DJ),
              second: Number(sJ)
            })
          }(cJ, ZJ);
        return null == FJ ? void 0 : Math.max(0, FJ - ZJ)
      }
      reserveKeepalive(JJ, cJ) {
        if (!1 === cJ || JJ > 6e4 || xe + JJ > 6e4 || re >= 9) return {
          keepalive: !1,
          release: Cc
        };
        xe += JJ, re++;
        let ZJ = !1;
        return {
          keepalive: !0,
          release: () => {
            ZJ || (ZJ = !0, xe -= JJ, re--)
          }
        }
      }
      handleResponse(JJ, cJ) {
        202 === JJ.status && "invalid" === JJ.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), cJ), JJ.text().catch(Cc)
      }
      isFetchNetworkError(JJ) {
        return JJ instanceof TypeError || JJ instanceof ve || JJ instanceof DOMException && "AbortError" === JJ.name
      }
      compress(JJ) {
        return uF((function*() {
          const cJ = [],
            ZJ = new ReadableStream({
              start(cJ) {
                cJ.enqueue((new TextEncoder).encode(JJ)), cJ.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: JJ,
              value: FJ
            } = yield ZJ.read();
            if (JJ) return new Blob(cJ);
            cJ.push(FJ)
          }
        }))()
      }
      extendFaroSession(JJ, cJ, ZJ) {
        var FJ, UJ;
        const eJ = JJ.sessionTracking;
        if (!(null === eJ || void 0 === eJ ? void 0 : eJ.enabled)) return void cJ("Session expired.");
        const {
          fetchUserSession: XJ,
          storeUserSession: AJ
        } = Tc(eJ), qJ = null === (FJ = this.metas.value.session) || void 0 === FJ ? void 0 : FJ.id, jJ = null === (UJ = XJ()) || void 0 === UJ ? void 0 : UJ.sessionId;
        ZJ && ZJ === qJ && ZJ === jJ ? (bc({
          fetchUserSession: XJ,
          storeUserSession: AJ
        })({
          forceSessionExtend: !0
        }), cJ("Session expired; created new session.")) : cJ("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Qe = () => {
      const JJ = window.k6;
      return {
        k6: Yc({
          isK6Browser: !0
        }, (null === JJ || void 0 === JJ ? void 0 : JJ.testRunId) && {
          testRunId: null === JJ || void 0 === JJ ? void 0 : JJ.testRunId
        })
      }
    };
    let Ee, Ve;

    function Ke() {
      let {
        generatePageId: JJ,
        initialPageMeta: cJ
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const ZJ = location.href;
        return MJ(JJ) && Ee !== ZJ && (Ee = ZJ, Ve = JJ(location)), {
          page: Yc(Yc({
            url: ZJ
          }, Ve ? {
            id: Ve
          } : {}), cJ)
        }
      }
    }

    function ye() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lc,
        cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZJ = ic;
      return cJ > 0 && (ZJ.error = cJ >= 1 ? function() {
        for (var cJ = arguments.length, FJ = new Array(cJ), UJ = 0; UJ < cJ; UJ++) FJ[UJ] = arguments[UJ];
        JJ.error(`${ZJ.prefix}\n`, ...FJ)
      } : Cc, ZJ.warn = cJ >= 2 ? function() {
        for (var cJ = arguments.length, FJ = new Array(cJ), UJ = 0; UJ < cJ; UJ++) FJ[UJ] = arguments[UJ];
        JJ.warn(`${ZJ.prefix}\n`, ...FJ)
      } : Cc, ZJ.info = cJ >= 3 ? function() {
        for (var cJ = arguments.length, FJ = new Array(cJ), UJ = 0; UJ < cJ; UJ++) FJ[UJ] = arguments[UJ];
        JJ.info(`${ZJ.prefix}\n`, ...FJ)
      } : Cc, ZJ.debug = cJ >= 4 ? function() {
        for (var cJ = arguments.length, FJ = new Array(cJ), UJ = 0; UJ < cJ; UJ++) FJ[UJ] = arguments[UJ];
        JJ.debug(`${ZJ.prefix}\n`, ...FJ)
      } : Cc), ZJ
    }
    const Se = "faro",
      Ie = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Me = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function be(JJ) {
      var cJ, ZJ, UJ, eJ, XJ, AJ;
      const qJ = [],
        YJ = ye(JJ.unpatchedConsole, JJ.internalLoggerLevel);
      JJ.transports ? ((JJ.url || JJ.apiKey) && YJ.error('if "transports" is defined, "url" and "apiKey" should not be defined'), qJ.push(...JJ.transports)) : JJ.url ? qJ.push(new me({
        url: JJ.url,
        apiKey: JJ.apiKey,
        requestCompression: JJ.requestCompression
      })) : YJ.error('either "url" or "transports" must be defined');
      const {
        dedupe: hJ = !0,
        eventDomain: DJ = FJ,
        globalObjectKey: sJ = Se,
        instrumentations: nJ = OU(),
        internalLoggerLevel: GJ = Rc,
        isolate: fJ = !1,
        logArgsSerializer: xJ = wZ,
        metas: rJ = We(JJ),
        paused: vJ = !1,
        preventGlobalExposure: mJ = !1,
        unpatchedConsole: QJ = lc,
        url: EJ,
        experimental: VJ
      } = JJ, KJ = he(JJ, Me), yJ = null !== (cJ = null === VJ || void 0 === VJ ? void 0 : VJ.trackNavigation) && void 0 !== cJ && cJ, SJ = {
        dataAttributeName: tF(null !== (ZJ = null === (UJ = JJ.userActionsInstrumentation) || void 0 === UJ ? void 0 : UJ.dataAttributeName) && void 0 !== ZJ ? ZJ : LF),
        excludeItem: null === (eJ = JJ.userActionsInstrumentation) || void 0 === eJ ? void 0 : eJ.excludeItem,
        initialActivityTimeout: oF(null === (XJ = JJ.userActionsInstrumentation) || void 0 === XJ ? void 0 : XJ.initialActivityTimeout, 100, (JJ => YJ.warn(JJ)))
      };
      return Yc(Yc({}, KJ), {}, {
        batching: Yc(Yc({}, Ie), JJ.batching),
        dedupe: hJ,
        globalObjectKey: sJ,
        instrumentations: we(nJ, JJ),
        internalLoggerLevel: GJ,
        isolate: fJ,
        logArgsSerializer: xJ,
        metas: rJ,
        parseStacktrace: GZ,
        paused: vJ,
        preventGlobalExposure: mJ,
        transports: qJ,
        unpatchedConsole: QJ,
        eventDomain: DJ,
        ignoreUrls: [...null !== (AJ = JJ.ignoreUrls) && void 0 !== AJ ? AJ : [], ...EJ ? [EJ] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Yc(Yc(Yc({}, jJ), JJ.sessionTracking), ge({
          trackGeolocation: JJ.trackGeolocation,
          sessionTracking: JJ.sessionTracking
        })),
        userActionsInstrumentation: SJ,
        experimental: {
          trackNavigation: yJ
        }
      })
    }

    function we(JJ, cJ) {
      let {
        experimental: ZJ
      } = cJ;
      var FJ;
      const UJ = null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.trackNavigation) && void 0 !== FJ && FJ;
      return JJ.filter((JJ => !("@grafana/faro-web-sdk:instrumentation-navigation" === JJ.name && !UJ)))
    }

    function We(JJ) {
      var cJ, ZJ, FJ;
      const {
        page: UJ,
        generatePageId: eJ
      } = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.pageTracking) && void 0 !== cJ ? cJ : {}, XJ = [RU, LU, Ke({
        generatePageId: eJ,
        initialPageMeta: UJ
      }), ...null !== (ZJ = JJ.metas) && void 0 !== ZJ ? ZJ : [], BU];
      return IJ(null === (FJ = window) || void 0 === FJ ? void 0 : FJ.k6) ? [...XJ, Qe] : XJ
    }

    function ge(JJ) {
      let {
        trackGeolocation: cJ,
        sessionTracking: ZJ
      } = JJ;
      var FJ;
      const UJ = {};
      return yJ(cJ) && (UJ.geoLocationTrackingEnabled = cJ), RJ(UJ) ? {} : {
        session: Yc(Yc({}, null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.session) && void 0 !== FJ ? FJ : {}), {}, {
          overrides: UJ
        })
      }
    }
    const He = new WeakSet;

    function Pe(JJ) {
      return He.add(JJ), JJ
    }

    function ke(JJ, cJ) {
      if (JJ.capture) return Pe(JJ.capture(cJ));
      const ZJ = Pe(JJ.value);
      return null === cJ || void 0 === cJ || cJ(), ZJ
    }

    function pe(JJ) {
      const cJ = `__faroBundleId_${JJ}`,
        ZJ = null === YJ || void 0 === YJ ? void 0 : YJ[cJ];
      if ("string" === typeof ZJ && "" !== ZJ) return ZJ;
      const FJ = "undefined" !== typeof window ? window[cJ] : void 0;
      return "string" === typeof FJ && "" !== FJ ? FJ : void 0
    }

    function de(JJ) {
      var cJ, ZJ;
      const FJ = JJ.config.app.name,
        UJ = FJ ? function(JJ) {
          return null === YJ || void 0 === YJ ? void 0 : YJ[`__faroGitHash_${JJ}`]
        }(FJ) : void 0,
        eJ = {
          sdk: {
            version: ZZ,
            name: "faro"
          },
          app: oc({
            bundleId: FJ && pe(FJ)
          }, void 0 !== UJ ? {
            gitHash: UJ
          } : {})
        },
        XJ = null === (cJ = JJ.config.sessionTracking) || void 0 === cJ ? void 0 : cJ.session;
      XJ && JJ.api.setSession(XJ), JJ.config.app && (eJ.app = oc(oc({}, JJ.config.app), eJ.app)), JJ.config.user && (eJ.user = JJ.config.user), JJ.config.view && (eJ.view = JJ.config.view), JJ.metas.add(eJ, ...null !== (ZJ = JJ.config.metas) && void 0 !== ZJ ? ZJ : [])
    }
    var ze = class {
      constructor(JJ, cJ) {
        var ZJ, FJ;
        this.signalBuffer = [], this.itemLimit = null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.itemLimit) && void 0 !== ZJ ? ZJ : 50, this.sendTimeout = null !== (FJ = null === cJ || void 0 === cJ ? void 0 : cJ.sendTimeout) && void 0 !== FJ ? FJ : 250, this.paused = (null === cJ || void 0 === cJ ? void 0 : cJ.paused) || !1, this.sendFn = JJ, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(JJ) {
        this.paused || (this.signalBuffer.push(JJ), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(JJ) {
        const cJ = new Map;
        return JJ.forEach((JJ => {
          const ZJ = JSON.stringify(JJ.meta);
          let FJ = cJ.get(ZJ);
          FJ = void 0 === FJ ? [JJ] : [...FJ, JJ], cJ.set(ZJ, FJ)
        })), Array.from(cJ.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const JJ = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(JJ).forEach(this.sendFn)
        } catch (cJ) {
          throw this.signalBuffer = [...JJ, ...this.signalBuffer], this.trimBufferToLimit(), cJ
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Ne(JJ, cJ, ZJ, FJ) {
      var UJ;
      cJ.debug("Initializing transports");
      const eJ = [];
      let XJ = [];
      const AJ = JJ => {
        let cJ = JJ;
        for (const FJ of XJ) {
          const JJ = cJ.map(FJ).filter(Boolean);
          if (0 === JJ.length) return [];
          cJ = Oe(JJ, ZJ)
        }
        return cJ
      };
      let qJ;
      (null === (UJ = ZJ.batching) || void 0 === UJ ? void 0 : UJ.enabled) && (qJ = new ze((JJ => {
        const ZJ = AJ(JJ);
        if (0 !== ZJ.length)
          for (const FJ of eJ) cJ.debug(`Transporting item using ${FJ.name}\n`, ZJ), FJ.isBatched() && FJ.send(ZJ)
      }), {
        sendTimeout: ZJ.batching.sendTimeout,
        itemLimit: ZJ.batching.itemLimit,
        paused: ZJ.paused
      }));
      return {
        add: function() {
          cJ.debug("Adding transports");
          for (var UJ = arguments.length, XJ = new Array(UJ), AJ = 0; AJ < UJ; AJ++) XJ[AJ] = arguments[AJ];
          XJ.forEach((UJ => {
            cJ.debug(`Adding "${UJ.name}" transport`), eJ.some((JJ => JJ === UJ)) ? cJ.warn(`Transport ${UJ.name} is already added`) : (UJ.unpatchedConsole = JJ, UJ.internalLogger = cJ, UJ.config = ZJ, UJ.metas = FJ, eJ.push(UJ))
          }))
        },
        addBeforeSendHooks: function() {
          cJ.debug("Adding beforeSendHooks\n", XJ);
          for (var JJ = arguments.length, ZJ = new Array(JJ), FJ = 0; FJ < JJ; FJ++) ZJ[FJ] = arguments[FJ];
          ZJ.forEach((JJ => {
            JJ && XJ.push(JJ)
          }))
        },
        getBeforeSendHooks: () => [...XJ],
        execute: JJ => {
          var UJ;
          if (!ZJ.paused && Nc(FJ).shouldCapture()) {
            if (hJ = JJ.meta, !He.has(hJ)) {
              var XJ, jJ, YJ;
              const cJ = null === (XJ = FJ.value.session) || void 0 === XJ ? void 0 : XJ.id,
                UJ = ke(FJ);
              if (ZJ.paused) return;
              const eJ = oc({}, JJ.meta);
              (null === (jJ = eJ.session) || void 0 === jJ ? void 0 : jJ.id) === cJ && (null === (YJ = UJ.session) || void 0 === YJ ? void 0 : YJ.id) !== cJ && (void 0 === UJ.session ? delete eJ.session : eJ.session = UJ.session), JJ = oc(oc({}, JJ), {}, {
                meta: Pe(eJ)
              })
            }
            var hJ;
            (null === (UJ = ZJ.batching) || void 0 === UJ ? void 0 : UJ.enabled) && (null === qJ || void 0 === qJ || qJ.addItem(JJ)), (JJ => {
              var FJ;
              if ((null === (FJ = ZJ.batching) || void 0 === FJ ? void 0 : FJ.enabled) && eJ.every((JJ => JJ.isBatched()))) return;
              const [UJ] = AJ([JJ]);
              if (void 0 !== UJ)
                for (const AJ of eJ) {
                  var XJ;
                  cJ.debug(`Transporting item using ${AJ.name}\n`, UJ), AJ.isBatched() ? (null === (XJ = ZJ.batching) || void 0 === XJ ? void 0 : XJ.enabled) || AJ.send([UJ]) : AJ.send(UJ)
                }
            })(JJ)
          }
        },
        isPaused: () => ZJ.paused,
        pause: () => {
          cJ.debug("Pausing transports"), null === qJ || void 0 === qJ || qJ.pause(), ZJ.paused = !0
        },
        remove: function() {
          cJ.debug("Removing transports");
          for (var JJ = arguments.length, ZJ = new Array(JJ), FJ = 0; FJ < JJ; FJ++) ZJ[FJ] = arguments[FJ];
          ZJ.forEach((JJ => {
            cJ.debug(`Removing "${JJ.name}" transport`);
            const ZJ = eJ.indexOf(JJ); - 1 !== ZJ ? eJ.splice(ZJ, 1) : cJ.warn(`Transport "${JJ.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var JJ = arguments.length, ZJ = new Array(JJ), FJ = 0; FJ < JJ; FJ++) ZJ[FJ] = arguments[FJ];
          cJ.debug("Removing beforeSendHooks"), XJ = XJ.filter((JJ => !ZJ.includes(JJ)))
        },
        get transports() {
          return [...eJ]
        },
        unpause: () => {
          cJ.debug("Unpausing transports"), null === qJ || void 0 === qJ || qJ.start(), ZJ.paused = !1
        }
      }
    }

    function Oe(JJ, cJ) {
      if (cJ.preserveOriginalError)
        for (const ZJ of JJ) "exception" === ZJ.type && delete ZJ.payload.originalError;
      return JJ
    }
    let Te = lc;

    function Ce(JJ) {
      var cJ;
      return Te = null !== (cJ = JJ.unpatchedConsole) && void 0 !== cJ ? cJ : Te, Te
    }
    let ue, ie = ic;

    function Re(JJ, cJ) {
      return ie = ye(JJ, cJ.internalLoggerLevel), ie
    }

    function Le(JJ) {
      let {
        internalLogger: cJ,
        config: ZJ,
        metas: FJ,
        transports: UJ,
        tracesApi: eJ,
        userActionsApi: XJ
      } = JJ;
      var AJ;
      cJ.debug("Initializing exceptions API");
      let qJ = null;
      ue = null !== (AJ = ZJ.parseStacktrace) && void 0 !== AJ ? AJ : ue;
      const jJ = JJ => {
          cJ.debug("Changing stacktrace parser"), ue = null !== JJ && void 0 !== JJ ? JJ : ue
        },
        {
          ignoreErrors: YJ = [],
          preserveOriginalError: hJ
        } = ZJ;
      return jJ(ZJ.parseStacktrace), {
        changeStacktraceParser: jJ,
        getStacktraceParser: () => ue,
        pushError: function(JJ) {
          let {
            skipDedupe: AJ,
            stackFrames: jJ,
            type: DJ,
            context: sJ,
            spanContext: nJ,
            timestampOverwriteMs: GJ,
            originalError: fJ,
            fingerprint: xJ,
            fatal: rJ
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(JJ, cJ) {
              const {
                message: ZJ,
                name: FJ,
                stack: UJ
              } = cJ;
              return eJ = JJ, XJ = ZJ + " " + FJ + " " + UJ, eJ.some((JJ => EJ(JJ) ? XJ.includes(JJ) : !!XJ.match(JJ)));
              var eJ, XJ
            }(YJ, null !== fJ && void 0 !== fJ ? fJ : JJ)) try {
            var vJ, mJ;
            if (!Nc(FJ).shouldCapture()) return;
            const YJ = kc(oc(oc({}, function(JJ) {
                let cJ = JJ.cause;
                pJ(cJ) ? cJ = JJ.cause.toString() : null !== cJ && (IJ(JJ.cause) || bJ(JJ.cause)) ? cJ = Pc(JJ.cause) : null != cJ && (cJ = JJ.cause.toString());
                return null == cJ ? {} : {
                  cause: cJ
                }
              }(null !== fJ && void 0 !== fJ ? fJ : JJ)), null !== sJ && void 0 !== sJ ? sJ : {})),
              EJ = oc(oc(oc(oc({
                type: DJ || JJ.name || "Error",
                value: JJ.message,
                timestamp: GJ ? Gc(GJ) : nc(),
                trace: nJ ? {
                  trace_id: nJ.traceId,
                  span_id: nJ.spanId
                } : eJ.getTraceContext()
              }, RJ(YJ) ? {} : {
                context: YJ
              }), hJ ? {
                originalError: fJ
              } : {}), xJ ? {
                fingerprint: xJ
              } : {}), void 0 !== rJ ? {
                fatal: rJ
              } : {});
            jJ = null !== (vJ = jJ) && void 0 !== vJ ? vJ : JJ.stack ? null === ue || void 0 === ue ? void 0 : ue(JJ).frames : void 0, (null === jJ || void 0 === jJ ? void 0 : jJ.length) && (EJ.stacktrace = {
              frames: jJ
            });
            const VJ = {
              type: EJ.type,
              value: EJ.value,
              stacktrace: EJ.stacktrace,
              context: EJ.context,
              fingerprint: EJ.fingerprint,
              fatal: null !== (mJ = EJ.fatal) && void 0 !== mJ && mJ
            };
            if (!AJ && ZJ.dedupe && !QJ(qJ) && rc(VJ, qJ)) return void cJ.debug("Skipping error push because it is the same as the last one\n", EJ);
            const KJ = qJ,
              yJ = ke(FJ);
            if (qJ !== KJ && !AJ && ZJ.dedupe && rc(VJ, qJ)) return;
            qJ = VJ;
            const SJ = {
              meta: yJ,
              payload: EJ,
              type: "exception"
            };
            cJ.debug("Pushing exception\n", SJ), EU(XJ.getActiveUserAction(), SJ) || UJ.execute(SJ)
          } catch (VJ) {
            cJ.error("Error pushing event", VJ)
          }
        }
      }
    }

    function ae(JJ, cJ, ZJ, FJ, UJ) {
      cJ.debug("Initializing API");
      let eJ = null;
      const XJ = function(JJ) {
          let {
            transports: cJ,
            internalLogger: ZJ,
            config: FJ,
            pushEvent: UJ
          } = JJ;
          var eJ;
          const XJ = null === (eJ = FJ.userActionsInstrumentation) || void 0 === eJ ? void 0 : eJ.excludeItem;
          let AJ;
          const qJ = () => AJ;
          return {
            startUserAction: (JJ, FJ, eJ) => {
              if (void 0 === qJ()) {
                const ZJ = new mU({
                  name: JJ,
                  transports: cJ,
                  attributes: FJ,
                  trigger: (null === eJ || void 0 === eJ ? void 0 : eJ.triggerName) || "faroApiCall",
                  importance: (null === eJ || void 0 === eJ ? void 0 : eJ.importance) || rU.Normal,
                  trackUserActionsExcludeItem: XJ,
                  pushEvent: UJ
                });
                return ZJ.filter((JJ => [3, 2].includes(JJ))).first().subscribe((() => {
                  AJ = void 0
                })), QU.notify({
                  type: xU,
                  userAction: ZJ,
                  initialActivityTimeout: null === eJ || void 0 === eJ ? void 0 : eJ.initialActivityTimeout
                }), AJ = ZJ, AJ
              }
              ZJ.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: qJ
          }
        }({
          transports: UJ,
          config: ZJ,
          internalLogger: cJ,
          pushEvent: (JJ, ZJ, FJ, UJ) => {
            eJ ? eJ(JJ, ZJ, FJ, UJ) : cJ.warn("pushEventImpl is not initialized. Event dropped:", {
              name: JJ,
              attributes: ZJ,
              domain: FJ,
              options: UJ
            })
          }
        }),
        AJ = function(JJ, cJ, ZJ, FJ, UJ) {
          let eJ;
          return cJ.debug("Initializing traces API"), {
            getOTEL: () => eJ,
            getTraceContext: () => {
              const JJ = null === eJ || void 0 === eJ ? void 0 : eJ.trace.getSpanContext(eJ.context.active());
              return JJ ? {
                trace_id: JJ.traceId,
                span_id: JJ.spanId
              } : void 0
            },
            initOTEL: (JJ, ZJ) => {
              cJ.debug("Initializing OpenTelemetry"), eJ = {
                trace: JJ,
                context: ZJ
              }
            },
            isOTELInitialized: () => !!eJ,
            pushTraces: JJ => {
              try {
                if (!Nc(FJ).shouldCapture()) return;
                const ZJ = {
                  type: "trace",
                  payload: JJ,
                  meta: ke(FJ)
                };
                cJ.debug("Pushing trace\n", ZJ), UJ.execute(ZJ)
              } catch (ZJ) {
                cJ.error("Error pushing trace\n", ZJ)
              }
            }
          }
        }(0, cJ, 0, FJ, UJ),
        qJ = {
          unpatchedConsole: JJ,
          internalLogger: cJ,
          userActionsApi: XJ,
          config: ZJ,
          metas: FJ,
          transports: UJ,
          tracesApi: AJ
        },
        jJ = function(JJ) {
          let {
            internalLogger: cJ,
            config: ZJ,
            metas: FJ,
            transports: UJ,
            tracesApi: eJ,
            userActionsApi: XJ
          } = JJ, AJ = null;
          return {
            pushEvent: function(JJ, qJ, jJ) {
              let {
                skipDedupe: YJ,
                spanContext: hJ,
                timestampOverwriteMs: DJ,
                customPayloadTransformer: sJ = JJ => JJ
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Nc(FJ).shouldCapture()) return;
                const nJ = kc(qJ),
                  GJ = sJ({
                    name: JJ,
                    domain: null !== jJ && void 0 !== jJ ? jJ : ZJ.eventDomain,
                    attributes: RJ(nJ) ? void 0 : nJ,
                    timestamp: DJ ? Gc(DJ) : nc(),
                    trace: hJ ? {
                      trace_id: hJ.traceId,
                      span_id: hJ.spanId
                    } : eJ.getTraceContext()
                  }),
                  fJ = {
                    name: GJ.name,
                    attributes: GJ.attributes,
                    domain: GJ.domain
                  };
                if (!YJ && ZJ.dedupe && !QJ(AJ) && rc(fJ, AJ)) return void cJ.debug("Skipping event push because it is the same as the last one\n", GJ);
                const xJ = AJ,
                  rJ = ke(FJ);
                if (AJ !== xJ && !YJ && ZJ.dedupe && rc(fJ, AJ)) return;
                AJ = fJ;
                const vJ = {
                  meta: rJ,
                  payload: GJ,
                  type: "event"
                };
                cJ.debug("Pushing event\n", vJ), EU(XJ.getActiveUserAction(), vJ) || UJ.execute(vJ)
              } catch (nJ) {
                cJ.error("Error pushing event", nJ)
              }
            }
          }
        }(qJ);
      return eJ = jJ.pushEvent, oc(oc(oc(oc(oc(oc(oc({}, AJ), Le(qJ)), function(JJ) {
        let cJ, ZJ, FJ, UJ, {
          internalLogger: eJ,
          metas: XJ
        } = JJ;
        eJ.debug("Initializing meta API");
        const AJ = JJ => {
            ZJ && XJ.remove(ZJ), ZJ = {
              user: JJ
            }, XJ.add(ZJ)
          },
          qJ = (JJ, ZJ) => {
            var FJ;
            const UJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.overrides,
              eJ = UJ ? {
                overrides: oc(oc({}, null === cJ || void 0 === cJ || null === (FJ = cJ.session) || void 0 === FJ ? void 0 : FJ.overrides), UJ)
              } : {};
            cJ && XJ.remove(cJ), cJ = {
              session: oc(oc({}, RJ(JJ) ? void 0 : JJ), eJ)
            }, XJ.add(cJ)
          },
          jJ = (JJ, cJ) => {
            Nc(XJ).notifySessionUpdate({
              type: "replace",
              session: JJ,
              overrides: null === cJ || void 0 === cJ ? void 0 : cJ.overrides
            }), qJ(JJ, cJ)
          },
          YJ = () => XJ.value.session,
          hJ = () => XJ.value.page;
        return {
          setUser: AJ,
          resetUser: AJ,
          setSession: jJ,
          resetSession: jJ,
          getSession: YJ,
          setView: (JJ, cJ) => {
            var ZJ;
            if ((null === cJ || void 0 === cJ ? void 0 : cJ.overrides) && (Nc(XJ).notifySessionUpdate({
                type: "overrides",
                overrides: cJ.overrides
              }), qJ(YJ(), {
                overrides: cJ.overrides
              })), (null === FJ || void 0 === FJ || null === (ZJ = FJ.view) || void 0 === ZJ ? void 0 : ZJ.name) === (null === JJ || void 0 === JJ ? void 0 : JJ.name)) return;
            const UJ = FJ;
            FJ = {
              view: JJ
            }, XJ.add(FJ), UJ && XJ.remove(UJ)
          },
          getView: () => XJ.value.view,
          setPage: JJ => {
            var cJ;
            const ZJ = EJ(JJ) ? oc(oc({}, null !== (cJ = null === UJ || void 0 === UJ ? void 0 : UJ.page) && void 0 !== cJ ? cJ : hJ()), {}, {
              id: JJ
            }) : JJ;
            UJ && XJ.remove(UJ), UJ = {
              page: ZJ
            }, XJ.add(UJ)
          },
          getPage: hJ
        }
      }(qJ)), function(JJ) {
        let {
          internalLogger: cJ,
          config: ZJ,
          metas: FJ,
          transports: UJ,
          tracesApi: eJ,
          userActionsApi: XJ
        } = JJ;
        var AJ;
        cJ.debug("Initializing logs API");
        let qJ = null;
        const jJ = null !== (AJ = ZJ.logArgsSerializer) && void 0 !== AJ ? AJ : wZ;
        return {
          pushLog: function(JJ) {
            let {
              context: AJ,
              level: YJ,
              skipDedupe: hJ,
              spanContext: DJ,
              timestampOverwriteMs: sJ
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Nc(FJ).shouldCapture()) return;
              const nJ = kc(AJ),
                GJ = {
                  message: jJ(JJ),
                  level: null !== YJ && void 0 !== YJ ? YJ : "log",
                  context: RJ(nJ) ? void 0 : nJ,
                  timestamp: sJ ? Gc(sJ) : nc(),
                  trace: DJ ? {
                    trace_id: DJ.traceId,
                    span_id: DJ.spanId
                  } : eJ.getTraceContext()
                },
                fJ = {
                  message: GJ.message,
                  level: GJ.level,
                  context: GJ.context
                };
              if (!hJ && ZJ.dedupe && !QJ(qJ) && rc(fJ, qJ)) return void cJ.debug("Skipping log push because it is the same as the last one\n", GJ);
              const xJ = qJ,
                rJ = ke(FJ);
              if (qJ !== xJ && !hJ && ZJ.dedupe && rc(fJ, qJ)) return;
              qJ = fJ;
              const vJ = {
                type: "log",
                payload: GJ,
                meta: rJ
              };
              cJ.debug("Pushing log\n", vJ), EU(XJ.getActiveUserAction(), vJ) || UJ.execute(vJ)
            } catch (nJ) {
              cJ.error("Error pushing log\n", nJ)
            }
          }
        }
      }(qJ)), function(JJ) {
        let {
          internalLogger: cJ,
          config: ZJ,
          metas: FJ,
          transports: UJ,
          tracesApi: eJ,
          userActionsApi: XJ
        } = JJ;
        cJ.debug("Initializing measurements API");
        let AJ = null;
        return {
          pushMeasurement: function(JJ) {
            let {
              skipDedupe: qJ,
              context: jJ,
              spanContext: YJ,
              timestampOverwriteMs: hJ
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Nc(FJ).shouldCapture()) return;
              const DJ = kc(jJ),
                sJ = oc(oc({}, JJ), {}, {
                  trace: YJ ? {
                    trace_id: YJ.traceId,
                    span_id: YJ.spanId
                  } : eJ.getTraceContext(),
                  timestamp: hJ ? Gc(hJ) : nc(),
                  context: RJ(DJ) ? void 0 : DJ
                }),
                nJ = {
                  type: sJ.type,
                  values: sJ.values,
                  context: sJ.context
                };
              if (!qJ && ZJ.dedupe && !QJ(AJ) && rc(nJ, AJ)) return void cJ.debug("Skipping measurement push because it is the same as the last one\n", sJ);
              const GJ = AJ,
                fJ = ke(FJ);
              if (AJ !== GJ && !qJ && ZJ.dedupe && rc(nJ, AJ)) return;
              AJ = nJ;
              const xJ = {
                type: "measurement",
                payload: sJ,
                meta: fJ
              };
              cJ.debug("Pushing measurement\n", xJ), EU(XJ.getActiveUserAction(), xJ) || UJ.execute(xJ)
            } catch (DJ) {
              cJ.error("Error pushing measurement\n", DJ)
            }
          }
        }
      }(qJ)), jJ), XJ)
    }

    function Be(JJ) {
      const cJ = Ce(JJ),
        ZJ = Re(cJ, JJ);
      if (nJ() && !JJ.isolate) return void ZJ.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      ZJ.debug("Initializing");
      const FJ = function(JJ, cJ) {
          let ZJ, FJ = [],
            UJ = [],
            eJ = [],
            XJ = 0,
            AJ = 0;
          const qJ = () => FJ.reduce(((JJ, cJ) => Object.assign(JJ, MJ(cJ) ? cJ() : cJ)), {}),
            jJ = () => {
              if (UJ.length) {
                const JJ = qJ();
                UJ.forEach((cJ => cJ(JJ)))
              }
            };
          return {
            add: function() {
              for (var JJ = arguments.length, ZJ = new Array(JJ), UJ = 0; UJ < JJ; UJ++) ZJ[UJ] = arguments[UJ];
              cJ.debug("Adding metas\n", ZJ), FJ.push(...ZJ), jJ()
            },
            remove: function() {
              for (var JJ = arguments.length, ZJ = new Array(JJ), UJ = 0; UJ < JJ; UJ++) ZJ[UJ] = arguments[UJ];
              cJ.debug("Removing metas\n", ZJ), FJ = FJ.filter((JJ => !ZJ.includes(JJ))), jJ()
            },
            addListener: JJ => {
              cJ.debug("Adding metas listener\n", JJ), UJ.push(JJ)
            },
            removeListener: JJ => {
              cJ.debug("Removing metas listener\n", JJ), UJ = UJ.filter((cJ => cJ !== JJ))
            },
            capture: JJ => {
              var cJ;
              const FJ = void 0 !== ZJ,
                UJ = null !== (cJ = ZJ) && void 0 !== cJ ? cJ : eJ;
              FJ || (ZJ = UJ, XJ = 0, AJ = UJ.length);
              try {
                for (; XJ < AJ;) {
                  const JJ = UJ[XJ++];
                  null === JJ || void 0 === JJ || JJ()
                }
                const cJ = Pe(qJ());
                return null === JJ || void 0 === JJ || JJ(), cJ
              } finally {
                FJ || (ZJ = void 0)
              }
            },
            addCaptureListener: JJ => {
              eJ.push(JJ)
            },
            removeCaptureListener: JJ => {
              eJ = eJ.filter((cJ => cJ !== JJ))
            },
            get value() {
              return qJ()
            }
          }
        }(0, ZJ),
        UJ = Ne(cJ, ZJ, JJ, FJ),
        eJ = ae(cJ, ZJ, JJ, FJ, UJ),
        XJ = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
          cJ.debug("Initializing instrumentations");
          const XJ = [];
          return {
            add: function() {
              cJ.debug("Adding instrumentations");
              for (var AJ = arguments.length, qJ = new Array(AJ), jJ = 0; jJ < AJ; jJ++) qJ[jJ] = arguments[jJ];
              qJ.forEach((AJ => {
                cJ.debug(`Adding "${AJ.name}" instrumentation`), XJ.some((JJ => JJ.name === AJ.name)) ? cJ.warn(`Instrumentation ${AJ.name} is already added`) : (AJ.unpatchedConsole = JJ, AJ.internalLogger = cJ, AJ.config = ZJ, AJ.metas = FJ, AJ.transports = UJ, AJ.api = eJ, XJ.push(AJ), AJ.initialize())
              }))
            },
            get instrumentations() {
              return [...XJ]
            },
            remove: function() {
              cJ.debug("Removing instrumentations");
              for (var JJ = arguments.length, ZJ = new Array(JJ), FJ = 0; FJ < JJ; FJ++) ZJ[FJ] = arguments[FJ];
              ZJ.forEach((JJ => {
                var ZJ, FJ;
                cJ.debug(`Removing "${JJ.name}" instrumentation`);
                const UJ = XJ.reduce(((cJ, ZJ, FJ) => null === cJ && ZJ.name === JJ.name ? FJ : null), null);
                null !== UJ ? (null === (ZJ = (FJ = XJ[UJ]).destroy) || void 0 === ZJ || ZJ.call(FJ), XJ.splice(UJ, 1)) : cJ.warn(`Instrumentation "${JJ.name}" is not added`)
              }))
            }
          }
        }(cJ, ZJ, JJ, FJ, UJ, eJ),
        AJ = fJ(cJ, ZJ, JJ, FJ, UJ, eJ, XJ);
      return de(AJ),
        function(JJ) {
          JJ.transports.add(...JJ.config.transports), JJ.transports.addBeforeSendHooks(JJ.config.beforeSend)
        }(AJ),
        function(JJ) {
          JJ.instrumentations.add(...JJ.config.instrumentations)
        }(AJ), AJ
    }

    function te(JJ) {
      const cJ = be(JJ);
      if (cJ) return Be(cJ)
    }
  },
  7391: function(JJ, cJ, ZJ) {
    var FJ;
    ! function(UJ, eJ) {
      var XJ = "function",
        AJ = "undefined",
        qJ = "object",
        jJ = "string",
        YJ = "major",
        hJ = "model",
        DJ = "name",
        sJ = "type",
        nJ = "vendor",
        GJ = "version",
        fJ = "architecture",
        xJ = "console",
        rJ = "mobile",
        vJ = "tablet",
        mJ = "smarttv",
        QJ = "wearable",
        EJ = "embedded",
        VJ = "Amazon",
        KJ = "Apple",
        yJ = "ASUS",
        SJ = "BlackBerry",
        IJ = "Browser",
        MJ = "Chrome",
        bJ = "Firefox",
        wJ = "Google",
        WJ = "Honor",
        gJ = "Huawei",
        HJ = "LG",
        PJ = "Microsoft",
        kJ = "Motorola",
        pJ = "Nvidia",
        dJ = "OnePlus",
        zJ = "Opera",
        NJ = "OPPO",
        OJ = "Samsung",
        TJ = "Sharp",
        CJ = "Sony",
        uJ = "Xiaomi",
        iJ = "Zebra",
        RJ = "Facebook",
        LJ = "Chromium OS",
        aJ = "Mac OS",
        BJ = " Browser",
        tJ = function(JJ) {
          for (var cJ = {}, ZJ = 0; ZJ < JJ.length; ZJ++) cJ[JJ[ZJ].toUpperCase()] = JJ[ZJ];
          return cJ
        },
        oJ = function(JJ, cJ) {
          return typeof JJ === jJ && -1 !== lJ(cJ).indexOf(lJ(JJ))
        },
        lJ = function(JJ) {
          return JJ.toLowerCase()
        },
        Jc = function(JJ, cJ) {
          if (typeof JJ === jJ) return JJ = JJ.replace(/^\s\s*/, ""), typeof cJ === AJ ? JJ : JJ.substring(0, 500)
        },
        cc = function(JJ, cJ) {
          for (var ZJ, FJ, UJ, AJ, jJ, YJ, hJ = 0; hJ < cJ.length && !jJ;) {
            var DJ = cJ[hJ],
              sJ = cJ[hJ + 1];
            for (ZJ = FJ = 0; ZJ < DJ.length && !jJ && DJ[ZJ];)
              if (jJ = DJ[ZJ++].exec(JJ))
                for (UJ = 0; UJ < sJ.length; UJ++) YJ = jJ[++FJ], typeof(AJ = sJ[UJ]) === qJ && AJ.length > 0 ? 2 === AJ.length ? typeof AJ[1] == XJ ? this[AJ[0]] = AJ[1].call(this, YJ) : this[AJ[0]] = AJ[1] : 3 === AJ.length ? typeof AJ[1] !== XJ || AJ[1].exec && AJ[1].test ? this[AJ[0]] = YJ ? YJ.replace(AJ[1], AJ[2]) : eJ : this[AJ[0]] = YJ ? AJ[1].call(this, YJ, AJ[2]) : eJ : 4 === AJ.length && (this[AJ[0]] = YJ ? AJ[3].call(this, YJ.replace(AJ[1], AJ[2])) : eJ) : this[AJ] = YJ || eJ;
            hJ += 2
          }
        },
        Zc = function(JJ, cJ) {
          for (var ZJ in cJ)
            if (typeof cJ[ZJ] === qJ && cJ[ZJ].length > 0) {
              for (var FJ = 0; FJ < cJ[ZJ].length; FJ++)
                if (oJ(cJ[ZJ][FJ], JJ)) return "?" === ZJ ? eJ : ZJ
            } else if (oJ(cJ[ZJ], JJ)) return "?" === ZJ ? eJ : ZJ;
          return cJ.hasOwnProperty("*") ? cJ["*"] : JJ
        },
        Fc = {
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
        Uc = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [GJ, [DJ, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [GJ, [DJ, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [DJ, GJ],
            [/opios[\/ ]+([\w\.]+)/i],
            [GJ, [DJ, zJ + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [GJ, [DJ, zJ + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [GJ, [DJ, zJ]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [GJ, [DJ, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [GJ, [DJ, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [DJ, GJ],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [GJ, [DJ, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [GJ, [DJ, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [GJ, [DJ, "UC" + IJ]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [GJ, [DJ, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [GJ, [DJ, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [GJ, [DJ, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [GJ, [DJ, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [GJ, [DJ, "Smart Lenovo " + IJ]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [DJ, /(.+)/, "$1 Secure " + IJ], GJ
            ],
            [/\bfocus\/([\w\.]+)/i],
            [GJ, [DJ, bJ + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [GJ, [DJ, zJ + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [GJ, [DJ, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [GJ, [DJ, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [GJ, [DJ, zJ + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [GJ, [DJ, "MIUI" + BJ]],
            [/fxios\/([\w\.-]+)/i],
            [GJ, [DJ, bJ]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [GJ, [DJ, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [DJ, /(.+)/, "$1Browser"], GJ
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [DJ, /(.+)/, "$1" + BJ], GJ
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [GJ, [DJ, OJ + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [GJ, [DJ, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [DJ, "Sogou Mobile"], GJ
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [DJ, GJ],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [DJ],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [GJ, DJ],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [DJ, RJ], GJ
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [DJ, GJ],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [GJ, [DJ, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [GJ, [DJ, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [GJ, [DJ, MJ + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [DJ, MJ + " WebView"], GJ
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [GJ, [DJ, "Android " + IJ]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [DJ, GJ],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [GJ, [DJ, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [GJ, DJ],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [DJ, [GJ, Zc, {
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
            [DJ, GJ],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [DJ, "Netscape"], GJ
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [DJ, GJ],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [GJ, [DJ, bJ + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [DJ, [GJ, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [DJ, [GJ, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [fJ, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [fJ, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [fJ, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [fJ, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [fJ, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [fJ, /ower/, "", lJ]
            ],
            [/ sun4\w[;\)]/i],
            [
              [fJ, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [fJ, lJ]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [hJ, [nJ, OJ],
              [sJ, vJ]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [hJ, [nJ, OJ],
              [sJ, rJ]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [hJ, [nJ, KJ],
              [sJ, rJ]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [hJ, [nJ, KJ],
              [sJ, vJ]
            ],
            [/(macintosh);/i],
            [hJ, [nJ, KJ]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [hJ, [nJ, TJ],
              [sJ, rJ]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [hJ, [nJ, WJ],
              [sJ, vJ]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [hJ, [nJ, WJ],
              [sJ, rJ]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [hJ, [nJ, gJ],
              [sJ, vJ]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [hJ, [nJ, gJ],
              [sJ, rJ]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [hJ, /_/g, " "],
              [nJ, uJ],
              [sJ, vJ]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [hJ, /_/g, " "],
              [nJ, uJ],
              [sJ, rJ]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [hJ, [nJ, NJ],
              [sJ, rJ]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [hJ, [nJ, Zc, {
                OnePlus: ["304", "403", "203"],
                "*": NJ
              }],
              [sJ, vJ]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [hJ, [nJ, "Vivo"],
              [sJ, rJ]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [hJ, [nJ, "Realme"],
              [sJ, rJ]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [hJ, [nJ, kJ],
              [sJ, rJ]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [hJ, [nJ, kJ],
              [sJ, vJ]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [hJ, [nJ, HJ],
              [sJ, vJ]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [hJ, [nJ, HJ],
              [sJ, rJ]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [hJ, [nJ, "Lenovo"],
              [sJ, vJ]
            ],
            [/(nokia) (t[12][01])/i],
            [nJ, hJ, [sJ, vJ]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [hJ, /_/g, " "],
              [sJ, rJ],
              [nJ, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [hJ, [nJ, wJ],
              [sJ, vJ]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [hJ, [nJ, wJ],
              [sJ, rJ]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [hJ, [nJ, CJ],
              [sJ, rJ]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [hJ, "Xperia Tablet"],
              [nJ, CJ],
              [sJ, vJ]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [hJ, [nJ, dJ],
              [sJ, rJ]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [hJ, [nJ, VJ],
              [sJ, vJ]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [hJ, /(.+)/g, "Fire Phone $1"],
              [nJ, VJ],
              [sJ, rJ]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [hJ, nJ, [sJ, vJ]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [hJ, [nJ, SJ],
              [sJ, rJ]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [hJ, [nJ, yJ],
              [sJ, vJ]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [hJ, [nJ, yJ],
              [sJ, rJ]
            ],
            [/(nexus 9)/i],
            [hJ, [nJ, "HTC"],
              [sJ, vJ]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [nJ, [hJ, /_/g, " "],
              [sJ, rJ]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [hJ, [nJ, "TCL"],
              [sJ, vJ]
            ],
            [/(itel) ((\w+))/i],
            [
              [nJ, lJ], hJ, [sJ, Zc, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [hJ, [nJ, "Acer"],
              [sJ, vJ]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [hJ, [nJ, "Meizu"],
              [sJ, rJ]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [hJ, [nJ, "Ulefone"],
              [sJ, rJ]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [hJ, [nJ, "Energizer"],
              [sJ, rJ]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [hJ, [nJ, "Cat"],
              [sJ, rJ]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [hJ, [nJ, "Smartfren"],
              [sJ, rJ]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [hJ, [nJ, "Nothing"],
              [sJ, rJ]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [hJ, [nJ, "Archos"],
              [sJ, vJ]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [hJ, [nJ, "Archos"],
              [sJ, rJ]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [nJ, hJ, [sJ, vJ]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [nJ, hJ, [sJ, rJ]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [nJ, hJ, [sJ, vJ]],
            [/(surface duo)/i],
            [hJ, [nJ, PJ],
              [sJ, vJ]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [hJ, [nJ, "Fairphone"],
              [sJ, rJ]
            ],
            [/(u304aa)/i],
            [hJ, [nJ, "AT&T"],
              [sJ, rJ]
            ],
            [/\bsie-(\w*)/i],
            [hJ, [nJ, "Siemens"],
              [sJ, rJ]
            ],
            [/\b(rct\w+) b/i],
            [hJ, [nJ, "RCA"],
              [sJ, vJ]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [hJ, [nJ, "Dell"],
              [sJ, vJ]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [hJ, [nJ, "Verizon"],
              [sJ, vJ]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [hJ, [nJ, "Barnes & Noble"],
              [sJ, vJ]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [hJ, [nJ, "NuVision"],
              [sJ, vJ]
            ],
            [/\b(k88) b/i],
            [hJ, [nJ, "ZTE"],
              [sJ, vJ]
            ],
            [/\b(nx\d{3}j) b/i],
            [hJ, [nJ, "ZTE"],
              [sJ, rJ]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [hJ, [nJ, "Swiss"],
              [sJ, rJ]
            ],
            [/\b(zur\d{3}) b/i],
            [hJ, [nJ, "Swiss"],
              [sJ, vJ]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [hJ, [nJ, "Zeki"],
              [sJ, vJ]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [nJ, "Dragon Touch"], hJ, [sJ, vJ]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [hJ, [nJ, "Insignia"],
              [sJ, vJ]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [hJ, [nJ, "NextBook"],
              [sJ, vJ]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [nJ, "Voice"], hJ, [sJ, rJ]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [nJ, "LvTel"], hJ, [sJ, rJ]
            ],
            [/\b(ph-1) /i],
            [hJ, [nJ, "Essential"],
              [sJ, rJ]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [hJ, [nJ, "Envizen"],
              [sJ, vJ]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [hJ, [nJ, "MachSpeed"],
              [sJ, vJ]
            ],
            [/\btu_(1491) b/i],
            [hJ, [nJ, "Rotor"],
              [sJ, vJ]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [hJ, [nJ, pJ],
              [sJ, vJ]
            ],
            [/(sprint) (\w+)/i],
            [nJ, hJ, [sJ, rJ]],
            [/(kin\.[onetw]{3})/i],
            [
              [hJ, /\./g, " "],
              [nJ, PJ],
              [sJ, rJ]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [hJ, [nJ, iJ],
              [sJ, vJ]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [hJ, [nJ, iJ],
              [sJ, rJ]
            ],
            [/smart-tv.+(samsung)/i],
            [nJ, [sJ, mJ]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [hJ, /^/, "SmartTV"],
              [nJ, OJ],
              [sJ, mJ]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [nJ, HJ],
              [sJ, mJ]
            ],
            [/(apple) ?tv/i],
            [nJ, [hJ, KJ + " TV"],
              [sJ, mJ]
            ],
            [/crkey/i],
            [
              [hJ, MJ + "cast"],
              [nJ, wJ],
              [sJ, mJ]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [hJ, [nJ, VJ],
              [sJ, mJ]
            ],
            [/(shield \w+ tv)/i],
            [hJ, [nJ, pJ],
              [sJ, mJ]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [hJ, [nJ, TJ],
              [sJ, mJ]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [hJ, [nJ, CJ],
              [sJ, mJ]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [hJ, [nJ, uJ],
              [sJ, mJ]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [nJ, hJ, [sJ, mJ]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [nJ, Jc],
              [hJ, Jc],
              [sJ, mJ]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [hJ, [sJ, mJ]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [sJ, mJ]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [nJ, hJ, [sJ, xJ]],
            [/droid.+; (shield)( bui|\))/i],
            [hJ, [nJ, pJ],
              [sJ, xJ]
            ],
            [/(playstation \w+)/i],
            [hJ, [nJ, CJ],
              [sJ, xJ]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [hJ, [nJ, PJ],
              [sJ, xJ]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [hJ, [nJ, OJ],
              [sJ, QJ]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [nJ, hJ, [sJ, QJ]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [hJ, [nJ, NJ],
              [sJ, QJ]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [hJ, [nJ, KJ],
              [sJ, QJ]
            ],
            [/(opwwe\d{3})/i],
            [hJ, [nJ, dJ],
              [sJ, QJ]
            ],
            [/(moto 360)/i],
            [hJ, [nJ, kJ],
              [sJ, QJ]
            ],
            [/(smartwatch 3)/i],
            [hJ, [nJ, CJ],
              [sJ, QJ]
            ],
            [/(g watch r)/i],
            [hJ, [nJ, HJ],
              [sJ, QJ]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [hJ, [nJ, iJ],
              [sJ, QJ]
            ],
            [/droid.+; (glass) \d/i],
            [hJ, [nJ, wJ],
              [sJ, QJ]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [nJ, hJ, [sJ, QJ]],
            [/; (quest( \d| pro)?)/i],
            [hJ, [nJ, RJ],
              [sJ, QJ]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [nJ, [sJ, EJ]],
            [/(aeobc)\b/i],
            [hJ, [nJ, VJ],
              [sJ, EJ]
            ],
            [/(homepod).+mac os/i],
            [hJ, [nJ, KJ],
              [sJ, EJ]
            ],
            [/windows iot/i],
            [
              [sJ, EJ]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [hJ, [sJ, rJ]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [hJ, [sJ, vJ]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [sJ, vJ]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [sJ, rJ]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [hJ, [nJ, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [GJ, [DJ, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [DJ, GJ],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [GJ, [DJ, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [DJ, GJ],
            [/ladybird\//i],
            [
              [DJ, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [GJ, DJ]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [DJ, GJ],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [DJ, [GJ, Zc, Fc]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [GJ, Zc, Fc],
              [DJ, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [GJ, /_/g, "."],
              [DJ, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [DJ, aJ],
              [GJ, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [GJ, DJ],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [DJ, /(.+)/, "$1 Touch"], GJ
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [DJ, GJ],
            [/\(bb(10);/i],
            [GJ, [DJ, SJ]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [GJ, [DJ, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [GJ, [DJ, bJ + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [GJ, [DJ, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [GJ, [DJ, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [GJ, [DJ, MJ + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [DJ, LJ], GJ
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [DJ, GJ],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [DJ, "Solaris"], GJ
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [DJ, GJ]
          ]
        },
        ec = function(JJ, cJ) {
          if (typeof JJ === qJ && (cJ = JJ, JJ = eJ), !(this instanceof ec)) return new ec(JJ, cJ).getResult();
          var ZJ = typeof UJ !== AJ && UJ.navigator ? UJ.navigator : eJ,
            FJ = JJ || (ZJ && ZJ.userAgent ? ZJ.userAgent : ""),
            xJ = ZJ && ZJ.userAgentData ? ZJ.userAgentData : eJ,
            mJ = cJ ? function(JJ, cJ) {
              var ZJ = {};
              for (var FJ in JJ) cJ[FJ] && cJ[FJ].length % 2 === 0 ? ZJ[FJ] = cJ[FJ].concat(JJ[FJ]) : ZJ[FJ] = JJ[FJ];
              return ZJ
            }(Uc, cJ) : Uc,
            QJ = ZJ && ZJ.userAgent == FJ;
          return this.getBrowser = function() {
            var JJ, cJ = {};
            return cJ[DJ] = eJ, cJ[GJ] = eJ, cc.call(cJ, FJ, mJ.browser), cJ[YJ] = typeof(JJ = cJ[GJ]) === jJ ? JJ.replace(/[^\d\.]/g, "").split(".")[0] : eJ, QJ && ZJ && ZJ.brave && typeof ZJ.brave.isBrave == XJ && (cJ[DJ] = "Brave"), cJ
          }, this.getCPU = function() {
            var JJ = {};
            return JJ[fJ] = eJ, cc.call(JJ, FJ, mJ.cpu), JJ
          }, this.getDevice = function() {
            var JJ = {};
            return JJ[nJ] = eJ, JJ[hJ] = eJ, JJ[sJ] = eJ, cc.call(JJ, FJ, mJ.device), QJ && !JJ[sJ] && xJ && xJ.mobile && (JJ[sJ] = rJ), QJ && "Macintosh" == JJ[hJ] && ZJ && typeof ZJ.standalone !== AJ && ZJ.maxTouchPoints && ZJ.maxTouchPoints > 2 && (JJ[hJ] = "iPad", JJ[sJ] = vJ), JJ
          }, this.gn = function() {
            var JJ = {};
            return JJ[DJ] = eJ, JJ[GJ] = eJ, cc.call(JJ, FJ, mJ.engine), JJ
          }, this.getOS = function() {
            var JJ = {};
            return JJ[DJ] = eJ, JJ[GJ] = eJ, cc.call(JJ, FJ, mJ.os), QJ && !JJ[DJ] && xJ && xJ.platform && "Unknown" != xJ.platform && (JJ[DJ] = xJ.platform.replace(/chrome os/i, LJ).replace(/macos/i, aJ)), JJ
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.gn(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return FJ
          }, this.setUA = function(JJ) {
            return FJ = typeof JJ === jJ && JJ.length > 500 ? Jc(JJ, 500) : JJ, this
          }, this.setUA(FJ), this
        };
      ec.VERSION = "1.0.41", ec.BROWSER = tJ([DJ, GJ, YJ]), ec.CPU = tJ([fJ]), ec.DEVICE = tJ([hJ, nJ, sJ, xJ, rJ, mJ, vJ, QJ, EJ]), ec.ENGINE = ec.OS = tJ([DJ, GJ]), typeof cJ !== AJ ? (JJ.exports && (cJ = JJ.exports = ec), cJ.UAParser = ec) : ZJ.amdO ? (FJ = function() {
        return ec
      }.call(cJ, ZJ, cJ, JJ)) === eJ || (JJ.exports = FJ) : typeof UJ !== AJ && (UJ.UAParser = ec);
      var Xc = typeof UJ !== AJ && (UJ.jQuery || UJ.Zepto);
      if (Xc && !Xc.ua) {
        var Ac = new ec;
        Xc.ua = Ac.getResult(), Xc.ua.get = function() {
          return Ac.getUA()
        }, Xc.ua.set = function(JJ) {
          Ac.setUA(JJ);
          var cJ = Ac.getResult();
          for (var ZJ in cJ) Xc.ua[ZJ] = cJ[ZJ]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);