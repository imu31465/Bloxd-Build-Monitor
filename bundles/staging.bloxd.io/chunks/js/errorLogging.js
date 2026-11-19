export const id = 31;
export const ids = [31];
export const modules = {
  6191: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BaseExtension: () => II,
      BaseInstrumentation: () => iI,
      BaseTransport: () => Ik,
      CSPInstrumentation: () => fz,
      ConsoleInstrumentation: () => aI,
      ConsoleTransport: () => Xk,
      EVENT_CLICK: () => go,
      EVENT_NAVIGATION: () => ho,
      EVENT_ROUTE_CHANGE: () => vo,
      EVENT_SESSION_EXTEND: () => Ro,
      EVENT_SESSION_RESUME: () => eo,
      EVENT_SESSION_START: () => mo,
      EVENT_VIEW_CHANGED: () => wo,
      ErrorsInstrumentation: () => QI,
      FetchTransport: () => uk,
      InternalLoggerLevel: () => Go,
      LogLevel: () => wI,
      MAX_SESSION_PERSISTENCE_TIME: () => BT,
      NavigationInstrumentation: () => tz,
      Observable: () => hI,
      PerformanceInstrumentation: () => Pi,
      PersistentSessionsManager: () => Oo,
      SESSION_EXPIRATION_TIME: () => kT,
      SESSION_INACTIVITY_TIME: () => WT,
      STORAGE_KEY: () => zT,
      SessionInstrumentation: () => kI,
      TransportItemType: () => ik,
      UserActionInstrumentation: () => Ez,
      UserActionState: () => Az,
      VERSION: () => zI,
      ViewInstrumentation: () => HI,
      VolatileSessionsManager: () => Ho,
      WebVitalsInstrumentation: () => Qi,
      allLogLevels: () => eI,
      browserMeta: () => Pz,
      buildStackFrame: () => WI,
      captureMetas: () => Zk,
      createInternalLogger: () => jk,
      createPromiseBuffer: () => rk,
      createSession: () => Vz,
      deepEqual: () => Ao,
      defaultEventDomain: () => iT,
      defaultExceptionType: () => EI,
      defaultGlobalObjectKey: () => Jk,
      defaultInternalLoggerLevel: () => bo,
      defaultLogLevel: () => mI,
      faro: () => KT,
      genShortID: () => ro,
      getCurrentTimestamp: () => co,
      getDataFromSafariExtensions: () => cI,
      getIgnoreUrls: () => bT,
      getInternalFaroFromGlobalObject: () => LT,
      getStackFramesFromError: () => MI,
      getTransportBody: () => Wk,
      getUrlFromResource: () => NT,
      getWebInstrumentations: () => Gz,
      globalObject: () => ST,
      initializeFaro: () => IW,
      internalGlobalObjectKey: () => DT,
      isArray: () => CT,
      isBoolean: () => uT,
      isDomError: () => nT,
      isDomException: () => qT,
      isElement: () => lT,
      isElementDefined: () => ZT,
      Mc: () => pT,
      isError: () => OT,
      isErrorDefined: () => QT,
      isErrorEvent: () => HT,
      isEvent: () => YT,
      isEventDefined: () => aT,
      isFunction: () => fT,
      isInstanceOf: () => gT,
      isInt: () => RT,
      isInternalFaroOnGlobalObject: () => cT,
      isMap: () => tT,
      isMapDefined: () => sT,
      isNull: () => wT,
      isNumber: () => eT,
      isObject: () => ET,
      isPrimitive: () => UT,
      isRegExp: () => jT,
      isString: () => mT,
      isSymbol: () => vT,
      isSyntheticEvent: () => GT,
      isThenable: () => JT,
      isToString: () => AT,
      isTypeof: () => rT,
      isUndefined: () => hT,
      makeCoreConfig: () => Yk,
      noop: () => to,
      osMeta: () => dz,
      parseStacktrace: () => rI,
      sdkMeta: () => Tk,
      setInternalFaroOnGlobalObject: () => xT,
      transportItemTypeToBodyKey: () => zk,
      unknownString: () => OI,
      userActionDataAttribute: () => di,
      userActionTimeoutDataAttribute: () => Vi
    });
    const iT = "browser",
      zT = "com.grafana.faro.session",
      kT = 144e5,
      WT = 9e5,
      XT = 1e3,
      BT = WT,
      FT = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: BT
      };
    const ST = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof IT.g ? IT.g : "undefined" !== typeof self ? self : void 0;
    const DT = "_faroInternal";

    function LT() {
      return ST[DT]
    }

    function xT(TT) {
      TT.config.isolate ? TT.internalLogger.debug("Skipping registering internal Faro instance on global object") : (TT.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(ST, DT, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: TT
      }))
    }

    function cT() {
      return DT in ST
    }
    let KT = {
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

    function MT(TT, oT, IT, iT, zT, kT, WT) {
      return oT.debug("Initializing Faro"), KT = {
          api: kT,
          config: IT,
          instrumentations: WT,
          internalLogger: oT,
          metas: iT,
          pause: zT.pause,
          transports: zT,
          unpatchedConsole: TT,
          unpause: zT.unpause
        }, xT(KT),
        function(TT) {
          if (TT.config.preventGlobalExposure) TT.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (TT.internalLogger.debug(`Registering public faro reference in the global scope using "${TT.config.globalObjectKey}" key`), TT.config.globalObjectKey in ST) return void TT.internalLogger.warn(`Skipping global registration due to key "${TT.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(ST, TT.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: TT
            })
          }
        }(KT), KT
    }

    function rT(TT, oT) {
      return typeof TT === oT
    }

    function AT(TT, oT) {
      return Object.prototype.toString.call(TT) === `[object ${oT}]`
    }

    function gT(TT, oT) {
      try {
        return TT instanceof oT
      } catch (IT) {
        return !1
      }
    }
    const hT = TT => rT(TT, "undefined"),
      wT = TT => rT(TT, "null"),
      mT = TT => rT(TT, "string"),
      eT = TT => rT(TT, "number") && !isNaN(TT) || rT(TT, "bigint"),
      RT = TT => eT(TT) && Number.isInteger(TT),
      uT = TT => rT(TT, "boolean"),
      vT = TT => rT(TT, "symbol"),
      ET = TT => !wT(TT) && rT(TT, "object"),
      fT = TT => rT(TT, "function"),
      CT = TT => AT(TT, "Array"),
      jT = TT => AT(TT, "RegExp"),
      JT = TT => fT(null === TT || void 0 === TT ? void 0 : TT.then),
      UT = TT => !ET(TT) && !fT(TT),
      aT = "undefined" !== typeof Event,
      YT = TT => aT && gT(TT, Event),
      QT = "undefined" !== typeof Error,
      OT = TT => QT && gT(TT, Error),
      HT = TT => AT(TT, "ErrorEvent"),
      nT = TT => AT(TT, "DOMError"),
      qT = TT => AT(TT, "DOMException"),
      ZT = "undefined" !== typeof Element,
      lT = TT => ZT && gT(TT, Element),
      sT = "undefined" !== typeof Map,
      tT = TT => sT && gT(TT, Map),
      GT = TT => ET(TT) && "nativeEvent" in TT && "preventDefault" in TT && "stopPropagation" in TT;

    function pT(TT) {
      return null == TT || (CT(TT) || mT(TT) ? 0 === TT.length : !!ET(TT) && 0 === Object.keys(TT).length)
    }

    function bT() {
      return KT.transports.transports.flatMap((TT => TT.getIgnoreUrls()))
    }

    function yT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return bT().some((oT => TT && null != TT.match(oT)))
    }

    function NT(TT) {
      return mT(TT) ? TT : TT instanceof URL ? TT.href : !pT(TT) && fT(null === TT || void 0 === TT ? void 0 : TT.toString) ? TT.toString() : void 0
    }
    const PT = "sessionStorage",
      dT = "localStorage";

    function VT(TT) {
      try {
        let oT;
        oT = window[TT];
        const IT = "__faro_storage_test__";
        return oT.setItem(IT, IT), oT.removeItem(IT), !0
      } catch (IT) {
        var oT;
        return null === (oT = KT.internalLogger) || void 0 === oT || oT.info(`Web storage of type ${TT} is not available. Reason: ${IT}`), !1
      }
    }

    function To(TT, oT) {
      return ko(oT) ? window[oT].getItem(TT) : null
    }

    function oo(TT, oT, IT) {
      if (ko(IT)) try {
        window[IT].setItem(TT, oT)
      } catch (iT) {}
    }

    function Io(TT, oT) {
      ko(oT) && window[oT].removeItem(TT)
    }
    const io = VT(dT),
      zo = VT(PT);

    function ko(TT) {
      return TT === dT ? io : TT === PT && zo
    }

    function Wo(TT) {
      return Wo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Wo(TT)
    }

    function Xo(TT) {
      var oT = function(TT, oT) {
        if ("object" != Wo(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != Wo(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == Wo(oT) ? oT : oT + ""
    }

    function Bo(TT, oT, IT) {
      return (oT = Xo(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Fo(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function So(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? Fo(Object(IT), !0).forEach((function(oT) {
          Bo(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : Fo(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function Do() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KT;
      var oT, IT, iT;
      const zT = TT.config.sessionTracking,
        kT = null !== (oT = null !== (IT = null === zT || void 0 === zT || null === (iT = zT.sampler) || void 0 === iT ? void 0 : iT.call(zT, {
          metas: TT.metas.value
        })) && void 0 !== IT ? IT : null === zT || void 0 === zT ? void 0 : zT.samplingRate) && void 0 !== oT ? oT : 1,
        WT = "number" === typeof kT ? function(TT) {
          return Math.min(1, Math.max(0, TT))
        }(kT) : 0;
      if (!(WT > 0)) return !1;
      if (1 === WT) return !0;
      try {
        const TT = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === TT || void 0 === TT ? void 0 : TT.getRandomValues)) {
          const oT = new Uint32Array(1);
          return TT.getRandomValues(oT), oT[0] / Math.pow(2, 32) < WT
        }
      } catch (XT) {}
      return Math.random() < WT
    }

    function Lo() {
      return Date.now()
    }

    function xo() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function co() {
      return (new Date).toISOString()
    }

    function Ko(TT) {
      return new Date(TT).toISOString()
    }
    const Mo = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function ro() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const oT = new Uint32Array(TT),
        IT = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === IT || void 0 === IT ? void 0 : IT.getRandomValues) IT.getRandomValues(oT);
      else
        for (let zT = 0; zT < TT; zT++) oT[zT] = Math.floor(4294967296 * Math.random());
      let iT = "";
      for (let zT = 0; zT < TT; zT++) iT += Mo[oT[zT] % 59];
      return iT
    }

    function Ao(TT, oT) {
      if (TT === oT) return !0;
      if (rT(TT, "number") && isNaN(TT)) return rT(oT, "number") && isNaN(oT);
      const IT = CT(TT),
        iT = CT(oT);
      if (IT !== iT) return !1;
      if (IT && iT) {
        const IT = TT.length;
        if (IT !== oT.length) return !1;
        for (let iT = IT; 0 !== iT--;)
          if (!Ao(TT[iT], oT[iT])) return !1;
        return !0
      }
      const zT = ET(TT),
        kT = ET(oT);
      if (zT !== kT) return !1;
      if (TT && oT && zT && kT) {
        const IT = Object.keys(TT),
          iT = Object.keys(oT);
        if (IT.length !== iT.length) return !1;
        for (let TT of IT)
          if (!iT.includes(TT)) return !1;
        for (let zT of IT)
          if (!Ao(TT[zT], oT[zT])) return !1;
        return !0
      }
      return !1
    }
    const go = "click",
      ho = "navigation",
      wo = "view_changed",
      mo = "session_start",
      eo = "session_resume",
      Ro = "session_extend",
      uo = "service_name_override",
      vo = "route_change";

    function Eo() {
      let {
        sessionId: TT,
        started: oT,
        lastActivity: IT,
        isSampled: iT = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, zT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KT;
      var kT;
      const WT = Lo(),
        XT = null === (kT = zT.config) || void 0 === kT || null === (kT = kT.sessionTracking) || void 0 === kT ? void 0 : kT.generateSessionId;
      return null == TT && (TT = "function" === typeof XT ? XT() : ro()), {
        sessionId: TT,
        lastActivity: null !== IT && void 0 !== IT ? IT : WT,
        started: null !== oT && void 0 !== oT ? oT : WT,
        isSampled: iT
      }
    }

    function fo(TT) {
      if (null == TT) return !1;
      const oT = Lo();
      return oT - TT.started < 144e5 && oT - TT.lastActivity < WT
    }

    function Co(TT) {
      let {
        fetchUserSession: oT,
        storeUserSession: IT,
        adoptSession: iT,
        updateInterval: zT = 0
      } = TT, XT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KT, BT = 0;
      return function() {
        let {
          forceSessionExtend: TT = !1,
          refreshActivity: FT = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var ST, DT;
        if (!oT || !IT) return;
        const LT = Lo();
        if (!TT && LT < BT && BT - LT <= zT) return;
        const xT = XT.config.sessionTracking,
          cT = null === xT || void 0 === xT ? void 0 : xT.persistent;
        if (cT && !io || !cT && !zo) return;
        const KT = oT();
        if (BT = Math.min(LT + zT, (null !== (ST = null === KT || void 0 === KT ? void 0 : KT.started) && void 0 !== ST ? ST : LT) + kT, (null !== (DT = null === KT || void 0 === KT ? void 0 : KT.lastActivity) && void 0 !== DT ? DT : LT) + WT), !1 === TT && fo(KT)) {
          var MT;
          FT && IT(So(So({}, KT), {}, {
            lastActivity: LT
          }));
          const TT = null === (MT = XT.metas.value.session) || void 0 === MT ? void 0 : MT.id;
          null != iT && null != KT.sessionMeta && KT.sessionId !== TT && iT(KT.sessionMeta)
        } else {
          var rT, AT, gT;
          let TT = Jo(Eo({
            isSampled: Do(XT)
          }, XT), KT, XT);
          BT = LT + zT, IT(TT), null === (rT = XT.api) || void 0 === rT || rT.setSession(TT.sessionMeta), null === xT || void 0 === xT || null === (AT = xT.onSessionChange) || void 0 === AT || AT.call(xT, null !== (gT = null === KT || void 0 === KT ? void 0 : KT.sessionMeta) && void 0 !== gT ? gT : null, TT.sessionMeta)
        }
      }
    }

    function jo(TT) {
      let oT, {
          fetchUserSession: IT,
          storeUserSession: iT,
          updateInterval: zT = 0
        } = TT,
        kT = 0;
      return TT => {
        const WT = Lo();
        if (TT === oT && WT < kT && kT - WT <= zT) return;
        oT = TT, kT = WT + zT;
        const XT = IT();
        (null === XT || void 0 === XT ? void 0 : XT.sessionId) === TT && fo(XT) && iT(So(So({}, XT), {}, {
          lastActivity: WT
        }))
      }
    }

    function Jo(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KT;
      var iT, zT, kT, WT, XT, BT;
      const FT = So(So({}, TT), {}, {
          sessionMeta: {
            id: TT.sessionId,
            attributes: ao(So(So(So({}, null === (iT = IT.config.sessionTracking) || void 0 === iT || null === (iT = iT.session) || void 0 === iT ? void 0 : iT.attributes), null !== (zT = null === (kT = IT.metas.value.session) || void 0 === kT ? void 0 : kT.attributes) && void 0 !== zT ? zT : {}), {}, {
              isSampled: TT.isSampled.toString()
            }))
          }
        }),
        ST = null !== (WT = null === (XT = IT.metas.value.session) || void 0 === XT ? void 0 : XT.overrides) && void 0 !== WT ? WT : null === oT || void 0 === oT || null === (BT = oT.sessionMeta) || void 0 === BT ? void 0 : BT.overrides;
      pT(ST) || (FT.sessionMeta.overrides = ST);
      const DT = null === oT || void 0 === oT ? void 0 : oT.sessionId;
      return null != DT && (FT.sessionMeta.attributes.previousSession = DT), FT
    }

    function Uo(TT) {
      let {
        fetchUserSession: oT,
        storeUserSession: IT
      } = TT, iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KT, zT = !1;
      return function(TT) {
        if (zT) return;
        const kT = TT.session,
          WT = oT();
        let XT = null === kT || void 0 === kT ? void 0 : kT.id;
        const BT = null === kT || void 0 === kT ? void 0 : kT.attributes,
          FT = null === kT || void 0 === kT ? void 0 : kT.overrides,
          ST = null === WT || void 0 === WT ? void 0 : WT.sessionMeta,
          DT = null === ST || void 0 === ST ? void 0 : ST.overrides,
          LT = !!FT && !Ao(FT, DT),
          xT = !!BT && !Ao(BT, null === ST || void 0 === ST ? void 0 : ST.attributes);
        if (kT && XT !== (null === WT || void 0 === WT ? void 0 : WT.sessionId) || xT || LT) {
          var cT, KT;
          const TT = null != WT && XT === WT.sessionId,
            oT = Jo(TT ? WT : Eo({
              sessionId: XT,
              isSampled: Do(iT)
            }, iT), WT, iT),
            kT = null === WT || void 0 === WT || null === (cT = WT.sessionMeta) || void 0 === cT || null === (cT = cT.attributes) || void 0 === cT ? void 0 : cT.previousSession;
          TT && null != kT && kT !== oT.sessionId && (oT.sessionMeta.attributes.previousSession = kT), (null === (KT = oT.sessionMeta.attributes) || void 0 === KT ? void 0 : KT.previousSession) === oT.sessionId && delete oT.sessionMeta.attributes.previousSession, IT(oT),
            function(TT, oT) {
              let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var zT, kT, WT;
              if (!oT) return;
              const XT = IT.serviceName,
                BT = null !== (zT = null !== (kT = iT.serviceName) && void 0 !== kT ? kT : null === (WT = TT.metas.value.app) || void 0 === WT ? void 0 : WT.name) && void 0 !== zT ? zT : "";
              XT && XT !== BT && TT.api.pushEvent(uo, {
                serviceName: XT,
                previousServiceName: BT
              })
            }(iT, LT, FT, DT), zT = !0;
          try {
            iT.api.setSession(oT.sessionMeta)
          } finally {
            zT = !1
          }
        }
      }
    }

    function ao(TT) {
      const oT = {};
      for (const IT of Object.keys(TT)) {
        const iT = TT[IT];
        void 0 !== iT && (oT[IT] = iT)
      }
      return oT
    }

    function Yo() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== TT && void 0 !== TT ? TT : {}, function() {
        const TT = new WeakSet;
        return function(oT, IT) {
          if (ET(IT) && null !== IT) {
            if (TT.has(IT)) return null;
            TT.add(IT)
          }
          return IT
        }
      }())
    }

    function Qo() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const oT = {};
      for (const [IT, iT] of Object.entries(TT)) oT[IT] = ET(iT) && null !== iT ? Yo(iT) : String(iT);
      return oT
    }
    var Oo = class TT {
      constructor() {
        var oT = this;
        let IT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KT;
        this.context = IT, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = TT => {
          this.adopting = !0;
          try {
            var oT;
            null === (oT = this.context.api) || void 0 === oT || oT.setSession(TT)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: TT = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return oT.updateUserSession({
            refreshActivity: TT
          })
        }, this.recordActivity = jo({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: XT
        }), this.updateUserSession = Co({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: XT
        }, IT), this.init()
      }
      static removeUserSession() {
        Io(zT, TT.storageTypeLocal)
      }
      static storeUserSession(oT) {
        oo(zT, Yo(oT), TT.storageTypeLocal)
      }
      static fetchUserSession() {
        const oT = To(zT, TT.storageTypeLocal);
        return oT ? JSON.parse(oT) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var TT;
            this.updateSession({
              refreshActivity: !1
            });
            const oT = null === (TT = this.context.api) || void 0 === TT || null === (TT = TT.getSession()) || void 0 === TT ? void 0 : TT.id;
            oT && this.recordActivity(oT)
          }
        })), this.context.metas.addListener(Uo({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession
        }, this.context))
      }
    };
    Oo.storageTypeLocal = dT;
    var Ho = class TT {
      constructor() {
        var oT = this;
        let IT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KT;
        this.context = IT, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: TT = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return oT.updateUserSession({
            refreshActivity: TT
          })
        }, this.recordActivity = jo({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: XT
        }), this.updateUserSession = Co({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: XT
        }, IT), this.init()
      }
      static removeUserSession() {
        Io(zT, TT.storageTypeSession)
      }
      static storeUserSession(oT) {
        oo(zT, Yo(oT), TT.storageTypeSession)
      }
      static fetchUserSession() {
        const oT = To(zT, TT.storageTypeSession);
        return oT ? JSON.parse(oT) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var TT;
            this.updateSession({
              refreshActivity: !1
            });
            const oT = null === (TT = this.context.api) || void 0 === TT || null === (TT = TT.getSession()) || void 0 === TT ? void 0 : TT.id;
            oT && this.recordActivity(oT)
          }
        })), this.context.metas.addListener(Uo({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession
        }, this.context))
      }
    };
    Ho.storageTypeSession = PT;
    const no = new WeakMap;

    function qo(TT) {
      let oT = no.get(TT);
      if (!oT) {
        let IT = [],
          iT = [];
        oT = {
          addSessionUpdateListener: TT => {
            IT.push(TT)
          },
          removeSessionUpdateListener: TT => {
            IT = IT.filter((oT => oT !== TT))
          },
          notifySessionUpdate: TT => {
            IT.forEach((oT => oT(TT)))
          },
          shouldCapture: () => iT.every((TT => TT())),
          addCaptureFilter: TT => {
            iT.push(TT)
          },
          removeCaptureFilter: TT => {
            iT = iT.filter((oT => oT !== TT))
          }
        }, no.set(TT, oT)
      }
      return oT
    }
    var Zo = class {
      constructor(TT, oT, IT) {
        this.metas = TT, this.transports = oT, this.onActivate = IT, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = TT => {
          var oT, IT, iT;
          const zT = this.pending;
          var kT, WT;
          if ("overrides" === TT.type) return void(this.pending = {
            reset: null !== (kT = null === zT || void 0 === zT ? void 0 : zT.reset) && void 0 !== kT && kT,
            inheritOverrides: null === (WT = null === zT || void 0 === zT ? void 0 : zT.inheritOverrides) || void 0 === WT || WT,
            session: So(So({}, null === zT || void 0 === zT ? void 0 : zT.session), {}, {
              overrides: So(So({}, null === zT || void 0 === zT ? void 0 : zT.session.overrides), TT.overrides)
            })
          });
          const XT = TT.session,
            BT = pT(XT) || null != XT && "id" in XT && !XT.id,
            FT = null !== (oT = null === XT || void 0 === XT ? void 0 : XT.overrides) && void 0 !== oT ? oT : null === zT || void 0 === zT ? void 0 : zT.session.overrides;
          this.pending = {
            reset: BT || !(null === XT || void 0 === XT ? void 0 : XT.id) && null !== (IT = null === zT || void 0 === zT ? void 0 : zT.reset) && void 0 !== IT && IT,
            inheritOverrides: !(!TT.overrides && void 0 !== (null === XT || void 0 === XT ? void 0 : XT.overrides)) && (null === (iT = null === zT || void 0 === zT ? void 0 : zT.inheritOverrides) || void 0 === iT || iT),
            session: {
              id: null === XT || void 0 === XT ? void 0 : XT.id,
              attributes: (null === XT || void 0 === XT ? void 0 : XT.attributes) && So({}, XT.attributes),
              overrides: TT.overrides ? So(So({}, null === zT || void 0 === zT ? void 0 : zT.session.overrides), TT.overrides) : FT && So({}, FT)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var TT, oT;
        this.waiting = !0, qo(this.metas).addSessionUpdateListener(this.recordUpdate), qo(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (TT = (oT = this.metas).addCaptureListener) || void 0 === TT || TT.call(oT, this.activate), this.activate()
      }
      destroy() {
        var TT, oT;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), qo(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (TT = (oT = this.metas).removeCaptureListener) || void 0 === TT || TT.call(oT, this.activate), qo(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function so(TT) {
      return (null === TT || void 0 === TT ? void 0 : TT.persistent) ? Oo : Ho
    }

    function to() {}
    let Go = function(TT) {
      return TT[TT.OFF = 0] = "OFF", TT[TT.ERROR = 1] = "ERROR", TT[TT.WARN = 2] = "WARN", TT[TT.INFO = 3] = "INFO", TT[TT.VERBOSE = 4] = "VERBOSE", TT
    }({});
    const po = {
        debug: to,
        error: to,
        info: to,
        prefix: "Faro",
        warn: to
      },
      bo = 1;

    function yo(TT) {
      return yo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, yo(TT)
    }

    function No(TT) {
      var oT = function(TT, oT) {
        if ("object" != yo(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != yo(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == yo(oT) ? oT : oT + ""
    }

    function Po(TT, oT, IT) {
      return (oT = No(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Vo(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function TI(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? Vo(Object(IT), !0).forEach((function(oT) {
          Po(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : Vo(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }
    const oI = TI({}, console);
    var II = class {
        constructor() {
          this.unpatchedConsole = oI, this.internalLogger = po, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
          this.internalLogger.debug(`${this.name}\n`, ...oT)
        }
        logInfo() {
          for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
          this.internalLogger.info(`${this.name}\n`, ...oT)
        }
        logWarn() {
          for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
          this.internalLogger.warn(`${this.name}\n`, ...oT)
        }
        logError() {
          for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
          this.internalLogger.error(`${this.name}\n`, ...oT)
        }
      },
      iI = class extends II {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const zI = "2.12.1";
    var kI = class extends iI {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = zI, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(TT) {
        var oT;
        const IT = TT.session;
        if (IT && IT.id !== (null === (oT = this.notifiedSession) || void 0 === oT ? void 0 : oT.id)) {
          var iT;
          if (this.isAdoptingSession()) return void(this.notifiedSession = IT);
          if (this.notifiedSession && this.notifiedSession.id === (null === (iT = IT.attributes) || void 0 === iT ? void 0 : iT.previousSession)) return this.api.pushEvent(Ro, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = IT);
          this.notifiedSession = IT, this.api.pushEvent(mo, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(TT, oT, IT) {
        const iT = null === IT || void 0 === IT ? void 0 : IT.session;
        let zT, kT, WT = TT.fetchUserSession();
        if (oT.persistent && oT.maxSessionPersistenceTime && WT) {
          const TT = Lo();
          WT.lastActivity < TT - oT.maxSessionPersistenceTime && (Oo.removeUserSession(), WT = null)
        }
        const XT = fo(WT);
        if ((null === IT || void 0 === IT ? void 0 : IT.reset) || !XT || (null === iT || void 0 === iT ? void 0 : iT.id) && iT.id !== (null === WT || void 0 === WT ? void 0 : WT.sessionId)) {
          var BT, FT, ST, DT, LT, xT;
          kT = Eo({
            sessionId: (null === IT || void 0 === IT ? void 0 : IT.reset) ? void 0 : null !== (BT = null === iT || void 0 === iT ? void 0 : iT.id) && void 0 !== BT ? BT : null === (FT = oT.session) || void 0 === FT ? void 0 : FT.id,
            isSampled: Do(this)
          }, this);
          const TT = kT.sessionId,
            cT = IT && XT ? null === WT || void 0 === WT || null === (ST = WT.sessionMeta) || void 0 === ST ? void 0 : ST.overrides : void 0,
            KT = cT ? So(So({}, null === (DT = oT.session) || void 0 === DT ? void 0 : DT.overrides), cT) : null === (LT = oT.session) || void 0 === LT ? void 0 : LT.overrides;
          kT.sessionMeta = So({
            id: TT,
            attributes: So({
              isSampled: kT.isSampled.toString()
            }, null === (xT = oT.session) || void 0 === xT ? void 0 : xT.attributes)
          }, KT ? {
            overrides: KT
          } : {}), zT = mo
        } else {
          var cT, KT;
          const TT = null === WT || void 0 === WT ? void 0 : WT.sessionId;
          kT = Eo({
            sessionId: TT,
            isSampled: WT.isSampled || !1,
            started: null === WT || void 0 === WT ? void 0 : WT.started
          }, this);
          const IT = null === WT || void 0 === WT ? void 0 : WT.sessionMeta,
            iT = So(So({}, null === (cT = oT.session) || void 0 === cT ? void 0 : cT.overrides), null === IT || void 0 === IT ? void 0 : IT.overrides);
          kT.sessionMeta = So(So({}, oT.session), {}, {
            id: TT,
            attributes: So(So(So({}, null === (KT = oT.session) || void 0 === KT ? void 0 : KT.attributes), null === IT || void 0 === IT ? void 0 : IT.attributes), {}, {
              isSampled: kT.isSampled.toString()
            }),
            overrides: iT
          }), zT = eo
        }
        var MT;
        if (iT && (kT.sessionMeta = So(So({}, kT.sessionMeta), {}, {
            attributes: So(So(So({}, null === (MT = kT.sessionMeta) || void 0 === MT ? void 0 : MT.attributes), iT.attributes), {}, {
              isSampled: kT.isSampled.toString()
            })
          }), iT.overrides)) {
          const TT = (null === IT || void 0 === IT ? void 0 : IT.inheritOverrides) ? So(So({}, kT.sessionMeta.overrides), iT.overrides) : iT.overrides;
          Object.keys(TT).length > 0 ? kT.sessionMeta.overrides = TT : delete kT.sessionMeta.overrides
        }
        return {
          initialSession: kT,
          lifecycleType: zT
        }
      }
      registerBeforeSendHook(TT) {
        var oT;
        this.beforeSendHook = oT => {
          var IT, iT;
          const zT = null === (IT = oT.meta.session) || void 0 === IT ? void 0 : IT.id;
          zT && !this.transports.isPaused() && TT(zT);
          const kT = null === (iT = oT.meta.session) || void 0 === iT ? void 0 : iT.attributes;
          if (kT && "true" === (null === kT || void 0 === kT ? void 0 : kT.isSampled)) {
            var WT;
            let TT = JSON.parse(JSON.stringify(oT));
            const IT = null === (WT = TT.meta.session) || void 0 === WT ? void 0 : WT.attributes;
            var XT;
            if (null === IT || void 0 === IT || delete IT.isSampled, 0 === Object.keys(null !== IT && void 0 !== IT ? IT : {}).length) null === (XT = TT.meta.session) || void 0 === XT || delete XT.attributes;
            return TT
          }
          return null
        }, null === (oT = this.transports) || void 0 === oT || oT.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var TT;
        this.logDebug("init session instrumentation");
        const oT = document.prerendering;
        var IT;
        if ((null === (TT = this.config.sessionTracking) || void 0 === TT ? void 0 : TT.enabled) && (oT || this.prerenderSession)) return null !== (IT = this.prerenderSession) && void 0 !== IT || (this.prerenderSession = new Zo(this.metas, this.transports, (TT => {
          this.prerenderSession = void 0, this.initializeSession(TT)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(TT) {
        const oT = this.config.sessionTracking;
        if (null === oT || void 0 === oT ? void 0 : oT.enabled) {
          var IT, iT;
          const zT = so(oT),
            kT = new zT(this);
          this.isAdoptingSession = kT.isAdopting, this.registerBeforeSendHook(kT.recordActivity);
          const {
            initialSession: WT,
            lifecycleType: XT
          } = this.createInitialSession(zT, oT, TT);
          zT.storeUserSession(WT);
          const BT = WT.sessionMeta;
          this.notifiedSession = BT, this.api.setSession(BT), this.captureListener = () => {
            this.transports.isPaused() || kT.updateSession({
              refreshActivity: !1
            })
          }, null === (IT = (iT = this.metas).addCaptureListener) || void 0 === IT || IT.call(iT, this.captureListener), XT === mo && this.api.pushEvent(mo, {}, void 0, {
            skipDedupe: !0
          }), XT === eo && this.api.pushEvent(eo, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var TT, oT, IT;
        (null === (TT = this.prerenderSession) || void 0 === TT || TT.destroy(), this.captureListener) && (null === (oT = (IT = this.metas).removeCaptureListener) || void 0 === oT || oT.call(IT, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function WI(TT, oT, IT, iT) {
      const zT = {
        filename: TT || document.location.href,
        function: oT || "?"
      };
      return void 0 !== IT && (zT.lineno = IT), void 0 !== iT && (zT.colno = iT), zT
    }
    const XI = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      BI = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      FI = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      SI = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      DI = "safari-extension",
      LI = "safari-web-extension",
      xI = /Minified React error #\d+;/i;

    function cI(TT, oT) {
      const IT = null === TT || void 0 === TT ? void 0 : TT.includes(DI),
        iT = !IT && (null === TT || void 0 === TT ? void 0 : TT.includes("safari-web-extension"));
      return IT || iT ? [(null === TT || void 0 === TT ? void 0 : TT.includes("@")) ? TT.split("@")[0] : TT, IT ? `${DI}:${oT}` : `${LI}:${oT}`] : [TT, oT]
    }
    const KI = 1024;

    function MI(TT) {
      let oT = [];
      TT.stacktrace ? oT = TT.stacktrace.split("\n").filter(((TT, oT) => oT % 2 === 0)) : TT.stack && (oT = TT.stack.split("\n"));
      const IT = oT.reduce(((oT, IT, iT) => {
        if (IT.length > KI) return oT;
        let zT, kT, WT, XT, BT;
        if (zT = XI.exec(IT)) {
          if (kT = zT[1], WT = zT[2], XT = zT[3], BT = zT[4], null === WT || void 0 === WT ? void 0 : WT.startsWith("eval")) {
            const TT = BI.exec(WT);
            TT && (WT = TT[1], XT = TT[2], BT = TT[3])
          }
          WT = (null === WT || void 0 === WT ? void 0 : WT.startsWith("address at ")) ? WT.substring(11) : WT, [kT, WT] = cI(kT, WT)
        } else if (zT = FI.exec(IT)) {
          if (kT = zT[1], WT = zT[3], XT = zT[4], BT = zT[5], WT && WT.includes(" > eval")) {
            const TT = SI.exec(WT);
            TT && (kT = kT || "eval", WT = TT[1], XT = TT[2])
          } else 0 === iT && !BT && eT(TT.columnNumber) && (BT = String(TT.columnNumber + 1));
          [kT, WT] = cI(kT, WT)
        }
        return (WT || kT) && oT.push(WI(WT, kT, XT ? Number(XT) : void 0, BT ? Number(BT) : void 0)), oT
      }), []);
      return xI.test(TT.message) ? IT.slice(1) : IT
    }

    function rI(TT) {
      return {
        frames: MI(TT)
      }
    }
    const AI = "http-request-start",
      gI = "http-request-end";
    var hI = class TT {
      constructor() {
        this.subscribers = []
      }
      subscribe(TT) {
        return this.subscribers.push(TT), {
          unsubscribe: () => this.unsubscribe(TT)
        }
      }
      unsubscribe(TT) {
        this.subscribers = this.subscribers.filter((oT => oT !== TT))
      }
      notify(TT) {
        this.subscribers.forEach((oT => oT(TT)))
      }
      first() {
        const oT = new TT,
          IT = TT => {
            oT.notify(TT), iT.unsubscribe()
          },
          iT = this.subscribe(IT),
          zT = oT.unsubscribe.bind(oT);
        return this.withUnsubscribeOverride(oT, zT, IT)
      }
      takeWhile(oT) {
        const IT = new TT,
          iT = TT => {
            oT(TT) ? IT.notify(TT) : IT.unsubscribe(iT)
          };
        this.subscribe(iT);
        const zT = IT.unsubscribe.bind(IT);
        return this.withUnsubscribeOverride(IT, zT, iT)
      }
      filter(oT) {
        const IT = new TT,
          iT = TT => {
            oT(TT) && IT.notify(TT)
          };
        this.subscribe(iT);
        const zT = IT.unsubscribe.bind(IT);
        return this.withUnsubscribeOverride(IT, zT, iT)
      }
      merge() {
        const oT = new TT,
          IT = [];
        for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
        zT.forEach((TT => {
          const iT = TT.subscribe((TT => {
            oT.notify(TT)
          }));
          IT.push(iT)
        }));
        const WT = oT.unsubscribeAll.bind(oT);
        return oT.unsubscribe = () => {
          IT.forEach((TT => TT.unsubscribe())), WT()
        }, oT
      }
      withUnsubscribeOverride(TT, oT, IT) {
        return TT.unsubscribe = TT => {
          oT(TT), this.unsubscribe(IT)
        }, TT
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let wI = function(TT) {
      return TT.TRACE = "trace", TT.DEBUG = "debug", TT.INFO = "info", TT.LOG = "log", TT.WARN = "warn", TT.ERROR = "error", TT
    }({});
    const mI = "log",
      eI = ["trace", "debug", "info", "log", "warn", "error"];
    let RI, uI = !1;
    const vI = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      EI = "Error",
      fI = TT => TT.map((TT => ET(TT) ? Yo(TT) : String(TT))).join(" ");

    function CI(TT) {
      let oT, IT, iT, zT, kT = [];
      if (HT(TT) && TT.error) oT = TT.error.message, IT = TT.error.name, kT = MI(TT.error);
      else if ((iT = nT(TT)) || qT(TT)) {
        const {
          name: zT,
          message: kT
        } = TT;
        IT = null !== zT && void 0 !== zT ? zT : iT ? "DOMError" : "DOMException", oT = kT ? `${IT}: ${kT}` : IT
      } else OT(TT) ? (IT = TT.name, oT = TT.message, kT = MI(TT)) : (ET(TT) || (zT = YT(TT))) && (IT = zT ? TT.constructor.name : void 0, oT = `Non-Error exception captured with keys: ${Object.keys(TT)}`);
      return [oT, IT, kT]
    }

    function jI(TT) {
      const [oT, IT, iT, zT, kT] = TT;
      let WT, XT, BT = [];
      const FT = mT(oT),
        ST = WI(IT, "?", iT, zT);
      return kT || !FT ? ([WT, XT, BT] = CI(null !== kT && void 0 !== kT ? kT : oT), 0 === BT.length && (BT = [ST])) : FT && ([WT, XT] = function(TT) {
        var oT, IT;
        const iT = TT.match(vI),
          zT = null !== (oT = null === iT || void 0 === iT ? void 0 : iT[1]) && void 0 !== oT ? oT : EI;
        return [null !== (IT = null === iT || void 0 === iT ? void 0 : iT[2]) && void 0 !== IT ? IT : TT, zT]
      }(oT), BT = [ST]), {
        value: WT,
        type: XT,
        stackFrames: BT
      }
    }

    function JI(TT, oT) {
      return OT(TT[0]) ? jI(TT) : {
        value: oT(TT)
      }
    }
    const UI = TT => TT.map((TT => {
      try {
        return String(TT)
      } catch (oT) {
        return ""
      }
    })).join(" ");
    var aI = class TT extends iI {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = zI, this.errorSerializer = UI
      }
      initialize() {
        var oT, IT;
        const iT = this.config.consoleInstrumentation,
          zT = (null === iT || void 0 === iT ? void 0 : iT.serializeErrors) || !!(null === iT || void 0 === iT ? void 0 : iT.errorSerializer);
        this.errorSerializer = zT ? null !== (oT = null === iT || void 0 === iT ? void 0 : iT.errorSerializer) && void 0 !== oT ? oT : fI : UI;
        const kT = null !== (IT = null === iT || void 0 === iT ? void 0 : iT.disabledLevels) && void 0 !== IT ? IT : TT.defaultDisabledLevels,
          WT = function(TT) {
            if (RI || (RI = new hI), !uI) {
              const oT = null !== TT && void 0 !== TT ? TT : oI;
              eI.forEach((TT => {
                console[TT] = function() {
                  for (var IT, iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
                  RI.notify({
                    type: "console",
                    level: TT,
                    args: zT
                  }), null === (IT = oT[TT]) || void 0 === IT || IT.apply(console, zT)
                }
              })), uI = !0
            }
            return RI
          }(this.unpatchedConsole);
        this.subscription = WT.subscribe((oT => {
          let {
            level: IT,
            args: zT
          } = oT;
          if (!kT.includes(IT)) try {
            if (IT !== wI.ERROR || (null === iT || void 0 === iT ? void 0 : iT.consoleErrorAsLog))
              if (IT === wI.ERROR && (null === iT || void 0 === iT ? void 0 : iT.consoleErrorAsLog)) {
                const {
                  value: oT,
                  type: iT,
                  stackFrames: kT
                } = JI(zT, this.errorSerializer);
                this.api.pushLog(oT ? [TT.consoleErrorPrefix + oT] : zT, {
                  level: IT,
                  context: {
                    value: null !== oT && void 0 !== oT ? oT : "",
                    type: null !== iT && void 0 !== iT ? iT : "",
                    stackFrames: (null === kT || void 0 === kT ? void 0 : kT.length) ? fI(kT) : ""
                  }
                })
              } else this.api.pushLog(zT, {
                level: IT
              });
            else {
              const {
                value: oT,
                type: IT,
                stackFrames: iT
              } = JI(zT, this.errorSerializer);
              if (oT && !IT && !iT) return void this.api.pushError(new Error(TT.consoleErrorPrefix + oT));
              this.api.pushError(new Error(TT.consoleErrorPrefix + oT), {
                type: IT,
                stackFrames: iT
              })
            }
          } catch (WT) {
            this.logError(WT)
          }
        }))
      }
      destroy() {
        var TT;
        null === (TT = this.subscription) || void 0 === TT || TT.unsubscribe(), this.subscription = void 0
      }
    };
    aI.defaultDisabledLevels = [wI.DEBUG, wI.TRACE, wI.LOG], aI.consoleErrorPrefix = "console.error: ";
    const YI = [];
    var QI = class extends iI {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = zI
      }
      initialize() {
        this.logDebug("Initializing"),
          function(TT) {
            const oT = window.onerror;
            window.onerror = function() {
              for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
              try {
                const {
                  value: oT,
                  type: IT,
                  stackFrames: zT
                } = jI(iT), kT = iT[4];
                if (oT) {
                  const iT = {
                    type: IT,
                    stackFrames: zT
                  };
                  null != kT && (iT.originalError = kT), TT.pushError(new Error(oT), iT)
                }
              } finally {
                null === oT || void 0 === oT || oT.apply(window, iT)
              }
            }
          }(this.api),
          function(TT) {
            const oT = oT => {
              var IT;
              let iT, zT, kT = oT;
              if (kT.reason) kT = oT.reason;
              else if (null === (IT = oT.detail) || void 0 === IT ? void 0 : IT.reason) {
                var WT;
                kT = null === (WT = oT.detail) || void 0 === WT ? void 0 : WT.reason
              }
              let XT = [];
              UT(kT) ? (iT = `Non-Error promise rejection captured with value: ${String(kT)}`, zT = "UnhandledRejection") : [iT, zT, XT] = CI(kT), iT && TT.pushError(new Error(iT), {
                type: zT,
                stackFrames: XT
              })
            };
            window.addEventListener("unhandledrejection", oT), YI.push(oT)
          }(this.api)
      }
    };
    const OI = "unknown";
    var HI = class extends iI {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = zI, this.waitingForActivation = !1, this.sendViewChangedEvent = TT => {
          var oT;
          if (this.waitingForActivation || document.prerendering) return;
          const IT = TT.view;
          if (IT && IT.name !== (null === (oT = this.notifiedView) || void 0 === oT ? void 0 : oT.name)) {
            var iT, zT, kT;
            const TT = null !== (iT = null === (zT = this.notifiedView) || void 0 === zT ? void 0 : zT.name) && void 0 !== iT ? iT : OI;
            this.notifiedView = IT, this.api.pushEvent(wo, {
              fromView: TT,
              toView: null !== (kT = IT.name) && void 0 !== kT ? kT : OI
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
    class nI {
      t;
      o = 0;
      i = [];
      l(TT) {
        if (TT.hadRecentInput) return;
        const oT = this.i[0],
          IT = this.i.at(-1);
        this.o && oT && IT && TT.startTime - IT.startTime < 1e3 && TT.startTime - oT.startTime < 5e3 ? (this.o += TT.value, this.i.push(TT)) : (this.o = TT.value, this.i = [TT]), this.t?.(TT)
      }
    }
    const qI = () => {
        const TT = performance.getEntriesByType("navigation")[0];
        if (TT && TT.responseStart > 0 && TT.responseStart < performance.now()) return TT
      },
      ZI = TT => {
        if ("loading" === document.readyState) return "loading";
        const oT = qI();
        if (oT) {
          if (TT < oT.domInteractive) return "loading";
          if (0 === oT.domContentLoadedEventStart || TT < oT.domContentLoadedEventStart) return "dom-interactive";
          if (0 === oT.domComplete || TT < oT.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      lI = TT => {
        const oT = TT.nodeName;
        return 1 === TT.nodeType ? oT.toLowerCase() : oT.toUpperCase().replace(/^#/, "")
      },
      sI = TT => {
        let oT = "";
        try {
          for (; 9 !== TT?.nodeType;) {
            const IT = TT,
              iT = IT.id ? "#" + IT.id : [lI(IT), ...Array.from(IT.classList ?? []).sort()].join(".");
            if (oT.length + iT.length > 99) return oT || iT;
            if (oT = oT ? iT + ">" + oT : iT, IT.id) break;
            TT = IT.parentNode
          }
        } catch {}
        return oT
      },
      tI = new WeakMap;

    function GI(TT, oT) {
      let IT = tI.get(oT);
      return IT || (IT = new WeakMap, tI.set(oT, IT)), IT.get(TT) || IT.set(TT, new oT), IT.get(TT)
    }
    let pI = -1;
    const bI = () => pI,
      yI = TT => {
        addEventListener("pageshow", (oT => {
          oT.persisted && (pI = oT.timeStamp, TT(oT))
        }), !0)
      },
      NI = (TT, oT, IT, iT) => {
        let zT, kT;
        return WT => {
          oT.value >= 0 && (WT || iT) && (kT = oT.value - (zT ?? 0), (kT || void 0 === zT) && (zT = oT.value, oT.delta = kT, oT.rating = ((TT, oT) => TT > oT[1] ? "poor" : TT > oT[0] ? "needs-improvement" : "good")(oT.value, IT), TT(oT)))
        }
      },
      PI = TT => {
        requestAnimationFrame((() => requestAnimationFrame((() => TT()))))
      },
      dI = () => qI()?.activationStart ?? 0;
    let VI = -1;
    const Ti = new Set,
      oi = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Ii = TT => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === TT.type)
            for (const TT of Ti) TT();
          isFinite(VI) || (VI = "visibilitychange" === TT.type ? TT.timeStamp : 0, removeEventListener("prerenderingchange", Ii, !0))
        }
      },
      ii = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (VI = 1 / 0), VI < 0) {
          const TT = dI(),
            oT = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((oT => "hidden" === oT.name && oT.startTime >= TT))?.startTime;
          VI = oT ?? oi(), addEventListener("visibilitychange", Ii, !0), addEventListener("prerenderingchange", Ii, !0), yI((() => {
            setTimeout((() => {
              VI = oi()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return VI
          },
          onHidden(TT) {
            Ti.add(TT)
          }
        }
      },
      zi = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0,
          WT = arguments.length > 6 ? arguments[6] : void 0;
        const XT = qI(),
          BT = XT?.navigationId || 0;
        let FT = "navigate";
        return IT ? FT = IT : bI() >= 0 ? FT = "back-forward-cache" : XT && (document.prerendering || dI() > 0 ? FT = "prerender" : document.wasDiscarded ? FT = "restore" : XT.type && (FT = XT.type.replace(/_/g, "-"))), {
          name: TT,
          value: oT,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: FT,
          navigationId: iT || BT,
          navigationInteractionId: zT,
          navigationURL: kT || XT?.name,
          navigationStartTime: WT || 0
        }
      },
      ki = function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const iT = TT.filter((TT => PerformanceObserver.supportedEntryTypes.includes(TT)));
          if (iT.length > 0) {
            const TT = new PerformanceObserver((TT => {
              queueMicrotask((() => {
                const IT = TT.getEntries();
                iT.length > 1 && IT.sort(((TT, oT) => TT.startTime + TT.duration - (oT.startTime + oT.duration))), oT(IT)
              }))
            }));
            for (const oT of iT) TT.observe({
              type: oT,
              buffered: !0,
              ...IT
            });
            return TT
          }
        } catch {}
      },
      Wi = TT => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && TT && TT.reportSoftNavs,
      Xi = (TT, oT) => {
        if (TT.set(oT.navigationId, oT), TT.size > 2) {
          const oT = TT.keys().next().value;
          void 0 !== oT && TT.delete(oT)
        }
      },
      Bi = TT => {
        let oT = !1;
        return () => {
          oT || (TT(), oT = !0)
        }
      };
    class Fi {
      u
    }
    const Si = TT => {
        document.prerendering ? addEventListener("prerenderingchange", TT, !0) : TT()
      },
      Di = [1800, 3e3],
      Li = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const IT = Wi(oT);
        Si((() => {
          const iT = GI(oT, Fi),
            zT = ii();
          let kT, WT = zi("FCP");
          const XT = ki(["paint"], (TT => {
            for (const oT of TT) "first-contentful-paint" === oT.name && (XT.disconnect(), oT.startTime < zT.firstHiddenTime && (WT.value = Math.max(oT.startTime - dI(), 0), WT.entries.push(oT), WT.navigationId = oT.navigationId || WT.navigationId, kT(!0)))
          }));
          XT && (kT = NI(TT, WT, Di, oT.reportAllChanges), yI((IT => {
            WT = zi("FCP", -1, "back-forward-cache", WT.navigationId, WT.navigationInteractionId, WT.navigationURL, bI()), kT = NI(TT, WT, Di, oT.reportAllChanges), PI((() => {
              WT.value = performance.now() - IT.timeStamp, kT(!0)
            }))
          }))), IT && ki(["soft-navigation"], (IT => {
            IT.forEach((IT => {
              iT.u && IT.navigationId && Xi(iT.u, IT);
              const zT = Math.max((IT.presentationTime || IT.paintTime || 0) - IT.startTime, 0);
              WT = zi("FCP", zT, "soft-navigation", IT.navigationId, IT.interactionId, IT.name, IT.startTime), kT = NI(TT, WT, Di, oT.reportAllChanges), kT(!0)
            }))
          }), oT)
        }))
      },
      xi = [.1, .25],
      ci = TT => TT.find((TT => 1 === TT.node?.nodeType)) || TT[0];
    let Ki = 0,
      Mi = 1 / 0,
      ri = 0;
    const Ai = TT => {
      for (const oT of TT) oT.interactionId && (Mi = Math.min(Mi, oT.interactionId), ri = Math.max(ri, oT.interactionId), Ki = ri ? (ri - Mi) / 7 + 1 : 0)
    };
    let gi;
    const wi = () => gi ? Ki : performance.interactionCount ?? 0;
    class mi {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return wi() - this.h
      }
      D() {
        this.h = wi(), this.v.length = 0, this.p.clear()
      }
      S(TT) {
        const oT = this.T(),
          IT = Math.min(this.v.length - 1, Math.floor(oT / 50));
        return !oT || -1 !== IT || "soft-navigation" !== TT && "back-forward-cache" !== TT ? this.v[IT] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(TT) {
        if (this.m?.(TT), !TT.interactionId) return;
        const oT = this.v.at(-1);
        let IT = this.p.get(TT.interactionId);
        if (IT || this.v.length < 10 || TT.duration > oT.k) {
          if (IT ? TT.duration > IT.k ? (IT.entries = [TT], IT.k = TT.duration) : TT.duration === IT.k && TT.startTime === IT.entries[0].startTime && IT.entries.push(TT) : (IT = {
              id: TT.interactionId,
              entries: [TT],
              k: TT.duration
            }, this.p.set(IT.id, IT), this.v.push(IT)), this.v.sort(((TT, oT) => oT.k - TT.k)), this.v.length > 10) {
            const TT = this.v.splice(10);
            for (const oT of TT) this.p.delete(oT.id)
          }
          this.M?.(IT)
        }
      }
    }
    const ei = TT => {
        const oT = "requestIdleCallback" in globalThis ? 1e3 : 0,
          IT = globalThis.requestIdleCallback || setTimeout,
          iT = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) TT();
        else {
          const zT = Bi(TT);
          let kT = -1;
          const WT = () => {
            iT(kT), zT()
          };
          addEventListener("visibilitychange", WT, {
            once: !0,
            capture: !0
          }), kT = IT((() => {
            removeEventListener("visibilitychange", WT, {
              capture: !0
            }), zT()
          }), {
            timeout: oT
          })
        }
      },
      Ri = [200, 500],
      ui = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const IT = GI(oT = Object.assign({}, oT), mi);
        let iT = [],
          zT = [],
          kT = 0;
        const WT = new WeakMap,
          XT = new WeakMap;
        let BT = !1;
        const FT = () => {
            BT || (BT = !0, ei(ST))
          },
          ST = () => {
            const TT = new Set(IT.v.map((TT => WT.get(TT.entries[0])))),
              oT = zT.length - 10;
            zT = zT.filter(((IT, iT) => iT >= oT || TT.has(IT)));
            const XT = new Set;
            for (const IT of zT) {
              const TT = DT(IT.startTime, IT.processingEnd);
              for (const oT of TT) XT.add(oT)
            }
            const FT = iT.length - 10;
            iT = iT.filter(((TT, oT) => XT.has(TT) || oT >= FT && TT.startTime > kT)), BT = !1
          };
        IT.m = TT => {
          const IT = TT.startTime + TT.duration;
          let iT;
          kT = Math.max(kT, TT.processingEnd);
          for (let kT = zT.length - 1; kT >= 0; kT--) {
            const WT = zT[kT];
            if (Math.abs(IT - WT.renderTime) <= 8) {
              iT = WT, iT.startTime = Math.min(TT.startTime, iT.startTime), iT.processingStart = Math.min(TT.processingStart, iT.processingStart), iT.processingEnd = Math.max(TT.processingEnd, iT.processingEnd), oT.includeProcessedEventEntries && iT.entries.push(TT);
              break
            }
          }
          iT || (iT = {
            startTime: TT.startTime,
            processingStart: TT.processingStart,
            processingEnd: TT.processingEnd,
            renderTime: IT,
            entries: oT.includeProcessedEventEntries ? [TT] : []
          }, zT.push(iT)), TT.interactionId && WT.set(TT, iT), FT()
        }, IT.M = TT => {
          if (!XT.get(TT)) {
            const IT = TT.entries.find((TT => TT.target))?.target;
            if (IT) {
              const iT = oT.generateTarget?.(IT) ?? sI(IT);
              XT.set(TT, iT)
            } else {
              const oT = TT.entries.find((TT => TT.targetSelector))?.targetSelector;
              oT && XT.set(TT, oT)
            }
          }
        };
        const DT = (TT, oT) => {
          const IT = [];
          for (const zT of iT)
            if (!(zT.startTime + zT.duration < TT)) {
              if (zT.startTime > oT) break;
              IT.push(zT)
            } return IT
        };
        ki(["long-animation-frame"], (TT => {
            iT = iT.concat(TT), FT()
          }), oT),
          function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const IT = ii();
            Si((() => {
              "interactionCount" in performance || gi || (gi = ki(["event"], Ai, {
                durationThreshold: 0
              }));
              let iT, zT = zi("INP");
              const kT = GI(oT, mi),
                WT = (IT, WT, XT, BT, FT) => {
                  kT.D(), zT = zi("INP", -1, IT, WT, XT, BT, FT), iT = NI(TT, zT, Ri, oT.reportAllChanges)
                },
                XT = () => {
                  const TT = kT.S(zT.navigationType);
                  TT && TT.k !== zT.value && (zT.value = TT.k, zT.entries = TT.entries, iT())
                },
                BT = TT => {
                  XT(), iT(!0), WT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime)
                },
                FT = function(TT) {
                  let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  ei((() => {
                    for (const oT of TT) "soft-navigation" !== oT.entryType ? kT.l(oT) : BT(oT);
                    XT(), oT && iT(!0)
                  }))
                },
                ST = ["event", "first-input"];
              Wi(oT) && ST.push("soft-navigation");
              const DT = ki(ST, FT, {
                ...oT,
                durationThreshold: oT.durationThreshold ?? 40
              });
              iT = NI(TT, zT, Ri, oT.reportAllChanges), DT && (IT.onHidden((() => {
                FT(DT.takeRecords(), !0)
              })), yI((() => {
                WT("back-forward-cache", zT.navigationId, zT.navigationInteractionId, zT.navigationURL, bI())
              })))
            }))
          }((oT => {
            TT((TT => {
              if (0 === TT.entries.length) {
                const oT = TT.navigationStartTime || 0,
                  IT = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: TT.value,
                    loadState: ZI(oT)
                  };
                return Object.assign(TT, {
                  attribution: IT
                })
              }
              const oT = TT.entries[0],
                iT = WT.get(oT),
                zT = Math.max(iT.processingStart, oT.startTime),
                kT = Math.max(oT.startTime + oT.duration, zT),
                BT = Math.min(iT.processingEnd, kT),
                FT = iT.entries.sort(((TT, oT) => TT.processingStart - oT.processingStart)),
                ST = DT(oT.startTime, BT),
                LT = IT.p.get(oT.interactionId),
                xT = {
                  interactionTarget: XT.get(LT),
                  interactionType: oT.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: oT.startTime,
                  nextPaintTime: kT,
                  processedEventEntries: FT,
                  longAnimationFrameEntries: ST,
                  inputDelay: zT - oT.startTime,
                  processingDuration: BT - zT,
                  presentationDelay: kT - BT,
                  loadState: ZI(oT.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (TT => {
                const oT = TT.interactionTime,
                  IT = TT.nextPaintTime;
                if (!TT.longAnimationFrameEntries?.length || !oT || !IT) return;
                const iT = TT.inputDelay,
                  zT = TT.processingDuration;
                let kT, WT, XT = 0,
                  BT = 0,
                  FT = 0,
                  ST = 0;
                for (const xT of TT.longAnimationFrameEntries) {
                  BT = BT + xT.startTime + xT.duration - xT.styleAndLayoutStart;
                  for (const TT of xT.scripts) {
                    const IT = TT.startTime + TT.duration;
                    if (IT < oT) continue;
                    const FT = IT - Math.max(oT, TT.startTime),
                      DT = TT.duration ? FT / TT.duration * TT.forcedStyleAndLayoutDuration : 0;
                    XT += FT - DT, BT += DT, FT > ST && (WT = TT.startTime < oT + iT ? "input-delay" : TT.startTime >= oT + iT + zT ? "presentation-delay" : "processing-duration", kT = TT, ST = FT)
                  }
                }
                const DT = TT.longAnimationFrameEntries.at(-1),
                  LT = DT ? DT.startTime + DT.duration : 0;
                LT >= oT + iT + zT && (FT = IT - LT), kT && WT && (TT.longestScript = {
                  entry: kT,
                  subpart: WT,
                  intersectingDuration: ST
                }), TT.totalScriptDuration = XT, TT.totalStyleAndLayoutDuration = BT, TT.totalPaintDuration = FT, TT.totalUnattributedDuration = IT - oT - XT - BT - FT
              })(xT), Object.assign(TT, {
                attribution: xT
              })
            })(oT))
          }), oT)
      };
    class vi {
      m;
      u;
      l(TT) {
        this.m?.(TT)
      }
    }
    const Ei = [2500, 4e3];
    let fi = 50;
    const Ci = [];
    ki(["resource"], (TT => {
      for (const oT of TT) Ci.push(oT), Ci.length > fi && Ci.shift()
    }));
    const ji = [800, 1800],
      Ji = TT => {
        document.prerendering ? Si((() => Ji(TT))) : "complete" !== document.readyState ? addEventListener("load", (() => Ji(TT)), !0) : setTimeout(TT)
      },
      Ui = "load_state",
      ai = "time_to_first_byte";
    var Yi = class {
        constructor(TT, oT) {
          this.corePushMeasurement = TT, this.webVitalConfig = oT
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var TT;
          ! function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const IT = GI(oT = Object.assign({}, oT), nI),
              iT = new WeakMap;
            IT.t = TT => {
                if (TT?.sources?.length) {
                  const IT = ci(TT.sources),
                    zT = IT?.node;
                  if (zT) {
                    const TT = oT.generateTarget?.(zT) ?? sI(zT);
                    iT.set(IT, TT)
                  }
                }
              },
              function(TT) {
                let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const IT = ii();
                Li(Bi((() => {
                  let iT, zT = zi("CLS", 0);
                  const kT = GI(oT, nI),
                    WT = (IT, WT, XT, BT, FT) => {
                      zT = zi("CLS", 0, IT, WT, XT, BT, FT), kT.o = 0, iT = NI(TT, zT, xi, oT.reportAllChanges)
                    },
                    XT = function() {
                      let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      kT.o > zT.value && (zT.value = kT.o, zT.entries = kT.i), iT(TT)
                    },
                    BT = TT => {
                      XT(!0), WT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime)
                    },
                    FT = TT => {
                      for (const oT of TT) "soft-navigation" !== oT.entryType ? kT.l(oT) : BT(oT);
                      XT()
                    },
                    ST = ["layout-shift"];
                  Wi(oT) && ST.push("soft-navigation");
                  const DT = ki(ST, FT);
                  DT && (iT = NI(TT, zT, xi, oT.reportAllChanges), IT.onHidden((() => {
                    FT(DT.takeRecords()), iT(!0)
                  })), yI((() => {
                    WT("back-forward-cache", zT.navigationId, zT.navigationInteractionId, zT.navigationURL, bI()), PI(iT)
                  })), setTimeout(iT))
                })))
              }((oT => {
                TT((TT => {
                  let oT = {};
                  if (TT.entries.length) {
                    const IT = TT.entries.reduce(((TT, oT) => TT.value > oT.value ? TT : oT));
                    if (IT?.sources?.length) {
                      const TT = ci(IT.sources);
                      TT && (oT = {
                        largestShiftTarget: iT.get(TT),
                        largestShiftTime: IT.startTime,
                        largestShiftValue: IT.value,
                        largestShiftSource: TT,
                        largestShiftEntry: IT,
                        loadState: ZI(IT.startTime)
                      })
                    }
                  }
                  return Object.assign(TT, {
                    attribution: oT
                  })
                })(oT))
              }), oT)
          }((TT => {
            const {
              loadState: oT,
              largestShiftValue: IT,
              largestShiftTime: iT,
              largestShiftTarget: zT
            } = TT.attribution, kT = this.buildInitialValues(TT);
            this.addIfPresent(kT, "largest_shift_value", IT), this.addIfPresent(kT, "largest_shift_time", iT);
            const WT = this.buildInitialContext(TT);
            this.addIfPresent(WT, Ui, oT), this.addIfPresent(WT, "largest_shift_target", zT), this.pushMeasurement(kT, WT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureFCP() {
          var TT;
          ! function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const IT = GI(oT = Object.assign({}, oT), Fi);
            Wi(oT) && (IT.u = new Map), Li((oT => {
              TT((TT => {
                let oT = {
                  timeToFirstByte: 0,
                  firstByteToFCP: TT.value,
                  loadState: ZI(bI())
                };
                if ("soft-navigation" !== TT.navigationType) {
                  if (TT.entries.length) {
                    const IT = qI(),
                      iT = TT.entries.at(-1);
                    if (IT) {
                      const zT = IT.responseStart,
                        kT = IT.activationStart || 0,
                        WT = Math.max(0, zT - kT);
                      oT = {
                        timeToFirstByte: WT,
                        firstByteToFCP: TT.value - WT,
                        loadState: ZI(TT.entries[0].startTime),
                        navigationEntry: IT,
                        fcpEntry: iT
                      }
                    }
                  }
                } else {
                  const iT = IT.u?.get(TT.navigationId);
                  iT && (oT = {
                    timeToFirstByte: 0,
                    firstByteToFCP: TT.value,
                    loadState: "complete",
                    navigationEntry: iT
                  })
                }
                return Object.assign(TT, {
                  attribution: oT
                })
              })(oT))
            }), oT)
          }((TT => {
            const {
              firstByteToFCP: oT,
              timeToFirstByte: IT,
              loadState: iT
            } = TT.attribution, zT = this.buildInitialValues(TT);
            this.addIfPresent(zT, "first_byte_to_fcp", oT), this.addIfPresent(zT, ai, IT);
            const kT = this.buildInitialContext(TT);
            this.addIfPresent(kT, Ui, iT), this.pushMeasurement(zT, kT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureINP() {
          var TT;
          ui((TT => {
            var oT;
            const {
              interactionTime: IT,
              presentationDelay: iT,
              inputDelay: zT,
              processingDuration: kT,
              nextPaintTime: WT,
              loadState: XT,
              interactionTarget: BT,
              interactionType: FT,
              totalScriptDuration: ST,
              totalStyleAndLayoutDuration: DT,
              totalPaintDuration: LT,
              totalUnattributedDuration: xT,
              longestScript: cT
            } = TT.attribution, KT = this.buildInitialValues(TT);
            this.addIfPresent(KT, "interaction_time", IT), this.addIfPresent(KT, "presentation_delay", iT), this.addIfPresent(KT, "input_delay", zT), this.addIfPresent(KT, "processing_duration", kT), this.addIfPresent(KT, "next_paint_time", WT), this.addNumberIfDefined(KT, "total_script_duration", ST), this.addNumberIfDefined(KT, "total_style_and_layout_duration", DT), this.addNumberIfDefined(KT, "total_paint_duration", LT), this.addNumberIfDefined(KT, "total_unattributed_duration", xT), this.addNumberIfDefined(KT, "longest_script_intersecting_duration", null === cT || void 0 === cT ? void 0 : cT.intersectingDuration);
            const MT = this.buildInitialContext(TT);
            this.addIfPresent(MT, Ui, XT), this.addIfPresent(MT, "interaction_target", BT), this.addIfPresent(MT, "interaction_type", FT), this.addIfPresent(MT, "longest_script_subpart", null === cT || void 0 === cT ? void 0 : cT.subpart), this.addIfPresent(MT, "longest_script_invoker_type", null === cT || void 0 === cT ? void 0 : cT.entry.invokerType), (null === (oT = this.webVitalConfig) || void 0 === oT ? void 0 : oT.trackAttributionSources) && (this.addIfPresent(MT, "longest_script_invoker", null === cT || void 0 === cT ? void 0 : cT.entry.invoker), this.addIfPresent(MT, "longest_script_source_url", null === cT || void 0 === cT ? void 0 : cT.entry.sourceURL), this.addIfPresent(MT, "longest_script_source_function_name", null === cT || void 0 === cT ? void 0 : cT.entry.sourceFunctionName), this.addIfPresent(MT, "longest_script_source_char_position", void 0 !== (null === cT || void 0 === cT ? void 0 : cT.entry.sourceCharPosition) ? String(cT.entry.sourceCharPosition) : void 0)), this.pushMeasurement(KT, MT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureLCP() {
          var TT;
          ! function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (oT = Object.assign({}, oT)).resourceBufferSize && (fi = oT.resourceBufferSize);
            const IT = GI(oT, vi),
              iT = new WeakMap;
            Wi(oT) && (IT.u = new Map), IT.m = TT => {
                const IT = TT.element;
                if (IT) {
                  const zT = oT.generateTarget?.(IT) ?? sI(IT);
                  iT.set(TT, zT)
                } else TT.id && iT.set(TT, `#${TT.id}`)
              },
              function(TT) {
                let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  IT = !1;
                const iT = Wi(oT);
                Si((() => {
                  let zT, kT = ii(),
                    WT = zi("LCP");
                  const XT = GI(oT, vi),
                    BT = (iT, XT, BT, FT, ST) => {
                      WT = zi("LCP", -1, iT, XT, BT, FT, ST), zT = NI(TT, WT, Ei, oT.reportAllChanges), IT = !1, "soft-navigation" === iT && (kT = ii(!0))
                    },
                    FT = TT => {
                      XT.u && TT.navigationId && Xi(XT.u, TT), IT || zT(!0), BT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime);
                      const oT = TT.getLargestInteractionContentfulPaint?.();
                      oT && ST([oT])
                    },
                    ST = TT => {
                      oT.reportAllChanges || iT || (TT = TT.slice(-1));
                      for (const oT of TT) {
                        if (!oT) continue;
                        if ("soft-navigation" === oT.entryType) {
                          FT(oT);
                          continue
                        }
                        let TT = 0,
                          IT = [],
                          iT = oT.startTime;
                        if ("largest-contentful-paint" === oT.entryType) TT = Math.max(oT.startTime - dI(), 0), XT.l(oT), IT = [oT];
                        else if ("interaction-contentful-paint" === oT.entryType) {
                          const zT = oT;
                          if (!WT.navigationId) continue;
                          if ("interactionId" in zT && zT.interactionId != WT.navigationInteractionId) continue;
                          iT = zT.largestContentfulPaint?.renderTime || 0, TT = Math.max(iT - oT.startTime, 0), zT.largestContentfulPaint && (XT.l(zT.largestContentfulPaint), IT = [zT.largestContentfulPaint])
                        }
                        iT < kT.firstHiddenTime && (WT.value = TT, WT.entries = IT, zT())
                      }
                    },
                    DT = ["largest-contentful-paint"];
                  iT && DT.push("interaction-contentful-paint", "soft-navigation");
                  const LT = ki(DT, ST);
                  if (LT) {
                    zT = NI(TT, WT, Ei, oT.reportAllChanges);
                    const kT = ["keydown", "click", "visibilitychange"],
                      XT = TT => {
                        if (TT.isTrusted && !IT) {
                          const TT = WT.id;
                          ei((() => {
                            if (!IT) {
                              if (!iT) {
                                LT.disconnect();
                                for (const TT of kT) removeEventListener(TT, XT, {
                                  capture: !0
                                })
                              }
                              TT === WT.id && (IT = !0, zT(!0))
                            }
                          }))
                        }
                      };
                    for (const TT of kT) addEventListener(TT, XT, {
                      capture: !0
                    });
                    yI((iT => {
                      BT("back-forward-cache", WT.navigationId, WT.navigationInteractionId, WT.navigationURL, bI()), zT = NI(TT, WT, Ei, oT.reportAllChanges), PI((() => {
                        WT.value = performance.now() - iT.timeStamp, IT = !0, zT(!0)
                      }))
                    }))
                  }
                }))
              }((oT => {
                TT((TT => {
                  let oT = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: TT.value
                  };
                  if (TT.entries.length) {
                    const zT = TT.entries.at(-1),
                      kT = TT => TT.name === zT.url && (TT.requestStart || TT.startTime) <= zT.startTime,
                      WT = zT.url && (Ci.findLast(kT) || performance.getEntriesByType("resource").findLast(kT));
                    let XT;
                    oT.target = iT.get(zT), oT.lcpEntry = zT, zT.url && (oT.url = zT.url), WT && (oT.lcpResourceEntry = WT);
                    let BT = 0,
                      FT = 0;
                    if ("soft-navigation" !== TT.navigationType ? (XT = qI(), BT = XT?.activationStart ?? 0, FT = XT?.responseStart ?? 0) : (BT = TT.navigationStartTime || 0, XT = IT.u?.get(TT.navigationId)), XT) {
                      const IT = Math.max(0, FT - BT),
                        iT = Math.max(IT, WT ? (WT.requestStart || WT.startTime) - BT : 0),
                        zT = Math.min(TT.value, Math.max(iT, WT ? WT.responseEnd - BT : 0));
                      oT = {
                        ...oT,
                        timeToFirstByte: IT,
                        resourceLoadDelay: iT - IT,
                        resourceLoadDuration: zT - iT,
                        elementRenderDelay: TT.value - zT,
                        navigationEntry: XT
                      }
                    }
                  }
                  return Object.assign(TT, {
                    attribution: oT
                  })
                })(oT))
              }), oT)
          }((TT => {
            var oT;
            const {
              elementRenderDelay: IT,
              resourceLoadDelay: iT,
              resourceLoadDuration: zT,
              timeToFirstByte: kT,
              target: WT,
              url: XT,
              lcpResourceEntry: BT
            } = TT.attribution, FT = this.buildInitialValues(TT);
            this.addIfPresent(FT, "element_render_delay", IT), this.addIfPresent(FT, "resource_load_delay", iT), this.addIfPresent(FT, "resource_load_duration", zT), this.addIfPresent(FT, ai, kT);
            const ST = this.buildInitialContext(TT);
            this.addIfPresent(ST, "element", WT), (null === (oT = this.webVitalConfig) || void 0 === oT ? void 0 : oT.trackAttributionSources) && (this.addIfPresent(ST, "resource_url", XT), this.addIfPresent(ST, "resource_delivery_type", null === BT || void 0 === BT ? void 0 : BT.deliveryType), this.addIfPresent(ST, "resource_initiator_type", null === BT || void 0 === BT ? void 0 : BT.initiatorType)), this.pushMeasurement(FT, ST)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureTTFB() {
          var TT;
          ! function(TT) {
            ! function(TT) {
              let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const IT = Wi(oT);
              let iT = zi("TTFB"),
                zT = NI(TT, iT, ji, oT.reportAllChanges);
              Ji((() => {
                const kT = qI();
                if (kT) {
                  const WT = kT.responseStart;
                  iT.value = Math.max(WT - dI(), 0), iT.entries = [kT], zT(!0), yI((() => {
                    iT = zi("TTFB", 0, "back-forward-cache", iT.navigationId, iT.navigationInteractionId, iT.navigationURL, bI()), zT = NI(TT, iT, ji, oT.reportAllChanges), zT(!0)
                  })), IT && ki(["soft-navigation"], (IT => {
                    IT.forEach((IT => {
                      IT.navigationId && (iT = zi("TTFB", 0, "soft-navigation", IT.navigationId, IT.interactionId, IT.name, IT.startTime), iT.entries = [IT], zT = NI(TT, iT, ji, oT.reportAllChanges), zT(!0))
                    }))
                  }), oT)
                }
              }))
            }((oT => {
              TT((TT => {
                const oT = TT.entries[0];
                let IT = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: oT
                };
                if (TT.entries.length && oT instanceof PerformanceNavigationTiming) {
                  const iT = oT.activationStart || 0,
                    zT = Math.max((oT.workerStart || oT.fetchStart || 0) - iT, 0),
                    kT = Math.max(oT.domainLookupStart - iT, 0),
                    WT = Math.max(oT.connectStart - iT, 0),
                    XT = Math.max(oT.connectEnd - iT, 0);
                  IT = {
                    waitingDuration: zT,
                    cacheDuration: kT - zT,
                    dnsDuration: WT - kT,
                    connectionDuration: XT - WT,
                    requestDuration: TT.value - XT,
                    navigationEntry: oT
                  }
                }
                return Object.assign(TT, {
                  attribution: IT
                })
              })(oT))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((TT => {
            const {
              dnsDuration: oT,
              connectionDuration: IT,
              requestDuration: iT,
              waitingDuration: zT,
              cacheDuration: kT
            } = TT.attribution, WT = this.buildInitialValues(TT);
            this.addIfPresent(WT, "dns_duration", oT), this.addIfPresent(WT, "connection_duration", IT), this.addIfPresent(WT, "request_duration", iT), this.addIfPresent(WT, "waiting_duration", zT), this.addIfPresent(WT, "cache_duration", kT);
            const XT = this.buildInitialContext(TT);
            this.pushMeasurement(WT, XT)
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
          var oT;
          const IT = null !== (oT = To("com.grafana.faro.lastNavigationId", PT)) && void 0 !== oT ? oT : OI;
          return {
            id: TT.id,
            rating: TT.rating,
            navigation_type: TT.navigationType,
            navigation_entry_id: IT
          }
        }
        pushMeasurement(TT, oT) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: TT
          }, {
            context: oT
          })
        }
        addIfPresent(TT, oT, IT) {
          IT && (TT[oT] = IT)
        }
        addNumberIfDefined(TT, oT, IT) {
          void 0 !== IT && (TT[oT] = IT)
        }
      },
      Qi = class extends iI {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = zI
        }
        initialize() {
          this.logDebug("Initializing"), new Yi(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Oi = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Hi() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const oT of TT)
        if ("traceparent" === oT.name) {
          if (!Oi.test(oT.description)) continue;
          const [, TT, IT] = oT.description.split("-");
          if (null != TT && null != IT) return {
            traceId: TT,
            spanId: IT
          };
          break
        }
    }

    function ni(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: IT,
        monoNow: iT
      } = oT;
      return Math.min(IT, IT - (iT - TT))
    }

    function qi(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [IT, iT] of Object.entries(oT)) {
        const oT = TT[IT];
        return null != oT && (CT(iT) ? iT.includes(oT) : oT === iT)
      }
      return !0
    }

    function Zi(TT) {
      const {
        connectEnd: oT,
        connectStart: IT,
        decodedBodySize: iT,
        domainLookupEnd: zT,
        domainLookupStart: kT,
        duration: WT,
        encodedBodySize: XT,
        fetchStart: BT,
        initiatorType: FT,
        name: ST,
        nextHopProtocol: DT,
        redirectEnd: LT,
        redirectStart: xT,
        renderBlockingStatus: cT,
        requestStart: KT,
        responseEnd: MT,
        responseStart: rT,
        responseStatus: AT,
        secureConnectionStart: gT,
        transferSize: hT,
        workerStart: wT
      } = TT;
      return {
        name: ST,
        httpHost: si(ST),
        duration: ti(WT),
        tcpHandshakeTime: ti(oT - IT),
        dnsLookupTime: ti(zT - kT),
        tlsNegotiationTime: ti(oT - gT),
        responseStatus: ti(AT),
        redirectTime: ti(LT - xT),
        requestTime: ti(rT - KT),
        responseTime: ti(MT - rT),
        fetchTime: ti(MT - BT),
        serviceWorkerTime: ti(wT > 0 ? BT - wT : 0),
        decodedBodySize: ti(iT),
        encodedBodySize: ti(XT),
        cacheHitStatus: function() {
          let TT = "fullLoad";
          0 === hT ? iT > 0 && (TT = "cache") : null != AT ? 304 === AT && (TT = "conditionalFetch") : XT > 0 && hT < XT && (TT = "conditionalFetch");
          return TT
        }(),
        renderBlockingStatus: ti(cT),
        protocol: DT,
        initiatorType: FT,
        visibilityState: document.visibilityState,
        ttfb: ti(rT - KT),
        transferSize: ti(hT)
      }
    }

    function li(TT) {
      const {
        activationStart: oT,
        domComplete: IT,
        domContentLoadedEventEnd: iT,
        domContentLoadedEventStart: zT,
        domInteractive: kT,
        fetchStart: WT,
        loadEventEnd: XT,
        loadEventStart: BT,
        responseStart: FT,
        type: ST
      } = TT, DT = function() {
        var TT;
        return null != (null === (TT = performance.timing) || void 0 === TT ? void 0 : TT.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return So(So({}, Zi(TT)), {}, {
        pageLoadTime: ti(IT - WT),
        documentParsingTime: ti(DT ? kT - DT : null),
        domProcessingTime: ti(IT - kT),
        domContentLoadHandlerTime: ti(iT - zT),
        onLoadTime: ti(XT - BT),
        ttfb: ti(Math.max(FT - (null !== oT && void 0 !== oT ? oT : 0), 0)),
        type: ST
      })
    }

    function si(TT) {
      try {
        return new URL(TT).host || OI
      } catch (oT) {
        return OI
      }
    }

    function ti(TT) {
      return null == TT ? OI : "number" === typeof TT ? Math.round(TT > 0 ? TT : 0).toString() : TT.toString()
    }
    const Gi = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function bi(TT, oT, IT, iT, zT, kT, WT) {
      try {
        var XT = TT[kT](WT),
          BT = XT.value
      } catch (TT) {
        return void IT(TT)
      }
      XT.done ? oT(BT) : Promise.resolve(BT).then(iT, zT)
    }

    function yi(TT) {
      return function() {
        var oT = this,
          IT = arguments;
        return new Promise((function(iT, zT) {
          var kT = TT.apply(oT, IT);

          function WT(TT) {
            bi(kT, iT, zT, WT, XT, "next", TT)
          }

          function XT(TT) {
            bi(kT, iT, zT, WT, XT, "throw", TT)
          }
          WT(void 0)
        }))
      }
    }
    const Ni = new hI;
    var Pi = class extends iI {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = zI
      }
      initialize() {
        var TT = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let oT = !1;
        const IT = () => {
          ! function(TT) {
            if ("complete" === document.readyState) TT();
            else {
              const oT = () => {
                "complete" === document.readyState && (TT(), document.removeEventListener("readystatechange", oT))
              };
              document.addEventListener("readystatechange", oT)
            }
          }(yi((function*() {
            if (oT) return;
            const IT = TT.api.pushEvent,
              {
                faroNavigationId: iT
              } = yield function(TT) {
                let oT;
                const IT = new Promise((TT => {
                  oT = TT
                }));
                return new PerformanceObserver((IT => {
                  var iT;
                  const [zT] = IT.getEntries();
                  if (null == zT || yT(zT.name)) return;
                  const kT = zT.toJSON();
                  let WT = Hi(null === kT || void 0 === kT ? void 0 : kT.serverTiming);
                  const XT = null !== (iT = To("com.grafana.faro.lastNavigationId", PT)) && void 0 !== iT ? iT : OI,
                    BT = So(So({}, li(kT)), {}, {
                      faroNavigationId: ro(),
                      faroPreviousNavigationId: XT
                    });
                  oo("com.grafana.faro.lastNavigationId", BT.faroNavigationId, PT), TT("faro.performance.navigation", BT, void 0, {
                    spanContext: WT,
                    timestampOverwriteMs: ni(kT.startTime)
                  }), oT(BT)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), IT
              }(IT);
            oT || null == iT || function(TT, oT, IT, iT) {
              const zT = iT.trackResources;
              new PerformanceObserver((iT => {
                const kT = iT.getEntries(),
                  WT = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const XT of kT) {
                  if (yT(XT.name)) continue;
                  null === IT || void 0 === IT || IT.notify({
                    type: "resource"
                  });
                  const iT = XT.toJSON();
                  let kT = Hi(null === iT || void 0 === iT ? void 0 : iT.serverTiming);
                  (null == zT && qi(iT, Gi) || zT) && oT("faro.performance.resource", So(So({}, Zi(iT)), {}, {
                    faroNavigationId: TT,
                    faroResourceId: ro()
                  }), void 0, {
                    spanContext: kT,
                    timestampOverwriteMs: ni(iT.startTime, WT)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(iT, IT, Ni, TT.config)
          })))
        };
        this.cancelInitialization = () => {
          oT = !0, document.removeEventListener("prerenderingchange", IT)
        }, document.prerendering ? document.addEventListener("prerenderingchange", IT, {
          once: !0
        }) : IT()
      }
      destroy() {
        var TT;
        null === (TT = this.cancelInitialization) || void 0 === TT || TT.call(this), this.cancelInitialization = void 0
      }
    };
    const di = "data-faro-user-action-name",
      Vi = di.replace(/-name$/, "-timeout"),
      Tz = 1e3;

    function oz(TT) {
      return `data-${(TT.startsWith("data-")?TT.slice(5):TT).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Iz(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : to;
      if (void 0 === TT) return oT;
      let iT = NaN;
      try {
        iT = "string" === typeof TT && "" === TT.trim() ? NaN : Number(TT)
      } catch (zT) {}
      return !Number.isFinite(iT) || iT <= 0 ? (IT(`initialActivityTimeout must be a finite number greater than zero; using ${oT} ms`), oT) : iT > 1e3 ? (IT(`initialActivityTimeout cannot exceed ${Tz} ms; clamping to the maximum`), Tz) : iT
    }

    function iz(TT, oT, IT) {
      return void 0 !== TT && window.clearTimeout(TT), window.setTimeout((() => {
        oT()
      }), IT)
    }

    function zz(TT) {
      return TT.type === gI
    }
    let kz, Wz;

    function Xz() {
      return kz || (kz = new hI), Wz || (Wz = new MutationObserver(((TT, oT) => {
        kz.notify({
          type: "dom-mutation"
        })
      })), Wz.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), kz
    }
    const Bz = "fetch",
      Fz = "xhr";
    let Sz, Dz, Lz, xz, cz = !1;

    function Kz() {
      if (Sz) return Sz;

      function TT(TT) {
        Sz.notify({
          type: AI,
          request: TT
        })
      }

      function oT(TT) {
        Sz.notify({
          type: gI,
          request: TT
        })
      }
      return Sz = new hI, cz || (! function(TT) {
        let {
          onRequestEnd: oT,
          onRequestStart: IT
        } = TT;
        Lz || (Lz = window.fetch);
        window.fetch = function() {
          var TT, iT;
          const zT = null !== (TT = NT(arguments[0])) && void 0 !== TT ? TT : "",
            kT = yT(zT),
            WT = (null !== (iT = arguments[1]) && void 0 !== iT ? iT : {}).method,
            XT = ro();
          return kT || IT({
            url: zT,
            method: WT,
            requestId: XT,
            apiType: Bz
          }), Lz.apply(this, arguments).then((TT => (kT || oT({
            url: zT,
            method: WT,
            requestId: XT,
            apiType: Bz
          }), TT))).catch((TT => {
            throw kT || oT({
              url: zT,
              method: WT,
              requestId: XT,
              apiType: Bz
            }), TT
          }))
        }
      }({
        onRequestStart: TT,
        onRequestEnd: oT
      }), function(TT) {
        let {
          onRequestStart: oT,
          onRequestEnd: IT
        } = TT;
        Dz || (Dz = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const TT = arguments[1],
            iT = yT(TT),
            zT = arguments[0],
            kT = ro();
          this.addEventListener("loadstart", (function() {
            iT || oT({
              url: TT,
              method: zT,
              requestId: kT,
              apiType: Fz
            })
          })), this.addEventListener("load", (function() {
            iT || IT({
              url: TT,
              method: zT,
              requestId: kT,
              apiType: Fz
            })
          })), this.addEventListener("error", (function() {
            iT || IT({
              url: TT,
              method: zT,
              requestId: kT,
              apiType: Fz
            })
          })), this.addEventListener("abort", (function() {
            iT || IT({
              url: TT,
              method: zT,
              requestId: kT,
              apiType: Fz
            })
          })), Dz.apply(this, arguments)
        }
      }({
        onRequestStart: TT,
        onRequestEnd: oT
      }), cz = !0), Sz
    }
    let Mz, rz = !1;
    let Az = function(TT) {
      return TT[TT.Started = 0] = "Started", TT[TT.Halted = 1] = "Halted", TT[TT.Cancelled = 2] = "Cancelled", TT[TT.Ended = 3] = "Ended", TT
    }({});
    var gz = class {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = TT, this.logDebug = oT, this.initialActivityTimeout = IT, this.http = Kz(), this.dom = Xz(), this.perf = (xz || (xz = new hI), rz || (Mz = Ni.subscribe((TT => {
          "resource" === TT.type && xz.notify({
            type: "resource-entry"
          })
        })), rz = !0), xz), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new hI).merge(this.http, this.dom, this.perf).takeWhile((() => [Az.Started, Az.Halted].includes(this.userAction.getState()))).filter((TT => !!(this.userAction.getState() !== Az.Halted || zz(TT) && this.runningRequests.has(TT.request.requestId)))).subscribe((TT => {
          (function(TT) {
            return TT.type === AI
          })(TT) && this.runningRequests.set(TT.request.requestId, TT.request), zz(TT) && this.runningRequests.delete(TT.request.requestId), zz(TT) ? this.userAction.getState() === Az.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((TT => [Az.Ended, Az.Cancelled].includes(TT))).first().subscribe((() => this.cleanup())), this.startupTid = iz(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Az.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Az.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = iz(this.haltTid, (() => {
          this.userAction.getState() === Az.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var TT, oT;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (TT = this.allMonitorsSub) || void 0 === TT || TT.unsubscribe(), null === (oT = this.stateSub) || void 0 === oT || oT.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(TT) {
        void 0 !== TT && window.clearTimeout(TT)
      }
    };

    function hz(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : to;
      var IT;
      const {
        api: iT,
        config: zT,
        internalLogger: kT
      } = TT, WT = Iz(null === (IT = zT.userActionsInstrumentation) || void 0 === IT ? void 0 : IT.initialActivityTimeout, 100, oT);
      return {
        processUserEvent: function(TT) {
          var oT, IT;
          const kT = null !== (oT = null === (IT = zT.userActionsInstrumentation) || void 0 === IT ? void 0 : IT.dataAttributeName) && void 0 !== oT ? oT : di,
            WT = TT.target;
          if (!(WT instanceof Element)) return;
          const XT = function(TT, oT) {
              let IT = TT;
              for (; IT;) {
                if (IT.hasAttribute(oT)) return IT;
                IT = IT.parentElement
              }
              return null
            }(WT, oz(kT)),
            BT = function(TT, oT) {
              if (!TT) return;
              const IT = function(TT) {
                  return oz(TT).slice(5).replace(/-(.)/g, ((TT, oT) => oT.toUpperCase()))
                }(oT),
                iT = TT.dataset;
              for (const zT in iT)
                if (zT === IT) return iT[zT]
            }(XT, kT);
          if (!XT || !BT) return;
          const FT = function(TT, oT) {
            const IT = TT.getAttribute(function(TT) {
              const oT = oz(TT);
              return oT.endsWith("-name") ? `${oT.slice(0,-5)}-timeout` : `${oT}-timeout`
            }(oT));
            return null === IT ? void 0 : Number(IT)
          }(XT, kT);
          iT.startUserAction(BT, {}, {
            triggerName: TT.type,
            initialActivityTimeout: FT
          })
        },
        processUserActionStarted: function(TT, IT) {
          const iT = TT,
            zT = Iz(IT, WT, oT);
          new gz(iT, kT.debug, zT).attach()
        }
      }
    }
    const wz = "user_action_start",
      mz = {
        Normal: "normal",
        Critical: "critical"
      };
    var ez = class {
        constructor() {
          this.buffer = []
        }
        addItem(TT) {
          this.buffer.push(TT)
        }
        flushBuffer(TT) {
          if (fT(TT))
            for (const oT of this.buffer) TT(oT);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Rz = class extends hI {
        constructor(TT) {
          let {
            name: oT,
            parentId: IT,
            trigger: iT,
            transports: zT,
            attributes: kT,
            trackUserActionsExcludeItem: WT,
            importance: XT = mz.Normal,
            pushEvent: BT
          } = TT;
          super(), this.name = oT, this.attributes = kT, this.id = ro(), this.trigger = iT, this.parentId = null !== IT && void 0 !== IT ? IT : this.id, this.trackUserActionsExcludeItem = WT, this.importance = XT, this._pushEvent = BT, this._itemBuffer = new ez, this._transports = zT, this._state = 0, this._start()
        }
        addItem(TT) {
          return 0 === this._state && (this._itemBuffer.addItem(TT), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Lo(), this._startTimeMono = xo())
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
          const TT = Lo(),
            oT = xo() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((TT => {
            if (function(TT, oT) {
                return (null === oT || void 0 === oT ? void 0 : oT(TT)) || "measurement" === TT.type && "web-vitals" === TT.payload.type
              }(TT, this.trackUserActionsExcludeItem)) return void this._transports.execute(TT);
            const oT = TI(TI({}, TT), {}, {
              payload: TI(TI({}, TT.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(oT)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", TI({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: TT.toString(),
            userActionDuration: oT.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Qo(this.attributes)), void 0, {
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
    const uz = new hI;

    function vz(TT, oT) {
      return !!TT && (0 === (null === TT || void 0 === TT ? void 0 : TT.getState()) && (TT.addItem(oT), !0))
    }
    var Ez = class extends iI {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = zI
        }
        initialize() {
          const {
            processUserEvent: TT,
            processUserActionStarted: oT
          } = hz(KT, (TT => this.logWarn(TT)));
          this._processUserEvent = TT, this._processKeydown = oT => {
            [" ", "Enter"].includes(oT.key) && TT(oT)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = uz.subscribe((TT => {
            let {
              type: IT,
              userAction: iT,
              initialActivityTimeout: zT
            } = TT;
            "user_action_start" === IT && oT(iT, zT)
          }))
        }
        destroy() {
          var TT;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (TT = this._userActionSub) || void 0 === TT || TT.unsubscribe()
        }
      },
      fz = class extends iI {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = zI, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(TT) {
          const oT = {
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
          this.api.pushEvent("securitypolicyviolation", Qo(oT))
        }
      };
    var Cz = class extends hI {
      constructor(TT, oT) {
        var IT, iT, zT, kT;
        super(), this._tracking = !1, this.eventsObservable = TT, this._options = {
          inactivityMs: null !== (IT = null === oT || void 0 === oT ? void 0 : oT.inactivityMs) && void 0 !== IT ? IT : 100,
          drainTimeoutMs: null !== (iT = null === oT || void 0 === oT ? void 0 : oT.drainTimeoutMs) && void 0 !== iT ? iT : 1e4,
          isOperationStart: null !== (zT = null === oT || void 0 === oT ? void 0 : oT.isOperationStart) && void 0 !== zT ? zT : () => {},
          isOperationEnd: null !== (kT = null === oT || void 0 === oT ? void 0 : oT.isOperationEnd) && void 0 !== kT ? kT : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((TT => {
          var oT;
          this._lastEventTime = xo(), null === (oT = this._currentEvents) || void 0 === oT || oT.push(TT);
          const IT = this._options.isOperationStart(TT);
          var iT;
          IT && (null === (iT = this._activeOperations) || void 0 === iT || iT.set(IT, !0));
          const zT = this._options.isOperationEnd(TT);
          var kT;
          zT && (null === (kT = this._activeOperations) || void 0 === kT || kT.delete(zT));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = xo(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let TT;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), TT = this.hasActiveOperations() ? xo() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: TT
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = jz(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = jz(this._drainTid, (() => {
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

    function jz(TT, oT, IT) {
      return TT && clearTimeout(TT), TT = setTimeout((() => {
        oT()
      }), IT)
    }
    let Jz;
    const Uz = new Set,
      az = new Map;
    let Yz, Qz, Oz, Hz, nz, qz, Zz, lz, sz = !1;
    var tz = class extends iI {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = zI
      }
      initialize() {
        const TT = Kz(),
          oT = Xz(),
          IT = function() {
            function TT(TT, oT) {
              const IT = null !== oT && void 0 !== oT ? oT : location.href;
              IT !== Qz && (Yz.notify({
                type: "url-change",
                from: Qz,
                to: IT,
                trigger: TT
              }), Qz = IT)
            }
            if (Yz || (Yz = new hI, Qz = location.href), !sz)
              if ("navigation" in window && "NavigateEvent" in window) {
                Zz = oT => {
                  try {
                    const IT = null === oT || void 0 === oT ? void 0 : oT.destination;
                    (null === IT || void 0 === IT ? void 0 : IT.sameDocument) && "string" === typeof IT.url && TT("navigate", IT.url)
                  } catch (IT) {}
                }, window.navigation.addEventListener("navigate", Zz);
                const oT = window.NavigateEvent;
                oT && oT.prototype && "function" === typeof oT.prototype.intercept && (lz || (lz = oT.prototype.intercept), oT.prototype.intercept = function(oT) {
                  try {
                    const oT = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      IT = null === this || void 0 === this ? void 0 : this.destination;
                    oT && IT && !1 === IT.sameDocument && "string" === typeof IT.url && TT("navigate-intercept", IT.url)
                  } catch (IT) {}
                  return lz.call(this, oT)
                }), sz = !0
              } else Oz || (Oz = window.history.pushState), window.history.pushState = function() {
                for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
                const zT = Oz.apply(window.history, IT);
                return TT("pushState"), zT
              }, Hz || (Hz = window.history.replaceState), window.history.replaceState = function() {
                for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
                const zT = Hz.apply(window.history, IT);
                return TT("replaceState"), zT
              }, nz = () => TT("popstate"), qz = () => TT("hashchange"), window.addEventListener("popstate", nz), window.addEventListener("hashchange", qz), sz = !0;
            return Yz
          }(),
          iT = (zT = ["pointerdown", "keydown"], Jz || (Jz = new hI), zT.forEach((TT => {
            if (!Uz.has(TT)) {
              const oT = () => {
                Jz.notify({
                  type: "interaction",
                  name: TT
                })
              };
              window.addEventListener(TT, oT), Uz.add(TT), az.set(TT, oT)
            }
          })), Jz);
        var zT;
        const kT = new Cz((new hI).merge(TT, oT, IT), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: TT => function(TT) {
            return TT.type === AI
          }(TT) ? TT.request.requestId : void 0,
          isOperationEnd: TT => function(TT) {
            return TT.type === gI
          }(TT) ? TT.request.requestId : void 0
        });
        kT.filter((TT => "tracking-ended" === TT.message)).subscribe((TT => {
          var oT, IT;
          if ((null === (oT = TT.events) || void 0 === oT ? void 0 : oT.some((TT => "url-change" === TT.type))) && (null === (IT = TT.events) || void 0 === IT ? void 0 : IT.some((TT => "dom-mutation" === TT.type)))) {
            var iT;
            const oT = null === (iT = TT.events) || void 0 === iT ? void 0 : iT.find((TT => "url-change" === TT.type));
            KT.api.pushEvent("faro.navigation", {
              fromUrl: null === oT || void 0 === oT ? void 0 : oT.from,
              toUrl: null === oT || void 0 === oT ? void 0 : oT.to,
              sameDocument: String(!0),
              duration: TT.duration
            })
          }
        })), iT.subscribe((() => {
          kT.startTracking()
        }))
      }
    };

    function Gz() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const oT = [new Ez, new QI, new Qi, new kI, new HI, new tz];
      return !1 !== TT.enablePerformanceInstrumentation && oT.unshift(new Pi), !1 !== TT.enableContentSecurityPolicyInstrumentation && oT.push(new fz), !1 !== TT.captureConsole && oT.push(new aI), oT
    }
    var pz = IT(6197);
    let bz, yz;

    function Nz() {
      const TT = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return bz === TT && yz || (yz = new pz.UAParser(TT).getResult(), bz = TT), yz
    }
    const Pz = () => {
        const {
          browser: TT,
          os: oT,
          ua: IT
        } = Nz(), {
          name: iT,
          version: zT
        } = TT, {
          name: kT,
          version: WT
        } = oT, XT = navigator.language, BT = IT.includes("Mobi"), FT = function() {
          if (!iT || !zT) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== iT && void 0 !== iT ? iT : OI,
            version: null !== zT && void 0 !== zT ? zT : OI,
            os: `${null!==kT&&void 0!==kT?kT:OI} ${null!==WT&&void 0!==WT?WT:OI}`,
            userAgent: null !== IT && void 0 !== IT ? IT : OI,
            language: null !== XT && void 0 !== XT ? XT : OI,
            mobile: BT,
            brands: null !== FT && void 0 !== FT ? FT : OI,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      dz = () => {
        const {
          name: TT,
          version: oT
        } = Nz().os;
        if (!TT && !oT) return {};
        const IT = {};
        return TT && (IT.name = TT), oT && (IT.version = oT), {
          os: IT
        }
      };

    function Vz(TT) {
      var oT, IT, iT;
      return {
        id: null !== (oT = null === (IT = KT.config) || void 0 === IT || null === (IT = IT.sessionTracking) || void 0 === IT || null === (iT = IT.generateSessionId) || void 0 === iT ? void 0 : iT.call(IT)) && void 0 !== oT ? oT : ro(),
        attributes: TT
      }
    }
    const Tk = () => ({
      sdk: {
        name: "faro-web",
        version: zI
      }
    });
    var Ik = class extends II {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ik = function(TT) {
      return TT.EXCEPTION = "exception", TT.LOG = "log", TT.MEASUREMENT = "measurement", TT.TRACE = "trace", TT.EVENT = "event", TT
    }({});
    const zk = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function kk(TT, oT) {
      var IT, iT;
      if (void 0 === oT) return TT;
      if (void 0 === TT) return {
        resourceSpans: oT
      };
      const zT = null === (IT = TT.resourceSpans) || void 0 === IT ? void 0 : IT[0];
      if (void 0 === zT) return TT;
      const kT = (null === zT || void 0 === zT ? void 0 : zT.scopeSpans) || [],
        WT = (null === oT || void 0 === oT || null === (iT = oT[0]) || void 0 === iT ? void 0 : iT.scopeSpans) || [];
      return TI(TI({}, TT), {}, {
        resourceSpans: [TI(TI({}, zT), {}, {
          scopeSpans: [...kT, ...WT]
        })]
      })
    }

    function Wk(TT) {
      let oT = {
        meta: {}
      };
      return void 0 !== TT[0] && (oT.meta = TT[0].meta), TT.forEach((TT => {
        switch (TT.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const IT = zk[TT.type],
              iT = oT[IT];
            oT = TI(TI({}, oT), {}, {
              [IT]: void 0 === iT ? [TT.payload] : [...iT, TT.payload]
            });
            break
          }
          case "trace":
            oT = TI(TI({}, oT), {}, {
              traces: kk(oT.traces, TT.payload.resourceSpans)
            })
        }
      })), oT
    }
    var Xk = class extends Ik {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-console", this.version = zI
      }
      send(TT) {
        var oT;
        return this.unpatchedConsole[null !== (oT = this.options.level) && void 0 !== oT ? oT : wI.DEBUG]("New event", Wk([TT]))
      }
    };
    const Bk = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Fk = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Sk = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Dk = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Lk = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      xk = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function ck(TT) {
      let {
        weekday: oT,
        day: IT,
        month: iT,
        year: zT,
        hour: kT,
        minute: WT,
        second: XT
      } = TT;
      if (zT < 1900 || IT < 1 || kT > 23 || WT > 59 || XT > 60) return;
      const BT = 60 === XT,
        FT = new Date(0);
      return FT.setUTCFullYear(zT, iT, IT), FT.setUTCHours(kT, WT, BT ? 59 : XT, 0), FT.getUTCDay() === oT && FT.getUTCDate() === IT && FT.getUTCMonth() === iT && FT.getUTCFullYear() === zT && FT.getUTCHours() === kT && FT.getUTCMinutes() === WT && FT.getUTCSeconds() === (BT ? 59 : XT) ? FT.getTime() + (BT ? 1e3 : 0) : void 0
    }
    var Kk = class {
      constructor(TT) {
        this.options = TT, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var TT = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const oT = this.sequence++;
        let IT = !1;
        return {
          deliver: function() {
            var IT = yi((function*(IT) {
              const iT = TT.options.getNow();
              let zT, kT = 0;
              for (;;) {
                var WT, XT, BT;
                const FT = TT.options.retry.maxAttempts - kT,
                  ST = yield TT.runAttempt((() => IT(FT, TT.unloading)), kT > 0);
                if (kT += ST.attemptsMade, "success" === ST.kind) return {
                  kind: "success",
                  attempts: kT,
                  elapsedTimeMs: TT.options.getNow() - iT
                };
                if (zT = ST.failure, "terminal" === ST.kind || TT.unloading) return {
                  kind: "terminal",
                  attempts: kT,
                  elapsedTimeMs: TT.options.getNow() - iT,
                  failure: zT
                };
                if (kT >= TT.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: kT,
                  elapsedTimeMs: TT.options.getNow() - iT,
                  failure: zT,
                  reason: "retries-exhausted"
                };
                if (null != ST.retryAfterMs && ST.retryAfterMs > TT.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: kT,
                  elapsedTimeMs: TT.options.getNow() - iT,
                  failure: zT,
                  reason: "retry-after-too-long"
                };
                const DT = Math.min(null !== (WT = ST.retryAfterMs) && void 0 !== WT ? WT : TT.options.retry.initialBackoffMs * Math.pow(TT.options.retry.backoffMultiplier, kT - 1), TT.options.retry.maxBackoffMs);
                if (null === (XT = (BT = TT.options).onRetry) || void 0 === XT || XT.call(BT, DT, kT + 1), yield TT.waitForTurn(oT, DT)) {
                  const oT = TT.options.retry.maxAttempts - kT,
                    zT = yield TT.runAttempt((() => IT(oT, !0)));
                  return kT += zT.attemptsMade, {
                    kind: "success" === zT.kind ? "success" : "terminal",
                    attempts: kT,
                    elapsedTimeMs: TT.options.getNow() - iT,
                    failure: "success" === zT.kind ? void 0 : zT.failure
                  }
                }
              }
            }));
            return function(TT) {
              return IT.apply(this, arguments)
            }
          }(),
          release: () => {
            IT || (IT = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const TT = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const oT of TT) oT.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((IT, iT) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const oT = () => {
                this.inProgress--, this.runNextAttempt()
              };
              TT().then((TT => {
                oT(), IT(TT)
              }), (TT => {
                oT(), iT(TT)
              }))
            },
            isRedelivery: oT
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const TT = this.options.getNow(),
            oT = this.attemptQueue.findIndex((oT => {
              let {
                isRedelivery: IT
              } = oT;
              return this.unloading || !IT || TT >= this.nextSendAt
            }));
          if (oT < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - TT)));
          const [IT] = this.attemptQueue.splice(oT, 1);
          IT.isRedelivery && !this.unloading && (this.nextSendAt = TT + 1), IT.run()
        }
      }
      waitForTurn(TT, oT) {
        const IT = Math.min(oT * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((oT => {
          this.waiting.push({
            sequence: TT,
            readyAt: this.options.getNow() + IT,
            resolve: oT
          }), this.waiting.sort(((TT, oT) => TT.readyAt === oT.readyAt ? TT.sequence - oT.sequence : TT.readyAt - oT.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const TT = this.waiting[0],
          oT = TT.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const oT = this.waiting.indexOf(TT);
          oT >= 0 && this.waiting.splice(oT, 1), TT.resolve(!1), this.scheduleNext()
        }), Math.max(0, oT - this.options.getNow()))
      }
    };

    function Mk(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if ({}.hasOwnProperty.call(TT, iT)) {
            if (oT.includes(iT)) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.includes(IT) || {}.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function rk(TT) {
      const {
        size: oT,
        concurrency: IT
      } = TT, iT = [];
      let zT = 0;
      const kT = () => {
        if (zT < IT && iT.length) {
          const {
            producer: TT,
            resolve: oT,
            reject: IT
          } = iT.shift();
          zT++, TT().then((TT => {
            zT--, kT(), oT(TT)
          }), (TT => {
            zT--, kT(), IT(TT)
          }))
        }
      };
      return {
        add: TT => {
          if (iT.length + zT >= oT) throw new Error("Task buffer full");
          return new Promise(((oT, IT) => {
            iT.push({
              producer: TT,
              resolve: oT,
              reject: IT
            }), kT()
          }))
        }
      }
    }
    const Ak = ["headers"],
      gk = ["keepalive", "signal"],
      hk = new Set([408, 425, 429, 500, 502, 503, 504]),
      wk = new Set([429, 503]);
    let mk = 0,
      ek = 0;
    var Rk = class extends Error {};
    var uk = class extends Ik {
      constructor(TT) {
        var oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT;
        super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = zI, this.pendingCustomSends = 0, this.getNow = null !== (oT = TT.getNow) && void 0 !== oT ? oT : Date.now, this.requestTimeoutMs = null !== (IT = TT.requestTimeoutMs) && void 0 !== IT ? IT : 1e4, this.compressionEnabled = null !== (iT = TT.requestCompression) && void 0 !== iT && iT && "undefined" !== typeof CompressionStream, TT.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Kk({
          bufferSize: null !== (zT = TT.bufferSize) && void 0 !== zT ? zT : 30,
          concurrency: null !== (kT = TT.concurrency) && void 0 !== kT ? kT : 5,
          retry: {
            maxAttempts: null !== (WT = null === (XT = TT.retry) || void 0 === XT ? void 0 : XT.maxAttempts) && void 0 !== WT ? WT : 3,
            initialBackoffMs: null !== (BT = null !== (FT = null === (ST = TT.retry) || void 0 === ST ? void 0 : ST.initialBackoffMs) && void 0 !== FT ? FT : TT.defaultRateLimitBackoffMs) && void 0 !== BT ? BT : 1e3,
            maxBackoffMs: null !== (DT = null === (LT = TT.retry) || void 0 === LT ? void 0 : LT.maxBackoffMs) && void 0 !== DT ? DT : 3e4,
            backoffMultiplier: null !== (xT = null === (cT = TT.retry) || void 0 === cT ? void 0 : cT.backoffMultiplier) && void 0 !== xT ? xT : 2
          },
          getNow: this.getNow,
          getRandom: null !== (KT = TT.getRandom) && void 0 !== KT ? KT : Math.random,
          onRetry: (TT, oT) => {
            this.logDebug(`Retrying failed request after ${TT}ms. Attempt ${oT}.`)
          }
        }), this.customPromiseBuffer = rk({
          size: null !== (MT = TT.bufferSize) && void 0 !== MT ? MT : 30,
          concurrency: null !== (rT = TT.concurrency) && void 0 !== rT ? rT : 5
        }), this.defaultPromiseBuffer = {
          add: TT => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(TT);
            const oT = this.deliveryQueue.reserve();
            if (!oT) throw new Error("Task buffer full");
            return this.runBufferedTask(oT, TT)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (TT => {
          TT.persisted && this.deliveryQueue.resume()
        })))
      }
      send(TT) {
        var oT = this;
        return yi((function*() {
          const IT = oT.promiseBuffer;
          if (IT !== oT.defaultPromiseBuffer || IT.add !== oT.defaultBufferAdd) {
            oT.pendingCustomSends++;
            try {
              yield IT.add((() => oT.deliver(TT)))
            } catch (iT) {
              oT.logError("Permanent delivery failure", {
                error: iT,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              oT.pendingCustomSends--
            }
          } else yield oT.deliver(TT)
        }))()
      }
      runBufferedTask(TT, oT) {
        return yi((function*() {
          let IT;
          try {
            return yield TT.deliver(yi((function*() {
              return IT = yield oT(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), IT
          } finally {
            TT.release()
          }
        }))()
      }
      deliver(TT) {
        var oT = this;
        return yi((function*() {
          const IT = oT.deliveryQueue.reserve();
          if (IT) try {
            const iT = yield oT.prepareRequest(TT), zT = yield IT.deliver(((TT, IT) => oT.performAttempt(iT, TT, IT)));
            "terminal" === zT.kind && oT.logError("retries-exhausted" === zT.reason ? "Delivery retries exhausted" : "Permanent delivery failure", So(So({}, zT.failure), {}, {
              reason: zT.reason,
              attempts: zT.attempts,
              elapsedTimeMs: zT.elapsedTimeMs
            }))
          } catch (iT) {
            oT.logError("Permanent delivery failure", {
              error: iT,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            IT.release()
          } else oT.logError("Permanent delivery failure", {
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
        var oT = this;
        return yi((function*() {
          var IT, iT;
          const zT = Wk(TT),
            kT = null === (IT = zT.meta.session) || void 0 === IT ? void 0 : IT.id,
            WT = JSON.stringify(zT),
            XT = null !== (iT = oT.options.requestOptions) && void 0 !== iT ? iT : {},
            {
              headers: BT = {}
            } = XT,
            FT = Mk(XT, Ak),
            {
              keepalive: ST,
              signal: DT
            } = FT,
            LT = Mk(FT, gk),
            xT = {};
          for (const [TT, oT] of Object.entries(BT)) xT[TT] = "function" === typeof oT ? yield oT(): oT;
          let cT = WT,
            KT = function(TT) {
              return "undefined" === typeof TextEncoder ? TT.length : (new TextEncoder).encode(TT).byteLength
            }(WT);
          const MT = {};
          return oT.compressionEnabled && (cT = yield oT.compress(WT), KT = cT.size, MT["Content-Encoding"] = "gzip"), {
            bodySize: KT,
            sessionId: kT,
            requestInit: So({
              method: "POST",
              headers: So(So(So(So(So({
                "Content-Type": "application/json"
              }, MT), xT), oT.options.apiKey ? {
                "x-api-key": oT.options.apiKey
              } : {}), kT ? {
                "x-faro-session-id": kT
              } : {}), {}, {
                "Idempotency-Key": ro(20)
              }),
              body: cT
            }, LT)
          }
        }))()
      }
      performAttempt(TT, oT, IT) {
        var iT = this;
        return yi((function*() {
          var zT;
          const kT = null === (zT = iT.options.requestOptions) || void 0 === zT ? void 0 : zT.signal;
          if (null === kT || void 0 === kT ? void 0 : kT.aborted) return {
            kind: "terminal",
            failure: {
              error: kT.reason
            },
            attemptsMade: 0
          };
          let WT = 0;
          try {
            var XT;
            const zT = yield iT.fetchWithKeepaliveFallback(TT.requestInit, TT.bodySize, !!IT || (null === (XT = iT.options.requestOptions) || void 0 === XT ? void 0 : XT.keepalive), oT, (() => WT++));
            if (iT.handleResponse(zT, TT.sessionId), zT.status >= 200 && zT.status < 300) return {
              kind: "success",
              attemptsMade: WT
            };
            const kT = {
              status: zT.status
            };
            return !hk.has(zT.status) || IT ? {
              kind: "terminal",
              failure: kT,
              attemptsMade: WT
            } : {
              kind: "retry",
              failure: kT,
              attemptsMade: WT,
              retryAfterMs: wk.has(zT.status) ? iT.getRetryAfterDelayMs(zT) : void 0
            }
          } catch (BT) {
            const TT = {
              error: BT
            };
            return (null === kT || void 0 === kT ? void 0 : kT.aborted) || !iT.isFetchNetworkError(BT) || IT ? {
              kind: "terminal",
              failure: TT,
              attemptsMade: WT
            } : {
              kind: "retry",
              failure: TT,
              attemptsMade: WT
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(TT, oT, IT, iT, zT) {
        var kT = this;
        return yi((function*() {
          const WT = kT.getNow(),
            XT = kT.reserveKeepalive(oT, IT);
          try {
            return yield kT.fetchWithTimeout(So(So({}, TT), {}, {
              keepalive: XT.keepalive
            }), kT.requestTimeoutMs, zT)
          } catch (FT) {
            var BT;
            if (XT.keepalive && iT > 1 && kT.isFetchNetworkError(FT) && !(FT instanceof Rk) && !(null === (BT = kT.options.requestOptions) || void 0 === BT || null === (BT = BT.signal) || void 0 === BT ? void 0 : BT.aborted)) {
              kT.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const oT = kT.requestTimeoutMs - (kT.getNow() - WT);
              return kT.fetchWithTimeout(So(So({}, TT), {}, {
                keepalive: !1
              }), oT, zT)
            }
            throw FT
          } finally {
            XT.release()
          }
        }))()
      }
      fetchWithTimeout(TT, oT, IT) {
        var iT = this;
        return yi((function*() {
          var zT;
          const kT = null === (zT = iT.options.requestOptions) || void 0 === zT ? void 0 : zT.signal;
          if (iT.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return IT(), fetch(iT.options.url, So(So({}, TT), {}, {
            signal: kT
          }));
          if (oT <= 0) throw new Rk("Request timed out");
          const WT = new AbortController,
            XT = () => WT.abort(null === kT || void 0 === kT ? void 0 : kT.reason);
          null === kT || void 0 === kT || kT.addEventListener("abort", XT, {
            once: !0
          });
          let BT = !1;
          const FT = setTimeout((() => {
            BT = !0, WT.abort()
          }), oT);
          try {
            return IT(), yield fetch(iT.options.url, So(So({}, TT), {}, {
              signal: WT.signal
            }))
          } catch (ST) {
            if (BT && !(null === kT || void 0 === kT ? void 0 : kT.aborted)) throw new Rk("Request timed out");
            throw ST
          } finally {
            clearTimeout(FT), null === kT || void 0 === kT || kT.removeEventListener("abort", XT)
          }
        }))()
      }
      getRetryAfterDelayMs(TT) {
        const oT = TT.headers.get("Retry-After");
        if (!oT) return;
        if (/^\d+$/.test(oT)) {
          const TT = 1e3 * Number(oT);
          return Number.isFinite(TT) ? TT : Number.POSITIVE_INFINITY
        }
        const IT = this.getNow(),
          iT = function(TT, oT) {
            const IT = Bk.exec(TT);
            if (IT) {
              const [, TT, oT, iT, zT, kT, WT, XT] = IT;
              return ck({
                weekday: Dk.indexOf(TT),
                day: Number(oT),
                month: xk.indexOf(iT),
                year: Number(zT),
                hour: Number(kT),
                minute: Number(WT),
                second: Number(XT)
              })
            }
            const iT = Fk.exec(TT);
            if (iT) {
              const [, TT, IT, WT, XT, BT, FT, ST] = iT, DT = new Date(oT);
              if (Number.isNaN(DT.getTime())) return;
              const LT = DT.getUTCFullYear();
              let xT = 100 * Math.floor(LT / 100) + Number(XT);
              xT < LT && (xT += 100);
              const cT = xk.indexOf(WT),
                KT = {
                  month: cT,
                  day: Number(IT),
                  hour: Number(BT),
                  minute: Number(FT),
                  second: Number(ST),
                  millisecond: 0
                },
                MT = {
                  month: DT.getUTCMonth(),
                  day: DT.getUTCDate(),
                  hour: DT.getUTCHours(),
                  minute: DT.getUTCMinutes(),
                  second: DT.getUTCSeconds(),
                  millisecond: DT.getUTCMilliseconds()
                };
              return (xT > LT + 50 || xT === LT + 50 && (kT = MT, ((zT = KT).month - kT.month || zT.day - kT.day || zT.hour - kT.hour || zT.minute - kT.minute || zT.second - kT.second || zT.millisecond - kT.millisecond) > 0)) && (xT -= 100), ck({
                weekday: Lk.indexOf(TT),
                day: Number(IT),
                month: cT,
                year: xT,
                hour: Number(BT),
                minute: Number(FT),
                second: Number(ST)
              })
            }
            var zT, kT;
            const WT = Sk.exec(TT);
            if (!WT) return;
            const [, XT, BT, FT, ST, DT, LT, xT, cT] = WT;
            return ck({
              weekday: Dk.indexOf(XT),
              day: Number(null !== FT && void 0 !== FT ? FT : ST),
              month: xk.indexOf(BT),
              year: Number(cT),
              hour: Number(DT),
              minute: Number(LT),
              second: Number(xT)
            })
          }(oT, IT);
        return null == iT ? void 0 : Math.max(0, iT - IT)
      }
      reserveKeepalive(TT, oT) {
        if (!1 === oT || TT > 6e4 || mk + TT > 6e4 || ek >= 9) return {
          keepalive: !1,
          release: to
        };
        mk += TT, ek++;
        let IT = !1;
        return {
          keepalive: !0,
          release: () => {
            IT || (IT = !0, mk -= TT, ek--)
          }
        }
      }
      handleResponse(TT, oT) {
        202 === TT.status && "invalid" === TT.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), oT), TT.text().catch(to)
      }
      isFetchNetworkError(TT) {
        return TT instanceof TypeError || TT instanceof Rk || TT instanceof DOMException && "AbortError" === TT.name
      }
      compress(TT) {
        return yi((function*() {
          const oT = [],
            IT = new ReadableStream({
              start(oT) {
                oT.enqueue((new TextEncoder).encode(TT)), oT.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: TT,
              value: iT
            } = yield IT.read();
            if (TT) return new Blob(oT);
            oT.push(iT)
          }
        }))()
      }
      extendFaroSession(TT, oT, IT) {
        var iT, zT;
        const kT = TT.sessionTracking;
        if (!(null === kT || void 0 === kT ? void 0 : kT.enabled)) return void oT("Session expired.");
        const {
          fetchUserSession: WT,
          storeUserSession: XT
        } = so(kT), BT = null === (iT = this.metas.value.session) || void 0 === iT ? void 0 : iT.id, FT = null === (zT = WT()) || void 0 === zT ? void 0 : zT.sessionId;
        IT && IT === BT && IT === FT ? (Co({
          fetchUserSession: WT,
          storeUserSession: XT
        })({
          forceSessionExtend: !0
        }), oT("Session expired; created new session.")) : oT("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const vk = () => {
      const TT = window.k6;
      return {
        k6: So({
          isK6Browser: !0
        }, (null === TT || void 0 === TT ? void 0 : TT.testRunId) && {
          testRunId: null === TT || void 0 === TT ? void 0 : TT.testRunId
        })
      }
    };
    let Ek, fk;

    function Ck() {
      let {
        generatePageId: TT,
        initialPageMeta: oT
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const IT = location.href;
        return fT(TT) && Ek !== IT && (Ek = IT, fk = TT(location)), {
          page: So(So({
            url: IT
          }, fk ? {
            id: fk
          } : {}), oT)
        }
      }
    }

    function jk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oI,
        oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const IT = po;
      return oT > 0 && (IT.error = oT >= 1 ? function() {
        for (var oT = arguments.length, iT = new Array(oT), zT = 0; zT < oT; zT++) iT[zT] = arguments[zT];
        TT.error(`${IT.prefix}\n`, ...iT)
      } : to, IT.warn = oT >= 2 ? function() {
        for (var oT = arguments.length, iT = new Array(oT), zT = 0; zT < oT; zT++) iT[zT] = arguments[zT];
        TT.warn(`${IT.prefix}\n`, ...iT)
      } : to, IT.info = oT >= 3 ? function() {
        for (var oT = arguments.length, iT = new Array(oT), zT = 0; zT < oT; zT++) iT[zT] = arguments[zT];
        TT.info(`${IT.prefix}\n`, ...iT)
      } : to, IT.debug = oT >= 4 ? function() {
        for (var oT = arguments.length, iT = new Array(oT), zT = 0; zT < oT; zT++) iT[zT] = arguments[zT];
        TT.debug(`${IT.prefix}\n`, ...iT)
      } : to), IT
    }
    const Jk = "faro",
      Uk = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      ak = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Yk(TT) {
      var oT, IT, zT, kT, WT, XT;
      const BT = [],
        ST = jk(TT.unpatchedConsole, TT.internalLoggerLevel);
      TT.transports ? ((TT.url || TT.apiKey) && ST.error('if "transports" is defined, "url" and "apiKey" should not be defined'), BT.push(...TT.transports)) : TT.url ? BT.push(new uk({
        url: TT.url,
        apiKey: TT.apiKey,
        requestCompression: TT.requestCompression
      })) : ST.error('either "url" or "transports" must be defined');
      const {
        dedupe: DT = !0,
        eventDomain: LT = iT,
        globalObjectKey: xT = Jk,
        instrumentations: cT = Gz(),
        internalLoggerLevel: KT = bo,
        isolate: MT = !1,
        logArgsSerializer: rT = UI,
        metas: AT = Ok(TT),
        paused: gT = !1,
        preventGlobalExposure: hT = !1,
        unpatchedConsole: wT = oI,
        url: mT,
        experimental: eT
      } = TT, RT = Mk(TT, ak), uT = null !== (oT = null === eT || void 0 === eT ? void 0 : eT.trackNavigation) && void 0 !== oT && oT, vT = {
        dataAttributeName: oz(null !== (IT = null === (zT = TT.userActionsInstrumentation) || void 0 === zT ? void 0 : zT.dataAttributeName) && void 0 !== IT ? IT : di),
        excludeItem: null === (kT = TT.userActionsInstrumentation) || void 0 === kT ? void 0 : kT.excludeItem,
        initialActivityTimeout: Iz(null === (WT = TT.userActionsInstrumentation) || void 0 === WT ? void 0 : WT.initialActivityTimeout, 100, (TT => ST.warn(TT)))
      };
      return So(So({}, RT), {}, {
        batching: So(So({}, Uk), TT.batching),
        dedupe: DT,
        globalObjectKey: xT,
        instrumentations: Qk(cT, TT),
        internalLoggerLevel: KT,
        isolate: MT,
        logArgsSerializer: rT,
        metas: AT,
        parseStacktrace: rI,
        paused: gT,
        preventGlobalExposure: hT,
        transports: BT,
        unpatchedConsole: wT,
        eventDomain: LT,
        ignoreUrls: [...null !== (XT = TT.ignoreUrls) && void 0 !== XT ? XT : [], ...mT ? [mT] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: So(So(So({}, FT), TT.sessionTracking), Hk({
          trackGeolocation: TT.trackGeolocation,
          sessionTracking: TT.sessionTracking
        })),
        userActionsInstrumentation: vT,
        experimental: {
          trackNavigation: uT
        }
      })
    }

    function Qk(TT, oT) {
      let {
        experimental: IT
      } = oT;
      var iT;
      const zT = null !== (iT = null === IT || void 0 === IT ? void 0 : IT.trackNavigation) && void 0 !== iT && iT;
      return TT.filter((TT => !("@grafana/faro-web-sdk:instrumentation-navigation" === TT.name && !zT)))
    }

    function Ok(TT) {
      var oT, IT, iT;
      const {
        page: zT,
        generatePageId: kT
      } = null !== (oT = null === TT || void 0 === TT ? void 0 : TT.pageTracking) && void 0 !== oT ? oT : {}, WT = [Pz, dz, Ck({
        generatePageId: kT,
        initialPageMeta: zT
      }), ...null !== (IT = TT.metas) && void 0 !== IT ? IT : [], Tk];
      return ET(null === (iT = window) || void 0 === iT ? void 0 : iT.k6) ? [...WT, vk] : WT
    }

    function Hk(TT) {
      let {
        trackGeolocation: oT,
        sessionTracking: IT
      } = TT;
      var iT;
      const zT = {};
      return uT(oT) && (zT.geoLocationTrackingEnabled = oT), pT(zT) ? {} : {
        session: So(So({}, null !== (iT = null === IT || void 0 === IT ? void 0 : IT.session) && void 0 !== iT ? iT : {}), {}, {
          overrides: zT
        })
      }
    }
    const nk = new WeakSet;

    function qk(TT) {
      return nk.add(TT), TT
    }

    function Zk(TT, oT) {
      if (TT.capture) return qk(TT.capture(oT));
      const IT = qk(TT.value);
      return null === oT || void 0 === oT || oT(), IT
    }

    function lk(TT) {
      const oT = `__faroBundleId_${TT}`,
        IT = null === ST || void 0 === ST ? void 0 : ST[oT];
      if ("string" === typeof IT && "" !== IT) return IT;
      const iT = "undefined" !== typeof window ? window[oT] : void 0;
      return "string" === typeof iT && "" !== iT ? iT : void 0
    }

    function sk(TT) {
      var oT, IT;
      const iT = TT.config.app.name,
        zT = iT ? function(TT) {
          return null === ST || void 0 === ST ? void 0 : ST[`__faroGitHash_${TT}`]
        }(iT) : void 0,
        kT = {
          sdk: {
            version: zI,
            name: "faro"
          },
          app: TI({
            bundleId: iT && lk(iT)
          }, void 0 !== zT ? {
            gitHash: zT
          } : {})
        },
        WT = null === (oT = TT.config.sessionTracking) || void 0 === oT ? void 0 : oT.session;
      WT && TT.api.setSession(WT), TT.config.app && (kT.app = TI(TI({}, TT.config.app), kT.app)), TT.config.user && (kT.user = TT.config.user), TT.config.view && (kT.view = TT.config.view), TT.metas.add(kT, ...null !== (IT = TT.config.metas) && void 0 !== IT ? IT : [])
    }
    var tk = class {
      constructor(TT, oT) {
        var IT, iT;
        this.signalBuffer = [], this.itemLimit = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.itemLimit) && void 0 !== IT ? IT : 50, this.sendTimeout = null !== (iT = null === oT || void 0 === oT ? void 0 : oT.sendTimeout) && void 0 !== iT ? iT : 250, this.paused = (null === oT || void 0 === oT ? void 0 : oT.paused) || !1, this.sendFn = TT, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const oT = new Map;
        return TT.forEach((TT => {
          const IT = JSON.stringify(TT.meta);
          let iT = oT.get(IT);
          iT = void 0 === iT ? [TT] : [...iT, TT], oT.set(IT, iT)
        })), Array.from(oT.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const TT = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(TT).forEach(this.sendFn)
        } catch (oT) {
          throw this.signalBuffer = [...TT, ...this.signalBuffer], this.trimBufferToLimit(), oT
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Gk(TT, oT, IT, iT) {
      var zT;
      oT.debug("Initializing transports");
      const kT = [];
      let WT = [];
      const XT = TT => {
        let oT = TT;
        for (const iT of WT) {
          const TT = oT.map(iT).filter(Boolean);
          if (0 === TT.length) return [];
          oT = pk(TT, IT)
        }
        return oT
      };
      let BT;
      (null === (zT = IT.batching) || void 0 === zT ? void 0 : zT.enabled) && (BT = new tk((TT => {
        const IT = XT(TT);
        if (0 !== IT.length)
          for (const iT of kT) oT.debug(`Transporting item using ${iT.name}\n`, IT), iT.isBatched() && iT.send(IT)
      }), {
        sendTimeout: IT.batching.sendTimeout,
        itemLimit: IT.batching.itemLimit,
        paused: IT.paused
      }));
      return {
        add: function() {
          oT.debug("Adding transports");
          for (var zT = arguments.length, WT = new Array(zT), XT = 0; XT < zT; XT++) WT[XT] = arguments[XT];
          WT.forEach((zT => {
            oT.debug(`Adding "${zT.name}" transport`), kT.some((TT => TT === zT)) ? oT.warn(`Transport ${zT.name} is already added`) : (zT.unpatchedConsole = TT, zT.internalLogger = oT, zT.config = IT, zT.metas = iT, kT.push(zT))
          }))
        },
        addBeforeSendHooks: function() {
          oT.debug("Adding beforeSendHooks\n", WT);
          for (var TT = arguments.length, IT = new Array(TT), iT = 0; iT < TT; iT++) IT[iT] = arguments[iT];
          IT.forEach((TT => {
            TT && WT.push(TT)
          }))
        },
        getBeforeSendHooks: () => [...WT],
        execute: TT => {
          var zT;
          if (!IT.paused && qo(iT).shouldCapture()) {
            if (DT = TT.meta, !nk.has(DT)) {
              var WT, FT, ST;
              const oT = null === (WT = iT.value.session) || void 0 === WT ? void 0 : WT.id,
                zT = Zk(iT);
              if (IT.paused) return;
              const kT = TI({}, TT.meta);
              (null === (FT = kT.session) || void 0 === FT ? void 0 : FT.id) === oT && (null === (ST = zT.session) || void 0 === ST ? void 0 : ST.id) !== oT && (void 0 === zT.session ? delete kT.session : kT.session = zT.session), TT = TI(TI({}, TT), {}, {
                meta: qk(kT)
              })
            }
            var DT;
            (null === (zT = IT.batching) || void 0 === zT ? void 0 : zT.enabled) && (null === BT || void 0 === BT || BT.addItem(TT)), (TT => {
              var iT;
              if ((null === (iT = IT.batching) || void 0 === iT ? void 0 : iT.enabled) && kT.every((TT => TT.isBatched()))) return;
              const [zT] = XT([TT]);
              if (void 0 !== zT)
                for (const XT of kT) {
                  var WT;
                  oT.debug(`Transporting item using ${XT.name}\n`, zT), XT.isBatched() ? (null === (WT = IT.batching) || void 0 === WT ? void 0 : WT.enabled) || XT.send([zT]) : XT.send(zT)
                }
            })(TT)
          }
        },
        isPaused: () => IT.paused,
        pause: () => {
          oT.debug("Pausing transports"), null === BT || void 0 === BT || BT.pause(), IT.paused = !0
        },
        remove: function() {
          oT.debug("Removing transports");
          for (var TT = arguments.length, IT = new Array(TT), iT = 0; iT < TT; iT++) IT[iT] = arguments[iT];
          IT.forEach((TT => {
            oT.debug(`Removing "${TT.name}" transport`);
            const IT = kT.indexOf(TT); - 1 !== IT ? kT.splice(IT, 1) : oT.warn(`Transport "${TT.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var TT = arguments.length, IT = new Array(TT), iT = 0; iT < TT; iT++) IT[iT] = arguments[iT];
          oT.debug("Removing beforeSendHooks"), WT = WT.filter((TT => !IT.includes(TT)))
        },
        get transports() {
          return [...kT]
        },
        unpause: () => {
          oT.debug("Unpausing transports"), null === BT || void 0 === BT || BT.start(), IT.paused = !1
        }
      }
    }

    function pk(TT, oT) {
      if (oT.preserveOriginalError)
        for (const IT of TT) "exception" === IT.type && delete IT.payload.originalError;
      return TT
    }
    let bk = oI;

    function yk(TT) {
      var oT;
      return bk = null !== (oT = TT.unpatchedConsole) && void 0 !== oT ? oT : bk, bk
    }
    let Nk, Pk = po;

    function dk(TT, oT) {
      return Pk = jk(TT, oT.internalLoggerLevel), Pk
    }

    function Vk(TT) {
      let {
        internalLogger: oT,
        config: IT,
        metas: iT,
        transports: zT,
        tracesApi: kT,
        userActionsApi: WT
      } = TT;
      var XT;
      oT.debug("Initializing exceptions API");
      let BT = null;
      Nk = null !== (XT = IT.parseStacktrace) && void 0 !== XT ? XT : Nk;
      const FT = TT => {
          oT.debug("Changing stacktrace parser"), Nk = null !== TT && void 0 !== TT ? TT : Nk
        },
        {
          ignoreErrors: ST = [],
          preserveOriginalError: DT
        } = IT;
      return FT(IT.parseStacktrace), {
        changeStacktraceParser: FT,
        getStacktraceParser: () => Nk,
        pushError: function(TT) {
          let {
            skipDedupe: XT,
            stackFrames: FT,
            type: LT,
            context: xT,
            spanContext: cT,
            timestampOverwriteMs: KT,
            originalError: MT,
            fingerprint: rT,
            fatal: AT
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(TT, oT) {
              const {
                message: IT,
                name: iT,
                stack: zT
              } = oT;
              return kT = TT, WT = IT + " " + iT + " " + zT, kT.some((TT => mT(TT) ? WT.includes(TT) : !!WT.match(TT)));
              var kT, WT
            }(ST, null !== MT && void 0 !== MT ? MT : TT)) try {
            var gT, hT;
            if (!qo(iT).shouldCapture()) return;
            const ST = Qo(TI(TI({}, function(TT) {
                let oT = TT.cause;
                OT(oT) ? oT = TT.cause.toString() : null !== oT && (ET(TT.cause) || CT(TT.cause)) ? oT = Yo(TT.cause) : null != oT && (oT = TT.cause.toString());
                return null == oT ? {} : {
                  cause: oT
                }
              }(null !== MT && void 0 !== MT ? MT : TT)), null !== xT && void 0 !== xT ? xT : {})),
              mT = TI(TI(TI(TI({
                type: LT || TT.name || "Error",
                value: TT.message,
                timestamp: KT ? Ko(KT) : co(),
                trace: cT ? {
                  trace_id: cT.traceId,
                  span_id: cT.spanId
                } : kT.getTraceContext()
              }, pT(ST) ? {} : {
                context: ST
              }), DT ? {
                originalError: MT
              } : {}), rT ? {
                fingerprint: rT
              } : {}), void 0 !== AT ? {
                fatal: AT
              } : {});
            FT = null !== (gT = FT) && void 0 !== gT ? gT : TT.stack ? null === Nk || void 0 === Nk ? void 0 : Nk(TT).frames : void 0, (null === FT || void 0 === FT ? void 0 : FT.length) && (mT.stacktrace = {
              frames: FT
            });
            const eT = {
              type: mT.type,
              value: mT.value,
              stacktrace: mT.stacktrace,
              context: mT.context,
              fingerprint: mT.fingerprint,
              fatal: null !== (hT = mT.fatal) && void 0 !== hT && hT
            };
            if (!XT && IT.dedupe && !wT(BT) && Ao(eT, BT)) return void oT.debug("Skipping error push because it is the same as the last one\n", mT);
            const RT = BT,
              uT = Zk(iT);
            if (BT !== RT && !XT && IT.dedupe && Ao(eT, BT)) return;
            BT = eT;
            const vT = {
              meta: uT,
              payload: mT,
              type: "exception"
            };
            oT.debug("Pushing exception\n", vT), vz(WT.getActiveUserAction(), vT) || zT.execute(vT)
          } catch (eT) {
            oT.error("Error pushing event", eT)
          }
        }
      }
    }

    function TW(TT, oT, IT, iT, zT) {
      oT.debug("Initializing API");
      let kT = null;
      const WT = function(TT) {
          let {
            transports: oT,
            internalLogger: IT,
            config: iT,
            pushEvent: zT
          } = TT;
          var kT;
          const WT = null === (kT = iT.userActionsInstrumentation) || void 0 === kT ? void 0 : kT.excludeItem;
          let XT;
          const BT = () => XT;
          return {
            startUserAction: (TT, iT, kT) => {
              if (void 0 === BT()) {
                const IT = new Rz({
                  name: TT,
                  transports: oT,
                  attributes: iT,
                  trigger: (null === kT || void 0 === kT ? void 0 : kT.triggerName) || "faroApiCall",
                  importance: (null === kT || void 0 === kT ? void 0 : kT.importance) || mz.Normal,
                  trackUserActionsExcludeItem: WT,
                  pushEvent: zT
                });
                return IT.filter((TT => [3, 2].includes(TT))).first().subscribe((() => {
                  XT = void 0
                })), uz.notify({
                  type: wz,
                  userAction: IT,
                  initialActivityTimeout: null === kT || void 0 === kT ? void 0 : kT.initialActivityTimeout
                }), XT = IT, XT
              }
              IT.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: BT
          }
        }({
          transports: zT,
          config: IT,
          internalLogger: oT,
          pushEvent: (TT, IT, iT, zT) => {
            kT ? kT(TT, IT, iT, zT) : oT.warn("pushEventImpl is not initialized. Event dropped:", {
              name: TT,
              attributes: IT,
              domain: iT,
              options: zT
            })
          }
        }),
        XT = function(TT, oT, IT, iT, zT) {
          let kT;
          return oT.debug("Initializing traces API"), {
            getOTEL: () => kT,
            getTraceContext: () => {
              const TT = null === kT || void 0 === kT ? void 0 : kT.trace.getSpanContext(kT.context.active());
              return TT ? {
                trace_id: TT.traceId,
                span_id: TT.spanId
              } : void 0
            },
            initOTEL: (TT, IT) => {
              oT.debug("Initializing OpenTelemetry"), kT = {
                trace: TT,
                context: IT
              }
            },
            isOTELInitialized: () => !!kT,
            pushTraces: TT => {
              try {
                if (!qo(iT).shouldCapture()) return;
                const IT = {
                  type: "trace",
                  payload: TT,
                  meta: Zk(iT)
                };
                oT.debug("Pushing trace\n", IT), zT.execute(IT)
              } catch (IT) {
                oT.error("Error pushing trace\n", IT)
              }
            }
          }
        }(0, oT, 0, iT, zT),
        BT = {
          unpatchedConsole: TT,
          internalLogger: oT,
          userActionsApi: WT,
          config: IT,
          metas: iT,
          transports: zT,
          tracesApi: XT
        },
        FT = function(TT) {
          let {
            internalLogger: oT,
            config: IT,
            metas: iT,
            transports: zT,
            tracesApi: kT,
            userActionsApi: WT
          } = TT, XT = null;
          return {
            pushEvent: function(TT, BT, FT) {
              let {
                skipDedupe: ST,
                spanContext: DT,
                timestampOverwriteMs: LT,
                customPayloadTransformer: xT = TT => TT
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!qo(iT).shouldCapture()) return;
                const cT = Qo(BT),
                  KT = xT({
                    name: TT,
                    domain: null !== FT && void 0 !== FT ? FT : IT.eventDomain,
                    attributes: pT(cT) ? void 0 : cT,
                    timestamp: LT ? Ko(LT) : co(),
                    trace: DT ? {
                      trace_id: DT.traceId,
                      span_id: DT.spanId
                    } : kT.getTraceContext()
                  }),
                  MT = {
                    name: KT.name,
                    attributes: KT.attributes,
                    domain: KT.domain
                  };
                if (!ST && IT.dedupe && !wT(XT) && Ao(MT, XT)) return void oT.debug("Skipping event push because it is the same as the last one\n", KT);
                const rT = XT,
                  AT = Zk(iT);
                if (XT !== rT && !ST && IT.dedupe && Ao(MT, XT)) return;
                XT = MT;
                const gT = {
                  meta: AT,
                  payload: KT,
                  type: "event"
                };
                oT.debug("Pushing event\n", gT), vz(WT.getActiveUserAction(), gT) || zT.execute(gT)
              } catch (cT) {
                oT.error("Error pushing event", cT)
              }
            }
          }
        }(BT);
      return kT = FT.pushEvent, TI(TI(TI(TI(TI(TI(TI({}, XT), Vk(BT)), function(TT) {
        let oT, IT, iT, zT, {
          internalLogger: kT,
          metas: WT
        } = TT;
        kT.debug("Initializing meta API");
        const XT = TT => {
            IT && WT.remove(IT), IT = {
              user: TT
            }, WT.add(IT)
          },
          BT = (TT, IT) => {
            var iT;
            const zT = null === IT || void 0 === IT ? void 0 : IT.overrides,
              kT = zT ? {
                overrides: TI(TI({}, null === oT || void 0 === oT || null === (iT = oT.session) || void 0 === iT ? void 0 : iT.overrides), zT)
              } : {};
            oT && WT.remove(oT), oT = {
              session: TI(TI({}, pT(TT) ? void 0 : TT), kT)
            }, WT.add(oT)
          },
          FT = (TT, oT) => {
            qo(WT).notifySessionUpdate({
              type: "replace",
              session: TT,
              overrides: null === oT || void 0 === oT ? void 0 : oT.overrides
            }), BT(TT, oT)
          },
          ST = () => WT.value.session,
          DT = () => WT.value.page;
        return {
          setUser: XT,
          resetUser: XT,
          setSession: FT,
          resetSession: FT,
          getSession: ST,
          setView: (TT, oT) => {
            var IT;
            if ((null === oT || void 0 === oT ? void 0 : oT.overrides) && (qo(WT).notifySessionUpdate({
                type: "overrides",
                overrides: oT.overrides
              }), BT(ST(), {
                overrides: oT.overrides
              })), (null === iT || void 0 === iT || null === (IT = iT.view) || void 0 === IT ? void 0 : IT.name) === (null === TT || void 0 === TT ? void 0 : TT.name)) return;
            const zT = iT;
            iT = {
              view: TT
            }, WT.add(iT), zT && WT.remove(zT)
          },
          getView: () => WT.value.view,
          setPage: TT => {
            var oT;
            const IT = mT(TT) ? TI(TI({}, null !== (oT = null === zT || void 0 === zT ? void 0 : zT.page) && void 0 !== oT ? oT : DT()), {}, {
              id: TT
            }) : TT;
            zT && WT.remove(zT), zT = {
              page: IT
            }, WT.add(zT)
          },
          getPage: DT
        }
      }(BT)), function(TT) {
        let {
          internalLogger: oT,
          config: IT,
          metas: iT,
          transports: zT,
          tracesApi: kT,
          userActionsApi: WT
        } = TT;
        var XT;
        oT.debug("Initializing logs API");
        let BT = null;
        const FT = null !== (XT = IT.logArgsSerializer) && void 0 !== XT ? XT : UI;
        return {
          pushLog: function(TT) {
            let {
              context: XT,
              level: ST,
              skipDedupe: DT,
              spanContext: LT,
              timestampOverwriteMs: xT
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!qo(iT).shouldCapture()) return;
              const cT = Qo(XT),
                KT = {
                  message: FT(TT),
                  level: null !== ST && void 0 !== ST ? ST : "log",
                  context: pT(cT) ? void 0 : cT,
                  timestamp: xT ? Ko(xT) : co(),
                  trace: LT ? {
                    trace_id: LT.traceId,
                    span_id: LT.spanId
                  } : kT.getTraceContext()
                },
                MT = {
                  message: KT.message,
                  level: KT.level,
                  context: KT.context
                };
              if (!DT && IT.dedupe && !wT(BT) && Ao(MT, BT)) return void oT.debug("Skipping log push because it is the same as the last one\n", KT);
              const rT = BT,
                AT = Zk(iT);
              if (BT !== rT && !DT && IT.dedupe && Ao(MT, BT)) return;
              BT = MT;
              const gT = {
                type: "log",
                payload: KT,
                meta: AT
              };
              oT.debug("Pushing log\n", gT), vz(WT.getActiveUserAction(), gT) || zT.execute(gT)
            } catch (cT) {
              oT.error("Error pushing log\n", cT)
            }
          }
        }
      }(BT)), function(TT) {
        let {
          internalLogger: oT,
          config: IT,
          metas: iT,
          transports: zT,
          tracesApi: kT,
          userActionsApi: WT
        } = TT;
        oT.debug("Initializing measurements API");
        let XT = null;
        return {
          pushMeasurement: function(TT) {
            let {
              skipDedupe: BT,
              context: FT,
              spanContext: ST,
              timestampOverwriteMs: DT
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!qo(iT).shouldCapture()) return;
              const LT = Qo(FT),
                xT = TI(TI({}, TT), {}, {
                  trace: ST ? {
                    trace_id: ST.traceId,
                    span_id: ST.spanId
                  } : kT.getTraceContext(),
                  timestamp: DT ? Ko(DT) : co(),
                  context: pT(LT) ? void 0 : LT
                }),
                cT = {
                  type: xT.type,
                  values: xT.values,
                  context: xT.context
                };
              if (!BT && IT.dedupe && !wT(XT) && Ao(cT, XT)) return void oT.debug("Skipping measurement push because it is the same as the last one\n", xT);
              const KT = XT,
                MT = Zk(iT);
              if (XT !== KT && !BT && IT.dedupe && Ao(cT, XT)) return;
              XT = cT;
              const rT = {
                type: "measurement",
                payload: xT,
                meta: MT
              };
              oT.debug("Pushing measurement\n", rT), vz(WT.getActiveUserAction(), rT) || zT.execute(rT)
            } catch (LT) {
              oT.error("Error pushing measurement\n", LT)
            }
          }
        }
      }(BT)), FT), WT)
    }

    function oW(TT) {
      const oT = yk(TT),
        IT = dk(oT, TT);
      if (cT() && !TT.isolate) return void IT.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      IT.debug("Initializing");
      const iT = function(TT, oT) {
          let IT, iT = [],
            zT = [],
            kT = [],
            WT = 0,
            XT = 0;
          const BT = () => iT.reduce(((TT, oT) => Object.assign(TT, fT(oT) ? oT() : oT)), {}),
            FT = () => {
              if (zT.length) {
                const TT = BT();
                zT.forEach((oT => oT(TT)))
              }
            };
          return {
            add: function() {
              for (var TT = arguments.length, IT = new Array(TT), zT = 0; zT < TT; zT++) IT[zT] = arguments[zT];
              oT.debug("Adding metas\n", IT), iT.push(...IT), FT()
            },
            remove: function() {
              for (var TT = arguments.length, IT = new Array(TT), zT = 0; zT < TT; zT++) IT[zT] = arguments[zT];
              oT.debug("Removing metas\n", IT), iT = iT.filter((TT => !IT.includes(TT))), FT()
            },
            addListener: TT => {
              oT.debug("Adding metas listener\n", TT), zT.push(TT)
            },
            removeListener: TT => {
              oT.debug("Removing metas listener\n", TT), zT = zT.filter((oT => oT !== TT))
            },
            capture: TT => {
              var oT;
              const iT = void 0 !== IT,
                zT = null !== (oT = IT) && void 0 !== oT ? oT : kT;
              iT || (IT = zT, WT = 0, XT = zT.length);
              try {
                for (; WT < XT;) {
                  const TT = zT[WT++];
                  null === TT || void 0 === TT || TT()
                }
                const oT = qk(BT());
                return null === TT || void 0 === TT || TT(), oT
              } finally {
                iT || (IT = void 0)
              }
            },
            addCaptureListener: TT => {
              kT.push(TT)
            },
            removeCaptureListener: TT => {
              kT = kT.filter((oT => oT !== TT))
            },
            get value() {
              return BT()
            }
          }
        }(0, IT),
        zT = Gk(oT, IT, TT, iT),
        kT = TW(oT, IT, TT, iT, zT),
        WT = function(TT, oT, IT, iT, zT, kT) {
          oT.debug("Initializing instrumentations");
          const WT = [];
          return {
            add: function() {
              oT.debug("Adding instrumentations");
              for (var XT = arguments.length, BT = new Array(XT), FT = 0; FT < XT; FT++) BT[FT] = arguments[FT];
              BT.forEach((XT => {
                oT.debug(`Adding "${XT.name}" instrumentation`), WT.some((TT => TT.name === XT.name)) ? oT.warn(`Instrumentation ${XT.name} is already added`) : (XT.unpatchedConsole = TT, XT.internalLogger = oT, XT.config = IT, XT.metas = iT, XT.transports = zT, XT.api = kT, WT.push(XT), XT.initialize())
              }))
            },
            get instrumentations() {
              return [...WT]
            },
            remove: function() {
              oT.debug("Removing instrumentations");
              for (var TT = arguments.length, IT = new Array(TT), iT = 0; iT < TT; iT++) IT[iT] = arguments[iT];
              IT.forEach((TT => {
                var IT, iT;
                oT.debug(`Removing "${TT.name}" instrumentation`);
                const zT = WT.reduce(((oT, IT, iT) => null === oT && IT.name === TT.name ? iT : null), null);
                null !== zT ? (null === (IT = (iT = WT[zT]).destroy) || void 0 === IT || IT.call(iT), WT.splice(zT, 1)) : oT.warn(`Instrumentation "${TT.name}" is not added`)
              }))
            }
          }
        }(oT, IT, TT, iT, zT, kT),
        XT = MT(oT, IT, TT, iT, zT, kT, WT);
      return sk(XT),
        function(TT) {
          TT.transports.add(...TT.config.transports), TT.transports.addBeforeSendHooks(TT.config.beforeSend)
        }(XT),
        function(TT) {
          TT.instrumentations.add(...TT.config.instrumentations)
        }(XT), XT
    }

    function IW(TT) {
      const oT = Yk(TT);
      if (oT) return oW(oT)
    }
  },
  6197: function(TT, oT, IT) {
    var iT;
    ! function(zT, kT) {
      var WT = "function",
        XT = "undefined",
        BT = "object",
        FT = "string",
        ST = "major",
        DT = "model",
        LT = "name",
        xT = "type",
        cT = "vendor",
        KT = "version",
        MT = "architecture",
        rT = "console",
        AT = "mobile",
        gT = "tablet",
        hT = "smarttv",
        wT = "wearable",
        mT = "embedded",
        eT = "Amazon",
        RT = "Apple",
        uT = "ASUS",
        vT = "BlackBerry",
        ET = "Browser",
        fT = "Chrome",
        CT = "Firefox",
        jT = "Google",
        JT = "Honor",
        UT = "Huawei",
        aT = "LG",
        YT = "Microsoft",
        QT = "Motorola",
        OT = "Nvidia",
        HT = "OnePlus",
        nT = "Opera",
        qT = "OPPO",
        ZT = "Samsung",
        lT = "Sharp",
        sT = "Sony",
        tT = "Xiaomi",
        GT = "Zebra",
        pT = "Facebook",
        bT = "Chromium OS",
        yT = "Mac OS",
        NT = " Browser",
        PT = function(TT) {
          for (var oT = {}, IT = 0; IT < TT.length; IT++) oT[TT[IT].toUpperCase()] = TT[IT];
          return oT
        },
        dT = function(TT, oT) {
          return typeof TT === FT && -1 !== VT(oT).indexOf(VT(TT))
        },
        VT = function(TT) {
          return TT.toLowerCase()
        },
        To = function(TT, oT) {
          if (typeof TT === FT) return TT = TT.replace(/^\s\s*/, ""), typeof oT === XT ? TT : TT.substring(0, 500)
        },
        oo = function(TT, oT) {
          for (var IT, iT, zT, XT, FT, ST, DT = 0; DT < oT.length && !FT;) {
            var LT = oT[DT],
              xT = oT[DT + 1];
            for (IT = iT = 0; IT < LT.length && !FT && LT[IT];)
              if (FT = LT[IT++].exec(TT))
                for (zT = 0; zT < xT.length; zT++) ST = FT[++iT], typeof(XT = xT[zT]) === BT && XT.length > 0 ? 2 === XT.length ? typeof XT[1] == WT ? this[XT[0]] = XT[1].call(this, ST) : this[XT[0]] = XT[1] : 3 === XT.length ? typeof XT[1] !== WT || XT[1].exec && XT[1].test ? this[XT[0]] = ST ? ST.replace(XT[1], XT[2]) : kT : this[XT[0]] = ST ? XT[1].call(this, ST, XT[2]) : kT : 4 === XT.length && (this[XT[0]] = ST ? XT[3].call(this, ST.replace(XT[1], XT[2])) : kT) : this[XT] = ST || kT;
            DT += 2
          }
        },
        Io = function(TT, oT) {
          for (var IT in oT)
            if (typeof oT[IT] === BT && oT[IT].length > 0) {
              for (var iT = 0; iT < oT[IT].length; iT++)
                if (dT(oT[IT][iT], TT)) return "?" === IT ? kT : IT
            } else if (dT(oT[IT], TT)) return "?" === IT ? kT : IT;
          return oT.hasOwnProperty("*") ? oT["*"] : TT
        },
        io = {
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
        zo = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [KT, [LT, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [KT, [LT, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [LT, KT],
            [/opios[\/ ]+([\w\.]+)/i],
            [KT, [LT, nT + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [KT, [LT, nT + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [KT, [LT, nT]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [KT, [LT, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [KT, [LT, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [LT, KT],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [KT, [LT, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [KT, [LT, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [KT, [LT, "UC" + ET]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [KT, [LT, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [KT, [LT, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [KT, [LT, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [KT, [LT, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [KT, [LT, "Smart Lenovo " + ET]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [LT, /(.+)/, "$1 Secure " + ET], KT
            ],
            [/\bfocus\/([\w\.]+)/i],
            [KT, [LT, CT + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [KT, [LT, nT + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [KT, [LT, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [KT, [LT, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [KT, [LT, nT + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [KT, [LT, "MIUI" + NT]],
            [/fxios\/([\w\.-]+)/i],
            [KT, [LT, CT]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [KT, [LT, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [LT, /(.+)/, "$1Browser"], KT
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [LT, /(.+)/, "$1" + NT], KT
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [KT, [LT, ZT + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [KT, [LT, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [LT, "Sogou Mobile"], KT
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [LT, KT],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [LT],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [KT, LT],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [LT, pT], KT
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [LT, KT],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [KT, [LT, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [KT, [LT, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [KT, [LT, fT + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [LT, fT + " WebView"], KT
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [KT, [LT, "Android " + ET]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [LT, KT],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [KT, [LT, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [KT, LT],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [LT, [KT, Io, {
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
            [LT, KT],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [LT, "Netscape"], KT
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [LT, KT],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [KT, [LT, CT + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [LT, [KT, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [LT, [KT, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [MT, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [MT, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [MT, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [MT, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [MT, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [MT, /ower/, "", VT]
            ],
            [/ sun4\w[;\)]/i],
            [
              [MT, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [MT, VT]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [DT, [cT, ZT],
              [xT, gT]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [DT, [cT, ZT],
              [xT, AT]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [DT, [cT, RT],
              [xT, AT]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [DT, [cT, RT],
              [xT, gT]
            ],
            [/(macintosh);/i],
            [DT, [cT, RT]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [DT, [cT, lT],
              [xT, AT]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [DT, [cT, JT],
              [xT, gT]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [DT, [cT, JT],
              [xT, AT]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [DT, [cT, UT],
              [xT, gT]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [DT, [cT, UT],
              [xT, AT]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [DT, /_/g, " "],
              [cT, tT],
              [xT, gT]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [DT, /_/g, " "],
              [cT, tT],
              [xT, AT]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [DT, [cT, qT],
              [xT, AT]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [DT, [cT, Io, {
                OnePlus: ["304", "403", "203"],
                "*": qT
              }],
              [xT, gT]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [DT, [cT, "Vivo"],
              [xT, AT]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [DT, [cT, "Realme"],
              [xT, AT]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [DT, [cT, QT],
              [xT, AT]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [DT, [cT, QT],
              [xT, gT]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [DT, [cT, aT],
              [xT, gT]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [DT, [cT, aT],
              [xT, AT]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [DT, [cT, "Lenovo"],
              [xT, gT]
            ],
            [/(nokia) (t[12][01])/i],
            [cT, DT, [xT, gT]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [DT, /_/g, " "],
              [xT, AT],
              [cT, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [DT, [cT, jT],
              [xT, gT]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [DT, [cT, jT],
              [xT, AT]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [DT, [cT, sT],
              [xT, AT]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [DT, "Xperia Tablet"],
              [cT, sT],
              [xT, gT]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [DT, [cT, HT],
              [xT, AT]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [DT, [cT, eT],
              [xT, gT]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [DT, /(.+)/g, "Fire Phone $1"],
              [cT, eT],
              [xT, AT]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [DT, cT, [xT, gT]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [DT, [cT, vT],
              [xT, AT]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [DT, [cT, uT],
              [xT, gT]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [DT, [cT, uT],
              [xT, AT]
            ],
            [/(nexus 9)/i],
            [DT, [cT, "HTC"],
              [xT, gT]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [cT, [DT, /_/g, " "],
              [xT, AT]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [DT, [cT, "TCL"],
              [xT, gT]
            ],
            [/(itel) ((\w+))/i],
            [
              [cT, VT], DT, [xT, Io, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [DT, [cT, "Acer"],
              [xT, gT]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [DT, [cT, "Meizu"],
              [xT, AT]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [DT, [cT, "Ulefone"],
              [xT, AT]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [DT, [cT, "Energizer"],
              [xT, AT]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [DT, [cT, "Cat"],
              [xT, AT]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [DT, [cT, "Smartfren"],
              [xT, AT]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [DT, [cT, "Nothing"],
              [xT, AT]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [DT, [cT, "Archos"],
              [xT, gT]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [DT, [cT, "Archos"],
              [xT, AT]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [cT, DT, [xT, gT]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [cT, DT, [xT, AT]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [cT, DT, [xT, gT]],
            [/(surface duo)/i],
            [DT, [cT, YT],
              [xT, gT]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [DT, [cT, "Fairphone"],
              [xT, AT]
            ],
            [/(u304aa)/i],
            [DT, [cT, "AT&T"],
              [xT, AT]
            ],
            [/\bsie-(\w*)/i],
            [DT, [cT, "Siemens"],
              [xT, AT]
            ],
            [/\b(rct\w+) b/i],
            [DT, [cT, "RCA"],
              [xT, gT]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [DT, [cT, "Dell"],
              [xT, gT]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [DT, [cT, "Verizon"],
              [xT, gT]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [DT, [cT, "Barnes & Noble"],
              [xT, gT]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [DT, [cT, "NuVision"],
              [xT, gT]
            ],
            [/\b(k88) b/i],
            [DT, [cT, "ZTE"],
              [xT, gT]
            ],
            [/\b(nx\d{3}j) b/i],
            [DT, [cT, "ZTE"],
              [xT, AT]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [DT, [cT, "Swiss"],
              [xT, AT]
            ],
            [/\b(zur\d{3}) b/i],
            [DT, [cT, "Swiss"],
              [xT, gT]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [DT, [cT, "Zeki"],
              [xT, gT]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [cT, "Dragon Touch"], DT, [xT, gT]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [DT, [cT, "Insignia"],
              [xT, gT]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [DT, [cT, "NextBook"],
              [xT, gT]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [cT, "Voice"], DT, [xT, AT]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [cT, "LvTel"], DT, [xT, AT]
            ],
            [/\b(ph-1) /i],
            [DT, [cT, "Essential"],
              [xT, AT]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [DT, [cT, "Envizen"],
              [xT, gT]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [DT, [cT, "MachSpeed"],
              [xT, gT]
            ],
            [/\btu_(1491) b/i],
            [DT, [cT, "Rotor"],
              [xT, gT]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [DT, [cT, OT],
              [xT, gT]
            ],
            [/(sprint) (\w+)/i],
            [cT, DT, [xT, AT]],
            [/(kin\.[onetw]{3})/i],
            [
              [DT, /\./g, " "],
              [cT, YT],
              [xT, AT]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [DT, [cT, GT],
              [xT, gT]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [DT, [cT, GT],
              [xT, AT]
            ],
            [/smart-tv.+(samsung)/i],
            [cT, [xT, hT]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [DT, /^/, "SmartTV"],
              [cT, ZT],
              [xT, hT]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [cT, aT],
              [xT, hT]
            ],
            [/(apple) ?tv/i],
            [cT, [DT, RT + " TV"],
              [xT, hT]
            ],
            [/crkey/i],
            [
              [DT, fT + "cast"],
              [cT, jT],
              [xT, hT]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [DT, [cT, eT],
              [xT, hT]
            ],
            [/(shield \w+ tv)/i],
            [DT, [cT, OT],
              [xT, hT]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [DT, [cT, lT],
              [xT, hT]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [DT, [cT, sT],
              [xT, hT]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [DT, [cT, tT],
              [xT, hT]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [cT, DT, [xT, hT]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [cT, To],
              [DT, To],
              [xT, hT]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [DT, [xT, hT]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [xT, hT]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [cT, DT, [xT, rT]],
            [/droid.+; (shield)( bui|\))/i],
            [DT, [cT, OT],
              [xT, rT]
            ],
            [/(playstation \w+)/i],
            [DT, [cT, sT],
              [xT, rT]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [DT, [cT, YT],
              [xT, rT]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [DT, [cT, ZT],
              [xT, wT]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [cT, DT, [xT, wT]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [DT, [cT, qT],
              [xT, wT]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [DT, [cT, RT],
              [xT, wT]
            ],
            [/(opwwe\d{3})/i],
            [DT, [cT, HT],
              [xT, wT]
            ],
            [/(moto 360)/i],
            [DT, [cT, QT],
              [xT, wT]
            ],
            [/(smartwatch 3)/i],
            [DT, [cT, sT],
              [xT, wT]
            ],
            [/(g watch r)/i],
            [DT, [cT, aT],
              [xT, wT]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [DT, [cT, GT],
              [xT, wT]
            ],
            [/droid.+; (glass) \d/i],
            [DT, [cT, jT],
              [xT, wT]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [cT, DT, [xT, wT]],
            [/; (quest( \d| pro)?)/i],
            [DT, [cT, pT],
              [xT, wT]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [cT, [xT, mT]],
            [/(aeobc)\b/i],
            [DT, [cT, eT],
              [xT, mT]
            ],
            [/(homepod).+mac os/i],
            [DT, [cT, RT],
              [xT, mT]
            ],
            [/windows iot/i],
            [
              [xT, mT]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [DT, [xT, AT]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [DT, [xT, gT]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [xT, gT]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [xT, AT]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [DT, [cT, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [KT, [LT, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [LT, KT],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [KT, [LT, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [LT, KT],
            [/ladybird\//i],
            [
              [LT, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [KT, LT]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [LT, KT],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [LT, [KT, Io, io]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [KT, Io, io],
              [LT, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [KT, /_/g, "."],
              [LT, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [LT, yT],
              [KT, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [KT, LT],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [LT, /(.+)/, "$1 Touch"], KT
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [LT, KT],
            [/\(bb(10);/i],
            [KT, [LT, vT]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [KT, [LT, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [KT, [LT, CT + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [KT, [LT, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [KT, [LT, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [KT, [LT, fT + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [LT, bT], KT
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [LT, KT],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [LT, "Solaris"], KT
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [LT, KT]
          ]
        },
        ko = function(TT, oT) {
          if (typeof TT === BT && (oT = TT, TT = kT), !(this instanceof ko)) return new ko(TT, oT).getResult();
          var IT = typeof zT !== XT && zT.navigator ? zT.navigator : kT,
            iT = TT || (IT && IT.userAgent ? IT.userAgent : ""),
            rT = IT && IT.userAgentData ? IT.userAgentData : kT,
            hT = oT ? function(TT, oT) {
              var IT = {};
              for (var iT in TT) oT[iT] && oT[iT].length % 2 === 0 ? IT[iT] = oT[iT].concat(TT[iT]) : IT[iT] = TT[iT];
              return IT
            }(zo, oT) : zo,
            wT = IT && IT.userAgent == iT;
          return this.getBrowser = function() {
            var TT, oT = {};
            return oT[LT] = kT, oT[KT] = kT, oo.call(oT, iT, hT.browser), oT[ST] = typeof(TT = oT[KT]) === FT ? TT.replace(/[^\d\.]/g, "").split(".")[0] : kT, wT && IT && IT.brave && typeof IT.brave.isBrave == WT && (oT[LT] = "Brave"), oT
          }, this.getCPU = function() {
            var TT = {};
            return TT[MT] = kT, oo.call(TT, iT, hT.cpu), TT
          }, this.getDevice = function() {
            var TT = {};
            return TT[cT] = kT, TT[DT] = kT, TT[xT] = kT, oo.call(TT, iT, hT.device), wT && !TT[xT] && rT && rT.mobile && (TT[xT] = AT), wT && "Macintosh" == TT[DT] && IT && typeof IT.standalone !== XT && IT.maxTouchPoints && IT.maxTouchPoints > 2 && (TT[DT] = "iPad", TT[xT] = gT), TT
          }, this.Zc = function() {
            var TT = {};
            return TT[LT] = kT, TT[KT] = kT, oo.call(TT, iT, hT.engine), TT
          }, this.getOS = function() {
            var TT = {};
            return TT[LT] = kT, TT[KT] = kT, oo.call(TT, iT, hT.os), wT && !TT[LT] && rT && rT.platform && "Unknown" != rT.platform && (TT[LT] = rT.platform.replace(/chrome os/i, bT).replace(/macos/i, yT)), TT
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Zc(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return iT
          }, this.setUA = function(TT) {
            return iT = typeof TT === FT && TT.length > 500 ? To(TT, 500) : TT, this
          }, this.setUA(iT), this
        };
      ko.VERSION = "1.0.41", ko.BROWSER = PT([LT, KT, ST]), ko.CPU = PT([MT]), ko.DEVICE = PT([DT, cT, xT, rT, AT, hT, gT, wT, mT]), ko.ENGINE = ko.OS = PT([LT, KT]), typeof oT !== XT ? (TT.exports && (oT = TT.exports = ko), oT.UAParser = ko) : IT.amdO ? (iT = function() {
        return ko
      }.call(oT, IT, oT, TT)) === kT || (TT.exports = iT) : typeof zT !== XT && (zT.UAParser = ko);
      var Wo = typeof zT !== XT && (zT.jQuery || zT.Zepto);
      if (Wo && !Wo.ua) {
        var Xo = new ko;
        Wo.ua = Xo.getResult(), Wo.ua.get = function() {
          return Xo.getUA()
        }, Wo.ua.set = function(TT) {
          Xo.setUA(TT);
          var oT = Xo.getResult();
          for (var IT in oT) Wo.ua[IT] = oT[IT]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);