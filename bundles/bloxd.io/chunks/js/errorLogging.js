export const id = 31;
export const ids = [31];
export const modules = {
  6703: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BaseExtension: () => GZ,
      BaseInstrumentation: () => bZ,
      BaseTransport: () => xS,
      CSPInstrumentation: () => CS,
      ConsoleInstrumentation: () => aZ,
      ConsoleTransport: () => wL,
      EVENT_CLICK: () => zb,
      EVENT_NAVIGATION: () => Eb,
      EVENT_ROUTE_CHANGE: () => Wb,
      EVENT_SESSION_EXTEND: () => ib,
      EVENT_SESSION_RESUME: () => ub,
      EVENT_SESSION_START: () => Xb,
      EVENT_VIEW_CHANGED: () => ob,
      ErrorsInstrumentation: () => lZ,
      FetchTransport: () => oL,
      InternalLoggerLevel: () => Rb,
      LogLevel: () => zZ,
      MAX_SESSION_PERSISTENCE_TIME: () => UG,
      NavigationInstrumentation: () => nS,
      Observable: () => rZ,
      PerformanceInstrumentation: () => tw,
      PersistentSessionsManager: () => Mb,
      SESSION_EXPIRATION_TIME: () => LG,
      SESSION_INACTIVITY_TIME: () => yG,
      STORAGE_KEY: () => SG,
      SessionInstrumentation: () => wZ,
      TransportItemType: () => BS,
      UserActionInstrumentation: () => iS,
      UserActionState: () => hS,
      VERSION: () => ZZ,
      ViewInstrumentation: () => PZ,
      VolatileSessionsManager: () => Ab,
      WebVitalsInstrumentation: () => lw,
      allLogLevels: () => oZ,
      browserMeta: () => tS,
      buildStackFrame: () => SZ,
      captureMetas: () => ML,
      createInternalLogger: () => WL,
      createPromiseBuffer: () => QL,
      createSession: () => NS,
      deepEqual: () => rb,
      defaultEventDomain: () => wG,
      defaultExceptionType: () => CZ,
      defaultGlobalObjectKey: () => mL,
      defaultInternalLoggerLevel: () => Hb,
      defaultLogLevel: () => EZ,
      faro: () => hG,
      genShortID: () => Jb,
      getCurrentTimestamp: () => Kb,
      getDataFromSafariExtensions: () => fZ,
      getIgnoreUrls: () => tG,
      getInternalFaroFromGlobalObject: () => fG,
      getStackFramesFromError: () => KZ,
      getTransportBody: () => ZL,
      getUrlFromResource: () => NG,
      getWebInstrumentations: () => gS,
      globalObject: () => VG,
      initializeFaro: () => xL,
      internalGlobalObjectKey: () => pG,
      isArray: () => FG,
      isBoolean: () => CG,
      isDomError: () => sG,
      isDomException: () => qG,
      isElement: () => gG,
      isElementDefined: () => nG,
      wK: () => HG,
      isError: () => MG,
      isErrorDefined: () => PG,
      isErrorEvent: () => AG,
      isEvent: () => jG,
      isEventDefined: () => lG,
      isFunction: () => IG,
      isInstanceOf: () => zG,
      isInt: () => iG,
      isInternalFaroOnGlobalObject: () => KG,
      isMap: () => RG,
      isMapDefined: () => eG,
      isNull: () => oG,
      isNumber: () => uG,
      isObject: () => mG,
      isPrimitive: () => cG,
      isRegExp: () => vG,
      isString: () => XG,
      isSymbol: () => WG,
      isSyntheticEvent: () => TG,
      isThenable: () => aG,
      isToString: () => rG,
      isTypeof: () => JG,
      isUndefined: () => EG,
      makeCoreConfig: () => vL,
      noop: () => eb,
      osMeta: () => DS,
      parseStacktrace: () => hZ,
      sdkMeta: () => OS,
      setInternalFaroOnGlobalObject: () => QG,
      transportItemTypeToBodyKey: () => GL,
      unknownString: () => jZ,
      userActionDataAttribute: () => Dw,
      userActionTimeoutDataAttribute: () => Nw
    });
    const wG = "browser",
      SG = "com.grafana.faro.session",
      LG = 144e5,
      yG = 9e5,
      kG = 1e3,
      UG = yG,
      YG = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: UG
      };
    const VG = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof ZG.g ? ZG.g : "undefined" !== typeof self ? self : void 0;
    const pG = "_faroInternal";

    function fG() {
      return VG[pG]
    }

    function QG(GG) {
      GG.config.isolate ? GG.internalLogger.debug("Skipping registering internal Faro instance on global object") : (GG.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(VG, pG, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: GG
      }))
    }

    function KG() {
      return pG in VG
    }
    let hG = {
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

    function dG(GG, bG, ZG, wG, SG, LG, yG) {
      return bG.debug("Initializing Faro"), hG = {
          api: LG,
          config: ZG,
          instrumentations: yG,
          internalLogger: bG,
          metas: wG,
          pause: SG.pause,
          transports: SG,
          unpatchedConsole: GG,
          unpause: SG.unpause
        }, QG(hG),
        function(GG) {
          if (GG.config.preventGlobalExposure) GG.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (GG.internalLogger.debug(`Registering public faro reference in the global scope using "${GG.config.globalObjectKey}" key`), GG.config.globalObjectKey in VG) return void GG.internalLogger.warn(`Skipping global registration due to key "${GG.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(VG, GG.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: GG
            })
          }
        }(hG), hG
    }

    function JG(GG, bG) {
      return typeof GG === bG
    }

    function rG(GG, bG) {
      return Object.prototype.toString.call(GG) === `[object ${bG}]`
    }

    function zG(GG, bG) {
      try {
        return GG instanceof bG
      } catch (ZG) {
        return !1
      }
    }
    const EG = GG => JG(GG, "undefined"),
      oG = GG => JG(GG, "null"),
      XG = GG => JG(GG, "string"),
      uG = GG => JG(GG, "number") && !isNaN(GG) || JG(GG, "bigint"),
      iG = GG => uG(GG) && Number.isInteger(GG),
      CG = GG => JG(GG, "boolean"),
      WG = GG => JG(GG, "symbol"),
      mG = GG => !oG(GG) && JG(GG, "object"),
      IG = GG => JG(GG, "function"),
      FG = GG => rG(GG, "Array"),
      vG = GG => rG(GG, "RegExp"),
      aG = GG => IG(null === GG || void 0 === GG ? void 0 : GG.then),
      cG = GG => !mG(GG) && !IG(GG),
      lG = "undefined" !== typeof Event,
      jG = GG => lG && zG(GG, Event),
      PG = "undefined" !== typeof Error,
      MG = GG => PG && zG(GG, Error),
      AG = GG => rG(GG, "ErrorEvent"),
      sG = GG => rG(GG, "DOMError"),
      qG = GG => rG(GG, "DOMException"),
      nG = "undefined" !== typeof Element,
      gG = GG => nG && zG(GG, Element),
      eG = "undefined" !== typeof Map,
      RG = GG => eG && zG(GG, Map),
      TG = GG => mG(GG) && "nativeEvent" in GG && "preventDefault" in GG && "stopPropagation" in GG;

    function HG(GG) {
      return null == GG || (FG(GG) || XG(GG) ? 0 === GG.length : !!mG(GG) && 0 === Object.keys(GG).length)
    }

    function tG() {
      return hG.transports.transports.flatMap((GG => GG.getIgnoreUrls()))
    }

    function DG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return tG().some((bG => GG && null != GG.match(bG)))
    }

    function NG(GG) {
      return XG(GG) ? GG : GG instanceof URL ? GG.href : !HG(GG) && IG(null === GG || void 0 === GG ? void 0 : GG.toString) ? GG.toString() : void 0
    }
    const OG = "sessionStorage",
      xG = "localStorage";

    function BG(GG) {
      try {
        let bG;
        bG = window[GG];
        const ZG = "__faro_storage_test__";
        return bG.setItem(ZG, ZG), bG.removeItem(ZG), !0
      } catch (ZG) {
        var bG;
        return null === (bG = hG.internalLogger) || void 0 === bG || bG.info(`Web storage of type ${GG} is not available. Reason: ${ZG}`), !1
      }
    }

    function Gb(GG, bG) {
      return Lb(bG) ? window[bG].getItem(GG) : null
    }

    function bb(GG, bG, ZG) {
      if (Lb(ZG)) try {
        window[ZG].setItem(GG, bG)
      } catch (wG) {}
    }

    function Zb(GG, bG) {
      Lb(bG) && window[bG].removeItem(GG)
    }
    const wb = BG(xG),
      Sb = BG(OG);

    function Lb(GG) {
      return GG === xG ? wb : GG === OG && Sb
    }

    function yb(GG) {
      return yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
        return typeof GG
      } : function(GG) {
        return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
      }, yb(GG)
    }

    function kb(GG) {
      var bG = function(GG, bG) {
        if ("object" != yb(GG) || !GG) return GG;
        var ZG = GG[Symbol.toPrimitive];
        if (void 0 !== ZG) {
          var wG = ZG.call(GG, bG || "default");
          if ("object" != yb(wG)) return wG;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === bG ? String : Number)(GG)
      }(GG, "string");
      return "symbol" == yb(bG) ? bG : bG + ""
    }

    function Ub(GG, bG, ZG) {
      return (bG = kb(bG)) in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }

    function Yb(GG, bG) {
      var ZG = Object.keys(GG);
      if (Object.getOwnPropertySymbols) {
        var wG = Object.getOwnPropertySymbols(GG);
        bG && (wG = wG.filter((function(bG) {
          return Object.getOwnPropertyDescriptor(GG, bG).enumerable
        }))), ZG.push.apply(ZG, wG)
      }
      return ZG
    }

    function Vb(GG) {
      for (var bG = 1; bG < arguments.length; bG++) {
        var ZG = null != arguments[bG] ? arguments[bG] : {};
        bG % 2 ? Yb(Object(ZG), !0).forEach((function(bG) {
          Ub(GG, bG, ZG[bG])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : Yb(Object(ZG)).forEach((function(bG) {
          Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
        }))
      }
      return GG
    }

    function pb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hG;
      var bG, ZG, wG;
      const SG = GG.config.sessionTracking,
        LG = null !== (bG = null !== (ZG = null === SG || void 0 === SG || null === (wG = SG.sampler) || void 0 === wG ? void 0 : wG.call(SG, {
          metas: GG.metas.value
        })) && void 0 !== ZG ? ZG : null === SG || void 0 === SG ? void 0 : SG.samplingRate) && void 0 !== bG ? bG : 1,
        yG = "number" === typeof LG ? function(GG) {
          return Math.min(1, Math.max(0, GG))
        }(LG) : 0;
      if (!(yG > 0)) return !1;
      if (1 === yG) return !0;
      try {
        const GG = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === GG || void 0 === GG ? void 0 : GG.getRandomValues)) {
          const bG = new Uint32Array(1);
          return GG.getRandomValues(bG), bG[0] / Math.pow(2, 32) < yG
        }
      } catch (kG) {}
      return Math.random() < yG
    }

    function fb() {
      return Date.now()
    }

    function Qb() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Kb() {
      return (new Date).toISOString()
    }

    function hb(GG) {
      return new Date(GG).toISOString()
    }
    const db = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Jb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const bG = new Uint32Array(GG),
        ZG = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === ZG || void 0 === ZG ? void 0 : ZG.getRandomValues) ZG.getRandomValues(bG);
      else
        for (let SG = 0; SG < GG; SG++) bG[SG] = Math.floor(4294967296 * Math.random());
      let wG = "";
      for (let SG = 0; SG < GG; SG++) wG += db[bG[SG] % 59];
      return wG
    }

    function rb(GG, bG) {
      if (GG === bG) return !0;
      if (JG(GG, "number") && isNaN(GG)) return JG(bG, "number") && isNaN(bG);
      const ZG = FG(GG),
        wG = FG(bG);
      if (ZG !== wG) return !1;
      if (ZG && wG) {
        const ZG = GG.length;
        if (ZG !== bG.length) return !1;
        for (let wG = ZG; 0 !== wG--;)
          if (!rb(GG[wG], bG[wG])) return !1;
        return !0
      }
      const SG = mG(GG),
        LG = mG(bG);
      if (SG !== LG) return !1;
      if (GG && bG && SG && LG) {
        const ZG = Object.keys(GG),
          wG = Object.keys(bG);
        if (ZG.length !== wG.length) return !1;
        for (let GG of ZG)
          if (!wG.includes(GG)) return !1;
        for (let SG of ZG)
          if (!rb(GG[SG], bG[SG])) return !1;
        return !0
      }
      return !1
    }
    const zb = "click",
      Eb = "navigation",
      ob = "view_changed",
      Xb = "session_start",
      ub = "session_resume",
      ib = "session_extend",
      Cb = "service_name_override",
      Wb = "route_change";

    function mb() {
      let {
        sessionId: GG,
        started: bG,
        lastActivity: ZG,
        isSampled: wG = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, SG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hG;
      var LG;
      const yG = fb(),
        kG = null === (LG = SG.config) || void 0 === LG || null === (LG = LG.sessionTracking) || void 0 === LG ? void 0 : LG.generateSessionId;
      return null == GG && (GG = "function" === typeof kG ? kG() : Jb()), {
        sessionId: GG,
        lastActivity: null !== ZG && void 0 !== ZG ? ZG : yG,
        started: null !== bG && void 0 !== bG ? bG : yG,
        isSampled: wG
      }
    }

    function Ib(GG) {
      if (null == GG) return !1;
      const bG = fb();
      return bG - GG.started < 144e5 && bG - GG.lastActivity < yG
    }

    function Fb(GG) {
      let {
        fetchUserSession: bG,
        storeUserSession: ZG,
        adoptSession: wG,
        updateInterval: SG = 0
      } = GG, kG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hG, UG = 0;
      return function() {
        let {
          forceSessionExtend: GG = !1,
          refreshActivity: YG = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var VG, pG;
        if (!bG || !ZG) return;
        const fG = fb();
        if (!GG && fG < UG && UG - fG <= SG) return;
        const QG = kG.config.sessionTracking,
          KG = null === QG || void 0 === QG ? void 0 : QG.persistent;
        if (KG && !wb || !KG && !Sb) return;
        const hG = bG();
        if (UG = Math.min(fG + SG, (null !== (VG = null === hG || void 0 === hG ? void 0 : hG.started) && void 0 !== VG ? VG : fG) + LG, (null !== (pG = null === hG || void 0 === hG ? void 0 : hG.lastActivity) && void 0 !== pG ? pG : fG) + yG), !1 === GG && Ib(hG)) {
          var dG;
          YG && ZG(Vb(Vb({}, hG), {}, {
            lastActivity: fG
          }));
          const GG = null === (dG = kG.metas.value.session) || void 0 === dG ? void 0 : dG.id;
          null != wG && null != hG.sessionMeta && hG.sessionId !== GG && wG(hG.sessionMeta)
        } else {
          var JG, rG, zG;
          let GG = ab(mb({
            isSampled: pb(kG)
          }, kG), hG, kG);
          UG = fG + SG, ZG(GG), null === (JG = kG.api) || void 0 === JG || JG.setSession(GG.sessionMeta), null === QG || void 0 === QG || null === (rG = QG.onSessionChange) || void 0 === rG || rG.call(QG, null !== (zG = null === hG || void 0 === hG ? void 0 : hG.sessionMeta) && void 0 !== zG ? zG : null, GG.sessionMeta)
        }
      }
    }

    function vb(GG) {
      let bG, {
          fetchUserSession: ZG,
          storeUserSession: wG,
          updateInterval: SG = 0
        } = GG,
        LG = 0;
      return GG => {
        const yG = fb();
        if (GG === bG && yG < LG && LG - yG <= SG) return;
        bG = GG, LG = yG + SG;
        const kG = ZG();
        (null === kG || void 0 === kG ? void 0 : kG.sessionId) === GG && Ib(kG) && wG(Vb(Vb({}, kG), {}, {
          lastActivity: yG
        }))
      }
    }

    function ab(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hG;
      var wG, SG, LG, yG, kG, UG;
      const YG = Vb(Vb({}, GG), {}, {
          sessionMeta: {
            id: GG.sessionId,
            attributes: lb(Vb(Vb(Vb({}, null === (wG = ZG.config.sessionTracking) || void 0 === wG || null === (wG = wG.session) || void 0 === wG ? void 0 : wG.attributes), null !== (SG = null === (LG = ZG.metas.value.session) || void 0 === LG ? void 0 : LG.attributes) && void 0 !== SG ? SG : {}), {}, {
              isSampled: GG.isSampled.toString()
            }))
          }
        }),
        VG = null !== (yG = null === (kG = ZG.metas.value.session) || void 0 === kG ? void 0 : kG.overrides) && void 0 !== yG ? yG : null === bG || void 0 === bG || null === (UG = bG.sessionMeta) || void 0 === UG ? void 0 : UG.overrides;
      HG(VG) || (YG.sessionMeta.overrides = VG);
      const pG = null === bG || void 0 === bG ? void 0 : bG.sessionId;
      return null != pG && (YG.sessionMeta.attributes.previousSession = pG), YG
    }

    function cb(GG) {
      let {
        fetchUserSession: bG,
        storeUserSession: ZG
      } = GG, wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hG, SG = !1;
      return function(GG) {
        if (SG) return;
        const LG = GG.session,
          yG = bG();
        let kG = null === LG || void 0 === LG ? void 0 : LG.id;
        const UG = null === LG || void 0 === LG ? void 0 : LG.attributes,
          YG = null === LG || void 0 === LG ? void 0 : LG.overrides,
          VG = null === yG || void 0 === yG ? void 0 : yG.sessionMeta,
          pG = null === VG || void 0 === VG ? void 0 : VG.overrides,
          fG = !!YG && !rb(YG, pG),
          QG = !!UG && !rb(UG, null === VG || void 0 === VG ? void 0 : VG.attributes);
        if (LG && kG !== (null === yG || void 0 === yG ? void 0 : yG.sessionId) || QG || fG) {
          var KG, hG;
          const GG = null != yG && kG === yG.sessionId,
            bG = ab(GG ? yG : mb({
              sessionId: kG,
              isSampled: pb(wG)
            }, wG), yG, wG),
            LG = null === yG || void 0 === yG || null === (KG = yG.sessionMeta) || void 0 === KG || null === (KG = KG.attributes) || void 0 === KG ? void 0 : KG.previousSession;
          GG && null != LG && LG !== bG.sessionId && (bG.sessionMeta.attributes.previousSession = LG), (null === (hG = bG.sessionMeta.attributes) || void 0 === hG ? void 0 : hG.previousSession) === bG.sessionId && delete bG.sessionMeta.attributes.previousSession, ZG(bG),
            function(GG, bG) {
              let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var SG, LG, yG;
              if (!bG) return;
              const kG = ZG.serviceName,
                UG = null !== (SG = null !== (LG = wG.serviceName) && void 0 !== LG ? LG : null === (yG = GG.metas.value.app) || void 0 === yG ? void 0 : yG.name) && void 0 !== SG ? SG : "";
              kG && kG !== UG && GG.api.pushEvent(Cb, {
                serviceName: kG,
                previousServiceName: UG
              })
            }(wG, fG, YG, pG), SG = !0;
          try {
            wG.api.setSession(bG.sessionMeta)
          } finally {
            SG = !1
          }
        }
      }
    }

    function lb(GG) {
      const bG = {};
      for (const ZG of Object.keys(GG)) {
        const wG = GG[ZG];
        void 0 !== wG && (bG[ZG] = wG)
      }
      return bG
    }

    function jb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== GG && void 0 !== GG ? GG : {}, function() {
        const GG = new WeakSet;
        return function(bG, ZG) {
          if (mG(ZG) && null !== ZG) {
            if (GG.has(ZG)) return null;
            GG.add(ZG)
          }
          return ZG
        }
      }())
    }

    function Pb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const bG = {};
      for (const [ZG, wG] of Object.entries(GG)) bG[ZG] = mG(wG) && null !== wG ? jb(wG) : String(wG);
      return bG
    }
    var Mb = class GG {
      constructor() {
        var bG = this;
        let ZG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hG;
        this.context = ZG, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = GG => {
          this.adopting = !0;
          try {
            var bG;
            null === (bG = this.context.api) || void 0 === bG || bG.setSession(GG)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: GG = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return bG.updateUserSession({
            refreshActivity: GG
          })
        }, this.recordActivity = vb({
          fetchUserSession: GG.fetchUserSession,
          storeUserSession: GG.storeUserSession,
          updateInterval: kG
        }), this.updateUserSession = Fb({
          fetchUserSession: GG.fetchUserSession,
          storeUserSession: GG.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: kG
        }, ZG), this.init()
      }
      static removeUserSession() {
        Zb(SG, GG.storageTypeLocal)
      }
      static storeUserSession(bG) {
        bb(SG, jb(bG), GG.storageTypeLocal)
      }
      static fetchUserSession() {
        const bG = Gb(SG, GG.storageTypeLocal);
        return bG ? JSON.parse(bG) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var GG;
            this.updateSession({
              refreshActivity: !1
            });
            const bG = null === (GG = this.context.api) || void 0 === GG || null === (GG = GG.getSession()) || void 0 === GG ? void 0 : GG.id;
            bG && this.recordActivity(bG)
          }
        })), this.context.metas.addListener(cb({
          fetchUserSession: GG.fetchUserSession,
          storeUserSession: GG.storeUserSession
        }, this.context))
      }
    };
    Mb.storageTypeLocal = xG;
    var Ab = class GG {
      constructor() {
        var bG = this;
        let ZG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hG;
        this.context = ZG, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: GG = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return bG.updateUserSession({
            refreshActivity: GG
          })
        }, this.recordActivity = vb({
          fetchUserSession: GG.fetchUserSession,
          storeUserSession: GG.storeUserSession,
          updateInterval: kG
        }), this.updateUserSession = Fb({
          fetchUserSession: GG.fetchUserSession,
          storeUserSession: GG.storeUserSession,
          updateInterval: kG
        }, ZG), this.init()
      }
      static removeUserSession() {
        Zb(SG, GG.storageTypeSession)
      }
      static storeUserSession(bG) {
        bb(SG, jb(bG), GG.storageTypeSession)
      }
      static fetchUserSession() {
        const bG = Gb(SG, GG.storageTypeSession);
        return bG ? JSON.parse(bG) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var GG;
            this.updateSession({
              refreshActivity: !1
            });
            const bG = null === (GG = this.context.api) || void 0 === GG || null === (GG = GG.getSession()) || void 0 === GG ? void 0 : GG.id;
            bG && this.recordActivity(bG)
          }
        })), this.context.metas.addListener(cb({
          fetchUserSession: GG.fetchUserSession,
          storeUserSession: GG.storeUserSession
        }, this.context))
      }
    };
    Ab.storageTypeSession = OG;
    const sb = new WeakMap;

    function qb(GG) {
      let bG = sb.get(GG);
      if (!bG) {
        let ZG = [],
          wG = [];
        bG = {
          addSessionUpdateListener: GG => {
            ZG.push(GG)
          },
          removeSessionUpdateListener: GG => {
            ZG = ZG.filter((bG => bG !== GG))
          },
          notifySessionUpdate: GG => {
            ZG.forEach((bG => bG(GG)))
          },
          shouldCapture: () => wG.every((GG => GG())),
          addCaptureFilter: GG => {
            wG.push(GG)
          },
          removeCaptureFilter: GG => {
            wG = wG.filter((bG => bG !== GG))
          }
        }, sb.set(GG, bG)
      }
      return bG
    }
    var nb = class {
      constructor(GG, bG, ZG) {
        this.metas = GG, this.transports = bG, this.onActivate = ZG, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = GG => {
          var bG, ZG, wG;
          const SG = this.pending;
          var LG, yG;
          if ("overrides" === GG.type) return void(this.pending = {
            reset: null !== (LG = null === SG || void 0 === SG ? void 0 : SG.reset) && void 0 !== LG && LG,
            inheritOverrides: null === (yG = null === SG || void 0 === SG ? void 0 : SG.inheritOverrides) || void 0 === yG || yG,
            session: Vb(Vb({}, null === SG || void 0 === SG ? void 0 : SG.session), {}, {
              overrides: Vb(Vb({}, null === SG || void 0 === SG ? void 0 : SG.session.overrides), GG.overrides)
            })
          });
          const kG = GG.session,
            UG = HG(kG) || null != kG && "id" in kG && !kG.id,
            YG = null !== (bG = null === kG || void 0 === kG ? void 0 : kG.overrides) && void 0 !== bG ? bG : null === SG || void 0 === SG ? void 0 : SG.session.overrides;
          this.pending = {
            reset: UG || !(null === kG || void 0 === kG ? void 0 : kG.id) && null !== (ZG = null === SG || void 0 === SG ? void 0 : SG.reset) && void 0 !== ZG && ZG,
            inheritOverrides: !(!GG.overrides && void 0 !== (null === kG || void 0 === kG ? void 0 : kG.overrides)) && (null === (wG = null === SG || void 0 === SG ? void 0 : SG.inheritOverrides) || void 0 === wG || wG),
            session: {
              id: null === kG || void 0 === kG ? void 0 : kG.id,
              attributes: (null === kG || void 0 === kG ? void 0 : kG.attributes) && Vb({}, kG.attributes),
              overrides: GG.overrides ? Vb(Vb({}, null === SG || void 0 === SG ? void 0 : SG.session.overrides), GG.overrides) : YG && Vb({}, YG)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var GG, bG;
        this.waiting = !0, qb(this.metas).addSessionUpdateListener(this.recordUpdate), qb(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (GG = (bG = this.metas).addCaptureListener) || void 0 === GG || GG.call(bG, this.activate), this.activate()
      }
      destroy() {
        var GG, bG;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), qb(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (GG = (bG = this.metas).removeCaptureListener) || void 0 === GG || GG.call(bG, this.activate), qb(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function gb(GG) {
      return (null === GG || void 0 === GG ? void 0 : GG.persistent) ? Mb : Ab
    }

    function eb() {}
    let Rb = function(GG) {
      return GG[GG.OFF = 0] = "OFF", GG[GG.ERROR = 1] = "ERROR", GG[GG.WARN = 2] = "WARN", GG[GG.INFO = 3] = "INFO", GG[GG.VERBOSE = 4] = "VERBOSE", GG
    }({});
    const Tb = {
        debug: eb,
        error: eb,
        info: eb,
        prefix: "Faro",
        warn: eb
      },
      Hb = 1;

    function tb(GG) {
      return tb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
        return typeof GG
      } : function(GG) {
        return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
      }, tb(GG)
    }

    function Db(GG) {
      var bG = function(GG, bG) {
        if ("object" != tb(GG) || !GG) return GG;
        var ZG = GG[Symbol.toPrimitive];
        if (void 0 !== ZG) {
          var wG = ZG.call(GG, bG || "default");
          if ("object" != tb(wG)) return wG;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === bG ? String : Number)(GG)
      }(GG, "string");
      return "symbol" == tb(bG) ? bG : bG + ""
    }

    function Nb(GG, bG, ZG) {
      return (bG = Db(bG)) in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }

    function Ob(GG, bG) {
      var ZG = Object.keys(GG);
      if (Object.getOwnPropertySymbols) {
        var wG = Object.getOwnPropertySymbols(GG);
        bG && (wG = wG.filter((function(bG) {
          return Object.getOwnPropertyDescriptor(GG, bG).enumerable
        }))), ZG.push.apply(ZG, wG)
      }
      return ZG
    }

    function xb(GG) {
      for (var bG = 1; bG < arguments.length; bG++) {
        var ZG = null != arguments[bG] ? arguments[bG] : {};
        bG % 2 ? Ob(Object(ZG), !0).forEach((function(bG) {
          Nb(GG, bG, ZG[bG])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : Ob(Object(ZG)).forEach((function(bG) {
          Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
        }))
      }
      return GG
    }
    const Bb = xb({}, console);
    var GZ = class {
        constructor() {
          this.unpatchedConsole = Bb, this.internalLogger = Tb, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
          this.internalLogger.debug(`${this.name}\n`, ...bG)
        }
        logInfo() {
          for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
          this.internalLogger.info(`${this.name}\n`, ...bG)
        }
        logWarn() {
          for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
          this.internalLogger.warn(`${this.name}\n`, ...bG)
        }
        logError() {
          for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
          this.internalLogger.error(`${this.name}\n`, ...bG)
        }
      },
      bZ = class extends GZ {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ZZ = "2.12.1";
    var wZ = class extends bZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ZZ, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(GG) {
        var bG;
        const ZG = GG.session;
        if (ZG && ZG.id !== (null === (bG = this.notifiedSession) || void 0 === bG ? void 0 : bG.id)) {
          var wG;
          if (this.isAdoptingSession()) return void(this.notifiedSession = ZG);
          if (this.notifiedSession && this.notifiedSession.id === (null === (wG = ZG.attributes) || void 0 === wG ? void 0 : wG.previousSession)) return this.api.pushEvent(ib, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = ZG);
          this.notifiedSession = ZG, this.api.pushEvent(Xb, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(GG, bG, ZG) {
        const wG = null === ZG || void 0 === ZG ? void 0 : ZG.session;
        let SG, LG, yG = GG.fetchUserSession();
        if (bG.persistent && bG.maxSessionPersistenceTime && yG) {
          const GG = fb();
          yG.lastActivity < GG - bG.maxSessionPersistenceTime && (Mb.removeUserSession(), yG = null)
        }
        const kG = Ib(yG);
        if ((null === ZG || void 0 === ZG ? void 0 : ZG.reset) || !kG || (null === wG || void 0 === wG ? void 0 : wG.id) && wG.id !== (null === yG || void 0 === yG ? void 0 : yG.sessionId)) {
          var UG, YG, VG, pG, fG, QG;
          LG = mb({
            sessionId: (null === ZG || void 0 === ZG ? void 0 : ZG.reset) ? void 0 : null !== (UG = null === wG || void 0 === wG ? void 0 : wG.id) && void 0 !== UG ? UG : null === (YG = bG.session) || void 0 === YG ? void 0 : YG.id,
            isSampled: pb(this)
          }, this);
          const GG = LG.sessionId,
            KG = ZG && kG ? null === yG || void 0 === yG || null === (VG = yG.sessionMeta) || void 0 === VG ? void 0 : VG.overrides : void 0,
            hG = KG ? Vb(Vb({}, null === (pG = bG.session) || void 0 === pG ? void 0 : pG.overrides), KG) : null === (fG = bG.session) || void 0 === fG ? void 0 : fG.overrides;
          LG.sessionMeta = Vb({
            id: GG,
            attributes: Vb({
              isSampled: LG.isSampled.toString()
            }, null === (QG = bG.session) || void 0 === QG ? void 0 : QG.attributes)
          }, hG ? {
            overrides: hG
          } : {}), SG = Xb
        } else {
          var KG, hG;
          const GG = null === yG || void 0 === yG ? void 0 : yG.sessionId;
          LG = mb({
            sessionId: GG,
            isSampled: yG.isSampled || !1,
            started: null === yG || void 0 === yG ? void 0 : yG.started
          }, this);
          const ZG = null === yG || void 0 === yG ? void 0 : yG.sessionMeta,
            wG = Vb(Vb({}, null === (KG = bG.session) || void 0 === KG ? void 0 : KG.overrides), null === ZG || void 0 === ZG ? void 0 : ZG.overrides);
          LG.sessionMeta = Vb(Vb({}, bG.session), {}, {
            id: GG,
            attributes: Vb(Vb(Vb({}, null === (hG = bG.session) || void 0 === hG ? void 0 : hG.attributes), null === ZG || void 0 === ZG ? void 0 : ZG.attributes), {}, {
              isSampled: LG.isSampled.toString()
            }),
            overrides: wG
          }), SG = ub
        }
        var dG;
        if (wG && (LG.sessionMeta = Vb(Vb({}, LG.sessionMeta), {}, {
            attributes: Vb(Vb(Vb({}, null === (dG = LG.sessionMeta) || void 0 === dG ? void 0 : dG.attributes), wG.attributes), {}, {
              isSampled: LG.isSampled.toString()
            })
          }), wG.overrides)) {
          const GG = (null === ZG || void 0 === ZG ? void 0 : ZG.inheritOverrides) ? Vb(Vb({}, LG.sessionMeta.overrides), wG.overrides) : wG.overrides;
          Object.keys(GG).length > 0 ? LG.sessionMeta.overrides = GG : delete LG.sessionMeta.overrides
        }
        return {
          initialSession: LG,
          lifecycleType: SG
        }
      }
      registerBeforeSendHook(GG) {
        var bG;
        this.beforeSendHook = bG => {
          var ZG, wG;
          const SG = null === (ZG = bG.meta.session) || void 0 === ZG ? void 0 : ZG.id;
          SG && !this.transports.isPaused() && GG(SG);
          const LG = null === (wG = bG.meta.session) || void 0 === wG ? void 0 : wG.attributes;
          if (LG && "true" === (null === LG || void 0 === LG ? void 0 : LG.isSampled)) {
            var yG;
            let GG = JSON.parse(JSON.stringify(bG));
            const ZG = null === (yG = GG.meta.session) || void 0 === yG ? void 0 : yG.attributes;
            var kG;
            if (null === ZG || void 0 === ZG || delete ZG.isSampled, 0 === Object.keys(null !== ZG && void 0 !== ZG ? ZG : {}).length) null === (kG = GG.meta.session) || void 0 === kG || delete kG.attributes;
            return GG
          }
          return null
        }, null === (bG = this.transports) || void 0 === bG || bG.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var GG;
        this.logDebug("init session instrumentation");
        const bG = document.prerendering;
        var ZG;
        if ((null === (GG = this.config.sessionTracking) || void 0 === GG ? void 0 : GG.enabled) && (bG || this.prerenderSession)) return null !== (ZG = this.prerenderSession) && void 0 !== ZG || (this.prerenderSession = new nb(this.metas, this.transports, (GG => {
          this.prerenderSession = void 0, this.initializeSession(GG)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(GG) {
        const bG = this.config.sessionTracking;
        if (null === bG || void 0 === bG ? void 0 : bG.enabled) {
          var ZG, wG;
          const SG = gb(bG),
            LG = new SG(this);
          this.isAdoptingSession = LG.isAdopting, this.registerBeforeSendHook(LG.recordActivity);
          const {
            initialSession: yG,
            lifecycleType: kG
          } = this.createInitialSession(SG, bG, GG);
          SG.storeUserSession(yG);
          const UG = yG.sessionMeta;
          this.notifiedSession = UG, this.api.setSession(UG), this.captureListener = () => {
            this.transports.isPaused() || LG.updateSession({
              refreshActivity: !1
            })
          }, null === (ZG = (wG = this.metas).addCaptureListener) || void 0 === ZG || ZG.call(wG, this.captureListener), kG === Xb && this.api.pushEvent(Xb, {}, void 0, {
            skipDedupe: !0
          }), kG === ub && this.api.pushEvent(ub, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var GG, bG, ZG;
        (null === (GG = this.prerenderSession) || void 0 === GG || GG.destroy(), this.captureListener) && (null === (bG = (ZG = this.metas).removeCaptureListener) || void 0 === bG || bG.call(ZG, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function SZ(GG, bG, ZG, wG) {
      const SG = {
        filename: GG || document.location.href,
        function: bG || "?"
      };
      return void 0 !== ZG && (SG.lineno = ZG), void 0 !== wG && (SG.colno = wG), SG
    }
    const LZ = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      yZ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      kZ = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      UZ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      YZ = "safari-extension",
      VZ = "safari-web-extension",
      pZ = /Minified React error #\d+;/i;

    function fZ(GG, bG) {
      const ZG = null === GG || void 0 === GG ? void 0 : GG.includes(YZ),
        wG = !ZG && (null === GG || void 0 === GG ? void 0 : GG.includes("safari-web-extension"));
      return ZG || wG ? [(null === GG || void 0 === GG ? void 0 : GG.includes("@")) ? GG.split("@")[0] : GG, ZG ? `${YZ}:${bG}` : `${VZ}:${bG}`] : [GG, bG]
    }
    const QZ = 1024;

    function KZ(GG) {
      let bG = [];
      GG.stacktrace ? bG = GG.stacktrace.split("\n").filter(((GG, bG) => bG % 2 === 0)) : GG.stack && (bG = GG.stack.split("\n"));
      const ZG = bG.reduce(((bG, ZG, wG) => {
        if (ZG.length > QZ) return bG;
        let SG, LG, yG, kG, UG;
        if (SG = LZ.exec(ZG)) {
          if (LG = SG[1], yG = SG[2], kG = SG[3], UG = SG[4], null === yG || void 0 === yG ? void 0 : yG.startsWith("eval")) {
            const GG = yZ.exec(yG);
            GG && (yG = GG[1], kG = GG[2], UG = GG[3])
          }
          yG = (null === yG || void 0 === yG ? void 0 : yG.startsWith("address at ")) ? yG.substring(11) : yG, [LG, yG] = fZ(LG, yG)
        } else if (SG = kZ.exec(ZG)) {
          if (LG = SG[1], yG = SG[3], kG = SG[4], UG = SG[5], yG && yG.includes(" > eval")) {
            const GG = UZ.exec(yG);
            GG && (LG = LG || "eval", yG = GG[1], kG = GG[2])
          } else 0 === wG && !UG && uG(GG.columnNumber) && (UG = String(GG.columnNumber + 1));
          [LG, yG] = fZ(LG, yG)
        }
        return (yG || LG) && bG.push(SZ(yG, LG, kG ? Number(kG) : void 0, UG ? Number(UG) : void 0)), bG
      }), []);
      return pZ.test(GG.message) ? ZG.slice(1) : ZG
    }

    function hZ(GG) {
      return {
        frames: KZ(GG)
      }
    }
    const dZ = "http-request-start",
      JZ = "http-request-end";
    var rZ = class GG {
      constructor() {
        this.subscribers = []
      }
      subscribe(GG) {
        return this.subscribers.push(GG), {
          unsubscribe: () => this.unsubscribe(GG)
        }
      }
      unsubscribe(GG) {
        this.subscribers = this.subscribers.filter((bG => bG !== GG))
      }
      notify(GG) {
        this.subscribers.forEach((bG => bG(GG)))
      }
      first() {
        const bG = new GG,
          ZG = GG => {
            bG.notify(GG), wG.unsubscribe()
          },
          wG = this.subscribe(ZG),
          SG = bG.unsubscribe.bind(bG);
        return this.withUnsubscribeOverride(bG, SG, ZG)
      }
      takeWhile(bG) {
        const ZG = new GG,
          wG = GG => {
            bG(GG) ? ZG.notify(GG) : ZG.unsubscribe(wG)
          };
        this.subscribe(wG);
        const SG = ZG.unsubscribe.bind(ZG);
        return this.withUnsubscribeOverride(ZG, SG, wG)
      }
      filter(bG) {
        const ZG = new GG,
          wG = GG => {
            bG(GG) && ZG.notify(GG)
          };
        this.subscribe(wG);
        const SG = ZG.unsubscribe.bind(ZG);
        return this.withUnsubscribeOverride(ZG, SG, wG)
      }
      merge() {
        const bG = new GG,
          ZG = [];
        for (var wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
        SG.forEach((GG => {
          const wG = GG.subscribe((GG => {
            bG.notify(GG)
          }));
          ZG.push(wG)
        }));
        const yG = bG.unsubscribeAll.bind(bG);
        return bG.unsubscribe = () => {
          ZG.forEach((GG => GG.unsubscribe())), yG()
        }, bG
      }
      withUnsubscribeOverride(GG, bG, ZG) {
        return GG.unsubscribe = GG => {
          bG(GG), this.unsubscribe(ZG)
        }, GG
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let zZ = function(GG) {
      return GG.TRACE = "trace", GG.DEBUG = "debug", GG.INFO = "info", GG.LOG = "log", GG.WARN = "warn", GG.ERROR = "error", GG
    }({});
    const EZ = "log",
      oZ = ["trace", "debug", "info", "log", "warn", "error"];
    let XZ, uZ = !1;
    const iZ = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      CZ = "Error",
      WZ = GG => GG.map((GG => mG(GG) ? jb(GG) : String(GG))).join(" ");

    function mZ(GG) {
      let bG, ZG, wG, SG, LG = [];
      if (AG(GG) && GG.error) bG = GG.error.message, ZG = GG.error.name, LG = KZ(GG.error);
      else if ((wG = sG(GG)) || qG(GG)) {
        const {
          name: SG,
          message: LG
        } = GG;
        ZG = null !== SG && void 0 !== SG ? SG : wG ? "DOMError" : "DOMException", bG = LG ? `${ZG}: ${LG}` : ZG
      } else MG(GG) ? (ZG = GG.name, bG = GG.message, LG = KZ(GG)) : (mG(GG) || (SG = jG(GG))) && (ZG = SG ? GG.constructor.name : void 0, bG = `Non-Error exception captured with keys: ${Object.keys(GG)}`);
      return [bG, ZG, LG]
    }

    function IZ(GG) {
      const [bG, ZG, wG, SG, LG] = GG;
      let yG, kG, UG = [];
      const YG = XG(bG),
        VG = SZ(ZG, "?", wG, SG);
      return LG || !YG ? ([yG, kG, UG] = mZ(null !== LG && void 0 !== LG ? LG : bG), 0 === UG.length && (UG = [VG])) : YG && ([yG, kG] = function(GG) {
        var bG, ZG;
        const wG = GG.match(iZ),
          SG = null !== (bG = null === wG || void 0 === wG ? void 0 : wG[1]) && void 0 !== bG ? bG : CZ;
        return [null !== (ZG = null === wG || void 0 === wG ? void 0 : wG[2]) && void 0 !== ZG ? ZG : GG, SG]
      }(bG), UG = [VG]), {
        value: yG,
        type: kG,
        stackFrames: UG
      }
    }

    function FZ(GG, bG) {
      return MG(GG[0]) ? IZ(GG) : {
        value: bG(GG)
      }
    }
    const vZ = GG => GG.map((GG => {
      try {
        return String(GG)
      } catch (bG) {
        return ""
      }
    })).join(" ");
    var aZ = class GG extends bZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ZZ, this.errorSerializer = vZ
      }
      initialize() {
        var bG, ZG;
        const wG = this.config.consoleInstrumentation,
          SG = (null === wG || void 0 === wG ? void 0 : wG.serializeErrors) || !!(null === wG || void 0 === wG ? void 0 : wG.errorSerializer);
        this.errorSerializer = SG ? null !== (bG = null === wG || void 0 === wG ? void 0 : wG.errorSerializer) && void 0 !== bG ? bG : WZ : vZ;
        const LG = null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.disabledLevels) && void 0 !== ZG ? ZG : GG.defaultDisabledLevels,
          yG = function(GG) {
            if (XZ || (XZ = new rZ), !uZ) {
              const bG = null !== GG && void 0 !== GG ? GG : Bb;
              oZ.forEach((GG => {
                console[GG] = function() {
                  for (var ZG, wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
                  XZ.notify({
                    type: "console",
                    level: GG,
                    args: SG
                  }), null === (ZG = bG[GG]) || void 0 === ZG || ZG.apply(console, SG)
                }
              })), uZ = !0
            }
            return XZ
          }(this.unpatchedConsole);
        this.subscription = yG.subscribe((bG => {
          let {
            level: ZG,
            args: SG
          } = bG;
          if (!LG.includes(ZG)) try {
            if (ZG !== zZ.ERROR || (null === wG || void 0 === wG ? void 0 : wG.consoleErrorAsLog))
              if (ZG === zZ.ERROR && (null === wG || void 0 === wG ? void 0 : wG.consoleErrorAsLog)) {
                const {
                  value: bG,
                  type: wG,
                  stackFrames: LG
                } = FZ(SG, this.errorSerializer);
                this.api.pushLog(bG ? [GG.consoleErrorPrefix + bG] : SG, {
                  level: ZG,
                  context: {
                    value: null !== bG && void 0 !== bG ? bG : "",
                    type: null !== wG && void 0 !== wG ? wG : "",
                    stackFrames: (null === LG || void 0 === LG ? void 0 : LG.length) ? WZ(LG) : ""
                  }
                })
              } else this.api.pushLog(SG, {
                level: ZG
              });
            else {
              const {
                value: bG,
                type: ZG,
                stackFrames: wG
              } = FZ(SG, this.errorSerializer);
              if (bG && !ZG && !wG) return void this.api.pushError(new Error(GG.consoleErrorPrefix + bG));
              this.api.pushError(new Error(GG.consoleErrorPrefix + bG), {
                type: ZG,
                stackFrames: wG
              })
            }
          } catch (yG) {
            this.logError(yG)
          }
        }))
      }
      destroy() {
        var GG;
        null === (GG = this.subscription) || void 0 === GG || GG.unsubscribe(), this.subscription = void 0
      }
    };
    aZ.defaultDisabledLevels = [zZ.DEBUG, zZ.TRACE, zZ.LOG], aZ.consoleErrorPrefix = "console.error: ";
    const cZ = [];
    var lZ = class extends bZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ZZ
      }
      initialize() {
        this.logDebug("Initializing"),
          function(GG) {
            const bG = window.onerror;
            window.onerror = function() {
              for (var ZG = arguments.length, wG = new Array(ZG), SG = 0; SG < ZG; SG++) wG[SG] = arguments[SG];
              try {
                const {
                  value: bG,
                  type: ZG,
                  stackFrames: SG
                } = IZ(wG), LG = wG[4];
                if (bG) {
                  const wG = {
                    type: ZG,
                    stackFrames: SG
                  };
                  null != LG && (wG.originalError = LG), GG.pushError(new Error(bG), wG)
                }
              } finally {
                null === bG || void 0 === bG || bG.apply(window, wG)
              }
            }
          }(this.api),
          function(GG) {
            const bG = bG => {
              var ZG;
              let wG, SG, LG = bG;
              if (LG.reason) LG = bG.reason;
              else if (null === (ZG = bG.detail) || void 0 === ZG ? void 0 : ZG.reason) {
                var yG;
                LG = null === (yG = bG.detail) || void 0 === yG ? void 0 : yG.reason
              }
              let kG = [];
              cG(LG) ? (wG = `Non-Error promise rejection captured with value: ${String(LG)}`, SG = "UnhandledRejection") : [wG, SG, kG] = mZ(LG), wG && GG.pushError(new Error(wG), {
                type: SG,
                stackFrames: kG
              })
            };
            window.addEventListener("unhandledrejection", bG), cZ.push(bG)
          }(this.api)
      }
    };
    const jZ = "unknown";
    var PZ = class extends bZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ZZ, this.waitingForActivation = !1, this.sendViewChangedEvent = GG => {
          var bG;
          if (this.waitingForActivation || document.prerendering) return;
          const ZG = GG.view;
          if (ZG && ZG.name !== (null === (bG = this.notifiedView) || void 0 === bG ? void 0 : bG.name)) {
            var wG, SG, LG;
            const GG = null !== (wG = null === (SG = this.notifiedView) || void 0 === SG ? void 0 : SG.name) && void 0 !== wG ? wG : jZ;
            this.notifiedView = ZG, this.api.pushEvent(ob, {
              fromView: GG,
              toView: null !== (LG = ZG.name) && void 0 !== LG ? LG : jZ
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
    class MZ {
      t;
      o = 0;
      i = [];
      l(GG) {
        if (GG.hadRecentInput) return;
        const bG = this.i[0],
          ZG = this.i.at(-1);
        this.o && bG && ZG && GG.startTime - ZG.startTime < 1e3 && GG.startTime - bG.startTime < 5e3 ? (this.o += GG.value, this.i.push(GG)) : (this.o = GG.value, this.i = [GG]), this.t?.(GG)
      }
    }
    const AZ = () => {
        const GG = performance.getEntriesByType("navigation")[0];
        if (GG && GG.responseStart > 0 && GG.responseStart < performance.now()) return GG
      },
      sZ = GG => {
        if ("loading" === document.readyState) return "loading";
        const bG = AZ();
        if (bG) {
          if (GG < bG.domInteractive) return "loading";
          if (0 === bG.domContentLoadedEventStart || GG < bG.domContentLoadedEventStart) return "dom-interactive";
          if (0 === bG.domComplete || GG < bG.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      qZ = GG => {
        const bG = GG.nodeName;
        return 1 === GG.nodeType ? bG.toLowerCase() : bG.toUpperCase().replace(/^#/, "")
      },
      nZ = GG => {
        let bG = "";
        try {
          for (; 9 !== GG?.nodeType;) {
            const ZG = GG,
              wG = ZG.id ? "#" + ZG.id : [qZ(ZG), ...Array.from(ZG.classList ?? []).sort()].join(".");
            if (bG.length + wG.length > 99) return bG || wG;
            if (bG = bG ? wG + ">" + bG : wG, ZG.id) break;
            GG = ZG.parentNode
          }
        } catch {}
        return bG
      },
      gZ = new WeakMap;

    function eZ(GG, bG) {
      let ZG = gZ.get(bG);
      return ZG || (ZG = new WeakMap, gZ.set(bG, ZG)), ZG.get(GG) || ZG.set(GG, new bG), ZG.get(GG)
    }
    let RZ = -1;
    const TZ = () => RZ,
      HZ = GG => {
        addEventListener("pageshow", (bG => {
          bG.persisted && (RZ = bG.timeStamp, GG(bG))
        }), !0)
      },
      tZ = (GG, bG, ZG, wG) => {
        let SG, LG;
        return yG => {
          bG.value >= 0 && (yG || wG) && (LG = bG.value - (SG ?? 0), (LG || void 0 === SG) && (SG = bG.value, bG.delta = LG, bG.rating = ((GG, bG) => GG > bG[1] ? "poor" : GG > bG[0] ? "needs-improvement" : "good")(bG.value, ZG), GG(bG)))
        }
      },
      DZ = GG => {
        requestAnimationFrame((() => requestAnimationFrame((() => GG()))))
      },
      NZ = () => AZ()?.activationStart ?? 0;
    let OZ = -1;
    const xZ = new Set,
      BZ = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Gw = GG => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === GG.type)
            for (const GG of xZ) GG();
          isFinite(OZ) || (OZ = "visibilitychange" === GG.type ? GG.timeStamp : 0, removeEventListener("prerenderingchange", Gw, !0))
        }
      },
      bw = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (OZ = 1 / 0), OZ < 0) {
          const GG = NZ(),
            bG = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((bG => "hidden" === bG.name && bG.startTime >= GG))?.startTime;
          OZ = bG ?? BZ(), addEventListener("visibilitychange", Gw, !0), addEventListener("prerenderingchange", Gw, !0), HZ((() => {
            setTimeout((() => {
              OZ = BZ()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return OZ
          },
          onHidden(GG) {
            xZ.add(GG)
          }
        }
      },
      Zw = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0,
          yG = arguments.length > 6 ? arguments[6] : void 0;
        const kG = AZ(),
          UG = kG?.navigationId || 0;
        let YG = "navigate";
        return ZG ? YG = ZG : TZ() >= 0 ? YG = "back-forward-cache" : kG && (document.prerendering || NZ() > 0 ? YG = "prerender" : document.wasDiscarded ? YG = "restore" : kG.type && (YG = kG.type.replace(/_/g, "-"))), {
          name: GG,
          value: bG,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: YG,
          navigationId: wG || UG,
          navigationInteractionId: SG,
          navigationURL: LG || kG?.name,
          navigationStartTime: yG || 0
        }
      },
      ww = function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const wG = GG.filter((GG => PerformanceObserver.supportedEntryTypes.includes(GG)));
          if (wG.length > 0) {
            const GG = new PerformanceObserver((GG => {
              queueMicrotask((() => {
                const ZG = GG.getEntries();
                wG.length > 1 && ZG.sort(((GG, bG) => GG.startTime + GG.duration - (bG.startTime + bG.duration))), bG(ZG)
              }))
            }));
            for (const bG of wG) GG.observe({
              type: bG,
              buffered: !0,
              ...ZG
            });
            return GG
          }
        } catch {}
      },
      Sw = GG => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && GG && GG.reportSoftNavs,
      Lw = (GG, bG) => {
        if (GG.set(bG.navigationId, bG), GG.size > 2) {
          const bG = GG.keys().next().value;
          void 0 !== bG && GG.delete(bG)
        }
      },
      yw = GG => {
        let bG = !1;
        return () => {
          bG || (GG(), bG = !0)
        }
      };
    class kw {
      u
    }
    const Uw = GG => {
        document.prerendering ? addEventListener("prerenderingchange", GG, !0) : GG()
      },
      Yw = [1800, 3e3],
      Vw = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZG = Sw(bG);
        Uw((() => {
          const wG = eZ(bG, kw),
            SG = bw();
          let LG, yG = Zw("FCP");
          const kG = ww(["paint"], (GG => {
            for (const bG of GG) "first-contentful-paint" === bG.name && (kG.disconnect(), bG.startTime < SG.firstHiddenTime && (yG.value = Math.max(bG.startTime - NZ(), 0), yG.entries.push(bG), yG.navigationId = bG.navigationId || yG.navigationId, LG(!0)))
          }));
          kG && (LG = tZ(GG, yG, Yw, bG.reportAllChanges), HZ((ZG => {
            yG = Zw("FCP", -1, "back-forward-cache", yG.navigationId, yG.navigationInteractionId, yG.navigationURL, TZ()), LG = tZ(GG, yG, Yw, bG.reportAllChanges), DZ((() => {
              yG.value = performance.now() - ZG.timeStamp, LG(!0)
            }))
          }))), ZG && ww(["soft-navigation"], (ZG => {
            ZG.forEach((ZG => {
              wG.u && ZG.navigationId && Lw(wG.u, ZG);
              const SG = Math.max((ZG.presentationTime || ZG.paintTime || 0) - ZG.startTime, 0);
              yG = Zw("FCP", SG, "soft-navigation", ZG.navigationId, ZG.interactionId, ZG.name, ZG.startTime), LG = tZ(GG, yG, Yw, bG.reportAllChanges), LG(!0)
            }))
          }), bG)
        }))
      },
      pw = [.1, .25],
      fw = GG => GG.find((GG => 1 === GG.node?.nodeType)) || GG[0];
    let Qw = 0,
      Kw = 1 / 0,
      hw = 0;
    const dw = GG => {
      for (const bG of GG) bG.interactionId && (Kw = Math.min(Kw, bG.interactionId), hw = Math.max(hw, bG.interactionId), Qw = hw ? (hw - Kw) / 7 + 1 : 0)
    };
    let Jw;
    const rw = () => Jw ? Qw : performance.interactionCount ?? 0;
    class zw {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return rw() - this.h
      }
      D() {
        this.h = rw(), this.v.length = 0, this.p.clear()
      }
      S(GG) {
        const bG = this.T(),
          ZG = Math.min(this.v.length - 1, Math.floor(bG / 50));
        return !bG || -1 !== ZG || "soft-navigation" !== GG && "back-forward-cache" !== GG ? this.v[ZG] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(GG) {
        if (this.m?.(GG), !GG.interactionId) return;
        const bG = this.v.at(-1);
        let ZG = this.p.get(GG.interactionId);
        if (ZG || this.v.length < 10 || GG.duration > bG.k) {
          if (ZG ? GG.duration > ZG.k ? (ZG.entries = [GG], ZG.k = GG.duration) : GG.duration === ZG.k && GG.startTime === ZG.entries[0].startTime && ZG.entries.push(GG) : (ZG = {
              id: GG.interactionId,
              entries: [GG],
              k: GG.duration
            }, this.p.set(ZG.id, ZG), this.v.push(ZG)), this.v.sort(((GG, bG) => bG.k - GG.k)), this.v.length > 10) {
            const GG = this.v.splice(10);
            for (const bG of GG) this.p.delete(bG.id)
          }
          this.M?.(ZG)
        }
      }
    }
    const Ew = GG => {
        const bG = "requestIdleCallback" in globalThis ? 1e3 : 0,
          ZG = globalThis.requestIdleCallback || setTimeout,
          wG = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) GG();
        else {
          const SG = yw(GG);
          let LG = -1;
          const yG = () => {
            wG(LG), SG()
          };
          addEventListener("visibilitychange", yG, {
            once: !0,
            capture: !0
          }), LG = ZG((() => {
            removeEventListener("visibilitychange", yG, {
              capture: !0
            }), SG()
          }), {
            timeout: bG
          })
        }
      },
      ow = [200, 500],
      Xw = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZG = eZ(bG = Object.assign({}, bG), zw);
        let wG = [],
          SG = [],
          LG = 0;
        const yG = new WeakMap,
          kG = new WeakMap;
        let UG = !1;
        const YG = () => {
            UG || (UG = !0, Ew(VG))
          },
          VG = () => {
            const GG = new Set(ZG.v.map((GG => yG.get(GG.entries[0])))),
              bG = SG.length - 10;
            SG = SG.filter(((ZG, wG) => wG >= bG || GG.has(ZG)));
            const kG = new Set;
            for (const ZG of SG) {
              const GG = pG(ZG.startTime, ZG.processingEnd);
              for (const bG of GG) kG.add(bG)
            }
            const YG = wG.length - 10;
            wG = wG.filter(((GG, bG) => kG.has(GG) || bG >= YG && GG.startTime > LG)), UG = !1
          };
        ZG.m = GG => {
          const ZG = GG.startTime + GG.duration;
          let wG;
          LG = Math.max(LG, GG.processingEnd);
          for (let LG = SG.length - 1; LG >= 0; LG--) {
            const yG = SG[LG];
            if (Math.abs(ZG - yG.renderTime) <= 8) {
              wG = yG, wG.startTime = Math.min(GG.startTime, wG.startTime), wG.processingStart = Math.min(GG.processingStart, wG.processingStart), wG.processingEnd = Math.max(GG.processingEnd, wG.processingEnd), bG.includeProcessedEventEntries && wG.entries.push(GG);
              break
            }
          }
          wG || (wG = {
            startTime: GG.startTime,
            processingStart: GG.processingStart,
            processingEnd: GG.processingEnd,
            renderTime: ZG,
            entries: bG.includeProcessedEventEntries ? [GG] : []
          }, SG.push(wG)), GG.interactionId && yG.set(GG, wG), YG()
        }, ZG.M = GG => {
          if (!kG.get(GG)) {
            const ZG = GG.entries.find((GG => GG.target))?.target;
            if (ZG) {
              const wG = bG.generateTarget?.(ZG) ?? nZ(ZG);
              kG.set(GG, wG)
            } else {
              const bG = GG.entries.find((GG => GG.targetSelector))?.targetSelector;
              bG && kG.set(GG, bG)
            }
          }
        };
        const pG = (GG, bG) => {
          const ZG = [];
          for (const SG of wG)
            if (!(SG.startTime + SG.duration < GG)) {
              if (SG.startTime > bG) break;
              ZG.push(SG)
            } return ZG
        };
        ww(["long-animation-frame"], (GG => {
            wG = wG.concat(GG), YG()
          }), bG),
          function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const ZG = bw();
            Uw((() => {
              "interactionCount" in performance || Jw || (Jw = ww(["event"], dw, {
                durationThreshold: 0
              }));
              let wG, SG = Zw("INP");
              const LG = eZ(bG, zw),
                yG = (ZG, yG, kG, UG, YG) => {
                  LG.D(), SG = Zw("INP", -1, ZG, yG, kG, UG, YG), wG = tZ(GG, SG, ow, bG.reportAllChanges)
                },
                kG = () => {
                  const GG = LG.S(SG.navigationType);
                  GG && GG.k !== SG.value && (SG.value = GG.k, SG.entries = GG.entries, wG())
                },
                UG = GG => {
                  kG(), wG(!0), yG("soft-navigation", GG.navigationId, GG.interactionId, GG.name, GG.startTime)
                },
                YG = function(GG) {
                  let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Ew((() => {
                    for (const bG of GG) "soft-navigation" !== bG.entryType ? LG.l(bG) : UG(bG);
                    kG(), bG && wG(!0)
                  }))
                },
                VG = ["event", "first-input"];
              Sw(bG) && VG.push("soft-navigation");
              const pG = ww(VG, YG, {
                ...bG,
                durationThreshold: bG.durationThreshold ?? 40
              });
              wG = tZ(GG, SG, ow, bG.reportAllChanges), pG && (ZG.onHidden((() => {
                YG(pG.takeRecords(), !0)
              })), HZ((() => {
                yG("back-forward-cache", SG.navigationId, SG.navigationInteractionId, SG.navigationURL, TZ())
              })))
            }))
          }((bG => {
            GG((GG => {
              if (0 === GG.entries.length) {
                const bG = GG.navigationStartTime || 0,
                  ZG = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: GG.value,
                    loadState: sZ(bG)
                  };
                return Object.assign(GG, {
                  attribution: ZG
                })
              }
              const bG = GG.entries[0],
                wG = yG.get(bG),
                SG = Math.max(wG.processingStart, bG.startTime),
                LG = Math.max(bG.startTime + bG.duration, SG),
                UG = Math.min(wG.processingEnd, LG),
                YG = wG.entries.sort(((GG, bG) => GG.processingStart - bG.processingStart)),
                VG = pG(bG.startTime, UG),
                fG = ZG.p.get(bG.interactionId),
                QG = {
                  interactionTarget: kG.get(fG),
                  interactionType: bG.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: bG.startTime,
                  nextPaintTime: LG,
                  processedEventEntries: YG,
                  longAnimationFrameEntries: VG,
                  inputDelay: SG - bG.startTime,
                  processingDuration: UG - SG,
                  presentationDelay: LG - UG,
                  loadState: sZ(bG.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (GG => {
                const bG = GG.interactionTime,
                  ZG = GG.nextPaintTime;
                if (!GG.longAnimationFrameEntries?.length || !bG || !ZG) return;
                const wG = GG.inputDelay,
                  SG = GG.processingDuration;
                let LG, yG, kG = 0,
                  UG = 0,
                  YG = 0,
                  VG = 0;
                for (const QG of GG.longAnimationFrameEntries) {
                  UG = UG + QG.startTime + QG.duration - QG.styleAndLayoutStart;
                  for (const GG of QG.scripts) {
                    const ZG = GG.startTime + GG.duration;
                    if (ZG < bG) continue;
                    const YG = ZG - Math.max(bG, GG.startTime),
                      pG = GG.duration ? YG / GG.duration * GG.forcedStyleAndLayoutDuration : 0;
                    kG += YG - pG, UG += pG, YG > VG && (yG = GG.startTime < bG + wG ? "input-delay" : GG.startTime >= bG + wG + SG ? "presentation-delay" : "processing-duration", LG = GG, VG = YG)
                  }
                }
                const pG = GG.longAnimationFrameEntries.at(-1),
                  fG = pG ? pG.startTime + pG.duration : 0;
                fG >= bG + wG + SG && (YG = ZG - fG), LG && yG && (GG.longestScript = {
                  entry: LG,
                  subpart: yG,
                  intersectingDuration: VG
                }), GG.totalScriptDuration = kG, GG.totalStyleAndLayoutDuration = UG, GG.totalPaintDuration = YG, GG.totalUnattributedDuration = ZG - bG - kG - UG - YG
              })(QG), Object.assign(GG, {
                attribution: QG
              })
            })(bG))
          }), bG)
      };
    class uw {
      m;
      u;
      l(GG) {
        this.m?.(GG)
      }
    }
    const iw = [2500, 4e3];
    let Cw = 50;
    const Ww = [];
    ww(["resource"], (GG => {
      for (const bG of GG) Ww.push(bG), Ww.length > Cw && Ww.shift()
    }));
    const mw = [800, 1800],
      Iw = GG => {
        document.prerendering ? Uw((() => Iw(GG))) : "complete" !== document.readyState ? addEventListener("load", (() => Iw(GG)), !0) : setTimeout(GG)
      },
      Fw = "load_state",
      vw = "time_to_first_byte";
    var aw = class {
        constructor(GG, bG) {
          this.corePushMeasurement = GG, this.webVitalConfig = bG
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var GG;
          ! function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZG = eZ(bG = Object.assign({}, bG), MZ),
              wG = new WeakMap;
            ZG.t = GG => {
                if (GG?.sources?.length) {
                  const ZG = fw(GG.sources),
                    SG = ZG?.node;
                  if (SG) {
                    const GG = bG.generateTarget?.(SG) ?? nZ(SG);
                    wG.set(ZG, GG)
                  }
                }
              },
              function(GG) {
                let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const ZG = bw();
                Vw(yw((() => {
                  let wG, SG = Zw("CLS", 0);
                  const LG = eZ(bG, MZ),
                    yG = (ZG, yG, kG, UG, YG) => {
                      SG = Zw("CLS", 0, ZG, yG, kG, UG, YG), LG.o = 0, wG = tZ(GG, SG, pw, bG.reportAllChanges)
                    },
                    kG = function() {
                      let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      LG.o > SG.value && (SG.value = LG.o, SG.entries = LG.i), wG(GG)
                    },
                    UG = GG => {
                      kG(!0), yG("soft-navigation", GG.navigationId, GG.interactionId, GG.name, GG.startTime)
                    },
                    YG = GG => {
                      for (const bG of GG) "soft-navigation" !== bG.entryType ? LG.l(bG) : UG(bG);
                      kG()
                    },
                    VG = ["layout-shift"];
                  Sw(bG) && VG.push("soft-navigation");
                  const pG = ww(VG, YG);
                  pG && (wG = tZ(GG, SG, pw, bG.reportAllChanges), ZG.onHidden((() => {
                    YG(pG.takeRecords()), wG(!0)
                  })), HZ((() => {
                    yG("back-forward-cache", SG.navigationId, SG.navigationInteractionId, SG.navigationURL, TZ()), DZ(wG)
                  })), setTimeout(wG))
                })))
              }((bG => {
                GG((GG => {
                  let bG = {};
                  if (GG.entries.length) {
                    const ZG = GG.entries.reduce(((GG, bG) => GG.value > bG.value ? GG : bG));
                    if (ZG?.sources?.length) {
                      const GG = fw(ZG.sources);
                      GG && (bG = {
                        largestShiftTarget: wG.get(GG),
                        largestShiftTime: ZG.startTime,
                        largestShiftValue: ZG.value,
                        largestShiftSource: GG,
                        largestShiftEntry: ZG,
                        loadState: sZ(ZG.startTime)
                      })
                    }
                  }
                  return Object.assign(GG, {
                    attribution: bG
                  })
                })(bG))
              }), bG)
          }((GG => {
            const {
              loadState: bG,
              largestShiftValue: ZG,
              largestShiftTime: wG,
              largestShiftTarget: SG
            } = GG.attribution, LG = this.buildInitialValues(GG);
            this.addIfPresent(LG, "largest_shift_value", ZG), this.addIfPresent(LG, "largest_shift_time", wG);
            const yG = this.buildInitialContext(GG);
            this.addIfPresent(yG, Fw, bG), this.addIfPresent(yG, "largest_shift_target", SG), this.pushMeasurement(LG, yG)
          }), {
            reportAllChanges: null === (GG = this.webVitalConfig) || void 0 === GG ? void 0 : GG.reportAllChanges
          })
        }
        measureFCP() {
          var GG;
          ! function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZG = eZ(bG = Object.assign({}, bG), kw);
            Sw(bG) && (ZG.u = new Map), Vw((bG => {
              GG((GG => {
                let bG = {
                  timeToFirstByte: 0,
                  firstByteToFCP: GG.value,
                  loadState: sZ(TZ())
                };
                if ("soft-navigation" !== GG.navigationType) {
                  if (GG.entries.length) {
                    const ZG = AZ(),
                      wG = GG.entries.at(-1);
                    if (ZG) {
                      const SG = ZG.responseStart,
                        LG = ZG.activationStart || 0,
                        yG = Math.max(0, SG - LG);
                      bG = {
                        timeToFirstByte: yG,
                        firstByteToFCP: GG.value - yG,
                        loadState: sZ(GG.entries[0].startTime),
                        navigationEntry: ZG,
                        fcpEntry: wG
                      }
                    }
                  }
                } else {
                  const wG = ZG.u?.get(GG.navigationId);
                  wG && (bG = {
                    timeToFirstByte: 0,
                    firstByteToFCP: GG.value,
                    loadState: "complete",
                    navigationEntry: wG
                  })
                }
                return Object.assign(GG, {
                  attribution: bG
                })
              })(bG))
            }), bG)
          }((GG => {
            const {
              firstByteToFCP: bG,
              timeToFirstByte: ZG,
              loadState: wG
            } = GG.attribution, SG = this.buildInitialValues(GG);
            this.addIfPresent(SG, "first_byte_to_fcp", bG), this.addIfPresent(SG, vw, ZG);
            const LG = this.buildInitialContext(GG);
            this.addIfPresent(LG, Fw, wG), this.pushMeasurement(SG, LG)
          }), {
            reportAllChanges: null === (GG = this.webVitalConfig) || void 0 === GG ? void 0 : GG.reportAllChanges
          })
        }
        measureINP() {
          var GG;
          Xw((GG => {
            var bG;
            const {
              interactionTime: ZG,
              presentationDelay: wG,
              inputDelay: SG,
              processingDuration: LG,
              nextPaintTime: yG,
              loadState: kG,
              interactionTarget: UG,
              interactionType: YG,
              totalScriptDuration: VG,
              totalStyleAndLayoutDuration: pG,
              totalPaintDuration: fG,
              totalUnattributedDuration: QG,
              longestScript: KG
            } = GG.attribution, hG = this.buildInitialValues(GG);
            this.addIfPresent(hG, "interaction_time", ZG), this.addIfPresent(hG, "presentation_delay", wG), this.addIfPresent(hG, "input_delay", SG), this.addIfPresent(hG, "processing_duration", LG), this.addIfPresent(hG, "next_paint_time", yG), this.addNumberIfDefined(hG, "total_script_duration", VG), this.addNumberIfDefined(hG, "total_style_and_layout_duration", pG), this.addNumberIfDefined(hG, "total_paint_duration", fG), this.addNumberIfDefined(hG, "total_unattributed_duration", QG), this.addNumberIfDefined(hG, "longest_script_intersecting_duration", null === KG || void 0 === KG ? void 0 : KG.intersectingDuration);
            const dG = this.buildInitialContext(GG);
            this.addIfPresent(dG, Fw, kG), this.addIfPresent(dG, "interaction_target", UG), this.addIfPresent(dG, "interaction_type", YG), this.addIfPresent(dG, "longest_script_subpart", null === KG || void 0 === KG ? void 0 : KG.subpart), this.addIfPresent(dG, "longest_script_invoker_type", null === KG || void 0 === KG ? void 0 : KG.entry.invokerType), (null === (bG = this.webVitalConfig) || void 0 === bG ? void 0 : bG.trackAttributionSources) && (this.addIfPresent(dG, "longest_script_invoker", null === KG || void 0 === KG ? void 0 : KG.entry.invoker), this.addIfPresent(dG, "longest_script_source_url", null === KG || void 0 === KG ? void 0 : KG.entry.sourceURL), this.addIfPresent(dG, "longest_script_source_function_name", null === KG || void 0 === KG ? void 0 : KG.entry.sourceFunctionName), this.addIfPresent(dG, "longest_script_source_char_position", void 0 !== (null === KG || void 0 === KG ? void 0 : KG.entry.sourceCharPosition) ? String(KG.entry.sourceCharPosition) : void 0)), this.pushMeasurement(hG, dG)
          }), {
            reportAllChanges: null === (GG = this.webVitalConfig) || void 0 === GG ? void 0 : GG.reportAllChanges
          })
        }
        measureLCP() {
          var GG;
          ! function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (bG = Object.assign({}, bG)).resourceBufferSize && (Cw = bG.resourceBufferSize);
            const ZG = eZ(bG, uw),
              wG = new WeakMap;
            Sw(bG) && (ZG.u = new Map), ZG.m = GG => {
                const ZG = GG.element;
                if (ZG) {
                  const SG = bG.generateTarget?.(ZG) ?? nZ(ZG);
                  wG.set(GG, SG)
                } else GG.id && wG.set(GG, `#${GG.id}`)
              },
              function(GG) {
                let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  ZG = !1;
                const wG = Sw(bG);
                Uw((() => {
                  let SG, LG = bw(),
                    yG = Zw("LCP");
                  const kG = eZ(bG, uw),
                    UG = (wG, kG, UG, YG, VG) => {
                      yG = Zw("LCP", -1, wG, kG, UG, YG, VG), SG = tZ(GG, yG, iw, bG.reportAllChanges), ZG = !1, "soft-navigation" === wG && (LG = bw(!0))
                    },
                    YG = GG => {
                      kG.u && GG.navigationId && Lw(kG.u, GG), ZG || SG(!0), UG("soft-navigation", GG.navigationId, GG.interactionId, GG.name, GG.startTime);
                      const bG = GG.getLargestInteractionContentfulPaint?.();
                      bG && VG([bG])
                    },
                    VG = GG => {
                      bG.reportAllChanges || wG || (GG = GG.slice(-1));
                      for (const bG of GG) {
                        if (!bG) continue;
                        if ("soft-navigation" === bG.entryType) {
                          YG(bG);
                          continue
                        }
                        let GG = 0,
                          ZG = [],
                          wG = bG.startTime;
                        if ("largest-contentful-paint" === bG.entryType) GG = Math.max(bG.startTime - NZ(), 0), kG.l(bG), ZG = [bG];
                        else if ("interaction-contentful-paint" === bG.entryType) {
                          const SG = bG;
                          if (!yG.navigationId) continue;
                          if ("interactionId" in SG && SG.interactionId != yG.navigationInteractionId) continue;
                          wG = SG.largestContentfulPaint?.renderTime || 0, GG = Math.max(wG - bG.startTime, 0), SG.largestContentfulPaint && (kG.l(SG.largestContentfulPaint), ZG = [SG.largestContentfulPaint])
                        }
                        wG < LG.firstHiddenTime && (yG.value = GG, yG.entries = ZG, SG())
                      }
                    },
                    pG = ["largest-contentful-paint"];
                  wG && pG.push("interaction-contentful-paint", "soft-navigation");
                  const fG = ww(pG, VG);
                  if (fG) {
                    SG = tZ(GG, yG, iw, bG.reportAllChanges);
                    const LG = ["keydown", "click", "visibilitychange"],
                      kG = GG => {
                        if (GG.isTrusted && !ZG) {
                          const GG = yG.id;
                          Ew((() => {
                            if (!ZG) {
                              if (!wG) {
                                fG.disconnect();
                                for (const GG of LG) removeEventListener(GG, kG, {
                                  capture: !0
                                })
                              }
                              GG === yG.id && (ZG = !0, SG(!0))
                            }
                          }))
                        }
                      };
                    for (const GG of LG) addEventListener(GG, kG, {
                      capture: !0
                    });
                    HZ((wG => {
                      UG("back-forward-cache", yG.navigationId, yG.navigationInteractionId, yG.navigationURL, TZ()), SG = tZ(GG, yG, iw, bG.reportAllChanges), DZ((() => {
                        yG.value = performance.now() - wG.timeStamp, ZG = !0, SG(!0)
                      }))
                    }))
                  }
                }))
              }((bG => {
                GG((GG => {
                  let bG = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: GG.value
                  };
                  if (GG.entries.length) {
                    const SG = GG.entries.at(-1),
                      LG = GG => GG.name === SG.url && (GG.requestStart || GG.startTime) <= SG.startTime,
                      yG = SG.url && (Ww.findLast(LG) || performance.getEntriesByType("resource").findLast(LG));
                    let kG;
                    bG.target = wG.get(SG), bG.lcpEntry = SG, SG.url && (bG.url = SG.url), yG && (bG.lcpResourceEntry = yG);
                    let UG = 0,
                      YG = 0;
                    if ("soft-navigation" !== GG.navigationType ? (kG = AZ(), UG = kG?.activationStart ?? 0, YG = kG?.responseStart ?? 0) : (UG = GG.navigationStartTime || 0, kG = ZG.u?.get(GG.navigationId)), kG) {
                      const ZG = Math.max(0, YG - UG),
                        wG = Math.max(ZG, yG ? (yG.requestStart || yG.startTime) - UG : 0),
                        SG = Math.min(GG.value, Math.max(wG, yG ? yG.responseEnd - UG : 0));
                      bG = {
                        ...bG,
                        timeToFirstByte: ZG,
                        resourceLoadDelay: wG - ZG,
                        resourceLoadDuration: SG - wG,
                        elementRenderDelay: GG.value - SG,
                        navigationEntry: kG
                      }
                    }
                  }
                  return Object.assign(GG, {
                    attribution: bG
                  })
                })(bG))
              }), bG)
          }((GG => {
            var bG;
            const {
              elementRenderDelay: ZG,
              resourceLoadDelay: wG,
              resourceLoadDuration: SG,
              timeToFirstByte: LG,
              target: yG,
              url: kG,
              lcpResourceEntry: UG
            } = GG.attribution, YG = this.buildInitialValues(GG);
            this.addIfPresent(YG, "element_render_delay", ZG), this.addIfPresent(YG, "resource_load_delay", wG), this.addIfPresent(YG, "resource_load_duration", SG), this.addIfPresent(YG, vw, LG);
            const VG = this.buildInitialContext(GG);
            this.addIfPresent(VG, "element", yG), (null === (bG = this.webVitalConfig) || void 0 === bG ? void 0 : bG.trackAttributionSources) && (this.addIfPresent(VG, "resource_url", kG), this.addIfPresent(VG, "resource_delivery_type", null === UG || void 0 === UG ? void 0 : UG.deliveryType), this.addIfPresent(VG, "resource_initiator_type", null === UG || void 0 === UG ? void 0 : UG.initiatorType)), this.pushMeasurement(YG, VG)
          }), {
            reportAllChanges: null === (GG = this.webVitalConfig) || void 0 === GG ? void 0 : GG.reportAllChanges
          })
        }
        measureTTFB() {
          var GG;
          ! function(GG) {
            ! function(GG) {
              let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const ZG = Sw(bG);
              let wG = Zw("TTFB"),
                SG = tZ(GG, wG, mw, bG.reportAllChanges);
              Iw((() => {
                const LG = AZ();
                if (LG) {
                  const yG = LG.responseStart;
                  wG.value = Math.max(yG - NZ(), 0), wG.entries = [LG], SG(!0), HZ((() => {
                    wG = Zw("TTFB", 0, "back-forward-cache", wG.navigationId, wG.navigationInteractionId, wG.navigationURL, TZ()), SG = tZ(GG, wG, mw, bG.reportAllChanges), SG(!0)
                  })), ZG && ww(["soft-navigation"], (ZG => {
                    ZG.forEach((ZG => {
                      ZG.navigationId && (wG = Zw("TTFB", 0, "soft-navigation", ZG.navigationId, ZG.interactionId, ZG.name, ZG.startTime), wG.entries = [ZG], SG = tZ(GG, wG, mw, bG.reportAllChanges), SG(!0))
                    }))
                  }), bG)
                }
              }))
            }((bG => {
              GG((GG => {
                const bG = GG.entries[0];
                let ZG = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: bG
                };
                if (GG.entries.length && bG instanceof PerformanceNavigationTiming) {
                  const wG = bG.activationStart || 0,
                    SG = Math.max((bG.workerStart || bG.fetchStart || 0) - wG, 0),
                    LG = Math.max(bG.domainLookupStart - wG, 0),
                    yG = Math.max(bG.connectStart - wG, 0),
                    kG = Math.max(bG.connectEnd - wG, 0);
                  ZG = {
                    waitingDuration: SG,
                    cacheDuration: LG - SG,
                    dnsDuration: yG - LG,
                    connectionDuration: kG - yG,
                    requestDuration: GG.value - kG,
                    navigationEntry: bG
                  }
                }
                return Object.assign(GG, {
                  attribution: ZG
                })
              })(bG))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((GG => {
            const {
              dnsDuration: bG,
              connectionDuration: ZG,
              requestDuration: wG,
              waitingDuration: SG,
              cacheDuration: LG
            } = GG.attribution, yG = this.buildInitialValues(GG);
            this.addIfPresent(yG, "dns_duration", bG), this.addIfPresent(yG, "connection_duration", ZG), this.addIfPresent(yG, "request_duration", wG), this.addIfPresent(yG, "waiting_duration", SG), this.addIfPresent(yG, "cache_duration", LG);
            const kG = this.buildInitialContext(GG);
            this.pushMeasurement(yG, kG)
          }), {
            reportAllChanges: null === (GG = this.webVitalConfig) || void 0 === GG ? void 0 : GG.reportAllChanges
          })
        }
        buildInitialValues(GG) {
          return {
            [GG.name.toLowerCase()]: GG.value,
            delta: GG.delta
          }
        }
        buildInitialContext(GG) {
          var bG;
          const ZG = null !== (bG = Gb("com.grafana.faro.lastNavigationId", OG)) && void 0 !== bG ? bG : jZ;
          return {
            id: GG.id,
            rating: GG.rating,
            navigation_type: GG.navigationType,
            navigation_entry_id: ZG
          }
        }
        pushMeasurement(GG, bG) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: GG
          }, {
            context: bG
          })
        }
        addIfPresent(GG, bG, ZG) {
          ZG && (GG[bG] = ZG)
        }
        addNumberIfDefined(GG, bG, ZG) {
          void 0 !== ZG && (GG[bG] = ZG)
        }
      },
      lw = class extends bZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ZZ
        }
        initialize() {
          this.logDebug("Initializing"), new aw(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const jw = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Pw() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const bG of GG)
        if ("traceparent" === bG.name) {
          if (!jw.test(bG.description)) continue;
          const [, GG, ZG] = bG.description.split("-");
          if (null != GG && null != ZG) return {
            traceId: GG,
            spanId: ZG
          };
          break
        }
    }

    function Mw(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: ZG,
        monoNow: wG
      } = bG;
      return Math.min(ZG, ZG - (wG - GG))
    }

    function Aw(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [ZG, wG] of Object.entries(bG)) {
        const bG = GG[ZG];
        return null != bG && (FG(wG) ? wG.includes(bG) : bG === wG)
      }
      return !0
    }

    function sw(GG) {
      const {
        connectEnd: bG,
        connectStart: ZG,
        decodedBodySize: wG,
        domainLookupEnd: SG,
        domainLookupStart: LG,
        duration: yG,
        encodedBodySize: kG,
        fetchStart: UG,
        initiatorType: YG,
        name: VG,
        nextHopProtocol: pG,
        redirectEnd: fG,
        redirectStart: QG,
        renderBlockingStatus: KG,
        requestStart: hG,
        responseEnd: dG,
        responseStart: JG,
        responseStatus: rG,
        secureConnectionStart: zG,
        transferSize: EG,
        workerStart: oG
      } = GG;
      return {
        name: VG,
        httpHost: nw(VG),
        duration: gw(yG),
        tcpHandshakeTime: gw(bG - ZG),
        dnsLookupTime: gw(SG - LG),
        tlsNegotiationTime: gw(bG - zG),
        responseStatus: gw(rG),
        redirectTime: gw(fG - QG),
        requestTime: gw(JG - hG),
        responseTime: gw(dG - JG),
        fetchTime: gw(dG - UG),
        serviceWorkerTime: gw(oG > 0 ? UG - oG : 0),
        decodedBodySize: gw(wG),
        encodedBodySize: gw(kG),
        cacheHitStatus: function() {
          let GG = "fullLoad";
          0 === EG ? wG > 0 && (GG = "cache") : null != rG ? 304 === rG && (GG = "conditionalFetch") : kG > 0 && EG < kG && (GG = "conditionalFetch");
          return GG
        }(),
        renderBlockingStatus: gw(KG),
        protocol: pG,
        initiatorType: YG,
        visibilityState: document.visibilityState,
        ttfb: gw(JG - hG),
        transferSize: gw(EG)
      }
    }

    function qw(GG) {
      const {
        activationStart: bG,
        domComplete: ZG,
        domContentLoadedEventEnd: wG,
        domContentLoadedEventStart: SG,
        domInteractive: LG,
        fetchStart: yG,
        loadEventEnd: kG,
        loadEventStart: UG,
        responseStart: YG,
        type: VG
      } = GG, pG = function() {
        var GG;
        return null != (null === (GG = performance.timing) || void 0 === GG ? void 0 : GG.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Vb(Vb({}, sw(GG)), {}, {
        pageLoadTime: gw(ZG - yG),
        documentParsingTime: gw(pG ? LG - pG : null),
        domProcessingTime: gw(ZG - LG),
        domContentLoadHandlerTime: gw(wG - SG),
        onLoadTime: gw(kG - UG),
        ttfb: gw(Math.max(YG - (null !== bG && void 0 !== bG ? bG : 0), 0)),
        type: VG
      })
    }

    function nw(GG) {
      try {
        return new URL(GG).host || jZ
      } catch (bG) {
        return jZ
      }
    }

    function gw(GG) {
      return null == GG ? jZ : "number" === typeof GG ? Math.round(GG > 0 ? GG : 0).toString() : GG.toString()
    }
    const ew = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function Rw(GG, bG, ZG, wG, SG, LG, yG) {
      try {
        var kG = GG[LG](yG),
          UG = kG.value
      } catch (GG) {
        return void ZG(GG)
      }
      kG.done ? bG(UG) : Promise.resolve(UG).then(wG, SG)
    }

    function Tw(GG) {
      return function() {
        var bG = this,
          ZG = arguments;
        return new Promise((function(wG, SG) {
          var LG = GG.apply(bG, ZG);

          function yG(GG) {
            Rw(LG, wG, SG, yG, kG, "next", GG)
          }

          function kG(GG) {
            Rw(LG, wG, SG, yG, kG, "throw", GG)
          }
          yG(void 0)
        }))
      }
    }
    const Hw = new rZ;
    var tw = class extends bZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ZZ
      }
      initialize() {
        var GG = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let bG = !1;
        const ZG = () => {
          ! function(GG) {
            if ("complete" === document.readyState) GG();
            else {
              const bG = () => {
                "complete" === document.readyState && (GG(), document.removeEventListener("readystatechange", bG))
              };
              document.addEventListener("readystatechange", bG)
            }
          }(Tw((function*() {
            if (bG) return;
            const ZG = GG.api.pushEvent,
              {
                faroNavigationId: wG
              } = yield function(GG) {
                let bG;
                const ZG = new Promise((GG => {
                  bG = GG
                }));
                return new PerformanceObserver((ZG => {
                  var wG;
                  const [SG] = ZG.getEntries();
                  if (null == SG || DG(SG.name)) return;
                  const LG = SG.toJSON();
                  let yG = Pw(null === LG || void 0 === LG ? void 0 : LG.serverTiming);
                  const kG = null !== (wG = Gb("com.grafana.faro.lastNavigationId", OG)) && void 0 !== wG ? wG : jZ,
                    UG = Vb(Vb({}, qw(LG)), {}, {
                      faroNavigationId: Jb(),
                      faroPreviousNavigationId: kG
                    });
                  bb("com.grafana.faro.lastNavigationId", UG.faroNavigationId, OG), GG("faro.performance.navigation", UG, void 0, {
                    spanContext: yG,
                    timestampOverwriteMs: Mw(LG.startTime)
                  }), bG(UG)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), ZG
              }(ZG);
            bG || null == wG || function(GG, bG, ZG, wG) {
              const SG = wG.trackResources;
              new PerformanceObserver((wG => {
                const LG = wG.getEntries(),
                  yG = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const kG of LG) {
                  if (DG(kG.name)) continue;
                  null === ZG || void 0 === ZG || ZG.notify({
                    type: "resource"
                  });
                  const wG = kG.toJSON();
                  let LG = Pw(null === wG || void 0 === wG ? void 0 : wG.serverTiming);
                  (null == SG && Aw(wG, ew) || SG) && bG("faro.performance.resource", Vb(Vb({}, sw(wG)), {}, {
                    faroNavigationId: GG,
                    faroResourceId: Jb()
                  }), void 0, {
                    spanContext: LG,
                    timestampOverwriteMs: Mw(wG.startTime, yG)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(wG, ZG, Hw, GG.config)
          })))
        };
        this.cancelInitialization = () => {
          bG = !0, document.removeEventListener("prerenderingchange", ZG)
        }, document.prerendering ? document.addEventListener("prerenderingchange", ZG, {
          once: !0
        }) : ZG()
      }
      destroy() {
        var GG;
        null === (GG = this.cancelInitialization) || void 0 === GG || GG.call(this), this.cancelInitialization = void 0
      }
    };
    const Dw = "data-faro-user-action-name",
      Nw = Dw.replace(/-name$/, "-timeout"),
      Ow = 1e3;

    function xw(GG) {
      return `data-${(GG.startsWith("data-")?GG.slice(5):GG).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Bw(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eb;
      if (void 0 === GG) return bG;
      let wG = NaN;
      try {
        wG = "string" === typeof GG && "" === GG.trim() ? NaN : Number(GG)
      } catch (SG) {}
      return !Number.isFinite(wG) || wG <= 0 ? (ZG(`initialActivityTimeout must be a finite number greater than zero; using ${bG} ms`), bG) : wG > 1e3 ? (ZG(`initialActivityTimeout cannot exceed ${Ow} ms; clamping to the maximum`), Ow) : wG
    }

    function GS(GG, bG, ZG) {
      return void 0 !== GG && window.clearTimeout(GG), window.setTimeout((() => {
        bG()
      }), ZG)
    }

    function bS(GG) {
      return GG.type === JZ
    }
    let ZS, wS;

    function SS() {
      return ZS || (ZS = new rZ), wS || (wS = new MutationObserver(((GG, bG) => {
        ZS.notify({
          type: "dom-mutation"
        })
      })), wS.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), ZS
    }
    const LS = "fetch",
      yS = "xhr";
    let kS, US, YS, VS, pS = !1;

    function fS() {
      if (kS) return kS;

      function GG(GG) {
        kS.notify({
          type: dZ,
          request: GG
        })
      }

      function bG(GG) {
        kS.notify({
          type: JZ,
          request: GG
        })
      }
      return kS = new rZ, pS || (! function(GG) {
        let {
          onRequestEnd: bG,
          onRequestStart: ZG
        } = GG;
        YS || (YS = window.fetch);
        window.fetch = function() {
          var GG, wG;
          const SG = null !== (GG = NG(arguments[0])) && void 0 !== GG ? GG : "",
            LG = DG(SG),
            yG = (null !== (wG = arguments[1]) && void 0 !== wG ? wG : {}).method,
            kG = Jb();
          return LG || ZG({
            url: SG,
            method: yG,
            requestId: kG,
            apiType: LS
          }), YS.apply(this, arguments).then((GG => (LG || bG({
            url: SG,
            method: yG,
            requestId: kG,
            apiType: LS
          }), GG))).catch((GG => {
            throw LG || bG({
              url: SG,
              method: yG,
              requestId: kG,
              apiType: LS
            }), GG
          }))
        }
      }({
        onRequestStart: GG,
        onRequestEnd: bG
      }), function(GG) {
        let {
          onRequestStart: bG,
          onRequestEnd: ZG
        } = GG;
        US || (US = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const GG = arguments[1],
            wG = DG(GG),
            SG = arguments[0],
            LG = Jb();
          this.addEventListener("loadstart", (function() {
            wG || bG({
              url: GG,
              method: SG,
              requestId: LG,
              apiType: yS
            })
          })), this.addEventListener("load", (function() {
            wG || ZG({
              url: GG,
              method: SG,
              requestId: LG,
              apiType: yS
            })
          })), this.addEventListener("error", (function() {
            wG || ZG({
              url: GG,
              method: SG,
              requestId: LG,
              apiType: yS
            })
          })), this.addEventListener("abort", (function() {
            wG || ZG({
              url: GG,
              method: SG,
              requestId: LG,
              apiType: yS
            })
          })), US.apply(this, arguments)
        }
      }({
        onRequestStart: GG,
        onRequestEnd: bG
      }), pS = !0), kS
    }
    let QS, KS = !1;
    let hS = function(GG) {
      return GG[GG.Started = 0] = "Started", GG[GG.Halted = 1] = "Halted", GG[GG.Cancelled = 2] = "Cancelled", GG[GG.Ended = 3] = "Ended", GG
    }({});
    var dS = class {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = GG, this.logDebug = bG, this.initialActivityTimeout = ZG, this.http = fS(), this.dom = SS(), this.perf = (VS || (VS = new rZ), KS || (QS = Hw.subscribe((GG => {
          "resource" === GG.type && VS.notify({
            type: "resource-entry"
          })
        })), KS = !0), VS), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new rZ).merge(this.http, this.dom, this.perf).takeWhile((() => [hS.Started, hS.Halted].includes(this.userAction.getState()))).filter((GG => !!(this.userAction.getState() !== hS.Halted || bS(GG) && this.runningRequests.has(GG.request.requestId)))).subscribe((GG => {
          (function(GG) {
            return GG.type === dZ
          })(GG) && this.runningRequests.set(GG.request.requestId, GG.request), bS(GG) && this.runningRequests.delete(GG.request.requestId), bS(GG) ? this.userAction.getState() === hS.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((GG => [hS.Ended, hS.Cancelled].includes(GG))).first().subscribe((() => this.cleanup())), this.startupTid = GS(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === hS.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === hS.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = GS(this.haltTid, (() => {
          this.userAction.getState() === hS.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var GG, bG;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (GG = this.allMonitorsSub) || void 0 === GG || GG.unsubscribe(), null === (bG = this.stateSub) || void 0 === bG || bG.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(GG) {
        void 0 !== GG && window.clearTimeout(GG)
      }
    };

    function JS(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb;
      var ZG;
      const {
        api: wG,
        config: SG,
        internalLogger: LG
      } = GG, yG = Bw(null === (ZG = SG.userActionsInstrumentation) || void 0 === ZG ? void 0 : ZG.initialActivityTimeout, 100, bG);
      return {
        processUserEvent: function(GG) {
          var bG, ZG;
          const LG = null !== (bG = null === (ZG = SG.userActionsInstrumentation) || void 0 === ZG ? void 0 : ZG.dataAttributeName) && void 0 !== bG ? bG : Dw,
            yG = GG.target;
          if (!(yG instanceof Element)) return;
          const kG = function(GG, bG) {
              let ZG = GG;
              for (; ZG;) {
                if (ZG.hasAttribute(bG)) return ZG;
                ZG = ZG.parentElement
              }
              return null
            }(yG, xw(LG)),
            UG = function(GG, bG) {
              if (!GG) return;
              const ZG = function(GG) {
                  return xw(GG).slice(5).replace(/-(.)/g, ((GG, bG) => bG.toUpperCase()))
                }(bG),
                wG = GG.dataset;
              for (const SG in wG)
                if (SG === ZG) return wG[SG]
            }(kG, LG);
          if (!kG || !UG) return;
          const YG = function(GG, bG) {
            const ZG = GG.getAttribute(function(GG) {
              const bG = xw(GG);
              return bG.endsWith("-name") ? `${bG.slice(0,-5)}-timeout` : `${bG}-timeout`
            }(bG));
            return null === ZG ? void 0 : Number(ZG)
          }(kG, LG);
          wG.startUserAction(UG, {}, {
            triggerName: GG.type,
            initialActivityTimeout: YG
          })
        },
        processUserActionStarted: function(GG, ZG) {
          const wG = GG,
            SG = Bw(ZG, yG, bG);
          new dS(wG, LG.debug, SG).attach()
        }
      }
    }
    const rS = "user_action_start",
      zS = {
        Normal: "normal",
        Critical: "critical"
      };
    var ES = class {
        constructor() {
          this.buffer = []
        }
        addItem(GG) {
          this.buffer.push(GG)
        }
        flushBuffer(GG) {
          if (IG(GG))
            for (const bG of this.buffer) GG(bG);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      oS = class extends rZ {
        constructor(GG) {
          let {
            name: bG,
            parentId: ZG,
            trigger: wG,
            transports: SG,
            attributes: LG,
            trackUserActionsExcludeItem: yG,
            importance: kG = zS.Normal,
            pushEvent: UG
          } = GG;
          super(), this.name = bG, this.attributes = LG, this.id = Jb(), this.trigger = wG, this.parentId = null !== ZG && void 0 !== ZG ? ZG : this.id, this.trackUserActionsExcludeItem = yG, this.importance = kG, this._pushEvent = UG, this._itemBuffer = new ES, this._transports = SG, this._state = 0, this._start()
        }
        addItem(GG) {
          return 0 === this._state && (this._itemBuffer.addItem(GG), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = fb(), this._startTimeMono = Qb())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((GG => {
            this._transports.execute(GG)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const GG = fb(),
            bG = Qb() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((GG => {
            if (function(GG, bG) {
                return (null === bG || void 0 === bG ? void 0 : bG(GG)) || "measurement" === GG.type && "web-vitals" === GG.payload.type
              }(GG, this.trackUserActionsExcludeItem)) return void this._transports.execute(GG);
            const bG = xb(xb({}, GG), {}, {
              payload: xb(xb({}, GG.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(bG)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", xb({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: GG.toString(),
            userActionDuration: bG.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Pb(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: GG => (GG.action = {
              id: this.id,
              name: this.name
            }, GG)
          })
        }
        getState() {
          return this._state
        }
      };
    const XS = new rZ;

    function uS(GG, bG) {
      return !!GG && (0 === (null === GG || void 0 === GG ? void 0 : GG.getState()) && (GG.addItem(bG), !0))
    }
    var iS = class extends bZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ZZ
        }
        initialize() {
          const {
            processUserEvent: GG,
            processUserActionStarted: bG
          } = JS(hG, (GG => this.logWarn(GG)));
          this._processUserEvent = GG, this._processKeydown = bG => {
            [" ", "Enter"].includes(bG.key) && GG(bG)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = XS.subscribe((GG => {
            let {
              type: ZG,
              userAction: wG,
              initialActivityTimeout: SG
            } = GG;
            "user_action_start" === ZG && bG(wG, SG)
          }))
        }
        destroy() {
          var GG;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (GG = this._userActionSub) || void 0 === GG || GG.unsubscribe()
        }
      },
      CS = class extends bZ {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ZZ, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(GG) {
          const bG = {
            blockedURI: GG.blockedURI,
            columnNumber: GG.columnNumber,
            disposition: GG.disposition,
            documentURI: GG.documentURI,
            effectiveDirective: GG.effectiveDirective,
            lineNumber: GG.lineNumber,
            originalPolicy: GG.originalPolicy,
            referrer: GG.referrer,
            sample: GG.sample,
            sourceFile: GG.sourceFile,
            statusCode: GG.statusCode,
            violatedDirective: GG.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Pb(bG))
        }
      };
    var WS = class extends rZ {
      constructor(GG, bG) {
        var ZG, wG, SG, LG;
        super(), this._tracking = !1, this.eventsObservable = GG, this._options = {
          inactivityMs: null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.inactivityMs) && void 0 !== ZG ? ZG : 100,
          drainTimeoutMs: null !== (wG = null === bG || void 0 === bG ? void 0 : bG.drainTimeoutMs) && void 0 !== wG ? wG : 1e4,
          isOperationStart: null !== (SG = null === bG || void 0 === bG ? void 0 : bG.isOperationStart) && void 0 !== SG ? SG : () => {},
          isOperationEnd: null !== (LG = null === bG || void 0 === bG ? void 0 : bG.isOperationEnd) && void 0 !== LG ? LG : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((GG => {
          var bG;
          this._lastEventTime = Qb(), null === (bG = this._currentEvents) || void 0 === bG || bG.push(GG);
          const ZG = this._options.isOperationStart(GG);
          var wG;
          ZG && (null === (wG = this._activeOperations) || void 0 === wG || wG.set(ZG, !0));
          const SG = this._options.isOperationEnd(GG);
          var LG;
          SG && (null === (LG = this._activeOperations) || void 0 === LG || LG.delete(SG));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Qb(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let GG;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), GG = this.hasActiveOperations() ? Qb() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: GG
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = mS(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = mS(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(GG) {
        GG && clearTimeout(GG)
      }
    };

    function mS(GG, bG, ZG) {
      return GG && clearTimeout(GG), GG = setTimeout((() => {
        bG()
      }), ZG)
    }
    let IS;
    const FS = new Set,
      vS = new Map;
    let aS, cS, lS, jS, PS, MS, AS, sS, qS = !1;
    var nS = class extends bZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ZZ
      }
      initialize() {
        const GG = fS(),
          bG = SS(),
          ZG = function() {
            function GG(GG, bG) {
              const ZG = null !== bG && void 0 !== bG ? bG : location.href;
              ZG !== cS && (aS.notify({
                type: "url-change",
                from: cS,
                to: ZG,
                trigger: GG
              }), cS = ZG)
            }
            if (aS || (aS = new rZ, cS = location.href), !qS)
              if ("navigation" in window && "NavigateEvent" in window) {
                AS = bG => {
                  try {
                    const ZG = null === bG || void 0 === bG ? void 0 : bG.destination;
                    (null === ZG || void 0 === ZG ? void 0 : ZG.sameDocument) && "string" === typeof ZG.url && GG("navigate", ZG.url)
                  } catch (ZG) {}
                }, window.navigation.addEventListener("navigate", AS);
                const bG = window.NavigateEvent;
                bG && bG.prototype && "function" === typeof bG.prototype.intercept && (sS || (sS = bG.prototype.intercept), bG.prototype.intercept = function(bG) {
                  try {
                    const bG = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      ZG = null === this || void 0 === this ? void 0 : this.destination;
                    bG && ZG && !1 === ZG.sameDocument && "string" === typeof ZG.url && GG("navigate-intercept", ZG.url)
                  } catch (ZG) {}
                  return sS.call(this, bG)
                }), qS = !0
              } else lS || (lS = window.history.pushState), window.history.pushState = function() {
                for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
                const SG = lS.apply(window.history, ZG);
                return GG("pushState"), SG
              }, jS || (jS = window.history.replaceState), window.history.replaceState = function() {
                for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
                const SG = jS.apply(window.history, ZG);
                return GG("replaceState"), SG
              }, PS = () => GG("popstate"), MS = () => GG("hashchange"), window.addEventListener("popstate", PS), window.addEventListener("hashchange", MS), qS = !0;
            return aS
          }(),
          wG = (SG = ["pointerdown", "keydown"], IS || (IS = new rZ), SG.forEach((GG => {
            if (!FS.has(GG)) {
              const bG = () => {
                IS.notify({
                  type: "interaction",
                  name: GG
                })
              };
              window.addEventListener(GG, bG), FS.add(GG), vS.set(GG, bG)
            }
          })), IS);
        var SG;
        const LG = new WS((new rZ).merge(GG, bG, ZG), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: GG => function(GG) {
            return GG.type === dZ
          }(GG) ? GG.request.requestId : void 0,
          isOperationEnd: GG => function(GG) {
            return GG.type === JZ
          }(GG) ? GG.request.requestId : void 0
        });
        LG.filter((GG => "tracking-ended" === GG.message)).subscribe((GG => {
          var bG, ZG;
          if ((null === (bG = GG.events) || void 0 === bG ? void 0 : bG.some((GG => "url-change" === GG.type))) && (null === (ZG = GG.events) || void 0 === ZG ? void 0 : ZG.some((GG => "dom-mutation" === GG.type)))) {
            var wG;
            const bG = null === (wG = GG.events) || void 0 === wG ? void 0 : wG.find((GG => "url-change" === GG.type));
            hG.api.pushEvent("faro.navigation", {
              fromUrl: null === bG || void 0 === bG ? void 0 : bG.from,
              toUrl: null === bG || void 0 === bG ? void 0 : bG.to,
              sameDocument: String(!0),
              duration: GG.duration
            })
          }
        })), wG.subscribe((() => {
          LG.startTracking()
        }))
      }
    };

    function gS() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const bG = [new iS, new lZ, new lw, new wZ, new PZ, new nS];
      return !1 !== GG.enablePerformanceInstrumentation && bG.unshift(new tw), !1 !== GG.enableContentSecurityPolicyInstrumentation && bG.push(new CS), !1 !== GG.captureConsole && bG.push(new aZ), bG
    }
    var eS = ZG(6706);
    let RS, TS;

    function HS() {
      const GG = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return RS === GG && TS || (TS = new eS.UAParser(GG).getResult(), RS = GG), TS
    }
    const tS = () => {
        const {
          browser: GG,
          os: bG,
          ua: ZG
        } = HS(), {
          name: wG,
          version: SG
        } = GG, {
          name: LG,
          version: yG
        } = bG, kG = navigator.language, UG = ZG.includes("Mobi"), YG = function() {
          if (!wG || !SG) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== wG && void 0 !== wG ? wG : jZ,
            version: null !== SG && void 0 !== SG ? SG : jZ,
            os: `${null!==LG&&void 0!==LG?LG:jZ} ${null!==yG&&void 0!==yG?yG:jZ}`,
            userAgent: null !== ZG && void 0 !== ZG ? ZG : jZ,
            language: null !== kG && void 0 !== kG ? kG : jZ,
            mobile: UG,
            brands: null !== YG && void 0 !== YG ? YG : jZ,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      DS = () => {
        const {
          name: GG,
          version: bG
        } = HS().os;
        if (!GG && !bG) return {};
        const ZG = {};
        return GG && (ZG.name = GG), bG && (ZG.version = bG), {
          os: ZG
        }
      };

    function NS(GG) {
      var bG, ZG, wG;
      return {
        id: null !== (bG = null === (ZG = hG.config) || void 0 === ZG || null === (ZG = ZG.sessionTracking) || void 0 === ZG || null === (wG = ZG.generateSessionId) || void 0 === wG ? void 0 : wG.call(ZG)) && void 0 !== bG ? bG : Jb(),
        attributes: GG
      }
    }
    const OS = () => ({
      sdk: {
        name: "faro-web",
        version: ZZ
      }
    });
    var xS = class extends GZ {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let BS = function(GG) {
      return GG.EXCEPTION = "exception", GG.LOG = "log", GG.MEASUREMENT = "measurement", GG.TRACE = "trace", GG.EVENT = "event", GG
    }({});
    const GL = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function bL(GG, bG) {
      var ZG, wG;
      if (void 0 === bG) return GG;
      if (void 0 === GG) return {
        resourceSpans: bG
      };
      const SG = null === (ZG = GG.resourceSpans) || void 0 === ZG ? void 0 : ZG[0];
      if (void 0 === SG) return GG;
      const LG = (null === SG || void 0 === SG ? void 0 : SG.scopeSpans) || [],
        yG = (null === bG || void 0 === bG || null === (wG = bG[0]) || void 0 === wG ? void 0 : wG.scopeSpans) || [];
      return xb(xb({}, GG), {}, {
        resourceSpans: [xb(xb({}, SG), {}, {
          scopeSpans: [...LG, ...yG]
        })]
      })
    }

    function ZL(GG) {
      let bG = {
        meta: {}
      };
      return void 0 !== GG[0] && (bG.meta = GG[0].meta), GG.forEach((GG => {
        switch (GG.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const ZG = GL[GG.type],
              wG = bG[ZG];
            bG = xb(xb({}, bG), {}, {
              [ZG]: void 0 === wG ? [GG.payload] : [...wG, GG.payload]
            });
            break
          }
          case "trace":
            bG = xb(xb({}, bG), {}, {
              traces: bL(bG.traces, GG.payload.resourceSpans)
            })
        }
      })), bG
    }
    var wL = class extends xS {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = GG, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ZZ
      }
      send(GG) {
        var bG;
        return this.unpatchedConsole[null !== (bG = this.options.level) && void 0 !== bG ? bG : zZ.DEBUG]("New event", ZL([GG]))
      }
    };
    const SL = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      LL = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      yL = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      kL = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      UL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      YL = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function VL(GG) {
      let {
        weekday: bG,
        day: ZG,
        month: wG,
        year: SG,
        hour: LG,
        minute: yG,
        second: kG
      } = GG;
      if (SG < 1900 || ZG < 1 || LG > 23 || yG > 59 || kG > 60) return;
      const UG = 60 === kG,
        YG = new Date(0);
      return YG.setUTCFullYear(SG, wG, ZG), YG.setUTCHours(LG, yG, UG ? 59 : kG, 0), YG.getUTCDay() === bG && YG.getUTCDate() === ZG && YG.getUTCMonth() === wG && YG.getUTCFullYear() === SG && YG.getUTCHours() === LG && YG.getUTCMinutes() === yG && YG.getUTCSeconds() === (UG ? 59 : kG) ? YG.getTime() + (UG ? 1e3 : 0) : void 0
    }
    var pL = class {
      constructor(GG) {
        this.options = GG, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var GG = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const bG = this.sequence++;
        let ZG = !1;
        return {
          deliver: function() {
            var ZG = Tw((function*(ZG) {
              const wG = GG.options.getNow();
              let SG, LG = 0;
              for (;;) {
                var yG, kG, UG;
                const YG = GG.options.retry.maxAttempts - LG,
                  VG = yield GG.runAttempt((() => ZG(YG, GG.unloading)), LG > 0);
                if (LG += VG.attemptsMade, "success" === VG.kind) return {
                  kind: "success",
                  attempts: LG,
                  elapsedTimeMs: GG.options.getNow() - wG
                };
                if (SG = VG.failure, "terminal" === VG.kind || GG.unloading) return {
                  kind: "terminal",
                  attempts: LG,
                  elapsedTimeMs: GG.options.getNow() - wG,
                  failure: SG
                };
                if (LG >= GG.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: LG,
                  elapsedTimeMs: GG.options.getNow() - wG,
                  failure: SG,
                  reason: "retries-exhausted"
                };
                if (null != VG.retryAfterMs && VG.retryAfterMs > GG.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: LG,
                  elapsedTimeMs: GG.options.getNow() - wG,
                  failure: SG,
                  reason: "retry-after-too-long"
                };
                const pG = Math.min(null !== (yG = VG.retryAfterMs) && void 0 !== yG ? yG : GG.options.retry.initialBackoffMs * Math.pow(GG.options.retry.backoffMultiplier, LG - 1), GG.options.retry.maxBackoffMs);
                if (null === (kG = (UG = GG.options).onRetry) || void 0 === kG || kG.call(UG, pG, LG + 1), yield GG.waitForTurn(bG, pG)) {
                  const bG = GG.options.retry.maxAttempts - LG,
                    SG = yield GG.runAttempt((() => ZG(bG, !0)));
                  return LG += SG.attemptsMade, {
                    kind: "success" === SG.kind ? "success" : "terminal",
                    attempts: LG,
                    elapsedTimeMs: GG.options.getNow() - wG,
                    failure: "success" === SG.kind ? void 0 : SG.failure
                  }
                }
              }
            }));
            return function(GG) {
              return ZG.apply(this, arguments)
            }
          }(),
          release: () => {
            ZG || (ZG = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const GG = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const bG of GG) bG.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((ZG, wG) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const bG = () => {
                this.inProgress--, this.runNextAttempt()
              };
              GG().then((GG => {
                bG(), ZG(GG)
              }), (GG => {
                bG(), wG(GG)
              }))
            },
            isRedelivery: bG
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const GG = this.options.getNow(),
            bG = this.attemptQueue.findIndex((bG => {
              let {
                isRedelivery: ZG
              } = bG;
              return this.unloading || !ZG || GG >= this.nextSendAt
            }));
          if (bG < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - GG)));
          const [ZG] = this.attemptQueue.splice(bG, 1);
          ZG.isRedelivery && !this.unloading && (this.nextSendAt = GG + 1), ZG.run()
        }
      }
      waitForTurn(GG, bG) {
        const ZG = Math.min(bG * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((bG => {
          this.waiting.push({
            sequence: GG,
            readyAt: this.options.getNow() + ZG,
            resolve: bG
          }), this.waiting.sort(((GG, bG) => GG.readyAt === bG.readyAt ? GG.sequence - bG.sequence : GG.readyAt - bG.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const GG = this.waiting[0],
          bG = GG.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const bG = this.waiting.indexOf(GG);
          bG >= 0 && this.waiting.splice(bG, 1), GG.resolve(!1), this.scheduleNext()
        }), Math.max(0, bG - this.options.getNow()))
      }
    };

    function fL(GG, bG) {
      if (null == GG) return {};
      var ZG, wG, SG = function(GG, bG) {
        if (null == GG) return {};
        var ZG = {};
        for (var wG in GG)
          if ({}.hasOwnProperty.call(GG, wG)) {
            if (bG.includes(wG)) continue;
            ZG[wG] = GG[wG]
          } return ZG
      }(GG, bG);
      if (Object.getOwnPropertySymbols) {
        var LG = Object.getOwnPropertySymbols(GG);
        for (wG = 0; wG < LG.length; wG++) ZG = LG[wG], bG.includes(ZG) || {}.propertyIsEnumerable.call(GG, ZG) && (SG[ZG] = GG[ZG])
      }
      return SG
    }

    function QL(GG) {
      const {
        size: bG,
        concurrency: ZG
      } = GG, wG = [];
      let SG = 0;
      const LG = () => {
        if (SG < ZG && wG.length) {
          const {
            producer: GG,
            resolve: bG,
            reject: ZG
          } = wG.shift();
          SG++, GG().then((GG => {
            SG--, LG(), bG(GG)
          }), (GG => {
            SG--, LG(), ZG(GG)
          }))
        }
      };
      return {
        add: GG => {
          if (wG.length + SG >= bG) throw new Error("Task buffer full");
          return new Promise(((bG, ZG) => {
            wG.push({
              producer: GG,
              resolve: bG,
              reject: ZG
            }), LG()
          }))
        }
      }
    }
    const KL = ["headers"],
      hL = ["keepalive", "signal"],
      dL = new Set([408, 425, 429, 500, 502, 503, 504]),
      JL = new Set([429, 503]);
    let rL = 0,
      zL = 0;
    var EL = class extends Error {};
    var oL = class extends xS {
      constructor(GG) {
        var bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG;
        super(), this.options = GG, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ZZ, this.pendingCustomSends = 0, this.getNow = null !== (bG = GG.getNow) && void 0 !== bG ? bG : Date.now, this.requestTimeoutMs = null !== (ZG = GG.requestTimeoutMs) && void 0 !== ZG ? ZG : 1e4, this.compressionEnabled = null !== (wG = GG.requestCompression) && void 0 !== wG && wG && "undefined" !== typeof CompressionStream, GG.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new pL({
          bufferSize: null !== (SG = GG.bufferSize) && void 0 !== SG ? SG : 30,
          concurrency: null !== (LG = GG.concurrency) && void 0 !== LG ? LG : 5,
          retry: {
            maxAttempts: null !== (yG = null === (kG = GG.retry) || void 0 === kG ? void 0 : kG.maxAttempts) && void 0 !== yG ? yG : 3,
            initialBackoffMs: null !== (UG = null !== (YG = null === (VG = GG.retry) || void 0 === VG ? void 0 : VG.initialBackoffMs) && void 0 !== YG ? YG : GG.defaultRateLimitBackoffMs) && void 0 !== UG ? UG : 1e3,
            maxBackoffMs: null !== (pG = null === (fG = GG.retry) || void 0 === fG ? void 0 : fG.maxBackoffMs) && void 0 !== pG ? pG : 3e4,
            backoffMultiplier: null !== (QG = null === (KG = GG.retry) || void 0 === KG ? void 0 : KG.backoffMultiplier) && void 0 !== QG ? QG : 2
          },
          getNow: this.getNow,
          getRandom: null !== (hG = GG.getRandom) && void 0 !== hG ? hG : Math.random,
          onRetry: (GG, bG) => {
            this.logDebug(`Retrying failed request after ${GG}ms. Attempt ${bG}.`)
          }
        }), this.customPromiseBuffer = QL({
          size: null !== (dG = GG.bufferSize) && void 0 !== dG ? dG : 30,
          concurrency: null !== (JG = GG.concurrency) && void 0 !== JG ? JG : 5
        }), this.defaultPromiseBuffer = {
          add: GG => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(GG);
            const bG = this.deliveryQueue.reserve();
            if (!bG) throw new Error("Task buffer full");
            return this.runBufferedTask(bG, GG)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (GG => {
          GG.persisted && this.deliveryQueue.resume()
        })))
      }
      send(GG) {
        var bG = this;
        return Tw((function*() {
          const ZG = bG.promiseBuffer;
          if (ZG !== bG.defaultPromiseBuffer || ZG.add !== bG.defaultBufferAdd) {
            bG.pendingCustomSends++;
            try {
              yield ZG.add((() => bG.deliver(GG)))
            } catch (wG) {
              bG.logError("Permanent delivery failure", {
                error: wG,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              bG.pendingCustomSends--
            }
          } else yield bG.deliver(GG)
        }))()
      }
      runBufferedTask(GG, bG) {
        return Tw((function*() {
          let ZG;
          try {
            return yield GG.deliver(Tw((function*() {
              return ZG = yield bG(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), ZG
          } finally {
            GG.release()
          }
        }))()
      }
      deliver(GG) {
        var bG = this;
        return Tw((function*() {
          const ZG = bG.deliveryQueue.reserve();
          if (ZG) try {
            const wG = yield bG.prepareRequest(GG), SG = yield ZG.deliver(((GG, ZG) => bG.performAttempt(wG, GG, ZG)));
            "terminal" === SG.kind && bG.logError("retries-exhausted" === SG.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Vb(Vb({}, SG.failure), {}, {
              reason: SG.reason,
              attempts: SG.attempts,
              elapsedTimeMs: SG.elapsedTimeMs
            }))
          } catch (wG) {
            bG.logError("Permanent delivery failure", {
              error: wG,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            ZG.release()
          } else bG.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var GG;
        return [this.options.url].concat(null !== (GG = this.config.ignoreUrls) && void 0 !== GG ? GG : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(GG) {
        var bG = this;
        return Tw((function*() {
          var ZG, wG;
          const SG = ZL(GG),
            LG = null === (ZG = SG.meta.session) || void 0 === ZG ? void 0 : ZG.id,
            yG = JSON.stringify(SG),
            kG = null !== (wG = bG.options.requestOptions) && void 0 !== wG ? wG : {},
            {
              headers: UG = {}
            } = kG,
            YG = fL(kG, KL),
            {
              keepalive: VG,
              signal: pG
            } = YG,
            fG = fL(YG, hL),
            QG = {};
          for (const [GG, bG] of Object.entries(UG)) QG[GG] = "function" === typeof bG ? yield bG(): bG;
          let KG = yG,
            hG = function(GG) {
              return "undefined" === typeof TextEncoder ? GG.length : (new TextEncoder).encode(GG).byteLength
            }(yG);
          const dG = {};
          return bG.compressionEnabled && (KG = yield bG.compress(yG), hG = KG.size, dG["Content-Encoding"] = "gzip"), {
            bodySize: hG,
            sessionId: LG,
            requestInit: Vb({
              method: "POST",
              headers: Vb(Vb(Vb(Vb(Vb({
                "Content-Type": "application/json"
              }, dG), QG), bG.options.apiKey ? {
                "x-api-key": bG.options.apiKey
              } : {}), LG ? {
                "x-faro-session-id": LG
              } : {}), {}, {
                "Idempotency-Key": Jb(20)
              }),
              body: KG
            }, fG)
          }
        }))()
      }
      performAttempt(GG, bG, ZG) {
        var wG = this;
        return Tw((function*() {
          var SG;
          const LG = null === (SG = wG.options.requestOptions) || void 0 === SG ? void 0 : SG.signal;
          if (null === LG || void 0 === LG ? void 0 : LG.aborted) return {
            kind: "terminal",
            failure: {
              error: LG.reason
            },
            attemptsMade: 0
          };
          let yG = 0;
          try {
            var kG;
            const SG = yield wG.fetchWithKeepaliveFallback(GG.requestInit, GG.bodySize, !!ZG || (null === (kG = wG.options.requestOptions) || void 0 === kG ? void 0 : kG.keepalive), bG, (() => yG++));
            if (wG.handleResponse(SG, GG.sessionId), SG.status >= 200 && SG.status < 300) return {
              kind: "success",
              attemptsMade: yG
            };
            const LG = {
              status: SG.status
            };
            return !dL.has(SG.status) || ZG ? {
              kind: "terminal",
              failure: LG,
              attemptsMade: yG
            } : {
              kind: "retry",
              failure: LG,
              attemptsMade: yG,
              retryAfterMs: JL.has(SG.status) ? wG.getRetryAfterDelayMs(SG) : void 0
            }
          } catch (UG) {
            const GG = {
              error: UG
            };
            return (null === LG || void 0 === LG ? void 0 : LG.aborted) || !wG.isFetchNetworkError(UG) || ZG ? {
              kind: "terminal",
              failure: GG,
              attemptsMade: yG
            } : {
              kind: "retry",
              failure: GG,
              attemptsMade: yG
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(GG, bG, ZG, wG, SG) {
        var LG = this;
        return Tw((function*() {
          const yG = LG.getNow(),
            kG = LG.reserveKeepalive(bG, ZG);
          try {
            return yield LG.fetchWithTimeout(Vb(Vb({}, GG), {}, {
              keepalive: kG.keepalive
            }), LG.requestTimeoutMs, SG)
          } catch (YG) {
            var UG;
            if (kG.keepalive && wG > 1 && LG.isFetchNetworkError(YG) && !(YG instanceof EL) && !(null === (UG = LG.options.requestOptions) || void 0 === UG || null === (UG = UG.signal) || void 0 === UG ? void 0 : UG.aborted)) {
              LG.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const bG = LG.requestTimeoutMs - (LG.getNow() - yG);
              return LG.fetchWithTimeout(Vb(Vb({}, GG), {}, {
                keepalive: !1
              }), bG, SG)
            }
            throw YG
          } finally {
            kG.release()
          }
        }))()
      }
      fetchWithTimeout(GG, bG, ZG) {
        var wG = this;
        return Tw((function*() {
          var SG;
          const LG = null === (SG = wG.options.requestOptions) || void 0 === SG ? void 0 : SG.signal;
          if (wG.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return ZG(), fetch(wG.options.url, Vb(Vb({}, GG), {}, {
            signal: LG
          }));
          if (bG <= 0) throw new EL("Request timed out");
          const yG = new AbortController,
            kG = () => yG.abort(null === LG || void 0 === LG ? void 0 : LG.reason);
          null === LG || void 0 === LG || LG.addEventListener("abort", kG, {
            once: !0
          });
          let UG = !1;
          const YG = setTimeout((() => {
            UG = !0, yG.abort()
          }), bG);
          try {
            return ZG(), yield fetch(wG.options.url, Vb(Vb({}, GG), {}, {
              signal: yG.signal
            }))
          } catch (VG) {
            if (UG && !(null === LG || void 0 === LG ? void 0 : LG.aborted)) throw new EL("Request timed out");
            throw VG
          } finally {
            clearTimeout(YG), null === LG || void 0 === LG || LG.removeEventListener("abort", kG)
          }
        }))()
      }
      getRetryAfterDelayMs(GG) {
        const bG = GG.headers.get("Retry-After");
        if (!bG) return;
        if (/^\d+$/.test(bG)) {
          const GG = 1e3 * Number(bG);
          return Number.isFinite(GG) ? GG : Number.POSITIVE_INFINITY
        }
        const ZG = this.getNow(),
          wG = function(GG, bG) {
            const ZG = SL.exec(GG);
            if (ZG) {
              const [, GG, bG, wG, SG, LG, yG, kG] = ZG;
              return VL({
                weekday: kL.indexOf(GG),
                day: Number(bG),
                month: YL.indexOf(wG),
                year: Number(SG),
                hour: Number(LG),
                minute: Number(yG),
                second: Number(kG)
              })
            }
            const wG = LL.exec(GG);
            if (wG) {
              const [, GG, ZG, yG, kG, UG, YG, VG] = wG, pG = new Date(bG);
              if (Number.isNaN(pG.getTime())) return;
              const fG = pG.getUTCFullYear();
              let QG = 100 * Math.floor(fG / 100) + Number(kG);
              QG < fG && (QG += 100);
              const KG = YL.indexOf(yG),
                hG = {
                  month: KG,
                  day: Number(ZG),
                  hour: Number(UG),
                  minute: Number(YG),
                  second: Number(VG),
                  millisecond: 0
                },
                dG = {
                  month: pG.getUTCMonth(),
                  day: pG.getUTCDate(),
                  hour: pG.getUTCHours(),
                  minute: pG.getUTCMinutes(),
                  second: pG.getUTCSeconds(),
                  millisecond: pG.getUTCMilliseconds()
                };
              return (QG > fG + 50 || QG === fG + 50 && (LG = dG, ((SG = hG).month - LG.month || SG.day - LG.day || SG.hour - LG.hour || SG.minute - LG.minute || SG.second - LG.second || SG.millisecond - LG.millisecond) > 0)) && (QG -= 100), VL({
                weekday: UL.indexOf(GG),
                day: Number(ZG),
                month: KG,
                year: QG,
                hour: Number(UG),
                minute: Number(YG),
                second: Number(VG)
              })
            }
            var SG, LG;
            const yG = yL.exec(GG);
            if (!yG) return;
            const [, kG, UG, YG, VG, pG, fG, QG, KG] = yG;
            return VL({
              weekday: kL.indexOf(kG),
              day: Number(null !== YG && void 0 !== YG ? YG : VG),
              month: YL.indexOf(UG),
              year: Number(KG),
              hour: Number(pG),
              minute: Number(fG),
              second: Number(QG)
            })
          }(bG, ZG);
        return null == wG ? void 0 : Math.max(0, wG - ZG)
      }
      reserveKeepalive(GG, bG) {
        if (!1 === bG || GG > 6e4 || rL + GG > 6e4 || zL >= 9) return {
          keepalive: !1,
          release: eb
        };
        rL += GG, zL++;
        let ZG = !1;
        return {
          keepalive: !0,
          release: () => {
            ZG || (ZG = !0, rL -= GG, zL--)
          }
        }
      }
      handleResponse(GG, bG) {
        202 === GG.status && "invalid" === GG.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), bG), GG.text().catch(eb)
      }
      isFetchNetworkError(GG) {
        return GG instanceof TypeError || GG instanceof EL || GG instanceof DOMException && "AbortError" === GG.name
      }
      compress(GG) {
        return Tw((function*() {
          const bG = [],
            ZG = new ReadableStream({
              start(bG) {
                bG.enqueue((new TextEncoder).encode(GG)), bG.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: GG,
              value: wG
            } = yield ZG.read();
            if (GG) return new Blob(bG);
            bG.push(wG)
          }
        }))()
      }
      extendFaroSession(GG, bG, ZG) {
        var wG, SG;
        const LG = GG.sessionTracking;
        if (!(null === LG || void 0 === LG ? void 0 : LG.enabled)) return void bG("Session expired.");
        const {
          fetchUserSession: yG,
          storeUserSession: kG
        } = gb(LG), UG = null === (wG = this.metas.value.session) || void 0 === wG ? void 0 : wG.id, YG = null === (SG = yG()) || void 0 === SG ? void 0 : SG.sessionId;
        ZG && ZG === UG && ZG === YG ? (Fb({
          fetchUserSession: yG,
          storeUserSession: kG
        })({
          forceSessionExtend: !0
        }), bG("Session expired; created new session.")) : bG("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const XL = () => {
      const GG = window.k6;
      return {
        k6: Vb({
          isK6Browser: !0
        }, (null === GG || void 0 === GG ? void 0 : GG.testRunId) && {
          testRunId: null === GG || void 0 === GG ? void 0 : GG.testRunId
        })
      }
    };
    let uL, iL;

    function CL() {
      let {
        generatePageId: GG,
        initialPageMeta: bG
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const ZG = location.href;
        return IG(GG) && uL !== ZG && (uL = ZG, iL = GG(location)), {
          page: Vb(Vb({
            url: ZG
          }, iL ? {
            id: iL
          } : {}), bG)
        }
      }
    }

    function WL() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bb,
        bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZG = Tb;
      return bG > 0 && (ZG.error = bG >= 1 ? function() {
        for (var bG = arguments.length, wG = new Array(bG), SG = 0; SG < bG; SG++) wG[SG] = arguments[SG];
        GG.error(`${ZG.prefix}\n`, ...wG)
      } : eb, ZG.warn = bG >= 2 ? function() {
        for (var bG = arguments.length, wG = new Array(bG), SG = 0; SG < bG; SG++) wG[SG] = arguments[SG];
        GG.warn(`${ZG.prefix}\n`, ...wG)
      } : eb, ZG.info = bG >= 3 ? function() {
        for (var bG = arguments.length, wG = new Array(bG), SG = 0; SG < bG; SG++) wG[SG] = arguments[SG];
        GG.info(`${ZG.prefix}\n`, ...wG)
      } : eb, ZG.debug = bG >= 4 ? function() {
        for (var bG = arguments.length, wG = new Array(bG), SG = 0; SG < bG; SG++) wG[SG] = arguments[SG];
        GG.debug(`${ZG.prefix}\n`, ...wG)
      } : eb), ZG
    }
    const mL = "faro",
      IL = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      FL = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function vL(GG) {
      var bG, ZG, SG, LG, yG, kG;
      const UG = [],
        VG = WL(GG.unpatchedConsole, GG.internalLoggerLevel);
      GG.transports ? ((GG.url || GG.apiKey) && VG.error('if "transports" is defined, "url" and "apiKey" should not be defined'), UG.push(...GG.transports)) : GG.url ? UG.push(new oL({
        url: GG.url,
        apiKey: GG.apiKey,
        requestCompression: GG.requestCompression
      })) : VG.error('either "url" or "transports" must be defined');
      const {
        dedupe: pG = !0,
        eventDomain: fG = wG,
        globalObjectKey: QG = mL,
        instrumentations: KG = gS(),
        internalLoggerLevel: hG = Hb,
        isolate: dG = !1,
        logArgsSerializer: JG = vZ,
        metas: rG = cL(GG),
        paused: zG = !1,
        preventGlobalExposure: EG = !1,
        unpatchedConsole: oG = Bb,
        url: XG,
        experimental: uG
      } = GG, iG = fL(GG, FL), CG = null !== (bG = null === uG || void 0 === uG ? void 0 : uG.trackNavigation) && void 0 !== bG && bG, WG = {
        dataAttributeName: xw(null !== (ZG = null === (SG = GG.userActionsInstrumentation) || void 0 === SG ? void 0 : SG.dataAttributeName) && void 0 !== ZG ? ZG : Dw),
        excludeItem: null === (LG = GG.userActionsInstrumentation) || void 0 === LG ? void 0 : LG.excludeItem,
        initialActivityTimeout: Bw(null === (yG = GG.userActionsInstrumentation) || void 0 === yG ? void 0 : yG.initialActivityTimeout, 100, (GG => VG.warn(GG)))
      };
      return Vb(Vb({}, iG), {}, {
        batching: Vb(Vb({}, IL), GG.batching),
        dedupe: pG,
        globalObjectKey: QG,
        instrumentations: aL(KG, GG),
        internalLoggerLevel: hG,
        isolate: dG,
        logArgsSerializer: JG,
        metas: rG,
        parseStacktrace: hZ,
        paused: zG,
        preventGlobalExposure: EG,
        transports: UG,
        unpatchedConsole: oG,
        eventDomain: fG,
        ignoreUrls: [...null !== (kG = GG.ignoreUrls) && void 0 !== kG ? kG : [], ...XG ? [XG] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Vb(Vb(Vb({}, YG), GG.sessionTracking), lL({
          trackGeolocation: GG.trackGeolocation,
          sessionTracking: GG.sessionTracking
        })),
        userActionsInstrumentation: WG,
        experimental: {
          trackNavigation: CG
        }
      })
    }

    function aL(GG, bG) {
      let {
        experimental: ZG
      } = bG;
      var wG;
      const SG = null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.trackNavigation) && void 0 !== wG && wG;
      return GG.filter((GG => !("@grafana/faro-web-sdk:instrumentation-navigation" === GG.name && !SG)))
    }

    function cL(GG) {
      var bG, ZG, wG;
      const {
        page: SG,
        generatePageId: LG
      } = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.pageTracking) && void 0 !== bG ? bG : {}, yG = [tS, DS, CL({
        generatePageId: LG,
        initialPageMeta: SG
      }), ...null !== (ZG = GG.metas) && void 0 !== ZG ? ZG : [], OS];
      return mG(null === (wG = window) || void 0 === wG ? void 0 : wG.k6) ? [...yG, XL] : yG
    }

    function lL(GG) {
      let {
        trackGeolocation: bG,
        sessionTracking: ZG
      } = GG;
      var wG;
      const SG = {};
      return CG(bG) && (SG.geoLocationTrackingEnabled = bG), HG(SG) ? {} : {
        session: Vb(Vb({}, null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.session) && void 0 !== wG ? wG : {}), {}, {
          overrides: SG
        })
      }
    }
    const jL = new WeakSet;

    function PL(GG) {
      return jL.add(GG), GG
    }

    function ML(GG, bG) {
      if (GG.capture) return PL(GG.capture(bG));
      const ZG = PL(GG.value);
      return null === bG || void 0 === bG || bG(), ZG
    }

    function AL(GG) {
      const bG = `__faroBundleId_${GG}`,
        ZG = null === VG || void 0 === VG ? void 0 : VG[bG];
      if ("string" === typeof ZG && "" !== ZG) return ZG;
      const wG = "undefined" !== typeof window ? window[bG] : void 0;
      return "string" === typeof wG && "" !== wG ? wG : void 0
    }

    function sL(GG) {
      var bG, ZG;
      const wG = GG.config.app.name,
        SG = wG ? function(GG) {
          return null === VG || void 0 === VG ? void 0 : VG[`__faroGitHash_${GG}`]
        }(wG) : void 0,
        LG = {
          sdk: {
            version: ZZ,
            name: "faro"
          },
          app: xb({
            bundleId: wG && AL(wG)
          }, void 0 !== SG ? {
            gitHash: SG
          } : {})
        },
        yG = null === (bG = GG.config.sessionTracking) || void 0 === bG ? void 0 : bG.session;
      yG && GG.api.setSession(yG), GG.config.app && (LG.app = xb(xb({}, GG.config.app), LG.app)), GG.config.user && (LG.user = GG.config.user), GG.config.view && (LG.view = GG.config.view), GG.metas.add(LG, ...null !== (ZG = GG.config.metas) && void 0 !== ZG ? ZG : [])
    }
    var qL = class {
      constructor(GG, bG) {
        var ZG, wG;
        this.signalBuffer = [], this.itemLimit = null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.itemLimit) && void 0 !== ZG ? ZG : 50, this.sendTimeout = null !== (wG = null === bG || void 0 === bG ? void 0 : bG.sendTimeout) && void 0 !== wG ? wG : 250, this.paused = (null === bG || void 0 === bG ? void 0 : bG.paused) || !1, this.sendFn = GG, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(GG) {
        this.paused || (this.signalBuffer.push(GG), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(GG) {
        const bG = new Map;
        return GG.forEach((GG => {
          const ZG = JSON.stringify(GG.meta);
          let wG = bG.get(ZG);
          wG = void 0 === wG ? [GG] : [...wG, GG], bG.set(ZG, wG)
        })), Array.from(bG.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const GG = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(GG).forEach(this.sendFn)
        } catch (bG) {
          throw this.signalBuffer = [...GG, ...this.signalBuffer], this.trimBufferToLimit(), bG
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function nL(GG, bG, ZG, wG) {
      var SG;
      bG.debug("Initializing transports");
      const LG = [];
      let yG = [];
      const kG = GG => {
        let bG = GG;
        for (const wG of yG) {
          const GG = bG.map(wG).filter(Boolean);
          if (0 === GG.length) return [];
          bG = gL(GG, ZG)
        }
        return bG
      };
      let UG;
      (null === (SG = ZG.batching) || void 0 === SG ? void 0 : SG.enabled) && (UG = new qL((GG => {
        const ZG = kG(GG);
        if (0 !== ZG.length)
          for (const wG of LG) bG.debug(`Transporting item using ${wG.name}\n`, ZG), wG.isBatched() && wG.send(ZG)
      }), {
        sendTimeout: ZG.batching.sendTimeout,
        itemLimit: ZG.batching.itemLimit,
        paused: ZG.paused
      }));
      return {
        add: function() {
          bG.debug("Adding transports");
          for (var SG = arguments.length, yG = new Array(SG), kG = 0; kG < SG; kG++) yG[kG] = arguments[kG];
          yG.forEach((SG => {
            bG.debug(`Adding "${SG.name}" transport`), LG.some((GG => GG === SG)) ? bG.warn(`Transport ${SG.name} is already added`) : (SG.unpatchedConsole = GG, SG.internalLogger = bG, SG.config = ZG, SG.metas = wG, LG.push(SG))
          }))
        },
        addBeforeSendHooks: function() {
          bG.debug("Adding beforeSendHooks\n", yG);
          for (var GG = arguments.length, ZG = new Array(GG), wG = 0; wG < GG; wG++) ZG[wG] = arguments[wG];
          ZG.forEach((GG => {
            GG && yG.push(GG)
          }))
        },
        getBeforeSendHooks: () => [...yG],
        execute: GG => {
          var SG;
          if (!ZG.paused && qb(wG).shouldCapture()) {
            if (pG = GG.meta, !jL.has(pG)) {
              var yG, YG, VG;
              const bG = null === (yG = wG.value.session) || void 0 === yG ? void 0 : yG.id,
                SG = ML(wG);
              if (ZG.paused) return;
              const LG = xb({}, GG.meta);
              (null === (YG = LG.session) || void 0 === YG ? void 0 : YG.id) === bG && (null === (VG = SG.session) || void 0 === VG ? void 0 : VG.id) !== bG && (void 0 === SG.session ? delete LG.session : LG.session = SG.session), GG = xb(xb({}, GG), {}, {
                meta: PL(LG)
              })
            }
            var pG;
            (null === (SG = ZG.batching) || void 0 === SG ? void 0 : SG.enabled) && (null === UG || void 0 === UG || UG.addItem(GG)), (GG => {
              var wG;
              if ((null === (wG = ZG.batching) || void 0 === wG ? void 0 : wG.enabled) && LG.every((GG => GG.isBatched()))) return;
              const [SG] = kG([GG]);
              if (void 0 !== SG)
                for (const kG of LG) {
                  var yG;
                  bG.debug(`Transporting item using ${kG.name}\n`, SG), kG.isBatched() ? (null === (yG = ZG.batching) || void 0 === yG ? void 0 : yG.enabled) || kG.send([SG]) : kG.send(SG)
                }
            })(GG)
          }
        },
        isPaused: () => ZG.paused,
        pause: () => {
          bG.debug("Pausing transports"), null === UG || void 0 === UG || UG.pause(), ZG.paused = !0
        },
        remove: function() {
          bG.debug("Removing transports");
          for (var GG = arguments.length, ZG = new Array(GG), wG = 0; wG < GG; wG++) ZG[wG] = arguments[wG];
          ZG.forEach((GG => {
            bG.debug(`Removing "${GG.name}" transport`);
            const ZG = LG.indexOf(GG); - 1 !== ZG ? LG.splice(ZG, 1) : bG.warn(`Transport "${GG.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var GG = arguments.length, ZG = new Array(GG), wG = 0; wG < GG; wG++) ZG[wG] = arguments[wG];
          bG.debug("Removing beforeSendHooks"), yG = yG.filter((GG => !ZG.includes(GG)))
        },
        get transports() {
          return [...LG]
        },
        unpause: () => {
          bG.debug("Unpausing transports"), null === UG || void 0 === UG || UG.start(), ZG.paused = !1
        }
      }
    }

    function gL(GG, bG) {
      if (bG.preserveOriginalError)
        for (const ZG of GG) "exception" === ZG.type && delete ZG.payload.originalError;
      return GG
    }
    let eL = Bb;

    function RL(GG) {
      var bG;
      return eL = null !== (bG = GG.unpatchedConsole) && void 0 !== bG ? bG : eL, eL
    }
    let TL, HL = Tb;

    function tL(GG, bG) {
      return HL = WL(GG, bG.internalLoggerLevel), HL
    }

    function DL(GG) {
      let {
        internalLogger: bG,
        config: ZG,
        metas: wG,
        transports: SG,
        tracesApi: LG,
        userActionsApi: yG
      } = GG;
      var kG;
      bG.debug("Initializing exceptions API");
      let UG = null;
      TL = null !== (kG = ZG.parseStacktrace) && void 0 !== kG ? kG : TL;
      const YG = GG => {
          bG.debug("Changing stacktrace parser"), TL = null !== GG && void 0 !== GG ? GG : TL
        },
        {
          ignoreErrors: VG = [],
          preserveOriginalError: pG
        } = ZG;
      return YG(ZG.parseStacktrace), {
        changeStacktraceParser: YG,
        getStacktraceParser: () => TL,
        pushError: function(GG) {
          let {
            skipDedupe: kG,
            stackFrames: YG,
            type: fG,
            context: QG,
            spanContext: KG,
            timestampOverwriteMs: hG,
            originalError: dG,
            fingerprint: JG,
            fatal: rG
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(GG, bG) {
              const {
                message: ZG,
                name: wG,
                stack: SG
              } = bG;
              return LG = GG, yG = ZG + " " + wG + " " + SG, LG.some((GG => XG(GG) ? yG.includes(GG) : !!yG.match(GG)));
              var LG, yG
            }(VG, null !== dG && void 0 !== dG ? dG : GG)) try {
            var zG, EG;
            if (!qb(wG).shouldCapture()) return;
            const VG = Pb(xb(xb({}, function(GG) {
                let bG = GG.cause;
                MG(bG) ? bG = GG.cause.toString() : null !== bG && (mG(GG.cause) || FG(GG.cause)) ? bG = jb(GG.cause) : null != bG && (bG = GG.cause.toString());
                return null == bG ? {} : {
                  cause: bG
                }
              }(null !== dG && void 0 !== dG ? dG : GG)), null !== QG && void 0 !== QG ? QG : {})),
              XG = xb(xb(xb(xb({
                type: fG || GG.name || "Error",
                value: GG.message,
                timestamp: hG ? hb(hG) : Kb(),
                trace: KG ? {
                  trace_id: KG.traceId,
                  span_id: KG.spanId
                } : LG.getTraceContext()
              }, HG(VG) ? {} : {
                context: VG
              }), pG ? {
                originalError: dG
              } : {}), JG ? {
                fingerprint: JG
              } : {}), void 0 !== rG ? {
                fatal: rG
              } : {});
            YG = null !== (zG = YG) && void 0 !== zG ? zG : GG.stack ? null === TL || void 0 === TL ? void 0 : TL(GG).frames : void 0, (null === YG || void 0 === YG ? void 0 : YG.length) && (XG.stacktrace = {
              frames: YG
            });
            const uG = {
              type: XG.type,
              value: XG.value,
              stacktrace: XG.stacktrace,
              context: XG.context,
              fingerprint: XG.fingerprint,
              fatal: null !== (EG = XG.fatal) && void 0 !== EG && EG
            };
            if (!kG && ZG.dedupe && !oG(UG) && rb(uG, UG)) return void bG.debug("Skipping error push because it is the same as the last one\n", XG);
            const iG = UG,
              CG = ML(wG);
            if (UG !== iG && !kG && ZG.dedupe && rb(uG, UG)) return;
            UG = uG;
            const WG = {
              meta: CG,
              payload: XG,
              type: "exception"
            };
            bG.debug("Pushing exception\n", WG), uS(yG.getActiveUserAction(), WG) || SG.execute(WG)
          } catch (uG) {
            bG.error("Error pushing event", uG)
          }
        }
      }
    }

    function NL(GG, bG, ZG, wG, SG) {
      bG.debug("Initializing API");
      let LG = null;
      const yG = function(GG) {
          let {
            transports: bG,
            internalLogger: ZG,
            config: wG,
            pushEvent: SG
          } = GG;
          var LG;
          const yG = null === (LG = wG.userActionsInstrumentation) || void 0 === LG ? void 0 : LG.excludeItem;
          let kG;
          const UG = () => kG;
          return {
            startUserAction: (GG, wG, LG) => {
              if (void 0 === UG()) {
                const ZG = new oS({
                  name: GG,
                  transports: bG,
                  attributes: wG,
                  trigger: (null === LG || void 0 === LG ? void 0 : LG.triggerName) || "faroApiCall",
                  importance: (null === LG || void 0 === LG ? void 0 : LG.importance) || zS.Normal,
                  trackUserActionsExcludeItem: yG,
                  pushEvent: SG
                });
                return ZG.filter((GG => [3, 2].includes(GG))).first().subscribe((() => {
                  kG = void 0
                })), XS.notify({
                  type: rS,
                  userAction: ZG,
                  initialActivityTimeout: null === LG || void 0 === LG ? void 0 : LG.initialActivityTimeout
                }), kG = ZG, kG
              }
              ZG.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: UG
          }
        }({
          transports: SG,
          config: ZG,
          internalLogger: bG,
          pushEvent: (GG, ZG, wG, SG) => {
            LG ? LG(GG, ZG, wG, SG) : bG.warn("pushEventImpl is not initialized. Event dropped:", {
              name: GG,
              attributes: ZG,
              domain: wG,
              options: SG
            })
          }
        }),
        kG = function(GG, bG, ZG, wG, SG) {
          let LG;
          return bG.debug("Initializing traces API"), {
            getOTEL: () => LG,
            getTraceContext: () => {
              const GG = null === LG || void 0 === LG ? void 0 : LG.trace.getSpanContext(LG.context.active());
              return GG ? {
                trace_id: GG.traceId,
                span_id: GG.spanId
              } : void 0
            },
            initOTEL: (GG, ZG) => {
              bG.debug("Initializing OpenTelemetry"), LG = {
                trace: GG,
                context: ZG
              }
            },
            isOTELInitialized: () => !!LG,
            pushTraces: GG => {
              try {
                if (!qb(wG).shouldCapture()) return;
                const ZG = {
                  type: "trace",
                  payload: GG,
                  meta: ML(wG)
                };
                bG.debug("Pushing trace\n", ZG), SG.execute(ZG)
              } catch (ZG) {
                bG.error("Error pushing trace\n", ZG)
              }
            }
          }
        }(0, bG, 0, wG, SG),
        UG = {
          unpatchedConsole: GG,
          internalLogger: bG,
          userActionsApi: yG,
          config: ZG,
          metas: wG,
          transports: SG,
          tracesApi: kG
        },
        YG = function(GG) {
          let {
            internalLogger: bG,
            config: ZG,
            metas: wG,
            transports: SG,
            tracesApi: LG,
            userActionsApi: yG
          } = GG, kG = null;
          return {
            pushEvent: function(GG, UG, YG) {
              let {
                skipDedupe: VG,
                spanContext: pG,
                timestampOverwriteMs: fG,
                customPayloadTransformer: QG = GG => GG
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!qb(wG).shouldCapture()) return;
                const KG = Pb(UG),
                  hG = QG({
                    name: GG,
                    domain: null !== YG && void 0 !== YG ? YG : ZG.eventDomain,
                    attributes: HG(KG) ? void 0 : KG,
                    timestamp: fG ? hb(fG) : Kb(),
                    trace: pG ? {
                      trace_id: pG.traceId,
                      span_id: pG.spanId
                    } : LG.getTraceContext()
                  }),
                  dG = {
                    name: hG.name,
                    attributes: hG.attributes,
                    domain: hG.domain
                  };
                if (!VG && ZG.dedupe && !oG(kG) && rb(dG, kG)) return void bG.debug("Skipping event push because it is the same as the last one\n", hG);
                const JG = kG,
                  rG = ML(wG);
                if (kG !== JG && !VG && ZG.dedupe && rb(dG, kG)) return;
                kG = dG;
                const zG = {
                  meta: rG,
                  payload: hG,
                  type: "event"
                };
                bG.debug("Pushing event\n", zG), uS(yG.getActiveUserAction(), zG) || SG.execute(zG)
              } catch (KG) {
                bG.error("Error pushing event", KG)
              }
            }
          }
        }(UG);
      return LG = YG.pushEvent, xb(xb(xb(xb(xb(xb(xb({}, kG), DL(UG)), function(GG) {
        let bG, ZG, wG, SG, {
          internalLogger: LG,
          metas: yG
        } = GG;
        LG.debug("Initializing meta API");
        const kG = GG => {
            ZG && yG.remove(ZG), ZG = {
              user: GG
            }, yG.add(ZG)
          },
          UG = (GG, ZG) => {
            var wG;
            const SG = null === ZG || void 0 === ZG ? void 0 : ZG.overrides,
              LG = SG ? {
                overrides: xb(xb({}, null === bG || void 0 === bG || null === (wG = bG.session) || void 0 === wG ? void 0 : wG.overrides), SG)
              } : {};
            bG && yG.remove(bG), bG = {
              session: xb(xb({}, HG(GG) ? void 0 : GG), LG)
            }, yG.add(bG)
          },
          YG = (GG, bG) => {
            qb(yG).notifySessionUpdate({
              type: "replace",
              session: GG,
              overrides: null === bG || void 0 === bG ? void 0 : bG.overrides
            }), UG(GG, bG)
          },
          VG = () => yG.value.session,
          pG = () => yG.value.page;
        return {
          setUser: kG,
          resetUser: kG,
          setSession: YG,
          resetSession: YG,
          getSession: VG,
          setView: (GG, bG) => {
            var ZG;
            if ((null === bG || void 0 === bG ? void 0 : bG.overrides) && (qb(yG).notifySessionUpdate({
                type: "overrides",
                overrides: bG.overrides
              }), UG(VG(), {
                overrides: bG.overrides
              })), (null === wG || void 0 === wG || null === (ZG = wG.view) || void 0 === ZG ? void 0 : ZG.name) === (null === GG || void 0 === GG ? void 0 : GG.name)) return;
            const SG = wG;
            wG = {
              view: GG
            }, yG.add(wG), SG && yG.remove(SG)
          },
          getView: () => yG.value.view,
          setPage: GG => {
            var bG;
            const ZG = XG(GG) ? xb(xb({}, null !== (bG = null === SG || void 0 === SG ? void 0 : SG.page) && void 0 !== bG ? bG : pG()), {}, {
              id: GG
            }) : GG;
            SG && yG.remove(SG), SG = {
              page: ZG
            }, yG.add(SG)
          },
          getPage: pG
        }
      }(UG)), function(GG) {
        let {
          internalLogger: bG,
          config: ZG,
          metas: wG,
          transports: SG,
          tracesApi: LG,
          userActionsApi: yG
        } = GG;
        var kG;
        bG.debug("Initializing logs API");
        let UG = null;
        const YG = null !== (kG = ZG.logArgsSerializer) && void 0 !== kG ? kG : vZ;
        return {
          pushLog: function(GG) {
            let {
              context: kG,
              level: VG,
              skipDedupe: pG,
              spanContext: fG,
              timestampOverwriteMs: QG
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!qb(wG).shouldCapture()) return;
              const KG = Pb(kG),
                hG = {
                  message: YG(GG),
                  level: null !== VG && void 0 !== VG ? VG : "log",
                  context: HG(KG) ? void 0 : KG,
                  timestamp: QG ? hb(QG) : Kb(),
                  trace: fG ? {
                    trace_id: fG.traceId,
                    span_id: fG.spanId
                  } : LG.getTraceContext()
                },
                dG = {
                  message: hG.message,
                  level: hG.level,
                  context: hG.context
                };
              if (!pG && ZG.dedupe && !oG(UG) && rb(dG, UG)) return void bG.debug("Skipping log push because it is the same as the last one\n", hG);
              const JG = UG,
                rG = ML(wG);
              if (UG !== JG && !pG && ZG.dedupe && rb(dG, UG)) return;
              UG = dG;
              const zG = {
                type: "log",
                payload: hG,
                meta: rG
              };
              bG.debug("Pushing log\n", zG), uS(yG.getActiveUserAction(), zG) || SG.execute(zG)
            } catch (KG) {
              bG.error("Error pushing log\n", KG)
            }
          }
        }
      }(UG)), function(GG) {
        let {
          internalLogger: bG,
          config: ZG,
          metas: wG,
          transports: SG,
          tracesApi: LG,
          userActionsApi: yG
        } = GG;
        bG.debug("Initializing measurements API");
        let kG = null;
        return {
          pushMeasurement: function(GG) {
            let {
              skipDedupe: UG,
              context: YG,
              spanContext: VG,
              timestampOverwriteMs: pG
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!qb(wG).shouldCapture()) return;
              const fG = Pb(YG),
                QG = xb(xb({}, GG), {}, {
                  trace: VG ? {
                    trace_id: VG.traceId,
                    span_id: VG.spanId
                  } : LG.getTraceContext(),
                  timestamp: pG ? hb(pG) : Kb(),
                  context: HG(fG) ? void 0 : fG
                }),
                KG = {
                  type: QG.type,
                  values: QG.values,
                  context: QG.context
                };
              if (!UG && ZG.dedupe && !oG(kG) && rb(KG, kG)) return void bG.debug("Skipping measurement push because it is the same as the last one\n", QG);
              const hG = kG,
                dG = ML(wG);
              if (kG !== hG && !UG && ZG.dedupe && rb(KG, kG)) return;
              kG = KG;
              const JG = {
                type: "measurement",
                payload: QG,
                meta: dG
              };
              bG.debug("Pushing measurement\n", JG), uS(yG.getActiveUserAction(), JG) || SG.execute(JG)
            } catch (fG) {
              bG.error("Error pushing measurement\n", fG)
            }
          }
        }
      }(UG)), YG), yG)
    }

    function OL(GG) {
      const bG = RL(GG),
        ZG = tL(bG, GG);
      if (KG() && !GG.isolate) return void ZG.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      ZG.debug("Initializing");
      const wG = function(GG, bG) {
          let ZG, wG = [],
            SG = [],
            LG = [],
            yG = 0,
            kG = 0;
          const UG = () => wG.reduce(((GG, bG) => Object.assign(GG, IG(bG) ? bG() : bG)), {}),
            YG = () => {
              if (SG.length) {
                const GG = UG();
                SG.forEach((bG => bG(GG)))
              }
            };
          return {
            add: function() {
              for (var GG = arguments.length, ZG = new Array(GG), SG = 0; SG < GG; SG++) ZG[SG] = arguments[SG];
              bG.debug("Adding metas\n", ZG), wG.push(...ZG), YG()
            },
            remove: function() {
              for (var GG = arguments.length, ZG = new Array(GG), SG = 0; SG < GG; SG++) ZG[SG] = arguments[SG];
              bG.debug("Removing metas\n", ZG), wG = wG.filter((GG => !ZG.includes(GG))), YG()
            },
            addListener: GG => {
              bG.debug("Adding metas listener\n", GG), SG.push(GG)
            },
            removeListener: GG => {
              bG.debug("Removing metas listener\n", GG), SG = SG.filter((bG => bG !== GG))
            },
            capture: GG => {
              var bG;
              const wG = void 0 !== ZG,
                SG = null !== (bG = ZG) && void 0 !== bG ? bG : LG;
              wG || (ZG = SG, yG = 0, kG = SG.length);
              try {
                for (; yG < kG;) {
                  const GG = SG[yG++];
                  null === GG || void 0 === GG || GG()
                }
                const bG = PL(UG());
                return null === GG || void 0 === GG || GG(), bG
              } finally {
                wG || (ZG = void 0)
              }
            },
            addCaptureListener: GG => {
              LG.push(GG)
            },
            removeCaptureListener: GG => {
              LG = LG.filter((bG => bG !== GG))
            },
            get value() {
              return UG()
            }
          }
        }(0, ZG),
        SG = nL(bG, ZG, GG, wG),
        LG = NL(bG, ZG, GG, wG, SG),
        yG = function(GG, bG, ZG, wG, SG, LG) {
          bG.debug("Initializing instrumentations");
          const yG = [];
          return {
            add: function() {
              bG.debug("Adding instrumentations");
              for (var kG = arguments.length, UG = new Array(kG), YG = 0; YG < kG; YG++) UG[YG] = arguments[YG];
              UG.forEach((kG => {
                bG.debug(`Adding "${kG.name}" instrumentation`), yG.some((GG => GG.name === kG.name)) ? bG.warn(`Instrumentation ${kG.name} is already added`) : (kG.unpatchedConsole = GG, kG.internalLogger = bG, kG.config = ZG, kG.metas = wG, kG.transports = SG, kG.api = LG, yG.push(kG), kG.initialize())
              }))
            },
            get instrumentations() {
              return [...yG]
            },
            remove: function() {
              bG.debug("Removing instrumentations");
              for (var GG = arguments.length, ZG = new Array(GG), wG = 0; wG < GG; wG++) ZG[wG] = arguments[wG];
              ZG.forEach((GG => {
                var ZG, wG;
                bG.debug(`Removing "${GG.name}" instrumentation`);
                const SG = yG.reduce(((bG, ZG, wG) => null === bG && ZG.name === GG.name ? wG : null), null);
                null !== SG ? (null === (ZG = (wG = yG[SG]).destroy) || void 0 === ZG || ZG.call(wG), yG.splice(SG, 1)) : bG.warn(`Instrumentation "${GG.name}" is not added`)
              }))
            }
          }
        }(bG, ZG, GG, wG, SG, LG),
        kG = dG(bG, ZG, GG, wG, SG, LG, yG);
      return sL(kG),
        function(GG) {
          GG.transports.add(...GG.config.transports), GG.transports.addBeforeSendHooks(GG.config.beforeSend)
        }(kG),
        function(GG) {
          GG.instrumentations.add(...GG.config.instrumentations)
        }(kG), kG
    }

    function xL(GG) {
      const bG = vL(GG);
      if (bG) return OL(bG)
    }
  },
  6706: function(GG, bG, ZG) {
    var wG;
    ! function(SG, LG) {
      var yG = "function",
        kG = "undefined",
        UG = "object",
        YG = "string",
        VG = "major",
        pG = "model",
        fG = "name",
        QG = "type",
        KG = "vendor",
        hG = "version",
        dG = "architecture",
        JG = "console",
        rG = "mobile",
        zG = "tablet",
        EG = "smarttv",
        oG = "wearable",
        XG = "embedded",
        uG = "Amazon",
        iG = "Apple",
        CG = "ASUS",
        WG = "BlackBerry",
        mG = "Browser",
        IG = "Chrome",
        FG = "Firefox",
        vG = "Google",
        aG = "Honor",
        cG = "Huawei",
        lG = "LG",
        jG = "Microsoft",
        PG = "Motorola",
        MG = "Nvidia",
        AG = "OnePlus",
        sG = "Opera",
        qG = "OPPO",
        nG = "Samsung",
        gG = "Sharp",
        eG = "Sony",
        RG = "Xiaomi",
        TG = "Zebra",
        HG = "Facebook",
        tG = "Chromium OS",
        DG = "Mac OS",
        NG = " Browser",
        OG = function(GG) {
          for (var bG = {}, ZG = 0; ZG < GG.length; ZG++) bG[GG[ZG].toUpperCase()] = GG[ZG];
          return bG
        },
        xG = function(GG, bG) {
          return typeof GG === YG && -1 !== BG(bG).indexOf(BG(GG))
        },
        BG = function(GG) {
          return GG.toLowerCase()
        },
        Gb = function(GG, bG) {
          if (typeof GG === YG) return GG = GG.replace(/^\s\s*/, ""), typeof bG === kG ? GG : GG.substring(0, 500)
        },
        bb = function(GG, bG) {
          for (var ZG, wG, SG, kG, YG, VG, pG = 0; pG < bG.length && !YG;) {
            var fG = bG[pG],
              QG = bG[pG + 1];
            for (ZG = wG = 0; ZG < fG.length && !YG && fG[ZG];)
              if (YG = fG[ZG++].exec(GG))
                for (SG = 0; SG < QG.length; SG++) VG = YG[++wG], typeof(kG = QG[SG]) === UG && kG.length > 0 ? 2 === kG.length ? typeof kG[1] == yG ? this[kG[0]] = kG[1].call(this, VG) : this[kG[0]] = kG[1] : 3 === kG.length ? typeof kG[1] !== yG || kG[1].exec && kG[1].test ? this[kG[0]] = VG ? VG.replace(kG[1], kG[2]) : LG : this[kG[0]] = VG ? kG[1].call(this, VG, kG[2]) : LG : 4 === kG.length && (this[kG[0]] = VG ? kG[3].call(this, VG.replace(kG[1], kG[2])) : LG) : this[kG] = VG || LG;
            pG += 2
          }
        },
        Zb = function(GG, bG) {
          for (var ZG in bG)
            if (typeof bG[ZG] === UG && bG[ZG].length > 0) {
              for (var wG = 0; wG < bG[ZG].length; wG++)
                if (xG(bG[ZG][wG], GG)) return "?" === ZG ? LG : ZG
            } else if (xG(bG[ZG], GG)) return "?" === ZG ? LG : ZG;
          return bG.hasOwnProperty("*") ? bG["*"] : GG
        },
        wb = {
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
        Sb = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [hG, [fG, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [hG, [fG, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [fG, hG],
            [/opios[\/ ]+([\w\.]+)/i],
            [hG, [fG, sG + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [hG, [fG, sG + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [hG, [fG, sG]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [hG, [fG, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [hG, [fG, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [fG, hG],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [hG, [fG, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [hG, [fG, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [hG, [fG, "UC" + mG]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [hG, [fG, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [hG, [fG, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [hG, [fG, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [hG, [fG, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [hG, [fG, "Smart Lenovo " + mG]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [fG, /(.+)/, "$1 Secure " + mG], hG
            ],
            [/\bfocus\/([\w\.]+)/i],
            [hG, [fG, FG + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [hG, [fG, sG + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [hG, [fG, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [hG, [fG, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [hG, [fG, sG + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [hG, [fG, "MIUI" + NG]],
            [/fxios\/([\w\.-]+)/i],
            [hG, [fG, FG]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [hG, [fG, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [fG, /(.+)/, "$1Browser"], hG
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [fG, /(.+)/, "$1" + NG], hG
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [hG, [fG, nG + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [hG, [fG, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [fG, "Sogou Mobile"], hG
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [fG, hG],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [fG],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [hG, fG],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [fG, HG], hG
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [fG, hG],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [hG, [fG, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [hG, [fG, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [hG, [fG, IG + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [fG, IG + " WebView"], hG
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [hG, [fG, "Android " + mG]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [fG, hG],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [hG, [fG, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [hG, fG],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [fG, [hG, Zb, {
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
            [fG, hG],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [fG, "Netscape"], hG
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [fG, hG],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [hG, [fG, FG + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [fG, [hG, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [fG, [hG, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [dG, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [dG, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [dG, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [dG, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [dG, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [dG, /ower/, "", BG]
            ],
            [/ sun4\w[;\)]/i],
            [
              [dG, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [dG, BG]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [pG, [KG, nG],
              [QG, zG]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [pG, [KG, nG],
              [QG, rG]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [pG, [KG, iG],
              [QG, rG]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [pG, [KG, iG],
              [QG, zG]
            ],
            [/(macintosh);/i],
            [pG, [KG, iG]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [pG, [KG, gG],
              [QG, rG]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [pG, [KG, aG],
              [QG, zG]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [pG, [KG, aG],
              [QG, rG]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [pG, [KG, cG],
              [QG, zG]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [pG, [KG, cG],
              [QG, rG]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [pG, /_/g, " "],
              [KG, RG],
              [QG, zG]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [pG, /_/g, " "],
              [KG, RG],
              [QG, rG]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [pG, [KG, qG],
              [QG, rG]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [pG, [KG, Zb, {
                OnePlus: ["304", "403", "203"],
                "*": qG
              }],
              [QG, zG]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [pG, [KG, "Vivo"],
              [QG, rG]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [pG, [KG, "Realme"],
              [QG, rG]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [pG, [KG, PG],
              [QG, rG]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [pG, [KG, PG],
              [QG, zG]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [pG, [KG, lG],
              [QG, zG]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [pG, [KG, lG],
              [QG, rG]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [pG, [KG, "Lenovo"],
              [QG, zG]
            ],
            [/(nokia) (t[12][01])/i],
            [KG, pG, [QG, zG]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [pG, /_/g, " "],
              [QG, rG],
              [KG, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [pG, [KG, vG],
              [QG, zG]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [pG, [KG, vG],
              [QG, rG]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [pG, [KG, eG],
              [QG, rG]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [pG, "Xperia Tablet"],
              [KG, eG],
              [QG, zG]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [pG, [KG, AG],
              [QG, rG]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [pG, [KG, uG],
              [QG, zG]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [pG, /(.+)/g, "Fire Phone $1"],
              [KG, uG],
              [QG, rG]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [pG, KG, [QG, zG]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [pG, [KG, WG],
              [QG, rG]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [pG, [KG, CG],
              [QG, zG]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [pG, [KG, CG],
              [QG, rG]
            ],
            [/(nexus 9)/i],
            [pG, [KG, "HTC"],
              [QG, zG]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [KG, [pG, /_/g, " "],
              [QG, rG]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [pG, [KG, "TCL"],
              [QG, zG]
            ],
            [/(itel) ((\w+))/i],
            [
              [KG, BG], pG, [QG, Zb, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [pG, [KG, "Acer"],
              [QG, zG]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [pG, [KG, "Meizu"],
              [QG, rG]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [pG, [KG, "Ulefone"],
              [QG, rG]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [pG, [KG, "Energizer"],
              [QG, rG]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [pG, [KG, "Cat"],
              [QG, rG]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [pG, [KG, "Smartfren"],
              [QG, rG]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [pG, [KG, "Nothing"],
              [QG, rG]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [pG, [KG, "Archos"],
              [QG, zG]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [pG, [KG, "Archos"],
              [QG, rG]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [KG, pG, [QG, zG]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [KG, pG, [QG, rG]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [KG, pG, [QG, zG]],
            [/(surface duo)/i],
            [pG, [KG, jG],
              [QG, zG]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [pG, [KG, "Fairphone"],
              [QG, rG]
            ],
            [/(u304aa)/i],
            [pG, [KG, "AT&T"],
              [QG, rG]
            ],
            [/\bsie-(\w*)/i],
            [pG, [KG, "Siemens"],
              [QG, rG]
            ],
            [/\b(rct\w+) b/i],
            [pG, [KG, "RCA"],
              [QG, zG]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [pG, [KG, "Dell"],
              [QG, zG]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [pG, [KG, "Verizon"],
              [QG, zG]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [pG, [KG, "Barnes & Noble"],
              [QG, zG]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [pG, [KG, "NuVision"],
              [QG, zG]
            ],
            [/\b(k88) b/i],
            [pG, [KG, "ZTE"],
              [QG, zG]
            ],
            [/\b(nx\d{3}j) b/i],
            [pG, [KG, "ZTE"],
              [QG, rG]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [pG, [KG, "Swiss"],
              [QG, rG]
            ],
            [/\b(zur\d{3}) b/i],
            [pG, [KG, "Swiss"],
              [QG, zG]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [pG, [KG, "Zeki"],
              [QG, zG]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [KG, "Dragon Touch"], pG, [QG, zG]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [pG, [KG, "Insignia"],
              [QG, zG]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [pG, [KG, "NextBook"],
              [QG, zG]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [KG, "Voice"], pG, [QG, rG]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [KG, "LvTel"], pG, [QG, rG]
            ],
            [/\b(ph-1) /i],
            [pG, [KG, "Essential"],
              [QG, rG]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [pG, [KG, "Envizen"],
              [QG, zG]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [pG, [KG, "MachSpeed"],
              [QG, zG]
            ],
            [/\btu_(1491) b/i],
            [pG, [KG, "Rotor"],
              [QG, zG]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [pG, [KG, MG],
              [QG, zG]
            ],
            [/(sprint) (\w+)/i],
            [KG, pG, [QG, rG]],
            [/(kin\.[onetw]{3})/i],
            [
              [pG, /\./g, " "],
              [KG, jG],
              [QG, rG]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [pG, [KG, TG],
              [QG, zG]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [pG, [KG, TG],
              [QG, rG]
            ],
            [/smart-tv.+(samsung)/i],
            [KG, [QG, EG]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [pG, /^/, "SmartTV"],
              [KG, nG],
              [QG, EG]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [KG, lG],
              [QG, EG]
            ],
            [/(apple) ?tv/i],
            [KG, [pG, iG + " TV"],
              [QG, EG]
            ],
            [/crkey/i],
            [
              [pG, IG + "cast"],
              [KG, vG],
              [QG, EG]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [pG, [KG, uG],
              [QG, EG]
            ],
            [/(shield \w+ tv)/i],
            [pG, [KG, MG],
              [QG, EG]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [pG, [KG, gG],
              [QG, EG]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [pG, [KG, eG],
              [QG, EG]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [pG, [KG, RG],
              [QG, EG]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [KG, pG, [QG, EG]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [KG, Gb],
              [pG, Gb],
              [QG, EG]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [pG, [QG, EG]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [QG, EG]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [KG, pG, [QG, JG]],
            [/droid.+; (shield)( bui|\))/i],
            [pG, [KG, MG],
              [QG, JG]
            ],
            [/(playstation \w+)/i],
            [pG, [KG, eG],
              [QG, JG]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [pG, [KG, jG],
              [QG, JG]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [pG, [KG, nG],
              [QG, oG]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [KG, pG, [QG, oG]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [pG, [KG, qG],
              [QG, oG]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [pG, [KG, iG],
              [QG, oG]
            ],
            [/(opwwe\d{3})/i],
            [pG, [KG, AG],
              [QG, oG]
            ],
            [/(moto 360)/i],
            [pG, [KG, PG],
              [QG, oG]
            ],
            [/(smartwatch 3)/i],
            [pG, [KG, eG],
              [QG, oG]
            ],
            [/(g watch r)/i],
            [pG, [KG, lG],
              [QG, oG]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [pG, [KG, TG],
              [QG, oG]
            ],
            [/droid.+; (glass) \d/i],
            [pG, [KG, vG],
              [QG, oG]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [KG, pG, [QG, oG]],
            [/; (quest( \d| pro)?)/i],
            [pG, [KG, HG],
              [QG, oG]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [KG, [QG, XG]],
            [/(aeobc)\b/i],
            [pG, [KG, uG],
              [QG, XG]
            ],
            [/(homepod).+mac os/i],
            [pG, [KG, iG],
              [QG, XG]
            ],
            [/windows iot/i],
            [
              [QG, XG]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [pG, [QG, rG]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [pG, [QG, zG]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [QG, zG]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [QG, rG]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [pG, [KG, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [hG, [fG, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [fG, hG],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [hG, [fG, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [fG, hG],
            [/ladybird\//i],
            [
              [fG, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [hG, fG]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [fG, hG],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [fG, [hG, Zb, wb]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [hG, Zb, wb],
              [fG, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [hG, /_/g, "."],
              [fG, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [fG, DG],
              [hG, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [hG, fG],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [fG, /(.+)/, "$1 Touch"], hG
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [fG, hG],
            [/\(bb(10);/i],
            [hG, [fG, WG]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [hG, [fG, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [hG, [fG, FG + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [hG, [fG, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [hG, [fG, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [hG, [fG, IG + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [fG, tG], hG
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [fG, hG],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [fG, "Solaris"], hG
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [fG, hG]
          ]
        },
        Lb = function(GG, bG) {
          if (typeof GG === UG && (bG = GG, GG = LG), !(this instanceof Lb)) return new Lb(GG, bG).getResult();
          var ZG = typeof SG !== kG && SG.navigator ? SG.navigator : LG,
            wG = GG || (ZG && ZG.userAgent ? ZG.userAgent : ""),
            JG = ZG && ZG.userAgentData ? ZG.userAgentData : LG,
            EG = bG ? function(GG, bG) {
              var ZG = {};
              for (var wG in GG) bG[wG] && bG[wG].length % 2 === 0 ? ZG[wG] = bG[wG].concat(GG[wG]) : ZG[wG] = GG[wG];
              return ZG
            }(Sb, bG) : Sb,
            oG = ZG && ZG.userAgent == wG;
          return this.getBrowser = function() {
            var GG, bG = {};
            return bG[fG] = LG, bG[hG] = LG, bb.call(bG, wG, EG.browser), bG[VG] = typeof(GG = bG[hG]) === YG ? GG.replace(/[^\d\.]/g, "").split(".")[0] : LG, oG && ZG && ZG.brave && typeof ZG.brave.isBrave == yG && (bG[fG] = "Brave"), bG
          }, this.getCPU = function() {
            var GG = {};
            return GG[dG] = LG, bb.call(GG, wG, EG.cpu), GG
          }, this.getDevice = function() {
            var GG = {};
            return GG[KG] = LG, GG[pG] = LG, GG[QG] = LG, bb.call(GG, wG, EG.device), oG && !GG[QG] && JG && JG.mobile && (GG[QG] = rG), oG && "Macintosh" == GG[pG] && ZG && typeof ZG.standalone !== kG && ZG.maxTouchPoints && ZG.maxTouchPoints > 2 && (GG[pG] = "iPad", GG[QG] = zG), GG
          }, this.CK = function() {
            var GG = {};
            return GG[fG] = LG, GG[hG] = LG, bb.call(GG, wG, EG.engine), GG
          }, this.getOS = function() {
            var GG = {};
            return GG[fG] = LG, GG[hG] = LG, bb.call(GG, wG, EG.os), oG && !GG[fG] && JG && JG.platform && "Unknown" != JG.platform && (GG[fG] = JG.platform.replace(/chrome os/i, tG).replace(/macos/i, DG)), GG
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.CK(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return wG
          }, this.setUA = function(GG) {
            return wG = typeof GG === YG && GG.length > 500 ? Gb(GG, 500) : GG, this
          }, this.setUA(wG), this
        };
      Lb.VERSION = "1.0.41", Lb.BROWSER = OG([fG, hG, VG]), Lb.CPU = OG([dG]), Lb.DEVICE = OG([pG, KG, QG, JG, rG, EG, zG, oG, XG]), Lb.ENGINE = Lb.OS = OG([fG, hG]), typeof bG !== kG ? (GG.exports && (bG = GG.exports = Lb), bG.UAParser = Lb) : ZG.amdO ? (wG = function() {
        return Lb
      }.call(bG, ZG, bG, GG)) === LG || (GG.exports = wG) : typeof SG !== kG && (SG.UAParser = Lb);
      var yb = typeof SG !== kG && (SG.jQuery || SG.Zepto);
      if (yb && !yb.ua) {
        var kb = new Lb;
        yb.ua = kb.getResult(), yb.ua.get = function() {
          return kb.getUA()
        }, yb.ua.set = function(GG) {
          kb.setUA(GG);
          var bG = kb.getResult();
          for (var ZG in bG) yb.ua[ZG] = bG[ZG]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);