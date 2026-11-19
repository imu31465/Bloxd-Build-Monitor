export const id = 31;
export const ids = [31];
export const modules = {
  6252: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BaseExtension: () => YD,
      BaseInstrumentation: () => rD,
      BaseTransport: () => UA,
      CSPInstrumentation: () => eA,
      ConsoleInstrumentation: () => ZD,
      ConsoleTransport: () => DI,
      EVENT_CLICK: () => mr,
      EVENT_NAVIGATION: () => Vr,
      EVENT_ROUTE_CHANGE: () => Br,
      EVENT_SESSION_EXTEND: () => er,
      EVENT_SESSION_RESUME: () => Tr,
      EVENT_SESSION_START: () => lr,
      EVENT_VIEW_CHANGED: () => Sr,
      ErrorsInstrumentation: () => fD,
      FetchTransport: () => VI,
      InternalLoggerLevel: () => pr,
      LogLevel: () => mD,
      MAX_SESSION_PERSISTENCE_TIME: () => gY,
      NavigationInstrumentation: () => wA,
      Observable: () => ED,
      PerformanceInstrumentation: () => GF,
      PersistentSessionsManager: () => dr,
      SESSION_EXPIRATION_TIME: () => IY,
      SESSION_INACTIVITY_TIME: () => RY,
      STORAGE_KEY: () => AY,
      SessionInstrumentation: () => FD,
      TransportItemType: () => LA,
      UserActionInstrumentation: () => TA,
      UserActionState: () => yA,
      VERSION: () => DD,
      ViewInstrumentation: () => hD,
      VolatileSessionsManager: () => Jr,
      WebVitalsInstrumentation: () => CF,
      allLogLevels: () => SD,
      browserMeta: () => GA,
      buildStackFrame: () => AD,
      captureMetas: () => hI,
      createInternalLogger: () => NI,
      createPromiseBuffer: () => sI,
      createSession: () => nA,
      deepEqual: () => Er,
      defaultEventDomain: () => FY,
      defaultExceptionType: () => ND,
      defaultGlobalObjectKey: () => BI,
      defaultInternalLoggerLevel: () => Gr,
      defaultLogLevel: () => VD,
      faro: () => QY,
      genShortID: () => Wr,
      getCurrentTimestamp: () => yr,
      getDataFromSafariExtensions: () => sD,
      getIgnoreUrls: () => xY,
      getInternalFaroFromGlobalObject: () => sY,
      getStackFramesFromError: () => yD,
      getTransportBody: () => rI,
      getUrlFromResource: () => PY,
      getWebInstrumentations: () => bA,
      globalObject: () => vY,
      initializeFaro: () => UI,
      internalGlobalObjectKey: () => uY,
      isArray: () => HY,
      isBoolean: () => NY,
      isDomError: () => MY,
      isDomException: () => wY,
      isElement: () => XY,
      isElementDefined: () => bY,
      Ey: () => GY,
      isError: () => dY,
      isErrorDefined: () => hY,
      isErrorEvent: () => JY,
      isEvent: () => jY,
      isEventDefined: () => fY,
      isFunction: () => KY,
      isInstanceOf: () => mY,
      isInt: () => eY,
      isInternalFaroOnGlobalObject: () => yY,
      isMap: () => pY,
      isMapDefined: () => qY,
      isNull: () => SY,
      isNumber: () => TY,
      isObject: () => cY,
      isPrimitive: () => CY,
      isRegExp: () => zY,
      isString: () => lY,
      isSymbol: () => BY,
      isSyntheticEvent: () => kY,
      isThenable: () => ZY,
      isToString: () => EY,
      isTypeof: () => WY,
      isUndefined: () => VY,
      makeCoreConfig: () => HI,
      noop: () => qr,
      osMeta: () => xA,
      parseStacktrace: () => QD,
      sdkMeta: () => PA,
      setInternalFaroOnGlobalObject: () => iY,
      transportItemTypeToBodyKey: () => tA,
      unknownString: () => jD,
      userActionDataAttribute: () => xF,
      userActionTimeoutDataAttribute: () => nF
    });
    const FY = "browser",
      AY = "com.grafana.faro.session",
      IY = 144e5,
      RY = 9e5,
      OY = 1e3,
      gY = RY,
      aY = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: gY
      };
    const vY = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof DY.g ? DY.g : "undefined" !== typeof self ? self : void 0;
    const uY = "_faroInternal";

    function sY() {
      return vY[uY]
    }

    function iY(YY) {
      YY.config.isolate ? YY.internalLogger.debug("Skipping registering internal Faro instance on global object") : (YY.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(vY, uY, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: YY
      }))
    }

    function yY() {
      return uY in vY
    }
    let QY = {
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

    function oY(YY, rY, DY, FY, AY, IY, RY) {
      return rY.debug("Initializing Faro"), QY = {
          api: IY,
          config: DY,
          instrumentations: RY,
          internalLogger: rY,
          metas: FY,
          pause: AY.pause,
          transports: AY,
          unpatchedConsole: YY,
          unpause: AY.unpause
        }, iY(QY),
        function(YY) {
          if (YY.config.preventGlobalExposure) YY.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (YY.internalLogger.debug(`Registering public faro reference in the global scope using "${YY.config.globalObjectKey}" key`), YY.config.globalObjectKey in vY) return void YY.internalLogger.warn(`Skipping global registration due to key "${YY.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(vY, YY.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: YY
            })
          }
        }(QY), QY
    }

    function WY(YY, rY) {
      return typeof YY === rY
    }

    function EY(YY, rY) {
      return Object.prototype.toString.call(YY) === `[object ${rY}]`
    }

    function mY(YY, rY) {
      try {
        return YY instanceof rY
      } catch (DY) {
        return !1
      }
    }
    const VY = YY => WY(YY, "undefined"),
      SY = YY => WY(YY, "null"),
      lY = YY => WY(YY, "string"),
      TY = YY => WY(YY, "number") && !isNaN(YY) || WY(YY, "bigint"),
      eY = YY => TY(YY) && Number.isInteger(YY),
      NY = YY => WY(YY, "boolean"),
      BY = YY => WY(YY, "symbol"),
      cY = YY => !SY(YY) && WY(YY, "object"),
      KY = YY => WY(YY, "function"),
      HY = YY => EY(YY, "Array"),
      zY = YY => EY(YY, "RegExp"),
      ZY = YY => KY(null === YY || void 0 === YY ? void 0 : YY.then),
      CY = YY => !cY(YY) && !KY(YY),
      fY = "undefined" !== typeof Event,
      jY = YY => fY && mY(YY, Event),
      hY = "undefined" !== typeof Error,
      dY = YY => hY && mY(YY, Error),
      JY = YY => EY(YY, "ErrorEvent"),
      MY = YY => EY(YY, "DOMError"),
      wY = YY => EY(YY, "DOMException"),
      bY = "undefined" !== typeof Element,
      XY = YY => bY && mY(YY, Element),
      qY = "undefined" !== typeof Map,
      pY = YY => qY && mY(YY, Map),
      kY = YY => cY(YY) && "nativeEvent" in YY && "preventDefault" in YY && "stopPropagation" in YY;

    function GY(YY) {
      return null == YY || (HY(YY) || lY(YY) ? 0 === YY.length : !!cY(YY) && 0 === Object.keys(YY).length)
    }

    function xY() {
      return QY.transports.transports.flatMap((YY => YY.getIgnoreUrls()))
    }

    function nY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return xY().some((rY => YY && null != YY.match(rY)))
    }

    function PY(YY) {
      return lY(YY) ? YY : YY instanceof URL ? YY.href : !GY(YY) && KY(null === YY || void 0 === YY ? void 0 : YY.toString) ? YY.toString() : void 0
    }
    const UY = "sessionStorage",
      LY = "localStorage";

    function tY(YY) {
      try {
        let rY;
        rY = window[YY];
        const DY = "__faro_storage_test__";
        return rY.setItem(DY, DY), rY.removeItem(DY), !0
      } catch (DY) {
        var rY;
        return null === (rY = QY.internalLogger) || void 0 === rY || rY.info(`Web storage of type ${YY} is not available. Reason: ${DY}`), !1
      }
    }

    function Yr(YY, rY) {
      return Ir(rY) ? window[rY].getItem(YY) : null
    }

    function rr(YY, rY, DY) {
      if (Ir(DY)) try {
        window[DY].setItem(YY, rY)
      } catch (FY) {}
    }

    function Dr(YY, rY) {
      Ir(rY) && window[rY].removeItem(YY)
    }
    const Fr = tY(LY),
      Ar = tY(UY);

    function Ir(YY) {
      return YY === LY ? Fr : YY === UY && Ar
    }

    function Rr(YY) {
      return Rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, Rr(YY)
    }

    function Or(YY) {
      var rY = function(YY, rY) {
        if ("object" != Rr(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != Rr(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == Rr(rY) ? rY : rY + ""
    }

    function gr(YY, rY, DY) {
      return (rY = Or(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function ar(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function vr(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? ar(Object(DY), !0).forEach((function(rY) {
          gr(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : ar(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function ur() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QY;
      var rY, DY, FY;
      const AY = YY.config.sessionTracking,
        IY = null !== (rY = null !== (DY = null === AY || void 0 === AY || null === (FY = AY.sampler) || void 0 === FY ? void 0 : FY.call(AY, {
          metas: YY.metas.value
        })) && void 0 !== DY ? DY : null === AY || void 0 === AY ? void 0 : AY.samplingRate) && void 0 !== rY ? rY : 1,
        RY = "number" === typeof IY ? function(YY) {
          return Math.min(1, Math.max(0, YY))
        }(IY) : 0;
      if (!(RY > 0)) return !1;
      if (1 === RY) return !0;
      try {
        const YY = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === YY || void 0 === YY ? void 0 : YY.getRandomValues)) {
          const rY = new Uint32Array(1);
          return YY.getRandomValues(rY), rY[0] / Math.pow(2, 32) < RY
        }
      } catch (OY) {}
      return Math.random() < RY
    }

    function sr() {
      return Date.now()
    }

    function ir() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function yr() {
      return (new Date).toISOString()
    }

    function Qr(YY) {
      return new Date(YY).toISOString()
    }
    const or = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Wr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const rY = new Uint32Array(YY),
        DY = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === DY || void 0 === DY ? void 0 : DY.getRandomValues) DY.getRandomValues(rY);
      else
        for (let AY = 0; AY < YY; AY++) rY[AY] = Math.floor(4294967296 * Math.random());
      let FY = "";
      for (let AY = 0; AY < YY; AY++) FY += or[rY[AY] % 59];
      return FY
    }

    function Er(YY, rY) {
      if (YY === rY) return !0;
      if (WY(YY, "number") && isNaN(YY)) return WY(rY, "number") && isNaN(rY);
      const DY = HY(YY),
        FY = HY(rY);
      if (DY !== FY) return !1;
      if (DY && FY) {
        const DY = YY.length;
        if (DY !== rY.length) return !1;
        for (let FY = DY; 0 !== FY--;)
          if (!Er(YY[FY], rY[FY])) return !1;
        return !0
      }
      const AY = cY(YY),
        IY = cY(rY);
      if (AY !== IY) return !1;
      if (YY && rY && AY && IY) {
        const DY = Object.keys(YY),
          FY = Object.keys(rY);
        if (DY.length !== FY.length) return !1;
        for (let YY of DY)
          if (!FY.includes(YY)) return !1;
        for (let AY of DY)
          if (!Er(YY[AY], rY[AY])) return !1;
        return !0
      }
      return !1
    }
    const mr = "click",
      Vr = "navigation",
      Sr = "view_changed",
      lr = "session_start",
      Tr = "session_resume",
      er = "session_extend",
      Nr = "service_name_override",
      Br = "route_change";

    function cr() {
      let {
        sessionId: YY,
        started: rY,
        lastActivity: DY,
        isSampled: FY = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, AY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QY;
      var IY;
      const RY = sr(),
        OY = null === (IY = AY.config) || void 0 === IY || null === (IY = IY.sessionTracking) || void 0 === IY ? void 0 : IY.generateSessionId;
      return null == YY && (YY = "function" === typeof OY ? OY() : Wr()), {
        sessionId: YY,
        lastActivity: null !== DY && void 0 !== DY ? DY : RY,
        started: null !== rY && void 0 !== rY ? rY : RY,
        isSampled: FY
      }
    }

    function Kr(YY) {
      if (null == YY) return !1;
      const rY = sr();
      return rY - YY.started < 144e5 && rY - YY.lastActivity < RY
    }

    function Hr(YY) {
      let {
        fetchUserSession: rY,
        storeUserSession: DY,
        adoptSession: FY,
        updateInterval: AY = 0
      } = YY, OY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QY, gY = 0;
      return function() {
        let {
          forceSessionExtend: YY = !1,
          refreshActivity: aY = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var vY, uY;
        if (!rY || !DY) return;
        const sY = sr();
        if (!YY && sY < gY && gY - sY <= AY) return;
        const iY = OY.config.sessionTracking,
          yY = null === iY || void 0 === iY ? void 0 : iY.persistent;
        if (yY && !Fr || !yY && !Ar) return;
        const QY = rY();
        if (gY = Math.min(sY + AY, (null !== (vY = null === QY || void 0 === QY ? void 0 : QY.started) && void 0 !== vY ? vY : sY) + IY, (null !== (uY = null === QY || void 0 === QY ? void 0 : QY.lastActivity) && void 0 !== uY ? uY : sY) + RY), !1 === YY && Kr(QY)) {
          var oY;
          aY && DY(vr(vr({}, QY), {}, {
            lastActivity: sY
          }));
          const YY = null === (oY = OY.metas.value.session) || void 0 === oY ? void 0 : oY.id;
          null != FY && null != QY.sessionMeta && QY.sessionId !== YY && FY(QY.sessionMeta)
        } else {
          var WY, EY, mY;
          let YY = Zr(cr({
            isSampled: ur(OY)
          }, OY), QY, OY);
          gY = sY + AY, DY(YY), null === (WY = OY.api) || void 0 === WY || WY.setSession(YY.sessionMeta), null === iY || void 0 === iY || null === (EY = iY.onSessionChange) || void 0 === EY || EY.call(iY, null !== (mY = null === QY || void 0 === QY ? void 0 : QY.sessionMeta) && void 0 !== mY ? mY : null, YY.sessionMeta)
        }
      }
    }

    function zr(YY) {
      let rY, {
          fetchUserSession: DY,
          storeUserSession: FY,
          updateInterval: AY = 0
        } = YY,
        IY = 0;
      return YY => {
        const RY = sr();
        if (YY === rY && RY < IY && IY - RY <= AY) return;
        rY = YY, IY = RY + AY;
        const OY = DY();
        (null === OY || void 0 === OY ? void 0 : OY.sessionId) === YY && Kr(OY) && FY(vr(vr({}, OY), {}, {
          lastActivity: RY
        }))
      }
    }

    function Zr(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QY;
      var FY, AY, IY, RY, OY, gY;
      const aY = vr(vr({}, YY), {}, {
          sessionMeta: {
            id: YY.sessionId,
            attributes: fr(vr(vr(vr({}, null === (FY = DY.config.sessionTracking) || void 0 === FY || null === (FY = FY.session) || void 0 === FY ? void 0 : FY.attributes), null !== (AY = null === (IY = DY.metas.value.session) || void 0 === IY ? void 0 : IY.attributes) && void 0 !== AY ? AY : {}), {}, {
              isSampled: YY.isSampled.toString()
            }))
          }
        }),
        vY = null !== (RY = null === (OY = DY.metas.value.session) || void 0 === OY ? void 0 : OY.overrides) && void 0 !== RY ? RY : null === rY || void 0 === rY || null === (gY = rY.sessionMeta) || void 0 === gY ? void 0 : gY.overrides;
      GY(vY) || (aY.sessionMeta.overrides = vY);
      const uY = null === rY || void 0 === rY ? void 0 : rY.sessionId;
      return null != uY && (aY.sessionMeta.attributes.previousSession = uY), aY
    }

    function Cr(YY) {
      let {
        fetchUserSession: rY,
        storeUserSession: DY
      } = YY, FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QY, AY = !1;
      return function(YY) {
        if (AY) return;
        const IY = YY.session,
          RY = rY();
        let OY = null === IY || void 0 === IY ? void 0 : IY.id;
        const gY = null === IY || void 0 === IY ? void 0 : IY.attributes,
          aY = null === IY || void 0 === IY ? void 0 : IY.overrides,
          vY = null === RY || void 0 === RY ? void 0 : RY.sessionMeta,
          uY = null === vY || void 0 === vY ? void 0 : vY.overrides,
          sY = !!aY && !Er(aY, uY),
          iY = !!gY && !Er(gY, null === vY || void 0 === vY ? void 0 : vY.attributes);
        if (IY && OY !== (null === RY || void 0 === RY ? void 0 : RY.sessionId) || iY || sY) {
          var yY, QY;
          const YY = null != RY && OY === RY.sessionId,
            rY = Zr(YY ? RY : cr({
              sessionId: OY,
              isSampled: ur(FY)
            }, FY), RY, FY),
            IY = null === RY || void 0 === RY || null === (yY = RY.sessionMeta) || void 0 === yY || null === (yY = yY.attributes) || void 0 === yY ? void 0 : yY.previousSession;
          YY && null != IY && IY !== rY.sessionId && (rY.sessionMeta.attributes.previousSession = IY), (null === (QY = rY.sessionMeta.attributes) || void 0 === QY ? void 0 : QY.previousSession) === rY.sessionId && delete rY.sessionMeta.attributes.previousSession, DY(rY),
            function(YY, rY) {
              let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var AY, IY, RY;
              if (!rY) return;
              const OY = DY.serviceName,
                gY = null !== (AY = null !== (IY = FY.serviceName) && void 0 !== IY ? IY : null === (RY = YY.metas.value.app) || void 0 === RY ? void 0 : RY.name) && void 0 !== AY ? AY : "";
              OY && OY !== gY && YY.api.pushEvent(Nr, {
                serviceName: OY,
                previousServiceName: gY
              })
            }(FY, sY, aY, uY), AY = !0;
          try {
            FY.api.setSession(rY.sessionMeta)
          } finally {
            AY = !1
          }
        }
      }
    }

    function fr(YY) {
      const rY = {};
      for (const DY of Object.keys(YY)) {
        const FY = YY[DY];
        void 0 !== FY && (rY[DY] = FY)
      }
      return rY
    }

    function jr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== YY && void 0 !== YY ? YY : {}, function() {
        const YY = new WeakSet;
        return function(rY, DY) {
          if (cY(DY) && null !== DY) {
            if (YY.has(DY)) return null;
            YY.add(DY)
          }
          return DY
        }
      }())
    }

    function hr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const rY = {};
      for (const [DY, FY] of Object.entries(YY)) rY[DY] = cY(FY) && null !== FY ? jr(FY) : String(FY);
      return rY
    }
    var dr = class YY {
      constructor() {
        var rY = this;
        let DY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QY;
        this.context = DY, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = YY => {
          this.adopting = !0;
          try {
            var rY;
            null === (rY = this.context.api) || void 0 === rY || rY.setSession(YY)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: YY = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return rY.updateUserSession({
            refreshActivity: YY
          })
        }, this.recordActivity = zr({
          fetchUserSession: YY.fetchUserSession,
          storeUserSession: YY.storeUserSession,
          updateInterval: OY
        }), this.updateUserSession = Hr({
          fetchUserSession: YY.fetchUserSession,
          storeUserSession: YY.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: OY
        }, DY), this.init()
      }
      static removeUserSession() {
        Dr(AY, YY.storageTypeLocal)
      }
      static storeUserSession(rY) {
        rr(AY, jr(rY), YY.storageTypeLocal)
      }
      static fetchUserSession() {
        const rY = Yr(AY, YY.storageTypeLocal);
        return rY ? JSON.parse(rY) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var YY;
            this.updateSession({
              refreshActivity: !1
            });
            const rY = null === (YY = this.context.api) || void 0 === YY || null === (YY = YY.getSession()) || void 0 === YY ? void 0 : YY.id;
            rY && this.recordActivity(rY)
          }
        })), this.context.metas.addListener(Cr({
          fetchUserSession: YY.fetchUserSession,
          storeUserSession: YY.storeUserSession
        }, this.context))
      }
    };
    dr.storageTypeLocal = LY;
    var Jr = class YY {
      constructor() {
        var rY = this;
        let DY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QY;
        this.context = DY, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: YY = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return rY.updateUserSession({
            refreshActivity: YY
          })
        }, this.recordActivity = zr({
          fetchUserSession: YY.fetchUserSession,
          storeUserSession: YY.storeUserSession,
          updateInterval: OY
        }), this.updateUserSession = Hr({
          fetchUserSession: YY.fetchUserSession,
          storeUserSession: YY.storeUserSession,
          updateInterval: OY
        }, DY), this.init()
      }
      static removeUserSession() {
        Dr(AY, YY.storageTypeSession)
      }
      static storeUserSession(rY) {
        rr(AY, jr(rY), YY.storageTypeSession)
      }
      static fetchUserSession() {
        const rY = Yr(AY, YY.storageTypeSession);
        return rY ? JSON.parse(rY) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var YY;
            this.updateSession({
              refreshActivity: !1
            });
            const rY = null === (YY = this.context.api) || void 0 === YY || null === (YY = YY.getSession()) || void 0 === YY ? void 0 : YY.id;
            rY && this.recordActivity(rY)
          }
        })), this.context.metas.addListener(Cr({
          fetchUserSession: YY.fetchUserSession,
          storeUserSession: YY.storeUserSession
        }, this.context))
      }
    };
    Jr.storageTypeSession = UY;
    const Mr = new WeakMap;

    function wr(YY) {
      let rY = Mr.get(YY);
      if (!rY) {
        let DY = [],
          FY = [];
        rY = {
          addSessionUpdateListener: YY => {
            DY.push(YY)
          },
          removeSessionUpdateListener: YY => {
            DY = DY.filter((rY => rY !== YY))
          },
          notifySessionUpdate: YY => {
            DY.forEach((rY => rY(YY)))
          },
          shouldCapture: () => FY.every((YY => YY())),
          addCaptureFilter: YY => {
            FY.push(YY)
          },
          removeCaptureFilter: YY => {
            FY = FY.filter((rY => rY !== YY))
          }
        }, Mr.set(YY, rY)
      }
      return rY
    }
    var br = class {
      constructor(YY, rY, DY) {
        this.metas = YY, this.transports = rY, this.onActivate = DY, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = YY => {
          var rY, DY, FY;
          const AY = this.pending;
          var IY, RY;
          if ("overrides" === YY.type) return void(this.pending = {
            reset: null !== (IY = null === AY || void 0 === AY ? void 0 : AY.reset) && void 0 !== IY && IY,
            inheritOverrides: null === (RY = null === AY || void 0 === AY ? void 0 : AY.inheritOverrides) || void 0 === RY || RY,
            session: vr(vr({}, null === AY || void 0 === AY ? void 0 : AY.session), {}, {
              overrides: vr(vr({}, null === AY || void 0 === AY ? void 0 : AY.session.overrides), YY.overrides)
            })
          });
          const OY = YY.session,
            gY = GY(OY) || null != OY && "id" in OY && !OY.id,
            aY = null !== (rY = null === OY || void 0 === OY ? void 0 : OY.overrides) && void 0 !== rY ? rY : null === AY || void 0 === AY ? void 0 : AY.session.overrides;
          this.pending = {
            reset: gY || !(null === OY || void 0 === OY ? void 0 : OY.id) && null !== (DY = null === AY || void 0 === AY ? void 0 : AY.reset) && void 0 !== DY && DY,
            inheritOverrides: !(!YY.overrides && void 0 !== (null === OY || void 0 === OY ? void 0 : OY.overrides)) && (null === (FY = null === AY || void 0 === AY ? void 0 : AY.inheritOverrides) || void 0 === FY || FY),
            session: {
              id: null === OY || void 0 === OY ? void 0 : OY.id,
              attributes: (null === OY || void 0 === OY ? void 0 : OY.attributes) && vr({}, OY.attributes),
              overrides: YY.overrides ? vr(vr({}, null === AY || void 0 === AY ? void 0 : AY.session.overrides), YY.overrides) : aY && vr({}, aY)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var YY, rY;
        this.waiting = !0, wr(this.metas).addSessionUpdateListener(this.recordUpdate), wr(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (YY = (rY = this.metas).addCaptureListener) || void 0 === YY || YY.call(rY, this.activate), this.activate()
      }
      destroy() {
        var YY, rY;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), wr(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (YY = (rY = this.metas).removeCaptureListener) || void 0 === YY || YY.call(rY, this.activate), wr(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Xr(YY) {
      return (null === YY || void 0 === YY ? void 0 : YY.persistent) ? dr : Jr
    }

    function qr() {}
    let pr = function(YY) {
      return YY[YY.OFF = 0] = "OFF", YY[YY.ERROR = 1] = "ERROR", YY[YY.WARN = 2] = "WARN", YY[YY.INFO = 3] = "INFO", YY[YY.VERBOSE = 4] = "VERBOSE", YY
    }({});
    const kr = {
        debug: qr,
        error: qr,
        info: qr,
        prefix: "Faro",
        warn: qr
      },
      Gr = 1;

    function xr(YY) {
      return xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, xr(YY)
    }

    function nr(YY) {
      var rY = function(YY, rY) {
        if ("object" != xr(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != xr(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == xr(rY) ? rY : rY + ""
    }

    function Pr(YY, rY, DY) {
      return (rY = nr(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function Ur(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function Lr(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? Ur(Object(DY), !0).forEach((function(rY) {
          Pr(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : Ur(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }
    const tr = Lr({}, console);
    var YD = class {
        constructor() {
          this.unpatchedConsole = tr, this.internalLogger = kr, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
          this.internalLogger.debug(`${this.name}\n`, ...rY)
        }
        logInfo() {
          for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
          this.internalLogger.info(`${this.name}\n`, ...rY)
        }
        logWarn() {
          for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
          this.internalLogger.warn(`${this.name}\n`, ...rY)
        }
        logError() {
          for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
          this.internalLogger.error(`${this.name}\n`, ...rY)
        }
      },
      rD = class extends YD {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const DD = "2.12.1";
    var FD = class extends rD {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = DD, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(YY) {
        var rY;
        const DY = YY.session;
        if (DY && DY.id !== (null === (rY = this.notifiedSession) || void 0 === rY ? void 0 : rY.id)) {
          var FY;
          if (this.isAdoptingSession()) return void(this.notifiedSession = DY);
          if (this.notifiedSession && this.notifiedSession.id === (null === (FY = DY.attributes) || void 0 === FY ? void 0 : FY.previousSession)) return this.api.pushEvent(er, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = DY);
          this.notifiedSession = DY, this.api.pushEvent(lr, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(YY, rY, DY) {
        const FY = null === DY || void 0 === DY ? void 0 : DY.session;
        let AY, IY, RY = YY.fetchUserSession();
        if (rY.persistent && rY.maxSessionPersistenceTime && RY) {
          const YY = sr();
          RY.lastActivity < YY - rY.maxSessionPersistenceTime && (dr.removeUserSession(), RY = null)
        }
        const OY = Kr(RY);
        if ((null === DY || void 0 === DY ? void 0 : DY.reset) || !OY || (null === FY || void 0 === FY ? void 0 : FY.id) && FY.id !== (null === RY || void 0 === RY ? void 0 : RY.sessionId)) {
          var gY, aY, vY, uY, sY, iY;
          IY = cr({
            sessionId: (null === DY || void 0 === DY ? void 0 : DY.reset) ? void 0 : null !== (gY = null === FY || void 0 === FY ? void 0 : FY.id) && void 0 !== gY ? gY : null === (aY = rY.session) || void 0 === aY ? void 0 : aY.id,
            isSampled: ur(this)
          }, this);
          const YY = IY.sessionId,
            yY = DY && OY ? null === RY || void 0 === RY || null === (vY = RY.sessionMeta) || void 0 === vY ? void 0 : vY.overrides : void 0,
            QY = yY ? vr(vr({}, null === (uY = rY.session) || void 0 === uY ? void 0 : uY.overrides), yY) : null === (sY = rY.session) || void 0 === sY ? void 0 : sY.overrides;
          IY.sessionMeta = vr({
            id: YY,
            attributes: vr({
              isSampled: IY.isSampled.toString()
            }, null === (iY = rY.session) || void 0 === iY ? void 0 : iY.attributes)
          }, QY ? {
            overrides: QY
          } : {}), AY = lr
        } else {
          var yY, QY;
          const YY = null === RY || void 0 === RY ? void 0 : RY.sessionId;
          IY = cr({
            sessionId: YY,
            isSampled: RY.isSampled || !1,
            started: null === RY || void 0 === RY ? void 0 : RY.started
          }, this);
          const DY = null === RY || void 0 === RY ? void 0 : RY.sessionMeta,
            FY = vr(vr({}, null === (yY = rY.session) || void 0 === yY ? void 0 : yY.overrides), null === DY || void 0 === DY ? void 0 : DY.overrides);
          IY.sessionMeta = vr(vr({}, rY.session), {}, {
            id: YY,
            attributes: vr(vr(vr({}, null === (QY = rY.session) || void 0 === QY ? void 0 : QY.attributes), null === DY || void 0 === DY ? void 0 : DY.attributes), {}, {
              isSampled: IY.isSampled.toString()
            }),
            overrides: FY
          }), AY = Tr
        }
        var oY;
        if (FY && (IY.sessionMeta = vr(vr({}, IY.sessionMeta), {}, {
            attributes: vr(vr(vr({}, null === (oY = IY.sessionMeta) || void 0 === oY ? void 0 : oY.attributes), FY.attributes), {}, {
              isSampled: IY.isSampled.toString()
            })
          }), FY.overrides)) {
          const YY = (null === DY || void 0 === DY ? void 0 : DY.inheritOverrides) ? vr(vr({}, IY.sessionMeta.overrides), FY.overrides) : FY.overrides;
          Object.keys(YY).length > 0 ? IY.sessionMeta.overrides = YY : delete IY.sessionMeta.overrides
        }
        return {
          initialSession: IY,
          lifecycleType: AY
        }
      }
      registerBeforeSendHook(YY) {
        var rY;
        this.beforeSendHook = rY => {
          var DY, FY;
          const AY = null === (DY = rY.meta.session) || void 0 === DY ? void 0 : DY.id;
          AY && !this.transports.isPaused() && YY(AY);
          const IY = null === (FY = rY.meta.session) || void 0 === FY ? void 0 : FY.attributes;
          if (IY && "true" === (null === IY || void 0 === IY ? void 0 : IY.isSampled)) {
            var RY;
            let YY = JSON.parse(JSON.stringify(rY));
            const DY = null === (RY = YY.meta.session) || void 0 === RY ? void 0 : RY.attributes;
            var OY;
            if (null === DY || void 0 === DY || delete DY.isSampled, 0 === Object.keys(null !== DY && void 0 !== DY ? DY : {}).length) null === (OY = YY.meta.session) || void 0 === OY || delete OY.attributes;
            return YY
          }
          return null
        }, null === (rY = this.transports) || void 0 === rY || rY.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var YY;
        this.logDebug("init session instrumentation");
        const rY = document.prerendering;
        var DY;
        if ((null === (YY = this.config.sessionTracking) || void 0 === YY ? void 0 : YY.enabled) && (rY || this.prerenderSession)) return null !== (DY = this.prerenderSession) && void 0 !== DY || (this.prerenderSession = new br(this.metas, this.transports, (YY => {
          this.prerenderSession = void 0, this.initializeSession(YY)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(YY) {
        const rY = this.config.sessionTracking;
        if (null === rY || void 0 === rY ? void 0 : rY.enabled) {
          var DY, FY;
          const AY = Xr(rY),
            IY = new AY(this);
          this.isAdoptingSession = IY.isAdopting, this.registerBeforeSendHook(IY.recordActivity);
          const {
            initialSession: RY,
            lifecycleType: OY
          } = this.createInitialSession(AY, rY, YY);
          AY.storeUserSession(RY);
          const gY = RY.sessionMeta;
          this.notifiedSession = gY, this.api.setSession(gY), this.captureListener = () => {
            this.transports.isPaused() || IY.updateSession({
              refreshActivity: !1
            })
          }, null === (DY = (FY = this.metas).addCaptureListener) || void 0 === DY || DY.call(FY, this.captureListener), OY === lr && this.api.pushEvent(lr, {}, void 0, {
            skipDedupe: !0
          }), OY === Tr && this.api.pushEvent(Tr, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var YY, rY, DY;
        (null === (YY = this.prerenderSession) || void 0 === YY || YY.destroy(), this.captureListener) && (null === (rY = (DY = this.metas).removeCaptureListener) || void 0 === rY || rY.call(DY, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function AD(YY, rY, DY, FY) {
      const AY = {
        filename: YY || document.location.href,
        function: rY || "?"
      };
      return void 0 !== DY && (AY.lineno = DY), void 0 !== FY && (AY.colno = FY), AY
    }
    const ID = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      RD = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      OD = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      gD = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      aD = "safari-extension",
      vD = "safari-web-extension",
      uD = /Minified React error #\d+;/i;

    function sD(YY, rY) {
      const DY = null === YY || void 0 === YY ? void 0 : YY.includes(aD),
        FY = !DY && (null === YY || void 0 === YY ? void 0 : YY.includes("safari-web-extension"));
      return DY || FY ? [(null === YY || void 0 === YY ? void 0 : YY.includes("@")) ? YY.split("@")[0] : YY, DY ? `${aD}:${rY}` : `${vD}:${rY}`] : [YY, rY]
    }
    const iD = 1024;

    function yD(YY) {
      let rY = [];
      YY.stacktrace ? rY = YY.stacktrace.split("\n").filter(((YY, rY) => rY % 2 === 0)) : YY.stack && (rY = YY.stack.split("\n"));
      const DY = rY.reduce(((rY, DY, FY) => {
        if (DY.length > iD) return rY;
        let AY, IY, RY, OY, gY;
        if (AY = ID.exec(DY)) {
          if (IY = AY[1], RY = AY[2], OY = AY[3], gY = AY[4], null === RY || void 0 === RY ? void 0 : RY.startsWith("eval")) {
            const YY = RD.exec(RY);
            YY && (RY = YY[1], OY = YY[2], gY = YY[3])
          }
          RY = (null === RY || void 0 === RY ? void 0 : RY.startsWith("address at ")) ? RY.substring(11) : RY, [IY, RY] = sD(IY, RY)
        } else if (AY = OD.exec(DY)) {
          if (IY = AY[1], RY = AY[3], OY = AY[4], gY = AY[5], RY && RY.includes(" > eval")) {
            const YY = gD.exec(RY);
            YY && (IY = IY || "eval", RY = YY[1], OY = YY[2])
          } else 0 === FY && !gY && TY(YY.columnNumber) && (gY = String(YY.columnNumber + 1));
          [IY, RY] = sD(IY, RY)
        }
        return (RY || IY) && rY.push(AD(RY, IY, OY ? Number(OY) : void 0, gY ? Number(gY) : void 0)), rY
      }), []);
      return uD.test(YY.message) ? DY.slice(1) : DY
    }

    function QD(YY) {
      return {
        frames: yD(YY)
      }
    }
    const oD = "http-request-start",
      WD = "http-request-end";
    var ED = class YY {
      constructor() {
        this.subscribers = []
      }
      subscribe(YY) {
        return this.subscribers.push(YY), {
          unsubscribe: () => this.unsubscribe(YY)
        }
      }
      unsubscribe(YY) {
        this.subscribers = this.subscribers.filter((rY => rY !== YY))
      }
      notify(YY) {
        this.subscribers.forEach((rY => rY(YY)))
      }
      first() {
        const rY = new YY,
          DY = YY => {
            rY.notify(YY), FY.unsubscribe()
          },
          FY = this.subscribe(DY),
          AY = rY.unsubscribe.bind(rY);
        return this.withUnsubscribeOverride(rY, AY, DY)
      }
      takeWhile(rY) {
        const DY = new YY,
          FY = YY => {
            rY(YY) ? DY.notify(YY) : DY.unsubscribe(FY)
          };
        this.subscribe(FY);
        const AY = DY.unsubscribe.bind(DY);
        return this.withUnsubscribeOverride(DY, AY, FY)
      }
      filter(rY) {
        const DY = new YY,
          FY = YY => {
            rY(YY) && DY.notify(YY)
          };
        this.subscribe(FY);
        const AY = DY.unsubscribe.bind(DY);
        return this.withUnsubscribeOverride(DY, AY, FY)
      }
      merge() {
        const rY = new YY,
          DY = [];
        for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
        AY.forEach((YY => {
          const FY = YY.subscribe((YY => {
            rY.notify(YY)
          }));
          DY.push(FY)
        }));
        const RY = rY.unsubscribeAll.bind(rY);
        return rY.unsubscribe = () => {
          DY.forEach((YY => YY.unsubscribe())), RY()
        }, rY
      }
      withUnsubscribeOverride(YY, rY, DY) {
        return YY.unsubscribe = YY => {
          rY(YY), this.unsubscribe(DY)
        }, YY
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let mD = function(YY) {
      return YY.TRACE = "trace", YY.DEBUG = "debug", YY.INFO = "info", YY.LOG = "log", YY.WARN = "warn", YY.ERROR = "error", YY
    }({});
    const VD = "log",
      SD = ["trace", "debug", "info", "log", "warn", "error"];
    let lD, TD = !1;
    const eD = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      ND = "Error",
      BD = YY => YY.map((YY => cY(YY) ? jr(YY) : String(YY))).join(" ");

    function cD(YY) {
      let rY, DY, FY, AY, IY = [];
      if (JY(YY) && YY.error) rY = YY.error.message, DY = YY.error.name, IY = yD(YY.error);
      else if ((FY = MY(YY)) || wY(YY)) {
        const {
          name: AY,
          message: IY
        } = YY;
        DY = null !== AY && void 0 !== AY ? AY : FY ? "DOMError" : "DOMException", rY = IY ? `${DY}: ${IY}` : DY
      } else dY(YY) ? (DY = YY.name, rY = YY.message, IY = yD(YY)) : (cY(YY) || (AY = jY(YY))) && (DY = AY ? YY.constructor.name : void 0, rY = `Non-Error exception captured with keys: ${Object.keys(YY)}`);
      return [rY, DY, IY]
    }

    function KD(YY) {
      const [rY, DY, FY, AY, IY] = YY;
      let RY, OY, gY = [];
      const aY = lY(rY),
        vY = AD(DY, "?", FY, AY);
      return IY || !aY ? ([RY, OY, gY] = cD(null !== IY && void 0 !== IY ? IY : rY), 0 === gY.length && (gY = [vY])) : aY && ([RY, OY] = function(YY) {
        var rY, DY;
        const FY = YY.match(eD),
          AY = null !== (rY = null === FY || void 0 === FY ? void 0 : FY[1]) && void 0 !== rY ? rY : ND;
        return [null !== (DY = null === FY || void 0 === FY ? void 0 : FY[2]) && void 0 !== DY ? DY : YY, AY]
      }(rY), gY = [vY]), {
        value: RY,
        type: OY,
        stackFrames: gY
      }
    }

    function HD(YY, rY) {
      return dY(YY[0]) ? KD(YY) : {
        value: rY(YY)
      }
    }
    const zD = YY => YY.map((YY => {
      try {
        return String(YY)
      } catch (rY) {
        return ""
      }
    })).join(" ");
    var ZD = class YY extends rD {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = DD, this.errorSerializer = zD
      }
      initialize() {
        var rY, DY;
        const FY = this.config.consoleInstrumentation,
          AY = (null === FY || void 0 === FY ? void 0 : FY.serializeErrors) || !!(null === FY || void 0 === FY ? void 0 : FY.errorSerializer);
        this.errorSerializer = AY ? null !== (rY = null === FY || void 0 === FY ? void 0 : FY.errorSerializer) && void 0 !== rY ? rY : BD : zD;
        const IY = null !== (DY = null === FY || void 0 === FY ? void 0 : FY.disabledLevels) && void 0 !== DY ? DY : YY.defaultDisabledLevels,
          RY = function(YY) {
            if (lD || (lD = new ED), !TD) {
              const rY = null !== YY && void 0 !== YY ? YY : tr;
              SD.forEach((YY => {
                console[YY] = function() {
                  for (var DY, FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
                  lD.notify({
                    type: "console",
                    level: YY,
                    args: AY
                  }), null === (DY = rY[YY]) || void 0 === DY || DY.apply(console, AY)
                }
              })), TD = !0
            }
            return lD
          }(this.unpatchedConsole);
        this.subscription = RY.subscribe((rY => {
          let {
            level: DY,
            args: AY
          } = rY;
          if (!IY.includes(DY)) try {
            if (DY !== mD.ERROR || (null === FY || void 0 === FY ? void 0 : FY.consoleErrorAsLog))
              if (DY === mD.ERROR && (null === FY || void 0 === FY ? void 0 : FY.consoleErrorAsLog)) {
                const {
                  value: rY,
                  type: FY,
                  stackFrames: IY
                } = HD(AY, this.errorSerializer);
                this.api.pushLog(rY ? [YY.consoleErrorPrefix + rY] : AY, {
                  level: DY,
                  context: {
                    value: null !== rY && void 0 !== rY ? rY : "",
                    type: null !== FY && void 0 !== FY ? FY : "",
                    stackFrames: (null === IY || void 0 === IY ? void 0 : IY.length) ? BD(IY) : ""
                  }
                })
              } else this.api.pushLog(AY, {
                level: DY
              });
            else {
              const {
                value: rY,
                type: DY,
                stackFrames: FY
              } = HD(AY, this.errorSerializer);
              if (rY && !DY && !FY) return void this.api.pushError(new Error(YY.consoleErrorPrefix + rY));
              this.api.pushError(new Error(YY.consoleErrorPrefix + rY), {
                type: DY,
                stackFrames: FY
              })
            }
          } catch (RY) {
            this.logError(RY)
          }
        }))
      }
      destroy() {
        var YY;
        null === (YY = this.subscription) || void 0 === YY || YY.unsubscribe(), this.subscription = void 0
      }
    };
    ZD.defaultDisabledLevels = [mD.DEBUG, mD.TRACE, mD.LOG], ZD.consoleErrorPrefix = "console.error: ";
    const CD = [];
    var fD = class extends rD {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = DD
      }
      initialize() {
        this.logDebug("Initializing"),
          function(YY) {
            const rY = window.onerror;
            window.onerror = function() {
              for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
              try {
                const {
                  value: rY,
                  type: DY,
                  stackFrames: AY
                } = KD(FY), IY = FY[4];
                if (rY) {
                  const FY = {
                    type: DY,
                    stackFrames: AY
                  };
                  null != IY && (FY.originalError = IY), YY.pushError(new Error(rY), FY)
                }
              } finally {
                null === rY || void 0 === rY || rY.apply(window, FY)
              }
            }
          }(this.api),
          function(YY) {
            const rY = rY => {
              var DY;
              let FY, AY, IY = rY;
              if (IY.reason) IY = rY.reason;
              else if (null === (DY = rY.detail) || void 0 === DY ? void 0 : DY.reason) {
                var RY;
                IY = null === (RY = rY.detail) || void 0 === RY ? void 0 : RY.reason
              }
              let OY = [];
              CY(IY) ? (FY = `Non-Error promise rejection captured with value: ${String(IY)}`, AY = "UnhandledRejection") : [FY, AY, OY] = cD(IY), FY && YY.pushError(new Error(FY), {
                type: AY,
                stackFrames: OY
              })
            };
            window.addEventListener("unhandledrejection", rY), CD.push(rY)
          }(this.api)
      }
    };
    const jD = "unknown";
    var hD = class extends rD {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = DD, this.waitingForActivation = !1, this.sendViewChangedEvent = YY => {
          var rY;
          if (this.waitingForActivation || document.prerendering) return;
          const DY = YY.view;
          if (DY && DY.name !== (null === (rY = this.notifiedView) || void 0 === rY ? void 0 : rY.name)) {
            var FY, AY, IY;
            const YY = null !== (FY = null === (AY = this.notifiedView) || void 0 === AY ? void 0 : AY.name) && void 0 !== FY ? FY : jD;
            this.notifiedView = DY, this.api.pushEvent(Sr, {
              fromView: YY,
              toView: null !== (IY = DY.name) && void 0 !== IY ? IY : jD
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
    class dD {
      t;
      o = 0;
      i = [];
      l(YY) {
        if (YY.hadRecentInput) return;
        const rY = this.i[0],
          DY = this.i.at(-1);
        this.o && rY && DY && YY.startTime - DY.startTime < 1e3 && YY.startTime - rY.startTime < 5e3 ? (this.o += YY.value, this.i.push(YY)) : (this.o = YY.value, this.i = [YY]), this.t?.(YY)
      }
    }
    const JD = () => {
        const YY = performance.getEntriesByType("navigation")[0];
        if (YY && YY.responseStart > 0 && YY.responseStart < performance.now()) return YY
      },
      MD = YY => {
        if ("loading" === document.readyState) return "loading";
        const rY = JD();
        if (rY) {
          if (YY < rY.domInteractive) return "loading";
          if (0 === rY.domContentLoadedEventStart || YY < rY.domContentLoadedEventStart) return "dom-interactive";
          if (0 === rY.domComplete || YY < rY.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      wD = YY => {
        const rY = YY.nodeName;
        return 1 === YY.nodeType ? rY.toLowerCase() : rY.toUpperCase().replace(/^#/, "")
      },
      bD = YY => {
        let rY = "";
        try {
          for (; 9 !== YY?.nodeType;) {
            const DY = YY,
              FY = DY.id ? "#" + DY.id : [wD(DY), ...Array.from(DY.classList ?? []).sort()].join(".");
            if (rY.length + FY.length > 99) return rY || FY;
            if (rY = rY ? FY + ">" + rY : FY, DY.id) break;
            YY = DY.parentNode
          }
        } catch {}
        return rY
      },
      XD = new WeakMap;

    function qD(YY, rY) {
      let DY = XD.get(rY);
      return DY || (DY = new WeakMap, XD.set(rY, DY)), DY.get(YY) || DY.set(YY, new rY), DY.get(YY)
    }
    let pD = -1;
    const kD = () => pD,
      GD = YY => {
        addEventListener("pageshow", (rY => {
          rY.persisted && (pD = rY.timeStamp, YY(rY))
        }), !0)
      },
      xD = (YY, rY, DY, FY) => {
        let AY, IY;
        return RY => {
          rY.value >= 0 && (RY || FY) && (IY = rY.value - (AY ?? 0), (IY || void 0 === AY) && (AY = rY.value, rY.delta = IY, rY.rating = ((YY, rY) => YY > rY[1] ? "poor" : YY > rY[0] ? "needs-improvement" : "good")(rY.value, DY), YY(rY)))
        }
      },
      nD = YY => {
        requestAnimationFrame((() => requestAnimationFrame((() => YY()))))
      },
      PD = () => JD()?.activationStart ?? 0;
    let UD = -1;
    const LD = new Set,
      tD = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      YF = YY => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === YY.type)
            for (const YY of LD) YY();
          isFinite(UD) || (UD = "visibilitychange" === YY.type ? YY.timeStamp : 0, removeEventListener("prerenderingchange", YF, !0))
        }
      },
      rF = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (UD = 1 / 0), UD < 0) {
          const YY = PD(),
            rY = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((rY => "hidden" === rY.name && rY.startTime >= YY))?.startTime;
          UD = rY ?? tD(), addEventListener("visibilitychange", YF, !0), addEventListener("prerenderingchange", YF, !0), GD((() => {
            setTimeout((() => {
              UD = tD()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return UD
          },
          onHidden(YY) {
            LD.add(YY)
          }
        }
      },
      DF = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0,
          RY = arguments.length > 6 ? arguments[6] : void 0;
        const OY = JD(),
          gY = OY?.navigationId || 0;
        let aY = "navigate";
        return DY ? aY = DY : kD() >= 0 ? aY = "back-forward-cache" : OY && (document.prerendering || PD() > 0 ? aY = "prerender" : document.wasDiscarded ? aY = "restore" : OY.type && (aY = OY.type.replace(/_/g, "-"))), {
          name: YY,
          value: rY,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: aY,
          navigationId: FY || gY,
          navigationInteractionId: AY,
          navigationURL: IY || OY?.name,
          navigationStartTime: RY || 0
        }
      },
      FF = function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const FY = YY.filter((YY => PerformanceObserver.supportedEntryTypes.includes(YY)));
          if (FY.length > 0) {
            const YY = new PerformanceObserver((YY => {
              queueMicrotask((() => {
                const DY = YY.getEntries();
                FY.length > 1 && DY.sort(((YY, rY) => YY.startTime + YY.duration - (rY.startTime + rY.duration))), rY(DY)
              }))
            }));
            for (const rY of FY) YY.observe({
              type: rY,
              buffered: !0,
              ...DY
            });
            return YY
          }
        } catch {}
      },
      AF = YY => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && YY && YY.reportSoftNavs,
      IF = (YY, rY) => {
        if (YY.set(rY.navigationId, rY), YY.size > 2) {
          const rY = YY.keys().next().value;
          void 0 !== rY && YY.delete(rY)
        }
      },
      RF = YY => {
        let rY = !1;
        return () => {
          rY || (YY(), rY = !0)
        }
      };
    class OF {
      u
    }
    const gF = YY => {
        document.prerendering ? addEventListener("prerenderingchange", YY, !0) : YY()
      },
      aF = [1800, 3e3],
      vF = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const DY = AF(rY);
        gF((() => {
          const FY = qD(rY, OF),
            AY = rF();
          let IY, RY = DF("FCP");
          const OY = FF(["paint"], (YY => {
            for (const rY of YY) "first-contentful-paint" === rY.name && (OY.disconnect(), rY.startTime < AY.firstHiddenTime && (RY.value = Math.max(rY.startTime - PD(), 0), RY.entries.push(rY), RY.navigationId = rY.navigationId || RY.navigationId, IY(!0)))
          }));
          OY && (IY = xD(YY, RY, aF, rY.reportAllChanges), GD((DY => {
            RY = DF("FCP", -1, "back-forward-cache", RY.navigationId, RY.navigationInteractionId, RY.navigationURL, kD()), IY = xD(YY, RY, aF, rY.reportAllChanges), nD((() => {
              RY.value = performance.now() - DY.timeStamp, IY(!0)
            }))
          }))), DY && FF(["soft-navigation"], (DY => {
            DY.forEach((DY => {
              FY.u && DY.navigationId && IF(FY.u, DY);
              const AY = Math.max((DY.presentationTime || DY.paintTime || 0) - DY.startTime, 0);
              RY = DF("FCP", AY, "soft-navigation", DY.navigationId, DY.interactionId, DY.name, DY.startTime), IY = xD(YY, RY, aF, rY.reportAllChanges), IY(!0)
            }))
          }), rY)
        }))
      },
      uF = [.1, .25],
      sF = YY => YY.find((YY => 1 === YY.node?.nodeType)) || YY[0];
    let iF = 0,
      yF = 1 / 0,
      QF = 0;
    const oF = YY => {
      for (const rY of YY) rY.interactionId && (yF = Math.min(yF, rY.interactionId), QF = Math.max(QF, rY.interactionId), iF = QF ? (QF - yF) / 7 + 1 : 0)
    };
    let WF;
    const EF = () => WF ? iF : performance.interactionCount ?? 0;
    class mF {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return EF() - this.h
      }
      D() {
        this.h = EF(), this.v.length = 0, this.p.clear()
      }
      S(YY) {
        const rY = this.T(),
          DY = Math.min(this.v.length - 1, Math.floor(rY / 50));
        return !rY || -1 !== DY || "soft-navigation" !== YY && "back-forward-cache" !== YY ? this.v[DY] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(YY) {
        if (this.m?.(YY), !YY.interactionId) return;
        const rY = this.v.at(-1);
        let DY = this.p.get(YY.interactionId);
        if (DY || this.v.length < 10 || YY.duration > rY.k) {
          if (DY ? YY.duration > DY.k ? (DY.entries = [YY], DY.k = YY.duration) : YY.duration === DY.k && YY.startTime === DY.entries[0].startTime && DY.entries.push(YY) : (DY = {
              id: YY.interactionId,
              entries: [YY],
              k: YY.duration
            }, this.p.set(DY.id, DY), this.v.push(DY)), this.v.sort(((YY, rY) => rY.k - YY.k)), this.v.length > 10) {
            const YY = this.v.splice(10);
            for (const rY of YY) this.p.delete(rY.id)
          }
          this.M?.(DY)
        }
      }
    }
    const VF = YY => {
        const rY = "requestIdleCallback" in globalThis ? 1e3 : 0,
          DY = globalThis.requestIdleCallback || setTimeout,
          FY = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) YY();
        else {
          const AY = RF(YY);
          let IY = -1;
          const RY = () => {
            FY(IY), AY()
          };
          addEventListener("visibilitychange", RY, {
            once: !0,
            capture: !0
          }), IY = DY((() => {
            removeEventListener("visibilitychange", RY, {
              capture: !0
            }), AY()
          }), {
            timeout: rY
          })
        }
      },
      SF = [200, 500],
      lF = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const DY = qD(rY = Object.assign({}, rY), mF);
        let FY = [],
          AY = [],
          IY = 0;
        const RY = new WeakMap,
          OY = new WeakMap;
        let gY = !1;
        const aY = () => {
            gY || (gY = !0, VF(vY))
          },
          vY = () => {
            const YY = new Set(DY.v.map((YY => RY.get(YY.entries[0])))),
              rY = AY.length - 10;
            AY = AY.filter(((DY, FY) => FY >= rY || YY.has(DY)));
            const OY = new Set;
            for (const DY of AY) {
              const YY = uY(DY.startTime, DY.processingEnd);
              for (const rY of YY) OY.add(rY)
            }
            const aY = FY.length - 10;
            FY = FY.filter(((YY, rY) => OY.has(YY) || rY >= aY && YY.startTime > IY)), gY = !1
          };
        DY.m = YY => {
          const DY = YY.startTime + YY.duration;
          let FY;
          IY = Math.max(IY, YY.processingEnd);
          for (let IY = AY.length - 1; IY >= 0; IY--) {
            const RY = AY[IY];
            if (Math.abs(DY - RY.renderTime) <= 8) {
              FY = RY, FY.startTime = Math.min(YY.startTime, FY.startTime), FY.processingStart = Math.min(YY.processingStart, FY.processingStart), FY.processingEnd = Math.max(YY.processingEnd, FY.processingEnd), rY.includeProcessedEventEntries && FY.entries.push(YY);
              break
            }
          }
          FY || (FY = {
            startTime: YY.startTime,
            processingStart: YY.processingStart,
            processingEnd: YY.processingEnd,
            renderTime: DY,
            entries: rY.includeProcessedEventEntries ? [YY] : []
          }, AY.push(FY)), YY.interactionId && RY.set(YY, FY), aY()
        }, DY.M = YY => {
          if (!OY.get(YY)) {
            const DY = YY.entries.find((YY => YY.target))?.target;
            if (DY) {
              const FY = rY.generateTarget?.(DY) ?? bD(DY);
              OY.set(YY, FY)
            } else {
              const rY = YY.entries.find((YY => YY.targetSelector))?.targetSelector;
              rY && OY.set(YY, rY)
            }
          }
        };
        const uY = (YY, rY) => {
          const DY = [];
          for (const AY of FY)
            if (!(AY.startTime + AY.duration < YY)) {
              if (AY.startTime > rY) break;
              DY.push(AY)
            } return DY
        };
        FF(["long-animation-frame"], (YY => {
            FY = FY.concat(YY), aY()
          }), rY),
          function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const DY = rF();
            gF((() => {
              "interactionCount" in performance || WF || (WF = FF(["event"], oF, {
                durationThreshold: 0
              }));
              let FY, AY = DF("INP");
              const IY = qD(rY, mF),
                RY = (DY, RY, OY, gY, aY) => {
                  IY.D(), AY = DF("INP", -1, DY, RY, OY, gY, aY), FY = xD(YY, AY, SF, rY.reportAllChanges)
                },
                OY = () => {
                  const YY = IY.S(AY.navigationType);
                  YY && YY.k !== AY.value && (AY.value = YY.k, AY.entries = YY.entries, FY())
                },
                gY = YY => {
                  OY(), FY(!0), RY("soft-navigation", YY.navigationId, YY.interactionId, YY.name, YY.startTime)
                },
                aY = function(YY) {
                  let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  VF((() => {
                    for (const rY of YY) "soft-navigation" !== rY.entryType ? IY.l(rY) : gY(rY);
                    OY(), rY && FY(!0)
                  }))
                },
                vY = ["event", "first-input"];
              AF(rY) && vY.push("soft-navigation");
              const uY = FF(vY, aY, {
                ...rY,
                durationThreshold: rY.durationThreshold ?? 40
              });
              FY = xD(YY, AY, SF, rY.reportAllChanges), uY && (DY.onHidden((() => {
                aY(uY.takeRecords(), !0)
              })), GD((() => {
                RY("back-forward-cache", AY.navigationId, AY.navigationInteractionId, AY.navigationURL, kD())
              })))
            }))
          }((rY => {
            YY((YY => {
              if (0 === YY.entries.length) {
                const rY = YY.navigationStartTime || 0,
                  DY = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: YY.value,
                    loadState: MD(rY)
                  };
                return Object.assign(YY, {
                  attribution: DY
                })
              }
              const rY = YY.entries[0],
                FY = RY.get(rY),
                AY = Math.max(FY.processingStart, rY.startTime),
                IY = Math.max(rY.startTime + rY.duration, AY),
                gY = Math.min(FY.processingEnd, IY),
                aY = FY.entries.sort(((YY, rY) => YY.processingStart - rY.processingStart)),
                vY = uY(rY.startTime, gY),
                sY = DY.p.get(rY.interactionId),
                iY = {
                  interactionTarget: OY.get(sY),
                  interactionType: rY.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: rY.startTime,
                  nextPaintTime: IY,
                  processedEventEntries: aY,
                  longAnimationFrameEntries: vY,
                  inputDelay: AY - rY.startTime,
                  processingDuration: gY - AY,
                  presentationDelay: IY - gY,
                  loadState: MD(rY.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (YY => {
                const rY = YY.interactionTime,
                  DY = YY.nextPaintTime;
                if (!YY.longAnimationFrameEntries?.length || !rY || !DY) return;
                const FY = YY.inputDelay,
                  AY = YY.processingDuration;
                let IY, RY, OY = 0,
                  gY = 0,
                  aY = 0,
                  vY = 0;
                for (const iY of YY.longAnimationFrameEntries) {
                  gY = gY + iY.startTime + iY.duration - iY.styleAndLayoutStart;
                  for (const YY of iY.scripts) {
                    const DY = YY.startTime + YY.duration;
                    if (DY < rY) continue;
                    const aY = DY - Math.max(rY, YY.startTime),
                      uY = YY.duration ? aY / YY.duration * YY.forcedStyleAndLayoutDuration : 0;
                    OY += aY - uY, gY += uY, aY > vY && (RY = YY.startTime < rY + FY ? "input-delay" : YY.startTime >= rY + FY + AY ? "presentation-delay" : "processing-duration", IY = YY, vY = aY)
                  }
                }
                const uY = YY.longAnimationFrameEntries.at(-1),
                  sY = uY ? uY.startTime + uY.duration : 0;
                sY >= rY + FY + AY && (aY = DY - sY), IY && RY && (YY.longestScript = {
                  entry: IY,
                  subpart: RY,
                  intersectingDuration: vY
                }), YY.totalScriptDuration = OY, YY.totalStyleAndLayoutDuration = gY, YY.totalPaintDuration = aY, YY.totalUnattributedDuration = DY - rY - OY - gY - aY
              })(iY), Object.assign(YY, {
                attribution: iY
              })
            })(rY))
          }), rY)
      };
    class TF {
      m;
      u;
      l(YY) {
        this.m?.(YY)
      }
    }
    const eF = [2500, 4e3];
    let NF = 50;
    const BF = [];
    FF(["resource"], (YY => {
      for (const rY of YY) BF.push(rY), BF.length > NF && BF.shift()
    }));
    const cF = [800, 1800],
      KF = YY => {
        document.prerendering ? gF((() => KF(YY))) : "complete" !== document.readyState ? addEventListener("load", (() => KF(YY)), !0) : setTimeout(YY)
      },
      HF = "load_state",
      zF = "time_to_first_byte";
    var ZF = class {
        constructor(YY, rY) {
          this.corePushMeasurement = YY, this.webVitalConfig = rY
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var YY;
          ! function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const DY = qD(rY = Object.assign({}, rY), dD),
              FY = new WeakMap;
            DY.t = YY => {
                if (YY?.sources?.length) {
                  const DY = sF(YY.sources),
                    AY = DY?.node;
                  if (AY) {
                    const YY = rY.generateTarget?.(AY) ?? bD(AY);
                    FY.set(DY, YY)
                  }
                }
              },
              function(YY) {
                let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const DY = rF();
                vF(RF((() => {
                  let FY, AY = DF("CLS", 0);
                  const IY = qD(rY, dD),
                    RY = (DY, RY, OY, gY, aY) => {
                      AY = DF("CLS", 0, DY, RY, OY, gY, aY), IY.o = 0, FY = xD(YY, AY, uF, rY.reportAllChanges)
                    },
                    OY = function() {
                      let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      IY.o > AY.value && (AY.value = IY.o, AY.entries = IY.i), FY(YY)
                    },
                    gY = YY => {
                      OY(!0), RY("soft-navigation", YY.navigationId, YY.interactionId, YY.name, YY.startTime)
                    },
                    aY = YY => {
                      for (const rY of YY) "soft-navigation" !== rY.entryType ? IY.l(rY) : gY(rY);
                      OY()
                    },
                    vY = ["layout-shift"];
                  AF(rY) && vY.push("soft-navigation");
                  const uY = FF(vY, aY);
                  uY && (FY = xD(YY, AY, uF, rY.reportAllChanges), DY.onHidden((() => {
                    aY(uY.takeRecords()), FY(!0)
                  })), GD((() => {
                    RY("back-forward-cache", AY.navigationId, AY.navigationInteractionId, AY.navigationURL, kD()), nD(FY)
                  })), setTimeout(FY))
                })))
              }((rY => {
                YY((YY => {
                  let rY = {};
                  if (YY.entries.length) {
                    const DY = YY.entries.reduce(((YY, rY) => YY.value > rY.value ? YY : rY));
                    if (DY?.sources?.length) {
                      const YY = sF(DY.sources);
                      YY && (rY = {
                        largestShiftTarget: FY.get(YY),
                        largestShiftTime: DY.startTime,
                        largestShiftValue: DY.value,
                        largestShiftSource: YY,
                        largestShiftEntry: DY,
                        loadState: MD(DY.startTime)
                      })
                    }
                  }
                  return Object.assign(YY, {
                    attribution: rY
                  })
                })(rY))
              }), rY)
          }((YY => {
            const {
              loadState: rY,
              largestShiftValue: DY,
              largestShiftTime: FY,
              largestShiftTarget: AY
            } = YY.attribution, IY = this.buildInitialValues(YY);
            this.addIfPresent(IY, "largest_shift_value", DY), this.addIfPresent(IY, "largest_shift_time", FY);
            const RY = this.buildInitialContext(YY);
            this.addIfPresent(RY, HF, rY), this.addIfPresent(RY, "largest_shift_target", AY), this.pushMeasurement(IY, RY)
          }), {
            reportAllChanges: null === (YY = this.webVitalConfig) || void 0 === YY ? void 0 : YY.reportAllChanges
          })
        }
        measureFCP() {
          var YY;
          ! function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const DY = qD(rY = Object.assign({}, rY), OF);
            AF(rY) && (DY.u = new Map), vF((rY => {
              YY((YY => {
                let rY = {
                  timeToFirstByte: 0,
                  firstByteToFCP: YY.value,
                  loadState: MD(kD())
                };
                if ("soft-navigation" !== YY.navigationType) {
                  if (YY.entries.length) {
                    const DY = JD(),
                      FY = YY.entries.at(-1);
                    if (DY) {
                      const AY = DY.responseStart,
                        IY = DY.activationStart || 0,
                        RY = Math.max(0, AY - IY);
                      rY = {
                        timeToFirstByte: RY,
                        firstByteToFCP: YY.value - RY,
                        loadState: MD(YY.entries[0].startTime),
                        navigationEntry: DY,
                        fcpEntry: FY
                      }
                    }
                  }
                } else {
                  const FY = DY.u?.get(YY.navigationId);
                  FY && (rY = {
                    timeToFirstByte: 0,
                    firstByteToFCP: YY.value,
                    loadState: "complete",
                    navigationEntry: FY
                  })
                }
                return Object.assign(YY, {
                  attribution: rY
                })
              })(rY))
            }), rY)
          }((YY => {
            const {
              firstByteToFCP: rY,
              timeToFirstByte: DY,
              loadState: FY
            } = YY.attribution, AY = this.buildInitialValues(YY);
            this.addIfPresent(AY, "first_byte_to_fcp", rY), this.addIfPresent(AY, zF, DY);
            const IY = this.buildInitialContext(YY);
            this.addIfPresent(IY, HF, FY), this.pushMeasurement(AY, IY)
          }), {
            reportAllChanges: null === (YY = this.webVitalConfig) || void 0 === YY ? void 0 : YY.reportAllChanges
          })
        }
        measureINP() {
          var YY;
          lF((YY => {
            var rY;
            const {
              interactionTime: DY,
              presentationDelay: FY,
              inputDelay: AY,
              processingDuration: IY,
              nextPaintTime: RY,
              loadState: OY,
              interactionTarget: gY,
              interactionType: aY,
              totalScriptDuration: vY,
              totalStyleAndLayoutDuration: uY,
              totalPaintDuration: sY,
              totalUnattributedDuration: iY,
              longestScript: yY
            } = YY.attribution, QY = this.buildInitialValues(YY);
            this.addIfPresent(QY, "interaction_time", DY), this.addIfPresent(QY, "presentation_delay", FY), this.addIfPresent(QY, "input_delay", AY), this.addIfPresent(QY, "processing_duration", IY), this.addIfPresent(QY, "next_paint_time", RY), this.addNumberIfDefined(QY, "total_script_duration", vY), this.addNumberIfDefined(QY, "total_style_and_layout_duration", uY), this.addNumberIfDefined(QY, "total_paint_duration", sY), this.addNumberIfDefined(QY, "total_unattributed_duration", iY), this.addNumberIfDefined(QY, "longest_script_intersecting_duration", null === yY || void 0 === yY ? void 0 : yY.intersectingDuration);
            const oY = this.buildInitialContext(YY);
            this.addIfPresent(oY, HF, OY), this.addIfPresent(oY, "interaction_target", gY), this.addIfPresent(oY, "interaction_type", aY), this.addIfPresent(oY, "longest_script_subpart", null === yY || void 0 === yY ? void 0 : yY.subpart), this.addIfPresent(oY, "longest_script_invoker_type", null === yY || void 0 === yY ? void 0 : yY.entry.invokerType), (null === (rY = this.webVitalConfig) || void 0 === rY ? void 0 : rY.trackAttributionSources) && (this.addIfPresent(oY, "longest_script_invoker", null === yY || void 0 === yY ? void 0 : yY.entry.invoker), this.addIfPresent(oY, "longest_script_source_url", null === yY || void 0 === yY ? void 0 : yY.entry.sourceURL), this.addIfPresent(oY, "longest_script_source_function_name", null === yY || void 0 === yY ? void 0 : yY.entry.sourceFunctionName), this.addIfPresent(oY, "longest_script_source_char_position", void 0 !== (null === yY || void 0 === yY ? void 0 : yY.entry.sourceCharPosition) ? String(yY.entry.sourceCharPosition) : void 0)), this.pushMeasurement(QY, oY)
          }), {
            reportAllChanges: null === (YY = this.webVitalConfig) || void 0 === YY ? void 0 : YY.reportAllChanges
          })
        }
        measureLCP() {
          var YY;
          ! function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (rY = Object.assign({}, rY)).resourceBufferSize && (NF = rY.resourceBufferSize);
            const DY = qD(rY, TF),
              FY = new WeakMap;
            AF(rY) && (DY.u = new Map), DY.m = YY => {
                const DY = YY.element;
                if (DY) {
                  const AY = rY.generateTarget?.(DY) ?? bD(DY);
                  FY.set(YY, AY)
                } else YY.id && FY.set(YY, `#${YY.id}`)
              },
              function(YY) {
                let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  DY = !1;
                const FY = AF(rY);
                gF((() => {
                  let AY, IY = rF(),
                    RY = DF("LCP");
                  const OY = qD(rY, TF),
                    gY = (FY, OY, gY, aY, vY) => {
                      RY = DF("LCP", -1, FY, OY, gY, aY, vY), AY = xD(YY, RY, eF, rY.reportAllChanges), DY = !1, "soft-navigation" === FY && (IY = rF(!0))
                    },
                    aY = YY => {
                      OY.u && YY.navigationId && IF(OY.u, YY), DY || AY(!0), gY("soft-navigation", YY.navigationId, YY.interactionId, YY.name, YY.startTime);
                      const rY = YY.getLargestInteractionContentfulPaint?.();
                      rY && vY([rY])
                    },
                    vY = YY => {
                      rY.reportAllChanges || FY || (YY = YY.slice(-1));
                      for (const rY of YY) {
                        if (!rY) continue;
                        if ("soft-navigation" === rY.entryType) {
                          aY(rY);
                          continue
                        }
                        let YY = 0,
                          DY = [],
                          FY = rY.startTime;
                        if ("largest-contentful-paint" === rY.entryType) YY = Math.max(rY.startTime - PD(), 0), OY.l(rY), DY = [rY];
                        else if ("interaction-contentful-paint" === rY.entryType) {
                          const AY = rY;
                          if (!RY.navigationId) continue;
                          if ("interactionId" in AY && AY.interactionId != RY.navigationInteractionId) continue;
                          FY = AY.largestContentfulPaint?.renderTime || 0, YY = Math.max(FY - rY.startTime, 0), AY.largestContentfulPaint && (OY.l(AY.largestContentfulPaint), DY = [AY.largestContentfulPaint])
                        }
                        FY < IY.firstHiddenTime && (RY.value = YY, RY.entries = DY, AY())
                      }
                    },
                    uY = ["largest-contentful-paint"];
                  FY && uY.push("interaction-contentful-paint", "soft-navigation");
                  const sY = FF(uY, vY);
                  if (sY) {
                    AY = xD(YY, RY, eF, rY.reportAllChanges);
                    const IY = ["keydown", "click", "visibilitychange"],
                      OY = YY => {
                        if (YY.isTrusted && !DY) {
                          const YY = RY.id;
                          VF((() => {
                            if (!DY) {
                              if (!FY) {
                                sY.disconnect();
                                for (const YY of IY) removeEventListener(YY, OY, {
                                  capture: !0
                                })
                              }
                              YY === RY.id && (DY = !0, AY(!0))
                            }
                          }))
                        }
                      };
                    for (const YY of IY) addEventListener(YY, OY, {
                      capture: !0
                    });
                    GD((FY => {
                      gY("back-forward-cache", RY.navigationId, RY.navigationInteractionId, RY.navigationURL, kD()), AY = xD(YY, RY, eF, rY.reportAllChanges), nD((() => {
                        RY.value = performance.now() - FY.timeStamp, DY = !0, AY(!0)
                      }))
                    }))
                  }
                }))
              }((rY => {
                YY((YY => {
                  let rY = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: YY.value
                  };
                  if (YY.entries.length) {
                    const AY = YY.entries.at(-1),
                      IY = YY => YY.name === AY.url && (YY.requestStart || YY.startTime) <= AY.startTime,
                      RY = AY.url && (BF.findLast(IY) || performance.getEntriesByType("resource").findLast(IY));
                    let OY;
                    rY.target = FY.get(AY), rY.lcpEntry = AY, AY.url && (rY.url = AY.url), RY && (rY.lcpResourceEntry = RY);
                    let gY = 0,
                      aY = 0;
                    if ("soft-navigation" !== YY.navigationType ? (OY = JD(), gY = OY?.activationStart ?? 0, aY = OY?.responseStart ?? 0) : (gY = YY.navigationStartTime || 0, OY = DY.u?.get(YY.navigationId)), OY) {
                      const DY = Math.max(0, aY - gY),
                        FY = Math.max(DY, RY ? (RY.requestStart || RY.startTime) - gY : 0),
                        AY = Math.min(YY.value, Math.max(FY, RY ? RY.responseEnd - gY : 0));
                      rY = {
                        ...rY,
                        timeToFirstByte: DY,
                        resourceLoadDelay: FY - DY,
                        resourceLoadDuration: AY - FY,
                        elementRenderDelay: YY.value - AY,
                        navigationEntry: OY
                      }
                    }
                  }
                  return Object.assign(YY, {
                    attribution: rY
                  })
                })(rY))
              }), rY)
          }((YY => {
            var rY;
            const {
              elementRenderDelay: DY,
              resourceLoadDelay: FY,
              resourceLoadDuration: AY,
              timeToFirstByte: IY,
              target: RY,
              url: OY,
              lcpResourceEntry: gY
            } = YY.attribution, aY = this.buildInitialValues(YY);
            this.addIfPresent(aY, "element_render_delay", DY), this.addIfPresent(aY, "resource_load_delay", FY), this.addIfPresent(aY, "resource_load_duration", AY), this.addIfPresent(aY, zF, IY);
            const vY = this.buildInitialContext(YY);
            this.addIfPresent(vY, "element", RY), (null === (rY = this.webVitalConfig) || void 0 === rY ? void 0 : rY.trackAttributionSources) && (this.addIfPresent(vY, "resource_url", OY), this.addIfPresent(vY, "resource_delivery_type", null === gY || void 0 === gY ? void 0 : gY.deliveryType), this.addIfPresent(vY, "resource_initiator_type", null === gY || void 0 === gY ? void 0 : gY.initiatorType)), this.pushMeasurement(aY, vY)
          }), {
            reportAllChanges: null === (YY = this.webVitalConfig) || void 0 === YY ? void 0 : YY.reportAllChanges
          })
        }
        measureTTFB() {
          var YY;
          ! function(YY) {
            ! function(YY) {
              let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const DY = AF(rY);
              let FY = DF("TTFB"),
                AY = xD(YY, FY, cF, rY.reportAllChanges);
              KF((() => {
                const IY = JD();
                if (IY) {
                  const RY = IY.responseStart;
                  FY.value = Math.max(RY - PD(), 0), FY.entries = [IY], AY(!0), GD((() => {
                    FY = DF("TTFB", 0, "back-forward-cache", FY.navigationId, FY.navigationInteractionId, FY.navigationURL, kD()), AY = xD(YY, FY, cF, rY.reportAllChanges), AY(!0)
                  })), DY && FF(["soft-navigation"], (DY => {
                    DY.forEach((DY => {
                      DY.navigationId && (FY = DF("TTFB", 0, "soft-navigation", DY.navigationId, DY.interactionId, DY.name, DY.startTime), FY.entries = [DY], AY = xD(YY, FY, cF, rY.reportAllChanges), AY(!0))
                    }))
                  }), rY)
                }
              }))
            }((rY => {
              YY((YY => {
                const rY = YY.entries[0];
                let DY = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: rY
                };
                if (YY.entries.length && rY instanceof PerformanceNavigationTiming) {
                  const FY = rY.activationStart || 0,
                    AY = Math.max((rY.workerStart || rY.fetchStart || 0) - FY, 0),
                    IY = Math.max(rY.domainLookupStart - FY, 0),
                    RY = Math.max(rY.connectStart - FY, 0),
                    OY = Math.max(rY.connectEnd - FY, 0);
                  DY = {
                    waitingDuration: AY,
                    cacheDuration: IY - AY,
                    dnsDuration: RY - IY,
                    connectionDuration: OY - RY,
                    requestDuration: YY.value - OY,
                    navigationEntry: rY
                  }
                }
                return Object.assign(YY, {
                  attribution: DY
                })
              })(rY))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((YY => {
            const {
              dnsDuration: rY,
              connectionDuration: DY,
              requestDuration: FY,
              waitingDuration: AY,
              cacheDuration: IY
            } = YY.attribution, RY = this.buildInitialValues(YY);
            this.addIfPresent(RY, "dns_duration", rY), this.addIfPresent(RY, "connection_duration", DY), this.addIfPresent(RY, "request_duration", FY), this.addIfPresent(RY, "waiting_duration", AY), this.addIfPresent(RY, "cache_duration", IY);
            const OY = this.buildInitialContext(YY);
            this.pushMeasurement(RY, OY)
          }), {
            reportAllChanges: null === (YY = this.webVitalConfig) || void 0 === YY ? void 0 : YY.reportAllChanges
          })
        }
        buildInitialValues(YY) {
          return {
            [YY.name.toLowerCase()]: YY.value,
            delta: YY.delta
          }
        }
        buildInitialContext(YY) {
          var rY;
          const DY = null !== (rY = Yr("com.grafana.faro.lastNavigationId", UY)) && void 0 !== rY ? rY : jD;
          return {
            id: YY.id,
            rating: YY.rating,
            navigation_type: YY.navigationType,
            navigation_entry_id: DY
          }
        }
        pushMeasurement(YY, rY) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: YY
          }, {
            context: rY
          })
        }
        addIfPresent(YY, rY, DY) {
          DY && (YY[rY] = DY)
        }
        addNumberIfDefined(YY, rY, DY) {
          void 0 !== DY && (YY[rY] = DY)
        }
      },
      CF = class extends rD {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = DD
        }
        initialize() {
          this.logDebug("Initializing"), new ZF(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const fF = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function jF() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const rY of YY)
        if ("traceparent" === rY.name) {
          if (!fF.test(rY.description)) continue;
          const [, YY, DY] = rY.description.split("-");
          if (null != YY && null != DY) return {
            traceId: YY,
            spanId: DY
          };
          break
        }
    }

    function hF(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: DY,
        monoNow: FY
      } = rY;
      return Math.min(DY, DY - (FY - YY))
    }

    function dF(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [DY, FY] of Object.entries(rY)) {
        const rY = YY[DY];
        return null != rY && (HY(FY) ? FY.includes(rY) : rY === FY)
      }
      return !0
    }

    function JF(YY) {
      const {
        connectEnd: rY,
        connectStart: DY,
        decodedBodySize: FY,
        domainLookupEnd: AY,
        domainLookupStart: IY,
        duration: RY,
        encodedBodySize: OY,
        fetchStart: gY,
        initiatorType: aY,
        name: vY,
        nextHopProtocol: uY,
        redirectEnd: sY,
        redirectStart: iY,
        renderBlockingStatus: yY,
        requestStart: QY,
        responseEnd: oY,
        responseStart: WY,
        responseStatus: EY,
        secureConnectionStart: mY,
        transferSize: VY,
        workerStart: SY
      } = YY;
      return {
        name: vY,
        httpHost: wF(vY),
        duration: bF(RY),
        tcpHandshakeTime: bF(rY - DY),
        dnsLookupTime: bF(AY - IY),
        tlsNegotiationTime: bF(rY - mY),
        responseStatus: bF(EY),
        redirectTime: bF(sY - iY),
        requestTime: bF(WY - QY),
        responseTime: bF(oY - WY),
        fetchTime: bF(oY - gY),
        serviceWorkerTime: bF(SY > 0 ? gY - SY : 0),
        decodedBodySize: bF(FY),
        encodedBodySize: bF(OY),
        cacheHitStatus: function() {
          let YY = "fullLoad";
          0 === VY ? FY > 0 && (YY = "cache") : null != EY ? 304 === EY && (YY = "conditionalFetch") : OY > 0 && VY < OY && (YY = "conditionalFetch");
          return YY
        }(),
        renderBlockingStatus: bF(yY),
        protocol: uY,
        initiatorType: aY,
        visibilityState: document.visibilityState,
        ttfb: bF(WY - QY),
        transferSize: bF(VY)
      }
    }

    function MF(YY) {
      const {
        activationStart: rY,
        domComplete: DY,
        domContentLoadedEventEnd: FY,
        domContentLoadedEventStart: AY,
        domInteractive: IY,
        fetchStart: RY,
        loadEventEnd: OY,
        loadEventStart: gY,
        responseStart: aY,
        type: vY
      } = YY, uY = function() {
        var YY;
        return null != (null === (YY = performance.timing) || void 0 === YY ? void 0 : YY.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return vr(vr({}, JF(YY)), {}, {
        pageLoadTime: bF(DY - RY),
        documentParsingTime: bF(uY ? IY - uY : null),
        domProcessingTime: bF(DY - IY),
        domContentLoadHandlerTime: bF(FY - AY),
        onLoadTime: bF(OY - gY),
        ttfb: bF(Math.max(aY - (null !== rY && void 0 !== rY ? rY : 0), 0)),
        type: vY
      })
    }

    function wF(YY) {
      try {
        return new URL(YY).host || jD
      } catch (rY) {
        return jD
      }
    }

    function bF(YY) {
      return null == YY ? jD : "number" === typeof YY ? Math.round(YY > 0 ? YY : 0).toString() : YY.toString()
    }
    const XF = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function qF(YY, rY, DY, FY, AY, IY, RY) {
      try {
        var OY = YY[IY](RY),
          gY = OY.value
      } catch (YY) {
        return void DY(YY)
      }
      OY.done ? rY(gY) : Promise.resolve(gY).then(FY, AY)
    }

    function pF(YY) {
      return function() {
        var rY = this,
          DY = arguments;
        return new Promise((function(FY, AY) {
          var IY = YY.apply(rY, DY);

          function RY(YY) {
            qF(IY, FY, AY, RY, OY, "next", YY)
          }

          function OY(YY) {
            qF(IY, FY, AY, RY, OY, "throw", YY)
          }
          RY(void 0)
        }))
      }
    }
    const kF = new ED;
    var GF = class extends rD {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = DD
      }
      initialize() {
        var YY = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let rY = !1;
        const DY = () => {
          ! function(YY) {
            if ("complete" === document.readyState) YY();
            else {
              const rY = () => {
                "complete" === document.readyState && (YY(), document.removeEventListener("readystatechange", rY))
              };
              document.addEventListener("readystatechange", rY)
            }
          }(pF((function*() {
            if (rY) return;
            const DY = YY.api.pushEvent,
              {
                faroNavigationId: FY
              } = yield function(YY) {
                let rY;
                const DY = new Promise((YY => {
                  rY = YY
                }));
                return new PerformanceObserver((DY => {
                  var FY;
                  const [AY] = DY.getEntries();
                  if (null == AY || nY(AY.name)) return;
                  const IY = AY.toJSON();
                  let RY = jF(null === IY || void 0 === IY ? void 0 : IY.serverTiming);
                  const OY = null !== (FY = Yr("com.grafana.faro.lastNavigationId", UY)) && void 0 !== FY ? FY : jD,
                    gY = vr(vr({}, MF(IY)), {}, {
                      faroNavigationId: Wr(),
                      faroPreviousNavigationId: OY
                    });
                  rr("com.grafana.faro.lastNavigationId", gY.faroNavigationId, UY), YY("faro.performance.navigation", gY, void 0, {
                    spanContext: RY,
                    timestampOverwriteMs: hF(IY.startTime)
                  }), rY(gY)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), DY
              }(DY);
            rY || null == FY || function(YY, rY, DY, FY) {
              const AY = FY.trackResources;
              new PerformanceObserver((FY => {
                const IY = FY.getEntries(),
                  RY = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const OY of IY) {
                  if (nY(OY.name)) continue;
                  null === DY || void 0 === DY || DY.notify({
                    type: "resource"
                  });
                  const FY = OY.toJSON();
                  let IY = jF(null === FY || void 0 === FY ? void 0 : FY.serverTiming);
                  (null == AY && dF(FY, XF) || AY) && rY("faro.performance.resource", vr(vr({}, JF(FY)), {}, {
                    faroNavigationId: YY,
                    faroResourceId: Wr()
                  }), void 0, {
                    spanContext: IY,
                    timestampOverwriteMs: hF(FY.startTime, RY)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(FY, DY, kF, YY.config)
          })))
        };
        this.cancelInitialization = () => {
          rY = !0, document.removeEventListener("prerenderingchange", DY)
        }, document.prerendering ? document.addEventListener("prerenderingchange", DY, {
          once: !0
        }) : DY()
      }
      destroy() {
        var YY;
        null === (YY = this.cancelInitialization) || void 0 === YY || YY.call(this), this.cancelInitialization = void 0
      }
    };
    const xF = "data-faro-user-action-name",
      nF = xF.replace(/-name$/, "-timeout"),
      PF = 1e3;

    function UF(YY) {
      return `data-${(YY.startsWith("data-")?YY.slice(5):YY).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function LF(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qr;
      if (void 0 === YY) return rY;
      let FY = NaN;
      try {
        FY = "string" === typeof YY && "" === YY.trim() ? NaN : Number(YY)
      } catch (AY) {}
      return !Number.isFinite(FY) || FY <= 0 ? (DY(`initialActivityTimeout must be a finite number greater than zero; using ${rY} ms`), rY) : FY > 1e3 ? (DY(`initialActivityTimeout cannot exceed ${PF} ms; clamping to the maximum`), PF) : FY
    }

    function tF(YY, rY, DY) {
      return void 0 !== YY && window.clearTimeout(YY), window.setTimeout((() => {
        rY()
      }), DY)
    }

    function YA(YY) {
      return YY.type === WD
    }
    let rA, DA;

    function FA() {
      return rA || (rA = new ED), DA || (DA = new MutationObserver(((YY, rY) => {
        rA.notify({
          type: "dom-mutation"
        })
      })), DA.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), rA
    }
    const AA = "fetch",
      IA = "xhr";
    let RA, OA, gA, aA, vA = !1;

    function uA() {
      if (RA) return RA;

      function YY(YY) {
        RA.notify({
          type: oD,
          request: YY
        })
      }

      function rY(YY) {
        RA.notify({
          type: WD,
          request: YY
        })
      }
      return RA = new ED, vA || (! function(YY) {
        let {
          onRequestEnd: rY,
          onRequestStart: DY
        } = YY;
        gA || (gA = window.fetch);
        window.fetch = function() {
          var YY, FY;
          const AY = null !== (YY = PY(arguments[0])) && void 0 !== YY ? YY : "",
            IY = nY(AY),
            RY = (null !== (FY = arguments[1]) && void 0 !== FY ? FY : {}).method,
            OY = Wr();
          return IY || DY({
            url: AY,
            method: RY,
            requestId: OY,
            apiType: AA
          }), gA.apply(this, arguments).then((YY => (IY || rY({
            url: AY,
            method: RY,
            requestId: OY,
            apiType: AA
          }), YY))).catch((YY => {
            throw IY || rY({
              url: AY,
              method: RY,
              requestId: OY,
              apiType: AA
            }), YY
          }))
        }
      }({
        onRequestStart: YY,
        onRequestEnd: rY
      }), function(YY) {
        let {
          onRequestStart: rY,
          onRequestEnd: DY
        } = YY;
        OA || (OA = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const YY = arguments[1],
            FY = nY(YY),
            AY = arguments[0],
            IY = Wr();
          this.addEventListener("loadstart", (function() {
            FY || rY({
              url: YY,
              method: AY,
              requestId: IY,
              apiType: IA
            })
          })), this.addEventListener("load", (function() {
            FY || DY({
              url: YY,
              method: AY,
              requestId: IY,
              apiType: IA
            })
          })), this.addEventListener("error", (function() {
            FY || DY({
              url: YY,
              method: AY,
              requestId: IY,
              apiType: IA
            })
          })), this.addEventListener("abort", (function() {
            FY || DY({
              url: YY,
              method: AY,
              requestId: IY,
              apiType: IA
            })
          })), OA.apply(this, arguments)
        }
      }({
        onRequestStart: YY,
        onRequestEnd: rY
      }), vA = !0), RA
    }
    let sA, iA = !1;
    let yA = function(YY) {
      return YY[YY.Started = 0] = "Started", YY[YY.Halted = 1] = "Halted", YY[YY.Cancelled = 2] = "Cancelled", YY[YY.Ended = 3] = "Ended", YY
    }({});
    var QA = class {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = YY, this.logDebug = rY, this.initialActivityTimeout = DY, this.http = uA(), this.dom = FA(), this.perf = (aA || (aA = new ED), iA || (sA = kF.subscribe((YY => {
          "resource" === YY.type && aA.notify({
            type: "resource-entry"
          })
        })), iA = !0), aA), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new ED).merge(this.http, this.dom, this.perf).takeWhile((() => [yA.Started, yA.Halted].includes(this.userAction.getState()))).filter((YY => !!(this.userAction.getState() !== yA.Halted || YA(YY) && this.runningRequests.has(YY.request.requestId)))).subscribe((YY => {
          (function(YY) {
            return YY.type === oD
          })(YY) && this.runningRequests.set(YY.request.requestId, YY.request), YA(YY) && this.runningRequests.delete(YY.request.requestId), YA(YY) ? this.userAction.getState() === yA.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((YY => [yA.Ended, yA.Cancelled].includes(YY))).first().subscribe((() => this.cleanup())), this.startupTid = tF(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === yA.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === yA.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = tF(this.haltTid, (() => {
          this.userAction.getState() === yA.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var YY, rY;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (YY = this.allMonitorsSub) || void 0 === YY || YY.unsubscribe(), null === (rY = this.stateSub) || void 0 === rY || rY.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(YY) {
        void 0 !== YY && window.clearTimeout(YY)
      }
    };

    function oA(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qr;
      var DY;
      const {
        api: FY,
        config: AY,
        internalLogger: IY
      } = YY, RY = LF(null === (DY = AY.userActionsInstrumentation) || void 0 === DY ? void 0 : DY.initialActivityTimeout, 100, rY);
      return {
        processUserEvent: function(YY) {
          var rY, DY;
          const IY = null !== (rY = null === (DY = AY.userActionsInstrumentation) || void 0 === DY ? void 0 : DY.dataAttributeName) && void 0 !== rY ? rY : xF,
            RY = YY.target;
          if (!(RY instanceof Element)) return;
          const OY = function(YY, rY) {
              let DY = YY;
              for (; DY;) {
                if (DY.hasAttribute(rY)) return DY;
                DY = DY.parentElement
              }
              return null
            }(RY, UF(IY)),
            gY = function(YY, rY) {
              if (!YY) return;
              const DY = function(YY) {
                  return UF(YY).slice(5).replace(/-(.)/g, ((YY, rY) => rY.toUpperCase()))
                }(rY),
                FY = YY.dataset;
              for (const AY in FY)
                if (AY === DY) return FY[AY]
            }(OY, IY);
          if (!OY || !gY) return;
          const aY = function(YY, rY) {
            const DY = YY.getAttribute(function(YY) {
              const rY = UF(YY);
              return rY.endsWith("-name") ? `${rY.slice(0,-5)}-timeout` : `${rY}-timeout`
            }(rY));
            return null === DY ? void 0 : Number(DY)
          }(OY, IY);
          FY.startUserAction(gY, {}, {
            triggerName: YY.type,
            initialActivityTimeout: aY
          })
        },
        processUserActionStarted: function(YY, DY) {
          const FY = YY,
            AY = LF(DY, RY, rY);
          new QA(FY, IY.debug, AY).attach()
        }
      }
    }
    const WA = "user_action_start",
      EA = {
        Normal: "normal",
        Critical: "critical"
      };
    var mA = class {
        constructor() {
          this.buffer = []
        }
        addItem(YY) {
          this.buffer.push(YY)
        }
        flushBuffer(YY) {
          if (KY(YY))
            for (const rY of this.buffer) YY(rY);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      VA = class extends ED {
        constructor(YY) {
          let {
            name: rY,
            parentId: DY,
            trigger: FY,
            transports: AY,
            attributes: IY,
            trackUserActionsExcludeItem: RY,
            importance: OY = EA.Normal,
            pushEvent: gY
          } = YY;
          super(), this.name = rY, this.attributes = IY, this.id = Wr(), this.trigger = FY, this.parentId = null !== DY && void 0 !== DY ? DY : this.id, this.trackUserActionsExcludeItem = RY, this.importance = OY, this._pushEvent = gY, this._itemBuffer = new mA, this._transports = AY, this._state = 0, this._start()
        }
        addItem(YY) {
          return 0 === this._state && (this._itemBuffer.addItem(YY), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = sr(), this._startTimeMono = ir())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((YY => {
            this._transports.execute(YY)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const YY = sr(),
            rY = ir() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((YY => {
            if (function(YY, rY) {
                return (null === rY || void 0 === rY ? void 0 : rY(YY)) || "measurement" === YY.type && "web-vitals" === YY.payload.type
              }(YY, this.trackUserActionsExcludeItem)) return void this._transports.execute(YY);
            const rY = Lr(Lr({}, YY), {}, {
              payload: Lr(Lr({}, YY.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(rY)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Lr({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: YY.toString(),
            userActionDuration: rY.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, hr(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: YY => (YY.action = {
              id: this.id,
              name: this.name
            }, YY)
          })
        }
        getState() {
          return this._state
        }
      };
    const SA = new ED;

    function lA(YY, rY) {
      return !!YY && (0 === (null === YY || void 0 === YY ? void 0 : YY.getState()) && (YY.addItem(rY), !0))
    }
    var TA = class extends rD {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = DD
        }
        initialize() {
          const {
            processUserEvent: YY,
            processUserActionStarted: rY
          } = oA(QY, (YY => this.logWarn(YY)));
          this._processUserEvent = YY, this._processKeydown = rY => {
            [" ", "Enter"].includes(rY.key) && YY(rY)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = SA.subscribe((YY => {
            let {
              type: DY,
              userAction: FY,
              initialActivityTimeout: AY
            } = YY;
            "user_action_start" === DY && rY(FY, AY)
          }))
        }
        destroy() {
          var YY;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (YY = this._userActionSub) || void 0 === YY || YY.unsubscribe()
        }
      },
      eA = class extends rD {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = DD, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(YY) {
          const rY = {
            blockedURI: YY.blockedURI,
            columnNumber: YY.columnNumber,
            disposition: YY.disposition,
            documentURI: YY.documentURI,
            effectiveDirective: YY.effectiveDirective,
            lineNumber: YY.lineNumber,
            originalPolicy: YY.originalPolicy,
            referrer: YY.referrer,
            sample: YY.sample,
            sourceFile: YY.sourceFile,
            statusCode: YY.statusCode,
            violatedDirective: YY.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", hr(rY))
        }
      };
    var NA = class extends ED {
      constructor(YY, rY) {
        var DY, FY, AY, IY;
        super(), this._tracking = !1, this.eventsObservable = YY, this._options = {
          inactivityMs: null !== (DY = null === rY || void 0 === rY ? void 0 : rY.inactivityMs) && void 0 !== DY ? DY : 100,
          drainTimeoutMs: null !== (FY = null === rY || void 0 === rY ? void 0 : rY.drainTimeoutMs) && void 0 !== FY ? FY : 1e4,
          isOperationStart: null !== (AY = null === rY || void 0 === rY ? void 0 : rY.isOperationStart) && void 0 !== AY ? AY : () => {},
          isOperationEnd: null !== (IY = null === rY || void 0 === rY ? void 0 : rY.isOperationEnd) && void 0 !== IY ? IY : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((YY => {
          var rY;
          this._lastEventTime = ir(), null === (rY = this._currentEvents) || void 0 === rY || rY.push(YY);
          const DY = this._options.isOperationStart(YY);
          var FY;
          DY && (null === (FY = this._activeOperations) || void 0 === FY || FY.set(DY, !0));
          const AY = this._options.isOperationEnd(YY);
          var IY;
          AY && (null === (IY = this._activeOperations) || void 0 === IY || IY.delete(AY));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = ir(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let YY;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), YY = this.hasActiveOperations() ? ir() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: YY
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = BA(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = BA(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(YY) {
        YY && clearTimeout(YY)
      }
    };

    function BA(YY, rY, DY) {
      return YY && clearTimeout(YY), YY = setTimeout((() => {
        rY()
      }), DY)
    }
    let cA;
    const KA = new Set,
      HA = new Map;
    let zA, ZA, CA, fA, jA, hA, dA, JA, MA = !1;
    var wA = class extends rD {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = DD
      }
      initialize() {
        const YY = uA(),
          rY = FA(),
          DY = function() {
            function YY(YY, rY) {
              const DY = null !== rY && void 0 !== rY ? rY : location.href;
              DY !== ZA && (zA.notify({
                type: "url-change",
                from: ZA,
                to: DY,
                trigger: YY
              }), ZA = DY)
            }
            if (zA || (zA = new ED, ZA = location.href), !MA)
              if ("navigation" in window && "NavigateEvent" in window) {
                dA = rY => {
                  try {
                    const DY = null === rY || void 0 === rY ? void 0 : rY.destination;
                    (null === DY || void 0 === DY ? void 0 : DY.sameDocument) && "string" === typeof DY.url && YY("navigate", DY.url)
                  } catch (DY) {}
                }, window.navigation.addEventListener("navigate", dA);
                const rY = window.NavigateEvent;
                rY && rY.prototype && "function" === typeof rY.prototype.intercept && (JA || (JA = rY.prototype.intercept), rY.prototype.intercept = function(rY) {
                  try {
                    const rY = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      DY = null === this || void 0 === this ? void 0 : this.destination;
                    rY && DY && !1 === DY.sameDocument && "string" === typeof DY.url && YY("navigate-intercept", DY.url)
                  } catch (DY) {}
                  return JA.call(this, rY)
                }), MA = !0
              } else CA || (CA = window.history.pushState), window.history.pushState = function() {
                for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
                const AY = CA.apply(window.history, DY);
                return YY("pushState"), AY
              }, fA || (fA = window.history.replaceState), window.history.replaceState = function() {
                for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
                const AY = fA.apply(window.history, DY);
                return YY("replaceState"), AY
              }, jA = () => YY("popstate"), hA = () => YY("hashchange"), window.addEventListener("popstate", jA), window.addEventListener("hashchange", hA), MA = !0;
            return zA
          }(),
          FY = (AY = ["pointerdown", "keydown"], cA || (cA = new ED), AY.forEach((YY => {
            if (!KA.has(YY)) {
              const rY = () => {
                cA.notify({
                  type: "interaction",
                  name: YY
                })
              };
              window.addEventListener(YY, rY), KA.add(YY), HA.set(YY, rY)
            }
          })), cA);
        var AY;
        const IY = new NA((new ED).merge(YY, rY, DY), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: YY => function(YY) {
            return YY.type === oD
          }(YY) ? YY.request.requestId : void 0,
          isOperationEnd: YY => function(YY) {
            return YY.type === WD
          }(YY) ? YY.request.requestId : void 0
        });
        IY.filter((YY => "tracking-ended" === YY.message)).subscribe((YY => {
          var rY, DY;
          if ((null === (rY = YY.events) || void 0 === rY ? void 0 : rY.some((YY => "url-change" === YY.type))) && (null === (DY = YY.events) || void 0 === DY ? void 0 : DY.some((YY => "dom-mutation" === YY.type)))) {
            var FY;
            const rY = null === (FY = YY.events) || void 0 === FY ? void 0 : FY.find((YY => "url-change" === YY.type));
            QY.api.pushEvent("faro.navigation", {
              fromUrl: null === rY || void 0 === rY ? void 0 : rY.from,
              toUrl: null === rY || void 0 === rY ? void 0 : rY.to,
              sameDocument: String(!0),
              duration: YY.duration
            })
          }
        })), FY.subscribe((() => {
          IY.startTracking()
        }))
      }
    };

    function bA() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const rY = [new TA, new fD, new CF, new FD, new hD, new wA];
      return !1 !== YY.enablePerformanceInstrumentation && rY.unshift(new GF), !1 !== YY.enableContentSecurityPolicyInstrumentation && rY.push(new eA), !1 !== YY.captureConsole && rY.push(new ZD), rY
    }
    var XA = DY(6255);
    let qA, pA;

    function kA() {
      const YY = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return qA === YY && pA || (pA = new XA.UAParser(YY).getResult(), qA = YY), pA
    }
    const GA = () => {
        const {
          browser: YY,
          os: rY,
          ua: DY
        } = kA(), {
          name: FY,
          version: AY
        } = YY, {
          name: IY,
          version: RY
        } = rY, OY = navigator.language, gY = DY.includes("Mobi"), aY = function() {
          if (!FY || !AY) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== FY && void 0 !== FY ? FY : jD,
            version: null !== AY && void 0 !== AY ? AY : jD,
            os: `${null!==IY&&void 0!==IY?IY:jD} ${null!==RY&&void 0!==RY?RY:jD}`,
            userAgent: null !== DY && void 0 !== DY ? DY : jD,
            language: null !== OY && void 0 !== OY ? OY : jD,
            mobile: gY,
            brands: null !== aY && void 0 !== aY ? aY : jD,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      xA = () => {
        const {
          name: YY,
          version: rY
        } = kA().os;
        if (!YY && !rY) return {};
        const DY = {};
        return YY && (DY.name = YY), rY && (DY.version = rY), {
          os: DY
        }
      };

    function nA(YY) {
      var rY, DY, FY;
      return {
        id: null !== (rY = null === (DY = QY.config) || void 0 === DY || null === (DY = DY.sessionTracking) || void 0 === DY || null === (FY = DY.generateSessionId) || void 0 === FY ? void 0 : FY.call(DY)) && void 0 !== rY ? rY : Wr(),
        attributes: YY
      }
    }
    const PA = () => ({
      sdk: {
        name: "faro-web",
        version: DD
      }
    });
    var UA = class extends YD {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let LA = function(YY) {
      return YY.EXCEPTION = "exception", YY.LOG = "log", YY.MEASUREMENT = "measurement", YY.TRACE = "trace", YY.EVENT = "event", YY
    }({});
    const tA = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function YI(YY, rY) {
      var DY, FY;
      if (void 0 === rY) return YY;
      if (void 0 === YY) return {
        resourceSpans: rY
      };
      const AY = null === (DY = YY.resourceSpans) || void 0 === DY ? void 0 : DY[0];
      if (void 0 === AY) return YY;
      const IY = (null === AY || void 0 === AY ? void 0 : AY.scopeSpans) || [],
        RY = (null === rY || void 0 === rY || null === (FY = rY[0]) || void 0 === FY ? void 0 : FY.scopeSpans) || [];
      return Lr(Lr({}, YY), {}, {
        resourceSpans: [Lr(Lr({}, AY), {}, {
          scopeSpans: [...IY, ...RY]
        })]
      })
    }

    function rI(YY) {
      let rY = {
        meta: {}
      };
      return void 0 !== YY[0] && (rY.meta = YY[0].meta), YY.forEach((YY => {
        switch (YY.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const DY = tA[YY.type],
              FY = rY[DY];
            rY = Lr(Lr({}, rY), {}, {
              [DY]: void 0 === FY ? [YY.payload] : [...FY, YY.payload]
            });
            break
          }
          case "trace":
            rY = Lr(Lr({}, rY), {}, {
              traces: YI(rY.traces, YY.payload.resourceSpans)
            })
        }
      })), rY
    }
    var DI = class extends UA {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = YY, this.name = "@grafana/faro-web-sdk:transport-console", this.version = DD
      }
      send(YY) {
        var rY;
        return this.unpatchedConsole[null !== (rY = this.options.level) && void 0 !== rY ? rY : mD.DEBUG]("New event", rI([YY]))
      }
    };
    const FI = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      AI = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      II = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      RI = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      OI = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      gI = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function aI(YY) {
      let {
        weekday: rY,
        day: DY,
        month: FY,
        year: AY,
        hour: IY,
        minute: RY,
        second: OY
      } = YY;
      if (AY < 1900 || DY < 1 || IY > 23 || RY > 59 || OY > 60) return;
      const gY = 60 === OY,
        aY = new Date(0);
      return aY.setUTCFullYear(AY, FY, DY), aY.setUTCHours(IY, RY, gY ? 59 : OY, 0), aY.getUTCDay() === rY && aY.getUTCDate() === DY && aY.getUTCMonth() === FY && aY.getUTCFullYear() === AY && aY.getUTCHours() === IY && aY.getUTCMinutes() === RY && aY.getUTCSeconds() === (gY ? 59 : OY) ? aY.getTime() + (gY ? 1e3 : 0) : void 0
    }
    var vI = class {
      constructor(YY) {
        this.options = YY, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var YY = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const rY = this.sequence++;
        let DY = !1;
        return {
          deliver: function() {
            var DY = pF((function*(DY) {
              const FY = YY.options.getNow();
              let AY, IY = 0;
              for (;;) {
                var RY, OY, gY;
                const aY = YY.options.retry.maxAttempts - IY,
                  vY = yield YY.runAttempt((() => DY(aY, YY.unloading)), IY > 0);
                if (IY += vY.attemptsMade, "success" === vY.kind) return {
                  kind: "success",
                  attempts: IY,
                  elapsedTimeMs: YY.options.getNow() - FY
                };
                if (AY = vY.failure, "terminal" === vY.kind || YY.unloading) return {
                  kind: "terminal",
                  attempts: IY,
                  elapsedTimeMs: YY.options.getNow() - FY,
                  failure: AY
                };
                if (IY >= YY.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: IY,
                  elapsedTimeMs: YY.options.getNow() - FY,
                  failure: AY,
                  reason: "retries-exhausted"
                };
                if (null != vY.retryAfterMs && vY.retryAfterMs > YY.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: IY,
                  elapsedTimeMs: YY.options.getNow() - FY,
                  failure: AY,
                  reason: "retry-after-too-long"
                };
                const uY = Math.min(null !== (RY = vY.retryAfterMs) && void 0 !== RY ? RY : YY.options.retry.initialBackoffMs * Math.pow(YY.options.retry.backoffMultiplier, IY - 1), YY.options.retry.maxBackoffMs);
                if (null === (OY = (gY = YY.options).onRetry) || void 0 === OY || OY.call(gY, uY, IY + 1), yield YY.waitForTurn(rY, uY)) {
                  const rY = YY.options.retry.maxAttempts - IY,
                    AY = yield YY.runAttempt((() => DY(rY, !0)));
                  return IY += AY.attemptsMade, {
                    kind: "success" === AY.kind ? "success" : "terminal",
                    attempts: IY,
                    elapsedTimeMs: YY.options.getNow() - FY,
                    failure: "success" === AY.kind ? void 0 : AY.failure
                  }
                }
              }
            }));
            return function(YY) {
              return DY.apply(this, arguments)
            }
          }(),
          release: () => {
            DY || (DY = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const YY = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const rY of YY) rY.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((DY, FY) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const rY = () => {
                this.inProgress--, this.runNextAttempt()
              };
              YY().then((YY => {
                rY(), DY(YY)
              }), (YY => {
                rY(), FY(YY)
              }))
            },
            isRedelivery: rY
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const YY = this.options.getNow(),
            rY = this.attemptQueue.findIndex((rY => {
              let {
                isRedelivery: DY
              } = rY;
              return this.unloading || !DY || YY >= this.nextSendAt
            }));
          if (rY < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - YY)));
          const [DY] = this.attemptQueue.splice(rY, 1);
          DY.isRedelivery && !this.unloading && (this.nextSendAt = YY + 1), DY.run()
        }
      }
      waitForTurn(YY, rY) {
        const DY = Math.min(rY * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((rY => {
          this.waiting.push({
            sequence: YY,
            readyAt: this.options.getNow() + DY,
            resolve: rY
          }), this.waiting.sort(((YY, rY) => YY.readyAt === rY.readyAt ? YY.sequence - rY.sequence : YY.readyAt - rY.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const YY = this.waiting[0],
          rY = YY.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const rY = this.waiting.indexOf(YY);
          rY >= 0 && this.waiting.splice(rY, 1), YY.resolve(!1), this.scheduleNext()
        }), Math.max(0, rY - this.options.getNow()))
      }
    };

    function uI(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if ({}.hasOwnProperty.call(YY, FY)) {
            if (rY.includes(FY)) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.includes(DY) || {}.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function sI(YY) {
      const {
        size: rY,
        concurrency: DY
      } = YY, FY = [];
      let AY = 0;
      const IY = () => {
        if (AY < DY && FY.length) {
          const {
            producer: YY,
            resolve: rY,
            reject: DY
          } = FY.shift();
          AY++, YY().then((YY => {
            AY--, IY(), rY(YY)
          }), (YY => {
            AY--, IY(), DY(YY)
          }))
        }
      };
      return {
        add: YY => {
          if (FY.length + AY >= rY) throw new Error("Task buffer full");
          return new Promise(((rY, DY) => {
            FY.push({
              producer: YY,
              resolve: rY,
              reject: DY
            }), IY()
          }))
        }
      }
    }
    const iI = ["headers"],
      yI = ["keepalive", "signal"],
      QI = new Set([408, 425, 429, 500, 502, 503, 504]),
      oI = new Set([429, 503]);
    let WI = 0,
      EI = 0;
    var mI = class extends Error {};
    var VI = class extends UA {
      constructor(YY) {
        var rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY;
        super(), this.options = YY, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = DD, this.pendingCustomSends = 0, this.getNow = null !== (rY = YY.getNow) && void 0 !== rY ? rY : Date.now, this.requestTimeoutMs = null !== (DY = YY.requestTimeoutMs) && void 0 !== DY ? DY : 1e4, this.compressionEnabled = null !== (FY = YY.requestCompression) && void 0 !== FY && FY && "undefined" !== typeof CompressionStream, YY.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new vI({
          bufferSize: null !== (AY = YY.bufferSize) && void 0 !== AY ? AY : 30,
          concurrency: null !== (IY = YY.concurrency) && void 0 !== IY ? IY : 5,
          retry: {
            maxAttempts: null !== (RY = null === (OY = YY.retry) || void 0 === OY ? void 0 : OY.maxAttempts) && void 0 !== RY ? RY : 3,
            initialBackoffMs: null !== (gY = null !== (aY = null === (vY = YY.retry) || void 0 === vY ? void 0 : vY.initialBackoffMs) && void 0 !== aY ? aY : YY.defaultRateLimitBackoffMs) && void 0 !== gY ? gY : 1e3,
            maxBackoffMs: null !== (uY = null === (sY = YY.retry) || void 0 === sY ? void 0 : sY.maxBackoffMs) && void 0 !== uY ? uY : 3e4,
            backoffMultiplier: null !== (iY = null === (yY = YY.retry) || void 0 === yY ? void 0 : yY.backoffMultiplier) && void 0 !== iY ? iY : 2
          },
          getNow: this.getNow,
          getRandom: null !== (QY = YY.getRandom) && void 0 !== QY ? QY : Math.random,
          onRetry: (YY, rY) => {
            this.logDebug(`Retrying failed request after ${YY}ms. Attempt ${rY}.`)
          }
        }), this.customPromiseBuffer = sI({
          size: null !== (oY = YY.bufferSize) && void 0 !== oY ? oY : 30,
          concurrency: null !== (WY = YY.concurrency) && void 0 !== WY ? WY : 5
        }), this.defaultPromiseBuffer = {
          add: YY => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(YY);
            const rY = this.deliveryQueue.reserve();
            if (!rY) throw new Error("Task buffer full");
            return this.runBufferedTask(rY, YY)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (YY => {
          YY.persisted && this.deliveryQueue.resume()
        })))
      }
      send(YY) {
        var rY = this;
        return pF((function*() {
          const DY = rY.promiseBuffer;
          if (DY !== rY.defaultPromiseBuffer || DY.add !== rY.defaultBufferAdd) {
            rY.pendingCustomSends++;
            try {
              yield DY.add((() => rY.deliver(YY)))
            } catch (FY) {
              rY.logError("Permanent delivery failure", {
                error: FY,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              rY.pendingCustomSends--
            }
          } else yield rY.deliver(YY)
        }))()
      }
      runBufferedTask(YY, rY) {
        return pF((function*() {
          let DY;
          try {
            return yield YY.deliver(pF((function*() {
              return DY = yield rY(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), DY
          } finally {
            YY.release()
          }
        }))()
      }
      deliver(YY) {
        var rY = this;
        return pF((function*() {
          const DY = rY.deliveryQueue.reserve();
          if (DY) try {
            const FY = yield rY.prepareRequest(YY), AY = yield DY.deliver(((YY, DY) => rY.performAttempt(FY, YY, DY)));
            "terminal" === AY.kind && rY.logError("retries-exhausted" === AY.reason ? "Delivery retries exhausted" : "Permanent delivery failure", vr(vr({}, AY.failure), {}, {
              reason: AY.reason,
              attempts: AY.attempts,
              elapsedTimeMs: AY.elapsedTimeMs
            }))
          } catch (FY) {
            rY.logError("Permanent delivery failure", {
              error: FY,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            DY.release()
          } else rY.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var YY;
        return [this.options.url].concat(null !== (YY = this.config.ignoreUrls) && void 0 !== YY ? YY : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(YY) {
        var rY = this;
        return pF((function*() {
          var DY, FY;
          const AY = rI(YY),
            IY = null === (DY = AY.meta.session) || void 0 === DY ? void 0 : DY.id,
            RY = JSON.stringify(AY),
            OY = null !== (FY = rY.options.requestOptions) && void 0 !== FY ? FY : {},
            {
              headers: gY = {}
            } = OY,
            aY = uI(OY, iI),
            {
              keepalive: vY,
              signal: uY
            } = aY,
            sY = uI(aY, yI),
            iY = {};
          for (const [YY, rY] of Object.entries(gY)) iY[YY] = "function" === typeof rY ? yield rY(): rY;
          let yY = RY,
            QY = function(YY) {
              return "undefined" === typeof TextEncoder ? YY.length : (new TextEncoder).encode(YY).byteLength
            }(RY);
          const oY = {};
          return rY.compressionEnabled && (yY = yield rY.compress(RY), QY = yY.size, oY["Content-Encoding"] = "gzip"), {
            bodySize: QY,
            sessionId: IY,
            requestInit: vr({
              method: "POST",
              headers: vr(vr(vr(vr(vr({
                "Content-Type": "application/json"
              }, oY), iY), rY.options.apiKey ? {
                "x-api-key": rY.options.apiKey
              } : {}), IY ? {
                "x-faro-session-id": IY
              } : {}), {}, {
                "Idempotency-Key": Wr(20)
              }),
              body: yY
            }, sY)
          }
        }))()
      }
      performAttempt(YY, rY, DY) {
        var FY = this;
        return pF((function*() {
          var AY;
          const IY = null === (AY = FY.options.requestOptions) || void 0 === AY ? void 0 : AY.signal;
          if (null === IY || void 0 === IY ? void 0 : IY.aborted) return {
            kind: "terminal",
            failure: {
              error: IY.reason
            },
            attemptsMade: 0
          };
          let RY = 0;
          try {
            var OY;
            const AY = yield FY.fetchWithKeepaliveFallback(YY.requestInit, YY.bodySize, !!DY || (null === (OY = FY.options.requestOptions) || void 0 === OY ? void 0 : OY.keepalive), rY, (() => RY++));
            if (FY.handleResponse(AY, YY.sessionId), AY.status >= 200 && AY.status < 300) return {
              kind: "success",
              attemptsMade: RY
            };
            const IY = {
              status: AY.status
            };
            return !QI.has(AY.status) || DY ? {
              kind: "terminal",
              failure: IY,
              attemptsMade: RY
            } : {
              kind: "retry",
              failure: IY,
              attemptsMade: RY,
              retryAfterMs: oI.has(AY.status) ? FY.getRetryAfterDelayMs(AY) : void 0
            }
          } catch (gY) {
            const YY = {
              error: gY
            };
            return (null === IY || void 0 === IY ? void 0 : IY.aborted) || !FY.isFetchNetworkError(gY) || DY ? {
              kind: "terminal",
              failure: YY,
              attemptsMade: RY
            } : {
              kind: "retry",
              failure: YY,
              attemptsMade: RY
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(YY, rY, DY, FY, AY) {
        var IY = this;
        return pF((function*() {
          const RY = IY.getNow(),
            OY = IY.reserveKeepalive(rY, DY);
          try {
            return yield IY.fetchWithTimeout(vr(vr({}, YY), {}, {
              keepalive: OY.keepalive
            }), IY.requestTimeoutMs, AY)
          } catch (aY) {
            var gY;
            if (OY.keepalive && FY > 1 && IY.isFetchNetworkError(aY) && !(aY instanceof mI) && !(null === (gY = IY.options.requestOptions) || void 0 === gY || null === (gY = gY.signal) || void 0 === gY ? void 0 : gY.aborted)) {
              IY.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const rY = IY.requestTimeoutMs - (IY.getNow() - RY);
              return IY.fetchWithTimeout(vr(vr({}, YY), {}, {
                keepalive: !1
              }), rY, AY)
            }
            throw aY
          } finally {
            OY.release()
          }
        }))()
      }
      fetchWithTimeout(YY, rY, DY) {
        var FY = this;
        return pF((function*() {
          var AY;
          const IY = null === (AY = FY.options.requestOptions) || void 0 === AY ? void 0 : AY.signal;
          if (FY.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return DY(), fetch(FY.options.url, vr(vr({}, YY), {}, {
            signal: IY
          }));
          if (rY <= 0) throw new mI("Request timed out");
          const RY = new AbortController,
            OY = () => RY.abort(null === IY || void 0 === IY ? void 0 : IY.reason);
          null === IY || void 0 === IY || IY.addEventListener("abort", OY, {
            once: !0
          });
          let gY = !1;
          const aY = setTimeout((() => {
            gY = !0, RY.abort()
          }), rY);
          try {
            return DY(), yield fetch(FY.options.url, vr(vr({}, YY), {}, {
              signal: RY.signal
            }))
          } catch (vY) {
            if (gY && !(null === IY || void 0 === IY ? void 0 : IY.aborted)) throw new mI("Request timed out");
            throw vY
          } finally {
            clearTimeout(aY), null === IY || void 0 === IY || IY.removeEventListener("abort", OY)
          }
        }))()
      }
      getRetryAfterDelayMs(YY) {
        const rY = YY.headers.get("Retry-After");
        if (!rY) return;
        if (/^\d+$/.test(rY)) {
          const YY = 1e3 * Number(rY);
          return Number.isFinite(YY) ? YY : Number.POSITIVE_INFINITY
        }
        const DY = this.getNow(),
          FY = function(YY, rY) {
            const DY = FI.exec(YY);
            if (DY) {
              const [, YY, rY, FY, AY, IY, RY, OY] = DY;
              return aI({
                weekday: RI.indexOf(YY),
                day: Number(rY),
                month: gI.indexOf(FY),
                year: Number(AY),
                hour: Number(IY),
                minute: Number(RY),
                second: Number(OY)
              })
            }
            const FY = AI.exec(YY);
            if (FY) {
              const [, YY, DY, RY, OY, gY, aY, vY] = FY, uY = new Date(rY);
              if (Number.isNaN(uY.getTime())) return;
              const sY = uY.getUTCFullYear();
              let iY = 100 * Math.floor(sY / 100) + Number(OY);
              iY < sY && (iY += 100);
              const yY = gI.indexOf(RY),
                QY = {
                  month: yY,
                  day: Number(DY),
                  hour: Number(gY),
                  minute: Number(aY),
                  second: Number(vY),
                  millisecond: 0
                },
                oY = {
                  month: uY.getUTCMonth(),
                  day: uY.getUTCDate(),
                  hour: uY.getUTCHours(),
                  minute: uY.getUTCMinutes(),
                  second: uY.getUTCSeconds(),
                  millisecond: uY.getUTCMilliseconds()
                };
              return (iY > sY + 50 || iY === sY + 50 && (IY = oY, ((AY = QY).month - IY.month || AY.day - IY.day || AY.hour - IY.hour || AY.minute - IY.minute || AY.second - IY.second || AY.millisecond - IY.millisecond) > 0)) && (iY -= 100), aI({
                weekday: OI.indexOf(YY),
                day: Number(DY),
                month: yY,
                year: iY,
                hour: Number(gY),
                minute: Number(aY),
                second: Number(vY)
              })
            }
            var AY, IY;
            const RY = II.exec(YY);
            if (!RY) return;
            const [, OY, gY, aY, vY, uY, sY, iY, yY] = RY;
            return aI({
              weekday: RI.indexOf(OY),
              day: Number(null !== aY && void 0 !== aY ? aY : vY),
              month: gI.indexOf(gY),
              year: Number(yY),
              hour: Number(uY),
              minute: Number(sY),
              second: Number(iY)
            })
          }(rY, DY);
        return null == FY ? void 0 : Math.max(0, FY - DY)
      }
      reserveKeepalive(YY, rY) {
        if (!1 === rY || YY > 6e4 || WI + YY > 6e4 || EI >= 9) return {
          keepalive: !1,
          release: qr
        };
        WI += YY, EI++;
        let DY = !1;
        return {
          keepalive: !0,
          release: () => {
            DY || (DY = !0, WI -= YY, EI--)
          }
        }
      }
      handleResponse(YY, rY) {
        202 === YY.status && "invalid" === YY.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), rY), YY.text().catch(qr)
      }
      isFetchNetworkError(YY) {
        return YY instanceof TypeError || YY instanceof mI || YY instanceof DOMException && "AbortError" === YY.name
      }
      compress(YY) {
        return pF((function*() {
          const rY = [],
            DY = new ReadableStream({
              start(rY) {
                rY.enqueue((new TextEncoder).encode(YY)), rY.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: YY,
              value: FY
            } = yield DY.read();
            if (YY) return new Blob(rY);
            rY.push(FY)
          }
        }))()
      }
      extendFaroSession(YY, rY, DY) {
        var FY, AY;
        const IY = YY.sessionTracking;
        if (!(null === IY || void 0 === IY ? void 0 : IY.enabled)) return void rY("Session expired.");
        const {
          fetchUserSession: RY,
          storeUserSession: OY
        } = Xr(IY), gY = null === (FY = this.metas.value.session) || void 0 === FY ? void 0 : FY.id, aY = null === (AY = RY()) || void 0 === AY ? void 0 : AY.sessionId;
        DY && DY === gY && DY === aY ? (Hr({
          fetchUserSession: RY,
          storeUserSession: OY
        })({
          forceSessionExtend: !0
        }), rY("Session expired; created new session.")) : rY("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const SI = () => {
      const YY = window.k6;
      return {
        k6: vr({
          isK6Browser: !0
        }, (null === YY || void 0 === YY ? void 0 : YY.testRunId) && {
          testRunId: null === YY || void 0 === YY ? void 0 : YY.testRunId
        })
      }
    };
    let lI, TI;

    function eI() {
      let {
        generatePageId: YY,
        initialPageMeta: rY
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const DY = location.href;
        return KY(YY) && lI !== DY && (lI = DY, TI = YY(location)), {
          page: vr(vr({
            url: DY
          }, TI ? {
            id: TI
          } : {}), rY)
        }
      }
    }

    function NI() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr,
        rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const DY = kr;
      return rY > 0 && (DY.error = rY >= 1 ? function() {
        for (var rY = arguments.length, FY = new Array(rY), AY = 0; AY < rY; AY++) FY[AY] = arguments[AY];
        YY.error(`${DY.prefix}\n`, ...FY)
      } : qr, DY.warn = rY >= 2 ? function() {
        for (var rY = arguments.length, FY = new Array(rY), AY = 0; AY < rY; AY++) FY[AY] = arguments[AY];
        YY.warn(`${DY.prefix}\n`, ...FY)
      } : qr, DY.info = rY >= 3 ? function() {
        for (var rY = arguments.length, FY = new Array(rY), AY = 0; AY < rY; AY++) FY[AY] = arguments[AY];
        YY.info(`${DY.prefix}\n`, ...FY)
      } : qr, DY.debug = rY >= 4 ? function() {
        for (var rY = arguments.length, FY = new Array(rY), AY = 0; AY < rY; AY++) FY[AY] = arguments[AY];
        YY.debug(`${DY.prefix}\n`, ...FY)
      } : qr), DY
    }
    const BI = "faro",
      cI = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      KI = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function HI(YY) {
      var rY, DY, AY, IY, RY, OY;
      const gY = [],
        vY = NI(YY.unpatchedConsole, YY.internalLoggerLevel);
      YY.transports ? ((YY.url || YY.apiKey) && vY.error('if "transports" is defined, "url" and "apiKey" should not be defined'), gY.push(...YY.transports)) : YY.url ? gY.push(new VI({
        url: YY.url,
        apiKey: YY.apiKey,
        requestCompression: YY.requestCompression
      })) : vY.error('either "url" or "transports" must be defined');
      const {
        dedupe: uY = !0,
        eventDomain: sY = FY,
        globalObjectKey: iY = BI,
        instrumentations: yY = bA(),
        internalLoggerLevel: QY = Gr,
        isolate: oY = !1,
        logArgsSerializer: WY = zD,
        metas: EY = ZI(YY),
        paused: mY = !1,
        preventGlobalExposure: VY = !1,
        unpatchedConsole: SY = tr,
        url: lY,
        experimental: TY
      } = YY, eY = uI(YY, KI), NY = null !== (rY = null === TY || void 0 === TY ? void 0 : TY.trackNavigation) && void 0 !== rY && rY, BY = {
        dataAttributeName: UF(null !== (DY = null === (AY = YY.userActionsInstrumentation) || void 0 === AY ? void 0 : AY.dataAttributeName) && void 0 !== DY ? DY : xF),
        excludeItem: null === (IY = YY.userActionsInstrumentation) || void 0 === IY ? void 0 : IY.excludeItem,
        initialActivityTimeout: LF(null === (RY = YY.userActionsInstrumentation) || void 0 === RY ? void 0 : RY.initialActivityTimeout, 100, (YY => vY.warn(YY)))
      };
      return vr(vr({}, eY), {}, {
        batching: vr(vr({}, cI), YY.batching),
        dedupe: uY,
        globalObjectKey: iY,
        instrumentations: zI(yY, YY),
        internalLoggerLevel: QY,
        isolate: oY,
        logArgsSerializer: WY,
        metas: EY,
        parseStacktrace: QD,
        paused: mY,
        preventGlobalExposure: VY,
        transports: gY,
        unpatchedConsole: SY,
        eventDomain: sY,
        ignoreUrls: [...null !== (OY = YY.ignoreUrls) && void 0 !== OY ? OY : [], ...lY ? [lY] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: vr(vr(vr({}, aY), YY.sessionTracking), CI({
          trackGeolocation: YY.trackGeolocation,
          sessionTracking: YY.sessionTracking
        })),
        userActionsInstrumentation: BY,
        experimental: {
          trackNavigation: NY
        }
      })
    }

    function zI(YY, rY) {
      let {
        experimental: DY
      } = rY;
      var FY;
      const AY = null !== (FY = null === DY || void 0 === DY ? void 0 : DY.trackNavigation) && void 0 !== FY && FY;
      return YY.filter((YY => !("@grafana/faro-web-sdk:instrumentation-navigation" === YY.name && !AY)))
    }

    function ZI(YY) {
      var rY, DY, FY;
      const {
        page: AY,
        generatePageId: IY
      } = null !== (rY = null === YY || void 0 === YY ? void 0 : YY.pageTracking) && void 0 !== rY ? rY : {}, RY = [GA, xA, eI({
        generatePageId: IY,
        initialPageMeta: AY
      }), ...null !== (DY = YY.metas) && void 0 !== DY ? DY : [], PA];
      return cY(null === (FY = window) || void 0 === FY ? void 0 : FY.k6) ? [...RY, SI] : RY
    }

    function CI(YY) {
      let {
        trackGeolocation: rY,
        sessionTracking: DY
      } = YY;
      var FY;
      const AY = {};
      return NY(rY) && (AY.geoLocationTrackingEnabled = rY), GY(AY) ? {} : {
        session: vr(vr({}, null !== (FY = null === DY || void 0 === DY ? void 0 : DY.session) && void 0 !== FY ? FY : {}), {}, {
          overrides: AY
        })
      }
    }
    const fI = new WeakSet;

    function jI(YY) {
      return fI.add(YY), YY
    }

    function hI(YY, rY) {
      if (YY.capture) return jI(YY.capture(rY));
      const DY = jI(YY.value);
      return null === rY || void 0 === rY || rY(), DY
    }

    function dI(YY) {
      const rY = `__faroBundleId_${YY}`,
        DY = null === vY || void 0 === vY ? void 0 : vY[rY];
      if ("string" === typeof DY && "" !== DY) return DY;
      const FY = "undefined" !== typeof window ? window[rY] : void 0;
      return "string" === typeof FY && "" !== FY ? FY : void 0
    }

    function JI(YY) {
      var rY, DY;
      const FY = YY.config.app.name,
        AY = FY ? function(YY) {
          return null === vY || void 0 === vY ? void 0 : vY[`__faroGitHash_${YY}`]
        }(FY) : void 0,
        IY = {
          sdk: {
            version: DD,
            name: "faro"
          },
          app: Lr({
            bundleId: FY && dI(FY)
          }, void 0 !== AY ? {
            gitHash: AY
          } : {})
        },
        RY = null === (rY = YY.config.sessionTracking) || void 0 === rY ? void 0 : rY.session;
      RY && YY.api.setSession(RY), YY.config.app && (IY.app = Lr(Lr({}, YY.config.app), IY.app)), YY.config.user && (IY.user = YY.config.user), YY.config.view && (IY.view = YY.config.view), YY.metas.add(IY, ...null !== (DY = YY.config.metas) && void 0 !== DY ? DY : [])
    }
    var MI = class {
      constructor(YY, rY) {
        var DY, FY;
        this.signalBuffer = [], this.itemLimit = null !== (DY = null === rY || void 0 === rY ? void 0 : rY.itemLimit) && void 0 !== DY ? DY : 50, this.sendTimeout = null !== (FY = null === rY || void 0 === rY ? void 0 : rY.sendTimeout) && void 0 !== FY ? FY : 250, this.paused = (null === rY || void 0 === rY ? void 0 : rY.paused) || !1, this.sendFn = YY, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(YY) {
        this.paused || (this.signalBuffer.push(YY), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(YY) {
        const rY = new Map;
        return YY.forEach((YY => {
          const DY = JSON.stringify(YY.meta);
          let FY = rY.get(DY);
          FY = void 0 === FY ? [YY] : [...FY, YY], rY.set(DY, FY)
        })), Array.from(rY.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const YY = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(YY).forEach(this.sendFn)
        } catch (rY) {
          throw this.signalBuffer = [...YY, ...this.signalBuffer], this.trimBufferToLimit(), rY
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function wI(YY, rY, DY, FY) {
      var AY;
      rY.debug("Initializing transports");
      const IY = [];
      let RY = [];
      const OY = YY => {
        let rY = YY;
        for (const FY of RY) {
          const YY = rY.map(FY).filter(Boolean);
          if (0 === YY.length) return [];
          rY = bI(YY, DY)
        }
        return rY
      };
      let gY;
      (null === (AY = DY.batching) || void 0 === AY ? void 0 : AY.enabled) && (gY = new MI((YY => {
        const DY = OY(YY);
        if (0 !== DY.length)
          for (const FY of IY) rY.debug(`Transporting item using ${FY.name}\n`, DY), FY.isBatched() && FY.send(DY)
      }), {
        sendTimeout: DY.batching.sendTimeout,
        itemLimit: DY.batching.itemLimit,
        paused: DY.paused
      }));
      return {
        add: function() {
          rY.debug("Adding transports");
          for (var AY = arguments.length, RY = new Array(AY), OY = 0; OY < AY; OY++) RY[OY] = arguments[OY];
          RY.forEach((AY => {
            rY.debug(`Adding "${AY.name}" transport`), IY.some((YY => YY === AY)) ? rY.warn(`Transport ${AY.name} is already added`) : (AY.unpatchedConsole = YY, AY.internalLogger = rY, AY.config = DY, AY.metas = FY, IY.push(AY))
          }))
        },
        addBeforeSendHooks: function() {
          rY.debug("Adding beforeSendHooks\n", RY);
          for (var YY = arguments.length, DY = new Array(YY), FY = 0; FY < YY; FY++) DY[FY] = arguments[FY];
          DY.forEach((YY => {
            YY && RY.push(YY)
          }))
        },
        getBeforeSendHooks: () => [...RY],
        execute: YY => {
          var AY;
          if (!DY.paused && wr(FY).shouldCapture()) {
            if (uY = YY.meta, !fI.has(uY)) {
              var RY, aY, vY;
              const rY = null === (RY = FY.value.session) || void 0 === RY ? void 0 : RY.id,
                AY = hI(FY);
              if (DY.paused) return;
              const IY = Lr({}, YY.meta);
              (null === (aY = IY.session) || void 0 === aY ? void 0 : aY.id) === rY && (null === (vY = AY.session) || void 0 === vY ? void 0 : vY.id) !== rY && (void 0 === AY.session ? delete IY.session : IY.session = AY.session), YY = Lr(Lr({}, YY), {}, {
                meta: jI(IY)
              })
            }
            var uY;
            (null === (AY = DY.batching) || void 0 === AY ? void 0 : AY.enabled) && (null === gY || void 0 === gY || gY.addItem(YY)), (YY => {
              var FY;
              if ((null === (FY = DY.batching) || void 0 === FY ? void 0 : FY.enabled) && IY.every((YY => YY.isBatched()))) return;
              const [AY] = OY([YY]);
              if (void 0 !== AY)
                for (const OY of IY) {
                  var RY;
                  rY.debug(`Transporting item using ${OY.name}\n`, AY), OY.isBatched() ? (null === (RY = DY.batching) || void 0 === RY ? void 0 : RY.enabled) || OY.send([AY]) : OY.send(AY)
                }
            })(YY)
          }
        },
        isPaused: () => DY.paused,
        pause: () => {
          rY.debug("Pausing transports"), null === gY || void 0 === gY || gY.pause(), DY.paused = !0
        },
        remove: function() {
          rY.debug("Removing transports");
          for (var YY = arguments.length, DY = new Array(YY), FY = 0; FY < YY; FY++) DY[FY] = arguments[FY];
          DY.forEach((YY => {
            rY.debug(`Removing "${YY.name}" transport`);
            const DY = IY.indexOf(YY); - 1 !== DY ? IY.splice(DY, 1) : rY.warn(`Transport "${YY.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var YY = arguments.length, DY = new Array(YY), FY = 0; FY < YY; FY++) DY[FY] = arguments[FY];
          rY.debug("Removing beforeSendHooks"), RY = RY.filter((YY => !DY.includes(YY)))
        },
        get transports() {
          return [...IY]
        },
        unpause: () => {
          rY.debug("Unpausing transports"), null === gY || void 0 === gY || gY.start(), DY.paused = !1
        }
      }
    }

    function bI(YY, rY) {
      if (rY.preserveOriginalError)
        for (const DY of YY) "exception" === DY.type && delete DY.payload.originalError;
      return YY
    }
    let XI = tr;

    function qI(YY) {
      var rY;
      return XI = null !== (rY = YY.unpatchedConsole) && void 0 !== rY ? rY : XI, XI
    }
    let pI, kI = kr;

    function GI(YY, rY) {
      return kI = NI(YY, rY.internalLoggerLevel), kI
    }

    function xI(YY) {
      let {
        internalLogger: rY,
        config: DY,
        metas: FY,
        transports: AY,
        tracesApi: IY,
        userActionsApi: RY
      } = YY;
      var OY;
      rY.debug("Initializing exceptions API");
      let gY = null;
      pI = null !== (OY = DY.parseStacktrace) && void 0 !== OY ? OY : pI;
      const aY = YY => {
          rY.debug("Changing stacktrace parser"), pI = null !== YY && void 0 !== YY ? YY : pI
        },
        {
          ignoreErrors: vY = [],
          preserveOriginalError: uY
        } = DY;
      return aY(DY.parseStacktrace), {
        changeStacktraceParser: aY,
        getStacktraceParser: () => pI,
        pushError: function(YY) {
          let {
            skipDedupe: OY,
            stackFrames: aY,
            type: sY,
            context: iY,
            spanContext: yY,
            timestampOverwriteMs: QY,
            originalError: oY,
            fingerprint: WY,
            fatal: EY
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(YY, rY) {
              const {
                message: DY,
                name: FY,
                stack: AY
              } = rY;
              return IY = YY, RY = DY + " " + FY + " " + AY, IY.some((YY => lY(YY) ? RY.includes(YY) : !!RY.match(YY)));
              var IY, RY
            }(vY, null !== oY && void 0 !== oY ? oY : YY)) try {
            var mY, VY;
            if (!wr(FY).shouldCapture()) return;
            const vY = hr(Lr(Lr({}, function(YY) {
                let rY = YY.cause;
                dY(rY) ? rY = YY.cause.toString() : null !== rY && (cY(YY.cause) || HY(YY.cause)) ? rY = jr(YY.cause) : null != rY && (rY = YY.cause.toString());
                return null == rY ? {} : {
                  cause: rY
                }
              }(null !== oY && void 0 !== oY ? oY : YY)), null !== iY && void 0 !== iY ? iY : {})),
              lY = Lr(Lr(Lr(Lr({
                type: sY || YY.name || "Error",
                value: YY.message,
                timestamp: QY ? Qr(QY) : yr(),
                trace: yY ? {
                  trace_id: yY.traceId,
                  span_id: yY.spanId
                } : IY.getTraceContext()
              }, GY(vY) ? {} : {
                context: vY
              }), uY ? {
                originalError: oY
              } : {}), WY ? {
                fingerprint: WY
              } : {}), void 0 !== EY ? {
                fatal: EY
              } : {});
            aY = null !== (mY = aY) && void 0 !== mY ? mY : YY.stack ? null === pI || void 0 === pI ? void 0 : pI(YY).frames : void 0, (null === aY || void 0 === aY ? void 0 : aY.length) && (lY.stacktrace = {
              frames: aY
            });
            const TY = {
              type: lY.type,
              value: lY.value,
              stacktrace: lY.stacktrace,
              context: lY.context,
              fingerprint: lY.fingerprint,
              fatal: null !== (VY = lY.fatal) && void 0 !== VY && VY
            };
            if (!OY && DY.dedupe && !SY(gY) && Er(TY, gY)) return void rY.debug("Skipping error push because it is the same as the last one\n", lY);
            const eY = gY,
              NY = hI(FY);
            if (gY !== eY && !OY && DY.dedupe && Er(TY, gY)) return;
            gY = TY;
            const BY = {
              meta: NY,
              payload: lY,
              type: "exception"
            };
            rY.debug("Pushing exception\n", BY), lA(RY.getActiveUserAction(), BY) || AY.execute(BY)
          } catch (TY) {
            rY.error("Error pushing event", TY)
          }
        }
      }
    }

    function nI(YY, rY, DY, FY, AY) {
      rY.debug("Initializing API");
      let IY = null;
      const RY = function(YY) {
          let {
            transports: rY,
            internalLogger: DY,
            config: FY,
            pushEvent: AY
          } = YY;
          var IY;
          const RY = null === (IY = FY.userActionsInstrumentation) || void 0 === IY ? void 0 : IY.excludeItem;
          let OY;
          const gY = () => OY;
          return {
            startUserAction: (YY, FY, IY) => {
              if (void 0 === gY()) {
                const DY = new VA({
                  name: YY,
                  transports: rY,
                  attributes: FY,
                  trigger: (null === IY || void 0 === IY ? void 0 : IY.triggerName) || "faroApiCall",
                  importance: (null === IY || void 0 === IY ? void 0 : IY.importance) || EA.Normal,
                  trackUserActionsExcludeItem: RY,
                  pushEvent: AY
                });
                return DY.filter((YY => [3, 2].includes(YY))).first().subscribe((() => {
                  OY = void 0
                })), SA.notify({
                  type: WA,
                  userAction: DY,
                  initialActivityTimeout: null === IY || void 0 === IY ? void 0 : IY.initialActivityTimeout
                }), OY = DY, OY
              }
              DY.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: gY
          }
        }({
          transports: AY,
          config: DY,
          internalLogger: rY,
          pushEvent: (YY, DY, FY, AY) => {
            IY ? IY(YY, DY, FY, AY) : rY.warn("pushEventImpl is not initialized. Event dropped:", {
              name: YY,
              attributes: DY,
              domain: FY,
              options: AY
            })
          }
        }),
        OY = function(YY, rY, DY, FY, AY) {
          let IY;
          return rY.debug("Initializing traces API"), {
            getOTEL: () => IY,
            getTraceContext: () => {
              const YY = null === IY || void 0 === IY ? void 0 : IY.trace.getSpanContext(IY.context.active());
              return YY ? {
                trace_id: YY.traceId,
                span_id: YY.spanId
              } : void 0
            },
            initOTEL: (YY, DY) => {
              rY.debug("Initializing OpenTelemetry"), IY = {
                trace: YY,
                context: DY
              }
            },
            isOTELInitialized: () => !!IY,
            pushTraces: YY => {
              try {
                if (!wr(FY).shouldCapture()) return;
                const DY = {
                  type: "trace",
                  payload: YY,
                  meta: hI(FY)
                };
                rY.debug("Pushing trace\n", DY), AY.execute(DY)
              } catch (DY) {
                rY.error("Error pushing trace\n", DY)
              }
            }
          }
        }(0, rY, 0, FY, AY),
        gY = {
          unpatchedConsole: YY,
          internalLogger: rY,
          userActionsApi: RY,
          config: DY,
          metas: FY,
          transports: AY,
          tracesApi: OY
        },
        aY = function(YY) {
          let {
            internalLogger: rY,
            config: DY,
            metas: FY,
            transports: AY,
            tracesApi: IY,
            userActionsApi: RY
          } = YY, OY = null;
          return {
            pushEvent: function(YY, gY, aY) {
              let {
                skipDedupe: vY,
                spanContext: uY,
                timestampOverwriteMs: sY,
                customPayloadTransformer: iY = YY => YY
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!wr(FY).shouldCapture()) return;
                const yY = hr(gY),
                  QY = iY({
                    name: YY,
                    domain: null !== aY && void 0 !== aY ? aY : DY.eventDomain,
                    attributes: GY(yY) ? void 0 : yY,
                    timestamp: sY ? Qr(sY) : yr(),
                    trace: uY ? {
                      trace_id: uY.traceId,
                      span_id: uY.spanId
                    } : IY.getTraceContext()
                  }),
                  oY = {
                    name: QY.name,
                    attributes: QY.attributes,
                    domain: QY.domain
                  };
                if (!vY && DY.dedupe && !SY(OY) && Er(oY, OY)) return void rY.debug("Skipping event push because it is the same as the last one\n", QY);
                const WY = OY,
                  EY = hI(FY);
                if (OY !== WY && !vY && DY.dedupe && Er(oY, OY)) return;
                OY = oY;
                const mY = {
                  meta: EY,
                  payload: QY,
                  type: "event"
                };
                rY.debug("Pushing event\n", mY), lA(RY.getActiveUserAction(), mY) || AY.execute(mY)
              } catch (yY) {
                rY.error("Error pushing event", yY)
              }
            }
          }
        }(gY);
      return IY = aY.pushEvent, Lr(Lr(Lr(Lr(Lr(Lr(Lr({}, OY), xI(gY)), function(YY) {
        let rY, DY, FY, AY, {
          internalLogger: IY,
          metas: RY
        } = YY;
        IY.debug("Initializing meta API");
        const OY = YY => {
            DY && RY.remove(DY), DY = {
              user: YY
            }, RY.add(DY)
          },
          gY = (YY, DY) => {
            var FY;
            const AY = null === DY || void 0 === DY ? void 0 : DY.overrides,
              IY = AY ? {
                overrides: Lr(Lr({}, null === rY || void 0 === rY || null === (FY = rY.session) || void 0 === FY ? void 0 : FY.overrides), AY)
              } : {};
            rY && RY.remove(rY), rY = {
              session: Lr(Lr({}, GY(YY) ? void 0 : YY), IY)
            }, RY.add(rY)
          },
          aY = (YY, rY) => {
            wr(RY).notifySessionUpdate({
              type: "replace",
              session: YY,
              overrides: null === rY || void 0 === rY ? void 0 : rY.overrides
            }), gY(YY, rY)
          },
          vY = () => RY.value.session,
          uY = () => RY.value.page;
        return {
          setUser: OY,
          resetUser: OY,
          setSession: aY,
          resetSession: aY,
          getSession: vY,
          setView: (YY, rY) => {
            var DY;
            if ((null === rY || void 0 === rY ? void 0 : rY.overrides) && (wr(RY).notifySessionUpdate({
                type: "overrides",
                overrides: rY.overrides
              }), gY(vY(), {
                overrides: rY.overrides
              })), (null === FY || void 0 === FY || null === (DY = FY.view) || void 0 === DY ? void 0 : DY.name) === (null === YY || void 0 === YY ? void 0 : YY.name)) return;
            const AY = FY;
            FY = {
              view: YY
            }, RY.add(FY), AY && RY.remove(AY)
          },
          getView: () => RY.value.view,
          setPage: YY => {
            var rY;
            const DY = lY(YY) ? Lr(Lr({}, null !== (rY = null === AY || void 0 === AY ? void 0 : AY.page) && void 0 !== rY ? rY : uY()), {}, {
              id: YY
            }) : YY;
            AY && RY.remove(AY), AY = {
              page: DY
            }, RY.add(AY)
          },
          getPage: uY
        }
      }(gY)), function(YY) {
        let {
          internalLogger: rY,
          config: DY,
          metas: FY,
          transports: AY,
          tracesApi: IY,
          userActionsApi: RY
        } = YY;
        var OY;
        rY.debug("Initializing logs API");
        let gY = null;
        const aY = null !== (OY = DY.logArgsSerializer) && void 0 !== OY ? OY : zD;
        return {
          pushLog: function(YY) {
            let {
              context: OY,
              level: vY,
              skipDedupe: uY,
              spanContext: sY,
              timestampOverwriteMs: iY
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!wr(FY).shouldCapture()) return;
              const yY = hr(OY),
                QY = {
                  message: aY(YY),
                  level: null !== vY && void 0 !== vY ? vY : "log",
                  context: GY(yY) ? void 0 : yY,
                  timestamp: iY ? Qr(iY) : yr(),
                  trace: sY ? {
                    trace_id: sY.traceId,
                    span_id: sY.spanId
                  } : IY.getTraceContext()
                },
                oY = {
                  message: QY.message,
                  level: QY.level,
                  context: QY.context
                };
              if (!uY && DY.dedupe && !SY(gY) && Er(oY, gY)) return void rY.debug("Skipping log push because it is the same as the last one\n", QY);
              const WY = gY,
                EY = hI(FY);
              if (gY !== WY && !uY && DY.dedupe && Er(oY, gY)) return;
              gY = oY;
              const mY = {
                type: "log",
                payload: QY,
                meta: EY
              };
              rY.debug("Pushing log\n", mY), lA(RY.getActiveUserAction(), mY) || AY.execute(mY)
            } catch (yY) {
              rY.error("Error pushing log\n", yY)
            }
          }
        }
      }(gY)), function(YY) {
        let {
          internalLogger: rY,
          config: DY,
          metas: FY,
          transports: AY,
          tracesApi: IY,
          userActionsApi: RY
        } = YY;
        rY.debug("Initializing measurements API");
        let OY = null;
        return {
          pushMeasurement: function(YY) {
            let {
              skipDedupe: gY,
              context: aY,
              spanContext: vY,
              timestampOverwriteMs: uY
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!wr(FY).shouldCapture()) return;
              const sY = hr(aY),
                iY = Lr(Lr({}, YY), {}, {
                  trace: vY ? {
                    trace_id: vY.traceId,
                    span_id: vY.spanId
                  } : IY.getTraceContext(),
                  timestamp: uY ? Qr(uY) : yr(),
                  context: GY(sY) ? void 0 : sY
                }),
                yY = {
                  type: iY.type,
                  values: iY.values,
                  context: iY.context
                };
              if (!gY && DY.dedupe && !SY(OY) && Er(yY, OY)) return void rY.debug("Skipping measurement push because it is the same as the last one\n", iY);
              const QY = OY,
                oY = hI(FY);
              if (OY !== QY && !gY && DY.dedupe && Er(yY, OY)) return;
              OY = yY;
              const WY = {
                type: "measurement",
                payload: iY,
                meta: oY
              };
              rY.debug("Pushing measurement\n", WY), lA(RY.getActiveUserAction(), WY) || AY.execute(WY)
            } catch (sY) {
              rY.error("Error pushing measurement\n", sY)
            }
          }
        }
      }(gY)), aY), RY)
    }

    function PI(YY) {
      const rY = qI(YY),
        DY = GI(rY, YY);
      if (yY() && !YY.isolate) return void DY.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      DY.debug("Initializing");
      const FY = function(YY, rY) {
          let DY, FY = [],
            AY = [],
            IY = [],
            RY = 0,
            OY = 0;
          const gY = () => FY.reduce(((YY, rY) => Object.assign(YY, KY(rY) ? rY() : rY)), {}),
            aY = () => {
              if (AY.length) {
                const YY = gY();
                AY.forEach((rY => rY(YY)))
              }
            };
          return {
            add: function() {
              for (var YY = arguments.length, DY = new Array(YY), AY = 0; AY < YY; AY++) DY[AY] = arguments[AY];
              rY.debug("Adding metas\n", DY), FY.push(...DY), aY()
            },
            remove: function() {
              for (var YY = arguments.length, DY = new Array(YY), AY = 0; AY < YY; AY++) DY[AY] = arguments[AY];
              rY.debug("Removing metas\n", DY), FY = FY.filter((YY => !DY.includes(YY))), aY()
            },
            addListener: YY => {
              rY.debug("Adding metas listener\n", YY), AY.push(YY)
            },
            removeListener: YY => {
              rY.debug("Removing metas listener\n", YY), AY = AY.filter((rY => rY !== YY))
            },
            capture: YY => {
              var rY;
              const FY = void 0 !== DY,
                AY = null !== (rY = DY) && void 0 !== rY ? rY : IY;
              FY || (DY = AY, RY = 0, OY = AY.length);
              try {
                for (; RY < OY;) {
                  const YY = AY[RY++];
                  null === YY || void 0 === YY || YY()
                }
                const rY = jI(gY());
                return null === YY || void 0 === YY || YY(), rY
              } finally {
                FY || (DY = void 0)
              }
            },
            addCaptureListener: YY => {
              IY.push(YY)
            },
            removeCaptureListener: YY => {
              IY = IY.filter((rY => rY !== YY))
            },
            get value() {
              return gY()
            }
          }
        }(0, DY),
        AY = wI(rY, DY, YY, FY),
        IY = nI(rY, DY, YY, FY, AY),
        RY = function(YY, rY, DY, FY, AY, IY) {
          rY.debug("Initializing instrumentations");
          const RY = [];
          return {
            add: function() {
              rY.debug("Adding instrumentations");
              for (var OY = arguments.length, gY = new Array(OY), aY = 0; aY < OY; aY++) gY[aY] = arguments[aY];
              gY.forEach((OY => {
                rY.debug(`Adding "${OY.name}" instrumentation`), RY.some((YY => YY.name === OY.name)) ? rY.warn(`Instrumentation ${OY.name} is already added`) : (OY.unpatchedConsole = YY, OY.internalLogger = rY, OY.config = DY, OY.metas = FY, OY.transports = AY, OY.api = IY, RY.push(OY), OY.initialize())
              }))
            },
            get instrumentations() {
              return [...RY]
            },
            remove: function() {
              rY.debug("Removing instrumentations");
              for (var YY = arguments.length, DY = new Array(YY), FY = 0; FY < YY; FY++) DY[FY] = arguments[FY];
              DY.forEach((YY => {
                var DY, FY;
                rY.debug(`Removing "${YY.name}" instrumentation`);
                const AY = RY.reduce(((rY, DY, FY) => null === rY && DY.name === YY.name ? FY : null), null);
                null !== AY ? (null === (DY = (FY = RY[AY]).destroy) || void 0 === DY || DY.call(FY), RY.splice(AY, 1)) : rY.warn(`Instrumentation "${YY.name}" is not added`)
              }))
            }
          }
        }(rY, DY, YY, FY, AY, IY),
        OY = oY(rY, DY, YY, FY, AY, IY, RY);
      return JI(OY),
        function(YY) {
          YY.transports.add(...YY.config.transports), YY.transports.addBeforeSendHooks(YY.config.beforeSend)
        }(OY),
        function(YY) {
          YY.instrumentations.add(...YY.config.instrumentations)
        }(OY), OY
    }

    function UI(YY) {
      const rY = HI(YY);
      if (rY) return PI(rY)
    }
  },
  6255: function(YY, rY, DY) {
    var FY;
    ! function(AY, IY) {
      var RY = "function",
        OY = "undefined",
        gY = "object",
        aY = "string",
        vY = "major",
        uY = "model",
        sY = "name",
        iY = "type",
        yY = "vendor",
        QY = "version",
        oY = "architecture",
        WY = "console",
        EY = "mobile",
        mY = "tablet",
        VY = "smarttv",
        SY = "wearable",
        lY = "embedded",
        TY = "Amazon",
        eY = "Apple",
        NY = "ASUS",
        BY = "BlackBerry",
        cY = "Browser",
        KY = "Chrome",
        HY = "Firefox",
        zY = "Google",
        ZY = "Honor",
        CY = "Huawei",
        fY = "LG",
        jY = "Microsoft",
        hY = "Motorola",
        dY = "Nvidia",
        JY = "OnePlus",
        MY = "Opera",
        wY = "OPPO",
        bY = "Samsung",
        XY = "Sharp",
        qY = "Sony",
        pY = "Xiaomi",
        kY = "Zebra",
        GY = "Facebook",
        xY = "Chromium OS",
        nY = "Mac OS",
        PY = " Browser",
        UY = function(YY) {
          for (var rY = {}, DY = 0; DY < YY.length; DY++) rY[YY[DY].toUpperCase()] = YY[DY];
          return rY
        },
        LY = function(YY, rY) {
          return typeof YY === aY && -1 !== tY(rY).indexOf(tY(YY))
        },
        tY = function(YY) {
          return YY.toLowerCase()
        },
        Yr = function(YY, rY) {
          if (typeof YY === aY) return YY = YY.replace(/^\s\s*/, ""), typeof rY === OY ? YY : YY.substring(0, 500)
        },
        rr = function(YY, rY) {
          for (var DY, FY, AY, OY, aY, vY, uY = 0; uY < rY.length && !aY;) {
            var sY = rY[uY],
              iY = rY[uY + 1];
            for (DY = FY = 0; DY < sY.length && !aY && sY[DY];)
              if (aY = sY[DY++].exec(YY))
                for (AY = 0; AY < iY.length; AY++) vY = aY[++FY], typeof(OY = iY[AY]) === gY && OY.length > 0 ? 2 === OY.length ? typeof OY[1] == RY ? this[OY[0]] = OY[1].call(this, vY) : this[OY[0]] = OY[1] : 3 === OY.length ? typeof OY[1] !== RY || OY[1].exec && OY[1].test ? this[OY[0]] = vY ? vY.replace(OY[1], OY[2]) : IY : this[OY[0]] = vY ? OY[1].call(this, vY, OY[2]) : IY : 4 === OY.length && (this[OY[0]] = vY ? OY[3].call(this, vY.replace(OY[1], OY[2])) : IY) : this[OY] = vY || IY;
            uY += 2
          }
        },
        Dr = function(YY, rY) {
          for (var DY in rY)
            if (typeof rY[DY] === gY && rY[DY].length > 0) {
              for (var FY = 0; FY < rY[DY].length; FY++)
                if (LY(rY[DY][FY], YY)) return "?" === DY ? IY : DY
            } else if (LY(rY[DY], YY)) return "?" === DY ? IY : DY;
          return rY.hasOwnProperty("*") ? rY["*"] : YY
        },
        Fr = {
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
        Ar = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [QY, [sY, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [QY, [sY, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [sY, QY],
            [/opios[\/ ]+([\w\.]+)/i],
            [QY, [sY, MY + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [QY, [sY, MY + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [QY, [sY, MY]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [QY, [sY, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [QY, [sY, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [sY, QY],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [QY, [sY, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [QY, [sY, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [QY, [sY, "UC" + cY]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [QY, [sY, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [QY, [sY, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [QY, [sY, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [QY, [sY, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [QY, [sY, "Smart Lenovo " + cY]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [sY, /(.+)/, "$1 Secure " + cY], QY
            ],
            [/\bfocus\/([\w\.]+)/i],
            [QY, [sY, HY + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [QY, [sY, MY + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [QY, [sY, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [QY, [sY, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [QY, [sY, MY + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [QY, [sY, "MIUI" + PY]],
            [/fxios\/([\w\.-]+)/i],
            [QY, [sY, HY]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [QY, [sY, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [sY, /(.+)/, "$1Browser"], QY
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [sY, /(.+)/, "$1" + PY], QY
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [QY, [sY, bY + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [QY, [sY, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [sY, "Sogou Mobile"], QY
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [sY, QY],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [sY],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [QY, sY],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [sY, GY], QY
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [sY, QY],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [QY, [sY, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [QY, [sY, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [QY, [sY, KY + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [sY, KY + " WebView"], QY
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [QY, [sY, "Android " + cY]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [sY, QY],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [QY, [sY, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [QY, sY],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [sY, [QY, Dr, {
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
            [sY, QY],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [sY, "Netscape"], QY
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [sY, QY],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [QY, [sY, HY + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [sY, [QY, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [sY, [QY, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [oY, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [oY, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [oY, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [oY, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [oY, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [oY, /ower/, "", tY]
            ],
            [/ sun4\w[;\)]/i],
            [
              [oY, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [oY, tY]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [uY, [yY, bY],
              [iY, mY]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [uY, [yY, bY],
              [iY, EY]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [uY, [yY, eY],
              [iY, EY]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [uY, [yY, eY],
              [iY, mY]
            ],
            [/(macintosh);/i],
            [uY, [yY, eY]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [uY, [yY, XY],
              [iY, EY]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [uY, [yY, ZY],
              [iY, mY]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [uY, [yY, ZY],
              [iY, EY]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [uY, [yY, CY],
              [iY, mY]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [uY, [yY, CY],
              [iY, EY]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [uY, /_/g, " "],
              [yY, pY],
              [iY, mY]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [uY, /_/g, " "],
              [yY, pY],
              [iY, EY]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [uY, [yY, wY],
              [iY, EY]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [uY, [yY, Dr, {
                OnePlus: ["304", "403", "203"],
                "*": wY
              }],
              [iY, mY]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [uY, [yY, "Vivo"],
              [iY, EY]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [uY, [yY, "Realme"],
              [iY, EY]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [uY, [yY, hY],
              [iY, EY]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [uY, [yY, hY],
              [iY, mY]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [uY, [yY, fY],
              [iY, mY]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [uY, [yY, fY],
              [iY, EY]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [uY, [yY, "Lenovo"],
              [iY, mY]
            ],
            [/(nokia) (t[12][01])/i],
            [yY, uY, [iY, mY]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [uY, /_/g, " "],
              [iY, EY],
              [yY, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [uY, [yY, zY],
              [iY, mY]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [uY, [yY, zY],
              [iY, EY]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [uY, [yY, qY],
              [iY, EY]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [uY, "Xperia Tablet"],
              [yY, qY],
              [iY, mY]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [uY, [yY, JY],
              [iY, EY]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [uY, [yY, TY],
              [iY, mY]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [uY, /(.+)/g, "Fire Phone $1"],
              [yY, TY],
              [iY, EY]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [uY, yY, [iY, mY]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [uY, [yY, BY],
              [iY, EY]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [uY, [yY, NY],
              [iY, mY]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [uY, [yY, NY],
              [iY, EY]
            ],
            [/(nexus 9)/i],
            [uY, [yY, "HTC"],
              [iY, mY]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [yY, [uY, /_/g, " "],
              [iY, EY]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [uY, [yY, "TCL"],
              [iY, mY]
            ],
            [/(itel) ((\w+))/i],
            [
              [yY, tY], uY, [iY, Dr, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [uY, [yY, "Acer"],
              [iY, mY]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [uY, [yY, "Meizu"],
              [iY, EY]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [uY, [yY, "Ulefone"],
              [iY, EY]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [uY, [yY, "Energizer"],
              [iY, EY]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [uY, [yY, "Cat"],
              [iY, EY]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [uY, [yY, "Smartfren"],
              [iY, EY]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [uY, [yY, "Nothing"],
              [iY, EY]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [uY, [yY, "Archos"],
              [iY, mY]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [uY, [yY, "Archos"],
              [iY, EY]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [yY, uY, [iY, mY]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [yY, uY, [iY, EY]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [yY, uY, [iY, mY]],
            [/(surface duo)/i],
            [uY, [yY, jY],
              [iY, mY]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [uY, [yY, "Fairphone"],
              [iY, EY]
            ],
            [/(u304aa)/i],
            [uY, [yY, "AT&T"],
              [iY, EY]
            ],
            [/\bsie-(\w*)/i],
            [uY, [yY, "Siemens"],
              [iY, EY]
            ],
            [/\b(rct\w+) b/i],
            [uY, [yY, "RCA"],
              [iY, mY]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [uY, [yY, "Dell"],
              [iY, mY]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [uY, [yY, "Verizon"],
              [iY, mY]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [uY, [yY, "Barnes & Noble"],
              [iY, mY]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [uY, [yY, "NuVision"],
              [iY, mY]
            ],
            [/\b(k88) b/i],
            [uY, [yY, "ZTE"],
              [iY, mY]
            ],
            [/\b(nx\d{3}j) b/i],
            [uY, [yY, "ZTE"],
              [iY, EY]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [uY, [yY, "Swiss"],
              [iY, EY]
            ],
            [/\b(zur\d{3}) b/i],
            [uY, [yY, "Swiss"],
              [iY, mY]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [uY, [yY, "Zeki"],
              [iY, mY]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [yY, "Dragon Touch"], uY, [iY, mY]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [uY, [yY, "Insignia"],
              [iY, mY]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [uY, [yY, "NextBook"],
              [iY, mY]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [yY, "Voice"], uY, [iY, EY]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [yY, "LvTel"], uY, [iY, EY]
            ],
            [/\b(ph-1) /i],
            [uY, [yY, "Essential"],
              [iY, EY]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [uY, [yY, "Envizen"],
              [iY, mY]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [uY, [yY, "MachSpeed"],
              [iY, mY]
            ],
            [/\btu_(1491) b/i],
            [uY, [yY, "Rotor"],
              [iY, mY]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [uY, [yY, dY],
              [iY, mY]
            ],
            [/(sprint) (\w+)/i],
            [yY, uY, [iY, EY]],
            [/(kin\.[onetw]{3})/i],
            [
              [uY, /\./g, " "],
              [yY, jY],
              [iY, EY]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [uY, [yY, kY],
              [iY, mY]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [uY, [yY, kY],
              [iY, EY]
            ],
            [/smart-tv.+(samsung)/i],
            [yY, [iY, VY]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [uY, /^/, "SmartTV"],
              [yY, bY],
              [iY, VY]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [yY, fY],
              [iY, VY]
            ],
            [/(apple) ?tv/i],
            [yY, [uY, eY + " TV"],
              [iY, VY]
            ],
            [/crkey/i],
            [
              [uY, KY + "cast"],
              [yY, zY],
              [iY, VY]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [uY, [yY, TY],
              [iY, VY]
            ],
            [/(shield \w+ tv)/i],
            [uY, [yY, dY],
              [iY, VY]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [uY, [yY, XY],
              [iY, VY]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [uY, [yY, qY],
              [iY, VY]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [uY, [yY, pY],
              [iY, VY]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [yY, uY, [iY, VY]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [yY, Yr],
              [uY, Yr],
              [iY, VY]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [uY, [iY, VY]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [iY, VY]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [yY, uY, [iY, WY]],
            [/droid.+; (shield)( bui|\))/i],
            [uY, [yY, dY],
              [iY, WY]
            ],
            [/(playstation \w+)/i],
            [uY, [yY, qY],
              [iY, WY]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [uY, [yY, jY],
              [iY, WY]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [uY, [yY, bY],
              [iY, SY]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [yY, uY, [iY, SY]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [uY, [yY, wY],
              [iY, SY]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [uY, [yY, eY],
              [iY, SY]
            ],
            [/(opwwe\d{3})/i],
            [uY, [yY, JY],
              [iY, SY]
            ],
            [/(moto 360)/i],
            [uY, [yY, hY],
              [iY, SY]
            ],
            [/(smartwatch 3)/i],
            [uY, [yY, qY],
              [iY, SY]
            ],
            [/(g watch r)/i],
            [uY, [yY, fY],
              [iY, SY]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [uY, [yY, kY],
              [iY, SY]
            ],
            [/droid.+; (glass) \d/i],
            [uY, [yY, zY],
              [iY, SY]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [yY, uY, [iY, SY]],
            [/; (quest( \d| pro)?)/i],
            [uY, [yY, GY],
              [iY, SY]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [yY, [iY, lY]],
            [/(aeobc)\b/i],
            [uY, [yY, TY],
              [iY, lY]
            ],
            [/(homepod).+mac os/i],
            [uY, [yY, eY],
              [iY, lY]
            ],
            [/windows iot/i],
            [
              [iY, lY]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [uY, [iY, EY]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [uY, [iY, mY]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [iY, mY]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [iY, EY]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [uY, [yY, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [QY, [sY, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [sY, QY],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [QY, [sY, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [sY, QY],
            [/ladybird\//i],
            [
              [sY, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [QY, sY]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [sY, QY],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [sY, [QY, Dr, Fr]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [QY, Dr, Fr],
              [sY, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [QY, /_/g, "."],
              [sY, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [sY, nY],
              [QY, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [QY, sY],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [sY, /(.+)/, "$1 Touch"], QY
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [sY, QY],
            [/\(bb(10);/i],
            [QY, [sY, BY]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [QY, [sY, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [QY, [sY, HY + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [QY, [sY, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [QY, [sY, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [QY, [sY, KY + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [sY, xY], QY
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [sY, QY],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [sY, "Solaris"], QY
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [sY, QY]
          ]
        },
        Ir = function(YY, rY) {
          if (typeof YY === gY && (rY = YY, YY = IY), !(this instanceof Ir)) return new Ir(YY, rY).getResult();
          var DY = typeof AY !== OY && AY.navigator ? AY.navigator : IY,
            FY = YY || (DY && DY.userAgent ? DY.userAgent : ""),
            WY = DY && DY.userAgentData ? DY.userAgentData : IY,
            VY = rY ? function(YY, rY) {
              var DY = {};
              for (var FY in YY) rY[FY] && rY[FY].length % 2 === 0 ? DY[FY] = rY[FY].concat(YY[FY]) : DY[FY] = YY[FY];
              return DY
            }(Ar, rY) : Ar,
            SY = DY && DY.userAgent == FY;
          return this.getBrowser = function() {
            var YY, rY = {};
            return rY[sY] = IY, rY[QY] = IY, rr.call(rY, FY, VY.browser), rY[vY] = typeof(YY = rY[QY]) === aY ? YY.replace(/[^\d\.]/g, "").split(".")[0] : IY, SY && DY && DY.brave && typeof DY.brave.isBrave == RY && (rY[sY] = "Brave"), rY
          }, this.getCPU = function() {
            var YY = {};
            return YY[oY] = IY, rr.call(YY, FY, VY.cpu), YY
          }, this.getDevice = function() {
            var YY = {};
            return YY[yY] = IY, YY[uY] = IY, YY[iY] = IY, rr.call(YY, FY, VY.device), SY && !YY[iY] && WY && WY.mobile && (YY[iY] = EY), SY && "Macintosh" == YY[uY] && DY && typeof DY.standalone !== OY && DY.maxTouchPoints && DY.maxTouchPoints > 2 && (YY[uY] = "iPad", YY[iY] = mY), YY
          }, this.ky = function() {
            var YY = {};
            return YY[sY] = IY, YY[QY] = IY, rr.call(YY, FY, VY.engine), YY
          }, this.getOS = function() {
            var YY = {};
            return YY[sY] = IY, YY[QY] = IY, rr.call(YY, FY, VY.os), SY && !YY[sY] && WY && WY.platform && "Unknown" != WY.platform && (YY[sY] = WY.platform.replace(/chrome os/i, xY).replace(/macos/i, nY)), YY
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.ky(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return FY
          }, this.setUA = function(YY) {
            return FY = typeof YY === aY && YY.length > 500 ? Yr(YY, 500) : YY, this
          }, this.setUA(FY), this
        };
      Ir.VERSION = "1.0.41", Ir.BROWSER = UY([sY, QY, vY]), Ir.CPU = UY([oY]), Ir.DEVICE = UY([uY, yY, iY, WY, EY, VY, mY, SY, lY]), Ir.ENGINE = Ir.OS = UY([sY, QY]), typeof rY !== OY ? (YY.exports && (rY = YY.exports = Ir), rY.UAParser = Ir) : DY.amdO ? (FY = function() {
        return Ir
      }.call(rY, DY, rY, YY)) === IY || (YY.exports = FY) : typeof AY !== OY && (AY.UAParser = Ir);
      var Rr = typeof AY !== OY && (AY.jQuery || AY.Zepto);
      if (Rr && !Rr.ua) {
        var Or = new Ir;
        Rr.ua = Or.getResult(), Rr.ua.get = function() {
          return Or.getUA()
        }, Rr.ua.set = function(YY) {
          Or.setUA(YY);
          var rY = Or.getResult();
          for (var DY in rY) Rr.ua[DY] = rY[DY]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);