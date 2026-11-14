export const id = 26;
export const ids = [26];
export const modules = {
  6991: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BaseExtension: () => WM,
      BaseInstrumentation: () => RM,
      BaseTransport: () => qz,
      CSPInstrumentation: () => QC,
      ConsoleInstrumentation: () => sM,
      ConsoleTransport: () => Mz,
      EVENT_CLICK: () => IR,
      EVENT_NAVIGATION: () => oR,
      EVENT_ROUTE_CHANGE: () => cM,
      EVENT_SESSION_EXTEND: () => QR,
      EVENT_SESSION_RESUME: () => fR,
      EVENT_SESSION_START: () => FR,
      EVENT_VIEW_CHANGED: () => lR,
      ErrorsInstrumentation: () => pM,
      FetchTransport: () => oz,
      InternalLoggerLevel: () => OR,
      LogLevel: () => IM,
      MAX_SESSION_PERSISTENCE_TIME: () => yR,
      NavigationInstrumentation: () => xz,
      Observable: () => PM,
      PerformanceInstrumentation: () => Gw,
      PersistentSessionsManager: () => ER,
      SESSION_EXPIRATION_TIME: () => zR,
      SESSION_INACTIVITY_TIME: () => AW,
      STORAGE_KEY: () => CW,
      SessionInstrumentation: () => wM,
      TransportItemType: () => ZC,
      UserActionInstrumentation: () => fC,
      UserActionState: () => gz,
      VERSION: () => MM,
      ViewInstrumentation: () => UM,
      VolatileSessionsManager: () => VR,
      WebVitalsInstrumentation: () => dw,
      allLogLevels: () => lM,
      browserMeta: () => GC,
      buildStackFrame: () => CM,
      captureMetas: () => Uz,
      createInternalLogger: () => rA,
      createPromiseBuffer: () => tA,
      createSession: () => HC,
      deepEqual: () => PR,
      defaultEventDomain: () => wW,
      defaultExceptionType: () => rw,
      defaultGlobalObjectKey: () => cA,
      defaultInternalLoggerLevel: () => GR,
      defaultLogLevel: () => oM,
      faro: () => iR,
      genShortID: () => JR,
      getCurrentTimestamp: () => gM,
      getDataFromSafariExtensions: () => tw,
      getIgnoreUrls: () => LW,
      getInternalFaroFromGlobalObject: () => tR,
      getStackFramesFromError: () => gw,
      getTransportBody: () => Rz,
      getUrlFromResource: () => DW,
      getWebInstrumentations: () => vz,
      globalObject: () => eW,
      initializeFaro: () => qA,
      internalGlobalObjectKey: () => BW,
      isArray: () => kR,
      isBoolean: () => rR,
      isDomError: () => mR,
      isDomException: () => xR,
      isElement: () => KW,
      isElementDefined: () => vR,
      gC: () => GW,
      isError: () => EW,
      isErrorDefined: () => UW,
      isErrorEvent: () => VW,
      isEvent: () => hW,
      isEventDefined: () => pW,
      isFunction: () => jR,
      isInstanceOf: () => IW,
      isInt: () => QW,
      isInternalFaroOnGlobalObject: () => gR,
      isMap: () => OW,
      isMapDefined: () => uW,
      isNull: () => lW,
      isNumber: () => fW,
      isObject: () => XW,
      isPrimitive: () => dW,
      isRegExp: () => aR,
      isString: () => FW,
      isSymbol: () => cR,
      isSyntheticEvent: () => nW,
      isThenable: () => sW,
      isToString: () => PW,
      isTypeof: () => JW,
      isUndefined: () => oW,
      makeCoreConfig: () => kA,
      noop: () => uR,
      osMeta: () => LC,
      parseStacktrace: () => iw,
      sdkMeta: () => DC,
      setInternalFaroOnGlobalObject: () => TW,
      transportItemTypeToBodyKey: () => SC,
      unknownString: () => hM,
      userActionDataAttribute: () => Lw,
      userActionTimeoutDataAttribute: () => Hw
    });
    const wW = "browser",
      CW = "com.grafana.faro.session",
      zR = 144e5,
      AW = 9e5,
      bR = 1e3,
      yR = AW,
      NW = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: yR
      };
    const eW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof MW.g ? MW.g : "undefined" !== typeof self ? self : void 0;
    const BW = "_faroInternal";

    function tR() {
      return eW[BW]
    }

    function TW(WW) {
      WW.config.isolate ? WW.internalLogger.debug("Skipping registering internal Faro instance on global object") : (WW.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(eW, BW, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: WW
      }))
    }

    function gR() {
      return BW in eW
    }
    let iR = {
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

    function YW(WW, RW, MW, wW, CW, zR, AW) {
      return RW.debug("Initializing Faro"), iR = {
          api: zR,
          config: MW,
          instrumentations: AW,
          internalLogger: RW,
          metas: wW,
          pause: CW.pause,
          transports: CW,
          unpatchedConsole: WW,
          unpause: CW.unpause
        }, TW(iR),
        function(WW) {
          if (WW.config.preventGlobalExposure) WW.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (WW.internalLogger.debug(`Registering public faro reference in the global scope using "${WW.config.globalObjectKey}" key`), WW.config.globalObjectKey in eW) return void WW.internalLogger.warn(`Skipping global registration due to key "${WW.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(eW, WW.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: WW
            })
          }
        }(iR), iR
    }

    function JW(WW, RW) {
      return typeof WW === RW
    }

    function PW(WW, RW) {
      return Object.prototype.toString.call(WW) === `[object ${RW}]`
    }

    function IW(WW, RW) {
      try {
        return WW instanceof RW
      } catch (MW) {
        return !1
      }
    }
    const oW = WW => JW(WW, "undefined"),
      lW = WW => JW(WW, "null"),
      FW = WW => JW(WW, "string"),
      fW = WW => JW(WW, "number") && !isNaN(WW) || JW(WW, "bigint"),
      QW = WW => fW(WW) && Number.isInteger(WW),
      rR = WW => JW(WW, "boolean"),
      cR = WW => JW(WW, "symbol"),
      XW = WW => !lW(WW) && JW(WW, "object"),
      jR = WW => JW(WW, "function"),
      kR = WW => PW(WW, "Array"),
      aR = WW => PW(WW, "RegExp"),
      sW = WW => jR(null === WW || void 0 === WW ? void 0 : WW.then),
      dW = WW => !XW(WW) && !jR(WW),
      pW = "undefined" !== typeof Event,
      hW = WW => pW && IW(WW, Event),
      UW = "undefined" !== typeof Error,
      EW = WW => UW && IW(WW, Error),
      VW = WW => PW(WW, "ErrorEvent"),
      mR = WW => PW(WW, "DOMError"),
      xR = WW => PW(WW, "DOMException"),
      vR = "undefined" !== typeof Element,
      KW = WW => vR && IW(WW, Element),
      uW = "undefined" !== typeof Map,
      OW = WW => uW && IW(WW, Map),
      nW = WW => XW(WW) && "nativeEvent" in WW && "preventDefault" in WW && "stopPropagation" in WW;

    function GW(WW) {
      return null == WW || (kR(WW) || FW(WW) ? 0 === WW.length : !!XW(WW) && 0 === Object.keys(WW).length)
    }

    function LW() {
      return iR.transports.transports.flatMap((WW => WW.getIgnoreUrls()))
    }

    function HW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return LW().some((RW => WW && null != WW.match(RW)))
    }

    function DW(WW) {
      return FW(WW) ? WW : WW instanceof URL ? WW.href : !GW(WW) && jR(null === WW || void 0 === WW ? void 0 : WW.toString) ? WW.toString() : void 0
    }
    const qR = "sessionStorage",
      ZW = "localStorage";

    function SW(WW) {
      try {
        let RW;
        RW = window[WW];
        const MW = "__faro_storage_test__";
        return RW.setItem(MW, MW), RW.removeItem(MW), !0
      } catch (MW) {
        var RW;
        return null === (RW = iR.internalLogger) || void 0 === RW || RW.info(`Web storage of type ${WW} is not available. Reason: ${MW}`), !1
      }
    }

    function WR(WW, RW) {
      return zM(RW) ? window[RW].getItem(WW) : null
    }

    function RR(WW, RW, MW) {
      if (zM(MW)) try {
        window[MW].setItem(WW, RW)
      } catch (wW) {}
    }

    function MR(WW, RW) {
      zM(RW) && window[RW].removeItem(WW)
    }
    const wR = SW(ZW),
      CR = SW(qR);

    function zM(WW) {
      return WW === ZW ? wR : WW === qR && CR
    }

    function AR(WW) {
      return AR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, AR(WW)
    }

    function bM(WW) {
      var RW = function(WW, RW) {
        if ("object" != AR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != AR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == AR(RW) ? RW : RW + ""
    }

    function yM(WW, RW, MW) {
      return (RW = bM(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function NR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function eR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? NR(Object(MW), !0).forEach((function(RW) {
          yM(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : NR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function BR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iR;
      var RW, MW, wW;
      const CW = WW.config.sessionTracking,
        zR = null !== (RW = null !== (MW = null === CW || void 0 === CW || null === (wW = CW.sampler) || void 0 === wW ? void 0 : wW.call(CW, {
          metas: WW.metas.value
        })) && void 0 !== MW ? MW : null === CW || void 0 === CW ? void 0 : CW.samplingRate) && void 0 !== RW ? RW : 1,
        AW = "number" === typeof zR ? function(WW) {
          return Math.min(1, Math.max(0, WW))
        }(zR) : 0;
      if (!(AW > 0)) return !1;
      if (1 === AW) return !0;
      try {
        const WW = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === WW || void 0 === WW ? void 0 : WW.getRandomValues)) {
          const RW = new Uint32Array(1);
          return WW.getRandomValues(RW), RW[0] / Math.pow(2, 32) < AW
        }
      } catch (bR) {}
      return Math.random() < AW
    }

    function tM() {
      return Date.now()
    }

    function TR() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function gM() {
      return (new Date).toISOString()
    }

    function iM(WW) {
      return new Date(WW).toISOString()
    }
    const YR = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function JR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const RW = new Uint32Array(WW),
        MW = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === MW || void 0 === MW ? void 0 : MW.getRandomValues) MW.getRandomValues(RW);
      else
        for (let CW = 0; CW < WW; CW++) RW[CW] = Math.floor(4294967296 * Math.random());
      let wW = "";
      for (let CW = 0; CW < WW; CW++) wW += YR[RW[CW] % 59];
      return wW
    }

    function PR(WW, RW) {
      if (WW === RW) return !0;
      if (JW(WW, "number") && isNaN(WW)) return JW(RW, "number") && isNaN(RW);
      const MW = kR(WW),
        wW = kR(RW);
      if (MW !== wW) return !1;
      if (MW && wW) {
        const MW = WW.length;
        if (MW !== RW.length) return !1;
        for (let wW = MW; 0 !== wW--;)
          if (!PR(WW[wW], RW[wW])) return !1;
        return !0
      }
      const CW = XW(WW),
        zR = XW(RW);
      if (CW !== zR) return !1;
      if (WW && RW && CW && zR) {
        const MW = Object.keys(WW),
          wW = Object.keys(RW);
        if (MW.length !== wW.length) return !1;
        for (let WW of MW)
          if (!wW.includes(WW)) return !1;
        for (let CW of MW)
          if (!PR(WW[CW], RW[CW])) return !1;
        return !0
      }
      return !1
    }
    const IR = "click",
      oR = "navigation",
      lR = "view_changed",
      FR = "session_start",
      fR = "session_resume",
      QR = "session_extend",
      rM = "service_name_override",
      cM = "route_change";

    function XR() {
      let {
        sessionId: WW,
        started: RW,
        lastActivity: MW,
        isSampled: wW = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, CW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR;
      var zR;
      const AW = tM(),
        bR = null === (zR = CW.config) || void 0 === zR || null === (zR = zR.sessionTracking) || void 0 === zR ? void 0 : zR.generateSessionId;
      return null == WW && (WW = "function" === typeof bR ? bR() : JR()), {
        sessionId: WW,
        lastActivity: null !== MW && void 0 !== MW ? MW : AW,
        started: null !== RW && void 0 !== RW ? RW : AW,
        isSampled: wW
      }
    }

    function jM(WW) {
      if (null == WW) return !1;
      const RW = tM();
      return RW - WW.started < 144e5 && RW - WW.lastActivity < AW
    }

    function kM(WW) {
      let {
        fetchUserSession: RW,
        storeUserSession: MW,
        adoptSession: wW,
        updateInterval: CW = 0
      } = WW, bR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR, yR = 0;
      return function() {
        let {
          forceSessionExtend: WW = !1,
          refreshActivity: NW = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var eW, BW;
        if (!RW || !MW) return;
        const tR = tM();
        if (!WW && tR < yR && yR - tR <= CW) return;
        const TW = bR.config.sessionTracking,
          gR = null === TW || void 0 === TW ? void 0 : TW.persistent;
        if (gR && !wR || !gR && !CR) return;
        const iR = RW();
        if (yR = Math.min(tR + CW, (null !== (eW = null === iR || void 0 === iR ? void 0 : iR.started) && void 0 !== eW ? eW : tR) + zR, (null !== (BW = null === iR || void 0 === iR ? void 0 : iR.lastActivity) && void 0 !== BW ? BW : tR) + AW), !1 === WW && jM(iR)) {
          var YW;
          NW && MW(eR(eR({}, iR), {}, {
            lastActivity: tR
          }));
          const WW = null === (YW = bR.metas.value.session) || void 0 === YW ? void 0 : YW.id;
          null != wW && null != iR.sessionMeta && iR.sessionId !== WW && wW(iR.sessionMeta)
        } else {
          var JW, PW, IW;
          let WW = sR(XR({
            isSampled: BR(bR)
          }, bR), iR, bR);
          yR = tR + CW, MW(WW), null === (JW = bR.api) || void 0 === JW || JW.setSession(WW.sessionMeta), null === TW || void 0 === TW || null === (PW = TW.onSessionChange) || void 0 === PW || PW.call(TW, null !== (IW = null === iR || void 0 === iR ? void 0 : iR.sessionMeta) && void 0 !== IW ? IW : null, WW.sessionMeta)
        }
      }
    }

    function aM(WW) {
      let RW, {
          fetchUserSession: MW,
          storeUserSession: wW,
          updateInterval: CW = 0
        } = WW,
        zR = 0;
      return WW => {
        const AW = tM();
        if (WW === RW && AW < zR && zR - AW <= CW) return;
        RW = WW, zR = AW + CW;
        const bR = MW();
        (null === bR || void 0 === bR ? void 0 : bR.sessionId) === WW && jM(bR) && wW(eR(eR({}, bR), {}, {
          lastActivity: AW
        }))
      }
    }

    function sR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iR;
      var wW, CW, zR, AW, bR, yR;
      const NW = eR(eR({}, WW), {}, {
          sessionMeta: {
            id: WW.sessionId,
            attributes: pR(eR(eR(eR({}, null === (wW = MW.config.sessionTracking) || void 0 === wW || null === (wW = wW.session) || void 0 === wW ? void 0 : wW.attributes), null !== (CW = null === (zR = MW.metas.value.session) || void 0 === zR ? void 0 : zR.attributes) && void 0 !== CW ? CW : {}), {}, {
              isSampled: WW.isSampled.toString()
            }))
          }
        }),
        eW = null !== (AW = null === (bR = MW.metas.value.session) || void 0 === bR ? void 0 : bR.overrides) && void 0 !== AW ? AW : null === RW || void 0 === RW || null === (yR = RW.sessionMeta) || void 0 === yR ? void 0 : yR.overrides;
      GW(eW) || (NW.sessionMeta.overrides = eW);
      const BW = null === RW || void 0 === RW ? void 0 : RW.sessionId;
      return null != BW && (NW.sessionMeta.attributes.previousSession = BW), NW
    }

    function dR(WW) {
      let {
        fetchUserSession: RW,
        storeUserSession: MW
      } = WW, wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR, CW = !1;
      return function(WW) {
        if (CW) return;
        const zR = WW.session,
          AW = RW();
        let bR = null === zR || void 0 === zR ? void 0 : zR.id;
        const yR = null === zR || void 0 === zR ? void 0 : zR.attributes,
          NW = null === zR || void 0 === zR ? void 0 : zR.overrides,
          eW = null === AW || void 0 === AW ? void 0 : AW.sessionMeta,
          BW = null === eW || void 0 === eW ? void 0 : eW.overrides,
          tR = !!NW && !PR(NW, BW),
          TW = !!yR && !PR(yR, null === eW || void 0 === eW ? void 0 : eW.attributes);
        if (zR && bR !== (null === AW || void 0 === AW ? void 0 : AW.sessionId) || TW || tR) {
          var gR, iR;
          const WW = null != AW && bR === AW.sessionId,
            RW = sR(WW ? AW : XR({
              sessionId: bR,
              isSampled: BR(wW)
            }, wW), AW, wW),
            zR = null === AW || void 0 === AW || null === (gR = AW.sessionMeta) || void 0 === gR || null === (gR = gR.attributes) || void 0 === gR ? void 0 : gR.previousSession;
          WW && null != zR && zR !== RW.sessionId && (RW.sessionMeta.attributes.previousSession = zR), (null === (iR = RW.sessionMeta.attributes) || void 0 === iR ? void 0 : iR.previousSession) === RW.sessionId && delete RW.sessionMeta.attributes.previousSession, MW(RW),
            function(WW, RW) {
              let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var CW, zR, AW;
              if (!RW) return;
              const bR = MW.serviceName,
                yR = null !== (CW = null !== (zR = wW.serviceName) && void 0 !== zR ? zR : null === (AW = WW.metas.value.app) || void 0 === AW ? void 0 : AW.name) && void 0 !== CW ? CW : "";
              bR && bR !== yR && WW.api.pushEvent(rM, {
                serviceName: bR,
                previousServiceName: yR
              })
            }(wW, tR, NW, BW), CW = !0;
          try {
            wW.api.setSession(RW.sessionMeta)
          } finally {
            CW = !1
          }
        }
      }
    }

    function pR(WW) {
      const RW = {};
      for (const MW of Object.keys(WW)) {
        const wW = WW[MW];
        void 0 !== wW && (RW[MW] = wW)
      }
      return RW
    }

    function hR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== WW && void 0 !== WW ? WW : {}, function() {
        const WW = new WeakSet;
        return function(RW, MW) {
          if (XW(MW) && null !== MW) {
            if (WW.has(MW)) return null;
            WW.add(MW)
          }
          return MW
        }
      }())
    }

    function UR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const RW = {};
      for (const [MW, wW] of Object.entries(WW)) RW[MW] = XW(wW) && null !== wW ? hR(wW) : String(wW);
      return RW
    }
    var ER = class WW {
      constructor() {
        var RW = this;
        let MW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iR;
        this.context = MW, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = WW => {
          this.adopting = !0;
          try {
            var RW;
            null === (RW = this.context.api) || void 0 === RW || RW.setSession(WW)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: WW = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return RW.updateUserSession({
            refreshActivity: WW
          })
        }, this.recordActivity = aM({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          updateInterval: bR
        }), this.updateUserSession = kM({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: bR
        }, MW), this.init()
      }
      static removeUserSession() {
        MR(CW, WW.storageTypeLocal)
      }
      static storeUserSession(RW) {
        RR(CW, hR(RW), WW.storageTypeLocal)
      }
      static fetchUserSession() {
        const RW = WR(CW, WW.storageTypeLocal);
        return RW ? JSON.parse(RW) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var WW;
            this.updateSession({
              refreshActivity: !1
            });
            const RW = null === (WW = this.context.api) || void 0 === WW || null === (WW = WW.getSession()) || void 0 === WW ? void 0 : WW.id;
            RW && this.recordActivity(RW)
          }
        })), this.context.metas.addListener(dR({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession
        }, this.context))
      }
    };
    ER.storageTypeLocal = ZW;
    var VR = class WW {
      constructor() {
        var RW = this;
        let MW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iR;
        this.context = MW, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: WW = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return RW.updateUserSession({
            refreshActivity: WW
          })
        }, this.recordActivity = aM({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          updateInterval: bR
        }), this.updateUserSession = kM({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession,
          updateInterval: bR
        }, MW), this.init()
      }
      static removeUserSession() {
        MR(CW, WW.storageTypeSession)
      }
      static storeUserSession(RW) {
        RR(CW, hR(RW), WW.storageTypeSession)
      }
      static fetchUserSession() {
        const RW = WR(CW, WW.storageTypeSession);
        return RW ? JSON.parse(RW) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var WW;
            this.updateSession({
              refreshActivity: !1
            });
            const RW = null === (WW = this.context.api) || void 0 === WW || null === (WW = WW.getSession()) || void 0 === WW ? void 0 : WW.id;
            RW && this.recordActivity(RW)
          }
        })), this.context.metas.addListener(dR({
          fetchUserSession: WW.fetchUserSession,
          storeUserSession: WW.storeUserSession
        }, this.context))
      }
    };
    VR.storageTypeSession = qR;
    const mM = new WeakMap;

    function xM(WW) {
      let RW = mM.get(WW);
      if (!RW) {
        let MW = [],
          wW = [];
        RW = {
          addSessionUpdateListener: WW => {
            MW.push(WW)
          },
          removeSessionUpdateListener: WW => {
            MW = MW.filter((RW => RW !== WW))
          },
          notifySessionUpdate: WW => {
            MW.forEach((RW => RW(WW)))
          },
          shouldCapture: () => wW.every((WW => WW())),
          addCaptureFilter: WW => {
            wW.push(WW)
          },
          removeCaptureFilter: WW => {
            wW = wW.filter((RW => RW !== WW))
          }
        }, mM.set(WW, RW)
      }
      return RW
    }
    var vM = class {
      constructor(WW, RW, MW) {
        this.metas = WW, this.transports = RW, this.onActivate = MW, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = WW => {
          var RW, MW, wW;
          const CW = this.pending;
          var zR, AW;
          if ("overrides" === WW.type) return void(this.pending = {
            reset: null !== (zR = null === CW || void 0 === CW ? void 0 : CW.reset) && void 0 !== zR && zR,
            inheritOverrides: null === (AW = null === CW || void 0 === CW ? void 0 : CW.inheritOverrides) || void 0 === AW || AW,
            session: eR(eR({}, null === CW || void 0 === CW ? void 0 : CW.session), {}, {
              overrides: eR(eR({}, null === CW || void 0 === CW ? void 0 : CW.session.overrides), WW.overrides)
            })
          });
          const bR = WW.session,
            yR = GW(bR) || null != bR && "id" in bR && !bR.id,
            NW = null !== (RW = null === bR || void 0 === bR ? void 0 : bR.overrides) && void 0 !== RW ? RW : null === CW || void 0 === CW ? void 0 : CW.session.overrides;
          this.pending = {
            reset: yR || !(null === bR || void 0 === bR ? void 0 : bR.id) && null !== (MW = null === CW || void 0 === CW ? void 0 : CW.reset) && void 0 !== MW && MW,
            inheritOverrides: !(!WW.overrides && void 0 !== (null === bR || void 0 === bR ? void 0 : bR.overrides)) && (null === (wW = null === CW || void 0 === CW ? void 0 : CW.inheritOverrides) || void 0 === wW || wW),
            session: {
              id: null === bR || void 0 === bR ? void 0 : bR.id,
              attributes: (null === bR || void 0 === bR ? void 0 : bR.attributes) && eR({}, bR.attributes),
              overrides: WW.overrides ? eR(eR({}, null === CW || void 0 === CW ? void 0 : CW.session.overrides), WW.overrides) : NW && eR({}, NW)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var WW, RW;
        this.waiting = !0, xM(this.metas).addSessionUpdateListener(this.recordUpdate), xM(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (WW = (RW = this.metas).addCaptureListener) || void 0 === WW || WW.call(RW, this.activate), this.activate()
      }
      destroy() {
        var WW, RW;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), xM(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (WW = (RW = this.metas).removeCaptureListener) || void 0 === WW || WW.call(RW, this.activate), xM(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function KR(WW) {
      return (null === WW || void 0 === WW ? void 0 : WW.persistent) ? ER : VR
    }

    function uR() {}
    let OR = function(WW) {
      return WW[WW.OFF = 0] = "OFF", WW[WW.ERROR = 1] = "ERROR", WW[WW.WARN = 2] = "WARN", WW[WW.INFO = 3] = "INFO", WW[WW.VERBOSE = 4] = "VERBOSE", WW
    }({});
    const nR = {
        debug: uR,
        error: uR,
        info: uR,
        prefix: "Faro",
        warn: uR
      },
      GR = 1;

    function LR(WW) {
      return LR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, LR(WW)
    }

    function HR(WW) {
      var RW = function(WW, RW) {
        if ("object" != LR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != LR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == LR(RW) ? RW : RW + ""
    }

    function DR(WW, RW, MW) {
      return (RW = HR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function qM(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function ZR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? qM(Object(MW), !0).forEach((function(RW) {
          DR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : qM(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }
    const SR = ZR({}, console);
    var WM = class {
        constructor() {
          this.unpatchedConsole = SR, this.internalLogger = nR, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
          this.internalLogger.debug(`${this.name}\n`, ...RW)
        }
        logInfo() {
          for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
          this.internalLogger.info(`${this.name}\n`, ...RW)
        }
        logWarn() {
          for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
          this.internalLogger.warn(`${this.name}\n`, ...RW)
        }
        logError() {
          for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
          this.internalLogger.error(`${this.name}\n`, ...RW)
        }
      },
      RM = class extends WM {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const MM = "2.12.1";
    var wM = class extends RM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = MM, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(WW) {
        var RW;
        const MW = WW.session;
        if (MW && MW.id !== (null === (RW = this.notifiedSession) || void 0 === RW ? void 0 : RW.id)) {
          var wW;
          if (this.isAdoptingSession()) return void(this.notifiedSession = MW);
          if (this.notifiedSession && this.notifiedSession.id === (null === (wW = MW.attributes) || void 0 === wW ? void 0 : wW.previousSession)) return this.api.pushEvent(QR, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = MW);
          this.notifiedSession = MW, this.api.pushEvent(FR, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(WW, RW, MW) {
        const wW = null === MW || void 0 === MW ? void 0 : MW.session;
        let CW, zR, AW = WW.fetchUserSession();
        if (RW.persistent && RW.maxSessionPersistenceTime && AW) {
          const WW = tM();
          AW.lastActivity < WW - RW.maxSessionPersistenceTime && (ER.removeUserSession(), AW = null)
        }
        const bR = jM(AW);
        if ((null === MW || void 0 === MW ? void 0 : MW.reset) || !bR || (null === wW || void 0 === wW ? void 0 : wW.id) && wW.id !== (null === AW || void 0 === AW ? void 0 : AW.sessionId)) {
          var yR, NW, eW, BW, tR, TW;
          zR = XR({
            sessionId: (null === MW || void 0 === MW ? void 0 : MW.reset) ? void 0 : null !== (yR = null === wW || void 0 === wW ? void 0 : wW.id) && void 0 !== yR ? yR : null === (NW = RW.session) || void 0 === NW ? void 0 : NW.id,
            isSampled: BR(this)
          }, this);
          const WW = zR.sessionId,
            gR = MW && bR ? null === AW || void 0 === AW || null === (eW = AW.sessionMeta) || void 0 === eW ? void 0 : eW.overrides : void 0,
            iR = gR ? eR(eR({}, null === (BW = RW.session) || void 0 === BW ? void 0 : BW.overrides), gR) : null === (tR = RW.session) || void 0 === tR ? void 0 : tR.overrides;
          zR.sessionMeta = eR({
            id: WW,
            attributes: eR({
              isSampled: zR.isSampled.toString()
            }, null === (TW = RW.session) || void 0 === TW ? void 0 : TW.attributes)
          }, iR ? {
            overrides: iR
          } : {}), CW = FR
        } else {
          var gR, iR;
          const WW = null === AW || void 0 === AW ? void 0 : AW.sessionId;
          zR = XR({
            sessionId: WW,
            isSampled: AW.isSampled || !1,
            started: null === AW || void 0 === AW ? void 0 : AW.started
          }, this);
          const MW = null === AW || void 0 === AW ? void 0 : AW.sessionMeta,
            wW = eR(eR({}, null === (gR = RW.session) || void 0 === gR ? void 0 : gR.overrides), null === MW || void 0 === MW ? void 0 : MW.overrides);
          zR.sessionMeta = eR(eR({}, RW.session), {}, {
            id: WW,
            attributes: eR(eR(eR({}, null === (iR = RW.session) || void 0 === iR ? void 0 : iR.attributes), null === MW || void 0 === MW ? void 0 : MW.attributes), {}, {
              isSampled: zR.isSampled.toString()
            }),
            overrides: wW
          }), CW = fR
        }
        var YW;
        if (wW && (zR.sessionMeta = eR(eR({}, zR.sessionMeta), {}, {
            attributes: eR(eR(eR({}, null === (YW = zR.sessionMeta) || void 0 === YW ? void 0 : YW.attributes), wW.attributes), {}, {
              isSampled: zR.isSampled.toString()
            })
          }), wW.overrides)) {
          const WW = (null === MW || void 0 === MW ? void 0 : MW.inheritOverrides) ? eR(eR({}, zR.sessionMeta.overrides), wW.overrides) : wW.overrides;
          Object.keys(WW).length > 0 ? zR.sessionMeta.overrides = WW : delete zR.sessionMeta.overrides
        }
        return {
          initialSession: zR,
          lifecycleType: CW
        }
      }
      registerBeforeSendHook(WW) {
        var RW;
        this.beforeSendHook = RW => {
          var MW, wW;
          const CW = null === (MW = RW.meta.session) || void 0 === MW ? void 0 : MW.id;
          CW && !this.transports.isPaused() && WW(CW);
          const zR = null === (wW = RW.meta.session) || void 0 === wW ? void 0 : wW.attributes;
          if (zR && "true" === (null === zR || void 0 === zR ? void 0 : zR.isSampled)) {
            var AW;
            let WW = JSON.parse(JSON.stringify(RW));
            const MW = null === (AW = WW.meta.session) || void 0 === AW ? void 0 : AW.attributes;
            var bR;
            if (null === MW || void 0 === MW || delete MW.isSampled, 0 === Object.keys(null !== MW && void 0 !== MW ? MW : {}).length) null === (bR = WW.meta.session) || void 0 === bR || delete bR.attributes;
            return WW
          }
          return null
        }, null === (RW = this.transports) || void 0 === RW || RW.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var WW;
        this.logDebug("init session instrumentation");
        const RW = document.prerendering;
        var MW;
        if ((null === (WW = this.config.sessionTracking) || void 0 === WW ? void 0 : WW.enabled) && (RW || this.prerenderSession)) return null !== (MW = this.prerenderSession) && void 0 !== MW || (this.prerenderSession = new vM(this.metas, this.transports, (WW => {
          this.prerenderSession = void 0, this.initializeSession(WW)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(WW) {
        const RW = this.config.sessionTracking;
        if (null === RW || void 0 === RW ? void 0 : RW.enabled) {
          var MW, wW;
          const CW = KR(RW),
            zR = new CW(this);
          this.isAdoptingSession = zR.isAdopting, this.registerBeforeSendHook(zR.recordActivity);
          const {
            initialSession: AW,
            lifecycleType: bR
          } = this.createInitialSession(CW, RW, WW);
          CW.storeUserSession(AW);
          const yR = AW.sessionMeta;
          this.notifiedSession = yR, this.api.setSession(yR), this.captureListener = () => {
            this.transports.isPaused() || zR.updateSession({
              refreshActivity: !1
            })
          }, null === (MW = (wW = this.metas).addCaptureListener) || void 0 === MW || MW.call(wW, this.captureListener), bR === FR && this.api.pushEvent(FR, {}, void 0, {
            skipDedupe: !0
          }), bR === fR && this.api.pushEvent(fR, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var WW, RW, MW;
        (null === (WW = this.prerenderSession) || void 0 === WW || WW.destroy(), this.captureListener) && (null === (RW = (MW = this.metas).removeCaptureListener) || void 0 === RW || RW.call(MW, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function CM(WW, RW, MW, wW) {
      const CW = {
        filename: WW || document.location.href,
        function: RW || "?"
      };
      return void 0 !== MW && (CW.lineno = MW), void 0 !== wW && (CW.colno = wW), CW
    }
    const zw = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      AM = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      bw = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      yw = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      NM = "safari-extension",
      eM = "safari-web-extension",
      BM = /Minified React error #\d+;/i;

    function tw(WW, RW) {
      const MW = null === WW || void 0 === WW ? void 0 : WW.includes(NM),
        wW = !MW && (null === WW || void 0 === WW ? void 0 : WW.includes("safari-web-extension"));
      return MW || wW ? [(null === WW || void 0 === WW ? void 0 : WW.includes("@")) ? WW.split("@")[0] : WW, MW ? `${NM}:${RW}` : `${eM}:${RW}`] : [WW, RW]
    }
    const TM = 1024;

    function gw(WW) {
      let RW = [];
      WW.stacktrace ? RW = WW.stacktrace.split("\n").filter(((WW, RW) => RW % 2 === 0)) : WW.stack && (RW = WW.stack.split("\n"));
      const MW = RW.reduce(((RW, MW, wW) => {
        if (MW.length > TM) return RW;
        let CW, zR, AW, bR, yR;
        if (CW = zw.exec(MW)) {
          if (zR = CW[1], AW = CW[2], bR = CW[3], yR = CW[4], null === AW || void 0 === AW ? void 0 : AW.startsWith("eval")) {
            const WW = AM.exec(AW);
            WW && (AW = WW[1], bR = WW[2], yR = WW[3])
          }
          AW = (null === AW || void 0 === AW ? void 0 : AW.startsWith("address at ")) ? AW.substring(11) : AW, [zR, AW] = tw(zR, AW)
        } else if (CW = bw.exec(MW)) {
          if (zR = CW[1], AW = CW[3], bR = CW[4], yR = CW[5], AW && AW.includes(" > eval")) {
            const WW = yw.exec(AW);
            WW && (zR = zR || "eval", AW = WW[1], bR = WW[2])
          } else 0 === wW && !yR && fW(WW.columnNumber) && (yR = String(WW.columnNumber + 1));
          [zR, AW] = tw(zR, AW)
        }
        return (AW || zR) && RW.push(CM(AW, zR, bR ? Number(bR) : void 0, yR ? Number(yR) : void 0)), RW
      }), []);
      return BM.test(WW.message) ? MW.slice(1) : MW
    }

    function iw(WW) {
      return {
        frames: gw(WW)
      }
    }
    const YM = "http-request-start",
      JM = "http-request-end";
    var PM = class WW {
      constructor() {
        this.subscribers = []
      }
      subscribe(WW) {
        return this.subscribers.push(WW), {
          unsubscribe: () => this.unsubscribe(WW)
        }
      }
      unsubscribe(WW) {
        this.subscribers = this.subscribers.filter((RW => RW !== WW))
      }
      notify(WW) {
        this.subscribers.forEach((RW => RW(WW)))
      }
      first() {
        const RW = new WW,
          MW = WW => {
            RW.notify(WW), wW.unsubscribe()
          },
          wW = this.subscribe(MW),
          CW = RW.unsubscribe.bind(RW);
        return this.withUnsubscribeOverride(RW, CW, MW)
      }
      takeWhile(RW) {
        const MW = new WW,
          wW = WW => {
            RW(WW) ? MW.notify(WW) : MW.unsubscribe(wW)
          };
        this.subscribe(wW);
        const CW = MW.unsubscribe.bind(MW);
        return this.withUnsubscribeOverride(MW, CW, wW)
      }
      filter(RW) {
        const MW = new WW,
          wW = WW => {
            RW(WW) && MW.notify(WW)
          };
        this.subscribe(wW);
        const CW = MW.unsubscribe.bind(MW);
        return this.withUnsubscribeOverride(MW, CW, wW)
      }
      merge() {
        const RW = new WW,
          MW = [];
        for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
        CW.forEach((WW => {
          const wW = WW.subscribe((WW => {
            RW.notify(WW)
          }));
          MW.push(wW)
        }));
        const AW = RW.unsubscribeAll.bind(RW);
        return RW.unsubscribe = () => {
          MW.forEach((WW => WW.unsubscribe())), AW()
        }, RW
      }
      withUnsubscribeOverride(WW, RW, MW) {
        return WW.unsubscribe = WW => {
          RW(WW), this.unsubscribe(MW)
        }, WW
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let IM = function(WW) {
      return WW.TRACE = "trace", WW.DEBUG = "debug", WW.INFO = "info", WW.LOG = "log", WW.WARN = "warn", WW.ERROR = "error", WW
    }({});
    const oM = "log",
      lM = ["trace", "debug", "info", "log", "warn", "error"];
    let FM, fM = !1;
    const QM = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      rw = "Error",
      cwW = WW => WW.map((WW => XW(WW) ? hR(WW) : String(WW))).join(" ");

    function XM(WW) {
      let RW, MW, wW, CW, zR = [];
      if (VW(WW) && WW.error) RW = WW.error.message, MW = WW.error.name, zR = gw(WW.error);
      else if ((wW = mR(WW)) || xR(WW)) {
        const {
          name: CW,
          message: zR
        } = WW;
        MW = null !== CW && void 0 !== CW ? CW : wW ? "DOMError" : "DOMException", RW = zR ? `${MW}: ${zR}` : MW
      } else EW(WW) ? (MW = WW.name, RW = WW.message, zR = gw(WW)) : (XW(WW) || (CW = hW(WW))) && (MW = CW ? WW.constructor.name : void 0, RW = `Non-Error exception captured with keys: ${Object.keys(WW)}`);
      return [RW, MW, zR]
    }

    function jw(WW) {
      const [RW, MW, wW, CW, zR] = WW;
      let AW, bR, yR = [];
      const NW = FW(RW),
        eW = CM(MW, "?", wW, CW);
      return zR || !NW ? ([AW, bR, yR] = XM(null !== zR && void 0 !== zR ? zR : RW), 0 === yR.length && (yR = [eW])) : NW && ([AW, bR] = function(WW) {
        var RW, MW;
        const wW = WW.match(QM),
          CW = null !== (RW = null === wW || void 0 === wW ? void 0 : wW[1]) && void 0 !== RW ? RW : rw;
        return [null !== (MW = null === wW || void 0 === wW ? void 0 : wW[2]) && void 0 !== MW ? MW : WW, CW]
      }(RW), yR = [eW]), {
        value: AW,
        type: bR,
        stackFrames: yR
      }
    }

    function kw(WW, RW) {
      return EW(WW[0]) ? jw(WW) : {
        value: RW(WW)
      }
    }
    const aw = WW => WW.map((WW => {
      try {
        return String(WW)
      } catch (RW) {
        return ""
      }
    })).join(" ");
    var sM = class WW extends RM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = MM, this.errorSerializer = aw
      }
      initialize() {
        var RW, MW;
        const wW = this.config.consoleInstrumentation,
          CW = (null === wW || void 0 === wW ? void 0 : wW.serializeErrors) || !!(null === wW || void 0 === wW ? void 0 : wW.errorSerializer);
        this.errorSerializer = CW ? null !== (RW = null === wW || void 0 === wW ? void 0 : wW.errorSerializer) && void 0 !== RW ? RW : cwW : aw;
        const zR = null !== (MW = null === wW || void 0 === wW ? void 0 : wW.disabledLevels) && void 0 !== MW ? MW : WW.defaultDisabledLevels,
          AW = function(WW) {
            if (FM || (FM = new PM), !fM) {
              const RW = null !== WW && void 0 !== WW ? WW : SR;
              lM.forEach((WW => {
                console[WW] = function() {
                  for (var MW, wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
                  FM.notify({
                    type: "console",
                    level: WW,
                    args: CW
                  }), null === (MW = RW[WW]) || void 0 === MW || MW.apply(console, CW)
                }
              })), fM = !0
            }
            return FM
          }(this.unpatchedConsole);
        this.subscription = AW.subscribe((RW => {
          let {
            level: MW,
            args: CW
          } = RW;
          if (!zR.includes(MW)) try {
            if (MW !== IM.ERROR || (null === wW || void 0 === wW ? void 0 : wW.consoleErrorAsLog))
              if (MW === IM.ERROR && (null === wW || void 0 === wW ? void 0 : wW.consoleErrorAsLog)) {
                const {
                  value: RW,
                  type: wW,
                  stackFrames: zR
                } = kw(CW, this.errorSerializer);
                this.api.pushLog(RW ? [WW.consoleErrorPrefix + RW] : CW, {
                  level: MW,
                  context: {
                    value: null !== RW && void 0 !== RW ? RW : "",
                    type: null !== wW && void 0 !== wW ? wW : "",
                    stackFrames: (null === zR || void 0 === zR ? void 0 : zR.length) ? cwW(zR) : ""
                  }
                })
              } else this.api.pushLog(CW, {
                level: MW
              });
            else {
              const {
                value: RW,
                type: MW,
                stackFrames: wW
              } = kw(CW, this.errorSerializer);
              if (RW && !MW && !wW) return void this.api.pushError(new Error(WW.consoleErrorPrefix + RW));
              this.api.pushError(new Error(WW.consoleErrorPrefix + RW), {
                type: MW,
                stackFrames: wW
              })
            }
          } catch (AW) {
            this.logError(AW)
          }
        }))
      }
      destroy() {
        var WW;
        null === (WW = this.subscription) || void 0 === WW || WW.unsubscribe(), this.subscription = void 0
      }
    };
    sM.defaultDisabledLevels = [IM.DEBUG, IM.TRACE, IM.LOG], sM.consoleErrorPrefix = "console.error: ";
    const dM = [];
    var pM = class extends RM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = MM
      }
      initialize() {
        this.logDebug("Initializing"),
          function(WW) {
            const RW = window.onerror;
            window.onerror = function() {
              for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
              try {
                const {
                  value: RW,
                  type: MW,
                  stackFrames: CW
                } = jw(wW), zR = wW[4];
                if (RW) {
                  const wW = {
                    type: MW,
                    stackFrames: CW
                  };
                  null != zR && (wW.originalError = zR), WW.pushError(new Error(RW), wW)
                }
              } finally {
                null === RW || void 0 === RW || RW.apply(window, wW)
              }
            }
          }(this.api),
          function(WW) {
            const RW = RW => {
              var MW;
              let wW, CW, zR = RW;
              if (zR.reason) zR = RW.reason;
              else if (null === (MW = RW.detail) || void 0 === MW ? void 0 : MW.reason) {
                var AW;
                zR = null === (AW = RW.detail) || void 0 === AW ? void 0 : AW.reason
              }
              let bR = [];
              dW(zR) ? (wW = `Non-Error promise rejection captured with value: ${String(zR)}`, CW = "UnhandledRejection") : [wW, CW, bR] = XM(zR), wW && WW.pushError(new Error(wW), {
                type: CW,
                stackFrames: bR
              })
            };
            window.addEventListener("unhandledrejection", RW), dM.push(RW)
          }(this.api)
      }
    };
    const hM = "unknown";
    var UM = class extends RM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = MM, this.waitingForActivation = !1, this.sendViewChangedEvent = WW => {
          var RW;
          if (this.waitingForActivation || document.prerendering) return;
          const MW = WW.view;
          if (MW && MW.name !== (null === (RW = this.notifiedView) || void 0 === RW ? void 0 : RW.name)) {
            var wW, CW, zR;
            const WW = null !== (wW = null === (CW = this.notifiedView) || void 0 === CW ? void 0 : CW.name) && void 0 !== wW ? wW : hM;
            this.notifiedView = MW, this.api.pushEvent(lR, {
              fromView: WW,
              toView: null !== (zR = MW.name) && void 0 !== zR ? zR : hM
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
    class EM {
      t;
      o = 0;
      i = [];
      l(WW) {
        if (WW.hadRecentInput) return;
        const RW = this.i[0],
          MW = this.i.at(-1);
        this.o && RW && MW && WW.startTime - MW.startTime < 1e3 && WW.startTime - RW.startTime < 5e3 ? (this.o += WW.value, this.i.push(WW)) : (this.o = WW.value, this.i = [WW]), this.t?.(WW)
      }
    }
    const VM = () => {
        const WW = performance.getEntriesByType("navigation")[0];
        if (WW && WW.responseStart > 0 && WW.responseStart < performance.now()) return WW
      },
      mw = WW => {
        if ("loading" === document.readyState) return "loading";
        const RW = VM();
        if (RW) {
          if (WW < RW.domInteractive) return "loading";
          if (0 === RW.domContentLoadedEventStart || WW < RW.domContentLoadedEventStart) return "dom-interactive";
          if (0 === RW.domComplete || WW < RW.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      xw = WW => {
        const RW = WW.nodeName;
        return 1 === WW.nodeType ? RW.toLowerCase() : RW.toUpperCase().replace(/^#/, "")
      },
      vw = WW => {
        let RW = "";
        try {
          for (; 9 !== WW?.nodeType;) {
            const MW = WW,
              wW = MW.id ? "#" + MW.id : [xw(MW), ...Array.from(MW.classList ?? []).sort()].join(".");
            if (RW.length + wW.length > 99) return RW || wW;
            if (RW = RW ? wW + ">" + RW : wW, MW.id) break;
            WW = MW.parentNode
          }
        } catch {}
        return RW
      },
      KM = new WeakMap;

    function uM(WW, RW) {
      let MW = KM.get(RW);
      return MW || (MW = new WeakMap, KM.set(RW, MW)), MW.get(WW) || MW.set(WW, new RW), MW.get(WW)
    }
    let OM = -1;
    const nM = () => OM,
      GM = WW => {
        addEventListener("pageshow", (RW => {
          RW.persisted && (OM = RW.timeStamp, WW(RW))
        }), !0)
      },
      LM = (WW, RW, MW, wW) => {
        let CW, zR;
        return AW => {
          RW.value >= 0 && (AW || wW) && (zR = RW.value - (CW ?? 0), (zR || void 0 === CW) && (CW = RW.value, RW.delta = zR, RW.rating = ((WW, RW) => WW > RW[1] ? "poor" : WW > RW[0] ? "needs-improvement" : "good")(RW.value, MW), WW(RW)))
        }
      },
      HM = WW => {
        requestAnimationFrame((() => requestAnimationFrame((() => WW()))))
      },
      DM = () => VM()?.activationStart ?? 0;
    let qw = -1;
    const ZM = new Set,
      SM = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Ww = WW => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === WW.type)
            for (const WW of ZM) WW();
          isFinite(qw) || (qw = "visibilitychange" === WW.type ? WW.timeStamp : 0, removeEventListener("prerenderingchange", Ww, !0))
        }
      },
      Rw = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (qw = 1 / 0), qw < 0) {
          const WW = DM(),
            RW = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((RW => "hidden" === RW.name && RW.startTime >= WW))?.startTime;
          qw = RW ?? SM(), addEventListener("visibilitychange", Ww, !0), addEventListener("prerenderingchange", Ww, !0), GM((() => {
            setTimeout((() => {
              qw = SM()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return qw
          },
          onHidden(WW) {
            ZM.add(WW)
          }
        }
      },
      Mw = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0,
          AW = arguments.length > 6 ? arguments[6] : void 0;
        const bR = VM(),
          yR = bR?.navigationId || 0;
        let NW = "navigate";
        return MW ? NW = MW : nM() >= 0 ? NW = "back-forward-cache" : bR && (document.prerendering || DM() > 0 ? NW = "prerender" : document.wasDiscarded ? NW = "restore" : bR.type && (NW = bR.type.replace(/_/g, "-"))), {
          name: WW,
          value: RW,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: NW,
          navigationId: wW || yR,
          navigationInteractionId: CW,
          navigationURL: zR || bR?.name,
          navigationStartTime: AW || 0
        }
      },
      ww = function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const wW = WW.filter((WW => PerformanceObserver.supportedEntryTypes.includes(WW)));
          if (wW.length > 0) {
            const WW = new PerformanceObserver((WW => {
              queueMicrotask((() => {
                const MW = WW.getEntries();
                wW.length > 1 && MW.sort(((WW, RW) => WW.startTime + WW.duration - (RW.startTime + RW.duration))), RW(MW)
              }))
            }));
            for (const RW of wW) WW.observe({
              type: RW,
              buffered: !0,
              ...MW
            });
            return WW
          }
        } catch {}
      },
      Cw = WW => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && WW && WW.reportSoftNavs,
      zC = (WW, RW) => {
        if (WW.set(RW.navigationId, RW), WW.size > 2) {
          const RW = WW.keys().next().value;
          void 0 !== RW && WW.delete(RW)
        }
      },
      Aw = WW => {
        let RW = !1;
        return () => {
          RW || (WW(), RW = !0)
        }
      };
    class bC {
      u
    }
    const yC = WW => {
        document.prerendering ? addEventListener("prerenderingchange", WW, !0) : WW()
      },
      Nw = [1800, 3e3],
      ew = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const MW = Cw(RW);
        yC((() => {
          const wW = uM(RW, bC),
            CW = Rw();
          let zR, AW = Mw("FCP");
          const bR = ww(["paint"], (WW => {
            for (const RW of WW) "first-contentful-paint" === RW.name && (bR.disconnect(), RW.startTime < CW.firstHiddenTime && (AW.value = Math.max(RW.startTime - DM(), 0), AW.entries.push(RW), AW.navigationId = RW.navigationId || AW.navigationId, zR(!0)))
          }));
          bR && (zR = LM(WW, AW, Nw, RW.reportAllChanges), GM((MW => {
            AW = Mw("FCP", -1, "back-forward-cache", AW.navigationId, AW.navigationInteractionId, AW.navigationURL, nM()), zR = LM(WW, AW, Nw, RW.reportAllChanges), HM((() => {
              AW.value = performance.now() - MW.timeStamp, zR(!0)
            }))
          }))), MW && ww(["soft-navigation"], (MW => {
            MW.forEach((MW => {
              wW.u && MW.navigationId && zC(wW.u, MW);
              const CW = Math.max((MW.presentationTime || MW.paintTime || 0) - MW.startTime, 0);
              AW = Mw("FCP", CW, "soft-navigation", MW.navigationId, MW.interactionId, MW.name, MW.startTime), zR = LM(WW, AW, Nw, RW.reportAllChanges), zR(!0)
            }))
          }), RW)
        }))
      },
      Bw = [.1, .25],
      tC = WW => WW.find((WW => 1 === WW.node?.nodeType)) || WW[0];
    let Tw = 0,
      gC = 1 / 0,
      iC = 0;
    const Yw = WW => {
      for (const RW of WW) RW.interactionId && (gC = Math.min(gC, RW.interactionId), iC = Math.max(iC, RW.interactionId), Tw = iC ? (iC - gC) / 7 + 1 : 0)
    };
    let Jw;
    const Pw = () => Jw ? Tw : performance.interactionCount ?? 0;
    class Iw {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Pw() - this.h
      }
      D() {
        this.h = Pw(), this.v.length = 0, this.p.clear()
      }
      S(WW) {
        const RW = this.T(),
          MW = Math.min(this.v.length - 1, Math.floor(RW / 50));
        return !RW || -1 !== MW || "soft-navigation" !== WW && "back-forward-cache" !== WW ? this.v[MW] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(WW) {
        if (this.m?.(WW), !WW.interactionId) return;
        const RW = this.v.at(-1);
        let MW = this.p.get(WW.interactionId);
        if (MW || this.v.length < 10 || WW.duration > RW.k) {
          if (MW ? WW.duration > MW.k ? (MW.entries = [WW], MW.k = WW.duration) : WW.duration === MW.k && WW.startTime === MW.entries[0].startTime && MW.entries.push(WW) : (MW = {
              id: WW.interactionId,
              entries: [WW],
              k: WW.duration
            }, this.p.set(MW.id, MW), this.v.push(MW)), this.v.sort(((WW, RW) => RW.k - WW.k)), this.v.length > 10) {
            const WW = this.v.splice(10);
            for (const RW of WW) this.p.delete(RW.id)
          }
          this.M?.(MW)
        }
      }
    }
    const ow = WW => {
        const RW = "requestIdleCallback" in globalThis ? 1e3 : 0,
          MW = globalThis.requestIdleCallback || setTimeout,
          wW = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) WW();
        else {
          const CW = Aw(WW);
          let zR = -1;
          const AW = () => {
            wW(zR), CW()
          };
          addEventListener("visibilitychange", AW, {
            once: !0,
            capture: !0
          }), zR = MW((() => {
            removeEventListener("visibilitychange", AW, {
              capture: !0
            }), CW()
          }), {
            timeout: RW
          })
        }
      },
      lw = [200, 500],
      Fw = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const MW = uM(RW = Object.assign({}, RW), Iw);
        let wW = [],
          CW = [],
          zR = 0;
        const AW = new WeakMap,
          bR = new WeakMap;
        let yR = !1;
        const NW = () => {
            yR || (yR = !0, ow(eW))
          },
          eW = () => {
            const WW = new Set(MW.v.map((WW => AW.get(WW.entries[0])))),
              RW = CW.length - 10;
            CW = CW.filter(((MW, wW) => wW >= RW || WW.has(MW)));
            const bR = new Set;
            for (const MW of CW) {
              const WW = BW(MW.startTime, MW.processingEnd);
              for (const RW of WW) bR.add(RW)
            }
            const NW = wW.length - 10;
            wW = wW.filter(((WW, RW) => bR.has(WW) || RW >= NW && WW.startTime > zR)), yR = !1
          };
        MW.m = WW => {
          const MW = WW.startTime + WW.duration;
          let wW;
          zR = Math.max(zR, WW.processingEnd);
          for (let zR = CW.length - 1; zR >= 0; zR--) {
            const AW = CW[zR];
            if (Math.abs(MW - AW.renderTime) <= 8) {
              wW = AW, wW.startTime = Math.min(WW.startTime, wW.startTime), wW.processingStart = Math.min(WW.processingStart, wW.processingStart), wW.processingEnd = Math.max(WW.processingEnd, wW.processingEnd), RW.includeProcessedEventEntries && wW.entries.push(WW);
              break
            }
          }
          wW || (wW = {
            startTime: WW.startTime,
            processingStart: WW.processingStart,
            processingEnd: WW.processingEnd,
            renderTime: MW,
            entries: RW.includeProcessedEventEntries ? [WW] : []
          }, CW.push(wW)), WW.interactionId && AW.set(WW, wW), NW()
        }, MW.M = WW => {
          if (!bR.get(WW)) {
            const MW = WW.entries.find((WW => WW.target))?.target;
            if (MW) {
              const wW = RW.generateTarget?.(MW) ?? vw(MW);
              bR.set(WW, wW)
            } else {
              const RW = WW.entries.find((WW => WW.targetSelector))?.targetSelector;
              RW && bR.set(WW, RW)
            }
          }
        };
        const BW = (WW, RW) => {
          const MW = [];
          for (const CW of wW)
            if (!(CW.startTime + CW.duration < WW)) {
              if (CW.startTime > RW) break;
              MW.push(CW)
            } return MW
        };
        ww(["long-animation-frame"], (WW => {
            wW = wW.concat(WW), NW()
          }), RW),
          function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const MW = Rw();
            yC((() => {
              "interactionCount" in performance || Jw || (Jw = ww(["event"], Yw, {
                durationThreshold: 0
              }));
              let wW, CW = Mw("INP");
              const zR = uM(RW, Iw),
                AW = (MW, AW, bR, yR, NW) => {
                  zR.D(), CW = Mw("INP", -1, MW, AW, bR, yR, NW), wW = LM(WW, CW, lw, RW.reportAllChanges)
                },
                bR = () => {
                  const WW = zR.S(CW.navigationType);
                  WW && WW.k !== CW.value && (CW.value = WW.k, CW.entries = WW.entries, wW())
                },
                yR = WW => {
                  bR(), wW(!0), AW("soft-navigation", WW.navigationId, WW.interactionId, WW.name, WW.startTime)
                },
                NW = function(WW) {
                  let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  ow((() => {
                    for (const RW of WW) "soft-navigation" !== RW.entryType ? zR.l(RW) : yR(RW);
                    bR(), RW && wW(!0)
                  }))
                },
                eW = ["event", "first-input"];
              Cw(RW) && eW.push("soft-navigation");
              const BW = ww(eW, NW, {
                ...RW,
                durationThreshold: RW.durationThreshold ?? 40
              });
              wW = LM(WW, CW, lw, RW.reportAllChanges), BW && (MW.onHidden((() => {
                NW(BW.takeRecords(), !0)
              })), GM((() => {
                AW("back-forward-cache", CW.navigationId, CW.navigationInteractionId, CW.navigationURL, nM())
              })))
            }))
          }((RW => {
            WW((WW => {
              if (0 === WW.entries.length) {
                const RW = WW.navigationStartTime || 0,
                  MW = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: WW.value,
                    loadState: mw(RW)
                  };
                return Object.assign(WW, {
                  attribution: MW
                })
              }
              const RW = WW.entries[0],
                wW = AW.get(RW),
                CW = Math.max(wW.processingStart, RW.startTime),
                zR = Math.max(RW.startTime + RW.duration, CW),
                yR = Math.min(wW.processingEnd, zR),
                NW = wW.entries.sort(((WW, RW) => WW.processingStart - RW.processingStart)),
                eW = BW(RW.startTime, yR),
                tR = MW.p.get(RW.interactionId),
                TW = {
                  interactionTarget: bR.get(tR),
                  interactionType: RW.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: RW.startTime,
                  nextPaintTime: zR,
                  processedEventEntries: NW,
                  longAnimationFrameEntries: eW,
                  inputDelay: CW - RW.startTime,
                  processingDuration: yR - CW,
                  presentationDelay: zR - yR,
                  loadState: mw(RW.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (WW => {
                const RW = WW.interactionTime,
                  MW = WW.nextPaintTime;
                if (!WW.longAnimationFrameEntries?.length || !RW || !MW) return;
                const wW = WW.inputDelay,
                  CW = WW.processingDuration;
                let zR, AW, bR = 0,
                  yR = 0,
                  NW = 0,
                  eW = 0;
                for (const TW of WW.longAnimationFrameEntries) {
                  yR = yR + TW.startTime + TW.duration - TW.styleAndLayoutStart;
                  for (const WW of TW.scripts) {
                    const MW = WW.startTime + WW.duration;
                    if (MW < RW) continue;
                    const NW = MW - Math.max(RW, WW.startTime),
                      BW = WW.duration ? NW / WW.duration * WW.forcedStyleAndLayoutDuration : 0;
                    bR += NW - BW, yR += BW, NW > eW && (AW = WW.startTime < RW + wW ? "input-delay" : WW.startTime >= RW + wW + CW ? "presentation-delay" : "processing-duration", zR = WW, eW = NW)
                  }
                }
                const BW = WW.longAnimationFrameEntries.at(-1),
                  tR = BW ? BW.startTime + BW.duration : 0;
                tR >= RW + wW + CW && (NW = MW - tR), zR && AW && (WW.longestScript = {
                  entry: zR,
                  subpart: AW,
                  intersectingDuration: eW
                }), WW.totalScriptDuration = bR, WW.totalStyleAndLayoutDuration = yR, WW.totalPaintDuration = NW, WW.totalUnattributedDuration = MW - RW - bR - yR - NW
              })(TW), Object.assign(WW, {
                attribution: TW
              })
            })(RW))
          }), RW)
      };
    class fw {
      m;
      u;
      l(WW) {
        this.m?.(WW)
      }
    }
    const Qw = [2500, 4e3];
    let rC = 50;
    const cC = [];
    ww(["resource"], (WW => {
      for (const RW of WW) cC.push(RW), cC.length > rC && cC.shift()
    }));
    const Xw = [800, 1800],
      jC = WW => {
        document.prerendering ? yC((() => jC(WW))) : "complete" !== document.readyState ? addEventListener("load", (() => jC(WW)), !0) : setTimeout(WW)
      },
      kC = "load_state",
      aC = "time_to_first_byte";
    var sw = class {
        constructor(WW, RW) {
          this.corePushMeasurement = WW, this.webVitalConfig = RW
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var WW;
          ! function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const MW = uM(RW = Object.assign({}, RW), EM),
              wW = new WeakMap;
            MW.t = WW => {
                if (WW?.sources?.length) {
                  const MW = tC(WW.sources),
                    CW = MW?.node;
                  if (CW) {
                    const WW = RW.generateTarget?.(CW) ?? vw(CW);
                    wW.set(MW, WW)
                  }
                }
              },
              function(WW) {
                let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const MW = Rw();
                ew(Aw((() => {
                  let wW, CW = Mw("CLS", 0);
                  const zR = uM(RW, EM),
                    AW = (MW, AW, bR, yR, NW) => {
                      CW = Mw("CLS", 0, MW, AW, bR, yR, NW), zR.o = 0, wW = LM(WW, CW, Bw, RW.reportAllChanges)
                    },
                    bR = function() {
                      let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      zR.o > CW.value && (CW.value = zR.o, CW.entries = zR.i), wW(WW)
                    },
                    yR = WW => {
                      bR(!0), AW("soft-navigation", WW.navigationId, WW.interactionId, WW.name, WW.startTime)
                    },
                    NW = WW => {
                      for (const RW of WW) "soft-navigation" !== RW.entryType ? zR.l(RW) : yR(RW);
                      bR()
                    },
                    eW = ["layout-shift"];
                  Cw(RW) && eW.push("soft-navigation");
                  const BW = ww(eW, NW);
                  BW && (wW = LM(WW, CW, Bw, RW.reportAllChanges), MW.onHidden((() => {
                    NW(BW.takeRecords()), wW(!0)
                  })), GM((() => {
                    AW("back-forward-cache", CW.navigationId, CW.navigationInteractionId, CW.navigationURL, nM()), HM(wW)
                  })), setTimeout(wW))
                })))
              }((RW => {
                WW((WW => {
                  let RW = {};
                  if (WW.entries.length) {
                    const MW = WW.entries.reduce(((WW, RW) => WW.value > RW.value ? WW : RW));
                    if (MW?.sources?.length) {
                      const WW = tC(MW.sources);
                      WW && (RW = {
                        largestShiftTarget: wW.get(WW),
                        largestShiftTime: MW.startTime,
                        largestShiftValue: MW.value,
                        largestShiftSource: WW,
                        largestShiftEntry: MW,
                        loadState: mw(MW.startTime)
                      })
                    }
                  }
                  return Object.assign(WW, {
                    attribution: RW
                  })
                })(RW))
              }), RW)
          }((WW => {
            const {
              loadState: RW,
              largestShiftValue: MW,
              largestShiftTime: wW,
              largestShiftTarget: CW
            } = WW.attribution, zR = this.buildInitialValues(WW);
            this.addIfPresent(zR, "largest_shift_value", MW), this.addIfPresent(zR, "largest_shift_time", wW);
            const AW = this.buildInitialContext(WW);
            this.addIfPresent(AW, kC, RW), this.addIfPresent(AW, "largest_shift_target", CW), this.pushMeasurement(zR, AW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureFCP() {
          var WW;
          ! function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const MW = uM(RW = Object.assign({}, RW), bC);
            Cw(RW) && (MW.u = new Map), ew((RW => {
              WW((WW => {
                let RW = {
                  timeToFirstByte: 0,
                  firstByteToFCP: WW.value,
                  loadState: mw(nM())
                };
                if ("soft-navigation" !== WW.navigationType) {
                  if (WW.entries.length) {
                    const MW = VM(),
                      wW = WW.entries.at(-1);
                    if (MW) {
                      const CW = MW.responseStart,
                        zR = MW.activationStart || 0,
                        AW = Math.max(0, CW - zR);
                      RW = {
                        timeToFirstByte: AW,
                        firstByteToFCP: WW.value - AW,
                        loadState: mw(WW.entries[0].startTime),
                        navigationEntry: MW,
                        fcpEntry: wW
                      }
                    }
                  }
                } else {
                  const wW = MW.u?.get(WW.navigationId);
                  wW && (RW = {
                    timeToFirstByte: 0,
                    firstByteToFCP: WW.value,
                    loadState: "complete",
                    navigationEntry: wW
                  })
                }
                return Object.assign(WW, {
                  attribution: RW
                })
              })(RW))
            }), RW)
          }((WW => {
            const {
              firstByteToFCP: RW,
              timeToFirstByte: MW,
              loadState: wW
            } = WW.attribution, CW = this.buildInitialValues(WW);
            this.addIfPresent(CW, "first_byte_to_fcp", RW), this.addIfPresent(CW, aC, MW);
            const zR = this.buildInitialContext(WW);
            this.addIfPresent(zR, kC, wW), this.pushMeasurement(CW, zR)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureINP() {
          var WW;
          Fw((WW => {
            var RW;
            const {
              interactionTime: MW,
              presentationDelay: wW,
              inputDelay: CW,
              processingDuration: zR,
              nextPaintTime: AW,
              loadState: bR,
              interactionTarget: yR,
              interactionType: NW,
              totalScriptDuration: eW,
              totalStyleAndLayoutDuration: BW,
              totalPaintDuration: tR,
              totalUnattributedDuration: TW,
              longestScript: gR
            } = WW.attribution, iR = this.buildInitialValues(WW);
            this.addIfPresent(iR, "interaction_time", MW), this.addIfPresent(iR, "presentation_delay", wW), this.addIfPresent(iR, "input_delay", CW), this.addIfPresent(iR, "processing_duration", zR), this.addIfPresent(iR, "next_paint_time", AW), this.addNumberIfDefined(iR, "total_script_duration", eW), this.addNumberIfDefined(iR, "total_style_and_layout_duration", BW), this.addNumberIfDefined(iR, "total_paint_duration", tR), this.addNumberIfDefined(iR, "total_unattributed_duration", TW), this.addNumberIfDefined(iR, "longest_script_intersecting_duration", null === gR || void 0 === gR ? void 0 : gR.intersectingDuration);
            const YW = this.buildInitialContext(WW);
            this.addIfPresent(YW, kC, bR), this.addIfPresent(YW, "interaction_target", yR), this.addIfPresent(YW, "interaction_type", NW), this.addIfPresent(YW, "longest_script_subpart", null === gR || void 0 === gR ? void 0 : gR.subpart), this.addIfPresent(YW, "longest_script_invoker_type", null === gR || void 0 === gR ? void 0 : gR.entry.invokerType), (null === (RW = this.webVitalConfig) || void 0 === RW ? void 0 : RW.trackAttributionSources) && (this.addIfPresent(YW, "longest_script_invoker", null === gR || void 0 === gR ? void 0 : gR.entry.invoker), this.addIfPresent(YW, "longest_script_source_url", null === gR || void 0 === gR ? void 0 : gR.entry.sourceURL), this.addIfPresent(YW, "longest_script_source_function_name", null === gR || void 0 === gR ? void 0 : gR.entry.sourceFunctionName), this.addIfPresent(YW, "longest_script_source_char_position", void 0 !== (null === gR || void 0 === gR ? void 0 : gR.entry.sourceCharPosition) ? String(gR.entry.sourceCharPosition) : void 0)), this.pushMeasurement(iR, YW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureLCP() {
          var WW;
          ! function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (RW = Object.assign({}, RW)).resourceBufferSize && (rC = RW.resourceBufferSize);
            const MW = uM(RW, fw),
              wW = new WeakMap;
            Cw(RW) && (MW.u = new Map), MW.m = WW => {
                const MW = WW.element;
                if (MW) {
                  const CW = RW.generateTarget?.(MW) ?? vw(MW);
                  wW.set(WW, CW)
                } else WW.id && wW.set(WW, `#${WW.id}`)
              },
              function(WW) {
                let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  MW = !1;
                const wW = Cw(RW);
                yC((() => {
                  let CW, zR = Rw(),
                    AW = Mw("LCP");
                  const bR = uM(RW, fw),
                    yR = (wW, bR, yR, NW, eW) => {
                      AW = Mw("LCP", -1, wW, bR, yR, NW, eW), CW = LM(WW, AW, Qw, RW.reportAllChanges), MW = !1, "soft-navigation" === wW && (zR = Rw(!0))
                    },
                    NW = WW => {
                      bR.u && WW.navigationId && zC(bR.u, WW), MW || CW(!0), yR("soft-navigation", WW.navigationId, WW.interactionId, WW.name, WW.startTime);
                      const RW = WW.getLargestInteractionContentfulPaint?.();
                      RW && eW([RW])
                    },
                    eW = WW => {
                      RW.reportAllChanges || wW || (WW = WW.slice(-1));
                      for (const RW of WW) {
                        if (!RW) continue;
                        if ("soft-navigation" === RW.entryType) {
                          NW(RW);
                          continue
                        }
                        let WW = 0,
                          MW = [],
                          wW = RW.startTime;
                        if ("largest-contentful-paint" === RW.entryType) WW = Math.max(RW.startTime - DM(), 0), bR.l(RW), MW = [RW];
                        else if ("interaction-contentful-paint" === RW.entryType) {
                          const CW = RW;
                          if (!AW.navigationId) continue;
                          if ("interactionId" in CW && CW.interactionId != AW.navigationInteractionId) continue;
                          wW = CW.largestContentfulPaint?.renderTime || 0, WW = Math.max(wW - RW.startTime, 0), CW.largestContentfulPaint && (bR.l(CW.largestContentfulPaint), MW = [CW.largestContentfulPaint])
                        }
                        wW < zR.firstHiddenTime && (AW.value = WW, AW.entries = MW, CW())
                      }
                    },
                    BW = ["largest-contentful-paint"];
                  wW && BW.push("interaction-contentful-paint", "soft-navigation");
                  const tR = ww(BW, eW);
                  if (tR) {
                    CW = LM(WW, AW, Qw, RW.reportAllChanges);
                    const zR = ["keydown", "click", "visibilitychange"],
                      bR = WW => {
                        if (WW.isTrusted && !MW) {
                          const WW = AW.id;
                          ow((() => {
                            if (!MW) {
                              if (!wW) {
                                tR.disconnect();
                                for (const WW of zR) removeEventListener(WW, bR, {
                                  capture: !0
                                })
                              }
                              WW === AW.id && (MW = !0, CW(!0))
                            }
                          }))
                        }
                      };
                    for (const WW of zR) addEventListener(WW, bR, {
                      capture: !0
                    });
                    GM((wW => {
                      yR("back-forward-cache", AW.navigationId, AW.navigationInteractionId, AW.navigationURL, nM()), CW = LM(WW, AW, Qw, RW.reportAllChanges), HM((() => {
                        AW.value = performance.now() - wW.timeStamp, MW = !0, CW(!0)
                      }))
                    }))
                  }
                }))
              }((RW => {
                WW((WW => {
                  let RW = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: WW.value
                  };
                  if (WW.entries.length) {
                    const CW = WW.entries.at(-1),
                      zR = WW => WW.name === CW.url && (WW.requestStart || WW.startTime) <= CW.startTime,
                      AW = CW.url && (cC.findLast(zR) || performance.getEntriesByType("resource").findLast(zR));
                    let bR;
                    RW.target = wW.get(CW), RW.lcpEntry = CW, CW.url && (RW.url = CW.url), AW && (RW.lcpResourceEntry = AW);
                    let yR = 0,
                      NW = 0;
                    if ("soft-navigation" !== WW.navigationType ? (bR = VM(), yR = bR?.activationStart ?? 0, NW = bR?.responseStart ?? 0) : (yR = WW.navigationStartTime || 0, bR = MW.u?.get(WW.navigationId)), bR) {
                      const MW = Math.max(0, NW - yR),
                        wW = Math.max(MW, AW ? (AW.requestStart || AW.startTime) - yR : 0),
                        CW = Math.min(WW.value, Math.max(wW, AW ? AW.responseEnd - yR : 0));
                      RW = {
                        ...RW,
                        timeToFirstByte: MW,
                        resourceLoadDelay: wW - MW,
                        resourceLoadDuration: CW - wW,
                        elementRenderDelay: WW.value - CW,
                        navigationEntry: bR
                      }
                    }
                  }
                  return Object.assign(WW, {
                    attribution: RW
                  })
                })(RW))
              }), RW)
          }((WW => {
            var RW;
            const {
              elementRenderDelay: MW,
              resourceLoadDelay: wW,
              resourceLoadDuration: CW,
              timeToFirstByte: zR,
              target: AW,
              url: bR,
              lcpResourceEntry: yR
            } = WW.attribution, NW = this.buildInitialValues(WW);
            this.addIfPresent(NW, "element_render_delay", MW), this.addIfPresent(NW, "resource_load_delay", wW), this.addIfPresent(NW, "resource_load_duration", CW), this.addIfPresent(NW, aC, zR);
            const eW = this.buildInitialContext(WW);
            this.addIfPresent(eW, "element", AW), (null === (RW = this.webVitalConfig) || void 0 === RW ? void 0 : RW.trackAttributionSources) && (this.addIfPresent(eW, "resource_url", bR), this.addIfPresent(eW, "resource_delivery_type", null === yR || void 0 === yR ? void 0 : yR.deliveryType), this.addIfPresent(eW, "resource_initiator_type", null === yR || void 0 === yR ? void 0 : yR.initiatorType)), this.pushMeasurement(NW, eW)
          }), {
            reportAllChanges: null === (WW = this.webVitalConfig) || void 0 === WW ? void 0 : WW.reportAllChanges
          })
        }
        measureTTFB() {
          var WW;
          ! function(WW) {
            ! function(WW) {
              let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const MW = Cw(RW);
              let wW = Mw("TTFB"),
                CW = LM(WW, wW, Xw, RW.reportAllChanges);
              jC((() => {
                const zR = VM();
                if (zR) {
                  const AW = zR.responseStart;
                  wW.value = Math.max(AW - DM(), 0), wW.entries = [zR], CW(!0), GM((() => {
                    wW = Mw("TTFB", 0, "back-forward-cache", wW.navigationId, wW.navigationInteractionId, wW.navigationURL, nM()), CW = LM(WW, wW, Xw, RW.reportAllChanges), CW(!0)
                  })), MW && ww(["soft-navigation"], (MW => {
                    MW.forEach((MW => {
                      MW.navigationId && (wW = Mw("TTFB", 0, "soft-navigation", MW.navigationId, MW.interactionId, MW.name, MW.startTime), wW.entries = [MW], CW = LM(WW, wW, Xw, RW.reportAllChanges), CW(!0))
                    }))
                  }), RW)
                }
              }))
            }((RW => {
              WW((WW => {
                const RW = WW.entries[0];
                let MW = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: RW
                };
                if (WW.entries.length && RW instanceof PerformanceNavigationTiming) {
                  const wW = RW.activationStart || 0,
                    CW = Math.max((RW.workerStart || RW.fetchStart || 0) - wW, 0),
                    zR = Math.max(RW.domainLookupStart - wW, 0),
                    AW = Math.max(RW.connectStart - wW, 0),
                    bR = Math.max(RW.connectEnd - wW, 0);
                  MW = {
                    waitingDuration: CW,
                    cacheDuration: zR - CW,
                    dnsDuration: AW - zR,
                    connectionDuration: bR - AW,
                    requestDuration: WW.value - bR,
                    navigationEntry: RW
                  }
                }
                return Object.assign(WW, {
                  attribution: MW
                })
              })(RW))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((WW => {
            const {
              dnsDuration: RW,
              connectionDuration: MW,
              requestDuration: wW,
              waitingDuration: CW,
              cacheDuration: zR
            } = WW.attribution, AW = this.buildInitialValues(WW);
            this.addIfPresent(AW, "dns_duration", RW), this.addIfPresent(AW, "connection_duration", MW), this.addIfPresent(AW, "request_duration", wW), this.addIfPresent(AW, "waiting_duration", CW), this.addIfPresent(AW, "cache_duration", zR);
            const bR = this.buildInitialContext(WW);
            this.pushMeasurement(AW, bR)
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
          var RW;
          const MW = null !== (RW = WR("com.grafana.faro.lastNavigationId", qR)) && void 0 !== RW ? RW : hM;
          return {
            id: WW.id,
            rating: WW.rating,
            navigation_type: WW.navigationType,
            navigation_entry_id: MW
          }
        }
        pushMeasurement(WW, RW) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: WW
          }, {
            context: RW
          })
        }
        addIfPresent(WW, RW, MW) {
          MW && (WW[RW] = MW)
        }
        addNumberIfDefined(WW, RW, MW) {
          void 0 !== MW && (WW[RW] = MW)
        }
      },
      dw = class extends RM {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = MM
        }
        initialize() {
          this.logDebug("Initializing"), new sw(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const pw = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function hw() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const RW of WW)
        if ("traceparent" === RW.name) {
          if (!pw.test(RW.description)) continue;
          const [, WW, MW] = RW.description.split("-");
          if (null != WW && null != MW) return {
            traceId: WW,
            spanId: MW
          };
          break
        }
    }

    function Uw(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: MW,
        monoNow: wW
      } = RW;
      return Math.min(MW, MW - (wW - WW))
    }

    function Ew(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [MW, wW] of Object.entries(RW)) {
        const RW = WW[MW];
        return null != RW && (kR(wW) ? wW.includes(RW) : RW === wW)
      }
      return !0
    }

    function Vw(WW) {
      const {
        connectEnd: RW,
        connectStart: MW,
        decodedBodySize: wW,
        domainLookupEnd: CW,
        domainLookupStart: zR,
        duration: AW,
        encodedBodySize: bR,
        fetchStart: yR,
        initiatorType: NW,
        name: eW,
        nextHopProtocol: BW,
        redirectEnd: tR,
        redirectStart: TW,
        renderBlockingStatus: gR,
        requestStart: iR,
        responseEnd: YW,
        responseStart: JW,
        responseStatus: PW,
        secureConnectionStart: IW,
        transferSize: oW,
        workerStart: lW
      } = WW;
      return {
        name: eW,
        httpHost: xC(eW),
        duration: vC(AW),
        tcpHandshakeTime: vC(RW - MW),
        dnsLookupTime: vC(CW - zR),
        tlsNegotiationTime: vC(RW - IW),
        responseStatus: vC(PW),
        redirectTime: vC(tR - TW),
        requestTime: vC(JW - iR),
        responseTime: vC(YW - JW),
        fetchTime: vC(YW - yR),
        serviceWorkerTime: vC(lW > 0 ? yR - lW : 0),
        decodedBodySize: vC(wW),
        encodedBodySize: vC(bR),
        cacheHitStatus: function() {
          let WW = "fullLoad";
          0 === oW ? wW > 0 && (WW = "cache") : null != PW ? 304 === PW && (WW = "conditionalFetch") : bR > 0 && oW < bR && (WW = "conditionalFetch");
          return WW
        }(),
        renderBlockingStatus: vC(gR),
        protocol: BW,
        initiatorType: NW,
        visibilityState: document.visibilityState,
        ttfb: vC(JW - iR),
        transferSize: vC(oW)
      }
    }

    function mC(WW) {
      const {
        activationStart: RW,
        domComplete: MW,
        domContentLoadedEventEnd: wW,
        domContentLoadedEventStart: CW,
        domInteractive: zR,
        fetchStart: AW,
        loadEventEnd: bR,
        loadEventStart: yR,
        responseStart: NW,
        type: eW
      } = WW, BW = function() {
        var WW;
        return null != (null === (WW = performance.timing) || void 0 === WW ? void 0 : WW.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return eR(eR({}, Vw(WW)), {}, {
        pageLoadTime: vC(MW - AW),
        documentParsingTime: vC(BW ? zR - BW : null),
        domProcessingTime: vC(MW - zR),
        domContentLoadHandlerTime: vC(wW - CW),
        onLoadTime: vC(bR - yR),
        ttfb: vC(Math.max(NW - (null !== RW && void 0 !== RW ? RW : 0), 0)),
        type: eW
      })
    }

    function xC(WW) {
      try {
        return new URL(WW).host || hM
      } catch (RW) {
        return hM
      }
    }

    function vC(WW) {
      return null == WW ? hM : "number" === typeof WW ? Math.round(WW > 0 ? WW : 0).toString() : WW.toString()
    }
    const Kw = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function uw(WW, RW, MW, wW, CW, zR, AW) {
      try {
        var bR = WW[zR](AW),
          yR = bR.value
      } catch (WW) {
        return void MW(WW)
      }
      bR.done ? RW(yR) : Promise.resolve(yR).then(wW, CW)
    }

    function Ow(WW) {
      return function() {
        var RW = this,
          MW = arguments;
        return new Promise((function(wW, CW) {
          var zR = WW.apply(RW, MW);

          function AW(WW) {
            uw(zR, wW, CW, AW, bR, "next", WW)
          }

          function bR(WW) {
            uw(zR, wW, CW, AW, bR, "throw", WW)
          }
          AW(void 0)
        }))
      }
    }
    const nw = new PM;
    var Gw = class extends RM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = MM
      }
      initialize() {
        var WW = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let RW = !1;
        const MW = () => {
          ! function(WW) {
            if ("complete" === document.readyState) WW();
            else {
              const RW = () => {
                "complete" === document.readyState && (WW(), document.removeEventListener("readystatechange", RW))
              };
              document.addEventListener("readystatechange", RW)
            }
          }(Ow((function*() {
            if (RW) return;
            const MW = WW.api.pushEvent,
              {
                faroNavigationId: wW
              } = yield function(WW) {
                let RW;
                const MW = new Promise((WW => {
                  RW = WW
                }));
                return new PerformanceObserver((MW => {
                  var wW;
                  const [CW] = MW.getEntries();
                  if (null == CW || HW(CW.name)) return;
                  const zR = CW.toJSON();
                  let AW = hw(null === zR || void 0 === zR ? void 0 : zR.serverTiming);
                  const bR = null !== (wW = WR("com.grafana.faro.lastNavigationId", qR)) && void 0 !== wW ? wW : hM,
                    yR = eR(eR({}, mC(zR)), {}, {
                      faroNavigationId: JR(),
                      faroPreviousNavigationId: bR
                    });
                  RR("com.grafana.faro.lastNavigationId", yR.faroNavigationId, qR), WW("faro.performance.navigation", yR, void 0, {
                    spanContext: AW,
                    timestampOverwriteMs: Uw(zR.startTime)
                  }), RW(yR)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), MW
              }(MW);
            RW || null == wW || function(WW, RW, MW, wW) {
              const CW = wW.trackResources;
              new PerformanceObserver((wW => {
                const zR = wW.getEntries(),
                  AW = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const bR of zR) {
                  if (HW(bR.name)) continue;
                  null === MW || void 0 === MW || MW.notify({
                    type: "resource"
                  });
                  const wW = bR.toJSON();
                  let zR = hw(null === wW || void 0 === wW ? void 0 : wW.serverTiming);
                  (null == CW && Ew(wW, Kw) || CW) && RW("faro.performance.resource", eR(eR({}, Vw(wW)), {}, {
                    faroNavigationId: WW,
                    faroResourceId: JR()
                  }), void 0, {
                    spanContext: zR,
                    timestampOverwriteMs: Uw(wW.startTime, AW)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(wW, MW, nw, WW.config)
          })))
        };
        this.cancelInitialization = () => {
          RW = !0, document.removeEventListener("prerenderingchange", MW)
        }, document.prerendering ? document.addEventListener("prerenderingchange", MW, {
          once: !0
        }) : MW()
      }
      destroy() {
        var WW;
        null === (WW = this.cancelInitialization) || void 0 === WW || WW.call(this), this.cancelInitialization = void 0
      }
    };
    const Lw = "data-faro-user-action-name",
      Hw = Lw.replace(/-name$/, "-timeout"),
      Dw = 1e3;

    function qC(WW) {
      return `data-${(WW.startsWith("data-")?WW.slice(5):WW).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Zw(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uR;
      if (void 0 === WW) return RW;
      let wW = NaN;
      try {
        wW = "string" === typeof WW && "" === WW.trim() ? NaN : Number(WW)
      } catch (CW) {}
      return !Number.isFinite(wW) || wW <= 0 ? (MW(`initialActivityTimeout must be a finite number greater than zero; using ${RW} ms`), RW) : wW > 1e3 ? (MW(`initialActivityTimeout cannot exceed ${Dw} ms; clamping to the maximum`), Dw) : wW
    }

    function Sw(WW, RW, MW) {
      return void 0 !== WW && window.clearTimeout(WW), window.setTimeout((() => {
        RW()
      }), MW)
    }

    function WC(WW) {
      return WW.type === JM
    }
    let RC, MC;

    function wC() {
      return RC || (RC = new PM), MC || (MC = new MutationObserver(((WW, RW) => {
        RC.notify({
          type: "dom-mutation"
        })
      })), MC.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), RC
    }
    const CC = "fetch",
      zz = "xhr";
    let AC, bz, yz, NC, eC = !1;

    function BC() {
      if (AC) return AC;

      function WW(WW) {
        AC.notify({
          type: YM,
          request: WW
        })
      }

      function RW(WW) {
        AC.notify({
          type: JM,
          request: WW
        })
      }
      return AC = new PM, eC || (! function(WW) {
        let {
          onRequestEnd: RW,
          onRequestStart: MW
        } = WW;
        yz || (yz = window.fetch);
        window.fetch = function() {
          var WW, wW;
          const CW = null !== (WW = DW(arguments[0])) && void 0 !== WW ? WW : "",
            zR = HW(CW),
            AW = (null !== (wW = arguments[1]) && void 0 !== wW ? wW : {}).method,
            bR = JR();
          return zR || MW({
            url: CW,
            method: AW,
            requestId: bR,
            apiType: CC
          }), yz.apply(this, arguments).then((WW => (zR || RW({
            url: CW,
            method: AW,
            requestId: bR,
            apiType: CC
          }), WW))).catch((WW => {
            throw zR || RW({
              url: CW,
              method: AW,
              requestId: bR,
              apiType: CC
            }), WW
          }))
        }
      }({
        onRequestStart: WW,
        onRequestEnd: RW
      }), function(WW) {
        let {
          onRequestStart: RW,
          onRequestEnd: MW
        } = WW;
        bz || (bz = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const WW = arguments[1],
            wW = HW(WW),
            CW = arguments[0],
            zR = JR();
          this.addEventListener("loadstart", (function() {
            wW || RW({
              url: WW,
              method: CW,
              requestId: zR,
              apiType: zz
            })
          })), this.addEventListener("load", (function() {
            wW || MW({
              url: WW,
              method: CW,
              requestId: zR,
              apiType: zz
            })
          })), this.addEventListener("error", (function() {
            wW || MW({
              url: WW,
              method: CW,
              requestId: zR,
              apiType: zz
            })
          })), this.addEventListener("abort", (function() {
            wW || MW({
              url: WW,
              method: CW,
              requestId: zR,
              apiType: zz
            })
          })), bz.apply(this, arguments)
        }
      }({
        onRequestStart: WW,
        onRequestEnd: RW
      }), eC = !0), AC
    }
    let tz, TC = !1;
    let gz = function(WW) {
      return WW[WW.Started = 0] = "Started", WW[WW.Halted = 1] = "Halted", WW[WW.Cancelled = 2] = "Cancelled", WW[WW.Ended = 3] = "Ended", WW
    }({});
    var iz = class {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = WW, this.logDebug = RW, this.initialActivityTimeout = MW, this.http = BC(), this.dom = wC(), this.perf = (NC || (NC = new PM), TC || (tz = nw.subscribe((WW => {
          "resource" === WW.type && NC.notify({
            type: "resource-entry"
          })
        })), TC = !0), NC), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new PM).merge(this.http, this.dom, this.perf).takeWhile((() => [gz.Started, gz.Halted].includes(this.userAction.getState()))).filter((WW => !!(this.userAction.getState() !== gz.Halted || WC(WW) && this.runningRequests.has(WW.request.requestId)))).subscribe((WW => {
          (function(WW) {
            return WW.type === YM
          })(WW) && this.runningRequests.set(WW.request.requestId, WW.request), WC(WW) && this.runningRequests.delete(WW.request.requestId), WC(WW) ? this.userAction.getState() === gz.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((WW => [gz.Ended, gz.Cancelled].includes(WW))).first().subscribe((() => this.cleanup())), this.startupTid = Sw(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === gz.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === gz.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Sw(this.haltTid, (() => {
          this.userAction.getState() === gz.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var WW, RW;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (WW = this.allMonitorsSub) || void 0 === WW || WW.unsubscribe(), null === (RW = this.stateSub) || void 0 === RW || RW.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(WW) {
        void 0 !== WW && window.clearTimeout(WW)
      }
    };

    function YC(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uR;
      var MW;
      const {
        api: wW,
        config: CW,
        internalLogger: zR
      } = WW, AW = Zw(null === (MW = CW.userActionsInstrumentation) || void 0 === MW ? void 0 : MW.initialActivityTimeout, 100, RW);
      return {
        processUserEvent: function(WW) {
          var RW, MW;
          const zR = null !== (RW = null === (MW = CW.userActionsInstrumentation) || void 0 === MW ? void 0 : MW.dataAttributeName) && void 0 !== RW ? RW : Lw,
            AW = WW.target;
          if (!(AW instanceof Element)) return;
          const bR = function(WW, RW) {
              let MW = WW;
              for (; MW;) {
                if (MW.hasAttribute(RW)) return MW;
                MW = MW.parentElement
              }
              return null
            }(AW, qC(zR)),
            yR = function(WW, RW) {
              if (!WW) return;
              const MW = function(WW) {
                  return qC(WW).slice(5).replace(/-(.)/g, ((WW, RW) => RW.toUpperCase()))
                }(RW),
                wW = WW.dataset;
              for (const CW in wW)
                if (CW === MW) return wW[CW]
            }(bR, zR);
          if (!bR || !yR) return;
          const NW = function(WW, RW) {
            const MW = WW.getAttribute(function(WW) {
              const RW = qC(WW);
              return RW.endsWith("-name") ? `${RW.slice(0,-5)}-timeout` : `${RW}-timeout`
            }(RW));
            return null === MW ? void 0 : Number(MW)
          }(bR, zR);
          wW.startUserAction(yR, {}, {
            triggerName: WW.type,
            initialActivityTimeout: NW
          })
        },
        processUserActionStarted: function(WW, MW) {
          const wW = WW,
            CW = Zw(MW, AW, RW);
          new iz(wW, zR.debug, CW).attach()
        }
      }
    }
    const JC = "user_action_start",
      PC = {
        Normal: "normal",
        Critical: "critical"
      };
    var IC = class {
        constructor() {
          this.buffer = []
        }
        addItem(WW) {
          this.buffer.push(WW)
        }
        flushBuffer(WW) {
          if (jR(WW))
            for (const RW of this.buffer) WW(RW);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      oC = class extends PM {
        constructor(WW) {
          let {
            name: RW,
            parentId: MW,
            trigger: wW,
            transports: CW,
            attributes: zR,
            trackUserActionsExcludeItem: AW,
            importance: bR = PC.Normal,
            pushEvent: yR
          } = WW;
          super(), this.name = RW, this.attributes = zR, this.id = JR(), this.trigger = wW, this.parentId = null !== MW && void 0 !== MW ? MW : this.id, this.trackUserActionsExcludeItem = AW, this.importance = bR, this._pushEvent = yR, this._itemBuffer = new IC, this._transports = CW, this._state = 0, this._start()
        }
        addItem(WW) {
          return 0 === this._state && (this._itemBuffer.addItem(WW), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = tM(), this._startTimeMono = TR())
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
          const WW = tM(),
            RW = TR() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((WW => {
            if (function(WW, RW) {
                return (null === RW || void 0 === RW ? void 0 : RW(WW)) || "measurement" === WW.type && "web-vitals" === WW.payload.type
              }(WW, this.trackUserActionsExcludeItem)) return void this._transports.execute(WW);
            const RW = ZR(ZR({}, WW), {}, {
              payload: ZR(ZR({}, WW.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(RW)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", ZR({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: WW.toString(),
            userActionDuration: RW.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, UR(this.attributes)), void 0, {
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
    const lC = new PM;

    function FC(WW, RW) {
      return !!WW && (0 === (null === WW || void 0 === WW ? void 0 : WW.getState()) && (WW.addItem(RW), !0))
    }
    var fC = class extends RM {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = MM
        }
        initialize() {
          const {
            processUserEvent: WW,
            processUserActionStarted: RW
          } = YC(iR, (WW => this.logWarn(WW)));
          this._processUserEvent = WW, this._processKeydown = RW => {
            [" ", "Enter"].includes(RW.key) && WW(RW)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = lC.subscribe((WW => {
            let {
              type: MW,
              userAction: wW,
              initialActivityTimeout: CW
            } = WW;
            "user_action_start" === MW && RW(wW, CW)
          }))
        }
        destroy() {
          var WW;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (WW = this._userActionSub) || void 0 === WW || WW.unsubscribe()
        }
      },
      QC = class extends RM {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = MM, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(WW) {
          const RW = {
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
          this.api.pushEvent("securitypolicyviolation", UR(RW))
        }
      };
    var rz = class extends PM {
      constructor(WW, RW) {
        var MW, wW, CW, zR;
        super(), this._tracking = !1, this.eventsObservable = WW, this._options = {
          inactivityMs: null !== (MW = null === RW || void 0 === RW ? void 0 : RW.inactivityMs) && void 0 !== MW ? MW : 100,
          drainTimeoutMs: null !== (wW = null === RW || void 0 === RW ? void 0 : RW.drainTimeoutMs) && void 0 !== wW ? wW : 1e4,
          isOperationStart: null !== (CW = null === RW || void 0 === RW ? void 0 : RW.isOperationStart) && void 0 !== CW ? CW : () => {},
          isOperationEnd: null !== (zR = null === RW || void 0 === RW ? void 0 : RW.isOperationEnd) && void 0 !== zR ? zR : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((WW => {
          var RW;
          this._lastEventTime = TR(), null === (RW = this._currentEvents) || void 0 === RW || RW.push(WW);
          const MW = this._options.isOperationStart(WW);
          var wW;
          MW && (null === (wW = this._activeOperations) || void 0 === wW || wW.set(MW, !0));
          const CW = this._options.isOperationEnd(WW);
          var zR;
          CW && (null === (zR = this._activeOperations) || void 0 === zR || zR.delete(CW));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = TR(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let WW;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), WW = this.hasActiveOperations() ? TR() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: WW
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = cz(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = cz(this._drainTid, (() => {
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

    function cz(WW, RW, MW) {
      return WW && clearTimeout(WW), WW = setTimeout((() => {
        RW()
      }), MW)
    }
    let XC;
    const jz = new Set,
      kz = new Map;
    let az, sC, dC, pC, hC, UC, EC, VC, mz = !1;
    var xz = class extends RM {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = MM
      }
      initialize() {
        const WW = BC(),
          RW = wC(),
          MW = function() {
            function WW(WW, RW) {
              const MW = null !== RW && void 0 !== RW ? RW : location.href;
              MW !== sC && (az.notify({
                type: "url-change",
                from: sC,
                to: MW,
                trigger: WW
              }), sC = MW)
            }
            if (az || (az = new PM, sC = location.href), !mz)
              if ("navigation" in window && "NavigateEvent" in window) {
                EC = RW => {
                  try {
                    const MW = null === RW || void 0 === RW ? void 0 : RW.destination;
                    (null === MW || void 0 === MW ? void 0 : MW.sameDocument) && "string" === typeof MW.url && WW("navigate", MW.url)
                  } catch (MW) {}
                }, window.navigation.addEventListener("navigate", EC);
                const RW = window.NavigateEvent;
                RW && RW.prototype && "function" === typeof RW.prototype.intercept && (VC || (VC = RW.prototype.intercept), RW.prototype.intercept = function(RW) {
                  try {
                    const RW = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      MW = null === this || void 0 === this ? void 0 : this.destination;
                    RW && MW && !1 === MW.sameDocument && "string" === typeof MW.url && WW("navigate-intercept", MW.url)
                  } catch (MW) {}
                  return VC.call(this, RW)
                }), mz = !0
              } else dC || (dC = window.history.pushState), window.history.pushState = function() {
                for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
                const CW = dC.apply(window.history, MW);
                return WW("pushState"), CW
              }, pC || (pC = window.history.replaceState), window.history.replaceState = function() {
                for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
                const CW = pC.apply(window.history, MW);
                return WW("replaceState"), CW
              }, hC = () => WW("popstate"), UC = () => WW("hashchange"), window.addEventListener("popstate", hC), window.addEventListener("hashchange", UC), mz = !0;
            return az
          }(),
          wW = (CW = ["pointerdown", "keydown"], XC || (XC = new PM), CW.forEach((WW => {
            if (!jz.has(WW)) {
              const RW = () => {
                XC.notify({
                  type: "interaction",
                  name: WW
                })
              };
              window.addEventListener(WW, RW), jz.add(WW), kz.set(WW, RW)
            }
          })), XC);
        var CW;
        const zR = new rz((new PM).merge(WW, RW, MW), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: WW => function(WW) {
            return WW.type === YM
          }(WW) ? WW.request.requestId : void 0,
          isOperationEnd: WW => function(WW) {
            return WW.type === JM
          }(WW) ? WW.request.requestId : void 0
        });
        zR.filter((WW => "tracking-ended" === WW.message)).subscribe((WW => {
          var RW, MW;
          if ((null === (RW = WW.events) || void 0 === RW ? void 0 : RW.some((WW => "url-change" === WW.type))) && (null === (MW = WW.events) || void 0 === MW ? void 0 : MW.some((WW => "dom-mutation" === WW.type)))) {
            var wW;
            const RW = null === (wW = WW.events) || void 0 === wW ? void 0 : wW.find((WW => "url-change" === WW.type));
            iR.api.pushEvent("faro.navigation", {
              fromUrl: null === RW || void 0 === RW ? void 0 : RW.from,
              toUrl: null === RW || void 0 === RW ? void 0 : RW.to,
              sameDocument: String(!0),
              duration: WW.duration
            })
          }
        })), wW.subscribe((() => {
          zR.startTracking()
        }))
      }
    };

    function vz() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const RW = [new fC, new pM, new dw, new wM, new UM, new xz];
      return !1 !== WW.enablePerformanceInstrumentation && RW.unshift(new Gw), !1 !== WW.enableContentSecurityPolicyInstrumentation && RW.push(new QC), !1 !== WW.captureConsole && RW.push(new sM), RW
    }
    var KC = MW(7e3);
    let uC, OC;

    function nC() {
      const WW = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return uC === WW && OC || (OC = new KC.UAParser(WW).getResult(), uC = WW), OC
    }
    const GC = () => {
        const {
          browser: WW,
          os: RW,
          ua: MW
        } = nC(), {
          name: wW,
          version: CW
        } = WW, {
          name: zR,
          version: AW
        } = RW, bR = navigator.language, yR = MW.includes("Mobi"), NW = function() {
          if (!wW || !CW) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== wW && void 0 !== wW ? wW : hM,
            version: null !== CW && void 0 !== CW ? CW : hM,
            os: `${null!==zR&&void 0!==zR?zR:hM} ${null!==AW&&void 0!==AW?AW:hM}`,
            userAgent: null !== MW && void 0 !== MW ? MW : hM,
            language: null !== bR && void 0 !== bR ? bR : hM,
            mobile: yR,
            brands: null !== NW && void 0 !== NW ? NW : hM,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      LC = () => {
        const {
          name: WW,
          version: RW
        } = nC().os;
        if (!WW && !RW) return {};
        const MW = {};
        return WW && (MW.name = WW), RW && (MW.version = RW), {
          os: MW
        }
      };

    function HC(WW) {
      var RW, MW, wW;
      return {
        id: null !== (RW = null === (MW = iR.config) || void 0 === MW || null === (MW = MW.sessionTracking) || void 0 === MW || null === (wW = MW.generateSessionId) || void 0 === wW ? void 0 : wW.call(MW)) && void 0 !== RW ? RW : JR(),
        attributes: WW
      }
    }
    const DC = () => ({
      sdk: {
        name: "faro-web",
        version: MM
      }
    });
    var qz = class extends WM {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ZC = function(WW) {
      return WW.EXCEPTION = "exception", WW.LOG = "log", WW.MEASUREMENT = "measurement", WW.TRACE = "trace", WW.EVENT = "event", WW
    }({});
    const SC = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Wz(WW, RW) {
      var MW, wW;
      if (void 0 === RW) return WW;
      if (void 0 === WW) return {
        resourceSpans: RW
      };
      const CW = null === (MW = WW.resourceSpans) || void 0 === MW ? void 0 : MW[0];
      if (void 0 === CW) return WW;
      const zR = (null === CW || void 0 === CW ? void 0 : CW.scopeSpans) || [],
        AW = (null === RW || void 0 === RW || null === (wW = RW[0]) || void 0 === wW ? void 0 : wW.scopeSpans) || [];
      return ZR(ZR({}, WW), {}, {
        resourceSpans: [ZR(ZR({}, CW), {}, {
          scopeSpans: [...zR, ...AW]
        })]
      })
    }

    function Rz(WW) {
      let RW = {
        meta: {}
      };
      return void 0 !== WW[0] && (RW.meta = WW[0].meta), WW.forEach((WW => {
        switch (WW.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const MW = SC[WW.type],
              wW = RW[MW];
            RW = ZR(ZR({}, RW), {}, {
              [MW]: void 0 === wW ? [WW.payload] : [...wW, WW.payload]
            });
            break
          }
          case "trace":
            RW = ZR(ZR({}, RW), {}, {
              traces: Wz(RW.traces, WW.payload.resourceSpans)
            })
        }
      })), RW
    }
    var Mz = class extends qz {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = WW, this.name = "@grafana/faro-web-sdk:transport-console", this.version = MM
      }
      send(WW) {
        var RW;
        return this.unpatchedConsole[null !== (RW = this.options.level) && void 0 !== RW ? RW : IM.DEBUG]("New event", Rz([WW]))
      }
    };
    const wz = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Cz = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      zA = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Az = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      bA = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      yA = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Nz(WW) {
      let {
        weekday: RW,
        day: MW,
        month: wW,
        year: CW,
        hour: zR,
        minute: AW,
        second: bR
      } = WW;
      if (CW < 1900 || MW < 1 || zR > 23 || AW > 59 || bR > 60) return;
      const yR = 60 === bR,
        NW = new Date(0);
      return NW.setUTCFullYear(CW, wW, MW), NW.setUTCHours(zR, AW, yR ? 59 : bR, 0), NW.getUTCDay() === RW && NW.getUTCDate() === MW && NW.getUTCMonth() === wW && NW.getUTCFullYear() === CW && NW.getUTCHours() === zR && NW.getUTCMinutes() === AW && NW.getUTCSeconds() === (yR ? 59 : bR) ? NW.getTime() + (yR ? 1e3 : 0) : void 0
    }
    var ez = class {
      constructor(WW) {
        this.options = WW, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var WW = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const RW = this.sequence++;
        let MW = !1;
        return {
          deliver: function() {
            var MW = Ow((function*(MW) {
              const wW = WW.options.getNow();
              let CW, zR = 0;
              for (;;) {
                var AW, bR, yR;
                const NW = WW.options.retry.maxAttempts - zR,
                  eW = yield WW.runAttempt((() => MW(NW, WW.unloading)), zR > 0);
                if (zR += eW.attemptsMade, "success" === eW.kind) return {
                  kind: "success",
                  attempts: zR,
                  elapsedTimeMs: WW.options.getNow() - wW
                };
                if (CW = eW.failure, "terminal" === eW.kind || WW.unloading) return {
                  kind: "terminal",
                  attempts: zR,
                  elapsedTimeMs: WW.options.getNow() - wW,
                  failure: CW
                };
                if (zR >= WW.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: zR,
                  elapsedTimeMs: WW.options.getNow() - wW,
                  failure: CW,
                  reason: "retries-exhausted"
                };
                if (null != eW.retryAfterMs && eW.retryAfterMs > WW.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: zR,
                  elapsedTimeMs: WW.options.getNow() - wW,
                  failure: CW,
                  reason: "retry-after-too-long"
                };
                const BW = Math.min(null !== (AW = eW.retryAfterMs) && void 0 !== AW ? AW : WW.options.retry.initialBackoffMs * Math.pow(WW.options.retry.backoffMultiplier, zR - 1), WW.options.retry.maxBackoffMs);
                if (null === (bR = (yR = WW.options).onRetry) || void 0 === bR || bR.call(yR, BW, zR + 1), yield WW.waitForTurn(RW, BW)) {
                  const RW = WW.options.retry.maxAttempts - zR,
                    CW = yield WW.runAttempt((() => MW(RW, !0)));
                  return zR += CW.attemptsMade, {
                    kind: "success" === CW.kind ? "success" : "terminal",
                    attempts: zR,
                    elapsedTimeMs: WW.options.getNow() - wW,
                    failure: "success" === CW.kind ? void 0 : CW.failure
                  }
                }
              }
            }));
            return function(WW) {
              return MW.apply(this, arguments)
            }
          }(),
          release: () => {
            MW || (MW = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const WW = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const RW of WW) RW.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((MW, wW) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const RW = () => {
                this.inProgress--, this.runNextAttempt()
              };
              WW().then((WW => {
                RW(), MW(WW)
              }), (WW => {
                RW(), wW(WW)
              }))
            },
            isRedelivery: RW
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const WW = this.options.getNow(),
            RW = this.attemptQueue.findIndex((RW => {
              let {
                isRedelivery: MW
              } = RW;
              return this.unloading || !MW || WW >= this.nextSendAt
            }));
          if (RW < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - WW)));
          const [MW] = this.attemptQueue.splice(RW, 1);
          MW.isRedelivery && !this.unloading && (this.nextSendAt = WW + 1), MW.run()
        }
      }
      waitForTurn(WW, RW) {
        const MW = Math.min(RW * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((RW => {
          this.waiting.push({
            sequence: WW,
            readyAt: this.options.getNow() + MW,
            resolve: RW
          }), this.waiting.sort(((WW, RW) => WW.readyAt === RW.readyAt ? WW.sequence - RW.sequence : WW.readyAt - RW.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const WW = this.waiting[0],
          RW = WW.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const RW = this.waiting.indexOf(WW);
          RW >= 0 && this.waiting.splice(RW, 1), WW.resolve(!1), this.scheduleNext()
        }), Math.max(0, RW - this.options.getNow()))
      }
    };

    function Bz(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if ({}.hasOwnProperty.call(WW, wW)) {
            if (RW.includes(wW)) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.includes(MW) || {}.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function tA(WW) {
      const {
        size: RW,
        concurrency: MW
      } = WW, wW = [];
      let CW = 0;
      const zR = () => {
        if (CW < MW && wW.length) {
          const {
            producer: WW,
            resolve: RW,
            reject: MW
          } = wW.shift();
          CW++, WW().then((WW => {
            CW--, zR(), RW(WW)
          }), (WW => {
            CW--, zR(), MW(WW)
          }))
        }
      };
      return {
        add: WW => {
          if (wW.length + CW >= RW) throw new Error("Task buffer full");
          return new Promise(((RW, MW) => {
            wW.push({
              producer: WW,
              resolve: RW,
              reject: MW
            }), zR()
          }))
        }
      }
    }
    const Tz = ["headers"],
      gA = ["keepalive", "signal"],
      iA = new Set([408, 425, 429, 500, 502, 503, 504]),
      Yz = new Set([429, 503]);
    let Jz = 0,
      Pz = 0;
    var Iz = class extends Error {};
    var oz = class extends qz {
      constructor(WW) {
        var RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW;
        super(), this.options = WW, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = MM, this.pendingCustomSends = 0, this.getNow = null !== (RW = WW.getNow) && void 0 !== RW ? RW : Date.now, this.requestTimeoutMs = null !== (MW = WW.requestTimeoutMs) && void 0 !== MW ? MW : 1e4, this.compressionEnabled = null !== (wW = WW.requestCompression) && void 0 !== wW && wW && "undefined" !== typeof CompressionStream, WW.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new ez({
          bufferSize: null !== (CW = WW.bufferSize) && void 0 !== CW ? CW : 30,
          concurrency: null !== (zR = WW.concurrency) && void 0 !== zR ? zR : 5,
          retry: {
            maxAttempts: null !== (AW = null === (bR = WW.retry) || void 0 === bR ? void 0 : bR.maxAttempts) && void 0 !== AW ? AW : 3,
            initialBackoffMs: null !== (yR = null !== (NW = null === (eW = WW.retry) || void 0 === eW ? void 0 : eW.initialBackoffMs) && void 0 !== NW ? NW : WW.defaultRateLimitBackoffMs) && void 0 !== yR ? yR : 1e3,
            maxBackoffMs: null !== (BW = null === (tR = WW.retry) || void 0 === tR ? void 0 : tR.maxBackoffMs) && void 0 !== BW ? BW : 3e4,
            backoffMultiplier: null !== (TW = null === (gR = WW.retry) || void 0 === gR ? void 0 : gR.backoffMultiplier) && void 0 !== TW ? TW : 2
          },
          getNow: this.getNow,
          getRandom: null !== (iR = WW.getRandom) && void 0 !== iR ? iR : Math.random,
          onRetry: (WW, RW) => {
            this.logDebug(`Retrying failed request after ${WW}ms. Attempt ${RW}.`)
          }
        }), this.customPromiseBuffer = tA({
          size: null !== (YW = WW.bufferSize) && void 0 !== YW ? YW : 30,
          concurrency: null !== (JW = WW.concurrency) && void 0 !== JW ? JW : 5
        }), this.defaultPromiseBuffer = {
          add: WW => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(WW);
            const RW = this.deliveryQueue.reserve();
            if (!RW) throw new Error("Task buffer full");
            return this.runBufferedTask(RW, WW)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (WW => {
          WW.persisted && this.deliveryQueue.resume()
        })))
      }
      send(WW) {
        var RW = this;
        return Ow((function*() {
          const MW = RW.promiseBuffer;
          if (MW !== RW.defaultPromiseBuffer || MW.add !== RW.defaultBufferAdd) {
            RW.pendingCustomSends++;
            try {
              yield MW.add((() => RW.deliver(WW)))
            } catch (wW) {
              RW.logError("Permanent delivery failure", {
                error: wW,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              RW.pendingCustomSends--
            }
          } else yield RW.deliver(WW)
        }))()
      }
      runBufferedTask(WW, RW) {
        return Ow((function*() {
          let MW;
          try {
            return yield WW.deliver(Ow((function*() {
              return MW = yield RW(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), MW
          } finally {
            WW.release()
          }
        }))()
      }
      deliver(WW) {
        var RW = this;
        return Ow((function*() {
          const MW = RW.deliveryQueue.reserve();
          if (MW) try {
            const wW = yield RW.prepareRequest(WW), CW = yield MW.deliver(((WW, MW) => RW.performAttempt(wW, WW, MW)));
            "terminal" === CW.kind && RW.logError("retries-exhausted" === CW.reason ? "Delivery retries exhausted" : "Permanent delivery failure", eR(eR({}, CW.failure), {}, {
              reason: CW.reason,
              attempts: CW.attempts,
              elapsedTimeMs: CW.elapsedTimeMs
            }))
          } catch (wW) {
            RW.logError("Permanent delivery failure", {
              error: wW,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            MW.release()
          } else RW.logError("Permanent delivery failure", {
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
        var RW = this;
        return Ow((function*() {
          var MW, wW;
          const CW = Rz(WW),
            zR = null === (MW = CW.meta.session) || void 0 === MW ? void 0 : MW.id,
            AW = JSON.stringify(CW),
            bR = null !== (wW = RW.options.requestOptions) && void 0 !== wW ? wW : {},
            {
              headers: yR = {}
            } = bR,
            NW = Bz(bR, Tz),
            {
              keepalive: eW,
              signal: BW
            } = NW,
            tR = Bz(NW, gA),
            TW = {};
          for (const [WW, RW] of Object.entries(yR)) TW[WW] = "function" === typeof RW ? yield RW(): RW;
          let gR = AW,
            iR = function(WW) {
              return "undefined" === typeof TextEncoder ? WW.length : (new TextEncoder).encode(WW).byteLength
            }(AW);
          const YW = {};
          return RW.compressionEnabled && (gR = yield RW.compress(AW), iR = gR.size, YW["Content-Encoding"] = "gzip"), {
            bodySize: iR,
            sessionId: zR,
            requestInit: eR({
              method: "POST",
              headers: eR(eR(eR(eR(eR({
                "Content-Type": "application/json"
              }, YW), TW), RW.options.apiKey ? {
                "x-api-key": RW.options.apiKey
              } : {}), zR ? {
                "x-faro-session-id": zR
              } : {}), {}, {
                "Idempotency-Key": JR(20)
              }),
              body: gR
            }, tR)
          }
        }))()
      }
      performAttempt(WW, RW, MW) {
        var wW = this;
        return Ow((function*() {
          var CW;
          const zR = null === (CW = wW.options.requestOptions) || void 0 === CW ? void 0 : CW.signal;
          if (null === zR || void 0 === zR ? void 0 : zR.aborted) return {
            kind: "terminal",
            failure: {
              error: zR.reason
            },
            attemptsMade: 0
          };
          let AW = 0;
          try {
            var bR;
            const CW = yield wW.fetchWithKeepaliveFallback(WW.requestInit, WW.bodySize, !!MW || (null === (bR = wW.options.requestOptions) || void 0 === bR ? void 0 : bR.keepalive), RW, (() => AW++));
            if (wW.handleResponse(CW, WW.sessionId), CW.status >= 200 && CW.status < 300) return {
              kind: "success",
              attemptsMade: AW
            };
            const zR = {
              status: CW.status
            };
            return !iA.has(CW.status) || MW ? {
              kind: "terminal",
              failure: zR,
              attemptsMade: AW
            } : {
              kind: "retry",
              failure: zR,
              attemptsMade: AW,
              retryAfterMs: Yz.has(CW.status) ? wW.getRetryAfterDelayMs(CW) : void 0
            }
          } catch (yR) {
            const WW = {
              error: yR
            };
            return (null === zR || void 0 === zR ? void 0 : zR.aborted) || !wW.isFetchNetworkError(yR) || MW ? {
              kind: "terminal",
              failure: WW,
              attemptsMade: AW
            } : {
              kind: "retry",
              failure: WW,
              attemptsMade: AW
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(WW, RW, MW, wW, CW) {
        var zR = this;
        return Ow((function*() {
          const AW = zR.getNow(),
            bR = zR.reserveKeepalive(RW, MW);
          try {
            return yield zR.fetchWithTimeout(eR(eR({}, WW), {}, {
              keepalive: bR.keepalive
            }), zR.requestTimeoutMs, CW)
          } catch (NW) {
            var yR;
            if (bR.keepalive && wW > 1 && zR.isFetchNetworkError(NW) && !(NW instanceof Iz) && !(null === (yR = zR.options.requestOptions) || void 0 === yR || null === (yR = yR.signal) || void 0 === yR ? void 0 : yR.aborted)) {
              zR.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const RW = zR.requestTimeoutMs - (zR.getNow() - AW);
              return zR.fetchWithTimeout(eR(eR({}, WW), {}, {
                keepalive: !1
              }), RW, CW)
            }
            throw NW
          } finally {
            bR.release()
          }
        }))()
      }
      fetchWithTimeout(WW, RW, MW) {
        var wW = this;
        return Ow((function*() {
          var CW;
          const zR = null === (CW = wW.options.requestOptions) || void 0 === CW ? void 0 : CW.signal;
          if (wW.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return MW(), fetch(wW.options.url, eR(eR({}, WW), {}, {
            signal: zR
          }));
          if (RW <= 0) throw new Iz("Request timed out");
          const AW = new AbortController,
            bR = () => AW.abort(null === zR || void 0 === zR ? void 0 : zR.reason);
          null === zR || void 0 === zR || zR.addEventListener("abort", bR, {
            once: !0
          });
          let yR = !1;
          const NW = setTimeout((() => {
            yR = !0, AW.abort()
          }), RW);
          try {
            return MW(), yield fetch(wW.options.url, eR(eR({}, WW), {}, {
              signal: AW.signal
            }))
          } catch (eW) {
            if (yR && !(null === zR || void 0 === zR ? void 0 : zR.aborted)) throw new Iz("Request timed out");
            throw eW
          } finally {
            clearTimeout(NW), null === zR || void 0 === zR || zR.removeEventListener("abort", bR)
          }
        }))()
      }
      getRetryAfterDelayMs(WW) {
        const RW = WW.headers.get("Retry-After");
        if (!RW) return;
        if (/^\d+$/.test(RW)) {
          const WW = 1e3 * Number(RW);
          return Number.isFinite(WW) ? WW : Number.POSITIVE_INFINITY
        }
        const MW = this.getNow(),
          wW = function(WW, RW) {
            const MW = wz.exec(WW);
            if (MW) {
              const [, WW, RW, wW, CW, zR, AW, bR] = MW;
              return Nz({
                weekday: Az.indexOf(WW),
                day: Number(RW),
                month: yA.indexOf(wW),
                year: Number(CW),
                hour: Number(zR),
                minute: Number(AW),
                second: Number(bR)
              })
            }
            const wW = Cz.exec(WW);
            if (wW) {
              const [, WW, MW, AW, bR, yR, NW, eW] = wW, BW = new Date(RW);
              if (Number.isNaN(BW.getTime())) return;
              const tR = BW.getUTCFullYear();
              let TW = 100 * Math.floor(tR / 100) + Number(bR);
              TW < tR && (TW += 100);
              const gR = yA.indexOf(AW),
                iR = {
                  month: gR,
                  day: Number(MW),
                  hour: Number(yR),
                  minute: Number(NW),
                  second: Number(eW),
                  millisecond: 0
                },
                YW = {
                  month: BW.getUTCMonth(),
                  day: BW.getUTCDate(),
                  hour: BW.getUTCHours(),
                  minute: BW.getUTCMinutes(),
                  second: BW.getUTCSeconds(),
                  millisecond: BW.getUTCMilliseconds()
                };
              return (TW > tR + 50 || TW === tR + 50 && (zR = YW, ((CW = iR).month - zR.month || CW.day - zR.day || CW.hour - zR.hour || CW.minute - zR.minute || CW.second - zR.second || CW.millisecond - zR.millisecond) > 0)) && (TW -= 100), Nz({
                weekday: bA.indexOf(WW),
                day: Number(MW),
                month: gR,
                year: TW,
                hour: Number(yR),
                minute: Number(NW),
                second: Number(eW)
              })
            }
            var CW, zR;
            const AW = zA.exec(WW);
            if (!AW) return;
            const [, bR, yR, NW, eW, BW, tR, TW, gR] = AW;
            return Nz({
              weekday: Az.indexOf(bR),
              day: Number(null !== NW && void 0 !== NW ? NW : eW),
              month: yA.indexOf(yR),
              year: Number(gR),
              hour: Number(BW),
              minute: Number(tR),
              second: Number(TW)
            })
          }(RW, MW);
        return null == wW ? void 0 : Math.max(0, wW - MW)
      }
      reserveKeepalive(WW, RW) {
        if (!1 === RW || WW > 6e4 || Jz + WW > 6e4 || Pz >= 9) return {
          keepalive: !1,
          release: uR
        };
        Jz += WW, Pz++;
        let MW = !1;
        return {
          keepalive: !0,
          release: () => {
            MW || (MW = !0, Jz -= WW, Pz--)
          }
        }
      }
      handleResponse(WW, RW) {
        202 === WW.status && "invalid" === WW.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), RW), WW.text().catch(uR)
      }
      isFetchNetworkError(WW) {
        return WW instanceof TypeError || WW instanceof Iz || WW instanceof DOMException && "AbortError" === WW.name
      }
      compress(WW) {
        return Ow((function*() {
          const RW = [],
            MW = new ReadableStream({
              start(RW) {
                RW.enqueue((new TextEncoder).encode(WW)), RW.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: WW,
              value: wW
            } = yield MW.read();
            if (WW) return new Blob(RW);
            RW.push(wW)
          }
        }))()
      }
      extendFaroSession(WW, RW, MW) {
        var wW, CW;
        const zR = WW.sessionTracking;
        if (!(null === zR || void 0 === zR ? void 0 : zR.enabled)) return void RW("Session expired.");
        const {
          fetchUserSession: AW,
          storeUserSession: bR
        } = KR(zR), yR = null === (wW = this.metas.value.session) || void 0 === wW ? void 0 : wW.id, NW = null === (CW = AW()) || void 0 === CW ? void 0 : CW.sessionId;
        MW && MW === yR && MW === NW ? (kM({
          fetchUserSession: AW,
          storeUserSession: bR
        })({
          forceSessionExtend: !0
        }), RW("Session expired; created new session.")) : RW("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const lz = () => {
      const WW = window.k6;
      return {
        k6: eR({
          isK6Browser: !0
        }, (null === WW || void 0 === WW ? void 0 : WW.testRunId) && {
          testRunId: null === WW || void 0 === WW ? void 0 : WW.testRunId
        })
      }
    };
    let Fz, fz;

    function Qz() {
      let {
        generatePageId: WW,
        initialPageMeta: RW
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const MW = location.href;
        return jR(WW) && Fz !== MW && (Fz = MW, fz = WW(location)), {
          page: eR(eR({
            url: MW
          }, fz ? {
            id: fz
          } : {}), RW)
        }
      }
    }

    function rA() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SR,
        RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const MW = nR;
      return RW > 0 && (MW.error = RW >= 1 ? function() {
        for (var RW = arguments.length, wW = new Array(RW), CW = 0; CW < RW; CW++) wW[CW] = arguments[CW];
        WW.error(`${MW.prefix}\n`, ...wW)
      } : uR, MW.warn = RW >= 2 ? function() {
        for (var RW = arguments.length, wW = new Array(RW), CW = 0; CW < RW; CW++) wW[CW] = arguments[CW];
        WW.warn(`${MW.prefix}\n`, ...wW)
      } : uR, MW.info = RW >= 3 ? function() {
        for (var RW = arguments.length, wW = new Array(RW), CW = 0; CW < RW; CW++) wW[CW] = arguments[CW];
        WW.info(`${MW.prefix}\n`, ...wW)
      } : uR, MW.debug = RW >= 4 ? function() {
        for (var RW = arguments.length, wW = new Array(RW), CW = 0; CW < RW; CW++) wW[CW] = arguments[CW];
        WW.debug(`${MW.prefix}\n`, ...wW)
      } : uR), MW
    }
    const cA = "faro",
      Xz = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      jA = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function kA(WW) {
      var RW, MW, CW, zR, AW, bR;
      const yR = [],
        eW = rA(WW.unpatchedConsole, WW.internalLoggerLevel);
      WW.transports ? ((WW.url || WW.apiKey) && eW.error('if "transports" is defined, "url" and "apiKey" should not be defined'), yR.push(...WW.transports)) : WW.url ? yR.push(new oz({
        url: WW.url,
        apiKey: WW.apiKey,
        requestCompression: WW.requestCompression
      })) : eW.error('either "url" or "transports" must be defined');
      const {
        dedupe: BW = !0,
        eventDomain: tR = wW,
        globalObjectKey: TW = cA,
        instrumentations: gR = vz(),
        internalLoggerLevel: iR = GR,
        isolate: YW = !1,
        logArgsSerializer: JW = aw,
        metas: PW = sz(WW),
        paused: IW = !1,
        preventGlobalExposure: oW = !1,
        unpatchedConsole: lW = SR,
        url: FW,
        experimental: fW
      } = WW, QW = Bz(WW, jA), rR = null !== (RW = null === fW || void 0 === fW ? void 0 : fW.trackNavigation) && void 0 !== RW && RW, cR = {
        dataAttributeName: qC(null !== (MW = null === (CW = WW.userActionsInstrumentation) || void 0 === CW ? void 0 : CW.dataAttributeName) && void 0 !== MW ? MW : Lw),
        excludeItem: null === (zR = WW.userActionsInstrumentation) || void 0 === zR ? void 0 : zR.excludeItem,
        initialActivityTimeout: Zw(null === (AW = WW.userActionsInstrumentation) || void 0 === AW ? void 0 : AW.initialActivityTimeout, 100, (WW => eW.warn(WW)))
      };
      return eR(eR({}, QW), {}, {
        batching: eR(eR({}, Xz), WW.batching),
        dedupe: BW,
        globalObjectKey: TW,
        instrumentations: aA(gR, WW),
        internalLoggerLevel: iR,
        isolate: YW,
        logArgsSerializer: JW,
        metas: PW,
        parseStacktrace: iw,
        paused: IW,
        preventGlobalExposure: oW,
        transports: yR,
        unpatchedConsole: lW,
        eventDomain: tR,
        ignoreUrls: [...null !== (bR = WW.ignoreUrls) && void 0 !== bR ? bR : [], ...FW ? [FW] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: eR(eR(eR({}, NW), WW.sessionTracking), dz({
          trackGeolocation: WW.trackGeolocation,
          sessionTracking: WW.sessionTracking
        })),
        userActionsInstrumentation: cR,
        experimental: {
          trackNavigation: rR
        }
      })
    }

    function aA(WW, RW) {
      let {
        experimental: MW
      } = RW;
      var wW;
      const CW = null !== (wW = null === MW || void 0 === MW ? void 0 : MW.trackNavigation) && void 0 !== wW && wW;
      return WW.filter((WW => !("@grafana/faro-web-sdk:instrumentation-navigation" === WW.name && !CW)))
    }

    function sz(WW) {
      var RW, MW, wW;
      const {
        page: CW,
        generatePageId: zR
      } = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.pageTracking) && void 0 !== RW ? RW : {}, AW = [GC, LC, Qz({
        generatePageId: zR,
        initialPageMeta: CW
      }), ...null !== (MW = WW.metas) && void 0 !== MW ? MW : [], DC];
      return XW(null === (wW = window) || void 0 === wW ? void 0 : wW.k6) ? [...AW, lz] : AW
    }

    function dz(WW) {
      let {
        trackGeolocation: RW,
        sessionTracking: MW
      } = WW;
      var wW;
      const CW = {};
      return rR(RW) && (CW.geoLocationTrackingEnabled = RW), GW(CW) ? {} : {
        session: eR(eR({}, null !== (wW = null === MW || void 0 === MW ? void 0 : MW.session) && void 0 !== wW ? wW : {}), {}, {
          overrides: CW
        })
      }
    }
    const pz = new WeakSet;

    function hz(WW) {
      return pz.add(WW), WW
    }

    function Uz(WW, RW) {
      if (WW.capture) return hz(WW.capture(RW));
      const MW = hz(WW.value);
      return null === RW || void 0 === RW || RW(), MW
    }

    function Ez(WW) {
      const RW = `__faroBundleId_${WW}`,
        MW = null === eW || void 0 === eW ? void 0 : eW[RW];
      if ("string" === typeof MW && "" !== MW) return MW;
      const wW = "undefined" !== typeof window ? window[RW] : void 0;
      return "string" === typeof wW && "" !== wW ? wW : void 0
    }

    function Vz(WW) {
      var RW, MW;
      const wW = WW.config.app.name,
        CW = wW ? function(WW) {
          return null === eW || void 0 === eW ? void 0 : eW[`__faroGitHash_${WW}`]
        }(wW) : void 0,
        zR = {
          sdk: {
            version: MM,
            name: "faro"
          },
          app: ZR({
            bundleId: wW && Ez(wW)
          }, void 0 !== CW ? {
            gitHash: CW
          } : {})
        },
        AW = null === (RW = WW.config.sessionTracking) || void 0 === RW ? void 0 : RW.session;
      AW && WW.api.setSession(AW), WW.config.app && (zR.app = ZR(ZR({}, WW.config.app), zR.app)), WW.config.user && (zR.user = WW.config.user), WW.config.view && (zR.view = WW.config.view), WW.metas.add(zR, ...null !== (MW = WW.config.metas) && void 0 !== MW ? MW : [])
    }
    var mA = class {
      constructor(WW, RW) {
        var MW, wW;
        this.signalBuffer = [], this.itemLimit = null !== (MW = null === RW || void 0 === RW ? void 0 : RW.itemLimit) && void 0 !== MW ? MW : 50, this.sendTimeout = null !== (wW = null === RW || void 0 === RW ? void 0 : RW.sendTimeout) && void 0 !== wW ? wW : 250, this.paused = (null === RW || void 0 === RW ? void 0 : RW.paused) || !1, this.sendFn = WW, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const RW = new Map;
        return WW.forEach((WW => {
          const MW = JSON.stringify(WW.meta);
          let wW = RW.get(MW);
          wW = void 0 === wW ? [WW] : [...wW, WW], RW.set(MW, wW)
        })), Array.from(RW.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const WW = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(WW).forEach(this.sendFn)
        } catch (RW) {
          throw this.signalBuffer = [...WW, ...this.signalBuffer], this.trimBufferToLimit(), RW
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function xA(WW, RW, MW, wW) {
      var CW;
      RW.debug("Initializing transports");
      const zR = [];
      let AW = [];
      const bR = WW => {
        let RW = WW;
        for (const wW of AW) {
          const WW = RW.map(wW).filter(Boolean);
          if (0 === WW.length) return [];
          RW = vA(WW, MW)
        }
        return RW
      };
      let yR;
      (null === (CW = MW.batching) || void 0 === CW ? void 0 : CW.enabled) && (yR = new mA((WW => {
        const MW = bR(WW);
        if (0 !== MW.length)
          for (const wW of zR) RW.debug(`Transporting item using ${wW.name}\n`, MW), wW.isBatched() && wW.send(MW)
      }), {
        sendTimeout: MW.batching.sendTimeout,
        itemLimit: MW.batching.itemLimit,
        paused: MW.paused
      }));
      return {
        add: function() {
          RW.debug("Adding transports");
          for (var CW = arguments.length, AW = new Array(CW), bR = 0; bR < CW; bR++) AW[bR] = arguments[bR];
          AW.forEach((CW => {
            RW.debug(`Adding "${CW.name}" transport`), zR.some((WW => WW === CW)) ? RW.warn(`Transport ${CW.name} is already added`) : (CW.unpatchedConsole = WW, CW.internalLogger = RW, CW.config = MW, CW.metas = wW, zR.push(CW))
          }))
        },
        addBeforeSendHooks: function() {
          RW.debug("Adding beforeSendHooks\n", AW);
          for (var WW = arguments.length, MW = new Array(WW), wW = 0; wW < WW; wW++) MW[wW] = arguments[wW];
          MW.forEach((WW => {
            WW && AW.push(WW)
          }))
        },
        getBeforeSendHooks: () => [...AW],
        execute: WW => {
          var CW;
          if (!MW.paused && xM(wW).shouldCapture()) {
            if (BW = WW.meta, !pz.has(BW)) {
              var AW, NW, eW;
              const RW = null === (AW = wW.value.session) || void 0 === AW ? void 0 : AW.id,
                CW = Uz(wW);
              if (MW.paused) return;
              const zR = ZR({}, WW.meta);
              (null === (NW = zR.session) || void 0 === NW ? void 0 : NW.id) === RW && (null === (eW = CW.session) || void 0 === eW ? void 0 : eW.id) !== RW && (void 0 === CW.session ? delete zR.session : zR.session = CW.session), WW = ZR(ZR({}, WW), {}, {
                meta: hz(zR)
              })
            }
            var BW;
            (null === (CW = MW.batching) || void 0 === CW ? void 0 : CW.enabled) && (null === yR || void 0 === yR || yR.addItem(WW)), (WW => {
              var wW;
              if ((null === (wW = MW.batching) || void 0 === wW ? void 0 : wW.enabled) && zR.every((WW => WW.isBatched()))) return;
              const [CW] = bR([WW]);
              if (void 0 !== CW)
                for (const bR of zR) {
                  var AW;
                  RW.debug(`Transporting item using ${bR.name}\n`, CW), bR.isBatched() ? (null === (AW = MW.batching) || void 0 === AW ? void 0 : AW.enabled) || bR.send([CW]) : bR.send(CW)
                }
            })(WW)
          }
        },
        isPaused: () => MW.paused,
        pause: () => {
          RW.debug("Pausing transports"), null === yR || void 0 === yR || yR.pause(), MW.paused = !0
        },
        remove: function() {
          RW.debug("Removing transports");
          for (var WW = arguments.length, MW = new Array(WW), wW = 0; wW < WW; wW++) MW[wW] = arguments[wW];
          MW.forEach((WW => {
            RW.debug(`Removing "${WW.name}" transport`);
            const MW = zR.indexOf(WW); - 1 !== MW ? zR.splice(MW, 1) : RW.warn(`Transport "${WW.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var WW = arguments.length, MW = new Array(WW), wW = 0; wW < WW; wW++) MW[wW] = arguments[wW];
          RW.debug("Removing beforeSendHooks"), AW = AW.filter((WW => !MW.includes(WW)))
        },
        get transports() {
          return [...zR]
        },
        unpause: () => {
          RW.debug("Unpausing transports"), null === yR || void 0 === yR || yR.start(), MW.paused = !1
        }
      }
    }

    function vA(WW, RW) {
      if (RW.preserveOriginalError)
        for (const MW of WW) "exception" === MW.type && delete MW.payload.originalError;
      return WW
    }
    let Kz = SR;

    function uz(WW) {
      var RW;
      return Kz = null !== (RW = WW.unpatchedConsole) && void 0 !== RW ? RW : Kz, Kz
    }
    let Oz, nz = nR;

    function Gz(WW, RW) {
      return nz = rA(WW, RW.internalLoggerLevel), nz
    }

    function Lz(WW) {
      let {
        internalLogger: RW,
        config: MW,
        metas: wW,
        transports: CW,
        tracesApi: zR,
        userActionsApi: AW
      } = WW;
      var bR;
      RW.debug("Initializing exceptions API");
      let yR = null;
      Oz = null !== (bR = MW.parseStacktrace) && void 0 !== bR ? bR : Oz;
      const NW = WW => {
          RW.debug("Changing stacktrace parser"), Oz = null !== WW && void 0 !== WW ? WW : Oz
        },
        {
          ignoreErrors: eW = [],
          preserveOriginalError: BW
        } = MW;
      return NW(MW.parseStacktrace), {
        changeStacktraceParser: NW,
        getStacktraceParser: () => Oz,
        pushError: function(WW) {
          let {
            skipDedupe: bR,
            stackFrames: NW,
            type: tR,
            context: TW,
            spanContext: gR,
            timestampOverwriteMs: iR,
            originalError: YW,
            fingerprint: JW,
            fatal: PW
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(WW, RW) {
              const {
                message: MW,
                name: wW,
                stack: CW
              } = RW;
              return zR = WW, AW = MW + " " + wW + " " + CW, zR.some((WW => FW(WW) ? AW.includes(WW) : !!AW.match(WW)));
              var zR, AW
            }(eW, null !== YW && void 0 !== YW ? YW : WW)) try {
            var IW, oW;
            if (!xM(wW).shouldCapture()) return;
            const eW = UR(ZR(ZR({}, function(WW) {
                let RW = WW.cause;
                EW(RW) ? RW = WW.cause.toString() : null !== RW && (XW(WW.cause) || kR(WW.cause)) ? RW = hR(WW.cause) : null != RW && (RW = WW.cause.toString());
                return null == RW ? {} : {
                  cause: RW
                }
              }(null !== YW && void 0 !== YW ? YW : WW)), null !== TW && void 0 !== TW ? TW : {})),
              FW = ZR(ZR(ZR(ZR({
                type: tR || WW.name || "Error",
                value: WW.message,
                timestamp: iR ? iM(iR) : gM(),
                trace: gR ? {
                  trace_id: gR.traceId,
                  span_id: gR.spanId
                } : zR.getTraceContext()
              }, GW(eW) ? {} : {
                context: eW
              }), BW ? {
                originalError: YW
              } : {}), JW ? {
                fingerprint: JW
              } : {}), void 0 !== PW ? {
                fatal: PW
              } : {});
            NW = null !== (IW = NW) && void 0 !== IW ? IW : WW.stack ? null === Oz || void 0 === Oz ? void 0 : Oz(WW).frames : void 0, (null === NW || void 0 === NW ? void 0 : NW.length) && (FW.stacktrace = {
              frames: NW
            });
            const fW = {
              type: FW.type,
              value: FW.value,
              stacktrace: FW.stacktrace,
              context: FW.context,
              fingerprint: FW.fingerprint,
              fatal: null !== (oW = FW.fatal) && void 0 !== oW && oW
            };
            if (!bR && MW.dedupe && !lW(yR) && PR(fW, yR)) return void RW.debug("Skipping error push because it is the same as the last one\n", FW);
            const QW = yR,
              rR = Uz(wW);
            if (yR !== QW && !bR && MW.dedupe && PR(fW, yR)) return;
            yR = fW;
            const cR = {
              meta: rR,
              payload: FW,
              type: "exception"
            };
            RW.debug("Pushing exception\n", cR), FC(AW.getActiveUserAction(), cR) || CW.execute(cR)
          } catch (fW) {
            RW.error("Error pushing event", fW)
          }
        }
      }
    }

    function Hz(WW, RW, MW, wW, CW) {
      RW.debug("Initializing API");
      let zR = null;
      const AW = function(WW) {
          let {
            transports: RW,
            internalLogger: MW,
            config: wW,
            pushEvent: CW
          } = WW;
          var zR;
          const AW = null === (zR = wW.userActionsInstrumentation) || void 0 === zR ? void 0 : zR.excludeItem;
          let bR;
          const yR = () => bR;
          return {
            startUserAction: (WW, wW, zR) => {
              if (void 0 === yR()) {
                const MW = new oC({
                  name: WW,
                  transports: RW,
                  attributes: wW,
                  trigger: (null === zR || void 0 === zR ? void 0 : zR.triggerName) || "faroApiCall",
                  importance: (null === zR || void 0 === zR ? void 0 : zR.importance) || PC.Normal,
                  trackUserActionsExcludeItem: AW,
                  pushEvent: CW
                });
                return MW.filter((WW => [3, 2].includes(WW))).first().subscribe((() => {
                  bR = void 0
                })), lC.notify({
                  type: JC,
                  userAction: MW,
                  initialActivityTimeout: null === zR || void 0 === zR ? void 0 : zR.initialActivityTimeout
                }), bR = MW, bR
              }
              MW.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: yR
          }
        }({
          transports: CW,
          config: MW,
          internalLogger: RW,
          pushEvent: (WW, MW, wW, CW) => {
            zR ? zR(WW, MW, wW, CW) : RW.warn("pushEventImpl is not initialized. Event dropped:", {
              name: WW,
              attributes: MW,
              domain: wW,
              options: CW
            })
          }
        }),
        bR = function(WW, RW, MW, wW, CW) {
          let zR;
          return RW.debug("Initializing traces API"), {
            getOTEL: () => zR,
            getTraceContext: () => {
              const WW = null === zR || void 0 === zR ? void 0 : zR.trace.getSpanContext(zR.context.active());
              return WW ? {
                trace_id: WW.traceId,
                span_id: WW.spanId
              } : void 0
            },
            initOTEL: (WW, MW) => {
              RW.debug("Initializing OpenTelemetry"), zR = {
                trace: WW,
                context: MW
              }
            },
            isOTELInitialized: () => !!zR,
            pushTraces: WW => {
              try {
                if (!xM(wW).shouldCapture()) return;
                const MW = {
                  type: "trace",
                  payload: WW,
                  meta: Uz(wW)
                };
                RW.debug("Pushing trace\n", MW), CW.execute(MW)
              } catch (MW) {
                RW.error("Error pushing trace\n", MW)
              }
            }
          }
        }(0, RW, 0, wW, CW),
        yR = {
          unpatchedConsole: WW,
          internalLogger: RW,
          userActionsApi: AW,
          config: MW,
          metas: wW,
          transports: CW,
          tracesApi: bR
        },
        NW = function(WW) {
          let {
            internalLogger: RW,
            config: MW,
            metas: wW,
            transports: CW,
            tracesApi: zR,
            userActionsApi: AW
          } = WW, bR = null;
          return {
            pushEvent: function(WW, yR, NW) {
              let {
                skipDedupe: eW,
                spanContext: BW,
                timestampOverwriteMs: tR,
                customPayloadTransformer: TW = WW => WW
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!xM(wW).shouldCapture()) return;
                const gR = UR(yR),
                  iR = TW({
                    name: WW,
                    domain: null !== NW && void 0 !== NW ? NW : MW.eventDomain,
                    attributes: GW(gR) ? void 0 : gR,
                    timestamp: tR ? iM(tR) : gM(),
                    trace: BW ? {
                      trace_id: BW.traceId,
                      span_id: BW.spanId
                    } : zR.getTraceContext()
                  }),
                  YW = {
                    name: iR.name,
                    attributes: iR.attributes,
                    domain: iR.domain
                  };
                if (!eW && MW.dedupe && !lW(bR) && PR(YW, bR)) return void RW.debug("Skipping event push because it is the same as the last one\n", iR);
                const JW = bR,
                  PW = Uz(wW);
                if (bR !== JW && !eW && MW.dedupe && PR(YW, bR)) return;
                bR = YW;
                const IW = {
                  meta: PW,
                  payload: iR,
                  type: "event"
                };
                RW.debug("Pushing event\n", IW), FC(AW.getActiveUserAction(), IW) || CW.execute(IW)
              } catch (gR) {
                RW.error("Error pushing event", gR)
              }
            }
          }
        }(yR);
      return zR = NW.pushEvent, ZR(ZR(ZR(ZR(ZR(ZR(ZR({}, bR), Lz(yR)), function(WW) {
        let RW, MW, wW, CW, {
          internalLogger: zR,
          metas: AW
        } = WW;
        zR.debug("Initializing meta API");
        const bR = WW => {
            MW && AW.remove(MW), MW = {
              user: WW
            }, AW.add(MW)
          },
          yR = (WW, MW) => {
            var wW;
            const CW = null === MW || void 0 === MW ? void 0 : MW.overrides,
              zR = CW ? {
                overrides: ZR(ZR({}, null === RW || void 0 === RW || null === (wW = RW.session) || void 0 === wW ? void 0 : wW.overrides), CW)
              } : {};
            RW && AW.remove(RW), RW = {
              session: ZR(ZR({}, GW(WW) ? void 0 : WW), zR)
            }, AW.add(RW)
          },
          NW = (WW, RW) => {
            xM(AW).notifySessionUpdate({
              type: "replace",
              session: WW,
              overrides: null === RW || void 0 === RW ? void 0 : RW.overrides
            }), yR(WW, RW)
          },
          eW = () => AW.value.session,
          BW = () => AW.value.page;
        return {
          setUser: bR,
          resetUser: bR,
          setSession: NW,
          resetSession: NW,
          getSession: eW,
          setView: (WW, RW) => {
            var MW;
            if ((null === RW || void 0 === RW ? void 0 : RW.overrides) && (xM(AW).notifySessionUpdate({
                type: "overrides",
                overrides: RW.overrides
              }), yR(eW(), {
                overrides: RW.overrides
              })), (null === wW || void 0 === wW || null === (MW = wW.view) || void 0 === MW ? void 0 : MW.name) === (null === WW || void 0 === WW ? void 0 : WW.name)) return;
            const CW = wW;
            wW = {
              view: WW
            }, AW.add(wW), CW && AW.remove(CW)
          },
          getView: () => AW.value.view,
          setPage: WW => {
            var RW;
            const MW = FW(WW) ? ZR(ZR({}, null !== (RW = null === CW || void 0 === CW ? void 0 : CW.page) && void 0 !== RW ? RW : BW()), {}, {
              id: WW
            }) : WW;
            CW && AW.remove(CW), CW = {
              page: MW
            }, AW.add(CW)
          },
          getPage: BW
        }
      }(yR)), function(WW) {
        let {
          internalLogger: RW,
          config: MW,
          metas: wW,
          transports: CW,
          tracesApi: zR,
          userActionsApi: AW
        } = WW;
        var bR;
        RW.debug("Initializing logs API");
        let yR = null;
        const NW = null !== (bR = MW.logArgsSerializer) && void 0 !== bR ? bR : aw;
        return {
          pushLog: function(WW) {
            let {
              context: bR,
              level: eW,
              skipDedupe: BW,
              spanContext: tR,
              timestampOverwriteMs: TW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!xM(wW).shouldCapture()) return;
              const gR = UR(bR),
                iR = {
                  message: NW(WW),
                  level: null !== eW && void 0 !== eW ? eW : "log",
                  context: GW(gR) ? void 0 : gR,
                  timestamp: TW ? iM(TW) : gM(),
                  trace: tR ? {
                    trace_id: tR.traceId,
                    span_id: tR.spanId
                  } : zR.getTraceContext()
                },
                YW = {
                  message: iR.message,
                  level: iR.level,
                  context: iR.context
                };
              if (!BW && MW.dedupe && !lW(yR) && PR(YW, yR)) return void RW.debug("Skipping log push because it is the same as the last one\n", iR);
              const JW = yR,
                PW = Uz(wW);
              if (yR !== JW && !BW && MW.dedupe && PR(YW, yR)) return;
              yR = YW;
              const IW = {
                type: "log",
                payload: iR,
                meta: PW
              };
              RW.debug("Pushing log\n", IW), FC(AW.getActiveUserAction(), IW) || CW.execute(IW)
            } catch (gR) {
              RW.error("Error pushing log\n", gR)
            }
          }
        }
      }(yR)), function(WW) {
        let {
          internalLogger: RW,
          config: MW,
          metas: wW,
          transports: CW,
          tracesApi: zR,
          userActionsApi: AW
        } = WW;
        RW.debug("Initializing measurements API");
        let bR = null;
        return {
          pushMeasurement: function(WW) {
            let {
              skipDedupe: yR,
              context: NW,
              spanContext: eW,
              timestampOverwriteMs: BW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!xM(wW).shouldCapture()) return;
              const tR = UR(NW),
                TW = ZR(ZR({}, WW), {}, {
                  trace: eW ? {
                    trace_id: eW.traceId,
                    span_id: eW.spanId
                  } : zR.getTraceContext(),
                  timestamp: BW ? iM(BW) : gM(),
                  context: GW(tR) ? void 0 : tR
                }),
                gR = {
                  type: TW.type,
                  values: TW.values,
                  context: TW.context
                };
              if (!yR && MW.dedupe && !lW(bR) && PR(gR, bR)) return void RW.debug("Skipping measurement push because it is the same as the last one\n", TW);
              const iR = bR,
                YW = Uz(wW);
              if (bR !== iR && !yR && MW.dedupe && PR(gR, bR)) return;
              bR = gR;
              const JW = {
                type: "measurement",
                payload: TW,
                meta: YW
              };
              RW.debug("Pushing measurement\n", JW), FC(AW.getActiveUserAction(), JW) || CW.execute(JW)
            } catch (tR) {
              RW.error("Error pushing measurement\n", tR)
            }
          }
        }
      }(yR)), NW), AW)
    }

    function Dz(WW) {
      const RW = uz(WW),
        MW = Gz(RW, WW);
      if (gR() && !WW.isolate) return void MW.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      MW.debug("Initializing");
      const wW = function(WW, RW) {
          let MW, wW = [],
            CW = [],
            zR = [],
            AW = 0,
            bR = 0;
          const yR = () => wW.reduce(((WW, RW) => Object.assign(WW, jR(RW) ? RW() : RW)), {}),
            NW = () => {
              if (CW.length) {
                const WW = yR();
                CW.forEach((RW => RW(WW)))
              }
            };
          return {
            add: function() {
              for (var WW = arguments.length, MW = new Array(WW), CW = 0; CW < WW; CW++) MW[CW] = arguments[CW];
              RW.debug("Adding metas\n", MW), wW.push(...MW), NW()
            },
            remove: function() {
              for (var WW = arguments.length, MW = new Array(WW), CW = 0; CW < WW; CW++) MW[CW] = arguments[CW];
              RW.debug("Removing metas\n", MW), wW = wW.filter((WW => !MW.includes(WW))), NW()
            },
            addListener: WW => {
              RW.debug("Adding metas listener\n", WW), CW.push(WW)
            },
            removeListener: WW => {
              RW.debug("Removing metas listener\n", WW), CW = CW.filter((RW => RW !== WW))
            },
            capture: WW => {
              var RW;
              const wW = void 0 !== MW,
                CW = null !== (RW = MW) && void 0 !== RW ? RW : zR;
              wW || (MW = CW, AW = 0, bR = CW.length);
              try {
                for (; AW < bR;) {
                  const WW = CW[AW++];
                  null === WW || void 0 === WW || WW()
                }
                const RW = hz(yR());
                return null === WW || void 0 === WW || WW(), RW
              } finally {
                wW || (MW = void 0)
              }
            },
            addCaptureListener: WW => {
              zR.push(WW)
            },
            removeCaptureListener: WW => {
              zR = zR.filter((RW => RW !== WW))
            },
            get value() {
              return yR()
            }
          }
        }(0, MW),
        CW = xA(RW, MW, WW, wW),
        zR = Hz(RW, MW, WW, wW, CW),
        AW = function(WW, RW, MW, wW, CW, zR) {
          RW.debug("Initializing instrumentations");
          const AW = [];
          return {
            add: function() {
              RW.debug("Adding instrumentations");
              for (var bR = arguments.length, yR = new Array(bR), NW = 0; NW < bR; NW++) yR[NW] = arguments[NW];
              yR.forEach((bR => {
                RW.debug(`Adding "${bR.name}" instrumentation`), AW.some((WW => WW.name === bR.name)) ? RW.warn(`Instrumentation ${bR.name} is already added`) : (bR.unpatchedConsole = WW, bR.internalLogger = RW, bR.config = MW, bR.metas = wW, bR.transports = CW, bR.api = zR, AW.push(bR), bR.initialize())
              }))
            },
            get instrumentations() {
              return [...AW]
            },
            remove: function() {
              RW.debug("Removing instrumentations");
              for (var WW = arguments.length, MW = new Array(WW), wW = 0; wW < WW; wW++) MW[wW] = arguments[wW];
              MW.forEach((WW => {
                var MW, wW;
                RW.debug(`Removing "${WW.name}" instrumentation`);
                const CW = AW.reduce(((RW, MW, wW) => null === RW && MW.name === WW.name ? wW : null), null);
                null !== CW ? (null === (MW = (wW = AW[CW]).destroy) || void 0 === MW || MW.call(wW), AW.splice(CW, 1)) : RW.warn(`Instrumentation "${WW.name}" is not added`)
              }))
            }
          }
        }(RW, MW, WW, wW, CW, zR),
        bR = YW(RW, MW, WW, wW, CW, zR, AW);
      return Vz(bR),
        function(WW) {
          WW.transports.add(...WW.config.transports), WW.transports.addBeforeSendHooks(WW.config.beforeSend)
        }(bR),
        function(WW) {
          WW.instrumentations.add(...WW.config.instrumentations)
        }(bR), bR
    }

    function qA(WW) {
      const RW = kA(WW);
      if (RW) return Dz(RW)
    }
  },
  7e3: function(WW, RW, MW) {
    var wW;
    ! function(CW, zR) {
      var AW = "function",
        bR = "undefined",
        yR = "object",
        NW = "string",
        eW = "major",
        BW = "model",
        tR = "name",
        TW = "type",
        gR = "vendor",
        iR = "version",
        YW = "architecture",
        JW = "console",
        PW = "mobile",
        IW = "tablet",
        oW = "smarttv",
        lW = "wearable",
        FW = "embedded",
        fW = "Amazon",
        QW = "Apple",
        rR = "ASUS",
        cR = "BlackBerry",
        XW = "Browser",
        jR = "Chrome",
        kR = "Firefox",
        aR = "Google",
        sW = "Honor",
        dW = "Huawei",
        pW = "LG",
        hW = "Microsoft",
        UW = "Motorola",
        EW = "Nvidia",
        VW = "OnePlus",
        mR = "Opera",
        xR = "OPPO",
        vR = "Samsung",
        KW = "Sharp",
        uW = "Sony",
        OW = "Xiaomi",
        nW = "Zebra",
        GW = "Facebook",
        LW = "Chromium OS",
        HW = "Mac OS",
        DW = " Browser",
        qR = function(WW) {
          for (var RW = {}, MW = 0; MW < WW.length; MW++) RW[WW[MW].toUpperCase()] = WW[MW];
          return RW
        },
        ZW = function(WW, RW) {
          return typeof WW === NW && -1 !== SW(RW).indexOf(SW(WW))
        },
        SW = function(WW) {
          return WW.toLowerCase()
        },
        WR = function(WW, RW) {
          if (typeof WW === NW) return WW = WW.replace(/^\s\s*/, ""), typeof RW === bR ? WW : WW.substring(0, 500)
        },
        RR = function(WW, RW) {
          for (var MW, wW, CW, bR, NW, eW, BW = 0; BW < RW.length && !NW;) {
            var tR = RW[BW],
              TW = RW[BW + 1];
            for (MW = wW = 0; MW < tR.length && !NW && tR[MW];)
              if (NW = tR[MW++].exec(WW))
                for (CW = 0; CW < TW.length; CW++) eW = NW[++wW], typeof(bR = TW[CW]) === yR && bR.length > 0 ? 2 === bR.length ? typeof bR[1] == AW ? this[bR[0]] = bR[1].call(this, eW) : this[bR[0]] = bR[1] : 3 === bR.length ? typeof bR[1] !== AW || bR[1].exec && bR[1].test ? this[bR[0]] = eW ? eW.replace(bR[1], bR[2]) : zR : this[bR[0]] = eW ? bR[1].call(this, eW, bR[2]) : zR : 4 === bR.length && (this[bR[0]] = eW ? bR[3].call(this, eW.replace(bR[1], bR[2])) : zR) : this[bR] = eW || zR;
            BW += 2
          }
        },
        MR = function(WW, RW) {
          for (var MW in RW)
            if (typeof RW[MW] === yR && RW[MW].length > 0) {
              for (var wW = 0; wW < RW[MW].length; wW++)
                if (ZW(RW[MW][wW], WW)) return "?" === MW ? zR : MW
            } else if (ZW(RW[MW], WW)) return "?" === MW ? zR : MW;
          return RW.hasOwnProperty("*") ? RW["*"] : WW
        },
        wR = {
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
        CR = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [iR, [tR, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [iR, [tR, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [tR, iR],
            [/opios[\/ ]+([\w\.]+)/i],
            [iR, [tR, mR + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [iR, [tR, mR + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [iR, [tR, mR]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [iR, [tR, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [iR, [tR, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [tR, iR],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [iR, [tR, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [iR, [tR, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [iR, [tR, "UC" + XW]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [iR, [tR, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [iR, [tR, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [iR, [tR, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [iR, [tR, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [iR, [tR, "Smart Lenovo " + XW]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [tR, /(.+)/, "$1 Secure " + XW], iR
            ],
            [/\bfocus\/([\w\.]+)/i],
            [iR, [tR, kR + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [iR, [tR, mR + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [iR, [tR, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [iR, [tR, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [iR, [tR, mR + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [iR, [tR, "MIUI" + DW]],
            [/fxios\/([\w\.-]+)/i],
            [iR, [tR, kR]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [iR, [tR, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [tR, /(.+)/, "$1Browser"], iR
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [tR, /(.+)/, "$1" + DW], iR
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [iR, [tR, vR + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [iR, [tR, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [tR, "Sogou Mobile"], iR
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [tR, iR],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [tR],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [iR, tR],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [tR, GW], iR
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [tR, iR],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [iR, [tR, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [iR, [tR, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [iR, [tR, jR + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [tR, jR + " WebView"], iR
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [iR, [tR, "Android " + XW]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [tR, iR],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [iR, [tR, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [iR, tR],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [tR, [iR, MR, {
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
            [tR, iR],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [tR, "Netscape"], iR
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [tR, iR],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [iR, [tR, kR + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [tR, [iR, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [tR, [iR, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [YW, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [YW, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [YW, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [YW, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [YW, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [YW, /ower/, "", SW]
            ],
            [/ sun4\w[;\)]/i],
            [
              [YW, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [YW, SW]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [BW, [gR, vR],
              [TW, IW]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [BW, [gR, vR],
              [TW, PW]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [BW, [gR, QW],
              [TW, PW]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [BW, [gR, QW],
              [TW, IW]
            ],
            [/(macintosh);/i],
            [BW, [gR, QW]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [BW, [gR, KW],
              [TW, PW]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [BW, [gR, sW],
              [TW, IW]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [BW, [gR, sW],
              [TW, PW]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [BW, [gR, dW],
              [TW, IW]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [BW, [gR, dW],
              [TW, PW]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [BW, /_/g, " "],
              [gR, OW],
              [TW, IW]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [BW, /_/g, " "],
              [gR, OW],
              [TW, PW]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [BW, [gR, xR],
              [TW, PW]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [BW, [gR, MR, {
                OnePlus: ["304", "403", "203"],
                "*": xR
              }],
              [TW, IW]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [BW, [gR, "Vivo"],
              [TW, PW]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [BW, [gR, "Realme"],
              [TW, PW]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [BW, [gR, UW],
              [TW, PW]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [BW, [gR, UW],
              [TW, IW]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [BW, [gR, pW],
              [TW, IW]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [BW, [gR, pW],
              [TW, PW]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [BW, [gR, "Lenovo"],
              [TW, IW]
            ],
            [/(nokia) (t[12][01])/i],
            [gR, BW, [TW, IW]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [BW, /_/g, " "],
              [TW, PW],
              [gR, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [BW, [gR, aR],
              [TW, IW]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [BW, [gR, aR],
              [TW, PW]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [BW, [gR, uW],
              [TW, PW]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [BW, "Xperia Tablet"],
              [gR, uW],
              [TW, IW]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [BW, [gR, VW],
              [TW, PW]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [BW, [gR, fW],
              [TW, IW]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [BW, /(.+)/g, "Fire Phone $1"],
              [gR, fW],
              [TW, PW]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [BW, gR, [TW, IW]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [BW, [gR, cR],
              [TW, PW]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [BW, [gR, rR],
              [TW, IW]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [BW, [gR, rR],
              [TW, PW]
            ],
            [/(nexus 9)/i],
            [BW, [gR, "HTC"],
              [TW, IW]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [gR, [BW, /_/g, " "],
              [TW, PW]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [BW, [gR, "TCL"],
              [TW, IW]
            ],
            [/(itel) ((\w+))/i],
            [
              [gR, SW], BW, [TW, MR, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [BW, [gR, "Acer"],
              [TW, IW]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [BW, [gR, "Meizu"],
              [TW, PW]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [BW, [gR, "Ulefone"],
              [TW, PW]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [BW, [gR, "Energizer"],
              [TW, PW]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [BW, [gR, "Cat"],
              [TW, PW]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [BW, [gR, "Smartfren"],
              [TW, PW]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [BW, [gR, "Nothing"],
              [TW, PW]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [BW, [gR, "Archos"],
              [TW, IW]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [BW, [gR, "Archos"],
              [TW, PW]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [gR, BW, [TW, IW]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [gR, BW, [TW, PW]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [gR, BW, [TW, IW]],
            [/(surface duo)/i],
            [BW, [gR, hW],
              [TW, IW]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [BW, [gR, "Fairphone"],
              [TW, PW]
            ],
            [/(u304aa)/i],
            [BW, [gR, "AT&T"],
              [TW, PW]
            ],
            [/\bsie-(\w*)/i],
            [BW, [gR, "Siemens"],
              [TW, PW]
            ],
            [/\b(rct\w+) b/i],
            [BW, [gR, "RCA"],
              [TW, IW]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [BW, [gR, "Dell"],
              [TW, IW]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [BW, [gR, "Verizon"],
              [TW, IW]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [BW, [gR, "Barnes & Noble"],
              [TW, IW]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [BW, [gR, "NuVision"],
              [TW, IW]
            ],
            [/\b(k88) b/i],
            [BW, [gR, "ZTE"],
              [TW, IW]
            ],
            [/\b(nx\d{3}j) b/i],
            [BW, [gR, "ZTE"],
              [TW, PW]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [BW, [gR, "Swiss"],
              [TW, PW]
            ],
            [/\b(zur\d{3}) b/i],
            [BW, [gR, "Swiss"],
              [TW, IW]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [BW, [gR, "Zeki"],
              [TW, IW]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [gR, "Dragon Touch"], BW, [TW, IW]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [BW, [gR, "Insignia"],
              [TW, IW]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [BW, [gR, "NextBook"],
              [TW, IW]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [gR, "Voice"], BW, [TW, PW]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [gR, "LvTel"], BW, [TW, PW]
            ],
            [/\b(ph-1) /i],
            [BW, [gR, "Essential"],
              [TW, PW]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [BW, [gR, "Envizen"],
              [TW, IW]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [BW, [gR, "MachSpeed"],
              [TW, IW]
            ],
            [/\btu_(1491) b/i],
            [BW, [gR, "Rotor"],
              [TW, IW]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [BW, [gR, EW],
              [TW, IW]
            ],
            [/(sprint) (\w+)/i],
            [gR, BW, [TW, PW]],
            [/(kin\.[onetw]{3})/i],
            [
              [BW, /\./g, " "],
              [gR, hW],
              [TW, PW]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [BW, [gR, nW],
              [TW, IW]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [BW, [gR, nW],
              [TW, PW]
            ],
            [/smart-tv.+(samsung)/i],
            [gR, [TW, oW]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [BW, /^/, "SmartTV"],
              [gR, vR],
              [TW, oW]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [gR, pW],
              [TW, oW]
            ],
            [/(apple) ?tv/i],
            [gR, [BW, QW + " TV"],
              [TW, oW]
            ],
            [/crkey/i],
            [
              [BW, jR + "cast"],
              [gR, aR],
              [TW, oW]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [BW, [gR, fW],
              [TW, oW]
            ],
            [/(shield \w+ tv)/i],
            [BW, [gR, EW],
              [TW, oW]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [BW, [gR, KW],
              [TW, oW]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [BW, [gR, uW],
              [TW, oW]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [BW, [gR, OW],
              [TW, oW]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [gR, BW, [TW, oW]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [gR, WR],
              [BW, WR],
              [TW, oW]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [BW, [TW, oW]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [TW, oW]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [gR, BW, [TW, JW]],
            [/droid.+; (shield)( bui|\))/i],
            [BW, [gR, EW],
              [TW, JW]
            ],
            [/(playstation \w+)/i],
            [BW, [gR, uW],
              [TW, JW]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [BW, [gR, hW],
              [TW, JW]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [BW, [gR, vR],
              [TW, lW]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [gR, BW, [TW, lW]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [BW, [gR, xR],
              [TW, lW]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [BW, [gR, QW],
              [TW, lW]
            ],
            [/(opwwe\d{3})/i],
            [BW, [gR, VW],
              [TW, lW]
            ],
            [/(moto 360)/i],
            [BW, [gR, UW],
              [TW, lW]
            ],
            [/(smartwatch 3)/i],
            [BW, [gR, uW],
              [TW, lW]
            ],
            [/(g watch r)/i],
            [BW, [gR, pW],
              [TW, lW]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [BW, [gR, nW],
              [TW, lW]
            ],
            [/droid.+; (glass) \d/i],
            [BW, [gR, aR],
              [TW, lW]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [gR, BW, [TW, lW]],
            [/; (quest( \d| pro)?)/i],
            [BW, [gR, GW],
              [TW, lW]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [gR, [TW, FW]],
            [/(aeobc)\b/i],
            [BW, [gR, fW],
              [TW, FW]
            ],
            [/(homepod).+mac os/i],
            [BW, [gR, QW],
              [TW, FW]
            ],
            [/windows iot/i],
            [
              [TW, FW]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [BW, [TW, PW]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [BW, [TW, IW]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [TW, IW]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [TW, PW]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [BW, [gR, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [iR, [tR, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [tR, iR],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [iR, [tR, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [tR, iR],
            [/ladybird\//i],
            [
              [tR, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [iR, tR]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [tR, iR],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [tR, [iR, MR, wR]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [iR, MR, wR],
              [tR, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [iR, /_/g, "."],
              [tR, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [tR, HW],
              [iR, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [iR, tR],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [tR, /(.+)/, "$1 Touch"], iR
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [tR, iR],
            [/\(bb(10);/i],
            [iR, [tR, cR]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [iR, [tR, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [iR, [tR, kR + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [iR, [tR, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [iR, [tR, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [iR, [tR, jR + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [tR, LW], iR
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [tR, iR],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [tR, "Solaris"], iR
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [tR, iR]
          ]
        },
        zM = function(WW, RW) {
          if (typeof WW === yR && (RW = WW, WW = zR), !(this instanceof zM)) return new zM(WW, RW).getResult();
          var MW = typeof CW !== bR && CW.navigator ? CW.navigator : zR,
            wW = WW || (MW && MW.userAgent ? MW.userAgent : ""),
            JW = MW && MW.userAgentData ? MW.userAgentData : zR,
            oW = RW ? function(WW, RW) {
              var MW = {};
              for (var wW in WW) RW[wW] && RW[wW].length % 2 === 0 ? MW[wW] = RW[wW].concat(WW[wW]) : MW[wW] = WW[wW];
              return MW
            }(CR, RW) : CR,
            lW = MW && MW.userAgent == wW;
          return this.getBrowser = function() {
            var WW, RW = {};
            return RW[tR] = zR, RW[iR] = zR, RR.call(RW, wW, oW.browser), RW[eW] = typeof(WW = RW[iR]) === NW ? WW.replace(/[^\d\.]/g, "").split(".")[0] : zR, lW && MW && MW.brave && typeof MW.brave.isBrave == AW && (RW[tR] = "Brave"), RW
          }, this.getCPU = function() {
            var WW = {};
            return WW[YW] = zR, RR.call(WW, wW, oW.cpu), WW
          }, this.getDevice = function() {
            var WW = {};
            return WW[gR] = zR, WW[BW] = zR, WW[TW] = zR, RR.call(WW, wW, oW.device), lW && !WW[TW] && JW && JW.mobile && (WW[TW] = PW), lW && "Macintosh" == WW[BW] && MW && typeof MW.standalone !== bR && MW.maxTouchPoints && MW.maxTouchPoints > 2 && (WW[BW] = "iPad", WW[TW] = IW), WW
          }, this.mC = function() {
            var WW = {};
            return WW[tR] = zR, WW[iR] = zR, RR.call(WW, wW, oW.engine), WW
          }, this.getOS = function() {
            var WW = {};
            return WW[tR] = zR, WW[iR] = zR, RR.call(WW, wW, oW.os), lW && !WW[tR] && JW && JW.platform && "Unknown" != JW.platform && (WW[tR] = JW.platform.replace(/chrome os/i, LW).replace(/macos/i, HW)), WW
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.mC(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return wW
          }, this.setUA = function(WW) {
            return wW = typeof WW === NW && WW.length > 500 ? WR(WW, 500) : WW, this
          }, this.setUA(wW), this
        };
      zM.VERSION = "1.0.41", zM.BROWSER = qR([tR, iR, eW]), zM.CPU = qR([YW]), zM.DEVICE = qR([BW, gR, TW, JW, PW, oW, IW, lW, FW]), zM.ENGINE = zM.OS = qR([tR, iR]), typeof RW !== bR ? (WW.exports && (RW = WW.exports = zM), RW.UAParser = zM) : MW.amdO ? (wW = function() {
        return zM
      }.call(RW, MW, RW, WW)) === zR || (WW.exports = wW) : typeof CW !== bR && (CW.UAParser = zM);
      var AR = typeof CW !== bR && (CW.jQuery || CW.Zepto);
      if (AR && !AR.ua) {
        var bM = new zM;
        AR.ua = bM.getResult(), AR.ua.get = function() {
          return bM.getUA()
        }, AR.ua.set = function(WW) {
          bM.setUA(WW);
          var RW = bM.getResult();
          for (var MW in RW) AR.ua[MW] = RW[MW]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);