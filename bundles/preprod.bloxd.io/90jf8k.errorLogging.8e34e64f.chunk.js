export const id = 26;
export const ids = [26];
export const modules = {
  7009: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BaseExtension: () => FS,
      BaseInstrumentation: () => WS,
      BaseTransport: () => JA,
      CSPInstrumentation: () => DA,
      ConsoleInstrumentation: () => YS,
      ConsoleTransport: () => Su,
      EVENT_CLICK: () => aS,
      EVENT_NAVIGATION: () => kS,
      EVENT_ROUTE_CHANGE: () => mS,
      EVENT_SESSION_EXTEND: () => DW,
      EVENT_SESSION_RESUME: () => NW,
      EVENT_SESSION_START: () => VW,
      EVENT_VIEW_CHANGED: () => qS,
      ErrorsInstrumentation: () => cC,
      FetchTransport: () => kh,
      InternalLoggerLevel: () => wW,
      LogLevel: () => aC,
      MAX_SESSION_PERSISTENCE_TIME: () => dF,
      NavigationInstrumentation: () => sA,
      Observable: () => TS,
      PerformanceInstrumentation: () => UC,
      PersistentSessionsManager: () => IW,
      SESSION_EXPIRATION_TIME: () => uF,
      SESSION_INACTIVITY_TIME: () => hF,
      STORAGE_KEY: () => AF,
      SessionInstrumentation: () => CS,
      TransportItemType: () => pA,
      UserActionInstrumentation: () => NA,
      UserActionState: () => QA,
      VERSION: () => SS,
      ViewInstrumentation: () => zC,
      VolatileSessionsManager: () => fW,
      WebVitalsInstrumentation: () => MC,
      allLogLevels: () => qC,
      browserMeta: () => UA,
      buildStackFrame: () => AS,
      captureMetas: () => zh,
      createInternalLogger: () => Lu,
      createPromiseBuffer: () => eu,
      createSession: () => ju,
      deepEqual: () => TW,
      defaultEventDomain: () => CF,
      defaultExceptionType: () => LS,
      defaultGlobalObjectKey: () => mh,
      defaultInternalLoggerLevel: () => UW,
      defaultLogLevel: () => kC,
      faro: () => rW,
      genShortID: () => tS,
      getCurrentTimestamp: () => QW,
      getDataFromSafariExtensions: () => eS,
      getIgnoreUrls: () => BF,
      getInternalFaroFromGlobalObject: () => eF,
      getStackFramesFromError: () => QS,
      getTransportBody: () => Wu,
      getUrlFromResource: () => vW,
      getWebInstrumentations: () => nA,
      globalObject: () => RF,
      initializeFaro: () => Ju,
      internalGlobalObjectKey: () => iW,
      isArray: () => ZF,
      isBoolean: () => LF,
      isDomError: () => yW,
      isDomException: () => sF,
      isElement: () => HF,
      isElementDefined: () => nF,
      QC: () => UF,
      isError: () => IF,
      isErrorDefined: () => zW,
      isErrorEvent: () => fF,
      isEvent: () => GF,
      isEventDefined: () => cW,
      isFunction: () => xW,
      isInstanceOf: () => aW,
      isInt: () => DF,
      isInternalFaroOnGlobalObject: () => QF,
      isMap: () => wF,
      isMapDefined: () => KF,
      isNull: () => qW,
      isNumber: () => NF,
      isObject: () => OF,
      isPrimitive: () => MF,
      isRegExp: () => oF,
      isString: () => VF,
      isSymbol: () => mW,
      isSyntheticEvent: () => XF,
      isThenable: () => YF,
      isToString: () => TF,
      isTypeof: () => tW,
      isUndefined: () => kW,
      makeCoreConfig: () => Zu,
      noop: () => KW,
      osMeta: () => BA,
      parseStacktrace: () => rC,
      sdkMeta: () => vu,
      setInternalFaroOnGlobalObject: () => EF,
      transportItemTypeToBodyKey: () => lA,
      unknownString: () => GS,
      userActionDataAttribute: () => BC,
      userActionTimeoutDataAttribute: () => jA
    });
    const CF = "browser",
      AF = "com.grafana.faro.session",
      uF = 144e5,
      hF = 9e5,
      bW = 1e3,
      dF = hF,
      PF = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: dF
      };
    const RF = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof SF.g ? SF.g : "undefined" !== typeof self ? self : void 0;
    const iW = "_faroInternal";

    function eF() {
      return RF[iW]
    }

    function EF(FF) {
      FF.config.isolate ? FF.internalLogger.debug("Skipping registering internal Faro instance on global object") : (FF.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(RF, iW, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: FF
      }))
    }

    function QF() {
      return iW in RF
    }
    let rW = {
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

    function gW(FF, WF, SF, CF, AF, uF, hF) {
      return WF.debug("Initializing Faro"), rW = {
          api: uF,
          config: SF,
          instrumentations: hF,
          internalLogger: WF,
          metas: CF,
          pause: AF.pause,
          transports: AF,
          unpatchedConsole: FF,
          unpause: AF.unpause
        }, EF(rW),
        function(FF) {
          if (FF.config.preventGlobalExposure) FF.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (FF.internalLogger.debug(`Registering public faro reference in the global scope using "${FF.config.globalObjectKey}" key`), FF.config.globalObjectKey in RF) return void FF.internalLogger.warn(`Skipping global registration due to key "${FF.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(RF, FF.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: FF
            })
          }
        }(rW), rW
    }

    function tW(FF, WF) {
      return typeof FF === WF
    }

    function TF(FF, WF) {
      return Object.prototype.toString.call(FF) === `[object ${WF}]`
    }

    function aW(FF, WF) {
      try {
        return FF instanceof WF
      } catch (SF) {
        return !1
      }
    }
    const kW = FF => tW(FF, "undefined"),
      qW = FF => tW(FF, "null"),
      VF = FF => tW(FF, "string"),
      NF = FF => tW(FF, "number") && !isNaN(FF) || tW(FF, "bigint"),
      DF = FF => NF(FF) && Number.isInteger(FF),
      LF = FF => tW(FF, "boolean"),
      mW = FF => tW(FF, "symbol"),
      OF = FF => !qW(FF) && tW(FF, "object"),
      xW = FF => tW(FF, "function"),
      ZF = FF => TF(FF, "Array"),
      oF = FF => TF(FF, "RegExp"),
      YF = FF => xW(null === FF || void 0 === FF ? void 0 : FF.then),
      MF = FF => !OF(FF) && !xW(FF),
      cW = "undefined" !== typeof Event,
      GF = FF => cW && aW(FF, Event),
      zW = "undefined" !== typeof Error,
      IF = FF => zW && aW(FF, Error),
      fF = FF => TF(FF, "ErrorEvent"),
      yW = FF => TF(FF, "DOMError"),
      sF = FF => TF(FF, "DOMException"),
      nF = "undefined" !== typeof Element,
      HF = FF => nF && aW(FF, Element),
      KF = "undefined" !== typeof Map,
      wF = FF => KF && aW(FF, Map),
      XF = FF => OF(FF) && "nativeEvent" in FF && "preventDefault" in FF && "stopPropagation" in FF;

    function UF(FF) {
      return null == FF || (ZF(FF) || VF(FF) ? 0 === FF.length : !!OF(FF) && 0 === Object.keys(FF).length)
    }

    function BF() {
      return rW.transports.transports.flatMap((FF => FF.getIgnoreUrls()))
    }

    function jW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return BF().some((WF => FF && null != FF.match(WF)))
    }

    function vW(FF) {
      return VF(FF) ? FF : FF instanceof URL ? FF.href : !UF(FF) && xW(null === FF || void 0 === FF ? void 0 : FF.toString) ? FF.toString() : void 0
    }
    const JF = "sessionStorage",
      pF = "localStorage";

    function lF(FF) {
      try {
        let WF;
        WF = window[FF];
        const SF = "__faro_storage_test__";
        return WF.setItem(SF, SF), WF.removeItem(SF), !0
      } catch (SF) {
        var WF;
        return null === (WF = rW.internalLogger) || void 0 === WF || WF.info(`Web storage of type ${FF} is not available. Reason: ${SF}`), !1
      }
    }

    function FW(FF, WF) {
      return uW(WF) ? window[WF].getItem(FF) : null
    }

    function WW(FF, WF, SF) {
      if (uW(SF)) try {
        window[SF].setItem(FF, WF)
      } catch (CF) {}
    }

    function SW(FF, WF) {
      uW(WF) && window[WF].removeItem(FF)
    }
    const CW = lF(pF),
      AW = lF(JF);

    function uW(FF) {
      return FF === pF ? CW : FF === JF && AW
    }

    function hW(FF) {
      return hW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, hW(FF)
    }

    function bS(FF) {
      var WF = function(FF, WF) {
        if ("object" != hW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != hW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == hW(WF) ? WF : WF + ""
    }

    function dW(FF, WF, SF) {
      return (WF = bS(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function PW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function RW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? PW(Object(SF), !0).forEach((function(WF) {
          dW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : PW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function iS() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rW;
      var WF, SF, CF;
      const AF = FF.config.sessionTracking,
        uF = null !== (WF = null !== (SF = null === AF || void 0 === AF || null === (CF = AF.sampler) || void 0 === CF ? void 0 : CF.call(AF, {
          metas: FF.metas.value
        })) && void 0 !== SF ? SF : null === AF || void 0 === AF ? void 0 : AF.samplingRate) && void 0 !== WF ? WF : 1,
        hF = "number" === typeof uF ? function(FF) {
          return Math.min(1, Math.max(0, FF))
        }(uF) : 0;
      if (!(hF > 0)) return !1;
      if (1 === hF) return !0;
      try {
        const FF = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === FF || void 0 === FF ? void 0 : FF.getRandomValues)) {
          const WF = new Uint32Array(1);
          return FF.getRandomValues(WF), WF[0] / Math.pow(2, 32) < hF
        }
      } catch (bW) {}
      return Math.random() < hF
    }

    function eW() {
      return Date.now()
    }

    function EW() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function QW() {
      return (new Date).toISOString()
    }

    function rS(FF) {
      return new Date(FF).toISOString()
    }
    const gS = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function tS() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const WF = new Uint32Array(FF),
        SF = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === SF || void 0 === SF ? void 0 : SF.getRandomValues) SF.getRandomValues(WF);
      else
        for (let AF = 0; AF < FF; AF++) WF[AF] = Math.floor(4294967296 * Math.random());
      let CF = "";
      for (let AF = 0; AF < FF; AF++) CF += gS[WF[AF] % 59];
      return CF
    }

    function TW(FF, WF) {
      if (FF === WF) return !0;
      if (tW(FF, "number") && isNaN(FF)) return tW(WF, "number") && isNaN(WF);
      const SF = ZF(FF),
        CF = ZF(WF);
      if (SF !== CF) return !1;
      if (SF && CF) {
        const SF = FF.length;
        if (SF !== WF.length) return !1;
        for (let CF = SF; 0 !== CF--;)
          if (!TW(FF[CF], WF[CF])) return !1;
        return !0
      }
      const AF = OF(FF),
        uF = OF(WF);
      if (AF !== uF) return !1;
      if (FF && WF && AF && uF) {
        const SF = Object.keys(FF),
          CF = Object.keys(WF);
        if (SF.length !== CF.length) return !1;
        for (let FF of SF)
          if (!CF.includes(FF)) return !1;
        for (let AF of SF)
          if (!TW(FF[AF], WF[AF])) return !1;
        return !0
      }
      return !1
    }
    const aS = "click",
      kS = "navigation",
      qS = "view_changed",
      VW = "session_start",
      NW = "session_resume",
      DW = "session_extend",
      LW = "service_name_override",
      mS = "route_change";

    function OW() {
      let {
        sessionId: FF,
        started: WF,
        lastActivity: SF,
        isSampled: CF = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, AF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rW;
      var uF;
      const hF = eW(),
        bW = null === (uF = AF.config) || void 0 === uF || null === (uF = uF.sessionTracking) || void 0 === uF ? void 0 : uF.generateSessionId;
      return null == FF && (FF = "function" === typeof bW ? bW() : tS()), {
        sessionId: FF,
        lastActivity: null !== SF && void 0 !== SF ? SF : hF,
        started: null !== WF && void 0 !== WF ? WF : hF,
        isSampled: CF
      }
    }

    function xS(FF) {
      if (null == FF) return !1;
      const WF = eW();
      return WF - FF.started < 144e5 && WF - FF.lastActivity < hF
    }

    function ZW(FF) {
      let {
        fetchUserSession: WF,
        storeUserSession: SF,
        adoptSession: CF,
        updateInterval: AF = 0
      } = FF, bW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rW, dF = 0;
      return function() {
        let {
          forceSessionExtend: FF = !1,
          refreshActivity: PF = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var RF, iW;
        if (!WF || !SF) return;
        const eF = eW();
        if (!FF && eF < dF && dF - eF <= AF) return;
        const EF = bW.config.sessionTracking,
          QF = null === EF || void 0 === EF ? void 0 : EF.persistent;
        if (QF && !CW || !QF && !AW) return;
        const rW = WF();
        if (dF = Math.min(eF + AF, (null !== (RF = null === rW || void 0 === rW ? void 0 : rW.started) && void 0 !== RF ? RF : eF) + uF, (null !== (iW = null === rW || void 0 === rW ? void 0 : rW.lastActivity) && void 0 !== iW ? iW : eF) + hF), !1 === FF && xS(rW)) {
          var gW;
          PF && SF(RW(RW({}, rW), {}, {
            lastActivity: eF
          }));
          const FF = null === (gW = bW.metas.value.session) || void 0 === gW ? void 0 : gW.id;
          null != CF && null != rW.sessionMeta && rW.sessionId !== FF && CF(rW.sessionMeta)
        } else {
          var tW, TF, aW;
          let FF = YW(OW({
            isSampled: iS(bW)
          }, bW), rW, bW);
          dF = eF + AF, SF(FF), null === (tW = bW.api) || void 0 === tW || tW.setSession(FF.sessionMeta), null === EF || void 0 === EF || null === (TF = EF.onSessionChange) || void 0 === TF || TF.call(EF, null !== (aW = null === rW || void 0 === rW ? void 0 : rW.sessionMeta) && void 0 !== aW ? aW : null, FF.sessionMeta)
        }
      }
    }

    function oW(FF) {
      let WF, {
          fetchUserSession: SF,
          storeUserSession: CF,
          updateInterval: AF = 0
        } = FF,
        uF = 0;
      return FF => {
        const hF = eW();
        if (FF === WF && hF < uF && uF - hF <= AF) return;
        WF = FF, uF = hF + AF;
        const bW = SF();
        (null === bW || void 0 === bW ? void 0 : bW.sessionId) === FF && xS(bW) && CF(RW(RW({}, bW), {}, {
          lastActivity: hF
        }))
      }
    }

    function YW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rW;
      var CF, AF, uF, hF, bW, dF;
      const PF = RW(RW({}, FF), {}, {
          sessionMeta: {
            id: FF.sessionId,
            attributes: cS(RW(RW(RW({}, null === (CF = SF.config.sessionTracking) || void 0 === CF || null === (CF = CF.session) || void 0 === CF ? void 0 : CF.attributes), null !== (AF = null === (uF = SF.metas.value.session) || void 0 === uF ? void 0 : uF.attributes) && void 0 !== AF ? AF : {}), {}, {
              isSampled: FF.isSampled.toString()
            }))
          }
        }),
        RF = null !== (hF = null === (bW = SF.metas.value.session) || void 0 === bW ? void 0 : bW.overrides) && void 0 !== hF ? hF : null === WF || void 0 === WF || null === (dF = WF.sessionMeta) || void 0 === dF ? void 0 : dF.overrides;
      UF(RF) || (PF.sessionMeta.overrides = RF);
      const iW = null === WF || void 0 === WF ? void 0 : WF.sessionId;
      return null != iW && (PF.sessionMeta.attributes.previousSession = iW), PF
    }

    function MW(FF) {
      let {
        fetchUserSession: WF,
        storeUserSession: SF
      } = FF, CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rW, AF = !1;
      return function(FF) {
        if (AF) return;
        const uF = FF.session,
          hF = WF();
        let bW = null === uF || void 0 === uF ? void 0 : uF.id;
        const dF = null === uF || void 0 === uF ? void 0 : uF.attributes,
          PF = null === uF || void 0 === uF ? void 0 : uF.overrides,
          RF = null === hF || void 0 === hF ? void 0 : hF.sessionMeta,
          iW = null === RF || void 0 === RF ? void 0 : RF.overrides,
          eF = !!PF && !TW(PF, iW),
          EF = !!dF && !TW(dF, null === RF || void 0 === RF ? void 0 : RF.attributes);
        if (uF && bW !== (null === hF || void 0 === hF ? void 0 : hF.sessionId) || EF || eF) {
          var QF, rW;
          const FF = null != hF && bW === hF.sessionId,
            WF = YW(FF ? hF : OW({
              sessionId: bW,
              isSampled: iS(CF)
            }, CF), hF, CF),
            uF = null === hF || void 0 === hF || null === (QF = hF.sessionMeta) || void 0 === QF || null === (QF = QF.attributes) || void 0 === QF ? void 0 : QF.previousSession;
          FF && null != uF && uF !== WF.sessionId && (WF.sessionMeta.attributes.previousSession = uF), (null === (rW = WF.sessionMeta.attributes) || void 0 === rW ? void 0 : rW.previousSession) === WF.sessionId && delete WF.sessionMeta.attributes.previousSession, SF(WF),
            function(FF, WF) {
              let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var AF, uF, hF;
              if (!WF) return;
              const bW = SF.serviceName,
                dF = null !== (AF = null !== (uF = CF.serviceName) && void 0 !== uF ? uF : null === (hF = FF.metas.value.app) || void 0 === hF ? void 0 : hF.name) && void 0 !== AF ? AF : "";
              bW && bW !== dF && FF.api.pushEvent(LW, {
                serviceName: bW,
                previousServiceName: dF
              })
            }(CF, eF, PF, iW), AF = !0;
          try {
            CF.api.setSession(WF.sessionMeta)
          } finally {
            AF = !1
          }
        }
      }
    }

    function cS(FF) {
      const WF = {};
      for (const SF of Object.keys(FF)) {
        const CF = FF[SF];
        void 0 !== CF && (WF[SF] = CF)
      }
      return WF
    }

    function GW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== FF && void 0 !== FF ? FF : {}, function() {
        const FF = new WeakSet;
        return function(WF, SF) {
          if (OF(SF) && null !== SF) {
            if (FF.has(SF)) return null;
            FF.add(SF)
          }
          return SF
        }
      }())
    }

    function zS() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const WF = {};
      for (const [SF, CF] of Object.entries(FF)) WF[SF] = OF(CF) && null !== CF ? GW(CF) : String(CF);
      return WF
    }
    var IW = class FF {
      constructor() {
        var WF = this;
        let SF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rW;
        this.context = SF, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = FF => {
          this.adopting = !0;
          try {
            var WF;
            null === (WF = this.context.api) || void 0 === WF || WF.setSession(FF)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: FF = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return WF.updateUserSession({
            refreshActivity: FF
          })
        }, this.recordActivity = oW({
          fetchUserSession: FF.fetchUserSession,
          storeUserSession: FF.storeUserSession,
          updateInterval: bW
        }), this.updateUserSession = ZW({
          fetchUserSession: FF.fetchUserSession,
          storeUserSession: FF.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: bW
        }, SF), this.init()
      }
      static removeUserSession() {
        SW(AF, FF.storageTypeLocal)
      }
      static storeUserSession(WF) {
        WW(AF, GW(WF), FF.storageTypeLocal)
      }
      static fetchUserSession() {
        const WF = FW(AF, FF.storageTypeLocal);
        return WF ? JSON.parse(WF) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var FF;
            this.updateSession({
              refreshActivity: !1
            });
            const WF = null === (FF = this.context.api) || void 0 === FF || null === (FF = FF.getSession()) || void 0 === FF ? void 0 : FF.id;
            WF && this.recordActivity(WF)
          }
        })), this.context.metas.addListener(MW({
          fetchUserSession: FF.fetchUserSession,
          storeUserSession: FF.storeUserSession
        }, this.context))
      }
    };
    IW.storageTypeLocal = pF;
    var fW = class FF {
      constructor() {
        var WF = this;
        let SF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rW;
        this.context = SF, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: FF = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return WF.updateUserSession({
            refreshActivity: FF
          })
        }, this.recordActivity = oW({
          fetchUserSession: FF.fetchUserSession,
          storeUserSession: FF.storeUserSession,
          updateInterval: bW
        }), this.updateUserSession = ZW({
          fetchUserSession: FF.fetchUserSession,
          storeUserSession: FF.storeUserSession,
          updateInterval: bW
        }, SF), this.init()
      }
      static removeUserSession() {
        SW(AF, FF.storageTypeSession)
      }
      static storeUserSession(WF) {
        WW(AF, GW(WF), FF.storageTypeSession)
      }
      static fetchUserSession() {
        const WF = FW(AF, FF.storageTypeSession);
        return WF ? JSON.parse(WF) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var FF;
            this.updateSession({
              refreshActivity: !1
            });
            const WF = null === (FF = this.context.api) || void 0 === FF || null === (FF = FF.getSession()) || void 0 === FF ? void 0 : FF.id;
            WF && this.recordActivity(WF)
          }
        })), this.context.metas.addListener(MW({
          fetchUserSession: FF.fetchUserSession,
          storeUserSession: FF.storeUserSession
        }, this.context))
      }
    };
    fW.storageTypeSession = JF;
    const yS = new WeakMap;

    function sW(FF) {
      let WF = yS.get(FF);
      if (!WF) {
        let SF = [],
          CF = [];
        WF = {
          addSessionUpdateListener: FF => {
            SF.push(FF)
          },
          removeSessionUpdateListener: FF => {
            SF = SF.filter((WF => WF !== FF))
          },
          notifySessionUpdate: FF => {
            SF.forEach((WF => WF(FF)))
          },
          shouldCapture: () => CF.every((FF => FF())),
          addCaptureFilter: FF => {
            CF.push(FF)
          },
          removeCaptureFilter: FF => {
            CF = CF.filter((WF => WF !== FF))
          }
        }, yS.set(FF, WF)
      }
      return WF
    }
    var nW = class {
      constructor(FF, WF, SF) {
        this.metas = FF, this.transports = WF, this.onActivate = SF, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = FF => {
          var WF, SF, CF;
          const AF = this.pending;
          var uF, hF;
          if ("overrides" === FF.type) return void(this.pending = {
            reset: null !== (uF = null === AF || void 0 === AF ? void 0 : AF.reset) && void 0 !== uF && uF,
            inheritOverrides: null === (hF = null === AF || void 0 === AF ? void 0 : AF.inheritOverrides) || void 0 === hF || hF,
            session: RW(RW({}, null === AF || void 0 === AF ? void 0 : AF.session), {}, {
              overrides: RW(RW({}, null === AF || void 0 === AF ? void 0 : AF.session.overrides), FF.overrides)
            })
          });
          const bW = FF.session,
            dF = UF(bW) || null != bW && "id" in bW && !bW.id,
            PF = null !== (WF = null === bW || void 0 === bW ? void 0 : bW.overrides) && void 0 !== WF ? WF : null === AF || void 0 === AF ? void 0 : AF.session.overrides;
          this.pending = {
            reset: dF || !(null === bW || void 0 === bW ? void 0 : bW.id) && null !== (SF = null === AF || void 0 === AF ? void 0 : AF.reset) && void 0 !== SF && SF,
            inheritOverrides: !(!FF.overrides && void 0 !== (null === bW || void 0 === bW ? void 0 : bW.overrides)) && (null === (CF = null === AF || void 0 === AF ? void 0 : AF.inheritOverrides) || void 0 === CF || CF),
            session: {
              id: null === bW || void 0 === bW ? void 0 : bW.id,
              attributes: (null === bW || void 0 === bW ? void 0 : bW.attributes) && RW({}, bW.attributes),
              overrides: FF.overrides ? RW(RW({}, null === AF || void 0 === AF ? void 0 : AF.session.overrides), FF.overrides) : PF && RW({}, PF)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var FF, WF;
        this.waiting = !0, sW(this.metas).addSessionUpdateListener(this.recordUpdate), sW(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (FF = (WF = this.metas).addCaptureListener) || void 0 === FF || FF.call(WF, this.activate), this.activate()
      }
      destroy() {
        var FF, WF;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), sW(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (FF = (WF = this.metas).removeCaptureListener) || void 0 === FF || FF.call(WF, this.activate), sW(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function HW(FF) {
      return (null === FF || void 0 === FF ? void 0 : FF.persistent) ? IW : fW
    }

    function KW() {}
    let wW = function(FF) {
      return FF[FF.OFF = 0] = "OFF", FF[FF.ERROR = 1] = "ERROR", FF[FF.WARN = 2] = "WARN", FF[FF.INFO = 3] = "INFO", FF[FF.VERBOSE = 4] = "VERBOSE", FF
    }({});
    const XW = {
        debug: KW,
        error: KW,
        info: KW,
        prefix: "Faro",
        warn: KW
      },
      UW = 1;

    function BW(FF) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, BW(FF)
    }

    function jS(FF) {
      var WF = function(FF, WF) {
        if ("object" != BW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != BW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == BW(WF) ? WF : WF + ""
    }

    function vS(FF, WF, SF) {
      return (WF = jS(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function JW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function pW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? JW(Object(SF), !0).forEach((function(WF) {
          vS(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : JW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }
    const lW = pW({}, console);
    var FS = class {
        constructor() {
          this.unpatchedConsole = lW, this.internalLogger = XW, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
          this.internalLogger.debug(`${this.name}\n`, ...WF)
        }
        logInfo() {
          for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
          this.internalLogger.info(`${this.name}\n`, ...WF)
        }
        logWarn() {
          for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
          this.internalLogger.warn(`${this.name}\n`, ...WF)
        }
        logError() {
          for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
          this.internalLogger.error(`${this.name}\n`, ...WF)
        }
      },
      WS = class extends FS {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const SS = "2.12.1";
    var CS = class extends WS {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = SS, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(FF) {
        var WF;
        const SF = FF.session;
        if (SF && SF.id !== (null === (WF = this.notifiedSession) || void 0 === WF ? void 0 : WF.id)) {
          var CF;
          if (this.isAdoptingSession()) return void(this.notifiedSession = SF);
          if (this.notifiedSession && this.notifiedSession.id === (null === (CF = SF.attributes) || void 0 === CF ? void 0 : CF.previousSession)) return this.api.pushEvent(DW, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = SF);
          this.notifiedSession = SF, this.api.pushEvent(VW, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(FF, WF, SF) {
        const CF = null === SF || void 0 === SF ? void 0 : SF.session;
        let AF, uF, hF = FF.fetchUserSession();
        if (WF.persistent && WF.maxSessionPersistenceTime && hF) {
          const FF = eW();
          hF.lastActivity < FF - WF.maxSessionPersistenceTime && (IW.removeUserSession(), hF = null)
        }
        const bW = xS(hF);
        if ((null === SF || void 0 === SF ? void 0 : SF.reset) || !bW || (null === CF || void 0 === CF ? void 0 : CF.id) && CF.id !== (null === hF || void 0 === hF ? void 0 : hF.sessionId)) {
          var dF, PF, RF, iW, eF, EF;
          uF = OW({
            sessionId: (null === SF || void 0 === SF ? void 0 : SF.reset) ? void 0 : null !== (dF = null === CF || void 0 === CF ? void 0 : CF.id) && void 0 !== dF ? dF : null === (PF = WF.session) || void 0 === PF ? void 0 : PF.id,
            isSampled: iS(this)
          }, this);
          const FF = uF.sessionId,
            QF = SF && bW ? null === hF || void 0 === hF || null === (RF = hF.sessionMeta) || void 0 === RF ? void 0 : RF.overrides : void 0,
            rW = QF ? RW(RW({}, null === (iW = WF.session) || void 0 === iW ? void 0 : iW.overrides), QF) : null === (eF = WF.session) || void 0 === eF ? void 0 : eF.overrides;
          uF.sessionMeta = RW({
            id: FF,
            attributes: RW({
              isSampled: uF.isSampled.toString()
            }, null === (EF = WF.session) || void 0 === EF ? void 0 : EF.attributes)
          }, rW ? {
            overrides: rW
          } : {}), AF = VW
        } else {
          var QF, rW;
          const FF = null === hF || void 0 === hF ? void 0 : hF.sessionId;
          uF = OW({
            sessionId: FF,
            isSampled: hF.isSampled || !1,
            started: null === hF || void 0 === hF ? void 0 : hF.started
          }, this);
          const SF = null === hF || void 0 === hF ? void 0 : hF.sessionMeta,
            CF = RW(RW({}, null === (QF = WF.session) || void 0 === QF ? void 0 : QF.overrides), null === SF || void 0 === SF ? void 0 : SF.overrides);
          uF.sessionMeta = RW(RW({}, WF.session), {}, {
            id: FF,
            attributes: RW(RW(RW({}, null === (rW = WF.session) || void 0 === rW ? void 0 : rW.attributes), null === SF || void 0 === SF ? void 0 : SF.attributes), {}, {
              isSampled: uF.isSampled.toString()
            }),
            overrides: CF
          }), AF = NW
        }
        var gW;
        if (CF && (uF.sessionMeta = RW(RW({}, uF.sessionMeta), {}, {
            attributes: RW(RW(RW({}, null === (gW = uF.sessionMeta) || void 0 === gW ? void 0 : gW.attributes), CF.attributes), {}, {
              isSampled: uF.isSampled.toString()
            })
          }), CF.overrides)) {
          const FF = (null === SF || void 0 === SF ? void 0 : SF.inheritOverrides) ? RW(RW({}, uF.sessionMeta.overrides), CF.overrides) : CF.overrides;
          Object.keys(FF).length > 0 ? uF.sessionMeta.overrides = FF : delete uF.sessionMeta.overrides
        }
        return {
          initialSession: uF,
          lifecycleType: AF
        }
      }
      registerBeforeSendHook(FF) {
        var WF;
        this.beforeSendHook = WF => {
          var SF, CF;
          const AF = null === (SF = WF.meta.session) || void 0 === SF ? void 0 : SF.id;
          AF && !this.transports.isPaused() && FF(AF);
          const uF = null === (CF = WF.meta.session) || void 0 === CF ? void 0 : CF.attributes;
          if (uF && "true" === (null === uF || void 0 === uF ? void 0 : uF.isSampled)) {
            var hF;
            let FF = JSON.parse(JSON.stringify(WF));
            const SF = null === (hF = FF.meta.session) || void 0 === hF ? void 0 : hF.attributes;
            var bW;
            if (null === SF || void 0 === SF || delete SF.isSampled, 0 === Object.keys(null !== SF && void 0 !== SF ? SF : {}).length) null === (bW = FF.meta.session) || void 0 === bW || delete bW.attributes;
            return FF
          }
          return null
        }, null === (WF = this.transports) || void 0 === WF || WF.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var FF;
        this.logDebug("init session instrumentation");
        const WF = document.prerendering;
        var SF;
        if ((null === (FF = this.config.sessionTracking) || void 0 === FF ? void 0 : FF.enabled) && (WF || this.prerenderSession)) return null !== (SF = this.prerenderSession) && void 0 !== SF || (this.prerenderSession = new nW(this.metas, this.transports, (FF => {
          this.prerenderSession = void 0, this.initializeSession(FF)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(FF) {
        const WF = this.config.sessionTracking;
        if (null === WF || void 0 === WF ? void 0 : WF.enabled) {
          var SF, CF;
          const AF = HW(WF),
            uF = new AF(this);
          this.isAdoptingSession = uF.isAdopting, this.registerBeforeSendHook(uF.recordActivity);
          const {
            initialSession: hF,
            lifecycleType: bW
          } = this.createInitialSession(AF, WF, FF);
          AF.storeUserSession(hF);
          const dF = hF.sessionMeta;
          this.notifiedSession = dF, this.api.setSession(dF), this.captureListener = () => {
            this.transports.isPaused() || uF.updateSession({
              refreshActivity: !1
            })
          }, null === (SF = (CF = this.metas).addCaptureListener) || void 0 === SF || SF.call(CF, this.captureListener), bW === VW && this.api.pushEvent(VW, {}, void 0, {
            skipDedupe: !0
          }), bW === NW && this.api.pushEvent(NW, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var FF, WF, SF;
        (null === (FF = this.prerenderSession) || void 0 === FF || FF.destroy(), this.captureListener) && (null === (WF = (SF = this.metas).removeCaptureListener) || void 0 === WF || WF.call(SF, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function AS(FF, WF, SF, CF) {
      const AF = {
        filename: FF || document.location.href,
        function: WF || "?"
      };
      return void 0 !== SF && (AF.lineno = SF), void 0 !== CF && (AF.colno = CF), AF
    }
    const uS = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      hS = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      bC = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      dS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      PS = "safari-extension",
      RS = "safari-web-extension",
      iC = /Minified React error #\d+;/i;

    function eS(FF, WF) {
      const SF = null === FF || void 0 === FF ? void 0 : FF.includes(PS),
        CF = !SF && (null === FF || void 0 === FF ? void 0 : FF.includes("safari-web-extension"));
      return SF || CF ? [(null === FF || void 0 === FF ? void 0 : FF.includes("@")) ? FF.split("@")[0] : FF, SF ? `${PS}:${WF}` : `${RS}:${WF}`] : [FF, WF]
    }
    const ES = 1024;

    function QS(FF) {
      let WF = [];
      FF.stacktrace ? WF = FF.stacktrace.split("\n").filter(((FF, WF) => WF % 2 === 0)) : FF.stack && (WF = FF.stack.split("\n"));
      const SF = WF.reduce(((WF, SF, CF) => {
        if (SF.length > ES) return WF;
        let AF, uF, hF, bW, dF;
        if (AF = uS.exec(SF)) {
          if (uF = AF[1], hF = AF[2], bW = AF[3], dF = AF[4], null === hF || void 0 === hF ? void 0 : hF.startsWith("eval")) {
            const FF = hS.exec(hF);
            FF && (hF = FF[1], bW = FF[2], dF = FF[3])
          }
          hF = (null === hF || void 0 === hF ? void 0 : hF.startsWith("address at ")) ? hF.substring(11) : hF, [uF, hF] = eS(uF, hF)
        } else if (AF = bC.exec(SF)) {
          if (uF = AF[1], hF = AF[3], bW = AF[4], dF = AF[5], hF && hF.includes(" > eval")) {
            const FF = dS.exec(hF);
            FF && (uF = uF || "eval", hF = FF[1], bW = FF[2])
          } else 0 === CF && !dF && NF(FF.columnNumber) && (dF = String(FF.columnNumber + 1));
          [uF, hF] = eS(uF, hF)
        }
        return (hF || uF) && WF.push(AS(hF, uF, bW ? Number(bW) : void 0, dF ? Number(dF) : void 0)), WF
      }), []);
      return iC.test(FF.message) ? SF.slice(1) : SF
    }

    function rC(FF) {
      return {
        frames: QS(FF)
      }
    }
    const gC = "http-request-start",
      tC = "http-request-end";
    var TS = class FF {
      constructor() {
        this.subscribers = []
      }
      subscribe(FF) {
        return this.subscribers.push(FF), {
          unsubscribe: () => this.unsubscribe(FF)
        }
      }
      unsubscribe(FF) {
        this.subscribers = this.subscribers.filter((WF => WF !== FF))
      }
      notify(FF) {
        this.subscribers.forEach((WF => WF(FF)))
      }
      first() {
        const WF = new FF,
          SF = FF => {
            WF.notify(FF), CF.unsubscribe()
          },
          CF = this.subscribe(SF),
          AF = WF.unsubscribe.bind(WF);
        return this.withUnsubscribeOverride(WF, AF, SF)
      }
      takeWhile(WF) {
        const SF = new FF,
          CF = FF => {
            WF(FF) ? SF.notify(FF) : SF.unsubscribe(CF)
          };
        this.subscribe(CF);
        const AF = SF.unsubscribe.bind(SF);
        return this.withUnsubscribeOverride(SF, AF, CF)
      }
      filter(WF) {
        const SF = new FF,
          CF = FF => {
            WF(FF) && SF.notify(FF)
          };
        this.subscribe(CF);
        const AF = SF.unsubscribe.bind(SF);
        return this.withUnsubscribeOverride(SF, AF, CF)
      }
      merge() {
        const WF = new FF,
          SF = [];
        for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
        AF.forEach((FF => {
          const CF = FF.subscribe((FF => {
            WF.notify(FF)
          }));
          SF.push(CF)
        }));
        const hF = WF.unsubscribeAll.bind(WF);
        return WF.unsubscribe = () => {
          SF.forEach((FF => FF.unsubscribe())), hF()
        }, WF
      }
      withUnsubscribeOverride(FF, WF, SF) {
        return FF.unsubscribe = FF => {
          WF(FF), this.unsubscribe(SF)
        }, FF
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let aC = function(FF) {
      return FF.TRACE = "trace", FF.DEBUG = "debug", FF.INFO = "info", FF.LOG = "log", FF.WARN = "warn", FF.ERROR = "error", FF
    }({});
    const kC = "log",
      qC = ["trace", "debug", "info", "log", "warn", "error"];
    let VS, NS = !1;
    const DS = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      LS = "Error",
      mC = FF => FF.map((FF => OF(FF) ? GW(FF) : String(FF))).join(" ");

    function OS(FF) {
      let WF, SF, CF, AF, uF = [];
      if (fF(FF) && FF.error) WF = FF.error.message, SF = FF.error.name, uF = QS(FF.error);
      else if ((CF = yW(FF)) || sF(FF)) {
        const {
          name: AF,
          message: uF
        } = FF;
        SF = null !== AF && void 0 !== AF ? AF : CF ? "DOMError" : "DOMException", WF = uF ? `${SF}: ${uF}` : SF
      } else IF(FF) ? (SF = FF.name, WF = FF.message, uF = QS(FF)) : (OF(FF) || (AF = GF(FF))) && (SF = AF ? FF.constructor.name : void 0, WF = `Non-Error exception captured with keys: ${Object.keys(FF)}`);
      return [WF, SF, uF]
    }

    function xC(FF) {
      const [WF, SF, CF, AF, uF] = FF;
      let hF, bW, dF = [];
      const PF = VF(WF),
        RF = AS(SF, "?", CF, AF);
      return uF || !PF ? ([hF, bW, dF] = OS(null !== uF && void 0 !== uF ? uF : WF), 0 === dF.length && (dF = [RF])) : PF && ([hF, bW] = function(FF) {
        var WF, SF;
        const CF = FF.match(DS),
          AF = null !== (WF = null === CF || void 0 === CF ? void 0 : CF[1]) && void 0 !== WF ? WF : LS;
        return [null !== (SF = null === CF || void 0 === CF ? void 0 : CF[2]) && void 0 !== SF ? SF : FF, AF]
      }(WF), dF = [RF]), {
        value: hF,
        type: bW,
        stackFrames: dF
      }
    }

    function ZS(FF, WF) {
      return IF(FF[0]) ? xC(FF) : {
        value: WF(FF)
      }
    }
    const oS = FF => FF.map((FF => {
      try {
        return String(FF)
      } catch (WF) {
        return ""
      }
    })).join(" ");
    var YS = class FF extends WS {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = SS, this.errorSerializer = oS
      }
      initialize() {
        var WF, SF;
        const CF = this.config.consoleInstrumentation,
          AF = (null === CF || void 0 === CF ? void 0 : CF.serializeErrors) || !!(null === CF || void 0 === CF ? void 0 : CF.errorSerializer);
        this.errorSerializer = AF ? null !== (WF = null === CF || void 0 === CF ? void 0 : CF.errorSerializer) && void 0 !== WF ? WF : mC : oS;
        const uF = null !== (SF = null === CF || void 0 === CF ? void 0 : CF.disabledLevels) && void 0 !== SF ? SF : FF.defaultDisabledLevels,
          hF = function(FF) {
            if (VS || (VS = new TS), !NS) {
              const WF = null !== FF && void 0 !== FF ? FF : lW;
              qC.forEach((FF => {
                console[FF] = function() {
                  for (var SF, CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
                  VS.notify({
                    type: "console",
                    level: FF,
                    args: AF
                  }), null === (SF = WF[FF]) || void 0 === SF || SF.apply(console, AF)
                }
              })), NS = !0
            }
            return VS
          }(this.unpatchedConsole);
        this.subscription = hF.subscribe((WF => {
          let {
            level: SF,
            args: AF
          } = WF;
          if (!uF.includes(SF)) try {
            if (SF !== aC.ERROR || (null === CF || void 0 === CF ? void 0 : CF.consoleErrorAsLog))
              if (SF === aC.ERROR && (null === CF || void 0 === CF ? void 0 : CF.consoleErrorAsLog)) {
                const {
                  value: WF,
                  type: CF,
                  stackFrames: uF
                } = ZS(AF, this.errorSerializer);
                this.api.pushLog(WF ? [FF.consoleErrorPrefix + WF] : AF, {
                  level: SF,
                  context: {
                    value: null !== WF && void 0 !== WF ? WF : "",
                    type: null !== CF && void 0 !== CF ? CF : "",
                    stackFrames: (null === uF || void 0 === uF ? void 0 : uF.length) ? mC(uF) : ""
                  }
                })
              } else this.api.pushLog(AF, {
                level: SF
              });
            else {
              const {
                value: WF,
                type: SF,
                stackFrames: CF
              } = ZS(AF, this.errorSerializer);
              if (WF && !SF && !CF) return void this.api.pushError(new Error(FF.consoleErrorPrefix + WF));
              this.api.pushError(new Error(FF.consoleErrorPrefix + WF), {
                type: SF,
                stackFrames: CF
              })
            }
          } catch (hF) {
            this.logError(hF)
          }
        }))
      }
      destroy() {
        var FF;
        null === (FF = this.subscription) || void 0 === FF || FF.unsubscribe(), this.subscription = void 0
      }
    };
    YS.defaultDisabledLevels = [aC.DEBUG, aC.TRACE, aC.LOG], YS.consoleErrorPrefix = "console.error: ";
    const MS = [];
    var cC = class extends WS {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = SS
      }
      initialize() {
        this.logDebug("Initializing"),
          function(FF) {
            const WF = window.onerror;
            window.onerror = function() {
              for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
              try {
                const {
                  value: WF,
                  type: SF,
                  stackFrames: AF
                } = xC(CF), uF = CF[4];
                if (WF) {
                  const CF = {
                    type: SF,
                    stackFrames: AF
                  };
                  null != uF && (CF.originalError = uF), FF.pushError(new Error(WF), CF)
                }
              } finally {
                null === WF || void 0 === WF || WF.apply(window, CF)
              }
            }
          }(this.api),
          function(FF) {
            const WF = WF => {
              var SF;
              let CF, AF, uF = WF;
              if (uF.reason) uF = WF.reason;
              else if (null === (SF = WF.detail) || void 0 === SF ? void 0 : SF.reason) {
                var hF;
                uF = null === (hF = WF.detail) || void 0 === hF ? void 0 : hF.reason
              }
              let bW = [];
              MF(uF) ? (CF = `Non-Error promise rejection captured with value: ${String(uF)}`, AF = "UnhandledRejection") : [CF, AF, bW] = OS(uF), CF && FF.pushError(new Error(CF), {
                type: AF,
                stackFrames: bW
              })
            };
            window.addEventListener("unhandledrejection", WF), MS.push(WF)
          }(this.api)
      }
    };
    const GS = "unknown";
    var zC = class extends WS {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = SS, this.waitingForActivation = !1, this.sendViewChangedEvent = FF => {
          var WF;
          if (this.waitingForActivation || document.prerendering) return;
          const SF = FF.view;
          if (SF && SF.name !== (null === (WF = this.notifiedView) || void 0 === WF ? void 0 : WF.name)) {
            var CF, AF, uF;
            const FF = null !== (CF = null === (AF = this.notifiedView) || void 0 === AF ? void 0 : AF.name) && void 0 !== CF ? CF : GS;
            this.notifiedView = SF, this.api.pushEvent(qS, {
              fromView: FF,
              toView: null !== (uF = SF.name) && void 0 !== uF ? uF : GS
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
    class IS {
      t;
      o = 0;
      i = [];
      l(FF) {
        if (FF.hadRecentInput) return;
        const WF = this.i[0],
          SF = this.i.at(-1);
        this.o && WF && SF && FF.startTime - SF.startTime < 1e3 && FF.startTime - WF.startTime < 5e3 ? (this.o += FF.value, this.i.push(FF)) : (this.o = FF.value, this.i = [FF]), this.t?.(FF)
      }
    }
    const fS = () => {
        const FF = performance.getEntriesByType("navigation")[0];
        if (FF && FF.responseStart > 0 && FF.responseStart < performance.now()) return FF
      },
      yC = FF => {
        if ("loading" === document.readyState) return "loading";
        const WF = fS();
        if (WF) {
          if (FF < WF.domInteractive) return "loading";
          if (0 === WF.domContentLoadedEventStart || FF < WF.domContentLoadedEventStart) return "dom-interactive";
          if (0 === WF.domComplete || FF < WF.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      sS = FF => {
        const WF = FF.nodeName;
        return 1 === FF.nodeType ? WF.toLowerCase() : WF.toUpperCase().replace(/^#/, "")
      },
      nS = FF => {
        let WF = "";
        try {
          for (; 9 !== FF?.nodeType;) {
            const SF = FF,
              CF = SF.id ? "#" + SF.id : [sS(SF), ...Array.from(SF.classList ?? []).sort()].join(".");
            if (WF.length + CF.length > 99) return WF || CF;
            if (WF = WF ? CF + ">" + WF : CF, SF.id) break;
            FF = SF.parentNode
          }
        } catch {}
        return WF
      },
      HS = new WeakMap;

    function KS(FF, WF) {
      let SF = HS.get(WF);
      return SF || (SF = new WeakMap, HS.set(WF, SF)), SF.get(FF) || SF.set(FF, new WF), SF.get(FF)
    }
    let wS = -1;
    const XS = () => wS,
      US = FF => {
        addEventListener("pageshow", (WF => {
          WF.persisted && (wS = WF.timeStamp, FF(WF))
        }), !0)
      },
      BS = (FF, WF, SF, CF) => {
        let AF, uF;
        return hF => {
          WF.value >= 0 && (hF || CF) && (uF = WF.value - (AF ?? 0), (uF || void 0 === AF) && (AF = WF.value, WF.delta = uF, WF.rating = ((FF, WF) => FF > WF[1] ? "poor" : FF > WF[0] ? "needs-improvement" : "good")(WF.value, SF), FF(WF)))
        }
      },
      jC = FF => {
        requestAnimationFrame((() => requestAnimationFrame((() => FF()))))
      },
      vC = () => fS()?.activationStart ?? 0;
    let JS = -1;
    const pS = new Set,
      lS = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      FC = FF => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === FF.type)
            for (const FF of pS) FF();
          isFinite(JS) || (JS = "visibilitychange" === FF.type ? FF.timeStamp : 0, removeEventListener("prerenderingchange", FC, !0))
        }
      },
      WC = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (JS = 1 / 0), JS < 0) {
          const FF = vC(),
            WF = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((WF => "hidden" === WF.name && WF.startTime >= FF))?.startTime;
          JS = WF ?? lS(), addEventListener("visibilitychange", FC, !0), addEventListener("prerenderingchange", FC, !0), US((() => {
            setTimeout((() => {
              JS = lS()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return JS
          },
          onHidden(FF) {
            pS.add(FF)
          }
        }
      },
      SC = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0,
          hF = arguments.length > 6 ? arguments[6] : void 0;
        const bW = fS(),
          dF = bW?.navigationId || 0;
        let PF = "navigate";
        return SF ? PF = SF : XS() >= 0 ? PF = "back-forward-cache" : bW && (document.prerendering || vC() > 0 ? PF = "prerender" : document.wasDiscarded ? PF = "restore" : bW.type && (PF = bW.type.replace(/_/g, "-"))), {
          name: FF,
          value: WF,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: PF,
          navigationId: CF || dF,
          navigationInteractionId: AF,
          navigationURL: uF || bW?.name,
          navigationStartTime: hF || 0
        }
      },
      CC = function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const CF = FF.filter((FF => PerformanceObserver.supportedEntryTypes.includes(FF)));
          if (CF.length > 0) {
            const FF = new PerformanceObserver((FF => {
              queueMicrotask((() => {
                const SF = FF.getEntries();
                CF.length > 1 && SF.sort(((FF, WF) => FF.startTime + FF.duration - (WF.startTime + WF.duration))), WF(SF)
              }))
            }));
            for (const WF of CF) FF.observe({
              type: WF,
              buffered: !0,
              ...SF
            });
            return FF
          }
        } catch {}
      },
      AC = FF => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && FF && FF.reportSoftNavs,
      uC = (FF, WF) => {
        if (FF.set(WF.navigationId, WF), FF.size > 2) {
          const WF = FF.keys().next().value;
          void 0 !== WF && FF.delete(WF)
        }
      },
      hC = FF => {
        let WF = !1;
        return () => {
          WF || (FF(), WF = !0)
        }
      };
    class bA {
      u
    }
    const dC = FF => {
        document.prerendering ? addEventListener("prerenderingchange", FF, !0) : FF()
      },
      PC = [1800, 3e3],
      RC = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SF = AC(WF);
        dC((() => {
          const CF = KS(WF, bA),
            AF = WC();
          let uF, hF = SC("FCP");
          const bW = CC(["paint"], (FF => {
            for (const WF of FF) "first-contentful-paint" === WF.name && (bW.disconnect(), WF.startTime < AF.firstHiddenTime && (hF.value = Math.max(WF.startTime - vC(), 0), hF.entries.push(WF), hF.navigationId = WF.navigationId || hF.navigationId, uF(!0)))
          }));
          bW && (uF = BS(FF, hF, PC, WF.reportAllChanges), US((SF => {
            hF = SC("FCP", -1, "back-forward-cache", hF.navigationId, hF.navigationInteractionId, hF.navigationURL, XS()), uF = BS(FF, hF, PC, WF.reportAllChanges), jC((() => {
              hF.value = performance.now() - SF.timeStamp, uF(!0)
            }))
          }))), SF && CC(["soft-navigation"], (SF => {
            SF.forEach((SF => {
              CF.u && SF.navigationId && uC(CF.u, SF);
              const AF = Math.max((SF.presentationTime || SF.paintTime || 0) - SF.startTime, 0);
              hF = SC("FCP", AF, "soft-navigation", SF.navigationId, SF.interactionId, SF.name, SF.startTime), uF = BS(FF, hF, PC, WF.reportAllChanges), uF(!0)
            }))
          }), WF)
        }))
      },
      iA = [.1, .25],
      eC = FF => FF.find((FF => 1 === FF.node?.nodeType)) || FF[0];
    let EC = 0,
      QC = 1 / 0,
      rA = 0;
    const gA = FF => {
      for (const WF of FF) WF.interactionId && (QC = Math.min(QC, WF.interactionId), rA = Math.max(rA, WF.interactionId), EC = rA ? (rA - QC) / 7 + 1 : 0)
    };
    let tA;
    const TC = () => tA ? EC : performance.interactionCount ?? 0;
    class aA {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return TC() - this.h
      }
      D() {
        this.h = TC(), this.v.length = 0, this.p.clear()
      }
      S(FF) {
        const WF = this.T(),
          SF = Math.min(this.v.length - 1, Math.floor(WF / 50));
        return !WF || -1 !== SF || "soft-navigation" !== FF && "back-forward-cache" !== FF ? this.v[SF] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(FF) {
        if (this.m?.(FF), !FF.interactionId) return;
        const WF = this.v.at(-1);
        let SF = this.p.get(FF.interactionId);
        if (SF || this.v.length < 10 || FF.duration > WF.k) {
          if (SF ? FF.duration > SF.k ? (SF.entries = [FF], SF.k = FF.duration) : FF.duration === SF.k && FF.startTime === SF.entries[0].startTime && SF.entries.push(FF) : (SF = {
              id: FF.interactionId,
              entries: [FF],
              k: FF.duration
            }, this.p.set(SF.id, SF), this.v.push(SF)), this.v.sort(((FF, WF) => WF.k - FF.k)), this.v.length > 10) {
            const FF = this.v.splice(10);
            for (const WF of FF) this.p.delete(WF.id)
          }
          this.M?.(SF)
        }
      }
    }
    const kA = FF => {
        const WF = "requestIdleCallback" in globalThis ? 1e3 : 0,
          SF = globalThis.requestIdleCallback || setTimeout,
          CF = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) FF();
        else {
          const AF = hC(FF);
          let uF = -1;
          const hF = () => {
            CF(uF), AF()
          };
          addEventListener("visibilitychange", hF, {
            once: !0,
            capture: !0
          }), uF = SF((() => {
            removeEventListener("visibilitychange", hF, {
              capture: !0
            }), AF()
          }), {
            timeout: WF
          })
        }
      },
      qA = [200, 500],
      VC = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const SF = KS(WF = Object.assign({}, WF), aA);
        let CF = [],
          AF = [],
          uF = 0;
        const hF = new WeakMap,
          bW = new WeakMap;
        let dF = !1;
        const PF = () => {
            dF || (dF = !0, kA(RF))
          },
          RF = () => {
            const FF = new Set(SF.v.map((FF => hF.get(FF.entries[0])))),
              WF = AF.length - 10;
            AF = AF.filter(((SF, CF) => CF >= WF || FF.has(SF)));
            const bW = new Set;
            for (const SF of AF) {
              const FF = iW(SF.startTime, SF.processingEnd);
              for (const WF of FF) bW.add(WF)
            }
            const PF = CF.length - 10;
            CF = CF.filter(((FF, WF) => bW.has(FF) || WF >= PF && FF.startTime > uF)), dF = !1
          };
        SF.m = FF => {
          const SF = FF.startTime + FF.duration;
          let CF;
          uF = Math.max(uF, FF.processingEnd);
          for (let uF = AF.length - 1; uF >= 0; uF--) {
            const hF = AF[uF];
            if (Math.abs(SF - hF.renderTime) <= 8) {
              CF = hF, CF.startTime = Math.min(FF.startTime, CF.startTime), CF.processingStart = Math.min(FF.processingStart, CF.processingStart), CF.processingEnd = Math.max(FF.processingEnd, CF.processingEnd), WF.includeProcessedEventEntries && CF.entries.push(FF);
              break
            }
          }
          CF || (CF = {
            startTime: FF.startTime,
            processingStart: FF.processingStart,
            processingEnd: FF.processingEnd,
            renderTime: SF,
            entries: WF.includeProcessedEventEntries ? [FF] : []
          }, AF.push(CF)), FF.interactionId && hF.set(FF, CF), PF()
        }, SF.M = FF => {
          if (!bW.get(FF)) {
            const SF = FF.entries.find((FF => FF.target))?.target;
            if (SF) {
              const CF = WF.generateTarget?.(SF) ?? nS(SF);
              bW.set(FF, CF)
            } else {
              const WF = FF.entries.find((FF => FF.targetSelector))?.targetSelector;
              WF && bW.set(FF, WF)
            }
          }
        };
        const iW = (FF, WF) => {
          const SF = [];
          for (const AF of CF)
            if (!(AF.startTime + AF.duration < FF)) {
              if (AF.startTime > WF) break;
              SF.push(AF)
            } return SF
        };
        CC(["long-animation-frame"], (FF => {
            CF = CF.concat(FF), PF()
          }), WF),
          function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const SF = WC();
            dC((() => {
              "interactionCount" in performance || tA || (tA = CC(["event"], gA, {
                durationThreshold: 0
              }));
              let CF, AF = SC("INP");
              const uF = KS(WF, aA),
                hF = (SF, hF, bW, dF, PF) => {
                  uF.D(), AF = SC("INP", -1, SF, hF, bW, dF, PF), CF = BS(FF, AF, qA, WF.reportAllChanges)
                },
                bW = () => {
                  const FF = uF.S(AF.navigationType);
                  FF && FF.k !== AF.value && (AF.value = FF.k, AF.entries = FF.entries, CF())
                },
                dF = FF => {
                  bW(), CF(!0), hF("soft-navigation", FF.navigationId, FF.interactionId, FF.name, FF.startTime)
                },
                PF = function(FF) {
                  let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  kA((() => {
                    for (const WF of FF) "soft-navigation" !== WF.entryType ? uF.l(WF) : dF(WF);
                    bW(), WF && CF(!0)
                  }))
                },
                RF = ["event", "first-input"];
              AC(WF) && RF.push("soft-navigation");
              const iW = CC(RF, PF, {
                ...WF,
                durationThreshold: WF.durationThreshold ?? 40
              });
              CF = BS(FF, AF, qA, WF.reportAllChanges), iW && (SF.onHidden((() => {
                PF(iW.takeRecords(), !0)
              })), US((() => {
                hF("back-forward-cache", AF.navigationId, AF.navigationInteractionId, AF.navigationURL, XS())
              })))
            }))
          }((WF => {
            FF((FF => {
              if (0 === FF.entries.length) {
                const WF = FF.navigationStartTime || 0,
                  SF = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: FF.value,
                    loadState: yC(WF)
                  };
                return Object.assign(FF, {
                  attribution: SF
                })
              }
              const WF = FF.entries[0],
                CF = hF.get(WF),
                AF = Math.max(CF.processingStart, WF.startTime),
                uF = Math.max(WF.startTime + WF.duration, AF),
                dF = Math.min(CF.processingEnd, uF),
                PF = CF.entries.sort(((FF, WF) => FF.processingStart - WF.processingStart)),
                RF = iW(WF.startTime, dF),
                eF = SF.p.get(WF.interactionId),
                EF = {
                  interactionTarget: bW.get(eF),
                  interactionType: WF.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: WF.startTime,
                  nextPaintTime: uF,
                  processedEventEntries: PF,
                  longAnimationFrameEntries: RF,
                  inputDelay: AF - WF.startTime,
                  processingDuration: dF - AF,
                  presentationDelay: uF - dF,
                  loadState: yC(WF.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (FF => {
                const WF = FF.interactionTime,
                  SF = FF.nextPaintTime;
                if (!FF.longAnimationFrameEntries?.length || !WF || !SF) return;
                const CF = FF.inputDelay,
                  AF = FF.processingDuration;
                let uF, hF, bW = 0,
                  dF = 0,
                  PF = 0,
                  RF = 0;
                for (const EF of FF.longAnimationFrameEntries) {
                  dF = dF + EF.startTime + EF.duration - EF.styleAndLayoutStart;
                  for (const FF of EF.scripts) {
                    const SF = FF.startTime + FF.duration;
                    if (SF < WF) continue;
                    const PF = SF - Math.max(WF, FF.startTime),
                      iW = FF.duration ? PF / FF.duration * FF.forcedStyleAndLayoutDuration : 0;
                    bW += PF - iW, dF += iW, PF > RF && (hF = FF.startTime < WF + CF ? "input-delay" : FF.startTime >= WF + CF + AF ? "presentation-delay" : "processing-duration", uF = FF, RF = PF)
                  }
                }
                const iW = FF.longAnimationFrameEntries.at(-1),
                  eF = iW ? iW.startTime + iW.duration : 0;
                eF >= WF + CF + AF && (PF = SF - eF), uF && hF && (FF.longestScript = {
                  entry: uF,
                  subpart: hF,
                  intersectingDuration: RF
                }), FF.totalScriptDuration = bW, FF.totalStyleAndLayoutDuration = dF, FF.totalPaintDuration = PF, FF.totalUnattributedDuration = SF - WF - bW - dF - PF
              })(EF), Object.assign(FF, {
                attribution: EF
              })
            })(WF))
          }), WF)
      };
    class NC {
      m;
      u;
      l(FF) {
        this.m?.(FF)
      }
    }
    const DC = [2500, 4e3];
    let LC = 50;
    const mA = [];
    CC(["resource"], (FF => {
      for (const WF of FF) mA.push(WF), mA.length > LC && mA.shift()
    }));
    const OC = [800, 1800],
      xA = FF => {
        document.prerendering ? dC((() => xA(FF))) : "complete" !== document.readyState ? addEventListener("load", (() => xA(FF)), !0) : setTimeout(FF)
      },
      ZC = "load_state",
      oC = "time_to_first_byte";
    var YC = class {
        constructor(FF, WF) {
          this.corePushMeasurement = FF, this.webVitalConfig = WF
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var FF;
          ! function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const SF = KS(WF = Object.assign({}, WF), IS),
              CF = new WeakMap;
            SF.t = FF => {
                if (FF?.sources?.length) {
                  const SF = eC(FF.sources),
                    AF = SF?.node;
                  if (AF) {
                    const FF = WF.generateTarget?.(AF) ?? nS(AF);
                    CF.set(SF, FF)
                  }
                }
              },
              function(FF) {
                let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const SF = WC();
                RC(hC((() => {
                  let CF, AF = SC("CLS", 0);
                  const uF = KS(WF, IS),
                    hF = (SF, hF, bW, dF, PF) => {
                      AF = SC("CLS", 0, SF, hF, bW, dF, PF), uF.o = 0, CF = BS(FF, AF, iA, WF.reportAllChanges)
                    },
                    bW = function() {
                      let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      uF.o > AF.value && (AF.value = uF.o, AF.entries = uF.i), CF(FF)
                    },
                    dF = FF => {
                      bW(!0), hF("soft-navigation", FF.navigationId, FF.interactionId, FF.name, FF.startTime)
                    },
                    PF = FF => {
                      for (const WF of FF) "soft-navigation" !== WF.entryType ? uF.l(WF) : dF(WF);
                      bW()
                    },
                    RF = ["layout-shift"];
                  AC(WF) && RF.push("soft-navigation");
                  const iW = CC(RF, PF);
                  iW && (CF = BS(FF, AF, iA, WF.reportAllChanges), SF.onHidden((() => {
                    PF(iW.takeRecords()), CF(!0)
                  })), US((() => {
                    hF("back-forward-cache", AF.navigationId, AF.navigationInteractionId, AF.navigationURL, XS()), jC(CF)
                  })), setTimeout(CF))
                })))
              }((WF => {
                FF((FF => {
                  let WF = {};
                  if (FF.entries.length) {
                    const SF = FF.entries.reduce(((FF, WF) => FF.value > WF.value ? FF : WF));
                    if (SF?.sources?.length) {
                      const FF = eC(SF.sources);
                      FF && (WF = {
                        largestShiftTarget: CF.get(FF),
                        largestShiftTime: SF.startTime,
                        largestShiftValue: SF.value,
                        largestShiftSource: FF,
                        largestShiftEntry: SF,
                        loadState: yC(SF.startTime)
                      })
                    }
                  }
                  return Object.assign(FF, {
                    attribution: WF
                  })
                })(WF))
              }), WF)
          }((FF => {
            const {
              loadState: WF,
              largestShiftValue: SF,
              largestShiftTime: CF,
              largestShiftTarget: AF
            } = FF.attribution, uF = this.buildInitialValues(FF);
            this.addIfPresent(uF, "largest_shift_value", SF), this.addIfPresent(uF, "largest_shift_time", CF);
            const hF = this.buildInitialContext(FF);
            this.addIfPresent(hF, ZC, WF), this.addIfPresent(hF, "largest_shift_target", AF), this.pushMeasurement(uF, hF)
          }), {
            reportAllChanges: null === (FF = this.webVitalConfig) || void 0 === FF ? void 0 : FF.reportAllChanges
          })
        }
        measureFCP() {
          var FF;
          ! function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const SF = KS(WF = Object.assign({}, WF), bA);
            AC(WF) && (SF.u = new Map), RC((WF => {
              FF((FF => {
                let WF = {
                  timeToFirstByte: 0,
                  firstByteToFCP: FF.value,
                  loadState: yC(XS())
                };
                if ("soft-navigation" !== FF.navigationType) {
                  if (FF.entries.length) {
                    const SF = fS(),
                      CF = FF.entries.at(-1);
                    if (SF) {
                      const AF = SF.responseStart,
                        uF = SF.activationStart || 0,
                        hF = Math.max(0, AF - uF);
                      WF = {
                        timeToFirstByte: hF,
                        firstByteToFCP: FF.value - hF,
                        loadState: yC(FF.entries[0].startTime),
                        navigationEntry: SF,
                        fcpEntry: CF
                      }
                    }
                  }
                } else {
                  const CF = SF.u?.get(FF.navigationId);
                  CF && (WF = {
                    timeToFirstByte: 0,
                    firstByteToFCP: FF.value,
                    loadState: "complete",
                    navigationEntry: CF
                  })
                }
                return Object.assign(FF, {
                  attribution: WF
                })
              })(WF))
            }), WF)
          }((FF => {
            const {
              firstByteToFCP: WF,
              timeToFirstByte: SF,
              loadState: CF
            } = FF.attribution, AF = this.buildInitialValues(FF);
            this.addIfPresent(AF, "first_byte_to_fcp", WF), this.addIfPresent(AF, oC, SF);
            const uF = this.buildInitialContext(FF);
            this.addIfPresent(uF, ZC, CF), this.pushMeasurement(AF, uF)
          }), {
            reportAllChanges: null === (FF = this.webVitalConfig) || void 0 === FF ? void 0 : FF.reportAllChanges
          })
        }
        measureINP() {
          var FF;
          VC((FF => {
            var WF;
            const {
              interactionTime: SF,
              presentationDelay: CF,
              inputDelay: AF,
              processingDuration: uF,
              nextPaintTime: hF,
              loadState: bW,
              interactionTarget: dF,
              interactionType: PF,
              totalScriptDuration: RF,
              totalStyleAndLayoutDuration: iW,
              totalPaintDuration: eF,
              totalUnattributedDuration: EF,
              longestScript: QF
            } = FF.attribution, rW = this.buildInitialValues(FF);
            this.addIfPresent(rW, "interaction_time", SF), this.addIfPresent(rW, "presentation_delay", CF), this.addIfPresent(rW, "input_delay", AF), this.addIfPresent(rW, "processing_duration", uF), this.addIfPresent(rW, "next_paint_time", hF), this.addNumberIfDefined(rW, "total_script_duration", RF), this.addNumberIfDefined(rW, "total_style_and_layout_duration", iW), this.addNumberIfDefined(rW, "total_paint_duration", eF), this.addNumberIfDefined(rW, "total_unattributed_duration", EF), this.addNumberIfDefined(rW, "longest_script_intersecting_duration", null === QF || void 0 === QF ? void 0 : QF.intersectingDuration);
            const gW = this.buildInitialContext(FF);
            this.addIfPresent(gW, ZC, bW), this.addIfPresent(gW, "interaction_target", dF), this.addIfPresent(gW, "interaction_type", PF), this.addIfPresent(gW, "longest_script_subpart", null === QF || void 0 === QF ? void 0 : QF.subpart), this.addIfPresent(gW, "longest_script_invoker_type", null === QF || void 0 === QF ? void 0 : QF.entry.invokerType), (null === (WF = this.webVitalConfig) || void 0 === WF ? void 0 : WF.trackAttributionSources) && (this.addIfPresent(gW, "longest_script_invoker", null === QF || void 0 === QF ? void 0 : QF.entry.invoker), this.addIfPresent(gW, "longest_script_source_url", null === QF || void 0 === QF ? void 0 : QF.entry.sourceURL), this.addIfPresent(gW, "longest_script_source_function_name", null === QF || void 0 === QF ? void 0 : QF.entry.sourceFunctionName), this.addIfPresent(gW, "longest_script_source_char_position", void 0 !== (null === QF || void 0 === QF ? void 0 : QF.entry.sourceCharPosition) ? String(QF.entry.sourceCharPosition) : void 0)), this.pushMeasurement(rW, gW)
          }), {
            reportAllChanges: null === (FF = this.webVitalConfig) || void 0 === FF ? void 0 : FF.reportAllChanges
          })
        }
        measureLCP() {
          var FF;
          ! function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (WF = Object.assign({}, WF)).resourceBufferSize && (LC = WF.resourceBufferSize);
            const SF = KS(WF, NC),
              CF = new WeakMap;
            AC(WF) && (SF.u = new Map), SF.m = FF => {
                const SF = FF.element;
                if (SF) {
                  const AF = WF.generateTarget?.(SF) ?? nS(SF);
                  CF.set(FF, AF)
                } else FF.id && CF.set(FF, `#${FF.id}`)
              },
              function(FF) {
                let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  SF = !1;
                const CF = AC(WF);
                dC((() => {
                  let AF, uF = WC(),
                    hF = SC("LCP");
                  const bW = KS(WF, NC),
                    dF = (CF, bW, dF, PF, RF) => {
                      hF = SC("LCP", -1, CF, bW, dF, PF, RF), AF = BS(FF, hF, DC, WF.reportAllChanges), SF = !1, "soft-navigation" === CF && (uF = WC(!0))
                    },
                    PF = FF => {
                      bW.u && FF.navigationId && uC(bW.u, FF), SF || AF(!0), dF("soft-navigation", FF.navigationId, FF.interactionId, FF.name, FF.startTime);
                      const WF = FF.getLargestInteractionContentfulPaint?.();
                      WF && RF([WF])
                    },
                    RF = FF => {
                      WF.reportAllChanges || CF || (FF = FF.slice(-1));
                      for (const WF of FF) {
                        if (!WF) continue;
                        if ("soft-navigation" === WF.entryType) {
                          PF(WF);
                          continue
                        }
                        let FF = 0,
                          SF = [],
                          CF = WF.startTime;
                        if ("largest-contentful-paint" === WF.entryType) FF = Math.max(WF.startTime - vC(), 0), bW.l(WF), SF = [WF];
                        else if ("interaction-contentful-paint" === WF.entryType) {
                          const AF = WF;
                          if (!hF.navigationId) continue;
                          if ("interactionId" in AF && AF.interactionId != hF.navigationInteractionId) continue;
                          CF = AF.largestContentfulPaint?.renderTime || 0, FF = Math.max(CF - WF.startTime, 0), AF.largestContentfulPaint && (bW.l(AF.largestContentfulPaint), SF = [AF.largestContentfulPaint])
                        }
                        CF < uF.firstHiddenTime && (hF.value = FF, hF.entries = SF, AF())
                      }
                    },
                    iW = ["largest-contentful-paint"];
                  CF && iW.push("interaction-contentful-paint", "soft-navigation");
                  const eF = CC(iW, RF);
                  if (eF) {
                    AF = BS(FF, hF, DC, WF.reportAllChanges);
                    const uF = ["keydown", "click", "visibilitychange"],
                      bW = FF => {
                        if (FF.isTrusted && !SF) {
                          const FF = hF.id;
                          kA((() => {
                            if (!SF) {
                              if (!CF) {
                                eF.disconnect();
                                for (const FF of uF) removeEventListener(FF, bW, {
                                  capture: !0
                                })
                              }
                              FF === hF.id && (SF = !0, AF(!0))
                            }
                          }))
                        }
                      };
                    for (const FF of uF) addEventListener(FF, bW, {
                      capture: !0
                    });
                    US((CF => {
                      dF("back-forward-cache", hF.navigationId, hF.navigationInteractionId, hF.navigationURL, XS()), AF = BS(FF, hF, DC, WF.reportAllChanges), jC((() => {
                        hF.value = performance.now() - CF.timeStamp, SF = !0, AF(!0)
                      }))
                    }))
                  }
                }))
              }((WF => {
                FF((FF => {
                  let WF = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: FF.value
                  };
                  if (FF.entries.length) {
                    const AF = FF.entries.at(-1),
                      uF = FF => FF.name === AF.url && (FF.requestStart || FF.startTime) <= AF.startTime,
                      hF = AF.url && (mA.findLast(uF) || performance.getEntriesByType("resource").findLast(uF));
                    let bW;
                    WF.target = CF.get(AF), WF.lcpEntry = AF, AF.url && (WF.url = AF.url), hF && (WF.lcpResourceEntry = hF);
                    let dF = 0,
                      PF = 0;
                    if ("soft-navigation" !== FF.navigationType ? (bW = fS(), dF = bW?.activationStart ?? 0, PF = bW?.responseStart ?? 0) : (dF = FF.navigationStartTime || 0, bW = SF.u?.get(FF.navigationId)), bW) {
                      const SF = Math.max(0, PF - dF),
                        CF = Math.max(SF, hF ? (hF.requestStart || hF.startTime) - dF : 0),
                        AF = Math.min(FF.value, Math.max(CF, hF ? hF.responseEnd - dF : 0));
                      WF = {
                        ...WF,
                        timeToFirstByte: SF,
                        resourceLoadDelay: CF - SF,
                        resourceLoadDuration: AF - CF,
                        elementRenderDelay: FF.value - AF,
                        navigationEntry: bW
                      }
                    }
                  }
                  return Object.assign(FF, {
                    attribution: WF
                  })
                })(WF))
              }), WF)
          }((FF => {
            var WF;
            const {
              elementRenderDelay: SF,
              resourceLoadDelay: CF,
              resourceLoadDuration: AF,
              timeToFirstByte: uF,
              target: hF,
              url: bW,
              lcpResourceEntry: dF
            } = FF.attribution, PF = this.buildInitialValues(FF);
            this.addIfPresent(PF, "element_render_delay", SF), this.addIfPresent(PF, "resource_load_delay", CF), this.addIfPresent(PF, "resource_load_duration", AF), this.addIfPresent(PF, oC, uF);
            const RF = this.buildInitialContext(FF);
            this.addIfPresent(RF, "element", hF), (null === (WF = this.webVitalConfig) || void 0 === WF ? void 0 : WF.trackAttributionSources) && (this.addIfPresent(RF, "resource_url", bW), this.addIfPresent(RF, "resource_delivery_type", null === dF || void 0 === dF ? void 0 : dF.deliveryType), this.addIfPresent(RF, "resource_initiator_type", null === dF || void 0 === dF ? void 0 : dF.initiatorType)), this.pushMeasurement(PF, RF)
          }), {
            reportAllChanges: null === (FF = this.webVitalConfig) || void 0 === FF ? void 0 : FF.reportAllChanges
          })
        }
        measureTTFB() {
          var FF;
          ! function(FF) {
            ! function(FF) {
              let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const SF = AC(WF);
              let CF = SC("TTFB"),
                AF = BS(FF, CF, OC, WF.reportAllChanges);
              xA((() => {
                const uF = fS();
                if (uF) {
                  const hF = uF.responseStart;
                  CF.value = Math.max(hF - vC(), 0), CF.entries = [uF], AF(!0), US((() => {
                    CF = SC("TTFB", 0, "back-forward-cache", CF.navigationId, CF.navigationInteractionId, CF.navigationURL, XS()), AF = BS(FF, CF, OC, WF.reportAllChanges), AF(!0)
                  })), SF && CC(["soft-navigation"], (SF => {
                    SF.forEach((SF => {
                      SF.navigationId && (CF = SC("TTFB", 0, "soft-navigation", SF.navigationId, SF.interactionId, SF.name, SF.startTime), CF.entries = [SF], AF = BS(FF, CF, OC, WF.reportAllChanges), AF(!0))
                    }))
                  }), WF)
                }
              }))
            }((WF => {
              FF((FF => {
                const WF = FF.entries[0];
                let SF = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: WF
                };
                if (FF.entries.length && WF instanceof PerformanceNavigationTiming) {
                  const CF = WF.activationStart || 0,
                    AF = Math.max((WF.workerStart || WF.fetchStart || 0) - CF, 0),
                    uF = Math.max(WF.domainLookupStart - CF, 0),
                    hF = Math.max(WF.connectStart - CF, 0),
                    bW = Math.max(WF.connectEnd - CF, 0);
                  SF = {
                    waitingDuration: AF,
                    cacheDuration: uF - AF,
                    dnsDuration: hF - uF,
                    connectionDuration: bW - hF,
                    requestDuration: FF.value - bW,
                    navigationEntry: WF
                  }
                }
                return Object.assign(FF, {
                  attribution: SF
                })
              })(WF))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((FF => {
            const {
              dnsDuration: WF,
              connectionDuration: SF,
              requestDuration: CF,
              waitingDuration: AF,
              cacheDuration: uF
            } = FF.attribution, hF = this.buildInitialValues(FF);
            this.addIfPresent(hF, "dns_duration", WF), this.addIfPresent(hF, "connection_duration", SF), this.addIfPresent(hF, "request_duration", CF), this.addIfPresent(hF, "waiting_duration", AF), this.addIfPresent(hF, "cache_duration", uF);
            const bW = this.buildInitialContext(FF);
            this.pushMeasurement(hF, bW)
          }), {
            reportAllChanges: null === (FF = this.webVitalConfig) || void 0 === FF ? void 0 : FF.reportAllChanges
          })
        }
        buildInitialValues(FF) {
          return {
            [FF.name.toLowerCase()]: FF.value,
            delta: FF.delta
          }
        }
        buildInitialContext(FF) {
          var WF;
          const SF = null !== (WF = FW("com.grafana.faro.lastNavigationId", JF)) && void 0 !== WF ? WF : GS;
          return {
            id: FF.id,
            rating: FF.rating,
            navigation_type: FF.navigationType,
            navigation_entry_id: SF
          }
        }
        pushMeasurement(FF, WF) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: FF
          }, {
            context: WF
          })
        }
        addIfPresent(FF, WF, SF) {
          SF && (FF[WF] = SF)
        }
        addNumberIfDefined(FF, WF, SF) {
          void 0 !== SF && (FF[WF] = SF)
        }
      },
      MC = class extends WS {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = SS
        }
        initialize() {
          this.logDebug("Initializing"), new YC(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const cA = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function GC() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const WF of FF)
        if ("traceparent" === WF.name) {
          if (!cA.test(WF.description)) continue;
          const [, FF, SF] = WF.description.split("-");
          if (null != FF && null != SF) return {
            traceId: FF,
            spanId: SF
          };
          break
        }
    }

    function zA(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: SF,
        monoNow: CF
      } = WF;
      return Math.min(SF, SF - (CF - FF))
    }

    function IC(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [SF, CF] of Object.entries(WF)) {
        const WF = FF[SF];
        return null != WF && (ZF(CF) ? CF.includes(WF) : WF === CF)
      }
      return !0
    }

    function fC(FF) {
      const {
        connectEnd: WF,
        connectStart: SF,
        decodedBodySize: CF,
        domainLookupEnd: AF,
        domainLookupStart: uF,
        duration: hF,
        encodedBodySize: bW,
        fetchStart: dF,
        initiatorType: PF,
        name: RF,
        nextHopProtocol: iW,
        redirectEnd: eF,
        redirectStart: EF,
        renderBlockingStatus: QF,
        requestStart: rW,
        responseEnd: gW,
        responseStart: tW,
        responseStatus: TF,
        secureConnectionStart: aW,
        transferSize: kW,
        workerStart: qW
      } = FF;
      return {
        name: RF,
        httpHost: sC(RF),
        duration: nC(hF),
        tcpHandshakeTime: nC(WF - SF),
        dnsLookupTime: nC(AF - uF),
        tlsNegotiationTime: nC(WF - aW),
        responseStatus: nC(TF),
        redirectTime: nC(eF - EF),
        requestTime: nC(tW - rW),
        responseTime: nC(gW - tW),
        fetchTime: nC(gW - dF),
        serviceWorkerTime: nC(qW > 0 ? dF - qW : 0),
        decodedBodySize: nC(CF),
        encodedBodySize: nC(bW),
        cacheHitStatus: function() {
          let FF = "fullLoad";
          0 === kW ? CF > 0 && (FF = "cache") : null != TF ? 304 === TF && (FF = "conditionalFetch") : bW > 0 && kW < bW && (FF = "conditionalFetch");
          return FF
        }(),
        renderBlockingStatus: nC(QF),
        protocol: iW,
        initiatorType: PF,
        visibilityState: document.visibilityState,
        ttfb: nC(tW - rW),
        transferSize: nC(kW)
      }
    }

    function yA(FF) {
      const {
        activationStart: WF,
        domComplete: SF,
        domContentLoadedEventEnd: CF,
        domContentLoadedEventStart: AF,
        domInteractive: uF,
        fetchStart: hF,
        loadEventEnd: bW,
        loadEventStart: dF,
        responseStart: PF,
        type: RF
      } = FF, iW = function() {
        var FF;
        return null != (null === (FF = performance.timing) || void 0 === FF ? void 0 : FF.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return RW(RW({}, fC(FF)), {}, {
        pageLoadTime: nC(SF - hF),
        documentParsingTime: nC(iW ? uF - iW : null),
        domProcessingTime: nC(SF - uF),
        domContentLoadHandlerTime: nC(CF - AF),
        onLoadTime: nC(bW - dF),
        ttfb: nC(Math.max(PF - (null !== WF && void 0 !== WF ? WF : 0), 0)),
        type: RF
      })
    }

    function sC(FF) {
      try {
        return new URL(FF).host || GS
      } catch (WF) {
        return GS
      }
    }

    function nC(FF) {
      return null == FF ? GS : "number" === typeof FF ? Math.round(FF > 0 ? FF : 0).toString() : FF.toString()
    }
    const HC = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function KC(FF, WF, SF, CF, AF, uF, hF) {
      try {
        var bW = FF[uF](hF),
          dF = bW.value
      } catch (FF) {
        return void SF(FF)
      }
      bW.done ? WF(dF) : Promise.resolve(dF).then(CF, AF)
    }

    function wC(FF) {
      return function() {
        var WF = this,
          SF = arguments;
        return new Promise((function(CF, AF) {
          var uF = FF.apply(WF, SF);

          function hF(FF) {
            KC(uF, CF, AF, hF, bW, "next", FF)
          }

          function bW(FF) {
            KC(uF, CF, AF, hF, bW, "throw", FF)
          }
          hF(void 0)
        }))
      }
    }
    const XC = new TS;
    var UC = class extends WS {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = SS
      }
      initialize() {
        var FF = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let WF = !1;
        const SF = () => {
          ! function(FF) {
            if ("complete" === document.readyState) FF();
            else {
              const WF = () => {
                "complete" === document.readyState && (FF(), document.removeEventListener("readystatechange", WF))
              };
              document.addEventListener("readystatechange", WF)
            }
          }(wC((function*() {
            if (WF) return;
            const SF = FF.api.pushEvent,
              {
                faroNavigationId: CF
              } = yield function(FF) {
                let WF;
                const SF = new Promise((FF => {
                  WF = FF
                }));
                return new PerformanceObserver((SF => {
                  var CF;
                  const [AF] = SF.getEntries();
                  if (null == AF || jW(AF.name)) return;
                  const uF = AF.toJSON();
                  let hF = GC(null === uF || void 0 === uF ? void 0 : uF.serverTiming);
                  const bW = null !== (CF = FW("com.grafana.faro.lastNavigationId", JF)) && void 0 !== CF ? CF : GS,
                    dF = RW(RW({}, yA(uF)), {}, {
                      faroNavigationId: tS(),
                      faroPreviousNavigationId: bW
                    });
                  WW("com.grafana.faro.lastNavigationId", dF.faroNavigationId, JF), FF("faro.performance.navigation", dF, void 0, {
                    spanContext: hF,
                    timestampOverwriteMs: zA(uF.startTime)
                  }), WF(dF)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), SF
              }(SF);
            WF || null == CF || function(FF, WF, SF, CF) {
              const AF = CF.trackResources;
              new PerformanceObserver((CF => {
                const uF = CF.getEntries(),
                  hF = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const bW of uF) {
                  if (jW(bW.name)) continue;
                  null === SF || void 0 === SF || SF.notify({
                    type: "resource"
                  });
                  const CF = bW.toJSON();
                  let uF = GC(null === CF || void 0 === CF ? void 0 : CF.serverTiming);
                  (null == AF && IC(CF, HC) || AF) && WF("faro.performance.resource", RW(RW({}, fC(CF)), {}, {
                    faroNavigationId: FF,
                    faroResourceId: tS()
                  }), void 0, {
                    spanContext: uF,
                    timestampOverwriteMs: zA(CF.startTime, hF)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(CF, SF, XC, FF.config)
          })))
        };
        this.cancelInitialization = () => {
          WF = !0, document.removeEventListener("prerenderingchange", SF)
        }, document.prerendering ? document.addEventListener("prerenderingchange", SF, {
          once: !0
        }) : SF()
      }
      destroy() {
        var FF;
        null === (FF = this.cancelInitialization) || void 0 === FF || FF.call(this), this.cancelInitialization = void 0
      }
    };
    const BC = "data-faro-user-action-name",
      jA = BC.replace(/-name$/, "-timeout"),
      vA = 1e3;

    function JC(FF) {
      return `data-${(FF.startsWith("data-")?FF.slice(5):FF).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function pC(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KW;
      if (void 0 === FF) return WF;
      let CF = NaN;
      try {
        CF = "string" === typeof FF && "" === FF.trim() ? NaN : Number(FF)
      } catch (AF) {}
      return !Number.isFinite(CF) || CF <= 0 ? (SF(`initialActivityTimeout must be a finite number greater than zero; using ${WF} ms`), WF) : CF > 1e3 ? (SF(`initialActivityTimeout cannot exceed ${vA} ms; clamping to the maximum`), vA) : CF
    }

    function lC(FF, WF, SF) {
      return void 0 !== FF && window.clearTimeout(FF), window.setTimeout((() => {
        WF()
      }), SF)
    }

    function FA(FF) {
      return FF.type === tC
    }
    let WA, SA;

    function CA() {
      return WA || (WA = new TS), SA || (SA = new MutationObserver(((FF, WF) => {
        WA.notify({
          type: "dom-mutation"
        })
      })), SA.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), WA
    }
    const AA = "fetch",
      uA = "xhr";
    let hA, bu, dA, PA, RA = !1;

    function iu() {
      if (hA) return hA;

      function FF(FF) {
        hA.notify({
          type: gC,
          request: FF
        })
      }

      function WF(FF) {
        hA.notify({
          type: tC,
          request: FF
        })
      }
      return hA = new TS, RA || (! function(FF) {
        let {
          onRequestEnd: WF,
          onRequestStart: SF
        } = FF;
        dA || (dA = window.fetch);
        window.fetch = function() {
          var FF, CF;
          const AF = null !== (FF = vW(arguments[0])) && void 0 !== FF ? FF : "",
            uF = jW(AF),
            hF = (null !== (CF = arguments[1]) && void 0 !== CF ? CF : {}).method,
            bW = tS();
          return uF || SF({
            url: AF,
            method: hF,
            requestId: bW,
            apiType: AA
          }), dA.apply(this, arguments).then((FF => (uF || WF({
            url: AF,
            method: hF,
            requestId: bW,
            apiType: AA
          }), FF))).catch((FF => {
            throw uF || WF({
              url: AF,
              method: hF,
              requestId: bW,
              apiType: AA
            }), FF
          }))
        }
      }({
        onRequestStart: FF,
        onRequestEnd: WF
      }), function(FF) {
        let {
          onRequestStart: WF,
          onRequestEnd: SF
        } = FF;
        bu || (bu = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const FF = arguments[1],
            CF = jW(FF),
            AF = arguments[0],
            uF = tS();
          this.addEventListener("loadstart", (function() {
            CF || WF({
              url: FF,
              method: AF,
              requestId: uF,
              apiType: uA
            })
          })), this.addEventListener("load", (function() {
            CF || SF({
              url: FF,
              method: AF,
              requestId: uF,
              apiType: uA
            })
          })), this.addEventListener("error", (function() {
            CF || SF({
              url: FF,
              method: AF,
              requestId: uF,
              apiType: uA
            })
          })), this.addEventListener("abort", (function() {
            CF || SF({
              url: FF,
              method: AF,
              requestId: uF,
              apiType: uA
            })
          })), bu.apply(this, arguments)
        }
      }({
        onRequestStart: FF,
        onRequestEnd: WF
      }), RA = !0), hA
    }
    let eA, EA = !1;
    let QA = function(FF) {
      return FF[FF.Started = 0] = "Started", FF[FF.Halted = 1] = "Halted", FF[FF.Cancelled = 2] = "Cancelled", FF[FF.Ended = 3] = "Ended", FF
    }({});
    var ru = class {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = FF, this.logDebug = WF, this.initialActivityTimeout = SF, this.http = iu(), this.dom = CA(), this.perf = (PA || (PA = new TS), EA || (eA = XC.subscribe((FF => {
          "resource" === FF.type && PA.notify({
            type: "resource-entry"
          })
        })), EA = !0), PA), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new TS).merge(this.http, this.dom, this.perf).takeWhile((() => [QA.Started, QA.Halted].includes(this.userAction.getState()))).filter((FF => !!(this.userAction.getState() !== QA.Halted || FA(FF) && this.runningRequests.has(FF.request.requestId)))).subscribe((FF => {
          (function(FF) {
            return FF.type === gC
          })(FF) && this.runningRequests.set(FF.request.requestId, FF.request), FA(FF) && this.runningRequests.delete(FF.request.requestId), FA(FF) ? this.userAction.getState() === QA.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((FF => [QA.Ended, QA.Cancelled].includes(FF))).first().subscribe((() => this.cleanup())), this.startupTid = lC(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === QA.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === QA.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = lC(this.haltTid, (() => {
          this.userAction.getState() === QA.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var FF, WF;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (FF = this.allMonitorsSub) || void 0 === FF || FF.unsubscribe(), null === (WF = this.stateSub) || void 0 === WF || WF.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(FF) {
        void 0 !== FF && window.clearTimeout(FF)
      }
    };

    function gu(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KW;
      var SF;
      const {
        api: CF,
        config: AF,
        internalLogger: uF
      } = FF, hF = pC(null === (SF = AF.userActionsInstrumentation) || void 0 === SF ? void 0 : SF.initialActivityTimeout, 100, WF);
      return {
        processUserEvent: function(FF) {
          var WF, SF;
          const uF = null !== (WF = null === (SF = AF.userActionsInstrumentation) || void 0 === SF ? void 0 : SF.dataAttributeName) && void 0 !== WF ? WF : BC,
            hF = FF.target;
          if (!(hF instanceof Element)) return;
          const bW = function(FF, WF) {
              let SF = FF;
              for (; SF;) {
                if (SF.hasAttribute(WF)) return SF;
                SF = SF.parentElement
              }
              return null
            }(hF, JC(uF)),
            dF = function(FF, WF) {
              if (!FF) return;
              const SF = function(FF) {
                  return JC(FF).slice(5).replace(/-(.)/g, ((FF, WF) => WF.toUpperCase()))
                }(WF),
                CF = FF.dataset;
              for (const AF in CF)
                if (AF === SF) return CF[AF]
            }(bW, uF);
          if (!bW || !dF) return;
          const PF = function(FF, WF) {
            const SF = FF.getAttribute(function(FF) {
              const WF = JC(FF);
              return WF.endsWith("-name") ? `${WF.slice(0,-5)}-timeout` : `${WF}-timeout`
            }(WF));
            return null === SF ? void 0 : Number(SF)
          }(bW, uF);
          CF.startUserAction(dF, {}, {
            triggerName: FF.type,
            initialActivityTimeout: PF
          })
        },
        processUserActionStarted: function(FF, SF) {
          const CF = FF,
            AF = pC(SF, hF, WF);
          new ru(CF, uF.debug, AF).attach()
        }
      }
    }
    const tu = "user_action_start",
      TA = {
        Normal: "normal",
        Critical: "critical"
      };
    var au = class {
        constructor() {
          this.buffer = []
        }
        addItem(FF) {
          this.buffer.push(FF)
        }
        flushBuffer(FF) {
          if (xW(FF))
            for (const WF of this.buffer) FF(WF);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      ku = class extends TS {
        constructor(FF) {
          let {
            name: WF,
            parentId: SF,
            trigger: CF,
            transports: AF,
            attributes: uF,
            trackUserActionsExcludeItem: hF,
            importance: bW = TA.Normal,
            pushEvent: dF
          } = FF;
          super(), this.name = WF, this.attributes = uF, this.id = tS(), this.trigger = CF, this.parentId = null !== SF && void 0 !== SF ? SF : this.id, this.trackUserActionsExcludeItem = hF, this.importance = bW, this._pushEvent = dF, this._itemBuffer = new au, this._transports = AF, this._state = 0, this._start()
        }
        addItem(FF) {
          return 0 === this._state && (this._itemBuffer.addItem(FF), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = eW(), this._startTimeMono = EW())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((FF => {
            this._transports.execute(FF)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const FF = eW(),
            WF = EW() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((FF => {
            if (function(FF, WF) {
                return (null === WF || void 0 === WF ? void 0 : WF(FF)) || "measurement" === FF.type && "web-vitals" === FF.payload.type
              }(FF, this.trackUserActionsExcludeItem)) return void this._transports.execute(FF);
            const WF = pW(pW({}, FF), {}, {
              payload: pW(pW({}, FF.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(WF)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", pW({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: FF.toString(),
            userActionDuration: WF.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, zS(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: FF => (FF.action = {
              id: this.id,
              name: this.name
            }, FF)
          })
        }
        getState() {
          return this._state
        }
      };
    const qu = new TS;

    function VA(FF, WF) {
      return !!FF && (0 === (null === FF || void 0 === FF ? void 0 : FF.getState()) && (FF.addItem(WF), !0))
    }
    var NA = class extends WS {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = SS
        }
        initialize() {
          const {
            processUserEvent: FF,
            processUserActionStarted: WF
          } = gu(rW, (FF => this.logWarn(FF)));
          this._processUserEvent = FF, this._processKeydown = WF => {
            [" ", "Enter"].includes(WF.key) && FF(WF)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = qu.subscribe((FF => {
            let {
              type: SF,
              userAction: CF,
              initialActivityTimeout: AF
            } = FF;
            "user_action_start" === SF && WF(CF, AF)
          }))
        }
        destroy() {
          var FF;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (FF = this._userActionSub) || void 0 === FF || FF.unsubscribe()
        }
      },
      DA = class extends WS {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = SS, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(FF) {
          const WF = {
            blockedURI: FF.blockedURI,
            columnNumber: FF.columnNumber,
            disposition: FF.disposition,
            documentURI: FF.documentURI,
            effectiveDirective: FF.effectiveDirective,
            lineNumber: FF.lineNumber,
            originalPolicy: FF.originalPolicy,
            referrer: FF.referrer,
            sample: FF.sample,
            sourceFile: FF.sourceFile,
            statusCode: FF.statusCode,
            violatedDirective: FF.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", zS(WF))
        }
      };
    var LA = class extends TS {
      constructor(FF, WF) {
        var SF, CF, AF, uF;
        super(), this._tracking = !1, this.eventsObservable = FF, this._options = {
          inactivityMs: null !== (SF = null === WF || void 0 === WF ? void 0 : WF.inactivityMs) && void 0 !== SF ? SF : 100,
          drainTimeoutMs: null !== (CF = null === WF || void 0 === WF ? void 0 : WF.drainTimeoutMs) && void 0 !== CF ? CF : 1e4,
          isOperationStart: null !== (AF = null === WF || void 0 === WF ? void 0 : WF.isOperationStart) && void 0 !== AF ? AF : () => {},
          isOperationEnd: null !== (uF = null === WF || void 0 === WF ? void 0 : WF.isOperationEnd) && void 0 !== uF ? uF : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((FF => {
          var WF;
          this._lastEventTime = EW(), null === (WF = this._currentEvents) || void 0 === WF || WF.push(FF);
          const SF = this._options.isOperationStart(FF);
          var CF;
          SF && (null === (CF = this._activeOperations) || void 0 === CF || CF.set(SF, !0));
          const AF = this._options.isOperationEnd(FF);
          var uF;
          AF && (null === (uF = this._activeOperations) || void 0 === uF || uF.delete(AF));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = EW(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let FF;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), FF = this.hasActiveOperations() ? EW() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: FF
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = mu(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = mu(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(FF) {
        FF && clearTimeout(FF)
      }
    };

    function mu(FF, WF, SF) {
      return FF && clearTimeout(FF), FF = setTimeout((() => {
        WF()
      }), SF)
    }
    let OA;
    const xu = new Set,
      ZA = new Map;
    let oA, YA, MA, cu, GA, zu, IA, fA, yu = !1;
    var sA = class extends WS {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = SS
      }
      initialize() {
        const FF = iu(),
          WF = CA(),
          SF = function() {
            function FF(FF, WF) {
              const SF = null !== WF && void 0 !== WF ? WF : location.href;
              SF !== YA && (oA.notify({
                type: "url-change",
                from: YA,
                to: SF,
                trigger: FF
              }), YA = SF)
            }
            if (oA || (oA = new TS, YA = location.href), !yu)
              if ("navigation" in window && "NavigateEvent" in window) {
                IA = WF => {
                  try {
                    const SF = null === WF || void 0 === WF ? void 0 : WF.destination;
                    (null === SF || void 0 === SF ? void 0 : SF.sameDocument) && "string" === typeof SF.url && FF("navigate", SF.url)
                  } catch (SF) {}
                }, window.navigation.addEventListener("navigate", IA);
                const WF = window.NavigateEvent;
                WF && WF.prototype && "function" === typeof WF.prototype.intercept && (fA || (fA = WF.prototype.intercept), WF.prototype.intercept = function(WF) {
                  try {
                    const WF = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      SF = null === this || void 0 === this ? void 0 : this.destination;
                    WF && SF && !1 === SF.sameDocument && "string" === typeof SF.url && FF("navigate-intercept", SF.url)
                  } catch (SF) {}
                  return fA.call(this, WF)
                }), yu = !0
              } else MA || (MA = window.history.pushState), window.history.pushState = function() {
                for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
                const AF = MA.apply(window.history, SF);
                return FF("pushState"), AF
              }, cu || (cu = window.history.replaceState), window.history.replaceState = function() {
                for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
                const AF = cu.apply(window.history, SF);
                return FF("replaceState"), AF
              }, GA = () => FF("popstate"), zu = () => FF("hashchange"), window.addEventListener("popstate", GA), window.addEventListener("hashchange", zu), yu = !0;
            return oA
          }(),
          CF = (AF = ["pointerdown", "keydown"], OA || (OA = new TS), AF.forEach((FF => {
            if (!xu.has(FF)) {
              const WF = () => {
                OA.notify({
                  type: "interaction",
                  name: FF
                })
              };
              window.addEventListener(FF, WF), xu.add(FF), ZA.set(FF, WF)
            }
          })), OA);
        var AF;
        const uF = new LA((new TS).merge(FF, WF, SF), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: FF => function(FF) {
            return FF.type === gC
          }(FF) ? FF.request.requestId : void 0,
          isOperationEnd: FF => function(FF) {
            return FF.type === tC
          }(FF) ? FF.request.requestId : void 0
        });
        uF.filter((FF => "tracking-ended" === FF.message)).subscribe((FF => {
          var WF, SF;
          if ((null === (WF = FF.events) || void 0 === WF ? void 0 : WF.some((FF => "url-change" === FF.type))) && (null === (SF = FF.events) || void 0 === SF ? void 0 : SF.some((FF => "dom-mutation" === FF.type)))) {
            var CF;
            const WF = null === (CF = FF.events) || void 0 === CF ? void 0 : CF.find((FF => "url-change" === FF.type));
            rW.api.pushEvent("faro.navigation", {
              fromUrl: null === WF || void 0 === WF ? void 0 : WF.from,
              toUrl: null === WF || void 0 === WF ? void 0 : WF.to,
              sameDocument: String(!0),
              duration: FF.duration
            })
          }
        })), CF.subscribe((() => {
          uF.startTracking()
        }))
      }
    };

    function nA() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const WF = [new NA, new cC, new MC, new CS, new zC, new sA];
      return !1 !== FF.enablePerformanceInstrumentation && WF.unshift(new UC), !1 !== FF.enableContentSecurityPolicyInstrumentation && WF.push(new DA), !1 !== FF.captureConsole && WF.push(new YS), WF
    }
    var HA = SF(7015);
    let KA, wA;

    function XA() {
      const FF = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return KA === FF && wA || (wA = new HA.UAParser(FF).getResult(), KA = FF), wA
    }
    const UA = () => {
        const {
          browser: FF,
          os: WF,
          ua: SF
        } = XA(), {
          name: CF,
          version: AF
        } = FF, {
          name: uF,
          version: hF
        } = WF, bW = navigator.language, dF = SF.includes("Mobi"), PF = function() {
          if (!CF || !AF) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== CF && void 0 !== CF ? CF : GS,
            version: null !== AF && void 0 !== AF ? AF : GS,
            os: `${null!==uF&&void 0!==uF?uF:GS} ${null!==hF&&void 0!==hF?hF:GS}`,
            userAgent: null !== SF && void 0 !== SF ? SF : GS,
            language: null !== bW && void 0 !== bW ? bW : GS,
            mobile: dF,
            brands: null !== PF && void 0 !== PF ? PF : GS,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      BA = () => {
        const {
          name: FF,
          version: WF
        } = XA().os;
        if (!FF && !WF) return {};
        const SF = {};
        return FF && (SF.name = FF), WF && (SF.version = WF), {
          os: SF
        }
      };

    function ju(FF) {
      var WF, SF, CF;
      return {
        id: null !== (WF = null === (SF = rW.config) || void 0 === SF || null === (SF = SF.sessionTracking) || void 0 === SF || null === (CF = SF.generateSessionId) || void 0 === CF ? void 0 : CF.call(SF)) && void 0 !== WF ? WF : tS(),
        attributes: FF
      }
    }
    const vu = () => ({
      sdk: {
        name: "faro-web",
        version: SS
      }
    });
    var JA = class extends FS {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let pA = function(FF) {
      return FF.EXCEPTION = "exception", FF.LOG = "log", FF.MEASUREMENT = "measurement", FF.TRACE = "trace", FF.EVENT = "event", FF
    }({});
    const lA = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Fu(FF, WF) {
      var SF, CF;
      if (void 0 === WF) return FF;
      if (void 0 === FF) return {
        resourceSpans: WF
      };
      const AF = null === (SF = FF.resourceSpans) || void 0 === SF ? void 0 : SF[0];
      if (void 0 === AF) return FF;
      const uF = (null === AF || void 0 === AF ? void 0 : AF.scopeSpans) || [],
        hF = (null === WF || void 0 === WF || null === (CF = WF[0]) || void 0 === CF ? void 0 : CF.scopeSpans) || [];
      return pW(pW({}, FF), {}, {
        resourceSpans: [pW(pW({}, AF), {}, {
          scopeSpans: [...uF, ...hF]
        })]
      })
    }

    function Wu(FF) {
      let WF = {
        meta: {}
      };
      return void 0 !== FF[0] && (WF.meta = FF[0].meta), FF.forEach((FF => {
        switch (FF.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const SF = lA[FF.type],
              CF = WF[SF];
            WF = pW(pW({}, WF), {}, {
              [SF]: void 0 === CF ? [FF.payload] : [...CF, FF.payload]
            });
            break
          }
          case "trace":
            WF = pW(pW({}, WF), {}, {
              traces: Fu(WF.traces, FF.payload.resourceSpans)
            })
        }
      })), WF
    }
    var Su = class extends JA {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = FF, this.name = "@grafana/faro-web-sdk:transport-console", this.version = SS
      }
      send(FF) {
        var WF;
        return this.unpatchedConsole[null !== (WF = this.options.level) && void 0 !== WF ? WF : aC.DEBUG]("New event", Wu([FF]))
      }
    };
    const Cu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Au = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      uu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      hu = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      bh = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      du = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Pu(FF) {
      let {
        weekday: WF,
        day: SF,
        month: CF,
        year: AF,
        hour: uF,
        minute: hF,
        second: bW
      } = FF;
      if (AF < 1900 || SF < 1 || uF > 23 || hF > 59 || bW > 60) return;
      const dF = 60 === bW,
        PF = new Date(0);
      return PF.setUTCFullYear(AF, CF, SF), PF.setUTCHours(uF, hF, dF ? 59 : bW, 0), PF.getUTCDay() === WF && PF.getUTCDate() === SF && PF.getUTCMonth() === CF && PF.getUTCFullYear() === AF && PF.getUTCHours() === uF && PF.getUTCMinutes() === hF && PF.getUTCSeconds() === (dF ? 59 : bW) ? PF.getTime() + (dF ? 1e3 : 0) : void 0
    }
    var Ru = class {
      constructor(FF) {
        this.options = FF, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var FF = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const WF = this.sequence++;
        let SF = !1;
        return {
          deliver: function() {
            var SF = wC((function*(SF) {
              const CF = FF.options.getNow();
              let AF, uF = 0;
              for (;;) {
                var hF, bW, dF;
                const PF = FF.options.retry.maxAttempts - uF,
                  RF = yield FF.runAttempt((() => SF(PF, FF.unloading)), uF > 0);
                if (uF += RF.attemptsMade, "success" === RF.kind) return {
                  kind: "success",
                  attempts: uF,
                  elapsedTimeMs: FF.options.getNow() - CF
                };
                if (AF = RF.failure, "terminal" === RF.kind || FF.unloading) return {
                  kind: "terminal",
                  attempts: uF,
                  elapsedTimeMs: FF.options.getNow() - CF,
                  failure: AF
                };
                if (uF >= FF.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: uF,
                  elapsedTimeMs: FF.options.getNow() - CF,
                  failure: AF,
                  reason: "retries-exhausted"
                };
                if (null != RF.retryAfterMs && RF.retryAfterMs > FF.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: uF,
                  elapsedTimeMs: FF.options.getNow() - CF,
                  failure: AF,
                  reason: "retry-after-too-long"
                };
                const iW = Math.min(null !== (hF = RF.retryAfterMs) && void 0 !== hF ? hF : FF.options.retry.initialBackoffMs * Math.pow(FF.options.retry.backoffMultiplier, uF - 1), FF.options.retry.maxBackoffMs);
                if (null === (bW = (dF = FF.options).onRetry) || void 0 === bW || bW.call(dF, iW, uF + 1), yield FF.waitForTurn(WF, iW)) {
                  const WF = FF.options.retry.maxAttempts - uF,
                    AF = yield FF.runAttempt((() => SF(WF, !0)));
                  return uF += AF.attemptsMade, {
                    kind: "success" === AF.kind ? "success" : "terminal",
                    attempts: uF,
                    elapsedTimeMs: FF.options.getNow() - CF,
                    failure: "success" === AF.kind ? void 0 : AF.failure
                  }
                }
              }
            }));
            return function(FF) {
              return SF.apply(this, arguments)
            }
          }(),
          release: () => {
            SF || (SF = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const FF = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const WF of FF) WF.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((SF, CF) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const WF = () => {
                this.inProgress--, this.runNextAttempt()
              };
              FF().then((FF => {
                WF(), SF(FF)
              }), (FF => {
                WF(), CF(FF)
              }))
            },
            isRedelivery: WF
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const FF = this.options.getNow(),
            WF = this.attemptQueue.findIndex((WF => {
              let {
                isRedelivery: SF
              } = WF;
              return this.unloading || !SF || FF >= this.nextSendAt
            }));
          if (WF < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - FF)));
          const [SF] = this.attemptQueue.splice(WF, 1);
          SF.isRedelivery && !this.unloading && (this.nextSendAt = FF + 1), SF.run()
        }
      }
      waitForTurn(FF, WF) {
        const SF = Math.min(WF * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((WF => {
          this.waiting.push({
            sequence: FF,
            readyAt: this.options.getNow() + SF,
            resolve: WF
          }), this.waiting.sort(((FF, WF) => FF.readyAt === WF.readyAt ? FF.sequence - WF.sequence : FF.readyAt - WF.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const FF = this.waiting[0],
          WF = FF.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const WF = this.waiting.indexOf(FF);
          WF >= 0 && this.waiting.splice(WF, 1), FF.resolve(!1), this.scheduleNext()
        }), Math.max(0, WF - this.options.getNow()))
      }
    };

    function ih(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if ({}.hasOwnProperty.call(FF, CF)) {
            if (WF.includes(CF)) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.includes(SF) || {}.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function eu(FF) {
      const {
        size: WF,
        concurrency: SF
      } = FF, CF = [];
      let AF = 0;
      const uF = () => {
        if (AF < SF && CF.length) {
          const {
            producer: FF,
            resolve: WF,
            reject: SF
          } = CF.shift();
          AF++, FF().then((FF => {
            AF--, uF(), WF(FF)
          }), (FF => {
            AF--, uF(), SF(FF)
          }))
        }
      };
      return {
        add: FF => {
          if (CF.length + AF >= WF) throw new Error("Task buffer full");
          return new Promise(((WF, SF) => {
            CF.push({
              producer: FF,
              resolve: WF,
              reject: SF
            }), uF()
          }))
        }
      }
    }
    const Eu = ["headers"],
      Qu = ["keepalive", "signal"],
      rh = new Set([408, 425, 429, 500, 502, 503, 504]),
      gh = new Set([429, 503]);
    let th = 0,
      Tu = 0;
    var ah = class extends Error {};
    var kh = class extends JA {
      constructor(FF) {
        var WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW;
        super(), this.options = FF, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = SS, this.pendingCustomSends = 0, this.getNow = null !== (WF = FF.getNow) && void 0 !== WF ? WF : Date.now, this.requestTimeoutMs = null !== (SF = FF.requestTimeoutMs) && void 0 !== SF ? SF : 1e4, this.compressionEnabled = null !== (CF = FF.requestCompression) && void 0 !== CF && CF && "undefined" !== typeof CompressionStream, FF.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Ru({
          bufferSize: null !== (AF = FF.bufferSize) && void 0 !== AF ? AF : 30,
          concurrency: null !== (uF = FF.concurrency) && void 0 !== uF ? uF : 5,
          retry: {
            maxAttempts: null !== (hF = null === (bW = FF.retry) || void 0 === bW ? void 0 : bW.maxAttempts) && void 0 !== hF ? hF : 3,
            initialBackoffMs: null !== (dF = null !== (PF = null === (RF = FF.retry) || void 0 === RF ? void 0 : RF.initialBackoffMs) && void 0 !== PF ? PF : FF.defaultRateLimitBackoffMs) && void 0 !== dF ? dF : 1e3,
            maxBackoffMs: null !== (iW = null === (eF = FF.retry) || void 0 === eF ? void 0 : eF.maxBackoffMs) && void 0 !== iW ? iW : 3e4,
            backoffMultiplier: null !== (EF = null === (QF = FF.retry) || void 0 === QF ? void 0 : QF.backoffMultiplier) && void 0 !== EF ? EF : 2
          },
          getNow: this.getNow,
          getRandom: null !== (rW = FF.getRandom) && void 0 !== rW ? rW : Math.random,
          onRetry: (FF, WF) => {
            this.logDebug(`Retrying failed request after ${FF}ms. Attempt ${WF}.`)
          }
        }), this.customPromiseBuffer = eu({
          size: null !== (gW = FF.bufferSize) && void 0 !== gW ? gW : 30,
          concurrency: null !== (tW = FF.concurrency) && void 0 !== tW ? tW : 5
        }), this.defaultPromiseBuffer = {
          add: FF => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(FF);
            const WF = this.deliveryQueue.reserve();
            if (!WF) throw new Error("Task buffer full");
            return this.runBufferedTask(WF, FF)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (FF => {
          FF.persisted && this.deliveryQueue.resume()
        })))
      }
      send(FF) {
        var WF = this;
        return wC((function*() {
          const SF = WF.promiseBuffer;
          if (SF !== WF.defaultPromiseBuffer || SF.add !== WF.defaultBufferAdd) {
            WF.pendingCustomSends++;
            try {
              yield SF.add((() => WF.deliver(FF)))
            } catch (CF) {
              WF.logError("Permanent delivery failure", {
                error: CF,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              WF.pendingCustomSends--
            }
          } else yield WF.deliver(FF)
        }))()
      }
      runBufferedTask(FF, WF) {
        return wC((function*() {
          let SF;
          try {
            return yield FF.deliver(wC((function*() {
              return SF = yield WF(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), SF
          } finally {
            FF.release()
          }
        }))()
      }
      deliver(FF) {
        var WF = this;
        return wC((function*() {
          const SF = WF.deliveryQueue.reserve();
          if (SF) try {
            const CF = yield WF.prepareRequest(FF), AF = yield SF.deliver(((FF, SF) => WF.performAttempt(CF, FF, SF)));
            "terminal" === AF.kind && WF.logError("retries-exhausted" === AF.reason ? "Delivery retries exhausted" : "Permanent delivery failure", RW(RW({}, AF.failure), {}, {
              reason: AF.reason,
              attempts: AF.attempts,
              elapsedTimeMs: AF.elapsedTimeMs
            }))
          } catch (CF) {
            WF.logError("Permanent delivery failure", {
              error: CF,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            SF.release()
          } else WF.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var FF;
        return [this.options.url].concat(null !== (FF = this.config.ignoreUrls) && void 0 !== FF ? FF : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(FF) {
        var WF = this;
        return wC((function*() {
          var SF, CF;
          const AF = Wu(FF),
            uF = null === (SF = AF.meta.session) || void 0 === SF ? void 0 : SF.id,
            hF = JSON.stringify(AF),
            bW = null !== (CF = WF.options.requestOptions) && void 0 !== CF ? CF : {},
            {
              headers: dF = {}
            } = bW,
            PF = ih(bW, Eu),
            {
              keepalive: RF,
              signal: iW
            } = PF,
            eF = ih(PF, Qu),
            EF = {};
          for (const [FF, WF] of Object.entries(dF)) EF[FF] = "function" === typeof WF ? yield WF(): WF;
          let QF = hF,
            rW = function(FF) {
              return "undefined" === typeof TextEncoder ? FF.length : (new TextEncoder).encode(FF).byteLength
            }(hF);
          const gW = {};
          return WF.compressionEnabled && (QF = yield WF.compress(hF), rW = QF.size, gW["Content-Encoding"] = "gzip"), {
            bodySize: rW,
            sessionId: uF,
            requestInit: RW({
              method: "POST",
              headers: RW(RW(RW(RW(RW({
                "Content-Type": "application/json"
              }, gW), EF), WF.options.apiKey ? {
                "x-api-key": WF.options.apiKey
              } : {}), uF ? {
                "x-faro-session-id": uF
              } : {}), {}, {
                "Idempotency-Key": tS(20)
              }),
              body: QF
            }, eF)
          }
        }))()
      }
      performAttempt(FF, WF, SF) {
        var CF = this;
        return wC((function*() {
          var AF;
          const uF = null === (AF = CF.options.requestOptions) || void 0 === AF ? void 0 : AF.signal;
          if (null === uF || void 0 === uF ? void 0 : uF.aborted) return {
            kind: "terminal",
            failure: {
              error: uF.reason
            },
            attemptsMade: 0
          };
          let hF = 0;
          try {
            var bW;
            const AF = yield CF.fetchWithKeepaliveFallback(FF.requestInit, FF.bodySize, !!SF || (null === (bW = CF.options.requestOptions) || void 0 === bW ? void 0 : bW.keepalive), WF, (() => hF++));
            if (CF.handleResponse(AF, FF.sessionId), AF.status >= 200 && AF.status < 300) return {
              kind: "success",
              attemptsMade: hF
            };
            const uF = {
              status: AF.status
            };
            return !rh.has(AF.status) || SF ? {
              kind: "terminal",
              failure: uF,
              attemptsMade: hF
            } : {
              kind: "retry",
              failure: uF,
              attemptsMade: hF,
              retryAfterMs: gh.has(AF.status) ? CF.getRetryAfterDelayMs(AF) : void 0
            }
          } catch (dF) {
            const FF = {
              error: dF
            };
            return (null === uF || void 0 === uF ? void 0 : uF.aborted) || !CF.isFetchNetworkError(dF) || SF ? {
              kind: "terminal",
              failure: FF,
              attemptsMade: hF
            } : {
              kind: "retry",
              failure: FF,
              attemptsMade: hF
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(FF, WF, SF, CF, AF) {
        var uF = this;
        return wC((function*() {
          const hF = uF.getNow(),
            bW = uF.reserveKeepalive(WF, SF);
          try {
            return yield uF.fetchWithTimeout(RW(RW({}, FF), {}, {
              keepalive: bW.keepalive
            }), uF.requestTimeoutMs, AF)
          } catch (PF) {
            var dF;
            if (bW.keepalive && CF > 1 && uF.isFetchNetworkError(PF) && !(PF instanceof ah) && !(null === (dF = uF.options.requestOptions) || void 0 === dF || null === (dF = dF.signal) || void 0 === dF ? void 0 : dF.aborted)) {
              uF.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const WF = uF.requestTimeoutMs - (uF.getNow() - hF);
              return uF.fetchWithTimeout(RW(RW({}, FF), {}, {
                keepalive: !1
              }), WF, AF)
            }
            throw PF
          } finally {
            bW.release()
          }
        }))()
      }
      fetchWithTimeout(FF, WF, SF) {
        var CF = this;
        return wC((function*() {
          var AF;
          const uF = null === (AF = CF.options.requestOptions) || void 0 === AF ? void 0 : AF.signal;
          if (CF.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return SF(), fetch(CF.options.url, RW(RW({}, FF), {}, {
            signal: uF
          }));
          if (WF <= 0) throw new ah("Request timed out");
          const hF = new AbortController,
            bW = () => hF.abort(null === uF || void 0 === uF ? void 0 : uF.reason);
          null === uF || void 0 === uF || uF.addEventListener("abort", bW, {
            once: !0
          });
          let dF = !1;
          const PF = setTimeout((() => {
            dF = !0, hF.abort()
          }), WF);
          try {
            return SF(), yield fetch(CF.options.url, RW(RW({}, FF), {}, {
              signal: hF.signal
            }))
          } catch (RF) {
            if (dF && !(null === uF || void 0 === uF ? void 0 : uF.aborted)) throw new ah("Request timed out");
            throw RF
          } finally {
            clearTimeout(PF), null === uF || void 0 === uF || uF.removeEventListener("abort", bW)
          }
        }))()
      }
      getRetryAfterDelayMs(FF) {
        const WF = FF.headers.get("Retry-After");
        if (!WF) return;
        if (/^\d+$/.test(WF)) {
          const FF = 1e3 * Number(WF);
          return Number.isFinite(FF) ? FF : Number.POSITIVE_INFINITY
        }
        const SF = this.getNow(),
          CF = function(FF, WF) {
            const SF = Cu.exec(FF);
            if (SF) {
              const [, FF, WF, CF, AF, uF, hF, bW] = SF;
              return Pu({
                weekday: hu.indexOf(FF),
                day: Number(WF),
                month: du.indexOf(CF),
                year: Number(AF),
                hour: Number(uF),
                minute: Number(hF),
                second: Number(bW)
              })
            }
            const CF = Au.exec(FF);
            if (CF) {
              const [, FF, SF, hF, bW, dF, PF, RF] = CF, iW = new Date(WF);
              if (Number.isNaN(iW.getTime())) return;
              const eF = iW.getUTCFullYear();
              let EF = 100 * Math.floor(eF / 100) + Number(bW);
              EF < eF && (EF += 100);
              const QF = du.indexOf(hF),
                rW = {
                  month: QF,
                  day: Number(SF),
                  hour: Number(dF),
                  minute: Number(PF),
                  second: Number(RF),
                  millisecond: 0
                },
                gW = {
                  month: iW.getUTCMonth(),
                  day: iW.getUTCDate(),
                  hour: iW.getUTCHours(),
                  minute: iW.getUTCMinutes(),
                  second: iW.getUTCSeconds(),
                  millisecond: iW.getUTCMilliseconds()
                };
              return (EF > eF + 50 || EF === eF + 50 && (uF = gW, ((AF = rW).month - uF.month || AF.day - uF.day || AF.hour - uF.hour || AF.minute - uF.minute || AF.second - uF.second || AF.millisecond - uF.millisecond) > 0)) && (EF -= 100), Pu({
                weekday: bh.indexOf(FF),
                day: Number(SF),
                month: QF,
                year: EF,
                hour: Number(dF),
                minute: Number(PF),
                second: Number(RF)
              })
            }
            var AF, uF;
            const hF = uu.exec(FF);
            if (!hF) return;
            const [, bW, dF, PF, RF, iW, eF, EF, QF] = hF;
            return Pu({
              weekday: hu.indexOf(bW),
              day: Number(null !== PF && void 0 !== PF ? PF : RF),
              month: du.indexOf(dF),
              year: Number(QF),
              hour: Number(iW),
              minute: Number(eF),
              second: Number(EF)
            })
          }(WF, SF);
        return null == CF ? void 0 : Math.max(0, CF - SF)
      }
      reserveKeepalive(FF, WF) {
        if (!1 === WF || FF > 6e4 || th + FF > 6e4 || Tu >= 9) return {
          keepalive: !1,
          release: KW
        };
        th += FF, Tu++;
        let SF = !1;
        return {
          keepalive: !0,
          release: () => {
            SF || (SF = !0, th -= FF, Tu--)
          }
        }
      }
      handleResponse(FF, WF) {
        202 === FF.status && "invalid" === FF.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), WF), FF.text().catch(KW)
      }
      isFetchNetworkError(FF) {
        return FF instanceof TypeError || FF instanceof ah || FF instanceof DOMException && "AbortError" === FF.name
      }
      compress(FF) {
        return wC((function*() {
          const WF = [],
            SF = new ReadableStream({
              start(WF) {
                WF.enqueue((new TextEncoder).encode(FF)), WF.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: FF,
              value: CF
            } = yield SF.read();
            if (FF) return new Blob(WF);
            WF.push(CF)
          }
        }))()
      }
      extendFaroSession(FF, WF, SF) {
        var CF, AF;
        const uF = FF.sessionTracking;
        if (!(null === uF || void 0 === uF ? void 0 : uF.enabled)) return void WF("Session expired.");
        const {
          fetchUserSession: hF,
          storeUserSession: bW
        } = HW(uF), dF = null === (CF = this.metas.value.session) || void 0 === CF ? void 0 : CF.id, PF = null === (AF = hF()) || void 0 === AF ? void 0 : AF.sessionId;
        SF && SF === dF && SF === PF ? (ZW({
          fetchUserSession: hF,
          storeUserSession: bW
        })({
          forceSessionExtend: !0
        }), WF("Session expired; created new session.")) : WF("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const qh = () => {
      const FF = window.k6;
      return {
        k6: RW({
          isK6Browser: !0
        }, (null === FF || void 0 === FF ? void 0 : FF.testRunId) && {
          testRunId: null === FF || void 0 === FF ? void 0 : FF.testRunId
        })
      }
    };
    let Vu, Nu;

    function Du() {
      let {
        generatePageId: FF,
        initialPageMeta: WF
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const SF = location.href;
        return xW(FF) && Vu !== SF && (Vu = SF, Nu = FF(location)), {
          page: RW(RW({
            url: SF
          }, Nu ? {
            id: Nu
          } : {}), WF)
        }
      }
    }

    function Lu() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lW,
        WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const SF = XW;
      return WF > 0 && (SF.error = WF >= 1 ? function() {
        for (var WF = arguments.length, CF = new Array(WF), AF = 0; AF < WF; AF++) CF[AF] = arguments[AF];
        FF.error(`${SF.prefix}\n`, ...CF)
      } : KW, SF.warn = WF >= 2 ? function() {
        for (var WF = arguments.length, CF = new Array(WF), AF = 0; AF < WF; AF++) CF[AF] = arguments[AF];
        FF.warn(`${SF.prefix}\n`, ...CF)
      } : KW, SF.info = WF >= 3 ? function() {
        for (var WF = arguments.length, CF = new Array(WF), AF = 0; AF < WF; AF++) CF[AF] = arguments[AF];
        FF.info(`${SF.prefix}\n`, ...CF)
      } : KW, SF.debug = WF >= 4 ? function() {
        for (var WF = arguments.length, CF = new Array(WF), AF = 0; AF < WF; AF++) CF[AF] = arguments[AF];
        FF.debug(`${SF.prefix}\n`, ...CF)
      } : KW), SF
    }
    const mh = "faro",
      Ou = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      xh = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Zu(FF) {
      var WF, SF, AF, uF, hF, bW;
      const dF = [],
        RF = Lu(FF.unpatchedConsole, FF.internalLoggerLevel);
      FF.transports ? ((FF.url || FF.apiKey) && RF.error('if "transports" is defined, "url" and "apiKey" should not be defined'), dF.push(...FF.transports)) : FF.url ? dF.push(new kh({
        url: FF.url,
        apiKey: FF.apiKey,
        requestCompression: FF.requestCompression
      })) : RF.error('either "url" or "transports" must be defined');
      const {
        dedupe: iW = !0,
        eventDomain: eF = CF,
        globalObjectKey: EF = mh,
        instrumentations: QF = nA(),
        internalLoggerLevel: rW = UW,
        isolate: gW = !1,
        logArgsSerializer: tW = oS,
        metas: TF = Yu(FF),
        paused: aW = !1,
        preventGlobalExposure: kW = !1,
        unpatchedConsole: qW = lW,
        url: VF,
        experimental: NF
      } = FF, DF = ih(FF, xh), LF = null !== (WF = null === NF || void 0 === NF ? void 0 : NF.trackNavigation) && void 0 !== WF && WF, mW = {
        dataAttributeName: JC(null !== (SF = null === (AF = FF.userActionsInstrumentation) || void 0 === AF ? void 0 : AF.dataAttributeName) && void 0 !== SF ? SF : BC),
        excludeItem: null === (uF = FF.userActionsInstrumentation) || void 0 === uF ? void 0 : uF.excludeItem,
        initialActivityTimeout: pC(null === (hF = FF.userActionsInstrumentation) || void 0 === hF ? void 0 : hF.initialActivityTimeout, 100, (FF => RF.warn(FF)))
      };
      return RW(RW({}, DF), {}, {
        batching: RW(RW({}, Ou), FF.batching),
        dedupe: iW,
        globalObjectKey: EF,
        instrumentations: ou(QF, FF),
        internalLoggerLevel: rW,
        isolate: gW,
        logArgsSerializer: tW,
        metas: TF,
        parseStacktrace: rC,
        paused: aW,
        preventGlobalExposure: kW,
        transports: dF,
        unpatchedConsole: qW,
        eventDomain: eF,
        ignoreUrls: [...null !== (bW = FF.ignoreUrls) && void 0 !== bW ? bW : [], ...VF ? [VF] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: RW(RW(RW({}, PF), FF.sessionTracking), Mu({
          trackGeolocation: FF.trackGeolocation,
          sessionTracking: FF.sessionTracking
        })),
        userActionsInstrumentation: mW,
        experimental: {
          trackNavigation: LF
        }
      })
    }

    function ou(FF, WF) {
      let {
        experimental: SF
      } = WF;
      var CF;
      const AF = null !== (CF = null === SF || void 0 === SF ? void 0 : SF.trackNavigation) && void 0 !== CF && CF;
      return FF.filter((FF => !("@grafana/faro-web-sdk:instrumentation-navigation" === FF.name && !AF)))
    }

    function Yu(FF) {
      var WF, SF, CF;
      const {
        page: AF,
        generatePageId: uF
      } = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.pageTracking) && void 0 !== WF ? WF : {}, hF = [UA, BA, Du({
        generatePageId: uF,
        initialPageMeta: AF
      }), ...null !== (SF = FF.metas) && void 0 !== SF ? SF : [], vu];
      return OF(null === (CF = window) || void 0 === CF ? void 0 : CF.k6) ? [...hF, qh] : hF
    }

    function Mu(FF) {
      let {
        trackGeolocation: WF,
        sessionTracking: SF
      } = FF;
      var CF;
      const AF = {};
      return LF(WF) && (AF.geoLocationTrackingEnabled = WF), UF(AF) ? {} : {
        session: RW(RW({}, null !== (CF = null === SF || void 0 === SF ? void 0 : SF.session) && void 0 !== CF ? CF : {}), {}, {
          overrides: AF
        })
      }
    }
    const ch = new WeakSet;

    function Gu(FF) {
      return ch.add(FF), FF
    }

    function zh(FF, WF) {
      if (FF.capture) return Gu(FF.capture(WF));
      const SF = Gu(FF.value);
      return null === WF || void 0 === WF || WF(), SF
    }

    function Iu(FF) {
      const WF = `__faroBundleId_${FF}`,
        SF = null === RF || void 0 === RF ? void 0 : RF[WF];
      if ("string" === typeof SF && "" !== SF) return SF;
      const CF = "undefined" !== typeof window ? window[WF] : void 0;
      return "string" === typeof CF && "" !== CF ? CF : void 0
    }

    function fu(FF) {
      var WF, SF;
      const CF = FF.config.app.name,
        AF = CF ? function(FF) {
          return null === RF || void 0 === RF ? void 0 : RF[`__faroGitHash_${FF}`]
        }(CF) : void 0,
        uF = {
          sdk: {
            version: SS,
            name: "faro"
          },
          app: pW({
            bundleId: CF && Iu(CF)
          }, void 0 !== AF ? {
            gitHash: AF
          } : {})
        },
        hF = null === (WF = FF.config.sessionTracking) || void 0 === WF ? void 0 : WF.session;
      hF && FF.api.setSession(hF), FF.config.app && (uF.app = pW(pW({}, FF.config.app), uF.app)), FF.config.user && (uF.user = FF.config.user), FF.config.view && (uF.view = FF.config.view), FF.metas.add(uF, ...null !== (SF = FF.config.metas) && void 0 !== SF ? SF : [])
    }
    var yh = class {
      constructor(FF, WF) {
        var SF, CF;
        this.signalBuffer = [], this.itemLimit = null !== (SF = null === WF || void 0 === WF ? void 0 : WF.itemLimit) && void 0 !== SF ? SF : 50, this.sendTimeout = null !== (CF = null === WF || void 0 === WF ? void 0 : WF.sendTimeout) && void 0 !== CF ? CF : 250, this.paused = (null === WF || void 0 === WF ? void 0 : WF.paused) || !1, this.sendFn = FF, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(FF) {
        this.paused || (this.signalBuffer.push(FF), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(FF) {
        const WF = new Map;
        return FF.forEach((FF => {
          const SF = JSON.stringify(FF.meta);
          let CF = WF.get(SF);
          CF = void 0 === CF ? [FF] : [...CF, FF], WF.set(SF, CF)
        })), Array.from(WF.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const FF = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(FF).forEach(this.sendFn)
        } catch (WF) {
          throw this.signalBuffer = [...FF, ...this.signalBuffer], this.trimBufferToLimit(), WF
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function su(FF, WF, SF, CF) {
      var AF;
      WF.debug("Initializing transports");
      const uF = [];
      let hF = [];
      const bW = FF => {
        let WF = FF;
        for (const CF of hF) {
          const FF = WF.map(CF).filter(Boolean);
          if (0 === FF.length) return [];
          WF = nu(FF, SF)
        }
        return WF
      };
      let dF;
      (null === (AF = SF.batching) || void 0 === AF ? void 0 : AF.enabled) && (dF = new yh((FF => {
        const SF = bW(FF);
        if (0 !== SF.length)
          for (const CF of uF) WF.debug(`Transporting item using ${CF.name}\n`, SF), CF.isBatched() && CF.send(SF)
      }), {
        sendTimeout: SF.batching.sendTimeout,
        itemLimit: SF.batching.itemLimit,
        paused: SF.paused
      }));
      return {
        add: function() {
          WF.debug("Adding transports");
          for (var AF = arguments.length, hF = new Array(AF), bW = 0; bW < AF; bW++) hF[bW] = arguments[bW];
          hF.forEach((AF => {
            WF.debug(`Adding "${AF.name}" transport`), uF.some((FF => FF === AF)) ? WF.warn(`Transport ${AF.name} is already added`) : (AF.unpatchedConsole = FF, AF.internalLogger = WF, AF.config = SF, AF.metas = CF, uF.push(AF))
          }))
        },
        addBeforeSendHooks: function() {
          WF.debug("Adding beforeSendHooks\n", hF);
          for (var FF = arguments.length, SF = new Array(FF), CF = 0; CF < FF; CF++) SF[CF] = arguments[CF];
          SF.forEach((FF => {
            FF && hF.push(FF)
          }))
        },
        getBeforeSendHooks: () => [...hF],
        execute: FF => {
          var AF;
          if (!SF.paused && sW(CF).shouldCapture()) {
            if (iW = FF.meta, !ch.has(iW)) {
              var hF, PF, RF;
              const WF = null === (hF = CF.value.session) || void 0 === hF ? void 0 : hF.id,
                AF = zh(CF);
              if (SF.paused) return;
              const uF = pW({}, FF.meta);
              (null === (PF = uF.session) || void 0 === PF ? void 0 : PF.id) === WF && (null === (RF = AF.session) || void 0 === RF ? void 0 : RF.id) !== WF && (void 0 === AF.session ? delete uF.session : uF.session = AF.session), FF = pW(pW({}, FF), {}, {
                meta: Gu(uF)
              })
            }
            var iW;
            (null === (AF = SF.batching) || void 0 === AF ? void 0 : AF.enabled) && (null === dF || void 0 === dF || dF.addItem(FF)), (FF => {
              var CF;
              if ((null === (CF = SF.batching) || void 0 === CF ? void 0 : CF.enabled) && uF.every((FF => FF.isBatched()))) return;
              const [AF] = bW([FF]);
              if (void 0 !== AF)
                for (const bW of uF) {
                  var hF;
                  WF.debug(`Transporting item using ${bW.name}\n`, AF), bW.isBatched() ? (null === (hF = SF.batching) || void 0 === hF ? void 0 : hF.enabled) || bW.send([AF]) : bW.send(AF)
                }
            })(FF)
          }
        },
        isPaused: () => SF.paused,
        pause: () => {
          WF.debug("Pausing transports"), null === dF || void 0 === dF || dF.pause(), SF.paused = !0
        },
        remove: function() {
          WF.debug("Removing transports");
          for (var FF = arguments.length, SF = new Array(FF), CF = 0; CF < FF; CF++) SF[CF] = arguments[CF];
          SF.forEach((FF => {
            WF.debug(`Removing "${FF.name}" transport`);
            const SF = uF.indexOf(FF); - 1 !== SF ? uF.splice(SF, 1) : WF.warn(`Transport "${FF.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var FF = arguments.length, SF = new Array(FF), CF = 0; CF < FF; CF++) SF[CF] = arguments[CF];
          WF.debug("Removing beforeSendHooks"), hF = hF.filter((FF => !SF.includes(FF)))
        },
        get transports() {
          return [...uF]
        },
        unpause: () => {
          WF.debug("Unpausing transports"), null === dF || void 0 === dF || dF.start(), SF.paused = !1
        }
      }
    }

    function nu(FF, WF) {
      if (WF.preserveOriginalError)
        for (const SF of FF) "exception" === SF.type && delete SF.payload.originalError;
      return FF
    }
    let Hu = lW;

    function Ku(FF) {
      var WF;
      return Hu = null !== (WF = FF.unpatchedConsole) && void 0 !== WF ? WF : Hu, Hu
    }
    let wu, Xu = XW;

    function Uu(FF, WF) {
      return Xu = Lu(FF, WF.internalLoggerLevel), Xu
    }

    function Bu(FF) {
      let {
        internalLogger: WF,
        config: SF,
        metas: CF,
        transports: AF,
        tracesApi: uF,
        userActionsApi: hF
      } = FF;
      var bW;
      WF.debug("Initializing exceptions API");
      let dF = null;
      wu = null !== (bW = SF.parseStacktrace) && void 0 !== bW ? bW : wu;
      const PF = FF => {
          WF.debug("Changing stacktrace parser"), wu = null !== FF && void 0 !== FF ? FF : wu
        },
        {
          ignoreErrors: RF = [],
          preserveOriginalError: iW
        } = SF;
      return PF(SF.parseStacktrace), {
        changeStacktraceParser: PF,
        getStacktraceParser: () => wu,
        pushError: function(FF) {
          let {
            skipDedupe: bW,
            stackFrames: PF,
            type: eF,
            context: EF,
            spanContext: QF,
            timestampOverwriteMs: rW,
            originalError: gW,
            fingerprint: tW,
            fatal: TF
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(FF, WF) {
              const {
                message: SF,
                name: CF,
                stack: AF
              } = WF;
              return uF = FF, hF = SF + " " + CF + " " + AF, uF.some((FF => VF(FF) ? hF.includes(FF) : !!hF.match(FF)));
              var uF, hF
            }(RF, null !== gW && void 0 !== gW ? gW : FF)) try {
            var aW, kW;
            if (!sW(CF).shouldCapture()) return;
            const RF = zS(pW(pW({}, function(FF) {
                let WF = FF.cause;
                IF(WF) ? WF = FF.cause.toString() : null !== WF && (OF(FF.cause) || ZF(FF.cause)) ? WF = GW(FF.cause) : null != WF && (WF = FF.cause.toString());
                return null == WF ? {} : {
                  cause: WF
                }
              }(null !== gW && void 0 !== gW ? gW : FF)), null !== EF && void 0 !== EF ? EF : {})),
              VF = pW(pW(pW(pW({
                type: eF || FF.name || "Error",
                value: FF.message,
                timestamp: rW ? rS(rW) : QW(),
                trace: QF ? {
                  trace_id: QF.traceId,
                  span_id: QF.spanId
                } : uF.getTraceContext()
              }, UF(RF) ? {} : {
                context: RF
              }), iW ? {
                originalError: gW
              } : {}), tW ? {
                fingerprint: tW
              } : {}), void 0 !== TF ? {
                fatal: TF
              } : {});
            PF = null !== (aW = PF) && void 0 !== aW ? aW : FF.stack ? null === wu || void 0 === wu ? void 0 : wu(FF).frames : void 0, (null === PF || void 0 === PF ? void 0 : PF.length) && (VF.stacktrace = {
              frames: PF
            });
            const NF = {
              type: VF.type,
              value: VF.value,
              stacktrace: VF.stacktrace,
              context: VF.context,
              fingerprint: VF.fingerprint,
              fatal: null !== (kW = VF.fatal) && void 0 !== kW && kW
            };
            if (!bW && SF.dedupe && !qW(dF) && TW(NF, dF)) return void WF.debug("Skipping error push because it is the same as the last one\n", VF);
            const DF = dF,
              LF = zh(CF);
            if (dF !== DF && !bW && SF.dedupe && TW(NF, dF)) return;
            dF = NF;
            const mW = {
              meta: LF,
              payload: VF,
              type: "exception"
            };
            WF.debug("Pushing exception\n", mW), VA(hF.getActiveUserAction(), mW) || AF.execute(mW)
          } catch (NF) {
            WF.error("Error pushing event", NF)
          }
        }
      }
    }

    function jh(FF, WF, SF, CF, AF) {
      WF.debug("Initializing API");
      let uF = null;
      const hF = function(FF) {
          let {
            transports: WF,
            internalLogger: SF,
            config: CF,
            pushEvent: AF
          } = FF;
          var uF;
          const hF = null === (uF = CF.userActionsInstrumentation) || void 0 === uF ? void 0 : uF.excludeItem;
          let bW;
          const dF = () => bW;
          return {
            startUserAction: (FF, CF, uF) => {
              if (void 0 === dF()) {
                const SF = new ku({
                  name: FF,
                  transports: WF,
                  attributes: CF,
                  trigger: (null === uF || void 0 === uF ? void 0 : uF.triggerName) || "faroApiCall",
                  importance: (null === uF || void 0 === uF ? void 0 : uF.importance) || TA.Normal,
                  trackUserActionsExcludeItem: hF,
                  pushEvent: AF
                });
                return SF.filter((FF => [3, 2].includes(FF))).first().subscribe((() => {
                  bW = void 0
                })), qu.notify({
                  type: tu,
                  userAction: SF,
                  initialActivityTimeout: null === uF || void 0 === uF ? void 0 : uF.initialActivityTimeout
                }), bW = SF, bW
              }
              SF.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: dF
          }
        }({
          transports: AF,
          config: SF,
          internalLogger: WF,
          pushEvent: (FF, SF, CF, AF) => {
            uF ? uF(FF, SF, CF, AF) : WF.warn("pushEventImpl is not initialized. Event dropped:", {
              name: FF,
              attributes: SF,
              domain: CF,
              options: AF
            })
          }
        }),
        bW = function(FF, WF, SF, CF, AF) {
          let uF;
          return WF.debug("Initializing traces API"), {
            getOTEL: () => uF,
            getTraceContext: () => {
              const FF = null === uF || void 0 === uF ? void 0 : uF.trace.getSpanContext(uF.context.active());
              return FF ? {
                trace_id: FF.traceId,
                span_id: FF.spanId
              } : void 0
            },
            initOTEL: (FF, SF) => {
              WF.debug("Initializing OpenTelemetry"), uF = {
                trace: FF,
                context: SF
              }
            },
            isOTELInitialized: () => !!uF,
            pushTraces: FF => {
              try {
                if (!sW(CF).shouldCapture()) return;
                const SF = {
                  type: "trace",
                  payload: FF,
                  meta: zh(CF)
                };
                WF.debug("Pushing trace\n", SF), AF.execute(SF)
              } catch (SF) {
                WF.error("Error pushing trace\n", SF)
              }
            }
          }
        }(0, WF, 0, CF, AF),
        dF = {
          unpatchedConsole: FF,
          internalLogger: WF,
          userActionsApi: hF,
          config: SF,
          metas: CF,
          transports: AF,
          tracesApi: bW
        },
        PF = function(FF) {
          let {
            internalLogger: WF,
            config: SF,
            metas: CF,
            transports: AF,
            tracesApi: uF,
            userActionsApi: hF
          } = FF, bW = null;
          return {
            pushEvent: function(FF, dF, PF) {
              let {
                skipDedupe: RF,
                spanContext: iW,
                timestampOverwriteMs: eF,
                customPayloadTransformer: EF = FF => FF
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!sW(CF).shouldCapture()) return;
                const QF = zS(dF),
                  rW = EF({
                    name: FF,
                    domain: null !== PF && void 0 !== PF ? PF : SF.eventDomain,
                    attributes: UF(QF) ? void 0 : QF,
                    timestamp: eF ? rS(eF) : QW(),
                    trace: iW ? {
                      trace_id: iW.traceId,
                      span_id: iW.spanId
                    } : uF.getTraceContext()
                  }),
                  gW = {
                    name: rW.name,
                    attributes: rW.attributes,
                    domain: rW.domain
                  };
                if (!RF && SF.dedupe && !qW(bW) && TW(gW, bW)) return void WF.debug("Skipping event push because it is the same as the last one\n", rW);
                const tW = bW,
                  TF = zh(CF);
                if (bW !== tW && !RF && SF.dedupe && TW(gW, bW)) return;
                bW = gW;
                const aW = {
                  meta: TF,
                  payload: rW,
                  type: "event"
                };
                WF.debug("Pushing event\n", aW), VA(hF.getActiveUserAction(), aW) || AF.execute(aW)
              } catch (QF) {
                WF.error("Error pushing event", QF)
              }
            }
          }
        }(dF);
      return uF = PF.pushEvent, pW(pW(pW(pW(pW(pW(pW({}, bW), Bu(dF)), function(FF) {
        let WF, SF, CF, AF, {
          internalLogger: uF,
          metas: hF
        } = FF;
        uF.debug("Initializing meta API");
        const bW = FF => {
            SF && hF.remove(SF), SF = {
              user: FF
            }, hF.add(SF)
          },
          dF = (FF, SF) => {
            var CF;
            const AF = null === SF || void 0 === SF ? void 0 : SF.overrides,
              uF = AF ? {
                overrides: pW(pW({}, null === WF || void 0 === WF || null === (CF = WF.session) || void 0 === CF ? void 0 : CF.overrides), AF)
              } : {};
            WF && hF.remove(WF), WF = {
              session: pW(pW({}, UF(FF) ? void 0 : FF), uF)
            }, hF.add(WF)
          },
          PF = (FF, WF) => {
            sW(hF).notifySessionUpdate({
              type: "replace",
              session: FF,
              overrides: null === WF || void 0 === WF ? void 0 : WF.overrides
            }), dF(FF, WF)
          },
          RF = () => hF.value.session,
          iW = () => hF.value.page;
        return {
          setUser: bW,
          resetUser: bW,
          setSession: PF,
          resetSession: PF,
          getSession: RF,
          setView: (FF, WF) => {
            var SF;
            if ((null === WF || void 0 === WF ? void 0 : WF.overrides) && (sW(hF).notifySessionUpdate({
                type: "overrides",
                overrides: WF.overrides
              }), dF(RF(), {
                overrides: WF.overrides
              })), (null === CF || void 0 === CF || null === (SF = CF.view) || void 0 === SF ? void 0 : SF.name) === (null === FF || void 0 === FF ? void 0 : FF.name)) return;
            const AF = CF;
            CF = {
              view: FF
            }, hF.add(CF), AF && hF.remove(AF)
          },
          getView: () => hF.value.view,
          setPage: FF => {
            var WF;
            const SF = VF(FF) ? pW(pW({}, null !== (WF = null === AF || void 0 === AF ? void 0 : AF.page) && void 0 !== WF ? WF : iW()), {}, {
              id: FF
            }) : FF;
            AF && hF.remove(AF), AF = {
              page: SF
            }, hF.add(AF)
          },
          getPage: iW
        }
      }(dF)), function(FF) {
        let {
          internalLogger: WF,
          config: SF,
          metas: CF,
          transports: AF,
          tracesApi: uF,
          userActionsApi: hF
        } = FF;
        var bW;
        WF.debug("Initializing logs API");
        let dF = null;
        const PF = null !== (bW = SF.logArgsSerializer) && void 0 !== bW ? bW : oS;
        return {
          pushLog: function(FF) {
            let {
              context: bW,
              level: RF,
              skipDedupe: iW,
              spanContext: eF,
              timestampOverwriteMs: EF
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!sW(CF).shouldCapture()) return;
              const QF = zS(bW),
                rW = {
                  message: PF(FF),
                  level: null !== RF && void 0 !== RF ? RF : "log",
                  context: UF(QF) ? void 0 : QF,
                  timestamp: EF ? rS(EF) : QW(),
                  trace: eF ? {
                    trace_id: eF.traceId,
                    span_id: eF.spanId
                  } : uF.getTraceContext()
                },
                gW = {
                  message: rW.message,
                  level: rW.level,
                  context: rW.context
                };
              if (!iW && SF.dedupe && !qW(dF) && TW(gW, dF)) return void WF.debug("Skipping log push because it is the same as the last one\n", rW);
              const tW = dF,
                TF = zh(CF);
              if (dF !== tW && !iW && SF.dedupe && TW(gW, dF)) return;
              dF = gW;
              const aW = {
                type: "log",
                payload: rW,
                meta: TF
              };
              WF.debug("Pushing log\n", aW), VA(hF.getActiveUserAction(), aW) || AF.execute(aW)
            } catch (QF) {
              WF.error("Error pushing log\n", QF)
            }
          }
        }
      }(dF)), function(FF) {
        let {
          internalLogger: WF,
          config: SF,
          metas: CF,
          transports: AF,
          tracesApi: uF,
          userActionsApi: hF
        } = FF;
        WF.debug("Initializing measurements API");
        let bW = null;
        return {
          pushMeasurement: function(FF) {
            let {
              skipDedupe: dF,
              context: PF,
              spanContext: RF,
              timestampOverwriteMs: iW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!sW(CF).shouldCapture()) return;
              const eF = zS(PF),
                EF = pW(pW({}, FF), {}, {
                  trace: RF ? {
                    trace_id: RF.traceId,
                    span_id: RF.spanId
                  } : uF.getTraceContext(),
                  timestamp: iW ? rS(iW) : QW(),
                  context: UF(eF) ? void 0 : eF
                }),
                QF = {
                  type: EF.type,
                  values: EF.values,
                  context: EF.context
                };
              if (!dF && SF.dedupe && !qW(bW) && TW(QF, bW)) return void WF.debug("Skipping measurement push because it is the same as the last one\n", EF);
              const rW = bW,
                gW = zh(CF);
              if (bW !== rW && !dF && SF.dedupe && TW(QF, bW)) return;
              bW = QF;
              const tW = {
                type: "measurement",
                payload: EF,
                meta: gW
              };
              WF.debug("Pushing measurement\n", tW), VA(hF.getActiveUserAction(), tW) || AF.execute(tW)
            } catch (eF) {
              WF.error("Error pushing measurement\n", eF)
            }
          }
        }
      }(dF)), PF), hF)
    }

    function vh(FF) {
      const WF = Ku(FF),
        SF = Uu(WF, FF);
      if (QF() && !FF.isolate) return void SF.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      SF.debug("Initializing");
      const CF = function(FF, WF) {
          let SF, CF = [],
            AF = [],
            uF = [],
            hF = 0,
            bW = 0;
          const dF = () => CF.reduce(((FF, WF) => Object.assign(FF, xW(WF) ? WF() : WF)), {}),
            PF = () => {
              if (AF.length) {
                const FF = dF();
                AF.forEach((WF => WF(FF)))
              }
            };
          return {
            add: function() {
              for (var FF = arguments.length, SF = new Array(FF), AF = 0; AF < FF; AF++) SF[AF] = arguments[AF];
              WF.debug("Adding metas\n", SF), CF.push(...SF), PF()
            },
            remove: function() {
              for (var FF = arguments.length, SF = new Array(FF), AF = 0; AF < FF; AF++) SF[AF] = arguments[AF];
              WF.debug("Removing metas\n", SF), CF = CF.filter((FF => !SF.includes(FF))), PF()
            },
            addListener: FF => {
              WF.debug("Adding metas listener\n", FF), AF.push(FF)
            },
            removeListener: FF => {
              WF.debug("Removing metas listener\n", FF), AF = AF.filter((WF => WF !== FF))
            },
            capture: FF => {
              var WF;
              const CF = void 0 !== SF,
                AF = null !== (WF = SF) && void 0 !== WF ? WF : uF;
              CF || (SF = AF, hF = 0, bW = AF.length);
              try {
                for (; hF < bW;) {
                  const FF = AF[hF++];
                  null === FF || void 0 === FF || FF()
                }
                const WF = Gu(dF());
                return null === FF || void 0 === FF || FF(), WF
              } finally {
                CF || (SF = void 0)
              }
            },
            addCaptureListener: FF => {
              uF.push(FF)
            },
            removeCaptureListener: FF => {
              uF = uF.filter((WF => WF !== FF))
            },
            get value() {
              return dF()
            }
          }
        }(0, SF),
        AF = su(WF, SF, FF, CF),
        uF = jh(WF, SF, FF, CF, AF),
        hF = function(FF, WF, SF, CF, AF, uF) {
          WF.debug("Initializing instrumentations");
          const hF = [];
          return {
            add: function() {
              WF.debug("Adding instrumentations");
              for (var bW = arguments.length, dF = new Array(bW), PF = 0; PF < bW; PF++) dF[PF] = arguments[PF];
              dF.forEach((bW => {
                WF.debug(`Adding "${bW.name}" instrumentation`), hF.some((FF => FF.name === bW.name)) ? WF.warn(`Instrumentation ${bW.name} is already added`) : (bW.unpatchedConsole = FF, bW.internalLogger = WF, bW.config = SF, bW.metas = CF, bW.transports = AF, bW.api = uF, hF.push(bW), bW.initialize())
              }))
            },
            get instrumentations() {
              return [...hF]
            },
            remove: function() {
              WF.debug("Removing instrumentations");
              for (var FF = arguments.length, SF = new Array(FF), CF = 0; CF < FF; CF++) SF[CF] = arguments[CF];
              SF.forEach((FF => {
                var SF, CF;
                WF.debug(`Removing "${FF.name}" instrumentation`);
                const AF = hF.reduce(((WF, SF, CF) => null === WF && SF.name === FF.name ? CF : null), null);
                null !== AF ? (null === (SF = (CF = hF[AF]).destroy) || void 0 === SF || SF.call(CF), hF.splice(AF, 1)) : WF.warn(`Instrumentation "${FF.name}" is not added`)
              }))
            }
          }
        }(WF, SF, FF, CF, AF, uF),
        bW = gW(WF, SF, FF, CF, AF, uF, hF);
      return fu(bW),
        function(FF) {
          FF.transports.add(...FF.config.transports), FF.transports.addBeforeSendHooks(FF.config.beforeSend)
        }(bW),
        function(FF) {
          FF.instrumentations.add(...FF.config.instrumentations)
        }(bW), bW
    }

    function Ju(FF) {
      const WF = Zu(FF);
      if (WF) return vh(WF)
    }
  },
  7015: function(FF, WF, SF) {
    var CF;
    ! function(AF, uF) {
      var hF = "function",
        bW = "undefined",
        dF = "object",
        PF = "string",
        RF = "major",
        iW = "model",
        eF = "name",
        EF = "type",
        QF = "vendor",
        rW = "version",
        gW = "architecture",
        tW = "console",
        TF = "mobile",
        aW = "tablet",
        kW = "smarttv",
        qW = "wearable",
        VF = "embedded",
        NF = "Amazon",
        DF = "Apple",
        LF = "ASUS",
        mW = "BlackBerry",
        OF = "Browser",
        xW = "Chrome",
        ZF = "Firefox",
        oF = "Google",
        YF = "Honor",
        MF = "Huawei",
        cW = "LG",
        GF = "Microsoft",
        zW = "Motorola",
        IF = "Nvidia",
        fF = "OnePlus",
        yW = "Opera",
        sF = "OPPO",
        nF = "Samsung",
        HF = "Sharp",
        KF = "Sony",
        wF = "Xiaomi",
        XF = "Zebra",
        UF = "Facebook",
        BF = "Chromium OS",
        jW = "Mac OS",
        vW = " Browser",
        JF = function(FF) {
          for (var WF = {}, SF = 0; SF < FF.length; SF++) WF[FF[SF].toUpperCase()] = FF[SF];
          return WF
        },
        pF = function(FF, WF) {
          return typeof FF === PF && -1 !== lF(WF).indexOf(lF(FF))
        },
        lF = function(FF) {
          return FF.toLowerCase()
        },
        FW = function(FF, WF) {
          if (typeof FF === PF) return FF = FF.replace(/^\s\s*/, ""), typeof WF === bW ? FF : FF.substring(0, 500)
        },
        WW = function(FF, WF) {
          for (var SF, CF, AF, bW, PF, RF, iW = 0; iW < WF.length && !PF;) {
            var eF = WF[iW],
              EF = WF[iW + 1];
            for (SF = CF = 0; SF < eF.length && !PF && eF[SF];)
              if (PF = eF[SF++].exec(FF))
                for (AF = 0; AF < EF.length; AF++) RF = PF[++CF], typeof(bW = EF[AF]) === dF && bW.length > 0 ? 2 === bW.length ? typeof bW[1] == hF ? this[bW[0]] = bW[1].call(this, RF) : this[bW[0]] = bW[1] : 3 === bW.length ? typeof bW[1] !== hF || bW[1].exec && bW[1].test ? this[bW[0]] = RF ? RF.replace(bW[1], bW[2]) : uF : this[bW[0]] = RF ? bW[1].call(this, RF, bW[2]) : uF : 4 === bW.length && (this[bW[0]] = RF ? bW[3].call(this, RF.replace(bW[1], bW[2])) : uF) : this[bW] = RF || uF;
            iW += 2
          }
        },
        SW = function(FF, WF) {
          for (var SF in WF)
            if (typeof WF[SF] === dF && WF[SF].length > 0) {
              for (var CF = 0; CF < WF[SF].length; CF++)
                if (pF(WF[SF][CF], FF)) return "?" === SF ? uF : SF
            } else if (pF(WF[SF], FF)) return "?" === SF ? uF : SF;
          return WF.hasOwnProperty("*") ? WF["*"] : FF
        },
        CW = {
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
        AW = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [rW, [eF, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [rW, [eF, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [eF, rW],
            [/opios[\/ ]+([\w\.]+)/i],
            [rW, [eF, yW + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [rW, [eF, yW + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [rW, [eF, yW]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [rW, [eF, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [rW, [eF, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [eF, rW],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [rW, [eF, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [rW, [eF, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [rW, [eF, "UC" + OF]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [rW, [eF, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [rW, [eF, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [rW, [eF, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [rW, [eF, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [rW, [eF, "Smart Lenovo " + OF]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [eF, /(.+)/, "$1 Secure " + OF], rW
            ],
            [/\bfocus\/([\w\.]+)/i],
            [rW, [eF, ZF + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [rW, [eF, yW + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [rW, [eF, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [rW, [eF, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [rW, [eF, yW + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [rW, [eF, "MIUI" + vW]],
            [/fxios\/([\w\.-]+)/i],
            [rW, [eF, ZF]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [rW, [eF, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [eF, /(.+)/, "$1Browser"], rW
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [eF, /(.+)/, "$1" + vW], rW
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [rW, [eF, nF + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [rW, [eF, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [eF, "Sogou Mobile"], rW
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [eF, rW],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [eF],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [rW, eF],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [eF, UF], rW
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [eF, rW],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [rW, [eF, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [rW, [eF, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [rW, [eF, xW + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [eF, xW + " WebView"], rW
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [rW, [eF, "Android " + OF]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [eF, rW],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [rW, [eF, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [rW, eF],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [eF, [rW, SW, {
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
            [eF, rW],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [eF, "Netscape"], rW
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [eF, rW],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [rW, [eF, ZF + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [eF, [rW, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [eF, [rW, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [gW, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [gW, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [gW, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [gW, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [gW, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [gW, /ower/, "", lF]
            ],
            [/ sun4\w[;\)]/i],
            [
              [gW, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [gW, lF]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [iW, [QF, nF],
              [EF, aW]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [iW, [QF, nF],
              [EF, TF]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [iW, [QF, DF],
              [EF, TF]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [iW, [QF, DF],
              [EF, aW]
            ],
            [/(macintosh);/i],
            [iW, [QF, DF]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [iW, [QF, HF],
              [EF, TF]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [iW, [QF, YF],
              [EF, aW]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [iW, [QF, YF],
              [EF, TF]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [iW, [QF, MF],
              [EF, aW]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [iW, [QF, MF],
              [EF, TF]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [iW, /_/g, " "],
              [QF, wF],
              [EF, aW]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [iW, /_/g, " "],
              [QF, wF],
              [EF, TF]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [iW, [QF, sF],
              [EF, TF]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [iW, [QF, SW, {
                OnePlus: ["304", "403", "203"],
                "*": sF
              }],
              [EF, aW]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [iW, [QF, "Vivo"],
              [EF, TF]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [iW, [QF, "Realme"],
              [EF, TF]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [iW, [QF, zW],
              [EF, TF]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [iW, [QF, zW],
              [EF, aW]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [iW, [QF, cW],
              [EF, aW]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [iW, [QF, cW],
              [EF, TF]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [iW, [QF, "Lenovo"],
              [EF, aW]
            ],
            [/(nokia) (t[12][01])/i],
            [QF, iW, [EF, aW]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [iW, /_/g, " "],
              [EF, TF],
              [QF, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [iW, [QF, oF],
              [EF, aW]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [iW, [QF, oF],
              [EF, TF]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [iW, [QF, KF],
              [EF, TF]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [iW, "Xperia Tablet"],
              [QF, KF],
              [EF, aW]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [iW, [QF, fF],
              [EF, TF]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [iW, [QF, NF],
              [EF, aW]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [iW, /(.+)/g, "Fire Phone $1"],
              [QF, NF],
              [EF, TF]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [iW, QF, [EF, aW]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [iW, [QF, mW],
              [EF, TF]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [iW, [QF, LF],
              [EF, aW]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [iW, [QF, LF],
              [EF, TF]
            ],
            [/(nexus 9)/i],
            [iW, [QF, "HTC"],
              [EF, aW]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [QF, [iW, /_/g, " "],
              [EF, TF]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [iW, [QF, "TCL"],
              [EF, aW]
            ],
            [/(itel) ((\w+))/i],
            [
              [QF, lF], iW, [EF, SW, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [iW, [QF, "Acer"],
              [EF, aW]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [iW, [QF, "Meizu"],
              [EF, TF]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [iW, [QF, "Ulefone"],
              [EF, TF]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [iW, [QF, "Energizer"],
              [EF, TF]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [iW, [QF, "Cat"],
              [EF, TF]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [iW, [QF, "Smartfren"],
              [EF, TF]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [iW, [QF, "Nothing"],
              [EF, TF]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [iW, [QF, "Archos"],
              [EF, aW]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [iW, [QF, "Archos"],
              [EF, TF]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [QF, iW, [EF, aW]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [QF, iW, [EF, TF]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [QF, iW, [EF, aW]],
            [/(surface duo)/i],
            [iW, [QF, GF],
              [EF, aW]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [iW, [QF, "Fairphone"],
              [EF, TF]
            ],
            [/(u304aa)/i],
            [iW, [QF, "AT&T"],
              [EF, TF]
            ],
            [/\bsie-(\w*)/i],
            [iW, [QF, "Siemens"],
              [EF, TF]
            ],
            [/\b(rct\w+) b/i],
            [iW, [QF, "RCA"],
              [EF, aW]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [iW, [QF, "Dell"],
              [EF, aW]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [iW, [QF, "Verizon"],
              [EF, aW]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [iW, [QF, "Barnes & Noble"],
              [EF, aW]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [iW, [QF, "NuVision"],
              [EF, aW]
            ],
            [/\b(k88) b/i],
            [iW, [QF, "ZTE"],
              [EF, aW]
            ],
            [/\b(nx\d{3}j) b/i],
            [iW, [QF, "ZTE"],
              [EF, TF]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [iW, [QF, "Swiss"],
              [EF, TF]
            ],
            [/\b(zur\d{3}) b/i],
            [iW, [QF, "Swiss"],
              [EF, aW]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [iW, [QF, "Zeki"],
              [EF, aW]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [QF, "Dragon Touch"], iW, [EF, aW]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [iW, [QF, "Insignia"],
              [EF, aW]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [iW, [QF, "NextBook"],
              [EF, aW]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [QF, "Voice"], iW, [EF, TF]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [QF, "LvTel"], iW, [EF, TF]
            ],
            [/\b(ph-1) /i],
            [iW, [QF, "Essential"],
              [EF, TF]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [iW, [QF, "Envizen"],
              [EF, aW]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [iW, [QF, "MachSpeed"],
              [EF, aW]
            ],
            [/\btu_(1491) b/i],
            [iW, [QF, "Rotor"],
              [EF, aW]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [iW, [QF, IF],
              [EF, aW]
            ],
            [/(sprint) (\w+)/i],
            [QF, iW, [EF, TF]],
            [/(kin\.[onetw]{3})/i],
            [
              [iW, /\./g, " "],
              [QF, GF],
              [EF, TF]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [iW, [QF, XF],
              [EF, aW]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [iW, [QF, XF],
              [EF, TF]
            ],
            [/smart-tv.+(samsung)/i],
            [QF, [EF, kW]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [iW, /^/, "SmartTV"],
              [QF, nF],
              [EF, kW]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [QF, cW],
              [EF, kW]
            ],
            [/(apple) ?tv/i],
            [QF, [iW, DF + " TV"],
              [EF, kW]
            ],
            [/crkey/i],
            [
              [iW, xW + "cast"],
              [QF, oF],
              [EF, kW]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [iW, [QF, NF],
              [EF, kW]
            ],
            [/(shield \w+ tv)/i],
            [iW, [QF, IF],
              [EF, kW]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [iW, [QF, HF],
              [EF, kW]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [iW, [QF, KF],
              [EF, kW]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [iW, [QF, wF],
              [EF, kW]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [QF, iW, [EF, kW]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [QF, FW],
              [iW, FW],
              [EF, kW]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [iW, [EF, kW]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [EF, kW]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [QF, iW, [EF, tW]],
            [/droid.+; (shield)( bui|\))/i],
            [iW, [QF, IF],
              [EF, tW]
            ],
            [/(playstation \w+)/i],
            [iW, [QF, KF],
              [EF, tW]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [iW, [QF, GF],
              [EF, tW]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [iW, [QF, nF],
              [EF, qW]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [QF, iW, [EF, qW]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [iW, [QF, sF],
              [EF, qW]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [iW, [QF, DF],
              [EF, qW]
            ],
            [/(opwwe\d{3})/i],
            [iW, [QF, fF],
              [EF, qW]
            ],
            [/(moto 360)/i],
            [iW, [QF, zW],
              [EF, qW]
            ],
            [/(smartwatch 3)/i],
            [iW, [QF, KF],
              [EF, qW]
            ],
            [/(g watch r)/i],
            [iW, [QF, cW],
              [EF, qW]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [iW, [QF, XF],
              [EF, qW]
            ],
            [/droid.+; (glass) \d/i],
            [iW, [QF, oF],
              [EF, qW]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [QF, iW, [EF, qW]],
            [/; (quest( \d| pro)?)/i],
            [iW, [QF, UF],
              [EF, qW]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [QF, [EF, VF]],
            [/(aeobc)\b/i],
            [iW, [QF, NF],
              [EF, VF]
            ],
            [/(homepod).+mac os/i],
            [iW, [QF, DF],
              [EF, VF]
            ],
            [/windows iot/i],
            [
              [EF, VF]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [iW, [EF, TF]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [iW, [EF, aW]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [EF, aW]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [EF, TF]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [iW, [QF, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [rW, [eF, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [eF, rW],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [rW, [eF, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [eF, rW],
            [/ladybird\//i],
            [
              [eF, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [rW, eF]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [eF, rW],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [eF, [rW, SW, CW]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [rW, SW, CW],
              [eF, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [rW, /_/g, "."],
              [eF, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [eF, jW],
              [rW, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [rW, eF],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [eF, /(.+)/, "$1 Touch"], rW
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [eF, rW],
            [/\(bb(10);/i],
            [rW, [eF, mW]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [rW, [eF, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [rW, [eF, ZF + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [rW, [eF, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [rW, [eF, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [rW, [eF, xW + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [eF, BF], rW
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [eF, rW],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [eF, "Solaris"], rW
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [eF, rW]
          ]
        },
        uW = function(FF, WF) {
          if (typeof FF === dF && (WF = FF, FF = uF), !(this instanceof uW)) return new uW(FF, WF).getResult();
          var SF = typeof AF !== bW && AF.navigator ? AF.navigator : uF,
            CF = FF || (SF && SF.userAgent ? SF.userAgent : ""),
            tW = SF && SF.userAgentData ? SF.userAgentData : uF,
            kW = WF ? function(FF, WF) {
              var SF = {};
              for (var CF in FF) WF[CF] && WF[CF].length % 2 === 0 ? SF[CF] = WF[CF].concat(FF[CF]) : SF[CF] = FF[CF];
              return SF
            }(AW, WF) : AW,
            qW = SF && SF.userAgent == CF;
          return this.getBrowser = function() {
            var FF, WF = {};
            return WF[eF] = uF, WF[rW] = uF, WW.call(WF, CF, kW.browser), WF[RF] = typeof(FF = WF[rW]) === PF ? FF.replace(/[^\d\.]/g, "").split(".")[0] : uF, qW && SF && SF.brave && typeof SF.brave.isBrave == hF && (WF[eF] = "Brave"), WF
          }, this.getCPU = function() {
            var FF = {};
            return FF[gW] = uF, WW.call(FF, CF, kW.cpu), FF
          }, this.getDevice = function() {
            var FF = {};
            return FF[QF] = uF, FF[iW] = uF, FF[EF] = uF, WW.call(FF, CF, kW.device), qW && !FF[EF] && tW && tW.mobile && (FF[EF] = TF), qW && "Macintosh" == FF[iW] && SF && typeof SF.standalone !== bW && SF.maxTouchPoints && SF.maxTouchPoints > 2 && (FF[iW] = "iPad", FF[EF] = aW), FF
          }, this.sC = function() {
            var FF = {};
            return FF[eF] = uF, FF[rW] = uF, WW.call(FF, CF, kW.engine), FF
          }, this.getOS = function() {
            var FF = {};
            return FF[eF] = uF, FF[rW] = uF, WW.call(FF, CF, kW.os), qW && !FF[eF] && tW && tW.platform && "Unknown" != tW.platform && (FF[eF] = tW.platform.replace(/chrome os/i, BF).replace(/macos/i, jW)), FF
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.sC(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return CF
          }, this.setUA = function(FF) {
            return CF = typeof FF === PF && FF.length > 500 ? FW(FF, 500) : FF, this
          }, this.setUA(CF), this
        };
      uW.VERSION = "1.0.41", uW.BROWSER = JF([eF, rW, RF]), uW.CPU = JF([gW]), uW.DEVICE = JF([iW, QF, EF, tW, TF, kW, aW, qW, VF]), uW.ENGINE = uW.OS = JF([eF, rW]), typeof WF !== bW ? (FF.exports && (WF = FF.exports = uW), WF.UAParser = uW) : SF.amdO ? (CF = function() {
        return uW
      }.call(WF, SF, WF, FF)) === uF || (FF.exports = CF) : typeof AF !== bW && (AF.UAParser = uW);
      var hW = typeof AF !== bW && (AF.jQuery || AF.Zepto);
      if (hW && !hW.ua) {
        var bS = new uW;
        hW.ua = bS.getResult(), hW.ua.get = function() {
          return bS.getUA()
        }, hW.ua.set = function(FF) {
          bS.setUA(FF);
          var WF = bS.getResult();
          for (var SF in WF) hW.ua[SF] = WF[SF]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);