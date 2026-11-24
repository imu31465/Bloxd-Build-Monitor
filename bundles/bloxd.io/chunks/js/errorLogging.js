export const id = 31;
export const ids = [31];
export const modules = {
  6761: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BaseExtension: () => Tm,
      BaseInstrumentation: () => Um,
      BaseTransport: () => Az,
      CSPInstrumentation: () => Jz,
      ConsoleInstrumentation: () => Xm,
      ConsoleTransport: () => WM,
      EVENT_CLICK: () => qU,
      EVENT_NAVIGATION: () => iU,
      EVENT_ROUTE_CHANGE: () => xU,
      EVENT_SESSION_EXTEND: () => YU,
      EVENT_SESSION_RESUME: () => eU,
      EVENT_SESSION_START: () => OU,
      EVENT_VIEW_CHANGED: () => bU,
      ErrorsInstrumentation: () => Qm,
      FetchTransport: () => bM,
      InternalLoggerLevel: () => SU,
      LogLevel: () => im,
      MAX_SESSION_PERSISTENCE_TIME: () => HT,
      NavigationInstrumentation: () => Cz,
      Observable: () => qm,
      PerformanceInstrumentation: () => EW,
      PersistentSessionsManager: () => FU,
      SESSION_EXPIRATION_TIME: () => MT,
      SESSION_INACTIVITY_TIME: () => gT,
      STORAGE_KEY: () => zT,
      SessionInstrumentation: () => Wm,
      TransportItemType: () => Rz,
      UserActionInstrumentation: () => Yz,
      UserActionState: () => Zz,
      VERSION: () => mm,
      ViewInstrumentation: () => Fm,
      VolatileSessionsManager: () => PU,
      WebVitalsInstrumentation: () => IW,
      allLogLevels: () => Om,
      browserMeta: () => Ez,
      buildStackFrame: () => zm,
      captureMetas: () => FM,
      createInternalLogger: () => xM,
      createPromiseBuffer: () => pM,
      createSession: () => Dz,
      deepEqual: () => fU,
      defaultEventDomain: () => WT,
      defaultExceptionType: () => xm,
      defaultGlobalObjectKey: () => dM,
      defaultInternalLoggerLevel: () => NU,
      defaultLogLevel: () => bm,
      faro: () => ZT,
      genShortID: () => vU,
      getCurrentTimestamp: () => BU,
      getDataFromSafariExtensions: () => Lm,
      getIgnoreUrls: () => ET,
      getInternalFaroFromGlobalObject: () => LT,
      getStackFramesFromError: () => Bm,
      getTransportBody: () => mM,
      getUrlFromResource: () => DT,
      getWebInstrumentations: () => rz,
      globalObject: () => jT,
      initializeFaro: () => AM,
      internalGlobalObjectKey: () => lT,
      isArray: () => tT,
      isBoolean: () => JT,
      isDomError: () => VT,
      isDomException: () => uT,
      isElement: () => rT,
      isElementDefined: () => CT,
      TB: () => NT,
      isError: () => FT,
      isErrorDefined: () => sT,
      isErrorEvent: () => PT,
      isEvent: () => QT,
      isEventDefined: () => IT,
      isFunction: () => wT,
      isInstanceOf: () => qT,
      isInt: () => YT,
      isInternalFaroOnGlobalObject: () => BT,
      isMap: () => ST,
      isMapDefined: () => KT,
      isNull: () => bT,
      isNumber: () => eT,
      isObject: () => dT,
      isPrimitive: () => XT,
      isRegExp: () => aT,
      isString: () => OT,
      isSymbol: () => xT,
      isSyntheticEvent: () => GT,
      isThenable: () => yT,
      isToString: () => fT,
      isTypeof: () => vT,
      isUndefined: () => iT,
      makeCoreConfig: () => aM,
      noop: () => KU,
      osMeta: () => hz,
      parseStacktrace: () => Zm,
      sdkMeta: () => oz,
      setInternalFaroOnGlobalObject: () => pT,
      transportItemTypeToBodyKey: () => TM,
      unknownString: () => sm,
      userActionDataAttribute: () => hW,
      userActionTimeoutDataAttribute: () => DW
    });
    const WT = "browser",
      zT = "com.grafana.faro.session",
      MT = 144e5,
      gT = 9e5,
      nT = 1e3,
      HT = gT,
      kT = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: HT
      };
    const jT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof mT.g ? mT.g : "undefined" !== typeof self ? self : void 0;
    const lT = "_faroInternal";

    function LT() {
      return jT[lT]
    }

    function pT(TT) {
      TT.config.isolate ? TT.internalLogger.debug("Skipping registering internal Faro instance on global object") : (TT.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(jT, lT, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: TT
      }))
    }

    function BT() {
      return lT in jT
    }
    let ZT = {
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

    function cT(TT, UT, mT, WT, zT, MT, gT) {
      return UT.debug("Initializing Faro"), ZT = {
          api: MT,
          config: mT,
          instrumentations: gT,
          internalLogger: UT,
          metas: WT,
          pause: zT.pause,
          transports: zT,
          unpatchedConsole: TT,
          unpause: zT.unpause
        }, pT(ZT),
        function(TT) {
          if (TT.config.preventGlobalExposure) TT.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (TT.internalLogger.debug(`Registering public faro reference in the global scope using "${TT.config.globalObjectKey}" key`), TT.config.globalObjectKey in jT) return void TT.internalLogger.warn(`Skipping global registration due to key "${TT.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(jT, TT.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: TT
            })
          }
        }(ZT), ZT
    }

    function vT(TT, UT) {
      return typeof TT === UT
    }

    function fT(TT, UT) {
      return Object.prototype.toString.call(TT) === `[object ${UT}]`
    }

    function qT(TT, UT) {
      try {
        return TT instanceof UT
      } catch (mT) {
        return !1
      }
    }
    const iT = TT => vT(TT, "undefined"),
      bT = TT => vT(TT, "null"),
      OT = TT => vT(TT, "string"),
      eT = TT => vT(TT, "number") && !isNaN(TT) || vT(TT, "bigint"),
      YT = TT => eT(TT) && Number.isInteger(TT),
      JT = TT => vT(TT, "boolean"),
      xT = TT => vT(TT, "symbol"),
      dT = TT => !bT(TT) && vT(TT, "object"),
      wT = TT => vT(TT, "function"),
      tT = TT => fT(TT, "Array"),
      aT = TT => fT(TT, "RegExp"),
      yT = TT => wT(null === TT || void 0 === TT ? void 0 : TT.then),
      XT = TT => !dT(TT) && !wT(TT),
      IT = "undefined" !== typeof Event,
      QT = TT => IT && qT(TT, Event),
      sT = "undefined" !== typeof Error,
      FT = TT => sT && qT(TT, Error),
      PT = TT => fT(TT, "ErrorEvent"),
      VT = TT => fT(TT, "DOMError"),
      uT = TT => fT(TT, "DOMException"),
      CT = "undefined" !== typeof Element,
      rT = TT => CT && qT(TT, Element),
      KT = "undefined" !== typeof Map,
      ST = TT => KT && qT(TT, Map),
      GT = TT => dT(TT) && "nativeEvent" in TT && "preventDefault" in TT && "stopPropagation" in TT;

    function NT(TT) {
      return null == TT || (tT(TT) || OT(TT) ? 0 === TT.length : !!dT(TT) && 0 === Object.keys(TT).length)
    }

    function ET() {
      return ZT.transports.transports.flatMap((TT => TT.getIgnoreUrls()))
    }

    function hT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return ET().some((UT => TT && null != TT.match(UT)))
    }

    function DT(TT) {
      return OT(TT) ? TT : TT instanceof URL ? TT.href : !NT(TT) && wT(null === TT || void 0 === TT ? void 0 : TT.toString) ? TT.toString() : void 0
    }
    const oT = "sessionStorage",
      AT = "localStorage";

    function RT(TT) {
      try {
        let UT;
        UT = window[TT];
        const mT = "__faro_storage_test__";
        return UT.setItem(mT, mT), UT.removeItem(mT), !0
      } catch (mT) {
        var UT;
        return null === (UT = ZT.internalLogger) || void 0 === UT || UT.info(`Web storage of type ${TT} is not available. Reason: ${mT}`), !1
      }
    }

    function TU(TT, UT) {
      return MU(UT) ? window[UT].getItem(TT) : null
    }

    function UU(TT, UT, mT) {
      if (MU(mT)) try {
        window[mT].setItem(TT, UT)
      } catch (WT) {}
    }

    function mU(TT, UT) {
      MU(UT) && window[UT].removeItem(TT)
    }
    const WU = RT(AT),
      zU = RT(oT);

    function MU(TT) {
      return TT === AT ? WU : TT === oT && zU
    }

    function gU(TT) {
      return gU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, gU(TT)
    }

    function nU(TT) {
      var UT = function(TT, UT) {
        if ("object" != gU(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != gU(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == gU(UT) ? UT : UT + ""
    }

    function HU(TT, UT, mT) {
      return (UT = nU(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function kU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function jU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? kU(Object(mT), !0).forEach((function(UT) {
          HU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : kU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function lU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZT;
      var UT, mT, WT;
      const zT = TT.config.sessionTracking,
        MT = null !== (UT = null !== (mT = null === zT || void 0 === zT || null === (WT = zT.sampler) || void 0 === WT ? void 0 : WT.call(zT, {
          metas: TT.metas.value
        })) && void 0 !== mT ? mT : null === zT || void 0 === zT ? void 0 : zT.samplingRate) && void 0 !== UT ? UT : 1,
        gT = "number" === typeof MT ? function(TT) {
          return Math.min(1, Math.max(0, TT))
        }(MT) : 0;
      if (!(gT > 0)) return !1;
      if (1 === gT) return !0;
      try {
        const TT = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === TT || void 0 === TT ? void 0 : TT.getRandomValues)) {
          const UT = new Uint32Array(1);
          return TT.getRandomValues(UT), UT[0] / Math.pow(2, 32) < gT
        }
      } catch (nT) {}
      return Math.random() < gT
    }

    function LU() {
      return Date.now()
    }

    function pU() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function BU() {
      return (new Date).toISOString()
    }

    function ZU(TT) {
      return new Date(TT).toISOString()
    }
    const cU = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function vU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const UT = new Uint32Array(TT),
        mT = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === mT || void 0 === mT ? void 0 : mT.getRandomValues) mT.getRandomValues(UT);
      else
        for (let zT = 0; zT < TT; zT++) UT[zT] = Math.floor(4294967296 * Math.random());
      let WT = "";
      for (let zT = 0; zT < TT; zT++) WT += cU[UT[zT] % 59];
      return WT
    }

    function fU(TT, UT) {
      if (TT === UT) return !0;
      if (vT(TT, "number") && isNaN(TT)) return vT(UT, "number") && isNaN(UT);
      const mT = tT(TT),
        WT = tT(UT);
      if (mT !== WT) return !1;
      if (mT && WT) {
        const mT = TT.length;
        if (mT !== UT.length) return !1;
        for (let WT = mT; 0 !== WT--;)
          if (!fU(TT[WT], UT[WT])) return !1;
        return !0
      }
      const zT = dT(TT),
        MT = dT(UT);
      if (zT !== MT) return !1;
      if (TT && UT && zT && MT) {
        const mT = Object.keys(TT),
          WT = Object.keys(UT);
        if (mT.length !== WT.length) return !1;
        for (let TT of mT)
          if (!WT.includes(TT)) return !1;
        for (let zT of mT)
          if (!fU(TT[zT], UT[zT])) return !1;
        return !0
      }
      return !1
    }
    const qU = "click",
      iU = "navigation",
      bU = "view_changed",
      OU = "session_start",
      eU = "session_resume",
      YU = "session_extend",
      JU = "service_name_override",
      xU = "route_change";

    function dU() {
      let {
        sessionId: TT,
        started: UT,
        lastActivity: mT,
        isSampled: WT = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, zT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZT;
      var MT;
      const gT = LU(),
        nT = null === (MT = zT.config) || void 0 === MT || null === (MT = MT.sessionTracking) || void 0 === MT ? void 0 : MT.generateSessionId;
      return null == TT && (TT = "function" === typeof nT ? nT() : vU()), {
        sessionId: TT,
        lastActivity: null !== mT && void 0 !== mT ? mT : gT,
        started: null !== UT && void 0 !== UT ? UT : gT,
        isSampled: WT
      }
    }

    function wU(TT) {
      if (null == TT) return !1;
      const UT = LU();
      return UT - TT.started < 144e5 && UT - TT.lastActivity < gT
    }

    function tU(TT) {
      let {
        fetchUserSession: UT,
        storeUserSession: mT,
        adoptSession: WT,
        updateInterval: zT = 0
      } = TT, nT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZT, HT = 0;
      return function() {
        let {
          forceSessionExtend: TT = !1,
          refreshActivity: kT = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var jT, lT;
        if (!UT || !mT) return;
        const LT = LU();
        if (!TT && LT < HT && HT - LT <= zT) return;
        const pT = nT.config.sessionTracking,
          BT = null === pT || void 0 === pT ? void 0 : pT.persistent;
        if (BT && !WU || !BT && !zU) return;
        const ZT = UT();
        if (HT = Math.min(LT + zT, (null !== (jT = null === ZT || void 0 === ZT ? void 0 : ZT.started) && void 0 !== jT ? jT : LT) + MT, (null !== (lT = null === ZT || void 0 === ZT ? void 0 : ZT.lastActivity) && void 0 !== lT ? lT : LT) + gT), !1 === TT && wU(ZT)) {
          var cT;
          kT && mT(jU(jU({}, ZT), {}, {
            lastActivity: LT
          }));
          const TT = null === (cT = nT.metas.value.session) || void 0 === cT ? void 0 : cT.id;
          null != WT && null != ZT.sessionMeta && ZT.sessionId !== TT && WT(ZT.sessionMeta)
        } else {
          var vT, fT, qT;
          let TT = yU(dU({
            isSampled: lU(nT)
          }, nT), ZT, nT);
          HT = LT + zT, mT(TT), null === (vT = nT.api) || void 0 === vT || vT.setSession(TT.sessionMeta), null === pT || void 0 === pT || null === (fT = pT.onSessionChange) || void 0 === fT || fT.call(pT, null !== (qT = null === ZT || void 0 === ZT ? void 0 : ZT.sessionMeta) && void 0 !== qT ? qT : null, TT.sessionMeta)
        }
      }
    }

    function aU(TT) {
      let UT, {
          fetchUserSession: mT,
          storeUserSession: WT,
          updateInterval: zT = 0
        } = TT,
        MT = 0;
      return TT => {
        const gT = LU();
        if (TT === UT && gT < MT && MT - gT <= zT) return;
        UT = TT, MT = gT + zT;
        const nT = mT();
        (null === nT || void 0 === nT ? void 0 : nT.sessionId) === TT && wU(nT) && WT(jU(jU({}, nT), {}, {
          lastActivity: gT
        }))
      }
    }

    function yU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZT;
      var WT, zT, MT, gT, nT, HT;
      const kT = jU(jU({}, TT), {}, {
          sessionMeta: {
            id: TT.sessionId,
            attributes: IU(jU(jU(jU({}, null === (WT = mT.config.sessionTracking) || void 0 === WT || null === (WT = WT.session) || void 0 === WT ? void 0 : WT.attributes), null !== (zT = null === (MT = mT.metas.value.session) || void 0 === MT ? void 0 : MT.attributes) && void 0 !== zT ? zT : {}), {}, {
              isSampled: TT.isSampled.toString()
            }))
          }
        }),
        jT = null !== (gT = null === (nT = mT.metas.value.session) || void 0 === nT ? void 0 : nT.overrides) && void 0 !== gT ? gT : null === UT || void 0 === UT || null === (HT = UT.sessionMeta) || void 0 === HT ? void 0 : HT.overrides;
      NT(jT) || (kT.sessionMeta.overrides = jT);
      const lT = null === UT || void 0 === UT ? void 0 : UT.sessionId;
      return null != lT && (kT.sessionMeta.attributes.previousSession = lT), kT
    }

    function XU(TT) {
      let {
        fetchUserSession: UT,
        storeUserSession: mT
      } = TT, WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZT, zT = !1;
      return function(TT) {
        if (zT) return;
        const MT = TT.session,
          gT = UT();
        let nT = null === MT || void 0 === MT ? void 0 : MT.id;
        const HT = null === MT || void 0 === MT ? void 0 : MT.attributes,
          kT = null === MT || void 0 === MT ? void 0 : MT.overrides,
          jT = null === gT || void 0 === gT ? void 0 : gT.sessionMeta,
          lT = null === jT || void 0 === jT ? void 0 : jT.overrides,
          LT = !!kT && !fU(kT, lT),
          pT = !!HT && !fU(HT, null === jT || void 0 === jT ? void 0 : jT.attributes);
        if (MT && nT !== (null === gT || void 0 === gT ? void 0 : gT.sessionId) || pT || LT) {
          var BT, ZT;
          const TT = null != gT && nT === gT.sessionId,
            UT = yU(TT ? gT : dU({
              sessionId: nT,
              isSampled: lU(WT)
            }, WT), gT, WT),
            MT = null === gT || void 0 === gT || null === (BT = gT.sessionMeta) || void 0 === BT || null === (BT = BT.attributes) || void 0 === BT ? void 0 : BT.previousSession;
          TT && null != MT && MT !== UT.sessionId && (UT.sessionMeta.attributes.previousSession = MT), (null === (ZT = UT.sessionMeta.attributes) || void 0 === ZT ? void 0 : ZT.previousSession) === UT.sessionId && delete UT.sessionMeta.attributes.previousSession, mT(UT),
            function(TT, UT) {
              let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var zT, MT, gT;
              if (!UT) return;
              const nT = mT.serviceName,
                HT = null !== (zT = null !== (MT = WT.serviceName) && void 0 !== MT ? MT : null === (gT = TT.metas.value.app) || void 0 === gT ? void 0 : gT.name) && void 0 !== zT ? zT : "";
              nT && nT !== HT && TT.api.pushEvent(JU, {
                serviceName: nT,
                previousServiceName: HT
              })
            }(WT, LT, kT, lT), zT = !0;
          try {
            WT.api.setSession(UT.sessionMeta)
          } finally {
            zT = !1
          }
        }
      }
    }

    function IU(TT) {
      const UT = {};
      for (const mT of Object.keys(TT)) {
        const WT = TT[mT];
        void 0 !== WT && (UT[mT] = WT)
      }
      return UT
    }

    function QU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== TT && void 0 !== TT ? TT : {}, function() {
        const TT = new WeakSet;
        return function(UT, mT) {
          if (dT(mT) && null !== mT) {
            if (TT.has(mT)) return null;
            TT.add(mT)
          }
          return mT
        }
      }())
    }

    function sU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const UT = {};
      for (const [mT, WT] of Object.entries(TT)) UT[mT] = dT(WT) && null !== WT ? QU(WT) : String(WT);
      return UT
    }
    var FU = class TT {
      constructor() {
        var UT = this;
        let mT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZT;
        this.context = mT, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = TT => {
          this.adopting = !0;
          try {
            var UT;
            null === (UT = this.context.api) || void 0 === UT || UT.setSession(TT)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: TT = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return UT.updateUserSession({
            refreshActivity: TT
          })
        }, this.recordActivity = aU({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: nT
        }), this.updateUserSession = tU({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: nT
        }, mT), this.init()
      }
      static removeUserSession() {
        mU(zT, TT.storageTypeLocal)
      }
      static storeUserSession(UT) {
        UU(zT, QU(UT), TT.storageTypeLocal)
      }
      static fetchUserSession() {
        const UT = TU(zT, TT.storageTypeLocal);
        return UT ? JSON.parse(UT) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var TT;
            this.updateSession({
              refreshActivity: !1
            });
            const UT = null === (TT = this.context.api) || void 0 === TT || null === (TT = TT.getSession()) || void 0 === TT ? void 0 : TT.id;
            UT && this.recordActivity(UT)
          }
        })), this.context.metas.addListener(XU({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession
        }, this.context))
      }
    };
    FU.storageTypeLocal = AT;
    var PU = class TT {
      constructor() {
        var UT = this;
        let mT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZT;
        this.context = mT, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: TT = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return UT.updateUserSession({
            refreshActivity: TT
          })
        }, this.recordActivity = aU({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: nT
        }), this.updateUserSession = tU({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession,
          updateInterval: nT
        }, mT), this.init()
      }
      static removeUserSession() {
        mU(zT, TT.storageTypeSession)
      }
      static storeUserSession(UT) {
        UU(zT, QU(UT), TT.storageTypeSession)
      }
      static fetchUserSession() {
        const UT = TU(zT, TT.storageTypeSession);
        return UT ? JSON.parse(UT) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var TT;
            this.updateSession({
              refreshActivity: !1
            });
            const UT = null === (TT = this.context.api) || void 0 === TT || null === (TT = TT.getSession()) || void 0 === TT ? void 0 : TT.id;
            UT && this.recordActivity(UT)
          }
        })), this.context.metas.addListener(XU({
          fetchUserSession: TT.fetchUserSession,
          storeUserSession: TT.storeUserSession
        }, this.context))
      }
    };
    PU.storageTypeSession = oT;
    const VU = new WeakMap;

    function uU(TT) {
      let UT = VU.get(TT);
      if (!UT) {
        let mT = [],
          WT = [];
        UT = {
          addSessionUpdateListener: TT => {
            mT.push(TT)
          },
          removeSessionUpdateListener: TT => {
            mT = mT.filter((UT => UT !== TT))
          },
          notifySessionUpdate: TT => {
            mT.forEach((UT => UT(TT)))
          },
          shouldCapture: () => WT.every((TT => TT())),
          addCaptureFilter: TT => {
            WT.push(TT)
          },
          removeCaptureFilter: TT => {
            WT = WT.filter((UT => UT !== TT))
          }
        }, VU.set(TT, UT)
      }
      return UT
    }
    var CU = class {
      constructor(TT, UT, mT) {
        this.metas = TT, this.transports = UT, this.onActivate = mT, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = TT => {
          var UT, mT, WT;
          const zT = this.pending;
          var MT, gT;
          if ("overrides" === TT.type) return void(this.pending = {
            reset: null !== (MT = null === zT || void 0 === zT ? void 0 : zT.reset) && void 0 !== MT && MT,
            inheritOverrides: null === (gT = null === zT || void 0 === zT ? void 0 : zT.inheritOverrides) || void 0 === gT || gT,
            session: jU(jU({}, null === zT || void 0 === zT ? void 0 : zT.session), {}, {
              overrides: jU(jU({}, null === zT || void 0 === zT ? void 0 : zT.session.overrides), TT.overrides)
            })
          });
          const nT = TT.session,
            HT = NT(nT) || null != nT && "id" in nT && !nT.id,
            kT = null !== (UT = null === nT || void 0 === nT ? void 0 : nT.overrides) && void 0 !== UT ? UT : null === zT || void 0 === zT ? void 0 : zT.session.overrides;
          this.pending = {
            reset: HT || !(null === nT || void 0 === nT ? void 0 : nT.id) && null !== (mT = null === zT || void 0 === zT ? void 0 : zT.reset) && void 0 !== mT && mT,
            inheritOverrides: !(!TT.overrides && void 0 !== (null === nT || void 0 === nT ? void 0 : nT.overrides)) && (null === (WT = null === zT || void 0 === zT ? void 0 : zT.inheritOverrides) || void 0 === WT || WT),
            session: {
              id: null === nT || void 0 === nT ? void 0 : nT.id,
              attributes: (null === nT || void 0 === nT ? void 0 : nT.attributes) && jU({}, nT.attributes),
              overrides: TT.overrides ? jU(jU({}, null === zT || void 0 === zT ? void 0 : zT.session.overrides), TT.overrides) : kT && jU({}, kT)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var TT, UT;
        this.waiting = !0, uU(this.metas).addSessionUpdateListener(this.recordUpdate), uU(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (TT = (UT = this.metas).addCaptureListener) || void 0 === TT || TT.call(UT, this.activate), this.activate()
      }
      destroy() {
        var TT, UT;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), uU(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (TT = (UT = this.metas).removeCaptureListener) || void 0 === TT || TT.call(UT, this.activate), uU(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function rU(TT) {
      return (null === TT || void 0 === TT ? void 0 : TT.persistent) ? FU : PU
    }

    function KU() {}
    let SU = function(TT) {
      return TT[TT.OFF = 0] = "OFF", TT[TT.ERROR = 1] = "ERROR", TT[TT.WARN = 2] = "WARN", TT[TT.INFO = 3] = "INFO", TT[TT.VERBOSE = 4] = "VERBOSE", TT
    }({});
    const GU = {
        debug: KU,
        error: KU,
        info: KU,
        prefix: "Faro",
        warn: KU
      },
      NU = 1;

    function EU(TT) {
      return EU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, EU(TT)
    }

    function hU(TT) {
      var UT = function(TT, UT) {
        if ("object" != EU(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != EU(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == EU(UT) ? UT : UT + ""
    }

    function DU(TT, UT, mT) {
      return (UT = hU(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function oU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function AU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? oU(Object(mT), !0).forEach((function(UT) {
          DU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : oU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }
    const RU = AU({}, console);
    var Tm = class {
        constructor() {
          this.unpatchedConsole = RU, this.internalLogger = GU, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
          this.internalLogger.debug(`${this.name}\n`, ...UT)
        }
        logInfo() {
          for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
          this.internalLogger.info(`${this.name}\n`, ...UT)
        }
        logWarn() {
          for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
          this.internalLogger.warn(`${this.name}\n`, ...UT)
        }
        logError() {
          for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
          this.internalLogger.error(`${this.name}\n`, ...UT)
        }
      },
      Um = class extends Tm {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const mm = "2.12.1";
    var Wm = class extends Um {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = mm, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(TT) {
        var UT;
        const mT = TT.session;
        if (mT && mT.id !== (null === (UT = this.notifiedSession) || void 0 === UT ? void 0 : UT.id)) {
          var WT;
          if (this.isAdoptingSession()) return void(this.notifiedSession = mT);
          if (this.notifiedSession && this.notifiedSession.id === (null === (WT = mT.attributes) || void 0 === WT ? void 0 : WT.previousSession)) return this.api.pushEvent(YU, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = mT);
          this.notifiedSession = mT, this.api.pushEvent(OU, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(TT, UT, mT) {
        const WT = null === mT || void 0 === mT ? void 0 : mT.session;
        let zT, MT, gT = TT.fetchUserSession();
        if (UT.persistent && UT.maxSessionPersistenceTime && gT) {
          const TT = LU();
          gT.lastActivity < TT - UT.maxSessionPersistenceTime && (FU.removeUserSession(), gT = null)
        }
        const nT = wU(gT);
        if ((null === mT || void 0 === mT ? void 0 : mT.reset) || !nT || (null === WT || void 0 === WT ? void 0 : WT.id) && WT.id !== (null === gT || void 0 === gT ? void 0 : gT.sessionId)) {
          var HT, kT, jT, lT, LT, pT;
          MT = dU({
            sessionId: (null === mT || void 0 === mT ? void 0 : mT.reset) ? void 0 : null !== (HT = null === WT || void 0 === WT ? void 0 : WT.id) && void 0 !== HT ? HT : null === (kT = UT.session) || void 0 === kT ? void 0 : kT.id,
            isSampled: lU(this)
          }, this);
          const TT = MT.sessionId,
            BT = mT && nT ? null === gT || void 0 === gT || null === (jT = gT.sessionMeta) || void 0 === jT ? void 0 : jT.overrides : void 0,
            ZT = BT ? jU(jU({}, null === (lT = UT.session) || void 0 === lT ? void 0 : lT.overrides), BT) : null === (LT = UT.session) || void 0 === LT ? void 0 : LT.overrides;
          MT.sessionMeta = jU({
            id: TT,
            attributes: jU({
              isSampled: MT.isSampled.toString()
            }, null === (pT = UT.session) || void 0 === pT ? void 0 : pT.attributes)
          }, ZT ? {
            overrides: ZT
          } : {}), zT = OU
        } else {
          var BT, ZT;
          const TT = null === gT || void 0 === gT ? void 0 : gT.sessionId;
          MT = dU({
            sessionId: TT,
            isSampled: gT.isSampled || !1,
            started: null === gT || void 0 === gT ? void 0 : gT.started
          }, this);
          const mT = null === gT || void 0 === gT ? void 0 : gT.sessionMeta,
            WT = jU(jU({}, null === (BT = UT.session) || void 0 === BT ? void 0 : BT.overrides), null === mT || void 0 === mT ? void 0 : mT.overrides);
          MT.sessionMeta = jU(jU({}, UT.session), {}, {
            id: TT,
            attributes: jU(jU(jU({}, null === (ZT = UT.session) || void 0 === ZT ? void 0 : ZT.attributes), null === mT || void 0 === mT ? void 0 : mT.attributes), {}, {
              isSampled: MT.isSampled.toString()
            }),
            overrides: WT
          }), zT = eU
        }
        var cT;
        if (WT && (MT.sessionMeta = jU(jU({}, MT.sessionMeta), {}, {
            attributes: jU(jU(jU({}, null === (cT = MT.sessionMeta) || void 0 === cT ? void 0 : cT.attributes), WT.attributes), {}, {
              isSampled: MT.isSampled.toString()
            })
          }), WT.overrides)) {
          const TT = (null === mT || void 0 === mT ? void 0 : mT.inheritOverrides) ? jU(jU({}, MT.sessionMeta.overrides), WT.overrides) : WT.overrides;
          Object.keys(TT).length > 0 ? MT.sessionMeta.overrides = TT : delete MT.sessionMeta.overrides
        }
        return {
          initialSession: MT,
          lifecycleType: zT
        }
      }
      registerBeforeSendHook(TT) {
        var UT;
        this.beforeSendHook = UT => {
          var mT, WT;
          const zT = null === (mT = UT.meta.session) || void 0 === mT ? void 0 : mT.id;
          zT && !this.transports.isPaused() && TT(zT);
          const MT = null === (WT = UT.meta.session) || void 0 === WT ? void 0 : WT.attributes;
          if (MT && "true" === (null === MT || void 0 === MT ? void 0 : MT.isSampled)) {
            var gT;
            let TT = JSON.parse(JSON.stringify(UT));
            const mT = null === (gT = TT.meta.session) || void 0 === gT ? void 0 : gT.attributes;
            var nT;
            if (null === mT || void 0 === mT || delete mT.isSampled, 0 === Object.keys(null !== mT && void 0 !== mT ? mT : {}).length) null === (nT = TT.meta.session) || void 0 === nT || delete nT.attributes;
            return TT
          }
          return null
        }, null === (UT = this.transports) || void 0 === UT || UT.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var TT;
        this.logDebug("init session instrumentation");
        const UT = document.prerendering;
        var mT;
        if ((null === (TT = this.config.sessionTracking) || void 0 === TT ? void 0 : TT.enabled) && (UT || this.prerenderSession)) return null !== (mT = this.prerenderSession) && void 0 !== mT || (this.prerenderSession = new CU(this.metas, this.transports, (TT => {
          this.prerenderSession = void 0, this.initializeSession(TT)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(TT) {
        const UT = this.config.sessionTracking;
        if (null === UT || void 0 === UT ? void 0 : UT.enabled) {
          var mT, WT;
          const zT = rU(UT),
            MT = new zT(this);
          this.isAdoptingSession = MT.isAdopting, this.registerBeforeSendHook(MT.recordActivity);
          const {
            initialSession: gT,
            lifecycleType: nT
          } = this.createInitialSession(zT, UT, TT);
          zT.storeUserSession(gT);
          const HT = gT.sessionMeta;
          this.notifiedSession = HT, this.api.setSession(HT), this.captureListener = () => {
            this.transports.isPaused() || MT.updateSession({
              refreshActivity: !1
            })
          }, null === (mT = (WT = this.metas).addCaptureListener) || void 0 === mT || mT.call(WT, this.captureListener), nT === OU && this.api.pushEvent(OU, {}, void 0, {
            skipDedupe: !0
          }), nT === eU && this.api.pushEvent(eU, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var TT, UT, mT;
        (null === (TT = this.prerenderSession) || void 0 === TT || TT.destroy(), this.captureListener) && (null === (UT = (mT = this.metas).removeCaptureListener) || void 0 === UT || UT.call(mT, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function zm(TT, UT, mT, WT) {
      const zT = {
        filename: TT || document.location.href,
        function: UT || "?"
      };
      return void 0 !== mT && (zT.lineno = mT), void 0 !== WT && (zT.colno = WT), zT
    }
    const Mm = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      gm = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      nm = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Hm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      km = "safari-extension",
      jm = "safari-web-extension",
      lm = /Minified React error #\d+;/i;

    function Lm(TT, UT) {
      const mT = null === TT || void 0 === TT ? void 0 : TT.includes(km),
        WT = !mT && (null === TT || void 0 === TT ? void 0 : TT.includes("safari-web-extension"));
      return mT || WT ? [(null === TT || void 0 === TT ? void 0 : TT.includes("@")) ? TT.split("@")[0] : TT, mT ? `${km}:${UT}` : `${jm}:${UT}`] : [TT, UT]
    }
    const pm = 1024;

    function Bm(TT) {
      let UT = [];
      TT.stacktrace ? UT = TT.stacktrace.split("\n").filter(((TT, UT) => UT % 2 === 0)) : TT.stack && (UT = TT.stack.split("\n"));
      const mT = UT.reduce(((UT, mT, WT) => {
        if (mT.length > pm) return UT;
        let zT, MT, gT, nT, HT;
        if (zT = Mm.exec(mT)) {
          if (MT = zT[1], gT = zT[2], nT = zT[3], HT = zT[4], null === gT || void 0 === gT ? void 0 : gT.startsWith("eval")) {
            const TT = gm.exec(gT);
            TT && (gT = TT[1], nT = TT[2], HT = TT[3])
          }
          gT = (null === gT || void 0 === gT ? void 0 : gT.startsWith("address at ")) ? gT.substring(11) : gT, [MT, gT] = Lm(MT, gT)
        } else if (zT = nm.exec(mT)) {
          if (MT = zT[1], gT = zT[3], nT = zT[4], HT = zT[5], gT && gT.includes(" > eval")) {
            const TT = Hm.exec(gT);
            TT && (MT = MT || "eval", gT = TT[1], nT = TT[2])
          } else 0 === WT && !HT && eT(TT.columnNumber) && (HT = String(TT.columnNumber + 1));
          [MT, gT] = Lm(MT, gT)
        }
        return (gT || MT) && UT.push(zm(gT, MT, nT ? Number(nT) : void 0, HT ? Number(HT) : void 0)), UT
      }), []);
      return lm.test(TT.message) ? mT.slice(1) : mT
    }

    function Zm(TT) {
      return {
        frames: Bm(TT)
      }
    }
    const cm = "http-request-start",
      fm = "http-request-end";
    var qm = class TT {
      constructor() {
        this.subscribers = []
      }
      subscribe(TT) {
        return this.subscribers.push(TT), {
          unsubscribe: () => this.unsubscribe(TT)
        }
      }
      unsubscribe(TT) {
        this.subscribers = this.subscribers.filter((UT => UT !== TT))
      }
      notify(TT) {
        this.subscribers.forEach((UT => UT(TT)))
      }
      first() {
        const UT = new TT,
          mT = TT => {
            UT.notify(TT), WT.unsubscribe()
          },
          WT = this.subscribe(mT),
          zT = UT.unsubscribe.bind(UT);
        return this.withUnsubscribeOverride(UT, zT, mT)
      }
      takeWhile(UT) {
        const mT = new TT,
          WT = TT => {
            UT(TT) ? mT.notify(TT) : mT.unsubscribe(WT)
          };
        this.subscribe(WT);
        const zT = mT.unsubscribe.bind(mT);
        return this.withUnsubscribeOverride(mT, zT, WT)
      }
      filter(UT) {
        const mT = new TT,
          WT = TT => {
            UT(TT) && mT.notify(TT)
          };
        this.subscribe(WT);
        const zT = mT.unsubscribe.bind(mT);
        return this.withUnsubscribeOverride(mT, zT, WT)
      }
      merge() {
        const UT = new TT,
          mT = [];
        for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
        zT.forEach((TT => {
          const WT = TT.subscribe((TT => {
            UT.notify(TT)
          }));
          mT.push(WT)
        }));
        const gT = UT.unsubscribeAll.bind(UT);
        return UT.unsubscribe = () => {
          mT.forEach((TT => TT.unsubscribe())), gT()
        }, UT
      }
      withUnsubscribeOverride(TT, UT, mT) {
        return TT.unsubscribe = TT => {
          UT(TT), this.unsubscribe(mT)
        }, TT
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let im = function(TT) {
      return TT.TRACE = "trace", TT.DEBUG = "debug", TT.INFO = "info", TT.LOG = "log", TT.WARN = "warn", TT.ERROR = "error", TT
    }({});
    const bm = "log",
      Om = ["trace", "debug", "info", "log", "warn", "error"];
    let em, Ym = !1;
    const Jm = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      xm = "Error",
      dm = TT => TT.map((TT => dT(TT) ? QU(TT) : String(TT))).join(" ");

    function wm(TT) {
      let UT, mT, WT, zT, MT = [];
      if (PT(TT) && TT.error) UT = TT.error.message, mT = TT.error.name, MT = Bm(TT.error);
      else if ((WT = VT(TT)) || uT(TT)) {
        const {
          name: zT,
          message: MT
        } = TT;
        mT = null !== zT && void 0 !== zT ? zT : WT ? "DOMError" : "DOMException", UT = MT ? `${mT}: ${MT}` : mT
      } else FT(TT) ? (mT = TT.name, UT = TT.message, MT = Bm(TT)) : (dT(TT) || (zT = QT(TT))) && (mT = zT ? TT.constructor.name : void 0, UT = `Non-Error exception captured with keys: ${Object.keys(TT)}`);
      return [UT, mT, MT]
    }

    function tm(TT) {
      const [UT, mT, WT, zT, MT] = TT;
      let gT, nT, HT = [];
      const kT = OT(UT),
        jT = zm(mT, "?", WT, zT);
      return MT || !kT ? ([gT, nT, HT] = wm(null !== MT && void 0 !== MT ? MT : UT), 0 === HT.length && (HT = [jT])) : kT && ([gT, nT] = function(TT) {
        var UT, mT;
        const WT = TT.match(Jm),
          zT = null !== (UT = null === WT || void 0 === WT ? void 0 : WT[1]) && void 0 !== UT ? UT : xm;
        return [null !== (mT = null === WT || void 0 === WT ? void 0 : WT[2]) && void 0 !== mT ? mT : TT, zT]
      }(UT), HT = [jT]), {
        value: gT,
        type: nT,
        stackFrames: HT
      }
    }

    function am(TT, UT) {
      return FT(TT[0]) ? tm(TT) : {
        value: UT(TT)
      }
    }
    const ym = TT => TT.map((TT => {
      try {
        return String(TT)
      } catch (UT) {
        return ""
      }
    })).join(" ");
    var Xm = class TT extends Um {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = mm, this.errorSerializer = ym
      }
      initialize() {
        var UT, mT;
        const WT = this.config.consoleInstrumentation,
          zT = (null === WT || void 0 === WT ? void 0 : WT.serializeErrors) || !!(null === WT || void 0 === WT ? void 0 : WT.errorSerializer);
        this.errorSerializer = zT ? null !== (UT = null === WT || void 0 === WT ? void 0 : WT.errorSerializer) && void 0 !== UT ? UT : dm : ym;
        const MT = null !== (mT = null === WT || void 0 === WT ? void 0 : WT.disabledLevels) && void 0 !== mT ? mT : TT.defaultDisabledLevels,
          gT = function(TT) {
            if (em || (em = new qm), !Ym) {
              const UT = null !== TT && void 0 !== TT ? TT : RU;
              Om.forEach((TT => {
                console[TT] = function() {
                  for (var mT, WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
                  em.notify({
                    type: "console",
                    level: TT,
                    args: zT
                  }), null === (mT = UT[TT]) || void 0 === mT || mT.apply(console, zT)
                }
              })), Ym = !0
            }
            return em
          }(this.unpatchedConsole);
        this.subscription = gT.subscribe((UT => {
          let {
            level: mT,
            args: zT
          } = UT;
          if (!MT.includes(mT)) try {
            if (mT !== im.ERROR || (null === WT || void 0 === WT ? void 0 : WT.consoleErrorAsLog))
              if (mT === im.ERROR && (null === WT || void 0 === WT ? void 0 : WT.consoleErrorAsLog)) {
                const {
                  value: UT,
                  type: WT,
                  stackFrames: MT
                } = am(zT, this.errorSerializer);
                this.api.pushLog(UT ? [TT.consoleErrorPrefix + UT] : zT, {
                  level: mT,
                  context: {
                    value: null !== UT && void 0 !== UT ? UT : "",
                    type: null !== WT && void 0 !== WT ? WT : "",
                    stackFrames: (null === MT || void 0 === MT ? void 0 : MT.length) ? dm(MT) : ""
                  }
                })
              } else this.api.pushLog(zT, {
                level: mT
              });
            else {
              const {
                value: UT,
                type: mT,
                stackFrames: WT
              } = am(zT, this.errorSerializer);
              if (UT && !mT && !WT) return void this.api.pushError(new Error(TT.consoleErrorPrefix + UT));
              this.api.pushError(new Error(TT.consoleErrorPrefix + UT), {
                type: mT,
                stackFrames: WT
              })
            }
          } catch (gT) {
            this.logError(gT)
          }
        }))
      }
      destroy() {
        var TT;
        null === (TT = this.subscription) || void 0 === TT || TT.unsubscribe(), this.subscription = void 0
      }
    };
    Xm.defaultDisabledLevels = [im.DEBUG, im.TRACE, im.LOG], Xm.consoleErrorPrefix = "console.error: ";
    const Im = [];
    var Qm = class extends Um {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = mm
      }
      initialize() {
        this.logDebug("Initializing"),
          function(TT) {
            const UT = window.onerror;
            window.onerror = function() {
              for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
              try {
                const {
                  value: UT,
                  type: mT,
                  stackFrames: zT
                } = tm(WT), MT = WT[4];
                if (UT) {
                  const WT = {
                    type: mT,
                    stackFrames: zT
                  };
                  null != MT && (WT.originalError = MT), TT.pushError(new Error(UT), WT)
                }
              } finally {
                null === UT || void 0 === UT || UT.apply(window, WT)
              }
            }
          }(this.api),
          function(TT) {
            const UT = UT => {
              var mT;
              let WT, zT, MT = UT;
              if (MT.reason) MT = UT.reason;
              else if (null === (mT = UT.detail) || void 0 === mT ? void 0 : mT.reason) {
                var gT;
                MT = null === (gT = UT.detail) || void 0 === gT ? void 0 : gT.reason
              }
              let nT = [];
              XT(MT) ? (WT = `Non-Error promise rejection captured with value: ${String(MT)}`, zT = "UnhandledRejection") : [WT, zT, nT] = wm(MT), WT && TT.pushError(new Error(WT), {
                type: zT,
                stackFrames: nT
              })
            };
            window.addEventListener("unhandledrejection", UT), Im.push(UT)
          }(this.api)
      }
    };
    const sm = "unknown";
    var Fm = class extends Um {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = mm, this.waitingForActivation = !1, this.sendViewChangedEvent = TT => {
          var UT;
          if (this.waitingForActivation || document.prerendering) return;
          const mT = TT.view;
          if (mT && mT.name !== (null === (UT = this.notifiedView) || void 0 === UT ? void 0 : UT.name)) {
            var WT, zT, MT;
            const TT = null !== (WT = null === (zT = this.notifiedView) || void 0 === zT ? void 0 : zT.name) && void 0 !== WT ? WT : sm;
            this.notifiedView = mT, this.api.pushEvent(bU, {
              fromView: TT,
              toView: null !== (MT = mT.name) && void 0 !== MT ? MT : sm
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
    class Pm {
      t;
      o = 0;
      i = [];
      l(TT) {
        if (TT.hadRecentInput) return;
        const UT = this.i[0],
          mT = this.i.at(-1);
        this.o && UT && mT && TT.startTime - mT.startTime < 1e3 && TT.startTime - UT.startTime < 5e3 ? (this.o += TT.value, this.i.push(TT)) : (this.o = TT.value, this.i = [TT]), this.t?.(TT)
      }
    }
    const Vm = () => {
        const TT = performance.getEntriesByType("navigation")[0];
        if (TT && TT.responseStart > 0 && TT.responseStart < performance.now()) return TT
      },
      um = TT => {
        if ("loading" === document.readyState) return "loading";
        const UT = Vm();
        if (UT) {
          if (TT < UT.domInteractive) return "loading";
          if (0 === UT.domContentLoadedEventStart || TT < UT.domContentLoadedEventStart) return "dom-interactive";
          if (0 === UT.domComplete || TT < UT.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Cm = TT => {
        const UT = TT.nodeName;
        return 1 === TT.nodeType ? UT.toLowerCase() : UT.toUpperCase().replace(/^#/, "")
      },
      rm = TT => {
        let UT = "";
        try {
          for (; 9 !== TT?.nodeType;) {
            const mT = TT,
              WT = mT.id ? "#" + mT.id : [Cm(mT), ...Array.from(mT.classList ?? []).sort()].join(".");
            if (UT.length + WT.length > 99) return UT || WT;
            if (UT = UT ? WT + ">" + UT : WT, mT.id) break;
            TT = mT.parentNode
          }
        } catch {}
        return UT
      },
      Km = new WeakMap;

    function Sm(TT, UT) {
      let mT = Km.get(UT);
      return mT || (mT = new WeakMap, Km.set(UT, mT)), mT.get(TT) || mT.set(TT, new UT), mT.get(TT)
    }
    let Gm = -1;
    const Nm = () => Gm,
      Em = TT => {
        addEventListener("pageshow", (UT => {
          UT.persisted && (Gm = UT.timeStamp, TT(UT))
        }), !0)
      },
      hm = (TT, UT, mT, WT) => {
        let zT, MT;
        return gT => {
          UT.value >= 0 && (gT || WT) && (MT = UT.value - (zT ?? 0), (MT || void 0 === zT) && (zT = UT.value, UT.delta = MT, UT.rating = ((TT, UT) => TT > UT[1] ? "poor" : TT > UT[0] ? "needs-improvement" : "good")(UT.value, mT), TT(UT)))
        }
      },
      Dm = TT => {
        requestAnimationFrame((() => requestAnimationFrame((() => TT()))))
      },
      om = () => Vm()?.activationStart ?? 0;
    let Am = -1;
    const Rm = new Set,
      TW = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      UW = TT => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === TT.type)
            for (const TT of Rm) TT();
          isFinite(Am) || (Am = "visibilitychange" === TT.type ? TT.timeStamp : 0, removeEventListener("prerenderingchange", UW, !0))
        }
      },
      mW = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Am = 1 / 0), Am < 0) {
          const TT = om(),
            UT = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((UT => "hidden" === UT.name && UT.startTime >= TT))?.startTime;
          Am = UT ?? TW(), addEventListener("visibilitychange", UW, !0), addEventListener("prerenderingchange", UW, !0), Em((() => {
            setTimeout((() => {
              Am = TW()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Am
          },
          onHidden(TT) {
            Rm.add(TT)
          }
        }
      },
      WW = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0,
          gT = arguments.length > 6 ? arguments[6] : void 0;
        const nT = Vm(),
          HT = nT?.navigationId || 0;
        let kT = "navigate";
        return mT ? kT = mT : Nm() >= 0 ? kT = "back-forward-cache" : nT && (document.prerendering || om() > 0 ? kT = "prerender" : document.wasDiscarded ? kT = "restore" : nT.type && (kT = nT.type.replace(/_/g, "-"))), {
          name: TT,
          value: UT,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: kT,
          navigationId: WT || HT,
          navigationInteractionId: zT,
          navigationURL: MT || nT?.name,
          navigationStartTime: gT || 0
        }
      },
      zW = function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const WT = TT.filter((TT => PerformanceObserver.supportedEntryTypes.includes(TT)));
          if (WT.length > 0) {
            const TT = new PerformanceObserver((TT => {
              queueMicrotask((() => {
                const mT = TT.getEntries();
                WT.length > 1 && mT.sort(((TT, UT) => TT.startTime + TT.duration - (UT.startTime + UT.duration))), UT(mT)
              }))
            }));
            for (const UT of WT) TT.observe({
              type: UT,
              buffered: !0,
              ...mT
            });
            return TT
          }
        } catch {}
      },
      MW = TT => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && TT && TT.reportSoftNavs,
      gW = (TT, UT) => {
        if (TT.set(UT.navigationId, UT), TT.size > 2) {
          const UT = TT.keys().next().value;
          void 0 !== UT && TT.delete(UT)
        }
      },
      nW = TT => {
        let UT = !1;
        return () => {
          UT || (TT(), UT = !0)
        }
      };
    class HW {
      u
    }
    const kW = TT => {
        document.prerendering ? addEventListener("prerenderingchange", TT, !0) : TT()
      },
      jW = [1800, 3e3],
      lW = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const mT = MW(UT);
        kW((() => {
          const WT = Sm(UT, HW),
            zT = mW();
          let MT, gT = WW("FCP");
          const nT = zW(["paint"], (TT => {
            for (const UT of TT) "first-contentful-paint" === UT.name && (nT.disconnect(), UT.startTime < zT.firstHiddenTime && (gT.value = Math.max(UT.startTime - om(), 0), gT.entries.push(UT), gT.navigationId = UT.navigationId || gT.navigationId, MT(!0)))
          }));
          nT && (MT = hm(TT, gT, jW, UT.reportAllChanges), Em((mT => {
            gT = WW("FCP", -1, "back-forward-cache", gT.navigationId, gT.navigationInteractionId, gT.navigationURL, Nm()), MT = hm(TT, gT, jW, UT.reportAllChanges), Dm((() => {
              gT.value = performance.now() - mT.timeStamp, MT(!0)
            }))
          }))), mT && zW(["soft-navigation"], (mT => {
            mT.forEach((mT => {
              WT.u && mT.navigationId && gW(WT.u, mT);
              const zT = Math.max((mT.presentationTime || mT.paintTime || 0) - mT.startTime, 0);
              gT = WW("FCP", zT, "soft-navigation", mT.navigationId, mT.interactionId, mT.name, mT.startTime), MT = hm(TT, gT, jW, UT.reportAllChanges), MT(!0)
            }))
          }), UT)
        }))
      },
      LW = [.1, .25],
      pW = TT => TT.find((TT => 1 === TT.node?.nodeType)) || TT[0];
    let BW = 0,
      ZW = 1 / 0,
      cW = 0;
    const vW = TT => {
      for (const UT of TT) UT.interactionId && (ZW = Math.min(ZW, UT.interactionId), cW = Math.max(cW, UT.interactionId), BW = cW ? (cW - ZW) / 7 + 1 : 0)
    };
    let fW;
    const qW = () => fW ? BW : performance.interactionCount ?? 0;
    class iW {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return qW() - this.h
      }
      D() {
        this.h = qW(), this.v.length = 0, this.p.clear()
      }
      S(TT) {
        const UT = this.T(),
          mT = Math.min(this.v.length - 1, Math.floor(UT / 50));
        return !UT || -1 !== mT || "soft-navigation" !== TT && "back-forward-cache" !== TT ? this.v[mT] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(TT) {
        if (this.m?.(TT), !TT.interactionId) return;
        const UT = this.v.at(-1);
        let mT = this.p.get(TT.interactionId);
        if (mT || this.v.length < 10 || TT.duration > UT.k) {
          if (mT ? TT.duration > mT.k ? (mT.entries = [TT], mT.k = TT.duration) : TT.duration === mT.k && TT.startTime === mT.entries[0].startTime && mT.entries.push(TT) : (mT = {
              id: TT.interactionId,
              entries: [TT],
              k: TT.duration
            }, this.p.set(mT.id, mT), this.v.push(mT)), this.v.sort(((TT, UT) => UT.k - TT.k)), this.v.length > 10) {
            const TT = this.v.splice(10);
            for (const UT of TT) this.p.delete(UT.id)
          }
          this.M?.(mT)
        }
      }
    }
    const bW = TT => {
        const UT = "requestIdleCallback" in globalThis ? 1e3 : 0,
          mT = globalThis.requestIdleCallback || setTimeout,
          WT = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) TT();
        else {
          const zT = nW(TT);
          let MT = -1;
          const gT = () => {
            WT(MT), zT()
          };
          addEventListener("visibilitychange", gT, {
            once: !0,
            capture: !0
          }), MT = mT((() => {
            removeEventListener("visibilitychange", gT, {
              capture: !0
            }), zT()
          }), {
            timeout: UT
          })
        }
      },
      OW = [200, 500],
      eW = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const mT = Sm(UT = Object.assign({}, UT), iW);
        let WT = [],
          zT = [],
          MT = 0;
        const gT = new WeakMap,
          nT = new WeakMap;
        let HT = !1;
        const kT = () => {
            HT || (HT = !0, bW(jT))
          },
          jT = () => {
            const TT = new Set(mT.v.map((TT => gT.get(TT.entries[0])))),
              UT = zT.length - 10;
            zT = zT.filter(((mT, WT) => WT >= UT || TT.has(mT)));
            const nT = new Set;
            for (const mT of zT) {
              const TT = lT(mT.startTime, mT.processingEnd);
              for (const UT of TT) nT.add(UT)
            }
            const kT = WT.length - 10;
            WT = WT.filter(((TT, UT) => nT.has(TT) || UT >= kT && TT.startTime > MT)), HT = !1
          };
        mT.m = TT => {
          const mT = TT.startTime + TT.duration;
          let WT;
          MT = Math.max(MT, TT.processingEnd);
          for (let MT = zT.length - 1; MT >= 0; MT--) {
            const gT = zT[MT];
            if (Math.abs(mT - gT.renderTime) <= 8) {
              WT = gT, WT.startTime = Math.min(TT.startTime, WT.startTime), WT.processingStart = Math.min(TT.processingStart, WT.processingStart), WT.processingEnd = Math.max(TT.processingEnd, WT.processingEnd), UT.includeProcessedEventEntries && WT.entries.push(TT);
              break
            }
          }
          WT || (WT = {
            startTime: TT.startTime,
            processingStart: TT.processingStart,
            processingEnd: TT.processingEnd,
            renderTime: mT,
            entries: UT.includeProcessedEventEntries ? [TT] : []
          }, zT.push(WT)), TT.interactionId && gT.set(TT, WT), kT()
        }, mT.M = TT => {
          if (!nT.get(TT)) {
            const mT = TT.entries.find((TT => TT.target))?.target;
            if (mT) {
              const WT = UT.generateTarget?.(mT) ?? rm(mT);
              nT.set(TT, WT)
            } else {
              const UT = TT.entries.find((TT => TT.targetSelector))?.targetSelector;
              UT && nT.set(TT, UT)
            }
          }
        };
        const lT = (TT, UT) => {
          const mT = [];
          for (const zT of WT)
            if (!(zT.startTime + zT.duration < TT)) {
              if (zT.startTime > UT) break;
              mT.push(zT)
            } return mT
        };
        zW(["long-animation-frame"], (TT => {
            WT = WT.concat(TT), kT()
          }), UT),
          function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const mT = mW();
            kW((() => {
              "interactionCount" in performance || fW || (fW = zW(["event"], vW, {
                durationThreshold: 0
              }));
              let WT, zT = WW("INP");
              const MT = Sm(UT, iW),
                gT = (mT, gT, nT, HT, kT) => {
                  MT.D(), zT = WW("INP", -1, mT, gT, nT, HT, kT), WT = hm(TT, zT, OW, UT.reportAllChanges)
                },
                nT = () => {
                  const TT = MT.S(zT.navigationType);
                  TT && TT.k !== zT.value && (zT.value = TT.k, zT.entries = TT.entries, WT())
                },
                HT = TT => {
                  nT(), WT(!0), gT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime)
                },
                kT = function(TT) {
                  let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  bW((() => {
                    for (const UT of TT) "soft-navigation" !== UT.entryType ? MT.l(UT) : HT(UT);
                    nT(), UT && WT(!0)
                  }))
                },
                jT = ["event", "first-input"];
              MW(UT) && jT.push("soft-navigation");
              const lT = zW(jT, kT, {
                ...UT,
                durationThreshold: UT.durationThreshold ?? 40
              });
              WT = hm(TT, zT, OW, UT.reportAllChanges), lT && (mT.onHidden((() => {
                kT(lT.takeRecords(), !0)
              })), Em((() => {
                gT("back-forward-cache", zT.navigationId, zT.navigationInteractionId, zT.navigationURL, Nm())
              })))
            }))
          }((UT => {
            TT((TT => {
              if (0 === TT.entries.length) {
                const UT = TT.navigationStartTime || 0,
                  mT = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: TT.value,
                    loadState: um(UT)
                  };
                return Object.assign(TT, {
                  attribution: mT
                })
              }
              const UT = TT.entries[0],
                WT = gT.get(UT),
                zT = Math.max(WT.processingStart, UT.startTime),
                MT = Math.max(UT.startTime + UT.duration, zT),
                HT = Math.min(WT.processingEnd, MT),
                kT = WT.entries.sort(((TT, UT) => TT.processingStart - UT.processingStart)),
                jT = lT(UT.startTime, HT),
                LT = mT.p.get(UT.interactionId),
                pT = {
                  interactionTarget: nT.get(LT),
                  interactionType: UT.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: UT.startTime,
                  nextPaintTime: MT,
                  processedEventEntries: kT,
                  longAnimationFrameEntries: jT,
                  inputDelay: zT - UT.startTime,
                  processingDuration: HT - zT,
                  presentationDelay: MT - HT,
                  loadState: um(UT.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (TT => {
                const UT = TT.interactionTime,
                  mT = TT.nextPaintTime;
                if (!TT.longAnimationFrameEntries?.length || !UT || !mT) return;
                const WT = TT.inputDelay,
                  zT = TT.processingDuration;
                let MT, gT, nT = 0,
                  HT = 0,
                  kT = 0,
                  jT = 0;
                for (const pT of TT.longAnimationFrameEntries) {
                  HT = HT + pT.startTime + pT.duration - pT.styleAndLayoutStart;
                  for (const TT of pT.scripts) {
                    const mT = TT.startTime + TT.duration;
                    if (mT < UT) continue;
                    const kT = mT - Math.max(UT, TT.startTime),
                      lT = TT.duration ? kT / TT.duration * TT.forcedStyleAndLayoutDuration : 0;
                    nT += kT - lT, HT += lT, kT > jT && (gT = TT.startTime < UT + WT ? "input-delay" : TT.startTime >= UT + WT + zT ? "presentation-delay" : "processing-duration", MT = TT, jT = kT)
                  }
                }
                const lT = TT.longAnimationFrameEntries.at(-1),
                  LT = lT ? lT.startTime + lT.duration : 0;
                LT >= UT + WT + zT && (kT = mT - LT), MT && gT && (TT.longestScript = {
                  entry: MT,
                  subpart: gT,
                  intersectingDuration: jT
                }), TT.totalScriptDuration = nT, TT.totalStyleAndLayoutDuration = HT, TT.totalPaintDuration = kT, TT.totalUnattributedDuration = mT - UT - nT - HT - kT
              })(pT), Object.assign(TT, {
                attribution: pT
              })
            })(UT))
          }), UT)
      };
    class YW {
      m;
      u;
      l(TT) {
        this.m?.(TT)
      }
    }
    const JW = [2500, 4e3];
    let xW = 50;
    const dW = [];
    zW(["resource"], (TT => {
      for (const UT of TT) dW.push(UT), dW.length > xW && dW.shift()
    }));
    const wW = [800, 1800],
      tW = TT => {
        document.prerendering ? kW((() => tW(TT))) : "complete" !== document.readyState ? addEventListener("load", (() => tW(TT)), !0) : setTimeout(TT)
      },
      aW = "load_state",
      yW = "time_to_first_byte";
    var XW = class {
        constructor(TT, UT) {
          this.corePushMeasurement = TT, this.webVitalConfig = UT
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var TT;
          ! function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const mT = Sm(UT = Object.assign({}, UT), Pm),
              WT = new WeakMap;
            mT.t = TT => {
                if (TT?.sources?.length) {
                  const mT = pW(TT.sources),
                    zT = mT?.node;
                  if (zT) {
                    const TT = UT.generateTarget?.(zT) ?? rm(zT);
                    WT.set(mT, TT)
                  }
                }
              },
              function(TT) {
                let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const mT = mW();
                lW(nW((() => {
                  let WT, zT = WW("CLS", 0);
                  const MT = Sm(UT, Pm),
                    gT = (mT, gT, nT, HT, kT) => {
                      zT = WW("CLS", 0, mT, gT, nT, HT, kT), MT.o = 0, WT = hm(TT, zT, LW, UT.reportAllChanges)
                    },
                    nT = function() {
                      let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      MT.o > zT.value && (zT.value = MT.o, zT.entries = MT.i), WT(TT)
                    },
                    HT = TT => {
                      nT(!0), gT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime)
                    },
                    kT = TT => {
                      for (const UT of TT) "soft-navigation" !== UT.entryType ? MT.l(UT) : HT(UT);
                      nT()
                    },
                    jT = ["layout-shift"];
                  MW(UT) && jT.push("soft-navigation");
                  const lT = zW(jT, kT);
                  lT && (WT = hm(TT, zT, LW, UT.reportAllChanges), mT.onHidden((() => {
                    kT(lT.takeRecords()), WT(!0)
                  })), Em((() => {
                    gT("back-forward-cache", zT.navigationId, zT.navigationInteractionId, zT.navigationURL, Nm()), Dm(WT)
                  })), setTimeout(WT))
                })))
              }((UT => {
                TT((TT => {
                  let UT = {};
                  if (TT.entries.length) {
                    const mT = TT.entries.reduce(((TT, UT) => TT.value > UT.value ? TT : UT));
                    if (mT?.sources?.length) {
                      const TT = pW(mT.sources);
                      TT && (UT = {
                        largestShiftTarget: WT.get(TT),
                        largestShiftTime: mT.startTime,
                        largestShiftValue: mT.value,
                        largestShiftSource: TT,
                        largestShiftEntry: mT,
                        loadState: um(mT.startTime)
                      })
                    }
                  }
                  return Object.assign(TT, {
                    attribution: UT
                  })
                })(UT))
              }), UT)
          }((TT => {
            const {
              loadState: UT,
              largestShiftValue: mT,
              largestShiftTime: WT,
              largestShiftTarget: zT
            } = TT.attribution, MT = this.buildInitialValues(TT);
            this.addIfPresent(MT, "largest_shift_value", mT), this.addIfPresent(MT, "largest_shift_time", WT);
            const gT = this.buildInitialContext(TT);
            this.addIfPresent(gT, aW, UT), this.addIfPresent(gT, "largest_shift_target", zT), this.pushMeasurement(MT, gT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureFCP() {
          var TT;
          ! function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const mT = Sm(UT = Object.assign({}, UT), HW);
            MW(UT) && (mT.u = new Map), lW((UT => {
              TT((TT => {
                let UT = {
                  timeToFirstByte: 0,
                  firstByteToFCP: TT.value,
                  loadState: um(Nm())
                };
                if ("soft-navigation" !== TT.navigationType) {
                  if (TT.entries.length) {
                    const mT = Vm(),
                      WT = TT.entries.at(-1);
                    if (mT) {
                      const zT = mT.responseStart,
                        MT = mT.activationStart || 0,
                        gT = Math.max(0, zT - MT);
                      UT = {
                        timeToFirstByte: gT,
                        firstByteToFCP: TT.value - gT,
                        loadState: um(TT.entries[0].startTime),
                        navigationEntry: mT,
                        fcpEntry: WT
                      }
                    }
                  }
                } else {
                  const WT = mT.u?.get(TT.navigationId);
                  WT && (UT = {
                    timeToFirstByte: 0,
                    firstByteToFCP: TT.value,
                    loadState: "complete",
                    navigationEntry: WT
                  })
                }
                return Object.assign(TT, {
                  attribution: UT
                })
              })(UT))
            }), UT)
          }((TT => {
            const {
              firstByteToFCP: UT,
              timeToFirstByte: mT,
              loadState: WT
            } = TT.attribution, zT = this.buildInitialValues(TT);
            this.addIfPresent(zT, "first_byte_to_fcp", UT), this.addIfPresent(zT, yW, mT);
            const MT = this.buildInitialContext(TT);
            this.addIfPresent(MT, aW, WT), this.pushMeasurement(zT, MT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureINP() {
          var TT;
          eW((TT => {
            var UT;
            const {
              interactionTime: mT,
              presentationDelay: WT,
              inputDelay: zT,
              processingDuration: MT,
              nextPaintTime: gT,
              loadState: nT,
              interactionTarget: HT,
              interactionType: kT,
              totalScriptDuration: jT,
              totalStyleAndLayoutDuration: lT,
              totalPaintDuration: LT,
              totalUnattributedDuration: pT,
              longestScript: BT
            } = TT.attribution, ZT = this.buildInitialValues(TT);
            this.addIfPresent(ZT, "interaction_time", mT), this.addIfPresent(ZT, "presentation_delay", WT), this.addIfPresent(ZT, "input_delay", zT), this.addIfPresent(ZT, "processing_duration", MT), this.addIfPresent(ZT, "next_paint_time", gT), this.addNumberIfDefined(ZT, "total_script_duration", jT), this.addNumberIfDefined(ZT, "total_style_and_layout_duration", lT), this.addNumberIfDefined(ZT, "total_paint_duration", LT), this.addNumberIfDefined(ZT, "total_unattributed_duration", pT), this.addNumberIfDefined(ZT, "longest_script_intersecting_duration", null === BT || void 0 === BT ? void 0 : BT.intersectingDuration);
            const cT = this.buildInitialContext(TT);
            this.addIfPresent(cT, aW, nT), this.addIfPresent(cT, "interaction_target", HT), this.addIfPresent(cT, "interaction_type", kT), this.addIfPresent(cT, "longest_script_subpart", null === BT || void 0 === BT ? void 0 : BT.subpart), this.addIfPresent(cT, "longest_script_invoker_type", null === BT || void 0 === BT ? void 0 : BT.entry.invokerType), (null === (UT = this.webVitalConfig) || void 0 === UT ? void 0 : UT.trackAttributionSources) && (this.addIfPresent(cT, "longest_script_invoker", null === BT || void 0 === BT ? void 0 : BT.entry.invoker), this.addIfPresent(cT, "longest_script_source_url", null === BT || void 0 === BT ? void 0 : BT.entry.sourceURL), this.addIfPresent(cT, "longest_script_source_function_name", null === BT || void 0 === BT ? void 0 : BT.entry.sourceFunctionName), this.addIfPresent(cT, "longest_script_source_char_position", void 0 !== (null === BT || void 0 === BT ? void 0 : BT.entry.sourceCharPosition) ? String(BT.entry.sourceCharPosition) : void 0)), this.pushMeasurement(ZT, cT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureLCP() {
          var TT;
          ! function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (UT = Object.assign({}, UT)).resourceBufferSize && (xW = UT.resourceBufferSize);
            const mT = Sm(UT, YW),
              WT = new WeakMap;
            MW(UT) && (mT.u = new Map), mT.m = TT => {
                const mT = TT.element;
                if (mT) {
                  const zT = UT.generateTarget?.(mT) ?? rm(mT);
                  WT.set(TT, zT)
                } else TT.id && WT.set(TT, `#${TT.id}`)
              },
              function(TT) {
                let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  mT = !1;
                const WT = MW(UT);
                kW((() => {
                  let zT, MT = mW(),
                    gT = WW("LCP");
                  const nT = Sm(UT, YW),
                    HT = (WT, nT, HT, kT, jT) => {
                      gT = WW("LCP", -1, WT, nT, HT, kT, jT), zT = hm(TT, gT, JW, UT.reportAllChanges), mT = !1, "soft-navigation" === WT && (MT = mW(!0))
                    },
                    kT = TT => {
                      nT.u && TT.navigationId && gW(nT.u, TT), mT || zT(!0), HT("soft-navigation", TT.navigationId, TT.interactionId, TT.name, TT.startTime);
                      const UT = TT.getLargestInteractionContentfulPaint?.();
                      UT && jT([UT])
                    },
                    jT = TT => {
                      UT.reportAllChanges || WT || (TT = TT.slice(-1));
                      for (const UT of TT) {
                        if (!UT) continue;
                        if ("soft-navigation" === UT.entryType) {
                          kT(UT);
                          continue
                        }
                        let TT = 0,
                          mT = [],
                          WT = UT.startTime;
                        if ("largest-contentful-paint" === UT.entryType) TT = Math.max(UT.startTime - om(), 0), nT.l(UT), mT = [UT];
                        else if ("interaction-contentful-paint" === UT.entryType) {
                          const zT = UT;
                          if (!gT.navigationId) continue;
                          if ("interactionId" in zT && zT.interactionId != gT.navigationInteractionId) continue;
                          WT = zT.largestContentfulPaint?.renderTime || 0, TT = Math.max(WT - UT.startTime, 0), zT.largestContentfulPaint && (nT.l(zT.largestContentfulPaint), mT = [zT.largestContentfulPaint])
                        }
                        WT < MT.firstHiddenTime && (gT.value = TT, gT.entries = mT, zT())
                      }
                    },
                    lT = ["largest-contentful-paint"];
                  WT && lT.push("interaction-contentful-paint", "soft-navigation");
                  const LT = zW(lT, jT);
                  if (LT) {
                    zT = hm(TT, gT, JW, UT.reportAllChanges);
                    const MT = ["keydown", "click", "visibilitychange"],
                      nT = TT => {
                        if (TT.isTrusted && !mT) {
                          const TT = gT.id;
                          bW((() => {
                            if (!mT) {
                              if (!WT) {
                                LT.disconnect();
                                for (const TT of MT) removeEventListener(TT, nT, {
                                  capture: !0
                                })
                              }
                              TT === gT.id && (mT = !0, zT(!0))
                            }
                          }))
                        }
                      };
                    for (const TT of MT) addEventListener(TT, nT, {
                      capture: !0
                    });
                    Em((WT => {
                      HT("back-forward-cache", gT.navigationId, gT.navigationInteractionId, gT.navigationURL, Nm()), zT = hm(TT, gT, JW, UT.reportAllChanges), Dm((() => {
                        gT.value = performance.now() - WT.timeStamp, mT = !0, zT(!0)
                      }))
                    }))
                  }
                }))
              }((UT => {
                TT((TT => {
                  let UT = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: TT.value
                  };
                  if (TT.entries.length) {
                    const zT = TT.entries.at(-1),
                      MT = TT => TT.name === zT.url && (TT.requestStart || TT.startTime) <= zT.startTime,
                      gT = zT.url && (dW.findLast(MT) || performance.getEntriesByType("resource").findLast(MT));
                    let nT;
                    UT.target = WT.get(zT), UT.lcpEntry = zT, zT.url && (UT.url = zT.url), gT && (UT.lcpResourceEntry = gT);
                    let HT = 0,
                      kT = 0;
                    if ("soft-navigation" !== TT.navigationType ? (nT = Vm(), HT = nT?.activationStart ?? 0, kT = nT?.responseStart ?? 0) : (HT = TT.navigationStartTime || 0, nT = mT.u?.get(TT.navigationId)), nT) {
                      const mT = Math.max(0, kT - HT),
                        WT = Math.max(mT, gT ? (gT.requestStart || gT.startTime) - HT : 0),
                        zT = Math.min(TT.value, Math.max(WT, gT ? gT.responseEnd - HT : 0));
                      UT = {
                        ...UT,
                        timeToFirstByte: mT,
                        resourceLoadDelay: WT - mT,
                        resourceLoadDuration: zT - WT,
                        elementRenderDelay: TT.value - zT,
                        navigationEntry: nT
                      }
                    }
                  }
                  return Object.assign(TT, {
                    attribution: UT
                  })
                })(UT))
              }), UT)
          }((TT => {
            var UT;
            const {
              elementRenderDelay: mT,
              resourceLoadDelay: WT,
              resourceLoadDuration: zT,
              timeToFirstByte: MT,
              target: gT,
              url: nT,
              lcpResourceEntry: HT
            } = TT.attribution, kT = this.buildInitialValues(TT);
            this.addIfPresent(kT, "element_render_delay", mT), this.addIfPresent(kT, "resource_load_delay", WT), this.addIfPresent(kT, "resource_load_duration", zT), this.addIfPresent(kT, yW, MT);
            const jT = this.buildInitialContext(TT);
            this.addIfPresent(jT, "element", gT), (null === (UT = this.webVitalConfig) || void 0 === UT ? void 0 : UT.trackAttributionSources) && (this.addIfPresent(jT, "resource_url", nT), this.addIfPresent(jT, "resource_delivery_type", null === HT || void 0 === HT ? void 0 : HT.deliveryType), this.addIfPresent(jT, "resource_initiator_type", null === HT || void 0 === HT ? void 0 : HT.initiatorType)), this.pushMeasurement(kT, jT)
          }), {
            reportAllChanges: null === (TT = this.webVitalConfig) || void 0 === TT ? void 0 : TT.reportAllChanges
          })
        }
        measureTTFB() {
          var TT;
          ! function(TT) {
            ! function(TT) {
              let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const mT = MW(UT);
              let WT = WW("TTFB"),
                zT = hm(TT, WT, wW, UT.reportAllChanges);
              tW((() => {
                const MT = Vm();
                if (MT) {
                  const gT = MT.responseStart;
                  WT.value = Math.max(gT - om(), 0), WT.entries = [MT], zT(!0), Em((() => {
                    WT = WW("TTFB", 0, "back-forward-cache", WT.navigationId, WT.navigationInteractionId, WT.navigationURL, Nm()), zT = hm(TT, WT, wW, UT.reportAllChanges), zT(!0)
                  })), mT && zW(["soft-navigation"], (mT => {
                    mT.forEach((mT => {
                      mT.navigationId && (WT = WW("TTFB", 0, "soft-navigation", mT.navigationId, mT.interactionId, mT.name, mT.startTime), WT.entries = [mT], zT = hm(TT, WT, wW, UT.reportAllChanges), zT(!0))
                    }))
                  }), UT)
                }
              }))
            }((UT => {
              TT((TT => {
                const UT = TT.entries[0];
                let mT = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: UT
                };
                if (TT.entries.length && UT instanceof PerformanceNavigationTiming) {
                  const WT = UT.activationStart || 0,
                    zT = Math.max((UT.workerStart || UT.fetchStart || 0) - WT, 0),
                    MT = Math.max(UT.domainLookupStart - WT, 0),
                    gT = Math.max(UT.connectStart - WT, 0),
                    nT = Math.max(UT.connectEnd - WT, 0);
                  mT = {
                    waitingDuration: zT,
                    cacheDuration: MT - zT,
                    dnsDuration: gT - MT,
                    connectionDuration: nT - gT,
                    requestDuration: TT.value - nT,
                    navigationEntry: UT
                  }
                }
                return Object.assign(TT, {
                  attribution: mT
                })
              })(UT))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((TT => {
            const {
              dnsDuration: UT,
              connectionDuration: mT,
              requestDuration: WT,
              waitingDuration: zT,
              cacheDuration: MT
            } = TT.attribution, gT = this.buildInitialValues(TT);
            this.addIfPresent(gT, "dns_duration", UT), this.addIfPresent(gT, "connection_duration", mT), this.addIfPresent(gT, "request_duration", WT), this.addIfPresent(gT, "waiting_duration", zT), this.addIfPresent(gT, "cache_duration", MT);
            const nT = this.buildInitialContext(TT);
            this.pushMeasurement(gT, nT)
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
          var UT;
          const mT = null !== (UT = TU("com.grafana.faro.lastNavigationId", oT)) && void 0 !== UT ? UT : sm;
          return {
            id: TT.id,
            rating: TT.rating,
            navigation_type: TT.navigationType,
            navigation_entry_id: mT
          }
        }
        pushMeasurement(TT, UT) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: TT
          }, {
            context: UT
          })
        }
        addIfPresent(TT, UT, mT) {
          mT && (TT[UT] = mT)
        }
        addNumberIfDefined(TT, UT, mT) {
          void 0 !== mT && (TT[UT] = mT)
        }
      },
      IW = class extends Um {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = mm
        }
        initialize() {
          this.logDebug("Initializing"), new XW(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const QW = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function sW() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const UT of TT)
        if ("traceparent" === UT.name) {
          if (!QW.test(UT.description)) continue;
          const [, TT, mT] = UT.description.split("-");
          if (null != TT && null != mT) return {
            traceId: TT,
            spanId: mT
          };
          break
        }
    }

    function FW(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: mT,
        monoNow: WT
      } = UT;
      return Math.min(mT, mT - (WT - TT))
    }

    function PW(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [mT, WT] of Object.entries(UT)) {
        const UT = TT[mT];
        return null != UT && (tT(WT) ? WT.includes(UT) : UT === WT)
      }
      return !0
    }

    function VW(TT) {
      const {
        connectEnd: UT,
        connectStart: mT,
        decodedBodySize: WT,
        domainLookupEnd: zT,
        domainLookupStart: MT,
        duration: gT,
        encodedBodySize: nT,
        fetchStart: HT,
        initiatorType: kT,
        name: jT,
        nextHopProtocol: lT,
        redirectEnd: LT,
        redirectStart: pT,
        renderBlockingStatus: BT,
        requestStart: ZT,
        responseEnd: cT,
        responseStart: vT,
        responseStatus: fT,
        secureConnectionStart: qT,
        transferSize: iT,
        workerStart: bT
      } = TT;
      return {
        name: jT,
        httpHost: CW(jT),
        duration: rW(gT),
        tcpHandshakeTime: rW(UT - mT),
        dnsLookupTime: rW(zT - MT),
        tlsNegotiationTime: rW(UT - qT),
        responseStatus: rW(fT),
        redirectTime: rW(LT - pT),
        requestTime: rW(vT - ZT),
        responseTime: rW(cT - vT),
        fetchTime: rW(cT - HT),
        serviceWorkerTime: rW(bT > 0 ? HT - bT : 0),
        decodedBodySize: rW(WT),
        encodedBodySize: rW(nT),
        cacheHitStatus: function() {
          let TT = "fullLoad";
          0 === iT ? WT > 0 && (TT = "cache") : null != fT ? 304 === fT && (TT = "conditionalFetch") : nT > 0 && iT < nT && (TT = "conditionalFetch");
          return TT
        }(),
        renderBlockingStatus: rW(BT),
        protocol: lT,
        initiatorType: kT,
        visibilityState: document.visibilityState,
        ttfb: rW(vT - ZT),
        transferSize: rW(iT)
      }
    }

    function uW(TT) {
      const {
        activationStart: UT,
        domComplete: mT,
        domContentLoadedEventEnd: WT,
        domContentLoadedEventStart: zT,
        domInteractive: MT,
        fetchStart: gT,
        loadEventEnd: nT,
        loadEventStart: HT,
        responseStart: kT,
        type: jT
      } = TT, lT = function() {
        var TT;
        return null != (null === (TT = performance.timing) || void 0 === TT ? void 0 : TT.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return jU(jU({}, VW(TT)), {}, {
        pageLoadTime: rW(mT - gT),
        documentParsingTime: rW(lT ? MT - lT : null),
        domProcessingTime: rW(mT - MT),
        domContentLoadHandlerTime: rW(WT - zT),
        onLoadTime: rW(nT - HT),
        ttfb: rW(Math.max(kT - (null !== UT && void 0 !== UT ? UT : 0), 0)),
        type: jT
      })
    }

    function CW(TT) {
      try {
        return new URL(TT).host || sm
      } catch (UT) {
        return sm
      }
    }

    function rW(TT) {
      return null == TT ? sm : "number" === typeof TT ? Math.round(TT > 0 ? TT : 0).toString() : TT.toString()
    }
    const KW = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function SW(TT, UT, mT, WT, zT, MT, gT) {
      try {
        var nT = TT[MT](gT),
          HT = nT.value
      } catch (TT) {
        return void mT(TT)
      }
      nT.done ? UT(HT) : Promise.resolve(HT).then(WT, zT)
    }

    function GW(TT) {
      return function() {
        var UT = this,
          mT = arguments;
        return new Promise((function(WT, zT) {
          var MT = TT.apply(UT, mT);

          function gT(TT) {
            SW(MT, WT, zT, gT, nT, "next", TT)
          }

          function nT(TT) {
            SW(MT, WT, zT, gT, nT, "throw", TT)
          }
          gT(void 0)
        }))
      }
    }
    const NW = new qm;
    var EW = class extends Um {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = mm
      }
      initialize() {
        var TT = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let UT = !1;
        const mT = () => {
          ! function(TT) {
            if ("complete" === document.readyState) TT();
            else {
              const UT = () => {
                "complete" === document.readyState && (TT(), document.removeEventListener("readystatechange", UT))
              };
              document.addEventListener("readystatechange", UT)
            }
          }(GW((function*() {
            if (UT) return;
            const mT = TT.api.pushEvent,
              {
                faroNavigationId: WT
              } = yield function(TT) {
                let UT;
                const mT = new Promise((TT => {
                  UT = TT
                }));
                return new PerformanceObserver((mT => {
                  var WT;
                  const [zT] = mT.getEntries();
                  if (null == zT || hT(zT.name)) return;
                  const MT = zT.toJSON();
                  let gT = sW(null === MT || void 0 === MT ? void 0 : MT.serverTiming);
                  const nT = null !== (WT = TU("com.grafana.faro.lastNavigationId", oT)) && void 0 !== WT ? WT : sm,
                    HT = jU(jU({}, uW(MT)), {}, {
                      faroNavigationId: vU(),
                      faroPreviousNavigationId: nT
                    });
                  UU("com.grafana.faro.lastNavigationId", HT.faroNavigationId, oT), TT("faro.performance.navigation", HT, void 0, {
                    spanContext: gT,
                    timestampOverwriteMs: FW(MT.startTime)
                  }), UT(HT)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), mT
              }(mT);
            UT || null == WT || function(TT, UT, mT, WT) {
              const zT = WT.trackResources;
              new PerformanceObserver((WT => {
                const MT = WT.getEntries(),
                  gT = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const nT of MT) {
                  if (hT(nT.name)) continue;
                  null === mT || void 0 === mT || mT.notify({
                    type: "resource"
                  });
                  const WT = nT.toJSON();
                  let MT = sW(null === WT || void 0 === WT ? void 0 : WT.serverTiming);
                  (null == zT && PW(WT, KW) || zT) && UT("faro.performance.resource", jU(jU({}, VW(WT)), {}, {
                    faroNavigationId: TT,
                    faroResourceId: vU()
                  }), void 0, {
                    spanContext: MT,
                    timestampOverwriteMs: FW(WT.startTime, gT)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(WT, mT, NW, TT.config)
          })))
        };
        this.cancelInitialization = () => {
          UT = !0, document.removeEventListener("prerenderingchange", mT)
        }, document.prerendering ? document.addEventListener("prerenderingchange", mT, {
          once: !0
        }) : mT()
      }
      destroy() {
        var TT;
        null === (TT = this.cancelInitialization) || void 0 === TT || TT.call(this), this.cancelInitialization = void 0
      }
    };
    const hW = "data-faro-user-action-name",
      DW = hW.replace(/-name$/, "-timeout"),
      oW = 1e3;

    function AW(TT) {
      return `data-${(TT.startsWith("data-")?TT.slice(5):TT).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function RW(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KU;
      if (void 0 === TT) return UT;
      let WT = NaN;
      try {
        WT = "string" === typeof TT && "" === TT.trim() ? NaN : Number(TT)
      } catch (zT) {}
      return !Number.isFinite(WT) || WT <= 0 ? (mT(`initialActivityTimeout must be a finite number greater than zero; using ${UT} ms`), UT) : WT > 1e3 ? (mT(`initialActivityTimeout cannot exceed ${oW} ms; clamping to the maximum`), oW) : WT
    }

    function Tz(TT, UT, mT) {
      return void 0 !== TT && window.clearTimeout(TT), window.setTimeout((() => {
        UT()
      }), mT)
    }

    function Uz(TT) {
      return TT.type === fm
    }
    let mz, Wz;

    function zz() {
      return mz || (mz = new qm), Wz || (Wz = new MutationObserver(((TT, UT) => {
        mz.notify({
          type: "dom-mutation"
        })
      })), Wz.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), mz
    }
    const Mz = "fetch",
      gz = "xhr";
    let nz, Hz, kz, jz, lz = !1;

    function Lz() {
      if (nz) return nz;

      function TT(TT) {
        nz.notify({
          type: cm,
          request: TT
        })
      }

      function UT(TT) {
        nz.notify({
          type: fm,
          request: TT
        })
      }
      return nz = new qm, lz || (! function(TT) {
        let {
          onRequestEnd: UT,
          onRequestStart: mT
        } = TT;
        kz || (kz = window.fetch);
        window.fetch = function() {
          var TT, WT;
          const zT = null !== (TT = DT(arguments[0])) && void 0 !== TT ? TT : "",
            MT = hT(zT),
            gT = (null !== (WT = arguments[1]) && void 0 !== WT ? WT : {}).method,
            nT = vU();
          return MT || mT({
            url: zT,
            method: gT,
            requestId: nT,
            apiType: Mz
          }), kz.apply(this, arguments).then((TT => (MT || UT({
            url: zT,
            method: gT,
            requestId: nT,
            apiType: Mz
          }), TT))).catch((TT => {
            throw MT || UT({
              url: zT,
              method: gT,
              requestId: nT,
              apiType: Mz
            }), TT
          }))
        }
      }({
        onRequestStart: TT,
        onRequestEnd: UT
      }), function(TT) {
        let {
          onRequestStart: UT,
          onRequestEnd: mT
        } = TT;
        Hz || (Hz = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const TT = arguments[1],
            WT = hT(TT),
            zT = arguments[0],
            MT = vU();
          this.addEventListener("loadstart", (function() {
            WT || UT({
              url: TT,
              method: zT,
              requestId: MT,
              apiType: gz
            })
          })), this.addEventListener("load", (function() {
            WT || mT({
              url: TT,
              method: zT,
              requestId: MT,
              apiType: gz
            })
          })), this.addEventListener("error", (function() {
            WT || mT({
              url: TT,
              method: zT,
              requestId: MT,
              apiType: gz
            })
          })), this.addEventListener("abort", (function() {
            WT || mT({
              url: TT,
              method: zT,
              requestId: MT,
              apiType: gz
            })
          })), Hz.apply(this, arguments)
        }
      }({
        onRequestStart: TT,
        onRequestEnd: UT
      }), lz = !0), nz
    }
    let pz, Bz = !1;
    let Zz = function(TT) {
      return TT[TT.Started = 0] = "Started", TT[TT.Halted = 1] = "Halted", TT[TT.Cancelled = 2] = "Cancelled", TT[TT.Ended = 3] = "Ended", TT
    }({});
    var cz = class {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = TT, this.logDebug = UT, this.initialActivityTimeout = mT, this.http = Lz(), this.dom = zz(), this.perf = (jz || (jz = new qm), Bz || (pz = NW.subscribe((TT => {
          "resource" === TT.type && jz.notify({
            type: "resource-entry"
          })
        })), Bz = !0), jz), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new qm).merge(this.http, this.dom, this.perf).takeWhile((() => [Zz.Started, Zz.Halted].includes(this.userAction.getState()))).filter((TT => !!(this.userAction.getState() !== Zz.Halted || Uz(TT) && this.runningRequests.has(TT.request.requestId)))).subscribe((TT => {
          (function(TT) {
            return TT.type === cm
          })(TT) && this.runningRequests.set(TT.request.requestId, TT.request), Uz(TT) && this.runningRequests.delete(TT.request.requestId), Uz(TT) ? this.userAction.getState() === Zz.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((TT => [Zz.Ended, Zz.Cancelled].includes(TT))).first().subscribe((() => this.cleanup())), this.startupTid = Tz(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Zz.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Zz.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Tz(this.haltTid, (() => {
          this.userAction.getState() === Zz.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var TT, UT;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (TT = this.allMonitorsSub) || void 0 === TT || TT.unsubscribe(), null === (UT = this.stateSub) || void 0 === UT || UT.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(TT) {
        void 0 !== TT && window.clearTimeout(TT)
      }
    };

    function vz(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KU;
      var mT;
      const {
        api: WT,
        config: zT,
        internalLogger: MT
      } = TT, gT = RW(null === (mT = zT.userActionsInstrumentation) || void 0 === mT ? void 0 : mT.initialActivityTimeout, 100, UT);
      return {
        processUserEvent: function(TT) {
          var UT, mT;
          const MT = null !== (UT = null === (mT = zT.userActionsInstrumentation) || void 0 === mT ? void 0 : mT.dataAttributeName) && void 0 !== UT ? UT : hW,
            gT = TT.target;
          if (!(gT instanceof Element)) return;
          const nT = function(TT, UT) {
              let mT = TT;
              for (; mT;) {
                if (mT.hasAttribute(UT)) return mT;
                mT = mT.parentElement
              }
              return null
            }(gT, AW(MT)),
            HT = function(TT, UT) {
              if (!TT) return;
              const mT = function(TT) {
                  return AW(TT).slice(5).replace(/-(.)/g, ((TT, UT) => UT.toUpperCase()))
                }(UT),
                WT = TT.dataset;
              for (const zT in WT)
                if (zT === mT) return WT[zT]
            }(nT, MT);
          if (!nT || !HT) return;
          const kT = function(TT, UT) {
            const mT = TT.getAttribute(function(TT) {
              const UT = AW(TT);
              return UT.endsWith("-name") ? `${UT.slice(0,-5)}-timeout` : `${UT}-timeout`
            }(UT));
            return null === mT ? void 0 : Number(mT)
          }(nT, MT);
          WT.startUserAction(HT, {}, {
            triggerName: TT.type,
            initialActivityTimeout: kT
          })
        },
        processUserActionStarted: function(TT, mT) {
          const WT = TT,
            zT = RW(mT, gT, UT);
          new cz(WT, MT.debug, zT).attach()
        }
      }
    }
    const fz = "user_action_start",
      qz = {
        Normal: "normal",
        Critical: "critical"
      };
    var iz = class {
        constructor() {
          this.buffer = []
        }
        addItem(TT) {
          this.buffer.push(TT)
        }
        flushBuffer(TT) {
          if (wT(TT))
            for (const UT of this.buffer) TT(UT);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      bz = class extends qm {
        constructor(TT) {
          let {
            name: UT,
            parentId: mT,
            trigger: WT,
            transports: zT,
            attributes: MT,
            trackUserActionsExcludeItem: gT,
            importance: nT = qz.Normal,
            pushEvent: HT
          } = TT;
          super(), this.name = UT, this.attributes = MT, this.id = vU(), this.trigger = WT, this.parentId = null !== mT && void 0 !== mT ? mT : this.id, this.trackUserActionsExcludeItem = gT, this.importance = nT, this._pushEvent = HT, this._itemBuffer = new iz, this._transports = zT, this._state = 0, this._start()
        }
        addItem(TT) {
          return 0 === this._state && (this._itemBuffer.addItem(TT), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = LU(), this._startTimeMono = pU())
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
          const TT = LU(),
            UT = pU() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((TT => {
            if (function(TT, UT) {
                return (null === UT || void 0 === UT ? void 0 : UT(TT)) || "measurement" === TT.type && "web-vitals" === TT.payload.type
              }(TT, this.trackUserActionsExcludeItem)) return void this._transports.execute(TT);
            const UT = AU(AU({}, TT), {}, {
              payload: AU(AU({}, TT.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(UT)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", AU({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: TT.toString(),
            userActionDuration: UT.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, sU(this.attributes)), void 0, {
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
    const Oz = new qm;

    function ez(TT, UT) {
      return !!TT && (0 === (null === TT || void 0 === TT ? void 0 : TT.getState()) && (TT.addItem(UT), !0))
    }
    var Yz = class extends Um {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = mm
        }
        initialize() {
          const {
            processUserEvent: TT,
            processUserActionStarted: UT
          } = vz(ZT, (TT => this.logWarn(TT)));
          this._processUserEvent = TT, this._processKeydown = UT => {
            [" ", "Enter"].includes(UT.key) && TT(UT)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Oz.subscribe((TT => {
            let {
              type: mT,
              userAction: WT,
              initialActivityTimeout: zT
            } = TT;
            "user_action_start" === mT && UT(WT, zT)
          }))
        }
        destroy() {
          var TT;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (TT = this._userActionSub) || void 0 === TT || TT.unsubscribe()
        }
      },
      Jz = class extends Um {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = mm, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(TT) {
          const UT = {
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
          this.api.pushEvent("securitypolicyviolation", sU(UT))
        }
      };
    var xz = class extends qm {
      constructor(TT, UT) {
        var mT, WT, zT, MT;
        super(), this._tracking = !1, this.eventsObservable = TT, this._options = {
          inactivityMs: null !== (mT = null === UT || void 0 === UT ? void 0 : UT.inactivityMs) && void 0 !== mT ? mT : 100,
          drainTimeoutMs: null !== (WT = null === UT || void 0 === UT ? void 0 : UT.drainTimeoutMs) && void 0 !== WT ? WT : 1e4,
          isOperationStart: null !== (zT = null === UT || void 0 === UT ? void 0 : UT.isOperationStart) && void 0 !== zT ? zT : () => {},
          isOperationEnd: null !== (MT = null === UT || void 0 === UT ? void 0 : UT.isOperationEnd) && void 0 !== MT ? MT : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((TT => {
          var UT;
          this._lastEventTime = pU(), null === (UT = this._currentEvents) || void 0 === UT || UT.push(TT);
          const mT = this._options.isOperationStart(TT);
          var WT;
          mT && (null === (WT = this._activeOperations) || void 0 === WT || WT.set(mT, !0));
          const zT = this._options.isOperationEnd(TT);
          var MT;
          zT && (null === (MT = this._activeOperations) || void 0 === MT || MT.delete(zT));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = pU(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let TT;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), TT = this.hasActiveOperations() ? pU() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: TT
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = dz(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = dz(this._drainTid, (() => {
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

    function dz(TT, UT, mT) {
      return TT && clearTimeout(TT), TT = setTimeout((() => {
        UT()
      }), mT)
    }
    let wz;
    const tz = new Set,
      az = new Map;
    let yz, Xz, Iz, Qz, sz, Fz, Pz, Vz, uz = !1;
    var Cz = class extends Um {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = mm
      }
      initialize() {
        const TT = Lz(),
          UT = zz(),
          mT = function() {
            function TT(TT, UT) {
              const mT = null !== UT && void 0 !== UT ? UT : location.href;
              mT !== Xz && (yz.notify({
                type: "url-change",
                from: Xz,
                to: mT,
                trigger: TT
              }), Xz = mT)
            }
            if (yz || (yz = new qm, Xz = location.href), !uz)
              if ("navigation" in window && "NavigateEvent" in window) {
                Pz = UT => {
                  try {
                    const mT = null === UT || void 0 === UT ? void 0 : UT.destination;
                    (null === mT || void 0 === mT ? void 0 : mT.sameDocument) && "string" === typeof mT.url && TT("navigate", mT.url)
                  } catch (mT) {}
                }, window.navigation.addEventListener("navigate", Pz);
                const UT = window.NavigateEvent;
                UT && UT.prototype && "function" === typeof UT.prototype.intercept && (Vz || (Vz = UT.prototype.intercept), UT.prototype.intercept = function(UT) {
                  try {
                    const UT = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      mT = null === this || void 0 === this ? void 0 : this.destination;
                    UT && mT && !1 === mT.sameDocument && "string" === typeof mT.url && TT("navigate-intercept", mT.url)
                  } catch (mT) {}
                  return Vz.call(this, UT)
                }), uz = !0
              } else Iz || (Iz = window.history.pushState), window.history.pushState = function() {
                for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
                const zT = Iz.apply(window.history, mT);
                return TT("pushState"), zT
              }, Qz || (Qz = window.history.replaceState), window.history.replaceState = function() {
                for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
                const zT = Qz.apply(window.history, mT);
                return TT("replaceState"), zT
              }, sz = () => TT("popstate"), Fz = () => TT("hashchange"), window.addEventListener("popstate", sz), window.addEventListener("hashchange", Fz), uz = !0;
            return yz
          }(),
          WT = (zT = ["pointerdown", "keydown"], wz || (wz = new qm), zT.forEach((TT => {
            if (!tz.has(TT)) {
              const UT = () => {
                wz.notify({
                  type: "interaction",
                  name: TT
                })
              };
              window.addEventListener(TT, UT), tz.add(TT), az.set(TT, UT)
            }
          })), wz);
        var zT;
        const MT = new xz((new qm).merge(TT, UT, mT), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: TT => function(TT) {
            return TT.type === cm
          }(TT) ? TT.request.requestId : void 0,
          isOperationEnd: TT => function(TT) {
            return TT.type === fm
          }(TT) ? TT.request.requestId : void 0
        });
        MT.filter((TT => "tracking-ended" === TT.message)).subscribe((TT => {
          var UT, mT;
          if ((null === (UT = TT.events) || void 0 === UT ? void 0 : UT.some((TT => "url-change" === TT.type))) && (null === (mT = TT.events) || void 0 === mT ? void 0 : mT.some((TT => "dom-mutation" === TT.type)))) {
            var WT;
            const UT = null === (WT = TT.events) || void 0 === WT ? void 0 : WT.find((TT => "url-change" === TT.type));
            ZT.api.pushEvent("faro.navigation", {
              fromUrl: null === UT || void 0 === UT ? void 0 : UT.from,
              toUrl: null === UT || void 0 === UT ? void 0 : UT.to,
              sameDocument: String(!0),
              duration: TT.duration
            })
          }
        })), WT.subscribe((() => {
          MT.startTracking()
        }))
      }
    };

    function rz() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const UT = [new Yz, new Qm, new IW, new Wm, new Fm, new Cz];
      return !1 !== TT.enablePerformanceInstrumentation && UT.unshift(new EW), !1 !== TT.enableContentSecurityPolicyInstrumentation && UT.push(new Jz), !1 !== TT.captureConsole && UT.push(new Xm), UT
    }
    var Kz = mT(6770);
    let Sz, Gz;

    function Nz() {
      const TT = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Sz === TT && Gz || (Gz = new Kz.UAParser(TT).getResult(), Sz = TT), Gz
    }
    const Ez = () => {
        const {
          browser: TT,
          os: UT,
          ua: mT
        } = Nz(), {
          name: WT,
          version: zT
        } = TT, {
          name: MT,
          version: gT
        } = UT, nT = navigator.language, HT = mT.includes("Mobi"), kT = function() {
          if (!WT || !zT) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== WT && void 0 !== WT ? WT : sm,
            version: null !== zT && void 0 !== zT ? zT : sm,
            os: `${null!==MT&&void 0!==MT?MT:sm} ${null!==gT&&void 0!==gT?gT:sm}`,
            userAgent: null !== mT && void 0 !== mT ? mT : sm,
            language: null !== nT && void 0 !== nT ? nT : sm,
            mobile: HT,
            brands: null !== kT && void 0 !== kT ? kT : sm,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      hz = () => {
        const {
          name: TT,
          version: UT
        } = Nz().os;
        if (!TT && !UT) return {};
        const mT = {};
        return TT && (mT.name = TT), UT && (mT.version = UT), {
          os: mT
        }
      };

    function Dz(TT) {
      var UT, mT, WT;
      return {
        id: null !== (UT = null === (mT = ZT.config) || void 0 === mT || null === (mT = mT.sessionTracking) || void 0 === mT || null === (WT = mT.generateSessionId) || void 0 === WT ? void 0 : WT.call(mT)) && void 0 !== UT ? UT : vU(),
        attributes: TT
      }
    }
    const oz = () => ({
      sdk: {
        name: "faro-web",
        version: mm
      }
    });
    var Az = class extends Tm {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Rz = function(TT) {
      return TT.EXCEPTION = "exception", TT.LOG = "log", TT.MEASUREMENT = "measurement", TT.TRACE = "trace", TT.EVENT = "event", TT
    }({});
    const TM = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function UM(TT, UT) {
      var mT, WT;
      if (void 0 === UT) return TT;
      if (void 0 === TT) return {
        resourceSpans: UT
      };
      const zT = null === (mT = TT.resourceSpans) || void 0 === mT ? void 0 : mT[0];
      if (void 0 === zT) return TT;
      const MT = (null === zT || void 0 === zT ? void 0 : zT.scopeSpans) || [],
        gT = (null === UT || void 0 === UT || null === (WT = UT[0]) || void 0 === WT ? void 0 : WT.scopeSpans) || [];
      return AU(AU({}, TT), {}, {
        resourceSpans: [AU(AU({}, zT), {}, {
          scopeSpans: [...MT, ...gT]
        })]
      })
    }

    function mM(TT) {
      let UT = {
        meta: {}
      };
      return void 0 !== TT[0] && (UT.meta = TT[0].meta), TT.forEach((TT => {
        switch (TT.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const mT = TM[TT.type],
              WT = UT[mT];
            UT = AU(AU({}, UT), {}, {
              [mT]: void 0 === WT ? [TT.payload] : [...WT, TT.payload]
            });
            break
          }
          case "trace":
            UT = AU(AU({}, UT), {}, {
              traces: UM(UT.traces, TT.payload.resourceSpans)
            })
        }
      })), UT
    }
    var WM = class extends Az {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-console", this.version = mm
      }
      send(TT) {
        var UT;
        return this.unpatchedConsole[null !== (UT = this.options.level) && void 0 !== UT ? UT : im.DEBUG]("New event", mM([TT]))
      }
    };
    const zM = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      MM = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      gM = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      nM = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      HM = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      kM = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function jM(TT) {
      let {
        weekday: UT,
        day: mT,
        month: WT,
        year: zT,
        hour: MT,
        minute: gT,
        second: nT
      } = TT;
      if (zT < 1900 || mT < 1 || MT > 23 || gT > 59 || nT > 60) return;
      const HT = 60 === nT,
        kT = new Date(0);
      return kT.setUTCFullYear(zT, WT, mT), kT.setUTCHours(MT, gT, HT ? 59 : nT, 0), kT.getUTCDay() === UT && kT.getUTCDate() === mT && kT.getUTCMonth() === WT && kT.getUTCFullYear() === zT && kT.getUTCHours() === MT && kT.getUTCMinutes() === gT && kT.getUTCSeconds() === (HT ? 59 : nT) ? kT.getTime() + (HT ? 1e3 : 0) : void 0
    }
    var lM = class {
      constructor(TT) {
        this.options = TT, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var TT = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const UT = this.sequence++;
        let mT = !1;
        return {
          deliver: function() {
            var mT = GW((function*(mT) {
              const WT = TT.options.getNow();
              let zT, MT = 0;
              for (;;) {
                var gT, nT, HT;
                const kT = TT.options.retry.maxAttempts - MT,
                  jT = yield TT.runAttempt((() => mT(kT, TT.unloading)), MT > 0);
                if (MT += jT.attemptsMade, "success" === jT.kind) return {
                  kind: "success",
                  attempts: MT,
                  elapsedTimeMs: TT.options.getNow() - WT
                };
                if (zT = jT.failure, "terminal" === jT.kind || TT.unloading) return {
                  kind: "terminal",
                  attempts: MT,
                  elapsedTimeMs: TT.options.getNow() - WT,
                  failure: zT
                };
                if (MT >= TT.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: MT,
                  elapsedTimeMs: TT.options.getNow() - WT,
                  failure: zT,
                  reason: "retries-exhausted"
                };
                if (null != jT.retryAfterMs && jT.retryAfterMs > TT.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: MT,
                  elapsedTimeMs: TT.options.getNow() - WT,
                  failure: zT,
                  reason: "retry-after-too-long"
                };
                const lT = Math.min(null !== (gT = jT.retryAfterMs) && void 0 !== gT ? gT : TT.options.retry.initialBackoffMs * Math.pow(TT.options.retry.backoffMultiplier, MT - 1), TT.options.retry.maxBackoffMs);
                if (null === (nT = (HT = TT.options).onRetry) || void 0 === nT || nT.call(HT, lT, MT + 1), yield TT.waitForTurn(UT, lT)) {
                  const UT = TT.options.retry.maxAttempts - MT,
                    zT = yield TT.runAttempt((() => mT(UT, !0)));
                  return MT += zT.attemptsMade, {
                    kind: "success" === zT.kind ? "success" : "terminal",
                    attempts: MT,
                    elapsedTimeMs: TT.options.getNow() - WT,
                    failure: "success" === zT.kind ? void 0 : zT.failure
                  }
                }
              }
            }));
            return function(TT) {
              return mT.apply(this, arguments)
            }
          }(),
          release: () => {
            mT || (mT = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const TT = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const UT of TT) UT.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((mT, WT) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const UT = () => {
                this.inProgress--, this.runNextAttempt()
              };
              TT().then((TT => {
                UT(), mT(TT)
              }), (TT => {
                UT(), WT(TT)
              }))
            },
            isRedelivery: UT
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const TT = this.options.getNow(),
            UT = this.attemptQueue.findIndex((UT => {
              let {
                isRedelivery: mT
              } = UT;
              return this.unloading || !mT || TT >= this.nextSendAt
            }));
          if (UT < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - TT)));
          const [mT] = this.attemptQueue.splice(UT, 1);
          mT.isRedelivery && !this.unloading && (this.nextSendAt = TT + 1), mT.run()
        }
      }
      waitForTurn(TT, UT) {
        const mT = Math.min(UT * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((UT => {
          this.waiting.push({
            sequence: TT,
            readyAt: this.options.getNow() + mT,
            resolve: UT
          }), this.waiting.sort(((TT, UT) => TT.readyAt === UT.readyAt ? TT.sequence - UT.sequence : TT.readyAt - UT.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const TT = this.waiting[0],
          UT = TT.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const UT = this.waiting.indexOf(TT);
          UT >= 0 && this.waiting.splice(UT, 1), TT.resolve(!1), this.scheduleNext()
        }), Math.max(0, UT - this.options.getNow()))
      }
    };

    function LM(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if ({}.hasOwnProperty.call(TT, WT)) {
            if (UT.includes(WT)) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.includes(mT) || {}.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function pM(TT) {
      const {
        size: UT,
        concurrency: mT
      } = TT, WT = [];
      let zT = 0;
      const MT = () => {
        if (zT < mT && WT.length) {
          const {
            producer: TT,
            resolve: UT,
            reject: mT
          } = WT.shift();
          zT++, TT().then((TT => {
            zT--, MT(), UT(TT)
          }), (TT => {
            zT--, MT(), mT(TT)
          }))
        }
      };
      return {
        add: TT => {
          if (WT.length + zT >= UT) throw new Error("Task buffer full");
          return new Promise(((UT, mT) => {
            WT.push({
              producer: TT,
              resolve: UT,
              reject: mT
            }), MT()
          }))
        }
      }
    }
    const BM = ["headers"],
      ZM = ["keepalive", "signal"],
      cM = new Set([408, 425, 429, 500, 502, 503, 504]),
      vM = new Set([429, 503]);
    let fM = 0,
      qM = 0;
    var iM = class extends Error {};
    var bM = class extends Az {
      constructor(TT) {
        var UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT;
        super(), this.options = TT, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = mm, this.pendingCustomSends = 0, this.getNow = null !== (UT = TT.getNow) && void 0 !== UT ? UT : Date.now, this.requestTimeoutMs = null !== (mT = TT.requestTimeoutMs) && void 0 !== mT ? mT : 1e4, this.compressionEnabled = null !== (WT = TT.requestCompression) && void 0 !== WT && WT && "undefined" !== typeof CompressionStream, TT.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new lM({
          bufferSize: null !== (zT = TT.bufferSize) && void 0 !== zT ? zT : 30,
          concurrency: null !== (MT = TT.concurrency) && void 0 !== MT ? MT : 5,
          retry: {
            maxAttempts: null !== (gT = null === (nT = TT.retry) || void 0 === nT ? void 0 : nT.maxAttempts) && void 0 !== gT ? gT : 3,
            initialBackoffMs: null !== (HT = null !== (kT = null === (jT = TT.retry) || void 0 === jT ? void 0 : jT.initialBackoffMs) && void 0 !== kT ? kT : TT.defaultRateLimitBackoffMs) && void 0 !== HT ? HT : 1e3,
            maxBackoffMs: null !== (lT = null === (LT = TT.retry) || void 0 === LT ? void 0 : LT.maxBackoffMs) && void 0 !== lT ? lT : 3e4,
            backoffMultiplier: null !== (pT = null === (BT = TT.retry) || void 0 === BT ? void 0 : BT.backoffMultiplier) && void 0 !== pT ? pT : 2
          },
          getNow: this.getNow,
          getRandom: null !== (ZT = TT.getRandom) && void 0 !== ZT ? ZT : Math.random,
          onRetry: (TT, UT) => {
            this.logDebug(`Retrying failed request after ${TT}ms. Attempt ${UT}.`)
          }
        }), this.customPromiseBuffer = pM({
          size: null !== (cT = TT.bufferSize) && void 0 !== cT ? cT : 30,
          concurrency: null !== (vT = TT.concurrency) && void 0 !== vT ? vT : 5
        }), this.defaultPromiseBuffer = {
          add: TT => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(TT);
            const UT = this.deliveryQueue.reserve();
            if (!UT) throw new Error("Task buffer full");
            return this.runBufferedTask(UT, TT)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (TT => {
          TT.persisted && this.deliveryQueue.resume()
        })))
      }
      send(TT) {
        var UT = this;
        return GW((function*() {
          const mT = UT.promiseBuffer;
          if (mT !== UT.defaultPromiseBuffer || mT.add !== UT.defaultBufferAdd) {
            UT.pendingCustomSends++;
            try {
              yield mT.add((() => UT.deliver(TT)))
            } catch (WT) {
              UT.logError("Permanent delivery failure", {
                error: WT,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              UT.pendingCustomSends--
            }
          } else yield UT.deliver(TT)
        }))()
      }
      runBufferedTask(TT, UT) {
        return GW((function*() {
          let mT;
          try {
            return yield TT.deliver(GW((function*() {
              return mT = yield UT(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), mT
          } finally {
            TT.release()
          }
        }))()
      }
      deliver(TT) {
        var UT = this;
        return GW((function*() {
          const mT = UT.deliveryQueue.reserve();
          if (mT) try {
            const WT = yield UT.prepareRequest(TT), zT = yield mT.deliver(((TT, mT) => UT.performAttempt(WT, TT, mT)));
            "terminal" === zT.kind && UT.logError("retries-exhausted" === zT.reason ? "Delivery retries exhausted" : "Permanent delivery failure", jU(jU({}, zT.failure), {}, {
              reason: zT.reason,
              attempts: zT.attempts,
              elapsedTimeMs: zT.elapsedTimeMs
            }))
          } catch (WT) {
            UT.logError("Permanent delivery failure", {
              error: WT,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            mT.release()
          } else UT.logError("Permanent delivery failure", {
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
        var UT = this;
        return GW((function*() {
          var mT, WT;
          const zT = mM(TT),
            MT = null === (mT = zT.meta.session) || void 0 === mT ? void 0 : mT.id,
            gT = JSON.stringify(zT),
            nT = null !== (WT = UT.options.requestOptions) && void 0 !== WT ? WT : {},
            {
              headers: HT = {}
            } = nT,
            kT = LM(nT, BM),
            {
              keepalive: jT,
              signal: lT
            } = kT,
            LT = LM(kT, ZM),
            pT = {};
          for (const [TT, UT] of Object.entries(HT)) pT[TT] = "function" === typeof UT ? yield UT(): UT;
          let BT = gT,
            ZT = function(TT) {
              return "undefined" === typeof TextEncoder ? TT.length : (new TextEncoder).encode(TT).byteLength
            }(gT);
          const cT = {};
          return UT.compressionEnabled && (BT = yield UT.compress(gT), ZT = BT.size, cT["Content-Encoding"] = "gzip"), {
            bodySize: ZT,
            sessionId: MT,
            requestInit: jU({
              method: "POST",
              headers: jU(jU(jU(jU(jU({
                "Content-Type": "application/json"
              }, cT), pT), UT.options.apiKey ? {
                "x-api-key": UT.options.apiKey
              } : {}), MT ? {
                "x-faro-session-id": MT
              } : {}), {}, {
                "Idempotency-Key": vU(20)
              }),
              body: BT
            }, LT)
          }
        }))()
      }
      performAttempt(TT, UT, mT) {
        var WT = this;
        return GW((function*() {
          var zT;
          const MT = null === (zT = WT.options.requestOptions) || void 0 === zT ? void 0 : zT.signal;
          if (null === MT || void 0 === MT ? void 0 : MT.aborted) return {
            kind: "terminal",
            failure: {
              error: MT.reason
            },
            attemptsMade: 0
          };
          let gT = 0;
          try {
            var nT;
            const zT = yield WT.fetchWithKeepaliveFallback(TT.requestInit, TT.bodySize, !!mT || (null === (nT = WT.options.requestOptions) || void 0 === nT ? void 0 : nT.keepalive), UT, (() => gT++));
            if (WT.handleResponse(zT, TT.sessionId), zT.status >= 200 && zT.status < 300) return {
              kind: "success",
              attemptsMade: gT
            };
            const MT = {
              status: zT.status
            };
            return !cM.has(zT.status) || mT ? {
              kind: "terminal",
              failure: MT,
              attemptsMade: gT
            } : {
              kind: "retry",
              failure: MT,
              attemptsMade: gT,
              retryAfterMs: vM.has(zT.status) ? WT.getRetryAfterDelayMs(zT) : void 0
            }
          } catch (HT) {
            const TT = {
              error: HT
            };
            return (null === MT || void 0 === MT ? void 0 : MT.aborted) || !WT.isFetchNetworkError(HT) || mT ? {
              kind: "terminal",
              failure: TT,
              attemptsMade: gT
            } : {
              kind: "retry",
              failure: TT,
              attemptsMade: gT
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(TT, UT, mT, WT, zT) {
        var MT = this;
        return GW((function*() {
          const gT = MT.getNow(),
            nT = MT.reserveKeepalive(UT, mT);
          try {
            return yield MT.fetchWithTimeout(jU(jU({}, TT), {}, {
              keepalive: nT.keepalive
            }), MT.requestTimeoutMs, zT)
          } catch (kT) {
            var HT;
            if (nT.keepalive && WT > 1 && MT.isFetchNetworkError(kT) && !(kT instanceof iM) && !(null === (HT = MT.options.requestOptions) || void 0 === HT || null === (HT = HT.signal) || void 0 === HT ? void 0 : HT.aborted)) {
              MT.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const UT = MT.requestTimeoutMs - (MT.getNow() - gT);
              return MT.fetchWithTimeout(jU(jU({}, TT), {}, {
                keepalive: !1
              }), UT, zT)
            }
            throw kT
          } finally {
            nT.release()
          }
        }))()
      }
      fetchWithTimeout(TT, UT, mT) {
        var WT = this;
        return GW((function*() {
          var zT;
          const MT = null === (zT = WT.options.requestOptions) || void 0 === zT ? void 0 : zT.signal;
          if (WT.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return mT(), fetch(WT.options.url, jU(jU({}, TT), {}, {
            signal: MT
          }));
          if (UT <= 0) throw new iM("Request timed out");
          const gT = new AbortController,
            nT = () => gT.abort(null === MT || void 0 === MT ? void 0 : MT.reason);
          null === MT || void 0 === MT || MT.addEventListener("abort", nT, {
            once: !0
          });
          let HT = !1;
          const kT = setTimeout((() => {
            HT = !0, gT.abort()
          }), UT);
          try {
            return mT(), yield fetch(WT.options.url, jU(jU({}, TT), {}, {
              signal: gT.signal
            }))
          } catch (jT) {
            if (HT && !(null === MT || void 0 === MT ? void 0 : MT.aborted)) throw new iM("Request timed out");
            throw jT
          } finally {
            clearTimeout(kT), null === MT || void 0 === MT || MT.removeEventListener("abort", nT)
          }
        }))()
      }
      getRetryAfterDelayMs(TT) {
        const UT = TT.headers.get("Retry-After");
        if (!UT) return;
        if (/^\d+$/.test(UT)) {
          const TT = 1e3 * Number(UT);
          return Number.isFinite(TT) ? TT : Number.POSITIVE_INFINITY
        }
        const mT = this.getNow(),
          WT = function(TT, UT) {
            const mT = zM.exec(TT);
            if (mT) {
              const [, TT, UT, WT, zT, MT, gT, nT] = mT;
              return jM({
                weekday: nM.indexOf(TT),
                day: Number(UT),
                month: kM.indexOf(WT),
                year: Number(zT),
                hour: Number(MT),
                minute: Number(gT),
                second: Number(nT)
              })
            }
            const WT = MM.exec(TT);
            if (WT) {
              const [, TT, mT, gT, nT, HT, kT, jT] = WT, lT = new Date(UT);
              if (Number.isNaN(lT.getTime())) return;
              const LT = lT.getUTCFullYear();
              let pT = 100 * Math.floor(LT / 100) + Number(nT);
              pT < LT && (pT += 100);
              const BT = kM.indexOf(gT),
                ZT = {
                  month: BT,
                  day: Number(mT),
                  hour: Number(HT),
                  minute: Number(kT),
                  second: Number(jT),
                  millisecond: 0
                },
                cT = {
                  month: lT.getUTCMonth(),
                  day: lT.getUTCDate(),
                  hour: lT.getUTCHours(),
                  minute: lT.getUTCMinutes(),
                  second: lT.getUTCSeconds(),
                  millisecond: lT.getUTCMilliseconds()
                };
              return (pT > LT + 50 || pT === LT + 50 && (MT = cT, ((zT = ZT).month - MT.month || zT.day - MT.day || zT.hour - MT.hour || zT.minute - MT.minute || zT.second - MT.second || zT.millisecond - MT.millisecond) > 0)) && (pT -= 100), jM({
                weekday: HM.indexOf(TT),
                day: Number(mT),
                month: BT,
                year: pT,
                hour: Number(HT),
                minute: Number(kT),
                second: Number(jT)
              })
            }
            var zT, MT;
            const gT = gM.exec(TT);
            if (!gT) return;
            const [, nT, HT, kT, jT, lT, LT, pT, BT] = gT;
            return jM({
              weekday: nM.indexOf(nT),
              day: Number(null !== kT && void 0 !== kT ? kT : jT),
              month: kM.indexOf(HT),
              year: Number(BT),
              hour: Number(lT),
              minute: Number(LT),
              second: Number(pT)
            })
          }(UT, mT);
        return null == WT ? void 0 : Math.max(0, WT - mT)
      }
      reserveKeepalive(TT, UT) {
        if (!1 === UT || TT > 6e4 || fM + TT > 6e4 || qM >= 9) return {
          keepalive: !1,
          release: KU
        };
        fM += TT, qM++;
        let mT = !1;
        return {
          keepalive: !0,
          release: () => {
            mT || (mT = !0, fM -= TT, qM--)
          }
        }
      }
      handleResponse(TT, UT) {
        202 === TT.status && "invalid" === TT.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), UT), TT.text().catch(KU)
      }
      isFetchNetworkError(TT) {
        return TT instanceof TypeError || TT instanceof iM || TT instanceof DOMException && "AbortError" === TT.name
      }
      compress(TT) {
        return GW((function*() {
          const UT = [],
            mT = new ReadableStream({
              start(UT) {
                UT.enqueue((new TextEncoder).encode(TT)), UT.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: TT,
              value: WT
            } = yield mT.read();
            if (TT) return new Blob(UT);
            UT.push(WT)
          }
        }))()
      }
      extendFaroSession(TT, UT, mT) {
        var WT, zT;
        const MT = TT.sessionTracking;
        if (!(null === MT || void 0 === MT ? void 0 : MT.enabled)) return void UT("Session expired.");
        const {
          fetchUserSession: gT,
          storeUserSession: nT
        } = rU(MT), HT = null === (WT = this.metas.value.session) || void 0 === WT ? void 0 : WT.id, kT = null === (zT = gT()) || void 0 === zT ? void 0 : zT.sessionId;
        mT && mT === HT && mT === kT ? (tU({
          fetchUserSession: gT,
          storeUserSession: nT
        })({
          forceSessionExtend: !0
        }), UT("Session expired; created new session.")) : UT("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const OM = () => {
      const TT = window.k6;
      return {
        k6: jU({
          isK6Browser: !0
        }, (null === TT || void 0 === TT ? void 0 : TT.testRunId) && {
          testRunId: null === TT || void 0 === TT ? void 0 : TT.testRunId
        })
      }
    };
    let eM, YM;

    function JM() {
      let {
        generatePageId: TT,
        initialPageMeta: UT
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const mT = location.href;
        return wT(TT) && eM !== mT && (eM = mT, YM = TT(location)), {
          page: jU(jU({
            url: mT
          }, YM ? {
            id: YM
          } : {}), UT)
        }
      }
    }

    function xM() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RU,
        UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const mT = GU;
      return UT > 0 && (mT.error = UT >= 1 ? function() {
        for (var UT = arguments.length, WT = new Array(UT), zT = 0; zT < UT; zT++) WT[zT] = arguments[zT];
        TT.error(`${mT.prefix}\n`, ...WT)
      } : KU, mT.warn = UT >= 2 ? function() {
        for (var UT = arguments.length, WT = new Array(UT), zT = 0; zT < UT; zT++) WT[zT] = arguments[zT];
        TT.warn(`${mT.prefix}\n`, ...WT)
      } : KU, mT.info = UT >= 3 ? function() {
        for (var UT = arguments.length, WT = new Array(UT), zT = 0; zT < UT; zT++) WT[zT] = arguments[zT];
        TT.info(`${mT.prefix}\n`, ...WT)
      } : KU, mT.debug = UT >= 4 ? function() {
        for (var UT = arguments.length, WT = new Array(UT), zT = 0; zT < UT; zT++) WT[zT] = arguments[zT];
        TT.debug(`${mT.prefix}\n`, ...WT)
      } : KU), mT
    }
    const dM = "faro",
      wM = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      tM = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function aM(TT) {
      var UT, mT, zT, MT, gT, nT;
      const HT = [],
        jT = xM(TT.unpatchedConsole, TT.internalLoggerLevel);
      TT.transports ? ((TT.url || TT.apiKey) && jT.error('if "transports" is defined, "url" and "apiKey" should not be defined'), HT.push(...TT.transports)) : TT.url ? HT.push(new bM({
        url: TT.url,
        apiKey: TT.apiKey,
        requestCompression: TT.requestCompression
      })) : jT.error('either "url" or "transports" must be defined');
      const {
        dedupe: lT = !0,
        eventDomain: LT = WT,
        globalObjectKey: pT = dM,
        instrumentations: BT = rz(),
        internalLoggerLevel: ZT = NU,
        isolate: cT = !1,
        logArgsSerializer: vT = ym,
        metas: fT = XM(TT),
        paused: qT = !1,
        preventGlobalExposure: iT = !1,
        unpatchedConsole: bT = RU,
        url: OT,
        experimental: eT
      } = TT, YT = LM(TT, tM), JT = null !== (UT = null === eT || void 0 === eT ? void 0 : eT.trackNavigation) && void 0 !== UT && UT, xT = {
        dataAttributeName: AW(null !== (mT = null === (zT = TT.userActionsInstrumentation) || void 0 === zT ? void 0 : zT.dataAttributeName) && void 0 !== mT ? mT : hW),
        excludeItem: null === (MT = TT.userActionsInstrumentation) || void 0 === MT ? void 0 : MT.excludeItem,
        initialActivityTimeout: RW(null === (gT = TT.userActionsInstrumentation) || void 0 === gT ? void 0 : gT.initialActivityTimeout, 100, (TT => jT.warn(TT)))
      };
      return jU(jU({}, YT), {}, {
        batching: jU(jU({}, wM), TT.batching),
        dedupe: lT,
        globalObjectKey: pT,
        instrumentations: yM(BT, TT),
        internalLoggerLevel: ZT,
        isolate: cT,
        logArgsSerializer: vT,
        metas: fT,
        parseStacktrace: Zm,
        paused: qT,
        preventGlobalExposure: iT,
        transports: HT,
        unpatchedConsole: bT,
        eventDomain: LT,
        ignoreUrls: [...null !== (nT = TT.ignoreUrls) && void 0 !== nT ? nT : [], ...OT ? [OT] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: jU(jU(jU({}, kT), TT.sessionTracking), IM({
          trackGeolocation: TT.trackGeolocation,
          sessionTracking: TT.sessionTracking
        })),
        userActionsInstrumentation: xT,
        experimental: {
          trackNavigation: JT
        }
      })
    }

    function yM(TT, UT) {
      let {
        experimental: mT
      } = UT;
      var WT;
      const zT = null !== (WT = null === mT || void 0 === mT ? void 0 : mT.trackNavigation) && void 0 !== WT && WT;
      return TT.filter((TT => !("@grafana/faro-web-sdk:instrumentation-navigation" === TT.name && !zT)))
    }

    function XM(TT) {
      var UT, mT, WT;
      const {
        page: zT,
        generatePageId: MT
      } = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.pageTracking) && void 0 !== UT ? UT : {}, gT = [Ez, hz, JM({
        generatePageId: MT,
        initialPageMeta: zT
      }), ...null !== (mT = TT.metas) && void 0 !== mT ? mT : [], oz];
      return dT(null === (WT = window) || void 0 === WT ? void 0 : WT.k6) ? [...gT, OM] : gT
    }

    function IM(TT) {
      let {
        trackGeolocation: UT,
        sessionTracking: mT
      } = TT;
      var WT;
      const zT = {};
      return JT(UT) && (zT.geoLocationTrackingEnabled = UT), NT(zT) ? {} : {
        session: jU(jU({}, null !== (WT = null === mT || void 0 === mT ? void 0 : mT.session) && void 0 !== WT ? WT : {}), {}, {
          overrides: zT
        })
      }
    }
    const QM = new WeakSet;

    function sM(TT) {
      return QM.add(TT), TT
    }

    function FM(TT, UT) {
      if (TT.capture) return sM(TT.capture(UT));
      const mT = sM(TT.value);
      return null === UT || void 0 === UT || UT(), mT
    }

    function PM(TT) {
      const UT = `__faroBundleId_${TT}`,
        mT = null === jT || void 0 === jT ? void 0 : jT[UT];
      if ("string" === typeof mT && "" !== mT) return mT;
      const WT = "undefined" !== typeof window ? window[UT] : void 0;
      return "string" === typeof WT && "" !== WT ? WT : void 0
    }

    function VM(TT) {
      var UT, mT;
      const WT = TT.config.app.name,
        zT = WT ? function(TT) {
          return null === jT || void 0 === jT ? void 0 : jT[`__faroGitHash_${TT}`]
        }(WT) : void 0,
        MT = {
          sdk: {
            version: mm,
            name: "faro"
          },
          app: AU({
            bundleId: WT && PM(WT)
          }, void 0 !== zT ? {
            gitHash: zT
          } : {})
        },
        gT = null === (UT = TT.config.sessionTracking) || void 0 === UT ? void 0 : UT.session;
      gT && TT.api.setSession(gT), TT.config.app && (MT.app = AU(AU({}, TT.config.app), MT.app)), TT.config.user && (MT.user = TT.config.user), TT.config.view && (MT.view = TT.config.view), TT.metas.add(MT, ...null !== (mT = TT.config.metas) && void 0 !== mT ? mT : [])
    }
    var uM = class {
      constructor(TT, UT) {
        var mT, WT;
        this.signalBuffer = [], this.itemLimit = null !== (mT = null === UT || void 0 === UT ? void 0 : UT.itemLimit) && void 0 !== mT ? mT : 50, this.sendTimeout = null !== (WT = null === UT || void 0 === UT ? void 0 : UT.sendTimeout) && void 0 !== WT ? WT : 250, this.paused = (null === UT || void 0 === UT ? void 0 : UT.paused) || !1, this.sendFn = TT, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const UT = new Map;
        return TT.forEach((TT => {
          const mT = JSON.stringify(TT.meta);
          let WT = UT.get(mT);
          WT = void 0 === WT ? [TT] : [...WT, TT], UT.set(mT, WT)
        })), Array.from(UT.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const TT = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(TT).forEach(this.sendFn)
        } catch (UT) {
          throw this.signalBuffer = [...TT, ...this.signalBuffer], this.trimBufferToLimit(), UT
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function CM(TT, UT, mT, WT) {
      var zT;
      UT.debug("Initializing transports");
      const MT = [];
      let gT = [];
      const nT = TT => {
        let UT = TT;
        for (const WT of gT) {
          const TT = UT.map(WT).filter(Boolean);
          if (0 === TT.length) return [];
          UT = rM(TT, mT)
        }
        return UT
      };
      let HT;
      (null === (zT = mT.batching) || void 0 === zT ? void 0 : zT.enabled) && (HT = new uM((TT => {
        const mT = nT(TT);
        if (0 !== mT.length)
          for (const WT of MT) UT.debug(`Transporting item using ${WT.name}\n`, mT), WT.isBatched() && WT.send(mT)
      }), {
        sendTimeout: mT.batching.sendTimeout,
        itemLimit: mT.batching.itemLimit,
        paused: mT.paused
      }));
      return {
        add: function() {
          UT.debug("Adding transports");
          for (var zT = arguments.length, gT = new Array(zT), nT = 0; nT < zT; nT++) gT[nT] = arguments[nT];
          gT.forEach((zT => {
            UT.debug(`Adding "${zT.name}" transport`), MT.some((TT => TT === zT)) ? UT.warn(`Transport ${zT.name} is already added`) : (zT.unpatchedConsole = TT, zT.internalLogger = UT, zT.config = mT, zT.metas = WT, MT.push(zT))
          }))
        },
        addBeforeSendHooks: function() {
          UT.debug("Adding beforeSendHooks\n", gT);
          for (var TT = arguments.length, mT = new Array(TT), WT = 0; WT < TT; WT++) mT[WT] = arguments[WT];
          mT.forEach((TT => {
            TT && gT.push(TT)
          }))
        },
        getBeforeSendHooks: () => [...gT],
        execute: TT => {
          var zT;
          if (!mT.paused && uU(WT).shouldCapture()) {
            if (lT = TT.meta, !QM.has(lT)) {
              var gT, kT, jT;
              const UT = null === (gT = WT.value.session) || void 0 === gT ? void 0 : gT.id,
                zT = FM(WT);
              if (mT.paused) return;
              const MT = AU({}, TT.meta);
              (null === (kT = MT.session) || void 0 === kT ? void 0 : kT.id) === UT && (null === (jT = zT.session) || void 0 === jT ? void 0 : jT.id) !== UT && (void 0 === zT.session ? delete MT.session : MT.session = zT.session), TT = AU(AU({}, TT), {}, {
                meta: sM(MT)
              })
            }
            var lT;
            (null === (zT = mT.batching) || void 0 === zT ? void 0 : zT.enabled) && (null === HT || void 0 === HT || HT.addItem(TT)), (TT => {
              var WT;
              if ((null === (WT = mT.batching) || void 0 === WT ? void 0 : WT.enabled) && MT.every((TT => TT.isBatched()))) return;
              const [zT] = nT([TT]);
              if (void 0 !== zT)
                for (const nT of MT) {
                  var gT;
                  UT.debug(`Transporting item using ${nT.name}\n`, zT), nT.isBatched() ? (null === (gT = mT.batching) || void 0 === gT ? void 0 : gT.enabled) || nT.send([zT]) : nT.send(zT)
                }
            })(TT)
          }
        },
        isPaused: () => mT.paused,
        pause: () => {
          UT.debug("Pausing transports"), null === HT || void 0 === HT || HT.pause(), mT.paused = !0
        },
        remove: function() {
          UT.debug("Removing transports");
          for (var TT = arguments.length, mT = new Array(TT), WT = 0; WT < TT; WT++) mT[WT] = arguments[WT];
          mT.forEach((TT => {
            UT.debug(`Removing "${TT.name}" transport`);
            const mT = MT.indexOf(TT); - 1 !== mT ? MT.splice(mT, 1) : UT.warn(`Transport "${TT.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var TT = arguments.length, mT = new Array(TT), WT = 0; WT < TT; WT++) mT[WT] = arguments[WT];
          UT.debug("Removing beforeSendHooks"), gT = gT.filter((TT => !mT.includes(TT)))
        },
        get transports() {
          return [...MT]
        },
        unpause: () => {
          UT.debug("Unpausing transports"), null === HT || void 0 === HT || HT.start(), mT.paused = !1
        }
      }
    }

    function rM(TT, UT) {
      if (UT.preserveOriginalError)
        for (const mT of TT) "exception" === mT.type && delete mT.payload.originalError;
      return TT
    }
    let KM = RU;

    function SM(TT) {
      var UT;
      return KM = null !== (UT = TT.unpatchedConsole) && void 0 !== UT ? UT : KM, KM
    }
    let GM, NM = GU;

    function EM(TT, UT) {
      return NM = xM(TT, UT.internalLoggerLevel), NM
    }

    function hM(TT) {
      let {
        internalLogger: UT,
        config: mT,
        metas: WT,
        transports: zT,
        tracesApi: MT,
        userActionsApi: gT
      } = TT;
      var nT;
      UT.debug("Initializing exceptions API");
      let HT = null;
      GM = null !== (nT = mT.parseStacktrace) && void 0 !== nT ? nT : GM;
      const kT = TT => {
          UT.debug("Changing stacktrace parser"), GM = null !== TT && void 0 !== TT ? TT : GM
        },
        {
          ignoreErrors: jT = [],
          preserveOriginalError: lT
        } = mT;
      return kT(mT.parseStacktrace), {
        changeStacktraceParser: kT,
        getStacktraceParser: () => GM,
        pushError: function(TT) {
          let {
            skipDedupe: nT,
            stackFrames: kT,
            type: LT,
            context: pT,
            spanContext: BT,
            timestampOverwriteMs: ZT,
            originalError: cT,
            fingerprint: vT,
            fatal: fT
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(TT, UT) {
              const {
                message: mT,
                name: WT,
                stack: zT
              } = UT;
              return MT = TT, gT = mT + " " + WT + " " + zT, MT.some((TT => OT(TT) ? gT.includes(TT) : !!gT.match(TT)));
              var MT, gT
            }(jT, null !== cT && void 0 !== cT ? cT : TT)) try {
            var qT, iT;
            if (!uU(WT).shouldCapture()) return;
            const jT = sU(AU(AU({}, function(TT) {
                let UT = TT.cause;
                FT(UT) ? UT = TT.cause.toString() : null !== UT && (dT(TT.cause) || tT(TT.cause)) ? UT = QU(TT.cause) : null != UT && (UT = TT.cause.toString());
                return null == UT ? {} : {
                  cause: UT
                }
              }(null !== cT && void 0 !== cT ? cT : TT)), null !== pT && void 0 !== pT ? pT : {})),
              OT = AU(AU(AU(AU({
                type: LT || TT.name || "Error",
                value: TT.message,
                timestamp: ZT ? ZU(ZT) : BU(),
                trace: BT ? {
                  trace_id: BT.traceId,
                  span_id: BT.spanId
                } : MT.getTraceContext()
              }, NT(jT) ? {} : {
                context: jT
              }), lT ? {
                originalError: cT
              } : {}), vT ? {
                fingerprint: vT
              } : {}), void 0 !== fT ? {
                fatal: fT
              } : {});
            kT = null !== (qT = kT) && void 0 !== qT ? qT : TT.stack ? null === GM || void 0 === GM ? void 0 : GM(TT).frames : void 0, (null === kT || void 0 === kT ? void 0 : kT.length) && (OT.stacktrace = {
              frames: kT
            });
            const eT = {
              type: OT.type,
              value: OT.value,
              stacktrace: OT.stacktrace,
              context: OT.context,
              fingerprint: OT.fingerprint,
              fatal: null !== (iT = OT.fatal) && void 0 !== iT && iT
            };
            if (!nT && mT.dedupe && !bT(HT) && fU(eT, HT)) return void UT.debug("Skipping error push because it is the same as the last one\n", OT);
            const YT = HT,
              JT = FM(WT);
            if (HT !== YT && !nT && mT.dedupe && fU(eT, HT)) return;
            HT = eT;
            const xT = {
              meta: JT,
              payload: OT,
              type: "exception"
            };
            UT.debug("Pushing exception\n", xT), ez(gT.getActiveUserAction(), xT) || zT.execute(xT)
          } catch (eT) {
            UT.error("Error pushing event", eT)
          }
        }
      }
    }

    function DM(TT, UT, mT, WT, zT) {
      UT.debug("Initializing API");
      let MT = null;
      const gT = function(TT) {
          let {
            transports: UT,
            internalLogger: mT,
            config: WT,
            pushEvent: zT
          } = TT;
          var MT;
          const gT = null === (MT = WT.userActionsInstrumentation) || void 0 === MT ? void 0 : MT.excludeItem;
          let nT;
          const HT = () => nT;
          return {
            startUserAction: (TT, WT, MT) => {
              if (void 0 === HT()) {
                const mT = new bz({
                  name: TT,
                  transports: UT,
                  attributes: WT,
                  trigger: (null === MT || void 0 === MT ? void 0 : MT.triggerName) || "faroApiCall",
                  importance: (null === MT || void 0 === MT ? void 0 : MT.importance) || qz.Normal,
                  trackUserActionsExcludeItem: gT,
                  pushEvent: zT
                });
                return mT.filter((TT => [3, 2].includes(TT))).first().subscribe((() => {
                  nT = void 0
                })), Oz.notify({
                  type: fz,
                  userAction: mT,
                  initialActivityTimeout: null === MT || void 0 === MT ? void 0 : MT.initialActivityTimeout
                }), nT = mT, nT
              }
              mT.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: HT
          }
        }({
          transports: zT,
          config: mT,
          internalLogger: UT,
          pushEvent: (TT, mT, WT, zT) => {
            MT ? MT(TT, mT, WT, zT) : UT.warn("pushEventImpl is not initialized. Event dropped:", {
              name: TT,
              attributes: mT,
              domain: WT,
              options: zT
            })
          }
        }),
        nT = function(TT, UT, mT, WT, zT) {
          let MT;
          return UT.debug("Initializing traces API"), {
            getOTEL: () => MT,
            getTraceContext: () => {
              const TT = null === MT || void 0 === MT ? void 0 : MT.trace.getSpanContext(MT.context.active());
              return TT ? {
                trace_id: TT.traceId,
                span_id: TT.spanId
              } : void 0
            },
            initOTEL: (TT, mT) => {
              UT.debug("Initializing OpenTelemetry"), MT = {
                trace: TT,
                context: mT
              }
            },
            isOTELInitialized: () => !!MT,
            pushTraces: TT => {
              try {
                if (!uU(WT).shouldCapture()) return;
                const mT = {
                  type: "trace",
                  payload: TT,
                  meta: FM(WT)
                };
                UT.debug("Pushing trace\n", mT), zT.execute(mT)
              } catch (mT) {
                UT.error("Error pushing trace\n", mT)
              }
            }
          }
        }(0, UT, 0, WT, zT),
        HT = {
          unpatchedConsole: TT,
          internalLogger: UT,
          userActionsApi: gT,
          config: mT,
          metas: WT,
          transports: zT,
          tracesApi: nT
        },
        kT = function(TT) {
          let {
            internalLogger: UT,
            config: mT,
            metas: WT,
            transports: zT,
            tracesApi: MT,
            userActionsApi: gT
          } = TT, nT = null;
          return {
            pushEvent: function(TT, HT, kT) {
              let {
                skipDedupe: jT,
                spanContext: lT,
                timestampOverwriteMs: LT,
                customPayloadTransformer: pT = TT => TT
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!uU(WT).shouldCapture()) return;
                const BT = sU(HT),
                  ZT = pT({
                    name: TT,
                    domain: null !== kT && void 0 !== kT ? kT : mT.eventDomain,
                    attributes: NT(BT) ? void 0 : BT,
                    timestamp: LT ? ZU(LT) : BU(),
                    trace: lT ? {
                      trace_id: lT.traceId,
                      span_id: lT.spanId
                    } : MT.getTraceContext()
                  }),
                  cT = {
                    name: ZT.name,
                    attributes: ZT.attributes,
                    domain: ZT.domain
                  };
                if (!jT && mT.dedupe && !bT(nT) && fU(cT, nT)) return void UT.debug("Skipping event push because it is the same as the last one\n", ZT);
                const vT = nT,
                  fT = FM(WT);
                if (nT !== vT && !jT && mT.dedupe && fU(cT, nT)) return;
                nT = cT;
                const qT = {
                  meta: fT,
                  payload: ZT,
                  type: "event"
                };
                UT.debug("Pushing event\n", qT), ez(gT.getActiveUserAction(), qT) || zT.execute(qT)
              } catch (BT) {
                UT.error("Error pushing event", BT)
              }
            }
          }
        }(HT);
      return MT = kT.pushEvent, AU(AU(AU(AU(AU(AU(AU({}, nT), hM(HT)), function(TT) {
        let UT, mT, WT, zT, {
          internalLogger: MT,
          metas: gT
        } = TT;
        MT.debug("Initializing meta API");
        const nT = TT => {
            mT && gT.remove(mT), mT = {
              user: TT
            }, gT.add(mT)
          },
          HT = (TT, mT) => {
            var WT;
            const zT = null === mT || void 0 === mT ? void 0 : mT.overrides,
              MT = zT ? {
                overrides: AU(AU({}, null === UT || void 0 === UT || null === (WT = UT.session) || void 0 === WT ? void 0 : WT.overrides), zT)
              } : {};
            UT && gT.remove(UT), UT = {
              session: AU(AU({}, NT(TT) ? void 0 : TT), MT)
            }, gT.add(UT)
          },
          kT = (TT, UT) => {
            uU(gT).notifySessionUpdate({
              type: "replace",
              session: TT,
              overrides: null === UT || void 0 === UT ? void 0 : UT.overrides
            }), HT(TT, UT)
          },
          jT = () => gT.value.session,
          lT = () => gT.value.page;
        return {
          setUser: nT,
          resetUser: nT,
          setSession: kT,
          resetSession: kT,
          getSession: jT,
          setView: (TT, UT) => {
            var mT;
            if ((null === UT || void 0 === UT ? void 0 : UT.overrides) && (uU(gT).notifySessionUpdate({
                type: "overrides",
                overrides: UT.overrides
              }), HT(jT(), {
                overrides: UT.overrides
              })), (null === WT || void 0 === WT || null === (mT = WT.view) || void 0 === mT ? void 0 : mT.name) === (null === TT || void 0 === TT ? void 0 : TT.name)) return;
            const zT = WT;
            WT = {
              view: TT
            }, gT.add(WT), zT && gT.remove(zT)
          },
          getView: () => gT.value.view,
          setPage: TT => {
            var UT;
            const mT = OT(TT) ? AU(AU({}, null !== (UT = null === zT || void 0 === zT ? void 0 : zT.page) && void 0 !== UT ? UT : lT()), {}, {
              id: TT
            }) : TT;
            zT && gT.remove(zT), zT = {
              page: mT
            }, gT.add(zT)
          },
          getPage: lT
        }
      }(HT)), function(TT) {
        let {
          internalLogger: UT,
          config: mT,
          metas: WT,
          transports: zT,
          tracesApi: MT,
          userActionsApi: gT
        } = TT;
        var nT;
        UT.debug("Initializing logs API");
        let HT = null;
        const kT = null !== (nT = mT.logArgsSerializer) && void 0 !== nT ? nT : ym;
        return {
          pushLog: function(TT) {
            let {
              context: nT,
              level: jT,
              skipDedupe: lT,
              spanContext: LT,
              timestampOverwriteMs: pT
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!uU(WT).shouldCapture()) return;
              const BT = sU(nT),
                ZT = {
                  message: kT(TT),
                  level: null !== jT && void 0 !== jT ? jT : "log",
                  context: NT(BT) ? void 0 : BT,
                  timestamp: pT ? ZU(pT) : BU(),
                  trace: LT ? {
                    trace_id: LT.traceId,
                    span_id: LT.spanId
                  } : MT.getTraceContext()
                },
                cT = {
                  message: ZT.message,
                  level: ZT.level,
                  context: ZT.context
                };
              if (!lT && mT.dedupe && !bT(HT) && fU(cT, HT)) return void UT.debug("Skipping log push because it is the same as the last one\n", ZT);
              const vT = HT,
                fT = FM(WT);
              if (HT !== vT && !lT && mT.dedupe && fU(cT, HT)) return;
              HT = cT;
              const qT = {
                type: "log",
                payload: ZT,
                meta: fT
              };
              UT.debug("Pushing log\n", qT), ez(gT.getActiveUserAction(), qT) || zT.execute(qT)
            } catch (BT) {
              UT.error("Error pushing log\n", BT)
            }
          }
        }
      }(HT)), function(TT) {
        let {
          internalLogger: UT,
          config: mT,
          metas: WT,
          transports: zT,
          tracesApi: MT,
          userActionsApi: gT
        } = TT;
        UT.debug("Initializing measurements API");
        let nT = null;
        return {
          pushMeasurement: function(TT) {
            let {
              skipDedupe: HT,
              context: kT,
              spanContext: jT,
              timestampOverwriteMs: lT
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!uU(WT).shouldCapture()) return;
              const LT = sU(kT),
                pT = AU(AU({}, TT), {}, {
                  trace: jT ? {
                    trace_id: jT.traceId,
                    span_id: jT.spanId
                  } : MT.getTraceContext(),
                  timestamp: lT ? ZU(lT) : BU(),
                  context: NT(LT) ? void 0 : LT
                }),
                BT = {
                  type: pT.type,
                  values: pT.values,
                  context: pT.context
                };
              if (!HT && mT.dedupe && !bT(nT) && fU(BT, nT)) return void UT.debug("Skipping measurement push because it is the same as the last one\n", pT);
              const ZT = nT,
                cT = FM(WT);
              if (nT !== ZT && !HT && mT.dedupe && fU(BT, nT)) return;
              nT = BT;
              const vT = {
                type: "measurement",
                payload: pT,
                meta: cT
              };
              UT.debug("Pushing measurement\n", vT), ez(gT.getActiveUserAction(), vT) || zT.execute(vT)
            } catch (LT) {
              UT.error("Error pushing measurement\n", LT)
            }
          }
        }
      }(HT)), kT), gT)
    }

    function oM(TT) {
      const UT = SM(TT),
        mT = EM(UT, TT);
      if (BT() && !TT.isolate) return void mT.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      mT.debug("Initializing");
      const WT = function(TT, UT) {
          let mT, WT = [],
            zT = [],
            MT = [],
            gT = 0,
            nT = 0;
          const HT = () => WT.reduce(((TT, UT) => Object.assign(TT, wT(UT) ? UT() : UT)), {}),
            kT = () => {
              if (zT.length) {
                const TT = HT();
                zT.forEach((UT => UT(TT)))
              }
            };
          return {
            add: function() {
              for (var TT = arguments.length, mT = new Array(TT), zT = 0; zT < TT; zT++) mT[zT] = arguments[zT];
              UT.debug("Adding metas\n", mT), WT.push(...mT), kT()
            },
            remove: function() {
              for (var TT = arguments.length, mT = new Array(TT), zT = 0; zT < TT; zT++) mT[zT] = arguments[zT];
              UT.debug("Removing metas\n", mT), WT = WT.filter((TT => !mT.includes(TT))), kT()
            },
            addListener: TT => {
              UT.debug("Adding metas listener\n", TT), zT.push(TT)
            },
            removeListener: TT => {
              UT.debug("Removing metas listener\n", TT), zT = zT.filter((UT => UT !== TT))
            },
            capture: TT => {
              var UT;
              const WT = void 0 !== mT,
                zT = null !== (UT = mT) && void 0 !== UT ? UT : MT;
              WT || (mT = zT, gT = 0, nT = zT.length);
              try {
                for (; gT < nT;) {
                  const TT = zT[gT++];
                  null === TT || void 0 === TT || TT()
                }
                const UT = sM(HT());
                return null === TT || void 0 === TT || TT(), UT
              } finally {
                WT || (mT = void 0)
              }
            },
            addCaptureListener: TT => {
              MT.push(TT)
            },
            removeCaptureListener: TT => {
              MT = MT.filter((UT => UT !== TT))
            },
            get value() {
              return HT()
            }
          }
        }(0, mT),
        zT = CM(UT, mT, TT, WT),
        MT = DM(UT, mT, TT, WT, zT),
        gT = function(TT, UT, mT, WT, zT, MT) {
          UT.debug("Initializing instrumentations");
          const gT = [];
          return {
            add: function() {
              UT.debug("Adding instrumentations");
              for (var nT = arguments.length, HT = new Array(nT), kT = 0; kT < nT; kT++) HT[kT] = arguments[kT];
              HT.forEach((nT => {
                UT.debug(`Adding "${nT.name}" instrumentation`), gT.some((TT => TT.name === nT.name)) ? UT.warn(`Instrumentation ${nT.name} is already added`) : (nT.unpatchedConsole = TT, nT.internalLogger = UT, nT.config = mT, nT.metas = WT, nT.transports = zT, nT.api = MT, gT.push(nT), nT.initialize())
              }))
            },
            get instrumentations() {
              return [...gT]
            },
            remove: function() {
              UT.debug("Removing instrumentations");
              for (var TT = arguments.length, mT = new Array(TT), WT = 0; WT < TT; WT++) mT[WT] = arguments[WT];
              mT.forEach((TT => {
                var mT, WT;
                UT.debug(`Removing "${TT.name}" instrumentation`);
                const zT = gT.reduce(((UT, mT, WT) => null === UT && mT.name === TT.name ? WT : null), null);
                null !== zT ? (null === (mT = (WT = gT[zT]).destroy) || void 0 === mT || mT.call(WT), gT.splice(zT, 1)) : UT.warn(`Instrumentation "${TT.name}" is not added`)
              }))
            }
          }
        }(UT, mT, TT, WT, zT, MT),
        nT = cT(UT, mT, TT, WT, zT, MT, gT);
      return VM(nT),
        function(TT) {
          TT.transports.add(...TT.config.transports), TT.transports.addBeforeSendHooks(TT.config.beforeSend)
        }(nT),
        function(TT) {
          TT.instrumentations.add(...TT.config.instrumentations)
        }(nT), nT
    }

    function AM(TT) {
      const UT = aM(TT);
      if (UT) return oM(UT)
    }
  },
  6770: function(TT, UT, mT) {
    var WT;
    ! function(zT, MT) {
      var gT = "function",
        nT = "undefined",
        HT = "object",
        kT = "string",
        jT = "major",
        lT = "model",
        LT = "name",
        pT = "type",
        BT = "vendor",
        ZT = "version",
        cT = "architecture",
        vT = "console",
        fT = "mobile",
        qT = "tablet",
        iT = "smarttv",
        bT = "wearable",
        OT = "embedded",
        eT = "Amazon",
        YT = "Apple",
        JT = "ASUS",
        xT = "BlackBerry",
        dT = "Browser",
        wT = "Chrome",
        tT = "Firefox",
        aT = "Google",
        yT = "Honor",
        XT = "Huawei",
        IT = "LG",
        QT = "Microsoft",
        sT = "Motorola",
        FT = "Nvidia",
        PT = "OnePlus",
        VT = "Opera",
        uT = "OPPO",
        CT = "Samsung",
        rT = "Sharp",
        KT = "Sony",
        ST = "Xiaomi",
        GT = "Zebra",
        NT = "Facebook",
        ET = "Chromium OS",
        hT = "Mac OS",
        DT = " Browser",
        oT = function(TT) {
          for (var UT = {}, mT = 0; mT < TT.length; mT++) UT[TT[mT].toUpperCase()] = TT[mT];
          return UT
        },
        AT = function(TT, UT) {
          return typeof TT === kT && -1 !== RT(UT).indexOf(RT(TT))
        },
        RT = function(TT) {
          return TT.toLowerCase()
        },
        TU = function(TT, UT) {
          if (typeof TT === kT) return TT = TT.replace(/^\s\s*/, ""), typeof UT === nT ? TT : TT.substring(0, 500)
        },
        UU = function(TT, UT) {
          for (var mT, WT, zT, nT, kT, jT, lT = 0; lT < UT.length && !kT;) {
            var LT = UT[lT],
              pT = UT[lT + 1];
            for (mT = WT = 0; mT < LT.length && !kT && LT[mT];)
              if (kT = LT[mT++].exec(TT))
                for (zT = 0; zT < pT.length; zT++) jT = kT[++WT], typeof(nT = pT[zT]) === HT && nT.length > 0 ? 2 === nT.length ? typeof nT[1] == gT ? this[nT[0]] = nT[1].call(this, jT) : this[nT[0]] = nT[1] : 3 === nT.length ? typeof nT[1] !== gT || nT[1].exec && nT[1].test ? this[nT[0]] = jT ? jT.replace(nT[1], nT[2]) : MT : this[nT[0]] = jT ? nT[1].call(this, jT, nT[2]) : MT : 4 === nT.length && (this[nT[0]] = jT ? nT[3].call(this, jT.replace(nT[1], nT[2])) : MT) : this[nT] = jT || MT;
            lT += 2
          }
        },
        mU = function(TT, UT) {
          for (var mT in UT)
            if (typeof UT[mT] === HT && UT[mT].length > 0) {
              for (var WT = 0; WT < UT[mT].length; WT++)
                if (AT(UT[mT][WT], TT)) return "?" === mT ? MT : mT
            } else if (AT(UT[mT], TT)) return "?" === mT ? MT : mT;
          return UT.hasOwnProperty("*") ? UT["*"] : TT
        },
        WU = {
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
        zU = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [ZT, [LT, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [ZT, [LT, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [LT, ZT],
            [/opios[\/ ]+([\w\.]+)/i],
            [ZT, [LT, VT + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [ZT, [LT, VT + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [ZT, [LT, VT]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [ZT, [LT, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [ZT, [LT, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [LT, ZT],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [ZT, [LT, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [ZT, [LT, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [ZT, [LT, "UC" + dT]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [ZT, [LT, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [ZT, [LT, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [ZT, [LT, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [ZT, [LT, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [ZT, [LT, "Smart Lenovo " + dT]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [LT, /(.+)/, "$1 Secure " + dT], ZT
            ],
            [/\bfocus\/([\w\.]+)/i],
            [ZT, [LT, tT + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [ZT, [LT, VT + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [ZT, [LT, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [ZT, [LT, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [ZT, [LT, VT + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [ZT, [LT, "MIUI" + DT]],
            [/fxios\/([\w\.-]+)/i],
            [ZT, [LT, tT]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [ZT, [LT, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [LT, /(.+)/, "$1Browser"], ZT
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [LT, /(.+)/, "$1" + DT], ZT
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [ZT, [LT, CT + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [ZT, [LT, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [LT, "Sogou Mobile"], ZT
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [LT, ZT],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [LT],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [ZT, LT],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [LT, NT], ZT
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [LT, ZT],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [ZT, [LT, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [ZT, [LT, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [ZT, [LT, wT + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [LT, wT + " WebView"], ZT
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [ZT, [LT, "Android " + dT]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [LT, ZT],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [ZT, [LT, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [ZT, LT],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [LT, [ZT, mU, {
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
            [LT, ZT],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [LT, "Netscape"], ZT
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [LT, ZT],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [ZT, [LT, tT + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [LT, [ZT, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [LT, [ZT, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [cT, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [cT, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [cT, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [cT, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [cT, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [cT, /ower/, "", RT]
            ],
            [/ sun4\w[;\)]/i],
            [
              [cT, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [cT, RT]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [lT, [BT, CT],
              [pT, qT]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [lT, [BT, CT],
              [pT, fT]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [lT, [BT, YT],
              [pT, fT]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [lT, [BT, YT],
              [pT, qT]
            ],
            [/(macintosh);/i],
            [lT, [BT, YT]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [lT, [BT, rT],
              [pT, fT]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [lT, [BT, yT],
              [pT, qT]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [lT, [BT, yT],
              [pT, fT]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [lT, [BT, XT],
              [pT, qT]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [lT, [BT, XT],
              [pT, fT]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [lT, /_/g, " "],
              [BT, ST],
              [pT, qT]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [lT, /_/g, " "],
              [BT, ST],
              [pT, fT]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [lT, [BT, uT],
              [pT, fT]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [lT, [BT, mU, {
                OnePlus: ["304", "403", "203"],
                "*": uT
              }],
              [pT, qT]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [lT, [BT, "Vivo"],
              [pT, fT]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [lT, [BT, "Realme"],
              [pT, fT]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [lT, [BT, sT],
              [pT, fT]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [lT, [BT, sT],
              [pT, qT]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [lT, [BT, IT],
              [pT, qT]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [lT, [BT, IT],
              [pT, fT]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [lT, [BT, "Lenovo"],
              [pT, qT]
            ],
            [/(nokia) (t[12][01])/i],
            [BT, lT, [pT, qT]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [lT, /_/g, " "],
              [pT, fT],
              [BT, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [lT, [BT, aT],
              [pT, qT]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [lT, [BT, aT],
              [pT, fT]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [lT, [BT, KT],
              [pT, fT]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [lT, "Xperia Tablet"],
              [BT, KT],
              [pT, qT]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [lT, [BT, PT],
              [pT, fT]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [lT, [BT, eT],
              [pT, qT]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [lT, /(.+)/g, "Fire Phone $1"],
              [BT, eT],
              [pT, fT]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [lT, BT, [pT, qT]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [lT, [BT, xT],
              [pT, fT]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [lT, [BT, JT],
              [pT, qT]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [lT, [BT, JT],
              [pT, fT]
            ],
            [/(nexus 9)/i],
            [lT, [BT, "HTC"],
              [pT, qT]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [BT, [lT, /_/g, " "],
              [pT, fT]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [lT, [BT, "TCL"],
              [pT, qT]
            ],
            [/(itel) ((\w+))/i],
            [
              [BT, RT], lT, [pT, mU, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [lT, [BT, "Acer"],
              [pT, qT]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [lT, [BT, "Meizu"],
              [pT, fT]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [lT, [BT, "Ulefone"],
              [pT, fT]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [lT, [BT, "Energizer"],
              [pT, fT]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [lT, [BT, "Cat"],
              [pT, fT]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [lT, [BT, "Smartfren"],
              [pT, fT]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [lT, [BT, "Nothing"],
              [pT, fT]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [lT, [BT, "Archos"],
              [pT, qT]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [lT, [BT, "Archos"],
              [pT, fT]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [BT, lT, [pT, qT]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [BT, lT, [pT, fT]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [BT, lT, [pT, qT]],
            [/(surface duo)/i],
            [lT, [BT, QT],
              [pT, qT]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [lT, [BT, "Fairphone"],
              [pT, fT]
            ],
            [/(u304aa)/i],
            [lT, [BT, "AT&T"],
              [pT, fT]
            ],
            [/\bsie-(\w*)/i],
            [lT, [BT, "Siemens"],
              [pT, fT]
            ],
            [/\b(rct\w+) b/i],
            [lT, [BT, "RCA"],
              [pT, qT]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [lT, [BT, "Dell"],
              [pT, qT]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [lT, [BT, "Verizon"],
              [pT, qT]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [lT, [BT, "Barnes & Noble"],
              [pT, qT]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [lT, [BT, "NuVision"],
              [pT, qT]
            ],
            [/\b(k88) b/i],
            [lT, [BT, "ZTE"],
              [pT, qT]
            ],
            [/\b(nx\d{3}j) b/i],
            [lT, [BT, "ZTE"],
              [pT, fT]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [lT, [BT, "Swiss"],
              [pT, fT]
            ],
            [/\b(zur\d{3}) b/i],
            [lT, [BT, "Swiss"],
              [pT, qT]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [lT, [BT, "Zeki"],
              [pT, qT]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [BT, "Dragon Touch"], lT, [pT, qT]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [lT, [BT, "Insignia"],
              [pT, qT]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [lT, [BT, "NextBook"],
              [pT, qT]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [BT, "Voice"], lT, [pT, fT]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [BT, "LvTel"], lT, [pT, fT]
            ],
            [/\b(ph-1) /i],
            [lT, [BT, "Essential"],
              [pT, fT]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [lT, [BT, "Envizen"],
              [pT, qT]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [lT, [BT, "MachSpeed"],
              [pT, qT]
            ],
            [/\btu_(1491) b/i],
            [lT, [BT, "Rotor"],
              [pT, qT]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [lT, [BT, FT],
              [pT, qT]
            ],
            [/(sprint) (\w+)/i],
            [BT, lT, [pT, fT]],
            [/(kin\.[onetw]{3})/i],
            [
              [lT, /\./g, " "],
              [BT, QT],
              [pT, fT]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [lT, [BT, GT],
              [pT, qT]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [lT, [BT, GT],
              [pT, fT]
            ],
            [/smart-tv.+(samsung)/i],
            [BT, [pT, iT]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [lT, /^/, "SmartTV"],
              [BT, CT],
              [pT, iT]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [BT, IT],
              [pT, iT]
            ],
            [/(apple) ?tv/i],
            [BT, [lT, YT + " TV"],
              [pT, iT]
            ],
            [/crkey/i],
            [
              [lT, wT + "cast"],
              [BT, aT],
              [pT, iT]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [lT, [BT, eT],
              [pT, iT]
            ],
            [/(shield \w+ tv)/i],
            [lT, [BT, FT],
              [pT, iT]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [lT, [BT, rT],
              [pT, iT]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [lT, [BT, KT],
              [pT, iT]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [lT, [BT, ST],
              [pT, iT]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [BT, lT, [pT, iT]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [BT, TU],
              [lT, TU],
              [pT, iT]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [lT, [pT, iT]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [pT, iT]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [BT, lT, [pT, vT]],
            [/droid.+; (shield)( bui|\))/i],
            [lT, [BT, FT],
              [pT, vT]
            ],
            [/(playstation \w+)/i],
            [lT, [BT, KT],
              [pT, vT]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [lT, [BT, QT],
              [pT, vT]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [lT, [BT, CT],
              [pT, bT]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [BT, lT, [pT, bT]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [lT, [BT, uT],
              [pT, bT]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [lT, [BT, YT],
              [pT, bT]
            ],
            [/(opwwe\d{3})/i],
            [lT, [BT, PT],
              [pT, bT]
            ],
            [/(moto 360)/i],
            [lT, [BT, sT],
              [pT, bT]
            ],
            [/(smartwatch 3)/i],
            [lT, [BT, KT],
              [pT, bT]
            ],
            [/(g watch r)/i],
            [lT, [BT, IT],
              [pT, bT]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [lT, [BT, GT],
              [pT, bT]
            ],
            [/droid.+; (glass) \d/i],
            [lT, [BT, aT],
              [pT, bT]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [BT, lT, [pT, bT]],
            [/; (quest( \d| pro)?)/i],
            [lT, [BT, NT],
              [pT, bT]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [BT, [pT, OT]],
            [/(aeobc)\b/i],
            [lT, [BT, eT],
              [pT, OT]
            ],
            [/(homepod).+mac os/i],
            [lT, [BT, YT],
              [pT, OT]
            ],
            [/windows iot/i],
            [
              [pT, OT]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [lT, [pT, fT]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [lT, [pT, qT]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [pT, qT]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [pT, fT]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [lT, [BT, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [ZT, [LT, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [LT, ZT],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [ZT, [LT, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [LT, ZT],
            [/ladybird\//i],
            [
              [LT, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [ZT, LT]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [LT, ZT],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [LT, [ZT, mU, WU]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [ZT, mU, WU],
              [LT, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [ZT, /_/g, "."],
              [LT, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [LT, hT],
              [ZT, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [ZT, LT],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [LT, /(.+)/, "$1 Touch"], ZT
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [LT, ZT],
            [/\(bb(10);/i],
            [ZT, [LT, xT]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [ZT, [LT, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [ZT, [LT, tT + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [ZT, [LT, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [ZT, [LT, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [ZT, [LT, wT + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [LT, ET], ZT
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [LT, ZT],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [LT, "Solaris"], ZT
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [LT, ZT]
          ]
        },
        MU = function(TT, UT) {
          if (typeof TT === HT && (UT = TT, TT = MT), !(this instanceof MU)) return new MU(TT, UT).getResult();
          var mT = typeof zT !== nT && zT.navigator ? zT.navigator : MT,
            WT = TT || (mT && mT.userAgent ? mT.userAgent : ""),
            vT = mT && mT.userAgentData ? mT.userAgentData : MT,
            iT = UT ? function(TT, UT) {
              var mT = {};
              for (var WT in TT) UT[WT] && UT[WT].length % 2 === 0 ? mT[WT] = UT[WT].concat(TT[WT]) : mT[WT] = TT[WT];
              return mT
            }(zU, UT) : zU,
            bT = mT && mT.userAgent == WT;
          return this.getBrowser = function() {
            var TT, UT = {};
            return UT[LT] = MT, UT[ZT] = MT, UU.call(UT, WT, iT.browser), UT[jT] = typeof(TT = UT[ZT]) === kT ? TT.replace(/[^\d\.]/g, "").split(".")[0] : MT, bT && mT && mT.brave && typeof mT.brave.isBrave == gT && (UT[LT] = "Brave"), UT
          }, this.getCPU = function() {
            var TT = {};
            return TT[cT] = MT, UU.call(TT, WT, iT.cpu), TT
          }, this.getDevice = function() {
            var TT = {};
            return TT[BT] = MT, TT[lT] = MT, TT[pT] = MT, UU.call(TT, WT, iT.device), bT && !TT[pT] && vT && vT.mobile && (TT[pT] = fT), bT && "Macintosh" == TT[lT] && mT && typeof mT.standalone !== nT && mT.maxTouchPoints && mT.maxTouchPoints > 2 && (TT[lT] = "iPad", TT[pT] = qT), TT
          }, this.eB = function() {
            var TT = {};
            return TT[LT] = MT, TT[ZT] = MT, UU.call(TT, WT, iT.engine), TT
          }, this.getOS = function() {
            var TT = {};
            return TT[LT] = MT, TT[ZT] = MT, UU.call(TT, WT, iT.os), bT && !TT[LT] && vT && vT.platform && "Unknown" != vT.platform && (TT[LT] = vT.platform.replace(/chrome os/i, ET).replace(/macos/i, hT)), TT
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.eB(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return WT
          }, this.setUA = function(TT) {
            return WT = typeof TT === kT && TT.length > 500 ? TU(TT, 500) : TT, this
          }, this.setUA(WT), this
        };
      MU.VERSION = "1.0.41", MU.BROWSER = oT([LT, ZT, jT]), MU.CPU = oT([cT]), MU.DEVICE = oT([lT, BT, pT, vT, fT, iT, qT, bT, OT]), MU.ENGINE = MU.OS = oT([LT, ZT]), typeof UT !== nT ? (TT.exports && (UT = TT.exports = MU), UT.UAParser = MU) : mT.amdO ? (WT = function() {
        return MU
      }.call(UT, mT, UT, TT)) === MT || (TT.exports = WT) : typeof zT !== nT && (zT.UAParser = MU);
      var gU = typeof zT !== nT && (zT.jQuery || zT.Zepto);
      if (gU && !gU.ua) {
        var nU = new MU;
        gU.ua = nU.getResult(), gU.ua.get = function() {
          return nU.getUA()
        }, gU.ua.set = function(TT) {
          nU.setUA(TT);
          var UT = nU.getResult();
          for (var mT in UT) gU.ua[mT] = UT[mT]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);