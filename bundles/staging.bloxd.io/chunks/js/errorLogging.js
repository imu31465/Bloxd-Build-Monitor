export const id = 31;
export const ids = [31];
export const modules = {
  6365: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BaseExtension: () => bs,
      BaseInstrumentation: () => cs,
      BaseTransport: () => ba,
      CSPInstrumentation: () => BW,
      ConsoleInstrumentation: () => Es,
      ConsoleTransport: () => aa,
      EVENT_CLICK: () => Nc,
      EVENT_NAVIGATION: () => Vc,
      EVENT_ROUTE_CHANGE: () => gc,
      EVENT_SESSION_EXTEND: () => hc,
      EVENT_SESSION_RESUME: () => Yc,
      EVENT_SESSION_START: () => uc,
      EVENT_VIEW_CHANGED: () => Lc,
      ErrorsInstrumentation: () => Os,
      FetchTransport: () => Ya,
      InternalLoggerLevel: () => rc,
      LogLevel: () => Ns,
      MAX_SESSION_PERSISTENCE_TIME: () => Ib,
      NavigationInstrumentation: () => wW,
      Observable: () => Cs,
      PerformanceInstrumentation: () => Fk,
      PersistentSessionsManager: () => Kc,
      SESSION_EXPIRATION_TIME: () => ab,
      SESSION_INACTIVITY_TIME: () => Tb,
      STORAGE_KEY: () => Wb,
      SessionInstrumentation: () => ks,
      TransportItemType: () => ca,
      UserActionInstrumentation: () => gW,
      UserActionState: () => eW,
      VERSION: () => ss,
      ViewInstrumentation: () => Ks,
      VolatileSessionsManager: () => Zc,
      WebVitalsInstrumentation: () => Ok,
      allLogLevels: () => Ls,
      browserMeta: () => FW,
      buildStackFrame: () => Ws,
      captureMetas: () => za,
      createInternalLogger: () => ta,
      createPromiseBuffer: () => la,
      createSession: () => jW,
      deepEqual: () => Cc,
      defaultEventDomain: () => kb,
      defaultExceptionType: () => gs,
      defaultGlobalObjectKey: () => ya,
      defaultInternalLoggerLevel: () => Sc,
      defaultLogLevel: () => Vs,
      faro: () => lb,
      genShortID: () => ec,
      getCurrentTimestamp: () => mc,
      getDataFromSafariExtensions: () => Xs,
      getIgnoreUrls: () => Rb,
      getInternalFaroFromGlobalObject: () => Xb,
      getStackFramesFromError: () => ms,
      getTransportBody: () => Wa,
      getUrlFromResource: () => Fb,
      getWebInstrumentations: () => rW,
      globalObject: () => fb,
      initializeFaro: () => bT,
      internalGlobalObjectKey: () => Mb,
      isArray: () => yb,
      isBoolean: () => Jb,
      isDomError: () => zb,
      isDomException: () => qb,
      isElement: () => Ab,
      isElementDefined: () => db,
      Ym: () => Sb,
      isError: () => Kb,
      isErrorDefined: () => Gb,
      isErrorEvent: () => Zb,
      isEvent: () => Ob,
      isEventDefined: () => ib,
      isFunction: () => tb,
      isInstanceOf: () => Nb,
      isInt: () => hb,
      isInternalFaroOnGlobalObject: () => mb,
      isMap: () => rb,
      isMapDefined: () => wb,
      isNull: () => Lb,
      isNumber: () => Yb,
      isObject: () => Bb,
      isPrimitive: () => Eb,
      isRegExp: () => Pb,
      isString: () => ub,
      isSymbol: () => gb,
      isSyntheticEvent: () => ob,
      isThenable: () => Db,
      isToString: () => Cb,
      isTypeof: () => eb,
      isUndefined: () => Vb,
      makeCoreConfig: () => Ea,
      noop: () => wc,
      osMeta: () => xW,
      parseStacktrace: () => ls,
      sdkMeta: () => pW,
      setInternalFaroOnGlobalObject: () => nb,
      transportItemTypeToBodyKey: () => sa,
      unknownString: () => Gs,
      userActionDataAttribute: () => xk,
      userActionTimeoutDataAttribute: () => jk
    });
    const kb = "browser",
      Wb = "com.grafana.faro.session",
      ab = 144e5,
      Tb = 9e5,
      Ub = 1e3,
      Ib = Tb,
      Hb = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Ib
      };
    const fb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof sb.g ? sb.g : "undefined" !== typeof self ? self : void 0;
    const Mb = "_faroInternal";

    function Xb() {
      return fb[Mb]
    }

    function nb(bb) {
      bb.config.isolate ? bb.internalLogger.debug("Skipping registering internal Faro instance on global object") : (bb.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(fb, Mb, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bb
      }))
    }

    function mb() {
      return Mb in fb
    }
    let lb = {
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

    function Qb(bb, cb, sb, kb, Wb, ab, Tb) {
      return cb.debug("Initializing Faro"), lb = {
          api: ab,
          config: sb,
          instrumentations: Tb,
          internalLogger: cb,
          metas: kb,
          pause: Wb.pause,
          transports: Wb,
          unpatchedConsole: bb,
          unpause: Wb.unpause
        }, nb(lb),
        function(bb) {
          if (bb.config.preventGlobalExposure) bb.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (bb.internalLogger.debug(`Registering public faro reference in the global scope using "${bb.config.globalObjectKey}" key`), bb.config.globalObjectKey in fb) return void bb.internalLogger.warn(`Skipping global registration due to key "${bb.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(fb, bb.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: bb
            })
          }
        }(lb), lb
    }

    function eb(bb, cb) {
      return typeof bb === cb
    }

    function Cb(bb, cb) {
      return Object.prototype.toString.call(bb) === `[object ${cb}]`
    }

    function Nb(bb, cb) {
      try {
        return bb instanceof cb
      } catch (sb) {
        return !1
      }
    }
    const Vb = bb => eb(bb, "undefined"),
      Lb = bb => eb(bb, "null"),
      ub = bb => eb(bb, "string"),
      Yb = bb => eb(bb, "number") && !isNaN(bb) || eb(bb, "bigint"),
      hb = bb => Yb(bb) && Number.isInteger(bb),
      Jb = bb => eb(bb, "boolean"),
      gb = bb => eb(bb, "symbol"),
      Bb = bb => !Lb(bb) && eb(bb, "object"),
      tb = bb => eb(bb, "function"),
      yb = bb => Cb(bb, "Array"),
      Pb = bb => Cb(bb, "RegExp"),
      Db = bb => tb(null === bb || void 0 === bb ? void 0 : bb.then),
      Eb = bb => !Bb(bb) && !tb(bb),
      ib = "undefined" !== typeof Event,
      Ob = bb => ib && Nb(bb, Event),
      Gb = "undefined" !== typeof Error,
      Kb = bb => Gb && Nb(bb, Error),
      Zb = bb => Cb(bb, "ErrorEvent"),
      zb = bb => Cb(bb, "DOMError"),
      qb = bb => Cb(bb, "DOMException"),
      db = "undefined" !== typeof Element,
      Ab = bb => db && Nb(bb, Element),
      wb = "undefined" !== typeof Map,
      rb = bb => wb && Nb(bb, Map),
      ob = bb => Bb(bb) && "nativeEvent" in bb && "preventDefault" in bb && "stopPropagation" in bb;

    function Sb(bb) {
      return null == bb || (yb(bb) || ub(bb) ? 0 === bb.length : !!Bb(bb) && 0 === Object.keys(bb).length)
    }

    function Rb() {
      return lb.transports.transports.flatMap((bb => bb.getIgnoreUrls()))
    }

    function vb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Rb().some((cb => bb && null != bb.match(cb)))
    }

    function Fb(bb) {
      return ub(bb) ? bb : bb instanceof URL ? bb.href : !Sb(bb) && tb(null === bb || void 0 === bb ? void 0 : bb.toString) ? bb.toString() : void 0
    }
    const xb = "sessionStorage",
      jb = "localStorage";

    function pb(bb) {
      try {
        let cb;
        cb = window[bb];
        const sb = "__faro_storage_test__";
        return cb.setItem(sb, sb), cb.removeItem(sb), !0
      } catch (sb) {
        var cb;
        return null === (cb = lb.internalLogger) || void 0 === cb || cb.info(`Web storage of type ${bb} is not available. Reason: ${sb}`), !1
      }
    }

    function bc(bb, cb) {
      return ac(cb) ? window[cb].getItem(bb) : null
    }

    function cc(bb, cb, sb) {
      if (ac(sb)) try {
        window[sb].setItem(bb, cb)
      } catch (kb) {}
    }

    function sc(bb, cb) {
      ac(cb) && window[cb].removeItem(bb)
    }
    const kc = pb(jb),
      Wc = pb(xb);

    function ac(bb) {
      return bb === jb ? kc : bb === xb && Wc
    }

    function Tc(bb) {
      return Tc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Tc(bb)
    }

    function Uc(bb) {
      var cb = function(bb, cb) {
        if ("object" != Tc(bb) || !bb) return bb;
        var sb = bb[Symbol.toPrimitive];
        if (void 0 !== sb) {
          var kb = sb.call(bb, cb || "default");
          if ("object" != Tc(kb)) return kb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cb ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Tc(cb) ? cb : cb + ""
    }

    function Ic(bb, cb, sb) {
      return (cb = Uc(cb)) in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }

    function Hc(bb, cb) {
      var sb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var kb = Object.getOwnPropertySymbols(bb);
        cb && (kb = kb.filter((function(cb) {
          return Object.getOwnPropertyDescriptor(bb, cb).enumerable
        }))), sb.push.apply(sb, kb)
      }
      return sb
    }

    function fc(bb) {
      for (var cb = 1; cb < arguments.length; cb++) {
        var sb = null != arguments[cb] ? arguments[cb] : {};
        cb % 2 ? Hc(Object(sb), !0).forEach((function(cb) {
          Ic(bb, cb, sb[cb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(sb)) : Hc(Object(sb)).forEach((function(cb) {
          Object.defineProperty(bb, cb, Object.getOwnPropertyDescriptor(sb, cb))
        }))
      }
      return bb
    }

    function Mc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb;
      var cb, sb, kb;
      const Wb = bb.config.sessionTracking,
        ab = null !== (cb = null !== (sb = null === Wb || void 0 === Wb || null === (kb = Wb.sampler) || void 0 === kb ? void 0 : kb.call(Wb, {
          metas: bb.metas.value
        })) && void 0 !== sb ? sb : null === Wb || void 0 === Wb ? void 0 : Wb.samplingRate) && void 0 !== cb ? cb : 1,
        Tb = "number" === typeof ab ? function(bb) {
          return Math.min(1, Math.max(0, bb))
        }(ab) : 0;
      if (!(Tb > 0)) return !1;
      if (1 === Tb) return !0;
      try {
        const bb = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === bb || void 0 === bb ? void 0 : bb.getRandomValues)) {
          const cb = new Uint32Array(1);
          return bb.getRandomValues(cb), cb[0] / Math.pow(2, 32) < Tb
        }
      } catch (Ub) {}
      return Math.random() < Tb
    }

    function Xc() {
      return Date.now()
    }

    function nc() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function mc() {
      return (new Date).toISOString()
    }

    function lc(bb) {
      return new Date(bb).toISOString()
    }
    const Qc = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function ec() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const cb = new Uint32Array(bb),
        sb = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === sb || void 0 === sb ? void 0 : sb.getRandomValues) sb.getRandomValues(cb);
      else
        for (let Wb = 0; Wb < bb; Wb++) cb[Wb] = Math.floor(4294967296 * Math.random());
      let kb = "";
      for (let Wb = 0; Wb < bb; Wb++) kb += Qc[cb[Wb] % 59];
      return kb
    }

    function Cc(bb, cb) {
      if (bb === cb) return !0;
      if (eb(bb, "number") && isNaN(bb)) return eb(cb, "number") && isNaN(cb);
      const sb = yb(bb),
        kb = yb(cb);
      if (sb !== kb) return !1;
      if (sb && kb) {
        const sb = bb.length;
        if (sb !== cb.length) return !1;
        for (let kb = sb; 0 !== kb--;)
          if (!Cc(bb[kb], cb[kb])) return !1;
        return !0
      }
      const Wb = Bb(bb),
        ab = Bb(cb);
      if (Wb !== ab) return !1;
      if (bb && cb && Wb && ab) {
        const sb = Object.keys(bb),
          kb = Object.keys(cb);
        if (sb.length !== kb.length) return !1;
        for (let bb of sb)
          if (!kb.includes(bb)) return !1;
        for (let Wb of sb)
          if (!Cc(bb[Wb], cb[Wb])) return !1;
        return !0
      }
      return !1
    }
    const Nc = "click",
      Vc = "navigation",
      Lc = "view_changed",
      uc = "session_start",
      Yc = "session_resume",
      hc = "session_extend",
      Jc = "service_name_override",
      gc = "route_change";

    function Bc() {
      let {
        sessionId: bb,
        started: cb,
        lastActivity: sb,
        isSampled: kb = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lb;
      var ab;
      const Tb = Xc(),
        Ub = null === (ab = Wb.config) || void 0 === ab || null === (ab = ab.sessionTracking) || void 0 === ab ? void 0 : ab.generateSessionId;
      return null == bb && (bb = "function" === typeof Ub ? Ub() : ec()), {
        sessionId: bb,
        lastActivity: null !== sb && void 0 !== sb ? sb : Tb,
        started: null !== cb && void 0 !== cb ? cb : Tb,
        isSampled: kb
      }
    }

    function tc(bb) {
      if (null == bb) return !1;
      const cb = Xc();
      return cb - bb.started < 144e5 && cb - bb.lastActivity < Tb
    }

    function yc(bb) {
      let {
        fetchUserSession: cb,
        storeUserSession: sb,
        adoptSession: kb,
        updateInterval: Wb = 0
      } = bb, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lb, Ib = 0;
      return function() {
        let {
          forceSessionExtend: bb = !1,
          refreshActivity: Hb = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var fb, Mb;
        if (!cb || !sb) return;
        const Xb = Xc();
        if (!bb && Xb < Ib && Ib - Xb <= Wb) return;
        const nb = Ub.config.sessionTracking,
          mb = null === nb || void 0 === nb ? void 0 : nb.persistent;
        if (mb && !kc || !mb && !Wc) return;
        const lb = cb();
        if (Ib = Math.min(Xb + Wb, (null !== (fb = null === lb || void 0 === lb ? void 0 : lb.started) && void 0 !== fb ? fb : Xb) + ab, (null !== (Mb = null === lb || void 0 === lb ? void 0 : lb.lastActivity) && void 0 !== Mb ? Mb : Xb) + Tb), !1 === bb && tc(lb)) {
          var Qb;
          Hb && sb(fc(fc({}, lb), {}, {
            lastActivity: Xb
          }));
          const bb = null === (Qb = Ub.metas.value.session) || void 0 === Qb ? void 0 : Qb.id;
          null != kb && null != lb.sessionMeta && lb.sessionId !== bb && kb(lb.sessionMeta)
        } else {
          var eb, Cb, Nb;
          let bb = Dc(Bc({
            isSampled: Mc(Ub)
          }, Ub), lb, Ub);
          Ib = Xb + Wb, sb(bb), null === (eb = Ub.api) || void 0 === eb || eb.setSession(bb.sessionMeta), null === nb || void 0 === nb || null === (Cb = nb.onSessionChange) || void 0 === Cb || Cb.call(nb, null !== (Nb = null === lb || void 0 === lb ? void 0 : lb.sessionMeta) && void 0 !== Nb ? Nb : null, bb.sessionMeta)
        }
      }
    }

    function Pc(bb) {
      let cb, {
          fetchUserSession: sb,
          storeUserSession: kb,
          updateInterval: Wb = 0
        } = bb,
        ab = 0;
      return bb => {
        const Tb = Xc();
        if (bb === cb && Tb < ab && ab - Tb <= Wb) return;
        cb = bb, ab = Tb + Wb;
        const Ub = sb();
        (null === Ub || void 0 === Ub ? void 0 : Ub.sessionId) === bb && tc(Ub) && kb(fc(fc({}, Ub), {}, {
          lastActivity: Tb
        }))
      }
    }

    function Dc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lb;
      var kb, Wb, ab, Tb, Ub, Ib;
      const Hb = fc(fc({}, bb), {}, {
          sessionMeta: {
            id: bb.sessionId,
            attributes: ic(fc(fc(fc({}, null === (kb = sb.config.sessionTracking) || void 0 === kb || null === (kb = kb.session) || void 0 === kb ? void 0 : kb.attributes), null !== (Wb = null === (ab = sb.metas.value.session) || void 0 === ab ? void 0 : ab.attributes) && void 0 !== Wb ? Wb : {}), {}, {
              isSampled: bb.isSampled.toString()
            }))
          }
        }),
        fb = null !== (Tb = null === (Ub = sb.metas.value.session) || void 0 === Ub ? void 0 : Ub.overrides) && void 0 !== Tb ? Tb : null === cb || void 0 === cb || null === (Ib = cb.sessionMeta) || void 0 === Ib ? void 0 : Ib.overrides;
      Sb(fb) || (Hb.sessionMeta.overrides = fb);
      const Mb = null === cb || void 0 === cb ? void 0 : cb.sessionId;
      return null != Mb && (Hb.sessionMeta.attributes.previousSession = Mb), Hb
    }

    function Ec(bb) {
      let {
        fetchUserSession: cb,
        storeUserSession: sb
      } = bb, kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lb, Wb = !1;
      return function(bb) {
        if (Wb) return;
        const ab = bb.session,
          Tb = cb();
        let Ub = null === ab || void 0 === ab ? void 0 : ab.id;
        const Ib = null === ab || void 0 === ab ? void 0 : ab.attributes,
          Hb = null === ab || void 0 === ab ? void 0 : ab.overrides,
          fb = null === Tb || void 0 === Tb ? void 0 : Tb.sessionMeta,
          Mb = null === fb || void 0 === fb ? void 0 : fb.overrides,
          Xb = !!Hb && !Cc(Hb, Mb),
          nb = !!Ib && !Cc(Ib, null === fb || void 0 === fb ? void 0 : fb.attributes);
        if (ab && Ub !== (null === Tb || void 0 === Tb ? void 0 : Tb.sessionId) || nb || Xb) {
          var mb, lb;
          const bb = null != Tb && Ub === Tb.sessionId,
            cb = Dc(bb ? Tb : Bc({
              sessionId: Ub,
              isSampled: Mc(kb)
            }, kb), Tb, kb),
            ab = null === Tb || void 0 === Tb || null === (mb = Tb.sessionMeta) || void 0 === mb || null === (mb = mb.attributes) || void 0 === mb ? void 0 : mb.previousSession;
          bb && null != ab && ab !== cb.sessionId && (cb.sessionMeta.attributes.previousSession = ab), (null === (lb = cb.sessionMeta.attributes) || void 0 === lb ? void 0 : lb.previousSession) === cb.sessionId && delete cb.sessionMeta.attributes.previousSession, sb(cb),
            function(bb, cb) {
              let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Wb, ab, Tb;
              if (!cb) return;
              const Ub = sb.serviceName,
                Ib = null !== (Wb = null !== (ab = kb.serviceName) && void 0 !== ab ? ab : null === (Tb = bb.metas.value.app) || void 0 === Tb ? void 0 : Tb.name) && void 0 !== Wb ? Wb : "";
              Ub && Ub !== Ib && bb.api.pushEvent(Jc, {
                serviceName: Ub,
                previousServiceName: Ib
              })
            }(kb, Xb, Hb, Mb), Wb = !0;
          try {
            kb.api.setSession(cb.sessionMeta)
          } finally {
            Wb = !1
          }
        }
      }
    }

    function ic(bb) {
      const cb = {};
      for (const sb of Object.keys(bb)) {
        const kb = bb[sb];
        void 0 !== kb && (cb[sb] = kb)
      }
      return cb
    }

    function Oc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== bb && void 0 !== bb ? bb : {}, function() {
        const bb = new WeakSet;
        return function(cb, sb) {
          if (Bb(sb) && null !== sb) {
            if (bb.has(sb)) return null;
            bb.add(sb)
          }
          return sb
        }
      }())
    }

    function Gc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const cb = {};
      for (const [sb, kb] of Object.entries(bb)) cb[sb] = Bb(kb) && null !== kb ? Oc(kb) : String(kb);
      return cb
    }
    var Kc = class bb {
      constructor() {
        var cb = this;
        let sb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb;
        this.context = sb, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = bb => {
          this.adopting = !0;
          try {
            var cb;
            null === (cb = this.context.api) || void 0 === cb || cb.setSession(bb)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return cb.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = Pc({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Ub
        }), this.updateUserSession = yc({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Ub
        }, sb), this.init()
      }
      static removeUserSession() {
        sc(Wb, bb.storageTypeLocal)
      }
      static storeUserSession(cb) {
        cc(Wb, Oc(cb), bb.storageTypeLocal)
      }
      static fetchUserSession() {
        const cb = bc(Wb, bb.storageTypeLocal);
        return cb ? JSON.parse(cb) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const cb = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            cb && this.recordActivity(cb)
          }
        })), this.context.metas.addListener(Ec({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    Kc.storageTypeLocal = jb;
    var Zc = class bb {
      constructor() {
        var cb = this;
        let sb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb;
        this.context = sb, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: bb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return cb.updateUserSession({
            refreshActivity: bb
          })
        }, this.recordActivity = Pc({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Ub
        }), this.updateUserSession = yc({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession,
          updateInterval: Ub
        }, sb), this.init()
      }
      static removeUserSession() {
        sc(Wb, bb.storageTypeSession)
      }
      static storeUserSession(cb) {
        cc(Wb, Oc(cb), bb.storageTypeSession)
      }
      static fetchUserSession() {
        const cb = bc(Wb, bb.storageTypeSession);
        return cb ? JSON.parse(cb) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var bb;
            this.updateSession({
              refreshActivity: !1
            });
            const cb = null === (bb = this.context.api) || void 0 === bb || null === (bb = bb.getSession()) || void 0 === bb ? void 0 : bb.id;
            cb && this.recordActivity(cb)
          }
        })), this.context.metas.addListener(Ec({
          fetchUserSession: bb.fetchUserSession,
          storeUserSession: bb.storeUserSession
        }, this.context))
      }
    };
    Zc.storageTypeSession = xb;
    const zc = new WeakMap;

    function qc(bb) {
      let cb = zc.get(bb);
      if (!cb) {
        let sb = [],
          kb = [];
        cb = {
          addSessionUpdateListener: bb => {
            sb.push(bb)
          },
          removeSessionUpdateListener: bb => {
            sb = sb.filter((cb => cb !== bb))
          },
          notifySessionUpdate: bb => {
            sb.forEach((cb => cb(bb)))
          },
          shouldCapture: () => kb.every((bb => bb())),
          addCaptureFilter: bb => {
            kb.push(bb)
          },
          removeCaptureFilter: bb => {
            kb = kb.filter((cb => cb !== bb))
          }
        }, zc.set(bb, cb)
      }
      return cb
    }
    var dc = class {
      constructor(bb, cb, sb) {
        this.metas = bb, this.transports = cb, this.onActivate = sb, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = bb => {
          var cb, sb, kb;
          const Wb = this.pending;
          var ab, Tb;
          if ("overrides" === bb.type) return void(this.pending = {
            reset: null !== (ab = null === Wb || void 0 === Wb ? void 0 : Wb.reset) && void 0 !== ab && ab,
            inheritOverrides: null === (Tb = null === Wb || void 0 === Wb ? void 0 : Wb.inheritOverrides) || void 0 === Tb || Tb,
            session: fc(fc({}, null === Wb || void 0 === Wb ? void 0 : Wb.session), {}, {
              overrides: fc(fc({}, null === Wb || void 0 === Wb ? void 0 : Wb.session.overrides), bb.overrides)
            })
          });
          const Ub = bb.session,
            Ib = Sb(Ub) || null != Ub && "id" in Ub && !Ub.id,
            Hb = null !== (cb = null === Ub || void 0 === Ub ? void 0 : Ub.overrides) && void 0 !== cb ? cb : null === Wb || void 0 === Wb ? void 0 : Wb.session.overrides;
          this.pending = {
            reset: Ib || !(null === Ub || void 0 === Ub ? void 0 : Ub.id) && null !== (sb = null === Wb || void 0 === Wb ? void 0 : Wb.reset) && void 0 !== sb && sb,
            inheritOverrides: !(!bb.overrides && void 0 !== (null === Ub || void 0 === Ub ? void 0 : Ub.overrides)) && (null === (kb = null === Wb || void 0 === Wb ? void 0 : Wb.inheritOverrides) || void 0 === kb || kb),
            session: {
              id: null === Ub || void 0 === Ub ? void 0 : Ub.id,
              attributes: (null === Ub || void 0 === Ub ? void 0 : Ub.attributes) && fc({}, Ub.attributes),
              overrides: bb.overrides ? fc(fc({}, null === Wb || void 0 === Wb ? void 0 : Wb.session.overrides), bb.overrides) : Hb && fc({}, Hb)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var bb, cb;
        this.waiting = !0, qc(this.metas).addSessionUpdateListener(this.recordUpdate), qc(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (bb = (cb = this.metas).addCaptureListener) || void 0 === bb || bb.call(cb, this.activate), this.activate()
      }
      destroy() {
        var bb, cb;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), qc(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (bb = (cb = this.metas).removeCaptureListener) || void 0 === bb || bb.call(cb, this.activate), qc(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Ac(bb) {
      return (null === bb || void 0 === bb ? void 0 : bb.persistent) ? Kc : Zc
    }

    function wc() {}
    let rc = function(bb) {
      return bb[bb.OFF = 0] = "OFF", bb[bb.ERROR = 1] = "ERROR", bb[bb.WARN = 2] = "WARN", bb[bb.INFO = 3] = "INFO", bb[bb.VERBOSE = 4] = "VERBOSE", bb
    }({});
    const oc = {
        debug: wc,
        error: wc,
        info: wc,
        prefix: "Faro",
        warn: wc
      },
      Sc = 1;

    function Rc(bb) {
      return Rc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Rc(bb)
    }

    function vc(bb) {
      var cb = function(bb, cb) {
        if ("object" != Rc(bb) || !bb) return bb;
        var sb = bb[Symbol.toPrimitive];
        if (void 0 !== sb) {
          var kb = sb.call(bb, cb || "default");
          if ("object" != Rc(kb)) return kb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cb ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Rc(cb) ? cb : cb + ""
    }

    function Fc(bb, cb, sb) {
      return (cb = vc(cb)) in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }

    function xc(bb, cb) {
      var sb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var kb = Object.getOwnPropertySymbols(bb);
        cb && (kb = kb.filter((function(cb) {
          return Object.getOwnPropertyDescriptor(bb, cb).enumerable
        }))), sb.push.apply(sb, kb)
      }
      return sb
    }

    function jc(bb) {
      for (var cb = 1; cb < arguments.length; cb++) {
        var sb = null != arguments[cb] ? arguments[cb] : {};
        cb % 2 ? xc(Object(sb), !0).forEach((function(cb) {
          Fc(bb, cb, sb[cb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(sb)) : xc(Object(sb)).forEach((function(cb) {
          Object.defineProperty(bb, cb, Object.getOwnPropertyDescriptor(sb, cb))
        }))
      }
      return bb
    }
    const pc = jc({}, console);
    var bs = class {
        constructor() {
          this.unpatchedConsole = pc, this.internalLogger = oc, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
          this.internalLogger.debug(`${this.name}\n`, ...cb)
        }
        logInfo() {
          for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
          this.internalLogger.info(`${this.name}\n`, ...cb)
        }
        logWarn() {
          for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
          this.internalLogger.warn(`${this.name}\n`, ...cb)
        }
        logError() {
          for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
          this.internalLogger.error(`${this.name}\n`, ...cb)
        }
      },
      cs = class extends bs {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const ss = "2.12.1";
    var ks = class extends cs {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = ss, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(bb) {
        var cb;
        const sb = bb.session;
        if (sb && sb.id !== (null === (cb = this.notifiedSession) || void 0 === cb ? void 0 : cb.id)) {
          var kb;
          if (this.isAdoptingSession()) return void(this.notifiedSession = sb);
          if (this.notifiedSession && this.notifiedSession.id === (null === (kb = sb.attributes) || void 0 === kb ? void 0 : kb.previousSession)) return this.api.pushEvent(hc, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = sb);
          this.notifiedSession = sb, this.api.pushEvent(uc, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(bb, cb, sb) {
        const kb = null === sb || void 0 === sb ? void 0 : sb.session;
        let Wb, ab, Tb = bb.fetchUserSession();
        if (cb.persistent && cb.maxSessionPersistenceTime && Tb) {
          const bb = Xc();
          Tb.lastActivity < bb - cb.maxSessionPersistenceTime && (Kc.removeUserSession(), Tb = null)
        }
        const Ub = tc(Tb);
        if ((null === sb || void 0 === sb ? void 0 : sb.reset) || !Ub || (null === kb || void 0 === kb ? void 0 : kb.id) && kb.id !== (null === Tb || void 0 === Tb ? void 0 : Tb.sessionId)) {
          var Ib, Hb, fb, Mb, Xb, nb;
          ab = Bc({
            sessionId: (null === sb || void 0 === sb ? void 0 : sb.reset) ? void 0 : null !== (Ib = null === kb || void 0 === kb ? void 0 : kb.id) && void 0 !== Ib ? Ib : null === (Hb = cb.session) || void 0 === Hb ? void 0 : Hb.id,
            isSampled: Mc(this)
          }, this);
          const bb = ab.sessionId,
            mb = sb && Ub ? null === Tb || void 0 === Tb || null === (fb = Tb.sessionMeta) || void 0 === fb ? void 0 : fb.overrides : void 0,
            lb = mb ? fc(fc({}, null === (Mb = cb.session) || void 0 === Mb ? void 0 : Mb.overrides), mb) : null === (Xb = cb.session) || void 0 === Xb ? void 0 : Xb.overrides;
          ab.sessionMeta = fc({
            id: bb,
            attributes: fc({
              isSampled: ab.isSampled.toString()
            }, null === (nb = cb.session) || void 0 === nb ? void 0 : nb.attributes)
          }, lb ? {
            overrides: lb
          } : {}), Wb = uc
        } else {
          var mb, lb;
          const bb = null === Tb || void 0 === Tb ? void 0 : Tb.sessionId;
          ab = Bc({
            sessionId: bb,
            isSampled: Tb.isSampled || !1,
            started: null === Tb || void 0 === Tb ? void 0 : Tb.started
          }, this);
          const sb = null === Tb || void 0 === Tb ? void 0 : Tb.sessionMeta,
            kb = fc(fc({}, null === (mb = cb.session) || void 0 === mb ? void 0 : mb.overrides), null === sb || void 0 === sb ? void 0 : sb.overrides);
          ab.sessionMeta = fc(fc({}, cb.session), {}, {
            id: bb,
            attributes: fc(fc(fc({}, null === (lb = cb.session) || void 0 === lb ? void 0 : lb.attributes), null === sb || void 0 === sb ? void 0 : sb.attributes), {}, {
              isSampled: ab.isSampled.toString()
            }),
            overrides: kb
          }), Wb = Yc
        }
        var Qb;
        if (kb && (ab.sessionMeta = fc(fc({}, ab.sessionMeta), {}, {
            attributes: fc(fc(fc({}, null === (Qb = ab.sessionMeta) || void 0 === Qb ? void 0 : Qb.attributes), kb.attributes), {}, {
              isSampled: ab.isSampled.toString()
            })
          }), kb.overrides)) {
          const bb = (null === sb || void 0 === sb ? void 0 : sb.inheritOverrides) ? fc(fc({}, ab.sessionMeta.overrides), kb.overrides) : kb.overrides;
          Object.keys(bb).length > 0 ? ab.sessionMeta.overrides = bb : delete ab.sessionMeta.overrides
        }
        return {
          initialSession: ab,
          lifecycleType: Wb
        }
      }
      registerBeforeSendHook(bb) {
        var cb;
        this.beforeSendHook = cb => {
          var sb, kb;
          const Wb = null === (sb = cb.meta.session) || void 0 === sb ? void 0 : sb.id;
          Wb && !this.transports.isPaused() && bb(Wb);
          const ab = null === (kb = cb.meta.session) || void 0 === kb ? void 0 : kb.attributes;
          if (ab && "true" === (null === ab || void 0 === ab ? void 0 : ab.isSampled)) {
            var Tb;
            let bb = JSON.parse(JSON.stringify(cb));
            const sb = null === (Tb = bb.meta.session) || void 0 === Tb ? void 0 : Tb.attributes;
            var Ub;
            if (null === sb || void 0 === sb || delete sb.isSampled, 0 === Object.keys(null !== sb && void 0 !== sb ? sb : {}).length) null === (Ub = bb.meta.session) || void 0 === Ub || delete Ub.attributes;
            return bb
          }
          return null
        }, null === (cb = this.transports) || void 0 === cb || cb.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var bb;
        this.logDebug("init session instrumentation");
        const cb = document.prerendering;
        var sb;
        if ((null === (bb = this.config.sessionTracking) || void 0 === bb ? void 0 : bb.enabled) && (cb || this.prerenderSession)) return null !== (sb = this.prerenderSession) && void 0 !== sb || (this.prerenderSession = new dc(this.metas, this.transports, (bb => {
          this.prerenderSession = void 0, this.initializeSession(bb)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(bb) {
        const cb = this.config.sessionTracking;
        if (null === cb || void 0 === cb ? void 0 : cb.enabled) {
          var sb, kb;
          const Wb = Ac(cb),
            ab = new Wb(this);
          this.isAdoptingSession = ab.isAdopting, this.registerBeforeSendHook(ab.recordActivity);
          const {
            initialSession: Tb,
            lifecycleType: Ub
          } = this.createInitialSession(Wb, cb, bb);
          Wb.storeUserSession(Tb);
          const Ib = Tb.sessionMeta;
          this.notifiedSession = Ib, this.api.setSession(Ib), this.captureListener = () => {
            this.transports.isPaused() || ab.updateSession({
              refreshActivity: !1
            })
          }, null === (sb = (kb = this.metas).addCaptureListener) || void 0 === sb || sb.call(kb, this.captureListener), Ub === uc && this.api.pushEvent(uc, {}, void 0, {
            skipDedupe: !0
          }), Ub === Yc && this.api.pushEvent(Yc, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var bb, cb, sb;
        (null === (bb = this.prerenderSession) || void 0 === bb || bb.destroy(), this.captureListener) && (null === (cb = (sb = this.metas).removeCaptureListener) || void 0 === cb || cb.call(sb, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Ws(bb, cb, sb, kb) {
      const Wb = {
        filename: bb || document.location.href,
        function: cb || "?"
      };
      return void 0 !== sb && (Wb.lineno = sb), void 0 !== kb && (Wb.colno = kb), Wb
    }
    const as = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Ts = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Us = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Is = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Hs = "safari-extension",
      fs = "safari-web-extension",
      Ms = /Minified React error #\d+;/i;

    function Xs(bb, cb) {
      const sb = null === bb || void 0 === bb ? void 0 : bb.includes(Hs),
        kb = !sb && (null === bb || void 0 === bb ? void 0 : bb.includes("safari-web-extension"));
      return sb || kb ? [(null === bb || void 0 === bb ? void 0 : bb.includes("@")) ? bb.split("@")[0] : bb, sb ? `${Hs}:${cb}` : `${fs}:${cb}`] : [bb, cb]
    }
    const ns = 1024;

    function ms(bb) {
      let cb = [];
      bb.stacktrace ? cb = bb.stacktrace.split("\n").filter(((bb, cb) => cb % 2 === 0)) : bb.stack && (cb = bb.stack.split("\n"));
      const sb = cb.reduce(((cb, sb, kb) => {
        if (sb.length > ns) return cb;
        let Wb, ab, Tb, Ub, Ib;
        if (Wb = as.exec(sb)) {
          if (ab = Wb[1], Tb = Wb[2], Ub = Wb[3], Ib = Wb[4], null === Tb || void 0 === Tb ? void 0 : Tb.startsWith("eval")) {
            const bb = Ts.exec(Tb);
            bb && (Tb = bb[1], Ub = bb[2], Ib = bb[3])
          }
          Tb = (null === Tb || void 0 === Tb ? void 0 : Tb.startsWith("address at ")) ? Tb.substring(11) : Tb, [ab, Tb] = Xs(ab, Tb)
        } else if (Wb = Us.exec(sb)) {
          if (ab = Wb[1], Tb = Wb[3], Ub = Wb[4], Ib = Wb[5], Tb && Tb.includes(" > eval")) {
            const bb = Is.exec(Tb);
            bb && (ab = ab || "eval", Tb = bb[1], Ub = bb[2])
          } else 0 === kb && !Ib && Yb(bb.columnNumber) && (Ib = String(bb.columnNumber + 1));
          [ab, Tb] = Xs(ab, Tb)
        }
        return (Tb || ab) && cb.push(Ws(Tb, ab, Ub ? Number(Ub) : void 0, Ib ? Number(Ib) : void 0)), cb
      }), []);
      return Ms.test(bb.message) ? sb.slice(1) : sb
    }

    function ls(bb) {
      return {
        frames: ms(bb)
      }
    }
    const Qs = "http-request-start",
      es = "http-request-end";
    var Cs = class bb {
      constructor() {
        this.subscribers = []
      }
      subscribe(bb) {
        return this.subscribers.push(bb), {
          unsubscribe: () => this.unsubscribe(bb)
        }
      }
      unsubscribe(bb) {
        this.subscribers = this.subscribers.filter((cb => cb !== bb))
      }
      notify(bb) {
        this.subscribers.forEach((cb => cb(bb)))
      }
      first() {
        const cb = new bb,
          sb = bb => {
            cb.notify(bb), kb.unsubscribe()
          },
          kb = this.subscribe(sb),
          Wb = cb.unsubscribe.bind(cb);
        return this.withUnsubscribeOverride(cb, Wb, sb)
      }
      takeWhile(cb) {
        const sb = new bb,
          kb = bb => {
            cb(bb) ? sb.notify(bb) : sb.unsubscribe(kb)
          };
        this.subscribe(kb);
        const Wb = sb.unsubscribe.bind(sb);
        return this.withUnsubscribeOverride(sb, Wb, kb)
      }
      filter(cb) {
        const sb = new bb,
          kb = bb => {
            cb(bb) && sb.notify(bb)
          };
        this.subscribe(kb);
        const Wb = sb.unsubscribe.bind(sb);
        return this.withUnsubscribeOverride(sb, Wb, kb)
      }
      merge() {
        const cb = new bb,
          sb = [];
        for (var kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
        Wb.forEach((bb => {
          const kb = bb.subscribe((bb => {
            cb.notify(bb)
          }));
          sb.push(kb)
        }));
        const Tb = cb.unsubscribeAll.bind(cb);
        return cb.unsubscribe = () => {
          sb.forEach((bb => bb.unsubscribe())), Tb()
        }, cb
      }
      withUnsubscribeOverride(bb, cb, sb) {
        return bb.unsubscribe = bb => {
          cb(bb), this.unsubscribe(sb)
        }, bb
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Ns = function(bb) {
      return bb.TRACE = "trace", bb.DEBUG = "debug", bb.INFO = "info", bb.LOG = "log", bb.WARN = "warn", bb.ERROR = "error", bb
    }({});
    const Vs = "log",
      Ls = ["trace", "debug", "info", "log", "warn", "error"];
    let us, Ys = !1;
    const hs = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      gs = "Error",
      Bs = bb => bb.map((bb => Bb(bb) ? Oc(bb) : String(bb))).join(" ");

    function ts(bb) {
      let cb, sb, kb, Wb, ab = [];
      if (Zb(bb) && bb.error) cb = bb.error.message, sb = bb.error.name, ab = ms(bb.error);
      else if ((kb = zb(bb)) || qb(bb)) {
        const {
          name: Wb,
          message: ab
        } = bb;
        sb = null !== Wb && void 0 !== Wb ? Wb : kb ? "DOMError" : "DOMException", cb = ab ? `${sb}: ${ab}` : sb
      } else Kb(bb) ? (sb = bb.name, cb = bb.message, ab = ms(bb)) : (Bb(bb) || (Wb = Ob(bb))) && (sb = Wb ? bb.constructor.name : void 0, cb = `Non-Error exception captured with keys: ${Object.keys(bb)}`);
      return [cb, sb, ab]
    }

    function ys(bb) {
      const [cb, sb, kb, Wb, ab] = bb;
      let Tb, Ub, Ib = [];
      const Hb = ub(cb),
        fb = Ws(sb, "?", kb, Wb);
      return ab || !Hb ? ([Tb, Ub, Ib] = ts(null !== ab && void 0 !== ab ? ab : cb), 0 === Ib.length && (Ib = [fb])) : Hb && ([Tb, Ub] = function(bb) {
        var cb, sb;
        const kb = bb.match(hs),
          Wb = null !== (cb = null === kb || void 0 === kb ? void 0 : kb[1]) && void 0 !== cb ? cb : gs;
        return [null !== (sb = null === kb || void 0 === kb ? void 0 : kb[2]) && void 0 !== sb ? sb : bb, Wb]
      }(cb), Ib = [fb]), {
        value: Tb,
        type: Ub,
        stackFrames: Ib
      }
    }

    function Ps(bb, cb) {
      return Kb(bb[0]) ? ys(bb) : {
        value: cb(bb)
      }
    }
    const Ds = bb => bb.map((bb => {
      try {
        return String(bb)
      } catch (cb) {
        return ""
      }
    })).join(" ");
    var Es = class bb extends cs {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = ss, this.errorSerializer = Ds
      }
      initialize() {
        var cb, sb;
        const kb = this.config.consoleInstrumentation,
          Wb = (null === kb || void 0 === kb ? void 0 : kb.serializeErrors) || !!(null === kb || void 0 === kb ? void 0 : kb.errorSerializer);
        this.errorSerializer = Wb ? null !== (cb = null === kb || void 0 === kb ? void 0 : kb.errorSerializer) && void 0 !== cb ? cb : Bs : Ds;
        const ab = null !== (sb = null === kb || void 0 === kb ? void 0 : kb.disabledLevels) && void 0 !== sb ? sb : bb.defaultDisabledLevels,
          Tb = function(bb) {
            if (us || (us = new Cs), !Ys) {
              const cb = null !== bb && void 0 !== bb ? bb : pc;
              Ls.forEach((bb => {
                console[bb] = function() {
                  for (var sb, kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
                  us.notify({
                    type: "console",
                    level: bb,
                    args: Wb
                  }), null === (sb = cb[bb]) || void 0 === sb || sb.apply(console, Wb)
                }
              })), Ys = !0
            }
            return us
          }(this.unpatchedConsole);
        this.subscription = Tb.subscribe((cb => {
          let {
            level: sb,
            args: Wb
          } = cb;
          if (!ab.includes(sb)) try {
            if (sb !== Ns.ERROR || (null === kb || void 0 === kb ? void 0 : kb.consoleErrorAsLog))
              if (sb === Ns.ERROR && (null === kb || void 0 === kb ? void 0 : kb.consoleErrorAsLog)) {
                const {
                  value: cb,
                  type: kb,
                  stackFrames: ab
                } = Ps(Wb, this.errorSerializer);
                this.api.pushLog(cb ? [bb.consoleErrorPrefix + cb] : Wb, {
                  level: sb,
                  context: {
                    value: null !== cb && void 0 !== cb ? cb : "",
                    type: null !== kb && void 0 !== kb ? kb : "",
                    stackFrames: (null === ab || void 0 === ab ? void 0 : ab.length) ? Bs(ab) : ""
                  }
                })
              } else this.api.pushLog(Wb, {
                level: sb
              });
            else {
              const {
                value: cb,
                type: sb,
                stackFrames: kb
              } = Ps(Wb, this.errorSerializer);
              if (cb && !sb && !kb) return void this.api.pushError(new Error(bb.consoleErrorPrefix + cb));
              this.api.pushError(new Error(bb.consoleErrorPrefix + cb), {
                type: sb,
                stackFrames: kb
              })
            }
          } catch (Tb) {
            this.logError(Tb)
          }
        }))
      }
      destroy() {
        var bb;
        null === (bb = this.subscription) || void 0 === bb || bb.unsubscribe(), this.subscription = void 0
      }
    };
    Es.defaultDisabledLevels = [Ns.DEBUG, Ns.TRACE, Ns.LOG], Es.consoleErrorPrefix = "console.error: ";
    const is = [];
    var Os = class extends cs {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = ss
      }
      initialize() {
        this.logDebug("Initializing"),
          function(bb) {
            const cb = window.onerror;
            window.onerror = function() {
              for (var sb = arguments.length, kb = new Array(sb), Wb = 0; Wb < sb; Wb++) kb[Wb] = arguments[Wb];
              try {
                const {
                  value: cb,
                  type: sb,
                  stackFrames: Wb
                } = ys(kb), ab = kb[4];
                if (cb) {
                  const kb = {
                    type: sb,
                    stackFrames: Wb
                  };
                  null != ab && (kb.originalError = ab), bb.pushError(new Error(cb), kb)
                }
              } finally {
                null === cb || void 0 === cb || cb.apply(window, kb)
              }
            }
          }(this.api),
          function(bb) {
            const cb = cb => {
              var sb;
              let kb, Wb, ab = cb;
              if (ab.reason) ab = cb.reason;
              else if (null === (sb = cb.detail) || void 0 === sb ? void 0 : sb.reason) {
                var Tb;
                ab = null === (Tb = cb.detail) || void 0 === Tb ? void 0 : Tb.reason
              }
              let Ub = [];
              Eb(ab) ? (kb = `Non-Error promise rejection captured with value: ${String(ab)}`, Wb = "UnhandledRejection") : [kb, Wb, Ub] = ts(ab), kb && bb.pushError(new Error(kb), {
                type: Wb,
                stackFrames: Ub
              })
            };
            window.addEventListener("unhandledrejection", cb), is.push(cb)
          }(this.api)
      }
    };
    const Gs = "unknown";
    var Ks = class extends cs {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = ss, this.waitingForActivation = !1, this.sendViewChangedEvent = bb => {
          var cb;
          if (this.waitingForActivation || document.prerendering) return;
          const sb = bb.view;
          if (sb && sb.name !== (null === (cb = this.notifiedView) || void 0 === cb ? void 0 : cb.name)) {
            var kb, Wb, ab;
            const bb = null !== (kb = null === (Wb = this.notifiedView) || void 0 === Wb ? void 0 : Wb.name) && void 0 !== kb ? kb : Gs;
            this.notifiedView = sb, this.api.pushEvent(Lc, {
              fromView: bb,
              toView: null !== (ab = sb.name) && void 0 !== ab ? ab : Gs
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
    class Zs {
      t;
      o = 0;
      i = [];
      l(bb) {
        if (bb.hadRecentInput) return;
        const cb = this.i[0],
          sb = this.i.at(-1);
        this.o && cb && sb && bb.startTime - sb.startTime < 1e3 && bb.startTime - cb.startTime < 5e3 ? (this.o += bb.value, this.i.push(bb)) : (this.o = bb.value, this.i = [bb]), this.t?.(bb)
      }
    }
    const zs = () => {
        const bb = performance.getEntriesByType("navigation")[0];
        if (bb && bb.responseStart > 0 && bb.responseStart < performance.now()) return bb
      },
      qs = bb => {
        if ("loading" === document.readyState) return "loading";
        const cb = zs();
        if (cb) {
          if (bb < cb.domInteractive) return "loading";
          if (0 === cb.domContentLoadedEventStart || bb < cb.domContentLoadedEventStart) return "dom-interactive";
          if (0 === cb.domComplete || bb < cb.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      ds = bb => {
        const cb = bb.nodeName;
        return 1 === bb.nodeType ? cb.toLowerCase() : cb.toUpperCase().replace(/^#/, "")
      },
      As = bb => {
        let cb = "";
        try {
          for (; 9 !== bb?.nodeType;) {
            const sb = bb,
              kb = sb.id ? "#" + sb.id : [ds(sb), ...Array.from(sb.classList ?? []).sort()].join(".");
            if (cb.length + kb.length > 99) return cb || kb;
            if (cb = cb ? kb + ">" + cb : kb, sb.id) break;
            bb = sb.parentNode
          }
        } catch {}
        return cb
      },
      ws = new WeakMap;

    function rs(bb, cb) {
      let sb = ws.get(cb);
      return sb || (sb = new WeakMap, ws.set(cb, sb)), sb.get(bb) || sb.set(bb, new cb), sb.get(bb)
    }
    let os = -1;
    const Ss = () => os,
      Rs = bb => {
        addEventListener("pageshow", (cb => {
          cb.persisted && (os = cb.timeStamp, bb(cb))
        }), !0)
      },
      vs = (bb, cb, sb, kb) => {
        let Wb, ab;
        return Tb => {
          cb.value >= 0 && (Tb || kb) && (ab = cb.value - (Wb ?? 0), (ab || void 0 === Wb) && (Wb = cb.value, cb.delta = ab, cb.rating = ((bb, cb) => bb > cb[1] ? "poor" : bb > cb[0] ? "needs-improvement" : "good")(cb.value, sb), bb(cb)))
        }
      },
      Fs = bb => {
        requestAnimationFrame((() => requestAnimationFrame((() => bb()))))
      },
      xs = () => zs()?.activationStart ?? 0;
    let ps = -1;
    const bk = new Set,
      ck = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      sk = bb => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === bb.type)
            for (const bb of bk) bb();
          isFinite(ps) || (ps = "visibilitychange" === bb.type ? bb.timeStamp : 0, removeEventListener("prerenderingchange", sk, !0))
        }
      },
      kk = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ps = 1 / 0), ps < 0) {
          const bb = xs(),
            cb = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((cb => "hidden" === cb.name && cb.startTime >= bb))?.startTime;
          ps = cb ?? ck(), addEventListener("visibilitychange", sk, !0), addEventListener("prerenderingchange", sk, !0), Rs((() => {
            setTimeout((() => {
              ps = ck()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return ps
          },
          onHidden(bb) {
            bk.add(bb)
          }
        }
      },
      Wk = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Tb = arguments.length > 6 ? arguments[6] : void 0;
        const Ub = zs(),
          Ib = Ub?.navigationId || 0;
        let Hb = "navigate";
        return sb ? Hb = sb : Ss() >= 0 ? Hb = "back-forward-cache" : Ub && (document.prerendering || xs() > 0 ? Hb = "prerender" : document.wasDiscarded ? Hb = "restore" : Ub.type && (Hb = Ub.type.replace(/_/g, "-"))), {
          name: bb,
          value: cb,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Hb,
          navigationId: kb || Ib,
          navigationInteractionId: Wb,
          navigationURL: ab || Ub?.name,
          navigationStartTime: Tb || 0
        }
      },
      ak = function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const kb = bb.filter((bb => PerformanceObserver.supportedEntryTypes.includes(bb)));
          if (kb.length > 0) {
            const bb = new PerformanceObserver((bb => {
              queueMicrotask((() => {
                const sb = bb.getEntries();
                kb.length > 1 && sb.sort(((bb, cb) => bb.startTime + bb.duration - (cb.startTime + cb.duration))), cb(sb)
              }))
            }));
            for (const cb of kb) bb.observe({
              type: cb,
              buffered: !0,
              ...sb
            });
            return bb
          }
        } catch {}
      },
      Tk = bb => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && bb && bb.reportSoftNavs,
      Uk = (bb, cb) => {
        if (bb.set(cb.navigationId, cb), bb.size > 2) {
          const cb = bb.keys().next().value;
          void 0 !== cb && bb.delete(cb)
        }
      },
      Ik = bb => {
        let cb = !1;
        return () => {
          cb || (bb(), cb = !0)
        }
      };
    class Hk {
      u
    }
    const fk = bb => {
        document.prerendering ? addEventListener("prerenderingchange", bb, !0) : bb()
      },
      Mk = [1800, 3e3],
      Xk = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sb = Tk(cb);
        fk((() => {
          const kb = rs(cb, Hk),
            Wb = kk();
          let ab, Tb = Wk("FCP");
          const Ub = ak(["paint"], (bb => {
            for (const cb of bb) "first-contentful-paint" === cb.name && (Ub.disconnect(), cb.startTime < Wb.firstHiddenTime && (Tb.value = Math.max(cb.startTime - xs(), 0), Tb.entries.push(cb), Tb.navigationId = cb.navigationId || Tb.navigationId, ab(!0)))
          }));
          Ub && (ab = vs(bb, Tb, Mk, cb.reportAllChanges), Rs((sb => {
            Tb = Wk("FCP", -1, "back-forward-cache", Tb.navigationId, Tb.navigationInteractionId, Tb.navigationURL, Ss()), ab = vs(bb, Tb, Mk, cb.reportAllChanges), Fs((() => {
              Tb.value = performance.now() - sb.timeStamp, ab(!0)
            }))
          }))), sb && ak(["soft-navigation"], (sb => {
            sb.forEach((sb => {
              kb.u && sb.navigationId && Uk(kb.u, sb);
              const Wb = Math.max((sb.presentationTime || sb.paintTime || 0) - sb.startTime, 0);
              Tb = Wk("FCP", Wb, "soft-navigation", sb.navigationId, sb.interactionId, sb.name, sb.startTime), ab = vs(bb, Tb, Mk, cb.reportAllChanges), ab(!0)
            }))
          }), cb)
        }))
      },
      nk = [.1, .25],
      mk = bb => bb.find((bb => 1 === bb.node?.nodeType)) || bb[0];
    let lk = 0,
      Qk = 1 / 0,
      ek = 0;
    const Ck = bb => {
      for (const cb of bb) cb.interactionId && (Qk = Math.min(Qk, cb.interactionId), ek = Math.max(ek, cb.interactionId), lk = ek ? (ek - Qk) / 7 + 1 : 0)
    };
    let Nk;
    const Vk = () => Nk ? lk : performance.interactionCount ?? 0;
    class Lk {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Vk() - this.h
      }
      D() {
        this.h = Vk(), this.v.length = 0, this.p.clear()
      }
      S(bb) {
        const cb = this.T(),
          sb = Math.min(this.v.length - 1, Math.floor(cb / 50));
        return !cb || -1 !== sb || "soft-navigation" !== bb && "back-forward-cache" !== bb ? this.v[sb] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(bb) {
        if (this.m?.(bb), !bb.interactionId) return;
        const cb = this.v.at(-1);
        let sb = this.p.get(bb.interactionId);
        if (sb || this.v.length < 10 || bb.duration > cb.k) {
          if (sb ? bb.duration > sb.k ? (sb.entries = [bb], sb.k = bb.duration) : bb.duration === sb.k && bb.startTime === sb.entries[0].startTime && sb.entries.push(bb) : (sb = {
              id: bb.interactionId,
              entries: [bb],
              k: bb.duration
            }, this.p.set(sb.id, sb), this.v.push(sb)), this.v.sort(((bb, cb) => cb.k - bb.k)), this.v.length > 10) {
            const bb = this.v.splice(10);
            for (const cb of bb) this.p.delete(cb.id)
          }
          this.M?.(sb)
        }
      }
    }
    const uk = bb => {
        const cb = "requestIdleCallback" in globalThis ? 1e3 : 0,
          sb = globalThis.requestIdleCallback || setTimeout,
          kb = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) bb();
        else {
          const Wb = Ik(bb);
          let ab = -1;
          const Tb = () => {
            kb(ab), Wb()
          };
          addEventListener("visibilitychange", Tb, {
            once: !0,
            capture: !0
          }), ab = sb((() => {
            removeEventListener("visibilitychange", Tb, {
              capture: !0
            }), Wb()
          }), {
            timeout: cb
          })
        }
      },
      Yk = [200, 500],
      hk = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sb = rs(cb = Object.assign({}, cb), Lk);
        let kb = [],
          Wb = [],
          ab = 0;
        const Tb = new WeakMap,
          Ub = new WeakMap;
        let Ib = !1;
        const Hb = () => {
            Ib || (Ib = !0, uk(fb))
          },
          fb = () => {
            const bb = new Set(sb.v.map((bb => Tb.get(bb.entries[0])))),
              cb = Wb.length - 10;
            Wb = Wb.filter(((sb, kb) => kb >= cb || bb.has(sb)));
            const Ub = new Set;
            for (const sb of Wb) {
              const bb = Mb(sb.startTime, sb.processingEnd);
              for (const cb of bb) Ub.add(cb)
            }
            const Hb = kb.length - 10;
            kb = kb.filter(((bb, cb) => Ub.has(bb) || cb >= Hb && bb.startTime > ab)), Ib = !1
          };
        sb.m = bb => {
          const sb = bb.startTime + bb.duration;
          let kb;
          ab = Math.max(ab, bb.processingEnd);
          for (let ab = Wb.length - 1; ab >= 0; ab--) {
            const Tb = Wb[ab];
            if (Math.abs(sb - Tb.renderTime) <= 8) {
              kb = Tb, kb.startTime = Math.min(bb.startTime, kb.startTime), kb.processingStart = Math.min(bb.processingStart, kb.processingStart), kb.processingEnd = Math.max(bb.processingEnd, kb.processingEnd), cb.includeProcessedEventEntries && kb.entries.push(bb);
              break
            }
          }
          kb || (kb = {
            startTime: bb.startTime,
            processingStart: bb.processingStart,
            processingEnd: bb.processingEnd,
            renderTime: sb,
            entries: cb.includeProcessedEventEntries ? [bb] : []
          }, Wb.push(kb)), bb.interactionId && Tb.set(bb, kb), Hb()
        }, sb.M = bb => {
          if (!Ub.get(bb)) {
            const sb = bb.entries.find((bb => bb.target))?.target;
            if (sb) {
              const kb = cb.generateTarget?.(sb) ?? As(sb);
              Ub.set(bb, kb)
            } else {
              const cb = bb.entries.find((bb => bb.targetSelector))?.targetSelector;
              cb && Ub.set(bb, cb)
            }
          }
        };
        const Mb = (bb, cb) => {
          const sb = [];
          for (const Wb of kb)
            if (!(Wb.startTime + Wb.duration < bb)) {
              if (Wb.startTime > cb) break;
              sb.push(Wb)
            } return sb
        };
        ak(["long-animation-frame"], (bb => {
            kb = kb.concat(bb), Hb()
          }), cb),
          function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const sb = kk();
            fk((() => {
              "interactionCount" in performance || Nk || (Nk = ak(["event"], Ck, {
                durationThreshold: 0
              }));
              let kb, Wb = Wk("INP");
              const ab = rs(cb, Lk),
                Tb = (sb, Tb, Ub, Ib, Hb) => {
                  ab.D(), Wb = Wk("INP", -1, sb, Tb, Ub, Ib, Hb), kb = vs(bb, Wb, Yk, cb.reportAllChanges)
                },
                Ub = () => {
                  const bb = ab.S(Wb.navigationType);
                  bb && bb.k !== Wb.value && (Wb.value = bb.k, Wb.entries = bb.entries, kb())
                },
                Ib = bb => {
                  Ub(), kb(!0), Tb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                },
                Hb = function(bb) {
                  let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  uk((() => {
                    for (const cb of bb) "soft-navigation" !== cb.entryType ? ab.l(cb) : Ib(cb);
                    Ub(), cb && kb(!0)
                  }))
                },
                fb = ["event", "first-input"];
              Tk(cb) && fb.push("soft-navigation");
              const Mb = ak(fb, Hb, {
                ...cb,
                durationThreshold: cb.durationThreshold ?? 40
              });
              kb = vs(bb, Wb, Yk, cb.reportAllChanges), Mb && (sb.onHidden((() => {
                Hb(Mb.takeRecords(), !0)
              })), Rs((() => {
                Tb("back-forward-cache", Wb.navigationId, Wb.navigationInteractionId, Wb.navigationURL, Ss())
              })))
            }))
          }((cb => {
            bb((bb => {
              if (0 === bb.entries.length) {
                const cb = bb.navigationStartTime || 0,
                  sb = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: bb.value,
                    loadState: qs(cb)
                  };
                return Object.assign(bb, {
                  attribution: sb
                })
              }
              const cb = bb.entries[0],
                kb = Tb.get(cb),
                Wb = Math.max(kb.processingStart, cb.startTime),
                ab = Math.max(cb.startTime + cb.duration, Wb),
                Ib = Math.min(kb.processingEnd, ab),
                Hb = kb.entries.sort(((bb, cb) => bb.processingStart - cb.processingStart)),
                fb = Mb(cb.startTime, Ib),
                Xb = sb.p.get(cb.interactionId),
                nb = {
                  interactionTarget: Ub.get(Xb),
                  interactionType: cb.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: cb.startTime,
                  nextPaintTime: ab,
                  processedEventEntries: Hb,
                  longAnimationFrameEntries: fb,
                  inputDelay: Wb - cb.startTime,
                  processingDuration: Ib - Wb,
                  presentationDelay: ab - Ib,
                  loadState: qs(cb.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (bb => {
                const cb = bb.interactionTime,
                  sb = bb.nextPaintTime;
                if (!bb.longAnimationFrameEntries?.length || !cb || !sb) return;
                const kb = bb.inputDelay,
                  Wb = bb.processingDuration;
                let ab, Tb, Ub = 0,
                  Ib = 0,
                  Hb = 0,
                  fb = 0;
                for (const nb of bb.longAnimationFrameEntries) {
                  Ib = Ib + nb.startTime + nb.duration - nb.styleAndLayoutStart;
                  for (const bb of nb.scripts) {
                    const sb = bb.startTime + bb.duration;
                    if (sb < cb) continue;
                    const Hb = sb - Math.max(cb, bb.startTime),
                      Mb = bb.duration ? Hb / bb.duration * bb.forcedStyleAndLayoutDuration : 0;
                    Ub += Hb - Mb, Ib += Mb, Hb > fb && (Tb = bb.startTime < cb + kb ? "input-delay" : bb.startTime >= cb + kb + Wb ? "presentation-delay" : "processing-duration", ab = bb, fb = Hb)
                  }
                }
                const Mb = bb.longAnimationFrameEntries.at(-1),
                  Xb = Mb ? Mb.startTime + Mb.duration : 0;
                Xb >= cb + kb + Wb && (Hb = sb - Xb), ab && Tb && (bb.longestScript = {
                  entry: ab,
                  subpart: Tb,
                  intersectingDuration: fb
                }), bb.totalScriptDuration = Ub, bb.totalStyleAndLayoutDuration = Ib, bb.totalPaintDuration = Hb, bb.totalUnattributedDuration = sb - cb - Ub - Ib - Hb
              })(nb), Object.assign(bb, {
                attribution: nb
              })
            })(cb))
          }), cb)
      };
    class Jk {
      m;
      u;
      l(bb) {
        this.m?.(bb)
      }
    }
    const gk = [2500, 4e3];
    let Bk = 50;
    const tk = [];
    ak(["resource"], (bb => {
      for (const cb of bb) tk.push(cb), tk.length > Bk && tk.shift()
    }));
    const yk = [800, 1800],
      Pk = bb => {
        document.prerendering ? fk((() => Pk(bb))) : "complete" !== document.readyState ? addEventListener("load", (() => Pk(bb)), !0) : setTimeout(bb)
      },
      Dk = "load_state",
      Ek = "time_to_first_byte";
    var ik = class {
        constructor(bb, cb) {
          this.corePushMeasurement = bb, this.webVitalConfig = cb
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var bb;
          ! function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const sb = rs(cb = Object.assign({}, cb), Zs),
              kb = new WeakMap;
            sb.t = bb => {
                if (bb?.sources?.length) {
                  const sb = mk(bb.sources),
                    Wb = sb?.node;
                  if (Wb) {
                    const bb = cb.generateTarget?.(Wb) ?? As(Wb);
                    kb.set(sb, bb)
                  }
                }
              },
              function(bb) {
                let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const sb = kk();
                Xk(Ik((() => {
                  let kb, Wb = Wk("CLS", 0);
                  const ab = rs(cb, Zs),
                    Tb = (sb, Tb, Ub, Ib, Hb) => {
                      Wb = Wk("CLS", 0, sb, Tb, Ub, Ib, Hb), ab.o = 0, kb = vs(bb, Wb, nk, cb.reportAllChanges)
                    },
                    Ub = function() {
                      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      ab.o > Wb.value && (Wb.value = ab.o, Wb.entries = ab.i), kb(bb)
                    },
                    Ib = bb => {
                      Ub(!0), Tb("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime)
                    },
                    Hb = bb => {
                      for (const cb of bb) "soft-navigation" !== cb.entryType ? ab.l(cb) : Ib(cb);
                      Ub()
                    },
                    fb = ["layout-shift"];
                  Tk(cb) && fb.push("soft-navigation");
                  const Mb = ak(fb, Hb);
                  Mb && (kb = vs(bb, Wb, nk, cb.reportAllChanges), sb.onHidden((() => {
                    Hb(Mb.takeRecords()), kb(!0)
                  })), Rs((() => {
                    Tb("back-forward-cache", Wb.navigationId, Wb.navigationInteractionId, Wb.navigationURL, Ss()), Fs(kb)
                  })), setTimeout(kb))
                })))
              }((cb => {
                bb((bb => {
                  let cb = {};
                  if (bb.entries.length) {
                    const sb = bb.entries.reduce(((bb, cb) => bb.value > cb.value ? bb : cb));
                    if (sb?.sources?.length) {
                      const bb = mk(sb.sources);
                      bb && (cb = {
                        largestShiftTarget: kb.get(bb),
                        largestShiftTime: sb.startTime,
                        largestShiftValue: sb.value,
                        largestShiftSource: bb,
                        largestShiftEntry: sb,
                        loadState: qs(sb.startTime)
                      })
                    }
                  }
                  return Object.assign(bb, {
                    attribution: cb
                  })
                })(cb))
              }), cb)
          }((bb => {
            const {
              loadState: cb,
              largestShiftValue: sb,
              largestShiftTime: kb,
              largestShiftTarget: Wb
            } = bb.attribution, ab = this.buildInitialValues(bb);
            this.addIfPresent(ab, "largest_shift_value", sb), this.addIfPresent(ab, "largest_shift_time", kb);
            const Tb = this.buildInitialContext(bb);
            this.addIfPresent(Tb, Dk, cb), this.addIfPresent(Tb, "largest_shift_target", Wb), this.pushMeasurement(ab, Tb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureFCP() {
          var bb;
          ! function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const sb = rs(cb = Object.assign({}, cb), Hk);
            Tk(cb) && (sb.u = new Map), Xk((cb => {
              bb((bb => {
                let cb = {
                  timeToFirstByte: 0,
                  firstByteToFCP: bb.value,
                  loadState: qs(Ss())
                };
                if ("soft-navigation" !== bb.navigationType) {
                  if (bb.entries.length) {
                    const sb = zs(),
                      kb = bb.entries.at(-1);
                    if (sb) {
                      const Wb = sb.responseStart,
                        ab = sb.activationStart || 0,
                        Tb = Math.max(0, Wb - ab);
                      cb = {
                        timeToFirstByte: Tb,
                        firstByteToFCP: bb.value - Tb,
                        loadState: qs(bb.entries[0].startTime),
                        navigationEntry: sb,
                        fcpEntry: kb
                      }
                    }
                  }
                } else {
                  const kb = sb.u?.get(bb.navigationId);
                  kb && (cb = {
                    timeToFirstByte: 0,
                    firstByteToFCP: bb.value,
                    loadState: "complete",
                    navigationEntry: kb
                  })
                }
                return Object.assign(bb, {
                  attribution: cb
                })
              })(cb))
            }), cb)
          }((bb => {
            const {
              firstByteToFCP: cb,
              timeToFirstByte: sb,
              loadState: kb
            } = bb.attribution, Wb = this.buildInitialValues(bb);
            this.addIfPresent(Wb, "first_byte_to_fcp", cb), this.addIfPresent(Wb, Ek, sb);
            const ab = this.buildInitialContext(bb);
            this.addIfPresent(ab, Dk, kb), this.pushMeasurement(Wb, ab)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureINP() {
          var bb;
          hk((bb => {
            var cb;
            const {
              interactionTime: sb,
              presentationDelay: kb,
              inputDelay: Wb,
              processingDuration: ab,
              nextPaintTime: Tb,
              loadState: Ub,
              interactionTarget: Ib,
              interactionType: Hb,
              totalScriptDuration: fb,
              totalStyleAndLayoutDuration: Mb,
              totalPaintDuration: Xb,
              totalUnattributedDuration: nb,
              longestScript: mb
            } = bb.attribution, lb = this.buildInitialValues(bb);
            this.addIfPresent(lb, "interaction_time", sb), this.addIfPresent(lb, "presentation_delay", kb), this.addIfPresent(lb, "input_delay", Wb), this.addIfPresent(lb, "processing_duration", ab), this.addIfPresent(lb, "next_paint_time", Tb), this.addNumberIfDefined(lb, "total_script_duration", fb), this.addNumberIfDefined(lb, "total_style_and_layout_duration", Mb), this.addNumberIfDefined(lb, "total_paint_duration", Xb), this.addNumberIfDefined(lb, "total_unattributed_duration", nb), this.addNumberIfDefined(lb, "longest_script_intersecting_duration", null === mb || void 0 === mb ? void 0 : mb.intersectingDuration);
            const Qb = this.buildInitialContext(bb);
            this.addIfPresent(Qb, Dk, Ub), this.addIfPresent(Qb, "interaction_target", Ib), this.addIfPresent(Qb, "interaction_type", Hb), this.addIfPresent(Qb, "longest_script_subpart", null === mb || void 0 === mb ? void 0 : mb.subpart), this.addIfPresent(Qb, "longest_script_invoker_type", null === mb || void 0 === mb ? void 0 : mb.entry.invokerType), (null === (cb = this.webVitalConfig) || void 0 === cb ? void 0 : cb.trackAttributionSources) && (this.addIfPresent(Qb, "longest_script_invoker", null === mb || void 0 === mb ? void 0 : mb.entry.invoker), this.addIfPresent(Qb, "longest_script_source_url", null === mb || void 0 === mb ? void 0 : mb.entry.sourceURL), this.addIfPresent(Qb, "longest_script_source_function_name", null === mb || void 0 === mb ? void 0 : mb.entry.sourceFunctionName), this.addIfPresent(Qb, "longest_script_source_char_position", void 0 !== (null === mb || void 0 === mb ? void 0 : mb.entry.sourceCharPosition) ? String(mb.entry.sourceCharPosition) : void 0)), this.pushMeasurement(lb, Qb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureLCP() {
          var bb;
          ! function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (cb = Object.assign({}, cb)).resourceBufferSize && (Bk = cb.resourceBufferSize);
            const sb = rs(cb, Jk),
              kb = new WeakMap;
            Tk(cb) && (sb.u = new Map), sb.m = bb => {
                const sb = bb.element;
                if (sb) {
                  const Wb = cb.generateTarget?.(sb) ?? As(sb);
                  kb.set(bb, Wb)
                } else bb.id && kb.set(bb, `#${bb.id}`)
              },
              function(bb) {
                let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  sb = !1;
                const kb = Tk(cb);
                fk((() => {
                  let Wb, ab = kk(),
                    Tb = Wk("LCP");
                  const Ub = rs(cb, Jk),
                    Ib = (kb, Ub, Ib, Hb, fb) => {
                      Tb = Wk("LCP", -1, kb, Ub, Ib, Hb, fb), Wb = vs(bb, Tb, gk, cb.reportAllChanges), sb = !1, "soft-navigation" === kb && (ab = kk(!0))
                    },
                    Hb = bb => {
                      Ub.u && bb.navigationId && Uk(Ub.u, bb), sb || Wb(!0), Ib("soft-navigation", bb.navigationId, bb.interactionId, bb.name, bb.startTime);
                      const cb = bb.getLargestInteractionContentfulPaint?.();
                      cb && fb([cb])
                    },
                    fb = bb => {
                      cb.reportAllChanges || kb || (bb = bb.slice(-1));
                      for (const cb of bb) {
                        if (!cb) continue;
                        if ("soft-navigation" === cb.entryType) {
                          Hb(cb);
                          continue
                        }
                        let bb = 0,
                          sb = [],
                          kb = cb.startTime;
                        if ("largest-contentful-paint" === cb.entryType) bb = Math.max(cb.startTime - xs(), 0), Ub.l(cb), sb = [cb];
                        else if ("interaction-contentful-paint" === cb.entryType) {
                          const Wb = cb;
                          if (!Tb.navigationId) continue;
                          if ("interactionId" in Wb && Wb.interactionId != Tb.navigationInteractionId) continue;
                          kb = Wb.largestContentfulPaint?.renderTime || 0, bb = Math.max(kb - cb.startTime, 0), Wb.largestContentfulPaint && (Ub.l(Wb.largestContentfulPaint), sb = [Wb.largestContentfulPaint])
                        }
                        kb < ab.firstHiddenTime && (Tb.value = bb, Tb.entries = sb, Wb())
                      }
                    },
                    Mb = ["largest-contentful-paint"];
                  kb && Mb.push("interaction-contentful-paint", "soft-navigation");
                  const Xb = ak(Mb, fb);
                  if (Xb) {
                    Wb = vs(bb, Tb, gk, cb.reportAllChanges);
                    const ab = ["keydown", "click", "visibilitychange"],
                      Ub = bb => {
                        if (bb.isTrusted && !sb) {
                          const bb = Tb.id;
                          uk((() => {
                            if (!sb) {
                              if (!kb) {
                                Xb.disconnect();
                                for (const bb of ab) removeEventListener(bb, Ub, {
                                  capture: !0
                                })
                              }
                              bb === Tb.id && (sb = !0, Wb(!0))
                            }
                          }))
                        }
                      };
                    for (const bb of ab) addEventListener(bb, Ub, {
                      capture: !0
                    });
                    Rs((kb => {
                      Ib("back-forward-cache", Tb.navigationId, Tb.navigationInteractionId, Tb.navigationURL, Ss()), Wb = vs(bb, Tb, gk, cb.reportAllChanges), Fs((() => {
                        Tb.value = performance.now() - kb.timeStamp, sb = !0, Wb(!0)
                      }))
                    }))
                  }
                }))
              }((cb => {
                bb((bb => {
                  let cb = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: bb.value
                  };
                  if (bb.entries.length) {
                    const Wb = bb.entries.at(-1),
                      ab = bb => bb.name === Wb.url && (bb.requestStart || bb.startTime) <= Wb.startTime,
                      Tb = Wb.url && (tk.findLast(ab) || performance.getEntriesByType("resource").findLast(ab));
                    let Ub;
                    cb.target = kb.get(Wb), cb.lcpEntry = Wb, Wb.url && (cb.url = Wb.url), Tb && (cb.lcpResourceEntry = Tb);
                    let Ib = 0,
                      Hb = 0;
                    if ("soft-navigation" !== bb.navigationType ? (Ub = zs(), Ib = Ub?.activationStart ?? 0, Hb = Ub?.responseStart ?? 0) : (Ib = bb.navigationStartTime || 0, Ub = sb.u?.get(bb.navigationId)), Ub) {
                      const sb = Math.max(0, Hb - Ib),
                        kb = Math.max(sb, Tb ? (Tb.requestStart || Tb.startTime) - Ib : 0),
                        Wb = Math.min(bb.value, Math.max(kb, Tb ? Tb.responseEnd - Ib : 0));
                      cb = {
                        ...cb,
                        timeToFirstByte: sb,
                        resourceLoadDelay: kb - sb,
                        resourceLoadDuration: Wb - kb,
                        elementRenderDelay: bb.value - Wb,
                        navigationEntry: Ub
                      }
                    }
                  }
                  return Object.assign(bb, {
                    attribution: cb
                  })
                })(cb))
              }), cb)
          }((bb => {
            var cb;
            const {
              elementRenderDelay: sb,
              resourceLoadDelay: kb,
              resourceLoadDuration: Wb,
              timeToFirstByte: ab,
              target: Tb,
              url: Ub,
              lcpResourceEntry: Ib
            } = bb.attribution, Hb = this.buildInitialValues(bb);
            this.addIfPresent(Hb, "element_render_delay", sb), this.addIfPresent(Hb, "resource_load_delay", kb), this.addIfPresent(Hb, "resource_load_duration", Wb), this.addIfPresent(Hb, Ek, ab);
            const fb = this.buildInitialContext(bb);
            this.addIfPresent(fb, "element", Tb), (null === (cb = this.webVitalConfig) || void 0 === cb ? void 0 : cb.trackAttributionSources) && (this.addIfPresent(fb, "resource_url", Ub), this.addIfPresent(fb, "resource_delivery_type", null === Ib || void 0 === Ib ? void 0 : Ib.deliveryType), this.addIfPresent(fb, "resource_initiator_type", null === Ib || void 0 === Ib ? void 0 : Ib.initiatorType)), this.pushMeasurement(Hb, fb)
          }), {
            reportAllChanges: null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.reportAllChanges
          })
        }
        measureTTFB() {
          var bb;
          ! function(bb) {
            ! function(bb) {
              let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const sb = Tk(cb);
              let kb = Wk("TTFB"),
                Wb = vs(bb, kb, yk, cb.reportAllChanges);
              Pk((() => {
                const ab = zs();
                if (ab) {
                  const Tb = ab.responseStart;
                  kb.value = Math.max(Tb - xs(), 0), kb.entries = [ab], Wb(!0), Rs((() => {
                    kb = Wk("TTFB", 0, "back-forward-cache", kb.navigationId, kb.navigationInteractionId, kb.navigationURL, Ss()), Wb = vs(bb, kb, yk, cb.reportAllChanges), Wb(!0)
                  })), sb && ak(["soft-navigation"], (sb => {
                    sb.forEach((sb => {
                      sb.navigationId && (kb = Wk("TTFB", 0, "soft-navigation", sb.navigationId, sb.interactionId, sb.name, sb.startTime), kb.entries = [sb], Wb = vs(bb, kb, yk, cb.reportAllChanges), Wb(!0))
                    }))
                  }), cb)
                }
              }))
            }((cb => {
              bb((bb => {
                const cb = bb.entries[0];
                let sb = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: cb
                };
                if (bb.entries.length && cb instanceof PerformanceNavigationTiming) {
                  const kb = cb.activationStart || 0,
                    Wb = Math.max((cb.workerStart || cb.fetchStart || 0) - kb, 0),
                    ab = Math.max(cb.domainLookupStart - kb, 0),
                    Tb = Math.max(cb.connectStart - kb, 0),
                    Ub = Math.max(cb.connectEnd - kb, 0);
                  sb = {
                    waitingDuration: Wb,
                    cacheDuration: ab - Wb,
                    dnsDuration: Tb - ab,
                    connectionDuration: Ub - Tb,
                    requestDuration: bb.value - Ub,
                    navigationEntry: cb
                  }
                }
                return Object.assign(bb, {
                  attribution: sb
                })
              })(cb))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((bb => {
            const {
              dnsDuration: cb,
              connectionDuration: sb,
              requestDuration: kb,
              waitingDuration: Wb,
              cacheDuration: ab
            } = bb.attribution, Tb = this.buildInitialValues(bb);
            this.addIfPresent(Tb, "dns_duration", cb), this.addIfPresent(Tb, "connection_duration", sb), this.addIfPresent(Tb, "request_duration", kb), this.addIfPresent(Tb, "waiting_duration", Wb), this.addIfPresent(Tb, "cache_duration", ab);
            const Ub = this.buildInitialContext(bb);
            this.pushMeasurement(Tb, Ub)
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
          var cb;
          const sb = null !== (cb = bc("com.grafana.faro.lastNavigationId", xb)) && void 0 !== cb ? cb : Gs;
          return {
            id: bb.id,
            rating: bb.rating,
            navigation_type: bb.navigationType,
            navigation_entry_id: sb
          }
        }
        pushMeasurement(bb, cb) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: bb
          }, {
            context: cb
          })
        }
        addIfPresent(bb, cb, sb) {
          sb && (bb[cb] = sb)
        }
        addNumberIfDefined(bb, cb, sb) {
          void 0 !== sb && (bb[cb] = sb)
        }
      },
      Ok = class extends cs {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = ss
        }
        initialize() {
          this.logDebug("Initializing"), new ik(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const Gk = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Kk() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const cb of bb)
        if ("traceparent" === cb.name) {
          if (!Gk.test(cb.description)) continue;
          const [, bb, sb] = cb.description.split("-");
          if (null != bb && null != sb) return {
            traceId: bb,
            spanId: sb
          };
          break
        }
    }

    function Zk(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: sb,
        monoNow: kb
      } = cb;
      return Math.min(sb, sb - (kb - bb))
    }

    function zk(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [sb, kb] of Object.entries(cb)) {
        const cb = bb[sb];
        return null != cb && (yb(kb) ? kb.includes(cb) : cb === kb)
      }
      return !0
    }

    function qk(bb) {
      const {
        connectEnd: cb,
        connectStart: sb,
        decodedBodySize: kb,
        domainLookupEnd: Wb,
        domainLookupStart: ab,
        duration: Tb,
        encodedBodySize: Ub,
        fetchStart: Ib,
        initiatorType: Hb,
        name: fb,
        nextHopProtocol: Mb,
        redirectEnd: Xb,
        redirectStart: nb,
        renderBlockingStatus: mb,
        requestStart: lb,
        responseEnd: Qb,
        responseStart: eb,
        responseStatus: Cb,
        secureConnectionStart: Nb,
        transferSize: Vb,
        workerStart: Lb
      } = bb;
      return {
        name: fb,
        httpHost: Ak(fb),
        duration: wk(Tb),
        tcpHandshakeTime: wk(cb - sb),
        dnsLookupTime: wk(Wb - ab),
        tlsNegotiationTime: wk(cb - Nb),
        responseStatus: wk(Cb),
        redirectTime: wk(Xb - nb),
        requestTime: wk(eb - lb),
        responseTime: wk(Qb - eb),
        fetchTime: wk(Qb - Ib),
        serviceWorkerTime: wk(Lb > 0 ? Ib - Lb : 0),
        decodedBodySize: wk(kb),
        encodedBodySize: wk(Ub),
        cacheHitStatus: function() {
          let bb = "fullLoad";
          0 === Vb ? kb > 0 && (bb = "cache") : null != Cb ? 304 === Cb && (bb = "conditionalFetch") : Ub > 0 && Vb < Ub && (bb = "conditionalFetch");
          return bb
        }(),
        renderBlockingStatus: wk(mb),
        protocol: Mb,
        initiatorType: Hb,
        visibilityState: document.visibilityState,
        ttfb: wk(eb - lb),
        transferSize: wk(Vb)
      }
    }

    function dk(bb) {
      const {
        activationStart: cb,
        domComplete: sb,
        domContentLoadedEventEnd: kb,
        domContentLoadedEventStart: Wb,
        domInteractive: ab,
        fetchStart: Tb,
        loadEventEnd: Ub,
        loadEventStart: Ib,
        responseStart: Hb,
        type: fb
      } = bb, Mb = function() {
        var bb;
        return null != (null === (bb = performance.timing) || void 0 === bb ? void 0 : bb.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return fc(fc({}, qk(bb)), {}, {
        pageLoadTime: wk(sb - Tb),
        documentParsingTime: wk(Mb ? ab - Mb : null),
        domProcessingTime: wk(sb - ab),
        domContentLoadHandlerTime: wk(kb - Wb),
        onLoadTime: wk(Ub - Ib),
        ttfb: wk(Math.max(Hb - (null !== cb && void 0 !== cb ? cb : 0), 0)),
        type: fb
      })
    }

    function Ak(bb) {
      try {
        return new URL(bb).host || Gs
      } catch (cb) {
        return Gs
      }
    }

    function wk(bb) {
      return null == bb ? Gs : "number" === typeof bb ? Math.round(bb > 0 ? bb : 0).toString() : bb.toString()
    }
    const rk = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function Sk(bb, cb, sb, kb, Wb, ab, Tb) {
      try {
        var Ub = bb[ab](Tb),
          Ib = Ub.value
      } catch (bb) {
        return void sb(bb)
      }
      Ub.done ? cb(Ib) : Promise.resolve(Ib).then(kb, Wb)
    }

    function Rk(bb) {
      return function() {
        var cb = this,
          sb = arguments;
        return new Promise((function(kb, Wb) {
          var ab = bb.apply(cb, sb);

          function Tb(bb) {
            Sk(ab, kb, Wb, Tb, Ub, "next", bb)
          }

          function Ub(bb) {
            Sk(ab, kb, Wb, Tb, Ub, "throw", bb)
          }
          Tb(void 0)
        }))
      }
    }
    const vk = new Cs;
    var Fk = class extends cs {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = ss
      }
      initialize() {
        var bb = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let cb = !1;
        const sb = () => {
          ! function(bb) {
            if ("complete" === document.readyState) bb();
            else {
              const cb = () => {
                "complete" === document.readyState && (bb(), document.removeEventListener("readystatechange", cb))
              };
              document.addEventListener("readystatechange", cb)
            }
          }(Rk((function*() {
            if (cb) return;
            const sb = bb.api.pushEvent,
              {
                faroNavigationId: kb
              } = yield function(bb) {
                let cb;
                const sb = new Promise((bb => {
                  cb = bb
                }));
                return new PerformanceObserver((sb => {
                  var kb;
                  const [Wb] = sb.getEntries();
                  if (null == Wb || vb(Wb.name)) return;
                  const ab = Wb.toJSON();
                  let Tb = Kk(null === ab || void 0 === ab ? void 0 : ab.serverTiming);
                  const Ub = null !== (kb = bc("com.grafana.faro.lastNavigationId", xb)) && void 0 !== kb ? kb : Gs,
                    Ib = fc(fc({}, dk(ab)), {}, {
                      faroNavigationId: ec(),
                      faroPreviousNavigationId: Ub
                    });
                  cc("com.grafana.faro.lastNavigationId", Ib.faroNavigationId, xb), bb("faro.performance.navigation", Ib, void 0, {
                    spanContext: Tb,
                    timestampOverwriteMs: Zk(ab.startTime)
                  }), cb(Ib)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), sb
              }(sb);
            cb || null == kb || function(bb, cb, sb, kb) {
              const Wb = kb.trackResources;
              new PerformanceObserver((kb => {
                const ab = kb.getEntries(),
                  Tb = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Ub of ab) {
                  if (vb(Ub.name)) continue;
                  null === sb || void 0 === sb || sb.notify({
                    type: "resource"
                  });
                  const kb = Ub.toJSON();
                  let ab = Kk(null === kb || void 0 === kb ? void 0 : kb.serverTiming);
                  (null == Wb && zk(kb, rk) || Wb) && cb("faro.performance.resource", fc(fc({}, qk(kb)), {}, {
                    faroNavigationId: bb,
                    faroResourceId: ec()
                  }), void 0, {
                    spanContext: ab,
                    timestampOverwriteMs: Zk(kb.startTime, Tb)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(kb, sb, vk, bb.config)
          })))
        };
        this.cancelInitialization = () => {
          cb = !0, document.removeEventListener("prerenderingchange", sb)
        }, document.prerendering ? document.addEventListener("prerenderingchange", sb, {
          once: !0
        }) : sb()
      }
      destroy() {
        var bb;
        null === (bb = this.cancelInitialization) || void 0 === bb || bb.call(this), this.cancelInitialization = void 0
      }
    };
    const xk = "data-faro-user-action-name",
      jk = xk.replace(/-name$/, "-timeout"),
      pk = 1e3;

    function bW(bb) {
      return `data-${(bb.startsWith("data-")?bb.slice(5):bb).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function cW(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wc;
      if (void 0 === bb) return cb;
      let kb = NaN;
      try {
        kb = "string" === typeof bb && "" === bb.trim() ? NaN : Number(bb)
      } catch (Wb) {}
      return !Number.isFinite(kb) || kb <= 0 ? (sb(`initialActivityTimeout must be a finite number greater than zero; using ${cb} ms`), cb) : kb > 1e3 ? (sb(`initialActivityTimeout cannot exceed ${pk} ms; clamping to the maximum`), pk) : kb
    }

    function sW(bb, cb, sb) {
      return void 0 !== bb && window.clearTimeout(bb), window.setTimeout((() => {
        cb()
      }), sb)
    }

    function kW(bb) {
      return bb.type === es
    }
    let WW, aW;

    function TW() {
      return WW || (WW = new Cs), aW || (aW = new MutationObserver(((bb, cb) => {
        WW.notify({
          type: "dom-mutation"
        })
      })), aW.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), WW
    }
    const UW = "fetch",
      IW = "xhr";
    let HW, fW, MW, XW, nW = !1;

    function mW() {
      if (HW) return HW;

      function bb(bb) {
        HW.notify({
          type: Qs,
          request: bb
        })
      }

      function cb(bb) {
        HW.notify({
          type: es,
          request: bb
        })
      }
      return HW = new Cs, nW || (! function(bb) {
        let {
          onRequestEnd: cb,
          onRequestStart: sb
        } = bb;
        MW || (MW = window.fetch);
        window.fetch = function() {
          var bb, kb;
          const Wb = null !== (bb = Fb(arguments[0])) && void 0 !== bb ? bb : "",
            ab = vb(Wb),
            Tb = (null !== (kb = arguments[1]) && void 0 !== kb ? kb : {}).method,
            Ub = ec();
          return ab || sb({
            url: Wb,
            method: Tb,
            requestId: Ub,
            apiType: UW
          }), MW.apply(this, arguments).then((bb => (ab || cb({
            url: Wb,
            method: Tb,
            requestId: Ub,
            apiType: UW
          }), bb))).catch((bb => {
            throw ab || cb({
              url: Wb,
              method: Tb,
              requestId: Ub,
              apiType: UW
            }), bb
          }))
        }
      }({
        onRequestStart: bb,
        onRequestEnd: cb
      }), function(bb) {
        let {
          onRequestStart: cb,
          onRequestEnd: sb
        } = bb;
        fW || (fW = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const bb = arguments[1],
            kb = vb(bb),
            Wb = arguments[0],
            ab = ec();
          this.addEventListener("loadstart", (function() {
            kb || cb({
              url: bb,
              method: Wb,
              requestId: ab,
              apiType: IW
            })
          })), this.addEventListener("load", (function() {
            kb || sb({
              url: bb,
              method: Wb,
              requestId: ab,
              apiType: IW
            })
          })), this.addEventListener("error", (function() {
            kb || sb({
              url: bb,
              method: Wb,
              requestId: ab,
              apiType: IW
            })
          })), this.addEventListener("abort", (function() {
            kb || sb({
              url: bb,
              method: Wb,
              requestId: ab,
              apiType: IW
            })
          })), fW.apply(this, arguments)
        }
      }({
        onRequestStart: bb,
        onRequestEnd: cb
      }), nW = !0), HW
    }
    let lW, QW = !1;
    let eW = function(bb) {
      return bb[bb.Started = 0] = "Started", bb[bb.Halted = 1] = "Halted", bb[bb.Cancelled = 2] = "Cancelled", bb[bb.Ended = 3] = "Ended", bb
    }({});
    var CW = class {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = bb, this.logDebug = cb, this.initialActivityTimeout = sb, this.http = mW(), this.dom = TW(), this.perf = (XW || (XW = new Cs), QW || (lW = vk.subscribe((bb => {
          "resource" === bb.type && XW.notify({
            type: "resource-entry"
          })
        })), QW = !0), XW), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Cs).merge(this.http, this.dom, this.perf).takeWhile((() => [eW.Started, eW.Halted].includes(this.userAction.getState()))).filter((bb => !!(this.userAction.getState() !== eW.Halted || kW(bb) && this.runningRequests.has(bb.request.requestId)))).subscribe((bb => {
          (function(bb) {
            return bb.type === Qs
          })(bb) && this.runningRequests.set(bb.request.requestId, bb.request), kW(bb) && this.runningRequests.delete(bb.request.requestId), kW(bb) ? this.userAction.getState() === eW.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((bb => [eW.Ended, eW.Cancelled].includes(bb))).first().subscribe((() => this.cleanup())), this.startupTid = sW(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === eW.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === eW.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = sW(this.haltTid, (() => {
          this.userAction.getState() === eW.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var bb, cb;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (bb = this.allMonitorsSub) || void 0 === bb || bb.unsubscribe(), null === (cb = this.stateSub) || void 0 === cb || cb.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(bb) {
        void 0 !== bb && window.clearTimeout(bb)
      }
    };

    function NW(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wc;
      var sb;
      const {
        api: kb,
        config: Wb,
        internalLogger: ab
      } = bb, Tb = cW(null === (sb = Wb.userActionsInstrumentation) || void 0 === sb ? void 0 : sb.initialActivityTimeout, 100, cb);
      return {
        processUserEvent: function(bb) {
          var cb, sb;
          const ab = null !== (cb = null === (sb = Wb.userActionsInstrumentation) || void 0 === sb ? void 0 : sb.dataAttributeName) && void 0 !== cb ? cb : xk,
            Tb = bb.target;
          if (!(Tb instanceof Element)) return;
          const Ub = function(bb, cb) {
              let sb = bb;
              for (; sb;) {
                if (sb.hasAttribute(cb)) return sb;
                sb = sb.parentElement
              }
              return null
            }(Tb, bW(ab)),
            Ib = function(bb, cb) {
              if (!bb) return;
              const sb = function(bb) {
                  return bW(bb).slice(5).replace(/-(.)/g, ((bb, cb) => cb.toUpperCase()))
                }(cb),
                kb = bb.dataset;
              for (const Wb in kb)
                if (Wb === sb) return kb[Wb]
            }(Ub, ab);
          if (!Ub || !Ib) return;
          const Hb = function(bb, cb) {
            const sb = bb.getAttribute(function(bb) {
              const cb = bW(bb);
              return cb.endsWith("-name") ? `${cb.slice(0,-5)}-timeout` : `${cb}-timeout`
            }(cb));
            return null === sb ? void 0 : Number(sb)
          }(Ub, ab);
          kb.startUserAction(Ib, {}, {
            triggerName: bb.type,
            initialActivityTimeout: Hb
          })
        },
        processUserActionStarted: function(bb, sb) {
          const kb = bb,
            Wb = cW(sb, Tb, cb);
          new CW(kb, ab.debug, Wb).attach()
        }
      }
    }
    const VW = "user_action_start",
      LW = {
        Normal: "normal",
        Critical: "critical"
      };
    var uW = class {
        constructor() {
          this.buffer = []
        }
        addItem(bb) {
          this.buffer.push(bb)
        }
        flushBuffer(bb) {
          if (tb(bb))
            for (const cb of this.buffer) bb(cb);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      YW = class extends Cs {
        constructor(bb) {
          let {
            name: cb,
            parentId: sb,
            trigger: kb,
            transports: Wb,
            attributes: ab,
            trackUserActionsExcludeItem: Tb,
            importance: Ub = LW.Normal,
            pushEvent: Ib
          } = bb;
          super(), this.name = cb, this.attributes = ab, this.id = ec(), this.trigger = kb, this.parentId = null !== sb && void 0 !== sb ? sb : this.id, this.trackUserActionsExcludeItem = Tb, this.importance = Ub, this._pushEvent = Ib, this._itemBuffer = new uW, this._transports = Wb, this._state = 0, this._start()
        }
        addItem(bb) {
          return 0 === this._state && (this._itemBuffer.addItem(bb), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Xc(), this._startTimeMono = nc())
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
          const bb = Xc(),
            cb = nc() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((bb => {
            if (function(bb, cb) {
                return (null === cb || void 0 === cb ? void 0 : cb(bb)) || "measurement" === bb.type && "web-vitals" === bb.payload.type
              }(bb, this.trackUserActionsExcludeItem)) return void this._transports.execute(bb);
            const cb = jc(jc({}, bb), {}, {
              payload: jc(jc({}, bb.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(cb)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", jc({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: bb.toString(),
            userActionDuration: cb.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Gc(this.attributes)), void 0, {
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
    const hW = new Cs;

    function JW(bb, cb) {
      return !!bb && (0 === (null === bb || void 0 === bb ? void 0 : bb.getState()) && (bb.addItem(cb), !0))
    }
    var gW = class extends cs {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = ss
        }
        initialize() {
          const {
            processUserEvent: bb,
            processUserActionStarted: cb
          } = NW(lb, (bb => this.logWarn(bb)));
          this._processUserEvent = bb, this._processKeydown = cb => {
            [" ", "Enter"].includes(cb.key) && bb(cb)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = hW.subscribe((bb => {
            let {
              type: sb,
              userAction: kb,
              initialActivityTimeout: Wb
            } = bb;
            "user_action_start" === sb && cb(kb, Wb)
          }))
        }
        destroy() {
          var bb;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (bb = this._userActionSub) || void 0 === bb || bb.unsubscribe()
        }
      },
      BW = class extends cs {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = ss, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(bb) {
          const cb = {
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
          this.api.pushEvent("securitypolicyviolation", Gc(cb))
        }
      };
    var tW = class extends Cs {
      constructor(bb, cb) {
        var sb, kb, Wb, ab;
        super(), this._tracking = !1, this.eventsObservable = bb, this._options = {
          inactivityMs: null !== (sb = null === cb || void 0 === cb ? void 0 : cb.inactivityMs) && void 0 !== sb ? sb : 100,
          drainTimeoutMs: null !== (kb = null === cb || void 0 === cb ? void 0 : cb.drainTimeoutMs) && void 0 !== kb ? kb : 1e4,
          isOperationStart: null !== (Wb = null === cb || void 0 === cb ? void 0 : cb.isOperationStart) && void 0 !== Wb ? Wb : () => {},
          isOperationEnd: null !== (ab = null === cb || void 0 === cb ? void 0 : cb.isOperationEnd) && void 0 !== ab ? ab : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((bb => {
          var cb;
          this._lastEventTime = nc(), null === (cb = this._currentEvents) || void 0 === cb || cb.push(bb);
          const sb = this._options.isOperationStart(bb);
          var kb;
          sb && (null === (kb = this._activeOperations) || void 0 === kb || kb.set(sb, !0));
          const Wb = this._options.isOperationEnd(bb);
          var ab;
          Wb && (null === (ab = this._activeOperations) || void 0 === ab || ab.delete(Wb));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = nc(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let bb;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), bb = this.hasActiveOperations() ? nc() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: bb
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = yW(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = yW(this._drainTid, (() => {
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

    function yW(bb, cb, sb) {
      return bb && clearTimeout(bb), bb = setTimeout((() => {
        cb()
      }), sb)
    }
    let PW;
    const DW = new Set,
      EW = new Map;
    let iW, OW, GW, KW, ZW, zW, qW, dW, AW = !1;
    var wW = class extends cs {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = ss
      }
      initialize() {
        const bb = mW(),
          cb = TW(),
          sb = function() {
            function bb(bb, cb) {
              const sb = null !== cb && void 0 !== cb ? cb : location.href;
              sb !== OW && (iW.notify({
                type: "url-change",
                from: OW,
                to: sb,
                trigger: bb
              }), OW = sb)
            }
            if (iW || (iW = new Cs, OW = location.href), !AW)
              if ("navigation" in window && "NavigateEvent" in window) {
                qW = cb => {
                  try {
                    const sb = null === cb || void 0 === cb ? void 0 : cb.destination;
                    (null === sb || void 0 === sb ? void 0 : sb.sameDocument) && "string" === typeof sb.url && bb("navigate", sb.url)
                  } catch (sb) {}
                }, window.navigation.addEventListener("navigate", qW);
                const cb = window.NavigateEvent;
                cb && cb.prototype && "function" === typeof cb.prototype.intercept && (dW || (dW = cb.prototype.intercept), cb.prototype.intercept = function(cb) {
                  try {
                    const cb = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      sb = null === this || void 0 === this ? void 0 : this.destination;
                    cb && sb && !1 === sb.sameDocument && "string" === typeof sb.url && bb("navigate-intercept", sb.url)
                  } catch (sb) {}
                  return dW.call(this, cb)
                }), AW = !0
              } else GW || (GW = window.history.pushState), window.history.pushState = function() {
                for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
                const Wb = GW.apply(window.history, sb);
                return bb("pushState"), Wb
              }, KW || (KW = window.history.replaceState), window.history.replaceState = function() {
                for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
                const Wb = KW.apply(window.history, sb);
                return bb("replaceState"), Wb
              }, ZW = () => bb("popstate"), zW = () => bb("hashchange"), window.addEventListener("popstate", ZW), window.addEventListener("hashchange", zW), AW = !0;
            return iW
          }(),
          kb = (Wb = ["pointerdown", "keydown"], PW || (PW = new Cs), Wb.forEach((bb => {
            if (!DW.has(bb)) {
              const cb = () => {
                PW.notify({
                  type: "interaction",
                  name: bb
                })
              };
              window.addEventListener(bb, cb), DW.add(bb), EW.set(bb, cb)
            }
          })), PW);
        var Wb;
        const ab = new tW((new Cs).merge(bb, cb, sb), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: bb => function(bb) {
            return bb.type === Qs
          }(bb) ? bb.request.requestId : void 0,
          isOperationEnd: bb => function(bb) {
            return bb.type === es
          }(bb) ? bb.request.requestId : void 0
        });
        ab.filter((bb => "tracking-ended" === bb.message)).subscribe((bb => {
          var cb, sb;
          if ((null === (cb = bb.events) || void 0 === cb ? void 0 : cb.some((bb => "url-change" === bb.type))) && (null === (sb = bb.events) || void 0 === sb ? void 0 : sb.some((bb => "dom-mutation" === bb.type)))) {
            var kb;
            const cb = null === (kb = bb.events) || void 0 === kb ? void 0 : kb.find((bb => "url-change" === bb.type));
            lb.api.pushEvent("faro.navigation", {
              fromUrl: null === cb || void 0 === cb ? void 0 : cb.from,
              toUrl: null === cb || void 0 === cb ? void 0 : cb.to,
              sameDocument: String(!0),
              duration: bb.duration
            })
          }
        })), kb.subscribe((() => {
          ab.startTracking()
        }))
      }
    };

    function rW() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const cb = [new gW, new Os, new Ok, new ks, new Ks, new wW];
      return !1 !== bb.enablePerformanceInstrumentation && cb.unshift(new Fk), !1 !== bb.enableContentSecurityPolicyInstrumentation && cb.push(new BW), !1 !== bb.captureConsole && cb.push(new Es), cb
    }
    var oW = sb(6369);
    let SW, RW;

    function vW() {
      const bb = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return SW === bb && RW || (RW = new oW.UAParser(bb).getResult(), SW = bb), RW
    }
    const FW = () => {
        const {
          browser: bb,
          os: cb,
          ua: sb
        } = vW(), {
          name: kb,
          version: Wb
        } = bb, {
          name: ab,
          version: Tb
        } = cb, Ub = navigator.language, Ib = sb.includes("Mobi"), Hb = function() {
          if (!kb || !Wb) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== kb && void 0 !== kb ? kb : Gs,
            version: null !== Wb && void 0 !== Wb ? Wb : Gs,
            os: `${null!==ab&&void 0!==ab?ab:Gs} ${null!==Tb&&void 0!==Tb?Tb:Gs}`,
            userAgent: null !== sb && void 0 !== sb ? sb : Gs,
            language: null !== Ub && void 0 !== Ub ? Ub : Gs,
            mobile: Ib,
            brands: null !== Hb && void 0 !== Hb ? Hb : Gs,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      xW = () => {
        const {
          name: bb,
          version: cb
        } = vW().os;
        if (!bb && !cb) return {};
        const sb = {};
        return bb && (sb.name = bb), cb && (sb.version = cb), {
          os: sb
        }
      };

    function jW(bb) {
      var cb, sb, kb;
      return {
        id: null !== (cb = null === (sb = lb.config) || void 0 === sb || null === (sb = sb.sessionTracking) || void 0 === sb || null === (kb = sb.generateSessionId) || void 0 === kb ? void 0 : kb.call(sb)) && void 0 !== cb ? cb : ec(),
        attributes: bb
      }
    }
    const pW = () => ({
      sdk: {
        name: "faro-web",
        version: ss
      }
    });
    var ba = class extends bs {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ca = function(bb) {
      return bb.EXCEPTION = "exception", bb.LOG = "log", bb.MEASUREMENT = "measurement", bb.TRACE = "trace", bb.EVENT = "event", bb
    }({});
    const sa = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function ka(bb, cb) {
      var sb, kb;
      if (void 0 === cb) return bb;
      if (void 0 === bb) return {
        resourceSpans: cb
      };
      const Wb = null === (sb = bb.resourceSpans) || void 0 === sb ? void 0 : sb[0];
      if (void 0 === Wb) return bb;
      const ab = (null === Wb || void 0 === Wb ? void 0 : Wb.scopeSpans) || [],
        Tb = (null === cb || void 0 === cb || null === (kb = cb[0]) || void 0 === kb ? void 0 : kb.scopeSpans) || [];
      return jc(jc({}, bb), {}, {
        resourceSpans: [jc(jc({}, Wb), {}, {
          scopeSpans: [...ab, ...Tb]
        })]
      })
    }

    function Wa(bb) {
      let cb = {
        meta: {}
      };
      return void 0 !== bb[0] && (cb.meta = bb[0].meta), bb.forEach((bb => {
        switch (bb.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const sb = sa[bb.type],
              kb = cb[sb];
            cb = jc(jc({}, cb), {}, {
              [sb]: void 0 === kb ? [bb.payload] : [...kb, bb.payload]
            });
            break
          }
          case "trace":
            cb = jc(jc({}, cb), {}, {
              traces: ka(cb.traces, bb.payload.resourceSpans)
            })
        }
      })), cb
    }
    var aa = class extends ba {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-console", this.version = ss
      }
      send(bb) {
        var cb;
        return this.unpatchedConsole[null !== (cb = this.options.level) && void 0 !== cb ? cb : Ns.DEBUG]("New event", Wa([bb]))
      }
    };
    const Ta = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Ua = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Ia = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Ha = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      fa = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Ma = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Xa(bb) {
      let {
        weekday: cb,
        day: sb,
        month: kb,
        year: Wb,
        hour: ab,
        minute: Tb,
        second: Ub
      } = bb;
      if (Wb < 1900 || sb < 1 || ab > 23 || Tb > 59 || Ub > 60) return;
      const Ib = 60 === Ub,
        Hb = new Date(0);
      return Hb.setUTCFullYear(Wb, kb, sb), Hb.setUTCHours(ab, Tb, Ib ? 59 : Ub, 0), Hb.getUTCDay() === cb && Hb.getUTCDate() === sb && Hb.getUTCMonth() === kb && Hb.getUTCFullYear() === Wb && Hb.getUTCHours() === ab && Hb.getUTCMinutes() === Tb && Hb.getUTCSeconds() === (Ib ? 59 : Ub) ? Hb.getTime() + (Ib ? 1e3 : 0) : void 0
    }
    var na = class {
      constructor(bb) {
        this.options = bb, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var bb = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const cb = this.sequence++;
        let sb = !1;
        return {
          deliver: function() {
            var sb = Rk((function*(sb) {
              const kb = bb.options.getNow();
              let Wb, ab = 0;
              for (;;) {
                var Tb, Ub, Ib;
                const Hb = bb.options.retry.maxAttempts - ab,
                  fb = yield bb.runAttempt((() => sb(Hb, bb.unloading)), ab > 0);
                if (ab += fb.attemptsMade, "success" === fb.kind) return {
                  kind: "success",
                  attempts: ab,
                  elapsedTimeMs: bb.options.getNow() - kb
                };
                if (Wb = fb.failure, "terminal" === fb.kind || bb.unloading) return {
                  kind: "terminal",
                  attempts: ab,
                  elapsedTimeMs: bb.options.getNow() - kb,
                  failure: Wb
                };
                if (ab >= bb.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: ab,
                  elapsedTimeMs: bb.options.getNow() - kb,
                  failure: Wb,
                  reason: "retries-exhausted"
                };
                if (null != fb.retryAfterMs && fb.retryAfterMs > bb.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: ab,
                  elapsedTimeMs: bb.options.getNow() - kb,
                  failure: Wb,
                  reason: "retry-after-too-long"
                };
                const Mb = Math.min(null !== (Tb = fb.retryAfterMs) && void 0 !== Tb ? Tb : bb.options.retry.initialBackoffMs * Math.pow(bb.options.retry.backoffMultiplier, ab - 1), bb.options.retry.maxBackoffMs);
                if (null === (Ub = (Ib = bb.options).onRetry) || void 0 === Ub || Ub.call(Ib, Mb, ab + 1), yield bb.waitForTurn(cb, Mb)) {
                  const cb = bb.options.retry.maxAttempts - ab,
                    Wb = yield bb.runAttempt((() => sb(cb, !0)));
                  return ab += Wb.attemptsMade, {
                    kind: "success" === Wb.kind ? "success" : "terminal",
                    attempts: ab,
                    elapsedTimeMs: bb.options.getNow() - kb,
                    failure: "success" === Wb.kind ? void 0 : Wb.failure
                  }
                }
              }
            }));
            return function(bb) {
              return sb.apply(this, arguments)
            }
          }(),
          release: () => {
            sb || (sb = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const bb = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const cb of bb) cb.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((sb, kb) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const cb = () => {
                this.inProgress--, this.runNextAttempt()
              };
              bb().then((bb => {
                cb(), sb(bb)
              }), (bb => {
                cb(), kb(bb)
              }))
            },
            isRedelivery: cb
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const bb = this.options.getNow(),
            cb = this.attemptQueue.findIndex((cb => {
              let {
                isRedelivery: sb
              } = cb;
              return this.unloading || !sb || bb >= this.nextSendAt
            }));
          if (cb < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - bb)));
          const [sb] = this.attemptQueue.splice(cb, 1);
          sb.isRedelivery && !this.unloading && (this.nextSendAt = bb + 1), sb.run()
        }
      }
      waitForTurn(bb, cb) {
        const sb = Math.min(cb * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((cb => {
          this.waiting.push({
            sequence: bb,
            readyAt: this.options.getNow() + sb,
            resolve: cb
          }), this.waiting.sort(((bb, cb) => bb.readyAt === cb.readyAt ? bb.sequence - cb.sequence : bb.readyAt - cb.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const bb = this.waiting[0],
          cb = bb.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const cb = this.waiting.indexOf(bb);
          cb >= 0 && this.waiting.splice(cb, 1), bb.resolve(!1), this.scheduleNext()
        }), Math.max(0, cb - this.options.getNow()))
      }
    };

    function ma(bb, cb) {
      if (null == bb) return {};
      var sb, kb, Wb = function(bb, cb) {
        if (null == bb) return {};
        var sb = {};
        for (var kb in bb)
          if ({}.hasOwnProperty.call(bb, kb)) {
            if (cb.includes(kb)) continue;
            sb[kb] = bb[kb]
          } return sb
      }(bb, cb);
      if (Object.getOwnPropertySymbols) {
        var ab = Object.getOwnPropertySymbols(bb);
        for (kb = 0; kb < ab.length; kb++) sb = ab[kb], cb.includes(sb) || {}.propertyIsEnumerable.call(bb, sb) && (Wb[sb] = bb[sb])
      }
      return Wb
    }

    function la(bb) {
      const {
        size: cb,
        concurrency: sb
      } = bb, kb = [];
      let Wb = 0;
      const ab = () => {
        if (Wb < sb && kb.length) {
          const {
            producer: bb,
            resolve: cb,
            reject: sb
          } = kb.shift();
          Wb++, bb().then((bb => {
            Wb--, ab(), cb(bb)
          }), (bb => {
            Wb--, ab(), sb(bb)
          }))
        }
      };
      return {
        add: bb => {
          if (kb.length + Wb >= cb) throw new Error("Task buffer full");
          return new Promise(((cb, sb) => {
            kb.push({
              producer: bb,
              resolve: cb,
              reject: sb
            }), ab()
          }))
        }
      }
    }
    const Qa = ["headers"],
      ea = ["keepalive", "signal"],
      Ca = new Set([408, 425, 429, 500, 502, 503, 504]),
      Na = new Set([429, 503]);
    let Va = 0,
      La = 0;
    var ua = class extends Error {};
    var Ya = class extends ba {
      constructor(bb) {
        var cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb;
        super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = ss, this.pendingCustomSends = 0, this.getNow = null !== (cb = bb.getNow) && void 0 !== cb ? cb : Date.now, this.requestTimeoutMs = null !== (sb = bb.requestTimeoutMs) && void 0 !== sb ? sb : 1e4, this.compressionEnabled = null !== (kb = bb.requestCompression) && void 0 !== kb && kb && "undefined" !== typeof CompressionStream, bb.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new na({
          bufferSize: null !== (Wb = bb.bufferSize) && void 0 !== Wb ? Wb : 30,
          concurrency: null !== (ab = bb.concurrency) && void 0 !== ab ? ab : 5,
          retry: {
            maxAttempts: null !== (Tb = null === (Ub = bb.retry) || void 0 === Ub ? void 0 : Ub.maxAttempts) && void 0 !== Tb ? Tb : 3,
            initialBackoffMs: null !== (Ib = null !== (Hb = null === (fb = bb.retry) || void 0 === fb ? void 0 : fb.initialBackoffMs) && void 0 !== Hb ? Hb : bb.defaultRateLimitBackoffMs) && void 0 !== Ib ? Ib : 1e3,
            maxBackoffMs: null !== (Mb = null === (Xb = bb.retry) || void 0 === Xb ? void 0 : Xb.maxBackoffMs) && void 0 !== Mb ? Mb : 3e4,
            backoffMultiplier: null !== (nb = null === (mb = bb.retry) || void 0 === mb ? void 0 : mb.backoffMultiplier) && void 0 !== nb ? nb : 2
          },
          getNow: this.getNow,
          getRandom: null !== (lb = bb.getRandom) && void 0 !== lb ? lb : Math.random,
          onRetry: (bb, cb) => {
            this.logDebug(`Retrying failed request after ${bb}ms. Attempt ${cb}.`)
          }
        }), this.customPromiseBuffer = la({
          size: null !== (Qb = bb.bufferSize) && void 0 !== Qb ? Qb : 30,
          concurrency: null !== (eb = bb.concurrency) && void 0 !== eb ? eb : 5
        }), this.defaultPromiseBuffer = {
          add: bb => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(bb);
            const cb = this.deliveryQueue.reserve();
            if (!cb) throw new Error("Task buffer full");
            return this.runBufferedTask(cb, bb)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (bb => {
          bb.persisted && this.deliveryQueue.resume()
        })))
      }
      send(bb) {
        var cb = this;
        return Rk((function*() {
          const sb = cb.promiseBuffer;
          if (sb !== cb.defaultPromiseBuffer || sb.add !== cb.defaultBufferAdd) {
            cb.pendingCustomSends++;
            try {
              yield sb.add((() => cb.deliver(bb)))
            } catch (kb) {
              cb.logError("Permanent delivery failure", {
                error: kb,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              cb.pendingCustomSends--
            }
          } else yield cb.deliver(bb)
        }))()
      }
      runBufferedTask(bb, cb) {
        return Rk((function*() {
          let sb;
          try {
            return yield bb.deliver(Rk((function*() {
              return sb = yield cb(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), sb
          } finally {
            bb.release()
          }
        }))()
      }
      deliver(bb) {
        var cb = this;
        return Rk((function*() {
          const sb = cb.deliveryQueue.reserve();
          if (sb) try {
            const kb = yield cb.prepareRequest(bb), Wb = yield sb.deliver(((bb, sb) => cb.performAttempt(kb, bb, sb)));
            "terminal" === Wb.kind && cb.logError("retries-exhausted" === Wb.reason ? "Delivery retries exhausted" : "Permanent delivery failure", fc(fc({}, Wb.failure), {}, {
              reason: Wb.reason,
              attempts: Wb.attempts,
              elapsedTimeMs: Wb.elapsedTimeMs
            }))
          } catch (kb) {
            cb.logError("Permanent delivery failure", {
              error: kb,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            sb.release()
          } else cb.logError("Permanent delivery failure", {
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
        var cb = this;
        return Rk((function*() {
          var sb, kb;
          const Wb = Wa(bb),
            ab = null === (sb = Wb.meta.session) || void 0 === sb ? void 0 : sb.id,
            Tb = JSON.stringify(Wb),
            Ub = null !== (kb = cb.options.requestOptions) && void 0 !== kb ? kb : {},
            {
              headers: Ib = {}
            } = Ub,
            Hb = ma(Ub, Qa),
            {
              keepalive: fb,
              signal: Mb
            } = Hb,
            Xb = ma(Hb, ea),
            nb = {};
          for (const [bb, cb] of Object.entries(Ib)) nb[bb] = "function" === typeof cb ? yield cb(): cb;
          let mb = Tb,
            lb = function(bb) {
              return "undefined" === typeof TextEncoder ? bb.length : (new TextEncoder).encode(bb).byteLength
            }(Tb);
          const Qb = {};
          return cb.compressionEnabled && (mb = yield cb.compress(Tb), lb = mb.size, Qb["Content-Encoding"] = "gzip"), {
            bodySize: lb,
            sessionId: ab,
            requestInit: fc({
              method: "POST",
              headers: fc(fc(fc(fc(fc({
                "Content-Type": "application/json"
              }, Qb), nb), cb.options.apiKey ? {
                "x-api-key": cb.options.apiKey
              } : {}), ab ? {
                "x-faro-session-id": ab
              } : {}), {}, {
                "Idempotency-Key": ec(20)
              }),
              body: mb
            }, Xb)
          }
        }))()
      }
      performAttempt(bb, cb, sb) {
        var kb = this;
        return Rk((function*() {
          var Wb;
          const ab = null === (Wb = kb.options.requestOptions) || void 0 === Wb ? void 0 : Wb.signal;
          if (null === ab || void 0 === ab ? void 0 : ab.aborted) return {
            kind: "terminal",
            failure: {
              error: ab.reason
            },
            attemptsMade: 0
          };
          let Tb = 0;
          try {
            var Ub;
            const Wb = yield kb.fetchWithKeepaliveFallback(bb.requestInit, bb.bodySize, !!sb || (null === (Ub = kb.options.requestOptions) || void 0 === Ub ? void 0 : Ub.keepalive), cb, (() => Tb++));
            if (kb.handleResponse(Wb, bb.sessionId), Wb.status >= 200 && Wb.status < 300) return {
              kind: "success",
              attemptsMade: Tb
            };
            const ab = {
              status: Wb.status
            };
            return !Ca.has(Wb.status) || sb ? {
              kind: "terminal",
              failure: ab,
              attemptsMade: Tb
            } : {
              kind: "retry",
              failure: ab,
              attemptsMade: Tb,
              retryAfterMs: Na.has(Wb.status) ? kb.getRetryAfterDelayMs(Wb) : void 0
            }
          } catch (Ib) {
            const bb = {
              error: Ib
            };
            return (null === ab || void 0 === ab ? void 0 : ab.aborted) || !kb.isFetchNetworkError(Ib) || sb ? {
              kind: "terminal",
              failure: bb,
              attemptsMade: Tb
            } : {
              kind: "retry",
              failure: bb,
              attemptsMade: Tb
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(bb, cb, sb, kb, Wb) {
        var ab = this;
        return Rk((function*() {
          const Tb = ab.getNow(),
            Ub = ab.reserveKeepalive(cb, sb);
          try {
            return yield ab.fetchWithTimeout(fc(fc({}, bb), {}, {
              keepalive: Ub.keepalive
            }), ab.requestTimeoutMs, Wb)
          } catch (Hb) {
            var Ib;
            if (Ub.keepalive && kb > 1 && ab.isFetchNetworkError(Hb) && !(Hb instanceof ua) && !(null === (Ib = ab.options.requestOptions) || void 0 === Ib || null === (Ib = Ib.signal) || void 0 === Ib ? void 0 : Ib.aborted)) {
              ab.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const cb = ab.requestTimeoutMs - (ab.getNow() - Tb);
              return ab.fetchWithTimeout(fc(fc({}, bb), {}, {
                keepalive: !1
              }), cb, Wb)
            }
            throw Hb
          } finally {
            Ub.release()
          }
        }))()
      }
      fetchWithTimeout(bb, cb, sb) {
        var kb = this;
        return Rk((function*() {
          var Wb;
          const ab = null === (Wb = kb.options.requestOptions) || void 0 === Wb ? void 0 : Wb.signal;
          if (kb.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return sb(), fetch(kb.options.url, fc(fc({}, bb), {}, {
            signal: ab
          }));
          if (cb <= 0) throw new ua("Request timed out");
          const Tb = new AbortController,
            Ub = () => Tb.abort(null === ab || void 0 === ab ? void 0 : ab.reason);
          null === ab || void 0 === ab || ab.addEventListener("abort", Ub, {
            once: !0
          });
          let Ib = !1;
          const Hb = setTimeout((() => {
            Ib = !0, Tb.abort()
          }), cb);
          try {
            return sb(), yield fetch(kb.options.url, fc(fc({}, bb), {}, {
              signal: Tb.signal
            }))
          } catch (fb) {
            if (Ib && !(null === ab || void 0 === ab ? void 0 : ab.aborted)) throw new ua("Request timed out");
            throw fb
          } finally {
            clearTimeout(Hb), null === ab || void 0 === ab || ab.removeEventListener("abort", Ub)
          }
        }))()
      }
      getRetryAfterDelayMs(bb) {
        const cb = bb.headers.get("Retry-After");
        if (!cb) return;
        if (/^\d+$/.test(cb)) {
          const bb = 1e3 * Number(cb);
          return Number.isFinite(bb) ? bb : Number.POSITIVE_INFINITY
        }
        const sb = this.getNow(),
          kb = function(bb, cb) {
            const sb = Ta.exec(bb);
            if (sb) {
              const [, bb, cb, kb, Wb, ab, Tb, Ub] = sb;
              return Xa({
                weekday: Ha.indexOf(bb),
                day: Number(cb),
                month: Ma.indexOf(kb),
                year: Number(Wb),
                hour: Number(ab),
                minute: Number(Tb),
                second: Number(Ub)
              })
            }
            const kb = Ua.exec(bb);
            if (kb) {
              const [, bb, sb, Tb, Ub, Ib, Hb, fb] = kb, Mb = new Date(cb);
              if (Number.isNaN(Mb.getTime())) return;
              const Xb = Mb.getUTCFullYear();
              let nb = 100 * Math.floor(Xb / 100) + Number(Ub);
              nb < Xb && (nb += 100);
              const mb = Ma.indexOf(Tb),
                lb = {
                  month: mb,
                  day: Number(sb),
                  hour: Number(Ib),
                  minute: Number(Hb),
                  second: Number(fb),
                  millisecond: 0
                },
                Qb = {
                  month: Mb.getUTCMonth(),
                  day: Mb.getUTCDate(),
                  hour: Mb.getUTCHours(),
                  minute: Mb.getUTCMinutes(),
                  second: Mb.getUTCSeconds(),
                  millisecond: Mb.getUTCMilliseconds()
                };
              return (nb > Xb + 50 || nb === Xb + 50 && (ab = Qb, ((Wb = lb).month - ab.month || Wb.day - ab.day || Wb.hour - ab.hour || Wb.minute - ab.minute || Wb.second - ab.second || Wb.millisecond - ab.millisecond) > 0)) && (nb -= 100), Xa({
                weekday: fa.indexOf(bb),
                day: Number(sb),
                month: mb,
                year: nb,
                hour: Number(Ib),
                minute: Number(Hb),
                second: Number(fb)
              })
            }
            var Wb, ab;
            const Tb = Ia.exec(bb);
            if (!Tb) return;
            const [, Ub, Ib, Hb, fb, Mb, Xb, nb, mb] = Tb;
            return Xa({
              weekday: Ha.indexOf(Ub),
              day: Number(null !== Hb && void 0 !== Hb ? Hb : fb),
              month: Ma.indexOf(Ib),
              year: Number(mb),
              hour: Number(Mb),
              minute: Number(Xb),
              second: Number(nb)
            })
          }(cb, sb);
        return null == kb ? void 0 : Math.max(0, kb - sb)
      }
      reserveKeepalive(bb, cb) {
        if (!1 === cb || bb > 6e4 || Va + bb > 6e4 || La >= 9) return {
          keepalive: !1,
          release: wc
        };
        Va += bb, La++;
        let sb = !1;
        return {
          keepalive: !0,
          release: () => {
            sb || (sb = !0, Va -= bb, La--)
          }
        }
      }
      handleResponse(bb, cb) {
        202 === bb.status && "invalid" === bb.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), cb), bb.text().catch(wc)
      }
      isFetchNetworkError(bb) {
        return bb instanceof TypeError || bb instanceof ua || bb instanceof DOMException && "AbortError" === bb.name
      }
      compress(bb) {
        return Rk((function*() {
          const cb = [],
            sb = new ReadableStream({
              start(cb) {
                cb.enqueue((new TextEncoder).encode(bb)), cb.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: bb,
              value: kb
            } = yield sb.read();
            if (bb) return new Blob(cb);
            cb.push(kb)
          }
        }))()
      }
      extendFaroSession(bb, cb, sb) {
        var kb, Wb;
        const ab = bb.sessionTracking;
        if (!(null === ab || void 0 === ab ? void 0 : ab.enabled)) return void cb("Session expired.");
        const {
          fetchUserSession: Tb,
          storeUserSession: Ub
        } = Ac(ab), Ib = null === (kb = this.metas.value.session) || void 0 === kb ? void 0 : kb.id, Hb = null === (Wb = Tb()) || void 0 === Wb ? void 0 : Wb.sessionId;
        sb && sb === Ib && sb === Hb ? (yc({
          fetchUserSession: Tb,
          storeUserSession: Ub
        })({
          forceSessionExtend: !0
        }), cb("Session expired; created new session.")) : cb("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const ha = () => {
      const bb = window.k6;
      return {
        k6: fc({
          isK6Browser: !0
        }, (null === bb || void 0 === bb ? void 0 : bb.testRunId) && {
          testRunId: null === bb || void 0 === bb ? void 0 : bb.testRunId
        })
      }
    };
    let Ja, ga;

    function Ba() {
      let {
        generatePageId: bb,
        initialPageMeta: cb
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const sb = location.href;
        return tb(bb) && Ja !== sb && (Ja = sb, ga = bb(location)), {
          page: fc(fc({
            url: sb
          }, ga ? {
            id: ga
          } : {}), cb)
        }
      }
    }

    function ta() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pc,
        cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const sb = oc;
      return cb > 0 && (sb.error = cb >= 1 ? function() {
        for (var cb = arguments.length, kb = new Array(cb), Wb = 0; Wb < cb; Wb++) kb[Wb] = arguments[Wb];
        bb.error(`${sb.prefix}\n`, ...kb)
      } : wc, sb.warn = cb >= 2 ? function() {
        for (var cb = arguments.length, kb = new Array(cb), Wb = 0; Wb < cb; Wb++) kb[Wb] = arguments[Wb];
        bb.warn(`${sb.prefix}\n`, ...kb)
      } : wc, sb.info = cb >= 3 ? function() {
        for (var cb = arguments.length, kb = new Array(cb), Wb = 0; Wb < cb; Wb++) kb[Wb] = arguments[Wb];
        bb.info(`${sb.prefix}\n`, ...kb)
      } : wc, sb.debug = cb >= 4 ? function() {
        for (var cb = arguments.length, kb = new Array(cb), Wb = 0; Wb < cb; Wb++) kb[Wb] = arguments[Wb];
        bb.debug(`${sb.prefix}\n`, ...kb)
      } : wc), sb
    }
    const ya = "faro",
      Pa = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Da = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Ea(bb) {
      var cb, sb, Wb, ab, Tb, Ub;
      const Ib = [],
        fb = ta(bb.unpatchedConsole, bb.internalLoggerLevel);
      bb.transports ? ((bb.url || bb.apiKey) && fb.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Ib.push(...bb.transports)) : bb.url ? Ib.push(new Ya({
        url: bb.url,
        apiKey: bb.apiKey,
        requestCompression: bb.requestCompression
      })) : fb.error('either "url" or "transports" must be defined');
      const {
        dedupe: Mb = !0,
        eventDomain: Xb = kb,
        globalObjectKey: nb = ya,
        instrumentations: mb = rW(),
        internalLoggerLevel: lb = Sc,
        isolate: Qb = !1,
        logArgsSerializer: eb = Ds,
        metas: Cb = Oa(bb),
        paused: Nb = !1,
        preventGlobalExposure: Vb = !1,
        unpatchedConsole: Lb = pc,
        url: ub,
        experimental: Yb
      } = bb, hb = ma(bb, Da), Jb = null !== (cb = null === Yb || void 0 === Yb ? void 0 : Yb.trackNavigation) && void 0 !== cb && cb, gb = {
        dataAttributeName: bW(null !== (sb = null === (Wb = bb.userActionsInstrumentation) || void 0 === Wb ? void 0 : Wb.dataAttributeName) && void 0 !== sb ? sb : xk),
        excludeItem: null === (ab = bb.userActionsInstrumentation) || void 0 === ab ? void 0 : ab.excludeItem,
        initialActivityTimeout: cW(null === (Tb = bb.userActionsInstrumentation) || void 0 === Tb ? void 0 : Tb.initialActivityTimeout, 100, (bb => fb.warn(bb)))
      };
      return fc(fc({}, hb), {}, {
        batching: fc(fc({}, Pa), bb.batching),
        dedupe: Mb,
        globalObjectKey: nb,
        instrumentations: ia(mb, bb),
        internalLoggerLevel: lb,
        isolate: Qb,
        logArgsSerializer: eb,
        metas: Cb,
        parseStacktrace: ls,
        paused: Nb,
        preventGlobalExposure: Vb,
        transports: Ib,
        unpatchedConsole: Lb,
        eventDomain: Xb,
        ignoreUrls: [...null !== (Ub = bb.ignoreUrls) && void 0 !== Ub ? Ub : [], ...ub ? [ub] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: fc(fc(fc({}, Hb), bb.sessionTracking), Ga({
          trackGeolocation: bb.trackGeolocation,
          sessionTracking: bb.sessionTracking
        })),
        userActionsInstrumentation: gb,
        experimental: {
          trackNavigation: Jb
        }
      })
    }

    function ia(bb, cb) {
      let {
        experimental: sb
      } = cb;
      var kb;
      const Wb = null !== (kb = null === sb || void 0 === sb ? void 0 : sb.trackNavigation) && void 0 !== kb && kb;
      return bb.filter((bb => !("@grafana/faro-web-sdk:instrumentation-navigation" === bb.name && !Wb)))
    }

    function Oa(bb) {
      var cb, sb, kb;
      const {
        page: Wb,
        generatePageId: ab
      } = null !== (cb = null === bb || void 0 === bb ? void 0 : bb.pageTracking) && void 0 !== cb ? cb : {}, Tb = [FW, xW, Ba({
        generatePageId: ab,
        initialPageMeta: Wb
      }), ...null !== (sb = bb.metas) && void 0 !== sb ? sb : [], pW];
      return Bb(null === (kb = window) || void 0 === kb ? void 0 : kb.k6) ? [...Tb, ha] : Tb
    }

    function Ga(bb) {
      let {
        trackGeolocation: cb,
        sessionTracking: sb
      } = bb;
      var kb;
      const Wb = {};
      return Jb(cb) && (Wb.geoLocationTrackingEnabled = cb), Sb(Wb) ? {} : {
        session: fc(fc({}, null !== (kb = null === sb || void 0 === sb ? void 0 : sb.session) && void 0 !== kb ? kb : {}), {}, {
          overrides: Wb
        })
      }
    }
    const Ka = new WeakSet;

    function Za(bb) {
      return Ka.add(bb), bb
    }

    function za(bb, cb) {
      if (bb.capture) return Za(bb.capture(cb));
      const sb = Za(bb.value);
      return null === cb || void 0 === cb || cb(), sb
    }

    function qa(bb) {
      const cb = `__faroBundleId_${bb}`,
        sb = null === fb || void 0 === fb ? void 0 : fb[cb];
      if ("string" === typeof sb && "" !== sb) return sb;
      const kb = "undefined" !== typeof window ? window[cb] : void 0;
      return "string" === typeof kb && "" !== kb ? kb : void 0
    }

    function da(bb) {
      var cb, sb;
      const kb = bb.config.app.name,
        Wb = kb ? function(bb) {
          return null === fb || void 0 === fb ? void 0 : fb[`__faroGitHash_${bb}`]
        }(kb) : void 0,
        ab = {
          sdk: {
            version: ss,
            name: "faro"
          },
          app: jc({
            bundleId: kb && qa(kb)
          }, void 0 !== Wb ? {
            gitHash: Wb
          } : {})
        },
        Tb = null === (cb = bb.config.sessionTracking) || void 0 === cb ? void 0 : cb.session;
      Tb && bb.api.setSession(Tb), bb.config.app && (ab.app = jc(jc({}, bb.config.app), ab.app)), bb.config.user && (ab.user = bb.config.user), bb.config.view && (ab.view = bb.config.view), bb.metas.add(ab, ...null !== (sb = bb.config.metas) && void 0 !== sb ? sb : [])
    }
    var Aa = class {
      constructor(bb, cb) {
        var sb, kb;
        this.signalBuffer = [], this.itemLimit = null !== (sb = null === cb || void 0 === cb ? void 0 : cb.itemLimit) && void 0 !== sb ? sb : 50, this.sendTimeout = null !== (kb = null === cb || void 0 === cb ? void 0 : cb.sendTimeout) && void 0 !== kb ? kb : 250, this.paused = (null === cb || void 0 === cb ? void 0 : cb.paused) || !1, this.sendFn = bb, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const cb = new Map;
        return bb.forEach((bb => {
          const sb = JSON.stringify(bb.meta);
          let kb = cb.get(sb);
          kb = void 0 === kb ? [bb] : [...kb, bb], cb.set(sb, kb)
        })), Array.from(cb.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const bb = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(bb).forEach(this.sendFn)
        } catch (cb) {
          throw this.signalBuffer = [...bb, ...this.signalBuffer], this.trimBufferToLimit(), cb
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function wa(bb, cb, sb, kb) {
      var Wb;
      cb.debug("Initializing transports");
      const ab = [];
      let Tb = [];
      const Ub = bb => {
        let cb = bb;
        for (const kb of Tb) {
          const bb = cb.map(kb).filter(Boolean);
          if (0 === bb.length) return [];
          cb = ra(bb, sb)
        }
        return cb
      };
      let Ib;
      (null === (Wb = sb.batching) || void 0 === Wb ? void 0 : Wb.enabled) && (Ib = new Aa((bb => {
        const sb = Ub(bb);
        if (0 !== sb.length)
          for (const kb of ab) cb.debug(`Transporting item using ${kb.name}\n`, sb), kb.isBatched() && kb.send(sb)
      }), {
        sendTimeout: sb.batching.sendTimeout,
        itemLimit: sb.batching.itemLimit,
        paused: sb.paused
      }));
      return {
        add: function() {
          cb.debug("Adding transports");
          for (var Wb = arguments.length, Tb = new Array(Wb), Ub = 0; Ub < Wb; Ub++) Tb[Ub] = arguments[Ub];
          Tb.forEach((Wb => {
            cb.debug(`Adding "${Wb.name}" transport`), ab.some((bb => bb === Wb)) ? cb.warn(`Transport ${Wb.name} is already added`) : (Wb.unpatchedConsole = bb, Wb.internalLogger = cb, Wb.config = sb, Wb.metas = kb, ab.push(Wb))
          }))
        },
        addBeforeSendHooks: function() {
          cb.debug("Adding beforeSendHooks\n", Tb);
          for (var bb = arguments.length, sb = new Array(bb), kb = 0; kb < bb; kb++) sb[kb] = arguments[kb];
          sb.forEach((bb => {
            bb && Tb.push(bb)
          }))
        },
        getBeforeSendHooks: () => [...Tb],
        execute: bb => {
          var Wb;
          if (!sb.paused && qc(kb).shouldCapture()) {
            if (Mb = bb.meta, !Ka.has(Mb)) {
              var Tb, Hb, fb;
              const cb = null === (Tb = kb.value.session) || void 0 === Tb ? void 0 : Tb.id,
                Wb = za(kb);
              if (sb.paused) return;
              const ab = jc({}, bb.meta);
              (null === (Hb = ab.session) || void 0 === Hb ? void 0 : Hb.id) === cb && (null === (fb = Wb.session) || void 0 === fb ? void 0 : fb.id) !== cb && (void 0 === Wb.session ? delete ab.session : ab.session = Wb.session), bb = jc(jc({}, bb), {}, {
                meta: Za(ab)
              })
            }
            var Mb;
            (null === (Wb = sb.batching) || void 0 === Wb ? void 0 : Wb.enabled) && (null === Ib || void 0 === Ib || Ib.addItem(bb)), (bb => {
              var kb;
              if ((null === (kb = sb.batching) || void 0 === kb ? void 0 : kb.enabled) && ab.every((bb => bb.isBatched()))) return;
              const [Wb] = Ub([bb]);
              if (void 0 !== Wb)
                for (const Ub of ab) {
                  var Tb;
                  cb.debug(`Transporting item using ${Ub.name}\n`, Wb), Ub.isBatched() ? (null === (Tb = sb.batching) || void 0 === Tb ? void 0 : Tb.enabled) || Ub.send([Wb]) : Ub.send(Wb)
                }
            })(bb)
          }
        },
        isPaused: () => sb.paused,
        pause: () => {
          cb.debug("Pausing transports"), null === Ib || void 0 === Ib || Ib.pause(), sb.paused = !0
        },
        remove: function() {
          cb.debug("Removing transports");
          for (var bb = arguments.length, sb = new Array(bb), kb = 0; kb < bb; kb++) sb[kb] = arguments[kb];
          sb.forEach((bb => {
            cb.debug(`Removing "${bb.name}" transport`);
            const sb = ab.indexOf(bb); - 1 !== sb ? ab.splice(sb, 1) : cb.warn(`Transport "${bb.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var bb = arguments.length, sb = new Array(bb), kb = 0; kb < bb; kb++) sb[kb] = arguments[kb];
          cb.debug("Removing beforeSendHooks"), Tb = Tb.filter((bb => !sb.includes(bb)))
        },
        get transports() {
          return [...ab]
        },
        unpause: () => {
          cb.debug("Unpausing transports"), null === Ib || void 0 === Ib || Ib.start(), sb.paused = !1
        }
      }
    }

    function ra(bb, cb) {
      if (cb.preserveOriginalError)
        for (const sb of bb) "exception" === sb.type && delete sb.payload.originalError;
      return bb
    }
    let oa = pc;

    function Sa(bb) {
      var cb;
      return oa = null !== (cb = bb.unpatchedConsole) && void 0 !== cb ? cb : oa, oa
    }
    let Ra, va = oc;

    function Fa(bb, cb) {
      return va = ta(bb, cb.internalLoggerLevel), va
    }

    function xa(bb) {
      let {
        internalLogger: cb,
        config: sb,
        metas: kb,
        transports: Wb,
        tracesApi: ab,
        userActionsApi: Tb
      } = bb;
      var Ub;
      cb.debug("Initializing exceptions API");
      let Ib = null;
      Ra = null !== (Ub = sb.parseStacktrace) && void 0 !== Ub ? Ub : Ra;
      const Hb = bb => {
          cb.debug("Changing stacktrace parser"), Ra = null !== bb && void 0 !== bb ? bb : Ra
        },
        {
          ignoreErrors: fb = [],
          preserveOriginalError: Mb
        } = sb;
      return Hb(sb.parseStacktrace), {
        changeStacktraceParser: Hb,
        getStacktraceParser: () => Ra,
        pushError: function(bb) {
          let {
            skipDedupe: Ub,
            stackFrames: Hb,
            type: Xb,
            context: nb,
            spanContext: mb,
            timestampOverwriteMs: lb,
            originalError: Qb,
            fingerprint: eb,
            fatal: Cb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(bb, cb) {
              const {
                message: sb,
                name: kb,
                stack: Wb
              } = cb;
              return ab = bb, Tb = sb + " " + kb + " " + Wb, ab.some((bb => ub(bb) ? Tb.includes(bb) : !!Tb.match(bb)));
              var ab, Tb
            }(fb, null !== Qb && void 0 !== Qb ? Qb : bb)) try {
            var Nb, Vb;
            if (!qc(kb).shouldCapture()) return;
            const fb = Gc(jc(jc({}, function(bb) {
                let cb = bb.cause;
                Kb(cb) ? cb = bb.cause.toString() : null !== cb && (Bb(bb.cause) || yb(bb.cause)) ? cb = Oc(bb.cause) : null != cb && (cb = bb.cause.toString());
                return null == cb ? {} : {
                  cause: cb
                }
              }(null !== Qb && void 0 !== Qb ? Qb : bb)), null !== nb && void 0 !== nb ? nb : {})),
              ub = jc(jc(jc(jc({
                type: Xb || bb.name || "Error",
                value: bb.message,
                timestamp: lb ? lc(lb) : mc(),
                trace: mb ? {
                  trace_id: mb.traceId,
                  span_id: mb.spanId
                } : ab.getTraceContext()
              }, Sb(fb) ? {} : {
                context: fb
              }), Mb ? {
                originalError: Qb
              } : {}), eb ? {
                fingerprint: eb
              } : {}), void 0 !== Cb ? {
                fatal: Cb
              } : {});
            Hb = null !== (Nb = Hb) && void 0 !== Nb ? Nb : bb.stack ? null === Ra || void 0 === Ra ? void 0 : Ra(bb).frames : void 0, (null === Hb || void 0 === Hb ? void 0 : Hb.length) && (ub.stacktrace = {
              frames: Hb
            });
            const Yb = {
              type: ub.type,
              value: ub.value,
              stacktrace: ub.stacktrace,
              context: ub.context,
              fingerprint: ub.fingerprint,
              fatal: null !== (Vb = ub.fatal) && void 0 !== Vb && Vb
            };
            if (!Ub && sb.dedupe && !Lb(Ib) && Cc(Yb, Ib)) return void cb.debug("Skipping error push because it is the same as the last one\n", ub);
            const hb = Ib,
              Jb = za(kb);
            if (Ib !== hb && !Ub && sb.dedupe && Cc(Yb, Ib)) return;
            Ib = Yb;
            const gb = {
              meta: Jb,
              payload: ub,
              type: "exception"
            };
            cb.debug("Pushing exception\n", gb), JW(Tb.getActiveUserAction(), gb) || Wb.execute(gb)
          } catch (Yb) {
            cb.error("Error pushing event", Yb)
          }
        }
      }
    }

    function ja(bb, cb, sb, kb, Wb) {
      cb.debug("Initializing API");
      let ab = null;
      const Tb = function(bb) {
          let {
            transports: cb,
            internalLogger: sb,
            config: kb,
            pushEvent: Wb
          } = bb;
          var ab;
          const Tb = null === (ab = kb.userActionsInstrumentation) || void 0 === ab ? void 0 : ab.excludeItem;
          let Ub;
          const Ib = () => Ub;
          return {
            startUserAction: (bb, kb, ab) => {
              if (void 0 === Ib()) {
                const sb = new YW({
                  name: bb,
                  transports: cb,
                  attributes: kb,
                  trigger: (null === ab || void 0 === ab ? void 0 : ab.triggerName) || "faroApiCall",
                  importance: (null === ab || void 0 === ab ? void 0 : ab.importance) || LW.Normal,
                  trackUserActionsExcludeItem: Tb,
                  pushEvent: Wb
                });
                return sb.filter((bb => [3, 2].includes(bb))).first().subscribe((() => {
                  Ub = void 0
                })), hW.notify({
                  type: VW,
                  userAction: sb,
                  initialActivityTimeout: null === ab || void 0 === ab ? void 0 : ab.initialActivityTimeout
                }), Ub = sb, Ub
              }
              sb.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Ib
          }
        }({
          transports: Wb,
          config: sb,
          internalLogger: cb,
          pushEvent: (bb, sb, kb, Wb) => {
            ab ? ab(bb, sb, kb, Wb) : cb.warn("pushEventImpl is not initialized. Event dropped:", {
              name: bb,
              attributes: sb,
              domain: kb,
              options: Wb
            })
          }
        }),
        Ub = function(bb, cb, sb, kb, Wb) {
          let ab;
          return cb.debug("Initializing traces API"), {
            getOTEL: () => ab,
            getTraceContext: () => {
              const bb = null === ab || void 0 === ab ? void 0 : ab.trace.getSpanContext(ab.context.active());
              return bb ? {
                trace_id: bb.traceId,
                span_id: bb.spanId
              } : void 0
            },
            initOTEL: (bb, sb) => {
              cb.debug("Initializing OpenTelemetry"), ab = {
                trace: bb,
                context: sb
              }
            },
            isOTELInitialized: () => !!ab,
            pushTraces: bb => {
              try {
                if (!qc(kb).shouldCapture()) return;
                const sb = {
                  type: "trace",
                  payload: bb,
                  meta: za(kb)
                };
                cb.debug("Pushing trace\n", sb), Wb.execute(sb)
              } catch (sb) {
                cb.error("Error pushing trace\n", sb)
              }
            }
          }
        }(0, cb, 0, kb, Wb),
        Ib = {
          unpatchedConsole: bb,
          internalLogger: cb,
          userActionsApi: Tb,
          config: sb,
          metas: kb,
          transports: Wb,
          tracesApi: Ub
        },
        Hb = function(bb) {
          let {
            internalLogger: cb,
            config: sb,
            metas: kb,
            transports: Wb,
            tracesApi: ab,
            userActionsApi: Tb
          } = bb, Ub = null;
          return {
            pushEvent: function(bb, Ib, Hb) {
              let {
                skipDedupe: fb,
                spanContext: Mb,
                timestampOverwriteMs: Xb,
                customPayloadTransformer: nb = bb => bb
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!qc(kb).shouldCapture()) return;
                const mb = Gc(Ib),
                  lb = nb({
                    name: bb,
                    domain: null !== Hb && void 0 !== Hb ? Hb : sb.eventDomain,
                    attributes: Sb(mb) ? void 0 : mb,
                    timestamp: Xb ? lc(Xb) : mc(),
                    trace: Mb ? {
                      trace_id: Mb.traceId,
                      span_id: Mb.spanId
                    } : ab.getTraceContext()
                  }),
                  Qb = {
                    name: lb.name,
                    attributes: lb.attributes,
                    domain: lb.domain
                  };
                if (!fb && sb.dedupe && !Lb(Ub) && Cc(Qb, Ub)) return void cb.debug("Skipping event push because it is the same as the last one\n", lb);
                const eb = Ub,
                  Cb = za(kb);
                if (Ub !== eb && !fb && sb.dedupe && Cc(Qb, Ub)) return;
                Ub = Qb;
                const Nb = {
                  meta: Cb,
                  payload: lb,
                  type: "event"
                };
                cb.debug("Pushing event\n", Nb), JW(Tb.getActiveUserAction(), Nb) || Wb.execute(Nb)
              } catch (mb) {
                cb.error("Error pushing event", mb)
              }
            }
          }
        }(Ib);
      return ab = Hb.pushEvent, jc(jc(jc(jc(jc(jc(jc({}, Ub), xa(Ib)), function(bb) {
        let cb, sb, kb, Wb, {
          internalLogger: ab,
          metas: Tb
        } = bb;
        ab.debug("Initializing meta API");
        const Ub = bb => {
            sb && Tb.remove(sb), sb = {
              user: bb
            }, Tb.add(sb)
          },
          Ib = (bb, sb) => {
            var kb;
            const Wb = null === sb || void 0 === sb ? void 0 : sb.overrides,
              ab = Wb ? {
                overrides: jc(jc({}, null === cb || void 0 === cb || null === (kb = cb.session) || void 0 === kb ? void 0 : kb.overrides), Wb)
              } : {};
            cb && Tb.remove(cb), cb = {
              session: jc(jc({}, Sb(bb) ? void 0 : bb), ab)
            }, Tb.add(cb)
          },
          Hb = (bb, cb) => {
            qc(Tb).notifySessionUpdate({
              type: "replace",
              session: bb,
              overrides: null === cb || void 0 === cb ? void 0 : cb.overrides
            }), Ib(bb, cb)
          },
          fb = () => Tb.value.session,
          Mb = () => Tb.value.page;
        return {
          setUser: Ub,
          resetUser: Ub,
          setSession: Hb,
          resetSession: Hb,
          getSession: fb,
          setView: (bb, cb) => {
            var sb;
            if ((null === cb || void 0 === cb ? void 0 : cb.overrides) && (qc(Tb).notifySessionUpdate({
                type: "overrides",
                overrides: cb.overrides
              }), Ib(fb(), {
                overrides: cb.overrides
              })), (null === kb || void 0 === kb || null === (sb = kb.view) || void 0 === sb ? void 0 : sb.name) === (null === bb || void 0 === bb ? void 0 : bb.name)) return;
            const Wb = kb;
            kb = {
              view: bb
            }, Tb.add(kb), Wb && Tb.remove(Wb)
          },
          getView: () => Tb.value.view,
          setPage: bb => {
            var cb;
            const sb = ub(bb) ? jc(jc({}, null !== (cb = null === Wb || void 0 === Wb ? void 0 : Wb.page) && void 0 !== cb ? cb : Mb()), {}, {
              id: bb
            }) : bb;
            Wb && Tb.remove(Wb), Wb = {
              page: sb
            }, Tb.add(Wb)
          },
          getPage: Mb
        }
      }(Ib)), function(bb) {
        let {
          internalLogger: cb,
          config: sb,
          metas: kb,
          transports: Wb,
          tracesApi: ab,
          userActionsApi: Tb
        } = bb;
        var Ub;
        cb.debug("Initializing logs API");
        let Ib = null;
        const Hb = null !== (Ub = sb.logArgsSerializer) && void 0 !== Ub ? Ub : Ds;
        return {
          pushLog: function(bb) {
            let {
              context: Ub,
              level: fb,
              skipDedupe: Mb,
              spanContext: Xb,
              timestampOverwriteMs: nb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!qc(kb).shouldCapture()) return;
              const mb = Gc(Ub),
                lb = {
                  message: Hb(bb),
                  level: null !== fb && void 0 !== fb ? fb : "log",
                  context: Sb(mb) ? void 0 : mb,
                  timestamp: nb ? lc(nb) : mc(),
                  trace: Xb ? {
                    trace_id: Xb.traceId,
                    span_id: Xb.spanId
                  } : ab.getTraceContext()
                },
                Qb = {
                  message: lb.message,
                  level: lb.level,
                  context: lb.context
                };
              if (!Mb && sb.dedupe && !Lb(Ib) && Cc(Qb, Ib)) return void cb.debug("Skipping log push because it is the same as the last one\n", lb);
              const eb = Ib,
                Cb = za(kb);
              if (Ib !== eb && !Mb && sb.dedupe && Cc(Qb, Ib)) return;
              Ib = Qb;
              const Nb = {
                type: "log",
                payload: lb,
                meta: Cb
              };
              cb.debug("Pushing log\n", Nb), JW(Tb.getActiveUserAction(), Nb) || Wb.execute(Nb)
            } catch (mb) {
              cb.error("Error pushing log\n", mb)
            }
          }
        }
      }(Ib)), function(bb) {
        let {
          internalLogger: cb,
          config: sb,
          metas: kb,
          transports: Wb,
          tracesApi: ab,
          userActionsApi: Tb
        } = bb;
        cb.debug("Initializing measurements API");
        let Ub = null;
        return {
          pushMeasurement: function(bb) {
            let {
              skipDedupe: Ib,
              context: Hb,
              spanContext: fb,
              timestampOverwriteMs: Mb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!qc(kb).shouldCapture()) return;
              const Xb = Gc(Hb),
                nb = jc(jc({}, bb), {}, {
                  trace: fb ? {
                    trace_id: fb.traceId,
                    span_id: fb.spanId
                  } : ab.getTraceContext(),
                  timestamp: Mb ? lc(Mb) : mc(),
                  context: Sb(Xb) ? void 0 : Xb
                }),
                mb = {
                  type: nb.type,
                  values: nb.values,
                  context: nb.context
                };
              if (!Ib && sb.dedupe && !Lb(Ub) && Cc(mb, Ub)) return void cb.debug("Skipping measurement push because it is the same as the last one\n", nb);
              const lb = Ub,
                Qb = za(kb);
              if (Ub !== lb && !Ib && sb.dedupe && Cc(mb, Ub)) return;
              Ub = mb;
              const eb = {
                type: "measurement",
                payload: nb,
                meta: Qb
              };
              cb.debug("Pushing measurement\n", eb), JW(Tb.getActiveUserAction(), eb) || Wb.execute(eb)
            } catch (Xb) {
              cb.error("Error pushing measurement\n", Xb)
            }
          }
        }
      }(Ib)), Hb), Tb)
    }

    function pa(bb) {
      const cb = Sa(bb),
        sb = Fa(cb, bb);
      if (mb() && !bb.isolate) return void sb.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      sb.debug("Initializing");
      const kb = function(bb, cb) {
          let sb, kb = [],
            Wb = [],
            ab = [],
            Tb = 0,
            Ub = 0;
          const Ib = () => kb.reduce(((bb, cb) => Object.assign(bb, tb(cb) ? cb() : cb)), {}),
            Hb = () => {
              if (Wb.length) {
                const bb = Ib();
                Wb.forEach((cb => cb(bb)))
              }
            };
          return {
            add: function() {
              for (var bb = arguments.length, sb = new Array(bb), Wb = 0; Wb < bb; Wb++) sb[Wb] = arguments[Wb];
              cb.debug("Adding metas\n", sb), kb.push(...sb), Hb()
            },
            remove: function() {
              for (var bb = arguments.length, sb = new Array(bb), Wb = 0; Wb < bb; Wb++) sb[Wb] = arguments[Wb];
              cb.debug("Removing metas\n", sb), kb = kb.filter((bb => !sb.includes(bb))), Hb()
            },
            addListener: bb => {
              cb.debug("Adding metas listener\n", bb), Wb.push(bb)
            },
            removeListener: bb => {
              cb.debug("Removing metas listener\n", bb), Wb = Wb.filter((cb => cb !== bb))
            },
            capture: bb => {
              var cb;
              const kb = void 0 !== sb,
                Wb = null !== (cb = sb) && void 0 !== cb ? cb : ab;
              kb || (sb = Wb, Tb = 0, Ub = Wb.length);
              try {
                for (; Tb < Ub;) {
                  const bb = Wb[Tb++];
                  null === bb || void 0 === bb || bb()
                }
                const cb = Za(Ib());
                return null === bb || void 0 === bb || bb(), cb
              } finally {
                kb || (sb = void 0)
              }
            },
            addCaptureListener: bb => {
              ab.push(bb)
            },
            removeCaptureListener: bb => {
              ab = ab.filter((cb => cb !== bb))
            },
            get value() {
              return Ib()
            }
          }
        }(0, sb),
        Wb = wa(cb, sb, bb, kb),
        ab = ja(cb, sb, bb, kb, Wb),
        Tb = function(bb, cb, sb, kb, Wb, ab) {
          cb.debug("Initializing instrumentations");
          const Tb = [];
          return {
            add: function() {
              cb.debug("Adding instrumentations");
              for (var Ub = arguments.length, Ib = new Array(Ub), Hb = 0; Hb < Ub; Hb++) Ib[Hb] = arguments[Hb];
              Ib.forEach((Ub => {
                cb.debug(`Adding "${Ub.name}" instrumentation`), Tb.some((bb => bb.name === Ub.name)) ? cb.warn(`Instrumentation ${Ub.name} is already added`) : (Ub.unpatchedConsole = bb, Ub.internalLogger = cb, Ub.config = sb, Ub.metas = kb, Ub.transports = Wb, Ub.api = ab, Tb.push(Ub), Ub.initialize())
              }))
            },
            get instrumentations() {
              return [...Tb]
            },
            remove: function() {
              cb.debug("Removing instrumentations");
              for (var bb = arguments.length, sb = new Array(bb), kb = 0; kb < bb; kb++) sb[kb] = arguments[kb];
              sb.forEach((bb => {
                var sb, kb;
                cb.debug(`Removing "${bb.name}" instrumentation`);
                const Wb = Tb.reduce(((cb, sb, kb) => null === cb && sb.name === bb.name ? kb : null), null);
                null !== Wb ? (null === (sb = (kb = Tb[Wb]).destroy) || void 0 === sb || sb.call(kb), Tb.splice(Wb, 1)) : cb.warn(`Instrumentation "${bb.name}" is not added`)
              }))
            }
          }
        }(cb, sb, bb, kb, Wb, ab),
        Ub = Qb(cb, sb, bb, kb, Wb, ab, Tb);
      return da(Ub),
        function(bb) {
          bb.transports.add(...bb.config.transports), bb.transports.addBeforeSendHooks(bb.config.beforeSend)
        }(Ub),
        function(bb) {
          bb.instrumentations.add(...bb.config.instrumentations)
        }(Ub), Ub
    }

    function bT(bb) {
      const cb = Ea(bb);
      if (cb) return pa(cb)
    }
  },
  6369: function(bb, cb, sb) {
    var kb;
    ! function(Wb, ab) {
      var Tb = "function",
        Ub = "undefined",
        Ib = "object",
        Hb = "string",
        fb = "major",
        Mb = "model",
        Xb = "name",
        nb = "type",
        mb = "vendor",
        lb = "version",
        Qb = "architecture",
        eb = "console",
        Cb = "mobile",
        Nb = "tablet",
        Vb = "smarttv",
        Lb = "wearable",
        ub = "embedded",
        Yb = "Amazon",
        hb = "Apple",
        Jb = "ASUS",
        gb = "BlackBerry",
        Bb = "Browser",
        tb = "Chrome",
        yb = "Firefox",
        Pb = "Google",
        Db = "Honor",
        Eb = "Huawei",
        ib = "LG",
        Ob = "Microsoft",
        Gb = "Motorola",
        Kb = "Nvidia",
        Zb = "OnePlus",
        zb = "Opera",
        qb = "OPPO",
        db = "Samsung",
        Ab = "Sharp",
        wb = "Sony",
        rb = "Xiaomi",
        ob = "Zebra",
        Sb = "Facebook",
        Rb = "Chromium OS",
        vb = "Mac OS",
        Fb = " Browser",
        xb = function(bb) {
          for (var cb = {}, sb = 0; sb < bb.length; sb++) cb[bb[sb].toUpperCase()] = bb[sb];
          return cb
        },
        jb = function(bb, cb) {
          return typeof bb === Hb && -1 !== pb(cb).indexOf(pb(bb))
        },
        pb = function(bb) {
          return bb.toLowerCase()
        },
        bc = function(bb, cb) {
          if (typeof bb === Hb) return bb = bb.replace(/^\s\s*/, ""), typeof cb === Ub ? bb : bb.substring(0, 500)
        },
        cc = function(bb, cb) {
          for (var sb, kb, Wb, Ub, Hb, fb, Mb = 0; Mb < cb.length && !Hb;) {
            var Xb = cb[Mb],
              nb = cb[Mb + 1];
            for (sb = kb = 0; sb < Xb.length && !Hb && Xb[sb];)
              if (Hb = Xb[sb++].exec(bb))
                for (Wb = 0; Wb < nb.length; Wb++) fb = Hb[++kb], typeof(Ub = nb[Wb]) === Ib && Ub.length > 0 ? 2 === Ub.length ? typeof Ub[1] == Tb ? this[Ub[0]] = Ub[1].call(this, fb) : this[Ub[0]] = Ub[1] : 3 === Ub.length ? typeof Ub[1] !== Tb || Ub[1].exec && Ub[1].test ? this[Ub[0]] = fb ? fb.replace(Ub[1], Ub[2]) : ab : this[Ub[0]] = fb ? Ub[1].call(this, fb, Ub[2]) : ab : 4 === Ub.length && (this[Ub[0]] = fb ? Ub[3].call(this, fb.replace(Ub[1], Ub[2])) : ab) : this[Ub] = fb || ab;
            Mb += 2
          }
        },
        sc = function(bb, cb) {
          for (var sb in cb)
            if (typeof cb[sb] === Ib && cb[sb].length > 0) {
              for (var kb = 0; kb < cb[sb].length; kb++)
                if (jb(cb[sb][kb], bb)) return "?" === sb ? ab : sb
            } else if (jb(cb[sb], bb)) return "?" === sb ? ab : sb;
          return cb.hasOwnProperty("*") ? cb["*"] : bb
        },
        kc = {
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
        Wc = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [lb, [Xb, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [lb, [Xb, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Xb, lb],
            [/opios[\/ ]+([\w\.]+)/i],
            [lb, [Xb, zb + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [lb, [Xb, zb + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [lb, [Xb, zb]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [lb, [Xb, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [lb, [Xb, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Xb, lb],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [lb, [Xb, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [lb, [Xb, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [lb, [Xb, "UC" + Bb]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [lb, [Xb, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [lb, [Xb, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [lb, [Xb, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [lb, [Xb, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [lb, [Xb, "Smart Lenovo " + Bb]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Xb, /(.+)/, "$1 Secure " + Bb], lb
            ],
            [/\bfocus\/([\w\.]+)/i],
            [lb, [Xb, yb + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [lb, [Xb, zb + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [lb, [Xb, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [lb, [Xb, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [lb, [Xb, zb + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [lb, [Xb, "MIUI" + Fb]],
            [/fxios\/([\w\.-]+)/i],
            [lb, [Xb, yb]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [lb, [Xb, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Xb, /(.+)/, "$1Browser"], lb
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Xb, /(.+)/, "$1" + Fb], lb
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [lb, [Xb, db + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [lb, [Xb, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Xb, "Sogou Mobile"], lb
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Xb, lb],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Xb],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [lb, Xb],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Xb, Sb], lb
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Xb, lb],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [lb, [Xb, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [lb, [Xb, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [lb, [Xb, tb + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Xb, tb + " WebView"], lb
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [lb, [Xb, "Android " + Bb]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Xb, lb],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [lb, [Xb, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [lb, Xb],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Xb, [lb, sc, {
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
            [Xb, lb],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Xb, "Netscape"], lb
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Xb, lb],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [lb, [Xb, yb + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Xb, [lb, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Xb, [lb, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Qb, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Qb, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Qb, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Qb, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Qb, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Qb, /ower/, "", pb]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Qb, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Qb, pb]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Mb, [mb, db],
              [nb, Nb]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Mb, [mb, db],
              [nb, Cb]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Mb, [mb, hb],
              [nb, Cb]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Mb, [mb, hb],
              [nb, Nb]
            ],
            [/(macintosh);/i],
            [Mb, [mb, hb]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Mb, [mb, Ab],
              [nb, Cb]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Mb, [mb, Db],
              [nb, Nb]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Mb, [mb, Db],
              [nb, Cb]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Mb, [mb, Eb],
              [nb, Nb]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Mb, [mb, Eb],
              [nb, Cb]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Mb, /_/g, " "],
              [mb, rb],
              [nb, Nb]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Mb, /_/g, " "],
              [mb, rb],
              [nb, Cb]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Mb, [mb, qb],
              [nb, Cb]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Mb, [mb, sc, {
                OnePlus: ["304", "403", "203"],
                "*": qb
              }],
              [nb, Nb]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Mb, [mb, "Vivo"],
              [nb, Cb]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Mb, [mb, "Realme"],
              [nb, Cb]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Mb, [mb, Gb],
              [nb, Cb]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Mb, [mb, Gb],
              [nb, Nb]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Mb, [mb, ib],
              [nb, Nb]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Mb, [mb, ib],
              [nb, Cb]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Mb, [mb, "Lenovo"],
              [nb, Nb]
            ],
            [/(nokia) (t[12][01])/i],
            [mb, Mb, [nb, Nb]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Mb, /_/g, " "],
              [nb, Cb],
              [mb, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Mb, [mb, Pb],
              [nb, Nb]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Mb, [mb, Pb],
              [nb, Cb]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Mb, [mb, wb],
              [nb, Cb]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Mb, "Xperia Tablet"],
              [mb, wb],
              [nb, Nb]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Mb, [mb, Zb],
              [nb, Cb]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Mb, [mb, Yb],
              [nb, Nb]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Mb, /(.+)/g, "Fire Phone $1"],
              [mb, Yb],
              [nb, Cb]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Mb, mb, [nb, Nb]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Mb, [mb, gb],
              [nb, Cb]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Mb, [mb, Jb],
              [nb, Nb]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Mb, [mb, Jb],
              [nb, Cb]
            ],
            [/(nexus 9)/i],
            [Mb, [mb, "HTC"],
              [nb, Nb]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [mb, [Mb, /_/g, " "],
              [nb, Cb]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Mb, [mb, "TCL"],
              [nb, Nb]
            ],
            [/(itel) ((\w+))/i],
            [
              [mb, pb], Mb, [nb, sc, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Mb, [mb, "Acer"],
              [nb, Nb]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Mb, [mb, "Meizu"],
              [nb, Cb]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Mb, [mb, "Ulefone"],
              [nb, Cb]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Mb, [mb, "Energizer"],
              [nb, Cb]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Mb, [mb, "Cat"],
              [nb, Cb]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Mb, [mb, "Smartfren"],
              [nb, Cb]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Mb, [mb, "Nothing"],
              [nb, Cb]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Mb, [mb, "Archos"],
              [nb, Nb]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Mb, [mb, "Archos"],
              [nb, Cb]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [mb, Mb, [nb, Nb]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [mb, Mb, [nb, Cb]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [mb, Mb, [nb, Nb]],
            [/(surface duo)/i],
            [Mb, [mb, Ob],
              [nb, Nb]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Mb, [mb, "Fairphone"],
              [nb, Cb]
            ],
            [/(u304aa)/i],
            [Mb, [mb, "AT&T"],
              [nb, Cb]
            ],
            [/\bsie-(\w*)/i],
            [Mb, [mb, "Siemens"],
              [nb, Cb]
            ],
            [/\b(rct\w+) b/i],
            [Mb, [mb, "RCA"],
              [nb, Nb]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Mb, [mb, "Dell"],
              [nb, Nb]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Mb, [mb, "Verizon"],
              [nb, Nb]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Mb, [mb, "Barnes & Noble"],
              [nb, Nb]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Mb, [mb, "NuVision"],
              [nb, Nb]
            ],
            [/\b(k88) b/i],
            [Mb, [mb, "ZTE"],
              [nb, Nb]
            ],
            [/\b(nx\d{3}j) b/i],
            [Mb, [mb, "ZTE"],
              [nb, Cb]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Mb, [mb, "Swiss"],
              [nb, Cb]
            ],
            [/\b(zur\d{3}) b/i],
            [Mb, [mb, "Swiss"],
              [nb, Nb]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Mb, [mb, "Zeki"],
              [nb, Nb]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [mb, "Dragon Touch"], Mb, [nb, Nb]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Mb, [mb, "Insignia"],
              [nb, Nb]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Mb, [mb, "NextBook"],
              [nb, Nb]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [mb, "Voice"], Mb, [nb, Cb]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [mb, "LvTel"], Mb, [nb, Cb]
            ],
            [/\b(ph-1) /i],
            [Mb, [mb, "Essential"],
              [nb, Cb]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Mb, [mb, "Envizen"],
              [nb, Nb]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Mb, [mb, "MachSpeed"],
              [nb, Nb]
            ],
            [/\btu_(1491) b/i],
            [Mb, [mb, "Rotor"],
              [nb, Nb]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Mb, [mb, Kb],
              [nb, Nb]
            ],
            [/(sprint) (\w+)/i],
            [mb, Mb, [nb, Cb]],
            [/(kin\.[onetw]{3})/i],
            [
              [Mb, /\./g, " "],
              [mb, Ob],
              [nb, Cb]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Mb, [mb, ob],
              [nb, Nb]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Mb, [mb, ob],
              [nb, Cb]
            ],
            [/smart-tv.+(samsung)/i],
            [mb, [nb, Vb]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Mb, /^/, "SmartTV"],
              [mb, db],
              [nb, Vb]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [mb, ib],
              [nb, Vb]
            ],
            [/(apple) ?tv/i],
            [mb, [Mb, hb + " TV"],
              [nb, Vb]
            ],
            [/crkey/i],
            [
              [Mb, tb + "cast"],
              [mb, Pb],
              [nb, Vb]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Mb, [mb, Yb],
              [nb, Vb]
            ],
            [/(shield \w+ tv)/i],
            [Mb, [mb, Kb],
              [nb, Vb]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Mb, [mb, Ab],
              [nb, Vb]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Mb, [mb, wb],
              [nb, Vb]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Mb, [mb, rb],
              [nb, Vb]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [mb, Mb, [nb, Vb]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [mb, bc],
              [Mb, bc],
              [nb, Vb]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Mb, [nb, Vb]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [nb, Vb]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [mb, Mb, [nb, eb]],
            [/droid.+; (shield)( bui|\))/i],
            [Mb, [mb, Kb],
              [nb, eb]
            ],
            [/(playstation \w+)/i],
            [Mb, [mb, wb],
              [nb, eb]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Mb, [mb, Ob],
              [nb, eb]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Mb, [mb, db],
              [nb, Lb]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [mb, Mb, [nb, Lb]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Mb, [mb, qb],
              [nb, Lb]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Mb, [mb, hb],
              [nb, Lb]
            ],
            [/(opwwe\d{3})/i],
            [Mb, [mb, Zb],
              [nb, Lb]
            ],
            [/(moto 360)/i],
            [Mb, [mb, Gb],
              [nb, Lb]
            ],
            [/(smartwatch 3)/i],
            [Mb, [mb, wb],
              [nb, Lb]
            ],
            [/(g watch r)/i],
            [Mb, [mb, ib],
              [nb, Lb]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Mb, [mb, ob],
              [nb, Lb]
            ],
            [/droid.+; (glass) \d/i],
            [Mb, [mb, Pb],
              [nb, Lb]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [mb, Mb, [nb, Lb]],
            [/; (quest( \d| pro)?)/i],
            [Mb, [mb, Sb],
              [nb, Lb]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [mb, [nb, ub]],
            [/(aeobc)\b/i],
            [Mb, [mb, Yb],
              [nb, ub]
            ],
            [/(homepod).+mac os/i],
            [Mb, [mb, hb],
              [nb, ub]
            ],
            [/windows iot/i],
            [
              [nb, ub]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Mb, [nb, Cb]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Mb, [nb, Nb]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [nb, Nb]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [nb, Cb]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Mb, [mb, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [lb, [Xb, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Xb, lb],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [lb, [Xb, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Xb, lb],
            [/ladybird\//i],
            [
              [Xb, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [lb, Xb]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Xb, lb],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Xb, [lb, sc, kc]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [lb, sc, kc],
              [Xb, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [lb, /_/g, "."],
              [Xb, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Xb, vb],
              [lb, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [lb, Xb],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Xb, /(.+)/, "$1 Touch"], lb
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Xb, lb],
            [/\(bb(10);/i],
            [lb, [Xb, gb]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [lb, [Xb, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [lb, [Xb, yb + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [lb, [Xb, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [lb, [Xb, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [lb, [Xb, tb + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Xb, Rb], lb
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Xb, lb],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Xb, "Solaris"], lb
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Xb, lb]
          ]
        },
        ac = function(bb, cb) {
          if (typeof bb === Ib && (cb = bb, bb = ab), !(this instanceof ac)) return new ac(bb, cb).getResult();
          var sb = typeof Wb !== Ub && Wb.navigator ? Wb.navigator : ab,
            kb = bb || (sb && sb.userAgent ? sb.userAgent : ""),
            eb = sb && sb.userAgentData ? sb.userAgentData : ab,
            Vb = cb ? function(bb, cb) {
              var sb = {};
              for (var kb in bb) cb[kb] && cb[kb].length % 2 === 0 ? sb[kb] = cb[kb].concat(bb[kb]) : sb[kb] = bb[kb];
              return sb
            }(Wc, cb) : Wc,
            Lb = sb && sb.userAgent == kb;
          return this.getBrowser = function() {
            var bb, cb = {};
            return cb[Xb] = ab, cb[lb] = ab, cc.call(cb, kb, Vb.browser), cb[fb] = typeof(bb = cb[lb]) === Hb ? bb.replace(/[^\d\.]/g, "").split(".")[0] : ab, Lb && sb && sb.brave && typeof sb.brave.isBrave == Tb && (cb[Xb] = "Brave"), cb
          }, this.getCPU = function() {
            var bb = {};
            return bb[Qb] = ab, cc.call(bb, kb, Vb.cpu), bb
          }, this.getDevice = function() {
            var bb = {};
            return bb[mb] = ab, bb[Mb] = ab, bb[nb] = ab, cc.call(bb, kb, Vb.device), Lb && !bb[nb] && eb && eb.mobile && (bb[nb] = Cb), Lb && "Macintosh" == bb[Mb] && sb && typeof sb.standalone !== Ub && sb.maxTouchPoints && sb.maxTouchPoints > 2 && (bb[Mb] = "iPad", bb[nb] = Nb), bb
          }, this.Sm = function() {
            var bb = {};
            return bb[Xb] = ab, bb[lb] = ab, cc.call(bb, kb, Vb.engine), bb
          }, this.getOS = function() {
            var bb = {};
            return bb[Xb] = ab, bb[lb] = ab, cc.call(bb, kb, Vb.os), Lb && !bb[Xb] && eb && eb.platform && "Unknown" != eb.platform && (bb[Xb] = eb.platform.replace(/chrome os/i, Rb).replace(/macos/i, vb)), bb
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Sm(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return kb
          }, this.setUA = function(bb) {
            return kb = typeof bb === Hb && bb.length > 500 ? bc(bb, 500) : bb, this
          }, this.setUA(kb), this
        };
      ac.VERSION = "1.0.41", ac.BROWSER = xb([Xb, lb, fb]), ac.CPU = xb([Qb]), ac.DEVICE = xb([Mb, mb, nb, eb, Cb, Vb, Nb, Lb, ub]), ac.ENGINE = ac.OS = xb([Xb, lb]), typeof cb !== Ub ? (bb.exports && (cb = bb.exports = ac), cb.UAParser = ac) : sb.amdO ? (kb = function() {
        return ac
      }.call(cb, sb, cb, bb)) === ab || (bb.exports = kb) : typeof Wb !== Ub && (Wb.UAParser = ac);
      var Tc = typeof Wb !== Ub && (Wb.jQuery || Wb.Zepto);
      if (Tc && !Tc.ua) {
        var Uc = new ac;
        Tc.ua = Uc.getResult(), Tc.ua.get = function() {
          return Uc.getUA()
        }, Tc.ua.set = function(bb) {
          Uc.setUA(bb);
          var cb = Uc.getResult();
          for (var sb in cb) Tc.ua[sb] = cb[sb]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);