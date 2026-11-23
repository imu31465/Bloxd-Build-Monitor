export const id = 31;
export const ids = [31];
export const modules = {
  6667: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BaseExtension: () => FI,
      BaseInstrumentation: () => II,
      BaseTransport: () => DT,
      CSPInstrumentation: () => ST,
      ConsoleInstrumentation: () => pI,
      ConsoleTransport: () => Xi,
      EVENT_CLICK: () => KF,
      EVENT_NAVIGATION: () => QF,
      EVENT_ROUTE_CHANGE: () => vF,
      EVENT_SESSION_EXTEND: () => SF,
      EVENT_SESSION_RESUME: () => zF,
      EVENT_SESSION_START: () => VF,
      EVENT_VIEW_CHANGED: () => sF,
      ErrorsInstrumentation: () => bI,
      FetchTransport: () => Qi,
      InternalLoggerLevel: () => YF,
      LogLevel: () => KI,
      MAX_SESSION_PERSISTENCE_TIME: () => ak,
      NavigationInstrumentation: () => WT,
      Observable: () => PI,
      PerformanceInstrumentation: () => gX,
      PersistentSessionsManager: () => CF,
      SESSION_EXPIRATION_TIME: () => ik,
      SESSION_INACTIVITY_TIME: () => yk,
      STORAGE_KEY: () => Tk,
      SessionInstrumentation: () => TI,
      TransportItemType: () => MT,
      UserActionInstrumentation: () => zT,
      UserActionState: () => wT,
      VERSION: () => XI,
      ViewInstrumentation: () => UI,
      VolatileSessionsManager: () => NF,
      WebVitalsInstrumentation: () => uX,
      allLogLevels: () => sI,
      browserMeta: () => gT,
      buildStackFrame: () => iI,
      captureMetas: () => Ci,
      createInternalLogger: () => oi,
      createPromiseBuffer: () => ji,
      createSession: () => hT,
      deepEqual: () => PF,
      defaultEventDomain: () => Xk,
      defaultExceptionType: () => oI,
      defaultGlobalObjectKey: () => vi,
      defaultInternalLoggerLevel: () => gF,
      defaultLogLevel: () => QI,
      faro: () => wk,
      genShortID: () => xF,
      getCurrentTimestamp: () => wF,
      getDataFromSafariExtensions: () => jI,
      getIgnoreUrls: () => mk,
      getInternalFaroFromGlobalObject: () => Zk,
      getStackFramesFromError: () => wI,
      getTransportBody: () => Ii,
      getUrlFromResource: () => rk,
      getWebInstrumentations: () => fT,
      globalObject: () => Lk,
      initializeFaro: () => ky,
      internalGlobalObjectKey: () => tk,
      isArray: () => nk,
      isBoolean: () => Sk,
      isDomError: () => ck,
      isDomException: () => Wk,
      isElement: () => Bk,
      isElementDefined: () => fk,
      ye: () => gk,
      isError: () => Ck,
      isErrorDefined: () => Uk,
      isErrorEvent: () => Nk,
      isEvent: () => Rk,
      isEventDefined: () => bk,
      isFunction: () => Ok,
      isInstanceOf: () => Pk,
      isInt: () => zk,
      isInternalFaroOnGlobalObject: () => ek,
      isMap: () => Yk,
      isMapDefined: () => dk,
      isNull: () => Qk,
      isNumber: () => Vk,
      isObject: () => Ek,
      isPrimitive: () => uk,
      isRegExp: () => Gk,
      isString: () => sk,
      isSymbol: () => vk,
      isSyntheticEvent: () => Ak,
      isThenable: () => pk,
      isToString: () => xk,
      isTypeof: () => Jk,
      isUndefined: () => Kk,
      makeCoreConfig: () => ni,
      noop: () => dF,
      osMeta: () => mT,
      parseStacktrace: () => HI,
      sdkMeta: () => rT,
      setInternalFaroOnGlobalObject: () => jk,
      transportItemTypeToBodyKey: () => ki,
      unknownString: () => RI,
      userActionDataAttribute: () => mX,
      userActionTimeoutDataAttribute: () => hX
    });
    const Xk = "browser",
      Tk = "com.grafana.faro.session",
      ik = 144e5,
      yk = 9e5,
      lk = 1e3,
      ak = yk,
      qk = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: ak
      };
    const Lk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Ik.g ? Ik.g : "undefined" !== typeof self ? self : void 0;
    const tk = "_faroInternal";

    function Zk() {
      return Lk[tk]
    }

    function jk(kk) {
      kk.config.isolate ? kk.internalLogger.debug("Skipping registering internal Faro instance on global object") : (kk.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Lk, tk, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: kk
      }))
    }

    function ek() {
      return tk in Lk
    }
    let wk = {
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

    function Hk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      return Fk.debug("Initializing Faro"), wk = {
          api: ik,
          config: Ik,
          instrumentations: yk,
          internalLogger: Fk,
          metas: Xk,
          pause: Tk.pause,
          transports: Tk,
          unpatchedConsole: kk,
          unpause: Tk.unpause
        }, jk(wk),
        function(kk) {
          if (kk.config.preventGlobalExposure) kk.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (kk.internalLogger.debug(`Registering public faro reference in the global scope using "${kk.config.globalObjectKey}" key`), kk.config.globalObjectKey in Lk) return void kk.internalLogger.warn(`Skipping global registration due to key "${kk.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Lk, kk.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: kk
            })
          }
        }(wk), wk
    }

    function Jk(kk, Fk) {
      return typeof kk === Fk
    }

    function xk(kk, Fk) {
      return Object.prototype.toString.call(kk) === `[object ${Fk}]`
    }

    function Pk(kk, Fk) {
      try {
        return kk instanceof Fk
      } catch (Ik) {
        return !1
      }
    }
    const Kk = kk => Jk(kk, "undefined"),
      Qk = kk => Jk(kk, "null"),
      sk = kk => Jk(kk, "string"),
      Vk = kk => Jk(kk, "number") && !isNaN(kk) || Jk(kk, "bigint"),
      zk = kk => Vk(kk) && Number.isInteger(kk),
      Sk = kk => Jk(kk, "boolean"),
      vk = kk => Jk(kk, "symbol"),
      Ek = kk => !Qk(kk) && Jk(kk, "object"),
      Ok = kk => Jk(kk, "function"),
      nk = kk => xk(kk, "Array"),
      Gk = kk => xk(kk, "RegExp"),
      pk = kk => Ok(null === kk || void 0 === kk ? void 0 : kk.then),
      uk = kk => !Ek(kk) && !Ok(kk),
      bk = "undefined" !== typeof Event,
      Rk = kk => bk && Pk(kk, Event),
      Uk = "undefined" !== typeof Error,
      Ck = kk => Uk && Pk(kk, Error),
      Nk = kk => xk(kk, "ErrorEvent"),
      ck = kk => xk(kk, "DOMError"),
      Wk = kk => xk(kk, "DOMException"),
      fk = "undefined" !== typeof Element,
      Bk = kk => fk && Pk(kk, Element),
      dk = "undefined" !== typeof Map,
      Yk = kk => dk && Pk(kk, Map),
      Ak = kk => Ek(kk) && "nativeEvent" in kk && "preventDefault" in kk && "stopPropagation" in kk;

    function gk(kk) {
      return null == kk || (nk(kk) || sk(kk) ? 0 === kk.length : !!Ek(kk) && 0 === Object.keys(kk).length)
    }

    function mk() {
      return wk.transports.transports.flatMap((kk => kk.getIgnoreUrls()))
    }

    function hk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return mk().some((Fk => kk && null != kk.match(Fk)))
    }

    function rk(kk) {
      return sk(kk) ? kk : kk instanceof URL ? kk.href : !gk(kk) && Ok(null === kk || void 0 === kk ? void 0 : kk.toString) ? kk.toString() : void 0
    }
    const Dk = "sessionStorage",
      Mk = "localStorage";

    function kF(kk) {
      try {
        let Fk;
        Fk = window[kk];
        const Ik = "__faro_storage_test__";
        return Fk.setItem(Ik, Ik), Fk.removeItem(Ik), !0
      } catch (Ik) {
        var Fk;
        return null === (Fk = wk.internalLogger) || void 0 === Fk || Fk.info(`Web storage of type ${kk} is not available. Reason: ${Ik}`), !1
      }
    }

    function FF(kk, Fk) {
      return yF(Fk) ? window[Fk].getItem(kk) : null
    }

    function IF(kk, Fk, Ik) {
      if (yF(Ik)) try {
        window[Ik].setItem(kk, Fk)
      } catch (Xk) {}
    }

    function XF(kk, Fk) {
      yF(Fk) && window[Fk].removeItem(kk)
    }
    const TF = kF(Mk),
      iF = kF(Dk);

    function yF(kk) {
      return kk === Mk ? TF : kk === Dk && iF
    }

    function lF(kk) {
      return lF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, lF(kk)
    }

    function aF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != lF(kk) || !kk) return kk;
        var Ik = kk[Symbol.toPrimitive];
        if (void 0 !== Ik) {
          var Xk = Ik.call(kk, Fk || "default");
          if ("object" != lF(Xk)) return Xk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == lF(Fk) ? Fk : Fk + ""
    }

    function qF(kk, Fk, Ik) {
      return (Fk = aF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }

    function LF(kk, Fk) {
      var Ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Xk = Object.getOwnPropertySymbols(kk);
        Fk && (Xk = Xk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Ik.push.apply(Ik, Xk)
      }
      return Ik
    }

    function tF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Ik = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? LF(Object(Ik), !0).forEach((function(Fk) {
          qF(kk, Fk, Ik[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Ik)) : LF(Object(Ik)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Ik, Fk))
        }))
      }
      return kk
    }

    function ZF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wk;
      var Fk, Ik, Xk;
      const Tk = kk.config.sessionTracking,
        ik = null !== (Fk = null !== (Ik = null === Tk || void 0 === Tk || null === (Xk = Tk.sampler) || void 0 === Xk ? void 0 : Xk.call(Tk, {
          metas: kk.metas.value
        })) && void 0 !== Ik ? Ik : null === Tk || void 0 === Tk ? void 0 : Tk.samplingRate) && void 0 !== Fk ? Fk : 1,
        yk = "number" === typeof ik ? function(kk) {
          return Math.min(1, Math.max(0, kk))
        }(ik) : 0;
      if (!(yk > 0)) return !1;
      if (1 === yk) return !0;
      try {
        const kk = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === kk || void 0 === kk ? void 0 : kk.getRandomValues)) {
          const Fk = new Uint32Array(1);
          return kk.getRandomValues(Fk), Fk[0] / Math.pow(2, 32) < yk
        }
      } catch (lk) {}
      return Math.random() < yk
    }

    function jF() {
      return Date.now()
    }

    function eF() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function wF() {
      return (new Date).toISOString()
    }

    function HF(kk) {
      return new Date(kk).toISOString()
    }
    const JF = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function xF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Fk = new Uint32Array(kk),
        Ik = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Ik || void 0 === Ik ? void 0 : Ik.getRandomValues) Ik.getRandomValues(Fk);
      else
        for (let Tk = 0; Tk < kk; Tk++) Fk[Tk] = Math.floor(4294967296 * Math.random());
      let Xk = "";
      for (let Tk = 0; Tk < kk; Tk++) Xk += JF[Fk[Tk] % 59];
      return Xk
    }

    function PF(kk, Fk) {
      if (kk === Fk) return !0;
      if (Jk(kk, "number") && isNaN(kk)) return Jk(Fk, "number") && isNaN(Fk);
      const Ik = nk(kk),
        Xk = nk(Fk);
      if (Ik !== Xk) return !1;
      if (Ik && Xk) {
        const Ik = kk.length;
        if (Ik !== Fk.length) return !1;
        for (let Xk = Ik; 0 !== Xk--;)
          if (!PF(kk[Xk], Fk[Xk])) return !1;
        return !0
      }
      const Tk = Ek(kk),
        ik = Ek(Fk);
      if (Tk !== ik) return !1;
      if (kk && Fk && Tk && ik) {
        const Ik = Object.keys(kk),
          Xk = Object.keys(Fk);
        if (Ik.length !== Xk.length) return !1;
        for (let kk of Ik)
          if (!Xk.includes(kk)) return !1;
        for (let Tk of Ik)
          if (!PF(kk[Tk], Fk[Tk])) return !1;
        return !0
      }
      return !1
    }
    const KF = "click",
      QF = "navigation",
      sF = "view_changed",
      VF = "session_start",
      zF = "session_resume",
      SF = "session_extend",
      oF = "service_name_override",
      vF = "route_change";

    function EF() {
      let {
        sessionId: kk,
        started: Fk,
        lastActivity: Ik,
        isSampled: Xk = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Tk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wk;
      var ik;
      const yk = jF(),
        lk = null === (ik = Tk.config) || void 0 === ik || null === (ik = ik.sessionTracking) || void 0 === ik ? void 0 : ik.generateSessionId;
      return null == kk && (kk = "function" === typeof lk ? lk() : xF()), {
        sessionId: kk,
        lastActivity: null !== Ik && void 0 !== Ik ? Ik : yk,
        started: null !== Fk && void 0 !== Fk ? Fk : yk,
        isSampled: Xk
      }
    }

    function OF(kk) {
      if (null == kk) return !1;
      const Fk = jF();
      return Fk - kk.started < 144e5 && Fk - kk.lastActivity < yk
    }

    function nF(kk) {
      let {
        fetchUserSession: Fk,
        storeUserSession: Ik,
        adoptSession: Xk,
        updateInterval: Tk = 0
      } = kk, lk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wk, ak = 0;
      return function() {
        let {
          forceSessionExtend: kk = !1,
          refreshActivity: qk = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Lk, tk;
        if (!Fk || !Ik) return;
        const Zk = jF();
        if (!kk && Zk < ak && ak - Zk <= Tk) return;
        const jk = lk.config.sessionTracking,
          ek = null === jk || void 0 === jk ? void 0 : jk.persistent;
        if (ek && !TF || !ek && !iF) return;
        const wk = Fk();
        if (ak = Math.min(Zk + Tk, (null !== (Lk = null === wk || void 0 === wk ? void 0 : wk.started) && void 0 !== Lk ? Lk : Zk) + ik, (null !== (tk = null === wk || void 0 === wk ? void 0 : wk.lastActivity) && void 0 !== tk ? tk : Zk) + yk), !1 === kk && OF(wk)) {
          var Hk;
          qk && Ik(tF(tF({}, wk), {}, {
            lastActivity: Zk
          }));
          const kk = null === (Hk = lk.metas.value.session) || void 0 === Hk ? void 0 : Hk.id;
          null != Xk && null != wk.sessionMeta && wk.sessionId !== kk && Xk(wk.sessionMeta)
        } else {
          var Jk, xk, Pk;
          let kk = pF(EF({
            isSampled: ZF(lk)
          }, lk), wk, lk);
          ak = Zk + Tk, Ik(kk), null === (Jk = lk.api) || void 0 === Jk || Jk.setSession(kk.sessionMeta), null === jk || void 0 === jk || null === (xk = jk.onSessionChange) || void 0 === xk || xk.call(jk, null !== (Pk = null === wk || void 0 === wk ? void 0 : wk.sessionMeta) && void 0 !== Pk ? Pk : null, kk.sessionMeta)
        }
      }
    }

    function GF(kk) {
      let Fk, {
          fetchUserSession: Ik,
          storeUserSession: Xk,
          updateInterval: Tk = 0
        } = kk,
        ik = 0;
      return kk => {
        const yk = jF();
        if (kk === Fk && yk < ik && ik - yk <= Tk) return;
        Fk = kk, ik = yk + Tk;
        const lk = Ik();
        (null === lk || void 0 === lk ? void 0 : lk.sessionId) === kk && OF(lk) && Xk(tF(tF({}, lk), {}, {
          lastActivity: yk
        }))
      }
    }

    function pF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wk;
      var Xk, Tk, ik, yk, lk, ak;
      const qk = tF(tF({}, kk), {}, {
          sessionMeta: {
            id: kk.sessionId,
            attributes: bF(tF(tF(tF({}, null === (Xk = Ik.config.sessionTracking) || void 0 === Xk || null === (Xk = Xk.session) || void 0 === Xk ? void 0 : Xk.attributes), null !== (Tk = null === (ik = Ik.metas.value.session) || void 0 === ik ? void 0 : ik.attributes) && void 0 !== Tk ? Tk : {}), {}, {
              isSampled: kk.isSampled.toString()
            }))
          }
        }),
        Lk = null !== (yk = null === (lk = Ik.metas.value.session) || void 0 === lk ? void 0 : lk.overrides) && void 0 !== yk ? yk : null === Fk || void 0 === Fk || null === (ak = Fk.sessionMeta) || void 0 === ak ? void 0 : ak.overrides;
      gk(Lk) || (qk.sessionMeta.overrides = Lk);
      const tk = null === Fk || void 0 === Fk ? void 0 : Fk.sessionId;
      return null != tk && (qk.sessionMeta.attributes.previousSession = tk), qk
    }

    function uF(kk) {
      let {
        fetchUserSession: Fk,
        storeUserSession: Ik
      } = kk, Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wk, Tk = !1;
      return function(kk) {
        if (Tk) return;
        const ik = kk.session,
          yk = Fk();
        let lk = null === ik || void 0 === ik ? void 0 : ik.id;
        const ak = null === ik || void 0 === ik ? void 0 : ik.attributes,
          qk = null === ik || void 0 === ik ? void 0 : ik.overrides,
          Lk = null === yk || void 0 === yk ? void 0 : yk.sessionMeta,
          tk = null === Lk || void 0 === Lk ? void 0 : Lk.overrides,
          Zk = !!qk && !PF(qk, tk),
          jk = !!ak && !PF(ak, null === Lk || void 0 === Lk ? void 0 : Lk.attributes);
        if (ik && lk !== (null === yk || void 0 === yk ? void 0 : yk.sessionId) || jk || Zk) {
          var ek, wk;
          const kk = null != yk && lk === yk.sessionId,
            Fk = pF(kk ? yk : EF({
              sessionId: lk,
              isSampled: ZF(Xk)
            }, Xk), yk, Xk),
            ik = null === yk || void 0 === yk || null === (ek = yk.sessionMeta) || void 0 === ek || null === (ek = ek.attributes) || void 0 === ek ? void 0 : ek.previousSession;
          kk && null != ik && ik !== Fk.sessionId && (Fk.sessionMeta.attributes.previousSession = ik), (null === (wk = Fk.sessionMeta.attributes) || void 0 === wk ? void 0 : wk.previousSession) === Fk.sessionId && delete Fk.sessionMeta.attributes.previousSession, Ik(Fk),
            function(kk, Fk) {
              let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Tk, ik, yk;
              if (!Fk) return;
              const lk = Ik.serviceName,
                ak = null !== (Tk = null !== (ik = Xk.serviceName) && void 0 !== ik ? ik : null === (yk = kk.metas.value.app) || void 0 === yk ? void 0 : yk.name) && void 0 !== Tk ? Tk : "";
              lk && lk !== ak && kk.api.pushEvent(oF, {
                serviceName: lk,
                previousServiceName: ak
              })
            }(Xk, Zk, qk, tk), Tk = !0;
          try {
            Xk.api.setSession(Fk.sessionMeta)
          } finally {
            Tk = !1
          }
        }
      }
    }

    function bF(kk) {
      const Fk = {};
      for (const Ik of Object.keys(kk)) {
        const Xk = kk[Ik];
        void 0 !== Xk && (Fk[Ik] = Xk)
      }
      return Fk
    }

    function RF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== kk && void 0 !== kk ? kk : {}, function() {
        const kk = new WeakSet;
        return function(Fk, Ik) {
          if (Ek(Ik) && null !== Ik) {
            if (kk.has(Ik)) return null;
            kk.add(Ik)
          }
          return Ik
        }
      }())
    }

    function UF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Fk = {};
      for (const [Ik, Xk] of Object.entries(kk)) Fk[Ik] = Ek(Xk) && null !== Xk ? RF(Xk) : String(Xk);
      return Fk
    }
    var CF = class kk {
      constructor() {
        var Fk = this;
        let Ik = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wk;
        this.context = Ik, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = kk => {
          this.adopting = !0;
          try {
            var Fk;
            null === (Fk = this.context.api) || void 0 === Fk || Fk.setSession(kk)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: kk = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Fk.updateUserSession({
            refreshActivity: kk
          })
        }, this.recordActivity = GF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: lk
        }), this.updateUserSession = nF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: lk
        }, Ik), this.init()
      }
      static removeUserSession() {
        XF(Tk, kk.storageTypeLocal)
      }
      static storeUserSession(Fk) {
        IF(Tk, RF(Fk), kk.storageTypeLocal)
      }
      static fetchUserSession() {
        const Fk = FF(Tk, kk.storageTypeLocal);
        return Fk ? JSON.parse(Fk) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var kk;
            this.updateSession({
              refreshActivity: !1
            });
            const Fk = null === (kk = this.context.api) || void 0 === kk || null === (kk = kk.getSession()) || void 0 === kk ? void 0 : kk.id;
            Fk && this.recordActivity(Fk)
          }
        })), this.context.metas.addListener(uF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession
        }, this.context))
      }
    };
    CF.storageTypeLocal = Mk;
    var NF = class kk {
      constructor() {
        var Fk = this;
        let Ik = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wk;
        this.context = Ik, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: kk = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Fk.updateUserSession({
            refreshActivity: kk
          })
        }, this.recordActivity = GF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: lk
        }), this.updateUserSession = nF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: lk
        }, Ik), this.init()
      }
      static removeUserSession() {
        XF(Tk, kk.storageTypeSession)
      }
      static storeUserSession(Fk) {
        IF(Tk, RF(Fk), kk.storageTypeSession)
      }
      static fetchUserSession() {
        const Fk = FF(Tk, kk.storageTypeSession);
        return Fk ? JSON.parse(Fk) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var kk;
            this.updateSession({
              refreshActivity: !1
            });
            const Fk = null === (kk = this.context.api) || void 0 === kk || null === (kk = kk.getSession()) || void 0 === kk ? void 0 : kk.id;
            Fk && this.recordActivity(Fk)
          }
        })), this.context.metas.addListener(uF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession
        }, this.context))
      }
    };
    NF.storageTypeSession = Dk;
    const cF = new WeakMap;

    function WF(kk) {
      let Fk = cF.get(kk);
      if (!Fk) {
        let Ik = [],
          Xk = [];
        Fk = {
          addSessionUpdateListener: kk => {
            Ik.push(kk)
          },
          removeSessionUpdateListener: kk => {
            Ik = Ik.filter((Fk => Fk !== kk))
          },
          notifySessionUpdate: kk => {
            Ik.forEach((Fk => Fk(kk)))
          },
          shouldCapture: () => Xk.every((kk => kk())),
          addCaptureFilter: kk => {
            Xk.push(kk)
          },
          removeCaptureFilter: kk => {
            Xk = Xk.filter((Fk => Fk !== kk))
          }
        }, cF.set(kk, Fk)
      }
      return Fk
    }
    var fF = class {
      constructor(kk, Fk, Ik) {
        this.metas = kk, this.transports = Fk, this.onActivate = Ik, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = kk => {
          var Fk, Ik, Xk;
          const Tk = this.pending;
          var ik, yk;
          if ("overrides" === kk.type) return void(this.pending = {
            reset: null !== (ik = null === Tk || void 0 === Tk ? void 0 : Tk.reset) && void 0 !== ik && ik,
            inheritOverrides: null === (yk = null === Tk || void 0 === Tk ? void 0 : Tk.inheritOverrides) || void 0 === yk || yk,
            session: tF(tF({}, null === Tk || void 0 === Tk ? void 0 : Tk.session), {}, {
              overrides: tF(tF({}, null === Tk || void 0 === Tk ? void 0 : Tk.session.overrides), kk.overrides)
            })
          });
          const lk = kk.session,
            ak = gk(lk) || null != lk && "id" in lk && !lk.id,
            qk = null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.overrides) && void 0 !== Fk ? Fk : null === Tk || void 0 === Tk ? void 0 : Tk.session.overrides;
          this.pending = {
            reset: ak || !(null === lk || void 0 === lk ? void 0 : lk.id) && null !== (Ik = null === Tk || void 0 === Tk ? void 0 : Tk.reset) && void 0 !== Ik && Ik,
            inheritOverrides: !(!kk.overrides && void 0 !== (null === lk || void 0 === lk ? void 0 : lk.overrides)) && (null === (Xk = null === Tk || void 0 === Tk ? void 0 : Tk.inheritOverrides) || void 0 === Xk || Xk),
            session: {
              id: null === lk || void 0 === lk ? void 0 : lk.id,
              attributes: (null === lk || void 0 === lk ? void 0 : lk.attributes) && tF({}, lk.attributes),
              overrides: kk.overrides ? tF(tF({}, null === Tk || void 0 === Tk ? void 0 : Tk.session.overrides), kk.overrides) : qk && tF({}, qk)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var kk, Fk;
        this.waiting = !0, WF(this.metas).addSessionUpdateListener(this.recordUpdate), WF(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (kk = (Fk = this.metas).addCaptureListener) || void 0 === kk || kk.call(Fk, this.activate), this.activate()
      }
      destroy() {
        var kk, Fk;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), WF(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (kk = (Fk = this.metas).removeCaptureListener) || void 0 === kk || kk.call(Fk, this.activate), WF(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function BF(kk) {
      return (null === kk || void 0 === kk ? void 0 : kk.persistent) ? CF : NF
    }

    function dF() {}
    let YF = function(kk) {
      return kk[kk.OFF = 0] = "OFF", kk[kk.ERROR = 1] = "ERROR", kk[kk.WARN = 2] = "WARN", kk[kk.INFO = 3] = "INFO", kk[kk.VERBOSE = 4] = "VERBOSE", kk
    }({});
    const AF = {
        debug: dF,
        error: dF,
        info: dF,
        prefix: "Faro",
        warn: dF
      },
      gF = 1;

    function mF(kk) {
      return mF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, mF(kk)
    }

    function hF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != mF(kk) || !kk) return kk;
        var Ik = kk[Symbol.toPrimitive];
        if (void 0 !== Ik) {
          var Xk = Ik.call(kk, Fk || "default");
          if ("object" != mF(Xk)) return Xk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == mF(Fk) ? Fk : Fk + ""
    }

    function rF(kk, Fk, Ik) {
      return (Fk = hF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }

    function DF(kk, Fk) {
      var Ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Xk = Object.getOwnPropertySymbols(kk);
        Fk && (Xk = Xk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Ik.push.apply(Ik, Xk)
      }
      return Ik
    }

    function MF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Ik = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? DF(Object(Ik), !0).forEach((function(Fk) {
          rF(kk, Fk, Ik[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Ik)) : DF(Object(Ik)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Ik, Fk))
        }))
      }
      return kk
    }
    const kI = MF({}, console);
    var FI = class {
        constructor() {
          this.unpatchedConsole = kI, this.internalLogger = AF, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
          this.internalLogger.debug(`${this.name}\n`, ...Fk)
        }
        logInfo() {
          for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
          this.internalLogger.info(`${this.name}\n`, ...Fk)
        }
        logWarn() {
          for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
          this.internalLogger.warn(`${this.name}\n`, ...Fk)
        }
        logError() {
          for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
          this.internalLogger.error(`${this.name}\n`, ...Fk)
        }
      },
      II = class extends FI {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const XI = "2.12.1";
    var TI = class extends II {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = XI, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(kk) {
        var Fk;
        const Ik = kk.session;
        if (Ik && Ik.id !== (null === (Fk = this.notifiedSession) || void 0 === Fk ? void 0 : Fk.id)) {
          var Xk;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Ik);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Xk = Ik.attributes) || void 0 === Xk ? void 0 : Xk.previousSession)) return this.api.pushEvent(SF, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Ik);
          this.notifiedSession = Ik, this.api.pushEvent(VF, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(kk, Fk, Ik) {
        const Xk = null === Ik || void 0 === Ik ? void 0 : Ik.session;
        let Tk, ik, yk = kk.fetchUserSession();
        if (Fk.persistent && Fk.maxSessionPersistenceTime && yk) {
          const kk = jF();
          yk.lastActivity < kk - Fk.maxSessionPersistenceTime && (CF.removeUserSession(), yk = null)
        }
        const lk = OF(yk);
        if ((null === Ik || void 0 === Ik ? void 0 : Ik.reset) || !lk || (null === Xk || void 0 === Xk ? void 0 : Xk.id) && Xk.id !== (null === yk || void 0 === yk ? void 0 : yk.sessionId)) {
          var ak, qk, Lk, tk, Zk, jk;
          ik = EF({
            sessionId: (null === Ik || void 0 === Ik ? void 0 : Ik.reset) ? void 0 : null !== (ak = null === Xk || void 0 === Xk ? void 0 : Xk.id) && void 0 !== ak ? ak : null === (qk = Fk.session) || void 0 === qk ? void 0 : qk.id,
            isSampled: ZF(this)
          }, this);
          const kk = ik.sessionId,
            ek = Ik && lk ? null === yk || void 0 === yk || null === (Lk = yk.sessionMeta) || void 0 === Lk ? void 0 : Lk.overrides : void 0,
            wk = ek ? tF(tF({}, null === (tk = Fk.session) || void 0 === tk ? void 0 : tk.overrides), ek) : null === (Zk = Fk.session) || void 0 === Zk ? void 0 : Zk.overrides;
          ik.sessionMeta = tF({
            id: kk,
            attributes: tF({
              isSampled: ik.isSampled.toString()
            }, null === (jk = Fk.session) || void 0 === jk ? void 0 : jk.attributes)
          }, wk ? {
            overrides: wk
          } : {}), Tk = VF
        } else {
          var ek, wk;
          const kk = null === yk || void 0 === yk ? void 0 : yk.sessionId;
          ik = EF({
            sessionId: kk,
            isSampled: yk.isSampled || !1,
            started: null === yk || void 0 === yk ? void 0 : yk.started
          }, this);
          const Ik = null === yk || void 0 === yk ? void 0 : yk.sessionMeta,
            Xk = tF(tF({}, null === (ek = Fk.session) || void 0 === ek ? void 0 : ek.overrides), null === Ik || void 0 === Ik ? void 0 : Ik.overrides);
          ik.sessionMeta = tF(tF({}, Fk.session), {}, {
            id: kk,
            attributes: tF(tF(tF({}, null === (wk = Fk.session) || void 0 === wk ? void 0 : wk.attributes), null === Ik || void 0 === Ik ? void 0 : Ik.attributes), {}, {
              isSampled: ik.isSampled.toString()
            }),
            overrides: Xk
          }), Tk = zF
        }
        var Hk;
        if (Xk && (ik.sessionMeta = tF(tF({}, ik.sessionMeta), {}, {
            attributes: tF(tF(tF({}, null === (Hk = ik.sessionMeta) || void 0 === Hk ? void 0 : Hk.attributes), Xk.attributes), {}, {
              isSampled: ik.isSampled.toString()
            })
          }), Xk.overrides)) {
          const kk = (null === Ik || void 0 === Ik ? void 0 : Ik.inheritOverrides) ? tF(tF({}, ik.sessionMeta.overrides), Xk.overrides) : Xk.overrides;
          Object.keys(kk).length > 0 ? ik.sessionMeta.overrides = kk : delete ik.sessionMeta.overrides
        }
        return {
          initialSession: ik,
          lifecycleType: Tk
        }
      }
      registerBeforeSendHook(kk) {
        var Fk;
        this.beforeSendHook = Fk => {
          var Ik, Xk;
          const Tk = null === (Ik = Fk.meta.session) || void 0 === Ik ? void 0 : Ik.id;
          Tk && !this.transports.isPaused() && kk(Tk);
          const ik = null === (Xk = Fk.meta.session) || void 0 === Xk ? void 0 : Xk.attributes;
          if (ik && "true" === (null === ik || void 0 === ik ? void 0 : ik.isSampled)) {
            var yk;
            let kk = JSON.parse(JSON.stringify(Fk));
            const Ik = null === (yk = kk.meta.session) || void 0 === yk ? void 0 : yk.attributes;
            var lk;
            if (null === Ik || void 0 === Ik || delete Ik.isSampled, 0 === Object.keys(null !== Ik && void 0 !== Ik ? Ik : {}).length) null === (lk = kk.meta.session) || void 0 === lk || delete lk.attributes;
            return kk
          }
          return null
        }, null === (Fk = this.transports) || void 0 === Fk || Fk.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var kk;
        this.logDebug("init session instrumentation");
        const Fk = document.prerendering;
        var Ik;
        if ((null === (kk = this.config.sessionTracking) || void 0 === kk ? void 0 : kk.enabled) && (Fk || this.prerenderSession)) return null !== (Ik = this.prerenderSession) && void 0 !== Ik || (this.prerenderSession = new fF(this.metas, this.transports, (kk => {
          this.prerenderSession = void 0, this.initializeSession(kk)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(kk) {
        const Fk = this.config.sessionTracking;
        if (null === Fk || void 0 === Fk ? void 0 : Fk.enabled) {
          var Ik, Xk;
          const Tk = BF(Fk),
            ik = new Tk(this);
          this.isAdoptingSession = ik.isAdopting, this.registerBeforeSendHook(ik.recordActivity);
          const {
            initialSession: yk,
            lifecycleType: lk
          } = this.createInitialSession(Tk, Fk, kk);
          Tk.storeUserSession(yk);
          const ak = yk.sessionMeta;
          this.notifiedSession = ak, this.api.setSession(ak), this.captureListener = () => {
            this.transports.isPaused() || ik.updateSession({
              refreshActivity: !1
            })
          }, null === (Ik = (Xk = this.metas).addCaptureListener) || void 0 === Ik || Ik.call(Xk, this.captureListener), lk === VF && this.api.pushEvent(VF, {}, void 0, {
            skipDedupe: !0
          }), lk === zF && this.api.pushEvent(zF, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var kk, Fk, Ik;
        (null === (kk = this.prerenderSession) || void 0 === kk || kk.destroy(), this.captureListener) && (null === (Fk = (Ik = this.metas).removeCaptureListener) || void 0 === Fk || Fk.call(Ik, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function iI(kk, Fk, Ik, Xk) {
      const Tk = {
        filename: kk || document.location.href,
        function: Fk || "?"
      };
      return void 0 !== Ik && (Tk.lineno = Ik), void 0 !== Xk && (Tk.colno = Xk), Tk
    }
    const yI = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      lI = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      aI = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      qI = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      LI = "safari-extension",
      tI = "safari-web-extension",
      ZI = /Minified React error #\d+;/i;

    function jI(kk, Fk) {
      const Ik = null === kk || void 0 === kk ? void 0 : kk.includes(LI),
        Xk = !Ik && (null === kk || void 0 === kk ? void 0 : kk.includes("safari-web-extension"));
      return Ik || Xk ? [(null === kk || void 0 === kk ? void 0 : kk.includes("@")) ? kk.split("@")[0] : kk, Ik ? `${LI}:${Fk}` : `${tI}:${Fk}`] : [kk, Fk]
    }
    const eI = 1024;

    function wI(kk) {
      let Fk = [];
      kk.stacktrace ? Fk = kk.stacktrace.split("\n").filter(((kk, Fk) => Fk % 2 === 0)) : kk.stack && (Fk = kk.stack.split("\n"));
      const Ik = Fk.reduce(((Fk, Ik, Xk) => {
        if (Ik.length > eI) return Fk;
        let Tk, ik, yk, lk, ak;
        if (Tk = yI.exec(Ik)) {
          if (ik = Tk[1], yk = Tk[2], lk = Tk[3], ak = Tk[4], null === yk || void 0 === yk ? void 0 : yk.startsWith("eval")) {
            const kk = lI.exec(yk);
            kk && (yk = kk[1], lk = kk[2], ak = kk[3])
          }
          yk = (null === yk || void 0 === yk ? void 0 : yk.startsWith("address at ")) ? yk.substring(11) : yk, [ik, yk] = jI(ik, yk)
        } else if (Tk = aI.exec(Ik)) {
          if (ik = Tk[1], yk = Tk[3], lk = Tk[4], ak = Tk[5], yk && yk.includes(" > eval")) {
            const kk = qI.exec(yk);
            kk && (ik = ik || "eval", yk = kk[1], lk = kk[2])
          } else 0 === Xk && !ak && Vk(kk.columnNumber) && (ak = String(kk.columnNumber + 1));
          [ik, yk] = jI(ik, yk)
        }
        return (yk || ik) && Fk.push(iI(yk, ik, lk ? Number(lk) : void 0, ak ? Number(ak) : void 0)), Fk
      }), []);
      return ZI.test(kk.message) ? Ik.slice(1) : Ik
    }

    function HI(kk) {
      return {
        frames: wI(kk)
      }
    }
    const JI = "http-request-start",
      xI = "http-request-end";
    var PI = class kk {
      constructor() {
        this.subscribers = []
      }
      subscribe(kk) {
        return this.subscribers.push(kk), {
          unsubscribe: () => this.unsubscribe(kk)
        }
      }
      unsubscribe(kk) {
        this.subscribers = this.subscribers.filter((Fk => Fk !== kk))
      }
      notify(kk) {
        this.subscribers.forEach((Fk => Fk(kk)))
      }
      first() {
        const Fk = new kk,
          Ik = kk => {
            Fk.notify(kk), Xk.unsubscribe()
          },
          Xk = this.subscribe(Ik),
          Tk = Fk.unsubscribe.bind(Fk);
        return this.withUnsubscribeOverride(Fk, Tk, Ik)
      }
      takeWhile(Fk) {
        const Ik = new kk,
          Xk = kk => {
            Fk(kk) ? Ik.notify(kk) : Ik.unsubscribe(Xk)
          };
        this.subscribe(Xk);
        const Tk = Ik.unsubscribe.bind(Ik);
        return this.withUnsubscribeOverride(Ik, Tk, Xk)
      }
      filter(Fk) {
        const Ik = new kk,
          Xk = kk => {
            Fk(kk) && Ik.notify(kk)
          };
        this.subscribe(Xk);
        const Tk = Ik.unsubscribe.bind(Ik);
        return this.withUnsubscribeOverride(Ik, Tk, Xk)
      }
      merge() {
        const Fk = new kk,
          Ik = [];
        for (var Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
        Tk.forEach((kk => {
          const Xk = kk.subscribe((kk => {
            Fk.notify(kk)
          }));
          Ik.push(Xk)
        }));
        const yk = Fk.unsubscribeAll.bind(Fk);
        return Fk.unsubscribe = () => {
          Ik.forEach((kk => kk.unsubscribe())), yk()
        }, Fk
      }
      withUnsubscribeOverride(kk, Fk, Ik) {
        return kk.unsubscribe = kk => {
          Fk(kk), this.unsubscribe(Ik)
        }, kk
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let KI = function(kk) {
      return kk.TRACE = "trace", kk.DEBUG = "debug", kk.INFO = "info", kk.LOG = "log", kk.WARN = "warn", kk.ERROR = "error", kk
    }({});
    const QI = "log",
      sI = ["trace", "debug", "info", "log", "warn", "error"];
    let VI, zI = !1;
    const SI = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      oI = "Error",
      vI = kk => kk.map((kk => Ek(kk) ? RF(kk) : String(kk))).join(" ");

    function EI(kk) {
      let Fk, Ik, Xk, Tk, ik = [];
      if (Nk(kk) && kk.error) Fk = kk.error.message, Ik = kk.error.name, ik = wI(kk.error);
      else if ((Xk = ck(kk)) || Wk(kk)) {
        const {
          name: Tk,
          message: ik
        } = kk;
        Ik = null !== Tk && void 0 !== Tk ? Tk : Xk ? "DOMError" : "DOMException", Fk = ik ? `${Ik}: ${ik}` : Ik
      } else Ck(kk) ? (Ik = kk.name, Fk = kk.message, ik = wI(kk)) : (Ek(kk) || (Tk = Rk(kk))) && (Ik = Tk ? kk.constructor.name : void 0, Fk = `Non-Error exception captured with keys: ${Object.keys(kk)}`);
      return [Fk, Ik, ik]
    }

    function OI(kk) {
      const [Fk, Ik, Xk, Tk, ik] = kk;
      let yk, lk, ak = [];
      const qk = sk(Fk),
        Lk = iI(Ik, "?", Xk, Tk);
      return ik || !qk ? ([yk, lk, ak] = EI(null !== ik && void 0 !== ik ? ik : Fk), 0 === ak.length && (ak = [Lk])) : qk && ([yk, lk] = function(kk) {
        var Fk, Ik;
        const Xk = kk.match(SI),
          Tk = null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk[1]) && void 0 !== Fk ? Fk : oI;
        return [null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk[2]) && void 0 !== Ik ? Ik : kk, Tk]
      }(Fk), ak = [Lk]), {
        value: yk,
        type: lk,
        stackFrames: ak
      }
    }

    function nI(kk, Fk) {
      return Ck(kk[0]) ? OI(kk) : {
        value: Fk(kk)
      }
    }
    const GI = kk => kk.map((kk => {
      try {
        return String(kk)
      } catch (Fk) {
        return ""
      }
    })).join(" ");
    var pI = class kk extends II {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = XI, this.errorSerializer = GI
      }
      initialize() {
        var Fk, Ik;
        const Xk = this.config.consoleInstrumentation,
          Tk = (null === Xk || void 0 === Xk ? void 0 : Xk.serializeErrors) || !!(null === Xk || void 0 === Xk ? void 0 : Xk.errorSerializer);
        this.errorSerializer = Tk ? null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.errorSerializer) && void 0 !== Fk ? Fk : vI : GI;
        const ik = null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.disabledLevels) && void 0 !== Ik ? Ik : kk.defaultDisabledLevels,
          yk = function(kk) {
            if (VI || (VI = new PI), !zI) {
              const Fk = null !== kk && void 0 !== kk ? kk : kI;
              sI.forEach((kk => {
                console[kk] = function() {
                  for (var Ik, Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
                  VI.notify({
                    type: "console",
                    level: kk,
                    args: Tk
                  }), null === (Ik = Fk[kk]) || void 0 === Ik || Ik.apply(console, Tk)
                }
              })), zI = !0
            }
            return VI
          }(this.unpatchedConsole);
        this.subscription = yk.subscribe((Fk => {
          let {
            level: Ik,
            args: Tk
          } = Fk;
          if (!ik.includes(Ik)) try {
            if (Ik !== KI.ERROR || (null === Xk || void 0 === Xk ? void 0 : Xk.consoleErrorAsLog))
              if (Ik === KI.ERROR && (null === Xk || void 0 === Xk ? void 0 : Xk.consoleErrorAsLog)) {
                const {
                  value: Fk,
                  type: Xk,
                  stackFrames: ik
                } = nI(Tk, this.errorSerializer);
                this.api.pushLog(Fk ? [kk.consoleErrorPrefix + Fk] : Tk, {
                  level: Ik,
                  context: {
                    value: null !== Fk && void 0 !== Fk ? Fk : "",
                    type: null !== Xk && void 0 !== Xk ? Xk : "",
                    stackFrames: (null === ik || void 0 === ik ? void 0 : ik.length) ? vI(ik) : ""
                  }
                })
              } else this.api.pushLog(Tk, {
                level: Ik
              });
            else {
              const {
                value: Fk,
                type: Ik,
                stackFrames: Xk
              } = nI(Tk, this.errorSerializer);
              if (Fk && !Ik && !Xk) return void this.api.pushError(new Error(kk.consoleErrorPrefix + Fk));
              this.api.pushError(new Error(kk.consoleErrorPrefix + Fk), {
                type: Ik,
                stackFrames: Xk
              })
            }
          } catch (yk) {
            this.logError(yk)
          }
        }))
      }
      destroy() {
        var kk;
        null === (kk = this.subscription) || void 0 === kk || kk.unsubscribe(), this.subscription = void 0
      }
    };
    pI.defaultDisabledLevels = [KI.DEBUG, KI.TRACE, KI.LOG], pI.consoleErrorPrefix = "console.error: ";
    const uI = [];
    var bI = class extends II {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = XI
      }
      initialize() {
        this.logDebug("Initializing"),
          function(kk) {
            const Fk = window.onerror;
            window.onerror = function() {
              for (var Ik = arguments.length, Xk = new Array(Ik), Tk = 0; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
              try {
                const {
                  value: Fk,
                  type: Ik,
                  stackFrames: Tk
                } = OI(Xk), ik = Xk[4];
                if (Fk) {
                  const Xk = {
                    type: Ik,
                    stackFrames: Tk
                  };
                  null != ik && (Xk.originalError = ik), kk.pushError(new Error(Fk), Xk)
                }
              } finally {
                null === Fk || void 0 === Fk || Fk.apply(window, Xk)
              }
            }
          }(this.api),
          function(kk) {
            const Fk = Fk => {
              var Ik;
              let Xk, Tk, ik = Fk;
              if (ik.reason) ik = Fk.reason;
              else if (null === (Ik = Fk.detail) || void 0 === Ik ? void 0 : Ik.reason) {
                var yk;
                ik = null === (yk = Fk.detail) || void 0 === yk ? void 0 : yk.reason
              }
              let lk = [];
              uk(ik) ? (Xk = `Non-Error promise rejection captured with value: ${String(ik)}`, Tk = "UnhandledRejection") : [Xk, Tk, lk] = EI(ik), Xk && kk.pushError(new Error(Xk), {
                type: Tk,
                stackFrames: lk
              })
            };
            window.addEventListener("unhandledrejection", Fk), uI.push(Fk)
          }(this.api)
      }
    };
    const RI = "unknown";
    var UI = class extends II {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = XI, this.waitingForActivation = !1, this.sendViewChangedEvent = kk => {
          var Fk;
          if (this.waitingForActivation || document.prerendering) return;
          const Ik = kk.view;
          if (Ik && Ik.name !== (null === (Fk = this.notifiedView) || void 0 === Fk ? void 0 : Fk.name)) {
            var Xk, Tk, ik;
            const kk = null !== (Xk = null === (Tk = this.notifiedView) || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Xk ? Xk : RI;
            this.notifiedView = Ik, this.api.pushEvent(sF, {
              fromView: kk,
              toView: null !== (ik = Ik.name) && void 0 !== ik ? ik : RI
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
    class CI {
      t;
      o = 0;
      i = [];
      l(kk) {
        if (kk.hadRecentInput) return;
        const Fk = this.i[0],
          Ik = this.i.at(-1);
        this.o && Fk && Ik && kk.startTime - Ik.startTime < 1e3 && kk.startTime - Fk.startTime < 5e3 ? (this.o += kk.value, this.i.push(kk)) : (this.o = kk.value, this.i = [kk]), this.t?.(kk)
      }
    }
    const NI = () => {
        const kk = performance.getEntriesByType("navigation")[0];
        if (kk && kk.responseStart > 0 && kk.responseStart < performance.now()) return kk
      },
      cI = kk => {
        if ("loading" === document.readyState) return "loading";
        const Fk = NI();
        if (Fk) {
          if (kk < Fk.domInteractive) return "loading";
          if (0 === Fk.domContentLoadedEventStart || kk < Fk.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Fk.domComplete || kk < Fk.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      WI = kk => {
        const Fk = kk.nodeName;
        return 1 === kk.nodeType ? Fk.toLowerCase() : Fk.toUpperCase().replace(/^#/, "")
      },
      fI = kk => {
        let Fk = "";
        try {
          for (; 9 !== kk?.nodeType;) {
            const Ik = kk,
              Xk = Ik.id ? "#" + Ik.id : [WI(Ik), ...Array.from(Ik.classList ?? []).sort()].join(".");
            if (Fk.length + Xk.length > 99) return Fk || Xk;
            if (Fk = Fk ? Xk + ">" + Fk : Xk, Ik.id) break;
            kk = Ik.parentNode
          }
        } catch {}
        return Fk
      },
      BI = new WeakMap;

    function dI(kk, Fk) {
      let Ik = BI.get(Fk);
      return Ik || (Ik = new WeakMap, BI.set(Fk, Ik)), Ik.get(kk) || Ik.set(kk, new Fk), Ik.get(kk)
    }
    let YI = -1;
    const AI = () => YI,
      gI = kk => {
        addEventListener("pageshow", (Fk => {
          Fk.persisted && (YI = Fk.timeStamp, kk(Fk))
        }), !0)
      },
      mI = (kk, Fk, Ik, Xk) => {
        let Tk, ik;
        return yk => {
          Fk.value >= 0 && (yk || Xk) && (ik = Fk.value - (Tk ?? 0), (ik || void 0 === Tk) && (Tk = Fk.value, Fk.delta = ik, Fk.rating = ((kk, Fk) => kk > Fk[1] ? "poor" : kk > Fk[0] ? "needs-improvement" : "good")(Fk.value, Ik), kk(Fk)))
        }
      },
      hI = kk => {
        requestAnimationFrame((() => requestAnimationFrame((() => kk()))))
      },
      rI = () => NI()?.activationStart ?? 0;
    let DI = -1;
    const MI = new Set,
      kX = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      FX = kk => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === kk.type)
            for (const kk of MI) kk();
          isFinite(DI) || (DI = "visibilitychange" === kk.type ? kk.timeStamp : 0, removeEventListener("prerenderingchange", FX, !0))
        }
      },
      IX = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (DI = 1 / 0), DI < 0) {
          const kk = rI(),
            Fk = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Fk => "hidden" === Fk.name && Fk.startTime >= kk))?.startTime;
          DI = Fk ?? kX(), addEventListener("visibilitychange", FX, !0), addEventListener("prerenderingchange", FX, !0), gI((() => {
            setTimeout((() => {
              DI = kX()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return DI
          },
          onHidden(kk) {
            MI.add(kk)
          }
        }
      },
      XX = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0,
          yk = arguments.length > 6 ? arguments[6] : void 0;
        const lk = NI(),
          ak = lk?.navigationId || 0;
        let qk = "navigate";
        return Ik ? qk = Ik : AI() >= 0 ? qk = "back-forward-cache" : lk && (document.prerendering || rI() > 0 ? qk = "prerender" : document.wasDiscarded ? qk = "restore" : lk.type && (qk = lk.type.replace(/_/g, "-"))), {
          name: kk,
          value: Fk,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: qk,
          navigationId: Xk || ak,
          navigationInteractionId: Tk,
          navigationURL: ik || lk?.name,
          navigationStartTime: yk || 0
        }
      },
      TX = function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Xk = kk.filter((kk => PerformanceObserver.supportedEntryTypes.includes(kk)));
          if (Xk.length > 0) {
            const kk = new PerformanceObserver((kk => {
              queueMicrotask((() => {
                const Ik = kk.getEntries();
                Xk.length > 1 && Ik.sort(((kk, Fk) => kk.startTime + kk.duration - (Fk.startTime + Fk.duration))), Fk(Ik)
              }))
            }));
            for (const Fk of Xk) kk.observe({
              type: Fk,
              buffered: !0,
              ...Ik
            });
            return kk
          }
        } catch {}
      },
      iX = kk => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && kk && kk.reportSoftNavs,
      yX = (kk, Fk) => {
        if (kk.set(Fk.navigationId, Fk), kk.size > 2) {
          const Fk = kk.keys().next().value;
          void 0 !== Fk && kk.delete(Fk)
        }
      },
      lX = kk => {
        let Fk = !1;
        return () => {
          Fk || (kk(), Fk = !0)
        }
      };
    class aX {
      u
    }
    const qX = kk => {
        document.prerendering ? addEventListener("prerenderingchange", kk, !0) : kk()
      },
      LX = [1800, 3e3],
      tX = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ik = iX(Fk);
        qX((() => {
          const Xk = dI(Fk, aX),
            Tk = IX();
          let ik, yk = XX("FCP");
          const lk = TX(["paint"], (kk => {
            for (const Fk of kk) "first-contentful-paint" === Fk.name && (lk.disconnect(), Fk.startTime < Tk.firstHiddenTime && (yk.value = Math.max(Fk.startTime - rI(), 0), yk.entries.push(Fk), yk.navigationId = Fk.navigationId || yk.navigationId, ik(!0)))
          }));
          lk && (ik = mI(kk, yk, LX, Fk.reportAllChanges), gI((Ik => {
            yk = XX("FCP", -1, "back-forward-cache", yk.navigationId, yk.navigationInteractionId, yk.navigationURL, AI()), ik = mI(kk, yk, LX, Fk.reportAllChanges), hI((() => {
              yk.value = performance.now() - Ik.timeStamp, ik(!0)
            }))
          }))), Ik && TX(["soft-navigation"], (Ik => {
            Ik.forEach((Ik => {
              Xk.u && Ik.navigationId && yX(Xk.u, Ik);
              const Tk = Math.max((Ik.presentationTime || Ik.paintTime || 0) - Ik.startTime, 0);
              yk = XX("FCP", Tk, "soft-navigation", Ik.navigationId, Ik.interactionId, Ik.name, Ik.startTime), ik = mI(kk, yk, LX, Fk.reportAllChanges), ik(!0)
            }))
          }), Fk)
        }))
      },
      ZX = [.1, .25],
      jX = kk => kk.find((kk => 1 === kk.node?.nodeType)) || kk[0];
    let eX = 0,
      wX = 1 / 0,
      HX = 0;
    const JX = kk => {
      for (const Fk of kk) Fk.interactionId && (wX = Math.min(wX, Fk.interactionId), HX = Math.max(HX, Fk.interactionId), eX = HX ? (HX - wX) / 7 + 1 : 0)
    };
    let xX;
    const PX = () => xX ? eX : performance.interactionCount ?? 0;
    class KX {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return PX() - this.h
      }
      D() {
        this.h = PX(), this.v.length = 0, this.p.clear()
      }
      S(kk) {
        const Fk = this.T(),
          Ik = Math.min(this.v.length - 1, Math.floor(Fk / 50));
        return !Fk || -1 !== Ik || "soft-navigation" !== kk && "back-forward-cache" !== kk ? this.v[Ik] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(kk) {
        if (this.m?.(kk), !kk.interactionId) return;
        const Fk = this.v.at(-1);
        let Ik = this.p.get(kk.interactionId);
        if (Ik || this.v.length < 10 || kk.duration > Fk.k) {
          if (Ik ? kk.duration > Ik.k ? (Ik.entries = [kk], Ik.k = kk.duration) : kk.duration === Ik.k && kk.startTime === Ik.entries[0].startTime && Ik.entries.push(kk) : (Ik = {
              id: kk.interactionId,
              entries: [kk],
              k: kk.duration
            }, this.p.set(Ik.id, Ik), this.v.push(Ik)), this.v.sort(((kk, Fk) => Fk.k - kk.k)), this.v.length > 10) {
            const kk = this.v.splice(10);
            for (const Fk of kk) this.p.delete(Fk.id)
          }
          this.M?.(Ik)
        }
      }
    }
    const QX = kk => {
        const Fk = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Ik = globalThis.requestIdleCallback || setTimeout,
          Xk = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) kk();
        else {
          const Tk = lX(kk);
          let ik = -1;
          const yk = () => {
            Xk(ik), Tk()
          };
          addEventListener("visibilitychange", yk, {
            once: !0,
            capture: !0
          }), ik = Ik((() => {
            removeEventListener("visibilitychange", yk, {
              capture: !0
            }), Tk()
          }), {
            timeout: Fk
          })
        }
      },
      sX = [200, 500],
      VX = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ik = dI(Fk = Object.assign({}, Fk), KX);
        let Xk = [],
          Tk = [],
          ik = 0;
        const yk = new WeakMap,
          lk = new WeakMap;
        let ak = !1;
        const qk = () => {
            ak || (ak = !0, QX(Lk))
          },
          Lk = () => {
            const kk = new Set(Ik.v.map((kk => yk.get(kk.entries[0])))),
              Fk = Tk.length - 10;
            Tk = Tk.filter(((Ik, Xk) => Xk >= Fk || kk.has(Ik)));
            const lk = new Set;
            for (const Ik of Tk) {
              const kk = tk(Ik.startTime, Ik.processingEnd);
              for (const Fk of kk) lk.add(Fk)
            }
            const qk = Xk.length - 10;
            Xk = Xk.filter(((kk, Fk) => lk.has(kk) || Fk >= qk && kk.startTime > ik)), ak = !1
          };
        Ik.m = kk => {
          const Ik = kk.startTime + kk.duration;
          let Xk;
          ik = Math.max(ik, kk.processingEnd);
          for (let ik = Tk.length - 1; ik >= 0; ik--) {
            const yk = Tk[ik];
            if (Math.abs(Ik - yk.renderTime) <= 8) {
              Xk = yk, Xk.startTime = Math.min(kk.startTime, Xk.startTime), Xk.processingStart = Math.min(kk.processingStart, Xk.processingStart), Xk.processingEnd = Math.max(kk.processingEnd, Xk.processingEnd), Fk.includeProcessedEventEntries && Xk.entries.push(kk);
              break
            }
          }
          Xk || (Xk = {
            startTime: kk.startTime,
            processingStart: kk.processingStart,
            processingEnd: kk.processingEnd,
            renderTime: Ik,
            entries: Fk.includeProcessedEventEntries ? [kk] : []
          }, Tk.push(Xk)), kk.interactionId && yk.set(kk, Xk), qk()
        }, Ik.M = kk => {
          if (!lk.get(kk)) {
            const Ik = kk.entries.find((kk => kk.target))?.target;
            if (Ik) {
              const Xk = Fk.generateTarget?.(Ik) ?? fI(Ik);
              lk.set(kk, Xk)
            } else {
              const Fk = kk.entries.find((kk => kk.targetSelector))?.targetSelector;
              Fk && lk.set(kk, Fk)
            }
          }
        };
        const tk = (kk, Fk) => {
          const Ik = [];
          for (const Tk of Xk)
            if (!(Tk.startTime + Tk.duration < kk)) {
              if (Tk.startTime > Fk) break;
              Ik.push(Tk)
            } return Ik
        };
        TX(["long-animation-frame"], (kk => {
            Xk = Xk.concat(kk), qk()
          }), Fk),
          function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Ik = IX();
            qX((() => {
              "interactionCount" in performance || xX || (xX = TX(["event"], JX, {
                durationThreshold: 0
              }));
              let Xk, Tk = XX("INP");
              const ik = dI(Fk, KX),
                yk = (Ik, yk, lk, ak, qk) => {
                  ik.D(), Tk = XX("INP", -1, Ik, yk, lk, ak, qk), Xk = mI(kk, Tk, sX, Fk.reportAllChanges)
                },
                lk = () => {
                  const kk = ik.S(Tk.navigationType);
                  kk && kk.k !== Tk.value && (Tk.value = kk.k, Tk.entries = kk.entries, Xk())
                },
                ak = kk => {
                  lk(), Xk(!0), yk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime)
                },
                qk = function(kk) {
                  let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  QX((() => {
                    for (const Fk of kk) "soft-navigation" !== Fk.entryType ? ik.l(Fk) : ak(Fk);
                    lk(), Fk && Xk(!0)
                  }))
                },
                Lk = ["event", "first-input"];
              iX(Fk) && Lk.push("soft-navigation");
              const tk = TX(Lk, qk, {
                ...Fk,
                durationThreshold: Fk.durationThreshold ?? 40
              });
              Xk = mI(kk, Tk, sX, Fk.reportAllChanges), tk && (Ik.onHidden((() => {
                qk(tk.takeRecords(), !0)
              })), gI((() => {
                yk("back-forward-cache", Tk.navigationId, Tk.navigationInteractionId, Tk.navigationURL, AI())
              })))
            }))
          }((Fk => {
            kk((kk => {
              if (0 === kk.entries.length) {
                const Fk = kk.navigationStartTime || 0,
                  Ik = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: kk.value,
                    loadState: cI(Fk)
                  };
                return Object.assign(kk, {
                  attribution: Ik
                })
              }
              const Fk = kk.entries[0],
                Xk = yk.get(Fk),
                Tk = Math.max(Xk.processingStart, Fk.startTime),
                ik = Math.max(Fk.startTime + Fk.duration, Tk),
                ak = Math.min(Xk.processingEnd, ik),
                qk = Xk.entries.sort(((kk, Fk) => kk.processingStart - Fk.processingStart)),
                Lk = tk(Fk.startTime, ak),
                Zk = Ik.p.get(Fk.interactionId),
                jk = {
                  interactionTarget: lk.get(Zk),
                  interactionType: Fk.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Fk.startTime,
                  nextPaintTime: ik,
                  processedEventEntries: qk,
                  longAnimationFrameEntries: Lk,
                  inputDelay: Tk - Fk.startTime,
                  processingDuration: ak - Tk,
                  presentationDelay: ik - ak,
                  loadState: cI(Fk.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (kk => {
                const Fk = kk.interactionTime,
                  Ik = kk.nextPaintTime;
                if (!kk.longAnimationFrameEntries?.length || !Fk || !Ik) return;
                const Xk = kk.inputDelay,
                  Tk = kk.processingDuration;
                let ik, yk, lk = 0,
                  ak = 0,
                  qk = 0,
                  Lk = 0;
                for (const jk of kk.longAnimationFrameEntries) {
                  ak = ak + jk.startTime + jk.duration - jk.styleAndLayoutStart;
                  for (const kk of jk.scripts) {
                    const Ik = kk.startTime + kk.duration;
                    if (Ik < Fk) continue;
                    const qk = Ik - Math.max(Fk, kk.startTime),
                      tk = kk.duration ? qk / kk.duration * kk.forcedStyleAndLayoutDuration : 0;
                    lk += qk - tk, ak += tk, qk > Lk && (yk = kk.startTime < Fk + Xk ? "input-delay" : kk.startTime >= Fk + Xk + Tk ? "presentation-delay" : "processing-duration", ik = kk, Lk = qk)
                  }
                }
                const tk = kk.longAnimationFrameEntries.at(-1),
                  Zk = tk ? tk.startTime + tk.duration : 0;
                Zk >= Fk + Xk + Tk && (qk = Ik - Zk), ik && yk && (kk.longestScript = {
                  entry: ik,
                  subpart: yk,
                  intersectingDuration: Lk
                }), kk.totalScriptDuration = lk, kk.totalStyleAndLayoutDuration = ak, kk.totalPaintDuration = qk, kk.totalUnattributedDuration = Ik - Fk - lk - ak - qk
              })(jk), Object.assign(kk, {
                attribution: jk
              })
            })(Fk))
          }), Fk)
      };
    class zX {
      m;
      u;
      l(kk) {
        this.m?.(kk)
      }
    }
    const SX = [2500, 4e3];
    let oX = 50;
    const vX = [];
    TX(["resource"], (kk => {
      for (const Fk of kk) vX.push(Fk), vX.length > oX && vX.shift()
    }));
    const EX = [800, 1800],
      OX = kk => {
        document.prerendering ? qX((() => OX(kk))) : "complete" !== document.readyState ? addEventListener("load", (() => OX(kk)), !0) : setTimeout(kk)
      },
      nX = "load_state",
      GX = "time_to_first_byte";
    var pX = class {
        constructor(kk, Fk) {
          this.corePushMeasurement = kk, this.webVitalConfig = Fk
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var kk;
          ! function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Ik = dI(Fk = Object.assign({}, Fk), CI),
              Xk = new WeakMap;
            Ik.t = kk => {
                if (kk?.sources?.length) {
                  const Ik = jX(kk.sources),
                    Tk = Ik?.node;
                  if (Tk) {
                    const kk = Fk.generateTarget?.(Tk) ?? fI(Tk);
                    Xk.set(Ik, kk)
                  }
                }
              },
              function(kk) {
                let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Ik = IX();
                tX(lX((() => {
                  let Xk, Tk = XX("CLS", 0);
                  const ik = dI(Fk, CI),
                    yk = (Ik, yk, lk, ak, qk) => {
                      Tk = XX("CLS", 0, Ik, yk, lk, ak, qk), ik.o = 0, Xk = mI(kk, Tk, ZX, Fk.reportAllChanges)
                    },
                    lk = function() {
                      let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      ik.o > Tk.value && (Tk.value = ik.o, Tk.entries = ik.i), Xk(kk)
                    },
                    ak = kk => {
                      lk(!0), yk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime)
                    },
                    qk = kk => {
                      for (const Fk of kk) "soft-navigation" !== Fk.entryType ? ik.l(Fk) : ak(Fk);
                      lk()
                    },
                    Lk = ["layout-shift"];
                  iX(Fk) && Lk.push("soft-navigation");
                  const tk = TX(Lk, qk);
                  tk && (Xk = mI(kk, Tk, ZX, Fk.reportAllChanges), Ik.onHidden((() => {
                    qk(tk.takeRecords()), Xk(!0)
                  })), gI((() => {
                    yk("back-forward-cache", Tk.navigationId, Tk.navigationInteractionId, Tk.navigationURL, AI()), hI(Xk)
                  })), setTimeout(Xk))
                })))
              }((Fk => {
                kk((kk => {
                  let Fk = {};
                  if (kk.entries.length) {
                    const Ik = kk.entries.reduce(((kk, Fk) => kk.value > Fk.value ? kk : Fk));
                    if (Ik?.sources?.length) {
                      const kk = jX(Ik.sources);
                      kk && (Fk = {
                        largestShiftTarget: Xk.get(kk),
                        largestShiftTime: Ik.startTime,
                        largestShiftValue: Ik.value,
                        largestShiftSource: kk,
                        largestShiftEntry: Ik,
                        loadState: cI(Ik.startTime)
                      })
                    }
                  }
                  return Object.assign(kk, {
                    attribution: Fk
                  })
                })(Fk))
              }), Fk)
          }((kk => {
            const {
              loadState: Fk,
              largestShiftValue: Ik,
              largestShiftTime: Xk,
              largestShiftTarget: Tk
            } = kk.attribution, ik = this.buildInitialValues(kk);
            this.addIfPresent(ik, "largest_shift_value", Ik), this.addIfPresent(ik, "largest_shift_time", Xk);
            const yk = this.buildInitialContext(kk);
            this.addIfPresent(yk, nX, Fk), this.addIfPresent(yk, "largest_shift_target", Tk), this.pushMeasurement(ik, yk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureFCP() {
          var kk;
          ! function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Ik = dI(Fk = Object.assign({}, Fk), aX);
            iX(Fk) && (Ik.u = new Map), tX((Fk => {
              kk((kk => {
                let Fk = {
                  timeToFirstByte: 0,
                  firstByteToFCP: kk.value,
                  loadState: cI(AI())
                };
                if ("soft-navigation" !== kk.navigationType) {
                  if (kk.entries.length) {
                    const Ik = NI(),
                      Xk = kk.entries.at(-1);
                    if (Ik) {
                      const Tk = Ik.responseStart,
                        ik = Ik.activationStart || 0,
                        yk = Math.max(0, Tk - ik);
                      Fk = {
                        timeToFirstByte: yk,
                        firstByteToFCP: kk.value - yk,
                        loadState: cI(kk.entries[0].startTime),
                        navigationEntry: Ik,
                        fcpEntry: Xk
                      }
                    }
                  }
                } else {
                  const Xk = Ik.u?.get(kk.navigationId);
                  Xk && (Fk = {
                    timeToFirstByte: 0,
                    firstByteToFCP: kk.value,
                    loadState: "complete",
                    navigationEntry: Xk
                  })
                }
                return Object.assign(kk, {
                  attribution: Fk
                })
              })(Fk))
            }), Fk)
          }((kk => {
            const {
              firstByteToFCP: Fk,
              timeToFirstByte: Ik,
              loadState: Xk
            } = kk.attribution, Tk = this.buildInitialValues(kk);
            this.addIfPresent(Tk, "first_byte_to_fcp", Fk), this.addIfPresent(Tk, GX, Ik);
            const ik = this.buildInitialContext(kk);
            this.addIfPresent(ik, nX, Xk), this.pushMeasurement(Tk, ik)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureINP() {
          var kk;
          VX((kk => {
            var Fk;
            const {
              interactionTime: Ik,
              presentationDelay: Xk,
              inputDelay: Tk,
              processingDuration: ik,
              nextPaintTime: yk,
              loadState: lk,
              interactionTarget: ak,
              interactionType: qk,
              totalScriptDuration: Lk,
              totalStyleAndLayoutDuration: tk,
              totalPaintDuration: Zk,
              totalUnattributedDuration: jk,
              longestScript: ek
            } = kk.attribution, wk = this.buildInitialValues(kk);
            this.addIfPresent(wk, "interaction_time", Ik), this.addIfPresent(wk, "presentation_delay", Xk), this.addIfPresent(wk, "input_delay", Tk), this.addIfPresent(wk, "processing_duration", ik), this.addIfPresent(wk, "next_paint_time", yk), this.addNumberIfDefined(wk, "total_script_duration", Lk), this.addNumberIfDefined(wk, "total_style_and_layout_duration", tk), this.addNumberIfDefined(wk, "total_paint_duration", Zk), this.addNumberIfDefined(wk, "total_unattributed_duration", jk), this.addNumberIfDefined(wk, "longest_script_intersecting_duration", null === ek || void 0 === ek ? void 0 : ek.intersectingDuration);
            const Hk = this.buildInitialContext(kk);
            this.addIfPresent(Hk, nX, lk), this.addIfPresent(Hk, "interaction_target", ak), this.addIfPresent(Hk, "interaction_type", qk), this.addIfPresent(Hk, "longest_script_subpart", null === ek || void 0 === ek ? void 0 : ek.subpart), this.addIfPresent(Hk, "longest_script_invoker_type", null === ek || void 0 === ek ? void 0 : ek.entry.invokerType), (null === (Fk = this.webVitalConfig) || void 0 === Fk ? void 0 : Fk.trackAttributionSources) && (this.addIfPresent(Hk, "longest_script_invoker", null === ek || void 0 === ek ? void 0 : ek.entry.invoker), this.addIfPresent(Hk, "longest_script_source_url", null === ek || void 0 === ek ? void 0 : ek.entry.sourceURL), this.addIfPresent(Hk, "longest_script_source_function_name", null === ek || void 0 === ek ? void 0 : ek.entry.sourceFunctionName), this.addIfPresent(Hk, "longest_script_source_char_position", void 0 !== (null === ek || void 0 === ek ? void 0 : ek.entry.sourceCharPosition) ? String(ek.entry.sourceCharPosition) : void 0)), this.pushMeasurement(wk, Hk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureLCP() {
          var kk;
          ! function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Fk = Object.assign({}, Fk)).resourceBufferSize && (oX = Fk.resourceBufferSize);
            const Ik = dI(Fk, zX),
              Xk = new WeakMap;
            iX(Fk) && (Ik.u = new Map), Ik.m = kk => {
                const Ik = kk.element;
                if (Ik) {
                  const Tk = Fk.generateTarget?.(Ik) ?? fI(Ik);
                  Xk.set(kk, Tk)
                } else kk.id && Xk.set(kk, `#${kk.id}`)
              },
              function(kk) {
                let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Ik = !1;
                const Xk = iX(Fk);
                qX((() => {
                  let Tk, ik = IX(),
                    yk = XX("LCP");
                  const lk = dI(Fk, zX),
                    ak = (Xk, lk, ak, qk, Lk) => {
                      yk = XX("LCP", -1, Xk, lk, ak, qk, Lk), Tk = mI(kk, yk, SX, Fk.reportAllChanges), Ik = !1, "soft-navigation" === Xk && (ik = IX(!0))
                    },
                    qk = kk => {
                      lk.u && kk.navigationId && yX(lk.u, kk), Ik || Tk(!0), ak("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime);
                      const Fk = kk.getLargestInteractionContentfulPaint?.();
                      Fk && Lk([Fk])
                    },
                    Lk = kk => {
                      Fk.reportAllChanges || Xk || (kk = kk.slice(-1));
                      for (const Fk of kk) {
                        if (!Fk) continue;
                        if ("soft-navigation" === Fk.entryType) {
                          qk(Fk);
                          continue
                        }
                        let kk = 0,
                          Ik = [],
                          Xk = Fk.startTime;
                        if ("largest-contentful-paint" === Fk.entryType) kk = Math.max(Fk.startTime - rI(), 0), lk.l(Fk), Ik = [Fk];
                        else if ("interaction-contentful-paint" === Fk.entryType) {
                          const Tk = Fk;
                          if (!yk.navigationId) continue;
                          if ("interactionId" in Tk && Tk.interactionId != yk.navigationInteractionId) continue;
                          Xk = Tk.largestContentfulPaint?.renderTime || 0, kk = Math.max(Xk - Fk.startTime, 0), Tk.largestContentfulPaint && (lk.l(Tk.largestContentfulPaint), Ik = [Tk.largestContentfulPaint])
                        }
                        Xk < ik.firstHiddenTime && (yk.value = kk, yk.entries = Ik, Tk())
                      }
                    },
                    tk = ["largest-contentful-paint"];
                  Xk && tk.push("interaction-contentful-paint", "soft-navigation");
                  const Zk = TX(tk, Lk);
                  if (Zk) {
                    Tk = mI(kk, yk, SX, Fk.reportAllChanges);
                    const ik = ["keydown", "click", "visibilitychange"],
                      lk = kk => {
                        if (kk.isTrusted && !Ik) {
                          const kk = yk.id;
                          QX((() => {
                            if (!Ik) {
                              if (!Xk) {
                                Zk.disconnect();
                                for (const kk of ik) removeEventListener(kk, lk, {
                                  capture: !0
                                })
                              }
                              kk === yk.id && (Ik = !0, Tk(!0))
                            }
                          }))
                        }
                      };
                    for (const kk of ik) addEventListener(kk, lk, {
                      capture: !0
                    });
                    gI((Xk => {
                      ak("back-forward-cache", yk.navigationId, yk.navigationInteractionId, yk.navigationURL, AI()), Tk = mI(kk, yk, SX, Fk.reportAllChanges), hI((() => {
                        yk.value = performance.now() - Xk.timeStamp, Ik = !0, Tk(!0)
                      }))
                    }))
                  }
                }))
              }((Fk => {
                kk((kk => {
                  let Fk = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: kk.value
                  };
                  if (kk.entries.length) {
                    const Tk = kk.entries.at(-1),
                      ik = kk => kk.name === Tk.url && (kk.requestStart || kk.startTime) <= Tk.startTime,
                      yk = Tk.url && (vX.findLast(ik) || performance.getEntriesByType("resource").findLast(ik));
                    let lk;
                    Fk.target = Xk.get(Tk), Fk.lcpEntry = Tk, Tk.url && (Fk.url = Tk.url), yk && (Fk.lcpResourceEntry = yk);
                    let ak = 0,
                      qk = 0;
                    if ("soft-navigation" !== kk.navigationType ? (lk = NI(), ak = lk?.activationStart ?? 0, qk = lk?.responseStart ?? 0) : (ak = kk.navigationStartTime || 0, lk = Ik.u?.get(kk.navigationId)), lk) {
                      const Ik = Math.max(0, qk - ak),
                        Xk = Math.max(Ik, yk ? (yk.requestStart || yk.startTime) - ak : 0),
                        Tk = Math.min(kk.value, Math.max(Xk, yk ? yk.responseEnd - ak : 0));
                      Fk = {
                        ...Fk,
                        timeToFirstByte: Ik,
                        resourceLoadDelay: Xk - Ik,
                        resourceLoadDuration: Tk - Xk,
                        elementRenderDelay: kk.value - Tk,
                        navigationEntry: lk
                      }
                    }
                  }
                  return Object.assign(kk, {
                    attribution: Fk
                  })
                })(Fk))
              }), Fk)
          }((kk => {
            var Fk;
            const {
              elementRenderDelay: Ik,
              resourceLoadDelay: Xk,
              resourceLoadDuration: Tk,
              timeToFirstByte: ik,
              target: yk,
              url: lk,
              lcpResourceEntry: ak
            } = kk.attribution, qk = this.buildInitialValues(kk);
            this.addIfPresent(qk, "element_render_delay", Ik), this.addIfPresent(qk, "resource_load_delay", Xk), this.addIfPresent(qk, "resource_load_duration", Tk), this.addIfPresent(qk, GX, ik);
            const Lk = this.buildInitialContext(kk);
            this.addIfPresent(Lk, "element", yk), (null === (Fk = this.webVitalConfig) || void 0 === Fk ? void 0 : Fk.trackAttributionSources) && (this.addIfPresent(Lk, "resource_url", lk), this.addIfPresent(Lk, "resource_delivery_type", null === ak || void 0 === ak ? void 0 : ak.deliveryType), this.addIfPresent(Lk, "resource_initiator_type", null === ak || void 0 === ak ? void 0 : ak.initiatorType)), this.pushMeasurement(qk, Lk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureTTFB() {
          var kk;
          ! function(kk) {
            ! function(kk) {
              let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Ik = iX(Fk);
              let Xk = XX("TTFB"),
                Tk = mI(kk, Xk, EX, Fk.reportAllChanges);
              OX((() => {
                const ik = NI();
                if (ik) {
                  const yk = ik.responseStart;
                  Xk.value = Math.max(yk - rI(), 0), Xk.entries = [ik], Tk(!0), gI((() => {
                    Xk = XX("TTFB", 0, "back-forward-cache", Xk.navigationId, Xk.navigationInteractionId, Xk.navigationURL, AI()), Tk = mI(kk, Xk, EX, Fk.reportAllChanges), Tk(!0)
                  })), Ik && TX(["soft-navigation"], (Ik => {
                    Ik.forEach((Ik => {
                      Ik.navigationId && (Xk = XX("TTFB", 0, "soft-navigation", Ik.navigationId, Ik.interactionId, Ik.name, Ik.startTime), Xk.entries = [Ik], Tk = mI(kk, Xk, EX, Fk.reportAllChanges), Tk(!0))
                    }))
                  }), Fk)
                }
              }))
            }((Fk => {
              kk((kk => {
                const Fk = kk.entries[0];
                let Ik = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Fk
                };
                if (kk.entries.length && Fk instanceof PerformanceNavigationTiming) {
                  const Xk = Fk.activationStart || 0,
                    Tk = Math.max((Fk.workerStart || Fk.fetchStart || 0) - Xk, 0),
                    ik = Math.max(Fk.domainLookupStart - Xk, 0),
                    yk = Math.max(Fk.connectStart - Xk, 0),
                    lk = Math.max(Fk.connectEnd - Xk, 0);
                  Ik = {
                    waitingDuration: Tk,
                    cacheDuration: ik - Tk,
                    dnsDuration: yk - ik,
                    connectionDuration: lk - yk,
                    requestDuration: kk.value - lk,
                    navigationEntry: Fk
                  }
                }
                return Object.assign(kk, {
                  attribution: Ik
                })
              })(Fk))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((kk => {
            const {
              dnsDuration: Fk,
              connectionDuration: Ik,
              requestDuration: Xk,
              waitingDuration: Tk,
              cacheDuration: ik
            } = kk.attribution, yk = this.buildInitialValues(kk);
            this.addIfPresent(yk, "dns_duration", Fk), this.addIfPresent(yk, "connection_duration", Ik), this.addIfPresent(yk, "request_duration", Xk), this.addIfPresent(yk, "waiting_duration", Tk), this.addIfPresent(yk, "cache_duration", ik);
            const lk = this.buildInitialContext(kk);
            this.pushMeasurement(yk, lk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        buildInitialValues(kk) {
          return {
            [kk.name.toLowerCase()]: kk.value,
            delta: kk.delta
          }
        }
        buildInitialContext(kk) {
          var Fk;
          const Ik = null !== (Fk = FF("com.grafana.faro.lastNavigationId", Dk)) && void 0 !== Fk ? Fk : RI;
          return {
            id: kk.id,
            rating: kk.rating,
            navigation_type: kk.navigationType,
            navigation_entry_id: Ik
          }
        }
        pushMeasurement(kk, Fk) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: kk
          }, {
            context: Fk
          })
        }
        addIfPresent(kk, Fk, Ik) {
          Ik && (kk[Fk] = Ik)
        }
        addNumberIfDefined(kk, Fk, Ik) {
          void 0 !== Ik && (kk[Fk] = Ik)
        }
      },
      uX = class extends II {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = XI
        }
        initialize() {
          this.logDebug("Initializing"), new pX(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const bX = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function RX() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Fk of kk)
        if ("traceparent" === Fk.name) {
          if (!bX.test(Fk.description)) continue;
          const [, kk, Ik] = Fk.description.split("-");
          if (null != kk && null != Ik) return {
            traceId: kk,
            spanId: Ik
          };
          break
        }
    }

    function UX(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Ik,
        monoNow: Xk
      } = Fk;
      return Math.min(Ik, Ik - (Xk - kk))
    }

    function CX(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Ik, Xk] of Object.entries(Fk)) {
        const Fk = kk[Ik];
        return null != Fk && (nk(Xk) ? Xk.includes(Fk) : Fk === Xk)
      }
      return !0
    }

    function NX(kk) {
      const {
        connectEnd: Fk,
        connectStart: Ik,
        decodedBodySize: Xk,
        domainLookupEnd: Tk,
        domainLookupStart: ik,
        duration: yk,
        encodedBodySize: lk,
        fetchStart: ak,
        initiatorType: qk,
        name: Lk,
        nextHopProtocol: tk,
        redirectEnd: Zk,
        redirectStart: jk,
        renderBlockingStatus: ek,
        requestStart: wk,
        responseEnd: Hk,
        responseStart: Jk,
        responseStatus: xk,
        secureConnectionStart: Pk,
        transferSize: Kk,
        workerStart: Qk
      } = kk;
      return {
        name: Lk,
        httpHost: WX(Lk),
        duration: fX(yk),
        tcpHandshakeTime: fX(Fk - Ik),
        dnsLookupTime: fX(Tk - ik),
        tlsNegotiationTime: fX(Fk - Pk),
        responseStatus: fX(xk),
        redirectTime: fX(Zk - jk),
        requestTime: fX(Jk - wk),
        responseTime: fX(Hk - Jk),
        fetchTime: fX(Hk - ak),
        serviceWorkerTime: fX(Qk > 0 ? ak - Qk : 0),
        decodedBodySize: fX(Xk),
        encodedBodySize: fX(lk),
        cacheHitStatus: function() {
          let kk = "fullLoad";
          0 === Kk ? Xk > 0 && (kk = "cache") : null != xk ? 304 === xk && (kk = "conditionalFetch") : lk > 0 && Kk < lk && (kk = "conditionalFetch");
          return kk
        }(),
        renderBlockingStatus: fX(ek),
        protocol: tk,
        initiatorType: qk,
        visibilityState: document.visibilityState,
        ttfb: fX(Jk - wk),
        transferSize: fX(Kk)
      }
    }

    function cX(kk) {
      const {
        activationStart: Fk,
        domComplete: Ik,
        domContentLoadedEventEnd: Xk,
        domContentLoadedEventStart: Tk,
        domInteractive: ik,
        fetchStart: yk,
        loadEventEnd: lk,
        loadEventStart: ak,
        responseStart: qk,
        type: Lk
      } = kk, tk = function() {
        var kk;
        return null != (null === (kk = performance.timing) || void 0 === kk ? void 0 : kk.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return tF(tF({}, NX(kk)), {}, {
        pageLoadTime: fX(Ik - yk),
        documentParsingTime: fX(tk ? ik - tk : null),
        domProcessingTime: fX(Ik - ik),
        domContentLoadHandlerTime: fX(Xk - Tk),
        onLoadTime: fX(lk - ak),
        ttfb: fX(Math.max(qk - (null !== Fk && void 0 !== Fk ? Fk : 0), 0)),
        type: Lk
      })
    }

    function WX(kk) {
      try {
        return new URL(kk).host || RI
      } catch (Fk) {
        return RI
      }
    }

    function fX(kk) {
      return null == kk ? RI : "number" === typeof kk ? Math.round(kk > 0 ? kk : 0).toString() : kk.toString()
    }
    const BX = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function dX(kk, Fk, Ik, Xk, Tk, ik, yk) {
      try {
        var lk = kk[ik](yk),
          ak = lk.value
      } catch (kk) {
        return void Ik(kk)
      }
      lk.done ? Fk(ak) : Promise.resolve(ak).then(Xk, Tk)
    }

    function YX(kk) {
      return function() {
        var Fk = this,
          Ik = arguments;
        return new Promise((function(Xk, Tk) {
          var ik = kk.apply(Fk, Ik);

          function yk(kk) {
            dX(ik, Xk, Tk, yk, lk, "next", kk)
          }

          function lk(kk) {
            dX(ik, Xk, Tk, yk, lk, "throw", kk)
          }
          yk(void 0)
        }))
      }
    }
    const AX = new PI;
    var gX = class extends II {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = XI
      }
      initialize() {
        var kk = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Fk = !1;
        const Ik = () => {
          ! function(kk) {
            if ("complete" === document.readyState) kk();
            else {
              const Fk = () => {
                "complete" === document.readyState && (kk(), document.removeEventListener("readystatechange", Fk))
              };
              document.addEventListener("readystatechange", Fk)
            }
          }(YX((function*() {
            if (Fk) return;
            const Ik = kk.api.pushEvent,
              {
                faroNavigationId: Xk
              } = yield function(kk) {
                let Fk;
                const Ik = new Promise((kk => {
                  Fk = kk
                }));
                return new PerformanceObserver((Ik => {
                  var Xk;
                  const [Tk] = Ik.getEntries();
                  if (null == Tk || hk(Tk.name)) return;
                  const ik = Tk.toJSON();
                  let yk = RX(null === ik || void 0 === ik ? void 0 : ik.serverTiming);
                  const lk = null !== (Xk = FF("com.grafana.faro.lastNavigationId", Dk)) && void 0 !== Xk ? Xk : RI,
                    ak = tF(tF({}, cX(ik)), {}, {
                      faroNavigationId: xF(),
                      faroPreviousNavigationId: lk
                    });
                  IF("com.grafana.faro.lastNavigationId", ak.faroNavigationId, Dk), kk("faro.performance.navigation", ak, void 0, {
                    spanContext: yk,
                    timestampOverwriteMs: UX(ik.startTime)
                  }), Fk(ak)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Ik
              }(Ik);
            Fk || null == Xk || function(kk, Fk, Ik, Xk) {
              const Tk = Xk.trackResources;
              new PerformanceObserver((Xk => {
                const ik = Xk.getEntries(),
                  yk = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const lk of ik) {
                  if (hk(lk.name)) continue;
                  null === Ik || void 0 === Ik || Ik.notify({
                    type: "resource"
                  });
                  const Xk = lk.toJSON();
                  let ik = RX(null === Xk || void 0 === Xk ? void 0 : Xk.serverTiming);
                  (null == Tk && CX(Xk, BX) || Tk) && Fk("faro.performance.resource", tF(tF({}, NX(Xk)), {}, {
                    faroNavigationId: kk,
                    faroResourceId: xF()
                  }), void 0, {
                    spanContext: ik,
                    timestampOverwriteMs: UX(Xk.startTime, yk)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Xk, Ik, AX, kk.config)
          })))
        };
        this.cancelInitialization = () => {
          Fk = !0, document.removeEventListener("prerenderingchange", Ik)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Ik, {
          once: !0
        }) : Ik()
      }
      destroy() {
        var kk;
        null === (kk = this.cancelInitialization) || void 0 === kk || kk.call(this), this.cancelInitialization = void 0
      }
    };
    const mX = "data-faro-user-action-name",
      hX = mX.replace(/-name$/, "-timeout"),
      rX = 1e3;

    function DX(kk) {
      return `data-${(kk.startsWith("data-")?kk.slice(5):kk).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function MX(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dF;
      if (void 0 === kk) return Fk;
      let Xk = NaN;
      try {
        Xk = "string" === typeof kk && "" === kk.trim() ? NaN : Number(kk)
      } catch (Tk) {}
      return !Number.isFinite(Xk) || Xk <= 0 ? (Ik(`initialActivityTimeout must be a finite number greater than zero; using ${Fk} ms`), Fk) : Xk > 1e3 ? (Ik(`initialActivityTimeout cannot exceed ${rX} ms; clamping to the maximum`), rX) : Xk
    }

    function kT(kk, Fk, Ik) {
      return void 0 !== kk && window.clearTimeout(kk), window.setTimeout((() => {
        Fk()
      }), Ik)
    }

    function FT(kk) {
      return kk.type === xI
    }
    let IT, XT;

    function TT() {
      return IT || (IT = new PI), XT || (XT = new MutationObserver(((kk, Fk) => {
        IT.notify({
          type: "dom-mutation"
        })
      })), XT.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), IT
    }
    const iT = "fetch",
      yT = "xhr";
    let lT, aT, qT, LT, tT = !1;

    function ZT() {
      if (lT) return lT;

      function kk(kk) {
        lT.notify({
          type: JI,
          request: kk
        })
      }

      function Fk(kk) {
        lT.notify({
          type: xI,
          request: kk
        })
      }
      return lT = new PI, tT || (! function(kk) {
        let {
          onRequestEnd: Fk,
          onRequestStart: Ik
        } = kk;
        qT || (qT = window.fetch);
        window.fetch = function() {
          var kk, Xk;
          const Tk = null !== (kk = rk(arguments[0])) && void 0 !== kk ? kk : "",
            ik = hk(Tk),
            yk = (null !== (Xk = arguments[1]) && void 0 !== Xk ? Xk : {}).method,
            lk = xF();
          return ik || Ik({
            url: Tk,
            method: yk,
            requestId: lk,
            apiType: iT
          }), qT.apply(this, arguments).then((kk => (ik || Fk({
            url: Tk,
            method: yk,
            requestId: lk,
            apiType: iT
          }), kk))).catch((kk => {
            throw ik || Fk({
              url: Tk,
              method: yk,
              requestId: lk,
              apiType: iT
            }), kk
          }))
        }
      }({
        onRequestStart: kk,
        onRequestEnd: Fk
      }), function(kk) {
        let {
          onRequestStart: Fk,
          onRequestEnd: Ik
        } = kk;
        aT || (aT = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const kk = arguments[1],
            Xk = hk(kk),
            Tk = arguments[0],
            ik = xF();
          this.addEventListener("loadstart", (function() {
            Xk || Fk({
              url: kk,
              method: Tk,
              requestId: ik,
              apiType: yT
            })
          })), this.addEventListener("load", (function() {
            Xk || Ik({
              url: kk,
              method: Tk,
              requestId: ik,
              apiType: yT
            })
          })), this.addEventListener("error", (function() {
            Xk || Ik({
              url: kk,
              method: Tk,
              requestId: ik,
              apiType: yT
            })
          })), this.addEventListener("abort", (function() {
            Xk || Ik({
              url: kk,
              method: Tk,
              requestId: ik,
              apiType: yT
            })
          })), aT.apply(this, arguments)
        }
      }({
        onRequestStart: kk,
        onRequestEnd: Fk
      }), tT = !0), lT
    }
    let jT, eT = !1;
    let wT = function(kk) {
      return kk[kk.Started = 0] = "Started", kk[kk.Halted = 1] = "Halted", kk[kk.Cancelled = 2] = "Cancelled", kk[kk.Ended = 3] = "Ended", kk
    }({});
    var HT = class {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = kk, this.logDebug = Fk, this.initialActivityTimeout = Ik, this.http = ZT(), this.dom = TT(), this.perf = (LT || (LT = new PI), eT || (jT = AX.subscribe((kk => {
          "resource" === kk.type && LT.notify({
            type: "resource-entry"
          })
        })), eT = !0), LT), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new PI).merge(this.http, this.dom, this.perf).takeWhile((() => [wT.Started, wT.Halted].includes(this.userAction.getState()))).filter((kk => !!(this.userAction.getState() !== wT.Halted || FT(kk) && this.runningRequests.has(kk.request.requestId)))).subscribe((kk => {
          (function(kk) {
            return kk.type === JI
          })(kk) && this.runningRequests.set(kk.request.requestId, kk.request), FT(kk) && this.runningRequests.delete(kk.request.requestId), FT(kk) ? this.userAction.getState() === wT.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((kk => [wT.Ended, wT.Cancelled].includes(kk))).first().subscribe((() => this.cleanup())), this.startupTid = kT(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === wT.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === wT.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = kT(this.haltTid, (() => {
          this.userAction.getState() === wT.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var kk, Fk;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (kk = this.allMonitorsSub) || void 0 === kk || kk.unsubscribe(), null === (Fk = this.stateSub) || void 0 === Fk || Fk.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(kk) {
        void 0 !== kk && window.clearTimeout(kk)
      }
    };

    function JT(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dF;
      var Ik;
      const {
        api: Xk,
        config: Tk,
        internalLogger: ik
      } = kk, yk = MX(null === (Ik = Tk.userActionsInstrumentation) || void 0 === Ik ? void 0 : Ik.initialActivityTimeout, 100, Fk);
      return {
        processUserEvent: function(kk) {
          var Fk, Ik;
          const ik = null !== (Fk = null === (Ik = Tk.userActionsInstrumentation) || void 0 === Ik ? void 0 : Ik.dataAttributeName) && void 0 !== Fk ? Fk : mX,
            yk = kk.target;
          if (!(yk instanceof Element)) return;
          const lk = function(kk, Fk) {
              let Ik = kk;
              for (; Ik;) {
                if (Ik.hasAttribute(Fk)) return Ik;
                Ik = Ik.parentElement
              }
              return null
            }(yk, DX(ik)),
            ak = function(kk, Fk) {
              if (!kk) return;
              const Ik = function(kk) {
                  return DX(kk).slice(5).replace(/-(.)/g, ((kk, Fk) => Fk.toUpperCase()))
                }(Fk),
                Xk = kk.dataset;
              for (const Tk in Xk)
                if (Tk === Ik) return Xk[Tk]
            }(lk, ik);
          if (!lk || !ak) return;
          const qk = function(kk, Fk) {
            const Ik = kk.getAttribute(function(kk) {
              const Fk = DX(kk);
              return Fk.endsWith("-name") ? `${Fk.slice(0,-5)}-timeout` : `${Fk}-timeout`
            }(Fk));
            return null === Ik ? void 0 : Number(Ik)
          }(lk, ik);
          Xk.startUserAction(ak, {}, {
            triggerName: kk.type,
            initialActivityTimeout: qk
          })
        },
        processUserActionStarted: function(kk, Ik) {
          const Xk = kk,
            Tk = MX(Ik, yk, Fk);
          new HT(Xk, ik.debug, Tk).attach()
        }
      }
    }
    const xT = "user_action_start",
      PT = {
        Normal: "normal",
        Critical: "critical"
      };
    var KT = class {
        constructor() {
          this.buffer = []
        }
        addItem(kk) {
          this.buffer.push(kk)
        }
        flushBuffer(kk) {
          if (Ok(kk))
            for (const Fk of this.buffer) kk(Fk);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      QT = class extends PI {
        constructor(kk) {
          let {
            name: Fk,
            parentId: Ik,
            trigger: Xk,
            transports: Tk,
            attributes: ik,
            trackUserActionsExcludeItem: yk,
            importance: lk = PT.Normal,
            pushEvent: ak
          } = kk;
          super(), this.name = Fk, this.attributes = ik, this.id = xF(), this.trigger = Xk, this.parentId = null !== Ik && void 0 !== Ik ? Ik : this.id, this.trackUserActionsExcludeItem = yk, this.importance = lk, this._pushEvent = ak, this._itemBuffer = new KT, this._transports = Tk, this._state = 0, this._start()
        }
        addItem(kk) {
          return 0 === this._state && (this._itemBuffer.addItem(kk), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = jF(), this._startTimeMono = eF())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((kk => {
            this._transports.execute(kk)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const kk = jF(),
            Fk = eF() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((kk => {
            if (function(kk, Fk) {
                return (null === Fk || void 0 === Fk ? void 0 : Fk(kk)) || "measurement" === kk.type && "web-vitals" === kk.payload.type
              }(kk, this.trackUserActionsExcludeItem)) return void this._transports.execute(kk);
            const Fk = MF(MF({}, kk), {}, {
              payload: MF(MF({}, kk.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Fk)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", MF({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: kk.toString(),
            userActionDuration: Fk.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, UF(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: kk => (kk.action = {
              id: this.id,
              name: this.name
            }, kk)
          })
        }
        getState() {
          return this._state
        }
      };
    const sT = new PI;

    function VT(kk, Fk) {
      return !!kk && (0 === (null === kk || void 0 === kk ? void 0 : kk.getState()) && (kk.addItem(Fk), !0))
    }
    var zT = class extends II {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = XI
        }
        initialize() {
          const {
            processUserEvent: kk,
            processUserActionStarted: Fk
          } = JT(wk, (kk => this.logWarn(kk)));
          this._processUserEvent = kk, this._processKeydown = Fk => {
            [" ", "Enter"].includes(Fk.key) && kk(Fk)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = sT.subscribe((kk => {
            let {
              type: Ik,
              userAction: Xk,
              initialActivityTimeout: Tk
            } = kk;
            "user_action_start" === Ik && Fk(Xk, Tk)
          }))
        }
        destroy() {
          var kk;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (kk = this._userActionSub) || void 0 === kk || kk.unsubscribe()
        }
      },
      ST = class extends II {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = XI, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(kk) {
          const Fk = {
            blockedURI: kk.blockedURI,
            columnNumber: kk.columnNumber,
            disposition: kk.disposition,
            documentURI: kk.documentURI,
            effectiveDirective: kk.effectiveDirective,
            lineNumber: kk.lineNumber,
            originalPolicy: kk.originalPolicy,
            referrer: kk.referrer,
            sample: kk.sample,
            sourceFile: kk.sourceFile,
            statusCode: kk.statusCode,
            violatedDirective: kk.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", UF(Fk))
        }
      };
    var oT = class extends PI {
      constructor(kk, Fk) {
        var Ik, Xk, Tk, ik;
        super(), this._tracking = !1, this.eventsObservable = kk, this._options = {
          inactivityMs: null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.inactivityMs) && void 0 !== Ik ? Ik : 100,
          drainTimeoutMs: null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.drainTimeoutMs) && void 0 !== Xk ? Xk : 1e4,
          isOperationStart: null !== (Tk = null === Fk || void 0 === Fk ? void 0 : Fk.isOperationStart) && void 0 !== Tk ? Tk : () => {},
          isOperationEnd: null !== (ik = null === Fk || void 0 === Fk ? void 0 : Fk.isOperationEnd) && void 0 !== ik ? ik : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((kk => {
          var Fk;
          this._lastEventTime = eF(), null === (Fk = this._currentEvents) || void 0 === Fk || Fk.push(kk);
          const Ik = this._options.isOperationStart(kk);
          var Xk;
          Ik && (null === (Xk = this._activeOperations) || void 0 === Xk || Xk.set(Ik, !0));
          const Tk = this._options.isOperationEnd(kk);
          var ik;
          Tk && (null === (ik = this._activeOperations) || void 0 === ik || ik.delete(Tk));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = eF(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let kk;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), kk = this.hasActiveOperations() ? eF() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: kk
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = vT(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = vT(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(kk) {
        kk && clearTimeout(kk)
      }
    };

    function vT(kk, Fk, Ik) {
      return kk && clearTimeout(kk), kk = setTimeout((() => {
        Fk()
      }), Ik)
    }
    let ET;
    const OT = new Set,
      nT = new Map;
    let GT, pT, uT, bT, RT, UT, CT, NT, cT = !1;
    var WT = class extends II {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = XI
      }
      initialize() {
        const kk = ZT(),
          Fk = TT(),
          Ik = function() {
            function kk(kk, Fk) {
              const Ik = null !== Fk && void 0 !== Fk ? Fk : location.href;
              Ik !== pT && (GT.notify({
                type: "url-change",
                from: pT,
                to: Ik,
                trigger: kk
              }), pT = Ik)
            }
            if (GT || (GT = new PI, pT = location.href), !cT)
              if ("navigation" in window && "NavigateEvent" in window) {
                CT = Fk => {
                  try {
                    const Ik = null === Fk || void 0 === Fk ? void 0 : Fk.destination;
                    (null === Ik || void 0 === Ik ? void 0 : Ik.sameDocument) && "string" === typeof Ik.url && kk("navigate", Ik.url)
                  } catch (Ik) {}
                }, window.navigation.addEventListener("navigate", CT);
                const Fk = window.NavigateEvent;
                Fk && Fk.prototype && "function" === typeof Fk.prototype.intercept && (NT || (NT = Fk.prototype.intercept), Fk.prototype.intercept = function(Fk) {
                  try {
                    const Fk = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Ik = null === this || void 0 === this ? void 0 : this.destination;
                    Fk && Ik && !1 === Ik.sameDocument && "string" === typeof Ik.url && kk("navigate-intercept", Ik.url)
                  } catch (Ik) {}
                  return NT.call(this, Fk)
                }), cT = !0
              } else uT || (uT = window.history.pushState), window.history.pushState = function() {
                for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
                const Tk = uT.apply(window.history, Ik);
                return kk("pushState"), Tk
              }, bT || (bT = window.history.replaceState), window.history.replaceState = function() {
                for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
                const Tk = bT.apply(window.history, Ik);
                return kk("replaceState"), Tk
              }, RT = () => kk("popstate"), UT = () => kk("hashchange"), window.addEventListener("popstate", RT), window.addEventListener("hashchange", UT), cT = !0;
            return GT
          }(),
          Xk = (Tk = ["pointerdown", "keydown"], ET || (ET = new PI), Tk.forEach((kk => {
            if (!OT.has(kk)) {
              const Fk = () => {
                ET.notify({
                  type: "interaction",
                  name: kk
                })
              };
              window.addEventListener(kk, Fk), OT.add(kk), nT.set(kk, Fk)
            }
          })), ET);
        var Tk;
        const ik = new oT((new PI).merge(kk, Fk, Ik), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: kk => function(kk) {
            return kk.type === JI
          }(kk) ? kk.request.requestId : void 0,
          isOperationEnd: kk => function(kk) {
            return kk.type === xI
          }(kk) ? kk.request.requestId : void 0
        });
        ik.filter((kk => "tracking-ended" === kk.message)).subscribe((kk => {
          var Fk, Ik;
          if ((null === (Fk = kk.events) || void 0 === Fk ? void 0 : Fk.some((kk => "url-change" === kk.type))) && (null === (Ik = kk.events) || void 0 === Ik ? void 0 : Ik.some((kk => "dom-mutation" === kk.type)))) {
            var Xk;
            const Fk = null === (Xk = kk.events) || void 0 === Xk ? void 0 : Xk.find((kk => "url-change" === kk.type));
            wk.api.pushEvent("faro.navigation", {
              fromUrl: null === Fk || void 0 === Fk ? void 0 : Fk.from,
              toUrl: null === Fk || void 0 === Fk ? void 0 : Fk.to,
              sameDocument: String(!0),
              duration: kk.duration
            })
          }
        })), Xk.subscribe((() => {
          ik.startTracking()
        }))
      }
    };

    function fT() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Fk = [new zT, new bI, new uX, new TI, new UI, new WT];
      return !1 !== kk.enablePerformanceInstrumentation && Fk.unshift(new gX), !1 !== kk.enableContentSecurityPolicyInstrumentation && Fk.push(new ST), !1 !== kk.captureConsole && Fk.push(new pI), Fk
    }
    var BT = Ik(6669);
    let dT, YT;

    function AT() {
      const kk = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return dT === kk && YT || (YT = new BT.UAParser(kk).getResult(), dT = kk), YT
    }
    const gT = () => {
        const {
          browser: kk,
          os: Fk,
          ua: Ik
        } = AT(), {
          name: Xk,
          version: Tk
        } = kk, {
          name: ik,
          version: yk
        } = Fk, lk = navigator.language, ak = Ik.includes("Mobi"), qk = function() {
          if (!Xk || !Tk) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Xk && void 0 !== Xk ? Xk : RI,
            version: null !== Tk && void 0 !== Tk ? Tk : RI,
            os: `${null!==ik&&void 0!==ik?ik:RI} ${null!==yk&&void 0!==yk?yk:RI}`,
            userAgent: null !== Ik && void 0 !== Ik ? Ik : RI,
            language: null !== lk && void 0 !== lk ? lk : RI,
            mobile: ak,
            brands: null !== qk && void 0 !== qk ? qk : RI,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      mT = () => {
        const {
          name: kk,
          version: Fk
        } = AT().os;
        if (!kk && !Fk) return {};
        const Ik = {};
        return kk && (Ik.name = kk), Fk && (Ik.version = Fk), {
          os: Ik
        }
      };

    function hT(kk) {
      var Fk, Ik, Xk;
      return {
        id: null !== (Fk = null === (Ik = wk.config) || void 0 === Ik || null === (Ik = Ik.sessionTracking) || void 0 === Ik || null === (Xk = Ik.generateSessionId) || void 0 === Xk ? void 0 : Xk.call(Ik)) && void 0 !== Fk ? Fk : xF(),
        attributes: kk
      }
    }
    const rT = () => ({
      sdk: {
        name: "faro-web",
        version: XI
      }
    });
    var DT = class extends FI {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let MT = function(kk) {
      return kk.EXCEPTION = "exception", kk.LOG = "log", kk.MEASUREMENT = "measurement", kk.TRACE = "trace", kk.EVENT = "event", kk
    }({});
    const ki = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Fi(kk, Fk) {
      var Ik, Xk;
      if (void 0 === Fk) return kk;
      if (void 0 === kk) return {
        resourceSpans: Fk
      };
      const Tk = null === (Ik = kk.resourceSpans) || void 0 === Ik ? void 0 : Ik[0];
      if (void 0 === Tk) return kk;
      const ik = (null === Tk || void 0 === Tk ? void 0 : Tk.scopeSpans) || [],
        yk = (null === Fk || void 0 === Fk || null === (Xk = Fk[0]) || void 0 === Xk ? void 0 : Xk.scopeSpans) || [];
      return MF(MF({}, kk), {}, {
        resourceSpans: [MF(MF({}, Tk), {}, {
          scopeSpans: [...ik, ...yk]
        })]
      })
    }

    function Ii(kk) {
      let Fk = {
        meta: {}
      };
      return void 0 !== kk[0] && (Fk.meta = kk[0].meta), kk.forEach((kk => {
        switch (kk.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Ik = ki[kk.type],
              Xk = Fk[Ik];
            Fk = MF(MF({}, Fk), {}, {
              [Ik]: void 0 === Xk ? [kk.payload] : [...Xk, kk.payload]
            });
            break
          }
          case "trace":
            Fk = MF(MF({}, Fk), {}, {
              traces: Fi(Fk.traces, kk.payload.resourceSpans)
            })
        }
      })), Fk
    }
    var Xi = class extends DT {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-console", this.version = XI
      }
      send(kk) {
        var Fk;
        return this.unpatchedConsole[null !== (Fk = this.options.level) && void 0 !== Fk ? Fk : KI.DEBUG]("New event", Ii([kk]))
      }
    };
    const Ti = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ii = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      yi = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      li = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      ai = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      qi = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Li(kk) {
      let {
        weekday: Fk,
        day: Ik,
        month: Xk,
        year: Tk,
        hour: ik,
        minute: yk,
        second: lk
      } = kk;
      if (Tk < 1900 || Ik < 1 || ik > 23 || yk > 59 || lk > 60) return;
      const ak = 60 === lk,
        qk = new Date(0);
      return qk.setUTCFullYear(Tk, Xk, Ik), qk.setUTCHours(ik, yk, ak ? 59 : lk, 0), qk.getUTCDay() === Fk && qk.getUTCDate() === Ik && qk.getUTCMonth() === Xk && qk.getUTCFullYear() === Tk && qk.getUTCHours() === ik && qk.getUTCMinutes() === yk && qk.getUTCSeconds() === (ak ? 59 : lk) ? qk.getTime() + (ak ? 1e3 : 0) : void 0
    }
    var ti = class {
      constructor(kk) {
        this.options = kk, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var kk = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Fk = this.sequence++;
        let Ik = !1;
        return {
          deliver: function() {
            var Ik = YX((function*(Ik) {
              const Xk = kk.options.getNow();
              let Tk, ik = 0;
              for (;;) {
                var yk, lk, ak;
                const qk = kk.options.retry.maxAttempts - ik,
                  Lk = yield kk.runAttempt((() => Ik(qk, kk.unloading)), ik > 0);
                if (ik += Lk.attemptsMade, "success" === Lk.kind) return {
                  kind: "success",
                  attempts: ik,
                  elapsedTimeMs: kk.options.getNow() - Xk
                };
                if (Tk = Lk.failure, "terminal" === Lk.kind || kk.unloading) return {
                  kind: "terminal",
                  attempts: ik,
                  elapsedTimeMs: kk.options.getNow() - Xk,
                  failure: Tk
                };
                if (ik >= kk.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: ik,
                  elapsedTimeMs: kk.options.getNow() - Xk,
                  failure: Tk,
                  reason: "retries-exhausted"
                };
                if (null != Lk.retryAfterMs && Lk.retryAfterMs > kk.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: ik,
                  elapsedTimeMs: kk.options.getNow() - Xk,
                  failure: Tk,
                  reason: "retry-after-too-long"
                };
                const tk = Math.min(null !== (yk = Lk.retryAfterMs) && void 0 !== yk ? yk : kk.options.retry.initialBackoffMs * Math.pow(kk.options.retry.backoffMultiplier, ik - 1), kk.options.retry.maxBackoffMs);
                if (null === (lk = (ak = kk.options).onRetry) || void 0 === lk || lk.call(ak, tk, ik + 1), yield kk.waitForTurn(Fk, tk)) {
                  const Fk = kk.options.retry.maxAttempts - ik,
                    Tk = yield kk.runAttempt((() => Ik(Fk, !0)));
                  return ik += Tk.attemptsMade, {
                    kind: "success" === Tk.kind ? "success" : "terminal",
                    attempts: ik,
                    elapsedTimeMs: kk.options.getNow() - Xk,
                    failure: "success" === Tk.kind ? void 0 : Tk.failure
                  }
                }
              }
            }));
            return function(kk) {
              return Ik.apply(this, arguments)
            }
          }(),
          release: () => {
            Ik || (Ik = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const kk = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Fk of kk) Fk.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Ik, Xk) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Fk = () => {
                this.inProgress--, this.runNextAttempt()
              };
              kk().then((kk => {
                Fk(), Ik(kk)
              }), (kk => {
                Fk(), Xk(kk)
              }))
            },
            isRedelivery: Fk
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const kk = this.options.getNow(),
            Fk = this.attemptQueue.findIndex((Fk => {
              let {
                isRedelivery: Ik
              } = Fk;
              return this.unloading || !Ik || kk >= this.nextSendAt
            }));
          if (Fk < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - kk)));
          const [Ik] = this.attemptQueue.splice(Fk, 1);
          Ik.isRedelivery && !this.unloading && (this.nextSendAt = kk + 1), Ik.run()
        }
      }
      waitForTurn(kk, Fk) {
        const Ik = Math.min(Fk * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Fk => {
          this.waiting.push({
            sequence: kk,
            readyAt: this.options.getNow() + Ik,
            resolve: Fk
          }), this.waiting.sort(((kk, Fk) => kk.readyAt === Fk.readyAt ? kk.sequence - Fk.sequence : kk.readyAt - Fk.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const kk = this.waiting[0],
          Fk = kk.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Fk = this.waiting.indexOf(kk);
          Fk >= 0 && this.waiting.splice(Fk, 1), kk.resolve(!1), this.scheduleNext()
        }), Math.max(0, Fk - this.options.getNow()))
      }
    };

    function Zi(kk, Fk) {
      if (null == kk) return {};
      var Ik, Xk, Tk = function(kk, Fk) {
        if (null == kk) return {};
        var Ik = {};
        for (var Xk in kk)
          if ({}.hasOwnProperty.call(kk, Xk)) {
            if (Fk.includes(Xk)) continue;
            Ik[Xk] = kk[Xk]
          } return Ik
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ik = Object.getOwnPropertySymbols(kk);
        for (Xk = 0; Xk < ik.length; Xk++) Ik = ik[Xk], Fk.includes(Ik) || {}.propertyIsEnumerable.call(kk, Ik) && (Tk[Ik] = kk[Ik])
      }
      return Tk
    }

    function ji(kk) {
      const {
        size: Fk,
        concurrency: Ik
      } = kk, Xk = [];
      let Tk = 0;
      const ik = () => {
        if (Tk < Ik && Xk.length) {
          const {
            producer: kk,
            resolve: Fk,
            reject: Ik
          } = Xk.shift();
          Tk++, kk().then((kk => {
            Tk--, ik(), Fk(kk)
          }), (kk => {
            Tk--, ik(), Ik(kk)
          }))
        }
      };
      return {
        add: kk => {
          if (Xk.length + Tk >= Fk) throw new Error("Task buffer full");
          return new Promise(((Fk, Ik) => {
            Xk.push({
              producer: kk,
              resolve: Fk,
              reject: Ik
            }), ik()
          }))
        }
      }
    }
    const ei = ["headers"],
      wi = ["keepalive", "signal"],
      Hi = new Set([408, 425, 429, 500, 502, 503, 504]),
      Ji = new Set([429, 503]);
    let xi = 0,
      Pi = 0;
    var Ki = class extends Error {};
    var Qi = class extends DT {
      constructor(kk) {
        var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk;
        super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = XI, this.pendingCustomSends = 0, this.getNow = null !== (Fk = kk.getNow) && void 0 !== Fk ? Fk : Date.now, this.requestTimeoutMs = null !== (Ik = kk.requestTimeoutMs) && void 0 !== Ik ? Ik : 1e4, this.compressionEnabled = null !== (Xk = kk.requestCompression) && void 0 !== Xk && Xk && "undefined" !== typeof CompressionStream, kk.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new ti({
          bufferSize: null !== (Tk = kk.bufferSize) && void 0 !== Tk ? Tk : 30,
          concurrency: null !== (ik = kk.concurrency) && void 0 !== ik ? ik : 5,
          retry: {
            maxAttempts: null !== (yk = null === (lk = kk.retry) || void 0 === lk ? void 0 : lk.maxAttempts) && void 0 !== yk ? yk : 3,
            initialBackoffMs: null !== (ak = null !== (qk = null === (Lk = kk.retry) || void 0 === Lk ? void 0 : Lk.initialBackoffMs) && void 0 !== qk ? qk : kk.defaultRateLimitBackoffMs) && void 0 !== ak ? ak : 1e3,
            maxBackoffMs: null !== (tk = null === (Zk = kk.retry) || void 0 === Zk ? void 0 : Zk.maxBackoffMs) && void 0 !== tk ? tk : 3e4,
            backoffMultiplier: null !== (jk = null === (ek = kk.retry) || void 0 === ek ? void 0 : ek.backoffMultiplier) && void 0 !== jk ? jk : 2
          },
          getNow: this.getNow,
          getRandom: null !== (wk = kk.getRandom) && void 0 !== wk ? wk : Math.random,
          onRetry: (kk, Fk) => {
            this.logDebug(`Retrying failed request after ${kk}ms. Attempt ${Fk}.`)
          }
        }), this.customPromiseBuffer = ji({
          size: null !== (Hk = kk.bufferSize) && void 0 !== Hk ? Hk : 30,
          concurrency: null !== (Jk = kk.concurrency) && void 0 !== Jk ? Jk : 5
        }), this.defaultPromiseBuffer = {
          add: kk => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(kk);
            const Fk = this.deliveryQueue.reserve();
            if (!Fk) throw new Error("Task buffer full");
            return this.runBufferedTask(Fk, kk)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (kk => {
          kk.persisted && this.deliveryQueue.resume()
        })))
      }
      send(kk) {
        var Fk = this;
        return YX((function*() {
          const Ik = Fk.promiseBuffer;
          if (Ik !== Fk.defaultPromiseBuffer || Ik.add !== Fk.defaultBufferAdd) {
            Fk.pendingCustomSends++;
            try {
              yield Ik.add((() => Fk.deliver(kk)))
            } catch (Xk) {
              Fk.logError("Permanent delivery failure", {
                error: Xk,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Fk.pendingCustomSends--
            }
          } else yield Fk.deliver(kk)
        }))()
      }
      runBufferedTask(kk, Fk) {
        return YX((function*() {
          let Ik;
          try {
            return yield kk.deliver(YX((function*() {
              return Ik = yield Fk(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Ik
          } finally {
            kk.release()
          }
        }))()
      }
      deliver(kk) {
        var Fk = this;
        return YX((function*() {
          const Ik = Fk.deliveryQueue.reserve();
          if (Ik) try {
            const Xk = yield Fk.prepareRequest(kk), Tk = yield Ik.deliver(((kk, Ik) => Fk.performAttempt(Xk, kk, Ik)));
            "terminal" === Tk.kind && Fk.logError("retries-exhausted" === Tk.reason ? "Delivery retries exhausted" : "Permanent delivery failure", tF(tF({}, Tk.failure), {}, {
              reason: Tk.reason,
              attempts: Tk.attempts,
              elapsedTimeMs: Tk.elapsedTimeMs
            }))
          } catch (Xk) {
            Fk.logError("Permanent delivery failure", {
              error: Xk,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Ik.release()
          } else Fk.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var kk;
        return [this.options.url].concat(null !== (kk = this.config.ignoreUrls) && void 0 !== kk ? kk : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(kk) {
        var Fk = this;
        return YX((function*() {
          var Ik, Xk;
          const Tk = Ii(kk),
            ik = null === (Ik = Tk.meta.session) || void 0 === Ik ? void 0 : Ik.id,
            yk = JSON.stringify(Tk),
            lk = null !== (Xk = Fk.options.requestOptions) && void 0 !== Xk ? Xk : {},
            {
              headers: ak = {}
            } = lk,
            qk = Zi(lk, ei),
            {
              keepalive: Lk,
              signal: tk
            } = qk,
            Zk = Zi(qk, wi),
            jk = {};
          for (const [kk, Fk] of Object.entries(ak)) jk[kk] = "function" === typeof Fk ? yield Fk(): Fk;
          let ek = yk,
            wk = function(kk) {
              return "undefined" === typeof TextEncoder ? kk.length : (new TextEncoder).encode(kk).byteLength
            }(yk);
          const Hk = {};
          return Fk.compressionEnabled && (ek = yield Fk.compress(yk), wk = ek.size, Hk["Content-Encoding"] = "gzip"), {
            bodySize: wk,
            sessionId: ik,
            requestInit: tF({
              method: "POST",
              headers: tF(tF(tF(tF(tF({
                "Content-Type": "application/json"
              }, Hk), jk), Fk.options.apiKey ? {
                "x-api-key": Fk.options.apiKey
              } : {}), ik ? {
                "x-faro-session-id": ik
              } : {}), {}, {
                "Idempotency-Key": xF(20)
              }),
              body: ek
            }, Zk)
          }
        }))()
      }
      performAttempt(kk, Fk, Ik) {
        var Xk = this;
        return YX((function*() {
          var Tk;
          const ik = null === (Tk = Xk.options.requestOptions) || void 0 === Tk ? void 0 : Tk.signal;
          if (null === ik || void 0 === ik ? void 0 : ik.aborted) return {
            kind: "terminal",
            failure: {
              error: ik.reason
            },
            attemptsMade: 0
          };
          let yk = 0;
          try {
            var lk;
            const Tk = yield Xk.fetchWithKeepaliveFallback(kk.requestInit, kk.bodySize, !!Ik || (null === (lk = Xk.options.requestOptions) || void 0 === lk ? void 0 : lk.keepalive), Fk, (() => yk++));
            if (Xk.handleResponse(Tk, kk.sessionId), Tk.status >= 200 && Tk.status < 300) return {
              kind: "success",
              attemptsMade: yk
            };
            const ik = {
              status: Tk.status
            };
            return !Hi.has(Tk.status) || Ik ? {
              kind: "terminal",
              failure: ik,
              attemptsMade: yk
            } : {
              kind: "retry",
              failure: ik,
              attemptsMade: yk,
              retryAfterMs: Ji.has(Tk.status) ? Xk.getRetryAfterDelayMs(Tk) : void 0
            }
          } catch (ak) {
            const kk = {
              error: ak
            };
            return (null === ik || void 0 === ik ? void 0 : ik.aborted) || !Xk.isFetchNetworkError(ak) || Ik ? {
              kind: "terminal",
              failure: kk,
              attemptsMade: yk
            } : {
              kind: "retry",
              failure: kk,
              attemptsMade: yk
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(kk, Fk, Ik, Xk, Tk) {
        var ik = this;
        return YX((function*() {
          const yk = ik.getNow(),
            lk = ik.reserveKeepalive(Fk, Ik);
          try {
            return yield ik.fetchWithTimeout(tF(tF({}, kk), {}, {
              keepalive: lk.keepalive
            }), ik.requestTimeoutMs, Tk)
          } catch (qk) {
            var ak;
            if (lk.keepalive && Xk > 1 && ik.isFetchNetworkError(qk) && !(qk instanceof Ki) && !(null === (ak = ik.options.requestOptions) || void 0 === ak || null === (ak = ak.signal) || void 0 === ak ? void 0 : ak.aborted)) {
              ik.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Fk = ik.requestTimeoutMs - (ik.getNow() - yk);
              return ik.fetchWithTimeout(tF(tF({}, kk), {}, {
                keepalive: !1
              }), Fk, Tk)
            }
            throw qk
          } finally {
            lk.release()
          }
        }))()
      }
      fetchWithTimeout(kk, Fk, Ik) {
        var Xk = this;
        return YX((function*() {
          var Tk;
          const ik = null === (Tk = Xk.options.requestOptions) || void 0 === Tk ? void 0 : Tk.signal;
          if (Xk.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Ik(), fetch(Xk.options.url, tF(tF({}, kk), {}, {
            signal: ik
          }));
          if (Fk <= 0) throw new Ki("Request timed out");
          const yk = new AbortController,
            lk = () => yk.abort(null === ik || void 0 === ik ? void 0 : ik.reason);
          null === ik || void 0 === ik || ik.addEventListener("abort", lk, {
            once: !0
          });
          let ak = !1;
          const qk = setTimeout((() => {
            ak = !0, yk.abort()
          }), Fk);
          try {
            return Ik(), yield fetch(Xk.options.url, tF(tF({}, kk), {}, {
              signal: yk.signal
            }))
          } catch (Lk) {
            if (ak && !(null === ik || void 0 === ik ? void 0 : ik.aborted)) throw new Ki("Request timed out");
            throw Lk
          } finally {
            clearTimeout(qk), null === ik || void 0 === ik || ik.removeEventListener("abort", lk)
          }
        }))()
      }
      getRetryAfterDelayMs(kk) {
        const Fk = kk.headers.get("Retry-After");
        if (!Fk) return;
        if (/^\d+$/.test(Fk)) {
          const kk = 1e3 * Number(Fk);
          return Number.isFinite(kk) ? kk : Number.POSITIVE_INFINITY
        }
        const Ik = this.getNow(),
          Xk = function(kk, Fk) {
            const Ik = Ti.exec(kk);
            if (Ik) {
              const [, kk, Fk, Xk, Tk, ik, yk, lk] = Ik;
              return Li({
                weekday: li.indexOf(kk),
                day: Number(Fk),
                month: qi.indexOf(Xk),
                year: Number(Tk),
                hour: Number(ik),
                minute: Number(yk),
                second: Number(lk)
              })
            }
            const Xk = ii.exec(kk);
            if (Xk) {
              const [, kk, Ik, yk, lk, ak, qk, Lk] = Xk, tk = new Date(Fk);
              if (Number.isNaN(tk.getTime())) return;
              const Zk = tk.getUTCFullYear();
              let jk = 100 * Math.floor(Zk / 100) + Number(lk);
              jk < Zk && (jk += 100);
              const ek = qi.indexOf(yk),
                wk = {
                  month: ek,
                  day: Number(Ik),
                  hour: Number(ak),
                  minute: Number(qk),
                  second: Number(Lk),
                  millisecond: 0
                },
                Hk = {
                  month: tk.getUTCMonth(),
                  day: tk.getUTCDate(),
                  hour: tk.getUTCHours(),
                  minute: tk.getUTCMinutes(),
                  second: tk.getUTCSeconds(),
                  millisecond: tk.getUTCMilliseconds()
                };
              return (jk > Zk + 50 || jk === Zk + 50 && (ik = Hk, ((Tk = wk).month - ik.month || Tk.day - ik.day || Tk.hour - ik.hour || Tk.minute - ik.minute || Tk.second - ik.second || Tk.millisecond - ik.millisecond) > 0)) && (jk -= 100), Li({
                weekday: ai.indexOf(kk),
                day: Number(Ik),
                month: ek,
                year: jk,
                hour: Number(ak),
                minute: Number(qk),
                second: Number(Lk)
              })
            }
            var Tk, ik;
            const yk = yi.exec(kk);
            if (!yk) return;
            const [, lk, ak, qk, Lk, tk, Zk, jk, ek] = yk;
            return Li({
              weekday: li.indexOf(lk),
              day: Number(null !== qk && void 0 !== qk ? qk : Lk),
              month: qi.indexOf(ak),
              year: Number(ek),
              hour: Number(tk),
              minute: Number(Zk),
              second: Number(jk)
            })
          }(Fk, Ik);
        return null == Xk ? void 0 : Math.max(0, Xk - Ik)
      }
      reserveKeepalive(kk, Fk) {
        if (!1 === Fk || kk > 6e4 || xi + kk > 6e4 || Pi >= 9) return {
          keepalive: !1,
          release: dF
        };
        xi += kk, Pi++;
        let Ik = !1;
        return {
          keepalive: !0,
          release: () => {
            Ik || (Ik = !0, xi -= kk, Pi--)
          }
        }
      }
      handleResponse(kk, Fk) {
        202 === kk.status && "invalid" === kk.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Fk), kk.text().catch(dF)
      }
      isFetchNetworkError(kk) {
        return kk instanceof TypeError || kk instanceof Ki || kk instanceof DOMException && "AbortError" === kk.name
      }
      compress(kk) {
        return YX((function*() {
          const Fk = [],
            Ik = new ReadableStream({
              start(Fk) {
                Fk.enqueue((new TextEncoder).encode(kk)), Fk.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: kk,
              value: Xk
            } = yield Ik.read();
            if (kk) return new Blob(Fk);
            Fk.push(Xk)
          }
        }))()
      }
      extendFaroSession(kk, Fk, Ik) {
        var Xk, Tk;
        const ik = kk.sessionTracking;
        if (!(null === ik || void 0 === ik ? void 0 : ik.enabled)) return void Fk("Session expired.");
        const {
          fetchUserSession: yk,
          storeUserSession: lk
        } = BF(ik), ak = null === (Xk = this.metas.value.session) || void 0 === Xk ? void 0 : Xk.id, qk = null === (Tk = yk()) || void 0 === Tk ? void 0 : Tk.sessionId;
        Ik && Ik === ak && Ik === qk ? (nF({
          fetchUserSession: yk,
          storeUserSession: lk
        })({
          forceSessionExtend: !0
        }), Fk("Session expired; created new session.")) : Fk("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const si = () => {
      const kk = window.k6;
      return {
        k6: tF({
          isK6Browser: !0
        }, (null === kk || void 0 === kk ? void 0 : kk.testRunId) && {
          testRunId: null === kk || void 0 === kk ? void 0 : kk.testRunId
        })
      }
    };
    let Vi, zi;

    function Si() {
      let {
        generatePageId: kk,
        initialPageMeta: Fk
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Ik = location.href;
        return Ok(kk) && Vi !== Ik && (Vi = Ik, zi = kk(location)), {
          page: tF(tF({
            url: Ik
          }, zi ? {
            id: zi
          } : {}), Fk)
        }
      }
    }

    function oi() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kI,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Ik = AF;
      return Fk > 0 && (Ik.error = Fk >= 1 ? function() {
        for (var Fk = arguments.length, Xk = new Array(Fk), Tk = 0; Tk < Fk; Tk++) Xk[Tk] = arguments[Tk];
        kk.error(`${Ik.prefix}\n`, ...Xk)
      } : dF, Ik.warn = Fk >= 2 ? function() {
        for (var Fk = arguments.length, Xk = new Array(Fk), Tk = 0; Tk < Fk; Tk++) Xk[Tk] = arguments[Tk];
        kk.warn(`${Ik.prefix}\n`, ...Xk)
      } : dF, Ik.info = Fk >= 3 ? function() {
        for (var Fk = arguments.length, Xk = new Array(Fk), Tk = 0; Tk < Fk; Tk++) Xk[Tk] = arguments[Tk];
        kk.info(`${Ik.prefix}\n`, ...Xk)
      } : dF, Ik.debug = Fk >= 4 ? function() {
        for (var Fk = arguments.length, Xk = new Array(Fk), Tk = 0; Tk < Fk; Tk++) Xk[Tk] = arguments[Tk];
        kk.debug(`${Ik.prefix}\n`, ...Xk)
      } : dF), Ik
    }
    const vi = "faro",
      Ei = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Oi = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function ni(kk) {
      var Fk, Ik, Tk, ik, yk, lk;
      const ak = [],
        Lk = oi(kk.unpatchedConsole, kk.internalLoggerLevel);
      kk.transports ? ((kk.url || kk.apiKey) && Lk.error('if "transports" is defined, "url" and "apiKey" should not be defined'), ak.push(...kk.transports)) : kk.url ? ak.push(new Qi({
        url: kk.url,
        apiKey: kk.apiKey,
        requestCompression: kk.requestCompression
      })) : Lk.error('either "url" or "transports" must be defined');
      const {
        dedupe: tk = !0,
        eventDomain: Zk = Xk,
        globalObjectKey: jk = vi,
        instrumentations: ek = fT(),
        internalLoggerLevel: wk = gF,
        isolate: Hk = !1,
        logArgsSerializer: Jk = GI,
        metas: xk = ui(kk),
        paused: Pk = !1,
        preventGlobalExposure: Kk = !1,
        unpatchedConsole: Qk = kI,
        url: sk,
        experimental: Vk
      } = kk, zk = Zi(kk, Oi), Sk = null !== (Fk = null === Vk || void 0 === Vk ? void 0 : Vk.trackNavigation) && void 0 !== Fk && Fk, vk = {
        dataAttributeName: DX(null !== (Ik = null === (Tk = kk.userActionsInstrumentation) || void 0 === Tk ? void 0 : Tk.dataAttributeName) && void 0 !== Ik ? Ik : mX),
        excludeItem: null === (ik = kk.userActionsInstrumentation) || void 0 === ik ? void 0 : ik.excludeItem,
        initialActivityTimeout: MX(null === (yk = kk.userActionsInstrumentation) || void 0 === yk ? void 0 : yk.initialActivityTimeout, 100, (kk => Lk.warn(kk)))
      };
      return tF(tF({}, zk), {}, {
        batching: tF(tF({}, Ei), kk.batching),
        dedupe: tk,
        globalObjectKey: jk,
        instrumentations: Gi(ek, kk),
        internalLoggerLevel: wk,
        isolate: Hk,
        logArgsSerializer: Jk,
        metas: xk,
        parseStacktrace: HI,
        paused: Pk,
        preventGlobalExposure: Kk,
        transports: ak,
        unpatchedConsole: Qk,
        eventDomain: Zk,
        ignoreUrls: [...null !== (lk = kk.ignoreUrls) && void 0 !== lk ? lk : [], ...sk ? [sk] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: tF(tF(tF({}, qk), kk.sessionTracking), bi({
          trackGeolocation: kk.trackGeolocation,
          sessionTracking: kk.sessionTracking
        })),
        userActionsInstrumentation: vk,
        experimental: {
          trackNavigation: Sk
        }
      })
    }

    function Gi(kk, Fk) {
      let {
        experimental: Ik
      } = Fk;
      var Xk;
      const Tk = null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.trackNavigation) && void 0 !== Xk && Xk;
      return kk.filter((kk => !("@grafana/faro-web-sdk:instrumentation-navigation" === kk.name && !Tk)))
    }

    function ui(kk) {
      var Fk, Ik, Xk;
      const {
        page: Tk,
        generatePageId: ik
      } = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.pageTracking) && void 0 !== Fk ? Fk : {}, yk = [gT, mT, Si({
        generatePageId: ik,
        initialPageMeta: Tk
      }), ...null !== (Ik = kk.metas) && void 0 !== Ik ? Ik : [], rT];
      return Ek(null === (Xk = window) || void 0 === Xk ? void 0 : Xk.k6) ? [...yk, si] : yk
    }

    function bi(kk) {
      let {
        trackGeolocation: Fk,
        sessionTracking: Ik
      } = kk;
      var Xk;
      const Tk = {};
      return Sk(Fk) && (Tk.geoLocationTrackingEnabled = Fk), gk(Tk) ? {} : {
        session: tF(tF({}, null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.session) && void 0 !== Xk ? Xk : {}), {}, {
          overrides: Tk
        })
      }
    }
    const Ri = new WeakSet;

    function Ui(kk) {
      return Ri.add(kk), kk
    }

    function Ci(kk, Fk) {
      if (kk.capture) return Ui(kk.capture(Fk));
      const Ik = Ui(kk.value);
      return null === Fk || void 0 === Fk || Fk(), Ik
    }

    function Ni(kk) {
      const Fk = `__faroBundleId_${kk}`,
        Ik = null === Lk || void 0 === Lk ? void 0 : Lk[Fk];
      if ("string" === typeof Ik && "" !== Ik) return Ik;
      const Xk = "undefined" !== typeof window ? window[Fk] : void 0;
      return "string" === typeof Xk && "" !== Xk ? Xk : void 0
    }

    function ci(kk) {
      var Fk, Ik;
      const Xk = kk.config.app.name,
        Tk = Xk ? function(kk) {
          return null === Lk || void 0 === Lk ? void 0 : Lk[`__faroGitHash_${kk}`]
        }(Xk) : void 0,
        ik = {
          sdk: {
            version: XI,
            name: "faro"
          },
          app: MF({
            bundleId: Xk && Ni(Xk)
          }, void 0 !== Tk ? {
            gitHash: Tk
          } : {})
        },
        yk = null === (Fk = kk.config.sessionTracking) || void 0 === Fk ? void 0 : Fk.session;
      yk && kk.api.setSession(yk), kk.config.app && (ik.app = MF(MF({}, kk.config.app), ik.app)), kk.config.user && (ik.user = kk.config.user), kk.config.view && (ik.view = kk.config.view), kk.metas.add(ik, ...null !== (Ik = kk.config.metas) && void 0 !== Ik ? Ik : [])
    }
    var Wi = class {
      constructor(kk, Fk) {
        var Ik, Xk;
        this.signalBuffer = [], this.itemLimit = null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.itemLimit) && void 0 !== Ik ? Ik : 50, this.sendTimeout = null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.sendTimeout) && void 0 !== Xk ? Xk : 250, this.paused = (null === Fk || void 0 === Fk ? void 0 : Fk.paused) || !1, this.sendFn = kk, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(kk) {
        this.paused || (this.signalBuffer.push(kk), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(kk) {
        const Fk = new Map;
        return kk.forEach((kk => {
          const Ik = JSON.stringify(kk.meta);
          let Xk = Fk.get(Ik);
          Xk = void 0 === Xk ? [kk] : [...Xk, kk], Fk.set(Ik, Xk)
        })), Array.from(Fk.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const kk = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(kk).forEach(this.sendFn)
        } catch (Fk) {
          throw this.signalBuffer = [...kk, ...this.signalBuffer], this.trimBufferToLimit(), Fk
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function fi(kk, Fk, Ik, Xk) {
      var Tk;
      Fk.debug("Initializing transports");
      const ik = [];
      let yk = [];
      const lk = kk => {
        let Fk = kk;
        for (const Xk of yk) {
          const kk = Fk.map(Xk).filter(Boolean);
          if (0 === kk.length) return [];
          Fk = Bi(kk, Ik)
        }
        return Fk
      };
      let ak;
      (null === (Tk = Ik.batching) || void 0 === Tk ? void 0 : Tk.enabled) && (ak = new Wi((kk => {
        const Ik = lk(kk);
        if (0 !== Ik.length)
          for (const Xk of ik) Fk.debug(`Transporting item using ${Xk.name}\n`, Ik), Xk.isBatched() && Xk.send(Ik)
      }), {
        sendTimeout: Ik.batching.sendTimeout,
        itemLimit: Ik.batching.itemLimit,
        paused: Ik.paused
      }));
      return {
        add: function() {
          Fk.debug("Adding transports");
          for (var Tk = arguments.length, yk = new Array(Tk), lk = 0; lk < Tk; lk++) yk[lk] = arguments[lk];
          yk.forEach((Tk => {
            Fk.debug(`Adding "${Tk.name}" transport`), ik.some((kk => kk === Tk)) ? Fk.warn(`Transport ${Tk.name} is already added`) : (Tk.unpatchedConsole = kk, Tk.internalLogger = Fk, Tk.config = Ik, Tk.metas = Xk, ik.push(Tk))
          }))
        },
        addBeforeSendHooks: function() {
          Fk.debug("Adding beforeSendHooks\n", yk);
          for (var kk = arguments.length, Ik = new Array(kk), Xk = 0; Xk < kk; Xk++) Ik[Xk] = arguments[Xk];
          Ik.forEach((kk => {
            kk && yk.push(kk)
          }))
        },
        getBeforeSendHooks: () => [...yk],
        execute: kk => {
          var Tk;
          if (!Ik.paused && WF(Xk).shouldCapture()) {
            if (tk = kk.meta, !Ri.has(tk)) {
              var yk, qk, Lk;
              const Fk = null === (yk = Xk.value.session) || void 0 === yk ? void 0 : yk.id,
                Tk = Ci(Xk);
              if (Ik.paused) return;
              const ik = MF({}, kk.meta);
              (null === (qk = ik.session) || void 0 === qk ? void 0 : qk.id) === Fk && (null === (Lk = Tk.session) || void 0 === Lk ? void 0 : Lk.id) !== Fk && (void 0 === Tk.session ? delete ik.session : ik.session = Tk.session), kk = MF(MF({}, kk), {}, {
                meta: Ui(ik)
              })
            }
            var tk;
            (null === (Tk = Ik.batching) || void 0 === Tk ? void 0 : Tk.enabled) && (null === ak || void 0 === ak || ak.addItem(kk)), (kk => {
              var Xk;
              if ((null === (Xk = Ik.batching) || void 0 === Xk ? void 0 : Xk.enabled) && ik.every((kk => kk.isBatched()))) return;
              const [Tk] = lk([kk]);
              if (void 0 !== Tk)
                for (const lk of ik) {
                  var yk;
                  Fk.debug(`Transporting item using ${lk.name}\n`, Tk), lk.isBatched() ? (null === (yk = Ik.batching) || void 0 === yk ? void 0 : yk.enabled) || lk.send([Tk]) : lk.send(Tk)
                }
            })(kk)
          }
        },
        isPaused: () => Ik.paused,
        pause: () => {
          Fk.debug("Pausing transports"), null === ak || void 0 === ak || ak.pause(), Ik.paused = !0
        },
        remove: function() {
          Fk.debug("Removing transports");
          for (var kk = arguments.length, Ik = new Array(kk), Xk = 0; Xk < kk; Xk++) Ik[Xk] = arguments[Xk];
          Ik.forEach((kk => {
            Fk.debug(`Removing "${kk.name}" transport`);
            const Ik = ik.indexOf(kk); - 1 !== Ik ? ik.splice(Ik, 1) : Fk.warn(`Transport "${kk.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var kk = arguments.length, Ik = new Array(kk), Xk = 0; Xk < kk; Xk++) Ik[Xk] = arguments[Xk];
          Fk.debug("Removing beforeSendHooks"), yk = yk.filter((kk => !Ik.includes(kk)))
        },
        get transports() {
          return [...ik]
        },
        unpause: () => {
          Fk.debug("Unpausing transports"), null === ak || void 0 === ak || ak.start(), Ik.paused = !1
        }
      }
    }

    function Bi(kk, Fk) {
      if (Fk.preserveOriginalError)
        for (const Ik of kk) "exception" === Ik.type && delete Ik.payload.originalError;
      return kk
    }
    let di = kI;

    function Yi(kk) {
      var Fk;
      return di = null !== (Fk = kk.unpatchedConsole) && void 0 !== Fk ? Fk : di, di
    }
    let Ai, gi = AF;

    function mi(kk, Fk) {
      return gi = oi(kk, Fk.internalLoggerLevel), gi
    }

    function ri(kk) {
      let {
        internalLogger: Fk,
        config: Ik,
        metas: Xk,
        transports: Tk,
        tracesApi: ik,
        userActionsApi: yk
      } = kk;
      var lk;
      Fk.debug("Initializing exceptions API");
      let ak = null;
      Ai = null !== (lk = Ik.parseStacktrace) && void 0 !== lk ? lk : Ai;
      const qk = kk => {
          Fk.debug("Changing stacktrace parser"), Ai = null !== kk && void 0 !== kk ? kk : Ai
        },
        {
          ignoreErrors: Lk = [],
          preserveOriginalError: tk
        } = Ik;
      return qk(Ik.parseStacktrace), {
        changeStacktraceParser: qk,
        getStacktraceParser: () => Ai,
        pushError: function(kk) {
          let {
            skipDedupe: lk,
            stackFrames: qk,
            type: Zk,
            context: jk,
            spanContext: ek,
            timestampOverwriteMs: wk,
            originalError: Hk,
            fingerprint: Jk,
            fatal: xk
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(kk, Fk) {
              const {
                message: Ik,
                name: Xk,
                stack: Tk
              } = Fk;
              return ik = kk, yk = Ik + " " + Xk + " " + Tk, ik.some((kk => sk(kk) ? yk.includes(kk) : !!yk.match(kk)));
              var ik, yk
            }(Lk, null !== Hk && void 0 !== Hk ? Hk : kk)) try {
            var Pk, Kk;
            if (!WF(Xk).shouldCapture()) return;
            const Lk = UF(MF(MF({}, function(kk) {
                let Fk = kk.cause;
                Ck(Fk) ? Fk = kk.cause.toString() : null !== Fk && (Ek(kk.cause) || nk(kk.cause)) ? Fk = RF(kk.cause) : null != Fk && (Fk = kk.cause.toString());
                return null == Fk ? {} : {
                  cause: Fk
                }
              }(null !== Hk && void 0 !== Hk ? Hk : kk)), null !== jk && void 0 !== jk ? jk : {})),
              sk = MF(MF(MF(MF({
                type: Zk || kk.name || "Error",
                value: kk.message,
                timestamp: wk ? HF(wk) : wF(),
                trace: ek ? {
                  trace_id: ek.traceId,
                  span_id: ek.spanId
                } : ik.getTraceContext()
              }, gk(Lk) ? {} : {
                context: Lk
              }), tk ? {
                originalError: Hk
              } : {}), Jk ? {
                fingerprint: Jk
              } : {}), void 0 !== xk ? {
                fatal: xk
              } : {});
            qk = null !== (Pk = qk) && void 0 !== Pk ? Pk : kk.stack ? null === Ai || void 0 === Ai ? void 0 : Ai(kk).frames : void 0, (null === qk || void 0 === qk ? void 0 : qk.length) && (sk.stacktrace = {
              frames: qk
            });
            const Vk = {
              type: sk.type,
              value: sk.value,
              stacktrace: sk.stacktrace,
              context: sk.context,
              fingerprint: sk.fingerprint,
              fatal: null !== (Kk = sk.fatal) && void 0 !== Kk && Kk
            };
            if (!lk && Ik.dedupe && !Qk(ak) && PF(Vk, ak)) return void Fk.debug("Skipping error push because it is the same as the last one\n", sk);
            const zk = ak,
              Sk = Ci(Xk);
            if (ak !== zk && !lk && Ik.dedupe && PF(Vk, ak)) return;
            ak = Vk;
            const vk = {
              meta: Sk,
              payload: sk,
              type: "exception"
            };
            Fk.debug("Pushing exception\n", vk), VT(yk.getActiveUserAction(), vk) || Tk.execute(vk)
          } catch (Vk) {
            Fk.error("Error pushing event", Vk)
          }
        }
      }
    }

    function Di(kk, Fk, Ik, Xk, Tk) {
      Fk.debug("Initializing API");
      let ik = null;
      const yk = function(kk) {
          let {
            transports: Fk,
            internalLogger: Ik,
            config: Xk,
            pushEvent: Tk
          } = kk;
          var ik;
          const yk = null === (ik = Xk.userActionsInstrumentation) || void 0 === ik ? void 0 : ik.excludeItem;
          let lk;
          const ak = () => lk;
          return {
            startUserAction: (kk, Xk, ik) => {
              if (void 0 === ak()) {
                const Ik = new QT({
                  name: kk,
                  transports: Fk,
                  attributes: Xk,
                  trigger: (null === ik || void 0 === ik ? void 0 : ik.triggerName) || "faroApiCall",
                  importance: (null === ik || void 0 === ik ? void 0 : ik.importance) || PT.Normal,
                  trackUserActionsExcludeItem: yk,
                  pushEvent: Tk
                });
                return Ik.filter((kk => [3, 2].includes(kk))).first().subscribe((() => {
                  lk = void 0
                })), sT.notify({
                  type: xT,
                  userAction: Ik,
                  initialActivityTimeout: null === ik || void 0 === ik ? void 0 : ik.initialActivityTimeout
                }), lk = Ik, lk
              }
              Ik.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: ak
          }
        }({
          transports: Tk,
          config: Ik,
          internalLogger: Fk,
          pushEvent: (kk, Ik, Xk, Tk) => {
            ik ? ik(kk, Ik, Xk, Tk) : Fk.warn("pushEventImpl is not initialized. Event dropped:", {
              name: kk,
              attributes: Ik,
              domain: Xk,
              options: Tk
            })
          }
        }),
        lk = function(kk, Fk, Ik, Xk, Tk) {
          let ik;
          return Fk.debug("Initializing traces API"), {
            getOTEL: () => ik,
            getTraceContext: () => {
              const kk = null === ik || void 0 === ik ? void 0 : ik.trace.getSpanContext(ik.context.active());
              return kk ? {
                trace_id: kk.traceId,
                span_id: kk.spanId
              } : void 0
            },
            initOTEL: (kk, Ik) => {
              Fk.debug("Initializing OpenTelemetry"), ik = {
                trace: kk,
                context: Ik
              }
            },
            isOTELInitialized: () => !!ik,
            pushTraces: kk => {
              try {
                if (!WF(Xk).shouldCapture()) return;
                const Ik = {
                  type: "trace",
                  payload: kk,
                  meta: Ci(Xk)
                };
                Fk.debug("Pushing trace\n", Ik), Tk.execute(Ik)
              } catch (Ik) {
                Fk.error("Error pushing trace\n", Ik)
              }
            }
          }
        }(0, Fk, 0, Xk, Tk),
        ak = {
          unpatchedConsole: kk,
          internalLogger: Fk,
          userActionsApi: yk,
          config: Ik,
          metas: Xk,
          transports: Tk,
          tracesApi: lk
        },
        qk = function(kk) {
          let {
            internalLogger: Fk,
            config: Ik,
            metas: Xk,
            transports: Tk,
            tracesApi: ik,
            userActionsApi: yk
          } = kk, lk = null;
          return {
            pushEvent: function(kk, ak, qk) {
              let {
                skipDedupe: Lk,
                spanContext: tk,
                timestampOverwriteMs: Zk,
                customPayloadTransformer: jk = kk => kk
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!WF(Xk).shouldCapture()) return;
                const ek = UF(ak),
                  wk = jk({
                    name: kk,
                    domain: null !== qk && void 0 !== qk ? qk : Ik.eventDomain,
                    attributes: gk(ek) ? void 0 : ek,
                    timestamp: Zk ? HF(Zk) : wF(),
                    trace: tk ? {
                      trace_id: tk.traceId,
                      span_id: tk.spanId
                    } : ik.getTraceContext()
                  }),
                  Hk = {
                    name: wk.name,
                    attributes: wk.attributes,
                    domain: wk.domain
                  };
                if (!Lk && Ik.dedupe && !Qk(lk) && PF(Hk, lk)) return void Fk.debug("Skipping event push because it is the same as the last one\n", wk);
                const Jk = lk,
                  xk = Ci(Xk);
                if (lk !== Jk && !Lk && Ik.dedupe && PF(Hk, lk)) return;
                lk = Hk;
                const Pk = {
                  meta: xk,
                  payload: wk,
                  type: "event"
                };
                Fk.debug("Pushing event\n", Pk), VT(yk.getActiveUserAction(), Pk) || Tk.execute(Pk)
              } catch (ek) {
                Fk.error("Error pushing event", ek)
              }
            }
          }
        }(ak);
      return ik = qk.pushEvent, MF(MF(MF(MF(MF(MF(MF({}, lk), ri(ak)), function(kk) {
        let Fk, Ik, Xk, Tk, {
          internalLogger: ik,
          metas: yk
        } = kk;
        ik.debug("Initializing meta API");
        const lk = kk => {
            Ik && yk.remove(Ik), Ik = {
              user: kk
            }, yk.add(Ik)
          },
          ak = (kk, Ik) => {
            var Xk;
            const Tk = null === Ik || void 0 === Ik ? void 0 : Ik.overrides,
              ik = Tk ? {
                overrides: MF(MF({}, null === Fk || void 0 === Fk || null === (Xk = Fk.session) || void 0 === Xk ? void 0 : Xk.overrides), Tk)
              } : {};
            Fk && yk.remove(Fk), Fk = {
              session: MF(MF({}, gk(kk) ? void 0 : kk), ik)
            }, yk.add(Fk)
          },
          qk = (kk, Fk) => {
            WF(yk).notifySessionUpdate({
              type: "replace",
              session: kk,
              overrides: null === Fk || void 0 === Fk ? void 0 : Fk.overrides
            }), ak(kk, Fk)
          },
          Lk = () => yk.value.session,
          tk = () => yk.value.page;
        return {
          setUser: lk,
          resetUser: lk,
          setSession: qk,
          resetSession: qk,
          getSession: Lk,
          setView: (kk, Fk) => {
            var Ik;
            if ((null === Fk || void 0 === Fk ? void 0 : Fk.overrides) && (WF(yk).notifySessionUpdate({
                type: "overrides",
                overrides: Fk.overrides
              }), ak(Lk(), {
                overrides: Fk.overrides
              })), (null === Xk || void 0 === Xk || null === (Ik = Xk.view) || void 0 === Ik ? void 0 : Ik.name) === (null === kk || void 0 === kk ? void 0 : kk.name)) return;
            const Tk = Xk;
            Xk = {
              view: kk
            }, yk.add(Xk), Tk && yk.remove(Tk)
          },
          getView: () => yk.value.view,
          setPage: kk => {
            var Fk;
            const Ik = sk(kk) ? MF(MF({}, null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.page) && void 0 !== Fk ? Fk : tk()), {}, {
              id: kk
            }) : kk;
            Tk && yk.remove(Tk), Tk = {
              page: Ik
            }, yk.add(Tk)
          },
          getPage: tk
        }
      }(ak)), function(kk) {
        let {
          internalLogger: Fk,
          config: Ik,
          metas: Xk,
          transports: Tk,
          tracesApi: ik,
          userActionsApi: yk
        } = kk;
        var lk;
        Fk.debug("Initializing logs API");
        let ak = null;
        const qk = null !== (lk = Ik.logArgsSerializer) && void 0 !== lk ? lk : GI;
        return {
          pushLog: function(kk) {
            let {
              context: lk,
              level: Lk,
              skipDedupe: tk,
              spanContext: Zk,
              timestampOverwriteMs: jk
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!WF(Xk).shouldCapture()) return;
              const ek = UF(lk),
                wk = {
                  message: qk(kk),
                  level: null !== Lk && void 0 !== Lk ? Lk : "log",
                  context: gk(ek) ? void 0 : ek,
                  timestamp: jk ? HF(jk) : wF(),
                  trace: Zk ? {
                    trace_id: Zk.traceId,
                    span_id: Zk.spanId
                  } : ik.getTraceContext()
                },
                Hk = {
                  message: wk.message,
                  level: wk.level,
                  context: wk.context
                };
              if (!tk && Ik.dedupe && !Qk(ak) && PF(Hk, ak)) return void Fk.debug("Skipping log push because it is the same as the last one\n", wk);
              const Jk = ak,
                xk = Ci(Xk);
              if (ak !== Jk && !tk && Ik.dedupe && PF(Hk, ak)) return;
              ak = Hk;
              const Pk = {
                type: "log",
                payload: wk,
                meta: xk
              };
              Fk.debug("Pushing log\n", Pk), VT(yk.getActiveUserAction(), Pk) || Tk.execute(Pk)
            } catch (ek) {
              Fk.error("Error pushing log\n", ek)
            }
          }
        }
      }(ak)), function(kk) {
        let {
          internalLogger: Fk,
          config: Ik,
          metas: Xk,
          transports: Tk,
          tracesApi: ik,
          userActionsApi: yk
        } = kk;
        Fk.debug("Initializing measurements API");
        let lk = null;
        return {
          pushMeasurement: function(kk) {
            let {
              skipDedupe: ak,
              context: qk,
              spanContext: Lk,
              timestampOverwriteMs: tk
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!WF(Xk).shouldCapture()) return;
              const Zk = UF(qk),
                jk = MF(MF({}, kk), {}, {
                  trace: Lk ? {
                    trace_id: Lk.traceId,
                    span_id: Lk.spanId
                  } : ik.getTraceContext(),
                  timestamp: tk ? HF(tk) : wF(),
                  context: gk(Zk) ? void 0 : Zk
                }),
                ek = {
                  type: jk.type,
                  values: jk.values,
                  context: jk.context
                };
              if (!ak && Ik.dedupe && !Qk(lk) && PF(ek, lk)) return void Fk.debug("Skipping measurement push because it is the same as the last one\n", jk);
              const wk = lk,
                Hk = Ci(Xk);
              if (lk !== wk && !ak && Ik.dedupe && PF(ek, lk)) return;
              lk = ek;
              const Jk = {
                type: "measurement",
                payload: jk,
                meta: Hk
              };
              Fk.debug("Pushing measurement\n", Jk), VT(yk.getActiveUserAction(), Jk) || Tk.execute(Jk)
            } catch (Zk) {
              Fk.error("Error pushing measurement\n", Zk)
            }
          }
        }
      }(ak)), qk), yk)
    }

    function Mi(kk) {
      const Fk = Yi(kk),
        Ik = mi(Fk, kk);
      if (ek() && !kk.isolate) return void Ik.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Ik.debug("Initializing");
      const Xk = function(kk, Fk) {
          let Ik, Xk = [],
            Tk = [],
            ik = [],
            yk = 0,
            lk = 0;
          const ak = () => Xk.reduce(((kk, Fk) => Object.assign(kk, Ok(Fk) ? Fk() : Fk)), {}),
            qk = () => {
              if (Tk.length) {
                const kk = ak();
                Tk.forEach((Fk => Fk(kk)))
              }
            };
          return {
            add: function() {
              for (var kk = arguments.length, Ik = new Array(kk), Tk = 0; Tk < kk; Tk++) Ik[Tk] = arguments[Tk];
              Fk.debug("Adding metas\n", Ik), Xk.push(...Ik), qk()
            },
            remove: function() {
              for (var kk = arguments.length, Ik = new Array(kk), Tk = 0; Tk < kk; Tk++) Ik[Tk] = arguments[Tk];
              Fk.debug("Removing metas\n", Ik), Xk = Xk.filter((kk => !Ik.includes(kk))), qk()
            },
            addListener: kk => {
              Fk.debug("Adding metas listener\n", kk), Tk.push(kk)
            },
            removeListener: kk => {
              Fk.debug("Removing metas listener\n", kk), Tk = Tk.filter((Fk => Fk !== kk))
            },
            capture: kk => {
              var Fk;
              const Xk = void 0 !== Ik,
                Tk = null !== (Fk = Ik) && void 0 !== Fk ? Fk : ik;
              Xk || (Ik = Tk, yk = 0, lk = Tk.length);
              try {
                for (; yk < lk;) {
                  const kk = Tk[yk++];
                  null === kk || void 0 === kk || kk()
                }
                const Fk = Ui(ak());
                return null === kk || void 0 === kk || kk(), Fk
              } finally {
                Xk || (Ik = void 0)
              }
            },
            addCaptureListener: kk => {
              ik.push(kk)
            },
            removeCaptureListener: kk => {
              ik = ik.filter((Fk => Fk !== kk))
            },
            get value() {
              return ak()
            }
          }
        }(0, Ik),
        Tk = fi(Fk, Ik, kk, Xk),
        ik = Di(Fk, Ik, kk, Xk, Tk),
        yk = function(kk, Fk, Ik, Xk, Tk, ik) {
          Fk.debug("Initializing instrumentations");
          const yk = [];
          return {
            add: function() {
              Fk.debug("Adding instrumentations");
              for (var lk = arguments.length, ak = new Array(lk), qk = 0; qk < lk; qk++) ak[qk] = arguments[qk];
              ak.forEach((lk => {
                Fk.debug(`Adding "${lk.name}" instrumentation`), yk.some((kk => kk.name === lk.name)) ? Fk.warn(`Instrumentation ${lk.name} is already added`) : (lk.unpatchedConsole = kk, lk.internalLogger = Fk, lk.config = Ik, lk.metas = Xk, lk.transports = Tk, lk.api = ik, yk.push(lk), lk.initialize())
              }))
            },
            get instrumentations() {
              return [...yk]
            },
            remove: function() {
              Fk.debug("Removing instrumentations");
              for (var kk = arguments.length, Ik = new Array(kk), Xk = 0; Xk < kk; Xk++) Ik[Xk] = arguments[Xk];
              Ik.forEach((kk => {
                var Ik, Xk;
                Fk.debug(`Removing "${kk.name}" instrumentation`);
                const Tk = yk.reduce(((Fk, Ik, Xk) => null === Fk && Ik.name === kk.name ? Xk : null), null);
                null !== Tk ? (null === (Ik = (Xk = yk[Tk]).destroy) || void 0 === Ik || Ik.call(Xk), yk.splice(Tk, 1)) : Fk.warn(`Instrumentation "${kk.name}" is not added`)
              }))
            }
          }
        }(Fk, Ik, kk, Xk, Tk, ik),
        lk = Hk(Fk, Ik, kk, Xk, Tk, ik, yk);
      return ci(lk),
        function(kk) {
          kk.transports.add(...kk.config.transports), kk.transports.addBeforeSendHooks(kk.config.beforeSend)
        }(lk),
        function(kk) {
          kk.instrumentations.add(...kk.config.instrumentations)
        }(lk), lk
    }

    function ky(kk) {
      const Fk = ni(kk);
      if (Fk) return Mi(Fk)
    }
  },
  6669: function(kk, Fk, Ik) {
    var Xk;
    ! function(Tk, ik) {
      var yk = "function",
        lk = "undefined",
        ak = "object",
        qk = "string",
        Lk = "major",
        tk = "model",
        Zk = "name",
        jk = "type",
        ek = "vendor",
        wk = "version",
        Hk = "architecture",
        Jk = "console",
        xk = "mobile",
        Pk = "tablet",
        Kk = "smarttv",
        Qk = "wearable",
        sk = "embedded",
        Vk = "Amazon",
        zk = "Apple",
        Sk = "ASUS",
        vk = "BlackBerry",
        Ek = "Browser",
        Ok = "Chrome",
        nk = "Firefox",
        Gk = "Google",
        pk = "Honor",
        uk = "Huawei",
        bk = "LG",
        Rk = "Microsoft",
        Uk = "Motorola",
        Ck = "Nvidia",
        Nk = "OnePlus",
        ck = "Opera",
        Wk = "OPPO",
        fk = "Samsung",
        Bk = "Sharp",
        dk = "Sony",
        Yk = "Xiaomi",
        Ak = "Zebra",
        gk = "Facebook",
        mk = "Chromium OS",
        hk = "Mac OS",
        rk = " Browser",
        Dk = function(kk) {
          for (var Fk = {}, Ik = 0; Ik < kk.length; Ik++) Fk[kk[Ik].toUpperCase()] = kk[Ik];
          return Fk
        },
        Mk = function(kk, Fk) {
          return typeof kk === qk && -1 !== kF(Fk).indexOf(kF(kk))
        },
        kF = function(kk) {
          return kk.toLowerCase()
        },
        FF = function(kk, Fk) {
          if (typeof kk === qk) return kk = kk.replace(/^\s\s*/, ""), typeof Fk === lk ? kk : kk.substring(0, 500)
        },
        IF = function(kk, Fk) {
          for (var Ik, Xk, Tk, lk, qk, Lk, tk = 0; tk < Fk.length && !qk;) {
            var Zk = Fk[tk],
              jk = Fk[tk + 1];
            for (Ik = Xk = 0; Ik < Zk.length && !qk && Zk[Ik];)
              if (qk = Zk[Ik++].exec(kk))
                for (Tk = 0; Tk < jk.length; Tk++) Lk = qk[++Xk], typeof(lk = jk[Tk]) === ak && lk.length > 0 ? 2 === lk.length ? typeof lk[1] == yk ? this[lk[0]] = lk[1].call(this, Lk) : this[lk[0]] = lk[1] : 3 === lk.length ? typeof lk[1] !== yk || lk[1].exec && lk[1].test ? this[lk[0]] = Lk ? Lk.replace(lk[1], lk[2]) : ik : this[lk[0]] = Lk ? lk[1].call(this, Lk, lk[2]) : ik : 4 === lk.length && (this[lk[0]] = Lk ? lk[3].call(this, Lk.replace(lk[1], lk[2])) : ik) : this[lk] = Lk || ik;
            tk += 2
          }
        },
        XF = function(kk, Fk) {
          for (var Ik in Fk)
            if (typeof Fk[Ik] === ak && Fk[Ik].length > 0) {
              for (var Xk = 0; Xk < Fk[Ik].length; Xk++)
                if (Mk(Fk[Ik][Xk], kk)) return "?" === Ik ? ik : Ik
            } else if (Mk(Fk[Ik], kk)) return "?" === Ik ? ik : Ik;
          return Fk.hasOwnProperty("*") ? Fk["*"] : kk
        },
        TF = {
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
        iF = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [wk, [Zk, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [wk, [Zk, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Zk, wk],
            [/opios[\/ ]+([\w\.]+)/i],
            [wk, [Zk, ck + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [wk, [Zk, ck + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [wk, [Zk, ck]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [wk, [Zk, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [wk, [Zk, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Zk, wk],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [wk, [Zk, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [wk, [Zk, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [wk, [Zk, "UC" + Ek]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [wk, [Zk, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [wk, [Zk, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [wk, [Zk, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [wk, [Zk, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [wk, [Zk, "Smart Lenovo " + Ek]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Zk, /(.+)/, "$1 Secure " + Ek], wk
            ],
            [/\bfocus\/([\w\.]+)/i],
            [wk, [Zk, nk + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [wk, [Zk, ck + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [wk, [Zk, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [wk, [Zk, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [wk, [Zk, ck + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [wk, [Zk, "MIUI" + rk]],
            [/fxios\/([\w\.-]+)/i],
            [wk, [Zk, nk]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [wk, [Zk, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Zk, /(.+)/, "$1Browser"], wk
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Zk, /(.+)/, "$1" + rk], wk
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [wk, [Zk, fk + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [wk, [Zk, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Zk, "Sogou Mobile"], wk
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Zk, wk],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Zk],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [wk, Zk],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Zk, gk], wk
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Zk, wk],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [wk, [Zk, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [wk, [Zk, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [wk, [Zk, Ok + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Zk, Ok + " WebView"], wk
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [wk, [Zk, "Android " + Ek]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Zk, wk],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [wk, [Zk, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [wk, Zk],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Zk, [wk, XF, {
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
            [Zk, wk],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Zk, "Netscape"], wk
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Zk, wk],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [wk, [Zk, nk + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Zk, [wk, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Zk, [wk, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Hk, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Hk, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Hk, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Hk, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Hk, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Hk, /ower/, "", kF]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Hk, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Hk, kF]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [tk, [ek, fk],
              [jk, Pk]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [tk, [ek, fk],
              [jk, xk]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [tk, [ek, zk],
              [jk, xk]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [tk, [ek, zk],
              [jk, Pk]
            ],
            [/(macintosh);/i],
            [tk, [ek, zk]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [tk, [ek, Bk],
              [jk, xk]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [tk, [ek, pk],
              [jk, Pk]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [tk, [ek, pk],
              [jk, xk]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [tk, [ek, uk],
              [jk, Pk]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [tk, [ek, uk],
              [jk, xk]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [tk, /_/g, " "],
              [ek, Yk],
              [jk, Pk]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [tk, /_/g, " "],
              [ek, Yk],
              [jk, xk]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [tk, [ek, Wk],
              [jk, xk]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [tk, [ek, XF, {
                OnePlus: ["304", "403", "203"],
                "*": Wk
              }],
              [jk, Pk]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [tk, [ek, "Vivo"],
              [jk, xk]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [tk, [ek, "Realme"],
              [jk, xk]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [tk, [ek, Uk],
              [jk, xk]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [tk, [ek, Uk],
              [jk, Pk]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [tk, [ek, bk],
              [jk, Pk]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [tk, [ek, bk],
              [jk, xk]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [tk, [ek, "Lenovo"],
              [jk, Pk]
            ],
            [/(nokia) (t[12][01])/i],
            [ek, tk, [jk, Pk]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [tk, /_/g, " "],
              [jk, xk],
              [ek, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [tk, [ek, Gk],
              [jk, Pk]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [tk, [ek, Gk],
              [jk, xk]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [tk, [ek, dk],
              [jk, xk]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [tk, "Xperia Tablet"],
              [ek, dk],
              [jk, Pk]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [tk, [ek, Nk],
              [jk, xk]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [tk, [ek, Vk],
              [jk, Pk]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [tk, /(.+)/g, "Fire Phone $1"],
              [ek, Vk],
              [jk, xk]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [tk, ek, [jk, Pk]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [tk, [ek, vk],
              [jk, xk]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [tk, [ek, Sk],
              [jk, Pk]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [tk, [ek, Sk],
              [jk, xk]
            ],
            [/(nexus 9)/i],
            [tk, [ek, "HTC"],
              [jk, Pk]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [ek, [tk, /_/g, " "],
              [jk, xk]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [tk, [ek, "TCL"],
              [jk, Pk]
            ],
            [/(itel) ((\w+))/i],
            [
              [ek, kF], tk, [jk, XF, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [tk, [ek, "Acer"],
              [jk, Pk]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [tk, [ek, "Meizu"],
              [jk, xk]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [tk, [ek, "Ulefone"],
              [jk, xk]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [tk, [ek, "Energizer"],
              [jk, xk]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [tk, [ek, "Cat"],
              [jk, xk]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [tk, [ek, "Smartfren"],
              [jk, xk]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [tk, [ek, "Nothing"],
              [jk, xk]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [tk, [ek, "Archos"],
              [jk, Pk]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [tk, [ek, "Archos"],
              [jk, xk]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [ek, tk, [jk, Pk]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [ek, tk, [jk, xk]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [ek, tk, [jk, Pk]],
            [/(surface duo)/i],
            [tk, [ek, Rk],
              [jk, Pk]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [tk, [ek, "Fairphone"],
              [jk, xk]
            ],
            [/(u304aa)/i],
            [tk, [ek, "AT&T"],
              [jk, xk]
            ],
            [/\bsie-(\w*)/i],
            [tk, [ek, "Siemens"],
              [jk, xk]
            ],
            [/\b(rct\w+) b/i],
            [tk, [ek, "RCA"],
              [jk, Pk]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [tk, [ek, "Dell"],
              [jk, Pk]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [tk, [ek, "Verizon"],
              [jk, Pk]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [tk, [ek, "Barnes & Noble"],
              [jk, Pk]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [tk, [ek, "NuVision"],
              [jk, Pk]
            ],
            [/\b(k88) b/i],
            [tk, [ek, "ZTE"],
              [jk, Pk]
            ],
            [/\b(nx\d{3}j) b/i],
            [tk, [ek, "ZTE"],
              [jk, xk]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [tk, [ek, "Swiss"],
              [jk, xk]
            ],
            [/\b(zur\d{3}) b/i],
            [tk, [ek, "Swiss"],
              [jk, Pk]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [tk, [ek, "Zeki"],
              [jk, Pk]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [ek, "Dragon Touch"], tk, [jk, Pk]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [tk, [ek, "Insignia"],
              [jk, Pk]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [tk, [ek, "NextBook"],
              [jk, Pk]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [ek, "Voice"], tk, [jk, xk]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [ek, "LvTel"], tk, [jk, xk]
            ],
            [/\b(ph-1) /i],
            [tk, [ek, "Essential"],
              [jk, xk]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [tk, [ek, "Envizen"],
              [jk, Pk]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [tk, [ek, "MachSpeed"],
              [jk, Pk]
            ],
            [/\btu_(1491) b/i],
            [tk, [ek, "Rotor"],
              [jk, Pk]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [tk, [ek, Ck],
              [jk, Pk]
            ],
            [/(sprint) (\w+)/i],
            [ek, tk, [jk, xk]],
            [/(kin\.[onetw]{3})/i],
            [
              [tk, /\./g, " "],
              [ek, Rk],
              [jk, xk]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [tk, [ek, Ak],
              [jk, Pk]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [tk, [ek, Ak],
              [jk, xk]
            ],
            [/smart-tv.+(samsung)/i],
            [ek, [jk, Kk]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [tk, /^/, "SmartTV"],
              [ek, fk],
              [jk, Kk]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [ek, bk],
              [jk, Kk]
            ],
            [/(apple) ?tv/i],
            [ek, [tk, zk + " TV"],
              [jk, Kk]
            ],
            [/crkey/i],
            [
              [tk, Ok + "cast"],
              [ek, Gk],
              [jk, Kk]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [tk, [ek, Vk],
              [jk, Kk]
            ],
            [/(shield \w+ tv)/i],
            [tk, [ek, Ck],
              [jk, Kk]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [tk, [ek, Bk],
              [jk, Kk]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [tk, [ek, dk],
              [jk, Kk]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [tk, [ek, Yk],
              [jk, Kk]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [ek, tk, [jk, Kk]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [ek, FF],
              [tk, FF],
              [jk, Kk]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [tk, [jk, Kk]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [jk, Kk]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [ek, tk, [jk, Jk]],
            [/droid.+; (shield)( bui|\))/i],
            [tk, [ek, Ck],
              [jk, Jk]
            ],
            [/(playstation \w+)/i],
            [tk, [ek, dk],
              [jk, Jk]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [tk, [ek, Rk],
              [jk, Jk]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [tk, [ek, fk],
              [jk, Qk]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [ek, tk, [jk, Qk]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [tk, [ek, Wk],
              [jk, Qk]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [tk, [ek, zk],
              [jk, Qk]
            ],
            [/(opwwe\d{3})/i],
            [tk, [ek, Nk],
              [jk, Qk]
            ],
            [/(moto 360)/i],
            [tk, [ek, Uk],
              [jk, Qk]
            ],
            [/(smartwatch 3)/i],
            [tk, [ek, dk],
              [jk, Qk]
            ],
            [/(g watch r)/i],
            [tk, [ek, bk],
              [jk, Qk]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [tk, [ek, Ak],
              [jk, Qk]
            ],
            [/droid.+; (glass) \d/i],
            [tk, [ek, Gk],
              [jk, Qk]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [ek, tk, [jk, Qk]],
            [/; (quest( \d| pro)?)/i],
            [tk, [ek, gk],
              [jk, Qk]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [ek, [jk, sk]],
            [/(aeobc)\b/i],
            [tk, [ek, Vk],
              [jk, sk]
            ],
            [/(homepod).+mac os/i],
            [tk, [ek, zk],
              [jk, sk]
            ],
            [/windows iot/i],
            [
              [jk, sk]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [tk, [jk, xk]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [tk, [jk, Pk]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [jk, Pk]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [jk, xk]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [tk, [ek, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [wk, [Zk, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Zk, wk],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [wk, [Zk, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Zk, wk],
            [/ladybird\//i],
            [
              [Zk, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [wk, Zk]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Zk, wk],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Zk, [wk, XF, TF]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [wk, XF, TF],
              [Zk, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [wk, /_/g, "."],
              [Zk, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Zk, hk],
              [wk, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [wk, Zk],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Zk, /(.+)/, "$1 Touch"], wk
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Zk, wk],
            [/\(bb(10);/i],
            [wk, [Zk, vk]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [wk, [Zk, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [wk, [Zk, nk + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [wk, [Zk, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [wk, [Zk, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [wk, [Zk, Ok + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Zk, mk], wk
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Zk, wk],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Zk, "Solaris"], wk
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Zk, wk]
          ]
        },
        yF = function(kk, Fk) {
          if (typeof kk === ak && (Fk = kk, kk = ik), !(this instanceof yF)) return new yF(kk, Fk).getResult();
          var Ik = typeof Tk !== lk && Tk.navigator ? Tk.navigator : ik,
            Xk = kk || (Ik && Ik.userAgent ? Ik.userAgent : ""),
            Jk = Ik && Ik.userAgentData ? Ik.userAgentData : ik,
            Kk = Fk ? function(kk, Fk) {
              var Ik = {};
              for (var Xk in kk) Fk[Xk] && Fk[Xk].length % 2 === 0 ? Ik[Xk] = Fk[Xk].concat(kk[Xk]) : Ik[Xk] = kk[Xk];
              return Ik
            }(iF, Fk) : iF,
            Qk = Ik && Ik.userAgent == Xk;
          return this.getBrowser = function() {
            var kk, Fk = {};
            return Fk[Zk] = ik, Fk[wk] = ik, IF.call(Fk, Xk, Kk.browser), Fk[Lk] = typeof(kk = Fk[wk]) === qk ? kk.replace(/[^\d\.]/g, "").split(".")[0] : ik, Qk && Ik && Ik.brave && typeof Ik.brave.isBrave == yk && (Fk[Zk] = "Brave"), Fk
          }, this.getCPU = function() {
            var kk = {};
            return kk[Hk] = ik, IF.call(kk, Xk, Kk.cpu), kk
          }, this.getDevice = function() {
            var kk = {};
            return kk[ek] = ik, kk[tk] = ik, kk[jk] = ik, IF.call(kk, Xk, Kk.device), Qk && !kk[jk] && Jk && Jk.mobile && (kk[jk] = xk), Qk && "Macintosh" == kk[tk] && Ik && typeof Ik.standalone !== lk && Ik.maxTouchPoints && Ik.maxTouchPoints > 2 && (kk[tk] = "iPad", kk[jk] = Pk), kk
          }, this.Oe = function() {
            var kk = {};
            return kk[Zk] = ik, kk[wk] = ik, IF.call(kk, Xk, Kk.engine), kk
          }, this.getOS = function() {
            var kk = {};
            return kk[Zk] = ik, kk[wk] = ik, IF.call(kk, Xk, Kk.os), Qk && !kk[Zk] && Jk && Jk.platform && "Unknown" != Jk.platform && (kk[Zk] = Jk.platform.replace(/chrome os/i, mk).replace(/macos/i, hk)), kk
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Oe(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Xk
          }, this.setUA = function(kk) {
            return Xk = typeof kk === qk && kk.length > 500 ? FF(kk, 500) : kk, this
          }, this.setUA(Xk), this
        };
      yF.VERSION = "1.0.41", yF.BROWSER = Dk([Zk, wk, Lk]), yF.CPU = Dk([Hk]), yF.DEVICE = Dk([tk, ek, jk, Jk, xk, Kk, Pk, Qk, sk]), yF.ENGINE = yF.OS = Dk([Zk, wk]), typeof Fk !== lk ? (kk.exports && (Fk = kk.exports = yF), Fk.UAParser = yF) : Ik.amdO ? (Xk = function() {
        return yF
      }.call(Fk, Ik, Fk, kk)) === ik || (kk.exports = Xk) : typeof Tk !== lk && (Tk.UAParser = yF);
      var lF = typeof Tk !== lk && (Tk.jQuery || Tk.Zepto);
      if (lF && !lF.ua) {
        var aF = new yF;
        lF.ua = aF.getResult(), lF.ua.get = function() {
          return aF.getUA()
        }, lF.ua.set = function(kk) {
          aF.setUA(kk);
          var Fk = aF.getResult();
          for (var Ik in Fk) lF.ua[Ik] = Fk[Ik]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);