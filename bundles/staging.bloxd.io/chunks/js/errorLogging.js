export const id = 31;
export const ids = [31];
export const modules = {
  6534: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BaseExtension: () => ei,
      BaseInstrumentation: () => ii,
      BaseTransport: () => iS,
      CSPInstrumentation: () => Ff,
      ConsoleInstrumentation: () => Qi,
      ConsoleTransport: () => rS,
      EVENT_CLICK: () => Ye,
      EVENT_NAVIGATION: () => Le,
      EVENT_ROUTE_CHANGE: () => Ve,
      EVENT_SESSION_EXTEND: () => se,
      EVENT_SESSION_RESUME: () => je,
      EVENT_SESSION_START: () => Ae,
      EVENT_VIEW_CHANGED: () => Ce,
      ErrorsInstrumentation: () => Ei,
      FetchTransport: () => sS,
      InternalLoggerLevel: () => oe,
      LogLevel: () => Li,
      MAX_SESSION_PERSISTENCE_TIME: () => Pk,
      NavigationInstrumentation: () => of,
      Observable: () => Yi,
      PerformanceInstrumentation: () => GD,
      PersistentSessionsManager: () => ae,
      SESSION_EXPIRATION_TIME: () => Sk,
      SESSION_INACTIVITY_TIME: () => bk,
      STORAGE_KEY: () => fk,
      SessionInstrumentation: () => fi,
      TransportItemType: () => DS,
      UserActionInstrumentation: () => Vf,
      UserActionState: () => pf,
      VERSION: () => Di,
      ViewInstrumentation: () => Wi,
      VolatileSessionsManager: () => We,
      WebVitalsInstrumentation: () => ED,
      allLogLevels: () => Ai,
      browserMeta: () => Rf,
      buildStackFrame: () => Si,
      captureMetas: () => XS,
      createInternalLogger: () => qS,
      createPromiseBuffer: () => lS,
      createSession: () => kS,
      deepEqual: () => ye,
      defaultEventDomain: () => Dk,
      defaultExceptionType: () => Vi,
      defaultGlobalObjectKey: () => IS,
      defaultInternalLoggerLevel: () => Oe,
      defaultLogLevel: () => Ci,
      faro: () => Hk,
      genShortID: () => pe,
      getCurrentTimestamp: () => He,
      getDataFromSafariExtensions: () => ni,
      getIgnoreUrls: () => gk,
      getInternalFaroFromGlobalObject: () => xk,
      getStackFramesFromError: () => Hi,
      getTransportBody: () => bS,
      getUrlFromResource: () => Nk,
      getWebInstrumentations: () => Zf,
      globalObject: () => Mk,
      initializeFaro: () => ib,
      internalGlobalObjectKey: () => Kk,
      isArray: () => uk,
      isBoolean: () => sk,
      isDomError: () => Wk,
      isDomException: () => tk,
      isElement: () => Bk,
      isElementDefined: () => Xk,
      uU: () => Ok,
      isError: () => hk,
      isErrorDefined: () => Ek,
      isErrorEvent: () => ak,
      isEvent: () => vk,
      isEventDefined: () => Qk,
      isFunction: () => Fk,
      isInstanceOf: () => yk,
      isInt: () => jk,
      isInternalFaroOnGlobalObject: () => Uk,
      isMap: () => Tk,
      isMapDefined: () => ck,
      isNull: () => Lk,
      isNumber: () => Ak,
      isObject: () => Vk,
      isPrimitive: () => zk,
      isRegExp: () => qk,
      isString: () => Ck,
      isSymbol: () => dk,
      isSyntheticEvent: () => Zk,
      isThenable: () => Ik,
      isToString: () => pk,
      isTypeof: () => lk,
      isUndefined: () => Yk,
      makeCoreConfig: () => vS,
      noop: () => Te,
      osMeta: () => Jf,
      parseStacktrace: () => wi,
      sdkMeta: () => eS,
      setInternalFaroOnGlobalObject: () => nk,
      transportItemTypeToBodyKey: () => fS,
      unknownString: () => ai,
      userActionDataAttribute: () => ND,
      userActionTimeoutDataAttribute: () => RD
    });
    const Dk = "browser",
      fk = "com.grafana.faro.session",
      Sk = 144e5,
      bk = 9e5,
      rk = 1e3,
      Pk = bk,
      mk = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Pk
      };
    const Mk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof ik.g ? ik.g : "undefined" !== typeof self ? self : void 0;
    const Kk = "_faroInternal";

    function xk() {
      return Mk[Kk]
    }

    function nk(kk) {
      kk.config.isolate ? kk.internalLogger.debug("Skipping registering internal Faro instance on global object") : (kk.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Mk, Kk, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: kk
      }))
    }

    function Uk() {
      return Kk in Mk
    }
    let Hk = {
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

    function wk(kk, ek, ik, Dk, fk, Sk, bk) {
      return ek.debug("Initializing Faro"), Hk = {
          api: Sk,
          config: ik,
          instrumentations: bk,
          internalLogger: ek,
          metas: Dk,
          pause: fk.pause,
          transports: fk,
          unpatchedConsole: kk,
          unpause: fk.unpause
        }, nk(Hk),
        function(kk) {
          if (kk.config.preventGlobalExposure) kk.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (kk.internalLogger.debug(`Registering public faro reference in the global scope using "${kk.config.globalObjectKey}" key`), kk.config.globalObjectKey in Mk) return void kk.internalLogger.warn(`Skipping global registration due to key "${kk.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Mk, kk.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: kk
            })
          }
        }(Hk), Hk
    }

    function lk(kk, ek) {
      return typeof kk === ek
    }

    function pk(kk, ek) {
      return Object.prototype.toString.call(kk) === `[object ${ek}]`
    }

    function yk(kk, ek) {
      try {
        return kk instanceof ek
      } catch (ik) {
        return !1
      }
    }
    const Yk = kk => lk(kk, "undefined"),
      Lk = kk => lk(kk, "null"),
      Ck = kk => lk(kk, "string"),
      Ak = kk => lk(kk, "number") && !isNaN(kk) || lk(kk, "bigint"),
      jk = kk => Ak(kk) && Number.isInteger(kk),
      sk = kk => lk(kk, "boolean"),
      dk = kk => lk(kk, "symbol"),
      Vk = kk => !Lk(kk) && lk(kk, "object"),
      Fk = kk => lk(kk, "function"),
      uk = kk => pk(kk, "Array"),
      qk = kk => pk(kk, "RegExp"),
      Ik = kk => Fk(null === kk || void 0 === kk ? void 0 : kk.then),
      zk = kk => !Vk(kk) && !Fk(kk),
      Qk = "undefined" !== typeof Event,
      vk = kk => Qk && yk(kk, Event),
      Ek = "undefined" !== typeof Error,
      hk = kk => Ek && yk(kk, Error),
      ak = kk => pk(kk, "ErrorEvent"),
      Wk = kk => pk(kk, "DOMError"),
      tk = kk => pk(kk, "DOMException"),
      Xk = "undefined" !== typeof Element,
      Bk = kk => Xk && yk(kk, Element),
      ck = "undefined" !== typeof Map,
      Tk = kk => ck && yk(kk, Map),
      Zk = kk => Vk(kk) && "nativeEvent" in kk && "preventDefault" in kk && "stopPropagation" in kk;

    function Ok(kk) {
      return null == kk || (uk(kk) || Ck(kk) ? 0 === kk.length : !!Vk(kk) && 0 === Object.keys(kk).length)
    }

    function gk() {
      return Hk.transports.transports.flatMap((kk => kk.getIgnoreUrls()))
    }

    function Gk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return gk().some((ek => kk && null != kk.match(ek)))
    }

    function Nk(kk) {
      return Ck(kk) ? kk : kk instanceof URL ? kk.href : !Ok(kk) && Fk(null === kk || void 0 === kk ? void 0 : kk.toString) ? kk.toString() : void 0
    }
    const Rk = "sessionStorage",
      Jk = "localStorage";

    function ke(kk) {
      try {
        let ek;
        ek = window[kk];
        const ik = "__faro_storage_test__";
        return ek.setItem(ik, ik), ek.removeItem(ik), !0
      } catch (ik) {
        var ek;
        return null === (ek = Hk.internalLogger) || void 0 === ek || ek.info(`Web storage of type ${kk} is not available. Reason: ${ik}`), !1
      }
    }

    function ee(kk, ek) {
      return be(ek) ? window[ek].getItem(kk) : null
    }

    function ie(kk, ek, ik) {
      if (be(ik)) try {
        window[ik].setItem(kk, ek)
      } catch (Dk) {}
    }

    function De(kk, ek) {
      be(ek) && window[ek].removeItem(kk)
    }
    const fe = ke(Jk),
      Se = ke(Rk);

    function be(kk) {
      return kk === Jk ? fe : kk === Rk && Se
    }

    function re(kk) {
      return re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, re(kk)
    }

    function Pe(kk) {
      var ek = function(kk, ek) {
        if ("object" != re(kk) || !kk) return kk;
        var ik = kk[Symbol.toPrimitive];
        if (void 0 !== ik) {
          var Dk = ik.call(kk, ek || "default");
          if ("object" != re(Dk)) return Dk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ek ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == re(ek) ? ek : ek + ""
    }

    function me(kk, ek, ik) {
      return (ek = Pe(ek)) in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }

    function Me(kk, ek) {
      var ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Dk = Object.getOwnPropertySymbols(kk);
        ek && (Dk = Dk.filter((function(ek) {
          return Object.getOwnPropertyDescriptor(kk, ek).enumerable
        }))), ik.push.apply(ik, Dk)
      }
      return ik
    }

    function Ke(kk) {
      for (var ek = 1; ek < arguments.length; ek++) {
        var ik = null != arguments[ek] ? arguments[ek] : {};
        ek % 2 ? Me(Object(ik), !0).forEach((function(ek) {
          me(kk, ek, ik[ek])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : Me(Object(ik)).forEach((function(ek) {
          Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
        }))
      }
      return kk
    }

    function xe() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hk;
      var ek, ik, Dk;
      const fk = kk.config.sessionTracking,
        Sk = null !== (ek = null !== (ik = null === fk || void 0 === fk || null === (Dk = fk.sampler) || void 0 === Dk ? void 0 : Dk.call(fk, {
          metas: kk.metas.value
        })) && void 0 !== ik ? ik : null === fk || void 0 === fk ? void 0 : fk.samplingRate) && void 0 !== ek ? ek : 1,
        bk = "number" === typeof Sk ? function(kk) {
          return Math.min(1, Math.max(0, kk))
        }(Sk) : 0;
      if (!(bk > 0)) return !1;
      if (1 === bk) return !0;
      try {
        const kk = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === kk || void 0 === kk ? void 0 : kk.getRandomValues)) {
          const ek = new Uint32Array(1);
          return kk.getRandomValues(ek), ek[0] / Math.pow(2, 32) < bk
        }
      } catch (rk) {}
      return Math.random() < bk
    }

    function ne() {
      return Date.now()
    }

    function Ue() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function He() {
      return (new Date).toISOString()
    }

    function we(kk) {
      return new Date(kk).toISOString()
    }
    const le = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function pe() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const ek = new Uint32Array(kk),
        ik = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === ik || void 0 === ik ? void 0 : ik.getRandomValues) ik.getRandomValues(ek);
      else
        for (let fk = 0; fk < kk; fk++) ek[fk] = Math.floor(4294967296 * Math.random());
      let Dk = "";
      for (let fk = 0; fk < kk; fk++) Dk += le[ek[fk] % 59];
      return Dk
    }

    function ye(kk, ek) {
      if (kk === ek) return !0;
      if (lk(kk, "number") && isNaN(kk)) return lk(ek, "number") && isNaN(ek);
      const ik = uk(kk),
        Dk = uk(ek);
      if (ik !== Dk) return !1;
      if (ik && Dk) {
        const ik = kk.length;
        if (ik !== ek.length) return !1;
        for (let Dk = ik; 0 !== Dk--;)
          if (!ye(kk[Dk], ek[Dk])) return !1;
        return !0
      }
      const fk = Vk(kk),
        Sk = Vk(ek);
      if (fk !== Sk) return !1;
      if (kk && ek && fk && Sk) {
        const ik = Object.keys(kk),
          Dk = Object.keys(ek);
        if (ik.length !== Dk.length) return !1;
        for (let kk of ik)
          if (!Dk.includes(kk)) return !1;
        for (let fk of ik)
          if (!ye(kk[fk], ek[fk])) return !1;
        return !0
      }
      return !1
    }
    const Ye = "click",
      Le = "navigation",
      Ce = "view_changed",
      Ae = "session_start",
      je = "session_resume",
      se = "session_extend",
      de = "service_name_override",
      Ve = "route_change";

    function Fe() {
      let {
        sessionId: kk,
        started: ek,
        lastActivity: ik,
        isSampled: Dk = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hk;
      var Sk;
      const bk = ne(),
        rk = null === (Sk = fk.config) || void 0 === Sk || null === (Sk = Sk.sessionTracking) || void 0 === Sk ? void 0 : Sk.generateSessionId;
      return null == kk && (kk = "function" === typeof rk ? rk() : pe()), {
        sessionId: kk,
        lastActivity: null !== ik && void 0 !== ik ? ik : bk,
        started: null !== ek && void 0 !== ek ? ek : bk,
        isSampled: Dk
      }
    }

    function ue(kk) {
      if (null == kk) return !1;
      const ek = ne();
      return ek - kk.started < 144e5 && ek - kk.lastActivity < bk
    }

    function qe(kk) {
      let {
        fetchUserSession: ek,
        storeUserSession: ik,
        adoptSession: Dk,
        updateInterval: fk = 0
      } = kk, rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hk, Pk = 0;
      return function() {
        let {
          forceSessionExtend: kk = !1,
          refreshActivity: mk = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Mk, Kk;
        if (!ek || !ik) return;
        const xk = ne();
        if (!kk && xk < Pk && Pk - xk <= fk) return;
        const nk = rk.config.sessionTracking,
          Uk = null === nk || void 0 === nk ? void 0 : nk.persistent;
        if (Uk && !fe || !Uk && !Se) return;
        const Hk = ek();
        if (Pk = Math.min(xk + fk, (null !== (Mk = null === Hk || void 0 === Hk ? void 0 : Hk.started) && void 0 !== Mk ? Mk : xk) + Sk, (null !== (Kk = null === Hk || void 0 === Hk ? void 0 : Hk.lastActivity) && void 0 !== Kk ? Kk : xk) + bk), !1 === kk && ue(Hk)) {
          var wk;
          mk && ik(Ke(Ke({}, Hk), {}, {
            lastActivity: xk
          }));
          const kk = null === (wk = rk.metas.value.session) || void 0 === wk ? void 0 : wk.id;
          null != Dk && null != Hk.sessionMeta && Hk.sessionId !== kk && Dk(Hk.sessionMeta)
        } else {
          var lk, pk, yk;
          let kk = ze(Fe({
            isSampled: xe(rk)
          }, rk), Hk, rk);
          Pk = xk + fk, ik(kk), null === (lk = rk.api) || void 0 === lk || lk.setSession(kk.sessionMeta), null === nk || void 0 === nk || null === (pk = nk.onSessionChange) || void 0 === pk || pk.call(nk, null !== (yk = null === Hk || void 0 === Hk ? void 0 : Hk.sessionMeta) && void 0 !== yk ? yk : null, kk.sessionMeta)
        }
      }
    }

    function Ie(kk) {
      let ek, {
          fetchUserSession: ik,
          storeUserSession: Dk,
          updateInterval: fk = 0
        } = kk,
        Sk = 0;
      return kk => {
        const bk = ne();
        if (kk === ek && bk < Sk && Sk - bk <= fk) return;
        ek = kk, Sk = bk + fk;
        const rk = ik();
        (null === rk || void 0 === rk ? void 0 : rk.sessionId) === kk && ue(rk) && Dk(Ke(Ke({}, rk), {}, {
          lastActivity: bk
        }))
      }
    }

    function ze(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hk;
      var Dk, fk, Sk, bk, rk, Pk;
      const mk = Ke(Ke({}, kk), {}, {
          sessionMeta: {
            id: kk.sessionId,
            attributes: ve(Ke(Ke(Ke({}, null === (Dk = ik.config.sessionTracking) || void 0 === Dk || null === (Dk = Dk.session) || void 0 === Dk ? void 0 : Dk.attributes), null !== (fk = null === (Sk = ik.metas.value.session) || void 0 === Sk ? void 0 : Sk.attributes) && void 0 !== fk ? fk : {}), {}, {
              isSampled: kk.isSampled.toString()
            }))
          }
        }),
        Mk = null !== (bk = null === (rk = ik.metas.value.session) || void 0 === rk ? void 0 : rk.overrides) && void 0 !== bk ? bk : null === ek || void 0 === ek || null === (Pk = ek.sessionMeta) || void 0 === Pk ? void 0 : Pk.overrides;
      Ok(Mk) || (mk.sessionMeta.overrides = Mk);
      const Kk = null === ek || void 0 === ek ? void 0 : ek.sessionId;
      return null != Kk && (mk.sessionMeta.attributes.previousSession = Kk), mk
    }

    function Qe(kk) {
      let {
        fetchUserSession: ek,
        storeUserSession: ik
      } = kk, Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hk, fk = !1;
      return function(kk) {
        if (fk) return;
        const Sk = kk.session,
          bk = ek();
        let rk = null === Sk || void 0 === Sk ? void 0 : Sk.id;
        const Pk = null === Sk || void 0 === Sk ? void 0 : Sk.attributes,
          mk = null === Sk || void 0 === Sk ? void 0 : Sk.overrides,
          Mk = null === bk || void 0 === bk ? void 0 : bk.sessionMeta,
          Kk = null === Mk || void 0 === Mk ? void 0 : Mk.overrides,
          xk = !!mk && !ye(mk, Kk),
          nk = !!Pk && !ye(Pk, null === Mk || void 0 === Mk ? void 0 : Mk.attributes);
        if (Sk && rk !== (null === bk || void 0 === bk ? void 0 : bk.sessionId) || nk || xk) {
          var Uk, Hk;
          const kk = null != bk && rk === bk.sessionId,
            ek = ze(kk ? bk : Fe({
              sessionId: rk,
              isSampled: xe(Dk)
            }, Dk), bk, Dk),
            Sk = null === bk || void 0 === bk || null === (Uk = bk.sessionMeta) || void 0 === Uk || null === (Uk = Uk.attributes) || void 0 === Uk ? void 0 : Uk.previousSession;
          kk && null != Sk && Sk !== ek.sessionId && (ek.sessionMeta.attributes.previousSession = Sk), (null === (Hk = ek.sessionMeta.attributes) || void 0 === Hk ? void 0 : Hk.previousSession) === ek.sessionId && delete ek.sessionMeta.attributes.previousSession, ik(ek),
            function(kk, ek) {
              let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var fk, Sk, bk;
              if (!ek) return;
              const rk = ik.serviceName,
                Pk = null !== (fk = null !== (Sk = Dk.serviceName) && void 0 !== Sk ? Sk : null === (bk = kk.metas.value.app) || void 0 === bk ? void 0 : bk.name) && void 0 !== fk ? fk : "";
              rk && rk !== Pk && kk.api.pushEvent(de, {
                serviceName: rk,
                previousServiceName: Pk
              })
            }(Dk, xk, mk, Kk), fk = !0;
          try {
            Dk.api.setSession(ek.sessionMeta)
          } finally {
            fk = !1
          }
        }
      }
    }

    function ve(kk) {
      const ek = {};
      for (const ik of Object.keys(kk)) {
        const Dk = kk[ik];
        void 0 !== Dk && (ek[ik] = Dk)
      }
      return ek
    }

    function Ee() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== kk && void 0 !== kk ? kk : {}, function() {
        const kk = new WeakSet;
        return function(ek, ik) {
          if (Vk(ik) && null !== ik) {
            if (kk.has(ik)) return null;
            kk.add(ik)
          }
          return ik
        }
      }())
    }

    function he() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ek = {};
      for (const [ik, Dk] of Object.entries(kk)) ek[ik] = Vk(Dk) && null !== Dk ? Ee(Dk) : String(Dk);
      return ek
    }
    var ae = class kk {
      constructor() {
        var ek = this;
        let ik = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hk;
        this.context = ik, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = kk => {
          this.adopting = !0;
          try {
            var ek;
            null === (ek = this.context.api) || void 0 === ek || ek.setSession(kk)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: kk = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ek.updateUserSession({
            refreshActivity: kk
          })
        }, this.recordActivity = Ie({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: rk
        }), this.updateUserSession = qe({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: rk
        }, ik), this.init()
      }
      static removeUserSession() {
        De(fk, kk.storageTypeLocal)
      }
      static storeUserSession(ek) {
        ie(fk, Ee(ek), kk.storageTypeLocal)
      }
      static fetchUserSession() {
        const ek = ee(fk, kk.storageTypeLocal);
        return ek ? JSON.parse(ek) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var kk;
            this.updateSession({
              refreshActivity: !1
            });
            const ek = null === (kk = this.context.api) || void 0 === kk || null === (kk = kk.getSession()) || void 0 === kk ? void 0 : kk.id;
            ek && this.recordActivity(ek)
          }
        })), this.context.metas.addListener(Qe({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession
        }, this.context))
      }
    };
    ae.storageTypeLocal = Jk;
    var We = class kk {
      constructor() {
        var ek = this;
        let ik = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hk;
        this.context = ik, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: kk = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ek.updateUserSession({
            refreshActivity: kk
          })
        }, this.recordActivity = Ie({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: rk
        }), this.updateUserSession = qe({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession,
          updateInterval: rk
        }, ik), this.init()
      }
      static removeUserSession() {
        De(fk, kk.storageTypeSession)
      }
      static storeUserSession(ek) {
        ie(fk, Ee(ek), kk.storageTypeSession)
      }
      static fetchUserSession() {
        const ek = ee(fk, kk.storageTypeSession);
        return ek ? JSON.parse(ek) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var kk;
            this.updateSession({
              refreshActivity: !1
            });
            const ek = null === (kk = this.context.api) || void 0 === kk || null === (kk = kk.getSession()) || void 0 === kk ? void 0 : kk.id;
            ek && this.recordActivity(ek)
          }
        })), this.context.metas.addListener(Qe({
          fetchUserSession: kk.fetchUserSession,
          storeUserSession: kk.storeUserSession
        }, this.context))
      }
    };
    We.storageTypeSession = Rk;
    const te = new WeakMap;

    function Xe(kk) {
      let ek = te.get(kk);
      if (!ek) {
        let ik = [],
          Dk = [];
        ek = {
          addSessionUpdateListener: kk => {
            ik.push(kk)
          },
          removeSessionUpdateListener: kk => {
            ik = ik.filter((ek => ek !== kk))
          },
          notifySessionUpdate: kk => {
            ik.forEach((ek => ek(kk)))
          },
          shouldCapture: () => Dk.every((kk => kk())),
          addCaptureFilter: kk => {
            Dk.push(kk)
          },
          removeCaptureFilter: kk => {
            Dk = Dk.filter((ek => ek !== kk))
          }
        }, te.set(kk, ek)
      }
      return ek
    }
    var Be = class {
      constructor(kk, ek, ik) {
        this.metas = kk, this.transports = ek, this.onActivate = ik, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = kk => {
          var ek, ik, Dk;
          const fk = this.pending;
          var Sk, bk;
          if ("overrides" === kk.type) return void(this.pending = {
            reset: null !== (Sk = null === fk || void 0 === fk ? void 0 : fk.reset) && void 0 !== Sk && Sk,
            inheritOverrides: null === (bk = null === fk || void 0 === fk ? void 0 : fk.inheritOverrides) || void 0 === bk || bk,
            session: Ke(Ke({}, null === fk || void 0 === fk ? void 0 : fk.session), {}, {
              overrides: Ke(Ke({}, null === fk || void 0 === fk ? void 0 : fk.session.overrides), kk.overrides)
            })
          });
          const rk = kk.session,
            Pk = Ok(rk) || null != rk && "id" in rk && !rk.id,
            mk = null !== (ek = null === rk || void 0 === rk ? void 0 : rk.overrides) && void 0 !== ek ? ek : null === fk || void 0 === fk ? void 0 : fk.session.overrides;
          this.pending = {
            reset: Pk || !(null === rk || void 0 === rk ? void 0 : rk.id) && null !== (ik = null === fk || void 0 === fk ? void 0 : fk.reset) && void 0 !== ik && ik,
            inheritOverrides: !(!kk.overrides && void 0 !== (null === rk || void 0 === rk ? void 0 : rk.overrides)) && (null === (Dk = null === fk || void 0 === fk ? void 0 : fk.inheritOverrides) || void 0 === Dk || Dk),
            session: {
              id: null === rk || void 0 === rk ? void 0 : rk.id,
              attributes: (null === rk || void 0 === rk ? void 0 : rk.attributes) && Ke({}, rk.attributes),
              overrides: kk.overrides ? Ke(Ke({}, null === fk || void 0 === fk ? void 0 : fk.session.overrides), kk.overrides) : mk && Ke({}, mk)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var kk, ek;
        this.waiting = !0, Xe(this.metas).addSessionUpdateListener(this.recordUpdate), Xe(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (kk = (ek = this.metas).addCaptureListener) || void 0 === kk || kk.call(ek, this.activate), this.activate()
      }
      destroy() {
        var kk, ek;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Xe(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (kk = (ek = this.metas).removeCaptureListener) || void 0 === kk || kk.call(ek, this.activate), Xe(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function ce(kk) {
      return (null === kk || void 0 === kk ? void 0 : kk.persistent) ? ae : We
    }

    function Te() {}
    let oe = function(kk) {
      return kk[kk.OFF = 0] = "OFF", kk[kk.ERROR = 1] = "ERROR", kk[kk.WARN = 2] = "WARN", kk[kk.INFO = 3] = "INFO", kk[kk.VERBOSE = 4] = "VERBOSE", kk
    }({});
    const Ze = {
        debug: Te,
        error: Te,
        info: Te,
        prefix: "Faro",
        warn: Te
      },
      Oe = 1;

    function ge(kk) {
      return ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, ge(kk)
    }

    function Ge(kk) {
      var ek = function(kk, ek) {
        if ("object" != ge(kk) || !kk) return kk;
        var ik = kk[Symbol.toPrimitive];
        if (void 0 !== ik) {
          var Dk = ik.call(kk, ek || "default");
          if ("object" != ge(Dk)) return Dk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ek ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == ge(ek) ? ek : ek + ""
    }

    function Ne(kk, ek, ik) {
      return (ek = Ge(ek)) in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }

    function Re(kk, ek) {
      var ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Dk = Object.getOwnPropertySymbols(kk);
        ek && (Dk = Dk.filter((function(ek) {
          return Object.getOwnPropertyDescriptor(kk, ek).enumerable
        }))), ik.push.apply(ik, Dk)
      }
      return ik
    }

    function Je(kk) {
      for (var ek = 1; ek < arguments.length; ek++) {
        var ik = null != arguments[ek] ? arguments[ek] : {};
        ek % 2 ? Re(Object(ik), !0).forEach((function(ek) {
          Ne(kk, ek, ik[ek])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : Re(Object(ik)).forEach((function(ek) {
          Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
        }))
      }
      return kk
    }
    const ki = Je({}, console);
    var ei = class {
        constructor() {
          this.unpatchedConsole = ki, this.internalLogger = Ze, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
          this.internalLogger.debug(`${this.name}\n`, ...ek)
        }
        logInfo() {
          for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
          this.internalLogger.info(`${this.name}\n`, ...ek)
        }
        logWarn() {
          for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
          this.internalLogger.warn(`${this.name}\n`, ...ek)
        }
        logError() {
          for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
          this.internalLogger.error(`${this.name}\n`, ...ek)
        }
      },
      ii = class extends ei {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const Di = "2.12.1";
    var fi = class extends ii {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = Di, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(kk) {
        var ek;
        const ik = kk.session;
        if (ik && ik.id !== (null === (ek = this.notifiedSession) || void 0 === ek ? void 0 : ek.id)) {
          var Dk;
          if (this.isAdoptingSession()) return void(this.notifiedSession = ik);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Dk = ik.attributes) || void 0 === Dk ? void 0 : Dk.previousSession)) return this.api.pushEvent(se, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = ik);
          this.notifiedSession = ik, this.api.pushEvent(Ae, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(kk, ek, ik) {
        const Dk = null === ik || void 0 === ik ? void 0 : ik.session;
        let fk, Sk, bk = kk.fetchUserSession();
        if (ek.persistent && ek.maxSessionPersistenceTime && bk) {
          const kk = ne();
          bk.lastActivity < kk - ek.maxSessionPersistenceTime && (ae.removeUserSession(), bk = null)
        }
        const rk = ue(bk);
        if ((null === ik || void 0 === ik ? void 0 : ik.reset) || !rk || (null === Dk || void 0 === Dk ? void 0 : Dk.id) && Dk.id !== (null === bk || void 0 === bk ? void 0 : bk.sessionId)) {
          var Pk, mk, Mk, Kk, xk, nk;
          Sk = Fe({
            sessionId: (null === ik || void 0 === ik ? void 0 : ik.reset) ? void 0 : null !== (Pk = null === Dk || void 0 === Dk ? void 0 : Dk.id) && void 0 !== Pk ? Pk : null === (mk = ek.session) || void 0 === mk ? void 0 : mk.id,
            isSampled: xe(this)
          }, this);
          const kk = Sk.sessionId,
            Uk = ik && rk ? null === bk || void 0 === bk || null === (Mk = bk.sessionMeta) || void 0 === Mk ? void 0 : Mk.overrides : void 0,
            Hk = Uk ? Ke(Ke({}, null === (Kk = ek.session) || void 0 === Kk ? void 0 : Kk.overrides), Uk) : null === (xk = ek.session) || void 0 === xk ? void 0 : xk.overrides;
          Sk.sessionMeta = Ke({
            id: kk,
            attributes: Ke({
              isSampled: Sk.isSampled.toString()
            }, null === (nk = ek.session) || void 0 === nk ? void 0 : nk.attributes)
          }, Hk ? {
            overrides: Hk
          } : {}), fk = Ae
        } else {
          var Uk, Hk;
          const kk = null === bk || void 0 === bk ? void 0 : bk.sessionId;
          Sk = Fe({
            sessionId: kk,
            isSampled: bk.isSampled || !1,
            started: null === bk || void 0 === bk ? void 0 : bk.started
          }, this);
          const ik = null === bk || void 0 === bk ? void 0 : bk.sessionMeta,
            Dk = Ke(Ke({}, null === (Uk = ek.session) || void 0 === Uk ? void 0 : Uk.overrides), null === ik || void 0 === ik ? void 0 : ik.overrides);
          Sk.sessionMeta = Ke(Ke({}, ek.session), {}, {
            id: kk,
            attributes: Ke(Ke(Ke({}, null === (Hk = ek.session) || void 0 === Hk ? void 0 : Hk.attributes), null === ik || void 0 === ik ? void 0 : ik.attributes), {}, {
              isSampled: Sk.isSampled.toString()
            }),
            overrides: Dk
          }), fk = je
        }
        var wk;
        if (Dk && (Sk.sessionMeta = Ke(Ke({}, Sk.sessionMeta), {}, {
            attributes: Ke(Ke(Ke({}, null === (wk = Sk.sessionMeta) || void 0 === wk ? void 0 : wk.attributes), Dk.attributes), {}, {
              isSampled: Sk.isSampled.toString()
            })
          }), Dk.overrides)) {
          const kk = (null === ik || void 0 === ik ? void 0 : ik.inheritOverrides) ? Ke(Ke({}, Sk.sessionMeta.overrides), Dk.overrides) : Dk.overrides;
          Object.keys(kk).length > 0 ? Sk.sessionMeta.overrides = kk : delete Sk.sessionMeta.overrides
        }
        return {
          initialSession: Sk,
          lifecycleType: fk
        }
      }
      registerBeforeSendHook(kk) {
        var ek;
        this.beforeSendHook = ek => {
          var ik, Dk;
          const fk = null === (ik = ek.meta.session) || void 0 === ik ? void 0 : ik.id;
          fk && !this.transports.isPaused() && kk(fk);
          const Sk = null === (Dk = ek.meta.session) || void 0 === Dk ? void 0 : Dk.attributes;
          if (Sk && "true" === (null === Sk || void 0 === Sk ? void 0 : Sk.isSampled)) {
            var bk;
            let kk = JSON.parse(JSON.stringify(ek));
            const ik = null === (bk = kk.meta.session) || void 0 === bk ? void 0 : bk.attributes;
            var rk;
            if (null === ik || void 0 === ik || delete ik.isSampled, 0 === Object.keys(null !== ik && void 0 !== ik ? ik : {}).length) null === (rk = kk.meta.session) || void 0 === rk || delete rk.attributes;
            return kk
          }
          return null
        }, null === (ek = this.transports) || void 0 === ek || ek.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var kk;
        this.logDebug("init session instrumentation");
        const ek = document.prerendering;
        var ik;
        if ((null === (kk = this.config.sessionTracking) || void 0 === kk ? void 0 : kk.enabled) && (ek || this.prerenderSession)) return null !== (ik = this.prerenderSession) && void 0 !== ik || (this.prerenderSession = new Be(this.metas, this.transports, (kk => {
          this.prerenderSession = void 0, this.initializeSession(kk)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(kk) {
        const ek = this.config.sessionTracking;
        if (null === ek || void 0 === ek ? void 0 : ek.enabled) {
          var ik, Dk;
          const fk = ce(ek),
            Sk = new fk(this);
          this.isAdoptingSession = Sk.isAdopting, this.registerBeforeSendHook(Sk.recordActivity);
          const {
            initialSession: bk,
            lifecycleType: rk
          } = this.createInitialSession(fk, ek, kk);
          fk.storeUserSession(bk);
          const Pk = bk.sessionMeta;
          this.notifiedSession = Pk, this.api.setSession(Pk), this.captureListener = () => {
            this.transports.isPaused() || Sk.updateSession({
              refreshActivity: !1
            })
          }, null === (ik = (Dk = this.metas).addCaptureListener) || void 0 === ik || ik.call(Dk, this.captureListener), rk === Ae && this.api.pushEvent(Ae, {}, void 0, {
            skipDedupe: !0
          }), rk === je && this.api.pushEvent(je, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var kk, ek, ik;
        (null === (kk = this.prerenderSession) || void 0 === kk || kk.destroy(), this.captureListener) && (null === (ek = (ik = this.metas).removeCaptureListener) || void 0 === ek || ek.call(ik, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Si(kk, ek, ik, Dk) {
      const fk = {
        filename: kk || document.location.href,
        function: ek || "?"
      };
      return void 0 !== ik && (fk.lineno = ik), void 0 !== Dk && (fk.colno = Dk), fk
    }
    const bi = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ri = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Pi = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      mi = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Mi = "safari-extension",
      Ki = "safari-web-extension",
      xi = /Minified React error #\d+;/i;

    function ni(kk, ek) {
      const ik = null === kk || void 0 === kk ? void 0 : kk.includes(Mi),
        Dk = !ik && (null === kk || void 0 === kk ? void 0 : kk.includes("safari-web-extension"));
      return ik || Dk ? [(null === kk || void 0 === kk ? void 0 : kk.includes("@")) ? kk.split("@")[0] : kk, ik ? `${Mi}:${ek}` : `${Ki}:${ek}`] : [kk, ek]
    }
    const Ui = 1024;

    function Hi(kk) {
      let ek = [];
      kk.stacktrace ? ek = kk.stacktrace.split("\n").filter(((kk, ek) => ek % 2 === 0)) : kk.stack && (ek = kk.stack.split("\n"));
      const ik = ek.reduce(((ek, ik, Dk) => {
        if (ik.length > Ui) return ek;
        let fk, Sk, bk, rk, Pk;
        if (fk = bi.exec(ik)) {
          if (Sk = fk[1], bk = fk[2], rk = fk[3], Pk = fk[4], null === bk || void 0 === bk ? void 0 : bk.startsWith("eval")) {
            const kk = ri.exec(bk);
            kk && (bk = kk[1], rk = kk[2], Pk = kk[3])
          }
          bk = (null === bk || void 0 === bk ? void 0 : bk.startsWith("address at ")) ? bk.substring(11) : bk, [Sk, bk] = ni(Sk, bk)
        } else if (fk = Pi.exec(ik)) {
          if (Sk = fk[1], bk = fk[3], rk = fk[4], Pk = fk[5], bk && bk.includes(" > eval")) {
            const kk = mi.exec(bk);
            kk && (Sk = Sk || "eval", bk = kk[1], rk = kk[2])
          } else 0 === Dk && !Pk && Ak(kk.columnNumber) && (Pk = String(kk.columnNumber + 1));
          [Sk, bk] = ni(Sk, bk)
        }
        return (bk || Sk) && ek.push(Si(bk, Sk, rk ? Number(rk) : void 0, Pk ? Number(Pk) : void 0)), ek
      }), []);
      return xi.test(kk.message) ? ik.slice(1) : ik
    }

    function wi(kk) {
      return {
        frames: Hi(kk)
      }
    }
    const li = "http-request-start",
      yi = "http-request-end";
    var Yi = class kk {
      constructor() {
        this.subscribers = []
      }
      subscribe(kk) {
        return this.subscribers.push(kk), {
          unsubscribe: () => this.unsubscribe(kk)
        }
      }
      unsubscribe(kk) {
        this.subscribers = this.subscribers.filter((ek => ek !== kk))
      }
      notify(kk) {
        this.subscribers.forEach((ek => ek(kk)))
      }
      first() {
        const ek = new kk,
          ik = kk => {
            ek.notify(kk), Dk.unsubscribe()
          },
          Dk = this.subscribe(ik),
          fk = ek.unsubscribe.bind(ek);
        return this.withUnsubscribeOverride(ek, fk, ik)
      }
      takeWhile(ek) {
        const ik = new kk,
          Dk = kk => {
            ek(kk) ? ik.notify(kk) : ik.unsubscribe(Dk)
          };
        this.subscribe(Dk);
        const fk = ik.unsubscribe.bind(ik);
        return this.withUnsubscribeOverride(ik, fk, Dk)
      }
      filter(ek) {
        const ik = new kk,
          Dk = kk => {
            ek(kk) && ik.notify(kk)
          };
        this.subscribe(Dk);
        const fk = ik.unsubscribe.bind(ik);
        return this.withUnsubscribeOverride(ik, fk, Dk)
      }
      merge() {
        const ek = new kk,
          ik = [];
        for (var Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
        fk.forEach((kk => {
          const Dk = kk.subscribe((kk => {
            ek.notify(kk)
          }));
          ik.push(Dk)
        }));
        const bk = ek.unsubscribeAll.bind(ek);
        return ek.unsubscribe = () => {
          ik.forEach((kk => kk.unsubscribe())), bk()
        }, ek
      }
      withUnsubscribeOverride(kk, ek, ik) {
        return kk.unsubscribe = kk => {
          ek(kk), this.unsubscribe(ik)
        }, kk
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Li = function(kk) {
      return kk.TRACE = "trace", kk.DEBUG = "debug", kk.INFO = "info", kk.LOG = "log", kk.WARN = "warn", kk.ERROR = "error", kk
    }({});
    const Ci = "log",
      Ai = ["trace", "debug", "info", "log", "warn", "error"];
    let ji, si = !1;
    const di = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      Vi = "Error",
      Fi = kk => kk.map((kk => Vk(kk) ? Ee(kk) : String(kk))).join(" ");

    function ui(kk) {
      let ek, ik, Dk, fk, Sk = [];
      if (ak(kk) && kk.error) ek = kk.error.message, ik = kk.error.name, Sk = Hi(kk.error);
      else if ((Dk = Wk(kk)) || tk(kk)) {
        const {
          name: fk,
          message: Sk
        } = kk;
        ik = null !== fk && void 0 !== fk ? fk : Dk ? "DOMError" : "DOMException", ek = Sk ? `${ik}: ${Sk}` : ik
      } else hk(kk) ? (ik = kk.name, ek = kk.message, Sk = Hi(kk)) : (Vk(kk) || (fk = vk(kk))) && (ik = fk ? kk.constructor.name : void 0, ek = `Non-Error exception captured with keys: ${Object.keys(kk)}`);
      return [ek, ik, Sk]
    }

    function qi(kk) {
      const [ek, ik, Dk, fk, Sk] = kk;
      let bk, rk, Pk = [];
      const mk = Ck(ek),
        Mk = Si(ik, "?", Dk, fk);
      return Sk || !mk ? ([bk, rk, Pk] = ui(null !== Sk && void 0 !== Sk ? Sk : ek), 0 === Pk.length && (Pk = [Mk])) : mk && ([bk, rk] = function(kk) {
        var ek, ik;
        const Dk = kk.match(di),
          fk = null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk[1]) && void 0 !== ek ? ek : Vi;
        return [null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk[2]) && void 0 !== ik ? ik : kk, fk]
      }(ek), Pk = [Mk]), {
        value: bk,
        type: rk,
        stackFrames: Pk
      }
    }

    function Ii(kk, ek) {
      return hk(kk[0]) ? qi(kk) : {
        value: ek(kk)
      }
    }
    const zi = kk => kk.map((kk => {
      try {
        return String(kk)
      } catch (ek) {
        return ""
      }
    })).join(" ");
    var Qi = class kk extends ii {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = Di, this.errorSerializer = zi
      }
      initialize() {
        var ek, ik;
        const Dk = this.config.consoleInstrumentation,
          fk = (null === Dk || void 0 === Dk ? void 0 : Dk.serializeErrors) || !!(null === Dk || void 0 === Dk ? void 0 : Dk.errorSerializer);
        this.errorSerializer = fk ? null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.errorSerializer) && void 0 !== ek ? ek : Fi : zi;
        const Sk = null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk.disabledLevels) && void 0 !== ik ? ik : kk.defaultDisabledLevels,
          bk = function(kk) {
            if (ji || (ji = new Yi), !si) {
              const ek = null !== kk && void 0 !== kk ? kk : ki;
              Ai.forEach((kk => {
                console[kk] = function() {
                  for (var ik, Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
                  ji.notify({
                    type: "console",
                    level: kk,
                    args: fk
                  }), null === (ik = ek[kk]) || void 0 === ik || ik.apply(console, fk)
                }
              })), si = !0
            }
            return ji
          }(this.unpatchedConsole);
        this.subscription = bk.subscribe((ek => {
          let {
            level: ik,
            args: fk
          } = ek;
          if (!Sk.includes(ik)) try {
            if (ik !== Li.ERROR || (null === Dk || void 0 === Dk ? void 0 : Dk.consoleErrorAsLog))
              if (ik === Li.ERROR && (null === Dk || void 0 === Dk ? void 0 : Dk.consoleErrorAsLog)) {
                const {
                  value: ek,
                  type: Dk,
                  stackFrames: Sk
                } = Ii(fk, this.errorSerializer);
                this.api.pushLog(ek ? [kk.consoleErrorPrefix + ek] : fk, {
                  level: ik,
                  context: {
                    value: null !== ek && void 0 !== ek ? ek : "",
                    type: null !== Dk && void 0 !== Dk ? Dk : "",
                    stackFrames: (null === Sk || void 0 === Sk ? void 0 : Sk.length) ? Fi(Sk) : ""
                  }
                })
              } else this.api.pushLog(fk, {
                level: ik
              });
            else {
              const {
                value: ek,
                type: ik,
                stackFrames: Dk
              } = Ii(fk, this.errorSerializer);
              if (ek && !ik && !Dk) return void this.api.pushError(new Error(kk.consoleErrorPrefix + ek));
              this.api.pushError(new Error(kk.consoleErrorPrefix + ek), {
                type: ik,
                stackFrames: Dk
              })
            }
          } catch (bk) {
            this.logError(bk)
          }
        }))
      }
      destroy() {
        var kk;
        null === (kk = this.subscription) || void 0 === kk || kk.unsubscribe(), this.subscription = void 0
      }
    };
    Qi.defaultDisabledLevels = [Li.DEBUG, Li.TRACE, Li.LOG], Qi.consoleErrorPrefix = "console.error: ";
    const vi = [];
    var Ei = class extends ii {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = Di
      }
      initialize() {
        this.logDebug("Initializing"),
          function(kk) {
            const ek = window.onerror;
            window.onerror = function() {
              for (var ik = arguments.length, Dk = new Array(ik), fk = 0; fk < ik; fk++) Dk[fk] = arguments[fk];
              try {
                const {
                  value: ek,
                  type: ik,
                  stackFrames: fk
                } = qi(Dk), Sk = Dk[4];
                if (ek) {
                  const Dk = {
                    type: ik,
                    stackFrames: fk
                  };
                  null != Sk && (Dk.originalError = Sk), kk.pushError(new Error(ek), Dk)
                }
              } finally {
                null === ek || void 0 === ek || ek.apply(window, Dk)
              }
            }
          }(this.api),
          function(kk) {
            const ek = ek => {
              var ik;
              let Dk, fk, Sk = ek;
              if (Sk.reason) Sk = ek.reason;
              else if (null === (ik = ek.detail) || void 0 === ik ? void 0 : ik.reason) {
                var bk;
                Sk = null === (bk = ek.detail) || void 0 === bk ? void 0 : bk.reason
              }
              let rk = [];
              zk(Sk) ? (Dk = `Non-Error promise rejection captured with value: ${String(Sk)}`, fk = "UnhandledRejection") : [Dk, fk, rk] = ui(Sk), Dk && kk.pushError(new Error(Dk), {
                type: fk,
                stackFrames: rk
              })
            };
            window.addEventListener("unhandledrejection", ek), vi.push(ek)
          }(this.api)
      }
    };
    const ai = "unknown";
    var Wi = class extends ii {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = Di, this.waitingForActivation = !1, this.sendViewChangedEvent = kk => {
          var ek;
          if (this.waitingForActivation || document.prerendering) return;
          const ik = kk.view;
          if (ik && ik.name !== (null === (ek = this.notifiedView) || void 0 === ek ? void 0 : ek.name)) {
            var Dk, fk, Sk;
            const kk = null !== (Dk = null === (fk = this.notifiedView) || void 0 === fk ? void 0 : fk.name) && void 0 !== Dk ? Dk : ai;
            this.notifiedView = ik, this.api.pushEvent(Ce, {
              fromView: kk,
              toView: null !== (Sk = ik.name) && void 0 !== Sk ? Sk : ai
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
    class ti {
      t;
      o = 0;
      i = [];
      l(kk) {
        if (kk.hadRecentInput) return;
        const ek = this.i[0],
          ik = this.i.at(-1);
        this.o && ek && ik && kk.startTime - ik.startTime < 1e3 && kk.startTime - ek.startTime < 5e3 ? (this.o += kk.value, this.i.push(kk)) : (this.o = kk.value, this.i = [kk]), this.t?.(kk)
      }
    }
    const Xi = () => {
        const kk = performance.getEntriesByType("navigation")[0];
        if (kk && kk.responseStart > 0 && kk.responseStart < performance.now()) return kk
      },
      Bi = kk => {
        if ("loading" === document.readyState) return "loading";
        const ek = Xi();
        if (ek) {
          if (kk < ek.domInteractive) return "loading";
          if (0 === ek.domContentLoadedEventStart || kk < ek.domContentLoadedEventStart) return "dom-interactive";
          if (0 === ek.domComplete || kk < ek.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      ci = kk => {
        const ek = kk.nodeName;
        return 1 === kk.nodeType ? ek.toLowerCase() : ek.toUpperCase().replace(/^#/, "")
      },
      Ti = kk => {
        let ek = "";
        try {
          for (; 9 !== kk?.nodeType;) {
            const ik = kk,
              Dk = ik.id ? "#" + ik.id : [ci(ik), ...Array.from(ik.classList ?? []).sort()].join(".");
            if (ek.length + Dk.length > 99) return ek || Dk;
            if (ek = ek ? Dk + ">" + ek : Dk, ik.id) break;
            kk = ik.parentNode
          }
        } catch {}
        return ek
      },
      oi = new WeakMap;

    function Zi(kk, ek) {
      let ik = oi.get(ek);
      return ik || (ik = new WeakMap, oi.set(ek, ik)), ik.get(kk) || ik.set(kk, new ek), ik.get(kk)
    }
    let Oi = -1;
    const gi = () => Oi,
      Gi = kk => {
        addEventListener("pageshow", (ek => {
          ek.persisted && (Oi = ek.timeStamp, kk(ek))
        }), !0)
      },
      Ni = (kk, ek, ik, Dk) => {
        let fk, Sk;
        return bk => {
          ek.value >= 0 && (bk || Dk) && (Sk = ek.value - (fk ?? 0), (Sk || void 0 === fk) && (fk = ek.value, ek.delta = Sk, ek.rating = ((kk, ek) => kk > ek[1] ? "poor" : kk > ek[0] ? "needs-improvement" : "good")(ek.value, ik), kk(ek)))
        }
      },
      Ri = kk => {
        requestAnimationFrame((() => requestAnimationFrame((() => kk()))))
      },
      Ji = () => Xi()?.activationStart ?? 0;
    let kD = -1;
    const eD = new Set,
      iD = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      DD = kk => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === kk.type)
            for (const kk of eD) kk();
          isFinite(kD) || (kD = "visibilitychange" === kk.type ? kk.timeStamp : 0, removeEventListener("prerenderingchange", DD, !0))
        }
      },
      fD = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (kD = 1 / 0), kD < 0) {
          const kk = Ji(),
            ek = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((ek => "hidden" === ek.name && ek.startTime >= kk))?.startTime;
          kD = ek ?? iD(), addEventListener("visibilitychange", DD, !0), addEventListener("prerenderingchange", DD, !0), Gi((() => {
            setTimeout((() => {
              kD = iD()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return kD
          },
          onHidden(kk) {
            eD.add(kk)
          }
        }
      },
      SD = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 ? arguments[6] : void 0;
        const rk = Xi(),
          Pk = rk?.navigationId || 0;
        let mk = "navigate";
        return ik ? mk = ik : gi() >= 0 ? mk = "back-forward-cache" : rk && (document.prerendering || Ji() > 0 ? mk = "prerender" : document.wasDiscarded ? mk = "restore" : rk.type && (mk = rk.type.replace(/_/g, "-"))), {
          name: kk,
          value: ek,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: mk,
          navigationId: Dk || Pk,
          navigationInteractionId: fk,
          navigationURL: Sk || rk?.name,
          navigationStartTime: bk || 0
        }
      },
      bD = function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Dk = kk.filter((kk => PerformanceObserver.supportedEntryTypes.includes(kk)));
          if (Dk.length > 0) {
            const kk = new PerformanceObserver((kk => {
              queueMicrotask((() => {
                const ik = kk.getEntries();
                Dk.length > 1 && ik.sort(((kk, ek) => kk.startTime + kk.duration - (ek.startTime + ek.duration))), ek(ik)
              }))
            }));
            for (const ek of Dk) kk.observe({
              type: ek,
              buffered: !0,
              ...ik
            });
            return kk
          }
        } catch {}
      },
      rD = kk => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && kk && kk.reportSoftNavs,
      PD = (kk, ek) => {
        if (kk.set(ek.navigationId, ek), kk.size > 2) {
          const ek = kk.keys().next().value;
          void 0 !== ek && kk.delete(ek)
        }
      },
      mD = kk => {
        let ek = !1;
        return () => {
          ek || (kk(), ek = !0)
        }
      };
    class MD {
      u
    }
    const KD = kk => {
        document.prerendering ? addEventListener("prerenderingchange", kk, !0) : kk()
      },
      xD = [1800, 3e3],
      nD = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ik = rD(ek);
        KD((() => {
          const Dk = Zi(ek, MD),
            fk = fD();
          let Sk, bk = SD("FCP");
          const rk = bD(["paint"], (kk => {
            for (const ek of kk) "first-contentful-paint" === ek.name && (rk.disconnect(), ek.startTime < fk.firstHiddenTime && (bk.value = Math.max(ek.startTime - Ji(), 0), bk.entries.push(ek), bk.navigationId = ek.navigationId || bk.navigationId, Sk(!0)))
          }));
          rk && (Sk = Ni(kk, bk, xD, ek.reportAllChanges), Gi((ik => {
            bk = SD("FCP", -1, "back-forward-cache", bk.navigationId, bk.navigationInteractionId, bk.navigationURL, gi()), Sk = Ni(kk, bk, xD, ek.reportAllChanges), Ri((() => {
              bk.value = performance.now() - ik.timeStamp, Sk(!0)
            }))
          }))), ik && bD(["soft-navigation"], (ik => {
            ik.forEach((ik => {
              Dk.u && ik.navigationId && PD(Dk.u, ik);
              const fk = Math.max((ik.presentationTime || ik.paintTime || 0) - ik.startTime, 0);
              bk = SD("FCP", fk, "soft-navigation", ik.navigationId, ik.interactionId, ik.name, ik.startTime), Sk = Ni(kk, bk, xD, ek.reportAllChanges), Sk(!0)
            }))
          }), ek)
        }))
      },
      UD = [.1, .25],
      HD = kk => kk.find((kk => 1 === kk.node?.nodeType)) || kk[0];
    let wD = 0,
      lD = 1 / 0,
      pD = 0;
    const yD = kk => {
      for (const ek of kk) ek.interactionId && (lD = Math.min(lD, ek.interactionId), pD = Math.max(pD, ek.interactionId), wD = pD ? (pD - lD) / 7 + 1 : 0)
    };
    let YD;
    const LD = () => YD ? wD : performance.interactionCount ?? 0;
    class CD {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return LD() - this.h
      }
      D() {
        this.h = LD(), this.v.length = 0, this.p.clear()
      }
      S(kk) {
        const ek = this.T(),
          ik = Math.min(this.v.length - 1, Math.floor(ek / 50));
        return !ek || -1 !== ik || "soft-navigation" !== kk && "back-forward-cache" !== kk ? this.v[ik] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(kk) {
        if (this.m?.(kk), !kk.interactionId) return;
        const ek = this.v.at(-1);
        let ik = this.p.get(kk.interactionId);
        if (ik || this.v.length < 10 || kk.duration > ek.k) {
          if (ik ? kk.duration > ik.k ? (ik.entries = [kk], ik.k = kk.duration) : kk.duration === ik.k && kk.startTime === ik.entries[0].startTime && ik.entries.push(kk) : (ik = {
              id: kk.interactionId,
              entries: [kk],
              k: kk.duration
            }, this.p.set(ik.id, ik), this.v.push(ik)), this.v.sort(((kk, ek) => ek.k - kk.k)), this.v.length > 10) {
            const kk = this.v.splice(10);
            for (const ek of kk) this.p.delete(ek.id)
          }
          this.M?.(ik)
        }
      }
    }
    const AD = kk => {
        const ek = "requestIdleCallback" in globalThis ? 1e3 : 0,
          ik = globalThis.requestIdleCallback || setTimeout,
          Dk = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) kk();
        else {
          const fk = mD(kk);
          let Sk = -1;
          const bk = () => {
            Dk(Sk), fk()
          };
          addEventListener("visibilitychange", bk, {
            once: !0,
            capture: !0
          }), Sk = ik((() => {
            removeEventListener("visibilitychange", bk, {
              capture: !0
            }), fk()
          }), {
            timeout: ek
          })
        }
      },
      jD = [200, 500],
      sD = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ik = Zi(ek = Object.assign({}, ek), CD);
        let Dk = [],
          fk = [],
          Sk = 0;
        const bk = new WeakMap,
          rk = new WeakMap;
        let Pk = !1;
        const mk = () => {
            Pk || (Pk = !0, AD(Mk))
          },
          Mk = () => {
            const kk = new Set(ik.v.map((kk => bk.get(kk.entries[0])))),
              ek = fk.length - 10;
            fk = fk.filter(((ik, Dk) => Dk >= ek || kk.has(ik)));
            const rk = new Set;
            for (const ik of fk) {
              const kk = Kk(ik.startTime, ik.processingEnd);
              for (const ek of kk) rk.add(ek)
            }
            const mk = Dk.length - 10;
            Dk = Dk.filter(((kk, ek) => rk.has(kk) || ek >= mk && kk.startTime > Sk)), Pk = !1
          };
        ik.m = kk => {
          const ik = kk.startTime + kk.duration;
          let Dk;
          Sk = Math.max(Sk, kk.processingEnd);
          for (let Sk = fk.length - 1; Sk >= 0; Sk--) {
            const bk = fk[Sk];
            if (Math.abs(ik - bk.renderTime) <= 8) {
              Dk = bk, Dk.startTime = Math.min(kk.startTime, Dk.startTime), Dk.processingStart = Math.min(kk.processingStart, Dk.processingStart), Dk.processingEnd = Math.max(kk.processingEnd, Dk.processingEnd), ek.includeProcessedEventEntries && Dk.entries.push(kk);
              break
            }
          }
          Dk || (Dk = {
            startTime: kk.startTime,
            processingStart: kk.processingStart,
            processingEnd: kk.processingEnd,
            renderTime: ik,
            entries: ek.includeProcessedEventEntries ? [kk] : []
          }, fk.push(Dk)), kk.interactionId && bk.set(kk, Dk), mk()
        }, ik.M = kk => {
          if (!rk.get(kk)) {
            const ik = kk.entries.find((kk => kk.target))?.target;
            if (ik) {
              const Dk = ek.generateTarget?.(ik) ?? Ti(ik);
              rk.set(kk, Dk)
            } else {
              const ek = kk.entries.find((kk => kk.targetSelector))?.targetSelector;
              ek && rk.set(kk, ek)
            }
          }
        };
        const Kk = (kk, ek) => {
          const ik = [];
          for (const fk of Dk)
            if (!(fk.startTime + fk.duration < kk)) {
              if (fk.startTime > ek) break;
              ik.push(fk)
            } return ik
        };
        bD(["long-animation-frame"], (kk => {
            Dk = Dk.concat(kk), mk()
          }), ek),
          function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const ik = fD();
            KD((() => {
              "interactionCount" in performance || YD || (YD = bD(["event"], yD, {
                durationThreshold: 0
              }));
              let Dk, fk = SD("INP");
              const Sk = Zi(ek, CD),
                bk = (ik, bk, rk, Pk, mk) => {
                  Sk.D(), fk = SD("INP", -1, ik, bk, rk, Pk, mk), Dk = Ni(kk, fk, jD, ek.reportAllChanges)
                },
                rk = () => {
                  const kk = Sk.S(fk.navigationType);
                  kk && kk.k !== fk.value && (fk.value = kk.k, fk.entries = kk.entries, Dk())
                },
                Pk = kk => {
                  rk(), Dk(!0), bk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime)
                },
                mk = function(kk) {
                  let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  AD((() => {
                    for (const ek of kk) "soft-navigation" !== ek.entryType ? Sk.l(ek) : Pk(ek);
                    rk(), ek && Dk(!0)
                  }))
                },
                Mk = ["event", "first-input"];
              rD(ek) && Mk.push("soft-navigation");
              const Kk = bD(Mk, mk, {
                ...ek,
                durationThreshold: ek.durationThreshold ?? 40
              });
              Dk = Ni(kk, fk, jD, ek.reportAllChanges), Kk && (ik.onHidden((() => {
                mk(Kk.takeRecords(), !0)
              })), Gi((() => {
                bk("back-forward-cache", fk.navigationId, fk.navigationInteractionId, fk.navigationURL, gi())
              })))
            }))
          }((ek => {
            kk((kk => {
              if (0 === kk.entries.length) {
                const ek = kk.navigationStartTime || 0,
                  ik = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: kk.value,
                    loadState: Bi(ek)
                  };
                return Object.assign(kk, {
                  attribution: ik
                })
              }
              const ek = kk.entries[0],
                Dk = bk.get(ek),
                fk = Math.max(Dk.processingStart, ek.startTime),
                Sk = Math.max(ek.startTime + ek.duration, fk),
                Pk = Math.min(Dk.processingEnd, Sk),
                mk = Dk.entries.sort(((kk, ek) => kk.processingStart - ek.processingStart)),
                Mk = Kk(ek.startTime, Pk),
                xk = ik.p.get(ek.interactionId),
                nk = {
                  interactionTarget: rk.get(xk),
                  interactionType: ek.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: ek.startTime,
                  nextPaintTime: Sk,
                  processedEventEntries: mk,
                  longAnimationFrameEntries: Mk,
                  inputDelay: fk - ek.startTime,
                  processingDuration: Pk - fk,
                  presentationDelay: Sk - Pk,
                  loadState: Bi(ek.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (kk => {
                const ek = kk.interactionTime,
                  ik = kk.nextPaintTime;
                if (!kk.longAnimationFrameEntries?.length || !ek || !ik) return;
                const Dk = kk.inputDelay,
                  fk = kk.processingDuration;
                let Sk, bk, rk = 0,
                  Pk = 0,
                  mk = 0,
                  Mk = 0;
                for (const nk of kk.longAnimationFrameEntries) {
                  Pk = Pk + nk.startTime + nk.duration - nk.styleAndLayoutStart;
                  for (const kk of nk.scripts) {
                    const ik = kk.startTime + kk.duration;
                    if (ik < ek) continue;
                    const mk = ik - Math.max(ek, kk.startTime),
                      Kk = kk.duration ? mk / kk.duration * kk.forcedStyleAndLayoutDuration : 0;
                    rk += mk - Kk, Pk += Kk, mk > Mk && (bk = kk.startTime < ek + Dk ? "input-delay" : kk.startTime >= ek + Dk + fk ? "presentation-delay" : "processing-duration", Sk = kk, Mk = mk)
                  }
                }
                const Kk = kk.longAnimationFrameEntries.at(-1),
                  xk = Kk ? Kk.startTime + Kk.duration : 0;
                xk >= ek + Dk + fk && (mk = ik - xk), Sk && bk && (kk.longestScript = {
                  entry: Sk,
                  subpart: bk,
                  intersectingDuration: Mk
                }), kk.totalScriptDuration = rk, kk.totalStyleAndLayoutDuration = Pk, kk.totalPaintDuration = mk, kk.totalUnattributedDuration = ik - ek - rk - Pk - mk
              })(nk), Object.assign(kk, {
                attribution: nk
              })
            })(ek))
          }), ek)
      };
    class dD {
      m;
      u;
      l(kk) {
        this.m?.(kk)
      }
    }
    const VD = [2500, 4e3];
    let FD = 50;
    const uD = [];
    bD(["resource"], (kk => {
      for (const ek of kk) uD.push(ek), uD.length > FD && uD.shift()
    }));
    const qD = [800, 1800],
      ID = kk => {
        document.prerendering ? KD((() => ID(kk))) : "complete" !== document.readyState ? addEventListener("load", (() => ID(kk)), !0) : setTimeout(kk)
      },
      zD = "load_state",
      QD = "time_to_first_byte";
    var vD = class {
        constructor(kk, ek) {
          this.corePushMeasurement = kk, this.webVitalConfig = ek
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var kk;
          ! function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ik = Zi(ek = Object.assign({}, ek), ti),
              Dk = new WeakMap;
            ik.t = kk => {
                if (kk?.sources?.length) {
                  const ik = HD(kk.sources),
                    fk = ik?.node;
                  if (fk) {
                    const kk = ek.generateTarget?.(fk) ?? Ti(fk);
                    Dk.set(ik, kk)
                  }
                }
              },
              function(kk) {
                let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const ik = fD();
                nD(mD((() => {
                  let Dk, fk = SD("CLS", 0);
                  const Sk = Zi(ek, ti),
                    bk = (ik, bk, rk, Pk, mk) => {
                      fk = SD("CLS", 0, ik, bk, rk, Pk, mk), Sk.o = 0, Dk = Ni(kk, fk, UD, ek.reportAllChanges)
                    },
                    rk = function() {
                      let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Sk.o > fk.value && (fk.value = Sk.o, fk.entries = Sk.i), Dk(kk)
                    },
                    Pk = kk => {
                      rk(!0), bk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime)
                    },
                    mk = kk => {
                      for (const ek of kk) "soft-navigation" !== ek.entryType ? Sk.l(ek) : Pk(ek);
                      rk()
                    },
                    Mk = ["layout-shift"];
                  rD(ek) && Mk.push("soft-navigation");
                  const Kk = bD(Mk, mk);
                  Kk && (Dk = Ni(kk, fk, UD, ek.reportAllChanges), ik.onHidden((() => {
                    mk(Kk.takeRecords()), Dk(!0)
                  })), Gi((() => {
                    bk("back-forward-cache", fk.navigationId, fk.navigationInteractionId, fk.navigationURL, gi()), Ri(Dk)
                  })), setTimeout(Dk))
                })))
              }((ek => {
                kk((kk => {
                  let ek = {};
                  if (kk.entries.length) {
                    const ik = kk.entries.reduce(((kk, ek) => kk.value > ek.value ? kk : ek));
                    if (ik?.sources?.length) {
                      const kk = HD(ik.sources);
                      kk && (ek = {
                        largestShiftTarget: Dk.get(kk),
                        largestShiftTime: ik.startTime,
                        largestShiftValue: ik.value,
                        largestShiftSource: kk,
                        largestShiftEntry: ik,
                        loadState: Bi(ik.startTime)
                      })
                    }
                  }
                  return Object.assign(kk, {
                    attribution: ek
                  })
                })(ek))
              }), ek)
          }((kk => {
            const {
              loadState: ek,
              largestShiftValue: ik,
              largestShiftTime: Dk,
              largestShiftTarget: fk
            } = kk.attribution, Sk = this.buildInitialValues(kk);
            this.addIfPresent(Sk, "largest_shift_value", ik), this.addIfPresent(Sk, "largest_shift_time", Dk);
            const bk = this.buildInitialContext(kk);
            this.addIfPresent(bk, zD, ek), this.addIfPresent(bk, "largest_shift_target", fk), this.pushMeasurement(Sk, bk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureFCP() {
          var kk;
          ! function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const ik = Zi(ek = Object.assign({}, ek), MD);
            rD(ek) && (ik.u = new Map), nD((ek => {
              kk((kk => {
                let ek = {
                  timeToFirstByte: 0,
                  firstByteToFCP: kk.value,
                  loadState: Bi(gi())
                };
                if ("soft-navigation" !== kk.navigationType) {
                  if (kk.entries.length) {
                    const ik = Xi(),
                      Dk = kk.entries.at(-1);
                    if (ik) {
                      const fk = ik.responseStart,
                        Sk = ik.activationStart || 0,
                        bk = Math.max(0, fk - Sk);
                      ek = {
                        timeToFirstByte: bk,
                        firstByteToFCP: kk.value - bk,
                        loadState: Bi(kk.entries[0].startTime),
                        navigationEntry: ik,
                        fcpEntry: Dk
                      }
                    }
                  }
                } else {
                  const Dk = ik.u?.get(kk.navigationId);
                  Dk && (ek = {
                    timeToFirstByte: 0,
                    firstByteToFCP: kk.value,
                    loadState: "complete",
                    navigationEntry: Dk
                  })
                }
                return Object.assign(kk, {
                  attribution: ek
                })
              })(ek))
            }), ek)
          }((kk => {
            const {
              firstByteToFCP: ek,
              timeToFirstByte: ik,
              loadState: Dk
            } = kk.attribution, fk = this.buildInitialValues(kk);
            this.addIfPresent(fk, "first_byte_to_fcp", ek), this.addIfPresent(fk, QD, ik);
            const Sk = this.buildInitialContext(kk);
            this.addIfPresent(Sk, zD, Dk), this.pushMeasurement(fk, Sk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureINP() {
          var kk;
          sD((kk => {
            var ek;
            const {
              interactionTime: ik,
              presentationDelay: Dk,
              inputDelay: fk,
              processingDuration: Sk,
              nextPaintTime: bk,
              loadState: rk,
              interactionTarget: Pk,
              interactionType: mk,
              totalScriptDuration: Mk,
              totalStyleAndLayoutDuration: Kk,
              totalPaintDuration: xk,
              totalUnattributedDuration: nk,
              longestScript: Uk
            } = kk.attribution, Hk = this.buildInitialValues(kk);
            this.addIfPresent(Hk, "interaction_time", ik), this.addIfPresent(Hk, "presentation_delay", Dk), this.addIfPresent(Hk, "input_delay", fk), this.addIfPresent(Hk, "processing_duration", Sk), this.addIfPresent(Hk, "next_paint_time", bk), this.addNumberIfDefined(Hk, "total_script_duration", Mk), this.addNumberIfDefined(Hk, "total_style_and_layout_duration", Kk), this.addNumberIfDefined(Hk, "total_paint_duration", xk), this.addNumberIfDefined(Hk, "total_unattributed_duration", nk), this.addNumberIfDefined(Hk, "longest_script_intersecting_duration", null === Uk || void 0 === Uk ? void 0 : Uk.intersectingDuration);
            const wk = this.buildInitialContext(kk);
            this.addIfPresent(wk, zD, rk), this.addIfPresent(wk, "interaction_target", Pk), this.addIfPresent(wk, "interaction_type", mk), this.addIfPresent(wk, "longest_script_subpart", null === Uk || void 0 === Uk ? void 0 : Uk.subpart), this.addIfPresent(wk, "longest_script_invoker_type", null === Uk || void 0 === Uk ? void 0 : Uk.entry.invokerType), (null === (ek = this.webVitalConfig) || void 0 === ek ? void 0 : ek.trackAttributionSources) && (this.addIfPresent(wk, "longest_script_invoker", null === Uk || void 0 === Uk ? void 0 : Uk.entry.invoker), this.addIfPresent(wk, "longest_script_source_url", null === Uk || void 0 === Uk ? void 0 : Uk.entry.sourceURL), this.addIfPresent(wk, "longest_script_source_function_name", null === Uk || void 0 === Uk ? void 0 : Uk.entry.sourceFunctionName), this.addIfPresent(wk, "longest_script_source_char_position", void 0 !== (null === Uk || void 0 === Uk ? void 0 : Uk.entry.sourceCharPosition) ? String(Uk.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Hk, wk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureLCP() {
          var kk;
          ! function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (ek = Object.assign({}, ek)).resourceBufferSize && (FD = ek.resourceBufferSize);
            const ik = Zi(ek, dD),
              Dk = new WeakMap;
            rD(ek) && (ik.u = new Map), ik.m = kk => {
                const ik = kk.element;
                if (ik) {
                  const fk = ek.generateTarget?.(ik) ?? Ti(ik);
                  Dk.set(kk, fk)
                } else kk.id && Dk.set(kk, `#${kk.id}`)
              },
              function(kk) {
                let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  ik = !1;
                const Dk = rD(ek);
                KD((() => {
                  let fk, Sk = fD(),
                    bk = SD("LCP");
                  const rk = Zi(ek, dD),
                    Pk = (Dk, rk, Pk, mk, Mk) => {
                      bk = SD("LCP", -1, Dk, rk, Pk, mk, Mk), fk = Ni(kk, bk, VD, ek.reportAllChanges), ik = !1, "soft-navigation" === Dk && (Sk = fD(!0))
                    },
                    mk = kk => {
                      rk.u && kk.navigationId && PD(rk.u, kk), ik || fk(!0), Pk("soft-navigation", kk.navigationId, kk.interactionId, kk.name, kk.startTime);
                      const ek = kk.getLargestInteractionContentfulPaint?.();
                      ek && Mk([ek])
                    },
                    Mk = kk => {
                      ek.reportAllChanges || Dk || (kk = kk.slice(-1));
                      for (const ek of kk) {
                        if (!ek) continue;
                        if ("soft-navigation" === ek.entryType) {
                          mk(ek);
                          continue
                        }
                        let kk = 0,
                          ik = [],
                          Dk = ek.startTime;
                        if ("largest-contentful-paint" === ek.entryType) kk = Math.max(ek.startTime - Ji(), 0), rk.l(ek), ik = [ek];
                        else if ("interaction-contentful-paint" === ek.entryType) {
                          const fk = ek;
                          if (!bk.navigationId) continue;
                          if ("interactionId" in fk && fk.interactionId != bk.navigationInteractionId) continue;
                          Dk = fk.largestContentfulPaint?.renderTime || 0, kk = Math.max(Dk - ek.startTime, 0), fk.largestContentfulPaint && (rk.l(fk.largestContentfulPaint), ik = [fk.largestContentfulPaint])
                        }
                        Dk < Sk.firstHiddenTime && (bk.value = kk, bk.entries = ik, fk())
                      }
                    },
                    Kk = ["largest-contentful-paint"];
                  Dk && Kk.push("interaction-contentful-paint", "soft-navigation");
                  const xk = bD(Kk, Mk);
                  if (xk) {
                    fk = Ni(kk, bk, VD, ek.reportAllChanges);
                    const Sk = ["keydown", "click", "visibilitychange"],
                      rk = kk => {
                        if (kk.isTrusted && !ik) {
                          const kk = bk.id;
                          AD((() => {
                            if (!ik) {
                              if (!Dk) {
                                xk.disconnect();
                                for (const kk of Sk) removeEventListener(kk, rk, {
                                  capture: !0
                                })
                              }
                              kk === bk.id && (ik = !0, fk(!0))
                            }
                          }))
                        }
                      };
                    for (const kk of Sk) addEventListener(kk, rk, {
                      capture: !0
                    });
                    Gi((Dk => {
                      Pk("back-forward-cache", bk.navigationId, bk.navigationInteractionId, bk.navigationURL, gi()), fk = Ni(kk, bk, VD, ek.reportAllChanges), Ri((() => {
                        bk.value = performance.now() - Dk.timeStamp, ik = !0, fk(!0)
                      }))
                    }))
                  }
                }))
              }((ek => {
                kk((kk => {
                  let ek = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: kk.value
                  };
                  if (kk.entries.length) {
                    const fk = kk.entries.at(-1),
                      Sk = kk => kk.name === fk.url && (kk.requestStart || kk.startTime) <= fk.startTime,
                      bk = fk.url && (uD.findLast(Sk) || performance.getEntriesByType("resource").findLast(Sk));
                    let rk;
                    ek.target = Dk.get(fk), ek.lcpEntry = fk, fk.url && (ek.url = fk.url), bk && (ek.lcpResourceEntry = bk);
                    let Pk = 0,
                      mk = 0;
                    if ("soft-navigation" !== kk.navigationType ? (rk = Xi(), Pk = rk?.activationStart ?? 0, mk = rk?.responseStart ?? 0) : (Pk = kk.navigationStartTime || 0, rk = ik.u?.get(kk.navigationId)), rk) {
                      const ik = Math.max(0, mk - Pk),
                        Dk = Math.max(ik, bk ? (bk.requestStart || bk.startTime) - Pk : 0),
                        fk = Math.min(kk.value, Math.max(Dk, bk ? bk.responseEnd - Pk : 0));
                      ek = {
                        ...ek,
                        timeToFirstByte: ik,
                        resourceLoadDelay: Dk - ik,
                        resourceLoadDuration: fk - Dk,
                        elementRenderDelay: kk.value - fk,
                        navigationEntry: rk
                      }
                    }
                  }
                  return Object.assign(kk, {
                    attribution: ek
                  })
                })(ek))
              }), ek)
          }((kk => {
            var ek;
            const {
              elementRenderDelay: ik,
              resourceLoadDelay: Dk,
              resourceLoadDuration: fk,
              timeToFirstByte: Sk,
              target: bk,
              url: rk,
              lcpResourceEntry: Pk
            } = kk.attribution, mk = this.buildInitialValues(kk);
            this.addIfPresent(mk, "element_render_delay", ik), this.addIfPresent(mk, "resource_load_delay", Dk), this.addIfPresent(mk, "resource_load_duration", fk), this.addIfPresent(mk, QD, Sk);
            const Mk = this.buildInitialContext(kk);
            this.addIfPresent(Mk, "element", bk), (null === (ek = this.webVitalConfig) || void 0 === ek ? void 0 : ek.trackAttributionSources) && (this.addIfPresent(Mk, "resource_url", rk), this.addIfPresent(Mk, "resource_delivery_type", null === Pk || void 0 === Pk ? void 0 : Pk.deliveryType), this.addIfPresent(Mk, "resource_initiator_type", null === Pk || void 0 === Pk ? void 0 : Pk.initiatorType)), this.pushMeasurement(mk, Mk)
          }), {
            reportAllChanges: null === (kk = this.webVitalConfig) || void 0 === kk ? void 0 : kk.reportAllChanges
          })
        }
        measureTTFB() {
          var kk;
          ! function(kk) {
            ! function(kk) {
              let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const ik = rD(ek);
              let Dk = SD("TTFB"),
                fk = Ni(kk, Dk, qD, ek.reportAllChanges);
              ID((() => {
                const Sk = Xi();
                if (Sk) {
                  const bk = Sk.responseStart;
                  Dk.value = Math.max(bk - Ji(), 0), Dk.entries = [Sk], fk(!0), Gi((() => {
                    Dk = SD("TTFB", 0, "back-forward-cache", Dk.navigationId, Dk.navigationInteractionId, Dk.navigationURL, gi()), fk = Ni(kk, Dk, qD, ek.reportAllChanges), fk(!0)
                  })), ik && bD(["soft-navigation"], (ik => {
                    ik.forEach((ik => {
                      ik.navigationId && (Dk = SD("TTFB", 0, "soft-navigation", ik.navigationId, ik.interactionId, ik.name, ik.startTime), Dk.entries = [ik], fk = Ni(kk, Dk, qD, ek.reportAllChanges), fk(!0))
                    }))
                  }), ek)
                }
              }))
            }((ek => {
              kk((kk => {
                const ek = kk.entries[0];
                let ik = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: ek
                };
                if (kk.entries.length && ek instanceof PerformanceNavigationTiming) {
                  const Dk = ek.activationStart || 0,
                    fk = Math.max((ek.workerStart || ek.fetchStart || 0) - Dk, 0),
                    Sk = Math.max(ek.domainLookupStart - Dk, 0),
                    bk = Math.max(ek.connectStart - Dk, 0),
                    rk = Math.max(ek.connectEnd - Dk, 0);
                  ik = {
                    waitingDuration: fk,
                    cacheDuration: Sk - fk,
                    dnsDuration: bk - Sk,
                    connectionDuration: rk - bk,
                    requestDuration: kk.value - rk,
                    navigationEntry: ek
                  }
                }
                return Object.assign(kk, {
                  attribution: ik
                })
              })(ek))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((kk => {
            const {
              dnsDuration: ek,
              connectionDuration: ik,
              requestDuration: Dk,
              waitingDuration: fk,
              cacheDuration: Sk
            } = kk.attribution, bk = this.buildInitialValues(kk);
            this.addIfPresent(bk, "dns_duration", ek), this.addIfPresent(bk, "connection_duration", ik), this.addIfPresent(bk, "request_duration", Dk), this.addIfPresent(bk, "waiting_duration", fk), this.addIfPresent(bk, "cache_duration", Sk);
            const rk = this.buildInitialContext(kk);
            this.pushMeasurement(bk, rk)
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
          var ek;
          const ik = null !== (ek = ee("com.grafana.faro.lastNavigationId", Rk)) && void 0 !== ek ? ek : ai;
          return {
            id: kk.id,
            rating: kk.rating,
            navigation_type: kk.navigationType,
            navigation_entry_id: ik
          }
        }
        pushMeasurement(kk, ek) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: kk
          }, {
            context: ek
          })
        }
        addIfPresent(kk, ek, ik) {
          ik && (kk[ek] = ik)
        }
        addNumberIfDefined(kk, ek, ik) {
          void 0 !== ik && (kk[ek] = ik)
        }
      },
      ED = class extends ii {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = Di
        }
        initialize() {
          this.logDebug("Initializing"), new vD(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const hD = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function aD() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const ek of kk)
        if ("traceparent" === ek.name) {
          if (!hD.test(ek.description)) continue;
          const [, kk, ik] = ek.description.split("-");
          if (null != kk && null != ik) return {
            traceId: kk,
            spanId: ik
          };
          break
        }
    }

    function WD(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: ik,
        monoNow: Dk
      } = ek;
      return Math.min(ik, ik - (Dk - kk))
    }

    function tD(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [ik, Dk] of Object.entries(ek)) {
        const ek = kk[ik];
        return null != ek && (uk(Dk) ? Dk.includes(ek) : ek === Dk)
      }
      return !0
    }

    function XD(kk) {
      const {
        connectEnd: ek,
        connectStart: ik,
        decodedBodySize: Dk,
        domainLookupEnd: fk,
        domainLookupStart: Sk,
        duration: bk,
        encodedBodySize: rk,
        fetchStart: Pk,
        initiatorType: mk,
        name: Mk,
        nextHopProtocol: Kk,
        redirectEnd: xk,
        redirectStart: nk,
        renderBlockingStatus: Uk,
        requestStart: Hk,
        responseEnd: wk,
        responseStart: lk,
        responseStatus: pk,
        secureConnectionStart: yk,
        transferSize: Yk,
        workerStart: Lk
      } = kk;
      return {
        name: Mk,
        httpHost: cD(Mk),
        duration: TD(bk),
        tcpHandshakeTime: TD(ek - ik),
        dnsLookupTime: TD(fk - Sk),
        tlsNegotiationTime: TD(ek - yk),
        responseStatus: TD(pk),
        redirectTime: TD(xk - nk),
        requestTime: TD(lk - Hk),
        responseTime: TD(wk - lk),
        fetchTime: TD(wk - Pk),
        serviceWorkerTime: TD(Lk > 0 ? Pk - Lk : 0),
        decodedBodySize: TD(Dk),
        encodedBodySize: TD(rk),
        cacheHitStatus: function() {
          let kk = "fullLoad";
          0 === Yk ? Dk > 0 && (kk = "cache") : null != pk ? 304 === pk && (kk = "conditionalFetch") : rk > 0 && Yk < rk && (kk = "conditionalFetch");
          return kk
        }(),
        renderBlockingStatus: TD(Uk),
        protocol: Kk,
        initiatorType: mk,
        visibilityState: document.visibilityState,
        ttfb: TD(lk - Hk),
        transferSize: TD(Yk)
      }
    }

    function BD(kk) {
      const {
        activationStart: ek,
        domComplete: ik,
        domContentLoadedEventEnd: Dk,
        domContentLoadedEventStart: fk,
        domInteractive: Sk,
        fetchStart: bk,
        loadEventEnd: rk,
        loadEventStart: Pk,
        responseStart: mk,
        type: Mk
      } = kk, Kk = function() {
        var kk;
        return null != (null === (kk = performance.timing) || void 0 === kk ? void 0 : kk.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Ke(Ke({}, XD(kk)), {}, {
        pageLoadTime: TD(ik - bk),
        documentParsingTime: TD(Kk ? Sk - Kk : null),
        domProcessingTime: TD(ik - Sk),
        domContentLoadHandlerTime: TD(Dk - fk),
        onLoadTime: TD(rk - Pk),
        ttfb: TD(Math.max(mk - (null !== ek && void 0 !== ek ? ek : 0), 0)),
        type: Mk
      })
    }

    function cD(kk) {
      try {
        return new URL(kk).host || ai
      } catch (ek) {
        return ai
      }
    }

    function TD(kk) {
      return null == kk ? ai : "number" === typeof kk ? Math.round(kk > 0 ? kk : 0).toString() : kk.toString()
    }
    const oD = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function ZD(kk, ek, ik, Dk, fk, Sk, bk) {
      try {
        var rk = kk[Sk](bk),
          Pk = rk.value
      } catch (kk) {
        return void ik(kk)
      }
      rk.done ? ek(Pk) : Promise.resolve(Pk).then(Dk, fk)
    }

    function OD(kk) {
      return function() {
        var ek = this,
          ik = arguments;
        return new Promise((function(Dk, fk) {
          var Sk = kk.apply(ek, ik);

          function bk(kk) {
            ZD(Sk, Dk, fk, bk, rk, "next", kk)
          }

          function rk(kk) {
            ZD(Sk, Dk, fk, bk, rk, "throw", kk)
          }
          bk(void 0)
        }))
      }
    }
    const gD = new Yi;
    var GD = class extends ii {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = Di
      }
      initialize() {
        var kk = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let ek = !1;
        const ik = () => {
          ! function(kk) {
            if ("complete" === document.readyState) kk();
            else {
              const ek = () => {
                "complete" === document.readyState && (kk(), document.removeEventListener("readystatechange", ek))
              };
              document.addEventListener("readystatechange", ek)
            }
          }(OD((function*() {
            if (ek) return;
            const ik = kk.api.pushEvent,
              {
                faroNavigationId: Dk
              } = yield function(kk) {
                let ek;
                const ik = new Promise((kk => {
                  ek = kk
                }));
                return new PerformanceObserver((ik => {
                  var Dk;
                  const [fk] = ik.getEntries();
                  if (null == fk || Gk(fk.name)) return;
                  const Sk = fk.toJSON();
                  let bk = aD(null === Sk || void 0 === Sk ? void 0 : Sk.serverTiming);
                  const rk = null !== (Dk = ee("com.grafana.faro.lastNavigationId", Rk)) && void 0 !== Dk ? Dk : ai,
                    Pk = Ke(Ke({}, BD(Sk)), {}, {
                      faroNavigationId: pe(),
                      faroPreviousNavigationId: rk
                    });
                  ie("com.grafana.faro.lastNavigationId", Pk.faroNavigationId, Rk), kk("faro.performance.navigation", Pk, void 0, {
                    spanContext: bk,
                    timestampOverwriteMs: WD(Sk.startTime)
                  }), ek(Pk)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), ik
              }(ik);
            ek || null == Dk || function(kk, ek, ik, Dk) {
              const fk = Dk.trackResources;
              new PerformanceObserver((Dk => {
                const Sk = Dk.getEntries(),
                  bk = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const rk of Sk) {
                  if (Gk(rk.name)) continue;
                  null === ik || void 0 === ik || ik.notify({
                    type: "resource"
                  });
                  const Dk = rk.toJSON();
                  let Sk = aD(null === Dk || void 0 === Dk ? void 0 : Dk.serverTiming);
                  (null == fk && tD(Dk, oD) || fk) && ek("faro.performance.resource", Ke(Ke({}, XD(Dk)), {}, {
                    faroNavigationId: kk,
                    faroResourceId: pe()
                  }), void 0, {
                    spanContext: Sk,
                    timestampOverwriteMs: WD(Dk.startTime, bk)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Dk, ik, gD, kk.config)
          })))
        };
        this.cancelInitialization = () => {
          ek = !0, document.removeEventListener("prerenderingchange", ik)
        }, document.prerendering ? document.addEventListener("prerenderingchange", ik, {
          once: !0
        }) : ik()
      }
      destroy() {
        var kk;
        null === (kk = this.cancelInitialization) || void 0 === kk || kk.call(this), this.cancelInitialization = void 0
      }
    };
    const ND = "data-faro-user-action-name",
      RD = ND.replace(/-name$/, "-timeout"),
      JD = 1e3;

    function kf(kk) {
      return `data-${(kk.startsWith("data-")?kk.slice(5):kk).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function ef(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Te;
      if (void 0 === kk) return ek;
      let Dk = NaN;
      try {
        Dk = "string" === typeof kk && "" === kk.trim() ? NaN : Number(kk)
      } catch (fk) {}
      return !Number.isFinite(Dk) || Dk <= 0 ? (ik(`initialActivityTimeout must be a finite number greater than zero; using ${ek} ms`), ek) : Dk > 1e3 ? (ik(`initialActivityTimeout cannot exceed ${JD} ms; clamping to the maximum`), JD) : Dk
    }

    function Df(kk, ek, ik) {
      return void 0 !== kk && window.clearTimeout(kk), window.setTimeout((() => {
        ek()
      }), ik)
    }

    function ff(kk) {
      return kk.type === yi
    }
    let Sf, bf;

    function rf() {
      return Sf || (Sf = new Yi), bf || (bf = new MutationObserver(((kk, ek) => {
        Sf.notify({
          type: "dom-mutation"
        })
      })), bf.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), Sf
    }
    const Pf = "fetch",
      mf = "xhr";
    let Mf, Kf, xf, nf, Uf = !1;

    function Hf() {
      if (Mf) return Mf;

      function kk(kk) {
        Mf.notify({
          type: li,
          request: kk
        })
      }

      function ek(kk) {
        Mf.notify({
          type: yi,
          request: kk
        })
      }
      return Mf = new Yi, Uf || (! function(kk) {
        let {
          onRequestEnd: ek,
          onRequestStart: ik
        } = kk;
        xf || (xf = window.fetch);
        window.fetch = function() {
          var kk, Dk;
          const fk = null !== (kk = Nk(arguments[0])) && void 0 !== kk ? kk : "",
            Sk = Gk(fk),
            bk = (null !== (Dk = arguments[1]) && void 0 !== Dk ? Dk : {}).method,
            rk = pe();
          return Sk || ik({
            url: fk,
            method: bk,
            requestId: rk,
            apiType: Pf
          }), xf.apply(this, arguments).then((kk => (Sk || ek({
            url: fk,
            method: bk,
            requestId: rk,
            apiType: Pf
          }), kk))).catch((kk => {
            throw Sk || ek({
              url: fk,
              method: bk,
              requestId: rk,
              apiType: Pf
            }), kk
          }))
        }
      }({
        onRequestStart: kk,
        onRequestEnd: ek
      }), function(kk) {
        let {
          onRequestStart: ek,
          onRequestEnd: ik
        } = kk;
        Kf || (Kf = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const kk = arguments[1],
            Dk = Gk(kk),
            fk = arguments[0],
            Sk = pe();
          this.addEventListener("loadstart", (function() {
            Dk || ek({
              url: kk,
              method: fk,
              requestId: Sk,
              apiType: mf
            })
          })), this.addEventListener("load", (function() {
            Dk || ik({
              url: kk,
              method: fk,
              requestId: Sk,
              apiType: mf
            })
          })), this.addEventListener("error", (function() {
            Dk || ik({
              url: kk,
              method: fk,
              requestId: Sk,
              apiType: mf
            })
          })), this.addEventListener("abort", (function() {
            Dk || ik({
              url: kk,
              method: fk,
              requestId: Sk,
              apiType: mf
            })
          })), Kf.apply(this, arguments)
        }
      }({
        onRequestStart: kk,
        onRequestEnd: ek
      }), Uf = !0), Mf
    }
    let wf, lf = !1;
    let pf = function(kk) {
      return kk[kk.Started = 0] = "Started", kk[kk.Halted = 1] = "Halted", kk[kk.Cancelled = 2] = "Cancelled", kk[kk.Ended = 3] = "Ended", kk
    }({});
    var yf = class {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = kk, this.logDebug = ek, this.initialActivityTimeout = ik, this.http = Hf(), this.dom = rf(), this.perf = (nf || (nf = new Yi), lf || (wf = gD.subscribe((kk => {
          "resource" === kk.type && nf.notify({
            type: "resource-entry"
          })
        })), lf = !0), nf), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Yi).merge(this.http, this.dom, this.perf).takeWhile((() => [pf.Started, pf.Halted].includes(this.userAction.getState()))).filter((kk => !!(this.userAction.getState() !== pf.Halted || ff(kk) && this.runningRequests.has(kk.request.requestId)))).subscribe((kk => {
          (function(kk) {
            return kk.type === li
          })(kk) && this.runningRequests.set(kk.request.requestId, kk.request), ff(kk) && this.runningRequests.delete(kk.request.requestId), ff(kk) ? this.userAction.getState() === pf.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((kk => [pf.Ended, pf.Cancelled].includes(kk))).first().subscribe((() => this.cleanup())), this.startupTid = Df(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === pf.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === pf.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = Df(this.haltTid, (() => {
          this.userAction.getState() === pf.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var kk, ek;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (kk = this.allMonitorsSub) || void 0 === kk || kk.unsubscribe(), null === (ek = this.stateSub) || void 0 === ek || ek.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(kk) {
        void 0 !== kk && window.clearTimeout(kk)
      }
    };

    function Yf(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te;
      var ik;
      const {
        api: Dk,
        config: fk,
        internalLogger: Sk
      } = kk, bk = ef(null === (ik = fk.userActionsInstrumentation) || void 0 === ik ? void 0 : ik.initialActivityTimeout, 100, ek);
      return {
        processUserEvent: function(kk) {
          var ek, ik;
          const Sk = null !== (ek = null === (ik = fk.userActionsInstrumentation) || void 0 === ik ? void 0 : ik.dataAttributeName) && void 0 !== ek ? ek : ND,
            bk = kk.target;
          if (!(bk instanceof Element)) return;
          const rk = function(kk, ek) {
              let ik = kk;
              for (; ik;) {
                if (ik.hasAttribute(ek)) return ik;
                ik = ik.parentElement
              }
              return null
            }(bk, kf(Sk)),
            Pk = function(kk, ek) {
              if (!kk) return;
              const ik = function(kk) {
                  return kf(kk).slice(5).replace(/-(.)/g, ((kk, ek) => ek.toUpperCase()))
                }(ek),
                Dk = kk.dataset;
              for (const fk in Dk)
                if (fk === ik) return Dk[fk]
            }(rk, Sk);
          if (!rk || !Pk) return;
          const mk = function(kk, ek) {
            const ik = kk.getAttribute(function(kk) {
              const ek = kf(kk);
              return ek.endsWith("-name") ? `${ek.slice(0,-5)}-timeout` : `${ek}-timeout`
            }(ek));
            return null === ik ? void 0 : Number(ik)
          }(rk, Sk);
          Dk.startUserAction(Pk, {}, {
            triggerName: kk.type,
            initialActivityTimeout: mk
          })
        },
        processUserActionStarted: function(kk, ik) {
          const Dk = kk,
            fk = ef(ik, bk, ek);
          new yf(Dk, Sk.debug, fk).attach()
        }
      }
    }
    const Lf = "user_action_start",
      Cf = {
        Normal: "normal",
        Critical: "critical"
      };
    var Af = class {
        constructor() {
          this.buffer = []
        }
        addItem(kk) {
          this.buffer.push(kk)
        }
        flushBuffer(kk) {
          if (Fk(kk))
            for (const ek of this.buffer) kk(ek);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      jf = class extends Yi {
        constructor(kk) {
          let {
            name: ek,
            parentId: ik,
            trigger: Dk,
            transports: fk,
            attributes: Sk,
            trackUserActionsExcludeItem: bk,
            importance: rk = Cf.Normal,
            pushEvent: Pk
          } = kk;
          super(), this.name = ek, this.attributes = Sk, this.id = pe(), this.trigger = Dk, this.parentId = null !== ik && void 0 !== ik ? ik : this.id, this.trackUserActionsExcludeItem = bk, this.importance = rk, this._pushEvent = Pk, this._itemBuffer = new Af, this._transports = fk, this._state = 0, this._start()
        }
        addItem(kk) {
          return 0 === this._state && (this._itemBuffer.addItem(kk), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = ne(), this._startTimeMono = Ue())
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
          const kk = ne(),
            ek = Ue() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((kk => {
            if (function(kk, ek) {
                return (null === ek || void 0 === ek ? void 0 : ek(kk)) || "measurement" === kk.type && "web-vitals" === kk.payload.type
              }(kk, this.trackUserActionsExcludeItem)) return void this._transports.execute(kk);
            const ek = Je(Je({}, kk), {}, {
              payload: Je(Je({}, kk.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(ek)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Je({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: kk.toString(),
            userActionDuration: ek.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, he(this.attributes)), void 0, {
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
    const sf = new Yi;

    function df(kk, ek) {
      return !!kk && (0 === (null === kk || void 0 === kk ? void 0 : kk.getState()) && (kk.addItem(ek), !0))
    }
    var Vf = class extends ii {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = Di
        }
        initialize() {
          const {
            processUserEvent: kk,
            processUserActionStarted: ek
          } = Yf(Hk, (kk => this.logWarn(kk)));
          this._processUserEvent = kk, this._processKeydown = ek => {
            [" ", "Enter"].includes(ek.key) && kk(ek)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = sf.subscribe((kk => {
            let {
              type: ik,
              userAction: Dk,
              initialActivityTimeout: fk
            } = kk;
            "user_action_start" === ik && ek(Dk, fk)
          }))
        }
        destroy() {
          var kk;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (kk = this._userActionSub) || void 0 === kk || kk.unsubscribe()
        }
      },
      Ff = class extends ii {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = Di, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(kk) {
          const ek = {
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
          this.api.pushEvent("securitypolicyviolation", he(ek))
        }
      };
    var uf = class extends Yi {
      constructor(kk, ek) {
        var ik, Dk, fk, Sk;
        super(), this._tracking = !1, this.eventsObservable = kk, this._options = {
          inactivityMs: null !== (ik = null === ek || void 0 === ek ? void 0 : ek.inactivityMs) && void 0 !== ik ? ik : 100,
          drainTimeoutMs: null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.drainTimeoutMs) && void 0 !== Dk ? Dk : 1e4,
          isOperationStart: null !== (fk = null === ek || void 0 === ek ? void 0 : ek.isOperationStart) && void 0 !== fk ? fk : () => {},
          isOperationEnd: null !== (Sk = null === ek || void 0 === ek ? void 0 : ek.isOperationEnd) && void 0 !== Sk ? Sk : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((kk => {
          var ek;
          this._lastEventTime = Ue(), null === (ek = this._currentEvents) || void 0 === ek || ek.push(kk);
          const ik = this._options.isOperationStart(kk);
          var Dk;
          ik && (null === (Dk = this._activeOperations) || void 0 === Dk || Dk.set(ik, !0));
          const fk = this._options.isOperationEnd(kk);
          var Sk;
          fk && (null === (Sk = this._activeOperations) || void 0 === Sk || Sk.delete(fk));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Ue(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let kk;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), kk = this.hasActiveOperations() ? Ue() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: kk
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = qf(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = qf(this._drainTid, (() => {
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

    function qf(kk, ek, ik) {
      return kk && clearTimeout(kk), kk = setTimeout((() => {
        ek()
      }), ik)
    }
    let If;
    const zf = new Set,
      Qf = new Map;
    let vf, Ef, hf, af, Wf, tf, Xf, Bf, Tf = !1;
    var of = class extends ii {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = Di
      }
      initialize() {
        const kk = Hf(),
          ek = rf(),
          ik = function() {
            function kk(kk, ek) {
              const ik = null !== ek && void 0 !== ek ? ek : location.href;
              ik !== Ef && (vf.notify({
                type: "url-change",
                from: Ef,
                to: ik,
                trigger: kk
              }), Ef = ik)
            }
            if (vf || (vf = new Yi, Ef = location.href), !Tf)
              if ("navigation" in window && "NavigateEvent" in window) {
                Xf = ek => {
                  try {
                    const ik = null === ek || void 0 === ek ? void 0 : ek.destination;
                    (null === ik || void 0 === ik ? void 0 : ik.sameDocument) && "string" === typeof ik.url && kk("navigate", ik.url)
                  } catch (ik) {}
                }, window.navigation.addEventListener("navigate", Xf);
                const ek = window.NavigateEvent;
                ek && ek.prototype && "function" === typeof ek.prototype.intercept && (Bf || (Bf = ek.prototype.intercept), ek.prototype.intercept = function(ek) {
                  try {
                    const ek = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      ik = null === this || void 0 === this ? void 0 : this.destination;
                    ek && ik && !1 === ik.sameDocument && "string" === typeof ik.url && kk("navigate-intercept", ik.url)
                  } catch (ik) {}
                  return Bf.call(this, ek)
                }), Tf = !0
              } else hf || (hf = window.history.pushState), window.history.pushState = function() {
                for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
                const fk = hf.apply(window.history, ik);
                return kk("pushState"), fk
              }, af || (af = window.history.replaceState), window.history.replaceState = function() {
                for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
                const fk = af.apply(window.history, ik);
                return kk("replaceState"), fk
              }, Wf = () => kk("popstate"), tf = () => kk("hashchange"), window.addEventListener("popstate", Wf), window.addEventListener("hashchange", tf), Tf = !0;
            return vf
          }(),
          Dk = (fk = ["pointerdown", "keydown"], If || (If = new Yi), fk.forEach((kk => {
            if (!zf.has(kk)) {
              const ek = () => {
                If.notify({
                  type: "interaction",
                  name: kk
                })
              };
              window.addEventListener(kk, ek), zf.add(kk), Qf.set(kk, ek)
            }
          })), If);
        var fk;
        const Sk = new uf((new Yi).merge(kk, ek, ik), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: kk => function(kk) {
            return kk.type === li
          }(kk) ? kk.request.requestId : void 0,
          isOperationEnd: kk => function(kk) {
            return kk.type === yi
          }(kk) ? kk.request.requestId : void 0
        });
        Sk.filter((kk => "tracking-ended" === kk.message)).subscribe((kk => {
          var ek, ik;
          if ((null === (ek = kk.events) || void 0 === ek ? void 0 : ek.some((kk => "url-change" === kk.type))) && (null === (ik = kk.events) || void 0 === ik ? void 0 : ik.some((kk => "dom-mutation" === kk.type)))) {
            var Dk;
            const ek = null === (Dk = kk.events) || void 0 === Dk ? void 0 : Dk.find((kk => "url-change" === kk.type));
            Hk.api.pushEvent("faro.navigation", {
              fromUrl: null === ek || void 0 === ek ? void 0 : ek.from,
              toUrl: null === ek || void 0 === ek ? void 0 : ek.to,
              sameDocument: String(!0),
              duration: kk.duration
            })
          }
        })), Dk.subscribe((() => {
          Sk.startTracking()
        }))
      }
    };

    function Zf() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ek = [new Vf, new Ei, new ED, new fi, new Wi, new of];
      return !1 !== kk.enablePerformanceInstrumentation && ek.unshift(new GD), !1 !== kk.enableContentSecurityPolicyInstrumentation && ek.push(new Ff), !1 !== kk.captureConsole && ek.push(new Qi), ek
    }
    var Of = ik(6539);
    let gf, Gf;

    function Nf() {
      const kk = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return gf === kk && Gf || (Gf = new Of.UAParser(kk).getResult(), gf = kk), Gf
    }
    const Rf = () => {
        const {
          browser: kk,
          os: ek,
          ua: ik
        } = Nf(), {
          name: Dk,
          version: fk
        } = kk, {
          name: Sk,
          version: bk
        } = ek, rk = navigator.language, Pk = ik.includes("Mobi"), mk = function() {
          if (!Dk || !fk) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Dk && void 0 !== Dk ? Dk : ai,
            version: null !== fk && void 0 !== fk ? fk : ai,
            os: `${null!==Sk&&void 0!==Sk?Sk:ai} ${null!==bk&&void 0!==bk?bk:ai}`,
            userAgent: null !== ik && void 0 !== ik ? ik : ai,
            language: null !== rk && void 0 !== rk ? rk : ai,
            mobile: Pk,
            brands: null !== mk && void 0 !== mk ? mk : ai,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Jf = () => {
        const {
          name: kk,
          version: ek
        } = Nf().os;
        if (!kk && !ek) return {};
        const ik = {};
        return kk && (ik.name = kk), ek && (ik.version = ek), {
          os: ik
        }
      };

    function kS(kk) {
      var ek, ik, Dk;
      return {
        id: null !== (ek = null === (ik = Hk.config) || void 0 === ik || null === (ik = ik.sessionTracking) || void 0 === ik || null === (Dk = ik.generateSessionId) || void 0 === Dk ? void 0 : Dk.call(ik)) && void 0 !== ek ? ek : pe(),
        attributes: kk
      }
    }
    const eS = () => ({
      sdk: {
        name: "faro-web",
        version: Di
      }
    });
    var iS = class extends ei {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let DS = function(kk) {
      return kk.EXCEPTION = "exception", kk.LOG = "log", kk.MEASUREMENT = "measurement", kk.TRACE = "trace", kk.EVENT = "event", kk
    }({});
    const fS = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function SS(kk, ek) {
      var ik, Dk;
      if (void 0 === ek) return kk;
      if (void 0 === kk) return {
        resourceSpans: ek
      };
      const fk = null === (ik = kk.resourceSpans) || void 0 === ik ? void 0 : ik[0];
      if (void 0 === fk) return kk;
      const Sk = (null === fk || void 0 === fk ? void 0 : fk.scopeSpans) || [],
        bk = (null === ek || void 0 === ek || null === (Dk = ek[0]) || void 0 === Dk ? void 0 : Dk.scopeSpans) || [];
      return Je(Je({}, kk), {}, {
        resourceSpans: [Je(Je({}, fk), {}, {
          scopeSpans: [...Sk, ...bk]
        })]
      })
    }

    function bS(kk) {
      let ek = {
        meta: {}
      };
      return void 0 !== kk[0] && (ek.meta = kk[0].meta), kk.forEach((kk => {
        switch (kk.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const ik = fS[kk.type],
              Dk = ek[ik];
            ek = Je(Je({}, ek), {}, {
              [ik]: void 0 === Dk ? [kk.payload] : [...Dk, kk.payload]
            });
            break
          }
          case "trace":
            ek = Je(Je({}, ek), {}, {
              traces: SS(ek.traces, kk.payload.resourceSpans)
            })
        }
      })), ek
    }
    var rS = class extends iS {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-console", this.version = Di
      }
      send(kk) {
        var ek;
        return this.unpatchedConsole[null !== (ek = this.options.level) && void 0 !== ek ? ek : Li.DEBUG]("New event", bS([kk]))
      }
    };
    const PS = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      mS = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      MS = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      KS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      xS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      nS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function US(kk) {
      let {
        weekday: ek,
        day: ik,
        month: Dk,
        year: fk,
        hour: Sk,
        minute: bk,
        second: rk
      } = kk;
      if (fk < 1900 || ik < 1 || Sk > 23 || bk > 59 || rk > 60) return;
      const Pk = 60 === rk,
        mk = new Date(0);
      return mk.setUTCFullYear(fk, Dk, ik), mk.setUTCHours(Sk, bk, Pk ? 59 : rk, 0), mk.getUTCDay() === ek && mk.getUTCDate() === ik && mk.getUTCMonth() === Dk && mk.getUTCFullYear() === fk && mk.getUTCHours() === Sk && mk.getUTCMinutes() === bk && mk.getUTCSeconds() === (Pk ? 59 : rk) ? mk.getTime() + (Pk ? 1e3 : 0) : void 0
    }
    var HS = class {
      constructor(kk) {
        this.options = kk, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var kk = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const ek = this.sequence++;
        let ik = !1;
        return {
          deliver: function() {
            var ik = OD((function*(ik) {
              const Dk = kk.options.getNow();
              let fk, Sk = 0;
              for (;;) {
                var bk, rk, Pk;
                const mk = kk.options.retry.maxAttempts - Sk,
                  Mk = yield kk.runAttempt((() => ik(mk, kk.unloading)), Sk > 0);
                if (Sk += Mk.attemptsMade, "success" === Mk.kind) return {
                  kind: "success",
                  attempts: Sk,
                  elapsedTimeMs: kk.options.getNow() - Dk
                };
                if (fk = Mk.failure, "terminal" === Mk.kind || kk.unloading) return {
                  kind: "terminal",
                  attempts: Sk,
                  elapsedTimeMs: kk.options.getNow() - Dk,
                  failure: fk
                };
                if (Sk >= kk.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Sk,
                  elapsedTimeMs: kk.options.getNow() - Dk,
                  failure: fk,
                  reason: "retries-exhausted"
                };
                if (null != Mk.retryAfterMs && Mk.retryAfterMs > kk.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Sk,
                  elapsedTimeMs: kk.options.getNow() - Dk,
                  failure: fk,
                  reason: "retry-after-too-long"
                };
                const Kk = Math.min(null !== (bk = Mk.retryAfterMs) && void 0 !== bk ? bk : kk.options.retry.initialBackoffMs * Math.pow(kk.options.retry.backoffMultiplier, Sk - 1), kk.options.retry.maxBackoffMs);
                if (null === (rk = (Pk = kk.options).onRetry) || void 0 === rk || rk.call(Pk, Kk, Sk + 1), yield kk.waitForTurn(ek, Kk)) {
                  const ek = kk.options.retry.maxAttempts - Sk,
                    fk = yield kk.runAttempt((() => ik(ek, !0)));
                  return Sk += fk.attemptsMade, {
                    kind: "success" === fk.kind ? "success" : "terminal",
                    attempts: Sk,
                    elapsedTimeMs: kk.options.getNow() - Dk,
                    failure: "success" === fk.kind ? void 0 : fk.failure
                  }
                }
              }
            }));
            return function(kk) {
              return ik.apply(this, arguments)
            }
          }(),
          release: () => {
            ik || (ik = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const kk = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const ek of kk) ek.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((ik, Dk) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const ek = () => {
                this.inProgress--, this.runNextAttempt()
              };
              kk().then((kk => {
                ek(), ik(kk)
              }), (kk => {
                ek(), Dk(kk)
              }))
            },
            isRedelivery: ek
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const kk = this.options.getNow(),
            ek = this.attemptQueue.findIndex((ek => {
              let {
                isRedelivery: ik
              } = ek;
              return this.unloading || !ik || kk >= this.nextSendAt
            }));
          if (ek < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - kk)));
          const [ik] = this.attemptQueue.splice(ek, 1);
          ik.isRedelivery && !this.unloading && (this.nextSendAt = kk + 1), ik.run()
        }
      }
      waitForTurn(kk, ek) {
        const ik = Math.min(ek * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((ek => {
          this.waiting.push({
            sequence: kk,
            readyAt: this.options.getNow() + ik,
            resolve: ek
          }), this.waiting.sort(((kk, ek) => kk.readyAt === ek.readyAt ? kk.sequence - ek.sequence : kk.readyAt - ek.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const kk = this.waiting[0],
          ek = kk.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const ek = this.waiting.indexOf(kk);
          ek >= 0 && this.waiting.splice(ek, 1), kk.resolve(!1), this.scheduleNext()
        }), Math.max(0, ek - this.options.getNow()))
      }
    };

    function wS(kk, ek) {
      if (null == kk) return {};
      var ik, Dk, fk = function(kk, ek) {
        if (null == kk) return {};
        var ik = {};
        for (var Dk in kk)
          if ({}.hasOwnProperty.call(kk, Dk)) {
            if (ek.includes(Dk)) continue;
            ik[Dk] = kk[Dk]
          } return ik
      }(kk, ek);
      if (Object.getOwnPropertySymbols) {
        var Sk = Object.getOwnPropertySymbols(kk);
        for (Dk = 0; Dk < Sk.length; Dk++) ik = Sk[Dk], ek.includes(ik) || {}.propertyIsEnumerable.call(kk, ik) && (fk[ik] = kk[ik])
      }
      return fk
    }

    function lS(kk) {
      const {
        size: ek,
        concurrency: ik
      } = kk, Dk = [];
      let fk = 0;
      const Sk = () => {
        if (fk < ik && Dk.length) {
          const {
            producer: kk,
            resolve: ek,
            reject: ik
          } = Dk.shift();
          fk++, kk().then((kk => {
            fk--, Sk(), ek(kk)
          }), (kk => {
            fk--, Sk(), ik(kk)
          }))
        }
      };
      return {
        add: kk => {
          if (Dk.length + fk >= ek) throw new Error("Task buffer full");
          return new Promise(((ek, ik) => {
            Dk.push({
              producer: kk,
              resolve: ek,
              reject: ik
            }), Sk()
          }))
        }
      }
    }
    const pS = ["headers"],
      yS = ["keepalive", "signal"],
      YS = new Set([408, 425, 429, 500, 502, 503, 504]),
      LS = new Set([429, 503]);
    let CS = 0,
      AS = 0;
    var jS = class extends Error {};
    var sS = class extends iS {
      constructor(kk) {
        var ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk;
        super(), this.options = kk, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = Di, this.pendingCustomSends = 0, this.getNow = null !== (ek = kk.getNow) && void 0 !== ek ? ek : Date.now, this.requestTimeoutMs = null !== (ik = kk.requestTimeoutMs) && void 0 !== ik ? ik : 1e4, this.compressionEnabled = null !== (Dk = kk.requestCompression) && void 0 !== Dk && Dk && "undefined" !== typeof CompressionStream, kk.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new HS({
          bufferSize: null !== (fk = kk.bufferSize) && void 0 !== fk ? fk : 30,
          concurrency: null !== (Sk = kk.concurrency) && void 0 !== Sk ? Sk : 5,
          retry: {
            maxAttempts: null !== (bk = null === (rk = kk.retry) || void 0 === rk ? void 0 : rk.maxAttempts) && void 0 !== bk ? bk : 3,
            initialBackoffMs: null !== (Pk = null !== (mk = null === (Mk = kk.retry) || void 0 === Mk ? void 0 : Mk.initialBackoffMs) && void 0 !== mk ? mk : kk.defaultRateLimitBackoffMs) && void 0 !== Pk ? Pk : 1e3,
            maxBackoffMs: null !== (Kk = null === (xk = kk.retry) || void 0 === xk ? void 0 : xk.maxBackoffMs) && void 0 !== Kk ? Kk : 3e4,
            backoffMultiplier: null !== (nk = null === (Uk = kk.retry) || void 0 === Uk ? void 0 : Uk.backoffMultiplier) && void 0 !== nk ? nk : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Hk = kk.getRandom) && void 0 !== Hk ? Hk : Math.random,
          onRetry: (kk, ek) => {
            this.logDebug(`Retrying failed request after ${kk}ms. Attempt ${ek}.`)
          }
        }), this.customPromiseBuffer = lS({
          size: null !== (wk = kk.bufferSize) && void 0 !== wk ? wk : 30,
          concurrency: null !== (lk = kk.concurrency) && void 0 !== lk ? lk : 5
        }), this.defaultPromiseBuffer = {
          add: kk => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(kk);
            const ek = this.deliveryQueue.reserve();
            if (!ek) throw new Error("Task buffer full");
            return this.runBufferedTask(ek, kk)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (kk => {
          kk.persisted && this.deliveryQueue.resume()
        })))
      }
      send(kk) {
        var ek = this;
        return OD((function*() {
          const ik = ek.promiseBuffer;
          if (ik !== ek.defaultPromiseBuffer || ik.add !== ek.defaultBufferAdd) {
            ek.pendingCustomSends++;
            try {
              yield ik.add((() => ek.deliver(kk)))
            } catch (Dk) {
              ek.logError("Permanent delivery failure", {
                error: Dk,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              ek.pendingCustomSends--
            }
          } else yield ek.deliver(kk)
        }))()
      }
      runBufferedTask(kk, ek) {
        return OD((function*() {
          let ik;
          try {
            return yield kk.deliver(OD((function*() {
              return ik = yield ek(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), ik
          } finally {
            kk.release()
          }
        }))()
      }
      deliver(kk) {
        var ek = this;
        return OD((function*() {
          const ik = ek.deliveryQueue.reserve();
          if (ik) try {
            const Dk = yield ek.prepareRequest(kk), fk = yield ik.deliver(((kk, ik) => ek.performAttempt(Dk, kk, ik)));
            "terminal" === fk.kind && ek.logError("retries-exhausted" === fk.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Ke(Ke({}, fk.failure), {}, {
              reason: fk.reason,
              attempts: fk.attempts,
              elapsedTimeMs: fk.elapsedTimeMs
            }))
          } catch (Dk) {
            ek.logError("Permanent delivery failure", {
              error: Dk,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            ik.release()
          } else ek.logError("Permanent delivery failure", {
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
        var ek = this;
        return OD((function*() {
          var ik, Dk;
          const fk = bS(kk),
            Sk = null === (ik = fk.meta.session) || void 0 === ik ? void 0 : ik.id,
            bk = JSON.stringify(fk),
            rk = null !== (Dk = ek.options.requestOptions) && void 0 !== Dk ? Dk : {},
            {
              headers: Pk = {}
            } = rk,
            mk = wS(rk, pS),
            {
              keepalive: Mk,
              signal: Kk
            } = mk,
            xk = wS(mk, yS),
            nk = {};
          for (const [kk, ek] of Object.entries(Pk)) nk[kk] = "function" === typeof ek ? yield ek(): ek;
          let Uk = bk,
            Hk = function(kk) {
              return "undefined" === typeof TextEncoder ? kk.length : (new TextEncoder).encode(kk).byteLength
            }(bk);
          const wk = {};
          return ek.compressionEnabled && (Uk = yield ek.compress(bk), Hk = Uk.size, wk["Content-Encoding"] = "gzip"), {
            bodySize: Hk,
            sessionId: Sk,
            requestInit: Ke({
              method: "POST",
              headers: Ke(Ke(Ke(Ke(Ke({
                "Content-Type": "application/json"
              }, wk), nk), ek.options.apiKey ? {
                "x-api-key": ek.options.apiKey
              } : {}), Sk ? {
                "x-faro-session-id": Sk
              } : {}), {}, {
                "Idempotency-Key": pe(20)
              }),
              body: Uk
            }, xk)
          }
        }))()
      }
      performAttempt(kk, ek, ik) {
        var Dk = this;
        return OD((function*() {
          var fk;
          const Sk = null === (fk = Dk.options.requestOptions) || void 0 === fk ? void 0 : fk.signal;
          if (null === Sk || void 0 === Sk ? void 0 : Sk.aborted) return {
            kind: "terminal",
            failure: {
              error: Sk.reason
            },
            attemptsMade: 0
          };
          let bk = 0;
          try {
            var rk;
            const fk = yield Dk.fetchWithKeepaliveFallback(kk.requestInit, kk.bodySize, !!ik || (null === (rk = Dk.options.requestOptions) || void 0 === rk ? void 0 : rk.keepalive), ek, (() => bk++));
            if (Dk.handleResponse(fk, kk.sessionId), fk.status >= 200 && fk.status < 300) return {
              kind: "success",
              attemptsMade: bk
            };
            const Sk = {
              status: fk.status
            };
            return !YS.has(fk.status) || ik ? {
              kind: "terminal",
              failure: Sk,
              attemptsMade: bk
            } : {
              kind: "retry",
              failure: Sk,
              attemptsMade: bk,
              retryAfterMs: LS.has(fk.status) ? Dk.getRetryAfterDelayMs(fk) : void 0
            }
          } catch (Pk) {
            const kk = {
              error: Pk
            };
            return (null === Sk || void 0 === Sk ? void 0 : Sk.aborted) || !Dk.isFetchNetworkError(Pk) || ik ? {
              kind: "terminal",
              failure: kk,
              attemptsMade: bk
            } : {
              kind: "retry",
              failure: kk,
              attemptsMade: bk
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(kk, ek, ik, Dk, fk) {
        var Sk = this;
        return OD((function*() {
          const bk = Sk.getNow(),
            rk = Sk.reserveKeepalive(ek, ik);
          try {
            return yield Sk.fetchWithTimeout(Ke(Ke({}, kk), {}, {
              keepalive: rk.keepalive
            }), Sk.requestTimeoutMs, fk)
          } catch (mk) {
            var Pk;
            if (rk.keepalive && Dk > 1 && Sk.isFetchNetworkError(mk) && !(mk instanceof jS) && !(null === (Pk = Sk.options.requestOptions) || void 0 === Pk || null === (Pk = Pk.signal) || void 0 === Pk ? void 0 : Pk.aborted)) {
              Sk.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const ek = Sk.requestTimeoutMs - (Sk.getNow() - bk);
              return Sk.fetchWithTimeout(Ke(Ke({}, kk), {}, {
                keepalive: !1
              }), ek, fk)
            }
            throw mk
          } finally {
            rk.release()
          }
        }))()
      }
      fetchWithTimeout(kk, ek, ik) {
        var Dk = this;
        return OD((function*() {
          var fk;
          const Sk = null === (fk = Dk.options.requestOptions) || void 0 === fk ? void 0 : fk.signal;
          if (Dk.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return ik(), fetch(Dk.options.url, Ke(Ke({}, kk), {}, {
            signal: Sk
          }));
          if (ek <= 0) throw new jS("Request timed out");
          const bk = new AbortController,
            rk = () => bk.abort(null === Sk || void 0 === Sk ? void 0 : Sk.reason);
          null === Sk || void 0 === Sk || Sk.addEventListener("abort", rk, {
            once: !0
          });
          let Pk = !1;
          const mk = setTimeout((() => {
            Pk = !0, bk.abort()
          }), ek);
          try {
            return ik(), yield fetch(Dk.options.url, Ke(Ke({}, kk), {}, {
              signal: bk.signal
            }))
          } catch (Mk) {
            if (Pk && !(null === Sk || void 0 === Sk ? void 0 : Sk.aborted)) throw new jS("Request timed out");
            throw Mk
          } finally {
            clearTimeout(mk), null === Sk || void 0 === Sk || Sk.removeEventListener("abort", rk)
          }
        }))()
      }
      getRetryAfterDelayMs(kk) {
        const ek = kk.headers.get("Retry-After");
        if (!ek) return;
        if (/^\d+$/.test(ek)) {
          const kk = 1e3 * Number(ek);
          return Number.isFinite(kk) ? kk : Number.POSITIVE_INFINITY
        }
        const ik = this.getNow(),
          Dk = function(kk, ek) {
            const ik = PS.exec(kk);
            if (ik) {
              const [, kk, ek, Dk, fk, Sk, bk, rk] = ik;
              return US({
                weekday: KS.indexOf(kk),
                day: Number(ek),
                month: nS.indexOf(Dk),
                year: Number(fk),
                hour: Number(Sk),
                minute: Number(bk),
                second: Number(rk)
              })
            }
            const Dk = mS.exec(kk);
            if (Dk) {
              const [, kk, ik, bk, rk, Pk, mk, Mk] = Dk, Kk = new Date(ek);
              if (Number.isNaN(Kk.getTime())) return;
              const xk = Kk.getUTCFullYear();
              let nk = 100 * Math.floor(xk / 100) + Number(rk);
              nk < xk && (nk += 100);
              const Uk = nS.indexOf(bk),
                Hk = {
                  month: Uk,
                  day: Number(ik),
                  hour: Number(Pk),
                  minute: Number(mk),
                  second: Number(Mk),
                  millisecond: 0
                },
                wk = {
                  month: Kk.getUTCMonth(),
                  day: Kk.getUTCDate(),
                  hour: Kk.getUTCHours(),
                  minute: Kk.getUTCMinutes(),
                  second: Kk.getUTCSeconds(),
                  millisecond: Kk.getUTCMilliseconds()
                };
              return (nk > xk + 50 || nk === xk + 50 && (Sk = wk, ((fk = Hk).month - Sk.month || fk.day - Sk.day || fk.hour - Sk.hour || fk.minute - Sk.minute || fk.second - Sk.second || fk.millisecond - Sk.millisecond) > 0)) && (nk -= 100), US({
                weekday: xS.indexOf(kk),
                day: Number(ik),
                month: Uk,
                year: nk,
                hour: Number(Pk),
                minute: Number(mk),
                second: Number(Mk)
              })
            }
            var fk, Sk;
            const bk = MS.exec(kk);
            if (!bk) return;
            const [, rk, Pk, mk, Mk, Kk, xk, nk, Uk] = bk;
            return US({
              weekday: KS.indexOf(rk),
              day: Number(null !== mk && void 0 !== mk ? mk : Mk),
              month: nS.indexOf(Pk),
              year: Number(Uk),
              hour: Number(Kk),
              minute: Number(xk),
              second: Number(nk)
            })
          }(ek, ik);
        return null == Dk ? void 0 : Math.max(0, Dk - ik)
      }
      reserveKeepalive(kk, ek) {
        if (!1 === ek || kk > 6e4 || CS + kk > 6e4 || AS >= 9) return {
          keepalive: !1,
          release: Te
        };
        CS += kk, AS++;
        let ik = !1;
        return {
          keepalive: !0,
          release: () => {
            ik || (ik = !0, CS -= kk, AS--)
          }
        }
      }
      handleResponse(kk, ek) {
        202 === kk.status && "invalid" === kk.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), ek), kk.text().catch(Te)
      }
      isFetchNetworkError(kk) {
        return kk instanceof TypeError || kk instanceof jS || kk instanceof DOMException && "AbortError" === kk.name
      }
      compress(kk) {
        return OD((function*() {
          const ek = [],
            ik = new ReadableStream({
              start(ek) {
                ek.enqueue((new TextEncoder).encode(kk)), ek.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: kk,
              value: Dk
            } = yield ik.read();
            if (kk) return new Blob(ek);
            ek.push(Dk)
          }
        }))()
      }
      extendFaroSession(kk, ek, ik) {
        var Dk, fk;
        const Sk = kk.sessionTracking;
        if (!(null === Sk || void 0 === Sk ? void 0 : Sk.enabled)) return void ek("Session expired.");
        const {
          fetchUserSession: bk,
          storeUserSession: rk
        } = ce(Sk), Pk = null === (Dk = this.metas.value.session) || void 0 === Dk ? void 0 : Dk.id, mk = null === (fk = bk()) || void 0 === fk ? void 0 : fk.sessionId;
        ik && ik === Pk && ik === mk ? (qe({
          fetchUserSession: bk,
          storeUserSession: rk
        })({
          forceSessionExtend: !0
        }), ek("Session expired; created new session.")) : ek("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const dS = () => {
      const kk = window.k6;
      return {
        k6: Ke({
          isK6Browser: !0
        }, (null === kk || void 0 === kk ? void 0 : kk.testRunId) && {
          testRunId: null === kk || void 0 === kk ? void 0 : kk.testRunId
        })
      }
    };
    let VS, FS;

    function uS() {
      let {
        generatePageId: kk,
        initialPageMeta: ek
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const ik = location.href;
        return Fk(kk) && VS !== ik && (VS = ik, FS = kk(location)), {
          page: Ke(Ke({
            url: ik
          }, FS ? {
            id: FS
          } : {}), ek)
        }
      }
    }

    function qS() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ki,
        ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ik = Ze;
      return ek > 0 && (ik.error = ek >= 1 ? function() {
        for (var ek = arguments.length, Dk = new Array(ek), fk = 0; fk < ek; fk++) Dk[fk] = arguments[fk];
        kk.error(`${ik.prefix}\n`, ...Dk)
      } : Te, ik.warn = ek >= 2 ? function() {
        for (var ek = arguments.length, Dk = new Array(ek), fk = 0; fk < ek; fk++) Dk[fk] = arguments[fk];
        kk.warn(`${ik.prefix}\n`, ...Dk)
      } : Te, ik.info = ek >= 3 ? function() {
        for (var ek = arguments.length, Dk = new Array(ek), fk = 0; fk < ek; fk++) Dk[fk] = arguments[fk];
        kk.info(`${ik.prefix}\n`, ...Dk)
      } : Te, ik.debug = ek >= 4 ? function() {
        for (var ek = arguments.length, Dk = new Array(ek), fk = 0; fk < ek; fk++) Dk[fk] = arguments[fk];
        kk.debug(`${ik.prefix}\n`, ...Dk)
      } : Te), ik
    }
    const IS = "faro",
      zS = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      QS = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function vS(kk) {
      var ek, ik, fk, Sk, bk, rk;
      const Pk = [],
        Mk = qS(kk.unpatchedConsole, kk.internalLoggerLevel);
      kk.transports ? ((kk.url || kk.apiKey) && Mk.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Pk.push(...kk.transports)) : kk.url ? Pk.push(new sS({
        url: kk.url,
        apiKey: kk.apiKey,
        requestCompression: kk.requestCompression
      })) : Mk.error('either "url" or "transports" must be defined');
      const {
        dedupe: Kk = !0,
        eventDomain: xk = Dk,
        globalObjectKey: nk = IS,
        instrumentations: Uk = Zf(),
        internalLoggerLevel: Hk = Oe,
        isolate: wk = !1,
        logArgsSerializer: lk = zi,
        metas: pk = hS(kk),
        paused: yk = !1,
        preventGlobalExposure: Yk = !1,
        unpatchedConsole: Lk = ki,
        url: Ck,
        experimental: Ak
      } = kk, jk = wS(kk, QS), sk = null !== (ek = null === Ak || void 0 === Ak ? void 0 : Ak.trackNavigation) && void 0 !== ek && ek, dk = {
        dataAttributeName: kf(null !== (ik = null === (fk = kk.userActionsInstrumentation) || void 0 === fk ? void 0 : fk.dataAttributeName) && void 0 !== ik ? ik : ND),
        excludeItem: null === (Sk = kk.userActionsInstrumentation) || void 0 === Sk ? void 0 : Sk.excludeItem,
        initialActivityTimeout: ef(null === (bk = kk.userActionsInstrumentation) || void 0 === bk ? void 0 : bk.initialActivityTimeout, 100, (kk => Mk.warn(kk)))
      };
      return Ke(Ke({}, jk), {}, {
        batching: Ke(Ke({}, zS), kk.batching),
        dedupe: Kk,
        globalObjectKey: nk,
        instrumentations: ES(Uk, kk),
        internalLoggerLevel: Hk,
        isolate: wk,
        logArgsSerializer: lk,
        metas: pk,
        parseStacktrace: wi,
        paused: yk,
        preventGlobalExposure: Yk,
        transports: Pk,
        unpatchedConsole: Lk,
        eventDomain: xk,
        ignoreUrls: [...null !== (rk = kk.ignoreUrls) && void 0 !== rk ? rk : [], ...Ck ? [Ck] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Ke(Ke(Ke({}, mk), kk.sessionTracking), aS({
          trackGeolocation: kk.trackGeolocation,
          sessionTracking: kk.sessionTracking
        })),
        userActionsInstrumentation: dk,
        experimental: {
          trackNavigation: sk
        }
      })
    }

    function ES(kk, ek) {
      let {
        experimental: ik
      } = ek;
      var Dk;
      const fk = null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.trackNavigation) && void 0 !== Dk && Dk;
      return kk.filter((kk => !("@grafana/faro-web-sdk:instrumentation-navigation" === kk.name && !fk)))
    }

    function hS(kk) {
      var ek, ik, Dk;
      const {
        page: fk,
        generatePageId: Sk
      } = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.pageTracking) && void 0 !== ek ? ek : {}, bk = [Rf, Jf, uS({
        generatePageId: Sk,
        initialPageMeta: fk
      }), ...null !== (ik = kk.metas) && void 0 !== ik ? ik : [], eS];
      return Vk(null === (Dk = window) || void 0 === Dk ? void 0 : Dk.k6) ? [...bk, dS] : bk
    }

    function aS(kk) {
      let {
        trackGeolocation: ek,
        sessionTracking: ik
      } = kk;
      var Dk;
      const fk = {};
      return sk(ek) && (fk.geoLocationTrackingEnabled = ek), Ok(fk) ? {} : {
        session: Ke(Ke({}, null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.session) && void 0 !== Dk ? Dk : {}), {}, {
          overrides: fk
        })
      }
    }
    const WS = new WeakSet;

    function tS(kk) {
      return WS.add(kk), kk
    }

    function XS(kk, ek) {
      if (kk.capture) return tS(kk.capture(ek));
      const ik = tS(kk.value);
      return null === ek || void 0 === ek || ek(), ik
    }

    function BS(kk) {
      const ek = `__faroBundleId_${kk}`,
        ik = null === Mk || void 0 === Mk ? void 0 : Mk[ek];
      if ("string" === typeof ik && "" !== ik) return ik;
      const Dk = "undefined" !== typeof window ? window[ek] : void 0;
      return "string" === typeof Dk && "" !== Dk ? Dk : void 0
    }

    function cS(kk) {
      var ek, ik;
      const Dk = kk.config.app.name,
        fk = Dk ? function(kk) {
          return null === Mk || void 0 === Mk ? void 0 : Mk[`__faroGitHash_${kk}`]
        }(Dk) : void 0,
        Sk = {
          sdk: {
            version: Di,
            name: "faro"
          },
          app: Je({
            bundleId: Dk && BS(Dk)
          }, void 0 !== fk ? {
            gitHash: fk
          } : {})
        },
        bk = null === (ek = kk.config.sessionTracking) || void 0 === ek ? void 0 : ek.session;
      bk && kk.api.setSession(bk), kk.config.app && (Sk.app = Je(Je({}, kk.config.app), Sk.app)), kk.config.user && (Sk.user = kk.config.user), kk.config.view && (Sk.view = kk.config.view), kk.metas.add(Sk, ...null !== (ik = kk.config.metas) && void 0 !== ik ? ik : [])
    }
    var TS = class {
      constructor(kk, ek) {
        var ik, Dk;
        this.signalBuffer = [], this.itemLimit = null !== (ik = null === ek || void 0 === ek ? void 0 : ek.itemLimit) && void 0 !== ik ? ik : 50, this.sendTimeout = null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.sendTimeout) && void 0 !== Dk ? Dk : 250, this.paused = (null === ek || void 0 === ek ? void 0 : ek.paused) || !1, this.sendFn = kk, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const ek = new Map;
        return kk.forEach((kk => {
          const ik = JSON.stringify(kk.meta);
          let Dk = ek.get(ik);
          Dk = void 0 === Dk ? [kk] : [...Dk, kk], ek.set(ik, Dk)
        })), Array.from(ek.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const kk = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(kk).forEach(this.sendFn)
        } catch (ek) {
          throw this.signalBuffer = [...kk, ...this.signalBuffer], this.trimBufferToLimit(), ek
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function oS(kk, ek, ik, Dk) {
      var fk;
      ek.debug("Initializing transports");
      const Sk = [];
      let bk = [];
      const rk = kk => {
        let ek = kk;
        for (const Dk of bk) {
          const kk = ek.map(Dk).filter(Boolean);
          if (0 === kk.length) return [];
          ek = ZS(kk, ik)
        }
        return ek
      };
      let Pk;
      (null === (fk = ik.batching) || void 0 === fk ? void 0 : fk.enabled) && (Pk = new TS((kk => {
        const ik = rk(kk);
        if (0 !== ik.length)
          for (const Dk of Sk) ek.debug(`Transporting item using ${Dk.name}\n`, ik), Dk.isBatched() && Dk.send(ik)
      }), {
        sendTimeout: ik.batching.sendTimeout,
        itemLimit: ik.batching.itemLimit,
        paused: ik.paused
      }));
      return {
        add: function() {
          ek.debug("Adding transports");
          for (var fk = arguments.length, bk = new Array(fk), rk = 0; rk < fk; rk++) bk[rk] = arguments[rk];
          bk.forEach((fk => {
            ek.debug(`Adding "${fk.name}" transport`), Sk.some((kk => kk === fk)) ? ek.warn(`Transport ${fk.name} is already added`) : (fk.unpatchedConsole = kk, fk.internalLogger = ek, fk.config = ik, fk.metas = Dk, Sk.push(fk))
          }))
        },
        addBeforeSendHooks: function() {
          ek.debug("Adding beforeSendHooks\n", bk);
          for (var kk = arguments.length, ik = new Array(kk), Dk = 0; Dk < kk; Dk++) ik[Dk] = arguments[Dk];
          ik.forEach((kk => {
            kk && bk.push(kk)
          }))
        },
        getBeforeSendHooks: () => [...bk],
        execute: kk => {
          var fk;
          if (!ik.paused && Xe(Dk).shouldCapture()) {
            if (Kk = kk.meta, !WS.has(Kk)) {
              var bk, mk, Mk;
              const ek = null === (bk = Dk.value.session) || void 0 === bk ? void 0 : bk.id,
                fk = XS(Dk);
              if (ik.paused) return;
              const Sk = Je({}, kk.meta);
              (null === (mk = Sk.session) || void 0 === mk ? void 0 : mk.id) === ek && (null === (Mk = fk.session) || void 0 === Mk ? void 0 : Mk.id) !== ek && (void 0 === fk.session ? delete Sk.session : Sk.session = fk.session), kk = Je(Je({}, kk), {}, {
                meta: tS(Sk)
              })
            }
            var Kk;
            (null === (fk = ik.batching) || void 0 === fk ? void 0 : fk.enabled) && (null === Pk || void 0 === Pk || Pk.addItem(kk)), (kk => {
              var Dk;
              if ((null === (Dk = ik.batching) || void 0 === Dk ? void 0 : Dk.enabled) && Sk.every((kk => kk.isBatched()))) return;
              const [fk] = rk([kk]);
              if (void 0 !== fk)
                for (const rk of Sk) {
                  var bk;
                  ek.debug(`Transporting item using ${rk.name}\n`, fk), rk.isBatched() ? (null === (bk = ik.batching) || void 0 === bk ? void 0 : bk.enabled) || rk.send([fk]) : rk.send(fk)
                }
            })(kk)
          }
        },
        isPaused: () => ik.paused,
        pause: () => {
          ek.debug("Pausing transports"), null === Pk || void 0 === Pk || Pk.pause(), ik.paused = !0
        },
        remove: function() {
          ek.debug("Removing transports");
          for (var kk = arguments.length, ik = new Array(kk), Dk = 0; Dk < kk; Dk++) ik[Dk] = arguments[Dk];
          ik.forEach((kk => {
            ek.debug(`Removing "${kk.name}" transport`);
            const ik = Sk.indexOf(kk); - 1 !== ik ? Sk.splice(ik, 1) : ek.warn(`Transport "${kk.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var kk = arguments.length, ik = new Array(kk), Dk = 0; Dk < kk; Dk++) ik[Dk] = arguments[Dk];
          ek.debug("Removing beforeSendHooks"), bk = bk.filter((kk => !ik.includes(kk)))
        },
        get transports() {
          return [...Sk]
        },
        unpause: () => {
          ek.debug("Unpausing transports"), null === Pk || void 0 === Pk || Pk.start(), ik.paused = !1
        }
      }
    }

    function ZS(kk, ek) {
      if (ek.preserveOriginalError)
        for (const ik of kk) "exception" === ik.type && delete ik.payload.originalError;
      return kk
    }
    let OS = ki;

    function gS(kk) {
      var ek;
      return OS = null !== (ek = kk.unpatchedConsole) && void 0 !== ek ? ek : OS, OS
    }
    let GS, NS = Ze;

    function RS(kk, ek) {
      return NS = qS(kk, ek.internalLoggerLevel), NS
    }

    function JS(kk) {
      let {
        internalLogger: ek,
        config: ik,
        metas: Dk,
        transports: fk,
        tracesApi: Sk,
        userActionsApi: bk
      } = kk;
      var rk;
      ek.debug("Initializing exceptions API");
      let Pk = null;
      GS = null !== (rk = ik.parseStacktrace) && void 0 !== rk ? rk : GS;
      const mk = kk => {
          ek.debug("Changing stacktrace parser"), GS = null !== kk && void 0 !== kk ? kk : GS
        },
        {
          ignoreErrors: Mk = [],
          preserveOriginalError: Kk
        } = ik;
      return mk(ik.parseStacktrace), {
        changeStacktraceParser: mk,
        getStacktraceParser: () => GS,
        pushError: function(kk) {
          let {
            skipDedupe: rk,
            stackFrames: mk,
            type: xk,
            context: nk,
            spanContext: Uk,
            timestampOverwriteMs: Hk,
            originalError: wk,
            fingerprint: lk,
            fatal: pk
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(kk, ek) {
              const {
                message: ik,
                name: Dk,
                stack: fk
              } = ek;
              return Sk = kk, bk = ik + " " + Dk + " " + fk, Sk.some((kk => Ck(kk) ? bk.includes(kk) : !!bk.match(kk)));
              var Sk, bk
            }(Mk, null !== wk && void 0 !== wk ? wk : kk)) try {
            var yk, Yk;
            if (!Xe(Dk).shouldCapture()) return;
            const Mk = he(Je(Je({}, function(kk) {
                let ek = kk.cause;
                hk(ek) ? ek = kk.cause.toString() : null !== ek && (Vk(kk.cause) || uk(kk.cause)) ? ek = Ee(kk.cause) : null != ek && (ek = kk.cause.toString());
                return null == ek ? {} : {
                  cause: ek
                }
              }(null !== wk && void 0 !== wk ? wk : kk)), null !== nk && void 0 !== nk ? nk : {})),
              Ck = Je(Je(Je(Je({
                type: xk || kk.name || "Error",
                value: kk.message,
                timestamp: Hk ? we(Hk) : He(),
                trace: Uk ? {
                  trace_id: Uk.traceId,
                  span_id: Uk.spanId
                } : Sk.getTraceContext()
              }, Ok(Mk) ? {} : {
                context: Mk
              }), Kk ? {
                originalError: wk
              } : {}), lk ? {
                fingerprint: lk
              } : {}), void 0 !== pk ? {
                fatal: pk
              } : {});
            mk = null !== (yk = mk) && void 0 !== yk ? yk : kk.stack ? null === GS || void 0 === GS ? void 0 : GS(kk).frames : void 0, (null === mk || void 0 === mk ? void 0 : mk.length) && (Ck.stacktrace = {
              frames: mk
            });
            const Ak = {
              type: Ck.type,
              value: Ck.value,
              stacktrace: Ck.stacktrace,
              context: Ck.context,
              fingerprint: Ck.fingerprint,
              fatal: null !== (Yk = Ck.fatal) && void 0 !== Yk && Yk
            };
            if (!rk && ik.dedupe && !Lk(Pk) && ye(Ak, Pk)) return void ek.debug("Skipping error push because it is the same as the last one\n", Ck);
            const jk = Pk,
              sk = XS(Dk);
            if (Pk !== jk && !rk && ik.dedupe && ye(Ak, Pk)) return;
            Pk = Ak;
            const dk = {
              meta: sk,
              payload: Ck,
              type: "exception"
            };
            ek.debug("Pushing exception\n", dk), df(bk.getActiveUserAction(), dk) || fk.execute(dk)
          } catch (Ak) {
            ek.error("Error pushing event", Ak)
          }
        }
      }
    }

    function kb(kk, ek, ik, Dk, fk) {
      ek.debug("Initializing API");
      let Sk = null;
      const bk = function(kk) {
          let {
            transports: ek,
            internalLogger: ik,
            config: Dk,
            pushEvent: fk
          } = kk;
          var Sk;
          const bk = null === (Sk = Dk.userActionsInstrumentation) || void 0 === Sk ? void 0 : Sk.excludeItem;
          let rk;
          const Pk = () => rk;
          return {
            startUserAction: (kk, Dk, Sk) => {
              if (void 0 === Pk()) {
                const ik = new jf({
                  name: kk,
                  transports: ek,
                  attributes: Dk,
                  trigger: (null === Sk || void 0 === Sk ? void 0 : Sk.triggerName) || "faroApiCall",
                  importance: (null === Sk || void 0 === Sk ? void 0 : Sk.importance) || Cf.Normal,
                  trackUserActionsExcludeItem: bk,
                  pushEvent: fk
                });
                return ik.filter((kk => [3, 2].includes(kk))).first().subscribe((() => {
                  rk = void 0
                })), sf.notify({
                  type: Lf,
                  userAction: ik,
                  initialActivityTimeout: null === Sk || void 0 === Sk ? void 0 : Sk.initialActivityTimeout
                }), rk = ik, rk
              }
              ik.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Pk
          }
        }({
          transports: fk,
          config: ik,
          internalLogger: ek,
          pushEvent: (kk, ik, Dk, fk) => {
            Sk ? Sk(kk, ik, Dk, fk) : ek.warn("pushEventImpl is not initialized. Event dropped:", {
              name: kk,
              attributes: ik,
              domain: Dk,
              options: fk
            })
          }
        }),
        rk = function(kk, ek, ik, Dk, fk) {
          let Sk;
          return ek.debug("Initializing traces API"), {
            getOTEL: () => Sk,
            getTraceContext: () => {
              const kk = null === Sk || void 0 === Sk ? void 0 : Sk.trace.getSpanContext(Sk.context.active());
              return kk ? {
                trace_id: kk.traceId,
                span_id: kk.spanId
              } : void 0
            },
            initOTEL: (kk, ik) => {
              ek.debug("Initializing OpenTelemetry"), Sk = {
                trace: kk,
                context: ik
              }
            },
            isOTELInitialized: () => !!Sk,
            pushTraces: kk => {
              try {
                if (!Xe(Dk).shouldCapture()) return;
                const ik = {
                  type: "trace",
                  payload: kk,
                  meta: XS(Dk)
                };
                ek.debug("Pushing trace\n", ik), fk.execute(ik)
              } catch (ik) {
                ek.error("Error pushing trace\n", ik)
              }
            }
          }
        }(0, ek, 0, Dk, fk),
        Pk = {
          unpatchedConsole: kk,
          internalLogger: ek,
          userActionsApi: bk,
          config: ik,
          metas: Dk,
          transports: fk,
          tracesApi: rk
        },
        mk = function(kk) {
          let {
            internalLogger: ek,
            config: ik,
            metas: Dk,
            transports: fk,
            tracesApi: Sk,
            userActionsApi: bk
          } = kk, rk = null;
          return {
            pushEvent: function(kk, Pk, mk) {
              let {
                skipDedupe: Mk,
                spanContext: Kk,
                timestampOverwriteMs: xk,
                customPayloadTransformer: nk = kk => kk
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Xe(Dk).shouldCapture()) return;
                const Uk = he(Pk),
                  Hk = nk({
                    name: kk,
                    domain: null !== mk && void 0 !== mk ? mk : ik.eventDomain,
                    attributes: Ok(Uk) ? void 0 : Uk,
                    timestamp: xk ? we(xk) : He(),
                    trace: Kk ? {
                      trace_id: Kk.traceId,
                      span_id: Kk.spanId
                    } : Sk.getTraceContext()
                  }),
                  wk = {
                    name: Hk.name,
                    attributes: Hk.attributes,
                    domain: Hk.domain
                  };
                if (!Mk && ik.dedupe && !Lk(rk) && ye(wk, rk)) return void ek.debug("Skipping event push because it is the same as the last one\n", Hk);
                const lk = rk,
                  pk = XS(Dk);
                if (rk !== lk && !Mk && ik.dedupe && ye(wk, rk)) return;
                rk = wk;
                const yk = {
                  meta: pk,
                  payload: Hk,
                  type: "event"
                };
                ek.debug("Pushing event\n", yk), df(bk.getActiveUserAction(), yk) || fk.execute(yk)
              } catch (Uk) {
                ek.error("Error pushing event", Uk)
              }
            }
          }
        }(Pk);
      return Sk = mk.pushEvent, Je(Je(Je(Je(Je(Je(Je({}, rk), JS(Pk)), function(kk) {
        let ek, ik, Dk, fk, {
          internalLogger: Sk,
          metas: bk
        } = kk;
        Sk.debug("Initializing meta API");
        const rk = kk => {
            ik && bk.remove(ik), ik = {
              user: kk
            }, bk.add(ik)
          },
          Pk = (kk, ik) => {
            var Dk;
            const fk = null === ik || void 0 === ik ? void 0 : ik.overrides,
              Sk = fk ? {
                overrides: Je(Je({}, null === ek || void 0 === ek || null === (Dk = ek.session) || void 0 === Dk ? void 0 : Dk.overrides), fk)
              } : {};
            ek && bk.remove(ek), ek = {
              session: Je(Je({}, Ok(kk) ? void 0 : kk), Sk)
            }, bk.add(ek)
          },
          mk = (kk, ek) => {
            Xe(bk).notifySessionUpdate({
              type: "replace",
              session: kk,
              overrides: null === ek || void 0 === ek ? void 0 : ek.overrides
            }), Pk(kk, ek)
          },
          Mk = () => bk.value.session,
          Kk = () => bk.value.page;
        return {
          setUser: rk,
          resetUser: rk,
          setSession: mk,
          resetSession: mk,
          getSession: Mk,
          setView: (kk, ek) => {
            var ik;
            if ((null === ek || void 0 === ek ? void 0 : ek.overrides) && (Xe(bk).notifySessionUpdate({
                type: "overrides",
                overrides: ek.overrides
              }), Pk(Mk(), {
                overrides: ek.overrides
              })), (null === Dk || void 0 === Dk || null === (ik = Dk.view) || void 0 === ik ? void 0 : ik.name) === (null === kk || void 0 === kk ? void 0 : kk.name)) return;
            const fk = Dk;
            Dk = {
              view: kk
            }, bk.add(Dk), fk && bk.remove(fk)
          },
          getView: () => bk.value.view,
          setPage: kk => {
            var ek;
            const ik = Ck(kk) ? Je(Je({}, null !== (ek = null === fk || void 0 === fk ? void 0 : fk.page) && void 0 !== ek ? ek : Kk()), {}, {
              id: kk
            }) : kk;
            fk && bk.remove(fk), fk = {
              page: ik
            }, bk.add(fk)
          },
          getPage: Kk
        }
      }(Pk)), function(kk) {
        let {
          internalLogger: ek,
          config: ik,
          metas: Dk,
          transports: fk,
          tracesApi: Sk,
          userActionsApi: bk
        } = kk;
        var rk;
        ek.debug("Initializing logs API");
        let Pk = null;
        const mk = null !== (rk = ik.logArgsSerializer) && void 0 !== rk ? rk : zi;
        return {
          pushLog: function(kk) {
            let {
              context: rk,
              level: Mk,
              skipDedupe: Kk,
              spanContext: xk,
              timestampOverwriteMs: nk
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Xe(Dk).shouldCapture()) return;
              const Uk = he(rk),
                Hk = {
                  message: mk(kk),
                  level: null !== Mk && void 0 !== Mk ? Mk : "log",
                  context: Ok(Uk) ? void 0 : Uk,
                  timestamp: nk ? we(nk) : He(),
                  trace: xk ? {
                    trace_id: xk.traceId,
                    span_id: xk.spanId
                  } : Sk.getTraceContext()
                },
                wk = {
                  message: Hk.message,
                  level: Hk.level,
                  context: Hk.context
                };
              if (!Kk && ik.dedupe && !Lk(Pk) && ye(wk, Pk)) return void ek.debug("Skipping log push because it is the same as the last one\n", Hk);
              const lk = Pk,
                pk = XS(Dk);
              if (Pk !== lk && !Kk && ik.dedupe && ye(wk, Pk)) return;
              Pk = wk;
              const yk = {
                type: "log",
                payload: Hk,
                meta: pk
              };
              ek.debug("Pushing log\n", yk), df(bk.getActiveUserAction(), yk) || fk.execute(yk)
            } catch (Uk) {
              ek.error("Error pushing log\n", Uk)
            }
          }
        }
      }(Pk)), function(kk) {
        let {
          internalLogger: ek,
          config: ik,
          metas: Dk,
          transports: fk,
          tracesApi: Sk,
          userActionsApi: bk
        } = kk;
        ek.debug("Initializing measurements API");
        let rk = null;
        return {
          pushMeasurement: function(kk) {
            let {
              skipDedupe: Pk,
              context: mk,
              spanContext: Mk,
              timestampOverwriteMs: Kk
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Xe(Dk).shouldCapture()) return;
              const xk = he(mk),
                nk = Je(Je({}, kk), {}, {
                  trace: Mk ? {
                    trace_id: Mk.traceId,
                    span_id: Mk.spanId
                  } : Sk.getTraceContext(),
                  timestamp: Kk ? we(Kk) : He(),
                  context: Ok(xk) ? void 0 : xk
                }),
                Uk = {
                  type: nk.type,
                  values: nk.values,
                  context: nk.context
                };
              if (!Pk && ik.dedupe && !Lk(rk) && ye(Uk, rk)) return void ek.debug("Skipping measurement push because it is the same as the last one\n", nk);
              const Hk = rk,
                wk = XS(Dk);
              if (rk !== Hk && !Pk && ik.dedupe && ye(Uk, rk)) return;
              rk = Uk;
              const lk = {
                type: "measurement",
                payload: nk,
                meta: wk
              };
              ek.debug("Pushing measurement\n", lk), df(bk.getActiveUserAction(), lk) || fk.execute(lk)
            } catch (xk) {
              ek.error("Error pushing measurement\n", xk)
            }
          }
        }
      }(Pk)), mk), bk)
    }

    function eb(kk) {
      const ek = gS(kk),
        ik = RS(ek, kk);
      if (Uk() && !kk.isolate) return void ik.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      ik.debug("Initializing");
      const Dk = function(kk, ek) {
          let ik, Dk = [],
            fk = [],
            Sk = [],
            bk = 0,
            rk = 0;
          const Pk = () => Dk.reduce(((kk, ek) => Object.assign(kk, Fk(ek) ? ek() : ek)), {}),
            mk = () => {
              if (fk.length) {
                const kk = Pk();
                fk.forEach((ek => ek(kk)))
              }
            };
          return {
            add: function() {
              for (var kk = arguments.length, ik = new Array(kk), fk = 0; fk < kk; fk++) ik[fk] = arguments[fk];
              ek.debug("Adding metas\n", ik), Dk.push(...ik), mk()
            },
            remove: function() {
              for (var kk = arguments.length, ik = new Array(kk), fk = 0; fk < kk; fk++) ik[fk] = arguments[fk];
              ek.debug("Removing metas\n", ik), Dk = Dk.filter((kk => !ik.includes(kk))), mk()
            },
            addListener: kk => {
              ek.debug("Adding metas listener\n", kk), fk.push(kk)
            },
            removeListener: kk => {
              ek.debug("Removing metas listener\n", kk), fk = fk.filter((ek => ek !== kk))
            },
            capture: kk => {
              var ek;
              const Dk = void 0 !== ik,
                fk = null !== (ek = ik) && void 0 !== ek ? ek : Sk;
              Dk || (ik = fk, bk = 0, rk = fk.length);
              try {
                for (; bk < rk;) {
                  const kk = fk[bk++];
                  null === kk || void 0 === kk || kk()
                }
                const ek = tS(Pk());
                return null === kk || void 0 === kk || kk(), ek
              } finally {
                Dk || (ik = void 0)
              }
            },
            addCaptureListener: kk => {
              Sk.push(kk)
            },
            removeCaptureListener: kk => {
              Sk = Sk.filter((ek => ek !== kk))
            },
            get value() {
              return Pk()
            }
          }
        }(0, ik),
        fk = oS(ek, ik, kk, Dk),
        Sk = kb(ek, ik, kk, Dk, fk),
        bk = function(kk, ek, ik, Dk, fk, Sk) {
          ek.debug("Initializing instrumentations");
          const bk = [];
          return {
            add: function() {
              ek.debug("Adding instrumentations");
              for (var rk = arguments.length, Pk = new Array(rk), mk = 0; mk < rk; mk++) Pk[mk] = arguments[mk];
              Pk.forEach((rk => {
                ek.debug(`Adding "${rk.name}" instrumentation`), bk.some((kk => kk.name === rk.name)) ? ek.warn(`Instrumentation ${rk.name} is already added`) : (rk.unpatchedConsole = kk, rk.internalLogger = ek, rk.config = ik, rk.metas = Dk, rk.transports = fk, rk.api = Sk, bk.push(rk), rk.initialize())
              }))
            },
            get instrumentations() {
              return [...bk]
            },
            remove: function() {
              ek.debug("Removing instrumentations");
              for (var kk = arguments.length, ik = new Array(kk), Dk = 0; Dk < kk; Dk++) ik[Dk] = arguments[Dk];
              ik.forEach((kk => {
                var ik, Dk;
                ek.debug(`Removing "${kk.name}" instrumentation`);
                const fk = bk.reduce(((ek, ik, Dk) => null === ek && ik.name === kk.name ? Dk : null), null);
                null !== fk ? (null === (ik = (Dk = bk[fk]).destroy) || void 0 === ik || ik.call(Dk), bk.splice(fk, 1)) : ek.warn(`Instrumentation "${kk.name}" is not added`)
              }))
            }
          }
        }(ek, ik, kk, Dk, fk, Sk),
        rk = wk(ek, ik, kk, Dk, fk, Sk, bk);
      return cS(rk),
        function(kk) {
          kk.transports.add(...kk.config.transports), kk.transports.addBeforeSendHooks(kk.config.beforeSend)
        }(rk),
        function(kk) {
          kk.instrumentations.add(...kk.config.instrumentations)
        }(rk), rk
    }

    function ib(kk) {
      const ek = vS(kk);
      if (ek) return eb(ek)
    }
  },
  6539: function(kk, ek, ik) {
    var Dk;
    ! function(fk, Sk) {
      var bk = "function",
        rk = "undefined",
        Pk = "object",
        mk = "string",
        Mk = "major",
        Kk = "model",
        xk = "name",
        nk = "type",
        Uk = "vendor",
        Hk = "version",
        wk = "architecture",
        lk = "console",
        pk = "mobile",
        yk = "tablet",
        Yk = "smarttv",
        Lk = "wearable",
        Ck = "embedded",
        Ak = "Amazon",
        jk = "Apple",
        sk = "ASUS",
        dk = "BlackBerry",
        Vk = "Browser",
        Fk = "Chrome",
        uk = "Firefox",
        qk = "Google",
        Ik = "Honor",
        zk = "Huawei",
        Qk = "LG",
        vk = "Microsoft",
        Ek = "Motorola",
        hk = "Nvidia",
        ak = "OnePlus",
        Wk = "Opera",
        tk = "OPPO",
        Xk = "Samsung",
        Bk = "Sharp",
        ck = "Sony",
        Tk = "Xiaomi",
        Zk = "Zebra",
        Ok = "Facebook",
        gk = "Chromium OS",
        Gk = "Mac OS",
        Nk = " Browser",
        Rk = function(kk) {
          for (var ek = {}, ik = 0; ik < kk.length; ik++) ek[kk[ik].toUpperCase()] = kk[ik];
          return ek
        },
        Jk = function(kk, ek) {
          return typeof kk === mk && -1 !== ke(ek).indexOf(ke(kk))
        },
        ke = function(kk) {
          return kk.toLowerCase()
        },
        ee = function(kk, ek) {
          if (typeof kk === mk) return kk = kk.replace(/^\s\s*/, ""), typeof ek === rk ? kk : kk.substring(0, 500)
        },
        ie = function(kk, ek) {
          for (var ik, Dk, fk, rk, mk, Mk, Kk = 0; Kk < ek.length && !mk;) {
            var xk = ek[Kk],
              nk = ek[Kk + 1];
            for (ik = Dk = 0; ik < xk.length && !mk && xk[ik];)
              if (mk = xk[ik++].exec(kk))
                for (fk = 0; fk < nk.length; fk++) Mk = mk[++Dk], typeof(rk = nk[fk]) === Pk && rk.length > 0 ? 2 === rk.length ? typeof rk[1] == bk ? this[rk[0]] = rk[1].call(this, Mk) : this[rk[0]] = rk[1] : 3 === rk.length ? typeof rk[1] !== bk || rk[1].exec && rk[1].test ? this[rk[0]] = Mk ? Mk.replace(rk[1], rk[2]) : Sk : this[rk[0]] = Mk ? rk[1].call(this, Mk, rk[2]) : Sk : 4 === rk.length && (this[rk[0]] = Mk ? rk[3].call(this, Mk.replace(rk[1], rk[2])) : Sk) : this[rk] = Mk || Sk;
            Kk += 2
          }
        },
        De = function(kk, ek) {
          for (var ik in ek)
            if (typeof ek[ik] === Pk && ek[ik].length > 0) {
              for (var Dk = 0; Dk < ek[ik].length; Dk++)
                if (Jk(ek[ik][Dk], kk)) return "?" === ik ? Sk : ik
            } else if (Jk(ek[ik], kk)) return "?" === ik ? Sk : ik;
          return ek.hasOwnProperty("*") ? ek["*"] : kk
        },
        fe = {
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
        Se = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Hk, [xk, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Hk, [xk, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [xk, Hk],
            [/opios[\/ ]+([\w\.]+)/i],
            [Hk, [xk, Wk + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Hk, [xk, Wk + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Hk, [xk, Wk]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Hk, [xk, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Hk, [xk, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [xk, Hk],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Hk, [xk, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Hk, [xk, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Hk, [xk, "UC" + Vk]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Hk, [xk, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Hk, [xk, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Hk, [xk, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Hk, [xk, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Hk, [xk, "Smart Lenovo " + Vk]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [xk, /(.+)/, "$1 Secure " + Vk], Hk
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Hk, [xk, uk + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Hk, [xk, Wk + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Hk, [xk, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Hk, [xk, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Hk, [xk, Wk + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Hk, [xk, "MIUI" + Nk]],
            [/fxios\/([\w\.-]+)/i],
            [Hk, [xk, uk]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Hk, [xk, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [xk, /(.+)/, "$1Browser"], Hk
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [xk, /(.+)/, "$1" + Nk], Hk
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Hk, [xk, Xk + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Hk, [xk, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [xk, "Sogou Mobile"], Hk
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [xk, Hk],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [xk],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Hk, xk],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [xk, Ok], Hk
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [xk, Hk],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Hk, [xk, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Hk, [xk, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Hk, [xk, Fk + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [xk, Fk + " WebView"], Hk
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Hk, [xk, "Android " + Vk]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [xk, Hk],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Hk, [xk, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Hk, xk],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [xk, [Hk, De, {
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
            [xk, Hk],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [xk, "Netscape"], Hk
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [xk, Hk],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Hk, [xk, uk + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [xk, [Hk, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [xk, [Hk, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [wk, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [wk, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [wk, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [wk, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [wk, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [wk, /ower/, "", ke]
            ],
            [/ sun4\w[;\)]/i],
            [
              [wk, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [wk, ke]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Kk, [Uk, Xk],
              [nk, yk]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Kk, [Uk, Xk],
              [nk, pk]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Kk, [Uk, jk],
              [nk, pk]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Kk, [Uk, jk],
              [nk, yk]
            ],
            [/(macintosh);/i],
            [Kk, [Uk, jk]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Kk, [Uk, Bk],
              [nk, pk]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Kk, [Uk, Ik],
              [nk, yk]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Kk, [Uk, Ik],
              [nk, pk]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Kk, [Uk, zk],
              [nk, yk]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Kk, [Uk, zk],
              [nk, pk]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Kk, /_/g, " "],
              [Uk, Tk],
              [nk, yk]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Kk, /_/g, " "],
              [Uk, Tk],
              [nk, pk]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Kk, [Uk, tk],
              [nk, pk]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Kk, [Uk, De, {
                OnePlus: ["304", "403", "203"],
                "*": tk
              }],
              [nk, yk]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Kk, [Uk, "Vivo"],
              [nk, pk]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Kk, [Uk, "Realme"],
              [nk, pk]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Kk, [Uk, Ek],
              [nk, pk]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Kk, [Uk, Ek],
              [nk, yk]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Kk, [Uk, Qk],
              [nk, yk]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Kk, [Uk, Qk],
              [nk, pk]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Kk, [Uk, "Lenovo"],
              [nk, yk]
            ],
            [/(nokia) (t[12][01])/i],
            [Uk, Kk, [nk, yk]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Kk, /_/g, " "],
              [nk, pk],
              [Uk, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Kk, [Uk, qk],
              [nk, yk]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Kk, [Uk, qk],
              [nk, pk]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Kk, [Uk, ck],
              [nk, pk]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Kk, "Xperia Tablet"],
              [Uk, ck],
              [nk, yk]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Kk, [Uk, ak],
              [nk, pk]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Kk, [Uk, Ak],
              [nk, yk]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Kk, /(.+)/g, "Fire Phone $1"],
              [Uk, Ak],
              [nk, pk]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Kk, Uk, [nk, yk]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Kk, [Uk, dk],
              [nk, pk]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Kk, [Uk, sk],
              [nk, yk]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Kk, [Uk, sk],
              [nk, pk]
            ],
            [/(nexus 9)/i],
            [Kk, [Uk, "HTC"],
              [nk, yk]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Uk, [Kk, /_/g, " "],
              [nk, pk]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Kk, [Uk, "TCL"],
              [nk, yk]
            ],
            [/(itel) ((\w+))/i],
            [
              [Uk, ke], Kk, [nk, De, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Kk, [Uk, "Acer"],
              [nk, yk]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Kk, [Uk, "Meizu"],
              [nk, pk]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Kk, [Uk, "Ulefone"],
              [nk, pk]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Kk, [Uk, "Energizer"],
              [nk, pk]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Kk, [Uk, "Cat"],
              [nk, pk]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Kk, [Uk, "Smartfren"],
              [nk, pk]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Kk, [Uk, "Nothing"],
              [nk, pk]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Kk, [Uk, "Archos"],
              [nk, yk]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Kk, [Uk, "Archos"],
              [nk, pk]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Uk, Kk, [nk, yk]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Uk, Kk, [nk, pk]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Uk, Kk, [nk, yk]],
            [/(surface duo)/i],
            [Kk, [Uk, vk],
              [nk, yk]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Kk, [Uk, "Fairphone"],
              [nk, pk]
            ],
            [/(u304aa)/i],
            [Kk, [Uk, "AT&T"],
              [nk, pk]
            ],
            [/\bsie-(\w*)/i],
            [Kk, [Uk, "Siemens"],
              [nk, pk]
            ],
            [/\b(rct\w+) b/i],
            [Kk, [Uk, "RCA"],
              [nk, yk]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Kk, [Uk, "Dell"],
              [nk, yk]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Kk, [Uk, "Verizon"],
              [nk, yk]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Kk, [Uk, "Barnes & Noble"],
              [nk, yk]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Kk, [Uk, "NuVision"],
              [nk, yk]
            ],
            [/\b(k88) b/i],
            [Kk, [Uk, "ZTE"],
              [nk, yk]
            ],
            [/\b(nx\d{3}j) b/i],
            [Kk, [Uk, "ZTE"],
              [nk, pk]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Kk, [Uk, "Swiss"],
              [nk, pk]
            ],
            [/\b(zur\d{3}) b/i],
            [Kk, [Uk, "Swiss"],
              [nk, yk]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Kk, [Uk, "Zeki"],
              [nk, yk]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Uk, "Dragon Touch"], Kk, [nk, yk]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Kk, [Uk, "Insignia"],
              [nk, yk]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Kk, [Uk, "NextBook"],
              [nk, yk]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Uk, "Voice"], Kk, [nk, pk]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Uk, "LvTel"], Kk, [nk, pk]
            ],
            [/\b(ph-1) /i],
            [Kk, [Uk, "Essential"],
              [nk, pk]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Kk, [Uk, "Envizen"],
              [nk, yk]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Kk, [Uk, "MachSpeed"],
              [nk, yk]
            ],
            [/\btu_(1491) b/i],
            [Kk, [Uk, "Rotor"],
              [nk, yk]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Kk, [Uk, hk],
              [nk, yk]
            ],
            [/(sprint) (\w+)/i],
            [Uk, Kk, [nk, pk]],
            [/(kin\.[onetw]{3})/i],
            [
              [Kk, /\./g, " "],
              [Uk, vk],
              [nk, pk]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Kk, [Uk, Zk],
              [nk, yk]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Kk, [Uk, Zk],
              [nk, pk]
            ],
            [/smart-tv.+(samsung)/i],
            [Uk, [nk, Yk]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Kk, /^/, "SmartTV"],
              [Uk, Xk],
              [nk, Yk]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Uk, Qk],
              [nk, Yk]
            ],
            [/(apple) ?tv/i],
            [Uk, [Kk, jk + " TV"],
              [nk, Yk]
            ],
            [/crkey/i],
            [
              [Kk, Fk + "cast"],
              [Uk, qk],
              [nk, Yk]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Kk, [Uk, Ak],
              [nk, Yk]
            ],
            [/(shield \w+ tv)/i],
            [Kk, [Uk, hk],
              [nk, Yk]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Kk, [Uk, Bk],
              [nk, Yk]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Kk, [Uk, ck],
              [nk, Yk]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Kk, [Uk, Tk],
              [nk, Yk]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Uk, Kk, [nk, Yk]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Uk, ee],
              [Kk, ee],
              [nk, Yk]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Kk, [nk, Yk]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [nk, Yk]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Uk, Kk, [nk, lk]],
            [/droid.+; (shield)( bui|\))/i],
            [Kk, [Uk, hk],
              [nk, lk]
            ],
            [/(playstation \w+)/i],
            [Kk, [Uk, ck],
              [nk, lk]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Kk, [Uk, vk],
              [nk, lk]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Kk, [Uk, Xk],
              [nk, Lk]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Uk, Kk, [nk, Lk]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Kk, [Uk, tk],
              [nk, Lk]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Kk, [Uk, jk],
              [nk, Lk]
            ],
            [/(opwwe\d{3})/i],
            [Kk, [Uk, ak],
              [nk, Lk]
            ],
            [/(moto 360)/i],
            [Kk, [Uk, Ek],
              [nk, Lk]
            ],
            [/(smartwatch 3)/i],
            [Kk, [Uk, ck],
              [nk, Lk]
            ],
            [/(g watch r)/i],
            [Kk, [Uk, Qk],
              [nk, Lk]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Kk, [Uk, Zk],
              [nk, Lk]
            ],
            [/droid.+; (glass) \d/i],
            [Kk, [Uk, qk],
              [nk, Lk]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Uk, Kk, [nk, Lk]],
            [/; (quest( \d| pro)?)/i],
            [Kk, [Uk, Ok],
              [nk, Lk]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Uk, [nk, Ck]],
            [/(aeobc)\b/i],
            [Kk, [Uk, Ak],
              [nk, Ck]
            ],
            [/(homepod).+mac os/i],
            [Kk, [Uk, jk],
              [nk, Ck]
            ],
            [/windows iot/i],
            [
              [nk, Ck]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Kk, [nk, pk]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Kk, [nk, yk]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [nk, yk]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [nk, pk]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Kk, [Uk, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Hk, [xk, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [xk, Hk],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Hk, [xk, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [xk, Hk],
            [/ladybird\//i],
            [
              [xk, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Hk, xk]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [xk, Hk],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [xk, [Hk, De, fe]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Hk, De, fe],
              [xk, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Hk, /_/g, "."],
              [xk, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [xk, Gk],
              [Hk, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Hk, xk],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [xk, /(.+)/, "$1 Touch"], Hk
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [xk, Hk],
            [/\(bb(10);/i],
            [Hk, [xk, dk]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Hk, [xk, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Hk, [xk, uk + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Hk, [xk, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Hk, [xk, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Hk, [xk, Fk + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [xk, gk], Hk
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [xk, Hk],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [xk, "Solaris"], Hk
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [xk, Hk]
          ]
        },
        be = function(kk, ek) {
          if (typeof kk === Pk && (ek = kk, kk = Sk), !(this instanceof be)) return new be(kk, ek).getResult();
          var ik = typeof fk !== rk && fk.navigator ? fk.navigator : Sk,
            Dk = kk || (ik && ik.userAgent ? ik.userAgent : ""),
            lk = ik && ik.userAgentData ? ik.userAgentData : Sk,
            Yk = ek ? function(kk, ek) {
              var ik = {};
              for (var Dk in kk) ek[Dk] && ek[Dk].length % 2 === 0 ? ik[Dk] = ek[Dk].concat(kk[Dk]) : ik[Dk] = kk[Dk];
              return ik
            }(Se, ek) : Se,
            Lk = ik && ik.userAgent == Dk;
          return this.getBrowser = function() {
            var kk, ek = {};
            return ek[xk] = Sk, ek[Hk] = Sk, ie.call(ek, Dk, Yk.browser), ek[Mk] = typeof(kk = ek[Hk]) === mk ? kk.replace(/[^\d\.]/g, "").split(".")[0] : Sk, Lk && ik && ik.brave && typeof ik.brave.isBrave == bk && (ek[xk] = "Brave"), ek
          }, this.getCPU = function() {
            var kk = {};
            return kk[wk] = Sk, ie.call(kk, Dk, Yk.cpu), kk
          }, this.getDevice = function() {
            var kk = {};
            return kk[Uk] = Sk, kk[Kk] = Sk, kk[nk] = Sk, ie.call(kk, Dk, Yk.device), Lk && !kk[nk] && lk && lk.mobile && (kk[nk] = pk), Lk && "Macintosh" == kk[Kk] && ik && typeof ik.standalone !== rk && ik.maxTouchPoints && ik.maxTouchPoints > 2 && (kk[Kk] = "iPad", kk[nk] = yk), kk
          }, this.JU = function() {
            var kk = {};
            return kk[xk] = Sk, kk[Hk] = Sk, ie.call(kk, Dk, Yk.engine), kk
          }, this.getOS = function() {
            var kk = {};
            return kk[xk] = Sk, kk[Hk] = Sk, ie.call(kk, Dk, Yk.os), Lk && !kk[xk] && lk && lk.platform && "Unknown" != lk.platform && (kk[xk] = lk.platform.replace(/chrome os/i, gk).replace(/macos/i, Gk)), kk
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.JU(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Dk
          }, this.setUA = function(kk) {
            return Dk = typeof kk === mk && kk.length > 500 ? ee(kk, 500) : kk, this
          }, this.setUA(Dk), this
        };
      be.VERSION = "1.0.41", be.BROWSER = Rk([xk, Hk, Mk]), be.CPU = Rk([wk]), be.DEVICE = Rk([Kk, Uk, nk, lk, pk, Yk, yk, Lk, Ck]), be.ENGINE = be.OS = Rk([xk, Hk]), typeof ek !== rk ? (kk.exports && (ek = kk.exports = be), ek.UAParser = be) : ik.amdO ? (Dk = function() {
        return be
      }.call(ek, ik, ek, kk)) === Sk || (kk.exports = Dk) : typeof fk !== rk && (fk.UAParser = be);
      var re = typeof fk !== rk && (fk.jQuery || fk.Zepto);
      if (re && !re.ua) {
        var Pe = new be;
        re.ua = Pe.getResult(), re.ua.get = function() {
          return Pe.getUA()
        }, re.ua.set = function(kk) {
          Pe.setUA(kk);
          var ek = Pe.getResult();
          for (var ik in ek) re.ua[ik] = ek[ik]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);