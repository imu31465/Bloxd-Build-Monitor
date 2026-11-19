export const id = 31;
export const ids = [31];
export const modules = {
  6452: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BaseExtension: () => Dc,
      BaseInstrumentation: () => Cc,
      BaseTransport: () => Ap,
      CSPInstrumentation: () => Pp,
      ConsoleInstrumentation: () => ac,
      ConsoleTransport: () => Ii,
      EVENT_CLICK: () => gC,
      EVENT_NAVIGATION: () => XC,
      EVENT_ROUTE_CHANGE: () => UC,
      EVENT_SESSION_EXTEND: () => PC,
      EVENT_SESSION_RESUME: () => OC,
      EVENT_SESSION_START: () => nC,
      EVENT_VIEW_CHANGED: () => mC,
      ErrorsInstrumentation: () => zc,
      FetchTransport: () => ni,
      InternalLoggerLevel: () => WC,
      LogLevel: () => gc,
      MAX_SESSION_PERSISTENCE_TIME: () => QD,
      NavigationInstrumentation: () => Rp,
      Observable: () => Nc,
      PerformanceInstrumentation: () => EI,
      PersistentSessionsManager: () => LC,
      SESSION_EXPIRATION_TIME: () => iD,
      SESSION_INACTIVITY_TIME: () => fD,
      STORAGE_KEY: () => pD,
      SessionInstrumentation: () => Ic,
      TransportItemType: () => Fp,
      UserActionInstrumentation: () => Op,
      UserActionState: () => tp,
      VERSION: () => cc,
      ViewInstrumentation: () => lc,
      VolatileSessionsManager: () => TC,
      WebVitalsInstrumentation: () => VI,
      allLogLevels: () => mc,
      browserMeta: () => Ep,
      buildStackFrame: () => pc,
      captureMetas: () => Ti,
      createInternalLogger: () => xi,
      createPromiseBuffer: () => ti,
      createSession: () => hp,
      deepEqual: () => NC,
      defaultEventDomain: () => ID,
      defaultExceptionType: () => Hc,
      defaultGlobalObjectKey: () => qi,
      defaultInternalLoggerLevel: () => EC,
      defaultLogLevel: () => Xc,
      faro: () => ZD,
      genShortID: () => vC,
      getCurrentTimestamp: () => tC,
      getDataFromSafariExtensions: () => yc,
      getIgnoreUrls: () => eD,
      getInternalFaroFromGlobalObject: () => yD,
      getStackFramesFromError: () => tc,
      getTransportBody: () => ci,
      getUrlFromResource: () => hD,
      getWebInstrumentations: () => kp,
      globalObject: () => SD,
      initializeFaro: () => Df,
      internalGlobalObjectKey: () => BD,
      isArray: () => JD,
      isBoolean: () => HD,
      isDomError: () => GD,
      isDomException: () => RD,
      isElement: () => dD,
      isElementDefined: () => kD,
      xt: () => ED,
      isError: () => LD,
      isErrorDefined: () => lD,
      isErrorEvent: () => TD,
      isEvent: () => jD,
      isEventDefined: () => zD,
      isFunction: () => qD,
      isInstanceOf: () => gD,
      isInt: () => PD,
      isInternalFaroOnGlobalObject: () => tD,
      isMap: () => WD,
      isMapDefined: () => YD,
      isNull: () => mD,
      isNumber: () => OD,
      isObject: () => xD,
      isPrimitive: () => VD,
      isRegExp: () => KD,
      isString: () => nD,
      isSymbol: () => UD,
      isSyntheticEvent: () => sD,
      isThenable: () => aD,
      isToString: () => ND,
      isTypeof: () => vD,
      isUndefined: () => XD,
      makeCoreConfig: () => ai,
      noop: () => YC,
      osMeta: () => ep,
      parseStacktrace: () => Zc,
      sdkMeta: () => rp,
      setInternalFaroOnGlobalObject: () => MD,
      transportItemTypeToBodyKey: () => Di,
      unknownString: () => jc,
      userActionDataAttribute: () => eI,
      userActionTimeoutDataAttribute: () => uI
    });
    const ID = "browser",
      pD = "com.grafana.faro.session",
      iD = 144e5,
      fD = 9e5,
      bD = 1e3,
      QD = fD,
      wD = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: QD
      };
    const SD = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof cD.g ? cD.g : "undefined" !== typeof self ? self : void 0;
    const BD = "_faroInternal";

    function yD() {
      return SD[BD]
    }

    function MD(DD) {
      DD.config.isolate ? DD.internalLogger.debug("Skipping registering internal Faro instance on global object") : (DD.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(SD, BD, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: DD
      }))
    }

    function tD() {
      return BD in SD
    }
    let ZD = {
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

    function oD(DD, CD, cD, ID, pD, iD, fD) {
      return CD.debug("Initializing Faro"), ZD = {
          api: iD,
          config: cD,
          instrumentations: fD,
          internalLogger: CD,
          metas: ID,
          pause: pD.pause,
          transports: pD,
          unpatchedConsole: DD,
          unpause: pD.unpause
        }, MD(ZD),
        function(DD) {
          if (DD.config.preventGlobalExposure) DD.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (DD.internalLogger.debug(`Registering public faro reference in the global scope using "${DD.config.globalObjectKey}" key`), DD.config.globalObjectKey in SD) return void DD.internalLogger.warn(`Skipping global registration due to key "${DD.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(SD, DD.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: DD
            })
          }
        }(ZD), ZD
    }

    function vD(DD, CD) {
      return typeof DD === CD
    }

    function ND(DD, CD) {
      return Object.prototype.toString.call(DD) === `[object ${CD}]`
    }

    function gD(DD, CD) {
      try {
        return DD instanceof CD
      } catch (cD) {
        return !1
      }
    }
    const XD = DD => vD(DD, "undefined"),
      mD = DD => vD(DD, "null"),
      nD = DD => vD(DD, "string"),
      OD = DD => vD(DD, "number") && !isNaN(DD) || vD(DD, "bigint"),
      PD = DD => OD(DD) && Number.isInteger(DD),
      HD = DD => vD(DD, "boolean"),
      UD = DD => vD(DD, "symbol"),
      xD = DD => !mD(DD) && vD(DD, "object"),
      qD = DD => vD(DD, "function"),
      JD = DD => ND(DD, "Array"),
      KD = DD => ND(DD, "RegExp"),
      aD = DD => qD(null === DD || void 0 === DD ? void 0 : DD.then),
      VD = DD => !xD(DD) && !qD(DD),
      zD = "undefined" !== typeof Event,
      jD = DD => zD && gD(DD, Event),
      lD = "undefined" !== typeof Error,
      LD = DD => lD && gD(DD, Error),
      TD = DD => ND(DD, "ErrorEvent"),
      GD = DD => ND(DD, "DOMError"),
      RD = DD => ND(DD, "DOMException"),
      kD = "undefined" !== typeof Element,
      dD = DD => kD && gD(DD, Element),
      YD = "undefined" !== typeof Map,
      WD = DD => YD && gD(DD, Map),
      sD = DD => xD(DD) && "nativeEvent" in DD && "preventDefault" in DD && "stopPropagation" in DD;

    function ED(DD) {
      return null == DD || (JD(DD) || nD(DD) ? 0 === DD.length : !!xD(DD) && 0 === Object.keys(DD).length)
    }

    function eD() {
      return ZD.transports.transports.flatMap((DD => DD.getIgnoreUrls()))
    }

    function uD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return eD().some((CD => DD && null != DD.match(CD)))
    }

    function hD(DD) {
      return nD(DD) ? DD : DD instanceof URL ? DD.href : !ED(DD) && qD(null === DD || void 0 === DD ? void 0 : DD.toString) ? DD.toString() : void 0
    }
    const rD = "sessionStorage",
      AD = "localStorage";

    function FD(DD) {
      try {
        let CD;
        CD = window[DD];
        const cD = "__faro_storage_test__";
        return CD.setItem(cD, cD), CD.removeItem(cD), !0
      } catch (cD) {
        var CD;
        return null === (CD = ZD.internalLogger) || void 0 === CD || CD.info(`Web storage of type ${DD} is not available. Reason: ${cD}`), !1
      }
    }

    function DC(DD, CD) {
      return iC(CD) ? window[CD].getItem(DD) : null
    }

    function CC(DD, CD, cD) {
      if (iC(cD)) try {
        window[cD].setItem(DD, CD)
      } catch (ID) {}
    }

    function cC(DD, CD) {
      iC(CD) && window[CD].removeItem(DD)
    }
    const IC = FD(AD),
      pC = FD(rD);

    function iC(DD) {
      return DD === AD ? IC : DD === rD && pC
    }

    function fC(DD) {
      return fC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, fC(DD)
    }

    function bC(DD) {
      var CD = function(DD, CD) {
        if ("object" != fC(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != fC(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == fC(CD) ? CD : CD + ""
    }

    function QC(DD, CD, cD) {
      return (CD = bC(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function wC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function SC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? wC(Object(cD), !0).forEach((function(CD) {
          QC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : wC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function BC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZD;
      var CD, cD, ID;
      const pD = DD.config.sessionTracking,
        iD = null !== (CD = null !== (cD = null === pD || void 0 === pD || null === (ID = pD.sampler) || void 0 === ID ? void 0 : ID.call(pD, {
          metas: DD.metas.value
        })) && void 0 !== cD ? cD : null === pD || void 0 === pD ? void 0 : pD.samplingRate) && void 0 !== CD ? CD : 1,
        fD = "number" === typeof iD ? function(DD) {
          return Math.min(1, Math.max(0, DD))
        }(iD) : 0;
      if (!(fD > 0)) return !1;
      if (1 === fD) return !0;
      try {
        const DD = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === DD || void 0 === DD ? void 0 : DD.getRandomValues)) {
          const CD = new Uint32Array(1);
          return DD.getRandomValues(CD), CD[0] / Math.pow(2, 32) < fD
        }
      } catch (bD) {}
      return Math.random() < fD
    }

    function yC() {
      return Date.now()
    }

    function MC() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function tC() {
      return (new Date).toISOString()
    }

    function ZC(DD) {
      return new Date(DD).toISOString()
    }
    const oC = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function vC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const CD = new Uint32Array(DD),
        cD = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === cD || void 0 === cD ? void 0 : cD.getRandomValues) cD.getRandomValues(CD);
      else
        for (let pD = 0; pD < DD; pD++) CD[pD] = Math.floor(4294967296 * Math.random());
      let ID = "";
      for (let pD = 0; pD < DD; pD++) ID += oC[CD[pD] % 59];
      return ID
    }

    function NC(DD, CD) {
      if (DD === CD) return !0;
      if (vD(DD, "number") && isNaN(DD)) return vD(CD, "number") && isNaN(CD);
      const cD = JD(DD),
        ID = JD(CD);
      if (cD !== ID) return !1;
      if (cD && ID) {
        const cD = DD.length;
        if (cD !== CD.length) return !1;
        for (let ID = cD; 0 !== ID--;)
          if (!NC(DD[ID], CD[ID])) return !1;
        return !0
      }
      const pD = xD(DD),
        iD = xD(CD);
      if (pD !== iD) return !1;
      if (DD && CD && pD && iD) {
        const cD = Object.keys(DD),
          ID = Object.keys(CD);
        if (cD.length !== ID.length) return !1;
        for (let DD of cD)
          if (!ID.includes(DD)) return !1;
        for (let pD of cD)
          if (!NC(DD[pD], CD[pD])) return !1;
        return !0
      }
      return !1
    }
    const gC = "click",
      XC = "navigation",
      mC = "view_changed",
      nC = "session_start",
      OC = "session_resume",
      PC = "session_extend",
      HC = "service_name_override",
      UC = "route_change";

    function xC() {
      let {
        sessionId: DD,
        started: CD,
        lastActivity: cD,
        isSampled: ID = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZD;
      var iD;
      const fD = yC(),
        bD = null === (iD = pD.config) || void 0 === iD || null === (iD = iD.sessionTracking) || void 0 === iD ? void 0 : iD.generateSessionId;
      return null == DD && (DD = "function" === typeof bD ? bD() : vC()), {
        sessionId: DD,
        lastActivity: null !== cD && void 0 !== cD ? cD : fD,
        started: null !== CD && void 0 !== CD ? CD : fD,
        isSampled: ID
      }
    }

    function qC(DD) {
      if (null == DD) return !1;
      const CD = yC();
      return CD - DD.started < 144e5 && CD - DD.lastActivity < fD
    }

    function JC(DD) {
      let {
        fetchUserSession: CD,
        storeUserSession: cD,
        adoptSession: ID,
        updateInterval: pD = 0
      } = DD, bD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZD, QD = 0;
      return function() {
        let {
          forceSessionExtend: DD = !1,
          refreshActivity: wD = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var SD, BD;
        if (!CD || !cD) return;
        const yD = yC();
        if (!DD && yD < QD && QD - yD <= pD) return;
        const MD = bD.config.sessionTracking,
          tD = null === MD || void 0 === MD ? void 0 : MD.persistent;
        if (tD && !IC || !tD && !pC) return;
        const ZD = CD();
        if (QD = Math.min(yD + pD, (null !== (SD = null === ZD || void 0 === ZD ? void 0 : ZD.started) && void 0 !== SD ? SD : yD) + iD, (null !== (BD = null === ZD || void 0 === ZD ? void 0 : ZD.lastActivity) && void 0 !== BD ? BD : yD) + fD), !1 === DD && qC(ZD)) {
          var oD;
          wD && cD(SC(SC({}, ZD), {}, {
            lastActivity: yD
          }));
          const DD = null === (oD = bD.metas.value.session) || void 0 === oD ? void 0 : oD.id;
          null != ID && null != ZD.sessionMeta && ZD.sessionId !== DD && ID(ZD.sessionMeta)
        } else {
          var vD, ND, gD;
          let DD = aC(xC({
            isSampled: BC(bD)
          }, bD), ZD, bD);
          QD = yD + pD, cD(DD), null === (vD = bD.api) || void 0 === vD || vD.setSession(DD.sessionMeta), null === MD || void 0 === MD || null === (ND = MD.onSessionChange) || void 0 === ND || ND.call(MD, null !== (gD = null === ZD || void 0 === ZD ? void 0 : ZD.sessionMeta) && void 0 !== gD ? gD : null, DD.sessionMeta)
        }
      }
    }

    function KC(DD) {
      let CD, {
          fetchUserSession: cD,
          storeUserSession: ID,
          updateInterval: pD = 0
        } = DD,
        iD = 0;
      return DD => {
        const fD = yC();
        if (DD === CD && fD < iD && iD - fD <= pD) return;
        CD = DD, iD = fD + pD;
        const bD = cD();
        (null === bD || void 0 === bD ? void 0 : bD.sessionId) === DD && qC(bD) && ID(SC(SC({}, bD), {}, {
          lastActivity: fD
        }))
      }
    }

    function aC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZD;
      var ID, pD, iD, fD, bD, QD;
      const wD = SC(SC({}, DD), {}, {
          sessionMeta: {
            id: DD.sessionId,
            attributes: zC(SC(SC(SC({}, null === (ID = cD.config.sessionTracking) || void 0 === ID || null === (ID = ID.session) || void 0 === ID ? void 0 : ID.attributes), null !== (pD = null === (iD = cD.metas.value.session) || void 0 === iD ? void 0 : iD.attributes) && void 0 !== pD ? pD : {}), {}, {
              isSampled: DD.isSampled.toString()
            }))
          }
        }),
        SD = null !== (fD = null === (bD = cD.metas.value.session) || void 0 === bD ? void 0 : bD.overrides) && void 0 !== fD ? fD : null === CD || void 0 === CD || null === (QD = CD.sessionMeta) || void 0 === QD ? void 0 : QD.overrides;
      ED(SD) || (wD.sessionMeta.overrides = SD);
      const BD = null === CD || void 0 === CD ? void 0 : CD.sessionId;
      return null != BD && (wD.sessionMeta.attributes.previousSession = BD), wD
    }

    function VC(DD) {
      let {
        fetchUserSession: CD,
        storeUserSession: cD
      } = DD, ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZD, pD = !1;
      return function(DD) {
        if (pD) return;
        const iD = DD.session,
          fD = CD();
        let bD = null === iD || void 0 === iD ? void 0 : iD.id;
        const QD = null === iD || void 0 === iD ? void 0 : iD.attributes,
          wD = null === iD || void 0 === iD ? void 0 : iD.overrides,
          SD = null === fD || void 0 === fD ? void 0 : fD.sessionMeta,
          BD = null === SD || void 0 === SD ? void 0 : SD.overrides,
          yD = !!wD && !NC(wD, BD),
          MD = !!QD && !NC(QD, null === SD || void 0 === SD ? void 0 : SD.attributes);
        if (iD && bD !== (null === fD || void 0 === fD ? void 0 : fD.sessionId) || MD || yD) {
          var tD, ZD;
          const DD = null != fD && bD === fD.sessionId,
            CD = aC(DD ? fD : xC({
              sessionId: bD,
              isSampled: BC(ID)
            }, ID), fD, ID),
            iD = null === fD || void 0 === fD || null === (tD = fD.sessionMeta) || void 0 === tD || null === (tD = tD.attributes) || void 0 === tD ? void 0 : tD.previousSession;
          DD && null != iD && iD !== CD.sessionId && (CD.sessionMeta.attributes.previousSession = iD), (null === (ZD = CD.sessionMeta.attributes) || void 0 === ZD ? void 0 : ZD.previousSession) === CD.sessionId && delete CD.sessionMeta.attributes.previousSession, cD(CD),
            function(DD, CD) {
              let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var pD, iD, fD;
              if (!CD) return;
              const bD = cD.serviceName,
                QD = null !== (pD = null !== (iD = ID.serviceName) && void 0 !== iD ? iD : null === (fD = DD.metas.value.app) || void 0 === fD ? void 0 : fD.name) && void 0 !== pD ? pD : "";
              bD && bD !== QD && DD.api.pushEvent(HC, {
                serviceName: bD,
                previousServiceName: QD
              })
            }(ID, yD, wD, BD), pD = !0;
          try {
            ID.api.setSession(CD.sessionMeta)
          } finally {
            pD = !1
          }
        }
      }
    }

    function zC(DD) {
      const CD = {};
      for (const cD of Object.keys(DD)) {
        const ID = DD[cD];
        void 0 !== ID && (CD[cD] = ID)
      }
      return CD
    }

    function jC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== DD && void 0 !== DD ? DD : {}, function() {
        const DD = new WeakSet;
        return function(CD, cD) {
          if (xD(cD) && null !== cD) {
            if (DD.has(cD)) return null;
            DD.add(cD)
          }
          return cD
        }
      }())
    }

    function lC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const CD = {};
      for (const [cD, ID] of Object.entries(DD)) CD[cD] = xD(ID) && null !== ID ? jC(ID) : String(ID);
      return CD
    }
    var LC = class DD {
      constructor() {
        var CD = this;
        let cD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZD;
        this.context = cD, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = DD => {
          this.adopting = !0;
          try {
            var CD;
            null === (CD = this.context.api) || void 0 === CD || CD.setSession(DD)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: DD = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return CD.updateUserSession({
            refreshActivity: DD
          })
        }, this.recordActivity = KC({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          updateInterval: bD
        }), this.updateUserSession = JC({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: bD
        }, cD), this.init()
      }
      static removeUserSession() {
        cC(pD, DD.storageTypeLocal)
      }
      static storeUserSession(CD) {
        CC(pD, jC(CD), DD.storageTypeLocal)
      }
      static fetchUserSession() {
        const CD = DC(pD, DD.storageTypeLocal);
        return CD ? JSON.parse(CD) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var DD;
            this.updateSession({
              refreshActivity: !1
            });
            const CD = null === (DD = this.context.api) || void 0 === DD || null === (DD = DD.getSession()) || void 0 === DD ? void 0 : DD.id;
            CD && this.recordActivity(CD)
          }
        })), this.context.metas.addListener(VC({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession
        }, this.context))
      }
    };
    LC.storageTypeLocal = AD;
    var TC = class DD {
      constructor() {
        var CD = this;
        let cD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZD;
        this.context = cD, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: DD = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return CD.updateUserSession({
            refreshActivity: DD
          })
        }, this.recordActivity = KC({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          updateInterval: bD
        }), this.updateUserSession = JC({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession,
          updateInterval: bD
        }, cD), this.init()
      }
      static removeUserSession() {
        cC(pD, DD.storageTypeSession)
      }
      static storeUserSession(CD) {
        CC(pD, jC(CD), DD.storageTypeSession)
      }
      static fetchUserSession() {
        const CD = DC(pD, DD.storageTypeSession);
        return CD ? JSON.parse(CD) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var DD;
            this.updateSession({
              refreshActivity: !1
            });
            const CD = null === (DD = this.context.api) || void 0 === DD || null === (DD = DD.getSession()) || void 0 === DD ? void 0 : DD.id;
            CD && this.recordActivity(CD)
          }
        })), this.context.metas.addListener(VC({
          fetchUserSession: DD.fetchUserSession,
          storeUserSession: DD.storeUserSession
        }, this.context))
      }
    };
    TC.storageTypeSession = rD;
    const GC = new WeakMap;

    function RC(DD) {
      let CD = GC.get(DD);
      if (!CD) {
        let cD = [],
          ID = [];
        CD = {
          addSessionUpdateListener: DD => {
            cD.push(DD)
          },
          removeSessionUpdateListener: DD => {
            cD = cD.filter((CD => CD !== DD))
          },
          notifySessionUpdate: DD => {
            cD.forEach((CD => CD(DD)))
          },
          shouldCapture: () => ID.every((DD => DD())),
          addCaptureFilter: DD => {
            ID.push(DD)
          },
          removeCaptureFilter: DD => {
            ID = ID.filter((CD => CD !== DD))
          }
        }, GC.set(DD, CD)
      }
      return CD
    }
    var kC = class {
      constructor(DD, CD, cD) {
        this.metas = DD, this.transports = CD, this.onActivate = cD, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = DD => {
          var CD, cD, ID;
          const pD = this.pending;
          var iD, fD;
          if ("overrides" === DD.type) return void(this.pending = {
            reset: null !== (iD = null === pD || void 0 === pD ? void 0 : pD.reset) && void 0 !== iD && iD,
            inheritOverrides: null === (fD = null === pD || void 0 === pD ? void 0 : pD.inheritOverrides) || void 0 === fD || fD,
            session: SC(SC({}, null === pD || void 0 === pD ? void 0 : pD.session), {}, {
              overrides: SC(SC({}, null === pD || void 0 === pD ? void 0 : pD.session.overrides), DD.overrides)
            })
          });
          const bD = DD.session,
            QD = ED(bD) || null != bD && "id" in bD && !bD.id,
            wD = null !== (CD = null === bD || void 0 === bD ? void 0 : bD.overrides) && void 0 !== CD ? CD : null === pD || void 0 === pD ? void 0 : pD.session.overrides;
          this.pending = {
            reset: QD || !(null === bD || void 0 === bD ? void 0 : bD.id) && null !== (cD = null === pD || void 0 === pD ? void 0 : pD.reset) && void 0 !== cD && cD,
            inheritOverrides: !(!DD.overrides && void 0 !== (null === bD || void 0 === bD ? void 0 : bD.overrides)) && (null === (ID = null === pD || void 0 === pD ? void 0 : pD.inheritOverrides) || void 0 === ID || ID),
            session: {
              id: null === bD || void 0 === bD ? void 0 : bD.id,
              attributes: (null === bD || void 0 === bD ? void 0 : bD.attributes) && SC({}, bD.attributes),
              overrides: DD.overrides ? SC(SC({}, null === pD || void 0 === pD ? void 0 : pD.session.overrides), DD.overrides) : wD && SC({}, wD)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var DD, CD;
        this.waiting = !0, RC(this.metas).addSessionUpdateListener(this.recordUpdate), RC(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (DD = (CD = this.metas).addCaptureListener) || void 0 === DD || DD.call(CD, this.activate), this.activate()
      }
      destroy() {
        var DD, CD;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), RC(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (DD = (CD = this.metas).removeCaptureListener) || void 0 === DD || DD.call(CD, this.activate), RC(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function dC(DD) {
      return (null === DD || void 0 === DD ? void 0 : DD.persistent) ? LC : TC
    }

    function YC() {}
    let WC = function(DD) {
      return DD[DD.OFF = 0] = "OFF", DD[DD.ERROR = 1] = "ERROR", DD[DD.WARN = 2] = "WARN", DD[DD.INFO = 3] = "INFO", DD[DD.VERBOSE = 4] = "VERBOSE", DD
    }({});
    const sC = {
        debug: YC,
        error: YC,
        info: YC,
        prefix: "Faro",
        warn: YC
      },
      EC = 1;

    function eC(DD) {
      return eC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, eC(DD)
    }

    function uC(DD) {
      var CD = function(DD, CD) {
        if ("object" != eC(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != eC(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == eC(CD) ? CD : CD + ""
    }

    function hC(DD, CD, cD) {
      return (CD = uC(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function rC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function AC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? rC(Object(cD), !0).forEach((function(CD) {
          hC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : rC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }
    const FC = AC({}, console);
    var Dc = class {
        constructor() {
          this.unpatchedConsole = FC, this.internalLogger = sC, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
          this.internalLogger.debug(`${this.name}\n`, ...CD)
        }
        logInfo() {
          for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
          this.internalLogger.info(`${this.name}\n`, ...CD)
        }
        logWarn() {
          for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
          this.internalLogger.warn(`${this.name}\n`, ...CD)
        }
        logError() {
          for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
          this.internalLogger.error(`${this.name}\n`, ...CD)
        }
      },
      Cc = class extends Dc {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const cc = "2.12.1";
    var Ic = class extends Cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = cc, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(DD) {
        var CD;
        const cD = DD.session;
        if (cD && cD.id !== (null === (CD = this.notifiedSession) || void 0 === CD ? void 0 : CD.id)) {
          var ID;
          if (this.isAdoptingSession()) return void(this.notifiedSession = cD);
          if (this.notifiedSession && this.notifiedSession.id === (null === (ID = cD.attributes) || void 0 === ID ? void 0 : ID.previousSession)) return this.api.pushEvent(PC, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = cD);
          this.notifiedSession = cD, this.api.pushEvent(nC, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(DD, CD, cD) {
        const ID = null === cD || void 0 === cD ? void 0 : cD.session;
        let pD, iD, fD = DD.fetchUserSession();
        if (CD.persistent && CD.maxSessionPersistenceTime && fD) {
          const DD = yC();
          fD.lastActivity < DD - CD.maxSessionPersistenceTime && (LC.removeUserSession(), fD = null)
        }
        const bD = qC(fD);
        if ((null === cD || void 0 === cD ? void 0 : cD.reset) || !bD || (null === ID || void 0 === ID ? void 0 : ID.id) && ID.id !== (null === fD || void 0 === fD ? void 0 : fD.sessionId)) {
          var QD, wD, SD, BD, yD, MD;
          iD = xC({
            sessionId: (null === cD || void 0 === cD ? void 0 : cD.reset) ? void 0 : null !== (QD = null === ID || void 0 === ID ? void 0 : ID.id) && void 0 !== QD ? QD : null === (wD = CD.session) || void 0 === wD ? void 0 : wD.id,
            isSampled: BC(this)
          }, this);
          const DD = iD.sessionId,
            tD = cD && bD ? null === fD || void 0 === fD || null === (SD = fD.sessionMeta) || void 0 === SD ? void 0 : SD.overrides : void 0,
            ZD = tD ? SC(SC({}, null === (BD = CD.session) || void 0 === BD ? void 0 : BD.overrides), tD) : null === (yD = CD.session) || void 0 === yD ? void 0 : yD.overrides;
          iD.sessionMeta = SC({
            id: DD,
            attributes: SC({
              isSampled: iD.isSampled.toString()
            }, null === (MD = CD.session) || void 0 === MD ? void 0 : MD.attributes)
          }, ZD ? {
            overrides: ZD
          } : {}), pD = nC
        } else {
          var tD, ZD;
          const DD = null === fD || void 0 === fD ? void 0 : fD.sessionId;
          iD = xC({
            sessionId: DD,
            isSampled: fD.isSampled || !1,
            started: null === fD || void 0 === fD ? void 0 : fD.started
          }, this);
          const cD = null === fD || void 0 === fD ? void 0 : fD.sessionMeta,
            ID = SC(SC({}, null === (tD = CD.session) || void 0 === tD ? void 0 : tD.overrides), null === cD || void 0 === cD ? void 0 : cD.overrides);
          iD.sessionMeta = SC(SC({}, CD.session), {}, {
            id: DD,
            attributes: SC(SC(SC({}, null === (ZD = CD.session) || void 0 === ZD ? void 0 : ZD.attributes), null === cD || void 0 === cD ? void 0 : cD.attributes), {}, {
              isSampled: iD.isSampled.toString()
            }),
            overrides: ID
          }), pD = OC
        }
        var oD;
        if (ID && (iD.sessionMeta = SC(SC({}, iD.sessionMeta), {}, {
            attributes: SC(SC(SC({}, null === (oD = iD.sessionMeta) || void 0 === oD ? void 0 : oD.attributes), ID.attributes), {}, {
              isSampled: iD.isSampled.toString()
            })
          }), ID.overrides)) {
          const DD = (null === cD || void 0 === cD ? void 0 : cD.inheritOverrides) ? SC(SC({}, iD.sessionMeta.overrides), ID.overrides) : ID.overrides;
          Object.keys(DD).length > 0 ? iD.sessionMeta.overrides = DD : delete iD.sessionMeta.overrides
        }
        return {
          initialSession: iD,
          lifecycleType: pD
        }
      }
      registerBeforeSendHook(DD) {
        var CD;
        this.beforeSendHook = CD => {
          var cD, ID;
          const pD = null === (cD = CD.meta.session) || void 0 === cD ? void 0 : cD.id;
          pD && !this.transports.isPaused() && DD(pD);
          const iD = null === (ID = CD.meta.session) || void 0 === ID ? void 0 : ID.attributes;
          if (iD && "true" === (null === iD || void 0 === iD ? void 0 : iD.isSampled)) {
            var fD;
            let DD = JSON.parse(JSON.stringify(CD));
            const cD = null === (fD = DD.meta.session) || void 0 === fD ? void 0 : fD.attributes;
            var bD;
            if (null === cD || void 0 === cD || delete cD.isSampled, 0 === Object.keys(null !== cD && void 0 !== cD ? cD : {}).length) null === (bD = DD.meta.session) || void 0 === bD || delete bD.attributes;
            return DD
          }
          return null
        }, null === (CD = this.transports) || void 0 === CD || CD.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var DD;
        this.logDebug("init session instrumentation");
        const CD = document.prerendering;
        var cD;
        if ((null === (DD = this.config.sessionTracking) || void 0 === DD ? void 0 : DD.enabled) && (CD || this.prerenderSession)) return null !== (cD = this.prerenderSession) && void 0 !== cD || (this.prerenderSession = new kC(this.metas, this.transports, (DD => {
          this.prerenderSession = void 0, this.initializeSession(DD)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(DD) {
        const CD = this.config.sessionTracking;
        if (null === CD || void 0 === CD ? void 0 : CD.enabled) {
          var cD, ID;
          const pD = dC(CD),
            iD = new pD(this);
          this.isAdoptingSession = iD.isAdopting, this.registerBeforeSendHook(iD.recordActivity);
          const {
            initialSession: fD,
            lifecycleType: bD
          } = this.createInitialSession(pD, CD, DD);
          pD.storeUserSession(fD);
          const QD = fD.sessionMeta;
          this.notifiedSession = QD, this.api.setSession(QD), this.captureListener = () => {
            this.transports.isPaused() || iD.updateSession({
              refreshActivity: !1
            })
          }, null === (cD = (ID = this.metas).addCaptureListener) || void 0 === cD || cD.call(ID, this.captureListener), bD === nC && this.api.pushEvent(nC, {}, void 0, {
            skipDedupe: !0
          }), bD === OC && this.api.pushEvent(OC, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var DD, CD, cD;
        (null === (DD = this.prerenderSession) || void 0 === DD || DD.destroy(), this.captureListener) && (null === (CD = (cD = this.metas).removeCaptureListener) || void 0 === CD || CD.call(cD, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function pc(DD, CD, cD, ID) {
      const pD = {
        filename: DD || document.location.href,
        function: CD || "?"
      };
      return void 0 !== cD && (pD.lineno = cD), void 0 !== ID && (pD.colno = ID), pD
    }
    const ic = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      fc = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      bc = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Qc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      wc = "safari-extension",
      Sc = "safari-web-extension",
      Bc = /Minified React error #\d+;/i;

    function yc(DD, CD) {
      const cD = null === DD || void 0 === DD ? void 0 : DD.includes(wc),
        ID = !cD && (null === DD || void 0 === DD ? void 0 : DD.includes("safari-web-extension"));
      return cD || ID ? [(null === DD || void 0 === DD ? void 0 : DD.includes("@")) ? DD.split("@")[0] : DD, cD ? `${wc}:${CD}` : `${Sc}:${CD}`] : [DD, CD]
    }
    const Mc = 1024;

    function tc(DD) {
      let CD = [];
      DD.stacktrace ? CD = DD.stacktrace.split("\n").filter(((DD, CD) => CD % 2 === 0)) : DD.stack && (CD = DD.stack.split("\n"));
      const cD = CD.reduce(((CD, cD, ID) => {
        if (cD.length > Mc) return CD;
        let pD, iD, fD, bD, QD;
        if (pD = ic.exec(cD)) {
          if (iD = pD[1], fD = pD[2], bD = pD[3], QD = pD[4], null === fD || void 0 === fD ? void 0 : fD.startsWith("eval")) {
            const DD = fc.exec(fD);
            DD && (fD = DD[1], bD = DD[2], QD = DD[3])
          }
          fD = (null === fD || void 0 === fD ? void 0 : fD.startsWith("address at ")) ? fD.substring(11) : fD, [iD, fD] = yc(iD, fD)
        } else if (pD = bc.exec(cD)) {
          if (iD = pD[1], fD = pD[3], bD = pD[4], QD = pD[5], fD && fD.includes(" > eval")) {
            const DD = Qc.exec(fD);
            DD && (iD = iD || "eval", fD = DD[1], bD = DD[2])
          } else 0 === ID && !QD && OD(DD.columnNumber) && (QD = String(DD.columnNumber + 1));
          [iD, fD] = yc(iD, fD)
        }
        return (fD || iD) && CD.push(pc(fD, iD, bD ? Number(bD) : void 0, QD ? Number(QD) : void 0)), CD
      }), []);
      return Bc.test(DD.message) ? cD.slice(1) : cD
    }

    function Zc(DD) {
      return {
        frames: tc(DD)
      }
    }
    const oc = "http-request-start",
      vc = "http-request-end";
    var Nc = class DD {
      constructor() {
        this.subscribers = []
      }
      subscribe(DD) {
        return this.subscribers.push(DD), {
          unsubscribe: () => this.unsubscribe(DD)
        }
      }
      unsubscribe(DD) {
        this.subscribers = this.subscribers.filter((CD => CD !== DD))
      }
      notify(DD) {
        this.subscribers.forEach((CD => CD(DD)))
      }
      first() {
        const CD = new DD,
          cD = DD => {
            CD.notify(DD), ID.unsubscribe()
          },
          ID = this.subscribe(cD),
          pD = CD.unsubscribe.bind(CD);
        return this.withUnsubscribeOverride(CD, pD, cD)
      }
      takeWhile(CD) {
        const cD = new DD,
          ID = DD => {
            CD(DD) ? cD.notify(DD) : cD.unsubscribe(ID)
          };
        this.subscribe(ID);
        const pD = cD.unsubscribe.bind(cD);
        return this.withUnsubscribeOverride(cD, pD, ID)
      }
      filter(CD) {
        const cD = new DD,
          ID = DD => {
            CD(DD) && cD.notify(DD)
          };
        this.subscribe(ID);
        const pD = cD.unsubscribe.bind(cD);
        return this.withUnsubscribeOverride(cD, pD, ID)
      }
      merge() {
        const CD = new DD,
          cD = [];
        for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
        pD.forEach((DD => {
          const ID = DD.subscribe((DD => {
            CD.notify(DD)
          }));
          cD.push(ID)
        }));
        const fD = CD.unsubscribeAll.bind(CD);
        return CD.unsubscribe = () => {
          cD.forEach((DD => DD.unsubscribe())), fD()
        }, CD
      }
      withUnsubscribeOverride(DD, CD, cD) {
        return DD.unsubscribe = DD => {
          CD(DD), this.unsubscribe(cD)
        }, DD
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let gc = function(DD) {
      return DD.TRACE = "trace", DD.DEBUG = "debug", DD.INFO = "info", DD.LOG = "log", DD.WARN = "warn", DD.ERROR = "error", DD
    }({});
    const Xc = "log",
      mc = ["trace", "debug", "info", "log", "warn", "error"];
    let nc, Oc = !1;
    const Pc = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Hc = "Error",
      Uc = DD => DD.map((DD => xD(DD) ? jC(DD) : String(DD))).join(" ");

    function xc(DD) {
      let CD, cD, ID, pD, iD = [];
      if (TD(DD) && DD.error) CD = DD.error.message, cD = DD.error.name, iD = tc(DD.error);
      else if ((ID = GD(DD)) || RD(DD)) {
        const {
          name: pD,
          message: iD
        } = DD;
        cD = null !== pD && void 0 !== pD ? pD : ID ? "DOMError" : "DOMException", CD = iD ? `${cD}: ${iD}` : cD
      } else LD(DD) ? (cD = DD.name, CD = DD.message, iD = tc(DD)) : (xD(DD) || (pD = jD(DD))) && (cD = pD ? DD.constructor.name : void 0, CD = `Non-Error exception captured with keys: ${Object.keys(DD)}`);
      return [CD, cD, iD]
    }

    function qc(DD) {
      const [CD, cD, ID, pD, iD] = DD;
      let fD, bD, QD = [];
      const wD = nD(CD),
        SD = pc(cD, "?", ID, pD);
      return iD || !wD ? ([fD, bD, QD] = xc(null !== iD && void 0 !== iD ? iD : CD), 0 === QD.length && (QD = [SD])) : wD && ([fD, bD] = function(DD) {
        var CD, cD;
        const ID = DD.match(Pc),
          pD = null !== (CD = null === ID || void 0 === ID ? void 0 : ID[1]) && void 0 !== CD ? CD : Hc;
        return [null !== (cD = null === ID || void 0 === ID ? void 0 : ID[2]) && void 0 !== cD ? cD : DD, pD]
      }(CD), QD = [SD]), {
        value: fD,
        type: bD,
        stackFrames: QD
      }
    }

    function Jc(DD, CD) {
      return LD(DD[0]) ? qc(DD) : {
        value: CD(DD)
      }
    }
    const Kc = DD => DD.map((DD => {
      try {
        return String(DD)
      } catch (CD) {
        return ""
      }
    })).join(" ");
    var ac = class DD extends Cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = cc, this.errorSerializer = Kc
      }
      initialize() {
        var CD, cD;
        const ID = this.config.consoleInstrumentation,
          pD = (null === ID || void 0 === ID ? void 0 : ID.serializeErrors) || !!(null === ID || void 0 === ID ? void 0 : ID.errorSerializer);
        this.errorSerializer = pD ? null !== (CD = null === ID || void 0 === ID ? void 0 : ID.errorSerializer) && void 0 !== CD ? CD : Uc : Kc;
        const iD = null !== (cD = null === ID || void 0 === ID ? void 0 : ID.disabledLevels) && void 0 !== cD ? cD : DD.defaultDisabledLevels,
          fD = function(DD) {
            if (nc || (nc = new Nc), !Oc) {
              const CD = null !== DD && void 0 !== DD ? DD : FC;
              mc.forEach((DD => {
                console[DD] = function() {
                  for (var cD, ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
                  nc.notify({
                    type: "console",
                    level: DD,
                    args: pD
                  }), null === (cD = CD[DD]) || void 0 === cD || cD.apply(console, pD)
                }
              })), Oc = !0
            }
            return nc
          }(this.unpatchedConsole);
        this.subscription = fD.subscribe((CD => {
          let {
            level: cD,
            args: pD
          } = CD;
          if (!iD.includes(cD)) try {
            if (cD !== gc.ERROR || (null === ID || void 0 === ID ? void 0 : ID.consoleErrorAsLog))
              if (cD === gc.ERROR && (null === ID || void 0 === ID ? void 0 : ID.consoleErrorAsLog)) {
                const {
                  value: CD,
                  type: ID,
                  stackFrames: iD
                } = Jc(pD, this.errorSerializer);
                this.api.pushLog(CD ? [DD.consoleErrorPrefix + CD] : pD, {
                  level: cD,
                  context: {
                    value: null !== CD && void 0 !== CD ? CD : "",
                    type: null !== ID && void 0 !== ID ? ID : "",
                    stackFrames: (null === iD || void 0 === iD ? void 0 : iD.length) ? Uc(iD) : ""
                  }
                })
              } else this.api.pushLog(pD, {
                level: cD
              });
            else {
              const {
                value: CD,
                type: cD,
                stackFrames: ID
              } = Jc(pD, this.errorSerializer);
              if (CD && !cD && !ID) return void this.api.pushError(new Error(DD.consoleErrorPrefix + CD));
              this.api.pushError(new Error(DD.consoleErrorPrefix + CD), {
                type: cD,
                stackFrames: ID
              })
            }
          } catch (fD) {
            this.logError(fD)
          }
        }))
      }
      destroy() {
        var DD;
        null === (DD = this.subscription) || void 0 === DD || DD.unsubscribe(), this.subscription = void 0
      }
    };
    ac.defaultDisabledLevels = [gc.DEBUG, gc.TRACE, gc.LOG], ac.consoleErrorPrefix = "console.error: ";
    const Vc = [];
    var zc = class extends Cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = cc
      }
      initialize() {
        this.logDebug("Initializing"),
          function(DD) {
            const CD = window.onerror;
            window.onerror = function() {
              for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
              try {
                const {
                  value: CD,
                  type: cD,
                  stackFrames: pD
                } = qc(ID), iD = ID[4];
                if (CD) {
                  const ID = {
                    type: cD,
                    stackFrames: pD
                  };
                  null != iD && (ID.originalError = iD), DD.pushError(new Error(CD), ID)
                }
              } finally {
                null === CD || void 0 === CD || CD.apply(window, ID)
              }
            }
          }(this.api),
          function(DD) {
            const CD = CD => {
              var cD;
              let ID, pD, iD = CD;
              if (iD.reason) iD = CD.reason;
              else if (null === (cD = CD.detail) || void 0 === cD ? void 0 : cD.reason) {
                var fD;
                iD = null === (fD = CD.detail) || void 0 === fD ? void 0 : fD.reason
              }
              let bD = [];
              VD(iD) ? (ID = `Non-Error promise rejection captured with value: ${String(iD)}`, pD = "UnhandledRejection") : [ID, pD, bD] = xc(iD), ID && DD.pushError(new Error(ID), {
                type: pD,
                stackFrames: bD
              })
            };
            window.addEventListener("unhandledrejection", CD), Vc.push(CD)
          }(this.api)
      }
    };
    const jc = "unknown";
    var lc = class extends Cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = cc, this.waitingForActivation = !1, this.sendViewChangedEvent = DD => {
          var CD;
          if (this.waitingForActivation || document.prerendering) return;
          const cD = DD.view;
          if (cD && cD.name !== (null === (CD = this.notifiedView) || void 0 === CD ? void 0 : CD.name)) {
            var ID, pD, iD;
            const DD = null !== (ID = null === (pD = this.notifiedView) || void 0 === pD ? void 0 : pD.name) && void 0 !== ID ? ID : jc;
            this.notifiedView = cD, this.api.pushEvent(mC, {
              fromView: DD,
              toView: null !== (iD = cD.name) && void 0 !== iD ? iD : jc
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
    class Lc {
      t;
      o = 0;
      i = [];
      l(DD) {
        if (DD.hadRecentInput) return;
        const CD = this.i[0],
          cD = this.i.at(-1);
        this.o && CD && cD && DD.startTime - cD.startTime < 1e3 && DD.startTime - CD.startTime < 5e3 ? (this.o += DD.value, this.i.push(DD)) : (this.o = DD.value, this.i = [DD]), this.t?.(DD)
      }
    }
    const Tc = () => {
        const DD = performance.getEntriesByType("navigation")[0];
        if (DD && DD.responseStart > 0 && DD.responseStart < performance.now()) return DD
      },
      Gc = DD => {
        if ("loading" === document.readyState) return "loading";
        const CD = Tc();
        if (CD) {
          if (DD < CD.domInteractive) return "loading";
          if (0 === CD.domContentLoadedEventStart || DD < CD.domContentLoadedEventStart) return "dom-interactive";
          if (0 === CD.domComplete || DD < CD.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Rc = DD => {
        const CD = DD.nodeName;
        return 1 === DD.nodeType ? CD.toLowerCase() : CD.toUpperCase().replace(/^#/, "")
      },
      kc = DD => {
        let CD = "";
        try {
          for (; 9 !== DD?.nodeType;) {
            const cD = DD,
              ID = cD.id ? "#" + cD.id : [Rc(cD), ...Array.from(cD.classList ?? []).sort()].join(".");
            if (CD.length + ID.length > 99) return CD || ID;
            if (CD = CD ? ID + ">" + CD : ID, cD.id) break;
            DD = cD.parentNode
          }
        } catch {}
        return CD
      },
      dc = new WeakMap;

    function Yc(DD, CD) {
      let cD = dc.get(CD);
      return cD || (cD = new WeakMap, dc.set(CD, cD)), cD.get(DD) || cD.set(DD, new CD), cD.get(DD)
    }
    let Wc = -1;
    const sc = () => Wc,
      Ec = DD => {
        addEventListener("pageshow", (CD => {
          CD.persisted && (Wc = CD.timeStamp, DD(CD))
        }), !0)
      },
      ec = (DD, CD, cD, ID) => {
        let pD, iD;
        return fD => {
          CD.value >= 0 && (fD || ID) && (iD = CD.value - (pD ?? 0), (iD || void 0 === pD) && (pD = CD.value, CD.delta = iD, CD.rating = ((DD, CD) => DD > CD[1] ? "poor" : DD > CD[0] ? "needs-improvement" : "good")(CD.value, cD), DD(CD)))
        }
      },
      uc = DD => {
        requestAnimationFrame((() => requestAnimationFrame((() => DD()))))
      },
      hc = () => Tc()?.activationStart ?? 0;
    let rc = -1;
    const Ac = new Set,
      Fc = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      DI = DD => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === DD.type)
            for (const DD of Ac) DD();
          isFinite(rc) || (rc = "visibilitychange" === DD.type ? DD.timeStamp : 0, removeEventListener("prerenderingchange", DI, !0))
        }
      },
      CI = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (rc = 1 / 0), rc < 0) {
          const DD = hc(),
            CD = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((CD => "hidden" === CD.name && CD.startTime >= DD))?.startTime;
          rc = CD ?? Fc(), addEventListener("visibilitychange", DI, !0), addEventListener("prerenderingchange", DI, !0), Ec((() => {
            setTimeout((() => {
              rc = Fc()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return rc
          },
          onHidden(DD) {
            Ac.add(DD)
          }
        }
      },
      cI = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0,
          fD = arguments.length > 6 ? arguments[6] : void 0;
        const bD = Tc(),
          QD = bD?.navigationId || 0;
        let wD = "navigate";
        return cD ? wD = cD : sc() >= 0 ? wD = "back-forward-cache" : bD && (document.prerendering || hc() > 0 ? wD = "prerender" : document.wasDiscarded ? wD = "restore" : bD.type && (wD = bD.type.replace(/_/g, "-"))), {
          name: DD,
          value: CD,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: wD,
          navigationId: ID || QD,
          navigationInteractionId: pD,
          navigationURL: iD || bD?.name,
          navigationStartTime: fD || 0
        }
      },
      II = function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const ID = DD.filter((DD => PerformanceObserver.supportedEntryTypes.includes(DD)));
          if (ID.length > 0) {
            const DD = new PerformanceObserver((DD => {
              queueMicrotask((() => {
                const cD = DD.getEntries();
                ID.length > 1 && cD.sort(((DD, CD) => DD.startTime + DD.duration - (CD.startTime + CD.duration))), CD(cD)
              }))
            }));
            for (const CD of ID) DD.observe({
              type: CD,
              buffered: !0,
              ...cD
            });
            return DD
          }
        } catch {}
      },
      pI = DD => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && DD && DD.reportSoftNavs,
      iI = (DD, CD) => {
        if (DD.set(CD.navigationId, CD), DD.size > 2) {
          const CD = DD.keys().next().value;
          void 0 !== CD && DD.delete(CD)
        }
      },
      fI = DD => {
        let CD = !1;
        return () => {
          CD || (DD(), CD = !0)
        }
      };
    class bI {
      u
    }
    const QI = DD => {
        document.prerendering ? addEventListener("prerenderingchange", DD, !0) : DD()
      },
      wI = [1800, 3e3],
      SI = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cD = pI(CD);
        QI((() => {
          const ID = Yc(CD, bI),
            pD = CI();
          let iD, fD = cI("FCP");
          const bD = II(["paint"], (DD => {
            for (const CD of DD) "first-contentful-paint" === CD.name && (bD.disconnect(), CD.startTime < pD.firstHiddenTime && (fD.value = Math.max(CD.startTime - hc(), 0), fD.entries.push(CD), fD.navigationId = CD.navigationId || fD.navigationId, iD(!0)))
          }));
          bD && (iD = ec(DD, fD, wI, CD.reportAllChanges), Ec((cD => {
            fD = cI("FCP", -1, "back-forward-cache", fD.navigationId, fD.navigationInteractionId, fD.navigationURL, sc()), iD = ec(DD, fD, wI, CD.reportAllChanges), uc((() => {
              fD.value = performance.now() - cD.timeStamp, iD(!0)
            }))
          }))), cD && II(["soft-navigation"], (cD => {
            cD.forEach((cD => {
              ID.u && cD.navigationId && iI(ID.u, cD);
              const pD = Math.max((cD.presentationTime || cD.paintTime || 0) - cD.startTime, 0);
              fD = cI("FCP", pD, "soft-navigation", cD.navigationId, cD.interactionId, cD.name, cD.startTime), iD = ec(DD, fD, wI, CD.reportAllChanges), iD(!0)
            }))
          }), CD)
        }))
      },
      BI = [.1, .25],
      yI = DD => DD.find((DD => 1 === DD.node?.nodeType)) || DD[0];
    let MI = 0,
      tI = 1 / 0,
      ZI = 0;
    const oI = DD => {
      for (const CD of DD) CD.interactionId && (tI = Math.min(tI, CD.interactionId), ZI = Math.max(ZI, CD.interactionId), MI = ZI ? (ZI - tI) / 7 + 1 : 0)
    };
    let vI;
    const NI = () => vI ? MI : performance.interactionCount ?? 0;
    class gI {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return NI() - this.h
      }
      D() {
        this.h = NI(), this.v.length = 0, this.p.clear()
      }
      S(DD) {
        const CD = this.T(),
          cD = Math.min(this.v.length - 1, Math.floor(CD / 50));
        return !CD || -1 !== cD || "soft-navigation" !== DD && "back-forward-cache" !== DD ? this.v[cD] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(DD) {
        if (this.m?.(DD), !DD.interactionId) return;
        const CD = this.v.at(-1);
        let cD = this.p.get(DD.interactionId);
        if (cD || this.v.length < 10 || DD.duration > CD.k) {
          if (cD ? DD.duration > cD.k ? (cD.entries = [DD], cD.k = DD.duration) : DD.duration === cD.k && DD.startTime === cD.entries[0].startTime && cD.entries.push(DD) : (cD = {
              id: DD.interactionId,
              entries: [DD],
              k: DD.duration
            }, this.p.set(cD.id, cD), this.v.push(cD)), this.v.sort(((DD, CD) => CD.k - DD.k)), this.v.length > 10) {
            const DD = this.v.splice(10);
            for (const CD of DD) this.p.delete(CD.id)
          }
          this.M?.(cD)
        }
      }
    }
    const XI = DD => {
        const CD = "requestIdleCallback" in globalThis ? 1e3 : 0,
          cD = globalThis.requestIdleCallback || setTimeout,
          ID = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) DD();
        else {
          const pD = fI(DD);
          let iD = -1;
          const fD = () => {
            ID(iD), pD()
          };
          addEventListener("visibilitychange", fD, {
            once: !0,
            capture: !0
          }), iD = cD((() => {
            removeEventListener("visibilitychange", fD, {
              capture: !0
            }), pD()
          }), {
            timeout: CD
          })
        }
      },
      mI = [200, 500],
      nI = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cD = Yc(CD = Object.assign({}, CD), gI);
        let ID = [],
          pD = [],
          iD = 0;
        const fD = new WeakMap,
          bD = new WeakMap;
        let QD = !1;
        const wD = () => {
            QD || (QD = !0, XI(SD))
          },
          SD = () => {
            const DD = new Set(cD.v.map((DD => fD.get(DD.entries[0])))),
              CD = pD.length - 10;
            pD = pD.filter(((cD, ID) => ID >= CD || DD.has(cD)));
            const bD = new Set;
            for (const cD of pD) {
              const DD = BD(cD.startTime, cD.processingEnd);
              for (const CD of DD) bD.add(CD)
            }
            const wD = ID.length - 10;
            ID = ID.filter(((DD, CD) => bD.has(DD) || CD >= wD && DD.startTime > iD)), QD = !1
          };
        cD.m = DD => {
          const cD = DD.startTime + DD.duration;
          let ID;
          iD = Math.max(iD, DD.processingEnd);
          for (let iD = pD.length - 1; iD >= 0; iD--) {
            const fD = pD[iD];
            if (Math.abs(cD - fD.renderTime) <= 8) {
              ID = fD, ID.startTime = Math.min(DD.startTime, ID.startTime), ID.processingStart = Math.min(DD.processingStart, ID.processingStart), ID.processingEnd = Math.max(DD.processingEnd, ID.processingEnd), CD.includeProcessedEventEntries && ID.entries.push(DD);
              break
            }
          }
          ID || (ID = {
            startTime: DD.startTime,
            processingStart: DD.processingStart,
            processingEnd: DD.processingEnd,
            renderTime: cD,
            entries: CD.includeProcessedEventEntries ? [DD] : []
          }, pD.push(ID)), DD.interactionId && fD.set(DD, ID), wD()
        }, cD.M = DD => {
          if (!bD.get(DD)) {
            const cD = DD.entries.find((DD => DD.target))?.target;
            if (cD) {
              const ID = CD.generateTarget?.(cD) ?? kc(cD);
              bD.set(DD, ID)
            } else {
              const CD = DD.entries.find((DD => DD.targetSelector))?.targetSelector;
              CD && bD.set(DD, CD)
            }
          }
        };
        const BD = (DD, CD) => {
          const cD = [];
          for (const pD of ID)
            if (!(pD.startTime + pD.duration < DD)) {
              if (pD.startTime > CD) break;
              cD.push(pD)
            } return cD
        };
        II(["long-animation-frame"], (DD => {
            ID = ID.concat(DD), wD()
          }), CD),
          function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const cD = CI();
            QI((() => {
              "interactionCount" in performance || vI || (vI = II(["event"], oI, {
                durationThreshold: 0
              }));
              let ID, pD = cI("INP");
              const iD = Yc(CD, gI),
                fD = (cD, fD, bD, QD, wD) => {
                  iD.D(), pD = cI("INP", -1, cD, fD, bD, QD, wD), ID = ec(DD, pD, mI, CD.reportAllChanges)
                },
                bD = () => {
                  const DD = iD.S(pD.navigationType);
                  DD && DD.k !== pD.value && (pD.value = DD.k, pD.entries = DD.entries, ID())
                },
                QD = DD => {
                  bD(), ID(!0), fD("soft-navigation", DD.navigationId, DD.interactionId, DD.name, DD.startTime)
                },
                wD = function(DD) {
                  let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  XI((() => {
                    for (const CD of DD) "soft-navigation" !== CD.entryType ? iD.l(CD) : QD(CD);
                    bD(), CD && ID(!0)
                  }))
                },
                SD = ["event", "first-input"];
              pI(CD) && SD.push("soft-navigation");
              const BD = II(SD, wD, {
                ...CD,
                durationThreshold: CD.durationThreshold ?? 40
              });
              ID = ec(DD, pD, mI, CD.reportAllChanges), BD && (cD.onHidden((() => {
                wD(BD.takeRecords(), !0)
              })), Ec((() => {
                fD("back-forward-cache", pD.navigationId, pD.navigationInteractionId, pD.navigationURL, sc())
              })))
            }))
          }((CD => {
            DD((DD => {
              if (0 === DD.entries.length) {
                const CD = DD.navigationStartTime || 0,
                  cD = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: DD.value,
                    loadState: Gc(CD)
                  };
                return Object.assign(DD, {
                  attribution: cD
                })
              }
              const CD = DD.entries[0],
                ID = fD.get(CD),
                pD = Math.max(ID.processingStart, CD.startTime),
                iD = Math.max(CD.startTime + CD.duration, pD),
                QD = Math.min(ID.processingEnd, iD),
                wD = ID.entries.sort(((DD, CD) => DD.processingStart - CD.processingStart)),
                SD = BD(CD.startTime, QD),
                yD = cD.p.get(CD.interactionId),
                MD = {
                  interactionTarget: bD.get(yD),
                  interactionType: CD.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: CD.startTime,
                  nextPaintTime: iD,
                  processedEventEntries: wD,
                  longAnimationFrameEntries: SD,
                  inputDelay: pD - CD.startTime,
                  processingDuration: QD - pD,
                  presentationDelay: iD - QD,
                  loadState: Gc(CD.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (DD => {
                const CD = DD.interactionTime,
                  cD = DD.nextPaintTime;
                if (!DD.longAnimationFrameEntries?.length || !CD || !cD) return;
                const ID = DD.inputDelay,
                  pD = DD.processingDuration;
                let iD, fD, bD = 0,
                  QD = 0,
                  wD = 0,
                  SD = 0;
                for (const MD of DD.longAnimationFrameEntries) {
                  QD = QD + MD.startTime + MD.duration - MD.styleAndLayoutStart;
                  for (const DD of MD.scripts) {
                    const cD = DD.startTime + DD.duration;
                    if (cD < CD) continue;
                    const wD = cD - Math.max(CD, DD.startTime),
                      BD = DD.duration ? wD / DD.duration * DD.forcedStyleAndLayoutDuration : 0;
                    bD += wD - BD, QD += BD, wD > SD && (fD = DD.startTime < CD + ID ? "input-delay" : DD.startTime >= CD + ID + pD ? "presentation-delay" : "processing-duration", iD = DD, SD = wD)
                  }
                }
                const BD = DD.longAnimationFrameEntries.at(-1),
                  yD = BD ? BD.startTime + BD.duration : 0;
                yD >= CD + ID + pD && (wD = cD - yD), iD && fD && (DD.longestScript = {
                  entry: iD,
                  subpart: fD,
                  intersectingDuration: SD
                }), DD.totalScriptDuration = bD, DD.totalStyleAndLayoutDuration = QD, DD.totalPaintDuration = wD, DD.totalUnattributedDuration = cD - CD - bD - QD - wD
              })(MD), Object.assign(DD, {
                attribution: MD
              })
            })(CD))
          }), CD)
      };
    class OI {
      m;
      u;
      l(DD) {
        this.m?.(DD)
      }
    }
    const PI = [2500, 4e3];
    let HI = 50;
    const UI = [];
    II(["resource"], (DD => {
      for (const CD of DD) UI.push(CD), UI.length > HI && UI.shift()
    }));
    const xI = [800, 1800],
      qI = DD => {
        document.prerendering ? QI((() => qI(DD))) : "complete" !== document.readyState ? addEventListener("load", (() => qI(DD)), !0) : setTimeout(DD)
      },
      JI = "load_state",
      KI = "time_to_first_byte";
    var aI = class {
        constructor(DD, CD) {
          this.corePushMeasurement = DD, this.webVitalConfig = CD
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var DD;
          ! function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const cD = Yc(CD = Object.assign({}, CD), Lc),
              ID = new WeakMap;
            cD.t = DD => {
                if (DD?.sources?.length) {
                  const cD = yI(DD.sources),
                    pD = cD?.node;
                  if (pD) {
                    const DD = CD.generateTarget?.(pD) ?? kc(pD);
                    ID.set(cD, DD)
                  }
                }
              },
              function(DD) {
                let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const cD = CI();
                SI(fI((() => {
                  let ID, pD = cI("CLS", 0);
                  const iD = Yc(CD, Lc),
                    fD = (cD, fD, bD, QD, wD) => {
                      pD = cI("CLS", 0, cD, fD, bD, QD, wD), iD.o = 0, ID = ec(DD, pD, BI, CD.reportAllChanges)
                    },
                    bD = function() {
                      let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      iD.o > pD.value && (pD.value = iD.o, pD.entries = iD.i), ID(DD)
                    },
                    QD = DD => {
                      bD(!0), fD("soft-navigation", DD.navigationId, DD.interactionId, DD.name, DD.startTime)
                    },
                    wD = DD => {
                      for (const CD of DD) "soft-navigation" !== CD.entryType ? iD.l(CD) : QD(CD);
                      bD()
                    },
                    SD = ["layout-shift"];
                  pI(CD) && SD.push("soft-navigation");
                  const BD = II(SD, wD);
                  BD && (ID = ec(DD, pD, BI, CD.reportAllChanges), cD.onHidden((() => {
                    wD(BD.takeRecords()), ID(!0)
                  })), Ec((() => {
                    fD("back-forward-cache", pD.navigationId, pD.navigationInteractionId, pD.navigationURL, sc()), uc(ID)
                  })), setTimeout(ID))
                })))
              }((CD => {
                DD((DD => {
                  let CD = {};
                  if (DD.entries.length) {
                    const cD = DD.entries.reduce(((DD, CD) => DD.value > CD.value ? DD : CD));
                    if (cD?.sources?.length) {
                      const DD = yI(cD.sources);
                      DD && (CD = {
                        largestShiftTarget: ID.get(DD),
                        largestShiftTime: cD.startTime,
                        largestShiftValue: cD.value,
                        largestShiftSource: DD,
                        largestShiftEntry: cD,
                        loadState: Gc(cD.startTime)
                      })
                    }
                  }
                  return Object.assign(DD, {
                    attribution: CD
                  })
                })(CD))
              }), CD)
          }((DD => {
            const {
              loadState: CD,
              largestShiftValue: cD,
              largestShiftTime: ID,
              largestShiftTarget: pD
            } = DD.attribution, iD = this.buildInitialValues(DD);
            this.addIfPresent(iD, "largest_shift_value", cD), this.addIfPresent(iD, "largest_shift_time", ID);
            const fD = this.buildInitialContext(DD);
            this.addIfPresent(fD, JI, CD), this.addIfPresent(fD, "largest_shift_target", pD), this.pushMeasurement(iD, fD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureFCP() {
          var DD;
          ! function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const cD = Yc(CD = Object.assign({}, CD), bI);
            pI(CD) && (cD.u = new Map), SI((CD => {
              DD((DD => {
                let CD = {
                  timeToFirstByte: 0,
                  firstByteToFCP: DD.value,
                  loadState: Gc(sc())
                };
                if ("soft-navigation" !== DD.navigationType) {
                  if (DD.entries.length) {
                    const cD = Tc(),
                      ID = DD.entries.at(-1);
                    if (cD) {
                      const pD = cD.responseStart,
                        iD = cD.activationStart || 0,
                        fD = Math.max(0, pD - iD);
                      CD = {
                        timeToFirstByte: fD,
                        firstByteToFCP: DD.value - fD,
                        loadState: Gc(DD.entries[0].startTime),
                        navigationEntry: cD,
                        fcpEntry: ID
                      }
                    }
                  }
                } else {
                  const ID = cD.u?.get(DD.navigationId);
                  ID && (CD = {
                    timeToFirstByte: 0,
                    firstByteToFCP: DD.value,
                    loadState: "complete",
                    navigationEntry: ID
                  })
                }
                return Object.assign(DD, {
                  attribution: CD
                })
              })(CD))
            }), CD)
          }((DD => {
            const {
              firstByteToFCP: CD,
              timeToFirstByte: cD,
              loadState: ID
            } = DD.attribution, pD = this.buildInitialValues(DD);
            this.addIfPresent(pD, "first_byte_to_fcp", CD), this.addIfPresent(pD, KI, cD);
            const iD = this.buildInitialContext(DD);
            this.addIfPresent(iD, JI, ID), this.pushMeasurement(pD, iD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureINP() {
          var DD;
          nI((DD => {
            var CD;
            const {
              interactionTime: cD,
              presentationDelay: ID,
              inputDelay: pD,
              processingDuration: iD,
              nextPaintTime: fD,
              loadState: bD,
              interactionTarget: QD,
              interactionType: wD,
              totalScriptDuration: SD,
              totalStyleAndLayoutDuration: BD,
              totalPaintDuration: yD,
              totalUnattributedDuration: MD,
              longestScript: tD
            } = DD.attribution, ZD = this.buildInitialValues(DD);
            this.addIfPresent(ZD, "interaction_time", cD), this.addIfPresent(ZD, "presentation_delay", ID), this.addIfPresent(ZD, "input_delay", pD), this.addIfPresent(ZD, "processing_duration", iD), this.addIfPresent(ZD, "next_paint_time", fD), this.addNumberIfDefined(ZD, "total_script_duration", SD), this.addNumberIfDefined(ZD, "total_style_and_layout_duration", BD), this.addNumberIfDefined(ZD, "total_paint_duration", yD), this.addNumberIfDefined(ZD, "total_unattributed_duration", MD), this.addNumberIfDefined(ZD, "longest_script_intersecting_duration", null === tD || void 0 === tD ? void 0 : tD.intersectingDuration);
            const oD = this.buildInitialContext(DD);
            this.addIfPresent(oD, JI, bD), this.addIfPresent(oD, "interaction_target", QD), this.addIfPresent(oD, "interaction_type", wD), this.addIfPresent(oD, "longest_script_subpart", null === tD || void 0 === tD ? void 0 : tD.subpart), this.addIfPresent(oD, "longest_script_invoker_type", null === tD || void 0 === tD ? void 0 : tD.entry.invokerType), (null === (CD = this.webVitalConfig) || void 0 === CD ? void 0 : CD.trackAttributionSources) && (this.addIfPresent(oD, "longest_script_invoker", null === tD || void 0 === tD ? void 0 : tD.entry.invoker), this.addIfPresent(oD, "longest_script_source_url", null === tD || void 0 === tD ? void 0 : tD.entry.sourceURL), this.addIfPresent(oD, "longest_script_source_function_name", null === tD || void 0 === tD ? void 0 : tD.entry.sourceFunctionName), this.addIfPresent(oD, "longest_script_source_char_position", void 0 !== (null === tD || void 0 === tD ? void 0 : tD.entry.sourceCharPosition) ? String(tD.entry.sourceCharPosition) : void 0)), this.pushMeasurement(ZD, oD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureLCP() {
          var DD;
          ! function(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (CD = Object.assign({}, CD)).resourceBufferSize && (HI = CD.resourceBufferSize);
            const cD = Yc(CD, OI),
              ID = new WeakMap;
            pI(CD) && (cD.u = new Map), cD.m = DD => {
                const cD = DD.element;
                if (cD) {
                  const pD = CD.generateTarget?.(cD) ?? kc(cD);
                  ID.set(DD, pD)
                } else DD.id && ID.set(DD, `#${DD.id}`)
              },
              function(DD) {
                let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  cD = !1;
                const ID = pI(CD);
                QI((() => {
                  let pD, iD = CI(),
                    fD = cI("LCP");
                  const bD = Yc(CD, OI),
                    QD = (ID, bD, QD, wD, SD) => {
                      fD = cI("LCP", -1, ID, bD, QD, wD, SD), pD = ec(DD, fD, PI, CD.reportAllChanges), cD = !1, "soft-navigation" === ID && (iD = CI(!0))
                    },
                    wD = DD => {
                      bD.u && DD.navigationId && iI(bD.u, DD), cD || pD(!0), QD("soft-navigation", DD.navigationId, DD.interactionId, DD.name, DD.startTime);
                      const CD = DD.getLargestInteractionContentfulPaint?.();
                      CD && SD([CD])
                    },
                    SD = DD => {
                      CD.reportAllChanges || ID || (DD = DD.slice(-1));
                      for (const CD of DD) {
                        if (!CD) continue;
                        if ("soft-navigation" === CD.entryType) {
                          wD(CD);
                          continue
                        }
                        let DD = 0,
                          cD = [],
                          ID = CD.startTime;
                        if ("largest-contentful-paint" === CD.entryType) DD = Math.max(CD.startTime - hc(), 0), bD.l(CD), cD = [CD];
                        else if ("interaction-contentful-paint" === CD.entryType) {
                          const pD = CD;
                          if (!fD.navigationId) continue;
                          if ("interactionId" in pD && pD.interactionId != fD.navigationInteractionId) continue;
                          ID = pD.largestContentfulPaint?.renderTime || 0, DD = Math.max(ID - CD.startTime, 0), pD.largestContentfulPaint && (bD.l(pD.largestContentfulPaint), cD = [pD.largestContentfulPaint])
                        }
                        ID < iD.firstHiddenTime && (fD.value = DD, fD.entries = cD, pD())
                      }
                    },
                    BD = ["largest-contentful-paint"];
                  ID && BD.push("interaction-contentful-paint", "soft-navigation");
                  const yD = II(BD, SD);
                  if (yD) {
                    pD = ec(DD, fD, PI, CD.reportAllChanges);
                    const iD = ["keydown", "click", "visibilitychange"],
                      bD = DD => {
                        if (DD.isTrusted && !cD) {
                          const DD = fD.id;
                          XI((() => {
                            if (!cD) {
                              if (!ID) {
                                yD.disconnect();
                                for (const DD of iD) removeEventListener(DD, bD, {
                                  capture: !0
                                })
                              }
                              DD === fD.id && (cD = !0, pD(!0))
                            }
                          }))
                        }
                      };
                    for (const DD of iD) addEventListener(DD, bD, {
                      capture: !0
                    });
                    Ec((ID => {
                      QD("back-forward-cache", fD.navigationId, fD.navigationInteractionId, fD.navigationURL, sc()), pD = ec(DD, fD, PI, CD.reportAllChanges), uc((() => {
                        fD.value = performance.now() - ID.timeStamp, cD = !0, pD(!0)
                      }))
                    }))
                  }
                }))
              }((CD => {
                DD((DD => {
                  let CD = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: DD.value
                  };
                  if (DD.entries.length) {
                    const pD = DD.entries.at(-1),
                      iD = DD => DD.name === pD.url && (DD.requestStart || DD.startTime) <= pD.startTime,
                      fD = pD.url && (UI.findLast(iD) || performance.getEntriesByType("resource").findLast(iD));
                    let bD;
                    CD.target = ID.get(pD), CD.lcpEntry = pD, pD.url && (CD.url = pD.url), fD && (CD.lcpResourceEntry = fD);
                    let QD = 0,
                      wD = 0;
                    if ("soft-navigation" !== DD.navigationType ? (bD = Tc(), QD = bD?.activationStart ?? 0, wD = bD?.responseStart ?? 0) : (QD = DD.navigationStartTime || 0, bD = cD.u?.get(DD.navigationId)), bD) {
                      const cD = Math.max(0, wD - QD),
                        ID = Math.max(cD, fD ? (fD.requestStart || fD.startTime) - QD : 0),
                        pD = Math.min(DD.value, Math.max(ID, fD ? fD.responseEnd - QD : 0));
                      CD = {
                        ...CD,
                        timeToFirstByte: cD,
                        resourceLoadDelay: ID - cD,
                        resourceLoadDuration: pD - ID,
                        elementRenderDelay: DD.value - pD,
                        navigationEntry: bD
                      }
                    }
                  }
                  return Object.assign(DD, {
                    attribution: CD
                  })
                })(CD))
              }), CD)
          }((DD => {
            var CD;
            const {
              elementRenderDelay: cD,
              resourceLoadDelay: ID,
              resourceLoadDuration: pD,
              timeToFirstByte: iD,
              target: fD,
              url: bD,
              lcpResourceEntry: QD
            } = DD.attribution, wD = this.buildInitialValues(DD);
            this.addIfPresent(wD, "element_render_delay", cD), this.addIfPresent(wD, "resource_load_delay", ID), this.addIfPresent(wD, "resource_load_duration", pD), this.addIfPresent(wD, KI, iD);
            const SD = this.buildInitialContext(DD);
            this.addIfPresent(SD, "element", fD), (null === (CD = this.webVitalConfig) || void 0 === CD ? void 0 : CD.trackAttributionSources) && (this.addIfPresent(SD, "resource_url", bD), this.addIfPresent(SD, "resource_delivery_type", null === QD || void 0 === QD ? void 0 : QD.deliveryType), this.addIfPresent(SD, "resource_initiator_type", null === QD || void 0 === QD ? void 0 : QD.initiatorType)), this.pushMeasurement(wD, SD)
          }), {
            reportAllChanges: null === (DD = this.webVitalConfig) || void 0 === DD ? void 0 : DD.reportAllChanges
          })
        }
        measureTTFB() {
          var DD;
          ! function(DD) {
            ! function(DD) {
              let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const cD = pI(CD);
              let ID = cI("TTFB"),
                pD = ec(DD, ID, xI, CD.reportAllChanges);
              qI((() => {
                const iD = Tc();
                if (iD) {
                  const fD = iD.responseStart;
                  ID.value = Math.max(fD - hc(), 0), ID.entries = [iD], pD(!0), Ec((() => {
                    ID = cI("TTFB", 0, "back-forward-cache", ID.navigationId, ID.navigationInteractionId, ID.navigationURL, sc()), pD = ec(DD, ID, xI, CD.reportAllChanges), pD(!0)
                  })), cD && II(["soft-navigation"], (cD => {
                    cD.forEach((cD => {
                      cD.navigationId && (ID = cI("TTFB", 0, "soft-navigation", cD.navigationId, cD.interactionId, cD.name, cD.startTime), ID.entries = [cD], pD = ec(DD, ID, xI, CD.reportAllChanges), pD(!0))
                    }))
                  }), CD)
                }
              }))
            }((CD => {
              DD((DD => {
                const CD = DD.entries[0];
                let cD = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: CD
                };
                if (DD.entries.length && CD instanceof PerformanceNavigationTiming) {
                  const ID = CD.activationStart || 0,
                    pD = Math.max((CD.workerStart || CD.fetchStart || 0) - ID, 0),
                    iD = Math.max(CD.domainLookupStart - ID, 0),
                    fD = Math.max(CD.connectStart - ID, 0),
                    bD = Math.max(CD.connectEnd - ID, 0);
                  cD = {
                    waitingDuration: pD,
                    cacheDuration: iD - pD,
                    dnsDuration: fD - iD,
                    connectionDuration: bD - fD,
                    requestDuration: DD.value - bD,
                    navigationEntry: CD
                  }
                }
                return Object.assign(DD, {
                  attribution: cD
                })
              })(CD))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((DD => {
            const {
              dnsDuration: CD,
              connectionDuration: cD,
              requestDuration: ID,
              waitingDuration: pD,
              cacheDuration: iD
            } = DD.attribution, fD = this.buildInitialValues(DD);
            this.addIfPresent(fD, "dns_duration", CD), this.addIfPresent(fD, "connection_duration", cD), this.addIfPresent(fD, "request_duration", ID), this.addIfPresent(fD, "waiting_duration", pD), this.addIfPresent(fD, "cache_duration", iD);
            const bD = this.buildInitialContext(DD);
            this.pushMeasurement(fD, bD)
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
          var CD;
          const cD = null !== (CD = DC("com.grafana.faro.lastNavigationId", rD)) && void 0 !== CD ? CD : jc;
          return {
            id: DD.id,
            rating: DD.rating,
            navigation_type: DD.navigationType,
            navigation_entry_id: cD
          }
        }
        pushMeasurement(DD, CD) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: DD
          }, {
            context: CD
          })
        }
        addIfPresent(DD, CD, cD) {
          cD && (DD[CD] = cD)
        }
        addNumberIfDefined(DD, CD, cD) {
          void 0 !== cD && (DD[CD] = cD)
        }
      },
      VI = class extends Cc {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = cc
        }
        initialize() {
          this.logDebug("Initializing"), new aI(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const zI = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function jI() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const CD of DD)
        if ("traceparent" === CD.name) {
          if (!zI.test(CD.description)) continue;
          const [, DD, cD] = CD.description.split("-");
          if (null != DD && null != cD) return {
            traceId: DD,
            spanId: cD
          };
          break
        }
    }

    function lI(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: cD,
        monoNow: ID
      } = CD;
      return Math.min(cD, cD - (ID - DD))
    }

    function LI(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [cD, ID] of Object.entries(CD)) {
        const CD = DD[cD];
        return null != CD && (JD(ID) ? ID.includes(CD) : CD === ID)
      }
      return !0
    }

    function TI(DD) {
      const {
        connectEnd: CD,
        connectStart: cD,
        decodedBodySize: ID,
        domainLookupEnd: pD,
        domainLookupStart: iD,
        duration: fD,
        encodedBodySize: bD,
        fetchStart: QD,
        initiatorType: wD,
        name: SD,
        nextHopProtocol: BD,
        redirectEnd: yD,
        redirectStart: MD,
        renderBlockingStatus: tD,
        requestStart: ZD,
        responseEnd: oD,
        responseStart: vD,
        responseStatus: ND,
        secureConnectionStart: gD,
        transferSize: XD,
        workerStart: mD
      } = DD;
      return {
        name: SD,
        httpHost: RI(SD),
        duration: kI(fD),
        tcpHandshakeTime: kI(CD - cD),
        dnsLookupTime: kI(pD - iD),
        tlsNegotiationTime: kI(CD - gD),
        responseStatus: kI(ND),
        redirectTime: kI(yD - MD),
        requestTime: kI(vD - ZD),
        responseTime: kI(oD - vD),
        fetchTime: kI(oD - QD),
        serviceWorkerTime: kI(mD > 0 ? QD - mD : 0),
        decodedBodySize: kI(ID),
        encodedBodySize: kI(bD),
        cacheHitStatus: function() {
          let DD = "fullLoad";
          0 === XD ? ID > 0 && (DD = "cache") : null != ND ? 304 === ND && (DD = "conditionalFetch") : bD > 0 && XD < bD && (DD = "conditionalFetch");
          return DD
        }(),
        renderBlockingStatus: kI(tD),
        protocol: BD,
        initiatorType: wD,
        visibilityState: document.visibilityState,
        ttfb: kI(vD - ZD),
        transferSize: kI(XD)
      }
    }

    function GI(DD) {
      const {
        activationStart: CD,
        domComplete: cD,
        domContentLoadedEventEnd: ID,
        domContentLoadedEventStart: pD,
        domInteractive: iD,
        fetchStart: fD,
        loadEventEnd: bD,
        loadEventStart: QD,
        responseStart: wD,
        type: SD
      } = DD, BD = function() {
        var DD;
        return null != (null === (DD = performance.timing) || void 0 === DD ? void 0 : DD.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return SC(SC({}, TI(DD)), {}, {
        pageLoadTime: kI(cD - fD),
        documentParsingTime: kI(BD ? iD - BD : null),
        domProcessingTime: kI(cD - iD),
        domContentLoadHandlerTime: kI(ID - pD),
        onLoadTime: kI(bD - QD),
        ttfb: kI(Math.max(wD - (null !== CD && void 0 !== CD ? CD : 0), 0)),
        type: SD
      })
    }

    function RI(DD) {
      try {
        return new URL(DD).host || jc
      } catch (CD) {
        return jc
      }
    }

    function kI(DD) {
      return null == DD ? jc : "number" === typeof DD ? Math.round(DD > 0 ? DD : 0).toString() : DD.toString()
    }
    const dI = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function YI(DD, CD, cD, ID, pD, iD, fD) {
      try {
        var bD = DD[iD](fD),
          QD = bD.value
      } catch (DD) {
        return void cD(DD)
      }
      bD.done ? CD(QD) : Promise.resolve(QD).then(ID, pD)
    }

    function WI(DD) {
      return function() {
        var CD = this,
          cD = arguments;
        return new Promise((function(ID, pD) {
          var iD = DD.apply(CD, cD);

          function fD(DD) {
            YI(iD, ID, pD, fD, bD, "next", DD)
          }

          function bD(DD) {
            YI(iD, ID, pD, fD, bD, "throw", DD)
          }
          fD(void 0)
        }))
      }
    }
    const sI = new Nc;
    var EI = class extends Cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = cc
      }
      initialize() {
        var DD = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let CD = !1;
        const cD = () => {
          ! function(DD) {
            if ("complete" === document.readyState) DD();
            else {
              const CD = () => {
                "complete" === document.readyState && (DD(), document.removeEventListener("readystatechange", CD))
              };
              document.addEventListener("readystatechange", CD)
            }
          }(WI((function*() {
            if (CD) return;
            const cD = DD.api.pushEvent,
              {
                faroNavigationId: ID
              } = yield function(DD) {
                let CD;
                const cD = new Promise((DD => {
                  CD = DD
                }));
                return new PerformanceObserver((cD => {
                  var ID;
                  const [pD] = cD.getEntries();
                  if (null == pD || uD(pD.name)) return;
                  const iD = pD.toJSON();
                  let fD = jI(null === iD || void 0 === iD ? void 0 : iD.serverTiming);
                  const bD = null !== (ID = DC("com.grafana.faro.lastNavigationId", rD)) && void 0 !== ID ? ID : jc,
                    QD = SC(SC({}, GI(iD)), {}, {
                      faroNavigationId: vC(),
                      faroPreviousNavigationId: bD
                    });
                  CC("com.grafana.faro.lastNavigationId", QD.faroNavigationId, rD), DD("faro.performance.navigation", QD, void 0, {
                    spanContext: fD,
                    timestampOverwriteMs: lI(iD.startTime)
                  }), CD(QD)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), cD
              }(cD);
            CD || null == ID || function(DD, CD, cD, ID) {
              const pD = ID.trackResources;
              new PerformanceObserver((ID => {
                const iD = ID.getEntries(),
                  fD = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const bD of iD) {
                  if (uD(bD.name)) continue;
                  null === cD || void 0 === cD || cD.notify({
                    type: "resource"
                  });
                  const ID = bD.toJSON();
                  let iD = jI(null === ID || void 0 === ID ? void 0 : ID.serverTiming);
                  (null == pD && LI(ID, dI) || pD) && CD("faro.performance.resource", SC(SC({}, TI(ID)), {}, {
                    faroNavigationId: DD,
                    faroResourceId: vC()
                  }), void 0, {
                    spanContext: iD,
                    timestampOverwriteMs: lI(ID.startTime, fD)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(ID, cD, sI, DD.config)
          })))
        };
        this.cancelInitialization = () => {
          CD = !0, document.removeEventListener("prerenderingchange", cD)
        }, document.prerendering ? document.addEventListener("prerenderingchange", cD, {
          once: !0
        }) : cD()
      }
      destroy() {
        var DD;
        null === (DD = this.cancelInitialization) || void 0 === DD || DD.call(this), this.cancelInitialization = void 0
      }
    };
    const eI = "data-faro-user-action-name",
      uI = eI.replace(/-name$/, "-timeout"),
      hI = 1e3;

    function rI(DD) {
      return `data-${(DD.startsWith("data-")?DD.slice(5):DD).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function AI(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YC;
      if (void 0 === DD) return CD;
      let ID = NaN;
      try {
        ID = "string" === typeof DD && "" === DD.trim() ? NaN : Number(DD)
      } catch (pD) {}
      return !Number.isFinite(ID) || ID <= 0 ? (cD(`initialActivityTimeout must be a finite number greater than zero; using ${CD} ms`), CD) : ID > 1e3 ? (cD(`initialActivityTimeout cannot exceed ${hI} ms; clamping to the maximum`), hI) : ID
    }

    function FI(DD, CD, cD) {
      return void 0 !== DD && window.clearTimeout(DD), window.setTimeout((() => {
        CD()
      }), cD)
    }

    function Dp(DD) {
      return DD.type === vc
    }
    let Cp, cp;

    function Ip() {
      return Cp || (Cp = new Nc), cp || (cp = new MutationObserver(((DD, CD) => {
        Cp.notify({
          type: "dom-mutation"
        })
      })), cp.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Cp
    }
    const pp = "fetch",
      ip = "xhr";
    let fp, bp, Qp, wp, Sp = !1;

    function Bp() {
      if (fp) return fp;

      function DD(DD) {
        fp.notify({
          type: oc,
          request: DD
        })
      }

      function CD(DD) {
        fp.notify({
          type: vc,
          request: DD
        })
      }
      return fp = new Nc, Sp || (! function(DD) {
        let {
          onRequestEnd: CD,
          onRequestStart: cD
        } = DD;
        Qp || (Qp = window.fetch);
        window.fetch = function() {
          var DD, ID;
          const pD = null !== (DD = hD(arguments[0])) && void 0 !== DD ? DD : "",
            iD = uD(pD),
            fD = (null !== (ID = arguments[1]) && void 0 !== ID ? ID : {}).method,
            bD = vC();
          return iD || cD({
            url: pD,
            method: fD,
            requestId: bD,
            apiType: pp
          }), Qp.apply(this, arguments).then((DD => (iD || CD({
            url: pD,
            method: fD,
            requestId: bD,
            apiType: pp
          }), DD))).catch((DD => {
            throw iD || CD({
              url: pD,
              method: fD,
              requestId: bD,
              apiType: pp
            }), DD
          }))
        }
      }({
        onRequestStart: DD,
        onRequestEnd: CD
      }), function(DD) {
        let {
          onRequestStart: CD,
          onRequestEnd: cD
        } = DD;
        bp || (bp = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const DD = arguments[1],
            ID = uD(DD),
            pD = arguments[0],
            iD = vC();
          this.addEventListener("loadstart", (function() {
            ID || CD({
              url: DD,
              method: pD,
              requestId: iD,
              apiType: ip
            })
          })), this.addEventListener("load", (function() {
            ID || cD({
              url: DD,
              method: pD,
              requestId: iD,
              apiType: ip
            })
          })), this.addEventListener("error", (function() {
            ID || cD({
              url: DD,
              method: pD,
              requestId: iD,
              apiType: ip
            })
          })), this.addEventListener("abort", (function() {
            ID || cD({
              url: DD,
              method: pD,
              requestId: iD,
              apiType: ip
            })
          })), bp.apply(this, arguments)
        }
      }({
        onRequestStart: DD,
        onRequestEnd: CD
      }), Sp = !0), fp
    }
    let yp, Mp = !1;
    let tp = function(DD) {
      return DD[DD.Started = 0] = "Started", DD[DD.Halted = 1] = "Halted", DD[DD.Cancelled = 2] = "Cancelled", DD[DD.Ended = 3] = "Ended", DD
    }({});
    var Zp = class {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = DD, this.logDebug = CD, this.initialActivityTimeout = cD, this.http = Bp(), this.dom = Ip(), this.perf = (wp || (wp = new Nc), Mp || (yp = sI.subscribe((DD => {
          "resource" === DD.type && wp.notify({
            type: "resource-entry"
          })
        })), Mp = !0), wp), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Nc).merge(this.http, this.dom, this.perf).takeWhile((() => [tp.Started, tp.Halted].includes(this.userAction.getState()))).filter((DD => !!(this.userAction.getState() !== tp.Halted || Dp(DD) && this.runningRequests.has(DD.request.requestId)))).subscribe((DD => {
          (function(DD) {
            return DD.type === oc
          })(DD) && this.runningRequests.set(DD.request.requestId, DD.request), Dp(DD) && this.runningRequests.delete(DD.request.requestId), Dp(DD) ? this.userAction.getState() === tp.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((DD => [tp.Ended, tp.Cancelled].includes(DD))).first().subscribe((() => this.cleanup())), this.startupTid = FI(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === tp.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === tp.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = FI(this.haltTid, (() => {
          this.userAction.getState() === tp.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var DD, CD;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (DD = this.allMonitorsSub) || void 0 === DD || DD.unsubscribe(), null === (CD = this.stateSub) || void 0 === CD || CD.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(DD) {
        void 0 !== DD && window.clearTimeout(DD)
      }
    };

    function op(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YC;
      var cD;
      const {
        api: ID,
        config: pD,
        internalLogger: iD
      } = DD, fD = AI(null === (cD = pD.userActionsInstrumentation) || void 0 === cD ? void 0 : cD.initialActivityTimeout, 100, CD);
      return {
        processUserEvent: function(DD) {
          var CD, cD;
          const iD = null !== (CD = null === (cD = pD.userActionsInstrumentation) || void 0 === cD ? void 0 : cD.dataAttributeName) && void 0 !== CD ? CD : eI,
            fD = DD.target;
          if (!(fD instanceof Element)) return;
          const bD = function(DD, CD) {
              let cD = DD;
              for (; cD;) {
                if (cD.hasAttribute(CD)) return cD;
                cD = cD.parentElement
              }
              return null
            }(fD, rI(iD)),
            QD = function(DD, CD) {
              if (!DD) return;
              const cD = function(DD) {
                  return rI(DD).slice(5).replace(/-(.)/g, ((DD, CD) => CD.toUpperCase()))
                }(CD),
                ID = DD.dataset;
              for (const pD in ID)
                if (pD === cD) return ID[pD]
            }(bD, iD);
          if (!bD || !QD) return;
          const wD = function(DD, CD) {
            const cD = DD.getAttribute(function(DD) {
              const CD = rI(DD);
              return CD.endsWith("-name") ? `${CD.slice(0,-5)}-timeout` : `${CD}-timeout`
            }(CD));
            return null === cD ? void 0 : Number(cD)
          }(bD, iD);
          ID.startUserAction(QD, {}, {
            triggerName: DD.type,
            initialActivityTimeout: wD
          })
        },
        processUserActionStarted: function(DD, cD) {
          const ID = DD,
            pD = AI(cD, fD, CD);
          new Zp(ID, iD.debug, pD).attach()
        }
      }
    }
    const vp = "user_action_start",
      Np = {
        Normal: "normal",
        Critical: "critical"
      };
    var gp = class {
        constructor() {
          this.buffer = []
        }
        addItem(DD) {
          this.buffer.push(DD)
        }
        flushBuffer(DD) {
          if (qD(DD))
            for (const CD of this.buffer) DD(CD);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Xp = class extends Nc {
        constructor(DD) {
          let {
            name: CD,
            parentId: cD,
            trigger: ID,
            transports: pD,
            attributes: iD,
            trackUserActionsExcludeItem: fD,
            importance: bD = Np.Normal,
            pushEvent: QD
          } = DD;
          super(), this.name = CD, this.attributes = iD, this.id = vC(), this.trigger = ID, this.parentId = null !== cD && void 0 !== cD ? cD : this.id, this.trackUserActionsExcludeItem = fD, this.importance = bD, this._pushEvent = QD, this._itemBuffer = new gp, this._transports = pD, this._state = 0, this._start()
        }
        addItem(DD) {
          return 0 === this._state && (this._itemBuffer.addItem(DD), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = yC(), this._startTimeMono = MC())
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
          const DD = yC(),
            CD = MC() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((DD => {
            if (function(DD, CD) {
                return (null === CD || void 0 === CD ? void 0 : CD(DD)) || "measurement" === DD.type && "web-vitals" === DD.payload.type
              }(DD, this.trackUserActionsExcludeItem)) return void this._transports.execute(DD);
            const CD = AC(AC({}, DD), {}, {
              payload: AC(AC({}, DD.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(CD)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", AC({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: DD.toString(),
            userActionDuration: CD.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, lC(this.attributes)), void 0, {
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
    const mp = new Nc;

    function np(DD, CD) {
      return !!DD && (0 === (null === DD || void 0 === DD ? void 0 : DD.getState()) && (DD.addItem(CD), !0))
    }
    var Op = class extends Cc {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = cc
        }
        initialize() {
          const {
            processUserEvent: DD,
            processUserActionStarted: CD
          } = op(ZD, (DD => this.logWarn(DD)));
          this._processUserEvent = DD, this._processKeydown = CD => {
            [" ", "Enter"].includes(CD.key) && DD(CD)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = mp.subscribe((DD => {
            let {
              type: cD,
              userAction: ID,
              initialActivityTimeout: pD
            } = DD;
            "user_action_start" === cD && CD(ID, pD)
          }))
        }
        destroy() {
          var DD;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (DD = this._userActionSub) || void 0 === DD || DD.unsubscribe()
        }
      },
      Pp = class extends Cc {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = cc, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(DD) {
          const CD = {
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
          this.api.pushEvent("securitypolicyviolation", lC(CD))
        }
      };
    var Hp = class extends Nc {
      constructor(DD, CD) {
        var cD, ID, pD, iD;
        super(), this._tracking = !1, this.eventsObservable = DD, this._options = {
          inactivityMs: null !== (cD = null === CD || void 0 === CD ? void 0 : CD.inactivityMs) && void 0 !== cD ? cD : 100,
          drainTimeoutMs: null !== (ID = null === CD || void 0 === CD ? void 0 : CD.drainTimeoutMs) && void 0 !== ID ? ID : 1e4,
          isOperationStart: null !== (pD = null === CD || void 0 === CD ? void 0 : CD.isOperationStart) && void 0 !== pD ? pD : () => {},
          isOperationEnd: null !== (iD = null === CD || void 0 === CD ? void 0 : CD.isOperationEnd) && void 0 !== iD ? iD : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((DD => {
          var CD;
          this._lastEventTime = MC(), null === (CD = this._currentEvents) || void 0 === CD || CD.push(DD);
          const cD = this._options.isOperationStart(DD);
          var ID;
          cD && (null === (ID = this._activeOperations) || void 0 === ID || ID.set(cD, !0));
          const pD = this._options.isOperationEnd(DD);
          var iD;
          pD && (null === (iD = this._activeOperations) || void 0 === iD || iD.delete(pD));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = MC(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let DD;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), DD = this.hasActiveOperations() ? MC() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: DD
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Up(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Up(this._drainTid, (() => {
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

    function Up(DD, CD, cD) {
      return DD && clearTimeout(DD), DD = setTimeout((() => {
        CD()
      }), cD)
    }
    let xp;
    const qp = new Set,
      Jp = new Map;
    let Kp, ap, Vp, zp, jp, lp, Lp, Tp, Gp = !1;
    var Rp = class extends Cc {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = cc
      }
      initialize() {
        const DD = Bp(),
          CD = Ip(),
          cD = function() {
            function DD(DD, CD) {
              const cD = null !== CD && void 0 !== CD ? CD : location.href;
              cD !== ap && (Kp.notify({
                type: "url-change",
                from: ap,
                to: cD,
                trigger: DD
              }), ap = cD)
            }
            if (Kp || (Kp = new Nc, ap = location.href), !Gp)
              if ("navigation" in window && "NavigateEvent" in window) {
                Lp = CD => {
                  try {
                    const cD = null === CD || void 0 === CD ? void 0 : CD.destination;
                    (null === cD || void 0 === cD ? void 0 : cD.sameDocument) && "string" === typeof cD.url && DD("navigate", cD.url)
                  } catch (cD) {}
                }, window.navigation.addEventListener("navigate", Lp);
                const CD = window.NavigateEvent;
                CD && CD.prototype && "function" === typeof CD.prototype.intercept && (Tp || (Tp = CD.prototype.intercept), CD.prototype.intercept = function(CD) {
                  try {
                    const CD = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      cD = null === this || void 0 === this ? void 0 : this.destination;
                    CD && cD && !1 === cD.sameDocument && "string" === typeof cD.url && DD("navigate-intercept", cD.url)
                  } catch (cD) {}
                  return Tp.call(this, CD)
                }), Gp = !0
              } else Vp || (Vp = window.history.pushState), window.history.pushState = function() {
                for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
                const pD = Vp.apply(window.history, cD);
                return DD("pushState"), pD
              }, zp || (zp = window.history.replaceState), window.history.replaceState = function() {
                for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
                const pD = zp.apply(window.history, cD);
                return DD("replaceState"), pD
              }, jp = () => DD("popstate"), lp = () => DD("hashchange"), window.addEventListener("popstate", jp), window.addEventListener("hashchange", lp), Gp = !0;
            return Kp
          }(),
          ID = (pD = ["pointerdown", "keydown"], xp || (xp = new Nc), pD.forEach((DD => {
            if (!qp.has(DD)) {
              const CD = () => {
                xp.notify({
                  type: "interaction",
                  name: DD
                })
              };
              window.addEventListener(DD, CD), qp.add(DD), Jp.set(DD, CD)
            }
          })), xp);
        var pD;
        const iD = new Hp((new Nc).merge(DD, CD, cD), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: DD => function(DD) {
            return DD.type === oc
          }(DD) ? DD.request.requestId : void 0,
          isOperationEnd: DD => function(DD) {
            return DD.type === vc
          }(DD) ? DD.request.requestId : void 0
        });
        iD.filter((DD => "tracking-ended" === DD.message)).subscribe((DD => {
          var CD, cD;
          if ((null === (CD = DD.events) || void 0 === CD ? void 0 : CD.some((DD => "url-change" === DD.type))) && (null === (cD = DD.events) || void 0 === cD ? void 0 : cD.some((DD => "dom-mutation" === DD.type)))) {
            var ID;
            const CD = null === (ID = DD.events) || void 0 === ID ? void 0 : ID.find((DD => "url-change" === DD.type));
            ZD.api.pushEvent("faro.navigation", {
              fromUrl: null === CD || void 0 === CD ? void 0 : CD.from,
              toUrl: null === CD || void 0 === CD ? void 0 : CD.to,
              sameDocument: String(!0),
              duration: DD.duration
            })
          }
        })), ID.subscribe((() => {
          iD.startTracking()
        }))
      }
    };

    function kp() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const CD = [new Op, new zc, new VI, new Ic, new lc, new Rp];
      return !1 !== DD.enablePerformanceInstrumentation && CD.unshift(new EI), !1 !== DD.enableContentSecurityPolicyInstrumentation && CD.push(new Pp), !1 !== DD.captureConsole && CD.push(new ac), CD
    }
    var dp = cD(6455);
    let Yp, Wp;

    function sp() {
      const DD = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Yp === DD && Wp || (Wp = new dp.UAParser(DD).getResult(), Yp = DD), Wp
    }
    const Ep = () => {
        const {
          browser: DD,
          os: CD,
          ua: cD
        } = sp(), {
          name: ID,
          version: pD
        } = DD, {
          name: iD,
          version: fD
        } = CD, bD = navigator.language, QD = cD.includes("Mobi"), wD = function() {
          if (!ID || !pD) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== ID && void 0 !== ID ? ID : jc,
            version: null !== pD && void 0 !== pD ? pD : jc,
            os: `${null!==iD&&void 0!==iD?iD:jc} ${null!==fD&&void 0!==fD?fD:jc}`,
            userAgent: null !== cD && void 0 !== cD ? cD : jc,
            language: null !== bD && void 0 !== bD ? bD : jc,
            mobile: QD,
            brands: null !== wD && void 0 !== wD ? wD : jc,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      ep = () => {
        const {
          name: DD,
          version: CD
        } = sp().os;
        if (!DD && !CD) return {};
        const cD = {};
        return DD && (cD.name = DD), CD && (cD.version = CD), {
          os: cD
        }
      };

    function hp(DD) {
      var CD, cD, ID;
      return {
        id: null !== (CD = null === (cD = ZD.config) || void 0 === cD || null === (cD = cD.sessionTracking) || void 0 === cD || null === (ID = cD.generateSessionId) || void 0 === ID ? void 0 : ID.call(cD)) && void 0 !== CD ? CD : vC(),
        attributes: DD
      }
    }
    const rp = () => ({
      sdk: {
        name: "faro-web",
        version: cc
      }
    });
    var Ap = class extends Dc {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Fp = function(DD) {
      return DD.EXCEPTION = "exception", DD.LOG = "log", DD.MEASUREMENT = "measurement", DD.TRACE = "trace", DD.EVENT = "event", DD
    }({});
    const Di = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Ci(DD, CD) {
      var cD, ID;
      if (void 0 === CD) return DD;
      if (void 0 === DD) return {
        resourceSpans: CD
      };
      const pD = null === (cD = DD.resourceSpans) || void 0 === cD ? void 0 : cD[0];
      if (void 0 === pD) return DD;
      const iD = (null === pD || void 0 === pD ? void 0 : pD.scopeSpans) || [],
        fD = (null === CD || void 0 === CD || null === (ID = CD[0]) || void 0 === ID ? void 0 : ID.scopeSpans) || [];
      return AC(AC({}, DD), {}, {
        resourceSpans: [AC(AC({}, pD), {}, {
          scopeSpans: [...iD, ...fD]
        })]
      })
    }

    function ci(DD) {
      let CD = {
        meta: {}
      };
      return void 0 !== DD[0] && (CD.meta = DD[0].meta), DD.forEach((DD => {
        switch (DD.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const cD = Di[DD.type],
              ID = CD[cD];
            CD = AC(AC({}, CD), {}, {
              [cD]: void 0 === ID ? [DD.payload] : [...ID, DD.payload]
            });
            break
          }
          case "trace":
            CD = AC(AC({}, CD), {}, {
              traces: Ci(CD.traces, DD.payload.resourceSpans)
            })
        }
      })), CD
    }
    var Ii = class extends Ap {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = DD, this.name = "@grafana/faro-web-sdk:transport-console", this.version = cc
      }
      send(DD) {
        var CD;
        return this.unpatchedConsole[null !== (CD = this.options.level) && void 0 !== CD ? CD : gc.DEBUG]("New event", ci([DD]))
      }
    };
    const ii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      fi = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      bi = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Qi = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wi = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Si = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Bi(DD) {
      let {
        weekday: CD,
        day: cD,
        month: ID,
        year: pD,
        hour: iD,
        minute: fD,
        second: bD
      } = DD;
      if (pD < 1900 || cD < 1 || iD > 23 || fD > 59 || bD > 60) return;
      const QD = 60 === bD,
        wD = new Date(0);
      return wD.setUTCFullYear(pD, ID, cD), wD.setUTCHours(iD, fD, QD ? 59 : bD, 0), wD.getUTCDay() === CD && wD.getUTCDate() === cD && wD.getUTCMonth() === ID && wD.getUTCFullYear() === pD && wD.getUTCHours() === iD && wD.getUTCMinutes() === fD && wD.getUTCSeconds() === (QD ? 59 : bD) ? wD.getTime() + (QD ? 1e3 : 0) : void 0
    }
    var yi = class {
      constructor(DD) {
        this.options = DD, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var DD = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const CD = this.sequence++;
        let cD = !1;
        return {
          deliver: function() {
            var cD = WI((function*(cD) {
              const ID = DD.options.getNow();
              let pD, iD = 0;
              for (;;) {
                var fD, bD, QD;
                const wD = DD.options.retry.maxAttempts - iD,
                  SD = yield DD.runAttempt((() => cD(wD, DD.unloading)), iD > 0);
                if (iD += SD.attemptsMade, "success" === SD.kind) return {
                  kind: "success",
                  attempts: iD,
                  elapsedTimeMs: DD.options.getNow() - ID
                };
                if (pD = SD.failure, "terminal" === SD.kind || DD.unloading) return {
                  kind: "terminal",
                  attempts: iD,
                  elapsedTimeMs: DD.options.getNow() - ID,
                  failure: pD
                };
                if (iD >= DD.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: iD,
                  elapsedTimeMs: DD.options.getNow() - ID,
                  failure: pD,
                  reason: "retries-exhausted"
                };
                if (null != SD.retryAfterMs && SD.retryAfterMs > DD.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: iD,
                  elapsedTimeMs: DD.options.getNow() - ID,
                  failure: pD,
                  reason: "retry-after-too-long"
                };
                const BD = Math.min(null !== (fD = SD.retryAfterMs) && void 0 !== fD ? fD : DD.options.retry.initialBackoffMs * Math.pow(DD.options.retry.backoffMultiplier, iD - 1), DD.options.retry.maxBackoffMs);
                if (null === (bD = (QD = DD.options).onRetry) || void 0 === bD || bD.call(QD, BD, iD + 1), yield DD.waitForTurn(CD, BD)) {
                  const CD = DD.options.retry.maxAttempts - iD,
                    pD = yield DD.runAttempt((() => cD(CD, !0)));
                  return iD += pD.attemptsMade, {
                    kind: "success" === pD.kind ? "success" : "terminal",
                    attempts: iD,
                    elapsedTimeMs: DD.options.getNow() - ID,
                    failure: "success" === pD.kind ? void 0 : pD.failure
                  }
                }
              }
            }));
            return function(DD) {
              return cD.apply(this, arguments)
            }
          }(),
          release: () => {
            cD || (cD = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const DD = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const CD of DD) CD.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((cD, ID) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const CD = () => {
                this.inProgress--, this.runNextAttempt()
              };
              DD().then((DD => {
                CD(), cD(DD)
              }), (DD => {
                CD(), ID(DD)
              }))
            },
            isRedelivery: CD
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const DD = this.options.getNow(),
            CD = this.attemptQueue.findIndex((CD => {
              let {
                isRedelivery: cD
              } = CD;
              return this.unloading || !cD || DD >= this.nextSendAt
            }));
          if (CD < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - DD)));
          const [cD] = this.attemptQueue.splice(CD, 1);
          cD.isRedelivery && !this.unloading && (this.nextSendAt = DD + 1), cD.run()
        }
      }
      waitForTurn(DD, CD) {
        const cD = Math.min(CD * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((CD => {
          this.waiting.push({
            sequence: DD,
            readyAt: this.options.getNow() + cD,
            resolve: CD
          }), this.waiting.sort(((DD, CD) => DD.readyAt === CD.readyAt ? DD.sequence - CD.sequence : DD.readyAt - CD.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const DD = this.waiting[0],
          CD = DD.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const CD = this.waiting.indexOf(DD);
          CD >= 0 && this.waiting.splice(CD, 1), DD.resolve(!1), this.scheduleNext()
        }), Math.max(0, CD - this.options.getNow()))
      }
    };

    function Mi(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if ({}.hasOwnProperty.call(DD, ID)) {
            if (CD.includes(ID)) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.includes(cD) || {}.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function ti(DD) {
      const {
        size: CD,
        concurrency: cD
      } = DD, ID = [];
      let pD = 0;
      const iD = () => {
        if (pD < cD && ID.length) {
          const {
            producer: DD,
            resolve: CD,
            reject: cD
          } = ID.shift();
          pD++, DD().then((DD => {
            pD--, iD(), CD(DD)
          }), (DD => {
            pD--, iD(), cD(DD)
          }))
        }
      };
      return {
        add: DD => {
          if (ID.length + pD >= CD) throw new Error("Task buffer full");
          return new Promise(((CD, cD) => {
            ID.push({
              producer: DD,
              resolve: CD,
              reject: cD
            }), iD()
          }))
        }
      }
    }
    const Zi = ["headers"],
      oi = ["keepalive", "signal"],
      vi = new Set([408, 425, 429, 500, 502, 503, 504]),
      Ni = new Set([429, 503]);
    let gi = 0,
      Xi = 0;
    var mi = class extends Error {};
    var ni = class extends Ap {
      constructor(DD) {
        var CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD;
        super(), this.options = DD, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = cc, this.pendingCustomSends = 0, this.getNow = null !== (CD = DD.getNow) && void 0 !== CD ? CD : Date.now, this.requestTimeoutMs = null !== (cD = DD.requestTimeoutMs) && void 0 !== cD ? cD : 1e4, this.compressionEnabled = null !== (ID = DD.requestCompression) && void 0 !== ID && ID && "undefined" !== typeof CompressionStream, DD.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new yi({
          bufferSize: null !== (pD = DD.bufferSize) && void 0 !== pD ? pD : 30,
          concurrency: null !== (iD = DD.concurrency) && void 0 !== iD ? iD : 5,
          retry: {
            maxAttempts: null !== (fD = null === (bD = DD.retry) || void 0 === bD ? void 0 : bD.maxAttempts) && void 0 !== fD ? fD : 3,
            initialBackoffMs: null !== (QD = null !== (wD = null === (SD = DD.retry) || void 0 === SD ? void 0 : SD.initialBackoffMs) && void 0 !== wD ? wD : DD.defaultRateLimitBackoffMs) && void 0 !== QD ? QD : 1e3,
            maxBackoffMs: null !== (BD = null === (yD = DD.retry) || void 0 === yD ? void 0 : yD.maxBackoffMs) && void 0 !== BD ? BD : 3e4,
            backoffMultiplier: null !== (MD = null === (tD = DD.retry) || void 0 === tD ? void 0 : tD.backoffMultiplier) && void 0 !== MD ? MD : 2
          },
          getNow: this.getNow,
          getRandom: null !== (ZD = DD.getRandom) && void 0 !== ZD ? ZD : Math.random,
          onRetry: (DD, CD) => {
            this.logDebug(`Retrying failed request after ${DD}ms. Attempt ${CD}.`)
          }
        }), this.customPromiseBuffer = ti({
          size: null !== (oD = DD.bufferSize) && void 0 !== oD ? oD : 30,
          concurrency: null !== (vD = DD.concurrency) && void 0 !== vD ? vD : 5
        }), this.defaultPromiseBuffer = {
          add: DD => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(DD);
            const CD = this.deliveryQueue.reserve();
            if (!CD) throw new Error("Task buffer full");
            return this.runBufferedTask(CD, DD)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (DD => {
          DD.persisted && this.deliveryQueue.resume()
        })))
      }
      send(DD) {
        var CD = this;
        return WI((function*() {
          const cD = CD.promiseBuffer;
          if (cD !== CD.defaultPromiseBuffer || cD.add !== CD.defaultBufferAdd) {
            CD.pendingCustomSends++;
            try {
              yield cD.add((() => CD.deliver(DD)))
            } catch (ID) {
              CD.logError("Permanent delivery failure", {
                error: ID,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              CD.pendingCustomSends--
            }
          } else yield CD.deliver(DD)
        }))()
      }
      runBufferedTask(DD, CD) {
        return WI((function*() {
          let cD;
          try {
            return yield DD.deliver(WI((function*() {
              return cD = yield CD(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), cD
          } finally {
            DD.release()
          }
        }))()
      }
      deliver(DD) {
        var CD = this;
        return WI((function*() {
          const cD = CD.deliveryQueue.reserve();
          if (cD) try {
            const ID = yield CD.prepareRequest(DD), pD = yield cD.deliver(((DD, cD) => CD.performAttempt(ID, DD, cD)));
            "terminal" === pD.kind && CD.logError("retries-exhausted" === pD.reason ? "Delivery retries exhausted" : "Permanent delivery failure", SC(SC({}, pD.failure), {}, {
              reason: pD.reason,
              attempts: pD.attempts,
              elapsedTimeMs: pD.elapsedTimeMs
            }))
          } catch (ID) {
            CD.logError("Permanent delivery failure", {
              error: ID,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            cD.release()
          } else CD.logError("Permanent delivery failure", {
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
        var CD = this;
        return WI((function*() {
          var cD, ID;
          const pD = ci(DD),
            iD = null === (cD = pD.meta.session) || void 0 === cD ? void 0 : cD.id,
            fD = JSON.stringify(pD),
            bD = null !== (ID = CD.options.requestOptions) && void 0 !== ID ? ID : {},
            {
              headers: QD = {}
            } = bD,
            wD = Mi(bD, Zi),
            {
              keepalive: SD,
              signal: BD
            } = wD,
            yD = Mi(wD, oi),
            MD = {};
          for (const [DD, CD] of Object.entries(QD)) MD[DD] = "function" === typeof CD ? yield CD(): CD;
          let tD = fD,
            ZD = function(DD) {
              return "undefined" === typeof TextEncoder ? DD.length : (new TextEncoder).encode(DD).byteLength
            }(fD);
          const oD = {};
          return CD.compressionEnabled && (tD = yield CD.compress(fD), ZD = tD.size, oD["Content-Encoding"] = "gzip"), {
            bodySize: ZD,
            sessionId: iD,
            requestInit: SC({
              method: "POST",
              headers: SC(SC(SC(SC(SC({
                "Content-Type": "application/json"
              }, oD), MD), CD.options.apiKey ? {
                "x-api-key": CD.options.apiKey
              } : {}), iD ? {
                "x-faro-session-id": iD
              } : {}), {}, {
                "Idempotency-Key": vC(20)
              }),
              body: tD
            }, yD)
          }
        }))()
      }
      performAttempt(DD, CD, cD) {
        var ID = this;
        return WI((function*() {
          var pD;
          const iD = null === (pD = ID.options.requestOptions) || void 0 === pD ? void 0 : pD.signal;
          if (null === iD || void 0 === iD ? void 0 : iD.aborted) return {
            kind: "terminal",
            failure: {
              error: iD.reason
            },
            attemptsMade: 0
          };
          let fD = 0;
          try {
            var bD;
            const pD = yield ID.fetchWithKeepaliveFallback(DD.requestInit, DD.bodySize, !!cD || (null === (bD = ID.options.requestOptions) || void 0 === bD ? void 0 : bD.keepalive), CD, (() => fD++));
            if (ID.handleResponse(pD, DD.sessionId), pD.status >= 200 && pD.status < 300) return {
              kind: "success",
              attemptsMade: fD
            };
            const iD = {
              status: pD.status
            };
            return !vi.has(pD.status) || cD ? {
              kind: "terminal",
              failure: iD,
              attemptsMade: fD
            } : {
              kind: "retry",
              failure: iD,
              attemptsMade: fD,
              retryAfterMs: Ni.has(pD.status) ? ID.getRetryAfterDelayMs(pD) : void 0
            }
          } catch (QD) {
            const DD = {
              error: QD
            };
            return (null === iD || void 0 === iD ? void 0 : iD.aborted) || !ID.isFetchNetworkError(QD) || cD ? {
              kind: "terminal",
              failure: DD,
              attemptsMade: fD
            } : {
              kind: "retry",
              failure: DD,
              attemptsMade: fD
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(DD, CD, cD, ID, pD) {
        var iD = this;
        return WI((function*() {
          const fD = iD.getNow(),
            bD = iD.reserveKeepalive(CD, cD);
          try {
            return yield iD.fetchWithTimeout(SC(SC({}, DD), {}, {
              keepalive: bD.keepalive
            }), iD.requestTimeoutMs, pD)
          } catch (wD) {
            var QD;
            if (bD.keepalive && ID > 1 && iD.isFetchNetworkError(wD) && !(wD instanceof mi) && !(null === (QD = iD.options.requestOptions) || void 0 === QD || null === (QD = QD.signal) || void 0 === QD ? void 0 : QD.aborted)) {
              iD.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const CD = iD.requestTimeoutMs - (iD.getNow() - fD);
              return iD.fetchWithTimeout(SC(SC({}, DD), {}, {
                keepalive: !1
              }), CD, pD)
            }
            throw wD
          } finally {
            bD.release()
          }
        }))()
      }
      fetchWithTimeout(DD, CD, cD) {
        var ID = this;
        return WI((function*() {
          var pD;
          const iD = null === (pD = ID.options.requestOptions) || void 0 === pD ? void 0 : pD.signal;
          if (ID.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return cD(), fetch(ID.options.url, SC(SC({}, DD), {}, {
            signal: iD
          }));
          if (CD <= 0) throw new mi("Request timed out");
          const fD = new AbortController,
            bD = () => fD.abort(null === iD || void 0 === iD ? void 0 : iD.reason);
          null === iD || void 0 === iD || iD.addEventListener("abort", bD, {
            once: !0
          });
          let QD = !1;
          const wD = setTimeout((() => {
            QD = !0, fD.abort()
          }), CD);
          try {
            return cD(), yield fetch(ID.options.url, SC(SC({}, DD), {}, {
              signal: fD.signal
            }))
          } catch (SD) {
            if (QD && !(null === iD || void 0 === iD ? void 0 : iD.aborted)) throw new mi("Request timed out");
            throw SD
          } finally {
            clearTimeout(wD), null === iD || void 0 === iD || iD.removeEventListener("abort", bD)
          }
        }))()
      }
      getRetryAfterDelayMs(DD) {
        const CD = DD.headers.get("Retry-After");
        if (!CD) return;
        if (/^\d+$/.test(CD)) {
          const DD = 1e3 * Number(CD);
          return Number.isFinite(DD) ? DD : Number.POSITIVE_INFINITY
        }
        const cD = this.getNow(),
          ID = function(DD, CD) {
            const cD = ii.exec(DD);
            if (cD) {
              const [, DD, CD, ID, pD, iD, fD, bD] = cD;
              return Bi({
                weekday: Qi.indexOf(DD),
                day: Number(CD),
                month: Si.indexOf(ID),
                year: Number(pD),
                hour: Number(iD),
                minute: Number(fD),
                second: Number(bD)
              })
            }
            const ID = fi.exec(DD);
            if (ID) {
              const [, DD, cD, fD, bD, QD, wD, SD] = ID, BD = new Date(CD);
              if (Number.isNaN(BD.getTime())) return;
              const yD = BD.getUTCFullYear();
              let MD = 100 * Math.floor(yD / 100) + Number(bD);
              MD < yD && (MD += 100);
              const tD = Si.indexOf(fD),
                ZD = {
                  month: tD,
                  day: Number(cD),
                  hour: Number(QD),
                  minute: Number(wD),
                  second: Number(SD),
                  millisecond: 0
                },
                oD = {
                  month: BD.getUTCMonth(),
                  day: BD.getUTCDate(),
                  hour: BD.getUTCHours(),
                  minute: BD.getUTCMinutes(),
                  second: BD.getUTCSeconds(),
                  millisecond: BD.getUTCMilliseconds()
                };
              return (MD > yD + 50 || MD === yD + 50 && (iD = oD, ((pD = ZD).month - iD.month || pD.day - iD.day || pD.hour - iD.hour || pD.minute - iD.minute || pD.second - iD.second || pD.millisecond - iD.millisecond) > 0)) && (MD -= 100), Bi({
                weekday: wi.indexOf(DD),
                day: Number(cD),
                month: tD,
                year: MD,
                hour: Number(QD),
                minute: Number(wD),
                second: Number(SD)
              })
            }
            var pD, iD;
            const fD = bi.exec(DD);
            if (!fD) return;
            const [, bD, QD, wD, SD, BD, yD, MD, tD] = fD;
            return Bi({
              weekday: Qi.indexOf(bD),
              day: Number(null !== wD && void 0 !== wD ? wD : SD),
              month: Si.indexOf(QD),
              year: Number(tD),
              hour: Number(BD),
              minute: Number(yD),
              second: Number(MD)
            })
          }(CD, cD);
        return null == ID ? void 0 : Math.max(0, ID - cD)
      }
      reserveKeepalive(DD, CD) {
        if (!1 === CD || DD > 6e4 || gi + DD > 6e4 || Xi >= 9) return {
          keepalive: !1,
          release: YC
        };
        gi += DD, Xi++;
        let cD = !1;
        return {
          keepalive: !0,
          release: () => {
            cD || (cD = !0, gi -= DD, Xi--)
          }
        }
      }
      handleResponse(DD, CD) {
        202 === DD.status && "invalid" === DD.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), CD), DD.text().catch(YC)
      }
      isFetchNetworkError(DD) {
        return DD instanceof TypeError || DD instanceof mi || DD instanceof DOMException && "AbortError" === DD.name
      }
      compress(DD) {
        return WI((function*() {
          const CD = [],
            cD = new ReadableStream({
              start(CD) {
                CD.enqueue((new TextEncoder).encode(DD)), CD.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: DD,
              value: ID
            } = yield cD.read();
            if (DD) return new Blob(CD);
            CD.push(ID)
          }
        }))()
      }
      extendFaroSession(DD, CD, cD) {
        var ID, pD;
        const iD = DD.sessionTracking;
        if (!(null === iD || void 0 === iD ? void 0 : iD.enabled)) return void CD("Session expired.");
        const {
          fetchUserSession: fD,
          storeUserSession: bD
        } = dC(iD), QD = null === (ID = this.metas.value.session) || void 0 === ID ? void 0 : ID.id, wD = null === (pD = fD()) || void 0 === pD ? void 0 : pD.sessionId;
        cD && cD === QD && cD === wD ? (JC({
          fetchUserSession: fD,
          storeUserSession: bD
        })({
          forceSessionExtend: !0
        }), CD("Session expired; created new session.")) : CD("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Oi = () => {
      const DD = window.k6;
      return {
        k6: SC({
          isK6Browser: !0
        }, (null === DD || void 0 === DD ? void 0 : DD.testRunId) && {
          testRunId: null === DD || void 0 === DD ? void 0 : DD.testRunId
        })
      }
    };
    let Pi, Hi;

    function Ui() {
      let {
        generatePageId: DD,
        initialPageMeta: CD
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const cD = location.href;
        return qD(DD) && Pi !== cD && (Pi = cD, Hi = DD(location)), {
          page: SC(SC({
            url: cD
          }, Hi ? {
            id: Hi
          } : {}), CD)
        }
      }
    }

    function xi() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FC,
        CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cD = sC;
      return CD > 0 && (cD.error = CD >= 1 ? function() {
        for (var CD = arguments.length, ID = new Array(CD), pD = 0; pD < CD; pD++) ID[pD] = arguments[pD];
        DD.error(`${cD.prefix}\n`, ...ID)
      } : YC, cD.warn = CD >= 2 ? function() {
        for (var CD = arguments.length, ID = new Array(CD), pD = 0; pD < CD; pD++) ID[pD] = arguments[pD];
        DD.warn(`${cD.prefix}\n`, ...ID)
      } : YC, cD.info = CD >= 3 ? function() {
        for (var CD = arguments.length, ID = new Array(CD), pD = 0; pD < CD; pD++) ID[pD] = arguments[pD];
        DD.info(`${cD.prefix}\n`, ...ID)
      } : YC, cD.debug = CD >= 4 ? function() {
        for (var CD = arguments.length, ID = new Array(CD), pD = 0; pD < CD; pD++) ID[pD] = arguments[pD];
        DD.debug(`${cD.prefix}\n`, ...ID)
      } : YC), cD
    }
    const qi = "faro",
      Ji = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Ki = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function ai(DD) {
      var CD, cD, pD, iD, fD, bD;
      const QD = [],
        SD = xi(DD.unpatchedConsole, DD.internalLoggerLevel);
      DD.transports ? ((DD.url || DD.apiKey) && SD.error('if "transports" is defined, "url" and "apiKey" should not be defined'), QD.push(...DD.transports)) : DD.url ? QD.push(new ni({
        url: DD.url,
        apiKey: DD.apiKey,
        requestCompression: DD.requestCompression
      })) : SD.error('either "url" or "transports" must be defined');
      const {
        dedupe: BD = !0,
        eventDomain: yD = ID,
        globalObjectKey: MD = qi,
        instrumentations: tD = kp(),
        internalLoggerLevel: ZD = EC,
        isolate: oD = !1,
        logArgsSerializer: vD = Kc,
        metas: ND = zi(DD),
        paused: gD = !1,
        preventGlobalExposure: XD = !1,
        unpatchedConsole: mD = FC,
        url: nD,
        experimental: OD
      } = DD, PD = Mi(DD, Ki), HD = null !== (CD = null === OD || void 0 === OD ? void 0 : OD.trackNavigation) && void 0 !== CD && CD, UD = {
        dataAttributeName: rI(null !== (cD = null === (pD = DD.userActionsInstrumentation) || void 0 === pD ? void 0 : pD.dataAttributeName) && void 0 !== cD ? cD : eI),
        excludeItem: null === (iD = DD.userActionsInstrumentation) || void 0 === iD ? void 0 : iD.excludeItem,
        initialActivityTimeout: AI(null === (fD = DD.userActionsInstrumentation) || void 0 === fD ? void 0 : fD.initialActivityTimeout, 100, (DD => SD.warn(DD)))
      };
      return SC(SC({}, PD), {}, {
        batching: SC(SC({}, Ji), DD.batching),
        dedupe: BD,
        globalObjectKey: MD,
        instrumentations: Vi(tD, DD),
        internalLoggerLevel: ZD,
        isolate: oD,
        logArgsSerializer: vD,
        metas: ND,
        parseStacktrace: Zc,
        paused: gD,
        preventGlobalExposure: XD,
        transports: QD,
        unpatchedConsole: mD,
        eventDomain: yD,
        ignoreUrls: [...null !== (bD = DD.ignoreUrls) && void 0 !== bD ? bD : [], ...nD ? [nD] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: SC(SC(SC({}, wD), DD.sessionTracking), ji({
          trackGeolocation: DD.trackGeolocation,
          sessionTracking: DD.sessionTracking
        })),
        userActionsInstrumentation: UD,
        experimental: {
          trackNavigation: HD
        }
      })
    }

    function Vi(DD, CD) {
      let {
        experimental: cD
      } = CD;
      var ID;
      const pD = null !== (ID = null === cD || void 0 === cD ? void 0 : cD.trackNavigation) && void 0 !== ID && ID;
      return DD.filter((DD => !("@grafana/faro-web-sdk:instrumentation-navigation" === DD.name && !pD)))
    }

    function zi(DD) {
      var CD, cD, ID;
      const {
        page: pD,
        generatePageId: iD
      } = null !== (CD = null === DD || void 0 === DD ? void 0 : DD.pageTracking) && void 0 !== CD ? CD : {}, fD = [Ep, ep, Ui({
        generatePageId: iD,
        initialPageMeta: pD
      }), ...null !== (cD = DD.metas) && void 0 !== cD ? cD : [], rp];
      return xD(null === (ID = window) || void 0 === ID ? void 0 : ID.k6) ? [...fD, Oi] : fD
    }

    function ji(DD) {
      let {
        trackGeolocation: CD,
        sessionTracking: cD
      } = DD;
      var ID;
      const pD = {};
      return HD(CD) && (pD.geoLocationTrackingEnabled = CD), ED(pD) ? {} : {
        session: SC(SC({}, null !== (ID = null === cD || void 0 === cD ? void 0 : cD.session) && void 0 !== ID ? ID : {}), {}, {
          overrides: pD
        })
      }
    }
    const li = new WeakSet;

    function Li(DD) {
      return li.add(DD), DD
    }

    function Ti(DD, CD) {
      if (DD.capture) return Li(DD.capture(CD));
      const cD = Li(DD.value);
      return null === CD || void 0 === CD || CD(), cD
    }

    function Gi(DD) {
      const CD = `__faroBundleId_${DD}`,
        cD = null === SD || void 0 === SD ? void 0 : SD[CD];
      if ("string" === typeof cD && "" !== cD) return cD;
      const ID = "undefined" !== typeof window ? window[CD] : void 0;
      return "string" === typeof ID && "" !== ID ? ID : void 0
    }

    function Ri(DD) {
      var CD, cD;
      const ID = DD.config.app.name,
        pD = ID ? function(DD) {
          return null === SD || void 0 === SD ? void 0 : SD[`__faroGitHash_${DD}`]
        }(ID) : void 0,
        iD = {
          sdk: {
            version: cc,
            name: "faro"
          },
          app: AC({
            bundleId: ID && Gi(ID)
          }, void 0 !== pD ? {
            gitHash: pD
          } : {})
        },
        fD = null === (CD = DD.config.sessionTracking) || void 0 === CD ? void 0 : CD.session;
      fD && DD.api.setSession(fD), DD.config.app && (iD.app = AC(AC({}, DD.config.app), iD.app)), DD.config.user && (iD.user = DD.config.user), DD.config.view && (iD.view = DD.config.view), DD.metas.add(iD, ...null !== (cD = DD.config.metas) && void 0 !== cD ? cD : [])
    }
    var ki = class {
      constructor(DD, CD) {
        var cD, ID;
        this.signalBuffer = [], this.itemLimit = null !== (cD = null === CD || void 0 === CD ? void 0 : CD.itemLimit) && void 0 !== cD ? cD : 50, this.sendTimeout = null !== (ID = null === CD || void 0 === CD ? void 0 : CD.sendTimeout) && void 0 !== ID ? ID : 250, this.paused = (null === CD || void 0 === CD ? void 0 : CD.paused) || !1, this.sendFn = DD, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const CD = new Map;
        return DD.forEach((DD => {
          const cD = JSON.stringify(DD.meta);
          let ID = CD.get(cD);
          ID = void 0 === ID ? [DD] : [...ID, DD], CD.set(cD, ID)
        })), Array.from(CD.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const DD = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(DD).forEach(this.sendFn)
        } catch (CD) {
          throw this.signalBuffer = [...DD, ...this.signalBuffer], this.trimBufferToLimit(), CD
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function di(DD, CD, cD, ID) {
      var pD;
      CD.debug("Initializing transports");
      const iD = [];
      let fD = [];
      const bD = DD => {
        let CD = DD;
        for (const ID of fD) {
          const DD = CD.map(ID).filter(Boolean);
          if (0 === DD.length) return [];
          CD = Yi(DD, cD)
        }
        return CD
      };
      let QD;
      (null === (pD = cD.batching) || void 0 === pD ? void 0 : pD.enabled) && (QD = new ki((DD => {
        const cD = bD(DD);
        if (0 !== cD.length)
          for (const ID of iD) CD.debug(`Transporting item using ${ID.name}\n`, cD), ID.isBatched() && ID.send(cD)
      }), {
        sendTimeout: cD.batching.sendTimeout,
        itemLimit: cD.batching.itemLimit,
        paused: cD.paused
      }));
      return {
        add: function() {
          CD.debug("Adding transports");
          for (var pD = arguments.length, fD = new Array(pD), bD = 0; bD < pD; bD++) fD[bD] = arguments[bD];
          fD.forEach((pD => {
            CD.debug(`Adding "${pD.name}" transport`), iD.some((DD => DD === pD)) ? CD.warn(`Transport ${pD.name} is already added`) : (pD.unpatchedConsole = DD, pD.internalLogger = CD, pD.config = cD, pD.metas = ID, iD.push(pD))
          }))
        },
        addBeforeSendHooks: function() {
          CD.debug("Adding beforeSendHooks\n", fD);
          for (var DD = arguments.length, cD = new Array(DD), ID = 0; ID < DD; ID++) cD[ID] = arguments[ID];
          cD.forEach((DD => {
            DD && fD.push(DD)
          }))
        },
        getBeforeSendHooks: () => [...fD],
        execute: DD => {
          var pD;
          if (!cD.paused && RC(ID).shouldCapture()) {
            if (BD = DD.meta, !li.has(BD)) {
              var fD, wD, SD;
              const CD = null === (fD = ID.value.session) || void 0 === fD ? void 0 : fD.id,
                pD = Ti(ID);
              if (cD.paused) return;
              const iD = AC({}, DD.meta);
              (null === (wD = iD.session) || void 0 === wD ? void 0 : wD.id) === CD && (null === (SD = pD.session) || void 0 === SD ? void 0 : SD.id) !== CD && (void 0 === pD.session ? delete iD.session : iD.session = pD.session), DD = AC(AC({}, DD), {}, {
                meta: Li(iD)
              })
            }
            var BD;
            (null === (pD = cD.batching) || void 0 === pD ? void 0 : pD.enabled) && (null === QD || void 0 === QD || QD.addItem(DD)), (DD => {
              var ID;
              if ((null === (ID = cD.batching) || void 0 === ID ? void 0 : ID.enabled) && iD.every((DD => DD.isBatched()))) return;
              const [pD] = bD([DD]);
              if (void 0 !== pD)
                for (const bD of iD) {
                  var fD;
                  CD.debug(`Transporting item using ${bD.name}\n`, pD), bD.isBatched() ? (null === (fD = cD.batching) || void 0 === fD ? void 0 : fD.enabled) || bD.send([pD]) : bD.send(pD)
                }
            })(DD)
          }
        },
        isPaused: () => cD.paused,
        pause: () => {
          CD.debug("Pausing transports"), null === QD || void 0 === QD || QD.pause(), cD.paused = !0
        },
        remove: function() {
          CD.debug("Removing transports");
          for (var DD = arguments.length, cD = new Array(DD), ID = 0; ID < DD; ID++) cD[ID] = arguments[ID];
          cD.forEach((DD => {
            CD.debug(`Removing "${DD.name}" transport`);
            const cD = iD.indexOf(DD); - 1 !== cD ? iD.splice(cD, 1) : CD.warn(`Transport "${DD.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var DD = arguments.length, cD = new Array(DD), ID = 0; ID < DD; ID++) cD[ID] = arguments[ID];
          CD.debug("Removing beforeSendHooks"), fD = fD.filter((DD => !cD.includes(DD)))
        },
        get transports() {
          return [...iD]
        },
        unpause: () => {
          CD.debug("Unpausing transports"), null === QD || void 0 === QD || QD.start(), cD.paused = !1
        }
      }
    }

    function Yi(DD, CD) {
      if (CD.preserveOriginalError)
        for (const cD of DD) "exception" === cD.type && delete cD.payload.originalError;
      return DD
    }
    let Wi = FC;

    function si(DD) {
      var CD;
      return Wi = null !== (CD = DD.unpatchedConsole) && void 0 !== CD ? CD : Wi, Wi
    }
    let Ei, ei = sC;

    function ui(DD, CD) {
      return ei = xi(DD, CD.internalLoggerLevel), ei
    }

    function ri(DD) {
      let {
        internalLogger: CD,
        config: cD,
        metas: ID,
        transports: pD,
        tracesApi: iD,
        userActionsApi: fD
      } = DD;
      var bD;
      CD.debug("Initializing exceptions API");
      let QD = null;
      Ei = null !== (bD = cD.parseStacktrace) && void 0 !== bD ? bD : Ei;
      const wD = DD => {
          CD.debug("Changing stacktrace parser"), Ei = null !== DD && void 0 !== DD ? DD : Ei
        },
        {
          ignoreErrors: SD = [],
          preserveOriginalError: BD
        } = cD;
      return wD(cD.parseStacktrace), {
        changeStacktraceParser: wD,
        getStacktraceParser: () => Ei,
        pushError: function(DD) {
          let {
            skipDedupe: bD,
            stackFrames: wD,
            type: yD,
            context: MD,
            spanContext: tD,
            timestampOverwriteMs: ZD,
            originalError: oD,
            fingerprint: vD,
            fatal: ND
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(DD, CD) {
              const {
                message: cD,
                name: ID,
                stack: pD
              } = CD;
              return iD = DD, fD = cD + " " + ID + " " + pD, iD.some((DD => nD(DD) ? fD.includes(DD) : !!fD.match(DD)));
              var iD, fD
            }(SD, null !== oD && void 0 !== oD ? oD : DD)) try {
            var gD, XD;
            if (!RC(ID).shouldCapture()) return;
            const SD = lC(AC(AC({}, function(DD) {
                let CD = DD.cause;
                LD(CD) ? CD = DD.cause.toString() : null !== CD && (xD(DD.cause) || JD(DD.cause)) ? CD = jC(DD.cause) : null != CD && (CD = DD.cause.toString());
                return null == CD ? {} : {
                  cause: CD
                }
              }(null !== oD && void 0 !== oD ? oD : DD)), null !== MD && void 0 !== MD ? MD : {})),
              nD = AC(AC(AC(AC({
                type: yD || DD.name || "Error",
                value: DD.message,
                timestamp: ZD ? ZC(ZD) : tC(),
                trace: tD ? {
                  trace_id: tD.traceId,
                  span_id: tD.spanId
                } : iD.getTraceContext()
              }, ED(SD) ? {} : {
                context: SD
              }), BD ? {
                originalError: oD
              } : {}), vD ? {
                fingerprint: vD
              } : {}), void 0 !== ND ? {
                fatal: ND
              } : {});
            wD = null !== (gD = wD) && void 0 !== gD ? gD : DD.stack ? null === Ei || void 0 === Ei ? void 0 : Ei(DD).frames : void 0, (null === wD || void 0 === wD ? void 0 : wD.length) && (nD.stacktrace = {
              frames: wD
            });
            const OD = {
              type: nD.type,
              value: nD.value,
              stacktrace: nD.stacktrace,
              context: nD.context,
              fingerprint: nD.fingerprint,
              fatal: null !== (XD = nD.fatal) && void 0 !== XD && XD
            };
            if (!bD && cD.dedupe && !mD(QD) && NC(OD, QD)) return void CD.debug("Skipping error push because it is the same as the last one\n", nD);
            const PD = QD,
              HD = Ti(ID);
            if (QD !== PD && !bD && cD.dedupe && NC(OD, QD)) return;
            QD = OD;
            const UD = {
              meta: HD,
              payload: nD,
              type: "exception"
            };
            CD.debug("Pushing exception\n", UD), np(fD.getActiveUserAction(), UD) || pD.execute(UD)
          } catch (OD) {
            CD.error("Error pushing event", OD)
          }
        }
      }
    }

    function Ai(DD, CD, cD, ID, pD) {
      CD.debug("Initializing API");
      let iD = null;
      const fD = function(DD) {
          let {
            transports: CD,
            internalLogger: cD,
            config: ID,
            pushEvent: pD
          } = DD;
          var iD;
          const fD = null === (iD = ID.userActionsInstrumentation) || void 0 === iD ? void 0 : iD.excludeItem;
          let bD;
          const QD = () => bD;
          return {
            startUserAction: (DD, ID, iD) => {
              if (void 0 === QD()) {
                const cD = new Xp({
                  name: DD,
                  transports: CD,
                  attributes: ID,
                  trigger: (null === iD || void 0 === iD ? void 0 : iD.triggerName) || "faroApiCall",
                  importance: (null === iD || void 0 === iD ? void 0 : iD.importance) || Np.Normal,
                  trackUserActionsExcludeItem: fD,
                  pushEvent: pD
                });
                return cD.filter((DD => [3, 2].includes(DD))).first().subscribe((() => {
                  bD = void 0
                })), mp.notify({
                  type: vp,
                  userAction: cD,
                  initialActivityTimeout: null === iD || void 0 === iD ? void 0 : iD.initialActivityTimeout
                }), bD = cD, bD
              }
              cD.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: QD
          }
        }({
          transports: pD,
          config: cD,
          internalLogger: CD,
          pushEvent: (DD, cD, ID, pD) => {
            iD ? iD(DD, cD, ID, pD) : CD.warn("pushEventImpl is not initialized. Event dropped:", {
              name: DD,
              attributes: cD,
              domain: ID,
              options: pD
            })
          }
        }),
        bD = function(DD, CD, cD, ID, pD) {
          let iD;
          return CD.debug("Initializing traces API"), {
            getOTEL: () => iD,
            getTraceContext: () => {
              const DD = null === iD || void 0 === iD ? void 0 : iD.trace.getSpanContext(iD.context.active());
              return DD ? {
                trace_id: DD.traceId,
                span_id: DD.spanId
              } : void 0
            },
            initOTEL: (DD, cD) => {
              CD.debug("Initializing OpenTelemetry"), iD = {
                trace: DD,
                context: cD
              }
            },
            isOTELInitialized: () => !!iD,
            pushTraces: DD => {
              try {
                if (!RC(ID).shouldCapture()) return;
                const cD = {
                  type: "trace",
                  payload: DD,
                  meta: Ti(ID)
                };
                CD.debug("Pushing trace\n", cD), pD.execute(cD)
              } catch (cD) {
                CD.error("Error pushing trace\n", cD)
              }
            }
          }
        }(0, CD, 0, ID, pD),
        QD = {
          unpatchedConsole: DD,
          internalLogger: CD,
          userActionsApi: fD,
          config: cD,
          metas: ID,
          transports: pD,
          tracesApi: bD
        },
        wD = function(DD) {
          let {
            internalLogger: CD,
            config: cD,
            metas: ID,
            transports: pD,
            tracesApi: iD,
            userActionsApi: fD
          } = DD, bD = null;
          return {
            pushEvent: function(DD, QD, wD) {
              let {
                skipDedupe: SD,
                spanContext: BD,
                timestampOverwriteMs: yD,
                customPayloadTransformer: MD = DD => DD
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!RC(ID).shouldCapture()) return;
                const tD = lC(QD),
                  ZD = MD({
                    name: DD,
                    domain: null !== wD && void 0 !== wD ? wD : cD.eventDomain,
                    attributes: ED(tD) ? void 0 : tD,
                    timestamp: yD ? ZC(yD) : tC(),
                    trace: BD ? {
                      trace_id: BD.traceId,
                      span_id: BD.spanId
                    } : iD.getTraceContext()
                  }),
                  oD = {
                    name: ZD.name,
                    attributes: ZD.attributes,
                    domain: ZD.domain
                  };
                if (!SD && cD.dedupe && !mD(bD) && NC(oD, bD)) return void CD.debug("Skipping event push because it is the same as the last one\n", ZD);
                const vD = bD,
                  ND = Ti(ID);
                if (bD !== vD && !SD && cD.dedupe && NC(oD, bD)) return;
                bD = oD;
                const gD = {
                  meta: ND,
                  payload: ZD,
                  type: "event"
                };
                CD.debug("Pushing event\n", gD), np(fD.getActiveUserAction(), gD) || pD.execute(gD)
              } catch (tD) {
                CD.error("Error pushing event", tD)
              }
            }
          }
        }(QD);
      return iD = wD.pushEvent, AC(AC(AC(AC(AC(AC(AC({}, bD), ri(QD)), function(DD) {
        let CD, cD, ID, pD, {
          internalLogger: iD,
          metas: fD
        } = DD;
        iD.debug("Initializing meta API");
        const bD = DD => {
            cD && fD.remove(cD), cD = {
              user: DD
            }, fD.add(cD)
          },
          QD = (DD, cD) => {
            var ID;
            const pD = null === cD || void 0 === cD ? void 0 : cD.overrides,
              iD = pD ? {
                overrides: AC(AC({}, null === CD || void 0 === CD || null === (ID = CD.session) || void 0 === ID ? void 0 : ID.overrides), pD)
              } : {};
            CD && fD.remove(CD), CD = {
              session: AC(AC({}, ED(DD) ? void 0 : DD), iD)
            }, fD.add(CD)
          },
          wD = (DD, CD) => {
            RC(fD).notifySessionUpdate({
              type: "replace",
              session: DD,
              overrides: null === CD || void 0 === CD ? void 0 : CD.overrides
            }), QD(DD, CD)
          },
          SD = () => fD.value.session,
          BD = () => fD.value.page;
        return {
          setUser: bD,
          resetUser: bD,
          setSession: wD,
          resetSession: wD,
          getSession: SD,
          setView: (DD, CD) => {
            var cD;
            if ((null === CD || void 0 === CD ? void 0 : CD.overrides) && (RC(fD).notifySessionUpdate({
                type: "overrides",
                overrides: CD.overrides
              }), QD(SD(), {
                overrides: CD.overrides
              })), (null === ID || void 0 === ID || null === (cD = ID.view) || void 0 === cD ? void 0 : cD.name) === (null === DD || void 0 === DD ? void 0 : DD.name)) return;
            const pD = ID;
            ID = {
              view: DD
            }, fD.add(ID), pD && fD.remove(pD)
          },
          getView: () => fD.value.view,
          setPage: DD => {
            var CD;
            const cD = nD(DD) ? AC(AC({}, null !== (CD = null === pD || void 0 === pD ? void 0 : pD.page) && void 0 !== CD ? CD : BD()), {}, {
              id: DD
            }) : DD;
            pD && fD.remove(pD), pD = {
              page: cD
            }, fD.add(pD)
          },
          getPage: BD
        }
      }(QD)), function(DD) {
        let {
          internalLogger: CD,
          config: cD,
          metas: ID,
          transports: pD,
          tracesApi: iD,
          userActionsApi: fD
        } = DD;
        var bD;
        CD.debug("Initializing logs API");
        let QD = null;
        const wD = null !== (bD = cD.logArgsSerializer) && void 0 !== bD ? bD : Kc;
        return {
          pushLog: function(DD) {
            let {
              context: bD,
              level: SD,
              skipDedupe: BD,
              spanContext: yD,
              timestampOverwriteMs: MD
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!RC(ID).shouldCapture()) return;
              const tD = lC(bD),
                ZD = {
                  message: wD(DD),
                  level: null !== SD && void 0 !== SD ? SD : "log",
                  context: ED(tD) ? void 0 : tD,
                  timestamp: MD ? ZC(MD) : tC(),
                  trace: yD ? {
                    trace_id: yD.traceId,
                    span_id: yD.spanId
                  } : iD.getTraceContext()
                },
                oD = {
                  message: ZD.message,
                  level: ZD.level,
                  context: ZD.context
                };
              if (!BD && cD.dedupe && !mD(QD) && NC(oD, QD)) return void CD.debug("Skipping log push because it is the same as the last one\n", ZD);
              const vD = QD,
                ND = Ti(ID);
              if (QD !== vD && !BD && cD.dedupe && NC(oD, QD)) return;
              QD = oD;
              const gD = {
                type: "log",
                payload: ZD,
                meta: ND
              };
              CD.debug("Pushing log\n", gD), np(fD.getActiveUserAction(), gD) || pD.execute(gD)
            } catch (tD) {
              CD.error("Error pushing log\n", tD)
            }
          }
        }
      }(QD)), function(DD) {
        let {
          internalLogger: CD,
          config: cD,
          metas: ID,
          transports: pD,
          tracesApi: iD,
          userActionsApi: fD
        } = DD;
        CD.debug("Initializing measurements API");
        let bD = null;
        return {
          pushMeasurement: function(DD) {
            let {
              skipDedupe: QD,
              context: wD,
              spanContext: SD,
              timestampOverwriteMs: BD
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!RC(ID).shouldCapture()) return;
              const yD = lC(wD),
                MD = AC(AC({}, DD), {}, {
                  trace: SD ? {
                    trace_id: SD.traceId,
                    span_id: SD.spanId
                  } : iD.getTraceContext(),
                  timestamp: BD ? ZC(BD) : tC(),
                  context: ED(yD) ? void 0 : yD
                }),
                tD = {
                  type: MD.type,
                  values: MD.values,
                  context: MD.context
                };
              if (!QD && cD.dedupe && !mD(bD) && NC(tD, bD)) return void CD.debug("Skipping measurement push because it is the same as the last one\n", MD);
              const ZD = bD,
                oD = Ti(ID);
              if (bD !== ZD && !QD && cD.dedupe && NC(tD, bD)) return;
              bD = tD;
              const vD = {
                type: "measurement",
                payload: MD,
                meta: oD
              };
              CD.debug("Pushing measurement\n", vD), np(fD.getActiveUserAction(), vD) || pD.execute(vD)
            } catch (yD) {
              CD.error("Error pushing measurement\n", yD)
            }
          }
        }
      }(QD)), wD), fD)
    }

    function Fi(DD) {
      const CD = si(DD),
        cD = ui(CD, DD);
      if (tD() && !DD.isolate) return void cD.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      cD.debug("Initializing");
      const ID = function(DD, CD) {
          let cD, ID = [],
            pD = [],
            iD = [],
            fD = 0,
            bD = 0;
          const QD = () => ID.reduce(((DD, CD) => Object.assign(DD, qD(CD) ? CD() : CD)), {}),
            wD = () => {
              if (pD.length) {
                const DD = QD();
                pD.forEach((CD => CD(DD)))
              }
            };
          return {
            add: function() {
              for (var DD = arguments.length, cD = new Array(DD), pD = 0; pD < DD; pD++) cD[pD] = arguments[pD];
              CD.debug("Adding metas\n", cD), ID.push(...cD), wD()
            },
            remove: function() {
              for (var DD = arguments.length, cD = new Array(DD), pD = 0; pD < DD; pD++) cD[pD] = arguments[pD];
              CD.debug("Removing metas\n", cD), ID = ID.filter((DD => !cD.includes(DD))), wD()
            },
            addListener: DD => {
              CD.debug("Adding metas listener\n", DD), pD.push(DD)
            },
            removeListener: DD => {
              CD.debug("Removing metas listener\n", DD), pD = pD.filter((CD => CD !== DD))
            },
            capture: DD => {
              var CD;
              const ID = void 0 !== cD,
                pD = null !== (CD = cD) && void 0 !== CD ? CD : iD;
              ID || (cD = pD, fD = 0, bD = pD.length);
              try {
                for (; fD < bD;) {
                  const DD = pD[fD++];
                  null === DD || void 0 === DD || DD()
                }
                const CD = Li(QD());
                return null === DD || void 0 === DD || DD(), CD
              } finally {
                ID || (cD = void 0)
              }
            },
            addCaptureListener: DD => {
              iD.push(DD)
            },
            removeCaptureListener: DD => {
              iD = iD.filter((CD => CD !== DD))
            },
            get value() {
              return QD()
            }
          }
        }(0, cD),
        pD = di(CD, cD, DD, ID),
        iD = Ai(CD, cD, DD, ID, pD),
        fD = function(DD, CD, cD, ID, pD, iD) {
          CD.debug("Initializing instrumentations");
          const fD = [];
          return {
            add: function() {
              CD.debug("Adding instrumentations");
              for (var bD = arguments.length, QD = new Array(bD), wD = 0; wD < bD; wD++) QD[wD] = arguments[wD];
              QD.forEach((bD => {
                CD.debug(`Adding "${bD.name}" instrumentation`), fD.some((DD => DD.name === bD.name)) ? CD.warn(`Instrumentation ${bD.name} is already added`) : (bD.unpatchedConsole = DD, bD.internalLogger = CD, bD.config = cD, bD.metas = ID, bD.transports = pD, bD.api = iD, fD.push(bD), bD.initialize())
              }))
            },
            get instrumentations() {
              return [...fD]
            },
            remove: function() {
              CD.debug("Removing instrumentations");
              for (var DD = arguments.length, cD = new Array(DD), ID = 0; ID < DD; ID++) cD[ID] = arguments[ID];
              cD.forEach((DD => {
                var cD, ID;
                CD.debug(`Removing "${DD.name}" instrumentation`);
                const pD = fD.reduce(((CD, cD, ID) => null === CD && cD.name === DD.name ? ID : null), null);
                null !== pD ? (null === (cD = (ID = fD[pD]).destroy) || void 0 === cD || cD.call(ID), fD.splice(pD, 1)) : CD.warn(`Instrumentation "${DD.name}" is not added`)
              }))
            }
          }
        }(CD, cD, DD, ID, pD, iD),
        bD = oD(CD, cD, DD, ID, pD, iD, fD);
      return Ri(bD),
        function(DD) {
          DD.transports.add(...DD.config.transports), DD.transports.addBeforeSendHooks(DD.config.beforeSend)
        }(bD),
        function(DD) {
          DD.instrumentations.add(...DD.config.instrumentations)
        }(bD), bD
    }

    function Df(DD) {
      const CD = ai(DD);
      if (CD) return Fi(CD)
    }
  },
  6455: function(DD, CD, cD) {
    var ID;
    ! function(pD, iD) {
      var fD = "function",
        bD = "undefined",
        QD = "object",
        wD = "string",
        SD = "major",
        BD = "model",
        yD = "name",
        MD = "type",
        tD = "vendor",
        ZD = "version",
        oD = "architecture",
        vD = "console",
        ND = "mobile",
        gD = "tablet",
        XD = "smarttv",
        mD = "wearable",
        nD = "embedded",
        OD = "Amazon",
        PD = "Apple",
        HD = "ASUS",
        UD = "BlackBerry",
        xD = "Browser",
        qD = "Chrome",
        JD = "Firefox",
        KD = "Google",
        aD = "Honor",
        VD = "Huawei",
        zD = "LG",
        jD = "Microsoft",
        lD = "Motorola",
        LD = "Nvidia",
        TD = "OnePlus",
        GD = "Opera",
        RD = "OPPO",
        kD = "Samsung",
        dD = "Sharp",
        YD = "Sony",
        WD = "Xiaomi",
        sD = "Zebra",
        ED = "Facebook",
        eD = "Chromium OS",
        uD = "Mac OS",
        hD = " Browser",
        rD = function(DD) {
          for (var CD = {}, cD = 0; cD < DD.length; cD++) CD[DD[cD].toUpperCase()] = DD[cD];
          return CD
        },
        AD = function(DD, CD) {
          return typeof DD === wD && -1 !== FD(CD).indexOf(FD(DD))
        },
        FD = function(DD) {
          return DD.toLowerCase()
        },
        DC = function(DD, CD) {
          if (typeof DD === wD) return DD = DD.replace(/^\s\s*/, ""), typeof CD === bD ? DD : DD.substring(0, 500)
        },
        CC = function(DD, CD) {
          for (var cD, ID, pD, bD, wD, SD, BD = 0; BD < CD.length && !wD;) {
            var yD = CD[BD],
              MD = CD[BD + 1];
            for (cD = ID = 0; cD < yD.length && !wD && yD[cD];)
              if (wD = yD[cD++].exec(DD))
                for (pD = 0; pD < MD.length; pD++) SD = wD[++ID], typeof(bD = MD[pD]) === QD && bD.length > 0 ? 2 === bD.length ? typeof bD[1] == fD ? this[bD[0]] = bD[1].call(this, SD) : this[bD[0]] = bD[1] : 3 === bD.length ? typeof bD[1] !== fD || bD[1].exec && bD[1].test ? this[bD[0]] = SD ? SD.replace(bD[1], bD[2]) : iD : this[bD[0]] = SD ? bD[1].call(this, SD, bD[2]) : iD : 4 === bD.length && (this[bD[0]] = SD ? bD[3].call(this, SD.replace(bD[1], bD[2])) : iD) : this[bD] = SD || iD;
            BD += 2
          }
        },
        cC = function(DD, CD) {
          for (var cD in CD)
            if (typeof CD[cD] === QD && CD[cD].length > 0) {
              for (var ID = 0; ID < CD[cD].length; ID++)
                if (AD(CD[cD][ID], DD)) return "?" === cD ? iD : cD
            } else if (AD(CD[cD], DD)) return "?" === cD ? iD : cD;
          return CD.hasOwnProperty("*") ? CD["*"] : DD
        },
        IC = {
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
        pC = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [ZD, [yD, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [ZD, [yD, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [yD, ZD],
            [/opios[\/ ]+([\w\.]+)/i],
            [ZD, [yD, GD + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [ZD, [yD, GD + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [ZD, [yD, GD]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [ZD, [yD, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [ZD, [yD, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [yD, ZD],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [ZD, [yD, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [ZD, [yD, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [ZD, [yD, "UC" + xD]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [ZD, [yD, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [ZD, [yD, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [ZD, [yD, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [ZD, [yD, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [ZD, [yD, "Smart Lenovo " + xD]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [yD, /(.+)/, "$1 Secure " + xD], ZD
            ],
            [/\bfocus\/([\w\.]+)/i],
            [ZD, [yD, JD + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [ZD, [yD, GD + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [ZD, [yD, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [ZD, [yD, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [ZD, [yD, GD + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [ZD, [yD, "MIUI" + hD]],
            [/fxios\/([\w\.-]+)/i],
            [ZD, [yD, JD]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [ZD, [yD, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [yD, /(.+)/, "$1Browser"], ZD
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [yD, /(.+)/, "$1" + hD], ZD
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [ZD, [yD, kD + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [ZD, [yD, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [yD, "Sogou Mobile"], ZD
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [yD, ZD],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [yD],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [ZD, yD],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [yD, ED], ZD
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [yD, ZD],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [ZD, [yD, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [ZD, [yD, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [ZD, [yD, qD + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [yD, qD + " WebView"], ZD
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [ZD, [yD, "Android " + xD]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [yD, ZD],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [ZD, [yD, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [ZD, yD],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [yD, [ZD, cC, {
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
            [yD, ZD],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [yD, "Netscape"], ZD
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [yD, ZD],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [ZD, [yD, JD + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [yD, [ZD, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [yD, [ZD, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [oD, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [oD, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [oD, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [oD, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [oD, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [oD, /ower/, "", FD]
            ],
            [/ sun4\w[;\)]/i],
            [
              [oD, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [oD, FD]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [BD, [tD, kD],
              [MD, gD]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [BD, [tD, kD],
              [MD, ND]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [BD, [tD, PD],
              [MD, ND]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [BD, [tD, PD],
              [MD, gD]
            ],
            [/(macintosh);/i],
            [BD, [tD, PD]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [BD, [tD, dD],
              [MD, ND]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [BD, [tD, aD],
              [MD, gD]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [BD, [tD, aD],
              [MD, ND]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [BD, [tD, VD],
              [MD, gD]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [BD, [tD, VD],
              [MD, ND]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [BD, /_/g, " "],
              [tD, WD],
              [MD, gD]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [BD, /_/g, " "],
              [tD, WD],
              [MD, ND]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [BD, [tD, RD],
              [MD, ND]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [BD, [tD, cC, {
                OnePlus: ["304", "403", "203"],
                "*": RD
              }],
              [MD, gD]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [BD, [tD, "Vivo"],
              [MD, ND]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [BD, [tD, "Realme"],
              [MD, ND]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [BD, [tD, lD],
              [MD, ND]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [BD, [tD, lD],
              [MD, gD]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [BD, [tD, zD],
              [MD, gD]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [BD, [tD, zD],
              [MD, ND]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [BD, [tD, "Lenovo"],
              [MD, gD]
            ],
            [/(nokia) (t[12][01])/i],
            [tD, BD, [MD, gD]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [BD, /_/g, " "],
              [MD, ND],
              [tD, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [BD, [tD, KD],
              [MD, gD]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [BD, [tD, KD],
              [MD, ND]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [BD, [tD, YD],
              [MD, ND]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [BD, "Xperia Tablet"],
              [tD, YD],
              [MD, gD]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [BD, [tD, TD],
              [MD, ND]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [BD, [tD, OD],
              [MD, gD]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [BD, /(.+)/g, "Fire Phone $1"],
              [tD, OD],
              [MD, ND]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [BD, tD, [MD, gD]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [BD, [tD, UD],
              [MD, ND]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [BD, [tD, HD],
              [MD, gD]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [BD, [tD, HD],
              [MD, ND]
            ],
            [/(nexus 9)/i],
            [BD, [tD, "HTC"],
              [MD, gD]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [tD, [BD, /_/g, " "],
              [MD, ND]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [BD, [tD, "TCL"],
              [MD, gD]
            ],
            [/(itel) ((\w+))/i],
            [
              [tD, FD], BD, [MD, cC, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [BD, [tD, "Acer"],
              [MD, gD]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [BD, [tD, "Meizu"],
              [MD, ND]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [BD, [tD, "Ulefone"],
              [MD, ND]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [BD, [tD, "Energizer"],
              [MD, ND]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [BD, [tD, "Cat"],
              [MD, ND]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [BD, [tD, "Smartfren"],
              [MD, ND]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [BD, [tD, "Nothing"],
              [MD, ND]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [BD, [tD, "Archos"],
              [MD, gD]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [BD, [tD, "Archos"],
              [MD, ND]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [tD, BD, [MD, gD]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [tD, BD, [MD, ND]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [tD, BD, [MD, gD]],
            [/(surface duo)/i],
            [BD, [tD, jD],
              [MD, gD]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [BD, [tD, "Fairphone"],
              [MD, ND]
            ],
            [/(u304aa)/i],
            [BD, [tD, "AT&T"],
              [MD, ND]
            ],
            [/\bsie-(\w*)/i],
            [BD, [tD, "Siemens"],
              [MD, ND]
            ],
            [/\b(rct\w+) b/i],
            [BD, [tD, "RCA"],
              [MD, gD]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [BD, [tD, "Dell"],
              [MD, gD]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [BD, [tD, "Verizon"],
              [MD, gD]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [BD, [tD, "Barnes & Noble"],
              [MD, gD]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [BD, [tD, "NuVision"],
              [MD, gD]
            ],
            [/\b(k88) b/i],
            [BD, [tD, "ZTE"],
              [MD, gD]
            ],
            [/\b(nx\d{3}j) b/i],
            [BD, [tD, "ZTE"],
              [MD, ND]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [BD, [tD, "Swiss"],
              [MD, ND]
            ],
            [/\b(zur\d{3}) b/i],
            [BD, [tD, "Swiss"],
              [MD, gD]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [BD, [tD, "Zeki"],
              [MD, gD]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [tD, "Dragon Touch"], BD, [MD, gD]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [BD, [tD, "Insignia"],
              [MD, gD]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [BD, [tD, "NextBook"],
              [MD, gD]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [tD, "Voice"], BD, [MD, ND]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [tD, "LvTel"], BD, [MD, ND]
            ],
            [/\b(ph-1) /i],
            [BD, [tD, "Essential"],
              [MD, ND]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [BD, [tD, "Envizen"],
              [MD, gD]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [BD, [tD, "MachSpeed"],
              [MD, gD]
            ],
            [/\btu_(1491) b/i],
            [BD, [tD, "Rotor"],
              [MD, gD]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [BD, [tD, LD],
              [MD, gD]
            ],
            [/(sprint) (\w+)/i],
            [tD, BD, [MD, ND]],
            [/(kin\.[onetw]{3})/i],
            [
              [BD, /\./g, " "],
              [tD, jD],
              [MD, ND]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [BD, [tD, sD],
              [MD, gD]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [BD, [tD, sD],
              [MD, ND]
            ],
            [/smart-tv.+(samsung)/i],
            [tD, [MD, XD]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [BD, /^/, "SmartTV"],
              [tD, kD],
              [MD, XD]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [tD, zD],
              [MD, XD]
            ],
            [/(apple) ?tv/i],
            [tD, [BD, PD + " TV"],
              [MD, XD]
            ],
            [/crkey/i],
            [
              [BD, qD + "cast"],
              [tD, KD],
              [MD, XD]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [BD, [tD, OD],
              [MD, XD]
            ],
            [/(shield \w+ tv)/i],
            [BD, [tD, LD],
              [MD, XD]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [BD, [tD, dD],
              [MD, XD]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [BD, [tD, YD],
              [MD, XD]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [BD, [tD, WD],
              [MD, XD]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [tD, BD, [MD, XD]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [tD, DC],
              [BD, DC],
              [MD, XD]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [BD, [MD, XD]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [MD, XD]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [tD, BD, [MD, vD]],
            [/droid.+; (shield)( bui|\))/i],
            [BD, [tD, LD],
              [MD, vD]
            ],
            [/(playstation \w+)/i],
            [BD, [tD, YD],
              [MD, vD]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [BD, [tD, jD],
              [MD, vD]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [BD, [tD, kD],
              [MD, mD]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [tD, BD, [MD, mD]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [BD, [tD, RD],
              [MD, mD]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [BD, [tD, PD],
              [MD, mD]
            ],
            [/(opwwe\d{3})/i],
            [BD, [tD, TD],
              [MD, mD]
            ],
            [/(moto 360)/i],
            [BD, [tD, lD],
              [MD, mD]
            ],
            [/(smartwatch 3)/i],
            [BD, [tD, YD],
              [MD, mD]
            ],
            [/(g watch r)/i],
            [BD, [tD, zD],
              [MD, mD]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [BD, [tD, sD],
              [MD, mD]
            ],
            [/droid.+; (glass) \d/i],
            [BD, [tD, KD],
              [MD, mD]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [tD, BD, [MD, mD]],
            [/; (quest( \d| pro)?)/i],
            [BD, [tD, ED],
              [MD, mD]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [tD, [MD, nD]],
            [/(aeobc)\b/i],
            [BD, [tD, OD],
              [MD, nD]
            ],
            [/(homepod).+mac os/i],
            [BD, [tD, PD],
              [MD, nD]
            ],
            [/windows iot/i],
            [
              [MD, nD]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [BD, [MD, ND]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [BD, [MD, gD]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [MD, gD]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [MD, ND]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [BD, [tD, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [ZD, [yD, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [yD, ZD],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [ZD, [yD, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [yD, ZD],
            [/ladybird\//i],
            [
              [yD, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [ZD, yD]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [yD, ZD],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [yD, [ZD, cC, IC]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [ZD, cC, IC],
              [yD, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [ZD, /_/g, "."],
              [yD, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [yD, uD],
              [ZD, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [ZD, yD],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [yD, /(.+)/, "$1 Touch"], ZD
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [yD, ZD],
            [/\(bb(10);/i],
            [ZD, [yD, UD]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [ZD, [yD, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [ZD, [yD, JD + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [ZD, [yD, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [ZD, [yD, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [ZD, [yD, qD + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [yD, eD], ZD
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [yD, ZD],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [yD, "Solaris"], ZD
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [yD, ZD]
          ]
        },
        iC = function(DD, CD) {
          if (typeof DD === QD && (CD = DD, DD = iD), !(this instanceof iC)) return new iC(DD, CD).getResult();
          var cD = typeof pD !== bD && pD.navigator ? pD.navigator : iD,
            ID = DD || (cD && cD.userAgent ? cD.userAgent : ""),
            vD = cD && cD.userAgentData ? cD.userAgentData : iD,
            XD = CD ? function(DD, CD) {
              var cD = {};
              for (var ID in DD) CD[ID] && CD[ID].length % 2 === 0 ? cD[ID] = CD[ID].concat(DD[ID]) : cD[ID] = DD[ID];
              return cD
            }(pC, CD) : pC,
            mD = cD && cD.userAgent == ID;
          return this.getBrowser = function() {
            var DD, CD = {};
            return CD[yD] = iD, CD[ZD] = iD, CC.call(CD, ID, XD.browser), CD[SD] = typeof(DD = CD[ZD]) === wD ? DD.replace(/[^\d\.]/g, "").split(".")[0] : iD, mD && cD && cD.brave && typeof cD.brave.isBrave == fD && (CD[yD] = "Brave"), CD
          }, this.getCPU = function() {
            var DD = {};
            return DD[oD] = iD, CC.call(DD, ID, XD.cpu), DD
          }, this.getDevice = function() {
            var DD = {};
            return DD[tD] = iD, DD[BD] = iD, DD[MD] = iD, CC.call(DD, ID, XD.device), mD && !DD[MD] && vD && vD.mobile && (DD[MD] = ND), mD && "Macintosh" == DD[BD] && cD && typeof cD.standalone !== bD && cD.maxTouchPoints && cD.maxTouchPoints > 2 && (DD[BD] = "iPad", DD[MD] = gD), DD
          }, this.DZ = function() {
            var DD = {};
            return DD[yD] = iD, DD[ZD] = iD, CC.call(DD, ID, XD.engine), DD
          }, this.getOS = function() {
            var DD = {};
            return DD[yD] = iD, DD[ZD] = iD, CC.call(DD, ID, XD.os), mD && !DD[yD] && vD && vD.platform && "Unknown" != vD.platform && (DD[yD] = vD.platform.replace(/chrome os/i, eD).replace(/macos/i, uD)), DD
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.DZ(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return ID
          }, this.setUA = function(DD) {
            return ID = typeof DD === wD && DD.length > 500 ? DC(DD, 500) : DD, this
          }, this.setUA(ID), this
        };
      iC.VERSION = "1.0.41", iC.BROWSER = rD([yD, ZD, SD]), iC.CPU = rD([oD]), iC.DEVICE = rD([BD, tD, MD, vD, ND, XD, gD, mD, nD]), iC.ENGINE = iC.OS = rD([yD, ZD]), typeof CD !== bD ? (DD.exports && (CD = DD.exports = iC), CD.UAParser = iC) : cD.amdO ? (ID = function() {
        return iC
      }.call(CD, cD, CD, DD)) === iD || (DD.exports = ID) : typeof pD !== bD && (pD.UAParser = iC);
      var fC = typeof pD !== bD && (pD.jQuery || pD.Zepto);
      if (fC && !fC.ua) {
        var bC = new iC;
        fC.ua = bC.getResult(), fC.ua.get = function() {
          return bC.getUA()
        }, fC.ua.set = function(DD) {
          bC.setUA(DD);
          var CD = bC.getResult();
          for (var cD in CD) fC.ua[cD] = CD[cD]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);