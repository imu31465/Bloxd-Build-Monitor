export const id = 31;
export const ids = [31];
export const modules = {
  6430: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BaseExtension: () => bh,
      BaseInstrumentation: () => uh,
      BaseTransport: () => cO,
      CSPInstrumentation: () => jO,
      ConsoleInstrumentation: () => vh,
      ConsoleTransport: () => hG,
      EVENT_CLICK: () => Ku,
      EVENT_NAVIGATION: () => Wu,
      EVENT_ROUTE_CHANGE: () => Du,
      EVENT_SESSION_EXTEND: () => ju,
      EVENT_SESSION_RESUME: () => ru,
      EVENT_SESSION_START: () => du,
      EVENT_VIEW_CHANGED: () => Cu,
      ErrorsInstrumentation: () => Jh,
      FetchTransport: () => WG,
      InternalLoggerLevel: () => yu,
      LogLevel: () => Kh,
      MAX_SESSION_PERSISTENCE_TIME: () => Yb,
      NavigationInstrumentation: () => IO,
      Observable: () => lh,
      PerformanceInstrumentation: () => FB,
      PersistentSessionsManager: () => su,
      SESSION_EXPIRATION_TIME: () => Gb,
      SESSION_INACTIVITY_TIME: () => Ub,
      STORAGE_KEY: () => Ob,
      SessionInstrumentation: () => Bh,
      TransportItemType: () => QO,
      UserActionInstrumentation: () => rO,
      UserActionState: () => XO,
      VERSION: () => hh,
      ViewInstrumentation: () => Nh,
      VolatileSessionsManager: () => Mu,
      WebVitalsInstrumentation: () => tB,
      allLogLevels: () => Ch,
      browserMeta: () => FO,
      buildStackFrame: () => Oh,
      captureMetas: () => NG,
      createInternalLogger: () => nG,
      createPromiseBuffer: () => wG,
      createSession: () => kO,
      deepEqual: () => lu,
      defaultEventDomain: () => Bb,
      defaultExceptionType: () => nh,
      defaultGlobalObjectKey: () => DG,
      defaultInternalLoggerLevel: () => Fu,
      defaultLogLevel: () => Wh,
      faro: () => pb,
      genShortID: () => Au,
      getCurrentTimestamp: () => Xu,
      getDataFromSafariExtensions: () => wh,
      getIgnoreUrls: () => fb,
      getInternalFaroFromGlobalObject: () => wb,
      getStackFramesFromError: () => Xh,
      getTransportBody: () => uG,
      getUrlFromResource: () => Tb,
      getWebInstrumentations: () => PO,
      globalObject: () => ab,
      initializeFaro: () => cG,
      internalGlobalObjectKey: () => Hb,
      isArray: () => gb,
      isBoolean: () => nb,
      isDomError: () => mb,
      isDomException: () => Ib,
      isElement: () => qb,
      isElementDefined: () => Pb,
      MZ: () => Fb,
      isError: () => sb,
      isErrorDefined: () => Nb,
      isErrorEvent: () => Mb,
      isEvent: () => eb,
      isEventDefined: () => Jb,
      isFunction: () => zb,
      isInstanceOf: () => Kb,
      isInt: () => jb,
      isInternalFaroOnGlobalObject: () => Xb,
      isMap: () => yb,
      isMapDefined: () => Eb,
      isNull: () => Cb,
      isNumber: () => rb,
      isObject: () => xb,
      isPrimitive: () => tb,
      isRegExp: () => ib,
      isString: () => db,
      isSymbol: () => Db,
      isSyntheticEvent: () => Vb,
      isThenable: () => vb,
      isToString: () => lb,
      isTypeof: () => Ab,
      isUndefined: () => Wb,
      makeCoreConfig: () => gG,
      noop: () => Eu,
      osMeta: () => fO,
      parseStacktrace: () => ph,
      sdkMeta: () => TO,
      setInternalFaroOnGlobalObject: () => Zb,
      transportItemTypeToBodyKey: () => RO,
      unknownString: () => eh,
      userActionDataAttribute: () => fB,
      userActionTimeoutDataAttribute: () => kB
    });
    const Bb = "browser",
      Ob = "com.grafana.faro.session",
      Gb = 144e5,
      Ub = 9e5,
      Lb = 1e3,
      Yb = Ub,
      Sb = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Yb
      };
    const ab = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof hb.g ? hb.g : "undefined" !== typeof self ? self : void 0;
    const Hb = "_faroInternal";

    function wb() {
      return ab[Hb]
    }

    function Zb(bb) {
      bb.config.isolate ? bb.internalLogger.debug("Skipping registering internal Faro instance on global object") : (bb.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(ab, Hb, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bb
      }))
    }

    function Xb() {
      return Hb in ab
    }
    let pb = {
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

    function ob(bb, ub, hb, Bb, Ob, Gb, Ub) {
      return ub.debug("Initializing Faro"), pb = {
          api: Gb,
          config: hb,
          instrumentations: Ub,
          internalLogger: ub,
          metas: Bb,
          pause: Ob.pause,
          transports: Ob,
          unpatchedConsole: bb,
          unpause: Ob.unpause
        }, Zb(pb),
        function(bb) {
          if (bb.config.preventGlobalExposure) bb.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (bb.internalLogger.debug(`Registering public faro reference in the global scope using "${bb.config.globalObjectKey}" key`), bb.config.globalObjectKey in ab) return void bb.internalLogger.warn(`Skipping global registration due to key "${bb.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(ab, bb.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: bb
            })
          }
        }(pb), pb
    }

    function Ab(bb, ub) {
      return typeof bb === ub
    }

    function lb(bb, ub) {
      return Object.prototype.toString.call(bb) === `[object ${ub}]`
    }

    function Kb(bb, ub) {
      try {
        return bb instanceof ub
      } catch (hb) {
        return !1
      }
    }
    const Wb = bb => Ab(bb, "undefined"),
      Cb = bb => Ab(bb, "null"),
      db = bb => Ab(bb, "string"),
      rb = bb => Ab(bb, "number") && !isNaN(bb) || Ab(bb, "bigint"),
      jb = bb => rb(bb) && Number.isInteger(bb),
      nb = bb => Ab(bb, "boolean"),
      Db = bb => Ab(bb, "symbol"),
      xb = bb => !Cb(bb) && Ab(bb, "object"),
      zb = bb => Ab(bb, "function"),
      gb = bb => lb(bb, "Array"),
      ib = bb => lb(bb, "RegExp"),
      vb = bb => zb(null === bb || void 0 === bb ? void 0 : bb.then),
      tb = bb => !xb(bb) && !zb(bb),
      Jb = "undefined" !== typeof Event,
      eb = bb => Jb && Kb(bb, Event),
      Nb = "undefined" !== typeof Error,
      sb = bb => Nb && Kb(bb, Error),
      Mb = bb => lb(bb, "ErrorEvent"),
      mb = bb => lb(bb, "DOMError"),
      Ib = bb => lb(bb, "DOMException"),
      Pb = "undefined" !== typeof Element,
      qb = bb => Pb && Kb(bb, Element),
      Eb = "undefined" !== typeof Map,
      yb = bb => Eb && Kb(bb, Map),
      Vb = bb => xb(bb) && "nativeEvent" in bb && "preventDefault" in bb && "stopPropagation" in bb;

    function Fb(bb) {
      return null == bb || (gb(bb) || db(bb) ? 0 === bb.length : !!xb(bb) && 0 === Object.keys(bb).length)
    }

    function fb() {
      return pb.transports.transports.flatMap((bb => bb.getIgnoreUrls()))
    }

    function kb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return fb().some((ub => bb && null != bb.match(ub)))
    }

    function Tb(bb) {
      return db(bb) ? bb : bb instanceof URL ? bb.href : !Fb(bb) && zb(null === bb || void 0 === bb ? void 0 : bb.toString) ? bb.toString() : void 0
    }
    const cb = "sessionStorage",
      Qb = "localStorage";

    function Rb(bb) {
      try {
        let ub;
        ub = window[bb];
        const hb = "__faro_storage_test__";
        return ub.setItem(hb, hb), ub.removeItem(hb), !0
      } catch (hb) {
        var ub;
        return null === (ub = pb.internalLogger) || void 0 === ub || ub.info(`Web storage of type ${bb} is not available. Reason: ${hb}`), !1
      }
    }

    function bu(bb, ub) {
      return Gu(ub) ? window[ub].getItem(bb) : null
    }

    function uu(bb, ub, hb) {
      if (Gu(hb)) try {
        window[hb].setItem(bb, ub)
      } catch (Bb) {}
    }

    function hu(bb, ub) {
      Gu(ub) && window[ub].removeItem(bb)
    }
    const Bu = Rb(Qb),
      Ou = Rb(cb);

    function Gu(bb) {
      return bb === Qb ? Bu : bb === cb && Ou
    }

    function Uu(bb) {
      return Uu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Uu(bb)
    }

    function Lu(bb) {
      var ub = function(bb, ub) {
        if ("object" != Uu(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Uu(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Uu(ub) ? ub : ub + ""
    }

    function Yu(bb, ub, hb) {
      return (ub = Lu(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Su(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function au(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Su(Object(hb), !0).forEach((function(ub) {
          Yu(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Su(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Hu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pb;
      var ub, hb, Bb;
      const Ob = bb.config.sessionTracking,
        Gb = null !== (ub = null !== (hb = null === Ob || void 0 === Ob || null === (Bb = Ob.sampler) || void 0 === Bb ? void 0 : Bb.call(Ob, {
          metas: bb.metas.value
        })) && void 0 !== hb ? hb : null === Ob || void 0 === Ob ? void 0 : Ob.samplingRate) && void 0 !== ub ? ub : 1,
        Ub = "number" === typeof Gb ? function(bb) {
          return Math.min(1, Math.max(0, bb))
        }(Gb) : 0;
      if (!(Ub > 0)) return !1;
      if (1 === Ub) return !0;
      try {
        const bb = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === bb || void 0 === bb ? void 0 : bb.getRandomValues)) {
          const ub = new Uint32Array(1);
          return bb.getRandomValues(ub), ub[0] / Math.pow(2, 32) < Ub
        }
      } catch (Lb) {}
      return Math.random() < Ub
    }

    function wu() {
      return Date.now()
    }

    function Zu() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Xu() {
      return (new Date).toISOString()
    }

    function pu(bb) {
      return new Date(bb).toISOString()
    }
    const ou = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Au() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const ub = new Uint32Array(bb),
        hb = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === hb || void 0 === hb ? void 0 : hb.getRandomValues) hb.getRandomValues(ub);
      else
        for (let Ob = 0; Ob < bb; Ob++) ub[Ob] = Math.floor(4294967296 * Math.random());
      let Bb = "";
      for (let Ob = 0; Ob < bb; Ob++) Bb += ou[ub[Ob] % 59];
      return Bb
    }

    function lu(bb, ub) {
      if (bb === ub) return !0;
      if (Ab(bb, "number") && isNaN(bb)) return Ab(ub, "number") && isNaN(ub);
      const hb = gb(bb),
        Bb = gb(ub);
      if (hb !== Bb) return !1;
      if (hb && Bb) {
        const hb = bb.length;
        if (hb !== ub.length) return !1;
        for (let Bb = hb; 0 !== Bb--;)
          if (!lu(bb[Bb], ub[Bb])) return !1;
        return !0
      }
      const Ob = xb(bb),
        Gb = xb(ub);
      if (Ob !== Gb) return !1;
      if (bb && ub && Ob && Gb) {
        const hb = Object.keys(bb),
          Bb = Object.keys(ub);
        if (hb.length !== Bb.length) return !1;
        for (let bb of hb)
          if (!Bb.includes(bb)) return !1;
        for (let Ob of hb)
          if (!lu(bb[Ob], ub[Ob])) return !1;
        return !0
      }
      return !1
    }
    const Ku = "click",
      Wu = "navigation",
      Cu = "view_changed",
      du = "session_start",
      ru = "session_resume",
      ju = "session_extend",
      nu = "service_name_override",
      Du = "route_change";

    function xu() {
      let {
        sessionId: bb,
        started: ub,
        lastActivity: hb,
        isSampled: Bb = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Ob = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pb;
      var Gb;
      const Ub = wu(),
        Lb = null === (Gb = Ob.config) || void 0 === Gb || null === (Gb = Gb.sessionTracking) || void 0 === Gb ? void 0 : Gb.generateSessionId;
      return null == bb && (bb = "function" === typeof Lb ? Lb() : Au()), {
        sessionId: bb,
        lastActivity: null !== hb && void 0 !== hb ? hb : Ub,
        started: null !== ub && void 0 !== ub ? ub : Ub,
        isSampled: Bb
      }
    }

    function zu(bb) {
      if (null == bb) return !1;
      const ub = wu();
      return ub - bb.started < 144e5 && ub - bb.lastActivity < Ub
    }

    function gu(bb) {
      let {
        fetchUserSession: ub,
        storeUserSession: hb,
        adoptSession: Bb,
        updateInterval: Ob = 0
      } = bb, Lb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pb, Yb = 0;
      return function() {
        let {
          forceSessionExtend: bb = !1,
          refreshActivity: Sb = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var ab, Hb;
        if (!ub || !hb) return;
        const wb = wu();
        if (!bb && wb < Yb && Yb - wb <= Ob) return;
        const Zb = Lb.config.sessionTracking,
          Xb = null === Zb || void 0 === Zb ? void 0 : Zb.persistent;
        if (Xb && !Bu || !Xb && !Ou) return;
        const pb = ub();
        if (Yb = Math.min(wb + Ob, (null !== (ab = null === pb || void 0 === pb ? void 0 : pb.started) && void 0 !== ab ? ab : wb) + Gb, (null !== (Hb = null === pb || void 0 === pb ? void 0 : pb.lastActivity) && void 0 !== Hb ? Hb : wb) + Ub), !1 === bb && zu(pb)) {
          var ob;
          Sb && hb(au(au({}, pb), {}, {
            lastActivity: wb
          }));
          const bb = null === (ob = Lb.metas.value.session) || void 0 === ob ? void 0 : ob.id;
          null != Bb && null != pb.sessionMeta && pb.sessionId !== bb && Bb(pb.sessionMeta)
        } else {
          var Ab, lb, Kb;
          let bb = vu(xu({
            isSampled: Hu(Lb)
          }, Lb), pb, Lb);
          Yb = wb + Ob, hb(bb), null === (Ab = Lb.api) || void 0 === Ab || Ab.setSession(bb.sessionMeta), null === Zb || void 0 === Zb || null === (lb = Zb.onSessionChange) || void 0 === lb || lb.call(Zb, null !== (Kb = null === pb || void 0 === pb ? void 0 : pb.sessionMeta) && void 0 !== Kb ? Kb : null, bb.sessionMeta)
        }
      }
    }

    function iu(bb) {
      let ub, {
          fetchUserSession: hb,
          storeUserSession: Bb,
          updateInterval: Ob = 0
        } = bb,
        Gb = 0;
      return bb => {
        const Ub = wu();
        if (bb === ub && Ub < Gb && Gb - Ub <= Ob) return;
        ub = bb, Gb = Ub + Ob;
        const Lb = hb();
        (null === Lb || void 0 === Lb ? void 0 : Lb.sessionId) === bb && zu(Lb) && Bb(au(au({}, Lb), {}, {
          lastActivity: Ub
        }))
      }
    }

    function vu(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pb;
      var Bb, Ob, Gb, Ub, Lb, Yb;
      const Sb = au(au({}, bb), {}, {
          sessionMeta: {
            id: bb.sessionId,
            attributes: Ju(au(au(au({}, null === (Bb = hb.config.sessionTracking) || void 0 === Bb || null === (Bb = Bb.session) || void 0 === Bb ? void 0 : Bb.attributes), null !== (Ob = null === (Gb = hb.metas.value.session) || void 0 === Gb ? void 0 : Gb.attributes) && void 0 !== Ob ? Ob : {}), {}, {
              isSampled: bb.isSampled.toString()
            }))
          }
        }),
        ab = null !== (Ub = null === (Lb = hb.metas.value.session) || void 0 === Lb ? void 0 : Lb.overrides) && void 0 !== Ub ? Ub : null === ub || void 0 === ub || null === (Yb = ub.sessionMeta) || void 0 === Yb ? void 0 : Yb.overrides;
      Fb(ab) || (Sb.sessionMeta.overrides = ab);
      const Hb = null === ub || void 0 === ub ? void 0 : ub.sessionId;
      return null != Hb && (Sb.sessionMeta.attributes.previousSession = Hb), Sb
    }

    function tu(bb) {
      let {
        fetchUserSession: ub,
        storeUserSession: hb
      } = bb, Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pb, Ob = !1;
      return function(bb) {
        if (Ob) return;
        const Gb = bb.session,
          Ub = ub();
        let Lb = null === Gb || void 0 === Gb ? void 0 : Gb.id;
        const Yb = null === Gb || void 0 === Gb ? void 0 : Gb.attributes,
          Sb = null === Gb || void 0 === Gb ? void 0 : Gb.overrides,
          ab = null === Ub || void 0 === Ub ? void 0 : Ub.sessionMeta,
          Hb = null === ab || void 0 === ab ? void 0 : ab.overrides,
          wb = !!Sb && !lu(Sb, Hb),
          Zb = !!Yb && !lu(Yb, null === ab || void 0 === ab ? void 0 : ab.attributes);
        if (Gb && Lb !== (null === Ub || void 0 === Ub ? void 0 : Ub.sessionId) || Zb || wb) {
          var Xb, pb;
          const bb = null != Ub && Lb === Ub.sessionId,
            ub = vu(bb ? Ub : xu({
              sessionId: Lb,
              isSampled: Hu(Bb)
            }, Bb), Ub, Bb),
            Gb = null === Ub || void 0 === Ub || null === (Xb = Ub.sessionMeta) || void 0 === Xb || null === (Xb = Xb.attributes) || void 0 === Xb ? void 0 : Xb.previousSession;
          bb && null != Gb && Gb !== ub.sessionId && (ub.sessionMeta.attributes.previousSession = Gb), (null === (pb = ub.sessionMeta.attributes) || void 0 === pb ? void 0 : pb.previousSession) === ub.sessionId && delete ub.sessionMeta.attributes.previousSession, hb(ub),
            function(bb, ub) {
              let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Ob, Gb, Ub;
              if (!ub) return;
              const Lb = hb.serviceName,
                Yb = null !== (Ob = null !== (Gb = Bb.serviceName) && void 0 !== Gb ? Gb : null === (Ub = bb.metas.value.app) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== Ob ? Ob : "";
              Lb && Lb !== Yb && bb.api.pushEvent(nu, {
                serviceName: Lb,
                previousServiceName: Yb
              })
            }(Bb, wb, Sb, Hb), Ob = !0;
          try {
            Bb.api.setSession(ub.sessionMeta)
          } finally {
            Ob = !1
          }
        }
      }
    }

    function Ju(bb) {
      const ub = {};
      for (const hb of Object.keys(bb)) {
        const Bb = bb[hb];
        void 0 !== Bb && (ub[hb] = Bb)
      }
      return ub
    }

    function eu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== bb && void 0 !== bb ? bb : {}, function() {
        const bb = new WeakSet;
        return function(ub, hb) {
          if (xb(hb) && null !== hb) {
            if (bb.has(hb)) return null;
            bb.add(hb)
          }
          return hb
        }
      }())
    }

    function Nu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ub = {};
      for (const [hb, Bb] of Object.entries(bb)) ub[hb] = xb(Bb) && null !== Bb ? eu(Bb) : String(Bb);
      return ub
    }
    var su = class bb {
      constructor() {
        var ub = this;
        let hb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pb;
        this.context = hb, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = bb => {
          this.adopting = !0;
          try {
            var ub;
            null === (ub = this.context.api) || void 0 === ub || ub.setSession(bb)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ub.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = iu({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Lb
        }), this.updateUserSession = gu({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Lb
        }, hb), this.init()
      }
      static removeUserSession() {
        hu(Ob, bb.storageTypeLocal)
      }
      static storeUserSession(ub) {
        uu(Ob, eu(ub), bb.storageTypeLocal)
      }
      static fetchUserSession() {
        const ub = bu(Ob, bb.storageTypeLocal);
        return ub ? JSON.parse(ub) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const ub = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            ub && this.recordActivity(ub)
          }
        })), this.context.metas.addListener(tu({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    su.storageTypeLocal = Qb;
    var Mu = class bb {
      constructor() {
        var ub = this;
        let hb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pb;
        this.context = hb, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ub.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = iu({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Lb
        }), this.updateUserSession = gu({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Lb
        }, hb), this.init()
      }
      static removeUserSession() {
        hu(Ob, bb.storageTypeSession)
      }
      static storeUserSession(ub) {
        uu(Ob, eu(ub), bb.storageTypeSession)
      }
      static fetchUserSession() {
        const ub = bu(Ob, bb.storageTypeSession);
        return ub ? JSON.parse(ub) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const ub = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            ub && this.recordActivity(ub)
          }
        })), this.context.metas.addListener(tu({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    Mu.storageTypeSession = cb;
    const mu = new WeakMap;

    function Iu(bb) {
      let ub = mu.get(bb);
      if (!ub) {
        let hb = [],
          Bb = [];
        ub = {
          addSessionUpdateListener: bb => {
            hb.push(bb)
          },
          removeSessionUpdateListener: bb => {
            hb = hb.filter((ub => ub !== bb))
          },
          notifySessionUpdate: bb => {
            hb.forEach((ub => ub(bb)))
          },
          shouldCapture: () => Bb.every((bb => bb())),
          addCaptureFilter: bb => {
            Bb.push(bb)
          },
          removeCaptureFilter: bb => {
            Bb = Bb.filter((ub => ub !== bb))
          }
        }, mu.set(bb, ub)
      }
      return ub
    }
    var Pu = class {
      constructor(bb, ub, hb) {
        this.metas = bb, this.transports = ub, this.onActivate = hb, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = bb => {
          var ub, hb, Bb;
          const Ob = this.pending;
          var Gb, Ub;
          if ("overrides" === bb.type) return void(this.pending = {
            reset: null !== (Gb = null === Ob || void 0 === Ob ? void 0 : Ob.reset) && void 0 !== Gb && Gb,
            inheritOverrides: null === (Ub = null === Ob || void 0 === Ob ? void 0 : Ob.inheritOverrides) || void 0 === Ub || Ub,
            session: au(au({}, null === Ob || void 0 === Ob ? void 0 : Ob.session), {}, {
              overrides: au(au({}, null === Ob || void 0 === Ob ? void 0 : Ob.session.overrides), bb.overrides)
            })
          });
          const Lb = bb.session,
            Yb = Fb(Lb) || null != Lb && "id" in Lb && !Lb.id,
            Sb = null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.overrides) && void 0 !== ub ? ub : null === Ob || void 0 === Ob ? void 0 : Ob.session.overrides;
          this.pending = {
            reset: Yb || !(null === Lb || void 0 === Lb ? void 0 : Lb.id) && null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob.reset) && void 0 !== hb && hb,
            inheritOverrides: !(!bb.overrides && void 0 !== (null === Lb || void 0 === Lb ? void 0 : Lb.overrides)) && (null === (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.inheritOverrides) || void 0 === Bb || Bb),
            session: {
              id: null === Lb || void 0 === Lb ? void 0 : Lb.id,
              attributes: (null === Lb || void 0 === Lb ? void 0 : Lb.attributes) && au({}, Lb.attributes),
              overrides: bb.overrides ? au(au({}, null === Ob || void 0 === Ob ? void 0 : Ob.session.overrides), bb.overrides) : Sb && au({}, Sb)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var bb, ub;
        this.waiting = !0, Iu(this.metas).addSessionUpdateListener(this.recordUpdate), Iu(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (bb = (ub = this.metas).addCaptureListener) || void 0 === bb || bb.call(ub, this.activate), this.activate()
      }
      destroy() {
        var bb, ub;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Iu(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (bb = (ub = this.metas).removeCaptureListener) || void 0 === bb || bb.call(ub, this.activate), Iu(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function qu(bb) {
      return (null === bb || void 0 === bb ? void 0 : bb.persistent) ? su : Mu
    }

    function Eu() {}
    let yu = function(bb) {
      return bb[bb.OFF = 0] = "OFF", bb[bb.ERROR = 1] = "ERROR", bb[bb.WARN = 2] = "WARN", bb[bb.INFO = 3] = "INFO", bb[bb.VERBOSE = 4] = "VERBOSE", bb
    }({});
    const Vu = {
        debug: Eu,
        error: Eu,
        info: Eu,
        prefix: "Faro",
        warn: Eu
      },
      Fu = 1;

    function fu(bb) {
      return fu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, fu(bb)
    }

    function ku(bb) {
      var ub = function(bb, ub) {
        if ("object" != fu(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != fu(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == fu(ub) ? ub : ub + ""
    }

    function Tu(bb, ub, hb) {
      return (ub = ku(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function cu(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Qu(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? cu(Object(hb), !0).forEach((function(ub) {
          Tu(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : cu(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }
    const Ru = Qu({}, console);
    var bh = class {
        constructor() {
          this.unpatchedConsole = Ru, this.internalLogger = Vu, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
          this.internalLogger.debug(`${this.name}\n`, ...ub)
        }
        logInfo() {
          for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
          this.internalLogger.info(`${this.name}\n`, ...ub)
        }
        logWarn() {
          for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
          this.internalLogger.warn(`${this.name}\n`, ...ub)
        }
        logError() {
          for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
          this.internalLogger.error(`${this.name}\n`, ...ub)
        }
      },
      uh = class extends bh {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const hh = "2.12.1";
    var Bh = class extends uh {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = hh, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(bb) {
        var ub;
        const hb = bb.session;
        if (hb && hb.id !== (null === (ub = this.notifiedSession) || void 0 === ub ? void 0 : ub.id)) {
          var Bb;
          if (this.isAdoptingSession()) return void(this.notifiedSession = hb);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Bb = hb.attributes) || void 0 === Bb ? void 0 : Bb.previousSession)) return this.api.pushEvent(ju, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = hb);
          this.notifiedSession = hb, this.api.pushEvent(du, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(bb, ub, hb) {
        const Bb = null === hb || void 0 === hb ? void 0 : hb.session;
        let Ob, Gb, Ub = bb.fetchUserSession();
        if (ub.persistent && ub.maxSessionPersistenceTime && Ub) {
          const bb = wu();
          Ub.lastActivity < bb - ub.maxSessionPersistenceTime && (su.removeUserSession(), Ub = null)
        }
        const Lb = zu(Ub);
        if ((null === hb || void 0 === hb ? void 0 : hb.reset) || !Lb || (null === Bb || void 0 === Bb ? void 0 : Bb.id) && Bb.id !== (null === Ub || void 0 === Ub ? void 0 : Ub.sessionId)) {
          var Yb, Sb, ab, Hb, wb, Zb;
          Gb = xu({
            sessionId: (null === hb || void 0 === hb ? void 0 : hb.reset) ? void 0 : null !== (Yb = null === Bb || void 0 === Bb ? void 0 : Bb.id) && void 0 !== Yb ? Yb : null === (Sb = ub.session) || void 0 === Sb ? void 0 : Sb.id,
            isSampled: Hu(this)
          }, this);
          const bb = Gb.sessionId,
            Xb = hb && Lb ? null === Ub || void 0 === Ub || null === (ab = Ub.sessionMeta) || void 0 === ab ? void 0 : ab.overrides : void 0,
            pb = Xb ? au(au({}, null === (Hb = ub.session) || void 0 === Hb ? void 0 : Hb.overrides), Xb) : null === (wb = ub.session) || void 0 === wb ? void 0 : wb.overrides;
          Gb.sessionMeta = au({
            id: bb,
            attributes: au({
              isSampled: Gb.isSampled.toString()
            }, null === (Zb = ub.session) || void 0 === Zb ? void 0 : Zb.attributes)
          }, pb ? {
            overrides: pb
          } : {}), Ob = du
        } else {
          var Xb, pb;
          const bb = null === Ub || void 0 === Ub ? void 0 : Ub.sessionId;
          Gb = xu({
            sessionId: bb,
            isSampled: Ub.isSampled || !1,
            started: null === Ub || void 0 === Ub ? void 0 : Ub.started
          }, this);
          const hb = null === Ub || void 0 === Ub ? void 0 : Ub.sessionMeta,
            Bb = au(au({}, null === (Xb = ub.session) || void 0 === Xb ? void 0 : Xb.overrides), null === hb || void 0 === hb ? void 0 : hb.overrides);
          Gb.sessionMeta = au(au({}, ub.session), {}, {
            id: bb,
            attributes: au(au(au({}, null === (pb = ub.session) || void 0 === pb ? void 0 : pb.attributes), null === hb || void 0 === hb ? void 0 : hb.attributes), {}, {
              isSampled: Gb.isSampled.toString()
            }),
            overrides: Bb
          }), Ob = ru
        }
        var ob;
        if (Bb && (Gb.sessionMeta = au(au({}, Gb.sessionMeta), {}, {
            attributes: au(au(au({}, null === (ob = Gb.sessionMeta) || void 0 === ob ? void 0 : ob.attributes), Bb.attributes), {}, {
              isSampled: Gb.isSampled.toString()
            })
          }), Bb.overrides)) {
          const bb = (null === hb || void 0 === hb ? void 0 : hb.inheritOverrides) ? au(au({}, Gb.sessionMeta.overrides), Bb.overrides) : Bb.overrides;
          Object.keys(bb).length > 0 ? Gb.sessionMeta.overrides = bb : delete Gb.sessionMeta.overrides
        }
        return {
          initialSession: Gb,
          lifecycleType: Ob
        }
      }
      registerBeforeSendHook(bb) {
        var ub;
        this.beforeSendHook = ub => {
          var hb, Bb;
          const Ob = null === (hb = ub.meta.session) || void 0 === hb ? void 0 : hb.id;
          Ob && !this.transports.isPaused() && bb(Ob);
          const Gb = null === (Bb = ub.meta.session) || void 0 === Bb ? void 0 : Bb.attributes;
          if (Gb && "true" === (null === Gb || void 0 === Gb ? void 0 : Gb.isSampled)) {
            var Ub;
            let bb = JSON.parse(JSON.stringify(ub));
            const hb = null === (Ub = bb.meta.session) || void 0 === Ub ? void 0 : Ub.attributes;
            var Lb;
            if (null === hb || void 0 === hb || delete hb.isSampled, 0 === Object.keys(null !== hb && void 0 !== hb ? hb : {}).length) null === (Lb = bb.meta.session) || void 0 === Lb || delete Lb.attributes;
            return bb
          }
          return null
        }, null === (ub = this.transports) || void 0 === ub || ub.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var bb;
        this.logDebug("init session instrumentation");
        const ub = document.prerendering;
        var hb;
        if ((null === (bb = this.config.sessionTracking) || void 0 === bb ? void 0 : bb.enabled) && (ub || this.prerenderSession)) return null !== (hb = this.prerenderSession) && void 0 !== hb || (this.prerenderSession = new Pu(this.metas, this.transports, (bb => {
          this.prerenderSession = void 0, this.initializeSession(bb)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(bb) {
        const ub = this.config.sessionTracking;
        if (null === ub || void 0 === ub ? void 0 : ub.enabled) {
          var hb, Bb;
          const Ob = qu(ub),
            Gb = new Ob(this);
          this.isAdoptingSession = Gb.isAdopting, this.registerBeforeSendHook(Gb.recordActivity);
          const {
            initialSession: Ub,
            lifecycleType: Lb
          } = this.createInitialSession(Ob, ub, bb);
          Ob.storeUserSession(Ub);
          const Yb = Ub.sessionMeta;
          this.notifiedSession = Yb, this.api.setSession(Yb), this.captureListener = () => {
            this.transports.isPaused() || Gb.updateSession({
              refreshActivity: !1
            })
          }, null === (hb = (Bb = this.metas).addCaptureListener) || void 0 === hb || hb.call(Bb, this.captureListener), Lb === du && this.api.pushEvent(du, {}, void 0, {
            skipDedupe: !0
          }), Lb === ru && this.api.pushEvent(ru, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var bb, ub, hb;
        (null === (bb = this.prerenderSession) || void 0 === bb || bb.destroy(), this.captureListener) && (null === (ub = (hb = this.metas).removeCaptureListener) || void 0 === ub || ub.call(hb, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Oh(bb, ub, hb, Bb) {
      const Ob = {
        filename: bb || document.location.href,
        function: ub || "?"
      };
      return void 0 !== hb && (Ob.lineno = hb), void 0 !== Bb && (Ob.colno = Bb), Ob
    }
    const Gh = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Uh = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Lh = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Yh = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Sh = "safari-extension",
      ah = "safari-web-extension",
      Hh = /Minified React error #\d+;/i;

    function wh(bb, ub) {
      const hb = null === bb || void 0 === bb ? void 0 : bb.includes(Sh),
        Bb = !hb && (null === bb || void 0 === bb ? void 0 : bb.includes("safari-web-extension"));
      return hb || Bb ? [(null === bb || void 0 === bb ? void 0 : bb.includes("@")) ? bb.split("@")[0] : bb, hb ? `${Sh}:${ub}` : `${ah}:${ub}`] : [bb, ub]
    }
    const Zh = 1024;

    function Xh(bb) {
      let ub = [];
      bb.stacktrace ? ub = bb.stacktrace.split("\n").filter(((bb, ub) => ub % 2 === 0)) : bb.stack && (ub = bb.stack.split("\n"));
      const hb = ub.reduce(((ub, hb, Bb) => {
        if (hb.length > Zh) return ub;
        let Ob, Gb, Ub, Lb, Yb;
        if (Ob = Gh.exec(hb)) {
          if (Gb = Ob[1], Ub = Ob[2], Lb = Ob[3], Yb = Ob[4], null === Ub || void 0 === Ub ? void 0 : Ub.startsWith("eval")) {
            const bb = Uh.exec(Ub);
            bb && (Ub = bb[1], Lb = bb[2], Yb = bb[3])
          }
          Ub = (null === Ub || void 0 === Ub ? void 0 : Ub.startsWith("address at ")) ? Ub.substring(11) : Ub, [Gb, Ub] = wh(Gb, Ub)
        } else if (Ob = Lh.exec(hb)) {
          if (Gb = Ob[1], Ub = Ob[3], Lb = Ob[4], Yb = Ob[5], Ub && Ub.includes(" > eval")) {
            const bb = Yh.exec(Ub);
            bb && (Gb = Gb || "eval", Ub = bb[1], Lb = bb[2])
          } else 0 === Bb && !Yb && rb(bb.columnNumber) && (Yb = String(bb.columnNumber + 1));
          [Gb, Ub] = wh(Gb, Ub)
        }
        return (Ub || Gb) && ub.push(Oh(Ub, Gb, Lb ? Number(Lb) : void 0, Yb ? Number(Yb) : void 0)), ub
      }), []);
      return Hh.test(bb.message) ? hb.slice(1) : hb
    }

    function ph(bb) {
      return {
        frames: Xh(bb)
      }
    }
    const oh = "http-request-start",
      Ah = "http-request-end";
    var lh = class bb {
      constructor() {
        this.subscribers = []
      }
      subscribe(bb) {
        return this.subscribers.push(bb), {
          unsubscribe: () => this.unsubscribe(bb)
        }
      }
      unsubscribe(bb) {
        this.subscribers = this.subscribers.filter((ub => ub !== bb))
      }
      notify(bb) {
        this.subscribers.forEach((ub => ub(bb)))
      }
      first() {
        const ub = new bb,
          hb = bb => {
            ub.notify(bb), Bb.unsubscribe()
          },
          Bb = this.subscribe(hb),
          Ob = ub.unsubscribe.bind(ub);
        return this.withUnsubscribeOverride(ub, Ob, hb)
      }
      takeWhile(ub) {
        const hb = new bb,
          Bb = bb => {
            ub(bb) ? hb.notify(bb) : hb.unsubscribe(Bb)
          };
        this.subscribe(Bb);
        const Ob = hb.unsubscribe.bind(hb);
        return this.withUnsubscribeOverride(hb, Ob, Bb)
      }
      filter(ub) {
        const hb = new bb,
          Bb = bb => {
            ub(bb) && hb.notify(bb)
          };
        this.subscribe(Bb);
        const Ob = hb.unsubscribe.bind(hb);
        return this.withUnsubscribeOverride(hb, Ob, Bb)
      }
      merge() {
        const ub = new bb,
          hb = [];
        for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
        Ob.forEach((bb => {
          const Bb = bb.subscribe((bb => {
            ub.notify(bb)
          }));
          hb.push(Bb)
        }));
        const Ub = ub.unsubscribeAll.bind(ub);
        return ub.unsubscribe = () => {
          hb.forEach((bb => bb.unsubscribe())), Ub()
        }, ub
      }
      withUnsubscribeOverride(bb, ub, hb) {
        return bb.unsubscribe = bb => {
          ub(bb), this.unsubscribe(hb)
        }, bb
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Kh = function(bb) {
      return bb.TRACE = "trace", bb.DEBUG = "debug", bb.INFO = "info", bb.LOG = "log", bb.WARN = "warn", bb.ERROR = "error", bb
    }({});
    const Wh = "log",
      Ch = ["trace", "debug", "info", "log", "warn", "error"];
    let dh, rh = !1;
    const jh = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      nh = "Error",
      Dh = bb => bb.map((bb => xb(bb) ? eu(bb) : String(bb))).join(" ");

    function xh(bb) {
      let ub, hb, Bb, Ob, Gb = [];
      if (Mb(bb) && bb.error) ub = bb.error.message, hb = bb.error.name, Gb = Xh(bb.error);
      else if ((Bb = mb(bb)) || Ib(bb)) {
        const {
          name: Ob,
          message: Gb
        } = bb;
        hb = null !== Ob && void 0 !== Ob ? Ob : Bb ? "DOMError" : "DOMException", ub = Gb ? `${hb}: ${Gb}` : hb
      } else sb(bb) ? (hb = bb.name, ub = bb.message, Gb = Xh(bb)) : (xb(bb) || (Ob = eb(bb))) && (hb = Ob ? bb.constructor.name : void 0, ub = `Non-Error exception captured with keys: ${Object.keys(bb)}`);
      return [ub, hb, Gb]
    }

    function zh(bb) {
      const [ub, hb, Bb, Ob, Gb] = bb;
      let Ub, Lb, Yb = [];
      const Sb = db(ub),
        ab = Oh(hb, "?", Bb, Ob);
      return Gb || !Sb ? ([Ub, Lb, Yb] = xh(null !== Gb && void 0 !== Gb ? Gb : ub), 0 === Yb.length && (Yb = [ab])) : Sb && ([Ub, Lb] = function(bb) {
        var ub, hb;
        const Bb = bb.match(jh),
          Ob = null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== ub ? ub : nh;
        return [null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb[2]) && void 0 !== hb ? hb : bb, Ob]
      }(ub), Yb = [ab]), {
        value: Ub,
        type: Lb,
        stackFrames: Yb
      }
    }

    function gh(bb, ub) {
      return sb(bb[0]) ? zh(bb) : {
        value: ub(bb)
      }
    }
    const ih = bb => bb.map((bb => {
      try {
        return String(bb)
      } catch (ub) {
        return ""
      }
    })).join(" ");
    var vh = class bb extends uh {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = hh, this.errorSerializer = ih
      }
      initialize() {
        var ub, hb;
        const Bb = this.config.consoleInstrumentation,
          Ob = (null === Bb || void 0 === Bb ? void 0 : Bb.serializeErrors) || !!(null === Bb || void 0 === Bb ? void 0 : Bb.errorSerializer);
        this.errorSerializer = Ob ? null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb.errorSerializer) && void 0 !== ub ? ub : Dh : ih;
        const Gb = null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.disabledLevels) && void 0 !== hb ? hb : bb.defaultDisabledLevels,
          Ub = function(bb) {
            if (dh || (dh = new lh), !rh) {
              const ub = null !== bb && void 0 !== bb ? bb : Ru;
              Ch.forEach((bb => {
                console[bb] = function() {
                  for (var hb, Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
                  dh.notify({
                    type: "console",
                    level: bb,
                    args: Ob
                  }), null === (hb = ub[bb]) || void 0 === hb || hb.apply(console, Ob)
                }
              })), rh = !0
            }
            return dh
          }(this.unpatchedConsole);
        this.subscription = Ub.subscribe((ub => {
          let {
            level: hb,
            args: Ob
          } = ub;
          if (!Gb.includes(hb)) try {
            if (hb !== Kh.ERROR || (null === Bb || void 0 === Bb ? void 0 : Bb.consoleErrorAsLog))
              if (hb === Kh.ERROR && (null === Bb || void 0 === Bb ? void 0 : Bb.consoleErrorAsLog)) {
                const {
                  value: ub,
                  type: Bb,
                  stackFrames: Gb
                } = gh(Ob, this.errorSerializer);
                this.api.pushLog(ub ? [bb.consoleErrorPrefix + ub] : Ob, {
                  level: hb,
                  context: {
                    value: null !== ub && void 0 !== ub ? ub : "",
                    type: null !== Bb && void 0 !== Bb ? Bb : "",
                    stackFrames: (null === Gb || void 0 === Gb ? void 0 : Gb.length) ? Dh(Gb) : ""
                  }
                })
              } else this.api.pushLog(Ob, {
                level: hb
              });
            else {
              const {
                value: ub,
                type: hb,
                stackFrames: Bb
              } = gh(Ob, this.errorSerializer);
              if (ub && !hb && !Bb) return void this.api.pushError(new Error(bb.consoleErrorPrefix + ub));
              this.api.pushError(new Error(bb.consoleErrorPrefix + ub), {
                type: hb,
                stackFrames: Bb
              })
            }
          } catch (Ub) {
            this.logError(Ub)
          }
        }))
      }
      destroy() {
        var bb;
        null === (bb = this.subscription) || void 0 === bb || bb.unsubscribe(), this.subscription = void 0
      }
    };
    vh.defaultDisabledLevels = [Kh.DEBUG, Kh.TRACE, Kh.LOG], vh.consoleErrorPrefix = "console.error: ";
    const th = [];
    var Jh = class extends uh {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = hh
      }
      initialize() {
        this.logDebug("Initializing"),
          function(bb) {
            const ub = window.onerror;
            window.onerror = function() {
              for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
              try {
                const {
                  value: ub,
                  type: hb,
                  stackFrames: Ob
                } = zh(Bb), Gb = Bb[4];
                if (ub) {
                  const Bb = {
                    type: hb,
                    stackFrames: Ob
                  };
                  null != Gb && (Bb.originalError = Gb), bb.pushError(new Error(ub), Bb)
                }
              } finally {
                null === ub || void 0 === ub || ub.apply(window, Bb)
              }
            }
          }(this.api),
          function(bb) {
            const ub = ub => {
              var hb;
              let Bb, Ob, Gb = ub;
              if (Gb.reason) Gb = ub.reason;
              else if (null === (hb = ub.detail) || void 0 === hb ? void 0 : hb.reason) {
                var Ub;
                Gb = null === (Ub = ub.detail) || void 0 === Ub ? void 0 : Ub.reason
              }
              let Lb = [];
              tb(Gb) ? (Bb = `Non-Error promise rejection captured with value: ${String(Gb)}`, Ob = "UnhandledRejection") : [Bb, Ob, Lb] = xh(Gb), Bb && bb.pushError(new Error(Bb), {
                type: Ob,
                stackFrames: Lb
              })
            };
            window.addEventListener("unhandledrejection", ub), th.push(ub)
          }(this.api)
      }
    };
    const eh = "unknown";
    var Nh = class extends uh {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = hh, this.waitingForActivation = !1, this.sendViewChangedEvent = bb => {
          var ub;
          if (this.waitingForActivation || document.prerendering) return;
          const hb = bb.view;
          if (hb && hb.name !== (null === (ub = this.notifiedView) || void 0 === ub ? void 0 : ub.name)) {
            var Bb, Ob, Gb;
            const bb = null !== (Bb = null === (Ob = this.notifiedView) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : eh;
            this.notifiedView = hb, this.api.pushEvent(Cu, {
              fromView: bb,
              toView: null !== (Gb = hb.name) && void 0 !== Gb ? Gb : eh
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
    class sh {
      t;
      o = 0;
      i = [];
      l(bb) {
        if (bb.hadRecentInput) return;
        const ub = this.i[0],
          hb = this.i.at(-1);
        this.o && ub && hb && bb.startTime - hb.startTime < 1e3 && bb.startTime - ub.startTime < 5e3 ? (this.o += bb.value, this.i.push(bb)) : (this.o = bb.value, this.i = [bb]), this.t?.(bb)
      }
    }
    const Mh = () => {
        const bb = performance.getEntriesByType("navigation")[0];
        if (bb && bb.responseStart > 0 && bb.responseStart < performance.now()) return bb
      },
      mh = bb => {
        if ("loading" === document.readyState) return "loading";
        const ub = Mh();
        if (ub) {
          if (bb < ub.domInteractive) return "loading";
          if (0 === ub.domContentLoadedEventStart || bb < ub.domContentLoadedEventStart) return "dom-interactive";
          if (0 === ub.domComplete || bb < ub.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Ih = bb => {
        const ub = bb.nodeName;
        return 1 === bb.nodeType ? ub.toLowerCase() : ub.toUpperCase().replace(/^#/, "")
      },
      Ph = bb => {
        let ub = "";
        try {
          for (; 9 !== bb?.nodeType;) {
            const hb = bb,
              Bb = hb.id ? "#" + hb.id : [Ih(hb), ...Array.from(hb.classList ?? []).sort()].join(".");
            if (ub.length + Bb.length > 99) return ub || Bb;
            if (ub = ub ? Bb + ">" + ub : Bb, hb.id) break;
            bb = hb.parentNode
          }
        } catch {}
        return ub
      },
      qh = new WeakMap;

    function Eh(bb, ub) {
      let hb = qh.get(ub);
      return hb || (hb = new WeakMap, qh.set(ub, hb)), hb.get(bb) || hb.set(bb, new ub), hb.get(bb)
    }
    let yh = -1;
    const Vh = () => yh,
      Fh = bb => {
        addEventListener("pageshow", (ub => {
          ub.persisted && (yh = ub.timeStamp, bb(ub))
        }), !0)
      },
      fh = (bb, ub, hb, Bb) => {
        let Ob, Gb;
        return Ub => {
          ub.value >= 0 && (Ub || Bb) && (Gb = ub.value - (Ob ?? 0), (Gb || void 0 === Ob) && (Ob = ub.value, ub.delta = Gb, ub.rating = ((bb, ub) => bb > ub[1] ? "poor" : bb > ub[0] ? "needs-improvement" : "good")(ub.value, hb), bb(ub)))
        }
      },
      kh = bb => {
        requestAnimationFrame((() => requestAnimationFrame((() => bb()))))
      },
      Th = () => Mh()?.activationStart ?? 0;
    let ch = -1;
    const Qh = new Set,
      Rh = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      bB = bb => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === bb.type)
            for (const bb of Qh) bb();
          isFinite(ch) || (ch = "visibilitychange" === bb.type ? bb.timeStamp : 0, removeEventListener("prerenderingchange", bB, !0))
        }
      },
      uB = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ch = 1 / 0), ch < 0) {
          const bb = Th(),
            ub = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((ub => "hidden" === ub.name && ub.startTime >= bb))?.startTime;
          ch = ub ?? Rh(), addEventListener("visibilitychange", bB, !0), addEventListener("prerenderingchange", bB, !0), Fh((() => {
            setTimeout((() => {
              ch = Rh()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return ch
          },
          onHidden(bb) {
            Qh.add(bb)
          }
        }
      },
      hB = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 ? arguments[6] : void 0;
        const Lb = Mh(),
          Yb = Lb?.navigationId || 0;
        let Sb = "navigate";
        return hb ? Sb = hb : Vh() >= 0 ? Sb = "back-forward-cache" : Lb && (document.prerendering || Th() > 0 ? Sb = "prerender" : document.wasDiscarded ? Sb = "restore" : Lb.type && (Sb = Lb.type.replace(/_/g, "-"))), {
          name: bb,
          value: ub,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Sb,
          navigationId: Bb || Yb,
          navigationInteractionId: Ob,
          navigationURL: Gb || Lb?.name,
          navigationStartTime: Ub || 0
        }
      },
      BB = function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Bb = bb.filter((bb => PerformanceObserver.supportedEntryTypes.includes(bb)));
          if (Bb.length > 0) {
            const bb = new PerformanceObserver((bb => {
              queueMicrotask((() => {
                const hb = bb.getEntries();
                Bb.length > 1 && hb.sort(((bb, ub) => bb.startTime + bb.duration - (ub.startTime + ub.duration))), ub(hb)
              }))
            }));
            for (const ub of Bb) bb.observe({
              type: ub,
              buffered: !0,
              ...hb
            });
            return bb
          }
        } catch {}
      },
      OB = bb => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && bb && bb.reportSoftNavs,
      GB = (bb, ub) => {
        if (bb.set(ub.navigationId, ub), bb.size > 2) {
          const ub = bb.keys().next().value;
          void 0 !== ub && bb.delete(ub)
        }
      },
      UB = bb => {
        let ub = !1;
        return () => {
          ub || (bb(), ub = !0)
        }
      };
    class LB {
      u
    }
    const YB = bb => {
        document.prerendering ? addEventListener("prerenderingchange", bb, !0) : bb()
      },
      SB = [1800, 3e3],
      aB = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hb = OB(ub);
        YB((() => {
          const Bb = Eh(ub, LB),
            Ob = uB();
          let Gb, Ub = hB("FCP");
          const Lb = BB(["paint"], (bb => {
            for (const ub of bb) "first-contentful-paint" === ub.name && (Lb.disconnect(), ub.startTime < Ob.firstHiddenTime && (Ub.value = Math.max(ub.startTime - Th(), 0), Ub.entries.push(ub), Ub.navigationId = ub.navigationId || Ub.navigationId, Gb(!0)))
          }));
          Lb && (Gb = fh(bb, Ub, SB, ub.reportAllChanges), Fh((hb => {
            Ub = hB("FCP", -1, "back-forward-cache", Ub.navigationId, Ub.navigationInteractionId, Ub.navigationURL, Vh()), Gb = fh(bb, Ub, SB, ub.reportAllChanges), kh((() => {
              Ub.value = performance.now() - hb.timeStamp, Gb(!0)
            }))
          }))), hb && BB(["soft-navigation"], (hb => {
            hb.forEach((hb => {
              Bb.u && hb.navigationId && GB(Bb.u, hb);
              const Ob = Math.max((hb.presentationTime || hb.paintTime || 0) - hb.startTime, 0);
              Ub = hB("FCP", Ob, "soft-navigation", hb.navigationId, hb.interactionId, hb.name, hb.startTime), Gb = fh(bb, Ub, SB, ub.reportAllChanges), Gb(!0)
            }))
          }), ub)
        }))
      },
      HB = [.1, .25],
      wB = bb => bb.find((bb => 1 === bb.node?.nodeType)) || bb[0];
    let ZB = 0,
      XB = 1 / 0,
      pB = 0;
    const oB = bb => {
      for (const ub of bb) ub.interactionId && (XB = Math.min(XB, ub.interactionId), pB = Math.max(pB, ub.interactionId), ZB = pB ? (pB - XB) / 7 + 1 : 0)
    };
    let AB;
    const lB = () => AB ? ZB : performance.interactionCount ?? 0;
    class KB {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return lB() - this.h
      }
      D() {
        this.h = lB(), this.v.length = 0, this.p.clear()
      }
      S(bb) {
        const ub = this.T(),
          hb = Math.min(this.v.length - 1, Math.floor(ub / 50));
        return !ub || -1 !== hb || "soft-navigation" !== bb && "back-forward-cache" !== bb ? this.v[hb] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(bb) {
        if (this.m?.(bb), !bb.interactionId) return;
        const ub = this.v.at(-1);
        let hb = this.p.get(bb.interactionId);
        if (hb || this.v.length < 10 || bb.duration > ub.k) {
          if (hb ? bb.duration > hb.k ? (hb.entries = [bb], hb.k = bb.duration) : bb.duration === hb.k && bb.startTime === hb.entries[0].startTime && hb.entries.push(bb) : (hb = {
              id: bb.interactionId,
              entries: [bb],
              k: bb.duration
            }, this.p.set(hb.id, hb), this.v.push(hb)), this.v.sort(((bb, ub) => ub.k - bb.k)), this.v.length > 10) {
            const bb = this.v.splice(10);
            for (const ub of bb) this.p.delete(ub.id)
          }
          this.M?.(hb)
        }
      }
    }
    const WB = bb => {
        const ub = "requestIdleCallback" in globalThis ? 1e3 : 0,
          hb = globalThis.requestIdleCallback || setTimeout,
          Bb = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) bb();
        else {
          const Ob = UB(bb);
          let Gb = -1;
          const Ub = () => {
            Bb(Gb), Ob()
          };
          addEventListener("visibilitychange", Ub, {
            once: !0,
            capture: !0
          }), Gb = hb((() => {
            removeEventListener("visibilitychange", Ub, {
              capture: !0
            }), Ob()
          }), {
            timeout: ub
          })
        }
      },
      CB = [200, 500],
      dB = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hb = Eh(ub = Object.assign({}, ub), KB);
        let Bb = [],
          Ob = [],
          Gb = 0;
        const Ub = new WeakMap,
          Lb = new WeakMap;
        let Yb = !1;
        const Sb = () => {
            Yb || (Yb = !0, WB(ab))
          },
          ab = () => {
            const bb = new Set(hb.v.map((bb => Ub.get(bb.entries[0])))),
              ub = Ob.length - 10;
            Ob = Ob.filter(((hb, Bb) => Bb >= ub || bb.has(hb)));
            const Lb = new Set;
            for (const hb of Ob) {
              const bb = Hb(hb.startTime, hb.processingEnd);
              for (const ub of bb) Lb.add(ub)
            }
            const Sb = Bb.length - 10;
            Bb = Bb.filter(((bb, ub) => Lb.has(bb) || ub >= Sb && bb.startTime > Gb)), Yb = !1
          };
        hb.m = bb => {
          const hb = bb.startTime + bb.duration;
          let Bb;
          Gb = Math.max(Gb, bb.processingEnd);
          for (let Gb = Ob.length - 1; Gb >= 0; Gb--) {
            const Ub = Ob[Gb];
            if (Math.abs(hb - Ub.renderTime) <= 8) {
              Bb = Ub, Bb.startTime = Math.min(bb.startTime, Bb.startTime), Bb.processingStart = Math.min(bb.processingStart, Bb.processingStart), Bb.processingEnd = Math.max(bb.processingEnd, Bb.processingEnd), ub.includeProcessedEventEntries && Bb.entries.push(bb);
              break
            }
          }
          Bb || (Bb = {
            startTime: bb.startTime,
            processingStart: bb.processingStart,
            processingEnd: bb.processingEnd,
            renderTime: hb,
            entries: ub.includeProcessedEventEntries ? [bb] : []
          }, Ob.push(Bb)), bb.interactionId && Ub.set(bb, Bb), Sb()
        }, hb.M = bb => {
          if (!Lb.get(bb)) {
            const hb = bb.entries.find((bb => bb.target))?.target;
            if (hb) {
              const Bb = ub.generateTarget?.(hb) ?? Ph(hb);
              Lb.set(bb, Bb)
            } else {
              const ub = bb.entries.find((bb => bb.targetSelector))?.targetSelector;
              ub && Lb.set(bb, ub)
            }
          }
        };
        const Hb = (bb, ub) => {
          const hb = [];
          for (const Ob of Bb)
            if (!(Ob.startTime + Ob.duration < bb)) {
              if (Ob.startTime > ub) break;
              hb.push(Ob)
            } return hb
        };
        BB(["long-animation-frame"], (bb => {
            Bb = Bb.concat(bb), Sb()
          }), ub),
          function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const hb = uB();
            YB((() => {
              "interactionCount" in performance || AB || (AB = BB(["event"], oB, {
                durationThreshold: 0
              }));
              let Bb, Ob = hB("INP");
              const Gb = Eh(ub, KB),
                Ub = (hb, Ub, Lb, Yb, Sb) => {
                  Gb.D(), Ob = hB("INP", -1, hb, Ub, Lb, Yb, Sb), Bb = fh(bb, Ob, CB, ub.reportAllChanges)
                },
                Lb = () => {
                  const bb = Gb.S(Ob.navigationType);
                  bb && bb.k !== Ob.value && (Ob.value = bb.k, Ob.entries = bb.entries, Bb())
                },
                Yb = bb => {
                  Lb(), Bb(!0), Ub("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                },
                Sb = function(bb) {
                  let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  WB((() => {
                    for (const ub of bb) "soft-navigation" !== ub.entryType ? Gb.l(ub) : Yb(ub);
                    Lb(), ub && Bb(!0)
                  }))
                },
                ab = ["event", "first-input"];
              OB(ub) && ab.push("soft-navigation");
              const Hb = BB(ab, Sb, {
                ...ub,
                durationThreshold: ub.durationThreshold ?? 40
              });
              Bb = fh(bb, Ob, CB, ub.reportAllChanges), Hb && (hb.onHidden((() => {
                Sb(Hb.takeRecords(), !0)
              })), Fh((() => {
                Ub("back-forward-cache", Ob.navigationId, Ob.navigationInteractionId, Ob.navigationURL, Vh())
              })))
            }))
          }((ub => {
            bb((bb => {
              if (0 === bb.entries.length) {
                const ub = bb.navigationStartTime || 0,
                  hb = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: bb.value,
                    loadState: mh(ub)
                  };
                return Object.assign(bb, {
                  attribution: hb
                })
              }
              const ub = bb.entries[0],
                Bb = Ub.get(ub),
                Ob = Math.max(Bb.processingStart, ub.startTime),
                Gb = Math.max(ub.startTime + ub.duration, Ob),
                Yb = Math.min(Bb.processingEnd, Gb),
                Sb = Bb.entries.sort(((bb, ub) => bb.processingStart - ub.processingStart)),
                ab = Hb(ub.startTime, Yb),
                wb = hb.p.get(ub.interactionId),
                Zb = {
                  interactionTarget: Lb.get(wb),
                  interactionType: ub.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: ub.startTime,
                  nextPaintTime: Gb,
                  processedEventEntries: Sb,
                  longAnimationFrameEntries: ab,
                  inputDelay: Ob - ub.startTime,
                  processingDuration: Yb - Ob,
                  presentationDelay: Gb - Yb,
                  loadState: mh(ub.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (bb => {
                const ub = bb.interactionTime,
                  hb = bb.nextPaintTime;
                if (!bb.longAnimationFrameEntries?.length || !ub || !hb) return;
                const Bb = bb.inputDelay,
                  Ob = bb.processingDuration;
                let Gb, Ub, Lb = 0,
                  Yb = 0,
                  Sb = 0,
                  ab = 0;
                for (const Zb of bb.longAnimationFrameEntries) {
                  Yb = Yb + Zb.startTime + Zb.duration - Zb.styleAndLayoutStart;
                  for (const bb of Zb.scripts) {
                    const hb = bb.startTime + bb.duration;
                    if (hb < ub) continue;
                    const Sb = hb - Math.max(ub, bb.startTime),
                      Hb = bb.duration ? Sb / bb.duration * bb.forcedStyleAndLayoutDuration : 0;
                    Lb += Sb - Hb, Yb += Hb, Sb > ab && (Ub = bb.startTime < ub + Bb ? "input-delay" : bb.startTime >= ub + Bb + Ob ? "presentation-delay" : "processing-duration", Gb = bb, ab = Sb)
                  }
                }
                const Hb = bb.longAnimationFrameEntries.at(-1),
                  wb = Hb ? Hb.startTime + Hb.duration : 0;
                wb >= ub + Bb + Ob && (Sb = hb - wb), Gb && Ub && (bb.longestScript = {
                  entry: Gb,
                  subpart: Ub,
                  intersectingDuration: ab
                }), bb.totalScriptDuration = Lb, bb.totalStyleAndLayoutDuration = Yb, bb.totalPaintDuration = Sb, bb.totalUnattributedDuration = hb - ub - Lb - Yb - Sb
              })(Zb), Object.assign(bb, {
                attribution: Zb
              })
            })(ub))
          }), ub)
      };
    class rB {
      m;
      u;
      l(bb) {
        this.m?.(bb)
      }
    }
    const jB = [2500, 4e3];
    let nB = 50;
    const DB = [];
    BB(["resource"], (bb => {
      for (const ub of bb) DB.push(ub), DB.length > nB && DB.shift()
    }));
    const xB = [800, 1800],
      zB = bb => {
        document.prerendering ? YB((() => zB(bb))) : "complete" !== document.readyState ? addEventListener("load", (() => zB(bb)), !0) : setTimeout(bb)
      },
      gB = "load_state",
      iB = "time_to_first_byte";
    var vB = class {
        constructor(bb, ub) {
          this.corePushMeasurement = bb, this.webVitalConfig = ub
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var bb;
          ! function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const hb = Eh(ub = Object.assign({}, ub), sh),
              Bb = new WeakMap;
            hb.t = bb => {
                if (bb?.sources?.length) {
                  const hb = wB(bb.sources),
                    Ob = hb?.node;
                  if (Ob) {
                    const bb = ub.generateTarget?.(Ob) ?? Ph(Ob);
                    Bb.set(hb, bb)
                  }
                }
              },
              function(bb) {
                let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const hb = uB();
                aB(UB((() => {
                  let Bb, Ob = hB("CLS", 0);
                  const Gb = Eh(ub, sh),
                    Ub = (hb, Ub, Lb, Yb, Sb) => {
                      Ob = hB("CLS", 0, hb, Ub, Lb, Yb, Sb), Gb.o = 0, Bb = fh(bb, Ob, HB, ub.reportAllChanges)
                    },
                    Lb = function() {
                      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Gb.o > Ob.value && (Ob.value = Gb.o, Ob.entries = Gb.i), Bb(bb)
                    },
                    Yb = bb => {
                      Lb(!0), Ub("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                    },
                    Sb = bb => {
                      for (const ub of bb) "soft-navigation" !== ub.entryType ? Gb.l(ub) : Yb(ub);
                      Lb()
                    },
                    ab = ["layout-shift"];
                  OB(ub) && ab.push("soft-navigation");
                  const Hb = BB(ab, Sb);
                  Hb && (Bb = fh(bb, Ob, HB, ub.reportAllChanges), hb.onHidden((() => {
                    Sb(Hb.takeRecords()), Bb(!0)
                  })), Fh((() => {
                    Ub("back-forward-cache", Ob.navigationId, Ob.navigationInteractionId, Ob.navigationURL, Vh()), kh(Bb)
                  })), setTimeout(Bb))
                })))
              }((ub => {
                bb((bb => {
                  let ub = {};
                  if (bb.entries.length) {
                    const hb = bb.entries.reduce(((bb, ub) => bb.value > ub.value ? bb : ub));
                    if (hb?.sources?.length) {
                      const bb = wB(hb.sources);
                      bb && (ub = {
                        largestShiftTarget: Bb.get(bb),
                        largestShiftTime: hb.startTime,
                        largestShiftValue: hb.value,
                        largestShiftSource: bb,
                        largestShiftEntry: hb,
                        loadState: mh(hb.startTime)
                      })
                    }
                  }
                  return Object.assign(bb, {
                    attribution: ub
                  })
                })(ub))
              }), ub)
          }((bb => {
            const {
              loadState: ub,
              largestShiftValue: hb,
              largestShiftTime: Bb,
              largestShiftTarget: Ob
            } = bb.attribution, Gb = this.buildInitialValues(bb);
            this.addIfPresent(Gb, "largest_shift_value", hb), this.addIfPresent(Gb, "largest_shift_time", Bb);
            const Ub = this.buildInitialContext(bb);
            this.addIfPresent(Ub, gB, ub), this.addIfPresent(Ub, "largest_shift_target", Ob), this.pushMeasurement(Gb, Ub)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureFCP() {
          var bb;
          ! function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const hb = Eh(ub = Object.assign({}, ub), LB);
            OB(ub) && (hb.u = new Map), aB((ub => {
              bb((bb => {
                let ub = {
                  timeToFirstByte: 0,
                  firstByteToFCP: bb.value,
                  loadState: mh(Vh())
                };
                if ("soft-navigation" !== bb.navigationType) {
                  if (bb.entries.length) {
                    const hb = Mh(),
                      Bb = bb.entries.at(-1);
                    if (hb) {
                      const Ob = hb.responseStart,
                        Gb = hb.activationStart || 0,
                        Ub = Math.max(0, Ob - Gb);
                      ub = {
                        timeToFirstByte: Ub,
                        firstByteToFCP: bb.value - Ub,
                        loadState: mh(bb.entries[0].startTime),
                        navigationEntry: hb,
                        fcpEntry: Bb
                      }
                    }
                  }
                } else {
                  const Bb = hb.u?.get(bb.navigationId);
                  Bb && (ub = {
                    timeToFirstByte: 0,
                    firstByteToFCP: bb.value,
                    loadState: "complete",
                    navigationEntry: Bb
                  })
                }
                return Object.assign(bb, {
                  attribution: ub
                })
              })(ub))
            }), ub)
          }((bb => {
            const {
              firstByteToFCP: ub,
              timeToFirstByte: hb,
              loadState: Bb
            } = bb.attribution, Ob = this.buildInitialValues(bb);
            this.addIfPresent(Ob, "first_byte_to_fcp", ub), this.addIfPresent(Ob, iB, hb);
            const Gb = this.buildInitialContext(bb);
            this.addIfPresent(Gb, gB, Bb), this.pushMeasurement(Ob, Gb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureINP() {
          var bb;
          dB((bb => {
            var ub;
            const {
              interactionTime: hb,
              presentationDelay: Bb,
              inputDelay: Ob,
              processingDuration: Gb,
              nextPaintTime: Ub,
              loadState: Lb,
              interactionTarget: Yb,
              interactionType: Sb,
              totalScriptDuration: ab,
              totalStyleAndLayoutDuration: Hb,
              totalPaintDuration: wb,
              totalUnattributedDuration: Zb,
              longestScript: Xb
            } = bb.attribution, pb = this.buildInitialValues(bb);
            this.addIfPresent(pb, "interaction_time", hb), this.addIfPresent(pb, "presentation_delay", Bb), this.addIfPresent(pb, "input_delay", Ob), this.addIfPresent(pb, "processing_duration", Gb), this.addIfPresent(pb, "next_paint_time", Ub), this.addNumberIfDefined(pb, "total_script_duration", ab), this.addNumberIfDefined(pb, "total_style_and_layout_duration", Hb), this.addNumberIfDefined(pb, "total_paint_duration", wb), this.addNumberIfDefined(pb, "total_unattributed_duration", Zb), this.addNumberIfDefined(pb, "longest_script_intersecting_duration", null === Xb || void 0 === Xb ? void 0 : Xb.intersectingDuration);
            const ob = this.buildInitialContext(bb);
            this.addIfPresent(ob, gB, Lb), this.addIfPresent(ob, "interaction_target", Yb), this.addIfPresent(ob, "interaction_type", Sb), this.addIfPresent(ob, "longest_script_subpart", null === Xb || void 0 === Xb ? void 0 : Xb.subpart), this.addIfPresent(ob, "longest_script_invoker_type", null === Xb || void 0 === Xb ? void 0 : Xb.entry.invokerType), (null === (ub = this.webVitalConfig) || void 0 === ub ? void 0 : ub.trackAttributionSources) && (this.addIfPresent(ob, "longest_script_invoker", null === Xb || void 0 === Xb ? void 0 : Xb.entry.invoker), this.addIfPresent(ob, "longest_script_source_url", null === Xb || void 0 === Xb ? void 0 : Xb.entry.sourceURL), this.addIfPresent(ob, "longest_script_source_function_name", null === Xb || void 0 === Xb ? void 0 : Xb.entry.sourceFunctionName), this.addIfPresent(ob, "longest_script_source_char_position", void 0 !== (null === Xb || void 0 === Xb ? void 0 : Xb.entry.sourceCharPosition) ? String(Xb.entry.sourceCharPosition) : void 0)), this.pushMeasurement(pb, ob)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureLCP() {
          var bb;
          ! function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (ub = Object.assign({}, ub)).resourceBufferSize && (nB = ub.resourceBufferSize);
            const hb = Eh(ub, rB),
              Bb = new WeakMap;
            OB(ub) && (hb.u = new Map), hb.m = bb => {
                const hb = bb.element;
                if (hb) {
                  const Ob = ub.generateTarget?.(hb) ?? Ph(hb);
                  Bb.set(bb, Ob)
                } else bb.id && Bb.set(bb, `#${bb.id}`)
              },
              function(bb) {
                let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  hb = !1;
                const Bb = OB(ub);
                YB((() => {
                  let Ob, Gb = uB(),
                    Ub = hB("LCP");
                  const Lb = Eh(ub, rB),
                    Yb = (Bb, Lb, Yb, Sb, ab) => {
                      Ub = hB("LCP", -1, Bb, Lb, Yb, Sb, ab), Ob = fh(bb, Ub, jB, ub.reportAllChanges), hb = !1, "soft-navigation" === Bb && (Gb = uB(!0))
                    },
                    Sb = bb => {
                      Lb.u && bb.navigationId && GB(Lb.u, bb), hb || Ob(!0), Yb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime);
                      const ub = bb.getLargestInteractionContentfulPaint?.();
                      ub && ab([ub])
                    },
                    ab = bb => {
                      ub.reportAllChanges || Bb || (bb = bb.slice(-1));
                      for (const ub of bb) {
                        if (!ub) continue;
                        if ("soft-navigation" === ub.entryType) {
                          Sb(ub);
                          continue
                        }
                        let bb = 0,
                          hb = [],
                          Bb = ub.startTime;
                        if ("largest-contentful-paint" === ub.entryType) bb = Math.max(ub.startTime - Th(), 0), Lb.l(ub), hb = [ub];
                        else if ("interaction-contentful-paint" === ub.entryType) {
                          const Ob = ub;
                          if (!Ub.navigationId) continue;
                          if ("interactionId" in Ob && Ob.interactionId != Ub.navigationInteractionId) continue;
                          Bb = Ob.largestContentfulPaint?.renderTime || 0, bb = Math.max(Bb - ub.startTime, 0), Ob.largestContentfulPaint && (Lb.l(Ob.largestContentfulPaint), hb = [Ob.largestContentfulPaint])
                        }
                        Bb < Gb.firstHiddenTime && (Ub.value = bb, Ub.entries = hb, Ob())
                      }
                    },
                    Hb = ["largest-contentful-paint"];
                  Bb && Hb.push("interaction-contentful-paint", "soft-navigation");
                  const wb = BB(Hb, ab);
                  if (wb) {
                    Ob = fh(bb, Ub, jB, ub.reportAllChanges);
                    const Gb = ["keydown", "click", "visibilitychange"],
                      Lb = bb => {
                        if (bb.isTrusted && !hb) {
                          const bb = Ub.id;
                          WB((() => {
                            if (!hb) {
                              if (!Bb) {
                                wb.disconnect();
                                for (const bb of Gb) removeEventListener(bb, Lb, {
                                  capture: !0
                                })
                              }
                              bb === Ub.id && (hb = !0, Ob(!0))
                            }
                          }))
                        }
                      };
                    for (const bb of Gb) addEventListener(bb, Lb, {
                      capture: !0
                    });
                    Fh((Bb => {
                      Yb("back-forward-cache", Ub.navigationId, Ub.navigationInteractionId, Ub.navigationURL, Vh()), Ob = fh(bb, Ub, jB, ub.reportAllChanges), kh((() => {
                        Ub.value = performance.now() - Bb.timeStamp, hb = !0, Ob(!0)
                      }))
                    }))
                  }
                }))
              }((ub => {
                bb((bb => {
                  let ub = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: bb.value
                  };
                  if (bb.entries.length) {
                    const Ob = bb.entries.at(-1),
                      Gb = bb => bb.name === Ob.url && (bb.requestStart || bb.startTime) <= Ob.startTime,
                      Ub = Ob.url && (DB.findLast(Gb) || performance.getEntriesByType("resource").findLast(Gb));
                    let Lb;
                    ub.target = Bb.get(Ob), ub.lcpEntry = Ob, Ob.url && (ub.url = Ob.url), Ub && (ub.lcpResourceEntry = Ub);
                    let Yb = 0,
                      Sb = 0;
                    if ("soft-navigation" !== bb.navigationType ? (Lb = Mh(), Yb = Lb?.activationStart ?? 0, Sb = Lb?.responseStart ?? 0) : (Yb = bb.navigationStartTime || 0, Lb = hb.u?.get(bb.navigationId)), Lb) {
                      const hb = Math.max(0, Sb - Yb),
                        Bb = Math.max(hb, Ub ? (Ub.requestStart || Ub.startTime) - Yb : 0),
                        Ob = Math.min(bb.value, Math.max(Bb, Ub ? Ub.responseEnd - Yb : 0));
                      ub = {
                        ...ub,
                        timeToFirstByte: hb,
                        resourceLoadDelay: Bb - hb,
                        resourceLoadDuration: Ob - Bb,
                        elementRenderDelay: bb.value - Ob,
                        navigationEntry: Lb
                      }
                    }
                  }
                  return Object.assign(bb, {
                    attribution: ub
                  })
                })(ub))
              }), ub)
          }((bb => {
            var ub;
            const {
              elementRenderDelay: hb,
              resourceLoadDelay: Bb,
              resourceLoadDuration: Ob,
              timeToFirstByte: Gb,
              target: Ub,
              url: Lb,
              lcpResourceEntry: Yb
            } = bb.attribution, Sb = this.buildInitialValues(bb);
            this.addIfPresent(Sb, "element_render_delay", hb), this.addIfPresent(Sb, "resource_load_delay", Bb), this.addIfPresent(Sb, "resource_load_duration", Ob), this.addIfPresent(Sb, iB, Gb);
            const ab = this.buildInitialContext(bb);
            this.addIfPresent(ab, "element", Ub), (null === (ub = this.webVitalConfig) || void 0 === ub ? void 0 : ub.trackAttributionSources) && (this.addIfPresent(ab, "resource_url", Lb), this.addIfPresent(ab, "resource_delivery_type", null === Yb || void 0 === Yb ? void 0 : Yb.deliveryType), this.addIfPresent(ab, "resource_initiator_type", null === Yb || void 0 === Yb ? void 0 : Yb.initiatorType)), this.pushMeasurement(Sb, ab)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureTTFB() {
          var bb;
          ! function(bb) {
            ! function(bb) {
              let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const hb = OB(ub);
              let Bb = hB("TTFB"),
                Ob = fh(bb, Bb, xB, ub.reportAllChanges);
              zB((() => {
                const Gb = Mh();
                if (Gb) {
                  const Ub = Gb.responseStart;
                  Bb.value = Math.max(Ub - Th(), 0), Bb.entries = [Gb], Ob(!0), Fh((() => {
                    Bb = hB("TTFB", 0, "back-forward-cache", Bb.navigationId, Bb.navigationInteractionId, Bb.navigationURL, Vh()), Ob = fh(bb, Bb, xB, ub.reportAllChanges), Ob(!0)
                  })), hb && BB(["soft-navigation"], (hb => {
                    hb.forEach((hb => {
                      hb.navigationId && (Bb = hB("TTFB", 0, "soft-navigation", hb.navigationId, hb.interactionId, hb.name, hb.startTime), Bb.entries = [hb], Ob = fh(bb, Bb, xB, ub.reportAllChanges), Ob(!0))
                    }))
                  }), ub)
                }
              }))
            }((ub => {
              bb((bb => {
                const ub = bb.entries[0];
                let hb = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: ub
                };
                if (bb.entries.length && ub instanceof PerformanceNavigationTiming) {
                  const Bb = ub.activationStart || 0,
                    Ob = Math.max((ub.workerStart || ub.fetchStart || 0) - Bb, 0),
                    Gb = Math.max(ub.domainLookupStart - Bb, 0),
                    Ub = Math.max(ub.connectStart - Bb, 0),
                    Lb = Math.max(ub.connectEnd - Bb, 0);
                  hb = {
                    waitingDuration: Ob,
                    cacheDuration: Gb - Ob,
                    dnsDuration: Ub - Gb,
                    connectionDuration: Lb - Ub,
                    requestDuration: bb.value - Lb,
                    navigationEntry: ub
                  }
                }
                return Object.assign(bb, {
                  attribution: hb
                })
              })(ub))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((bb => {
            const {
              dnsDuration: ub,
              connectionDuration: hb,
              requestDuration: Bb,
              waitingDuration: Ob,
              cacheDuration: Gb
            } = bb.attribution, Ub = this.buildInitialValues(bb);
            this.addIfPresent(Ub, "dns_duration", ub), this.addIfPresent(Ub, "connection_duration", hb), this.addIfPresent(Ub, "request_duration", Bb), this.addIfPresent(Ub, "waiting_duration", Ob), this.addIfPresent(Ub, "cache_duration", Gb);
            const Lb = this.buildInitialContext(bb);
            this.pushMeasurement(Ub, Lb)
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
          var ub;
          const hb = null !== (ub = bu("com.grafana.faro.lastNavigationId", cb)) && void 0 !== ub ? ub : eh;
          return {
            id: bb.id,
            rating: bb.rating,
            navigation_type: bb.navigationType,
            navigation_entry_id: hb
          }
        }
        pushMeasurement(bb, ub) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: bb
          }, {
            context: ub
          })
        }
        addIfPresent(bb, ub, hb) {
          hb && (bb[ub] = hb)
        }
        addNumberIfDefined(bb, ub, hb) {
          void 0 !== hb && (bb[ub] = hb)
        }
      },
      tB = class extends uh {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = hh
        }
        initialize() {
          this.logDebug("Initializing"), new vB(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const JB = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function eB() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const ub of bb)
        if ("traceparent" === ub.name) {
          if (!JB.test(ub.description)) continue;
          const [, bb, hb] = ub.description.split("-");
          if (null != bb && null != hb) return {
            traceId: bb,
            spanId: hb
          };
          break
        }
    }

    function NB(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: hb,
        monoNow: Bb
      } = ub;
      return Math.min(hb, hb - (Bb - bb))
    }

    function sB(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [hb, Bb] of Object.entries(ub)) {
        const ub = bb[hb];
        return null != ub && (gb(Bb) ? Bb.includes(ub) : ub === Bb)
      }
      return !0
    }

    function MB(bb) {
      const {
        connectEnd: ub,
        connectStart: hb,
        decodedBodySize: Bb,
        domainLookupEnd: Ob,
        domainLookupStart: Gb,
        duration: Ub,
        encodedBodySize: Lb,
        fetchStart: Yb,
        initiatorType: Sb,
        name: ab,
        nextHopProtocol: Hb,
        redirectEnd: wb,
        redirectStart: Zb,
        renderBlockingStatus: Xb,
        requestStart: pb,
        responseEnd: ob,
        responseStart: Ab,
        responseStatus: lb,
        secureConnectionStart: Kb,
        transferSize: Wb,
        workerStart: Cb
      } = bb;
      return {
        name: ab,
        httpHost: IB(ab),
        duration: PB(Ub),
        tcpHandshakeTime: PB(ub - hb),
        dnsLookupTime: PB(Ob - Gb),
        tlsNegotiationTime: PB(ub - Kb),
        responseStatus: PB(lb),
        redirectTime: PB(wb - Zb),
        requestTime: PB(Ab - pb),
        responseTime: PB(ob - Ab),
        fetchTime: PB(ob - Yb),
        serviceWorkerTime: PB(Cb > 0 ? Yb - Cb : 0),
        decodedBodySize: PB(Bb),
        encodedBodySize: PB(Lb),
        cacheHitStatus: function() {
          let bb = "fullLoad";
          0 === Wb ? Bb > 0 && (bb = "cache") : null != lb ? 304 === lb && (bb = "conditionalFetch") : Lb > 0 && Wb < Lb && (bb = "conditionalFetch");
          return bb
        }(),
        renderBlockingStatus: PB(Xb),
        protocol: Hb,
        initiatorType: Sb,
        visibilityState: document.visibilityState,
        ttfb: PB(Ab - pb),
        transferSize: PB(Wb)
      }
    }

    function mB(bb) {
      const {
        activationStart: ub,
        domComplete: hb,
        domContentLoadedEventEnd: Bb,
        domContentLoadedEventStart: Ob,
        domInteractive: Gb,
        fetchStart: Ub,
        loadEventEnd: Lb,
        loadEventStart: Yb,
        responseStart: Sb,
        type: ab
      } = bb, Hb = function() {
        var bb;
        return null != (null === (bb = performance.timing) || void 0 === bb ? void 0 : bb.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return au(au({}, MB(bb)), {}, {
        pageLoadTime: PB(hb - Ub),
        documentParsingTime: PB(Hb ? Gb - Hb : null),
        domProcessingTime: PB(hb - Gb),
        domContentLoadHandlerTime: PB(Bb - Ob),
        onLoadTime: PB(Lb - Yb),
        ttfb: PB(Math.max(Sb - (null !== ub && void 0 !== ub ? ub : 0), 0)),
        type: ab
      })
    }

    function IB(bb) {
      try {
        return new URL(bb).host || eh
      } catch (ub) {
        return eh
      }
    }

    function PB(bb) {
      return null == bb ? eh : "number" === typeof bb ? Math.round(bb > 0 ? bb : 0).toString() : bb.toString()
    }
    const qB = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function EB(bb, ub, hb, Bb, Ob, Gb, Ub) {
      try {
        var Lb = bb[Gb](Ub),
          Yb = Lb.value
      } catch (bb) {
        return void hb(bb)
      }
      Lb.done ? ub(Yb) : Promise.resolve(Yb).then(Bb, Ob)
    }

    function yB(bb) {
      return function() {
        var ub = this,
          hb = arguments;
        return new Promise((function(Bb, Ob) {
          var Gb = bb.apply(ub, hb);

          function Ub(bb) {
            EB(Gb, Bb, Ob, Ub, Lb, "next", bb)
          }

          function Lb(bb) {
            EB(Gb, Bb, Ob, Ub, Lb, "throw", bb)
          }
          Ub(void 0)
        }))
      }
    }
    const VB = new lh;
    var FB = class extends uh {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = hh
      }
      initialize() {
        var bb = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let ub = !1;
        const hb = () => {
          ! function(bb) {
            if ("complete" === document.readyState) bb();
            else {
              const ub = () => {
                "complete" === document.readyState && (bb(), document.removeEventListener("readystatechange", ub))
              };
              document.addEventListener("readystatechange", ub)
            }
          }(yB((function*() {
            if (ub) return;
            const hb = bb.api.pushEvent,
              {
                faroNavigationId: Bb
              } = yield function(bb) {
                let ub;
                const hb = new Promise((bb => {
                  ub = bb
                }));
                return new PerformanceObserver((hb => {
                  var Bb;
                  const [Ob] = hb.getEntries();
                  if (null == Ob || kb(Ob.name)) return;
                  const Gb = Ob.toJSON();
                  let Ub = eB(null === Gb || void 0 === Gb ? void 0 : Gb.serverTiming);
                  const Lb = null !== (Bb = bu("com.grafana.faro.lastNavigationId", cb)) && void 0 !== Bb ? Bb : eh,
                    Yb = au(au({}, mB(Gb)), {}, {
                      faroNavigationId: Au(),
                      faroPreviousNavigationId: Lb
                    });
                  uu("com.grafana.faro.lastNavigationId", Yb.faroNavigationId, cb), bb("faro.performance.navigation", Yb, void 0, {
                    spanContext: Ub,
                    timestampOverwriteMs: NB(Gb.startTime)
                  }), ub(Yb)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), hb
              }(hb);
            ub || null == Bb || function(bb, ub, hb, Bb) {
              const Ob = Bb.trackResources;
              new PerformanceObserver((Bb => {
                const Gb = Bb.getEntries(),
                  Ub = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Lb of Gb) {
                  if (kb(Lb.name)) continue;
                  null === hb || void 0 === hb || hb.notify({
                    type: "resource"
                  });
                  const Bb = Lb.toJSON();
                  let Gb = eB(null === Bb || void 0 === Bb ? void 0 : Bb.serverTiming);
                  (null == Ob && sB(Bb, qB) || Ob) && ub("faro.performance.resource", au(au({}, MB(Bb)), {}, {
                    faroNavigationId: bb,
                    faroResourceId: Au()
                  }), void 0, {
                    spanContext: Gb,
                    timestampOverwriteMs: NB(Bb.startTime, Ub)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Bb, hb, VB, bb.config)
          })))
        };
        this.cancelInitialization = () => {
          ub = !0, document.removeEventListener("prerenderingchange", hb)
        }, document.prerendering ? document.addEventListener("prerenderingchange", hb, {
          once: !0
        }) : hb()
      }
      destroy() {
        var bb;
        null === (bb = this.cancelInitialization) || void 0 === bb || bb.call(this), this.cancelInitialization = void 0
      }
    };
    const fB = "data-faro-user-action-name",
      kB = fB.replace(/-name$/, "-timeout"),
      TB = 1e3;

    function cB(bb) {
      return `data-${(bb.startsWith("data-")?bb.slice(5):bb).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function QB(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu;
      if (void 0 === bb) return ub;
      let Bb = NaN;
      try {
        Bb = "string" === typeof bb && "" === bb.trim() ? NaN : Number(bb)
      } catch (Ob) {}
      return !Number.isFinite(Bb) || Bb <= 0 ? (hb(`initialActivityTimeout must be a finite number greater than zero; using ${ub} ms`), ub) : Bb > 1e3 ? (hb(`initialActivityTimeout cannot exceed ${TB} ms; clamping to the maximum`), TB) : Bb
    }

    function RB(bb, ub, hb) {
      return void 0 !== bb && window.clearTimeout(bb), window.setTimeout((() => {
        ub()
      }), hb)
    }

    function bO(bb) {
      return bb.type === Ah
    }
    let uO, hO;

    function BO() {
      return uO || (uO = new lh), hO || (hO = new MutationObserver(((bb, ub) => {
        uO.notify({
          type: "dom-mutation"
        })
      })), hO.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), uO
    }
    const OO = "fetch",
      GO = "xhr";
    let UO, LO, YO, SO, aO = !1;

    function HO() {
      if (UO) return UO;

      function bb(bb) {
        UO.notify({
          type: oh,
          request: bb
        })
      }

      function ub(bb) {
        UO.notify({
          type: Ah,
          request: bb
        })
      }
      return UO = new lh, aO || (! function(bb) {
        let {
          onRequestEnd: ub,
          onRequestStart: hb
        } = bb;
        YO || (YO = window.fetch);
        window.fetch = function() {
          var bb, Bb;
          const Ob = null !== (bb = Tb(arguments[0])) && void 0 !== bb ? bb : "",
            Gb = kb(Ob),
            Ub = (null !== (Bb = arguments[1]) && void 0 !== Bb ? Bb : {}).method,
            Lb = Au();
          return Gb || hb({
            url: Ob,
            method: Ub,
            requestId: Lb,
            apiType: OO
          }), YO.apply(this, arguments).then((bb => (Gb || ub({
            url: Ob,
            method: Ub,
            requestId: Lb,
            apiType: OO
          }), bb))).catch((bb => {
            throw Gb || ub({
              url: Ob,
              method: Ub,
              requestId: Lb,
              apiType: OO
            }), bb
          }))
        }
      }({
        onRequestStart: bb,
        onRequestEnd: ub
      }), function(bb) {
        let {
          onRequestStart: ub,
          onRequestEnd: hb
        } = bb;
        LO || (LO = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const bb = arguments[1],
            Bb = kb(bb),
            Ob = arguments[0],
            Gb = Au();
          this.addEventListener("loadstart", (function() {
            Bb || ub({
              url: bb,
              method: Ob,
              requestId: Gb,
              apiType: GO
            })
          })), this.addEventListener("load", (function() {
            Bb || hb({
              url: bb,
              method: Ob,
              requestId: Gb,
              apiType: GO
            })
          })), this.addEventListener("error", (function() {
            Bb || hb({
              url: bb,
              method: Ob,
              requestId: Gb,
              apiType: GO
            })
          })), this.addEventListener("abort", (function() {
            Bb || hb({
              url: bb,
              method: Ob,
              requestId: Gb,
              apiType: GO
            })
          })), LO.apply(this, arguments)
        }
      }({
        onRequestStart: bb,
        onRequestEnd: ub
      }), aO = !0), UO
    }
    let wO, ZO = !1;
    let XO = function(bb) {
      return bb[bb.Started = 0] = "Started", bb[bb.Halted = 1] = "Halted", bb[bb.Cancelled = 2] = "Cancelled", bb[bb.Ended = 3] = "Ended", bb
    }({});
    var pO = class {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = bb, this.logDebug = ub, this.initialActivityTimeout = hb, this.http = HO(), this.dom = BO(), this.perf = (SO || (SO = new lh), ZO || (wO = VB.subscribe((bb => {
          "resource" === bb.type && SO.notify({
            type: "resource-entry"
          })
        })), ZO = !0), SO), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new lh).merge(this.http, this.dom, this.perf).takeWhile((() => [XO.Started, XO.Halted].includes(this.userAction.getState()))).filter((bb => !!(this.userAction.getState() !== XO.Halted || bO(bb) && this.runningRequests.has(bb.request.requestId)))).subscribe((bb => {
          (function(bb) {
            return bb.type === oh
          })(bb) && this.runningRequests.set(bb.request.requestId, bb.request), bO(bb) && this.runningRequests.delete(bb.request.requestId), bO(bb) ? this.userAction.getState() === XO.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((bb => [XO.Ended, XO.Cancelled].includes(bb))).first().subscribe((() => this.cleanup())), this.startupTid = RB(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === XO.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === XO.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = RB(this.haltTid, (() => {
          this.userAction.getState() === XO.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var bb, ub;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (bb = this.allMonitorsSub) || void 0 === bb || bb.unsubscribe(), null === (ub = this.stateSub) || void 0 === ub || ub.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(bb) {
        void 0 !== bb && window.clearTimeout(bb)
      }
    };

    function oO(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eu;
      var hb;
      const {
        api: Bb,
        config: Ob,
        internalLogger: Gb
      } = bb, Ub = QB(null === (hb = Ob.userActionsInstrumentation) || void 0 === hb ? void 0 : hb.initialActivityTimeout, 100, ub);
      return {
        processUserEvent: function(bb) {
          var ub, hb;
          const Gb = null !== (ub = null === (hb = Ob.userActionsInstrumentation) || void 0 === hb ? void 0 : hb.dataAttributeName) && void 0 !== ub ? ub : fB,
            Ub = bb.target;
          if (!(Ub instanceof Element)) return;
          const Lb = function(bb, ub) {
              let hb = bb;
              for (; hb;) {
                if (hb.hasAttribute(ub)) return hb;
                hb = hb.parentElement
              }
              return null
            }(Ub, cB(Gb)),
            Yb = function(bb, ub) {
              if (!bb) return;
              const hb = function(bb) {
                  return cB(bb).slice(5).replace(/-(.)/g, ((bb, ub) => ub.toUpperCase()))
                }(ub),
                Bb = bb.dataset;
              for (const Ob in Bb)
                if (Ob === hb) return Bb[Ob]
            }(Lb, Gb);
          if (!Lb || !Yb) return;
          const Sb = function(bb, ub) {
            const hb = bb.getAttribute(function(bb) {
              const ub = cB(bb);
              return ub.endsWith("-name") ? `${ub.slice(0,-5)}-timeout` : `${ub}-timeout`
            }(ub));
            return null === hb ? void 0 : Number(hb)
          }(Lb, Gb);
          Bb.startUserAction(Yb, {}, {
            triggerName: bb.type,
            initialActivityTimeout: Sb
          })
        },
        processUserActionStarted: function(bb, hb) {
          const Bb = bb,
            Ob = QB(hb, Ub, ub);
          new pO(Bb, Gb.debug, Ob).attach()
        }
      }
    }
    const AO = "user_action_start",
      lO = {
        Normal: "normal",
        Critical: "critical"
      };
    var KO = class {
        constructor() {
          this.buffer = []
        }
        addItem(bb) {
          this.buffer.push(bb)
        }
        flushBuffer(bb) {
          if (zb(bb))
            for (const ub of this.buffer) bb(ub);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      WO = class extends lh {
        constructor(bb) {
          let {
            name: ub,
            parentId: hb,
            trigger: Bb,
            transports: Ob,
            attributes: Gb,
            trackUserActionsExcludeItem: Ub,
            importance: Lb = lO.Normal,
            pushEvent: Yb
          } = bb;
          super(), this.name = ub, this.attributes = Gb, this.id = Au(), this.trigger = Bb, this.parentId = null !== hb && void 0 !== hb ? hb : this.id, this.trackUserActionsExcludeItem = Ub, this.importance = Lb, this._pushEvent = Yb, this._itemBuffer = new KO, this._transports = Ob, this._state = 0, this._start()
        }
        addItem(bb) {
          return 0 === this._state && (this._itemBuffer.addItem(bb), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = wu(), this._startTimeMono = Zu())
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
          const bb = wu(),
            ub = Zu() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((bb => {
            if (function(bb, ub) {
                return (null === ub || void 0 === ub ? void 0 : ub(bb)) || "measurement" === bb.type && "web-vitals" === bb.payload.type
              }(bb, this.trackUserActionsExcludeItem)) return void this._transports.execute(bb);
            const ub = Qu(Qu({}, bb), {}, {
              payload: Qu(Qu({}, bb.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(ub)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Qu({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: bb.toString(),
            userActionDuration: ub.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Nu(this.attributes)), void 0, {
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
    const CO = new lh;

    function dO(bb, ub) {
      return !!bb && (0 === (null === bb || void 0 === bb ? void 0 : bb.getState()) && (bb.addItem(ub), !0))
    }
    var rO = class extends uh {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = hh
        }
        initialize() {
          const {
            processUserEvent: bb,
            processUserActionStarted: ub
          } = oO(pb, (bb => this.logWarn(bb)));
          this._processUserEvent = bb, this._processKeydown = ub => {
            [" ", "Enter"].includes(ub.key) && bb(ub)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = CO.subscribe((bb => {
            let {
              type: hb,
              userAction: Bb,
              initialActivityTimeout: Ob
            } = bb;
            "user_action_start" === hb && ub(Bb, Ob)
          }))
        }
        destroy() {
          var bb;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (bb = this._userActionSub) || void 0 === bb || bb.unsubscribe()
        }
      },
      jO = class extends uh {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = hh, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(bb) {
          const ub = {
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
          this.api.pushEvent("securitypolicyviolation", Nu(ub))
        }
      };
    var nO = class extends lh {
      constructor(bb, ub) {
        var hb, Bb, Ob, Gb;
        super(), this._tracking = !1, this.eventsObservable = bb, this._options = {
          inactivityMs: null !== (hb = null === ub || void 0 === ub ? void 0 : ub.inactivityMs) && void 0 !== hb ? hb : 100,
          drainTimeoutMs: null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.drainTimeoutMs) && void 0 !== Bb ? Bb : 1e4,
          isOperationStart: null !== (Ob = null === ub || void 0 === ub ? void 0 : ub.isOperationStart) && void 0 !== Ob ? Ob : () => {},
          isOperationEnd: null !== (Gb = null === ub || void 0 === ub ? void 0 : ub.isOperationEnd) && void 0 !== Gb ? Gb : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((bb => {
          var ub;
          this._lastEventTime = Zu(), null === (ub = this._currentEvents) || void 0 === ub || ub.push(bb);
          const hb = this._options.isOperationStart(bb);
          var Bb;
          hb && (null === (Bb = this._activeOperations) || void 0 === Bb || Bb.set(hb, !0));
          const Ob = this._options.isOperationEnd(bb);
          var Gb;
          Ob && (null === (Gb = this._activeOperations) || void 0 === Gb || Gb.delete(Ob));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Zu(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let bb;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), bb = this.hasActiveOperations() ? Zu() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: bb
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = DO(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = DO(this._drainTid, (() => {
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

    function DO(bb, ub, hb) {
      return bb && clearTimeout(bb), bb = setTimeout((() => {
        ub()
      }), hb)
    }
    let xO;
    const zO = new Set,
      gO = new Map;
    let iO, vO, tO, JO, eO, NO, sO, MO, mO = !1;
    var IO = class extends uh {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = hh
      }
      initialize() {
        const bb = HO(),
          ub = BO(),
          hb = function() {
            function bb(bb, ub) {
              const hb = null !== ub && void 0 !== ub ? ub : location.href;
              hb !== vO && (iO.notify({
                type: "url-change",
                from: vO,
                to: hb,
                trigger: bb
              }), vO = hb)
            }
            if (iO || (iO = new lh, vO = location.href), !mO)
              if ("navigation" in window && "NavigateEvent" in window) {
                sO = ub => {
                  try {
                    const hb = null === ub || void 0 === ub ? void 0 : ub.destination;
                    (null === hb || void 0 === hb ? void 0 : hb.sameDocument) && "string" === typeof hb.url && bb("navigate", hb.url)
                  } catch (hb) {}
                }, window.navigation.addEventListener("navigate", sO);
                const ub = window.NavigateEvent;
                ub && ub.prototype && "function" === typeof ub.prototype.intercept && (MO || (MO = ub.prototype.intercept), ub.prototype.intercept = function(ub) {
                  try {
                    const ub = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      hb = null === this || void 0 === this ? void 0 : this.destination;
                    ub && hb && !1 === hb.sameDocument && "string" === typeof hb.url && bb("navigate-intercept", hb.url)
                  } catch (hb) {}
                  return MO.call(this, ub)
                }), mO = !0
              } else tO || (tO = window.history.pushState), window.history.pushState = function() {
                for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
                const Ob = tO.apply(window.history, hb);
                return bb("pushState"), Ob
              }, JO || (JO = window.history.replaceState), window.history.replaceState = function() {
                for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
                const Ob = JO.apply(window.history, hb);
                return bb("replaceState"), Ob
              }, eO = () => bb("popstate"), NO = () => bb("hashchange"), window.addEventListener("popstate", eO), window.addEventListener("hashchange", NO), mO = !0;
            return iO
          }(),
          Bb = (Ob = ["pointerdown", "keydown"], xO || (xO = new lh), Ob.forEach((bb => {
            if (!zO.has(bb)) {
              const ub = () => {
                xO.notify({
                  type: "interaction",
                  name: bb
                })
              };
              window.addEventListener(bb, ub), zO.add(bb), gO.set(bb, ub)
            }
          })), xO);
        var Ob;
        const Gb = new nO((new lh).merge(bb, ub, hb), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: bb => function(bb) {
            return bb.type === oh
          }(bb) ? bb.request.requestId : void 0,
          isOperationEnd: bb => function(bb) {
            return bb.type === Ah
          }(bb) ? bb.request.requestId : void 0
        });
        Gb.filter((bb => "tracking-ended" === bb.message)).subscribe((bb => {
          var ub, hb;
          if ((null === (ub = bb.events) || void 0 === ub ? void 0 : ub.some((bb => "url-change" === bb.type))) && (null === (hb = bb.events) || void 0 === hb ? void 0 : hb.some((bb => "dom-mutation" === bb.type)))) {
            var Bb;
            const ub = null === (Bb = bb.events) || void 0 === Bb ? void 0 : Bb.find((bb => "url-change" === bb.type));
            pb.api.pushEvent("faro.navigation", {
              fromUrl: null === ub || void 0 === ub ? void 0 : ub.from,
              toUrl: null === ub || void 0 === ub ? void 0 : ub.to,
              sameDocument: String(!0),
              duration: bb.duration
            })
          }
        })), Bb.subscribe((() => {
          Gb.startTracking()
        }))
      }
    };

    function PO() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ub = [new rO, new Jh, new tB, new Bh, new Nh, new IO];
      return !1 !== bb.enablePerformanceInstrumentation && ub.unshift(new FB), !1 !== bb.enableContentSecurityPolicyInstrumentation && ub.push(new jO), !1 !== bb.captureConsole && ub.push(new vh), ub
    }
    var qO = hb(6433);
    let EO, yO;

    function VO() {
      const bb = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return EO === bb && yO || (yO = new qO.UAParser(bb).getResult(), EO = bb), yO
    }
    const FO = () => {
        const {
          browser: bb,
          os: ub,
          ua: hb
        } = VO(), {
          name: Bb,
          version: Ob
        } = bb, {
          name: Gb,
          version: Ub
        } = ub, Lb = navigator.language, Yb = hb.includes("Mobi"), Sb = function() {
          if (!Bb || !Ob) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Bb && void 0 !== Bb ? Bb : eh,
            version: null !== Ob && void 0 !== Ob ? Ob : eh,
            os: `${null!==Gb&&void 0!==Gb?Gb:eh} ${null!==Ub&&void 0!==Ub?Ub:eh}`,
            userAgent: null !== hb && void 0 !== hb ? hb : eh,
            language: null !== Lb && void 0 !== Lb ? Lb : eh,
            mobile: Yb,
            brands: null !== Sb && void 0 !== Sb ? Sb : eh,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      fO = () => {
        const {
          name: bb,
          version: ub
        } = VO().os;
        if (!bb && !ub) return {};
        const hb = {};
        return bb && (hb.name = bb), ub && (hb.version = ub), {
          os: hb
        }
      };

    function kO(bb) {
      var ub, hb, Bb;
      return {
        id: null !== (ub = null === (hb = pb.config) || void 0 === hb || null === (hb = hb.sessionTracking) || void 0 === hb || null === (Bb = hb.generateSessionId) || void 0 === Bb ? void 0 : Bb.call(hb)) && void 0 !== ub ? ub : Au(),
        attributes: bb
      }
    }
    const TO = () => ({
      sdk: {
        name: "faro-web",
        version: hh
      }
    });
    var cO = class extends bh {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let QO = function(bb) {
      return bb.EXCEPTION = "exception", bb.LOG = "log", bb.MEASUREMENT = "measurement", bb.TRACE = "trace", bb.EVENT = "event", bb
    }({});
    const RO = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function bG(bb, ub) {
      var hb, Bb;
      if (void 0 === ub) return bb;
      if (void 0 === bb) return {
        resourceSpans: ub
      };
      const Ob = null === (hb = bb.resourceSpans) || void 0 === hb ? void 0 : hb[0];
      if (void 0 === Ob) return bb;
      const Gb = (null === Ob || void 0 === Ob ? void 0 : Ob.scopeSpans) || [],
        Ub = (null === ub || void 0 === ub || null === (Bb = ub[0]) || void 0 === Bb ? void 0 : Bb.scopeSpans) || [];
      return Qu(Qu({}, bb), {}, {
        resourceSpans: [Qu(Qu({}, Ob), {}, {
          scopeSpans: [...Gb, ...Ub]
        })]
      })
    }

    function uG(bb) {
      let ub = {
        meta: {}
      };
      return void 0 !== bb[0] && (ub.meta = bb[0].meta), bb.forEach((bb => {
        switch (bb.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const hb = RO[bb.type],
              Bb = ub[hb];
            ub = Qu(Qu({}, ub), {}, {
              [hb]: void 0 === Bb ? [bb.payload] : [...Bb, bb.payload]
            });
            break
          }
          case "trace":
            ub = Qu(Qu({}, ub), {}, {
              traces: bG(ub.traces, bb.payload.resourceSpans)
            })
        }
      })), ub
    }
    var hG = class extends cO {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-console", this.version = hh
      }
      send(bb) {
        var ub;
        return this.unpatchedConsole[null !== (ub = this.options.level) && void 0 !== ub ? ub : Kh.DEBUG]("New event", uG([bb]))
      }
    };
    const BG = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      OG = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      GG = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      UG = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      LG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      YG = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function SG(bb) {
      let {
        weekday: ub,
        day: hb,
        month: Bb,
        year: Ob,
        hour: Gb,
        minute: Ub,
        second: Lb
      } = bb;
      if (Ob < 1900 || hb < 1 || Gb > 23 || Ub > 59 || Lb > 60) return;
      const Yb = 60 === Lb,
        Sb = new Date(0);
      return Sb.setUTCFullYear(Ob, Bb, hb), Sb.setUTCHours(Gb, Ub, Yb ? 59 : Lb, 0), Sb.getUTCDay() === ub && Sb.getUTCDate() === hb && Sb.getUTCMonth() === Bb && Sb.getUTCFullYear() === Ob && Sb.getUTCHours() === Gb && Sb.getUTCMinutes() === Ub && Sb.getUTCSeconds() === (Yb ? 59 : Lb) ? Sb.getTime() + (Yb ? 1e3 : 0) : void 0
    }
    var aG = class {
      constructor(bb) {
        this.options = bb, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var bb = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const ub = this.sequence++;
        let hb = !1;
        return {
          deliver: function() {
            var hb = yB((function*(hb) {
              const Bb = bb.options.getNow();
              let Ob, Gb = 0;
              for (;;) {
                var Ub, Lb, Yb;
                const Sb = bb.options.retry.maxAttempts - Gb,
                  ab = yield bb.runAttempt((() => hb(Sb, bb.unloading)), Gb > 0);
                if (Gb += ab.attemptsMade, "success" === ab.kind) return {
                  kind: "success",
                  attempts: Gb,
                  elapsedTimeMs: bb.options.getNow() - Bb
                };
                if (Ob = ab.failure, "terminal" === ab.kind || bb.unloading) return {
                  kind: "terminal",
                  attempts: Gb,
                  elapsedTimeMs: bb.options.getNow() - Bb,
                  failure: Ob
                };
                if (Gb >= bb.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Gb,
                  elapsedTimeMs: bb.options.getNow() - Bb,
                  failure: Ob,
                  reason: "retries-exhausted"
                };
                if (null != ab.retryAfterMs && ab.retryAfterMs > bb.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Gb,
                  elapsedTimeMs: bb.options.getNow() - Bb,
                  failure: Ob,
                  reason: "retry-after-too-long"
                };
                const Hb = Math.min(null !== (Ub = ab.retryAfterMs) && void 0 !== Ub ? Ub : bb.options.retry.initialBackoffMs * Math.pow(bb.options.retry.backoffMultiplier, Gb - 1), bb.options.retry.maxBackoffMs);
                if (null === (Lb = (Yb = bb.options).onRetry) || void 0 === Lb || Lb.call(Yb, Hb, Gb + 1), yield bb.waitForTurn(ub, Hb)) {
                  const ub = bb.options.retry.maxAttempts - Gb,
                    Ob = yield bb.runAttempt((() => hb(ub, !0)));
                  return Gb += Ob.attemptsMade, {
                    kind: "success" === Ob.kind ? "success" : "terminal",
                    attempts: Gb,
                    elapsedTimeMs: bb.options.getNow() - Bb,
                    failure: "success" === Ob.kind ? void 0 : Ob.failure
                  }
                }
              }
            }));
            return function(bb) {
              return hb.apply(this, arguments)
            }
          }(),
          release: () => {
            hb || (hb = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const bb = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const ub of bb) ub.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((hb, Bb) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const ub = () => {
                this.inProgress--, this.runNextAttempt()
              };
              bb().then((bb => {
                ub(), hb(bb)
              }), (bb => {
                ub(), Bb(bb)
              }))
            },
            isRedelivery: ub
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const bb = this.options.getNow(),
            ub = this.attemptQueue.findIndex((ub => {
              let {
                isRedelivery: hb
              } = ub;
              return this.unloading || !hb || bb >= this.nextSendAt
            }));
          if (ub < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - bb)));
          const [hb] = this.attemptQueue.splice(ub, 1);
          hb.isRedelivery && !this.unloading && (this.nextSendAt = bb + 1), hb.run()
        }
      }
      waitForTurn(bb, ub) {
        const hb = Math.min(ub * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((ub => {
          this.waiting.push({
            sequence: bb,
            readyAt: this.options.getNow() + hb,
            resolve: ub
          }), this.waiting.sort(((bb, ub) => bb.readyAt === ub.readyAt ? bb.sequence - ub.sequence : bb.readyAt - ub.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const bb = this.waiting[0],
          ub = bb.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const ub = this.waiting.indexOf(bb);
          ub >= 0 && this.waiting.splice(ub, 1), bb.resolve(!1), this.scheduleNext()
        }), Math.max(0, ub - this.options.getNow()))
      }
    };

    function HG(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if ({}.hasOwnProperty.call(bb, Bb)) {
            if (ub.includes(Bb)) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.includes(hb) || {}.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function wG(bb) {
      const {
        size: ub,
        concurrency: hb
      } = bb, Bb = [];
      let Ob = 0;
      const Gb = () => {
        if (Ob < hb && Bb.length) {
          const {
            producer: bb,
            resolve: ub,
            reject: hb
          } = Bb.shift();
          Ob++, bb().then((bb => {
            Ob--, Gb(), ub(bb)
          }), (bb => {
            Ob--, Gb(), hb(bb)
          }))
        }
      };
      return {
        add: bb => {
          if (Bb.length + Ob >= ub) throw new Error("Task buffer full");
          return new Promise(((ub, hb) => {
            Bb.push({
              producer: bb,
              resolve: ub,
              reject: hb
            }), Gb()
          }))
        }
      }
    }
    const ZG = ["headers"],
      XG = ["keepalive", "signal"],
      pG = new Set([408, 425, 429, 500, 502, 503, 504]),
      oG = new Set([429, 503]);
    let AG = 0,
      lG = 0;
    var KG = class extends Error {};
    var WG = class extends cO {
      constructor(bb) {
        var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab;
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = hh, this.pendingCustomSends = 0, this.getNow = null !== (ub = bb.getNow) && void 0 !== ub ? ub : Date.now, this.requestTimeoutMs = null !== (hb = bb.requestTimeoutMs) && void 0 !== hb ? hb : 1e4, this.compressionEnabled = null !== (Bb = bb.requestCompression) && void 0 !== Bb && Bb && "undefined" !== typeof CompressionStream, bb.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new aG({
          bufferSize: null !== (Ob = bb.bufferSize) && void 0 !== Ob ? Ob : 30,
          concurrency: null !== (Gb = bb.concurrency) && void 0 !== Gb ? Gb : 5,
          retry: {
            maxAttempts: null !== (Ub = null === (Lb = bb.retry) || void 0 === Lb ? void 0 : Lb.maxAttempts) && void 0 !== Ub ? Ub : 3,
            initialBackoffMs: null !== (Yb = null !== (Sb = null === (ab = bb.retry) || void 0 === ab ? void 0 : ab.initialBackoffMs) && void 0 !== Sb ? Sb : bb.defaultRateLimitBackoffMs) && void 0 !== Yb ? Yb : 1e3,
            maxBackoffMs: null !== (Hb = null === (wb = bb.retry) || void 0 === wb ? void 0 : wb.maxBackoffMs) && void 0 !== Hb ? Hb : 3e4,
            backoffMultiplier: null !== (Zb = null === (Xb = bb.retry) || void 0 === Xb ? void 0 : Xb.backoffMultiplier) && void 0 !== Zb ? Zb : 2
          },
          getNow: this.getNow,
          getRandom: null !== (pb = bb.getRandom) && void 0 !== pb ? pb : Math.random,
          onRetry: (bb, ub) => {
            this.logDebug(`Retrying failed request after ${bb}ms. Attempt ${ub}.`)
          }
        }), this.customPromiseBuffer = wG({
          size: null !== (ob = bb.bufferSize) && void 0 !== ob ? ob : 30,
          concurrency: null !== (Ab = bb.concurrency) && void 0 !== Ab ? Ab : 5
        }), this.defaultPromiseBuffer = {
          add: bb => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(bb);
            const ub = this.deliveryQueue.reserve();
            if (!ub) throw new Error("Task buffer full");
            return this.runBufferedTask(ub, bb)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (bb => {
          bb.persisted && this.deliveryQueue.resume()
        })))
      }
      send(bb) {
        var ub = this;
        return yB((function*() {
          const hb = ub.promiseBuffer;
          if (hb !== ub.defaultPromiseBuffer || hb.add !== ub.defaultBufferAdd) {
            ub.pendingCustomSends++;
            try {
              yield hb.add((() => ub.deliver(bb)))
            } catch (Bb) {
              ub.logError("Permanent delivery failure", {
                error: Bb,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              ub.pendingCustomSends--
            }
          } else yield ub.deliver(bb)
        }))()
      }
      runBufferedTask(bb, ub) {
        return yB((function*() {
          let hb;
          try {
            return yield bb.deliver(yB((function*() {
              return hb = yield ub(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), hb
          } finally {
            bb.release()
          }
        }))()
      }
      deliver(bb) {
        var ub = this;
        return yB((function*() {
          const hb = ub.deliveryQueue.reserve();
          if (hb) try {
            const Bb = yield ub.prepareRequest(bb), Ob = yield hb.deliver(((bb, hb) => ub.performAttempt(Bb, bb, hb)));
            "terminal" === Ob.kind && ub.logError("retries-exhausted" === Ob.reason ? "Delivery retries exhausted" : "Permanent delivery failure", au(au({}, Ob.failure), {}, {
              reason: Ob.reason,
              attempts: Ob.attempts,
              elapsedTimeMs: Ob.elapsedTimeMs
            }))
          } catch (Bb) {
            ub.logError("Permanent delivery failure", {
              error: Bb,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            hb.release()
          } else ub.logError("Permanent delivery failure", {
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
        var ub = this;
        return yB((function*() {
          var hb, Bb;
          const Ob = uG(bb),
            Gb = null === (hb = Ob.meta.session) || void 0 === hb ? void 0 : hb.id,
            Ub = JSON.stringify(Ob),
            Lb = null !== (Bb = ub.options.requestOptions) && void 0 !== Bb ? Bb : {},
            {
              headers: Yb = {}
            } = Lb,
            Sb = HG(Lb, ZG),
            {
              keepalive: ab,
              signal: Hb
            } = Sb,
            wb = HG(Sb, XG),
            Zb = {};
          for (const [bb, ub] of Object.entries(Yb)) Zb[bb] = "function" === typeof ub ? yield ub(): ub;
          let Xb = Ub,
            pb = function(bb) {
              return "undefined" === typeof TextEncoder ? bb.length : (new TextEncoder).encode(bb).byteLength
            }(Ub);
          const ob = {};
          return ub.compressionEnabled && (Xb = yield ub.compress(Ub), pb = Xb.size, ob["Content-Encoding"] = "gzip"), {
            bodySize: pb,
            sessionId: Gb,
            requestInit: au({
              method: "POST",
              headers: au(au(au(au(au({
                "Content-Type": "application/json"
              }, ob), Zb), ub.options.apiKey ? {
                "x-api-key": ub.options.apiKey
              } : {}), Gb ? {
                "x-faro-session-id": Gb
              } : {}), {}, {
                "Idempotency-Key": Au(20)
              }),
              body: Xb
            }, wb)
          }
        }))()
      }
      performAttempt(bb, ub, hb) {
        var Bb = this;
        return yB((function*() {
          var Ob;
          const Gb = null === (Ob = Bb.options.requestOptions) || void 0 === Ob ? void 0 : Ob.signal;
          if (null === Gb || void 0 === Gb ? void 0 : Gb.aborted) return {
            kind: "terminal",
            failure: {
              error: Gb.reason
            },
            attemptsMade: 0
          };
          let Ub = 0;
          try {
            var Lb;
            const Ob = yield Bb.fetchWithKeepaliveFallback(bb.requestInit, bb.bodySize, !!hb || (null === (Lb = Bb.options.requestOptions) || void 0 === Lb ? void 0 : Lb.keepalive), ub, (() => Ub++));
            if (Bb.handleResponse(Ob, bb.sessionId), Ob.status >= 200 && Ob.status < 300) return {
              kind: "success",
              attemptsMade: Ub
            };
            const Gb = {
              status: Ob.status
            };
            return !pG.has(Ob.status) || hb ? {
              kind: "terminal",
              failure: Gb,
              attemptsMade: Ub
            } : {
              kind: "retry",
              failure: Gb,
              attemptsMade: Ub,
              retryAfterMs: oG.has(Ob.status) ? Bb.getRetryAfterDelayMs(Ob) : void 0
            }
          } catch (Yb) {
            const bb = {
              error: Yb
            };
            return (null === Gb || void 0 === Gb ? void 0 : Gb.aborted) || !Bb.isFetchNetworkError(Yb) || hb ? {
              kind: "terminal",
              failure: bb,
              attemptsMade: Ub
            } : {
              kind: "retry",
              failure: bb,
              attemptsMade: Ub
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(bb, ub, hb, Bb, Ob) {
        var Gb = this;
        return yB((function*() {
          const Ub = Gb.getNow(),
            Lb = Gb.reserveKeepalive(ub, hb);
          try {
            return yield Gb.fetchWithTimeout(au(au({}, bb), {}, {
              keepalive: Lb.keepalive
            }), Gb.requestTimeoutMs, Ob)
          } catch (Sb) {
            var Yb;
            if (Lb.keepalive && Bb > 1 && Gb.isFetchNetworkError(Sb) && !(Sb instanceof KG) && !(null === (Yb = Gb.options.requestOptions) || void 0 === Yb || null === (Yb = Yb.signal) || void 0 === Yb ? void 0 : Yb.aborted)) {
              Gb.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const ub = Gb.requestTimeoutMs - (Gb.getNow() - Ub);
              return Gb.fetchWithTimeout(au(au({}, bb), {}, {
                keepalive: !1
              }), ub, Ob)
            }
            throw Sb
          } finally {
            Lb.release()
          }
        }))()
      }
      fetchWithTimeout(bb, ub, hb) {
        var Bb = this;
        return yB((function*() {
          var Ob;
          const Gb = null === (Ob = Bb.options.requestOptions) || void 0 === Ob ? void 0 : Ob.signal;
          if (Bb.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return hb(), fetch(Bb.options.url, au(au({}, bb), {}, {
            signal: Gb
          }));
          if (ub <= 0) throw new KG("Request timed out");
          const Ub = new AbortController,
            Lb = () => Ub.abort(null === Gb || void 0 === Gb ? void 0 : Gb.reason);
          null === Gb || void 0 === Gb || Gb.addEventListener("abort", Lb, {
            once: !0
          });
          let Yb = !1;
          const Sb = setTimeout((() => {
            Yb = !0, Ub.abort()
          }), ub);
          try {
            return hb(), yield fetch(Bb.options.url, au(au({}, bb), {}, {
              signal: Ub.signal
            }))
          } catch (ab) {
            if (Yb && !(null === Gb || void 0 === Gb ? void 0 : Gb.aborted)) throw new KG("Request timed out");
            throw ab
          } finally {
            clearTimeout(Sb), null === Gb || void 0 === Gb || Gb.removeEventListener("abort", Lb)
          }
        }))()
      }
      getRetryAfterDelayMs(bb) {
        const ub = bb.headers.get("Retry-After");
        if (!ub) return;
        if (/^\d+$/.test(ub)) {
          const bb = 1e3 * Number(ub);
          return Number.isFinite(bb) ? bb : Number.POSITIVE_INFINITY
        }
        const hb = this.getNow(),
          Bb = function(bb, ub) {
            const hb = BG.exec(bb);
            if (hb) {
              const [, bb, ub, Bb, Ob, Gb, Ub, Lb] = hb;
              return SG({
                weekday: UG.indexOf(bb),
                day: Number(ub),
                month: YG.indexOf(Bb),
                year: Number(Ob),
                hour: Number(Gb),
                minute: Number(Ub),
                second: Number(Lb)
              })
            }
            const Bb = OG.exec(bb);
            if (Bb) {
              const [, bb, hb, Ub, Lb, Yb, Sb, ab] = Bb, Hb = new Date(ub);
              if (Number.isNaN(Hb.getTime())) return;
              const wb = Hb.getUTCFullYear();
              let Zb = 100 * Math.floor(wb / 100) + Number(Lb);
              Zb < wb && (Zb += 100);
              const Xb = YG.indexOf(Ub),
                pb = {
                  month: Xb,
                  day: Number(hb),
                  hour: Number(Yb),
                  minute: Number(Sb),
                  second: Number(ab),
                  millisecond: 0
                },
                ob = {
                  month: Hb.getUTCMonth(),
                  day: Hb.getUTCDate(),
                  hour: Hb.getUTCHours(),
                  minute: Hb.getUTCMinutes(),
                  second: Hb.getUTCSeconds(),
                  millisecond: Hb.getUTCMilliseconds()
                };
              return (Zb > wb + 50 || Zb === wb + 50 && (Gb = ob, ((Ob = pb).month - Gb.month || Ob.day - Gb.day || Ob.hour - Gb.hour || Ob.minute - Gb.minute || Ob.second - Gb.second || Ob.millisecond - Gb.millisecond) > 0)) && (Zb -= 100), SG({
                weekday: LG.indexOf(bb),
                day: Number(hb),
                month: Xb,
                year: Zb,
                hour: Number(Yb),
                minute: Number(Sb),
                second: Number(ab)
              })
            }
            var Ob, Gb;
            const Ub = GG.exec(bb);
            if (!Ub) return;
            const [, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb] = Ub;
            return SG({
              weekday: UG.indexOf(Lb),
              day: Number(null !== Sb && void 0 !== Sb ? Sb : ab),
              month: YG.indexOf(Yb),
              year: Number(Xb),
              hour: Number(Hb),
              minute: Number(wb),
              second: Number(Zb)
            })
          }(ub, hb);
        return null == Bb ? void 0 : Math.max(0, Bb - hb)
      }
      reserveKeepalive(bb, ub) {
        if (!1 === ub || bb > 6e4 || AG + bb > 6e4 || lG >= 9) return {
          keepalive: !1,
          release: Eu
        };
        AG += bb, lG++;
        let hb = !1;
        return {
          keepalive: !0,
          release: () => {
            hb || (hb = !0, AG -= bb, lG--)
          }
        }
      }
      handleResponse(bb, ub) {
        202 === bb.status && "invalid" === bb.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), ub), bb.text().catch(Eu)
      }
      isFetchNetworkError(bb) {
        return bb instanceof TypeError || bb instanceof KG || bb instanceof DOMException && "AbortError" === bb.name
      }
      compress(bb) {
        return yB((function*() {
          const ub = [],
            hb = new ReadableStream({
              start(ub) {
                ub.enqueue((new TextEncoder).encode(bb)), ub.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: bb,
              value: Bb
            } = yield hb.read();
            if (bb) return new Blob(ub);
            ub.push(Bb)
          }
        }))()
      }
      extendFaroSession(bb, ub, hb) {
        var Bb, Ob;
        const Gb = bb.sessionTracking;
        if (!(null === Gb || void 0 === Gb ? void 0 : Gb.enabled)) return void ub("Session expired.");
        const {
          fetchUserSession: Ub,
          storeUserSession: Lb
        } = qu(Gb), Yb = null === (Bb = this.metas.value.session) || void 0 === Bb ? void 0 : Bb.id, Sb = null === (Ob = Ub()) || void 0 === Ob ? void 0 : Ob.sessionId;
        hb && hb === Yb && hb === Sb ? (gu({
          fetchUserSession: Ub,
          storeUserSession: Lb
        })({
          forceSessionExtend: !0
        }), ub("Session expired; created new session.")) : ub("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const CG = () => {
      const bb = window.k6;
      return {
        k6: au({
          isK6Browser: !0
        }, (null === bb || void 0 === bb ? void 0 : bb.testRunId) && {
          testRunId: null === bb || void 0 === bb ? void 0 : bb.testRunId
        })
      }
    };
    let dG, rG;

    function jG() {
      let {
        generatePageId: bb,
        initialPageMeta: ub
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const hb = location.href;
        return zb(bb) && dG !== hb && (dG = hb, rG = bb(location)), {
          page: au(au({
            url: hb
          }, rG ? {
            id: rG
          } : {}), ub)
        }
      }
    }

    function nG() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ru,
        ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const hb = Vu;
      return ub > 0 && (hb.error = ub >= 1 ? function() {
        for (var ub = arguments.length, Bb = new Array(ub), Ob = 0; Ob < ub; Ob++) Bb[Ob] = arguments[Ob];
        bb.error(`${hb.prefix}\n`, ...Bb)
      } : Eu, hb.warn = ub >= 2 ? function() {
        for (var ub = arguments.length, Bb = new Array(ub), Ob = 0; Ob < ub; Ob++) Bb[Ob] = arguments[Ob];
        bb.warn(`${hb.prefix}\n`, ...Bb)
      } : Eu, hb.info = ub >= 3 ? function() {
        for (var ub = arguments.length, Bb = new Array(ub), Ob = 0; Ob < ub; Ob++) Bb[Ob] = arguments[Ob];
        bb.info(`${hb.prefix}\n`, ...Bb)
      } : Eu, hb.debug = ub >= 4 ? function() {
        for (var ub = arguments.length, Bb = new Array(ub), Ob = 0; Ob < ub; Ob++) Bb[Ob] = arguments[Ob];
        bb.debug(`${hb.prefix}\n`, ...Bb)
      } : Eu), hb
    }
    const DG = "faro",
      xG = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      zG = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function gG(bb) {
      var ub, hb, Ob, Gb, Ub, Lb;
      const Yb = [],
        ab = nG(bb.unpatchedConsole, bb.internalLoggerLevel);
      bb.transports ? ((bb.url || bb.apiKey) && ab.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Yb.push(...bb.transports)) : bb.url ? Yb.push(new WG({
        url: bb.url,
        apiKey: bb.apiKey,
        requestCompression: bb.requestCompression
      })) : ab.error('either "url" or "transports" must be defined');
      const {
        dedupe: Hb = !0,
        eventDomain: wb = Bb,
        globalObjectKey: Zb = DG,
        instrumentations: Xb = PO(),
        internalLoggerLevel: pb = Fu,
        isolate: ob = !1,
        logArgsSerializer: Ab = ih,
        metas: lb = vG(bb),
        paused: Kb = !1,
        preventGlobalExposure: Wb = !1,
        unpatchedConsole: Cb = Ru,
        url: db,
        experimental: rb
      } = bb, jb = HG(bb, zG), nb = null !== (ub = null === rb || void 0 === rb ? void 0 : rb.trackNavigation) && void 0 !== ub && ub, Db = {
        dataAttributeName: cB(null !== (hb = null === (Ob = bb.userActionsInstrumentation) || void 0 === Ob ? void 0 : Ob.dataAttributeName) && void 0 !== hb ? hb : fB),
        excludeItem: null === (Gb = bb.userActionsInstrumentation) || void 0 === Gb ? void 0 : Gb.excludeItem,
        initialActivityTimeout: QB(null === (Ub = bb.userActionsInstrumentation) || void 0 === Ub ? void 0 : Ub.initialActivityTimeout, 100, (bb => ab.warn(bb)))
      };
      return au(au({}, jb), {}, {
        batching: au(au({}, xG), bb.batching),
        dedupe: Hb,
        globalObjectKey: Zb,
        instrumentations: iG(Xb, bb),
        internalLoggerLevel: pb,
        isolate: ob,
        logArgsSerializer: Ab,
        metas: lb,
        parseStacktrace: ph,
        paused: Kb,
        preventGlobalExposure: Wb,
        transports: Yb,
        unpatchedConsole: Cb,
        eventDomain: wb,
        ignoreUrls: [...null !== (Lb = bb.ignoreUrls) && void 0 !== Lb ? Lb : [], ...db ? [db] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: au(au(au({}, Sb), bb.sessionTracking), tG({
          trackGeolocation: bb.trackGeolocation,
          sessionTracking: bb.sessionTracking
        })),
        userActionsInstrumentation: Db,
        experimental: {
          trackNavigation: nb
        }
      })
    }

    function iG(bb, ub) {
      let {
        experimental: hb
      } = ub;
      var Bb;
      const Ob = null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.trackNavigation) && void 0 !== Bb && Bb;
      return bb.filter((bb => !("@grafana/faro-web-sdk:instrumentation-navigation" === bb.name && !Ob)))
    }

    function vG(bb) {
      var ub, hb, Bb;
      const {
        page: Ob,
        generatePageId: Gb
      } = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.pageTracking) && void 0 !== ub ? ub : {}, Ub = [FO, fO, jG({
        generatePageId: Gb,
        initialPageMeta: Ob
      }), ...null !== (hb = bb.metas) && void 0 !== hb ? hb : [], TO];
      return xb(null === (Bb = window) || void 0 === Bb ? void 0 : Bb.k6) ? [...Ub, CG] : Ub
    }

    function tG(bb) {
      let {
        trackGeolocation: ub,
        sessionTracking: hb
      } = bb;
      var Bb;
      const Ob = {};
      return nb(ub) && (Ob.geoLocationTrackingEnabled = ub), Fb(Ob) ? {} : {
        session: au(au({}, null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.session) && void 0 !== Bb ? Bb : {}), {}, {
          overrides: Ob
        })
      }
    }
    const JG = new WeakSet;

    function eG(bb) {
      return JG.add(bb), bb
    }

    function NG(bb, ub) {
      if (bb.capture) return eG(bb.capture(ub));
      const hb = eG(bb.value);
      return null === ub || void 0 === ub || ub(), hb
    }

    function sG(bb) {
      const ub = `__faroBundleId_${bb}`,
        hb = null === ab || void 0 === ab ? void 0 : ab[ub];
      if ("string" === typeof hb && "" !== hb) return hb;
      const Bb = "undefined" !== typeof window ? window[ub] : void 0;
      return "string" === typeof Bb && "" !== Bb ? Bb : void 0
    }

    function MG(bb) {
      var ub, hb;
      const Bb = bb.config.app.name,
        Ob = Bb ? function(bb) {
          return null === ab || void 0 === ab ? void 0 : ab[`__faroGitHash_${bb}`]
        }(Bb) : void 0,
        Gb = {
          sdk: {
            version: hh,
            name: "faro"
          },
          app: Qu({
            bundleId: Bb && sG(Bb)
          }, void 0 !== Ob ? {
            gitHash: Ob
          } : {})
        },
        Ub = null === (ub = bb.config.sessionTracking) || void 0 === ub ? void 0 : ub.session;
      Ub && bb.api.setSession(Ub), bb.config.app && (Gb.app = Qu(Qu({}, bb.config.app), Gb.app)), bb.config.user && (Gb.user = bb.config.user), bb.config.view && (Gb.view = bb.config.view), bb.metas.add(Gb, ...null !== (hb = bb.config.metas) && void 0 !== hb ? hb : [])
    }
    var mG = class {
      constructor(bb, ub) {
        var hb, Bb;
        this.signalBuffer = [], this.itemLimit = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.itemLimit) && void 0 !== hb ? hb : 50, this.sendTimeout = null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.sendTimeout) && void 0 !== Bb ? Bb : 250, this.paused = (null === ub || void 0 === ub ? void 0 : ub.paused) || !1, this.sendFn = bb, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const ub = new Map;
        return bb.forEach((bb => {
          const hb = JSON.stringify(bb.meta);
          let Bb = ub.get(hb);
          Bb = void 0 === Bb ? [bb] : [...Bb, bb], ub.set(hb, Bb)
        })), Array.from(ub.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const bb = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(bb).forEach(this.sendFn)
        } catch (ub) {
          throw this.signalBuffer = [...bb, ...this.signalBuffer], this.trimBufferToLimit(), ub
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function IG(bb, ub, hb, Bb) {
      var Ob;
      ub.debug("Initializing transports");
      const Gb = [];
      let Ub = [];
      const Lb = bb => {
        let ub = bb;
        for (const Bb of Ub) {
          const bb = ub.map(Bb).filter(Boolean);
          if (0 === bb.length) return [];
          ub = PG(bb, hb)
        }
        return ub
      };
      let Yb;
      (null === (Ob = hb.batching) || void 0 === Ob ? void 0 : Ob.enabled) && (Yb = new mG((bb => {
        const hb = Lb(bb);
        if (0 !== hb.length)
          for (const Bb of Gb) ub.debug(`Transporting item using ${Bb.name}\n`, hb), Bb.isBatched() && Bb.send(hb)
      }), {
        sendTimeout: hb.batching.sendTimeout,
        itemLimit: hb.batching.itemLimit,
        paused: hb.paused
      }));
      return {
        add: function() {
          ub.debug("Adding transports");
          for (var Ob = arguments.length, Ub = new Array(Ob), Lb = 0; Lb < Ob; Lb++) Ub[Lb] = arguments[Lb];
          Ub.forEach((Ob => {
            ub.debug(`Adding "${Ob.name}" transport`), Gb.some((bb => bb === Ob)) ? ub.warn(`Transport ${Ob.name} is already added`) : (Ob.unpatchedConsole = bb, Ob.internalLogger = ub, Ob.config = hb, Ob.metas = Bb, Gb.push(Ob))
          }))
        },
        addBeforeSendHooks: function() {
          ub.debug("Adding beforeSendHooks\n", Ub);
          for (var bb = arguments.length, hb = new Array(bb), Bb = 0; Bb < bb; Bb++) hb[Bb] = arguments[Bb];
          hb.forEach((bb => {
            bb && Ub.push(bb)
          }))
        },
        getBeforeSendHooks: () => [...Ub],
        execute: bb => {
          var Ob;
          if (!hb.paused && Iu(Bb).shouldCapture()) {
            if (Hb = bb.meta, !JG.has(Hb)) {
              var Ub, Sb, ab;
              const ub = null === (Ub = Bb.value.session) || void 0 === Ub ? void 0 : Ub.id,
                Ob = NG(Bb);
              if (hb.paused) return;
              const Gb = Qu({}, bb.meta);
              (null === (Sb = Gb.session) || void 0 === Sb ? void 0 : Sb.id) === ub && (null === (ab = Ob.session) || void 0 === ab ? void 0 : ab.id) !== ub && (void 0 === Ob.session ? delete Gb.session : Gb.session = Ob.session), bb = Qu(Qu({}, bb), {}, {
                meta: eG(Gb)
              })
            }
            var Hb;
            (null === (Ob = hb.batching) || void 0 === Ob ? void 0 : Ob.enabled) && (null === Yb || void 0 === Yb || Yb.addItem(bb)), (bb => {
              var Bb;
              if ((null === (Bb = hb.batching) || void 0 === Bb ? void 0 : Bb.enabled) && Gb.every((bb => bb.isBatched()))) return;
              const [Ob] = Lb([bb]);
              if (void 0 !== Ob)
                for (const Lb of Gb) {
                  var Ub;
                  ub.debug(`Transporting item using ${Lb.name}\n`, Ob), Lb.isBatched() ? (null === (Ub = hb.batching) || void 0 === Ub ? void 0 : Ub.enabled) || Lb.send([Ob]) : Lb.send(Ob)
                }
            })(bb)
          }
        },
        isPaused: () => hb.paused,
        pause: () => {
          ub.debug("Pausing transports"), null === Yb || void 0 === Yb || Yb.pause(), hb.paused = !0
        },
        remove: function() {
          ub.debug("Removing transports");
          for (var bb = arguments.length, hb = new Array(bb), Bb = 0; Bb < bb; Bb++) hb[Bb] = arguments[Bb];
          hb.forEach((bb => {
            ub.debug(`Removing "${bb.name}" transport`);
            const hb = Gb.indexOf(bb); - 1 !== hb ? Gb.splice(hb, 1) : ub.warn(`Transport "${bb.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var bb = arguments.length, hb = new Array(bb), Bb = 0; Bb < bb; Bb++) hb[Bb] = arguments[Bb];
          ub.debug("Removing beforeSendHooks"), Ub = Ub.filter((bb => !hb.includes(bb)))
        },
        get transports() {
          return [...Gb]
        },
        unpause: () => {
          ub.debug("Unpausing transports"), null === Yb || void 0 === Yb || Yb.start(), hb.paused = !1
        }
      }
    }

    function PG(bb, ub) {
      if (ub.preserveOriginalError)
        for (const hb of bb) "exception" === hb.type && delete hb.payload.originalError;
      return bb
    }
    let qG = Ru;

    function EG(bb) {
      var ub;
      return qG = null !== (ub = bb.unpatchedConsole) && void 0 !== ub ? ub : qG, qG
    }
    let yG, VG = Vu;

    function FG(bb, ub) {
      return VG = nG(bb, ub.internalLoggerLevel), VG
    }

    function fG(bb) {
      let {
        internalLogger: ub,
        config: hb,
        metas: Bb,
        transports: Ob,
        tracesApi: Gb,
        userActionsApi: Ub
      } = bb;
      var Lb;
      ub.debug("Initializing exceptions API");
      let Yb = null;
      yG = null !== (Lb = hb.parseStacktrace) && void 0 !== Lb ? Lb : yG;
      const Sb = bb => {
          ub.debug("Changing stacktrace parser"), yG = null !== bb && void 0 !== bb ? bb : yG
        },
        {
          ignoreErrors: ab = [],
          preserveOriginalError: Hb
        } = hb;
      return Sb(hb.parseStacktrace), {
        changeStacktraceParser: Sb,
        getStacktraceParser: () => yG,
        pushError: function(bb) {
          let {
            skipDedupe: Lb,
            stackFrames: Sb,
            type: wb,
            context: Zb,
            spanContext: Xb,
            timestampOverwriteMs: pb,
            originalError: ob,
            fingerprint: Ab,
            fatal: lb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(bb, ub) {
              const {
                message: hb,
                name: Bb,
                stack: Ob
              } = ub;
              return Gb = bb, Ub = hb + " " + Bb + " " + Ob, Gb.some((bb => db(bb) ? Ub.includes(bb) : !!Ub.match(bb)));
              var Gb, Ub
            }(ab, null !== ob && void 0 !== ob ? ob : bb)) try {
            var Kb, Wb;
            if (!Iu(Bb).shouldCapture()) return;
            const ab = Nu(Qu(Qu({}, function(bb) {
                let ub = bb.cause;
                sb(ub) ? ub = bb.cause.toString() : null !== ub && (xb(bb.cause) || gb(bb.cause)) ? ub = eu(bb.cause) : null != ub && (ub = bb.cause.toString());
                return null == ub ? {} : {
                  cause: ub
                }
              }(null !== ob && void 0 !== ob ? ob : bb)), null !== Zb && void 0 !== Zb ? Zb : {})),
              db = Qu(Qu(Qu(Qu({
                type: wb || bb.name || "Error",
                value: bb.message,
                timestamp: pb ? pu(pb) : Xu(),
                trace: Xb ? {
                  trace_id: Xb.traceId,
                  span_id: Xb.spanId
                } : Gb.getTraceContext()
              }, Fb(ab) ? {} : {
                context: ab
              }), Hb ? {
                originalError: ob
              } : {}), Ab ? {
                fingerprint: Ab
              } : {}), void 0 !== lb ? {
                fatal: lb
              } : {});
            Sb = null !== (Kb = Sb) && void 0 !== Kb ? Kb : bb.stack ? null === yG || void 0 === yG ? void 0 : yG(bb).frames : void 0, (null === Sb || void 0 === Sb ? void 0 : Sb.length) && (db.stacktrace = {
              frames: Sb
            });
            const rb = {
              type: db.type,
              value: db.value,
              stacktrace: db.stacktrace,
              context: db.context,
              fingerprint: db.fingerprint,
              fatal: null !== (Wb = db.fatal) && void 0 !== Wb && Wb
            };
            if (!Lb && hb.dedupe && !Cb(Yb) && lu(rb, Yb)) return void ub.debug("Skipping error push because it is the same as the last one\n", db);
            const jb = Yb,
              nb = NG(Bb);
            if (Yb !== jb && !Lb && hb.dedupe && lu(rb, Yb)) return;
            Yb = rb;
            const Db = {
              meta: nb,
              payload: db,
              type: "exception"
            };
            ub.debug("Pushing exception\n", Db), dO(Ub.getActiveUserAction(), Db) || Ob.execute(Db)
          } catch (rb) {
            ub.error("Error pushing event", rb)
          }
        }
      }
    }

    function kG(bb, ub, hb, Bb, Ob) {
      ub.debug("Initializing API");
      let Gb = null;
      const Ub = function(bb) {
          let {
            transports: ub,
            internalLogger: hb,
            config: Bb,
            pushEvent: Ob
          } = bb;
          var Gb;
          const Ub = null === (Gb = Bb.userActionsInstrumentation) || void 0 === Gb ? void 0 : Gb.excludeItem;
          let Lb;
          const Yb = () => Lb;
          return {
            startUserAction: (bb, Bb, Gb) => {
              if (void 0 === Yb()) {
                const hb = new WO({
                  name: bb,
                  transports: ub,
                  attributes: Bb,
                  trigger: (null === Gb || void 0 === Gb ? void 0 : Gb.triggerName) || "faroApiCall",
                  importance: (null === Gb || void 0 === Gb ? void 0 : Gb.importance) || lO.Normal,
                  trackUserActionsExcludeItem: Ub,
                  pushEvent: Ob
                });
                return hb.filter((bb => [3, 2].includes(bb))).first().subscribe((() => {
                  Lb = void 0
                })), CO.notify({
                  type: AO,
                  userAction: hb,
                  initialActivityTimeout: null === Gb || void 0 === Gb ? void 0 : Gb.initialActivityTimeout
                }), Lb = hb, Lb
              }
              hb.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Yb
          }
        }({
          transports: Ob,
          config: hb,
          internalLogger: ub,
          pushEvent: (bb, hb, Bb, Ob) => {
            Gb ? Gb(bb, hb, Bb, Ob) : ub.warn("pushEventImpl is not initialized. Event dropped:", {
              name: bb,
              attributes: hb,
              domain: Bb,
              options: Ob
            })
          }
        }),
        Lb = function(bb, ub, hb, Bb, Ob) {
          let Gb;
          return ub.debug("Initializing traces API"), {
            getOTEL: () => Gb,
            getTraceContext: () => {
              const bb = null === Gb || void 0 === Gb ? void 0 : Gb.trace.getSpanContext(Gb.context.active());
              return bb ? {
                trace_id: bb.traceId,
                span_id: bb.spanId
              } : void 0
            },
            initOTEL: (bb, hb) => {
              ub.debug("Initializing OpenTelemetry"), Gb = {
                trace: bb,
                context: hb
              }
            },
            isOTELInitialized: () => !!Gb,
            pushTraces: bb => {
              try {
                if (!Iu(Bb).shouldCapture()) return;
                const hb = {
                  type: "trace",
                  payload: bb,
                  meta: NG(Bb)
                };
                ub.debug("Pushing trace\n", hb), Ob.execute(hb)
              } catch (hb) {
                ub.error("Error pushing trace\n", hb)
              }
            }
          }
        }(0, ub, 0, Bb, Ob),
        Yb = {
          unpatchedConsole: bb,
          internalLogger: ub,
          userActionsApi: Ub,
          config: hb,
          metas: Bb,
          transports: Ob,
          tracesApi: Lb
        },
        Sb = function(bb) {
          let {
            internalLogger: ub,
            config: hb,
            metas: Bb,
            transports: Ob,
            tracesApi: Gb,
            userActionsApi: Ub
          } = bb, Lb = null;
          return {
            pushEvent: function(bb, Yb, Sb) {
              let {
                skipDedupe: ab,
                spanContext: Hb,
                timestampOverwriteMs: wb,
                customPayloadTransformer: Zb = bb => bb
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Iu(Bb).shouldCapture()) return;
                const Xb = Nu(Yb),
                  pb = Zb({
                    name: bb,
                    domain: null !== Sb && void 0 !== Sb ? Sb : hb.eventDomain,
                    attributes: Fb(Xb) ? void 0 : Xb,
                    timestamp: wb ? pu(wb) : Xu(),
                    trace: Hb ? {
                      trace_id: Hb.traceId,
                      span_id: Hb.spanId
                    } : Gb.getTraceContext()
                  }),
                  ob = {
                    name: pb.name,
                    attributes: pb.attributes,
                    domain: pb.domain
                  };
                if (!ab && hb.dedupe && !Cb(Lb) && lu(ob, Lb)) return void ub.debug("Skipping event push because it is the same as the last one\n", pb);
                const Ab = Lb,
                  lb = NG(Bb);
                if (Lb !== Ab && !ab && hb.dedupe && lu(ob, Lb)) return;
                Lb = ob;
                const Kb = {
                  meta: lb,
                  payload: pb,
                  type: "event"
                };
                ub.debug("Pushing event\n", Kb), dO(Ub.getActiveUserAction(), Kb) || Ob.execute(Kb)
              } catch (Xb) {
                ub.error("Error pushing event", Xb)
              }
            }
          }
        }(Yb);
      return Gb = Sb.pushEvent, Qu(Qu(Qu(Qu(Qu(Qu(Qu({}, Lb), fG(Yb)), function(bb) {
        let ub, hb, Bb, Ob, {
          internalLogger: Gb,
          metas: Ub
        } = bb;
        Gb.debug("Initializing meta API");
        const Lb = bb => {
            hb && Ub.remove(hb), hb = {
              user: bb
            }, Ub.add(hb)
          },
          Yb = (bb, hb) => {
            var Bb;
            const Ob = null === hb || void 0 === hb ? void 0 : hb.overrides,
              Gb = Ob ? {
                overrides: Qu(Qu({}, null === ub || void 0 === ub || null === (Bb = ub.session) || void 0 === Bb ? void 0 : Bb.overrides), Ob)
              } : {};
            ub && Ub.remove(ub), ub = {
              session: Qu(Qu({}, Fb(bb) ? void 0 : bb), Gb)
            }, Ub.add(ub)
          },
          Sb = (bb, ub) => {
            Iu(Ub).notifySessionUpdate({
              type: "replace",
              session: bb,
              overrides: null === ub || void 0 === ub ? void 0 : ub.overrides
            }), Yb(bb, ub)
          },
          ab = () => Ub.value.session,
          Hb = () => Ub.value.page;
        return {
          setUser: Lb,
          resetUser: Lb,
          setSession: Sb,
          resetSession: Sb,
          getSession: ab,
          setView: (bb, ub) => {
            var hb;
            if ((null === ub || void 0 === ub ? void 0 : ub.overrides) && (Iu(Ub).notifySessionUpdate({
                type: "overrides",
                overrides: ub.overrides
              }), Yb(ab(), {
                overrides: ub.overrides
              })), (null === Bb || void 0 === Bb || null === (hb = Bb.view) || void 0 === hb ? void 0 : hb.name) === (null === bb || void 0 === bb ? void 0 : bb.name)) return;
            const Ob = Bb;
            Bb = {
              view: bb
            }, Ub.add(Bb), Ob && Ub.remove(Ob)
          },
          getView: () => Ub.value.view,
          setPage: bb => {
            var ub;
            const hb = db(bb) ? Qu(Qu({}, null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.page) && void 0 !== ub ? ub : Hb()), {}, {
              id: bb
            }) : bb;
            Ob && Ub.remove(Ob), Ob = {
              page: hb
            }, Ub.add(Ob)
          },
          getPage: Hb
        }
      }(Yb)), function(bb) {
        let {
          internalLogger: ub,
          config: hb,
          metas: Bb,
          transports: Ob,
          tracesApi: Gb,
          userActionsApi: Ub
        } = bb;
        var Lb;
        ub.debug("Initializing logs API");
        let Yb = null;
        const Sb = null !== (Lb = hb.logArgsSerializer) && void 0 !== Lb ? Lb : ih;
        return {
          pushLog: function(bb) {
            let {
              context: Lb,
              level: ab,
              skipDedupe: Hb,
              spanContext: wb,
              timestampOverwriteMs: Zb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Iu(Bb).shouldCapture()) return;
              const Xb = Nu(Lb),
                pb = {
                  message: Sb(bb),
                  level: null !== ab && void 0 !== ab ? ab : "log",
                  context: Fb(Xb) ? void 0 : Xb,
                  timestamp: Zb ? pu(Zb) : Xu(),
                  trace: wb ? {
                    trace_id: wb.traceId,
                    span_id: wb.spanId
                  } : Gb.getTraceContext()
                },
                ob = {
                  message: pb.message,
                  level: pb.level,
                  context: pb.context
                };
              if (!Hb && hb.dedupe && !Cb(Yb) && lu(ob, Yb)) return void ub.debug("Skipping log push because it is the same as the last one\n", pb);
              const Ab = Yb,
                lb = NG(Bb);
              if (Yb !== Ab && !Hb && hb.dedupe && lu(ob, Yb)) return;
              Yb = ob;
              const Kb = {
                type: "log",
                payload: pb,
                meta: lb
              };
              ub.debug("Pushing log\n", Kb), dO(Ub.getActiveUserAction(), Kb) || Ob.execute(Kb)
            } catch (Xb) {
              ub.error("Error pushing log\n", Xb)
            }
          }
        }
      }(Yb)), function(bb) {
        let {
          internalLogger: ub,
          config: hb,
          metas: Bb,
          transports: Ob,
          tracesApi: Gb,
          userActionsApi: Ub
        } = bb;
        ub.debug("Initializing measurements API");
        let Lb = null;
        return {
          pushMeasurement: function(bb) {
            let {
              skipDedupe: Yb,
              context: Sb,
              spanContext: ab,
              timestampOverwriteMs: Hb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Iu(Bb).shouldCapture()) return;
              const wb = Nu(Sb),
                Zb = Qu(Qu({}, bb), {}, {
                  trace: ab ? {
                    trace_id: ab.traceId,
                    span_id: ab.spanId
                  } : Gb.getTraceContext(),
                  timestamp: Hb ? pu(Hb) : Xu(),
                  context: Fb(wb) ? void 0 : wb
                }),
                Xb = {
                  type: Zb.type,
                  values: Zb.values,
                  context: Zb.context
                };
              if (!Yb && hb.dedupe && !Cb(Lb) && lu(Xb, Lb)) return void ub.debug("Skipping measurement push because it is the same as the last one\n", Zb);
              const pb = Lb,
                ob = NG(Bb);
              if (Lb !== pb && !Yb && hb.dedupe && lu(Xb, Lb)) return;
              Lb = Xb;
              const Ab = {
                type: "measurement",
                payload: Zb,
                meta: ob
              };
              ub.debug("Pushing measurement\n", Ab), dO(Ub.getActiveUserAction(), Ab) || Ob.execute(Ab)
            } catch (wb) {
              ub.error("Error pushing measurement\n", wb)
            }
          }
        }
      }(Yb)), Sb), Ub)
    }

    function TG(bb) {
      const ub = EG(bb),
        hb = FG(ub, bb);
      if (Xb() && !bb.isolate) return void hb.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      hb.debug("Initializing");
      const Bb = function(bb, ub) {
          let hb, Bb = [],
            Ob = [],
            Gb = [],
            Ub = 0,
            Lb = 0;
          const Yb = () => Bb.reduce(((bb, ub) => Object.assign(bb, zb(ub) ? ub() : ub)), {}),
            Sb = () => {
              if (Ob.length) {
                const bb = Yb();
                Ob.forEach((ub => ub(bb)))
              }
            };
          return {
            add: function() {
              for (var bb = arguments.length, hb = new Array(bb), Ob = 0; Ob < bb; Ob++) hb[Ob] = arguments[Ob];
              ub.debug("Adding metas\n", hb), Bb.push(...hb), Sb()
            },
            remove: function() {
              for (var bb = arguments.length, hb = new Array(bb), Ob = 0; Ob < bb; Ob++) hb[Ob] = arguments[Ob];
              ub.debug("Removing metas\n", hb), Bb = Bb.filter((bb => !hb.includes(bb))), Sb()
            },
            addListener: bb => {
              ub.debug("Adding metas listener\n", bb), Ob.push(bb)
            },
            removeListener: bb => {
              ub.debug("Removing metas listener\n", bb), Ob = Ob.filter((ub => ub !== bb))
            },
            capture: bb => {
              var ub;
              const Bb = void 0 !== hb,
                Ob = null !== (ub = hb) && void 0 !== ub ? ub : Gb;
              Bb || (hb = Ob, Ub = 0, Lb = Ob.length);
              try {
                for (; Ub < Lb;) {
                  const bb = Ob[Ub++];
                  null === bb || void 0 === bb || bb()
                }
                const ub = eG(Yb());
                return null === bb || void 0 === bb || bb(), ub
              } finally {
                Bb || (hb = void 0)
              }
            },
            addCaptureListener: bb => {
              Gb.push(bb)
            },
            removeCaptureListener: bb => {
              Gb = Gb.filter((ub => ub !== bb))
            },
            get value() {
              return Yb()
            }
          }
        }(0, hb),
        Ob = IG(ub, hb, bb, Bb),
        Gb = kG(ub, hb, bb, Bb, Ob),
        Ub = function(bb, ub, hb, Bb, Ob, Gb) {
          ub.debug("Initializing instrumentations");
          const Ub = [];
          return {
            add: function() {
              ub.debug("Adding instrumentations");
              for (var Lb = arguments.length, Yb = new Array(Lb), Sb = 0; Sb < Lb; Sb++) Yb[Sb] = arguments[Sb];
              Yb.forEach((Lb => {
                ub.debug(`Adding "${Lb.name}" instrumentation`), Ub.some((bb => bb.name === Lb.name)) ? ub.warn(`Instrumentation ${Lb.name} is already added`) : (Lb.unpatchedConsole = bb, Lb.internalLogger = ub, Lb.config = hb, Lb.metas = Bb, Lb.transports = Ob, Lb.api = Gb, Ub.push(Lb), Lb.initialize())
              }))
            },
            get instrumentations() {
              return [...Ub]
            },
            remove: function() {
              ub.debug("Removing instrumentations");
              for (var bb = arguments.length, hb = new Array(bb), Bb = 0; Bb < bb; Bb++) hb[Bb] = arguments[Bb];
              hb.forEach((bb => {
                var hb, Bb;
                ub.debug(`Removing "${bb.name}" instrumentation`);
                const Ob = Ub.reduce(((ub, hb, Bb) => null === ub && hb.name === bb.name ? Bb : null), null);
                null !== Ob ? (null === (hb = (Bb = Ub[Ob]).destroy) || void 0 === hb || hb.call(Bb), Ub.splice(Ob, 1)) : ub.warn(`Instrumentation "${bb.name}" is not added`)
              }))
            }
          }
        }(ub, hb, bb, Bb, Ob, Gb),
        Lb = ob(ub, hb, bb, Bb, Ob, Gb, Ub);
      return MG(Lb),
        function(bb) {
          bb.transports.add(...bb.config.transports), bb.transports.addBeforeSendHooks(bb.config.beforeSend)
        }(Lb),
        function(bb) {
          bb.instrumentations.add(...bb.config.instrumentations)
        }(Lb), Lb
    }

    function cG(bb) {
      const ub = gG(bb);
      if (ub) return TG(ub)
    }
  },
  6433: function(bb, ub, hb) {
    var Bb;
    ! function(Ob, Gb) {
      var Ub = "function",
        Lb = "undefined",
        Yb = "object",
        Sb = "string",
        ab = "major",
        Hb = "model",
        wb = "name",
        Zb = "type",
        Xb = "vendor",
        pb = "version",
        ob = "architecture",
        Ab = "console",
        lb = "mobile",
        Kb = "tablet",
        Wb = "smarttv",
        Cb = "wearable",
        db = "embedded",
        rb = "Amazon",
        jb = "Apple",
        nb = "ASUS",
        Db = "BlackBerry",
        xb = "Browser",
        zb = "Chrome",
        gb = "Firefox",
        ib = "Google",
        vb = "Honor",
        tb = "Huawei",
        Jb = "LG",
        eb = "Microsoft",
        Nb = "Motorola",
        sb = "Nvidia",
        Mb = "OnePlus",
        mb = "Opera",
        Ib = "OPPO",
        Pb = "Samsung",
        qb = "Sharp",
        Eb = "Sony",
        yb = "Xiaomi",
        Vb = "Zebra",
        Fb = "Facebook",
        fb = "Chromium OS",
        kb = "Mac OS",
        Tb = " Browser",
        cb = function(bb) {
          for (var ub = {}, hb = 0; hb < bb.length; hb++) ub[bb[hb].toUpperCase()] = bb[hb];
          return ub
        },
        Qb = function(bb, ub) {
          return typeof bb === Sb && -1 !== Rb(ub).indexOf(Rb(bb))
        },
        Rb = function(bb) {
          return bb.toLowerCase()
        },
        bu = function(bb, ub) {
          if (typeof bb === Sb) return bb = bb.replace(/^\s\s*/, ""), typeof ub === Lb ? bb : bb.substring(0, 500)
        },
        uu = function(bb, ub) {
          for (var hb, Bb, Ob, Lb, Sb, ab, Hb = 0; Hb < ub.length && !Sb;) {
            var wb = ub[Hb],
              Zb = ub[Hb + 1];
            for (hb = Bb = 0; hb < wb.length && !Sb && wb[hb];)
              if (Sb = wb[hb++].exec(bb))
                for (Ob = 0; Ob < Zb.length; Ob++) ab = Sb[++Bb], typeof(Lb = Zb[Ob]) === Yb && Lb.length > 0 ? 2 === Lb.length ? typeof Lb[1] == Ub ? this[Lb[0]] = Lb[1].call(this, ab) : this[Lb[0]] = Lb[1] : 3 === Lb.length ? typeof Lb[1] !== Ub || Lb[1].exec && Lb[1].test ? this[Lb[0]] = ab ? ab.replace(Lb[1], Lb[2]) : Gb : this[Lb[0]] = ab ? Lb[1].call(this, ab, Lb[2]) : Gb : 4 === Lb.length && (this[Lb[0]] = ab ? Lb[3].call(this, ab.replace(Lb[1], Lb[2])) : Gb) : this[Lb] = ab || Gb;
            Hb += 2
          }
        },
        hu = function(bb, ub) {
          for (var hb in ub)
            if (typeof ub[hb] === Yb && ub[hb].length > 0) {
              for (var Bb = 0; Bb < ub[hb].length; Bb++)
                if (Qb(ub[hb][Bb], bb)) return "?" === hb ? Gb : hb
            } else if (Qb(ub[hb], bb)) return "?" === hb ? Gb : hb;
          return ub.hasOwnProperty("*") ? ub["*"] : bb
        },
        Bu = {
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
        Ou = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [pb, [wb, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [pb, [wb, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [wb, pb],
            [/opios[\/ ]+([\w\.]+)/i],
            [pb, [wb, mb + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [pb, [wb, mb + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [pb, [wb, mb]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [pb, [wb, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [pb, [wb, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [wb, pb],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [pb, [wb, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [pb, [wb, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [pb, [wb, "UC" + xb]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [pb, [wb, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [pb, [wb, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [pb, [wb, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [pb, [wb, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [pb, [wb, "Smart Lenovo " + xb]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [wb, /(.+)/, "$1 Secure " + xb], pb
            ],
            [/\bfocus\/([\w\.]+)/i],
            [pb, [wb, gb + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [pb, [wb, mb + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [pb, [wb, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [pb, [wb, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [pb, [wb, mb + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [pb, [wb, "MIUI" + Tb]],
            [/fxios\/([\w\.-]+)/i],
            [pb, [wb, gb]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [pb, [wb, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [wb, /(.+)/, "$1Browser"], pb
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [wb, /(.+)/, "$1" + Tb], pb
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [pb, [wb, Pb + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [pb, [wb, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [wb, "Sogou Mobile"], pb
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [wb, pb],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [wb],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [pb, wb],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [wb, Fb], pb
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [wb, pb],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [pb, [wb, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [pb, [wb, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [pb, [wb, zb + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [wb, zb + " WebView"], pb
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [pb, [wb, "Android " + xb]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [wb, pb],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [pb, [wb, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [pb, wb],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [wb, [pb, hu, {
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
            [wb, pb],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [wb, "Netscape"], pb
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [wb, pb],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [pb, [wb, gb + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [wb, [pb, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [wb, [pb, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [ob, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [ob, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [ob, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [ob, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [ob, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [ob, /ower/, "", Rb]
            ],
            [/ sun4\w[;\)]/i],
            [
              [ob, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [ob, Rb]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Hb, [Xb, Pb],
              [Zb, Kb]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Hb, [Xb, Pb],
              [Zb, lb]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Hb, [Xb, jb],
              [Zb, lb]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Hb, [Xb, jb],
              [Zb, Kb]
            ],
            [/(macintosh);/i],
            [Hb, [Xb, jb]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Hb, [Xb, qb],
              [Zb, lb]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Hb, [Xb, vb],
              [Zb, Kb]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Hb, [Xb, vb],
              [Zb, lb]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Hb, [Xb, tb],
              [Zb, Kb]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Hb, [Xb, tb],
              [Zb, lb]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Hb, /_/g, " "],
              [Xb, yb],
              [Zb, Kb]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Hb, /_/g, " "],
              [Xb, yb],
              [Zb, lb]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Hb, [Xb, Ib],
              [Zb, lb]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Hb, [Xb, hu, {
                OnePlus: ["304", "403", "203"],
                "*": Ib
              }],
              [Zb, Kb]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Hb, [Xb, "Vivo"],
              [Zb, lb]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Hb, [Xb, "Realme"],
              [Zb, lb]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Hb, [Xb, Nb],
              [Zb, lb]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Hb, [Xb, Nb],
              [Zb, Kb]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Hb, [Xb, Jb],
              [Zb, Kb]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Hb, [Xb, Jb],
              [Zb, lb]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Hb, [Xb, "Lenovo"],
              [Zb, Kb]
            ],
            [/(nokia) (t[12][01])/i],
            [Xb, Hb, [Zb, Kb]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Hb, /_/g, " "],
              [Zb, lb],
              [Xb, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Hb, [Xb, ib],
              [Zb, Kb]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Hb, [Xb, ib],
              [Zb, lb]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Hb, [Xb, Eb],
              [Zb, lb]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Hb, "Xperia Tablet"],
              [Xb, Eb],
              [Zb, Kb]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Hb, [Xb, Mb],
              [Zb, lb]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Hb, [Xb, rb],
              [Zb, Kb]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Hb, /(.+)/g, "Fire Phone $1"],
              [Xb, rb],
              [Zb, lb]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Hb, Xb, [Zb, Kb]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Hb, [Xb, Db],
              [Zb, lb]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Hb, [Xb, nb],
              [Zb, Kb]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Hb, [Xb, nb],
              [Zb, lb]
            ],
            [/(nexus 9)/i],
            [Hb, [Xb, "HTC"],
              [Zb, Kb]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Xb, [Hb, /_/g, " "],
              [Zb, lb]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Hb, [Xb, "TCL"],
              [Zb, Kb]
            ],
            [/(itel) ((\w+))/i],
            [
              [Xb, Rb], Hb, [Zb, hu, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Hb, [Xb, "Acer"],
              [Zb, Kb]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Hb, [Xb, "Meizu"],
              [Zb, lb]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Hb, [Xb, "Ulefone"],
              [Zb, lb]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Hb, [Xb, "Energizer"],
              [Zb, lb]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Hb, [Xb, "Cat"],
              [Zb, lb]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Hb, [Xb, "Smartfren"],
              [Zb, lb]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Hb, [Xb, "Nothing"],
              [Zb, lb]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Hb, [Xb, "Archos"],
              [Zb, Kb]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Hb, [Xb, "Archos"],
              [Zb, lb]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Xb, Hb, [Zb, Kb]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Xb, Hb, [Zb, lb]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Xb, Hb, [Zb, Kb]],
            [/(surface duo)/i],
            [Hb, [Xb, eb],
              [Zb, Kb]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Hb, [Xb, "Fairphone"],
              [Zb, lb]
            ],
            [/(u304aa)/i],
            [Hb, [Xb, "AT&T"],
              [Zb, lb]
            ],
            [/\bsie-(\w*)/i],
            [Hb, [Xb, "Siemens"],
              [Zb, lb]
            ],
            [/\b(rct\w+) b/i],
            [Hb, [Xb, "RCA"],
              [Zb, Kb]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Hb, [Xb, "Dell"],
              [Zb, Kb]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Hb, [Xb, "Verizon"],
              [Zb, Kb]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Hb, [Xb, "Barnes & Noble"],
              [Zb, Kb]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Hb, [Xb, "NuVision"],
              [Zb, Kb]
            ],
            [/\b(k88) b/i],
            [Hb, [Xb, "ZTE"],
              [Zb, Kb]
            ],
            [/\b(nx\d{3}j) b/i],
            [Hb, [Xb, "ZTE"],
              [Zb, lb]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Hb, [Xb, "Swiss"],
              [Zb, lb]
            ],
            [/\b(zur\d{3}) b/i],
            [Hb, [Xb, "Swiss"],
              [Zb, Kb]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Hb, [Xb, "Zeki"],
              [Zb, Kb]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Xb, "Dragon Touch"], Hb, [Zb, Kb]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Hb, [Xb, "Insignia"],
              [Zb, Kb]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Hb, [Xb, "NextBook"],
              [Zb, Kb]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Xb, "Voice"], Hb, [Zb, lb]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Xb, "LvTel"], Hb, [Zb, lb]
            ],
            [/\b(ph-1) /i],
            [Hb, [Xb, "Essential"],
              [Zb, lb]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Hb, [Xb, "Envizen"],
              [Zb, Kb]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Hb, [Xb, "MachSpeed"],
              [Zb, Kb]
            ],
            [/\btu_(1491) b/i],
            [Hb, [Xb, "Rotor"],
              [Zb, Kb]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Hb, [Xb, sb],
              [Zb, Kb]
            ],
            [/(sprint) (\w+)/i],
            [Xb, Hb, [Zb, lb]],
            [/(kin\.[onetw]{3})/i],
            [
              [Hb, /\./g, " "],
              [Xb, eb],
              [Zb, lb]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Hb, [Xb, Vb],
              [Zb, Kb]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Hb, [Xb, Vb],
              [Zb, lb]
            ],
            [/smart-tv.+(samsung)/i],
            [Xb, [Zb, Wb]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Hb, /^/, "SmartTV"],
              [Xb, Pb],
              [Zb, Wb]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Xb, Jb],
              [Zb, Wb]
            ],
            [/(apple) ?tv/i],
            [Xb, [Hb, jb + " TV"],
              [Zb, Wb]
            ],
            [/crkey/i],
            [
              [Hb, zb + "cast"],
              [Xb, ib],
              [Zb, Wb]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Hb, [Xb, rb],
              [Zb, Wb]
            ],
            [/(shield \w+ tv)/i],
            [Hb, [Xb, sb],
              [Zb, Wb]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Hb, [Xb, qb],
              [Zb, Wb]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Hb, [Xb, Eb],
              [Zb, Wb]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Hb, [Xb, yb],
              [Zb, Wb]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Xb, Hb, [Zb, Wb]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Xb, bu],
              [Hb, bu],
              [Zb, Wb]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Hb, [Zb, Wb]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Zb, Wb]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Xb, Hb, [Zb, Ab]],
            [/droid.+; (shield)( bui|\))/i],
            [Hb, [Xb, sb],
              [Zb, Ab]
            ],
            [/(playstation \w+)/i],
            [Hb, [Xb, Eb],
              [Zb, Ab]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Hb, [Xb, eb],
              [Zb, Ab]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Hb, [Xb, Pb],
              [Zb, Cb]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Xb, Hb, [Zb, Cb]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Hb, [Xb, Ib],
              [Zb, Cb]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Hb, [Xb, jb],
              [Zb, Cb]
            ],
            [/(opwwe\d{3})/i],
            [Hb, [Xb, Mb],
              [Zb, Cb]
            ],
            [/(moto 360)/i],
            [Hb, [Xb, Nb],
              [Zb, Cb]
            ],
            [/(smartwatch 3)/i],
            [Hb, [Xb, Eb],
              [Zb, Cb]
            ],
            [/(g watch r)/i],
            [Hb, [Xb, Jb],
              [Zb, Cb]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Hb, [Xb, Vb],
              [Zb, Cb]
            ],
            [/droid.+; (glass) \d/i],
            [Hb, [Xb, ib],
              [Zb, Cb]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Xb, Hb, [Zb, Cb]],
            [/; (quest( \d| pro)?)/i],
            [Hb, [Xb, Fb],
              [Zb, Cb]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Xb, [Zb, db]],
            [/(aeobc)\b/i],
            [Hb, [Xb, rb],
              [Zb, db]
            ],
            [/(homepod).+mac os/i],
            [Hb, [Xb, jb],
              [Zb, db]
            ],
            [/windows iot/i],
            [
              [Zb, db]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Hb, [Zb, lb]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Hb, [Zb, Kb]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Zb, Kb]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Zb, lb]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Hb, [Xb, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [pb, [wb, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [wb, pb],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [pb, [wb, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [wb, pb],
            [/ladybird\//i],
            [
              [wb, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [pb, wb]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [wb, pb],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [wb, [pb, hu, Bu]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [pb, hu, Bu],
              [wb, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [pb, /_/g, "."],
              [wb, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [wb, kb],
              [pb, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [pb, wb],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [wb, /(.+)/, "$1 Touch"], pb
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [wb, pb],
            [/\(bb(10);/i],
            [pb, [wb, Db]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [pb, [wb, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [pb, [wb, gb + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [pb, [wb, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [pb, [wb, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [pb, [wb, zb + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [wb, fb], pb
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [wb, pb],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [wb, "Solaris"], pb
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [wb, pb]
          ]
        },
        Gu = function(bb, ub) {
          if (typeof bb === Yb && (ub = bb, bb = Gb), !(this instanceof Gu)) return new Gu(bb, ub).getResult();
          var hb = typeof Ob !== Lb && Ob.navigator ? Ob.navigator : Gb,
            Bb = bb || (hb && hb.userAgent ? hb.userAgent : ""),
            Ab = hb && hb.userAgentData ? hb.userAgentData : Gb,
            Wb = ub ? function(bb, ub) {
              var hb = {};
              for (var Bb in bb) ub[Bb] && ub[Bb].length % 2 === 0 ? hb[Bb] = ub[Bb].concat(bb[Bb]) : hb[Bb] = bb[Bb];
              return hb
            }(Ou, ub) : Ou,
            Cb = hb && hb.userAgent == Bb;
          return this.getBrowser = function() {
            var bb, ub = {};
            return ub[wb] = Gb, ub[pb] = Gb, uu.call(ub, Bb, Wb.browser), ub[ab] = typeof(bb = ub[pb]) === Sb ? bb.replace(/[^\d\.]/g, "").split(".")[0] : Gb, Cb && hb && hb.brave && typeof hb.brave.isBrave == Ub && (ub[wb] = "Brave"), ub
          }, this.getCPU = function() {
            var bb = {};
            return bb[ob] = Gb, uu.call(bb, Bb, Wb.cpu), bb
          }, this.getDevice = function() {
            var bb = {};
            return bb[Xb] = Gb, bb[Hb] = Gb, bb[Zb] = Gb, uu.call(bb, Bb, Wb.device), Cb && !bb[Zb] && Ab && Ab.mobile && (bb[Zb] = lb), Cb && "Macintosh" == bb[Hb] && hb && typeof hb.standalone !== Lb && hb.maxTouchPoints && hb.maxTouchPoints > 2 && (bb[Hb] = "iPad", bb[Zb] = Kb), bb
          }, this.UX = function() {
            var bb = {};
            return bb[wb] = Gb, bb[pb] = Gb, uu.call(bb, Bb, Wb.engine), bb
          }, this.getOS = function() {
            var bb = {};
            return bb[wb] = Gb, bb[pb] = Gb, uu.call(bb, Bb, Wb.os), Cb && !bb[wb] && Ab && Ab.platform && "Unknown" != Ab.platform && (bb[wb] = Ab.platform.replace(/chrome os/i, fb).replace(/macos/i, kb)), bb
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.UX(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Bb
          }, this.setUA = function(bb) {
            return Bb = typeof bb === Sb && bb.length > 500 ? bu(bb, 500) : bb, this
          }, this.setUA(Bb), this
        };
      Gu.VERSION = "1.0.41", Gu.BROWSER = cb([wb, pb, ab]), Gu.CPU = cb([ob]), Gu.DEVICE = cb([Hb, Xb, Zb, Ab, lb, Wb, Kb, Cb, db]), Gu.ENGINE = Gu.OS = cb([wb, pb]), typeof ub !== Lb ? (bb.exports && (ub = bb.exports = Gu), ub.UAParser = Gu) : hb.amdO ? (Bb = function() {
        return Gu
      }.call(ub, hb, ub, bb)) === Gb || (bb.exports = Bb) : typeof Ob !== Lb && (Ob.UAParser = Gu);
      var Uu = typeof Ob !== Lb && (Ob.jQuery || Ob.Zepto);
      if (Uu && !Uu.ua) {
        var Lu = new Gu;
        Uu.ua = Lu.getResult(), Uu.ua.get = function() {
          return Lu.getUA()
        }, Uu.ua.set = function(bb) {
          Lu.setUA(bb);
          var ub = Lu.getResult();
          for (var hb in ub) Uu.ua[hb] = ub[hb]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);