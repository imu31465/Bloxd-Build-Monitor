export const id = 31;
export const ids = [31];
export const modules = {
  6691: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BaseExtension: () => CZ,
      BaseInstrumentation: () => zZ,
      BaseTransport: () => kw,
      CSPInstrumentation: () => iw,
      ConsoleInstrumentation: () => mZ,
      ConsoleTransport: () => Qb,
      EVENT_CLICK: () => Rz,
      EVENT_NAVIGATION: () => Az,
      EVENT_ROUTE_CHANGE: () => ez,
      EVENT_SESSION_EXTEND: () => iz,
      EVENT_SESSION_RESUME: () => Iz,
      EVENT_SESSION_START: () => Jz,
      EVENT_VIEW_CHANGED: () => xz,
      ErrorsInstrumentation: () => EZ,
      FetchTransport: () => xb,
      InternalLoggerLevel: () => Dz,
      LogLevel: () => RZ,
      MAX_SESSION_PERSISTENCE_TIME: () => oC,
      NavigationInstrumentation: () => Tw,
      Observable: () => GZ,
      PerformanceInstrumentation: () => yQ,
      PersistentSessionsManager: () => cz,
      SESSION_EXPIRATION_TIME: () => bC,
      SESSION_INACTIVITY_TIME: () => nC,
      STORAGE_KEY: () => wC,
      SessionInstrumentation: () => QZ,
      TransportItemType: () => Vw,
      UserActionInstrumentation: () => Iw,
      UserActionState: () => gw,
      VERSION: () => ZZ,
      ViewInstrumentation: () => XZ,
      VolatileSessionsManager: () => uz,
      WebVitalsInstrumentation: () => HQ,
      allLogLevels: () => xZ,
      browserMeta: () => Lw,
      buildStackFrame: () => wZ,
      captureMetas: () => cb,
      createInternalLogger: () => eb,
      createPromiseBuffer: () => Mb,
      createSession: () => Bw,
      deepEqual: () => Gz,
      defaultEventDomain: () => QC,
      defaultExceptionType: () => vZ,
      defaultGlobalObjectKey: () => hb,
      defaultInternalLoggerLevel: () => yz,
      defaultLogLevel: () => AZ,
      faro: () => SC,
      genShortID: () => Pz,
      getCurrentTimestamp: () => gz,
      getDataFromSafariExtensions: () => NZ,
      getIgnoreUrls: () => LC,
      getInternalFaroFromGlobalObject: () => NC,
      getStackFramesFromError: () => gZ,
      getTransportBody: () => Zb,
      getUrlFromResource: () => BC,
      getWebInstrumentations: () => aw,
      globalObject: () => FC,
      initializeFaro: () => kb,
      internalGlobalObjectKey: () => WC,
      isArray: () => YC,
      isBoolean: () => vC,
      isDomError: () => rC,
      isDomException: () => sC,
      isElement: () => aC,
      isElementDefined: () => TC,
      fg: () => yC,
      isError: () => cC,
      isErrorDefined: () => XC,
      isErrorEvent: () => uC,
      isEvent: () => lC,
      isEventDefined: () => EC,
      isFunction: () => KC,
      isInstanceOf: () => RC,
      isInt: () => iC,
      isInternalFaroOnGlobalObject: () => gC,
      isMap: () => DC,
      isMapDefined: () => tC,
      isNull: () => xC,
      isNumber: () => IC,
      isObject: () => hC,
      isPrimitive: () => HC,
      isRegExp: () => dC,
      isString: () => JC,
      isSymbol: () => eC,
      isSyntheticEvent: () => jC,
      isThenable: () => mC,
      isToString: () => GC,
      isTypeof: () => PC,
      isUndefined: () => AC,
      makeCoreConfig: () => db,
      noop: () => tz,
      osMeta: () => Uw,
      parseStacktrace: () => SZ,
      sdkMeta: () => Ow,
      setInternalFaroOnGlobalObject: () => MC,
      transportItemTypeToBodyKey: () => Cb,
      unknownString: () => lZ,
      userActionDataAttribute: () => LQ,
      userActionTimeoutDataAttribute: () => UQ
    });
    const QC = "browser",
      wC = "com.grafana.faro.session",
      bC = 144e5,
      nC = 9e5,
      fC = 1e3,
      oC = nC,
      qC = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: oC
      };
    const FC = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof ZC.g ? ZC.g : "undefined" !== typeof self ? self : void 0;
    const WC = "_faroInternal";

    function NC() {
      return FC[WC]
    }

    function MC(CC) {
      CC.config.isolate ? CC.internalLogger.debug("Skipping registering internal Faro instance on global object") : (CC.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(FC, WC, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: CC
      }))
    }

    function gC() {
      return WC in FC
    }
    let SC = {
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

    function pC(CC, zC, ZC, QC, wC, bC, nC) {
      return zC.debug("Initializing Faro"), SC = {
          api: bC,
          config: ZC,
          instrumentations: nC,
          internalLogger: zC,
          metas: QC,
          pause: wC.pause,
          transports: wC,
          unpatchedConsole: CC,
          unpause: wC.unpause
        }, MC(SC),
        function(CC) {
          if (CC.config.preventGlobalExposure) CC.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (CC.internalLogger.debug(`Registering public faro reference in the global scope using "${CC.config.globalObjectKey}" key`), CC.config.globalObjectKey in FC) return void CC.internalLogger.warn(`Skipping global registration due to key "${CC.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(FC, CC.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: CC
            })
          }
        }(SC), SC
    }

    function PC(CC, zC) {
      return typeof CC === zC
    }

    function GC(CC, zC) {
      return Object.prototype.toString.call(CC) === `[object ${zC}]`
    }

    function RC(CC, zC) {
      try {
        return CC instanceof zC
      } catch (ZC) {
        return !1
      }
    }
    const AC = CC => PC(CC, "undefined"),
      xC = CC => PC(CC, "null"),
      JC = CC => PC(CC, "string"),
      IC = CC => PC(CC, "number") && !isNaN(CC) || PC(CC, "bigint"),
      iC = CC => IC(CC) && Number.isInteger(CC),
      vC = CC => PC(CC, "boolean"),
      eC = CC => PC(CC, "symbol"),
      hC = CC => !xC(CC) && PC(CC, "object"),
      KC = CC => PC(CC, "function"),
      YC = CC => GC(CC, "Array"),
      dC = CC => GC(CC, "RegExp"),
      mC = CC => KC(null === CC || void 0 === CC ? void 0 : CC.then),
      HC = CC => !hC(CC) && !KC(CC),
      EC = "undefined" !== typeof Event,
      lC = CC => EC && RC(CC, Event),
      XC = "undefined" !== typeof Error,
      cC = CC => XC && RC(CC, Error),
      uC = CC => GC(CC, "ErrorEvent"),
      rC = CC => GC(CC, "DOMError"),
      sC = CC => GC(CC, "DOMException"),
      TC = "undefined" !== typeof Element,
      aC = CC => TC && RC(CC, Element),
      tC = "undefined" !== typeof Map,
      DC = CC => tC && RC(CC, Map),
      jC = CC => hC(CC) && "nativeEvent" in CC && "preventDefault" in CC && "stopPropagation" in CC;

    function yC(CC) {
      return null == CC || (YC(CC) || JC(CC) ? 0 === CC.length : !!hC(CC) && 0 === Object.keys(CC).length)
    }

    function LC() {
      return SC.transports.transports.flatMap((CC => CC.getIgnoreUrls()))
    }

    function UC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return LC().some((zC => CC && null != CC.match(zC)))
    }

    function BC(CC) {
      return JC(CC) ? CC : CC instanceof URL ? CC.href : !yC(CC) && KC(null === CC || void 0 === CC ? void 0 : CC.toString) ? CC.toString() : void 0
    }
    const OC = "sessionStorage",
      kC = "localStorage";

    function VC(CC) {
      try {
        let zC;
        zC = window[CC];
        const ZC = "__faro_storage_test__";
        return zC.setItem(ZC, ZC), zC.removeItem(ZC), !0
      } catch (ZC) {
        var zC;
        return null === (zC = SC.internalLogger) || void 0 === zC || zC.info(`Web storage of type ${CC} is not available. Reason: ${ZC}`), !1
      }
    }

    function Cz(CC, zC) {
      return bz(zC) ? window[zC].getItem(CC) : null
    }

    function zz(CC, zC, ZC) {
      if (bz(ZC)) try {
        window[ZC].setItem(CC, zC)
      } catch (QC) {}
    }

    function Zz(CC, zC) {
      bz(zC) && window[zC].removeItem(CC)
    }
    const Qz = VC(kC),
      wz = VC(OC);

    function bz(CC) {
      return CC === kC ? Qz : CC === OC && wz
    }

    function nz(CC) {
      return nz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
        return typeof CC
      } : function(CC) {
        return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
      }, nz(CC)
    }

    function fz(CC) {
      var zC = function(CC, zC) {
        if ("object" != nz(CC) || !CC) return CC;
        var ZC = CC[Symbol.toPrimitive];
        if (void 0 !== ZC) {
          var QC = ZC.call(CC, zC || "default");
          if ("object" != nz(QC)) return QC;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zC ? String : Number)(CC)
      }(CC, "string");
      return "symbol" == nz(zC) ? zC : zC + ""
    }

    function oz(CC, zC, ZC) {
      return (zC = fz(zC)) in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }

    function qz(CC, zC) {
      var ZC = Object.keys(CC);
      if (Object.getOwnPropertySymbols) {
        var QC = Object.getOwnPropertySymbols(CC);
        zC && (QC = QC.filter((function(zC) {
          return Object.getOwnPropertyDescriptor(CC, zC).enumerable
        }))), ZC.push.apply(ZC, QC)
      }
      return ZC
    }

    function Fz(CC) {
      for (var zC = 1; zC < arguments.length; zC++) {
        var ZC = null != arguments[zC] ? arguments[zC] : {};
        zC % 2 ? qz(Object(ZC), !0).forEach((function(zC) {
          oz(CC, zC, ZC[zC])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : qz(Object(ZC)).forEach((function(zC) {
          Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
        }))
      }
      return CC
    }

    function Wz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SC;
      var zC, ZC, QC;
      const wC = CC.config.sessionTracking,
        bC = null !== (zC = null !== (ZC = null === wC || void 0 === wC || null === (QC = wC.sampler) || void 0 === QC ? void 0 : QC.call(wC, {
          metas: CC.metas.value
        })) && void 0 !== ZC ? ZC : null === wC || void 0 === wC ? void 0 : wC.samplingRate) && void 0 !== zC ? zC : 1,
        nC = "number" === typeof bC ? function(CC) {
          return Math.min(1, Math.max(0, CC))
        }(bC) : 0;
      if (!(nC > 0)) return !1;
      if (1 === nC) return !0;
      try {
        const CC = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === CC || void 0 === CC ? void 0 : CC.getRandomValues)) {
          const zC = new Uint32Array(1);
          return CC.getRandomValues(zC), zC[0] / Math.pow(2, 32) < nC
        }
      } catch (fC) {}
      return Math.random() < nC
    }

    function Nz() {
      return Date.now()
    }

    function Mz() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function gz() {
      return (new Date).toISOString()
    }

    function Sz(CC) {
      return new Date(CC).toISOString()
    }
    const pz = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Pz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const zC = new Uint32Array(CC),
        ZC = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === ZC || void 0 === ZC ? void 0 : ZC.getRandomValues) ZC.getRandomValues(zC);
      else
        for (let wC = 0; wC < CC; wC++) zC[wC] = Math.floor(4294967296 * Math.random());
      let QC = "";
      for (let wC = 0; wC < CC; wC++) QC += pz[zC[wC] % 59];
      return QC
    }

    function Gz(CC, zC) {
      if (CC === zC) return !0;
      if (PC(CC, "number") && isNaN(CC)) return PC(zC, "number") && isNaN(zC);
      const ZC = YC(CC),
        QC = YC(zC);
      if (ZC !== QC) return !1;
      if (ZC && QC) {
        const ZC = CC.length;
        if (ZC !== zC.length) return !1;
        for (let QC = ZC; 0 !== QC--;)
          if (!Gz(CC[QC], zC[QC])) return !1;
        return !0
      }
      const wC = hC(CC),
        bC = hC(zC);
      if (wC !== bC) return !1;
      if (CC && zC && wC && bC) {
        const ZC = Object.keys(CC),
          QC = Object.keys(zC);
        if (ZC.length !== QC.length) return !1;
        for (let CC of ZC)
          if (!QC.includes(CC)) return !1;
        for (let wC of ZC)
          if (!Gz(CC[wC], zC[wC])) return !1;
        return !0
      }
      return !1
    }
    const Rz = "click",
      Az = "navigation",
      xz = "view_changed",
      Jz = "session_start",
      Iz = "session_resume",
      iz = "session_extend",
      vz = "service_name_override",
      ez = "route_change";

    function hz() {
      let {
        sessionId: CC,
        started: zC,
        lastActivity: ZC,
        isSampled: QC = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, wC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SC;
      var bC;
      const nC = Nz(),
        fC = null === (bC = wC.config) || void 0 === bC || null === (bC = bC.sessionTracking) || void 0 === bC ? void 0 : bC.generateSessionId;
      return null == CC && (CC = "function" === typeof fC ? fC() : Pz()), {
        sessionId: CC,
        lastActivity: null !== ZC && void 0 !== ZC ? ZC : nC,
        started: null !== zC && void 0 !== zC ? zC : nC,
        isSampled: QC
      }
    }

    function Kz(CC) {
      if (null == CC) return !1;
      const zC = Nz();
      return zC - CC.started < 144e5 && zC - CC.lastActivity < nC
    }

    function Yz(CC) {
      let {
        fetchUserSession: zC,
        storeUserSession: ZC,
        adoptSession: QC,
        updateInterval: wC = 0
      } = CC, fC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SC, oC = 0;
      return function() {
        let {
          forceSessionExtend: CC = !1,
          refreshActivity: qC = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var FC, WC;
        if (!zC || !ZC) return;
        const NC = Nz();
        if (!CC && NC < oC && oC - NC <= wC) return;
        const MC = fC.config.sessionTracking,
          gC = null === MC || void 0 === MC ? void 0 : MC.persistent;
        if (gC && !Qz || !gC && !wz) return;
        const SC = zC();
        if (oC = Math.min(NC + wC, (null !== (FC = null === SC || void 0 === SC ? void 0 : SC.started) && void 0 !== FC ? FC : NC) + bC, (null !== (WC = null === SC || void 0 === SC ? void 0 : SC.lastActivity) && void 0 !== WC ? WC : NC) + nC), !1 === CC && Kz(SC)) {
          var pC;
          qC && ZC(Fz(Fz({}, SC), {}, {
            lastActivity: NC
          }));
          const CC = null === (pC = fC.metas.value.session) || void 0 === pC ? void 0 : pC.id;
          null != QC && null != SC.sessionMeta && SC.sessionId !== CC && QC(SC.sessionMeta)
        } else {
          var PC, GC, RC;
          let CC = mz(hz({
            isSampled: Wz(fC)
          }, fC), SC, fC);
          oC = NC + wC, ZC(CC), null === (PC = fC.api) || void 0 === PC || PC.setSession(CC.sessionMeta), null === MC || void 0 === MC || null === (GC = MC.onSessionChange) || void 0 === GC || GC.call(MC, null !== (RC = null === SC || void 0 === SC ? void 0 : SC.sessionMeta) && void 0 !== RC ? RC : null, CC.sessionMeta)
        }
      }
    }

    function dz(CC) {
      let zC, {
          fetchUserSession: ZC,
          storeUserSession: QC,
          updateInterval: wC = 0
        } = CC,
        bC = 0;
      return CC => {
        const nC = Nz();
        if (CC === zC && nC < bC && bC - nC <= wC) return;
        zC = CC, bC = nC + wC;
        const fC = ZC();
        (null === fC || void 0 === fC ? void 0 : fC.sessionId) === CC && Kz(fC) && QC(Fz(Fz({}, fC), {}, {
          lastActivity: nC
        }))
      }
    }

    function mz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SC;
      var QC, wC, bC, nC, fC, oC;
      const qC = Fz(Fz({}, CC), {}, {
          sessionMeta: {
            id: CC.sessionId,
            attributes: Ez(Fz(Fz(Fz({}, null === (QC = ZC.config.sessionTracking) || void 0 === QC || null === (QC = QC.session) || void 0 === QC ? void 0 : QC.attributes), null !== (wC = null === (bC = ZC.metas.value.session) || void 0 === bC ? void 0 : bC.attributes) && void 0 !== wC ? wC : {}), {}, {
              isSampled: CC.isSampled.toString()
            }))
          }
        }),
        FC = null !== (nC = null === (fC = ZC.metas.value.session) || void 0 === fC ? void 0 : fC.overrides) && void 0 !== nC ? nC : null === zC || void 0 === zC || null === (oC = zC.sessionMeta) || void 0 === oC ? void 0 : oC.overrides;
      yC(FC) || (qC.sessionMeta.overrides = FC);
      const WC = null === zC || void 0 === zC ? void 0 : zC.sessionId;
      return null != WC && (qC.sessionMeta.attributes.previousSession = WC), qC
    }

    function Hz(CC) {
      let {
        fetchUserSession: zC,
        storeUserSession: ZC
      } = CC, QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SC, wC = !1;
      return function(CC) {
        if (wC) return;
        const bC = CC.session,
          nC = zC();
        let fC = null === bC || void 0 === bC ? void 0 : bC.id;
        const oC = null === bC || void 0 === bC ? void 0 : bC.attributes,
          qC = null === bC || void 0 === bC ? void 0 : bC.overrides,
          FC = null === nC || void 0 === nC ? void 0 : nC.sessionMeta,
          WC = null === FC || void 0 === FC ? void 0 : FC.overrides,
          NC = !!qC && !Gz(qC, WC),
          MC = !!oC && !Gz(oC, null === FC || void 0 === FC ? void 0 : FC.attributes);
        if (bC && fC !== (null === nC || void 0 === nC ? void 0 : nC.sessionId) || MC || NC) {
          var gC, SC;
          const CC = null != nC && fC === nC.sessionId,
            zC = mz(CC ? nC : hz({
              sessionId: fC,
              isSampled: Wz(QC)
            }, QC), nC, QC),
            bC = null === nC || void 0 === nC || null === (gC = nC.sessionMeta) || void 0 === gC || null === (gC = gC.attributes) || void 0 === gC ? void 0 : gC.previousSession;
          CC && null != bC && bC !== zC.sessionId && (zC.sessionMeta.attributes.previousSession = bC), (null === (SC = zC.sessionMeta.attributes) || void 0 === SC ? void 0 : SC.previousSession) === zC.sessionId && delete zC.sessionMeta.attributes.previousSession, ZC(zC),
            function(CC, zC) {
              let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var wC, bC, nC;
              if (!zC) return;
              const fC = ZC.serviceName,
                oC = null !== (wC = null !== (bC = QC.serviceName) && void 0 !== bC ? bC : null === (nC = CC.metas.value.app) || void 0 === nC ? void 0 : nC.name) && void 0 !== wC ? wC : "";
              fC && fC !== oC && CC.api.pushEvent(vz, {
                serviceName: fC,
                previousServiceName: oC
              })
            }(QC, NC, qC, WC), wC = !0;
          try {
            QC.api.setSession(zC.sessionMeta)
          } finally {
            wC = !1
          }
        }
      }
    }

    function Ez(CC) {
      const zC = {};
      for (const ZC of Object.keys(CC)) {
        const QC = CC[ZC];
        void 0 !== QC && (zC[ZC] = QC)
      }
      return zC
    }

    function lz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== CC && void 0 !== CC ? CC : {}, function() {
        const CC = new WeakSet;
        return function(zC, ZC) {
          if (hC(ZC) && null !== ZC) {
            if (CC.has(ZC)) return null;
            CC.add(ZC)
          }
          return ZC
        }
      }())
    }

    function Xz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zC = {};
      for (const [ZC, QC] of Object.entries(CC)) zC[ZC] = hC(QC) && null !== QC ? lz(QC) : String(QC);
      return zC
    }
    var cz = class CC {
      constructor() {
        var zC = this;
        let ZC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SC;
        this.context = ZC, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = CC => {
          this.adopting = !0;
          try {
            var zC;
            null === (zC = this.context.api) || void 0 === zC || zC.setSession(CC)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: CC = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return zC.updateUserSession({
            refreshActivity: CC
          })
        }, this.recordActivity = dz({
          fetchUserSession: CC.fetchUserSession,
          storeUserSession: CC.storeUserSession,
          updateInterval: fC
        }), this.updateUserSession = Yz({
          fetchUserSession: CC.fetchUserSession,
          storeUserSession: CC.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: fC
        }, ZC), this.init()
      }
      static removeUserSession() {
        Zz(wC, CC.storageTypeLocal)
      }
      static storeUserSession(zC) {
        zz(wC, lz(zC), CC.storageTypeLocal)
      }
      static fetchUserSession() {
        const zC = Cz(wC, CC.storageTypeLocal);
        return zC ? JSON.parse(zC) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var CC;
            this.updateSession({
              refreshActivity: !1
            });
            const zC = null === (CC = this.context.api) || void 0 === CC || null === (CC = CC.getSession()) || void 0 === CC ? void 0 : CC.id;
            zC && this.recordActivity(zC)
          }
        })), this.context.metas.addListener(Hz({
          fetchUserSession: CC.fetchUserSession,
          storeUserSession: CC.storeUserSession
        }, this.context))
      }
    };
    cz.storageTypeLocal = kC;
    var uz = class CC {
      constructor() {
        var zC = this;
        let ZC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SC;
        this.context = ZC, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: CC = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return zC.updateUserSession({
            refreshActivity: CC
          })
        }, this.recordActivity = dz({
          fetchUserSession: CC.fetchUserSession,
          storeUserSession: CC.storeUserSession,
          updateInterval: fC
        }), this.updateUserSession = Yz({
          fetchUserSession: CC.fetchUserSession,
          storeUserSession: CC.storeUserSession,
          updateInterval: fC
        }, ZC), this.init()
      }
      static removeUserSession() {
        Zz(wC, CC.storageTypeSession)
      }
      static storeUserSession(zC) {
        zz(wC, lz(zC), CC.storageTypeSession)
      }
      static fetchUserSession() {
        const zC = Cz(wC, CC.storageTypeSession);
        return zC ? JSON.parse(zC) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var CC;
            this.updateSession({
              refreshActivity: !1
            });
            const zC = null === (CC = this.context.api) || void 0 === CC || null === (CC = CC.getSession()) || void 0 === CC ? void 0 : CC.id;
            zC && this.recordActivity(zC)
          }
        })), this.context.metas.addListener(Hz({
          fetchUserSession: CC.fetchUserSession,
          storeUserSession: CC.storeUserSession
        }, this.context))
      }
    };
    uz.storageTypeSession = OC;
    const rz = new WeakMap;

    function sz(CC) {
      let zC = rz.get(CC);
      if (!zC) {
        let ZC = [],
          QC = [];
        zC = {
          addSessionUpdateListener: CC => {
            ZC.push(CC)
          },
          removeSessionUpdateListener: CC => {
            ZC = ZC.filter((zC => zC !== CC))
          },
          notifySessionUpdate: CC => {
            ZC.forEach((zC => zC(CC)))
          },
          shouldCapture: () => QC.every((CC => CC())),
          addCaptureFilter: CC => {
            QC.push(CC)
          },
          removeCaptureFilter: CC => {
            QC = QC.filter((zC => zC !== CC))
          }
        }, rz.set(CC, zC)
      }
      return zC
    }
    var Tz = class {
      constructor(CC, zC, ZC) {
        this.metas = CC, this.transports = zC, this.onActivate = ZC, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = CC => {
          var zC, ZC, QC;
          const wC = this.pending;
          var bC, nC;
          if ("overrides" === CC.type) return void(this.pending = {
            reset: null !== (bC = null === wC || void 0 === wC ? void 0 : wC.reset) && void 0 !== bC && bC,
            inheritOverrides: null === (nC = null === wC || void 0 === wC ? void 0 : wC.inheritOverrides) || void 0 === nC || nC,
            session: Fz(Fz({}, null === wC || void 0 === wC ? void 0 : wC.session), {}, {
              overrides: Fz(Fz({}, null === wC || void 0 === wC ? void 0 : wC.session.overrides), CC.overrides)
            })
          });
          const fC = CC.session,
            oC = yC(fC) || null != fC && "id" in fC && !fC.id,
            qC = null !== (zC = null === fC || void 0 === fC ? void 0 : fC.overrides) && void 0 !== zC ? zC : null === wC || void 0 === wC ? void 0 : wC.session.overrides;
          this.pending = {
            reset: oC || !(null === fC || void 0 === fC ? void 0 : fC.id) && null !== (ZC = null === wC || void 0 === wC ? void 0 : wC.reset) && void 0 !== ZC && ZC,
            inheritOverrides: !(!CC.overrides && void 0 !== (null === fC || void 0 === fC ? void 0 : fC.overrides)) && (null === (QC = null === wC || void 0 === wC ? void 0 : wC.inheritOverrides) || void 0 === QC || QC),
            session: {
              id: null === fC || void 0 === fC ? void 0 : fC.id,
              attributes: (null === fC || void 0 === fC ? void 0 : fC.attributes) && Fz({}, fC.attributes),
              overrides: CC.overrides ? Fz(Fz({}, null === wC || void 0 === wC ? void 0 : wC.session.overrides), CC.overrides) : qC && Fz({}, qC)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var CC, zC;
        this.waiting = !0, sz(this.metas).addSessionUpdateListener(this.recordUpdate), sz(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (CC = (zC = this.metas).addCaptureListener) || void 0 === CC || CC.call(zC, this.activate), this.activate()
      }
      destroy() {
        var CC, zC;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), sz(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (CC = (zC = this.metas).removeCaptureListener) || void 0 === CC || CC.call(zC, this.activate), sz(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function az(CC) {
      return (null === CC || void 0 === CC ? void 0 : CC.persistent) ? cz : uz
    }

    function tz() {}
    let Dz = function(CC) {
      return CC[CC.OFF = 0] = "OFF", CC[CC.ERROR = 1] = "ERROR", CC[CC.WARN = 2] = "WARN", CC[CC.INFO = 3] = "INFO", CC[CC.VERBOSE = 4] = "VERBOSE", CC
    }({});
    const jz = {
        debug: tz,
        error: tz,
        info: tz,
        prefix: "Faro",
        warn: tz
      },
      yz = 1;

    function Lz(CC) {
      return Lz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
        return typeof CC
      } : function(CC) {
        return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
      }, Lz(CC)
    }

    function Uz(CC) {
      var zC = function(CC, zC) {
        if ("object" != Lz(CC) || !CC) return CC;
        var ZC = CC[Symbol.toPrimitive];
        if (void 0 !== ZC) {
          var QC = ZC.call(CC, zC || "default");
          if ("object" != Lz(QC)) return QC;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zC ? String : Number)(CC)
      }(CC, "string");
      return "symbol" == Lz(zC) ? zC : zC + ""
    }

    function Bz(CC, zC, ZC) {
      return (zC = Uz(zC)) in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }

    function Oz(CC, zC) {
      var ZC = Object.keys(CC);
      if (Object.getOwnPropertySymbols) {
        var QC = Object.getOwnPropertySymbols(CC);
        zC && (QC = QC.filter((function(zC) {
          return Object.getOwnPropertyDescriptor(CC, zC).enumerable
        }))), ZC.push.apply(ZC, QC)
      }
      return ZC
    }

    function kz(CC) {
      for (var zC = 1; zC < arguments.length; zC++) {
        var ZC = null != arguments[zC] ? arguments[zC] : {};
        zC % 2 ? Oz(Object(ZC), !0).forEach((function(zC) {
          Bz(CC, zC, ZC[zC])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : Oz(Object(ZC)).forEach((function(zC) {
          Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
        }))
      }
      return CC
    }
    const Vz = kz({}, console);
    var CZ = class {
        constructor() {
          this.unpatchedConsole = Vz, this.internalLogger = jz, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
          this.internalLogger.debug(`${this.name}\n`, ...zC)
        }
        logInfo() {
          for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
          this.internalLogger.info(`${this.name}\n`, ...zC)
        }
        logWarn() {
          for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
          this.internalLogger.warn(`${this.name}\n`, ...zC)
        }
        logError() {
          for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
          this.internalLogger.error(`${this.name}\n`, ...zC)
        }
      },
      zZ = class extends CZ {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ZZ = "2.12.1";
    var QZ = class extends zZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ZZ, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(CC) {
        var zC;
        const ZC = CC.session;
        if (ZC && ZC.id !== (null === (zC = this.notifiedSession) || void 0 === zC ? void 0 : zC.id)) {
          var QC;
          if (this.isAdoptingSession()) return void(this.notifiedSession = ZC);
          if (this.notifiedSession && this.notifiedSession.id === (null === (QC = ZC.attributes) || void 0 === QC ? void 0 : QC.previousSession)) return this.api.pushEvent(iz, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = ZC);
          this.notifiedSession = ZC, this.api.pushEvent(Jz, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(CC, zC, ZC) {
        const QC = null === ZC || void 0 === ZC ? void 0 : ZC.session;
        let wC, bC, nC = CC.fetchUserSession();
        if (zC.persistent && zC.maxSessionPersistenceTime && nC) {
          const CC = Nz();
          nC.lastActivity < CC - zC.maxSessionPersistenceTime && (cz.removeUserSession(), nC = null)
        }
        const fC = Kz(nC);
        if ((null === ZC || void 0 === ZC ? void 0 : ZC.reset) || !fC || (null === QC || void 0 === QC ? void 0 : QC.id) && QC.id !== (null === nC || void 0 === nC ? void 0 : nC.sessionId)) {
          var oC, qC, FC, WC, NC, MC;
          bC = hz({
            sessionId: (null === ZC || void 0 === ZC ? void 0 : ZC.reset) ? void 0 : null !== (oC = null === QC || void 0 === QC ? void 0 : QC.id) && void 0 !== oC ? oC : null === (qC = zC.session) || void 0 === qC ? void 0 : qC.id,
            isSampled: Wz(this)
          }, this);
          const CC = bC.sessionId,
            gC = ZC && fC ? null === nC || void 0 === nC || null === (FC = nC.sessionMeta) || void 0 === FC ? void 0 : FC.overrides : void 0,
            SC = gC ? Fz(Fz({}, null === (WC = zC.session) || void 0 === WC ? void 0 : WC.overrides), gC) : null === (NC = zC.session) || void 0 === NC ? void 0 : NC.overrides;
          bC.sessionMeta = Fz({
            id: CC,
            attributes: Fz({
              isSampled: bC.isSampled.toString()
            }, null === (MC = zC.session) || void 0 === MC ? void 0 : MC.attributes)
          }, SC ? {
            overrides: SC
          } : {}), wC = Jz
        } else {
          var gC, SC;
          const CC = null === nC || void 0 === nC ? void 0 : nC.sessionId;
          bC = hz({
            sessionId: CC,
            isSampled: nC.isSampled || !1,
            started: null === nC || void 0 === nC ? void 0 : nC.started
          }, this);
          const ZC = null === nC || void 0 === nC ? void 0 : nC.sessionMeta,
            QC = Fz(Fz({}, null === (gC = zC.session) || void 0 === gC ? void 0 : gC.overrides), null === ZC || void 0 === ZC ? void 0 : ZC.overrides);
          bC.sessionMeta = Fz(Fz({}, zC.session), {}, {
            id: CC,
            attributes: Fz(Fz(Fz({}, null === (SC = zC.session) || void 0 === SC ? void 0 : SC.attributes), null === ZC || void 0 === ZC ? void 0 : ZC.attributes), {}, {
              isSampled: bC.isSampled.toString()
            }),
            overrides: QC
          }), wC = Iz
        }
        var pC;
        if (QC && (bC.sessionMeta = Fz(Fz({}, bC.sessionMeta), {}, {
            attributes: Fz(Fz(Fz({}, null === (pC = bC.sessionMeta) || void 0 === pC ? void 0 : pC.attributes), QC.attributes), {}, {
              isSampled: bC.isSampled.toString()
            })
          }), QC.overrides)) {
          const CC = (null === ZC || void 0 === ZC ? void 0 : ZC.inheritOverrides) ? Fz(Fz({}, bC.sessionMeta.overrides), QC.overrides) : QC.overrides;
          Object.keys(CC).length > 0 ? bC.sessionMeta.overrides = CC : delete bC.sessionMeta.overrides
        }
        return {
          initialSession: bC,
          lifecycleType: wC
        }
      }
      registerBeforeSendHook(CC) {
        var zC;
        this.beforeSendHook = zC => {
          var ZC, QC;
          const wC = null === (ZC = zC.meta.session) || void 0 === ZC ? void 0 : ZC.id;
          wC && !this.transports.isPaused() && CC(wC);
          const bC = null === (QC = zC.meta.session) || void 0 === QC ? void 0 : QC.attributes;
          if (bC && "true" === (null === bC || void 0 === bC ? void 0 : bC.isSampled)) {
            var nC;
            let CC = JSON.parse(JSON.stringify(zC));
            const ZC = null === (nC = CC.meta.session) || void 0 === nC ? void 0 : nC.attributes;
            var fC;
            if (null === ZC || void 0 === ZC || delete ZC.isSampled, 0 === Object.keys(null !== ZC && void 0 !== ZC ? ZC : {}).length) null === (fC = CC.meta.session) || void 0 === fC || delete fC.attributes;
            return CC
          }
          return null
        }, null === (zC = this.transports) || void 0 === zC || zC.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var CC;
        this.logDebug("init session instrumentation");
        const zC = document.prerendering;
        var ZC;
        if ((null === (CC = this.config.sessionTracking) || void 0 === CC ? void 0 : CC.enabled) && (zC || this.prerenderSession)) return null !== (ZC = this.prerenderSession) && void 0 !== ZC || (this.prerenderSession = new Tz(this.metas, this.transports, (CC => {
          this.prerenderSession = void 0, this.initializeSession(CC)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(CC) {
        const zC = this.config.sessionTracking;
        if (null === zC || void 0 === zC ? void 0 : zC.enabled) {
          var ZC, QC;
          const wC = az(zC),
            bC = new wC(this);
          this.isAdoptingSession = bC.isAdopting, this.registerBeforeSendHook(bC.recordActivity);
          const {
            initialSession: nC,
            lifecycleType: fC
          } = this.createInitialSession(wC, zC, CC);
          wC.storeUserSession(nC);
          const oC = nC.sessionMeta;
          this.notifiedSession = oC, this.api.setSession(oC), this.captureListener = () => {
            this.transports.isPaused() || bC.updateSession({
              refreshActivity: !1
            })
          }, null === (ZC = (QC = this.metas).addCaptureListener) || void 0 === ZC || ZC.call(QC, this.captureListener), fC === Jz && this.api.pushEvent(Jz, {}, void 0, {
            skipDedupe: !0
          }), fC === Iz && this.api.pushEvent(Iz, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var CC, zC, ZC;
        (null === (CC = this.prerenderSession) || void 0 === CC || CC.destroy(), this.captureListener) && (null === (zC = (ZC = this.metas).removeCaptureListener) || void 0 === zC || zC.call(ZC, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function wZ(CC, zC, ZC, QC) {
      const wC = {
        filename: CC || document.location.href,
        function: zC || "?"
      };
      return void 0 !== ZC && (wC.lineno = ZC), void 0 !== QC && (wC.colno = QC), wC
    }
    const bZ = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      nZ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      fZ = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      oZ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      qZ = "safari-extension",
      FZ = "safari-web-extension",
      WZ = /Minified React error #\d+;/i;

    function NZ(CC, zC) {
      const ZC = null === CC || void 0 === CC ? void 0 : CC.includes(qZ),
        QC = !ZC && (null === CC || void 0 === CC ? void 0 : CC.includes("safari-web-extension"));
      return ZC || QC ? [(null === CC || void 0 === CC ? void 0 : CC.includes("@")) ? CC.split("@")[0] : CC, ZC ? `${qZ}:${zC}` : `${FZ}:${zC}`] : [CC, zC]
    }
    const MZ = 1024;

    function gZ(CC) {
      let zC = [];
      CC.stacktrace ? zC = CC.stacktrace.split("\n").filter(((CC, zC) => zC % 2 === 0)) : CC.stack && (zC = CC.stack.split("\n"));
      const ZC = zC.reduce(((zC, ZC, QC) => {
        if (ZC.length > MZ) return zC;
        let wC, bC, nC, fC, oC;
        if (wC = bZ.exec(ZC)) {
          if (bC = wC[1], nC = wC[2], fC = wC[3], oC = wC[4], null === nC || void 0 === nC ? void 0 : nC.startsWith("eval")) {
            const CC = nZ.exec(nC);
            CC && (nC = CC[1], fC = CC[2], oC = CC[3])
          }
          nC = (null === nC || void 0 === nC ? void 0 : nC.startsWith("address at ")) ? nC.substring(11) : nC, [bC, nC] = NZ(bC, nC)
        } else if (wC = fZ.exec(ZC)) {
          if (bC = wC[1], nC = wC[3], fC = wC[4], oC = wC[5], nC && nC.includes(" > eval")) {
            const CC = oZ.exec(nC);
            CC && (bC = bC || "eval", nC = CC[1], fC = CC[2])
          } else 0 === QC && !oC && IC(CC.columnNumber) && (oC = String(CC.columnNumber + 1));
          [bC, nC] = NZ(bC, nC)
        }
        return (nC || bC) && zC.push(wZ(nC, bC, fC ? Number(fC) : void 0, oC ? Number(oC) : void 0)), zC
      }), []);
      return WZ.test(CC.message) ? ZC.slice(1) : ZC
    }

    function SZ(CC) {
      return {
        frames: gZ(CC)
      }
    }
    const pZ = "http-request-start",
      PZ = "http-request-end";
    var GZ = class CC {
      constructor() {
        this.subscribers = []
      }
      subscribe(CC) {
        return this.subscribers.push(CC), {
          unsubscribe: () => this.unsubscribe(CC)
        }
      }
      unsubscribe(CC) {
        this.subscribers = this.subscribers.filter((zC => zC !== CC))
      }
      notify(CC) {
        this.subscribers.forEach((zC => zC(CC)))
      }
      first() {
        const zC = new CC,
          ZC = CC => {
            zC.notify(CC), QC.unsubscribe()
          },
          QC = this.subscribe(ZC),
          wC = zC.unsubscribe.bind(zC);
        return this.withUnsubscribeOverride(zC, wC, ZC)
      }
      takeWhile(zC) {
        const ZC = new CC,
          QC = CC => {
            zC(CC) ? ZC.notify(CC) : ZC.unsubscribe(QC)
          };
        this.subscribe(QC);
        const wC = ZC.unsubscribe.bind(ZC);
        return this.withUnsubscribeOverride(ZC, wC, QC)
      }
      filter(zC) {
        const ZC = new CC,
          QC = CC => {
            zC(CC) && ZC.notify(CC)
          };
        this.subscribe(QC);
        const wC = ZC.unsubscribe.bind(ZC);
        return this.withUnsubscribeOverride(ZC, wC, QC)
      }
      merge() {
        const zC = new CC,
          ZC = [];
        for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
        wC.forEach((CC => {
          const QC = CC.subscribe((CC => {
            zC.notify(CC)
          }));
          ZC.push(QC)
        }));
        const nC = zC.unsubscribeAll.bind(zC);
        return zC.unsubscribe = () => {
          ZC.forEach((CC => CC.unsubscribe())), nC()
        }, zC
      }
      withUnsubscribeOverride(CC, zC, ZC) {
        return CC.unsubscribe = CC => {
          zC(CC), this.unsubscribe(ZC)
        }, CC
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let RZ = function(CC) {
      return CC.TRACE = "trace", CC.DEBUG = "debug", CC.INFO = "info", CC.LOG = "log", CC.WARN = "warn", CC.ERROR = "error", CC
    }({});
    const AZ = "log",
      xZ = ["trace", "debug", "info", "log", "warn", "error"];
    let JZ, IZ = !1;
    const iZ = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      vZ = "Error",
      eZ = CC => CC.map((CC => hC(CC) ? lz(CC) : String(CC))).join(" ");

    function hZ(CC) {
      let zC, ZC, QC, wC, bC = [];
      if (uC(CC) && CC.error) zC = CC.error.message, ZC = CC.error.name, bC = gZ(CC.error);
      else if ((QC = rC(CC)) || sC(CC)) {
        const {
          name: wC,
          message: bC
        } = CC;
        ZC = null !== wC && void 0 !== wC ? wC : QC ? "DOMError" : "DOMException", zC = bC ? `${ZC}: ${bC}` : ZC
      } else cC(CC) ? (ZC = CC.name, zC = CC.message, bC = gZ(CC)) : (hC(CC) || (wC = lC(CC))) && (ZC = wC ? CC.constructor.name : void 0, zC = `Non-Error exception captured with keys: ${Object.keys(CC)}`);
      return [zC, ZC, bC]
    }

    function KZ(CC) {
      const [zC, ZC, QC, wC, bC] = CC;
      let nC, fC, oC = [];
      const qC = JC(zC),
        FC = wZ(ZC, "?", QC, wC);
      return bC || !qC ? ([nC, fC, oC] = hZ(null !== bC && void 0 !== bC ? bC : zC), 0 === oC.length && (oC = [FC])) : qC && ([nC, fC] = function(CC) {
        var zC, ZC;
        const QC = CC.match(iZ),
          wC = null !== (zC = null === QC || void 0 === QC ? void 0 : QC[1]) && void 0 !== zC ? zC : vZ;
        return [null !== (ZC = null === QC || void 0 === QC ? void 0 : QC[2]) && void 0 !== ZC ? ZC : CC, wC]
      }(zC), oC = [FC]), {
        value: nC,
        type: fC,
        stackFrames: oC
      }
    }

    function YZ(CC, zC) {
      return cC(CC[0]) ? KZ(CC) : {
        value: zC(CC)
      }
    }
    const dZ = CC => CC.map((CC => {
      try {
        return String(CC)
      } catch (zC) {
        return ""
      }
    })).join(" ");
    var mZ = class CC extends zZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ZZ, this.errorSerializer = dZ
      }
      initialize() {
        var zC, ZC;
        const QC = this.config.consoleInstrumentation,
          wC = (null === QC || void 0 === QC ? void 0 : QC.serializeErrors) || !!(null === QC || void 0 === QC ? void 0 : QC.errorSerializer);
        this.errorSerializer = wC ? null !== (zC = null === QC || void 0 === QC ? void 0 : QC.errorSerializer) && void 0 !== zC ? zC : eZ : dZ;
        const bC = null !== (ZC = null === QC || void 0 === QC ? void 0 : QC.disabledLevels) && void 0 !== ZC ? ZC : CC.defaultDisabledLevels,
          nC = function(CC) {
            if (JZ || (JZ = new GZ), !IZ) {
              const zC = null !== CC && void 0 !== CC ? CC : Vz;
              xZ.forEach((CC => {
                console[CC] = function() {
                  for (var ZC, QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
                  JZ.notify({
                    type: "console",
                    level: CC,
                    args: wC
                  }), null === (ZC = zC[CC]) || void 0 === ZC || ZC.apply(console, wC)
                }
              })), IZ = !0
            }
            return JZ
          }(this.unpatchedConsole);
        this.subscription = nC.subscribe((zC => {
          let {
            level: ZC,
            args: wC
          } = zC;
          if (!bC.includes(ZC)) try {
            if (ZC !== RZ.ERROR || (null === QC || void 0 === QC ? void 0 : QC.consoleErrorAsLog))
              if (ZC === RZ.ERROR && (null === QC || void 0 === QC ? void 0 : QC.consoleErrorAsLog)) {
                const {
                  value: zC,
                  type: QC,
                  stackFrames: bC
                } = YZ(wC, this.errorSerializer);
                this.api.pushLog(zC ? [CC.consoleErrorPrefix + zC] : wC, {
                  level: ZC,
                  context: {
                    value: null !== zC && void 0 !== zC ? zC : "",
                    type: null !== QC && void 0 !== QC ? QC : "",
                    stackFrames: (null === bC || void 0 === bC ? void 0 : bC.length) ? eZ(bC) : ""
                  }
                })
              } else this.api.pushLog(wC, {
                level: ZC
              });
            else {
              const {
                value: zC,
                type: ZC,
                stackFrames: QC
              } = YZ(wC, this.errorSerializer);
              if (zC && !ZC && !QC) return void this.api.pushError(new Error(CC.consoleErrorPrefix + zC));
              this.api.pushError(new Error(CC.consoleErrorPrefix + zC), {
                type: ZC,
                stackFrames: QC
              })
            }
          } catch (nC) {
            this.logError(nC)
          }
        }))
      }
      destroy() {
        var CC;
        null === (CC = this.subscription) || void 0 === CC || CC.unsubscribe(), this.subscription = void 0
      }
    };
    mZ.defaultDisabledLevels = [RZ.DEBUG, RZ.TRACE, RZ.LOG], mZ.consoleErrorPrefix = "console.error: ";
    const HZ = [];
    var EZ = class extends zZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ZZ
      }
      initialize() {
        this.logDebug("Initializing"),
          function(CC) {
            const zC = window.onerror;
            window.onerror = function() {
              for (var ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
              try {
                const {
                  value: zC,
                  type: ZC,
                  stackFrames: wC
                } = KZ(QC), bC = QC[4];
                if (zC) {
                  const QC = {
                    type: ZC,
                    stackFrames: wC
                  };
                  null != bC && (QC.originalError = bC), CC.pushError(new Error(zC), QC)
                }
              } finally {
                null === zC || void 0 === zC || zC.apply(window, QC)
              }
            }
          }(this.api),
          function(CC) {
            const zC = zC => {
              var ZC;
              let QC, wC, bC = zC;
              if (bC.reason) bC = zC.reason;
              else if (null === (ZC = zC.detail) || void 0 === ZC ? void 0 : ZC.reason) {
                var nC;
                bC = null === (nC = zC.detail) || void 0 === nC ? void 0 : nC.reason
              }
              let fC = [];
              HC(bC) ? (QC = `Non-Error promise rejection captured with value: ${String(bC)}`, wC = "UnhandledRejection") : [QC, wC, fC] = hZ(bC), QC && CC.pushError(new Error(QC), {
                type: wC,
                stackFrames: fC
              })
            };
            window.addEventListener("unhandledrejection", zC), HZ.push(zC)
          }(this.api)
      }
    };
    const lZ = "unknown";
    var XZ = class extends zZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ZZ, this.waitingForActivation = !1, this.sendViewChangedEvent = CC => {
          var zC;
          if (this.waitingForActivation || document.prerendering) return;
          const ZC = CC.view;
          if (ZC && ZC.name !== (null === (zC = this.notifiedView) || void 0 === zC ? void 0 : zC.name)) {
            var QC, wC, bC;
            const CC = null !== (QC = null === (wC = this.notifiedView) || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : lZ;
            this.notifiedView = ZC, this.api.pushEvent(xz, {
              fromView: CC,
              toView: null !== (bC = ZC.name) && void 0 !== bC ? bC : lZ
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
    class cZ {
      t;
      o = 0;
      i = [];
      l(CC) {
        if (CC.hadRecentInput) return;
        const zC = this.i[0],
          ZC = this.i.at(-1);
        this.o && zC && ZC && CC.startTime - ZC.startTime < 1e3 && CC.startTime - zC.startTime < 5e3 ? (this.o += CC.value, this.i.push(CC)) : (this.o = CC.value, this.i = [CC]), this.t?.(CC)
      }
    }
    const uZ = () => {
        const CC = performance.getEntriesByType("navigation")[0];
        if (CC && CC.responseStart > 0 && CC.responseStart < performance.now()) return CC
      },
      rZ = CC => {
        if ("loading" === document.readyState) return "loading";
        const zC = uZ();
        if (zC) {
          if (CC < zC.domInteractive) return "loading";
          if (0 === zC.domContentLoadedEventStart || CC < zC.domContentLoadedEventStart) return "dom-interactive";
          if (0 === zC.domComplete || CC < zC.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      sZ = CC => {
        const zC = CC.nodeName;
        return 1 === CC.nodeType ? zC.toLowerCase() : zC.toUpperCase().replace(/^#/, "")
      },
      TZ = CC => {
        let zC = "";
        try {
          for (; 9 !== CC?.nodeType;) {
            const ZC = CC,
              QC = ZC.id ? "#" + ZC.id : [sZ(ZC), ...Array.from(ZC.classList ?? []).sort()].join(".");
            if (zC.length + QC.length > 99) return zC || QC;
            if (zC = zC ? QC + ">" + zC : QC, ZC.id) break;
            CC = ZC.parentNode
          }
        } catch {}
        return zC
      },
      aZ = new WeakMap;

    function tZ(CC, zC) {
      let ZC = aZ.get(zC);
      return ZC || (ZC = new WeakMap, aZ.set(zC, ZC)), ZC.get(CC) || ZC.set(CC, new zC), ZC.get(CC)
    }
    let DZ = -1;
    const jZ = () => DZ,
      yZ = CC => {
        addEventListener("pageshow", (zC => {
          zC.persisted && (DZ = zC.timeStamp, CC(zC))
        }), !0)
      },
      LZ = (CC, zC, ZC, QC) => {
        let wC, bC;
        return nC => {
          zC.value >= 0 && (nC || QC) && (bC = zC.value - (wC ?? 0), (bC || void 0 === wC) && (wC = zC.value, zC.delta = bC, zC.rating = ((CC, zC) => CC > zC[1] ? "poor" : CC > zC[0] ? "needs-improvement" : "good")(zC.value, ZC), CC(zC)))
        }
      },
      UZ = CC => {
        requestAnimationFrame((() => requestAnimationFrame((() => CC()))))
      },
      BZ = () => uZ()?.activationStart ?? 0;
    let OZ = -1;
    const kZ = new Set,
      VZ = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      CQ = CC => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === CC.type)
            for (const CC of kZ) CC();
          isFinite(OZ) || (OZ = "visibilitychange" === CC.type ? CC.timeStamp : 0, removeEventListener("prerenderingchange", CQ, !0))
        }
      },
      zQ = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (OZ = 1 / 0), OZ < 0) {
          const CC = BZ(),
            zC = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((zC => "hidden" === zC.name && zC.startTime >= CC))?.startTime;
          OZ = zC ?? VZ(), addEventListener("visibilitychange", CQ, !0), addEventListener("prerenderingchange", CQ, !0), yZ((() => {
            setTimeout((() => {
              OZ = VZ()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return OZ
          },
          onHidden(CC) {
            kZ.add(CC)
          }
        }
      },
      ZQ = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0,
          nC = arguments.length > 6 ? arguments[6] : void 0;
        const fC = uZ(),
          oC = fC?.navigationId || 0;
        let qC = "navigate";
        return ZC ? qC = ZC : jZ() >= 0 ? qC = "back-forward-cache" : fC && (document.prerendering || BZ() > 0 ? qC = "prerender" : document.wasDiscarded ? qC = "restore" : fC.type && (qC = fC.type.replace(/_/g, "-"))), {
          name: CC,
          value: zC,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: qC,
          navigationId: QC || oC,
          navigationInteractionId: wC,
          navigationURL: bC || fC?.name,
          navigationStartTime: nC || 0
        }
      },
      QQ = function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const QC = CC.filter((CC => PerformanceObserver.supportedEntryTypes.includes(CC)));
          if (QC.length > 0) {
            const CC = new PerformanceObserver((CC => {
              queueMicrotask((() => {
                const ZC = CC.getEntries();
                QC.length > 1 && ZC.sort(((CC, zC) => CC.startTime + CC.duration - (zC.startTime + zC.duration))), zC(ZC)
              }))
            }));
            for (const zC of QC) CC.observe({
              type: zC,
              buffered: !0,
              ...ZC
            });
            return CC
          }
        } catch {}
      },
      wQ = CC => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && CC && CC.reportSoftNavs,
      bQ = (CC, zC) => {
        if (CC.set(zC.navigationId, zC), CC.size > 2) {
          const zC = CC.keys().next().value;
          void 0 !== zC && CC.delete(zC)
        }
      },
      nQ = CC => {
        let zC = !1;
        return () => {
          zC || (CC(), zC = !0)
        }
      };
    class fQ {
      u
    }
    const oQ = CC => {
        document.prerendering ? addEventListener("prerenderingchange", CC, !0) : CC()
      },
      qQ = [1800, 3e3],
      FQ = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZC = wQ(zC);
        oQ((() => {
          const QC = tZ(zC, fQ),
            wC = zQ();
          let bC, nC = ZQ("FCP");
          const fC = QQ(["paint"], (CC => {
            for (const zC of CC) "first-contentful-paint" === zC.name && (fC.disconnect(), zC.startTime < wC.firstHiddenTime && (nC.value = Math.max(zC.startTime - BZ(), 0), nC.entries.push(zC), nC.navigationId = zC.navigationId || nC.navigationId, bC(!0)))
          }));
          fC && (bC = LZ(CC, nC, qQ, zC.reportAllChanges), yZ((ZC => {
            nC = ZQ("FCP", -1, "back-forward-cache", nC.navigationId, nC.navigationInteractionId, nC.navigationURL, jZ()), bC = LZ(CC, nC, qQ, zC.reportAllChanges), UZ((() => {
              nC.value = performance.now() - ZC.timeStamp, bC(!0)
            }))
          }))), ZC && QQ(["soft-navigation"], (ZC => {
            ZC.forEach((ZC => {
              QC.u && ZC.navigationId && bQ(QC.u, ZC);
              const wC = Math.max((ZC.presentationTime || ZC.paintTime || 0) - ZC.startTime, 0);
              nC = ZQ("FCP", wC, "soft-navigation", ZC.navigationId, ZC.interactionId, ZC.name, ZC.startTime), bC = LZ(CC, nC, qQ, zC.reportAllChanges), bC(!0)
            }))
          }), zC)
        }))
      },
      WQ = [.1, .25],
      NQ = CC => CC.find((CC => 1 === CC.node?.nodeType)) || CC[0];
    let MQ = 0,
      gQ = 1 / 0,
      SQ = 0;
    const pQ = CC => {
      for (const zC of CC) zC.interactionId && (gQ = Math.min(gQ, zC.interactionId), SQ = Math.max(SQ, zC.interactionId), MQ = SQ ? (SQ - gQ) / 7 + 1 : 0)
    };
    let PQ;
    const GQ = () => PQ ? MQ : performance.interactionCount ?? 0;
    class RQ {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return GQ() - this.h
      }
      D() {
        this.h = GQ(), this.v.length = 0, this.p.clear()
      }
      S(CC) {
        const zC = this.T(),
          ZC = Math.min(this.v.length - 1, Math.floor(zC / 50));
        return !zC || -1 !== ZC || "soft-navigation" !== CC && "back-forward-cache" !== CC ? this.v[ZC] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(CC) {
        if (this.m?.(CC), !CC.interactionId) return;
        const zC = this.v.at(-1);
        let ZC = this.p.get(CC.interactionId);
        if (ZC || this.v.length < 10 || CC.duration > zC.k) {
          if (ZC ? CC.duration > ZC.k ? (ZC.entries = [CC], ZC.k = CC.duration) : CC.duration === ZC.k && CC.startTime === ZC.entries[0].startTime && ZC.entries.push(CC) : (ZC = {
              id: CC.interactionId,
              entries: [CC],
              k: CC.duration
            }, this.p.set(ZC.id, ZC), this.v.push(ZC)), this.v.sort(((CC, zC) => zC.k - CC.k)), this.v.length > 10) {
            const CC = this.v.splice(10);
            for (const zC of CC) this.p.delete(zC.id)
          }
          this.M?.(ZC)
        }
      }
    }
    const AQ = CC => {
        const zC = "requestIdleCallback" in globalThis ? 1e3 : 0,
          ZC = globalThis.requestIdleCallback || setTimeout,
          QC = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) CC();
        else {
          const wC = nQ(CC);
          let bC = -1;
          const nC = () => {
            QC(bC), wC()
          };
          addEventListener("visibilitychange", nC, {
            once: !0,
            capture: !0
          }), bC = ZC((() => {
            removeEventListener("visibilitychange", nC, {
              capture: !0
            }), wC()
          }), {
            timeout: zC
          })
        }
      },
      xQ = [200, 500],
      JQ = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZC = tZ(zC = Object.assign({}, zC), RQ);
        let QC = [],
          wC = [],
          bC = 0;
        const nC = new WeakMap,
          fC = new WeakMap;
        let oC = !1;
        const qC = () => {
            oC || (oC = !0, AQ(FC))
          },
          FC = () => {
            const CC = new Set(ZC.v.map((CC => nC.get(CC.entries[0])))),
              zC = wC.length - 10;
            wC = wC.filter(((ZC, QC) => QC >= zC || CC.has(ZC)));
            const fC = new Set;
            for (const ZC of wC) {
              const CC = WC(ZC.startTime, ZC.processingEnd);
              for (const zC of CC) fC.add(zC)
            }
            const qC = QC.length - 10;
            QC = QC.filter(((CC, zC) => fC.has(CC) || zC >= qC && CC.startTime > bC)), oC = !1
          };
        ZC.m = CC => {
          const ZC = CC.startTime + CC.duration;
          let QC;
          bC = Math.max(bC, CC.processingEnd);
          for (let bC = wC.length - 1; bC >= 0; bC--) {
            const nC = wC[bC];
            if (Math.abs(ZC - nC.renderTime) <= 8) {
              QC = nC, QC.startTime = Math.min(CC.startTime, QC.startTime), QC.processingStart = Math.min(CC.processingStart, QC.processingStart), QC.processingEnd = Math.max(CC.processingEnd, QC.processingEnd), zC.includeProcessedEventEntries && QC.entries.push(CC);
              break
            }
          }
          QC || (QC = {
            startTime: CC.startTime,
            processingStart: CC.processingStart,
            processingEnd: CC.processingEnd,
            renderTime: ZC,
            entries: zC.includeProcessedEventEntries ? [CC] : []
          }, wC.push(QC)), CC.interactionId && nC.set(CC, QC), qC()
        }, ZC.M = CC => {
          if (!fC.get(CC)) {
            const ZC = CC.entries.find((CC => CC.target))?.target;
            if (ZC) {
              const QC = zC.generateTarget?.(ZC) ?? TZ(ZC);
              fC.set(CC, QC)
            } else {
              const zC = CC.entries.find((CC => CC.targetSelector))?.targetSelector;
              zC && fC.set(CC, zC)
            }
          }
        };
        const WC = (CC, zC) => {
          const ZC = [];
          for (const wC of QC)
            if (!(wC.startTime + wC.duration < CC)) {
              if (wC.startTime > zC) break;
              ZC.push(wC)
            } return ZC
        };
        QQ(["long-animation-frame"], (CC => {
            QC = QC.concat(CC), qC()
          }), zC),
          function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const ZC = zQ();
            oQ((() => {
              "interactionCount" in performance || PQ || (PQ = QQ(["event"], pQ, {
                durationThreshold: 0
              }));
              let QC, wC = ZQ("INP");
              const bC = tZ(zC, RQ),
                nC = (ZC, nC, fC, oC, qC) => {
                  bC.D(), wC = ZQ("INP", -1, ZC, nC, fC, oC, qC), QC = LZ(CC, wC, xQ, zC.reportAllChanges)
                },
                fC = () => {
                  const CC = bC.S(wC.navigationType);
                  CC && CC.k !== wC.value && (wC.value = CC.k, wC.entries = CC.entries, QC())
                },
                oC = CC => {
                  fC(), QC(!0), nC("soft-navigation", CC.navigationId, CC.interactionId, CC.name, CC.startTime)
                },
                qC = function(CC) {
                  let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  AQ((() => {
                    for (const zC of CC) "soft-navigation" !== zC.entryType ? bC.l(zC) : oC(zC);
                    fC(), zC && QC(!0)
                  }))
                },
                FC = ["event", "first-input"];
              wQ(zC) && FC.push("soft-navigation");
              const WC = QQ(FC, qC, {
                ...zC,
                durationThreshold: zC.durationThreshold ?? 40
              });
              QC = LZ(CC, wC, xQ, zC.reportAllChanges), WC && (ZC.onHidden((() => {
                qC(WC.takeRecords(), !0)
              })), yZ((() => {
                nC("back-forward-cache", wC.navigationId, wC.navigationInteractionId, wC.navigationURL, jZ())
              })))
            }))
          }((zC => {
            CC((CC => {
              if (0 === CC.entries.length) {
                const zC = CC.navigationStartTime || 0,
                  ZC = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: CC.value,
                    loadState: rZ(zC)
                  };
                return Object.assign(CC, {
                  attribution: ZC
                })
              }
              const zC = CC.entries[0],
                QC = nC.get(zC),
                wC = Math.max(QC.processingStart, zC.startTime),
                bC = Math.max(zC.startTime + zC.duration, wC),
                oC = Math.min(QC.processingEnd, bC),
                qC = QC.entries.sort(((CC, zC) => CC.processingStart - zC.processingStart)),
                FC = WC(zC.startTime, oC),
                NC = ZC.p.get(zC.interactionId),
                MC = {
                  interactionTarget: fC.get(NC),
                  interactionType: zC.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: zC.startTime,
                  nextPaintTime: bC,
                  processedEventEntries: qC,
                  longAnimationFrameEntries: FC,
                  inputDelay: wC - zC.startTime,
                  processingDuration: oC - wC,
                  presentationDelay: bC - oC,
                  loadState: rZ(zC.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (CC => {
                const zC = CC.interactionTime,
                  ZC = CC.nextPaintTime;
                if (!CC.longAnimationFrameEntries?.length || !zC || !ZC) return;
                const QC = CC.inputDelay,
                  wC = CC.processingDuration;
                let bC, nC, fC = 0,
                  oC = 0,
                  qC = 0,
                  FC = 0;
                for (const MC of CC.longAnimationFrameEntries) {
                  oC = oC + MC.startTime + MC.duration - MC.styleAndLayoutStart;
                  for (const CC of MC.scripts) {
                    const ZC = CC.startTime + CC.duration;
                    if (ZC < zC) continue;
                    const qC = ZC - Math.max(zC, CC.startTime),
                      WC = CC.duration ? qC / CC.duration * CC.forcedStyleAndLayoutDuration : 0;
                    fC += qC - WC, oC += WC, qC > FC && (nC = CC.startTime < zC + QC ? "input-delay" : CC.startTime >= zC + QC + wC ? "presentation-delay" : "processing-duration", bC = CC, FC = qC)
                  }
                }
                const WC = CC.longAnimationFrameEntries.at(-1),
                  NC = WC ? WC.startTime + WC.duration : 0;
                NC >= zC + QC + wC && (qC = ZC - NC), bC && nC && (CC.longestScript = {
                  entry: bC,
                  subpart: nC,
                  intersectingDuration: FC
                }), CC.totalScriptDuration = fC, CC.totalStyleAndLayoutDuration = oC, CC.totalPaintDuration = qC, CC.totalUnattributedDuration = ZC - zC - fC - oC - qC
              })(MC), Object.assign(CC, {
                attribution: MC
              })
            })(zC))
          }), zC)
      };
    class IQ {
      m;
      u;
      l(CC) {
        this.m?.(CC)
      }
    }
    const iQ = [2500, 4e3];
    let vQ = 50;
    const eQ = [];
    QQ(["resource"], (CC => {
      for (const zC of CC) eQ.push(zC), eQ.length > vQ && eQ.shift()
    }));
    const hQ = [800, 1800],
      KQ = CC => {
        document.prerendering ? oQ((() => KQ(CC))) : "complete" !== document.readyState ? addEventListener("load", (() => KQ(CC)), !0) : setTimeout(CC)
      },
      YQ = "load_state",
      dQ = "time_to_first_byte";
    var mQ = class {
        constructor(CC, zC) {
          this.corePushMeasurement = CC, this.webVitalConfig = zC
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var CC;
          ! function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZC = tZ(zC = Object.assign({}, zC), cZ),
              QC = new WeakMap;
            ZC.t = CC => {
                if (CC?.sources?.length) {
                  const ZC = NQ(CC.sources),
                    wC = ZC?.node;
                  if (wC) {
                    const CC = zC.generateTarget?.(wC) ?? TZ(wC);
                    QC.set(ZC, CC)
                  }
                }
              },
              function(CC) {
                let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const ZC = zQ();
                FQ(nQ((() => {
                  let QC, wC = ZQ("CLS", 0);
                  const bC = tZ(zC, cZ),
                    nC = (ZC, nC, fC, oC, qC) => {
                      wC = ZQ("CLS", 0, ZC, nC, fC, oC, qC), bC.o = 0, QC = LZ(CC, wC, WQ, zC.reportAllChanges)
                    },
                    fC = function() {
                      let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      bC.o > wC.value && (wC.value = bC.o, wC.entries = bC.i), QC(CC)
                    },
                    oC = CC => {
                      fC(!0), nC("soft-navigation", CC.navigationId, CC.interactionId, CC.name, CC.startTime)
                    },
                    qC = CC => {
                      for (const zC of CC) "soft-navigation" !== zC.entryType ? bC.l(zC) : oC(zC);
                      fC()
                    },
                    FC = ["layout-shift"];
                  wQ(zC) && FC.push("soft-navigation");
                  const WC = QQ(FC, qC);
                  WC && (QC = LZ(CC, wC, WQ, zC.reportAllChanges), ZC.onHidden((() => {
                    qC(WC.takeRecords()), QC(!0)
                  })), yZ((() => {
                    nC("back-forward-cache", wC.navigationId, wC.navigationInteractionId, wC.navigationURL, jZ()), UZ(QC)
                  })), setTimeout(QC))
                })))
              }((zC => {
                CC((CC => {
                  let zC = {};
                  if (CC.entries.length) {
                    const ZC = CC.entries.reduce(((CC, zC) => CC.value > zC.value ? CC : zC));
                    if (ZC?.sources?.length) {
                      const CC = NQ(ZC.sources);
                      CC && (zC = {
                        largestShiftTarget: QC.get(CC),
                        largestShiftTime: ZC.startTime,
                        largestShiftValue: ZC.value,
                        largestShiftSource: CC,
                        largestShiftEntry: ZC,
                        loadState: rZ(ZC.startTime)
                      })
                    }
                  }
                  return Object.assign(CC, {
                    attribution: zC
                  })
                })(zC))
              }), zC)
          }((CC => {
            const {
              loadState: zC,
              largestShiftValue: ZC,
              largestShiftTime: QC,
              largestShiftTarget: wC
            } = CC.attribution, bC = this.buildInitialValues(CC);
            this.addIfPresent(bC, "largest_shift_value", ZC), this.addIfPresent(bC, "largest_shift_time", QC);
            const nC = this.buildInitialContext(CC);
            this.addIfPresent(nC, YQ, zC), this.addIfPresent(nC, "largest_shift_target", wC), this.pushMeasurement(bC, nC)
          }), {
            reportAllChanges: null === (CC = this.webVitalConfig) || void 0 === CC ? void 0 : CC.reportAllChanges
          })
        }
        measureFCP() {
          var CC;
          ! function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ZC = tZ(zC = Object.assign({}, zC), fQ);
            wQ(zC) && (ZC.u = new Map), FQ((zC => {
              CC((CC => {
                let zC = {
                  timeToFirstByte: 0,
                  firstByteToFCP: CC.value,
                  loadState: rZ(jZ())
                };
                if ("soft-navigation" !== CC.navigationType) {
                  if (CC.entries.length) {
                    const ZC = uZ(),
                      QC = CC.entries.at(-1);
                    if (ZC) {
                      const wC = ZC.responseStart,
                        bC = ZC.activationStart || 0,
                        nC = Math.max(0, wC - bC);
                      zC = {
                        timeToFirstByte: nC,
                        firstByteToFCP: CC.value - nC,
                        loadState: rZ(CC.entries[0].startTime),
                        navigationEntry: ZC,
                        fcpEntry: QC
                      }
                    }
                  }
                } else {
                  const QC = ZC.u?.get(CC.navigationId);
                  QC && (zC = {
                    timeToFirstByte: 0,
                    firstByteToFCP: CC.value,
                    loadState: "complete",
                    navigationEntry: QC
                  })
                }
                return Object.assign(CC, {
                  attribution: zC
                })
              })(zC))
            }), zC)
          }((CC => {
            const {
              firstByteToFCP: zC,
              timeToFirstByte: ZC,
              loadState: QC
            } = CC.attribution, wC = this.buildInitialValues(CC);
            this.addIfPresent(wC, "first_byte_to_fcp", zC), this.addIfPresent(wC, dQ, ZC);
            const bC = this.buildInitialContext(CC);
            this.addIfPresent(bC, YQ, QC), this.pushMeasurement(wC, bC)
          }), {
            reportAllChanges: null === (CC = this.webVitalConfig) || void 0 === CC ? void 0 : CC.reportAllChanges
          })
        }
        measureINP() {
          var CC;
          JQ((CC => {
            var zC;
            const {
              interactionTime: ZC,
              presentationDelay: QC,
              inputDelay: wC,
              processingDuration: bC,
              nextPaintTime: nC,
              loadState: fC,
              interactionTarget: oC,
              interactionType: qC,
              totalScriptDuration: FC,
              totalStyleAndLayoutDuration: WC,
              totalPaintDuration: NC,
              totalUnattributedDuration: MC,
              longestScript: gC
            } = CC.attribution, SC = this.buildInitialValues(CC);
            this.addIfPresent(SC, "interaction_time", ZC), this.addIfPresent(SC, "presentation_delay", QC), this.addIfPresent(SC, "input_delay", wC), this.addIfPresent(SC, "processing_duration", bC), this.addIfPresent(SC, "next_paint_time", nC), this.addNumberIfDefined(SC, "total_script_duration", FC), this.addNumberIfDefined(SC, "total_style_and_layout_duration", WC), this.addNumberIfDefined(SC, "total_paint_duration", NC), this.addNumberIfDefined(SC, "total_unattributed_duration", MC), this.addNumberIfDefined(SC, "longest_script_intersecting_duration", null === gC || void 0 === gC ? void 0 : gC.intersectingDuration);
            const pC = this.buildInitialContext(CC);
            this.addIfPresent(pC, YQ, fC), this.addIfPresent(pC, "interaction_target", oC), this.addIfPresent(pC, "interaction_type", qC), this.addIfPresent(pC, "longest_script_subpart", null === gC || void 0 === gC ? void 0 : gC.subpart), this.addIfPresent(pC, "longest_script_invoker_type", null === gC || void 0 === gC ? void 0 : gC.entry.invokerType), (null === (zC = this.webVitalConfig) || void 0 === zC ? void 0 : zC.trackAttributionSources) && (this.addIfPresent(pC, "longest_script_invoker", null === gC || void 0 === gC ? void 0 : gC.entry.invoker), this.addIfPresent(pC, "longest_script_source_url", null === gC || void 0 === gC ? void 0 : gC.entry.sourceURL), this.addIfPresent(pC, "longest_script_source_function_name", null === gC || void 0 === gC ? void 0 : gC.entry.sourceFunctionName), this.addIfPresent(pC, "longest_script_source_char_position", void 0 !== (null === gC || void 0 === gC ? void 0 : gC.entry.sourceCharPosition) ? String(gC.entry.sourceCharPosition) : void 0)), this.pushMeasurement(SC, pC)
          }), {
            reportAllChanges: null === (CC = this.webVitalConfig) || void 0 === CC ? void 0 : CC.reportAllChanges
          })
        }
        measureLCP() {
          var CC;
          ! function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (zC = Object.assign({}, zC)).resourceBufferSize && (vQ = zC.resourceBufferSize);
            const ZC = tZ(zC, IQ),
              QC = new WeakMap;
            wQ(zC) && (ZC.u = new Map), ZC.m = CC => {
                const ZC = CC.element;
                if (ZC) {
                  const wC = zC.generateTarget?.(ZC) ?? TZ(ZC);
                  QC.set(CC, wC)
                } else CC.id && QC.set(CC, `#${CC.id}`)
              },
              function(CC) {
                let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  ZC = !1;
                const QC = wQ(zC);
                oQ((() => {
                  let wC, bC = zQ(),
                    nC = ZQ("LCP");
                  const fC = tZ(zC, IQ),
                    oC = (QC, fC, oC, qC, FC) => {
                      nC = ZQ("LCP", -1, QC, fC, oC, qC, FC), wC = LZ(CC, nC, iQ, zC.reportAllChanges), ZC = !1, "soft-navigation" === QC && (bC = zQ(!0))
                    },
                    qC = CC => {
                      fC.u && CC.navigationId && bQ(fC.u, CC), ZC || wC(!0), oC("soft-navigation", CC.navigationId, CC.interactionId, CC.name, CC.startTime);
                      const zC = CC.getLargestInteractionContentfulPaint?.();
                      zC && FC([zC])
                    },
                    FC = CC => {
                      zC.reportAllChanges || QC || (CC = CC.slice(-1));
                      for (const zC of CC) {
                        if (!zC) continue;
                        if ("soft-navigation" === zC.entryType) {
                          qC(zC);
                          continue
                        }
                        let CC = 0,
                          ZC = [],
                          QC = zC.startTime;
                        if ("largest-contentful-paint" === zC.entryType) CC = Math.max(zC.startTime - BZ(), 0), fC.l(zC), ZC = [zC];
                        else if ("interaction-contentful-paint" === zC.entryType) {
                          const wC = zC;
                          if (!nC.navigationId) continue;
                          if ("interactionId" in wC && wC.interactionId != nC.navigationInteractionId) continue;
                          QC = wC.largestContentfulPaint?.renderTime || 0, CC = Math.max(QC - zC.startTime, 0), wC.largestContentfulPaint && (fC.l(wC.largestContentfulPaint), ZC = [wC.largestContentfulPaint])
                        }
                        QC < bC.firstHiddenTime && (nC.value = CC, nC.entries = ZC, wC())
                      }
                    },
                    WC = ["largest-contentful-paint"];
                  QC && WC.push("interaction-contentful-paint", "soft-navigation");
                  const NC = QQ(WC, FC);
                  if (NC) {
                    wC = LZ(CC, nC, iQ, zC.reportAllChanges);
                    const bC = ["keydown", "click", "visibilitychange"],
                      fC = CC => {
                        if (CC.isTrusted && !ZC) {
                          const CC = nC.id;
                          AQ((() => {
                            if (!ZC) {
                              if (!QC) {
                                NC.disconnect();
                                for (const CC of bC) removeEventListener(CC, fC, {
                                  capture: !0
                                })
                              }
                              CC === nC.id && (ZC = !0, wC(!0))
                            }
                          }))
                        }
                      };
                    for (const CC of bC) addEventListener(CC, fC, {
                      capture: !0
                    });
                    yZ((QC => {
                      oC("back-forward-cache", nC.navigationId, nC.navigationInteractionId, nC.navigationURL, jZ()), wC = LZ(CC, nC, iQ, zC.reportAllChanges), UZ((() => {
                        nC.value = performance.now() - QC.timeStamp, ZC = !0, wC(!0)
                      }))
                    }))
                  }
                }))
              }((zC => {
                CC((CC => {
                  let zC = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: CC.value
                  };
                  if (CC.entries.length) {
                    const wC = CC.entries.at(-1),
                      bC = CC => CC.name === wC.url && (CC.requestStart || CC.startTime) <= wC.startTime,
                      nC = wC.url && (eQ.findLast(bC) || performance.getEntriesByType("resource").findLast(bC));
                    let fC;
                    zC.target = QC.get(wC), zC.lcpEntry = wC, wC.url && (zC.url = wC.url), nC && (zC.lcpResourceEntry = nC);
                    let oC = 0,
                      qC = 0;
                    if ("soft-navigation" !== CC.navigationType ? (fC = uZ(), oC = fC?.activationStart ?? 0, qC = fC?.responseStart ?? 0) : (oC = CC.navigationStartTime || 0, fC = ZC.u?.get(CC.navigationId)), fC) {
                      const ZC = Math.max(0, qC - oC),
                        QC = Math.max(ZC, nC ? (nC.requestStart || nC.startTime) - oC : 0),
                        wC = Math.min(CC.value, Math.max(QC, nC ? nC.responseEnd - oC : 0));
                      zC = {
                        ...zC,
                        timeToFirstByte: ZC,
                        resourceLoadDelay: QC - ZC,
                        resourceLoadDuration: wC - QC,
                        elementRenderDelay: CC.value - wC,
                        navigationEntry: fC
                      }
                    }
                  }
                  return Object.assign(CC, {
                    attribution: zC
                  })
                })(zC))
              }), zC)
          }((CC => {
            var zC;
            const {
              elementRenderDelay: ZC,
              resourceLoadDelay: QC,
              resourceLoadDuration: wC,
              timeToFirstByte: bC,
              target: nC,
              url: fC,
              lcpResourceEntry: oC
            } = CC.attribution, qC = this.buildInitialValues(CC);
            this.addIfPresent(qC, "element_render_delay", ZC), this.addIfPresent(qC, "resource_load_delay", QC), this.addIfPresent(qC, "resource_load_duration", wC), this.addIfPresent(qC, dQ, bC);
            const FC = this.buildInitialContext(CC);
            this.addIfPresent(FC, "element", nC), (null === (zC = this.webVitalConfig) || void 0 === zC ? void 0 : zC.trackAttributionSources) && (this.addIfPresent(FC, "resource_url", fC), this.addIfPresent(FC, "resource_delivery_type", null === oC || void 0 === oC ? void 0 : oC.deliveryType), this.addIfPresent(FC, "resource_initiator_type", null === oC || void 0 === oC ? void 0 : oC.initiatorType)), this.pushMeasurement(qC, FC)
          }), {
            reportAllChanges: null === (CC = this.webVitalConfig) || void 0 === CC ? void 0 : CC.reportAllChanges
          })
        }
        measureTTFB() {
          var CC;
          ! function(CC) {
            ! function(CC) {
              let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const ZC = wQ(zC);
              let QC = ZQ("TTFB"),
                wC = LZ(CC, QC, hQ, zC.reportAllChanges);
              KQ((() => {
                const bC = uZ();
                if (bC) {
                  const nC = bC.responseStart;
                  QC.value = Math.max(nC - BZ(), 0), QC.entries = [bC], wC(!0), yZ((() => {
                    QC = ZQ("TTFB", 0, "back-forward-cache", QC.navigationId, QC.navigationInteractionId, QC.navigationURL, jZ()), wC = LZ(CC, QC, hQ, zC.reportAllChanges), wC(!0)
                  })), ZC && QQ(["soft-navigation"], (ZC => {
                    ZC.forEach((ZC => {
                      ZC.navigationId && (QC = ZQ("TTFB", 0, "soft-navigation", ZC.navigationId, ZC.interactionId, ZC.name, ZC.startTime), QC.entries = [ZC], wC = LZ(CC, QC, hQ, zC.reportAllChanges), wC(!0))
                    }))
                  }), zC)
                }
              }))
            }((zC => {
              CC((CC => {
                const zC = CC.entries[0];
                let ZC = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: zC
                };
                if (CC.entries.length && zC instanceof PerformanceNavigationTiming) {
                  const QC = zC.activationStart || 0,
                    wC = Math.max((zC.workerStart || zC.fetchStart || 0) - QC, 0),
                    bC = Math.max(zC.domainLookupStart - QC, 0),
                    nC = Math.max(zC.connectStart - QC, 0),
                    fC = Math.max(zC.connectEnd - QC, 0);
                  ZC = {
                    waitingDuration: wC,
                    cacheDuration: bC - wC,
                    dnsDuration: nC - bC,
                    connectionDuration: fC - nC,
                    requestDuration: CC.value - fC,
                    navigationEntry: zC
                  }
                }
                return Object.assign(CC, {
                  attribution: ZC
                })
              })(zC))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((CC => {
            const {
              dnsDuration: zC,
              connectionDuration: ZC,
              requestDuration: QC,
              waitingDuration: wC,
              cacheDuration: bC
            } = CC.attribution, nC = this.buildInitialValues(CC);
            this.addIfPresent(nC, "dns_duration", zC), this.addIfPresent(nC, "connection_duration", ZC), this.addIfPresent(nC, "request_duration", QC), this.addIfPresent(nC, "waiting_duration", wC), this.addIfPresent(nC, "cache_duration", bC);
            const fC = this.buildInitialContext(CC);
            this.pushMeasurement(nC, fC)
          }), {
            reportAllChanges: null === (CC = this.webVitalConfig) || void 0 === CC ? void 0 : CC.reportAllChanges
          })
        }
        buildInitialValues(CC) {
          return {
            [CC.name.toLowerCase()]: CC.value,
            delta: CC.delta
          }
        }
        buildInitialContext(CC) {
          var zC;
          const ZC = null !== (zC = Cz("com.grafana.faro.lastNavigationId", OC)) && void 0 !== zC ? zC : lZ;
          return {
            id: CC.id,
            rating: CC.rating,
            navigation_type: CC.navigationType,
            navigation_entry_id: ZC
          }
        }
        pushMeasurement(CC, zC) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: CC
          }, {
            context: zC
          })
        }
        addIfPresent(CC, zC, ZC) {
          ZC && (CC[zC] = ZC)
        }
        addNumberIfDefined(CC, zC, ZC) {
          void 0 !== ZC && (CC[zC] = ZC)
        }
      },
      HQ = class extends zZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ZZ
        }
        initialize() {
          this.logDebug("Initializing"), new mQ(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const EQ = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function lQ() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const zC of CC)
        if ("traceparent" === zC.name) {
          if (!EQ.test(zC.description)) continue;
          const [, CC, ZC] = zC.description.split("-");
          if (null != CC && null != ZC) return {
            traceId: CC,
            spanId: ZC
          };
          break
        }
    }

    function XQ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: ZC,
        monoNow: QC
      } = zC;
      return Math.min(ZC, ZC - (QC - CC))
    }

    function cQ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [ZC, QC] of Object.entries(zC)) {
        const zC = CC[ZC];
        return null != zC && (YC(QC) ? QC.includes(zC) : zC === QC)
      }
      return !0
    }

    function uQ(CC) {
      const {
        connectEnd: zC,
        connectStart: ZC,
        decodedBodySize: QC,
        domainLookupEnd: wC,
        domainLookupStart: bC,
        duration: nC,
        encodedBodySize: fC,
        fetchStart: oC,
        initiatorType: qC,
        name: FC,
        nextHopProtocol: WC,
        redirectEnd: NC,
        redirectStart: MC,
        renderBlockingStatus: gC,
        requestStart: SC,
        responseEnd: pC,
        responseStart: PC,
        responseStatus: GC,
        secureConnectionStart: RC,
        transferSize: AC,
        workerStart: xC
      } = CC;
      return {
        name: FC,
        httpHost: sQ(FC),
        duration: TQ(nC),
        tcpHandshakeTime: TQ(zC - ZC),
        dnsLookupTime: TQ(wC - bC),
        tlsNegotiationTime: TQ(zC - RC),
        responseStatus: TQ(GC),
        redirectTime: TQ(NC - MC),
        requestTime: TQ(PC - SC),
        responseTime: TQ(pC - PC),
        fetchTime: TQ(pC - oC),
        serviceWorkerTime: TQ(xC > 0 ? oC - xC : 0),
        decodedBodySize: TQ(QC),
        encodedBodySize: TQ(fC),
        cacheHitStatus: function() {
          let CC = "fullLoad";
          0 === AC ? QC > 0 && (CC = "cache") : null != GC ? 304 === GC && (CC = "conditionalFetch") : fC > 0 && AC < fC && (CC = "conditionalFetch");
          return CC
        }(),
        renderBlockingStatus: TQ(gC),
        protocol: WC,
        initiatorType: qC,
        visibilityState: document.visibilityState,
        ttfb: TQ(PC - SC),
        transferSize: TQ(AC)
      }
    }

    function rQ(CC) {
      const {
        activationStart: zC,
        domComplete: ZC,
        domContentLoadedEventEnd: QC,
        domContentLoadedEventStart: wC,
        domInteractive: bC,
        fetchStart: nC,
        loadEventEnd: fC,
        loadEventStart: oC,
        responseStart: qC,
        type: FC
      } = CC, WC = function() {
        var CC;
        return null != (null === (CC = performance.timing) || void 0 === CC ? void 0 : CC.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Fz(Fz({}, uQ(CC)), {}, {
        pageLoadTime: TQ(ZC - nC),
        documentParsingTime: TQ(WC ? bC - WC : null),
        domProcessingTime: TQ(ZC - bC),
        domContentLoadHandlerTime: TQ(QC - wC),
        onLoadTime: TQ(fC - oC),
        ttfb: TQ(Math.max(qC - (null !== zC && void 0 !== zC ? zC : 0), 0)),
        type: FC
      })
    }

    function sQ(CC) {
      try {
        return new URL(CC).host || lZ
      } catch (zC) {
        return lZ
      }
    }

    function TQ(CC) {
      return null == CC ? lZ : "number" === typeof CC ? Math.round(CC > 0 ? CC : 0).toString() : CC.toString()
    }
    const aQ = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function tQ(CC, zC, ZC, QC, wC, bC, nC) {
      try {
        var fC = CC[bC](nC),
          oC = fC.value
      } catch (CC) {
        return void ZC(CC)
      }
      fC.done ? zC(oC) : Promise.resolve(oC).then(QC, wC)
    }

    function DQ(CC) {
      return function() {
        var zC = this,
          ZC = arguments;
        return new Promise((function(QC, wC) {
          var bC = CC.apply(zC, ZC);

          function nC(CC) {
            tQ(bC, QC, wC, nC, fC, "next", CC)
          }

          function fC(CC) {
            tQ(bC, QC, wC, nC, fC, "throw", CC)
          }
          nC(void 0)
        }))
      }
    }
    const jQ = new GZ;
    var yQ = class extends zZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ZZ
      }
      initialize() {
        var CC = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let zC = !1;
        const ZC = () => {
          ! function(CC) {
            if ("complete" === document.readyState) CC();
            else {
              const zC = () => {
                "complete" === document.readyState && (CC(), document.removeEventListener("readystatechange", zC))
              };
              document.addEventListener("readystatechange", zC)
            }
          }(DQ((function*() {
            if (zC) return;
            const ZC = CC.api.pushEvent,
              {
                faroNavigationId: QC
              } = yield function(CC) {
                let zC;
                const ZC = new Promise((CC => {
                  zC = CC
                }));
                return new PerformanceObserver((ZC => {
                  var QC;
                  const [wC] = ZC.getEntries();
                  if (null == wC || UC(wC.name)) return;
                  const bC = wC.toJSON();
                  let nC = lQ(null === bC || void 0 === bC ? void 0 : bC.serverTiming);
                  const fC = null !== (QC = Cz("com.grafana.faro.lastNavigationId", OC)) && void 0 !== QC ? QC : lZ,
                    oC = Fz(Fz({}, rQ(bC)), {}, {
                      faroNavigationId: Pz(),
                      faroPreviousNavigationId: fC
                    });
                  zz("com.grafana.faro.lastNavigationId", oC.faroNavigationId, OC), CC("faro.performance.navigation", oC, void 0, {
                    spanContext: nC,
                    timestampOverwriteMs: XQ(bC.startTime)
                  }), zC(oC)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), ZC
              }(ZC);
            zC || null == QC || function(CC, zC, ZC, QC) {
              const wC = QC.trackResources;
              new PerformanceObserver((QC => {
                const bC = QC.getEntries(),
                  nC = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const fC of bC) {
                  if (UC(fC.name)) continue;
                  null === ZC || void 0 === ZC || ZC.notify({
                    type: "resource"
                  });
                  const QC = fC.toJSON();
                  let bC = lQ(null === QC || void 0 === QC ? void 0 : QC.serverTiming);
                  (null == wC && cQ(QC, aQ) || wC) && zC("faro.performance.resource", Fz(Fz({}, uQ(QC)), {}, {
                    faroNavigationId: CC,
                    faroResourceId: Pz()
                  }), void 0, {
                    spanContext: bC,
                    timestampOverwriteMs: XQ(QC.startTime, nC)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(QC, ZC, jQ, CC.config)
          })))
        };
        this.cancelInitialization = () => {
          zC = !0, document.removeEventListener("prerenderingchange", ZC)
        }, document.prerendering ? document.addEventListener("prerenderingchange", ZC, {
          once: !0
        }) : ZC()
      }
      destroy() {
        var CC;
        null === (CC = this.cancelInitialization) || void 0 === CC || CC.call(this), this.cancelInitialization = void 0
      }
    };
    const LQ = "data-faro-user-action-name",
      UQ = LQ.replace(/-name$/, "-timeout"),
      BQ = 1e3;

    function OQ(CC) {
      return `data-${(CC.startsWith("data-")?CC.slice(5):CC).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function kQ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz;
      if (void 0 === CC) return zC;
      let QC = NaN;
      try {
        QC = "string" === typeof CC && "" === CC.trim() ? NaN : Number(CC)
      } catch (wC) {}
      return !Number.isFinite(QC) || QC <= 0 ? (ZC(`initialActivityTimeout must be a finite number greater than zero; using ${zC} ms`), zC) : QC > 1e3 ? (ZC(`initialActivityTimeout cannot exceed ${BQ} ms; clamping to the maximum`), BQ) : QC
    }

    function VQ(CC, zC, ZC) {
      return void 0 !== CC && window.clearTimeout(CC), window.setTimeout((() => {
        zC()
      }), ZC)
    }

    function Cw(CC) {
      return CC.type === PZ
    }
    let zw, Zw;

    function Qw() {
      return zw || (zw = new GZ), Zw || (Zw = new MutationObserver(((CC, zC) => {
        zw.notify({
          type: "dom-mutation"
        })
      })), Zw.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), zw
    }
    const ww = "fetch",
      bw = "xhr";
    let nw, fw, ow, qw, Fw = !1;

    function Ww() {
      if (nw) return nw;

      function CC(CC) {
        nw.notify({
          type: pZ,
          request: CC
        })
      }

      function zC(CC) {
        nw.notify({
          type: PZ,
          request: CC
        })
      }
      return nw = new GZ, Fw || (! function(CC) {
        let {
          onRequestEnd: zC,
          onRequestStart: ZC
        } = CC;
        ow || (ow = window.fetch);
        window.fetch = function() {
          var CC, QC;
          const wC = null !== (CC = BC(arguments[0])) && void 0 !== CC ? CC : "",
            bC = UC(wC),
            nC = (null !== (QC = arguments[1]) && void 0 !== QC ? QC : {}).method,
            fC = Pz();
          return bC || ZC({
            url: wC,
            method: nC,
            requestId: fC,
            apiType: ww
          }), ow.apply(this, arguments).then((CC => (bC || zC({
            url: wC,
            method: nC,
            requestId: fC,
            apiType: ww
          }), CC))).catch((CC => {
            throw bC || zC({
              url: wC,
              method: nC,
              requestId: fC,
              apiType: ww
            }), CC
          }))
        }
      }({
        onRequestStart: CC,
        onRequestEnd: zC
      }), function(CC) {
        let {
          onRequestStart: zC,
          onRequestEnd: ZC
        } = CC;
        fw || (fw = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const CC = arguments[1],
            QC = UC(CC),
            wC = arguments[0],
            bC = Pz();
          this.addEventListener("loadstart", (function() {
            QC || zC({
              url: CC,
              method: wC,
              requestId: bC,
              apiType: bw
            })
          })), this.addEventListener("load", (function() {
            QC || ZC({
              url: CC,
              method: wC,
              requestId: bC,
              apiType: bw
            })
          })), this.addEventListener("error", (function() {
            QC || ZC({
              url: CC,
              method: wC,
              requestId: bC,
              apiType: bw
            })
          })), this.addEventListener("abort", (function() {
            QC || ZC({
              url: CC,
              method: wC,
              requestId: bC,
              apiType: bw
            })
          })), fw.apply(this, arguments)
        }
      }({
        onRequestStart: CC,
        onRequestEnd: zC
      }), Fw = !0), nw
    }
    let Nw, Mw = !1;
    let gw = function(CC) {
      return CC[CC.Started = 0] = "Started", CC[CC.Halted = 1] = "Halted", CC[CC.Cancelled = 2] = "Cancelled", CC[CC.Ended = 3] = "Ended", CC
    }({});
    var Sw = class {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = CC, this.logDebug = zC, this.initialActivityTimeout = ZC, this.http = Ww(), this.dom = Qw(), this.perf = (qw || (qw = new GZ), Mw || (Nw = jQ.subscribe((CC => {
          "resource" === CC.type && qw.notify({
            type: "resource-entry"
          })
        })), Mw = !0), qw), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new GZ).merge(this.http, this.dom, this.perf).takeWhile((() => [gw.Started, gw.Halted].includes(this.userAction.getState()))).filter((CC => !!(this.userAction.getState() !== gw.Halted || Cw(CC) && this.runningRequests.has(CC.request.requestId)))).subscribe((CC => {
          (function(CC) {
            return CC.type === pZ
          })(CC) && this.runningRequests.set(CC.request.requestId, CC.request), Cw(CC) && this.runningRequests.delete(CC.request.requestId), Cw(CC) ? this.userAction.getState() === gw.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((CC => [gw.Ended, gw.Cancelled].includes(CC))).first().subscribe((() => this.cleanup())), this.startupTid = VQ(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === gw.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === gw.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = VQ(this.haltTid, (() => {
          this.userAction.getState() === gw.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var CC, zC;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (CC = this.allMonitorsSub) || void 0 === CC || CC.unsubscribe(), null === (zC = this.stateSub) || void 0 === zC || zC.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(CC) {
        void 0 !== CC && window.clearTimeout(CC)
      }
    };

    function pw(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tz;
      var ZC;
      const {
        api: QC,
        config: wC,
        internalLogger: bC
      } = CC, nC = kQ(null === (ZC = wC.userActionsInstrumentation) || void 0 === ZC ? void 0 : ZC.initialActivityTimeout, 100, zC);
      return {
        processUserEvent: function(CC) {
          var zC, ZC;
          const bC = null !== (zC = null === (ZC = wC.userActionsInstrumentation) || void 0 === ZC ? void 0 : ZC.dataAttributeName) && void 0 !== zC ? zC : LQ,
            nC = CC.target;
          if (!(nC instanceof Element)) return;
          const fC = function(CC, zC) {
              let ZC = CC;
              for (; ZC;) {
                if (ZC.hasAttribute(zC)) return ZC;
                ZC = ZC.parentElement
              }
              return null
            }(nC, OQ(bC)),
            oC = function(CC, zC) {
              if (!CC) return;
              const ZC = function(CC) {
                  return OQ(CC).slice(5).replace(/-(.)/g, ((CC, zC) => zC.toUpperCase()))
                }(zC),
                QC = CC.dataset;
              for (const wC in QC)
                if (wC === ZC) return QC[wC]
            }(fC, bC);
          if (!fC || !oC) return;
          const qC = function(CC, zC) {
            const ZC = CC.getAttribute(function(CC) {
              const zC = OQ(CC);
              return zC.endsWith("-name") ? `${zC.slice(0,-5)}-timeout` : `${zC}-timeout`
            }(zC));
            return null === ZC ? void 0 : Number(ZC)
          }(fC, bC);
          QC.startUserAction(oC, {}, {
            triggerName: CC.type,
            initialActivityTimeout: qC
          })
        },
        processUserActionStarted: function(CC, ZC) {
          const QC = CC,
            wC = kQ(ZC, nC, zC);
          new Sw(QC, bC.debug, wC).attach()
        }
      }
    }
    const Pw = "user_action_start",
      Gw = {
        Normal: "normal",
        Critical: "critical"
      };
    var Rw = class {
        constructor() {
          this.buffer = []
        }
        addItem(CC) {
          this.buffer.push(CC)
        }
        flushBuffer(CC) {
          if (KC(CC))
            for (const zC of this.buffer) CC(zC);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Aw = class extends GZ {
        constructor(CC) {
          let {
            name: zC,
            parentId: ZC,
            trigger: QC,
            transports: wC,
            attributes: bC,
            trackUserActionsExcludeItem: nC,
            importance: fC = Gw.Normal,
            pushEvent: oC
          } = CC;
          super(), this.name = zC, this.attributes = bC, this.id = Pz(), this.trigger = QC, this.parentId = null !== ZC && void 0 !== ZC ? ZC : this.id, this.trackUserActionsExcludeItem = nC, this.importance = fC, this._pushEvent = oC, this._itemBuffer = new Rw, this._transports = wC, this._state = 0, this._start()
        }
        addItem(CC) {
          return 0 === this._state && (this._itemBuffer.addItem(CC), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Nz(), this._startTimeMono = Mz())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((CC => {
            this._transports.execute(CC)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const CC = Nz(),
            zC = Mz() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((CC => {
            if (function(CC, zC) {
                return (null === zC || void 0 === zC ? void 0 : zC(CC)) || "measurement" === CC.type && "web-vitals" === CC.payload.type
              }(CC, this.trackUserActionsExcludeItem)) return void this._transports.execute(CC);
            const zC = kz(kz({}, CC), {}, {
              payload: kz(kz({}, CC.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(zC)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", kz({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: CC.toString(),
            userActionDuration: zC.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Xz(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: CC => (CC.action = {
              id: this.id,
              name: this.name
            }, CC)
          })
        }
        getState() {
          return this._state
        }
      };
    const xw = new GZ;

    function Jw(CC, zC) {
      return !!CC && (0 === (null === CC || void 0 === CC ? void 0 : CC.getState()) && (CC.addItem(zC), !0))
    }
    var Iw = class extends zZ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ZZ
        }
        initialize() {
          const {
            processUserEvent: CC,
            processUserActionStarted: zC
          } = pw(SC, (CC => this.logWarn(CC)));
          this._processUserEvent = CC, this._processKeydown = zC => {
            [" ", "Enter"].includes(zC.key) && CC(zC)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = xw.subscribe((CC => {
            let {
              type: ZC,
              userAction: QC,
              initialActivityTimeout: wC
            } = CC;
            "user_action_start" === ZC && zC(QC, wC)
          }))
        }
        destroy() {
          var CC;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (CC = this._userActionSub) || void 0 === CC || CC.unsubscribe()
        }
      },
      iw = class extends zZ {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ZZ, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(CC) {
          const zC = {
            blockedURI: CC.blockedURI,
            columnNumber: CC.columnNumber,
            disposition: CC.disposition,
            documentURI: CC.documentURI,
            effectiveDirective: CC.effectiveDirective,
            lineNumber: CC.lineNumber,
            originalPolicy: CC.originalPolicy,
            referrer: CC.referrer,
            sample: CC.sample,
            sourceFile: CC.sourceFile,
            statusCode: CC.statusCode,
            violatedDirective: CC.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Xz(zC))
        }
      };
    var vw = class extends GZ {
      constructor(CC, zC) {
        var ZC, QC, wC, bC;
        super(), this._tracking = !1, this.eventsObservable = CC, this._options = {
          inactivityMs: null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.inactivityMs) && void 0 !== ZC ? ZC : 100,
          drainTimeoutMs: null !== (QC = null === zC || void 0 === zC ? void 0 : zC.drainTimeoutMs) && void 0 !== QC ? QC : 1e4,
          isOperationStart: null !== (wC = null === zC || void 0 === zC ? void 0 : zC.isOperationStart) && void 0 !== wC ? wC : () => {},
          isOperationEnd: null !== (bC = null === zC || void 0 === zC ? void 0 : zC.isOperationEnd) && void 0 !== bC ? bC : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((CC => {
          var zC;
          this._lastEventTime = Mz(), null === (zC = this._currentEvents) || void 0 === zC || zC.push(CC);
          const ZC = this._options.isOperationStart(CC);
          var QC;
          ZC && (null === (QC = this._activeOperations) || void 0 === QC || QC.set(ZC, !0));
          const wC = this._options.isOperationEnd(CC);
          var bC;
          wC && (null === (bC = this._activeOperations) || void 0 === bC || bC.delete(wC));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Mz(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let CC;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), CC = this.hasActiveOperations() ? Mz() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: CC
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = ew(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = ew(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(CC) {
        CC && clearTimeout(CC)
      }
    };

    function ew(CC, zC, ZC) {
      return CC && clearTimeout(CC), CC = setTimeout((() => {
        zC()
      }), ZC)
    }
    let hw;
    const Kw = new Set,
      Yw = new Map;
    let dw, mw, Hw, Ew, lw, Xw, uw, rw, sw = !1;
    var Tw = class extends zZ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ZZ
      }
      initialize() {
        const CC = Ww(),
          zC = Qw(),
          ZC = function() {
            function CC(CC, zC) {
              const ZC = null !== zC && void 0 !== zC ? zC : location.href;
              ZC !== mw && (dw.notify({
                type: "url-change",
                from: mw,
                to: ZC,
                trigger: CC
              }), mw = ZC)
            }
            if (dw || (dw = new GZ, mw = location.href), !sw)
              if ("navigation" in window && "NavigateEvent" in window) {
                uw = zC => {
                  try {
                    const ZC = null === zC || void 0 === zC ? void 0 : zC.destination;
                    (null === ZC || void 0 === ZC ? void 0 : ZC.sameDocument) && "string" === typeof ZC.url && CC("navigate", ZC.url)
                  } catch (ZC) {}
                }, window.navigation.addEventListener("navigate", uw);
                const zC = window.NavigateEvent;
                zC && zC.prototype && "function" === typeof zC.prototype.intercept && (rw || (rw = zC.prototype.intercept), zC.prototype.intercept = function(zC) {
                  try {
                    const zC = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      ZC = null === this || void 0 === this ? void 0 : this.destination;
                    zC && ZC && !1 === ZC.sameDocument && "string" === typeof ZC.url && CC("navigate-intercept", ZC.url)
                  } catch (ZC) {}
                  return rw.call(this, zC)
                }), sw = !0
              } else Hw || (Hw = window.history.pushState), window.history.pushState = function() {
                for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
                const wC = Hw.apply(window.history, ZC);
                return CC("pushState"), wC
              }, Ew || (Ew = window.history.replaceState), window.history.replaceState = function() {
                for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
                const wC = Ew.apply(window.history, ZC);
                return CC("replaceState"), wC
              }, lw = () => CC("popstate"), Xw = () => CC("hashchange"), window.addEventListener("popstate", lw), window.addEventListener("hashchange", Xw), sw = !0;
            return dw
          }(),
          QC = (wC = ["pointerdown", "keydown"], hw || (hw = new GZ), wC.forEach((CC => {
            if (!Kw.has(CC)) {
              const zC = () => {
                hw.notify({
                  type: "interaction",
                  name: CC
                })
              };
              window.addEventListener(CC, zC), Kw.add(CC), Yw.set(CC, zC)
            }
          })), hw);
        var wC;
        const bC = new vw((new GZ).merge(CC, zC, ZC), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: CC => function(CC) {
            return CC.type === pZ
          }(CC) ? CC.request.requestId : void 0,
          isOperationEnd: CC => function(CC) {
            return CC.type === PZ
          }(CC) ? CC.request.requestId : void 0
        });
        bC.filter((CC => "tracking-ended" === CC.message)).subscribe((CC => {
          var zC, ZC;
          if ((null === (zC = CC.events) || void 0 === zC ? void 0 : zC.some((CC => "url-change" === CC.type))) && (null === (ZC = CC.events) || void 0 === ZC ? void 0 : ZC.some((CC => "dom-mutation" === CC.type)))) {
            var QC;
            const zC = null === (QC = CC.events) || void 0 === QC ? void 0 : QC.find((CC => "url-change" === CC.type));
            SC.api.pushEvent("faro.navigation", {
              fromUrl: null === zC || void 0 === zC ? void 0 : zC.from,
              toUrl: null === zC || void 0 === zC ? void 0 : zC.to,
              sameDocument: String(!0),
              duration: CC.duration
            })
          }
        })), QC.subscribe((() => {
          bC.startTracking()
        }))
      }
    };

    function aw() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zC = [new Iw, new EZ, new HQ, new QZ, new XZ, new Tw];
      return !1 !== CC.enablePerformanceInstrumentation && zC.unshift(new yQ), !1 !== CC.enableContentSecurityPolicyInstrumentation && zC.push(new iw), !1 !== CC.captureConsole && zC.push(new mZ), zC
    }
    var tw = ZC(6694);
    let Dw, jw;

    function yw() {
      const CC = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Dw === CC && jw || (jw = new tw.UAParser(CC).getResult(), Dw = CC), jw
    }
    const Lw = () => {
        const {
          browser: CC,
          os: zC,
          ua: ZC
        } = yw(), {
          name: QC,
          version: wC
        } = CC, {
          name: bC,
          version: nC
        } = zC, fC = navigator.language, oC = ZC.includes("Mobi"), qC = function() {
          if (!QC || !wC) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== QC && void 0 !== QC ? QC : lZ,
            version: null !== wC && void 0 !== wC ? wC : lZ,
            os: `${null!==bC&&void 0!==bC?bC:lZ} ${null!==nC&&void 0!==nC?nC:lZ}`,
            userAgent: null !== ZC && void 0 !== ZC ? ZC : lZ,
            language: null !== fC && void 0 !== fC ? fC : lZ,
            mobile: oC,
            brands: null !== qC && void 0 !== qC ? qC : lZ,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Uw = () => {
        const {
          name: CC,
          version: zC
        } = yw().os;
        if (!CC && !zC) return {};
        const ZC = {};
        return CC && (ZC.name = CC), zC && (ZC.version = zC), {
          os: ZC
        }
      };

    function Bw(CC) {
      var zC, ZC, QC;
      return {
        id: null !== (zC = null === (ZC = SC.config) || void 0 === ZC || null === (ZC = ZC.sessionTracking) || void 0 === ZC || null === (QC = ZC.generateSessionId) || void 0 === QC ? void 0 : QC.call(ZC)) && void 0 !== zC ? zC : Pz(),
        attributes: CC
      }
    }
    const Ow = () => ({
      sdk: {
        name: "faro-web",
        version: ZZ
      }
    });
    var kw = class extends CZ {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let Vw = function(CC) {
      return CC.EXCEPTION = "exception", CC.LOG = "log", CC.MEASUREMENT = "measurement", CC.TRACE = "trace", CC.EVENT = "event", CC
    }({});
    const Cb = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function zb(CC, zC) {
      var ZC, QC;
      if (void 0 === zC) return CC;
      if (void 0 === CC) return {
        resourceSpans: zC
      };
      const wC = null === (ZC = CC.resourceSpans) || void 0 === ZC ? void 0 : ZC[0];
      if (void 0 === wC) return CC;
      const bC = (null === wC || void 0 === wC ? void 0 : wC.scopeSpans) || [],
        nC = (null === zC || void 0 === zC || null === (QC = zC[0]) || void 0 === QC ? void 0 : QC.scopeSpans) || [];
      return kz(kz({}, CC), {}, {
        resourceSpans: [kz(kz({}, wC), {}, {
          scopeSpans: [...bC, ...nC]
        })]
      })
    }

    function Zb(CC) {
      let zC = {
        meta: {}
      };
      return void 0 !== CC[0] && (zC.meta = CC[0].meta), CC.forEach((CC => {
        switch (CC.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const ZC = Cb[CC.type],
              QC = zC[ZC];
            zC = kz(kz({}, zC), {}, {
              [ZC]: void 0 === QC ? [CC.payload] : [...QC, CC.payload]
            });
            break
          }
          case "trace":
            zC = kz(kz({}, zC), {}, {
              traces: zb(zC.traces, CC.payload.resourceSpans)
            })
        }
      })), zC
    }
    var Qb = class extends kw {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = CC, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ZZ
      }
      send(CC) {
        var zC;
        return this.unpatchedConsole[null !== (zC = this.options.level) && void 0 !== zC ? zC : RZ.DEBUG]("New event", Zb([CC]))
      }
    };
    const wb = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      bb = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      nb = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      fb = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      ob = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      qb = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Fb(CC) {
      let {
        weekday: zC,
        day: ZC,
        month: QC,
        year: wC,
        hour: bC,
        minute: nC,
        second: fC
      } = CC;
      if (wC < 1900 || ZC < 1 || bC > 23 || nC > 59 || fC > 60) return;
      const oC = 60 === fC,
        qC = new Date(0);
      return qC.setUTCFullYear(wC, QC, ZC), qC.setUTCHours(bC, nC, oC ? 59 : fC, 0), qC.getUTCDay() === zC && qC.getUTCDate() === ZC && qC.getUTCMonth() === QC && qC.getUTCFullYear() === wC && qC.getUTCHours() === bC && qC.getUTCMinutes() === nC && qC.getUTCSeconds() === (oC ? 59 : fC) ? qC.getTime() + (oC ? 1e3 : 0) : void 0
    }
    var Wb = class {
      constructor(CC) {
        this.options = CC, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var CC = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const zC = this.sequence++;
        let ZC = !1;
        return {
          deliver: function() {
            var ZC = DQ((function*(ZC) {
              const QC = CC.options.getNow();
              let wC, bC = 0;
              for (;;) {
                var nC, fC, oC;
                const qC = CC.options.retry.maxAttempts - bC,
                  FC = yield CC.runAttempt((() => ZC(qC, CC.unloading)), bC > 0);
                if (bC += FC.attemptsMade, "success" === FC.kind) return {
                  kind: "success",
                  attempts: bC,
                  elapsedTimeMs: CC.options.getNow() - QC
                };
                if (wC = FC.failure, "terminal" === FC.kind || CC.unloading) return {
                  kind: "terminal",
                  attempts: bC,
                  elapsedTimeMs: CC.options.getNow() - QC,
                  failure: wC
                };
                if (bC >= CC.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: bC,
                  elapsedTimeMs: CC.options.getNow() - QC,
                  failure: wC,
                  reason: "retries-exhausted"
                };
                if (null != FC.retryAfterMs && FC.retryAfterMs > CC.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: bC,
                  elapsedTimeMs: CC.options.getNow() - QC,
                  failure: wC,
                  reason: "retry-after-too-long"
                };
                const WC = Math.min(null !== (nC = FC.retryAfterMs) && void 0 !== nC ? nC : CC.options.retry.initialBackoffMs * Math.pow(CC.options.retry.backoffMultiplier, bC - 1), CC.options.retry.maxBackoffMs);
                if (null === (fC = (oC = CC.options).onRetry) || void 0 === fC || fC.call(oC, WC, bC + 1), yield CC.waitForTurn(zC, WC)) {
                  const zC = CC.options.retry.maxAttempts - bC,
                    wC = yield CC.runAttempt((() => ZC(zC, !0)));
                  return bC += wC.attemptsMade, {
                    kind: "success" === wC.kind ? "success" : "terminal",
                    attempts: bC,
                    elapsedTimeMs: CC.options.getNow() - QC,
                    failure: "success" === wC.kind ? void 0 : wC.failure
                  }
                }
              }
            }));
            return function(CC) {
              return ZC.apply(this, arguments)
            }
          }(),
          release: () => {
            ZC || (ZC = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const CC = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const zC of CC) zC.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((ZC, QC) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const zC = () => {
                this.inProgress--, this.runNextAttempt()
              };
              CC().then((CC => {
                zC(), ZC(CC)
              }), (CC => {
                zC(), QC(CC)
              }))
            },
            isRedelivery: zC
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const CC = this.options.getNow(),
            zC = this.attemptQueue.findIndex((zC => {
              let {
                isRedelivery: ZC
              } = zC;
              return this.unloading || !ZC || CC >= this.nextSendAt
            }));
          if (zC < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - CC)));
          const [ZC] = this.attemptQueue.splice(zC, 1);
          ZC.isRedelivery && !this.unloading && (this.nextSendAt = CC + 1), ZC.run()
        }
      }
      waitForTurn(CC, zC) {
        const ZC = Math.min(zC * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((zC => {
          this.waiting.push({
            sequence: CC,
            readyAt: this.options.getNow() + ZC,
            resolve: zC
          }), this.waiting.sort(((CC, zC) => CC.readyAt === zC.readyAt ? CC.sequence - zC.sequence : CC.readyAt - zC.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const CC = this.waiting[0],
          zC = CC.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const zC = this.waiting.indexOf(CC);
          zC >= 0 && this.waiting.splice(zC, 1), CC.resolve(!1), this.scheduleNext()
        }), Math.max(0, zC - this.options.getNow()))
      }
    };

    function Nb(CC, zC) {
      if (null == CC) return {};
      var ZC, QC, wC = function(CC, zC) {
        if (null == CC) return {};
        var ZC = {};
        for (var QC in CC)
          if ({}.hasOwnProperty.call(CC, QC)) {
            if (zC.includes(QC)) continue;
            ZC[QC] = CC[QC]
          } return ZC
      }(CC, zC);
      if (Object.getOwnPropertySymbols) {
        var bC = Object.getOwnPropertySymbols(CC);
        for (QC = 0; QC < bC.length; QC++) ZC = bC[QC], zC.includes(ZC) || {}.propertyIsEnumerable.call(CC, ZC) && (wC[ZC] = CC[ZC])
      }
      return wC
    }

    function Mb(CC) {
      const {
        size: zC,
        concurrency: ZC
      } = CC, QC = [];
      let wC = 0;
      const bC = () => {
        if (wC < ZC && QC.length) {
          const {
            producer: CC,
            resolve: zC,
            reject: ZC
          } = QC.shift();
          wC++, CC().then((CC => {
            wC--, bC(), zC(CC)
          }), (CC => {
            wC--, bC(), ZC(CC)
          }))
        }
      };
      return {
        add: CC => {
          if (QC.length + wC >= zC) throw new Error("Task buffer full");
          return new Promise(((zC, ZC) => {
            QC.push({
              producer: CC,
              resolve: zC,
              reject: ZC
            }), bC()
          }))
        }
      }
    }
    const gb = ["headers"],
      Sb = ["keepalive", "signal"],
      pb = new Set([408, 425, 429, 500, 502, 503, 504]),
      Pb = new Set([429, 503]);
    let Gb = 0,
      Rb = 0;
    var Ab = class extends Error {};
    var xb = class extends kw {
      constructor(CC) {
        var zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC;
        super(), this.options = CC, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ZZ, this.pendingCustomSends = 0, this.getNow = null !== (zC = CC.getNow) && void 0 !== zC ? zC : Date.now, this.requestTimeoutMs = null !== (ZC = CC.requestTimeoutMs) && void 0 !== ZC ? ZC : 1e4, this.compressionEnabled = null !== (QC = CC.requestCompression) && void 0 !== QC && QC && "undefined" !== typeof CompressionStream, CC.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Wb({
          bufferSize: null !== (wC = CC.bufferSize) && void 0 !== wC ? wC : 30,
          concurrency: null !== (bC = CC.concurrency) && void 0 !== bC ? bC : 5,
          retry: {
            maxAttempts: null !== (nC = null === (fC = CC.retry) || void 0 === fC ? void 0 : fC.maxAttempts) && void 0 !== nC ? nC : 3,
            initialBackoffMs: null !== (oC = null !== (qC = null === (FC = CC.retry) || void 0 === FC ? void 0 : FC.initialBackoffMs) && void 0 !== qC ? qC : CC.defaultRateLimitBackoffMs) && void 0 !== oC ? oC : 1e3,
            maxBackoffMs: null !== (WC = null === (NC = CC.retry) || void 0 === NC ? void 0 : NC.maxBackoffMs) && void 0 !== WC ? WC : 3e4,
            backoffMultiplier: null !== (MC = null === (gC = CC.retry) || void 0 === gC ? void 0 : gC.backoffMultiplier) && void 0 !== MC ? MC : 2
          },
          getNow: this.getNow,
          getRandom: null !== (SC = CC.getRandom) && void 0 !== SC ? SC : Math.random,
          onRetry: (CC, zC) => {
            this.logDebug(`Retrying failed request after ${CC}ms. Attempt ${zC}.`)
          }
        }), this.customPromiseBuffer = Mb({
          size: null !== (pC = CC.bufferSize) && void 0 !== pC ? pC : 30,
          concurrency: null !== (PC = CC.concurrency) && void 0 !== PC ? PC : 5
        }), this.defaultPromiseBuffer = {
          add: CC => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(CC);
            const zC = this.deliveryQueue.reserve();
            if (!zC) throw new Error("Task buffer full");
            return this.runBufferedTask(zC, CC)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (CC => {
          CC.persisted && this.deliveryQueue.resume()
        })))
      }
      send(CC) {
        var zC = this;
        return DQ((function*() {
          const ZC = zC.promiseBuffer;
          if (ZC !== zC.defaultPromiseBuffer || ZC.add !== zC.defaultBufferAdd) {
            zC.pendingCustomSends++;
            try {
              yield ZC.add((() => zC.deliver(CC)))
            } catch (QC) {
              zC.logError("Permanent delivery failure", {
                error: QC,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              zC.pendingCustomSends--
            }
          } else yield zC.deliver(CC)
        }))()
      }
      runBufferedTask(CC, zC) {
        return DQ((function*() {
          let ZC;
          try {
            return yield CC.deliver(DQ((function*() {
              return ZC = yield zC(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), ZC
          } finally {
            CC.release()
          }
        }))()
      }
      deliver(CC) {
        var zC = this;
        return DQ((function*() {
          const ZC = zC.deliveryQueue.reserve();
          if (ZC) try {
            const QC = yield zC.prepareRequest(CC), wC = yield ZC.deliver(((CC, ZC) => zC.performAttempt(QC, CC, ZC)));
            "terminal" === wC.kind && zC.logError("retries-exhausted" === wC.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Fz(Fz({}, wC.failure), {}, {
              reason: wC.reason,
              attempts: wC.attempts,
              elapsedTimeMs: wC.elapsedTimeMs
            }))
          } catch (QC) {
            zC.logError("Permanent delivery failure", {
              error: QC,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            ZC.release()
          } else zC.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var CC;
        return [this.options.url].concat(null !== (CC = this.config.ignoreUrls) && void 0 !== CC ? CC : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(CC) {
        var zC = this;
        return DQ((function*() {
          var ZC, QC;
          const wC = Zb(CC),
            bC = null === (ZC = wC.meta.session) || void 0 === ZC ? void 0 : ZC.id,
            nC = JSON.stringify(wC),
            fC = null !== (QC = zC.options.requestOptions) && void 0 !== QC ? QC : {},
            {
              headers: oC = {}
            } = fC,
            qC = Nb(fC, gb),
            {
              keepalive: FC,
              signal: WC
            } = qC,
            NC = Nb(qC, Sb),
            MC = {};
          for (const [CC, zC] of Object.entries(oC)) MC[CC] = "function" === typeof zC ? yield zC(): zC;
          let gC = nC,
            SC = function(CC) {
              return "undefined" === typeof TextEncoder ? CC.length : (new TextEncoder).encode(CC).byteLength
            }(nC);
          const pC = {};
          return zC.compressionEnabled && (gC = yield zC.compress(nC), SC = gC.size, pC["Content-Encoding"] = "gzip"), {
            bodySize: SC,
            sessionId: bC,
            requestInit: Fz({
              method: "POST",
              headers: Fz(Fz(Fz(Fz(Fz({
                "Content-Type": "application/json"
              }, pC), MC), zC.options.apiKey ? {
                "x-api-key": zC.options.apiKey
              } : {}), bC ? {
                "x-faro-session-id": bC
              } : {}), {}, {
                "Idempotency-Key": Pz(20)
              }),
              body: gC
            }, NC)
          }
        }))()
      }
      performAttempt(CC, zC, ZC) {
        var QC = this;
        return DQ((function*() {
          var wC;
          const bC = null === (wC = QC.options.requestOptions) || void 0 === wC ? void 0 : wC.signal;
          if (null === bC || void 0 === bC ? void 0 : bC.aborted) return {
            kind: "terminal",
            failure: {
              error: bC.reason
            },
            attemptsMade: 0
          };
          let nC = 0;
          try {
            var fC;
            const wC = yield QC.fetchWithKeepaliveFallback(CC.requestInit, CC.bodySize, !!ZC || (null === (fC = QC.options.requestOptions) || void 0 === fC ? void 0 : fC.keepalive), zC, (() => nC++));
            if (QC.handleResponse(wC, CC.sessionId), wC.status >= 200 && wC.status < 300) return {
              kind: "success",
              attemptsMade: nC
            };
            const bC = {
              status: wC.status
            };
            return !pb.has(wC.status) || ZC ? {
              kind: "terminal",
              failure: bC,
              attemptsMade: nC
            } : {
              kind: "retry",
              failure: bC,
              attemptsMade: nC,
              retryAfterMs: Pb.has(wC.status) ? QC.getRetryAfterDelayMs(wC) : void 0
            }
          } catch (oC) {
            const CC = {
              error: oC
            };
            return (null === bC || void 0 === bC ? void 0 : bC.aborted) || !QC.isFetchNetworkError(oC) || ZC ? {
              kind: "terminal",
              failure: CC,
              attemptsMade: nC
            } : {
              kind: "retry",
              failure: CC,
              attemptsMade: nC
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(CC, zC, ZC, QC, wC) {
        var bC = this;
        return DQ((function*() {
          const nC = bC.getNow(),
            fC = bC.reserveKeepalive(zC, ZC);
          try {
            return yield bC.fetchWithTimeout(Fz(Fz({}, CC), {}, {
              keepalive: fC.keepalive
            }), bC.requestTimeoutMs, wC)
          } catch (qC) {
            var oC;
            if (fC.keepalive && QC > 1 && bC.isFetchNetworkError(qC) && !(qC instanceof Ab) && !(null === (oC = bC.options.requestOptions) || void 0 === oC || null === (oC = oC.signal) || void 0 === oC ? void 0 : oC.aborted)) {
              bC.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const zC = bC.requestTimeoutMs - (bC.getNow() - nC);
              return bC.fetchWithTimeout(Fz(Fz({}, CC), {}, {
                keepalive: !1
              }), zC, wC)
            }
            throw qC
          } finally {
            fC.release()
          }
        }))()
      }
      fetchWithTimeout(CC, zC, ZC) {
        var QC = this;
        return DQ((function*() {
          var wC;
          const bC = null === (wC = QC.options.requestOptions) || void 0 === wC ? void 0 : wC.signal;
          if (QC.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return ZC(), fetch(QC.options.url, Fz(Fz({}, CC), {}, {
            signal: bC
          }));
          if (zC <= 0) throw new Ab("Request timed out");
          const nC = new AbortController,
            fC = () => nC.abort(null === bC || void 0 === bC ? void 0 : bC.reason);
          null === bC || void 0 === bC || bC.addEventListener("abort", fC, {
            once: !0
          });
          let oC = !1;
          const qC = setTimeout((() => {
            oC = !0, nC.abort()
          }), zC);
          try {
            return ZC(), yield fetch(QC.options.url, Fz(Fz({}, CC), {}, {
              signal: nC.signal
            }))
          } catch (FC) {
            if (oC && !(null === bC || void 0 === bC ? void 0 : bC.aborted)) throw new Ab("Request timed out");
            throw FC
          } finally {
            clearTimeout(qC), null === bC || void 0 === bC || bC.removeEventListener("abort", fC)
          }
        }))()
      }
      getRetryAfterDelayMs(CC) {
        const zC = CC.headers.get("Retry-After");
        if (!zC) return;
        if (/^\d+$/.test(zC)) {
          const CC = 1e3 * Number(zC);
          return Number.isFinite(CC) ? CC : Number.POSITIVE_INFINITY
        }
        const ZC = this.getNow(),
          QC = function(CC, zC) {
            const ZC = wb.exec(CC);
            if (ZC) {
              const [, CC, zC, QC, wC, bC, nC, fC] = ZC;
              return Fb({
                weekday: fb.indexOf(CC),
                day: Number(zC),
                month: qb.indexOf(QC),
                year: Number(wC),
                hour: Number(bC),
                minute: Number(nC),
                second: Number(fC)
              })
            }
            const QC = bb.exec(CC);
            if (QC) {
              const [, CC, ZC, nC, fC, oC, qC, FC] = QC, WC = new Date(zC);
              if (Number.isNaN(WC.getTime())) return;
              const NC = WC.getUTCFullYear();
              let MC = 100 * Math.floor(NC / 100) + Number(fC);
              MC < NC && (MC += 100);
              const gC = qb.indexOf(nC),
                SC = {
                  month: gC,
                  day: Number(ZC),
                  hour: Number(oC),
                  minute: Number(qC),
                  second: Number(FC),
                  millisecond: 0
                },
                pC = {
                  month: WC.getUTCMonth(),
                  day: WC.getUTCDate(),
                  hour: WC.getUTCHours(),
                  minute: WC.getUTCMinutes(),
                  second: WC.getUTCSeconds(),
                  millisecond: WC.getUTCMilliseconds()
                };
              return (MC > NC + 50 || MC === NC + 50 && (bC = pC, ((wC = SC).month - bC.month || wC.day - bC.day || wC.hour - bC.hour || wC.minute - bC.minute || wC.second - bC.second || wC.millisecond - bC.millisecond) > 0)) && (MC -= 100), Fb({
                weekday: ob.indexOf(CC),
                day: Number(ZC),
                month: gC,
                year: MC,
                hour: Number(oC),
                minute: Number(qC),
                second: Number(FC)
              })
            }
            var wC, bC;
            const nC = nb.exec(CC);
            if (!nC) return;
            const [, fC, oC, qC, FC, WC, NC, MC, gC] = nC;
            return Fb({
              weekday: fb.indexOf(fC),
              day: Number(null !== qC && void 0 !== qC ? qC : FC),
              month: qb.indexOf(oC),
              year: Number(gC),
              hour: Number(WC),
              minute: Number(NC),
              second: Number(MC)
            })
          }(zC, ZC);
        return null == QC ? void 0 : Math.max(0, QC - ZC)
      }
      reserveKeepalive(CC, zC) {
        if (!1 === zC || CC > 6e4 || Gb + CC > 6e4 || Rb >= 9) return {
          keepalive: !1,
          release: tz
        };
        Gb += CC, Rb++;
        let ZC = !1;
        return {
          keepalive: !0,
          release: () => {
            ZC || (ZC = !0, Gb -= CC, Rb--)
          }
        }
      }
      handleResponse(CC, zC) {
        202 === CC.status && "invalid" === CC.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), zC), CC.text().catch(tz)
      }
      isFetchNetworkError(CC) {
        return CC instanceof TypeError || CC instanceof Ab || CC instanceof DOMException && "AbortError" === CC.name
      }
      compress(CC) {
        return DQ((function*() {
          const zC = [],
            ZC = new ReadableStream({
              start(zC) {
                zC.enqueue((new TextEncoder).encode(CC)), zC.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: CC,
              value: QC
            } = yield ZC.read();
            if (CC) return new Blob(zC);
            zC.push(QC)
          }
        }))()
      }
      extendFaroSession(CC, zC, ZC) {
        var QC, wC;
        const bC = CC.sessionTracking;
        if (!(null === bC || void 0 === bC ? void 0 : bC.enabled)) return void zC("Session expired.");
        const {
          fetchUserSession: nC,
          storeUserSession: fC
        } = az(bC), oC = null === (QC = this.metas.value.session) || void 0 === QC ? void 0 : QC.id, qC = null === (wC = nC()) || void 0 === wC ? void 0 : wC.sessionId;
        ZC && ZC === oC && ZC === qC ? (Yz({
          fetchUserSession: nC,
          storeUserSession: fC
        })({
          forceSessionExtend: !0
        }), zC("Session expired; created new session.")) : zC("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Jb = () => {
      const CC = window.k6;
      return {
        k6: Fz({
          isK6Browser: !0
        }, (null === CC || void 0 === CC ? void 0 : CC.testRunId) && {
          testRunId: null === CC || void 0 === CC ? void 0 : CC.testRunId
        })
      }
    };
    let Ib, ib;

    function vb() {
      let {
        generatePageId: CC,
        initialPageMeta: zC
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const ZC = location.href;
        return KC(CC) && Ib !== ZC && (Ib = ZC, ib = CC(location)), {
          page: Fz(Fz({
            url: ZC
          }, ib ? {
            id: ib
          } : {}), zC)
        }
      }
    }

    function eb() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vz,
        zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZC = jz;
      return zC > 0 && (ZC.error = zC >= 1 ? function() {
        for (var zC = arguments.length, QC = new Array(zC), wC = 0; wC < zC; wC++) QC[wC] = arguments[wC];
        CC.error(`${ZC.prefix}\n`, ...QC)
      } : tz, ZC.warn = zC >= 2 ? function() {
        for (var zC = arguments.length, QC = new Array(zC), wC = 0; wC < zC; wC++) QC[wC] = arguments[wC];
        CC.warn(`${ZC.prefix}\n`, ...QC)
      } : tz, ZC.info = zC >= 3 ? function() {
        for (var zC = arguments.length, QC = new Array(zC), wC = 0; wC < zC; wC++) QC[wC] = arguments[wC];
        CC.info(`${ZC.prefix}\n`, ...QC)
      } : tz, ZC.debug = zC >= 4 ? function() {
        for (var zC = arguments.length, QC = new Array(zC), wC = 0; wC < zC; wC++) QC[wC] = arguments[wC];
        CC.debug(`${ZC.prefix}\n`, ...QC)
      } : tz), ZC
    }
    const hb = "faro",
      Kb = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Yb = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function db(CC) {
      var zC, ZC, wC, bC, nC, fC;
      const oC = [],
        FC = eb(CC.unpatchedConsole, CC.internalLoggerLevel);
      CC.transports ? ((CC.url || CC.apiKey) && FC.error('if "transports" is defined, "url" and "apiKey" should not be defined'), oC.push(...CC.transports)) : CC.url ? oC.push(new xb({
        url: CC.url,
        apiKey: CC.apiKey,
        requestCompression: CC.requestCompression
      })) : FC.error('either "url" or "transports" must be defined');
      const {
        dedupe: WC = !0,
        eventDomain: NC = QC,
        globalObjectKey: MC = hb,
        instrumentations: gC = aw(),
        internalLoggerLevel: SC = yz,
        isolate: pC = !1,
        logArgsSerializer: PC = dZ,
        metas: GC = Hb(CC),
        paused: RC = !1,
        preventGlobalExposure: AC = !1,
        unpatchedConsole: xC = Vz,
        url: JC,
        experimental: IC
      } = CC, iC = Nb(CC, Yb), vC = null !== (zC = null === IC || void 0 === IC ? void 0 : IC.trackNavigation) && void 0 !== zC && zC, eC = {
        dataAttributeName: OQ(null !== (ZC = null === (wC = CC.userActionsInstrumentation) || void 0 === wC ? void 0 : wC.dataAttributeName) && void 0 !== ZC ? ZC : LQ),
        excludeItem: null === (bC = CC.userActionsInstrumentation) || void 0 === bC ? void 0 : bC.excludeItem,
        initialActivityTimeout: kQ(null === (nC = CC.userActionsInstrumentation) || void 0 === nC ? void 0 : nC.initialActivityTimeout, 100, (CC => FC.warn(CC)))
      };
      return Fz(Fz({}, iC), {}, {
        batching: Fz(Fz({}, Kb), CC.batching),
        dedupe: WC,
        globalObjectKey: MC,
        instrumentations: mb(gC, CC),
        internalLoggerLevel: SC,
        isolate: pC,
        logArgsSerializer: PC,
        metas: GC,
        parseStacktrace: SZ,
        paused: RC,
        preventGlobalExposure: AC,
        transports: oC,
        unpatchedConsole: xC,
        eventDomain: NC,
        ignoreUrls: [...null !== (fC = CC.ignoreUrls) && void 0 !== fC ? fC : [], ...JC ? [JC] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Fz(Fz(Fz({}, qC), CC.sessionTracking), Eb({
          trackGeolocation: CC.trackGeolocation,
          sessionTracking: CC.sessionTracking
        })),
        userActionsInstrumentation: eC,
        experimental: {
          trackNavigation: vC
        }
      })
    }

    function mb(CC, zC) {
      let {
        experimental: ZC
      } = zC;
      var QC;
      const wC = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.trackNavigation) && void 0 !== QC && QC;
      return CC.filter((CC => !("@grafana/faro-web-sdk:instrumentation-navigation" === CC.name && !wC)))
    }

    function Hb(CC) {
      var zC, ZC, QC;
      const {
        page: wC,
        generatePageId: bC
      } = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.pageTracking) && void 0 !== zC ? zC : {}, nC = [Lw, Uw, vb({
        generatePageId: bC,
        initialPageMeta: wC
      }), ...null !== (ZC = CC.metas) && void 0 !== ZC ? ZC : [], Ow];
      return hC(null === (QC = window) || void 0 === QC ? void 0 : QC.k6) ? [...nC, Jb] : nC
    }

    function Eb(CC) {
      let {
        trackGeolocation: zC,
        sessionTracking: ZC
      } = CC;
      var QC;
      const wC = {};
      return vC(zC) && (wC.geoLocationTrackingEnabled = zC), yC(wC) ? {} : {
        session: Fz(Fz({}, null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.session) && void 0 !== QC ? QC : {}), {}, {
          overrides: wC
        })
      }
    }
    const lb = new WeakSet;

    function Xb(CC) {
      return lb.add(CC), CC
    }

    function cb(CC, zC) {
      if (CC.capture) return Xb(CC.capture(zC));
      const ZC = Xb(CC.value);
      return null === zC || void 0 === zC || zC(), ZC
    }

    function ub(CC) {
      const zC = `__faroBundleId_${CC}`,
        ZC = null === FC || void 0 === FC ? void 0 : FC[zC];
      if ("string" === typeof ZC && "" !== ZC) return ZC;
      const QC = "undefined" !== typeof window ? window[zC] : void 0;
      return "string" === typeof QC && "" !== QC ? QC : void 0
    }

    function rb(CC) {
      var zC, ZC;
      const QC = CC.config.app.name,
        wC = QC ? function(CC) {
          return null === FC || void 0 === FC ? void 0 : FC[`__faroGitHash_${CC}`]
        }(QC) : void 0,
        bC = {
          sdk: {
            version: ZZ,
            name: "faro"
          },
          app: kz({
            bundleId: QC && ub(QC)
          }, void 0 !== wC ? {
            gitHash: wC
          } : {})
        },
        nC = null === (zC = CC.config.sessionTracking) || void 0 === zC ? void 0 : zC.session;
      nC && CC.api.setSession(nC), CC.config.app && (bC.app = kz(kz({}, CC.config.app), bC.app)), CC.config.user && (bC.user = CC.config.user), CC.config.view && (bC.view = CC.config.view), CC.metas.add(bC, ...null !== (ZC = CC.config.metas) && void 0 !== ZC ? ZC : [])
    }
    var sb = class {
      constructor(CC, zC) {
        var ZC, QC;
        this.signalBuffer = [], this.itemLimit = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.itemLimit) && void 0 !== ZC ? ZC : 50, this.sendTimeout = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.sendTimeout) && void 0 !== QC ? QC : 250, this.paused = (null === zC || void 0 === zC ? void 0 : zC.paused) || !1, this.sendFn = CC, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(CC) {
        this.paused || (this.signalBuffer.push(CC), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(CC) {
        const zC = new Map;
        return CC.forEach((CC => {
          const ZC = JSON.stringify(CC.meta);
          let QC = zC.get(ZC);
          QC = void 0 === QC ? [CC] : [...QC, CC], zC.set(ZC, QC)
        })), Array.from(zC.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const CC = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(CC).forEach(this.sendFn)
        } catch (zC) {
          throw this.signalBuffer = [...CC, ...this.signalBuffer], this.trimBufferToLimit(), zC
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Tb(CC, zC, ZC, QC) {
      var wC;
      zC.debug("Initializing transports");
      const bC = [];
      let nC = [];
      const fC = CC => {
        let zC = CC;
        for (const QC of nC) {
          const CC = zC.map(QC).filter(Boolean);
          if (0 === CC.length) return [];
          zC = ab(CC, ZC)
        }
        return zC
      };
      let oC;
      (null === (wC = ZC.batching) || void 0 === wC ? void 0 : wC.enabled) && (oC = new sb((CC => {
        const ZC = fC(CC);
        if (0 !== ZC.length)
          for (const QC of bC) zC.debug(`Transporting item using ${QC.name}\n`, ZC), QC.isBatched() && QC.send(ZC)
      }), {
        sendTimeout: ZC.batching.sendTimeout,
        itemLimit: ZC.batching.itemLimit,
        paused: ZC.paused
      }));
      return {
        add: function() {
          zC.debug("Adding transports");
          for (var wC = arguments.length, nC = new Array(wC), fC = 0; fC < wC; fC++) nC[fC] = arguments[fC];
          nC.forEach((wC => {
            zC.debug(`Adding "${wC.name}" transport`), bC.some((CC => CC === wC)) ? zC.warn(`Transport ${wC.name} is already added`) : (wC.unpatchedConsole = CC, wC.internalLogger = zC, wC.config = ZC, wC.metas = QC, bC.push(wC))
          }))
        },
        addBeforeSendHooks: function() {
          zC.debug("Adding beforeSendHooks\n", nC);
          for (var CC = arguments.length, ZC = new Array(CC), QC = 0; QC < CC; QC++) ZC[QC] = arguments[QC];
          ZC.forEach((CC => {
            CC && nC.push(CC)
          }))
        },
        getBeforeSendHooks: () => [...nC],
        execute: CC => {
          var wC;
          if (!ZC.paused && sz(QC).shouldCapture()) {
            if (WC = CC.meta, !lb.has(WC)) {
              var nC, qC, FC;
              const zC = null === (nC = QC.value.session) || void 0 === nC ? void 0 : nC.id,
                wC = cb(QC);
              if (ZC.paused) return;
              const bC = kz({}, CC.meta);
              (null === (qC = bC.session) || void 0 === qC ? void 0 : qC.id) === zC && (null === (FC = wC.session) || void 0 === FC ? void 0 : FC.id) !== zC && (void 0 === wC.session ? delete bC.session : bC.session = wC.session), CC = kz(kz({}, CC), {}, {
                meta: Xb(bC)
              })
            }
            var WC;
            (null === (wC = ZC.batching) || void 0 === wC ? void 0 : wC.enabled) && (null === oC || void 0 === oC || oC.addItem(CC)), (CC => {
              var QC;
              if ((null === (QC = ZC.batching) || void 0 === QC ? void 0 : QC.enabled) && bC.every((CC => CC.isBatched()))) return;
              const [wC] = fC([CC]);
              if (void 0 !== wC)
                for (const fC of bC) {
                  var nC;
                  zC.debug(`Transporting item using ${fC.name}\n`, wC), fC.isBatched() ? (null === (nC = ZC.batching) || void 0 === nC ? void 0 : nC.enabled) || fC.send([wC]) : fC.send(wC)
                }
            })(CC)
          }
        },
        isPaused: () => ZC.paused,
        pause: () => {
          zC.debug("Pausing transports"), null === oC || void 0 === oC || oC.pause(), ZC.paused = !0
        },
        remove: function() {
          zC.debug("Removing transports");
          for (var CC = arguments.length, ZC = new Array(CC), QC = 0; QC < CC; QC++) ZC[QC] = arguments[QC];
          ZC.forEach((CC => {
            zC.debug(`Removing "${CC.name}" transport`);
            const ZC = bC.indexOf(CC); - 1 !== ZC ? bC.splice(ZC, 1) : zC.warn(`Transport "${CC.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var CC = arguments.length, ZC = new Array(CC), QC = 0; QC < CC; QC++) ZC[QC] = arguments[QC];
          zC.debug("Removing beforeSendHooks"), nC = nC.filter((CC => !ZC.includes(CC)))
        },
        get transports() {
          return [...bC]
        },
        unpause: () => {
          zC.debug("Unpausing transports"), null === oC || void 0 === oC || oC.start(), ZC.paused = !1
        }
      }
    }

    function ab(CC, zC) {
      if (zC.preserveOriginalError)
        for (const ZC of CC) "exception" === ZC.type && delete ZC.payload.originalError;
      return CC
    }
    let tb = Vz;

    function Db(CC) {
      var zC;
      return tb = null !== (zC = CC.unpatchedConsole) && void 0 !== zC ? zC : tb, tb
    }
    let jb, yb = jz;

    function Lb(CC, zC) {
      return yb = eb(CC, zC.internalLoggerLevel), yb
    }

    function Ub(CC) {
      let {
        internalLogger: zC,
        config: ZC,
        metas: QC,
        transports: wC,
        tracesApi: bC,
        userActionsApi: nC
      } = CC;
      var fC;
      zC.debug("Initializing exceptions API");
      let oC = null;
      jb = null !== (fC = ZC.parseStacktrace) && void 0 !== fC ? fC : jb;
      const qC = CC => {
          zC.debug("Changing stacktrace parser"), jb = null !== CC && void 0 !== CC ? CC : jb
        },
        {
          ignoreErrors: FC = [],
          preserveOriginalError: WC
        } = ZC;
      return qC(ZC.parseStacktrace), {
        changeStacktraceParser: qC,
        getStacktraceParser: () => jb,
        pushError: function(CC) {
          let {
            skipDedupe: fC,
            stackFrames: qC,
            type: NC,
            context: MC,
            spanContext: gC,
            timestampOverwriteMs: SC,
            originalError: pC,
            fingerprint: PC,
            fatal: GC
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(CC, zC) {
              const {
                message: ZC,
                name: QC,
                stack: wC
              } = zC;
              return bC = CC, nC = ZC + " " + QC + " " + wC, bC.some((CC => JC(CC) ? nC.includes(CC) : !!nC.match(CC)));
              var bC, nC
            }(FC, null !== pC && void 0 !== pC ? pC : CC)) try {
            var RC, AC;
            if (!sz(QC).shouldCapture()) return;
            const FC = Xz(kz(kz({}, function(CC) {
                let zC = CC.cause;
                cC(zC) ? zC = CC.cause.toString() : null !== zC && (hC(CC.cause) || YC(CC.cause)) ? zC = lz(CC.cause) : null != zC && (zC = CC.cause.toString());
                return null == zC ? {} : {
                  cause: zC
                }
              }(null !== pC && void 0 !== pC ? pC : CC)), null !== MC && void 0 !== MC ? MC : {})),
              JC = kz(kz(kz(kz({
                type: NC || CC.name || "Error",
                value: CC.message,
                timestamp: SC ? Sz(SC) : gz(),
                trace: gC ? {
                  trace_id: gC.traceId,
                  span_id: gC.spanId
                } : bC.getTraceContext()
              }, yC(FC) ? {} : {
                context: FC
              }), WC ? {
                originalError: pC
              } : {}), PC ? {
                fingerprint: PC
              } : {}), void 0 !== GC ? {
                fatal: GC
              } : {});
            qC = null !== (RC = qC) && void 0 !== RC ? RC : CC.stack ? null === jb || void 0 === jb ? void 0 : jb(CC).frames : void 0, (null === qC || void 0 === qC ? void 0 : qC.length) && (JC.stacktrace = {
              frames: qC
            });
            const IC = {
              type: JC.type,
              value: JC.value,
              stacktrace: JC.stacktrace,
              context: JC.context,
              fingerprint: JC.fingerprint,
              fatal: null !== (AC = JC.fatal) && void 0 !== AC && AC
            };
            if (!fC && ZC.dedupe && !xC(oC) && Gz(IC, oC)) return void zC.debug("Skipping error push because it is the same as the last one\n", JC);
            const iC = oC,
              vC = cb(QC);
            if (oC !== iC && !fC && ZC.dedupe && Gz(IC, oC)) return;
            oC = IC;
            const eC = {
              meta: vC,
              payload: JC,
              type: "exception"
            };
            zC.debug("Pushing exception\n", eC), Jw(nC.getActiveUserAction(), eC) || wC.execute(eC)
          } catch (IC) {
            zC.error("Error pushing event", IC)
          }
        }
      }
    }

    function Bb(CC, zC, ZC, QC, wC) {
      zC.debug("Initializing API");
      let bC = null;
      const nC = function(CC) {
          let {
            transports: zC,
            internalLogger: ZC,
            config: QC,
            pushEvent: wC
          } = CC;
          var bC;
          const nC = null === (bC = QC.userActionsInstrumentation) || void 0 === bC ? void 0 : bC.excludeItem;
          let fC;
          const oC = () => fC;
          return {
            startUserAction: (CC, QC, bC) => {
              if (void 0 === oC()) {
                const ZC = new Aw({
                  name: CC,
                  transports: zC,
                  attributes: QC,
                  trigger: (null === bC || void 0 === bC ? void 0 : bC.triggerName) || "faroApiCall",
                  importance: (null === bC || void 0 === bC ? void 0 : bC.importance) || Gw.Normal,
                  trackUserActionsExcludeItem: nC,
                  pushEvent: wC
                });
                return ZC.filter((CC => [3, 2].includes(CC))).first().subscribe((() => {
                  fC = void 0
                })), xw.notify({
                  type: Pw,
                  userAction: ZC,
                  initialActivityTimeout: null === bC || void 0 === bC ? void 0 : bC.initialActivityTimeout
                }), fC = ZC, fC
              }
              ZC.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: oC
          }
        }({
          transports: wC,
          config: ZC,
          internalLogger: zC,
          pushEvent: (CC, ZC, QC, wC) => {
            bC ? bC(CC, ZC, QC, wC) : zC.warn("pushEventImpl is not initialized. Event dropped:", {
              name: CC,
              attributes: ZC,
              domain: QC,
              options: wC
            })
          }
        }),
        fC = function(CC, zC, ZC, QC, wC) {
          let bC;
          return zC.debug("Initializing traces API"), {
            getOTEL: () => bC,
            getTraceContext: () => {
              const CC = null === bC || void 0 === bC ? void 0 : bC.trace.getSpanContext(bC.context.active());
              return CC ? {
                trace_id: CC.traceId,
                span_id: CC.spanId
              } : void 0
            },
            initOTEL: (CC, ZC) => {
              zC.debug("Initializing OpenTelemetry"), bC = {
                trace: CC,
                context: ZC
              }
            },
            isOTELInitialized: () => !!bC,
            pushTraces: CC => {
              try {
                if (!sz(QC).shouldCapture()) return;
                const ZC = {
                  type: "trace",
                  payload: CC,
                  meta: cb(QC)
                };
                zC.debug("Pushing trace\n", ZC), wC.execute(ZC)
              } catch (ZC) {
                zC.error("Error pushing trace\n", ZC)
              }
            }
          }
        }(0, zC, 0, QC, wC),
        oC = {
          unpatchedConsole: CC,
          internalLogger: zC,
          userActionsApi: nC,
          config: ZC,
          metas: QC,
          transports: wC,
          tracesApi: fC
        },
        qC = function(CC) {
          let {
            internalLogger: zC,
            config: ZC,
            metas: QC,
            transports: wC,
            tracesApi: bC,
            userActionsApi: nC
          } = CC, fC = null;
          return {
            pushEvent: function(CC, oC, qC) {
              let {
                skipDedupe: FC,
                spanContext: WC,
                timestampOverwriteMs: NC,
                customPayloadTransformer: MC = CC => CC
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!sz(QC).shouldCapture()) return;
                const gC = Xz(oC),
                  SC = MC({
                    name: CC,
                    domain: null !== qC && void 0 !== qC ? qC : ZC.eventDomain,
                    attributes: yC(gC) ? void 0 : gC,
                    timestamp: NC ? Sz(NC) : gz(),
                    trace: WC ? {
                      trace_id: WC.traceId,
                      span_id: WC.spanId
                    } : bC.getTraceContext()
                  }),
                  pC = {
                    name: SC.name,
                    attributes: SC.attributes,
                    domain: SC.domain
                  };
                if (!FC && ZC.dedupe && !xC(fC) && Gz(pC, fC)) return void zC.debug("Skipping event push because it is the same as the last one\n", SC);
                const PC = fC,
                  GC = cb(QC);
                if (fC !== PC && !FC && ZC.dedupe && Gz(pC, fC)) return;
                fC = pC;
                const RC = {
                  meta: GC,
                  payload: SC,
                  type: "event"
                };
                zC.debug("Pushing event\n", RC), Jw(nC.getActiveUserAction(), RC) || wC.execute(RC)
              } catch (gC) {
                zC.error("Error pushing event", gC)
              }
            }
          }
        }(oC);
      return bC = qC.pushEvent, kz(kz(kz(kz(kz(kz(kz({}, fC), Ub(oC)), function(CC) {
        let zC, ZC, QC, wC, {
          internalLogger: bC,
          metas: nC
        } = CC;
        bC.debug("Initializing meta API");
        const fC = CC => {
            ZC && nC.remove(ZC), ZC = {
              user: CC
            }, nC.add(ZC)
          },
          oC = (CC, ZC) => {
            var QC;
            const wC = null === ZC || void 0 === ZC ? void 0 : ZC.overrides,
              bC = wC ? {
                overrides: kz(kz({}, null === zC || void 0 === zC || null === (QC = zC.session) || void 0 === QC ? void 0 : QC.overrides), wC)
              } : {};
            zC && nC.remove(zC), zC = {
              session: kz(kz({}, yC(CC) ? void 0 : CC), bC)
            }, nC.add(zC)
          },
          qC = (CC, zC) => {
            sz(nC).notifySessionUpdate({
              type: "replace",
              session: CC,
              overrides: null === zC || void 0 === zC ? void 0 : zC.overrides
            }), oC(CC, zC)
          },
          FC = () => nC.value.session,
          WC = () => nC.value.page;
        return {
          setUser: fC,
          resetUser: fC,
          setSession: qC,
          resetSession: qC,
          getSession: FC,
          setView: (CC, zC) => {
            var ZC;
            if ((null === zC || void 0 === zC ? void 0 : zC.overrides) && (sz(nC).notifySessionUpdate({
                type: "overrides",
                overrides: zC.overrides
              }), oC(FC(), {
                overrides: zC.overrides
              })), (null === QC || void 0 === QC || null === (ZC = QC.view) || void 0 === ZC ? void 0 : ZC.name) === (null === CC || void 0 === CC ? void 0 : CC.name)) return;
            const wC = QC;
            QC = {
              view: CC
            }, nC.add(QC), wC && nC.remove(wC)
          },
          getView: () => nC.value.view,
          setPage: CC => {
            var zC;
            const ZC = JC(CC) ? kz(kz({}, null !== (zC = null === wC || void 0 === wC ? void 0 : wC.page) && void 0 !== zC ? zC : WC()), {}, {
              id: CC
            }) : CC;
            wC && nC.remove(wC), wC = {
              page: ZC
            }, nC.add(wC)
          },
          getPage: WC
        }
      }(oC)), function(CC) {
        let {
          internalLogger: zC,
          config: ZC,
          metas: QC,
          transports: wC,
          tracesApi: bC,
          userActionsApi: nC
        } = CC;
        var fC;
        zC.debug("Initializing logs API");
        let oC = null;
        const qC = null !== (fC = ZC.logArgsSerializer) && void 0 !== fC ? fC : dZ;
        return {
          pushLog: function(CC) {
            let {
              context: fC,
              level: FC,
              skipDedupe: WC,
              spanContext: NC,
              timestampOverwriteMs: MC
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!sz(QC).shouldCapture()) return;
              const gC = Xz(fC),
                SC = {
                  message: qC(CC),
                  level: null !== FC && void 0 !== FC ? FC : "log",
                  context: yC(gC) ? void 0 : gC,
                  timestamp: MC ? Sz(MC) : gz(),
                  trace: NC ? {
                    trace_id: NC.traceId,
                    span_id: NC.spanId
                  } : bC.getTraceContext()
                },
                pC = {
                  message: SC.message,
                  level: SC.level,
                  context: SC.context
                };
              if (!WC && ZC.dedupe && !xC(oC) && Gz(pC, oC)) return void zC.debug("Skipping log push because it is the same as the last one\n", SC);
              const PC = oC,
                GC = cb(QC);
              if (oC !== PC && !WC && ZC.dedupe && Gz(pC, oC)) return;
              oC = pC;
              const RC = {
                type: "log",
                payload: SC,
                meta: GC
              };
              zC.debug("Pushing log\n", RC), Jw(nC.getActiveUserAction(), RC) || wC.execute(RC)
            } catch (gC) {
              zC.error("Error pushing log\n", gC)
            }
          }
        }
      }(oC)), function(CC) {
        let {
          internalLogger: zC,
          config: ZC,
          metas: QC,
          transports: wC,
          tracesApi: bC,
          userActionsApi: nC
        } = CC;
        zC.debug("Initializing measurements API");
        let fC = null;
        return {
          pushMeasurement: function(CC) {
            let {
              skipDedupe: oC,
              context: qC,
              spanContext: FC,
              timestampOverwriteMs: WC
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!sz(QC).shouldCapture()) return;
              const NC = Xz(qC),
                MC = kz(kz({}, CC), {}, {
                  trace: FC ? {
                    trace_id: FC.traceId,
                    span_id: FC.spanId
                  } : bC.getTraceContext(),
                  timestamp: WC ? Sz(WC) : gz(),
                  context: yC(NC) ? void 0 : NC
                }),
                gC = {
                  type: MC.type,
                  values: MC.values,
                  context: MC.context
                };
              if (!oC && ZC.dedupe && !xC(fC) && Gz(gC, fC)) return void zC.debug("Skipping measurement push because it is the same as the last one\n", MC);
              const SC = fC,
                pC = cb(QC);
              if (fC !== SC && !oC && ZC.dedupe && Gz(gC, fC)) return;
              fC = gC;
              const PC = {
                type: "measurement",
                payload: MC,
                meta: pC
              };
              zC.debug("Pushing measurement\n", PC), Jw(nC.getActiveUserAction(), PC) || wC.execute(PC)
            } catch (NC) {
              zC.error("Error pushing measurement\n", NC)
            }
          }
        }
      }(oC)), qC), nC)
    }

    function Ob(CC) {
      const zC = Db(CC),
        ZC = Lb(zC, CC);
      if (gC() && !CC.isolate) return void ZC.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      ZC.debug("Initializing");
      const QC = function(CC, zC) {
          let ZC, QC = [],
            wC = [],
            bC = [],
            nC = 0,
            fC = 0;
          const oC = () => QC.reduce(((CC, zC) => Object.assign(CC, KC(zC) ? zC() : zC)), {}),
            qC = () => {
              if (wC.length) {
                const CC = oC();
                wC.forEach((zC => zC(CC)))
              }
            };
          return {
            add: function() {
              for (var CC = arguments.length, ZC = new Array(CC), wC = 0; wC < CC; wC++) ZC[wC] = arguments[wC];
              zC.debug("Adding metas\n", ZC), QC.push(...ZC), qC()
            },
            remove: function() {
              for (var CC = arguments.length, ZC = new Array(CC), wC = 0; wC < CC; wC++) ZC[wC] = arguments[wC];
              zC.debug("Removing metas\n", ZC), QC = QC.filter((CC => !ZC.includes(CC))), qC()
            },
            addListener: CC => {
              zC.debug("Adding metas listener\n", CC), wC.push(CC)
            },
            removeListener: CC => {
              zC.debug("Removing metas listener\n", CC), wC = wC.filter((zC => zC !== CC))
            },
            capture: CC => {
              var zC;
              const QC = void 0 !== ZC,
                wC = null !== (zC = ZC) && void 0 !== zC ? zC : bC;
              QC || (ZC = wC, nC = 0, fC = wC.length);
              try {
                for (; nC < fC;) {
                  const CC = wC[nC++];
                  null === CC || void 0 === CC || CC()
                }
                const zC = Xb(oC());
                return null === CC || void 0 === CC || CC(), zC
              } finally {
                QC || (ZC = void 0)
              }
            },
            addCaptureListener: CC => {
              bC.push(CC)
            },
            removeCaptureListener: CC => {
              bC = bC.filter((zC => zC !== CC))
            },
            get value() {
              return oC()
            }
          }
        }(0, ZC),
        wC = Tb(zC, ZC, CC, QC),
        bC = Bb(zC, ZC, CC, QC, wC),
        nC = function(CC, zC, ZC, QC, wC, bC) {
          zC.debug("Initializing instrumentations");
          const nC = [];
          return {
            add: function() {
              zC.debug("Adding instrumentations");
              for (var fC = arguments.length, oC = new Array(fC), qC = 0; qC < fC; qC++) oC[qC] = arguments[qC];
              oC.forEach((fC => {
                zC.debug(`Adding "${fC.name}" instrumentation`), nC.some((CC => CC.name === fC.name)) ? zC.warn(`Instrumentation ${fC.name} is already added`) : (fC.unpatchedConsole = CC, fC.internalLogger = zC, fC.config = ZC, fC.metas = QC, fC.transports = wC, fC.api = bC, nC.push(fC), fC.initialize())
              }))
            },
            get instrumentations() {
              return [...nC]
            },
            remove: function() {
              zC.debug("Removing instrumentations");
              for (var CC = arguments.length, ZC = new Array(CC), QC = 0; QC < CC; QC++) ZC[QC] = arguments[QC];
              ZC.forEach((CC => {
                var ZC, QC;
                zC.debug(`Removing "${CC.name}" instrumentation`);
                const wC = nC.reduce(((zC, ZC, QC) => null === zC && ZC.name === CC.name ? QC : null), null);
                null !== wC ? (null === (ZC = (QC = nC[wC]).destroy) || void 0 === ZC || ZC.call(QC), nC.splice(wC, 1)) : zC.warn(`Instrumentation "${CC.name}" is not added`)
              }))
            }
          }
        }(zC, ZC, CC, QC, wC, bC),
        fC = pC(zC, ZC, CC, QC, wC, bC, nC);
      return rb(fC),
        function(CC) {
          CC.transports.add(...CC.config.transports), CC.transports.addBeforeSendHooks(CC.config.beforeSend)
        }(fC),
        function(CC) {
          CC.instrumentations.add(...CC.config.instrumentations)
        }(fC), fC
    }

    function kb(CC) {
      const zC = db(CC);
      if (zC) return Ob(zC)
    }
  },
  6694: function(CC, zC, ZC) {
    var QC;
    ! function(wC, bC) {
      var nC = "function",
        fC = "undefined",
        oC = "object",
        qC = "string",
        FC = "major",
        WC = "model",
        NC = "name",
        MC = "type",
        gC = "vendor",
        SC = "version",
        pC = "architecture",
        PC = "console",
        GC = "mobile",
        RC = "tablet",
        AC = "smarttv",
        xC = "wearable",
        JC = "embedded",
        IC = "Amazon",
        iC = "Apple",
        vC = "ASUS",
        eC = "BlackBerry",
        hC = "Browser",
        KC = "Chrome",
        YC = "Firefox",
        dC = "Google",
        mC = "Honor",
        HC = "Huawei",
        EC = "LG",
        lC = "Microsoft",
        XC = "Motorola",
        cC = "Nvidia",
        uC = "OnePlus",
        rC = "Opera",
        sC = "OPPO",
        TC = "Samsung",
        aC = "Sharp",
        tC = "Sony",
        DC = "Xiaomi",
        jC = "Zebra",
        yC = "Facebook",
        LC = "Chromium OS",
        UC = "Mac OS",
        BC = " Browser",
        OC = function(CC) {
          for (var zC = {}, ZC = 0; ZC < CC.length; ZC++) zC[CC[ZC].toUpperCase()] = CC[ZC];
          return zC
        },
        kC = function(CC, zC) {
          return typeof CC === qC && -1 !== VC(zC).indexOf(VC(CC))
        },
        VC = function(CC) {
          return CC.toLowerCase()
        },
        Cz = function(CC, zC) {
          if (typeof CC === qC) return CC = CC.replace(/^\s\s*/, ""), typeof zC === fC ? CC : CC.substring(0, 500)
        },
        zz = function(CC, zC) {
          for (var ZC, QC, wC, fC, qC, FC, WC = 0; WC < zC.length && !qC;) {
            var NC = zC[WC],
              MC = zC[WC + 1];
            for (ZC = QC = 0; ZC < NC.length && !qC && NC[ZC];)
              if (qC = NC[ZC++].exec(CC))
                for (wC = 0; wC < MC.length; wC++) FC = qC[++QC], typeof(fC = MC[wC]) === oC && fC.length > 0 ? 2 === fC.length ? typeof fC[1] == nC ? this[fC[0]] = fC[1].call(this, FC) : this[fC[0]] = fC[1] : 3 === fC.length ? typeof fC[1] !== nC || fC[1].exec && fC[1].test ? this[fC[0]] = FC ? FC.replace(fC[1], fC[2]) : bC : this[fC[0]] = FC ? fC[1].call(this, FC, fC[2]) : bC : 4 === fC.length && (this[fC[0]] = FC ? fC[3].call(this, FC.replace(fC[1], fC[2])) : bC) : this[fC] = FC || bC;
            WC += 2
          }
        },
        Zz = function(CC, zC) {
          for (var ZC in zC)
            if (typeof zC[ZC] === oC && zC[ZC].length > 0) {
              for (var QC = 0; QC < zC[ZC].length; QC++)
                if (kC(zC[ZC][QC], CC)) return "?" === ZC ? bC : ZC
            } else if (kC(zC[ZC], CC)) return "?" === ZC ? bC : ZC;
          return zC.hasOwnProperty("*") ? zC["*"] : CC
        },
        Qz = {
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
        wz = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [SC, [NC, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [SC, [NC, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [NC, SC],
            [/opios[\/ ]+([\w\.]+)/i],
            [SC, [NC, rC + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [SC, [NC, rC + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [SC, [NC, rC]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [SC, [NC, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [SC, [NC, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [NC, SC],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [SC, [NC, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [SC, [NC, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [SC, [NC, "UC" + hC]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [SC, [NC, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [SC, [NC, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [SC, [NC, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [SC, [NC, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [SC, [NC, "Smart Lenovo " + hC]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [NC, /(.+)/, "$1 Secure " + hC], SC
            ],
            [/\bfocus\/([\w\.]+)/i],
            [SC, [NC, YC + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [SC, [NC, rC + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [SC, [NC, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [SC, [NC, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [SC, [NC, rC + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [SC, [NC, "MIUI" + BC]],
            [/fxios\/([\w\.-]+)/i],
            [SC, [NC, YC]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [SC, [NC, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [NC, /(.+)/, "$1Browser"], SC
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [NC, /(.+)/, "$1" + BC], SC
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [SC, [NC, TC + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [SC, [NC, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [NC, "Sogou Mobile"], SC
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [NC, SC],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [NC],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [SC, NC],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [NC, yC], SC
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [NC, SC],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [SC, [NC, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [SC, [NC, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [SC, [NC, KC + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [NC, KC + " WebView"], SC
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [SC, [NC, "Android " + hC]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [NC, SC],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [SC, [NC, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [SC, NC],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [NC, [SC, Zz, {
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
            [NC, SC],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [NC, "Netscape"], SC
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [NC, SC],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [SC, [NC, YC + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [NC, [SC, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [NC, [SC, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [pC, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [pC, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [pC, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [pC, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [pC, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [pC, /ower/, "", VC]
            ],
            [/ sun4\w[;\)]/i],
            [
              [pC, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [pC, VC]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [WC, [gC, TC],
              [MC, RC]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [WC, [gC, TC],
              [MC, GC]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [WC, [gC, iC],
              [MC, GC]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [WC, [gC, iC],
              [MC, RC]
            ],
            [/(macintosh);/i],
            [WC, [gC, iC]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [WC, [gC, aC],
              [MC, GC]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [WC, [gC, mC],
              [MC, RC]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [WC, [gC, mC],
              [MC, GC]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [WC, [gC, HC],
              [MC, RC]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [WC, [gC, HC],
              [MC, GC]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [WC, /_/g, " "],
              [gC, DC],
              [MC, RC]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [WC, /_/g, " "],
              [gC, DC],
              [MC, GC]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [WC, [gC, sC],
              [MC, GC]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [WC, [gC, Zz, {
                OnePlus: ["304", "403", "203"],
                "*": sC
              }],
              [MC, RC]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [WC, [gC, "Vivo"],
              [MC, GC]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [WC, [gC, "Realme"],
              [MC, GC]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [WC, [gC, XC],
              [MC, GC]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [WC, [gC, XC],
              [MC, RC]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [WC, [gC, EC],
              [MC, RC]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [WC, [gC, EC],
              [MC, GC]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [WC, [gC, "Lenovo"],
              [MC, RC]
            ],
            [/(nokia) (t[12][01])/i],
            [gC, WC, [MC, RC]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [WC, /_/g, " "],
              [MC, GC],
              [gC, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [WC, [gC, dC],
              [MC, RC]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [WC, [gC, dC],
              [MC, GC]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [WC, [gC, tC],
              [MC, GC]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [WC, "Xperia Tablet"],
              [gC, tC],
              [MC, RC]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [WC, [gC, uC],
              [MC, GC]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [WC, [gC, IC],
              [MC, RC]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [WC, /(.+)/g, "Fire Phone $1"],
              [gC, IC],
              [MC, GC]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [WC, gC, [MC, RC]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [WC, [gC, eC],
              [MC, GC]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [WC, [gC, vC],
              [MC, RC]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [WC, [gC, vC],
              [MC, GC]
            ],
            [/(nexus 9)/i],
            [WC, [gC, "HTC"],
              [MC, RC]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [gC, [WC, /_/g, " "],
              [MC, GC]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [WC, [gC, "TCL"],
              [MC, RC]
            ],
            [/(itel) ((\w+))/i],
            [
              [gC, VC], WC, [MC, Zz, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [WC, [gC, "Acer"],
              [MC, RC]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [WC, [gC, "Meizu"],
              [MC, GC]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [WC, [gC, "Ulefone"],
              [MC, GC]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [WC, [gC, "Energizer"],
              [MC, GC]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [WC, [gC, "Cat"],
              [MC, GC]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [WC, [gC, "Smartfren"],
              [MC, GC]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [WC, [gC, "Nothing"],
              [MC, GC]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [WC, [gC, "Archos"],
              [MC, RC]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [WC, [gC, "Archos"],
              [MC, GC]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [gC, WC, [MC, RC]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [gC, WC, [MC, GC]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [gC, WC, [MC, RC]],
            [/(surface duo)/i],
            [WC, [gC, lC],
              [MC, RC]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [WC, [gC, "Fairphone"],
              [MC, GC]
            ],
            [/(u304aa)/i],
            [WC, [gC, "AT&T"],
              [MC, GC]
            ],
            [/\bsie-(\w*)/i],
            [WC, [gC, "Siemens"],
              [MC, GC]
            ],
            [/\b(rct\w+) b/i],
            [WC, [gC, "RCA"],
              [MC, RC]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [WC, [gC, "Dell"],
              [MC, RC]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [WC, [gC, "Verizon"],
              [MC, RC]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [WC, [gC, "Barnes & Noble"],
              [MC, RC]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [WC, [gC, "NuVision"],
              [MC, RC]
            ],
            [/\b(k88) b/i],
            [WC, [gC, "ZTE"],
              [MC, RC]
            ],
            [/\b(nx\d{3}j) b/i],
            [WC, [gC, "ZTE"],
              [MC, GC]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [WC, [gC, "Swiss"],
              [MC, GC]
            ],
            [/\b(zur\d{3}) b/i],
            [WC, [gC, "Swiss"],
              [MC, RC]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [WC, [gC, "Zeki"],
              [MC, RC]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [gC, "Dragon Touch"], WC, [MC, RC]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [WC, [gC, "Insignia"],
              [MC, RC]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [WC, [gC, "NextBook"],
              [MC, RC]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [gC, "Voice"], WC, [MC, GC]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [gC, "LvTel"], WC, [MC, GC]
            ],
            [/\b(ph-1) /i],
            [WC, [gC, "Essential"],
              [MC, GC]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [WC, [gC, "Envizen"],
              [MC, RC]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [WC, [gC, "MachSpeed"],
              [MC, RC]
            ],
            [/\btu_(1491) b/i],
            [WC, [gC, "Rotor"],
              [MC, RC]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [WC, [gC, cC],
              [MC, RC]
            ],
            [/(sprint) (\w+)/i],
            [gC, WC, [MC, GC]],
            [/(kin\.[onetw]{3})/i],
            [
              [WC, /\./g, " "],
              [gC, lC],
              [MC, GC]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [WC, [gC, jC],
              [MC, RC]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [WC, [gC, jC],
              [MC, GC]
            ],
            [/smart-tv.+(samsung)/i],
            [gC, [MC, AC]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [WC, /^/, "SmartTV"],
              [gC, TC],
              [MC, AC]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [gC, EC],
              [MC, AC]
            ],
            [/(apple) ?tv/i],
            [gC, [WC, iC + " TV"],
              [MC, AC]
            ],
            [/crkey/i],
            [
              [WC, KC + "cast"],
              [gC, dC],
              [MC, AC]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [WC, [gC, IC],
              [MC, AC]
            ],
            [/(shield \w+ tv)/i],
            [WC, [gC, cC],
              [MC, AC]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [WC, [gC, aC],
              [MC, AC]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [WC, [gC, tC],
              [MC, AC]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [WC, [gC, DC],
              [MC, AC]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [gC, WC, [MC, AC]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [gC, Cz],
              [WC, Cz],
              [MC, AC]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [WC, [MC, AC]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [MC, AC]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [gC, WC, [MC, PC]],
            [/droid.+; (shield)( bui|\))/i],
            [WC, [gC, cC],
              [MC, PC]
            ],
            [/(playstation \w+)/i],
            [WC, [gC, tC],
              [MC, PC]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [WC, [gC, lC],
              [MC, PC]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [WC, [gC, TC],
              [MC, xC]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [gC, WC, [MC, xC]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [WC, [gC, sC],
              [MC, xC]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [WC, [gC, iC],
              [MC, xC]
            ],
            [/(opwwe\d{3})/i],
            [WC, [gC, uC],
              [MC, xC]
            ],
            [/(moto 360)/i],
            [WC, [gC, XC],
              [MC, xC]
            ],
            [/(smartwatch 3)/i],
            [WC, [gC, tC],
              [MC, xC]
            ],
            [/(g watch r)/i],
            [WC, [gC, EC],
              [MC, xC]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [WC, [gC, jC],
              [MC, xC]
            ],
            [/droid.+; (glass) \d/i],
            [WC, [gC, dC],
              [MC, xC]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [gC, WC, [MC, xC]],
            [/; (quest( \d| pro)?)/i],
            [WC, [gC, yC],
              [MC, xC]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [gC, [MC, JC]],
            [/(aeobc)\b/i],
            [WC, [gC, IC],
              [MC, JC]
            ],
            [/(homepod).+mac os/i],
            [WC, [gC, iC],
              [MC, JC]
            ],
            [/windows iot/i],
            [
              [MC, JC]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [WC, [MC, GC]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [WC, [MC, RC]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [MC, RC]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [MC, GC]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [WC, [gC, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [SC, [NC, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [NC, SC],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [SC, [NC, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [NC, SC],
            [/ladybird\//i],
            [
              [NC, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [SC, NC]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [NC, SC],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [NC, [SC, Zz, Qz]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [SC, Zz, Qz],
              [NC, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [SC, /_/g, "."],
              [NC, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [NC, UC],
              [SC, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [SC, NC],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [NC, /(.+)/, "$1 Touch"], SC
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [NC, SC],
            [/\(bb(10);/i],
            [SC, [NC, eC]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [SC, [NC, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [SC, [NC, YC + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [SC, [NC, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [SC, [NC, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [SC, [NC, KC + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [NC, LC], SC
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [NC, SC],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [NC, "Solaris"], SC
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [NC, SC]
          ]
        },
        bz = function(CC, zC) {
          if (typeof CC === oC && (zC = CC, CC = bC), !(this instanceof bz)) return new bz(CC, zC).getResult();
          var ZC = typeof wC !== fC && wC.navigator ? wC.navigator : bC,
            QC = CC || (ZC && ZC.userAgent ? ZC.userAgent : ""),
            PC = ZC && ZC.userAgentData ? ZC.userAgentData : bC,
            AC = zC ? function(CC, zC) {
              var ZC = {};
              for (var QC in CC) zC[QC] && zC[QC].length % 2 === 0 ? ZC[QC] = zC[QC].concat(CC[QC]) : ZC[QC] = CC[QC];
              return ZC
            }(wz, zC) : wz,
            xC = ZC && ZC.userAgent == QC;
          return this.getBrowser = function() {
            var CC, zC = {};
            return zC[NC] = bC, zC[SC] = bC, zz.call(zC, QC, AC.browser), zC[FC] = typeof(CC = zC[SC]) === qC ? CC.replace(/[^\d\.]/g, "").split(".")[0] : bC, xC && ZC && ZC.brave && typeof ZC.brave.isBrave == nC && (zC[NC] = "Brave"), zC
          }, this.getCPU = function() {
            var CC = {};
            return CC[pC] = bC, zz.call(CC, QC, AC.cpu), CC
          }, this.getDevice = function() {
            var CC = {};
            return CC[gC] = bC, CC[WC] = bC, CC[MC] = bC, zz.call(CC, QC, AC.device), xC && !CC[MC] && PC && PC.mobile && (CC[MC] = GC), xC && "Macintosh" == CC[WC] && ZC && typeof ZC.standalone !== fC && ZC.maxTouchPoints && ZC.maxTouchPoints > 2 && (CC[WC] = "iPad", CC[MC] = RC), CC
          }, this.mg = function() {
            var CC = {};
            return CC[NC] = bC, CC[SC] = bC, zz.call(CC, QC, AC.engine), CC
          }, this.getOS = function() {
            var CC = {};
            return CC[NC] = bC, CC[SC] = bC, zz.call(CC, QC, AC.os), xC && !CC[NC] && PC && PC.platform && "Unknown" != PC.platform && (CC[NC] = PC.platform.replace(/chrome os/i, LC).replace(/macos/i, UC)), CC
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.mg(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return QC
          }, this.setUA = function(CC) {
            return QC = typeof CC === qC && CC.length > 500 ? Cz(CC, 500) : CC, this
          }, this.setUA(QC), this
        };
      bz.VERSION = "1.0.41", bz.BROWSER = OC([NC, SC, FC]), bz.CPU = OC([pC]), bz.DEVICE = OC([WC, gC, MC, PC, GC, AC, RC, xC, JC]), bz.ENGINE = bz.OS = OC([NC, SC]), typeof zC !== fC ? (CC.exports && (zC = CC.exports = bz), zC.UAParser = bz) : ZC.amdO ? (QC = function() {
        return bz
      }.call(zC, ZC, zC, CC)) === bC || (CC.exports = QC) : typeof wC !== fC && (wC.UAParser = bz);
      var nz = typeof wC !== fC && (wC.jQuery || wC.Zepto);
      if (nz && !nz.ua) {
        var fz = new bz;
        nz.ua = fz.getResult(), nz.ua.get = function() {
          return fz.getUA()
        }, nz.ua.set = function(CC) {
          fz.setUA(CC);
          var zC = fz.getResult();
          for (var ZC in zC) nz.ua[ZC] = zC[ZC]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);