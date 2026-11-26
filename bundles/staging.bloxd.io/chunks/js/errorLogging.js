export const id = 36;
export const ids = [36];
export const modules = {
  7238: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BaseExtension: () => Vx,
      BaseInstrumentation: () => ex,
      BaseTransport: () => IY,
      CSPInstrumentation: () => AY,
      ConsoleInstrumentation: () => Rx,
      ConsoleTransport: () => xU,
      EVENT_CLICK: () => qe,
      EVENT_NAVIGATION: () => te,
      EVENT_ROUTE_CHANGE: () => Xe,
      EVENT_SESSION_EXTEND: () => Ae,
      EVENT_SESSION_RESUME: () => Pe,
      EVENT_SESSION_START: () => Te,
      EVENT_VIEW_CHANGED: () => Fe,
      ErrorsInstrumentation: () => Dx,
      FetchTransport: () => tU,
      InternalLoggerLevel: () => me,
      LogLevel: () => qx,
      MAX_SESSION_PERSISTENCE_TIME: () => QV,
      NavigationInstrumentation: () => hY,
      Observable: () => jx,
      PerformanceInstrumentation: () => HJ,
      PersistentSessionsManager: () => ae,
      SESSION_EXPIRATION_TIME: () => UV,
      SESSION_INACTIVITY_TIME: () => yV,
      STORAGE_KEY: () => YV,
      SessionInstrumentation: () => Jx,
      TransportItemType: () => dY,
      UserActionInstrumentation: () => PY,
      UserActionState: () => kY,
      VERSION: () => xx,
      ViewInstrumentation: () => Cx,
      VolatileSessionsManager: () => oe,
      WebVitalsInstrumentation: () => gJ,
      allLogLevels: () => Fx,
      browserMeta: () => HY,
      buildStackFrame: () => Yx,
      captureMetas: () => CU,
      createInternalLogger: () => NU,
      createPromiseBuffer: () => vU,
      createSession: () => sY,
      deepEqual: () => je,
      defaultEventDomain: () => JV,
      defaultExceptionType: () => Nx,
      defaultGlobalObjectKey: () => XU,
      defaultInternalLoggerLevel: () => He,
      defaultLogLevel: () => tx,
      faro: () => bV,
      genShortID: () => Be,
      getCurrentTimestamp: () => ke,
      getDataFromSafariExtensions: () => vx,
      getIgnoreUrls: () => uV,
      getInternalFaroFromGlobalObject: () => vV,
      getStackFramesFromError: () => kx,
      getTransportBody: () => eU,
      getUrlFromResource: () => SV,
      getWebInstrumentations: () => lY,
      globalObject: () => wV,
      initializeFaro: () => IU,
      internalGlobalObjectKey: () => ZV,
      isArray: () => GV,
      isBoolean: () => NV,
      isDomError: () => cV,
      isDomException: () => hV,
      isElement: () => LV,
      isElementDefined: () => lV,
      XZ: () => HV,
      isError: () => aV,
      isErrorDefined: () => CV,
      isErrorEvent: () => oV,
      isEvent: () => iV,
      isEventDefined: () => DV,
      isFunction: () => zV,
      isInstanceOf: () => qV,
      isInt: () => AV,
      isInternalFaroOnGlobalObject: () => kV,
      isMap: () => mV,
      isMapDefined: () => fV,
      isNull: () => FV,
      isNumber: () => PV,
      isObject: () => MV,
      isPrimitive: () => gV,
      isRegExp: () => WV,
      isString: () => TV,
      isSymbol: () => XV,
      isSyntheticEvent: () => KV,
      isThenable: () => RV,
      isToString: () => jV,
      isTypeof: () => BV,
      isUndefined: () => tV,
      makeCoreConfig: () => GU,
      noop: () => fe,
      osMeta: () => uY,
      parseStacktrace: () => bx,
      sdkMeta: () => SY,
      setInternalFaroOnGlobalObject: () => rV,
      transportItemTypeToBodyKey: () => OY,
      unknownString: () => ix,
      userActionDataAttribute: () => uJ,
      userActionTimeoutDataAttribute: () => sJ
    });
    const JV = "browser",
      YV = "com.grafana.faro.session",
      UV = 144e5,
      yV = 9e5,
      pV = 1e3,
      QV = yV,
      nV = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: QV
      };
    const wV = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof xV.g ? xV.g : "undefined" !== typeof self ? self : void 0;
    const ZV = "_faroInternal";

    function vV() {
      return wV[ZV]
    }

    function rV(VV) {
      VV.config.isolate ? VV.internalLogger.debug("Skipping registering internal Faro instance on global object") : (VV.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(wV, ZV, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: VV
      }))
    }

    function kV() {
      return ZV in wV
    }
    let bV = {
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

    function EV(VV, eV, xV, JV, YV, UV, yV) {
      return eV.debug("Initializing Faro"), bV = {
          api: UV,
          config: xV,
          instrumentations: yV,
          internalLogger: eV,
          metas: JV,
          pause: YV.pause,
          transports: YV,
          unpatchedConsole: VV,
          unpause: YV.unpause
        }, rV(bV),
        function(VV) {
          if (VV.config.preventGlobalExposure) VV.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (VV.internalLogger.debug(`Registering public faro reference in the global scope using "${VV.config.globalObjectKey}" key`), VV.config.globalObjectKey in wV) return void VV.internalLogger.warn(`Skipping global registration due to key "${VV.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(wV, VV.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: VV
            })
          }
        }(bV), bV
    }

    function BV(VV, eV) {
      return typeof VV === eV
    }

    function jV(VV, eV) {
      return Object.prototype.toString.call(VV) === `[object ${eV}]`
    }

    function qV(VV, eV) {
      try {
        return VV instanceof eV
      } catch (xV) {
        return !1
      }
    }
    const tV = VV => BV(VV, "undefined"),
      FV = VV => BV(VV, "null"),
      TV = VV => BV(VV, "string"),
      PV = VV => BV(VV, "number") && !isNaN(VV) || BV(VV, "bigint"),
      AV = VV => PV(VV) && Number.isInteger(VV),
      NV = VV => BV(VV, "boolean"),
      XV = VV => BV(VV, "symbol"),
      MV = VV => !FV(VV) && BV(VV, "object"),
      zV = VV => BV(VV, "function"),
      GV = VV => jV(VV, "Array"),
      WV = VV => jV(VV, "RegExp"),
      RV = VV => zV(null === VV || void 0 === VV ? void 0 : VV.then),
      gV = VV => !MV(VV) && !zV(VV),
      DV = "undefined" !== typeof Event,
      iV = VV => DV && qV(VV, Event),
      CV = "undefined" !== typeof Error,
      aV = VV => CV && qV(VV, Error),
      oV = VV => jV(VV, "ErrorEvent"),
      cV = VV => jV(VV, "DOMError"),
      hV = VV => jV(VV, "DOMException"),
      lV = "undefined" !== typeof Element,
      LV = VV => lV && qV(VV, Element),
      fV = "undefined" !== typeof Map,
      mV = VV => fV && qV(VV, Map),
      KV = VV => MV(VV) && "nativeEvent" in VV && "preventDefault" in VV && "stopPropagation" in VV;

    function HV(VV) {
      return null == VV || (GV(VV) || TV(VV) ? 0 === VV.length : !!MV(VV) && 0 === Object.keys(VV).length)
    }

    function uV() {
      return bV.transports.transports.flatMap((VV => VV.getIgnoreUrls()))
    }

    function sV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return uV().some((eV => VV && null != VV.match(eV)))
    }

    function SV(VV) {
      return TV(VV) ? VV : VV instanceof URL ? VV.href : !HV(VV) && zV(null === VV || void 0 === VV ? void 0 : VV.toString) ? VV.toString() : void 0
    }
    const IV = "sessionStorage",
      dV = "localStorage";

    function OV(VV) {
      try {
        let eV;
        eV = window[VV];
        const xV = "__faro_storage_test__";
        return eV.setItem(xV, xV), eV.removeItem(xV), !0
      } catch (xV) {
        var eV;
        return null === (eV = bV.internalLogger) || void 0 === eV || eV.info(`Web storage of type ${VV} is not available. Reason: ${xV}`), !1
      }
    }

    function Ve(VV, eV) {
      return Ue(eV) ? window[eV].getItem(VV) : null
    }

    function ee(VV, eV, xV) {
      if (Ue(xV)) try {
        window[xV].setItem(VV, eV)
      } catch (JV) {}
    }

    function xe(VV, eV) {
      Ue(eV) && window[eV].removeItem(VV)
    }
    const Je = OV(dV),
      Ye = OV(IV);

    function Ue(VV) {
      return VV === dV ? Je : VV === IV && Ye
    }

    function ye(VV) {
      return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ye(VV)
    }

    function pe(VV) {
      var eV = function(VV, eV) {
        if ("object" != ye(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != ye(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == ye(eV) ? eV : eV + ""
    }

    function Qe(VV, eV, xV) {
      return (eV = pe(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function ne(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function we(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? ne(Object(xV), !0).forEach((function(eV) {
          Qe(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : ne(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Ze() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bV;
      var eV, xV, JV;
      const YV = VV.config.sessionTracking,
        UV = null !== (eV = null !== (xV = null === YV || void 0 === YV || null === (JV = YV.sampler) || void 0 === JV ? void 0 : JV.call(YV, {
          metas: VV.metas.value
        })) && void 0 !== xV ? xV : null === YV || void 0 === YV ? void 0 : YV.samplingRate) && void 0 !== eV ? eV : 1,
        yV = "number" === typeof UV ? function(VV) {
          return Math.min(1, Math.max(0, VV))
        }(UV) : 0;
      if (!(yV > 0)) return !1;
      if (1 === yV) return !0;
      try {
        const VV = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === VV || void 0 === VV ? void 0 : VV.getRandomValues)) {
          const eV = new Uint32Array(1);
          return VV.getRandomValues(eV), eV[0] / Math.pow(2, 32) < yV
        }
      } catch (pV) {}
      return Math.random() < yV
    }

    function ve() {
      return Date.now()
    }

    function re() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function ke() {
      return (new Date).toISOString()
    }

    function be(VV) {
      return new Date(VV).toISOString()
    }
    const Ee = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Be() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const eV = new Uint32Array(VV),
        xV = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === xV || void 0 === xV ? void 0 : xV.getRandomValues) xV.getRandomValues(eV);
      else
        for (let YV = 0; YV < VV; YV++) eV[YV] = Math.floor(4294967296 * Math.random());
      let JV = "";
      for (let YV = 0; YV < VV; YV++) JV += Ee[eV[YV] % 59];
      return JV
    }

    function je(VV, eV) {
      if (VV === eV) return !0;
      if (BV(VV, "number") && isNaN(VV)) return BV(eV, "number") && isNaN(eV);
      const xV = GV(VV),
        JV = GV(eV);
      if (xV !== JV) return !1;
      if (xV && JV) {
        const xV = VV.length;
        if (xV !== eV.length) return !1;
        for (let JV = xV; 0 !== JV--;)
          if (!je(VV[JV], eV[JV])) return !1;
        return !0
      }
      const YV = MV(VV),
        UV = MV(eV);
      if (YV !== UV) return !1;
      if (VV && eV && YV && UV) {
        const xV = Object.keys(VV),
          JV = Object.keys(eV);
        if (xV.length !== JV.length) return !1;
        for (let VV of xV)
          if (!JV.includes(VV)) return !1;
        for (let YV of xV)
          if (!je(VV[YV], eV[YV])) return !1;
        return !0
      }
      return !1
    }
    const qe = "click",
      te = "navigation",
      Fe = "view_changed",
      Te = "session_start",
      Pe = "session_resume",
      Ae = "session_extend",
      Ne = "service_name_override",
      Xe = "route_change";

    function Me() {
      let {
        sessionId: VV,
        started: eV,
        lastActivity: xV,
        isSampled: JV = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, YV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bV;
      var UV;
      const yV = ve(),
        pV = null === (UV = YV.config) || void 0 === UV || null === (UV = UV.sessionTracking) || void 0 === UV ? void 0 : UV.generateSessionId;
      return null == VV && (VV = "function" === typeof pV ? pV() : Be()), {
        sessionId: VV,
        lastActivity: null !== xV && void 0 !== xV ? xV : yV,
        started: null !== eV && void 0 !== eV ? eV : yV,
        isSampled: JV
      }
    }

    function ze(VV) {
      if (null == VV) return !1;
      const eV = ve();
      return eV - VV.started < 144e5 && eV - VV.lastActivity < yV
    }

    function Ge(VV) {
      let {
        fetchUserSession: eV,
        storeUserSession: xV,
        adoptSession: JV,
        updateInterval: YV = 0
      } = VV, pV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bV, QV = 0;
      return function() {
        let {
          forceSessionExtend: VV = !1,
          refreshActivity: nV = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var wV, ZV;
        if (!eV || !xV) return;
        const vV = ve();
        if (!VV && vV < QV && QV - vV <= YV) return;
        const rV = pV.config.sessionTracking,
          kV = null === rV || void 0 === rV ? void 0 : rV.persistent;
        if (kV && !Je || !kV && !Ye) return;
        const bV = eV();
        if (QV = Math.min(vV + YV, (null !== (wV = null === bV || void 0 === bV ? void 0 : bV.started) && void 0 !== wV ? wV : vV) + UV, (null !== (ZV = null === bV || void 0 === bV ? void 0 : bV.lastActivity) && void 0 !== ZV ? ZV : vV) + yV), !1 === VV && ze(bV)) {
          var EV;
          nV && xV(we(we({}, bV), {}, {
            lastActivity: vV
          }));
          const VV = null === (EV = pV.metas.value.session) || void 0 === EV ? void 0 : EV.id;
          null != JV && null != bV.sessionMeta && bV.sessionId !== VV && JV(bV.sessionMeta)
        } else {
          var BV, jV, qV;
          let VV = Re(Me({
            isSampled: Ze(pV)
          }, pV), bV, pV);
          QV = vV + YV, xV(VV), null === (BV = pV.api) || void 0 === BV || BV.setSession(VV.sessionMeta), null === rV || void 0 === rV || null === (jV = rV.onSessionChange) || void 0 === jV || jV.call(rV, null !== (qV = null === bV || void 0 === bV ? void 0 : bV.sessionMeta) && void 0 !== qV ? qV : null, VV.sessionMeta)
        }
      }
    }

    function We(VV) {
      let eV, {
          fetchUserSession: xV,
          storeUserSession: JV,
          updateInterval: YV = 0
        } = VV,
        UV = 0;
      return VV => {
        const yV = ve();
        if (VV === eV && yV < UV && UV - yV <= YV) return;
        eV = VV, UV = yV + YV;
        const pV = xV();
        (null === pV || void 0 === pV ? void 0 : pV.sessionId) === VV && ze(pV) && JV(we(we({}, pV), {}, {
          lastActivity: yV
        }))
      }
    }

    function Re(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bV;
      var JV, YV, UV, yV, pV, QV;
      const nV = we(we({}, VV), {}, {
          sessionMeta: {
            id: VV.sessionId,
            attributes: De(we(we(we({}, null === (JV = xV.config.sessionTracking) || void 0 === JV || null === (JV = JV.session) || void 0 === JV ? void 0 : JV.attributes), null !== (YV = null === (UV = xV.metas.value.session) || void 0 === UV ? void 0 : UV.attributes) && void 0 !== YV ? YV : {}), {}, {
              isSampled: VV.isSampled.toString()
            }))
          }
        }),
        wV = null !== (yV = null === (pV = xV.metas.value.session) || void 0 === pV ? void 0 : pV.overrides) && void 0 !== yV ? yV : null === eV || void 0 === eV || null === (QV = eV.sessionMeta) || void 0 === QV ? void 0 : QV.overrides;
      HV(wV) || (nV.sessionMeta.overrides = wV);
      const ZV = null === eV || void 0 === eV ? void 0 : eV.sessionId;
      return null != ZV && (nV.sessionMeta.attributes.previousSession = ZV), nV
    }

    function ge(VV) {
      let {
        fetchUserSession: eV,
        storeUserSession: xV
      } = VV, JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bV, YV = !1;
      return function(VV) {
        if (YV) return;
        const UV = VV.session,
          yV = eV();
        let pV = null === UV || void 0 === UV ? void 0 : UV.id;
        const QV = null === UV || void 0 === UV ? void 0 : UV.attributes,
          nV = null === UV || void 0 === UV ? void 0 : UV.overrides,
          wV = null === yV || void 0 === yV ? void 0 : yV.sessionMeta,
          ZV = null === wV || void 0 === wV ? void 0 : wV.overrides,
          vV = !!nV && !je(nV, ZV),
          rV = !!QV && !je(QV, null === wV || void 0 === wV ? void 0 : wV.attributes);
        if (UV && pV !== (null === yV || void 0 === yV ? void 0 : yV.sessionId) || rV || vV) {
          var kV, bV;
          const VV = null != yV && pV === yV.sessionId,
            eV = Re(VV ? yV : Me({
              sessionId: pV,
              isSampled: Ze(JV)
            }, JV), yV, JV),
            UV = null === yV || void 0 === yV || null === (kV = yV.sessionMeta) || void 0 === kV || null === (kV = kV.attributes) || void 0 === kV ? void 0 : kV.previousSession;
          VV && null != UV && UV !== eV.sessionId && (eV.sessionMeta.attributes.previousSession = UV), (null === (bV = eV.sessionMeta.attributes) || void 0 === bV ? void 0 : bV.previousSession) === eV.sessionId && delete eV.sessionMeta.attributes.previousSession, xV(eV),
            function(VV, eV) {
              let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var YV, UV, yV;
              if (!eV) return;
              const pV = xV.serviceName,
                QV = null !== (YV = null !== (UV = JV.serviceName) && void 0 !== UV ? UV : null === (yV = VV.metas.value.app) || void 0 === yV ? void 0 : yV.name) && void 0 !== YV ? YV : "";
              pV && pV !== QV && VV.api.pushEvent(Ne, {
                serviceName: pV,
                previousServiceName: QV
              })
            }(JV, vV, nV, ZV), YV = !0;
          try {
            JV.api.setSession(eV.sessionMeta)
          } finally {
            YV = !1
          }
        }
      }
    }

    function De(VV) {
      const eV = {};
      for (const xV of Object.keys(VV)) {
        const JV = VV[xV];
        void 0 !== JV && (eV[xV] = JV)
      }
      return eV
    }

    function ie() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== VV && void 0 !== VV ? VV : {}, function() {
        const VV = new WeakSet;
        return function(eV, xV) {
          if (MV(xV) && null !== xV) {
            if (VV.has(xV)) return null;
            VV.add(xV)
          }
          return xV
        }
      }())
    }

    function Ce() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const eV = {};
      for (const [xV, JV] of Object.entries(VV)) eV[xV] = MV(JV) && null !== JV ? ie(JV) : String(JV);
      return eV
    }
    var ae = class VV {
      constructor() {
        var eV = this;
        let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bV;
        this.context = xV, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = VV => {
          this.adopting = !0;
          try {
            var eV;
            null === (eV = this.context.api) || void 0 === eV || eV.setSession(VV)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: VV = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return eV.updateUserSession({
            refreshActivity: VV
          })
        }, this.recordActivity = We({
          fetchUserSession: VV.fetchUserSession,
          storeUserSession: VV.storeUserSession,
          updateInterval: pV
        }), this.updateUserSession = Ge({
          fetchUserSession: VV.fetchUserSession,
          storeUserSession: VV.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: pV
        }, xV), this.init()
      }
      static removeUserSession() {
        xe(YV, VV.storageTypeLocal)
      }
      static storeUserSession(eV) {
        ee(YV, ie(eV), VV.storageTypeLocal)
      }
      static fetchUserSession() {
        const eV = Ve(YV, VV.storageTypeLocal);
        return eV ? JSON.parse(eV) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var VV;
            this.updateSession({
              refreshActivity: !1
            });
            const eV = null === (VV = this.context.api) || void 0 === VV || null === (VV = VV.getSession()) || void 0 === VV ? void 0 : VV.id;
            eV && this.recordActivity(eV)
          }
        })), this.context.metas.addListener(ge({
          fetchUserSession: VV.fetchUserSession,
          storeUserSession: VV.storeUserSession
        }, this.context))
      }
    };
    ae.storageTypeLocal = dV;
    var oe = class VV {
      constructor() {
        var eV = this;
        let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bV;
        this.context = xV, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: VV = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return eV.updateUserSession({
            refreshActivity: VV
          })
        }, this.recordActivity = We({
          fetchUserSession: VV.fetchUserSession,
          storeUserSession: VV.storeUserSession,
          updateInterval: pV
        }), this.updateUserSession = Ge({
          fetchUserSession: VV.fetchUserSession,
          storeUserSession: VV.storeUserSession,
          updateInterval: pV
        }, xV), this.init()
      }
      static removeUserSession() {
        xe(YV, VV.storageTypeSession)
      }
      static storeUserSession(eV) {
        ee(YV, ie(eV), VV.storageTypeSession)
      }
      static fetchUserSession() {
        const eV = Ve(YV, VV.storageTypeSession);
        return eV ? JSON.parse(eV) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var VV;
            this.updateSession({
              refreshActivity: !1
            });
            const eV = null === (VV = this.context.api) || void 0 === VV || null === (VV = VV.getSession()) || void 0 === VV ? void 0 : VV.id;
            eV && this.recordActivity(eV)
          }
        })), this.context.metas.addListener(ge({
          fetchUserSession: VV.fetchUserSession,
          storeUserSession: VV.storeUserSession
        }, this.context))
      }
    };
    oe.storageTypeSession = IV;
    const ce = new WeakMap;

    function he(VV) {
      let eV = ce.get(VV);
      if (!eV) {
        let xV = [],
          JV = [];
        eV = {
          addSessionUpdateListener: VV => {
            xV.push(VV)
          },
          removeSessionUpdateListener: VV => {
            xV = xV.filter((eV => eV !== VV))
          },
          notifySessionUpdate: VV => {
            xV.forEach((eV => eV(VV)))
          },
          shouldCapture: () => JV.every((VV => VV())),
          addCaptureFilter: VV => {
            JV.push(VV)
          },
          removeCaptureFilter: VV => {
            JV = JV.filter((eV => eV !== VV))
          }
        }, ce.set(VV, eV)
      }
      return eV
    }
    var le = class {
      constructor(VV, eV, xV) {
        this.metas = VV, this.transports = eV, this.onActivate = xV, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = VV => {
          var eV, xV, JV;
          const YV = this.pending;
          var UV, yV;
          if ("overrides" === VV.type) return void(this.pending = {
            reset: null !== (UV = null === YV || void 0 === YV ? void 0 : YV.reset) && void 0 !== UV && UV,
            inheritOverrides: null === (yV = null === YV || void 0 === YV ? void 0 : YV.inheritOverrides) || void 0 === yV || yV,
            session: we(we({}, null === YV || void 0 === YV ? void 0 : YV.session), {}, {
              overrides: we(we({}, null === YV || void 0 === YV ? void 0 : YV.session.overrides), VV.overrides)
            })
          });
          const pV = VV.session,
            QV = HV(pV) || null != pV && "id" in pV && !pV.id,
            nV = null !== (eV = null === pV || void 0 === pV ? void 0 : pV.overrides) && void 0 !== eV ? eV : null === YV || void 0 === YV ? void 0 : YV.session.overrides;
          this.pending = {
            reset: QV || !(null === pV || void 0 === pV ? void 0 : pV.id) && null !== (xV = null === YV || void 0 === YV ? void 0 : YV.reset) && void 0 !== xV && xV,
            inheritOverrides: !(!VV.overrides && void 0 !== (null === pV || void 0 === pV ? void 0 : pV.overrides)) && (null === (JV = null === YV || void 0 === YV ? void 0 : YV.inheritOverrides) || void 0 === JV || JV),
            session: {
              id: null === pV || void 0 === pV ? void 0 : pV.id,
              attributes: (null === pV || void 0 === pV ? void 0 : pV.attributes) && we({}, pV.attributes),
              overrides: VV.overrides ? we(we({}, null === YV || void 0 === YV ? void 0 : YV.session.overrides), VV.overrides) : nV && we({}, nV)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var VV, eV;
        this.waiting = !0, he(this.metas).addSessionUpdateListener(this.recordUpdate), he(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (VV = (eV = this.metas).addCaptureListener) || void 0 === VV || VV.call(eV, this.activate), this.activate()
      }
      destroy() {
        var VV, eV;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), he(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (VV = (eV = this.metas).removeCaptureListener) || void 0 === VV || VV.call(eV, this.activate), he(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Le(VV) {
      return (null === VV || void 0 === VV ? void 0 : VV.persistent) ? ae : oe
    }

    function fe() {}
    let me = function(VV) {
      return VV[VV.OFF = 0] = "OFF", VV[VV.ERROR = 1] = "ERROR", VV[VV.WARN = 2] = "WARN", VV[VV.INFO = 3] = "INFO", VV[VV.VERBOSE = 4] = "VERBOSE", VV
    }({});
    const Ke = {
        debug: fe,
        error: fe,
        info: fe,
        prefix: "Faro",
        warn: fe
      },
      He = 1;

    function ue(VV) {
      return ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ue(VV)
    }

    function se(VV) {
      var eV = function(VV, eV) {
        if ("object" != ue(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != ue(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == ue(eV) ? eV : eV + ""
    }

    function Se(VV, eV, xV) {
      return (eV = se(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Ie(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function de(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? Ie(Object(xV), !0).forEach((function(eV) {
          Se(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : Ie(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }
    const Oe = de({}, console);
    var Vx = class {
        constructor() {
          this.unpatchedConsole = Oe, this.internalLogger = Ke, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          this.internalLogger.debug(`${this.name}\n`, ...eV)
        }
        logInfo() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          this.internalLogger.info(`${this.name}\n`, ...eV)
        }
        logWarn() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          this.internalLogger.warn(`${this.name}\n`, ...eV)
        }
        logError() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          this.internalLogger.error(`${this.name}\n`, ...eV)
        }
      },
      ex = class extends Vx {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const xx = "2.12.1";
    var Jx = class extends ex {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = xx, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(VV) {
        var eV;
        const xV = VV.session;
        if (xV && xV.id !== (null === (eV = this.notifiedSession) || void 0 === eV ? void 0 : eV.id)) {
          var JV;
          if (this.isAdoptingSession()) return void(this.notifiedSession = xV);
          if (this.notifiedSession && this.notifiedSession.id === (null === (JV = xV.attributes) || void 0 === JV ? void 0 : JV.previousSession)) return this.api.pushEvent(Ae, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = xV);
          this.notifiedSession = xV, this.api.pushEvent(Te, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(VV, eV, xV) {
        const JV = null === xV || void 0 === xV ? void 0 : xV.session;
        let YV, UV, yV = VV.fetchUserSession();
        if (eV.persistent && eV.maxSessionPersistenceTime && yV) {
          const VV = ve();
          yV.lastActivity < VV - eV.maxSessionPersistenceTime && (ae.removeUserSession(), yV = null)
        }
        const pV = ze(yV);
        if ((null === xV || void 0 === xV ? void 0 : xV.reset) || !pV || (null === JV || void 0 === JV ? void 0 : JV.id) && JV.id !== (null === yV || void 0 === yV ? void 0 : yV.sessionId)) {
          var QV, nV, wV, ZV, vV, rV;
          UV = Me({
            sessionId: (null === xV || void 0 === xV ? void 0 : xV.reset) ? void 0 : null !== (QV = null === JV || void 0 === JV ? void 0 : JV.id) && void 0 !== QV ? QV : null === (nV = eV.session) || void 0 === nV ? void 0 : nV.id,
            isSampled: Ze(this)
          }, this);
          const VV = UV.sessionId,
            kV = xV && pV ? null === yV || void 0 === yV || null === (wV = yV.sessionMeta) || void 0 === wV ? void 0 : wV.overrides : void 0,
            bV = kV ? we(we({}, null === (ZV = eV.session) || void 0 === ZV ? void 0 : ZV.overrides), kV) : null === (vV = eV.session) || void 0 === vV ? void 0 : vV.overrides;
          UV.sessionMeta = we({
            id: VV,
            attributes: we({
              isSampled: UV.isSampled.toString()
            }, null === (rV = eV.session) || void 0 === rV ? void 0 : rV.attributes)
          }, bV ? {
            overrides: bV
          } : {}), YV = Te
        } else {
          var kV, bV;
          const VV = null === yV || void 0 === yV ? void 0 : yV.sessionId;
          UV = Me({
            sessionId: VV,
            isSampled: yV.isSampled || !1,
            started: null === yV || void 0 === yV ? void 0 : yV.started
          }, this);
          const xV = null === yV || void 0 === yV ? void 0 : yV.sessionMeta,
            JV = we(we({}, null === (kV = eV.session) || void 0 === kV ? void 0 : kV.overrides), null === xV || void 0 === xV ? void 0 : xV.overrides);
          UV.sessionMeta = we(we({}, eV.session), {}, {
            id: VV,
            attributes: we(we(we({}, null === (bV = eV.session) || void 0 === bV ? void 0 : bV.attributes), null === xV || void 0 === xV ? void 0 : xV.attributes), {}, {
              isSampled: UV.isSampled.toString()
            }),
            overrides: JV
          }), YV = Pe
        }
        var EV;
        if (JV && (UV.sessionMeta = we(we({}, UV.sessionMeta), {}, {
            attributes: we(we(we({}, null === (EV = UV.sessionMeta) || void 0 === EV ? void 0 : EV.attributes), JV.attributes), {}, {
              isSampled: UV.isSampled.toString()
            })
          }), JV.overrides)) {
          const VV = (null === xV || void 0 === xV ? void 0 : xV.inheritOverrides) ? we(we({}, UV.sessionMeta.overrides), JV.overrides) : JV.overrides;
          Object.keys(VV).length > 0 ? UV.sessionMeta.overrides = VV : delete UV.sessionMeta.overrides
        }
        return {
          initialSession: UV,
          lifecycleType: YV
        }
      }
      registerBeforeSendHook(VV) {
        var eV;
        this.beforeSendHook = eV => {
          var xV, JV;
          const YV = null === (xV = eV.meta.session) || void 0 === xV ? void 0 : xV.id;
          YV && !this.transports.isPaused() && VV(YV);
          const UV = null === (JV = eV.meta.session) || void 0 === JV ? void 0 : JV.attributes;
          if (UV && "true" === (null === UV || void 0 === UV ? void 0 : UV.isSampled)) {
            var yV;
            let VV = JSON.parse(JSON.stringify(eV));
            const xV = null === (yV = VV.meta.session) || void 0 === yV ? void 0 : yV.attributes;
            var pV;
            if (null === xV || void 0 === xV || delete xV.isSampled, 0 === Object.keys(null !== xV && void 0 !== xV ? xV : {}).length) null === (pV = VV.meta.session) || void 0 === pV || delete pV.attributes;
            return VV
          }
          return null
        }, null === (eV = this.transports) || void 0 === eV || eV.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var VV;
        this.logDebug("init session instrumentation");
        const eV = document.prerendering;
        var xV;
        if ((null === (VV = this.config.sessionTracking) || void 0 === VV ? void 0 : VV.enabled) && (eV || this.prerenderSession)) return null !== (xV = this.prerenderSession) && void 0 !== xV || (this.prerenderSession = new le(this.metas, this.transports, (VV => {
          this.prerenderSession = void 0, this.initializeSession(VV)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(VV) {
        const eV = this.config.sessionTracking;
        if (null === eV || void 0 === eV ? void 0 : eV.enabled) {
          var xV, JV;
          const YV = Le(eV),
            UV = new YV(this);
          this.isAdoptingSession = UV.isAdopting, this.registerBeforeSendHook(UV.recordActivity);
          const {
            initialSession: yV,
            lifecycleType: pV
          } = this.createInitialSession(YV, eV, VV);
          YV.storeUserSession(yV);
          const QV = yV.sessionMeta;
          this.notifiedSession = QV, this.api.setSession(QV), this.captureListener = () => {
            this.transports.isPaused() || UV.updateSession({
              refreshActivity: !1
            })
          }, null === (xV = (JV = this.metas).addCaptureListener) || void 0 === xV || xV.call(JV, this.captureListener), pV === Te && this.api.pushEvent(Te, {}, void 0, {
            skipDedupe: !0
          }), pV === Pe && this.api.pushEvent(Pe, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var VV, eV, xV;
        (null === (VV = this.prerenderSession) || void 0 === VV || VV.destroy(), this.captureListener) && (null === (eV = (xV = this.metas).removeCaptureListener) || void 0 === eV || eV.call(xV, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Yx(VV, eV, xV, JV) {
      const YV = {
        filename: VV || document.location.href,
        function: eV || "?"
      };
      return void 0 !== xV && (YV.lineno = xV), void 0 !== JV && (YV.colno = JV), YV
    }
    const Ux = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      yx = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      px = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Qx = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      nx = "safari-extension",
      wx = "safari-web-extension",
      Zx = /Minified React error #\d+;/i;

    function vx(VV, eV) {
      const xV = null === VV || void 0 === VV ? void 0 : VV.includes(nx),
        JV = !xV && (null === VV || void 0 === VV ? void 0 : VV.includes("safari-web-extension"));
      return xV || JV ? [(null === VV || void 0 === VV ? void 0 : VV.includes("@")) ? VV.split("@")[0] : VV, xV ? `${nx}:${eV}` : `${wx}:${eV}`] : [VV, eV]
    }
    const rx = 1024;

    function kx(VV) {
      let eV = [];
      VV.stacktrace ? eV = VV.stacktrace.split("\n").filter(((VV, eV) => eV % 2 === 0)) : VV.stack && (eV = VV.stack.split("\n"));
      const xV = eV.reduce(((eV, xV, JV) => {
        if (xV.length > rx) return eV;
        let YV, UV, yV, pV, QV;
        if (YV = Ux.exec(xV)) {
          if (UV = YV[1], yV = YV[2], pV = YV[3], QV = YV[4], null === yV || void 0 === yV ? void 0 : yV.startsWith("eval")) {
            const VV = yx.exec(yV);
            VV && (yV = VV[1], pV = VV[2], QV = VV[3])
          }
          yV = (null === yV || void 0 === yV ? void 0 : yV.startsWith("address at ")) ? yV.substring(11) : yV, [UV, yV] = vx(UV, yV)
        } else if (YV = px.exec(xV)) {
          if (UV = YV[1], yV = YV[3], pV = YV[4], QV = YV[5], yV && yV.includes(" > eval")) {
            const VV = Qx.exec(yV);
            VV && (UV = UV || "eval", yV = VV[1], pV = VV[2])
          } else 0 === JV && !QV && PV(VV.columnNumber) && (QV = String(VV.columnNumber + 1));
          [UV, yV] = vx(UV, yV)
        }
        return (yV || UV) && eV.push(Yx(yV, UV, pV ? Number(pV) : void 0, QV ? Number(QV) : void 0)), eV
      }), []);
      return Zx.test(VV.message) ? xV.slice(1) : xV
    }

    function bx(VV) {
      return {
        frames: kx(VV)
      }
    }
    const Ex = "http-request-start",
      Bx = "http-request-end";
    var jx = class VV {
      constructor() {
        this.subscribers = []
      }
      subscribe(VV) {
        return this.subscribers.push(VV), {
          unsubscribe: () => this.unsubscribe(VV)
        }
      }
      unsubscribe(VV) {
        this.subscribers = this.subscribers.filter((eV => eV !== VV))
      }
      notify(VV) {
        this.subscribers.forEach((eV => eV(VV)))
      }
      first() {
        const eV = new VV,
          xV = VV => {
            eV.notify(VV), JV.unsubscribe()
          },
          JV = this.subscribe(xV),
          YV = eV.unsubscribe.bind(eV);
        return this.withUnsubscribeOverride(eV, YV, xV)
      }
      takeWhile(eV) {
        const xV = new VV,
          JV = VV => {
            eV(VV) ? xV.notify(VV) : xV.unsubscribe(JV)
          };
        this.subscribe(JV);
        const YV = xV.unsubscribe.bind(xV);
        return this.withUnsubscribeOverride(xV, YV, JV)
      }
      filter(eV) {
        const xV = new VV,
          JV = VV => {
            eV(VV) && xV.notify(VV)
          };
        this.subscribe(JV);
        const YV = xV.unsubscribe.bind(xV);
        return this.withUnsubscribeOverride(xV, YV, JV)
      }
      merge() {
        const eV = new VV,
          xV = [];
        for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
        YV.forEach((VV => {
          const JV = VV.subscribe((VV => {
            eV.notify(VV)
          }));
          xV.push(JV)
        }));
        const yV = eV.unsubscribeAll.bind(eV);
        return eV.unsubscribe = () => {
          xV.forEach((VV => VV.unsubscribe())), yV()
        }, eV
      }
      withUnsubscribeOverride(VV, eV, xV) {
        return VV.unsubscribe = VV => {
          eV(VV), this.unsubscribe(xV)
        }, VV
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let qx = function(VV) {
      return VV.TRACE = "trace", VV.DEBUG = "debug", VV.INFO = "info", VV.LOG = "log", VV.WARN = "warn", VV.ERROR = "error", VV
    }({});
    const tx = "log",
      Fx = ["trace", "debug", "info", "log", "warn", "error"];
    let Tx, Px = !1;
    const Ax = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Nx = "Error",
      Xx = VV => VV.map((VV => MV(VV) ? ie(VV) : String(VV))).join(" ");

    function Mx(VV) {
      let eV, xV, JV, YV, UV = [];
      if (oV(VV) && VV.error) eV = VV.error.message, xV = VV.error.name, UV = kx(VV.error);
      else if ((JV = cV(VV)) || hV(VV)) {
        const {
          name: YV,
          message: UV
        } = VV;
        xV = null !== YV && void 0 !== YV ? YV : JV ? "DOMError" : "DOMException", eV = UV ? `${xV}: ${UV}` : xV
      } else aV(VV) ? (xV = VV.name, eV = VV.message, UV = kx(VV)) : (MV(VV) || (YV = iV(VV))) && (xV = YV ? VV.constructor.name : void 0, eV = `Non-Error exception captured with keys: ${Object.keys(VV)}`);
      return [eV, xV, UV]
    }

    function zx(VV) {
      const [eV, xV, JV, YV, UV] = VV;
      let yV, pV, QV = [];
      const nV = TV(eV),
        wV = Yx(xV, "?", JV, YV);
      return UV || !nV ? ([yV, pV, QV] = Mx(null !== UV && void 0 !== UV ? UV : eV), 0 === QV.length && (QV = [wV])) : nV && ([yV, pV] = function(VV) {
        var eV, xV;
        const JV = VV.match(Ax),
          YV = null !== (eV = null === JV || void 0 === JV ? void 0 : JV[1]) && void 0 !== eV ? eV : Nx;
        return [null !== (xV = null === JV || void 0 === JV ? void 0 : JV[2]) && void 0 !== xV ? xV : VV, YV]
      }(eV), QV = [wV]), {
        value: yV,
        type: pV,
        stackFrames: QV
      }
    }

    function Gx(VV, eV) {
      return aV(VV[0]) ? zx(VV) : {
        value: eV(VV)
      }
    }
    const Wx = VV => VV.map((VV => {
      try {
        return String(VV)
      } catch (eV) {
        return ""
      }
    })).join(" ");
    var Rx = class VV extends ex {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = xx, this.errorSerializer = Wx
      }
      initialize() {
        var eV, xV;
        const JV = this.config.consoleInstrumentation,
          YV = (null === JV || void 0 === JV ? void 0 : JV.serializeErrors) || !!(null === JV || void 0 === JV ? void 0 : JV.errorSerializer);
        this.errorSerializer = YV ? null !== (eV = null === JV || void 0 === JV ? void 0 : JV.errorSerializer) && void 0 !== eV ? eV : Xx : Wx;
        const UV = null !== (xV = null === JV || void 0 === JV ? void 0 : JV.disabledLevels) && void 0 !== xV ? xV : VV.defaultDisabledLevels,
          yV = function(VV) {
            if (Tx || (Tx = new jx), !Px) {
              const eV = null !== VV && void 0 !== VV ? VV : Oe;
              Fx.forEach((VV => {
                console[VV] = function() {
                  for (var xV, JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
                  Tx.notify({
                    type: "console",
                    level: VV,
                    args: YV
                  }), null === (xV = eV[VV]) || void 0 === xV || xV.apply(console, YV)
                }
              })), Px = !0
            }
            return Tx
          }(this.unpatchedConsole);
        this.subscription = yV.subscribe((eV => {
          let {
            level: xV,
            args: YV
          } = eV;
          if (!UV.includes(xV)) try {
            if (xV !== qx.ERROR || (null === JV || void 0 === JV ? void 0 : JV.consoleErrorAsLog))
              if (xV === qx.ERROR && (null === JV || void 0 === JV ? void 0 : JV.consoleErrorAsLog)) {
                const {
                  value: eV,
                  type: JV,
                  stackFrames: UV
                } = Gx(YV, this.errorSerializer);
                this.api.pushLog(eV ? [VV.consoleErrorPrefix + eV] : YV, {
                  level: xV,
                  context: {
                    value: null !== eV && void 0 !== eV ? eV : "",
                    type: null !== JV && void 0 !== JV ? JV : "",
                    stackFrames: (null === UV || void 0 === UV ? void 0 : UV.length) ? Xx(UV) : ""
                  }
                })
              } else this.api.pushLog(YV, {
                level: xV
              });
            else {
              const {
                value: eV,
                type: xV,
                stackFrames: JV
              } = Gx(YV, this.errorSerializer);
              if (eV && !xV && !JV) return void this.api.pushError(new Error(VV.consoleErrorPrefix + eV));
              this.api.pushError(new Error(VV.consoleErrorPrefix + eV), {
                type: xV,
                stackFrames: JV
              })
            }
          } catch (yV) {
            this.logError(yV)
          }
        }))
      }
      destroy() {
        var VV;
        null === (VV = this.subscription) || void 0 === VV || VV.unsubscribe(), this.subscription = void 0
      }
    };
    Rx.defaultDisabledLevels = [qx.DEBUG, qx.TRACE, qx.LOG], Rx.consoleErrorPrefix = "console.error: ";
    const gx = [];
    var Dx = class extends ex {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = xx
      }
      initialize() {
        this.logDebug("Initializing"),
          function(VV) {
            const eV = window.onerror;
            window.onerror = function() {
              for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
              try {
                const {
                  value: eV,
                  type: xV,
                  stackFrames: YV
                } = zx(JV), UV = JV[4];
                if (eV) {
                  const JV = {
                    type: xV,
                    stackFrames: YV
                  };
                  null != UV && (JV.originalError = UV), VV.pushError(new Error(eV), JV)
                }
              } finally {
                null === eV || void 0 === eV || eV.apply(window, JV)
              }
            }
          }(this.api),
          function(VV) {
            const eV = eV => {
              var xV;
              let JV, YV, UV = eV;
              if (UV.reason) UV = eV.reason;
              else if (null === (xV = eV.detail) || void 0 === xV ? void 0 : xV.reason) {
                var yV;
                UV = null === (yV = eV.detail) || void 0 === yV ? void 0 : yV.reason
              }
              let pV = [];
              gV(UV) ? (JV = `Non-Error promise rejection captured with value: ${String(UV)}`, YV = "UnhandledRejection") : [JV, YV, pV] = Mx(UV), JV && VV.pushError(new Error(JV), {
                type: YV,
                stackFrames: pV
              })
            };
            window.addEventListener("unhandledrejection", eV), gx.push(eV)
          }(this.api)
      }
    };
    const ix = "unknown";
    var Cx = class extends ex {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = xx, this.waitingForActivation = !1, this.sendViewChangedEvent = VV => {
          var eV;
          if (this.waitingForActivation || document.prerendering) return;
          const xV = VV.view;
          if (xV && xV.name !== (null === (eV = this.notifiedView) || void 0 === eV ? void 0 : eV.name)) {
            var JV, YV, UV;
            const VV = null !== (JV = null === (YV = this.notifiedView) || void 0 === YV ? void 0 : YV.name) && void 0 !== JV ? JV : ix;
            this.notifiedView = xV, this.api.pushEvent(Fe, {
              fromView: VV,
              toView: null !== (UV = xV.name) && void 0 !== UV ? UV : ix
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
    class ax {
      t;
      o = 0;
      i = [];
      l(VV) {
        if (VV.hadRecentInput) return;
        const eV = this.i[0],
          xV = this.i.at(-1);
        this.o && eV && xV && VV.startTime - xV.startTime < 1e3 && VV.startTime - eV.startTime < 5e3 ? (this.o += VV.value, this.i.push(VV)) : (this.o = VV.value, this.i = [VV]), this.t?.(VV)
      }
    }
    const ox = () => {
        const VV = performance.getEntriesByType("navigation")[0];
        if (VV && VV.responseStart > 0 && VV.responseStart < performance.now()) return VV
      },
      cx = VV => {
        if ("loading" === document.readyState) return "loading";
        const eV = ox();
        if (eV) {
          if (VV < eV.domInteractive) return "loading";
          if (0 === eV.domContentLoadedEventStart || VV < eV.domContentLoadedEventStart) return "dom-interactive";
          if (0 === eV.domComplete || VV < eV.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      hx = VV => {
        const eV = VV.nodeName;
        return 1 === VV.nodeType ? eV.toLowerCase() : eV.toUpperCase().replace(/^#/, "")
      },
      lx = VV => {
        let eV = "";
        try {
          for (; 9 !== VV?.nodeType;) {
            const xV = VV,
              JV = xV.id ? "#" + xV.id : [hx(xV), ...Array.from(xV.classList ?? []).sort()].join(".");
            if (eV.length + JV.length > 99) return eV || JV;
            if (eV = eV ? JV + ">" + eV : JV, xV.id) break;
            VV = xV.parentNode
          }
        } catch {}
        return eV
      },
      Lx = new WeakMap;

    function fx(VV, eV) {
      let xV = Lx.get(eV);
      return xV || (xV = new WeakMap, Lx.set(eV, xV)), xV.get(VV) || xV.set(VV, new eV), xV.get(VV)
    }
    let mx = -1;
    const Kx = () => mx,
      Hx = VV => {
        addEventListener("pageshow", (eV => {
          eV.persisted && (mx = eV.timeStamp, VV(eV))
        }), !0)
      },
      ux = (VV, eV, xV, JV) => {
        let YV, UV;
        return yV => {
          eV.value >= 0 && (yV || JV) && (UV = eV.value - (YV ?? 0), (UV || void 0 === YV) && (YV = eV.value, eV.delta = UV, eV.rating = ((VV, eV) => VV > eV[1] ? "poor" : VV > eV[0] ? "needs-improvement" : "good")(eV.value, xV), VV(eV)))
        }
      },
      sx = VV => {
        requestAnimationFrame((() => requestAnimationFrame((() => VV()))))
      },
      Sx = () => ox()?.activationStart ?? 0;
    let Ix = -1;
    const dx = new Set,
      Ox = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      VJ = VV => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === VV.type)
            for (const VV of dx) VV();
          isFinite(Ix) || (Ix = "visibilitychange" === VV.type ? VV.timeStamp : 0, removeEventListener("prerenderingchange", VJ, !0))
        }
      },
      eJ = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Ix = 1 / 0), Ix < 0) {
          const VV = Sx(),
            eV = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((eV => "hidden" === eV.name && eV.startTime >= VV))?.startTime;
          Ix = eV ?? Ox(), addEventListener("visibilitychange", VJ, !0), addEventListener("prerenderingchange", VJ, !0), Hx((() => {
            setTimeout((() => {
              Ix = Ox()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Ix
          },
          onHidden(VV) {
            dx.add(VV)
          }
        }
      },
      xJ = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0,
          yV = arguments.length > 6 ? arguments[6] : void 0;
        const pV = ox(),
          QV = pV?.navigationId || 0;
        let nV = "navigate";
        return xV ? nV = xV : Kx() >= 0 ? nV = "back-forward-cache" : pV && (document.prerendering || Sx() > 0 ? nV = "prerender" : document.wasDiscarded ? nV = "restore" : pV.type && (nV = pV.type.replace(/_/g, "-"))), {
          name: VV,
          value: eV,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: nV,
          navigationId: JV || QV,
          navigationInteractionId: YV,
          navigationURL: UV || pV?.name,
          navigationStartTime: yV || 0
        }
      },
      JJ = function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const JV = VV.filter((VV => PerformanceObserver.supportedEntryTypes.includes(VV)));
          if (JV.length > 0) {
            const VV = new PerformanceObserver((VV => {
              queueMicrotask((() => {
                const xV = VV.getEntries();
                JV.length > 1 && xV.sort(((VV, eV) => VV.startTime + VV.duration - (eV.startTime + eV.duration))), eV(xV)
              }))
            }));
            for (const eV of JV) VV.observe({
              type: eV,
              buffered: !0,
              ...xV
            });
            return VV
          }
        } catch {}
      },
      YJ = VV => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && VV && VV.reportSoftNavs,
      UJ = (VV, eV) => {
        if (VV.set(eV.navigationId, eV), VV.size > 2) {
          const eV = VV.keys().next().value;
          void 0 !== eV && VV.delete(eV)
        }
      },
      yJ = VV => {
        let eV = !1;
        return () => {
          eV || (VV(), eV = !0)
        }
      };
    class pJ {
      u
    }
    const QJ = VV => {
        document.prerendering ? addEventListener("prerenderingchange", VV, !0) : VV()
      },
      nJ = [1800, 3e3],
      wJ = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = YJ(eV);
        QJ((() => {
          const JV = fx(eV, pJ),
            YV = eJ();
          let UV, yV = xJ("FCP");
          const pV = JJ(["paint"], (VV => {
            for (const eV of VV) "first-contentful-paint" === eV.name && (pV.disconnect(), eV.startTime < YV.firstHiddenTime && (yV.value = Math.max(eV.startTime - Sx(), 0), yV.entries.push(eV), yV.navigationId = eV.navigationId || yV.navigationId, UV(!0)))
          }));
          pV && (UV = ux(VV, yV, nJ, eV.reportAllChanges), Hx((xV => {
            yV = xJ("FCP", -1, "back-forward-cache", yV.navigationId, yV.navigationInteractionId, yV.navigationURL, Kx()), UV = ux(VV, yV, nJ, eV.reportAllChanges), sx((() => {
              yV.value = performance.now() - xV.timeStamp, UV(!0)
            }))
          }))), xV && JJ(["soft-navigation"], (xV => {
            xV.forEach((xV => {
              JV.u && xV.navigationId && UJ(JV.u, xV);
              const YV = Math.max((xV.presentationTime || xV.paintTime || 0) - xV.startTime, 0);
              yV = xJ("FCP", YV, "soft-navigation", xV.navigationId, xV.interactionId, xV.name, xV.startTime), UV = ux(VV, yV, nJ, eV.reportAllChanges), UV(!0)
            }))
          }), eV)
        }))
      },
      ZJ = [.1, .25],
      vJ = VV => VV.find((VV => 1 === VV.node?.nodeType)) || VV[0];
    let rJ = 0,
      kJ = 1 / 0,
      bJ = 0;
    const EJ = VV => {
      for (const eV of VV) eV.interactionId && (kJ = Math.min(kJ, eV.interactionId), bJ = Math.max(bJ, eV.interactionId), rJ = bJ ? (bJ - kJ) / 7 + 1 : 0)
    };
    let BJ;
    const jJ = () => BJ ? rJ : performance.interactionCount ?? 0;
    class qJ {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return jJ() - this.h
      }
      D() {
        this.h = jJ(), this.v.length = 0, this.p.clear()
      }
      S(VV) {
        const eV = this.T(),
          xV = Math.min(this.v.length - 1, Math.floor(eV / 50));
        return !eV || -1 !== xV || "soft-navigation" !== VV && "back-forward-cache" !== VV ? this.v[xV] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(VV) {
        if (this.m?.(VV), !VV.interactionId) return;
        const eV = this.v.at(-1);
        let xV = this.p.get(VV.interactionId);
        if (xV || this.v.length < 10 || VV.duration > eV.k) {
          if (xV ? VV.duration > xV.k ? (xV.entries = [VV], xV.k = VV.duration) : VV.duration === xV.k && VV.startTime === xV.entries[0].startTime && xV.entries.push(VV) : (xV = {
              id: VV.interactionId,
              entries: [VV],
              k: VV.duration
            }, this.p.set(xV.id, xV), this.v.push(xV)), this.v.sort(((VV, eV) => eV.k - VV.k)), this.v.length > 10) {
            const VV = this.v.splice(10);
            for (const eV of VV) this.p.delete(eV.id)
          }
          this.M?.(xV)
        }
      }
    }
    const tJ = VV => {
        const eV = "requestIdleCallback" in globalThis ? 1e3 : 0,
          xV = globalThis.requestIdleCallback || setTimeout,
          JV = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) VV();
        else {
          const YV = yJ(VV);
          let UV = -1;
          const yV = () => {
            JV(UV), YV()
          };
          addEventListener("visibilitychange", yV, {
            once: !0,
            capture: !0
          }), UV = xV((() => {
            removeEventListener("visibilitychange", yV, {
              capture: !0
            }), YV()
          }), {
            timeout: eV
          })
        }
      },
      FJ = [200, 500],
      TJ = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = fx(eV = Object.assign({}, eV), qJ);
        let JV = [],
          YV = [],
          UV = 0;
        const yV = new WeakMap,
          pV = new WeakMap;
        let QV = !1;
        const nV = () => {
            QV || (QV = !0, tJ(wV))
          },
          wV = () => {
            const VV = new Set(xV.v.map((VV => yV.get(VV.entries[0])))),
              eV = YV.length - 10;
            YV = YV.filter(((xV, JV) => JV >= eV || VV.has(xV)));
            const pV = new Set;
            for (const xV of YV) {
              const VV = ZV(xV.startTime, xV.processingEnd);
              for (const eV of VV) pV.add(eV)
            }
            const nV = JV.length - 10;
            JV = JV.filter(((VV, eV) => pV.has(VV) || eV >= nV && VV.startTime > UV)), QV = !1
          };
        xV.m = VV => {
          const xV = VV.startTime + VV.duration;
          let JV;
          UV = Math.max(UV, VV.processingEnd);
          for (let UV = YV.length - 1; UV >= 0; UV--) {
            const yV = YV[UV];
            if (Math.abs(xV - yV.renderTime) <= 8) {
              JV = yV, JV.startTime = Math.min(VV.startTime, JV.startTime), JV.processingStart = Math.min(VV.processingStart, JV.processingStart), JV.processingEnd = Math.max(VV.processingEnd, JV.processingEnd), eV.includeProcessedEventEntries && JV.entries.push(VV);
              break
            }
          }
          JV || (JV = {
            startTime: VV.startTime,
            processingStart: VV.processingStart,
            processingEnd: VV.processingEnd,
            renderTime: xV,
            entries: eV.includeProcessedEventEntries ? [VV] : []
          }, YV.push(JV)), VV.interactionId && yV.set(VV, JV), nV()
        }, xV.M = VV => {
          if (!pV.get(VV)) {
            const xV = VV.entries.find((VV => VV.target))?.target;
            if (xV) {
              const JV = eV.generateTarget?.(xV) ?? lx(xV);
              pV.set(VV, JV)
            } else {
              const eV = VV.entries.find((VV => VV.targetSelector))?.targetSelector;
              eV && pV.set(VV, eV)
            }
          }
        };
        const ZV = (VV, eV) => {
          const xV = [];
          for (const YV of JV)
            if (!(YV.startTime + YV.duration < VV)) {
              if (YV.startTime > eV) break;
              xV.push(YV)
            } return xV
        };
        JJ(["long-animation-frame"], (VV => {
            JV = JV.concat(VV), nV()
          }), eV),
          function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const xV = eJ();
            QJ((() => {
              "interactionCount" in performance || BJ || (BJ = JJ(["event"], EJ, {
                durationThreshold: 0
              }));
              let JV, YV = xJ("INP");
              const UV = fx(eV, qJ),
                yV = (xV, yV, pV, QV, nV) => {
                  UV.D(), YV = xJ("INP", -1, xV, yV, pV, QV, nV), JV = ux(VV, YV, FJ, eV.reportAllChanges)
                },
                pV = () => {
                  const VV = UV.S(YV.navigationType);
                  VV && VV.k !== YV.value && (YV.value = VV.k, YV.entries = VV.entries, JV())
                },
                QV = VV => {
                  pV(), JV(!0), yV("soft-navigation", VV.navigationId, VV.interactionId, VV.name, VV.startTime)
                },
                nV = function(VV) {
                  let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  tJ((() => {
                    for (const eV of VV) "soft-navigation" !== eV.entryType ? UV.l(eV) : QV(eV);
                    pV(), eV && JV(!0)
                  }))
                },
                wV = ["event", "first-input"];
              YJ(eV) && wV.push("soft-navigation");
              const ZV = JJ(wV, nV, {
                ...eV,
                durationThreshold: eV.durationThreshold ?? 40
              });
              JV = ux(VV, YV, FJ, eV.reportAllChanges), ZV && (xV.onHidden((() => {
                nV(ZV.takeRecords(), !0)
              })), Hx((() => {
                yV("back-forward-cache", YV.navigationId, YV.navigationInteractionId, YV.navigationURL, Kx())
              })))
            }))
          }((eV => {
            VV((VV => {
              if (0 === VV.entries.length) {
                const eV = VV.navigationStartTime || 0,
                  xV = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: VV.value,
                    loadState: cx(eV)
                  };
                return Object.assign(VV, {
                  attribution: xV
                })
              }
              const eV = VV.entries[0],
                JV = yV.get(eV),
                YV = Math.max(JV.processingStart, eV.startTime),
                UV = Math.max(eV.startTime + eV.duration, YV),
                QV = Math.min(JV.processingEnd, UV),
                nV = JV.entries.sort(((VV, eV) => VV.processingStart - eV.processingStart)),
                wV = ZV(eV.startTime, QV),
                vV = xV.p.get(eV.interactionId),
                rV = {
                  interactionTarget: pV.get(vV),
                  interactionType: eV.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: eV.startTime,
                  nextPaintTime: UV,
                  processedEventEntries: nV,
                  longAnimationFrameEntries: wV,
                  inputDelay: YV - eV.startTime,
                  processingDuration: QV - YV,
                  presentationDelay: UV - QV,
                  loadState: cx(eV.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (VV => {
                const eV = VV.interactionTime,
                  xV = VV.nextPaintTime;
                if (!VV.longAnimationFrameEntries?.length || !eV || !xV) return;
                const JV = VV.inputDelay,
                  YV = VV.processingDuration;
                let UV, yV, pV = 0,
                  QV = 0,
                  nV = 0,
                  wV = 0;
                for (const rV of VV.longAnimationFrameEntries) {
                  QV = QV + rV.startTime + rV.duration - rV.styleAndLayoutStart;
                  for (const VV of rV.scripts) {
                    const xV = VV.startTime + VV.duration;
                    if (xV < eV) continue;
                    const nV = xV - Math.max(eV, VV.startTime),
                      ZV = VV.duration ? nV / VV.duration * VV.forcedStyleAndLayoutDuration : 0;
                    pV += nV - ZV, QV += ZV, nV > wV && (yV = VV.startTime < eV + JV ? "input-delay" : VV.startTime >= eV + JV + YV ? "presentation-delay" : "processing-duration", UV = VV, wV = nV)
                  }
                }
                const ZV = VV.longAnimationFrameEntries.at(-1),
                  vV = ZV ? ZV.startTime + ZV.duration : 0;
                vV >= eV + JV + YV && (nV = xV - vV), UV && yV && (VV.longestScript = {
                  entry: UV,
                  subpart: yV,
                  intersectingDuration: wV
                }), VV.totalScriptDuration = pV, VV.totalStyleAndLayoutDuration = QV, VV.totalPaintDuration = nV, VV.totalUnattributedDuration = xV - eV - pV - QV - nV
              })(rV), Object.assign(VV, {
                attribution: rV
              })
            })(eV))
          }), eV)
      };
    class PJ {
      m;
      u;
      l(VV) {
        this.m?.(VV)
      }
    }
    const AJ = [2500, 4e3];
    let NJ = 50;
    const XJ = [];
    JJ(["resource"], (VV => {
      for (const eV of VV) XJ.push(eV), XJ.length > NJ && XJ.shift()
    }));
    const MJ = [800, 1800],
      zJ = VV => {
        document.prerendering ? QJ((() => zJ(VV))) : "complete" !== document.readyState ? addEventListener("load", (() => zJ(VV)), !0) : setTimeout(VV)
      },
      GJ = "load_state",
      WJ = "time_to_first_byte";
    var RJ = class {
        constructor(VV, eV) {
          this.corePushMeasurement = VV, this.webVitalConfig = eV
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var VV;
          ! function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const xV = fx(eV = Object.assign({}, eV), ax),
              JV = new WeakMap;
            xV.t = VV => {
                if (VV?.sources?.length) {
                  const xV = vJ(VV.sources),
                    YV = xV?.node;
                  if (YV) {
                    const VV = eV.generateTarget?.(YV) ?? lx(YV);
                    JV.set(xV, VV)
                  }
                }
              },
              function(VV) {
                let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const xV = eJ();
                wJ(yJ((() => {
                  let JV, YV = xJ("CLS", 0);
                  const UV = fx(eV, ax),
                    yV = (xV, yV, pV, QV, nV) => {
                      YV = xJ("CLS", 0, xV, yV, pV, QV, nV), UV.o = 0, JV = ux(VV, YV, ZJ, eV.reportAllChanges)
                    },
                    pV = function() {
                      let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      UV.o > YV.value && (YV.value = UV.o, YV.entries = UV.i), JV(VV)
                    },
                    QV = VV => {
                      pV(!0), yV("soft-navigation", VV.navigationId, VV.interactionId, VV.name, VV.startTime)
                    },
                    nV = VV => {
                      for (const eV of VV) "soft-navigation" !== eV.entryType ? UV.l(eV) : QV(eV);
                      pV()
                    },
                    wV = ["layout-shift"];
                  YJ(eV) && wV.push("soft-navigation");
                  const ZV = JJ(wV, nV);
                  ZV && (JV = ux(VV, YV, ZJ, eV.reportAllChanges), xV.onHidden((() => {
                    nV(ZV.takeRecords()), JV(!0)
                  })), Hx((() => {
                    yV("back-forward-cache", YV.navigationId, YV.navigationInteractionId, YV.navigationURL, Kx()), sx(JV)
                  })), setTimeout(JV))
                })))
              }((eV => {
                VV((VV => {
                  let eV = {};
                  if (VV.entries.length) {
                    const xV = VV.entries.reduce(((VV, eV) => VV.value > eV.value ? VV : eV));
                    if (xV?.sources?.length) {
                      const VV = vJ(xV.sources);
                      VV && (eV = {
                        largestShiftTarget: JV.get(VV),
                        largestShiftTime: xV.startTime,
                        largestShiftValue: xV.value,
                        largestShiftSource: VV,
                        largestShiftEntry: xV,
                        loadState: cx(xV.startTime)
                      })
                    }
                  }
                  return Object.assign(VV, {
                    attribution: eV
                  })
                })(eV))
              }), eV)
          }((VV => {
            const {
              loadState: eV,
              largestShiftValue: xV,
              largestShiftTime: JV,
              largestShiftTarget: YV
            } = VV.attribution, UV = this.buildInitialValues(VV);
            this.addIfPresent(UV, "largest_shift_value", xV), this.addIfPresent(UV, "largest_shift_time", JV);
            const yV = this.buildInitialContext(VV);
            this.addIfPresent(yV, GJ, eV), this.addIfPresent(yV, "largest_shift_target", YV), this.pushMeasurement(UV, yV)
          }), {
            reportAllChanges: null === (VV = this.webVitalConfig) || void 0 === VV ? void 0 : VV.reportAllChanges
          })
        }
        measureFCP() {
          var VV;
          ! function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const xV = fx(eV = Object.assign({}, eV), pJ);
            YJ(eV) && (xV.u = new Map), wJ((eV => {
              VV((VV => {
                let eV = {
                  timeToFirstByte: 0,
                  firstByteToFCP: VV.value,
                  loadState: cx(Kx())
                };
                if ("soft-navigation" !== VV.navigationType) {
                  if (VV.entries.length) {
                    const xV = ox(),
                      JV = VV.entries.at(-1);
                    if (xV) {
                      const YV = xV.responseStart,
                        UV = xV.activationStart || 0,
                        yV = Math.max(0, YV - UV);
                      eV = {
                        timeToFirstByte: yV,
                        firstByteToFCP: VV.value - yV,
                        loadState: cx(VV.entries[0].startTime),
                        navigationEntry: xV,
                        fcpEntry: JV
                      }
                    }
                  }
                } else {
                  const JV = xV.u?.get(VV.navigationId);
                  JV && (eV = {
                    timeToFirstByte: 0,
                    firstByteToFCP: VV.value,
                    loadState: "complete",
                    navigationEntry: JV
                  })
                }
                return Object.assign(VV, {
                  attribution: eV
                })
              })(eV))
            }), eV)
          }((VV => {
            const {
              firstByteToFCP: eV,
              timeToFirstByte: xV,
              loadState: JV
            } = VV.attribution, YV = this.buildInitialValues(VV);
            this.addIfPresent(YV, "first_byte_to_fcp", eV), this.addIfPresent(YV, WJ, xV);
            const UV = this.buildInitialContext(VV);
            this.addIfPresent(UV, GJ, JV), this.pushMeasurement(YV, UV)
          }), {
            reportAllChanges: null === (VV = this.webVitalConfig) || void 0 === VV ? void 0 : VV.reportAllChanges
          })
        }
        measureINP() {
          var VV;
          TJ((VV => {
            var eV;
            const {
              interactionTime: xV,
              presentationDelay: JV,
              inputDelay: YV,
              processingDuration: UV,
              nextPaintTime: yV,
              loadState: pV,
              interactionTarget: QV,
              interactionType: nV,
              totalScriptDuration: wV,
              totalStyleAndLayoutDuration: ZV,
              totalPaintDuration: vV,
              totalUnattributedDuration: rV,
              longestScript: kV
            } = VV.attribution, bV = this.buildInitialValues(VV);
            this.addIfPresent(bV, "interaction_time", xV), this.addIfPresent(bV, "presentation_delay", JV), this.addIfPresent(bV, "input_delay", YV), this.addIfPresent(bV, "processing_duration", UV), this.addIfPresent(bV, "next_paint_time", yV), this.addNumberIfDefined(bV, "total_script_duration", wV), this.addNumberIfDefined(bV, "total_style_and_layout_duration", ZV), this.addNumberIfDefined(bV, "total_paint_duration", vV), this.addNumberIfDefined(bV, "total_unattributed_duration", rV), this.addNumberIfDefined(bV, "longest_script_intersecting_duration", null === kV || void 0 === kV ? void 0 : kV.intersectingDuration);
            const EV = this.buildInitialContext(VV);
            this.addIfPresent(EV, GJ, pV), this.addIfPresent(EV, "interaction_target", QV), this.addIfPresent(EV, "interaction_type", nV), this.addIfPresent(EV, "longest_script_subpart", null === kV || void 0 === kV ? void 0 : kV.subpart), this.addIfPresent(EV, "longest_script_invoker_type", null === kV || void 0 === kV ? void 0 : kV.entry.invokerType), (null === (eV = this.webVitalConfig) || void 0 === eV ? void 0 : eV.trackAttributionSources) && (this.addIfPresent(EV, "longest_script_invoker", null === kV || void 0 === kV ? void 0 : kV.entry.invoker), this.addIfPresent(EV, "longest_script_source_url", null === kV || void 0 === kV ? void 0 : kV.entry.sourceURL), this.addIfPresent(EV, "longest_script_source_function_name", null === kV || void 0 === kV ? void 0 : kV.entry.sourceFunctionName), this.addIfPresent(EV, "longest_script_source_char_position", void 0 !== (null === kV || void 0 === kV ? void 0 : kV.entry.sourceCharPosition) ? String(kV.entry.sourceCharPosition) : void 0)), this.pushMeasurement(bV, EV)
          }), {
            reportAllChanges: null === (VV = this.webVitalConfig) || void 0 === VV ? void 0 : VV.reportAllChanges
          })
        }
        measureLCP() {
          var VV;
          ! function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (eV = Object.assign({}, eV)).resourceBufferSize && (NJ = eV.resourceBufferSize);
            const xV = fx(eV, PJ),
              JV = new WeakMap;
            YJ(eV) && (xV.u = new Map), xV.m = VV => {
                const xV = VV.element;
                if (xV) {
                  const YV = eV.generateTarget?.(xV) ?? lx(xV);
                  JV.set(VV, YV)
                } else VV.id && JV.set(VV, `#${VV.id}`)
              },
              function(VV) {
                let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  xV = !1;
                const JV = YJ(eV);
                QJ((() => {
                  let YV, UV = eJ(),
                    yV = xJ("LCP");
                  const pV = fx(eV, PJ),
                    QV = (JV, pV, QV, nV, wV) => {
                      yV = xJ("LCP", -1, JV, pV, QV, nV, wV), YV = ux(VV, yV, AJ, eV.reportAllChanges), xV = !1, "soft-navigation" === JV && (UV = eJ(!0))
                    },
                    nV = VV => {
                      pV.u && VV.navigationId && UJ(pV.u, VV), xV || YV(!0), QV("soft-navigation", VV.navigationId, VV.interactionId, VV.name, VV.startTime);
                      const eV = VV.getLargestInteractionContentfulPaint?.();
                      eV && wV([eV])
                    },
                    wV = VV => {
                      eV.reportAllChanges || JV || (VV = VV.slice(-1));
                      for (const eV of VV) {
                        if (!eV) continue;
                        if ("soft-navigation" === eV.entryType) {
                          nV(eV);
                          continue
                        }
                        let VV = 0,
                          xV = [],
                          JV = eV.startTime;
                        if ("largest-contentful-paint" === eV.entryType) VV = Math.max(eV.startTime - Sx(), 0), pV.l(eV), xV = [eV];
                        else if ("interaction-contentful-paint" === eV.entryType) {
                          const YV = eV;
                          if (!yV.navigationId) continue;
                          if ("interactionId" in YV && YV.interactionId != yV.navigationInteractionId) continue;
                          JV = YV.largestContentfulPaint?.renderTime || 0, VV = Math.max(JV - eV.startTime, 0), YV.largestContentfulPaint && (pV.l(YV.largestContentfulPaint), xV = [YV.largestContentfulPaint])
                        }
                        JV < UV.firstHiddenTime && (yV.value = VV, yV.entries = xV, YV())
                      }
                    },
                    ZV = ["largest-contentful-paint"];
                  JV && ZV.push("interaction-contentful-paint", "soft-navigation");
                  const vV = JJ(ZV, wV);
                  if (vV) {
                    YV = ux(VV, yV, AJ, eV.reportAllChanges);
                    const UV = ["keydown", "click", "visibilitychange"],
                      pV = VV => {
                        if (VV.isTrusted && !xV) {
                          const VV = yV.id;
                          tJ((() => {
                            if (!xV) {
                              if (!JV) {
                                vV.disconnect();
                                for (const VV of UV) removeEventListener(VV, pV, {
                                  capture: !0
                                })
                              }
                              VV === yV.id && (xV = !0, YV(!0))
                            }
                          }))
                        }
                      };
                    for (const VV of UV) addEventListener(VV, pV, {
                      capture: !0
                    });
                    Hx((JV => {
                      QV("back-forward-cache", yV.navigationId, yV.navigationInteractionId, yV.navigationURL, Kx()), YV = ux(VV, yV, AJ, eV.reportAllChanges), sx((() => {
                        yV.value = performance.now() - JV.timeStamp, xV = !0, YV(!0)
                      }))
                    }))
                  }
                }))
              }((eV => {
                VV((VV => {
                  let eV = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: VV.value
                  };
                  if (VV.entries.length) {
                    const YV = VV.entries.at(-1),
                      UV = VV => VV.name === YV.url && (VV.requestStart || VV.startTime) <= YV.startTime,
                      yV = YV.url && (XJ.findLast(UV) || performance.getEntriesByType("resource").findLast(UV));
                    let pV;
                    eV.target = JV.get(YV), eV.lcpEntry = YV, YV.url && (eV.url = YV.url), yV && (eV.lcpResourceEntry = yV);
                    let QV = 0,
                      nV = 0;
                    if ("soft-navigation" !== VV.navigationType ? (pV = ox(), QV = pV?.activationStart ?? 0, nV = pV?.responseStart ?? 0) : (QV = VV.navigationStartTime || 0, pV = xV.u?.get(VV.navigationId)), pV) {
                      const xV = Math.max(0, nV - QV),
                        JV = Math.max(xV, yV ? (yV.requestStart || yV.startTime) - QV : 0),
                        YV = Math.min(VV.value, Math.max(JV, yV ? yV.responseEnd - QV : 0));
                      eV = {
                        ...eV,
                        timeToFirstByte: xV,
                        resourceLoadDelay: JV - xV,
                        resourceLoadDuration: YV - JV,
                        elementRenderDelay: VV.value - YV,
                        navigationEntry: pV
                      }
                    }
                  }
                  return Object.assign(VV, {
                    attribution: eV
                  })
                })(eV))
              }), eV)
          }((VV => {
            var eV;
            const {
              elementRenderDelay: xV,
              resourceLoadDelay: JV,
              resourceLoadDuration: YV,
              timeToFirstByte: UV,
              target: yV,
              url: pV,
              lcpResourceEntry: QV
            } = VV.attribution, nV = this.buildInitialValues(VV);
            this.addIfPresent(nV, "element_render_delay", xV), this.addIfPresent(nV, "resource_load_delay", JV), this.addIfPresent(nV, "resource_load_duration", YV), this.addIfPresent(nV, WJ, UV);
            const wV = this.buildInitialContext(VV);
            this.addIfPresent(wV, "element", yV), (null === (eV = this.webVitalConfig) || void 0 === eV ? void 0 : eV.trackAttributionSources) && (this.addIfPresent(wV, "resource_url", pV), this.addIfPresent(wV, "resource_delivery_type", null === QV || void 0 === QV ? void 0 : QV.deliveryType), this.addIfPresent(wV, "resource_initiator_type", null === QV || void 0 === QV ? void 0 : QV.initiatorType)), this.pushMeasurement(nV, wV)
          }), {
            reportAllChanges: null === (VV = this.webVitalConfig) || void 0 === VV ? void 0 : VV.reportAllChanges
          })
        }
        measureTTFB() {
          var VV;
          ! function(VV) {
            ! function(VV) {
              let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const xV = YJ(eV);
              let JV = xJ("TTFB"),
                YV = ux(VV, JV, MJ, eV.reportAllChanges);
              zJ((() => {
                const UV = ox();
                if (UV) {
                  const yV = UV.responseStart;
                  JV.value = Math.max(yV - Sx(), 0), JV.entries = [UV], YV(!0), Hx((() => {
                    JV = xJ("TTFB", 0, "back-forward-cache", JV.navigationId, JV.navigationInteractionId, JV.navigationURL, Kx()), YV = ux(VV, JV, MJ, eV.reportAllChanges), YV(!0)
                  })), xV && JJ(["soft-navigation"], (xV => {
                    xV.forEach((xV => {
                      xV.navigationId && (JV = xJ("TTFB", 0, "soft-navigation", xV.navigationId, xV.interactionId, xV.name, xV.startTime), JV.entries = [xV], YV = ux(VV, JV, MJ, eV.reportAllChanges), YV(!0))
                    }))
                  }), eV)
                }
              }))
            }((eV => {
              VV((VV => {
                const eV = VV.entries[0];
                let xV = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: eV
                };
                if (VV.entries.length && eV instanceof PerformanceNavigationTiming) {
                  const JV = eV.activationStart || 0,
                    YV = Math.max((eV.workerStart || eV.fetchStart || 0) - JV, 0),
                    UV = Math.max(eV.domainLookupStart - JV, 0),
                    yV = Math.max(eV.connectStart - JV, 0),
                    pV = Math.max(eV.connectEnd - JV, 0);
                  xV = {
                    waitingDuration: YV,
                    cacheDuration: UV - YV,
                    dnsDuration: yV - UV,
                    connectionDuration: pV - yV,
                    requestDuration: VV.value - pV,
                    navigationEntry: eV
                  }
                }
                return Object.assign(VV, {
                  attribution: xV
                })
              })(eV))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((VV => {
            const {
              dnsDuration: eV,
              connectionDuration: xV,
              requestDuration: JV,
              waitingDuration: YV,
              cacheDuration: UV
            } = VV.attribution, yV = this.buildInitialValues(VV);
            this.addIfPresent(yV, "dns_duration", eV), this.addIfPresent(yV, "connection_duration", xV), this.addIfPresent(yV, "request_duration", JV), this.addIfPresent(yV, "waiting_duration", YV), this.addIfPresent(yV, "cache_duration", UV);
            const pV = this.buildInitialContext(VV);
            this.pushMeasurement(yV, pV)
          }), {
            reportAllChanges: null === (VV = this.webVitalConfig) || void 0 === VV ? void 0 : VV.reportAllChanges
          })
        }
        buildInitialValues(VV) {
          return {
            [VV.name.toLowerCase()]: VV.value,
            delta: VV.delta
          }
        }
        buildInitialContext(VV) {
          var eV;
          const xV = null !== (eV = Ve("com.grafana.faro.lastNavigationId", IV)) && void 0 !== eV ? eV : ix;
          return {
            id: VV.id,
            rating: VV.rating,
            navigation_type: VV.navigationType,
            navigation_entry_id: xV
          }
        }
        pushMeasurement(VV, eV) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: VV
          }, {
            context: eV
          })
        }
        addIfPresent(VV, eV, xV) {
          xV && (VV[eV] = xV)
        }
        addNumberIfDefined(VV, eV, xV) {
          void 0 !== xV && (VV[eV] = xV)
        }
      },
      gJ = class extends ex {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = xx
        }
        initialize() {
          this.logDebug("Initializing"), new RJ(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const DJ = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function iJ() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const eV of VV)
        if ("traceparent" === eV.name) {
          if (!DJ.test(eV.description)) continue;
          const [, VV, xV] = eV.description.split("-");
          if (null != VV && null != xV) return {
            traceId: VV,
            spanId: xV
          };
          break
        }
    }

    function CJ(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: xV,
        monoNow: JV
      } = eV;
      return Math.min(xV, xV - (JV - VV))
    }

    function aJ(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [xV, JV] of Object.entries(eV)) {
        const eV = VV[xV];
        return null != eV && (GV(JV) ? JV.includes(eV) : eV === JV)
      }
      return !0
    }

    function oJ(VV) {
      const {
        connectEnd: eV,
        connectStart: xV,
        decodedBodySize: JV,
        domainLookupEnd: YV,
        domainLookupStart: UV,
        duration: yV,
        encodedBodySize: pV,
        fetchStart: QV,
        initiatorType: nV,
        name: wV,
        nextHopProtocol: ZV,
        redirectEnd: vV,
        redirectStart: rV,
        renderBlockingStatus: kV,
        requestStart: bV,
        responseEnd: EV,
        responseStart: BV,
        responseStatus: jV,
        secureConnectionStart: qV,
        transferSize: tV,
        workerStart: FV
      } = VV;
      return {
        name: wV,
        httpHost: hJ(wV),
        duration: lJ(yV),
        tcpHandshakeTime: lJ(eV - xV),
        dnsLookupTime: lJ(YV - UV),
        tlsNegotiationTime: lJ(eV - qV),
        responseStatus: lJ(jV),
        redirectTime: lJ(vV - rV),
        requestTime: lJ(BV - bV),
        responseTime: lJ(EV - BV),
        fetchTime: lJ(EV - QV),
        serviceWorkerTime: lJ(FV > 0 ? QV - FV : 0),
        decodedBodySize: lJ(JV),
        encodedBodySize: lJ(pV),
        cacheHitStatus: function() {
          let VV = "fullLoad";
          0 === tV ? JV > 0 && (VV = "cache") : null != jV ? 304 === jV && (VV = "conditionalFetch") : pV > 0 && tV < pV && (VV = "conditionalFetch");
          return VV
        }(),
        renderBlockingStatus: lJ(kV),
        protocol: ZV,
        initiatorType: nV,
        visibilityState: document.visibilityState,
        ttfb: lJ(BV - bV),
        transferSize: lJ(tV)
      }
    }

    function cJ(VV) {
      const {
        activationStart: eV,
        domComplete: xV,
        domContentLoadedEventEnd: JV,
        domContentLoadedEventStart: YV,
        domInteractive: UV,
        fetchStart: yV,
        loadEventEnd: pV,
        loadEventStart: QV,
        responseStart: nV,
        type: wV
      } = VV, ZV = function() {
        var VV;
        return null != (null === (VV = performance.timing) || void 0 === VV ? void 0 : VV.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return we(we({}, oJ(VV)), {}, {
        pageLoadTime: lJ(xV - yV),
        documentParsingTime: lJ(ZV ? UV - ZV : null),
        domProcessingTime: lJ(xV - UV),
        domContentLoadHandlerTime: lJ(JV - YV),
        onLoadTime: lJ(pV - QV),
        ttfb: lJ(Math.max(nV - (null !== eV && void 0 !== eV ? eV : 0), 0)),
        type: wV
      })
    }

    function hJ(VV) {
      try {
        return new URL(VV).host || ix
      } catch (eV) {
        return ix
      }
    }

    function lJ(VV) {
      return null == VV ? ix : "number" === typeof VV ? Math.round(VV > 0 ? VV : 0).toString() : VV.toString()
    }
    const LJ = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function fJ(VV, eV, xV, JV, YV, UV, yV) {
      try {
        var pV = VV[UV](yV),
          QV = pV.value
      } catch (VV) {
        return void xV(VV)
      }
      pV.done ? eV(QV) : Promise.resolve(QV).then(JV, YV)
    }

    function mJ(VV) {
      return function() {
        var eV = this,
          xV = arguments;
        return new Promise((function(JV, YV) {
          var UV = VV.apply(eV, xV);

          function yV(VV) {
            fJ(UV, JV, YV, yV, pV, "next", VV)
          }

          function pV(VV) {
            fJ(UV, JV, YV, yV, pV, "throw", VV)
          }
          yV(void 0)
        }))
      }
    }
    const KJ = new jx;
    var HJ = class extends ex {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = xx
      }
      initialize() {
        var VV = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let eV = !1;
        const xV = () => {
          ! function(VV) {
            if ("complete" === document.readyState) VV();
            else {
              const eV = () => {
                "complete" === document.readyState && (VV(), document.removeEventListener("readystatechange", eV))
              };
              document.addEventListener("readystatechange", eV)
            }
          }(mJ((function*() {
            if (eV) return;
            const xV = VV.api.pushEvent,
              {
                faroNavigationId: JV
              } = yield function(VV) {
                let eV;
                const xV = new Promise((VV => {
                  eV = VV
                }));
                return new PerformanceObserver((xV => {
                  var JV;
                  const [YV] = xV.getEntries();
                  if (null == YV || sV(YV.name)) return;
                  const UV = YV.toJSON();
                  let yV = iJ(null === UV || void 0 === UV ? void 0 : UV.serverTiming);
                  const pV = null !== (JV = Ve("com.grafana.faro.lastNavigationId", IV)) && void 0 !== JV ? JV : ix,
                    QV = we(we({}, cJ(UV)), {}, {
                      faroNavigationId: Be(),
                      faroPreviousNavigationId: pV
                    });
                  ee("com.grafana.faro.lastNavigationId", QV.faroNavigationId, IV), VV("faro.performance.navigation", QV, void 0, {
                    spanContext: yV,
                    timestampOverwriteMs: CJ(UV.startTime)
                  }), eV(QV)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), xV
              }(xV);
            eV || null == JV || function(VV, eV, xV, JV) {
              const YV = JV.trackResources;
              new PerformanceObserver((JV => {
                const UV = JV.getEntries(),
                  yV = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const pV of UV) {
                  if (sV(pV.name)) continue;
                  null === xV || void 0 === xV || xV.notify({
                    type: "resource"
                  });
                  const JV = pV.toJSON();
                  let UV = iJ(null === JV || void 0 === JV ? void 0 : JV.serverTiming);
                  (null == YV && aJ(JV, LJ) || YV) && eV("faro.performance.resource", we(we({}, oJ(JV)), {}, {
                    faroNavigationId: VV,
                    faroResourceId: Be()
                  }), void 0, {
                    spanContext: UV,
                    timestampOverwriteMs: CJ(JV.startTime, yV)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(JV, xV, KJ, VV.config)
          })))
        };
        this.cancelInitialization = () => {
          eV = !0, document.removeEventListener("prerenderingchange", xV)
        }, document.prerendering ? document.addEventListener("prerenderingchange", xV, {
          once: !0
        }) : xV()
      }
      destroy() {
        var VV;
        null === (VV = this.cancelInitialization) || void 0 === VV || VV.call(this), this.cancelInitialization = void 0
      }
    };
    const uJ = "data-faro-user-action-name",
      sJ = uJ.replace(/-name$/, "-timeout"),
      SJ = 1e3;

    function IJ(VV) {
      return `data-${(VV.startsWith("data-")?VV.slice(5):VV).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function dJ(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fe;
      if (void 0 === VV) return eV;
      let JV = NaN;
      try {
        JV = "string" === typeof VV && "" === VV.trim() ? NaN : Number(VV)
      } catch (YV) {}
      return !Number.isFinite(JV) || JV <= 0 ? (xV(`initialActivityTimeout must be a finite number greater than zero; using ${eV} ms`), eV) : JV > 1e3 ? (xV(`initialActivityTimeout cannot exceed ${SJ} ms; clamping to the maximum`), SJ) : JV
    }

    function OJ(VV, eV, xV) {
      return void 0 !== VV && window.clearTimeout(VV), window.setTimeout((() => {
        eV()
      }), xV)
    }

    function VY(VV) {
      return VV.type === Bx
    }
    let eY, xY;

    function JY() {
      return eY || (eY = new jx), xY || (xY = new MutationObserver(((VV, eV) => {
        eY.notify({
          type: "dom-mutation"
        })
      })), xY.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), eY
    }
    const YY = "fetch",
      UY = "xhr";
    let yY, pY, QY, nY, wY = !1;

    function ZY() {
      if (yY) return yY;

      function VV(VV) {
        yY.notify({
          type: Ex,
          request: VV
        })
      }

      function eV(VV) {
        yY.notify({
          type: Bx,
          request: VV
        })
      }
      return yY = new jx, wY || (! function(VV) {
        let {
          onRequestEnd: eV,
          onRequestStart: xV
        } = VV;
        QY || (QY = window.fetch);
        window.fetch = function() {
          var VV, JV;
          const YV = null !== (VV = SV(arguments[0])) && void 0 !== VV ? VV : "",
            UV = sV(YV),
            yV = (null !== (JV = arguments[1]) && void 0 !== JV ? JV : {}).method,
            pV = Be();
          return UV || xV({
            url: YV,
            method: yV,
            requestId: pV,
            apiType: YY
          }), QY.apply(this, arguments).then((VV => (UV || eV({
            url: YV,
            method: yV,
            requestId: pV,
            apiType: YY
          }), VV))).catch((VV => {
            throw UV || eV({
              url: YV,
              method: yV,
              requestId: pV,
              apiType: YY
            }), VV
          }))
        }
      }({
        onRequestStart: VV,
        onRequestEnd: eV
      }), function(VV) {
        let {
          onRequestStart: eV,
          onRequestEnd: xV
        } = VV;
        pY || (pY = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const VV = arguments[1],
            JV = sV(VV),
            YV = arguments[0],
            UV = Be();
          this.addEventListener("loadstart", (function() {
            JV || eV({
              url: VV,
              method: YV,
              requestId: UV,
              apiType: UY
            })
          })), this.addEventListener("load", (function() {
            JV || xV({
              url: VV,
              method: YV,
              requestId: UV,
              apiType: UY
            })
          })), this.addEventListener("error", (function() {
            JV || xV({
              url: VV,
              method: YV,
              requestId: UV,
              apiType: UY
            })
          })), this.addEventListener("abort", (function() {
            JV || xV({
              url: VV,
              method: YV,
              requestId: UV,
              apiType: UY
            })
          })), pY.apply(this, arguments)
        }
      }({
        onRequestStart: VV,
        onRequestEnd: eV
      }), wY = !0), yY
    }
    let vY, rY = !1;
    let kY = function(VV) {
      return VV[VV.Started = 0] = "Started", VV[VV.Halted = 1] = "Halted", VV[VV.Cancelled = 2] = "Cancelled", VV[VV.Ended = 3] = "Ended", VV
    }({});
    var bY = class {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = VV, this.logDebug = eV, this.initialActivityTimeout = xV, this.http = ZY(), this.dom = JY(), this.perf = (nY || (nY = new jx), rY || (vY = KJ.subscribe((VV => {
          "resource" === VV.type && nY.notify({
            type: "resource-entry"
          })
        })), rY = !0), nY), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new jx).merge(this.http, this.dom, this.perf).takeWhile((() => [kY.Started, kY.Halted].includes(this.userAction.getState()))).filter((VV => !!(this.userAction.getState() !== kY.Halted || VY(VV) && this.runningRequests.has(VV.request.requestId)))).subscribe((VV => {
          (function(VV) {
            return VV.type === Ex
          })(VV) && this.runningRequests.set(VV.request.requestId, VV.request), VY(VV) && this.runningRequests.delete(VV.request.requestId), VY(VV) ? this.userAction.getState() === kY.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((VV => [kY.Ended, kY.Cancelled].includes(VV))).first().subscribe((() => this.cleanup())), this.startupTid = OJ(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === kY.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === kY.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = OJ(this.haltTid, (() => {
          this.userAction.getState() === kY.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var VV, eV;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (VV = this.allMonitorsSub) || void 0 === VV || VV.unsubscribe(), null === (eV = this.stateSub) || void 0 === eV || eV.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(VV) {
        void 0 !== VV && window.clearTimeout(VV)
      }
    };

    function EY(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe;
      var xV;
      const {
        api: JV,
        config: YV,
        internalLogger: UV
      } = VV, yV = dJ(null === (xV = YV.userActionsInstrumentation) || void 0 === xV ? void 0 : xV.initialActivityTimeout, 100, eV);
      return {
        processUserEvent: function(VV) {
          var eV, xV;
          const UV = null !== (eV = null === (xV = YV.userActionsInstrumentation) || void 0 === xV ? void 0 : xV.dataAttributeName) && void 0 !== eV ? eV : uJ,
            yV = VV.target;
          if (!(yV instanceof Element)) return;
          const pV = function(VV, eV) {
              let xV = VV;
              for (; xV;) {
                if (xV.hasAttribute(eV)) return xV;
                xV = xV.parentElement
              }
              return null
            }(yV, IJ(UV)),
            QV = function(VV, eV) {
              if (!VV) return;
              const xV = function(VV) {
                  return IJ(VV).slice(5).replace(/-(.)/g, ((VV, eV) => eV.toUpperCase()))
                }(eV),
                JV = VV.dataset;
              for (const YV in JV)
                if (YV === xV) return JV[YV]
            }(pV, UV);
          if (!pV || !QV) return;
          const nV = function(VV, eV) {
            const xV = VV.getAttribute(function(VV) {
              const eV = IJ(VV);
              return eV.endsWith("-name") ? `${eV.slice(0,-5)}-timeout` : `${eV}-timeout`
            }(eV));
            return null === xV ? void 0 : Number(xV)
          }(pV, UV);
          JV.startUserAction(QV, {}, {
            triggerName: VV.type,
            initialActivityTimeout: nV
          })
        },
        processUserActionStarted: function(VV, xV) {
          const JV = VV,
            YV = dJ(xV, yV, eV);
          new bY(JV, UV.debug, YV).attach()
        }
      }
    }
    const BY = "user_action_start",
      jY = {
        Normal: "normal",
        Critical: "critical"
      };
    var qY = class {
        constructor() {
          this.buffer = []
        }
        addItem(VV) {
          this.buffer.push(VV)
        }
        flushBuffer(VV) {
          if (zV(VV))
            for (const eV of this.buffer) VV(eV);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      tY = class extends jx {
        constructor(VV) {
          let {
            name: eV,
            parentId: xV,
            trigger: JV,
            transports: YV,
            attributes: UV,
            trackUserActionsExcludeItem: yV,
            importance: pV = jY.Normal,
            pushEvent: QV
          } = VV;
          super(), this.name = eV, this.attributes = UV, this.id = Be(), this.trigger = JV, this.parentId = null !== xV && void 0 !== xV ? xV : this.id, this.trackUserActionsExcludeItem = yV, this.importance = pV, this._pushEvent = QV, this._itemBuffer = new qY, this._transports = YV, this._state = 0, this._start()
        }
        addItem(VV) {
          return 0 === this._state && (this._itemBuffer.addItem(VV), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = ve(), this._startTimeMono = re())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((VV => {
            this._transports.execute(VV)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const VV = ve(),
            eV = re() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((VV => {
            if (function(VV, eV) {
                return (null === eV || void 0 === eV ? void 0 : eV(VV)) || "measurement" === VV.type && "web-vitals" === VV.payload.type
              }(VV, this.trackUserActionsExcludeItem)) return void this._transports.execute(VV);
            const eV = de(de({}, VV), {}, {
              payload: de(de({}, VV.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(eV)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", de({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: VV.toString(),
            userActionDuration: eV.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Ce(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: VV => (VV.action = {
              id: this.id,
              name: this.name
            }, VV)
          })
        }
        getState() {
          return this._state
        }
      };
    const FY = new jx;

    function TY(VV, eV) {
      return !!VV && (0 === (null === VV || void 0 === VV ? void 0 : VV.getState()) && (VV.addItem(eV), !0))
    }
    var PY = class extends ex {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = xx
        }
        initialize() {
          const {
            processUserEvent: VV,
            processUserActionStarted: eV
          } = EY(bV, (VV => this.logWarn(VV)));
          this._processUserEvent = VV, this._processKeydown = eV => {
            [" ", "Enter"].includes(eV.key) && VV(eV)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = FY.subscribe((VV => {
            let {
              type: xV,
              userAction: JV,
              initialActivityTimeout: YV
            } = VV;
            "user_action_start" === xV && eV(JV, YV)
          }))
        }
        destroy() {
          var VV;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (VV = this._userActionSub) || void 0 === VV || VV.unsubscribe()
        }
      },
      AY = class extends ex {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = xx, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(VV) {
          const eV = {
            blockedURI: VV.blockedURI,
            columnNumber: VV.columnNumber,
            disposition: VV.disposition,
            documentURI: VV.documentURI,
            effectiveDirective: VV.effectiveDirective,
            lineNumber: VV.lineNumber,
            originalPolicy: VV.originalPolicy,
            referrer: VV.referrer,
            sample: VV.sample,
            sourceFile: VV.sourceFile,
            statusCode: VV.statusCode,
            violatedDirective: VV.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Ce(eV))
        }
      };
    var NY = class extends jx {
      constructor(VV, eV) {
        var xV, JV, YV, UV;
        super(), this._tracking = !1, this.eventsObservable = VV, this._options = {
          inactivityMs: null !== (xV = null === eV || void 0 === eV ? void 0 : eV.inactivityMs) && void 0 !== xV ? xV : 100,
          drainTimeoutMs: null !== (JV = null === eV || void 0 === eV ? void 0 : eV.drainTimeoutMs) && void 0 !== JV ? JV : 1e4,
          isOperationStart: null !== (YV = null === eV || void 0 === eV ? void 0 : eV.isOperationStart) && void 0 !== YV ? YV : () => {},
          isOperationEnd: null !== (UV = null === eV || void 0 === eV ? void 0 : eV.isOperationEnd) && void 0 !== UV ? UV : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((VV => {
          var eV;
          this._lastEventTime = re(), null === (eV = this._currentEvents) || void 0 === eV || eV.push(VV);
          const xV = this._options.isOperationStart(VV);
          var JV;
          xV && (null === (JV = this._activeOperations) || void 0 === JV || JV.set(xV, !0));
          const YV = this._options.isOperationEnd(VV);
          var UV;
          YV && (null === (UV = this._activeOperations) || void 0 === UV || UV.delete(YV));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = re(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let VV;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), VV = this.hasActiveOperations() ? re() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: VV
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = XY(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = XY(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(VV) {
        VV && clearTimeout(VV)
      }
    };

    function XY(VV, eV, xV) {
      return VV && clearTimeout(VV), VV = setTimeout((() => {
        eV()
      }), xV)
    }
    let MY;
    const zY = new Set,
      GY = new Map;
    let WY, RY, gY, DY, iY, CY, aY, oY, cY = !1;
    var hY = class extends ex {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = xx
      }
      initialize() {
        const VV = ZY(),
          eV = JY(),
          xV = function() {
            function VV(VV, eV) {
              const xV = null !== eV && void 0 !== eV ? eV : location.href;
              xV !== RY && (WY.notify({
                type: "url-change",
                from: RY,
                to: xV,
                trigger: VV
              }), RY = xV)
            }
            if (WY || (WY = new jx, RY = location.href), !cY)
              if ("navigation" in window && "NavigateEvent" in window) {
                aY = eV => {
                  try {
                    const xV = null === eV || void 0 === eV ? void 0 : eV.destination;
                    (null === xV || void 0 === xV ? void 0 : xV.sameDocument) && "string" === typeof xV.url && VV("navigate", xV.url)
                  } catch (xV) {}
                }, window.navigation.addEventListener("navigate", aY);
                const eV = window.NavigateEvent;
                eV && eV.prototype && "function" === typeof eV.prototype.intercept && (oY || (oY = eV.prototype.intercept), eV.prototype.intercept = function(eV) {
                  try {
                    const eV = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      xV = null === this || void 0 === this ? void 0 : this.destination;
                    eV && xV && !1 === xV.sameDocument && "string" === typeof xV.url && VV("navigate-intercept", xV.url)
                  } catch (xV) {}
                  return oY.call(this, eV)
                }), cY = !0
              } else gY || (gY = window.history.pushState), window.history.pushState = function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                const YV = gY.apply(window.history, xV);
                return VV("pushState"), YV
              }, DY || (DY = window.history.replaceState), window.history.replaceState = function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                const YV = DY.apply(window.history, xV);
                return VV("replaceState"), YV
              }, iY = () => VV("popstate"), CY = () => VV("hashchange"), window.addEventListener("popstate", iY), window.addEventListener("hashchange", CY), cY = !0;
            return WY
          }(),
          JV = (YV = ["pointerdown", "keydown"], MY || (MY = new jx), YV.forEach((VV => {
            if (!zY.has(VV)) {
              const eV = () => {
                MY.notify({
                  type: "interaction",
                  name: VV
                })
              };
              window.addEventListener(VV, eV), zY.add(VV), GY.set(VV, eV)
            }
          })), MY);
        var YV;
        const UV = new NY((new jx).merge(VV, eV, xV), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: VV => function(VV) {
            return VV.type === Ex
          }(VV) ? VV.request.requestId : void 0,
          isOperationEnd: VV => function(VV) {
            return VV.type === Bx
          }(VV) ? VV.request.requestId : void 0
        });
        UV.filter((VV => "tracking-ended" === VV.message)).subscribe((VV => {
          var eV, xV;
          if ((null === (eV = VV.events) || void 0 === eV ? void 0 : eV.some((VV => "url-change" === VV.type))) && (null === (xV = VV.events) || void 0 === xV ? void 0 : xV.some((VV => "dom-mutation" === VV.type)))) {
            var JV;
            const eV = null === (JV = VV.events) || void 0 === JV ? void 0 : JV.find((VV => "url-change" === VV.type));
            bV.api.pushEvent("faro.navigation", {
              fromUrl: null === eV || void 0 === eV ? void 0 : eV.from,
              toUrl: null === eV || void 0 === eV ? void 0 : eV.to,
              sameDocument: String(!0),
              duration: VV.duration
            })
          }
        })), JV.subscribe((() => {
          UV.startTracking()
        }))
      }
    };

    function lY() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const eV = [new PY, new Dx, new gJ, new Jx, new Cx, new hY];
      return !1 !== VV.enablePerformanceInstrumentation && eV.unshift(new HJ), !1 !== VV.enableContentSecurityPolicyInstrumentation && eV.push(new AY), !1 !== VV.captureConsole && eV.push(new Rx), eV
    }
    var LY = xV(7246);
    let fY, mY;

    function KY() {
      const VV = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return fY === VV && mY || (mY = new LY.UAParser(VV).getResult(), fY = VV), mY
    }
    const HY = () => {
        const {
          browser: VV,
          os: eV,
          ua: xV
        } = KY(), {
          name: JV,
          version: YV
        } = VV, {
          name: UV,
          version: yV
        } = eV, pV = navigator.language, QV = xV.includes("Mobi"), nV = function() {
          if (!JV || !YV) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== JV && void 0 !== JV ? JV : ix,
            version: null !== YV && void 0 !== YV ? YV : ix,
            os: `${null!==UV&&void 0!==UV?UV:ix} ${null!==yV&&void 0!==yV?yV:ix}`,
            userAgent: null !== xV && void 0 !== xV ? xV : ix,
            language: null !== pV && void 0 !== pV ? pV : ix,
            mobile: QV,
            brands: null !== nV && void 0 !== nV ? nV : ix,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      uY = () => {
        const {
          name: VV,
          version: eV
        } = KY().os;
        if (!VV && !eV) return {};
        const xV = {};
        return VV && (xV.name = VV), eV && (xV.version = eV), {
          os: xV
        }
      };

    function sY(VV) {
      var eV, xV, JV;
      return {
        id: null !== (eV = null === (xV = bV.config) || void 0 === xV || null === (xV = xV.sessionTracking) || void 0 === xV || null === (JV = xV.generateSessionId) || void 0 === JV ? void 0 : JV.call(xV)) && void 0 !== eV ? eV : Be(),
        attributes: VV
      }
    }
    const SY = () => ({
      sdk: {
        name: "faro-web",
        version: xx
      }
    });
    var IY = class extends Vx {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let dY = function(VV) {
      return VV.EXCEPTION = "exception", VV.LOG = "log", VV.MEASUREMENT = "measurement", VV.TRACE = "trace", VV.EVENT = "event", VV
    }({});
    const OY = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function VU(VV, eV) {
      var xV, JV;
      if (void 0 === eV) return VV;
      if (void 0 === VV) return {
        resourceSpans: eV
      };
      const YV = null === (xV = VV.resourceSpans) || void 0 === xV ? void 0 : xV[0];
      if (void 0 === YV) return VV;
      const UV = (null === YV || void 0 === YV ? void 0 : YV.scopeSpans) || [],
        yV = (null === eV || void 0 === eV || null === (JV = eV[0]) || void 0 === JV ? void 0 : JV.scopeSpans) || [];
      return de(de({}, VV), {}, {
        resourceSpans: [de(de({}, YV), {}, {
          scopeSpans: [...UV, ...yV]
        })]
      })
    }

    function eU(VV) {
      let eV = {
        meta: {}
      };
      return void 0 !== VV[0] && (eV.meta = VV[0].meta), VV.forEach((VV => {
        switch (VV.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const xV = OY[VV.type],
              JV = eV[xV];
            eV = de(de({}, eV), {}, {
              [xV]: void 0 === JV ? [VV.payload] : [...JV, VV.payload]
            });
            break
          }
          case "trace":
            eV = de(de({}, eV), {}, {
              traces: VU(eV.traces, VV.payload.resourceSpans)
            })
        }
      })), eV
    }
    var xU = class extends IY {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = VV, this.name = "@grafana/faro-web-sdk:transport-console", this.version = xx
      }
      send(VV) {
        var eV;
        return this.unpatchedConsole[null !== (eV = this.options.level) && void 0 !== eV ? eV : qx.DEBUG]("New event", eU([VV]))
      }
    };
    const JU = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      YU = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      UU = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      yU = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      pU = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      QU = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function nU(VV) {
      let {
        weekday: eV,
        day: xV,
        month: JV,
        year: YV,
        hour: UV,
        minute: yV,
        second: pV
      } = VV;
      if (YV < 1900 || xV < 1 || UV > 23 || yV > 59 || pV > 60) return;
      const QV = 60 === pV,
        nV = new Date(0);
      return nV.setUTCFullYear(YV, JV, xV), nV.setUTCHours(UV, yV, QV ? 59 : pV, 0), nV.getUTCDay() === eV && nV.getUTCDate() === xV && nV.getUTCMonth() === JV && nV.getUTCFullYear() === YV && nV.getUTCHours() === UV && nV.getUTCMinutes() === yV && nV.getUTCSeconds() === (QV ? 59 : pV) ? nV.getTime() + (QV ? 1e3 : 0) : void 0
    }
    var wU = class {
      constructor(VV) {
        this.options = VV, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var VV = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const eV = this.sequence++;
        let xV = !1;
        return {
          deliver: function() {
            var xV = mJ((function*(xV) {
              const JV = VV.options.getNow();
              let YV, UV = 0;
              for (;;) {
                var yV, pV, QV;
                const nV = VV.options.retry.maxAttempts - UV,
                  wV = yield VV.runAttempt((() => xV(nV, VV.unloading)), UV > 0);
                if (UV += wV.attemptsMade, "success" === wV.kind) return {
                  kind: "success",
                  attempts: UV,
                  elapsedTimeMs: VV.options.getNow() - JV
                };
                if (YV = wV.failure, "terminal" === wV.kind || VV.unloading) return {
                  kind: "terminal",
                  attempts: UV,
                  elapsedTimeMs: VV.options.getNow() - JV,
                  failure: YV
                };
                if (UV >= VV.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: UV,
                  elapsedTimeMs: VV.options.getNow() - JV,
                  failure: YV,
                  reason: "retries-exhausted"
                };
                if (null != wV.retryAfterMs && wV.retryAfterMs > VV.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: UV,
                  elapsedTimeMs: VV.options.getNow() - JV,
                  failure: YV,
                  reason: "retry-after-too-long"
                };
                const ZV = Math.min(null !== (yV = wV.retryAfterMs) && void 0 !== yV ? yV : VV.options.retry.initialBackoffMs * Math.pow(VV.options.retry.backoffMultiplier, UV - 1), VV.options.retry.maxBackoffMs);
                if (null === (pV = (QV = VV.options).onRetry) || void 0 === pV || pV.call(QV, ZV, UV + 1), yield VV.waitForTurn(eV, ZV)) {
                  const eV = VV.options.retry.maxAttempts - UV,
                    YV = yield VV.runAttempt((() => xV(eV, !0)));
                  return UV += YV.attemptsMade, {
                    kind: "success" === YV.kind ? "success" : "terminal",
                    attempts: UV,
                    elapsedTimeMs: VV.options.getNow() - JV,
                    failure: "success" === YV.kind ? void 0 : YV.failure
                  }
                }
              }
            }));
            return function(VV) {
              return xV.apply(this, arguments)
            }
          }(),
          release: () => {
            xV || (xV = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const VV = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const eV of VV) eV.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((xV, JV) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const eV = () => {
                this.inProgress--, this.runNextAttempt()
              };
              VV().then((VV => {
                eV(), xV(VV)
              }), (VV => {
                eV(), JV(VV)
              }))
            },
            isRedelivery: eV
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const VV = this.options.getNow(),
            eV = this.attemptQueue.findIndex((eV => {
              let {
                isRedelivery: xV
              } = eV;
              return this.unloading || !xV || VV >= this.nextSendAt
            }));
          if (eV < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - VV)));
          const [xV] = this.attemptQueue.splice(eV, 1);
          xV.isRedelivery && !this.unloading && (this.nextSendAt = VV + 1), xV.run()
        }
      }
      waitForTurn(VV, eV) {
        const xV = Math.min(eV * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((eV => {
          this.waiting.push({
            sequence: VV,
            readyAt: this.options.getNow() + xV,
            resolve: eV
          }), this.waiting.sort(((VV, eV) => VV.readyAt === eV.readyAt ? VV.sequence - eV.sequence : VV.readyAt - eV.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const VV = this.waiting[0],
          eV = VV.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const eV = this.waiting.indexOf(VV);
          eV >= 0 && this.waiting.splice(eV, 1), VV.resolve(!1), this.scheduleNext()
        }), Math.max(0, eV - this.options.getNow()))
      }
    };

    function ZU(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if ({}.hasOwnProperty.call(VV, JV)) {
            if (eV.includes(JV)) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.includes(xV) || {}.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function vU(VV) {
      const {
        size: eV,
        concurrency: xV
      } = VV, JV = [];
      let YV = 0;
      const UV = () => {
        if (YV < xV && JV.length) {
          const {
            producer: VV,
            resolve: eV,
            reject: xV
          } = JV.shift();
          YV++, VV().then((VV => {
            YV--, UV(), eV(VV)
          }), (VV => {
            YV--, UV(), xV(VV)
          }))
        }
      };
      return {
        add: VV => {
          if (JV.length + YV >= eV) throw new Error("Task buffer full");
          return new Promise(((eV, xV) => {
            JV.push({
              producer: VV,
              resolve: eV,
              reject: xV
            }), UV()
          }))
        }
      }
    }
    const rU = ["headers"],
      kU = ["keepalive", "signal"],
      bU = new Set([408, 425, 429, 500, 502, 503, 504]),
      EU = new Set([429, 503]);
    let BU = 0,
      jU = 0;
    var qU = class extends Error {};
    var tU = class extends IY {
      constructor(VV) {
        var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV;
        super(), this.options = VV, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = xx, this.pendingCustomSends = 0, this.getNow = null !== (eV = VV.getNow) && void 0 !== eV ? eV : Date.now, this.requestTimeoutMs = null !== (xV = VV.requestTimeoutMs) && void 0 !== xV ? xV : 1e4, this.compressionEnabled = null !== (JV = VV.requestCompression) && void 0 !== JV && JV && "undefined" !== typeof CompressionStream, VV.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new wU({
          bufferSize: null !== (YV = VV.bufferSize) && void 0 !== YV ? YV : 30,
          concurrency: null !== (UV = VV.concurrency) && void 0 !== UV ? UV : 5,
          retry: {
            maxAttempts: null !== (yV = null === (pV = VV.retry) || void 0 === pV ? void 0 : pV.maxAttempts) && void 0 !== yV ? yV : 3,
            initialBackoffMs: null !== (QV = null !== (nV = null === (wV = VV.retry) || void 0 === wV ? void 0 : wV.initialBackoffMs) && void 0 !== nV ? nV : VV.defaultRateLimitBackoffMs) && void 0 !== QV ? QV : 1e3,
            maxBackoffMs: null !== (ZV = null === (vV = VV.retry) || void 0 === vV ? void 0 : vV.maxBackoffMs) && void 0 !== ZV ? ZV : 3e4,
            backoffMultiplier: null !== (rV = null === (kV = VV.retry) || void 0 === kV ? void 0 : kV.backoffMultiplier) && void 0 !== rV ? rV : 2
          },
          getNow: this.getNow,
          getRandom: null !== (bV = VV.getRandom) && void 0 !== bV ? bV : Math.random,
          onRetry: (VV, eV) => {
            this.logDebug(`Retrying failed request after ${VV}ms. Attempt ${eV}.`)
          }
        }), this.customPromiseBuffer = vU({
          size: null !== (EV = VV.bufferSize) && void 0 !== EV ? EV : 30,
          concurrency: null !== (BV = VV.concurrency) && void 0 !== BV ? BV : 5
        }), this.defaultPromiseBuffer = {
          add: VV => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(VV);
            const eV = this.deliveryQueue.reserve();
            if (!eV) throw new Error("Task buffer full");
            return this.runBufferedTask(eV, VV)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (VV => {
          VV.persisted && this.deliveryQueue.resume()
        })))
      }
      send(VV) {
        var eV = this;
        return mJ((function*() {
          const xV = eV.promiseBuffer;
          if (xV !== eV.defaultPromiseBuffer || xV.add !== eV.defaultBufferAdd) {
            eV.pendingCustomSends++;
            try {
              yield xV.add((() => eV.deliver(VV)))
            } catch (JV) {
              eV.logError("Permanent delivery failure", {
                error: JV,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              eV.pendingCustomSends--
            }
          } else yield eV.deliver(VV)
        }))()
      }
      runBufferedTask(VV, eV) {
        return mJ((function*() {
          let xV;
          try {
            return yield VV.deliver(mJ((function*() {
              return xV = yield eV(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), xV
          } finally {
            VV.release()
          }
        }))()
      }
      deliver(VV) {
        var eV = this;
        return mJ((function*() {
          const xV = eV.deliveryQueue.reserve();
          if (xV) try {
            const JV = yield eV.prepareRequest(VV), YV = yield xV.deliver(((VV, xV) => eV.performAttempt(JV, VV, xV)));
            "terminal" === YV.kind && eV.logError("retries-exhausted" === YV.reason ? "Delivery retries exhausted" : "Permanent delivery failure", we(we({}, YV.failure), {}, {
              reason: YV.reason,
              attempts: YV.attempts,
              elapsedTimeMs: YV.elapsedTimeMs
            }))
          } catch (JV) {
            eV.logError("Permanent delivery failure", {
              error: JV,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            xV.release()
          } else eV.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var VV;
        return [this.options.url].concat(null !== (VV = this.config.ignoreUrls) && void 0 !== VV ? VV : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(VV) {
        var eV = this;
        return mJ((function*() {
          var xV, JV;
          const YV = eU(VV),
            UV = null === (xV = YV.meta.session) || void 0 === xV ? void 0 : xV.id,
            yV = JSON.stringify(YV),
            pV = null !== (JV = eV.options.requestOptions) && void 0 !== JV ? JV : {},
            {
              headers: QV = {}
            } = pV,
            nV = ZU(pV, rU),
            {
              keepalive: wV,
              signal: ZV
            } = nV,
            vV = ZU(nV, kU),
            rV = {};
          for (const [VV, eV] of Object.entries(QV)) rV[VV] = "function" === typeof eV ? yield eV(): eV;
          let kV = yV,
            bV = function(VV) {
              return "undefined" === typeof TextEncoder ? VV.length : (new TextEncoder).encode(VV).byteLength
            }(yV);
          const EV = {};
          return eV.compressionEnabled && (kV = yield eV.compress(yV), bV = kV.size, EV["Content-Encoding"] = "gzip"), {
            bodySize: bV,
            sessionId: UV,
            requestInit: we({
              method: "POST",
              headers: we(we(we(we(we({
                "Content-Type": "application/json"
              }, EV), rV), eV.options.apiKey ? {
                "x-api-key": eV.options.apiKey
              } : {}), UV ? {
                "x-faro-session-id": UV
              } : {}), {}, {
                "Idempotency-Key": Be(20)
              }),
              body: kV
            }, vV)
          }
        }))()
      }
      performAttempt(VV, eV, xV) {
        var JV = this;
        return mJ((function*() {
          var YV;
          const UV = null === (YV = JV.options.requestOptions) || void 0 === YV ? void 0 : YV.signal;
          if (null === UV || void 0 === UV ? void 0 : UV.aborted) return {
            kind: "terminal",
            failure: {
              error: UV.reason
            },
            attemptsMade: 0
          };
          let yV = 0;
          try {
            var pV;
            const YV = yield JV.fetchWithKeepaliveFallback(VV.requestInit, VV.bodySize, !!xV || (null === (pV = JV.options.requestOptions) || void 0 === pV ? void 0 : pV.keepalive), eV, (() => yV++));
            if (JV.handleResponse(YV, VV.sessionId), YV.status >= 200 && YV.status < 300) return {
              kind: "success",
              attemptsMade: yV
            };
            const UV = {
              status: YV.status
            };
            return !bU.has(YV.status) || xV ? {
              kind: "terminal",
              failure: UV,
              attemptsMade: yV
            } : {
              kind: "retry",
              failure: UV,
              attemptsMade: yV,
              retryAfterMs: EU.has(YV.status) ? JV.getRetryAfterDelayMs(YV) : void 0
            }
          } catch (QV) {
            const VV = {
              error: QV
            };
            return (null === UV || void 0 === UV ? void 0 : UV.aborted) || !JV.isFetchNetworkError(QV) || xV ? {
              kind: "terminal",
              failure: VV,
              attemptsMade: yV
            } : {
              kind: "retry",
              failure: VV,
              attemptsMade: yV
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(VV, eV, xV, JV, YV) {
        var UV = this;
        return mJ((function*() {
          const yV = UV.getNow(),
            pV = UV.reserveKeepalive(eV, xV);
          try {
            return yield UV.fetchWithTimeout(we(we({}, VV), {}, {
              keepalive: pV.keepalive
            }), UV.requestTimeoutMs, YV)
          } catch (nV) {
            var QV;
            if (pV.keepalive && JV > 1 && UV.isFetchNetworkError(nV) && !(nV instanceof qU) && !(null === (QV = UV.options.requestOptions) || void 0 === QV || null === (QV = QV.signal) || void 0 === QV ? void 0 : QV.aborted)) {
              UV.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const eV = UV.requestTimeoutMs - (UV.getNow() - yV);
              return UV.fetchWithTimeout(we(we({}, VV), {}, {
                keepalive: !1
              }), eV, YV)
            }
            throw nV
          } finally {
            pV.release()
          }
        }))()
      }
      fetchWithTimeout(VV, eV, xV) {
        var JV = this;
        return mJ((function*() {
          var YV;
          const UV = null === (YV = JV.options.requestOptions) || void 0 === YV ? void 0 : YV.signal;
          if (JV.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return xV(), fetch(JV.options.url, we(we({}, VV), {}, {
            signal: UV
          }));
          if (eV <= 0) throw new qU("Request timed out");
          const yV = new AbortController,
            pV = () => yV.abort(null === UV || void 0 === UV ? void 0 : UV.reason);
          null === UV || void 0 === UV || UV.addEventListener("abort", pV, {
            once: !0
          });
          let QV = !1;
          const nV = setTimeout((() => {
            QV = !0, yV.abort()
          }), eV);
          try {
            return xV(), yield fetch(JV.options.url, we(we({}, VV), {}, {
              signal: yV.signal
            }))
          } catch (wV) {
            if (QV && !(null === UV || void 0 === UV ? void 0 : UV.aborted)) throw new qU("Request timed out");
            throw wV
          } finally {
            clearTimeout(nV), null === UV || void 0 === UV || UV.removeEventListener("abort", pV)
          }
        }))()
      }
      getRetryAfterDelayMs(VV) {
        const eV = VV.headers.get("Retry-After");
        if (!eV) return;
        if (/^\d+$/.test(eV)) {
          const VV = 1e3 * Number(eV);
          return Number.isFinite(VV) ? VV : Number.POSITIVE_INFINITY
        }
        const xV = this.getNow(),
          JV = function(VV, eV) {
            const xV = JU.exec(VV);
            if (xV) {
              const [, VV, eV, JV, YV, UV, yV, pV] = xV;
              return nU({
                weekday: yU.indexOf(VV),
                day: Number(eV),
                month: QU.indexOf(JV),
                year: Number(YV),
                hour: Number(UV),
                minute: Number(yV),
                second: Number(pV)
              })
            }
            const JV = YU.exec(VV);
            if (JV) {
              const [, VV, xV, yV, pV, QV, nV, wV] = JV, ZV = new Date(eV);
              if (Number.isNaN(ZV.getTime())) return;
              const vV = ZV.getUTCFullYear();
              let rV = 100 * Math.floor(vV / 100) + Number(pV);
              rV < vV && (rV += 100);
              const kV = QU.indexOf(yV),
                bV = {
                  month: kV,
                  day: Number(xV),
                  hour: Number(QV),
                  minute: Number(nV),
                  second: Number(wV),
                  millisecond: 0
                },
                EV = {
                  month: ZV.getUTCMonth(),
                  day: ZV.getUTCDate(),
                  hour: ZV.getUTCHours(),
                  minute: ZV.getUTCMinutes(),
                  second: ZV.getUTCSeconds(),
                  millisecond: ZV.getUTCMilliseconds()
                };
              return (rV > vV + 50 || rV === vV + 50 && (UV = EV, ((YV = bV).month - UV.month || YV.day - UV.day || YV.hour - UV.hour || YV.minute - UV.minute || YV.second - UV.second || YV.millisecond - UV.millisecond) > 0)) && (rV -= 100), nU({
                weekday: pU.indexOf(VV),
                day: Number(xV),
                month: kV,
                year: rV,
                hour: Number(QV),
                minute: Number(nV),
                second: Number(wV)
              })
            }
            var YV, UV;
            const yV = UU.exec(VV);
            if (!yV) return;
            const [, pV, QV, nV, wV, ZV, vV, rV, kV] = yV;
            return nU({
              weekday: yU.indexOf(pV),
              day: Number(null !== nV && void 0 !== nV ? nV : wV),
              month: QU.indexOf(QV),
              year: Number(kV),
              hour: Number(ZV),
              minute: Number(vV),
              second: Number(rV)
            })
          }(eV, xV);
        return null == JV ? void 0 : Math.max(0, JV - xV)
      }
      reserveKeepalive(VV, eV) {
        if (!1 === eV || VV > 6e4 || BU + VV > 6e4 || jU >= 9) return {
          keepalive: !1,
          release: fe
        };
        BU += VV, jU++;
        let xV = !1;
        return {
          keepalive: !0,
          release: () => {
            xV || (xV = !0, BU -= VV, jU--)
          }
        }
      }
      handleResponse(VV, eV) {
        202 === VV.status && "invalid" === VV.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), eV), VV.text().catch(fe)
      }
      isFetchNetworkError(VV) {
        return VV instanceof TypeError || VV instanceof qU || VV instanceof DOMException && "AbortError" === VV.name
      }
      compress(VV) {
        return mJ((function*() {
          const eV = [],
            xV = new ReadableStream({
              start(eV) {
                eV.enqueue((new TextEncoder).encode(VV)), eV.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: VV,
              value: JV
            } = yield xV.read();
            if (VV) return new Blob(eV);
            eV.push(JV)
          }
        }))()
      }
      extendFaroSession(VV, eV, xV) {
        var JV, YV;
        const UV = VV.sessionTracking;
        if (!(null === UV || void 0 === UV ? void 0 : UV.enabled)) return void eV("Session expired.");
        const {
          fetchUserSession: yV,
          storeUserSession: pV
        } = Le(UV), QV = null === (JV = this.metas.value.session) || void 0 === JV ? void 0 : JV.id, nV = null === (YV = yV()) || void 0 === YV ? void 0 : YV.sessionId;
        xV && xV === QV && xV === nV ? (Ge({
          fetchUserSession: yV,
          storeUserSession: pV
        })({
          forceSessionExtend: !0
        }), eV("Session expired; created new session.")) : eV("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const FU = () => {
      const VV = window.k6;
      return {
        k6: we({
          isK6Browser: !0
        }, (null === VV || void 0 === VV ? void 0 : VV.testRunId) && {
          testRunId: null === VV || void 0 === VV ? void 0 : VV.testRunId
        })
      }
    };
    let TU, PU;

    function AU() {
      let {
        generatePageId: VV,
        initialPageMeta: eV
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const xV = location.href;
        return zV(VV) && TU !== xV && (TU = xV, PU = VV(location)), {
          page: we(we({
            url: xV
          }, PU ? {
            id: PU
          } : {}), eV)
        }
      }
    }

    function NU() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const xV = Ke;
      return eV > 0 && (xV.error = eV >= 1 ? function() {
        for (var eV = arguments.length, JV = new Array(eV), YV = 0; YV < eV; YV++) JV[YV] = arguments[YV];
        VV.error(`${xV.prefix}\n`, ...JV)
      } : fe, xV.warn = eV >= 2 ? function() {
        for (var eV = arguments.length, JV = new Array(eV), YV = 0; YV < eV; YV++) JV[YV] = arguments[YV];
        VV.warn(`${xV.prefix}\n`, ...JV)
      } : fe, xV.info = eV >= 3 ? function() {
        for (var eV = arguments.length, JV = new Array(eV), YV = 0; YV < eV; YV++) JV[YV] = arguments[YV];
        VV.info(`${xV.prefix}\n`, ...JV)
      } : fe, xV.debug = eV >= 4 ? function() {
        for (var eV = arguments.length, JV = new Array(eV), YV = 0; YV < eV; YV++) JV[YV] = arguments[YV];
        VV.debug(`${xV.prefix}\n`, ...JV)
      } : fe), xV
    }
    const XU = "faro",
      MU = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      zU = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function GU(VV) {
      var eV, xV, YV, UV, yV, pV;
      const QV = [],
        wV = NU(VV.unpatchedConsole, VV.internalLoggerLevel);
      VV.transports ? ((VV.url || VV.apiKey) && wV.error('if "transports" is defined, "url" and "apiKey" should not be defined'), QV.push(...VV.transports)) : VV.url ? QV.push(new tU({
        url: VV.url,
        apiKey: VV.apiKey,
        requestCompression: VV.requestCompression
      })) : wV.error('either "url" or "transports" must be defined');
      const {
        dedupe: ZV = !0,
        eventDomain: vV = JV,
        globalObjectKey: rV = XU,
        instrumentations: kV = lY(),
        internalLoggerLevel: bV = He,
        isolate: EV = !1,
        logArgsSerializer: BV = Wx,
        metas: jV = RU(VV),
        paused: qV = !1,
        preventGlobalExposure: tV = !1,
        unpatchedConsole: FV = Oe,
        url: TV,
        experimental: PV
      } = VV, AV = ZU(VV, zU), NV = null !== (eV = null === PV || void 0 === PV ? void 0 : PV.trackNavigation) && void 0 !== eV && eV, XV = {
        dataAttributeName: IJ(null !== (xV = null === (YV = VV.userActionsInstrumentation) || void 0 === YV ? void 0 : YV.dataAttributeName) && void 0 !== xV ? xV : uJ),
        excludeItem: null === (UV = VV.userActionsInstrumentation) || void 0 === UV ? void 0 : UV.excludeItem,
        initialActivityTimeout: dJ(null === (yV = VV.userActionsInstrumentation) || void 0 === yV ? void 0 : yV.initialActivityTimeout, 100, (VV => wV.warn(VV)))
      };
      return we(we({}, AV), {}, {
        batching: we(we({}, MU), VV.batching),
        dedupe: ZV,
        globalObjectKey: rV,
        instrumentations: WU(kV, VV),
        internalLoggerLevel: bV,
        isolate: EV,
        logArgsSerializer: BV,
        metas: jV,
        parseStacktrace: bx,
        paused: qV,
        preventGlobalExposure: tV,
        transports: QV,
        unpatchedConsole: FV,
        eventDomain: vV,
        ignoreUrls: [...null !== (pV = VV.ignoreUrls) && void 0 !== pV ? pV : [], ...TV ? [TV] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: we(we(we({}, nV), VV.sessionTracking), gU({
          trackGeolocation: VV.trackGeolocation,
          sessionTracking: VV.sessionTracking
        })),
        userActionsInstrumentation: XV,
        experimental: {
          trackNavigation: NV
        }
      })
    }

    function WU(VV, eV) {
      let {
        experimental: xV
      } = eV;
      var JV;
      const YV = null !== (JV = null === xV || void 0 === xV ? void 0 : xV.trackNavigation) && void 0 !== JV && JV;
      return VV.filter((VV => !("@grafana/faro-web-sdk:instrumentation-navigation" === VV.name && !YV)))
    }

    function RU(VV) {
      var eV, xV, JV;
      const {
        page: YV,
        generatePageId: UV
      } = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.pageTracking) && void 0 !== eV ? eV : {}, yV = [HY, uY, AU({
        generatePageId: UV,
        initialPageMeta: YV
      }), ...null !== (xV = VV.metas) && void 0 !== xV ? xV : [], SY];
      return MV(null === (JV = window) || void 0 === JV ? void 0 : JV.k6) ? [...yV, FU] : yV
    }

    function gU(VV) {
      let {
        trackGeolocation: eV,
        sessionTracking: xV
      } = VV;
      var JV;
      const YV = {};
      return NV(eV) && (YV.geoLocationTrackingEnabled = eV), HV(YV) ? {} : {
        session: we(we({}, null !== (JV = null === xV || void 0 === xV ? void 0 : xV.session) && void 0 !== JV ? JV : {}), {}, {
          overrides: YV
        })
      }
    }
    const DU = new WeakSet;

    function iU(VV) {
      return DU.add(VV), VV
    }

    function CU(VV, eV) {
      if (VV.capture) return iU(VV.capture(eV));
      const xV = iU(VV.value);
      return null === eV || void 0 === eV || eV(), xV
    }

    function aU(VV) {
      const eV = `__faroBundleId_${VV}`,
        xV = null === wV || void 0 === wV ? void 0 : wV[eV];
      if ("string" === typeof xV && "" !== xV) return xV;
      const JV = "undefined" !== typeof window ? window[eV] : void 0;
      return "string" === typeof JV && "" !== JV ? JV : void 0
    }

    function oU(VV) {
      var eV, xV;
      const JV = VV.config.app.name,
        YV = JV ? function(VV) {
          return null === wV || void 0 === wV ? void 0 : wV[`__faroGitHash_${VV}`]
        }(JV) : void 0,
        UV = {
          sdk: {
            version: xx,
            name: "faro"
          },
          app: de({
            bundleId: JV && aU(JV)
          }, void 0 !== YV ? {
            gitHash: YV
          } : {})
        },
        yV = null === (eV = VV.config.sessionTracking) || void 0 === eV ? void 0 : eV.session;
      yV && VV.api.setSession(yV), VV.config.app && (UV.app = de(de({}, VV.config.app), UV.app)), VV.config.user && (UV.user = VV.config.user), VV.config.view && (UV.view = VV.config.view), VV.metas.add(UV, ...null !== (xV = VV.config.metas) && void 0 !== xV ? xV : [])
    }
    var cU = class {
      constructor(VV, eV) {
        var xV, JV;
        this.signalBuffer = [], this.itemLimit = null !== (xV = null === eV || void 0 === eV ? void 0 : eV.itemLimit) && void 0 !== xV ? xV : 50, this.sendTimeout = null !== (JV = null === eV || void 0 === eV ? void 0 : eV.sendTimeout) && void 0 !== JV ? JV : 250, this.paused = (null === eV || void 0 === eV ? void 0 : eV.paused) || !1, this.sendFn = VV, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(VV) {
        this.paused || (this.signalBuffer.push(VV), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(VV) {
        const eV = new Map;
        return VV.forEach((VV => {
          const xV = JSON.stringify(VV.meta);
          let JV = eV.get(xV);
          JV = void 0 === JV ? [VV] : [...JV, VV], eV.set(xV, JV)
        })), Array.from(eV.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const VV = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(VV).forEach(this.sendFn)
        } catch (eV) {
          throw this.signalBuffer = [...VV, ...this.signalBuffer], this.trimBufferToLimit(), eV
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function hU(VV, eV, xV, JV) {
      var YV;
      eV.debug("Initializing transports");
      const UV = [];
      let yV = [];
      const pV = VV => {
        let eV = VV;
        for (const JV of yV) {
          const VV = eV.map(JV).filter(Boolean);
          if (0 === VV.length) return [];
          eV = lU(VV, xV)
        }
        return eV
      };
      let QV;
      (null === (YV = xV.batching) || void 0 === YV ? void 0 : YV.enabled) && (QV = new cU((VV => {
        const xV = pV(VV);
        if (0 !== xV.length)
          for (const JV of UV) eV.debug(`Transporting item using ${JV.name}\n`, xV), JV.isBatched() && JV.send(xV)
      }), {
        sendTimeout: xV.batching.sendTimeout,
        itemLimit: xV.batching.itemLimit,
        paused: xV.paused
      }));
      return {
        add: function() {
          eV.debug("Adding transports");
          for (var YV = arguments.length, yV = new Array(YV), pV = 0; pV < YV; pV++) yV[pV] = arguments[pV];
          yV.forEach((YV => {
            eV.debug(`Adding "${YV.name}" transport`), UV.some((VV => VV === YV)) ? eV.warn(`Transport ${YV.name} is already added`) : (YV.unpatchedConsole = VV, YV.internalLogger = eV, YV.config = xV, YV.metas = JV, UV.push(YV))
          }))
        },
        addBeforeSendHooks: function() {
          eV.debug("Adding beforeSendHooks\n", yV);
          for (var VV = arguments.length, xV = new Array(VV), JV = 0; JV < VV; JV++) xV[JV] = arguments[JV];
          xV.forEach((VV => {
            VV && yV.push(VV)
          }))
        },
        getBeforeSendHooks: () => [...yV],
        execute: VV => {
          var YV;
          if (!xV.paused && he(JV).shouldCapture()) {
            if (ZV = VV.meta, !DU.has(ZV)) {
              var yV, nV, wV;
              const eV = null === (yV = JV.value.session) || void 0 === yV ? void 0 : yV.id,
                YV = CU(JV);
              if (xV.paused) return;
              const UV = de({}, VV.meta);
              (null === (nV = UV.session) || void 0 === nV ? void 0 : nV.id) === eV && (null === (wV = YV.session) || void 0 === wV ? void 0 : wV.id) !== eV && (void 0 === YV.session ? delete UV.session : UV.session = YV.session), VV = de(de({}, VV), {}, {
                meta: iU(UV)
              })
            }
            var ZV;
            (null === (YV = xV.batching) || void 0 === YV ? void 0 : YV.enabled) && (null === QV || void 0 === QV || QV.addItem(VV)), (VV => {
              var JV;
              if ((null === (JV = xV.batching) || void 0 === JV ? void 0 : JV.enabled) && UV.every((VV => VV.isBatched()))) return;
              const [YV] = pV([VV]);
              if (void 0 !== YV)
                for (const pV of UV) {
                  var yV;
                  eV.debug(`Transporting item using ${pV.name}\n`, YV), pV.isBatched() ? (null === (yV = xV.batching) || void 0 === yV ? void 0 : yV.enabled) || pV.send([YV]) : pV.send(YV)
                }
            })(VV)
          }
        },
        isPaused: () => xV.paused,
        pause: () => {
          eV.debug("Pausing transports"), null === QV || void 0 === QV || QV.pause(), xV.paused = !0
        },
        remove: function() {
          eV.debug("Removing transports");
          for (var VV = arguments.length, xV = new Array(VV), JV = 0; JV < VV; JV++) xV[JV] = arguments[JV];
          xV.forEach((VV => {
            eV.debug(`Removing "${VV.name}" transport`);
            const xV = UV.indexOf(VV); - 1 !== xV ? UV.splice(xV, 1) : eV.warn(`Transport "${VV.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var VV = arguments.length, xV = new Array(VV), JV = 0; JV < VV; JV++) xV[JV] = arguments[JV];
          eV.debug("Removing beforeSendHooks"), yV = yV.filter((VV => !xV.includes(VV)))
        },
        get transports() {
          return [...UV]
        },
        unpause: () => {
          eV.debug("Unpausing transports"), null === QV || void 0 === QV || QV.start(), xV.paused = !1
        }
      }
    }

    function lU(VV, eV) {
      if (eV.preserveOriginalError)
        for (const xV of VV) "exception" === xV.type && delete xV.payload.originalError;
      return VV
    }
    let LU = Oe;

    function fU(VV) {
      var eV;
      return LU = null !== (eV = VV.unpatchedConsole) && void 0 !== eV ? eV : LU, LU
    }
    let mU, KU = Ke;

    function HU(VV, eV) {
      return KU = NU(VV, eV.internalLoggerLevel), KU
    }

    function uU(VV) {
      let {
        internalLogger: eV,
        config: xV,
        metas: JV,
        transports: YV,
        tracesApi: UV,
        userActionsApi: yV
      } = VV;
      var pV;
      eV.debug("Initializing exceptions API");
      let QV = null;
      mU = null !== (pV = xV.parseStacktrace) && void 0 !== pV ? pV : mU;
      const nV = VV => {
          eV.debug("Changing stacktrace parser"), mU = null !== VV && void 0 !== VV ? VV : mU
        },
        {
          ignoreErrors: wV = [],
          preserveOriginalError: ZV
        } = xV;
      return nV(xV.parseStacktrace), {
        changeStacktraceParser: nV,
        getStacktraceParser: () => mU,
        pushError: function(VV) {
          let {
            skipDedupe: pV,
            stackFrames: nV,
            type: vV,
            context: rV,
            spanContext: kV,
            timestampOverwriteMs: bV,
            originalError: EV,
            fingerprint: BV,
            fatal: jV
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(VV, eV) {
              const {
                message: xV,
                name: JV,
                stack: YV
              } = eV;
              return UV = VV, yV = xV + " " + JV + " " + YV, UV.some((VV => TV(VV) ? yV.includes(VV) : !!yV.match(VV)));
              var UV, yV
            }(wV, null !== EV && void 0 !== EV ? EV : VV)) try {
            var qV, tV;
            if (!he(JV).shouldCapture()) return;
            const wV = Ce(de(de({}, function(VV) {
                let eV = VV.cause;
                aV(eV) ? eV = VV.cause.toString() : null !== eV && (MV(VV.cause) || GV(VV.cause)) ? eV = ie(VV.cause) : null != eV && (eV = VV.cause.toString());
                return null == eV ? {} : {
                  cause: eV
                }
              }(null !== EV && void 0 !== EV ? EV : VV)), null !== rV && void 0 !== rV ? rV : {})),
              TV = de(de(de(de({
                type: vV || VV.name || "Error",
                value: VV.message,
                timestamp: bV ? be(bV) : ke(),
                trace: kV ? {
                  trace_id: kV.traceId,
                  span_id: kV.spanId
                } : UV.getTraceContext()
              }, HV(wV) ? {} : {
                context: wV
              }), ZV ? {
                originalError: EV
              } : {}), BV ? {
                fingerprint: BV
              } : {}), void 0 !== jV ? {
                fatal: jV
              } : {});
            nV = null !== (qV = nV) && void 0 !== qV ? qV : VV.stack ? null === mU || void 0 === mU ? void 0 : mU(VV).frames : void 0, (null === nV || void 0 === nV ? void 0 : nV.length) && (TV.stacktrace = {
              frames: nV
            });
            const PV = {
              type: TV.type,
              value: TV.value,
              stacktrace: TV.stacktrace,
              context: TV.context,
              fingerprint: TV.fingerprint,
              fatal: null !== (tV = TV.fatal) && void 0 !== tV && tV
            };
            if (!pV && xV.dedupe && !FV(QV) && je(PV, QV)) return void eV.debug("Skipping error push because it is the same as the last one\n", TV);
            const AV = QV,
              NV = CU(JV);
            if (QV !== AV && !pV && xV.dedupe && je(PV, QV)) return;
            QV = PV;
            const XV = {
              meta: NV,
              payload: TV,
              type: "exception"
            };
            eV.debug("Pushing exception\n", XV), TY(yV.getActiveUserAction(), XV) || YV.execute(XV)
          } catch (PV) {
            eV.error("Error pushing event", PV)
          }
        }
      }
    }

    function sU(VV, eV, xV, JV, YV) {
      eV.debug("Initializing API");
      let UV = null;
      const yV = function(VV) {
          let {
            transports: eV,
            internalLogger: xV,
            config: JV,
            pushEvent: YV
          } = VV;
          var UV;
          const yV = null === (UV = JV.userActionsInstrumentation) || void 0 === UV ? void 0 : UV.excludeItem;
          let pV;
          const QV = () => pV;
          return {
            startUserAction: (VV, JV, UV) => {
              if (void 0 === QV()) {
                const xV = new tY({
                  name: VV,
                  transports: eV,
                  attributes: JV,
                  trigger: (null === UV || void 0 === UV ? void 0 : UV.triggerName) || "faroApiCall",
                  importance: (null === UV || void 0 === UV ? void 0 : UV.importance) || jY.Normal,
                  trackUserActionsExcludeItem: yV,
                  pushEvent: YV
                });
                return xV.filter((VV => [3, 2].includes(VV))).first().subscribe((() => {
                  pV = void 0
                })), FY.notify({
                  type: BY,
                  userAction: xV,
                  initialActivityTimeout: null === UV || void 0 === UV ? void 0 : UV.initialActivityTimeout
                }), pV = xV, pV
              }
              xV.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: QV
          }
        }({
          transports: YV,
          config: xV,
          internalLogger: eV,
          pushEvent: (VV, xV, JV, YV) => {
            UV ? UV(VV, xV, JV, YV) : eV.warn("pushEventImpl is not initialized. Event dropped:", {
              name: VV,
              attributes: xV,
              domain: JV,
              options: YV
            })
          }
        }),
        pV = function(VV, eV, xV, JV, YV) {
          let UV;
          return eV.debug("Initializing traces API"), {
            getOTEL: () => UV,
            getTraceContext: () => {
              const VV = null === UV || void 0 === UV ? void 0 : UV.trace.getSpanContext(UV.context.active());
              return VV ? {
                trace_id: VV.traceId,
                span_id: VV.spanId
              } : void 0
            },
            initOTEL: (VV, xV) => {
              eV.debug("Initializing OpenTelemetry"), UV = {
                trace: VV,
                context: xV
              }
            },
            isOTELInitialized: () => !!UV,
            pushTraces: VV => {
              try {
                if (!he(JV).shouldCapture()) return;
                const xV = {
                  type: "trace",
                  payload: VV,
                  meta: CU(JV)
                };
                eV.debug("Pushing trace\n", xV), YV.execute(xV)
              } catch (xV) {
                eV.error("Error pushing trace\n", xV)
              }
            }
          }
        }(0, eV, 0, JV, YV),
        QV = {
          unpatchedConsole: VV,
          internalLogger: eV,
          userActionsApi: yV,
          config: xV,
          metas: JV,
          transports: YV,
          tracesApi: pV
        },
        nV = function(VV) {
          let {
            internalLogger: eV,
            config: xV,
            metas: JV,
            transports: YV,
            tracesApi: UV,
            userActionsApi: yV
          } = VV, pV = null;
          return {
            pushEvent: function(VV, QV, nV) {
              let {
                skipDedupe: wV,
                spanContext: ZV,
                timestampOverwriteMs: vV,
                customPayloadTransformer: rV = VV => VV
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!he(JV).shouldCapture()) return;
                const kV = Ce(QV),
                  bV = rV({
                    name: VV,
                    domain: null !== nV && void 0 !== nV ? nV : xV.eventDomain,
                    attributes: HV(kV) ? void 0 : kV,
                    timestamp: vV ? be(vV) : ke(),
                    trace: ZV ? {
                      trace_id: ZV.traceId,
                      span_id: ZV.spanId
                    } : UV.getTraceContext()
                  }),
                  EV = {
                    name: bV.name,
                    attributes: bV.attributes,
                    domain: bV.domain
                  };
                if (!wV && xV.dedupe && !FV(pV) && je(EV, pV)) return void eV.debug("Skipping event push because it is the same as the last one\n", bV);
                const BV = pV,
                  jV = CU(JV);
                if (pV !== BV && !wV && xV.dedupe && je(EV, pV)) return;
                pV = EV;
                const qV = {
                  meta: jV,
                  payload: bV,
                  type: "event"
                };
                eV.debug("Pushing event\n", qV), TY(yV.getActiveUserAction(), qV) || YV.execute(qV)
              } catch (kV) {
                eV.error("Error pushing event", kV)
              }
            }
          }
        }(QV);
      return UV = nV.pushEvent, de(de(de(de(de(de(de({}, pV), uU(QV)), function(VV) {
        let eV, xV, JV, YV, {
          internalLogger: UV,
          metas: yV
        } = VV;
        UV.debug("Initializing meta API");
        const pV = VV => {
            xV && yV.remove(xV), xV = {
              user: VV
            }, yV.add(xV)
          },
          QV = (VV, xV) => {
            var JV;
            const YV = null === xV || void 0 === xV ? void 0 : xV.overrides,
              UV = YV ? {
                overrides: de(de({}, null === eV || void 0 === eV || null === (JV = eV.session) || void 0 === JV ? void 0 : JV.overrides), YV)
              } : {};
            eV && yV.remove(eV), eV = {
              session: de(de({}, HV(VV) ? void 0 : VV), UV)
            }, yV.add(eV)
          },
          nV = (VV, eV) => {
            he(yV).notifySessionUpdate({
              type: "replace",
              session: VV,
              overrides: null === eV || void 0 === eV ? void 0 : eV.overrides
            }), QV(VV, eV)
          },
          wV = () => yV.value.session,
          ZV = () => yV.value.page;
        return {
          setUser: pV,
          resetUser: pV,
          setSession: nV,
          resetSession: nV,
          getSession: wV,
          setView: (VV, eV) => {
            var xV;
            if ((null === eV || void 0 === eV ? void 0 : eV.overrides) && (he(yV).notifySessionUpdate({
                type: "overrides",
                overrides: eV.overrides
              }), QV(wV(), {
                overrides: eV.overrides
              })), (null === JV || void 0 === JV || null === (xV = JV.view) || void 0 === xV ? void 0 : xV.name) === (null === VV || void 0 === VV ? void 0 : VV.name)) return;
            const YV = JV;
            JV = {
              view: VV
            }, yV.add(JV), YV && yV.remove(YV)
          },
          getView: () => yV.value.view,
          setPage: VV => {
            var eV;
            const xV = TV(VV) ? de(de({}, null !== (eV = null === YV || void 0 === YV ? void 0 : YV.page) && void 0 !== eV ? eV : ZV()), {}, {
              id: VV
            }) : VV;
            YV && yV.remove(YV), YV = {
              page: xV
            }, yV.add(YV)
          },
          getPage: ZV
        }
      }(QV)), function(VV) {
        let {
          internalLogger: eV,
          config: xV,
          metas: JV,
          transports: YV,
          tracesApi: UV,
          userActionsApi: yV
        } = VV;
        var pV;
        eV.debug("Initializing logs API");
        let QV = null;
        const nV = null !== (pV = xV.logArgsSerializer) && void 0 !== pV ? pV : Wx;
        return {
          pushLog: function(VV) {
            let {
              context: pV,
              level: wV,
              skipDedupe: ZV,
              spanContext: vV,
              timestampOverwriteMs: rV
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!he(JV).shouldCapture()) return;
              const kV = Ce(pV),
                bV = {
                  message: nV(VV),
                  level: null !== wV && void 0 !== wV ? wV : "log",
                  context: HV(kV) ? void 0 : kV,
                  timestamp: rV ? be(rV) : ke(),
                  trace: vV ? {
                    trace_id: vV.traceId,
                    span_id: vV.spanId
                  } : UV.getTraceContext()
                },
                EV = {
                  message: bV.message,
                  level: bV.level,
                  context: bV.context
                };
              if (!ZV && xV.dedupe && !FV(QV) && je(EV, QV)) return void eV.debug("Skipping log push because it is the same as the last one\n", bV);
              const BV = QV,
                jV = CU(JV);
              if (QV !== BV && !ZV && xV.dedupe && je(EV, QV)) return;
              QV = EV;
              const qV = {
                type: "log",
                payload: bV,
                meta: jV
              };
              eV.debug("Pushing log\n", qV), TY(yV.getActiveUserAction(), qV) || YV.execute(qV)
            } catch (kV) {
              eV.error("Error pushing log\n", kV)
            }
          }
        }
      }(QV)), function(VV) {
        let {
          internalLogger: eV,
          config: xV,
          metas: JV,
          transports: YV,
          tracesApi: UV,
          userActionsApi: yV
        } = VV;
        eV.debug("Initializing measurements API");
        let pV = null;
        return {
          pushMeasurement: function(VV) {
            let {
              skipDedupe: QV,
              context: nV,
              spanContext: wV,
              timestampOverwriteMs: ZV
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!he(JV).shouldCapture()) return;
              const vV = Ce(nV),
                rV = de(de({}, VV), {}, {
                  trace: wV ? {
                    trace_id: wV.traceId,
                    span_id: wV.spanId
                  } : UV.getTraceContext(),
                  timestamp: ZV ? be(ZV) : ke(),
                  context: HV(vV) ? void 0 : vV
                }),
                kV = {
                  type: rV.type,
                  values: rV.values,
                  context: rV.context
                };
              if (!QV && xV.dedupe && !FV(pV) && je(kV, pV)) return void eV.debug("Skipping measurement push because it is the same as the last one\n", rV);
              const bV = pV,
                EV = CU(JV);
              if (pV !== bV && !QV && xV.dedupe && je(kV, pV)) return;
              pV = kV;
              const BV = {
                type: "measurement",
                payload: rV,
                meta: EV
              };
              eV.debug("Pushing measurement\n", BV), TY(yV.getActiveUserAction(), BV) || YV.execute(BV)
            } catch (vV) {
              eV.error("Error pushing measurement\n", vV)
            }
          }
        }
      }(QV)), nV), yV)
    }

    function SU(VV) {
      const eV = fU(VV),
        xV = HU(eV, VV);
      if (kV() && !VV.isolate) return void xV.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      xV.debug("Initializing");
      const JV = function(VV, eV) {
          let xV, JV = [],
            YV = [],
            UV = [],
            yV = 0,
            pV = 0;
          const QV = () => JV.reduce(((VV, eV) => Object.assign(VV, zV(eV) ? eV() : eV)), {}),
            nV = () => {
              if (YV.length) {
                const VV = QV();
                YV.forEach((eV => eV(VV)))
              }
            };
          return {
            add: function() {
              for (var VV = arguments.length, xV = new Array(VV), YV = 0; YV < VV; YV++) xV[YV] = arguments[YV];
              eV.debug("Adding metas\n", xV), JV.push(...xV), nV()
            },
            remove: function() {
              for (var VV = arguments.length, xV = new Array(VV), YV = 0; YV < VV; YV++) xV[YV] = arguments[YV];
              eV.debug("Removing metas\n", xV), JV = JV.filter((VV => !xV.includes(VV))), nV()
            },
            addListener: VV => {
              eV.debug("Adding metas listener\n", VV), YV.push(VV)
            },
            removeListener: VV => {
              eV.debug("Removing metas listener\n", VV), YV = YV.filter((eV => eV !== VV))
            },
            capture: VV => {
              var eV;
              const JV = void 0 !== xV,
                YV = null !== (eV = xV) && void 0 !== eV ? eV : UV;
              JV || (xV = YV, yV = 0, pV = YV.length);
              try {
                for (; yV < pV;) {
                  const VV = YV[yV++];
                  null === VV || void 0 === VV || VV()
                }
                const eV = iU(QV());
                return null === VV || void 0 === VV || VV(), eV
              } finally {
                JV || (xV = void 0)
              }
            },
            addCaptureListener: VV => {
              UV.push(VV)
            },
            removeCaptureListener: VV => {
              UV = UV.filter((eV => eV !== VV))
            },
            get value() {
              return QV()
            }
          }
        }(0, xV),
        YV = hU(eV, xV, VV, JV),
        UV = sU(eV, xV, VV, JV, YV),
        yV = function(VV, eV, xV, JV, YV, UV) {
          eV.debug("Initializing instrumentations");
          const yV = [];
          return {
            add: function() {
              eV.debug("Adding instrumentations");
              for (var pV = arguments.length, QV = new Array(pV), nV = 0; nV < pV; nV++) QV[nV] = arguments[nV];
              QV.forEach((pV => {
                eV.debug(`Adding "${pV.name}" instrumentation`), yV.some((VV => VV.name === pV.name)) ? eV.warn(`Instrumentation ${pV.name} is already added`) : (pV.unpatchedConsole = VV, pV.internalLogger = eV, pV.config = xV, pV.metas = JV, pV.transports = YV, pV.api = UV, yV.push(pV), pV.initialize())
              }))
            },
            get instrumentations() {
              return [...yV]
            },
            remove: function() {
              eV.debug("Removing instrumentations");
              for (var VV = arguments.length, xV = new Array(VV), JV = 0; JV < VV; JV++) xV[JV] = arguments[JV];
              xV.forEach((VV => {
                var xV, JV;
                eV.debug(`Removing "${VV.name}" instrumentation`);
                const YV = yV.reduce(((eV, xV, JV) => null === eV && xV.name === VV.name ? JV : null), null);
                null !== YV ? (null === (xV = (JV = yV[YV]).destroy) || void 0 === xV || xV.call(JV), yV.splice(YV, 1)) : eV.warn(`Instrumentation "${VV.name}" is not added`)
              }))
            }
          }
        }(eV, xV, VV, JV, YV, UV),
        pV = EV(eV, xV, VV, JV, YV, UV, yV);
      return oU(pV),
        function(VV) {
          VV.transports.add(...VV.config.transports), VV.transports.addBeforeSendHooks(VV.config.beforeSend)
        }(pV),
        function(VV) {
          VV.instrumentations.add(...VV.config.instrumentations)
        }(pV), pV
    }

    function IU(VV) {
      const eV = GU(VV);
      if (eV) return SU(eV)
    }
  },
  7246: function(VV, eV, xV) {
    var JV;
    ! function(YV, UV) {
      var yV = "function",
        pV = "undefined",
        QV = "object",
        nV = "string",
        wV = "major",
        ZV = "model",
        vV = "name",
        rV = "type",
        kV = "vendor",
        bV = "version",
        EV = "architecture",
        BV = "console",
        jV = "mobile",
        qV = "tablet",
        tV = "smarttv",
        FV = "wearable",
        TV = "embedded",
        PV = "Amazon",
        AV = "Apple",
        NV = "ASUS",
        XV = "BlackBerry",
        MV = "Browser",
        zV = "Chrome",
        GV = "Firefox",
        WV = "Google",
        RV = "Honor",
        gV = "Huawei",
        DV = "LG",
        iV = "Microsoft",
        CV = "Motorola",
        aV = "Nvidia",
        oV = "OnePlus",
        cV = "Opera",
        hV = "OPPO",
        lV = "Samsung",
        LV = "Sharp",
        fV = "Sony",
        mV = "Xiaomi",
        KV = "Zebra",
        HV = "Facebook",
        uV = "Chromium OS",
        sV = "Mac OS",
        SV = " Browser",
        IV = function(VV) {
          for (var eV = {}, xV = 0; xV < VV.length; xV++) eV[VV[xV].toUpperCase()] = VV[xV];
          return eV
        },
        dV = function(VV, eV) {
          return typeof VV === nV && -1 !== OV(eV).indexOf(OV(VV))
        },
        OV = function(VV) {
          return VV.toLowerCase()
        },
        Ve = function(VV, eV) {
          if (typeof VV === nV) return VV = VV.replace(/^\s\s*/, ""), typeof eV === pV ? VV : VV.substring(0, 500)
        },
        ee = function(VV, eV) {
          for (var xV, JV, YV, pV, nV, wV, ZV = 0; ZV < eV.length && !nV;) {
            var vV = eV[ZV],
              rV = eV[ZV + 1];
            for (xV = JV = 0; xV < vV.length && !nV && vV[xV];)
              if (nV = vV[xV++].exec(VV))
                for (YV = 0; YV < rV.length; YV++) wV = nV[++JV], typeof(pV = rV[YV]) === QV && pV.length > 0 ? 2 === pV.length ? typeof pV[1] == yV ? this[pV[0]] = pV[1].call(this, wV) : this[pV[0]] = pV[1] : 3 === pV.length ? typeof pV[1] !== yV || pV[1].exec && pV[1].test ? this[pV[0]] = wV ? wV.replace(pV[1], pV[2]) : UV : this[pV[0]] = wV ? pV[1].call(this, wV, pV[2]) : UV : 4 === pV.length && (this[pV[0]] = wV ? pV[3].call(this, wV.replace(pV[1], pV[2])) : UV) : this[pV] = wV || UV;
            ZV += 2
          }
        },
        xe = function(VV, eV) {
          for (var xV in eV)
            if (typeof eV[xV] === QV && eV[xV].length > 0) {
              for (var JV = 0; JV < eV[xV].length; JV++)
                if (dV(eV[xV][JV], VV)) return "?" === xV ? UV : xV
            } else if (dV(eV[xV], VV)) return "?" === xV ? UV : xV;
          return eV.hasOwnProperty("*") ? eV["*"] : VV
        },
        Je = {
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
        Ye = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [bV, [vV, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [bV, [vV, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [vV, bV],
            [/opios[\/ ]+([\w\.]+)/i],
            [bV, [vV, cV + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [bV, [vV, cV + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [bV, [vV, cV]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [bV, [vV, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [bV, [vV, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [vV, bV],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [bV, [vV, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [bV, [vV, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [bV, [vV, "UC" + MV]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [bV, [vV, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [bV, [vV, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [bV, [vV, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [bV, [vV, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [bV, [vV, "Smart Lenovo " + MV]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [vV, /(.+)/, "$1 Secure " + MV], bV
            ],
            [/\bfocus\/([\w\.]+)/i],
            [bV, [vV, GV + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [bV, [vV, cV + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [bV, [vV, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [bV, [vV, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [bV, [vV, cV + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [bV, [vV, "MIUI" + SV]],
            [/fxios\/([\w\.-]+)/i],
            [bV, [vV, GV]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [bV, [vV, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [vV, /(.+)/, "$1Browser"], bV
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [vV, /(.+)/, "$1" + SV], bV
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [bV, [vV, lV + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [bV, [vV, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [vV, "Sogou Mobile"], bV
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [vV, bV],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [vV],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [bV, vV],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [vV, HV], bV
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [vV, bV],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [bV, [vV, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [bV, [vV, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [bV, [vV, zV + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [vV, zV + " WebView"], bV
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [bV, [vV, "Android " + MV]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [vV, bV],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [bV, [vV, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [bV, vV],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [vV, [bV, xe, {
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
            [vV, bV],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [vV, "Netscape"], bV
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [vV, bV],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [bV, [vV, GV + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [vV, [bV, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [vV, [bV, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [EV, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [EV, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [EV, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [EV, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [EV, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [EV, /ower/, "", OV]
            ],
            [/ sun4\w[;\)]/i],
            [
              [EV, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [EV, OV]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [ZV, [kV, lV],
              [rV, qV]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [ZV, [kV, lV],
              [rV, jV]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [ZV, [kV, AV],
              [rV, jV]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [ZV, [kV, AV],
              [rV, qV]
            ],
            [/(macintosh);/i],
            [ZV, [kV, AV]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [ZV, [kV, LV],
              [rV, jV]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [ZV, [kV, RV],
              [rV, qV]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [ZV, [kV, RV],
              [rV, jV]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [ZV, [kV, gV],
              [rV, qV]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [ZV, [kV, gV],
              [rV, jV]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [ZV, /_/g, " "],
              [kV, mV],
              [rV, qV]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [ZV, /_/g, " "],
              [kV, mV],
              [rV, jV]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [ZV, [kV, hV],
              [rV, jV]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [ZV, [kV, xe, {
                OnePlus: ["304", "403", "203"],
                "*": hV
              }],
              [rV, qV]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [ZV, [kV, "Vivo"],
              [rV, jV]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [ZV, [kV, "Realme"],
              [rV, jV]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [ZV, [kV, CV],
              [rV, jV]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [ZV, [kV, CV],
              [rV, qV]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [ZV, [kV, DV],
              [rV, qV]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [ZV, [kV, DV],
              [rV, jV]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [ZV, [kV, "Lenovo"],
              [rV, qV]
            ],
            [/(nokia) (t[12][01])/i],
            [kV, ZV, [rV, qV]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [ZV, /_/g, " "],
              [rV, jV],
              [kV, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [ZV, [kV, WV],
              [rV, qV]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [ZV, [kV, WV],
              [rV, jV]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [ZV, [kV, fV],
              [rV, jV]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [ZV, "Xperia Tablet"],
              [kV, fV],
              [rV, qV]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [ZV, [kV, oV],
              [rV, jV]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [ZV, [kV, PV],
              [rV, qV]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [ZV, /(.+)/g, "Fire Phone $1"],
              [kV, PV],
              [rV, jV]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [ZV, kV, [rV, qV]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [ZV, [kV, XV],
              [rV, jV]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [ZV, [kV, NV],
              [rV, qV]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [ZV, [kV, NV],
              [rV, jV]
            ],
            [/(nexus 9)/i],
            [ZV, [kV, "HTC"],
              [rV, qV]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [kV, [ZV, /_/g, " "],
              [rV, jV]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [ZV, [kV, "TCL"],
              [rV, qV]
            ],
            [/(itel) ((\w+))/i],
            [
              [kV, OV], ZV, [rV, xe, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [ZV, [kV, "Acer"],
              [rV, qV]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [ZV, [kV, "Meizu"],
              [rV, jV]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [ZV, [kV, "Ulefone"],
              [rV, jV]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [ZV, [kV, "Energizer"],
              [rV, jV]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [ZV, [kV, "Cat"],
              [rV, jV]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [ZV, [kV, "Smartfren"],
              [rV, jV]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [ZV, [kV, "Nothing"],
              [rV, jV]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [ZV, [kV, "Archos"],
              [rV, qV]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [ZV, [kV, "Archos"],
              [rV, jV]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [kV, ZV, [rV, qV]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [kV, ZV, [rV, jV]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [kV, ZV, [rV, qV]],
            [/(surface duo)/i],
            [ZV, [kV, iV],
              [rV, qV]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [ZV, [kV, "Fairphone"],
              [rV, jV]
            ],
            [/(u304aa)/i],
            [ZV, [kV, "AT&T"],
              [rV, jV]
            ],
            [/\bsie-(\w*)/i],
            [ZV, [kV, "Siemens"],
              [rV, jV]
            ],
            [/\b(rct\w+) b/i],
            [ZV, [kV, "RCA"],
              [rV, qV]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [ZV, [kV, "Dell"],
              [rV, qV]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [ZV, [kV, "Verizon"],
              [rV, qV]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [ZV, [kV, "Barnes & Noble"],
              [rV, qV]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [ZV, [kV, "NuVision"],
              [rV, qV]
            ],
            [/\b(k88) b/i],
            [ZV, [kV, "ZTE"],
              [rV, qV]
            ],
            [/\b(nx\d{3}j) b/i],
            [ZV, [kV, "ZTE"],
              [rV, jV]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [ZV, [kV, "Swiss"],
              [rV, jV]
            ],
            [/\b(zur\d{3}) b/i],
            [ZV, [kV, "Swiss"],
              [rV, qV]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [ZV, [kV, "Zeki"],
              [rV, qV]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [kV, "Dragon Touch"], ZV, [rV, qV]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [ZV, [kV, "Insignia"],
              [rV, qV]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [ZV, [kV, "NextBook"],
              [rV, qV]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [kV, "Voice"], ZV, [rV, jV]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [kV, "LvTel"], ZV, [rV, jV]
            ],
            [/\b(ph-1) /i],
            [ZV, [kV, "Essential"],
              [rV, jV]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [ZV, [kV, "Envizen"],
              [rV, qV]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [ZV, [kV, "MachSpeed"],
              [rV, qV]
            ],
            [/\btu_(1491) b/i],
            [ZV, [kV, "Rotor"],
              [rV, qV]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [ZV, [kV, aV],
              [rV, qV]
            ],
            [/(sprint) (\w+)/i],
            [kV, ZV, [rV, jV]],
            [/(kin\.[onetw]{3})/i],
            [
              [ZV, /\./g, " "],
              [kV, iV],
              [rV, jV]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [ZV, [kV, KV],
              [rV, qV]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [ZV, [kV, KV],
              [rV, jV]
            ],
            [/smart-tv.+(samsung)/i],
            [kV, [rV, tV]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [ZV, /^/, "SmartTV"],
              [kV, lV],
              [rV, tV]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [kV, DV],
              [rV, tV]
            ],
            [/(apple) ?tv/i],
            [kV, [ZV, AV + " TV"],
              [rV, tV]
            ],
            [/crkey/i],
            [
              [ZV, zV + "cast"],
              [kV, WV],
              [rV, tV]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [ZV, [kV, PV],
              [rV, tV]
            ],
            [/(shield \w+ tv)/i],
            [ZV, [kV, aV],
              [rV, tV]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [ZV, [kV, LV],
              [rV, tV]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [ZV, [kV, fV],
              [rV, tV]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [ZV, [kV, mV],
              [rV, tV]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [kV, ZV, [rV, tV]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [kV, Ve],
              [ZV, Ve],
              [rV, tV]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [ZV, [rV, tV]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [rV, tV]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [kV, ZV, [rV, BV]],
            [/droid.+; (shield)( bui|\))/i],
            [ZV, [kV, aV],
              [rV, BV]
            ],
            [/(playstation \w+)/i],
            [ZV, [kV, fV],
              [rV, BV]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [ZV, [kV, iV],
              [rV, BV]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [ZV, [kV, lV],
              [rV, FV]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [kV, ZV, [rV, FV]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [ZV, [kV, hV],
              [rV, FV]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [ZV, [kV, AV],
              [rV, FV]
            ],
            [/(opwwe\d{3})/i],
            [ZV, [kV, oV],
              [rV, FV]
            ],
            [/(moto 360)/i],
            [ZV, [kV, CV],
              [rV, FV]
            ],
            [/(smartwatch 3)/i],
            [ZV, [kV, fV],
              [rV, FV]
            ],
            [/(g watch r)/i],
            [ZV, [kV, DV],
              [rV, FV]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [ZV, [kV, KV],
              [rV, FV]
            ],
            [/droid.+; (glass) \d/i],
            [ZV, [kV, WV],
              [rV, FV]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [kV, ZV, [rV, FV]],
            [/; (quest( \d| pro)?)/i],
            [ZV, [kV, HV],
              [rV, FV]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [kV, [rV, TV]],
            [/(aeobc)\b/i],
            [ZV, [kV, PV],
              [rV, TV]
            ],
            [/(homepod).+mac os/i],
            [ZV, [kV, AV],
              [rV, TV]
            ],
            [/windows iot/i],
            [
              [rV, TV]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [ZV, [rV, jV]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [ZV, [rV, qV]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [rV, qV]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [rV, jV]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [ZV, [kV, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [bV, [vV, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [vV, bV],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [bV, [vV, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [vV, bV],
            [/ladybird\//i],
            [
              [vV, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [bV, vV]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [vV, bV],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [vV, [bV, xe, Je]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [bV, xe, Je],
              [vV, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [bV, /_/g, "."],
              [vV, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [vV, sV],
              [bV, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [bV, vV],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [vV, /(.+)/, "$1 Touch"], bV
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [vV, bV],
            [/\(bb(10);/i],
            [bV, [vV, XV]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [bV, [vV, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [bV, [vV, GV + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [bV, [vV, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [bV, [vV, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [bV, [vV, zV + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [vV, uV], bV
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [vV, bV],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [vV, "Solaris"], bV
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [vV, bV]
          ]
        },
        Ue = function(VV, eV) {
          if (typeof VV === QV && (eV = VV, VV = UV), !(this instanceof Ue)) return new Ue(VV, eV).getResult();
          var xV = typeof YV !== pV && YV.navigator ? YV.navigator : UV,
            JV = VV || (xV && xV.userAgent ? xV.userAgent : ""),
            BV = xV && xV.userAgentData ? xV.userAgentData : UV,
            tV = eV ? function(VV, eV) {
              var xV = {};
              for (var JV in VV) eV[JV] && eV[JV].length % 2 === 0 ? xV[JV] = eV[JV].concat(VV[JV]) : xV[JV] = VV[JV];
              return xV
            }(Ye, eV) : Ye,
            FV = xV && xV.userAgent == JV;
          return this.getBrowser = function() {
            var VV, eV = {};
            return eV[vV] = UV, eV[bV] = UV, ee.call(eV, JV, tV.browser), eV[wV] = typeof(VV = eV[bV]) === nV ? VV.replace(/[^\d\.]/g, "").split(".")[0] : UV, FV && xV && xV.brave && typeof xV.brave.isBrave == yV && (eV[vV] = "Brave"), eV
          }, this.getCPU = function() {
            var VV = {};
            return VV[EV] = UV, ee.call(VV, JV, tV.cpu), VV
          }, this.getDevice = function() {
            var VV = {};
            return VV[kV] = UV, VV[ZV] = UV, VV[rV] = UV, ee.call(VV, JV, tV.device), FV && !VV[rV] && BV && BV.mobile && (VV[rV] = jV), FV && "Macintosh" == VV[ZV] && xV && typeof xV.standalone !== pV && xV.maxTouchPoints && xV.maxTouchPoints > 2 && (VV[ZV] = "iPad", VV[rV] = qV), VV
          }, this.sk = function() {
            var VV = {};
            return VV[vV] = UV, VV[bV] = UV, ee.call(VV, JV, tV.engine), VV
          }, this.getOS = function() {
            var VV = {};
            return VV[vV] = UV, VV[bV] = UV, ee.call(VV, JV, tV.os), FV && !VV[vV] && BV && BV.platform && "Unknown" != BV.platform && (VV[vV] = BV.platform.replace(/chrome os/i, uV).replace(/macos/i, sV)), VV
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.sk(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return JV
          }, this.setUA = function(VV) {
            return JV = typeof VV === nV && VV.length > 500 ? Ve(VV, 500) : VV, this
          }, this.setUA(JV), this
        };
      Ue.VERSION = "1.0.41", Ue.BROWSER = IV([vV, bV, wV]), Ue.CPU = IV([EV]), Ue.DEVICE = IV([ZV, kV, rV, BV, jV, tV, qV, FV, TV]), Ue.ENGINE = Ue.OS = IV([vV, bV]), typeof eV !== pV ? (VV.exports && (eV = VV.exports = Ue), eV.UAParser = Ue) : xV.amdO ? (JV = function() {
        return Ue
      }.call(eV, xV, eV, VV)) === UV || (VV.exports = JV) : typeof YV !== pV && (YV.UAParser = Ue);
      var ye = typeof YV !== pV && (YV.jQuery || YV.Zepto);
      if (ye && !ye.ua) {
        var pe = new Ue;
        ye.ua = pe.getResult(), ye.ua.get = function() {
          return pe.getUA()
        }, ye.ua.set = function(VV) {
          pe.setUA(VV);
          var eV = pe.getResult();
          for (var xV in eV) ye.ua[xV] = eV[xV]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);