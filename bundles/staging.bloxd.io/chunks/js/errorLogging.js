export const id = 38;
export const ids = [38];
export const modules = {
  7685: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BaseExtension: () => OO,
      BaseInstrumentation: () => mO,
      BaseTransport: () => WN,
      CSPInstrumentation: () => hE,
      ConsoleInstrumentation: () => eO,
      ConsoleTransport: () => NN,
      EVENT_CLICK: () => si,
      EVENT_NAVIGATION: () => Mi,
      EVENT_ROUTE_CHANGE: () => Ji,
      EVENT_SESSION_EXTEND: () => yi,
      EVENT_SESSION_RESUME: () => Yi,
      EVENT_SESSION_START: () => Si,
      EVENT_VIEW_CHANGED: () => Ki,
      ErrorsInstrumentation: () => gO,
      FetchTransport: () => YN,
      InternalLoggerLevel: () => Gi,
      LogLevel: () => KO,
      MAX_SESSION_PERSISTENCE_TIME: () => cW,
      NavigationInstrumentation: () => BE,
      Observable: () => MO,
      PerformanceInstrumentation: () => rm,
      PersistentSessionsManager: () => Vi,
      SESSION_EXPIRATION_TIME: () => NW,
      SESSION_INACTIVITY_TIME: () => PW,
      STORAGE_KEY: () => EW,
      SessionInstrumentation: () => NO,
      TransportItemType: () => iN,
      UserActionInstrumentation: () => JE,
      UserActionState: () => UE,
      VERSION: () => EO,
      ViewInstrumentation: () => VO,
      VolatileSessionsManager: () => fi,
      WebVitalsInstrumentation: () => gm,
      allLogLevels: () => YO,
      browserMeta: () => rE,
      buildStackFrame: () => PO,
      captureMetas: () => pN,
      createInternalLogger: () => HN,
      createPromiseBuffer: () => bN,
      createSession: () => FE,
      deepEqual: () => ki,
      defaultEventDomain: () => mW,
      defaultExceptionType: () => hO,
      defaultGlobalObjectKey: () => nN,
      defaultInternalLoggerLevel: () => ai,
      defaultLogLevel: () => SO,
      faro: () => bW,
      genShortID: () => Ui,
      getCurrentTimestamp: () => Ai,
      getDataFromSafariExtensions: () => AO,
      getIgnoreUrls: () => IW,
      getInternalFaroFromGlobalObject: () => xW,
      getStackFramesFromError: () => jO,
      getTransportBody: () => EN,
      getUrlFromResource: () => rW,
      getWebInstrumentations: () => qE,
      globalObject: () => tW,
      initializeFaro: () => WP,
      internalGlobalObjectKey: () => ZW,
      isArray: () => nW,
      isBoolean: () => TW,
      isDomError: () => pW,
      isDomException: () => fW,
      isElement: () => XW,
      isElementDefined: () => CW,
      sZ: () => GW,
      isError: () => DW,
      isErrorDefined: () => gW,
      isErrorEvent: () => VW,
      isEvent: () => vW,
      isEventDefined: () => eW,
      isFunction: () => HW,
      isInstanceOf: () => sW,
      isInt: () => yW,
      isInternalFaroOnGlobalObject: () => AW,
      isMap: () => qW,
      isMapDefined: () => BW,
      isNull: () => KW,
      isNumber: () => YW,
      isObject: () => hW,
      isPrimitive: () => dW,
      isRegExp: () => uW,
      isString: () => SW,
      isSymbol: () => JW,
      isSyntheticEvent: () => RW,
      isThenable: () => oW,
      isToString: () => kW,
      isTypeof: () => UW,
      isUndefined: () => MW,
      makeCoreConfig: () => dN,
      noop: () => Ri,
      osMeta: () => zE,
      parseStacktrace: () => UO,
      sdkMeta: () => QE,
      setInternalFaroOnGlobalObject: () => lW,
      transportItemTypeToBodyKey: () => ON,
      unknownString: () => DO,
      userActionDataAttribute: () => zm,
      userActionTimeoutDataAttribute: () => Fm
    });
    const mW = "browser",
      EW = "com.grafana.faro.session",
      NW = 144e5,
      PW = 9e5,
      LW = 1e3,
      cW = PW,
      wW = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: cW
      };
    const tW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof OW.g ? OW.g : "undefined" !== typeof self ? self : void 0;
    const ZW = "_faroInternal";

    function xW() {
      return tW[ZW]
    }

    function lW(WW) {
      WW.config.isolate ? WW.internalLogger.debug("Skipping registering internal Faro instance on global object") : (WW.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(tW, ZW, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: WW
      }))
    }

    function AW() {
      return ZW in tW
    }
    let bW = {
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

    function jW(WW, iW, OW, mW, EW, NW, PW) {
      return iW.debug("Initializing Faro"), bW = {
          api: NW,
          config: OW,
          instrumentations: PW,
          internalLogger: iW,
          metas: mW,
          pause: EW.pause,
          transports: EW,
          unpatchedConsole: WW,
          unpause: EW.unpause
        }, lW(bW),
        function(WW) {
          if (WW.config.preventGlobalExposure) WW.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (WW.internalLogger.debug(`Registering public faro reference in the global scope using "${WW.config.globalObjectKey}" key`), WW.config.globalObjectKey in tW) return void WW.internalLogger.warn(`Skipping global registration due to key "${WW.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(tW, WW.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: WW
            })
          }
        }(bW), bW
    }

    function UW(WW, iW) {
      return typeof WW === iW
    }

    function kW(WW, iW) {
      return Object.prototype.toString.call(WW) === `[object ${iW}]`
    }

    function sW(WW, iW) {
      try {
        return WW instanceof iW
      } catch (OW) {
        return !1
      }
    }
    const MW = WW => UW(WW, "undefined"),
      KW = WW => UW(WW, "null"),
      SW = WW => UW(WW, "string"),
      YW = WW => UW(WW, "number") && !isNaN(WW) || UW(WW, "bigint"),
      yW = WW => YW(WW) && Number.isInteger(WW),
      TW = WW => UW(WW, "boolean"),
      JW = WW => UW(WW, "symbol"),
      hW = WW => !KW(WW) && UW(WW, "object"),
      HW = WW => UW(WW, "function"),
      nW = WW => kW(WW, "Array"),
      uW = WW => kW(WW, "RegExp"),
      oW = WW => HW(null === WW || void 0 === WW ? void 0 : WW.then),
      dW = WW => !hW(WW) && !HW(WW),
      eW = "undefined" !== typeof Event,
      vW = WW => eW && sW(WW, Event),
      gW = "undefined" !== typeof Error,
      DW = WW => gW && sW(WW, Error),
      VW = WW => kW(WW, "ErrorEvent"),
      pW = WW => kW(WW, "DOMError"),
      fW = WW => kW(WW, "DOMException"),
      CW = "undefined" !== typeof Element,
      XW = WW => CW && sW(WW, Element),
      BW = "undefined" !== typeof Map,
      qW = WW => BW && sW(WW, Map),
      RW = WW => hW(WW) && "nativeEvent" in WW && "preventDefault" in WW && "stopPropagation" in WW;

    function GW(WW) {
      return null == WW || (nW(WW) || SW(WW) ? 0 === WW.length : !!hW(WW) && 0 === Object.keys(WW).length)
    }

    function IW() {
      return bW.transports.transports.flatMap((WW => WW.getIgnoreUrls()))
    }

    function aW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return IW().some((iW => WW && null != WW.match(iW)))
    }

    function rW(WW) {
      return SW(WW) ? WW : WW instanceof URL ? WW.href : !GW(WW) && HW(null === WW || void 0 === WW ? void 0 : WW.toString) ? WW.toString() : void 0
    }
    const zW = "sessionStorage",
      FW = "localStorage";

    function QW(WW) {
      try {
        let iW;
        iW = window[WW];
        const OW = "__faro_storage_test__";
        return iW.setItem(OW, OW), iW.removeItem(OW), !0
      } catch (OW) {
        var iW;
        return null === (iW = bW.internalLogger) || void 0 === iW || iW.info(`Web storage of type ${WW} is not available. Reason: ${OW}`), !1
      }
    }

    function Wi(WW, iW) {
      return Ni(iW) ? window[iW].getItem(WW) : null
    }

    function ii(WW, iW, OW) {
      if (Ni(OW)) try {
        window[OW].setItem(WW, iW)
      } catch (mW) {}
    }

    function Oi(WW, iW) {
      Ni(iW) && window[iW].removeItem(WW)
    }
    const mi = QW(FW),
      Ei = QW(zW);

    function Ni(WW) {
      return WW === FW ? mi : WW === zW && Ei
    }

    function Pi(WW) {
      return Pi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, Pi(WW)
    }

    function Li(WW) {
      var iW = function(WW, iW) {
        if ("object" != Pi(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != Pi(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == Pi(iW) ? iW : iW + ""
    }

    function ci(WW, iW, OW) {
      return (iW = Li(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function wi(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function ti(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? wi(Object(OW), !0).forEach((function(iW) {
          ci(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : wi(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function Zi() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bW;
      var iW, OW, mW;
      const EW = WW.config.sessionTracking,
        NW = null !== (iW = null !== (OW = null === EW || void 0 === EW || null === (mW = EW.sampler) || void 0 === mW ? void 0 : mW.call(EW, {
          metas: WW.metas.value
        })) && void 0 !== OW ? OW : null === EW || void 0 === EW ? void 0 : EW.samplingRate) && void 0 !== iW ? iW : 1,
        PW = "number" === typeof NW ? function(WW) {
          return Math.min(1, Math.max(0, WW))
        }(NW) : 0;
      if (!(PW > 0)) return !1;
      if (1 === PW) return !0;
      try {
        const WW = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === WW || void 0 === WW ? void 0 : WW.getRandomValues)) {
          const iW = new Uint32Array(1);
          return WW.getRandomValues(iW), iW[0] / Math.pow(2, 32) < PW
        }
      } catch (LW) {}
      return Math.random() < PW
    }

    function xi() {
      return Date.now()
    }

    function li() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Ai() {
      return (new Date).toISOString()
    }

    function bi(WW) {
      return new Date(WW).toISOString()
    }
    const ji = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Ui() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const iW = new Uint32Array(WW),
        OW = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === OW || void 0 === OW ? void 0 : OW.getRandomValues) OW.getRandomValues(iW);
      else
        for (let EW = 0; EW < WW; EW++) iW[EW] = Math.floor(4294967296 * Math.random());
      let mW = "";
      for (let EW = 0; EW < WW; EW++) mW += ji[iW[EW] % 59];
      return mW
    }

    function ki(WW, iW) {
      if (WW === iW) return !0;
      if (UW(WW, "number") && isNaN(WW)) return UW(iW, "number") && isNaN(iW);
      const OW = nW(WW),
        mW = nW(iW);
      if (OW !== mW) return !1;
      if (OW && mW) {
        const OW = WW.length;
        if (OW !== iW.length) return !1;
        for (let mW = OW; 0 !== mW--;)
          if (!ki(WW[mW], iW[mW])) return !1;
        return !0
      }
      const EW = hW(WW),
        NW = hW(iW);
      if (EW !== NW) return !1;
      if (WW && iW && EW && NW) {
        const OW = Object.keys(WW),
          mW = Object.keys(iW);
        if (OW.length !== mW.length) return !1;
        for (let WW of OW)
          if (!mW.includes(WW)) return !1;
        for (let EW of OW)
          if (!ki(WW[EW], iW[EW])) return !1;
        return !0
      }
      return !1
    }
    const si = "click",
      Mi = "navigation",
      Ki = "view_changed",
      Si = "session_start",
      Yi = "session_resume",
      yi = "session_extend",
      Ti = "service_name_override",
      Ji = "route_change";

    function Hi() {
      let {
        sessionId: WW,
        started: iW,
        lastActivity: OW,
        isSampled: mW = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, EW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW;
      var NW;
      const PW = xi(),
        LW = null === (NW = EW.config) || void 0 === NW || null === (NW = NW.sessionTracking) || void 0 === NW ? void 0 : NW.generateSessionId;
      return null == WW && (WW = "function" === typeof LW ? LW() : Ui()), {
        sessionId: WW,
        lastActivity: null !== OW && void 0 !== OW ? OW : PW,
        started: null !== iW && void 0 !== iW ? iW : PW,
        isSampled: mW
      }
    }

    function ni(WW) {
      if (null == WW) return !1;
      const iW = xi();
      return iW - WW.started < 144e5 && iW - WW.lastActivity < PW
    }

    function ui(WW) {
      let {
        fetchUserSession: iW,
        storeUserSession: OW,
        adoptSession: mW,
        updateInterval: EW = 0
      } = WW, LW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW, cW = 0;
      return function() {
        let {
          forceSessionExtend: WW = !1,
          refreshActivity: wW = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var tW, ZW;
        if (!iW || !OW) return;
        const xW = xi();
        if (!WW && xW < cW && cW - xW <= EW) return;
        const lW = LW.config.sessionTracking,
          AW = null === lW || void 0 === lW ? void 0 : lW.persistent;
        if (AW && !mi || !AW && !Ei) return;
        const bW = iW();
        if (cW = Math.min(xW + EW, (null !== (tW = null === bW || void 0 === bW ? void 0 : bW.started) && void 0 !== tW ? tW : xW) + NW, (null !== (ZW = null === bW || void 0 === bW ? void 0 : bW.lastActivity) && void 0 !== ZW ? ZW : xW) + PW), !1 === WW && ni(bW)) {
          var jW;
          wW && OW(ti(ti({}, bW), {}, {
            lastActivity: xW
          }));
          const WW = null === (jW = LW.metas.value.session) || void 0 === jW ? void 0 : jW.id;
          null != mW && null != bW.sessionMeta && bW.sessionId !== WW && mW(bW.sessionMeta)
        } else {
          var UW, kW, sW;
          let WW = di(Hi({
            isSampled: Zi(LW)
          }, LW), bW, LW);
          cW = xW + EW, OW(WW), null === (UW = LW.api) || void 0 === UW || UW.setSession(WW.sessionMeta), null === lW || void 0 === lW || null === (kW = lW.onSessionChange) || void 0 === kW || kW.call(lW, null !== (sW = null === bW || void 0 === bW ? void 0 : bW.sessionMeta) && void 0 !== sW ? sW : null, WW.sessionMeta)
        }
      }
    }

    function oi(WW) {
      let iW, {
          fetchUserSession: OW,
          storeUserSession: mW,
          updateInterval: EW = 0
        } = WW,
        NW = 0;
      return WW => {
        const PW = xi();
        if (WW === iW && PW < NW && NW - PW <= EW) return;
        iW = WW, NW = PW + EW;
        const LW = OW();
        (null === LW || void 0 === LW ? void 0 : LW.sessionId) === WW && ni(LW) && mW(ti(ti({}, LW), {}, {
          lastActivity: PW
        }))
      }
    }

    function di(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bW;
      var mW, EW, NW, PW, LW, cW;
      const wW = ti(ti({}, WW), {}, {
          sessionMeta: {
            id: WW.sessionId,
            attributes: vi(ti(ti(ti({}, null === (mW = OW.config.sessionTracking) || void 0 === mW || null === (mW = mW.session) || void 0 === mW ? void 0 : mW.attributes), null !== (EW = null === (NW = OW.metas.value.session) || void 0 === NW ? void 0 : NW.attributes) && void 0 !== EW ? EW : {}), {}, {
              isSampled: WW.isSampled.toString()
            }))
          }
        }),
        tW = null !== (PW = null === (LW = OW.metas.value.session) || void 0 === LW ? void 0 : LW.overrides) && void 0 !== PW ? PW : null === iW || void 0 === iW || null === (cW = iW.sessionMeta) || void 0 === cW ? void 0 : cW.overrides;
      GW(tW) || (wW.sessionMeta.overrides = tW);
      const ZW = null === iW || void 0 === iW ? void 0 : iW.sessionId;
      return null != ZW && (wW.sessionMeta.attributes.previousSession = ZW), wW
    }

    function ei(WW) {
      let {
        fetchUserSession: iW,
        storeUserSession: OW
      } = WW, mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW, EW = !1;
      return function(WW) {
        if (EW) return;
        const NW = WW.session,
          PW = iW();
        let LW = null === NW || void 0 === NW ? void 0 : NW.id;
        const cW = null === NW || void 0 === NW ? void 0 : NW.attributes,
          wW = null === NW || void 0 === NW ? void 0 : NW.overrides,
          tW = null === PW || void 0 === PW ? void 0 : PW.sessionMeta,
          ZW = null === tW || void 0 === tW ? void 0 : tW.overrides,
          xW = !!wW && !ki(wW, ZW),
          lW = !!cW && !ki(cW, null === tW || void 0 === tW ? void 0 : tW.attributes);
        if (NW && LW !== (null === PW || void 0 === PW ? void 0 : PW.sessionId) || lW || xW) {
          var AW, bW;
          const WW = null != PW && LW === PW.sessionId,
            iW = di(WW ? PW : Hi({
              sessionId: LW,
              isSampled: Zi(mW)
            }, mW), PW, mW),
            NW = null === PW || void 0 === PW || null === (AW = PW.sessionMeta) || void 0 === AW || null === (AW = AW.attributes) || void 0 === AW ? void 0 : AW.previousSession;
          WW && null != NW && NW !== iW.sessionId && (iW.sessionMeta.attributes.previousSession = NW), (null === (bW = iW.sessionMeta.attributes) || void 0 === bW ? void 0 : bW.previousSession) === iW.sessionId && delete iW.sessionMeta.attributes.previousSession, OW(iW),
            function(WW, iW) {
              let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var EW, NW, PW;
              if (!iW) return;
              const LW = OW.serviceName,
                cW = null !== (EW = null !== (NW = mW.serviceName) && void 0 !== NW ? NW : null === (PW = WW.metas.value.app) || void 0 === PW ? void 0 : PW.name) && void 0 !== EW ? EW : "";
              LW && LW !== cW && WW.api.pushEvent(Ti, {
                serviceName: LW,
                previousServiceName: cW
              })
            }(mW, xW, wW, ZW), EW = !0;
          try {
            mW.api.setSession(iW.sessionMeta)
          } finally {
            EW = !1
          }
        }
      }
    }

    function vi(WW) {
      const iW = {};
      for (const OW of Object.keys(WW)) {
        const mW = WW[OW];
        void 0 !== mW && (iW[OW] = mW)
      }
      return iW
    }

    function gi() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== WW && void 0 !== WW ? WW : {}, function() {
        const WW = new WeakSet;
        return function(iW, OW) {
          if (hW(OW) && null !== OW) {
            if (WW.has(OW)) return null;
            WW.add(OW)
          }
          return OW
        }
      }())
    }

    function Di() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const iW = {};
      for (const [OW, mW] of Object.entries(WW)) iW[OW] = hW(mW) && null !== mW ? gi(mW) : String(mW);
      return iW
    }
    var Vi = class WW {
      constructor() {
        var iW = this;
        let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bW;
        this.context = OW, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = WW => {
          this.adopting = !0;
          try {
            var iW;
            null === (iW = this.context.api) || void 0 === iW || iW.setSession(WW)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: WW = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return iW.updateUserSession({
            refreshActivity: WW
          })
        }, this.recordActivity = oi({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          updateInterval: LW
        }), this.updateUserSession = ui({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: LW
        }, OW), this.init()
      }
      static removeUserSession() {
        Oi(EW, WW.storageTypeLocal)
      }
      static storeUserSession(iW) {
        ii(EW, gi(iW), WW.storageTypeLocal)
      }
      static fetchUserSession() {
        const iW = Wi(EW, WW.storageTypeLocal);
        return iW ? JSON.parse(iW) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var WW;
            this.updateSession({
              refreshActivity: !1
            });
            const iW = null === (WW = this.context.api) || void 0 === WW || null === (WW = WW.getSession()) || void 0 === WW ? void 0 : WW.id;
            iW && this.recordActivity(iW)
          }
        })), this.context.metas.addListener(ei({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession
        }, this.context))
      }
    };
    Vi.storageTypeLocal = FW;
    var fi = class WW {
      constructor() {
        var iW = this;
        let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bW;
        this.context = OW, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: WW = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return iW.updateUserSession({
            refreshActivity: WW
          })
        }, this.recordActivity = oi({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          updateInterval: LW
        }), this.updateUserSession = ui({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          updateInterval: LW
        }, OW), this.init()
      }
      static removeUserSession() {
        Oi(EW, WW.storageTypeSession)
      }
      static storeUserSession(iW) {
        ii(EW, gi(iW), WW.storageTypeSession)
      }
      static fetchUserSession() {
        const iW = Wi(EW, WW.storageTypeSession);
        return iW ? JSON.parse(iW) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var WW;
            this.updateSession({
              refreshActivity: !1
            });
            const iW = null === (WW = this.context.api) || void 0 === WW || null === (WW = WW.getSession()) || void 0 === WW ? void 0 : WW.id;
            iW && this.recordActivity(iW)
          }
        })), this.context.metas.addListener(ei({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession
        }, this.context))
      }
    };
    fi.storageTypeSession = zW;
    const Ci = new WeakMap;

    function Xi(WW) {
      let iW = Ci.get(WW);
      if (!iW) {
        let OW = [],
          mW = [];
        iW = {
          addSessionUpdateListener: WW => {
            OW.push(WW)
          },
          removeSessionUpdateListener: WW => {
            OW = OW.filter((iW => iW !== WW))
          },
          notifySessionUpdate: WW => {
            OW.forEach((iW => iW(WW)))
          },
          shouldCapture: () => mW.every((WW => WW())),
          addCaptureFilter: WW => {
            mW.push(WW)
          },
          removeCaptureFilter: WW => {
            mW = mW.filter((iW => iW !== WW))
          }
        }, Ci.set(WW, iW)
      }
      return iW
    }
    var Bi = class {
      constructor(WW, iW, OW) {
        this.metas = WW, this.transports = iW, this.onActivate = OW, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = WW => {
          var iW, OW, mW;
          const EW = this.pending;
          var NW, PW;
          if ("overrides" === WW.type) return void(this.pending = {
            reset: null !== (NW = null === EW || void 0 === EW ? void 0 : EW.reset) && void 0 !== NW && NW,
            inheritOverrides: null === (PW = null === EW || void 0 === EW ? void 0 : EW.inheritOverrides) || void 0 === PW || PW,
            session: ti(ti({}, null === EW || void 0 === EW ? void 0 : EW.session), {}, {
              overrides: ti(ti({}, null === EW || void 0 === EW ? void 0 : EW.session.overrides), WW.overrides)
            })
          });
          const LW = WW.session,
            cW = GW(LW) || null != LW && "id" in LW && !LW.id,
            wW = null !== (iW = null === LW || void 0 === LW ? void 0 : LW.overrides) && void 0 !== iW ? iW : null === EW || void 0 === EW ? void 0 : EW.session.overrides;
          this.pending = {
            reset: cW || !(null === LW || void 0 === LW ? void 0 : LW.id) && null !== (OW = null === EW || void 0 === EW ? void 0 : EW.reset) && void 0 !== OW && OW,
            inheritOverrides: !(!WW.overrides && void 0 !== (null === LW || void 0 === LW ? void 0 : LW.overrides)) && (null === (mW = null === EW || void 0 === EW ? void 0 : EW.inheritOverrides) || void 0 === mW || mW),
            session: {
              id: null === LW || void 0 === LW ? void 0 : LW.id,
              attributes: (null === LW || void 0 === LW ? void 0 : LW.attributes) && ti({}, LW.attributes),
              overrides: WW.overrides ? ti(ti({}, null === EW || void 0 === EW ? void 0 : EW.session.overrides), WW.overrides) : wW && ti({}, wW)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var WW, iW;
        this.waiting = !0, Xi(this.metas).addSessionUpdateListener(this.recordUpdate), Xi(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (WW = (iW = this.metas).addCaptureListener) || void 0 === WW || WW.call(iW, this.activate), this.activate()
      }
      destroy() {
        var WW, iW;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Xi(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (WW = (iW = this.metas).removeCaptureListener) || void 0 === WW || WW.call(iW, this.activate), Xi(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function qi(WW) {
      return (null === WW || void 0 === WW ? void 0 : WW.persistent) ? Vi : fi
    }

    function Ri() {}
    let Gi = function(WW) {
      return WW[WW.OFF = 0] = "OFF", WW[WW.ERROR = 1] = "ERROR", WW[WW.WARN = 2] = "WARN", WW[WW.INFO = 3] = "INFO", WW[WW.VERBOSE = 4] = "VERBOSE", WW
    }({});
    const Ii = {
        debug: Ri,
        error: Ri,
        info: Ri,
        prefix: "Faro",
        warn: Ri
      },
      ai = 1;

    function ri(WW) {
      return ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, ri(WW)
    }

    function zi(WW) {
      var iW = function(WW, iW) {
        if ("object" != ri(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != ri(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == ri(iW) ? iW : iW + ""
    }

    function Fi(WW, iW, OW) {
      return (iW = zi(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function Qi(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function WO(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? Qi(Object(OW), !0).forEach((function(iW) {
          Fi(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : Qi(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }
    const iO = WO({}, console);
    var OO = class {
        constructor() {
          this.unpatchedConsole = iO, this.internalLogger = Ii, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          this.internalLogger.debug(`${this.name}\n`, ...iW)
        }
        logInfo() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          this.internalLogger.info(`${this.name}\n`, ...iW)
        }
        logWarn() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          this.internalLogger.warn(`${this.name}\n`, ...iW)
        }
        logError() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          this.internalLogger.error(`${this.name}\n`, ...iW)
        }
      },
      mO = class extends OO {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const EO = "2.12.1";
    var NO = class extends mO {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = EO, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(WW) {
        var iW;
        const OW = WW.session;
        if (OW && OW.id !== (null === (iW = this.notifiedSession) || void 0 === iW ? void 0 : iW.id)) {
          var mW;
          if (this.isAdoptingSession()) return void(this.notifiedSession = OW);
          if (this.notifiedSession && this.notifiedSession.id === (null === (mW = OW.attributes) || void 0 === mW ? void 0 : mW.previousSession)) return this.api.pushEvent(yi, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = OW);
          this.notifiedSession = OW, this.api.pushEvent(Si, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(WW, iW, OW) {
        const mW = null === OW || void 0 === OW ? void 0 : OW.session;
        let EW, NW, PW = WW.fetchUserSession();
        if (iW.persistent && iW.maxSessionPersistenceTime && PW) {
          const WW = xi();
          PW.lastActivity < WW - iW.maxSessionPersistenceTime && (Vi.removeUserSession(), PW = null)
        }
        const LW = ni(PW);
        if ((null === OW || void 0 === OW ? void 0 : OW.reset) || !LW || (null === mW || void 0 === mW ? void 0 : mW.id) && mW.id !== (null === PW || void 0 === PW ? void 0 : PW.sessionId)) {
          var cW, wW, tW, ZW, xW, lW;
          NW = Hi({
            sessionId: (null === OW || void 0 === OW ? void 0 : OW.reset) ? void 0 : null !== (cW = null === mW || void 0 === mW ? void 0 : mW.id) && void 0 !== cW ? cW : null === (wW = iW.session) || void 0 === wW ? void 0 : wW.id,
            isSampled: Zi(this)
          }, this);
          const WW = NW.sessionId,
            AW = OW && LW ? null === PW || void 0 === PW || null === (tW = PW.sessionMeta) || void 0 === tW ? void 0 : tW.overrides : void 0,
            bW = AW ? ti(ti({}, null === (ZW = iW.session) || void 0 === ZW ? void 0 : ZW.overrides), AW) : null === (xW = iW.session) || void 0 === xW ? void 0 : xW.overrides;
          NW.sessionMeta = ti({
            id: WW,
            attributes: ti({
              isSampled: NW.isSampled.toString()
            }, null === (lW = iW.session) || void 0 === lW ? void 0 : lW.attributes)
          }, bW ? {
            overrides: bW
          } : {}), EW = Si
        } else {
          var AW, bW;
          const WW = null === PW || void 0 === PW ? void 0 : PW.sessionId;
          NW = Hi({
            sessionId: WW,
            isSampled: PW.isSampled || !1,
            started: null === PW || void 0 === PW ? void 0 : PW.started
          }, this);
          const OW = null === PW || void 0 === PW ? void 0 : PW.sessionMeta,
            mW = ti(ti({}, null === (AW = iW.session) || void 0 === AW ? void 0 : AW.overrides), null === OW || void 0 === OW ? void 0 : OW.overrides);
          NW.sessionMeta = ti(ti({}, iW.session), {}, {
            id: WW,
            attributes: ti(ti(ti({}, null === (bW = iW.session) || void 0 === bW ? void 0 : bW.attributes), null === OW || void 0 === OW ? void 0 : OW.attributes), {}, {
              isSampled: NW.isSampled.toString()
            }),
            overrides: mW
          }), EW = Yi
        }
        var jW;
        if (mW && (NW.sessionMeta = ti(ti({}, NW.sessionMeta), {}, {
            attributes: ti(ti(ti({}, null === (jW = NW.sessionMeta) || void 0 === jW ? void 0 : jW.attributes), mW.attributes), {}, {
              isSampled: NW.isSampled.toString()
            })
          }), mW.overrides)) {
          const WW = (null === OW || void 0 === OW ? void 0 : OW.inheritOverrides) ? ti(ti({}, NW.sessionMeta.overrides), mW.overrides) : mW.overrides;
          Object.keys(WW).length > 0 ? NW.sessionMeta.overrides = WW : delete NW.sessionMeta.overrides
        }
        return {
          initialSession: NW,
          lifecycleType: EW
        }
      }
      registerBeforeSendHook(WW) {
        var iW;
        this.beforeSendHook = iW => {
          var OW, mW;
          const EW = null === (OW = iW.meta.session) || void 0 === OW ? void 0 : OW.id;
          EW && !this.transports.isPaused() && WW(EW);
          const NW = null === (mW = iW.meta.session) || void 0 === mW ? void 0 : mW.attributes;
          if (NW && "true" === (null === NW || void 0 === NW ? void 0 : NW.isSampled)) {
            var PW;
            let WW = JSON.parse(JSON.stringify(iW));
            const OW = null === (PW = WW.meta.session) || void 0 === PW ? void 0 : PW.attributes;
            var LW;
            if (null === OW || void 0 === OW || delete OW.isSampled, 0 === Object.keys(null !== OW && void 0 !== OW ? OW : {}).length) null === (LW = WW.meta.session) || void 0 === LW || delete LW.attributes;
            return WW
          }
          return null
        }, null === (iW = this.transports) || void 0 === iW || iW.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var WW;
        this.logDebug("init session instrumentation");
        const iW = document.prerendering;
        var OW;
        if ((null === (WW = this.config.sessionTracking) || void 0 === WW ? void 0 : WW.enabled) && (iW || this.prerenderSession)) return null !== (OW = this.prerenderSession) && void 0 !== OW || (this.prerenderSession = new Bi(this.metas, this.transports, (WW => {
          this.prerenderSession = void 0, this.initializeSession(WW)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(WW) {
        const iW = this.config.sessionTracking;
        if (null === iW || void 0 === iW ? void 0 : iW.enabled) {
          var OW, mW;
          const EW = qi(iW),
            NW = new EW(this);
          this.isAdoptingSession = NW.isAdopting, this.registerBeforeSendHook(NW.recordActivity);
          const {
            initialSession: PW,
            lifecycleType: LW
          } = this.createInitialSession(EW, iW, WW);
          EW.storeUserSession(PW);
          const cW = PW.sessionMeta;
          this.notifiedSession = cW, this.api.setSession(cW), this.captureListener = () => {
            this.transports.isPaused() || NW.updateSession({
              refreshActivity: !1
            })
          }, null === (OW = (mW = this.metas).addCaptureListener) || void 0 === OW || OW.call(mW, this.captureListener), LW === Si && this.api.pushEvent(Si, {}, void 0, {
            skipDedupe: !0
          }), LW === Yi && this.api.pushEvent(Yi, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var WW, iW, OW;
        (null === (WW = this.prerenderSession) || void 0 === WW || WW.destroy(), this.captureListener) && (null === (iW = (OW = this.metas).removeCaptureListener) || void 0 === iW || iW.call(OW, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function PO(WW, iW, OW, mW) {
      const EW = {
        filename: WW || document.location.href,
        function: iW || "?"
      };
      return void 0 !== OW && (EW.lineno = OW), void 0 !== mW && (EW.colno = mW), EW
    }
    const LO = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      cO = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      wO = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      tO = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      ZO = "safari-extension",
      xO = "safari-web-extension",
      lO = /Minified React error #\d+;/i;

    function AO(WW, iW) {
      const OW = null === WW || void 0 === WW ? void 0 : WW.includes(ZO),
        mW = !OW && (null === WW || void 0 === WW ? void 0 : WW.includes("safari-web-extension"));
      return OW || mW ? [(null === WW || void 0 === WW ? void 0 : WW.includes("@")) ? WW.split("@")[0] : WW, OW ? `${ZO}:${iW}` : `${xO}:${iW}`] : [WW, iW]
    }
    const bO = 1024;

    function jO(WW) {
      let iW = [];
      WW.stacktrace ? iW = WW.stacktrace.split("\n").filter(((WW, iW) => iW % 2 === 0)) : WW.stack && (iW = WW.stack.split("\n"));
      const OW = iW.reduce(((iW, OW, mW) => {
        if (OW.length > bO) return iW;
        let EW, NW, PW, LW, cW;
        if (EW = LO.exec(OW)) {
          if (NW = EW[1], PW = EW[2], LW = EW[3], cW = EW[4], null === PW || void 0 === PW ? void 0 : PW.startsWith("eval")) {
            const WW = cO.exec(PW);
            WW && (PW = WW[1], LW = WW[2], cW = WW[3])
          }
          PW = (null === PW || void 0 === PW ? void 0 : PW.startsWith("address at ")) ? PW.substring(11) : PW, [NW, PW] = AO(NW, PW)
        } else if (EW = wO.exec(OW)) {
          if (NW = EW[1], PW = EW[3], LW = EW[4], cW = EW[5], PW && PW.includes(" > eval")) {
            const WW = tO.exec(PW);
            WW && (NW = NW || "eval", PW = WW[1], LW = WW[2])
          } else 0 === mW && !cW && YW(WW.columnNumber) && (cW = String(WW.columnNumber + 1));
          [NW, PW] = AO(NW, PW)
        }
        return (PW || NW) && iW.push(PO(PW, NW, LW ? Number(LW) : void 0, cW ? Number(cW) : void 0)), iW
      }), []);
      return lO.test(WW.message) ? OW.slice(1) : OW
    }

    function UO(WW) {
      return {
        frames: jO(WW)
      }
    }
    const kO = "http-request-start",
      sO = "http-request-end";
    var MO = class WW {
      constructor() {
        this.subscribers = []
      }
      subscribe(WW) {
        return this.subscribers.push(WW), {
          unsubscribe: () => this.unsubscribe(WW)
        }
      }
      unsubscribe(WW) {
        this.subscribers = this.subscribers.filter((iW => iW !== WW))
      }
      notify(WW) {
        this.subscribers.forEach((iW => iW(WW)))
      }
      first() {
        const iW = new WW,
          OW = WW => {
            iW.notify(WW), mW.unsubscribe()
          },
          mW = this.subscribe(OW),
          EW = iW.unsubscribe.bind(iW);
        return this.withUnsubscribeOverride(iW, EW, OW)
      }
      takeWhile(iW) {
        const OW = new WW,
          mW = WW => {
            iW(WW) ? OW.notify(WW) : OW.unsubscribe(mW)
          };
        this.subscribe(mW);
        const EW = OW.unsubscribe.bind(OW);
        return this.withUnsubscribeOverride(OW, EW, mW)
      }
      filter(iW) {
        const OW = new WW,
          mW = WW => {
            iW(WW) && OW.notify(WW)
          };
        this.subscribe(mW);
        const EW = OW.unsubscribe.bind(OW);
        return this.withUnsubscribeOverride(OW, EW, mW)
      }
      merge() {
        const iW = new WW,
          OW = [];
        for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
        EW.forEach((WW => {
          const mW = WW.subscribe((WW => {
            iW.notify(WW)
          }));
          OW.push(mW)
        }));
        const PW = iW.unsubscribeAll.bind(iW);
        return iW.unsubscribe = () => {
          OW.forEach((WW => WW.unsubscribe())), PW()
        }, iW
      }
      withUnsubscribeOverride(WW, iW, OW) {
        return WW.unsubscribe = WW => {
          iW(WW), this.unsubscribe(OW)
        }, WW
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let KO = function(WW) {
      return WW.TRACE = "trace", WW.DEBUG = "debug", WW.INFO = "info", WW.LOG = "log", WW.WARN = "warn", WW.ERROR = "error", WW
    }({});
    const SO = "log",
      YO = ["trace", "debug", "info", "log", "warn", "error"];
    let yO, TO = !1;
    const JO = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      hO = "Error",
      HO = WW => WW.map((WW => hW(WW) ? gi(WW) : String(WW))).join(" ");

    function nO(WW) {
      let iW, OW, mW, EW, NW = [];
      if (VW(WW) && WW.error) iW = WW.error.message, OW = WW.error.name, NW = jO(WW.error);
      else if ((mW = pW(WW)) || fW(WW)) {
        const {
          name: EW,
          message: NW
        } = WW;
        OW = null !== EW && void 0 !== EW ? EW : mW ? "DOMError" : "DOMException", iW = NW ? `${OW}: ${NW}` : OW
      } else DW(WW) ? (OW = WW.name, iW = WW.message, NW = jO(WW)) : (hW(WW) || (EW = vW(WW))) && (OW = EW ? WW.constructor.name : void 0, iW = `Non-Error exception captured with keys: ${Object.keys(WW)}`);
      return [iW, OW, NW]
    }

    function uO(WW) {
      const [iW, OW, mW, EW, NW] = WW;
      let PW, LW, cW = [];
      const wW = SW(iW),
        tW = PO(OW, "?", mW, EW);
      return NW || !wW ? ([PW, LW, cW] = nO(null !== NW && void 0 !== NW ? NW : iW), 0 === cW.length && (cW = [tW])) : wW && ([PW, LW] = function(WW) {
        var iW, OW;
        const mW = WW.match(JO),
          EW = null !== (iW = null === mW || void 0 === mW ? void 0 : mW[1]) && void 0 !== iW ? iW : hO;
        return [null !== (OW = null === mW || void 0 === mW ? void 0 : mW[2]) && void 0 !== OW ? OW : WW, EW]
      }(iW), cW = [tW]), {
        value: PW,
        type: LW,
        stackFrames: cW
      }
    }

    function oO(WW, iW) {
      return DW(WW[0]) ? uO(WW) : {
        value: iW(WW)
      }
    }
    const dO = WW => WW.map((WW => {
      try {
        return String(WW)
      } catch (iW) {
        return ""
      }
    })).join(" ");
    var eO = class WW extends mO {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = EO, this.errorSerializer = dO
      }
      initialize() {
        var iW, OW;
        const mW = this.config.consoleInstrumentation,
          EW = (null === mW || void 0 === mW ? void 0 : mW.serializeErrors) || !!(null === mW || void 0 === mW ? void 0 : mW.errorSerializer);
        this.errorSerializer = EW ? null !== (iW = null === mW || void 0 === mW ? void 0 : mW.errorSerializer) && void 0 !== iW ? iW : HO : dO;
        const NW = null !== (OW = null === mW || void 0 === mW ? void 0 : mW.disabledLevels) && void 0 !== OW ? OW : WW.defaultDisabledLevels,
          PW = function(WW) {
            if (yO || (yO = new MO), !TO) {
              const iW = null !== WW && void 0 !== WW ? WW : iO;
              YO.forEach((WW => {
                console[WW] = function() {
                  for (var OW, mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
                  yO.notify({
                    type: "console",
                    level: WW,
                    args: EW
                  }), null === (OW = iW[WW]) || void 0 === OW || OW.apply(console, EW)
                }
              })), TO = !0
            }
            return yO
          }(this.unpatchedConsole);
        this.subscription = PW.subscribe((iW => {
          let {
            level: OW,
            args: EW
          } = iW;
          if (!NW.includes(OW)) try {
            if (OW !== KO.ERROR || (null === mW || void 0 === mW ? void 0 : mW.consoleErrorAsLog))
              if (OW === KO.ERROR && (null === mW || void 0 === mW ? void 0 : mW.consoleErrorAsLog)) {
                const {
                  value: iW,
                  type: mW,
                  stackFrames: NW
                } = oO(EW, this.errorSerializer);
                this.api.pushLog(iW ? [WW.consoleErrorPrefix + iW] : EW, {
                  level: OW,
                  context: {
                    value: null !== iW && void 0 !== iW ? iW : "",
                    type: null !== mW && void 0 !== mW ? mW : "",
                    stackFrames: (null === NW || void 0 === NW ? void 0 : NW.length) ? HO(NW) : ""
                  }
                })
              } else this.api.pushLog(EW, {
                level: OW
              });
            else {
              const {
                value: iW,
                type: OW,
                stackFrames: mW
              } = oO(EW, this.errorSerializer);
              if (iW && !OW && !mW) return void this.api.pushError(new Error(WW.consoleErrorPrefix + iW));
              this.api.pushError(new Error(WW.consoleErrorPrefix + iW), {
                type: OW,
                stackFrames: mW
              })
            }
          } catch (PW) {
            this.logError(PW)
          }
        }))
      }
      destroy() {
        var WW;
        null === (WW = this.subscription) || void 0 === WW || WW.unsubscribe(), this.subscription = void 0
      }
    };
    eO.defaultDisabledLevels = [KO.DEBUG, KO.TRACE, KO.LOG], eO.consoleErrorPrefix = "console.error: ";
    const vO = [];
    var gO = class extends mO {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = EO
      }
      initialize() {
        this.logDebug("Initializing"),
          function(WW) {
            const iW = window.onerror;
            window.onerror = function() {
              for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
              try {
                const {
                  value: iW,
                  type: OW,
                  stackFrames: EW
                } = uO(mW), NW = mW[4];
                if (iW) {
                  const mW = {
                    type: OW,
                    stackFrames: EW
                  };
                  null != NW && (mW.originalError = NW), WW.pushError(new Error(iW), mW)
                }
              } finally {
                null === iW || void 0 === iW || iW.apply(window, mW)
              }
            }
          }(this.api),
          function(WW) {
            const iW = iW => {
              var OW;
              let mW, EW, NW = iW;
              if (NW.reason) NW = iW.reason;
              else if (null === (OW = iW.detail) || void 0 === OW ? void 0 : OW.reason) {
                var PW;
                NW = null === (PW = iW.detail) || void 0 === PW ? void 0 : PW.reason
              }
              let LW = [];
              dW(NW) ? (mW = `Non-Error promise rejection captured with value: ${String(NW)}`, EW = "UnhandledRejection") : [mW, EW, LW] = nO(NW), mW && WW.pushError(new Error(mW), {
                type: EW,
                stackFrames: LW
              })
            };
            window.addEventListener("unhandledrejection", iW), vO.push(iW)
          }(this.api)
      }
    };
    const DO = "unknown";
    var VO = class extends mO {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = EO, this.waitingForActivation = !1, this.sendViewChangedEvent = WW => {
          var iW;
          if (this.waitingForActivation || document.prerendering) return;
          const OW = WW.view;
          if (OW && OW.name !== (null === (iW = this.notifiedView) || void 0 === iW ? void 0 : iW.name)) {
            var mW, EW, NW;
            const WW = null !== (mW = null === (EW = this.notifiedView) || void 0 === EW ? void 0 : EW.name) && void 0 !== mW ? mW : DO;
            this.notifiedView = OW, this.api.pushEvent(Ki, {
              fromView: WW,
              toView: null !== (NW = OW.name) && void 0 !== NW ? NW : DO
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
    class pO {
      t;
      o = 0;
      i = [];
      l(WW) {
        if (WW.hadRecentInput) return;
        const iW = this.i[0],
          OW = this.i.at(-1);
        this.o && iW && OW && WW.startTime - OW.startTime < 1e3 && WW.startTime - iW.startTime < 5e3 ? (this.o += WW.value, this.i.push(WW)) : (this.o = WW.value, this.i = [WW]), this.t?.(WW)
      }
    }
    const fO = () => {
        const WW = performance.getEntriesByType("navigation")[0];
        if (WW && WW.responseStart > 0 && WW.responseStart < performance.now()) return WW
      },
      CO = WW => {
        if ("loading" === document.readyState) return "loading";
        const iW = fO();
        if (iW) {
          if (WW < iW.domInteractive) return "loading";
          if (0 === iW.domContentLoadedEventStart || WW < iW.domContentLoadedEventStart) return "dom-interactive";
          if (0 === iW.domComplete || WW < iW.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      XO = WW => {
        const iW = WW.nodeName;
        return 1 === WW.nodeType ? iW.toLowerCase() : iW.toUpperCase().replace(/^#/, "")
      },
      BO = WW => {
        let iW = "";
        try {
          for (; 9 !== WW?.nodeType;) {
            const OW = WW,
              mW = OW.id ? "#" + OW.id : [XO(OW), ...Array.from(OW.classList ?? []).sort()].join(".");
            if (iW.length + mW.length > 99) return iW || mW;
            if (iW = iW ? mW + ">" + iW : mW, OW.id) break;
            WW = OW.parentNode
          }
        } catch {}
        return iW
      },
      qO = new WeakMap;

    function RO(WW, iW) {
      let OW = qO.get(iW);
      return OW || (OW = new WeakMap, qO.set(iW, OW)), OW.get(WW) || OW.set(WW, new iW), OW.get(WW)
    }
    let GO = -1;
    const IO = () => GO,
      aO = WW => {
        addEventListener("pageshow", (iW => {
          iW.persisted && (GO = iW.timeStamp, WW(iW))
        }), !0)
      },
      rO = (WW, iW, OW, mW) => {
        let EW, NW;
        return PW => {
          iW.value >= 0 && (PW || mW) && (NW = iW.value - (EW ?? 0), (NW || void 0 === EW) && (EW = iW.value, iW.delta = NW, iW.rating = ((WW, iW) => WW > iW[1] ? "poor" : WW > iW[0] ? "needs-improvement" : "good")(iW.value, OW), WW(iW)))
        }
      },
      zO = WW => {
        requestAnimationFrame((() => requestAnimationFrame((() => WW()))))
      },
      FO = () => fO()?.activationStart ?? 0;
    let QO = -1;
    const Wm = new Set,
      im = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Om = WW => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === WW.type)
            for (const WW of Wm) WW();
          isFinite(QO) || (QO = "visibilitychange" === WW.type ? WW.timeStamp : 0, removeEventListener("prerenderingchange", Om, !0))
        }
      },
      mm = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (QO = 1 / 0), QO < 0) {
          const WW = FO(),
            iW = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((iW => "hidden" === iW.name && iW.startTime >= WW))?.startTime;
          QO = iW ?? im(), addEventListener("visibilitychange", Om, !0), addEventListener("prerenderingchange", Om, !0), aO((() => {
            setTimeout((() => {
              QO = im()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return QO
          },
          onHidden(WW) {
            Wm.add(WW)
          }
        }
      },
      Em = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0,
          PW = arguments.length > 6 ? arguments[6] : void 0;
        const LW = fO(),
          cW = LW?.navigationId || 0;
        let wW = "navigate";
        return OW ? wW = OW : IO() >= 0 ? wW = "back-forward-cache" : LW && (document.prerendering || FO() > 0 ? wW = "prerender" : document.wasDiscarded ? wW = "restore" : LW.type && (wW = LW.type.replace(/_/g, "-"))), {
          name: WW,
          value: iW,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: wW,
          navigationId: mW || cW,
          navigationInteractionId: EW,
          navigationURL: NW || LW?.name,
          navigationStartTime: PW || 0
        }
      },
      Nm = function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const mW = WW.filter((WW => PerformanceObserver.supportedEntryTypes.includes(WW)));
          if (mW.length > 0) {
            const WW = new PerformanceObserver((WW => {
              queueMicrotask((() => {
                const OW = WW.getEntries();
                mW.length > 1 && OW.sort(((WW, iW) => WW.startTime + WW.duration - (iW.startTime + iW.duration))), iW(OW)
              }))
            }));
            for (const iW of mW) WW.observe({
              type: iW,
              buffered: !0,
              ...OW
            });
            return WW
          }
        } catch {}
      },
      Pm = WW => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && WW && WW.reportSoftNavs,
      Lm = (WW, iW) => {
        if (WW.set(iW.navigationId, iW), WW.size > 2) {
          const iW = WW.keys().next().value;
          void 0 !== iW && WW.delete(iW)
        }
      },
      cm = WW => {
        let iW = !1;
        return () => {
          iW || (WW(), iW = !0)
        }
      };
    class wm {
      u
    }
    const tm = WW => {
        document.prerendering ? addEventListener("prerenderingchange", WW, !0) : WW()
      },
      Zm = [1800, 3e3],
      xm = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = Pm(iW);
        tm((() => {
          const mW = RO(iW, wm),
            EW = mm();
          let NW, PW = Em("FCP");
          const LW = Nm(["paint"], (WW => {
            for (const iW of WW) "first-contentful-paint" === iW.name && (LW.disconnect(), iW.startTime < EW.firstHiddenTime && (PW.value = Math.max(iW.startTime - FO(), 0), PW.entries.push(iW), PW.navigationId = iW.navigationId || PW.navigationId, NW(!0)))
          }));
          LW && (NW = rO(WW, PW, Zm, iW.reportAllChanges), aO((OW => {
            PW = Em("FCP", -1, "back-forward-cache", PW.navigationId, PW.navigationInteractionId, PW.navigationURL, IO()), NW = rO(WW, PW, Zm, iW.reportAllChanges), zO((() => {
              PW.value = performance.now() - OW.timeStamp, NW(!0)
            }))
          }))), OW && Nm(["soft-navigation"], (OW => {
            OW.forEach((OW => {
              mW.u && OW.navigationId && Lm(mW.u, OW);
              const EW = Math.max((OW.presentationTime || OW.paintTime || 0) - OW.startTime, 0);
              PW = Em("FCP", EW, "soft-navigation", OW.navigationId, OW.interactionId, OW.name, OW.startTime), NW = rO(WW, PW, Zm, iW.reportAllChanges), NW(!0)
            }))
          }), iW)
        }))
      },
      lm = [.1, .25],
      Am = WW => WW.find((WW => 1 === WW.node?.nodeType)) || WW[0];
    let bm = 0,
      jm = 1 / 0,
      Um = 0;
    const km = WW => {
      for (const iW of WW) iW.interactionId && (jm = Math.min(jm, iW.interactionId), Um = Math.max(Um, iW.interactionId), bm = Um ? (Um - jm) / 7 + 1 : 0)
    };
    let sm;
    const Mm = () => sm ? bm : performance.interactionCount ?? 0;
    class Km {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Mm() - this.h
      }
      D() {
        this.h = Mm(), this.v.length = 0, this.p.clear()
      }
      S(WW) {
        const iW = this.T(),
          OW = Math.min(this.v.length - 1, Math.floor(iW / 50));
        return !iW || -1 !== OW || "soft-navigation" !== WW && "back-forward-cache" !== WW ? this.v[OW] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(WW) {
        if (this.m?.(WW), !WW.interactionId) return;
        const iW = this.v.at(-1);
        let OW = this.p.get(WW.interactionId);
        if (OW || this.v.length < 10 || WW.duration > iW.k) {
          if (OW ? WW.duration > OW.k ? (OW.entries = [WW], OW.k = WW.duration) : WW.duration === OW.k && WW.startTime === OW.entries[0].startTime && OW.entries.push(WW) : (OW = {
              id: WW.interactionId,
              entries: [WW],
              k: WW.duration
            }, this.p.set(OW.id, OW), this.v.push(OW)), this.v.sort(((WW, iW) => iW.k - WW.k)), this.v.length > 10) {
            const WW = this.v.splice(10);
            for (const iW of WW) this.p.delete(iW.id)
          }
          this.M?.(OW)
        }
      }
    }
    const Sm = WW => {
        const iW = "requestIdleCallback" in globalThis ? 1e3 : 0,
          OW = globalThis.requestIdleCallback || setTimeout,
          mW = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) WW();
        else {
          const EW = cm(WW);
          let NW = -1;
          const PW = () => {
            mW(NW), EW()
          };
          addEventListener("visibilitychange", PW, {
            once: !0,
            capture: !0
          }), NW = OW((() => {
            removeEventListener("visibilitychange", PW, {
              capture: !0
            }), EW()
          }), {
            timeout: iW
          })
        }
      },
      Ym = [200, 500],
      ym = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = RO(iW = Object.assign({}, iW), Km);
        let mW = [],
          EW = [],
          NW = 0;
        const PW = new WeakMap,
          LW = new WeakMap;
        let cW = !1;
        const wW = () => {
            cW || (cW = !0, Sm(tW))
          },
          tW = () => {
            const WW = new Set(OW.v.map((WW => PW.get(WW.entries[0])))),
              iW = EW.length - 10;
            EW = EW.filter(((OW, mW) => mW >= iW || WW.has(OW)));
            const LW = new Set;
            for (const OW of EW) {
              const WW = ZW(OW.startTime, OW.processingEnd);
              for (const iW of WW) LW.add(iW)
            }
            const wW = mW.length - 10;
            mW = mW.filter(((WW, iW) => LW.has(WW) || iW >= wW && WW.startTime > NW)), cW = !1
          };
        OW.m = WW => {
          const OW = WW.startTime + WW.duration;
          let mW;
          NW = Math.max(NW, WW.processingEnd);
          for (let NW = EW.length - 1; NW >= 0; NW--) {
            const PW = EW[NW];
            if (Math.abs(OW - PW.renderTime) <= 8) {
              mW = PW, mW.startTime = Math.min(WW.startTime, mW.startTime), mW.processingStart = Math.min(WW.processingStart, mW.processingStart), mW.processingEnd = Math.max(WW.processingEnd, mW.processingEnd), iW.includeProcessedEventEntries && mW.entries.push(WW);
              break
            }
          }
          mW || (mW = {
            startTime: WW.startTime,
            processingStart: WW.processingStart,
            processingEnd: WW.processingEnd,
            renderTime: OW,
            entries: iW.includeProcessedEventEntries ? [WW] : []
          }, EW.push(mW)), WW.interactionId && PW.set(WW, mW), wW()
        }, OW.M = WW => {
          if (!LW.get(WW)) {
            const OW = WW.entries.find((WW => WW.target))?.target;
            if (OW) {
              const mW = iW.generateTarget?.(OW) ?? BO(OW);
              LW.set(WW, mW)
            } else {
              const iW = WW.entries.find((WW => WW.targetSelector))?.targetSelector;
              iW && LW.set(WW, iW)
            }
          }
        };
        const ZW = (WW, iW) => {
          const OW = [];
          for (const EW of mW)
            if (!(EW.startTime + EW.duration < WW)) {
              if (EW.startTime > iW) break;
              OW.push(EW)
            } return OW
        };
        Nm(["long-animation-frame"], (WW => {
            mW = mW.concat(WW), wW()
          }), iW),
          function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const OW = mm();
            tm((() => {
              "interactionCount" in performance || sm || (sm = Nm(["event"], km, {
                durationThreshold: 0
              }));
              let mW, EW = Em("INP");
              const NW = RO(iW, Km),
                PW = (OW, PW, LW, cW, wW) => {
                  NW.D(), EW = Em("INP", -1, OW, PW, LW, cW, wW), mW = rO(WW, EW, Ym, iW.reportAllChanges)
                },
                LW = () => {
                  const WW = NW.S(EW.navigationType);
                  WW && WW.k !== EW.value && (EW.value = WW.k, EW.entries = WW.entries, mW())
                },
                cW = WW => {
                  LW(), mW(!0), PW("soft-navigation", WW.navigationId, WW.interactionId, WW.name, WW.startTime)
                },
                wW = function(WW) {
                  let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Sm((() => {
                    for (const iW of WW) "soft-navigation" !== iW.entryType ? NW.l(iW) : cW(iW);
                    LW(), iW && mW(!0)
                  }))
                },
                tW = ["event", "first-input"];
              Pm(iW) && tW.push("soft-navigation");
              const ZW = Nm(tW, wW, {
                ...iW,
                durationThreshold: iW.durationThreshold ?? 40
              });
              mW = rO(WW, EW, Ym, iW.reportAllChanges), ZW && (OW.onHidden((() => {
                wW(ZW.takeRecords(), !0)
              })), aO((() => {
                PW("back-forward-cache", EW.navigationId, EW.navigationInteractionId, EW.navigationURL, IO())
              })))
            }))
          }((iW => {
            WW((WW => {
              if (0 === WW.entries.length) {
                const iW = WW.navigationStartTime || 0,
                  OW = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: WW.value,
                    loadState: CO(iW)
                  };
                return Object.assign(WW, {
                  attribution: OW
                })
              }
              const iW = WW.entries[0],
                mW = PW.get(iW),
                EW = Math.max(mW.processingStart, iW.startTime),
                NW = Math.max(iW.startTime + iW.duration, EW),
                cW = Math.min(mW.processingEnd, NW),
                wW = mW.entries.sort(((WW, iW) => WW.processingStart - iW.processingStart)),
                tW = ZW(iW.startTime, cW),
                xW = OW.p.get(iW.interactionId),
                lW = {
                  interactionTarget: LW.get(xW),
                  interactionType: iW.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: iW.startTime,
                  nextPaintTime: NW,
                  processedEventEntries: wW,
                  longAnimationFrameEntries: tW,
                  inputDelay: EW - iW.startTime,
                  processingDuration: cW - EW,
                  presentationDelay: NW - cW,
                  loadState: CO(iW.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (WW => {
                const iW = WW.interactionTime,
                  OW = WW.nextPaintTime;
                if (!WW.longAnimationFrameEntries?.length || !iW || !OW) return;
                const mW = WW.inputDelay,
                  EW = WW.processingDuration;
                let NW, PW, LW = 0,
                  cW = 0,
                  wW = 0,
                  tW = 0;
                for (const lW of WW.longAnimationFrameEntries) {
                  cW = cW + lW.startTime + lW.duration - lW.styleAndLayoutStart;
                  for (const WW of lW.scripts) {
                    const OW = WW.startTime + WW.duration;
                    if (OW < iW) continue;
                    const wW = OW - Math.max(iW, WW.startTime),
                      ZW = WW.duration ? wW / WW.duration * WW.forcedStyleAndLayoutDuration : 0;
                    LW += wW - ZW, cW += ZW, wW > tW && (PW = WW.startTime < iW + mW ? "input-delay" : WW.startTime >= iW + mW + EW ? "presentation-delay" : "processing-duration", NW = WW, tW = wW)
                  }
                }
                const ZW = WW.longAnimationFrameEntries.at(-1),
                  xW = ZW ? ZW.startTime + ZW.duration : 0;
                xW >= iW + mW + EW && (wW = OW - xW), NW && PW && (WW.longestScript = {
                  entry: NW,
                  subpart: PW,
                  intersectingDuration: tW
                }), WW.totalScriptDuration = LW, WW.totalStyleAndLayoutDuration = cW, WW.totalPaintDuration = wW, WW.totalUnattributedDuration = OW - iW - LW - cW - wW
              })(lW), Object.assign(WW, {
                attribution: lW
              })
            })(iW))
          }), iW)
      };
    class Tm {
      m;
      u;
      l(WW) {
        this.m?.(WW)
      }
    }
    const Jm = [2500, 4e3];
    let hm = 50;
    const Hm = [];
    Nm(["resource"], (WW => {
      for (const iW of WW) Hm.push(iW), Hm.length > hm && Hm.shift()
    }));
    const nm = [800, 1800],
      um = WW => {
        document.prerendering ? tm((() => um(WW))) : "complete" !== document.readyState ? addEventListener("load", (() => um(WW)), !0) : setTimeout(WW)
      },
      om = "load_state",
      dm = "time_to_first_byte";
    var em = class {
        constructor(WW, iW) {
          this.corePushMeasurement = WW, this.webVitalConfig = iW
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var WW;
          ! function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const OW = RO(iW = Object.assign({}, iW), pO),
              mW = new WeakMap;
            OW.t = WW => {
                if (WW?.sources?.length) {
                  const OW = Am(WW.sources),
                    EW = OW?.node;
                  if (EW) {
                    const WW = iW.generateTarget?.(EW) ?? BO(EW);
                    mW.set(OW, WW)
                  }
                }
              },
              function(WW) {
                let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const OW = mm();
                xm(cm((() => {
                  let mW, EW = Em("CLS", 0);
                  const NW = RO(iW, pO),
                    PW = (OW, PW, LW, cW, wW) => {
                      EW = Em("CLS", 0, OW, PW, LW, cW, wW), NW.o = 0, mW = rO(WW, EW, lm, iW.reportAllChanges)
                    },
                    LW = function() {
                      let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      NW.o > EW.value && (EW.value = NW.o, EW.entries = NW.i), mW(WW)
                    },
                    cW = WW => {
                      LW(!0), PW("soft-navigation", WW.navigationId, WW.interactionId, WW.name, WW.startTime)
                    },
                    wW = WW => {
                      for (const iW of WW) "soft-navigation" !== iW.entryType ? NW.l(iW) : cW(iW);
                      LW()
                    },
                    tW = ["layout-shift"];
                  Pm(iW) && tW.push("soft-navigation");
                  const ZW = Nm(tW, wW);
                  ZW && (mW = rO(WW, EW, lm, iW.reportAllChanges), OW.onHidden((() => {
                    wW(ZW.takeRecords()), mW(!0)
                  })), aO((() => {
                    PW("back-forward-cache", EW.navigationId, EW.navigationInteractionId, EW.navigationURL, IO()), zO(mW)
                  })), setTimeout(mW))
                })))
              }((iW => {
                WW((WW => {
                  let iW = {};
                  if (WW.entries.length) {
                    const OW = WW.entries.reduce(((WW, iW) => WW.value > iW.value ? WW : iW));
                    if (OW?.sources?.length) {
                      const WW = Am(OW.sources);
                      WW && (iW = {
                        largestShiftTarget: mW.get(WW),
                        largestShiftTime: OW.startTime,
                        largestShiftValue: OW.value,
                        largestShiftSource: WW,
                        largestShiftEntry: OW,
                        loadState: CO(OW.startTime)
                      })
                    }
                  }
                  return Object.assign(WW, {
                    attribution: iW
                  })
                })(iW))
              }), iW)
          }((WW => {
            const {
              loadState: iW,
              largestShiftValue: OW,
              largestShiftTime: mW,
              largestShiftTarget: EW
            } = WW.attribution, NW = this.buildInitialValues(WW);
            this.addIfPresent(NW, "largest_shift_value", OW), this.addIfPresent(NW, "largest_shift_time", mW);
            const PW = this.buildInitialContext(WW);
            this.addIfPresent(PW, om, iW), this.addIfPresent(PW, "largest_shift_target", EW), this.pushMeasurement(NW, PW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureFCP() {
          var WW;
          ! function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const OW = RO(iW = Object.assign({}, iW), wm);
            Pm(iW) && (OW.u = new Map), xm((iW => {
              WW((WW => {
                let iW = {
                  timeToFirstByte: 0,
                  firstByteToFCP: WW.value,
                  loadState: CO(IO())
                };
                if ("soft-navigation" !== WW.navigationType) {
                  if (WW.entries.length) {
                    const OW = fO(),
                      mW = WW.entries.at(-1);
                    if (OW) {
                      const EW = OW.responseStart,
                        NW = OW.activationStart || 0,
                        PW = Math.max(0, EW - NW);
                      iW = {
                        timeToFirstByte: PW,
                        firstByteToFCP: WW.value - PW,
                        loadState: CO(WW.entries[0].startTime),
                        navigationEntry: OW,
                        fcpEntry: mW
                      }
                    }
                  }
                } else {
                  const mW = OW.u?.get(WW.navigationId);
                  mW && (iW = {
                    timeToFirstByte: 0,
                    firstByteToFCP: WW.value,
                    loadState: "complete",
                    navigationEntry: mW
                  })
                }
                return Object.assign(WW, {
                  attribution: iW
                })
              })(iW))
            }), iW)
          }((WW => {
            const {
              firstByteToFCP: iW,
              timeToFirstByte: OW,
              loadState: mW
            } = WW.attribution, EW = this.buildInitialValues(WW);
            this.addIfPresent(EW, "first_byte_to_fcp", iW), this.addIfPresent(EW, dm, OW);
            const NW = this.buildInitialContext(WW);
            this.addIfPresent(NW, om, mW), this.pushMeasurement(EW, NW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureINP() {
          var WW;
          ym((WW => {
            var iW;
            const {
              interactionTime: OW,
              presentationDelay: mW,
              inputDelay: EW,
              processingDuration: NW,
              nextPaintTime: PW,
              loadState: LW,
              interactionTarget: cW,
              interactionType: wW,
              totalScriptDuration: tW,
              totalStyleAndLayoutDuration: ZW,
              totalPaintDuration: xW,
              totalUnattributedDuration: lW,
              longestScript: AW
            } = WW.attribution, bW = this.buildInitialValues(WW);
            this.addIfPresent(bW, "interaction_time", OW), this.addIfPresent(bW, "presentation_delay", mW), this.addIfPresent(bW, "input_delay", EW), this.addIfPresent(bW, "processing_duration", NW), this.addIfPresent(bW, "next_paint_time", PW), this.addNumberIfDefined(bW, "total_script_duration", tW), this.addNumberIfDefined(bW, "total_style_and_layout_duration", ZW), this.addNumberIfDefined(bW, "total_paint_duration", xW), this.addNumberIfDefined(bW, "total_unattributed_duration", lW), this.addNumberIfDefined(bW, "longest_script_intersecting_duration", null === AW || void 0 === AW ? void 0 : AW.intersectingDuration);
            const jW = this.buildInitialContext(WW);
            this.addIfPresent(jW, om, LW), this.addIfPresent(jW, "interaction_target", cW), this.addIfPresent(jW, "interaction_type", wW), this.addIfPresent(jW, "longest_script_subpart", null === AW || void 0 === AW ? void 0 : AW.subpart), this.addIfPresent(jW, "longest_script_invoker_type", null === AW || void 0 === AW ? void 0 : AW.entry.invokerType), (null === (iW = this.webVitalConfig) || void 0 === iW ? void 0 : iW.trackAttributionSources) && (this.addIfPresent(jW, "longest_script_invoker", null === AW || void 0 === AW ? void 0 : AW.entry.invoker), this.addIfPresent(jW, "longest_script_source_url", null === AW || void 0 === AW ? void 0 : AW.entry.sourceURL), this.addIfPresent(jW, "longest_script_source_function_name", null === AW || void 0 === AW ? void 0 : AW.entry.sourceFunctionName), this.addIfPresent(jW, "longest_script_source_char_position", void 0 !== (null === AW || void 0 === AW ? void 0 : AW.entry.sourceCharPosition) ? String(AW.entry.sourceCharPosition) : void 0)), this.pushMeasurement(bW, jW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureLCP() {
          var WW;
          ! function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (iW = Object.assign({}, iW)).resourceBufferSize && (hm = iW.resourceBufferSize);
            const OW = RO(iW, Tm),
              mW = new WeakMap;
            Pm(iW) && (OW.u = new Map), OW.m = WW => {
                const OW = WW.element;
                if (OW) {
                  const EW = iW.generateTarget?.(OW) ?? BO(OW);
                  mW.set(WW, EW)
                } else WW.id && mW.set(WW, `#${WW.id}`)
              },
              function(WW) {
                let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  OW = !1;
                const mW = Pm(iW);
                tm((() => {
                  let EW, NW = mm(),
                    PW = Em("LCP");
                  const LW = RO(iW, Tm),
                    cW = (mW, LW, cW, wW, tW) => {
                      PW = Em("LCP", -1, mW, LW, cW, wW, tW), EW = rO(WW, PW, Jm, iW.reportAllChanges), OW = !1, "soft-navigation" === mW && (NW = mm(!0))
                    },
                    wW = WW => {
                      LW.u && WW.navigationId && Lm(LW.u, WW), OW || EW(!0), cW("soft-navigation", WW.navigationId, WW.interactionId, WW.name, WW.startTime);
                      const iW = WW.getLargestInteractionContentfulPaint?.();
                      iW && tW([iW])
                    },
                    tW = WW => {
                      iW.reportAllChanges || mW || (WW = WW.slice(-1));
                      for (const iW of WW) {
                        if (!iW) continue;
                        if ("soft-navigation" === iW.entryType) {
                          wW(iW);
                          continue
                        }
                        let WW = 0,
                          OW = [],
                          mW = iW.startTime;
                        if ("largest-contentful-paint" === iW.entryType) WW = Math.max(iW.startTime - FO(), 0), LW.l(iW), OW = [iW];
                        else if ("interaction-contentful-paint" === iW.entryType) {
                          const EW = iW;
                          if (!PW.navigationId) continue;
                          if ("interactionId" in EW && EW.interactionId != PW.navigationInteractionId) continue;
                          mW = EW.largestContentfulPaint?.renderTime || 0, WW = Math.max(mW - iW.startTime, 0), EW.largestContentfulPaint && (LW.l(EW.largestContentfulPaint), OW = [EW.largestContentfulPaint])
                        }
                        mW < NW.firstHiddenTime && (PW.value = WW, PW.entries = OW, EW())
                      }
                    },
                    ZW = ["largest-contentful-paint"];
                  mW && ZW.push("interaction-contentful-paint", "soft-navigation");
                  const xW = Nm(ZW, tW);
                  if (xW) {
                    EW = rO(WW, PW, Jm, iW.reportAllChanges);
                    const NW = ["keydown", "click", "visibilitychange"],
                      LW = WW => {
                        if (WW.isTrusted && !OW) {
                          const WW = PW.id;
                          Sm((() => {
                            if (!OW) {
                              if (!mW) {
                                xW.disconnect();
                                for (const WW of NW) removeEventListener(WW, LW, {
                                  capture: !0
                                })
                              }
                              WW === PW.id && (OW = !0, EW(!0))
                            }
                          }))
                        }
                      };
                    for (const WW of NW) addEventListener(WW, LW, {
                      capture: !0
                    });
                    aO((mW => {
                      cW("back-forward-cache", PW.navigationId, PW.navigationInteractionId, PW.navigationURL, IO()), EW = rO(WW, PW, Jm, iW.reportAllChanges), zO((() => {
                        PW.value = performance.now() - mW.timeStamp, OW = !0, EW(!0)
                      }))
                    }))
                  }
                }))
              }((iW => {
                WW((WW => {
                  let iW = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: WW.value
                  };
                  if (WW.entries.length) {
                    const EW = WW.entries.at(-1),
                      NW = WW => WW.name === EW.url && (WW.requestStart || WW.startTime) <= EW.startTime,
                      PW = EW.url && (Hm.findLast(NW) || performance.getEntriesByType("resource").findLast(NW));
                    let LW;
                    iW.target = mW.get(EW), iW.lcpEntry = EW, EW.url && (iW.url = EW.url), PW && (iW.lcpResourceEntry = PW);
                    let cW = 0,
                      wW = 0;
                    if ("soft-navigation" !== WW.navigationType ? (LW = fO(), cW = LW?.activationStart ?? 0, wW = LW?.responseStart ?? 0) : (cW = WW.navigationStartTime || 0, LW = OW.u?.get(WW.navigationId)), LW) {
                      const OW = Math.max(0, wW - cW),
                        mW = Math.max(OW, PW ? (PW.requestStart || PW.startTime) - cW : 0),
                        EW = Math.min(WW.value, Math.max(mW, PW ? PW.responseEnd - cW : 0));
                      iW = {
                        ...iW,
                        timeToFirstByte: OW,
                        resourceLoadDelay: mW - OW,
                        resourceLoadDuration: EW - mW,
                        elementRenderDelay: WW.value - EW,
                        navigationEntry: LW
                      }
                    }
                  }
                  return Object.assign(WW, {
                    attribution: iW
                  })
                })(iW))
              }), iW)
          }((WW => {
            var iW;
            const {
              elementRenderDelay: OW,
              resourceLoadDelay: mW,
              resourceLoadDuration: EW,
              timeToFirstByte: NW,
              target: PW,
              url: LW,
              lcpResourceEntry: cW
            } = WW.attribution, wW = this.buildInitialValues(WW);
            this.addIfPresent(wW, "element_render_delay", OW), this.addIfPresent(wW, "resource_load_delay", mW), this.addIfPresent(wW, "resource_load_duration", EW), this.addIfPresent(wW, dm, NW);
            const tW = this.buildInitialContext(WW);
            this.addIfPresent(tW, "element", PW), (null === (iW = this.webVitalConfig) || void 0 === iW ? void 0 : iW.trackAttributionSources) && (this.addIfPresent(tW, "resource_url", LW), this.addIfPresent(tW, "resource_delivery_type", null === cW || void 0 === cW ? void 0 : cW.deliveryType), this.addIfPresent(tW, "resource_initiator_type", null === cW || void 0 === cW ? void 0 : cW.initiatorType)), this.pushMeasurement(wW, tW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureTTFB() {
          var WW;
          ! function(WW) {
            ! function(WW) {
              let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const OW = Pm(iW);
              let mW = Em("TTFB"),
                EW = rO(WW, mW, nm, iW.reportAllChanges);
              um((() => {
                const NW = fO();
                if (NW) {
                  const PW = NW.responseStart;
                  mW.value = Math.max(PW - FO(), 0), mW.entries = [NW], EW(!0), aO((() => {
                    mW = Em("TTFB", 0, "back-forward-cache", mW.navigationId, mW.navigationInteractionId, mW.navigationURL, IO()), EW = rO(WW, mW, nm, iW.reportAllChanges), EW(!0)
                  })), OW && Nm(["soft-navigation"], (OW => {
                    OW.forEach((OW => {
                      OW.navigationId && (mW = Em("TTFB", 0, "soft-navigation", OW.navigationId, OW.interactionId, OW.name, OW.startTime), mW.entries = [OW], EW = rO(WW, mW, nm, iW.reportAllChanges), EW(!0))
                    }))
                  }), iW)
                }
              }))
            }((iW => {
              WW((WW => {
                const iW = WW.entries[0];
                let OW = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: iW
                };
                if (WW.entries.length && iW instanceof PerformanceNavigationTiming) {
                  const mW = iW.activationStart || 0,
                    EW = Math.max((iW.workerStart || iW.fetchStart || 0) - mW, 0),
                    NW = Math.max(iW.domainLookupStart - mW, 0),
                    PW = Math.max(iW.connectStart - mW, 0),
                    LW = Math.max(iW.connectEnd - mW, 0);
                  OW = {
                    waitingDuration: EW,
                    cacheDuration: NW - EW,
                    dnsDuration: PW - NW,
                    connectionDuration: LW - PW,
                    requestDuration: WW.value - LW,
                    navigationEntry: iW
                  }
                }
                return Object.assign(WW, {
                  attribution: OW
                })
              })(iW))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((WW => {
            const {
              dnsDuration: iW,
              connectionDuration: OW,
              requestDuration: mW,
              waitingDuration: EW,
              cacheDuration: NW
            } = WW.attribution, PW = this.buildInitialValues(WW);
            this.addIfPresent(PW, "dns_duration", iW), this.addIfPresent(PW, "connection_duration", OW), this.addIfPresent(PW, "request_duration", mW), this.addIfPresent(PW, "waiting_duration", EW), this.addIfPresent(PW, "cache_duration", NW);
            const LW = this.buildInitialContext(WW);
            this.pushMeasurement(PW, LW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        buildInitialValues(WW) {
          return {
            [WW.name.toLowerCase()]: WW.value,
            delta: WW.delta
          }
        }
        buildInitialContext(WW) {
          var iW;
          const OW = null !== (iW = Wi("com.grafana.faro.lastNavigationId", zW)) && void 0 !== iW ? iW : DO;
          return {
            id: WW.id,
            rating: WW.rating,
            navigation_type: WW.navigationType,
            navigation_entry_id: OW
          }
        }
        pushMeasurement(WW, iW) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: WW
          }, {
            context: iW
          })
        }
        addIfPresent(WW, iW, OW) {
          OW && (WW[iW] = OW)
        }
        addNumberIfDefined(WW, iW, OW) {
          void 0 !== OW && (WW[iW] = OW)
        }
      },
      gm = class extends mO {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = EO
        }
        initialize() {
          this.logDebug("Initializing"), new em(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Dm = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Vm() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const iW of WW)
        if ("traceparent" === iW.name) {
          if (!Dm.test(iW.description)) continue;
          const [, WW, OW] = iW.description.split("-");
          if (null != WW && null != OW) return {
            traceId: WW,
            spanId: OW
          };
          break
        }
    }

    function pm(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: OW,
        monoNow: mW
      } = iW;
      return Math.min(OW, OW - (mW - WW))
    }

    function fm(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [OW, mW] of Object.entries(iW)) {
        const iW = WW[OW];
        return null != iW && (nW(mW) ? mW.includes(iW) : iW === mW)
      }
      return !0
    }

    function Cm(WW) {
      const {
        connectEnd: iW,
        connectStart: OW,
        decodedBodySize: mW,
        domainLookupEnd: EW,
        domainLookupStart: NW,
        duration: PW,
        encodedBodySize: LW,
        fetchStart: cW,
        initiatorType: wW,
        name: tW,
        nextHopProtocol: ZW,
        redirectEnd: xW,
        redirectStart: lW,
        renderBlockingStatus: AW,
        requestStart: bW,
        responseEnd: jW,
        responseStart: UW,
        responseStatus: kW,
        secureConnectionStart: sW,
        transferSize: MW,
        workerStart: KW
      } = WW;
      return {
        name: tW,
        httpHost: Bm(tW),
        duration: qm(PW),
        tcpHandshakeTime: qm(iW - OW),
        dnsLookupTime: qm(EW - NW),
        tlsNegotiationTime: qm(iW - sW),
        responseStatus: qm(kW),
        redirectTime: qm(xW - lW),
        requestTime: qm(UW - bW),
        responseTime: qm(jW - UW),
        fetchTime: qm(jW - cW),
        serviceWorkerTime: qm(KW > 0 ? cW - KW : 0),
        decodedBodySize: qm(mW),
        encodedBodySize: qm(LW),
        cacheHitStatus: function() {
          let WW = "fullLoad";
          0 === MW ? mW > 0 && (WW = "cache") : null != kW ? 304 === kW && (WW = "conditionalFetch") : LW > 0 && MW < LW && (WW = "conditionalFetch");
          return WW
        }(),
        renderBlockingStatus: qm(AW),
        protocol: ZW,
        initiatorType: wW,
        visibilityState: document.visibilityState,
        ttfb: qm(UW - bW),
        transferSize: qm(MW)
      }
    }

    function Xm(WW) {
      const {
        activationStart: iW,
        domComplete: OW,
        domContentLoadedEventEnd: mW,
        domContentLoadedEventStart: EW,
        domInteractive: NW,
        fetchStart: PW,
        loadEventEnd: LW,
        loadEventStart: cW,
        responseStart: wW,
        type: tW
      } = WW, ZW = function() {
        var WW;
        return null != (null === (WW = performance.timing) || void 0 === WW ? void 0 : WW.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return ti(ti({}, Cm(WW)), {}, {
        pageLoadTime: qm(OW - PW),
        documentParsingTime: qm(ZW ? NW - ZW : null),
        domProcessingTime: qm(OW - NW),
        domContentLoadHandlerTime: qm(mW - EW),
        onLoadTime: qm(LW - cW),
        ttfb: qm(Math.max(wW - (null !== iW && void 0 !== iW ? iW : 0), 0)),
        type: tW
      })
    }

    function Bm(WW) {
      try {
        return new URL(WW).host || DO
      } catch (iW) {
        return DO
      }
    }

    function qm(WW) {
      return null == WW ? DO : "number" === typeof WW ? Math.round(WW > 0 ? WW : 0).toString() : WW.toString()
    }
    const Rm = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function Gm(WW, iW, OW, mW, EW, NW, PW) {
      try {
        var LW = WW[NW](PW),
          cW = LW.value
      } catch (WW) {
        return void OW(WW)
      }
      LW.done ? iW(cW) : Promise.resolve(cW).then(mW, EW)
    }

    function Im(WW) {
      return function() {
        var iW = this,
          OW = arguments;
        return new Promise((function(mW, EW) {
          var NW = WW.apply(iW, OW);

          function PW(WW) {
            Gm(NW, mW, EW, PW, LW, "next", WW)
          }

          function LW(WW) {
            Gm(NW, mW, EW, PW, LW, "throw", WW)
          }
          PW(void 0)
        }))
      }
    }
    const am = new MO;
    var rm = class extends mO {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = EO
      }
      initialize() {
        var WW = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let iW = !1;
        const OW = () => {
          ! function(WW) {
            if ("complete" === document.readyState) WW();
            else {
              const iW = () => {
                "complete" === document.readyState && (WW(), document.removeEventListener("readystatechange", iW))
              };
              document.addEventListener("readystatechange", iW)
            }
          }(Im((function*() {
            if (iW) return;
            const OW = WW.api.pushEvent,
              {
                faroNavigationId: mW
              } = yield function(WW) {
                let iW;
                const OW = new Promise((WW => {
                  iW = WW
                }));
                return new PerformanceObserver((OW => {
                  var mW;
                  const [EW] = OW.getEntries();
                  if (null == EW || aW(EW.name)) return;
                  const NW = EW.toJSON();
                  let PW = Vm(null === NW || void 0 === NW ? void 0 : NW.serverTiming);
                  const LW = null !== (mW = Wi("com.grafana.faro.lastNavigationId", zW)) && void 0 !== mW ? mW : DO,
                    cW = ti(ti({}, Xm(NW)), {}, {
                      faroNavigationId: Ui(),
                      faroPreviousNavigationId: LW
                    });
                  ii("com.grafana.faro.lastNavigationId", cW.faroNavigationId, zW), WW("faro.performance.navigation", cW, void 0, {
                    spanContext: PW,
                    timestampOverwriteMs: pm(NW.startTime)
                  }), iW(cW)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), OW
              }(OW);
            iW || null == mW || function(WW, iW, OW, mW) {
              const EW = mW.trackResources;
              new PerformanceObserver((mW => {
                const NW = mW.getEntries(),
                  PW = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const LW of NW) {
                  if (aW(LW.name)) continue;
                  null === OW || void 0 === OW || OW.notify({
                    type: "resource"
                  });
                  const mW = LW.toJSON();
                  let NW = Vm(null === mW || void 0 === mW ? void 0 : mW.serverTiming);
                  (null == EW && fm(mW, Rm) || EW) && iW("faro.performance.resource", ti(ti({}, Cm(mW)), {}, {
                    faroNavigationId: WW,
                    faroResourceId: Ui()
                  }), void 0, {
                    spanContext: NW,
                    timestampOverwriteMs: pm(mW.startTime, PW)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(mW, OW, am, WW.config)
          })))
        };
        this.cancelInitialization = () => {
          iW = !0, document.removeEventListener("prerenderingchange", OW)
        }, document.prerendering ? document.addEventListener("prerenderingchange", OW, {
          once: !0
        }) : OW()
      }
      destroy() {
        var WW;
        null === (WW = this.cancelInitialization) || void 0 === WW || WW.call(this), this.cancelInitialization = void 0
      }
    };
    const zm = "data-faro-user-action-name",
      Fm = zm.replace(/-name$/, "-timeout"),
      Qm = 1e3;

    function WE(WW) {
      return `data-${(WW.startsWith("data-")?WW.slice(5):WW).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function iE(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ri;
      if (void 0 === WW) return iW;
      let mW = NaN;
      try {
        mW = "string" === typeof WW && "" === WW.trim() ? NaN : Number(WW)
      } catch (EW) {}
      return !Number.isFinite(mW) || mW <= 0 ? (OW(`initialActivityTimeout must be a finite number greater than zero; using ${iW} ms`), iW) : mW > 1e3 ? (OW(`initialActivityTimeout cannot exceed ${Qm} ms; clamping to the maximum`), Qm) : mW
    }

    function OE(WW, iW, OW) {
      return void 0 !== WW && window.clearTimeout(WW), window.setTimeout((() => {
        iW()
      }), OW)
    }

    function mE(WW) {
      return WW.type === sO
    }
    let EE, NE;

    function PE() {
      return EE || (EE = new MO), NE || (NE = new MutationObserver(((WW, iW) => {
        EE.notify({
          type: "dom-mutation"
        })
      })), NE.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), EE
    }
    const LE = "fetch",
      cE = "xhr";
    let wE, tE, ZE, xE, lE = !1;

    function AE() {
      if (wE) return wE;

      function WW(WW) {
        wE.notify({
          type: kO,
          request: WW
        })
      }

      function iW(WW) {
        wE.notify({
          type: sO,
          request: WW
        })
      }
      return wE = new MO, lE || (! function(WW) {
        let {
          onRequestEnd: iW,
          onRequestStart: OW
        } = WW;
        ZE || (ZE = window.fetch);
        window.fetch = function() {
          var WW, mW;
          const EW = null !== (WW = rW(arguments[0])) && void 0 !== WW ? WW : "",
            NW = aW(EW),
            PW = (null !== (mW = arguments[1]) && void 0 !== mW ? mW : {}).method,
            LW = Ui();
          return NW || OW({
            url: EW,
            method: PW,
            requestId: LW,
            apiType: LE
          }), ZE.apply(this, arguments).then((WW => (NW || iW({
            url: EW,
            method: PW,
            requestId: LW,
            apiType: LE
          }), WW))).catch((WW => {
            throw NW || iW({
              url: EW,
              method: PW,
              requestId: LW,
              apiType: LE
            }), WW
          }))
        }
      }({
        onRequestStart: WW,
        onRequestEnd: iW
      }), function(WW) {
        let {
          onRequestStart: iW,
          onRequestEnd: OW
        } = WW;
        tE || (tE = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const WW = arguments[1],
            mW = aW(WW),
            EW = arguments[0],
            NW = Ui();
          this.addEventListener("loadstart", (function() {
            mW || iW({
              url: WW,
              method: EW,
              requestId: NW,
              apiType: cE
            })
          })), this.addEventListener("load", (function() {
            mW || OW({
              url: WW,
              method: EW,
              requestId: NW,
              apiType: cE
            })
          })), this.addEventListener("error", (function() {
            mW || OW({
              url: WW,
              method: EW,
              requestId: NW,
              apiType: cE
            })
          })), this.addEventListener("abort", (function() {
            mW || OW({
              url: WW,
              method: EW,
              requestId: NW,
              apiType: cE
            })
          })), tE.apply(this, arguments)
        }
      }({
        onRequestStart: WW,
        onRequestEnd: iW
      }), lE = !0), wE
    }
    let bE, jE = !1;
    let UE = function(WW) {
      return WW[WW.Started = 0] = "Started", WW[WW.Halted = 1] = "Halted", WW[WW.Cancelled = 2] = "Cancelled", WW[WW.Ended = 3] = "Ended", WW
    }({});
    var kE = class {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = WW, this.logDebug = iW, this.initialActivityTimeout = OW, this.http = AE(), this.dom = PE(), this.perf = (xE || (xE = new MO), jE || (bE = am.subscribe((WW => {
          "resource" === WW.type && xE.notify({
            type: "resource-entry"
          })
        })), jE = !0), xE), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new MO).merge(this.http, this.dom, this.perf).takeWhile((() => [UE.Started, UE.Halted].includes(this.userAction.getState()))).filter((WW => !!(this.userAction.getState() !== UE.Halted || mE(WW) && this.runningRequests.has(WW.request.requestId)))).subscribe((WW => {
          (function(WW) {
            return WW.type === kO
          })(WW) && this.runningRequests.set(WW.request.requestId, WW.request), mE(WW) && this.runningRequests.delete(WW.request.requestId), mE(WW) ? this.userAction.getState() === UE.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((WW => [UE.Ended, UE.Cancelled].includes(WW))).first().subscribe((() => this.cleanup())), this.startupTid = OE(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === UE.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === UE.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = OE(this.haltTid, (() => {
          this.userAction.getState() === UE.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var WW, iW;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (WW = this.allMonitorsSub) || void 0 === WW || WW.unsubscribe(), null === (iW = this.stateSub) || void 0 === iW || iW.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(WW) {
        void 0 !== WW && window.clearTimeout(WW)
      }
    };

    function sE(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ri;
      var OW;
      const {
        api: mW,
        config: EW,
        internalLogger: NW
      } = WW, PW = iE(null === (OW = EW.userActionsInstrumentation) || void 0 === OW ? void 0 : OW.initialActivityTimeout, 100, iW);
      return {
        processUserEvent: function(WW) {
          var iW, OW;
          const NW = null !== (iW = null === (OW = EW.userActionsInstrumentation) || void 0 === OW ? void 0 : OW.dataAttributeName) && void 0 !== iW ? iW : zm,
            PW = WW.target;
          if (!(PW instanceof Element)) return;
          const LW = function(WW, iW) {
              let OW = WW;
              for (; OW;) {
                if (OW.hasAttribute(iW)) return OW;
                OW = OW.parentElement
              }
              return null
            }(PW, WE(NW)),
            cW = function(WW, iW) {
              if (!WW) return;
              const OW = function(WW) {
                  return WE(WW).slice(5).replace(/-(.)/g, ((WW, iW) => iW.toUpperCase()))
                }(iW),
                mW = WW.dataset;
              for (const EW in mW)
                if (EW === OW) return mW[EW]
            }(LW, NW);
          if (!LW || !cW) return;
          const wW = function(WW, iW) {
            const OW = WW.getAttribute(function(WW) {
              const iW = WE(WW);
              return iW.endsWith("-name") ? `${iW.slice(0,-5)}-timeout` : `${iW}-timeout`
            }(iW));
            return null === OW ? void 0 : Number(OW)
          }(LW, NW);
          mW.startUserAction(cW, {}, {
            triggerName: WW.type,
            initialActivityTimeout: wW
          })
        },
        processUserActionStarted: function(WW, OW) {
          const mW = WW,
            EW = iE(OW, PW, iW);
          new kE(mW, NW.debug, EW).attach()
        }
      }
    }
    const ME = "user_action_start",
      KE = {
        Normal: "normal",
        Critical: "critical"
      };
    var SE = class {
        constructor() {
          this.buffer = []
        }
        addItem(WW) {
          this.buffer.push(WW)
        }
        flushBuffer(WW) {
          if (HW(WW))
            for (const iW of this.buffer) WW(iW);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      YE = class extends MO {
        constructor(WW) {
          let {
            name: iW,
            parentId: OW,
            trigger: mW,
            transports: EW,
            attributes: NW,
            trackUserActionsExcludeItem: PW,
            importance: LW = KE.Normal,
            pushEvent: cW
          } = WW;
          super(), this.name = iW, this.attributes = NW, this.id = Ui(), this.trigger = mW, this.parentId = null !== OW && void 0 !== OW ? OW : this.id, this.trackUserActionsExcludeItem = PW, this.importance = LW, this._pushEvent = cW, this._itemBuffer = new SE, this._transports = EW, this._state = 0, this._start()
        }
        addItem(WW) {
          return 0 === this._state && (this._itemBuffer.addItem(WW), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = xi(), this._startTimeMono = li())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((WW => {
            this._transports.execute(WW)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const WW = xi(),
            iW = li() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((WW => {
            if (function(WW, iW) {
                return (null === iW || void 0 === iW ? void 0 : iW(WW)) || "measurement" === WW.type && "web-vitals" === WW.payload.type
              }(WW, this.trackUserActionsExcludeItem)) return void this._transports.execute(WW);
            const iW = WO(WO({}, WW), {}, {
              payload: WO(WO({}, WW.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(iW)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", WO({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: WW.toString(),
            userActionDuration: iW.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Di(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: WW => (WW.action = {
              id: this.id,
              name: this.name
            }, WW)
          })
        }
        getState() {
          return this._state
        }
      };
    const yE = new MO;

    function TE(WW, iW) {
      return !!WW && (0 === (null === WW || void 0 === WW ? void 0 : WW.getState()) && (WW.addItem(iW), !0))
    }
    var JE = class extends mO {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = EO
        }
        initialize() {
          const {
            processUserEvent: WW,
            processUserActionStarted: iW
          } = sE(bW, (WW => this.logWarn(WW)));
          this._processUserEvent = WW, this._processKeydown = iW => {
            [" ", "Enter"].includes(iW.key) && WW(iW)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = yE.subscribe((WW => {
            let {
              type: OW,
              userAction: mW,
              initialActivityTimeout: EW
            } = WW;
            "user_action_start" === OW && iW(mW, EW)
          }))
        }
        destroy() {
          var WW;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (WW = this._userActionSub) || void 0 === WW || WW.unsubscribe()
        }
      },
      hE = class extends mO {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = EO, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(WW) {
          const iW = {
            blockedURI: WW.blockedURI,
            columnNumber: WW.columnNumber,
            disposition: WW.disposition,
            documentURI: WW.documentURI,
            effectiveDirective: WW.effectiveDirective,
            lineNumber: WW.lineNumber,
            originalPolicy: WW.originalPolicy,
            referrer: WW.referrer,
            sample: WW.sample,
            sourceFile: WW.sourceFile,
            statusCode: WW.statusCode,
            violatedDirective: WW.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Di(iW))
        }
      };
    var HE = class extends MO {
      constructor(WW, iW) {
        var OW, mW, EW, NW;
        super(), this._tracking = !1, this.eventsObservable = WW, this._options = {
          inactivityMs: null !== (OW = null === iW || void 0 === iW ? void 0 : iW.inactivityMs) && void 0 !== OW ? OW : 100,
          drainTimeoutMs: null !== (mW = null === iW || void 0 === iW ? void 0 : iW.drainTimeoutMs) && void 0 !== mW ? mW : 1e4,
          isOperationStart: null !== (EW = null === iW || void 0 === iW ? void 0 : iW.isOperationStart) && void 0 !== EW ? EW : () => {},
          isOperationEnd: null !== (NW = null === iW || void 0 === iW ? void 0 : iW.isOperationEnd) && void 0 !== NW ? NW : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((WW => {
          var iW;
          this._lastEventTime = li(), null === (iW = this._currentEvents) || void 0 === iW || iW.push(WW);
          const OW = this._options.isOperationStart(WW);
          var mW;
          OW && (null === (mW = this._activeOperations) || void 0 === mW || mW.set(OW, !0));
          const EW = this._options.isOperationEnd(WW);
          var NW;
          EW && (null === (NW = this._activeOperations) || void 0 === NW || NW.delete(EW));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = li(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let WW;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), WW = this.hasActiveOperations() ? li() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: WW
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = nE(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = nE(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(WW) {
        WW && clearTimeout(WW)
      }
    };

    function nE(WW, iW, OW) {
      return WW && clearTimeout(WW), WW = setTimeout((() => {
        iW()
      }), OW)
    }
    let uE;
    const oE = new Set,
      dE = new Map;
    let eE, vE, gE, DE, VE, pE, fE, CE, XE = !1;
    var BE = class extends mO {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = EO
      }
      initialize() {
        const WW = AE(),
          iW = PE(),
          OW = function() {
            function WW(WW, iW) {
              const OW = null !== iW && void 0 !== iW ? iW : location.href;
              OW !== vE && (eE.notify({
                type: "url-change",
                from: vE,
                to: OW,
                trigger: WW
              }), vE = OW)
            }
            if (eE || (eE = new MO, vE = location.href), !XE)
              if ("navigation" in window && "NavigateEvent" in window) {
                fE = iW => {
                  try {
                    const OW = null === iW || void 0 === iW ? void 0 : iW.destination;
                    (null === OW || void 0 === OW ? void 0 : OW.sameDocument) && "string" === typeof OW.url && WW("navigate", OW.url)
                  } catch (OW) {}
                }, window.navigation.addEventListener("navigate", fE);
                const iW = window.NavigateEvent;
                iW && iW.prototype && "function" === typeof iW.prototype.intercept && (CE || (CE = iW.prototype.intercept), iW.prototype.intercept = function(iW) {
                  try {
                    const iW = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      OW = null === this || void 0 === this ? void 0 : this.destination;
                    iW && OW && !1 === OW.sameDocument && "string" === typeof OW.url && WW("navigate-intercept", OW.url)
                  } catch (OW) {}
                  return CE.call(this, iW)
                }), XE = !0
              } else gE || (gE = window.history.pushState), window.history.pushState = function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                const EW = gE.apply(window.history, OW);
                return WW("pushState"), EW
              }, DE || (DE = window.history.replaceState), window.history.replaceState = function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                const EW = DE.apply(window.history, OW);
                return WW("replaceState"), EW
              }, VE = () => WW("popstate"), pE = () => WW("hashchange"), window.addEventListener("popstate", VE), window.addEventListener("hashchange", pE), XE = !0;
            return eE
          }(),
          mW = (EW = ["pointerdown", "keydown"], uE || (uE = new MO), EW.forEach((WW => {
            if (!oE.has(WW)) {
              const iW = () => {
                uE.notify({
                  type: "interaction",
                  name: WW
                })
              };
              window.addEventListener(WW, iW), oE.add(WW), dE.set(WW, iW)
            }
          })), uE);
        var EW;
        const NW = new HE((new MO).merge(WW, iW, OW), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: WW => function(WW) {
            return WW.type === kO
          }(WW) ? WW.request.requestId : void 0,
          isOperationEnd: WW => function(WW) {
            return WW.type === sO
          }(WW) ? WW.request.requestId : void 0
        });
        NW.filter((WW => "tracking-ended" === WW.message)).subscribe((WW => {
          var iW, OW;
          if ((null === (iW = WW.events) || void 0 === iW ? void 0 : iW.some((WW => "url-change" === WW.type))) && (null === (OW = WW.events) || void 0 === OW ? void 0 : OW.some((WW => "dom-mutation" === WW.type)))) {
            var mW;
            const iW = null === (mW = WW.events) || void 0 === mW ? void 0 : mW.find((WW => "url-change" === WW.type));
            bW.api.pushEvent("faro.navigation", {
              fromUrl: null === iW || void 0 === iW ? void 0 : iW.from,
              toUrl: null === iW || void 0 === iW ? void 0 : iW.to,
              sameDocument: String(!0),
              duration: WW.duration
            })
          }
        })), mW.subscribe((() => {
          NW.startTracking()
        }))
      }
    };

    function qE() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const iW = [new JE, new gO, new gm, new NO, new VO, new BE];
      return !1 !== WW.enablePerformanceInstrumentation && iW.unshift(new rm), !1 !== WW.enableContentSecurityPolicyInstrumentation && iW.push(new hE), !1 !== WW.captureConsole && iW.push(new eO), iW
    }
    var RE = OW(7694);
    let GE, IE;

    function aE() {
      const WW = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return GE === WW && IE || (IE = new RE.UAParser(WW).getResult(), GE = WW), IE
    }
    const rE = () => {
        const {
          browser: WW,
          os: iW,
          ua: OW
        } = aE(), {
          name: mW,
          version: EW
        } = WW, {
          name: NW,
          version: PW
        } = iW, LW = navigator.language, cW = OW.includes("Mobi"), wW = function() {
          if (!mW || !EW) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== mW && void 0 !== mW ? mW : DO,
            version: null !== EW && void 0 !== EW ? EW : DO,
            os: `${null!==NW&&void 0!==NW?NW:DO} ${null!==PW&&void 0!==PW?PW:DO}`,
            userAgent: null !== OW && void 0 !== OW ? OW : DO,
            language: null !== LW && void 0 !== LW ? LW : DO,
            mobile: cW,
            brands: null !== wW && void 0 !== wW ? wW : DO,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      zE = () => {
        const {
          name: WW,
          version: iW
        } = aE().os;
        if (!WW && !iW) return {};
        const OW = {};
        return WW && (OW.name = WW), iW && (OW.version = iW), {
          os: OW
        }
      };

    function FE(WW) {
      var iW, OW, mW;
      return {
        id: null !== (iW = null === (OW = bW.config) || void 0 === OW || null === (OW = OW.sessionTracking) || void 0 === OW || null === (mW = OW.generateSessionId) || void 0 === mW ? void 0 : mW.call(OW)) && void 0 !== iW ? iW : Ui(),
        attributes: WW
      }
    }
    const QE = () => ({
      sdk: {
        name: "faro-web",
        version: EO
      }
    });
    var WN = class extends OO {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let iN = function(WW) {
      return WW.EXCEPTION = "exception", WW.LOG = "log", WW.MEASUREMENT = "measurement", WW.TRACE = "trace", WW.EVENT = "event", WW
    }({});
    const ON = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function mN(WW, iW) {
      var OW, mW;
      if (void 0 === iW) return WW;
      if (void 0 === WW) return {
        resourceSpans: iW
      };
      const EW = null === (OW = WW.resourceSpans) || void 0 === OW ? void 0 : OW[0];
      if (void 0 === EW) return WW;
      const NW = (null === EW || void 0 === EW ? void 0 : EW.scopeSpans) || [],
        PW = (null === iW || void 0 === iW || null === (mW = iW[0]) || void 0 === mW ? void 0 : mW.scopeSpans) || [];
      return WO(WO({}, WW), {}, {
        resourceSpans: [WO(WO({}, EW), {}, {
          scopeSpans: [...NW, ...PW]
        })]
      })
    }

    function EN(WW) {
      let iW = {
        meta: {}
      };
      return void 0 !== WW[0] && (iW.meta = WW[0].meta), WW.forEach((WW => {
        switch (WW.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const OW = ON[WW.type],
              mW = iW[OW];
            iW = WO(WO({}, iW), {}, {
              [OW]: void 0 === mW ? [WW.payload] : [...mW, WW.payload]
            });
            break
          }
          case "trace":
            iW = WO(WO({}, iW), {}, {
              traces: mN(iW.traces, WW.payload.resourceSpans)
            })
        }
      })), iW
    }
    var NN = class extends WN {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = WW, this.name = "@grafana/faro-web-sdk:transport-console", this.version = EO
      }
      send(WW) {
        var iW;
        return this.unpatchedConsole[null !== (iW = this.options.level) && void 0 !== iW ? iW : KO.DEBUG]("New event", EN([WW]))
      }
    };
    const PN = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      LN = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      cN = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      wN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      tN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      ZN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function xN(WW) {
      let {
        weekday: iW,
        day: OW,
        month: mW,
        year: EW,
        hour: NW,
        minute: PW,
        second: LW
      } = WW;
      if (EW < 1900 || OW < 1 || NW > 23 || PW > 59 || LW > 60) return;
      const cW = 60 === LW,
        wW = new Date(0);
      return wW.setUTCFullYear(EW, mW, OW), wW.setUTCHours(NW, PW, cW ? 59 : LW, 0), wW.getUTCDay() === iW && wW.getUTCDate() === OW && wW.getUTCMonth() === mW && wW.getUTCFullYear() === EW && wW.getUTCHours() === NW && wW.getUTCMinutes() === PW && wW.getUTCSeconds() === (cW ? 59 : LW) ? wW.getTime() + (cW ? 1e3 : 0) : void 0
    }
    var lN = class {
      constructor(WW) {
        this.options = WW, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var WW = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const iW = this.sequence++;
        let OW = !1;
        return {
          deliver: function() {
            var OW = Im((function*(OW) {
              const mW = WW.options.getNow();
              let EW, NW = 0;
              for (;;) {
                var PW, LW, cW;
                const wW = WW.options.retry.maxAttempts - NW,
                  tW = yield WW.runAttempt((() => OW(wW, WW.unloading)), NW > 0);
                if (NW += tW.attemptsMade, "success" === tW.kind) return {
                  kind: "success",
                  attempts: NW,
                  elapsedTimeMs: WW.options.getNow() - mW
                };
                if (EW = tW.failure, "terminal" === tW.kind || WW.unloading) return {
                  kind: "terminal",
                  attempts: NW,
                  elapsedTimeMs: WW.options.getNow() - mW,
                  failure: EW
                };
                if (NW >= WW.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: NW,
                  elapsedTimeMs: WW.options.getNow() - mW,
                  failure: EW,
                  reason: "retries-exhausted"
                };
                if (null != tW.retryAfterMs && tW.retryAfterMs > WW.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: NW,
                  elapsedTimeMs: WW.options.getNow() - mW,
                  failure: EW,
                  reason: "retry-after-too-long"
                };
                const ZW = Math.min(null !== (PW = tW.retryAfterMs) && void 0 !== PW ? PW : WW.options.retry.initialBackoffMs * Math.pow(WW.options.retry.backoffMultiplier, NW - 1), WW.options.retry.maxBackoffMs);
                if (null === (LW = (cW = WW.options).onRetry) || void 0 === LW || LW.call(cW, ZW, NW + 1), yield WW.waitForTurn(iW, ZW)) {
                  const iW = WW.options.retry.maxAttempts - NW,
                    EW = yield WW.runAttempt((() => OW(iW, !0)));
                  return NW += EW.attemptsMade, {
                    kind: "success" === EW.kind ? "success" : "terminal",
                    attempts: NW,
                    elapsedTimeMs: WW.options.getNow() - mW,
                    failure: "success" === EW.kind ? void 0 : EW.failure
                  }
                }
              }
            }));
            return function(WW) {
              return OW.apply(this, arguments)
            }
          }(),
          release: () => {
            OW || (OW = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const WW = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const iW of WW) iW.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((OW, mW) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const iW = () => {
                this.inProgress--, this.runNextAttempt()
              };
              WW().then((WW => {
                iW(), OW(WW)
              }), (WW => {
                iW(), mW(WW)
              }))
            },
            isRedelivery: iW
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const WW = this.options.getNow(),
            iW = this.attemptQueue.findIndex((iW => {
              let {
                isRedelivery: OW
              } = iW;
              return this.unloading || !OW || WW >= this.nextSendAt
            }));
          if (iW < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - WW)));
          const [OW] = this.attemptQueue.splice(iW, 1);
          OW.isRedelivery && !this.unloading && (this.nextSendAt = WW + 1), OW.run()
        }
      }
      waitForTurn(WW, iW) {
        const OW = Math.min(iW * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((iW => {
          this.waiting.push({
            sequence: WW,
            readyAt: this.options.getNow() + OW,
            resolve: iW
          }), this.waiting.sort(((WW, iW) => WW.readyAt === iW.readyAt ? WW.sequence - iW.sequence : WW.readyAt - iW.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const WW = this.waiting[0],
          iW = WW.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const iW = this.waiting.indexOf(WW);
          iW >= 0 && this.waiting.splice(iW, 1), WW.resolve(!1), this.scheduleNext()
        }), Math.max(0, iW - this.options.getNow()))
      }
    };

    function AN(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if ({}.hasOwnProperty.call(WW, mW)) {
            if (iW.includes(mW)) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.includes(OW) || {}.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function bN(WW) {
      const {
        size: iW,
        concurrency: OW
      } = WW, mW = [];
      let EW = 0;
      const NW = () => {
        if (EW < OW && mW.length) {
          const {
            producer: WW,
            resolve: iW,
            reject: OW
          } = mW.shift();
          EW++, WW().then((WW => {
            EW--, NW(), iW(WW)
          }), (WW => {
            EW--, NW(), OW(WW)
          }))
        }
      };
      return {
        add: WW => {
          if (mW.length + EW >= iW) throw new Error("Task buffer full");
          return new Promise(((iW, OW) => {
            mW.push({
              producer: WW,
              resolve: iW,
              reject: OW
            }), NW()
          }))
        }
      }
    }
    const jN = ["headers"],
      UN = ["keepalive", "signal"],
      kN = new Set([408, 425, 429, 500, 502, 503, 504]),
      sN = new Set([429, 503]);
    let MN = 0,
      KN = 0;
    var SN = class extends Error {};
    var YN = class extends WN {
      constructor(WW) {
        var iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW;
        super(), this.options = WW, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = EO, this.pendingCustomSends = 0, this.getNow = null !== (iW = WW.getNow) && void 0 !== iW ? iW : Date.now, this.requestTimeoutMs = null !== (OW = WW.requestTimeoutMs) && void 0 !== OW ? OW : 1e4, this.compressionEnabled = null !== (mW = WW.requestCompression) && void 0 !== mW && mW && "undefined" !== typeof CompressionStream, WW.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new lN({
          bufferSize: null !== (EW = WW.bufferSize) && void 0 !== EW ? EW : 30,
          concurrency: null !== (NW = WW.concurrency) && void 0 !== NW ? NW : 5,
          retry: {
            maxAttempts: null !== (PW = null === (LW = WW.retry) || void 0 === LW ? void 0 : LW.maxAttempts) && void 0 !== PW ? PW : 3,
            initialBackoffMs: null !== (cW = null !== (wW = null === (tW = WW.retry) || void 0 === tW ? void 0 : tW.initialBackoffMs) && void 0 !== wW ? wW : WW.defaultRateLimitBackoffMs) && void 0 !== cW ? cW : 1e3,
            maxBackoffMs: null !== (ZW = null === (xW = WW.retry) || void 0 === xW ? void 0 : xW.maxBackoffMs) && void 0 !== ZW ? ZW : 3e4,
            backoffMultiplier: null !== (lW = null === (AW = WW.retry) || void 0 === AW ? void 0 : AW.backoffMultiplier) && void 0 !== lW ? lW : 2
          },
          getNow: this.getNow,
          getRandom: null !== (bW = WW.getRandom) && void 0 !== bW ? bW : Math.random,
          onRetry: (WW, iW) => {
            this.logDebug(`Retrying failed request after ${WW}ms. Attempt ${iW}.`)
          }
        }), this.customPromiseBuffer = bN({
          size: null !== (jW = WW.bufferSize) && void 0 !== jW ? jW : 30,
          concurrency: null !== (UW = WW.concurrency) && void 0 !== UW ? UW : 5
        }), this.defaultPromiseBuffer = {
          add: WW => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(WW);
            const iW = this.deliveryQueue.reserve();
            if (!iW) throw new Error("Task buffer full");
            return this.runBufferedTask(iW, WW)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (WW => {
          WW.persisted && this.deliveryQueue.resume()
        })))
      }
      send(WW) {
        var iW = this;
        return Im((function*() {
          const OW = iW.promiseBuffer;
          if (OW !== iW.defaultPromiseBuffer || OW.add !== iW.defaultBufferAdd) {
            iW.pendingCustomSends++;
            try {
              yield OW.add((() => iW.deliver(WW)))
            } catch (mW) {
              iW.logError("Permanent delivery failure", {
                error: mW,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              iW.pendingCustomSends--
            }
          } else yield iW.deliver(WW)
        }))()
      }
      runBufferedTask(WW, iW) {
        return Im((function*() {
          let OW;
          try {
            return yield WW.deliver(Im((function*() {
              return OW = yield iW(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), OW
          } finally {
            WW.release()
          }
        }))()
      }
      deliver(WW) {
        var iW = this;
        return Im((function*() {
          const OW = iW.deliveryQueue.reserve();
          if (OW) try {
            const mW = yield iW.prepareRequest(WW), EW = yield OW.deliver(((WW, OW) => iW.performAttempt(mW, WW, OW)));
            "terminal" === EW.kind && iW.logError("retries-exhausted" === EW.reason ? "Delivery retries exhausted" : "Permanent delivery failure", ti(ti({}, EW.failure), {}, {
              reason: EW.reason,
              attempts: EW.attempts,
              elapsedTimeMs: EW.elapsedTimeMs
            }))
          } catch (mW) {
            iW.logError("Permanent delivery failure", {
              error: mW,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            OW.release()
          } else iW.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var WW;
        return [this.options.url].concat(null !== (WW = this.config.ignoreUrls) && void 0 !== WW ? WW : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(WW) {
        var iW = this;
        return Im((function*() {
          var OW, mW;
          const EW = EN(WW),
            NW = null === (OW = EW.meta.session) || void 0 === OW ? void 0 : OW.id,
            PW = JSON.stringify(EW),
            LW = null !== (mW = iW.options.requestOptions) && void 0 !== mW ? mW : {},
            {
              headers: cW = {}
            } = LW,
            wW = AN(LW, jN),
            {
              keepalive: tW,
              signal: ZW
            } = wW,
            xW = AN(wW, UN),
            lW = {};
          for (const [WW, iW] of Object.entries(cW)) lW[WW] = "function" === typeof iW ? yield iW(): iW;
          let AW = PW,
            bW = function(WW) {
              return "undefined" === typeof TextEncoder ? WW.length : (new TextEncoder).encode(WW).byteLength
            }(PW);
          const jW = {};
          return iW.compressionEnabled && (AW = yield iW.compress(PW), bW = AW.size, jW["Content-Encoding"] = "gzip"), {
            bodySize: bW,
            sessionId: NW,
            requestInit: ti({
              method: "POST",
              headers: ti(ti(ti(ti(ti({
                "Content-Type": "application/json"
              }, jW), lW), iW.options.apiKey ? {
                "x-api-key": iW.options.apiKey
              } : {}), NW ? {
                "x-faro-session-id": NW
              } : {}), {}, {
                "Idempotency-Key": Ui(20)
              }),
              body: AW
            }, xW)
          }
        }))()
      }
      performAttempt(WW, iW, OW) {
        var mW = this;
        return Im((function*() {
          var EW;
          const NW = null === (EW = mW.options.requestOptions) || void 0 === EW ? void 0 : EW.signal;
          if (null === NW || void 0 === NW ? void 0 : NW.aborted) return {
            kind: "terminal",
            failure: {
              error: NW.reason
            },
            attemptsMade: 0
          };
          let PW = 0;
          try {
            var LW;
            const EW = yield mW.fetchWithKeepaliveFallback(WW.requestInit, WW.bodySize, !!OW || (null === (LW = mW.options.requestOptions) || void 0 === LW ? void 0 : LW.keepalive), iW, (() => PW++));
            if (mW.handleResponse(EW, WW.sessionId), EW.status >= 200 && EW.status < 300) return {
              kind: "success",
              attemptsMade: PW
            };
            const NW = {
              status: EW.status
            };
            return !kN.has(EW.status) || OW ? {
              kind: "terminal",
              failure: NW,
              attemptsMade: PW
            } : {
              kind: "retry",
              failure: NW,
              attemptsMade: PW,
              retryAfterMs: sN.has(EW.status) ? mW.getRetryAfterDelayMs(EW) : void 0
            }
          } catch (cW) {
            const WW = {
              error: cW
            };
            return (null === NW || void 0 === NW ? void 0 : NW.aborted) || !mW.isFetchNetworkError(cW) || OW ? {
              kind: "terminal",
              failure: WW,
              attemptsMade: PW
            } : {
              kind: "retry",
              failure: WW,
              attemptsMade: PW
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(WW, iW, OW, mW, EW) {
        var NW = this;
        return Im((function*() {
          const PW = NW.getNow(),
            LW = NW.reserveKeepalive(iW, OW);
          try {
            return yield NW.fetchWithTimeout(ti(ti({}, WW), {}, {
              keepalive: LW.keepalive
            }), NW.requestTimeoutMs, EW)
          } catch (wW) {
            var cW;
            if (LW.keepalive && mW > 1 && NW.isFetchNetworkError(wW) && !(wW instanceof SN) && !(null === (cW = NW.options.requestOptions) || void 0 === cW || null === (cW = cW.signal) || void 0 === cW ? void 0 : cW.aborted)) {
              NW.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const iW = NW.requestTimeoutMs - (NW.getNow() - PW);
              return NW.fetchWithTimeout(ti(ti({}, WW), {}, {
                keepalive: !1
              }), iW, EW)
            }
            throw wW
          } finally {
            LW.release()
          }
        }))()
      }
      fetchWithTimeout(WW, iW, OW) {
        var mW = this;
        return Im((function*() {
          var EW;
          const NW = null === (EW = mW.options.requestOptions) || void 0 === EW ? void 0 : EW.signal;
          if (mW.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return OW(), fetch(mW.options.url, ti(ti({}, WW), {}, {
            signal: NW
          }));
          if (iW <= 0) throw new SN("Request timed out");
          const PW = new AbortController,
            LW = () => PW.abort(null === NW || void 0 === NW ? void 0 : NW.reason);
          null === NW || void 0 === NW || NW.addEventListener("abort", LW, {
            once: !0
          });
          let cW = !1;
          const wW = setTimeout((() => {
            cW = !0, PW.abort()
          }), iW);
          try {
            return OW(), yield fetch(mW.options.url, ti(ti({}, WW), {}, {
              signal: PW.signal
            }))
          } catch (tW) {
            if (cW && !(null === NW || void 0 === NW ? void 0 : NW.aborted)) throw new SN("Request timed out");
            throw tW
          } finally {
            clearTimeout(wW), null === NW || void 0 === NW || NW.removeEventListener("abort", LW)
          }
        }))()
      }
      getRetryAfterDelayMs(WW) {
        const iW = WW.headers.get("Retry-After");
        if (!iW) return;
        if (/^\d+$/.test(iW)) {
          const WW = 1e3 * Number(iW);
          return Number.isFinite(WW) ? WW : Number.POSITIVE_INFINITY
        }
        const OW = this.getNow(),
          mW = function(WW, iW) {
            const OW = PN.exec(WW);
            if (OW) {
              const [, WW, iW, mW, EW, NW, PW, LW] = OW;
              return xN({
                weekday: wN.indexOf(WW),
                day: Number(iW),
                month: ZN.indexOf(mW),
                year: Number(EW),
                hour: Number(NW),
                minute: Number(PW),
                second: Number(LW)
              })
            }
            const mW = LN.exec(WW);
            if (mW) {
              const [, WW, OW, PW, LW, cW, wW, tW] = mW, ZW = new Date(iW);
              if (Number.isNaN(ZW.getTime())) return;
              const xW = ZW.getUTCFullYear();
              let lW = 100 * Math.floor(xW / 100) + Number(LW);
              lW < xW && (lW += 100);
              const AW = ZN.indexOf(PW),
                bW = {
                  month: AW,
                  day: Number(OW),
                  hour: Number(cW),
                  minute: Number(wW),
                  second: Number(tW),
                  millisecond: 0
                },
                jW = {
                  month: ZW.getUTCMonth(),
                  day: ZW.getUTCDate(),
                  hour: ZW.getUTCHours(),
                  minute: ZW.getUTCMinutes(),
                  second: ZW.getUTCSeconds(),
                  millisecond: ZW.getUTCMilliseconds()
                };
              return (lW > xW + 50 || lW === xW + 50 && (NW = jW, ((EW = bW).month - NW.month || EW.day - NW.day || EW.hour - NW.hour || EW.minute - NW.minute || EW.second - NW.second || EW.millisecond - NW.millisecond) > 0)) && (lW -= 100), xN({
                weekday: tN.indexOf(WW),
                day: Number(OW),
                month: AW,
                year: lW,
                hour: Number(cW),
                minute: Number(wW),
                second: Number(tW)
              })
            }
            var EW, NW;
            const PW = cN.exec(WW);
            if (!PW) return;
            const [, LW, cW, wW, tW, ZW, xW, lW, AW] = PW;
            return xN({
              weekday: wN.indexOf(LW),
              day: Number(null !== wW && void 0 !== wW ? wW : tW),
              month: ZN.indexOf(cW),
              year: Number(AW),
              hour: Number(ZW),
              minute: Number(xW),
              second: Number(lW)
            })
          }(iW, OW);
        return null == mW ? void 0 : Math.max(0, mW - OW)
      }
      reserveKeepalive(WW, iW) {
        if (!1 === iW || WW > 6e4 || MN + WW > 6e4 || KN >= 9) return {
          keepalive: !1,
          release: Ri
        };
        MN += WW, KN++;
        let OW = !1;
        return {
          keepalive: !0,
          release: () => {
            OW || (OW = !0, MN -= WW, KN--)
          }
        }
      }
      handleResponse(WW, iW) {
        202 === WW.status && "invalid" === WW.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), iW), WW.text().catch(Ri)
      }
      isFetchNetworkError(WW) {
        return WW instanceof TypeError || WW instanceof SN || WW instanceof DOMException && "AbortError" === WW.name
      }
      compress(WW) {
        return Im((function*() {
          const iW = [],
            OW = new ReadableStream({
              start(iW) {
                iW.enqueue((new TextEncoder).encode(WW)), iW.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: WW,
              value: mW
            } = yield OW.read();
            if (WW) return new Blob(iW);
            iW.push(mW)
          }
        }))()
      }
      extendFaroSession(WW, iW, OW) {
        var mW, EW;
        const NW = WW.sessionTracking;
        if (!(null === NW || void 0 === NW ? void 0 : NW.enabled)) return void iW("Session expired.");
        const {
          fetchUserSession: PW,
          storeUserSession: LW
        } = qi(NW), cW = null === (mW = this.metas.value.session) || void 0 === mW ? void 0 : mW.id, wW = null === (EW = PW()) || void 0 === EW ? void 0 : EW.sessionId;
        OW && OW === cW && OW === wW ? (ui({
          fetchUserSession: PW,
          storeUserSession: LW
        })({
          forceSessionExtend: !0
        }), iW("Session expired; created new session.")) : iW("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const yN = () => {
      const WW = window.k6;
      return {
        k6: ti({
          isK6Browser: !0
        }, (null === WW || void 0 === WW ? void 0 : WW.testRunId) && {
          testRunId: null === WW || void 0 === WW ? void 0 : WW.testRunId
        })
      }
    };
    let TN, JN;

    function hN() {
      let {
        generatePageId: WW,
        initialPageMeta: iW
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const OW = location.href;
        return HW(WW) && TN !== OW && (TN = OW, JN = WW(location)), {
          page: ti(ti({
            url: OW
          }, JN ? {
            id: JN
          } : {}), iW)
        }
      }
    }

    function HN() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iO,
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const OW = Ii;
      return iW > 0 && (OW.error = iW >= 1 ? function() {
        for (var iW = arguments.length, mW = new Array(iW), EW = 0; EW < iW; EW++) mW[EW] = arguments[EW];
        WW.error(`${OW.prefix}\n`, ...mW)
      } : Ri, OW.warn = iW >= 2 ? function() {
        for (var iW = arguments.length, mW = new Array(iW), EW = 0; EW < iW; EW++) mW[EW] = arguments[EW];
        WW.warn(`${OW.prefix}\n`, ...mW)
      } : Ri, OW.info = iW >= 3 ? function() {
        for (var iW = arguments.length, mW = new Array(iW), EW = 0; EW < iW; EW++) mW[EW] = arguments[EW];
        WW.info(`${OW.prefix}\n`, ...mW)
      } : Ri, OW.debug = iW >= 4 ? function() {
        for (var iW = arguments.length, mW = new Array(iW), EW = 0; EW < iW; EW++) mW[EW] = arguments[EW];
        WW.debug(`${OW.prefix}\n`, ...mW)
      } : Ri), OW
    }
    const nN = "faro",
      uN = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      oN = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function dN(WW) {
      var iW, OW, EW, NW, PW, LW;
      const cW = [],
        tW = HN(WW.unpatchedConsole, WW.internalLoggerLevel);
      WW.transports ? ((WW.url || WW.apiKey) && tW.error('if "transports" is defined, "url" and "apiKey" should not be defined'), cW.push(...WW.transports)) : WW.url ? cW.push(new YN({
        url: WW.url,
        apiKey: WW.apiKey,
        requestCompression: WW.requestCompression
      })) : tW.error('either "url" or "transports" must be defined');
      const {
        dedupe: ZW = !0,
        eventDomain: xW = mW,
        globalObjectKey: lW = nN,
        instrumentations: AW = qE(),
        internalLoggerLevel: bW = ai,
        isolate: jW = !1,
        logArgsSerializer: UW = dO,
        metas: kW = vN(WW),
        paused: sW = !1,
        preventGlobalExposure: MW = !1,
        unpatchedConsole: KW = iO,
        url: SW,
        experimental: YW
      } = WW, yW = AN(WW, oN), TW = null !== (iW = null === YW || void 0 === YW ? void 0 : YW.trackNavigation) && void 0 !== iW && iW, JW = {
        dataAttributeName: WE(null !== (OW = null === (EW = WW.userActionsInstrumentation) || void 0 === EW ? void 0 : EW.dataAttributeName) && void 0 !== OW ? OW : zm),
        excludeItem: null === (NW = WW.userActionsInstrumentation) || void 0 === NW ? void 0 : NW.excludeItem,
        initialActivityTimeout: iE(null === (PW = WW.userActionsInstrumentation) || void 0 === PW ? void 0 : PW.initialActivityTimeout, 100, (WW => tW.warn(WW)))
      };
      return ti(ti({}, yW), {}, {
        batching: ti(ti({}, uN), WW.batching),
        dedupe: ZW,
        globalObjectKey: lW,
        instrumentations: eN(AW, WW),
        internalLoggerLevel: bW,
        isolate: jW,
        logArgsSerializer: UW,
        metas: kW,
        parseStacktrace: UO,
        paused: sW,
        preventGlobalExposure: MW,
        transports: cW,
        unpatchedConsole: KW,
        eventDomain: xW,
        ignoreUrls: [...null !== (LW = WW.ignoreUrls) && void 0 !== LW ? LW : [], ...SW ? [SW] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: ti(ti(ti({}, wW), WW.sessionTracking), gN({
          trackGeolocation: WW.trackGeolocation,
          sessionTracking: WW.sessionTracking
        })),
        userActionsInstrumentation: JW,
        experimental: {
          trackNavigation: TW
        }
      })
    }

    function eN(WW, iW) {
      let {
        experimental: OW
      } = iW;
      var mW;
      const EW = null !== (mW = null === OW || void 0 === OW ? void 0 : OW.trackNavigation) && void 0 !== mW && mW;
      return WW.filter((WW => !("@grafana/faro-web-sdk:instrumentation-navigation" === WW.name && !EW)))
    }

    function vN(WW) {
      var iW, OW, mW;
      const {
        page: EW,
        generatePageId: NW
      } = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.pageTracking) && void 0 !== iW ? iW : {}, PW = [rE, zE, hN({
        generatePageId: NW,
        initialPageMeta: EW
      }), ...null !== (OW = WW.metas) && void 0 !== OW ? OW : [], QE];
      return hW(null === (mW = window) || void 0 === mW ? void 0 : mW.k6) ? [...PW, yN] : PW
    }

    function gN(WW) {
      let {
        trackGeolocation: iW,
        sessionTracking: OW
      } = WW;
      var mW;
      const EW = {};
      return TW(iW) && (EW.geoLocationTrackingEnabled = iW), GW(EW) ? {} : {
        session: ti(ti({}, null !== (mW = null === OW || void 0 === OW ? void 0 : OW.session) && void 0 !== mW ? mW : {}), {}, {
          overrides: EW
        })
      }
    }
    const DN = new WeakSet;

    function VN(WW) {
      return DN.add(WW), WW
    }

    function pN(WW, iW) {
      if (WW.capture) return VN(WW.capture(iW));
      const OW = VN(WW.value);
      return null === iW || void 0 === iW || iW(), OW
    }

    function fN(WW) {
      const iW = `__faroBundleId_${WW}`,
        OW = null === tW || void 0 === tW ? void 0 : tW[iW];
      if ("string" === typeof OW && "" !== OW) return OW;
      const mW = "undefined" !== typeof window ? window[iW] : void 0;
      return "string" === typeof mW && "" !== mW ? mW : void 0
    }

    function CN(WW) {
      var iW, OW;
      const mW = WW.config.app.name,
        EW = mW ? function(WW) {
          return null === tW || void 0 === tW ? void 0 : tW[`__faroGitHash_${WW}`]
        }(mW) : void 0,
        NW = {
          sdk: {
            version: EO,
            name: "faro"
          },
          app: WO({
            bundleId: mW && fN(mW)
          }, void 0 !== EW ? {
            gitHash: EW
          } : {})
        },
        PW = null === (iW = WW.config.sessionTracking) || void 0 === iW ? void 0 : iW.session;
      PW && WW.api.setSession(PW), WW.config.app && (NW.app = WO(WO({}, WW.config.app), NW.app)), WW.config.user && (NW.user = WW.config.user), WW.config.view && (NW.view = WW.config.view), WW.metas.add(NW, ...null !== (OW = WW.config.metas) && void 0 !== OW ? OW : [])
    }
    var XN = class {
      constructor(WW, iW) {
        var OW, mW;
        this.signalBuffer = [], this.itemLimit = null !== (OW = null === iW || void 0 === iW ? void 0 : iW.itemLimit) && void 0 !== OW ? OW : 50, this.sendTimeout = null !== (mW = null === iW || void 0 === iW ? void 0 : iW.sendTimeout) && void 0 !== mW ? mW : 250, this.paused = (null === iW || void 0 === iW ? void 0 : iW.paused) || !1, this.sendFn = WW, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(WW) {
        this.paused || (this.signalBuffer.push(WW), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(WW) {
        const iW = new Map;
        return WW.forEach((WW => {
          const OW = JSON.stringify(WW.meta);
          let mW = iW.get(OW);
          mW = void 0 === mW ? [WW] : [...mW, WW], iW.set(OW, mW)
        })), Array.from(iW.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const WW = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(WW).forEach(this.sendFn)
        } catch (iW) {
          throw this.signalBuffer = [...WW, ...this.signalBuffer], this.trimBufferToLimit(), iW
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function BN(WW, iW, OW, mW) {
      var EW;
      iW.debug("Initializing transports");
      const NW = [];
      let PW = [];
      const LW = WW => {
        let iW = WW;
        for (const mW of PW) {
          const WW = iW.map(mW).filter(Boolean);
          if (0 === WW.length) return [];
          iW = qN(WW, OW)
        }
        return iW
      };
      let cW;
      (null === (EW = OW.batching) || void 0 === EW ? void 0 : EW.enabled) && (cW = new XN((WW => {
        const OW = LW(WW);
        if (0 !== OW.length)
          for (const mW of NW) iW.debug(`Transporting item using ${mW.name}\n`, OW), mW.isBatched() && mW.send(OW)
      }), {
        sendTimeout: OW.batching.sendTimeout,
        itemLimit: OW.batching.itemLimit,
        paused: OW.paused
      }));
      return {
        add: function() {
          iW.debug("Adding transports");
          for (var EW = arguments.length, PW = new Array(EW), LW = 0; LW < EW; LW++) PW[LW] = arguments[LW];
          PW.forEach((EW => {
            iW.debug(`Adding "${EW.name}" transport`), NW.some((WW => WW === EW)) ? iW.warn(`Transport ${EW.name} is already added`) : (EW.unpatchedConsole = WW, EW.internalLogger = iW, EW.config = OW, EW.metas = mW, NW.push(EW))
          }))
        },
        addBeforeSendHooks: function() {
          iW.debug("Adding beforeSendHooks\n", PW);
          for (var WW = arguments.length, OW = new Array(WW), mW = 0; mW < WW; mW++) OW[mW] = arguments[mW];
          OW.forEach((WW => {
            WW && PW.push(WW)
          }))
        },
        getBeforeSendHooks: () => [...PW],
        execute: WW => {
          var EW;
          if (!OW.paused && Xi(mW).shouldCapture()) {
            if (ZW = WW.meta, !DN.has(ZW)) {
              var PW, wW, tW;
              const iW = null === (PW = mW.value.session) || void 0 === PW ? void 0 : PW.id,
                EW = pN(mW);
              if (OW.paused) return;
              const NW = WO({}, WW.meta);
              (null === (wW = NW.session) || void 0 === wW ? void 0 : wW.id) === iW && (null === (tW = EW.session) || void 0 === tW ? void 0 : tW.id) !== iW && (void 0 === EW.session ? delete NW.session : NW.session = EW.session), WW = WO(WO({}, WW), {}, {
                meta: VN(NW)
              })
            }
            var ZW;
            (null === (EW = OW.batching) || void 0 === EW ? void 0 : EW.enabled) && (null === cW || void 0 === cW || cW.addItem(WW)), (WW => {
              var mW;
              if ((null === (mW = OW.batching) || void 0 === mW ? void 0 : mW.enabled) && NW.every((WW => WW.isBatched()))) return;
              const [EW] = LW([WW]);
              if (void 0 !== EW)
                for (const LW of NW) {
                  var PW;
                  iW.debug(`Transporting item using ${LW.name}\n`, EW), LW.isBatched() ? (null === (PW = OW.batching) || void 0 === PW ? void 0 : PW.enabled) || LW.send([EW]) : LW.send(EW)
                }
            })(WW)
          }
        },
        isPaused: () => OW.paused,
        pause: () => {
          iW.debug("Pausing transports"), null === cW || void 0 === cW || cW.pause(), OW.paused = !0
        },
        remove: function() {
          iW.debug("Removing transports");
          for (var WW = arguments.length, OW = new Array(WW), mW = 0; mW < WW; mW++) OW[mW] = arguments[mW];
          OW.forEach((WW => {
            iW.debug(`Removing "${WW.name}" transport`);
            const OW = NW.indexOf(WW); - 1 !== OW ? NW.splice(OW, 1) : iW.warn(`Transport "${WW.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var WW = arguments.length, OW = new Array(WW), mW = 0; mW < WW; mW++) OW[mW] = arguments[mW];
          iW.debug("Removing beforeSendHooks"), PW = PW.filter((WW => !OW.includes(WW)))
        },
        get transports() {
          return [...NW]
        },
        unpause: () => {
          iW.debug("Unpausing transports"), null === cW || void 0 === cW || cW.start(), OW.paused = !1
        }
      }
    }

    function qN(WW, iW) {
      if (iW.preserveOriginalError)
        for (const OW of WW) "exception" === OW.type && delete OW.payload.originalError;
      return WW
    }
    let RN = iO;

    function GN(WW) {
      var iW;
      return RN = null !== (iW = WW.unpatchedConsole) && void 0 !== iW ? iW : RN, RN
    }
    let IN, aN = Ii;

    function rN(WW, iW) {
      return aN = HN(WW, iW.internalLoggerLevel), aN
    }

    function zN(WW) {
      let {
        internalLogger: iW,
        config: OW,
        metas: mW,
        transports: EW,
        tracesApi: NW,
        userActionsApi: PW
      } = WW;
      var LW;
      iW.debug("Initializing exceptions API");
      let cW = null;
      IN = null !== (LW = OW.parseStacktrace) && void 0 !== LW ? LW : IN;
      const wW = WW => {
          iW.debug("Changing stacktrace parser"), IN = null !== WW && void 0 !== WW ? WW : IN
        },
        {
          ignoreErrors: tW = [],
          preserveOriginalError: ZW
        } = OW;
      return wW(OW.parseStacktrace), {
        changeStacktraceParser: wW,
        getStacktraceParser: () => IN,
        pushError: function(WW) {
          let {
            skipDedupe: LW,
            stackFrames: wW,
            type: xW,
            context: lW,
            spanContext: AW,
            timestampOverwriteMs: bW,
            originalError: jW,
            fingerprint: UW,
            fatal: kW
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(WW, iW) {
              const {
                message: OW,
                name: mW,
                stack: EW
              } = iW;
              return NW = WW, PW = OW + " " + mW + " " + EW, NW.some((WW => SW(WW) ? PW.includes(WW) : !!PW.match(WW)));
              var NW, PW
            }(tW, null !== jW && void 0 !== jW ? jW : WW)) try {
            var sW, MW;
            if (!Xi(mW).shouldCapture()) return;
            const tW = Di(WO(WO({}, function(WW) {
                let iW = WW.cause;
                DW(iW) ? iW = WW.cause.toString() : null !== iW && (hW(WW.cause) || nW(WW.cause)) ? iW = gi(WW.cause) : null != iW && (iW = WW.cause.toString());
                return null == iW ? {} : {
                  cause: iW
                }
              }(null !== jW && void 0 !== jW ? jW : WW)), null !== lW && void 0 !== lW ? lW : {})),
              SW = WO(WO(WO(WO({
                type: xW || WW.name || "Error",
                value: WW.message,
                timestamp: bW ? bi(bW) : Ai(),
                trace: AW ? {
                  trace_id: AW.traceId,
                  span_id: AW.spanId
                } : NW.getTraceContext()
              }, GW(tW) ? {} : {
                context: tW
              }), ZW ? {
                originalError: jW
              } : {}), UW ? {
                fingerprint: UW
              } : {}), void 0 !== kW ? {
                fatal: kW
              } : {});
            wW = null !== (sW = wW) && void 0 !== sW ? sW : WW.stack ? null === IN || void 0 === IN ? void 0 : IN(WW).frames : void 0, (null === wW || void 0 === wW ? void 0 : wW.length) && (SW.stacktrace = {
              frames: wW
            });
            const YW = {
              type: SW.type,
              value: SW.value,
              stacktrace: SW.stacktrace,
              context: SW.context,
              fingerprint: SW.fingerprint,
              fatal: null !== (MW = SW.fatal) && void 0 !== MW && MW
            };
            if (!LW && OW.dedupe && !KW(cW) && ki(YW, cW)) return void iW.debug("Skipping error push because it is the same as the last one\n", SW);
            const yW = cW,
              TW = pN(mW);
            if (cW !== yW && !LW && OW.dedupe && ki(YW, cW)) return;
            cW = YW;
            const JW = {
              meta: TW,
              payload: SW,
              type: "exception"
            };
            iW.debug("Pushing exception\n", JW), TE(PW.getActiveUserAction(), JW) || EW.execute(JW)
          } catch (YW) {
            iW.error("Error pushing event", YW)
          }
        }
      }
    }

    function FN(WW, iW, OW, mW, EW) {
      iW.debug("Initializing API");
      let NW = null;
      const PW = function(WW) {
          let {
            transports: iW,
            internalLogger: OW,
            config: mW,
            pushEvent: EW
          } = WW;
          var NW;
          const PW = null === (NW = mW.userActionsInstrumentation) || void 0 === NW ? void 0 : NW.excludeItem;
          let LW;
          const cW = () => LW;
          return {
            startUserAction: (WW, mW, NW) => {
              if (void 0 === cW()) {
                const OW = new YE({
                  name: WW,
                  transports: iW,
                  attributes: mW,
                  trigger: (null === NW || void 0 === NW ? void 0 : NW.triggerName) || "faroApiCall",
                  importance: (null === NW || void 0 === NW ? void 0 : NW.importance) || KE.Normal,
                  trackUserActionsExcludeItem: PW,
                  pushEvent: EW
                });
                return OW.filter((WW => [3, 2].includes(WW))).first().subscribe((() => {
                  LW = void 0
                })), yE.notify({
                  type: ME,
                  userAction: OW,
                  initialActivityTimeout: null === NW || void 0 === NW ? void 0 : NW.initialActivityTimeout
                }), LW = OW, LW
              }
              OW.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: cW
          }
        }({
          transports: EW,
          config: OW,
          internalLogger: iW,
          pushEvent: (WW, OW, mW, EW) => {
            NW ? NW(WW, OW, mW, EW) : iW.warn("pushEventImpl is not initialized. Event dropped:", {
              name: WW,
              attributes: OW,
              domain: mW,
              options: EW
            })
          }
        }),
        LW = function(WW, iW, OW, mW, EW) {
          let NW;
          return iW.debug("Initializing traces API"), {
            getOTEL: () => NW,
            getTraceContext: () => {
              const WW = null === NW || void 0 === NW ? void 0 : NW.trace.getSpanContext(NW.context.active());
              return WW ? {
                trace_id: WW.traceId,
                span_id: WW.spanId
              } : void 0
            },
            initOTEL: (WW, OW) => {
              iW.debug("Initializing OpenTelemetry"), NW = {
                trace: WW,
                context: OW
              }
            },
            isOTELInitialized: () => !!NW,
            pushTraces: WW => {
              try {
                if (!Xi(mW).shouldCapture()) return;
                const OW = {
                  type: "trace",
                  payload: WW,
                  meta: pN(mW)
                };
                iW.debug("Pushing trace\n", OW), EW.execute(OW)
              } catch (OW) {
                iW.error("Error pushing trace\n", OW)
              }
            }
          }
        }(0, iW, 0, mW, EW),
        cW = {
          unpatchedConsole: WW,
          internalLogger: iW,
          userActionsApi: PW,
          config: OW,
          metas: mW,
          transports: EW,
          tracesApi: LW
        },
        wW = function(WW) {
          let {
            internalLogger: iW,
            config: OW,
            metas: mW,
            transports: EW,
            tracesApi: NW,
            userActionsApi: PW
          } = WW, LW = null;
          return {
            pushEvent: function(WW, cW, wW) {
              let {
                skipDedupe: tW,
                spanContext: ZW,
                timestampOverwriteMs: xW,
                customPayloadTransformer: lW = WW => WW
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Xi(mW).shouldCapture()) return;
                const AW = Di(cW),
                  bW = lW({
                    name: WW,
                    domain: null !== wW && void 0 !== wW ? wW : OW.eventDomain,
                    attributes: GW(AW) ? void 0 : AW,
                    timestamp: xW ? bi(xW) : Ai(),
                    trace: ZW ? {
                      trace_id: ZW.traceId,
                      span_id: ZW.spanId
                    } : NW.getTraceContext()
                  }),
                  jW = {
                    name: bW.name,
                    attributes: bW.attributes,
                    domain: bW.domain
                  };
                if (!tW && OW.dedupe && !KW(LW) && ki(jW, LW)) return void iW.debug("Skipping event push because it is the same as the last one\n", bW);
                const UW = LW,
                  kW = pN(mW);
                if (LW !== UW && !tW && OW.dedupe && ki(jW, LW)) return;
                LW = jW;
                const sW = {
                  meta: kW,
                  payload: bW,
                  type: "event"
                };
                iW.debug("Pushing event\n", sW), TE(PW.getActiveUserAction(), sW) || EW.execute(sW)
              } catch (AW) {
                iW.error("Error pushing event", AW)
              }
            }
          }
        }(cW);
      return NW = wW.pushEvent, WO(WO(WO(WO(WO(WO(WO({}, LW), zN(cW)), function(WW) {
        let iW, OW, mW, EW, {
          internalLogger: NW,
          metas: PW
        } = WW;
        NW.debug("Initializing meta API");
        const LW = WW => {
            OW && PW.remove(OW), OW = {
              user: WW
            }, PW.add(OW)
          },
          cW = (WW, OW) => {
            var mW;
            const EW = null === OW || void 0 === OW ? void 0 : OW.overrides,
              NW = EW ? {
                overrides: WO(WO({}, null === iW || void 0 === iW || null === (mW = iW.session) || void 0 === mW ? void 0 : mW.overrides), EW)
              } : {};
            iW && PW.remove(iW), iW = {
              session: WO(WO({}, GW(WW) ? void 0 : WW), NW)
            }, PW.add(iW)
          },
          wW = (WW, iW) => {
            Xi(PW).notifySessionUpdate({
              type: "replace",
              session: WW,
              overrides: null === iW || void 0 === iW ? void 0 : iW.overrides
            }), cW(WW, iW)
          },
          tW = () => PW.value.session,
          ZW = () => PW.value.page;
        return {
          setUser: LW,
          resetUser: LW,
          setSession: wW,
          resetSession: wW,
          getSession: tW,
          setView: (WW, iW) => {
            var OW;
            if ((null === iW || void 0 === iW ? void 0 : iW.overrides) && (Xi(PW).notifySessionUpdate({
                type: "overrides",
                overrides: iW.overrides
              }), cW(tW(), {
                overrides: iW.overrides
              })), (null === mW || void 0 === mW || null === (OW = mW.view) || void 0 === OW ? void 0 : OW.name) === (null === WW || void 0 === WW ? void 0 : WW.name)) return;
            const EW = mW;
            mW = {
              view: WW
            }, PW.add(mW), EW && PW.remove(EW)
          },
          getView: () => PW.value.view,
          setPage: WW => {
            var iW;
            const OW = SW(WW) ? WO(WO({}, null !== (iW = null === EW || void 0 === EW ? void 0 : EW.page) && void 0 !== iW ? iW : ZW()), {}, {
              id: WW
            }) : WW;
            EW && PW.remove(EW), EW = {
              page: OW
            }, PW.add(EW)
          },
          getPage: ZW
        }
      }(cW)), function(WW) {
        let {
          internalLogger: iW,
          config: OW,
          metas: mW,
          transports: EW,
          tracesApi: NW,
          userActionsApi: PW
        } = WW;
        var LW;
        iW.debug("Initializing logs API");
        let cW = null;
        const wW = null !== (LW = OW.logArgsSerializer) && void 0 !== LW ? LW : dO;
        return {
          pushLog: function(WW) {
            let {
              context: LW,
              level: tW,
              skipDedupe: ZW,
              spanContext: xW,
              timestampOverwriteMs: lW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Xi(mW).shouldCapture()) return;
              const AW = Di(LW),
                bW = {
                  message: wW(WW),
                  level: null !== tW && void 0 !== tW ? tW : "log",
                  context: GW(AW) ? void 0 : AW,
                  timestamp: lW ? bi(lW) : Ai(),
                  trace: xW ? {
                    trace_id: xW.traceId,
                    span_id: xW.spanId
                  } : NW.getTraceContext()
                },
                jW = {
                  message: bW.message,
                  level: bW.level,
                  context: bW.context
                };
              if (!ZW && OW.dedupe && !KW(cW) && ki(jW, cW)) return void iW.debug("Skipping log push because it is the same as the last one\n", bW);
              const UW = cW,
                kW = pN(mW);
              if (cW !== UW && !ZW && OW.dedupe && ki(jW, cW)) return;
              cW = jW;
              const sW = {
                type: "log",
                payload: bW,
                meta: kW
              };
              iW.debug("Pushing log\n", sW), TE(PW.getActiveUserAction(), sW) || EW.execute(sW)
            } catch (AW) {
              iW.error("Error pushing log\n", AW)
            }
          }
        }
      }(cW)), function(WW) {
        let {
          internalLogger: iW,
          config: OW,
          metas: mW,
          transports: EW,
          tracesApi: NW,
          userActionsApi: PW
        } = WW;
        iW.debug("Initializing measurements API");
        let LW = null;
        return {
          pushMeasurement: function(WW) {
            let {
              skipDedupe: cW,
              context: wW,
              spanContext: tW,
              timestampOverwriteMs: ZW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Xi(mW).shouldCapture()) return;
              const xW = Di(wW),
                lW = WO(WO({}, WW), {}, {
                  trace: tW ? {
                    trace_id: tW.traceId,
                    span_id: tW.spanId
                  } : NW.getTraceContext(),
                  timestamp: ZW ? bi(ZW) : Ai(),
                  context: GW(xW) ? void 0 : xW
                }),
                AW = {
                  type: lW.type,
                  values: lW.values,
                  context: lW.context
                };
              if (!cW && OW.dedupe && !KW(LW) && ki(AW, LW)) return void iW.debug("Skipping measurement push because it is the same as the last one\n", lW);
              const bW = LW,
                jW = pN(mW);
              if (LW !== bW && !cW && OW.dedupe && ki(AW, LW)) return;
              LW = AW;
              const UW = {
                type: "measurement",
                payload: lW,
                meta: jW
              };
              iW.debug("Pushing measurement\n", UW), TE(PW.getActiveUserAction(), UW) || EW.execute(UW)
            } catch (xW) {
              iW.error("Error pushing measurement\n", xW)
            }
          }
        }
      }(cW)), wW), PW)
    }

    function QN(WW) {
      const iW = GN(WW),
        OW = rN(iW, WW);
      if (AW() && !WW.isolate) return void OW.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      OW.debug("Initializing");
      const mW = function(WW, iW) {
          let OW, mW = [],
            EW = [],
            NW = [],
            PW = 0,
            LW = 0;
          const cW = () => mW.reduce(((WW, iW) => Object.assign(WW, HW(iW) ? iW() : iW)), {}),
            wW = () => {
              if (EW.length) {
                const WW = cW();
                EW.forEach((iW => iW(WW)))
              }
            };
          return {
            add: function() {
              for (var WW = arguments.length, OW = new Array(WW), EW = 0; EW < WW; EW++) OW[EW] = arguments[EW];
              iW.debug("Adding metas\n", OW), mW.push(...OW), wW()
            },
            remove: function() {
              for (var WW = arguments.length, OW = new Array(WW), EW = 0; EW < WW; EW++) OW[EW] = arguments[EW];
              iW.debug("Removing metas\n", OW), mW = mW.filter((WW => !OW.includes(WW))), wW()
            },
            addListener: WW => {
              iW.debug("Adding metas listener\n", WW), EW.push(WW)
            },
            removeListener: WW => {
              iW.debug("Removing metas listener\n", WW), EW = EW.filter((iW => iW !== WW))
            },
            capture: WW => {
              var iW;
              const mW = void 0 !== OW,
                EW = null !== (iW = OW) && void 0 !== iW ? iW : NW;
              mW || (OW = EW, PW = 0, LW = EW.length);
              try {
                for (; PW < LW;) {
                  const WW = EW[PW++];
                  null === WW || void 0 === WW || WW()
                }
                const iW = VN(cW());
                return null === WW || void 0 === WW || WW(), iW
              } finally {
                mW || (OW = void 0)
              }
            },
            addCaptureListener: WW => {
              NW.push(WW)
            },
            removeCaptureListener: WW => {
              NW = NW.filter((iW => iW !== WW))
            },
            get value() {
              return cW()
            }
          }
        }(0, OW),
        EW = BN(iW, OW, WW, mW),
        NW = FN(iW, OW, WW, mW, EW),
        PW = function(WW, iW, OW, mW, EW, NW) {
          iW.debug("Initializing instrumentations");
          const PW = [];
          return {
            add: function() {
              iW.debug("Adding instrumentations");
              for (var LW = arguments.length, cW = new Array(LW), wW = 0; wW < LW; wW++) cW[wW] = arguments[wW];
              cW.forEach((LW => {
                iW.debug(`Adding "${LW.name}" instrumentation`), PW.some((WW => WW.name === LW.name)) ? iW.warn(`Instrumentation ${LW.name} is already added`) : (LW.unpatchedConsole = WW, LW.internalLogger = iW, LW.config = OW, LW.metas = mW, LW.transports = EW, LW.api = NW, PW.push(LW), LW.initialize())
              }))
            },
            get instrumentations() {
              return [...PW]
            },
            remove: function() {
              iW.debug("Removing instrumentations");
              for (var WW = arguments.length, OW = new Array(WW), mW = 0; mW < WW; mW++) OW[mW] = arguments[mW];
              OW.forEach((WW => {
                var OW, mW;
                iW.debug(`Removing "${WW.name}" instrumentation`);
                const EW = PW.reduce(((iW, OW, mW) => null === iW && OW.name === WW.name ? mW : null), null);
                null !== EW ? (null === (OW = (mW = PW[EW]).destroy) || void 0 === OW || OW.call(mW), PW.splice(EW, 1)) : iW.warn(`Instrumentation "${WW.name}" is not added`)
              }))
            }
          }
        }(iW, OW, WW, mW, EW, NW),
        LW = jW(iW, OW, WW, mW, EW, NW, PW);
      return CN(LW),
        function(WW) {
          WW.transports.add(...WW.config.transports), WW.transports.addBeforeSendHooks(WW.config.beforeSend)
        }(LW),
        function(WW) {
          WW.instrumentations.add(...WW.config.instrumentations)
        }(LW), LW
    }

    function WP(WW) {
      const iW = dN(WW);
      if (iW) return QN(iW)
    }
  },
  7694: function(WW, iW, OW) {
    var mW;
    ! function(EW, NW) {
      var PW = "function",
        LW = "undefined",
        cW = "object",
        wW = "string",
        tW = "major",
        ZW = "model",
        xW = "name",
        lW = "type",
        AW = "vendor",
        bW = "version",
        jW = "architecture",
        UW = "console",
        kW = "mobile",
        sW = "tablet",
        MW = "smarttv",
        KW = "wearable",
        SW = "embedded",
        YW = "Amazon",
        yW = "Apple",
        TW = "ASUS",
        JW = "BlackBerry",
        hW = "Browser",
        HW = "Chrome",
        nW = "Firefox",
        uW = "Google",
        oW = "Honor",
        dW = "Huawei",
        eW = "LG",
        vW = "Microsoft",
        gW = "Motorola",
        DW = "Nvidia",
        VW = "OnePlus",
        pW = "Opera",
        fW = "OPPO",
        CW = "Samsung",
        XW = "Sharp",
        BW = "Sony",
        qW = "Xiaomi",
        RW = "Zebra",
        GW = "Facebook",
        IW = "Chromium OS",
        aW = "Mac OS",
        rW = " Browser",
        zW = function(WW) {
          for (var iW = {}, OW = 0; OW < WW.length; OW++) iW[WW[OW].toUpperCase()] = WW[OW];
          return iW
        },
        FW = function(WW, iW) {
          return typeof WW === wW && -1 !== QW(iW).indexOf(QW(WW))
        },
        QW = function(WW) {
          return WW.toLowerCase()
        },
        Wi = function(WW, iW) {
          if (typeof WW === wW) return WW = WW.replace(/^\s\s*/, ""), typeof iW === LW ? WW : WW.substring(0, 500)
        },
        ii = function(WW, iW) {
          for (var OW, mW, EW, LW, wW, tW, ZW = 0; ZW < iW.length && !wW;) {
            var xW = iW[ZW],
              lW = iW[ZW + 1];
            for (OW = mW = 0; OW < xW.length && !wW && xW[OW];)
              if (wW = xW[OW++].exec(WW))
                for (EW = 0; EW < lW.length; EW++) tW = wW[++mW], typeof(LW = lW[EW]) === cW && LW.length > 0 ? 2 === LW.length ? typeof LW[1] == PW ? this[LW[0]] = LW[1].call(this, tW) : this[LW[0]] = LW[1] : 3 === LW.length ? typeof LW[1] !== PW || LW[1].exec && LW[1].test ? this[LW[0]] = tW ? tW.replace(LW[1], LW[2]) : NW : this[LW[0]] = tW ? LW[1].call(this, tW, LW[2]) : NW : 4 === LW.length && (this[LW[0]] = tW ? LW[3].call(this, tW.replace(LW[1], LW[2])) : NW) : this[LW] = tW || NW;
            ZW += 2
          }
        },
        Oi = function(WW, iW) {
          for (var OW in iW)
            if (typeof iW[OW] === cW && iW[OW].length > 0) {
              for (var mW = 0; mW < iW[OW].length; mW++)
                if (FW(iW[OW][mW], WW)) return "?" === OW ? NW : OW
            } else if (FW(iW[OW], WW)) return "?" === OW ? NW : OW;
          return iW.hasOwnProperty("*") ? iW["*"] : WW
        },
        mi = {
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
        Ei = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [bW, [xW, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [bW, [xW, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [xW, bW],
            [/opios[\/ ]+([\w\.]+)/i],
            [bW, [xW, pW + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [bW, [xW, pW + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [bW, [xW, pW]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [bW, [xW, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [bW, [xW, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [xW, bW],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [bW, [xW, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [bW, [xW, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [bW, [xW, "UC" + hW]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [bW, [xW, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [bW, [xW, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [bW, [xW, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [bW, [xW, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [bW, [xW, "Smart Lenovo " + hW]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [xW, /(.+)/, "$1 Secure " + hW], bW
            ],
            [/\bfocus\/([\w\.]+)/i],
            [bW, [xW, nW + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [bW, [xW, pW + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [bW, [xW, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [bW, [xW, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [bW, [xW, pW + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [bW, [xW, "MIUI" + rW]],
            [/fxios\/([\w\.-]+)/i],
            [bW, [xW, nW]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [bW, [xW, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [xW, /(.+)/, "$1Browser"], bW
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [xW, /(.+)/, "$1" + rW], bW
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [bW, [xW, CW + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [bW, [xW, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [xW, "Sogou Mobile"], bW
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [xW, bW],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [xW],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [bW, xW],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [xW, GW], bW
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [xW, bW],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [bW, [xW, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [bW, [xW, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [bW, [xW, HW + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [xW, HW + " WebView"], bW
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [bW, [xW, "Android " + hW]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [xW, bW],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [bW, [xW, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [bW, xW],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [xW, [bW, Oi, {
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
            [xW, bW],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [xW, "Netscape"], bW
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [xW, bW],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [bW, [xW, nW + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [xW, [bW, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [xW, [bW, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [jW, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [jW, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [jW, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [jW, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [jW, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [jW, /ower/, "", QW]
            ],
            [/ sun4\w[;\)]/i],
            [
              [jW, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [jW, QW]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [ZW, [AW, CW],
              [lW, sW]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [ZW, [AW, CW],
              [lW, kW]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [ZW, [AW, yW],
              [lW, kW]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [ZW, [AW, yW],
              [lW, sW]
            ],
            [/(macintosh);/i],
            [ZW, [AW, yW]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [ZW, [AW, XW],
              [lW, kW]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [ZW, [AW, oW],
              [lW, sW]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [ZW, [AW, oW],
              [lW, kW]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [ZW, [AW, dW],
              [lW, sW]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [ZW, [AW, dW],
              [lW, kW]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [ZW, /_/g, " "],
              [AW, qW],
              [lW, sW]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [ZW, /_/g, " "],
              [AW, qW],
              [lW, kW]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [ZW, [AW, fW],
              [lW, kW]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [ZW, [AW, Oi, {
                OnePlus: ["304", "403", "203"],
                "*": fW
              }],
              [lW, sW]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [ZW, [AW, "Vivo"],
              [lW, kW]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [ZW, [AW, "Realme"],
              [lW, kW]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [ZW, [AW, gW],
              [lW, kW]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [ZW, [AW, gW],
              [lW, sW]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [ZW, [AW, eW],
              [lW, sW]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [ZW, [AW, eW],
              [lW, kW]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [ZW, [AW, "Lenovo"],
              [lW, sW]
            ],
            [/(nokia) (t[12][01])/i],
            [AW, ZW, [lW, sW]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [ZW, /_/g, " "],
              [lW, kW],
              [AW, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [ZW, [AW, uW],
              [lW, sW]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [ZW, [AW, uW],
              [lW, kW]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [ZW, [AW, BW],
              [lW, kW]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [ZW, "Xperia Tablet"],
              [AW, BW],
              [lW, sW]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [ZW, [AW, VW],
              [lW, kW]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [ZW, [AW, YW],
              [lW, sW]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [ZW, /(.+)/g, "Fire Phone $1"],
              [AW, YW],
              [lW, kW]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [ZW, AW, [lW, sW]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [ZW, [AW, JW],
              [lW, kW]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [ZW, [AW, TW],
              [lW, sW]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [ZW, [AW, TW],
              [lW, kW]
            ],
            [/(nexus 9)/i],
            [ZW, [AW, "HTC"],
              [lW, sW]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [AW, [ZW, /_/g, " "],
              [lW, kW]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [ZW, [AW, "TCL"],
              [lW, sW]
            ],
            [/(itel) ((\w+))/i],
            [
              [AW, QW], ZW, [lW, Oi, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [ZW, [AW, "Acer"],
              [lW, sW]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [ZW, [AW, "Meizu"],
              [lW, kW]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [ZW, [AW, "Ulefone"],
              [lW, kW]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [ZW, [AW, "Energizer"],
              [lW, kW]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [ZW, [AW, "Cat"],
              [lW, kW]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [ZW, [AW, "Smartfren"],
              [lW, kW]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [ZW, [AW, "Nothing"],
              [lW, kW]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [ZW, [AW, "Archos"],
              [lW, sW]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [ZW, [AW, "Archos"],
              [lW, kW]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [AW, ZW, [lW, sW]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [AW, ZW, [lW, kW]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [AW, ZW, [lW, sW]],
            [/(surface duo)/i],
            [ZW, [AW, vW],
              [lW, sW]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [ZW, [AW, "Fairphone"],
              [lW, kW]
            ],
            [/(u304aa)/i],
            [ZW, [AW, "AT&T"],
              [lW, kW]
            ],
            [/\bsie-(\w*)/i],
            [ZW, [AW, "Siemens"],
              [lW, kW]
            ],
            [/\b(rct\w+) b/i],
            [ZW, [AW, "RCA"],
              [lW, sW]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [ZW, [AW, "Dell"],
              [lW, sW]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [ZW, [AW, "Verizon"],
              [lW, sW]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [ZW, [AW, "Barnes & Noble"],
              [lW, sW]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [ZW, [AW, "NuVision"],
              [lW, sW]
            ],
            [/\b(k88) b/i],
            [ZW, [AW, "ZTE"],
              [lW, sW]
            ],
            [/\b(nx\d{3}j) b/i],
            [ZW, [AW, "ZTE"],
              [lW, kW]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [ZW, [AW, "Swiss"],
              [lW, kW]
            ],
            [/\b(zur\d{3}) b/i],
            [ZW, [AW, "Swiss"],
              [lW, sW]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [ZW, [AW, "Zeki"],
              [lW, sW]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [AW, "Dragon Touch"], ZW, [lW, sW]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [ZW, [AW, "Insignia"],
              [lW, sW]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [ZW, [AW, "NextBook"],
              [lW, sW]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [AW, "Voice"], ZW, [lW, kW]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [AW, "LvTel"], ZW, [lW, kW]
            ],
            [/\b(ph-1) /i],
            [ZW, [AW, "Essential"],
              [lW, kW]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [ZW, [AW, "Envizen"],
              [lW, sW]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [ZW, [AW, "MachSpeed"],
              [lW, sW]
            ],
            [/\btu_(1491) b/i],
            [ZW, [AW, "Rotor"],
              [lW, sW]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [ZW, [AW, DW],
              [lW, sW]
            ],
            [/(sprint) (\w+)/i],
            [AW, ZW, [lW, kW]],
            [/(kin\.[onetw]{3})/i],
            [
              [ZW, /\./g, " "],
              [AW, vW],
              [lW, kW]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [ZW, [AW, RW],
              [lW, sW]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [ZW, [AW, RW],
              [lW, kW]
            ],
            [/smart-tv.+(samsung)/i],
            [AW, [lW, MW]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [ZW, /^/, "SmartTV"],
              [AW, CW],
              [lW, MW]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [AW, eW],
              [lW, MW]
            ],
            [/(apple) ?tv/i],
            [AW, [ZW, yW + " TV"],
              [lW, MW]
            ],
            [/crkey/i],
            [
              [ZW, HW + "cast"],
              [AW, uW],
              [lW, MW]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [ZW, [AW, YW],
              [lW, MW]
            ],
            [/(shield \w+ tv)/i],
            [ZW, [AW, DW],
              [lW, MW]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [ZW, [AW, XW],
              [lW, MW]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [ZW, [AW, BW],
              [lW, MW]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [ZW, [AW, qW],
              [lW, MW]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [AW, ZW, [lW, MW]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [AW, Wi],
              [ZW, Wi],
              [lW, MW]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [ZW, [lW, MW]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [lW, MW]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [AW, ZW, [lW, UW]],
            [/droid.+; (shield)( bui|\))/i],
            [ZW, [AW, DW],
              [lW, UW]
            ],
            [/(playstation \w+)/i],
            [ZW, [AW, BW],
              [lW, UW]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [ZW, [AW, vW],
              [lW, UW]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [ZW, [AW, CW],
              [lW, KW]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [AW, ZW, [lW, KW]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [ZW, [AW, fW],
              [lW, KW]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [ZW, [AW, yW],
              [lW, KW]
            ],
            [/(opwwe\d{3})/i],
            [ZW, [AW, VW],
              [lW, KW]
            ],
            [/(moto 360)/i],
            [ZW, [AW, gW],
              [lW, KW]
            ],
            [/(smartwatch 3)/i],
            [ZW, [AW, BW],
              [lW, KW]
            ],
            [/(g watch r)/i],
            [ZW, [AW, eW],
              [lW, KW]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [ZW, [AW, RW],
              [lW, KW]
            ],
            [/droid.+; (glass) \d/i],
            [ZW, [AW, uW],
              [lW, KW]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [AW, ZW, [lW, KW]],
            [/; (quest( \d| pro)?)/i],
            [ZW, [AW, GW],
              [lW, KW]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [AW, [lW, SW]],
            [/(aeobc)\b/i],
            [ZW, [AW, YW],
              [lW, SW]
            ],
            [/(homepod).+mac os/i],
            [ZW, [AW, yW],
              [lW, SW]
            ],
            [/windows iot/i],
            [
              [lW, SW]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [ZW, [lW, kW]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [ZW, [lW, sW]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [lW, sW]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [lW, kW]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [ZW, [AW, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [bW, [xW, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [xW, bW],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [bW, [xW, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [xW, bW],
            [/ladybird\//i],
            [
              [xW, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [bW, xW]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [xW, bW],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [xW, [bW, Oi, mi]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [bW, Oi, mi],
              [xW, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [bW, /_/g, "."],
              [xW, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [xW, aW],
              [bW, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [bW, xW],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [xW, /(.+)/, "$1 Touch"], bW
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [xW, bW],
            [/\(bb(10);/i],
            [bW, [xW, JW]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [bW, [xW, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [bW, [xW, nW + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [bW, [xW, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [bW, [xW, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [bW, [xW, HW + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [xW, IW], bW
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [xW, bW],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [xW, "Solaris"], bW
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [xW, bW]
          ]
        },
        Ni = function(WW, iW) {
          if (typeof WW === cW && (iW = WW, WW = NW), !(this instanceof Ni)) return new Ni(WW, iW).getResult();
          var OW = typeof EW !== LW && EW.navigator ? EW.navigator : NW,
            mW = WW || (OW && OW.userAgent ? OW.userAgent : ""),
            UW = OW && OW.userAgentData ? OW.userAgentData : NW,
            MW = iW ? function(WW, iW) {
              var OW = {};
              for (var mW in WW) iW[mW] && iW[mW].length % 2 === 0 ? OW[mW] = iW[mW].concat(WW[mW]) : OW[mW] = WW[mW];
              return OW
            }(Ei, iW) : Ei,
            KW = OW && OW.userAgent == mW;
          return this.getBrowser = function() {
            var WW, iW = {};
            return iW[xW] = NW, iW[bW] = NW, ii.call(iW, mW, MW.browser), iW[tW] = typeof(WW = iW[bW]) === wW ? WW.replace(/[^\d\.]/g, "").split(".")[0] : NW, KW && OW && OW.brave && typeof OW.brave.isBrave == PW && (iW[xW] = "Brave"), iW
          }, this.getCPU = function() {
            var WW = {};
            return WW[jW] = NW, ii.call(WW, mW, MW.cpu), WW
          }, this.getDevice = function() {
            var WW = {};
            return WW[AW] = NW, WW[ZW] = NW, WW[lW] = NW, ii.call(WW, mW, MW.device), KW && !WW[lW] && UW && UW.mobile && (WW[lW] = kW), KW && "Macintosh" == WW[ZW] && OW && typeof OW.standalone !== LW && OW.maxTouchPoints && OW.maxTouchPoints > 2 && (WW[ZW] = "iPad", WW[lW] = sW), WW
          }, this.VA = function() {
            var WW = {};
            return WW[xW] = NW, WW[bW] = NW, ii.call(WW, mW, MW.engine), WW
          }, this.getOS = function() {
            var WW = {};
            return WW[xW] = NW, WW[bW] = NW, ii.call(WW, mW, MW.os), KW && !WW[xW] && UW && UW.platform && "Unknown" != UW.platform && (WW[xW] = UW.platform.replace(/chrome os/i, IW).replace(/macos/i, aW)), WW
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.VA(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return mW
          }, this.setUA = function(WW) {
            return mW = typeof WW === wW && WW.length > 500 ? Wi(WW, 500) : WW, this
          }, this.setUA(mW), this
        };
      Ni.VERSION = "1.0.41", Ni.BROWSER = zW([xW, bW, tW]), Ni.CPU = zW([jW]), Ni.DEVICE = zW([ZW, AW, lW, UW, kW, MW, sW, KW, SW]), Ni.ENGINE = Ni.OS = zW([xW, bW]), typeof iW !== LW ? (WW.exports && (iW = WW.exports = Ni), iW.UAParser = Ni) : OW.amdO ? (mW = function() {
        return Ni
      }.call(iW, OW, iW, WW)) === NW || (WW.exports = mW) : typeof EW !== LW && (EW.UAParser = Ni);
      var Pi = typeof EW !== LW && (EW.jQuery || EW.Zepto);
      if (Pi && !Pi.ua) {
        var Li = new Ni;
        Pi.ua = Li.getResult(), Pi.ua.get = function() {
          return Li.getUA()
        }, Pi.ua.set = function(WW) {
          Li.setUA(WW);
          var iW = Li.getResult();
          for (var OW in iW) Pi.ua[OW] = iW[OW]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);