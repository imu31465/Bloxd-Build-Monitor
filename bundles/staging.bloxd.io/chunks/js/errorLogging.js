export const id = 31;
export const ids = [31];
export const modules = {
  6728: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BaseExtension: () => Dw,
      BaseInstrumentation: () => zw,
      BaseTransport: () => zK,
      CSPInstrumentation: () => Cs,
      ConsoleInstrumentation: () => dw,
      ConsoleTransport: () => rK,
      EVENT_CLICK: () => Mz,
      EVENT_NAVIGATION: () => Oz,
      EVENT_ROUTE_CHANGE: () => Pz,
      EVENT_SESSION_EXTEND: () => Xz,
      EVENT_SESSION_RESUME: () => Qz,
      EVENT_SESSION_START: () => Ez,
      EVENT_VIEW_CHANGED: () => Jz,
      ErrorsInstrumentation: () => iw,
      FetchTransport: () => XK,
      InternalLoggerLevel: () => oz,
      LogLevel: () => Ow,
      MAX_SESSION_PERSISTENCE_TIME: () => cD,
      NavigationInstrumentation: () => os,
      Observable: () => Mw,
      PerformanceInstrumentation: () => tp,
      PersistentSessionsManager: () => Wz,
      SESSION_EXPIRATION_TIME: () => KD,
      SESSION_INACTIVITY_TIME: () => rD,
      STORAGE_KEY: () => sD,
      SessionInstrumentation: () => pw,
      TransportItemType: () => wK,
      UserActionInstrumentation: () => Ps,
      UserActionState: () => Gs,
      VERSION: () => ww,
      ViewInstrumentation: () => Ww,
      VolatileSessionsManager: () => Nz,
      WebVitalsInstrumentation: () => Sp,
      allLogLevels: () => Ew,
      browserMeta: () => Ys,
      buildStackFrame: () => sw,
      captureMetas: () => yK,
      createInternalLogger: () => TK,
      createPromiseBuffer: () => GK,
      createSession: () => qs,
      deepEqual: () => nz,
      defaultEventDomain: () => pD,
      defaultExceptionType: () => Pw,
      defaultGlobalObjectKey: () => bK,
      defaultInternalLoggerLevel: () => uz,
      defaultLogLevel: () => Jw,
      faro: () => BD,
      genShortID: () => hz,
      getCurrentTimestamp: () => Iz,
      getDataFromSafariExtensions: () => fw,
      getIgnoreUrls: () => vD,
      getInternalFaroFromGlobalObject: () => UD,
      getStackFramesFromError: () => Bw,
      getTransportBody: () => KK,
      getUrlFromResource: () => FD,
      getWebInstrumentations: () => as,
      globalObject: () => RD,
      initializeFaro: () => zr,
      internalGlobalObjectKey: () => AD,
      isArray: () => TD,
      isBoolean: () => VD,
      isDomError: () => ZD,
      isDomException: () => yD,
      isElement: () => mD,
      isElementDefined: () => kD,
      AI: () => uD,
      isError: () => WD,
      isErrorDefined: () => lD,
      isErrorEvent: () => ND,
      isEvent: () => iD,
      isEventDefined: () => SD,
      isFunction: () => xD,
      isInstanceOf: () => MD,
      isInt: () => XD,
      isInternalFaroOnGlobalObject: () => ID,
      isMap: () => oD,
      isMapDefined: () => eD,
      isNull: () => JD,
      isNumber: () => QD,
      isObject: () => CD,
      isPrimitive: () => dD,
      isRegExp: () => bD,
      isString: () => ED,
      isSymbol: () => PD,
      isSyntheticEvent: () => aD,
      isThenable: () => jD,
      isToString: () => nD,
      isTypeof: () => hD,
      isUndefined: () => OD,
      makeCoreConfig: () => SK,
      noop: () => ez,
      osMeta: () => Hs,
      parseStacktrace: () => Gw,
      sdkMeta: () => DK,
      setInternalFaroOnGlobalObject: () => fD,
      transportItemTypeToBodyKey: () => pK,
      unknownString: () => lw,
      userActionDataAttribute: () => Fp,
      userActionTimeoutDataAttribute: () => Yp
    });
    const pD = "browser",
      sD = "com.grafana.faro.session",
      KD = 144e5,
      rD = 9e5,
      LD = 1e3,
      cD = rD,
      gD = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: cD
      };
    const RD = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof wD.g ? wD.g : "undefined" !== typeof self ? self : void 0;
    const AD = "_faroInternal";

    function UD() {
      return RD[AD]
    }

    function fD(DD) {
      DD.config.isolate ? DD.internalLogger.debug("Skipping registering internal Faro instance on global object") : (DD.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(RD, AD, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: DD
      }))
    }

    function ID() {
      return AD in RD
    }
    let BD = {
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

    function GD(DD, zD, wD, pD, sD, KD, rD) {
      return zD.debug("Initializing Faro"), BD = {
          api: KD,
          config: wD,
          instrumentations: rD,
          internalLogger: zD,
          metas: pD,
          pause: sD.pause,
          transports: sD,
          unpatchedConsole: DD,
          unpause: sD.unpause
        }, fD(BD),
        function(DD) {
          if (DD.config.preventGlobalExposure) DD.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (DD.internalLogger.debug(`Registering public faro reference in the global scope using "${DD.config.globalObjectKey}" key`), DD.config.globalObjectKey in RD) return void DD.internalLogger.warn(`Skipping global registration due to key "${DD.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(RD, DD.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: DD
            })
          }
        }(BD), BD
    }

    function hD(DD, zD) {
      return typeof DD === zD
    }

    function nD(DD, zD) {
      return Object.prototype.toString.call(DD) === `[object ${zD}]`
    }

    function MD(DD, zD) {
      try {
        return DD instanceof zD
      } catch (wD) {
        return !1
      }
    }
    const OD = DD => hD(DD, "undefined"),
      JD = DD => hD(DD, "null"),
      ED = DD => hD(DD, "string"),
      QD = DD => hD(DD, "number") && !isNaN(DD) || hD(DD, "bigint"),
      XD = DD => QD(DD) && Number.isInteger(DD),
      VD = DD => hD(DD, "boolean"),
      PD = DD => hD(DD, "symbol"),
      CD = DD => !JD(DD) && hD(DD, "object"),
      xD = DD => hD(DD, "function"),
      TD = DD => nD(DD, "Array"),
      bD = DD => nD(DD, "RegExp"),
      jD = DD => xD(null === DD || void 0 === DD ? void 0 : DD.then),
      dD = DD => !CD(DD) && !xD(DD),
      SD = "undefined" !== typeof Event,
      iD = DD => SD && MD(DD, Event),
      lD = "undefined" !== typeof Error,
      WD = DD => lD && MD(DD, Error),
      ND = DD => nD(DD, "ErrorEvent"),
      ZD = DD => nD(DD, "DOMError"),
      yD = DD => nD(DD, "DOMException"),
      kD = "undefined" !== typeof Element,
      mD = DD => kD && MD(DD, Element),
      eD = "undefined" !== typeof Map,
      oD = DD => eD && MD(DD, Map),
      aD = DD => CD(DD) && "nativeEvent" in DD && "preventDefault" in DD && "stopPropagation" in DD;

    function uD(DD) {
      return null == DD || (TD(DD) || ED(DD) ? 0 === DD.length : !!CD(DD) && 0 === Object.keys(DD).length)
    }

    function vD() {
      return BD.transports.transports.flatMap((DD => DD.getIgnoreUrls()))
    }

    function tD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return vD().some((zD => DD && null != DD.match(zD)))
    }

    function FD(DD) {
      return ED(DD) ? DD : DD instanceof URL ? DD.href : !uD(DD) && xD(null === DD || void 0 === DD ? void 0 : DD.toString) ? DD.toString() : void 0
    }
    const YD = "sessionStorage",
      HD = "localStorage";

    function qD(DD) {
      try {
        let zD;
        zD = window[DD];
        const wD = "__faro_storage_test__";
        return zD.setItem(wD, wD), zD.removeItem(wD), !0
      } catch (wD) {
        var zD;
        return null === (zD = BD.internalLogger) || void 0 === zD || zD.info(`Web storage of type ${DD} is not available. Reason: ${wD}`), !1
      }
    }

    function Dz(DD, zD) {
      return Kz(zD) ? window[zD].getItem(DD) : null
    }

    function zz(DD, zD, wD) {
      if (Kz(wD)) try {
        window[wD].setItem(DD, zD)
      } catch (pD) {}
    }

    function wz(DD, zD) {
      Kz(zD) && window[zD].removeItem(DD)
    }
    const pz = qD(HD),
      sz = qD(YD);

    function Kz(DD) {
      return DD === HD ? pz : DD === YD && sz
    }

    function rz(DD) {
      return rz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, rz(DD)
    }

    function Lz(DD) {
      var zD = function(DD, zD) {
        if ("object" != rz(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != rz(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == rz(zD) ? zD : zD + ""
    }

    function cz(DD, zD, wD) {
      return (zD = Lz(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function gz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Rz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? gz(Object(wD), !0).forEach((function(zD) {
          cz(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : gz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function Az() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD;
      var zD, wD, pD;
      const sD = DD.config.sessionTracking,
        KD = null !== (zD = null !== (wD = null === sD || void 0 === sD || null === (pD = sD.sampler) || void 0 === pD ? void 0 : pD.call(sD, {
          metas: DD.metas.value
        })) && void 0 !== wD ? wD : null === sD || void 0 === sD ? void 0 : sD.samplingRate) && void 0 !== zD ? zD : 1,
        rD = "number" === typeof KD ? function(DD) {
          return Math.min(1, Math.max(0, DD))
        }(KD) : 0;
      if (!(rD > 0)) return !1;
      if (1 === rD) return !0;
      try {
        const DD = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === DD || void 0 === DD ? void 0 : DD.getRandomValues)) {
          const zD = new Uint32Array(1);
          return DD.getRandomValues(zD), zD[0] / Math.pow(2, 32) < rD
        }
      } catch (LD) {}
      return Math.random() < rD
    }

    function Uz() {
      return Date.now()
    }

    function fz() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Iz() {
      return (new Date).toISOString()
    }

    function Bz(DD) {
      return new Date(DD).toISOString()
    }
    const Gz = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function hz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const zD = new Uint32Array(DD),
        wD = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === wD || void 0 === wD ? void 0 : wD.getRandomValues) wD.getRandomValues(zD);
      else
        for (let sD = 0; sD < DD; sD++) zD[sD] = Math.floor(4294967296 * Math.random());
      let pD = "";
      for (let sD = 0; sD < DD; sD++) pD += Gz[zD[sD] % 59];
      return pD
    }

    function nz(DD, zD) {
      if (DD === zD) return !0;
      if (hD(DD, "number") && isNaN(DD)) return hD(zD, "number") && isNaN(zD);
      const wD = TD(DD),
        pD = TD(zD);
      if (wD !== pD) return !1;
      if (wD && pD) {
        const wD = DD.length;
        if (wD !== zD.length) return !1;
        for (let pD = wD; 0 !== pD--;)
          if (!nz(DD[pD], zD[pD])) return !1;
        return !0
      }
      const sD = CD(DD),
        KD = CD(zD);
      if (sD !== KD) return !1;
      if (DD && zD && sD && KD) {
        const wD = Object.keys(DD),
          pD = Object.keys(zD);
        if (wD.length !== pD.length) return !1;
        for (let DD of wD)
          if (!pD.includes(DD)) return !1;
        for (let sD of wD)
          if (!nz(DD[sD], zD[sD])) return !1;
        return !0
      }
      return !1
    }
    const Mz = "click",
      Oz = "navigation",
      Jz = "view_changed",
      Ez = "session_start",
      Qz = "session_resume",
      Xz = "session_extend",
      Vz = "service_name_override",
      Pz = "route_change";

    function Cz() {
      let {
        sessionId: DD,
        started: zD,
        lastActivity: wD,
        isSampled: pD = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, sD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD;
      var KD;
      const rD = Uz(),
        LD = null === (KD = sD.config) || void 0 === KD || null === (KD = KD.sessionTracking) || void 0 === KD ? void 0 : KD.generateSessionId;
      return null == DD && (DD = "function" === typeof LD ? LD() : hz()), {
        sessionId: DD,
        lastActivity: null !== wD && void 0 !== wD ? wD : rD,
        started: null !== zD && void 0 !== zD ? zD : rD,
        isSampled: pD
      }
    }

    function xz(DD) {
      if (null == DD) return !1;
      const zD = Uz();
      return zD - DD.started < 144e5 && zD - DD.lastActivity < rD
    }

    function Tz(DD) {
      let {
        fetchUserSession: zD,
        storeUserSession: wD,
        adoptSession: pD,
        updateInterval: sD = 0
      } = DD, LD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD, cD = 0;
      return function() {
        let {
          forceSessionExtend: DD = !1,
          refreshActivity: gD = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var RD, AD;
        if (!zD || !wD) return;
        const UD = Uz();
        if (!DD && UD < cD && cD - UD <= sD) return;
        const fD = LD.config.sessionTracking,
          ID = null === fD || void 0 === fD ? void 0 : fD.persistent;
        if (ID && !pz || !ID && !sz) return;
        const BD = zD();
        if (cD = Math.min(UD + sD, (null !== (RD = null === BD || void 0 === BD ? void 0 : BD.started) && void 0 !== RD ? RD : UD) + KD, (null !== (AD = null === BD || void 0 === BD ? void 0 : BD.lastActivity) && void 0 !== AD ? AD : UD) + rD), !1 === DD && xz(BD)) {
          var GD;
          gD && wD(Rz(Rz({}, BD), {}, {
            lastActivity: UD
          }));
          const DD = null === (GD = LD.metas.value.session) || void 0 === GD ? void 0 : GD.id;
          null != pD && null != BD.sessionMeta && BD.sessionId !== DD && pD(BD.sessionMeta)
        } else {
          var hD, nD, MD;
          let DD = jz(Cz({
            isSampled: Az(LD)
          }, LD), BD, LD);
          cD = UD + sD, wD(DD), null === (hD = LD.api) || void 0 === hD || hD.setSession(DD.sessionMeta), null === fD || void 0 === fD || null === (nD = fD.onSessionChange) || void 0 === nD || nD.call(fD, null !== (MD = null === BD || void 0 === BD ? void 0 : BD.sessionMeta) && void 0 !== MD ? MD : null, DD.sessionMeta)
        }
      }
    }

    function bz(DD) {
      let zD, {
          fetchUserSession: wD,
          storeUserSession: pD,
          updateInterval: sD = 0
        } = DD,
        KD = 0;
      return DD => {
        const rD = Uz();
        if (DD === zD && rD < KD && KD - rD <= sD) return;
        zD = DD, KD = rD + sD;
        const LD = wD();
        (null === LD || void 0 === LD ? void 0 : LD.sessionId) === DD && xz(LD) && pD(Rz(Rz({}, LD), {}, {
          lastActivity: rD
        }))
      }
    }

    function jz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BD;
      var pD, sD, KD, rD, LD, cD;
      const gD = Rz(Rz({}, DD), {}, {
          sessionMeta: {
            id: DD.sessionId,
            attributes: Sz(Rz(Rz(Rz({}, null === (pD = wD.config.sessionTracking) || void 0 === pD || null === (pD = pD.session) || void 0 === pD ? void 0 : pD.attributes), null !== (sD = null === (KD = wD.metas.value.session) || void 0 === KD ? void 0 : KD.attributes) && void 0 !== sD ? sD : {}), {}, {
              isSampled: DD.isSampled.toString()
            }))
          }
        }),
        RD = null !== (rD = null === (LD = wD.metas.value.session) || void 0 === LD ? void 0 : LD.overrides) && void 0 !== rD ? rD : null === zD || void 0 === zD || null === (cD = zD.sessionMeta) || void 0 === cD ? void 0 : cD.overrides;
      uD(RD) || (gD.sessionMeta.overrides = RD);
      const AD = null === zD || void 0 === zD ? void 0 : zD.sessionId;
      return null != AD && (gD.sessionMeta.attributes.previousSession = AD), gD
    }

    function dz(DD) {
      let {
        fetchUserSession: zD,
        storeUserSession: wD
      } = DD, pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD, sD = !1;
      return function(DD) {
        if (sD) return;
        const KD = DD.session,
          rD = zD();
        let LD = null === KD || void 0 === KD ? void 0 : KD.id;
        const cD = null === KD || void 0 === KD ? void 0 : KD.attributes,
          gD = null === KD || void 0 === KD ? void 0 : KD.overrides,
          RD = null === rD || void 0 === rD ? void 0 : rD.sessionMeta,
          AD = null === RD || void 0 === RD ? void 0 : RD.overrides,
          UD = !!gD && !nz(gD, AD),
          fD = !!cD && !nz(cD, null === RD || void 0 === RD ? void 0 : RD.attributes);
        if (KD && LD !== (null === rD || void 0 === rD ? void 0 : rD.sessionId) || fD || UD) {
          var ID, BD;
          const DD = null != rD && LD === rD.sessionId,
            zD = jz(DD ? rD : Cz({
              sessionId: LD,
              isSampled: Az(pD)
            }, pD), rD, pD),
            KD = null === rD || void 0 === rD || null === (ID = rD.sessionMeta) || void 0 === ID || null === (ID = ID.attributes) || void 0 === ID ? void 0 : ID.previousSession;
          DD && null != KD && KD !== zD.sessionId && (zD.sessionMeta.attributes.previousSession = KD), (null === (BD = zD.sessionMeta.attributes) || void 0 === BD ? void 0 : BD.previousSession) === zD.sessionId && delete zD.sessionMeta.attributes.previousSession, wD(zD),
            function(DD, zD) {
              let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var sD, KD, rD;
              if (!zD) return;
              const LD = wD.serviceName,
                cD = null !== (sD = null !== (KD = pD.serviceName) && void 0 !== KD ? KD : null === (rD = DD.metas.value.app) || void 0 === rD ? void 0 : rD.name) && void 0 !== sD ? sD : "";
              LD && LD !== cD && DD.api.pushEvent(Vz, {
                serviceName: LD,
                previousServiceName: cD
              })
            }(pD, UD, gD, AD), sD = !0;
          try {
            pD.api.setSession(zD.sessionMeta)
          } finally {
            sD = !1
          }
        }
      }
    }

    function Sz(DD) {
      const zD = {};
      for (const wD of Object.keys(DD)) {
        const pD = DD[wD];
        void 0 !== pD && (zD[wD] = pD)
      }
      return zD
    }

    function iz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== DD && void 0 !== DD ? DD : {}, function() {
        const DD = new WeakSet;
        return function(zD, wD) {
          if (CD(wD) && null !== wD) {
            if (DD.has(wD)) return null;
            DD.add(wD)
          }
          return wD
        }
      }())
    }

    function lz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zD = {};
      for (const [wD, pD] of Object.entries(DD)) zD[wD] = CD(pD) && null !== pD ? iz(pD) : String(pD);
      return zD
    }
    var Wz = class DD {
      constructor() {
        var zD = this;
        let wD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD;
        this.context = wD, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = DD => {
          this.adopting = !0;
          try {
            var zD;
            null === (zD = this.context.api) || void 0 === zD || zD.setSession(DD)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: DD = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return zD.updateUserSession({
            refreshActivity: DD
          })
        }, this.recordActivity = bz({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          updateInterval: LD
        }), this.updateUserSession = Tz({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: LD
        }, wD), this.init()
      }
      static removeUserSession() {
        wz(sD, DD.storageTypeLocal)
      }
      static storeUserSession(zD) {
        zz(sD, iz(zD), DD.storageTypeLocal)
      }
      static fetchUserSession() {
        const zD = Dz(sD, DD.storageTypeLocal);
        return zD ? JSON.parse(zD) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var DD;
            this.updateSession({
              refreshActivity: !1
            });
            const zD = null === (DD = this.context.api) || void 0 === DD || null === (DD = DD.getSession()) || void 0 === DD ? void 0 : DD.id;
            zD && this.recordActivity(zD)
          }
        })), this.context.metas.addListener(dz({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession
        }, this.context))
      }
    };
    Wz.storageTypeLocal = HD;
    var Nz = class DD {
      constructor() {
        var zD = this;
        let wD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD;
        this.context = wD, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: DD = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return zD.updateUserSession({
            refreshActivity: DD
          })
        }, this.recordActivity = bz({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          updateInterval: LD
        }), this.updateUserSession = Tz({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          updateInterval: LD
        }, wD), this.init()
      }
      static removeUserSession() {
        wz(sD, DD.storageTypeSession)
      }
      static storeUserSession(zD) {
        zz(sD, iz(zD), DD.storageTypeSession)
      }
      static fetchUserSession() {
        const zD = Dz(sD, DD.storageTypeSession);
        return zD ? JSON.parse(zD) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var DD;
            this.updateSession({
              refreshActivity: !1
            });
            const zD = null === (DD = this.context.api) || void 0 === DD || null === (DD = DD.getSession()) || void 0 === DD ? void 0 : DD.id;
            zD && this.recordActivity(zD)
          }
        })), this.context.metas.addListener(dz({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession
        }, this.context))
      }
    };
    Nz.storageTypeSession = YD;
    const Zz = new WeakMap;

    function yz(DD) {
      let zD = Zz.get(DD);
      if (!zD) {
        let wD = [],
          pD = [];
        zD = {
          addSessionUpdateListener: DD => {
            wD.push(DD)
          },
          removeSessionUpdateListener: DD => {
            wD = wD.filter((zD => zD !== DD))
          },
          notifySessionUpdate: DD => {
            wD.forEach((zD => zD(DD)))
          },
          shouldCapture: () => pD.every((DD => DD())),
          addCaptureFilter: DD => {
            pD.push(DD)
          },
          removeCaptureFilter: DD => {
            pD = pD.filter((zD => zD !== DD))
          }
        }, Zz.set(DD, zD)
      }
      return zD
    }
    var kz = class {
      constructor(DD, zD, wD) {
        this.metas = DD, this.transports = zD, this.onActivate = wD, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = DD => {
          var zD, wD, pD;
          const sD = this.pending;
          var KD, rD;
          if ("overrides" === DD.type) return void(this.pending = {
            reset: null !== (KD = null === sD || void 0 === sD ? void 0 : sD.reset) && void 0 !== KD && KD,
            inheritOverrides: null === (rD = null === sD || void 0 === sD ? void 0 : sD.inheritOverrides) || void 0 === rD || rD,
            session: Rz(Rz({}, null === sD || void 0 === sD ? void 0 : sD.session), {}, {
              overrides: Rz(Rz({}, null === sD || void 0 === sD ? void 0 : sD.session.overrides), DD.overrides)
            })
          });
          const LD = DD.session,
            cD = uD(LD) || null != LD && "id" in LD && !LD.id,
            gD = null !== (zD = null === LD || void 0 === LD ? void 0 : LD.overrides) && void 0 !== zD ? zD : null === sD || void 0 === sD ? void 0 : sD.session.overrides;
          this.pending = {
            reset: cD || !(null === LD || void 0 === LD ? void 0 : LD.id) && null !== (wD = null === sD || void 0 === sD ? void 0 : sD.reset) && void 0 !== wD && wD,
            inheritOverrides: !(!DD.overrides && void 0 !== (null === LD || void 0 === LD ? void 0 : LD.overrides)) && (null === (pD = null === sD || void 0 === sD ? void 0 : sD.inheritOverrides) || void 0 === pD || pD),
            session: {
              id: null === LD || void 0 === LD ? void 0 : LD.id,
              attributes: (null === LD || void 0 === LD ? void 0 : LD.attributes) && Rz({}, LD.attributes),
              overrides: DD.overrides ? Rz(Rz({}, null === sD || void 0 === sD ? void 0 : sD.session.overrides), DD.overrides) : gD && Rz({}, gD)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var DD, zD;
        this.waiting = !0, yz(this.metas).addSessionUpdateListener(this.recordUpdate), yz(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (DD = (zD = this.metas).addCaptureListener) || void 0 === DD || DD.call(zD, this.activate), this.activate()
      }
      destroy() {
        var DD, zD;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), yz(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (DD = (zD = this.metas).removeCaptureListener) || void 0 === DD || DD.call(zD, this.activate), yz(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function mz(DD) {
      return (null === DD || void 0 === DD ? void 0 : DD.persistent) ? Wz : Nz
    }

    function ez() {}
    let oz = function(DD) {
      return DD[DD.OFF = 0] = "OFF", DD[DD.ERROR = 1] = "ERROR", DD[DD.WARN = 2] = "WARN", DD[DD.INFO = 3] = "INFO", DD[DD.VERBOSE = 4] = "VERBOSE", DD
    }({});
    const az = {
        debug: ez,
        error: ez,
        info: ez,
        prefix: "Faro",
        warn: ez
      },
      uz = 1;

    function vz(DD) {
      return vz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, vz(DD)
    }

    function tz(DD) {
      var zD = function(DD, zD) {
        if ("object" != vz(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != vz(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == vz(zD) ? zD : zD + ""
    }

    function Fz(DD, zD, wD) {
      return (zD = tz(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Yz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Hz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? Yz(Object(wD), !0).forEach((function(zD) {
          Fz(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : Yz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }
    const qz = Hz({}, console);
    var Dw = class {
        constructor() {
          this.unpatchedConsole = qz, this.internalLogger = az, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
          this.internalLogger.debug(`${this.name}\n`, ...zD)
        }
        logInfo() {
          for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
          this.internalLogger.info(`${this.name}\n`, ...zD)
        }
        logWarn() {
          for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
          this.internalLogger.warn(`${this.name}\n`, ...zD)
        }
        logError() {
          for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
          this.internalLogger.error(`${this.name}\n`, ...zD)
        }
      },
      zw = class extends Dw {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ww = "2.12.1";
    var pw = class extends zw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ww, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(DD) {
        var zD;
        const wD = DD.session;
        if (wD && wD.id !== (null === (zD = this.notifiedSession) || void 0 === zD ? void 0 : zD.id)) {
          var pD;
          if (this.isAdoptingSession()) return void(this.notifiedSession = wD);
          if (this.notifiedSession && this.notifiedSession.id === (null === (pD = wD.attributes) || void 0 === pD ? void 0 : pD.previousSession)) return this.api.pushEvent(Xz, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = wD);
          this.notifiedSession = wD, this.api.pushEvent(Ez, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(DD, zD, wD) {
        const pD = null === wD || void 0 === wD ? void 0 : wD.session;
        let sD, KD, rD = DD.fetchUserSession();
        if (zD.persistent && zD.maxSessionPersistenceTime && rD) {
          const DD = Uz();
          rD.lastActivity < DD - zD.maxSessionPersistenceTime && (Wz.removeUserSession(), rD = null)
        }
        const LD = xz(rD);
        if ((null === wD || void 0 === wD ? void 0 : wD.reset) || !LD || (null === pD || void 0 === pD ? void 0 : pD.id) && pD.id !== (null === rD || void 0 === rD ? void 0 : rD.sessionId)) {
          var cD, gD, RD, AD, UD, fD;
          KD = Cz({
            sessionId: (null === wD || void 0 === wD ? void 0 : wD.reset) ? void 0 : null !== (cD = null === pD || void 0 === pD ? void 0 : pD.id) && void 0 !== cD ? cD : null === (gD = zD.session) || void 0 === gD ? void 0 : gD.id,
            isSampled: Az(this)
          }, this);
          const DD = KD.sessionId,
            ID = wD && LD ? null === rD || void 0 === rD || null === (RD = rD.sessionMeta) || void 0 === RD ? void 0 : RD.overrides : void 0,
            BD = ID ? Rz(Rz({}, null === (AD = zD.session) || void 0 === AD ? void 0 : AD.overrides), ID) : null === (UD = zD.session) || void 0 === UD ? void 0 : UD.overrides;
          KD.sessionMeta = Rz({
            id: DD,
            attributes: Rz({
              isSampled: KD.isSampled.toString()
            }, null === (fD = zD.session) || void 0 === fD ? void 0 : fD.attributes)
          }, BD ? {
            overrides: BD
          } : {}), sD = Ez
        } else {
          var ID, BD;
          const DD = null === rD || void 0 === rD ? void 0 : rD.sessionId;
          KD = Cz({
            sessionId: DD,
            isSampled: rD.isSampled || !1,
            started: null === rD || void 0 === rD ? void 0 : rD.started
          }, this);
          const wD = null === rD || void 0 === rD ? void 0 : rD.sessionMeta,
            pD = Rz(Rz({}, null === (ID = zD.session) || void 0 === ID ? void 0 : ID.overrides), null === wD || void 0 === wD ? void 0 : wD.overrides);
          KD.sessionMeta = Rz(Rz({}, zD.session), {}, {
            id: DD,
            attributes: Rz(Rz(Rz({}, null === (BD = zD.session) || void 0 === BD ? void 0 : BD.attributes), null === wD || void 0 === wD ? void 0 : wD.attributes), {}, {
              isSampled: KD.isSampled.toString()
            }),
            overrides: pD
          }), sD = Qz
        }
        var GD;
        if (pD && (KD.sessionMeta = Rz(Rz({}, KD.sessionMeta), {}, {
            attributes: Rz(Rz(Rz({}, null === (GD = KD.sessionMeta) || void 0 === GD ? void 0 : GD.attributes), pD.attributes), {}, {
              isSampled: KD.isSampled.toString()
            })
          }), pD.overrides)) {
          const DD = (null === wD || void 0 === wD ? void 0 : wD.inheritOverrides) ? Rz(Rz({}, KD.sessionMeta.overrides), pD.overrides) : pD.overrides;
          Object.keys(DD).length > 0 ? KD.sessionMeta.overrides = DD : delete KD.sessionMeta.overrides
        }
        return {
          initialSession: KD,
          lifecycleType: sD
        }
      }
      registerBeforeSendHook(DD) {
        var zD;
        this.beforeSendHook = zD => {
          var wD, pD;
          const sD = null === (wD = zD.meta.session) || void 0 === wD ? void 0 : wD.id;
          sD && !this.transports.isPaused() && DD(sD);
          const KD = null === (pD = zD.meta.session) || void 0 === pD ? void 0 : pD.attributes;
          if (KD && "true" === (null === KD || void 0 === KD ? void 0 : KD.isSampled)) {
            var rD;
            let DD = JSON.parse(JSON.stringify(zD));
            const wD = null === (rD = DD.meta.session) || void 0 === rD ? void 0 : rD.attributes;
            var LD;
            if (null === wD || void 0 === wD || delete wD.isSampled, 0 === Object.keys(null !== wD && void 0 !== wD ? wD : {}).length) null === (LD = DD.meta.session) || void 0 === LD || delete LD.attributes;
            return DD
          }
          return null
        }, null === (zD = this.transports) || void 0 === zD || zD.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var DD;
        this.logDebug("init session instrumentation");
        const zD = document.prerendering;
        var wD;
        if ((null === (DD = this.config.sessionTracking) || void 0 === DD ? void 0 : DD.enabled) && (zD || this.prerenderSession)) return null !== (wD = this.prerenderSession) && void 0 !== wD || (this.prerenderSession = new kz(this.metas, this.transports, (DD => {
          this.prerenderSession = void 0, this.initializeSession(DD)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(DD) {
        const zD = this.config.sessionTracking;
        if (null === zD || void 0 === zD ? void 0 : zD.enabled) {
          var wD, pD;
          const sD = mz(zD),
            KD = new sD(this);
          this.isAdoptingSession = KD.isAdopting, this.registerBeforeSendHook(KD.recordActivity);
          const {
            initialSession: rD,
            lifecycleType: LD
          } = this.createInitialSession(sD, zD, DD);
          sD.storeUserSession(rD);
          const cD = rD.sessionMeta;
          this.notifiedSession = cD, this.api.setSession(cD), this.captureListener = () => {
            this.transports.isPaused() || KD.updateSession({
              refreshActivity: !1
            })
          }, null === (wD = (pD = this.metas).addCaptureListener) || void 0 === wD || wD.call(pD, this.captureListener), LD === Ez && this.api.pushEvent(Ez, {}, void 0, {
            skipDedupe: !0
          }), LD === Qz && this.api.pushEvent(Qz, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var DD, zD, wD;
        (null === (DD = this.prerenderSession) || void 0 === DD || DD.destroy(), this.captureListener) && (null === (zD = (wD = this.metas).removeCaptureListener) || void 0 === zD || zD.call(wD, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function sw(DD, zD, wD, pD) {
      const sD = {
        filename: DD || document.location.href,
        function: zD || "?"
      };
      return void 0 !== wD && (sD.lineno = wD), void 0 !== pD && (sD.colno = pD), sD
    }
    const Kw = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      rw = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Lw = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      gw = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Rw = "safari-extension",
      Aw = "safari-web-extension",
      Uw = /Minified React error #\d+;/i;

    function fw(DD, zD) {
      const wD = null === DD || void 0 === DD ? void 0 : DD.includes(Rw),
        pD = !wD && (null === DD || void 0 === DD ? void 0 : DD.includes("safari-web-extension"));
      return wD || pD ? [(null === DD || void 0 === DD ? void 0 : DD.includes("@")) ? DD.split("@")[0] : DD, wD ? `${Rw}:${zD}` : `${Aw}:${zD}`] : [DD, zD]
    }
    const Iw = 1024;

    function Bw(DD) {
      let zD = [];
      DD.stacktrace ? zD = DD.stacktrace.split("\n").filter(((DD, zD) => zD % 2 === 0)) : DD.stack && (zD = DD.stack.split("\n"));
      const wD = zD.reduce(((zD, wD, pD) => {
        if (wD.length > Iw) return zD;
        let sD, KD, rD, LD, cD;
        if (sD = Kw.exec(wD)) {
          if (KD = sD[1], rD = sD[2], LD = sD[3], cD = sD[4], null === rD || void 0 === rD ? void 0 : rD.startsWith("eval")) {
            const DD = rw.exec(rD);
            DD && (rD = DD[1], LD = DD[2], cD = DD[3])
          }
          rD = (null === rD || void 0 === rD ? void 0 : rD.startsWith("address at ")) ? rD.substring(11) : rD, [KD, rD] = fw(KD, rD)
        } else if (sD = Lw.exec(wD)) {
          if (KD = sD[1], rD = sD[3], LD = sD[4], cD = sD[5], rD && rD.includes(" > eval")) {
            const DD = gw.exec(rD);
            DD && (KD = KD || "eval", rD = DD[1], LD = DD[2])
          } else 0 === pD && !cD && QD(DD.columnNumber) && (cD = String(DD.columnNumber + 1));
          [KD, rD] = fw(KD, rD)
        }
        return (rD || KD) && zD.push(sw(rD, KD, LD ? Number(LD) : void 0, cD ? Number(cD) : void 0)), zD
      }), []);
      return Uw.test(DD.message) ? wD.slice(1) : wD
    }

    function Gw(DD) {
      return {
        frames: Bw(DD)
      }
    }
    const hw = "http-request-start",
      nw = "http-request-end";
    var Mw = class DD {
      constructor() {
        this.subscribers = []
      }
      subscribe(DD) {
        return this.subscribers.push(DD), {
          unsubscribe: () => this.unsubscribe(DD)
        }
      }
      unsubscribe(DD) {
        this.subscribers = this.subscribers.filter((zD => zD !== DD))
      }
      notify(DD) {
        this.subscribers.forEach((zD => zD(DD)))
      }
      first() {
        const zD = new DD,
          wD = DD => {
            zD.notify(DD), pD.unsubscribe()
          },
          pD = this.subscribe(wD),
          sD = zD.unsubscribe.bind(zD);
        return this.withUnsubscribeOverride(zD, sD, wD)
      }
      takeWhile(zD) {
        const wD = new DD,
          pD = DD => {
            zD(DD) ? wD.notify(DD) : wD.unsubscribe(pD)
          };
        this.subscribe(pD);
        const sD = wD.unsubscribe.bind(wD);
        return this.withUnsubscribeOverride(wD, sD, pD)
      }
      filter(zD) {
        const wD = new DD,
          pD = DD => {
            zD(DD) && wD.notify(DD)
          };
        this.subscribe(pD);
        const sD = wD.unsubscribe.bind(wD);
        return this.withUnsubscribeOverride(wD, sD, pD)
      }
      merge() {
        const zD = new DD,
          wD = [];
        for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
        sD.forEach((DD => {
          const pD = DD.subscribe((DD => {
            zD.notify(DD)
          }));
          wD.push(pD)
        }));
        const rD = zD.unsubscribeAll.bind(zD);
        return zD.unsubscribe = () => {
          wD.forEach((DD => DD.unsubscribe())), rD()
        }, zD
      }
      withUnsubscribeOverride(DD, zD, wD) {
        return DD.unsubscribe = DD => {
          zD(DD), this.unsubscribe(wD)
        }, DD
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Ow = function(DD) {
      return DD.TRACE = "trace", DD.DEBUG = "debug", DD.INFO = "info", DD.LOG = "log", DD.WARN = "warn", DD.ERROR = "error", DD
    }({});
    const Jw = "log",
      Ew = ["trace", "debug", "info", "log", "warn", "error"];
    let Qw, Xw = !1;
    const Vw = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Pw = "Error",
      Cw = DD => DD.map((DD => CD(DD) ? iz(DD) : String(DD))).join(" ");

    function xw(DD) {
      let zD, wD, pD, sD, KD = [];
      if (ND(DD) && DD.error) zD = DD.error.message, wD = DD.error.name, KD = Bw(DD.error);
      else if ((pD = ZD(DD)) || yD(DD)) {
        const {
          name: sD,
          message: KD
        } = DD;
        wD = null !== sD && void 0 !== sD ? sD : pD ? "DOMError" : "DOMException", zD = KD ? `${wD}: ${KD}` : wD
      } else WD(DD) ? (wD = DD.name, zD = DD.message, KD = Bw(DD)) : (CD(DD) || (sD = iD(DD))) && (wD = sD ? DD.constructor.name : void 0, zD = `Non-Error exception captured with keys: ${Object.keys(DD)}`);
      return [zD, wD, KD]
    }

    function Tw(DD) {
      const [zD, wD, pD, sD, KD] = DD;
      let rD, LD, cD = [];
      const gD = ED(zD),
        RD = sw(wD, "?", pD, sD);
      return KD || !gD ? ([rD, LD, cD] = xw(null !== KD && void 0 !== KD ? KD : zD), 0 === cD.length && (cD = [RD])) : gD && ([rD, LD] = function(DD) {
        var zD, wD;
        const pD = DD.match(Vw),
          sD = null !== (zD = null === pD || void 0 === pD ? void 0 : pD[1]) && void 0 !== zD ? zD : Pw;
        return [null !== (wD = null === pD || void 0 === pD ? void 0 : pD[2]) && void 0 !== wD ? wD : DD, sD]
      }(zD), cD = [RD]), {
        value: rD,
        type: LD,
        stackFrames: cD
      }
    }

    function bw(DD, zD) {
      return WD(DD[0]) ? Tw(DD) : {
        value: zD(DD)
      }
    }
    const jw = DD => DD.map((DD => {
      try {
        return String(DD)
      } catch (zD) {
        return ""
      }
    })).join(" ");
    var dw = class DD extends zw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ww, this.errorSerializer = jw
      }
      initialize() {
        var zD, wD;
        const pD = this.config.consoleInstrumentation,
          sD = (null === pD || void 0 === pD ? void 0 : pD.serializeErrors) || !!(null === pD || void 0 === pD ? void 0 : pD.errorSerializer);
        this.errorSerializer = sD ? null !== (zD = null === pD || void 0 === pD ? void 0 : pD.errorSerializer) && void 0 !== zD ? zD : Cw : jw;
        const KD = null !== (wD = null === pD || void 0 === pD ? void 0 : pD.disabledLevels) && void 0 !== wD ? wD : DD.defaultDisabledLevels,
          rD = function(DD) {
            if (Qw || (Qw = new Mw), !Xw) {
              const zD = null !== DD && void 0 !== DD ? DD : qz;
              Ew.forEach((DD => {
                console[DD] = function() {
                  for (var wD, pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
                  Qw.notify({
                    type: "console",
                    level: DD,
                    args: sD
                  }), null === (wD = zD[DD]) || void 0 === wD || wD.apply(console, sD)
                }
              })), Xw = !0
            }
            return Qw
          }(this.unpatchedConsole);
        this.subscription = rD.subscribe((zD => {
          let {
            level: wD,
            args: sD
          } = zD;
          if (!KD.includes(wD)) try {
            if (wD !== Ow.ERROR || (null === pD || void 0 === pD ? void 0 : pD.consoleErrorAsLog))
              if (wD === Ow.ERROR && (null === pD || void 0 === pD ? void 0 : pD.consoleErrorAsLog)) {
                const {
                  value: zD,
                  type: pD,
                  stackFrames: KD
                } = bw(sD, this.errorSerializer);
                this.api.pushLog(zD ? [DD.consoleErrorPrefix + zD] : sD, {
                  level: wD,
                  context: {
                    value: null !== zD && void 0 !== zD ? zD : "",
                    type: null !== pD && void 0 !== pD ? pD : "",
                    stackFrames: (null === KD || void 0 === KD ? void 0 : KD.length) ? Cw(KD) : ""
                  }
                })
              } else this.api.pushLog(sD, {
                level: wD
              });
            else {
              const {
                value: zD,
                type: wD,
                stackFrames: pD
              } = bw(sD, this.errorSerializer);
              if (zD && !wD && !pD) return void this.api.pushError(new Error(DD.consoleErrorPrefix + zD));
              this.api.pushError(new Error(DD.consoleErrorPrefix + zD), {
                type: wD,
                stackFrames: pD
              })
            }
          } catch (rD) {
            this.logError(rD)
          }
        }))
      }
      destroy() {
        var DD;
        null === (DD = this.subscription) || void 0 === DD || DD.unsubscribe(), this.subscription = void 0
      }
    };
    dw.defaultDisabledLevels = [Ow.DEBUG, Ow.TRACE, Ow.LOG], dw.consoleErrorPrefix = "console.error: ";
    const Sw = [];
    var iw = class extends zw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ww
      }
      initialize() {
        this.logDebug("Initializing"),
          function(DD) {
            const zD = window.onerror;
            window.onerror = function() {
              for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
              try {
                const {
                  value: zD,
                  type: wD,
                  stackFrames: sD
                } = Tw(pD), KD = pD[4];
                if (zD) {
                  const pD = {
                    type: wD,
                    stackFrames: sD
                  };
                  null != KD && (pD.originalError = KD), DD.pushError(new Error(zD), pD)
                }
              } finally {
                null === zD || void 0 === zD || zD.apply(window, pD)
              }
            }
          }(this.api),
          function(DD) {
            const zD = zD => {
              var wD;
              let pD, sD, KD = zD;
              if (KD.reason) KD = zD.reason;
              else if (null === (wD = zD.detail) || void 0 === wD ? void 0 : wD.reason) {
                var rD;
                KD = null === (rD = zD.detail) || void 0 === rD ? void 0 : rD.reason
              }
              let LD = [];
              dD(KD) ? (pD = `Non-Error promise rejection captured with value: ${String(KD)}`, sD = "UnhandledRejection") : [pD, sD, LD] = xw(KD), pD && DD.pushError(new Error(pD), {
                type: sD,
                stackFrames: LD
              })
            };
            window.addEventListener("unhandledrejection", zD), Sw.push(zD)
          }(this.api)
      }
    };
    const lw = "unknown";
    var Ww = class extends zw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ww, this.waitingForActivation = !1, this.sendViewChangedEvent = DD => {
          var zD;
          if (this.waitingForActivation || document.prerendering) return;
          const wD = DD.view;
          if (wD && wD.name !== (null === (zD = this.notifiedView) || void 0 === zD ? void 0 : zD.name)) {
            var pD, sD, KD;
            const DD = null !== (pD = null === (sD = this.notifiedView) || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : lw;
            this.notifiedView = wD, this.api.pushEvent(Jz, {
              fromView: DD,
              toView: null !== (KD = wD.name) && void 0 !== KD ? KD : lw
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
    class Nw {
      t;
      o = 0;
      i = [];
      l(DD) {
        if (DD.hadRecentInput) return;
        const zD = this.i[0],
          wD = this.i.at(-1);
        this.o && zD && wD && DD.startTime - wD.startTime < 1e3 && DD.startTime - zD.startTime < 5e3 ? (this.o += DD.value, this.i.push(DD)) : (this.o = DD.value, this.i = [DD]), this.t?.(DD)
      }
    }
    const Zw = () => {
        const DD = performance.getEntriesByType("navigation")[0];
        if (DD && DD.responseStart > 0 && DD.responseStart < performance.now()) return DD
      },
      yw = DD => {
        if ("loading" === document.readyState) return "loading";
        const zD = Zw();
        if (zD) {
          if (DD < zD.domInteractive) return "loading";
          if (0 === zD.domContentLoadedEventStart || DD < zD.domContentLoadedEventStart) return "dom-interactive";
          if (0 === zD.domComplete || DD < zD.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      kw = DD => {
        const zD = DD.nodeName;
        return 1 === DD.nodeType ? zD.toLowerCase() : zD.toUpperCase().replace(/^#/, "")
      },
      mw = DD => {
        let zD = "";
        try {
          for (; 9 !== DD?.nodeType;) {
            const wD = DD,
              pD = wD.id ? "#" + wD.id : [kw(wD), ...Array.from(wD.classList ?? []).sort()].join(".");
            if (zD.length + pD.length > 99) return zD || pD;
            if (zD = zD ? pD + ">" + zD : pD, wD.id) break;
            DD = wD.parentNode
          }
        } catch {}
        return zD
      },
      ew = new WeakMap;

    function ow(DD, zD) {
      let wD = ew.get(zD);
      return wD || (wD = new WeakMap, ew.set(zD, wD)), wD.get(DD) || wD.set(DD, new zD), wD.get(DD)
    }
    let aw = -1;
    const uw = () => aw,
      vw = DD => {
        addEventListener("pageshow", (zD => {
          zD.persisted && (aw = zD.timeStamp, DD(zD))
        }), !0)
      },
      tw = (DD, zD, wD, pD) => {
        let sD, KD;
        return rD => {
          zD.value >= 0 && (rD || pD) && (KD = zD.value - (sD ?? 0), (KD || void 0 === sD) && (sD = zD.value, zD.delta = KD, zD.rating = ((DD, zD) => DD > zD[1] ? "poor" : DD > zD[0] ? "needs-improvement" : "good")(zD.value, wD), DD(zD)))
        }
      },
      Fw = DD => {
        requestAnimationFrame((() => requestAnimationFrame((() => DD()))))
      },
      Yw = () => Zw()?.activationStart ?? 0;
    let Hw = -1;
    const qw = new Set,
      Dp = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      zp = DD => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === DD.type)
            for (const DD of qw) DD();
          isFinite(Hw) || (Hw = "visibilitychange" === DD.type ? DD.timeStamp : 0, removeEventListener("prerenderingchange", zp, !0))
        }
      },
      wp = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Hw = 1 / 0), Hw < 0) {
          const DD = Yw(),
            zD = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((zD => "hidden" === zD.name && zD.startTime >= DD))?.startTime;
          Hw = zD ?? Dp(), addEventListener("visibilitychange", zp, !0), addEventListener("prerenderingchange", zp, !0), vw((() => {
            setTimeout((() => {
              Hw = Dp()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Hw
          },
          onHidden(DD) {
            qw.add(DD)
          }
        }
      },
      pp = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0,
          rD = arguments.length > 6 ? arguments[6] : void 0;
        const LD = Zw(),
          cD = LD?.navigationId || 0;
        let gD = "navigate";
        return wD ? gD = wD : uw() >= 0 ? gD = "back-forward-cache" : LD && (document.prerendering || Yw() > 0 ? gD = "prerender" : document.wasDiscarded ? gD = "restore" : LD.type && (gD = LD.type.replace(/_/g, "-"))), {
          name: DD,
          value: zD,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: gD,
          navigationId: pD || cD,
          navigationInteractionId: sD,
          navigationURL: KD || LD?.name,
          navigationStartTime: rD || 0
        }
      },
      sp = function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const pD = DD.filter((DD => PerformanceObserver.supportedEntryTypes.includes(DD)));
          if (pD.length > 0) {
            const DD = new PerformanceObserver((DD => {
              queueMicrotask((() => {
                const wD = DD.getEntries();
                pD.length > 1 && wD.sort(((DD, zD) => DD.startTime + DD.duration - (zD.startTime + zD.duration))), zD(wD)
              }))
            }));
            for (const zD of pD) DD.observe({
              type: zD,
              buffered: !0,
              ...wD
            });
            return DD
          }
        } catch {}
      },
      Kp = DD => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && DD && DD.reportSoftNavs,
      rp = (DD, zD) => {
        if (DD.set(zD.navigationId, zD), DD.size > 2) {
          const zD = DD.keys().next().value;
          void 0 !== zD && DD.delete(zD)
        }
      },
      Lp = DD => {
        let zD = !1;
        return () => {
          zD || (DD(), zD = !0)
        }
      };
    class cp {
      u
    }
    const gp = DD => {
        document.prerendering ? addEventListener("prerenderingchange", DD, !0) : DD()
      },
      Rp = [1800, 3e3],
      Ap = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wD = Kp(zD);
        gp((() => {
          const pD = ow(zD, cp),
            sD = wp();
          let KD, rD = pp("FCP");
          const LD = sp(["paint"], (DD => {
            for (const zD of DD) "first-contentful-paint" === zD.name && (LD.disconnect(), zD.startTime < sD.firstHiddenTime && (rD.value = Math.max(zD.startTime - Yw(), 0), rD.entries.push(zD), rD.navigationId = zD.navigationId || rD.navigationId, KD(!0)))
          }));
          LD && (KD = tw(DD, rD, Rp, zD.reportAllChanges), vw((wD => {
            rD = pp("FCP", -1, "back-forward-cache", rD.navigationId, rD.navigationInteractionId, rD.navigationURL, uw()), KD = tw(DD, rD, Rp, zD.reportAllChanges), Fw((() => {
              rD.value = performance.now() - wD.timeStamp, KD(!0)
            }))
          }))), wD && sp(["soft-navigation"], (wD => {
            wD.forEach((wD => {
              pD.u && wD.navigationId && rp(pD.u, wD);
              const sD = Math.max((wD.presentationTime || wD.paintTime || 0) - wD.startTime, 0);
              rD = pp("FCP", sD, "soft-navigation", wD.navigationId, wD.interactionId, wD.name, wD.startTime), KD = tw(DD, rD, Rp, zD.reportAllChanges), KD(!0)
            }))
          }), zD)
        }))
      },
      Up = [.1, .25],
      fp = DD => DD.find((DD => 1 === DD.node?.nodeType)) || DD[0];
    let Ip = 0,
      Bp = 1 / 0,
      Gp = 0;
    const hp = DD => {
      for (const zD of DD) zD.interactionId && (Bp = Math.min(Bp, zD.interactionId), Gp = Math.max(Gp, zD.interactionId), Ip = Gp ? (Gp - Bp) / 7 + 1 : 0)
    };
    let np;
    const Mp = () => np ? Ip : performance.interactionCount ?? 0;
    class Op {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Mp() - this.h
      }
      D() {
        this.h = Mp(), this.v.length = 0, this.p.clear()
      }
      S(DD) {
        const zD = this.T(),
          wD = Math.min(this.v.length - 1, Math.floor(zD / 50));
        return !zD || -1 !== wD || "soft-navigation" !== DD && "back-forward-cache" !== DD ? this.v[wD] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(DD) {
        if (this.m?.(DD), !DD.interactionId) return;
        const zD = this.v.at(-1);
        let wD = this.p.get(DD.interactionId);
        if (wD || this.v.length < 10 || DD.duration > zD.k) {
          if (wD ? DD.duration > wD.k ? (wD.entries = [DD], wD.k = DD.duration) : DD.duration === wD.k && DD.startTime === wD.entries[0].startTime && wD.entries.push(DD) : (wD = {
              id: DD.interactionId,
              entries: [DD],
              k: DD.duration
            }, this.p.set(wD.id, wD), this.v.push(wD)), this.v.sort(((DD, zD) => zD.k - DD.k)), this.v.length > 10) {
            const DD = this.v.splice(10);
            for (const zD of DD) this.p.delete(zD.id)
          }
          this.M?.(wD)
        }
      }
    }
    const Jp = DD => {
        const zD = "requestIdleCallback" in globalThis ? 1e3 : 0,
          wD = globalThis.requestIdleCallback || setTimeout,
          pD = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) DD();
        else {
          const sD = Lp(DD);
          let KD = -1;
          const rD = () => {
            pD(KD), sD()
          };
          addEventListener("visibilitychange", rD, {
            once: !0,
            capture: !0
          }), KD = wD((() => {
            removeEventListener("visibilitychange", rD, {
              capture: !0
            }), sD()
          }), {
            timeout: zD
          })
        }
      },
      Ep = [200, 500],
      Qp = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wD = ow(zD = Object.assign({}, zD), Op);
        let pD = [],
          sD = [],
          KD = 0;
        const rD = new WeakMap,
          LD = new WeakMap;
        let cD = !1;
        const gD = () => {
            cD || (cD = !0, Jp(RD))
          },
          RD = () => {
            const DD = new Set(wD.v.map((DD => rD.get(DD.entries[0])))),
              zD = sD.length - 10;
            sD = sD.filter(((wD, pD) => pD >= zD || DD.has(wD)));
            const LD = new Set;
            for (const wD of sD) {
              const DD = AD(wD.startTime, wD.processingEnd);
              for (const zD of DD) LD.add(zD)
            }
            const gD = pD.length - 10;
            pD = pD.filter(((DD, zD) => LD.has(DD) || zD >= gD && DD.startTime > KD)), cD = !1
          };
        wD.m = DD => {
          const wD = DD.startTime + DD.duration;
          let pD;
          KD = Math.max(KD, DD.processingEnd);
          for (let KD = sD.length - 1; KD >= 0; KD--) {
            const rD = sD[KD];
            if (Math.abs(wD - rD.renderTime) <= 8) {
              pD = rD, pD.startTime = Math.min(DD.startTime, pD.startTime), pD.processingStart = Math.min(DD.processingStart, pD.processingStart), pD.processingEnd = Math.max(DD.processingEnd, pD.processingEnd), zD.includeProcessedEventEntries && pD.entries.push(DD);
              break
            }
          }
          pD || (pD = {
            startTime: DD.startTime,
            processingStart: DD.processingStart,
            processingEnd: DD.processingEnd,
            renderTime: wD,
            entries: zD.includeProcessedEventEntries ? [DD] : []
          }, sD.push(pD)), DD.interactionId && rD.set(DD, pD), gD()
        }, wD.M = DD => {
          if (!LD.get(DD)) {
            const wD = DD.entries.find((DD => DD.target))?.target;
            if (wD) {
              const pD = zD.generateTarget?.(wD) ?? mw(wD);
              LD.set(DD, pD)
            } else {
              const zD = DD.entries.find((DD => DD.targetSelector))?.targetSelector;
              zD && LD.set(DD, zD)
            }
          }
        };
        const AD = (DD, zD) => {
          const wD = [];
          for (const sD of pD)
            if (!(sD.startTime + sD.duration < DD)) {
              if (sD.startTime > zD) break;
              wD.push(sD)
            } return wD
        };
        sp(["long-animation-frame"], (DD => {
            pD = pD.concat(DD), gD()
          }), zD),
          function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const wD = wp();
            gp((() => {
              "interactionCount" in performance || np || (np = sp(["event"], hp, {
                durationThreshold: 0
              }));
              let pD, sD = pp("INP");
              const KD = ow(zD, Op),
                rD = (wD, rD, LD, cD, gD) => {
                  KD.D(), sD = pp("INP", -1, wD, rD, LD, cD, gD), pD = tw(DD, sD, Ep, zD.reportAllChanges)
                },
                LD = () => {
                  const DD = KD.S(sD.navigationType);
                  DD && DD.k !== sD.value && (sD.value = DD.k, sD.entries = DD.entries, pD())
                },
                cD = DD => {
                  LD(), pD(!0), rD("soft-navigation", DD.navigationId, DD.interactionId, DD.name, DD.startTime)
                },
                gD = function(DD) {
                  let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Jp((() => {
                    for (const zD of DD) "soft-navigation" !== zD.entryType ? KD.l(zD) : cD(zD);
                    LD(), zD && pD(!0)
                  }))
                },
                RD = ["event", "first-input"];
              Kp(zD) && RD.push("soft-navigation");
              const AD = sp(RD, gD, {
                ...zD,
                durationThreshold: zD.durationThreshold ?? 40
              });
              pD = tw(DD, sD, Ep, zD.reportAllChanges), AD && (wD.onHidden((() => {
                gD(AD.takeRecords(), !0)
              })), vw((() => {
                rD("back-forward-cache", sD.navigationId, sD.navigationInteractionId, sD.navigationURL, uw())
              })))
            }))
          }((zD => {
            DD((DD => {
              if (0 === DD.entries.length) {
                const zD = DD.navigationStartTime || 0,
                  wD = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: DD.value,
                    loadState: yw(zD)
                  };
                return Object.assign(DD, {
                  attribution: wD
                })
              }
              const zD = DD.entries[0],
                pD = rD.get(zD),
                sD = Math.max(pD.processingStart, zD.startTime),
                KD = Math.max(zD.startTime + zD.duration, sD),
                cD = Math.min(pD.processingEnd, KD),
                gD = pD.entries.sort(((DD, zD) => DD.processingStart - zD.processingStart)),
                RD = AD(zD.startTime, cD),
                UD = wD.p.get(zD.interactionId),
                fD = {
                  interactionTarget: LD.get(UD),
                  interactionType: zD.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: zD.startTime,
                  nextPaintTime: KD,
                  processedEventEntries: gD,
                  longAnimationFrameEntries: RD,
                  inputDelay: sD - zD.startTime,
                  processingDuration: cD - sD,
                  presentationDelay: KD - cD,
                  loadState: yw(zD.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (DD => {
                const zD = DD.interactionTime,
                  wD = DD.nextPaintTime;
                if (!DD.longAnimationFrameEntries?.length || !zD || !wD) return;
                const pD = DD.inputDelay,
                  sD = DD.processingDuration;
                let KD, rD, LD = 0,
                  cD = 0,
                  gD = 0,
                  RD = 0;
                for (const fD of DD.longAnimationFrameEntries) {
                  cD = cD + fD.startTime + fD.duration - fD.styleAndLayoutStart;
                  for (const DD of fD.scripts) {
                    const wD = DD.startTime + DD.duration;
                    if (wD < zD) continue;
                    const gD = wD - Math.max(zD, DD.startTime),
                      AD = DD.duration ? gD / DD.duration * DD.forcedStyleAndLayoutDuration : 0;
                    LD += gD - AD, cD += AD, gD > RD && (rD = DD.startTime < zD + pD ? "input-delay" : DD.startTime >= zD + pD + sD ? "presentation-delay" : "processing-duration", KD = DD, RD = gD)
                  }
                }
                const AD = DD.longAnimationFrameEntries.at(-1),
                  UD = AD ? AD.startTime + AD.duration : 0;
                UD >= zD + pD + sD && (gD = wD - UD), KD && rD && (DD.longestScript = {
                  entry: KD,
                  subpart: rD,
                  intersectingDuration: RD
                }), DD.totalScriptDuration = LD, DD.totalStyleAndLayoutDuration = cD, DD.totalPaintDuration = gD, DD.totalUnattributedDuration = wD - zD - LD - cD - gD
              })(fD), Object.assign(DD, {
                attribution: fD
              })
            })(zD))
          }), zD)
      };
    class Xp {
      m;
      u;
      l(DD) {
        this.m?.(DD)
      }
    }
    const Vp = [2500, 4e3];
    let Pp = 50;
    const Cp = [];
    sp(["resource"], (DD => {
      for (const zD of DD) Cp.push(zD), Cp.length > Pp && Cp.shift()
    }));
    const xp = [800, 1800],
      Tp = DD => {
        document.prerendering ? gp((() => Tp(DD))) : "complete" !== document.readyState ? addEventListener("load", (() => Tp(DD)), !0) : setTimeout(DD)
      },
      bp = "load_state",
      jp = "time_to_first_byte";
    var dp = class {
        constructor(DD, zD) {
          this.corePushMeasurement = DD, this.webVitalConfig = zD
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var DD;
          ! function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const wD = ow(zD = Object.assign({}, zD), Nw),
              pD = new WeakMap;
            wD.t = DD => {
                if (DD?.sources?.length) {
                  const wD = fp(DD.sources),
                    sD = wD?.node;
                  if (sD) {
                    const DD = zD.generateTarget?.(sD) ?? mw(sD);
                    pD.set(wD, DD)
                  }
                }
              },
              function(DD) {
                let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const wD = wp();
                Ap(Lp((() => {
                  let pD, sD = pp("CLS", 0);
                  const KD = ow(zD, Nw),
                    rD = (wD, rD, LD, cD, gD) => {
                      sD = pp("CLS", 0, wD, rD, LD, cD, gD), KD.o = 0, pD = tw(DD, sD, Up, zD.reportAllChanges)
                    },
                    LD = function() {
                      let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      KD.o > sD.value && (sD.value = KD.o, sD.entries = KD.i), pD(DD)
                    },
                    cD = DD => {
                      LD(!0), rD("soft-navigation", DD.navigationId, DD.interactionId, DD.name, DD.startTime)
                    },
                    gD = DD => {
                      for (const zD of DD) "soft-navigation" !== zD.entryType ? KD.l(zD) : cD(zD);
                      LD()
                    },
                    RD = ["layout-shift"];
                  Kp(zD) && RD.push("soft-navigation");
                  const AD = sp(RD, gD);
                  AD && (pD = tw(DD, sD, Up, zD.reportAllChanges), wD.onHidden((() => {
                    gD(AD.takeRecords()), pD(!0)
                  })), vw((() => {
                    rD("back-forward-cache", sD.navigationId, sD.navigationInteractionId, sD.navigationURL, uw()), Fw(pD)
                  })), setTimeout(pD))
                })))
              }((zD => {
                DD((DD => {
                  let zD = {};
                  if (DD.entries.length) {
                    const wD = DD.entries.reduce(((DD, zD) => DD.value > zD.value ? DD : zD));
                    if (wD?.sources?.length) {
                      const DD = fp(wD.sources);
                      DD && (zD = {
                        largestShiftTarget: pD.get(DD),
                        largestShiftTime: wD.startTime,
                        largestShiftValue: wD.value,
                        largestShiftSource: DD,
                        largestShiftEntry: wD,
                        loadState: yw(wD.startTime)
                      })
                    }
                  }
                  return Object.assign(DD, {
                    attribution: zD
                  })
                })(zD))
              }), zD)
          }((DD => {
            const {
              loadState: zD,
              largestShiftValue: wD,
              largestShiftTime: pD,
              largestShiftTarget: sD
            } = DD.attribution, KD = this.buildInitialValues(DD);
            this.addIfPresent(KD, "largest_shift_value", wD), this.addIfPresent(KD, "largest_shift_time", pD);
            const rD = this.buildInitialContext(DD);
            this.addIfPresent(rD, bp, zD), this.addIfPresent(rD, "largest_shift_target", sD), this.pushMeasurement(KD, rD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureFCP() {
          var DD;
          ! function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const wD = ow(zD = Object.assign({}, zD), cp);
            Kp(zD) && (wD.u = new Map), Ap((zD => {
              DD((DD => {
                let zD = {
                  timeToFirstByte: 0,
                  firstByteToFCP: DD.value,
                  loadState: yw(uw())
                };
                if ("soft-navigation" !== DD.navigationType) {
                  if (DD.entries.length) {
                    const wD = Zw(),
                      pD = DD.entries.at(-1);
                    if (wD) {
                      const sD = wD.responseStart,
                        KD = wD.activationStart || 0,
                        rD = Math.max(0, sD - KD);
                      zD = {
                        timeToFirstByte: rD,
                        firstByteToFCP: DD.value - rD,
                        loadState: yw(DD.entries[0].startTime),
                        navigationEntry: wD,
                        fcpEntry: pD
                      }
                    }
                  }
                } else {
                  const pD = wD.u?.get(DD.navigationId);
                  pD && (zD = {
                    timeToFirstByte: 0,
                    firstByteToFCP: DD.value,
                    loadState: "complete",
                    navigationEntry: pD
                  })
                }
                return Object.assign(DD, {
                  attribution: zD
                })
              })(zD))
            }), zD)
          }((DD => {
            const {
              firstByteToFCP: zD,
              timeToFirstByte: wD,
              loadState: pD
            } = DD.attribution, sD = this.buildInitialValues(DD);
            this.addIfPresent(sD, "first_byte_to_fcp", zD), this.addIfPresent(sD, jp, wD);
            const KD = this.buildInitialContext(DD);
            this.addIfPresent(KD, bp, pD), this.pushMeasurement(sD, KD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureINP() {
          var DD;
          Qp((DD => {
            var zD;
            const {
              interactionTime: wD,
              presentationDelay: pD,
              inputDelay: sD,
              processingDuration: KD,
              nextPaintTime: rD,
              loadState: LD,
              interactionTarget: cD,
              interactionType: gD,
              totalScriptDuration: RD,
              totalStyleAndLayoutDuration: AD,
              totalPaintDuration: UD,
              totalUnattributedDuration: fD,
              longestScript: ID
            } = DD.attribution, BD = this.buildInitialValues(DD);
            this.addIfPresent(BD, "interaction_time", wD), this.addIfPresent(BD, "presentation_delay", pD), this.addIfPresent(BD, "input_delay", sD), this.addIfPresent(BD, "processing_duration", KD), this.addIfPresent(BD, "next_paint_time", rD), this.addNumberIfDefined(BD, "total_script_duration", RD), this.addNumberIfDefined(BD, "total_style_and_layout_duration", AD), this.addNumberIfDefined(BD, "total_paint_duration", UD), this.addNumberIfDefined(BD, "total_unattributed_duration", fD), this.addNumberIfDefined(BD, "longest_script_intersecting_duration", null === ID || void 0 === ID ? void 0 : ID.intersectingDuration);
            const GD = this.buildInitialContext(DD);
            this.addIfPresent(GD, bp, LD), this.addIfPresent(GD, "interaction_target", cD), this.addIfPresent(GD, "interaction_type", gD), this.addIfPresent(GD, "longest_script_subpart", null === ID || void 0 === ID ? void 0 : ID.subpart), this.addIfPresent(GD, "longest_script_invoker_type", null === ID || void 0 === ID ? void 0 : ID.entry.invokerType), (null === (zD = this.webVitalConfig) || void 0 === zD ? void 0 : zD.trackAttributionSources) && (this.addIfPresent(GD, "longest_script_invoker", null === ID || void 0 === ID ? void 0 : ID.entry.invoker), this.addIfPresent(GD, "longest_script_source_url", null === ID || void 0 === ID ? void 0 : ID.entry.sourceURL), this.addIfPresent(GD, "longest_script_source_function_name", null === ID || void 0 === ID ? void 0 : ID.entry.sourceFunctionName), this.addIfPresent(GD, "longest_script_source_char_position", void 0 !== (null === ID || void 0 === ID ? void 0 : ID.entry.sourceCharPosition) ? String(ID.entry.sourceCharPosition) : void 0)), this.pushMeasurement(BD, GD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureLCP() {
          var DD;
          ! function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (zD = Object.assign({}, zD)).resourceBufferSize && (Pp = zD.resourceBufferSize);
            const wD = ow(zD, Xp),
              pD = new WeakMap;
            Kp(zD) && (wD.u = new Map), wD.m = DD => {
                const wD = DD.element;
                if (wD) {
                  const sD = zD.generateTarget?.(wD) ?? mw(wD);
                  pD.set(DD, sD)
                } else DD.id && pD.set(DD, `#${DD.id}`)
              },
              function(DD) {
                let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  wD = !1;
                const pD = Kp(zD);
                gp((() => {
                  let sD, KD = wp(),
                    rD = pp("LCP");
                  const LD = ow(zD, Xp),
                    cD = (pD, LD, cD, gD, RD) => {
                      rD = pp("LCP", -1, pD, LD, cD, gD, RD), sD = tw(DD, rD, Vp, zD.reportAllChanges), wD = !1, "soft-navigation" === pD && (KD = wp(!0))
                    },
                    gD = DD => {
                      LD.u && DD.navigationId && rp(LD.u, DD), wD || sD(!0), cD("soft-navigation", DD.navigationId, DD.interactionId, DD.name, DD.startTime);
                      const zD = DD.getLargestInteractionContentfulPaint?.();
                      zD && RD([zD])
                    },
                    RD = DD => {
                      zD.reportAllChanges || pD || (DD = DD.slice(-1));
                      for (const zD of DD) {
                        if (!zD) continue;
                        if ("soft-navigation" === zD.entryType) {
                          gD(zD);
                          continue
                        }
                        let DD = 0,
                          wD = [],
                          pD = zD.startTime;
                        if ("largest-contentful-paint" === zD.entryType) DD = Math.max(zD.startTime - Yw(), 0), LD.l(zD), wD = [zD];
                        else if ("interaction-contentful-paint" === zD.entryType) {
                          const sD = zD;
                          if (!rD.navigationId) continue;
                          if ("interactionId" in sD && sD.interactionId != rD.navigationInteractionId) continue;
                          pD = sD.largestContentfulPaint?.renderTime || 0, DD = Math.max(pD - zD.startTime, 0), sD.largestContentfulPaint && (LD.l(sD.largestContentfulPaint), wD = [sD.largestContentfulPaint])
                        }
                        pD < KD.firstHiddenTime && (rD.value = DD, rD.entries = wD, sD())
                      }
                    },
                    AD = ["largest-contentful-paint"];
                  pD && AD.push("interaction-contentful-paint", "soft-navigation");
                  const UD = sp(AD, RD);
                  if (UD) {
                    sD = tw(DD, rD, Vp, zD.reportAllChanges);
                    const KD = ["keydown", "click", "visibilitychange"],
                      LD = DD => {
                        if (DD.isTrusted && !wD) {
                          const DD = rD.id;
                          Jp((() => {
                            if (!wD) {
                              if (!pD) {
                                UD.disconnect();
                                for (const DD of KD) removeEventListener(DD, LD, {
                                  capture: !0
                                })
                              }
                              DD === rD.id && (wD = !0, sD(!0))
                            }
                          }))
                        }
                      };
                    for (const DD of KD) addEventListener(DD, LD, {
                      capture: !0
                    });
                    vw((pD => {
                      cD("back-forward-cache", rD.navigationId, rD.navigationInteractionId, rD.navigationURL, uw()), sD = tw(DD, rD, Vp, zD.reportAllChanges), Fw((() => {
                        rD.value = performance.now() - pD.timeStamp, wD = !0, sD(!0)
                      }))
                    }))
                  }
                }))
              }((zD => {
                DD((DD => {
                  let zD = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: DD.value
                  };
                  if (DD.entries.length) {
                    const sD = DD.entries.at(-1),
                      KD = DD => DD.name === sD.url && (DD.requestStart || DD.startTime) <= sD.startTime,
                      rD = sD.url && (Cp.findLast(KD) || performance.getEntriesByType("resource").findLast(KD));
                    let LD;
                    zD.target = pD.get(sD), zD.lcpEntry = sD, sD.url && (zD.url = sD.url), rD && (zD.lcpResourceEntry = rD);
                    let cD = 0,
                      gD = 0;
                    if ("soft-navigation" !== DD.navigationType ? (LD = Zw(), cD = LD?.activationStart ?? 0, gD = LD?.responseStart ?? 0) : (cD = DD.navigationStartTime || 0, LD = wD.u?.get(DD.navigationId)), LD) {
                      const wD = Math.max(0, gD - cD),
                        pD = Math.max(wD, rD ? (rD.requestStart || rD.startTime) - cD : 0),
                        sD = Math.min(DD.value, Math.max(pD, rD ? rD.responseEnd - cD : 0));
                      zD = {
                        ...zD,
                        timeToFirstByte: wD,
                        resourceLoadDelay: pD - wD,
                        resourceLoadDuration: sD - pD,
                        elementRenderDelay: DD.value - sD,
                        navigationEntry: LD
                      }
                    }
                  }
                  return Object.assign(DD, {
                    attribution: zD
                  })
                })(zD))
              }), zD)
          }((DD => {
            var zD;
            const {
              elementRenderDelay: wD,
              resourceLoadDelay: pD,
              resourceLoadDuration: sD,
              timeToFirstByte: KD,
              target: rD,
              url: LD,
              lcpResourceEntry: cD
            } = DD.attribution, gD = this.buildInitialValues(DD);
            this.addIfPresent(gD, "element_render_delay", wD), this.addIfPresent(gD, "resource_load_delay", pD), this.addIfPresent(gD, "resource_load_duration", sD), this.addIfPresent(gD, jp, KD);
            const RD = this.buildInitialContext(DD);
            this.addIfPresent(RD, "element", rD), (null === (zD = this.webVitalConfig) || void 0 === zD ? void 0 : zD.trackAttributionSources) && (this.addIfPresent(RD, "resource_url", LD), this.addIfPresent(RD, "resource_delivery_type", null === cD || void 0 === cD ? void 0 : cD.deliveryType), this.addIfPresent(RD, "resource_initiator_type", null === cD || void 0 === cD ? void 0 : cD.initiatorType)), this.pushMeasurement(gD, RD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureTTFB() {
          var DD;
          ! function(DD) {
            ! function(DD) {
              let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const wD = Kp(zD);
              let pD = pp("TTFB"),
                sD = tw(DD, pD, xp, zD.reportAllChanges);
              Tp((() => {
                const KD = Zw();
                if (KD) {
                  const rD = KD.responseStart;
                  pD.value = Math.max(rD - Yw(), 0), pD.entries = [KD], sD(!0), vw((() => {
                    pD = pp("TTFB", 0, "back-forward-cache", pD.navigationId, pD.navigationInteractionId, pD.navigationURL, uw()), sD = tw(DD, pD, xp, zD.reportAllChanges), sD(!0)
                  })), wD && sp(["soft-navigation"], (wD => {
                    wD.forEach((wD => {
                      wD.navigationId && (pD = pp("TTFB", 0, "soft-navigation", wD.navigationId, wD.interactionId, wD.name, wD.startTime), pD.entries = [wD], sD = tw(DD, pD, xp, zD.reportAllChanges), sD(!0))
                    }))
                  }), zD)
                }
              }))
            }((zD => {
              DD((DD => {
                const zD = DD.entries[0];
                let wD = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: zD
                };
                if (DD.entries.length && zD instanceof PerformanceNavigationTiming) {
                  const pD = zD.activationStart || 0,
                    sD = Math.max((zD.workerStart || zD.fetchStart || 0) - pD, 0),
                    KD = Math.max(zD.domainLookupStart - pD, 0),
                    rD = Math.max(zD.connectStart - pD, 0),
                    LD = Math.max(zD.connectEnd - pD, 0);
                  wD = {
                    waitingDuration: sD,
                    cacheDuration: KD - sD,
                    dnsDuration: rD - KD,
                    connectionDuration: LD - rD,
                    requestDuration: DD.value - LD,
                    navigationEntry: zD
                  }
                }
                return Object.assign(DD, {
                  attribution: wD
                })
              })(zD))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((DD => {
            const {
              dnsDuration: zD,
              connectionDuration: wD,
              requestDuration: pD,
              waitingDuration: sD,
              cacheDuration: KD
            } = DD.attribution, rD = this.buildInitialValues(DD);
            this.addIfPresent(rD, "dns_duration", zD), this.addIfPresent(rD, "connection_duration", wD), this.addIfPresent(rD, "request_duration", pD), this.addIfPresent(rD, "waiting_duration", sD), this.addIfPresent(rD, "cache_duration", KD);
            const LD = this.buildInitialContext(DD);
            this.pushMeasurement(rD, LD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        buildInitialValues(DD) {
          return {
            [DD.name.toLowerCase()]: DD.value,
            delta: DD.delta
          }
        }
        buildInitialContext(DD) {
          var zD;
          const wD = null !== (zD = Dz("com.grafana.faro.lastNavigationId", YD)) && void 0 !== zD ? zD : lw;
          return {
            id: DD.id,
            rating: DD.rating,
            navigation_type: DD.navigationType,
            navigation_entry_id: wD
          }
        }
        pushMeasurement(DD, zD) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: DD
          }, {
            context: zD
          })
        }
        addIfPresent(DD, zD, wD) {
          wD && (DD[zD] = wD)
        }
        addNumberIfDefined(DD, zD, wD) {
          void 0 !== wD && (DD[zD] = wD)
        }
      },
      Sp = class extends zw {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ww
        }
        initialize() {
          this.logDebug("Initializing"), new dp(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const ip = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function lp() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const zD of DD)
        if ("traceparent" === zD.name) {
          if (!ip.test(zD.description)) continue;
          const [, DD, wD] = zD.description.split("-");
          if (null != DD && null != wD) return {
            traceId: DD,
            spanId: wD
          };
          break
        }
    }

    function Wp(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: wD,
        monoNow: pD
      } = zD;
      return Math.min(wD, wD - (pD - DD))
    }

    function Np(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [wD, pD] of Object.entries(zD)) {
        const zD = DD[wD];
        return null != zD && (TD(pD) ? pD.includes(zD) : zD === pD)
      }
      return !0
    }

    function Zp(DD) {
      const {
        connectEnd: zD,
        connectStart: wD,
        decodedBodySize: pD,
        domainLookupEnd: sD,
        domainLookupStart: KD,
        duration: rD,
        encodedBodySize: LD,
        fetchStart: cD,
        initiatorType: gD,
        name: RD,
        nextHopProtocol: AD,
        redirectEnd: UD,
        redirectStart: fD,
        renderBlockingStatus: ID,
        requestStart: BD,
        responseEnd: GD,
        responseStart: hD,
        responseStatus: nD,
        secureConnectionStart: MD,
        transferSize: OD,
        workerStart: JD
      } = DD;
      return {
        name: RD,
        httpHost: kp(RD),
        duration: mp(rD),
        tcpHandshakeTime: mp(zD - wD),
        dnsLookupTime: mp(sD - KD),
        tlsNegotiationTime: mp(zD - MD),
        responseStatus: mp(nD),
        redirectTime: mp(UD - fD),
        requestTime: mp(hD - BD),
        responseTime: mp(GD - hD),
        fetchTime: mp(GD - cD),
        serviceWorkerTime: mp(JD > 0 ? cD - JD : 0),
        decodedBodySize: mp(pD),
        encodedBodySize: mp(LD),
        cacheHitStatus: function() {
          let DD = "fullLoad";
          0 === OD ? pD > 0 && (DD = "cache") : null != nD ? 304 === nD && (DD = "conditionalFetch") : LD > 0 && OD < LD && (DD = "conditionalFetch");
          return DD
        }(),
        renderBlockingStatus: mp(ID),
        protocol: AD,
        initiatorType: gD,
        visibilityState: document.visibilityState,
        ttfb: mp(hD - BD),
        transferSize: mp(OD)
      }
    }

    function yp(DD) {
      const {
        activationStart: zD,
        domComplete: wD,
        domContentLoadedEventEnd: pD,
        domContentLoadedEventStart: sD,
        domInteractive: KD,
        fetchStart: rD,
        loadEventEnd: LD,
        loadEventStart: cD,
        responseStart: gD,
        type: RD
      } = DD, AD = function() {
        var DD;
        return null != (null === (DD = performance.timing) || void 0 === DD ? void 0 : DD.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Rz(Rz({}, Zp(DD)), {}, {
        pageLoadTime: mp(wD - rD),
        documentParsingTime: mp(AD ? KD - AD : null),
        domProcessingTime: mp(wD - KD),
        domContentLoadHandlerTime: mp(pD - sD),
        onLoadTime: mp(LD - cD),
        ttfb: mp(Math.max(gD - (null !== zD && void 0 !== zD ? zD : 0), 0)),
        type: RD
      })
    }

    function kp(DD) {
      try {
        return new URL(DD).host || lw
      } catch (zD) {
        return lw
      }
    }

    function mp(DD) {
      return null == DD ? lw : "number" === typeof DD ? Math.round(DD > 0 ? DD : 0).toString() : DD.toString()
    }
    const ep = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function op(DD, zD, wD, pD, sD, KD, rD) {
      try {
        var LD = DD[KD](rD),
          cD = LD.value
      } catch (DD) {
        return void wD(DD)
      }
      LD.done ? zD(cD) : Promise.resolve(cD).then(pD, sD)
    }

    function ap(DD) {
      return function() {
        var zD = this,
          wD = arguments;
        return new Promise((function(pD, sD) {
          var KD = DD.apply(zD, wD);

          function rD(DD) {
            op(KD, pD, sD, rD, LD, "next", DD)
          }

          function LD(DD) {
            op(KD, pD, sD, rD, LD, "throw", DD)
          }
          rD(void 0)
        }))
      }
    }
    const vp = new Mw;
    var tp = class extends zw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ww
      }
      initialize() {
        var DD = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let zD = !1;
        const wD = () => {
          ! function(DD) {
            if ("complete" === document.readyState) DD();
            else {
              const zD = () => {
                "complete" === document.readyState && (DD(), document.removeEventListener("readystatechange", zD))
              };
              document.addEventListener("readystatechange", zD)
            }
          }(ap((function*() {
            if (zD) return;
            const wD = DD.api.pushEvent,
              {
                faroNavigationId: pD
              } = yield function(DD) {
                let zD;
                const wD = new Promise((DD => {
                  zD = DD
                }));
                return new PerformanceObserver((wD => {
                  var pD;
                  const [sD] = wD.getEntries();
                  if (null == sD || tD(sD.name)) return;
                  const KD = sD.toJSON();
                  let rD = lp(null === KD || void 0 === KD ? void 0 : KD.serverTiming);
                  const LD = null !== (pD = Dz("com.grafana.faro.lastNavigationId", YD)) && void 0 !== pD ? pD : lw,
                    cD = Rz(Rz({}, yp(KD)), {}, {
                      faroNavigationId: hz(),
                      faroPreviousNavigationId: LD
                    });
                  zz("com.grafana.faro.lastNavigationId", cD.faroNavigationId, YD), DD("faro.performance.navigation", cD, void 0, {
                    spanContext: rD,
                    timestampOverwriteMs: Wp(KD.startTime)
                  }), zD(cD)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), wD
              }(wD);
            zD || null == pD || function(DD, zD, wD, pD) {
              const sD = pD.trackResources;
              new PerformanceObserver((pD => {
                const KD = pD.getEntries(),
                  rD = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const LD of KD) {
                  if (tD(LD.name)) continue;
                  null === wD || void 0 === wD || wD.notify({
                    type: "resource"
                  });
                  const pD = LD.toJSON();
                  let KD = lp(null === pD || void 0 === pD ? void 0 : pD.serverTiming);
                  (null == sD && Np(pD, ep) || sD) && zD("faro.performance.resource", Rz(Rz({}, Zp(pD)), {}, {
                    faroNavigationId: DD,
                    faroResourceId: hz()
                  }), void 0, {
                    spanContext: KD,
                    timestampOverwriteMs: Wp(pD.startTime, rD)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(pD, wD, vp, DD.config)
          })))
        };
        this.cancelInitialization = () => {
          zD = !0, document.removeEventListener("prerenderingchange", wD)
        }, document.prerendering ? document.addEventListener("prerenderingchange", wD, {
          once: !0
        }) : wD()
      }
      destroy() {
        var DD;
        null === (DD = this.cancelInitialization) || void 0 === DD || DD.call(this), this.cancelInitialization = void 0
      }
    };
    const Fp = "data-faro-user-action-name",
      Yp = Fp.replace(/-name$/, "-timeout"),
      Hp = 1e3;

    function qp(DD) {
      return `data-${(DD.startsWith("data-")?DD.slice(5):DD).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Ds(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ez;
      if (void 0 === DD) return zD;
      let pD = NaN;
      try {
        pD = "string" === typeof DD && "" === DD.trim() ? NaN : Number(DD)
      } catch (sD) {}
      return !Number.isFinite(pD) || pD <= 0 ? (wD(`initialActivityTimeout must be a finite number greater than zero; using ${zD} ms`), zD) : pD > 1e3 ? (wD(`initialActivityTimeout cannot exceed ${Hp} ms; clamping to the maximum`), Hp) : pD
    }

    function zs(DD, zD, wD) {
      return void 0 !== DD && window.clearTimeout(DD), window.setTimeout((() => {
        zD()
      }), wD)
    }

    function ws(DD) {
      return DD.type === nw
    }
    let ps, ss;

    function Ks() {
      return ps || (ps = new Mw), ss || (ss = new MutationObserver(((DD, zD) => {
        ps.notify({
          type: "dom-mutation"
        })
      })), ss.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), ps
    }
    const rs = "fetch",
      Ls = "xhr";
    let cs, gs, Rs, As, Us = !1;

    function fs() {
      if (cs) return cs;

      function DD(DD) {
        cs.notify({
          type: hw,
          request: DD
        })
      }

      function zD(DD) {
        cs.notify({
          type: nw,
          request: DD
        })
      }
      return cs = new Mw, Us || (! function(DD) {
        let {
          onRequestEnd: zD,
          onRequestStart: wD
        } = DD;
        Rs || (Rs = window.fetch);
        window.fetch = function() {
          var DD, pD;
          const sD = null !== (DD = FD(arguments[0])) && void 0 !== DD ? DD : "",
            KD = tD(sD),
            rD = (null !== (pD = arguments[1]) && void 0 !== pD ? pD : {}).method,
            LD = hz();
          return KD || wD({
            url: sD,
            method: rD,
            requestId: LD,
            apiType: rs
          }), Rs.apply(this, arguments).then((DD => (KD || zD({
            url: sD,
            method: rD,
            requestId: LD,
            apiType: rs
          }), DD))).catch((DD => {
            throw KD || zD({
              url: sD,
              method: rD,
              requestId: LD,
              apiType: rs
            }), DD
          }))
        }
      }({
        onRequestStart: DD,
        onRequestEnd: zD
      }), function(DD) {
        let {
          onRequestStart: zD,
          onRequestEnd: wD
        } = DD;
        gs || (gs = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const DD = arguments[1],
            pD = tD(DD),
            sD = arguments[0],
            KD = hz();
          this.addEventListener("loadstart", (function() {
            pD || zD({
              url: DD,
              method: sD,
              requestId: KD,
              apiType: Ls
            })
          })), this.addEventListener("load", (function() {
            pD || wD({
              url: DD,
              method: sD,
              requestId: KD,
              apiType: Ls
            })
          })), this.addEventListener("error", (function() {
            pD || wD({
              url: DD,
              method: sD,
              requestId: KD,
              apiType: Ls
            })
          })), this.addEventListener("abort", (function() {
            pD || wD({
              url: DD,
              method: sD,
              requestId: KD,
              apiType: Ls
            })
          })), gs.apply(this, arguments)
        }
      }({
        onRequestStart: DD,
        onRequestEnd: zD
      }), Us = !0), cs
    }
    let Is, Bs = !1;
    let Gs = function(DD) {
      return DD[DD.Started = 0] = "Started", DD[DD.Halted = 1] = "Halted", DD[DD.Cancelled = 2] = "Cancelled", DD[DD.Ended = 3] = "Ended", DD
    }({});
    var hs = class {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = DD, this.logDebug = zD, this.initialActivityTimeout = wD, this.http = fs(), this.dom = Ks(), this.perf = (As || (As = new Mw), Bs || (Is = vp.subscribe((DD => {
          "resource" === DD.type && As.notify({
            type: "resource-entry"
          })
        })), Bs = !0), As), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Mw).merge(this.http, this.dom, this.perf).takeWhile((() => [Gs.Started, Gs.Halted].includes(this.userAction.getState()))).filter((DD => !!(this.userAction.getState() !== Gs.Halted || ws(DD) && this.runningRequests.has(DD.request.requestId)))).subscribe((DD => {
          (function(DD) {
            return DD.type === hw
          })(DD) && this.runningRequests.set(DD.request.requestId, DD.request), ws(DD) && this.runningRequests.delete(DD.request.requestId), ws(DD) ? this.userAction.getState() === Gs.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((DD => [Gs.Ended, Gs.Cancelled].includes(DD))).first().subscribe((() => this.cleanup())), this.startupTid = zs(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Gs.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Gs.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = zs(this.haltTid, (() => {
          this.userAction.getState() === Gs.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var DD, zD;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (DD = this.allMonitorsSub) || void 0 === DD || DD.unsubscribe(), null === (zD = this.stateSub) || void 0 === zD || zD.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(DD) {
        void 0 !== DD && window.clearTimeout(DD)
      }
    };

    function ns(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez;
      var wD;
      const {
        api: pD,
        config: sD,
        internalLogger: KD
      } = DD, rD = Ds(null === (wD = sD.userActionsInstrumentation) || void 0 === wD ? void 0 : wD.initialActivityTimeout, 100, zD);
      return {
        processUserEvent: function(DD) {
          var zD, wD;
          const KD = null !== (zD = null === (wD = sD.userActionsInstrumentation) || void 0 === wD ? void 0 : wD.dataAttributeName) && void 0 !== zD ? zD : Fp,
            rD = DD.target;
          if (!(rD instanceof Element)) return;
          const LD = function(DD, zD) {
              let wD = DD;
              for (; wD;) {
                if (wD.hasAttribute(zD)) return wD;
                wD = wD.parentElement
              }
              return null
            }(rD, qp(KD)),
            cD = function(DD, zD) {
              if (!DD) return;
              const wD = function(DD) {
                  return qp(DD).slice(5).replace(/-(.)/g, ((DD, zD) => zD.toUpperCase()))
                }(zD),
                pD = DD.dataset;
              for (const sD in pD)
                if (sD === wD) return pD[sD]
            }(LD, KD);
          if (!LD || !cD) return;
          const gD = function(DD, zD) {
            const wD = DD.getAttribute(function(DD) {
              const zD = qp(DD);
              return zD.endsWith("-name") ? `${zD.slice(0,-5)}-timeout` : `${zD}-timeout`
            }(zD));
            return null === wD ? void 0 : Number(wD)
          }(LD, KD);
          pD.startUserAction(cD, {}, {
            triggerName: DD.type,
            initialActivityTimeout: gD
          })
        },
        processUserActionStarted: function(DD, wD) {
          const pD = DD,
            sD = Ds(wD, rD, zD);
          new hs(pD, KD.debug, sD).attach()
        }
      }
    }
    const Ms = "user_action_start",
      Os = {
        Normal: "normal",
        Critical: "critical"
      };
    var Es = class {
        constructor() {
          this.buffer = []
        }
        addItem(DD) {
          this.buffer.push(DD)
        }
        flushBuffer(DD) {
          if (xD(DD))
            for (const zD of this.buffer) DD(zD);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Qs = class extends Mw {
        constructor(DD) {
          let {
            name: zD,
            parentId: wD,
            trigger: pD,
            transports: sD,
            attributes: KD,
            trackUserActionsExcludeItem: rD,
            importance: LD = Os.Normal,
            pushEvent: cD
          } = DD;
          super(), this.name = zD, this.attributes = KD, this.id = hz(), this.trigger = pD, this.parentId = null !== wD && void 0 !== wD ? wD : this.id, this.trackUserActionsExcludeItem = rD, this.importance = LD, this._pushEvent = cD, this._itemBuffer = new Es, this._transports = sD, this._state = 0, this._start()
        }
        addItem(DD) {
          return 0 === this._state && (this._itemBuffer.addItem(DD), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Uz(), this._startTimeMono = fz())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((DD => {
            this._transports.execute(DD)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const DD = Uz(),
            zD = fz() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((DD => {
            if (function(DD, zD) {
                return (null === zD || void 0 === zD ? void 0 : zD(DD)) || "measurement" === DD.type && "web-vitals" === DD.payload.type
              }(DD, this.trackUserActionsExcludeItem)) return void this._transports.execute(DD);
            const zD = Hz(Hz({}, DD), {}, {
              payload: Hz(Hz({}, DD.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(zD)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Hz({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: DD.toString(),
            userActionDuration: zD.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, lz(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: DD => (DD.action = {
              id: this.id,
              name: this.name
            }, DD)
          })
        }
        getState() {
          return this._state
        }
      };
    const Xs = new Mw;

    function Vs(DD, zD) {
      return !!DD && (0 === (null === DD || void 0 === DD ? void 0 : DD.getState()) && (DD.addItem(zD), !0))
    }
    var Ps = class extends zw {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ww
        }
        initialize() {
          const {
            processUserEvent: DD,
            processUserActionStarted: zD
          } = ns(BD, (DD => this.logWarn(DD)));
          this._processUserEvent = DD, this._processKeydown = zD => {
            [" ", "Enter"].includes(zD.key) && DD(zD)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Xs.subscribe((DD => {
            let {
              type: wD,
              userAction: pD,
              initialActivityTimeout: sD
            } = DD;
            "user_action_start" === wD && zD(pD, sD)
          }))
        }
        destroy() {
          var DD;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (DD = this._userActionSub) || void 0 === DD || DD.unsubscribe()
        }
      },
      Cs = class extends zw {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ww, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(DD) {
          const zD = {
            blockedURI: DD.blockedURI,
            columnNumber: DD.columnNumber,
            disposition: DD.disposition,
            documentURI: DD.documentURI,
            effectiveDirective: DD.effectiveDirective,
            lineNumber: DD.lineNumber,
            originalPolicy: DD.originalPolicy,
            referrer: DD.referrer,
            sample: DD.sample,
            sourceFile: DD.sourceFile,
            statusCode: DD.statusCode,
            violatedDirective: DD.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", lz(zD))
        }
      };
    var xs = class extends Mw {
      constructor(DD, zD) {
        var wD, pD, sD, KD;
        super(), this._tracking = !1, this.eventsObservable = DD, this._options = {
          inactivityMs: null !== (wD = null === zD || void 0 === zD ? void 0 : zD.inactivityMs) && void 0 !== wD ? wD : 100,
          drainTimeoutMs: null !== (pD = null === zD || void 0 === zD ? void 0 : zD.drainTimeoutMs) && void 0 !== pD ? pD : 1e4,
          isOperationStart: null !== (sD = null === zD || void 0 === zD ? void 0 : zD.isOperationStart) && void 0 !== sD ? sD : () => {},
          isOperationEnd: null !== (KD = null === zD || void 0 === zD ? void 0 : zD.isOperationEnd) && void 0 !== KD ? KD : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((DD => {
          var zD;
          this._lastEventTime = fz(), null === (zD = this._currentEvents) || void 0 === zD || zD.push(DD);
          const wD = this._options.isOperationStart(DD);
          var pD;
          wD && (null === (pD = this._activeOperations) || void 0 === pD || pD.set(wD, !0));
          const sD = this._options.isOperationEnd(DD);
          var KD;
          sD && (null === (KD = this._activeOperations) || void 0 === KD || KD.delete(sD));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = fz(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let DD;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), DD = this.hasActiveOperations() ? fz() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: DD
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Ts(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Ts(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(DD) {
        DD && clearTimeout(DD)
      }
    };

    function Ts(DD, zD, wD) {
      return DD && clearTimeout(DD), DD = setTimeout((() => {
        zD()
      }), wD)
    }
    let bs;
    const ds = new Set,
      Ss = new Map;
    let is, ls, Ws, Ns, Zs, ys, ks, ms, es = !1;
    var os = class extends zw {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ww
      }
      initialize() {
        const DD = fs(),
          zD = Ks(),
          wD = function() {
            function DD(DD, zD) {
              const wD = null !== zD && void 0 !== zD ? zD : location.href;
              wD !== ls && (is.notify({
                type: "url-change",
                from: ls,
                to: wD,
                trigger: DD
              }), ls = wD)
            }
            if (is || (is = new Mw, ls = location.href), !es)
              if ("navigation" in window && "NavigateEvent" in window) {
                ks = zD => {
                  try {
                    const wD = null === zD || void 0 === zD ? void 0 : zD.destination;
                    (null === wD || void 0 === wD ? void 0 : wD.sameDocument) && "string" === typeof wD.url && DD("navigate", wD.url)
                  } catch (wD) {}
                }, window.navigation.addEventListener("navigate", ks);
                const zD = window.NavigateEvent;
                zD && zD.prototype && "function" === typeof zD.prototype.intercept && (ms || (ms = zD.prototype.intercept), zD.prototype.intercept = function(zD) {
                  try {
                    const zD = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      wD = null === this || void 0 === this ? void 0 : this.destination;
                    zD && wD && !1 === wD.sameDocument && "string" === typeof wD.url && DD("navigate-intercept", wD.url)
                  } catch (wD) {}
                  return ms.call(this, zD)
                }), es = !0
              } else Ws || (Ws = window.history.pushState), window.history.pushState = function() {
                for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
                const sD = Ws.apply(window.history, wD);
                return DD("pushState"), sD
              }, Ns || (Ns = window.history.replaceState), window.history.replaceState = function() {
                for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
                const sD = Ns.apply(window.history, wD);
                return DD("replaceState"), sD
              }, Zs = () => DD("popstate"), ys = () => DD("hashchange"), window.addEventListener("popstate", Zs), window.addEventListener("hashchange", ys), es = !0;
            return is
          }(),
          pD = (sD = ["pointerdown", "keydown"], bs || (bs = new Mw), sD.forEach((DD => {
            if (!ds.has(DD)) {
              const zD = () => {
                bs.notify({
                  type: "interaction",
                  name: DD
                })
              };
              window.addEventListener(DD, zD), ds.add(DD), Ss.set(DD, zD)
            }
          })), bs);
        var sD;
        const KD = new xs((new Mw).merge(DD, zD, wD), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: DD => function(DD) {
            return DD.type === hw
          }(DD) ? DD.request.requestId : void 0,
          isOperationEnd: DD => function(DD) {
            return DD.type === nw
          }(DD) ? DD.request.requestId : void 0
        });
        KD.filter((DD => "tracking-ended" === DD.message)).subscribe((DD => {
          var zD, wD;
          if ((null === (zD = DD.events) || void 0 === zD ? void 0 : zD.some((DD => "url-change" === DD.type))) && (null === (wD = DD.events) || void 0 === wD ? void 0 : wD.some((DD => "dom-mutation" === DD.type)))) {
            var pD;
            const zD = null === (pD = DD.events) || void 0 === pD ? void 0 : pD.find((DD => "url-change" === DD.type));
            BD.api.pushEvent("faro.navigation", {
              fromUrl: null === zD || void 0 === zD ? void 0 : zD.from,
              toUrl: null === zD || void 0 === zD ? void 0 : zD.to,
              sameDocument: String(!0),
              duration: DD.duration
            })
          }
        })), pD.subscribe((() => {
          KD.startTracking()
        }))
      }
    };

    function as() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zD = [new Ps, new iw, new Sp, new pw, new Ww, new os];
      return !1 !== DD.enablePerformanceInstrumentation && zD.unshift(new tp), !1 !== DD.enableContentSecurityPolicyInstrumentation && zD.push(new Cs), !1 !== DD.captureConsole && zD.push(new dw), zD
    }
    var us = wD(6731);
    let vs, ts;

    function Fs() {
      const DD = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return vs === DD && ts || (ts = new us.UAParser(DD).getResult(), vs = DD), ts
    }
    const Ys = () => {
        const {
          browser: DD,
          os: zD,
          ua: wD
        } = Fs(), {
          name: pD,
          version: sD
        } = DD, {
          name: KD,
          version: rD
        } = zD, LD = navigator.language, cD = wD.includes("Mobi"), gD = function() {
          if (!pD || !sD) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== pD && void 0 !== pD ? pD : lw,
            version: null !== sD && void 0 !== sD ? sD : lw,
            os: `${null!==KD&&void 0!==KD?KD:lw} ${null!==rD&&void 0!==rD?rD:lw}`,
            userAgent: null !== wD && void 0 !== wD ? wD : lw,
            language: null !== LD && void 0 !== LD ? LD : lw,
            mobile: cD,
            brands: null !== gD && void 0 !== gD ? gD : lw,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Hs = () => {
        const {
          name: DD,
          version: zD
        } = Fs().os;
        if (!DD && !zD) return {};
        const wD = {};
        return DD && (wD.name = DD), zD && (wD.version = zD), {
          os: wD
        }
      };

    function qs(DD) {
      var zD, wD, pD;
      return {
        id: null !== (zD = null === (wD = BD.config) || void 0 === wD || null === (wD = wD.sessionTracking) || void 0 === wD || null === (pD = wD.generateSessionId) || void 0 === pD ? void 0 : pD.call(wD)) && void 0 !== zD ? zD : hz(),
        attributes: DD
      }
    }
    const DK = () => ({
      sdk: {
        name: "faro-web",
        version: ww
      }
    });
    var zK = class extends Dw {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let wK = function(DD) {
      return DD.EXCEPTION = "exception", DD.LOG = "log", DD.MEASUREMENT = "measurement", DD.TRACE = "trace", DD.EVENT = "event", DD
    }({});
    const pK = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function sK(DD, zD) {
      var wD, pD;
      if (void 0 === zD) return DD;
      if (void 0 === DD) return {
        resourceSpans: zD
      };
      const sD = null === (wD = DD.resourceSpans) || void 0 === wD ? void 0 : wD[0];
      if (void 0 === sD) return DD;
      const KD = (null === sD || void 0 === sD ? void 0 : sD.scopeSpans) || [],
        rD = (null === zD || void 0 === zD || null === (pD = zD[0]) || void 0 === pD ? void 0 : pD.scopeSpans) || [];
      return Hz(Hz({}, DD), {}, {
        resourceSpans: [Hz(Hz({}, sD), {}, {
          scopeSpans: [...KD, ...rD]
        })]
      })
    }

    function KK(DD) {
      let zD = {
        meta: {}
      };
      return void 0 !== DD[0] && (zD.meta = DD[0].meta), DD.forEach((DD => {
        switch (DD.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const wD = pK[DD.type],
              pD = zD[wD];
            zD = Hz(Hz({}, zD), {}, {
              [wD]: void 0 === pD ? [DD.payload] : [...pD, DD.payload]
            });
            break
          }
          case "trace":
            zD = Hz(Hz({}, zD), {}, {
              traces: sK(zD.traces, DD.payload.resourceSpans)
            })
        }
      })), zD
    }
    var rK = class extends zK {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = DD, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ww
      }
      send(DD) {
        var zD;
        return this.unpatchedConsole[null !== (zD = this.options.level) && void 0 !== zD ? zD : Ow.DEBUG]("New event", KK([DD]))
      }
    };
    const LK = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      cK = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      gK = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      RK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      AK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      UK = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function fK(DD) {
      let {
        weekday: zD,
        day: wD,
        month: pD,
        year: sD,
        hour: KD,
        minute: rD,
        second: LD
      } = DD;
      if (sD < 1900 || wD < 1 || KD > 23 || rD > 59 || LD > 60) return;
      const cD = 60 === LD,
        gD = new Date(0);
      return gD.setUTCFullYear(sD, pD, wD), gD.setUTCHours(KD, rD, cD ? 59 : LD, 0), gD.getUTCDay() === zD && gD.getUTCDate() === wD && gD.getUTCMonth() === pD && gD.getUTCFullYear() === sD && gD.getUTCHours() === KD && gD.getUTCMinutes() === rD && gD.getUTCSeconds() === (cD ? 59 : LD) ? gD.getTime() + (cD ? 1e3 : 0) : void 0
    }
    var IK = class {
      constructor(DD) {
        this.options = DD, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var DD = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const zD = this.sequence++;
        let wD = !1;
        return {
          deliver: function() {
            var wD = ap((function*(wD) {
              const pD = DD.options.getNow();
              let sD, KD = 0;
              for (;;) {
                var rD, LD, cD;
                const gD = DD.options.retry.maxAttempts - KD,
                  RD = yield DD.runAttempt((() => wD(gD, DD.unloading)), KD > 0);
                if (KD += RD.attemptsMade, "success" === RD.kind) return {
                  kind: "success",
                  attempts: KD,
                  elapsedTimeMs: DD.options.getNow() - pD
                };
                if (sD = RD.failure, "terminal" === RD.kind || DD.unloading) return {
                  kind: "terminal",
                  attempts: KD,
                  elapsedTimeMs: DD.options.getNow() - pD,
                  failure: sD
                };
                if (KD >= DD.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: KD,
                  elapsedTimeMs: DD.options.getNow() - pD,
                  failure: sD,
                  reason: "retries-exhausted"
                };
                if (null != RD.retryAfterMs && RD.retryAfterMs > DD.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: KD,
                  elapsedTimeMs: DD.options.getNow() - pD,
                  failure: sD,
                  reason: "retry-after-too-long"
                };
                const AD = Math.min(null !== (rD = RD.retryAfterMs) && void 0 !== rD ? rD : DD.options.retry.initialBackoffMs * Math.pow(DD.options.retry.backoffMultiplier, KD - 1), DD.options.retry.maxBackoffMs);
                if (null === (LD = (cD = DD.options).onRetry) || void 0 === LD || LD.call(cD, AD, KD + 1), yield DD.waitForTurn(zD, AD)) {
                  const zD = DD.options.retry.maxAttempts - KD,
                    sD = yield DD.runAttempt((() => wD(zD, !0)));
                  return KD += sD.attemptsMade, {
                    kind: "success" === sD.kind ? "success" : "terminal",
                    attempts: KD,
                    elapsedTimeMs: DD.options.getNow() - pD,
                    failure: "success" === sD.kind ? void 0 : sD.failure
                  }
                }
              }
            }));
            return function(DD) {
              return wD.apply(this, arguments)
            }
          }(),
          release: () => {
            wD || (wD = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const DD = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const zD of DD) zD.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((wD, pD) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const zD = () => {
                this.inProgress--, this.runNextAttempt()
              };
              DD().then((DD => {
                zD(), wD(DD)
              }), (DD => {
                zD(), pD(DD)
              }))
            },
            isRedelivery: zD
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const DD = this.options.getNow(),
            zD = this.attemptQueue.findIndex((zD => {
              let {
                isRedelivery: wD
              } = zD;
              return this.unloading || !wD || DD >= this.nextSendAt
            }));
          if (zD < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - DD)));
          const [wD] = this.attemptQueue.splice(zD, 1);
          wD.isRedelivery && !this.unloading && (this.nextSendAt = DD + 1), wD.run()
        }
      }
      waitForTurn(DD, zD) {
        const wD = Math.min(zD * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((zD => {
          this.waiting.push({
            sequence: DD,
            readyAt: this.options.getNow() + wD,
            resolve: zD
          }), this.waiting.sort(((DD, zD) => DD.readyAt === zD.readyAt ? DD.sequence - zD.sequence : DD.readyAt - zD.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const DD = this.waiting[0],
          zD = DD.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const zD = this.waiting.indexOf(DD);
          zD >= 0 && this.waiting.splice(zD, 1), DD.resolve(!1), this.scheduleNext()
        }), Math.max(0, zD - this.options.getNow()))
      }
    };

    function BK(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if ({}.hasOwnProperty.call(DD, pD)) {
            if (zD.includes(pD)) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.includes(wD) || {}.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function GK(DD) {
      const {
        size: zD,
        concurrency: wD
      } = DD, pD = [];
      let sD = 0;
      const KD = () => {
        if (sD < wD && pD.length) {
          const {
            producer: DD,
            resolve: zD,
            reject: wD
          } = pD.shift();
          sD++, DD().then((DD => {
            sD--, KD(), zD(DD)
          }), (DD => {
            sD--, KD(), wD(DD)
          }))
        }
      };
      return {
        add: DD => {
          if (pD.length + sD >= zD) throw new Error("Task buffer full");
          return new Promise(((zD, wD) => {
            pD.push({
              producer: DD,
              resolve: zD,
              reject: wD
            }), KD()
          }))
        }
      }
    }
    const hK = ["headers"],
      nK = ["keepalive", "signal"],
      MK = new Set([408, 425, 429, 500, 502, 503, 504]),
      OK = new Set([429, 503]);
    let JK = 0,
      EK = 0;
    var QK = class extends Error {};
    var XK = class extends zK {
      constructor(DD) {
        var zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD;
        super(), this.options = DD, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ww, this.pendingCustomSends = 0, this.getNow = null !== (zD = DD.getNow) && void 0 !== zD ? zD : Date.now, this.requestTimeoutMs = null !== (wD = DD.requestTimeoutMs) && void 0 !== wD ? wD : 1e4, this.compressionEnabled = null !== (pD = DD.requestCompression) && void 0 !== pD && pD && "undefined" !== typeof CompressionStream, DD.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new IK({
          bufferSize: null !== (sD = DD.bufferSize) && void 0 !== sD ? sD : 30,
          concurrency: null !== (KD = DD.concurrency) && void 0 !== KD ? KD : 5,
          retry: {
            maxAttempts: null !== (rD = null === (LD = DD.retry) || void 0 === LD ? void 0 : LD.maxAttempts) && void 0 !== rD ? rD : 3,
            initialBackoffMs: null !== (cD = null !== (gD = null === (RD = DD.retry) || void 0 === RD ? void 0 : RD.initialBackoffMs) && void 0 !== gD ? gD : DD.defaultRateLimitBackoffMs) && void 0 !== cD ? cD : 1e3,
            maxBackoffMs: null !== (AD = null === (UD = DD.retry) || void 0 === UD ? void 0 : UD.maxBackoffMs) && void 0 !== AD ? AD : 3e4,
            backoffMultiplier: null !== (fD = null === (ID = DD.retry) || void 0 === ID ? void 0 : ID.backoffMultiplier) && void 0 !== fD ? fD : 2
          },
          getNow: this.getNow,
          getRandom: null !== (BD = DD.getRandom) && void 0 !== BD ? BD : Math.random,
          onRetry: (DD, zD) => {
            this.logDebug(`Retrying failed request after ${DD}ms. Attempt ${zD}.`)
          }
        }), this.customPromiseBuffer = GK({
          size: null !== (GD = DD.bufferSize) && void 0 !== GD ? GD : 30,
          concurrency: null !== (hD = DD.concurrency) && void 0 !== hD ? hD : 5
        }), this.defaultPromiseBuffer = {
          add: DD => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(DD);
            const zD = this.deliveryQueue.reserve();
            if (!zD) throw new Error("Task buffer full");
            return this.runBufferedTask(zD, DD)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (DD => {
          DD.persisted && this.deliveryQueue.resume()
        })))
      }
      send(DD) {
        var zD = this;
        return ap((function*() {
          const wD = zD.promiseBuffer;
          if (wD !== zD.defaultPromiseBuffer || wD.add !== zD.defaultBufferAdd) {
            zD.pendingCustomSends++;
            try {
              yield wD.add((() => zD.deliver(DD)))
            } catch (pD) {
              zD.logError("Permanent delivery failure", {
                error: pD,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              zD.pendingCustomSends--
            }
          } else yield zD.deliver(DD)
        }))()
      }
      runBufferedTask(DD, zD) {
        return ap((function*() {
          let wD;
          try {
            return yield DD.deliver(ap((function*() {
              return wD = yield zD(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), wD
          } finally {
            DD.release()
          }
        }))()
      }
      deliver(DD) {
        var zD = this;
        return ap((function*() {
          const wD = zD.deliveryQueue.reserve();
          if (wD) try {
            const pD = yield zD.prepareRequest(DD), sD = yield wD.deliver(((DD, wD) => zD.performAttempt(pD, DD, wD)));
            "terminal" === sD.kind && zD.logError("retries-exhausted" === sD.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Rz(Rz({}, sD.failure), {}, {
              reason: sD.reason,
              attempts: sD.attempts,
              elapsedTimeMs: sD.elapsedTimeMs
            }))
          } catch (pD) {
            zD.logError("Permanent delivery failure", {
              error: pD,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            wD.release()
          } else zD.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var DD;
        return [this.options.url].concat(null !== (DD = this.config.ignoreUrls) && void 0 !== DD ? DD : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(DD) {
        var zD = this;
        return ap((function*() {
          var wD, pD;
          const sD = KK(DD),
            KD = null === (wD = sD.meta.session) || void 0 === wD ? void 0 : wD.id,
            rD = JSON.stringify(sD),
            LD = null !== (pD = zD.options.requestOptions) && void 0 !== pD ? pD : {},
            {
              headers: cD = {}
            } = LD,
            gD = BK(LD, hK),
            {
              keepalive: RD,
              signal: AD
            } = gD,
            UD = BK(gD, nK),
            fD = {};
          for (const [DD, zD] of Object.entries(cD)) fD[DD] = "function" === typeof zD ? yield zD(): zD;
          let ID = rD,
            BD = function(DD) {
              return "undefined" === typeof TextEncoder ? DD.length : (new TextEncoder).encode(DD).byteLength
            }(rD);
          const GD = {};
          return zD.compressionEnabled && (ID = yield zD.compress(rD), BD = ID.size, GD["Content-Encoding"] = "gzip"), {
            bodySize: BD,
            sessionId: KD,
            requestInit: Rz({
              method: "POST",
              headers: Rz(Rz(Rz(Rz(Rz({
                "Content-Type": "application/json"
              }, GD), fD), zD.options.apiKey ? {
                "x-api-key": zD.options.apiKey
              } : {}), KD ? {
                "x-faro-session-id": KD
              } : {}), {}, {
                "Idempotency-Key": hz(20)
              }),
              body: ID
            }, UD)
          }
        }))()
      }
      performAttempt(DD, zD, wD) {
        var pD = this;
        return ap((function*() {
          var sD;
          const KD = null === (sD = pD.options.requestOptions) || void 0 === sD ? void 0 : sD.signal;
          if (null === KD || void 0 === KD ? void 0 : KD.aborted) return {
            kind: "terminal",
            failure: {
              error: KD.reason
            },
            attemptsMade: 0
          };
          let rD = 0;
          try {
            var LD;
            const sD = yield pD.fetchWithKeepaliveFallback(DD.requestInit, DD.bodySize, !!wD || (null === (LD = pD.options.requestOptions) || void 0 === LD ? void 0 : LD.keepalive), zD, (() => rD++));
            if (pD.handleResponse(sD, DD.sessionId), sD.status >= 200 && sD.status < 300) return {
              kind: "success",
              attemptsMade: rD
            };
            const KD = {
              status: sD.status
            };
            return !MK.has(sD.status) || wD ? {
              kind: "terminal",
              failure: KD,
              attemptsMade: rD
            } : {
              kind: "retry",
              failure: KD,
              attemptsMade: rD,
              retryAfterMs: OK.has(sD.status) ? pD.getRetryAfterDelayMs(sD) : void 0
            }
          } catch (cD) {
            const DD = {
              error: cD
            };
            return (null === KD || void 0 === KD ? void 0 : KD.aborted) || !pD.isFetchNetworkError(cD) || wD ? {
              kind: "terminal",
              failure: DD,
              attemptsMade: rD
            } : {
              kind: "retry",
              failure: DD,
              attemptsMade: rD
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(DD, zD, wD, pD, sD) {
        var KD = this;
        return ap((function*() {
          const rD = KD.getNow(),
            LD = KD.reserveKeepalive(zD, wD);
          try {
            return yield KD.fetchWithTimeout(Rz(Rz({}, DD), {}, {
              keepalive: LD.keepalive
            }), KD.requestTimeoutMs, sD)
          } catch (gD) {
            var cD;
            if (LD.keepalive && pD > 1 && KD.isFetchNetworkError(gD) && !(gD instanceof QK) && !(null === (cD = KD.options.requestOptions) || void 0 === cD || null === (cD = cD.signal) || void 0 === cD ? void 0 : cD.aborted)) {
              KD.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const zD = KD.requestTimeoutMs - (KD.getNow() - rD);
              return KD.fetchWithTimeout(Rz(Rz({}, DD), {}, {
                keepalive: !1
              }), zD, sD)
            }
            throw gD
          } finally {
            LD.release()
          }
        }))()
      }
      fetchWithTimeout(DD, zD, wD) {
        var pD = this;
        return ap((function*() {
          var sD;
          const KD = null === (sD = pD.options.requestOptions) || void 0 === sD ? void 0 : sD.signal;
          if (pD.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return wD(), fetch(pD.options.url, Rz(Rz({}, DD), {}, {
            signal: KD
          }));
          if (zD <= 0) throw new QK("Request timed out");
          const rD = new AbortController,
            LD = () => rD.abort(null === KD || void 0 === KD ? void 0 : KD.reason);
          null === KD || void 0 === KD || KD.addEventListener("abort", LD, {
            once: !0
          });
          let cD = !1;
          const gD = setTimeout((() => {
            cD = !0, rD.abort()
          }), zD);
          try {
            return wD(), yield fetch(pD.options.url, Rz(Rz({}, DD), {}, {
              signal: rD.signal
            }))
          } catch (RD) {
            if (cD && !(null === KD || void 0 === KD ? void 0 : KD.aborted)) throw new QK("Request timed out");
            throw RD
          } finally {
            clearTimeout(gD), null === KD || void 0 === KD || KD.removeEventListener("abort", LD)
          }
        }))()
      }
      getRetryAfterDelayMs(DD) {
        const zD = DD.headers.get("Retry-After");
        if (!zD) return;
        if (/^\d+$/.test(zD)) {
          const DD = 1e3 * Number(zD);
          return Number.isFinite(DD) ? DD : Number.POSITIVE_INFINITY
        }
        const wD = this.getNow(),
          pD = function(DD, zD) {
            const wD = LK.exec(DD);
            if (wD) {
              const [, DD, zD, pD, sD, KD, rD, LD] = wD;
              return fK({
                weekday: RK.indexOf(DD),
                day: Number(zD),
                month: UK.indexOf(pD),
                year: Number(sD),
                hour: Number(KD),
                minute: Number(rD),
                second: Number(LD)
              })
            }
            const pD = cK.exec(DD);
            if (pD) {
              const [, DD, wD, rD, LD, cD, gD, RD] = pD, AD = new Date(zD);
              if (Number.isNaN(AD.getTime())) return;
              const UD = AD.getUTCFullYear();
              let fD = 100 * Math.floor(UD / 100) + Number(LD);
              fD < UD && (fD += 100);
              const ID = UK.indexOf(rD),
                BD = {
                  month: ID,
                  day: Number(wD),
                  hour: Number(cD),
                  minute: Number(gD),
                  second: Number(RD),
                  millisecond: 0
                },
                GD = {
                  month: AD.getUTCMonth(),
                  day: AD.getUTCDate(),
                  hour: AD.getUTCHours(),
                  minute: AD.getUTCMinutes(),
                  second: AD.getUTCSeconds(),
                  millisecond: AD.getUTCMilliseconds()
                };
              return (fD > UD + 50 || fD === UD + 50 && (KD = GD, ((sD = BD).month - KD.month || sD.day - KD.day || sD.hour - KD.hour || sD.minute - KD.minute || sD.second - KD.second || sD.millisecond - KD.millisecond) > 0)) && (fD -= 100), fK({
                weekday: AK.indexOf(DD),
                day: Number(wD),
                month: ID,
                year: fD,
                hour: Number(cD),
                minute: Number(gD),
                second: Number(RD)
              })
            }
            var sD, KD;
            const rD = gK.exec(DD);
            if (!rD) return;
            const [, LD, cD, gD, RD, AD, UD, fD, ID] = rD;
            return fK({
              weekday: RK.indexOf(LD),
              day: Number(null !== gD && void 0 !== gD ? gD : RD),
              month: UK.indexOf(cD),
              year: Number(ID),
              hour: Number(AD),
              minute: Number(UD),
              second: Number(fD)
            })
          }(zD, wD);
        return null == pD ? void 0 : Math.max(0, pD - wD)
      }
      reserveKeepalive(DD, zD) {
        if (!1 === zD || DD > 6e4 || JK + DD > 6e4 || EK >= 9) return {
          keepalive: !1,
          release: ez
        };
        JK += DD, EK++;
        let wD = !1;
        return {
          keepalive: !0,
          release: () => {
            wD || (wD = !0, JK -= DD, EK--)
          }
        }
      }
      handleResponse(DD, zD) {
        202 === DD.status && "invalid" === DD.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), zD), DD.text().catch(ez)
      }
      isFetchNetworkError(DD) {
        return DD instanceof TypeError || DD instanceof QK || DD instanceof DOMException && "AbortError" === DD.name
      }
      compress(DD) {
        return ap((function*() {
          const zD = [],
            wD = new ReadableStream({
              start(zD) {
                zD.enqueue((new TextEncoder).encode(DD)), zD.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: DD,
              value: pD
            } = yield wD.read();
            if (DD) return new Blob(zD);
            zD.push(pD)
          }
        }))()
      }
      extendFaroSession(DD, zD, wD) {
        var pD, sD;
        const KD = DD.sessionTracking;
        if (!(null === KD || void 0 === KD ? void 0 : KD.enabled)) return void zD("Session expired.");
        const {
          fetchUserSession: rD,
          storeUserSession: LD
        } = mz(KD), cD = null === (pD = this.metas.value.session) || void 0 === pD ? void 0 : pD.id, gD = null === (sD = rD()) || void 0 === sD ? void 0 : sD.sessionId;
        wD && wD === cD && wD === gD ? (Tz({
          fetchUserSession: rD,
          storeUserSession: LD
        })({
          forceSessionExtend: !0
        }), zD("Session expired; created new session.")) : zD("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const VK = () => {
      const DD = window.k6;
      return {
        k6: Rz({
          isK6Browser: !0
        }, (null === DD || void 0 === DD ? void 0 : DD.testRunId) && {
          testRunId: null === DD || void 0 === DD ? void 0 : DD.testRunId
        })
      }
    };
    let PK, CK;

    function xK() {
      let {
        generatePageId: DD,
        initialPageMeta: zD
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const wD = location.href;
        return xD(DD) && PK !== wD && (PK = wD, CK = DD(location)), {
          page: Rz(Rz({
            url: wD
          }, CK ? {
            id: CK
          } : {}), zD)
        }
      }
    }

    function TK() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz,
        zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const wD = az;
      return zD > 0 && (wD.error = zD >= 1 ? function() {
        for (var zD = arguments.length, pD = new Array(zD), sD = 0; sD < zD; sD++) pD[sD] = arguments[sD];
        DD.error(`${wD.prefix}\n`, ...pD)
      } : ez, wD.warn = zD >= 2 ? function() {
        for (var zD = arguments.length, pD = new Array(zD), sD = 0; sD < zD; sD++) pD[sD] = arguments[sD];
        DD.warn(`${wD.prefix}\n`, ...pD)
      } : ez, wD.info = zD >= 3 ? function() {
        for (var zD = arguments.length, pD = new Array(zD), sD = 0; sD < zD; sD++) pD[sD] = arguments[sD];
        DD.info(`${wD.prefix}\n`, ...pD)
      } : ez, wD.debug = zD >= 4 ? function() {
        for (var zD = arguments.length, pD = new Array(zD), sD = 0; sD < zD; sD++) pD[sD] = arguments[sD];
        DD.debug(`${wD.prefix}\n`, ...pD)
      } : ez), wD
    }
    const bK = "faro",
      jK = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      dK = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function SK(DD) {
      var zD, wD, sD, KD, rD, LD;
      const cD = [],
        RD = TK(DD.unpatchedConsole, DD.internalLoggerLevel);
      DD.transports ? ((DD.url || DD.apiKey) && RD.error('if "transports" is defined, "url" and "apiKey" should not be defined'), cD.push(...DD.transports)) : DD.url ? cD.push(new XK({
        url: DD.url,
        apiKey: DD.apiKey,
        requestCompression: DD.requestCompression
      })) : RD.error('either "url" or "transports" must be defined');
      const {
        dedupe: AD = !0,
        eventDomain: UD = pD,
        globalObjectKey: fD = bK,
        instrumentations: ID = as(),
        internalLoggerLevel: BD = uz,
        isolate: GD = !1,
        logArgsSerializer: hD = jw,
        metas: nD = lK(DD),
        paused: MD = !1,
        preventGlobalExposure: OD = !1,
        unpatchedConsole: JD = qz,
        url: ED,
        experimental: QD
      } = DD, XD = BK(DD, dK), VD = null !== (zD = null === QD || void 0 === QD ? void 0 : QD.trackNavigation) && void 0 !== zD && zD, PD = {
        dataAttributeName: qp(null !== (wD = null === (sD = DD.userActionsInstrumentation) || void 0 === sD ? void 0 : sD.dataAttributeName) && void 0 !== wD ? wD : Fp),
        excludeItem: null === (KD = DD.userActionsInstrumentation) || void 0 === KD ? void 0 : KD.excludeItem,
        initialActivityTimeout: Ds(null === (rD = DD.userActionsInstrumentation) || void 0 === rD ? void 0 : rD.initialActivityTimeout, 100, (DD => RD.warn(DD)))
      };
      return Rz(Rz({}, XD), {}, {
        batching: Rz(Rz({}, jK), DD.batching),
        dedupe: AD,
        globalObjectKey: fD,
        instrumentations: iK(ID, DD),
        internalLoggerLevel: BD,
        isolate: GD,
        logArgsSerializer: hD,
        metas: nD,
        parseStacktrace: Gw,
        paused: MD,
        preventGlobalExposure: OD,
        transports: cD,
        unpatchedConsole: JD,
        eventDomain: UD,
        ignoreUrls: [...null !== (LD = DD.ignoreUrls) && void 0 !== LD ? LD : [], ...ED ? [ED] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Rz(Rz(Rz({}, gD), DD.sessionTracking), WK({
          trackGeolocation: DD.trackGeolocation,
          sessionTracking: DD.sessionTracking
        })),
        userActionsInstrumentation: PD,
        experimental: {
          trackNavigation: VD
        }
      })
    }

    function iK(DD, zD) {
      let {
        experimental: wD
      } = zD;
      var pD;
      const sD = null !== (pD = null === wD || void 0 === wD ? void 0 : wD.trackNavigation) && void 0 !== pD && pD;
      return DD.filter((DD => !("@grafana/faro-web-sdk:instrumentation-navigation" === DD.name && !sD)))
    }

    function lK(DD) {
      var zD, wD, pD;
      const {
        page: sD,
        generatePageId: KD
      } = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.pageTracking) && void 0 !== zD ? zD : {}, rD = [Ys, Hs, xK({
        generatePageId: KD,
        initialPageMeta: sD
      }), ...null !== (wD = DD.metas) && void 0 !== wD ? wD : [], DK];
      return CD(null === (pD = window) || void 0 === pD ? void 0 : pD.k6) ? [...rD, VK] : rD
    }

    function WK(DD) {
      let {
        trackGeolocation: zD,
        sessionTracking: wD
      } = DD;
      var pD;
      const sD = {};
      return VD(zD) && (sD.geoLocationTrackingEnabled = zD), uD(sD) ? {} : {
        session: Rz(Rz({}, null !== (pD = null === wD || void 0 === wD ? void 0 : wD.session) && void 0 !== pD ? pD : {}), {}, {
          overrides: sD
        })
      }
    }
    const NK = new WeakSet;

    function ZK(DD) {
      return NK.add(DD), DD
    }

    function yK(DD, zD) {
      if (DD.capture) return ZK(DD.capture(zD));
      const wD = ZK(DD.value);
      return null === zD || void 0 === zD || zD(), wD
    }

    function kK(DD) {
      const zD = `__faroBundleId_${DD}`,
        wD = null === RD || void 0 === RD ? void 0 : RD[zD];
      if ("string" === typeof wD && "" !== wD) return wD;
      const pD = "undefined" !== typeof window ? window[zD] : void 0;
      return "string" === typeof pD && "" !== pD ? pD : void 0
    }

    function mK(DD) {
      var zD, wD;
      const pD = DD.config.app.name,
        sD = pD ? function(DD) {
          return null === RD || void 0 === RD ? void 0 : RD[`__faroGitHash_${DD}`]
        }(pD) : void 0,
        KD = {
          sdk: {
            version: ww,
            name: "faro"
          },
          app: Hz({
            bundleId: pD && kK(pD)
          }, void 0 !== sD ? {
            gitHash: sD
          } : {})
        },
        rD = null === (zD = DD.config.sessionTracking) || void 0 === zD ? void 0 : zD.session;
      rD && DD.api.setSession(rD), DD.config.app && (KD.app = Hz(Hz({}, DD.config.app), KD.app)), DD.config.user && (KD.user = DD.config.user), DD.config.view && (KD.view = DD.config.view), DD.metas.add(KD, ...null !== (wD = DD.config.metas) && void 0 !== wD ? wD : [])
    }
    var eK = class {
      constructor(DD, zD) {
        var wD, pD;
        this.signalBuffer = [], this.itemLimit = null !== (wD = null === zD || void 0 === zD ? void 0 : zD.itemLimit) && void 0 !== wD ? wD : 50, this.sendTimeout = null !== (pD = null === zD || void 0 === zD ? void 0 : zD.sendTimeout) && void 0 !== pD ? pD : 250, this.paused = (null === zD || void 0 === zD ? void 0 : zD.paused) || !1, this.sendFn = DD, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(DD) {
        this.paused || (this.signalBuffer.push(DD), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(DD) {
        const zD = new Map;
        return DD.forEach((DD => {
          const wD = JSON.stringify(DD.meta);
          let pD = zD.get(wD);
          pD = void 0 === pD ? [DD] : [...pD, DD], zD.set(wD, pD)
        })), Array.from(zD.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const DD = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(DD).forEach(this.sendFn)
        } catch (zD) {
          throw this.signalBuffer = [...DD, ...this.signalBuffer], this.trimBufferToLimit(), zD
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function oK(DD, zD, wD, pD) {
      var sD;
      zD.debug("Initializing transports");
      const KD = [];
      let rD = [];
      const LD = DD => {
        let zD = DD;
        for (const pD of rD) {
          const DD = zD.map(pD).filter(Boolean);
          if (0 === DD.length) return [];
          zD = aK(DD, wD)
        }
        return zD
      };
      let cD;
      (null === (sD = wD.batching) || void 0 === sD ? void 0 : sD.enabled) && (cD = new eK((DD => {
        const wD = LD(DD);
        if (0 !== wD.length)
          for (const pD of KD) zD.debug(`Transporting item using ${pD.name}\n`, wD), pD.isBatched() && pD.send(wD)
      }), {
        sendTimeout: wD.batching.sendTimeout,
        itemLimit: wD.batching.itemLimit,
        paused: wD.paused
      }));
      return {
        add: function() {
          zD.debug("Adding transports");
          for (var sD = arguments.length, rD = new Array(sD), LD = 0; LD < sD; LD++) rD[LD] = arguments[LD];
          rD.forEach((sD => {
            zD.debug(`Adding "${sD.name}" transport`), KD.some((DD => DD === sD)) ? zD.warn(`Transport ${sD.name} is already added`) : (sD.unpatchedConsole = DD, sD.internalLogger = zD, sD.config = wD, sD.metas = pD, KD.push(sD))
          }))
        },
        addBeforeSendHooks: function() {
          zD.debug("Adding beforeSendHooks\n", rD);
          for (var DD = arguments.length, wD = new Array(DD), pD = 0; pD < DD; pD++) wD[pD] = arguments[pD];
          wD.forEach((DD => {
            DD && rD.push(DD)
          }))
        },
        getBeforeSendHooks: () => [...rD],
        execute: DD => {
          var sD;
          if (!wD.paused && yz(pD).shouldCapture()) {
            if (AD = DD.meta, !NK.has(AD)) {
              var rD, gD, RD;
              const zD = null === (rD = pD.value.session) || void 0 === rD ? void 0 : rD.id,
                sD = yK(pD);
              if (wD.paused) return;
              const KD = Hz({}, DD.meta);
              (null === (gD = KD.session) || void 0 === gD ? void 0 : gD.id) === zD && (null === (RD = sD.session) || void 0 === RD ? void 0 : RD.id) !== zD && (void 0 === sD.session ? delete KD.session : KD.session = sD.session), DD = Hz(Hz({}, DD), {}, {
                meta: ZK(KD)
              })
            }
            var AD;
            (null === (sD = wD.batching) || void 0 === sD ? void 0 : sD.enabled) && (null === cD || void 0 === cD || cD.addItem(DD)), (DD => {
              var pD;
              if ((null === (pD = wD.batching) || void 0 === pD ? void 0 : pD.enabled) && KD.every((DD => DD.isBatched()))) return;
              const [sD] = LD([DD]);
              if (void 0 !== sD)
                for (const LD of KD) {
                  var rD;
                  zD.debug(`Transporting item using ${LD.name}\n`, sD), LD.isBatched() ? (null === (rD = wD.batching) || void 0 === rD ? void 0 : rD.enabled) || LD.send([sD]) : LD.send(sD)
                }
            })(DD)
          }
        },
        isPaused: () => wD.paused,
        pause: () => {
          zD.debug("Pausing transports"), null === cD || void 0 === cD || cD.pause(), wD.paused = !0
        },
        remove: function() {
          zD.debug("Removing transports");
          for (var DD = arguments.length, wD = new Array(DD), pD = 0; pD < DD; pD++) wD[pD] = arguments[pD];
          wD.forEach((DD => {
            zD.debug(`Removing "${DD.name}" transport`);
            const wD = KD.indexOf(DD); - 1 !== wD ? KD.splice(wD, 1) : zD.warn(`Transport "${DD.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var DD = arguments.length, wD = new Array(DD), pD = 0; pD < DD; pD++) wD[pD] = arguments[pD];
          zD.debug("Removing beforeSendHooks"), rD = rD.filter((DD => !wD.includes(DD)))
        },
        get transports() {
          return [...KD]
        },
        unpause: () => {
          zD.debug("Unpausing transports"), null === cD || void 0 === cD || cD.start(), wD.paused = !1
        }
      }
    }

    function aK(DD, zD) {
      if (zD.preserveOriginalError)
        for (const wD of DD) "exception" === wD.type && delete wD.payload.originalError;
      return DD
    }
    let uK = qz;

    function vK(DD) {
      var zD;
      return uK = null !== (zD = DD.unpatchedConsole) && void 0 !== zD ? zD : uK, uK
    }
    let tK, FK = az;

    function YK(DD, zD) {
      return FK = TK(DD, zD.internalLoggerLevel), FK
    }

    function HK(DD) {
      let {
        internalLogger: zD,
        config: wD,
        metas: pD,
        transports: sD,
        tracesApi: KD,
        userActionsApi: rD
      } = DD;
      var LD;
      zD.debug("Initializing exceptions API");
      let cD = null;
      tK = null !== (LD = wD.parseStacktrace) && void 0 !== LD ? LD : tK;
      const gD = DD => {
          zD.debug("Changing stacktrace parser"), tK = null !== DD && void 0 !== DD ? DD : tK
        },
        {
          ignoreErrors: RD = [],
          preserveOriginalError: AD
        } = wD;
      return gD(wD.parseStacktrace), {
        changeStacktraceParser: gD,
        getStacktraceParser: () => tK,
        pushError: function(DD) {
          let {
            skipDedupe: LD,
            stackFrames: gD,
            type: UD,
            context: fD,
            spanContext: ID,
            timestampOverwriteMs: BD,
            originalError: GD,
            fingerprint: hD,
            fatal: nD
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(DD, zD) {
              const {
                message: wD,
                name: pD,
                stack: sD
              } = zD;
              return KD = DD, rD = wD + " " + pD + " " + sD, KD.some((DD => ED(DD) ? rD.includes(DD) : !!rD.match(DD)));
              var KD, rD
            }(RD, null !== GD && void 0 !== GD ? GD : DD)) try {
            var MD, OD;
            if (!yz(pD).shouldCapture()) return;
            const RD = lz(Hz(Hz({}, function(DD) {
                let zD = DD.cause;
                WD(zD) ? zD = DD.cause.toString() : null !== zD && (CD(DD.cause) || TD(DD.cause)) ? zD = iz(DD.cause) : null != zD && (zD = DD.cause.toString());
                return null == zD ? {} : {
                  cause: zD
                }
              }(null !== GD && void 0 !== GD ? GD : DD)), null !== fD && void 0 !== fD ? fD : {})),
              ED = Hz(Hz(Hz(Hz({
                type: UD || DD.name || "Error",
                value: DD.message,
                timestamp: BD ? Bz(BD) : Iz(),
                trace: ID ? {
                  trace_id: ID.traceId,
                  span_id: ID.spanId
                } : KD.getTraceContext()
              }, uD(RD) ? {} : {
                context: RD
              }), AD ? {
                originalError: GD
              } : {}), hD ? {
                fingerprint: hD
              } : {}), void 0 !== nD ? {
                fatal: nD
              } : {});
            gD = null !== (MD = gD) && void 0 !== MD ? MD : DD.stack ? null === tK || void 0 === tK ? void 0 : tK(DD).frames : void 0, (null === gD || void 0 === gD ? void 0 : gD.length) && (ED.stacktrace = {
              frames: gD
            });
            const QD = {
              type: ED.type,
              value: ED.value,
              stacktrace: ED.stacktrace,
              context: ED.context,
              fingerprint: ED.fingerprint,
              fatal: null !== (OD = ED.fatal) && void 0 !== OD && OD
            };
            if (!LD && wD.dedupe && !JD(cD) && nz(QD, cD)) return void zD.debug("Skipping error push because it is the same as the last one\n", ED);
            const XD = cD,
              VD = yK(pD);
            if (cD !== XD && !LD && wD.dedupe && nz(QD, cD)) return;
            cD = QD;
            const PD = {
              meta: VD,
              payload: ED,
              type: "exception"
            };
            zD.debug("Pushing exception\n", PD), Vs(rD.getActiveUserAction(), PD) || sD.execute(PD)
          } catch (QD) {
            zD.error("Error pushing event", QD)
          }
        }
      }
    }

    function qK(DD, zD, wD, pD, sD) {
      zD.debug("Initializing API");
      let KD = null;
      const rD = function(DD) {
          let {
            transports: zD,
            internalLogger: wD,
            config: pD,
            pushEvent: sD
          } = DD;
          var KD;
          const rD = null === (KD = pD.userActionsInstrumentation) || void 0 === KD ? void 0 : KD.excludeItem;
          let LD;
          const cD = () => LD;
          return {
            startUserAction: (DD, pD, KD) => {
              if (void 0 === cD()) {
                const wD = new Qs({
                  name: DD,
                  transports: zD,
                  attributes: pD,
                  trigger: (null === KD || void 0 === KD ? void 0 : KD.triggerName) || "faroApiCall",
                  importance: (null === KD || void 0 === KD ? void 0 : KD.importance) || Os.Normal,
                  trackUserActionsExcludeItem: rD,
                  pushEvent: sD
                });
                return wD.filter((DD => [3, 2].includes(DD))).first().subscribe((() => {
                  LD = void 0
                })), Xs.notify({
                  type: Ms,
                  userAction: wD,
                  initialActivityTimeout: null === KD || void 0 === KD ? void 0 : KD.initialActivityTimeout
                }), LD = wD, LD
              }
              wD.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: cD
          }
        }({
          transports: sD,
          config: wD,
          internalLogger: zD,
          pushEvent: (DD, wD, pD, sD) => {
            KD ? KD(DD, wD, pD, sD) : zD.warn("pushEventImpl is not initialized. Event dropped:", {
              name: DD,
              attributes: wD,
              domain: pD,
              options: sD
            })
          }
        }),
        LD = function(DD, zD, wD, pD, sD) {
          let KD;
          return zD.debug("Initializing traces API"), {
            getOTEL: () => KD,
            getTraceContext: () => {
              const DD = null === KD || void 0 === KD ? void 0 : KD.trace.getSpanContext(KD.context.active());
              return DD ? {
                trace_id: DD.traceId,
                span_id: DD.spanId
              } : void 0
            },
            initOTEL: (DD, wD) => {
              zD.debug("Initializing OpenTelemetry"), KD = {
                trace: DD,
                context: wD
              }
            },
            isOTELInitialized: () => !!KD,
            pushTraces: DD => {
              try {
                if (!yz(pD).shouldCapture()) return;
                const wD = {
                  type: "trace",
                  payload: DD,
                  meta: yK(pD)
                };
                zD.debug("Pushing trace\n", wD), sD.execute(wD)
              } catch (wD) {
                zD.error("Error pushing trace\n", wD)
              }
            }
          }
        }(0, zD, 0, pD, sD),
        cD = {
          unpatchedConsole: DD,
          internalLogger: zD,
          userActionsApi: rD,
          config: wD,
          metas: pD,
          transports: sD,
          tracesApi: LD
        },
        gD = function(DD) {
          let {
            internalLogger: zD,
            config: wD,
            metas: pD,
            transports: sD,
            tracesApi: KD,
            userActionsApi: rD
          } = DD, LD = null;
          return {
            pushEvent: function(DD, cD, gD) {
              let {
                skipDedupe: RD,
                spanContext: AD,
                timestampOverwriteMs: UD,
                customPayloadTransformer: fD = DD => DD
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!yz(pD).shouldCapture()) return;
                const ID = lz(cD),
                  BD = fD({
                    name: DD,
                    domain: null !== gD && void 0 !== gD ? gD : wD.eventDomain,
                    attributes: uD(ID) ? void 0 : ID,
                    timestamp: UD ? Bz(UD) : Iz(),
                    trace: AD ? {
                      trace_id: AD.traceId,
                      span_id: AD.spanId
                    } : KD.getTraceContext()
                  }),
                  GD = {
                    name: BD.name,
                    attributes: BD.attributes,
                    domain: BD.domain
                  };
                if (!RD && wD.dedupe && !JD(LD) && nz(GD, LD)) return void zD.debug("Skipping event push because it is the same as the last one\n", BD);
                const hD = LD,
                  nD = yK(pD);
                if (LD !== hD && !RD && wD.dedupe && nz(GD, LD)) return;
                LD = GD;
                const MD = {
                  meta: nD,
                  payload: BD,
                  type: "event"
                };
                zD.debug("Pushing event\n", MD), Vs(rD.getActiveUserAction(), MD) || sD.execute(MD)
              } catch (ID) {
                zD.error("Error pushing event", ID)
              }
            }
          }
        }(cD);
      return KD = gD.pushEvent, Hz(Hz(Hz(Hz(Hz(Hz(Hz({}, LD), HK(cD)), function(DD) {
        let zD, wD, pD, sD, {
          internalLogger: KD,
          metas: rD
        } = DD;
        KD.debug("Initializing meta API");
        const LD = DD => {
            wD && rD.remove(wD), wD = {
              user: DD
            }, rD.add(wD)
          },
          cD = (DD, wD) => {
            var pD;
            const sD = null === wD || void 0 === wD ? void 0 : wD.overrides,
              KD = sD ? {
                overrides: Hz(Hz({}, null === zD || void 0 === zD || null === (pD = zD.session) || void 0 === pD ? void 0 : pD.overrides), sD)
              } : {};
            zD && rD.remove(zD), zD = {
              session: Hz(Hz({}, uD(DD) ? void 0 : DD), KD)
            }, rD.add(zD)
          },
          gD = (DD, zD) => {
            yz(rD).notifySessionUpdate({
              type: "replace",
              session: DD,
              overrides: null === zD || void 0 === zD ? void 0 : zD.overrides
            }), cD(DD, zD)
          },
          RD = () => rD.value.session,
          AD = () => rD.value.page;
        return {
          setUser: LD,
          resetUser: LD,
          setSession: gD,
          resetSession: gD,
          getSession: RD,
          setView: (DD, zD) => {
            var wD;
            if ((null === zD || void 0 === zD ? void 0 : zD.overrides) && (yz(rD).notifySessionUpdate({
                type: "overrides",
                overrides: zD.overrides
              }), cD(RD(), {
                overrides: zD.overrides
              })), (null === pD || void 0 === pD || null === (wD = pD.view) || void 0 === wD ? void 0 : wD.name) === (null === DD || void 0 === DD ? void 0 : DD.name)) return;
            const sD = pD;
            pD = {
              view: DD
            }, rD.add(pD), sD && rD.remove(sD)
          },
          getView: () => rD.value.view,
          setPage: DD => {
            var zD;
            const wD = ED(DD) ? Hz(Hz({}, null !== (zD = null === sD || void 0 === sD ? void 0 : sD.page) && void 0 !== zD ? zD : AD()), {}, {
              id: DD
            }) : DD;
            sD && rD.remove(sD), sD = {
              page: wD
            }, rD.add(sD)
          },
          getPage: AD
        }
      }(cD)), function(DD) {
        let {
          internalLogger: zD,
          config: wD,
          metas: pD,
          transports: sD,
          tracesApi: KD,
          userActionsApi: rD
        } = DD;
        var LD;
        zD.debug("Initializing logs API");
        let cD = null;
        const gD = null !== (LD = wD.logArgsSerializer) && void 0 !== LD ? LD : jw;
        return {
          pushLog: function(DD) {
            let {
              context: LD,
              level: RD,
              skipDedupe: AD,
              spanContext: UD,
              timestampOverwriteMs: fD
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!yz(pD).shouldCapture()) return;
              const ID = lz(LD),
                BD = {
                  message: gD(DD),
                  level: null !== RD && void 0 !== RD ? RD : "log",
                  context: uD(ID) ? void 0 : ID,
                  timestamp: fD ? Bz(fD) : Iz(),
                  trace: UD ? {
                    trace_id: UD.traceId,
                    span_id: UD.spanId
                  } : KD.getTraceContext()
                },
                GD = {
                  message: BD.message,
                  level: BD.level,
                  context: BD.context
                };
              if (!AD && wD.dedupe && !JD(cD) && nz(GD, cD)) return void zD.debug("Skipping log push because it is the same as the last one\n", BD);
              const hD = cD,
                nD = yK(pD);
              if (cD !== hD && !AD && wD.dedupe && nz(GD, cD)) return;
              cD = GD;
              const MD = {
                type: "log",
                payload: BD,
                meta: nD
              };
              zD.debug("Pushing log\n", MD), Vs(rD.getActiveUserAction(), MD) || sD.execute(MD)
            } catch (ID) {
              zD.error("Error pushing log\n", ID)
            }
          }
        }
      }(cD)), function(DD) {
        let {
          internalLogger: zD,
          config: wD,
          metas: pD,
          transports: sD,
          tracesApi: KD,
          userActionsApi: rD
        } = DD;
        zD.debug("Initializing measurements API");
        let LD = null;
        return {
          pushMeasurement: function(DD) {
            let {
              skipDedupe: cD,
              context: gD,
              spanContext: RD,
              timestampOverwriteMs: AD
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!yz(pD).shouldCapture()) return;
              const UD = lz(gD),
                fD = Hz(Hz({}, DD), {}, {
                  trace: RD ? {
                    trace_id: RD.traceId,
                    span_id: RD.spanId
                  } : KD.getTraceContext(),
                  timestamp: AD ? Bz(AD) : Iz(),
                  context: uD(UD) ? void 0 : UD
                }),
                ID = {
                  type: fD.type,
                  values: fD.values,
                  context: fD.context
                };
              if (!cD && wD.dedupe && !JD(LD) && nz(ID, LD)) return void zD.debug("Skipping measurement push because it is the same as the last one\n", fD);
              const BD = LD,
                GD = yK(pD);
              if (LD !== BD && !cD && wD.dedupe && nz(ID, LD)) return;
              LD = ID;
              const hD = {
                type: "measurement",
                payload: fD,
                meta: GD
              };
              zD.debug("Pushing measurement\n", hD), Vs(rD.getActiveUserAction(), hD) || sD.execute(hD)
            } catch (UD) {
              zD.error("Error pushing measurement\n", UD)
            }
          }
        }
      }(cD)), gD), rD)
    }

    function Dr(DD) {
      const zD = vK(DD),
        wD = YK(zD, DD);
      if (ID() && !DD.isolate) return void wD.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      wD.debug("Initializing");
      const pD = function(DD, zD) {
          let wD, pD = [],
            sD = [],
            KD = [],
            rD = 0,
            LD = 0;
          const cD = () => pD.reduce(((DD, zD) => Object.assign(DD, xD(zD) ? zD() : zD)), {}),
            gD = () => {
              if (sD.length) {
                const DD = cD();
                sD.forEach((zD => zD(DD)))
              }
            };
          return {
            add: function() {
              for (var DD = arguments.length, wD = new Array(DD), sD = 0; sD < DD; sD++) wD[sD] = arguments[sD];
              zD.debug("Adding metas\n", wD), pD.push(...wD), gD()
            },
            remove: function() {
              for (var DD = arguments.length, wD = new Array(DD), sD = 0; sD < DD; sD++) wD[sD] = arguments[sD];
              zD.debug("Removing metas\n", wD), pD = pD.filter((DD => !wD.includes(DD))), gD()
            },
            addListener: DD => {
              zD.debug("Adding metas listener\n", DD), sD.push(DD)
            },
            removeListener: DD => {
              zD.debug("Removing metas listener\n", DD), sD = sD.filter((zD => zD !== DD))
            },
            capture: DD => {
              var zD;
              const pD = void 0 !== wD,
                sD = null !== (zD = wD) && void 0 !== zD ? zD : KD;
              pD || (wD = sD, rD = 0, LD = sD.length);
              try {
                for (; rD < LD;) {
                  const DD = sD[rD++];
                  null === DD || void 0 === DD || DD()
                }
                const zD = ZK(cD());
                return null === DD || void 0 === DD || DD(), zD
              } finally {
                pD || (wD = void 0)
              }
            },
            addCaptureListener: DD => {
              KD.push(DD)
            },
            removeCaptureListener: DD => {
              KD = KD.filter((zD => zD !== DD))
            },
            get value() {
              return cD()
            }
          }
        }(0, wD),
        sD = oK(zD, wD, DD, pD),
        KD = qK(zD, wD, DD, pD, sD),
        rD = function(DD, zD, wD, pD, sD, KD) {
          zD.debug("Initializing instrumentations");
          const rD = [];
          return {
            add: function() {
              zD.debug("Adding instrumentations");
              for (var LD = arguments.length, cD = new Array(LD), gD = 0; gD < LD; gD++) cD[gD] = arguments[gD];
              cD.forEach((LD => {
                zD.debug(`Adding "${LD.name}" instrumentation`), rD.some((DD => DD.name === LD.name)) ? zD.warn(`Instrumentation ${LD.name} is already added`) : (LD.unpatchedConsole = DD, LD.internalLogger = zD, LD.config = wD, LD.metas = pD, LD.transports = sD, LD.api = KD, rD.push(LD), LD.initialize())
              }))
            },
            get instrumentations() {
              return [...rD]
            },
            remove: function() {
              zD.debug("Removing instrumentations");
              for (var DD = arguments.length, wD = new Array(DD), pD = 0; pD < DD; pD++) wD[pD] = arguments[pD];
              wD.forEach((DD => {
                var wD, pD;
                zD.debug(`Removing "${DD.name}" instrumentation`);
                const sD = rD.reduce(((zD, wD, pD) => null === zD && wD.name === DD.name ? pD : null), null);
                null !== sD ? (null === (wD = (pD = rD[sD]).destroy) || void 0 === wD || wD.call(pD), rD.splice(sD, 1)) : zD.warn(`Instrumentation "${DD.name}" is not added`)
              }))
            }
          }
        }(zD, wD, DD, pD, sD, KD),
        LD = GD(zD, wD, DD, pD, sD, KD, rD);
      return mK(LD),
        function(DD) {
          DD.transports.add(...DD.config.transports), DD.transports.addBeforeSendHooks(DD.config.beforeSend)
        }(LD),
        function(DD) {
          DD.instrumentations.add(...DD.config.instrumentations)
        }(LD), LD
    }

    function zr(DD) {
      const zD = SK(DD);
      if (zD) return Dr(zD)
    }
  },
  6731: function(DD, zD, wD) {
    var pD;
    ! function(sD, KD) {
      var rD = "function",
        LD = "undefined",
        cD = "object",
        gD = "string",
        RD = "major",
        AD = "model",
        UD = "name",
        fD = "type",
        ID = "vendor",
        BD = "version",
        GD = "architecture",
        hD = "console",
        nD = "mobile",
        MD = "tablet",
        OD = "smarttv",
        JD = "wearable",
        ED = "embedded",
        QD = "Amazon",
        XD = "Apple",
        VD = "ASUS",
        PD = "BlackBerry",
        CD = "Browser",
        xD = "Chrome",
        TD = "Firefox",
        bD = "Google",
        jD = "Honor",
        dD = "Huawei",
        SD = "LG",
        iD = "Microsoft",
        lD = "Motorola",
        WD = "Nvidia",
        ND = "OnePlus",
        ZD = "Opera",
        yD = "OPPO",
        kD = "Samsung",
        mD = "Sharp",
        eD = "Sony",
        oD = "Xiaomi",
        aD = "Zebra",
        uD = "Facebook",
        vD = "Chromium OS",
        tD = "Mac OS",
        FD = " Browser",
        YD = function(DD) {
          for (var zD = {}, wD = 0; wD < DD.length; wD++) zD[DD[wD].toUpperCase()] = DD[wD];
          return zD
        },
        HD = function(DD, zD) {
          return typeof DD === gD && -1 !== qD(zD).indexOf(qD(DD))
        },
        qD = function(DD) {
          return DD.toLowerCase()
        },
        Dz = function(DD, zD) {
          if (typeof DD === gD) return DD = DD.replace(/^\s\s*/, ""), typeof zD === LD ? DD : DD.substring(0, 500)
        },
        zz = function(DD, zD) {
          for (var wD, pD, sD, LD, gD, RD, AD = 0; AD < zD.length && !gD;) {
            var UD = zD[AD],
              fD = zD[AD + 1];
            for (wD = pD = 0; wD < UD.length && !gD && UD[wD];)
              if (gD = UD[wD++].exec(DD))
                for (sD = 0; sD < fD.length; sD++) RD = gD[++pD], typeof(LD = fD[sD]) === cD && LD.length > 0 ? 2 === LD.length ? typeof LD[1] == rD ? this[LD[0]] = LD[1].call(this, RD) : this[LD[0]] = LD[1] : 3 === LD.length ? typeof LD[1] !== rD || LD[1].exec && LD[1].test ? this[LD[0]] = RD ? RD.replace(LD[1], LD[2]) : KD : this[LD[0]] = RD ? LD[1].call(this, RD, LD[2]) : KD : 4 === LD.length && (this[LD[0]] = RD ? LD[3].call(this, RD.replace(LD[1], LD[2])) : KD) : this[LD] = RD || KD;
            AD += 2
          }
        },
        wz = function(DD, zD) {
          for (var wD in zD)
            if (typeof zD[wD] === cD && zD[wD].length > 0) {
              for (var pD = 0; pD < zD[wD].length; pD++)
                if (HD(zD[wD][pD], DD)) return "?" === wD ? KD : wD
            } else if (HD(zD[wD], DD)) return "?" === wD ? KD : wD;
          return zD.hasOwnProperty("*") ? zD["*"] : DD
        },
        pz = {
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
        sz = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [BD, [UD, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [BD, [UD, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [UD, BD],
            [/opios[\/ ]+([\w\.]+)/i],
            [BD, [UD, ZD + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [BD, [UD, ZD + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [BD, [UD, ZD]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [BD, [UD, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [BD, [UD, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [UD, BD],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [BD, [UD, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [BD, [UD, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [BD, [UD, "UC" + CD]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [BD, [UD, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [BD, [UD, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [BD, [UD, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [BD, [UD, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [BD, [UD, "Smart Lenovo " + CD]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [UD, /(.+)/, "$1 Secure " + CD], BD
            ],
            [/\bfocus\/([\w\.]+)/i],
            [BD, [UD, TD + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [BD, [UD, ZD + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [BD, [UD, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [BD, [UD, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [BD, [UD, ZD + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [BD, [UD, "MIUI" + FD]],
            [/fxios\/([\w\.-]+)/i],
            [BD, [UD, TD]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [BD, [UD, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [UD, /(.+)/, "$1Browser"], BD
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [UD, /(.+)/, "$1" + FD], BD
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [BD, [UD, kD + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [BD, [UD, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [UD, "Sogou Mobile"], BD
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [UD, BD],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [UD],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [BD, UD],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [UD, uD], BD
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [UD, BD],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [BD, [UD, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [BD, [UD, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [BD, [UD, xD + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [UD, xD + " WebView"], BD
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [BD, [UD, "Android " + CD]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [UD, BD],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [BD, [UD, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [BD, UD],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [UD, [BD, wz, {
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
            [UD, BD],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [UD, "Netscape"], BD
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [UD, BD],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [BD, [UD, TD + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [UD, [BD, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [UD, [BD, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [GD, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [GD, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [GD, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [GD, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [GD, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [GD, /ower/, "", qD]
            ],
            [/ sun4\w[;\)]/i],
            [
              [GD, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [GD, qD]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [AD, [ID, kD],
              [fD, MD]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [AD, [ID, kD],
              [fD, nD]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [AD, [ID, XD],
              [fD, nD]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [AD, [ID, XD],
              [fD, MD]
            ],
            [/(macintosh);/i],
            [AD, [ID, XD]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [AD, [ID, mD],
              [fD, nD]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [AD, [ID, jD],
              [fD, MD]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [AD, [ID, jD],
              [fD, nD]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [AD, [ID, dD],
              [fD, MD]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [AD, [ID, dD],
              [fD, nD]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [AD, /_/g, " "],
              [ID, oD],
              [fD, MD]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [AD, /_/g, " "],
              [ID, oD],
              [fD, nD]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [AD, [ID, yD],
              [fD, nD]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [AD, [ID, wz, {
                OnePlus: ["304", "403", "203"],
                "*": yD
              }],
              [fD, MD]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [AD, [ID, "Vivo"],
              [fD, nD]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [AD, [ID, "Realme"],
              [fD, nD]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [AD, [ID, lD],
              [fD, nD]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [AD, [ID, lD],
              [fD, MD]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [AD, [ID, SD],
              [fD, MD]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [AD, [ID, SD],
              [fD, nD]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [AD, [ID, "Lenovo"],
              [fD, MD]
            ],
            [/(nokia) (t[12][01])/i],
            [ID, AD, [fD, MD]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [AD, /_/g, " "],
              [fD, nD],
              [ID, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [AD, [ID, bD],
              [fD, MD]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [AD, [ID, bD],
              [fD, nD]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [AD, [ID, eD],
              [fD, nD]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [AD, "Xperia Tablet"],
              [ID, eD],
              [fD, MD]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [AD, [ID, ND],
              [fD, nD]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [AD, [ID, QD],
              [fD, MD]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [AD, /(.+)/g, "Fire Phone $1"],
              [ID, QD],
              [fD, nD]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [AD, ID, [fD, MD]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [AD, [ID, PD],
              [fD, nD]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [AD, [ID, VD],
              [fD, MD]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [AD, [ID, VD],
              [fD, nD]
            ],
            [/(nexus 9)/i],
            [AD, [ID, "HTC"],
              [fD, MD]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [ID, [AD, /_/g, " "],
              [fD, nD]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [AD, [ID, "TCL"],
              [fD, MD]
            ],
            [/(itel) ((\w+))/i],
            [
              [ID, qD], AD, [fD, wz, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [AD, [ID, "Acer"],
              [fD, MD]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [AD, [ID, "Meizu"],
              [fD, nD]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [AD, [ID, "Ulefone"],
              [fD, nD]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [AD, [ID, "Energizer"],
              [fD, nD]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [AD, [ID, "Cat"],
              [fD, nD]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [AD, [ID, "Smartfren"],
              [fD, nD]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [AD, [ID, "Nothing"],
              [fD, nD]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [AD, [ID, "Archos"],
              [fD, MD]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [AD, [ID, "Archos"],
              [fD, nD]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [ID, AD, [fD, MD]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [ID, AD, [fD, nD]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [ID, AD, [fD, MD]],
            [/(surface duo)/i],
            [AD, [ID, iD],
              [fD, MD]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [AD, [ID, "Fairphone"],
              [fD, nD]
            ],
            [/(u304aa)/i],
            [AD, [ID, "AT&T"],
              [fD, nD]
            ],
            [/\bsie-(\w*)/i],
            [AD, [ID, "Siemens"],
              [fD, nD]
            ],
            [/\b(rct\w+) b/i],
            [AD, [ID, "RCA"],
              [fD, MD]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [AD, [ID, "Dell"],
              [fD, MD]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [AD, [ID, "Verizon"],
              [fD, MD]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [AD, [ID, "Barnes & Noble"],
              [fD, MD]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [AD, [ID, "NuVision"],
              [fD, MD]
            ],
            [/\b(k88) b/i],
            [AD, [ID, "ZTE"],
              [fD, MD]
            ],
            [/\b(nx\d{3}j) b/i],
            [AD, [ID, "ZTE"],
              [fD, nD]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [AD, [ID, "Swiss"],
              [fD, nD]
            ],
            [/\b(zur\d{3}) b/i],
            [AD, [ID, "Swiss"],
              [fD, MD]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [AD, [ID, "Zeki"],
              [fD, MD]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [ID, "Dragon Touch"], AD, [fD, MD]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [AD, [ID, "Insignia"],
              [fD, MD]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [AD, [ID, "NextBook"],
              [fD, MD]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [ID, "Voice"], AD, [fD, nD]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [ID, "LvTel"], AD, [fD, nD]
            ],
            [/\b(ph-1) /i],
            [AD, [ID, "Essential"],
              [fD, nD]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [AD, [ID, "Envizen"],
              [fD, MD]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [AD, [ID, "MachSpeed"],
              [fD, MD]
            ],
            [/\btu_(1491) b/i],
            [AD, [ID, "Rotor"],
              [fD, MD]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [AD, [ID, WD],
              [fD, MD]
            ],
            [/(sprint) (\w+)/i],
            [ID, AD, [fD, nD]],
            [/(kin\.[onetw]{3})/i],
            [
              [AD, /\./g, " "],
              [ID, iD],
              [fD, nD]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [AD, [ID, aD],
              [fD, MD]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [AD, [ID, aD],
              [fD, nD]
            ],
            [/smart-tv.+(samsung)/i],
            [ID, [fD, OD]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [AD, /^/, "SmartTV"],
              [ID, kD],
              [fD, OD]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [ID, SD],
              [fD, OD]
            ],
            [/(apple) ?tv/i],
            [ID, [AD, XD + " TV"],
              [fD, OD]
            ],
            [/crkey/i],
            [
              [AD, xD + "cast"],
              [ID, bD],
              [fD, OD]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [AD, [ID, QD],
              [fD, OD]
            ],
            [/(shield \w+ tv)/i],
            [AD, [ID, WD],
              [fD, OD]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [AD, [ID, mD],
              [fD, OD]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [AD, [ID, eD],
              [fD, OD]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [AD, [ID, oD],
              [fD, OD]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [ID, AD, [fD, OD]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [ID, Dz],
              [AD, Dz],
              [fD, OD]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [AD, [fD, OD]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [fD, OD]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [ID, AD, [fD, hD]],
            [/droid.+; (shield)( bui|\))/i],
            [AD, [ID, WD],
              [fD, hD]
            ],
            [/(playstation \w+)/i],
            [AD, [ID, eD],
              [fD, hD]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [AD, [ID, iD],
              [fD, hD]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [AD, [ID, kD],
              [fD, JD]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [ID, AD, [fD, JD]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [AD, [ID, yD],
              [fD, JD]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [AD, [ID, XD],
              [fD, JD]
            ],
            [/(opwwe\d{3})/i],
            [AD, [ID, ND],
              [fD, JD]
            ],
            [/(moto 360)/i],
            [AD, [ID, lD],
              [fD, JD]
            ],
            [/(smartwatch 3)/i],
            [AD, [ID, eD],
              [fD, JD]
            ],
            [/(g watch r)/i],
            [AD, [ID, SD],
              [fD, JD]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [AD, [ID, aD],
              [fD, JD]
            ],
            [/droid.+; (glass) \d/i],
            [AD, [ID, bD],
              [fD, JD]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [ID, AD, [fD, JD]],
            [/; (quest( \d| pro)?)/i],
            [AD, [ID, uD],
              [fD, JD]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [ID, [fD, ED]],
            [/(aeobc)\b/i],
            [AD, [ID, QD],
              [fD, ED]
            ],
            [/(homepod).+mac os/i],
            [AD, [ID, XD],
              [fD, ED]
            ],
            [/windows iot/i],
            [
              [fD, ED]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [AD, [fD, nD]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [AD, [fD, MD]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [fD, MD]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [fD, nD]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [AD, [ID, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [BD, [UD, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [UD, BD],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [BD, [UD, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [UD, BD],
            [/ladybird\//i],
            [
              [UD, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [BD, UD]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [UD, BD],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [UD, [BD, wz, pz]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [BD, wz, pz],
              [UD, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [BD, /_/g, "."],
              [UD, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [UD, tD],
              [BD, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [BD, UD],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [UD, /(.+)/, "$1 Touch"], BD
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [UD, BD],
            [/\(bb(10);/i],
            [BD, [UD, PD]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [BD, [UD, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [BD, [UD, TD + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [BD, [UD, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [BD, [UD, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [BD, [UD, xD + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [UD, vD], BD
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [UD, BD],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [UD, "Solaris"], BD
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [UD, BD]
          ]
        },
        Kz = function(DD, zD) {
          if (typeof DD === cD && (zD = DD, DD = KD), !(this instanceof Kz)) return new Kz(DD, zD).getResult();
          var wD = typeof sD !== LD && sD.navigator ? sD.navigator : KD,
            pD = DD || (wD && wD.userAgent ? wD.userAgent : ""),
            hD = wD && wD.userAgentData ? wD.userAgentData : KD,
            OD = zD ? function(DD, zD) {
              var wD = {};
              for (var pD in DD) zD[pD] && zD[pD].length % 2 === 0 ? wD[pD] = zD[pD].concat(DD[pD]) : wD[pD] = DD[pD];
              return wD
            }(sz, zD) : sz,
            JD = wD && wD.userAgent == pD;
          return this.getBrowser = function() {
            var DD, zD = {};
            return zD[UD] = KD, zD[BD] = KD, zz.call(zD, pD, OD.browser), zD[RD] = typeof(DD = zD[BD]) === gD ? DD.replace(/[^\d\.]/g, "").split(".")[0] : KD, JD && wD && wD.brave && typeof wD.brave.isBrave == rD && (zD[UD] = "Brave"), zD
          }, this.getCPU = function() {
            var DD = {};
            return DD[GD] = KD, zz.call(DD, pD, OD.cpu), DD
          }, this.getDevice = function() {
            var DD = {};
            return DD[ID] = KD, DD[AD] = KD, DD[fD] = KD, zz.call(DD, pD, OD.device), JD && !DD[fD] && hD && hD.mobile && (DD[fD] = nD), JD && "Macintosh" == DD[AD] && wD && typeof wD.standalone !== LD && wD.maxTouchPoints && wD.maxTouchPoints > 2 && (DD[AD] = "iPad", DD[fD] = MD), DD
          }, this.iI = function() {
            var DD = {};
            return DD[UD] = KD, DD[BD] = KD, zz.call(DD, pD, OD.engine), DD
          }, this.getOS = function() {
            var DD = {};
            return DD[UD] = KD, DD[BD] = KD, zz.call(DD, pD, OD.os), JD && !DD[UD] && hD && hD.platform && "Unknown" != hD.platform && (DD[UD] = hD.platform.replace(/chrome os/i, vD).replace(/macos/i, tD)), DD
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.iI(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return pD
          }, this.setUA = function(DD) {
            return pD = typeof DD === gD && DD.length > 500 ? Dz(DD, 500) : DD, this
          }, this.setUA(pD), this
        };
      Kz.VERSION = "1.0.41", Kz.BROWSER = YD([UD, BD, RD]), Kz.CPU = YD([GD]), Kz.DEVICE = YD([AD, ID, fD, hD, nD, OD, MD, JD, ED]), Kz.ENGINE = Kz.OS = YD([UD, BD]), typeof zD !== LD ? (DD.exports && (zD = DD.exports = Kz), zD.UAParser = Kz) : wD.amdO ? (pD = function() {
        return Kz
      }.call(zD, wD, zD, DD)) === KD || (DD.exports = pD) : typeof sD !== LD && (sD.UAParser = Kz);
      var rz = typeof sD !== LD && (sD.jQuery || sD.Zepto);
      if (rz && !rz.ua) {
        var Lz = new Kz;
        rz.ua = Lz.getResult(), rz.ua.get = function() {
          return Lz.getUA()
        }, rz.ua.set = function(DD) {
          Lz.setUA(DD);
          var zD = Lz.getResult();
          for (var wD in zD) rz.ua[wD] = zD[wD]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);