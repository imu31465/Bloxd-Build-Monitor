export const id = 37;
export const ids = [37];
export const modules = {
  7278: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BaseExtension: () => Uz,
      BaseInstrumentation: () => Xz,
      BaseTransport: () => by,
      CSPInstrumentation: () => Wy,
      ConsoleInstrumentation: () => Oz,
      ConsoleTransport: () => zQ,
      EVENT_CLICK: () => GX,
      EVENT_NAVIGATION: () => BX,
      EVENT_ROUTE_CHANGE: () => LX,
      EVENT_SESSION_EXTEND: () => WX,
      EVENT_SESSION_RESUME: () => PX,
      EVENT_SESSION_START: () => RX,
      EVENT_VIEW_CHANGED: () => ZX,
      ErrorsInstrumentation: () => rz,
      FetchTransport: () => BQ,
      InternalLoggerLevel: () => mX,
      LogLevel: () => Gz,
      MAX_SESSION_PERSISTENCE_TIME: () => oU,
      NavigationInstrumentation: () => vy,
      Observable: () => kz,
      PerformanceInstrumentation: () => xc,
      PersistentSessionsManager: () => iX,
      SESSION_EXPIRATION_TIME: () => QU,
      SESSION_INACTIVITY_TIME: () => AU,
      STORAGE_KEY: () => yU,
      SessionInstrumentation: () => cz,
      TransportItemType: () => Ty,
      UserActionInstrumentation: () => Py,
      UserActionState: () => py,
      VERSION: () => zz,
      ViewInstrumentation: () => fz,
      VolatileSessionsManager: () => HX,
      WebVitalsInstrumentation: () => Sc,
      allLogLevels: () => Zz,
      browserMeta: () => xy,
      buildStackFrame: () => yz,
      captureMetas: () => fQ,
      createInternalLogger: () => dQ,
      createPromiseBuffer: () => NQ,
      createSession: () => jy,
      deepEqual: () => kX,
      defaultEventDomain: () => cU,
      defaultExceptionType: () => dz,
      defaultGlobalObjectKey: () => LQ,
      defaultInternalLoggerLevel: () => xX,
      defaultLogLevel: () => Bz,
      faro: () => aU,
      genShortID: () => gX,
      getCurrentTimestamp: () => pX,
      getDataFromSafariExtensions: () => Nz,
      getIgnoreUrls: () => JU,
      getInternalFaroFromGlobalObject: () => NU,
      getStackFramesFromError: () => pz,
      getTransportBody: () => XQ,
      getUrlFromResource: () => KU,
      getWebInstrumentations: () => Vy,
      globalObject: () => EU,
      initializeFaro: () => bQ,
      internalGlobalObjectKey: () => YU,
      isArray: () => wU,
      isBoolean: () => dU,
      isDomError: () => MU,
      isDomException: () => vU,
      isElement: () => sU,
      isElementDefined: () => VU,
      kY: () => xU,
      isError: () => iU,
      isErrorDefined: () => fU,
      isErrorEvent: () => HU,
      isEvent: () => uU,
      isEventDefined: () => rU,
      isFunction: () => CU,
      isInstanceOf: () => GU,
      isInt: () => WU,
      isInternalFaroOnGlobalObject: () => pU,
      isMap: () => mU,
      isMapDefined: () => nU,
      isNull: () => ZU,
      isNumber: () => PU,
      isObject: () => eU,
      isPrimitive: () => SU,
      isRegExp: () => qU,
      isString: () => RU,
      isSymbol: () => LU,
      isSyntheticEvent: () => lU,
      isThenable: () => OU,
      isToString: () => kU,
      isTypeof: () => gU,
      isUndefined: () => BU,
      makeCoreConfig: () => wQ,
      noop: () => nX,
      osMeta: () => Jy,
      parseStacktrace: () => az,
      sdkMeta: () => Ky,
      setInternalFaroOnGlobalObject: () => IU,
      transportItemTypeToBodyKey: () => hy,
      unknownString: () => uz,
      userActionDataAttribute: () => Jc,
      userActionTimeoutDataAttribute: () => jc
    });
    const cU = "browser",
      yU = "com.grafana.faro.session",
      QU = 144e5,
      AU = 9e5,
      FU = 1e3,
      oU = AU,
      DU = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: oU
      };
    const EU = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof zU.g ? zU.g : "undefined" !== typeof self ? self : void 0;
    const YU = "_faroInternal";

    function NU() {
      return EU[YU]
    }

    function IU(UU) {
      UU.config.isolate ? UU.internalLogger.debug("Skipping registering internal Faro instance on global object") : (UU.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(EU, YU, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: UU
      }))
    }

    function pU() {
      return YU in EU
    }
    let aU = {
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

    function tU(UU, XU, zU, cU, yU, QU, AU) {
      return XU.debug("Initializing Faro"), aU = {
          api: QU,
          config: zU,
          instrumentations: AU,
          internalLogger: XU,
          metas: cU,
          pause: yU.pause,
          transports: yU,
          unpatchedConsole: UU,
          unpause: yU.unpause
        }, IU(aU),
        function(UU) {
          if (UU.config.preventGlobalExposure) UU.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (UU.internalLogger.debug(`Registering public faro reference in the global scope using "${UU.config.globalObjectKey}" key`), UU.config.globalObjectKey in EU) return void UU.internalLogger.warn(`Skipping global registration due to key "${UU.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(EU, UU.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: UU
            })
          }
        }(aU), aU
    }

    function gU(UU, XU) {
      return typeof UU === XU
    }

    function kU(UU, XU) {
      return Object.prototype.toString.call(UU) === `[object ${XU}]`
    }

    function GU(UU, XU) {
      try {
        return UU instanceof XU
      } catch (zU) {
        return !1
      }
    }
    const BU = UU => gU(UU, "undefined"),
      ZU = UU => gU(UU, "null"),
      RU = UU => gU(UU, "string"),
      PU = UU => gU(UU, "number") && !isNaN(UU) || gU(UU, "bigint"),
      WU = UU => PU(UU) && Number.isInteger(UU),
      dU = UU => gU(UU, "boolean"),
      LU = UU => gU(UU, "symbol"),
      eU = UU => !ZU(UU) && gU(UU, "object"),
      CU = UU => gU(UU, "function"),
      wU = UU => kU(UU, "Array"),
      qU = UU => kU(UU, "RegExp"),
      OU = UU => CU(null === UU || void 0 === UU ? void 0 : UU.then),
      SU = UU => !eU(UU) && !CU(UU),
      rU = "undefined" !== typeof Event,
      uU = UU => rU && GU(UU, Event),
      fU = "undefined" !== typeof Error,
      iU = UU => fU && GU(UU, Error),
      HU = UU => kU(UU, "ErrorEvent"),
      MU = UU => kU(UU, "DOMError"),
      vU = UU => kU(UU, "DOMException"),
      VU = "undefined" !== typeof Element,
      sU = UU => VU && GU(UU, Element),
      nU = "undefined" !== typeof Map,
      mU = UU => nU && GU(UU, Map),
      lU = UU => eU(UU) && "nativeEvent" in UU && "preventDefault" in UU && "stopPropagation" in UU;

    function xU(UU) {
      return null == UU || (wU(UU) || RU(UU) ? 0 === UU.length : !!eU(UU) && 0 === Object.keys(UU).length)
    }

    function JU() {
      return aU.transports.transports.flatMap((UU => UU.getIgnoreUrls()))
    }

    function jU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return JU().some((XU => UU && null != UU.match(XU)))
    }

    function KU(UU) {
      return RU(UU) ? UU : UU instanceof URL ? UU.href : !xU(UU) && CU(null === UU || void 0 === UU ? void 0 : UU.toString) ? UU.toString() : void 0
    }
    const bU = "sessionStorage",
      TU = "localStorage";

    function hU(UU) {
      try {
        let XU;
        XU = window[UU];
        const zU = "__faro_storage_test__";
        return XU.setItem(zU, zU), XU.removeItem(zU), !0
      } catch (zU) {
        var XU;
        return null === (XU = aU.internalLogger) || void 0 === XU || XU.info(`Web storage of type ${UU} is not available. Reason: ${zU}`), !1
      }
    }

    function UX(UU, XU) {
      return QX(XU) ? window[XU].getItem(UU) : null
    }

    function XX(UU, XU, zU) {
      if (QX(zU)) try {
        window[zU].setItem(UU, XU)
      } catch (cU) {}
    }

    function zX(UU, XU) {
      QX(XU) && window[XU].removeItem(UU)
    }
    const cX = hU(TU),
      yX = hU(bU);

    function QX(UU) {
      return UU === TU ? cX : UU === bU && yX
    }

    function AX(UU) {
      return AX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, AX(UU)
    }

    function FX(UU) {
      var XU = function(UU, XU) {
        if ("object" != AX(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != AX(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == AX(XU) ? XU : XU + ""
    }

    function oX(UU, XU, zU) {
      return (XU = FX(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function DX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function EX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? DX(Object(zU), !0).forEach((function(XU) {
          oX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : DX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function YX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aU;
      var XU, zU, cU;
      const yU = UU.config.sessionTracking,
        QU = null !== (XU = null !== (zU = null === yU || void 0 === yU || null === (cU = yU.sampler) || void 0 === cU ? void 0 : cU.call(yU, {
          metas: UU.metas.value
        })) && void 0 !== zU ? zU : null === yU || void 0 === yU ? void 0 : yU.samplingRate) && void 0 !== XU ? XU : 1,
        AU = "number" === typeof QU ? function(UU) {
          return Math.min(1, Math.max(0, UU))
        }(QU) : 0;
      if (!(AU > 0)) return !1;
      if (1 === AU) return !0;
      try {
        const UU = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === UU || void 0 === UU ? void 0 : UU.getRandomValues)) {
          const XU = new Uint32Array(1);
          return UU.getRandomValues(XU), XU[0] / Math.pow(2, 32) < AU
        }
      } catch (FU) {}
      return Math.random() < AU
    }

    function NX() {
      return Date.now()
    }

    function IX() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function pX() {
      return (new Date).toISOString()
    }

    function aX(UU) {
      return new Date(UU).toISOString()
    }
    const tX = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function gX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const XU = new Uint32Array(UU),
        zU = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === zU || void 0 === zU ? void 0 : zU.getRandomValues) zU.getRandomValues(XU);
      else
        for (let yU = 0; yU < UU; yU++) XU[yU] = Math.floor(4294967296 * Math.random());
      let cU = "";
      for (let yU = 0; yU < UU; yU++) cU += tX[XU[yU] % 59];
      return cU
    }

    function kX(UU, XU) {
      if (UU === XU) return !0;
      if (gU(UU, "number") && isNaN(UU)) return gU(XU, "number") && isNaN(XU);
      const zU = wU(UU),
        cU = wU(XU);
      if (zU !== cU) return !1;
      if (zU && cU) {
        const zU = UU.length;
        if (zU !== XU.length) return !1;
        for (let cU = zU; 0 !== cU--;)
          if (!kX(UU[cU], XU[cU])) return !1;
        return !0
      }
      const yU = eU(UU),
        QU = eU(XU);
      if (yU !== QU) return !1;
      if (UU && XU && yU && QU) {
        const zU = Object.keys(UU),
          cU = Object.keys(XU);
        if (zU.length !== cU.length) return !1;
        for (let UU of zU)
          if (!cU.includes(UU)) return !1;
        for (let yU of zU)
          if (!kX(UU[yU], XU[yU])) return !1;
        return !0
      }
      return !1
    }
    const GX = "click",
      BX = "navigation",
      ZX = "view_changed",
      RX = "session_start",
      PX = "session_resume",
      WX = "session_extend",
      dX = "service_name_override",
      LX = "route_change";

    function eX() {
      let {
        sessionId: UU,
        started: XU,
        lastActivity: zU,
        isSampled: cU = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, yU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aU;
      var QU;
      const AU = NX(),
        FU = null === (QU = yU.config) || void 0 === QU || null === (QU = QU.sessionTracking) || void 0 === QU ? void 0 : QU.generateSessionId;
      return null == UU && (UU = "function" === typeof FU ? FU() : gX()), {
        sessionId: UU,
        lastActivity: null !== zU && void 0 !== zU ? zU : AU,
        started: null !== XU && void 0 !== XU ? XU : AU,
        isSampled: cU
      }
    }

    function CX(UU) {
      if (null == UU) return !1;
      const XU = NX();
      return XU - UU.started < 144e5 && XU - UU.lastActivity < AU
    }

    function wX(UU) {
      let {
        fetchUserSession: XU,
        storeUserSession: zU,
        adoptSession: cU,
        updateInterval: yU = 0
      } = UU, FU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aU, oU = 0;
      return function() {
        let {
          forceSessionExtend: UU = !1,
          refreshActivity: DU = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var EU, YU;
        if (!XU || !zU) return;
        const NU = NX();
        if (!UU && NU < oU && oU - NU <= yU) return;
        const IU = FU.config.sessionTracking,
          pU = null === IU || void 0 === IU ? void 0 : IU.persistent;
        if (pU && !cX || !pU && !yX) return;
        const aU = XU();
        if (oU = Math.min(NU + yU, (null !== (EU = null === aU || void 0 === aU ? void 0 : aU.started) && void 0 !== EU ? EU : NU) + QU, (null !== (YU = null === aU || void 0 === aU ? void 0 : aU.lastActivity) && void 0 !== YU ? YU : NU) + AU), !1 === UU && CX(aU)) {
          var tU;
          DU && zU(EX(EX({}, aU), {}, {
            lastActivity: NU
          }));
          const UU = null === (tU = FU.metas.value.session) || void 0 === tU ? void 0 : tU.id;
          null != cU && null != aU.sessionMeta && aU.sessionId !== UU && cU(aU.sessionMeta)
        } else {
          var gU, kU, GU;
          let UU = OX(eX({
            isSampled: YX(FU)
          }, FU), aU, FU);
          oU = NU + yU, zU(UU), null === (gU = FU.api) || void 0 === gU || gU.setSession(UU.sessionMeta), null === IU || void 0 === IU || null === (kU = IU.onSessionChange) || void 0 === kU || kU.call(IU, null !== (GU = null === aU || void 0 === aU ? void 0 : aU.sessionMeta) && void 0 !== GU ? GU : null, UU.sessionMeta)
        }
      }
    }

    function qX(UU) {
      let XU, {
          fetchUserSession: zU,
          storeUserSession: cU,
          updateInterval: yU = 0
        } = UU,
        QU = 0;
      return UU => {
        const AU = NX();
        if (UU === XU && AU < QU && QU - AU <= yU) return;
        XU = UU, QU = AU + yU;
        const FU = zU();
        (null === FU || void 0 === FU ? void 0 : FU.sessionId) === UU && CX(FU) && cU(EX(EX({}, FU), {}, {
          lastActivity: AU
        }))
      }
    }

    function OX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aU;
      var cU, yU, QU, AU, FU, oU;
      const DU = EX(EX({}, UU), {}, {
          sessionMeta: {
            id: UU.sessionId,
            attributes: rX(EX(EX(EX({}, null === (cU = zU.config.sessionTracking) || void 0 === cU || null === (cU = cU.session) || void 0 === cU ? void 0 : cU.attributes), null !== (yU = null === (QU = zU.metas.value.session) || void 0 === QU ? void 0 : QU.attributes) && void 0 !== yU ? yU : {}), {}, {
              isSampled: UU.isSampled.toString()
            }))
          }
        }),
        EU = null !== (AU = null === (FU = zU.metas.value.session) || void 0 === FU ? void 0 : FU.overrides) && void 0 !== AU ? AU : null === XU || void 0 === XU || null === (oU = XU.sessionMeta) || void 0 === oU ? void 0 : oU.overrides;
      xU(EU) || (DU.sessionMeta.overrides = EU);
      const YU = null === XU || void 0 === XU ? void 0 : XU.sessionId;
      return null != YU && (DU.sessionMeta.attributes.previousSession = YU), DU
    }

    function SX(UU) {
      let {
        fetchUserSession: XU,
        storeUserSession: zU
      } = UU, cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aU, yU = !1;
      return function(UU) {
        if (yU) return;
        const QU = UU.session,
          AU = XU();
        let FU = null === QU || void 0 === QU ? void 0 : QU.id;
        const oU = null === QU || void 0 === QU ? void 0 : QU.attributes,
          DU = null === QU || void 0 === QU ? void 0 : QU.overrides,
          EU = null === AU || void 0 === AU ? void 0 : AU.sessionMeta,
          YU = null === EU || void 0 === EU ? void 0 : EU.overrides,
          NU = !!DU && !kX(DU, YU),
          IU = !!oU && !kX(oU, null === EU || void 0 === EU ? void 0 : EU.attributes);
        if (QU && FU !== (null === AU || void 0 === AU ? void 0 : AU.sessionId) || IU || NU) {
          var pU, aU;
          const UU = null != AU && FU === AU.sessionId,
            XU = OX(UU ? AU : eX({
              sessionId: FU,
              isSampled: YX(cU)
            }, cU), AU, cU),
            QU = null === AU || void 0 === AU || null === (pU = AU.sessionMeta) || void 0 === pU || null === (pU = pU.attributes) || void 0 === pU ? void 0 : pU.previousSession;
          UU && null != QU && QU !== XU.sessionId && (XU.sessionMeta.attributes.previousSession = QU), (null === (aU = XU.sessionMeta.attributes) || void 0 === aU ? void 0 : aU.previousSession) === XU.sessionId && delete XU.sessionMeta.attributes.previousSession, zU(XU),
            function(UU, XU) {
              let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var yU, QU, AU;
              if (!XU) return;
              const FU = zU.serviceName,
                oU = null !== (yU = null !== (QU = cU.serviceName) && void 0 !== QU ? QU : null === (AU = UU.metas.value.app) || void 0 === AU ? void 0 : AU.name) && void 0 !== yU ? yU : "";
              FU && FU !== oU && UU.api.pushEvent(dX, {
                serviceName: FU,
                previousServiceName: oU
              })
            }(cU, NU, DU, YU), yU = !0;
          try {
            cU.api.setSession(XU.sessionMeta)
          } finally {
            yU = !1
          }
        }
      }
    }

    function rX(UU) {
      const XU = {};
      for (const zU of Object.keys(UU)) {
        const cU = UU[zU];
        void 0 !== cU && (XU[zU] = cU)
      }
      return XU
    }

    function uX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== UU && void 0 !== UU ? UU : {}, function() {
        const UU = new WeakSet;
        return function(XU, zU) {
          if (eU(zU) && null !== zU) {
            if (UU.has(zU)) return null;
            UU.add(zU)
          }
          return zU
        }
      }())
    }

    function fX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const XU = {};
      for (const [zU, cU] of Object.entries(UU)) XU[zU] = eU(cU) && null !== cU ? uX(cU) : String(cU);
      return XU
    }
    var iX = class UU {
      constructor() {
        var XU = this;
        let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aU;
        this.context = zU, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = UU => {
          this.adopting = !0;
          try {
            var XU;
            null === (XU = this.context.api) || void 0 === XU || XU.setSession(UU)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: UU = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return XU.updateUserSession({
            refreshActivity: UU
          })
        }, this.recordActivity = qX({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          updateInterval: FU
        }), this.updateUserSession = wX({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: FU
        }, zU), this.init()
      }
      static removeUserSession() {
        zX(yU, UU.storageTypeLocal)
      }
      static storeUserSession(XU) {
        XX(yU, uX(XU), UU.storageTypeLocal)
      }
      static fetchUserSession() {
        const XU = UX(yU, UU.storageTypeLocal);
        return XU ? JSON.parse(XU) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var UU;
            this.updateSession({
              refreshActivity: !1
            });
            const XU = null === (UU = this.context.api) || void 0 === UU || null === (UU = UU.getSession()) || void 0 === UU ? void 0 : UU.id;
            XU && this.recordActivity(XU)
          }
        })), this.context.metas.addListener(SX({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession
        }, this.context))
      }
    };
    iX.storageTypeLocal = TU;
    var HX = class UU {
      constructor() {
        var XU = this;
        let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aU;
        this.context = zU, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: UU = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return XU.updateUserSession({
            refreshActivity: UU
          })
        }, this.recordActivity = qX({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          updateInterval: FU
        }), this.updateUserSession = wX({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession,
          updateInterval: FU
        }, zU), this.init()
      }
      static removeUserSession() {
        zX(yU, UU.storageTypeSession)
      }
      static storeUserSession(XU) {
        XX(yU, uX(XU), UU.storageTypeSession)
      }
      static fetchUserSession() {
        const XU = UX(yU, UU.storageTypeSession);
        return XU ? JSON.parse(XU) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var UU;
            this.updateSession({
              refreshActivity: !1
            });
            const XU = null === (UU = this.context.api) || void 0 === UU || null === (UU = UU.getSession()) || void 0 === UU ? void 0 : UU.id;
            XU && this.recordActivity(XU)
          }
        })), this.context.metas.addListener(SX({
          fetchUserSession: UU.fetchUserSession,
          storeUserSession: UU.storeUserSession
        }, this.context))
      }
    };
    HX.storageTypeSession = bU;
    const MX = new WeakMap;

    function vX(UU) {
      let XU = MX.get(UU);
      if (!XU) {
        let zU = [],
          cU = [];
        XU = {
          addSessionUpdateListener: UU => {
            zU.push(UU)
          },
          removeSessionUpdateListener: UU => {
            zU = zU.filter((XU => XU !== UU))
          },
          notifySessionUpdate: UU => {
            zU.forEach((XU => XU(UU)))
          },
          shouldCapture: () => cU.every((UU => UU())),
          addCaptureFilter: UU => {
            cU.push(UU)
          },
          removeCaptureFilter: UU => {
            cU = cU.filter((XU => XU !== UU))
          }
        }, MX.set(UU, XU)
      }
      return XU
    }
    var VX = class {
      constructor(UU, XU, zU) {
        this.metas = UU, this.transports = XU, this.onActivate = zU, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = UU => {
          var XU, zU, cU;
          const yU = this.pending;
          var QU, AU;
          if ("overrides" === UU.type) return void(this.pending = {
            reset: null !== (QU = null === yU || void 0 === yU ? void 0 : yU.reset) && void 0 !== QU && QU,
            inheritOverrides: null === (AU = null === yU || void 0 === yU ? void 0 : yU.inheritOverrides) || void 0 === AU || AU,
            session: EX(EX({}, null === yU || void 0 === yU ? void 0 : yU.session), {}, {
              overrides: EX(EX({}, null === yU || void 0 === yU ? void 0 : yU.session.overrides), UU.overrides)
            })
          });
          const FU = UU.session,
            oU = xU(FU) || null != FU && "id" in FU && !FU.id,
            DU = null !== (XU = null === FU || void 0 === FU ? void 0 : FU.overrides) && void 0 !== XU ? XU : null === yU || void 0 === yU ? void 0 : yU.session.overrides;
          this.pending = {
            reset: oU || !(null === FU || void 0 === FU ? void 0 : FU.id) && null !== (zU = null === yU || void 0 === yU ? void 0 : yU.reset) && void 0 !== zU && zU,
            inheritOverrides: !(!UU.overrides && void 0 !== (null === FU || void 0 === FU ? void 0 : FU.overrides)) && (null === (cU = null === yU || void 0 === yU ? void 0 : yU.inheritOverrides) || void 0 === cU || cU),
            session: {
              id: null === FU || void 0 === FU ? void 0 : FU.id,
              attributes: (null === FU || void 0 === FU ? void 0 : FU.attributes) && EX({}, FU.attributes),
              overrides: UU.overrides ? EX(EX({}, null === yU || void 0 === yU ? void 0 : yU.session.overrides), UU.overrides) : DU && EX({}, DU)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var UU, XU;
        this.waiting = !0, vX(this.metas).addSessionUpdateListener(this.recordUpdate), vX(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (UU = (XU = this.metas).addCaptureListener) || void 0 === UU || UU.call(XU, this.activate), this.activate()
      }
      destroy() {
        var UU, XU;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), vX(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (UU = (XU = this.metas).removeCaptureListener) || void 0 === UU || UU.call(XU, this.activate), vX(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function sX(UU) {
      return (null === UU || void 0 === UU ? void 0 : UU.persistent) ? iX : HX
    }

    function nX() {}
    let mX = function(UU) {
      return UU[UU.OFF = 0] = "OFF", UU[UU.ERROR = 1] = "ERROR", UU[UU.WARN = 2] = "WARN", UU[UU.INFO = 3] = "INFO", UU[UU.VERBOSE = 4] = "VERBOSE", UU
    }({});
    const lX = {
        debug: nX,
        error: nX,
        info: nX,
        prefix: "Faro",
        warn: nX
      },
      xX = 1;

    function JX(UU) {
      return JX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, JX(UU)
    }

    function jX(UU) {
      var XU = function(UU, XU) {
        if ("object" != JX(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != JX(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == JX(XU) ? XU : XU + ""
    }

    function KX(UU, XU, zU) {
      return (XU = jX(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function bX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function TX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? bX(Object(zU), !0).forEach((function(XU) {
          KX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : bX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }
    const hX = TX({}, console);
    var Uz = class {
        constructor() {
          this.unpatchedConsole = hX, this.internalLogger = lX, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          this.internalLogger.debug(`${this.name}\n`, ...XU)
        }
        logInfo() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          this.internalLogger.info(`${this.name}\n`, ...XU)
        }
        logWarn() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          this.internalLogger.warn(`${this.name}\n`, ...XU)
        }
        logError() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          this.internalLogger.error(`${this.name}\n`, ...XU)
        }
      },
      Xz = class extends Uz {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const zz = "2.12.1";
    var cz = class extends Xz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = zz, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(UU) {
        var XU;
        const zU = UU.session;
        if (zU && zU.id !== (null === (XU = this.notifiedSession) || void 0 === XU ? void 0 : XU.id)) {
          var cU;
          if (this.isAdoptingSession()) return void(this.notifiedSession = zU);
          if (this.notifiedSession && this.notifiedSession.id === (null === (cU = zU.attributes) || void 0 === cU ? void 0 : cU.previousSession)) return this.api.pushEvent(WX, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = zU);
          this.notifiedSession = zU, this.api.pushEvent(RX, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(UU, XU, zU) {
        const cU = null === zU || void 0 === zU ? void 0 : zU.session;
        let yU, QU, AU = UU.fetchUserSession();
        if (XU.persistent && XU.maxSessionPersistenceTime && AU) {
          const UU = NX();
          AU.lastActivity < UU - XU.maxSessionPersistenceTime && (iX.removeUserSession(), AU = null)
        }
        const FU = CX(AU);
        if ((null === zU || void 0 === zU ? void 0 : zU.reset) || !FU || (null === cU || void 0 === cU ? void 0 : cU.id) && cU.id !== (null === AU || void 0 === AU ? void 0 : AU.sessionId)) {
          var oU, DU, EU, YU, NU, IU;
          QU = eX({
            sessionId: (null === zU || void 0 === zU ? void 0 : zU.reset) ? void 0 : null !== (oU = null === cU || void 0 === cU ? void 0 : cU.id) && void 0 !== oU ? oU : null === (DU = XU.session) || void 0 === DU ? void 0 : DU.id,
            isSampled: YX(this)
          }, this);
          const UU = QU.sessionId,
            pU = zU && FU ? null === AU || void 0 === AU || null === (EU = AU.sessionMeta) || void 0 === EU ? void 0 : EU.overrides : void 0,
            aU = pU ? EX(EX({}, null === (YU = XU.session) || void 0 === YU ? void 0 : YU.overrides), pU) : null === (NU = XU.session) || void 0 === NU ? void 0 : NU.overrides;
          QU.sessionMeta = EX({
            id: UU,
            attributes: EX({
              isSampled: QU.isSampled.toString()
            }, null === (IU = XU.session) || void 0 === IU ? void 0 : IU.attributes)
          }, aU ? {
            overrides: aU
          } : {}), yU = RX
        } else {
          var pU, aU;
          const UU = null === AU || void 0 === AU ? void 0 : AU.sessionId;
          QU = eX({
            sessionId: UU,
            isSampled: AU.isSampled || !1,
            started: null === AU || void 0 === AU ? void 0 : AU.started
          }, this);
          const zU = null === AU || void 0 === AU ? void 0 : AU.sessionMeta,
            cU = EX(EX({}, null === (pU = XU.session) || void 0 === pU ? void 0 : pU.overrides), null === zU || void 0 === zU ? void 0 : zU.overrides);
          QU.sessionMeta = EX(EX({}, XU.session), {}, {
            id: UU,
            attributes: EX(EX(EX({}, null === (aU = XU.session) || void 0 === aU ? void 0 : aU.attributes), null === zU || void 0 === zU ? void 0 : zU.attributes), {}, {
              isSampled: QU.isSampled.toString()
            }),
            overrides: cU
          }), yU = PX
        }
        var tU;
        if (cU && (QU.sessionMeta = EX(EX({}, QU.sessionMeta), {}, {
            attributes: EX(EX(EX({}, null === (tU = QU.sessionMeta) || void 0 === tU ? void 0 : tU.attributes), cU.attributes), {}, {
              isSampled: QU.isSampled.toString()
            })
          }), cU.overrides)) {
          const UU = (null === zU || void 0 === zU ? void 0 : zU.inheritOverrides) ? EX(EX({}, QU.sessionMeta.overrides), cU.overrides) : cU.overrides;
          Object.keys(UU).length > 0 ? QU.sessionMeta.overrides = UU : delete QU.sessionMeta.overrides
        }
        return {
          initialSession: QU,
          lifecycleType: yU
        }
      }
      registerBeforeSendHook(UU) {
        var XU;
        this.beforeSendHook = XU => {
          var zU, cU;
          const yU = null === (zU = XU.meta.session) || void 0 === zU ? void 0 : zU.id;
          yU && !this.transports.isPaused() && UU(yU);
          const QU = null === (cU = XU.meta.session) || void 0 === cU ? void 0 : cU.attributes;
          if (QU && "true" === (null === QU || void 0 === QU ? void 0 : QU.isSampled)) {
            var AU;
            let UU = JSON.parse(JSON.stringify(XU));
            const zU = null === (AU = UU.meta.session) || void 0 === AU ? void 0 : AU.attributes;
            var FU;
            if (null === zU || void 0 === zU || delete zU.isSampled, 0 === Object.keys(null !== zU && void 0 !== zU ? zU : {}).length) null === (FU = UU.meta.session) || void 0 === FU || delete FU.attributes;
            return UU
          }
          return null
        }, null === (XU = this.transports) || void 0 === XU || XU.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var UU;
        this.logDebug("init session instrumentation");
        const XU = document.prerendering;
        var zU;
        if ((null === (UU = this.config.sessionTracking) || void 0 === UU ? void 0 : UU.enabled) && (XU || this.prerenderSession)) return null !== (zU = this.prerenderSession) && void 0 !== zU || (this.prerenderSession = new VX(this.metas, this.transports, (UU => {
          this.prerenderSession = void 0, this.initializeSession(UU)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(UU) {
        const XU = this.config.sessionTracking;
        if (null === XU || void 0 === XU ? void 0 : XU.enabled) {
          var zU, cU;
          const yU = sX(XU),
            QU = new yU(this);
          this.isAdoptingSession = QU.isAdopting, this.registerBeforeSendHook(QU.recordActivity);
          const {
            initialSession: AU,
            lifecycleType: FU
          } = this.createInitialSession(yU, XU, UU);
          yU.storeUserSession(AU);
          const oU = AU.sessionMeta;
          this.notifiedSession = oU, this.api.setSession(oU), this.captureListener = () => {
            this.transports.isPaused() || QU.updateSession({
              refreshActivity: !1
            })
          }, null === (zU = (cU = this.metas).addCaptureListener) || void 0 === zU || zU.call(cU, this.captureListener), FU === RX && this.api.pushEvent(RX, {}, void 0, {
            skipDedupe: !0
          }), FU === PX && this.api.pushEvent(PX, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var UU, XU, zU;
        (null === (UU = this.prerenderSession) || void 0 === UU || UU.destroy(), this.captureListener) && (null === (XU = (zU = this.metas).removeCaptureListener) || void 0 === XU || XU.call(zU, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function yz(UU, XU, zU, cU) {
      const yU = {
        filename: UU || document.location.href,
        function: XU || "?"
      };
      return void 0 !== zU && (yU.lineno = zU), void 0 !== cU && (yU.colno = cU), yU
    }
    const Qz = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Az = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Fz = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      oz = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Dz = "safari-extension",
      Ez = "safari-web-extension",
      Yz = /Minified React error #\d+;/i;

    function Nz(UU, XU) {
      const zU = null === UU || void 0 === UU ? void 0 : UU.includes(Dz),
        cU = !zU && (null === UU || void 0 === UU ? void 0 : UU.includes("safari-web-extension"));
      return zU || cU ? [(null === UU || void 0 === UU ? void 0 : UU.includes("@")) ? UU.split("@")[0] : UU, zU ? `${Dz}:${XU}` : `${Ez}:${XU}`] : [UU, XU]
    }
    const Iz = 1024;

    function pz(UU) {
      let XU = [];
      UU.stacktrace ? XU = UU.stacktrace.split("\n").filter(((UU, XU) => XU % 2 === 0)) : UU.stack && (XU = UU.stack.split("\n"));
      const zU = XU.reduce(((XU, zU, cU) => {
        if (zU.length > Iz) return XU;
        let yU, QU, AU, FU, oU;
        if (yU = Qz.exec(zU)) {
          if (QU = yU[1], AU = yU[2], FU = yU[3], oU = yU[4], null === AU || void 0 === AU ? void 0 : AU.startsWith("eval")) {
            const UU = Az.exec(AU);
            UU && (AU = UU[1], FU = UU[2], oU = UU[3])
          }
          AU = (null === AU || void 0 === AU ? void 0 : AU.startsWith("address at ")) ? AU.substring(11) : AU, [QU, AU] = Nz(QU, AU)
        } else if (yU = Fz.exec(zU)) {
          if (QU = yU[1], AU = yU[3], FU = yU[4], oU = yU[5], AU && AU.includes(" > eval")) {
            const UU = oz.exec(AU);
            UU && (QU = QU || "eval", AU = UU[1], FU = UU[2])
          } else 0 === cU && !oU && PU(UU.columnNumber) && (oU = String(UU.columnNumber + 1));
          [QU, AU] = Nz(QU, AU)
        }
        return (AU || QU) && XU.push(yz(AU, QU, FU ? Number(FU) : void 0, oU ? Number(oU) : void 0)), XU
      }), []);
      return Yz.test(UU.message) ? zU.slice(1) : zU
    }

    function az(UU) {
      return {
        frames: pz(UU)
      }
    }
    const tz = "http-request-start",
      gz = "http-request-end";
    var kz = class UU {
      constructor() {
        this.subscribers = []
      }
      subscribe(UU) {
        return this.subscribers.push(UU), {
          unsubscribe: () => this.unsubscribe(UU)
        }
      }
      unsubscribe(UU) {
        this.subscribers = this.subscribers.filter((XU => XU !== UU))
      }
      notify(UU) {
        this.subscribers.forEach((XU => XU(UU)))
      }
      first() {
        const XU = new UU,
          zU = UU => {
            XU.notify(UU), cU.unsubscribe()
          },
          cU = this.subscribe(zU),
          yU = XU.unsubscribe.bind(XU);
        return this.withUnsubscribeOverride(XU, yU, zU)
      }
      takeWhile(XU) {
        const zU = new UU,
          cU = UU => {
            XU(UU) ? zU.notify(UU) : zU.unsubscribe(cU)
          };
        this.subscribe(cU);
        const yU = zU.unsubscribe.bind(zU);
        return this.withUnsubscribeOverride(zU, yU, cU)
      }
      filter(XU) {
        const zU = new UU,
          cU = UU => {
            XU(UU) && zU.notify(UU)
          };
        this.subscribe(cU);
        const yU = zU.unsubscribe.bind(zU);
        return this.withUnsubscribeOverride(zU, yU, cU)
      }
      merge() {
        const XU = new UU,
          zU = [];
        for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
        yU.forEach((UU => {
          const cU = UU.subscribe((UU => {
            XU.notify(UU)
          }));
          zU.push(cU)
        }));
        const AU = XU.unsubscribeAll.bind(XU);
        return XU.unsubscribe = () => {
          zU.forEach((UU => UU.unsubscribe())), AU()
        }, XU
      }
      withUnsubscribeOverride(UU, XU, zU) {
        return UU.unsubscribe = UU => {
          XU(UU), this.unsubscribe(zU)
        }, UU
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Gz = function(UU) {
      return UU.TRACE = "trace", UU.DEBUG = "debug", UU.INFO = "info", UU.LOG = "log", UU.WARN = "warn", UU.ERROR = "error", UU
    }({});
    const Bz = "log",
      Zz = ["trace", "debug", "info", "log", "warn", "error"];
    let Rz, Pz = !1;
    const Wz = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      dz = "Error",
      Lz = UU => UU.map((UU => eU(UU) ? uX(UU) : String(UU))).join(" ");

    function ez(UU) {
      let XU, zU, cU, yU, QU = [];
      if (HU(UU) && UU.error) XU = UU.error.message, zU = UU.error.name, QU = pz(UU.error);
      else if ((cU = MU(UU)) || vU(UU)) {
        const {
          name: yU,
          message: QU
        } = UU;
        zU = null !== yU && void 0 !== yU ? yU : cU ? "DOMError" : "DOMException", XU = QU ? `${zU}: ${QU}` : zU
      } else iU(UU) ? (zU = UU.name, XU = UU.message, QU = pz(UU)) : (eU(UU) || (yU = uU(UU))) && (zU = yU ? UU.constructor.name : void 0, XU = `Non-Error exception captured with keys: ${Object.keys(UU)}`);
      return [XU, zU, QU]
    }

    function Cz(UU) {
      const [XU, zU, cU, yU, QU] = UU;
      let AU, FU, oU = [];
      const DU = RU(XU),
        EU = yz(zU, "?", cU, yU);
      return QU || !DU ? ([AU, FU, oU] = ez(null !== QU && void 0 !== QU ? QU : XU), 0 === oU.length && (oU = [EU])) : DU && ([AU, FU] = function(UU) {
        var XU, zU;
        const cU = UU.match(Wz),
          yU = null !== (XU = null === cU || void 0 === cU ? void 0 : cU[1]) && void 0 !== XU ? XU : dz;
        return [null !== (zU = null === cU || void 0 === cU ? void 0 : cU[2]) && void 0 !== zU ? zU : UU, yU]
      }(XU), oU = [EU]), {
        value: AU,
        type: FU,
        stackFrames: oU
      }
    }

    function wz(UU, XU) {
      return iU(UU[0]) ? Cz(UU) : {
        value: XU(UU)
      }
    }
    const qz = UU => UU.map((UU => {
      try {
        return String(UU)
      } catch (XU) {
        return ""
      }
    })).join(" ");
    var Oz = class UU extends Xz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = zz, this.errorSerializer = qz
      }
      initialize() {
        var XU, zU;
        const cU = this.config.consoleInstrumentation,
          yU = (null === cU || void 0 === cU ? void 0 : cU.serializeErrors) || !!(null === cU || void 0 === cU ? void 0 : cU.errorSerializer);
        this.errorSerializer = yU ? null !== (XU = null === cU || void 0 === cU ? void 0 : cU.errorSerializer) && void 0 !== XU ? XU : Lz : qz;
        const QU = null !== (zU = null === cU || void 0 === cU ? void 0 : cU.disabledLevels) && void 0 !== zU ? zU : UU.defaultDisabledLevels,
          AU = function(UU) {
            if (Rz || (Rz = new kz), !Pz) {
              const XU = null !== UU && void 0 !== UU ? UU : hX;
              Zz.forEach((UU => {
                console[UU] = function() {
                  for (var zU, cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
                  Rz.notify({
                    type: "console",
                    level: UU,
                    args: yU
                  }), null === (zU = XU[UU]) || void 0 === zU || zU.apply(console, yU)
                }
              })), Pz = !0
            }
            return Rz
          }(this.unpatchedConsole);
        this.subscription = AU.subscribe((XU => {
          let {
            level: zU,
            args: yU
          } = XU;
          if (!QU.includes(zU)) try {
            if (zU !== Gz.ERROR || (null === cU || void 0 === cU ? void 0 : cU.consoleErrorAsLog))
              if (zU === Gz.ERROR && (null === cU || void 0 === cU ? void 0 : cU.consoleErrorAsLog)) {
                const {
                  value: XU,
                  type: cU,
                  stackFrames: QU
                } = wz(yU, this.errorSerializer);
                this.api.pushLog(XU ? [UU.consoleErrorPrefix + XU] : yU, {
                  level: zU,
                  context: {
                    value: null !== XU && void 0 !== XU ? XU : "",
                    type: null !== cU && void 0 !== cU ? cU : "",
                    stackFrames: (null === QU || void 0 === QU ? void 0 : QU.length) ? Lz(QU) : ""
                  }
                })
              } else this.api.pushLog(yU, {
                level: zU
              });
            else {
              const {
                value: XU,
                type: zU,
                stackFrames: cU
              } = wz(yU, this.errorSerializer);
              if (XU && !zU && !cU) return void this.api.pushError(new Error(UU.consoleErrorPrefix + XU));
              this.api.pushError(new Error(UU.consoleErrorPrefix + XU), {
                type: zU,
                stackFrames: cU
              })
            }
          } catch (AU) {
            this.logError(AU)
          }
        }))
      }
      destroy() {
        var UU;
        null === (UU = this.subscription) || void 0 === UU || UU.unsubscribe(), this.subscription = void 0
      }
    };
    Oz.defaultDisabledLevels = [Gz.DEBUG, Gz.TRACE, Gz.LOG], Oz.consoleErrorPrefix = "console.error: ";
    const Sz = [];
    var rz = class extends Xz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = zz
      }
      initialize() {
        this.logDebug("Initializing"),
          function(UU) {
            const XU = window.onerror;
            window.onerror = function() {
              for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
              try {
                const {
                  value: XU,
                  type: zU,
                  stackFrames: yU
                } = Cz(cU), QU = cU[4];
                if (XU) {
                  const cU = {
                    type: zU,
                    stackFrames: yU
                  };
                  null != QU && (cU.originalError = QU), UU.pushError(new Error(XU), cU)
                }
              } finally {
                null === XU || void 0 === XU || XU.apply(window, cU)
              }
            }
          }(this.api),
          function(UU) {
            const XU = XU => {
              var zU;
              let cU, yU, QU = XU;
              if (QU.reason) QU = XU.reason;
              else if (null === (zU = XU.detail) || void 0 === zU ? void 0 : zU.reason) {
                var AU;
                QU = null === (AU = XU.detail) || void 0 === AU ? void 0 : AU.reason
              }
              let FU = [];
              SU(QU) ? (cU = `Non-Error promise rejection captured with value: ${String(QU)}`, yU = "UnhandledRejection") : [cU, yU, FU] = ez(QU), cU && UU.pushError(new Error(cU), {
                type: yU,
                stackFrames: FU
              })
            };
            window.addEventListener("unhandledrejection", XU), Sz.push(XU)
          }(this.api)
      }
    };
    const uz = "unknown";
    var fz = class extends Xz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = zz, this.waitingForActivation = !1, this.sendViewChangedEvent = UU => {
          var XU;
          if (this.waitingForActivation || document.prerendering) return;
          const zU = UU.view;
          if (zU && zU.name !== (null === (XU = this.notifiedView) || void 0 === XU ? void 0 : XU.name)) {
            var cU, yU, QU;
            const UU = null !== (cU = null === (yU = this.notifiedView) || void 0 === yU ? void 0 : yU.name) && void 0 !== cU ? cU : uz;
            this.notifiedView = zU, this.api.pushEvent(ZX, {
              fromView: UU,
              toView: null !== (QU = zU.name) && void 0 !== QU ? QU : uz
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
    class iz {
      t;
      o = 0;
      i = [];
      l(UU) {
        if (UU.hadRecentInput) return;
        const XU = this.i[0],
          zU = this.i.at(-1);
        this.o && XU && zU && UU.startTime - zU.startTime < 1e3 && UU.startTime - XU.startTime < 5e3 ? (this.o += UU.value, this.i.push(UU)) : (this.o = UU.value, this.i = [UU]), this.t?.(UU)
      }
    }
    const Hz = () => {
        const UU = performance.getEntriesByType("navigation")[0];
        if (UU && UU.responseStart > 0 && UU.responseStart < performance.now()) return UU
      },
      Mz = UU => {
        if ("loading" === document.readyState) return "loading";
        const XU = Hz();
        if (XU) {
          if (UU < XU.domInteractive) return "loading";
          if (0 === XU.domContentLoadedEventStart || UU < XU.domContentLoadedEventStart) return "dom-interactive";
          if (0 === XU.domComplete || UU < XU.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      vz = UU => {
        const XU = UU.nodeName;
        return 1 === UU.nodeType ? XU.toLowerCase() : XU.toUpperCase().replace(/^#/, "")
      },
      Vz = UU => {
        let XU = "";
        try {
          for (; 9 !== UU?.nodeType;) {
            const zU = UU,
              cU = zU.id ? "#" + zU.id : [vz(zU), ...Array.from(zU.classList ?? []).sort()].join(".");
            if (XU.length + cU.length > 99) return XU || cU;
            if (XU = XU ? cU + ">" + XU : cU, zU.id) break;
            UU = zU.parentNode
          }
        } catch {}
        return XU
      },
      sz = new WeakMap;

    function nz(UU, XU) {
      let zU = sz.get(XU);
      return zU || (zU = new WeakMap, sz.set(XU, zU)), zU.get(UU) || zU.set(UU, new XU), zU.get(UU)
    }
    let mz = -1;
    const lz = () => mz,
      xz = UU => {
        addEventListener("pageshow", (XU => {
          XU.persisted && (mz = XU.timeStamp, UU(XU))
        }), !0)
      },
      Jz = (UU, XU, zU, cU) => {
        let yU, QU;
        return AU => {
          XU.value >= 0 && (AU || cU) && (QU = XU.value - (yU ?? 0), (QU || void 0 === yU) && (yU = XU.value, XU.delta = QU, XU.rating = ((UU, XU) => UU > XU[1] ? "poor" : UU > XU[0] ? "needs-improvement" : "good")(XU.value, zU), UU(XU)))
        }
      },
      jz = UU => {
        requestAnimationFrame((() => requestAnimationFrame((() => UU()))))
      },
      Kz = () => Hz()?.activationStart ?? 0;
    let bz = -1;
    const Tz = new Set,
      hz = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Uc = UU => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === UU.type)
            for (const UU of Tz) UU();
          isFinite(bz) || (bz = "visibilitychange" === UU.type ? UU.timeStamp : 0, removeEventListener("prerenderingchange", Uc, !0))
        }
      },
      Xc = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (bz = 1 / 0), bz < 0) {
          const UU = Kz(),
            XU = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((XU => "hidden" === XU.name && XU.startTime >= UU))?.startTime;
          bz = XU ?? hz(), addEventListener("visibilitychange", Uc, !0), addEventListener("prerenderingchange", Uc, !0), xz((() => {
            setTimeout((() => {
              bz = hz()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return bz
          },
          onHidden(UU) {
            Tz.add(UU)
          }
        }
      },
      zc = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0,
          AU = arguments.length > 6 ? arguments[6] : void 0;
        const FU = Hz(),
          oU = FU?.navigationId || 0;
        let DU = "navigate";
        return zU ? DU = zU : lz() >= 0 ? DU = "back-forward-cache" : FU && (document.prerendering || Kz() > 0 ? DU = "prerender" : document.wasDiscarded ? DU = "restore" : FU.type && (DU = FU.type.replace(/_/g, "-"))), {
          name: UU,
          value: XU,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: DU,
          navigationId: cU || oU,
          navigationInteractionId: yU,
          navigationURL: QU || FU?.name,
          navigationStartTime: AU || 0
        }
      },
      cc = function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const cU = UU.filter((UU => PerformanceObserver.supportedEntryTypes.includes(UU)));
          if (cU.length > 0) {
            const UU = new PerformanceObserver((UU => {
              queueMicrotask((() => {
                const zU = UU.getEntries();
                cU.length > 1 && zU.sort(((UU, XU) => UU.startTime + UU.duration - (XU.startTime + XU.duration))), XU(zU)
              }))
            }));
            for (const XU of cU) UU.observe({
              type: XU,
              buffered: !0,
              ...zU
            });
            return UU
          }
        } catch {}
      },
      yc = UU => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && UU && UU.reportSoftNavs,
      Qc = (UU, XU) => {
        if (UU.set(XU.navigationId, XU), UU.size > 2) {
          const XU = UU.keys().next().value;
          void 0 !== XU && UU.delete(XU)
        }
      },
      Ac = UU => {
        let XU = !1;
        return () => {
          XU || (UU(), XU = !0)
        }
      };
    class Fc {
      u
    }
    const oc = UU => {
        document.prerendering ? addEventListener("prerenderingchange", UU, !0) : UU()
      },
      Dc = [1800, 3e3],
      Ec = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = yc(XU);
        oc((() => {
          const cU = nz(XU, Fc),
            yU = Xc();
          let QU, AU = zc("FCP");
          const FU = cc(["paint"], (UU => {
            for (const XU of UU) "first-contentful-paint" === XU.name && (FU.disconnect(), XU.startTime < yU.firstHiddenTime && (AU.value = Math.max(XU.startTime - Kz(), 0), AU.entries.push(XU), AU.navigationId = XU.navigationId || AU.navigationId, QU(!0)))
          }));
          FU && (QU = Jz(UU, AU, Dc, XU.reportAllChanges), xz((zU => {
            AU = zc("FCP", -1, "back-forward-cache", AU.navigationId, AU.navigationInteractionId, AU.navigationURL, lz()), QU = Jz(UU, AU, Dc, XU.reportAllChanges), jz((() => {
              AU.value = performance.now() - zU.timeStamp, QU(!0)
            }))
          }))), zU && cc(["soft-navigation"], (zU => {
            zU.forEach((zU => {
              cU.u && zU.navigationId && Qc(cU.u, zU);
              const yU = Math.max((zU.presentationTime || zU.paintTime || 0) - zU.startTime, 0);
              AU = zc("FCP", yU, "soft-navigation", zU.navigationId, zU.interactionId, zU.name, zU.startTime), QU = Jz(UU, AU, Dc, XU.reportAllChanges), QU(!0)
            }))
          }), XU)
        }))
      },
      Yc = [.1, .25],
      Nc = UU => UU.find((UU => 1 === UU.node?.nodeType)) || UU[0];
    let Ic = 0,
      pc = 1 / 0,
      ac = 0;
    const tc = UU => {
      for (const XU of UU) XU.interactionId && (pc = Math.min(pc, XU.interactionId), ac = Math.max(ac, XU.interactionId), Ic = ac ? (ac - pc) / 7 + 1 : 0)
    };
    let gc;
    const kc = () => gc ? Ic : performance.interactionCount ?? 0;
    class Gc {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return kc() - this.h
      }
      D() {
        this.h = kc(), this.v.length = 0, this.p.clear()
      }
      S(UU) {
        const XU = this.T(),
          zU = Math.min(this.v.length - 1, Math.floor(XU / 50));
        return !XU || -1 !== zU || "soft-navigation" !== UU && "back-forward-cache" !== UU ? this.v[zU] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(UU) {
        if (this.m?.(UU), !UU.interactionId) return;
        const XU = this.v.at(-1);
        let zU = this.p.get(UU.interactionId);
        if (zU || this.v.length < 10 || UU.duration > XU.k) {
          if (zU ? UU.duration > zU.k ? (zU.entries = [UU], zU.k = UU.duration) : UU.duration === zU.k && UU.startTime === zU.entries[0].startTime && zU.entries.push(UU) : (zU = {
              id: UU.interactionId,
              entries: [UU],
              k: UU.duration
            }, this.p.set(zU.id, zU), this.v.push(zU)), this.v.sort(((UU, XU) => XU.k - UU.k)), this.v.length > 10) {
            const UU = this.v.splice(10);
            for (const XU of UU) this.p.delete(XU.id)
          }
          this.M?.(zU)
        }
      }
    }
    const Bc = UU => {
        const XU = "requestIdleCallback" in globalThis ? 1e3 : 0,
          zU = globalThis.requestIdleCallback || setTimeout,
          cU = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) UU();
        else {
          const yU = Ac(UU);
          let QU = -1;
          const AU = () => {
            cU(QU), yU()
          };
          addEventListener("visibilitychange", AU, {
            once: !0,
            capture: !0
          }), QU = zU((() => {
            removeEventListener("visibilitychange", AU, {
              capture: !0
            }), yU()
          }), {
            timeout: XU
          })
        }
      },
      Zc = [200, 500],
      Rc = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = nz(XU = Object.assign({}, XU), Gc);
        let cU = [],
          yU = [],
          QU = 0;
        const AU = new WeakMap,
          FU = new WeakMap;
        let oU = !1;
        const DU = () => {
            oU || (oU = !0, Bc(EU))
          },
          EU = () => {
            const UU = new Set(zU.v.map((UU => AU.get(UU.entries[0])))),
              XU = yU.length - 10;
            yU = yU.filter(((zU, cU) => cU >= XU || UU.has(zU)));
            const FU = new Set;
            for (const zU of yU) {
              const UU = YU(zU.startTime, zU.processingEnd);
              for (const XU of UU) FU.add(XU)
            }
            const DU = cU.length - 10;
            cU = cU.filter(((UU, XU) => FU.has(UU) || XU >= DU && UU.startTime > QU)), oU = !1
          };
        zU.m = UU => {
          const zU = UU.startTime + UU.duration;
          let cU;
          QU = Math.max(QU, UU.processingEnd);
          for (let QU = yU.length - 1; QU >= 0; QU--) {
            const AU = yU[QU];
            if (Math.abs(zU - AU.renderTime) <= 8) {
              cU = AU, cU.startTime = Math.min(UU.startTime, cU.startTime), cU.processingStart = Math.min(UU.processingStart, cU.processingStart), cU.processingEnd = Math.max(UU.processingEnd, cU.processingEnd), XU.includeProcessedEventEntries && cU.entries.push(UU);
              break
            }
          }
          cU || (cU = {
            startTime: UU.startTime,
            processingStart: UU.processingStart,
            processingEnd: UU.processingEnd,
            renderTime: zU,
            entries: XU.includeProcessedEventEntries ? [UU] : []
          }, yU.push(cU)), UU.interactionId && AU.set(UU, cU), DU()
        }, zU.M = UU => {
          if (!FU.get(UU)) {
            const zU = UU.entries.find((UU => UU.target))?.target;
            if (zU) {
              const cU = XU.generateTarget?.(zU) ?? Vz(zU);
              FU.set(UU, cU)
            } else {
              const XU = UU.entries.find((UU => UU.targetSelector))?.targetSelector;
              XU && FU.set(UU, XU)
            }
          }
        };
        const YU = (UU, XU) => {
          const zU = [];
          for (const yU of cU)
            if (!(yU.startTime + yU.duration < UU)) {
              if (yU.startTime > XU) break;
              zU.push(yU)
            } return zU
        };
        cc(["long-animation-frame"], (UU => {
            cU = cU.concat(UU), DU()
          }), XU),
          function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const zU = Xc();
            oc((() => {
              "interactionCount" in performance || gc || (gc = cc(["event"], tc, {
                durationThreshold: 0
              }));
              let cU, yU = zc("INP");
              const QU = nz(XU, Gc),
                AU = (zU, AU, FU, oU, DU) => {
                  QU.D(), yU = zc("INP", -1, zU, AU, FU, oU, DU), cU = Jz(UU, yU, Zc, XU.reportAllChanges)
                },
                FU = () => {
                  const UU = QU.S(yU.navigationType);
                  UU && UU.k !== yU.value && (yU.value = UU.k, yU.entries = UU.entries, cU())
                },
                oU = UU => {
                  FU(), cU(!0), AU("soft-navigation", UU.navigationId, UU.interactionId, UU.name, UU.startTime)
                },
                DU = function(UU) {
                  let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Bc((() => {
                    for (const XU of UU) "soft-navigation" !== XU.entryType ? QU.l(XU) : oU(XU);
                    FU(), XU && cU(!0)
                  }))
                },
                EU = ["event", "first-input"];
              yc(XU) && EU.push("soft-navigation");
              const YU = cc(EU, DU, {
                ...XU,
                durationThreshold: XU.durationThreshold ?? 40
              });
              cU = Jz(UU, yU, Zc, XU.reportAllChanges), YU && (zU.onHidden((() => {
                DU(YU.takeRecords(), !0)
              })), xz((() => {
                AU("back-forward-cache", yU.navigationId, yU.navigationInteractionId, yU.navigationURL, lz())
              })))
            }))
          }((XU => {
            UU((UU => {
              if (0 === UU.entries.length) {
                const XU = UU.navigationStartTime || 0,
                  zU = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: UU.value,
                    loadState: Mz(XU)
                  };
                return Object.assign(UU, {
                  attribution: zU
                })
              }
              const XU = UU.entries[0],
                cU = AU.get(XU),
                yU = Math.max(cU.processingStart, XU.startTime),
                QU = Math.max(XU.startTime + XU.duration, yU),
                oU = Math.min(cU.processingEnd, QU),
                DU = cU.entries.sort(((UU, XU) => UU.processingStart - XU.processingStart)),
                EU = YU(XU.startTime, oU),
                NU = zU.p.get(XU.interactionId),
                IU = {
                  interactionTarget: FU.get(NU),
                  interactionType: XU.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: XU.startTime,
                  nextPaintTime: QU,
                  processedEventEntries: DU,
                  longAnimationFrameEntries: EU,
                  inputDelay: yU - XU.startTime,
                  processingDuration: oU - yU,
                  presentationDelay: QU - oU,
                  loadState: Mz(XU.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (UU => {
                const XU = UU.interactionTime,
                  zU = UU.nextPaintTime;
                if (!UU.longAnimationFrameEntries?.length || !XU || !zU) return;
                const cU = UU.inputDelay,
                  yU = UU.processingDuration;
                let QU, AU, FU = 0,
                  oU = 0,
                  DU = 0,
                  EU = 0;
                for (const IU of UU.longAnimationFrameEntries) {
                  oU = oU + IU.startTime + IU.duration - IU.styleAndLayoutStart;
                  for (const UU of IU.scripts) {
                    const zU = UU.startTime + UU.duration;
                    if (zU < XU) continue;
                    const DU = zU - Math.max(XU, UU.startTime),
                      YU = UU.duration ? DU / UU.duration * UU.forcedStyleAndLayoutDuration : 0;
                    FU += DU - YU, oU += YU, DU > EU && (AU = UU.startTime < XU + cU ? "input-delay" : UU.startTime >= XU + cU + yU ? "presentation-delay" : "processing-duration", QU = UU, EU = DU)
                  }
                }
                const YU = UU.longAnimationFrameEntries.at(-1),
                  NU = YU ? YU.startTime + YU.duration : 0;
                NU >= XU + cU + yU && (DU = zU - NU), QU && AU && (UU.longestScript = {
                  entry: QU,
                  subpart: AU,
                  intersectingDuration: EU
                }), UU.totalScriptDuration = FU, UU.totalStyleAndLayoutDuration = oU, UU.totalPaintDuration = DU, UU.totalUnattributedDuration = zU - XU - FU - oU - DU
              })(IU), Object.assign(UU, {
                attribution: IU
              })
            })(XU))
          }), XU)
      };
    class Pc {
      m;
      u;
      l(UU) {
        this.m?.(UU)
      }
    }
    const Wc = [2500, 4e3];
    let dc = 50;
    const Lc = [];
    cc(["resource"], (UU => {
      for (const XU of UU) Lc.push(XU), Lc.length > dc && Lc.shift()
    }));
    const ec = [800, 1800],
      Cc = UU => {
        document.prerendering ? oc((() => Cc(UU))) : "complete" !== document.readyState ? addEventListener("load", (() => Cc(UU)), !0) : setTimeout(UU)
      },
      wc = "load_state",
      qc = "time_to_first_byte";
    var Oc = class {
        constructor(UU, XU) {
          this.corePushMeasurement = UU, this.webVitalConfig = XU
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var UU;
          ! function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const zU = nz(XU = Object.assign({}, XU), iz),
              cU = new WeakMap;
            zU.t = UU => {
                if (UU?.sources?.length) {
                  const zU = Nc(UU.sources),
                    yU = zU?.node;
                  if (yU) {
                    const UU = XU.generateTarget?.(yU) ?? Vz(yU);
                    cU.set(zU, UU)
                  }
                }
              },
              function(UU) {
                let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const zU = Xc();
                Ec(Ac((() => {
                  let cU, yU = zc("CLS", 0);
                  const QU = nz(XU, iz),
                    AU = (zU, AU, FU, oU, DU) => {
                      yU = zc("CLS", 0, zU, AU, FU, oU, DU), QU.o = 0, cU = Jz(UU, yU, Yc, XU.reportAllChanges)
                    },
                    FU = function() {
                      let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      QU.o > yU.value && (yU.value = QU.o, yU.entries = QU.i), cU(UU)
                    },
                    oU = UU => {
                      FU(!0), AU("soft-navigation", UU.navigationId, UU.interactionId, UU.name, UU.startTime)
                    },
                    DU = UU => {
                      for (const XU of UU) "soft-navigation" !== XU.entryType ? QU.l(XU) : oU(XU);
                      FU()
                    },
                    EU = ["layout-shift"];
                  yc(XU) && EU.push("soft-navigation");
                  const YU = cc(EU, DU);
                  YU && (cU = Jz(UU, yU, Yc, XU.reportAllChanges), zU.onHidden((() => {
                    DU(YU.takeRecords()), cU(!0)
                  })), xz((() => {
                    AU("back-forward-cache", yU.navigationId, yU.navigationInteractionId, yU.navigationURL, lz()), jz(cU)
                  })), setTimeout(cU))
                })))
              }((XU => {
                UU((UU => {
                  let XU = {};
                  if (UU.entries.length) {
                    const zU = UU.entries.reduce(((UU, XU) => UU.value > XU.value ? UU : XU));
                    if (zU?.sources?.length) {
                      const UU = Nc(zU.sources);
                      UU && (XU = {
                        largestShiftTarget: cU.get(UU),
                        largestShiftTime: zU.startTime,
                        largestShiftValue: zU.value,
                        largestShiftSource: UU,
                        largestShiftEntry: zU,
                        loadState: Mz(zU.startTime)
                      })
                    }
                  }
                  return Object.assign(UU, {
                    attribution: XU
                  })
                })(XU))
              }), XU)
          }((UU => {
            const {
              loadState: XU,
              largestShiftValue: zU,
              largestShiftTime: cU,
              largestShiftTarget: yU
            } = UU.attribution, QU = this.buildInitialValues(UU);
            this.addIfPresent(QU, "largest_shift_value", zU), this.addIfPresent(QU, "largest_shift_time", cU);
            const AU = this.buildInitialContext(UU);
            this.addIfPresent(AU, wc, XU), this.addIfPresent(AU, "largest_shift_target", yU), this.pushMeasurement(QU, AU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureFCP() {
          var UU;
          ! function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const zU = nz(XU = Object.assign({}, XU), Fc);
            yc(XU) && (zU.u = new Map), Ec((XU => {
              UU((UU => {
                let XU = {
                  timeToFirstByte: 0,
                  firstByteToFCP: UU.value,
                  loadState: Mz(lz())
                };
                if ("soft-navigation" !== UU.navigationType) {
                  if (UU.entries.length) {
                    const zU = Hz(),
                      cU = UU.entries.at(-1);
                    if (zU) {
                      const yU = zU.responseStart,
                        QU = zU.activationStart || 0,
                        AU = Math.max(0, yU - QU);
                      XU = {
                        timeToFirstByte: AU,
                        firstByteToFCP: UU.value - AU,
                        loadState: Mz(UU.entries[0].startTime),
                        navigationEntry: zU,
                        fcpEntry: cU
                      }
                    }
                  }
                } else {
                  const cU = zU.u?.get(UU.navigationId);
                  cU && (XU = {
                    timeToFirstByte: 0,
                    firstByteToFCP: UU.value,
                    loadState: "complete",
                    navigationEntry: cU
                  })
                }
                return Object.assign(UU, {
                  attribution: XU
                })
              })(XU))
            }), XU)
          }((UU => {
            const {
              firstByteToFCP: XU,
              timeToFirstByte: zU,
              loadState: cU
            } = UU.attribution, yU = this.buildInitialValues(UU);
            this.addIfPresent(yU, "first_byte_to_fcp", XU), this.addIfPresent(yU, qc, zU);
            const QU = this.buildInitialContext(UU);
            this.addIfPresent(QU, wc, cU), this.pushMeasurement(yU, QU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureINP() {
          var UU;
          Rc((UU => {
            var XU;
            const {
              interactionTime: zU,
              presentationDelay: cU,
              inputDelay: yU,
              processingDuration: QU,
              nextPaintTime: AU,
              loadState: FU,
              interactionTarget: oU,
              interactionType: DU,
              totalScriptDuration: EU,
              totalStyleAndLayoutDuration: YU,
              totalPaintDuration: NU,
              totalUnattributedDuration: IU,
              longestScript: pU
            } = UU.attribution, aU = this.buildInitialValues(UU);
            this.addIfPresent(aU, "interaction_time", zU), this.addIfPresent(aU, "presentation_delay", cU), this.addIfPresent(aU, "input_delay", yU), this.addIfPresent(aU, "processing_duration", QU), this.addIfPresent(aU, "next_paint_time", AU), this.addNumberIfDefined(aU, "total_script_duration", EU), this.addNumberIfDefined(aU, "total_style_and_layout_duration", YU), this.addNumberIfDefined(aU, "total_paint_duration", NU), this.addNumberIfDefined(aU, "total_unattributed_duration", IU), this.addNumberIfDefined(aU, "longest_script_intersecting_duration", null === pU || void 0 === pU ? void 0 : pU.intersectingDuration);
            const tU = this.buildInitialContext(UU);
            this.addIfPresent(tU, wc, FU), this.addIfPresent(tU, "interaction_target", oU), this.addIfPresent(tU, "interaction_type", DU), this.addIfPresent(tU, "longest_script_subpart", null === pU || void 0 === pU ? void 0 : pU.subpart), this.addIfPresent(tU, "longest_script_invoker_type", null === pU || void 0 === pU ? void 0 : pU.entry.invokerType), (null === (XU = this.webVitalConfig) || void 0 === XU ? void 0 : XU.trackAttributionSources) && (this.addIfPresent(tU, "longest_script_invoker", null === pU || void 0 === pU ? void 0 : pU.entry.invoker), this.addIfPresent(tU, "longest_script_source_url", null === pU || void 0 === pU ? void 0 : pU.entry.sourceURL), this.addIfPresent(tU, "longest_script_source_function_name", null === pU || void 0 === pU ? void 0 : pU.entry.sourceFunctionName), this.addIfPresent(tU, "longest_script_source_char_position", void 0 !== (null === pU || void 0 === pU ? void 0 : pU.entry.sourceCharPosition) ? String(pU.entry.sourceCharPosition) : void 0)), this.pushMeasurement(aU, tU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureLCP() {
          var UU;
          ! function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (XU = Object.assign({}, XU)).resourceBufferSize && (dc = XU.resourceBufferSize);
            const zU = nz(XU, Pc),
              cU = new WeakMap;
            yc(XU) && (zU.u = new Map), zU.m = UU => {
                const zU = UU.element;
                if (zU) {
                  const yU = XU.generateTarget?.(zU) ?? Vz(zU);
                  cU.set(UU, yU)
                } else UU.id && cU.set(UU, `#${UU.id}`)
              },
              function(UU) {
                let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  zU = !1;
                const cU = yc(XU);
                oc((() => {
                  let yU, QU = Xc(),
                    AU = zc("LCP");
                  const FU = nz(XU, Pc),
                    oU = (cU, FU, oU, DU, EU) => {
                      AU = zc("LCP", -1, cU, FU, oU, DU, EU), yU = Jz(UU, AU, Wc, XU.reportAllChanges), zU = !1, "soft-navigation" === cU && (QU = Xc(!0))
                    },
                    DU = UU => {
                      FU.u && UU.navigationId && Qc(FU.u, UU), zU || yU(!0), oU("soft-navigation", UU.navigationId, UU.interactionId, UU.name, UU.startTime);
                      const XU = UU.getLargestInteractionContentfulPaint?.();
                      XU && EU([XU])
                    },
                    EU = UU => {
                      XU.reportAllChanges || cU || (UU = UU.slice(-1));
                      for (const XU of UU) {
                        if (!XU) continue;
                        if ("soft-navigation" === XU.entryType) {
                          DU(XU);
                          continue
                        }
                        let UU = 0,
                          zU = [],
                          cU = XU.startTime;
                        if ("largest-contentful-paint" === XU.entryType) UU = Math.max(XU.startTime - Kz(), 0), FU.l(XU), zU = [XU];
                        else if ("interaction-contentful-paint" === XU.entryType) {
                          const yU = XU;
                          if (!AU.navigationId) continue;
                          if ("interactionId" in yU && yU.interactionId != AU.navigationInteractionId) continue;
                          cU = yU.largestContentfulPaint?.renderTime || 0, UU = Math.max(cU - XU.startTime, 0), yU.largestContentfulPaint && (FU.l(yU.largestContentfulPaint), zU = [yU.largestContentfulPaint])
                        }
                        cU < QU.firstHiddenTime && (AU.value = UU, AU.entries = zU, yU())
                      }
                    },
                    YU = ["largest-contentful-paint"];
                  cU && YU.push("interaction-contentful-paint", "soft-navigation");
                  const NU = cc(YU, EU);
                  if (NU) {
                    yU = Jz(UU, AU, Wc, XU.reportAllChanges);
                    const QU = ["keydown", "click", "visibilitychange"],
                      FU = UU => {
                        if (UU.isTrusted && !zU) {
                          const UU = AU.id;
                          Bc((() => {
                            if (!zU) {
                              if (!cU) {
                                NU.disconnect();
                                for (const UU of QU) removeEventListener(UU, FU, {
                                  capture: !0
                                })
                              }
                              UU === AU.id && (zU = !0, yU(!0))
                            }
                          }))
                        }
                      };
                    for (const UU of QU) addEventListener(UU, FU, {
                      capture: !0
                    });
                    xz((cU => {
                      oU("back-forward-cache", AU.navigationId, AU.navigationInteractionId, AU.navigationURL, lz()), yU = Jz(UU, AU, Wc, XU.reportAllChanges), jz((() => {
                        AU.value = performance.now() - cU.timeStamp, zU = !0, yU(!0)
                      }))
                    }))
                  }
                }))
              }((XU => {
                UU((UU => {
                  let XU = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: UU.value
                  };
                  if (UU.entries.length) {
                    const yU = UU.entries.at(-1),
                      QU = UU => UU.name === yU.url && (UU.requestStart || UU.startTime) <= yU.startTime,
                      AU = yU.url && (Lc.findLast(QU) || performance.getEntriesByType("resource").findLast(QU));
                    let FU;
                    XU.target = cU.get(yU), XU.lcpEntry = yU, yU.url && (XU.url = yU.url), AU && (XU.lcpResourceEntry = AU);
                    let oU = 0,
                      DU = 0;
                    if ("soft-navigation" !== UU.navigationType ? (FU = Hz(), oU = FU?.activationStart ?? 0, DU = FU?.responseStart ?? 0) : (oU = UU.navigationStartTime || 0, FU = zU.u?.get(UU.navigationId)), FU) {
                      const zU = Math.max(0, DU - oU),
                        cU = Math.max(zU, AU ? (AU.requestStart || AU.startTime) - oU : 0),
                        yU = Math.min(UU.value, Math.max(cU, AU ? AU.responseEnd - oU : 0));
                      XU = {
                        ...XU,
                        timeToFirstByte: zU,
                        resourceLoadDelay: cU - zU,
                        resourceLoadDuration: yU - cU,
                        elementRenderDelay: UU.value - yU,
                        navigationEntry: FU
                      }
                    }
                  }
                  return Object.assign(UU, {
                    attribution: XU
                  })
                })(XU))
              }), XU)
          }((UU => {
            var XU;
            const {
              elementRenderDelay: zU,
              resourceLoadDelay: cU,
              resourceLoadDuration: yU,
              timeToFirstByte: QU,
              target: AU,
              url: FU,
              lcpResourceEntry: oU
            } = UU.attribution, DU = this.buildInitialValues(UU);
            this.addIfPresent(DU, "element_render_delay", zU), this.addIfPresent(DU, "resource_load_delay", cU), this.addIfPresent(DU, "resource_load_duration", yU), this.addIfPresent(DU, qc, QU);
            const EU = this.buildInitialContext(UU);
            this.addIfPresent(EU, "element", AU), (null === (XU = this.webVitalConfig) || void 0 === XU ? void 0 : XU.trackAttributionSources) && (this.addIfPresent(EU, "resource_url", FU), this.addIfPresent(EU, "resource_delivery_type", null === oU || void 0 === oU ? void 0 : oU.deliveryType), this.addIfPresent(EU, "resource_initiator_type", null === oU || void 0 === oU ? void 0 : oU.initiatorType)), this.pushMeasurement(DU, EU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        measureTTFB() {
          var UU;
          ! function(UU) {
            ! function(UU) {
              let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const zU = yc(XU);
              let cU = zc("TTFB"),
                yU = Jz(UU, cU, ec, XU.reportAllChanges);
              Cc((() => {
                const QU = Hz();
                if (QU) {
                  const AU = QU.responseStart;
                  cU.value = Math.max(AU - Kz(), 0), cU.entries = [QU], yU(!0), xz((() => {
                    cU = zc("TTFB", 0, "back-forward-cache", cU.navigationId, cU.navigationInteractionId, cU.navigationURL, lz()), yU = Jz(UU, cU, ec, XU.reportAllChanges), yU(!0)
                  })), zU && cc(["soft-navigation"], (zU => {
                    zU.forEach((zU => {
                      zU.navigationId && (cU = zc("TTFB", 0, "soft-navigation", zU.navigationId, zU.interactionId, zU.name, zU.startTime), cU.entries = [zU], yU = Jz(UU, cU, ec, XU.reportAllChanges), yU(!0))
                    }))
                  }), XU)
                }
              }))
            }((XU => {
              UU((UU => {
                const XU = UU.entries[0];
                let zU = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: XU
                };
                if (UU.entries.length && XU instanceof PerformanceNavigationTiming) {
                  const cU = XU.activationStart || 0,
                    yU = Math.max((XU.workerStart || XU.fetchStart || 0) - cU, 0),
                    QU = Math.max(XU.domainLookupStart - cU, 0),
                    AU = Math.max(XU.connectStart - cU, 0),
                    FU = Math.max(XU.connectEnd - cU, 0);
                  zU = {
                    waitingDuration: yU,
                    cacheDuration: QU - yU,
                    dnsDuration: AU - QU,
                    connectionDuration: FU - AU,
                    requestDuration: UU.value - FU,
                    navigationEntry: XU
                  }
                }
                return Object.assign(UU, {
                  attribution: zU
                })
              })(XU))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((UU => {
            const {
              dnsDuration: XU,
              connectionDuration: zU,
              requestDuration: cU,
              waitingDuration: yU,
              cacheDuration: QU
            } = UU.attribution, AU = this.buildInitialValues(UU);
            this.addIfPresent(AU, "dns_duration", XU), this.addIfPresent(AU, "connection_duration", zU), this.addIfPresent(AU, "request_duration", cU), this.addIfPresent(AU, "waiting_duration", yU), this.addIfPresent(AU, "cache_duration", QU);
            const FU = this.buildInitialContext(UU);
            this.pushMeasurement(AU, FU)
          }), {
            reportAllChanges: null === (UU = this.webVitalConfig) || void 0 === UU ? void 0 : UU.reportAllChanges
          })
        }
        buildInitialValues(UU) {
          return {
            [UU.name.toLowerCase()]: UU.value,
            delta: UU.delta
          }
        }
        buildInitialContext(UU) {
          var XU;
          const zU = null !== (XU = UX("com.grafana.faro.lastNavigationId", bU)) && void 0 !== XU ? XU : uz;
          return {
            id: UU.id,
            rating: UU.rating,
            navigation_type: UU.navigationType,
            navigation_entry_id: zU
          }
        }
        pushMeasurement(UU, XU) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: UU
          }, {
            context: XU
          })
        }
        addIfPresent(UU, XU, zU) {
          zU && (UU[XU] = zU)
        }
        addNumberIfDefined(UU, XU, zU) {
          void 0 !== zU && (UU[XU] = zU)
        }
      },
      Sc = class extends Xz {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = zz
        }
        initialize() {
          this.logDebug("Initializing"), new Oc(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const rc = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function uc() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const XU of UU)
        if ("traceparent" === XU.name) {
          if (!rc.test(XU.description)) continue;
          const [, UU, zU] = XU.description.split("-");
          if (null != UU && null != zU) return {
            traceId: UU,
            spanId: zU
          };
          break
        }
    }

    function fc(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: zU,
        monoNow: cU
      } = XU;
      return Math.min(zU, zU - (cU - UU))
    }

    function ic(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [zU, cU] of Object.entries(XU)) {
        const XU = UU[zU];
        return null != XU && (wU(cU) ? cU.includes(XU) : XU === cU)
      }
      return !0
    }

    function Hc(UU) {
      const {
        connectEnd: XU,
        connectStart: zU,
        decodedBodySize: cU,
        domainLookupEnd: yU,
        domainLookupStart: QU,
        duration: AU,
        encodedBodySize: FU,
        fetchStart: oU,
        initiatorType: DU,
        name: EU,
        nextHopProtocol: YU,
        redirectEnd: NU,
        redirectStart: IU,
        renderBlockingStatus: pU,
        requestStart: aU,
        responseEnd: tU,
        responseStart: gU,
        responseStatus: kU,
        secureConnectionStart: GU,
        transferSize: BU,
        workerStart: ZU
      } = UU;
      return {
        name: EU,
        httpHost: vc(EU),
        duration: Vc(AU),
        tcpHandshakeTime: Vc(XU - zU),
        dnsLookupTime: Vc(yU - QU),
        tlsNegotiationTime: Vc(XU - GU),
        responseStatus: Vc(kU),
        redirectTime: Vc(NU - IU),
        requestTime: Vc(gU - aU),
        responseTime: Vc(tU - gU),
        fetchTime: Vc(tU - oU),
        serviceWorkerTime: Vc(ZU > 0 ? oU - ZU : 0),
        decodedBodySize: Vc(cU),
        encodedBodySize: Vc(FU),
        cacheHitStatus: function() {
          let UU = "fullLoad";
          0 === BU ? cU > 0 && (UU = "cache") : null != kU ? 304 === kU && (UU = "conditionalFetch") : FU > 0 && BU < FU && (UU = "conditionalFetch");
          return UU
        }(),
        renderBlockingStatus: Vc(pU),
        protocol: YU,
        initiatorType: DU,
        visibilityState: document.visibilityState,
        ttfb: Vc(gU - aU),
        transferSize: Vc(BU)
      }
    }

    function Mc(UU) {
      const {
        activationStart: XU,
        domComplete: zU,
        domContentLoadedEventEnd: cU,
        domContentLoadedEventStart: yU,
        domInteractive: QU,
        fetchStart: AU,
        loadEventEnd: FU,
        loadEventStart: oU,
        responseStart: DU,
        type: EU
      } = UU, YU = function() {
        var UU;
        return null != (null === (UU = performance.timing) || void 0 === UU ? void 0 : UU.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return EX(EX({}, Hc(UU)), {}, {
        pageLoadTime: Vc(zU - AU),
        documentParsingTime: Vc(YU ? QU - YU : null),
        domProcessingTime: Vc(zU - QU),
        domContentLoadHandlerTime: Vc(cU - yU),
        onLoadTime: Vc(FU - oU),
        ttfb: Vc(Math.max(DU - (null !== XU && void 0 !== XU ? XU : 0), 0)),
        type: EU
      })
    }

    function vc(UU) {
      try {
        return new URL(UU).host || uz
      } catch (XU) {
        return uz
      }
    }

    function Vc(UU) {
      return null == UU ? uz : "number" === typeof UU ? Math.round(UU > 0 ? UU : 0).toString() : UU.toString()
    }
    const sc = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function nc(UU, XU, zU, cU, yU, QU, AU) {
      try {
        var FU = UU[QU](AU),
          oU = FU.value
      } catch (UU) {
        return void zU(UU)
      }
      FU.done ? XU(oU) : Promise.resolve(oU).then(cU, yU)
    }

    function mc(UU) {
      return function() {
        var XU = this,
          zU = arguments;
        return new Promise((function(cU, yU) {
          var QU = UU.apply(XU, zU);

          function AU(UU) {
            nc(QU, cU, yU, AU, FU, "next", UU)
          }

          function FU(UU) {
            nc(QU, cU, yU, AU, FU, "throw", UU)
          }
          AU(void 0)
        }))
      }
    }
    const lc = new kz;
    var xc = class extends Xz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = zz
      }
      initialize() {
        var UU = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let XU = !1;
        const zU = () => {
          ! function(UU) {
            if ("complete" === document.readyState) UU();
            else {
              const XU = () => {
                "complete" === document.readyState && (UU(), document.removeEventListener("readystatechange", XU))
              };
              document.addEventListener("readystatechange", XU)
            }
          }(mc((function*() {
            if (XU) return;
            const zU = UU.api.pushEvent,
              {
                faroNavigationId: cU
              } = yield function(UU) {
                let XU;
                const zU = new Promise((UU => {
                  XU = UU
                }));
                return new PerformanceObserver((zU => {
                  var cU;
                  const [yU] = zU.getEntries();
                  if (null == yU || jU(yU.name)) return;
                  const QU = yU.toJSON();
                  let AU = uc(null === QU || void 0 === QU ? void 0 : QU.serverTiming);
                  const FU = null !== (cU = UX("com.grafana.faro.lastNavigationId", bU)) && void 0 !== cU ? cU : uz,
                    oU = EX(EX({}, Mc(QU)), {}, {
                      faroNavigationId: gX(),
                      faroPreviousNavigationId: FU
                    });
                  XX("com.grafana.faro.lastNavigationId", oU.faroNavigationId, bU), UU("faro.performance.navigation", oU, void 0, {
                    spanContext: AU,
                    timestampOverwriteMs: fc(QU.startTime)
                  }), XU(oU)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), zU
              }(zU);
            XU || null == cU || function(UU, XU, zU, cU) {
              const yU = cU.trackResources;
              new PerformanceObserver((cU => {
                const QU = cU.getEntries(),
                  AU = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const FU of QU) {
                  if (jU(FU.name)) continue;
                  null === zU || void 0 === zU || zU.notify({
                    type: "resource"
                  });
                  const cU = FU.toJSON();
                  let QU = uc(null === cU || void 0 === cU ? void 0 : cU.serverTiming);
                  (null == yU && ic(cU, sc) || yU) && XU("faro.performance.resource", EX(EX({}, Hc(cU)), {}, {
                    faroNavigationId: UU,
                    faroResourceId: gX()
                  }), void 0, {
                    spanContext: QU,
                    timestampOverwriteMs: fc(cU.startTime, AU)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(cU, zU, lc, UU.config)
          })))
        };
        this.cancelInitialization = () => {
          XU = !0, document.removeEventListener("prerenderingchange", zU)
        }, document.prerendering ? document.addEventListener("prerenderingchange", zU, {
          once: !0
        }) : zU()
      }
      destroy() {
        var UU;
        null === (UU = this.cancelInitialization) || void 0 === UU || UU.call(this), this.cancelInitialization = void 0
      }
    };
    const Jc = "data-faro-user-action-name",
      jc = Jc.replace(/-name$/, "-timeout"),
      Kc = 1e3;

    function bc(UU) {
      return `data-${(UU.startsWith("data-")?UU.slice(5):UU).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Tc(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nX;
      if (void 0 === UU) return XU;
      let cU = NaN;
      try {
        cU = "string" === typeof UU && "" === UU.trim() ? NaN : Number(UU)
      } catch (yU) {}
      return !Number.isFinite(cU) || cU <= 0 ? (zU(`initialActivityTimeout must be a finite number greater than zero; using ${XU} ms`), XU) : cU > 1e3 ? (zU(`initialActivityTimeout cannot exceed ${Kc} ms; clamping to the maximum`), Kc) : cU
    }

    function hc(UU, XU, zU) {
      return void 0 !== UU && window.clearTimeout(UU), window.setTimeout((() => {
        XU()
      }), zU)
    }

    function Uy(UU) {
      return UU.type === gz
    }
    let Xy, zy;

    function cy() {
      return Xy || (Xy = new kz), zy || (zy = new MutationObserver(((UU, XU) => {
        Xy.notify({
          type: "dom-mutation"
        })
      })), zy.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Xy
    }
    const yy = "fetch",
      Qy = "xhr";
    let Ay, Fy, oy, Dy, Ey = !1;

    function Yy() {
      if (Ay) return Ay;

      function UU(UU) {
        Ay.notify({
          type: tz,
          request: UU
        })
      }

      function XU(UU) {
        Ay.notify({
          type: gz,
          request: UU
        })
      }
      return Ay = new kz, Ey || (! function(UU) {
        let {
          onRequestEnd: XU,
          onRequestStart: zU
        } = UU;
        oy || (oy = window.fetch);
        window.fetch = function() {
          var UU, cU;
          const yU = null !== (UU = KU(arguments[0])) && void 0 !== UU ? UU : "",
            QU = jU(yU),
            AU = (null !== (cU = arguments[1]) && void 0 !== cU ? cU : {}).method,
            FU = gX();
          return QU || zU({
            url: yU,
            method: AU,
            requestId: FU,
            apiType: yy
          }), oy.apply(this, arguments).then((UU => (QU || XU({
            url: yU,
            method: AU,
            requestId: FU,
            apiType: yy
          }), UU))).catch((UU => {
            throw QU || XU({
              url: yU,
              method: AU,
              requestId: FU,
              apiType: yy
            }), UU
          }))
        }
      }({
        onRequestStart: UU,
        onRequestEnd: XU
      }), function(UU) {
        let {
          onRequestStart: XU,
          onRequestEnd: zU
        } = UU;
        Fy || (Fy = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const UU = arguments[1],
            cU = jU(UU),
            yU = arguments[0],
            QU = gX();
          this.addEventListener("loadstart", (function() {
            cU || XU({
              url: UU,
              method: yU,
              requestId: QU,
              apiType: Qy
            })
          })), this.addEventListener("load", (function() {
            cU || zU({
              url: UU,
              method: yU,
              requestId: QU,
              apiType: Qy
            })
          })), this.addEventListener("error", (function() {
            cU || zU({
              url: UU,
              method: yU,
              requestId: QU,
              apiType: Qy
            })
          })), this.addEventListener("abort", (function() {
            cU || zU({
              url: UU,
              method: yU,
              requestId: QU,
              apiType: Qy
            })
          })), Fy.apply(this, arguments)
        }
      }({
        onRequestStart: UU,
        onRequestEnd: XU
      }), Ey = !0), Ay
    }
    let Ny, Iy = !1;
    let py = function(UU) {
      return UU[UU.Started = 0] = "Started", UU[UU.Halted = 1] = "Halted", UU[UU.Cancelled = 2] = "Cancelled", UU[UU.Ended = 3] = "Ended", UU
    }({});
    var ay = class {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = UU, this.logDebug = XU, this.initialActivityTimeout = zU, this.http = Yy(), this.dom = cy(), this.perf = (Dy || (Dy = new kz), Iy || (Ny = lc.subscribe((UU => {
          "resource" === UU.type && Dy.notify({
            type: "resource-entry"
          })
        })), Iy = !0), Dy), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new kz).merge(this.http, this.dom, this.perf).takeWhile((() => [py.Started, py.Halted].includes(this.userAction.getState()))).filter((UU => !!(this.userAction.getState() !== py.Halted || Uy(UU) && this.runningRequests.has(UU.request.requestId)))).subscribe((UU => {
          (function(UU) {
            return UU.type === tz
          })(UU) && this.runningRequests.set(UU.request.requestId, UU.request), Uy(UU) && this.runningRequests.delete(UU.request.requestId), Uy(UU) ? this.userAction.getState() === py.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((UU => [py.Ended, py.Cancelled].includes(UU))).first().subscribe((() => this.cleanup())), this.startupTid = hc(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === py.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === py.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = hc(this.haltTid, (() => {
          this.userAction.getState() === py.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var UU, XU;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (UU = this.allMonitorsSub) || void 0 === UU || UU.unsubscribe(), null === (XU = this.stateSub) || void 0 === XU || XU.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(UU) {
        void 0 !== UU && window.clearTimeout(UU)
      }
    };

    function ty(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nX;
      var zU;
      const {
        api: cU,
        config: yU,
        internalLogger: QU
      } = UU, AU = Tc(null === (zU = yU.userActionsInstrumentation) || void 0 === zU ? void 0 : zU.initialActivityTimeout, 100, XU);
      return {
        processUserEvent: function(UU) {
          var XU, zU;
          const QU = null !== (XU = null === (zU = yU.userActionsInstrumentation) || void 0 === zU ? void 0 : zU.dataAttributeName) && void 0 !== XU ? XU : Jc,
            AU = UU.target;
          if (!(AU instanceof Element)) return;
          const FU = function(UU, XU) {
              let zU = UU;
              for (; zU;) {
                if (zU.hasAttribute(XU)) return zU;
                zU = zU.parentElement
              }
              return null
            }(AU, bc(QU)),
            oU = function(UU, XU) {
              if (!UU) return;
              const zU = function(UU) {
                  return bc(UU).slice(5).replace(/-(.)/g, ((UU, XU) => XU.toUpperCase()))
                }(XU),
                cU = UU.dataset;
              for (const yU in cU)
                if (yU === zU) return cU[yU]
            }(FU, QU);
          if (!FU || !oU) return;
          const DU = function(UU, XU) {
            const zU = UU.getAttribute(function(UU) {
              const XU = bc(UU);
              return XU.endsWith("-name") ? `${XU.slice(0,-5)}-timeout` : `${XU}-timeout`
            }(XU));
            return null === zU ? void 0 : Number(zU)
          }(FU, QU);
          cU.startUserAction(oU, {}, {
            triggerName: UU.type,
            initialActivityTimeout: DU
          })
        },
        processUserActionStarted: function(UU, zU) {
          const cU = UU,
            yU = Tc(zU, AU, XU);
          new ay(cU, QU.debug, yU).attach()
        }
      }
    }
    const gy = "user_action_start",
      ky = {
        Normal: "normal",
        Critical: "critical"
      };
    var Gy = class {
        constructor() {
          this.buffer = []
        }
        addItem(UU) {
          this.buffer.push(UU)
        }
        flushBuffer(UU) {
          if (CU(UU))
            for (const XU of this.buffer) UU(XU);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      By = class extends kz {
        constructor(UU) {
          let {
            name: XU,
            parentId: zU,
            trigger: cU,
            transports: yU,
            attributes: QU,
            trackUserActionsExcludeItem: AU,
            importance: FU = ky.Normal,
            pushEvent: oU
          } = UU;
          super(), this.name = XU, this.attributes = QU, this.id = gX(), this.trigger = cU, this.parentId = null !== zU && void 0 !== zU ? zU : this.id, this.trackUserActionsExcludeItem = AU, this.importance = FU, this._pushEvent = oU, this._itemBuffer = new Gy, this._transports = yU, this._state = 0, this._start()
        }
        addItem(UU) {
          return 0 === this._state && (this._itemBuffer.addItem(UU), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = NX(), this._startTimeMono = IX())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((UU => {
            this._transports.execute(UU)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const UU = NX(),
            XU = IX() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((UU => {
            if (function(UU, XU) {
                return (null === XU || void 0 === XU ? void 0 : XU(UU)) || "measurement" === UU.type && "web-vitals" === UU.payload.type
              }(UU, this.trackUserActionsExcludeItem)) return void this._transports.execute(UU);
            const XU = TX(TX({}, UU), {}, {
              payload: TX(TX({}, UU.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(XU)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", TX({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: UU.toString(),
            userActionDuration: XU.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, fX(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: UU => (UU.action = {
              id: this.id,
              name: this.name
            }, UU)
          })
        }
        getState() {
          return this._state
        }
      };
    const Zy = new kz;

    function Ry(UU, XU) {
      return !!UU && (0 === (null === UU || void 0 === UU ? void 0 : UU.getState()) && (UU.addItem(XU), !0))
    }
    var Py = class extends Xz {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = zz
        }
        initialize() {
          const {
            processUserEvent: UU,
            processUserActionStarted: XU
          } = ty(aU, (UU => this.logWarn(UU)));
          this._processUserEvent = UU, this._processKeydown = XU => {
            [" ", "Enter"].includes(XU.key) && UU(XU)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Zy.subscribe((UU => {
            let {
              type: zU,
              userAction: cU,
              initialActivityTimeout: yU
            } = UU;
            "user_action_start" === zU && XU(cU, yU)
          }))
        }
        destroy() {
          var UU;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (UU = this._userActionSub) || void 0 === UU || UU.unsubscribe()
        }
      },
      Wy = class extends Xz {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = zz, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(UU) {
          const XU = {
            blockedURI: UU.blockedURI,
            columnNumber: UU.columnNumber,
            disposition: UU.disposition,
            documentURI: UU.documentURI,
            effectiveDirective: UU.effectiveDirective,
            lineNumber: UU.lineNumber,
            originalPolicy: UU.originalPolicy,
            referrer: UU.referrer,
            sample: UU.sample,
            sourceFile: UU.sourceFile,
            statusCode: UU.statusCode,
            violatedDirective: UU.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", fX(XU))
        }
      };
    var dy = class extends kz {
      constructor(UU, XU) {
        var zU, cU, yU, QU;
        super(), this._tracking = !1, this.eventsObservable = UU, this._options = {
          inactivityMs: null !== (zU = null === XU || void 0 === XU ? void 0 : XU.inactivityMs) && void 0 !== zU ? zU : 100,
          drainTimeoutMs: null !== (cU = null === XU || void 0 === XU ? void 0 : XU.drainTimeoutMs) && void 0 !== cU ? cU : 1e4,
          isOperationStart: null !== (yU = null === XU || void 0 === XU ? void 0 : XU.isOperationStart) && void 0 !== yU ? yU : () => {},
          isOperationEnd: null !== (QU = null === XU || void 0 === XU ? void 0 : XU.isOperationEnd) && void 0 !== QU ? QU : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((UU => {
          var XU;
          this._lastEventTime = IX(), null === (XU = this._currentEvents) || void 0 === XU || XU.push(UU);
          const zU = this._options.isOperationStart(UU);
          var cU;
          zU && (null === (cU = this._activeOperations) || void 0 === cU || cU.set(zU, !0));
          const yU = this._options.isOperationEnd(UU);
          var QU;
          yU && (null === (QU = this._activeOperations) || void 0 === QU || QU.delete(yU));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = IX(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let UU;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), UU = this.hasActiveOperations() ? IX() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: UU
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Ly(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Ly(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(UU) {
        UU && clearTimeout(UU)
      }
    };

    function Ly(UU, XU, zU) {
      return UU && clearTimeout(UU), UU = setTimeout((() => {
        XU()
      }), zU)
    }
    let ey;
    const Cy = new Set,
      wy = new Map;
    let qy, Oy, Sy, ry, uy, fy, iy, Hy, My = !1;
    var vy = class extends Xz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = zz
      }
      initialize() {
        const UU = Yy(),
          XU = cy(),
          zU = function() {
            function UU(UU, XU) {
              const zU = null !== XU && void 0 !== XU ? XU : location.href;
              zU !== Oy && (qy.notify({
                type: "url-change",
                from: Oy,
                to: zU,
                trigger: UU
              }), Oy = zU)
            }
            if (qy || (qy = new kz, Oy = location.href), !My)
              if ("navigation" in window && "NavigateEvent" in window) {
                iy = XU => {
                  try {
                    const zU = null === XU || void 0 === XU ? void 0 : XU.destination;
                    (null === zU || void 0 === zU ? void 0 : zU.sameDocument) && "string" === typeof zU.url && UU("navigate", zU.url)
                  } catch (zU) {}
                }, window.navigation.addEventListener("navigate", iy);
                const XU = window.NavigateEvent;
                XU && XU.prototype && "function" === typeof XU.prototype.intercept && (Hy || (Hy = XU.prototype.intercept), XU.prototype.intercept = function(XU) {
                  try {
                    const XU = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      zU = null === this || void 0 === this ? void 0 : this.destination;
                    XU && zU && !1 === zU.sameDocument && "string" === typeof zU.url && UU("navigate-intercept", zU.url)
                  } catch (zU) {}
                  return Hy.call(this, XU)
                }), My = !0
              } else Sy || (Sy = window.history.pushState), window.history.pushState = function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                const yU = Sy.apply(window.history, zU);
                return UU("pushState"), yU
              }, ry || (ry = window.history.replaceState), window.history.replaceState = function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                const yU = ry.apply(window.history, zU);
                return UU("replaceState"), yU
              }, uy = () => UU("popstate"), fy = () => UU("hashchange"), window.addEventListener("popstate", uy), window.addEventListener("hashchange", fy), My = !0;
            return qy
          }(),
          cU = (yU = ["pointerdown", "keydown"], ey || (ey = new kz), yU.forEach((UU => {
            if (!Cy.has(UU)) {
              const XU = () => {
                ey.notify({
                  type: "interaction",
                  name: UU
                })
              };
              window.addEventListener(UU, XU), Cy.add(UU), wy.set(UU, XU)
            }
          })), ey);
        var yU;
        const QU = new dy((new kz).merge(UU, XU, zU), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: UU => function(UU) {
            return UU.type === tz
          }(UU) ? UU.request.requestId : void 0,
          isOperationEnd: UU => function(UU) {
            return UU.type === gz
          }(UU) ? UU.request.requestId : void 0
        });
        QU.filter((UU => "tracking-ended" === UU.message)).subscribe((UU => {
          var XU, zU;
          if ((null === (XU = UU.events) || void 0 === XU ? void 0 : XU.some((UU => "url-change" === UU.type))) && (null === (zU = UU.events) || void 0 === zU ? void 0 : zU.some((UU => "dom-mutation" === UU.type)))) {
            var cU;
            const XU = null === (cU = UU.events) || void 0 === cU ? void 0 : cU.find((UU => "url-change" === UU.type));
            aU.api.pushEvent("faro.navigation", {
              fromUrl: null === XU || void 0 === XU ? void 0 : XU.from,
              toUrl: null === XU || void 0 === XU ? void 0 : XU.to,
              sameDocument: String(!0),
              duration: UU.duration
            })
          }
        })), cU.subscribe((() => {
          QU.startTracking()
        }))
      }
    };

    function Vy() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const XU = [new Py, new rz, new Sc, new cz, new fz, new vy];
      return !1 !== UU.enablePerformanceInstrumentation && XU.unshift(new xc), !1 !== UU.enableContentSecurityPolicyInstrumentation && XU.push(new Wy), !1 !== UU.captureConsole && XU.push(new Oz), XU
    }
    var sy = zU(7285);
    let ny, my;

    function ly() {
      const UU = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return ny === UU && my || (my = new sy.UAParser(UU).getResult(), ny = UU), my
    }
    const xy = () => {
        const {
          browser: UU,
          os: XU,
          ua: zU
        } = ly(), {
          name: cU,
          version: yU
        } = UU, {
          name: QU,
          version: AU
        } = XU, FU = navigator.language, oU = zU.includes("Mobi"), DU = function() {
          if (!cU || !yU) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== cU && void 0 !== cU ? cU : uz,
            version: null !== yU && void 0 !== yU ? yU : uz,
            os: `${null!==QU&&void 0!==QU?QU:uz} ${null!==AU&&void 0!==AU?AU:uz}`,
            userAgent: null !== zU && void 0 !== zU ? zU : uz,
            language: null !== FU && void 0 !== FU ? FU : uz,
            mobile: oU,
            brands: null !== DU && void 0 !== DU ? DU : uz,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Jy = () => {
        const {
          name: UU,
          version: XU
        } = ly().os;
        if (!UU && !XU) return {};
        const zU = {};
        return UU && (zU.name = UU), XU && (zU.version = XU), {
          os: zU
        }
      };

    function jy(UU) {
      var XU, zU, cU;
      return {
        id: null !== (XU = null === (zU = aU.config) || void 0 === zU || null === (zU = zU.sessionTracking) || void 0 === zU || null === (cU = zU.generateSessionId) || void 0 === cU ? void 0 : cU.call(zU)) && void 0 !== XU ? XU : gX(),
        attributes: UU
      }
    }
    const Ky = () => ({
      sdk: {
        name: "faro-web",
        version: zz
      }
    });
    var by = class extends Uz {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Ty = function(UU) {
      return UU.EXCEPTION = "exception", UU.LOG = "log", UU.MEASUREMENT = "measurement", UU.TRACE = "trace", UU.EVENT = "event", UU
    }({});
    const hy = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function UQ(UU, XU) {
      var zU, cU;
      if (void 0 === XU) return UU;
      if (void 0 === UU) return {
        resourceSpans: XU
      };
      const yU = null === (zU = UU.resourceSpans) || void 0 === zU ? void 0 : zU[0];
      if (void 0 === yU) return UU;
      const QU = (null === yU || void 0 === yU ? void 0 : yU.scopeSpans) || [],
        AU = (null === XU || void 0 === XU || null === (cU = XU[0]) || void 0 === cU ? void 0 : cU.scopeSpans) || [];
      return TX(TX({}, UU), {}, {
        resourceSpans: [TX(TX({}, yU), {}, {
          scopeSpans: [...QU, ...AU]
        })]
      })
    }

    function XQ(UU) {
      let XU = {
        meta: {}
      };
      return void 0 !== UU[0] && (XU.meta = UU[0].meta), UU.forEach((UU => {
        switch (UU.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const zU = hy[UU.type],
              cU = XU[zU];
            XU = TX(TX({}, XU), {}, {
              [zU]: void 0 === cU ? [UU.payload] : [...cU, UU.payload]
            });
            break
          }
          case "trace":
            XU = TX(TX({}, XU), {}, {
              traces: UQ(XU.traces, UU.payload.resourceSpans)
            })
        }
      })), XU
    }
    var zQ = class extends by {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = UU, this.name = "@grafana/faro-web-sdk:transport-console", this.version = zz
      }
      send(UU) {
        var XU;
        return this.unpatchedConsole[null !== (XU = this.options.level) && void 0 !== XU ? XU : Gz.DEBUG]("New event", XQ([UU]))
      }
    };
    const cQ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      yQ = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      QQ = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      AQ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      FQ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      oQ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function DQ(UU) {
      let {
        weekday: XU,
        day: zU,
        month: cU,
        year: yU,
        hour: QU,
        minute: AU,
        second: FU
      } = UU;
      if (yU < 1900 || zU < 1 || QU > 23 || AU > 59 || FU > 60) return;
      const oU = 60 === FU,
        DU = new Date(0);
      return DU.setUTCFullYear(yU, cU, zU), DU.setUTCHours(QU, AU, oU ? 59 : FU, 0), DU.getUTCDay() === XU && DU.getUTCDate() === zU && DU.getUTCMonth() === cU && DU.getUTCFullYear() === yU && DU.getUTCHours() === QU && DU.getUTCMinutes() === AU && DU.getUTCSeconds() === (oU ? 59 : FU) ? DU.getTime() + (oU ? 1e3 : 0) : void 0
    }
    var EQ = class {
      constructor(UU) {
        this.options = UU, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var UU = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const XU = this.sequence++;
        let zU = !1;
        return {
          deliver: function() {
            var zU = mc((function*(zU) {
              const cU = UU.options.getNow();
              let yU, QU = 0;
              for (;;) {
                var AU, FU, oU;
                const DU = UU.options.retry.maxAttempts - QU,
                  EU = yield UU.runAttempt((() => zU(DU, UU.unloading)), QU > 0);
                if (QU += EU.attemptsMade, "success" === EU.kind) return {
                  kind: "success",
                  attempts: QU,
                  elapsedTimeMs: UU.options.getNow() - cU
                };
                if (yU = EU.failure, "terminal" === EU.kind || UU.unloading) return {
                  kind: "terminal",
                  attempts: QU,
                  elapsedTimeMs: UU.options.getNow() - cU,
                  failure: yU
                };
                if (QU >= UU.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: QU,
                  elapsedTimeMs: UU.options.getNow() - cU,
                  failure: yU,
                  reason: "retries-exhausted"
                };
                if (null != EU.retryAfterMs && EU.retryAfterMs > UU.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: QU,
                  elapsedTimeMs: UU.options.getNow() - cU,
                  failure: yU,
                  reason: "retry-after-too-long"
                };
                const YU = Math.min(null !== (AU = EU.retryAfterMs) && void 0 !== AU ? AU : UU.options.retry.initialBackoffMs * Math.pow(UU.options.retry.backoffMultiplier, QU - 1), UU.options.retry.maxBackoffMs);
                if (null === (FU = (oU = UU.options).onRetry) || void 0 === FU || FU.call(oU, YU, QU + 1), yield UU.waitForTurn(XU, YU)) {
                  const XU = UU.options.retry.maxAttempts - QU,
                    yU = yield UU.runAttempt((() => zU(XU, !0)));
                  return QU += yU.attemptsMade, {
                    kind: "success" === yU.kind ? "success" : "terminal",
                    attempts: QU,
                    elapsedTimeMs: UU.options.getNow() - cU,
                    failure: "success" === yU.kind ? void 0 : yU.failure
                  }
                }
              }
            }));
            return function(UU) {
              return zU.apply(this, arguments)
            }
          }(),
          release: () => {
            zU || (zU = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const UU = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const XU of UU) XU.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((zU, cU) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const XU = () => {
                this.inProgress--, this.runNextAttempt()
              };
              UU().then((UU => {
                XU(), zU(UU)
              }), (UU => {
                XU(), cU(UU)
              }))
            },
            isRedelivery: XU
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const UU = this.options.getNow(),
            XU = this.attemptQueue.findIndex((XU => {
              let {
                isRedelivery: zU
              } = XU;
              return this.unloading || !zU || UU >= this.nextSendAt
            }));
          if (XU < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - UU)));
          const [zU] = this.attemptQueue.splice(XU, 1);
          zU.isRedelivery && !this.unloading && (this.nextSendAt = UU + 1), zU.run()
        }
      }
      waitForTurn(UU, XU) {
        const zU = Math.min(XU * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((XU => {
          this.waiting.push({
            sequence: UU,
            readyAt: this.options.getNow() + zU,
            resolve: XU
          }), this.waiting.sort(((UU, XU) => UU.readyAt === XU.readyAt ? UU.sequence - XU.sequence : UU.readyAt - XU.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const UU = this.waiting[0],
          XU = UU.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const XU = this.waiting.indexOf(UU);
          XU >= 0 && this.waiting.splice(XU, 1), UU.resolve(!1), this.scheduleNext()
        }), Math.max(0, XU - this.options.getNow()))
      }
    };

    function YQ(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if ({}.hasOwnProperty.call(UU, cU)) {
            if (XU.includes(cU)) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.includes(zU) || {}.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function NQ(UU) {
      const {
        size: XU,
        concurrency: zU
      } = UU, cU = [];
      let yU = 0;
      const QU = () => {
        if (yU < zU && cU.length) {
          const {
            producer: UU,
            resolve: XU,
            reject: zU
          } = cU.shift();
          yU++, UU().then((UU => {
            yU--, QU(), XU(UU)
          }), (UU => {
            yU--, QU(), zU(UU)
          }))
        }
      };
      return {
        add: UU => {
          if (cU.length + yU >= XU) throw new Error("Task buffer full");
          return new Promise(((XU, zU) => {
            cU.push({
              producer: UU,
              resolve: XU,
              reject: zU
            }), QU()
          }))
        }
      }
    }
    const IQ = ["headers"],
      pQ = ["keepalive", "signal"],
      aQ = new Set([408, 425, 429, 500, 502, 503, 504]),
      tQ = new Set([429, 503]);
    let gQ = 0,
      kQ = 0;
    var GQ = class extends Error {};
    var BQ = class extends by {
      constructor(UU) {
        var XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU;
        super(), this.options = UU, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = zz, this.pendingCustomSends = 0, this.getNow = null !== (XU = UU.getNow) && void 0 !== XU ? XU : Date.now, this.requestTimeoutMs = null !== (zU = UU.requestTimeoutMs) && void 0 !== zU ? zU : 1e4, this.compressionEnabled = null !== (cU = UU.requestCompression) && void 0 !== cU && cU && "undefined" !== typeof CompressionStream, UU.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new EQ({
          bufferSize: null !== (yU = UU.bufferSize) && void 0 !== yU ? yU : 30,
          concurrency: null !== (QU = UU.concurrency) && void 0 !== QU ? QU : 5,
          retry: {
            maxAttempts: null !== (AU = null === (FU = UU.retry) || void 0 === FU ? void 0 : FU.maxAttempts) && void 0 !== AU ? AU : 3,
            initialBackoffMs: null !== (oU = null !== (DU = null === (EU = UU.retry) || void 0 === EU ? void 0 : EU.initialBackoffMs) && void 0 !== DU ? DU : UU.defaultRateLimitBackoffMs) && void 0 !== oU ? oU : 1e3,
            maxBackoffMs: null !== (YU = null === (NU = UU.retry) || void 0 === NU ? void 0 : NU.maxBackoffMs) && void 0 !== YU ? YU : 3e4,
            backoffMultiplier: null !== (IU = null === (pU = UU.retry) || void 0 === pU ? void 0 : pU.backoffMultiplier) && void 0 !== IU ? IU : 2
          },
          getNow: this.getNow,
          getRandom: null !== (aU = UU.getRandom) && void 0 !== aU ? aU : Math.random,
          onRetry: (UU, XU) => {
            this.logDebug(`Retrying failed request after ${UU}ms. Attempt ${XU}.`)
          }
        }), this.customPromiseBuffer = NQ({
          size: null !== (tU = UU.bufferSize) && void 0 !== tU ? tU : 30,
          concurrency: null !== (gU = UU.concurrency) && void 0 !== gU ? gU : 5
        }), this.defaultPromiseBuffer = {
          add: UU => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(UU);
            const XU = this.deliveryQueue.reserve();
            if (!XU) throw new Error("Task buffer full");
            return this.runBufferedTask(XU, UU)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (UU => {
          UU.persisted && this.deliveryQueue.resume()
        })))
      }
      send(UU) {
        var XU = this;
        return mc((function*() {
          const zU = XU.promiseBuffer;
          if (zU !== XU.defaultPromiseBuffer || zU.add !== XU.defaultBufferAdd) {
            XU.pendingCustomSends++;
            try {
              yield zU.add((() => XU.deliver(UU)))
            } catch (cU) {
              XU.logError("Permanent delivery failure", {
                error: cU,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              XU.pendingCustomSends--
            }
          } else yield XU.deliver(UU)
        }))()
      }
      runBufferedTask(UU, XU) {
        return mc((function*() {
          let zU;
          try {
            return yield UU.deliver(mc((function*() {
              return zU = yield XU(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), zU
          } finally {
            UU.release()
          }
        }))()
      }
      deliver(UU) {
        var XU = this;
        return mc((function*() {
          const zU = XU.deliveryQueue.reserve();
          if (zU) try {
            const cU = yield XU.prepareRequest(UU), yU = yield zU.deliver(((UU, zU) => XU.performAttempt(cU, UU, zU)));
            "terminal" === yU.kind && XU.logError("retries-exhausted" === yU.reason ? "Delivery retries exhausted" : "Permanent delivery failure", EX(EX({}, yU.failure), {}, {
              reason: yU.reason,
              attempts: yU.attempts,
              elapsedTimeMs: yU.elapsedTimeMs
            }))
          } catch (cU) {
            XU.logError("Permanent delivery failure", {
              error: cU,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            zU.release()
          } else XU.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var UU;
        return [this.options.url].concat(null !== (UU = this.config.ignoreUrls) && void 0 !== UU ? UU : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(UU) {
        var XU = this;
        return mc((function*() {
          var zU, cU;
          const yU = XQ(UU),
            QU = null === (zU = yU.meta.session) || void 0 === zU ? void 0 : zU.id,
            AU = JSON.stringify(yU),
            FU = null !== (cU = XU.options.requestOptions) && void 0 !== cU ? cU : {},
            {
              headers: oU = {}
            } = FU,
            DU = YQ(FU, IQ),
            {
              keepalive: EU,
              signal: YU
            } = DU,
            NU = YQ(DU, pQ),
            IU = {};
          for (const [UU, XU] of Object.entries(oU)) IU[UU] = "function" === typeof XU ? yield XU(): XU;
          let pU = AU,
            aU = function(UU) {
              return "undefined" === typeof TextEncoder ? UU.length : (new TextEncoder).encode(UU).byteLength
            }(AU);
          const tU = {};
          return XU.compressionEnabled && (pU = yield XU.compress(AU), aU = pU.size, tU["Content-Encoding"] = "gzip"), {
            bodySize: aU,
            sessionId: QU,
            requestInit: EX({
              method: "POST",
              headers: EX(EX(EX(EX(EX({
                "Content-Type": "application/json"
              }, tU), IU), XU.options.apiKey ? {
                "x-api-key": XU.options.apiKey
              } : {}), QU ? {
                "x-faro-session-id": QU
              } : {}), {}, {
                "Idempotency-Key": gX(20)
              }),
              body: pU
            }, NU)
          }
        }))()
      }
      performAttempt(UU, XU, zU) {
        var cU = this;
        return mc((function*() {
          var yU;
          const QU = null === (yU = cU.options.requestOptions) || void 0 === yU ? void 0 : yU.signal;
          if (null === QU || void 0 === QU ? void 0 : QU.aborted) return {
            kind: "terminal",
            failure: {
              error: QU.reason
            },
            attemptsMade: 0
          };
          let AU = 0;
          try {
            var FU;
            const yU = yield cU.fetchWithKeepaliveFallback(UU.requestInit, UU.bodySize, !!zU || (null === (FU = cU.options.requestOptions) || void 0 === FU ? void 0 : FU.keepalive), XU, (() => AU++));
            if (cU.handleResponse(yU, UU.sessionId), yU.status >= 200 && yU.status < 300) return {
              kind: "success",
              attemptsMade: AU
            };
            const QU = {
              status: yU.status
            };
            return !aQ.has(yU.status) || zU ? {
              kind: "terminal",
              failure: QU,
              attemptsMade: AU
            } : {
              kind: "retry",
              failure: QU,
              attemptsMade: AU,
              retryAfterMs: tQ.has(yU.status) ? cU.getRetryAfterDelayMs(yU) : void 0
            }
          } catch (oU) {
            const UU = {
              error: oU
            };
            return (null === QU || void 0 === QU ? void 0 : QU.aborted) || !cU.isFetchNetworkError(oU) || zU ? {
              kind: "terminal",
              failure: UU,
              attemptsMade: AU
            } : {
              kind: "retry",
              failure: UU,
              attemptsMade: AU
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(UU, XU, zU, cU, yU) {
        var QU = this;
        return mc((function*() {
          const AU = QU.getNow(),
            FU = QU.reserveKeepalive(XU, zU);
          try {
            return yield QU.fetchWithTimeout(EX(EX({}, UU), {}, {
              keepalive: FU.keepalive
            }), QU.requestTimeoutMs, yU)
          } catch (DU) {
            var oU;
            if (FU.keepalive && cU > 1 && QU.isFetchNetworkError(DU) && !(DU instanceof GQ) && !(null === (oU = QU.options.requestOptions) || void 0 === oU || null === (oU = oU.signal) || void 0 === oU ? void 0 : oU.aborted)) {
              QU.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const XU = QU.requestTimeoutMs - (QU.getNow() - AU);
              return QU.fetchWithTimeout(EX(EX({}, UU), {}, {
                keepalive: !1
              }), XU, yU)
            }
            throw DU
          } finally {
            FU.release()
          }
        }))()
      }
      fetchWithTimeout(UU, XU, zU) {
        var cU = this;
        return mc((function*() {
          var yU;
          const QU = null === (yU = cU.options.requestOptions) || void 0 === yU ? void 0 : yU.signal;
          if (cU.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return zU(), fetch(cU.options.url, EX(EX({}, UU), {}, {
            signal: QU
          }));
          if (XU <= 0) throw new GQ("Request timed out");
          const AU = new AbortController,
            FU = () => AU.abort(null === QU || void 0 === QU ? void 0 : QU.reason);
          null === QU || void 0 === QU || QU.addEventListener("abort", FU, {
            once: !0
          });
          let oU = !1;
          const DU = setTimeout((() => {
            oU = !0, AU.abort()
          }), XU);
          try {
            return zU(), yield fetch(cU.options.url, EX(EX({}, UU), {}, {
              signal: AU.signal
            }))
          } catch (EU) {
            if (oU && !(null === QU || void 0 === QU ? void 0 : QU.aborted)) throw new GQ("Request timed out");
            throw EU
          } finally {
            clearTimeout(DU), null === QU || void 0 === QU || QU.removeEventListener("abort", FU)
          }
        }))()
      }
      getRetryAfterDelayMs(UU) {
        const XU = UU.headers.get("Retry-After");
        if (!XU) return;
        if (/^\d+$/.test(XU)) {
          const UU = 1e3 * Number(XU);
          return Number.isFinite(UU) ? UU : Number.POSITIVE_INFINITY
        }
        const zU = this.getNow(),
          cU = function(UU, XU) {
            const zU = cQ.exec(UU);
            if (zU) {
              const [, UU, XU, cU, yU, QU, AU, FU] = zU;
              return DQ({
                weekday: AQ.indexOf(UU),
                day: Number(XU),
                month: oQ.indexOf(cU),
                year: Number(yU),
                hour: Number(QU),
                minute: Number(AU),
                second: Number(FU)
              })
            }
            const cU = yQ.exec(UU);
            if (cU) {
              const [, UU, zU, AU, FU, oU, DU, EU] = cU, YU = new Date(XU);
              if (Number.isNaN(YU.getTime())) return;
              const NU = YU.getUTCFullYear();
              let IU = 100 * Math.floor(NU / 100) + Number(FU);
              IU < NU && (IU += 100);
              const pU = oQ.indexOf(AU),
                aU = {
                  month: pU,
                  day: Number(zU),
                  hour: Number(oU),
                  minute: Number(DU),
                  second: Number(EU),
                  millisecond: 0
                },
                tU = {
                  month: YU.getUTCMonth(),
                  day: YU.getUTCDate(),
                  hour: YU.getUTCHours(),
                  minute: YU.getUTCMinutes(),
                  second: YU.getUTCSeconds(),
                  millisecond: YU.getUTCMilliseconds()
                };
              return (IU > NU + 50 || IU === NU + 50 && (QU = tU, ((yU = aU).month - QU.month || yU.day - QU.day || yU.hour - QU.hour || yU.minute - QU.minute || yU.second - QU.second || yU.millisecond - QU.millisecond) > 0)) && (IU -= 100), DQ({
                weekday: FQ.indexOf(UU),
                day: Number(zU),
                month: pU,
                year: IU,
                hour: Number(oU),
                minute: Number(DU),
                second: Number(EU)
              })
            }
            var yU, QU;
            const AU = QQ.exec(UU);
            if (!AU) return;
            const [, FU, oU, DU, EU, YU, NU, IU, pU] = AU;
            return DQ({
              weekday: AQ.indexOf(FU),
              day: Number(null !== DU && void 0 !== DU ? DU : EU),
              month: oQ.indexOf(oU),
              year: Number(pU),
              hour: Number(YU),
              minute: Number(NU),
              second: Number(IU)
            })
          }(XU, zU);
        return null == cU ? void 0 : Math.max(0, cU - zU)
      }
      reserveKeepalive(UU, XU) {
        if (!1 === XU || UU > 6e4 || gQ + UU > 6e4 || kQ >= 9) return {
          keepalive: !1,
          release: nX
        };
        gQ += UU, kQ++;
        let zU = !1;
        return {
          keepalive: !0,
          release: () => {
            zU || (zU = !0, gQ -= UU, kQ--)
          }
        }
      }
      handleResponse(UU, XU) {
        202 === UU.status && "invalid" === UU.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), XU), UU.text().catch(nX)
      }
      isFetchNetworkError(UU) {
        return UU instanceof TypeError || UU instanceof GQ || UU instanceof DOMException && "AbortError" === UU.name
      }
      compress(UU) {
        return mc((function*() {
          const XU = [],
            zU = new ReadableStream({
              start(XU) {
                XU.enqueue((new TextEncoder).encode(UU)), XU.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: UU,
              value: cU
            } = yield zU.read();
            if (UU) return new Blob(XU);
            XU.push(cU)
          }
        }))()
      }
      extendFaroSession(UU, XU, zU) {
        var cU, yU;
        const QU = UU.sessionTracking;
        if (!(null === QU || void 0 === QU ? void 0 : QU.enabled)) return void XU("Session expired.");
        const {
          fetchUserSession: AU,
          storeUserSession: FU
        } = sX(QU), oU = null === (cU = this.metas.value.session) || void 0 === cU ? void 0 : cU.id, DU = null === (yU = AU()) || void 0 === yU ? void 0 : yU.sessionId;
        zU && zU === oU && zU === DU ? (wX({
          fetchUserSession: AU,
          storeUserSession: FU
        })({
          forceSessionExtend: !0
        }), XU("Session expired; created new session.")) : XU("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const ZQ = () => {
      const UU = window.k6;
      return {
        k6: EX({
          isK6Browser: !0
        }, (null === UU || void 0 === UU ? void 0 : UU.testRunId) && {
          testRunId: null === UU || void 0 === UU ? void 0 : UU.testRunId
        })
      }
    };
    let RQ, PQ;

    function WQ() {
      let {
        generatePageId: UU,
        initialPageMeta: XU
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const zU = location.href;
        return CU(UU) && RQ !== zU && (RQ = zU, PQ = UU(location)), {
          page: EX(EX({
            url: zU
          }, PQ ? {
            id: PQ
          } : {}), XU)
        }
      }
    }

    function dQ() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hX,
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zU = lX;
      return XU > 0 && (zU.error = XU >= 1 ? function() {
        for (var XU = arguments.length, cU = new Array(XU), yU = 0; yU < XU; yU++) cU[yU] = arguments[yU];
        UU.error(`${zU.prefix}\n`, ...cU)
      } : nX, zU.warn = XU >= 2 ? function() {
        for (var XU = arguments.length, cU = new Array(XU), yU = 0; yU < XU; yU++) cU[yU] = arguments[yU];
        UU.warn(`${zU.prefix}\n`, ...cU)
      } : nX, zU.info = XU >= 3 ? function() {
        for (var XU = arguments.length, cU = new Array(XU), yU = 0; yU < XU; yU++) cU[yU] = arguments[yU];
        UU.info(`${zU.prefix}\n`, ...cU)
      } : nX, zU.debug = XU >= 4 ? function() {
        for (var XU = arguments.length, cU = new Array(XU), yU = 0; yU < XU; yU++) cU[yU] = arguments[yU];
        UU.debug(`${zU.prefix}\n`, ...cU)
      } : nX), zU
    }
    const LQ = "faro",
      eQ = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      CQ = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function wQ(UU) {
      var XU, zU, yU, QU, AU, FU;
      const oU = [],
        EU = dQ(UU.unpatchedConsole, UU.internalLoggerLevel);
      UU.transports ? ((UU.url || UU.apiKey) && EU.error('if "transports" is defined, "url" and "apiKey" should not be defined'), oU.push(...UU.transports)) : UU.url ? oU.push(new BQ({
        url: UU.url,
        apiKey: UU.apiKey,
        requestCompression: UU.requestCompression
      })) : EU.error('either "url" or "transports" must be defined');
      const {
        dedupe: YU = !0,
        eventDomain: NU = cU,
        globalObjectKey: IU = LQ,
        instrumentations: pU = Vy(),
        internalLoggerLevel: aU = xX,
        isolate: tU = !1,
        logArgsSerializer: gU = qz,
        metas: kU = OQ(UU),
        paused: GU = !1,
        preventGlobalExposure: BU = !1,
        unpatchedConsole: ZU = hX,
        url: RU,
        experimental: PU
      } = UU, WU = YQ(UU, CQ), dU = null !== (XU = null === PU || void 0 === PU ? void 0 : PU.trackNavigation) && void 0 !== XU && XU, LU = {
        dataAttributeName: bc(null !== (zU = null === (yU = UU.userActionsInstrumentation) || void 0 === yU ? void 0 : yU.dataAttributeName) && void 0 !== zU ? zU : Jc),
        excludeItem: null === (QU = UU.userActionsInstrumentation) || void 0 === QU ? void 0 : QU.excludeItem,
        initialActivityTimeout: Tc(null === (AU = UU.userActionsInstrumentation) || void 0 === AU ? void 0 : AU.initialActivityTimeout, 100, (UU => EU.warn(UU)))
      };
      return EX(EX({}, WU), {}, {
        batching: EX(EX({}, eQ), UU.batching),
        dedupe: YU,
        globalObjectKey: IU,
        instrumentations: qQ(pU, UU),
        internalLoggerLevel: aU,
        isolate: tU,
        logArgsSerializer: gU,
        metas: kU,
        parseStacktrace: az,
        paused: GU,
        preventGlobalExposure: BU,
        transports: oU,
        unpatchedConsole: ZU,
        eventDomain: NU,
        ignoreUrls: [...null !== (FU = UU.ignoreUrls) && void 0 !== FU ? FU : [], ...RU ? [RU] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: EX(EX(EX({}, DU), UU.sessionTracking), SQ({
          trackGeolocation: UU.trackGeolocation,
          sessionTracking: UU.sessionTracking
        })),
        userActionsInstrumentation: LU,
        experimental: {
          trackNavigation: dU
        }
      })
    }

    function qQ(UU, XU) {
      let {
        experimental: zU
      } = XU;
      var cU;
      const yU = null !== (cU = null === zU || void 0 === zU ? void 0 : zU.trackNavigation) && void 0 !== cU && cU;
      return UU.filter((UU => !("@grafana/faro-web-sdk:instrumentation-navigation" === UU.name && !yU)))
    }

    function OQ(UU) {
      var XU, zU, cU;
      const {
        page: yU,
        generatePageId: QU
      } = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.pageTracking) && void 0 !== XU ? XU : {}, AU = [xy, Jy, WQ({
        generatePageId: QU,
        initialPageMeta: yU
      }), ...null !== (zU = UU.metas) && void 0 !== zU ? zU : [], Ky];
      return eU(null === (cU = window) || void 0 === cU ? void 0 : cU.k6) ? [...AU, ZQ] : AU
    }

    function SQ(UU) {
      let {
        trackGeolocation: XU,
        sessionTracking: zU
      } = UU;
      var cU;
      const yU = {};
      return dU(XU) && (yU.geoLocationTrackingEnabled = XU), xU(yU) ? {} : {
        session: EX(EX({}, null !== (cU = null === zU || void 0 === zU ? void 0 : zU.session) && void 0 !== cU ? cU : {}), {}, {
          overrides: yU
        })
      }
    }
    const rQ = new WeakSet;

    function uQ(UU) {
      return rQ.add(UU), UU
    }

    function fQ(UU, XU) {
      if (UU.capture) return uQ(UU.capture(XU));
      const zU = uQ(UU.value);
      return null === XU || void 0 === XU || XU(), zU
    }

    function iQ(UU) {
      const XU = `__faroBundleId_${UU}`,
        zU = null === EU || void 0 === EU ? void 0 : EU[XU];
      if ("string" === typeof zU && "" !== zU) return zU;
      const cU = "undefined" !== typeof window ? window[XU] : void 0;
      return "string" === typeof cU && "" !== cU ? cU : void 0
    }

    function HQ(UU) {
      var XU, zU;
      const cU = UU.config.app.name,
        yU = cU ? function(UU) {
          return null === EU || void 0 === EU ? void 0 : EU[`__faroGitHash_${UU}`]
        }(cU) : void 0,
        QU = {
          sdk: {
            version: zz,
            name: "faro"
          },
          app: TX({
            bundleId: cU && iQ(cU)
          }, void 0 !== yU ? {
            gitHash: yU
          } : {})
        },
        AU = null === (XU = UU.config.sessionTracking) || void 0 === XU ? void 0 : XU.session;
      AU && UU.api.setSession(AU), UU.config.app && (QU.app = TX(TX({}, UU.config.app), QU.app)), UU.config.user && (QU.user = UU.config.user), UU.config.view && (QU.view = UU.config.view), UU.metas.add(QU, ...null !== (zU = UU.config.metas) && void 0 !== zU ? zU : [])
    }
    var MQ = class {
      constructor(UU, XU) {
        var zU, cU;
        this.signalBuffer = [], this.itemLimit = null !== (zU = null === XU || void 0 === XU ? void 0 : XU.itemLimit) && void 0 !== zU ? zU : 50, this.sendTimeout = null !== (cU = null === XU || void 0 === XU ? void 0 : XU.sendTimeout) && void 0 !== cU ? cU : 250, this.paused = (null === XU || void 0 === XU ? void 0 : XU.paused) || !1, this.sendFn = UU, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(UU) {
        this.paused || (this.signalBuffer.push(UU), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(UU) {
        const XU = new Map;
        return UU.forEach((UU => {
          const zU = JSON.stringify(UU.meta);
          let cU = XU.get(zU);
          cU = void 0 === cU ? [UU] : [...cU, UU], XU.set(zU, cU)
        })), Array.from(XU.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const UU = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(UU).forEach(this.sendFn)
        } catch (XU) {
          throw this.signalBuffer = [...UU, ...this.signalBuffer], this.trimBufferToLimit(), XU
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function vQ(UU, XU, zU, cU) {
      var yU;
      XU.debug("Initializing transports");
      const QU = [];
      let AU = [];
      const FU = UU => {
        let XU = UU;
        for (const cU of AU) {
          const UU = XU.map(cU).filter(Boolean);
          if (0 === UU.length) return [];
          XU = VQ(UU, zU)
        }
        return XU
      };
      let oU;
      (null === (yU = zU.batching) || void 0 === yU ? void 0 : yU.enabled) && (oU = new MQ((UU => {
        const zU = FU(UU);
        if (0 !== zU.length)
          for (const cU of QU) XU.debug(`Transporting item using ${cU.name}\n`, zU), cU.isBatched() && cU.send(zU)
      }), {
        sendTimeout: zU.batching.sendTimeout,
        itemLimit: zU.batching.itemLimit,
        paused: zU.paused
      }));
      return {
        add: function() {
          XU.debug("Adding transports");
          for (var yU = arguments.length, AU = new Array(yU), FU = 0; FU < yU; FU++) AU[FU] = arguments[FU];
          AU.forEach((yU => {
            XU.debug(`Adding "${yU.name}" transport`), QU.some((UU => UU === yU)) ? XU.warn(`Transport ${yU.name} is already added`) : (yU.unpatchedConsole = UU, yU.internalLogger = XU, yU.config = zU, yU.metas = cU, QU.push(yU))
          }))
        },
        addBeforeSendHooks: function() {
          XU.debug("Adding beforeSendHooks\n", AU);
          for (var UU = arguments.length, zU = new Array(UU), cU = 0; cU < UU; cU++) zU[cU] = arguments[cU];
          zU.forEach((UU => {
            UU && AU.push(UU)
          }))
        },
        getBeforeSendHooks: () => [...AU],
        execute: UU => {
          var yU;
          if (!zU.paused && vX(cU).shouldCapture()) {
            if (YU = UU.meta, !rQ.has(YU)) {
              var AU, DU, EU;
              const XU = null === (AU = cU.value.session) || void 0 === AU ? void 0 : AU.id,
                yU = fQ(cU);
              if (zU.paused) return;
              const QU = TX({}, UU.meta);
              (null === (DU = QU.session) || void 0 === DU ? void 0 : DU.id) === XU && (null === (EU = yU.session) || void 0 === EU ? void 0 : EU.id) !== XU && (void 0 === yU.session ? delete QU.session : QU.session = yU.session), UU = TX(TX({}, UU), {}, {
                meta: uQ(QU)
              })
            }
            var YU;
            (null === (yU = zU.batching) || void 0 === yU ? void 0 : yU.enabled) && (null === oU || void 0 === oU || oU.addItem(UU)), (UU => {
              var cU;
              if ((null === (cU = zU.batching) || void 0 === cU ? void 0 : cU.enabled) && QU.every((UU => UU.isBatched()))) return;
              const [yU] = FU([UU]);
              if (void 0 !== yU)
                for (const FU of QU) {
                  var AU;
                  XU.debug(`Transporting item using ${FU.name}\n`, yU), FU.isBatched() ? (null === (AU = zU.batching) || void 0 === AU ? void 0 : AU.enabled) || FU.send([yU]) : FU.send(yU)
                }
            })(UU)
          }
        },
        isPaused: () => zU.paused,
        pause: () => {
          XU.debug("Pausing transports"), null === oU || void 0 === oU || oU.pause(), zU.paused = !0
        },
        remove: function() {
          XU.debug("Removing transports");
          for (var UU = arguments.length, zU = new Array(UU), cU = 0; cU < UU; cU++) zU[cU] = arguments[cU];
          zU.forEach((UU => {
            XU.debug(`Removing "${UU.name}" transport`);
            const zU = QU.indexOf(UU); - 1 !== zU ? QU.splice(zU, 1) : XU.warn(`Transport "${UU.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var UU = arguments.length, zU = new Array(UU), cU = 0; cU < UU; cU++) zU[cU] = arguments[cU];
          XU.debug("Removing beforeSendHooks"), AU = AU.filter((UU => !zU.includes(UU)))
        },
        get transports() {
          return [...QU]
        },
        unpause: () => {
          XU.debug("Unpausing transports"), null === oU || void 0 === oU || oU.start(), zU.paused = !1
        }
      }
    }

    function VQ(UU, XU) {
      if (XU.preserveOriginalError)
        for (const zU of UU) "exception" === zU.type && delete zU.payload.originalError;
      return UU
    }
    let sQ = hX;

    function nQ(UU) {
      var XU;
      return sQ = null !== (XU = UU.unpatchedConsole) && void 0 !== XU ? XU : sQ, sQ
    }
    let mQ, lQ = lX;

    function xQ(UU, XU) {
      return lQ = dQ(UU, XU.internalLoggerLevel), lQ
    }

    function JQ(UU) {
      let {
        internalLogger: XU,
        config: zU,
        metas: cU,
        transports: yU,
        tracesApi: QU,
        userActionsApi: AU
      } = UU;
      var FU;
      XU.debug("Initializing exceptions API");
      let oU = null;
      mQ = null !== (FU = zU.parseStacktrace) && void 0 !== FU ? FU : mQ;
      const DU = UU => {
          XU.debug("Changing stacktrace parser"), mQ = null !== UU && void 0 !== UU ? UU : mQ
        },
        {
          ignoreErrors: EU = [],
          preserveOriginalError: YU
        } = zU;
      return DU(zU.parseStacktrace), {
        changeStacktraceParser: DU,
        getStacktraceParser: () => mQ,
        pushError: function(UU) {
          let {
            skipDedupe: FU,
            stackFrames: DU,
            type: NU,
            context: IU,
            spanContext: pU,
            timestampOverwriteMs: aU,
            originalError: tU,
            fingerprint: gU,
            fatal: kU
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(UU, XU) {
              const {
                message: zU,
                name: cU,
                stack: yU
              } = XU;
              return QU = UU, AU = zU + " " + cU + " " + yU, QU.some((UU => RU(UU) ? AU.includes(UU) : !!AU.match(UU)));
              var QU, AU
            }(EU, null !== tU && void 0 !== tU ? tU : UU)) try {
            var GU, BU;
            if (!vX(cU).shouldCapture()) return;
            const EU = fX(TX(TX({}, function(UU) {
                let XU = UU.cause;
                iU(XU) ? XU = UU.cause.toString() : null !== XU && (eU(UU.cause) || wU(UU.cause)) ? XU = uX(UU.cause) : null != XU && (XU = UU.cause.toString());
                return null == XU ? {} : {
                  cause: XU
                }
              }(null !== tU && void 0 !== tU ? tU : UU)), null !== IU && void 0 !== IU ? IU : {})),
              RU = TX(TX(TX(TX({
                type: NU || UU.name || "Error",
                value: UU.message,
                timestamp: aU ? aX(aU) : pX(),
                trace: pU ? {
                  trace_id: pU.traceId,
                  span_id: pU.spanId
                } : QU.getTraceContext()
              }, xU(EU) ? {} : {
                context: EU
              }), YU ? {
                originalError: tU
              } : {}), gU ? {
                fingerprint: gU
              } : {}), void 0 !== kU ? {
                fatal: kU
              } : {});
            DU = null !== (GU = DU) && void 0 !== GU ? GU : UU.stack ? null === mQ || void 0 === mQ ? void 0 : mQ(UU).frames : void 0, (null === DU || void 0 === DU ? void 0 : DU.length) && (RU.stacktrace = {
              frames: DU
            });
            const PU = {
              type: RU.type,
              value: RU.value,
              stacktrace: RU.stacktrace,
              context: RU.context,
              fingerprint: RU.fingerprint,
              fatal: null !== (BU = RU.fatal) && void 0 !== BU && BU
            };
            if (!FU && zU.dedupe && !ZU(oU) && kX(PU, oU)) return void XU.debug("Skipping error push because it is the same as the last one\n", RU);
            const WU = oU,
              dU = fQ(cU);
            if (oU !== WU && !FU && zU.dedupe && kX(PU, oU)) return;
            oU = PU;
            const LU = {
              meta: dU,
              payload: RU,
              type: "exception"
            };
            XU.debug("Pushing exception\n", LU), Ry(AU.getActiveUserAction(), LU) || yU.execute(LU)
          } catch (PU) {
            XU.error("Error pushing event", PU)
          }
        }
      }
    }

    function jQ(UU, XU, zU, cU, yU) {
      XU.debug("Initializing API");
      let QU = null;
      const AU = function(UU) {
          let {
            transports: XU,
            internalLogger: zU,
            config: cU,
            pushEvent: yU
          } = UU;
          var QU;
          const AU = null === (QU = cU.userActionsInstrumentation) || void 0 === QU ? void 0 : QU.excludeItem;
          let FU;
          const oU = () => FU;
          return {
            startUserAction: (UU, cU, QU) => {
              if (void 0 === oU()) {
                const zU = new By({
                  name: UU,
                  transports: XU,
                  attributes: cU,
                  trigger: (null === QU || void 0 === QU ? void 0 : QU.triggerName) || "faroApiCall",
                  importance: (null === QU || void 0 === QU ? void 0 : QU.importance) || ky.Normal,
                  trackUserActionsExcludeItem: AU,
                  pushEvent: yU
                });
                return zU.filter((UU => [3, 2].includes(UU))).first().subscribe((() => {
                  FU = void 0
                })), Zy.notify({
                  type: gy,
                  userAction: zU,
                  initialActivityTimeout: null === QU || void 0 === QU ? void 0 : QU.initialActivityTimeout
                }), FU = zU, FU
              }
              zU.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: oU
          }
        }({
          transports: yU,
          config: zU,
          internalLogger: XU,
          pushEvent: (UU, zU, cU, yU) => {
            QU ? QU(UU, zU, cU, yU) : XU.warn("pushEventImpl is not initialized. Event dropped:", {
              name: UU,
              attributes: zU,
              domain: cU,
              options: yU
            })
          }
        }),
        FU = function(UU, XU, zU, cU, yU) {
          let QU;
          return XU.debug("Initializing traces API"), {
            getOTEL: () => QU,
            getTraceContext: () => {
              const UU = null === QU || void 0 === QU ? void 0 : QU.trace.getSpanContext(QU.context.active());
              return UU ? {
                trace_id: UU.traceId,
                span_id: UU.spanId
              } : void 0
            },
            initOTEL: (UU, zU) => {
              XU.debug("Initializing OpenTelemetry"), QU = {
                trace: UU,
                context: zU
              }
            },
            isOTELInitialized: () => !!QU,
            pushTraces: UU => {
              try {
                if (!vX(cU).shouldCapture()) return;
                const zU = {
                  type: "trace",
                  payload: UU,
                  meta: fQ(cU)
                };
                XU.debug("Pushing trace\n", zU), yU.execute(zU)
              } catch (zU) {
                XU.error("Error pushing trace\n", zU)
              }
            }
          }
        }(0, XU, 0, cU, yU),
        oU = {
          unpatchedConsole: UU,
          internalLogger: XU,
          userActionsApi: AU,
          config: zU,
          metas: cU,
          transports: yU,
          tracesApi: FU
        },
        DU = function(UU) {
          let {
            internalLogger: XU,
            config: zU,
            metas: cU,
            transports: yU,
            tracesApi: QU,
            userActionsApi: AU
          } = UU, FU = null;
          return {
            pushEvent: function(UU, oU, DU) {
              let {
                skipDedupe: EU,
                spanContext: YU,
                timestampOverwriteMs: NU,
                customPayloadTransformer: IU = UU => UU
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!vX(cU).shouldCapture()) return;
                const pU = fX(oU),
                  aU = IU({
                    name: UU,
                    domain: null !== DU && void 0 !== DU ? DU : zU.eventDomain,
                    attributes: xU(pU) ? void 0 : pU,
                    timestamp: NU ? aX(NU) : pX(),
                    trace: YU ? {
                      trace_id: YU.traceId,
                      span_id: YU.spanId
                    } : QU.getTraceContext()
                  }),
                  tU = {
                    name: aU.name,
                    attributes: aU.attributes,
                    domain: aU.domain
                  };
                if (!EU && zU.dedupe && !ZU(FU) && kX(tU, FU)) return void XU.debug("Skipping event push because it is the same as the last one\n", aU);
                const gU = FU,
                  kU = fQ(cU);
                if (FU !== gU && !EU && zU.dedupe && kX(tU, FU)) return;
                FU = tU;
                const GU = {
                  meta: kU,
                  payload: aU,
                  type: "event"
                };
                XU.debug("Pushing event\n", GU), Ry(AU.getActiveUserAction(), GU) || yU.execute(GU)
              } catch (pU) {
                XU.error("Error pushing event", pU)
              }
            }
          }
        }(oU);
      return QU = DU.pushEvent, TX(TX(TX(TX(TX(TX(TX({}, FU), JQ(oU)), function(UU) {
        let XU, zU, cU, yU, {
          internalLogger: QU,
          metas: AU
        } = UU;
        QU.debug("Initializing meta API");
        const FU = UU => {
            zU && AU.remove(zU), zU = {
              user: UU
            }, AU.add(zU)
          },
          oU = (UU, zU) => {
            var cU;
            const yU = null === zU || void 0 === zU ? void 0 : zU.overrides,
              QU = yU ? {
                overrides: TX(TX({}, null === XU || void 0 === XU || null === (cU = XU.session) || void 0 === cU ? void 0 : cU.overrides), yU)
              } : {};
            XU && AU.remove(XU), XU = {
              session: TX(TX({}, xU(UU) ? void 0 : UU), QU)
            }, AU.add(XU)
          },
          DU = (UU, XU) => {
            vX(AU).notifySessionUpdate({
              type: "replace",
              session: UU,
              overrides: null === XU || void 0 === XU ? void 0 : XU.overrides
            }), oU(UU, XU)
          },
          EU = () => AU.value.session,
          YU = () => AU.value.page;
        return {
          setUser: FU,
          resetUser: FU,
          setSession: DU,
          resetSession: DU,
          getSession: EU,
          setView: (UU, XU) => {
            var zU;
            if ((null === XU || void 0 === XU ? void 0 : XU.overrides) && (vX(AU).notifySessionUpdate({
                type: "overrides",
                overrides: XU.overrides
              }), oU(EU(), {
                overrides: XU.overrides
              })), (null === cU || void 0 === cU || null === (zU = cU.view) || void 0 === zU ? void 0 : zU.name) === (null === UU || void 0 === UU ? void 0 : UU.name)) return;
            const yU = cU;
            cU = {
              view: UU
            }, AU.add(cU), yU && AU.remove(yU)
          },
          getView: () => AU.value.view,
          setPage: UU => {
            var XU;
            const zU = RU(UU) ? TX(TX({}, null !== (XU = null === yU || void 0 === yU ? void 0 : yU.page) && void 0 !== XU ? XU : YU()), {}, {
              id: UU
            }) : UU;
            yU && AU.remove(yU), yU = {
              page: zU
            }, AU.add(yU)
          },
          getPage: YU
        }
      }(oU)), function(UU) {
        let {
          internalLogger: XU,
          config: zU,
          metas: cU,
          transports: yU,
          tracesApi: QU,
          userActionsApi: AU
        } = UU;
        var FU;
        XU.debug("Initializing logs API");
        let oU = null;
        const DU = null !== (FU = zU.logArgsSerializer) && void 0 !== FU ? FU : qz;
        return {
          pushLog: function(UU) {
            let {
              context: FU,
              level: EU,
              skipDedupe: YU,
              spanContext: NU,
              timestampOverwriteMs: IU
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!vX(cU).shouldCapture()) return;
              const pU = fX(FU),
                aU = {
                  message: DU(UU),
                  level: null !== EU && void 0 !== EU ? EU : "log",
                  context: xU(pU) ? void 0 : pU,
                  timestamp: IU ? aX(IU) : pX(),
                  trace: NU ? {
                    trace_id: NU.traceId,
                    span_id: NU.spanId
                  } : QU.getTraceContext()
                },
                tU = {
                  message: aU.message,
                  level: aU.level,
                  context: aU.context
                };
              if (!YU && zU.dedupe && !ZU(oU) && kX(tU, oU)) return void XU.debug("Skipping log push because it is the same as the last one\n", aU);
              const gU = oU,
                kU = fQ(cU);
              if (oU !== gU && !YU && zU.dedupe && kX(tU, oU)) return;
              oU = tU;
              const GU = {
                type: "log",
                payload: aU,
                meta: kU
              };
              XU.debug("Pushing log\n", GU), Ry(AU.getActiveUserAction(), GU) || yU.execute(GU)
            } catch (pU) {
              XU.error("Error pushing log\n", pU)
            }
          }
        }
      }(oU)), function(UU) {
        let {
          internalLogger: XU,
          config: zU,
          metas: cU,
          transports: yU,
          tracesApi: QU,
          userActionsApi: AU
        } = UU;
        XU.debug("Initializing measurements API");
        let FU = null;
        return {
          pushMeasurement: function(UU) {
            let {
              skipDedupe: oU,
              context: DU,
              spanContext: EU,
              timestampOverwriteMs: YU
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!vX(cU).shouldCapture()) return;
              const NU = fX(DU),
                IU = TX(TX({}, UU), {}, {
                  trace: EU ? {
                    trace_id: EU.traceId,
                    span_id: EU.spanId
                  } : QU.getTraceContext(),
                  timestamp: YU ? aX(YU) : pX(),
                  context: xU(NU) ? void 0 : NU
                }),
                pU = {
                  type: IU.type,
                  values: IU.values,
                  context: IU.context
                };
              if (!oU && zU.dedupe && !ZU(FU) && kX(pU, FU)) return void XU.debug("Skipping measurement push because it is the same as the last one\n", IU);
              const aU = FU,
                tU = fQ(cU);
              if (FU !== aU && !oU && zU.dedupe && kX(pU, FU)) return;
              FU = pU;
              const gU = {
                type: "measurement",
                payload: IU,
                meta: tU
              };
              XU.debug("Pushing measurement\n", gU), Ry(AU.getActiveUserAction(), gU) || yU.execute(gU)
            } catch (NU) {
              XU.error("Error pushing measurement\n", NU)
            }
          }
        }
      }(oU)), DU), AU)
    }

    function KQ(UU) {
      const XU = nQ(UU),
        zU = xQ(XU, UU);
      if (pU() && !UU.isolate) return void zU.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      zU.debug("Initializing");
      const cU = function(UU, XU) {
          let zU, cU = [],
            yU = [],
            QU = [],
            AU = 0,
            FU = 0;
          const oU = () => cU.reduce(((UU, XU) => Object.assign(UU, CU(XU) ? XU() : XU)), {}),
            DU = () => {
              if (yU.length) {
                const UU = oU();
                yU.forEach((XU => XU(UU)))
              }
            };
          return {
            add: function() {
              for (var UU = arguments.length, zU = new Array(UU), yU = 0; yU < UU; yU++) zU[yU] = arguments[yU];
              XU.debug("Adding metas\n", zU), cU.push(...zU), DU()
            },
            remove: function() {
              for (var UU = arguments.length, zU = new Array(UU), yU = 0; yU < UU; yU++) zU[yU] = arguments[yU];
              XU.debug("Removing metas\n", zU), cU = cU.filter((UU => !zU.includes(UU))), DU()
            },
            addListener: UU => {
              XU.debug("Adding metas listener\n", UU), yU.push(UU)
            },
            removeListener: UU => {
              XU.debug("Removing metas listener\n", UU), yU = yU.filter((XU => XU !== UU))
            },
            capture: UU => {
              var XU;
              const cU = void 0 !== zU,
                yU = null !== (XU = zU) && void 0 !== XU ? XU : QU;
              cU || (zU = yU, AU = 0, FU = yU.length);
              try {
                for (; AU < FU;) {
                  const UU = yU[AU++];
                  null === UU || void 0 === UU || UU()
                }
                const XU = uQ(oU());
                return null === UU || void 0 === UU || UU(), XU
              } finally {
                cU || (zU = void 0)
              }
            },
            addCaptureListener: UU => {
              QU.push(UU)
            },
            removeCaptureListener: UU => {
              QU = QU.filter((XU => XU !== UU))
            },
            get value() {
              return oU()
            }
          }
        }(0, zU),
        yU = vQ(XU, zU, UU, cU),
        QU = jQ(XU, zU, UU, cU, yU),
        AU = function(UU, XU, zU, cU, yU, QU) {
          XU.debug("Initializing instrumentations");
          const AU = [];
          return {
            add: function() {
              XU.debug("Adding instrumentations");
              for (var FU = arguments.length, oU = new Array(FU), DU = 0; DU < FU; DU++) oU[DU] = arguments[DU];
              oU.forEach((FU => {
                XU.debug(`Adding "${FU.name}" instrumentation`), AU.some((UU => UU.name === FU.name)) ? XU.warn(`Instrumentation ${FU.name} is already added`) : (FU.unpatchedConsole = UU, FU.internalLogger = XU, FU.config = zU, FU.metas = cU, FU.transports = yU, FU.api = QU, AU.push(FU), FU.initialize())
              }))
            },
            get instrumentations() {
              return [...AU]
            },
            remove: function() {
              XU.debug("Removing instrumentations");
              for (var UU = arguments.length, zU = new Array(UU), cU = 0; cU < UU; cU++) zU[cU] = arguments[cU];
              zU.forEach((UU => {
                var zU, cU;
                XU.debug(`Removing "${UU.name}" instrumentation`);
                const yU = AU.reduce(((XU, zU, cU) => null === XU && zU.name === UU.name ? cU : null), null);
                null !== yU ? (null === (zU = (cU = AU[yU]).destroy) || void 0 === zU || zU.call(cU), AU.splice(yU, 1)) : XU.warn(`Instrumentation "${UU.name}" is not added`)
              }))
            }
          }
        }(XU, zU, UU, cU, yU, QU),
        FU = tU(XU, zU, UU, cU, yU, QU, AU);
      return HQ(FU),
        function(UU) {
          UU.transports.add(...UU.config.transports), UU.transports.addBeforeSendHooks(UU.config.beforeSend)
        }(FU),
        function(UU) {
          UU.instrumentations.add(...UU.config.instrumentations)
        }(FU), FU
    }

    function bQ(UU) {
      const XU = wQ(UU);
      if (XU) return KQ(XU)
    }
  },
  7285: function(UU, XU, zU) {
    var cU;
    ! function(yU, QU) {
      var AU = "function",
        FU = "undefined",
        oU = "object",
        DU = "string",
        EU = "major",
        YU = "model",
        NU = "name",
        IU = "type",
        pU = "vendor",
        aU = "version",
        tU = "architecture",
        gU = "console",
        kU = "mobile",
        GU = "tablet",
        BU = "smarttv",
        ZU = "wearable",
        RU = "embedded",
        PU = "Amazon",
        WU = "Apple",
        dU = "ASUS",
        LU = "BlackBerry",
        eU = "Browser",
        CU = "Chrome",
        wU = "Firefox",
        qU = "Google",
        OU = "Honor",
        SU = "Huawei",
        rU = "LG",
        uU = "Microsoft",
        fU = "Motorola",
        iU = "Nvidia",
        HU = "OnePlus",
        MU = "Opera",
        vU = "OPPO",
        VU = "Samsung",
        sU = "Sharp",
        nU = "Sony",
        mU = "Xiaomi",
        lU = "Zebra",
        xU = "Facebook",
        JU = "Chromium OS",
        jU = "Mac OS",
        KU = " Browser",
        bU = function(UU) {
          for (var XU = {}, zU = 0; zU < UU.length; zU++) XU[UU[zU].toUpperCase()] = UU[zU];
          return XU
        },
        TU = function(UU, XU) {
          return typeof UU === DU && -1 !== hU(XU).indexOf(hU(UU))
        },
        hU = function(UU) {
          return UU.toLowerCase()
        },
        UX = function(UU, XU) {
          if (typeof UU === DU) return UU = UU.replace(/^\s\s*/, ""), typeof XU === FU ? UU : UU.substring(0, 500)
        },
        XX = function(UU, XU) {
          for (var zU, cU, yU, FU, DU, EU, YU = 0; YU < XU.length && !DU;) {
            var NU = XU[YU],
              IU = XU[YU + 1];
            for (zU = cU = 0; zU < NU.length && !DU && NU[zU];)
              if (DU = NU[zU++].exec(UU))
                for (yU = 0; yU < IU.length; yU++) EU = DU[++cU], typeof(FU = IU[yU]) === oU && FU.length > 0 ? 2 === FU.length ? typeof FU[1] == AU ? this[FU[0]] = FU[1].call(this, EU) : this[FU[0]] = FU[1] : 3 === FU.length ? typeof FU[1] !== AU || FU[1].exec && FU[1].test ? this[FU[0]] = EU ? EU.replace(FU[1], FU[2]) : QU : this[FU[0]] = EU ? FU[1].call(this, EU, FU[2]) : QU : 4 === FU.length && (this[FU[0]] = EU ? FU[3].call(this, EU.replace(FU[1], FU[2])) : QU) : this[FU] = EU || QU;
            YU += 2
          }
        },
        zX = function(UU, XU) {
          for (var zU in XU)
            if (typeof XU[zU] === oU && XU[zU].length > 0) {
              for (var cU = 0; cU < XU[zU].length; cU++)
                if (TU(XU[zU][cU], UU)) return "?" === zU ? QU : zU
            } else if (TU(XU[zU], UU)) return "?" === zU ? QU : zU;
          return XU.hasOwnProperty("*") ? XU["*"] : UU
        },
        cX = {
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
        yX = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [aU, [NU, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [aU, [NU, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [NU, aU],
            [/opios[\/ ]+([\w\.]+)/i],
            [aU, [NU, MU + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [aU, [NU, MU + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [aU, [NU, MU]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [aU, [NU, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [aU, [NU, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [NU, aU],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [aU, [NU, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [aU, [NU, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [aU, [NU, "UC" + eU]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [aU, [NU, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [aU, [NU, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [aU, [NU, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [aU, [NU, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [aU, [NU, "Smart Lenovo " + eU]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [NU, /(.+)/, "$1 Secure " + eU], aU
            ],
            [/\bfocus\/([\w\.]+)/i],
            [aU, [NU, wU + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [aU, [NU, MU + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [aU, [NU, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [aU, [NU, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [aU, [NU, MU + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [aU, [NU, "MIUI" + KU]],
            [/fxios\/([\w\.-]+)/i],
            [aU, [NU, wU]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [aU, [NU, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [NU, /(.+)/, "$1Browser"], aU
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [NU, /(.+)/, "$1" + KU], aU
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [aU, [NU, VU + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [aU, [NU, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [NU, "Sogou Mobile"], aU
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [NU, aU],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [NU],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [aU, NU],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [NU, xU], aU
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [NU, aU],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [aU, [NU, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [aU, [NU, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [aU, [NU, CU + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [NU, CU + " WebView"], aU
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [aU, [NU, "Android " + eU]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [NU, aU],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [aU, [NU, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [aU, NU],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [NU, [aU, zX, {
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
            [NU, aU],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [NU, "Netscape"], aU
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [NU, aU],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [aU, [NU, wU + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [NU, [aU, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [NU, [aU, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [tU, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [tU, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [tU, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [tU, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [tU, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [tU, /ower/, "", hU]
            ],
            [/ sun4\w[;\)]/i],
            [
              [tU, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [tU, hU]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [YU, [pU, VU],
              [IU, GU]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [YU, [pU, VU],
              [IU, kU]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [YU, [pU, WU],
              [IU, kU]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [YU, [pU, WU],
              [IU, GU]
            ],
            [/(macintosh);/i],
            [YU, [pU, WU]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [YU, [pU, sU],
              [IU, kU]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [YU, [pU, OU],
              [IU, GU]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [YU, [pU, OU],
              [IU, kU]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [YU, [pU, SU],
              [IU, GU]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [YU, [pU, SU],
              [IU, kU]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [YU, /_/g, " "],
              [pU, mU],
              [IU, GU]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [YU, /_/g, " "],
              [pU, mU],
              [IU, kU]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [YU, [pU, vU],
              [IU, kU]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [YU, [pU, zX, {
                OnePlus: ["304", "403", "203"],
                "*": vU
              }],
              [IU, GU]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [YU, [pU, "Vivo"],
              [IU, kU]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [YU, [pU, "Realme"],
              [IU, kU]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [YU, [pU, fU],
              [IU, kU]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [YU, [pU, fU],
              [IU, GU]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [YU, [pU, rU],
              [IU, GU]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [YU, [pU, rU],
              [IU, kU]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [YU, [pU, "Lenovo"],
              [IU, GU]
            ],
            [/(nokia) (t[12][01])/i],
            [pU, YU, [IU, GU]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [YU, /_/g, " "],
              [IU, kU],
              [pU, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [YU, [pU, qU],
              [IU, GU]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [YU, [pU, qU],
              [IU, kU]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [YU, [pU, nU],
              [IU, kU]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [YU, "Xperia Tablet"],
              [pU, nU],
              [IU, GU]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [YU, [pU, HU],
              [IU, kU]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [YU, [pU, PU],
              [IU, GU]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [YU, /(.+)/g, "Fire Phone $1"],
              [pU, PU],
              [IU, kU]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [YU, pU, [IU, GU]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [YU, [pU, LU],
              [IU, kU]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [YU, [pU, dU],
              [IU, GU]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [YU, [pU, dU],
              [IU, kU]
            ],
            [/(nexus 9)/i],
            [YU, [pU, "HTC"],
              [IU, GU]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [pU, [YU, /_/g, " "],
              [IU, kU]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [YU, [pU, "TCL"],
              [IU, GU]
            ],
            [/(itel) ((\w+))/i],
            [
              [pU, hU], YU, [IU, zX, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [YU, [pU, "Acer"],
              [IU, GU]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [YU, [pU, "Meizu"],
              [IU, kU]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [YU, [pU, "Ulefone"],
              [IU, kU]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [YU, [pU, "Energizer"],
              [IU, kU]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [YU, [pU, "Cat"],
              [IU, kU]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [YU, [pU, "Smartfren"],
              [IU, kU]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [YU, [pU, "Nothing"],
              [IU, kU]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [YU, [pU, "Archos"],
              [IU, GU]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [YU, [pU, "Archos"],
              [IU, kU]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [pU, YU, [IU, GU]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [pU, YU, [IU, kU]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [pU, YU, [IU, GU]],
            [/(surface duo)/i],
            [YU, [pU, uU],
              [IU, GU]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [YU, [pU, "Fairphone"],
              [IU, kU]
            ],
            [/(u304aa)/i],
            [YU, [pU, "AT&T"],
              [IU, kU]
            ],
            [/\bsie-(\w*)/i],
            [YU, [pU, "Siemens"],
              [IU, kU]
            ],
            [/\b(rct\w+) b/i],
            [YU, [pU, "RCA"],
              [IU, GU]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [YU, [pU, "Dell"],
              [IU, GU]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [YU, [pU, "Verizon"],
              [IU, GU]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [YU, [pU, "Barnes & Noble"],
              [IU, GU]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [YU, [pU, "NuVision"],
              [IU, GU]
            ],
            [/\b(k88) b/i],
            [YU, [pU, "ZTE"],
              [IU, GU]
            ],
            [/\b(nx\d{3}j) b/i],
            [YU, [pU, "ZTE"],
              [IU, kU]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [YU, [pU, "Swiss"],
              [IU, kU]
            ],
            [/\b(zur\d{3}) b/i],
            [YU, [pU, "Swiss"],
              [IU, GU]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [YU, [pU, "Zeki"],
              [IU, GU]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [pU, "Dragon Touch"], YU, [IU, GU]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [YU, [pU, "Insignia"],
              [IU, GU]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [YU, [pU, "NextBook"],
              [IU, GU]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [pU, "Voice"], YU, [IU, kU]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [pU, "LvTel"], YU, [IU, kU]
            ],
            [/\b(ph-1) /i],
            [YU, [pU, "Essential"],
              [IU, kU]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [YU, [pU, "Envizen"],
              [IU, GU]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [YU, [pU, "MachSpeed"],
              [IU, GU]
            ],
            [/\btu_(1491) b/i],
            [YU, [pU, "Rotor"],
              [IU, GU]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [YU, [pU, iU],
              [IU, GU]
            ],
            [/(sprint) (\w+)/i],
            [pU, YU, [IU, kU]],
            [/(kin\.[onetw]{3})/i],
            [
              [YU, /\./g, " "],
              [pU, uU],
              [IU, kU]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [YU, [pU, lU],
              [IU, GU]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [YU, [pU, lU],
              [IU, kU]
            ],
            [/smart-tv.+(samsung)/i],
            [pU, [IU, BU]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [YU, /^/, "SmartTV"],
              [pU, VU],
              [IU, BU]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [pU, rU],
              [IU, BU]
            ],
            [/(apple) ?tv/i],
            [pU, [YU, WU + " TV"],
              [IU, BU]
            ],
            [/crkey/i],
            [
              [YU, CU + "cast"],
              [pU, qU],
              [IU, BU]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [YU, [pU, PU],
              [IU, BU]
            ],
            [/(shield \w+ tv)/i],
            [YU, [pU, iU],
              [IU, BU]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [YU, [pU, sU],
              [IU, BU]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [YU, [pU, nU],
              [IU, BU]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [YU, [pU, mU],
              [IU, BU]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [pU, YU, [IU, BU]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [pU, UX],
              [YU, UX],
              [IU, BU]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [YU, [IU, BU]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [IU, BU]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [pU, YU, [IU, gU]],
            [/droid.+; (shield)( bui|\))/i],
            [YU, [pU, iU],
              [IU, gU]
            ],
            [/(playstation \w+)/i],
            [YU, [pU, nU],
              [IU, gU]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [YU, [pU, uU],
              [IU, gU]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [YU, [pU, VU],
              [IU, ZU]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [pU, YU, [IU, ZU]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [YU, [pU, vU],
              [IU, ZU]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [YU, [pU, WU],
              [IU, ZU]
            ],
            [/(opwwe\d{3})/i],
            [YU, [pU, HU],
              [IU, ZU]
            ],
            [/(moto 360)/i],
            [YU, [pU, fU],
              [IU, ZU]
            ],
            [/(smartwatch 3)/i],
            [YU, [pU, nU],
              [IU, ZU]
            ],
            [/(g watch r)/i],
            [YU, [pU, rU],
              [IU, ZU]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [YU, [pU, lU],
              [IU, ZU]
            ],
            [/droid.+; (glass) \d/i],
            [YU, [pU, qU],
              [IU, ZU]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [pU, YU, [IU, ZU]],
            [/; (quest( \d| pro)?)/i],
            [YU, [pU, xU],
              [IU, ZU]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [pU, [IU, RU]],
            [/(aeobc)\b/i],
            [YU, [pU, PU],
              [IU, RU]
            ],
            [/(homepod).+mac os/i],
            [YU, [pU, WU],
              [IU, RU]
            ],
            [/windows iot/i],
            [
              [IU, RU]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [YU, [IU, kU]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [YU, [IU, GU]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [IU, GU]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [IU, kU]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [YU, [pU, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [aU, [NU, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [NU, aU],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [aU, [NU, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [NU, aU],
            [/ladybird\//i],
            [
              [NU, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [aU, NU]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [NU, aU],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [NU, [aU, zX, cX]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [aU, zX, cX],
              [NU, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [aU, /_/g, "."],
              [NU, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [NU, jU],
              [aU, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [aU, NU],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [NU, /(.+)/, "$1 Touch"], aU
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [NU, aU],
            [/\(bb(10);/i],
            [aU, [NU, LU]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [aU, [NU, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [aU, [NU, wU + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [aU, [NU, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [aU, [NU, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [aU, [NU, CU + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [NU, JU], aU
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [NU, aU],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [NU, "Solaris"], aU
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [NU, aU]
          ]
        },
        QX = function(UU, XU) {
          if (typeof UU === oU && (XU = UU, UU = QU), !(this instanceof QX)) return new QX(UU, XU).getResult();
          var zU = typeof yU !== FU && yU.navigator ? yU.navigator : QU,
            cU = UU || (zU && zU.userAgent ? zU.userAgent : ""),
            gU = zU && zU.userAgentData ? zU.userAgentData : QU,
            BU = XU ? function(UU, XU) {
              var zU = {};
              for (var cU in UU) XU[cU] && XU[cU].length % 2 === 0 ? zU[cU] = XU[cU].concat(UU[cU]) : zU[cU] = UU[cU];
              return zU
            }(yX, XU) : yX,
            ZU = zU && zU.userAgent == cU;
          return this.getBrowser = function() {
            var UU, XU = {};
            return XU[NU] = QU, XU[aU] = QU, XX.call(XU, cU, BU.browser), XU[EU] = typeof(UU = XU[aU]) === DU ? UU.replace(/[^\d\.]/g, "").split(".")[0] : QU, ZU && zU && zU.brave && typeof zU.brave.isBrave == AU && (XU[NU] = "Brave"), XU
          }, this.getCPU = function() {
            var UU = {};
            return UU[tU] = QU, XX.call(UU, cU, BU.cpu), UU
          }, this.getDevice = function() {
            var UU = {};
            return UU[pU] = QU, UU[YU] = QU, UU[IU] = QU, XX.call(UU, cU, BU.device), ZU && !UU[IU] && gU && gU.mobile && (UU[IU] = kU), ZU && "Macintosh" == UU[YU] && zU && typeof zU.standalone !== FU && zU.maxTouchPoints && zU.maxTouchPoints > 2 && (UU[YU] = "iPad", UU[IU] = GU), UU
          }, this.qp = function() {
            var UU = {};
            return UU[NU] = QU, UU[aU] = QU, XX.call(UU, cU, BU.engine), UU
          }, this.getOS = function() {
            var UU = {};
            return UU[NU] = QU, UU[aU] = QU, XX.call(UU, cU, BU.os), ZU && !UU[NU] && gU && gU.platform && "Unknown" != gU.platform && (UU[NU] = gU.platform.replace(/chrome os/i, JU).replace(/macos/i, jU)), UU
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.qp(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return cU
          }, this.setUA = function(UU) {
            return cU = typeof UU === DU && UU.length > 500 ? UX(UU, 500) : UU, this
          }, this.setUA(cU), this
        };
      QX.VERSION = "1.0.41", QX.BROWSER = bU([NU, aU, EU]), QX.CPU = bU([tU]), QX.DEVICE = bU([YU, pU, IU, gU, kU, BU, GU, ZU, RU]), QX.ENGINE = QX.OS = bU([NU, aU]), typeof XU !== FU ? (UU.exports && (XU = UU.exports = QX), XU.UAParser = QX) : zU.amdO ? (cU = function() {
        return QX
      }.call(XU, zU, XU, UU)) === QU || (UU.exports = cU) : typeof yU !== FU && (yU.UAParser = QX);
      var AX = typeof yU !== FU && (yU.jQuery || yU.Zepto);
      if (AX && !AX.ua) {
        var FX = new QX;
        AX.ua = FX.getResult(), AX.ua.get = function() {
          return FX.getUA()
        }, AX.ua.set = function(UU) {
          FX.setUA(UU);
          var XU = FX.getResult();
          for (var zU in XU) AX.ua[zU] = XU[zU]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);