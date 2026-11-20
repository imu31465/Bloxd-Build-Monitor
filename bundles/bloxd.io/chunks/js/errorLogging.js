export const id = 31;
export const ids = [31];
export const modules = {
  6392: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BaseExtension: () => FB,
      BaseInstrumentation: () => BB,
      BaseTransport: () => Qt,
      CSPInstrumentation: () => St,
      ConsoleInstrumentation: () => UB,
      ConsoleTransport: () => ta,
      EVENT_CLICK: () => iF,
      EVENT_NAVIGATION: () => YF,
      EVENT_ROUTE_CHANGE: () => NF,
      EVENT_SESSION_EXTEND: () => EF,
      EVENT_SESSION_RESUME: () => OF,
      EVENT_SESSION_START: () => LF,
      EVENT_VIEW_CHANGED: () => oF,
      ErrorsInstrumentation: () => GB,
      FetchTransport: () => oa,
      InternalLoggerLevel: () => pF,
      LogLevel: () => iB,
      MAX_SESSION_PERSISTENCE_TIME: () => wk,
      NavigationInstrumentation: () => qt,
      Observable: () => vB,
      PerformanceInstrumentation: () => xR,
      PersistentSessionsManager: () => DF,
      SESSION_EXPIRATION_TIME: () => ak,
      SESSION_INACTIVITY_TIME: () => Xk,
      STORAGE_KEY: () => tk,
      SessionInstrumentation: () => tB,
      TransportItemType: () => ka,
      UserActionInstrumentation: () => Et,
      UserActionState: () => ft,
      VERSION: () => RB,
      ViewInstrumentation: () => rB,
      VolatileSessionsManager: () => zF,
      WebVitalsInstrumentation: () => cR,
      allLogLevels: () => oB,
      browserMeta: () => jt,
      buildStackFrame: () => aB,
      captureMetas: () => Da,
      createInternalLogger: () => Na,
      createPromiseBuffer: () => ea,
      createSession: () => nt,
      deepEqual: () => vF,
      defaultEventDomain: () => Rk,
      defaultExceptionType: () => SB,
      defaultGlobalObjectKey: () => Ha,
      defaultInternalLoggerLevel: () => xF,
      defaultLogLevel: () => YB,
      faro: () => yk,
      genShortID: () => WF,
      getCurrentTimestamp: () => yF,
      getDataFromSafariExtensions: () => AB,
      getIgnoreUrls: () => jk,
      getInternalFaroFromGlobalObject: () => Jk,
      getStackFramesFromError: () => yB,
      getTransportBody: () => Ra,
      getUrlFromResource: () => nk,
      getWebInstrumentations: () => Ct,
      globalObject: () => sk,
      initializeFaro: () => Qa,
      internalGlobalObjectKey: () => Vk,
      isArray: () => Mk,
      isBoolean: () => Sk,
      isDomError: () => Pk,
      isDomException: () => hk,
      isElement: () => Ck,
      isElementDefined: () => qk,
      Se: () => xk,
      isError: () => Dk,
      isErrorDefined: () => rk,
      isErrorEvent: () => zk,
      isEvent: () => Tk,
      isEventDefined: () => Gk,
      isFunction: () => uk,
      isInstanceOf: () => vk,
      isInt: () => Ek,
      isInternalFaroOnGlobalObject: () => ek,
      isMap: () => pk,
      isMapDefined: () => Zk,
      isNull: () => Yk,
      isNumber: () => Ok,
      isObject: () => Hk,
      isPrimitive: () => ck,
      isRegExp: () => gk,
      isString: () => Lk,
      isSymbol: () => Nk,
      isSyntheticEvent: () => Kk,
      isThenable: () => Uk,
      isToString: () => Wk,
      isTypeof: () => mk,
      isUndefined: () => ik,
      makeCoreConfig: () => ga,
      noop: () => ZF,
      osMeta: () => lt,
      parseStacktrace: () => fB,
      sdkMeta: () => It,
      setInternalFaroOnGlobalObject: () => Ak,
      transportItemTypeToBodyKey: () => Fa,
      unknownString: () => TB,
      userActionDataAttribute: () => jR,
      userActionTimeoutDataAttribute: () => lR
    });
    const Rk = "browser",
      tk = "com.grafana.faro.session",
      ak = 144e5,
      Xk = 9e5,
      bk = 1e3,
      wk = Xk,
      dk = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: wk
      };
    const sk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Bk.g ? Bk.g : "undefined" !== typeof self ? self : void 0;
    const Vk = "_faroInternal";

    function Jk() {
      return sk[Vk]
    }

    function Ak(kk) {
      kk.config.isolate ? kk.internalLogger.debug("Skipping registering internal Faro instance on global object") : (kk.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(sk, Vk, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: kk
      }))
    }

    function ek() {
      return Vk in sk
    }
    let yk = {
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

    function fk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      return Fk.debug("Initializing Faro"), yk = {
          api: ak,
          config: Bk,
          instrumentations: Xk,
          internalLogger: Fk,
          metas: Rk,
          pause: tk.pause,
          transports: tk,
          unpatchedConsole: kk,
          unpause: tk.unpause
        }, Ak(yk),
        function(kk) {
          if (kk.config.preventGlobalExposure) kk.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (kk.internalLogger.debug(`Registering public faro reference in the global scope using "${kk.config.globalObjectKey}" key`), kk.config.globalObjectKey in sk) return void kk.internalLogger.warn(`Skipping global registration due to key "${kk.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(sk, kk.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: kk
            })
          }
        }(yk), yk
    }

    function mk(kk, Fk) {
      return typeof kk === Fk
    }

    function Wk(kk, Fk) {
      return Object.prototype.toString.call(kk) === `[object ${Fk}]`
    }

    function vk(kk, Fk) {
      try {
        return kk instanceof Fk
      } catch (Bk) {
        return !1
      }
    }
    const ik = kk => mk(kk, "undefined"),
      Yk = kk => mk(kk, "null"),
      Lk = kk => mk(kk, "string"),
      Ok = kk => mk(kk, "number") && !isNaN(kk) || mk(kk, "bigint"),
      Ek = kk => Ok(kk) && Number.isInteger(kk),
      Sk = kk => mk(kk, "boolean"),
      Nk = kk => mk(kk, "symbol"),
      Hk = kk => !Yk(kk) && mk(kk, "object"),
      uk = kk => mk(kk, "function"),
      Mk = kk => Wk(kk, "Array"),
      gk = kk => Wk(kk, "RegExp"),
      Uk = kk => uk(null === kk || void 0 === kk ? void 0 : kk.then),
      ck = kk => !Hk(kk) && !uk(kk),
      Gk = "undefined" !== typeof Event,
      Tk = kk => Gk && vk(kk, Event),
      rk = "undefined" !== typeof Error,
      Dk = kk => rk && vk(kk, Error),
      zk = kk => Wk(kk, "ErrorEvent"),
      Pk = kk => Wk(kk, "DOMError"),
      hk = kk => Wk(kk, "DOMException"),
      qk = "undefined" !== typeof Element,
      Ck = kk => qk && vk(kk, Element),
      Zk = "undefined" !== typeof Map,
      pk = kk => Zk && vk(kk, Map),
      Kk = kk => Hk(kk) && "nativeEvent" in kk && "preventDefault" in kk && "stopPropagation" in kk;

    function xk(kk) {
      return null == kk || (Mk(kk) || Lk(kk) ? 0 === kk.length : !!Hk(kk) && 0 === Object.keys(kk).length)
    }

    function jk() {
      return yk.transports.transports.flatMap((kk => kk.getIgnoreUrls()))
    }

    function lk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return jk().some((Fk => kk && null != kk.match(Fk)))
    }

    function nk(kk) {
      return Lk(kk) ? kk : kk instanceof URL ? kk.href : !xk(kk) && uk(null === kk || void 0 === kk ? void 0 : kk.toString) ? kk.toString() : void 0
    }
    const Ik = "sessionStorage",
      Qk = "localStorage";

    function kF(kk) {
      try {
        let Fk;
        Fk = window[kk];
        const Bk = "__faro_storage_test__";
        return Fk.setItem(Bk, Bk), Fk.removeItem(Bk), !0
      } catch (Bk) {
        var Fk;
        return null === (Fk = yk.internalLogger) || void 0 === Fk || Fk.info(`Web storage of type ${kk} is not available. Reason: ${Bk}`), !1
      }
    }

    function FF(kk, Fk) {
      return XF(Fk) ? window[Fk].getItem(kk) : null
    }

    function BF(kk, Fk, Bk) {
      if (XF(Bk)) try {
        window[Bk].setItem(kk, Fk)
      } catch (Rk) {}
    }

    function RF(kk, Fk) {
      XF(Fk) && window[Fk].removeItem(kk)
    }
    const tF = kF(Qk),
      aF = kF(Ik);

    function XF(kk) {
      return kk === Qk ? tF : kk === Ik && aF
    }

    function bF(kk) {
      return bF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, bF(kk)
    }

    function wF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != bF(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != bF(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == bF(Fk) ? Fk : Fk + ""
    }

    function dF(kk, Fk, Bk) {
      return (Fk = wF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function sF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function VF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? sF(Object(Bk), !0).forEach((function(Fk) {
          dF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : sF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function JF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk;
      var Fk, Bk, Rk;
      const tk = kk.config.sessionTracking,
        ak = null !== (Fk = null !== (Bk = null === tk || void 0 === tk || null === (Rk = tk.sampler) || void 0 === Rk ? void 0 : Rk.call(tk, {
          metas: kk.metas.value
        })) && void 0 !== Bk ? Bk : null === tk || void 0 === tk ? void 0 : tk.samplingRate) && void 0 !== Fk ? Fk : 1,
        Xk = "number" === typeof ak ? function(kk) {
          return Math.min(1, Math.max(0, kk))
        }(ak) : 0;
      if (!(Xk > 0)) return !1;
      if (1 === Xk) return !0;
      try {
        const kk = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === kk || void 0 === kk ? void 0 : kk.getRandomValues)) {
          const Fk = new Uint32Array(1);
          return kk.getRandomValues(Fk), Fk[0] / Math.pow(2, 32) < Xk
        }
      } catch (bk) {}
      return Math.random() < Xk
    }

    function AF() {
      return Date.now()
    }

    function eF() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function yF() {
      return (new Date).toISOString()
    }

    function fF(kk) {
      return new Date(kk).toISOString()
    }
    const mF = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function WF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Fk = new Uint32Array(kk),
        Bk = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Bk || void 0 === Bk ? void 0 : Bk.getRandomValues) Bk.getRandomValues(Fk);
      else
        for (let tk = 0; tk < kk; tk++) Fk[tk] = Math.floor(4294967296 * Math.random());
      let Rk = "";
      for (let tk = 0; tk < kk; tk++) Rk += mF[Fk[tk] % 59];
      return Rk
    }

    function vF(kk, Fk) {
      if (kk === Fk) return !0;
      if (mk(kk, "number") && isNaN(kk)) return mk(Fk, "number") && isNaN(Fk);
      const Bk = Mk(kk),
        Rk = Mk(Fk);
      if (Bk !== Rk) return !1;
      if (Bk && Rk) {
        const Bk = kk.length;
        if (Bk !== Fk.length) return !1;
        for (let Rk = Bk; 0 !== Rk--;)
          if (!vF(kk[Rk], Fk[Rk])) return !1;
        return !0
      }
      const tk = Hk(kk),
        ak = Hk(Fk);
      if (tk !== ak) return !1;
      if (kk && Fk && tk && ak) {
        const Bk = Object.keys(kk),
          Rk = Object.keys(Fk);
        if (Bk.length !== Rk.length) return !1;
        for (let kk of Bk)
          if (!Rk.includes(kk)) return !1;
        for (let tk of Bk)
          if (!vF(kk[tk], Fk[tk])) return !1;
        return !0
      }
      return !1
    }
    const iF = "click",
      YF = "navigation",
      oF = "view_changed",
      LF = "session_start",
      OF = "session_resume",
      EF = "session_extend",
      SF = "service_name_override",
      NF = "route_change";

    function HF() {
      let {
        sessionId: kk,
        started: Fk,
        lastActivity: Bk,
        isSampled: Rk = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, tk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk;
      var ak;
      const Xk = AF(),
        bk = null === (ak = tk.config) || void 0 === ak || null === (ak = ak.sessionTracking) || void 0 === ak ? void 0 : ak.generateSessionId;
      return null == kk && (kk = "function" === typeof bk ? bk() : WF()), {
        sessionId: kk,
        lastActivity: null !== Bk && void 0 !== Bk ? Bk : Xk,
        started: null !== Fk && void 0 !== Fk ? Fk : Xk,
        isSampled: Rk
      }
    }

    function uF(kk) {
      if (null == kk) return !1;
      const Fk = AF();
      return Fk - kk.started < 144e5 && Fk - kk.lastActivity < Xk
    }

    function MF(kk) {
      let {
        fetchUserSession: Fk,
        storeUserSession: Bk,
        adoptSession: Rk,
        updateInterval: tk = 0
      } = kk, bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk, wk = 0;
      return function() {
        let {
          forceSessionExtend: kk = !1,
          refreshActivity: dk = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var sk, Vk;
        if (!Fk || !Bk) return;
        const Jk = AF();
        if (!kk && Jk < wk && wk - Jk <= tk) return;
        const Ak = bk.config.sessionTracking,
          ek = null === Ak || void 0 === Ak ? void 0 : Ak.persistent;
        if (ek && !tF || !ek && !aF) return;
        const yk = Fk();
        if (wk = Math.min(Jk + tk, (null !== (sk = null === yk || void 0 === yk ? void 0 : yk.started) && void 0 !== sk ? sk : Jk) + ak, (null !== (Vk = null === yk || void 0 === yk ? void 0 : yk.lastActivity) && void 0 !== Vk ? Vk : Jk) + Xk), !1 === kk && uF(yk)) {
          var fk;
          dk && Bk(VF(VF({}, yk), {}, {
            lastActivity: Jk
          }));
          const kk = null === (fk = bk.metas.value.session) || void 0 === fk ? void 0 : fk.id;
          null != Rk && null != yk.sessionMeta && yk.sessionId !== kk && Rk(yk.sessionMeta)
        } else {
          var mk, Wk, vk;
          let kk = UF(HF({
            isSampled: JF(bk)
          }, bk), yk, bk);
          wk = Jk + tk, Bk(kk), null === (mk = bk.api) || void 0 === mk || mk.setSession(kk.sessionMeta), null === Ak || void 0 === Ak || null === (Wk = Ak.onSessionChange) || void 0 === Wk || Wk.call(Ak, null !== (vk = null === yk || void 0 === yk ? void 0 : yk.sessionMeta) && void 0 !== vk ? vk : null, kk.sessionMeta)
        }
      }
    }

    function gF(kk) {
      let Fk, {
          fetchUserSession: Bk,
          storeUserSession: Rk,
          updateInterval: tk = 0
        } = kk,
        ak = 0;
      return kk => {
        const Xk = AF();
        if (kk === Fk && Xk < ak && ak - Xk <= tk) return;
        Fk = kk, ak = Xk + tk;
        const bk = Bk();
        (null === bk || void 0 === bk ? void 0 : bk.sessionId) === kk && uF(bk) && Rk(VF(VF({}, bk), {}, {
          lastActivity: Xk
        }))
      }
    }

    function UF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yk;
      var Rk, tk, ak, Xk, bk, wk;
      const dk = VF(VF({}, kk), {}, {
          sessionMeta: {
            id: kk.sessionId,
            attributes: GF(VF(VF(VF({}, null === (Rk = Bk.config.sessionTracking) || void 0 === Rk || null === (Rk = Rk.session) || void 0 === Rk ? void 0 : Rk.attributes), null !== (tk = null === (ak = Bk.metas.value.session) || void 0 === ak ? void 0 : ak.attributes) && void 0 !== tk ? tk : {}), {}, {
              isSampled: kk.isSampled.toString()
            }))
          }
        }),
        sk = null !== (Xk = null === (bk = Bk.metas.value.session) || void 0 === bk ? void 0 : bk.overrides) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk || null === (wk = Fk.sessionMeta) || void 0 === wk ? void 0 : wk.overrides;
      xk(sk) || (dk.sessionMeta.overrides = sk);
      const Vk = null === Fk || void 0 === Fk ? void 0 : Fk.sessionId;
      return null != Vk && (dk.sessionMeta.attributes.previousSession = Vk), dk
    }

    function cF(kk) {
      let {
        fetchUserSession: Fk,
        storeUserSession: Bk
      } = kk, Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk, tk = !1;
      return function(kk) {
        if (tk) return;
        const ak = kk.session,
          Xk = Fk();
        let bk = null === ak || void 0 === ak ? void 0 : ak.id;
        const wk = null === ak || void 0 === ak ? void 0 : ak.attributes,
          dk = null === ak || void 0 === ak ? void 0 : ak.overrides,
          sk = null === Xk || void 0 === Xk ? void 0 : Xk.sessionMeta,
          Vk = null === sk || void 0 === sk ? void 0 : sk.overrides,
          Jk = !!dk && !vF(dk, Vk),
          Ak = !!wk && !vF(wk, null === sk || void 0 === sk ? void 0 : sk.attributes);
        if (ak && bk !== (null === Xk || void 0 === Xk ? void 0 : Xk.sessionId) || Ak || Jk) {
          var ek, yk;
          const kk = null != Xk && bk === Xk.sessionId,
            Fk = UF(kk ? Xk : HF({
              sessionId: bk,
              isSampled: JF(Rk)
            }, Rk), Xk, Rk),
            ak = null === Xk || void 0 === Xk || null === (ek = Xk.sessionMeta) || void 0 === ek || null === (ek = ek.attributes) || void 0 === ek ? void 0 : ek.previousSession;
          kk && null != ak && ak !== Fk.sessionId && (Fk.sessionMeta.attributes.previousSession = ak), (null === (yk = Fk.sessionMeta.attributes) || void 0 === yk ? void 0 : yk.previousSession) === Fk.sessionId && delete Fk.sessionMeta.attributes.previousSession, Bk(Fk),
            function(kk, Fk) {
              let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var tk, ak, Xk;
              if (!Fk) return;
              const bk = Bk.serviceName,
                wk = null !== (tk = null !== (ak = Rk.serviceName) && void 0 !== ak ? ak : null === (Xk = kk.metas.value.app) || void 0 === Xk ? void 0 : Xk.name) && void 0 !== tk ? tk : "";
              bk && bk !== wk && kk.api.pushEvent(SF, {
                serviceName: bk,
                previousServiceName: wk
              })
            }(Rk, Jk, dk, Vk), tk = !0;
          try {
            Rk.api.setSession(Fk.sessionMeta)
          } finally {
            tk = !1
          }
        }
      }
    }

    function GF(kk) {
      const Fk = {};
      for (const Bk of Object.keys(kk)) {
        const Rk = kk[Bk];
        void 0 !== Rk && (Fk[Bk] = Rk)
      }
      return Fk
    }

    function TF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== kk && void 0 !== kk ? kk : {}, function() {
        const kk = new WeakSet;
        return function(Fk, Bk) {
          if (Hk(Bk) && null !== Bk) {
            if (kk.has(Bk)) return null;
            kk.add(Bk)
          }
          return Bk
        }
      }())
    }

    function rF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Fk = {};
      for (const [Bk, Rk] of Object.entries(kk)) Fk[Bk] = Hk(Rk) && null !== Rk ? TF(Rk) : String(Rk);
      return Fk
    }
    var DF = class kk {
      constructor() {
        var Fk = this;
        let Bk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk;
        this.context = Bk, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = kk => {
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
        }, this.recordActivity = gF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: bk
        }), this.updateUserSession = MF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: bk
        }, Bk), this.init()
      }
      static removeUserSession() {
        RF(tk, kk.storageTypeLocal)
      }
      static storeUserSession(Fk) {
        BF(tk, TF(Fk), kk.storageTypeLocal)
      }
      static fetchUserSession() {
        const Fk = FF(tk, kk.storageTypeLocal);
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
        })), this.context.metas.addListener(cF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession
        }, this.context))
      }
    };
    DF.storageTypeLocal = Qk;
    var zF = class kk {
      constructor() {
        var Fk = this;
        let Bk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk;
        this.context = Bk, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: kk = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Fk.updateUserSession({
            refreshActivity: kk
          })
        }, this.recordActivity = gF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: bk
        }), this.updateUserSession = MF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: bk
        }, Bk), this.init()
      }
      static removeUserSession() {
        RF(tk, kk.storageTypeSession)
      }
      static storeUserSession(Fk) {
        BF(tk, TF(Fk), kk.storageTypeSession)
      }
      static fetchUserSession() {
        const Fk = FF(tk, kk.storageTypeSession);
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
        })), this.context.metas.addListener(cF({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession
        }, this.context))
      }
    };
    zF.storageTypeSession = Ik;
    const PF = new WeakMap;

    function hF(kk) {
      let Fk = PF.get(kk);
      if (!Fk) {
        let Bk = [],
          Rk = [];
        Fk = {
          addSessionUpdateListener: kk => {
            Bk.push(kk)
          },
          removeSessionUpdateListener: kk => {
            Bk = Bk.filter((Fk => Fk !== kk))
          },
          notifySessionUpdate: kk => {
            Bk.forEach((Fk => Fk(kk)))
          },
          shouldCapture: () => Rk.every((kk => kk())),
          addCaptureFilter: kk => {
            Rk.push(kk)
          },
          removeCaptureFilter: kk => {
            Rk = Rk.filter((Fk => Fk !== kk))
          }
        }, PF.set(kk, Fk)
      }
      return Fk
    }
    var qF = class {
      constructor(kk, Fk, Bk) {
        this.metas = kk, this.transports = Fk, this.onActivate = Bk, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = kk => {
          var Fk, Bk, Rk;
          const tk = this.pending;
          var ak, Xk;
          if ("overrides" === kk.type) return void(this.pending = {
            reset: null !== (ak = null === tk || void 0 === tk ? void 0 : tk.reset) && void 0 !== ak && ak,
            inheritOverrides: null === (Xk = null === tk || void 0 === tk ? void 0 : tk.inheritOverrides) || void 0 === Xk || Xk,
            session: VF(VF({}, null === tk || void 0 === tk ? void 0 : tk.session), {}, {
              overrides: VF(VF({}, null === tk || void 0 === tk ? void 0 : tk.session.overrides), kk.overrides)
            })
          });
          const bk = kk.session,
            wk = xk(bk) || null != bk && "id" in bk && !bk.id,
            dk = null !== (Fk = null === bk || void 0 === bk ? void 0 : bk.overrides) && void 0 !== Fk ? Fk : null === tk || void 0 === tk ? void 0 : tk.session.overrides;
          this.pending = {
            reset: wk || !(null === bk || void 0 === bk ? void 0 : bk.id) && null !== (Bk = null === tk || void 0 === tk ? void 0 : tk.reset) && void 0 !== Bk && Bk,
            inheritOverrides: !(!kk.overrides && void 0 !== (null === bk || void 0 === bk ? void 0 : bk.overrides)) && (null === (Rk = null === tk || void 0 === tk ? void 0 : tk.inheritOverrides) || void 0 === Rk || Rk),
            session: {
              id: null === bk || void 0 === bk ? void 0 : bk.id,
              attributes: (null === bk || void 0 === bk ? void 0 : bk.attributes) && VF({}, bk.attributes),
              overrides: kk.overrides ? VF(VF({}, null === tk || void 0 === tk ? void 0 : tk.session.overrides), kk.overrides) : dk && VF({}, dk)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var kk, Fk;
        this.waiting = !0, hF(this.metas).addSessionUpdateListener(this.recordUpdate), hF(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (kk = (Fk = this.metas).addCaptureListener) || void 0 === kk || kk.call(Fk, this.activate), this.activate()
      }
      destroy() {
        var kk, Fk;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), hF(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (kk = (Fk = this.metas).removeCaptureListener) || void 0 === kk || kk.call(Fk, this.activate), hF(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function CF(kk) {
      return (null === kk || void 0 === kk ? void 0 : kk.persistent) ? DF : zF
    }

    function ZF() {}
    let pF = function(kk) {
      return kk[kk.OFF = 0] = "OFF", kk[kk.ERROR = 1] = "ERROR", kk[kk.WARN = 2] = "WARN", kk[kk.INFO = 3] = "INFO", kk[kk.VERBOSE = 4] = "VERBOSE", kk
    }({});
    const KF = {
        debug: ZF,
        error: ZF,
        info: ZF,
        prefix: "Faro",
        warn: ZF
      },
      xF = 1;

    function jF(kk) {
      return jF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, jF(kk)
    }

    function lF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != jF(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != jF(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == jF(Fk) ? Fk : Fk + ""
    }

    function nF(kk, Fk, Bk) {
      return (Fk = lF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function IF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function QF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? IF(Object(Bk), !0).forEach((function(Fk) {
          nF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : IF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }
    const kB = QF({}, console);
    var FB = class {
        constructor() {
          this.unpatchedConsole = kB, this.internalLogger = KF, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
          this.internalLogger.debug(`${this.name}\n`, ...Fk)
        }
        logInfo() {
          for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
          this.internalLogger.info(`${this.name}\n`, ...Fk)
        }
        logWarn() {
          for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
          this.internalLogger.warn(`${this.name}\n`, ...Fk)
        }
        logError() {
          for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
          this.internalLogger.error(`${this.name}\n`, ...Fk)
        }
      },
      BB = class extends FB {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const RB = "2.12.1";
    var tB = class extends BB {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = RB, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(kk) {
        var Fk;
        const Bk = kk.session;
        if (Bk && Bk.id !== (null === (Fk = this.notifiedSession) || void 0 === Fk ? void 0 : Fk.id)) {
          var Rk;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Bk);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Rk = Bk.attributes) || void 0 === Rk ? void 0 : Rk.previousSession)) return this.api.pushEvent(EF, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Bk);
          this.notifiedSession = Bk, this.api.pushEvent(LF, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(kk, Fk, Bk) {
        const Rk = null === Bk || void 0 === Bk ? void 0 : Bk.session;
        let tk, ak, Xk = kk.fetchUserSession();
        if (Fk.persistent && Fk.maxSessionPersistenceTime && Xk) {
          const kk = AF();
          Xk.lastActivity < kk - Fk.maxSessionPersistenceTime && (DF.removeUserSession(), Xk = null)
        }
        const bk = uF(Xk);
        if ((null === Bk || void 0 === Bk ? void 0 : Bk.reset) || !bk || (null === Rk || void 0 === Rk ? void 0 : Rk.id) && Rk.id !== (null === Xk || void 0 === Xk ? void 0 : Xk.sessionId)) {
          var wk, dk, sk, Vk, Jk, Ak;
          ak = HF({
            sessionId: (null === Bk || void 0 === Bk ? void 0 : Bk.reset) ? void 0 : null !== (wk = null === Rk || void 0 === Rk ? void 0 : Rk.id) && void 0 !== wk ? wk : null === (dk = Fk.session) || void 0 === dk ? void 0 : dk.id,
            isSampled: JF(this)
          }, this);
          const kk = ak.sessionId,
            ek = Bk && bk ? null === Xk || void 0 === Xk || null === (sk = Xk.sessionMeta) || void 0 === sk ? void 0 : sk.overrides : void 0,
            yk = ek ? VF(VF({}, null === (Vk = Fk.session) || void 0 === Vk ? void 0 : Vk.overrides), ek) : null === (Jk = Fk.session) || void 0 === Jk ? void 0 : Jk.overrides;
          ak.sessionMeta = VF({
            id: kk,
            attributes: VF({
              isSampled: ak.isSampled.toString()
            }, null === (Ak = Fk.session) || void 0 === Ak ? void 0 : Ak.attributes)
          }, yk ? {
            overrides: yk
          } : {}), tk = LF
        } else {
          var ek, yk;
          const kk = null === Xk || void 0 === Xk ? void 0 : Xk.sessionId;
          ak = HF({
            sessionId: kk,
            isSampled: Xk.isSampled || !1,
            started: null === Xk || void 0 === Xk ? void 0 : Xk.started
          }, this);
          const Bk = null === Xk || void 0 === Xk ? void 0 : Xk.sessionMeta,
            Rk = VF(VF({}, null === (ek = Fk.session) || void 0 === ek ? void 0 : ek.overrides), null === Bk || void 0 === Bk ? void 0 : Bk.overrides);
          ak.sessionMeta = VF(VF({}, Fk.session), {}, {
            id: kk,
            attributes: VF(VF(VF({}, null === (yk = Fk.session) || void 0 === yk ? void 0 : yk.attributes), null === Bk || void 0 === Bk ? void 0 : Bk.attributes), {}, {
              isSampled: ak.isSampled.toString()
            }),
            overrides: Rk
          }), tk = OF
        }
        var fk;
        if (Rk && (ak.sessionMeta = VF(VF({}, ak.sessionMeta), {}, {
            attributes: VF(VF(VF({}, null === (fk = ak.sessionMeta) || void 0 === fk ? void 0 : fk.attributes), Rk.attributes), {}, {
              isSampled: ak.isSampled.toString()
            })
          }), Rk.overrides)) {
          const kk = (null === Bk || void 0 === Bk ? void 0 : Bk.inheritOverrides) ? VF(VF({}, ak.sessionMeta.overrides), Rk.overrides) : Rk.overrides;
          Object.keys(kk).length > 0 ? ak.sessionMeta.overrides = kk : delete ak.sessionMeta.overrides
        }
        return {
          initialSession: ak,
          lifecycleType: tk
        }
      }
      registerBeforeSendHook(kk) {
        var Fk;
        this.beforeSendHook = Fk => {
          var Bk, Rk;
          const tk = null === (Bk = Fk.meta.session) || void 0 === Bk ? void 0 : Bk.id;
          tk && !this.transports.isPaused() && kk(tk);
          const ak = null === (Rk = Fk.meta.session) || void 0 === Rk ? void 0 : Rk.attributes;
          if (ak && "true" === (null === ak || void 0 === ak ? void 0 : ak.isSampled)) {
            var Xk;
            let kk = JSON.parse(JSON.stringify(Fk));
            const Bk = null === (Xk = kk.meta.session) || void 0 === Xk ? void 0 : Xk.attributes;
            var bk;
            if (null === Bk || void 0 === Bk || delete Bk.isSampled, 0 === Object.keys(null !== Bk && void 0 !== Bk ? Bk : {}).length) null === (bk = kk.meta.session) || void 0 === bk || delete bk.attributes;
            return kk
          }
          return null
        }, null === (Fk = this.transports) || void 0 === Fk || Fk.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var kk;
        this.logDebug("init session instrumentation");
        const Fk = document.prerendering;
        var Bk;
        if ((null === (kk = this.config.sessionTracking) || void 0 === kk ? void 0 : kk.enabled) && (Fk || this.prerenderSession)) return null !== (Bk = this.prerenderSession) && void 0 !== Bk || (this.prerenderSession = new qF(this.metas, this.transports, (kk => {
          this.prerenderSession = void 0, this.initializeSession(kk)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(kk) {
        const Fk = this.config.sessionTracking;
        if (null === Fk || void 0 === Fk ? void 0 : Fk.enabled) {
          var Bk, Rk;
          const tk = CF(Fk),
            ak = new tk(this);
          this.isAdoptingSession = ak.isAdopting, this.registerBeforeSendHook(ak.recordActivity);
          const {
            initialSession: Xk,
            lifecycleType: bk
          } = this.createInitialSession(tk, Fk, kk);
          tk.storeUserSession(Xk);
          const wk = Xk.sessionMeta;
          this.notifiedSession = wk, this.api.setSession(wk), this.captureListener = () => {
            this.transports.isPaused() || ak.updateSession({
              refreshActivity: !1
            })
          }, null === (Bk = (Rk = this.metas).addCaptureListener) || void 0 === Bk || Bk.call(Rk, this.captureListener), bk === LF && this.api.pushEvent(LF, {}, void 0, {
            skipDedupe: !0
          }), bk === OF && this.api.pushEvent(OF, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var kk, Fk, Bk;
        (null === (kk = this.prerenderSession) || void 0 === kk || kk.destroy(), this.captureListener) && (null === (Fk = (Bk = this.metas).removeCaptureListener) || void 0 === Fk || Fk.call(Bk, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function aB(kk, Fk, Bk, Rk) {
      const tk = {
        filename: kk || document.location.href,
        function: Fk || "?"
      };
      return void 0 !== Bk && (tk.lineno = Bk), void 0 !== Rk && (tk.colno = Rk), tk
    }
    const XB = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      bB = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      wB = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      dB = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      sB = "safari-extension",
      VB = "safari-web-extension",
      JB = /Minified React error #\d+;/i;

    function AB(kk, Fk) {
      const Bk = null === kk || void 0 === kk ? void 0 : kk.includes(sB),
        Rk = !Bk && (null === kk || void 0 === kk ? void 0 : kk.includes("safari-web-extension"));
      return Bk || Rk ? [(null === kk || void 0 === kk ? void 0 : kk.includes("@")) ? kk.split("@")[0] : kk, Bk ? `${sB}:${Fk}` : `${VB}:${Fk}`] : [kk, Fk]
    }
    const eB = 1024;

    function yB(kk) {
      let Fk = [];
      kk.stacktrace ? Fk = kk.stacktrace.split("\n").filter(((kk, Fk) => Fk % 2 === 0)) : kk.stack && (Fk = kk.stack.split("\n"));
      const Bk = Fk.reduce(((Fk, Bk, Rk) => {
        if (Bk.length > eB) return Fk;
        let tk, ak, Xk, bk, wk;
        if (tk = XB.exec(Bk)) {
          if (ak = tk[1], Xk = tk[2], bk = tk[3], wk = tk[4], null === Xk || void 0 === Xk ? void 0 : Xk.startsWith("eval")) {
            const kk = bB.exec(Xk);
            kk && (Xk = kk[1], bk = kk[2], wk = kk[3])
          }
          Xk = (null === Xk || void 0 === Xk ? void 0 : Xk.startsWith("address at ")) ? Xk.substring(11) : Xk, [ak, Xk] = AB(ak, Xk)
        } else if (tk = wB.exec(Bk)) {
          if (ak = tk[1], Xk = tk[3], bk = tk[4], wk = tk[5], Xk && Xk.includes(" > eval")) {
            const kk = dB.exec(Xk);
            kk && (ak = ak || "eval", Xk = kk[1], bk = kk[2])
          } else 0 === Rk && !wk && Ok(kk.columnNumber) && (wk = String(kk.columnNumber + 1));
          [ak, Xk] = AB(ak, Xk)
        }
        return (Xk || ak) && Fk.push(aB(Xk, ak, bk ? Number(bk) : void 0, wk ? Number(wk) : void 0)), Fk
      }), []);
      return JB.test(kk.message) ? Bk.slice(1) : Bk
    }

    function fB(kk) {
      return {
        frames: yB(kk)
      }
    }
    const mB = "http-request-start",
      WB = "http-request-end";
    var vB = class kk {
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
          Bk = kk => {
            Fk.notify(kk), Rk.unsubscribe()
          },
          Rk = this.subscribe(Bk),
          tk = Fk.unsubscribe.bind(Fk);
        return this.withUnsubscribeOverride(Fk, tk, Bk)
      }
      takeWhile(Fk) {
        const Bk = new kk,
          Rk = kk => {
            Fk(kk) ? Bk.notify(kk) : Bk.unsubscribe(Rk)
          };
        this.subscribe(Rk);
        const tk = Bk.unsubscribe.bind(Bk);
        return this.withUnsubscribeOverride(Bk, tk, Rk)
      }
      filter(Fk) {
        const Bk = new kk,
          Rk = kk => {
            Fk(kk) && Bk.notify(kk)
          };
        this.subscribe(Rk);
        const tk = Bk.unsubscribe.bind(Bk);
        return this.withUnsubscribeOverride(Bk, tk, Rk)
      }
      merge() {
        const Fk = new kk,
          Bk = [];
        for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
        tk.forEach((kk => {
          const Rk = kk.subscribe((kk => {
            Fk.notify(kk)
          }));
          Bk.push(Rk)
        }));
        const Xk = Fk.unsubscribeAll.bind(Fk);
        return Fk.unsubscribe = () => {
          Bk.forEach((kk => kk.unsubscribe())), Xk()
        }, Fk
      }
      withUnsubscribeOverride(kk, Fk, Bk) {
        return kk.unsubscribe = kk => {
          Fk(kk), this.unsubscribe(Bk)
        }, kk
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let iB = function(kk) {
      return kk.TRACE = "trace", kk.DEBUG = "debug", kk.INFO = "info", kk.LOG = "log", kk.WARN = "warn", kk.ERROR = "error", kk
    }({});
    const YB = "log",
      oB = ["trace", "debug", "info", "log", "warn", "error"];
    let LB, OB = !1;
    const EB = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      SB = "Error",
      NB = kk => kk.map((kk => Hk(kk) ? TF(kk) : String(kk))).join(" ");

    function HB(kk) {
      let Fk, Bk, Rk, tk, ak = [];
      if (zk(kk) && kk.error) Fk = kk.error.message, Bk = kk.error.name, ak = yB(kk.error);
      else if ((Rk = Pk(kk)) || hk(kk)) {
        const {
          name: tk,
          message: ak
        } = kk;
        Bk = null !== tk && void 0 !== tk ? tk : Rk ? "DOMError" : "DOMException", Fk = ak ? `${Bk}: ${ak}` : Bk
      } else Dk(kk) ? (Bk = kk.name, Fk = kk.message, ak = yB(kk)) : (Hk(kk) || (tk = Tk(kk))) && (Bk = tk ? kk.constructor.name : void 0, Fk = `Non-Error exception captured with keys: ${Object.keys(kk)}`);
      return [Fk, Bk, ak]
    }

    function uB(kk) {
      const [Fk, Bk, Rk, tk, ak] = kk;
      let Xk, bk, wk = [];
      const dk = Lk(Fk),
        sk = aB(Bk, "?", Rk, tk);
      return ak || !dk ? ([Xk, bk, wk] = HB(null !== ak && void 0 !== ak ? ak : Fk), 0 === wk.length && (wk = [sk])) : dk && ([Xk, bk] = function(kk) {
        var Fk, Bk;
        const Rk = kk.match(EB),
          tk = null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk[1]) && void 0 !== Fk ? Fk : SB;
        return [null !== (Bk = null === Rk || void 0 === Rk ? void 0 : Rk[2]) && void 0 !== Bk ? Bk : kk, tk]
      }(Fk), wk = [sk]), {
        value: Xk,
        type: bk,
        stackFrames: wk
      }
    }

    function MB(kk, Fk) {
      return Dk(kk[0]) ? uB(kk) : {
        value: Fk(kk)
      }
    }
    const gB = kk => kk.map((kk => {
      try {
        return String(kk)
      } catch (Fk) {
        return ""
      }
    })).join(" ");
    var UB = class kk extends BB {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = RB, this.errorSerializer = gB
      }
      initialize() {
        var Fk, Bk;
        const Rk = this.config.consoleInstrumentation,
          tk = (null === Rk || void 0 === Rk ? void 0 : Rk.serializeErrors) || !!(null === Rk || void 0 === Rk ? void 0 : Rk.errorSerializer);
        this.errorSerializer = tk ? null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk.errorSerializer) && void 0 !== Fk ? Fk : NB : gB;
        const ak = null !== (Bk = null === Rk || void 0 === Rk ? void 0 : Rk.disabledLevels) && void 0 !== Bk ? Bk : kk.defaultDisabledLevels,
          Xk = function(kk) {
            if (LB || (LB = new vB), !OB) {
              const Fk = null !== kk && void 0 !== kk ? kk : kB;
              oB.forEach((kk => {
                console[kk] = function() {
                  for (var Bk, Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
                  LB.notify({
                    type: "console",
                    level: kk,
                    args: tk
                  }), null === (Bk = Fk[kk]) || void 0 === Bk || Bk.apply(console, tk)
                }
              })), OB = !0
            }
            return LB
          }(this.unpatchedConsole);
        this.subscription = Xk.subscribe((Fk => {
          let {
            level: Bk,
            args: tk
          } = Fk;
          if (!ak.includes(Bk)) try {
            if (Bk !== iB.ERROR || (null === Rk || void 0 === Rk ? void 0 : Rk.consoleErrorAsLog))
              if (Bk === iB.ERROR && (null === Rk || void 0 === Rk ? void 0 : Rk.consoleErrorAsLog)) {
                const {
                  value: Fk,
                  type: Rk,
                  stackFrames: ak
                } = MB(tk, this.errorSerializer);
                this.api.pushLog(Fk ? [kk.consoleErrorPrefix + Fk] : tk, {
                  level: Bk,
                  context: {
                    value: null !== Fk && void 0 !== Fk ? Fk : "",
                    type: null !== Rk && void 0 !== Rk ? Rk : "",
                    stackFrames: (null === ak || void 0 === ak ? void 0 : ak.length) ? NB(ak) : ""
                  }
                })
              } else this.api.pushLog(tk, {
                level: Bk
              });
            else {
              const {
                value: Fk,
                type: Bk,
                stackFrames: Rk
              } = MB(tk, this.errorSerializer);
              if (Fk && !Bk && !Rk) return void this.api.pushError(new Error(kk.consoleErrorPrefix + Fk));
              this.api.pushError(new Error(kk.consoleErrorPrefix + Fk), {
                type: Bk,
                stackFrames: Rk
              })
            }
          } catch (Xk) {
            this.logError(Xk)
          }
        }))
      }
      destroy() {
        var kk;
        null === (kk = this.subscription) || void 0 === kk || kk.unsubscribe(), this.subscription = void 0
      }
    };
    UB.defaultDisabledLevels = [iB.DEBUG, iB.TRACE, iB.LOG], UB.consoleErrorPrefix = "console.error: ";
    const cB = [];
    var GB = class extends BB {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = RB
      }
      initialize() {
        this.logDebug("Initializing"),
          function(kk) {
            const Fk = window.onerror;
            window.onerror = function() {
              for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
              try {
                const {
                  value: Fk,
                  type: Bk,
                  stackFrames: tk
                } = uB(Rk), ak = Rk[4];
                if (Fk) {
                  const Rk = {
                    type: Bk,
                    stackFrames: tk
                  };
                  null != ak && (Rk.originalError = ak), kk.pushError(new Error(Fk), Rk)
                }
              } finally {
                null === Fk || void 0 === Fk || Fk.apply(window, Rk)
              }
            }
          }(this.api),
          function(kk) {
            const Fk = Fk => {
              var Bk;
              let Rk, tk, ak = Fk;
              if (ak.reason) ak = Fk.reason;
              else if (null === (Bk = Fk.detail) || void 0 === Bk ? void 0 : Bk.reason) {
                var Xk;
                ak = null === (Xk = Fk.detail) || void 0 === Xk ? void 0 : Xk.reason
              }
              let bk = [];
              ck(ak) ? (Rk = `Non-Error promise rejection captured with value: ${String(ak)}`, tk = "UnhandledRejection") : [Rk, tk, bk] = HB(ak), Rk && kk.pushError(new Error(Rk), {
                type: tk,
                stackFrames: bk
              })
            };
            window.addEventListener("unhandledrejection", Fk), cB.push(Fk)
          }(this.api)
      }
    };
    const TB = "unknown";
    var rB = class extends BB {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = RB, this.waitingForActivation = !1, this.sendViewChangedEvent = kk => {
          var Fk;
          if (this.waitingForActivation || document.prerendering) return;
          const Bk = kk.view;
          if (Bk && Bk.name !== (null === (Fk = this.notifiedView) || void 0 === Fk ? void 0 : Fk.name)) {
            var Rk, tk, ak;
            const kk = null !== (Rk = null === (tk = this.notifiedView) || void 0 === tk ? void 0 : tk.name) && void 0 !== Rk ? Rk : TB;
            this.notifiedView = Bk, this.api.pushEvent(oF, {
              fromView: kk,
              toView: null !== (ak = Bk.name) && void 0 !== ak ? ak : TB
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
    class DB {
      t;
      o = 0;
      i = [];
      l(kk) {
        if (kk.hadRecentInput) return;
        const Fk = this.i[0],
          Bk = this.i.at(-1);
        this.o && Fk && Bk && kk.startTime - Bk.startTime < 1e3 && kk.startTime - Fk.startTime < 5e3 ? (this.o += kk.value, this.i.push(kk)) : (this.o = kk.value, this.i = [kk]), this.t?.(kk)
      }
    }
    const zB = () => {
        const kk = performance.getEntriesByType("navigation")[0];
        if (kk && kk.responseStart > 0 && kk.responseStart < performance.now()) return kk
      },
      PB = kk => {
        if ("loading" === document.readyState) return "loading";
        const Fk = zB();
        if (Fk) {
          if (kk < Fk.domInteractive) return "loading";
          if (0 === Fk.domContentLoadedEventStart || kk < Fk.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Fk.domComplete || kk < Fk.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      hB = kk => {
        const Fk = kk.nodeName;
        return 1 === kk.nodeType ? Fk.toLowerCase() : Fk.toUpperCase().replace(/^#/, "")
      },
      qB = kk => {
        let Fk = "";
        try {
          for (; 9 !== kk?.nodeType;) {
            const Bk = kk,
              Rk = Bk.id ? "#" + Bk.id : [hB(Bk), ...Array.from(Bk.classList ?? []).sort()].join(".");
            if (Fk.length + Rk.length > 99) return Fk || Rk;
            if (Fk = Fk ? Rk + ">" + Fk : Rk, Bk.id) break;
            kk = Bk.parentNode
          }
        } catch {}
        return Fk
      },
      CB = new WeakMap;

    function ZB(kk, Fk) {
      let Bk = CB.get(Fk);
      return Bk || (Bk = new WeakMap, CB.set(Fk, Bk)), Bk.get(kk) || Bk.set(kk, new Fk), Bk.get(kk)
    }
    let pB = -1;
    const KB = () => pB,
      xB = kk => {
        addEventListener("pageshow", (Fk => {
          Fk.persisted && (pB = Fk.timeStamp, kk(Fk))
        }), !0)
      },
      jB = (kk, Fk, Bk, Rk) => {
        let tk, ak;
        return Xk => {
          Fk.value >= 0 && (Xk || Rk) && (ak = Fk.value - (tk ?? 0), (ak || void 0 === tk) && (tk = Fk.value, Fk.delta = ak, Fk.rating = ((kk, Fk) => kk > Fk[1] ? "poor" : kk > Fk[0] ? "needs-improvement" : "good")(Fk.value, Bk), kk(Fk)))
        }
      },
      lB = kk => {
        requestAnimationFrame((() => requestAnimationFrame((() => kk()))))
      },
      nB = () => zB()?.activationStart ?? 0;
    let IB = -1;
    const QB = new Set,
      kR = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      FR = kk => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === kk.type)
            for (const kk of QB) kk();
          isFinite(IB) || (IB = "visibilitychange" === kk.type ? kk.timeStamp : 0, removeEventListener("prerenderingchange", FR, !0))
        }
      },
      BR = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (IB = 1 / 0), IB < 0) {
          const kk = nB(),
            Fk = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Fk => "hidden" === Fk.name && Fk.startTime >= kk))?.startTime;
          IB = Fk ?? kR(), addEventListener("visibilitychange", FR, !0), addEventListener("prerenderingchange", FR, !0), xB((() => {
            setTimeout((() => {
              IB = kR()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return IB
          },
          onHidden(kk) {
            QB.add(kk)
          }
        }
      },
      RR = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0,
          Xk = arguments.length > 6 ? arguments[6] : void 0;
        const bk = zB(),
          wk = bk?.navigationId || 0;
        let dk = "navigate";
        return Bk ? dk = Bk : KB() >= 0 ? dk = "back-forward-cache" : bk && (document.prerendering || nB() > 0 ? dk = "prerender" : document.wasDiscarded ? dk = "restore" : bk.type && (dk = bk.type.replace(/_/g, "-"))), {
          name: kk,
          value: Fk,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: dk,
          navigationId: Rk || wk,
          navigationInteractionId: tk,
          navigationURL: ak || bk?.name,
          navigationStartTime: Xk || 0
        }
      },
      tR = function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Rk = kk.filter((kk => PerformanceObserver.supportedEntryTypes.includes(kk)));
          if (Rk.length > 0) {
            const kk = new PerformanceObserver((kk => {
              queueMicrotask((() => {
                const Bk = kk.getEntries();
                Rk.length > 1 && Bk.sort(((kk, Fk) => kk.startTime + kk.duration - (Fk.startTime + Fk.duration))), Fk(Bk)
              }))
            }));
            for (const Fk of Rk) kk.observe({
              type: Fk,
              buffered: !0,
              ...Bk
            });
            return kk
          }
        } catch {}
      },
      aR = kk => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && kk && kk.reportSoftNavs,
      XR = (kk, Fk) => {
        if (kk.set(Fk.navigationId, Fk), kk.size > 2) {
          const Fk = kk.keys().next().value;
          void 0 !== Fk && kk.delete(Fk)
        }
      },
      bR = kk => {
        let Fk = !1;
        return () => {
          Fk || (kk(), Fk = !0)
        }
      };
    class wR {
      u
    }
    const dR = kk => {
        document.prerendering ? addEventListener("prerenderingchange", kk, !0) : kk()
      },
      sR = [1800, 3e3],
      VR = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Bk = aR(Fk);
        dR((() => {
          const Rk = ZB(Fk, wR),
            tk = BR();
          let ak, Xk = RR("FCP");
          const bk = tR(["paint"], (kk => {
            for (const Fk of kk) "first-contentful-paint" === Fk.name && (bk.disconnect(), Fk.startTime < tk.firstHiddenTime && (Xk.value = Math.max(Fk.startTime - nB(), 0), Xk.entries.push(Fk), Xk.navigationId = Fk.navigationId || Xk.navigationId, ak(!0)))
          }));
          bk && (ak = jB(kk, Xk, sR, Fk.reportAllChanges), xB((Bk => {
            Xk = RR("FCP", -1, "back-forward-cache", Xk.navigationId, Xk.navigationInteractionId, Xk.navigationURL, KB()), ak = jB(kk, Xk, sR, Fk.reportAllChanges), lB((() => {
              Xk.value = performance.now() - Bk.timeStamp, ak(!0)
            }))
          }))), Bk && tR(["soft-navigation"], (Bk => {
            Bk.forEach((Bk => {
              Rk.u && Bk.navigationId && XR(Rk.u, Bk);
              const tk = Math.max((Bk.presentationTime || Bk.paintTime || 0) - Bk.startTime, 0);
              Xk = RR("FCP", tk, "soft-navigation", Bk.navigationId, Bk.interactionId, Bk.name, Bk.startTime), ak = jB(kk, Xk, sR, Fk.reportAllChanges), ak(!0)
            }))
          }), Fk)
        }))
      },
      JR = [.1, .25],
      AR = kk => kk.find((kk => 1 === kk.node?.nodeType)) || kk[0];
    let eR = 0,
      yR = 1 / 0,
      fR = 0;
    const mR = kk => {
      for (const Fk of kk) Fk.interactionId && (yR = Math.min(yR, Fk.interactionId), fR = Math.max(fR, Fk.interactionId), eR = fR ? (fR - yR) / 7 + 1 : 0)
    };
    let WR;
    const vR = () => WR ? eR : performance.interactionCount ?? 0;
    class iR {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return vR() - this.h
      }
      D() {
        this.h = vR(), this.v.length = 0, this.p.clear()
      }
      S(kk) {
        const Fk = this.T(),
          Bk = Math.min(this.v.length - 1, Math.floor(Fk / 50));
        return !Fk || -1 !== Bk || "soft-navigation" !== kk && "back-forward-cache" !== kk ? this.v[Bk] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(kk) {
        if (this.m?.(kk), !kk.interactionId) return;
        const Fk = this.v.at(-1);
        let Bk = this.p.get(kk.interactionId);
        if (Bk || this.v.length < 10 || kk.duration > Fk.k) {
          if (Bk ? kk.duration > Bk.k ? (Bk.entries = [kk], Bk.k = kk.duration) : kk.duration === Bk.k && kk.startTime === Bk.entries[0].startTime && Bk.entries.push(kk) : (Bk = {
              id: kk.interactionId,
              entries: [kk],
              k: kk.duration
            }, this.p.set(Bk.id, Bk), this.v.push(Bk)), this.v.sort(((kk, Fk) => Fk.k - kk.k)), this.v.length > 10) {
            const kk = this.v.splice(10);
            for (const Fk of kk) this.p.delete(Fk.id)
          }
          this.M?.(Bk)
        }
      }
    }
    const YR = kk => {
        const Fk = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Bk = globalThis.requestIdleCallback || setTimeout,
          Rk = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) kk();
        else {
          const tk = bR(kk);
          let ak = -1;
          const Xk = () => {
            Rk(ak), tk()
          };
          addEventListener("visibilitychange", Xk, {
            once: !0,
            capture: !0
          }), ak = Bk((() => {
            removeEventListener("visibilitychange", Xk, {
              capture: !0
            }), tk()
          }), {
            timeout: Fk
          })
        }
      },
      oR = [200, 500],
      LR = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Bk = ZB(Fk = Object.assign({}, Fk), iR);
        let Rk = [],
          tk = [],
          ak = 0;
        const Xk = new WeakMap,
          bk = new WeakMap;
        let wk = !1;
        const dk = () => {
            wk || (wk = !0, YR(sk))
          },
          sk = () => {
            const kk = new Set(Bk.v.map((kk => Xk.get(kk.entries[0])))),
              Fk = tk.length - 10;
            tk = tk.filter(((Bk, Rk) => Rk >= Fk || kk.has(Bk)));
            const bk = new Set;
            for (const Bk of tk) {
              const kk = Vk(Bk.startTime, Bk.processingEnd);
              for (const Fk of kk) bk.add(Fk)
            }
            const dk = Rk.length - 10;
            Rk = Rk.filter(((kk, Fk) => bk.has(kk) || Fk >= dk && kk.startTime > ak)), wk = !1
          };
        Bk.m = kk => {
          const Bk = kk.startTime + kk.duration;
          let Rk;
          ak = Math.max(ak, kk.processingEnd);
          for (let ak = tk.length - 1; ak >= 0; ak--) {
            const Xk = tk[ak];
            if (Math.abs(Bk - Xk.renderTime) <= 8) {
              Rk = Xk, Rk.startTime = Math.min(kk.startTime, Rk.startTime), Rk.processingStart = Math.min(kk.processingStart, Rk.processingStart), Rk.processingEnd = Math.max(kk.processingEnd, Rk.processingEnd), Fk.includeProcessedEventEntries && Rk.entries.push(kk);
              break
            }
          }
          Rk || (Rk = {
            startTime: kk.startTime,
            processingStart: kk.processingStart,
            processingEnd: kk.processingEnd,
            renderTime: Bk,
            entries: Fk.includeProcessedEventEntries ? [kk] : []
          }, tk.push(Rk)), kk.interactionId && Xk.set(kk, Rk), dk()
        }, Bk.M = kk => {
          if (!bk.get(kk)) {
            const Bk = kk.entries.find((kk => kk.target))?.target;
            if (Bk) {
              const Rk = Fk.generateTarget?.(Bk) ?? qB(Bk);
              bk.set(kk, Rk)
            } else {
              const Fk = kk.entries.find((kk => kk.targetSelector))?.targetSelector;
              Fk && bk.set(kk, Fk)
            }
          }
        };
        const Vk = (kk, Fk) => {
          const Bk = [];
          for (const tk of Rk)
            if (!(tk.startTime + tk.duration < kk)) {
              if (tk.startTime > Fk) break;
              Bk.push(tk)
            } return Bk
        };
        tR(["long-animation-frame"], (kk => {
            Rk = Rk.concat(kk), dk()
          }), Fk),
          function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Bk = BR();
            dR((() => {
              "interactionCount" in performance || WR || (WR = tR(["event"], mR, {
                durationThreshold: 0
              }));
              let Rk, tk = RR("INP");
              const ak = ZB(Fk, iR),
                Xk = (Bk, Xk, bk, wk, dk) => {
                  ak.D(), tk = RR("INP", -1, Bk, Xk, bk, wk, dk), Rk = jB(kk, tk, oR, Fk.reportAllChanges)
                },
                bk = () => {
                  const kk = ak.S(tk.navigationType);
                  kk && kk.k !== tk.value && (tk.value = kk.k, tk.entries = kk.entries, Rk())
                },
                wk = kk => {
                  bk(), Rk(!0), Xk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime)
                },
                dk = function(kk) {
                  let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  YR((() => {
                    for (const Fk of kk) "soft-navigation" !== Fk.entryType ? ak.l(Fk) : wk(Fk);
                    bk(), Fk && Rk(!0)
                  }))
                },
                sk = ["event", "first-input"];
              aR(Fk) && sk.push("soft-navigation");
              const Vk = tR(sk, dk, {
                ...Fk,
                durationThreshold: Fk.durationThreshold ?? 40
              });
              Rk = jB(kk, tk, oR, Fk.reportAllChanges), Vk && (Bk.onHidden((() => {
                dk(Vk.takeRecords(), !0)
              })), xB((() => {
                Xk("back-forward-cache", tk.navigationId, tk.navigationInteractionId, tk.navigationURL, KB())
              })))
            }))
          }((Fk => {
            kk((kk => {
              if (0 === kk.entries.length) {
                const Fk = kk.navigationStartTime || 0,
                  Bk = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: kk.value,
                    loadState: PB(Fk)
                  };
                return Object.assign(kk, {
                  attribution: Bk
                })
              }
              const Fk = kk.entries[0],
                Rk = Xk.get(Fk),
                tk = Math.max(Rk.processingStart, Fk.startTime),
                ak = Math.max(Fk.startTime + Fk.duration, tk),
                wk = Math.min(Rk.processingEnd, ak),
                dk = Rk.entries.sort(((kk, Fk) => kk.processingStart - Fk.processingStart)),
                sk = Vk(Fk.startTime, wk),
                Jk = Bk.p.get(Fk.interactionId),
                Ak = {
                  interactionTarget: bk.get(Jk),
                  interactionType: Fk.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Fk.startTime,
                  nextPaintTime: ak,
                  processedEventEntries: dk,
                  longAnimationFrameEntries: sk,
                  inputDelay: tk - Fk.startTime,
                  processingDuration: wk - tk,
                  presentationDelay: ak - wk,
                  loadState: PB(Fk.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (kk => {
                const Fk = kk.interactionTime,
                  Bk = kk.nextPaintTime;
                if (!kk.longAnimationFrameEntries?.length || !Fk || !Bk) return;
                const Rk = kk.inputDelay,
                  tk = kk.processingDuration;
                let ak, Xk, bk = 0,
                  wk = 0,
                  dk = 0,
                  sk = 0;
                for (const Ak of kk.longAnimationFrameEntries) {
                  wk = wk + Ak.startTime + Ak.duration - Ak.styleAndLayoutStart;
                  for (const kk of Ak.scripts) {
                    const Bk = kk.startTime + kk.duration;
                    if (Bk < Fk) continue;
                    const dk = Bk - Math.max(Fk, kk.startTime),
                      Vk = kk.duration ? dk / kk.duration * kk.forcedStyleAndLayoutDuration : 0;
                    bk += dk - Vk, wk += Vk, dk > sk && (Xk = kk.startTime < Fk + Rk ? "input-delay" : kk.startTime >= Fk + Rk + tk ? "presentation-delay" : "processing-duration", ak = kk, sk = dk)
                  }
                }
                const Vk = kk.longAnimationFrameEntries.at(-1),
                  Jk = Vk ? Vk.startTime + Vk.duration : 0;
                Jk >= Fk + Rk + tk && (dk = Bk - Jk), ak && Xk && (kk.longestScript = {
                  entry: ak,
                  subpart: Xk,
                  intersectingDuration: sk
                }), kk.totalScriptDuration = bk, kk.totalStyleAndLayoutDuration = wk, kk.totalPaintDuration = dk, kk.totalUnattributedDuration = Bk - Fk - bk - wk - dk
              })(Ak), Object.assign(kk, {
                attribution: Ak
              })
            })(Fk))
          }), Fk)
      };
    class OR {
      m;
      u;
      l(kk) {
        this.m?.(kk)
      }
    }
    const ER = [2500, 4e3];
    let SR = 50;
    const NR = [];
    tR(["resource"], (kk => {
      for (const Fk of kk) NR.push(Fk), NR.length > SR && NR.shift()
    }));
    const HR = [800, 1800],
      uR = kk => {
        document.prerendering ? dR((() => uR(kk))) : "complete" !== document.readyState ? addEventListener("load", (() => uR(kk)), !0) : setTimeout(kk)
      },
      MR = "load_state",
      gR = "time_to_first_byte";
    var UR = class {
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
            const Bk = ZB(Fk = Object.assign({}, Fk), DB),
              Rk = new WeakMap;
            Bk.t = kk => {
                if (kk?.sources?.length) {
                  const Bk = AR(kk.sources),
                    tk = Bk?.node;
                  if (tk) {
                    const kk = Fk.generateTarget?.(tk) ?? qB(tk);
                    Rk.set(Bk, kk)
                  }
                }
              },
              function(kk) {
                let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Bk = BR();
                VR(bR((() => {
                  let Rk, tk = RR("CLS", 0);
                  const ak = ZB(Fk, DB),
                    Xk = (Bk, Xk, bk, wk, dk) => {
                      tk = RR("CLS", 0, Bk, Xk, bk, wk, dk), ak.o = 0, Rk = jB(kk, tk, JR, Fk.reportAllChanges)
                    },
                    bk = function() {
                      let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      ak.o > tk.value && (tk.value = ak.o, tk.entries = ak.i), Rk(kk)
                    },
                    wk = kk => {
                      bk(!0), Xk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime)
                    },
                    dk = kk => {
                      for (const Fk of kk) "soft-navigation" !== Fk.entryType ? ak.l(Fk) : wk(Fk);
                      bk()
                    },
                    sk = ["layout-shift"];
                  aR(Fk) && sk.push("soft-navigation");
                  const Vk = tR(sk, dk);
                  Vk && (Rk = jB(kk, tk, JR, Fk.reportAllChanges), Bk.onHidden((() => {
                    dk(Vk.takeRecords()), Rk(!0)
                  })), xB((() => {
                    Xk("back-forward-cache", tk.navigationId, tk.navigationInteractionId, tk.navigationURL, KB()), lB(Rk)
                  })), setTimeout(Rk))
                })))
              }((Fk => {
                kk((kk => {
                  let Fk = {};
                  if (kk.entries.length) {
                    const Bk = kk.entries.reduce(((kk, Fk) => kk.value > Fk.value ? kk : Fk));
                    if (Bk?.sources?.length) {
                      const kk = AR(Bk.sources);
                      kk && (Fk = {
                        largestShiftTarget: Rk.get(kk),
                        largestShiftTime: Bk.startTime,
                        largestShiftValue: Bk.value,
                        largestShiftSource: kk,
                        largestShiftEntry: Bk,
                        loadState: PB(Bk.startTime)
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
              largestShiftValue: Bk,
              largestShiftTime: Rk,
              largestShiftTarget: tk
            } = kk.attribution, ak = this.buildInitialValues(kk);
            this.addIfPresent(ak, "largest_shift_value", Bk), this.addIfPresent(ak, "largest_shift_time", Rk);
            const Xk = this.buildInitialContext(kk);
            this.addIfPresent(Xk, MR, Fk), this.addIfPresent(Xk, "largest_shift_target", tk), this.pushMeasurement(ak, Xk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureFCP() {
          var kk;
          ! function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Bk = ZB(Fk = Object.assign({}, Fk), wR);
            aR(Fk) && (Bk.u = new Map), VR((Fk => {
              kk((kk => {
                let Fk = {
                  timeToFirstByte: 0,
                  firstByteToFCP: kk.value,
                  loadState: PB(KB())
                };
                if ("soft-navigation" !== kk.navigationType) {
                  if (kk.entries.length) {
                    const Bk = zB(),
                      Rk = kk.entries.at(-1);
                    if (Bk) {
                      const tk = Bk.responseStart,
                        ak = Bk.activationStart || 0,
                        Xk = Math.max(0, tk - ak);
                      Fk = {
                        timeToFirstByte: Xk,
                        firstByteToFCP: kk.value - Xk,
                        loadState: PB(kk.entries[0].startTime),
                        navigationEntry: Bk,
                        fcpEntry: Rk
                      }
                    }
                  }
                } else {
                  const Rk = Bk.u?.get(kk.navigationId);
                  Rk && (Fk = {
                    timeToFirstByte: 0,
                    firstByteToFCP: kk.value,
                    loadState: "complete",
                    navigationEntry: Rk
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
              timeToFirstByte: Bk,
              loadState: Rk
            } = kk.attribution, tk = this.buildInitialValues(kk);
            this.addIfPresent(tk, "first_byte_to_fcp", Fk), this.addIfPresent(tk, gR, Bk);
            const ak = this.buildInitialContext(kk);
            this.addIfPresent(ak, MR, Rk), this.pushMeasurement(tk, ak)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureINP() {
          var kk;
          LR((kk => {
            var Fk;
            const {
              interactionTime: Bk,
              presentationDelay: Rk,
              inputDelay: tk,
              processingDuration: ak,
              nextPaintTime: Xk,
              loadState: bk,
              interactionTarget: wk,
              interactionType: dk,
              totalScriptDuration: sk,
              totalStyleAndLayoutDuration: Vk,
              totalPaintDuration: Jk,
              totalUnattributedDuration: Ak,
              longestScript: ek
            } = kk.attribution, yk = this.buildInitialValues(kk);
            this.addIfPresent(yk, "interaction_time", Bk), this.addIfPresent(yk, "presentation_delay", Rk), this.addIfPresent(yk, "input_delay", tk), this.addIfPresent(yk, "processing_duration", ak), this.addIfPresent(yk, "next_paint_time", Xk), this.addNumberIfDefined(yk, "total_script_duration", sk), this.addNumberIfDefined(yk, "total_style_and_layout_duration", Vk), this.addNumberIfDefined(yk, "total_paint_duration", Jk), this.addNumberIfDefined(yk, "total_unattributed_duration", Ak), this.addNumberIfDefined(yk, "longest_script_intersecting_duration", null === ek || void 0 === ek ? void 0 : ek.intersectingDuration);
            const fk = this.buildInitialContext(kk);
            this.addIfPresent(fk, MR, bk), this.addIfPresent(fk, "interaction_target", wk), this.addIfPresent(fk, "interaction_type", dk), this.addIfPresent(fk, "longest_script_subpart", null === ek || void 0 === ek ? void 0 : ek.subpart), this.addIfPresent(fk, "longest_script_invoker_type", null === ek || void 0 === ek ? void 0 : ek.entry.invokerType), (null === (Fk = this.webVitalConfig) || void 0 === Fk ? void 0 : Fk.trackAttributionSources) && (this.addIfPresent(fk, "longest_script_invoker", null === ek || void 0 === ek ? void 0 : ek.entry.invoker), this.addIfPresent(fk, "longest_script_source_url", null === ek || void 0 === ek ? void 0 : ek.entry.sourceURL), this.addIfPresent(fk, "longest_script_source_function_name", null === ek || void 0 === ek ? void 0 : ek.entry.sourceFunctionName), this.addIfPresent(fk, "longest_script_source_char_position", void 0 !== (null === ek || void 0 === ek ? void 0 : ek.entry.sourceCharPosition) ? String(ek.entry.sourceCharPosition) : void 0)), this.pushMeasurement(yk, fk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureLCP() {
          var kk;
          ! function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Fk = Object.assign({}, Fk)).resourceBufferSize && (SR = Fk.resourceBufferSize);
            const Bk = ZB(Fk, OR),
              Rk = new WeakMap;
            aR(Fk) && (Bk.u = new Map), Bk.m = kk => {
                const Bk = kk.element;
                if (Bk) {
                  const tk = Fk.generateTarget?.(Bk) ?? qB(Bk);
                  Rk.set(kk, tk)
                } else kk.id && Rk.set(kk, `#${kk.id}`)
              },
              function(kk) {
                let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Bk = !1;
                const Rk = aR(Fk);
                dR((() => {
                  let tk, ak = BR(),
                    Xk = RR("LCP");
                  const bk = ZB(Fk, OR),
                    wk = (Rk, bk, wk, dk, sk) => {
                      Xk = RR("LCP", -1, Rk, bk, wk, dk, sk), tk = jB(kk, Xk, ER, Fk.reportAllChanges), Bk = !1, "soft-navigation" === Rk && (ak = BR(!0))
                    },
                    dk = kk => {
                      bk.u && kk.navigationId && XR(bk.u, kk), Bk || tk(!0), wk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime);
                      const Fk = kk.getLargestInteractionContentfulPaint?.();
                      Fk && sk([Fk])
                    },
                    sk = kk => {
                      Fk.reportAllChanges || Rk || (kk = kk.slice(-1));
                      for (const Fk of kk) {
                        if (!Fk) continue;
                        if ("soft-navigation" === Fk.entryType) {
                          dk(Fk);
                          continue
                        }
                        let kk = 0,
                          Bk = [],
                          Rk = Fk.startTime;
                        if ("largest-contentful-paint" === Fk.entryType) kk = Math.max(Fk.startTime - nB(), 0), bk.l(Fk), Bk = [Fk];
                        else if ("interaction-contentful-paint" === Fk.entryType) {
                          const tk = Fk;
                          if (!Xk.navigationId) continue;
                          if ("interactionId" in tk && tk.interactionId != Xk.navigationInteractionId) continue;
                          Rk = tk.largestContentfulPaint?.renderTime || 0, kk = Math.max(Rk - Fk.startTime, 0), tk.largestContentfulPaint && (bk.l(tk.largestContentfulPaint), Bk = [tk.largestContentfulPaint])
                        }
                        Rk < ak.firstHiddenTime && (Xk.value = kk, Xk.entries = Bk, tk())
                      }
                    },
                    Vk = ["largest-contentful-paint"];
                  Rk && Vk.push("interaction-contentful-paint", "soft-navigation");
                  const Jk = tR(Vk, sk);
                  if (Jk) {
                    tk = jB(kk, Xk, ER, Fk.reportAllChanges);
                    const ak = ["keydown", "click", "visibilitychange"],
                      bk = kk => {
                        if (kk.isTrusted && !Bk) {
                          const kk = Xk.id;
                          YR((() => {
                            if (!Bk) {
                              if (!Rk) {
                                Jk.disconnect();
                                for (const kk of ak) removeEventListener(kk, bk, {
                                  capture: !0
                                })
                              }
                              kk === Xk.id && (Bk = !0, tk(!0))
                            }
                          }))
                        }
                      };
                    for (const kk of ak) addEventListener(kk, bk, {
                      capture: !0
                    });
                    xB((Rk => {
                      wk("back-forward-cache", Xk.navigationId, Xk.navigationInteractionId, Xk.navigationURL, KB()), tk = jB(kk, Xk, ER, Fk.reportAllChanges), lB((() => {
                        Xk.value = performance.now() - Rk.timeStamp, Bk = !0, tk(!0)
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
                    const tk = kk.entries.at(-1),
                      ak = kk => kk.name === tk.url && (kk.requestStart || kk.startTime) <= tk.startTime,
                      Xk = tk.url && (NR.findLast(ak) || performance.getEntriesByType("resource").findLast(ak));
                    let bk;
                    Fk.target = Rk.get(tk), Fk.lcpEntry = tk, tk.url && (Fk.url = tk.url), Xk && (Fk.lcpResourceEntry = Xk);
                    let wk = 0,
                      dk = 0;
                    if ("soft-navigation" !== kk.navigationType ? (bk = zB(), wk = bk?.activationStart ?? 0, dk = bk?.responseStart ?? 0) : (wk = kk.navigationStartTime || 0, bk = Bk.u?.get(kk.navigationId)), bk) {
                      const Bk = Math.max(0, dk - wk),
                        Rk = Math.max(Bk, Xk ? (Xk.requestStart || Xk.startTime) - wk : 0),
                        tk = Math.min(kk.value, Math.max(Rk, Xk ? Xk.responseEnd - wk : 0));
                      Fk = {
                        ...Fk,
                        timeToFirstByte: Bk,
                        resourceLoadDelay: Rk - Bk,
                        resourceLoadDuration: tk - Rk,
                        elementRenderDelay: kk.value - tk,
                        navigationEntry: bk
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
              elementRenderDelay: Bk,
              resourceLoadDelay: Rk,
              resourceLoadDuration: tk,
              timeToFirstByte: ak,
              target: Xk,
              url: bk,
              lcpResourceEntry: wk
            } = kk.attribution, dk = this.buildInitialValues(kk);
            this.addIfPresent(dk, "element_render_delay", Bk), this.addIfPresent(dk, "resource_load_delay", Rk), this.addIfPresent(dk, "resource_load_duration", tk), this.addIfPresent(dk, gR, ak);
            const sk = this.buildInitialContext(kk);
            this.addIfPresent(sk, "element", Xk), (null === (Fk = this.webVitalConfig) || void 0 === Fk ? void 0 : Fk.trackAttributionSources) && (this.addIfPresent(sk, "resource_url", bk), this.addIfPresent(sk, "resource_delivery_type", null === wk || void 0 === wk ? void 0 : wk.deliveryType), this.addIfPresent(sk, "resource_initiator_type", null === wk || void 0 === wk ? void 0 : wk.initiatorType)), this.pushMeasurement(dk, sk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureTTFB() {
          var kk;
          ! function(kk) {
            ! function(kk) {
              let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Bk = aR(Fk);
              let Rk = RR("TTFB"),
                tk = jB(kk, Rk, HR, Fk.reportAllChanges);
              uR((() => {
                const ak = zB();
                if (ak) {
                  const Xk = ak.responseStart;
                  Rk.value = Math.max(Xk - nB(), 0), Rk.entries = [ak], tk(!0), xB((() => {
                    Rk = RR("TTFB", 0, "back-forward-cache", Rk.navigationId, Rk.navigationInteractionId, Rk.navigationURL, KB()), tk = jB(kk, Rk, HR, Fk.reportAllChanges), tk(!0)
                  })), Bk && tR(["soft-navigation"], (Bk => {
                    Bk.forEach((Bk => {
                      Bk.navigationId && (Rk = RR("TTFB", 0, "soft-navigation", Bk.navigationId, Bk.interactionId, Bk.name, Bk.startTime), Rk.entries = [Bk], tk = jB(kk, Rk, HR, Fk.reportAllChanges), tk(!0))
                    }))
                  }), Fk)
                }
              }))
            }((Fk => {
              kk((kk => {
                const Fk = kk.entries[0];
                let Bk = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Fk
                };
                if (kk.entries.length && Fk instanceof PerformanceNavigationTiming) {
                  const Rk = Fk.activationStart || 0,
                    tk = Math.max((Fk.workerStart || Fk.fetchStart || 0) - Rk, 0),
                    ak = Math.max(Fk.domainLookupStart - Rk, 0),
                    Xk = Math.max(Fk.connectStart - Rk, 0),
                    bk = Math.max(Fk.connectEnd - Rk, 0);
                  Bk = {
                    waitingDuration: tk,
                    cacheDuration: ak - tk,
                    dnsDuration: Xk - ak,
                    connectionDuration: bk - Xk,
                    requestDuration: kk.value - bk,
                    navigationEntry: Fk
                  }
                }
                return Object.assign(kk, {
                  attribution: Bk
                })
              })(Fk))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((kk => {
            const {
              dnsDuration: Fk,
              connectionDuration: Bk,
              requestDuration: Rk,
              waitingDuration: tk,
              cacheDuration: ak
            } = kk.attribution, Xk = this.buildInitialValues(kk);
            this.addIfPresent(Xk, "dns_duration", Fk), this.addIfPresent(Xk, "connection_duration", Bk), this.addIfPresent(Xk, "request_duration", Rk), this.addIfPresent(Xk, "waiting_duration", tk), this.addIfPresent(Xk, "cache_duration", ak);
            const bk = this.buildInitialContext(kk);
            this.pushMeasurement(Xk, bk)
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
          const Bk = null !== (Fk = FF("com.grafana.faro.lastNavigationId", Ik)) && void 0 !== Fk ? Fk : TB;
          return {
            id: kk.id,
            rating: kk.rating,
            navigation_type: kk.navigationType,
            navigation_entry_id: Bk
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
        addIfPresent(kk, Fk, Bk) {
          Bk && (kk[Fk] = Bk)
        }
        addNumberIfDefined(kk, Fk, Bk) {
          void 0 !== Bk && (kk[Fk] = Bk)
        }
      },
      cR = class extends BB {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = RB
        }
        initialize() {
          this.logDebug("Initializing"), new UR(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const GR = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function TR() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Fk of kk)
        if ("traceparent" === Fk.name) {
          if (!GR.test(Fk.description)) continue;
          const [, kk, Bk] = Fk.description.split("-");
          if (null != kk && null != Bk) return {
            traceId: kk,
            spanId: Bk
          };
          break
        }
    }

    function rR(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Bk,
        monoNow: Rk
      } = Fk;
      return Math.min(Bk, Bk - (Rk - kk))
    }

    function DR(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Bk, Rk] of Object.entries(Fk)) {
        const Fk = kk[Bk];
        return null != Fk && (Mk(Rk) ? Rk.includes(Fk) : Fk === Rk)
      }
      return !0
    }

    function zR(kk) {
      const {
        connectEnd: Fk,
        connectStart: Bk,
        decodedBodySize: Rk,
        domainLookupEnd: tk,
        domainLookupStart: ak,
        duration: Xk,
        encodedBodySize: bk,
        fetchStart: wk,
        initiatorType: dk,
        name: sk,
        nextHopProtocol: Vk,
        redirectEnd: Jk,
        redirectStart: Ak,
        renderBlockingStatus: ek,
        requestStart: yk,
        responseEnd: fk,
        responseStart: mk,
        responseStatus: Wk,
        secureConnectionStart: vk,
        transferSize: ik,
        workerStart: Yk
      } = kk;
      return {
        name: sk,
        httpHost: hR(sk),
        duration: qR(Xk),
        tcpHandshakeTime: qR(Fk - Bk),
        dnsLookupTime: qR(tk - ak),
        tlsNegotiationTime: qR(Fk - vk),
        responseStatus: qR(Wk),
        redirectTime: qR(Jk - Ak),
        requestTime: qR(mk - yk),
        responseTime: qR(fk - mk),
        fetchTime: qR(fk - wk),
        serviceWorkerTime: qR(Yk > 0 ? wk - Yk : 0),
        decodedBodySize: qR(Rk),
        encodedBodySize: qR(bk),
        cacheHitStatus: function() {
          let kk = "fullLoad";
          0 === ik ? Rk > 0 && (kk = "cache") : null != Wk ? 304 === Wk && (kk = "conditionalFetch") : bk > 0 && ik < bk && (kk = "conditionalFetch");
          return kk
        }(),
        renderBlockingStatus: qR(ek),
        protocol: Vk,
        initiatorType: dk,
        visibilityState: document.visibilityState,
        ttfb: qR(mk - yk),
        transferSize: qR(ik)
      }
    }

    function PR(kk) {
      const {
        activationStart: Fk,
        domComplete: Bk,
        domContentLoadedEventEnd: Rk,
        domContentLoadedEventStart: tk,
        domInteractive: ak,
        fetchStart: Xk,
        loadEventEnd: bk,
        loadEventStart: wk,
        responseStart: dk,
        type: sk
      } = kk, Vk = function() {
        var kk;
        return null != (null === (kk = performance.timing) || void 0 === kk ? void 0 : kk.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return VF(VF({}, zR(kk)), {}, {
        pageLoadTime: qR(Bk - Xk),
        documentParsingTime: qR(Vk ? ak - Vk : null),
        domProcessingTime: qR(Bk - ak),
        domContentLoadHandlerTime: qR(Rk - tk),
        onLoadTime: qR(bk - wk),
        ttfb: qR(Math.max(dk - (null !== Fk && void 0 !== Fk ? Fk : 0), 0)),
        type: sk
      })
    }

    function hR(kk) {
      try {
        return new URL(kk).host || TB
      } catch (Fk) {
        return TB
      }
    }

    function qR(kk) {
      return null == kk ? TB : "number" === typeof kk ? Math.round(kk > 0 ? kk : 0).toString() : kk.toString()
    }
    const CR = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function ZR(kk, Fk, Bk, Rk, tk, ak, Xk) {
      try {
        var bk = kk[ak](Xk),
          wk = bk.value
      } catch (kk) {
        return void Bk(kk)
      }
      bk.done ? Fk(wk) : Promise.resolve(wk).then(Rk, tk)
    }

    function pR(kk) {
      return function() {
        var Fk = this,
          Bk = arguments;
        return new Promise((function(Rk, tk) {
          var ak = kk.apply(Fk, Bk);

          function Xk(kk) {
            ZR(ak, Rk, tk, Xk, bk, "next", kk)
          }

          function bk(kk) {
            ZR(ak, Rk, tk, Xk, bk, "throw", kk)
          }
          Xk(void 0)
        }))
      }
    }
    const KR = new vB;
    var xR = class extends BB {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = RB
      }
      initialize() {
        var kk = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Fk = !1;
        const Bk = () => {
          ! function(kk) {
            if ("complete" === document.readyState) kk();
            else {
              const Fk = () => {
                "complete" === document.readyState && (kk(), document.removeEventListener("readystatechange", Fk))
              };
              document.addEventListener("readystatechange", Fk)
            }
          }(pR((function*() {
            if (Fk) return;
            const Bk = kk.api.pushEvent,
              {
                faroNavigationId: Rk
              } = yield function(kk) {
                let Fk;
                const Bk = new Promise((kk => {
                  Fk = kk
                }));
                return new PerformanceObserver((Bk => {
                  var Rk;
                  const [tk] = Bk.getEntries();
                  if (null == tk || lk(tk.name)) return;
                  const ak = tk.toJSON();
                  let Xk = TR(null === ak || void 0 === ak ? void 0 : ak.serverTiming);
                  const bk = null !== (Rk = FF("com.grafana.faro.lastNavigationId", Ik)) && void 0 !== Rk ? Rk : TB,
                    wk = VF(VF({}, PR(ak)), {}, {
                      faroNavigationId: WF(),
                      faroPreviousNavigationId: bk
                    });
                  BF("com.grafana.faro.lastNavigationId", wk.faroNavigationId, Ik), kk("faro.performance.navigation", wk, void 0, {
                    spanContext: Xk,
                    timestampOverwriteMs: rR(ak.startTime)
                  }), Fk(wk)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Bk
              }(Bk);
            Fk || null == Rk || function(kk, Fk, Bk, Rk) {
              const tk = Rk.trackResources;
              new PerformanceObserver((Rk => {
                const ak = Rk.getEntries(),
                  Xk = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const bk of ak) {
                  if (lk(bk.name)) continue;
                  null === Bk || void 0 === Bk || Bk.notify({
                    type: "resource"
                  });
                  const Rk = bk.toJSON();
                  let ak = TR(null === Rk || void 0 === Rk ? void 0 : Rk.serverTiming);
                  (null == tk && DR(Rk, CR) || tk) && Fk("faro.performance.resource", VF(VF({}, zR(Rk)), {}, {
                    faroNavigationId: kk,
                    faroResourceId: WF()
                  }), void 0, {
                    spanContext: ak,
                    timestampOverwriteMs: rR(Rk.startTime, Xk)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Rk, Bk, KR, kk.config)
          })))
        };
        this.cancelInitialization = () => {
          Fk = !0, document.removeEventListener("prerenderingchange", Bk)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Bk, {
          once: !0
        }) : Bk()
      }
      destroy() {
        var kk;
        null === (kk = this.cancelInitialization) || void 0 === kk || kk.call(this), this.cancelInitialization = void 0
      }
    };
    const jR = "data-faro-user-action-name",
      lR = jR.replace(/-name$/, "-timeout"),
      nR = 1e3;

    function IR(kk) {
      return `data-${(kk.startsWith("data-")?kk.slice(5):kk).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function QR(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZF;
      if (void 0 === kk) return Fk;
      let Rk = NaN;
      try {
        Rk = "string" === typeof kk && "" === kk.trim() ? NaN : Number(kk)
      } catch (tk) {}
      return !Number.isFinite(Rk) || Rk <= 0 ? (Bk(`initialActivityTimeout must be a finite number greater than zero; using ${Fk} ms`), Fk) : Rk > 1e3 ? (Bk(`initialActivityTimeout cannot exceed ${nR} ms; clamping to the maximum`), nR) : Rk
    }

    function kt(kk, Fk, Bk) {
      return void 0 !== kk && window.clearTimeout(kk), window.setTimeout((() => {
        Fk()
      }), Bk)
    }

    function Ft(kk) {
      return kk.type === WB
    }
    let Bt, Rt;

    function tt() {
      return Bt || (Bt = new vB), Rt || (Rt = new MutationObserver(((kk, Fk) => {
        Bt.notify({
          type: "dom-mutation"
        })
      })), Rt.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Bt
    }
    const Xt = "fetch",
      bt = "xhr";
    let wt, dt, st, Vt, Jt = !1;

    function At() {
      if (wt) return wt;

      function kk(kk) {
        wt.notify({
          type: mB,
          request: kk
        })
      }

      function Fk(kk) {
        wt.notify({
          type: WB,
          request: kk
        })
      }
      return wt = new vB, Jt || (! function(kk) {
        let {
          onRequestEnd: Fk,
          onRequestStart: Bk
        } = kk;
        st || (st = window.fetch);
        window.fetch = function() {
          var kk, Rk;
          const tk = null !== (kk = nk(arguments[0])) && void 0 !== kk ? kk : "",
            ak = lk(tk),
            Xk = (null !== (Rk = arguments[1]) && void 0 !== Rk ? Rk : {}).method,
            bk = WF();
          return ak || Bk({
            url: tk,
            method: Xk,
            requestId: bk,
            apiType: Xt
          }), st.apply(this, arguments).then((kk => (ak || Fk({
            url: tk,
            method: Xk,
            requestId: bk,
            apiType: Xt
          }), kk))).catch((kk => {
            throw ak || Fk({
              url: tk,
              method: Xk,
              requestId: bk,
              apiType: Xt
            }), kk
          }))
        }
      }({
        onRequestStart: kk,
        onRequestEnd: Fk
      }), function(kk) {
        let {
          onRequestStart: Fk,
          onRequestEnd: Bk
        } = kk;
        dt || (dt = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const kk = arguments[1],
            Rk = lk(kk),
            tk = arguments[0],
            ak = WF();
          this.addEventListener("loadstart", (function() {
            Rk || Fk({
              url: kk,
              method: tk,
              requestId: ak,
              apiType: bt
            })
          })), this.addEventListener("load", (function() {
            Rk || Bk({
              url: kk,
              method: tk,
              requestId: ak,
              apiType: bt
            })
          })), this.addEventListener("error", (function() {
            Rk || Bk({
              url: kk,
              method: tk,
              requestId: ak,
              apiType: bt
            })
          })), this.addEventListener("abort", (function() {
            Rk || Bk({
              url: kk,
              method: tk,
              requestId: ak,
              apiType: bt
            })
          })), dt.apply(this, arguments)
        }
      }({
        onRequestStart: kk,
        onRequestEnd: Fk
      }), Jt = !0), wt
    }
    let et, yt = !1;
    let ft = function(kk) {
      return kk[kk.Started = 0] = "Started", kk[kk.Halted = 1] = "Halted", kk[kk.Cancelled = 2] = "Cancelled", kk[kk.Ended = 3] = "Ended", kk
    }({});
    var mt = class {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = kk, this.logDebug = Fk, this.initialActivityTimeout = Bk, this.http = At(), this.dom = tt(), this.perf = (Vt || (Vt = new vB), yt || (et = KR.subscribe((kk => {
          "resource" === kk.type && Vt.notify({
            type: "resource-entry"
          })
        })), yt = !0), Vt), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new vB).merge(this.http, this.dom, this.perf).takeWhile((() => [ft.Started, ft.Halted].includes(this.userAction.getState()))).filter((kk => !!(this.userAction.getState() !== ft.Halted || Ft(kk) && this.runningRequests.has(kk.request.requestId)))).subscribe((kk => {
          (function(kk) {
            return kk.type === mB
          })(kk) && this.runningRequests.set(kk.request.requestId, kk.request), Ft(kk) && this.runningRequests.delete(kk.request.requestId), Ft(kk) ? this.userAction.getState() === ft.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((kk => [ft.Ended, ft.Cancelled].includes(kk))).first().subscribe((() => this.cleanup())), this.startupTid = kt(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === ft.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === ft.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = kt(this.haltTid, (() => {
          this.userAction.getState() === ft.Halted && this.endAction()
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

    function Wt(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZF;
      var Bk;
      const {
        api: Rk,
        config: tk,
        internalLogger: ak
      } = kk, Xk = QR(null === (Bk = tk.userActionsInstrumentation) || void 0 === Bk ? void 0 : Bk.initialActivityTimeout, 100, Fk);
      return {
        processUserEvent: function(kk) {
          var Fk, Bk;
          const ak = null !== (Fk = null === (Bk = tk.userActionsInstrumentation) || void 0 === Bk ? void 0 : Bk.dataAttributeName) && void 0 !== Fk ? Fk : jR,
            Xk = kk.target;
          if (!(Xk instanceof Element)) return;
          const bk = function(kk, Fk) {
              let Bk = kk;
              for (; Bk;) {
                if (Bk.hasAttribute(Fk)) return Bk;
                Bk = Bk.parentElement
              }
              return null
            }(Xk, IR(ak)),
            wk = function(kk, Fk) {
              if (!kk) return;
              const Bk = function(kk) {
                  return IR(kk).slice(5).replace(/-(.)/g, ((kk, Fk) => Fk.toUpperCase()))
                }(Fk),
                Rk = kk.dataset;
              for (const tk in Rk)
                if (tk === Bk) return Rk[tk]
            }(bk, ak);
          if (!bk || !wk) return;
          const dk = function(kk, Fk) {
            const Bk = kk.getAttribute(function(kk) {
              const Fk = IR(kk);
              return Fk.endsWith("-name") ? `${Fk.slice(0,-5)}-timeout` : `${Fk}-timeout`
            }(Fk));
            return null === Bk ? void 0 : Number(Bk)
          }(bk, ak);
          Rk.startUserAction(wk, {}, {
            triggerName: kk.type,
            initialActivityTimeout: dk
          })
        },
        processUserActionStarted: function(kk, Bk) {
          const Rk = kk,
            tk = QR(Bk, Xk, Fk);
          new mt(Rk, ak.debug, tk).attach()
        }
      }
    }
    const vt = "user_action_start",
      it = {
        Normal: "normal",
        Critical: "critical"
      };
    var Yt = class {
        constructor() {
          this.buffer = []
        }
        addItem(kk) {
          this.buffer.push(kk)
        }
        flushBuffer(kk) {
          if (uk(kk))
            for (const Fk of this.buffer) kk(Fk);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      ot = class extends vB {
        constructor(kk) {
          let {
            name: Fk,
            parentId: Bk,
            trigger: Rk,
            transports: tk,
            attributes: ak,
            trackUserActionsExcludeItem: Xk,
            importance: bk = it.Normal,
            pushEvent: wk
          } = kk;
          super(), this.name = Fk, this.attributes = ak, this.id = WF(), this.trigger = Rk, this.parentId = null !== Bk && void 0 !== Bk ? Bk : this.id, this.trackUserActionsExcludeItem = Xk, this.importance = bk, this._pushEvent = wk, this._itemBuffer = new Yt, this._transports = tk, this._state = 0, this._start()
        }
        addItem(kk) {
          return 0 === this._state && (this._itemBuffer.addItem(kk), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = AF(), this._startTimeMono = eF())
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
          const kk = AF(),
            Fk = eF() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((kk => {
            if (function(kk, Fk) {
                return (null === Fk || void 0 === Fk ? void 0 : Fk(kk)) || "measurement" === kk.type && "web-vitals" === kk.payload.type
              }(kk, this.trackUserActionsExcludeItem)) return void this._transports.execute(kk);
            const Fk = QF(QF({}, kk), {}, {
              payload: QF(QF({}, kk.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Fk)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", QF({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: kk.toString(),
            userActionDuration: Fk.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, rF(this.attributes)), void 0, {
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
    const Lt = new vB;

    function Ot(kk, Fk) {
      return !!kk && (0 === (null === kk || void 0 === kk ? void 0 : kk.getState()) && (kk.addItem(Fk), !0))
    }
    var Et = class extends BB {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = RB
        }
        initialize() {
          const {
            processUserEvent: kk,
            processUserActionStarted: Fk
          } = Wt(yk, (kk => this.logWarn(kk)));
          this._processUserEvent = kk, this._processKeydown = Fk => {
            [" ", "Enter"].includes(Fk.key) && kk(Fk)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Lt.subscribe((kk => {
            let {
              type: Bk,
              userAction: Rk,
              initialActivityTimeout: tk
            } = kk;
            "user_action_start" === Bk && Fk(Rk, tk)
          }))
        }
        destroy() {
          var kk;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (kk = this._userActionSub) || void 0 === kk || kk.unsubscribe()
        }
      },
      St = class extends BB {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = RB, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
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
          this.api.pushEvent("securitypolicyviolation", rF(Fk))
        }
      };
    var Nt = class extends vB {
      constructor(kk, Fk) {
        var Bk, Rk, tk, ak;
        super(), this._tracking = !1, this.eventsObservable = kk, this._options = {
          inactivityMs: null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.inactivityMs) && void 0 !== Bk ? Bk : 100,
          drainTimeoutMs: null !== (Rk = null === Fk || void 0 === Fk ? void 0 : Fk.drainTimeoutMs) && void 0 !== Rk ? Rk : 1e4,
          isOperationStart: null !== (tk = null === Fk || void 0 === Fk ? void 0 : Fk.isOperationStart) && void 0 !== tk ? tk : () => {},
          isOperationEnd: null !== (ak = null === Fk || void 0 === Fk ? void 0 : Fk.isOperationEnd) && void 0 !== ak ? ak : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((kk => {
          var Fk;
          this._lastEventTime = eF(), null === (Fk = this._currentEvents) || void 0 === Fk || Fk.push(kk);
          const Bk = this._options.isOperationStart(kk);
          var Rk;
          Bk && (null === (Rk = this._activeOperations) || void 0 === Rk || Rk.set(Bk, !0));
          const tk = this._options.isOperationEnd(kk);
          var ak;
          tk && (null === (ak = this._activeOperations) || void 0 === ak || ak.delete(tk));
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
        this._inactivityTid = Ht(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Ht(this._drainTid, (() => {
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

    function Ht(kk, Fk, Bk) {
      return kk && clearTimeout(kk), kk = setTimeout((() => {
        Fk()
      }), Bk)
    }
    let ut;
    const Mt = new Set,
      gt = new Map;
    let Ut, ct, Gt, Tt, rt, Dt, zt, Pt, ht = !1;
    var qt = class extends BB {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = RB
      }
      initialize() {
        const kk = At(),
          Fk = tt(),
          Bk = function() {
            function kk(kk, Fk) {
              const Bk = null !== Fk && void 0 !== Fk ? Fk : location.href;
              Bk !== ct && (Ut.notify({
                type: "url-change",
                from: ct,
                to: Bk,
                trigger: kk
              }), ct = Bk)
            }
            if (Ut || (Ut = new vB, ct = location.href), !ht)
              if ("navigation" in window && "NavigateEvent" in window) {
                zt = Fk => {
                  try {
                    const Bk = null === Fk || void 0 === Fk ? void 0 : Fk.destination;
                    (null === Bk || void 0 === Bk ? void 0 : Bk.sameDocument) && "string" === typeof Bk.url && kk("navigate", Bk.url)
                  } catch (Bk) {}
                }, window.navigation.addEventListener("navigate", zt);
                const Fk = window.NavigateEvent;
                Fk && Fk.prototype && "function" === typeof Fk.prototype.intercept && (Pt || (Pt = Fk.prototype.intercept), Fk.prototype.intercept = function(Fk) {
                  try {
                    const Fk = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Bk = null === this || void 0 === this ? void 0 : this.destination;
                    Fk && Bk && !1 === Bk.sameDocument && "string" === typeof Bk.url && kk("navigate-intercept", Bk.url)
                  } catch (Bk) {}
                  return Pt.call(this, Fk)
                }), ht = !0
              } else Gt || (Gt = window.history.pushState), window.history.pushState = function() {
                for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
                const tk = Gt.apply(window.history, Bk);
                return kk("pushState"), tk
              }, Tt || (Tt = window.history.replaceState), window.history.replaceState = function() {
                for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
                const tk = Tt.apply(window.history, Bk);
                return kk("replaceState"), tk
              }, rt = () => kk("popstate"), Dt = () => kk("hashchange"), window.addEventListener("popstate", rt), window.addEventListener("hashchange", Dt), ht = !0;
            return Ut
          }(),
          Rk = (tk = ["pointerdown", "keydown"], ut || (ut = new vB), tk.forEach((kk => {
            if (!Mt.has(kk)) {
              const Fk = () => {
                ut.notify({
                  type: "interaction",
                  name: kk
                })
              };
              window.addEventListener(kk, Fk), Mt.add(kk), gt.set(kk, Fk)
            }
          })), ut);
        var tk;
        const ak = new Nt((new vB).merge(kk, Fk, Bk), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: kk => function(kk) {
            return kk.type === mB
          }(kk) ? kk.request.requestId : void 0,
          isOperationEnd: kk => function(kk) {
            return kk.type === WB
          }(kk) ? kk.request.requestId : void 0
        });
        ak.filter((kk => "tracking-ended" === kk.message)).subscribe((kk => {
          var Fk, Bk;
          if ((null === (Fk = kk.events) || void 0 === Fk ? void 0 : Fk.some((kk => "url-change" === kk.type))) && (null === (Bk = kk.events) || void 0 === Bk ? void 0 : Bk.some((kk => "dom-mutation" === kk.type)))) {
            var Rk;
            const Fk = null === (Rk = kk.events) || void 0 === Rk ? void 0 : Rk.find((kk => "url-change" === kk.type));
            yk.api.pushEvent("faro.navigation", {
              fromUrl: null === Fk || void 0 === Fk ? void 0 : Fk.from,
              toUrl: null === Fk || void 0 === Fk ? void 0 : Fk.to,
              sameDocument: String(!0),
              duration: kk.duration
            })
          }
        })), Rk.subscribe((() => {
          ak.startTracking()
        }))
      }
    };

    function Ct() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Fk = [new Et, new GB, new cR, new tB, new rB, new qt];
      return !1 !== kk.enablePerformanceInstrumentation && Fk.unshift(new xR), !1 !== kk.enableContentSecurityPolicyInstrumentation && Fk.push(new St), !1 !== kk.captureConsole && Fk.push(new UB), Fk
    }
    var Zt = Bk(6397);
    let pt, Kt;

    function xt() {
      const kk = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return pt === kk && Kt || (Kt = new Zt.UAParser(kk).getResult(), pt = kk), Kt
    }
    const jt = () => {
        const {
          browser: kk,
          os: Fk,
          ua: Bk
        } = xt(), {
          name: Rk,
          version: tk
        } = kk, {
          name: ak,
          version: Xk
        } = Fk, bk = navigator.language, wk = Bk.includes("Mobi"), dk = function() {
          if (!Rk || !tk) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Rk && void 0 !== Rk ? Rk : TB,
            version: null !== tk && void 0 !== tk ? tk : TB,
            os: `${null!==ak&&void 0!==ak?ak:TB} ${null!==Xk&&void 0!==Xk?Xk:TB}`,
            userAgent: null !== Bk && void 0 !== Bk ? Bk : TB,
            language: null !== bk && void 0 !== bk ? bk : TB,
            mobile: wk,
            brands: null !== dk && void 0 !== dk ? dk : TB,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      lt = () => {
        const {
          name: kk,
          version: Fk
        } = xt().os;
        if (!kk && !Fk) return {};
        const Bk = {};
        return kk && (Bk.name = kk), Fk && (Bk.version = Fk), {
          os: Bk
        }
      };

    function nt(kk) {
      var Fk, Bk, Rk;
      return {
        id: null !== (Fk = null === (Bk = yk.config) || void 0 === Bk || null === (Bk = Bk.sessionTracking) || void 0 === Bk || null === (Rk = Bk.generateSessionId) || void 0 === Rk ? void 0 : Rk.call(Bk)) && void 0 !== Fk ? Fk : WF(),
        attributes: kk
      }
    }
    const It = () => ({
      sdk: {
        name: "faro-web",
        version: RB
      }
    });
    var Qt = class extends FB {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ka = function(kk) {
      return kk.EXCEPTION = "exception", kk.LOG = "log", kk.MEASUREMENT = "measurement", kk.TRACE = "trace", kk.EVENT = "event", kk
    }({});
    const Fa = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Ba(kk, Fk) {
      var Bk, Rk;
      if (void 0 === Fk) return kk;
      if (void 0 === kk) return {
        resourceSpans: Fk
      };
      const tk = null === (Bk = kk.resourceSpans) || void 0 === Bk ? void 0 : Bk[0];
      if (void 0 === tk) return kk;
      const ak = (null === tk || void 0 === tk ? void 0 : tk.scopeSpans) || [],
        Xk = (null === Fk || void 0 === Fk || null === (Rk = Fk[0]) || void 0 === Rk ? void 0 : Rk.scopeSpans) || [];
      return QF(QF({}, kk), {}, {
        resourceSpans: [QF(QF({}, tk), {}, {
          scopeSpans: [...ak, ...Xk]
        })]
      })
    }

    function Ra(kk) {
      let Fk = {
        meta: {}
      };
      return void 0 !== kk[0] && (Fk.meta = kk[0].meta), kk.forEach((kk => {
        switch (kk.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Bk = Fa[kk.type],
              Rk = Fk[Bk];
            Fk = QF(QF({}, Fk), {}, {
              [Bk]: void 0 === Rk ? [kk.payload] : [...Rk, kk.payload]
            });
            break
          }
          case "trace":
            Fk = QF(QF({}, Fk), {}, {
              traces: Ba(Fk.traces, kk.payload.resourceSpans)
            })
        }
      })), Fk
    }
    var ta = class extends Qt {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-console", this.version = RB
      }
      send(kk) {
        var Fk;
        return this.unpatchedConsole[null !== (Fk = this.options.level) && void 0 !== Fk ? Fk : iB.DEBUG]("New event", Ra([kk]))
      }
    };
    const aa = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Xa = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ba = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      wa = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      da = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      sa = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Va(kk) {
      let {
        weekday: Fk,
        day: Bk,
        month: Rk,
        year: tk,
        hour: ak,
        minute: Xk,
        second: bk
      } = kk;
      if (tk < 1900 || Bk < 1 || ak > 23 || Xk > 59 || bk > 60) return;
      const wk = 60 === bk,
        dk = new Date(0);
      return dk.setUTCFullYear(tk, Rk, Bk), dk.setUTCHours(ak, Xk, wk ? 59 : bk, 0), dk.getUTCDay() === Fk && dk.getUTCDate() === Bk && dk.getUTCMonth() === Rk && dk.getUTCFullYear() === tk && dk.getUTCHours() === ak && dk.getUTCMinutes() === Xk && dk.getUTCSeconds() === (wk ? 59 : bk) ? dk.getTime() + (wk ? 1e3 : 0) : void 0
    }
    var Ja = class {
      constructor(kk) {
        this.options = kk, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var kk = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Fk = this.sequence++;
        let Bk = !1;
        return {
          deliver: function() {
            var Bk = pR((function*(Bk) {
              const Rk = kk.options.getNow();
              let tk, ak = 0;
              for (;;) {
                var Xk, bk, wk;
                const dk = kk.options.retry.maxAttempts - ak,
                  sk = yield kk.runAttempt((() => Bk(dk, kk.unloading)), ak > 0);
                if (ak += sk.attemptsMade, "success" === sk.kind) return {
                  kind: "success",
                  attempts: ak,
                  elapsedTimeMs: kk.options.getNow() - Rk
                };
                if (tk = sk.failure, "terminal" === sk.kind || kk.unloading) return {
                  kind: "terminal",
                  attempts: ak,
                  elapsedTimeMs: kk.options.getNow() - Rk,
                  failure: tk
                };
                if (ak >= kk.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: ak,
                  elapsedTimeMs: kk.options.getNow() - Rk,
                  failure: tk,
                  reason: "retries-exhausted"
                };
                if (null != sk.retryAfterMs && sk.retryAfterMs > kk.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: ak,
                  elapsedTimeMs: kk.options.getNow() - Rk,
                  failure: tk,
                  reason: "retry-after-too-long"
                };
                const Vk = Math.min(null !== (Xk = sk.retryAfterMs) && void 0 !== Xk ? Xk : kk.options.retry.initialBackoffMs * Math.pow(kk.options.retry.backoffMultiplier, ak - 1), kk.options.retry.maxBackoffMs);
                if (null === (bk = (wk = kk.options).onRetry) || void 0 === bk || bk.call(wk, Vk, ak + 1), yield kk.waitForTurn(Fk, Vk)) {
                  const Fk = kk.options.retry.maxAttempts - ak,
                    tk = yield kk.runAttempt((() => Bk(Fk, !0)));
                  return ak += tk.attemptsMade, {
                    kind: "success" === tk.kind ? "success" : "terminal",
                    attempts: ak,
                    elapsedTimeMs: kk.options.getNow() - Rk,
                    failure: "success" === tk.kind ? void 0 : tk.failure
                  }
                }
              }
            }));
            return function(kk) {
              return Bk.apply(this, arguments)
            }
          }(),
          release: () => {
            Bk || (Bk = !0, this.admitted--)
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
        return new Promise(((Bk, Rk) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Fk = () => {
                this.inProgress--, this.runNextAttempt()
              };
              kk().then((kk => {
                Fk(), Bk(kk)
              }), (kk => {
                Fk(), Rk(kk)
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
                isRedelivery: Bk
              } = Fk;
              return this.unloading || !Bk || kk >= this.nextSendAt
            }));
          if (Fk < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - kk)));
          const [Bk] = this.attemptQueue.splice(Fk, 1);
          Bk.isRedelivery && !this.unloading && (this.nextSendAt = kk + 1), Bk.run()
        }
      }
      waitForTurn(kk, Fk) {
        const Bk = Math.min(Fk * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Fk => {
          this.waiting.push({
            sequence: kk,
            readyAt: this.options.getNow() + Bk,
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

    function Aa(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if ({}.hasOwnProperty.call(kk, Rk)) {
            if (Fk.includes(Rk)) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.includes(Bk) || {}.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function ea(kk) {
      const {
        size: Fk,
        concurrency: Bk
      } = kk, Rk = [];
      let tk = 0;
      const ak = () => {
        if (tk < Bk && Rk.length) {
          const {
            producer: kk,
            resolve: Fk,
            reject: Bk
          } = Rk.shift();
          tk++, kk().then((kk => {
            tk--, ak(), Fk(kk)
          }), (kk => {
            tk--, ak(), Bk(kk)
          }))
        }
      };
      return {
        add: kk => {
          if (Rk.length + tk >= Fk) throw new Error("Task buffer full");
          return new Promise(((Fk, Bk) => {
            Rk.push({
              producer: kk,
              resolve: Fk,
              reject: Bk
            }), ak()
          }))
        }
      }
    }
    const ya = ["headers"],
      fa = ["keepalive", "signal"],
      ma = new Set([408, 425, 429, 500, 502, 503, 504]),
      Wa = new Set([429, 503]);
    let va = 0,
      ia = 0;
    var Ya = class extends Error {};
    var oa = class extends Qt {
      constructor(kk) {
        var Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk;
        super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = RB, this.pendingCustomSends = 0, this.getNow = null !== (Fk = kk.getNow) && void 0 !== Fk ? Fk : Date.now, this.requestTimeoutMs = null !== (Bk = kk.requestTimeoutMs) && void 0 !== Bk ? Bk : 1e4, this.compressionEnabled = null !== (Rk = kk.requestCompression) && void 0 !== Rk && Rk && "undefined" !== typeof CompressionStream, kk.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Ja({
          bufferSize: null !== (tk = kk.bufferSize) && void 0 !== tk ? tk : 30,
          concurrency: null !== (ak = kk.concurrency) && void 0 !== ak ? ak : 5,
          retry: {
            maxAttempts: null !== (Xk = null === (bk = kk.retry) || void 0 === bk ? void 0 : bk.maxAttempts) && void 0 !== Xk ? Xk : 3,
            initialBackoffMs: null !== (wk = null !== (dk = null === (sk = kk.retry) || void 0 === sk ? void 0 : sk.initialBackoffMs) && void 0 !== dk ? dk : kk.defaultRateLimitBackoffMs) && void 0 !== wk ? wk : 1e3,
            maxBackoffMs: null !== (Vk = null === (Jk = kk.retry) || void 0 === Jk ? void 0 : Jk.maxBackoffMs) && void 0 !== Vk ? Vk : 3e4,
            backoffMultiplier: null !== (Ak = null === (ek = kk.retry) || void 0 === ek ? void 0 : ek.backoffMultiplier) && void 0 !== Ak ? Ak : 2
          },
          getNow: this.getNow,
          getRandom: null !== (yk = kk.getRandom) && void 0 !== yk ? yk : Math.random,
          onRetry: (kk, Fk) => {
            this.logDebug(`Retrying failed request after ${kk}ms. Attempt ${Fk}.`)
          }
        }), this.customPromiseBuffer = ea({
          size: null !== (fk = kk.bufferSize) && void 0 !== fk ? fk : 30,
          concurrency: null !== (mk = kk.concurrency) && void 0 !== mk ? mk : 5
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
        return pR((function*() {
          const Bk = Fk.promiseBuffer;
          if (Bk !== Fk.defaultPromiseBuffer || Bk.add !== Fk.defaultBufferAdd) {
            Fk.pendingCustomSends++;
            try {
              yield Bk.add((() => Fk.deliver(kk)))
            } catch (Rk) {
              Fk.logError("Permanent delivery failure", {
                error: Rk,
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
        return pR((function*() {
          let Bk;
          try {
            return yield kk.deliver(pR((function*() {
              return Bk = yield Fk(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Bk
          } finally {
            kk.release()
          }
        }))()
      }
      deliver(kk) {
        var Fk = this;
        return pR((function*() {
          const Bk = Fk.deliveryQueue.reserve();
          if (Bk) try {
            const Rk = yield Fk.prepareRequest(kk), tk = yield Bk.deliver(((kk, Bk) => Fk.performAttempt(Rk, kk, Bk)));
            "terminal" === tk.kind && Fk.logError("retries-exhausted" === tk.reason ? "Delivery retries exhausted" : "Permanent delivery failure", VF(VF({}, tk.failure), {}, {
              reason: tk.reason,
              attempts: tk.attempts,
              elapsedTimeMs: tk.elapsedTimeMs
            }))
          } catch (Rk) {
            Fk.logError("Permanent delivery failure", {
              error: Rk,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Bk.release()
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
        return pR((function*() {
          var Bk, Rk;
          const tk = Ra(kk),
            ak = null === (Bk = tk.meta.session) || void 0 === Bk ? void 0 : Bk.id,
            Xk = JSON.stringify(tk),
            bk = null !== (Rk = Fk.options.requestOptions) && void 0 !== Rk ? Rk : {},
            {
              headers: wk = {}
            } = bk,
            dk = Aa(bk, ya),
            {
              keepalive: sk,
              signal: Vk
            } = dk,
            Jk = Aa(dk, fa),
            Ak = {};
          for (const [kk, Fk] of Object.entries(wk)) Ak[kk] = "function" === typeof Fk ? yield Fk(): Fk;
          let ek = Xk,
            yk = function(kk) {
              return "undefined" === typeof TextEncoder ? kk.length : (new TextEncoder).encode(kk).byteLength
            }(Xk);
          const fk = {};
          return Fk.compressionEnabled && (ek = yield Fk.compress(Xk), yk = ek.size, fk["Content-Encoding"] = "gzip"), {
            bodySize: yk,
            sessionId: ak,
            requestInit: VF({
              method: "POST",
              headers: VF(VF(VF(VF(VF({
                "Content-Type": "application/json"
              }, fk), Ak), Fk.options.apiKey ? {
                "x-api-key": Fk.options.apiKey
              } : {}), ak ? {
                "x-faro-session-id": ak
              } : {}), {}, {
                "Idempotency-Key": WF(20)
              }),
              body: ek
            }, Jk)
          }
        }))()
      }
      performAttempt(kk, Fk, Bk) {
        var Rk = this;
        return pR((function*() {
          var tk;
          const ak = null === (tk = Rk.options.requestOptions) || void 0 === tk ? void 0 : tk.signal;
          if (null === ak || void 0 === ak ? void 0 : ak.aborted) return {
            kind: "terminal",
            failure: {
              error: ak.reason
            },
            attemptsMade: 0
          };
          let Xk = 0;
          try {
            var bk;
            const tk = yield Rk.fetchWithKeepaliveFallback(kk.requestInit, kk.bodySize, !!Bk || (null === (bk = Rk.options.requestOptions) || void 0 === bk ? void 0 : bk.keepalive), Fk, (() => Xk++));
            if (Rk.handleResponse(tk, kk.sessionId), tk.status >= 200 && tk.status < 300) return {
              kind: "success",
              attemptsMade: Xk
            };
            const ak = {
              status: tk.status
            };
            return !ma.has(tk.status) || Bk ? {
              kind: "terminal",
              failure: ak,
              attemptsMade: Xk
            } : {
              kind: "retry",
              failure: ak,
              attemptsMade: Xk,
              retryAfterMs: Wa.has(tk.status) ? Rk.getRetryAfterDelayMs(tk) : void 0
            }
          } catch (wk) {
            const kk = {
              error: wk
            };
            return (null === ak || void 0 === ak ? void 0 : ak.aborted) || !Rk.isFetchNetworkError(wk) || Bk ? {
              kind: "terminal",
              failure: kk,
              attemptsMade: Xk
            } : {
              kind: "retry",
              failure: kk,
              attemptsMade: Xk
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(kk, Fk, Bk, Rk, tk) {
        var ak = this;
        return pR((function*() {
          const Xk = ak.getNow(),
            bk = ak.reserveKeepalive(Fk, Bk);
          try {
            return yield ak.fetchWithTimeout(VF(VF({}, kk), {}, {
              keepalive: bk.keepalive
            }), ak.requestTimeoutMs, tk)
          } catch (dk) {
            var wk;
            if (bk.keepalive && Rk > 1 && ak.isFetchNetworkError(dk) && !(dk instanceof Ya) && !(null === (wk = ak.options.requestOptions) || void 0 === wk || null === (wk = wk.signal) || void 0 === wk ? void 0 : wk.aborted)) {
              ak.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Fk = ak.requestTimeoutMs - (ak.getNow() - Xk);
              return ak.fetchWithTimeout(VF(VF({}, kk), {}, {
                keepalive: !1
              }), Fk, tk)
            }
            throw dk
          } finally {
            bk.release()
          }
        }))()
      }
      fetchWithTimeout(kk, Fk, Bk) {
        var Rk = this;
        return pR((function*() {
          var tk;
          const ak = null === (tk = Rk.options.requestOptions) || void 0 === tk ? void 0 : tk.signal;
          if (Rk.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Bk(), fetch(Rk.options.url, VF(VF({}, kk), {}, {
            signal: ak
          }));
          if (Fk <= 0) throw new Ya("Request timed out");
          const Xk = new AbortController,
            bk = () => Xk.abort(null === ak || void 0 === ak ? void 0 : ak.reason);
          null === ak || void 0 === ak || ak.addEventListener("abort", bk, {
            once: !0
          });
          let wk = !1;
          const dk = setTimeout((() => {
            wk = !0, Xk.abort()
          }), Fk);
          try {
            return Bk(), yield fetch(Rk.options.url, VF(VF({}, kk), {}, {
              signal: Xk.signal
            }))
          } catch (sk) {
            if (wk && !(null === ak || void 0 === ak ? void 0 : ak.aborted)) throw new Ya("Request timed out");
            throw sk
          } finally {
            clearTimeout(dk), null === ak || void 0 === ak || ak.removeEventListener("abort", bk)
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
        const Bk = this.getNow(),
          Rk = function(kk, Fk) {
            const Bk = aa.exec(kk);
            if (Bk) {
              const [, kk, Fk, Rk, tk, ak, Xk, bk] = Bk;
              return Va({
                weekday: wa.indexOf(kk),
                day: Number(Fk),
                month: sa.indexOf(Rk),
                year: Number(tk),
                hour: Number(ak),
                minute: Number(Xk),
                second: Number(bk)
              })
            }
            const Rk = Xa.exec(kk);
            if (Rk) {
              const [, kk, Bk, Xk, bk, wk, dk, sk] = Rk, Vk = new Date(Fk);
              if (Number.isNaN(Vk.getTime())) return;
              const Jk = Vk.getUTCFullYear();
              let Ak = 100 * Math.floor(Jk / 100) + Number(bk);
              Ak < Jk && (Ak += 100);
              const ek = sa.indexOf(Xk),
                yk = {
                  month: ek,
                  day: Number(Bk),
                  hour: Number(wk),
                  minute: Number(dk),
                  second: Number(sk),
                  millisecond: 0
                },
                fk = {
                  month: Vk.getUTCMonth(),
                  day: Vk.getUTCDate(),
                  hour: Vk.getUTCHours(),
                  minute: Vk.getUTCMinutes(),
                  second: Vk.getUTCSeconds(),
                  millisecond: Vk.getUTCMilliseconds()
                };
              return (Ak > Jk + 50 || Ak === Jk + 50 && (ak = fk, ((tk = yk).month - ak.month || tk.day - ak.day || tk.hour - ak.hour || tk.minute - ak.minute || tk.second - ak.second || tk.millisecond - ak.millisecond) > 0)) && (Ak -= 100), Va({
                weekday: da.indexOf(kk),
                day: Number(Bk),
                month: ek,
                year: Ak,
                hour: Number(wk),
                minute: Number(dk),
                second: Number(sk)
              })
            }
            var tk, ak;
            const Xk = ba.exec(kk);
            if (!Xk) return;
            const [, bk, wk, dk, sk, Vk, Jk, Ak, ek] = Xk;
            return Va({
              weekday: wa.indexOf(bk),
              day: Number(null !== dk && void 0 !== dk ? dk : sk),
              month: sa.indexOf(wk),
              year: Number(ek),
              hour: Number(Vk),
              minute: Number(Jk),
              second: Number(Ak)
            })
          }(Fk, Bk);
        return null == Rk ? void 0 : Math.max(0, Rk - Bk)
      }
      reserveKeepalive(kk, Fk) {
        if (!1 === Fk || kk > 6e4 || va + kk > 6e4 || ia >= 9) return {
          keepalive: !1,
          release: ZF
        };
        va += kk, ia++;
        let Bk = !1;
        return {
          keepalive: !0,
          release: () => {
            Bk || (Bk = !0, va -= kk, ia--)
          }
        }
      }
      handleResponse(kk, Fk) {
        202 === kk.status && "invalid" === kk.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Fk), kk.text().catch(ZF)
      }
      isFetchNetworkError(kk) {
        return kk instanceof TypeError || kk instanceof Ya || kk instanceof DOMException && "AbortError" === kk.name
      }
      compress(kk) {
        return pR((function*() {
          const Fk = [],
            Bk = new ReadableStream({
              start(Fk) {
                Fk.enqueue((new TextEncoder).encode(kk)), Fk.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: kk,
              value: Rk
            } = yield Bk.read();
            if (kk) return new Blob(Fk);
            Fk.push(Rk)
          }
        }))()
      }
      extendFaroSession(kk, Fk, Bk) {
        var Rk, tk;
        const ak = kk.sessionTracking;
        if (!(null === ak || void 0 === ak ? void 0 : ak.enabled)) return void Fk("Session expired.");
        const {
          fetchUserSession: Xk,
          storeUserSession: bk
        } = CF(ak), wk = null === (Rk = this.metas.value.session) || void 0 === Rk ? void 0 : Rk.id, dk = null === (tk = Xk()) || void 0 === tk ? void 0 : tk.sessionId;
        Bk && Bk === wk && Bk === dk ? (MF({
          fetchUserSession: Xk,
          storeUserSession: bk
        })({
          forceSessionExtend: !0
        }), Fk("Session expired; created new session.")) : Fk("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const La = () => {
      const kk = window.k6;
      return {
        k6: VF({
          isK6Browser: !0
        }, (null === kk || void 0 === kk ? void 0 : kk.testRunId) && {
          testRunId: null === kk || void 0 === kk ? void 0 : kk.testRunId
        })
      }
    };
    let Oa, Ea;

    function Sa() {
      let {
        generatePageId: kk,
        initialPageMeta: Fk
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Bk = location.href;
        return uk(kk) && Oa !== Bk && (Oa = Bk, Ea = kk(location)), {
          page: VF(VF({
            url: Bk
          }, Ea ? {
            id: Ea
          } : {}), Fk)
        }
      }
    }

    function Na() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kB,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Bk = KF;
      return Fk > 0 && (Bk.error = Fk >= 1 ? function() {
        for (var Fk = arguments.length, Rk = new Array(Fk), tk = 0; tk < Fk; tk++) Rk[tk] = arguments[tk];
        kk.error(`${Bk.prefix}\n`, ...Rk)
      } : ZF, Bk.warn = Fk >= 2 ? function() {
        for (var Fk = arguments.length, Rk = new Array(Fk), tk = 0; tk < Fk; tk++) Rk[tk] = arguments[tk];
        kk.warn(`${Bk.prefix}\n`, ...Rk)
      } : ZF, Bk.info = Fk >= 3 ? function() {
        for (var Fk = arguments.length, Rk = new Array(Fk), tk = 0; tk < Fk; tk++) Rk[tk] = arguments[tk];
        kk.info(`${Bk.prefix}\n`, ...Rk)
      } : ZF, Bk.debug = Fk >= 4 ? function() {
        for (var Fk = arguments.length, Rk = new Array(Fk), tk = 0; tk < Fk; tk++) Rk[tk] = arguments[tk];
        kk.debug(`${Bk.prefix}\n`, ...Rk)
      } : ZF), Bk
    }
    const Ha = "faro",
      ua = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Ma = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function ga(kk) {
      var Fk, Bk, tk, ak, Xk, bk;
      const wk = [],
        sk = Na(kk.unpatchedConsole, kk.internalLoggerLevel);
      kk.transports ? ((kk.url || kk.apiKey) && sk.error('if "transports" is defined, "url" and "apiKey" should not be defined'), wk.push(...kk.transports)) : kk.url ? wk.push(new oa({
        url: kk.url,
        apiKey: kk.apiKey,
        requestCompression: kk.requestCompression
      })) : sk.error('either "url" or "transports" must be defined');
      const {
        dedupe: Vk = !0,
        eventDomain: Jk = Rk,
        globalObjectKey: Ak = Ha,
        instrumentations: ek = Ct(),
        internalLoggerLevel: yk = xF,
        isolate: fk = !1,
        logArgsSerializer: mk = gB,
        metas: Wk = ca(kk),
        paused: vk = !1,
        preventGlobalExposure: ik = !1,
        unpatchedConsole: Yk = kB,
        url: Lk,
        experimental: Ok
      } = kk, Ek = Aa(kk, Ma), Sk = null !== (Fk = null === Ok || void 0 === Ok ? void 0 : Ok.trackNavigation) && void 0 !== Fk && Fk, Nk = {
        dataAttributeName: IR(null !== (Bk = null === (tk = kk.userActionsInstrumentation) || void 0 === tk ? void 0 : tk.dataAttributeName) && void 0 !== Bk ? Bk : jR),
        excludeItem: null === (ak = kk.userActionsInstrumentation) || void 0 === ak ? void 0 : ak.excludeItem,
        initialActivityTimeout: QR(null === (Xk = kk.userActionsInstrumentation) || void 0 === Xk ? void 0 : Xk.initialActivityTimeout, 100, (kk => sk.warn(kk)))
      };
      return VF(VF({}, Ek), {}, {
        batching: VF(VF({}, ua), kk.batching),
        dedupe: Vk,
        globalObjectKey: Ak,
        instrumentations: Ua(ek, kk),
        internalLoggerLevel: yk,
        isolate: fk,
        logArgsSerializer: mk,
        metas: Wk,
        parseStacktrace: fB,
        paused: vk,
        preventGlobalExposure: ik,
        transports: wk,
        unpatchedConsole: Yk,
        eventDomain: Jk,
        ignoreUrls: [...null !== (bk = kk.ignoreUrls) && void 0 !== bk ? bk : [], ...Lk ? [Lk] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: VF(VF(VF({}, dk), kk.sessionTracking), Ga({
          trackGeolocation: kk.trackGeolocation,
          sessionTracking: kk.sessionTracking
        })),
        userActionsInstrumentation: Nk,
        experimental: {
          trackNavigation: Sk
        }
      })
    }

    function Ua(kk, Fk) {
      let {
        experimental: Bk
      } = Fk;
      var Rk;
      const tk = null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.trackNavigation) && void 0 !== Rk && Rk;
      return kk.filter((kk => !("@grafana/faro-web-sdk:instrumentation-navigation" === kk.name && !tk)))
    }

    function ca(kk) {
      var Fk, Bk, Rk;
      const {
        page: tk,
        generatePageId: ak
      } = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.pageTracking) && void 0 !== Fk ? Fk : {}, Xk = [jt, lt, Sa({
        generatePageId: ak,
        initialPageMeta: tk
      }), ...null !== (Bk = kk.metas) && void 0 !== Bk ? Bk : [], It];
      return Hk(null === (Rk = window) || void 0 === Rk ? void 0 : Rk.k6) ? [...Xk, La] : Xk
    }

    function Ga(kk) {
      let {
        trackGeolocation: Fk,
        sessionTracking: Bk
      } = kk;
      var Rk;
      const tk = {};
      return Sk(Fk) && (tk.geoLocationTrackingEnabled = Fk), xk(tk) ? {} : {
        session: VF(VF({}, null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.session) && void 0 !== Rk ? Rk : {}), {}, {
          overrides: tk
        })
      }
    }
    const Ta = new WeakSet;

    function ra(kk) {
      return Ta.add(kk), kk
    }

    function Da(kk, Fk) {
      if (kk.capture) return ra(kk.capture(Fk));
      const Bk = ra(kk.value);
      return null === Fk || void 0 === Fk || Fk(), Bk
    }

    function za(kk) {
      const Fk = `__faroBundleId_${kk}`,
        Bk = null === sk || void 0 === sk ? void 0 : sk[Fk];
      if ("string" === typeof Bk && "" !== Bk) return Bk;
      const Rk = "undefined" !== typeof window ? window[Fk] : void 0;
      return "string" === typeof Rk && "" !== Rk ? Rk : void 0
    }

    function Pa(kk) {
      var Fk, Bk;
      const Rk = kk.config.app.name,
        tk = Rk ? function(kk) {
          return null === sk || void 0 === sk ? void 0 : sk[`__faroGitHash_${kk}`]
        }(Rk) : void 0,
        ak = {
          sdk: {
            version: RB,
            name: "faro"
          },
          app: QF({
            bundleId: Rk && za(Rk)
          }, void 0 !== tk ? {
            gitHash: tk
          } : {})
        },
        Xk = null === (Fk = kk.config.sessionTracking) || void 0 === Fk ? void 0 : Fk.session;
      Xk && kk.api.setSession(Xk), kk.config.app && (ak.app = QF(QF({}, kk.config.app), ak.app)), kk.config.user && (ak.user = kk.config.user), kk.config.view && (ak.view = kk.config.view), kk.metas.add(ak, ...null !== (Bk = kk.config.metas) && void 0 !== Bk ? Bk : [])
    }
    var ha = class {
      constructor(kk, Fk) {
        var Bk, Rk;
        this.signalBuffer = [], this.itemLimit = null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.itemLimit) && void 0 !== Bk ? Bk : 50, this.sendTimeout = null !== (Rk = null === Fk || void 0 === Fk ? void 0 : Fk.sendTimeout) && void 0 !== Rk ? Rk : 250, this.paused = (null === Fk || void 0 === Fk ? void 0 : Fk.paused) || !1, this.sendFn = kk, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
          const Bk = JSON.stringify(kk.meta);
          let Rk = Fk.get(Bk);
          Rk = void 0 === Rk ? [kk] : [...Rk, kk], Fk.set(Bk, Rk)
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

    function qa(kk, Fk, Bk, Rk) {
      var tk;
      Fk.debug("Initializing transports");
      const ak = [];
      let Xk = [];
      const bk = kk => {
        let Fk = kk;
        for (const Rk of Xk) {
          const kk = Fk.map(Rk).filter(Boolean);
          if (0 === kk.length) return [];
          Fk = Ca(kk, Bk)
        }
        return Fk
      };
      let wk;
      (null === (tk = Bk.batching) || void 0 === tk ? void 0 : tk.enabled) && (wk = new ha((kk => {
        const Bk = bk(kk);
        if (0 !== Bk.length)
          for (const Rk of ak) Fk.debug(`Transporting item using ${Rk.name}\n`, Bk), Rk.isBatched() && Rk.send(Bk)
      }), {
        sendTimeout: Bk.batching.sendTimeout,
        itemLimit: Bk.batching.itemLimit,
        paused: Bk.paused
      }));
      return {
        add: function() {
          Fk.debug("Adding transports");
          for (var tk = arguments.length, Xk = new Array(tk), bk = 0; bk < tk; bk++) Xk[bk] = arguments[bk];
          Xk.forEach((tk => {
            Fk.debug(`Adding "${tk.name}" transport`), ak.some((kk => kk === tk)) ? Fk.warn(`Transport ${tk.name} is already added`) : (tk.unpatchedConsole = kk, tk.internalLogger = Fk, tk.config = Bk, tk.metas = Rk, ak.push(tk))
          }))
        },
        addBeforeSendHooks: function() {
          Fk.debug("Adding beforeSendHooks\n", Xk);
          for (var kk = arguments.length, Bk = new Array(kk), Rk = 0; Rk < kk; Rk++) Bk[Rk] = arguments[Rk];
          Bk.forEach((kk => {
            kk && Xk.push(kk)
          }))
        },
        getBeforeSendHooks: () => [...Xk],
        execute: kk => {
          var tk;
          if (!Bk.paused && hF(Rk).shouldCapture()) {
            if (Vk = kk.meta, !Ta.has(Vk)) {
              var Xk, dk, sk;
              const Fk = null === (Xk = Rk.value.session) || void 0 === Xk ? void 0 : Xk.id,
                tk = Da(Rk);
              if (Bk.paused) return;
              const ak = QF({}, kk.meta);
              (null === (dk = ak.session) || void 0 === dk ? void 0 : dk.id) === Fk && (null === (sk = tk.session) || void 0 === sk ? void 0 : sk.id) !== Fk && (void 0 === tk.session ? delete ak.session : ak.session = tk.session), kk = QF(QF({}, kk), {}, {
                meta: ra(ak)
              })
            }
            var Vk;
            (null === (tk = Bk.batching) || void 0 === tk ? void 0 : tk.enabled) && (null === wk || void 0 === wk || wk.addItem(kk)), (kk => {
              var Rk;
              if ((null === (Rk = Bk.batching) || void 0 === Rk ? void 0 : Rk.enabled) && ak.every((kk => kk.isBatched()))) return;
              const [tk] = bk([kk]);
              if (void 0 !== tk)
                for (const bk of ak) {
                  var Xk;
                  Fk.debug(`Transporting item using ${bk.name}\n`, tk), bk.isBatched() ? (null === (Xk = Bk.batching) || void 0 === Xk ? void 0 : Xk.enabled) || bk.send([tk]) : bk.send(tk)
                }
            })(kk)
          }
        },
        isPaused: () => Bk.paused,
        pause: () => {
          Fk.debug("Pausing transports"), null === wk || void 0 === wk || wk.pause(), Bk.paused = !0
        },
        remove: function() {
          Fk.debug("Removing transports");
          for (var kk = arguments.length, Bk = new Array(kk), Rk = 0; Rk < kk; Rk++) Bk[Rk] = arguments[Rk];
          Bk.forEach((kk => {
            Fk.debug(`Removing "${kk.name}" transport`);
            const Bk = ak.indexOf(kk); - 1 !== Bk ? ak.splice(Bk, 1) : Fk.warn(`Transport "${kk.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var kk = arguments.length, Bk = new Array(kk), Rk = 0; Rk < kk; Rk++) Bk[Rk] = arguments[Rk];
          Fk.debug("Removing beforeSendHooks"), Xk = Xk.filter((kk => !Bk.includes(kk)))
        },
        get transports() {
          return [...ak]
        },
        unpause: () => {
          Fk.debug("Unpausing transports"), null === wk || void 0 === wk || wk.start(), Bk.paused = !1
        }
      }
    }

    function Ca(kk, Fk) {
      if (Fk.preserveOriginalError)
        for (const Bk of kk) "exception" === Bk.type && delete Bk.payload.originalError;
      return kk
    }
    let Za = kB;

    function pa(kk) {
      var Fk;
      return Za = null !== (Fk = kk.unpatchedConsole) && void 0 !== Fk ? Fk : Za, Za
    }
    let Ka, xa = KF;

    function ja(kk, Fk) {
      return xa = Na(kk, Fk.internalLoggerLevel), xa
    }

    function la(kk) {
      let {
        internalLogger: Fk,
        config: Bk,
        metas: Rk,
        transports: tk,
        tracesApi: ak,
        userActionsApi: Xk
      } = kk;
      var bk;
      Fk.debug("Initializing exceptions API");
      let wk = null;
      Ka = null !== (bk = Bk.parseStacktrace) && void 0 !== bk ? bk : Ka;
      const dk = kk => {
          Fk.debug("Changing stacktrace parser"), Ka = null !== kk && void 0 !== kk ? kk : Ka
        },
        {
          ignoreErrors: sk = [],
          preserveOriginalError: Vk
        } = Bk;
      return dk(Bk.parseStacktrace), {
        changeStacktraceParser: dk,
        getStacktraceParser: () => Ka,
        pushError: function(kk) {
          let {
            skipDedupe: bk,
            stackFrames: dk,
            type: Jk,
            context: Ak,
            spanContext: ek,
            timestampOverwriteMs: yk,
            originalError: fk,
            fingerprint: mk,
            fatal: Wk
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(kk, Fk) {
              const {
                message: Bk,
                name: Rk,
                stack: tk
              } = Fk;
              return ak = kk, Xk = Bk + " " + Rk + " " + tk, ak.some((kk => Lk(kk) ? Xk.includes(kk) : !!Xk.match(kk)));
              var ak, Xk
            }(sk, null !== fk && void 0 !== fk ? fk : kk)) try {
            var vk, ik;
            if (!hF(Rk).shouldCapture()) return;
            const sk = rF(QF(QF({}, function(kk) {
                let Fk = kk.cause;
                Dk(Fk) ? Fk = kk.cause.toString() : null !== Fk && (Hk(kk.cause) || Mk(kk.cause)) ? Fk = TF(kk.cause) : null != Fk && (Fk = kk.cause.toString());
                return null == Fk ? {} : {
                  cause: Fk
                }
              }(null !== fk && void 0 !== fk ? fk : kk)), null !== Ak && void 0 !== Ak ? Ak : {})),
              Lk = QF(QF(QF(QF({
                type: Jk || kk.name || "Error",
                value: kk.message,
                timestamp: yk ? fF(yk) : yF(),
                trace: ek ? {
                  trace_id: ek.traceId,
                  span_id: ek.spanId
                } : ak.getTraceContext()
              }, xk(sk) ? {} : {
                context: sk
              }), Vk ? {
                originalError: fk
              } : {}), mk ? {
                fingerprint: mk
              } : {}), void 0 !== Wk ? {
                fatal: Wk
              } : {});
            dk = null !== (vk = dk) && void 0 !== vk ? vk : kk.stack ? null === Ka || void 0 === Ka ? void 0 : Ka(kk).frames : void 0, (null === dk || void 0 === dk ? void 0 : dk.length) && (Lk.stacktrace = {
              frames: dk
            });
            const Ok = {
              type: Lk.type,
              value: Lk.value,
              stacktrace: Lk.stacktrace,
              context: Lk.context,
              fingerprint: Lk.fingerprint,
              fatal: null !== (ik = Lk.fatal) && void 0 !== ik && ik
            };
            if (!bk && Bk.dedupe && !Yk(wk) && vF(Ok, wk)) return void Fk.debug("Skipping error push because it is the same as the last one\n", Lk);
            const Ek = wk,
              Sk = Da(Rk);
            if (wk !== Ek && !bk && Bk.dedupe && vF(Ok, wk)) return;
            wk = Ok;
            const Nk = {
              meta: Sk,
              payload: Lk,
              type: "exception"
            };
            Fk.debug("Pushing exception\n", Nk), Ot(Xk.getActiveUserAction(), Nk) || tk.execute(Nk)
          } catch (Ok) {
            Fk.error("Error pushing event", Ok)
          }
        }
      }
    }

    function na(kk, Fk, Bk, Rk, tk) {
      Fk.debug("Initializing API");
      let ak = null;
      const Xk = function(kk) {
          let {
            transports: Fk,
            internalLogger: Bk,
            config: Rk,
            pushEvent: tk
          } = kk;
          var ak;
          const Xk = null === (ak = Rk.userActionsInstrumentation) || void 0 === ak ? void 0 : ak.excludeItem;
          let bk;
          const wk = () => bk;
          return {
            startUserAction: (kk, Rk, ak) => {
              if (void 0 === wk()) {
                const Bk = new ot({
                  name: kk,
                  transports: Fk,
                  attributes: Rk,
                  trigger: (null === ak || void 0 === ak ? void 0 : ak.triggerName) || "faroApiCall",
                  importance: (null === ak || void 0 === ak ? void 0 : ak.importance) || it.Normal,
                  trackUserActionsExcludeItem: Xk,
                  pushEvent: tk
                });
                return Bk.filter((kk => [3, 2].includes(kk))).first().subscribe((() => {
                  bk = void 0
                })), Lt.notify({
                  type: vt,
                  userAction: Bk,
                  initialActivityTimeout: null === ak || void 0 === ak ? void 0 : ak.initialActivityTimeout
                }), bk = Bk, bk
              }
              Bk.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: wk
          }
        }({
          transports: tk,
          config: Bk,
          internalLogger: Fk,
          pushEvent: (kk, Bk, Rk, tk) => {
            ak ? ak(kk, Bk, Rk, tk) : Fk.warn("pushEventImpl is not initialized. Event dropped:", {
              name: kk,
              attributes: Bk,
              domain: Rk,
              options: tk
            })
          }
        }),
        bk = function(kk, Fk, Bk, Rk, tk) {
          let ak;
          return Fk.debug("Initializing traces API"), {
            getOTEL: () => ak,
            getTraceContext: () => {
              const kk = null === ak || void 0 === ak ? void 0 : ak.trace.getSpanContext(ak.context.active());
              return kk ? {
                trace_id: kk.traceId,
                span_id: kk.spanId
              } : void 0
            },
            initOTEL: (kk, Bk) => {
              Fk.debug("Initializing OpenTelemetry"), ak = {
                trace: kk,
                context: Bk
              }
            },
            isOTELInitialized: () => !!ak,
            pushTraces: kk => {
              try {
                if (!hF(Rk).shouldCapture()) return;
                const Bk = {
                  type: "trace",
                  payload: kk,
                  meta: Da(Rk)
                };
                Fk.debug("Pushing trace\n", Bk), tk.execute(Bk)
              } catch (Bk) {
                Fk.error("Error pushing trace\n", Bk)
              }
            }
          }
        }(0, Fk, 0, Rk, tk),
        wk = {
          unpatchedConsole: kk,
          internalLogger: Fk,
          userActionsApi: Xk,
          config: Bk,
          metas: Rk,
          transports: tk,
          tracesApi: bk
        },
        dk = function(kk) {
          let {
            internalLogger: Fk,
            config: Bk,
            metas: Rk,
            transports: tk,
            tracesApi: ak,
            userActionsApi: Xk
          } = kk, bk = null;
          return {
            pushEvent: function(kk, wk, dk) {
              let {
                skipDedupe: sk,
                spanContext: Vk,
                timestampOverwriteMs: Jk,
                customPayloadTransformer: Ak = kk => kk
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!hF(Rk).shouldCapture()) return;
                const ek = rF(wk),
                  yk = Ak({
                    name: kk,
                    domain: null !== dk && void 0 !== dk ? dk : Bk.eventDomain,
                    attributes: xk(ek) ? void 0 : ek,
                    timestamp: Jk ? fF(Jk) : yF(),
                    trace: Vk ? {
                      trace_id: Vk.traceId,
                      span_id: Vk.spanId
                    } : ak.getTraceContext()
                  }),
                  fk = {
                    name: yk.name,
                    attributes: yk.attributes,
                    domain: yk.domain
                  };
                if (!sk && Bk.dedupe && !Yk(bk) && vF(fk, bk)) return void Fk.debug("Skipping event push because it is the same as the last one\n", yk);
                const mk = bk,
                  Wk = Da(Rk);
                if (bk !== mk && !sk && Bk.dedupe && vF(fk, bk)) return;
                bk = fk;
                const vk = {
                  meta: Wk,
                  payload: yk,
                  type: "event"
                };
                Fk.debug("Pushing event\n", vk), Ot(Xk.getActiveUserAction(), vk) || tk.execute(vk)
              } catch (ek) {
                Fk.error("Error pushing event", ek)
              }
            }
          }
        }(wk);
      return ak = dk.pushEvent, QF(QF(QF(QF(QF(QF(QF({}, bk), la(wk)), function(kk) {
        let Fk, Bk, Rk, tk, {
          internalLogger: ak,
          metas: Xk
        } = kk;
        ak.debug("Initializing meta API");
        const bk = kk => {
            Bk && Xk.remove(Bk), Bk = {
              user: kk
            }, Xk.add(Bk)
          },
          wk = (kk, Bk) => {
            var Rk;
            const tk = null === Bk || void 0 === Bk ? void 0 : Bk.overrides,
              ak = tk ? {
                overrides: QF(QF({}, null === Fk || void 0 === Fk || null === (Rk = Fk.session) || void 0 === Rk ? void 0 : Rk.overrides), tk)
              } : {};
            Fk && Xk.remove(Fk), Fk = {
              session: QF(QF({}, xk(kk) ? void 0 : kk), ak)
            }, Xk.add(Fk)
          },
          dk = (kk, Fk) => {
            hF(Xk).notifySessionUpdate({
              type: "replace",
              session: kk,
              overrides: null === Fk || void 0 === Fk ? void 0 : Fk.overrides
            }), wk(kk, Fk)
          },
          sk = () => Xk.value.session,
          Vk = () => Xk.value.page;
        return {
          setUser: bk,
          resetUser: bk,
          setSession: dk,
          resetSession: dk,
          getSession: sk,
          setView: (kk, Fk) => {
            var Bk;
            if ((null === Fk || void 0 === Fk ? void 0 : Fk.overrides) && (hF(Xk).notifySessionUpdate({
                type: "overrides",
                overrides: Fk.overrides
              }), wk(sk(), {
                overrides: Fk.overrides
              })), (null === Rk || void 0 === Rk || null === (Bk = Rk.view) || void 0 === Bk ? void 0 : Bk.name) === (null === kk || void 0 === kk ? void 0 : kk.name)) return;
            const tk = Rk;
            Rk = {
              view: kk
            }, Xk.add(Rk), tk && Xk.remove(tk)
          },
          getView: () => Xk.value.view,
          setPage: kk => {
            var Fk;
            const Bk = Lk(kk) ? QF(QF({}, null !== (Fk = null === tk || void 0 === tk ? void 0 : tk.page) && void 0 !== Fk ? Fk : Vk()), {}, {
              id: kk
            }) : kk;
            tk && Xk.remove(tk), tk = {
              page: Bk
            }, Xk.add(tk)
          },
          getPage: Vk
        }
      }(wk)), function(kk) {
        let {
          internalLogger: Fk,
          config: Bk,
          metas: Rk,
          transports: tk,
          tracesApi: ak,
          userActionsApi: Xk
        } = kk;
        var bk;
        Fk.debug("Initializing logs API");
        let wk = null;
        const dk = null !== (bk = Bk.logArgsSerializer) && void 0 !== bk ? bk : gB;
        return {
          pushLog: function(kk) {
            let {
              context: bk,
              level: sk,
              skipDedupe: Vk,
              spanContext: Jk,
              timestampOverwriteMs: Ak
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!hF(Rk).shouldCapture()) return;
              const ek = rF(bk),
                yk = {
                  message: dk(kk),
                  level: null !== sk && void 0 !== sk ? sk : "log",
                  context: xk(ek) ? void 0 : ek,
                  timestamp: Ak ? fF(Ak) : yF(),
                  trace: Jk ? {
                    trace_id: Jk.traceId,
                    span_id: Jk.spanId
                  } : ak.getTraceContext()
                },
                fk = {
                  message: yk.message,
                  level: yk.level,
                  context: yk.context
                };
              if (!Vk && Bk.dedupe && !Yk(wk) && vF(fk, wk)) return void Fk.debug("Skipping log push because it is the same as the last one\n", yk);
              const mk = wk,
                Wk = Da(Rk);
              if (wk !== mk && !Vk && Bk.dedupe && vF(fk, wk)) return;
              wk = fk;
              const vk = {
                type: "log",
                payload: yk,
                meta: Wk
              };
              Fk.debug("Pushing log\n", vk), Ot(Xk.getActiveUserAction(), vk) || tk.execute(vk)
            } catch (ek) {
              Fk.error("Error pushing log\n", ek)
            }
          }
        }
      }(wk)), function(kk) {
        let {
          internalLogger: Fk,
          config: Bk,
          metas: Rk,
          transports: tk,
          tracesApi: ak,
          userActionsApi: Xk
        } = kk;
        Fk.debug("Initializing measurements API");
        let bk = null;
        return {
          pushMeasurement: function(kk) {
            let {
              skipDedupe: wk,
              context: dk,
              spanContext: sk,
              timestampOverwriteMs: Vk
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!hF(Rk).shouldCapture()) return;
              const Jk = rF(dk),
                Ak = QF(QF({}, kk), {}, {
                  trace: sk ? {
                    trace_id: sk.traceId,
                    span_id: sk.spanId
                  } : ak.getTraceContext(),
                  timestamp: Vk ? fF(Vk) : yF(),
                  context: xk(Jk) ? void 0 : Jk
                }),
                ek = {
                  type: Ak.type,
                  values: Ak.values,
                  context: Ak.context
                };
              if (!wk && Bk.dedupe && !Yk(bk) && vF(ek, bk)) return void Fk.debug("Skipping measurement push because it is the same as the last one\n", Ak);
              const yk = bk,
                fk = Da(Rk);
              if (bk !== yk && !wk && Bk.dedupe && vF(ek, bk)) return;
              bk = ek;
              const mk = {
                type: "measurement",
                payload: Ak,
                meta: fk
              };
              Fk.debug("Pushing measurement\n", mk), Ot(Xk.getActiveUserAction(), mk) || tk.execute(mk)
            } catch (Jk) {
              Fk.error("Error pushing measurement\n", Jk)
            }
          }
        }
      }(wk)), dk), Xk)
    }

    function Ia(kk) {
      const Fk = pa(kk),
        Bk = ja(Fk, kk);
      if (ek() && !kk.isolate) return void Bk.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Bk.debug("Initializing");
      const Rk = function(kk, Fk) {
          let Bk, Rk = [],
            tk = [],
            ak = [],
            Xk = 0,
            bk = 0;
          const wk = () => Rk.reduce(((kk, Fk) => Object.assign(kk, uk(Fk) ? Fk() : Fk)), {}),
            dk = () => {
              if (tk.length) {
                const kk = wk();
                tk.forEach((Fk => Fk(kk)))
              }
            };
          return {
            add: function() {
              for (var kk = arguments.length, Bk = new Array(kk), tk = 0; tk < kk; tk++) Bk[tk] = arguments[tk];
              Fk.debug("Adding metas\n", Bk), Rk.push(...Bk), dk()
            },
            remove: function() {
              for (var kk = arguments.length, Bk = new Array(kk), tk = 0; tk < kk; tk++) Bk[tk] = arguments[tk];
              Fk.debug("Removing metas\n", Bk), Rk = Rk.filter((kk => !Bk.includes(kk))), dk()
            },
            addListener: kk => {
              Fk.debug("Adding metas listener\n", kk), tk.push(kk)
            },
            removeListener: kk => {
              Fk.debug("Removing metas listener\n", kk), tk = tk.filter((Fk => Fk !== kk))
            },
            capture: kk => {
              var Fk;
              const Rk = void 0 !== Bk,
                tk = null !== (Fk = Bk) && void 0 !== Fk ? Fk : ak;
              Rk || (Bk = tk, Xk = 0, bk = tk.length);
              try {
                for (; Xk < bk;) {
                  const kk = tk[Xk++];
                  null === kk || void 0 === kk || kk()
                }
                const Fk = ra(wk());
                return null === kk || void 0 === kk || kk(), Fk
              } finally {
                Rk || (Bk = void 0)
              }
            },
            addCaptureListener: kk => {
              ak.push(kk)
            },
            removeCaptureListener: kk => {
              ak = ak.filter((Fk => Fk !== kk))
            },
            get value() {
              return wk()
            }
          }
        }(0, Bk),
        tk = qa(Fk, Bk, kk, Rk),
        ak = na(Fk, Bk, kk, Rk, tk),
        Xk = function(kk, Fk, Bk, Rk, tk, ak) {
          Fk.debug("Initializing instrumentations");
          const Xk = [];
          return {
            add: function() {
              Fk.debug("Adding instrumentations");
              for (var bk = arguments.length, wk = new Array(bk), dk = 0; dk < bk; dk++) wk[dk] = arguments[dk];
              wk.forEach((bk => {
                Fk.debug(`Adding "${bk.name}" instrumentation`), Xk.some((kk => kk.name === bk.name)) ? Fk.warn(`Instrumentation ${bk.name} is already added`) : (bk.unpatchedConsole = kk, bk.internalLogger = Fk, bk.config = Bk, bk.metas = Rk, bk.transports = tk, bk.api = ak, Xk.push(bk), bk.initialize())
              }))
            },
            get instrumentations() {
              return [...Xk]
            },
            remove: function() {
              Fk.debug("Removing instrumentations");
              for (var kk = arguments.length, Bk = new Array(kk), Rk = 0; Rk < kk; Rk++) Bk[Rk] = arguments[Rk];
              Bk.forEach((kk => {
                var Bk, Rk;
                Fk.debug(`Removing "${kk.name}" instrumentation`);
                const tk = Xk.reduce(((Fk, Bk, Rk) => null === Fk && Bk.name === kk.name ? Rk : null), null);
                null !== tk ? (null === (Bk = (Rk = Xk[tk]).destroy) || void 0 === Bk || Bk.call(Rk), Xk.splice(tk, 1)) : Fk.warn(`Instrumentation "${kk.name}" is not added`)
              }))
            }
          }
        }(Fk, Bk, kk, Rk, tk, ak),
        bk = fk(Fk, Bk, kk, Rk, tk, ak, Xk);
      return Pa(bk),
        function(kk) {
          kk.transports.add(...kk.config.transports), kk.transports.addBeforeSendHooks(kk.config.beforeSend)
        }(bk),
        function(kk) {
          kk.instrumentations.add(...kk.config.instrumentations)
        }(bk), bk
    }

    function Qa(kk) {
      const Fk = ga(kk);
      if (Fk) return Ia(Fk)
    }
  },
  6397: function(kk, Fk, Bk) {
    var Rk;
    ! function(tk, ak) {
      var Xk = "function",
        bk = "undefined",
        wk = "object",
        dk = "string",
        sk = "major",
        Vk = "model",
        Jk = "name",
        Ak = "type",
        ek = "vendor",
        yk = "version",
        fk = "architecture",
        mk = "console",
        Wk = "mobile",
        vk = "tablet",
        ik = "smarttv",
        Yk = "wearable",
        Lk = "embedded",
        Ok = "Amazon",
        Ek = "Apple",
        Sk = "ASUS",
        Nk = "BlackBerry",
        Hk = "Browser",
        uk = "Chrome",
        Mk = "Firefox",
        gk = "Google",
        Uk = "Honor",
        ck = "Huawei",
        Gk = "LG",
        Tk = "Microsoft",
        rk = "Motorola",
        Dk = "Nvidia",
        zk = "OnePlus",
        Pk = "Opera",
        hk = "OPPO",
        qk = "Samsung",
        Ck = "Sharp",
        Zk = "Sony",
        pk = "Xiaomi",
        Kk = "Zebra",
        xk = "Facebook",
        jk = "Chromium OS",
        lk = "Mac OS",
        nk = " Browser",
        Ik = function(kk) {
          for (var Fk = {}, Bk = 0; Bk < kk.length; Bk++) Fk[kk[Bk].toUpperCase()] = kk[Bk];
          return Fk
        },
        Qk = function(kk, Fk) {
          return typeof kk === dk && -1 !== kF(Fk).indexOf(kF(kk))
        },
        kF = function(kk) {
          return kk.toLowerCase()
        },
        FF = function(kk, Fk) {
          if (typeof kk === dk) return kk = kk.replace(/^\s\s*/, ""), typeof Fk === bk ? kk : kk.substring(0, 500)
        },
        BF = function(kk, Fk) {
          for (var Bk, Rk, tk, bk, dk, sk, Vk = 0; Vk < Fk.length && !dk;) {
            var Jk = Fk[Vk],
              Ak = Fk[Vk + 1];
            for (Bk = Rk = 0; Bk < Jk.length && !dk && Jk[Bk];)
              if (dk = Jk[Bk++].exec(kk))
                for (tk = 0; tk < Ak.length; tk++) sk = dk[++Rk], typeof(bk = Ak[tk]) === wk && bk.length > 0 ? 2 === bk.length ? typeof bk[1] == Xk ? this[bk[0]] = bk[1].call(this, sk) : this[bk[0]] = bk[1] : 3 === bk.length ? typeof bk[1] !== Xk || bk[1].exec && bk[1].test ? this[bk[0]] = sk ? sk.replace(bk[1], bk[2]) : ak : this[bk[0]] = sk ? bk[1].call(this, sk, bk[2]) : ak : 4 === bk.length && (this[bk[0]] = sk ? bk[3].call(this, sk.replace(bk[1], bk[2])) : ak) : this[bk] = sk || ak;
            Vk += 2
          }
        },
        RF = function(kk, Fk) {
          for (var Bk in Fk)
            if (typeof Fk[Bk] === wk && Fk[Bk].length > 0) {
              for (var Rk = 0; Rk < Fk[Bk].length; Rk++)
                if (Qk(Fk[Bk][Rk], kk)) return "?" === Bk ? ak : Bk
            } else if (Qk(Fk[Bk], kk)) return "?" === Bk ? ak : Bk;
          return Fk.hasOwnProperty("*") ? Fk["*"] : kk
        },
        tF = {
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
        aF = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [yk, [Jk, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [yk, [Jk, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Jk, yk],
            [/opios[\/ ]+([\w\.]+)/i],
            [yk, [Jk, Pk + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [yk, [Jk, Pk + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [yk, [Jk, Pk]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [yk, [Jk, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [yk, [Jk, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Jk, yk],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [yk, [Jk, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [yk, [Jk, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [yk, [Jk, "UC" + Hk]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [yk, [Jk, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [yk, [Jk, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [yk, [Jk, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [yk, [Jk, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [yk, [Jk, "Smart Lenovo " + Hk]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Jk, /(.+)/, "$1 Secure " + Hk], yk
            ],
            [/\bfocus\/([\w\.]+)/i],
            [yk, [Jk, Mk + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [yk, [Jk, Pk + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [yk, [Jk, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [yk, [Jk, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [yk, [Jk, Pk + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [yk, [Jk, "MIUI" + nk]],
            [/fxios\/([\w\.-]+)/i],
            [yk, [Jk, Mk]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [yk, [Jk, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Jk, /(.+)/, "$1Browser"], yk
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Jk, /(.+)/, "$1" + nk], yk
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [yk, [Jk, qk + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [yk, [Jk, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Jk, "Sogou Mobile"], yk
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Jk, yk],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Jk],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [yk, Jk],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Jk, xk], yk
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Jk, yk],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [yk, [Jk, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [yk, [Jk, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [yk, [Jk, uk + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Jk, uk + " WebView"], yk
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [yk, [Jk, "Android " + Hk]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Jk, yk],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [yk, [Jk, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [yk, Jk],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Jk, [yk, RF, {
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
            [Jk, yk],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Jk, "Netscape"], yk
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Jk, yk],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [yk, [Jk, Mk + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Jk, [yk, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Jk, [yk, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [fk, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [fk, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [fk, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [fk, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [fk, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [fk, /ower/, "", kF]
            ],
            [/ sun4\w[;\)]/i],
            [
              [fk, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [fk, kF]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Vk, [ek, qk],
              [Ak, vk]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Vk, [ek, qk],
              [Ak, Wk]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Vk, [ek, Ek],
              [Ak, Wk]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Vk, [ek, Ek],
              [Ak, vk]
            ],
            [/(macintosh);/i],
            [Vk, [ek, Ek]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Vk, [ek, Ck],
              [Ak, Wk]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Vk, [ek, Uk],
              [Ak, vk]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Vk, [ek, Uk],
              [Ak, Wk]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Vk, [ek, ck],
              [Ak, vk]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Vk, [ek, ck],
              [Ak, Wk]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Vk, /_/g, " "],
              [ek, pk],
              [Ak, vk]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Vk, /_/g, " "],
              [ek, pk],
              [Ak, Wk]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Vk, [ek, hk],
              [Ak, Wk]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Vk, [ek, RF, {
                OnePlus: ["304", "403", "203"],
                "*": hk
              }],
              [Ak, vk]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Vk, [ek, "Vivo"],
              [Ak, Wk]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Vk, [ek, "Realme"],
              [Ak, Wk]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Vk, [ek, rk],
              [Ak, Wk]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Vk, [ek, rk],
              [Ak, vk]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Vk, [ek, Gk],
              [Ak, vk]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Vk, [ek, Gk],
              [Ak, Wk]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Vk, [ek, "Lenovo"],
              [Ak, vk]
            ],
            [/(nokia) (t[12][01])/i],
            [ek, Vk, [Ak, vk]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Vk, /_/g, " "],
              [Ak, Wk],
              [ek, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Vk, [ek, gk],
              [Ak, vk]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Vk, [ek, gk],
              [Ak, Wk]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Vk, [ek, Zk],
              [Ak, Wk]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Vk, "Xperia Tablet"],
              [ek, Zk],
              [Ak, vk]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Vk, [ek, zk],
              [Ak, Wk]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Vk, [ek, Ok],
              [Ak, vk]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Vk, /(.+)/g, "Fire Phone $1"],
              [ek, Ok],
              [Ak, Wk]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Vk, ek, [Ak, vk]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Vk, [ek, Nk],
              [Ak, Wk]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Vk, [ek, Sk],
              [Ak, vk]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Vk, [ek, Sk],
              [Ak, Wk]
            ],
            [/(nexus 9)/i],
            [Vk, [ek, "HTC"],
              [Ak, vk]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [ek, [Vk, /_/g, " "],
              [Ak, Wk]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Vk, [ek, "TCL"],
              [Ak, vk]
            ],
            [/(itel) ((\w+))/i],
            [
              [ek, kF], Vk, [Ak, RF, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Vk, [ek, "Acer"],
              [Ak, vk]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Vk, [ek, "Meizu"],
              [Ak, Wk]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Vk, [ek, "Ulefone"],
              [Ak, Wk]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Vk, [ek, "Energizer"],
              [Ak, Wk]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Vk, [ek, "Cat"],
              [Ak, Wk]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Vk, [ek, "Smartfren"],
              [Ak, Wk]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Vk, [ek, "Nothing"],
              [Ak, Wk]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Vk, [ek, "Archos"],
              [Ak, vk]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Vk, [ek, "Archos"],
              [Ak, Wk]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [ek, Vk, [Ak, vk]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [ek, Vk, [Ak, Wk]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [ek, Vk, [Ak, vk]],
            [/(surface duo)/i],
            [Vk, [ek, Tk],
              [Ak, vk]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Vk, [ek, "Fairphone"],
              [Ak, Wk]
            ],
            [/(u304aa)/i],
            [Vk, [ek, "AT&T"],
              [Ak, Wk]
            ],
            [/\bsie-(\w*)/i],
            [Vk, [ek, "Siemens"],
              [Ak, Wk]
            ],
            [/\b(rct\w+) b/i],
            [Vk, [ek, "RCA"],
              [Ak, vk]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Vk, [ek, "Dell"],
              [Ak, vk]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Vk, [ek, "Verizon"],
              [Ak, vk]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Vk, [ek, "Barnes & Noble"],
              [Ak, vk]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Vk, [ek, "NuVision"],
              [Ak, vk]
            ],
            [/\b(k88) b/i],
            [Vk, [ek, "ZTE"],
              [Ak, vk]
            ],
            [/\b(nx\d{3}j) b/i],
            [Vk, [ek, "ZTE"],
              [Ak, Wk]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Vk, [ek, "Swiss"],
              [Ak, Wk]
            ],
            [/\b(zur\d{3}) b/i],
            [Vk, [ek, "Swiss"],
              [Ak, vk]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Vk, [ek, "Zeki"],
              [Ak, vk]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [ek, "Dragon Touch"], Vk, [Ak, vk]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Vk, [ek, "Insignia"],
              [Ak, vk]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Vk, [ek, "NextBook"],
              [Ak, vk]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [ek, "Voice"], Vk, [Ak, Wk]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [ek, "LvTel"], Vk, [Ak, Wk]
            ],
            [/\b(ph-1) /i],
            [Vk, [ek, "Essential"],
              [Ak, Wk]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Vk, [ek, "Envizen"],
              [Ak, vk]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Vk, [ek, "MachSpeed"],
              [Ak, vk]
            ],
            [/\btu_(1491) b/i],
            [Vk, [ek, "Rotor"],
              [Ak, vk]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Vk, [ek, Dk],
              [Ak, vk]
            ],
            [/(sprint) (\w+)/i],
            [ek, Vk, [Ak, Wk]],
            [/(kin\.[onetw]{3})/i],
            [
              [Vk, /\./g, " "],
              [ek, Tk],
              [Ak, Wk]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Vk, [ek, Kk],
              [Ak, vk]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Vk, [ek, Kk],
              [Ak, Wk]
            ],
            [/smart-tv.+(samsung)/i],
            [ek, [Ak, ik]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Vk, /^/, "SmartTV"],
              [ek, qk],
              [Ak, ik]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [ek, Gk],
              [Ak, ik]
            ],
            [/(apple) ?tv/i],
            [ek, [Vk, Ek + " TV"],
              [Ak, ik]
            ],
            [/crkey/i],
            [
              [Vk, uk + "cast"],
              [ek, gk],
              [Ak, ik]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Vk, [ek, Ok],
              [Ak, ik]
            ],
            [/(shield \w+ tv)/i],
            [Vk, [ek, Dk],
              [Ak, ik]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Vk, [ek, Ck],
              [Ak, ik]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Vk, [ek, Zk],
              [Ak, ik]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Vk, [ek, pk],
              [Ak, ik]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [ek, Vk, [Ak, ik]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [ek, FF],
              [Vk, FF],
              [Ak, ik]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Vk, [Ak, ik]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Ak, ik]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [ek, Vk, [Ak, mk]],
            [/droid.+; (shield)( bui|\))/i],
            [Vk, [ek, Dk],
              [Ak, mk]
            ],
            [/(playstation \w+)/i],
            [Vk, [ek, Zk],
              [Ak, mk]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Vk, [ek, Tk],
              [Ak, mk]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Vk, [ek, qk],
              [Ak, Yk]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [ek, Vk, [Ak, Yk]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Vk, [ek, hk],
              [Ak, Yk]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Vk, [ek, Ek],
              [Ak, Yk]
            ],
            [/(opwwe\d{3})/i],
            [Vk, [ek, zk],
              [Ak, Yk]
            ],
            [/(moto 360)/i],
            [Vk, [ek, rk],
              [Ak, Yk]
            ],
            [/(smartwatch 3)/i],
            [Vk, [ek, Zk],
              [Ak, Yk]
            ],
            [/(g watch r)/i],
            [Vk, [ek, Gk],
              [Ak, Yk]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Vk, [ek, Kk],
              [Ak, Yk]
            ],
            [/droid.+; (glass) \d/i],
            [Vk, [ek, gk],
              [Ak, Yk]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [ek, Vk, [Ak, Yk]],
            [/; (quest( \d| pro)?)/i],
            [Vk, [ek, xk],
              [Ak, Yk]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [ek, [Ak, Lk]],
            [/(aeobc)\b/i],
            [Vk, [ek, Ok],
              [Ak, Lk]
            ],
            [/(homepod).+mac os/i],
            [Vk, [ek, Ek],
              [Ak, Lk]
            ],
            [/windows iot/i],
            [
              [Ak, Lk]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Vk, [Ak, Wk]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Vk, [Ak, vk]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Ak, vk]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Ak, Wk]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Vk, [ek, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [yk, [Jk, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Jk, yk],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [yk, [Jk, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Jk, yk],
            [/ladybird\//i],
            [
              [Jk, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [yk, Jk]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Jk, yk],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Jk, [yk, RF, tF]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [yk, RF, tF],
              [Jk, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [yk, /_/g, "."],
              [Jk, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Jk, lk],
              [yk, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [yk, Jk],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Jk, /(.+)/, "$1 Touch"], yk
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Jk, yk],
            [/\(bb(10);/i],
            [yk, [Jk, Nk]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [yk, [Jk, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [yk, [Jk, Mk + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [yk, [Jk, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [yk, [Jk, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [yk, [Jk, uk + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Jk, jk], yk
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Jk, yk],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Jk, "Solaris"], yk
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Jk, yk]
          ]
        },
        XF = function(kk, Fk) {
          if (typeof kk === wk && (Fk = kk, kk = ak), !(this instanceof XF)) return new XF(kk, Fk).getResult();
          var Bk = typeof tk !== bk && tk.navigator ? tk.navigator : ak,
            Rk = kk || (Bk && Bk.userAgent ? Bk.userAgent : ""),
            mk = Bk && Bk.userAgentData ? Bk.userAgentData : ak,
            ik = Fk ? function(kk, Fk) {
              var Bk = {};
              for (var Rk in kk) Fk[Rk] && Fk[Rk].length % 2 === 0 ? Bk[Rk] = Fk[Rk].concat(kk[Rk]) : Bk[Rk] = kk[Rk];
              return Bk
            }(aF, Fk) : aF,
            Yk = Bk && Bk.userAgent == Rk;
          return this.getBrowser = function() {
            var kk, Fk = {};
            return Fk[Jk] = ak, Fk[yk] = ak, BF.call(Fk, Rk, ik.browser), Fk[sk] = typeof(kk = Fk[yk]) === dk ? kk.replace(/[^\d\.]/g, "").split(".")[0] : ak, Yk && Bk && Bk.brave && typeof Bk.brave.isBrave == Xk && (Fk[Jk] = "Brave"), Fk
          }, this.getCPU = function() {
            var kk = {};
            return kk[fk] = ak, BF.call(kk, Rk, ik.cpu), kk
          }, this.getDevice = function() {
            var kk = {};
            return kk[ek] = ak, kk[Vk] = ak, kk[Ak] = ak, BF.call(kk, Rk, ik.device), Yk && !kk[Ak] && mk && mk.mobile && (kk[Ak] = Wk), Yk && "Macintosh" == kk[Vk] && Bk && typeof Bk.standalone !== bk && Bk.maxTouchPoints && Bk.maxTouchPoints > 2 && (kk[Vk] = "iPad", kk[Ak] = vk), kk
          }, this.ne = function() {
            var kk = {};
            return kk[Jk] = ak, kk[yk] = ak, BF.call(kk, Rk, ik.engine), kk
          }, this.getOS = function() {
            var kk = {};
            return kk[Jk] = ak, kk[yk] = ak, BF.call(kk, Rk, ik.os), Yk && !kk[Jk] && mk && mk.platform && "Unknown" != mk.platform && (kk[Jk] = mk.platform.replace(/chrome os/i, jk).replace(/macos/i, lk)), kk
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.ne(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Rk
          }, this.setUA = function(kk) {
            return Rk = typeof kk === dk && kk.length > 500 ? FF(kk, 500) : kk, this
          }, this.setUA(Rk), this
        };
      XF.VERSION = "1.0.41", XF.BROWSER = Ik([Jk, yk, sk]), XF.CPU = Ik([fk]), XF.DEVICE = Ik([Vk, ek, Ak, mk, Wk, ik, vk, Yk, Lk]), XF.ENGINE = XF.OS = Ik([Jk, yk]), typeof Fk !== bk ? (kk.exports && (Fk = kk.exports = XF), Fk.UAParser = XF) : Bk.amdO ? (Rk = function() {
        return XF
      }.call(Fk, Bk, Fk, kk)) === ak || (kk.exports = Rk) : typeof tk !== bk && (tk.UAParser = XF);
      var bF = typeof tk !== bk && (tk.jQuery || tk.Zepto);
      if (bF && !bF.ua) {
        var wF = new XF;
        bF.ua = wF.getResult(), bF.ua.get = function() {
          return wF.getUA()
        }, bF.ua.set = function(kk) {
          wF.setUA(kk);
          var Fk = wF.getResult();
          for (var Bk in Fk) bF.ua[Bk] = Fk[Bk]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);