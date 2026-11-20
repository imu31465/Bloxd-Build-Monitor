export const id = 31;
export const ids = [31];
export const modules = {
  6334: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BaseExtension: () => bU,
      BaseInstrumentation: () => aU,
      BaseTransport: () => JM,
      CSPInstrumentation: () => mM,
      ConsoleInstrumentation: () => FU,
      ConsoleTransport: () => UT,
      EVENT_CLICK: () => Da,
      EVENT_NAVIGATION: () => za,
      EVENT_ROUTE_CHANGE: () => Na,
      EVENT_SESSION_EXTEND: () => ma,
      EVENT_SESSION_RESUME: () => fa,
      EVENT_SESSION_START: () => ia,
      EVENT_VIEW_CHANGED: () => xa,
      ErrorsInstrumentation: () => GU,
      FetchTransport: () => zT,
      InternalLoggerLevel: () => sa,
      LogLevel: () => DU,
      MAX_SESSION_PERSISTENCE_TIME: () => Bb,
      NavigationInstrumentation: () => oM,
      Observable: () => ZU,
      PerformanceInstrumentation: () => CA,
      PersistentSessionsManager: () => ua,
      SESSION_EXPIRATION_TIME: () => Tb,
      SESSION_INACTIVITY_TIME: () => Eb,
      STORAGE_KEY: () => Mb,
      SessionInstrumentation: () => AU,
      TransportItemType: () => nM,
      UserActionInstrumentation: () => fM,
      UserActionState: () => jM,
      VERSION: () => UU,
      ViewInstrumentation: () => qU,
      VolatileSessionsManager: () => ra,
      WebVitalsInstrumentation: () => hA,
      allLogLevels: () => xU,
      browserMeta: () => CM,
      buildStackFrame: () => MU,
      captureMetas: () => qT,
      createInternalLogger: () => pT,
      createPromiseBuffer: () => PT,
      createSession: () => OM,
      deepEqual: () => Za,
      defaultEventDomain: () => Ab,
      defaultExceptionType: () => pU,
      defaultGlobalObjectKey: () => NT,
      defaultInternalLoggerLevel: () => Ca,
      defaultLogLevel: () => zU,
      faro: () => Rb,
      genShortID: () => ya,
      getCurrentTimestamp: () => ja,
      getDataFromSafariExtensions: () => PU,
      getIgnoreUrls: () => Vb,
      getInternalFaroFromGlobalObject: () => Pb,
      getStackFramesFromError: () => jU,
      getTransportBody: () => aT,
      getUrlFromResource: () => cb,
      getWebInstrumentations: () => lM,
      globalObject: () => vb,
      initializeFaro: () => JT,
      internalGlobalObjectKey: () => Lb,
      isArray: () => Ib,
      isBoolean: () => pb,
      isDomError: () => Kb,
      isDomException: () => ob,
      isElement: () => tb,
      isElementDefined: () => lb,
      lX: () => Cb,
      isError: () => ub,
      isErrorDefined: () => qb,
      isErrorEvent: () => rb,
      isEvent: () => Qb,
      isEventDefined: () => Gb,
      isFunction: () => Hb,
      isInstanceOf: () => Db,
      isInt: () => mb,
      isInternalFaroOnGlobalObject: () => jb,
      isMap: () => sb,
      isMapDefined: () => wb,
      isNull: () => xb,
      isNumber: () => fb,
      isObject: () => Wb,
      isPrimitive: () => hb,
      isRegExp: () => db,
      isString: () => ib,
      isSymbol: () => Nb,
      isSyntheticEvent: () => gb,
      isThenable: () => Fb,
      isToString: () => Zb,
      isTypeof: () => yb,
      isUndefined: () => zb,
      makeCoreConfig: () => IT,
      noop: () => wa,
      osMeta: () => VM,
      parseStacktrace: () => RU,
      sdkMeta: () => cM,
      setInternalFaroOnGlobalObject: () => Xb,
      transportItemTypeToBodyKey: () => SM,
      unknownString: () => QU,
      userActionDataAttribute: () => VA,
      userActionTimeoutDataAttribute: () => OA
    });
    const Ab = "browser",
      Mb = "com.grafana.faro.session",
      Tb = 144e5,
      Eb = 9e5,
      Yb = 1e3,
      Bb = Eb,
      eb = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Bb
      };
    const vb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Ub.g ? Ub.g : "undefined" !== typeof self ? self : void 0;
    const Lb = "_faroInternal";

    function Pb() {
      return vb[Lb]
    }

    function Xb(bb) {
      bb.config.isolate ? bb.internalLogger.debug("Skipping registering internal Faro instance on global object") : (bb.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(vb, Lb, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bb
      }))
    }

    function jb() {
      return Lb in vb
    }
    let Rb = {
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

    function kb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      return ab.debug("Initializing Faro"), Rb = {
          api: Tb,
          config: Ub,
          instrumentations: Eb,
          internalLogger: ab,
          metas: Ab,
          pause: Mb.pause,
          transports: Mb,
          unpatchedConsole: bb,
          unpause: Mb.unpause
        }, Xb(Rb),
        function(bb) {
          if (bb.config.preventGlobalExposure) bb.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (bb.internalLogger.debug(`Registering public faro reference in the global scope using "${bb.config.globalObjectKey}" key`), bb.config.globalObjectKey in vb) return void bb.internalLogger.warn(`Skipping global registration due to key "${bb.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(vb, bb.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: bb
            })
          }
        }(Rb), Rb
    }

    function yb(bb, ab) {
      return typeof bb === ab
    }

    function Zb(bb, ab) {
      return Object.prototype.toString.call(bb) === `[object ${ab}]`
    }

    function Db(bb, ab) {
      try {
        return bb instanceof ab
      } catch (Ub) {
        return !1
      }
    }
    const zb = bb => yb(bb, "undefined"),
      xb = bb => yb(bb, "null"),
      ib = bb => yb(bb, "string"),
      fb = bb => yb(bb, "number") && !isNaN(bb) || yb(bb, "bigint"),
      mb = bb => fb(bb) && Number.isInteger(bb),
      pb = bb => yb(bb, "boolean"),
      Nb = bb => yb(bb, "symbol"),
      Wb = bb => !xb(bb) && yb(bb, "object"),
      Hb = bb => yb(bb, "function"),
      Ib = bb => Zb(bb, "Array"),
      db = bb => Zb(bb, "RegExp"),
      Fb = bb => Hb(null === bb || void 0 === bb ? void 0 : bb.then),
      hb = bb => !Wb(bb) && !Hb(bb),
      Gb = "undefined" !== typeof Event,
      Qb = bb => Gb && Db(bb, Event),
      qb = "undefined" !== typeof Error,
      ub = bb => qb && Db(bb, Error),
      rb = bb => Zb(bb, "ErrorEvent"),
      Kb = bb => Zb(bb, "DOMError"),
      ob = bb => Zb(bb, "DOMException"),
      lb = "undefined" !== typeof Element,
      tb = bb => lb && Db(bb, Element),
      wb = "undefined" !== typeof Map,
      sb = bb => wb && Db(bb, Map),
      gb = bb => Wb(bb) && "nativeEvent" in bb && "preventDefault" in bb && "stopPropagation" in bb;

    function Cb(bb) {
      return null == bb || (Ib(bb) || ib(bb) ? 0 === bb.length : !!Wb(bb) && 0 === Object.keys(bb).length)
    }

    function Vb() {
      return Rb.transports.transports.flatMap((bb => bb.getIgnoreUrls()))
    }

    function Ob() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Vb().some((ab => bb && null != bb.match(ab)))
    }

    function cb(bb) {
      return ib(bb) ? bb : bb instanceof URL ? bb.href : !Cb(bb) && Hb(null === bb || void 0 === bb ? void 0 : bb.toString) ? bb.toString() : void 0
    }
    const Jb = "sessionStorage",
      nb = "localStorage";

    function Sb(bb) {
      try {
        let ab;
        ab = window[bb];
        const Ub = "__faro_storage_test__";
        return ab.setItem(Ub, Ub), ab.removeItem(Ub), !0
      } catch (Ub) {
        var ab;
        return null === (ab = Rb.internalLogger) || void 0 === ab || ab.info(`Web storage of type ${bb} is not available. Reason: ${Ub}`), !1
      }
    }

    function ba(bb, ab) {
      return Ta(ab) ? window[ab].getItem(bb) : null
    }

    function aa(bb, ab, Ub) {
      if (Ta(Ub)) try {
        window[Ub].setItem(bb, ab)
      } catch (Ab) {}
    }

    function Ua(bb, ab) {
      Ta(ab) && window[ab].removeItem(bb)
    }
    const Aa = Sb(nb),
      Ma = Sb(Jb);

    function Ta(bb) {
      return bb === nb ? Aa : bb === Jb && Ma
    }

    function Ea(bb) {
      return Ea = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ea(bb)
    }

    function Ya(bb) {
      var ab = function(bb, ab) {
        if ("object" != Ea(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Ea(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Ea(ab) ? ab : ab + ""
    }

    function Ba(bb, ab, Ub) {
      return (ab = Ya(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function ea(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function va(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ea(Object(Ub), !0).forEach((function(ab) {
          Ba(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ea(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function La() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb;
      var ab, Ub, Ab;
      const Mb = bb.config.sessionTracking,
        Tb = null !== (ab = null !== (Ub = null === Mb || void 0 === Mb || null === (Ab = Mb.sampler) || void 0 === Ab ? void 0 : Ab.call(Mb, {
          metas: bb.metas.value
        })) && void 0 !== Ub ? Ub : null === Mb || void 0 === Mb ? void 0 : Mb.samplingRate) && void 0 !== ab ? ab : 1,
        Eb = "number" === typeof Tb ? function(bb) {
          return Math.min(1, Math.max(0, bb))
        }(Tb) : 0;
      if (!(Eb > 0)) return !1;
      if (1 === Eb) return !0;
      try {
        const bb = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === bb || void 0 === bb ? void 0 : bb.getRandomValues)) {
          const ab = new Uint32Array(1);
          return bb.getRandomValues(ab), ab[0] / Math.pow(2, 32) < Eb
        }
      } catch (Yb) {}
      return Math.random() < Eb
    }

    function Pa() {
      return Date.now()
    }

    function Xa() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function ja() {
      return (new Date).toISOString()
    }

    function Ra(bb) {
      return new Date(bb).toISOString()
    }
    const ka = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function ya() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const ab = new Uint32Array(bb),
        Ub = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Ub || void 0 === Ub ? void 0 : Ub.getRandomValues) Ub.getRandomValues(ab);
      else
        for (let Mb = 0; Mb < bb; Mb++) ab[Mb] = Math.floor(4294967296 * Math.random());
      let Ab = "";
      for (let Mb = 0; Mb < bb; Mb++) Ab += ka[ab[Mb] % 59];
      return Ab
    }

    function Za(bb, ab) {
      if (bb === ab) return !0;
      if (yb(bb, "number") && isNaN(bb)) return yb(ab, "number") && isNaN(ab);
      const Ub = Ib(bb),
        Ab = Ib(ab);
      if (Ub !== Ab) return !1;
      if (Ub && Ab) {
        const Ub = bb.length;
        if (Ub !== ab.length) return !1;
        for (let Ab = Ub; 0 !== Ab--;)
          if (!Za(bb[Ab], ab[Ab])) return !1;
        return !0
      }
      const Mb = Wb(bb),
        Tb = Wb(ab);
      if (Mb !== Tb) return !1;
      if (bb && ab && Mb && Tb) {
        const Ub = Object.keys(bb),
          Ab = Object.keys(ab);
        if (Ub.length !== Ab.length) return !1;
        for (let bb of Ub)
          if (!Ab.includes(bb)) return !1;
        for (let Mb of Ub)
          if (!Za(bb[Mb], ab[Mb])) return !1;
        return !0
      }
      return !1
    }
    const Da = "click",
      za = "navigation",
      xa = "view_changed",
      ia = "session_start",
      fa = "session_resume",
      ma = "session_extend",
      pa = "service_name_override",
      Na = "route_change";

    function Wa() {
      let {
        sessionId: bb,
        started: ab,
        lastActivity: Ub,
        isSampled: Ab = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rb;
      var Tb;
      const Eb = Pa(),
        Yb = null === (Tb = Mb.config) || void 0 === Tb || null === (Tb = Tb.sessionTracking) || void 0 === Tb ? void 0 : Tb.generateSessionId;
      return null == bb && (bb = "function" === typeof Yb ? Yb() : ya()), {
        sessionId: bb,
        lastActivity: null !== Ub && void 0 !== Ub ? Ub : Eb,
        started: null !== ab && void 0 !== ab ? ab : Eb,
        isSampled: Ab
      }
    }

    function Ha(bb) {
      if (null == bb) return !1;
      const ab = Pa();
      return ab - bb.started < 144e5 && ab - bb.lastActivity < Eb
    }

    function Ia(bb) {
      let {
        fetchUserSession: ab,
        storeUserSession: Ub,
        adoptSession: Ab,
        updateInterval: Mb = 0
      } = bb, Yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rb, Bb = 0;
      return function() {
        let {
          forceSessionExtend: bb = !1,
          refreshActivity: eb = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var vb, Lb;
        if (!ab || !Ub) return;
        const Pb = Pa();
        if (!bb && Pb < Bb && Bb - Pb <= Mb) return;
        const Xb = Yb.config.sessionTracking,
          jb = null === Xb || void 0 === Xb ? void 0 : Xb.persistent;
        if (jb && !Aa || !jb && !Ma) return;
        const Rb = ab();
        if (Bb = Math.min(Pb + Mb, (null !== (vb = null === Rb || void 0 === Rb ? void 0 : Rb.started) && void 0 !== vb ? vb : Pb) + Tb, (null !== (Lb = null === Rb || void 0 === Rb ? void 0 : Rb.lastActivity) && void 0 !== Lb ? Lb : Pb) + Eb), !1 === bb && Ha(Rb)) {
          var kb;
          eb && Ub(va(va({}, Rb), {}, {
            lastActivity: Pb
          }));
          const bb = null === (kb = Yb.metas.value.session) || void 0 === kb ? void 0 : kb.id;
          null != Ab && null != Rb.sessionMeta && Rb.sessionId !== bb && Ab(Rb.sessionMeta)
        } else {
          var yb, Zb, Db;
          let bb = Fa(Wa({
            isSampled: La(Yb)
          }, Yb), Rb, Yb);
          Bb = Pb + Mb, Ub(bb), null === (yb = Yb.api) || void 0 === yb || yb.setSession(bb.sessionMeta), null === Xb || void 0 === Xb || null === (Zb = Xb.onSessionChange) || void 0 === Zb || Zb.call(Xb, null !== (Db = null === Rb || void 0 === Rb ? void 0 : Rb.sessionMeta) && void 0 !== Db ? Db : null, bb.sessionMeta)
        }
      }
    }

    function da(bb) {
      let ab, {
          fetchUserSession: Ub,
          storeUserSession: Ab,
          updateInterval: Mb = 0
        } = bb,
        Tb = 0;
      return bb => {
        const Eb = Pa();
        if (bb === ab && Eb < Tb && Tb - Eb <= Mb) return;
        ab = bb, Tb = Eb + Mb;
        const Yb = Ub();
        (null === Yb || void 0 === Yb ? void 0 : Yb.sessionId) === bb && Ha(Yb) && Ab(va(va({}, Yb), {}, {
          lastActivity: Eb
        }))
      }
    }

    function Fa(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rb;
      var Ab, Mb, Tb, Eb, Yb, Bb;
      const eb = va(va({}, bb), {}, {
          sessionMeta: {
            id: bb.sessionId,
            attributes: Ga(va(va(va({}, null === (Ab = Ub.config.sessionTracking) || void 0 === Ab || null === (Ab = Ab.session) || void 0 === Ab ? void 0 : Ab.attributes), null !== (Mb = null === (Tb = Ub.metas.value.session) || void 0 === Tb ? void 0 : Tb.attributes) && void 0 !== Mb ? Mb : {}), {}, {
              isSampled: bb.isSampled.toString()
            }))
          }
        }),
        vb = null !== (Eb = null === (Yb = Ub.metas.value.session) || void 0 === Yb ? void 0 : Yb.overrides) && void 0 !== Eb ? Eb : null === ab || void 0 === ab || null === (Bb = ab.sessionMeta) || void 0 === Bb ? void 0 : Bb.overrides;
      Cb(vb) || (eb.sessionMeta.overrides = vb);
      const Lb = null === ab || void 0 === ab ? void 0 : ab.sessionId;
      return null != Lb && (eb.sessionMeta.attributes.previousSession = Lb), eb
    }

    function ha(bb) {
      let {
        fetchUserSession: ab,
        storeUserSession: Ub
      } = bb, Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rb, Mb = !1;
      return function(bb) {
        if (Mb) return;
        const Tb = bb.session,
          Eb = ab();
        let Yb = null === Tb || void 0 === Tb ? void 0 : Tb.id;
        const Bb = null === Tb || void 0 === Tb ? void 0 : Tb.attributes,
          eb = null === Tb || void 0 === Tb ? void 0 : Tb.overrides,
          vb = null === Eb || void 0 === Eb ? void 0 : Eb.sessionMeta,
          Lb = null === vb || void 0 === vb ? void 0 : vb.overrides,
          Pb = !!eb && !Za(eb, Lb),
          Xb = !!Bb && !Za(Bb, null === vb || void 0 === vb ? void 0 : vb.attributes);
        if (Tb && Yb !== (null === Eb || void 0 === Eb ? void 0 : Eb.sessionId) || Xb || Pb) {
          var jb, Rb;
          const bb = null != Eb && Yb === Eb.sessionId,
            ab = Fa(bb ? Eb : Wa({
              sessionId: Yb,
              isSampled: La(Ab)
            }, Ab), Eb, Ab),
            Tb = null === Eb || void 0 === Eb || null === (jb = Eb.sessionMeta) || void 0 === jb || null === (jb = jb.attributes) || void 0 === jb ? void 0 : jb.previousSession;
          bb && null != Tb && Tb !== ab.sessionId && (ab.sessionMeta.attributes.previousSession = Tb), (null === (Rb = ab.sessionMeta.attributes) || void 0 === Rb ? void 0 : Rb.previousSession) === ab.sessionId && delete ab.sessionMeta.attributes.previousSession, Ub(ab),
            function(bb, ab) {
              let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Mb, Tb, Eb;
              if (!ab) return;
              const Yb = Ub.serviceName,
                Bb = null !== (Mb = null !== (Tb = Ab.serviceName) && void 0 !== Tb ? Tb : null === (Eb = bb.metas.value.app) || void 0 === Eb ? void 0 : Eb.name) && void 0 !== Mb ? Mb : "";
              Yb && Yb !== Bb && bb.api.pushEvent(pa, {
                serviceName: Yb,
                previousServiceName: Bb
              })
            }(Ab, Pb, eb, Lb), Mb = !0;
          try {
            Ab.api.setSession(ab.sessionMeta)
          } finally {
            Mb = !1
          }
        }
      }
    }

    function Ga(bb) {
      const ab = {};
      for (const Ub of Object.keys(bb)) {
        const Ab = bb[Ub];
        void 0 !== Ab && (ab[Ub] = Ab)
      }
      return ab
    }

    function Qa() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== bb && void 0 !== bb ? bb : {}, function() {
        const bb = new WeakSet;
        return function(ab, Ub) {
          if (Wb(Ub) && null !== Ub) {
            if (bb.has(Ub)) return null;
            bb.add(Ub)
          }
          return Ub
        }
      }())
    }

    function qa() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ab = {};
      for (const [Ub, Ab] of Object.entries(bb)) ab[Ub] = Wb(Ab) && null !== Ab ? Qa(Ab) : String(Ab);
      return ab
    }
    var ua = class bb {
      constructor() {
        var ab = this;
        let Ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb;
        this.context = Ub, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = bb => {
          this.adopting = !0;
          try {
            var ab;
            null === (ab = this.context.api) || void 0 === ab || ab.setSession(bb)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ab.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = da({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Yb
        }), this.updateUserSession = Ia({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Yb
        }, Ub), this.init()
      }
      static removeUserSession() {
        Ua(Mb, bb.storageTypeLocal)
      }
      static storeUserSession(ab) {
        aa(Mb, Qa(ab), bb.storageTypeLocal)
      }
      static fetchUserSession() {
        const ab = ba(Mb, bb.storageTypeLocal);
        return ab ? JSON.parse(ab) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const ab = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            ab && this.recordActivity(ab)
          }
        })), this.context.metas.addListener(ha({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    ua.storageTypeLocal = nb;
    var ra = class bb {
      constructor() {
        var ab = this;
        let Ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb;
        this.context = Ub, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ab.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = da({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Yb
        }), this.updateUserSession = Ia({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Yb
        }, Ub), this.init()
      }
      static removeUserSession() {
        Ua(Mb, bb.storageTypeSession)
      }
      static storeUserSession(ab) {
        aa(Mb, Qa(ab), bb.storageTypeSession)
      }
      static fetchUserSession() {
        const ab = ba(Mb, bb.storageTypeSession);
        return ab ? JSON.parse(ab) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const ab = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            ab && this.recordActivity(ab)
          }
        })), this.context.metas.addListener(ha({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    ra.storageTypeSession = Jb;
    const Ka = new WeakMap;

    function oa(bb) {
      let ab = Ka.get(bb);
      if (!ab) {
        let Ub = [],
          Ab = [];
        ab = {
          addSessionUpdateListener: bb => {
            Ub.push(bb)
          },
          removeSessionUpdateListener: bb => {
            Ub = Ub.filter((ab => ab !== bb))
          },
          notifySessionUpdate: bb => {
            Ub.forEach((ab => ab(bb)))
          },
          shouldCapture: () => Ab.every((bb => bb())),
          addCaptureFilter: bb => {
            Ab.push(bb)
          },
          removeCaptureFilter: bb => {
            Ab = Ab.filter((ab => ab !== bb))
          }
        }, Ka.set(bb, ab)
      }
      return ab
    }
    var la = class {
      constructor(bb, ab, Ub) {
        this.metas = bb, this.transports = ab, this.onActivate = Ub, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = bb => {
          var ab, Ub, Ab;
          const Mb = this.pending;
          var Tb, Eb;
          if ("overrides" === bb.type) return void(this.pending = {
            reset: null !== (Tb = null === Mb || void 0 === Mb ? void 0 : Mb.reset) && void 0 !== Tb && Tb,
            inheritOverrides: null === (Eb = null === Mb || void 0 === Mb ? void 0 : Mb.inheritOverrides) || void 0 === Eb || Eb,
            session: va(va({}, null === Mb || void 0 === Mb ? void 0 : Mb.session), {}, {
              overrides: va(va({}, null === Mb || void 0 === Mb ? void 0 : Mb.session.overrides), bb.overrides)
            })
          });
          const Yb = bb.session,
            Bb = Cb(Yb) || null != Yb && "id" in Yb && !Yb.id,
            eb = null !== (ab = null === Yb || void 0 === Yb ? void 0 : Yb.overrides) && void 0 !== ab ? ab : null === Mb || void 0 === Mb ? void 0 : Mb.session.overrides;
          this.pending = {
            reset: Bb || !(null === Yb || void 0 === Yb ? void 0 : Yb.id) && null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb.reset) && void 0 !== Ub && Ub,
            inheritOverrides: !(!bb.overrides && void 0 !== (null === Yb || void 0 === Yb ? void 0 : Yb.overrides)) && (null === (Ab = null === Mb || void 0 === Mb ? void 0 : Mb.inheritOverrides) || void 0 === Ab || Ab),
            session: {
              id: null === Yb || void 0 === Yb ? void 0 : Yb.id,
              attributes: (null === Yb || void 0 === Yb ? void 0 : Yb.attributes) && va({}, Yb.attributes),
              overrides: bb.overrides ? va(va({}, null === Mb || void 0 === Mb ? void 0 : Mb.session.overrides), bb.overrides) : eb && va({}, eb)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var bb, ab;
        this.waiting = !0, oa(this.metas).addSessionUpdateListener(this.recordUpdate), oa(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (bb = (ab = this.metas).addCaptureListener) || void 0 === bb || bb.call(ab, this.activate), this.activate()
      }
      destroy() {
        var bb, ab;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), oa(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (bb = (ab = this.metas).removeCaptureListener) || void 0 === bb || bb.call(ab, this.activate), oa(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function ta(bb) {
      return (null === bb || void 0 === bb ? void 0 : bb.persistent) ? ua : ra
    }

    function wa() {}
    let sa = function(bb) {
      return bb[bb.OFF = 0] = "OFF", bb[bb.ERROR = 1] = "ERROR", bb[bb.WARN = 2] = "WARN", bb[bb.INFO = 3] = "INFO", bb[bb.VERBOSE = 4] = "VERBOSE", bb
    }({});
    const ga = {
        debug: wa,
        error: wa,
        info: wa,
        prefix: "Faro",
        warn: wa
      },
      Ca = 1;

    function Va(bb) {
      return Va = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Va(bb)
    }

    function Oa(bb) {
      var ab = function(bb, ab) {
        if ("object" != Va(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Va(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Va(ab) ? ab : ab + ""
    }

    function ca(bb, ab, Ub) {
      return (ab = Oa(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Ja(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function na(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Ja(Object(Ub), !0).forEach((function(ab) {
          ca(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Ja(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }
    const Sa = na({}, console);
    var bU = class {
        constructor() {
          this.unpatchedConsole = Sa, this.internalLogger = ga, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
          this.internalLogger.debug(`${this.name}\n`, ...ab)
        }
        logInfo() {
          for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
          this.internalLogger.info(`${this.name}\n`, ...ab)
        }
        logWarn() {
          for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
          this.internalLogger.warn(`${this.name}\n`, ...ab)
        }
        logError() {
          for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
          this.internalLogger.error(`${this.name}\n`, ...ab)
        }
      },
      aU = class extends bU {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const UU = "2.12.1";
    var AU = class extends aU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = UU, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(bb) {
        var ab;
        const Ub = bb.session;
        if (Ub && Ub.id !== (null === (ab = this.notifiedSession) || void 0 === ab ? void 0 : ab.id)) {
          var Ab;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Ub);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Ab = Ub.attributes) || void 0 === Ab ? void 0 : Ab.previousSession)) return this.api.pushEvent(ma, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Ub);
          this.notifiedSession = Ub, this.api.pushEvent(ia, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(bb, ab, Ub) {
        const Ab = null === Ub || void 0 === Ub ? void 0 : Ub.session;
        let Mb, Tb, Eb = bb.fetchUserSession();
        if (ab.persistent && ab.maxSessionPersistenceTime && Eb) {
          const bb = Pa();
          Eb.lastActivity < bb - ab.maxSessionPersistenceTime && (ua.removeUserSession(), Eb = null)
        }
        const Yb = Ha(Eb);
        if ((null === Ub || void 0 === Ub ? void 0 : Ub.reset) || !Yb || (null === Ab || void 0 === Ab ? void 0 : Ab.id) && Ab.id !== (null === Eb || void 0 === Eb ? void 0 : Eb.sessionId)) {
          var Bb, eb, vb, Lb, Pb, Xb;
          Tb = Wa({
            sessionId: (null === Ub || void 0 === Ub ? void 0 : Ub.reset) ? void 0 : null !== (Bb = null === Ab || void 0 === Ab ? void 0 : Ab.id) && void 0 !== Bb ? Bb : null === (eb = ab.session) || void 0 === eb ? void 0 : eb.id,
            isSampled: La(this)
          }, this);
          const bb = Tb.sessionId,
            jb = Ub && Yb ? null === Eb || void 0 === Eb || null === (vb = Eb.sessionMeta) || void 0 === vb ? void 0 : vb.overrides : void 0,
            Rb = jb ? va(va({}, null === (Lb = ab.session) || void 0 === Lb ? void 0 : Lb.overrides), jb) : null === (Pb = ab.session) || void 0 === Pb ? void 0 : Pb.overrides;
          Tb.sessionMeta = va({
            id: bb,
            attributes: va({
              isSampled: Tb.isSampled.toString()
            }, null === (Xb = ab.session) || void 0 === Xb ? void 0 : Xb.attributes)
          }, Rb ? {
            overrides: Rb
          } : {}), Mb = ia
        } else {
          var jb, Rb;
          const bb = null === Eb || void 0 === Eb ? void 0 : Eb.sessionId;
          Tb = Wa({
            sessionId: bb,
            isSampled: Eb.isSampled || !1,
            started: null === Eb || void 0 === Eb ? void 0 : Eb.started
          }, this);
          const Ub = null === Eb || void 0 === Eb ? void 0 : Eb.sessionMeta,
            Ab = va(va({}, null === (jb = ab.session) || void 0 === jb ? void 0 : jb.overrides), null === Ub || void 0 === Ub ? void 0 : Ub.overrides);
          Tb.sessionMeta = va(va({}, ab.session), {}, {
            id: bb,
            attributes: va(va(va({}, null === (Rb = ab.session) || void 0 === Rb ? void 0 : Rb.attributes), null === Ub || void 0 === Ub ? void 0 : Ub.attributes), {}, {
              isSampled: Tb.isSampled.toString()
            }),
            overrides: Ab
          }), Mb = fa
        }
        var kb;
        if (Ab && (Tb.sessionMeta = va(va({}, Tb.sessionMeta), {}, {
            attributes: va(va(va({}, null === (kb = Tb.sessionMeta) || void 0 === kb ? void 0 : kb.attributes), Ab.attributes), {}, {
              isSampled: Tb.isSampled.toString()
            })
          }), Ab.overrides)) {
          const bb = (null === Ub || void 0 === Ub ? void 0 : Ub.inheritOverrides) ? va(va({}, Tb.sessionMeta.overrides), Ab.overrides) : Ab.overrides;
          Object.keys(bb).length > 0 ? Tb.sessionMeta.overrides = bb : delete Tb.sessionMeta.overrides
        }
        return {
          initialSession: Tb,
          lifecycleType: Mb
        }
      }
      registerBeforeSendHook(bb) {
        var ab;
        this.beforeSendHook = ab => {
          var Ub, Ab;
          const Mb = null === (Ub = ab.meta.session) || void 0 === Ub ? void 0 : Ub.id;
          Mb && !this.transports.isPaused() && bb(Mb);
          const Tb = null === (Ab = ab.meta.session) || void 0 === Ab ? void 0 : Ab.attributes;
          if (Tb && "true" === (null === Tb || void 0 === Tb ? void 0 : Tb.isSampled)) {
            var Eb;
            let bb = JSON.parse(JSON.stringify(ab));
            const Ub = null === (Eb = bb.meta.session) || void 0 === Eb ? void 0 : Eb.attributes;
            var Yb;
            if (null === Ub || void 0 === Ub || delete Ub.isSampled, 0 === Object.keys(null !== Ub && void 0 !== Ub ? Ub : {}).length) null === (Yb = bb.meta.session) || void 0 === Yb || delete Yb.attributes;
            return bb
          }
          return null
        }, null === (ab = this.transports) || void 0 === ab || ab.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var bb;
        this.logDebug("init session instrumentation");
        const ab = document.prerendering;
        var Ub;
        if ((null === (bb = this.config.sessionTracking) || void 0 === bb ? void 0 : bb.enabled) && (ab || this.prerenderSession)) return null !== (Ub = this.prerenderSession) && void 0 !== Ub || (this.prerenderSession = new la(this.metas, this.transports, (bb => {
          this.prerenderSession = void 0, this.initializeSession(bb)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(bb) {
        const ab = this.config.sessionTracking;
        if (null === ab || void 0 === ab ? void 0 : ab.enabled) {
          var Ub, Ab;
          const Mb = ta(ab),
            Tb = new Mb(this);
          this.isAdoptingSession = Tb.isAdopting, this.registerBeforeSendHook(Tb.recordActivity);
          const {
            initialSession: Eb,
            lifecycleType: Yb
          } = this.createInitialSession(Mb, ab, bb);
          Mb.storeUserSession(Eb);
          const Bb = Eb.sessionMeta;
          this.notifiedSession = Bb, this.api.setSession(Bb), this.captureListener = () => {
            this.transports.isPaused() || Tb.updateSession({
              refreshActivity: !1
            })
          }, null === (Ub = (Ab = this.metas).addCaptureListener) || void 0 === Ub || Ub.call(Ab, this.captureListener), Yb === ia && this.api.pushEvent(ia, {}, void 0, {
            skipDedupe: !0
          }), Yb === fa && this.api.pushEvent(fa, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var bb, ab, Ub;
        (null === (bb = this.prerenderSession) || void 0 === bb || bb.destroy(), this.captureListener) && (null === (ab = (Ub = this.metas).removeCaptureListener) || void 0 === ab || ab.call(Ub, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function MU(bb, ab, Ub, Ab) {
      const Mb = {
        filename: bb || document.location.href,
        function: ab || "?"
      };
      return void 0 !== Ub && (Mb.lineno = Ub), void 0 !== Ab && (Mb.colno = Ab), Mb
    }
    const TU = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      EU = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      YU = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      BU = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      eU = "safari-extension",
      vU = "safari-web-extension",
      LU = /Minified React error #\d+;/i;

    function PU(bb, ab) {
      const Ub = null === bb || void 0 === bb ? void 0 : bb.includes(eU),
        Ab = !Ub && (null === bb || void 0 === bb ? void 0 : bb.includes("safari-web-extension"));
      return Ub || Ab ? [(null === bb || void 0 === bb ? void 0 : bb.includes("@")) ? bb.split("@")[0] : bb, Ub ? `${eU}:${ab}` : `${vU}:${ab}`] : [bb, ab]
    }
    const XU = 1024;

    function jU(bb) {
      let ab = [];
      bb.stacktrace ? ab = bb.stacktrace.split("\n").filter(((bb, ab) => ab % 2 === 0)) : bb.stack && (ab = bb.stack.split("\n"));
      const Ub = ab.reduce(((ab, Ub, Ab) => {
        if (Ub.length > XU) return ab;
        let Mb, Tb, Eb, Yb, Bb;
        if (Mb = TU.exec(Ub)) {
          if (Tb = Mb[1], Eb = Mb[2], Yb = Mb[3], Bb = Mb[4], null === Eb || void 0 === Eb ? void 0 : Eb.startsWith("eval")) {
            const bb = EU.exec(Eb);
            bb && (Eb = bb[1], Yb = bb[2], Bb = bb[3])
          }
          Eb = (null === Eb || void 0 === Eb ? void 0 : Eb.startsWith("address at ")) ? Eb.substring(11) : Eb, [Tb, Eb] = PU(Tb, Eb)
        } else if (Mb = YU.exec(Ub)) {
          if (Tb = Mb[1], Eb = Mb[3], Yb = Mb[4], Bb = Mb[5], Eb && Eb.includes(" > eval")) {
            const bb = BU.exec(Eb);
            bb && (Tb = Tb || "eval", Eb = bb[1], Yb = bb[2])
          } else 0 === Ab && !Bb && fb(bb.columnNumber) && (Bb = String(bb.columnNumber + 1));
          [Tb, Eb] = PU(Tb, Eb)
        }
        return (Eb || Tb) && ab.push(MU(Eb, Tb, Yb ? Number(Yb) : void 0, Bb ? Number(Bb) : void 0)), ab
      }), []);
      return LU.test(bb.message) ? Ub.slice(1) : Ub
    }

    function RU(bb) {
      return {
        frames: jU(bb)
      }
    }
    const kU = "http-request-start",
      yU = "http-request-end";
    var ZU = class bb {
      constructor() {
        this.subscribers = []
      }
      subscribe(bb) {
        return this.subscribers.push(bb), {
          unsubscribe: () => this.unsubscribe(bb)
        }
      }
      unsubscribe(bb) {
        this.subscribers = this.subscribers.filter((ab => ab !== bb))
      }
      notify(bb) {
        this.subscribers.forEach((ab => ab(bb)))
      }
      first() {
        const ab = new bb,
          Ub = bb => {
            ab.notify(bb), Ab.unsubscribe()
          },
          Ab = this.subscribe(Ub),
          Mb = ab.unsubscribe.bind(ab);
        return this.withUnsubscribeOverride(ab, Mb, Ub)
      }
      takeWhile(ab) {
        const Ub = new bb,
          Ab = bb => {
            ab(bb) ? Ub.notify(bb) : Ub.unsubscribe(Ab)
          };
        this.subscribe(Ab);
        const Mb = Ub.unsubscribe.bind(Ub);
        return this.withUnsubscribeOverride(Ub, Mb, Ab)
      }
      filter(ab) {
        const Ub = new bb,
          Ab = bb => {
            ab(bb) && Ub.notify(bb)
          };
        this.subscribe(Ab);
        const Mb = Ub.unsubscribe.bind(Ub);
        return this.withUnsubscribeOverride(Ub, Mb, Ab)
      }
      merge() {
        const ab = new bb,
          Ub = [];
        for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
        Mb.forEach((bb => {
          const Ab = bb.subscribe((bb => {
            ab.notify(bb)
          }));
          Ub.push(Ab)
        }));
        const Eb = ab.unsubscribeAll.bind(ab);
        return ab.unsubscribe = () => {
          Ub.forEach((bb => bb.unsubscribe())), Eb()
        }, ab
      }
      withUnsubscribeOverride(bb, ab, Ub) {
        return bb.unsubscribe = bb => {
          ab(bb), this.unsubscribe(Ub)
        }, bb
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let DU = function(bb) {
      return bb.TRACE = "trace", bb.DEBUG = "debug", bb.INFO = "info", bb.LOG = "log", bb.WARN = "warn", bb.ERROR = "error", bb
    }({});
    const zU = "log",
      xU = ["trace", "debug", "info", "log", "warn", "error"];
    let iU, fU = !1;
    const mU = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      pU = "Error",
      NU = bb => bb.map((bb => Wb(bb) ? Qa(bb) : String(bb))).join(" ");

    function WU(bb) {
      let ab, Ub, Ab, Mb, Tb = [];
      if (rb(bb) && bb.error) ab = bb.error.message, Ub = bb.error.name, Tb = jU(bb.error);
      else if ((Ab = Kb(bb)) || ob(bb)) {
        const {
          name: Mb,
          message: Tb
        } = bb;
        Ub = null !== Mb && void 0 !== Mb ? Mb : Ab ? "DOMError" : "DOMException", ab = Tb ? `${Ub}: ${Tb}` : Ub
      } else ub(bb) ? (Ub = bb.name, ab = bb.message, Tb = jU(bb)) : (Wb(bb) || (Mb = Qb(bb))) && (Ub = Mb ? bb.constructor.name : void 0, ab = `Non-Error exception captured with keys: ${Object.keys(bb)}`);
      return [ab, Ub, Tb]
    }

    function HU(bb) {
      const [ab, Ub, Ab, Mb, Tb] = bb;
      let Eb, Yb, Bb = [];
      const eb = ib(ab),
        vb = MU(Ub, "?", Ab, Mb);
      return Tb || !eb ? ([Eb, Yb, Bb] = WU(null !== Tb && void 0 !== Tb ? Tb : ab), 0 === Bb.length && (Bb = [vb])) : eb && ([Eb, Yb] = function(bb) {
        var ab, Ub;
        const Ab = bb.match(mU),
          Mb = null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab[1]) && void 0 !== ab ? ab : pU;
        return [null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab[2]) && void 0 !== Ub ? Ub : bb, Mb]
      }(ab), Bb = [vb]), {
        value: Eb,
        type: Yb,
        stackFrames: Bb
      }
    }

    function IU(bb, ab) {
      return ub(bb[0]) ? HU(bb) : {
        value: ab(bb)
      }
    }
    const dU = bb => bb.map((bb => {
      try {
        return String(bb)
      } catch (ab) {
        return ""
      }
    })).join(" ");
    var FU = class bb extends aU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = UU, this.errorSerializer = dU
      }
      initialize() {
        var ab, Ub;
        const Ab = this.config.consoleInstrumentation,
          Mb = (null === Ab || void 0 === Ab ? void 0 : Ab.serializeErrors) || !!(null === Ab || void 0 === Ab ? void 0 : Ab.errorSerializer);
        this.errorSerializer = Mb ? null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab.errorSerializer) && void 0 !== ab ? ab : NU : dU;
        const Tb = null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.disabledLevels) && void 0 !== Ub ? Ub : bb.defaultDisabledLevels,
          Eb = function(bb) {
            if (iU || (iU = new ZU), !fU) {
              const ab = null !== bb && void 0 !== bb ? bb : Sa;
              xU.forEach((bb => {
                console[bb] = function() {
                  for (var Ub, Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
                  iU.notify({
                    type: "console",
                    level: bb,
                    args: Mb
                  }), null === (Ub = ab[bb]) || void 0 === Ub || Ub.apply(console, Mb)
                }
              })), fU = !0
            }
            return iU
          }(this.unpatchedConsole);
        this.subscription = Eb.subscribe((ab => {
          let {
            level: Ub,
            args: Mb
          } = ab;
          if (!Tb.includes(Ub)) try {
            if (Ub !== DU.ERROR || (null === Ab || void 0 === Ab ? void 0 : Ab.consoleErrorAsLog))
              if (Ub === DU.ERROR && (null === Ab || void 0 === Ab ? void 0 : Ab.consoleErrorAsLog)) {
                const {
                  value: ab,
                  type: Ab,
                  stackFrames: Tb
                } = IU(Mb, this.errorSerializer);
                this.api.pushLog(ab ? [bb.consoleErrorPrefix + ab] : Mb, {
                  level: Ub,
                  context: {
                    value: null !== ab && void 0 !== ab ? ab : "",
                    type: null !== Ab && void 0 !== Ab ? Ab : "",
                    stackFrames: (null === Tb || void 0 === Tb ? void 0 : Tb.length) ? NU(Tb) : ""
                  }
                })
              } else this.api.pushLog(Mb, {
                level: Ub
              });
            else {
              const {
                value: ab,
                type: Ub,
                stackFrames: Ab
              } = IU(Mb, this.errorSerializer);
              if (ab && !Ub && !Ab) return void this.api.pushError(new Error(bb.consoleErrorPrefix + ab));
              this.api.pushError(new Error(bb.consoleErrorPrefix + ab), {
                type: Ub,
                stackFrames: Ab
              })
            }
          } catch (Eb) {
            this.logError(Eb)
          }
        }))
      }
      destroy() {
        var bb;
        null === (bb = this.subscription) || void 0 === bb || bb.unsubscribe(), this.subscription = void 0
      }
    };
    FU.defaultDisabledLevels = [DU.DEBUG, DU.TRACE, DU.LOG], FU.consoleErrorPrefix = "console.error: ";
    const hU = [];
    var GU = class extends aU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = UU
      }
      initialize() {
        this.logDebug("Initializing"),
          function(bb) {
            const ab = window.onerror;
            window.onerror = function() {
              for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
              try {
                const {
                  value: ab,
                  type: Ub,
                  stackFrames: Mb
                } = HU(Ab), Tb = Ab[4];
                if (ab) {
                  const Ab = {
                    type: Ub,
                    stackFrames: Mb
                  };
                  null != Tb && (Ab.originalError = Tb), bb.pushError(new Error(ab), Ab)
                }
              } finally {
                null === ab || void 0 === ab || ab.apply(window, Ab)
              }
            }
          }(this.api),
          function(bb) {
            const ab = ab => {
              var Ub;
              let Ab, Mb, Tb = ab;
              if (Tb.reason) Tb = ab.reason;
              else if (null === (Ub = ab.detail) || void 0 === Ub ? void 0 : Ub.reason) {
                var Eb;
                Tb = null === (Eb = ab.detail) || void 0 === Eb ? void 0 : Eb.reason
              }
              let Yb = [];
              hb(Tb) ? (Ab = `Non-Error promise rejection captured with value: ${String(Tb)}`, Mb = "UnhandledRejection") : [Ab, Mb, Yb] = WU(Tb), Ab && bb.pushError(new Error(Ab), {
                type: Mb,
                stackFrames: Yb
              })
            };
            window.addEventListener("unhandledrejection", ab), hU.push(ab)
          }(this.api)
      }
    };
    const QU = "unknown";
    var qU = class extends aU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = UU, this.waitingForActivation = !1, this.sendViewChangedEvent = bb => {
          var ab;
          if (this.waitingForActivation || document.prerendering) return;
          const Ub = bb.view;
          if (Ub && Ub.name !== (null === (ab = this.notifiedView) || void 0 === ab ? void 0 : ab.name)) {
            var Ab, Mb, Tb;
            const bb = null !== (Ab = null === (Mb = this.notifiedView) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== Ab ? Ab : QU;
            this.notifiedView = Ub, this.api.pushEvent(xa, {
              fromView: bb,
              toView: null !== (Tb = Ub.name) && void 0 !== Tb ? Tb : QU
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
    class uU {
      t;
      o = 0;
      i = [];
      l(bb) {
        if (bb.hadRecentInput) return;
        const ab = this.i[0],
          Ub = this.i.at(-1);
        this.o && ab && Ub && bb.startTime - Ub.startTime < 1e3 && bb.startTime - ab.startTime < 5e3 ? (this.o += bb.value, this.i.push(bb)) : (this.o = bb.value, this.i = [bb]), this.t?.(bb)
      }
    }
    const rU = () => {
        const bb = performance.getEntriesByType("navigation")[0];
        if (bb && bb.responseStart > 0 && bb.responseStart < performance.now()) return bb
      },
      KU = bb => {
        if ("loading" === document.readyState) return "loading";
        const ab = rU();
        if (ab) {
          if (bb < ab.domInteractive) return "loading";
          if (0 === ab.domContentLoadedEventStart || bb < ab.domContentLoadedEventStart) return "dom-interactive";
          if (0 === ab.domComplete || bb < ab.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      oU = bb => {
        const ab = bb.nodeName;
        return 1 === bb.nodeType ? ab.toLowerCase() : ab.toUpperCase().replace(/^#/, "")
      },
      lU = bb => {
        let ab = "";
        try {
          for (; 9 !== bb?.nodeType;) {
            const Ub = bb,
              Ab = Ub.id ? "#" + Ub.id : [oU(Ub), ...Array.from(Ub.classList ?? []).sort()].join(".");
            if (ab.length + Ab.length > 99) return ab || Ab;
            if (ab = ab ? Ab + ">" + ab : Ab, Ub.id) break;
            bb = Ub.parentNode
          }
        } catch {}
        return ab
      },
      tU = new WeakMap;

    function wU(bb, ab) {
      let Ub = tU.get(ab);
      return Ub || (Ub = new WeakMap, tU.set(ab, Ub)), Ub.get(bb) || Ub.set(bb, new ab), Ub.get(bb)
    }
    let sU = -1;
    const gU = () => sU,
      CU = bb => {
        addEventListener("pageshow", (ab => {
          ab.persisted && (sU = ab.timeStamp, bb(ab))
        }), !0)
      },
      VU = (bb, ab, Ub, Ab) => {
        let Mb, Tb;
        return Eb => {
          ab.value >= 0 && (Eb || Ab) && (Tb = ab.value - (Mb ?? 0), (Tb || void 0 === Mb) && (Mb = ab.value, ab.delta = Tb, ab.rating = ((bb, ab) => bb > ab[1] ? "poor" : bb > ab[0] ? "needs-improvement" : "good")(ab.value, Ub), bb(ab)))
        }
      },
      OU = bb => {
        requestAnimationFrame((() => requestAnimationFrame((() => bb()))))
      },
      cU = () => rU()?.activationStart ?? 0;
    let JU = -1;
    const nU = new Set,
      SU = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      bA = bb => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === bb.type)
            for (const bb of nU) bb();
          isFinite(JU) || (JU = "visibilitychange" === bb.type ? bb.timeStamp : 0, removeEventListener("prerenderingchange", bA, !0))
        }
      },
      aA = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (JU = 1 / 0), JU < 0) {
          const bb = cU(),
            ab = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((ab => "hidden" === ab.name && ab.startTime >= bb))?.startTime;
          JU = ab ?? SU(), addEventListener("visibilitychange", bA, !0), addEventListener("prerenderingchange", bA, !0), CU((() => {
            setTimeout((() => {
              JU = SU()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return JU
          },
          onHidden(bb) {
            nU.add(bb)
          }
        }
      },
      UA = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Eb = arguments.length > 6 ? arguments[6] : void 0;
        const Yb = rU(),
          Bb = Yb?.navigationId || 0;
        let eb = "navigate";
        return Ub ? eb = Ub : gU() >= 0 ? eb = "back-forward-cache" : Yb && (document.prerendering || cU() > 0 ? eb = "prerender" : document.wasDiscarded ? eb = "restore" : Yb.type && (eb = Yb.type.replace(/_/g, "-"))), {
          name: bb,
          value: ab,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: eb,
          navigationId: Ab || Bb,
          navigationInteractionId: Mb,
          navigationURL: Tb || Yb?.name,
          navigationStartTime: Eb || 0
        }
      },
      AA = function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Ab = bb.filter((bb => PerformanceObserver.supportedEntryTypes.includes(bb)));
          if (Ab.length > 0) {
            const bb = new PerformanceObserver((bb => {
              queueMicrotask((() => {
                const Ub = bb.getEntries();
                Ab.length > 1 && Ub.sort(((bb, ab) => bb.startTime + bb.duration - (ab.startTime + ab.duration))), ab(Ub)
              }))
            }));
            for (const ab of Ab) bb.observe({
              type: ab,
              buffered: !0,
              ...Ub
            });
            return bb
          }
        } catch {}
      },
      MA = bb => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && bb && bb.reportSoftNavs,
      TA = (bb, ab) => {
        if (bb.set(ab.navigationId, ab), bb.size > 2) {
          const ab = bb.keys().next().value;
          void 0 !== ab && bb.delete(ab)
        }
      },
      EA = bb => {
        let ab = !1;
        return () => {
          ab || (bb(), ab = !0)
        }
      };
    class YA {
      u
    }
    const BA = bb => {
        document.prerendering ? addEventListener("prerenderingchange", bb, !0) : bb()
      },
      eA = [1800, 3e3],
      vA = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ub = MA(ab);
        BA((() => {
          const Ab = wU(ab, YA),
            Mb = aA();
          let Tb, Eb = UA("FCP");
          const Yb = AA(["paint"], (bb => {
            for (const ab of bb) "first-contentful-paint" === ab.name && (Yb.disconnect(), ab.startTime < Mb.firstHiddenTime && (Eb.value = Math.max(ab.startTime - cU(), 0), Eb.entries.push(ab), Eb.navigationId = ab.navigationId || Eb.navigationId, Tb(!0)))
          }));
          Yb && (Tb = VU(bb, Eb, eA, ab.reportAllChanges), CU((Ub => {
            Eb = UA("FCP", -1, "back-forward-cache", Eb.navigationId, Eb.navigationInteractionId, Eb.navigationURL, gU()), Tb = VU(bb, Eb, eA, ab.reportAllChanges), OU((() => {
              Eb.value = performance.now() - Ub.timeStamp, Tb(!0)
            }))
          }))), Ub && AA(["soft-navigation"], (Ub => {
            Ub.forEach((Ub => {
              Ab.u && Ub.navigationId && TA(Ab.u, Ub);
              const Mb = Math.max((Ub.presentationTime || Ub.paintTime || 0) - Ub.startTime, 0);
              Eb = UA("FCP", Mb, "soft-navigation", Ub.navigationId, Ub.interactionId, Ub.name, Ub.startTime), Tb = VU(bb, Eb, eA, ab.reportAllChanges), Tb(!0)
            }))
          }), ab)
        }))
      },
      LA = [.1, .25],
      PA = bb => bb.find((bb => 1 === bb.node?.nodeType)) || bb[0];
    let XA = 0,
      jA = 1 / 0,
      RA = 0;
    const kA = bb => {
      for (const ab of bb) ab.interactionId && (jA = Math.min(jA, ab.interactionId), RA = Math.max(RA, ab.interactionId), XA = RA ? (RA - jA) / 7 + 1 : 0)
    };
    let yA;
    const ZA = () => yA ? XA : performance.interactionCount ?? 0;
    class DA {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return ZA() - this.h
      }
      D() {
        this.h = ZA(), this.v.length = 0, this.p.clear()
      }
      S(bb) {
        const ab = this.T(),
          Ub = Math.min(this.v.length - 1, Math.floor(ab / 50));
        return !ab || -1 !== Ub || "soft-navigation" !== bb && "back-forward-cache" !== bb ? this.v[Ub] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(bb) {
        if (this.m?.(bb), !bb.interactionId) return;
        const ab = this.v.at(-1);
        let Ub = this.p.get(bb.interactionId);
        if (Ub || this.v.length < 10 || bb.duration > ab.k) {
          if (Ub ? bb.duration > Ub.k ? (Ub.entries = [bb], Ub.k = bb.duration) : bb.duration === Ub.k && bb.startTime === Ub.entries[0].startTime && Ub.entries.push(bb) : (Ub = {
              id: bb.interactionId,
              entries: [bb],
              k: bb.duration
            }, this.p.set(Ub.id, Ub), this.v.push(Ub)), this.v.sort(((bb, ab) => ab.k - bb.k)), this.v.length > 10) {
            const bb = this.v.splice(10);
            for (const ab of bb) this.p.delete(ab.id)
          }
          this.M?.(Ub)
        }
      }
    }
    const zA = bb => {
        const ab = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Ub = globalThis.requestIdleCallback || setTimeout,
          Ab = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) bb();
        else {
          const Mb = EA(bb);
          let Tb = -1;
          const Eb = () => {
            Ab(Tb), Mb()
          };
          addEventListener("visibilitychange", Eb, {
            once: !0,
            capture: !0
          }), Tb = Ub((() => {
            removeEventListener("visibilitychange", Eb, {
              capture: !0
            }), Mb()
          }), {
            timeout: ab
          })
        }
      },
      xA = [200, 500],
      iA = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ub = wU(ab = Object.assign({}, ab), DA);
        let Ab = [],
          Mb = [],
          Tb = 0;
        const Eb = new WeakMap,
          Yb = new WeakMap;
        let Bb = !1;
        const eb = () => {
            Bb || (Bb = !0, zA(vb))
          },
          vb = () => {
            const bb = new Set(Ub.v.map((bb => Eb.get(bb.entries[0])))),
              ab = Mb.length - 10;
            Mb = Mb.filter(((Ub, Ab) => Ab >= ab || bb.has(Ub)));
            const Yb = new Set;
            for (const Ub of Mb) {
              const bb = Lb(Ub.startTime, Ub.processingEnd);
              for (const ab of bb) Yb.add(ab)
            }
            const eb = Ab.length - 10;
            Ab = Ab.filter(((bb, ab) => Yb.has(bb) || ab >= eb && bb.startTime > Tb)), Bb = !1
          };
        Ub.m = bb => {
          const Ub = bb.startTime + bb.duration;
          let Ab;
          Tb = Math.max(Tb, bb.processingEnd);
          for (let Tb = Mb.length - 1; Tb >= 0; Tb--) {
            const Eb = Mb[Tb];
            if (Math.abs(Ub - Eb.renderTime) <= 8) {
              Ab = Eb, Ab.startTime = Math.min(bb.startTime, Ab.startTime), Ab.processingStart = Math.min(bb.processingStart, Ab.processingStart), Ab.processingEnd = Math.max(bb.processingEnd, Ab.processingEnd), ab.includeProcessedEventEntries && Ab.entries.push(bb);
              break
            }
          }
          Ab || (Ab = {
            startTime: bb.startTime,
            processingStart: bb.processingStart,
            processingEnd: bb.processingEnd,
            renderTime: Ub,
            entries: ab.includeProcessedEventEntries ? [bb] : []
          }, Mb.push(Ab)), bb.interactionId && Eb.set(bb, Ab), eb()
        }, Ub.M = bb => {
          if (!Yb.get(bb)) {
            const Ub = bb.entries.find((bb => bb.target))?.target;
            if (Ub) {
              const Ab = ab.generateTarget?.(Ub) ?? lU(Ub);
              Yb.set(bb, Ab)
            } else {
              const ab = bb.entries.find((bb => bb.targetSelector))?.targetSelector;
              ab && Yb.set(bb, ab)
            }
          }
        };
        const Lb = (bb, ab) => {
          const Ub = [];
          for (const Mb of Ab)
            if (!(Mb.startTime + Mb.duration < bb)) {
              if (Mb.startTime > ab) break;
              Ub.push(Mb)
            } return Ub
        };
        AA(["long-animation-frame"], (bb => {
            Ab = Ab.concat(bb), eb()
          }), ab),
          function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Ub = aA();
            BA((() => {
              "interactionCount" in performance || yA || (yA = AA(["event"], kA, {
                durationThreshold: 0
              }));
              let Ab, Mb = UA("INP");
              const Tb = wU(ab, DA),
                Eb = (Ub, Eb, Yb, Bb, eb) => {
                  Tb.D(), Mb = UA("INP", -1, Ub, Eb, Yb, Bb, eb), Ab = VU(bb, Mb, xA, ab.reportAllChanges)
                },
                Yb = () => {
                  const bb = Tb.S(Mb.navigationType);
                  bb && bb.k !== Mb.value && (Mb.value = bb.k, Mb.entries = bb.entries, Ab())
                },
                Bb = bb => {
                  Yb(), Ab(!0), Eb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                },
                eb = function(bb) {
                  let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  zA((() => {
                    for (const ab of bb) "soft-navigation" !== ab.entryType ? Tb.l(ab) : Bb(ab);
                    Yb(), ab && Ab(!0)
                  }))
                },
                vb = ["event", "first-input"];
              MA(ab) && vb.push("soft-navigation");
              const Lb = AA(vb, eb, {
                ...ab,
                durationThreshold: ab.durationThreshold ?? 40
              });
              Ab = VU(bb, Mb, xA, ab.reportAllChanges), Lb && (Ub.onHidden((() => {
                eb(Lb.takeRecords(), !0)
              })), CU((() => {
                Eb("back-forward-cache", Mb.navigationId, Mb.navigationInteractionId, Mb.navigationURL, gU())
              })))
            }))
          }((ab => {
            bb((bb => {
              if (0 === bb.entries.length) {
                const ab = bb.navigationStartTime || 0,
                  Ub = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: bb.value,
                    loadState: KU(ab)
                  };
                return Object.assign(bb, {
                  attribution: Ub
                })
              }
              const ab = bb.entries[0],
                Ab = Eb.get(ab),
                Mb = Math.max(Ab.processingStart, ab.startTime),
                Tb = Math.max(ab.startTime + ab.duration, Mb),
                Bb = Math.min(Ab.processingEnd, Tb),
                eb = Ab.entries.sort(((bb, ab) => bb.processingStart - ab.processingStart)),
                vb = Lb(ab.startTime, Bb),
                Pb = Ub.p.get(ab.interactionId),
                Xb = {
                  interactionTarget: Yb.get(Pb),
                  interactionType: ab.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: ab.startTime,
                  nextPaintTime: Tb,
                  processedEventEntries: eb,
                  longAnimationFrameEntries: vb,
                  inputDelay: Mb - ab.startTime,
                  processingDuration: Bb - Mb,
                  presentationDelay: Tb - Bb,
                  loadState: KU(ab.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (bb => {
                const ab = bb.interactionTime,
                  Ub = bb.nextPaintTime;
                if (!bb.longAnimationFrameEntries?.length || !ab || !Ub) return;
                const Ab = bb.inputDelay,
                  Mb = bb.processingDuration;
                let Tb, Eb, Yb = 0,
                  Bb = 0,
                  eb = 0,
                  vb = 0;
                for (const Xb of bb.longAnimationFrameEntries) {
                  Bb = Bb + Xb.startTime + Xb.duration - Xb.styleAndLayoutStart;
                  for (const bb of Xb.scripts) {
                    const Ub = bb.startTime + bb.duration;
                    if (Ub < ab) continue;
                    const eb = Ub - Math.max(ab, bb.startTime),
                      Lb = bb.duration ? eb / bb.duration * bb.forcedStyleAndLayoutDuration : 0;
                    Yb += eb - Lb, Bb += Lb, eb > vb && (Eb = bb.startTime < ab + Ab ? "input-delay" : bb.startTime >= ab + Ab + Mb ? "presentation-delay" : "processing-duration", Tb = bb, vb = eb)
                  }
                }
                const Lb = bb.longAnimationFrameEntries.at(-1),
                  Pb = Lb ? Lb.startTime + Lb.duration : 0;
                Pb >= ab + Ab + Mb && (eb = Ub - Pb), Tb && Eb && (bb.longestScript = {
                  entry: Tb,
                  subpart: Eb,
                  intersectingDuration: vb
                }), bb.totalScriptDuration = Yb, bb.totalStyleAndLayoutDuration = Bb, bb.totalPaintDuration = eb, bb.totalUnattributedDuration = Ub - ab - Yb - Bb - eb
              })(Xb), Object.assign(bb, {
                attribution: Xb
              })
            })(ab))
          }), ab)
      };
    class fA {
      m;
      u;
      l(bb) {
        this.m?.(bb)
      }
    }
    const mA = [2500, 4e3];
    let pA = 50;
    const NA = [];
    AA(["resource"], (bb => {
      for (const ab of bb) NA.push(ab), NA.length > pA && NA.shift()
    }));
    const WA = [800, 1800],
      HA = bb => {
        document.prerendering ? BA((() => HA(bb))) : "complete" !== document.readyState ? addEventListener("load", (() => HA(bb)), !0) : setTimeout(bb)
      },
      IA = "load_state",
      dA = "time_to_first_byte";
    var FA = class {
        constructor(bb, ab) {
          this.corePushMeasurement = bb, this.webVitalConfig = ab
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var bb;
          ! function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Ub = wU(ab = Object.assign({}, ab), uU),
              Ab = new WeakMap;
            Ub.t = bb => {
                if (bb?.sources?.length) {
                  const Ub = PA(bb.sources),
                    Mb = Ub?.node;
                  if (Mb) {
                    const bb = ab.generateTarget?.(Mb) ?? lU(Mb);
                    Ab.set(Ub, bb)
                  }
                }
              },
              function(bb) {
                let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Ub = aA();
                vA(EA((() => {
                  let Ab, Mb = UA("CLS", 0);
                  const Tb = wU(ab, uU),
                    Eb = (Ub, Eb, Yb, Bb, eb) => {
                      Mb = UA("CLS", 0, Ub, Eb, Yb, Bb, eb), Tb.o = 0, Ab = VU(bb, Mb, LA, ab.reportAllChanges)
                    },
                    Yb = function() {
                      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Tb.o > Mb.value && (Mb.value = Tb.o, Mb.entries = Tb.i), Ab(bb)
                    },
                    Bb = bb => {
                      Yb(!0), Eb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                    },
                    eb = bb => {
                      for (const ab of bb) "soft-navigation" !== ab.entryType ? Tb.l(ab) : Bb(ab);
                      Yb()
                    },
                    vb = ["layout-shift"];
                  MA(ab) && vb.push("soft-navigation");
                  const Lb = AA(vb, eb);
                  Lb && (Ab = VU(bb, Mb, LA, ab.reportAllChanges), Ub.onHidden((() => {
                    eb(Lb.takeRecords()), Ab(!0)
                  })), CU((() => {
                    Eb("back-forward-cache", Mb.navigationId, Mb.navigationInteractionId, Mb.navigationURL, gU()), OU(Ab)
                  })), setTimeout(Ab))
                })))
              }((ab => {
                bb((bb => {
                  let ab = {};
                  if (bb.entries.length) {
                    const Ub = bb.entries.reduce(((bb, ab) => bb.value > ab.value ? bb : ab));
                    if (Ub?.sources?.length) {
                      const bb = PA(Ub.sources);
                      bb && (ab = {
                        largestShiftTarget: Ab.get(bb),
                        largestShiftTime: Ub.startTime,
                        largestShiftValue: Ub.value,
                        largestShiftSource: bb,
                        largestShiftEntry: Ub,
                        loadState: KU(Ub.startTime)
                      })
                    }
                  }
                  return Object.assign(bb, {
                    attribution: ab
                  })
                })(ab))
              }), ab)
          }((bb => {
            const {
              loadState: ab,
              largestShiftValue: Ub,
              largestShiftTime: Ab,
              largestShiftTarget: Mb
            } = bb.attribution, Tb = this.buildInitialValues(bb);
            this.addIfPresent(Tb, "largest_shift_value", Ub), this.addIfPresent(Tb, "largest_shift_time", Ab);
            const Eb = this.buildInitialContext(bb);
            this.addIfPresent(Eb, IA, ab), this.addIfPresent(Eb, "largest_shift_target", Mb), this.pushMeasurement(Tb, Eb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureFCP() {
          var bb;
          ! function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Ub = wU(ab = Object.assign({}, ab), YA);
            MA(ab) && (Ub.u = new Map), vA((ab => {
              bb((bb => {
                let ab = {
                  timeToFirstByte: 0,
                  firstByteToFCP: bb.value,
                  loadState: KU(gU())
                };
                if ("soft-navigation" !== bb.navigationType) {
                  if (bb.entries.length) {
                    const Ub = rU(),
                      Ab = bb.entries.at(-1);
                    if (Ub) {
                      const Mb = Ub.responseStart,
                        Tb = Ub.activationStart || 0,
                        Eb = Math.max(0, Mb - Tb);
                      ab = {
                        timeToFirstByte: Eb,
                        firstByteToFCP: bb.value - Eb,
                        loadState: KU(bb.entries[0].startTime),
                        navigationEntry: Ub,
                        fcpEntry: Ab
                      }
                    }
                  }
                } else {
                  const Ab = Ub.u?.get(bb.navigationId);
                  Ab && (ab = {
                    timeToFirstByte: 0,
                    firstByteToFCP: bb.value,
                    loadState: "complete",
                    navigationEntry: Ab
                  })
                }
                return Object.assign(bb, {
                  attribution: ab
                })
              })(ab))
            }), ab)
          }((bb => {
            const {
              firstByteToFCP: ab,
              timeToFirstByte: Ub,
              loadState: Ab
            } = bb.attribution, Mb = this.buildInitialValues(bb);
            this.addIfPresent(Mb, "first_byte_to_fcp", ab), this.addIfPresent(Mb, dA, Ub);
            const Tb = this.buildInitialContext(bb);
            this.addIfPresent(Tb, IA, Ab), this.pushMeasurement(Mb, Tb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureINP() {
          var bb;
          iA((bb => {
            var ab;
            const {
              interactionTime: Ub,
              presentationDelay: Ab,
              inputDelay: Mb,
              processingDuration: Tb,
              nextPaintTime: Eb,
              loadState: Yb,
              interactionTarget: Bb,
              interactionType: eb,
              totalScriptDuration: vb,
              totalStyleAndLayoutDuration: Lb,
              totalPaintDuration: Pb,
              totalUnattributedDuration: Xb,
              longestScript: jb
            } = bb.attribution, Rb = this.buildInitialValues(bb);
            this.addIfPresent(Rb, "interaction_time", Ub), this.addIfPresent(Rb, "presentation_delay", Ab), this.addIfPresent(Rb, "input_delay", Mb), this.addIfPresent(Rb, "processing_duration", Tb), this.addIfPresent(Rb, "next_paint_time", Eb), this.addNumberIfDefined(Rb, "total_script_duration", vb), this.addNumberIfDefined(Rb, "total_style_and_layout_duration", Lb), this.addNumberIfDefined(Rb, "total_paint_duration", Pb), this.addNumberIfDefined(Rb, "total_unattributed_duration", Xb), this.addNumberIfDefined(Rb, "longest_script_intersecting_duration", null === jb || void 0 === jb ? void 0 : jb.intersectingDuration);
            const kb = this.buildInitialContext(bb);
            this.addIfPresent(kb, IA, Yb), this.addIfPresent(kb, "interaction_target", Bb), this.addIfPresent(kb, "interaction_type", eb), this.addIfPresent(kb, "longest_script_subpart", null === jb || void 0 === jb ? void 0 : jb.subpart), this.addIfPresent(kb, "longest_script_invoker_type", null === jb || void 0 === jb ? void 0 : jb.entry.invokerType), (null === (ab = this.webVitalConfig) || void 0 === ab ? void 0 : ab.trackAttributionSources) && (this.addIfPresent(kb, "longest_script_invoker", null === jb || void 0 === jb ? void 0 : jb.entry.invoker), this.addIfPresent(kb, "longest_script_source_url", null === jb || void 0 === jb ? void 0 : jb.entry.sourceURL), this.addIfPresent(kb, "longest_script_source_function_name", null === jb || void 0 === jb ? void 0 : jb.entry.sourceFunctionName), this.addIfPresent(kb, "longest_script_source_char_position", void 0 !== (null === jb || void 0 === jb ? void 0 : jb.entry.sourceCharPosition) ? String(jb.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Rb, kb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureLCP() {
          var bb;
          ! function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (ab = Object.assign({}, ab)).resourceBufferSize && (pA = ab.resourceBufferSize);
            const Ub = wU(ab, fA),
              Ab = new WeakMap;
            MA(ab) && (Ub.u = new Map), Ub.m = bb => {
                const Ub = bb.element;
                if (Ub) {
                  const Mb = ab.generateTarget?.(Ub) ?? lU(Ub);
                  Ab.set(bb, Mb)
                } else bb.id && Ab.set(bb, `#${bb.id}`)
              },
              function(bb) {
                let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Ub = !1;
                const Ab = MA(ab);
                BA((() => {
                  let Mb, Tb = aA(),
                    Eb = UA("LCP");
                  const Yb = wU(ab, fA),
                    Bb = (Ab, Yb, Bb, eb, vb) => {
                      Eb = UA("LCP", -1, Ab, Yb, Bb, eb, vb), Mb = VU(bb, Eb, mA, ab.reportAllChanges), Ub = !1, "soft-navigation" === Ab && (Tb = aA(!0))
                    },
                    eb = bb => {
                      Yb.u && bb.navigationId && TA(Yb.u, bb), Ub || Mb(!0), Bb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime);
                      const ab = bb.getLargestInteractionContentfulPaint?.();
                      ab && vb([ab])
                    },
                    vb = bb => {
                      ab.reportAllChanges || Ab || (bb = bb.slice(-1));
                      for (const ab of bb) {
                        if (!ab) continue;
                        if ("soft-navigation" === ab.entryType) {
                          eb(ab);
                          continue
                        }
                        let bb = 0,
                          Ub = [],
                          Ab = ab.startTime;
                        if ("largest-contentful-paint" === ab.entryType) bb = Math.max(ab.startTime - cU(), 0), Yb.l(ab), Ub = [ab];
                        else if ("interaction-contentful-paint" === ab.entryType) {
                          const Mb = ab;
                          if (!Eb.navigationId) continue;
                          if ("interactionId" in Mb && Mb.interactionId != Eb.navigationInteractionId) continue;
                          Ab = Mb.largestContentfulPaint?.renderTime || 0, bb = Math.max(Ab - ab.startTime, 0), Mb.largestContentfulPaint && (Yb.l(Mb.largestContentfulPaint), Ub = [Mb.largestContentfulPaint])
                        }
                        Ab < Tb.firstHiddenTime && (Eb.value = bb, Eb.entries = Ub, Mb())
                      }
                    },
                    Lb = ["largest-contentful-paint"];
                  Ab && Lb.push("interaction-contentful-paint", "soft-navigation");
                  const Pb = AA(Lb, vb);
                  if (Pb) {
                    Mb = VU(bb, Eb, mA, ab.reportAllChanges);
                    const Tb = ["keydown", "click", "visibilitychange"],
                      Yb = bb => {
                        if (bb.isTrusted && !Ub) {
                          const bb = Eb.id;
                          zA((() => {
                            if (!Ub) {
                              if (!Ab) {
                                Pb.disconnect();
                                for (const bb of Tb) removeEventListener(bb, Yb, {
                                  capture: !0
                                })
                              }
                              bb === Eb.id && (Ub = !0, Mb(!0))
                            }
                          }))
                        }
                      };
                    for (const bb of Tb) addEventListener(bb, Yb, {
                      capture: !0
                    });
                    CU((Ab => {
                      Bb("back-forward-cache", Eb.navigationId, Eb.navigationInteractionId, Eb.navigationURL, gU()), Mb = VU(bb, Eb, mA, ab.reportAllChanges), OU((() => {
                        Eb.value = performance.now() - Ab.timeStamp, Ub = !0, Mb(!0)
                      }))
                    }))
                  }
                }))
              }((ab => {
                bb((bb => {
                  let ab = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: bb.value
                  };
                  if (bb.entries.length) {
                    const Mb = bb.entries.at(-1),
                      Tb = bb => bb.name === Mb.url && (bb.requestStart || bb.startTime) <= Mb.startTime,
                      Eb = Mb.url && (NA.findLast(Tb) || performance.getEntriesByType("resource").findLast(Tb));
                    let Yb;
                    ab.target = Ab.get(Mb), ab.lcpEntry = Mb, Mb.url && (ab.url = Mb.url), Eb && (ab.lcpResourceEntry = Eb);
                    let Bb = 0,
                      eb = 0;
                    if ("soft-navigation" !== bb.navigationType ? (Yb = rU(), Bb = Yb?.activationStart ?? 0, eb = Yb?.responseStart ?? 0) : (Bb = bb.navigationStartTime || 0, Yb = Ub.u?.get(bb.navigationId)), Yb) {
                      const Ub = Math.max(0, eb - Bb),
                        Ab = Math.max(Ub, Eb ? (Eb.requestStart || Eb.startTime) - Bb : 0),
                        Mb = Math.min(bb.value, Math.max(Ab, Eb ? Eb.responseEnd - Bb : 0));
                      ab = {
                        ...ab,
                        timeToFirstByte: Ub,
                        resourceLoadDelay: Ab - Ub,
                        resourceLoadDuration: Mb - Ab,
                        elementRenderDelay: bb.value - Mb,
                        navigationEntry: Yb
                      }
                    }
                  }
                  return Object.assign(bb, {
                    attribution: ab
                  })
                })(ab))
              }), ab)
          }((bb => {
            var ab;
            const {
              elementRenderDelay: Ub,
              resourceLoadDelay: Ab,
              resourceLoadDuration: Mb,
              timeToFirstByte: Tb,
              target: Eb,
              url: Yb,
              lcpResourceEntry: Bb
            } = bb.attribution, eb = this.buildInitialValues(bb);
            this.addIfPresent(eb, "element_render_delay", Ub), this.addIfPresent(eb, "resource_load_delay", Ab), this.addIfPresent(eb, "resource_load_duration", Mb), this.addIfPresent(eb, dA, Tb);
            const vb = this.buildInitialContext(bb);
            this.addIfPresent(vb, "element", Eb), (null === (ab = this.webVitalConfig) || void 0 === ab ? void 0 : ab.trackAttributionSources) && (this.addIfPresent(vb, "resource_url", Yb), this.addIfPresent(vb, "resource_delivery_type", null === Bb || void 0 === Bb ? void 0 : Bb.deliveryType), this.addIfPresent(vb, "resource_initiator_type", null === Bb || void 0 === Bb ? void 0 : Bb.initiatorType)), this.pushMeasurement(eb, vb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureTTFB() {
          var bb;
          ! function(bb) {
            ! function(bb) {
              let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Ub = MA(ab);
              let Ab = UA("TTFB"),
                Mb = VU(bb, Ab, WA, ab.reportAllChanges);
              HA((() => {
                const Tb = rU();
                if (Tb) {
                  const Eb = Tb.responseStart;
                  Ab.value = Math.max(Eb - cU(), 0), Ab.entries = [Tb], Mb(!0), CU((() => {
                    Ab = UA("TTFB", 0, "back-forward-cache", Ab.navigationId, Ab.navigationInteractionId, Ab.navigationURL, gU()), Mb = VU(bb, Ab, WA, ab.reportAllChanges), Mb(!0)
                  })), Ub && AA(["soft-navigation"], (Ub => {
                    Ub.forEach((Ub => {
                      Ub.navigationId && (Ab = UA("TTFB", 0, "soft-navigation", Ub.navigationId, Ub.interactionId, Ub.name, Ub.startTime), Ab.entries = [Ub], Mb = VU(bb, Ab, WA, ab.reportAllChanges), Mb(!0))
                    }))
                  }), ab)
                }
              }))
            }((ab => {
              bb((bb => {
                const ab = bb.entries[0];
                let Ub = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: ab
                };
                if (bb.entries.length && ab instanceof PerformanceNavigationTiming) {
                  const Ab = ab.activationStart || 0,
                    Mb = Math.max((ab.workerStart || ab.fetchStart || 0) - Ab, 0),
                    Tb = Math.max(ab.domainLookupStart - Ab, 0),
                    Eb = Math.max(ab.connectStart - Ab, 0),
                    Yb = Math.max(ab.connectEnd - Ab, 0);
                  Ub = {
                    waitingDuration: Mb,
                    cacheDuration: Tb - Mb,
                    dnsDuration: Eb - Tb,
                    connectionDuration: Yb - Eb,
                    requestDuration: bb.value - Yb,
                    navigationEntry: ab
                  }
                }
                return Object.assign(bb, {
                  attribution: Ub
                })
              })(ab))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((bb => {
            const {
              dnsDuration: ab,
              connectionDuration: Ub,
              requestDuration: Ab,
              waitingDuration: Mb,
              cacheDuration: Tb
            } = bb.attribution, Eb = this.buildInitialValues(bb);
            this.addIfPresent(Eb, "dns_duration", ab), this.addIfPresent(Eb, "connection_duration", Ub), this.addIfPresent(Eb, "request_duration", Ab), this.addIfPresent(Eb, "waiting_duration", Mb), this.addIfPresent(Eb, "cache_duration", Tb);
            const Yb = this.buildInitialContext(bb);
            this.pushMeasurement(Eb, Yb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        buildInitialValues(bb) {
          return {
            [bb.name.toLowerCase()]: bb.value,
            delta: bb.delta
          }
        }
        buildInitialContext(bb) {
          var ab;
          const Ub = null !== (ab = ba("com.grafana.faro.lastNavigationId", Jb)) && void 0 !== ab ? ab : QU;
          return {
            id: bb.id,
            rating: bb.rating,
            navigation_type: bb.navigationType,
            navigation_entry_id: Ub
          }
        }
        pushMeasurement(bb, ab) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: bb
          }, {
            context: ab
          })
        }
        addIfPresent(bb, ab, Ub) {
          Ub && (bb[ab] = Ub)
        }
        addNumberIfDefined(bb, ab, Ub) {
          void 0 !== Ub && (bb[ab] = Ub)
        }
      },
      hA = class extends aU {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = UU
        }
        initialize() {
          this.logDebug("Initializing"), new FA(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const GA = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function QA() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const ab of bb)
        if ("traceparent" === ab.name) {
          if (!GA.test(ab.description)) continue;
          const [, bb, Ub] = ab.description.split("-");
          if (null != bb && null != Ub) return {
            traceId: bb,
            spanId: Ub
          };
          break
        }
    }

    function qA(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Ub,
        monoNow: Ab
      } = ab;
      return Math.min(Ub, Ub - (Ab - bb))
    }

    function uA(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Ub, Ab] of Object.entries(ab)) {
        const ab = bb[Ub];
        return null != ab && (Ib(Ab) ? Ab.includes(ab) : ab === Ab)
      }
      return !0
    }

    function rA(bb) {
      const {
        connectEnd: ab,
        connectStart: Ub,
        decodedBodySize: Ab,
        domainLookupEnd: Mb,
        domainLookupStart: Tb,
        duration: Eb,
        encodedBodySize: Yb,
        fetchStart: Bb,
        initiatorType: eb,
        name: vb,
        nextHopProtocol: Lb,
        redirectEnd: Pb,
        redirectStart: Xb,
        renderBlockingStatus: jb,
        requestStart: Rb,
        responseEnd: kb,
        responseStart: yb,
        responseStatus: Zb,
        secureConnectionStart: Db,
        transferSize: zb,
        workerStart: xb
      } = bb;
      return {
        name: vb,
        httpHost: oA(vb),
        duration: lA(Eb),
        tcpHandshakeTime: lA(ab - Ub),
        dnsLookupTime: lA(Mb - Tb),
        tlsNegotiationTime: lA(ab - Db),
        responseStatus: lA(Zb),
        redirectTime: lA(Pb - Xb),
        requestTime: lA(yb - Rb),
        responseTime: lA(kb - yb),
        fetchTime: lA(kb - Bb),
        serviceWorkerTime: lA(xb > 0 ? Bb - xb : 0),
        decodedBodySize: lA(Ab),
        encodedBodySize: lA(Yb),
        cacheHitStatus: function() {
          let bb = "fullLoad";
          0 === zb ? Ab > 0 && (bb = "cache") : null != Zb ? 304 === Zb && (bb = "conditionalFetch") : Yb > 0 && zb < Yb && (bb = "conditionalFetch");
          return bb
        }(),
        renderBlockingStatus: lA(jb),
        protocol: Lb,
        initiatorType: eb,
        visibilityState: document.visibilityState,
        ttfb: lA(yb - Rb),
        transferSize: lA(zb)
      }
    }

    function KA(bb) {
      const {
        activationStart: ab,
        domComplete: Ub,
        domContentLoadedEventEnd: Ab,
        domContentLoadedEventStart: Mb,
        domInteractive: Tb,
        fetchStart: Eb,
        loadEventEnd: Yb,
        loadEventStart: Bb,
        responseStart: eb,
        type: vb
      } = bb, Lb = function() {
        var bb;
        return null != (null === (bb = performance.timing) || void 0 === bb ? void 0 : bb.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return va(va({}, rA(bb)), {}, {
        pageLoadTime: lA(Ub - Eb),
        documentParsingTime: lA(Lb ? Tb - Lb : null),
        domProcessingTime: lA(Ub - Tb),
        domContentLoadHandlerTime: lA(Ab - Mb),
        onLoadTime: lA(Yb - Bb),
        ttfb: lA(Math.max(eb - (null !== ab && void 0 !== ab ? ab : 0), 0)),
        type: vb
      })
    }

    function oA(bb) {
      try {
        return new URL(bb).host || QU
      } catch (ab) {
        return QU
      }
    }

    function lA(bb) {
      return null == bb ? QU : "number" === typeof bb ? Math.round(bb > 0 ? bb : 0).toString() : bb.toString()
    }
    const tA = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function wA(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      try {
        var Yb = bb[Tb](Eb),
          Bb = Yb.value
      } catch (bb) {
        return void Ub(bb)
      }
      Yb.done ? ab(Bb) : Promise.resolve(Bb).then(Ab, Mb)
    }

    function sA(bb) {
      return function() {
        var ab = this,
          Ub = arguments;
        return new Promise((function(Ab, Mb) {
          var Tb = bb.apply(ab, Ub);

          function Eb(bb) {
            wA(Tb, Ab, Mb, Eb, Yb, "next", bb)
          }

          function Yb(bb) {
            wA(Tb, Ab, Mb, Eb, Yb, "throw", bb)
          }
          Eb(void 0)
        }))
      }
    }
    const gA = new ZU;
    var CA = class extends aU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = UU
      }
      initialize() {
        var bb = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let ab = !1;
        const Ub = () => {
          ! function(bb) {
            if ("complete" === document.readyState) bb();
            else {
              const ab = () => {
                "complete" === document.readyState && (bb(), document.removeEventListener("readystatechange", ab))
              };
              document.addEventListener("readystatechange", ab)
            }
          }(sA((function*() {
            if (ab) return;
            const Ub = bb.api.pushEvent,
              {
                faroNavigationId: Ab
              } = yield function(bb) {
                let ab;
                const Ub = new Promise((bb => {
                  ab = bb
                }));
                return new PerformanceObserver((Ub => {
                  var Ab;
                  const [Mb] = Ub.getEntries();
                  if (null == Mb || Ob(Mb.name)) return;
                  const Tb = Mb.toJSON();
                  let Eb = QA(null === Tb || void 0 === Tb ? void 0 : Tb.serverTiming);
                  const Yb = null !== (Ab = ba("com.grafana.faro.lastNavigationId", Jb)) && void 0 !== Ab ? Ab : QU,
                    Bb = va(va({}, KA(Tb)), {}, {
                      faroNavigationId: ya(),
                      faroPreviousNavigationId: Yb
                    });
                  aa("com.grafana.faro.lastNavigationId", Bb.faroNavigationId, Jb), bb("faro.performance.navigation", Bb, void 0, {
                    spanContext: Eb,
                    timestampOverwriteMs: qA(Tb.startTime)
                  }), ab(Bb)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Ub
              }(Ub);
            ab || null == Ab || function(bb, ab, Ub, Ab) {
              const Mb = Ab.trackResources;
              new PerformanceObserver((Ab => {
                const Tb = Ab.getEntries(),
                  Eb = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Yb of Tb) {
                  if (Ob(Yb.name)) continue;
                  null === Ub || void 0 === Ub || Ub.notify({
                    type: "resource"
                  });
                  const Ab = Yb.toJSON();
                  let Tb = QA(null === Ab || void 0 === Ab ? void 0 : Ab.serverTiming);
                  (null == Mb && uA(Ab, tA) || Mb) && ab("faro.performance.resource", va(va({}, rA(Ab)), {}, {
                    faroNavigationId: bb,
                    faroResourceId: ya()
                  }), void 0, {
                    spanContext: Tb,
                    timestampOverwriteMs: qA(Ab.startTime, Eb)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Ab, Ub, gA, bb.config)
          })))
        };
        this.cancelInitialization = () => {
          ab = !0, document.removeEventListener("prerenderingchange", Ub)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Ub, {
          once: !0
        }) : Ub()
      }
      destroy() {
        var bb;
        null === (bb = this.cancelInitialization) || void 0 === bb || bb.call(this), this.cancelInitialization = void 0
      }
    };
    const VA = "data-faro-user-action-name",
      OA = VA.replace(/-name$/, "-timeout"),
      cA = 1e3;

    function JA(bb) {
      return `data-${(bb.startsWith("data-")?bb.slice(5):bb).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function nA(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wa;
      if (void 0 === bb) return ab;
      let Ab = NaN;
      try {
        Ab = "string" === typeof bb && "" === bb.trim() ? NaN : Number(bb)
      } catch (Mb) {}
      return !Number.isFinite(Ab) || Ab <= 0 ? (Ub(`initialActivityTimeout must be a finite number greater than zero; using ${ab} ms`), ab) : Ab > 1e3 ? (Ub(`initialActivityTimeout cannot exceed ${cA} ms; clamping to the maximum`), cA) : Ab
    }

    function SA(bb, ab, Ub) {
      return void 0 !== bb && window.clearTimeout(bb), window.setTimeout((() => {
        ab()
      }), Ub)
    }

    function bM(bb) {
      return bb.type === yU
    }
    let aM, UM;

    function AM() {
      return aM || (aM = new ZU), UM || (UM = new MutationObserver(((bb, ab) => {
        aM.notify({
          type: "dom-mutation"
        })
      })), UM.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), aM
    }
    const MM = "fetch",
      TM = "xhr";
    let EM, YM, BM, eM, vM = !1;

    function LM() {
      if (EM) return EM;

      function bb(bb) {
        EM.notify({
          type: kU,
          request: bb
        })
      }

      function ab(bb) {
        EM.notify({
          type: yU,
          request: bb
        })
      }
      return EM = new ZU, vM || (! function(bb) {
        let {
          onRequestEnd: ab,
          onRequestStart: Ub
        } = bb;
        BM || (BM = window.fetch);
        window.fetch = function() {
          var bb, Ab;
          const Mb = null !== (bb = cb(arguments[0])) && void 0 !== bb ? bb : "",
            Tb = Ob(Mb),
            Eb = (null !== (Ab = arguments[1]) && void 0 !== Ab ? Ab : {}).method,
            Yb = ya();
          return Tb || Ub({
            url: Mb,
            method: Eb,
            requestId: Yb,
            apiType: MM
          }), BM.apply(this, arguments).then((bb => (Tb || ab({
            url: Mb,
            method: Eb,
            requestId: Yb,
            apiType: MM
          }), bb))).catch((bb => {
            throw Tb || ab({
              url: Mb,
              method: Eb,
              requestId: Yb,
              apiType: MM
            }), bb
          }))
        }
      }({
        onRequestStart: bb,
        onRequestEnd: ab
      }), function(bb) {
        let {
          onRequestStart: ab,
          onRequestEnd: Ub
        } = bb;
        YM || (YM = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const bb = arguments[1],
            Ab = Ob(bb),
            Mb = arguments[0],
            Tb = ya();
          this.addEventListener("loadstart", (function() {
            Ab || ab({
              url: bb,
              method: Mb,
              requestId: Tb,
              apiType: TM
            })
          })), this.addEventListener("load", (function() {
            Ab || Ub({
              url: bb,
              method: Mb,
              requestId: Tb,
              apiType: TM
            })
          })), this.addEventListener("error", (function() {
            Ab || Ub({
              url: bb,
              method: Mb,
              requestId: Tb,
              apiType: TM
            })
          })), this.addEventListener("abort", (function() {
            Ab || Ub({
              url: bb,
              method: Mb,
              requestId: Tb,
              apiType: TM
            })
          })), YM.apply(this, arguments)
        }
      }({
        onRequestStart: bb,
        onRequestEnd: ab
      }), vM = !0), EM
    }
    let PM, XM = !1;
    let jM = function(bb) {
      return bb[bb.Started = 0] = "Started", bb[bb.Halted = 1] = "Halted", bb[bb.Cancelled = 2] = "Cancelled", bb[bb.Ended = 3] = "Ended", bb
    }({});
    var RM = class {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = bb, this.logDebug = ab, this.initialActivityTimeout = Ub, this.http = LM(), this.dom = AM(), this.perf = (eM || (eM = new ZU), XM || (PM = gA.subscribe((bb => {
          "resource" === bb.type && eM.notify({
            type: "resource-entry"
          })
        })), XM = !0), eM), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new ZU).merge(this.http, this.dom, this.perf).takeWhile((() => [jM.Started, jM.Halted].includes(this.userAction.getState()))).filter((bb => !!(this.userAction.getState() !== jM.Halted || bM(bb) && this.runningRequests.has(bb.request.requestId)))).subscribe((bb => {
          (function(bb) {
            return bb.type === kU
          })(bb) && this.runningRequests.set(bb.request.requestId, bb.request), bM(bb) && this.runningRequests.delete(bb.request.requestId), bM(bb) ? this.userAction.getState() === jM.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((bb => [jM.Ended, jM.Cancelled].includes(bb))).first().subscribe((() => this.cleanup())), this.startupTid = SA(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === jM.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === jM.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = SA(this.haltTid, (() => {
          this.userAction.getState() === jM.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var bb, ab;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (bb = this.allMonitorsSub) || void 0 === bb || bb.unsubscribe(), null === (ab = this.stateSub) || void 0 === ab || ab.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(bb) {
        void 0 !== bb && window.clearTimeout(bb)
      }
    };

    function kM(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wa;
      var Ub;
      const {
        api: Ab,
        config: Mb,
        internalLogger: Tb
      } = bb, Eb = nA(null === (Ub = Mb.userActionsInstrumentation) || void 0 === Ub ? void 0 : Ub.initialActivityTimeout, 100, ab);
      return {
        processUserEvent: function(bb) {
          var ab, Ub;
          const Tb = null !== (ab = null === (Ub = Mb.userActionsInstrumentation) || void 0 === Ub ? void 0 : Ub.dataAttributeName) && void 0 !== ab ? ab : VA,
            Eb = bb.target;
          if (!(Eb instanceof Element)) return;
          const Yb = function(bb, ab) {
              let Ub = bb;
              for (; Ub;) {
                if (Ub.hasAttribute(ab)) return Ub;
                Ub = Ub.parentElement
              }
              return null
            }(Eb, JA(Tb)),
            Bb = function(bb, ab) {
              if (!bb) return;
              const Ub = function(bb) {
                  return JA(bb).slice(5).replace(/-(.)/g, ((bb, ab) => ab.toUpperCase()))
                }(ab),
                Ab = bb.dataset;
              for (const Mb in Ab)
                if (Mb === Ub) return Ab[Mb]
            }(Yb, Tb);
          if (!Yb || !Bb) return;
          const eb = function(bb, ab) {
            const Ub = bb.getAttribute(function(bb) {
              const ab = JA(bb);
              return ab.endsWith("-name") ? `${ab.slice(0,-5)}-timeout` : `${ab}-timeout`
            }(ab));
            return null === Ub ? void 0 : Number(Ub)
          }(Yb, Tb);
          Ab.startUserAction(Bb, {}, {
            triggerName: bb.type,
            initialActivityTimeout: eb
          })
        },
        processUserActionStarted: function(bb, Ub) {
          const Ab = bb,
            Mb = nA(Ub, Eb, ab);
          new RM(Ab, Tb.debug, Mb).attach()
        }
      }
    }
    const yM = "user_action_start",
      ZM = {
        Normal: "normal",
        Critical: "critical"
      };
    var DM = class {
        constructor() {
          this.buffer = []
        }
        addItem(bb) {
          this.buffer.push(bb)
        }
        flushBuffer(bb) {
          if (Hb(bb))
            for (const ab of this.buffer) bb(ab);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      zM = class extends ZU {
        constructor(bb) {
          let {
            name: ab,
            parentId: Ub,
            trigger: Ab,
            transports: Mb,
            attributes: Tb,
            trackUserActionsExcludeItem: Eb,
            importance: Yb = ZM.Normal,
            pushEvent: Bb
          } = bb;
          super(), this.name = ab, this.attributes = Tb, this.id = ya(), this.trigger = Ab, this.parentId = null !== Ub && void 0 !== Ub ? Ub : this.id, this.trackUserActionsExcludeItem = Eb, this.importance = Yb, this._pushEvent = Bb, this._itemBuffer = new DM, this._transports = Mb, this._state = 0, this._start()
        }
        addItem(bb) {
          return 0 === this._state && (this._itemBuffer.addItem(bb), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Pa(), this._startTimeMono = Xa())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((bb => {
            this._transports.execute(bb)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const bb = Pa(),
            ab = Xa() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((bb => {
            if (function(bb, ab) {
                return (null === ab || void 0 === ab ? void 0 : ab(bb)) || "measurement" === bb.type && "web-vitals" === bb.payload.type
              }(bb, this.trackUserActionsExcludeItem)) return void this._transports.execute(bb);
            const ab = na(na({}, bb), {}, {
              payload: na(na({}, bb.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(ab)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", na({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: bb.toString(),
            userActionDuration: ab.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, qa(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: bb => (bb.action = {
              id: this.id,
              name: this.name
            }, bb)
          })
        }
        getState() {
          return this._state
        }
      };
    const xM = new ZU;

    function iM(bb, ab) {
      return !!bb && (0 === (null === bb || void 0 === bb ? void 0 : bb.getState()) && (bb.addItem(ab), !0))
    }
    var fM = class extends aU {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = UU
        }
        initialize() {
          const {
            processUserEvent: bb,
            processUserActionStarted: ab
          } = kM(Rb, (bb => this.logWarn(bb)));
          this._processUserEvent = bb, this._processKeydown = ab => {
            [" ", "Enter"].includes(ab.key) && bb(ab)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = xM.subscribe((bb => {
            let {
              type: Ub,
              userAction: Ab,
              initialActivityTimeout: Mb
            } = bb;
            "user_action_start" === Ub && ab(Ab, Mb)
          }))
        }
        destroy() {
          var bb;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (bb = this._userActionSub) || void 0 === bb || bb.unsubscribe()
        }
      },
      mM = class extends aU {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = UU, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(bb) {
          const ab = {
            blockedURI: bb.blockedURI,
            columnNumber: bb.columnNumber,
            disposition: bb.disposition,
            documentURI: bb.documentURI,
            effectiveDirective: bb.effectiveDirective,
            lineNumber: bb.lineNumber,
            originalPolicy: bb.originalPolicy,
            referrer: bb.referrer,
            sample: bb.sample,
            sourceFile: bb.sourceFile,
            statusCode: bb.statusCode,
            violatedDirective: bb.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", qa(ab))
        }
      };
    var pM = class extends ZU {
      constructor(bb, ab) {
        var Ub, Ab, Mb, Tb;
        super(), this._tracking = !1, this.eventsObservable = bb, this._options = {
          inactivityMs: null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.inactivityMs) && void 0 !== Ub ? Ub : 100,
          drainTimeoutMs: null !== (Ab = null === ab || void 0 === ab ? void 0 : ab.drainTimeoutMs) && void 0 !== Ab ? Ab : 1e4,
          isOperationStart: null !== (Mb = null === ab || void 0 === ab ? void 0 : ab.isOperationStart) && void 0 !== Mb ? Mb : () => {},
          isOperationEnd: null !== (Tb = null === ab || void 0 === ab ? void 0 : ab.isOperationEnd) && void 0 !== Tb ? Tb : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((bb => {
          var ab;
          this._lastEventTime = Xa(), null === (ab = this._currentEvents) || void 0 === ab || ab.push(bb);
          const Ub = this._options.isOperationStart(bb);
          var Ab;
          Ub && (null === (Ab = this._activeOperations) || void 0 === Ab || Ab.set(Ub, !0));
          const Mb = this._options.isOperationEnd(bb);
          var Tb;
          Mb && (null === (Tb = this._activeOperations) || void 0 === Tb || Tb.delete(Mb));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Xa(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let bb;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), bb = this.hasActiveOperations() ? Xa() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: bb
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = NM(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = NM(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(bb) {
        bb && clearTimeout(bb)
      }
    };

    function NM(bb, ab, Ub) {
      return bb && clearTimeout(bb), bb = setTimeout((() => {
        ab()
      }), Ub)
    }
    let WM;
    const HM = new Set,
      IM = new Map;
    let dM, FM, hM, GM, QM, qM, uM, rM, KM = !1;
    var oM = class extends aU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = UU
      }
      initialize() {
        const bb = LM(),
          ab = AM(),
          Ub = function() {
            function bb(bb, ab) {
              const Ub = null !== ab && void 0 !== ab ? ab : location.href;
              Ub !== FM && (dM.notify({
                type: "url-change",
                from: FM,
                to: Ub,
                trigger: bb
              }), FM = Ub)
            }
            if (dM || (dM = new ZU, FM = location.href), !KM)
              if ("navigation" in window && "NavigateEvent" in window) {
                uM = ab => {
                  try {
                    const Ub = null === ab || void 0 === ab ? void 0 : ab.destination;
                    (null === Ub || void 0 === Ub ? void 0 : Ub.sameDocument) && "string" === typeof Ub.url && bb("navigate", Ub.url)
                  } catch (Ub) {}
                }, window.navigation.addEventListener("navigate", uM);
                const ab = window.NavigateEvent;
                ab && ab.prototype && "function" === typeof ab.prototype.intercept && (rM || (rM = ab.prototype.intercept), ab.prototype.intercept = function(ab) {
                  try {
                    const ab = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Ub = null === this || void 0 === this ? void 0 : this.destination;
                    ab && Ub && !1 === Ub.sameDocument && "string" === typeof Ub.url && bb("navigate-intercept", Ub.url)
                  } catch (Ub) {}
                  return rM.call(this, ab)
                }), KM = !0
              } else hM || (hM = window.history.pushState), window.history.pushState = function() {
                for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
                const Mb = hM.apply(window.history, Ub);
                return bb("pushState"), Mb
              }, GM || (GM = window.history.replaceState), window.history.replaceState = function() {
                for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
                const Mb = GM.apply(window.history, Ub);
                return bb("replaceState"), Mb
              }, QM = () => bb("popstate"), qM = () => bb("hashchange"), window.addEventListener("popstate", QM), window.addEventListener("hashchange", qM), KM = !0;
            return dM
          }(),
          Ab = (Mb = ["pointerdown", "keydown"], WM || (WM = new ZU), Mb.forEach((bb => {
            if (!HM.has(bb)) {
              const ab = () => {
                WM.notify({
                  type: "interaction",
                  name: bb
                })
              };
              window.addEventListener(bb, ab), HM.add(bb), IM.set(bb, ab)
            }
          })), WM);
        var Mb;
        const Tb = new pM((new ZU).merge(bb, ab, Ub), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: bb => function(bb) {
            return bb.type === kU
          }(bb) ? bb.request.requestId : void 0,
          isOperationEnd: bb => function(bb) {
            return bb.type === yU
          }(bb) ? bb.request.requestId : void 0
        });
        Tb.filter((bb => "tracking-ended" === bb.message)).subscribe((bb => {
          var ab, Ub;
          if ((null === (ab = bb.events) || void 0 === ab ? void 0 : ab.some((bb => "url-change" === bb.type))) && (null === (Ub = bb.events) || void 0 === Ub ? void 0 : Ub.some((bb => "dom-mutation" === bb.type)))) {
            var Ab;
            const ab = null === (Ab = bb.events) || void 0 === Ab ? void 0 : Ab.find((bb => "url-change" === bb.type));
            Rb.api.pushEvent("faro.navigation", {
              fromUrl: null === ab || void 0 === ab ? void 0 : ab.from,
              toUrl: null === ab || void 0 === ab ? void 0 : ab.to,
              sameDocument: String(!0),
              duration: bb.duration
            })
          }
        })), Ab.subscribe((() => {
          Tb.startTracking()
        }))
      }
    };

    function lM() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ab = [new fM, new GU, new hA, new AU, new qU, new oM];
      return !1 !== bb.enablePerformanceInstrumentation && ab.unshift(new CA), !1 !== bb.enableContentSecurityPolicyInstrumentation && ab.push(new mM), !1 !== bb.captureConsole && ab.push(new FU), ab
    }
    var tM = Ub(6343);
    let wM, sM;

    function gM() {
      const bb = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return wM === bb && sM || (sM = new tM.UAParser(bb).getResult(), wM = bb), sM
    }
    const CM = () => {
        const {
          browser: bb,
          os: ab,
          ua: Ub
        } = gM(), {
          name: Ab,
          version: Mb
        } = bb, {
          name: Tb,
          version: Eb
        } = ab, Yb = navigator.language, Bb = Ub.includes("Mobi"), eb = function() {
          if (!Ab || !Mb) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Ab && void 0 !== Ab ? Ab : QU,
            version: null !== Mb && void 0 !== Mb ? Mb : QU,
            os: `${null!==Tb&&void 0!==Tb?Tb:QU} ${null!==Eb&&void 0!==Eb?Eb:QU}`,
            userAgent: null !== Ub && void 0 !== Ub ? Ub : QU,
            language: null !== Yb && void 0 !== Yb ? Yb : QU,
            mobile: Bb,
            brands: null !== eb && void 0 !== eb ? eb : QU,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      VM = () => {
        const {
          name: bb,
          version: ab
        } = gM().os;
        if (!bb && !ab) return {};
        const Ub = {};
        return bb && (Ub.name = bb), ab && (Ub.version = ab), {
          os: Ub
        }
      };

    function OM(bb) {
      var ab, Ub, Ab;
      return {
        id: null !== (ab = null === (Ub = Rb.config) || void 0 === Ub || null === (Ub = Ub.sessionTracking) || void 0 === Ub || null === (Ab = Ub.generateSessionId) || void 0 === Ab ? void 0 : Ab.call(Ub)) && void 0 !== ab ? ab : ya(),
        attributes: bb
      }
    }
    const cM = () => ({
      sdk: {
        name: "faro-web",
        version: UU
      }
    });
    var JM = class extends bU {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let nM = function(bb) {
      return bb.EXCEPTION = "exception", bb.LOG = "log", bb.MEASUREMENT = "measurement", bb.TRACE = "trace", bb.EVENT = "event", bb
    }({});
    const SM = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function bT(bb, ab) {
      var Ub, Ab;
      if (void 0 === ab) return bb;
      if (void 0 === bb) return {
        resourceSpans: ab
      };
      const Mb = null === (Ub = bb.resourceSpans) || void 0 === Ub ? void 0 : Ub[0];
      if (void 0 === Mb) return bb;
      const Tb = (null === Mb || void 0 === Mb ? void 0 : Mb.scopeSpans) || [],
        Eb = (null === ab || void 0 === ab || null === (Ab = ab[0]) || void 0 === Ab ? void 0 : Ab.scopeSpans) || [];
      return na(na({}, bb), {}, {
        resourceSpans: [na(na({}, Mb), {}, {
          scopeSpans: [...Tb, ...Eb]
        })]
      })
    }

    function aT(bb) {
      let ab = {
        meta: {}
      };
      return void 0 !== bb[0] && (ab.meta = bb[0].meta), bb.forEach((bb => {
        switch (bb.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Ub = SM[bb.type],
              Ab = ab[Ub];
            ab = na(na({}, ab), {}, {
              [Ub]: void 0 === Ab ? [bb.payload] : [...Ab, bb.payload]
            });
            break
          }
          case "trace":
            ab = na(na({}, ab), {}, {
              traces: bT(ab.traces, bb.payload.resourceSpans)
            })
        }
      })), ab
    }
    var UT = class extends JM {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-console", this.version = UU
      }
      send(bb) {
        var ab;
        return this.unpatchedConsole[null !== (ab = this.options.level) && void 0 !== ab ? ab : DU.DEBUG]("New event", aT([bb]))
      }
    };
    const AT = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      MT = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      TT = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      ET = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      YT = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      BT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function eT(bb) {
      let {
        weekday: ab,
        day: Ub,
        month: Ab,
        year: Mb,
        hour: Tb,
        minute: Eb,
        second: Yb
      } = bb;
      if (Mb < 1900 || Ub < 1 || Tb > 23 || Eb > 59 || Yb > 60) return;
      const Bb = 60 === Yb,
        eb = new Date(0);
      return eb.setUTCFullYear(Mb, Ab, Ub), eb.setUTCHours(Tb, Eb, Bb ? 59 : Yb, 0), eb.getUTCDay() === ab && eb.getUTCDate() === Ub && eb.getUTCMonth() === Ab && eb.getUTCFullYear() === Mb && eb.getUTCHours() === Tb && eb.getUTCMinutes() === Eb && eb.getUTCSeconds() === (Bb ? 59 : Yb) ? eb.getTime() + (Bb ? 1e3 : 0) : void 0
    }
    var vT = class {
      constructor(bb) {
        this.options = bb, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var bb = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const ab = this.sequence++;
        let Ub = !1;
        return {
          deliver: function() {
            var Ub = sA((function*(Ub) {
              const Ab = bb.options.getNow();
              let Mb, Tb = 0;
              for (;;) {
                var Eb, Yb, Bb;
                const eb = bb.options.retry.maxAttempts - Tb,
                  vb = yield bb.runAttempt((() => Ub(eb, bb.unloading)), Tb > 0);
                if (Tb += vb.attemptsMade, "success" === vb.kind) return {
                  kind: "success",
                  attempts: Tb,
                  elapsedTimeMs: bb.options.getNow() - Ab
                };
                if (Mb = vb.failure, "terminal" === vb.kind || bb.unloading) return {
                  kind: "terminal",
                  attempts: Tb,
                  elapsedTimeMs: bb.options.getNow() - Ab,
                  failure: Mb
                };
                if (Tb >= bb.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Tb,
                  elapsedTimeMs: bb.options.getNow() - Ab,
                  failure: Mb,
                  reason: "retries-exhausted"
                };
                if (null != vb.retryAfterMs && vb.retryAfterMs > bb.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Tb,
                  elapsedTimeMs: bb.options.getNow() - Ab,
                  failure: Mb,
                  reason: "retry-after-too-long"
                };
                const Lb = Math.min(null !== (Eb = vb.retryAfterMs) && void 0 !== Eb ? Eb : bb.options.retry.initialBackoffMs * Math.pow(bb.options.retry.backoffMultiplier, Tb - 1), bb.options.retry.maxBackoffMs);
                if (null === (Yb = (Bb = bb.options).onRetry) || void 0 === Yb || Yb.call(Bb, Lb, Tb + 1), yield bb.waitForTurn(ab, Lb)) {
                  const ab = bb.options.retry.maxAttempts - Tb,
                    Mb = yield bb.runAttempt((() => Ub(ab, !0)));
                  return Tb += Mb.attemptsMade, {
                    kind: "success" === Mb.kind ? "success" : "terminal",
                    attempts: Tb,
                    elapsedTimeMs: bb.options.getNow() - Ab,
                    failure: "success" === Mb.kind ? void 0 : Mb.failure
                  }
                }
              }
            }));
            return function(bb) {
              return Ub.apply(this, arguments)
            }
          }(),
          release: () => {
            Ub || (Ub = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const bb = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const ab of bb) ab.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Ub, Ab) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const ab = () => {
                this.inProgress--, this.runNextAttempt()
              };
              bb().then((bb => {
                ab(), Ub(bb)
              }), (bb => {
                ab(), Ab(bb)
              }))
            },
            isRedelivery: ab
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const bb = this.options.getNow(),
            ab = this.attemptQueue.findIndex((ab => {
              let {
                isRedelivery: Ub
              } = ab;
              return this.unloading || !Ub || bb >= this.nextSendAt
            }));
          if (ab < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - bb)));
          const [Ub] = this.attemptQueue.splice(ab, 1);
          Ub.isRedelivery && !this.unloading && (this.nextSendAt = bb + 1), Ub.run()
        }
      }
      waitForTurn(bb, ab) {
        const Ub = Math.min(ab * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((ab => {
          this.waiting.push({
            sequence: bb,
            readyAt: this.options.getNow() + Ub,
            resolve: ab
          }), this.waiting.sort(((bb, ab) => bb.readyAt === ab.readyAt ? bb.sequence - ab.sequence : bb.readyAt - ab.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const bb = this.waiting[0],
          ab = bb.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const ab = this.waiting.indexOf(bb);
          ab >= 0 && this.waiting.splice(ab, 1), bb.resolve(!1), this.scheduleNext()
        }), Math.max(0, ab - this.options.getNow()))
      }
    };

    function LT(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if ({}.hasOwnProperty.call(bb, Ab)) {
            if (ab.includes(Ab)) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.includes(Ub) || {}.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function PT(bb) {
      const {
        size: ab,
        concurrency: Ub
      } = bb, Ab = [];
      let Mb = 0;
      const Tb = () => {
        if (Mb < Ub && Ab.length) {
          const {
            producer: bb,
            resolve: ab,
            reject: Ub
          } = Ab.shift();
          Mb++, bb().then((bb => {
            Mb--, Tb(), ab(bb)
          }), (bb => {
            Mb--, Tb(), Ub(bb)
          }))
        }
      };
      return {
        add: bb => {
          if (Ab.length + Mb >= ab) throw new Error("Task buffer full");
          return new Promise(((ab, Ub) => {
            Ab.push({
              producer: bb,
              resolve: ab,
              reject: Ub
            }), Tb()
          }))
        }
      }
    }
    const XT = ["headers"],
      jT = ["keepalive", "signal"],
      RT = new Set([408, 425, 429, 500, 502, 503, 504]),
      kT = new Set([429, 503]);
    let yT = 0,
      ZT = 0;
    var DT = class extends Error {};
    var zT = class extends JM {
      constructor(bb) {
        var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb;
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = UU, this.pendingCustomSends = 0, this.getNow = null !== (ab = bb.getNow) && void 0 !== ab ? ab : Date.now, this.requestTimeoutMs = null !== (Ub = bb.requestTimeoutMs) && void 0 !== Ub ? Ub : 1e4, this.compressionEnabled = null !== (Ab = bb.requestCompression) && void 0 !== Ab && Ab && "undefined" !== typeof CompressionStream, bb.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new vT({
          bufferSize: null !== (Mb = bb.bufferSize) && void 0 !== Mb ? Mb : 30,
          concurrency: null !== (Tb = bb.concurrency) && void 0 !== Tb ? Tb : 5,
          retry: {
            maxAttempts: null !== (Eb = null === (Yb = bb.retry) || void 0 === Yb ? void 0 : Yb.maxAttempts) && void 0 !== Eb ? Eb : 3,
            initialBackoffMs: null !== (Bb = null !== (eb = null === (vb = bb.retry) || void 0 === vb ? void 0 : vb.initialBackoffMs) && void 0 !== eb ? eb : bb.defaultRateLimitBackoffMs) && void 0 !== Bb ? Bb : 1e3,
            maxBackoffMs: null !== (Lb = null === (Pb = bb.retry) || void 0 === Pb ? void 0 : Pb.maxBackoffMs) && void 0 !== Lb ? Lb : 3e4,
            backoffMultiplier: null !== (Xb = null === (jb = bb.retry) || void 0 === jb ? void 0 : jb.backoffMultiplier) && void 0 !== Xb ? Xb : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Rb = bb.getRandom) && void 0 !== Rb ? Rb : Math.random,
          onRetry: (bb, ab) => {
            this.logDebug(`Retrying failed request after ${bb}ms. Attempt ${ab}.`)
          }
        }), this.customPromiseBuffer = PT({
          size: null !== (kb = bb.bufferSize) && void 0 !== kb ? kb : 30,
          concurrency: null !== (yb = bb.concurrency) && void 0 !== yb ? yb : 5
        }), this.defaultPromiseBuffer = {
          add: bb => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(bb);
            const ab = this.deliveryQueue.reserve();
            if (!ab) throw new Error("Task buffer full");
            return this.runBufferedTask(ab, bb)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (bb => {
          bb.persisted && this.deliveryQueue.resume()
        })))
      }
      send(bb) {
        var ab = this;
        return sA((function*() {
          const Ub = ab.promiseBuffer;
          if (Ub !== ab.defaultPromiseBuffer || Ub.add !== ab.defaultBufferAdd) {
            ab.pendingCustomSends++;
            try {
              yield Ub.add((() => ab.deliver(bb)))
            } catch (Ab) {
              ab.logError("Permanent delivery failure", {
                error: Ab,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              ab.pendingCustomSends--
            }
          } else yield ab.deliver(bb)
        }))()
      }
      runBufferedTask(bb, ab) {
        return sA((function*() {
          let Ub;
          try {
            return yield bb.deliver(sA((function*() {
              return Ub = yield ab(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Ub
          } finally {
            bb.release()
          }
        }))()
      }
      deliver(bb) {
        var ab = this;
        return sA((function*() {
          const Ub = ab.deliveryQueue.reserve();
          if (Ub) try {
            const Ab = yield ab.prepareRequest(bb), Mb = yield Ub.deliver(((bb, Ub) => ab.performAttempt(Ab, bb, Ub)));
            "terminal" === Mb.kind && ab.logError("retries-exhausted" === Mb.reason ? "Delivery retries exhausted" : "Permanent delivery failure", va(va({}, Mb.failure), {}, {
              reason: Mb.reason,
              attempts: Mb.attempts,
              elapsedTimeMs: Mb.elapsedTimeMs
            }))
          } catch (Ab) {
            ab.logError("Permanent delivery failure", {
              error: Ab,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Ub.release()
          } else ab.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var bb;
        return [this.options.url].concat(null !== (bb = this.config.ignoreUrls) && void 0 !== bb ? bb : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(bb) {
        var ab = this;
        return sA((function*() {
          var Ub, Ab;
          const Mb = aT(bb),
            Tb = null === (Ub = Mb.meta.session) || void 0 === Ub ? void 0 : Ub.id,
            Eb = JSON.stringify(Mb),
            Yb = null !== (Ab = ab.options.requestOptions) && void 0 !== Ab ? Ab : {},
            {
              headers: Bb = {}
            } = Yb,
            eb = LT(Yb, XT),
            {
              keepalive: vb,
              signal: Lb
            } = eb,
            Pb = LT(eb, jT),
            Xb = {};
          for (const [bb, ab] of Object.entries(Bb)) Xb[bb] = "function" === typeof ab ? yield ab(): ab;
          let jb = Eb,
            Rb = function(bb) {
              return "undefined" === typeof TextEncoder ? bb.length : (new TextEncoder).encode(bb).byteLength
            }(Eb);
          const kb = {};
          return ab.compressionEnabled && (jb = yield ab.compress(Eb), Rb = jb.size, kb["Content-Encoding"] = "gzip"), {
            bodySize: Rb,
            sessionId: Tb,
            requestInit: va({
              method: "POST",
              headers: va(va(va(va(va({
                "Content-Type": "application/json"
              }, kb), Xb), ab.options.apiKey ? {
                "x-api-key": ab.options.apiKey
              } : {}), Tb ? {
                "x-faro-session-id": Tb
              } : {}), {}, {
                "Idempotency-Key": ya(20)
              }),
              body: jb
            }, Pb)
          }
        }))()
      }
      performAttempt(bb, ab, Ub) {
        var Ab = this;
        return sA((function*() {
          var Mb;
          const Tb = null === (Mb = Ab.options.requestOptions) || void 0 === Mb ? void 0 : Mb.signal;
          if (null === Tb || void 0 === Tb ? void 0 : Tb.aborted) return {
            kind: "terminal",
            failure: {
              error: Tb.reason
            },
            attemptsMade: 0
          };
          let Eb = 0;
          try {
            var Yb;
            const Mb = yield Ab.fetchWithKeepaliveFallback(bb.requestInit, bb.bodySize, !!Ub || (null === (Yb = Ab.options.requestOptions) || void 0 === Yb ? void 0 : Yb.keepalive), ab, (() => Eb++));
            if (Ab.handleResponse(Mb, bb.sessionId), Mb.status >= 200 && Mb.status < 300) return {
              kind: "success",
              attemptsMade: Eb
            };
            const Tb = {
              status: Mb.status
            };
            return !RT.has(Mb.status) || Ub ? {
              kind: "terminal",
              failure: Tb,
              attemptsMade: Eb
            } : {
              kind: "retry",
              failure: Tb,
              attemptsMade: Eb,
              retryAfterMs: kT.has(Mb.status) ? Ab.getRetryAfterDelayMs(Mb) : void 0
            }
          } catch (Bb) {
            const bb = {
              error: Bb
            };
            return (null === Tb || void 0 === Tb ? void 0 : Tb.aborted) || !Ab.isFetchNetworkError(Bb) || Ub ? {
              kind: "terminal",
              failure: bb,
              attemptsMade: Eb
            } : {
              kind: "retry",
              failure: bb,
              attemptsMade: Eb
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(bb, ab, Ub, Ab, Mb) {
        var Tb = this;
        return sA((function*() {
          const Eb = Tb.getNow(),
            Yb = Tb.reserveKeepalive(ab, Ub);
          try {
            return yield Tb.fetchWithTimeout(va(va({}, bb), {}, {
              keepalive: Yb.keepalive
            }), Tb.requestTimeoutMs, Mb)
          } catch (eb) {
            var Bb;
            if (Yb.keepalive && Ab > 1 && Tb.isFetchNetworkError(eb) && !(eb instanceof DT) && !(null === (Bb = Tb.options.requestOptions) || void 0 === Bb || null === (Bb = Bb.signal) || void 0 === Bb ? void 0 : Bb.aborted)) {
              Tb.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const ab = Tb.requestTimeoutMs - (Tb.getNow() - Eb);
              return Tb.fetchWithTimeout(va(va({}, bb), {}, {
                keepalive: !1
              }), ab, Mb)
            }
            throw eb
          } finally {
            Yb.release()
          }
        }))()
      }
      fetchWithTimeout(bb, ab, Ub) {
        var Ab = this;
        return sA((function*() {
          var Mb;
          const Tb = null === (Mb = Ab.options.requestOptions) || void 0 === Mb ? void 0 : Mb.signal;
          if (Ab.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Ub(), fetch(Ab.options.url, va(va({}, bb), {}, {
            signal: Tb
          }));
          if (ab <= 0) throw new DT("Request timed out");
          const Eb = new AbortController,
            Yb = () => Eb.abort(null === Tb || void 0 === Tb ? void 0 : Tb.reason);
          null === Tb || void 0 === Tb || Tb.addEventListener("abort", Yb, {
            once: !0
          });
          let Bb = !1;
          const eb = setTimeout((() => {
            Bb = !0, Eb.abort()
          }), ab);
          try {
            return Ub(), yield fetch(Ab.options.url, va(va({}, bb), {}, {
              signal: Eb.signal
            }))
          } catch (vb) {
            if (Bb && !(null === Tb || void 0 === Tb ? void 0 : Tb.aborted)) throw new DT("Request timed out");
            throw vb
          } finally {
            clearTimeout(eb), null === Tb || void 0 === Tb || Tb.removeEventListener("abort", Yb)
          }
        }))()
      }
      getRetryAfterDelayMs(bb) {
        const ab = bb.headers.get("Retry-After");
        if (!ab) return;
        if (/^\d+$/.test(ab)) {
          const bb = 1e3 * Number(ab);
          return Number.isFinite(bb) ? bb : Number.POSITIVE_INFINITY
        }
        const Ub = this.getNow(),
          Ab = function(bb, ab) {
            const Ub = AT.exec(bb);
            if (Ub) {
              const [, bb, ab, Ab, Mb, Tb, Eb, Yb] = Ub;
              return eT({
                weekday: ET.indexOf(bb),
                day: Number(ab),
                month: BT.indexOf(Ab),
                year: Number(Mb),
                hour: Number(Tb),
                minute: Number(Eb),
                second: Number(Yb)
              })
            }
            const Ab = MT.exec(bb);
            if (Ab) {
              const [, bb, Ub, Eb, Yb, Bb, eb, vb] = Ab, Lb = new Date(ab);
              if (Number.isNaN(Lb.getTime())) return;
              const Pb = Lb.getUTCFullYear();
              let Xb = 100 * Math.floor(Pb / 100) + Number(Yb);
              Xb < Pb && (Xb += 100);
              const jb = BT.indexOf(Eb),
                Rb = {
                  month: jb,
                  day: Number(Ub),
                  hour: Number(Bb),
                  minute: Number(eb),
                  second: Number(vb),
                  millisecond: 0
                },
                kb = {
                  month: Lb.getUTCMonth(),
                  day: Lb.getUTCDate(),
                  hour: Lb.getUTCHours(),
                  minute: Lb.getUTCMinutes(),
                  second: Lb.getUTCSeconds(),
                  millisecond: Lb.getUTCMilliseconds()
                };
              return (Xb > Pb + 50 || Xb === Pb + 50 && (Tb = kb, ((Mb = Rb).month - Tb.month || Mb.day - Tb.day || Mb.hour - Tb.hour || Mb.minute - Tb.minute || Mb.second - Tb.second || Mb.millisecond - Tb.millisecond) > 0)) && (Xb -= 100), eT({
                weekday: YT.indexOf(bb),
                day: Number(Ub),
                month: jb,
                year: Xb,
                hour: Number(Bb),
                minute: Number(eb),
                second: Number(vb)
              })
            }
            var Mb, Tb;
            const Eb = TT.exec(bb);
            if (!Eb) return;
            const [, Yb, Bb, eb, vb, Lb, Pb, Xb, jb] = Eb;
            return eT({
              weekday: ET.indexOf(Yb),
              day: Number(null !== eb && void 0 !== eb ? eb : vb),
              month: BT.indexOf(Bb),
              year: Number(jb),
              hour: Number(Lb),
              minute: Number(Pb),
              second: Number(Xb)
            })
          }(ab, Ub);
        return null == Ab ? void 0 : Math.max(0, Ab - Ub)
      }
      reserveKeepalive(bb, ab) {
        if (!1 === ab || bb > 6e4 || yT + bb > 6e4 || ZT >= 9) return {
          keepalive: !1,
          release: wa
        };
        yT += bb, ZT++;
        let Ub = !1;
        return {
          keepalive: !0,
          release: () => {
            Ub || (Ub = !0, yT -= bb, ZT--)
          }
        }
      }
      handleResponse(bb, ab) {
        202 === bb.status && "invalid" === bb.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), ab), bb.text().catch(wa)
      }
      isFetchNetworkError(bb) {
        return bb instanceof TypeError || bb instanceof DT || bb instanceof DOMException && "AbortError" === bb.name
      }
      compress(bb) {
        return sA((function*() {
          const ab = [],
            Ub = new ReadableStream({
              start(ab) {
                ab.enqueue((new TextEncoder).encode(bb)), ab.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: bb,
              value: Ab
            } = yield Ub.read();
            if (bb) return new Blob(ab);
            ab.push(Ab)
          }
        }))()
      }
      extendFaroSession(bb, ab, Ub) {
        var Ab, Mb;
        const Tb = bb.sessionTracking;
        if (!(null === Tb || void 0 === Tb ? void 0 : Tb.enabled)) return void ab("Session expired.");
        const {
          fetchUserSession: Eb,
          storeUserSession: Yb
        } = ta(Tb), Bb = null === (Ab = this.metas.value.session) || void 0 === Ab ? void 0 : Ab.id, eb = null === (Mb = Eb()) || void 0 === Mb ? void 0 : Mb.sessionId;
        Ub && Ub === Bb && Ub === eb ? (Ia({
          fetchUserSession: Eb,
          storeUserSession: Yb
        })({
          forceSessionExtend: !0
        }), ab("Session expired; created new session.")) : ab("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const xT = () => {
      const bb = window.k6;
      return {
        k6: va({
          isK6Browser: !0
        }, (null === bb || void 0 === bb ? void 0 : bb.testRunId) && {
          testRunId: null === bb || void 0 === bb ? void 0 : bb.testRunId
        })
      }
    };
    let iT, fT;

    function mT() {
      let {
        generatePageId: bb,
        initialPageMeta: ab
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Ub = location.href;
        return Hb(bb) && iT !== Ub && (iT = Ub, fT = bb(location)), {
          page: va(va({
            url: Ub
          }, fT ? {
            id: fT
          } : {}), ab)
        }
      }
    }

    function pT() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sa,
        ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Ub = ga;
      return ab > 0 && (Ub.error = ab >= 1 ? function() {
        for (var ab = arguments.length, Ab = new Array(ab), Mb = 0; Mb < ab; Mb++) Ab[Mb] = arguments[Mb];
        bb.error(`${Ub.prefix}\n`, ...Ab)
      } : wa, Ub.warn = ab >= 2 ? function() {
        for (var ab = arguments.length, Ab = new Array(ab), Mb = 0; Mb < ab; Mb++) Ab[Mb] = arguments[Mb];
        bb.warn(`${Ub.prefix}\n`, ...Ab)
      } : wa, Ub.info = ab >= 3 ? function() {
        for (var ab = arguments.length, Ab = new Array(ab), Mb = 0; Mb < ab; Mb++) Ab[Mb] = arguments[Mb];
        bb.info(`${Ub.prefix}\n`, ...Ab)
      } : wa, Ub.debug = ab >= 4 ? function() {
        for (var ab = arguments.length, Ab = new Array(ab), Mb = 0; Mb < ab; Mb++) Ab[Mb] = arguments[Mb];
        bb.debug(`${Ub.prefix}\n`, ...Ab)
      } : wa), Ub
    }
    const NT = "faro",
      WT = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      HT = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function IT(bb) {
      var ab, Ub, Mb, Tb, Eb, Yb;
      const Bb = [],
        vb = pT(bb.unpatchedConsole, bb.internalLoggerLevel);
      bb.transports ? ((bb.url || bb.apiKey) && vb.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Bb.push(...bb.transports)) : bb.url ? Bb.push(new zT({
        url: bb.url,
        apiKey: bb.apiKey,
        requestCompression: bb.requestCompression
      })) : vb.error('either "url" or "transports" must be defined');
      const {
        dedupe: Lb = !0,
        eventDomain: Pb = Ab,
        globalObjectKey: Xb = NT,
        instrumentations: jb = lM(),
        internalLoggerLevel: Rb = Ca,
        isolate: kb = !1,
        logArgsSerializer: yb = dU,
        metas: Zb = FT(bb),
        paused: Db = !1,
        preventGlobalExposure: zb = !1,
        unpatchedConsole: xb = Sa,
        url: ib,
        experimental: fb
      } = bb, mb = LT(bb, HT), pb = null !== (ab = null === fb || void 0 === fb ? void 0 : fb.trackNavigation) && void 0 !== ab && ab, Nb = {
        dataAttributeName: JA(null !== (Ub = null === (Mb = bb.userActionsInstrumentation) || void 0 === Mb ? void 0 : Mb.dataAttributeName) && void 0 !== Ub ? Ub : VA),
        excludeItem: null === (Tb = bb.userActionsInstrumentation) || void 0 === Tb ? void 0 : Tb.excludeItem,
        initialActivityTimeout: nA(null === (Eb = bb.userActionsInstrumentation) || void 0 === Eb ? void 0 : Eb.initialActivityTimeout, 100, (bb => vb.warn(bb)))
      };
      return va(va({}, mb), {}, {
        batching: va(va({}, WT), bb.batching),
        dedupe: Lb,
        globalObjectKey: Xb,
        instrumentations: dT(jb, bb),
        internalLoggerLevel: Rb,
        isolate: kb,
        logArgsSerializer: yb,
        metas: Zb,
        parseStacktrace: RU,
        paused: Db,
        preventGlobalExposure: zb,
        transports: Bb,
        unpatchedConsole: xb,
        eventDomain: Pb,
        ignoreUrls: [...null !== (Yb = bb.ignoreUrls) && void 0 !== Yb ? Yb : [], ...ib ? [ib] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: va(va(va({}, eb), bb.sessionTracking), hT({
          trackGeolocation: bb.trackGeolocation,
          sessionTracking: bb.sessionTracking
        })),
        userActionsInstrumentation: Nb,
        experimental: {
          trackNavigation: pb
        }
      })
    }

    function dT(bb, ab) {
      let {
        experimental: Ub
      } = ab;
      var Ab;
      const Mb = null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.trackNavigation) && void 0 !== Ab && Ab;
      return bb.filter((bb => !("@grafana/faro-web-sdk:instrumentation-navigation" === bb.name && !Mb)))
    }

    function FT(bb) {
      var ab, Ub, Ab;
      const {
        page: Mb,
        generatePageId: Tb
      } = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.pageTracking) && void 0 !== ab ? ab : {}, Eb = [CM, VM, mT({
        generatePageId: Tb,
        initialPageMeta: Mb
      }), ...null !== (Ub = bb.metas) && void 0 !== Ub ? Ub : [], cM];
      return Wb(null === (Ab = window) || void 0 === Ab ? void 0 : Ab.k6) ? [...Eb, xT] : Eb
    }

    function hT(bb) {
      let {
        trackGeolocation: ab,
        sessionTracking: Ub
      } = bb;
      var Ab;
      const Mb = {};
      return pb(ab) && (Mb.geoLocationTrackingEnabled = ab), Cb(Mb) ? {} : {
        session: va(va({}, null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.session) && void 0 !== Ab ? Ab : {}), {}, {
          overrides: Mb
        })
      }
    }
    const GT = new WeakSet;

    function QT(bb) {
      return GT.add(bb), bb
    }

    function qT(bb, ab) {
      if (bb.capture) return QT(bb.capture(ab));
      const Ub = QT(bb.value);
      return null === ab || void 0 === ab || ab(), Ub
    }

    function uT(bb) {
      const ab = `__faroBundleId_${bb}`,
        Ub = null === vb || void 0 === vb ? void 0 : vb[ab];
      if ("string" === typeof Ub && "" !== Ub) return Ub;
      const Ab = "undefined" !== typeof window ? window[ab] : void 0;
      return "string" === typeof Ab && "" !== Ab ? Ab : void 0
    }

    function rT(bb) {
      var ab, Ub;
      const Ab = bb.config.app.name,
        Mb = Ab ? function(bb) {
          return null === vb || void 0 === vb ? void 0 : vb[`__faroGitHash_${bb}`]
        }(Ab) : void 0,
        Tb = {
          sdk: {
            version: UU,
            name: "faro"
          },
          app: na({
            bundleId: Ab && uT(Ab)
          }, void 0 !== Mb ? {
            gitHash: Mb
          } : {})
        },
        Eb = null === (ab = bb.config.sessionTracking) || void 0 === ab ? void 0 : ab.session;
      Eb && bb.api.setSession(Eb), bb.config.app && (Tb.app = na(na({}, bb.config.app), Tb.app)), bb.config.user && (Tb.user = bb.config.user), bb.config.view && (Tb.view = bb.config.view), bb.metas.add(Tb, ...null !== (Ub = bb.config.metas) && void 0 !== Ub ? Ub : [])
    }
    var KT = class {
      constructor(bb, ab) {
        var Ub, Ab;
        this.signalBuffer = [], this.itemLimit = null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.itemLimit) && void 0 !== Ub ? Ub : 50, this.sendTimeout = null !== (Ab = null === ab || void 0 === ab ? void 0 : ab.sendTimeout) && void 0 !== Ab ? Ab : 250, this.paused = (null === ab || void 0 === ab ? void 0 : ab.paused) || !1, this.sendFn = bb, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(bb) {
        this.paused || (this.signalBuffer.push(bb), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(bb) {
        const ab = new Map;
        return bb.forEach((bb => {
          const Ub = JSON.stringify(bb.meta);
          let Ab = ab.get(Ub);
          Ab = void 0 === Ab ? [bb] : [...Ab, bb], ab.set(Ub, Ab)
        })), Array.from(ab.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const bb = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(bb).forEach(this.sendFn)
        } catch (ab) {
          throw this.signalBuffer = [...bb, ...this.signalBuffer], this.trimBufferToLimit(), ab
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function oT(bb, ab, Ub, Ab) {
      var Mb;
      ab.debug("Initializing transports");
      const Tb = [];
      let Eb = [];
      const Yb = bb => {
        let ab = bb;
        for (const Ab of Eb) {
          const bb = ab.map(Ab).filter(Boolean);
          if (0 === bb.length) return [];
          ab = lT(bb, Ub)
        }
        return ab
      };
      let Bb;
      (null === (Mb = Ub.batching) || void 0 === Mb ? void 0 : Mb.enabled) && (Bb = new KT((bb => {
        const Ub = Yb(bb);
        if (0 !== Ub.length)
          for (const Ab of Tb) ab.debug(`Transporting item using ${Ab.name}\n`, Ub), Ab.isBatched() && Ab.send(Ub)
      }), {
        sendTimeout: Ub.batching.sendTimeout,
        itemLimit: Ub.batching.itemLimit,
        paused: Ub.paused
      }));
      return {
        add: function() {
          ab.debug("Adding transports");
          for (var Mb = arguments.length, Eb = new Array(Mb), Yb = 0; Yb < Mb; Yb++) Eb[Yb] = arguments[Yb];
          Eb.forEach((Mb => {
            ab.debug(`Adding "${Mb.name}" transport`), Tb.some((bb => bb === Mb)) ? ab.warn(`Transport ${Mb.name} is already added`) : (Mb.unpatchedConsole = bb, Mb.internalLogger = ab, Mb.config = Ub, Mb.metas = Ab, Tb.push(Mb))
          }))
        },
        addBeforeSendHooks: function() {
          ab.debug("Adding beforeSendHooks\n", Eb);
          for (var bb = arguments.length, Ub = new Array(bb), Ab = 0; Ab < bb; Ab++) Ub[Ab] = arguments[Ab];
          Ub.forEach((bb => {
            bb && Eb.push(bb)
          }))
        },
        getBeforeSendHooks: () => [...Eb],
        execute: bb => {
          var Mb;
          if (!Ub.paused && oa(Ab).shouldCapture()) {
            if (Lb = bb.meta, !GT.has(Lb)) {
              var Eb, eb, vb;
              const ab = null === (Eb = Ab.value.session) || void 0 === Eb ? void 0 : Eb.id,
                Mb = qT(Ab);
              if (Ub.paused) return;
              const Tb = na({}, bb.meta);
              (null === (eb = Tb.session) || void 0 === eb ? void 0 : eb.id) === ab && (null === (vb = Mb.session) || void 0 === vb ? void 0 : vb.id) !== ab && (void 0 === Mb.session ? delete Tb.session : Tb.session = Mb.session), bb = na(na({}, bb), {}, {
                meta: QT(Tb)
              })
            }
            var Lb;
            (null === (Mb = Ub.batching) || void 0 === Mb ? void 0 : Mb.enabled) && (null === Bb || void 0 === Bb || Bb.addItem(bb)), (bb => {
              var Ab;
              if ((null === (Ab = Ub.batching) || void 0 === Ab ? void 0 : Ab.enabled) && Tb.every((bb => bb.isBatched()))) return;
              const [Mb] = Yb([bb]);
              if (void 0 !== Mb)
                for (const Yb of Tb) {
                  var Eb;
                  ab.debug(`Transporting item using ${Yb.name}\n`, Mb), Yb.isBatched() ? (null === (Eb = Ub.batching) || void 0 === Eb ? void 0 : Eb.enabled) || Yb.send([Mb]) : Yb.send(Mb)
                }
            })(bb)
          }
        },
        isPaused: () => Ub.paused,
        pause: () => {
          ab.debug("Pausing transports"), null === Bb || void 0 === Bb || Bb.pause(), Ub.paused = !0
        },
        remove: function() {
          ab.debug("Removing transports");
          for (var bb = arguments.length, Ub = new Array(bb), Ab = 0; Ab < bb; Ab++) Ub[Ab] = arguments[Ab];
          Ub.forEach((bb => {
            ab.debug(`Removing "${bb.name}" transport`);
            const Ub = Tb.indexOf(bb); - 1 !== Ub ? Tb.splice(Ub, 1) : ab.warn(`Transport "${bb.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var bb = arguments.length, Ub = new Array(bb), Ab = 0; Ab < bb; Ab++) Ub[Ab] = arguments[Ab];
          ab.debug("Removing beforeSendHooks"), Eb = Eb.filter((bb => !Ub.includes(bb)))
        },
        get transports() {
          return [...Tb]
        },
        unpause: () => {
          ab.debug("Unpausing transports"), null === Bb || void 0 === Bb || Bb.start(), Ub.paused = !1
        }
      }
    }

    function lT(bb, ab) {
      if (ab.preserveOriginalError)
        for (const Ub of bb) "exception" === Ub.type && delete Ub.payload.originalError;
      return bb
    }
    let tT = Sa;

    function wT(bb) {
      var ab;
      return tT = null !== (ab = bb.unpatchedConsole) && void 0 !== ab ? ab : tT, tT
    }
    let sT, gT = ga;

    function CT(bb, ab) {
      return gT = pT(bb, ab.internalLoggerLevel), gT
    }

    function VT(bb) {
      let {
        internalLogger: ab,
        config: Ub,
        metas: Ab,
        transports: Mb,
        tracesApi: Tb,
        userActionsApi: Eb
      } = bb;
      var Yb;
      ab.debug("Initializing exceptions API");
      let Bb = null;
      sT = null !== (Yb = Ub.parseStacktrace) && void 0 !== Yb ? Yb : sT;
      const eb = bb => {
          ab.debug("Changing stacktrace parser"), sT = null !== bb && void 0 !== bb ? bb : sT
        },
        {
          ignoreErrors: vb = [],
          preserveOriginalError: Lb
        } = Ub;
      return eb(Ub.parseStacktrace), {
        changeStacktraceParser: eb,
        getStacktraceParser: () => sT,
        pushError: function(bb) {
          let {
            skipDedupe: Yb,
            stackFrames: eb,
            type: Pb,
            context: Xb,
            spanContext: jb,
            timestampOverwriteMs: Rb,
            originalError: kb,
            fingerprint: yb,
            fatal: Zb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(bb, ab) {
              const {
                message: Ub,
                name: Ab,
                stack: Mb
              } = ab;
              return Tb = bb, Eb = Ub + " " + Ab + " " + Mb, Tb.some((bb => ib(bb) ? Eb.includes(bb) : !!Eb.match(bb)));
              var Tb, Eb
            }(vb, null !== kb && void 0 !== kb ? kb : bb)) try {
            var Db, zb;
            if (!oa(Ab).shouldCapture()) return;
            const vb = qa(na(na({}, function(bb) {
                let ab = bb.cause;
                ub(ab) ? ab = bb.cause.toString() : null !== ab && (Wb(bb.cause) || Ib(bb.cause)) ? ab = Qa(bb.cause) : null != ab && (ab = bb.cause.toString());
                return null == ab ? {} : {
                  cause: ab
                }
              }(null !== kb && void 0 !== kb ? kb : bb)), null !== Xb && void 0 !== Xb ? Xb : {})),
              ib = na(na(na(na({
                type: Pb || bb.name || "Error",
                value: bb.message,
                timestamp: Rb ? Ra(Rb) : ja(),
                trace: jb ? {
                  trace_id: jb.traceId,
                  span_id: jb.spanId
                } : Tb.getTraceContext()
              }, Cb(vb) ? {} : {
                context: vb
              }), Lb ? {
                originalError: kb
              } : {}), yb ? {
                fingerprint: yb
              } : {}), void 0 !== Zb ? {
                fatal: Zb
              } : {});
            eb = null !== (Db = eb) && void 0 !== Db ? Db : bb.stack ? null === sT || void 0 === sT ? void 0 : sT(bb).frames : void 0, (null === eb || void 0 === eb ? void 0 : eb.length) && (ib.stacktrace = {
              frames: eb
            });
            const fb = {
              type: ib.type,
              value: ib.value,
              stacktrace: ib.stacktrace,
              context: ib.context,
              fingerprint: ib.fingerprint,
              fatal: null !== (zb = ib.fatal) && void 0 !== zb && zb
            };
            if (!Yb && Ub.dedupe && !xb(Bb) && Za(fb, Bb)) return void ab.debug("Skipping error push because it is the same as the last one\n", ib);
            const mb = Bb,
              pb = qT(Ab);
            if (Bb !== mb && !Yb && Ub.dedupe && Za(fb, Bb)) return;
            Bb = fb;
            const Nb = {
              meta: pb,
              payload: ib,
              type: "exception"
            };
            ab.debug("Pushing exception\n", Nb), iM(Eb.getActiveUserAction(), Nb) || Mb.execute(Nb)
          } catch (fb) {
            ab.error("Error pushing event", fb)
          }
        }
      }
    }

    function OT(bb, ab, Ub, Ab, Mb) {
      ab.debug("Initializing API");
      let Tb = null;
      const Eb = function(bb) {
          let {
            transports: ab,
            internalLogger: Ub,
            config: Ab,
            pushEvent: Mb
          } = bb;
          var Tb;
          const Eb = null === (Tb = Ab.userActionsInstrumentation) || void 0 === Tb ? void 0 : Tb.excludeItem;
          let Yb;
          const Bb = () => Yb;
          return {
            startUserAction: (bb, Ab, Tb) => {
              if (void 0 === Bb()) {
                const Ub = new zM({
                  name: bb,
                  transports: ab,
                  attributes: Ab,
                  trigger: (null === Tb || void 0 === Tb ? void 0 : Tb.triggerName) || "faroApiCall",
                  importance: (null === Tb || void 0 === Tb ? void 0 : Tb.importance) || ZM.Normal,
                  trackUserActionsExcludeItem: Eb,
                  pushEvent: Mb
                });
                return Ub.filter((bb => [3, 2].includes(bb))).first().subscribe((() => {
                  Yb = void 0
                })), xM.notify({
                  type: yM,
                  userAction: Ub,
                  initialActivityTimeout: null === Tb || void 0 === Tb ? void 0 : Tb.initialActivityTimeout
                }), Yb = Ub, Yb
              }
              Ub.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Bb
          }
        }({
          transports: Mb,
          config: Ub,
          internalLogger: ab,
          pushEvent: (bb, Ub, Ab, Mb) => {
            Tb ? Tb(bb, Ub, Ab, Mb) : ab.warn("pushEventImpl is not initialized. Event dropped:", {
              name: bb,
              attributes: Ub,
              domain: Ab,
              options: Mb
            })
          }
        }),
        Yb = function(bb, ab, Ub, Ab, Mb) {
          let Tb;
          return ab.debug("Initializing traces API"), {
            getOTEL: () => Tb,
            getTraceContext: () => {
              const bb = null === Tb || void 0 === Tb ? void 0 : Tb.trace.getSpanContext(Tb.context.active());
              return bb ? {
                trace_id: bb.traceId,
                span_id: bb.spanId
              } : void 0
            },
            initOTEL: (bb, Ub) => {
              ab.debug("Initializing OpenTelemetry"), Tb = {
                trace: bb,
                context: Ub
              }
            },
            isOTELInitialized: () => !!Tb,
            pushTraces: bb => {
              try {
                if (!oa(Ab).shouldCapture()) return;
                const Ub = {
                  type: "trace",
                  payload: bb,
                  meta: qT(Ab)
                };
                ab.debug("Pushing trace\n", Ub), Mb.execute(Ub)
              } catch (Ub) {
                ab.error("Error pushing trace\n", Ub)
              }
            }
          }
        }(0, ab, 0, Ab, Mb),
        Bb = {
          unpatchedConsole: bb,
          internalLogger: ab,
          userActionsApi: Eb,
          config: Ub,
          metas: Ab,
          transports: Mb,
          tracesApi: Yb
        },
        eb = function(bb) {
          let {
            internalLogger: ab,
            config: Ub,
            metas: Ab,
            transports: Mb,
            tracesApi: Tb,
            userActionsApi: Eb
          } = bb, Yb = null;
          return {
            pushEvent: function(bb, Bb, eb) {
              let {
                skipDedupe: vb,
                spanContext: Lb,
                timestampOverwriteMs: Pb,
                customPayloadTransformer: Xb = bb => bb
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!oa(Ab).shouldCapture()) return;
                const jb = qa(Bb),
                  Rb = Xb({
                    name: bb,
                    domain: null !== eb && void 0 !== eb ? eb : Ub.eventDomain,
                    attributes: Cb(jb) ? void 0 : jb,
                    timestamp: Pb ? Ra(Pb) : ja(),
                    trace: Lb ? {
                      trace_id: Lb.traceId,
                      span_id: Lb.spanId
                    } : Tb.getTraceContext()
                  }),
                  kb = {
                    name: Rb.name,
                    attributes: Rb.attributes,
                    domain: Rb.domain
                  };
                if (!vb && Ub.dedupe && !xb(Yb) && Za(kb, Yb)) return void ab.debug("Skipping event push because it is the same as the last one\n", Rb);
                const yb = Yb,
                  Zb = qT(Ab);
                if (Yb !== yb && !vb && Ub.dedupe && Za(kb, Yb)) return;
                Yb = kb;
                const Db = {
                  meta: Zb,
                  payload: Rb,
                  type: "event"
                };
                ab.debug("Pushing event\n", Db), iM(Eb.getActiveUserAction(), Db) || Mb.execute(Db)
              } catch (jb) {
                ab.error("Error pushing event", jb)
              }
            }
          }
        }(Bb);
      return Tb = eb.pushEvent, na(na(na(na(na(na(na({}, Yb), VT(Bb)), function(bb) {
        let ab, Ub, Ab, Mb, {
          internalLogger: Tb,
          metas: Eb
        } = bb;
        Tb.debug("Initializing meta API");
        const Yb = bb => {
            Ub && Eb.remove(Ub), Ub = {
              user: bb
            }, Eb.add(Ub)
          },
          Bb = (bb, Ub) => {
            var Ab;
            const Mb = null === Ub || void 0 === Ub ? void 0 : Ub.overrides,
              Tb = Mb ? {
                overrides: na(na({}, null === ab || void 0 === ab || null === (Ab = ab.session) || void 0 === Ab ? void 0 : Ab.overrides), Mb)
              } : {};
            ab && Eb.remove(ab), ab = {
              session: na(na({}, Cb(bb) ? void 0 : bb), Tb)
            }, Eb.add(ab)
          },
          eb = (bb, ab) => {
            oa(Eb).notifySessionUpdate({
              type: "replace",
              session: bb,
              overrides: null === ab || void 0 === ab ? void 0 : ab.overrides
            }), Bb(bb, ab)
          },
          vb = () => Eb.value.session,
          Lb = () => Eb.value.page;
        return {
          setUser: Yb,
          resetUser: Yb,
          setSession: eb,
          resetSession: eb,
          getSession: vb,
          setView: (bb, ab) => {
            var Ub;
            if ((null === ab || void 0 === ab ? void 0 : ab.overrides) && (oa(Eb).notifySessionUpdate({
                type: "overrides",
                overrides: ab.overrides
              }), Bb(vb(), {
                overrides: ab.overrides
              })), (null === Ab || void 0 === Ab || null === (Ub = Ab.view) || void 0 === Ub ? void 0 : Ub.name) === (null === bb || void 0 === bb ? void 0 : bb.name)) return;
            const Mb = Ab;
            Ab = {
              view: bb
            }, Eb.add(Ab), Mb && Eb.remove(Mb)
          },
          getView: () => Eb.value.view,
          setPage: bb => {
            var ab;
            const Ub = ib(bb) ? na(na({}, null !== (ab = null === Mb || void 0 === Mb ? void 0 : Mb.page) && void 0 !== ab ? ab : Lb()), {}, {
              id: bb
            }) : bb;
            Mb && Eb.remove(Mb), Mb = {
              page: Ub
            }, Eb.add(Mb)
          },
          getPage: Lb
        }
      }(Bb)), function(bb) {
        let {
          internalLogger: ab,
          config: Ub,
          metas: Ab,
          transports: Mb,
          tracesApi: Tb,
          userActionsApi: Eb
        } = bb;
        var Yb;
        ab.debug("Initializing logs API");
        let Bb = null;
        const eb = null !== (Yb = Ub.logArgsSerializer) && void 0 !== Yb ? Yb : dU;
        return {
          pushLog: function(bb) {
            let {
              context: Yb,
              level: vb,
              skipDedupe: Lb,
              spanContext: Pb,
              timestampOverwriteMs: Xb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!oa(Ab).shouldCapture()) return;
              const jb = qa(Yb),
                Rb = {
                  message: eb(bb),
                  level: null !== vb && void 0 !== vb ? vb : "log",
                  context: Cb(jb) ? void 0 : jb,
                  timestamp: Xb ? Ra(Xb) : ja(),
                  trace: Pb ? {
                    trace_id: Pb.traceId,
                    span_id: Pb.spanId
                  } : Tb.getTraceContext()
                },
                kb = {
                  message: Rb.message,
                  level: Rb.level,
                  context: Rb.context
                };
              if (!Lb && Ub.dedupe && !xb(Bb) && Za(kb, Bb)) return void ab.debug("Skipping log push because it is the same as the last one\n", Rb);
              const yb = Bb,
                Zb = qT(Ab);
              if (Bb !== yb && !Lb && Ub.dedupe && Za(kb, Bb)) return;
              Bb = kb;
              const Db = {
                type: "log",
                payload: Rb,
                meta: Zb
              };
              ab.debug("Pushing log\n", Db), iM(Eb.getActiveUserAction(), Db) || Mb.execute(Db)
            } catch (jb) {
              ab.error("Error pushing log\n", jb)
            }
          }
        }
      }(Bb)), function(bb) {
        let {
          internalLogger: ab,
          config: Ub,
          metas: Ab,
          transports: Mb,
          tracesApi: Tb,
          userActionsApi: Eb
        } = bb;
        ab.debug("Initializing measurements API");
        let Yb = null;
        return {
          pushMeasurement: function(bb) {
            let {
              skipDedupe: Bb,
              context: eb,
              spanContext: vb,
              timestampOverwriteMs: Lb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!oa(Ab).shouldCapture()) return;
              const Pb = qa(eb),
                Xb = na(na({}, bb), {}, {
                  trace: vb ? {
                    trace_id: vb.traceId,
                    span_id: vb.spanId
                  } : Tb.getTraceContext(),
                  timestamp: Lb ? Ra(Lb) : ja(),
                  context: Cb(Pb) ? void 0 : Pb
                }),
                jb = {
                  type: Xb.type,
                  values: Xb.values,
                  context: Xb.context
                };
              if (!Bb && Ub.dedupe && !xb(Yb) && Za(jb, Yb)) return void ab.debug("Skipping measurement push because it is the same as the last one\n", Xb);
              const Rb = Yb,
                kb = qT(Ab);
              if (Yb !== Rb && !Bb && Ub.dedupe && Za(jb, Yb)) return;
              Yb = jb;
              const yb = {
                type: "measurement",
                payload: Xb,
                meta: kb
              };
              ab.debug("Pushing measurement\n", yb), iM(Eb.getActiveUserAction(), yb) || Mb.execute(yb)
            } catch (Pb) {
              ab.error("Error pushing measurement\n", Pb)
            }
          }
        }
      }(Bb)), eb), Eb)
    }

    function cT(bb) {
      const ab = wT(bb),
        Ub = CT(ab, bb);
      if (jb() && !bb.isolate) return void Ub.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Ub.debug("Initializing");
      const Ab = function(bb, ab) {
          let Ub, Ab = [],
            Mb = [],
            Tb = [],
            Eb = 0,
            Yb = 0;
          const Bb = () => Ab.reduce(((bb, ab) => Object.assign(bb, Hb(ab) ? ab() : ab)), {}),
            eb = () => {
              if (Mb.length) {
                const bb = Bb();
                Mb.forEach((ab => ab(bb)))
              }
            };
          return {
            add: function() {
              for (var bb = arguments.length, Ub = new Array(bb), Mb = 0; Mb < bb; Mb++) Ub[Mb] = arguments[Mb];
              ab.debug("Adding metas\n", Ub), Ab.push(...Ub), eb()
            },
            remove: function() {
              for (var bb = arguments.length, Ub = new Array(bb), Mb = 0; Mb < bb; Mb++) Ub[Mb] = arguments[Mb];
              ab.debug("Removing metas\n", Ub), Ab = Ab.filter((bb => !Ub.includes(bb))), eb()
            },
            addListener: bb => {
              ab.debug("Adding metas listener\n", bb), Mb.push(bb)
            },
            removeListener: bb => {
              ab.debug("Removing metas listener\n", bb), Mb = Mb.filter((ab => ab !== bb))
            },
            capture: bb => {
              var ab;
              const Ab = void 0 !== Ub,
                Mb = null !== (ab = Ub) && void 0 !== ab ? ab : Tb;
              Ab || (Ub = Mb, Eb = 0, Yb = Mb.length);
              try {
                for (; Eb < Yb;) {
                  const bb = Mb[Eb++];
                  null === bb || void 0 === bb || bb()
                }
                const ab = QT(Bb());
                return null === bb || void 0 === bb || bb(), ab
              } finally {
                Ab || (Ub = void 0)
              }
            },
            addCaptureListener: bb => {
              Tb.push(bb)
            },
            removeCaptureListener: bb => {
              Tb = Tb.filter((ab => ab !== bb))
            },
            get value() {
              return Bb()
            }
          }
        }(0, Ub),
        Mb = oT(ab, Ub, bb, Ab),
        Tb = OT(ab, Ub, bb, Ab, Mb),
        Eb = function(bb, ab, Ub, Ab, Mb, Tb) {
          ab.debug("Initializing instrumentations");
          const Eb = [];
          return {
            add: function() {
              ab.debug("Adding instrumentations");
              for (var Yb = arguments.length, Bb = new Array(Yb), eb = 0; eb < Yb; eb++) Bb[eb] = arguments[eb];
              Bb.forEach((Yb => {
                ab.debug(`Adding "${Yb.name}" instrumentation`), Eb.some((bb => bb.name === Yb.name)) ? ab.warn(`Instrumentation ${Yb.name} is already added`) : (Yb.unpatchedConsole = bb, Yb.internalLogger = ab, Yb.config = Ub, Yb.metas = Ab, Yb.transports = Mb, Yb.api = Tb, Eb.push(Yb), Yb.initialize())
              }))
            },
            get instrumentations() {
              return [...Eb]
            },
            remove: function() {
              ab.debug("Removing instrumentations");
              for (var bb = arguments.length, Ub = new Array(bb), Ab = 0; Ab < bb; Ab++) Ub[Ab] = arguments[Ab];
              Ub.forEach((bb => {
                var Ub, Ab;
                ab.debug(`Removing "${bb.name}" instrumentation`);
                const Mb = Eb.reduce(((ab, Ub, Ab) => null === ab && Ub.name === bb.name ? Ab : null), null);
                null !== Mb ? (null === (Ub = (Ab = Eb[Mb]).destroy) || void 0 === Ub || Ub.call(Ab), Eb.splice(Mb, 1)) : ab.warn(`Instrumentation "${bb.name}" is not added`)
              }))
            }
          }
        }(ab, Ub, bb, Ab, Mb, Tb),
        Yb = kb(ab, Ub, bb, Ab, Mb, Tb, Eb);
      return rT(Yb),
        function(bb) {
          bb.transports.add(...bb.config.transports), bb.transports.addBeforeSendHooks(bb.config.beforeSend)
        }(Yb),
        function(bb) {
          bb.instrumentations.add(...bb.config.instrumentations)
        }(Yb), Yb
    }

    function JT(bb) {
      const ab = IT(bb);
      if (ab) return cT(ab)
    }
  },
  6343: function(bb, ab, Ub) {
    var Ab;
    ! function(Mb, Tb) {
      var Eb = "function",
        Yb = "undefined",
        Bb = "object",
        eb = "string",
        vb = "major",
        Lb = "model",
        Pb = "name",
        Xb = "type",
        jb = "vendor",
        Rb = "version",
        kb = "architecture",
        yb = "console",
        Zb = "mobile",
        Db = "tablet",
        zb = "smarttv",
        xb = "wearable",
        ib = "embedded",
        fb = "Amazon",
        mb = "Apple",
        pb = "ASUS",
        Nb = "BlackBerry",
        Wb = "Browser",
        Hb = "Chrome",
        Ib = "Firefox",
        db = "Google",
        Fb = "Honor",
        hb = "Huawei",
        Gb = "LG",
        Qb = "Microsoft",
        qb = "Motorola",
        ub = "Nvidia",
        rb = "OnePlus",
        Kb = "Opera",
        ob = "OPPO",
        lb = "Samsung",
        tb = "Sharp",
        wb = "Sony",
        sb = "Xiaomi",
        gb = "Zebra",
        Cb = "Facebook",
        Vb = "Chromium OS",
        Ob = "Mac OS",
        cb = " Browser",
        Jb = function(bb) {
          for (var ab = {}, Ub = 0; Ub < bb.length; Ub++) ab[bb[Ub].toUpperCase()] = bb[Ub];
          return ab
        },
        nb = function(bb, ab) {
          return typeof bb === eb && -1 !== Sb(ab).indexOf(Sb(bb))
        },
        Sb = function(bb) {
          return bb.toLowerCase()
        },
        ba = function(bb, ab) {
          if (typeof bb === eb) return bb = bb.replace(/^\s\s*/, ""), typeof ab === Yb ? bb : bb.substring(0, 500)
        },
        aa = function(bb, ab) {
          for (var Ub, Ab, Mb, Yb, eb, vb, Lb = 0; Lb < ab.length && !eb;) {
            var Pb = ab[Lb],
              Xb = ab[Lb + 1];
            for (Ub = Ab = 0; Ub < Pb.length && !eb && Pb[Ub];)
              if (eb = Pb[Ub++].exec(bb))
                for (Mb = 0; Mb < Xb.length; Mb++) vb = eb[++Ab], typeof(Yb = Xb[Mb]) === Bb && Yb.length > 0 ? 2 === Yb.length ? typeof Yb[1] == Eb ? this[Yb[0]] = Yb[1].call(this, vb) : this[Yb[0]] = Yb[1] : 3 === Yb.length ? typeof Yb[1] !== Eb || Yb[1].exec && Yb[1].test ? this[Yb[0]] = vb ? vb.replace(Yb[1], Yb[2]) : Tb : this[Yb[0]] = vb ? Yb[1].call(this, vb, Yb[2]) : Tb : 4 === Yb.length && (this[Yb[0]] = vb ? Yb[3].call(this, vb.replace(Yb[1], Yb[2])) : Tb) : this[Yb] = vb || Tb;
            Lb += 2
          }
        },
        Ua = function(bb, ab) {
          for (var Ub in ab)
            if (typeof ab[Ub] === Bb && ab[Ub].length > 0) {
              for (var Ab = 0; Ab < ab[Ub].length; Ab++)
                if (nb(ab[Ub][Ab], bb)) return "?" === Ub ? Tb : Ub
            } else if (nb(ab[Ub], bb)) return "?" === Ub ? Tb : Ub;
          return ab.hasOwnProperty("*") ? ab["*"] : bb
        },
        Aa = {
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
        Ma = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Rb, [Pb, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Rb, [Pb, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Pb, Rb],
            [/opios[\/ ]+([\w\.]+)/i],
            [Rb, [Pb, Kb + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Rb, [Pb, Kb + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Rb, [Pb, Kb]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Rb, [Pb, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Rb, [Pb, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Pb, Rb],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Rb, [Pb, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Rb, [Pb, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Rb, [Pb, "UC" + Wb]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Rb, [Pb, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Rb, [Pb, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Rb, [Pb, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Rb, [Pb, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Rb, [Pb, "Smart Lenovo " + Wb]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Pb, /(.+)/, "$1 Secure " + Wb], Rb
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Rb, [Pb, Ib + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Rb, [Pb, Kb + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Rb, [Pb, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Rb, [Pb, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Rb, [Pb, Kb + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Rb, [Pb, "MIUI" + cb]],
            [/fxios\/([\w\.-]+)/i],
            [Rb, [Pb, Ib]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Rb, [Pb, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Pb, /(.+)/, "$1Browser"], Rb
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Pb, /(.+)/, "$1" + cb], Rb
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Rb, [Pb, lb + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Rb, [Pb, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Pb, "Sogou Mobile"], Rb
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Pb, Rb],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Pb],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Rb, Pb],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Pb, Cb], Rb
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Pb, Rb],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Rb, [Pb, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Rb, [Pb, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Rb, [Pb, Hb + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Pb, Hb + " WebView"], Rb
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Rb, [Pb, "Android " + Wb]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Pb, Rb],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Rb, [Pb, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Rb, Pb],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Pb, [Rb, Ua, {
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
            [Pb, Rb],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Pb, "Netscape"], Rb
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Pb, Rb],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Rb, [Pb, Ib + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Pb, [Rb, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Pb, [Rb, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [kb, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [kb, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [kb, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [kb, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [kb, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [kb, /ower/, "", Sb]
            ],
            [/ sun4\w[;\)]/i],
            [
              [kb, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [kb, Sb]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Lb, [jb, lb],
              [Xb, Db]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Lb, [jb, lb],
              [Xb, Zb]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Lb, [jb, mb],
              [Xb, Zb]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Lb, [jb, mb],
              [Xb, Db]
            ],
            [/(macintosh);/i],
            [Lb, [jb, mb]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Lb, [jb, tb],
              [Xb, Zb]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Lb, [jb, Fb],
              [Xb, Db]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Lb, [jb, Fb],
              [Xb, Zb]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Lb, [jb, hb],
              [Xb, Db]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Lb, [jb, hb],
              [Xb, Zb]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Lb, /_/g, " "],
              [jb, sb],
              [Xb, Db]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Lb, /_/g, " "],
              [jb, sb],
              [Xb, Zb]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Lb, [jb, ob],
              [Xb, Zb]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Lb, [jb, Ua, {
                OnePlus: ["304", "403", "203"],
                "*": ob
              }],
              [Xb, Db]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Lb, [jb, "Vivo"],
              [Xb, Zb]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Lb, [jb, "Realme"],
              [Xb, Zb]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Lb, [jb, qb],
              [Xb, Zb]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Lb, [jb, qb],
              [Xb, Db]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Lb, [jb, Gb],
              [Xb, Db]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Lb, [jb, Gb],
              [Xb, Zb]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Lb, [jb, "Lenovo"],
              [Xb, Db]
            ],
            [/(nokia) (t[12][01])/i],
            [jb, Lb, [Xb, Db]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Lb, /_/g, " "],
              [Xb, Zb],
              [jb, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Lb, [jb, db],
              [Xb, Db]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Lb, [jb, db],
              [Xb, Zb]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Lb, [jb, wb],
              [Xb, Zb]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Lb, "Xperia Tablet"],
              [jb, wb],
              [Xb, Db]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Lb, [jb, rb],
              [Xb, Zb]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Lb, [jb, fb],
              [Xb, Db]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Lb, /(.+)/g, "Fire Phone $1"],
              [jb, fb],
              [Xb, Zb]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Lb, jb, [Xb, Db]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Lb, [jb, Nb],
              [Xb, Zb]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Lb, [jb, pb],
              [Xb, Db]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Lb, [jb, pb],
              [Xb, Zb]
            ],
            [/(nexus 9)/i],
            [Lb, [jb, "HTC"],
              [Xb, Db]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [jb, [Lb, /_/g, " "],
              [Xb, Zb]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Lb, [jb, "TCL"],
              [Xb, Db]
            ],
            [/(itel) ((\w+))/i],
            [
              [jb, Sb], Lb, [Xb, Ua, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Lb, [jb, "Acer"],
              [Xb, Db]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Lb, [jb, "Meizu"],
              [Xb, Zb]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Lb, [jb, "Ulefone"],
              [Xb, Zb]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Lb, [jb, "Energizer"],
              [Xb, Zb]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Lb, [jb, "Cat"],
              [Xb, Zb]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Lb, [jb, "Smartfren"],
              [Xb, Zb]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Lb, [jb, "Nothing"],
              [Xb, Zb]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Lb, [jb, "Archos"],
              [Xb, Db]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Lb, [jb, "Archos"],
              [Xb, Zb]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [jb, Lb, [Xb, Db]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [jb, Lb, [Xb, Zb]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [jb, Lb, [Xb, Db]],
            [/(surface duo)/i],
            [Lb, [jb, Qb],
              [Xb, Db]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Lb, [jb, "Fairphone"],
              [Xb, Zb]
            ],
            [/(u304aa)/i],
            [Lb, [jb, "AT&T"],
              [Xb, Zb]
            ],
            [/\bsie-(\w*)/i],
            [Lb, [jb, "Siemens"],
              [Xb, Zb]
            ],
            [/\b(rct\w+) b/i],
            [Lb, [jb, "RCA"],
              [Xb, Db]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Lb, [jb, "Dell"],
              [Xb, Db]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Lb, [jb, "Verizon"],
              [Xb, Db]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Lb, [jb, "Barnes & Noble"],
              [Xb, Db]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Lb, [jb, "NuVision"],
              [Xb, Db]
            ],
            [/\b(k88) b/i],
            [Lb, [jb, "ZTE"],
              [Xb, Db]
            ],
            [/\b(nx\d{3}j) b/i],
            [Lb, [jb, "ZTE"],
              [Xb, Zb]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Lb, [jb, "Swiss"],
              [Xb, Zb]
            ],
            [/\b(zur\d{3}) b/i],
            [Lb, [jb, "Swiss"],
              [Xb, Db]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Lb, [jb, "Zeki"],
              [Xb, Db]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [jb, "Dragon Touch"], Lb, [Xb, Db]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Lb, [jb, "Insignia"],
              [Xb, Db]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Lb, [jb, "NextBook"],
              [Xb, Db]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [jb, "Voice"], Lb, [Xb, Zb]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [jb, "LvTel"], Lb, [Xb, Zb]
            ],
            [/\b(ph-1) /i],
            [Lb, [jb, "Essential"],
              [Xb, Zb]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Lb, [jb, "Envizen"],
              [Xb, Db]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Lb, [jb, "MachSpeed"],
              [Xb, Db]
            ],
            [/\btu_(1491) b/i],
            [Lb, [jb, "Rotor"],
              [Xb, Db]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Lb, [jb, ub],
              [Xb, Db]
            ],
            [/(sprint) (\w+)/i],
            [jb, Lb, [Xb, Zb]],
            [/(kin\.[onetw]{3})/i],
            [
              [Lb, /\./g, " "],
              [jb, Qb],
              [Xb, Zb]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Lb, [jb, gb],
              [Xb, Db]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Lb, [jb, gb],
              [Xb, Zb]
            ],
            [/smart-tv.+(samsung)/i],
            [jb, [Xb, zb]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Lb, /^/, "SmartTV"],
              [jb, lb],
              [Xb, zb]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [jb, Gb],
              [Xb, zb]
            ],
            [/(apple) ?tv/i],
            [jb, [Lb, mb + " TV"],
              [Xb, zb]
            ],
            [/crkey/i],
            [
              [Lb, Hb + "cast"],
              [jb, db],
              [Xb, zb]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Lb, [jb, fb],
              [Xb, zb]
            ],
            [/(shield \w+ tv)/i],
            [Lb, [jb, ub],
              [Xb, zb]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Lb, [jb, tb],
              [Xb, zb]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Lb, [jb, wb],
              [Xb, zb]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Lb, [jb, sb],
              [Xb, zb]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [jb, Lb, [Xb, zb]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [jb, ba],
              [Lb, ba],
              [Xb, zb]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Lb, [Xb, zb]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Xb, zb]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [jb, Lb, [Xb, yb]],
            [/droid.+; (shield)( bui|\))/i],
            [Lb, [jb, ub],
              [Xb, yb]
            ],
            [/(playstation \w+)/i],
            [Lb, [jb, wb],
              [Xb, yb]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Lb, [jb, Qb],
              [Xb, yb]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Lb, [jb, lb],
              [Xb, xb]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [jb, Lb, [Xb, xb]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Lb, [jb, ob],
              [Xb, xb]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Lb, [jb, mb],
              [Xb, xb]
            ],
            [/(opwwe\d{3})/i],
            [Lb, [jb, rb],
              [Xb, xb]
            ],
            [/(moto 360)/i],
            [Lb, [jb, qb],
              [Xb, xb]
            ],
            [/(smartwatch 3)/i],
            [Lb, [jb, wb],
              [Xb, xb]
            ],
            [/(g watch r)/i],
            [Lb, [jb, Gb],
              [Xb, xb]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Lb, [jb, gb],
              [Xb, xb]
            ],
            [/droid.+; (glass) \d/i],
            [Lb, [jb, db],
              [Xb, xb]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [jb, Lb, [Xb, xb]],
            [/; (quest( \d| pro)?)/i],
            [Lb, [jb, Cb],
              [Xb, xb]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [jb, [Xb, ib]],
            [/(aeobc)\b/i],
            [Lb, [jb, fb],
              [Xb, ib]
            ],
            [/(homepod).+mac os/i],
            [Lb, [jb, mb],
              [Xb, ib]
            ],
            [/windows iot/i],
            [
              [Xb, ib]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Lb, [Xb, Zb]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Lb, [Xb, Db]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Xb, Db]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Xb, Zb]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Lb, [jb, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Rb, [Pb, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Pb, Rb],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Rb, [Pb, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Pb, Rb],
            [/ladybird\//i],
            [
              [Pb, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Rb, Pb]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Pb, Rb],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Pb, [Rb, Ua, Aa]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Rb, Ua, Aa],
              [Pb, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Rb, /_/g, "."],
              [Pb, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Pb, Ob],
              [Rb, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Rb, Pb],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Pb, /(.+)/, "$1 Touch"], Rb
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Pb, Rb],
            [/\(bb(10);/i],
            [Rb, [Pb, Nb]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Rb, [Pb, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Rb, [Pb, Ib + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Rb, [Pb, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Rb, [Pb, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Rb, [Pb, Hb + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Pb, Vb], Rb
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Pb, Rb],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Pb, "Solaris"], Rb
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Pb, Rb]
          ]
        },
        Ta = function(bb, ab) {
          if (typeof bb === Bb && (ab = bb, bb = Tb), !(this instanceof Ta)) return new Ta(bb, ab).getResult();
          var Ub = typeof Mb !== Yb && Mb.navigator ? Mb.navigator : Tb,
            Ab = bb || (Ub && Ub.userAgent ? Ub.userAgent : ""),
            yb = Ub && Ub.userAgentData ? Ub.userAgentData : Tb,
            zb = ab ? function(bb, ab) {
              var Ub = {};
              for (var Ab in bb) ab[Ab] && ab[Ab].length % 2 === 0 ? Ub[Ab] = ab[Ab].concat(bb[Ab]) : Ub[Ab] = bb[Ab];
              return Ub
            }(Ma, ab) : Ma,
            xb = Ub && Ub.userAgent == Ab;
          return this.getBrowser = function() {
            var bb, ab = {};
            return ab[Pb] = Tb, ab[Rb] = Tb, aa.call(ab, Ab, zb.browser), ab[vb] = typeof(bb = ab[Rb]) === eb ? bb.replace(/[^\d\.]/g, "").split(".")[0] : Tb, xb && Ub && Ub.brave && typeof Ub.brave.isBrave == Eb && (ab[Pb] = "Brave"), ab
          }, this.getCPU = function() {
            var bb = {};
            return bb[kb] = Tb, aa.call(bb, Ab, zb.cpu), bb
          }, this.getDevice = function() {
            var bb = {};
            return bb[jb] = Tb, bb[Lb] = Tb, bb[Xb] = Tb, aa.call(bb, Ab, zb.device), xb && !bb[Xb] && yb && yb.mobile && (bb[Xb] = Zb), xb && "Macintosh" == bb[Lb] && Ub && typeof Ub.standalone !== Yb && Ub.maxTouchPoints && Ub.maxTouchPoints > 2 && (bb[Lb] = "iPad", bb[Xb] = Db), bb
          }, this.vj = function() {
            var bb = {};
            return bb[Pb] = Tb, bb[Rb] = Tb, aa.call(bb, Ab, zb.engine), bb
          }, this.getOS = function() {
            var bb = {};
            return bb[Pb] = Tb, bb[Rb] = Tb, aa.call(bb, Ab, zb.os), xb && !bb[Pb] && yb && yb.platform && "Unknown" != yb.platform && (bb[Pb] = yb.platform.replace(/chrome os/i, Vb).replace(/macos/i, Ob)), bb
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.vj(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Ab
          }, this.setUA = function(bb) {
            return Ab = typeof bb === eb && bb.length > 500 ? ba(bb, 500) : bb, this
          }, this.setUA(Ab), this
        };
      Ta.VERSION = "1.0.41", Ta.BROWSER = Jb([Pb, Rb, vb]), Ta.CPU = Jb([kb]), Ta.DEVICE = Jb([Lb, jb, Xb, yb, Zb, zb, Db, xb, ib]), Ta.ENGINE = Ta.OS = Jb([Pb, Rb]), typeof ab !== Yb ? (bb.exports && (ab = bb.exports = Ta), ab.UAParser = Ta) : Ub.amdO ? (Ab = function() {
        return Ta
      }.call(ab, Ub, ab, bb)) === Tb || (bb.exports = Ab) : typeof Mb !== Yb && (Mb.UAParser = Ta);
      var Ea = typeof Mb !== Yb && (Mb.jQuery || Mb.Zepto);
      if (Ea && !Ea.ua) {
        var Ya = new Ta;
        Ea.ua = Ya.getResult(), Ea.ua.get = function() {
          return Ya.getUA()
        }, Ea.ua.set = function(bb) {
          Ya.setUA(bb);
          var ab = Ya.getResult();
          for (var Ub in ab) Ea.ua[Ub] = ab[Ub]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);