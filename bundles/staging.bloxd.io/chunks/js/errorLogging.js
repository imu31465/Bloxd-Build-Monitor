export const id = 31;
export const ids = [31];
export const modules = {
  6676: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BaseExtension: () => kc,
      BaseInstrumentation: () => cc,
      BaseTransport: () => qM,
      CSPInstrumentation: () => wM,
      ConsoleInstrumentation: () => ec,
      ConsoleTransport: () => lK,
      EVENT_CLICK: () => Sk,
      EVENT_NAVIGATION: () => Dk,
      EVENT_ROUTE_CHANGE: () => mk,
      EVENT_SESSION_EXTEND: () => Pk,
      EVENT_SESSION_RESUME: () => rk,
      EVENT_SESSION_START: () => Fk,
      EVENT_VIEW_CHANGED: () => ak,
      ErrorsInstrumentation: () => Vc,
      FetchTransport: () => aK,
      InternalLoggerLevel: () => Yk,
      LogLevel: () => Dc,
      MAX_SESSION_PERSISTENCE_TIME: () => fT,
      NavigationInstrumentation: () => LM,
      Observable: () => Sc,
      PerformanceInstrumentation: () => Wl,
      PersistentSessionsManager: () => uk,
      SESSION_EXPIRATION_TIME: () => KT,
      SESSION_INACTIVITY_TIME: () => OT,
      STORAGE_KEY: () => MT,
      SessionInstrumentation: () => Mc,
      TransportItemType: () => sM,
      UserActionInstrumentation: () => PM,
      UserActionState: () => tM,
      VERSION: () => lc,
      ViewInstrumentation: () => Zc,
      VolatileSessionsManager: () => Xk,
      WebVitalsInstrumentation: () => Gl,
      allLogLevels: () => Fc,
      browserMeta: () => WM,
      buildStackFrame: () => Kc,
      captureMetas: () => ZK,
      createInternalLogger: () => mK,
      createPromiseBuffer: () => jK,
      createSession: () => pM,
      deepEqual: () => Qk,
      defaultEventDomain: () => lT,
      defaultExceptionType: () => mc,
      defaultGlobalObjectKey: () => bK,
      defaultInternalLoggerLevel: () => Wk,
      defaultLogLevel: () => ac,
      faro: () => tT,
      genShortID: () => Nk,
      getCurrentTimestamp: () => vk,
      getDataFromSafariExtensions: () => jc,
      getIgnoreUrls: () => WT,
      getInternalFaroFromGlobalObject: () => CT,
      getStackFramesFromError: () => tc,
      getTransportBody: () => cK,
      getUrlFromResource: () => pT,
      getWebInstrumentations: () => RM,
      globalObject: () => IT,
      initializeFaro: () => qK,
      internalGlobalObjectKey: () => AT,
      isArray: () => JT,
      isBoolean: () => wT,
      isDomError: () => XT,
      isDomException: () => dT,
      isElement: () => RT,
      isElementDefined: () => LT,
      sj: () => BT,
      isError: () => ZT,
      isErrorDefined: () => ET,
      isErrorEvent: () => uT,
      isEvent: () => VT,
      isEventDefined: () => GT,
      isFunction: () => zT,
      isInstanceOf: () => ST,
      isInt: () => PT,
      isInternalFaroOnGlobalObject: () => vT,
      isMap: () => UT,
      isMapDefined: () => gT,
      isNull: () => aT,
      isNumber: () => rT,
      isObject: () => bT,
      isPrimitive: () => eT,
      isRegExp: () => oT,
      isString: () => FT,
      isSymbol: () => mT,
      isSyntheticEvent: () => YT,
      isThenable: () => HT,
      isToString: () => QT,
      isTypeof: () => NT,
      isUndefined: () => DT,
      makeCoreConfig: () => oK,
      noop: () => Uk,
      osMeta: () => nM,
      parseStacktrace: () => hc,
      sdkMeta: () => iM,
      setInternalFaroOnGlobalObject: () => jT,
      transportItemTypeToBodyKey: () => TK,
      unknownString: () => Ec,
      userActionDataAttribute: () => nl,
      userActionTimeoutDataAttribute: () => pl
    });
    const lT = "browser",
      MT = "com.grafana.faro.session",
      KT = 144e5,
      OT = 9e5,
      yT = 1e3,
      fT = OT,
      xT = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: fT
      };
    const IT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof cT.g ? cT.g : "undefined" !== typeof self ? self : void 0;
    const AT = "_faroInternal";

    function CT() {
      return IT[AT]
    }

    function jT(TT) {
      TT.config.isolate ? TT.internalLogger.debug("Skipping registering internal Faro instance on global object") : (TT.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(IT, AT, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: TT
      }))
    }

    function vT() {
      return AT in IT
    }
    let tT = {
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

    function hT(TT, kT, cT, lT, MT, KT, OT) {
      return kT.debug("Initializing Faro"), tT = {
          api: KT,
          config: cT,
          instrumentations: OT,
          internalLogger: kT,
          metas: lT,
          pause: MT.pause,
          transports: MT,
          unpatchedConsole: TT,
          unpause: MT.unpause
        }, jT(tT),
        function(TT) {
          if (TT.config.preventGlobalExposure) TT.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (TT.internalLogger.debug(`Registering public faro reference in the global scope using "${TT.config.globalObjectKey}" key`), TT.config.globalObjectKey in IT) return void TT.internalLogger.warn(`Skipping global registration due to key "${TT.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(IT, TT.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: TT
            })
          }
        }(tT), tT
    }

    function NT(TT, kT) {
      return typeof TT === kT
    }

    function QT(TT, kT) {
      return Object.prototype.toString.call(TT) === `[object ${kT}]`
    }

    function ST(TT, kT) {
      try {
        return TT instanceof kT
      } catch (cT) {
        return !1
      }
    }
    const DT = TT => NT(TT, "undefined"),
      aT = TT => NT(TT, "null"),
      FT = TT => NT(TT, "string"),
      rT = TT => NT(TT, "number") && !isNaN(TT) || NT(TT, "bigint"),
      PT = TT => rT(TT) && Number.isInteger(TT),
      wT = TT => NT(TT, "boolean"),
      mT = TT => NT(TT, "symbol"),
      bT = TT => !aT(TT) && NT(TT, "object"),
      zT = TT => NT(TT, "function"),
      JT = TT => QT(TT, "Array"),
      oT = TT => QT(TT, "RegExp"),
      HT = TT => zT(null === TT || void 0 === TT ? void 0 : TT.then),
      eT = TT => !bT(TT) && !zT(TT),
      GT = "undefined" !== typeof Event,
      VT = TT => GT && ST(TT, Event),
      ET = "undefined" !== typeof Error,
      ZT = TT => ET && ST(TT, Error),
      uT = TT => QT(TT, "ErrorEvent"),
      XT = TT => QT(TT, "DOMError"),
      dT = TT => QT(TT, "DOMException"),
      LT = "undefined" !== typeof Element,
      RT = TT => LT && ST(TT, Element),
      gT = "undefined" !== typeof Map,
      UT = TT => gT && ST(TT, Map),
      YT = TT => bT(TT) && "nativeEvent" in TT && "preventDefault" in TT && "stopPropagation" in TT;

    function BT(TT) {
      return null == TT || (JT(TT) || FT(TT) ? 0 === TT.length : !!bT(TT) && 0 === Object.keys(TT).length)
    }

    function WT() {
      return tT.transports.transports.flatMap((TT => TT.getIgnoreUrls()))
    }

    function nT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return WT().some((kT => TT && null != TT.match(kT)))
    }

    function pT(TT) {
      return FT(TT) ? TT : TT instanceof URL ? TT.href : !BT(TT) && zT(null === TT || void 0 === TT ? void 0 : TT.toString) ? TT.toString() : void 0
    }
    const iT = "sessionStorage",
      qT = "localStorage";

    function sT(TT) {
      try {
        let kT;
        kT = window[TT];
        const cT = "__faro_storage_test__";
        return kT.setItem(cT, cT), kT.removeItem(cT), !0
      } catch (cT) {
        var kT;
        return null === (kT = tT.internalLogger) || void 0 === kT || kT.info(`Web storage of type ${TT} is not available. Reason: ${cT}`), !1
      }
    }

    function Tk(TT, kT) {
      return Kk(kT) ? window[kT].getItem(TT) : null
    }

    function kk(TT, kT, cT) {
      if (Kk(cT)) try {
        window[cT].setItem(TT, kT)
      } catch (lT) {}
    }

    function ck(TT, kT) {
      Kk(kT) && window[kT].removeItem(TT)
    }
    const lk = sT(qT),
      Mk = sT(iT);

    function Kk(TT) {
      return TT === qT ? lk : TT === iT && Mk
    }

    function Ok(TT) {
      return Ok = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Ok(TT)
    }

    function yk(TT) {
      var kT = function(TT, kT) {
        if ("object" != Ok(TT) || !TT) return TT;
        var cT = TT[Symbol.toPrimitive];
        if (void 0 !== cT) {
          var lT = cT.call(TT, kT || "default");
          if ("object" != Ok(lT)) return lT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === kT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == Ok(kT) ? kT : kT + ""
    }

    function fk(TT, kT, cT) {
      return (kT = yk(kT)) in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }

    function xk(TT, kT) {
      var cT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var lT = Object.getOwnPropertySymbols(TT);
        kT && (lT = lT.filter((function(kT) {
          return Object.getOwnPropertyDescriptor(TT, kT).enumerable
        }))), cT.push.apply(cT, lT)
      }
      return cT
    }

    function Ik(TT) {
      for (var kT = 1; kT < arguments.length; kT++) {
        var cT = null != arguments[kT] ? arguments[kT] : {};
        kT % 2 ? xk(Object(cT), !0).forEach((function(kT) {
          fk(TT, kT, cT[kT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : xk(Object(cT)).forEach((function(kT) {
          Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
        }))
      }
      return TT
    }

    function Ak() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT;
      var kT, cT, lT;
      const MT = TT.config.sessionTracking,
        KT = null !== (kT = null !== (cT = null === MT || void 0 === MT || null === (lT = MT.sampler) || void 0 === lT ? void 0 : lT.call(MT, {
          metas: TT.metas.value
        })) && void 0 !== cT ? cT : null === MT || void 0 === MT ? void 0 : MT.samplingRate) && void 0 !== kT ? kT : 1,
        OT = "number" === typeof KT ? function(TT) {
          return Math.min(1, Math.max(0, TT))
        }(KT) : 0;
      if (!(OT > 0)) return !1;
      if (1 === OT) return !0;
      try {
        const TT = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === TT || void 0 === TT ? void 0 : TT.getRandomValues)) {
          const kT = new Uint32Array(1);
          return TT.getRandomValues(kT), kT[0] / Math.pow(2, 32) < OT
        }
      } catch (yT) {}
      return Math.random() < OT
    }

    function Ck() {
      return Date.now()
    }

    function jk() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function vk() {
      return (new Date).toISOString()
    }

    function tk(TT) {
      return new Date(TT).toISOString()
    }
    const hk = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Nk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const kT = new Uint32Array(TT),
        cT = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === cT || void 0 === cT ? void 0 : cT.getRandomValues) cT.getRandomValues(kT);
      else
        for (let MT = 0; MT < TT; MT++) kT[MT] = Math.floor(4294967296 * Math.random());
      let lT = "";
      for (let MT = 0; MT < TT; MT++) lT += hk[kT[MT] % 59];
      return lT
    }

    function Qk(TT, kT) {
      if (TT === kT) return !0;
      if (NT(TT, "number") && isNaN(TT)) return NT(kT, "number") && isNaN(kT);
      const cT = JT(TT),
        lT = JT(kT);
      if (cT !== lT) return !1;
      if (cT && lT) {
        const cT = TT.length;
        if (cT !== kT.length) return !1;
        for (let lT = cT; 0 !== lT--;)
          if (!Qk(TT[lT], kT[lT])) return !1;
        return !0
      }
      const MT = bT(TT),
        KT = bT(kT);
      if (MT !== KT) return !1;
      if (TT && kT && MT && KT) {
        const cT = Object.keys(TT),
          lT = Object.keys(kT);
        if (cT.length !== lT.length) return !1;
        for (let TT of cT)
          if (!lT.includes(TT)) return !1;
        for (let MT of cT)
          if (!Qk(TT[MT], kT[MT])) return !1;
        return !0
      }
      return !1
    }
    const Sk = "click",
      Dk = "navigation",
      ak = "view_changed",
      Fk = "session_start",
      rk = "session_resume",
      Pk = "session_extend",
      wk = "service_name_override",
      mk = "route_change";

    function bk() {
      let {
        sessionId: TT,
        started: kT,
        lastActivity: cT,
        isSampled: lT = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, MT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tT;
      var KT;
      const OT = Ck(),
        yT = null === (KT = MT.config) || void 0 === KT || null === (KT = KT.sessionTracking) || void 0 === KT ? void 0 : KT.generateSessionId;
      return null == TT && (TT = "function" === typeof yT ? yT() : Nk()), {
        sessionId: TT,
        lastActivity: null !== cT && void 0 !== cT ? cT : OT,
        started: null !== kT && void 0 !== kT ? kT : OT,
        isSampled: lT
      }
    }

    function zk(TT) {
      if (null == TT) return !1;
      const kT = Ck();
      return kT - TT.started < 144e5 && kT - TT.lastActivity < OT
    }

    function Jk(TT) {
      let {
        fetchUserSession: kT,
        storeUserSession: cT,
        adoptSession: lT,
        updateInterval: MT = 0
      } = TT, yT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tT, fT = 0;
      return function() {
        let {
          forceSessionExtend: TT = !1,
          refreshActivity: xT = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var IT, AT;
        if (!kT || !cT) return;
        const CT = Ck();
        if (!TT && CT < fT && fT - CT <= MT) return;
        const jT = yT.config.sessionTracking,
          vT = null === jT || void 0 === jT ? void 0 : jT.persistent;
        if (vT && !lk || !vT && !Mk) return;
        const tT = kT();
        if (fT = Math.min(CT + MT, (null !== (IT = null === tT || void 0 === tT ? void 0 : tT.started) && void 0 !== IT ? IT : CT) + KT, (null !== (AT = null === tT || void 0 === tT ? void 0 : tT.lastActivity) && void 0 !== AT ? AT : CT) + OT), !1 === TT && zk(tT)) {
          var hT;
          xT && cT(Ik(Ik({}, tT), {}, {
            lastActivity: CT
          }));
          const TT = null === (hT = yT.metas.value.session) || void 0 === hT ? void 0 : hT.id;
          null != lT && null != tT.sessionMeta && tT.sessionId !== TT && lT(tT.sessionMeta)
        } else {
          var NT, QT, ST;
          let TT = ek(bk({
            isSampled: Ak(yT)
          }, yT), tT, yT);
          fT = CT + MT, cT(TT), null === (NT = yT.api) || void 0 === NT || NT.setSession(TT.sessionMeta), null === jT || void 0 === jT || null === (QT = jT.onSessionChange) || void 0 === QT || QT.call(jT, null !== (ST = null === tT || void 0 === tT ? void 0 : tT.sessionMeta) && void 0 !== ST ? ST : null, TT.sessionMeta)
        }
      }
    }

    function Hk(TT) {
      let kT, {
          fetchUserSession: cT,
          storeUserSession: lT,
          updateInterval: MT = 0
        } = TT,
        KT = 0;
      return TT => {
        const OT = Ck();
        if (TT === kT && OT < KT && KT - OT <= MT) return;
        kT = TT, KT = OT + MT;
        const yT = cT();
        (null === yT || void 0 === yT ? void 0 : yT.sessionId) === TT && zk(yT) && lT(Ik(Ik({}, yT), {}, {
          lastActivity: OT
        }))
      }
    }

    function ek(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tT;
      var lT, MT, KT, OT, yT, fT;
      const xT = Ik(Ik({}, TT), {}, {
          sessionMeta: {
            id: TT.sessionId,
            attributes: Vk(Ik(Ik(Ik({}, null === (lT = cT.config.sessionTracking) || void 0 === lT || null === (lT = lT.session) || void 0 === lT ? void 0 : lT.attributes), null !== (MT = null === (KT = cT.metas.value.session) || void 0 === KT ? void 0 : KT.attributes) && void 0 !== MT ? MT : {}), {}, {
              isSampled: TT.isSampled.toString()
            }))
          }
        }),
        IT = null !== (OT = null === (yT = cT.metas.value.session) || void 0 === yT ? void 0 : yT.overrides) && void 0 !== OT ? OT : null === kT || void 0 === kT || null === (fT = kT.sessionMeta) || void 0 === fT ? void 0 : fT.overrides;
      BT(IT) || (xT.sessionMeta.overrides = IT);
      const AT = null === kT || void 0 === kT ? void 0 : kT.sessionId;
      return null != AT && (xT.sessionMeta.attributes.previousSession = AT), xT
    }

    function Gk(TT) {
      let {
        fetchUserSession: kT,
        storeUserSession: cT
      } = TT, lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tT, MT = !1;
      return function(TT) {
        if (MT) return;
        const KT = TT.session,
          OT = kT();
        let yT = null === KT || void 0 === KT ? void 0 : KT.id;
        const fT = null === KT || void 0 === KT ? void 0 : KT.attributes,
          xT = null === KT || void 0 === KT ? void 0 : KT.overrides,
          IT = null === OT || void 0 === OT ? void 0 : OT.sessionMeta,
          AT = null === IT || void 0 === IT ? void 0 : IT.overrides,
          CT = !!xT && !Qk(xT, AT),
          jT = !!fT && !Qk(fT, null === IT || void 0 === IT ? void 0 : IT.attributes);
        if (KT && yT !== (null === OT || void 0 === OT ? void 0 : OT.sessionId) || jT || CT) {
          var vT, tT;
          const TT = null != OT && yT === OT.sessionId,
            kT = ek(TT ? OT : bk({
              sessionId: yT,
              isSampled: Ak(lT)
            }, lT), OT, lT),
            KT = null === OT || void 0 === OT || null === (vT = OT.sessionMeta) || void 0 === vT || null === (vT = vT.attributes) || void 0 === vT ? void 0 : vT.previousSession;
          TT && null != KT && KT !== kT.sessionId && (kT.sessionMeta.attributes.previousSession = KT), (null === (tT = kT.sessionMeta.attributes) || void 0 === tT ? void 0 : tT.previousSession) === kT.sessionId && delete kT.sessionMeta.attributes.previousSession, cT(kT),
            function(TT, kT) {
              let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var MT, KT, OT;
              if (!kT) return;
              const yT = cT.serviceName,
                fT = null !== (MT = null !== (KT = lT.serviceName) && void 0 !== KT ? KT : null === (OT = TT.metas.value.app) || void 0 === OT ? void 0 : OT.name) && void 0 !== MT ? MT : "";
              yT && yT !== fT && TT.api.pushEvent(wk, {
                serviceName: yT,
                previousServiceName: fT
              })
            }(lT, CT, xT, AT), MT = !0;
          try {
            lT.api.setSession(kT.sessionMeta)
          } finally {
            MT = !1
          }
        }
      }
    }

    function Vk(TT) {
      const kT = {};
      for (const cT of Object.keys(TT)) {
        const lT = TT[cT];
        void 0 !== lT && (kT[cT] = lT)
      }
      return kT
    }

    function Ek() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== TT && void 0 !== TT ? TT : {}, function() {
        const TT = new WeakSet;
        return function(kT, cT) {
          if (bT(cT) && null !== cT) {
            if (TT.has(cT)) return null;
            TT.add(cT)
          }
          return cT
        }
      }())
    }

    function Zk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const kT = {};
      for (const [cT, lT] of Object.entries(TT)) kT[cT] = bT(lT) && null !== lT ? Ek(lT) : String(lT);
      return kT
    }
    var uk = class TT {
      constructor() {
        var kT = this;
        let cT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT;
        this.context = cT, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = TT => {
          this.adopting = !0;
          try {
            var kT;
            null === (kT = this.context.api) || void 0 === kT || kT.setSession(TT)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: TT = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return kT.updateUserSession({
            refreshActivity: TT
          })
        }, this.recordActivity = Hk({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: yT
        }), this.updateUserSession = Jk({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: yT
        }, cT), this.init()
      }
      static removeUserSession() {
        ck(MT, TT.storageTypeLocal)
      }
      static storeUserSession(kT) {
        kk(MT, Ek(kT), TT.storageTypeLocal)
      }
      static fetchUserSession() {
        const kT = Tk(MT, TT.storageTypeLocal);
        return kT ? JSON.parse(kT) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var TT;
            this.updateSession({
              refreshActivity: !1
            });
            const kT = null === (TT = this.context.api) || void 0 === TT || null === (TT = TT.getSession()) || void 0 === TT ? void 0 : TT.id;
            kT && this.recordActivity(kT)
          }
        })), this.context.metas.addListener(Gk({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession
        }, this.context))
      }
    };
    uk.storageTypeLocal = qT;
    var Xk = class TT {
      constructor() {
        var kT = this;
        let cT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT;
        this.context = cT, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: TT = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return kT.updateUserSession({
            refreshActivity: TT
          })
        }, this.recordActivity = Hk({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: yT
        }), this.updateUserSession = Jk({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: yT
        }, cT), this.init()
      }
      static removeUserSession() {
        ck(MT, TT.storageTypeSession)
      }
      static storeUserSession(kT) {
        kk(MT, Ek(kT), TT.storageTypeSession)
      }
      static fetchUserSession() {
        const kT = Tk(MT, TT.storageTypeSession);
        return kT ? JSON.parse(kT) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var TT;
            this.updateSession({
              refreshActivity: !1
            });
            const kT = null === (TT = this.context.api) || void 0 === TT || null === (TT = TT.getSession()) || void 0 === TT ? void 0 : TT.id;
            kT && this.recordActivity(kT)
          }
        })), this.context.metas.addListener(Gk({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession
        }, this.context))
      }
    };
    Xk.storageTypeSession = iT;
    const dk = new WeakMap;

    function Lk(TT) {
      let kT = dk.get(TT);
      if (!kT) {
        let cT = [],
          lT = [];
        kT = {
          addSessionUpdateListener: TT => {
            cT.push(TT)
          },
          removeSessionUpdateListener: TT => {
            cT = cT.filter((kT => kT !== TT))
          },
          notifySessionUpdate: TT => {
            cT.forEach((kT => kT(TT)))
          },
          shouldCapture: () => lT.every((TT => TT())),
          addCaptureFilter: TT => {
            lT.push(TT)
          },
          removeCaptureFilter: TT => {
            lT = lT.filter((kT => kT !== TT))
          }
        }, dk.set(TT, kT)
      }
      return kT
    }
    var Rk = class {
      constructor(TT, kT, cT) {
        this.metas = TT, this.transports = kT, this.onActivate = cT, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = TT => {
          var kT, cT, lT;
          const MT = this.pending;
          var KT, OT;
          if ("overrides" === TT.type) return void(this.pending = {
            reset: null !== (KT = null === MT || void 0 === MT ? void 0 : MT.reset) && void 0 !== KT && KT,
            inheritOverrides: null === (OT = null === MT || void 0 === MT ? void 0 : MT.inheritOverrides) || void 0 === OT || OT,
            session: Ik(Ik({}, null === MT || void 0 === MT ? void 0 : MT.session), {}, {
              overrides: Ik(Ik({}, null === MT || void 0 === MT ? void 0 : MT.session.overrides), TT.overrides)
            })
          });
          const yT = TT.session,
            fT = BT(yT) || null != yT && "id" in yT && !yT.id,
            xT = null !== (kT = null === yT || void 0 === yT ? void 0 : yT.overrides) && void 0 !== kT ? kT : null === MT || void 0 === MT ? void 0 : MT.session.overrides;
          this.pending = {
            reset: fT || !(null === yT || void 0 === yT ? void 0 : yT.id) && null !== (cT = null === MT || void 0 === MT ? void 0 : MT.reset) && void 0 !== cT && cT,
            inheritOverrides: !(!TT.overrides && void 0 !== (null === yT || void 0 === yT ? void 0 : yT.overrides)) && (null === (lT = null === MT || void 0 === MT ? void 0 : MT.inheritOverrides) || void 0 === lT || lT),
            session: {
              id: null === yT || void 0 === yT ? void 0 : yT.id,
              attributes: (null === yT || void 0 === yT ? void 0 : yT.attributes) && Ik({}, yT.attributes),
              overrides: TT.overrides ? Ik(Ik({}, null === MT || void 0 === MT ? void 0 : MT.session.overrides), TT.overrides) : xT && Ik({}, xT)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var TT, kT;
        this.waiting = !0, Lk(this.metas).addSessionUpdateListener(this.recordUpdate), Lk(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (TT = (kT = this.metas).addCaptureListener) || void 0 === TT || TT.call(kT, this.activate), this.activate()
      }
      destroy() {
        var TT, kT;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Lk(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (TT = (kT = this.metas).removeCaptureListener) || void 0 === TT || TT.call(kT, this.activate), Lk(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function gk(TT) {
      return (null === TT || void 0 === TT ? void 0 : TT.persistent) ? uk : Xk
    }

    function Uk() {}
    let Yk = function(TT) {
      return TT[TT.OFF = 0] = "OFF", TT[TT.ERROR = 1] = "ERROR", TT[TT.WARN = 2] = "WARN", TT[TT.INFO = 3] = "INFO", TT[TT.VERBOSE = 4] = "VERBOSE", TT
    }({});
    const Bk = {
        debug: Uk,
        error: Uk,
        info: Uk,
        prefix: "Faro",
        warn: Uk
      },
      Wk = 1;

    function nk(TT) {
      return nk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, nk(TT)
    }

    function pk(TT) {
      var kT = function(TT, kT) {
        if ("object" != nk(TT) || !TT) return TT;
        var cT = TT[Symbol.toPrimitive];
        if (void 0 !== cT) {
          var lT = cT.call(TT, kT || "default");
          if ("object" != nk(lT)) return lT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === kT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == nk(kT) ? kT : kT + ""
    }

    function ik(TT, kT, cT) {
      return (kT = pk(kT)) in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }

    function qk(TT, kT) {
      var cT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var lT = Object.getOwnPropertySymbols(TT);
        kT && (lT = lT.filter((function(kT) {
          return Object.getOwnPropertyDescriptor(TT, kT).enumerable
        }))), cT.push.apply(cT, lT)
      }
      return cT
    }

    function sk(TT) {
      for (var kT = 1; kT < arguments.length; kT++) {
        var cT = null != arguments[kT] ? arguments[kT] : {};
        kT % 2 ? qk(Object(cT), !0).forEach((function(kT) {
          ik(TT, kT, cT[kT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : qk(Object(cT)).forEach((function(kT) {
          Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
        }))
      }
      return TT
    }
    const Tc = sk({}, console);
    var kc = class {
        constructor() {
          this.unpatchedConsole = Tc, this.internalLogger = Bk, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
          this.internalLogger.debug(`${this.name}\n`, ...kT)
        }
        logInfo() {
          for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
          this.internalLogger.info(`${this.name}\n`, ...kT)
        }
        logWarn() {
          for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
          this.internalLogger.warn(`${this.name}\n`, ...kT)
        }
        logError() {
          for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
          this.internalLogger.error(`${this.name}\n`, ...kT)
        }
      },
      cc = class extends kc {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const lc = "2.12.1";
    var Mc = class extends cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = lc, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(TT) {
        var kT;
        const cT = TT.session;
        if (cT && cT.id !== (null === (kT = this.notifiedSession) || void 0 === kT ? void 0 : kT.id)) {
          var lT;
          if (this.isAdoptingSession()) return void(this.notifiedSession = cT);
          if (this.notifiedSession && this.notifiedSession.id === (null === (lT = cT.attributes) || void 0 === lT ? void 0 : lT.previousSession)) return this.api.pushEvent(Pk, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = cT);
          this.notifiedSession = cT, this.api.pushEvent(Fk, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(TT, kT, cT) {
        const lT = null === cT || void 0 === cT ? void 0 : cT.session;
        let MT, KT, OT = TT.fetchUserSession();
        if (kT.persistent && kT.maxSessionPersistenceTime && OT) {
          const TT = Ck();
          OT.lastActivity < TT - kT.maxSessionPersistenceTime && (uk.removeUserSession(), OT = null)
        }
        const yT = zk(OT);
        if ((null === cT || void 0 === cT ? void 0 : cT.reset) || !yT || (null === lT || void 0 === lT ? void 0 : lT.id) && lT.id !== (null === OT || void 0 === OT ? void 0 : OT.sessionId)) {
          var fT, xT, IT, AT, CT, jT;
          KT = bk({
            sessionId: (null === cT || void 0 === cT ? void 0 : cT.reset) ? void 0 : null !== (fT = null === lT || void 0 === lT ? void 0 : lT.id) && void 0 !== fT ? fT : null === (xT = kT.session) || void 0 === xT ? void 0 : xT.id,
            isSampled: Ak(this)
          }, this);
          const TT = KT.sessionId,
            vT = cT && yT ? null === OT || void 0 === OT || null === (IT = OT.sessionMeta) || void 0 === IT ? void 0 : IT.overrides : void 0,
            tT = vT ? Ik(Ik({}, null === (AT = kT.session) || void 0 === AT ? void 0 : AT.overrides), vT) : null === (CT = kT.session) || void 0 === CT ? void 0 : CT.overrides;
          KT.sessionMeta = Ik({
            id: TT,
            attributes: Ik({
              isSampled: KT.isSampled.toString()
            }, null === (jT = kT.session) || void 0 === jT ? void 0 : jT.attributes)
          }, tT ? {
            overrides: tT
          } : {}), MT = Fk
        } else {
          var vT, tT;
          const TT = null === OT || void 0 === OT ? void 0 : OT.sessionId;
          KT = bk({
            sessionId: TT,
            isSampled: OT.isSampled || !1,
            started: null === OT || void 0 === OT ? void 0 : OT.started
          }, this);
          const cT = null === OT || void 0 === OT ? void 0 : OT.sessionMeta,
            lT = Ik(Ik({}, null === (vT = kT.session) || void 0 === vT ? void 0 : vT.overrides), null === cT || void 0 === cT ? void 0 : cT.overrides);
          KT.sessionMeta = Ik(Ik({}, kT.session), {}, {
            id: TT,
            attributes: Ik(Ik(Ik({}, null === (tT = kT.session) || void 0 === tT ? void 0 : tT.attributes), null === cT || void 0 === cT ? void 0 : cT.attributes), {}, {
              isSampled: KT.isSampled.toString()
            }),
            overrides: lT
          }), MT = rk
        }
        var hT;
        if (lT && (KT.sessionMeta = Ik(Ik({}, KT.sessionMeta), {}, {
            attributes: Ik(Ik(Ik({}, null === (hT = KT.sessionMeta) || void 0 === hT ? void 0 : hT.attributes), lT.attributes), {}, {
              isSampled: KT.isSampled.toString()
            })
          }), lT.overrides)) {
          const TT = (null === cT || void 0 === cT ? void 0 : cT.inheritOverrides) ? Ik(Ik({}, KT.sessionMeta.overrides), lT.overrides) : lT.overrides;
          Object.keys(TT).length > 0 ? KT.sessionMeta.overrides = TT : delete KT.sessionMeta.overrides
        }
        return {
          initialSession: KT,
          lifecycleType: MT
        }
      }
      registerBeforeSendHook(TT) {
        var kT;
        this.beforeSendHook = kT => {
          var cT, lT;
          const MT = null === (cT = kT.meta.session) || void 0 === cT ? void 0 : cT.id;
          MT && !this.transports.isPaused() && TT(MT);
          const KT = null === (lT = kT.meta.session) || void 0 === lT ? void 0 : lT.attributes;
          if (KT && "true" === (null === KT || void 0 === KT ? void 0 : KT.isSampled)) {
            var OT;
            let TT = JSON.parse(JSON.stringify(kT));
            const cT = null === (OT = TT.meta.session) || void 0 === OT ? void 0 : OT.attributes;
            var yT;
            if (null === cT || void 0 === cT || delete cT.isSampled, 0 === Object.keys(null !== cT && void 0 !== cT ? cT : {}).length) null === (yT = TT.meta.session) || void 0 === yT || delete yT.attributes;
            return TT
          }
          return null
        }, null === (kT = this.transports) || void 0 === kT || kT.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var TT;
        this.logDebug("init session instrumentation");
        const kT = document.prerendering;
        var cT;
        if ((null === (TT = this.config.sessionTracking) || void 0 === TT ? void 0 : TT.enabled) && (kT || this.prerenderSession)) return null !== (cT = this.prerenderSession) && void 0 !== cT || (this.prerenderSession = new Rk(this.metas, this.transports, (TT => {
          this.prerenderSession = void 0, this.initializeSession(TT)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(TT) {
        const kT = this.config.sessionTracking;
        if (null === kT || void 0 === kT ? void 0 : kT.enabled) {
          var cT, lT;
          const MT = gk(kT),
            KT = new MT(this);
          this.isAdoptingSession = KT.isAdopting, this.registerBeforeSendHook(KT.recordActivity);
          const {
            initialSession: OT,
            lifecycleType: yT
          } = this.createInitialSession(MT, kT, TT);
          MT.storeUserSession(OT);
          const fT = OT.sessionMeta;
          this.notifiedSession = fT, this.api.setSession(fT), this.captureListener = () => {
            this.transports.isPaused() || KT.updateSession({
              refreshActivity: !1
            })
          }, null === (cT = (lT = this.metas).addCaptureListener) || void 0 === cT || cT.call(lT, this.captureListener), yT === Fk && this.api.pushEvent(Fk, {}, void 0, {
            skipDedupe: !0
          }), yT === rk && this.api.pushEvent(rk, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var TT, kT, cT;
        (null === (TT = this.prerenderSession) || void 0 === TT || TT.destroy(), this.captureListener) && (null === (kT = (cT = this.metas).removeCaptureListener) || void 0 === kT || kT.call(cT, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Kc(TT, kT, cT, lT) {
      const MT = {
        filename: TT || document.location.href,
        function: kT || "?"
      };
      return void 0 !== cT && (MT.lineno = cT), void 0 !== lT && (MT.colno = lT), MT
    }
    const Oc = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      yc = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      fc = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      xc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Ic = "safari-extension",
      Ac = "safari-web-extension",
      Cc = /Minified React error #\d+;/i;

    function jc(TT, kT) {
      const cT = null === TT || void 0 === TT ? void 0 : TT.includes(Ic),
        lT = !cT && (null === TT || void 0 === TT ? void 0 : TT.includes("safari-web-extension"));
      return cT || lT ? [(null === TT || void 0 === TT ? void 0 : TT.includes("@")) ? TT.split("@")[0] : TT, cT ? `${Ic}:${kT}` : `${Ac}:${kT}`] : [TT, kT]
    }
    const vc = 1024;

    function tc(TT) {
      let kT = [];
      TT.stacktrace ? kT = TT.stacktrace.split("\n").filter(((TT, kT) => kT % 2 === 0)) : TT.stack && (kT = TT.stack.split("\n"));
      const cT = kT.reduce(((kT, cT, lT) => {
        if (cT.length > vc) return kT;
        let MT, KT, OT, yT, fT;
        if (MT = Oc.exec(cT)) {
          if (KT = MT[1], OT = MT[2], yT = MT[3], fT = MT[4], null === OT || void 0 === OT ? void 0 : OT.startsWith("eval")) {
            const TT = yc.exec(OT);
            TT && (OT = TT[1], yT = TT[2], fT = TT[3])
          }
          OT = (null === OT || void 0 === OT ? void 0 : OT.startsWith("address at ")) ? OT.substring(11) : OT, [KT, OT] = jc(KT, OT)
        } else if (MT = fc.exec(cT)) {
          if (KT = MT[1], OT = MT[3], yT = MT[4], fT = MT[5], OT && OT.includes(" > eval")) {
            const TT = xc.exec(OT);
            TT && (KT = KT || "eval", OT = TT[1], yT = TT[2])
          } else 0 === lT && !fT && rT(TT.columnNumber) && (fT = String(TT.columnNumber + 1));
          [KT, OT] = jc(KT, OT)
        }
        return (OT || KT) && kT.push(Kc(OT, KT, yT ? Number(yT) : void 0, fT ? Number(fT) : void 0)), kT
      }), []);
      return Cc.test(TT.message) ? cT.slice(1) : cT
    }

    function hc(TT) {
      return {
        frames: tc(TT)
      }
    }
    const Nc = "http-request-start",
      Qc = "http-request-end";
    var Sc = class TT {
      constructor() {
        this.subscribers = []
      }
      subscribe(TT) {
        return this.subscribers.push(TT), {
          unsubscribe: () => this.unsubscribe(TT)
        }
      }
      unsubscribe(TT) {
        this.subscribers = this.subscribers.filter((kT => kT !== TT))
      }
      notify(TT) {
        this.subscribers.forEach((kT => kT(TT)))
      }
      first() {
        const kT = new TT,
          cT = TT => {
            kT.notify(TT), lT.unsubscribe()
          },
          lT = this.subscribe(cT),
          MT = kT.unsubscribe.bind(kT);
        return this.withUnsubscribeOverride(kT, MT, cT)
      }
      takeWhile(kT) {
        const cT = new TT,
          lT = TT => {
            kT(TT) ? cT.notify(TT) : cT.unsubscribe(lT)
          };
        this.subscribe(lT);
        const MT = cT.unsubscribe.bind(cT);
        return this.withUnsubscribeOverride(cT, MT, lT)
      }
      filter(kT) {
        const cT = new TT,
          lT = TT => {
            kT(TT) && cT.notify(TT)
          };
        this.subscribe(lT);
        const MT = cT.unsubscribe.bind(cT);
        return this.withUnsubscribeOverride(cT, MT, lT)
      }
      merge() {
        const kT = new TT,
          cT = [];
        for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
        MT.forEach((TT => {
          const lT = TT.subscribe((TT => {
            kT.notify(TT)
          }));
          cT.push(lT)
        }));
        const OT = kT.unsubscribeAll.bind(kT);
        return kT.unsubscribe = () => {
          cT.forEach((TT => TT.unsubscribe())), OT()
        }, kT
      }
      withUnsubscribeOverride(TT, kT, cT) {
        return TT.unsubscribe = TT => {
          kT(TT), this.unsubscribe(cT)
        }, TT
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Dc = function(TT) {
      return TT.TRACE = "trace", TT.DEBUG = "debug", TT.INFO = "info", TT.LOG = "log", TT.WARN = "warn", TT.ERROR = "error", TT
    }({});
    const ac = "log",
      Fc = ["trace", "debug", "info", "log", "warn", "error"];
    let rc, Pc = !1;
    const wc = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      mc = "Error",
      bc = TT => TT.map((TT => bT(TT) ? Ek(TT) : String(TT))).join(" ");

    function zc(TT) {
      let kT, cT, lT, MT, KT = [];
      if (uT(TT) && TT.error) kT = TT.error.message, cT = TT.error.name, KT = tc(TT.error);
      else if ((lT = XT(TT)) || dT(TT)) {
        const {
          name: MT,
          message: KT
        } = TT;
        cT = null !== MT && void 0 !== MT ? MT : lT ? "DOMError" : "DOMException", kT = KT ? `${cT}: ${KT}` : cT
      } else ZT(TT) ? (cT = TT.name, kT = TT.message, KT = tc(TT)) : (bT(TT) || (MT = VT(TT))) && (cT = MT ? TT.constructor.name : void 0, kT = `Non-Error exception captured with keys: ${Object.keys(TT)}`);
      return [kT, cT, KT]
    }

    function Jc(TT) {
      const [kT, cT, lT, MT, KT] = TT;
      let OT, yT, fT = [];
      const xT = FT(kT),
        IT = Kc(cT, "?", lT, MT);
      return KT || !xT ? ([OT, yT, fT] = zc(null !== KT && void 0 !== KT ? KT : kT), 0 === fT.length && (fT = [IT])) : xT && ([OT, yT] = function(TT) {
        var kT, cT;
        const lT = TT.match(wc),
          MT = null !== (kT = null === lT || void 0 === lT ? void 0 : lT[1]) && void 0 !== kT ? kT : mc;
        return [null !== (cT = null === lT || void 0 === lT ? void 0 : lT[2]) && void 0 !== cT ? cT : TT, MT]
      }(kT), fT = [IT]), {
        value: OT,
        type: yT,
        stackFrames: fT
      }
    }

    function oc(TT, kT) {
      return ZT(TT[0]) ? Jc(TT) : {
        value: kT(TT)
      }
    }
    const Hc = TT => TT.map((TT => {
      try {
        return String(TT)
      } catch (kT) {
        return ""
      }
    })).join(" ");
    var ec = class TT extends cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = lc, this.errorSerializer = Hc
      }
      initialize() {
        var kT, cT;
        const lT = this.config.consoleInstrumentation,
          MT = (null === lT || void 0 === lT ? void 0 : lT.serializeErrors) || !!(null === lT || void 0 === lT ? void 0 : lT.errorSerializer);
        this.errorSerializer = MT ? null !== (kT = null === lT || void 0 === lT ? void 0 : lT.errorSerializer) && void 0 !== kT ? kT : bc : Hc;
        const KT = null !== (cT = null === lT || void 0 === lT ? void 0 : lT.disabledLevels) && void 0 !== cT ? cT : TT.defaultDisabledLevels,
          OT = function(TT) {
            if (rc || (rc = new Sc), !Pc) {
              const kT = null !== TT && void 0 !== TT ? TT : Tc;
              Fc.forEach((TT => {
                console[TT] = function() {
                  for (var cT, lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
                  rc.notify({
                    type: "console",
                    level: TT,
                    args: MT
                  }), null === (cT = kT[TT]) || void 0 === cT || cT.apply(console, MT)
                }
              })), Pc = !0
            }
            return rc
          }(this.unpatchedConsole);
        this.subscription = OT.subscribe((kT => {
          let {
            level: cT,
            args: MT
          } = kT;
          if (!KT.includes(cT)) try {
            if (cT !== Dc.ERROR || (null === lT || void 0 === lT ? void 0 : lT.consoleErrorAsLog))
              if (cT === Dc.ERROR && (null === lT || void 0 === lT ? void 0 : lT.consoleErrorAsLog)) {
                const {
                  value: kT,
                  type: lT,
                  stackFrames: KT
                } = oc(MT, this.errorSerializer);
                this.api.pushLog(kT ? [TT.consoleErrorPrefix + kT] : MT, {
                  level: cT,
                  context: {
                    value: null !== kT && void 0 !== kT ? kT : "",
                    type: null !== lT && void 0 !== lT ? lT : "",
                    stackFrames: (null === KT || void 0 === KT ? void 0 : KT.length) ? bc(KT) : ""
                  }
                })
              } else this.api.pushLog(MT, {
                level: cT
              });
            else {
              const {
                value: kT,
                type: cT,
                stackFrames: lT
              } = oc(MT, this.errorSerializer);
              if (kT && !cT && !lT) return void this.api.pushError(new Error(TT.consoleErrorPrefix + kT));
              this.api.pushError(new Error(TT.consoleErrorPrefix + kT), {
                type: cT,
                stackFrames: lT
              })
            }
          } catch (OT) {
            this.logError(OT)
          }
        }))
      }
      destroy() {
        var TT;
        null === (TT = this.subscription) || void 0 === TT || TT.unsubscribe(), this.subscription = void 0
      }
    };
    ec.defaultDisabledLevels = [Dc.DEBUG, Dc.TRACE, Dc.LOG], ec.consoleErrorPrefix = "console.error: ";
    const Gc = [];
    var Vc = class extends cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = lc
      }
      initialize() {
        this.logDebug("Initializing"),
          function(TT) {
            const kT = window.onerror;
            window.onerror = function() {
              for (var cT = arguments.length, lT = new Array(cT), MT = 0; MT < cT; MT++) lT[MT] = arguments[MT];
              try {
                const {
                  value: kT,
                  type: cT,
                  stackFrames: MT
                } = Jc(lT), KT = lT[4];
                if (kT) {
                  const lT = {
                    type: cT,
                    stackFrames: MT
                  };
                  null != KT && (lT.originalError = KT), TT.pushError(new Error(kT), lT)
                }
              } finally {
                null === kT || void 0 === kT || kT.apply(window, lT)
              }
            }
          }(this.api),
          function(TT) {
            const kT = kT => {
              var cT;
              let lT, MT, KT = kT;
              if (KT.reason) KT = kT.reason;
              else if (null === (cT = kT.detail) || void 0 === cT ? void 0 : cT.reason) {
                var OT;
                KT = null === (OT = kT.detail) || void 0 === OT ? void 0 : OT.reason
              }
              let yT = [];
              eT(KT) ? (lT = `Non-Error promise rejection captured with value: ${String(KT)}`, MT = "UnhandledRejection") : [lT, MT, yT] = zc(KT), lT && TT.pushError(new Error(lT), {
                type: MT,
                stackFrames: yT
              })
            };
            window.addEventListener("unhandledrejection", kT), Gc.push(kT)
          }(this.api)
      }
    };
    const Ec = "unknown";
    var Zc = class extends cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = lc, this.waitingForActivation = !1, this.sendViewChangedEvent = TT => {
          var kT;
          if (this.waitingForActivation || document.prerendering) return;
          const cT = TT.view;
          if (cT && cT.name !== (null === (kT = this.notifiedView) || void 0 === kT ? void 0 : kT.name)) {
            var lT, MT, KT;
            const TT = null !== (lT = null === (MT = this.notifiedView) || void 0 === MT ? void 0 : MT.name) && void 0 !== lT ? lT : Ec;
            this.notifiedView = cT, this.api.pushEvent(ak, {
              fromView: TT,
              toView: null !== (KT = cT.name) && void 0 !== KT ? KT : Ec
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
    class uc {
      t;
      o = 0;
      i = [];
      l(TT) {
        if (TT.hadRecentInput) return;
        const kT = this.i[0],
          cT = this.i.at(-1);
        this.o && kT && cT && TT.startTime - cT.startTime < 1e3 && TT.startTime - kT.startTime < 5e3 ? (this.o += TT.value, this.i.push(TT)) : (this.o = TT.value, this.i = [TT]), this.t?.(TT)
      }
    }
    const Xc = () => {
        const TT = performance.getEntriesByType("navigation")[0];
        if (TT && TT.responseStart > 0 && TT.responseStart < performance.now()) return TT
      },
      dc = TT => {
        if ("loading" === document.readyState) return "loading";
        const kT = Xc();
        if (kT) {
          if (TT < kT.domInteractive) return "loading";
          if (0 === kT.domContentLoadedEventStart || TT < kT.domContentLoadedEventStart) return "dom-interactive";
          if (0 === kT.domComplete || TT < kT.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Lc = TT => {
        const kT = TT.nodeName;
        return 1 === TT.nodeType ? kT.toLowerCase() : kT.toUpperCase().replace(/^#/, "")
      },
      Rc = TT => {
        let kT = "";
        try {
          for (; 9 !== TT?.nodeType;) {
            const cT = TT,
              lT = cT.id ? "#" + cT.id : [Lc(cT), ...Array.from(cT.classList ?? []).sort()].join(".");
            if (kT.length + lT.length > 99) return kT || lT;
            if (kT = kT ? lT + ">" + kT : lT, cT.id) break;
            TT = cT.parentNode
          }
        } catch {}
        return kT
      },
      gc = new WeakMap;

    function Uc(TT, kT) {
      let cT = gc.get(kT);
      return cT || (cT = new WeakMap, gc.set(kT, cT)), cT.get(TT) || cT.set(TT, new kT), cT.get(TT)
    }
    let Yc = -1;
    const Bc = () => Yc,
      Wc = TT => {
        addEventListener("pageshow", (kT => {
          kT.persisted && (Yc = kT.timeStamp, TT(kT))
        }), !0)
      },
      nc = (TT, kT, cT, lT) => {
        let MT, KT;
        return OT => {
          kT.value >= 0 && (OT || lT) && (KT = kT.value - (MT ?? 0), (KT || void 0 === MT) && (MT = kT.value, kT.delta = KT, kT.rating = ((TT, kT) => TT > kT[1] ? "poor" : TT > kT[0] ? "needs-improvement" : "good")(kT.value, cT), TT(kT)))
        }
      },
      pc = TT => {
        requestAnimationFrame((() => requestAnimationFrame((() => TT()))))
      },
      ic = () => Xc()?.activationStart ?? 0;
    let qc = -1;
    const sc = new Set,
      Tl = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      kl = TT => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === TT.type)
            for (const TT of sc) TT();
          isFinite(qc) || (qc = "visibilitychange" === TT.type ? TT.timeStamp : 0, removeEventListener("prerenderingchange", kl, !0))
        }
      },
      cl = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (qc = 1 / 0), qc < 0) {
          const TT = ic(),
            kT = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((kT => "hidden" === kT.name && kT.startTime >= TT))?.startTime;
          qc = kT ?? Tl(), addEventListener("visibilitychange", kl, !0), addEventListener("prerenderingchange", kl, !0), Wc((() => {
            setTimeout((() => {
              qc = Tl()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return qc
          },
          onHidden(TT) {
            sc.add(TT)
          }
        }
      },
      ll = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0,
          OT = arguments.length > 6 ? arguments[6] : void 0;
        const yT = Xc(),
          fT = yT?.navigationId || 0;
        let xT = "navigate";
        return cT ? xT = cT : Bc() >= 0 ? xT = "back-forward-cache" : yT && (document.prerendering || ic() > 0 ? xT = "prerender" : document.wasDiscarded ? xT = "restore" : yT.type && (xT = yT.type.replace(/_/g, "-"))), {
          name: TT,
          value: kT,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: xT,
          navigationId: lT || fT,
          navigationInteractionId: MT,
          navigationURL: KT || yT?.name,
          navigationStartTime: OT || 0
        }
      },
      Ml = function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const lT = TT.filter((TT => PerformanceObserver.supportedEntryTypes.includes(TT)));
          if (lT.length > 0) {
            const TT = new PerformanceObserver((TT => {
              queueMicrotask((() => {
                const cT = TT.getEntries();
                lT.length > 1 && cT.sort(((TT, kT) => TT.startTime + TT.duration - (kT.startTime + kT.duration))), kT(cT)
              }))
            }));
            for (const kT of lT) TT.observe({
              type: kT,
              buffered: !0,
              ...cT
            });
            return TT
          }
        } catch {}
      },
      Kl = TT => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && TT && TT.reportSoftNavs,
      Ol = (TT, kT) => {
        if (TT.set(kT.navigationId, kT), TT.size > 2) {
          const kT = TT.keys().next().value;
          void 0 !== kT && TT.delete(kT)
        }
      },
      yl = TT => {
        let kT = !1;
        return () => {
          kT || (TT(), kT = !0)
        }
      };
    class fl {
      u
    }
    const xl = TT => {
        document.prerendering ? addEventListener("prerenderingchange", TT, !0) : TT()
      },
      Il = [1800, 3e3],
      Al = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cT = Kl(kT);
        xl((() => {
          const lT = Uc(kT, fl),
            MT = cl();
          let KT, OT = ll("FCP");
          const yT = Ml(["paint"], (TT => {
            for (const kT of TT) "first-contentful-paint" === kT.name && (yT.disconnect(), kT.startTime < MT.firstHiddenTime && (OT.value = Math.max(kT.startTime - ic(), 0), OT.entries.push(kT), OT.navigationId = kT.navigationId || OT.navigationId, KT(!0)))
          }));
          yT && (KT = nc(TT, OT, Il, kT.reportAllChanges), Wc((cT => {
            OT = ll("FCP", -1, "back-forward-cache", OT.navigationId, OT.navigationInteractionId, OT.navigationURL, Bc()), KT = nc(TT, OT, Il, kT.reportAllChanges), pc((() => {
              OT.value = performance.now() - cT.timeStamp, KT(!0)
            }))
          }))), cT && Ml(["soft-navigation"], (cT => {
            cT.forEach((cT => {
              lT.u && cT.navigationId && Ol(lT.u, cT);
              const MT = Math.max((cT.presentationTime || cT.paintTime || 0) - cT.startTime, 0);
              OT = ll("FCP", MT, "soft-navigation", cT.navigationId, cT.interactionId, cT.name, cT.startTime), KT = nc(TT, OT, Il, kT.reportAllChanges), KT(!0)
            }))
          }), kT)
        }))
      },
      Cl = [.1, .25],
      jl = TT => TT.find((TT => 1 === TT.node?.nodeType)) || TT[0];
    let vl = 0,
      tl = 1 / 0,
      hl = 0;
    const Nl = TT => {
      for (const kT of TT) kT.interactionId && (tl = Math.min(tl, kT.interactionId), hl = Math.max(hl, kT.interactionId), vl = hl ? (hl - tl) / 7 + 1 : 0)
    };
    let Ql;
    const Sl = () => Ql ? vl : performance.interactionCount ?? 0;
    class Dl {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Sl() - this.h
      }
      D() {
        this.h = Sl(), this.v.length = 0, this.p.clear()
      }
      S(TT) {
        const kT = this.T(),
          cT = Math.min(this.v.length - 1, Math.floor(kT / 50));
        return !kT || -1 !== cT || "soft-navigation" !== TT && "back-forward-cache" !== TT ? this.v[cT] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(TT) {
        if (this.m?.(TT), !TT.interactionId) return;
        const kT = this.v.at(-1);
        let cT = this.p.get(TT.interactionId);
        if (cT || this.v.length < 10 || TT.duration > kT.k) {
          if (cT ? TT.duration > cT.k ? (cT.entries = [TT], cT.k = TT.duration) : TT.duration === cT.k && TT.startTime === cT.entries[0].startTime && cT.entries.push(TT) : (cT = {
              id: TT.interactionId,
              entries: [TT],
              k: TT.duration
            }, this.p.set(cT.id, cT), this.v.push(cT)), this.v.sort(((TT, kT) => kT.k - TT.k)), this.v.length > 10) {
            const TT = this.v.splice(10);
            for (const kT of TT) this.p.delete(kT.id)
          }
          this.M?.(cT)
        }
      }
    }
    const al = TT => {
        const kT = "requestIdleCallback" in globalThis ? 1e3 : 0,
          cT = globalThis.requestIdleCallback || setTimeout,
          lT = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) TT();
        else {
          const MT = yl(TT);
          let KT = -1;
          const OT = () => {
            lT(KT), MT()
          };
          addEventListener("visibilitychange", OT, {
            once: !0,
            capture: !0
          }), KT = cT((() => {
            removeEventListener("visibilitychange", OT, {
              capture: !0
            }), MT()
          }), {
            timeout: kT
          })
        }
      },
      Fl = [200, 500],
      rl = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cT = Uc(kT = Object.assign({}, kT), Dl);
        let lT = [],
          MT = [],
          KT = 0;
        const OT = new WeakMap,
          yT = new WeakMap;
        let fT = !1;
        const xT = () => {
            fT || (fT = !0, al(IT))
          },
          IT = () => {
            const TT = new Set(cT.v.map((TT => OT.get(TT.entries[0])))),
              kT = MT.length - 10;
            MT = MT.filter(((cT, lT) => lT >= kT || TT.has(cT)));
            const yT = new Set;
            for (const cT of MT) {
              const TT = AT(cT.startTime, cT.processingEnd);
              for (const kT of TT) yT.add(kT)
            }
            const xT = lT.length - 10;
            lT = lT.filter(((TT, kT) => yT.has(TT) || kT >= xT && TT.startTime > KT)), fT = !1
          };
        cT.m = TT => {
          const cT = TT.startTime + TT.duration;
          let lT;
          KT = Math.max(KT, TT.processingEnd);
          for (let KT = MT.length - 1; KT >= 0; KT--) {
            const OT = MT[KT];
            if (Math.abs(cT - OT.renderTime) <= 8) {
              lT = OT, lT.startTime = Math.min(TT.startTime, lT.startTime), lT.processingStart = Math.min(TT.processingStart, lT.processingStart), lT.processingEnd = Math.max(TT.processingEnd, lT.processingEnd), kT.includeProcessedEventEntries && lT.entries.push(TT);
              break
            }
          }
          lT || (lT = {
            startTime: TT.startTime,
            processingStart: TT.processingStart,
            processingEnd: TT.processingEnd,
            renderTime: cT,
            entries: kT.includeProcessedEventEntries ? [TT] : []
          }, MT.push(lT)), TT.interactionId && OT.set(TT, lT), xT()
        }, cT.M = TT => {
          if (!yT.get(TT)) {
            const cT = TT.entries.find((TT => TT.target))?.target;
            if (cT) {
              const lT = kT.generateTarget?.(cT) ?? Rc(cT);
              yT.set(TT, lT)
            } else {
              const kT = TT.entries.find((TT => TT.targetSelector))?.targetSelector;
              kT && yT.set(TT, kT)
            }
          }
        };
        const AT = (TT, kT) => {
          const cT = [];
          for (const MT of lT)
            if (!(MT.startTime + MT.duration < TT)) {
              if (MT.startTime > kT) break;
              cT.push(MT)
            } return cT
        };
        Ml(["long-animation-frame"], (TT => {
            lT = lT.concat(TT), xT()
          }), kT),
          function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const cT = cl();
            xl((() => {
              "interactionCount" in performance || Ql || (Ql = Ml(["event"], Nl, {
                durationThreshold: 0
              }));
              let lT, MT = ll("INP");
              const KT = Uc(kT, Dl),
                OT = (cT, OT, yT, fT, xT) => {
                  KT.D(), MT = ll("INP", -1, cT, OT, yT, fT, xT), lT = nc(TT, MT, Fl, kT.reportAllChanges)
                },
                yT = () => {
                  const TT = KT.S(MT.navigationType);
                  TT && TT.k !== MT.value && (MT.value = TT.k, MT.entries = TT.entries, lT())
                },
                fT = TT => {
                  yT(), lT(!0), OT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime)
                },
                xT = function(TT) {
                  let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  al((() => {
                    for (const kT of TT) "soft-navigation" !== kT.entryType ? KT.l(kT) : fT(kT);
                    yT(), kT && lT(!0)
                  }))
                },
                IT = ["event", "first-input"];
              Kl(kT) && IT.push("soft-navigation");
              const AT = Ml(IT, xT, {
                ...kT,
                durationThreshold: kT.durationThreshold ?? 40
              });
              lT = nc(TT, MT, Fl, kT.reportAllChanges), AT && (cT.onHidden((() => {
                xT(AT.takeRecords(), !0)
              })), Wc((() => {
                OT("back-forward-cache", MT.navigationId, MT.navigationInteractionId, MT.navigationURL, Bc())
              })))
            }))
          }((kT => {
            TT((TT => {
              if (0 === TT.entries.length) {
                const kT = TT.navigationStartTime || 0,
                  cT = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: TT.value,
                    loadState: dc(kT)
                  };
                return Object.assign(TT, {
                  attribution: cT
                })
              }
              const kT = TT.entries[0],
                lT = OT.get(kT),
                MT = Math.max(lT.processingStart, kT.startTime),
                KT = Math.max(kT.startTime + kT.duration, MT),
                fT = Math.min(lT.processingEnd, KT),
                xT = lT.entries.sort(((TT, kT) => TT.processingStart - kT.processingStart)),
                IT = AT(kT.startTime, fT),
                CT = cT.p.get(kT.interactionId),
                jT = {
                  interactionTarget: yT.get(CT),
                  interactionType: kT.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: kT.startTime,
                  nextPaintTime: KT,
                  processedEventEntries: xT,
                  longAnimationFrameEntries: IT,
                  inputDelay: MT - kT.startTime,
                  processingDuration: fT - MT,
                  presentationDelay: KT - fT,
                  loadState: dc(kT.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (TT => {
                const kT = TT.interactionTime,
                  cT = TT.nextPaintTime;
                if (!TT.longAnimationFrameEntries?.length || !kT || !cT) return;
                const lT = TT.inputDelay,
                  MT = TT.processingDuration;
                let KT, OT, yT = 0,
                  fT = 0,
                  xT = 0,
                  IT = 0;
                for (const jT of TT.longAnimationFrameEntries) {
                  fT = fT + jT.startTime + jT.duration - jT.styleAndLayoutStart;
                  for (const TT of jT.scripts) {
                    const cT = TT.startTime + TT.duration;
                    if (cT < kT) continue;
                    const xT = cT - Math.max(kT, TT.startTime),
                      AT = TT.duration ? xT / TT.duration * TT.forcedStyleAndLayoutDuration : 0;
                    yT += xT - AT, fT += AT, xT > IT && (OT = TT.startTime < kT + lT ? "input-delay" : TT.startTime >= kT + lT + MT ? "presentation-delay" : "processing-duration", KT = TT, IT = xT)
                  }
                }
                const AT = TT.longAnimationFrameEntries.at(-1),
                  CT = AT ? AT.startTime + AT.duration : 0;
                CT >= kT + lT + MT && (xT = cT - CT), KT && OT && (TT.longestScript = {
                  entry: KT,
                  subpart: OT,
                  intersectingDuration: IT
                }), TT.totalScriptDuration = yT, TT.totalStyleAndLayoutDuration = fT, TT.totalPaintDuration = xT, TT.totalUnattributedDuration = cT - kT - yT - fT - xT
              })(jT), Object.assign(TT, {
                attribution: jT
              })
            })(kT))
          }), kT)
      };
    class Pl {
      m;
      u;
      l(TT) {
        this.m?.(TT)
      }
    }
    const wl = [2500, 4e3];
    let ml = 50;
    const bl = [];
    Ml(["resource"], (TT => {
      for (const kT of TT) bl.push(kT), bl.length > ml && bl.shift()
    }));
    const zl = [800, 1800],
      Jl = TT => {
        document.prerendering ? xl((() => Jl(TT))) : "complete" !== document.readyState ? addEventListener("load", (() => Jl(TT)), !0) : setTimeout(TT)
      },
      ol = "load_state",
      Hl = "time_to_first_byte";
    var el = class {
        constructor(TT, kT) {
          this.corePushMeasurement = TT, this.webVitalConfig = kT
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var TT;
          ! function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const cT = Uc(kT = Object.assign({}, kT), uc),
              lT = new WeakMap;
            cT.t = TT => {
                if (TT?.sources?.length) {
                  const cT = jl(TT.sources),
                    MT = cT?.node;
                  if (MT) {
                    const TT = kT.generateTarget?.(MT) ?? Rc(MT);
                    lT.set(cT, TT)
                  }
                }
              },
              function(TT) {
                let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const cT = cl();
                Al(yl((() => {
                  let lT, MT = ll("CLS", 0);
                  const KT = Uc(kT, uc),
                    OT = (cT, OT, yT, fT, xT) => {
                      MT = ll("CLS", 0, cT, OT, yT, fT, xT), KT.o = 0, lT = nc(TT, MT, Cl, kT.reportAllChanges)
                    },
                    yT = function() {
                      let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      KT.o > MT.value && (MT.value = KT.o, MT.entries = KT.i), lT(TT)
                    },
                    fT = TT => {
                      yT(!0), OT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime)
                    },
                    xT = TT => {
                      for (const kT of TT) "soft-navigation" !== kT.entryType ? KT.l(kT) : fT(kT);
                      yT()
                    },
                    IT = ["layout-shift"];
                  Kl(kT) && IT.push("soft-navigation");
                  const AT = Ml(IT, xT);
                  AT && (lT = nc(TT, MT, Cl, kT.reportAllChanges), cT.onHidden((() => {
                    xT(AT.takeRecords()), lT(!0)
                  })), Wc((() => {
                    OT("back-forward-cache", MT.navigationId, MT.navigationInteractionId, MT.navigationURL, Bc()), pc(lT)
                  })), setTimeout(lT))
                })))
              }((kT => {
                TT((TT => {
                  let kT = {};
                  if (TT.entries.length) {
                    const cT = TT.entries.reduce(((TT, kT) => TT.value > kT.value ? TT : kT));
                    if (cT?.sources?.length) {
                      const TT = jl(cT.sources);
                      TT && (kT = {
                        largestShiftTarget: lT.get(TT),
                        largestShiftTime: cT.startTime,
                        largestShiftValue: cT.value,
                        largestShiftSource: TT,
                        largestShiftEntry: cT,
                        loadState: dc(cT.startTime)
                      })
                    }
                  }
                  return Object.assign(TT, {
                    attribution: kT
                  })
                })(kT))
              }), kT)
          }((TT => {
            const {
              loadState: kT,
              largestShiftValue: cT,
              largestShiftTime: lT,
              largestShiftTarget: MT
            } = TT.attribution, KT = this.buildInitialValues(TT);
            this.addIfPresent(KT, "largest_shift_value", cT), this.addIfPresent(KT, "largest_shift_time", lT);
            const OT = this.buildInitialContext(TT);
            this.addIfPresent(OT, ol, kT), this.addIfPresent(OT, "largest_shift_target", MT), this.pushMeasurement(KT, OT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureFCP() {
          var TT;
          ! function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const cT = Uc(kT = Object.assign({}, kT), fl);
            Kl(kT) && (cT.u = new Map), Al((kT => {
              TT((TT => {
                let kT = {
                  timeToFirstByte: 0,
                  firstByteToFCP: TT.value,
                  loadState: dc(Bc())
                };
                if ("soft-navigation" !== TT.navigationType) {
                  if (TT.entries.length) {
                    const cT = Xc(),
                      lT = TT.entries.at(-1);
                    if (cT) {
                      const MT = cT.responseStart,
                        KT = cT.activationStart || 0,
                        OT = Math.max(0, MT - KT);
                      kT = {
                        timeToFirstByte: OT,
                        firstByteToFCP: TT.value - OT,
                        loadState: dc(TT.entries[0].startTime),
                        navigationEntry: cT,
                        fcpEntry: lT
                      }
                    }
                  }
                } else {
                  const lT = cT.u?.get(TT.navigationId);
                  lT && (kT = {
                    timeToFirstByte: 0,
                    firstByteToFCP: TT.value,
                    loadState: "complete",
                    navigationEntry: lT
                  })
                }
                return Object.assign(TT, {
                  attribution: kT
                })
              })(kT))
            }), kT)
          }((TT => {
            const {
              firstByteToFCP: kT,
              timeToFirstByte: cT,
              loadState: lT
            } = TT.attribution, MT = this.buildInitialValues(TT);
            this.addIfPresent(MT, "first_byte_to_fcp", kT), this.addIfPresent(MT, Hl, cT);
            const KT = this.buildInitialContext(TT);
            this.addIfPresent(KT, ol, lT), this.pushMeasurement(MT, KT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureINP() {
          var TT;
          rl((TT => {
            var kT;
            const {
              interactionTime: cT,
              presentationDelay: lT,
              inputDelay: MT,
              processingDuration: KT,
              nextPaintTime: OT,
              loadState: yT,
              interactionTarget: fT,
              interactionType: xT,
              totalScriptDuration: IT,
              totalStyleAndLayoutDuration: AT,
              totalPaintDuration: CT,
              totalUnattributedDuration: jT,
              longestScript: vT
            } = TT.attribution, tT = this.buildInitialValues(TT);
            this.addIfPresent(tT, "interaction_time", cT), this.addIfPresent(tT, "presentation_delay", lT), this.addIfPresent(tT, "input_delay", MT), this.addIfPresent(tT, "processing_duration", KT), this.addIfPresent(tT, "next_paint_time", OT), this.addNumberIfDefined(tT, "total_script_duration", IT), this.addNumberIfDefined(tT, "total_style_and_layout_duration", AT), this.addNumberIfDefined(tT, "total_paint_duration", CT), this.addNumberIfDefined(tT, "total_unattributed_duration", jT), this.addNumberIfDefined(tT, "longest_script_intersecting_duration", null === vT || void 0 === vT ? void 0 : vT.intersectingDuration);
            const hT = this.buildInitialContext(TT);
            this.addIfPresent(hT, ol, yT), this.addIfPresent(hT, "interaction_target", fT), this.addIfPresent(hT, "interaction_type", xT), this.addIfPresent(hT, "longest_script_subpart", null === vT || void 0 === vT ? void 0 : vT.subpart), this.addIfPresent(hT, "longest_script_invoker_type", null === vT || void 0 === vT ? void 0 : vT.entry.invokerType), (null === (kT = this.webVitalConfig) || void 0 === kT ? void 0 : kT.trackAttributionSources) && (this.addIfPresent(hT, "longest_script_invoker", null === vT || void 0 === vT ? void 0 : vT.entry.invoker), this.addIfPresent(hT, "longest_script_source_url", null === vT || void 0 === vT ? void 0 : vT.entry.sourceURL), this.addIfPresent(hT, "longest_script_source_function_name", null === vT || void 0 === vT ? void 0 : vT.entry.sourceFunctionName), this.addIfPresent(hT, "longest_script_source_char_position", void 0 !== (null === vT || void 0 === vT ? void 0 : vT.entry.sourceCharPosition) ? String(vT.entry.sourceCharPosition) : void 0)), this.pushMeasurement(tT, hT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureLCP() {
          var TT;
          ! function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (kT = Object.assign({}, kT)).resourceBufferSize && (ml = kT.resourceBufferSize);
            const cT = Uc(kT, Pl),
              lT = new WeakMap;
            Kl(kT) && (cT.u = new Map), cT.m = TT => {
                const cT = TT.element;
                if (cT) {
                  const MT = kT.generateTarget?.(cT) ?? Rc(cT);
                  lT.set(TT, MT)
                } else TT.id && lT.set(TT, `#${TT.id}`)
              },
              function(TT) {
                let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  cT = !1;
                const lT = Kl(kT);
                xl((() => {
                  let MT, KT = cl(),
                    OT = ll("LCP");
                  const yT = Uc(kT, Pl),
                    fT = (lT, yT, fT, xT, IT) => {
                      OT = ll("LCP", -1, lT, yT, fT, xT, IT), MT = nc(TT, OT, wl, kT.reportAllChanges), cT = !1, "soft-navigation" === lT && (KT = cl(!0))
                    },
                    xT = TT => {
                      yT.u && TT.navigationId && Ol(yT.u, TT), cT || MT(!0), fT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime);
                      const kT = TT.getLargestInteractionContentfulPaint?.();
                      kT && IT([kT])
                    },
                    IT = TT => {
                      kT.reportAllChanges || lT || (TT = TT.slice(-1));
                      for (const kT of TT) {
                        if (!kT) continue;
                        if ("soft-navigation" === kT.entryType) {
                          xT(kT);
                          continue
                        }
                        let TT = 0,
                          cT = [],
                          lT = kT.startTime;
                        if ("largest-contentful-paint" === kT.entryType) TT = Math.max(kT.startTime - ic(), 0), yT.l(kT), cT = [kT];
                        else if ("interaction-contentful-paint" === kT.entryType) {
                          const MT = kT;
                          if (!OT.navigationId) continue;
                          if ("interactionId" in MT && MT.interactionId != OT.navigationInteractionId) continue;
                          lT = MT.largestContentfulPaint?.renderTime || 0, TT = Math.max(lT - kT.startTime, 0), MT.largestContentfulPaint && (yT.l(MT.largestContentfulPaint), cT = [MT.largestContentfulPaint])
                        }
                        lT < KT.firstHiddenTime && (OT.value = TT, OT.entries = cT, MT())
                      }
                    },
                    AT = ["largest-contentful-paint"];
                  lT && AT.push("interaction-contentful-paint", "soft-navigation");
                  const CT = Ml(AT, IT);
                  if (CT) {
                    MT = nc(TT, OT, wl, kT.reportAllChanges);
                    const KT = ["keydown", "click", "visibilitychange"],
                      yT = TT => {
                        if (TT.isTrusted && !cT) {
                          const TT = OT.id;
                          al((() => {
                            if (!cT) {
                              if (!lT) {
                                CT.disconnect();
                                for (const TT of KT) removeEventListener(TT, yT, {
                                  capture: !0
                                })
                              }
                              TT === OT.id && (cT = !0, MT(!0))
                            }
                          }))
                        }
                      };
                    for (const TT of KT) addEventListener(TT, yT, {
                      capture: !0
                    });
                    Wc((lT => {
                      fT("back-forward-cache", OT.navigationId, OT.navigationInteractionId, OT.navigationURL, Bc()), MT = nc(TT, OT, wl, kT.reportAllChanges), pc((() => {
                        OT.value = performance.now() - lT.timeStamp, cT = !0, MT(!0)
                      }))
                    }))
                  }
                }))
              }((kT => {
                TT((TT => {
                  let kT = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: TT.value
                  };
                  if (TT.entries.length) {
                    const MT = TT.entries.at(-1),
                      KT = TT => TT.name === MT.url && (TT.requestStart || TT.startTime) <= MT.startTime,
                      OT = MT.url && (bl.findLast(KT) || performance.getEntriesByType("resource").findLast(KT));
                    let yT;
                    kT.target = lT.get(MT), kT.lcpEntry = MT, MT.url && (kT.url = MT.url), OT && (kT.lcpResourceEntry = OT);
                    let fT = 0,
                      xT = 0;
                    if ("soft-navigation" !== TT.navigationType ? (yT = Xc(), fT = yT?.activationStart ?? 0, xT = yT?.responseStart ?? 0) : (fT = TT.navigationStartTime || 0, yT = cT.u?.get(TT.navigationId)), yT) {
                      const cT = Math.max(0, xT - fT),
                        lT = Math.max(cT, OT ? (OT.requestStart || OT.startTime) - fT : 0),
                        MT = Math.min(TT.value, Math.max(lT, OT ? OT.responseEnd - fT : 0));
                      kT = {
                        ...kT,
                        timeToFirstByte: cT,
                        resourceLoadDelay: lT - cT,
                        resourceLoadDuration: MT - lT,
                        elementRenderDelay: TT.value - MT,
                        navigationEntry: yT
                      }
                    }
                  }
                  return Object.assign(TT, {
                    attribution: kT
                  })
                })(kT))
              }), kT)
          }((TT => {
            var kT;
            const {
              elementRenderDelay: cT,
              resourceLoadDelay: lT,
              resourceLoadDuration: MT,
              timeToFirstByte: KT,
              target: OT,
              url: yT,
              lcpResourceEntry: fT
            } = TT.attribution, xT = this.buildInitialValues(TT);
            this.addIfPresent(xT, "element_render_delay", cT), this.addIfPresent(xT, "resource_load_delay", lT), this.addIfPresent(xT, "resource_load_duration", MT), this.addIfPresent(xT, Hl, KT);
            const IT = this.buildInitialContext(TT);
            this.addIfPresent(IT, "element", OT), (null === (kT = this.webVitalConfig) || void 0 === kT ? void 0 : kT.trackAttributionSources) && (this.addIfPresent(IT, "resource_url", yT), this.addIfPresent(IT, "resource_delivery_type", null === fT || void 0 === fT ? void 0 : fT.deliveryType), this.addIfPresent(IT, "resource_initiator_type", null === fT || void 0 === fT ? void 0 : fT.initiatorType)), this.pushMeasurement(xT, IT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureTTFB() {
          var TT;
          ! function(TT) {
            ! function(TT) {
              let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const cT = Kl(kT);
              let lT = ll("TTFB"),
                MT = nc(TT, lT, zl, kT.reportAllChanges);
              Jl((() => {
                const KT = Xc();
                if (KT) {
                  const OT = KT.responseStart;
                  lT.value = Math.max(OT - ic(), 0), lT.entries = [KT], MT(!0), Wc((() => {
                    lT = ll("TTFB", 0, "back-forward-cache", lT.navigationId, lT.navigationInteractionId, lT.navigationURL, Bc()), MT = nc(TT, lT, zl, kT.reportAllChanges), MT(!0)
                  })), cT && Ml(["soft-navigation"], (cT => {
                    cT.forEach((cT => {
                      cT.navigationId && (lT = ll("TTFB", 0, "soft-navigation", cT.navigationId, cT.interactionId, cT.name, cT.startTime), lT.entries = [cT], MT = nc(TT, lT, zl, kT.reportAllChanges), MT(!0))
                    }))
                  }), kT)
                }
              }))
            }((kT => {
              TT((TT => {
                const kT = TT.entries[0];
                let cT = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: kT
                };
                if (TT.entries.length && kT instanceof PerformanceNavigationTiming) {
                  const lT = kT.activationStart || 0,
                    MT = Math.max((kT.workerStart || kT.fetchStart || 0) - lT, 0),
                    KT = Math.max(kT.domainLookupStart - lT, 0),
                    OT = Math.max(kT.connectStart - lT, 0),
                    yT = Math.max(kT.connectEnd - lT, 0);
                  cT = {
                    waitingDuration: MT,
                    cacheDuration: KT - MT,
                    dnsDuration: OT - KT,
                    connectionDuration: yT - OT,
                    requestDuration: TT.value - yT,
                    navigationEntry: kT
                  }
                }
                return Object.assign(TT, {
                  attribution: cT
                })
              })(kT))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((TT => {
            const {
              dnsDuration: kT,
              connectionDuration: cT,
              requestDuration: lT,
              waitingDuration: MT,
              cacheDuration: KT
            } = TT.attribution, OT = this.buildInitialValues(TT);
            this.addIfPresent(OT, "dns_duration", kT), this.addIfPresent(OT, "connection_duration", cT), this.addIfPresent(OT, "request_duration", lT), this.addIfPresent(OT, "waiting_duration", MT), this.addIfPresent(OT, "cache_duration", KT);
            const yT = this.buildInitialContext(TT);
            this.pushMeasurement(OT, yT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        buildInitialValues(TT) {
          return {
            [TT.name.toLowerCase()]: TT.value,
            delta: TT.delta
          }
        }
        buildInitialContext(TT) {
          var kT;
          const cT = null !== (kT = Tk("com.grafana.faro.lastNavigationId", iT)) && void 0 !== kT ? kT : Ec;
          return {
            id: TT.id,
            rating: TT.rating,
            navigation_type: TT.navigationType,
            navigation_entry_id: cT
          }
        }
        pushMeasurement(TT, kT) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: TT
          }, {
            context: kT
          })
        }
        addIfPresent(TT, kT, cT) {
          cT && (TT[kT] = cT)
        }
        addNumberIfDefined(TT, kT, cT) {
          void 0 !== cT && (TT[kT] = cT)
        }
      },
      Gl = class extends cc {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = lc
        }
        initialize() {
          this.logDebug("Initializing"), new el(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Vl = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function El() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const kT of TT)
        if ("traceparent" === kT.name) {
          if (!Vl.test(kT.description)) continue;
          const [, TT, cT] = kT.description.split("-");
          if (null != TT && null != cT) return {
            traceId: TT,
            spanId: cT
          };
          break
        }
    }

    function Zl(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: cT,
        monoNow: lT
      } = kT;
      return Math.min(cT, cT - (lT - TT))
    }

    function ul(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [cT, lT] of Object.entries(kT)) {
        const kT = TT[cT];
        return null != kT && (JT(lT) ? lT.includes(kT) : kT === lT)
      }
      return !0
    }

    function Xl(TT) {
      const {
        connectEnd: kT,
        connectStart: cT,
        decodedBodySize: lT,
        domainLookupEnd: MT,
        domainLookupStart: KT,
        duration: OT,
        encodedBodySize: yT,
        fetchStart: fT,
        initiatorType: xT,
        name: IT,
        nextHopProtocol: AT,
        redirectEnd: CT,
        redirectStart: jT,
        renderBlockingStatus: vT,
        requestStart: tT,
        responseEnd: hT,
        responseStart: NT,
        responseStatus: QT,
        secureConnectionStart: ST,
        transferSize: DT,
        workerStart: aT
      } = TT;
      return {
        name: IT,
        httpHost: Ll(IT),
        duration: Rl(OT),
        tcpHandshakeTime: Rl(kT - cT),
        dnsLookupTime: Rl(MT - KT),
        tlsNegotiationTime: Rl(kT - ST),
        responseStatus: Rl(QT),
        redirectTime: Rl(CT - jT),
        requestTime: Rl(NT - tT),
        responseTime: Rl(hT - NT),
        fetchTime: Rl(hT - fT),
        serviceWorkerTime: Rl(aT > 0 ? fT - aT : 0),
        decodedBodySize: Rl(lT),
        encodedBodySize: Rl(yT),
        cacheHitStatus: function() {
          let TT = "fullLoad";
          0 === DT ? lT > 0 && (TT = "cache") : null != QT ? 304 === QT && (TT = "conditionalFetch") : yT > 0 && DT < yT && (TT = "conditionalFetch");
          return TT
        }(),
        renderBlockingStatus: Rl(vT),
        protocol: AT,
        initiatorType: xT,
        visibilityState: document.visibilityState,
        ttfb: Rl(NT - tT),
        transferSize: Rl(DT)
      }
    }

    function dl(TT) {
      const {
        activationStart: kT,
        domComplete: cT,
        domContentLoadedEventEnd: lT,
        domContentLoadedEventStart: MT,
        domInteractive: KT,
        fetchStart: OT,
        loadEventEnd: yT,
        loadEventStart: fT,
        responseStart: xT,
        type: IT
      } = TT, AT = function() {
        var TT;
        return null != (null === (TT = performance.timing) || void 0 === TT ? void 0 : TT.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Ik(Ik({}, Xl(TT)), {}, {
        pageLoadTime: Rl(cT - OT),
        documentParsingTime: Rl(AT ? KT - AT : null),
        domProcessingTime: Rl(cT - KT),
        domContentLoadHandlerTime: Rl(lT - MT),
        onLoadTime: Rl(yT - fT),
        ttfb: Rl(Math.max(xT - (null !== kT && void 0 !== kT ? kT : 0), 0)),
        type: IT
      })
    }

    function Ll(TT) {
      try {
        return new URL(TT).host || Ec
      } catch (kT) {
        return Ec
      }
    }

    function Rl(TT) {
      return null == TT ? Ec : "number" === typeof TT ? Math.round(TT > 0 ? TT : 0).toString() : TT.toString()
    }
    const gl = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function Ul(TT, kT, cT, lT, MT, KT, OT) {
      try {
        var yT = TT[KT](OT),
          fT = yT.value
      } catch (TT) {
        return void cT(TT)
      }
      yT.done ? kT(fT) : Promise.resolve(fT).then(lT, MT)
    }

    function Yl(TT) {
      return function() {
        var kT = this,
          cT = arguments;
        return new Promise((function(lT, MT) {
          var KT = TT.apply(kT, cT);

          function OT(TT) {
            Ul(KT, lT, MT, OT, yT, "next", TT)
          }

          function yT(TT) {
            Ul(KT, lT, MT, OT, yT, "throw", TT)
          }
          OT(void 0)
        }))
      }
    }
    const Bl = new Sc;
    var Wl = class extends cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = lc
      }
      initialize() {
        var TT = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let kT = !1;
        const cT = () => {
          ! function(TT) {
            if ("complete" === document.readyState) TT();
            else {
              const kT = () => {
                "complete" === document.readyState && (TT(), document.removeEventListener("readystatechange", kT))
              };
              document.addEventListener("readystatechange", kT)
            }
          }(Yl((function*() {
            if (kT) return;
            const cT = TT.api.pushEvent,
              {
                faroNavigationId: lT
              } = yield function(TT) {
                let kT;
                const cT = new Promise((TT => {
                  kT = TT
                }));
                return new PerformanceObserver((cT => {
                  var lT;
                  const [MT] = cT.getEntries();
                  if (null == MT || nT(MT.name)) return;
                  const KT = MT.toJSON();
                  let OT = El(null === KT || void 0 === KT ? void 0 : KT.serverTiming);
                  const yT = null !== (lT = Tk("com.grafana.faro.lastNavigationId", iT)) && void 0 !== lT ? lT : Ec,
                    fT = Ik(Ik({}, dl(KT)), {}, {
                      faroNavigationId: Nk(),
                      faroPreviousNavigationId: yT
                    });
                  kk("com.grafana.faro.lastNavigationId", fT.faroNavigationId, iT), TT("faro.performance.navigation", fT, void 0, {
                    spanContext: OT,
                    timestampOverwriteMs: Zl(KT.startTime)
                  }), kT(fT)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), cT
              }(cT);
            kT || null == lT || function(TT, kT, cT, lT) {
              const MT = lT.trackResources;
              new PerformanceObserver((lT => {
                const KT = lT.getEntries(),
                  OT = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const yT of KT) {
                  if (nT(yT.name)) continue;
                  null === cT || void 0 === cT || cT.notify({
                    type: "resource"
                  });
                  const lT = yT.toJSON();
                  let KT = El(null === lT || void 0 === lT ? void 0 : lT.serverTiming);
                  (null == MT && ul(lT, gl) || MT) && kT("faro.performance.resource", Ik(Ik({}, Xl(lT)), {}, {
                    faroNavigationId: TT,
                    faroResourceId: Nk()
                  }), void 0, {
                    spanContext: KT,
                    timestampOverwriteMs: Zl(lT.startTime, OT)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(lT, cT, Bl, TT.config)
          })))
        };
        this.cancelInitialization = () => {
          kT = !0, document.removeEventListener("prerenderingchange", cT)
        }, document.prerendering ? document.addEventListener("prerenderingchange", cT, {
          once: !0
        }) : cT()
      }
      destroy() {
        var TT;
        null === (TT = this.cancelInitialization) || void 0 === TT || TT.call(this), this.cancelInitialization = void 0
      }
    };
    const nl = "data-faro-user-action-name",
      pl = nl.replace(/-name$/, "-timeout"),
      il = 1e3;

    function ql(TT) {
      return `data-${(TT.startsWith("data-")?TT.slice(5):TT).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function sl(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uk;
      if (void 0 === TT) return kT;
      let lT = NaN;
      try {
        lT = "string" === typeof TT && "" === TT.trim() ? NaN : Number(TT)
      } catch (MT) {}
      return !Number.isFinite(lT) || lT <= 0 ? (cT(`initialActivityTimeout must be a finite number greater than zero; using ${kT} ms`), kT) : lT > 1e3 ? (cT(`initialActivityTimeout cannot exceed ${il} ms; clamping to the maximum`), il) : lT
    }

    function TM(TT, kT, cT) {
      return void 0 !== TT && window.clearTimeout(TT), window.setTimeout((() => {
        kT()
      }), cT)
    }

    function kM(TT) {
      return TT.type === Qc
    }
    let cM, lM;

    function MM() {
      return cM || (cM = new Sc), lM || (lM = new MutationObserver(((TT, kT) => {
        cM.notify({
          type: "dom-mutation"
        })
      })), lM.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), cM
    }
    const KM = "fetch",
      OM = "xhr";
    let yM, fM, xM, IM, AM = !1;

    function CM() {
      if (yM) return yM;

      function TT(TT) {
        yM.notify({
          type: Nc,
          request: TT
        })
      }

      function kT(TT) {
        yM.notify({
          type: Qc,
          request: TT
        })
      }
      return yM = new Sc, AM || (! function(TT) {
        let {
          onRequestEnd: kT,
          onRequestStart: cT
        } = TT;
        xM || (xM = window.fetch);
        window.fetch = function() {
          var TT, lT;
          const MT = null !== (TT = pT(arguments[0])) && void 0 !== TT ? TT : "",
            KT = nT(MT),
            OT = (null !== (lT = arguments[1]) && void 0 !== lT ? lT : {}).method,
            yT = Nk();
          return KT || cT({
            url: MT,
            method: OT,
            requestId: yT,
            apiType: KM
          }), xM.apply(this, arguments).then((TT => (KT || kT({
            url: MT,
            method: OT,
            requestId: yT,
            apiType: KM
          }), TT))).catch((TT => {
            throw KT || kT({
              url: MT,
              method: OT,
              requestId: yT,
              apiType: KM
            }), TT
          }))
        }
      }({
        onRequestStart: TT,
        onRequestEnd: kT
      }), function(TT) {
        let {
          onRequestStart: kT,
          onRequestEnd: cT
        } = TT;
        fM || (fM = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const TT = arguments[1],
            lT = nT(TT),
            MT = arguments[0],
            KT = Nk();
          this.addEventListener("loadstart", (function() {
            lT || kT({
              url: TT,
              method: MT,
              requestId: KT,
              apiType: OM
            })
          })), this.addEventListener("load", (function() {
            lT || cT({
              url: TT,
              method: MT,
              requestId: KT,
              apiType: OM
            })
          })), this.addEventListener("error", (function() {
            lT || cT({
              url: TT,
              method: MT,
              requestId: KT,
              apiType: OM
            })
          })), this.addEventListener("abort", (function() {
            lT || cT({
              url: TT,
              method: MT,
              requestId: KT,
              apiType: OM
            })
          })), fM.apply(this, arguments)
        }
      }({
        onRequestStart: TT,
        onRequestEnd: kT
      }), AM = !0), yM
    }
    let jM, vM = !1;
    let tM = function(TT) {
      return TT[TT.Started = 0] = "Started", TT[TT.Halted = 1] = "Halted", TT[TT.Cancelled = 2] = "Cancelled", TT[TT.Ended = 3] = "Ended", TT
    }({});
    var hM = class {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = TT, this.logDebug = kT, this.initialActivityTimeout = cT, this.http = CM(), this.dom = MM(), this.perf = (IM || (IM = new Sc), vM || (jM = Bl.subscribe((TT => {
          "resource" === TT.type && IM.notify({
            type: "resource-entry"
          })
        })), vM = !0), IM), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Sc).merge(this.http, this.dom, this.perf).takeWhile((() => [tM.Started, tM.Halted].includes(this.userAction.getState()))).filter((TT => !!(this.userAction.getState() !== tM.Halted || kM(TT) && this.runningRequests.has(TT.request.requestId)))).subscribe((TT => {
          (function(TT) {
            return TT.type === Nc
          })(TT) && this.runningRequests.set(TT.request.requestId, TT.request), kM(TT) && this.runningRequests.delete(TT.request.requestId), kM(TT) ? this.userAction.getState() === tM.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((TT => [tM.Ended, tM.Cancelled].includes(TT))).first().subscribe((() => this.cleanup())), this.startupTid = TM(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === tM.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === tM.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = TM(this.haltTid, (() => {
          this.userAction.getState() === tM.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var TT, kT;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (TT = this.allMonitorsSub) || void 0 === TT || TT.unsubscribe(), null === (kT = this.stateSub) || void 0 === kT || kT.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(TT) {
        void 0 !== TT && window.clearTimeout(TT)
      }
    };

    function NM(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uk;
      var cT;
      const {
        api: lT,
        config: MT,
        internalLogger: KT
      } = TT, OT = sl(null === (cT = MT.userActionsInstrumentation) || void 0 === cT ? void 0 : cT.initialActivityTimeout, 100, kT);
      return {
        processUserEvent: function(TT) {
          var kT, cT;
          const KT = null !== (kT = null === (cT = MT.userActionsInstrumentation) || void 0 === cT ? void 0 : cT.dataAttributeName) && void 0 !== kT ? kT : nl,
            OT = TT.target;
          if (!(OT instanceof Element)) return;
          const yT = function(TT, kT) {
              let cT = TT;
              for (; cT;) {
                if (cT.hasAttribute(kT)) return cT;
                cT = cT.parentElement
              }
              return null
            }(OT, ql(KT)),
            fT = function(TT, kT) {
              if (!TT) return;
              const cT = function(TT) {
                  return ql(TT).slice(5).replace(/-(.)/g, ((TT, kT) => kT.toUpperCase()))
                }(kT),
                lT = TT.dataset;
              for (const MT in lT)
                if (MT === cT) return lT[MT]
            }(yT, KT);
          if (!yT || !fT) return;
          const xT = function(TT, kT) {
            const cT = TT.getAttribute(function(TT) {
              const kT = ql(TT);
              return kT.endsWith("-name") ? `${kT.slice(0,-5)}-timeout` : `${kT}-timeout`
            }(kT));
            return null === cT ? void 0 : Number(cT)
          }(yT, KT);
          lT.startUserAction(fT, {}, {
            triggerName: TT.type,
            initialActivityTimeout: xT
          })
        },
        processUserActionStarted: function(TT, cT) {
          const lT = TT,
            MT = sl(cT, OT, kT);
          new hM(lT, KT.debug, MT).attach()
        }
      }
    }
    const QM = "user_action_start",
      SM = {
        Normal: "normal",
        Critical: "critical"
      };
    var DM = class {
        constructor() {
          this.buffer = []
        }
        addItem(TT) {
          this.buffer.push(TT)
        }
        flushBuffer(TT) {
          if (zT(TT))
            for (const kT of this.buffer) TT(kT);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      aM = class extends Sc {
        constructor(TT) {
          let {
            name: kT,
            parentId: cT,
            trigger: lT,
            transports: MT,
            attributes: KT,
            trackUserActionsExcludeItem: OT,
            importance: yT = SM.Normal,
            pushEvent: fT
          } = TT;
          super(), this.name = kT, this.attributes = KT, this.id = Nk(), this.trigger = lT, this.parentId = null !== cT && void 0 !== cT ? cT : this.id, this.trackUserActionsExcludeItem = OT, this.importance = yT, this._pushEvent = fT, this._itemBuffer = new DM, this._transports = MT, this._state = 0, this._start()
        }
        addItem(TT) {
          return 0 === this._state && (this._itemBuffer.addItem(TT), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Ck(), this._startTimeMono = jk())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((TT => {
            this._transports.execute(TT)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const TT = Ck(),
            kT = jk() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((TT => {
            if (function(TT, kT) {
                return (null === kT || void 0 === kT ? void 0 : kT(TT)) || "measurement" === TT.type && "web-vitals" === TT.payload.type
              }(TT, this.trackUserActionsExcludeItem)) return void this._transports.execute(TT);
            const kT = sk(sk({}, TT), {}, {
              payload: sk(sk({}, TT.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(kT)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", sk({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: TT.toString(),
            userActionDuration: kT.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Zk(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: TT => (TT.action = {
              id: this.id,
              name: this.name
            }, TT)
          })
        }
        getState() {
          return this._state
        }
      };
    const FM = new Sc;

    function rM(TT, kT) {
      return !!TT && (0 === (null === TT || void 0 === TT ? void 0 : TT.getState()) && (TT.addItem(kT), !0))
    }
    var PM = class extends cc {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = lc
        }
        initialize() {
          const {
            processUserEvent: TT,
            processUserActionStarted: kT
          } = NM(tT, (TT => this.logWarn(TT)));
          this._processUserEvent = TT, this._processKeydown = kT => {
            [" ", "Enter"].includes(kT.key) && TT(kT)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = FM.subscribe((TT => {
            let {
              type: cT,
              userAction: lT,
              initialActivityTimeout: MT
            } = TT;
            "user_action_start" === cT && kT(lT, MT)
          }))
        }
        destroy() {
          var TT;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (TT = this._userActionSub) || void 0 === TT || TT.unsubscribe()
        }
      },
      wM = class extends cc {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = lc, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(TT) {
          const kT = {
            blockedURI: TT.blockedURI,
            columnNumber: TT.columnNumber,
            disposition: TT.disposition,
            documentURI: TT.documentURI,
            effectiveDirective: TT.effectiveDirective,
            lineNumber: TT.lineNumber,
            originalPolicy: TT.originalPolicy,
            referrer: TT.referrer,
            sample: TT.sample,
            sourceFile: TT.sourceFile,
            statusCode: TT.statusCode,
            violatedDirective: TT.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Zk(kT))
        }
      };
    var mM = class extends Sc {
      constructor(TT, kT) {
        var cT, lT, MT, KT;
        super(), this._tracking = !1, this.eventsObservable = TT, this._options = {
          inactivityMs: null !== (cT = null === kT || void 0 === kT ? void 0 : kT.inactivityMs) && void 0 !== cT ? cT : 100,
          drainTimeoutMs: null !== (lT = null === kT || void 0 === kT ? void 0 : kT.drainTimeoutMs) && void 0 !== lT ? lT : 1e4,
          isOperationStart: null !== (MT = null === kT || void 0 === kT ? void 0 : kT.isOperationStart) && void 0 !== MT ? MT : () => {},
          isOperationEnd: null !== (KT = null === kT || void 0 === kT ? void 0 : kT.isOperationEnd) && void 0 !== KT ? KT : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((TT => {
          var kT;
          this._lastEventTime = jk(), null === (kT = this._currentEvents) || void 0 === kT || kT.push(TT);
          const cT = this._options.isOperationStart(TT);
          var lT;
          cT && (null === (lT = this._activeOperations) || void 0 === lT || lT.set(cT, !0));
          const MT = this._options.isOperationEnd(TT);
          var KT;
          MT && (null === (KT = this._activeOperations) || void 0 === KT || KT.delete(MT));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = jk(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let TT;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), TT = this.hasActiveOperations() ? jk() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: TT
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = bM(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = bM(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(TT) {
        TT && clearTimeout(TT)
      }
    };

    function bM(TT, kT, cT) {
      return TT && clearTimeout(TT), TT = setTimeout((() => {
        kT()
      }), cT)
    }
    let zM;
    const JM = new Set,
      oM = new Map;
    let HM, eM, GM, VM, EM, ZM, uM, XM, dM = !1;
    var LM = class extends cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = lc
      }
      initialize() {
        const TT = CM(),
          kT = MM(),
          cT = function() {
            function TT(TT, kT) {
              const cT = null !== kT && void 0 !== kT ? kT : location.href;
              cT !== eM && (HM.notify({
                type: "url-change",
                from: eM,
                to: cT,
                trigger: TT
              }), eM = cT)
            }
            if (HM || (HM = new Sc, eM = location.href), !dM)
              if ("navigation" in window && "NavigateEvent" in window) {
                uM = kT => {
                  try {
                    const cT = null === kT || void 0 === kT ? void 0 : kT.destination;
                    (null === cT || void 0 === cT ? void 0 : cT.sameDocument) && "string" === typeof cT.url && TT("navigate", cT.url)
                  } catch (cT) {}
                }, window.navigation.addEventListener("navigate", uM);
                const kT = window.NavigateEvent;
                kT && kT.prototype && "function" === typeof kT.prototype.intercept && (XM || (XM = kT.prototype.intercept), kT.prototype.intercept = function(kT) {
                  try {
                    const kT = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      cT = null === this || void 0 === this ? void 0 : this.destination;
                    kT && cT && !1 === cT.sameDocument && "string" === typeof cT.url && TT("navigate-intercept", cT.url)
                  } catch (cT) {}
                  return XM.call(this, kT)
                }), dM = !0
              } else GM || (GM = window.history.pushState), window.history.pushState = function() {
                for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
                const MT = GM.apply(window.history, cT);
                return TT("pushState"), MT
              }, VM || (VM = window.history.replaceState), window.history.replaceState = function() {
                for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
                const MT = VM.apply(window.history, cT);
                return TT("replaceState"), MT
              }, EM = () => TT("popstate"), ZM = () => TT("hashchange"), window.addEventListener("popstate", EM), window.addEventListener("hashchange", ZM), dM = !0;
            return HM
          }(),
          lT = (MT = ["pointerdown", "keydown"], zM || (zM = new Sc), MT.forEach((TT => {
            if (!JM.has(TT)) {
              const kT = () => {
                zM.notify({
                  type: "interaction",
                  name: TT
                })
              };
              window.addEventListener(TT, kT), JM.add(TT), oM.set(TT, kT)
            }
          })), zM);
        var MT;
        const KT = new mM((new Sc).merge(TT, kT, cT), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: TT => function(TT) {
            return TT.type === Nc
          }(TT) ? TT.request.requestId : void 0,
          isOperationEnd: TT => function(TT) {
            return TT.type === Qc
          }(TT) ? TT.request.requestId : void 0
        });
        KT.filter((TT => "tracking-ended" === TT.message)).subscribe((TT => {
          var kT, cT;
          if ((null === (kT = TT.events) || void 0 === kT ? void 0 : kT.some((TT => "url-change" === TT.type))) && (null === (cT = TT.events) || void 0 === cT ? void 0 : cT.some((TT => "dom-mutation" === TT.type)))) {
            var lT;
            const kT = null === (lT = TT.events) || void 0 === lT ? void 0 : lT.find((TT => "url-change" === TT.type));
            tT.api.pushEvent("faro.navigation", {
              fromUrl: null === kT || void 0 === kT ? void 0 : kT.from,
              toUrl: null === kT || void 0 === kT ? void 0 : kT.to,
              sameDocument: String(!0),
              duration: TT.duration
            })
          }
        })), lT.subscribe((() => {
          KT.startTracking()
        }))
      }
    };

    function RM() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const kT = [new PM, new Vc, new Gl, new Mc, new Zc, new LM];
      return !1 !== TT.enablePerformanceInstrumentation && kT.unshift(new Wl), !1 !== TT.enableContentSecurityPolicyInstrumentation && kT.push(new wM), !1 !== TT.captureConsole && kT.push(new ec), kT
    }
    var gM = cT(6684);
    let UM, YM;

    function BM() {
      const TT = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return UM === TT && YM || (YM = new gM.UAParser(TT).getResult(), UM = TT), YM
    }
    const WM = () => {
        const {
          browser: TT,
          os: kT,
          ua: cT
        } = BM(), {
          name: lT,
          version: MT
        } = TT, {
          name: KT,
          version: OT
        } = kT, yT = navigator.language, fT = cT.includes("Mobi"), xT = function() {
          if (!lT || !MT) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== lT && void 0 !== lT ? lT : Ec,
            version: null !== MT && void 0 !== MT ? MT : Ec,
            os: `${null!==KT&&void 0!==KT?KT:Ec} ${null!==OT&&void 0!==OT?OT:Ec}`,
            userAgent: null !== cT && void 0 !== cT ? cT : Ec,
            language: null !== yT && void 0 !== yT ? yT : Ec,
            mobile: fT,
            brands: null !== xT && void 0 !== xT ? xT : Ec,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      nM = () => {
        const {
          name: TT,
          version: kT
        } = BM().os;
        if (!TT && !kT) return {};
        const cT = {};
        return TT && (cT.name = TT), kT && (cT.version = kT), {
          os: cT
        }
      };

    function pM(TT) {
      var kT, cT, lT;
      return {
        id: null !== (kT = null === (cT = tT.config) || void 0 === cT || null === (cT = cT.sessionTracking) || void 0 === cT || null === (lT = cT.generateSessionId) || void 0 === lT ? void 0 : lT.call(cT)) && void 0 !== kT ? kT : Nk(),
        attributes: TT
      }
    }
    const iM = () => ({
      sdk: {
        name: "faro-web",
        version: lc
      }
    });
    var qM = class extends kc {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let sM = function(TT) {
      return TT.EXCEPTION = "exception", TT.LOG = "log", TT.MEASUREMENT = "measurement", TT.TRACE = "trace", TT.EVENT = "event", TT
    }({});
    const TK = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function kK(TT, kT) {
      var cT, lT;
      if (void 0 === kT) return TT;
      if (void 0 === TT) return {
        resourceSpans: kT
      };
      const MT = null === (cT = TT.resourceSpans) || void 0 === cT ? void 0 : cT[0];
      if (void 0 === MT) return TT;
      const KT = (null === MT || void 0 === MT ? void 0 : MT.scopeSpans) || [],
        OT = (null === kT || void 0 === kT || null === (lT = kT[0]) || void 0 === lT ? void 0 : lT.scopeSpans) || [];
      return sk(sk({}, TT), {}, {
        resourceSpans: [sk(sk({}, MT), {}, {
          scopeSpans: [...KT, ...OT]
        })]
      })
    }

    function cK(TT) {
      let kT = {
        meta: {}
      };
      return void 0 !== TT[0] && (kT.meta = TT[0].meta), TT.forEach((TT => {
        switch (TT.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const cT = TK[TT.type],
              lT = kT[cT];
            kT = sk(sk({}, kT), {}, {
              [cT]: void 0 === lT ? [TT.payload] : [...lT, TT.payload]
            });
            break
          }
          case "trace":
            kT = sk(sk({}, kT), {}, {
              traces: kK(kT.traces, TT.payload.resourceSpans)
            })
        }
      })), kT
    }
    var lK = class extends qM {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-console", this.version = lc
      }
      send(TT) {
        var kT;
        return this.unpatchedConsole[null !== (kT = this.options.level) && void 0 !== kT ? kT : Dc.DEBUG]("New event", cK([TT]))
      }
    };
    const MK = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      KK = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      OK = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      yK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      fK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      xK = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function IK(TT) {
      let {
        weekday: kT,
        day: cT,
        month: lT,
        year: MT,
        hour: KT,
        minute: OT,
        second: yT
      } = TT;
      if (MT < 1900 || cT < 1 || KT > 23 || OT > 59 || yT > 60) return;
      const fT = 60 === yT,
        xT = new Date(0);
      return xT.setUTCFullYear(MT, lT, cT), xT.setUTCHours(KT, OT, fT ? 59 : yT, 0), xT.getUTCDay() === kT && xT.getUTCDate() === cT && xT.getUTCMonth() === lT && xT.getUTCFullYear() === MT && xT.getUTCHours() === KT && xT.getUTCMinutes() === OT && xT.getUTCSeconds() === (fT ? 59 : yT) ? xT.getTime() + (fT ? 1e3 : 0) : void 0
    }
    var AK = class {
      constructor(TT) {
        this.options = TT, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var TT = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const kT = this.sequence++;
        let cT = !1;
        return {
          deliver: function() {
            var cT = Yl((function*(cT) {
              const lT = TT.options.getNow();
              let MT, KT = 0;
              for (;;) {
                var OT, yT, fT;
                const xT = TT.options.retry.maxAttempts - KT,
                  IT = yield TT.runAttempt((() => cT(xT, TT.unloading)), KT > 0);
                if (KT += IT.attemptsMade, "success" === IT.kind) return {
                  kind: "success",
                  attempts: KT,
                  elapsedTimeMs: TT.options.getNow() - lT
                };
                if (MT = IT.failure, "terminal" === IT.kind || TT.unloading) return {
                  kind: "terminal",
                  attempts: KT,
                  elapsedTimeMs: TT.options.getNow() - lT,
                  failure: MT
                };
                if (KT >= TT.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: KT,
                  elapsedTimeMs: TT.options.getNow() - lT,
                  failure: MT,
                  reason: "retries-exhausted"
                };
                if (null != IT.retryAfterMs && IT.retryAfterMs > TT.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: KT,
                  elapsedTimeMs: TT.options.getNow() - lT,
                  failure: MT,
                  reason: "retry-after-too-long"
                };
                const AT = Math.min(null !== (OT = IT.retryAfterMs) && void 0 !== OT ? OT : TT.options.retry.initialBackoffMs * Math.pow(TT.options.retry.backoffMultiplier, KT - 1), TT.options.retry.maxBackoffMs);
                if (null === (yT = (fT = TT.options).onRetry) || void 0 === yT || yT.call(fT, AT, KT + 1), yield TT.waitForTurn(kT, AT)) {
                  const kT = TT.options.retry.maxAttempts - KT,
                    MT = yield TT.runAttempt((() => cT(kT, !0)));
                  return KT += MT.attemptsMade, {
                    kind: "success" === MT.kind ? "success" : "terminal",
                    attempts: KT,
                    elapsedTimeMs: TT.options.getNow() - lT,
                    failure: "success" === MT.kind ? void 0 : MT.failure
                  }
                }
              }
            }));
            return function(TT) {
              return cT.apply(this, arguments)
            }
          }(),
          release: () => {
            cT || (cT = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const TT = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const kT of TT) kT.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((cT, lT) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const kT = () => {
                this.inProgress--, this.runNextAttempt()
              };
              TT().then((TT => {
                kT(), cT(TT)
              }), (TT => {
                kT(), lT(TT)
              }))
            },
            isRedelivery: kT
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const TT = this.options.getNow(),
            kT = this.attemptQueue.findIndex((kT => {
              let {
                isRedelivery: cT
              } = kT;
              return this.unloading || !cT || TT >= this.nextSendAt
            }));
          if (kT < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - TT)));
          const [cT] = this.attemptQueue.splice(kT, 1);
          cT.isRedelivery && !this.unloading && (this.nextSendAt = TT + 1), cT.run()
        }
      }
      waitForTurn(TT, kT) {
        const cT = Math.min(kT * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((kT => {
          this.waiting.push({
            sequence: TT,
            readyAt: this.options.getNow() + cT,
            resolve: kT
          }), this.waiting.sort(((TT, kT) => TT.readyAt === kT.readyAt ? TT.sequence - kT.sequence : TT.readyAt - kT.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const TT = this.waiting[0],
          kT = TT.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const kT = this.waiting.indexOf(TT);
          kT >= 0 && this.waiting.splice(kT, 1), TT.resolve(!1), this.scheduleNext()
        }), Math.max(0, kT - this.options.getNow()))
      }
    };

    function CK(TT, kT) {
      if (null == TT) return {};
      var cT, lT, MT = function(TT, kT) {
        if (null == TT) return {};
        var cT = {};
        for (var lT in TT)
          if ({}.hasOwnProperty.call(TT, lT)) {
            if (kT.includes(lT)) continue;
            cT[lT] = TT[lT]
          } return cT
      }(TT, kT);
      if (Object.getOwnPropertySymbols) {
        var KT = Object.getOwnPropertySymbols(TT);
        for (lT = 0; lT < KT.length; lT++) cT = KT[lT], kT.includes(cT) || {}.propertyIsEnumerable.call(TT, cT) && (MT[cT] = TT[cT])
      }
      return MT
    }

    function jK(TT) {
      const {
        size: kT,
        concurrency: cT
      } = TT, lT = [];
      let MT = 0;
      const KT = () => {
        if (MT < cT && lT.length) {
          const {
            producer: TT,
            resolve: kT,
            reject: cT
          } = lT.shift();
          MT++, TT().then((TT => {
            MT--, KT(), kT(TT)
          }), (TT => {
            MT--, KT(), cT(TT)
          }))
        }
      };
      return {
        add: TT => {
          if (lT.length + MT >= kT) throw new Error("Task buffer full");
          return new Promise(((kT, cT) => {
            lT.push({
              producer: TT,
              resolve: kT,
              reject: cT
            }), KT()
          }))
        }
      }
    }
    const vK = ["headers"],
      tK = ["keepalive", "signal"],
      hK = new Set([408, 425, 429, 500, 502, 503, 504]),
      NK = new Set([429, 503]);
    let QK = 0,
      SK = 0;
    var DK = class extends Error {};
    var aK = class extends qM {
      constructor(TT) {
        var kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT;
        super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = lc, this.pendingCustomSends = 0, this.getNow = null !== (kT = TT.getNow) && void 0 !== kT ? kT : Date.now, this.requestTimeoutMs = null !== (cT = TT.requestTimeoutMs) && void 0 !== cT ? cT : 1e4, this.compressionEnabled = null !== (lT = TT.requestCompression) && void 0 !== lT && lT && "undefined" !== typeof CompressionStream, TT.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new AK({
          bufferSize: null !== (MT = TT.bufferSize) && void 0 !== MT ? MT : 30,
          concurrency: null !== (KT = TT.concurrency) && void 0 !== KT ? KT : 5,
          retry: {
            maxAttempts: null !== (OT = null === (yT = TT.retry) || void 0 === yT ? void 0 : yT.maxAttempts) && void 0 !== OT ? OT : 3,
            initialBackoffMs: null !== (fT = null !== (xT = null === (IT = TT.retry) || void 0 === IT ? void 0 : IT.initialBackoffMs) && void 0 !== xT ? xT : TT.defaultRateLimitBackoffMs) && void 0 !== fT ? fT : 1e3,
            maxBackoffMs: null !== (AT = null === (CT = TT.retry) || void 0 === CT ? void 0 : CT.maxBackoffMs) && void 0 !== AT ? AT : 3e4,
            backoffMultiplier: null !== (jT = null === (vT = TT.retry) || void 0 === vT ? void 0 : vT.backoffMultiplier) && void 0 !== jT ? jT : 2
          },
          getNow: this.getNow,
          getRandom: null !== (tT = TT.getRandom) && void 0 !== tT ? tT : Math.random,
          onRetry: (TT, kT) => {
            this.logDebug(`Retrying failed request after ${TT}ms. Attempt ${kT}.`)
          }
        }), this.customPromiseBuffer = jK({
          size: null !== (hT = TT.bufferSize) && void 0 !== hT ? hT : 30,
          concurrency: null !== (NT = TT.concurrency) && void 0 !== NT ? NT : 5
        }), this.defaultPromiseBuffer = {
          add: TT => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(TT);
            const kT = this.deliveryQueue.reserve();
            if (!kT) throw new Error("Task buffer full");
            return this.runBufferedTask(kT, TT)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (TT => {
          TT.persisted && this.deliveryQueue.resume()
        })))
      }
      send(TT) {
        var kT = this;
        return Yl((function*() {
          const cT = kT.promiseBuffer;
          if (cT !== kT.defaultPromiseBuffer || cT.add !== kT.defaultBufferAdd) {
            kT.pendingCustomSends++;
            try {
              yield cT.add((() => kT.deliver(TT)))
            } catch (lT) {
              kT.logError("Permanent delivery failure", {
                error: lT,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              kT.pendingCustomSends--
            }
          } else yield kT.deliver(TT)
        }))()
      }
      runBufferedTask(TT, kT) {
        return Yl((function*() {
          let cT;
          try {
            return yield TT.deliver(Yl((function*() {
              return cT = yield kT(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), cT
          } finally {
            TT.release()
          }
        }))()
      }
      deliver(TT) {
        var kT = this;
        return Yl((function*() {
          const cT = kT.deliveryQueue.reserve();
          if (cT) try {
            const lT = yield kT.prepareRequest(TT), MT = yield cT.deliver(((TT, cT) => kT.performAttempt(lT, TT, cT)));
            "terminal" === MT.kind && kT.logError("retries-exhausted" === MT.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Ik(Ik({}, MT.failure), {}, {
              reason: MT.reason,
              attempts: MT.attempts,
              elapsedTimeMs: MT.elapsedTimeMs
            }))
          } catch (lT) {
            kT.logError("Permanent delivery failure", {
              error: lT,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            cT.release()
          } else kT.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var TT;
        return [this.options.url].concat(null !== (TT = this.config.ignoreUrls) && void 0 !== TT ? TT : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(TT) {
        var kT = this;
        return Yl((function*() {
          var cT, lT;
          const MT = cK(TT),
            KT = null === (cT = MT.meta.session) || void 0 === cT ? void 0 : cT.id,
            OT = JSON.stringify(MT),
            yT = null !== (lT = kT.options.requestOptions) && void 0 !== lT ? lT : {},
            {
              headers: fT = {}
            } = yT,
            xT = CK(yT, vK),
            {
              keepalive: IT,
              signal: AT
            } = xT,
            CT = CK(xT, tK),
            jT = {};
          for (const [TT, kT] of Object.entries(fT)) jT[TT] = "function" === typeof kT ? yield kT(): kT;
          let vT = OT,
            tT = function(TT) {
              return "undefined" === typeof TextEncoder ? TT.length : (new TextEncoder).encode(TT).byteLength
            }(OT);
          const hT = {};
          return kT.compressionEnabled && (vT = yield kT.compress(OT), tT = vT.size, hT["Content-Encoding"] = "gzip"), {
            bodySize: tT,
            sessionId: KT,
            requestInit: Ik({
              method: "POST",
              headers: Ik(Ik(Ik(Ik(Ik({
                "Content-Type": "application/json"
              }, hT), jT), kT.options.apiKey ? {
                "x-api-key": kT.options.apiKey
              } : {}), KT ? {
                "x-faro-session-id": KT
              } : {}), {}, {
                "Idempotency-Key": Nk(20)
              }),
              body: vT
            }, CT)
          }
        }))()
      }
      performAttempt(TT, kT, cT) {
        var lT = this;
        return Yl((function*() {
          var MT;
          const KT = null === (MT = lT.options.requestOptions) || void 0 === MT ? void 0 : MT.signal;
          if (null === KT || void 0 === KT ? void 0 : KT.aborted) return {
            kind: "terminal",
            failure: {
              error: KT.reason
            },
            attemptsMade: 0
          };
          let OT = 0;
          try {
            var yT;
            const MT = yield lT.fetchWithKeepaliveFallback(TT.requestInit, TT.bodySize, !!cT || (null === (yT = lT.options.requestOptions) || void 0 === yT ? void 0 : yT.keepalive), kT, (() => OT++));
            if (lT.handleResponse(MT, TT.sessionId), MT.status >= 200 && MT.status < 300) return {
              kind: "success",
              attemptsMade: OT
            };
            const KT = {
              status: MT.status
            };
            return !hK.has(MT.status) || cT ? {
              kind: "terminal",
              failure: KT,
              attemptsMade: OT
            } : {
              kind: "retry",
              failure: KT,
              attemptsMade: OT,
              retryAfterMs: NK.has(MT.status) ? lT.getRetryAfterDelayMs(MT) : void 0
            }
          } catch (fT) {
            const TT = {
              error: fT
            };
            return (null === KT || void 0 === KT ? void 0 : KT.aborted) || !lT.isFetchNetworkError(fT) || cT ? {
              kind: "terminal",
              failure: TT,
              attemptsMade: OT
            } : {
              kind: "retry",
              failure: TT,
              attemptsMade: OT
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(TT, kT, cT, lT, MT) {
        var KT = this;
        return Yl((function*() {
          const OT = KT.getNow(),
            yT = KT.reserveKeepalive(kT, cT);
          try {
            return yield KT.fetchWithTimeout(Ik(Ik({}, TT), {}, {
              keepalive: yT.keepalive
            }), KT.requestTimeoutMs, MT)
          } catch (xT) {
            var fT;
            if (yT.keepalive && lT > 1 && KT.isFetchNetworkError(xT) && !(xT instanceof DK) && !(null === (fT = KT.options.requestOptions) || void 0 === fT || null === (fT = fT.signal) || void 0 === fT ? void 0 : fT.aborted)) {
              KT.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const kT = KT.requestTimeoutMs - (KT.getNow() - OT);
              return KT.fetchWithTimeout(Ik(Ik({}, TT), {}, {
                keepalive: !1
              }), kT, MT)
            }
            throw xT
          } finally {
            yT.release()
          }
        }))()
      }
      fetchWithTimeout(TT, kT, cT) {
        var lT = this;
        return Yl((function*() {
          var MT;
          const KT = null === (MT = lT.options.requestOptions) || void 0 === MT ? void 0 : MT.signal;
          if (lT.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return cT(), fetch(lT.options.url, Ik(Ik({}, TT), {}, {
            signal: KT
          }));
          if (kT <= 0) throw new DK("Request timed out");
          const OT = new AbortController,
            yT = () => OT.abort(null === KT || void 0 === KT ? void 0 : KT.reason);
          null === KT || void 0 === KT || KT.addEventListener("abort", yT, {
            once: !0
          });
          let fT = !1;
          const xT = setTimeout((() => {
            fT = !0, OT.abort()
          }), kT);
          try {
            return cT(), yield fetch(lT.options.url, Ik(Ik({}, TT), {}, {
              signal: OT.signal
            }))
          } catch (IT) {
            if (fT && !(null === KT || void 0 === KT ? void 0 : KT.aborted)) throw new DK("Request timed out");
            throw IT
          } finally {
            clearTimeout(xT), null === KT || void 0 === KT || KT.removeEventListener("abort", yT)
          }
        }))()
      }
      getRetryAfterDelayMs(TT) {
        const kT = TT.headers.get("Retry-After");
        if (!kT) return;
        if (/^\d+$/.test(kT)) {
          const TT = 1e3 * Number(kT);
          return Number.isFinite(TT) ? TT : Number.POSITIVE_INFINITY
        }
        const cT = this.getNow(),
          lT = function(TT, kT) {
            const cT = MK.exec(TT);
            if (cT) {
              const [, TT, kT, lT, MT, KT, OT, yT] = cT;
              return IK({
                weekday: yK.indexOf(TT),
                day: Number(kT),
                month: xK.indexOf(lT),
                year: Number(MT),
                hour: Number(KT),
                minute: Number(OT),
                second: Number(yT)
              })
            }
            const lT = KK.exec(TT);
            if (lT) {
              const [, TT, cT, OT, yT, fT, xT, IT] = lT, AT = new Date(kT);
              if (Number.isNaN(AT.getTime())) return;
              const CT = AT.getUTCFullYear();
              let jT = 100 * Math.floor(CT / 100) + Number(yT);
              jT < CT && (jT += 100);
              const vT = xK.indexOf(OT),
                tT = {
                  month: vT,
                  day: Number(cT),
                  hour: Number(fT),
                  minute: Number(xT),
                  second: Number(IT),
                  millisecond: 0
                },
                hT = {
                  month: AT.getUTCMonth(),
                  day: AT.getUTCDate(),
                  hour: AT.getUTCHours(),
                  minute: AT.getUTCMinutes(),
                  second: AT.getUTCSeconds(),
                  millisecond: AT.getUTCMilliseconds()
                };
              return (jT > CT + 50 || jT === CT + 50 && (KT = hT, ((MT = tT).month - KT.month || MT.day - KT.day || MT.hour - KT.hour || MT.minute - KT.minute || MT.second - KT.second || MT.millisecond - KT.millisecond) > 0)) && (jT -= 100), IK({
                weekday: fK.indexOf(TT),
                day: Number(cT),
                month: vT,
                year: jT,
                hour: Number(fT),
                minute: Number(xT),
                second: Number(IT)
              })
            }
            var MT, KT;
            const OT = OK.exec(TT);
            if (!OT) return;
            const [, yT, fT, xT, IT, AT, CT, jT, vT] = OT;
            return IK({
              weekday: yK.indexOf(yT),
              day: Number(null !== xT && void 0 !== xT ? xT : IT),
              month: xK.indexOf(fT),
              year: Number(vT),
              hour: Number(AT),
              minute: Number(CT),
              second: Number(jT)
            })
          }(kT, cT);
        return null == lT ? void 0 : Math.max(0, lT - cT)
      }
      reserveKeepalive(TT, kT) {
        if (!1 === kT || TT > 6e4 || QK + TT > 6e4 || SK >= 9) return {
          keepalive: !1,
          release: Uk
        };
        QK += TT, SK++;
        let cT = !1;
        return {
          keepalive: !0,
          release: () => {
            cT || (cT = !0, QK -= TT, SK--)
          }
        }
      }
      handleResponse(TT, kT) {
        202 === TT.status && "invalid" === TT.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), kT), TT.text().catch(Uk)
      }
      isFetchNetworkError(TT) {
        return TT instanceof TypeError || TT instanceof DK || TT instanceof DOMException && "AbortError" === TT.name
      }
      compress(TT) {
        return Yl((function*() {
          const kT = [],
            cT = new ReadableStream({
              start(kT) {
                kT.enqueue((new TextEncoder).encode(TT)), kT.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: TT,
              value: lT
            } = yield cT.read();
            if (TT) return new Blob(kT);
            kT.push(lT)
          }
        }))()
      }
      extendFaroSession(TT, kT, cT) {
        var lT, MT;
        const KT = TT.sessionTracking;
        if (!(null === KT || void 0 === KT ? void 0 : KT.enabled)) return void kT("Session expired.");
        const {
          fetchUserSession: OT,
          storeUserSession: yT
        } = gk(KT), fT = null === (lT = this.metas.value.session) || void 0 === lT ? void 0 : lT.id, xT = null === (MT = OT()) || void 0 === MT ? void 0 : MT.sessionId;
        cT && cT === fT && cT === xT ? (Jk({
          fetchUserSession: OT,
          storeUserSession: yT
        })({
          forceSessionExtend: !0
        }), kT("Session expired; created new session.")) : kT("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const FK = () => {
      const TT = window.k6;
      return {
        k6: Ik({
          isK6Browser: !0
        }, (null === TT || void 0 === TT ? void 0 : TT.testRunId) && {
          testRunId: null === TT || void 0 === TT ? void 0 : TT.testRunId
        })
      }
    };
    let rK, PK;

    function wK() {
      let {
        generatePageId: TT,
        initialPageMeta: kT
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const cT = location.href;
        return zT(TT) && rK !== cT && (rK = cT, PK = TT(location)), {
          page: Ik(Ik({
            url: cT
          }, PK ? {
            id: PK
          } : {}), kT)
        }
      }
    }

    function mK() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tc,
        kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cT = Bk;
      return kT > 0 && (cT.error = kT >= 1 ? function() {
        for (var kT = arguments.length, lT = new Array(kT), MT = 0; MT < kT; MT++) lT[MT] = arguments[MT];
        TT.error(`${cT.prefix}\n`, ...lT)
      } : Uk, cT.warn = kT >= 2 ? function() {
        for (var kT = arguments.length, lT = new Array(kT), MT = 0; MT < kT; MT++) lT[MT] = arguments[MT];
        TT.warn(`${cT.prefix}\n`, ...lT)
      } : Uk, cT.info = kT >= 3 ? function() {
        for (var kT = arguments.length, lT = new Array(kT), MT = 0; MT < kT; MT++) lT[MT] = arguments[MT];
        TT.info(`${cT.prefix}\n`, ...lT)
      } : Uk, cT.debug = kT >= 4 ? function() {
        for (var kT = arguments.length, lT = new Array(kT), MT = 0; MT < kT; MT++) lT[MT] = arguments[MT];
        TT.debug(`${cT.prefix}\n`, ...lT)
      } : Uk), cT
    }
    const bK = "faro",
      zK = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      JK = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function oK(TT) {
      var kT, cT, MT, KT, OT, yT;
      const fT = [],
        IT = mK(TT.unpatchedConsole, TT.internalLoggerLevel);
      TT.transports ? ((TT.url || TT.apiKey) && IT.error('if "transports" is defined, "url" and "apiKey" should not be defined'), fT.push(...TT.transports)) : TT.url ? fT.push(new aK({
        url: TT.url,
        apiKey: TT.apiKey,
        requestCompression: TT.requestCompression
      })) : IT.error('either "url" or "transports" must be defined');
      const {
        dedupe: AT = !0,
        eventDomain: CT = lT,
        globalObjectKey: jT = bK,
        instrumentations: vT = RM(),
        internalLoggerLevel: tT = Wk,
        isolate: hT = !1,
        logArgsSerializer: NT = Hc,
        metas: QT = eK(TT),
        paused: ST = !1,
        preventGlobalExposure: DT = !1,
        unpatchedConsole: aT = Tc,
        url: FT,
        experimental: rT
      } = TT, PT = CK(TT, JK), wT = null !== (kT = null === rT || void 0 === rT ? void 0 : rT.trackNavigation) && void 0 !== kT && kT, mT = {
        dataAttributeName: ql(null !== (cT = null === (MT = TT.userActionsInstrumentation) || void 0 === MT ? void 0 : MT.dataAttributeName) && void 0 !== cT ? cT : nl),
        excludeItem: null === (KT = TT.userActionsInstrumentation) || void 0 === KT ? void 0 : KT.excludeItem,
        initialActivityTimeout: sl(null === (OT = TT.userActionsInstrumentation) || void 0 === OT ? void 0 : OT.initialActivityTimeout, 100, (TT => IT.warn(TT)))
      };
      return Ik(Ik({}, PT), {}, {
        batching: Ik(Ik({}, zK), TT.batching),
        dedupe: AT,
        globalObjectKey: jT,
        instrumentations: HK(vT, TT),
        internalLoggerLevel: tT,
        isolate: hT,
        logArgsSerializer: NT,
        metas: QT,
        parseStacktrace: hc,
        paused: ST,
        preventGlobalExposure: DT,
        transports: fT,
        unpatchedConsole: aT,
        eventDomain: CT,
        ignoreUrls: [...null !== (yT = TT.ignoreUrls) && void 0 !== yT ? yT : [], ...FT ? [FT] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Ik(Ik(Ik({}, xT), TT.sessionTracking), GK({
          trackGeolocation: TT.trackGeolocation,
          sessionTracking: TT.sessionTracking
        })),
        userActionsInstrumentation: mT,
        experimental: {
          trackNavigation: wT
        }
      })
    }

    function HK(TT, kT) {
      let {
        experimental: cT
      } = kT;
      var lT;
      const MT = null !== (lT = null === cT || void 0 === cT ? void 0 : cT.trackNavigation) && void 0 !== lT && lT;
      return TT.filter((TT => !("@grafana/faro-web-sdk:instrumentation-navigation" === TT.name && !MT)))
    }

    function eK(TT) {
      var kT, cT, lT;
      const {
        page: MT,
        generatePageId: KT
      } = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.pageTracking) && void 0 !== kT ? kT : {}, OT = [WM, nM, wK({
        generatePageId: KT,
        initialPageMeta: MT
      }), ...null !== (cT = TT.metas) && void 0 !== cT ? cT : [], iM];
      return bT(null === (lT = window) || void 0 === lT ? void 0 : lT.k6) ? [...OT, FK] : OT
    }

    function GK(TT) {
      let {
        trackGeolocation: kT,
        sessionTracking: cT
      } = TT;
      var lT;
      const MT = {};
      return wT(kT) && (MT.geoLocationTrackingEnabled = kT), BT(MT) ? {} : {
        session: Ik(Ik({}, null !== (lT = null === cT || void 0 === cT ? void 0 : cT.session) && void 0 !== lT ? lT : {}), {}, {
          overrides: MT
        })
      }
    }
    const VK = new WeakSet;

    function EK(TT) {
      return VK.add(TT), TT
    }

    function ZK(TT, kT) {
      if (TT.capture) return EK(TT.capture(kT));
      const cT = EK(TT.value);
      return null === kT || void 0 === kT || kT(), cT
    }

    function uK(TT) {
      const kT = `__faroBundleId_${TT}`,
        cT = null === IT || void 0 === IT ? void 0 : IT[kT];
      if ("string" === typeof cT && "" !== cT) return cT;
      const lT = "undefined" !== typeof window ? window[kT] : void 0;
      return "string" === typeof lT && "" !== lT ? lT : void 0
    }

    function XK(TT) {
      var kT, cT;
      const lT = TT.config.app.name,
        MT = lT ? function(TT) {
          return null === IT || void 0 === IT ? void 0 : IT[`__faroGitHash_${TT}`]
        }(lT) : void 0,
        KT = {
          sdk: {
            version: lc,
            name: "faro"
          },
          app: sk({
            bundleId: lT && uK(lT)
          }, void 0 !== MT ? {
            gitHash: MT
          } : {})
        },
        OT = null === (kT = TT.config.sessionTracking) || void 0 === kT ? void 0 : kT.session;
      OT && TT.api.setSession(OT), TT.config.app && (KT.app = sk(sk({}, TT.config.app), KT.app)), TT.config.user && (KT.user = TT.config.user), TT.config.view && (KT.view = TT.config.view), TT.metas.add(KT, ...null !== (cT = TT.config.metas) && void 0 !== cT ? cT : [])
    }
    var dK = class {
      constructor(TT, kT) {
        var cT, lT;
        this.signalBuffer = [], this.itemLimit = null !== (cT = null === kT || void 0 === kT ? void 0 : kT.itemLimit) && void 0 !== cT ? cT : 50, this.sendTimeout = null !== (lT = null === kT || void 0 === kT ? void 0 : kT.sendTimeout) && void 0 !== lT ? lT : 250, this.paused = (null === kT || void 0 === kT ? void 0 : kT.paused) || !1, this.sendFn = TT, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(TT) {
        this.paused || (this.signalBuffer.push(TT), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(TT) {
        const kT = new Map;
        return TT.forEach((TT => {
          const cT = JSON.stringify(TT.meta);
          let lT = kT.get(cT);
          lT = void 0 === lT ? [TT] : [...lT, TT], kT.set(cT, lT)
        })), Array.from(kT.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const TT = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(TT).forEach(this.sendFn)
        } catch (kT) {
          throw this.signalBuffer = [...TT, ...this.signalBuffer], this.trimBufferToLimit(), kT
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function LK(TT, kT, cT, lT) {
      var MT;
      kT.debug("Initializing transports");
      const KT = [];
      let OT = [];
      const yT = TT => {
        let kT = TT;
        for (const lT of OT) {
          const TT = kT.map(lT).filter(Boolean);
          if (0 === TT.length) return [];
          kT = RK(TT, cT)
        }
        return kT
      };
      let fT;
      (null === (MT = cT.batching) || void 0 === MT ? void 0 : MT.enabled) && (fT = new dK((TT => {
        const cT = yT(TT);
        if (0 !== cT.length)
          for (const lT of KT) kT.debug(`Transporting item using ${lT.name}\n`, cT), lT.isBatched() && lT.send(cT)
      }), {
        sendTimeout: cT.batching.sendTimeout,
        itemLimit: cT.batching.itemLimit,
        paused: cT.paused
      }));
      return {
        add: function() {
          kT.debug("Adding transports");
          for (var MT = arguments.length, OT = new Array(MT), yT = 0; yT < MT; yT++) OT[yT] = arguments[yT];
          OT.forEach((MT => {
            kT.debug(`Adding "${MT.name}" transport`), KT.some((TT => TT === MT)) ? kT.warn(`Transport ${MT.name} is already added`) : (MT.unpatchedConsole = TT, MT.internalLogger = kT, MT.config = cT, MT.metas = lT, KT.push(MT))
          }))
        },
        addBeforeSendHooks: function() {
          kT.debug("Adding beforeSendHooks\n", OT);
          for (var TT = arguments.length, cT = new Array(TT), lT = 0; lT < TT; lT++) cT[lT] = arguments[lT];
          cT.forEach((TT => {
            TT && OT.push(TT)
          }))
        },
        getBeforeSendHooks: () => [...OT],
        execute: TT => {
          var MT;
          if (!cT.paused && Lk(lT).shouldCapture()) {
            if (AT = TT.meta, !VK.has(AT)) {
              var OT, xT, IT;
              const kT = null === (OT = lT.value.session) || void 0 === OT ? void 0 : OT.id,
                MT = ZK(lT);
              if (cT.paused) return;
              const KT = sk({}, TT.meta);
              (null === (xT = KT.session) || void 0 === xT ? void 0 : xT.id) === kT && (null === (IT = MT.session) || void 0 === IT ? void 0 : IT.id) !== kT && (void 0 === MT.session ? delete KT.session : KT.session = MT.session), TT = sk(sk({}, TT), {}, {
                meta: EK(KT)
              })
            }
            var AT;
            (null === (MT = cT.batching) || void 0 === MT ? void 0 : MT.enabled) && (null === fT || void 0 === fT || fT.addItem(TT)), (TT => {
              var lT;
              if ((null === (lT = cT.batching) || void 0 === lT ? void 0 : lT.enabled) && KT.every((TT => TT.isBatched()))) return;
              const [MT] = yT([TT]);
              if (void 0 !== MT)
                for (const yT of KT) {
                  var OT;
                  kT.debug(`Transporting item using ${yT.name}\n`, MT), yT.isBatched() ? (null === (OT = cT.batching) || void 0 === OT ? void 0 : OT.enabled) || yT.send([MT]) : yT.send(MT)
                }
            })(TT)
          }
        },
        isPaused: () => cT.paused,
        pause: () => {
          kT.debug("Pausing transports"), null === fT || void 0 === fT || fT.pause(), cT.paused = !0
        },
        remove: function() {
          kT.debug("Removing transports");
          for (var TT = arguments.length, cT = new Array(TT), lT = 0; lT < TT; lT++) cT[lT] = arguments[lT];
          cT.forEach((TT => {
            kT.debug(`Removing "${TT.name}" transport`);
            const cT = KT.indexOf(TT); - 1 !== cT ? KT.splice(cT, 1) : kT.warn(`Transport "${TT.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var TT = arguments.length, cT = new Array(TT), lT = 0; lT < TT; lT++) cT[lT] = arguments[lT];
          kT.debug("Removing beforeSendHooks"), OT = OT.filter((TT => !cT.includes(TT)))
        },
        get transports() {
          return [...KT]
        },
        unpause: () => {
          kT.debug("Unpausing transports"), null === fT || void 0 === fT || fT.start(), cT.paused = !1
        }
      }
    }

    function RK(TT, kT) {
      if (kT.preserveOriginalError)
        for (const cT of TT) "exception" === cT.type && delete cT.payload.originalError;
      return TT
    }
    let gK = Tc;

    function UK(TT) {
      var kT;
      return gK = null !== (kT = TT.unpatchedConsole) && void 0 !== kT ? kT : gK, gK
    }
    let YK, BK = Bk;

    function WK(TT, kT) {
      return BK = mK(TT, kT.internalLoggerLevel), BK
    }

    function nK(TT) {
      let {
        internalLogger: kT,
        config: cT,
        metas: lT,
        transports: MT,
        tracesApi: KT,
        userActionsApi: OT
      } = TT;
      var yT;
      kT.debug("Initializing exceptions API");
      let fT = null;
      YK = null !== (yT = cT.parseStacktrace) && void 0 !== yT ? yT : YK;
      const xT = TT => {
          kT.debug("Changing stacktrace parser"), YK = null !== TT && void 0 !== TT ? TT : YK
        },
        {
          ignoreErrors: IT = [],
          preserveOriginalError: AT
        } = cT;
      return xT(cT.parseStacktrace), {
        changeStacktraceParser: xT,
        getStacktraceParser: () => YK,
        pushError: function(TT) {
          let {
            skipDedupe: yT,
            stackFrames: xT,
            type: CT,
            context: jT,
            spanContext: vT,
            timestampOverwriteMs: tT,
            originalError: hT,
            fingerprint: NT,
            fatal: QT
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(TT, kT) {
              const {
                message: cT,
                name: lT,
                stack: MT
              } = kT;
              return KT = TT, OT = cT + " " + lT + " " + MT, KT.some((TT => FT(TT) ? OT.includes(TT) : !!OT.match(TT)));
              var KT, OT
            }(IT, null !== hT && void 0 !== hT ? hT : TT)) try {
            var ST, DT;
            if (!Lk(lT).shouldCapture()) return;
            const IT = Zk(sk(sk({}, function(TT) {
                let kT = TT.cause;
                ZT(kT) ? kT = TT.cause.toString() : null !== kT && (bT(TT.cause) || JT(TT.cause)) ? kT = Ek(TT.cause) : null != kT && (kT = TT.cause.toString());
                return null == kT ? {} : {
                  cause: kT
                }
              }(null !== hT && void 0 !== hT ? hT : TT)), null !== jT && void 0 !== jT ? jT : {})),
              FT = sk(sk(sk(sk({
                type: CT || TT.name || "Error",
                value: TT.message,
                timestamp: tT ? tk(tT) : vk(),
                trace: vT ? {
                  trace_id: vT.traceId,
                  span_id: vT.spanId
                } : KT.getTraceContext()
              }, BT(IT) ? {} : {
                context: IT
              }), AT ? {
                originalError: hT
              } : {}), NT ? {
                fingerprint: NT
              } : {}), void 0 !== QT ? {
                fatal: QT
              } : {});
            xT = null !== (ST = xT) && void 0 !== ST ? ST : TT.stack ? null === YK || void 0 === YK ? void 0 : YK(TT).frames : void 0, (null === xT || void 0 === xT ? void 0 : xT.length) && (FT.stacktrace = {
              frames: xT
            });
            const rT = {
              type: FT.type,
              value: FT.value,
              stacktrace: FT.stacktrace,
              context: FT.context,
              fingerprint: FT.fingerprint,
              fatal: null !== (DT = FT.fatal) && void 0 !== DT && DT
            };
            if (!yT && cT.dedupe && !aT(fT) && Qk(rT, fT)) return void kT.debug("Skipping error push because it is the same as the last one\n", FT);
            const PT = fT,
              wT = ZK(lT);
            if (fT !== PT && !yT && cT.dedupe && Qk(rT, fT)) return;
            fT = rT;
            const mT = {
              meta: wT,
              payload: FT,
              type: "exception"
            };
            kT.debug("Pushing exception\n", mT), rM(OT.getActiveUserAction(), mT) || MT.execute(mT)
          } catch (rT) {
            kT.error("Error pushing event", rT)
          }
        }
      }
    }

    function pK(TT, kT, cT, lT, MT) {
      kT.debug("Initializing API");
      let KT = null;
      const OT = function(TT) {
          let {
            transports: kT,
            internalLogger: cT,
            config: lT,
            pushEvent: MT
          } = TT;
          var KT;
          const OT = null === (KT = lT.userActionsInstrumentation) || void 0 === KT ? void 0 : KT.excludeItem;
          let yT;
          const fT = () => yT;
          return {
            startUserAction: (TT, lT, KT) => {
              if (void 0 === fT()) {
                const cT = new aM({
                  name: TT,
                  transports: kT,
                  attributes: lT,
                  trigger: (null === KT || void 0 === KT ? void 0 : KT.triggerName) || "faroApiCall",
                  importance: (null === KT || void 0 === KT ? void 0 : KT.importance) || SM.Normal,
                  trackUserActionsExcludeItem: OT,
                  pushEvent: MT
                });
                return cT.filter((TT => [3, 2].includes(TT))).first().subscribe((() => {
                  yT = void 0
                })), FM.notify({
                  type: QM,
                  userAction: cT,
                  initialActivityTimeout: null === KT || void 0 === KT ? void 0 : KT.initialActivityTimeout
                }), yT = cT, yT
              }
              cT.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: fT
          }
        }({
          transports: MT,
          config: cT,
          internalLogger: kT,
          pushEvent: (TT, cT, lT, MT) => {
            KT ? KT(TT, cT, lT, MT) : kT.warn("pushEventImpl is not initialized. Event dropped:", {
              name: TT,
              attributes: cT,
              domain: lT,
              options: MT
            })
          }
        }),
        yT = function(TT, kT, cT, lT, MT) {
          let KT;
          return kT.debug("Initializing traces API"), {
            getOTEL: () => KT,
            getTraceContext: () => {
              const TT = null === KT || void 0 === KT ? void 0 : KT.trace.getSpanContext(KT.context.active());
              return TT ? {
                trace_id: TT.traceId,
                span_id: TT.spanId
              } : void 0
            },
            initOTEL: (TT, cT) => {
              kT.debug("Initializing OpenTelemetry"), KT = {
                trace: TT,
                context: cT
              }
            },
            isOTELInitialized: () => !!KT,
            pushTraces: TT => {
              try {
                if (!Lk(lT).shouldCapture()) return;
                const cT = {
                  type: "trace",
                  payload: TT,
                  meta: ZK(lT)
                };
                kT.debug("Pushing trace\n", cT), MT.execute(cT)
              } catch (cT) {
                kT.error("Error pushing trace\n", cT)
              }
            }
          }
        }(0, kT, 0, lT, MT),
        fT = {
          unpatchedConsole: TT,
          internalLogger: kT,
          userActionsApi: OT,
          config: cT,
          metas: lT,
          transports: MT,
          tracesApi: yT
        },
        xT = function(TT) {
          let {
            internalLogger: kT,
            config: cT,
            metas: lT,
            transports: MT,
            tracesApi: KT,
            userActionsApi: OT
          } = TT, yT = null;
          return {
            pushEvent: function(TT, fT, xT) {
              let {
                skipDedupe: IT,
                spanContext: AT,
                timestampOverwriteMs: CT,
                customPayloadTransformer: jT = TT => TT
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Lk(lT).shouldCapture()) return;
                const vT = Zk(fT),
                  tT = jT({
                    name: TT,
                    domain: null !== xT && void 0 !== xT ? xT : cT.eventDomain,
                    attributes: BT(vT) ? void 0 : vT,
                    timestamp: CT ? tk(CT) : vk(),
                    trace: AT ? {
                      trace_id: AT.traceId,
                      span_id: AT.spanId
                    } : KT.getTraceContext()
                  }),
                  hT = {
                    name: tT.name,
                    attributes: tT.attributes,
                    domain: tT.domain
                  };
                if (!IT && cT.dedupe && !aT(yT) && Qk(hT, yT)) return void kT.debug("Skipping event push because it is the same as the last one\n", tT);
                const NT = yT,
                  QT = ZK(lT);
                if (yT !== NT && !IT && cT.dedupe && Qk(hT, yT)) return;
                yT = hT;
                const ST = {
                  meta: QT,
                  payload: tT,
                  type: "event"
                };
                kT.debug("Pushing event\n", ST), rM(OT.getActiveUserAction(), ST) || MT.execute(ST)
              } catch (vT) {
                kT.error("Error pushing event", vT)
              }
            }
          }
        }(fT);
      return KT = xT.pushEvent, sk(sk(sk(sk(sk(sk(sk({}, yT), nK(fT)), function(TT) {
        let kT, cT, lT, MT, {
          internalLogger: KT,
          metas: OT
        } = TT;
        KT.debug("Initializing meta API");
        const yT = TT => {
            cT && OT.remove(cT), cT = {
              user: TT
            }, OT.add(cT)
          },
          fT = (TT, cT) => {
            var lT;
            const MT = null === cT || void 0 === cT ? void 0 : cT.overrides,
              KT = MT ? {
                overrides: sk(sk({}, null === kT || void 0 === kT || null === (lT = kT.session) || void 0 === lT ? void 0 : lT.overrides), MT)
              } : {};
            kT && OT.remove(kT), kT = {
              session: sk(sk({}, BT(TT) ? void 0 : TT), KT)
            }, OT.add(kT)
          },
          xT = (TT, kT) => {
            Lk(OT).notifySessionUpdate({
              type: "replace",
              session: TT,
              overrides: null === kT || void 0 === kT ? void 0 : kT.overrides
            }), fT(TT, kT)
          },
          IT = () => OT.value.session,
          AT = () => OT.value.page;
        return {
          setUser: yT,
          resetUser: yT,
          setSession: xT,
          resetSession: xT,
          getSession: IT,
          setView: (TT, kT) => {
            var cT;
            if ((null === kT || void 0 === kT ? void 0 : kT.overrides) && (Lk(OT).notifySessionUpdate({
                type: "overrides",
                overrides: kT.overrides
              }), fT(IT(), {
                overrides: kT.overrides
              })), (null === lT || void 0 === lT || null === (cT = lT.view) || void 0 === cT ? void 0 : cT.name) === (null === TT || void 0 === TT ? void 0 : TT.name)) return;
            const MT = lT;
            lT = {
              view: TT
            }, OT.add(lT), MT && OT.remove(MT)
          },
          getView: () => OT.value.view,
          setPage: TT => {
            var kT;
            const cT = FT(TT) ? sk(sk({}, null !== (kT = null === MT || void 0 === MT ? void 0 : MT.page) && void 0 !== kT ? kT : AT()), {}, {
              id: TT
            }) : TT;
            MT && OT.remove(MT), MT = {
              page: cT
            }, OT.add(MT)
          },
          getPage: AT
        }
      }(fT)), function(TT) {
        let {
          internalLogger: kT,
          config: cT,
          metas: lT,
          transports: MT,
          tracesApi: KT,
          userActionsApi: OT
        } = TT;
        var yT;
        kT.debug("Initializing logs API");
        let fT = null;
        const xT = null !== (yT = cT.logArgsSerializer) && void 0 !== yT ? yT : Hc;
        return {
          pushLog: function(TT) {
            let {
              context: yT,
              level: IT,
              skipDedupe: AT,
              spanContext: CT,
              timestampOverwriteMs: jT
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Lk(lT).shouldCapture()) return;
              const vT = Zk(yT),
                tT = {
                  message: xT(TT),
                  level: null !== IT && void 0 !== IT ? IT : "log",
                  context: BT(vT) ? void 0 : vT,
                  timestamp: jT ? tk(jT) : vk(),
                  trace: CT ? {
                    trace_id: CT.traceId,
                    span_id: CT.spanId
                  } : KT.getTraceContext()
                },
                hT = {
                  message: tT.message,
                  level: tT.level,
                  context: tT.context
                };
              if (!AT && cT.dedupe && !aT(fT) && Qk(hT, fT)) return void kT.debug("Skipping log push because it is the same as the last one\n", tT);
              const NT = fT,
                QT = ZK(lT);
              if (fT !== NT && !AT && cT.dedupe && Qk(hT, fT)) return;
              fT = hT;
              const ST = {
                type: "log",
                payload: tT,
                meta: QT
              };
              kT.debug("Pushing log\n", ST), rM(OT.getActiveUserAction(), ST) || MT.execute(ST)
            } catch (vT) {
              kT.error("Error pushing log\n", vT)
            }
          }
        }
      }(fT)), function(TT) {
        let {
          internalLogger: kT,
          config: cT,
          metas: lT,
          transports: MT,
          tracesApi: KT,
          userActionsApi: OT
        } = TT;
        kT.debug("Initializing measurements API");
        let yT = null;
        return {
          pushMeasurement: function(TT) {
            let {
              skipDedupe: fT,
              context: xT,
              spanContext: IT,
              timestampOverwriteMs: AT
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Lk(lT).shouldCapture()) return;
              const CT = Zk(xT),
                jT = sk(sk({}, TT), {}, {
                  trace: IT ? {
                    trace_id: IT.traceId,
                    span_id: IT.spanId
                  } : KT.getTraceContext(),
                  timestamp: AT ? tk(AT) : vk(),
                  context: BT(CT) ? void 0 : CT
                }),
                vT = {
                  type: jT.type,
                  values: jT.values,
                  context: jT.context
                };
              if (!fT && cT.dedupe && !aT(yT) && Qk(vT, yT)) return void kT.debug("Skipping measurement push because it is the same as the last one\n", jT);
              const tT = yT,
                hT = ZK(lT);
              if (yT !== tT && !fT && cT.dedupe && Qk(vT, yT)) return;
              yT = vT;
              const NT = {
                type: "measurement",
                payload: jT,
                meta: hT
              };
              kT.debug("Pushing measurement\n", NT), rM(OT.getActiveUserAction(), NT) || MT.execute(NT)
            } catch (CT) {
              kT.error("Error pushing measurement\n", CT)
            }
          }
        }
      }(fT)), xT), OT)
    }

    function iK(TT) {
      const kT = UK(TT),
        cT = WK(kT, TT);
      if (vT() && !TT.isolate) return void cT.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      cT.debug("Initializing");
      const lT = function(TT, kT) {
          let cT, lT = [],
            MT = [],
            KT = [],
            OT = 0,
            yT = 0;
          const fT = () => lT.reduce(((TT, kT) => Object.assign(TT, zT(kT) ? kT() : kT)), {}),
            xT = () => {
              if (MT.length) {
                const TT = fT();
                MT.forEach((kT => kT(TT)))
              }
            };
          return {
            add: function() {
              for (var TT = arguments.length, cT = new Array(TT), MT = 0; MT < TT; MT++) cT[MT] = arguments[MT];
              kT.debug("Adding metas\n", cT), lT.push(...cT), xT()
            },
            remove: function() {
              for (var TT = arguments.length, cT = new Array(TT), MT = 0; MT < TT; MT++) cT[MT] = arguments[MT];
              kT.debug("Removing metas\n", cT), lT = lT.filter((TT => !cT.includes(TT))), xT()
            },
            addListener: TT => {
              kT.debug("Adding metas listener\n", TT), MT.push(TT)
            },
            removeListener: TT => {
              kT.debug("Removing metas listener\n", TT), MT = MT.filter((kT => kT !== TT))
            },
            capture: TT => {
              var kT;
              const lT = void 0 !== cT,
                MT = null !== (kT = cT) && void 0 !== kT ? kT : KT;
              lT || (cT = MT, OT = 0, yT = MT.length);
              try {
                for (; OT < yT;) {
                  const TT = MT[OT++];
                  null === TT || void 0 === TT || TT()
                }
                const kT = EK(fT());
                return null === TT || void 0 === TT || TT(), kT
              } finally {
                lT || (cT = void 0)
              }
            },
            addCaptureListener: TT => {
              KT.push(TT)
            },
            removeCaptureListener: TT => {
              KT = KT.filter((kT => kT !== TT))
            },
            get value() {
              return fT()
            }
          }
        }(0, cT),
        MT = LK(kT, cT, TT, lT),
        KT = pK(kT, cT, TT, lT, MT),
        OT = function(TT, kT, cT, lT, MT, KT) {
          kT.debug("Initializing instrumentations");
          const OT = [];
          return {
            add: function() {
              kT.debug("Adding instrumentations");
              for (var yT = arguments.length, fT = new Array(yT), xT = 0; xT < yT; xT++) fT[xT] = arguments[xT];
              fT.forEach((yT => {
                kT.debug(`Adding "${yT.name}" instrumentation`), OT.some((TT => TT.name === yT.name)) ? kT.warn(`Instrumentation ${yT.name} is already added`) : (yT.unpatchedConsole = TT, yT.internalLogger = kT, yT.config = cT, yT.metas = lT, yT.transports = MT, yT.api = KT, OT.push(yT), yT.initialize())
              }))
            },
            get instrumentations() {
              return [...OT]
            },
            remove: function() {
              kT.debug("Removing instrumentations");
              for (var TT = arguments.length, cT = new Array(TT), lT = 0; lT < TT; lT++) cT[lT] = arguments[lT];
              cT.forEach((TT => {
                var cT, lT;
                kT.debug(`Removing "${TT.name}" instrumentation`);
                const MT = OT.reduce(((kT, cT, lT) => null === kT && cT.name === TT.name ? lT : null), null);
                null !== MT ? (null === (cT = (lT = OT[MT]).destroy) || void 0 === cT || cT.call(lT), OT.splice(MT, 1)) : kT.warn(`Instrumentation "${TT.name}" is not added`)
              }))
            }
          }
        }(kT, cT, TT, lT, MT, KT),
        yT = hT(kT, cT, TT, lT, MT, KT, OT);
      return XK(yT),
        function(TT) {
          TT.transports.add(...TT.config.transports), TT.transports.addBeforeSendHooks(TT.config.beforeSend)
        }(yT),
        function(TT) {
          TT.instrumentations.add(...TT.config.instrumentations)
        }(yT), yT
    }

    function qK(TT) {
      const kT = oK(TT);
      if (kT) return iK(kT)
    }
  },
  6684: function(TT, kT, cT) {
    var lT;
    ! function(MT, KT) {
      var OT = "function",
        yT = "undefined",
        fT = "object",
        xT = "string",
        IT = "major",
        AT = "model",
        CT = "name",
        jT = "type",
        vT = "vendor",
        tT = "version",
        hT = "architecture",
        NT = "console",
        QT = "mobile",
        ST = "tablet",
        DT = "smarttv",
        aT = "wearable",
        FT = "embedded",
        rT = "Amazon",
        PT = "Apple",
        wT = "ASUS",
        mT = "BlackBerry",
        bT = "Browser",
        zT = "Chrome",
        JT = "Firefox",
        oT = "Google",
        HT = "Honor",
        eT = "Huawei",
        GT = "LG",
        VT = "Microsoft",
        ET = "Motorola",
        ZT = "Nvidia",
        uT = "OnePlus",
        XT = "Opera",
        dT = "OPPO",
        LT = "Samsung",
        RT = "Sharp",
        gT = "Sony",
        UT = "Xiaomi",
        YT = "Zebra",
        BT = "Facebook",
        WT = "Chromium OS",
        nT = "Mac OS",
        pT = " Browser",
        iT = function(TT) {
          for (var kT = {}, cT = 0; cT < TT.length; cT++) kT[TT[cT].toUpperCase()] = TT[cT];
          return kT
        },
        qT = function(TT, kT) {
          return typeof TT === xT && -1 !== sT(kT).indexOf(sT(TT))
        },
        sT = function(TT) {
          return TT.toLowerCase()
        },
        Tk = function(TT, kT) {
          if (typeof TT === xT) return TT = TT.replace(/^\s\s*/, ""), typeof kT === yT ? TT : TT.substring(0, 500)
        },
        kk = function(TT, kT) {
          for (var cT, lT, MT, yT, xT, IT, AT = 0; AT < kT.length && !xT;) {
            var CT = kT[AT],
              jT = kT[AT + 1];
            for (cT = lT = 0; cT < CT.length && !xT && CT[cT];)
              if (xT = CT[cT++].exec(TT))
                for (MT = 0; MT < jT.length; MT++) IT = xT[++lT], typeof(yT = jT[MT]) === fT && yT.length > 0 ? 2 === yT.length ? typeof yT[1] == OT ? this[yT[0]] = yT[1].call(this, IT) : this[yT[0]] = yT[1] : 3 === yT.length ? typeof yT[1] !== OT || yT[1].exec && yT[1].test ? this[yT[0]] = IT ? IT.replace(yT[1], yT[2]) : KT : this[yT[0]] = IT ? yT[1].call(this, IT, yT[2]) : KT : 4 === yT.length && (this[yT[0]] = IT ? yT[3].call(this, IT.replace(yT[1], yT[2])) : KT) : this[yT] = IT || KT;
            AT += 2
          }
        },
        ck = function(TT, kT) {
          for (var cT in kT)
            if (typeof kT[cT] === fT && kT[cT].length > 0) {
              for (var lT = 0; lT < kT[cT].length; lT++)
                if (qT(kT[cT][lT], TT)) return "?" === cT ? KT : cT
            } else if (qT(kT[cT], TT)) return "?" === cT ? KT : cT;
          return kT.hasOwnProperty("*") ? kT["*"] : TT
        },
        lk = {
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
        Mk = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [tT, [CT, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [tT, [CT, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [CT, tT],
            [/opios[\/ ]+([\w\.]+)/i],
            [tT, [CT, XT + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [tT, [CT, XT + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [tT, [CT, XT]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [tT, [CT, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [tT, [CT, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [CT, tT],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [tT, [CT, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [tT, [CT, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [tT, [CT, "UC" + bT]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [tT, [CT, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [tT, [CT, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [tT, [CT, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [tT, [CT, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [tT, [CT, "Smart Lenovo " + bT]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [CT, /(.+)/, "$1 Secure " + bT], tT
            ],
            [/\bfocus\/([\w\.]+)/i],
            [tT, [CT, JT + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [tT, [CT, XT + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [tT, [CT, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [tT, [CT, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [tT, [CT, XT + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [tT, [CT, "MIUI" + pT]],
            [/fxios\/([\w\.-]+)/i],
            [tT, [CT, JT]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [tT, [CT, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [CT, /(.+)/, "$1Browser"], tT
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [CT, /(.+)/, "$1" + pT], tT
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [tT, [CT, LT + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [tT, [CT, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [CT, "Sogou Mobile"], tT
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [CT, tT],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [CT],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [tT, CT],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [CT, BT], tT
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [CT, tT],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [tT, [CT, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [tT, [CT, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [tT, [CT, zT + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [CT, zT + " WebView"], tT
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [tT, [CT, "Android " + bT]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [CT, tT],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [tT, [CT, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [tT, CT],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [CT, [tT, ck, {
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
            [CT, tT],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [CT, "Netscape"], tT
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [CT, tT],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [tT, [CT, JT + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [CT, [tT, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [CT, [tT, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [hT, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [hT, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [hT, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [hT, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [hT, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [hT, /ower/, "", sT]
            ],
            [/ sun4\w[;\)]/i],
            [
              [hT, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [hT, sT]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [AT, [vT, LT],
              [jT, ST]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [AT, [vT, LT],
              [jT, QT]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [AT, [vT, PT],
              [jT, QT]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [AT, [vT, PT],
              [jT, ST]
            ],
            [/(macintosh);/i],
            [AT, [vT, PT]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [AT, [vT, RT],
              [jT, QT]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [AT, [vT, HT],
              [jT, ST]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [AT, [vT, HT],
              [jT, QT]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [AT, [vT, eT],
              [jT, ST]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [AT, [vT, eT],
              [jT, QT]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [AT, /_/g, " "],
              [vT, UT],
              [jT, ST]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [AT, /_/g, " "],
              [vT, UT],
              [jT, QT]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [AT, [vT, dT],
              [jT, QT]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [AT, [vT, ck, {
                OnePlus: ["304", "403", "203"],
                "*": dT
              }],
              [jT, ST]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [AT, [vT, "Vivo"],
              [jT, QT]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [AT, [vT, "Realme"],
              [jT, QT]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [AT, [vT, ET],
              [jT, QT]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [AT, [vT, ET],
              [jT, ST]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [AT, [vT, GT],
              [jT, ST]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [AT, [vT, GT],
              [jT, QT]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [AT, [vT, "Lenovo"],
              [jT, ST]
            ],
            [/(nokia) (t[12][01])/i],
            [vT, AT, [jT, ST]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [AT, /_/g, " "],
              [jT, QT],
              [vT, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [AT, [vT, oT],
              [jT, ST]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [AT, [vT, oT],
              [jT, QT]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [AT, [vT, gT],
              [jT, QT]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [AT, "Xperia Tablet"],
              [vT, gT],
              [jT, ST]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [AT, [vT, uT],
              [jT, QT]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [AT, [vT, rT],
              [jT, ST]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [AT, /(.+)/g, "Fire Phone $1"],
              [vT, rT],
              [jT, QT]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [AT, vT, [jT, ST]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [AT, [vT, mT],
              [jT, QT]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [AT, [vT, wT],
              [jT, ST]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [AT, [vT, wT],
              [jT, QT]
            ],
            [/(nexus 9)/i],
            [AT, [vT, "HTC"],
              [jT, ST]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [vT, [AT, /_/g, " "],
              [jT, QT]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [AT, [vT, "TCL"],
              [jT, ST]
            ],
            [/(itel) ((\w+))/i],
            [
              [vT, sT], AT, [jT, ck, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [AT, [vT, "Acer"],
              [jT, ST]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [AT, [vT, "Meizu"],
              [jT, QT]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [AT, [vT, "Ulefone"],
              [jT, QT]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [AT, [vT, "Energizer"],
              [jT, QT]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [AT, [vT, "Cat"],
              [jT, QT]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [AT, [vT, "Smartfren"],
              [jT, QT]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [AT, [vT, "Nothing"],
              [jT, QT]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [AT, [vT, "Archos"],
              [jT, ST]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [AT, [vT, "Archos"],
              [jT, QT]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [vT, AT, [jT, ST]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [vT, AT, [jT, QT]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [vT, AT, [jT, ST]],
            [/(surface duo)/i],
            [AT, [vT, VT],
              [jT, ST]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [AT, [vT, "Fairphone"],
              [jT, QT]
            ],
            [/(u304aa)/i],
            [AT, [vT, "AT&T"],
              [jT, QT]
            ],
            [/\bsie-(\w*)/i],
            [AT, [vT, "Siemens"],
              [jT, QT]
            ],
            [/\b(rct\w+) b/i],
            [AT, [vT, "RCA"],
              [jT, ST]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [AT, [vT, "Dell"],
              [jT, ST]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [AT, [vT, "Verizon"],
              [jT, ST]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [AT, [vT, "Barnes & Noble"],
              [jT, ST]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [AT, [vT, "NuVision"],
              [jT, ST]
            ],
            [/\b(k88) b/i],
            [AT, [vT, "ZTE"],
              [jT, ST]
            ],
            [/\b(nx\d{3}j) b/i],
            [AT, [vT, "ZTE"],
              [jT, QT]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [AT, [vT, "Swiss"],
              [jT, QT]
            ],
            [/\b(zur\d{3}) b/i],
            [AT, [vT, "Swiss"],
              [jT, ST]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [AT, [vT, "Zeki"],
              [jT, ST]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [vT, "Dragon Touch"], AT, [jT, ST]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [AT, [vT, "Insignia"],
              [jT, ST]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [AT, [vT, "NextBook"],
              [jT, ST]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [vT, "Voice"], AT, [jT, QT]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [vT, "LvTel"], AT, [jT, QT]
            ],
            [/\b(ph-1) /i],
            [AT, [vT, "Essential"],
              [jT, QT]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [AT, [vT, "Envizen"],
              [jT, ST]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [AT, [vT, "MachSpeed"],
              [jT, ST]
            ],
            [/\btu_(1491) b/i],
            [AT, [vT, "Rotor"],
              [jT, ST]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [AT, [vT, ZT],
              [jT, ST]
            ],
            [/(sprint) (\w+)/i],
            [vT, AT, [jT, QT]],
            [/(kin\.[onetw]{3})/i],
            [
              [AT, /\./g, " "],
              [vT, VT],
              [jT, QT]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [AT, [vT, YT],
              [jT, ST]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [AT, [vT, YT],
              [jT, QT]
            ],
            [/smart-tv.+(samsung)/i],
            [vT, [jT, DT]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [AT, /^/, "SmartTV"],
              [vT, LT],
              [jT, DT]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [vT, GT],
              [jT, DT]
            ],
            [/(apple) ?tv/i],
            [vT, [AT, PT + " TV"],
              [jT, DT]
            ],
            [/crkey/i],
            [
              [AT, zT + "cast"],
              [vT, oT],
              [jT, DT]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [AT, [vT, rT],
              [jT, DT]
            ],
            [/(shield \w+ tv)/i],
            [AT, [vT, ZT],
              [jT, DT]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [AT, [vT, RT],
              [jT, DT]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [AT, [vT, gT],
              [jT, DT]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [AT, [vT, UT],
              [jT, DT]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [vT, AT, [jT, DT]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [vT, Tk],
              [AT, Tk],
              [jT, DT]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [AT, [jT, DT]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [jT, DT]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [vT, AT, [jT, NT]],
            [/droid.+; (shield)( bui|\))/i],
            [AT, [vT, ZT],
              [jT, NT]
            ],
            [/(playstation \w+)/i],
            [AT, [vT, gT],
              [jT, NT]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [AT, [vT, VT],
              [jT, NT]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [AT, [vT, LT],
              [jT, aT]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [vT, AT, [jT, aT]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [AT, [vT, dT],
              [jT, aT]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [AT, [vT, PT],
              [jT, aT]
            ],
            [/(opwwe\d{3})/i],
            [AT, [vT, uT],
              [jT, aT]
            ],
            [/(moto 360)/i],
            [AT, [vT, ET],
              [jT, aT]
            ],
            [/(smartwatch 3)/i],
            [AT, [vT, gT],
              [jT, aT]
            ],
            [/(g watch r)/i],
            [AT, [vT, GT],
              [jT, aT]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [AT, [vT, YT],
              [jT, aT]
            ],
            [/droid.+; (glass) \d/i],
            [AT, [vT, oT],
              [jT, aT]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [vT, AT, [jT, aT]],
            [/; (quest( \d| pro)?)/i],
            [AT, [vT, BT],
              [jT, aT]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [vT, [jT, FT]],
            [/(aeobc)\b/i],
            [AT, [vT, rT],
              [jT, FT]
            ],
            [/(homepod).+mac os/i],
            [AT, [vT, PT],
              [jT, FT]
            ],
            [/windows iot/i],
            [
              [jT, FT]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [AT, [jT, QT]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [AT, [jT, ST]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [jT, ST]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [jT, QT]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [AT, [vT, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [tT, [CT, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [CT, tT],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [tT, [CT, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [CT, tT],
            [/ladybird\//i],
            [
              [CT, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [tT, CT]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [CT, tT],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [CT, [tT, ck, lk]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [tT, ck, lk],
              [CT, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [tT, /_/g, "."],
              [CT, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [CT, nT],
              [tT, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [tT, CT],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [CT, /(.+)/, "$1 Touch"], tT
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [CT, tT],
            [/\(bb(10);/i],
            [tT, [CT, mT]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [tT, [CT, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [tT, [CT, JT + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [tT, [CT, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [tT, [CT, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [tT, [CT, zT + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [CT, WT], tT
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [CT, tT],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [CT, "Solaris"], tT
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [CT, tT]
          ]
        },
        Kk = function(TT, kT) {
          if (typeof TT === fT && (kT = TT, TT = KT), !(this instanceof Kk)) return new Kk(TT, kT).getResult();
          var cT = typeof MT !== yT && MT.navigator ? MT.navigator : KT,
            lT = TT || (cT && cT.userAgent ? cT.userAgent : ""),
            NT = cT && cT.userAgentData ? cT.userAgentData : KT,
            DT = kT ? function(TT, kT) {
              var cT = {};
              for (var lT in TT) kT[lT] && kT[lT].length % 2 === 0 ? cT[lT] = kT[lT].concat(TT[lT]) : cT[lT] = TT[lT];
              return cT
            }(Mk, kT) : Mk,
            aT = cT && cT.userAgent == lT;
          return this.getBrowser = function() {
            var TT, kT = {};
            return kT[CT] = KT, kT[tT] = KT, kk.call(kT, lT, DT.browser), kT[IT] = typeof(TT = kT[tT]) === xT ? TT.replace(/[^\d\.]/g, "").split(".")[0] : KT, aT && cT && cT.brave && typeof cT.brave.isBrave == OT && (kT[CT] = "Brave"), kT
          }, this.getCPU = function() {
            var TT = {};
            return TT[hT] = KT, kk.call(TT, lT, DT.cpu), TT
          }, this.getDevice = function() {
            var TT = {};
            return TT[vT] = KT, TT[AT] = KT, TT[jT] = KT, kk.call(TT, lT, DT.device), aT && !TT[jT] && NT && NT.mobile && (TT[jT] = QT), aT && "Macintosh" == TT[AT] && cT && typeof cT.standalone !== yT && cT.maxTouchPoints && cT.maxTouchPoints > 2 && (TT[AT] = "iPad", TT[jT] = ST), TT
          }, this.Dv = function() {
            var TT = {};
            return TT[CT] = KT, TT[tT] = KT, kk.call(TT, lT, DT.engine), TT
          }, this.getOS = function() {
            var TT = {};
            return TT[CT] = KT, TT[tT] = KT, kk.call(TT, lT, DT.os), aT && !TT[CT] && NT && NT.platform && "Unknown" != NT.platform && (TT[CT] = NT.platform.replace(/chrome os/i, WT).replace(/macos/i, nT)), TT
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Dv(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return lT
          }, this.setUA = function(TT) {
            return lT = typeof TT === xT && TT.length > 500 ? Tk(TT, 500) : TT, this
          }, this.setUA(lT), this
        };
      Kk.VERSION = "1.0.41", Kk.BROWSER = iT([CT, tT, IT]), Kk.CPU = iT([hT]), Kk.DEVICE = iT([AT, vT, jT, NT, QT, DT, ST, aT, FT]), Kk.ENGINE = Kk.OS = iT([CT, tT]), typeof kT !== yT ? (TT.exports && (kT = TT.exports = Kk), kT.UAParser = Kk) : cT.amdO ? (lT = function() {
        return Kk
      }.call(kT, cT, kT, TT)) === KT || (TT.exports = lT) : typeof MT !== yT && (MT.UAParser = Kk);
      var Ok = typeof MT !== yT && (MT.jQuery || MT.Zepto);
      if (Ok && !Ok.ua) {
        var yk = new Kk;
        Ok.ua = yk.getResult(), Ok.ua.get = function() {
          return yk.getUA()
        }, Ok.ua.set = function(TT) {
          yk.setUA(TT);
          var kT = yk.getResult();
          for (var cT in kT) Ok.ua[cT] = kT[cT]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);