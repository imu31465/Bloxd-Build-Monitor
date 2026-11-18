export const id = 29;
export const ids = [29];
export const modules = {
  7213: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BaseExtension: () => yU,
      BaseInstrumentation: () => bU,
      BaseTransport: () => Ah,
      CSPInstrumentation: () => Gh,
      ConsoleInstrumentation: () => XW,
      ConsoleTransport: () => Uf,
      EVENT_CLICK: () => Cb,
      EVENT_NAVIGATION: () => Tb,
      EVENT_ROUTE_CHANGE: () => Rb,
      EVENT_SESSION_EXTEND: () => Gb,
      EVENT_SESSION_RESUME: () => gW,
      EVENT_SESSION_START: () => Jb,
      EVENT_VIEW_CHANGED: () => Vb,
      ErrorsInstrumentation: () => uW,
      FetchTransport: () => Vf,
      InternalLoggerLevel: () => tW,
      LogLevel: () => CW,
      MAX_SESSION_PERSISTENCE_TIME: () => Py,
      NavigationInstrumentation: () => Qh,
      Observable: () => mU,
      PerformanceInstrumentation: () => kh,
      PersistentSessionsManager: () => aW,
      SESSION_EXPIRATION_TIME: () => fy,
      SESSION_INACTIVITY_TIME: () => Zy,
      STORAGE_KEY: () => hy,
      SessionInstrumentation: () => UW,
      TransportItemType: () => dh,
      UserActionInstrumentation: () => gf,
      UserActionState: () => sh,
      VERSION: () => WW,
      ViewInstrumentation: () => HW,
      VolatileSessionsManager: () => Fb,
      WebVitalsInstrumentation: () => nU,
      allLogLevels: () => VW,
      browserMeta: () => Nh,
      buildStackFrame: () => hW,
      captureMetas: () => aZ,
      createInternalLogger: () => Rf,
      createPromiseBuffer: () => qZ,
      createSession: () => Ih,
      deepEqual: () => mW,
      defaultEventDomain: () => Uy,
      defaultExceptionType: () => OW,
      defaultGlobalObjectKey: () => vZ,
      defaultInternalLoggerLevel: () => kW,
      defaultLogLevel: () => TW,
      faro: () => Sy,
      genShortID: () => lb,
      getCurrentTimestamp: () => sb,
      getDataFromSafariExtensions: () => eW,
      getIgnoreUrls: () => Ny,
      getInternalFaroFromGlobalObject: () => ey,
      getStackFramesFromError: () => sW,
      getTransportBody: () => Wf,
      getUrlFromResource: () => Iy,
      getWebInstrumentations: () => jf,
      globalObject: () => By,
      initializeFaro: () => Af,
      internalGlobalObjectKey: () => Ky,
      isArray: () => My,
      isBoolean: () => Oy,
      isDomError: () => py,
      isDomException: () => Ly,
      isElement: () => jb,
      isElementDefined: () => Qy,
      gh: () => kb,
      isError: () => ab,
      isErrorDefined: () => Hy,
      isErrorEvent: () => Fy,
      isEvent: () => rb,
      isEventDefined: () => uy,
      isFunction: () => ib,
      isInstanceOf: () => Cy,
      isInt: () => Gy,
      isInternalFaroOnGlobalObject: () => sy,
      isMap: () => tb,
      isMapDefined: () => Dy,
      isNull: () => Vy,
      isNumber: () => gb,
      isObject: () => vb,
      isPrimitive: () => ny,
      isRegExp: () => Yy,
      isString: () => Jy,
      isSymbol: () => Ry,
      isSyntheticEvent: () => wy,
      isThenable: () => Xy,
      isToString: () => mb,
      isTypeof: () => ly,
      isUndefined: () => Ty,
      makeCoreConfig: () => Yf,
      noop: () => Db,
      osMeta: () => zf,
      parseStacktrace: () => SW,
      sdkMeta: () => xf,
      setInternalFaroOnGlobalObject: () => qb,
      transportItemTypeToBodyKey: () => yZ,
      unknownString: () => rU,
      userActionDataAttribute: () => NU,
      userActionTimeoutDataAttribute: () => zh
    });
    const Uy = "browser",
      hy = "com.grafana.faro.session",
      fy = 144e5,
      Zy = 9e5,
      cb = 1e3,
      Py = Zy,
      oy = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Py
      };
    const By = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Wy.g ? Wy.g : "undefined" !== typeof self ? self : void 0;
    const Ky = "_faroInternal";

    function ey() {
      return By[Ky]
    }

    function qb(yb) {
      yb.config.isolate ? yb.internalLogger.debug("Skipping registering internal Faro instance on global object") : (yb.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(By, Ky, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yb
      }))
    }

    function sy() {
      return Ky in By
    }
    let Sy = {
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

    function Ey(yb, bb, Wy, Uy, hy, fy, Zy) {
      return bb.debug("Initializing Faro"), Sy = {
          api: fy,
          config: Wy,
          instrumentations: Zy,
          internalLogger: bb,
          metas: Uy,
          pause: hy.pause,
          transports: hy,
          unpatchedConsole: yb,
          unpause: hy.unpause
        }, qb(Sy),
        function(yb) {
          if (yb.config.preventGlobalExposure) yb.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (yb.internalLogger.debug(`Registering public faro reference in the global scope using "${yb.config.globalObjectKey}" key`), yb.config.globalObjectKey in By) return void yb.internalLogger.warn(`Skipping global registration due to key "${yb.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(By, yb.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: yb
            })
          }
        }(Sy), Sy
    }

    function ly(yb, bb) {
      return typeof yb === bb
    }

    function mb(yb, bb) {
      return Object.prototype.toString.call(yb) === `[object ${bb}]`
    }

    function Cy(yb, bb) {
      try {
        return yb instanceof bb
      } catch (Wy) {
        return !1
      }
    }
    const Ty = yb => ly(yb, "undefined"),
      Vy = yb => ly(yb, "null"),
      Jy = yb => ly(yb, "string"),
      gb = yb => ly(yb, "number") && !isNaN(yb) || ly(yb, "bigint"),
      Gy = yb => gb(yb) && Number.isInteger(yb),
      Oy = yb => ly(yb, "boolean"),
      Ry = yb => ly(yb, "symbol"),
      vb = yb => !Vy(yb) && ly(yb, "object"),
      ib = yb => ly(yb, "function"),
      My = yb => mb(yb, "Array"),
      Yy = yb => mb(yb, "RegExp"),
      Xy = yb => ib(null === yb || void 0 === yb ? void 0 : yb.then),
      ny = yb => !vb(yb) && !ib(yb),
      uy = "undefined" !== typeof Event,
      rb = yb => uy && Cy(yb, Event),
      Hy = "undefined" !== typeof Error,
      ab = yb => Hy && Cy(yb, Error),
      Fy = yb => mb(yb, "ErrorEvent"),
      py = yb => mb(yb, "DOMError"),
      Ly = yb => mb(yb, "DOMException"),
      Qy = "undefined" !== typeof Element,
      jb = yb => Qy && Cy(yb, Element),
      Dy = "undefined" !== typeof Map,
      tb = yb => Dy && Cy(yb, Map),
      wy = yb => vb(yb) && "nativeEvent" in yb && "preventDefault" in yb && "stopPropagation" in yb;

    function kb(yb) {
      return null == yb || (My(yb) || Jy(yb) ? 0 === yb.length : !!vb(yb) && 0 === Object.keys(yb).length)
    }

    function Ny() {
      return Sy.transports.transports.flatMap((yb => yb.getIgnoreUrls()))
    }

    function zb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Ny().some((bb => yb && null != yb.match(bb)))
    }

    function Iy(yb) {
      return Jy(yb) ? yb : yb instanceof URL ? yb.href : !kb(yb) && ib(null === yb || void 0 === yb ? void 0 : yb.toString) ? yb.toString() : void 0
    }
    const xb = "sessionStorage",
      Ay = "localStorage";

    function dy(yb) {
      try {
        let bb;
        bb = window[yb];
        const Wy = "__faro_storage_test__";
        return bb.setItem(Wy, Wy), bb.removeItem(Wy), !0
      } catch (Wy) {
        var bb;
        return null === (bb = Sy.internalLogger) || void 0 === bb || bb.info(`Web storage of type ${yb} is not available. Reason: ${Wy}`), !1
      }
    }

    function yW(yb, bb) {
      return fb(bb) ? window[bb].getItem(yb) : null
    }

    function bW(yb, bb, Wy) {
      if (fb(Wy)) try {
        window[Wy].setItem(yb, bb)
      } catch (Uy) {}
    }

    function Wb(yb, bb) {
      fb(bb) && window[bb].removeItem(yb)
    }
    const Ub = dy(Ay),
      hb = dy(xb);

    function fb(yb) {
      return yb === Ay ? Ub : yb === xb && hb
    }

    function Zb(yb) {
      return Zb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(yb) {
        return typeof yb
      } : function(yb) {
        return yb && "function" == typeof Symbol && yb.constructor === Symbol && yb !== Symbol.prototype ? "symbol" : typeof yb
      }, Zb(yb)
    }

    function cW(yb) {
      var bb = function(yb, bb) {
        if ("object" != Zb(yb) || !yb) return yb;
        var Wy = yb[Symbol.toPrimitive];
        if (void 0 !== Wy) {
          var Uy = Wy.call(yb, bb || "default");
          if ("object" != Zb(Uy)) return Uy;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === bb ? String : Number)(yb)
      }(yb, "string");
      return "symbol" == Zb(bb) ? bb : bb + ""
    }

    function Pb(yb, bb, Wy) {
      return (bb = cW(bb)) in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }

    function ob(yb, bb) {
      var Wy = Object.keys(yb);
      if (Object.getOwnPropertySymbols) {
        var Uy = Object.getOwnPropertySymbols(yb);
        bb && (Uy = Uy.filter((function(bb) {
          return Object.getOwnPropertyDescriptor(yb, bb).enumerable
        }))), Wy.push.apply(Wy, Uy)
      }
      return Wy
    }

    function Bb(yb) {
      for (var bb = 1; bb < arguments.length; bb++) {
        var Wy = null != arguments[bb] ? arguments[bb] : {};
        bb % 2 ? ob(Object(Wy), !0).forEach((function(bb) {
          Pb(yb, bb, Wy[bb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(yb, Object.getOwnPropertyDescriptors(Wy)) : ob(Object(Wy)).forEach((function(bb) {
          Object.defineProperty(yb, bb, Object.getOwnPropertyDescriptor(Wy, bb))
        }))
      }
      return yb
    }

    function Kb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sy;
      var bb, Wy, Uy;
      const hy = yb.config.sessionTracking,
        fy = null !== (bb = null !== (Wy = null === hy || void 0 === hy || null === (Uy = hy.sampler) || void 0 === Uy ? void 0 : Uy.call(hy, {
          metas: yb.metas.value
        })) && void 0 !== Wy ? Wy : null === hy || void 0 === hy ? void 0 : hy.samplingRate) && void 0 !== bb ? bb : 1,
        Zy = "number" === typeof fy ? function(yb) {
          return Math.min(1, Math.max(0, yb))
        }(fy) : 0;
      if (!(Zy > 0)) return !1;
      if (1 === Zy) return !0;
      try {
        const yb = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === yb || void 0 === yb ? void 0 : yb.getRandomValues)) {
          const bb = new Uint32Array(1);
          return yb.getRandomValues(bb), bb[0] / Math.pow(2, 32) < Zy
        }
      } catch (cb) {}
      return Math.random() < Zy
    }

    function eb() {
      return Date.now()
    }

    function qW() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function sb() {
      return (new Date).toISOString()
    }

    function Sb(yb) {
      return new Date(yb).toISOString()
    }
    const Eb = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function lb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const bb = new Uint32Array(yb),
        Wy = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Wy || void 0 === Wy ? void 0 : Wy.getRandomValues) Wy.getRandomValues(bb);
      else
        for (let hy = 0; hy < yb; hy++) bb[hy] = Math.floor(4294967296 * Math.random());
      let Uy = "";
      for (let hy = 0; hy < yb; hy++) Uy += Eb[bb[hy] % 59];
      return Uy
    }

    function mW(yb, bb) {
      if (yb === bb) return !0;
      if (ly(yb, "number") && isNaN(yb)) return ly(bb, "number") && isNaN(bb);
      const Wy = My(yb),
        Uy = My(bb);
      if (Wy !== Uy) return !1;
      if (Wy && Uy) {
        const Wy = yb.length;
        if (Wy !== bb.length) return !1;
        for (let Uy = Wy; 0 !== Uy--;)
          if (!mW(yb[Uy], bb[Uy])) return !1;
        return !0
      }
      const hy = vb(yb),
        fy = vb(bb);
      if (hy !== fy) return !1;
      if (yb && bb && hy && fy) {
        const Wy = Object.keys(yb),
          Uy = Object.keys(bb);
        if (Wy.length !== Uy.length) return !1;
        for (let yb of Wy)
          if (!Uy.includes(yb)) return !1;
        for (let hy of Wy)
          if (!mW(yb[hy], bb[hy])) return !1;
        return !0
      }
      return !1
    }
    const Cb = "click",
      Tb = "navigation",
      Vb = "view_changed",
      Jb = "session_start",
      gW = "session_resume",
      Gb = "session_extend",
      Ob = "service_name_override",
      Rb = "route_change";

    function vW() {
      let {
        sessionId: yb,
        started: bb,
        lastActivity: Wy,
        isSampled: Uy = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, hy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sy;
      var fy;
      const Zy = eb(),
        cb = null === (fy = hy.config) || void 0 === fy || null === (fy = fy.sessionTracking) || void 0 === fy ? void 0 : fy.generateSessionId;
      return null == yb && (yb = "function" === typeof cb ? cb() : lb()), {
        sessionId: yb,
        lastActivity: null !== Wy && void 0 !== Wy ? Wy : Zy,
        started: null !== bb && void 0 !== bb ? bb : Zy,
        isSampled: Uy
      }
    }

    function iW(yb) {
      if (null == yb) return !1;
      const bb = eb();
      return bb - yb.started < 144e5 && bb - yb.lastActivity < Zy
    }

    function Mb(yb) {
      let {
        fetchUserSession: bb,
        storeUserSession: Wy,
        adoptSession: Uy,
        updateInterval: hy = 0
      } = yb, cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sy, Py = 0;
      return function() {
        let {
          forceSessionExtend: yb = !1,
          refreshActivity: oy = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var By, Ky;
        if (!bb || !Wy) return;
        const ey = eb();
        if (!yb && ey < Py && Py - ey <= hy) return;
        const qb = cb.config.sessionTracking,
          sy = null === qb || void 0 === qb ? void 0 : qb.persistent;
        if (sy && !Ub || !sy && !hb) return;
        const Sy = bb();
        if (Py = Math.min(ey + hy, (null !== (By = null === Sy || void 0 === Sy ? void 0 : Sy.started) && void 0 !== By ? By : ey) + fy, (null !== (Ky = null === Sy || void 0 === Sy ? void 0 : Sy.lastActivity) && void 0 !== Ky ? Ky : ey) + Zy), !1 === yb && iW(Sy)) {
          var Ey;
          oy && Wy(Bb(Bb({}, Sy), {}, {
            lastActivity: ey
          }));
          const yb = null === (Ey = cb.metas.value.session) || void 0 === Ey ? void 0 : Ey.id;
          null != Uy && null != Sy.sessionMeta && Sy.sessionId !== yb && Uy(Sy.sessionMeta)
        } else {
          var ly, mb, Cy;
          let yb = Xb(vW({
            isSampled: Kb(cb)
          }, cb), Sy, cb);
          Py = ey + hy, Wy(yb), null === (ly = cb.api) || void 0 === ly || ly.setSession(yb.sessionMeta), null === qb || void 0 === qb || null === (mb = qb.onSessionChange) || void 0 === mb || mb.call(qb, null !== (Cy = null === Sy || void 0 === Sy ? void 0 : Sy.sessionMeta) && void 0 !== Cy ? Cy : null, yb.sessionMeta)
        }
      }
    }

    function Yb(yb) {
      let bb, {
          fetchUserSession: Wy,
          storeUserSession: Uy,
          updateInterval: hy = 0
        } = yb,
        fy = 0;
      return yb => {
        const Zy = eb();
        if (yb === bb && Zy < fy && fy - Zy <= hy) return;
        bb = yb, fy = Zy + hy;
        const cb = Wy();
        (null === cb || void 0 === cb ? void 0 : cb.sessionId) === yb && iW(cb) && Uy(Bb(Bb({}, cb), {}, {
          lastActivity: Zy
        }))
      }
    }

    function Xb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sy;
      var Uy, hy, fy, Zy, cb, Py;
      const oy = Bb(Bb({}, yb), {}, {
          sessionMeta: {
            id: yb.sessionId,
            attributes: ub(Bb(Bb(Bb({}, null === (Uy = Wy.config.sessionTracking) || void 0 === Uy || null === (Uy = Uy.session) || void 0 === Uy ? void 0 : Uy.attributes), null !== (hy = null === (fy = Wy.metas.value.session) || void 0 === fy ? void 0 : fy.attributes) && void 0 !== hy ? hy : {}), {}, {
              isSampled: yb.isSampled.toString()
            }))
          }
        }),
        By = null !== (Zy = null === (cb = Wy.metas.value.session) || void 0 === cb ? void 0 : cb.overrides) && void 0 !== Zy ? Zy : null === bb || void 0 === bb || null === (Py = bb.sessionMeta) || void 0 === Py ? void 0 : Py.overrides;
      kb(By) || (oy.sessionMeta.overrides = By);
      const Ky = null === bb || void 0 === bb ? void 0 : bb.sessionId;
      return null != Ky && (oy.sessionMeta.attributes.previousSession = Ky), oy
    }

    function nb(yb) {
      let {
        fetchUserSession: bb,
        storeUserSession: Wy
      } = yb, Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sy, hy = !1;
      return function(yb) {
        if (hy) return;
        const fy = yb.session,
          Zy = bb();
        let cb = null === fy || void 0 === fy ? void 0 : fy.id;
        const Py = null === fy || void 0 === fy ? void 0 : fy.attributes,
          oy = null === fy || void 0 === fy ? void 0 : fy.overrides,
          By = null === Zy || void 0 === Zy ? void 0 : Zy.sessionMeta,
          Ky = null === By || void 0 === By ? void 0 : By.overrides,
          ey = !!oy && !mW(oy, Ky),
          qb = !!Py && !mW(Py, null === By || void 0 === By ? void 0 : By.attributes);
        if (fy && cb !== (null === Zy || void 0 === Zy ? void 0 : Zy.sessionId) || qb || ey) {
          var sy, Sy;
          const yb = null != Zy && cb === Zy.sessionId,
            bb = Xb(yb ? Zy : vW({
              sessionId: cb,
              isSampled: Kb(Uy)
            }, Uy), Zy, Uy),
            fy = null === Zy || void 0 === Zy || null === (sy = Zy.sessionMeta) || void 0 === sy || null === (sy = sy.attributes) || void 0 === sy ? void 0 : sy.previousSession;
          yb && null != fy && fy !== bb.sessionId && (bb.sessionMeta.attributes.previousSession = fy), (null === (Sy = bb.sessionMeta.attributes) || void 0 === Sy ? void 0 : Sy.previousSession) === bb.sessionId && delete bb.sessionMeta.attributes.previousSession, Wy(bb),
            function(yb, bb) {
              let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var hy, fy, Zy;
              if (!bb) return;
              const cb = Wy.serviceName,
                Py = null !== (hy = null !== (fy = Uy.serviceName) && void 0 !== fy ? fy : null === (Zy = yb.metas.value.app) || void 0 === Zy ? void 0 : Zy.name) && void 0 !== hy ? hy : "";
              cb && cb !== Py && yb.api.pushEvent(Ob, {
                serviceName: cb,
                previousServiceName: Py
              })
            }(Uy, ey, oy, Ky), hy = !0;
          try {
            Uy.api.setSession(bb.sessionMeta)
          } finally {
            hy = !1
          }
        }
      }
    }

    function ub(yb) {
      const bb = {};
      for (const Wy of Object.keys(yb)) {
        const Uy = yb[Wy];
        void 0 !== Uy && (bb[Wy] = Uy)
      }
      return bb
    }

    function rW() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== yb && void 0 !== yb ? yb : {}, function() {
        const yb = new WeakSet;
        return function(bb, Wy) {
          if (vb(Wy) && null !== Wy) {
            if (yb.has(Wy)) return null;
            yb.add(Wy)
          }
          return Wy
        }
      }())
    }

    function Hb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const bb = {};
      for (const [Wy, Uy] of Object.entries(yb)) bb[Wy] = vb(Uy) && null !== Uy ? rW(Uy) : String(Uy);
      return bb
    }
    var aW = class yb {
      constructor() {
        var bb = this;
        let Wy = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sy;
        this.context = Wy, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = yb => {
          this.adopting = !0;
          try {
            var bb;
            null === (bb = this.context.api) || void 0 === bb || bb.setSession(yb)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: yb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return bb.updateUserSession({
            refreshActivity: yb
          })
        }, this.recordActivity = Yb({
          fetchUserSession: yb.fetchUserSession,
          storeUserSession: yb.storeUserSession,
          updateInterval: cb
        }), this.updateUserSession = Mb({
          fetchUserSession: yb.fetchUserSession,
          storeUserSession: yb.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: cb
        }, Wy), this.init()
      }
      static removeUserSession() {
        Wb(hy, yb.storageTypeLocal)
      }
      static storeUserSession(bb) {
        bW(hy, rW(bb), yb.storageTypeLocal)
      }
      static fetchUserSession() {
        const bb = yW(hy, yb.storageTypeLocal);
        return bb ? JSON.parse(bb) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var yb;
            this.updateSession({
              refreshActivity: !1
            });
            const bb = null === (yb = this.context.api) || void 0 === yb || null === (yb = yb.getSession()) || void 0 === yb ? void 0 : yb.id;
            bb && this.recordActivity(bb)
          }
        })), this.context.metas.addListener(nb({
          fetchUserSession: yb.fetchUserSession,
          storeUserSession: yb.storeUserSession
        }, this.context))
      }
    };
    aW.storageTypeLocal = Ay;
    var Fb = class yb {
      constructor() {
        var bb = this;
        let Wy = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sy;
        this.context = Wy, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: yb = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return bb.updateUserSession({
            refreshActivity: yb
          })
        }, this.recordActivity = Yb({
          fetchUserSession: yb.fetchUserSession,
          storeUserSession: yb.storeUserSession,
          updateInterval: cb
        }), this.updateUserSession = Mb({
          fetchUserSession: yb.fetchUserSession,
          storeUserSession: yb.storeUserSession,
          updateInterval: cb
        }, Wy), this.init()
      }
      static removeUserSession() {
        Wb(hy, yb.storageTypeSession)
      }
      static storeUserSession(bb) {
        bW(hy, rW(bb), yb.storageTypeSession)
      }
      static fetchUserSession() {
        const bb = yW(hy, yb.storageTypeSession);
        return bb ? JSON.parse(bb) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var yb;
            this.updateSession({
              refreshActivity: !1
            });
            const bb = null === (yb = this.context.api) || void 0 === yb || null === (yb = yb.getSession()) || void 0 === yb ? void 0 : yb.id;
            bb && this.recordActivity(bb)
          }
        })), this.context.metas.addListener(nb({
          fetchUserSession: yb.fetchUserSession,
          storeUserSession: yb.storeUserSession
        }, this.context))
      }
    };
    Fb.storageTypeSession = xb;
    const pb = new WeakMap;

    function Lb(yb) {
      let bb = pb.get(yb);
      if (!bb) {
        let Wy = [],
          Uy = [];
        bb = {
          addSessionUpdateListener: yb => {
            Wy.push(yb)
          },
          removeSessionUpdateListener: yb => {
            Wy = Wy.filter((bb => bb !== yb))
          },
          notifySessionUpdate: yb => {
            Wy.forEach((bb => bb(yb)))
          },
          shouldCapture: () => Uy.every((yb => yb())),
          addCaptureFilter: yb => {
            Uy.push(yb)
          },
          removeCaptureFilter: yb => {
            Uy = Uy.filter((bb => bb !== yb))
          }
        }, pb.set(yb, bb)
      }
      return bb
    }
    var Qb = class {
      constructor(yb, bb, Wy) {
        this.metas = yb, this.transports = bb, this.onActivate = Wy, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = yb => {
          var bb, Wy, Uy;
          const hy = this.pending;
          var fy, Zy;
          if ("overrides" === yb.type) return void(this.pending = {
            reset: null !== (fy = null === hy || void 0 === hy ? void 0 : hy.reset) && void 0 !== fy && fy,
            inheritOverrides: null === (Zy = null === hy || void 0 === hy ? void 0 : hy.inheritOverrides) || void 0 === Zy || Zy,
            session: Bb(Bb({}, null === hy || void 0 === hy ? void 0 : hy.session), {}, {
              overrides: Bb(Bb({}, null === hy || void 0 === hy ? void 0 : hy.session.overrides), yb.overrides)
            })
          });
          const cb = yb.session,
            Py = kb(cb) || null != cb && "id" in cb && !cb.id,
            oy = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.overrides) && void 0 !== bb ? bb : null === hy || void 0 === hy ? void 0 : hy.session.overrides;
          this.pending = {
            reset: Py || !(null === cb || void 0 === cb ? void 0 : cb.id) && null !== (Wy = null === hy || void 0 === hy ? void 0 : hy.reset) && void 0 !== Wy && Wy,
            inheritOverrides: !(!yb.overrides && void 0 !== (null === cb || void 0 === cb ? void 0 : cb.overrides)) && (null === (Uy = null === hy || void 0 === hy ? void 0 : hy.inheritOverrides) || void 0 === Uy || Uy),
            session: {
              id: null === cb || void 0 === cb ? void 0 : cb.id,
              attributes: (null === cb || void 0 === cb ? void 0 : cb.attributes) && Bb({}, cb.attributes),
              overrides: yb.overrides ? Bb(Bb({}, null === hy || void 0 === hy ? void 0 : hy.session.overrides), yb.overrides) : oy && Bb({}, oy)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var yb, bb;
        this.waiting = !0, Lb(this.metas).addSessionUpdateListener(this.recordUpdate), Lb(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (yb = (bb = this.metas).addCaptureListener) || void 0 === yb || yb.call(bb, this.activate), this.activate()
      }
      destroy() {
        var yb, bb;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Lb(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (yb = (bb = this.metas).removeCaptureListener) || void 0 === yb || yb.call(bb, this.activate), Lb(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function jW(yb) {
      return (null === yb || void 0 === yb ? void 0 : yb.persistent) ? aW : Fb
    }

    function Db() {}
    let tW = function(yb) {
      return yb[yb.OFF = 0] = "OFF", yb[yb.ERROR = 1] = "ERROR", yb[yb.WARN = 2] = "WARN", yb[yb.INFO = 3] = "INFO", yb[yb.VERBOSE = 4] = "VERBOSE", yb
    }({});
    const wb = {
        debug: Db,
        error: Db,
        info: Db,
        prefix: "Faro",
        warn: Db
      },
      kW = 1;

    function Nb(yb) {
      return Nb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(yb) {
        return typeof yb
      } : function(yb) {
        return yb && "function" == typeof Symbol && yb.constructor === Symbol && yb !== Symbol.prototype ? "symbol" : typeof yb
      }, Nb(yb)
    }

    function zW(yb) {
      var bb = function(yb, bb) {
        if ("object" != Nb(yb) || !yb) return yb;
        var Wy = yb[Symbol.toPrimitive];
        if (void 0 !== Wy) {
          var Uy = Wy.call(yb, bb || "default");
          if ("object" != Nb(Uy)) return Uy;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === bb ? String : Number)(yb)
      }(yb, "string");
      return "symbol" == Nb(bb) ? bb : bb + ""
    }

    function Ib(yb, bb, Wy) {
      return (bb = zW(bb)) in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }

    function xW(yb, bb) {
      var Wy = Object.keys(yb);
      if (Object.getOwnPropertySymbols) {
        var Uy = Object.getOwnPropertySymbols(yb);
        bb && (Uy = Uy.filter((function(bb) {
          return Object.getOwnPropertyDescriptor(yb, bb).enumerable
        }))), Wy.push.apply(Wy, Uy)
      }
      return Wy
    }

    function Ab(yb) {
      for (var bb = 1; bb < arguments.length; bb++) {
        var Wy = null != arguments[bb] ? arguments[bb] : {};
        bb % 2 ? xW(Object(Wy), !0).forEach((function(bb) {
          Ib(yb, bb, Wy[bb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(yb, Object.getOwnPropertyDescriptors(Wy)) : xW(Object(Wy)).forEach((function(bb) {
          Object.defineProperty(yb, bb, Object.getOwnPropertyDescriptor(Wy, bb))
        }))
      }
      return yb
    }
    const db = Ab({}, console);
    var yU = class {
        constructor() {
          this.unpatchedConsole = db, this.internalLogger = wb, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
          this.internalLogger.debug(`${this.name}\n`, ...bb)
        }
        logInfo() {
          for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
          this.internalLogger.info(`${this.name}\n`, ...bb)
        }
        logWarn() {
          for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
          this.internalLogger.warn(`${this.name}\n`, ...bb)
        }
        logError() {
          for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
          this.internalLogger.error(`${this.name}\n`, ...bb)
        }
      },
      bU = class extends yU {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const WW = "2.12.1";
    var UW = class extends bU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = WW, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(yb) {
        var bb;
        const Wy = yb.session;
        if (Wy && Wy.id !== (null === (bb = this.notifiedSession) || void 0 === bb ? void 0 : bb.id)) {
          var Uy;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Wy);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Uy = Wy.attributes) || void 0 === Uy ? void 0 : Uy.previousSession)) return this.api.pushEvent(Gb, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Wy);
          this.notifiedSession = Wy, this.api.pushEvent(Jb, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(yb, bb, Wy) {
        const Uy = null === Wy || void 0 === Wy ? void 0 : Wy.session;
        let hy, fy, Zy = yb.fetchUserSession();
        if (bb.persistent && bb.maxSessionPersistenceTime && Zy) {
          const yb = eb();
          Zy.lastActivity < yb - bb.maxSessionPersistenceTime && (aW.removeUserSession(), Zy = null)
        }
        const cb = iW(Zy);
        if ((null === Wy || void 0 === Wy ? void 0 : Wy.reset) || !cb || (null === Uy || void 0 === Uy ? void 0 : Uy.id) && Uy.id !== (null === Zy || void 0 === Zy ? void 0 : Zy.sessionId)) {
          var Py, oy, By, Ky, ey, qb;
          fy = vW({
            sessionId: (null === Wy || void 0 === Wy ? void 0 : Wy.reset) ? void 0 : null !== (Py = null === Uy || void 0 === Uy ? void 0 : Uy.id) && void 0 !== Py ? Py : null === (oy = bb.session) || void 0 === oy ? void 0 : oy.id,
            isSampled: Kb(this)
          }, this);
          const yb = fy.sessionId,
            sy = Wy && cb ? null === Zy || void 0 === Zy || null === (By = Zy.sessionMeta) || void 0 === By ? void 0 : By.overrides : void 0,
            Sy = sy ? Bb(Bb({}, null === (Ky = bb.session) || void 0 === Ky ? void 0 : Ky.overrides), sy) : null === (ey = bb.session) || void 0 === ey ? void 0 : ey.overrides;
          fy.sessionMeta = Bb({
            id: yb,
            attributes: Bb({
              isSampled: fy.isSampled.toString()
            }, null === (qb = bb.session) || void 0 === qb ? void 0 : qb.attributes)
          }, Sy ? {
            overrides: Sy
          } : {}), hy = Jb
        } else {
          var sy, Sy;
          const yb = null === Zy || void 0 === Zy ? void 0 : Zy.sessionId;
          fy = vW({
            sessionId: yb,
            isSampled: Zy.isSampled || !1,
            started: null === Zy || void 0 === Zy ? void 0 : Zy.started
          }, this);
          const Wy = null === Zy || void 0 === Zy ? void 0 : Zy.sessionMeta,
            Uy = Bb(Bb({}, null === (sy = bb.session) || void 0 === sy ? void 0 : sy.overrides), null === Wy || void 0 === Wy ? void 0 : Wy.overrides);
          fy.sessionMeta = Bb(Bb({}, bb.session), {}, {
            id: yb,
            attributes: Bb(Bb(Bb({}, null === (Sy = bb.session) || void 0 === Sy ? void 0 : Sy.attributes), null === Wy || void 0 === Wy ? void 0 : Wy.attributes), {}, {
              isSampled: fy.isSampled.toString()
            }),
            overrides: Uy
          }), hy = gW
        }
        var Ey;
        if (Uy && (fy.sessionMeta = Bb(Bb({}, fy.sessionMeta), {}, {
            attributes: Bb(Bb(Bb({}, null === (Ey = fy.sessionMeta) || void 0 === Ey ? void 0 : Ey.attributes), Uy.attributes), {}, {
              isSampled: fy.isSampled.toString()
            })
          }), Uy.overrides)) {
          const yb = (null === Wy || void 0 === Wy ? void 0 : Wy.inheritOverrides) ? Bb(Bb({}, fy.sessionMeta.overrides), Uy.overrides) : Uy.overrides;
          Object.keys(yb).length > 0 ? fy.sessionMeta.overrides = yb : delete fy.sessionMeta.overrides
        }
        return {
          initialSession: fy,
          lifecycleType: hy
        }
      }
      registerBeforeSendHook(yb) {
        var bb;
        this.beforeSendHook = bb => {
          var Wy, Uy;
          const hy = null === (Wy = bb.meta.session) || void 0 === Wy ? void 0 : Wy.id;
          hy && !this.transports.isPaused() && yb(hy);
          const fy = null === (Uy = bb.meta.session) || void 0 === Uy ? void 0 : Uy.attributes;
          if (fy && "true" === (null === fy || void 0 === fy ? void 0 : fy.isSampled)) {
            var Zy;
            let yb = JSON.parse(JSON.stringify(bb));
            const Wy = null === (Zy = yb.meta.session) || void 0 === Zy ? void 0 : Zy.attributes;
            var cb;
            if (null === Wy || void 0 === Wy || delete Wy.isSampled, 0 === Object.keys(null !== Wy && void 0 !== Wy ? Wy : {}).length) null === (cb = yb.meta.session) || void 0 === cb || delete cb.attributes;
            return yb
          }
          return null
        }, null === (bb = this.transports) || void 0 === bb || bb.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var yb;
        this.logDebug("init session instrumentation");
        const bb = document.prerendering;
        var Wy;
        if ((null === (yb = this.config.sessionTracking) || void 0 === yb ? void 0 : yb.enabled) && (bb || this.prerenderSession)) return null !== (Wy = this.prerenderSession) && void 0 !== Wy || (this.prerenderSession = new Qb(this.metas, this.transports, (yb => {
          this.prerenderSession = void 0, this.initializeSession(yb)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(yb) {
        const bb = this.config.sessionTracking;
        if (null === bb || void 0 === bb ? void 0 : bb.enabled) {
          var Wy, Uy;
          const hy = jW(bb),
            fy = new hy(this);
          this.isAdoptingSession = fy.isAdopting, this.registerBeforeSendHook(fy.recordActivity);
          const {
            initialSession: Zy,
            lifecycleType: cb
          } = this.createInitialSession(hy, bb, yb);
          hy.storeUserSession(Zy);
          const Py = Zy.sessionMeta;
          this.notifiedSession = Py, this.api.setSession(Py), this.captureListener = () => {
            this.transports.isPaused() || fy.updateSession({
              refreshActivity: !1
            })
          }, null === (Wy = (Uy = this.metas).addCaptureListener) || void 0 === Wy || Wy.call(Uy, this.captureListener), cb === Jb && this.api.pushEvent(Jb, {}, void 0, {
            skipDedupe: !0
          }), cb === gW && this.api.pushEvent(gW, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var yb, bb, Wy;
        (null === (yb = this.prerenderSession) || void 0 === yb || yb.destroy(), this.captureListener) && (null === (bb = (Wy = this.metas).removeCaptureListener) || void 0 === bb || bb.call(Wy, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function hW(yb, bb, Wy, Uy) {
      const hy = {
        filename: yb || document.location.href,
        function: bb || "?"
      };
      return void 0 !== Wy && (hy.lineno = Wy), void 0 !== Uy && (hy.colno = Uy), hy
    }
    const fW = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ZW = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      cU = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      PW = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      oW = "safari-extension",
      BW = "safari-web-extension",
      KW = /Minified React error #\d+;/i;

    function eW(yb, bb) {
      const Wy = null === yb || void 0 === yb ? void 0 : yb.includes(oW),
        Uy = !Wy && (null === yb || void 0 === yb ? void 0 : yb.includes("safari-web-extension"));
      return Wy || Uy ? [(null === yb || void 0 === yb ? void 0 : yb.includes("@")) ? yb.split("@")[0] : yb, Wy ? `${oW}:${bb}` : `${BW}:${bb}`] : [yb, bb]
    }
    const qU = 1024;

    function sW(yb) {
      let bb = [];
      yb.stacktrace ? bb = yb.stacktrace.split("\n").filter(((yb, bb) => bb % 2 === 0)) : yb.stack && (bb = yb.stack.split("\n"));
      const Wy = bb.reduce(((bb, Wy, Uy) => {
        if (Wy.length > qU) return bb;
        let hy, fy, Zy, cb, Py;
        if (hy = fW.exec(Wy)) {
          if (fy = hy[1], Zy = hy[2], cb = hy[3], Py = hy[4], null === Zy || void 0 === Zy ? void 0 : Zy.startsWith("eval")) {
            const yb = ZW.exec(Zy);
            yb && (Zy = yb[1], cb = yb[2], Py = yb[3])
          }
          Zy = (null === Zy || void 0 === Zy ? void 0 : Zy.startsWith("address at ")) ? Zy.substring(11) : Zy, [fy, Zy] = eW(fy, Zy)
        } else if (hy = cU.exec(Wy)) {
          if (fy = hy[1], Zy = hy[3], cb = hy[4], Py = hy[5], Zy && Zy.includes(" > eval")) {
            const yb = PW.exec(Zy);
            yb && (fy = fy || "eval", Zy = yb[1], cb = yb[2])
          } else 0 === Uy && !Py && gb(yb.columnNumber) && (Py = String(yb.columnNumber + 1));
          [fy, Zy] = eW(fy, Zy)
        }
        return (Zy || fy) && bb.push(hW(Zy, fy, cb ? Number(cb) : void 0, Py ? Number(Py) : void 0)), bb
      }), []);
      return KW.test(yb.message) ? Wy.slice(1) : Wy
    }

    function SW(yb) {
      return {
        frames: sW(yb)
      }
    }
    const EW = "http-request-start",
      lW = "http-request-end";
    var mU = class yb {
      constructor() {
        this.subscribers = []
      }
      subscribe(yb) {
        return this.subscribers.push(yb), {
          unsubscribe: () => this.unsubscribe(yb)
        }
      }
      unsubscribe(yb) {
        this.subscribers = this.subscribers.filter((bb => bb !== yb))
      }
      notify(yb) {
        this.subscribers.forEach((bb => bb(yb)))
      }
      first() {
        const bb = new yb,
          Wy = yb => {
            bb.notify(yb), Uy.unsubscribe()
          },
          Uy = this.subscribe(Wy),
          hy = bb.unsubscribe.bind(bb);
        return this.withUnsubscribeOverride(bb, hy, Wy)
      }
      takeWhile(bb) {
        const Wy = new yb,
          Uy = yb => {
            bb(yb) ? Wy.notify(yb) : Wy.unsubscribe(Uy)
          };
        this.subscribe(Uy);
        const hy = Wy.unsubscribe.bind(Wy);
        return this.withUnsubscribeOverride(Wy, hy, Uy)
      }
      filter(bb) {
        const Wy = new yb,
          Uy = yb => {
            bb(yb) && Wy.notify(yb)
          };
        this.subscribe(Uy);
        const hy = Wy.unsubscribe.bind(Wy);
        return this.withUnsubscribeOverride(Wy, hy, Uy)
      }
      merge() {
        const bb = new yb,
          Wy = [];
        for (var Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
        hy.forEach((yb => {
          const Uy = yb.subscribe((yb => {
            bb.notify(yb)
          }));
          Wy.push(Uy)
        }));
        const Zy = bb.unsubscribeAll.bind(bb);
        return bb.unsubscribe = () => {
          Wy.forEach((yb => yb.unsubscribe())), Zy()
        }, bb
      }
      withUnsubscribeOverride(yb, bb, Wy) {
        return yb.unsubscribe = yb => {
          bb(yb), this.unsubscribe(Wy)
        }, yb
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let CW = function(yb) {
      return yb.TRACE = "trace", yb.DEBUG = "debug", yb.INFO = "info", yb.LOG = "log", yb.WARN = "warn", yb.ERROR = "error", yb
    }({});
    const TW = "log",
      VW = ["trace", "debug", "info", "log", "warn", "error"];
    let JW, gU = !1;
    const GW = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      OW = "Error",
      RW = yb => yb.map((yb => vb(yb) ? rW(yb) : String(yb))).join(" ");

    function vU(yb) {
      let bb, Wy, Uy, hy, fy = [];
      if (Fy(yb) && yb.error) bb = yb.error.message, Wy = yb.error.name, fy = sW(yb.error);
      else if ((Uy = py(yb)) || Ly(yb)) {
        const {
          name: hy,
          message: fy
        } = yb;
        Wy = null !== hy && void 0 !== hy ? hy : Uy ? "DOMError" : "DOMException", bb = fy ? `${Wy}: ${fy}` : Wy
      } else ab(yb) ? (Wy = yb.name, bb = yb.message, fy = sW(yb)) : (vb(yb) || (hy = rb(yb))) && (Wy = hy ? yb.constructor.name : void 0, bb = `Non-Error exception captured with keys: ${Object.keys(yb)}`);
      return [bb, Wy, fy]
    }

    function iU(yb) {
      const [bb, Wy, Uy, hy, fy] = yb;
      let Zy, cb, Py = [];
      const oy = Jy(bb),
        By = hW(Wy, "?", Uy, hy);
      return fy || !oy ? ([Zy, cb, Py] = vU(null !== fy && void 0 !== fy ? fy : bb), 0 === Py.length && (Py = [By])) : oy && ([Zy, cb] = function(yb) {
        var bb, Wy;
        const Uy = yb.match(GW),
          hy = null !== (bb = null === Uy || void 0 === Uy ? void 0 : Uy[1]) && void 0 !== bb ? bb : OW;
        return [null !== (Wy = null === Uy || void 0 === Uy ? void 0 : Uy[2]) && void 0 !== Wy ? Wy : yb, hy]
      }(bb), Py = [By]), {
        value: Zy,
        type: cb,
        stackFrames: Py
      }
    }

    function MW(yb, bb) {
      return ab(yb[0]) ? iU(yb) : {
        value: bb(yb)
      }
    }
    const YW = yb => yb.map((yb => {
      try {
        return String(yb)
      } catch (bb) {
        return ""
      }
    })).join(" ");
    var XW = class yb extends bU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = WW, this.errorSerializer = YW
      }
      initialize() {
        var bb, Wy;
        const Uy = this.config.consoleInstrumentation,
          hy = (null === Uy || void 0 === Uy ? void 0 : Uy.serializeErrors) || !!(null === Uy || void 0 === Uy ? void 0 : Uy.errorSerializer);
        this.errorSerializer = hy ? null !== (bb = null === Uy || void 0 === Uy ? void 0 : Uy.errorSerializer) && void 0 !== bb ? bb : RW : YW;
        const fy = null !== (Wy = null === Uy || void 0 === Uy ? void 0 : Uy.disabledLevels) && void 0 !== Wy ? Wy : yb.defaultDisabledLevels,
          Zy = function(yb) {
            if (JW || (JW = new mU), !gU) {
              const bb = null !== yb && void 0 !== yb ? yb : db;
              VW.forEach((yb => {
                console[yb] = function() {
                  for (var Wy, Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
                  JW.notify({
                    type: "console",
                    level: yb,
                    args: hy
                  }), null === (Wy = bb[yb]) || void 0 === Wy || Wy.apply(console, hy)
                }
              })), gU = !0
            }
            return JW
          }(this.unpatchedConsole);
        this.subscription = Zy.subscribe((bb => {
          let {
            level: Wy,
            args: hy
          } = bb;
          if (!fy.includes(Wy)) try {
            if (Wy !== CW.ERROR || (null === Uy || void 0 === Uy ? void 0 : Uy.consoleErrorAsLog))
              if (Wy === CW.ERROR && (null === Uy || void 0 === Uy ? void 0 : Uy.consoleErrorAsLog)) {
                const {
                  value: bb,
                  type: Uy,
                  stackFrames: fy
                } = MW(hy, this.errorSerializer);
                this.api.pushLog(bb ? [yb.consoleErrorPrefix + bb] : hy, {
                  level: Wy,
                  context: {
                    value: null !== bb && void 0 !== bb ? bb : "",
                    type: null !== Uy && void 0 !== Uy ? Uy : "",
                    stackFrames: (null === fy || void 0 === fy ? void 0 : fy.length) ? RW(fy) : ""
                  }
                })
              } else this.api.pushLog(hy, {
                level: Wy
              });
            else {
              const {
                value: bb,
                type: Wy,
                stackFrames: Uy
              } = MW(hy, this.errorSerializer);
              if (bb && !Wy && !Uy) return void this.api.pushError(new Error(yb.consoleErrorPrefix + bb));
              this.api.pushError(new Error(yb.consoleErrorPrefix + bb), {
                type: Wy,
                stackFrames: Uy
              })
            }
          } catch (Zy) {
            this.logError(Zy)
          }
        }))
      }
      destroy() {
        var yb;
        null === (yb = this.subscription) || void 0 === yb || yb.unsubscribe(), this.subscription = void 0
      }
    };
    XW.defaultDisabledLevels = [CW.DEBUG, CW.TRACE, CW.LOG], XW.consoleErrorPrefix = "console.error: ";
    const nW = [];
    var uW = class extends bU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = WW
      }
      initialize() {
        this.logDebug("Initializing"),
          function(yb) {
            const bb = window.onerror;
            window.onerror = function() {
              for (var Wy = arguments.length, Uy = new Array(Wy), hy = 0; hy < Wy; hy++) Uy[hy] = arguments[hy];
              try {
                const {
                  value: bb,
                  type: Wy,
                  stackFrames: hy
                } = iU(Uy), fy = Uy[4];
                if (bb) {
                  const Uy = {
                    type: Wy,
                    stackFrames: hy
                  };
                  null != fy && (Uy.originalError = fy), yb.pushError(new Error(bb), Uy)
                }
              } finally {
                null === bb || void 0 === bb || bb.apply(window, Uy)
              }
            }
          }(this.api),
          function(yb) {
            const bb = bb => {
              var Wy;
              let Uy, hy, fy = bb;
              if (fy.reason) fy = bb.reason;
              else if (null === (Wy = bb.detail) || void 0 === Wy ? void 0 : Wy.reason) {
                var Zy;
                fy = null === (Zy = bb.detail) || void 0 === Zy ? void 0 : Zy.reason
              }
              let cb = [];
              ny(fy) ? (Uy = `Non-Error promise rejection captured with value: ${String(fy)}`, hy = "UnhandledRejection") : [Uy, hy, cb] = vU(fy), Uy && yb.pushError(new Error(Uy), {
                type: hy,
                stackFrames: cb
              })
            };
            window.addEventListener("unhandledrejection", bb), nW.push(bb)
          }(this.api)
      }
    };
    const rU = "unknown";
    var HW = class extends bU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = WW, this.waitingForActivation = !1, this.sendViewChangedEvent = yb => {
          var bb;
          if (this.waitingForActivation || document.prerendering) return;
          const Wy = yb.view;
          if (Wy && Wy.name !== (null === (bb = this.notifiedView) || void 0 === bb ? void 0 : bb.name)) {
            var Uy, hy, fy;
            const yb = null !== (Uy = null === (hy = this.notifiedView) || void 0 === hy ? void 0 : hy.name) && void 0 !== Uy ? Uy : rU;
            this.notifiedView = Wy, this.api.pushEvent(Vb, {
              fromView: yb,
              toView: null !== (fy = Wy.name) && void 0 !== fy ? fy : rU
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
    class aU {
      t;
      o = 0;
      i = [];
      l(yb) {
        if (yb.hadRecentInput) return;
        const bb = this.i[0],
          Wy = this.i.at(-1);
        this.o && bb && Wy && yb.startTime - Wy.startTime < 1e3 && yb.startTime - bb.startTime < 5e3 ? (this.o += yb.value, this.i.push(yb)) : (this.o = yb.value, this.i = [yb]), this.t?.(yb)
      }
    }
    const FW = () => {
        const yb = performance.getEntriesByType("navigation")[0];
        if (yb && yb.responseStart > 0 && yb.responseStart < performance.now()) return yb
      },
      pW = yb => {
        if ("loading" === document.readyState) return "loading";
        const bb = FW();
        if (bb) {
          if (yb < bb.domInteractive) return "loading";
          if (0 === bb.domContentLoadedEventStart || yb < bb.domContentLoadedEventStart) return "dom-interactive";
          if (0 === bb.domComplete || yb < bb.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      LW = yb => {
        const bb = yb.nodeName;
        return 1 === yb.nodeType ? bb.toLowerCase() : bb.toUpperCase().replace(/^#/, "")
      },
      QW = yb => {
        let bb = "";
        try {
          for (; 9 !== yb?.nodeType;) {
            const Wy = yb,
              Uy = Wy.id ? "#" + Wy.id : [LW(Wy), ...Array.from(Wy.classList ?? []).sort()].join(".");
            if (bb.length + Uy.length > 99) return bb || Uy;
            if (bb = bb ? Uy + ">" + bb : Uy, Wy.id) break;
            yb = Wy.parentNode
          }
        } catch {}
        return bb
      },
      jU = new WeakMap;

    function DW(yb, bb) {
      let Wy = jU.get(bb);
      return Wy || (Wy = new WeakMap, jU.set(bb, Wy)), Wy.get(yb) || Wy.set(yb, new bb), Wy.get(yb)
    }
    let tU = -1;
    const wW = () => tU,
      kU = yb => {
        addEventListener("pageshow", (bb => {
          bb.persisted && (tU = bb.timeStamp, yb(bb))
        }), !0)
      },
      NW = (yb, bb, Wy, Uy) => {
        let hy, fy;
        return Zy => {
          bb.value >= 0 && (Zy || Uy) && (fy = bb.value - (hy ?? 0), (fy || void 0 === hy) && (hy = bb.value, bb.delta = fy, bb.rating = ((yb, bb) => yb > bb[1] ? "poor" : yb > bb[0] ? "needs-improvement" : "good")(bb.value, Wy), yb(bb)))
        }
      },
      zU = yb => {
        requestAnimationFrame((() => requestAnimationFrame((() => yb()))))
      },
      IW = () => FW()?.activationStart ?? 0;
    let xU = -1;
    const AW = new Set,
      dW = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      yh = yb => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === yb.type)
            for (const yb of AW) yb();
          isFinite(xU) || (xU = "visibilitychange" === yb.type ? yb.timeStamp : 0, removeEventListener("prerenderingchange", yh, !0))
        }
      },
      bh = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (xU = 1 / 0), xU < 0) {
          const yb = IW(),
            bb = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((bb => "hidden" === bb.name && bb.startTime >= yb))?.startTime;
          xU = bb ?? dW(), addEventListener("visibilitychange", yh, !0), addEventListener("prerenderingchange", yh, !0), kU((() => {
            setTimeout((() => {
              xU = dW()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return xU
          },
          onHidden(yb) {
            AW.add(yb)
          }
        }
      },
      WU = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0,
          Zy = arguments.length > 6 ? arguments[6] : void 0;
        const cb = FW(),
          Py = cb?.navigationId || 0;
        let oy = "navigate";
        return Wy ? oy = Wy : wW() >= 0 ? oy = "back-forward-cache" : cb && (document.prerendering || IW() > 0 ? oy = "prerender" : document.wasDiscarded ? oy = "restore" : cb.type && (oy = cb.type.replace(/_/g, "-"))), {
          name: yb,
          value: bb,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: oy,
          navigationId: Uy || Py,
          navigationInteractionId: hy,
          navigationURL: fy || cb?.name,
          navigationStartTime: Zy || 0
        }
      },
      UU = function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Uy = yb.filter((yb => PerformanceObserver.supportedEntryTypes.includes(yb)));
          if (Uy.length > 0) {
            const yb = new PerformanceObserver((yb => {
              queueMicrotask((() => {
                const Wy = yb.getEntries();
                Uy.length > 1 && Wy.sort(((yb, bb) => yb.startTime + yb.duration - (bb.startTime + bb.duration))), bb(Wy)
              }))
            }));
            for (const bb of Uy) yb.observe({
              type: bb,
              buffered: !0,
              ...Wy
            });
            return yb
          }
        } catch {}
      },
      hU = yb => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && yb && yb.reportSoftNavs,
      fU = (yb, bb) => {
        if (yb.set(bb.navigationId, bb), yb.size > 2) {
          const bb = yb.keys().next().value;
          void 0 !== bb && yb.delete(bb)
        }
      },
      ZU = yb => {
        let bb = !1;
        return () => {
          bb || (yb(), bb = !0)
        }
      };
    class ch {
      u
    }
    const PU = yb => {
        document.prerendering ? addEventListener("prerenderingchange", yb, !0) : yb()
      },
      oU = [1800, 3e3],
      BU = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wy = hU(bb);
        PU((() => {
          const Uy = DW(bb, ch),
            hy = bh();
          let fy, Zy = WU("FCP");
          const cb = UU(["paint"], (yb => {
            for (const bb of yb) "first-contentful-paint" === bb.name && (cb.disconnect(), bb.startTime < hy.firstHiddenTime && (Zy.value = Math.max(bb.startTime - IW(), 0), Zy.entries.push(bb), Zy.navigationId = bb.navigationId || Zy.navigationId, fy(!0)))
          }));
          cb && (fy = NW(yb, Zy, oU, bb.reportAllChanges), kU((Wy => {
            Zy = WU("FCP", -1, "back-forward-cache", Zy.navigationId, Zy.navigationInteractionId, Zy.navigationURL, wW()), fy = NW(yb, Zy, oU, bb.reportAllChanges), zU((() => {
              Zy.value = performance.now() - Wy.timeStamp, fy(!0)
            }))
          }))), Wy && UU(["soft-navigation"], (Wy => {
            Wy.forEach((Wy => {
              Uy.u && Wy.navigationId && fU(Uy.u, Wy);
              const hy = Math.max((Wy.presentationTime || Wy.paintTime || 0) - Wy.startTime, 0);
              Zy = WU("FCP", hy, "soft-navigation", Wy.navigationId, Wy.interactionId, Wy.name, Wy.startTime), fy = NW(yb, Zy, oU, bb.reportAllChanges), fy(!0)
            }))
          }), bb)
        }))
      },
      KU = [.1, .25],
      eU = yb => yb.find((yb => 1 === yb.node?.nodeType)) || yb[0];
    let qh = 0,
      sU = 1 / 0,
      SU = 0;
    const EU = yb => {
      for (const bb of yb) bb.interactionId && (sU = Math.min(sU, bb.interactionId), SU = Math.max(SU, bb.interactionId), qh = SU ? (SU - sU) / 7 + 1 : 0)
    };
    let lU;
    const mh = () => lU ? qh : performance.interactionCount ?? 0;
    class CU {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return mh() - this.h
      }
      D() {
        this.h = mh(), this.v.length = 0, this.p.clear()
      }
      S(yb) {
        const bb = this.T(),
          Wy = Math.min(this.v.length - 1, Math.floor(bb / 50));
        return !bb || -1 !== Wy || "soft-navigation" !== yb && "back-forward-cache" !== yb ? this.v[Wy] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(yb) {
        if (this.m?.(yb), !yb.interactionId) return;
        const bb = this.v.at(-1);
        let Wy = this.p.get(yb.interactionId);
        if (Wy || this.v.length < 10 || yb.duration > bb.k) {
          if (Wy ? yb.duration > Wy.k ? (Wy.entries = [yb], Wy.k = yb.duration) : yb.duration === Wy.k && yb.startTime === Wy.entries[0].startTime && Wy.entries.push(yb) : (Wy = {
              id: yb.interactionId,
              entries: [yb],
              k: yb.duration
            }, this.p.set(Wy.id, Wy), this.v.push(Wy)), this.v.sort(((yb, bb) => bb.k - yb.k)), this.v.length > 10) {
            const yb = this.v.splice(10);
            for (const bb of yb) this.p.delete(bb.id)
          }
          this.M?.(Wy)
        }
      }
    }
    const TU = yb => {
        const bb = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Wy = globalThis.requestIdleCallback || setTimeout,
          Uy = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) yb();
        else {
          const hy = ZU(yb);
          let fy = -1;
          const Zy = () => {
            Uy(fy), hy()
          };
          addEventListener("visibilitychange", Zy, {
            once: !0,
            capture: !0
          }), fy = Wy((() => {
            removeEventListener("visibilitychange", Zy, {
              capture: !0
            }), hy()
          }), {
            timeout: bb
          })
        }
      },
      VU = [200, 500],
      JU = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wy = DW(bb = Object.assign({}, bb), CU);
        let Uy = [],
          hy = [],
          fy = 0;
        const Zy = new WeakMap,
          cb = new WeakMap;
        let Py = !1;
        const oy = () => {
            Py || (Py = !0, TU(By))
          },
          By = () => {
            const yb = new Set(Wy.v.map((yb => Zy.get(yb.entries[0])))),
              bb = hy.length - 10;
            hy = hy.filter(((Wy, Uy) => Uy >= bb || yb.has(Wy)));
            const cb = new Set;
            for (const Wy of hy) {
              const yb = Ky(Wy.startTime, Wy.processingEnd);
              for (const bb of yb) cb.add(bb)
            }
            const oy = Uy.length - 10;
            Uy = Uy.filter(((yb, bb) => cb.has(yb) || bb >= oy && yb.startTime > fy)), Py = !1
          };
        Wy.m = yb => {
          const Wy = yb.startTime + yb.duration;
          let Uy;
          fy = Math.max(fy, yb.processingEnd);
          for (let fy = hy.length - 1; fy >= 0; fy--) {
            const Zy = hy[fy];
            if (Math.abs(Wy - Zy.renderTime) <= 8) {
              Uy = Zy, Uy.startTime = Math.min(yb.startTime, Uy.startTime), Uy.processingStart = Math.min(yb.processingStart, Uy.processingStart), Uy.processingEnd = Math.max(yb.processingEnd, Uy.processingEnd), bb.includeProcessedEventEntries && Uy.entries.push(yb);
              break
            }
          }
          Uy || (Uy = {
            startTime: yb.startTime,
            processingStart: yb.processingStart,
            processingEnd: yb.processingEnd,
            renderTime: Wy,
            entries: bb.includeProcessedEventEntries ? [yb] : []
          }, hy.push(Uy)), yb.interactionId && Zy.set(yb, Uy), oy()
        }, Wy.M = yb => {
          if (!cb.get(yb)) {
            const Wy = yb.entries.find((yb => yb.target))?.target;
            if (Wy) {
              const Uy = bb.generateTarget?.(Wy) ?? QW(Wy);
              cb.set(yb, Uy)
            } else {
              const bb = yb.entries.find((yb => yb.targetSelector))?.targetSelector;
              bb && cb.set(yb, bb)
            }
          }
        };
        const Ky = (yb, bb) => {
          const Wy = [];
          for (const hy of Uy)
            if (!(hy.startTime + hy.duration < yb)) {
              if (hy.startTime > bb) break;
              Wy.push(hy)
            } return Wy
        };
        UU(["long-animation-frame"], (yb => {
            Uy = Uy.concat(yb), oy()
          }), bb),
          function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Wy = bh();
            PU((() => {
              "interactionCount" in performance || lU || (lU = UU(["event"], EU, {
                durationThreshold: 0
              }));
              let Uy, hy = WU("INP");
              const fy = DW(bb, CU),
                Zy = (Wy, Zy, cb, Py, oy) => {
                  fy.D(), hy = WU("INP", -1, Wy, Zy, cb, Py, oy), Uy = NW(yb, hy, VU, bb.reportAllChanges)
                },
                cb = () => {
                  const yb = fy.S(hy.navigationType);
                  yb && yb.k !== hy.value && (hy.value = yb.k, hy.entries = yb.entries, Uy())
                },
                Py = yb => {
                  cb(), Uy(!0), Zy("soft-navigation", yb.navigationId, yb.interactionId, yb.name, yb.startTime)
                },
                oy = function(yb) {
                  let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  TU((() => {
                    for (const bb of yb) "soft-navigation" !== bb.entryType ? fy.l(bb) : Py(bb);
                    cb(), bb && Uy(!0)
                  }))
                },
                By = ["event", "first-input"];
              hU(bb) && By.push("soft-navigation");
              const Ky = UU(By, oy, {
                ...bb,
                durationThreshold: bb.durationThreshold ?? 40
              });
              Uy = NW(yb, hy, VU, bb.reportAllChanges), Ky && (Wy.onHidden((() => {
                oy(Ky.takeRecords(), !0)
              })), kU((() => {
                Zy("back-forward-cache", hy.navigationId, hy.navigationInteractionId, hy.navigationURL, wW())
              })))
            }))
          }((bb => {
            yb((yb => {
              if (0 === yb.entries.length) {
                const bb = yb.navigationStartTime || 0,
                  Wy = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: yb.value,
                    loadState: pW(bb)
                  };
                return Object.assign(yb, {
                  attribution: Wy
                })
              }
              const bb = yb.entries[0],
                Uy = Zy.get(bb),
                hy = Math.max(Uy.processingStart, bb.startTime),
                fy = Math.max(bb.startTime + bb.duration, hy),
                Py = Math.min(Uy.processingEnd, fy),
                oy = Uy.entries.sort(((yb, bb) => yb.processingStart - bb.processingStart)),
                By = Ky(bb.startTime, Py),
                ey = Wy.p.get(bb.interactionId),
                qb = {
                  interactionTarget: cb.get(ey),
                  interactionType: bb.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: bb.startTime,
                  nextPaintTime: fy,
                  processedEventEntries: oy,
                  longAnimationFrameEntries: By,
                  inputDelay: hy - bb.startTime,
                  processingDuration: Py - hy,
                  presentationDelay: fy - Py,
                  loadState: pW(bb.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (yb => {
                const bb = yb.interactionTime,
                  Wy = yb.nextPaintTime;
                if (!yb.longAnimationFrameEntries?.length || !bb || !Wy) return;
                const Uy = yb.inputDelay,
                  hy = yb.processingDuration;
                let fy, Zy, cb = 0,
                  Py = 0,
                  oy = 0,
                  By = 0;
                for (const qb of yb.longAnimationFrameEntries) {
                  Py = Py + qb.startTime + qb.duration - qb.styleAndLayoutStart;
                  for (const yb of qb.scripts) {
                    const Wy = yb.startTime + yb.duration;
                    if (Wy < bb) continue;
                    const oy = Wy - Math.max(bb, yb.startTime),
                      Ky = yb.duration ? oy / yb.duration * yb.forcedStyleAndLayoutDuration : 0;
                    cb += oy - Ky, Py += Ky, oy > By && (Zy = yb.startTime < bb + Uy ? "input-delay" : yb.startTime >= bb + Uy + hy ? "presentation-delay" : "processing-duration", fy = yb, By = oy)
                  }
                }
                const Ky = yb.longAnimationFrameEntries.at(-1),
                  ey = Ky ? Ky.startTime + Ky.duration : 0;
                ey >= bb + Uy + hy && (oy = Wy - ey), fy && Zy && (yb.longestScript = {
                  entry: fy,
                  subpart: Zy,
                  intersectingDuration: By
                }), yb.totalScriptDuration = cb, yb.totalStyleAndLayoutDuration = Py, yb.totalPaintDuration = oy, yb.totalUnattributedDuration = Wy - bb - cb - Py - oy
              })(qb), Object.assign(yb, {
                attribution: qb
              })
            })(bb))
          }), bb)
      };
    class gh {
      m;
      u;
      l(yb) {
        this.m?.(yb)
      }
    }
    const GU = [2500, 4e3];
    let OU = 50;
    const RU = [];
    UU(["resource"], (yb => {
      for (const bb of yb) RU.push(bb), RU.length > OU && RU.shift()
    }));
    const vh = [800, 1800],
      ih = yb => {
        document.prerendering ? PU((() => ih(yb))) : "complete" !== document.readyState ? addEventListener("load", (() => ih(yb)), !0) : setTimeout(yb)
      },
      MU = "load_state",
      YU = "time_to_first_byte";
    var XU = class {
        constructor(yb, bb) {
          this.corePushMeasurement = yb, this.webVitalConfig = bb
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var yb;
          ! function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Wy = DW(bb = Object.assign({}, bb), aU),
              Uy = new WeakMap;
            Wy.t = yb => {
                if (yb?.sources?.length) {
                  const Wy = eU(yb.sources),
                    hy = Wy?.node;
                  if (hy) {
                    const yb = bb.generateTarget?.(hy) ?? QW(hy);
                    Uy.set(Wy, yb)
                  }
                }
              },
              function(yb) {
                let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Wy = bh();
                BU(ZU((() => {
                  let Uy, hy = WU("CLS", 0);
                  const fy = DW(bb, aU),
                    Zy = (Wy, Zy, cb, Py, oy) => {
                      hy = WU("CLS", 0, Wy, Zy, cb, Py, oy), fy.o = 0, Uy = NW(yb, hy, KU, bb.reportAllChanges)
                    },
                    cb = function() {
                      let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      fy.o > hy.value && (hy.value = fy.o, hy.entries = fy.i), Uy(yb)
                    },
                    Py = yb => {
                      cb(!0), Zy("soft-navigation", yb.navigationId, yb.interactionId, yb.name, yb.startTime)
                    },
                    oy = yb => {
                      for (const bb of yb) "soft-navigation" !== bb.entryType ? fy.l(bb) : Py(bb);
                      cb()
                    },
                    By = ["layout-shift"];
                  hU(bb) && By.push("soft-navigation");
                  const Ky = UU(By, oy);
                  Ky && (Uy = NW(yb, hy, KU, bb.reportAllChanges), Wy.onHidden((() => {
                    oy(Ky.takeRecords()), Uy(!0)
                  })), kU((() => {
                    Zy("back-forward-cache", hy.navigationId, hy.navigationInteractionId, hy.navigationURL, wW()), zU(Uy)
                  })), setTimeout(Uy))
                })))
              }((bb => {
                yb((yb => {
                  let bb = {};
                  if (yb.entries.length) {
                    const Wy = yb.entries.reduce(((yb, bb) => yb.value > bb.value ? yb : bb));
                    if (Wy?.sources?.length) {
                      const yb = eU(Wy.sources);
                      yb && (bb = {
                        largestShiftTarget: Uy.get(yb),
                        largestShiftTime: Wy.startTime,
                        largestShiftValue: Wy.value,
                        largestShiftSource: yb,
                        largestShiftEntry: Wy,
                        loadState: pW(Wy.startTime)
                      })
                    }
                  }
                  return Object.assign(yb, {
                    attribution: bb
                  })
                })(bb))
              }), bb)
          }((yb => {
            const {
              loadState: bb,
              largestShiftValue: Wy,
              largestShiftTime: Uy,
              largestShiftTarget: hy
            } = yb.attribution, fy = this.buildInitialValues(yb);
            this.addIfPresent(fy, "largest_shift_value", Wy), this.addIfPresent(fy, "largest_shift_time", Uy);
            const Zy = this.buildInitialContext(yb);
            this.addIfPresent(Zy, MU, bb), this.addIfPresent(Zy, "largest_shift_target", hy), this.pushMeasurement(fy, Zy)
          }), {
            reportAllChanges: null === (yb = this.webVitalConfig) || void 0 === yb ? void 0 : yb.reportAllChanges
          })
        }
        measureFCP() {
          var yb;
          ! function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Wy = DW(bb = Object.assign({}, bb), ch);
            hU(bb) && (Wy.u = new Map), BU((bb => {
              yb((yb => {
                let bb = {
                  timeToFirstByte: 0,
                  firstByteToFCP: yb.value,
                  loadState: pW(wW())
                };
                if ("soft-navigation" !== yb.navigationType) {
                  if (yb.entries.length) {
                    const Wy = FW(),
                      Uy = yb.entries.at(-1);
                    if (Wy) {
                      const hy = Wy.responseStart,
                        fy = Wy.activationStart || 0,
                        Zy = Math.max(0, hy - fy);
                      bb = {
                        timeToFirstByte: Zy,
                        firstByteToFCP: yb.value - Zy,
                        loadState: pW(yb.entries[0].startTime),
                        navigationEntry: Wy,
                        fcpEntry: Uy
                      }
                    }
                  }
                } else {
                  const Uy = Wy.u?.get(yb.navigationId);
                  Uy && (bb = {
                    timeToFirstByte: 0,
                    firstByteToFCP: yb.value,
                    loadState: "complete",
                    navigationEntry: Uy
                  })
                }
                return Object.assign(yb, {
                  attribution: bb
                })
              })(bb))
            }), bb)
          }((yb => {
            const {
              firstByteToFCP: bb,
              timeToFirstByte: Wy,
              loadState: Uy
            } = yb.attribution, hy = this.buildInitialValues(yb);
            this.addIfPresent(hy, "first_byte_to_fcp", bb), this.addIfPresent(hy, YU, Wy);
            const fy = this.buildInitialContext(yb);
            this.addIfPresent(fy, MU, Uy), this.pushMeasurement(hy, fy)
          }), {
            reportAllChanges: null === (yb = this.webVitalConfig) || void 0 === yb ? void 0 : yb.reportAllChanges
          })
        }
        measureINP() {
          var yb;
          JU((yb => {
            var bb;
            const {
              interactionTime: Wy,
              presentationDelay: Uy,
              inputDelay: hy,
              processingDuration: fy,
              nextPaintTime: Zy,
              loadState: cb,
              interactionTarget: Py,
              interactionType: oy,
              totalScriptDuration: By,
              totalStyleAndLayoutDuration: Ky,
              totalPaintDuration: ey,
              totalUnattributedDuration: qb,
              longestScript: sy
            } = yb.attribution, Sy = this.buildInitialValues(yb);
            this.addIfPresent(Sy, "interaction_time", Wy), this.addIfPresent(Sy, "presentation_delay", Uy), this.addIfPresent(Sy, "input_delay", hy), this.addIfPresent(Sy, "processing_duration", fy), this.addIfPresent(Sy, "next_paint_time", Zy), this.addNumberIfDefined(Sy, "total_script_duration", By), this.addNumberIfDefined(Sy, "total_style_and_layout_duration", Ky), this.addNumberIfDefined(Sy, "total_paint_duration", ey), this.addNumberIfDefined(Sy, "total_unattributed_duration", qb), this.addNumberIfDefined(Sy, "longest_script_intersecting_duration", null === sy || void 0 === sy ? void 0 : sy.intersectingDuration);
            const Ey = this.buildInitialContext(yb);
            this.addIfPresent(Ey, MU, cb), this.addIfPresent(Ey, "interaction_target", Py), this.addIfPresent(Ey, "interaction_type", oy), this.addIfPresent(Ey, "longest_script_subpart", null === sy || void 0 === sy ? void 0 : sy.subpart), this.addIfPresent(Ey, "longest_script_invoker_type", null === sy || void 0 === sy ? void 0 : sy.entry.invokerType), (null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.trackAttributionSources) && (this.addIfPresent(Ey, "longest_script_invoker", null === sy || void 0 === sy ? void 0 : sy.entry.invoker), this.addIfPresent(Ey, "longest_script_source_url", null === sy || void 0 === sy ? void 0 : sy.entry.sourceURL), this.addIfPresent(Ey, "longest_script_source_function_name", null === sy || void 0 === sy ? void 0 : sy.entry.sourceFunctionName), this.addIfPresent(Ey, "longest_script_source_char_position", void 0 !== (null === sy || void 0 === sy ? void 0 : sy.entry.sourceCharPosition) ? String(sy.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Sy, Ey)
          }), {
            reportAllChanges: null === (yb = this.webVitalConfig) || void 0 === yb ? void 0 : yb.reportAllChanges
          })
        }
        measureLCP() {
          var yb;
          ! function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (bb = Object.assign({}, bb)).resourceBufferSize && (OU = bb.resourceBufferSize);
            const Wy = DW(bb, gh),
              Uy = new WeakMap;
            hU(bb) && (Wy.u = new Map), Wy.m = yb => {
                const Wy = yb.element;
                if (Wy) {
                  const hy = bb.generateTarget?.(Wy) ?? QW(Wy);
                  Uy.set(yb, hy)
                } else yb.id && Uy.set(yb, `#${yb.id}`)
              },
              function(yb) {
                let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Wy = !1;
                const Uy = hU(bb);
                PU((() => {
                  let hy, fy = bh(),
                    Zy = WU("LCP");
                  const cb = DW(bb, gh),
                    Py = (Uy, cb, Py, oy, By) => {
                      Zy = WU("LCP", -1, Uy, cb, Py, oy, By), hy = NW(yb, Zy, GU, bb.reportAllChanges), Wy = !1, "soft-navigation" === Uy && (fy = bh(!0))
                    },
                    oy = yb => {
                      cb.u && yb.navigationId && fU(cb.u, yb), Wy || hy(!0), Py("soft-navigation", yb.navigationId, yb.interactionId, yb.name, yb.startTime);
                      const bb = yb.getLargestInteractionContentfulPaint?.();
                      bb && By([bb])
                    },
                    By = yb => {
                      bb.reportAllChanges || Uy || (yb = yb.slice(-1));
                      for (const bb of yb) {
                        if (!bb) continue;
                        if ("soft-navigation" === bb.entryType) {
                          oy(bb);
                          continue
                        }
                        let yb = 0,
                          Wy = [],
                          Uy = bb.startTime;
                        if ("largest-contentful-paint" === bb.entryType) yb = Math.max(bb.startTime - IW(), 0), cb.l(bb), Wy = [bb];
                        else if ("interaction-contentful-paint" === bb.entryType) {
                          const hy = bb;
                          if (!Zy.navigationId) continue;
                          if ("interactionId" in hy && hy.interactionId != Zy.navigationInteractionId) continue;
                          Uy = hy.largestContentfulPaint?.renderTime || 0, yb = Math.max(Uy - bb.startTime, 0), hy.largestContentfulPaint && (cb.l(hy.largestContentfulPaint), Wy = [hy.largestContentfulPaint])
                        }
                        Uy < fy.firstHiddenTime && (Zy.value = yb, Zy.entries = Wy, hy())
                      }
                    },
                    Ky = ["largest-contentful-paint"];
                  Uy && Ky.push("interaction-contentful-paint", "soft-navigation");
                  const ey = UU(Ky, By);
                  if (ey) {
                    hy = NW(yb, Zy, GU, bb.reportAllChanges);
                    const fy = ["keydown", "click", "visibilitychange"],
                      cb = yb => {
                        if (yb.isTrusted && !Wy) {
                          const yb = Zy.id;
                          TU((() => {
                            if (!Wy) {
                              if (!Uy) {
                                ey.disconnect();
                                for (const yb of fy) removeEventListener(yb, cb, {
                                  capture: !0
                                })
                              }
                              yb === Zy.id && (Wy = !0, hy(!0))
                            }
                          }))
                        }
                      };
                    for (const yb of fy) addEventListener(yb, cb, {
                      capture: !0
                    });
                    kU((Uy => {
                      Py("back-forward-cache", Zy.navigationId, Zy.navigationInteractionId, Zy.navigationURL, wW()), hy = NW(yb, Zy, GU, bb.reportAllChanges), zU((() => {
                        Zy.value = performance.now() - Uy.timeStamp, Wy = !0, hy(!0)
                      }))
                    }))
                  }
                }))
              }((bb => {
                yb((yb => {
                  let bb = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: yb.value
                  };
                  if (yb.entries.length) {
                    const hy = yb.entries.at(-1),
                      fy = yb => yb.name === hy.url && (yb.requestStart || yb.startTime) <= hy.startTime,
                      Zy = hy.url && (RU.findLast(fy) || performance.getEntriesByType("resource").findLast(fy));
                    let cb;
                    bb.target = Uy.get(hy), bb.lcpEntry = hy, hy.url && (bb.url = hy.url), Zy && (bb.lcpResourceEntry = Zy);
                    let Py = 0,
                      oy = 0;
                    if ("soft-navigation" !== yb.navigationType ? (cb = FW(), Py = cb?.activationStart ?? 0, oy = cb?.responseStart ?? 0) : (Py = yb.navigationStartTime || 0, cb = Wy.u?.get(yb.navigationId)), cb) {
                      const Wy = Math.max(0, oy - Py),
                        Uy = Math.max(Wy, Zy ? (Zy.requestStart || Zy.startTime) - Py : 0),
                        hy = Math.min(yb.value, Math.max(Uy, Zy ? Zy.responseEnd - Py : 0));
                      bb = {
                        ...bb,
                        timeToFirstByte: Wy,
                        resourceLoadDelay: Uy - Wy,
                        resourceLoadDuration: hy - Uy,
                        elementRenderDelay: yb.value - hy,
                        navigationEntry: cb
                      }
                    }
                  }
                  return Object.assign(yb, {
                    attribution: bb
                  })
                })(bb))
              }), bb)
          }((yb => {
            var bb;
            const {
              elementRenderDelay: Wy,
              resourceLoadDelay: Uy,
              resourceLoadDuration: hy,
              timeToFirstByte: fy,
              target: Zy,
              url: cb,
              lcpResourceEntry: Py
            } = yb.attribution, oy = this.buildInitialValues(yb);
            this.addIfPresent(oy, "element_render_delay", Wy), this.addIfPresent(oy, "resource_load_delay", Uy), this.addIfPresent(oy, "resource_load_duration", hy), this.addIfPresent(oy, YU, fy);
            const By = this.buildInitialContext(yb);
            this.addIfPresent(By, "element", Zy), (null === (bb = this.webVitalConfig) || void 0 === bb ? void 0 : bb.trackAttributionSources) && (this.addIfPresent(By, "resource_url", cb), this.addIfPresent(By, "resource_delivery_type", null === Py || void 0 === Py ? void 0 : Py.deliveryType), this.addIfPresent(By, "resource_initiator_type", null === Py || void 0 === Py ? void 0 : Py.initiatorType)), this.pushMeasurement(oy, By)
          }), {
            reportAllChanges: null === (yb = this.webVitalConfig) || void 0 === yb ? void 0 : yb.reportAllChanges
          })
        }
        measureTTFB() {
          var yb;
          ! function(yb) {
            ! function(yb) {
              let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Wy = hU(bb);
              let Uy = WU("TTFB"),
                hy = NW(yb, Uy, vh, bb.reportAllChanges);
              ih((() => {
                const fy = FW();
                if (fy) {
                  const Zy = fy.responseStart;
                  Uy.value = Math.max(Zy - IW(), 0), Uy.entries = [fy], hy(!0), kU((() => {
                    Uy = WU("TTFB", 0, "back-forward-cache", Uy.navigationId, Uy.navigationInteractionId, Uy.navigationURL, wW()), hy = NW(yb, Uy, vh, bb.reportAllChanges), hy(!0)
                  })), Wy && UU(["soft-navigation"], (Wy => {
                    Wy.forEach((Wy => {
                      Wy.navigationId && (Uy = WU("TTFB", 0, "soft-navigation", Wy.navigationId, Wy.interactionId, Wy.name, Wy.startTime), Uy.entries = [Wy], hy = NW(yb, Uy, vh, bb.reportAllChanges), hy(!0))
                    }))
                  }), bb)
                }
              }))
            }((bb => {
              yb((yb => {
                const bb = yb.entries[0];
                let Wy = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: bb
                };
                if (yb.entries.length && bb instanceof PerformanceNavigationTiming) {
                  const Uy = bb.activationStart || 0,
                    hy = Math.max((bb.workerStart || bb.fetchStart || 0) - Uy, 0),
                    fy = Math.max(bb.domainLookupStart - Uy, 0),
                    Zy = Math.max(bb.connectStart - Uy, 0),
                    cb = Math.max(bb.connectEnd - Uy, 0);
                  Wy = {
                    waitingDuration: hy,
                    cacheDuration: fy - hy,
                    dnsDuration: Zy - fy,
                    connectionDuration: cb - Zy,
                    requestDuration: yb.value - cb,
                    navigationEntry: bb
                  }
                }
                return Object.assign(yb, {
                  attribution: Wy
                })
              })(bb))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((yb => {
            const {
              dnsDuration: bb,
              connectionDuration: Wy,
              requestDuration: Uy,
              waitingDuration: hy,
              cacheDuration: fy
            } = yb.attribution, Zy = this.buildInitialValues(yb);
            this.addIfPresent(Zy, "dns_duration", bb), this.addIfPresent(Zy, "connection_duration", Wy), this.addIfPresent(Zy, "request_duration", Uy), this.addIfPresent(Zy, "waiting_duration", hy), this.addIfPresent(Zy, "cache_duration", fy);
            const cb = this.buildInitialContext(yb);
            this.pushMeasurement(Zy, cb)
          }), {
            reportAllChanges: null === (yb = this.webVitalConfig) || void 0 === yb ? void 0 : yb.reportAllChanges
          })
        }
        buildInitialValues(yb) {
          return {
            [yb.name.toLowerCase()]: yb.value,
            delta: yb.delta
          }
        }
        buildInitialContext(yb) {
          var bb;
          const Wy = null !== (bb = yW("com.grafana.faro.lastNavigationId", xb)) && void 0 !== bb ? bb : rU;
          return {
            id: yb.id,
            rating: yb.rating,
            navigation_type: yb.navigationType,
            navigation_entry_id: Wy
          }
        }
        pushMeasurement(yb, bb) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: yb
          }, {
            context: bb
          })
        }
        addIfPresent(yb, bb, Wy) {
          Wy && (yb[bb] = Wy)
        }
        addNumberIfDefined(yb, bb, Wy) {
          void 0 !== Wy && (yb[bb] = Wy)
        }
      },
      nU = class extends bU {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = WW
        }
        initialize() {
          this.logDebug("Initializing"), new XU(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const uU = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function rh() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const bb of yb)
        if ("traceparent" === bb.name) {
          if (!uU.test(bb.description)) continue;
          const [, yb, Wy] = bb.description.split("-");
          if (null != yb && null != Wy) return {
            traceId: yb,
            spanId: Wy
          };
          break
        }
    }

    function HU(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Wy,
        monoNow: Uy
      } = bb;
      return Math.min(Wy, Wy - (Uy - yb))
    }

    function ah(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Wy, Uy] of Object.entries(bb)) {
        const bb = yb[Wy];
        return null != bb && (My(Uy) ? Uy.includes(bb) : bb === Uy)
      }
      return !0
    }

    function FU(yb) {
      const {
        connectEnd: bb,
        connectStart: Wy,
        decodedBodySize: Uy,
        domainLookupEnd: hy,
        domainLookupStart: fy,
        duration: Zy,
        encodedBodySize: cb,
        fetchStart: Py,
        initiatorType: oy,
        name: By,
        nextHopProtocol: Ky,
        redirectEnd: ey,
        redirectStart: qb,
        renderBlockingStatus: sy,
        requestStart: Sy,
        responseEnd: Ey,
        responseStart: ly,
        responseStatus: mb,
        secureConnectionStart: Cy,
        transferSize: Ty,
        workerStart: Vy
      } = yb;
      return {
        name: By,
        httpHost: LU(By),
        duration: QU(Zy),
        tcpHandshakeTime: QU(bb - Wy),
        dnsLookupTime: QU(hy - fy),
        tlsNegotiationTime: QU(bb - Cy),
        responseStatus: QU(mb),
        redirectTime: QU(ey - qb),
        requestTime: QU(ly - Sy),
        responseTime: QU(Ey - ly),
        fetchTime: QU(Ey - Py),
        serviceWorkerTime: QU(Vy > 0 ? Py - Vy : 0),
        decodedBodySize: QU(Uy),
        encodedBodySize: QU(cb),
        cacheHitStatus: function() {
          let yb = "fullLoad";
          0 === Ty ? Uy > 0 && (yb = "cache") : null != mb ? 304 === mb && (yb = "conditionalFetch") : cb > 0 && Ty < cb && (yb = "conditionalFetch");
          return yb
        }(),
        renderBlockingStatus: QU(sy),
        protocol: Ky,
        initiatorType: oy,
        visibilityState: document.visibilityState,
        ttfb: QU(ly - Sy),
        transferSize: QU(Ty)
      }
    }

    function pU(yb) {
      const {
        activationStart: bb,
        domComplete: Wy,
        domContentLoadedEventEnd: Uy,
        domContentLoadedEventStart: hy,
        domInteractive: fy,
        fetchStart: Zy,
        loadEventEnd: cb,
        loadEventStart: Py,
        responseStart: oy,
        type: By
      } = yb, Ky = function() {
        var yb;
        return null != (null === (yb = performance.timing) || void 0 === yb ? void 0 : yb.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Bb(Bb({}, FU(yb)), {}, {
        pageLoadTime: QU(Wy - Zy),
        documentParsingTime: QU(Ky ? fy - Ky : null),
        domProcessingTime: QU(Wy - fy),
        domContentLoadHandlerTime: QU(Uy - hy),
        onLoadTime: QU(cb - Py),
        ttfb: QU(Math.max(oy - (null !== bb && void 0 !== bb ? bb : 0), 0)),
        type: By
      })
    }

    function LU(yb) {
      try {
        return new URL(yb).host || rU
      } catch (bb) {
        return rU
      }
    }

    function QU(yb) {
      return null == yb ? rU : "number" === typeof yb ? Math.round(yb > 0 ? yb : 0).toString() : yb.toString()
    }
    const jh = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function DU(yb, bb, Wy, Uy, hy, fy, Zy) {
      try {
        var cb = yb[fy](Zy),
          Py = cb.value
      } catch (yb) {
        return void Wy(yb)
      }
      cb.done ? bb(Py) : Promise.resolve(Py).then(Uy, hy)
    }

    function th(yb) {
      return function() {
        var bb = this,
          Wy = arguments;
        return new Promise((function(Uy, hy) {
          var fy = yb.apply(bb, Wy);

          function Zy(yb) {
            DU(fy, Uy, hy, Zy, cb, "next", yb)
          }

          function cb(yb) {
            DU(fy, Uy, hy, Zy, cb, "throw", yb)
          }
          Zy(void 0)
        }))
      }
    }
    const wU = new mU;
    var kh = class extends bU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = WW
      }
      initialize() {
        var yb = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let bb = !1;
        const Wy = () => {
          ! function(yb) {
            if ("complete" === document.readyState) yb();
            else {
              const bb = () => {
                "complete" === document.readyState && (yb(), document.removeEventListener("readystatechange", bb))
              };
              document.addEventListener("readystatechange", bb)
            }
          }(th((function*() {
            if (bb) return;
            const Wy = yb.api.pushEvent,
              {
                faroNavigationId: Uy
              } = yield function(yb) {
                let bb;
                const Wy = new Promise((yb => {
                  bb = yb
                }));
                return new PerformanceObserver((Wy => {
                  var Uy;
                  const [hy] = Wy.getEntries();
                  if (null == hy || zb(hy.name)) return;
                  const fy = hy.toJSON();
                  let Zy = rh(null === fy || void 0 === fy ? void 0 : fy.serverTiming);
                  const cb = null !== (Uy = yW("com.grafana.faro.lastNavigationId", xb)) && void 0 !== Uy ? Uy : rU,
                    Py = Bb(Bb({}, pU(fy)), {}, {
                      faroNavigationId: lb(),
                      faroPreviousNavigationId: cb
                    });
                  bW("com.grafana.faro.lastNavigationId", Py.faroNavigationId, xb), yb("faro.performance.navigation", Py, void 0, {
                    spanContext: Zy,
                    timestampOverwriteMs: HU(fy.startTime)
                  }), bb(Py)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Wy
              }(Wy);
            bb || null == Uy || function(yb, bb, Wy, Uy) {
              const hy = Uy.trackResources;
              new PerformanceObserver((Uy => {
                const fy = Uy.getEntries(),
                  Zy = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const cb of fy) {
                  if (zb(cb.name)) continue;
                  null === Wy || void 0 === Wy || Wy.notify({
                    type: "resource"
                  });
                  const Uy = cb.toJSON();
                  let fy = rh(null === Uy || void 0 === Uy ? void 0 : Uy.serverTiming);
                  (null == hy && ah(Uy, jh) || hy) && bb("faro.performance.resource", Bb(Bb({}, FU(Uy)), {}, {
                    faroNavigationId: yb,
                    faroResourceId: lb()
                  }), void 0, {
                    spanContext: fy,
                    timestampOverwriteMs: HU(Uy.startTime, Zy)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Uy, Wy, wU, yb.config)
          })))
        };
        this.cancelInitialization = () => {
          bb = !0, document.removeEventListener("prerenderingchange", Wy)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Wy, {
          once: !0
        }) : Wy()
      }
      destroy() {
        var yb;
        null === (yb = this.cancelInitialization) || void 0 === yb || yb.call(this), this.cancelInitialization = void 0
      }
    };
    const NU = "data-faro-user-action-name",
      zh = NU.replace(/-name$/, "-timeout"),
      IU = 1e3;

    function xh(yb) {
      return `data-${(yb.startsWith("data-")?yb.slice(5):yb).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function AU(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Db;
      if (void 0 === yb) return bb;
      let Uy = NaN;
      try {
        Uy = "string" === typeof yb && "" === yb.trim() ? NaN : Number(yb)
      } catch (hy) {}
      return !Number.isFinite(Uy) || Uy <= 0 ? (Wy(`initialActivityTimeout must be a finite number greater than zero; using ${bb} ms`), bb) : Uy > 1e3 ? (Wy(`initialActivityTimeout cannot exceed ${IU} ms; clamping to the maximum`), IU) : Uy
    }

    function dU(yb, bb, Wy) {
      return void 0 !== yb && window.clearTimeout(yb), window.setTimeout((() => {
        bb()
      }), Wy)
    }

    function yf(yb) {
      return yb.type === lW
    }
    let bf, Wh;

    function Uh() {
      return bf || (bf = new mU), Wh || (Wh = new MutationObserver(((yb, bb) => {
        bf.notify({
          type: "dom-mutation"
        })
      })), Wh.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), bf
    }
    const hh = "fetch",
      fh = "xhr";
    let Zh, cf, Ph, oh, Bh = !1;

    function Kh() {
      if (Zh) return Zh;

      function yb(yb) {
        Zh.notify({
          type: EW,
          request: yb
        })
      }

      function bb(yb) {
        Zh.notify({
          type: lW,
          request: yb
        })
      }
      return Zh = new mU, Bh || (! function(yb) {
        let {
          onRequestEnd: bb,
          onRequestStart: Wy
        } = yb;
        Ph || (Ph = window.fetch);
        window.fetch = function() {
          var yb, Uy;
          const hy = null !== (yb = Iy(arguments[0])) && void 0 !== yb ? yb : "",
            fy = zb(hy),
            Zy = (null !== (Uy = arguments[1]) && void 0 !== Uy ? Uy : {}).method,
            cb = lb();
          return fy || Wy({
            url: hy,
            method: Zy,
            requestId: cb,
            apiType: hh
          }), Ph.apply(this, arguments).then((yb => (fy || bb({
            url: hy,
            method: Zy,
            requestId: cb,
            apiType: hh
          }), yb))).catch((yb => {
            throw fy || bb({
              url: hy,
              method: Zy,
              requestId: cb,
              apiType: hh
            }), yb
          }))
        }
      }({
        onRequestStart: yb,
        onRequestEnd: bb
      }), function(yb) {
        let {
          onRequestStart: bb,
          onRequestEnd: Wy
        } = yb;
        cf || (cf = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const yb = arguments[1],
            Uy = zb(yb),
            hy = arguments[0],
            fy = lb();
          this.addEventListener("loadstart", (function() {
            Uy || bb({
              url: yb,
              method: hy,
              requestId: fy,
              apiType: fh
            })
          })), this.addEventListener("load", (function() {
            Uy || Wy({
              url: yb,
              method: hy,
              requestId: fy,
              apiType: fh
            })
          })), this.addEventListener("error", (function() {
            Uy || Wy({
              url: yb,
              method: hy,
              requestId: fy,
              apiType: fh
            })
          })), this.addEventListener("abort", (function() {
            Uy || Wy({
              url: yb,
              method: hy,
              requestId: fy,
              apiType: fh
            })
          })), cf.apply(this, arguments)
        }
      }({
        onRequestStart: yb,
        onRequestEnd: bb
      }), Bh = !0), Zh
    }
    let eh, qf = !1;
    let sh = function(yb) {
      return yb[yb.Started = 0] = "Started", yb[yb.Halted = 1] = "Halted", yb[yb.Cancelled = 2] = "Cancelled", yb[yb.Ended = 3] = "Ended", yb
    }({});
    var Sh = class {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = yb, this.logDebug = bb, this.initialActivityTimeout = Wy, this.http = Kh(), this.dom = Uh(), this.perf = (oh || (oh = new mU), qf || (eh = wU.subscribe((yb => {
          "resource" === yb.type && oh.notify({
            type: "resource-entry"
          })
        })), qf = !0), oh), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new mU).merge(this.http, this.dom, this.perf).takeWhile((() => [sh.Started, sh.Halted].includes(this.userAction.getState()))).filter((yb => !!(this.userAction.getState() !== sh.Halted || yf(yb) && this.runningRequests.has(yb.request.requestId)))).subscribe((yb => {
          (function(yb) {
            return yb.type === EW
          })(yb) && this.runningRequests.set(yb.request.requestId, yb.request), yf(yb) && this.runningRequests.delete(yb.request.requestId), yf(yb) ? this.userAction.getState() === sh.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((yb => [sh.Ended, sh.Cancelled].includes(yb))).first().subscribe((() => this.cleanup())), this.startupTid = dU(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === sh.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === sh.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = dU(this.haltTid, (() => {
          this.userAction.getState() === sh.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var yb, bb;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (yb = this.allMonitorsSub) || void 0 === yb || yb.unsubscribe(), null === (bb = this.stateSub) || void 0 === bb || bb.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(yb) {
        void 0 !== yb && window.clearTimeout(yb)
      }
    };

    function Eh(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Db;
      var Wy;
      const {
        api: Uy,
        config: hy,
        internalLogger: fy
      } = yb, Zy = AU(null === (Wy = hy.userActionsInstrumentation) || void 0 === Wy ? void 0 : Wy.initialActivityTimeout, 100, bb);
      return {
        processUserEvent: function(yb) {
          var bb, Wy;
          const fy = null !== (bb = null === (Wy = hy.userActionsInstrumentation) || void 0 === Wy ? void 0 : Wy.dataAttributeName) && void 0 !== bb ? bb : NU,
            Zy = yb.target;
          if (!(Zy instanceof Element)) return;
          const cb = function(yb, bb) {
              let Wy = yb;
              for (; Wy;) {
                if (Wy.hasAttribute(bb)) return Wy;
                Wy = Wy.parentElement
              }
              return null
            }(Zy, xh(fy)),
            Py = function(yb, bb) {
              if (!yb) return;
              const Wy = function(yb) {
                  return xh(yb).slice(5).replace(/-(.)/g, ((yb, bb) => bb.toUpperCase()))
                }(bb),
                Uy = yb.dataset;
              for (const hy in Uy)
                if (hy === Wy) return Uy[hy]
            }(cb, fy);
          if (!cb || !Py) return;
          const oy = function(yb, bb) {
            const Wy = yb.getAttribute(function(yb) {
              const bb = xh(yb);
              return bb.endsWith("-name") ? `${bb.slice(0,-5)}-timeout` : `${bb}-timeout`
            }(bb));
            return null === Wy ? void 0 : Number(Wy)
          }(cb, fy);
          Uy.startUserAction(Py, {}, {
            triggerName: yb.type,
            initialActivityTimeout: oy
          })
        },
        processUserActionStarted: function(yb, Wy) {
          const Uy = yb,
            hy = AU(Wy, Zy, bb);
          new Sh(Uy, fy.debug, hy).attach()
        }
      }
    }
    const lh = "user_action_start",
      mf = {
        Normal: "normal",
        Critical: "critical"
      };
    var Ch = class {
        constructor() {
          this.buffer = []
        }
        addItem(yb) {
          this.buffer.push(yb)
        }
        flushBuffer(yb) {
          if (ib(yb))
            for (const bb of this.buffer) yb(bb);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Th = class extends mU {
        constructor(yb) {
          let {
            name: bb,
            parentId: Wy,
            trigger: Uy,
            transports: hy,
            attributes: fy,
            trackUserActionsExcludeItem: Zy,
            importance: cb = mf.Normal,
            pushEvent: Py
          } = yb;
          super(), this.name = bb, this.attributes = fy, this.id = lb(), this.trigger = Uy, this.parentId = null !== Wy && void 0 !== Wy ? Wy : this.id, this.trackUserActionsExcludeItem = Zy, this.importance = cb, this._pushEvent = Py, this._itemBuffer = new Ch, this._transports = hy, this._state = 0, this._start()
        }
        addItem(yb) {
          return 0 === this._state && (this._itemBuffer.addItem(yb), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = eb(), this._startTimeMono = qW())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((yb => {
            this._transports.execute(yb)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const yb = eb(),
            bb = qW() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((yb => {
            if (function(yb, bb) {
                return (null === bb || void 0 === bb ? void 0 : bb(yb)) || "measurement" === yb.type && "web-vitals" === yb.payload.type
              }(yb, this.trackUserActionsExcludeItem)) return void this._transports.execute(yb);
            const bb = Ab(Ab({}, yb), {}, {
              payload: Ab(Ab({}, yb.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(bb)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Ab({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: yb.toString(),
            userActionDuration: bb.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Hb(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: yb => (yb.action = {
              id: this.id,
              name: this.name
            }, yb)
          })
        }
        getState() {
          return this._state
        }
      };
    const Vh = new mU;

    function Jh(yb, bb) {
      return !!yb && (0 === (null === yb || void 0 === yb ? void 0 : yb.getState()) && (yb.addItem(bb), !0))
    }
    var gf = class extends bU {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = WW
        }
        initialize() {
          const {
            processUserEvent: yb,
            processUserActionStarted: bb
          } = Eh(Sy, (yb => this.logWarn(yb)));
          this._processUserEvent = yb, this._processKeydown = bb => {
            [" ", "Enter"].includes(bb.key) && yb(bb)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Vh.subscribe((yb => {
            let {
              type: Wy,
              userAction: Uy,
              initialActivityTimeout: hy
            } = yb;
            "user_action_start" === Wy && bb(Uy, hy)
          }))
        }
        destroy() {
          var yb;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (yb = this._userActionSub) || void 0 === yb || yb.unsubscribe()
        }
      },
      Gh = class extends bU {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = WW, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(yb) {
          const bb = {
            blockedURI: yb.blockedURI,
            columnNumber: yb.columnNumber,
            disposition: yb.disposition,
            documentURI: yb.documentURI,
            effectiveDirective: yb.effectiveDirective,
            lineNumber: yb.lineNumber,
            originalPolicy: yb.originalPolicy,
            referrer: yb.referrer,
            sample: yb.sample,
            sourceFile: yb.sourceFile,
            statusCode: yb.statusCode,
            violatedDirective: yb.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Hb(bb))
        }
      };
    var Oh = class extends mU {
      constructor(yb, bb) {
        var Wy, Uy, hy, fy;
        super(), this._tracking = !1, this.eventsObservable = yb, this._options = {
          inactivityMs: null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.inactivityMs) && void 0 !== Wy ? Wy : 100,
          drainTimeoutMs: null !== (Uy = null === bb || void 0 === bb ? void 0 : bb.drainTimeoutMs) && void 0 !== Uy ? Uy : 1e4,
          isOperationStart: null !== (hy = null === bb || void 0 === bb ? void 0 : bb.isOperationStart) && void 0 !== hy ? hy : () => {},
          isOperationEnd: null !== (fy = null === bb || void 0 === bb ? void 0 : bb.isOperationEnd) && void 0 !== fy ? fy : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((yb => {
          var bb;
          this._lastEventTime = qW(), null === (bb = this._currentEvents) || void 0 === bb || bb.push(yb);
          const Wy = this._options.isOperationStart(yb);
          var Uy;
          Wy && (null === (Uy = this._activeOperations) || void 0 === Uy || Uy.set(Wy, !0));
          const hy = this._options.isOperationEnd(yb);
          var fy;
          hy && (null === (fy = this._activeOperations) || void 0 === fy || fy.delete(hy));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = qW(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let yb;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), yb = this.hasActiveOperations() ? qW() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: yb
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Rh(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Rh(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(yb) {
        yb && clearTimeout(yb)
      }
    };

    function Rh(yb, bb, Wy) {
      return yb && clearTimeout(yb), yb = setTimeout((() => {
        bb()
      }), Wy)
    }
    let vf;
    const Mh = new Set,
      Yh = new Map;
    let Xh, nh, uh, rf, Hh, af, Fh, ph, Lh = !1;
    var Qh = class extends bU {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = WW
      }
      initialize() {
        const yb = Kh(),
          bb = Uh(),
          Wy = function() {
            function yb(yb, bb) {
              const Wy = null !== bb && void 0 !== bb ? bb : location.href;
              Wy !== nh && (Xh.notify({
                type: "url-change",
                from: nh,
                to: Wy,
                trigger: yb
              }), nh = Wy)
            }
            if (Xh || (Xh = new mU, nh = location.href), !Lh)
              if ("navigation" in window && "NavigateEvent" in window) {
                Fh = bb => {
                  try {
                    const Wy = null === bb || void 0 === bb ? void 0 : bb.destination;
                    (null === Wy || void 0 === Wy ? void 0 : Wy.sameDocument) && "string" === typeof Wy.url && yb("navigate", Wy.url)
                  } catch (Wy) {}
                }, window.navigation.addEventListener("navigate", Fh);
                const bb = window.NavigateEvent;
                bb && bb.prototype && "function" === typeof bb.prototype.intercept && (ph || (ph = bb.prototype.intercept), bb.prototype.intercept = function(bb) {
                  try {
                    const bb = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Wy = null === this || void 0 === this ? void 0 : this.destination;
                    bb && Wy && !1 === Wy.sameDocument && "string" === typeof Wy.url && yb("navigate-intercept", Wy.url)
                  } catch (Wy) {}
                  return ph.call(this, bb)
                }), Lh = !0
              } else uh || (uh = window.history.pushState), window.history.pushState = function() {
                for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
                const hy = uh.apply(window.history, Wy);
                return yb("pushState"), hy
              }, rf || (rf = window.history.replaceState), window.history.replaceState = function() {
                for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
                const hy = rf.apply(window.history, Wy);
                return yb("replaceState"), hy
              }, Hh = () => yb("popstate"), af = () => yb("hashchange"), window.addEventListener("popstate", Hh), window.addEventListener("hashchange", af), Lh = !0;
            return Xh
          }(),
          Uy = (hy = ["pointerdown", "keydown"], vf || (vf = new mU), hy.forEach((yb => {
            if (!Mh.has(yb)) {
              const bb = () => {
                vf.notify({
                  type: "interaction",
                  name: yb
                })
              };
              window.addEventListener(yb, bb), Mh.add(yb), Yh.set(yb, bb)
            }
          })), vf);
        var hy;
        const fy = new Oh((new mU).merge(yb, bb, Wy), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: yb => function(yb) {
            return yb.type === EW
          }(yb) ? yb.request.requestId : void 0,
          isOperationEnd: yb => function(yb) {
            return yb.type === lW
          }(yb) ? yb.request.requestId : void 0
        });
        fy.filter((yb => "tracking-ended" === yb.message)).subscribe((yb => {
          var bb, Wy;
          if ((null === (bb = yb.events) || void 0 === bb ? void 0 : bb.some((yb => "url-change" === yb.type))) && (null === (Wy = yb.events) || void 0 === Wy ? void 0 : Wy.some((yb => "dom-mutation" === yb.type)))) {
            var Uy;
            const bb = null === (Uy = yb.events) || void 0 === Uy ? void 0 : Uy.find((yb => "url-change" === yb.type));
            Sy.api.pushEvent("faro.navigation", {
              fromUrl: null === bb || void 0 === bb ? void 0 : bb.from,
              toUrl: null === bb || void 0 === bb ? void 0 : bb.to,
              sameDocument: String(!0),
              duration: yb.duration
            })
          }
        })), Uy.subscribe((() => {
          fy.startTracking()
        }))
      }
    };

    function jf() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const bb = [new gf, new uW, new nU, new UW, new HW, new Qh];
      return !1 !== yb.enablePerformanceInstrumentation && bb.unshift(new kh), !1 !== yb.enableContentSecurityPolicyInstrumentation && bb.push(new Gh), !1 !== yb.captureConsole && bb.push(new XW), bb
    }
    var Dh = Wy(7221);
    let tf, wh;

    function kf() {
      const yb = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return tf === yb && wh || (wh = new Dh.UAParser(yb).getResult(), tf = yb), wh
    }
    const Nh = () => {
        const {
          browser: yb,
          os: bb,
          ua: Wy
        } = kf(), {
          name: Uy,
          version: hy
        } = yb, {
          name: fy,
          version: Zy
        } = bb, cb = navigator.language, Py = Wy.includes("Mobi"), oy = function() {
          if (!Uy || !hy) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Uy && void 0 !== Uy ? Uy : rU,
            version: null !== hy && void 0 !== hy ? hy : rU,
            os: `${null!==fy&&void 0!==fy?fy:rU} ${null!==Zy&&void 0!==Zy?Zy:rU}`,
            userAgent: null !== Wy && void 0 !== Wy ? Wy : rU,
            language: null !== cb && void 0 !== cb ? cb : rU,
            mobile: Py,
            brands: null !== oy && void 0 !== oy ? oy : rU,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      zf = () => {
        const {
          name: yb,
          version: bb
        } = kf().os;
        if (!yb && !bb) return {};
        const Wy = {};
        return yb && (Wy.name = yb), bb && (Wy.version = bb), {
          os: Wy
        }
      };

    function Ih(yb) {
      var bb, Wy, Uy;
      return {
        id: null !== (bb = null === (Wy = Sy.config) || void 0 === Wy || null === (Wy = Wy.sessionTracking) || void 0 === Wy || null === (Uy = Wy.generateSessionId) || void 0 === Uy ? void 0 : Uy.call(Wy)) && void 0 !== bb ? bb : lb(),
        attributes: yb
      }
    }
    const xf = () => ({
      sdk: {
        name: "faro-web",
        version: WW
      }
    });
    var Ah = class extends yU {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let dh = function(yb) {
      return yb.EXCEPTION = "exception", yb.LOG = "log", yb.MEASUREMENT = "measurement", yb.TRACE = "trace", yb.EVENT = "event", yb
    }({});
    const yZ = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function bZ(yb, bb) {
      var Wy, Uy;
      if (void 0 === bb) return yb;
      if (void 0 === yb) return {
        resourceSpans: bb
      };
      const hy = null === (Wy = yb.resourceSpans) || void 0 === Wy ? void 0 : Wy[0];
      if (void 0 === hy) return yb;
      const fy = (null === hy || void 0 === hy ? void 0 : hy.scopeSpans) || [],
        Zy = (null === bb || void 0 === bb || null === (Uy = bb[0]) || void 0 === Uy ? void 0 : Uy.scopeSpans) || [];
      return Ab(Ab({}, yb), {}, {
        resourceSpans: [Ab(Ab({}, hy), {}, {
          scopeSpans: [...fy, ...Zy]
        })]
      })
    }

    function Wf(yb) {
      let bb = {
        meta: {}
      };
      return void 0 !== yb[0] && (bb.meta = yb[0].meta), yb.forEach((yb => {
        switch (yb.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Wy = yZ[yb.type],
              Uy = bb[Wy];
            bb = Ab(Ab({}, bb), {}, {
              [Wy]: void 0 === Uy ? [yb.payload] : [...Uy, yb.payload]
            });
            break
          }
          case "trace":
            bb = Ab(Ab({}, bb), {}, {
              traces: bZ(bb.traces, yb.payload.resourceSpans)
            })
        }
      })), bb
    }
    var Uf = class extends Ah {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = yb, this.name = "@grafana/faro-web-sdk:transport-console", this.version = WW
      }
      send(yb) {
        var bb;
        return this.unpatchedConsole[null !== (bb = this.options.level) && void 0 !== bb ? bb : CW.DEBUG]("New event", Wf([yb]))
      }
    };
    const hf = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ff = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Zf = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      cZ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Pf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      of = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Bf(yb) {
      let {
        weekday: bb,
        day: Wy,
        month: Uy,
        year: hy,
        hour: fy,
        minute: Zy,
        second: cb
      } = yb;
      if (hy < 1900 || Wy < 1 || fy > 23 || Zy > 59 || cb > 60) return;
      const Py = 60 === cb,
        oy = new Date(0);
      return oy.setUTCFullYear(hy, Uy, Wy), oy.setUTCHours(fy, Zy, Py ? 59 : cb, 0), oy.getUTCDay() === bb && oy.getUTCDate() === Wy && oy.getUTCMonth() === Uy && oy.getUTCFullYear() === hy && oy.getUTCHours() === fy && oy.getUTCMinutes() === Zy && oy.getUTCSeconds() === (Py ? 59 : cb) ? oy.getTime() + (Py ? 1e3 : 0) : void 0
    }
    var Kf = class {
      constructor(yb) {
        this.options = yb, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var yb = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const bb = this.sequence++;
        let Wy = !1;
        return {
          deliver: function() {
            var Wy = th((function*(Wy) {
              const Uy = yb.options.getNow();
              let hy, fy = 0;
              for (;;) {
                var Zy, cb, Py;
                const oy = yb.options.retry.maxAttempts - fy,
                  By = yield yb.runAttempt((() => Wy(oy, yb.unloading)), fy > 0);
                if (fy += By.attemptsMade, "success" === By.kind) return {
                  kind: "success",
                  attempts: fy,
                  elapsedTimeMs: yb.options.getNow() - Uy
                };
                if (hy = By.failure, "terminal" === By.kind || yb.unloading) return {
                  kind: "terminal",
                  attempts: fy,
                  elapsedTimeMs: yb.options.getNow() - Uy,
                  failure: hy
                };
                if (fy >= yb.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: fy,
                  elapsedTimeMs: yb.options.getNow() - Uy,
                  failure: hy,
                  reason: "retries-exhausted"
                };
                if (null != By.retryAfterMs && By.retryAfterMs > yb.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: fy,
                  elapsedTimeMs: yb.options.getNow() - Uy,
                  failure: hy,
                  reason: "retry-after-too-long"
                };
                const Ky = Math.min(null !== (Zy = By.retryAfterMs) && void 0 !== Zy ? Zy : yb.options.retry.initialBackoffMs * Math.pow(yb.options.retry.backoffMultiplier, fy - 1), yb.options.retry.maxBackoffMs);
                if (null === (cb = (Py = yb.options).onRetry) || void 0 === cb || cb.call(Py, Ky, fy + 1), yield yb.waitForTurn(bb, Ky)) {
                  const bb = yb.options.retry.maxAttempts - fy,
                    hy = yield yb.runAttempt((() => Wy(bb, !0)));
                  return fy += hy.attemptsMade, {
                    kind: "success" === hy.kind ? "success" : "terminal",
                    attempts: fy,
                    elapsedTimeMs: yb.options.getNow() - Uy,
                    failure: "success" === hy.kind ? void 0 : hy.failure
                  }
                }
              }
            }));
            return function(yb) {
              return Wy.apply(this, arguments)
            }
          }(),
          release: () => {
            Wy || (Wy = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const yb = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const bb of yb) bb.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Wy, Uy) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const bb = () => {
                this.inProgress--, this.runNextAttempt()
              };
              yb().then((yb => {
                bb(), Wy(yb)
              }), (yb => {
                bb(), Uy(yb)
              }))
            },
            isRedelivery: bb
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const yb = this.options.getNow(),
            bb = this.attemptQueue.findIndex((bb => {
              let {
                isRedelivery: Wy
              } = bb;
              return this.unloading || !Wy || yb >= this.nextSendAt
            }));
          if (bb < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - yb)));
          const [Wy] = this.attemptQueue.splice(bb, 1);
          Wy.isRedelivery && !this.unloading && (this.nextSendAt = yb + 1), Wy.run()
        }
      }
      waitForTurn(yb, bb) {
        const Wy = Math.min(bb * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((bb => {
          this.waiting.push({
            sequence: yb,
            readyAt: this.options.getNow() + Wy,
            resolve: bb
          }), this.waiting.sort(((yb, bb) => yb.readyAt === bb.readyAt ? yb.sequence - bb.sequence : yb.readyAt - bb.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const yb = this.waiting[0],
          bb = yb.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const bb = this.waiting.indexOf(yb);
          bb >= 0 && this.waiting.splice(bb, 1), yb.resolve(!1), this.scheduleNext()
        }), Math.max(0, bb - this.options.getNow()))
      }
    };

    function ef(yb, bb) {
      if (null == yb) return {};
      var Wy, Uy, hy = function(yb, bb) {
        if (null == yb) return {};
        var Wy = {};
        for (var Uy in yb)
          if ({}.hasOwnProperty.call(yb, Uy)) {
            if (bb.includes(Uy)) continue;
            Wy[Uy] = yb[Uy]
          } return Wy
      }(yb, bb);
      if (Object.getOwnPropertySymbols) {
        var fy = Object.getOwnPropertySymbols(yb);
        for (Uy = 0; Uy < fy.length; Uy++) Wy = fy[Uy], bb.includes(Wy) || {}.propertyIsEnumerable.call(yb, Wy) && (hy[Wy] = yb[Wy])
      }
      return hy
    }

    function qZ(yb) {
      const {
        size: bb,
        concurrency: Wy
      } = yb, Uy = [];
      let hy = 0;
      const fy = () => {
        if (hy < Wy && Uy.length) {
          const {
            producer: yb,
            resolve: bb,
            reject: Wy
          } = Uy.shift();
          hy++, yb().then((yb => {
            hy--, fy(), bb(yb)
          }), (yb => {
            hy--, fy(), Wy(yb)
          }))
        }
      };
      return {
        add: yb => {
          if (Uy.length + hy >= bb) throw new Error("Task buffer full");
          return new Promise(((bb, Wy) => {
            Uy.push({
              producer: yb,
              resolve: bb,
              reject: Wy
            }), fy()
          }))
        }
      }
    }
    const sf = ["headers"],
      Sf = ["keepalive", "signal"],
      Ef = new Set([408, 425, 429, 500, 502, 503, 504]),
      lf = new Set([429, 503]);
    let mZ = 0,
      Cf = 0;
    var Tf = class extends Error {};
    var Vf = class extends Ah {
      constructor(yb) {
        var bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly;
        super(), this.options = yb, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = WW, this.pendingCustomSends = 0, this.getNow = null !== (bb = yb.getNow) && void 0 !== bb ? bb : Date.now, this.requestTimeoutMs = null !== (Wy = yb.requestTimeoutMs) && void 0 !== Wy ? Wy : 1e4, this.compressionEnabled = null !== (Uy = yb.requestCompression) && void 0 !== Uy && Uy && "undefined" !== typeof CompressionStream, yb.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Kf({
          bufferSize: null !== (hy = yb.bufferSize) && void 0 !== hy ? hy : 30,
          concurrency: null !== (fy = yb.concurrency) && void 0 !== fy ? fy : 5,
          retry: {
            maxAttempts: null !== (Zy = null === (cb = yb.retry) || void 0 === cb ? void 0 : cb.maxAttempts) && void 0 !== Zy ? Zy : 3,
            initialBackoffMs: null !== (Py = null !== (oy = null === (By = yb.retry) || void 0 === By ? void 0 : By.initialBackoffMs) && void 0 !== oy ? oy : yb.defaultRateLimitBackoffMs) && void 0 !== Py ? Py : 1e3,
            maxBackoffMs: null !== (Ky = null === (ey = yb.retry) || void 0 === ey ? void 0 : ey.maxBackoffMs) && void 0 !== Ky ? Ky : 3e4,
            backoffMultiplier: null !== (qb = null === (sy = yb.retry) || void 0 === sy ? void 0 : sy.backoffMultiplier) && void 0 !== qb ? qb : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Sy = yb.getRandom) && void 0 !== Sy ? Sy : Math.random,
          onRetry: (yb, bb) => {
            this.logDebug(`Retrying failed request after ${yb}ms. Attempt ${bb}.`)
          }
        }), this.customPromiseBuffer = qZ({
          size: null !== (Ey = yb.bufferSize) && void 0 !== Ey ? Ey : 30,
          concurrency: null !== (ly = yb.concurrency) && void 0 !== ly ? ly : 5
        }), this.defaultPromiseBuffer = {
          add: yb => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(yb);
            const bb = this.deliveryQueue.reserve();
            if (!bb) throw new Error("Task buffer full");
            return this.runBufferedTask(bb, yb)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (yb => {
          yb.persisted && this.deliveryQueue.resume()
        })))
      }
      send(yb) {
        var bb = this;
        return th((function*() {
          const Wy = bb.promiseBuffer;
          if (Wy !== bb.defaultPromiseBuffer || Wy.add !== bb.defaultBufferAdd) {
            bb.pendingCustomSends++;
            try {
              yield Wy.add((() => bb.deliver(yb)))
            } catch (Uy) {
              bb.logError("Permanent delivery failure", {
                error: Uy,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              bb.pendingCustomSends--
            }
          } else yield bb.deliver(yb)
        }))()
      }
      runBufferedTask(yb, bb) {
        return th((function*() {
          let Wy;
          try {
            return yield yb.deliver(th((function*() {
              return Wy = yield bb(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Wy
          } finally {
            yb.release()
          }
        }))()
      }
      deliver(yb) {
        var bb = this;
        return th((function*() {
          const Wy = bb.deliveryQueue.reserve();
          if (Wy) try {
            const Uy = yield bb.prepareRequest(yb), hy = yield Wy.deliver(((yb, Wy) => bb.performAttempt(Uy, yb, Wy)));
            "terminal" === hy.kind && bb.logError("retries-exhausted" === hy.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Bb(Bb({}, hy.failure), {}, {
              reason: hy.reason,
              attempts: hy.attempts,
              elapsedTimeMs: hy.elapsedTimeMs
            }))
          } catch (Uy) {
            bb.logError("Permanent delivery failure", {
              error: Uy,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Wy.release()
          } else bb.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var yb;
        return [this.options.url].concat(null !== (yb = this.config.ignoreUrls) && void 0 !== yb ? yb : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(yb) {
        var bb = this;
        return th((function*() {
          var Wy, Uy;
          const hy = Wf(yb),
            fy = null === (Wy = hy.meta.session) || void 0 === Wy ? void 0 : Wy.id,
            Zy = JSON.stringify(hy),
            cb = null !== (Uy = bb.options.requestOptions) && void 0 !== Uy ? Uy : {},
            {
              headers: Py = {}
            } = cb,
            oy = ef(cb, sf),
            {
              keepalive: By,
              signal: Ky
            } = oy,
            ey = ef(oy, Sf),
            qb = {};
          for (const [yb, bb] of Object.entries(Py)) qb[yb] = "function" === typeof bb ? yield bb(): bb;
          let sy = Zy,
            Sy = function(yb) {
              return "undefined" === typeof TextEncoder ? yb.length : (new TextEncoder).encode(yb).byteLength
            }(Zy);
          const Ey = {};
          return bb.compressionEnabled && (sy = yield bb.compress(Zy), Sy = sy.size, Ey["Content-Encoding"] = "gzip"), {
            bodySize: Sy,
            sessionId: fy,
            requestInit: Bb({
              method: "POST",
              headers: Bb(Bb(Bb(Bb(Bb({
                "Content-Type": "application/json"
              }, Ey), qb), bb.options.apiKey ? {
                "x-api-key": bb.options.apiKey
              } : {}), fy ? {
                "x-faro-session-id": fy
              } : {}), {}, {
                "Idempotency-Key": lb(20)
              }),
              body: sy
            }, ey)
          }
        }))()
      }
      performAttempt(yb, bb, Wy) {
        var Uy = this;
        return th((function*() {
          var hy;
          const fy = null === (hy = Uy.options.requestOptions) || void 0 === hy ? void 0 : hy.signal;
          if (null === fy || void 0 === fy ? void 0 : fy.aborted) return {
            kind: "terminal",
            failure: {
              error: fy.reason
            },
            attemptsMade: 0
          };
          let Zy = 0;
          try {
            var cb;
            const hy = yield Uy.fetchWithKeepaliveFallback(yb.requestInit, yb.bodySize, !!Wy || (null === (cb = Uy.options.requestOptions) || void 0 === cb ? void 0 : cb.keepalive), bb, (() => Zy++));
            if (Uy.handleResponse(hy, yb.sessionId), hy.status >= 200 && hy.status < 300) return {
              kind: "success",
              attemptsMade: Zy
            };
            const fy = {
              status: hy.status
            };
            return !Ef.has(hy.status) || Wy ? {
              kind: "terminal",
              failure: fy,
              attemptsMade: Zy
            } : {
              kind: "retry",
              failure: fy,
              attemptsMade: Zy,
              retryAfterMs: lf.has(hy.status) ? Uy.getRetryAfterDelayMs(hy) : void 0
            }
          } catch (Py) {
            const yb = {
              error: Py
            };
            return (null === fy || void 0 === fy ? void 0 : fy.aborted) || !Uy.isFetchNetworkError(Py) || Wy ? {
              kind: "terminal",
              failure: yb,
              attemptsMade: Zy
            } : {
              kind: "retry",
              failure: yb,
              attemptsMade: Zy
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(yb, bb, Wy, Uy, hy) {
        var fy = this;
        return th((function*() {
          const Zy = fy.getNow(),
            cb = fy.reserveKeepalive(bb, Wy);
          try {
            return yield fy.fetchWithTimeout(Bb(Bb({}, yb), {}, {
              keepalive: cb.keepalive
            }), fy.requestTimeoutMs, hy)
          } catch (oy) {
            var Py;
            if (cb.keepalive && Uy > 1 && fy.isFetchNetworkError(oy) && !(oy instanceof Tf) && !(null === (Py = fy.options.requestOptions) || void 0 === Py || null === (Py = Py.signal) || void 0 === Py ? void 0 : Py.aborted)) {
              fy.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const bb = fy.requestTimeoutMs - (fy.getNow() - Zy);
              return fy.fetchWithTimeout(Bb(Bb({}, yb), {}, {
                keepalive: !1
              }), bb, hy)
            }
            throw oy
          } finally {
            cb.release()
          }
        }))()
      }
      fetchWithTimeout(yb, bb, Wy) {
        var Uy = this;
        return th((function*() {
          var hy;
          const fy = null === (hy = Uy.options.requestOptions) || void 0 === hy ? void 0 : hy.signal;
          if (Uy.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Wy(), fetch(Uy.options.url, Bb(Bb({}, yb), {}, {
            signal: fy
          }));
          if (bb <= 0) throw new Tf("Request timed out");
          const Zy = new AbortController,
            cb = () => Zy.abort(null === fy || void 0 === fy ? void 0 : fy.reason);
          null === fy || void 0 === fy || fy.addEventListener("abort", cb, {
            once: !0
          });
          let Py = !1;
          const oy = setTimeout((() => {
            Py = !0, Zy.abort()
          }), bb);
          try {
            return Wy(), yield fetch(Uy.options.url, Bb(Bb({}, yb), {}, {
              signal: Zy.signal
            }))
          } catch (By) {
            if (Py && !(null === fy || void 0 === fy ? void 0 : fy.aborted)) throw new Tf("Request timed out");
            throw By
          } finally {
            clearTimeout(oy), null === fy || void 0 === fy || fy.removeEventListener("abort", cb)
          }
        }))()
      }
      getRetryAfterDelayMs(yb) {
        const bb = yb.headers.get("Retry-After");
        if (!bb) return;
        if (/^\d+$/.test(bb)) {
          const yb = 1e3 * Number(bb);
          return Number.isFinite(yb) ? yb : Number.POSITIVE_INFINITY
        }
        const Wy = this.getNow(),
          Uy = function(yb, bb) {
            const Wy = hf.exec(yb);
            if (Wy) {
              const [, yb, bb, Uy, hy, fy, Zy, cb] = Wy;
              return Bf({
                weekday: cZ.indexOf(yb),
                day: Number(bb),
                month: of.indexOf(Uy),
                year: Number(hy),
                hour: Number(fy),
                minute: Number(Zy),
                second: Number(cb)
              })
            }
            const Uy = ff.exec(yb);
            if (Uy) {
              const [, yb, Wy, Zy, cb, Py, oy, By] = Uy, Ky = new Date(bb);
              if (Number.isNaN(Ky.getTime())) return;
              const ey = Ky.getUTCFullYear();
              let qb = 100 * Math.floor(ey / 100) + Number(cb);
              qb < ey && (qb += 100);
              const sy = of.indexOf(Zy),
                Sy = {
                  month: sy,
                  day: Number(Wy),
                  hour: Number(Py),
                  minute: Number(oy),
                  second: Number(By),
                  millisecond: 0
                },
                Ey = {
                  month: Ky.getUTCMonth(),
                  day: Ky.getUTCDate(),
                  hour: Ky.getUTCHours(),
                  minute: Ky.getUTCMinutes(),
                  second: Ky.getUTCSeconds(),
                  millisecond: Ky.getUTCMilliseconds()
                };
              return (qb > ey + 50 || qb === ey + 50 && (fy = Ey, ((hy = Sy).month - fy.month || hy.day - fy.day || hy.hour - fy.hour || hy.minute - fy.minute || hy.second - fy.second || hy.millisecond - fy.millisecond) > 0)) && (qb -= 100), Bf({
                weekday: Pf.indexOf(yb),
                day: Number(Wy),
                month: sy,
                year: qb,
                hour: Number(Py),
                minute: Number(oy),
                second: Number(By)
              })
            }
            var hy, fy;
            const Zy = Zf.exec(yb);
            if (!Zy) return;
            const [, cb, Py, oy, By, Ky, ey, qb, sy] = Zy;
            return Bf({
              weekday: cZ.indexOf(cb),
              day: Number(null !== oy && void 0 !== oy ? oy : By),
              month: of.indexOf(Py),
              year: Number(sy),
              hour: Number(Ky),
              minute: Number(ey),
              second: Number(qb)
            })
          }(bb, Wy);
        return null == Uy ? void 0 : Math.max(0, Uy - Wy)
      }
      reserveKeepalive(yb, bb) {
        if (!1 === bb || yb > 6e4 || mZ + yb > 6e4 || Cf >= 9) return {
          keepalive: !1,
          release: Db
        };
        mZ += yb, Cf++;
        let Wy = !1;
        return {
          keepalive: !0,
          release: () => {
            Wy || (Wy = !0, mZ -= yb, Cf--)
          }
        }
      }
      handleResponse(yb, bb) {
        202 === yb.status && "invalid" === yb.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), bb), yb.text().catch(Db)
      }
      isFetchNetworkError(yb) {
        return yb instanceof TypeError || yb instanceof Tf || yb instanceof DOMException && "AbortError" === yb.name
      }
      compress(yb) {
        return th((function*() {
          const bb = [],
            Wy = new ReadableStream({
              start(bb) {
                bb.enqueue((new TextEncoder).encode(yb)), bb.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: yb,
              value: Uy
            } = yield Wy.read();
            if (yb) return new Blob(bb);
            bb.push(Uy)
          }
        }))()
      }
      extendFaroSession(yb, bb, Wy) {
        var Uy, hy;
        const fy = yb.sessionTracking;
        if (!(null === fy || void 0 === fy ? void 0 : fy.enabled)) return void bb("Session expired.");
        const {
          fetchUserSession: Zy,
          storeUserSession: cb
        } = jW(fy), Py = null === (Uy = this.metas.value.session) || void 0 === Uy ? void 0 : Uy.id, oy = null === (hy = Zy()) || void 0 === hy ? void 0 : hy.sessionId;
        Wy && Wy === Py && Wy === oy ? (Mb({
          fetchUserSession: Zy,
          storeUserSession: cb
        })({
          forceSessionExtend: !0
        }), bb("Session expired; created new session.")) : bb("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Jf = () => {
      const yb = window.k6;
      return {
        k6: Bb({
          isK6Browser: !0
        }, (null === yb || void 0 === yb ? void 0 : yb.testRunId) && {
          testRunId: null === yb || void 0 === yb ? void 0 : yb.testRunId
        })
      }
    };
    let gZ, Gf;

    function Of() {
      let {
        generatePageId: yb,
        initialPageMeta: bb
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Wy = location.href;
        return ib(yb) && gZ !== Wy && (gZ = Wy, Gf = yb(location)), {
          page: Bb(Bb({
            url: Wy
          }, Gf ? {
            id: Gf
          } : {}), bb)
        }
      }
    }

    function Rf() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : db,
        bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Wy = wb;
      return bb > 0 && (Wy.error = bb >= 1 ? function() {
        for (var bb = arguments.length, Uy = new Array(bb), hy = 0; hy < bb; hy++) Uy[hy] = arguments[hy];
        yb.error(`${Wy.prefix}\n`, ...Uy)
      } : Db, Wy.warn = bb >= 2 ? function() {
        for (var bb = arguments.length, Uy = new Array(bb), hy = 0; hy < bb; hy++) Uy[hy] = arguments[hy];
        yb.warn(`${Wy.prefix}\n`, ...Uy)
      } : Db, Wy.info = bb >= 3 ? function() {
        for (var bb = arguments.length, Uy = new Array(bb), hy = 0; hy < bb; hy++) Uy[hy] = arguments[hy];
        yb.info(`${Wy.prefix}\n`, ...Uy)
      } : Db, Wy.debug = bb >= 4 ? function() {
        for (var bb = arguments.length, Uy = new Array(bb), hy = 0; hy < bb; hy++) Uy[hy] = arguments[hy];
        yb.debug(`${Wy.prefix}\n`, ...Uy)
      } : Db), Wy
    }
    const vZ = "faro",
      iZ = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Mf = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Yf(yb) {
      var bb, Wy, hy, fy, Zy, cb;
      const Py = [],
        By = Rf(yb.unpatchedConsole, yb.internalLoggerLevel);
      yb.transports ? ((yb.url || yb.apiKey) && By.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Py.push(...yb.transports)) : yb.url ? Py.push(new Vf({
        url: yb.url,
        apiKey: yb.apiKey,
        requestCompression: yb.requestCompression
      })) : By.error('either "url" or "transports" must be defined');
      const {
        dedupe: Ky = !0,
        eventDomain: ey = Uy,
        globalObjectKey: qb = vZ,
        instrumentations: sy = jf(),
        internalLoggerLevel: Sy = kW,
        isolate: Ey = !1,
        logArgsSerializer: ly = YW,
        metas: mb = nf(yb),
        paused: Cy = !1,
        preventGlobalExposure: Ty = !1,
        unpatchedConsole: Vy = db,
        url: Jy,
        experimental: gb
      } = yb, Gy = ef(yb, Mf), Oy = null !== (bb = null === gb || void 0 === gb ? void 0 : gb.trackNavigation) && void 0 !== bb && bb, Ry = {
        dataAttributeName: xh(null !== (Wy = null === (hy = yb.userActionsInstrumentation) || void 0 === hy ? void 0 : hy.dataAttributeName) && void 0 !== Wy ? Wy : NU),
        excludeItem: null === (fy = yb.userActionsInstrumentation) || void 0 === fy ? void 0 : fy.excludeItem,
        initialActivityTimeout: AU(null === (Zy = yb.userActionsInstrumentation) || void 0 === Zy ? void 0 : Zy.initialActivityTimeout, 100, (yb => By.warn(yb)))
      };
      return Bb(Bb({}, Gy), {}, {
        batching: Bb(Bb({}, iZ), yb.batching),
        dedupe: Ky,
        globalObjectKey: qb,
        instrumentations: Xf(sy, yb),
        internalLoggerLevel: Sy,
        isolate: Ey,
        logArgsSerializer: ly,
        metas: mb,
        parseStacktrace: SW,
        paused: Cy,
        preventGlobalExposure: Ty,
        transports: Py,
        unpatchedConsole: Vy,
        eventDomain: ey,
        ignoreUrls: [...null !== (cb = yb.ignoreUrls) && void 0 !== cb ? cb : [], ...Jy ? [Jy] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Bb(Bb(Bb({}, oy), yb.sessionTracking), uf({
          trackGeolocation: yb.trackGeolocation,
          sessionTracking: yb.sessionTracking
        })),
        userActionsInstrumentation: Ry,
        experimental: {
          trackNavigation: Oy
        }
      })
    }

    function Xf(yb, bb) {
      let {
        experimental: Wy
      } = bb;
      var Uy;
      const hy = null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.trackNavigation) && void 0 !== Uy && Uy;
      return yb.filter((yb => !("@grafana/faro-web-sdk:instrumentation-navigation" === yb.name && !hy)))
    }

    function nf(yb) {
      var bb, Wy, Uy;
      const {
        page: hy,
        generatePageId: fy
      } = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.pageTracking) && void 0 !== bb ? bb : {}, Zy = [Nh, zf, Of({
        generatePageId: fy,
        initialPageMeta: hy
      }), ...null !== (Wy = yb.metas) && void 0 !== Wy ? Wy : [], xf];
      return vb(null === (Uy = window) || void 0 === Uy ? void 0 : Uy.k6) ? [...Zy, Jf] : Zy
    }

    function uf(yb) {
      let {
        trackGeolocation: bb,
        sessionTracking: Wy
      } = yb;
      var Uy;
      const hy = {};
      return Oy(bb) && (hy.geoLocationTrackingEnabled = bb), kb(hy) ? {} : {
        session: Bb(Bb({}, null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.session) && void 0 !== Uy ? Uy : {}), {}, {
          overrides: hy
        })
      }
    }
    const rZ = new WeakSet;

    function Hf(yb) {
      return rZ.add(yb), yb
    }

    function aZ(yb, bb) {
      if (yb.capture) return Hf(yb.capture(bb));
      const Wy = Hf(yb.value);
      return null === bb || void 0 === bb || bb(), Wy
    }

    function Ff(yb) {
      const bb = `__faroBundleId_${yb}`,
        Wy = null === By || void 0 === By ? void 0 : By[bb];
      if ("string" === typeof Wy && "" !== Wy) return Wy;
      const Uy = "undefined" !== typeof window ? window[bb] : void 0;
      return "string" === typeof Uy && "" !== Uy ? Uy : void 0
    }

    function pf(yb) {
      var bb, Wy;
      const Uy = yb.config.app.name,
        hy = Uy ? function(yb) {
          return null === By || void 0 === By ? void 0 : By[`__faroGitHash_${yb}`]
        }(Uy) : void 0,
        fy = {
          sdk: {
            version: WW,
            name: "faro"
          },
          app: Ab({
            bundleId: Uy && Ff(Uy)
          }, void 0 !== hy ? {
            gitHash: hy
          } : {})
        },
        Zy = null === (bb = yb.config.sessionTracking) || void 0 === bb ? void 0 : bb.session;
      Zy && yb.api.setSession(Zy), yb.config.app && (fy.app = Ab(Ab({}, yb.config.app), fy.app)), yb.config.user && (fy.user = yb.config.user), yb.config.view && (fy.view = yb.config.view), yb.metas.add(fy, ...null !== (Wy = yb.config.metas) && void 0 !== Wy ? Wy : [])
    }
    var Lf = class {
      constructor(yb, bb) {
        var Wy, Uy;
        this.signalBuffer = [], this.itemLimit = null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.itemLimit) && void 0 !== Wy ? Wy : 50, this.sendTimeout = null !== (Uy = null === bb || void 0 === bb ? void 0 : bb.sendTimeout) && void 0 !== Uy ? Uy : 250, this.paused = (null === bb || void 0 === bb ? void 0 : bb.paused) || !1, this.sendFn = yb, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(yb) {
        this.paused || (this.signalBuffer.push(yb), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(yb) {
        const bb = new Map;
        return yb.forEach((yb => {
          const Wy = JSON.stringify(yb.meta);
          let Uy = bb.get(Wy);
          Uy = void 0 === Uy ? [yb] : [...Uy, yb], bb.set(Wy, Uy)
        })), Array.from(bb.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const yb = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(yb).forEach(this.sendFn)
        } catch (bb) {
          throw this.signalBuffer = [...yb, ...this.signalBuffer], this.trimBufferToLimit(), bb
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Qf(yb, bb, Wy, Uy) {
      var hy;
      bb.debug("Initializing transports");
      const fy = [];
      let Zy = [];
      const cb = yb => {
        let bb = yb;
        for (const Uy of Zy) {
          const yb = bb.map(Uy).filter(Boolean);
          if (0 === yb.length) return [];
          bb = jZ(yb, Wy)
        }
        return bb
      };
      let Py;
      (null === (hy = Wy.batching) || void 0 === hy ? void 0 : hy.enabled) && (Py = new Lf((yb => {
        const Wy = cb(yb);
        if (0 !== Wy.length)
          for (const Uy of fy) bb.debug(`Transporting item using ${Uy.name}\n`, Wy), Uy.isBatched() && Uy.send(Wy)
      }), {
        sendTimeout: Wy.batching.sendTimeout,
        itemLimit: Wy.batching.itemLimit,
        paused: Wy.paused
      }));
      return {
        add: function() {
          bb.debug("Adding transports");
          for (var hy = arguments.length, Zy = new Array(hy), cb = 0; cb < hy; cb++) Zy[cb] = arguments[cb];
          Zy.forEach((hy => {
            bb.debug(`Adding "${hy.name}" transport`), fy.some((yb => yb === hy)) ? bb.warn(`Transport ${hy.name} is already added`) : (hy.unpatchedConsole = yb, hy.internalLogger = bb, hy.config = Wy, hy.metas = Uy, fy.push(hy))
          }))
        },
        addBeforeSendHooks: function() {
          bb.debug("Adding beforeSendHooks\n", Zy);
          for (var yb = arguments.length, Wy = new Array(yb), Uy = 0; Uy < yb; Uy++) Wy[Uy] = arguments[Uy];
          Wy.forEach((yb => {
            yb && Zy.push(yb)
          }))
        },
        getBeforeSendHooks: () => [...Zy],
        execute: yb => {
          var hy;
          if (!Wy.paused && Lb(Uy).shouldCapture()) {
            if (Ky = yb.meta, !rZ.has(Ky)) {
              var Zy, oy, By;
              const bb = null === (Zy = Uy.value.session) || void 0 === Zy ? void 0 : Zy.id,
                hy = aZ(Uy);
              if (Wy.paused) return;
              const fy = Ab({}, yb.meta);
              (null === (oy = fy.session) || void 0 === oy ? void 0 : oy.id) === bb && (null === (By = hy.session) || void 0 === By ? void 0 : By.id) !== bb && (void 0 === hy.session ? delete fy.session : fy.session = hy.session), yb = Ab(Ab({}, yb), {}, {
                meta: Hf(fy)
              })
            }
            var Ky;
            (null === (hy = Wy.batching) || void 0 === hy ? void 0 : hy.enabled) && (null === Py || void 0 === Py || Py.addItem(yb)), (yb => {
              var Uy;
              if ((null === (Uy = Wy.batching) || void 0 === Uy ? void 0 : Uy.enabled) && fy.every((yb => yb.isBatched()))) return;
              const [hy] = cb([yb]);
              if (void 0 !== hy)
                for (const cb of fy) {
                  var Zy;
                  bb.debug(`Transporting item using ${cb.name}\n`, hy), cb.isBatched() ? (null === (Zy = Wy.batching) || void 0 === Zy ? void 0 : Zy.enabled) || cb.send([hy]) : cb.send(hy)
                }
            })(yb)
          }
        },
        isPaused: () => Wy.paused,
        pause: () => {
          bb.debug("Pausing transports"), null === Py || void 0 === Py || Py.pause(), Wy.paused = !0
        },
        remove: function() {
          bb.debug("Removing transports");
          for (var yb = arguments.length, Wy = new Array(yb), Uy = 0; Uy < yb; Uy++) Wy[Uy] = arguments[Uy];
          Wy.forEach((yb => {
            bb.debug(`Removing "${yb.name}" transport`);
            const Wy = fy.indexOf(yb); - 1 !== Wy ? fy.splice(Wy, 1) : bb.warn(`Transport "${yb.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var yb = arguments.length, Wy = new Array(yb), Uy = 0; Uy < yb; Uy++) Wy[Uy] = arguments[Uy];
          bb.debug("Removing beforeSendHooks"), Zy = Zy.filter((yb => !Wy.includes(yb)))
        },
        get transports() {
          return [...fy]
        },
        unpause: () => {
          bb.debug("Unpausing transports"), null === Py || void 0 === Py || Py.start(), Wy.paused = !1
        }
      }
    }

    function jZ(yb, bb) {
      if (bb.preserveOriginalError)
        for (const Wy of yb) "exception" === Wy.type && delete Wy.payload.originalError;
      return yb
    }
    let Df = db;

    function tZ(yb) {
      var bb;
      return Df = null !== (bb = yb.unpatchedConsole) && void 0 !== bb ? bb : Df, Df
    }
    let wf, kZ = wb;

    function Nf(yb, bb) {
      return kZ = Rf(yb, bb.internalLoggerLevel), kZ
    }

    function zZ(yb) {
      let {
        internalLogger: bb,
        config: Wy,
        metas: Uy,
        transports: hy,
        tracesApi: fy,
        userActionsApi: Zy
      } = yb;
      var cb;
      bb.debug("Initializing exceptions API");
      let Py = null;
      wf = null !== (cb = Wy.parseStacktrace) && void 0 !== cb ? cb : wf;
      const oy = yb => {
          bb.debug("Changing stacktrace parser"), wf = null !== yb && void 0 !== yb ? yb : wf
        },
        {
          ignoreErrors: By = [],
          preserveOriginalError: Ky
        } = Wy;
      return oy(Wy.parseStacktrace), {
        changeStacktraceParser: oy,
        getStacktraceParser: () => wf,
        pushError: function(yb) {
          let {
            skipDedupe: cb,
            stackFrames: oy,
            type: ey,
            context: qb,
            spanContext: sy,
            timestampOverwriteMs: Sy,
            originalError: Ey,
            fingerprint: ly,
            fatal: mb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(yb, bb) {
              const {
                message: Wy,
                name: Uy,
                stack: hy
              } = bb;
              return fy = yb, Zy = Wy + " " + Uy + " " + hy, fy.some((yb => Jy(yb) ? Zy.includes(yb) : !!Zy.match(yb)));
              var fy, Zy
            }(By, null !== Ey && void 0 !== Ey ? Ey : yb)) try {
            var Cy, Ty;
            if (!Lb(Uy).shouldCapture()) return;
            const By = Hb(Ab(Ab({}, function(yb) {
                let bb = yb.cause;
                ab(bb) ? bb = yb.cause.toString() : null !== bb && (vb(yb.cause) || My(yb.cause)) ? bb = rW(yb.cause) : null != bb && (bb = yb.cause.toString());
                return null == bb ? {} : {
                  cause: bb
                }
              }(null !== Ey && void 0 !== Ey ? Ey : yb)), null !== qb && void 0 !== qb ? qb : {})),
              Jy = Ab(Ab(Ab(Ab({
                type: ey || yb.name || "Error",
                value: yb.message,
                timestamp: Sy ? Sb(Sy) : sb(),
                trace: sy ? {
                  trace_id: sy.traceId,
                  span_id: sy.spanId
                } : fy.getTraceContext()
              }, kb(By) ? {} : {
                context: By
              }), Ky ? {
                originalError: Ey
              } : {}), ly ? {
                fingerprint: ly
              } : {}), void 0 !== mb ? {
                fatal: mb
              } : {});
            oy = null !== (Cy = oy) && void 0 !== Cy ? Cy : yb.stack ? null === wf || void 0 === wf ? void 0 : wf(yb).frames : void 0, (null === oy || void 0 === oy ? void 0 : oy.length) && (Jy.stacktrace = {
              frames: oy
            });
            const gb = {
              type: Jy.type,
              value: Jy.value,
              stacktrace: Jy.stacktrace,
              context: Jy.context,
              fingerprint: Jy.fingerprint,
              fatal: null !== (Ty = Jy.fatal) && void 0 !== Ty && Ty
            };
            if (!cb && Wy.dedupe && !Vy(Py) && mW(gb, Py)) return void bb.debug("Skipping error push because it is the same as the last one\n", Jy);
            const Gy = Py,
              Oy = aZ(Uy);
            if (Py !== Gy && !cb && Wy.dedupe && mW(gb, Py)) return;
            Py = gb;
            const Ry = {
              meta: Oy,
              payload: Jy,
              type: "exception"
            };
            bb.debug("Pushing exception\n", Ry), Jh(Zy.getActiveUserAction(), Ry) || hy.execute(Ry)
          } catch (gb) {
            bb.error("Error pushing event", gb)
          }
        }
      }
    }

    function If(yb, bb, Wy, Uy, hy) {
      bb.debug("Initializing API");
      let fy = null;
      const Zy = function(yb) {
          let {
            transports: bb,
            internalLogger: Wy,
            config: Uy,
            pushEvent: hy
          } = yb;
          var fy;
          const Zy = null === (fy = Uy.userActionsInstrumentation) || void 0 === fy ? void 0 : fy.excludeItem;
          let cb;
          const Py = () => cb;
          return {
            startUserAction: (yb, Uy, fy) => {
              if (void 0 === Py()) {
                const Wy = new Th({
                  name: yb,
                  transports: bb,
                  attributes: Uy,
                  trigger: (null === fy || void 0 === fy ? void 0 : fy.triggerName) || "faroApiCall",
                  importance: (null === fy || void 0 === fy ? void 0 : fy.importance) || mf.Normal,
                  trackUserActionsExcludeItem: Zy,
                  pushEvent: hy
                });
                return Wy.filter((yb => [3, 2].includes(yb))).first().subscribe((() => {
                  cb = void 0
                })), Vh.notify({
                  type: lh,
                  userAction: Wy,
                  initialActivityTimeout: null === fy || void 0 === fy ? void 0 : fy.initialActivityTimeout
                }), cb = Wy, cb
              }
              Wy.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Py
          }
        }({
          transports: hy,
          config: Wy,
          internalLogger: bb,
          pushEvent: (yb, Wy, Uy, hy) => {
            fy ? fy(yb, Wy, Uy, hy) : bb.warn("pushEventImpl is not initialized. Event dropped:", {
              name: yb,
              attributes: Wy,
              domain: Uy,
              options: hy
            })
          }
        }),
        cb = function(yb, bb, Wy, Uy, hy) {
          let fy;
          return bb.debug("Initializing traces API"), {
            getOTEL: () => fy,
            getTraceContext: () => {
              const yb = null === fy || void 0 === fy ? void 0 : fy.trace.getSpanContext(fy.context.active());
              return yb ? {
                trace_id: yb.traceId,
                span_id: yb.spanId
              } : void 0
            },
            initOTEL: (yb, Wy) => {
              bb.debug("Initializing OpenTelemetry"), fy = {
                trace: yb,
                context: Wy
              }
            },
            isOTELInitialized: () => !!fy,
            pushTraces: yb => {
              try {
                if (!Lb(Uy).shouldCapture()) return;
                const Wy = {
                  type: "trace",
                  payload: yb,
                  meta: aZ(Uy)
                };
                bb.debug("Pushing trace\n", Wy), hy.execute(Wy)
              } catch (Wy) {
                bb.error("Error pushing trace\n", Wy)
              }
            }
          }
        }(0, bb, 0, Uy, hy),
        Py = {
          unpatchedConsole: yb,
          internalLogger: bb,
          userActionsApi: Zy,
          config: Wy,
          metas: Uy,
          transports: hy,
          tracesApi: cb
        },
        oy = function(yb) {
          let {
            internalLogger: bb,
            config: Wy,
            metas: Uy,
            transports: hy,
            tracesApi: fy,
            userActionsApi: Zy
          } = yb, cb = null;
          return {
            pushEvent: function(yb, Py, oy) {
              let {
                skipDedupe: By,
                spanContext: Ky,
                timestampOverwriteMs: ey,
                customPayloadTransformer: qb = yb => yb
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Lb(Uy).shouldCapture()) return;
                const sy = Hb(Py),
                  Sy = qb({
                    name: yb,
                    domain: null !== oy && void 0 !== oy ? oy : Wy.eventDomain,
                    attributes: kb(sy) ? void 0 : sy,
                    timestamp: ey ? Sb(ey) : sb(),
                    trace: Ky ? {
                      trace_id: Ky.traceId,
                      span_id: Ky.spanId
                    } : fy.getTraceContext()
                  }),
                  Ey = {
                    name: Sy.name,
                    attributes: Sy.attributes,
                    domain: Sy.domain
                  };
                if (!By && Wy.dedupe && !Vy(cb) && mW(Ey, cb)) return void bb.debug("Skipping event push because it is the same as the last one\n", Sy);
                const ly = cb,
                  mb = aZ(Uy);
                if (cb !== ly && !By && Wy.dedupe && mW(Ey, cb)) return;
                cb = Ey;
                const Cy = {
                  meta: mb,
                  payload: Sy,
                  type: "event"
                };
                bb.debug("Pushing event\n", Cy), Jh(Zy.getActiveUserAction(), Cy) || hy.execute(Cy)
              } catch (sy) {
                bb.error("Error pushing event", sy)
              }
            }
          }
        }(Py);
      return fy = oy.pushEvent, Ab(Ab(Ab(Ab(Ab(Ab(Ab({}, cb), zZ(Py)), function(yb) {
        let bb, Wy, Uy, hy, {
          internalLogger: fy,
          metas: Zy
        } = yb;
        fy.debug("Initializing meta API");
        const cb = yb => {
            Wy && Zy.remove(Wy), Wy = {
              user: yb
            }, Zy.add(Wy)
          },
          Py = (yb, Wy) => {
            var Uy;
            const hy = null === Wy || void 0 === Wy ? void 0 : Wy.overrides,
              fy = hy ? {
                overrides: Ab(Ab({}, null === bb || void 0 === bb || null === (Uy = bb.session) || void 0 === Uy ? void 0 : Uy.overrides), hy)
              } : {};
            bb && Zy.remove(bb), bb = {
              session: Ab(Ab({}, kb(yb) ? void 0 : yb), fy)
            }, Zy.add(bb)
          },
          oy = (yb, bb) => {
            Lb(Zy).notifySessionUpdate({
              type: "replace",
              session: yb,
              overrides: null === bb || void 0 === bb ? void 0 : bb.overrides
            }), Py(yb, bb)
          },
          By = () => Zy.value.session,
          Ky = () => Zy.value.page;
        return {
          setUser: cb,
          resetUser: cb,
          setSession: oy,
          resetSession: oy,
          getSession: By,
          setView: (yb, bb) => {
            var Wy;
            if ((null === bb || void 0 === bb ? void 0 : bb.overrides) && (Lb(Zy).notifySessionUpdate({
                type: "overrides",
                overrides: bb.overrides
              }), Py(By(), {
                overrides: bb.overrides
              })), (null === Uy || void 0 === Uy || null === (Wy = Uy.view) || void 0 === Wy ? void 0 : Wy.name) === (null === yb || void 0 === yb ? void 0 : yb.name)) return;
            const hy = Uy;
            Uy = {
              view: yb
            }, Zy.add(Uy), hy && Zy.remove(hy)
          },
          getView: () => Zy.value.view,
          setPage: yb => {
            var bb;
            const Wy = Jy(yb) ? Ab(Ab({}, null !== (bb = null === hy || void 0 === hy ? void 0 : hy.page) && void 0 !== bb ? bb : Ky()), {}, {
              id: yb
            }) : yb;
            hy && Zy.remove(hy), hy = {
              page: Wy
            }, Zy.add(hy)
          },
          getPage: Ky
        }
      }(Py)), function(yb) {
        let {
          internalLogger: bb,
          config: Wy,
          metas: Uy,
          transports: hy,
          tracesApi: fy,
          userActionsApi: Zy
        } = yb;
        var cb;
        bb.debug("Initializing logs API");
        let Py = null;
        const oy = null !== (cb = Wy.logArgsSerializer) && void 0 !== cb ? cb : YW;
        return {
          pushLog: function(yb) {
            let {
              context: cb,
              level: By,
              skipDedupe: Ky,
              spanContext: ey,
              timestampOverwriteMs: qb
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Lb(Uy).shouldCapture()) return;
              const sy = Hb(cb),
                Sy = {
                  message: oy(yb),
                  level: null !== By && void 0 !== By ? By : "log",
                  context: kb(sy) ? void 0 : sy,
                  timestamp: qb ? Sb(qb) : sb(),
                  trace: ey ? {
                    trace_id: ey.traceId,
                    span_id: ey.spanId
                  } : fy.getTraceContext()
                },
                Ey = {
                  message: Sy.message,
                  level: Sy.level,
                  context: Sy.context
                };
              if (!Ky && Wy.dedupe && !Vy(Py) && mW(Ey, Py)) return void bb.debug("Skipping log push because it is the same as the last one\n", Sy);
              const ly = Py,
                mb = aZ(Uy);
              if (Py !== ly && !Ky && Wy.dedupe && mW(Ey, Py)) return;
              Py = Ey;
              const Cy = {
                type: "log",
                payload: Sy,
                meta: mb
              };
              bb.debug("Pushing log\n", Cy), Jh(Zy.getActiveUserAction(), Cy) || hy.execute(Cy)
            } catch (sy) {
              bb.error("Error pushing log\n", sy)
            }
          }
        }
      }(Py)), function(yb) {
        let {
          internalLogger: bb,
          config: Wy,
          metas: Uy,
          transports: hy,
          tracesApi: fy,
          userActionsApi: Zy
        } = yb;
        bb.debug("Initializing measurements API");
        let cb = null;
        return {
          pushMeasurement: function(yb) {
            let {
              skipDedupe: Py,
              context: oy,
              spanContext: By,
              timestampOverwriteMs: Ky
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Lb(Uy).shouldCapture()) return;
              const ey = Hb(oy),
                qb = Ab(Ab({}, yb), {}, {
                  trace: By ? {
                    trace_id: By.traceId,
                    span_id: By.spanId
                  } : fy.getTraceContext(),
                  timestamp: Ky ? Sb(Ky) : sb(),
                  context: kb(ey) ? void 0 : ey
                }),
                sy = {
                  type: qb.type,
                  values: qb.values,
                  context: qb.context
                };
              if (!Py && Wy.dedupe && !Vy(cb) && mW(sy, cb)) return void bb.debug("Skipping measurement push because it is the same as the last one\n", qb);
              const Sy = cb,
                Ey = aZ(Uy);
              if (cb !== Sy && !Py && Wy.dedupe && mW(sy, cb)) return;
              cb = sy;
              const ly = {
                type: "measurement",
                payload: qb,
                meta: Ey
              };
              bb.debug("Pushing measurement\n", ly), Jh(Zy.getActiveUserAction(), ly) || hy.execute(ly)
            } catch (ey) {
              bb.error("Error pushing measurement\n", ey)
            }
          }
        }
      }(Py)), oy), Zy)
    }

    function xZ(yb) {
      const bb = tZ(yb),
        Wy = Nf(bb, yb);
      if (sy() && !yb.isolate) return void Wy.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Wy.debug("Initializing");
      const Uy = function(yb, bb) {
          let Wy, Uy = [],
            hy = [],
            fy = [],
            Zy = 0,
            cb = 0;
          const Py = () => Uy.reduce(((yb, bb) => Object.assign(yb, ib(bb) ? bb() : bb)), {}),
            oy = () => {
              if (hy.length) {
                const yb = Py();
                hy.forEach((bb => bb(yb)))
              }
            };
          return {
            add: function() {
              for (var yb = arguments.length, Wy = new Array(yb), hy = 0; hy < yb; hy++) Wy[hy] = arguments[hy];
              bb.debug("Adding metas\n", Wy), Uy.push(...Wy), oy()
            },
            remove: function() {
              for (var yb = arguments.length, Wy = new Array(yb), hy = 0; hy < yb; hy++) Wy[hy] = arguments[hy];
              bb.debug("Removing metas\n", Wy), Uy = Uy.filter((yb => !Wy.includes(yb))), oy()
            },
            addListener: yb => {
              bb.debug("Adding metas listener\n", yb), hy.push(yb)
            },
            removeListener: yb => {
              bb.debug("Removing metas listener\n", yb), hy = hy.filter((bb => bb !== yb))
            },
            capture: yb => {
              var bb;
              const Uy = void 0 !== Wy,
                hy = null !== (bb = Wy) && void 0 !== bb ? bb : fy;
              Uy || (Wy = hy, Zy = 0, cb = hy.length);
              try {
                for (; Zy < cb;) {
                  const yb = hy[Zy++];
                  null === yb || void 0 === yb || yb()
                }
                const bb = Hf(Py());
                return null === yb || void 0 === yb || yb(), bb
              } finally {
                Uy || (Wy = void 0)
              }
            },
            addCaptureListener: yb => {
              fy.push(yb)
            },
            removeCaptureListener: yb => {
              fy = fy.filter((bb => bb !== yb))
            },
            get value() {
              return Py()
            }
          }
        }(0, Wy),
        hy = Qf(bb, Wy, yb, Uy),
        fy = If(bb, Wy, yb, Uy, hy),
        Zy = function(yb, bb, Wy, Uy, hy, fy) {
          bb.debug("Initializing instrumentations");
          const Zy = [];
          return {
            add: function() {
              bb.debug("Adding instrumentations");
              for (var cb = arguments.length, Py = new Array(cb), oy = 0; oy < cb; oy++) Py[oy] = arguments[oy];
              Py.forEach((cb => {
                bb.debug(`Adding "${cb.name}" instrumentation`), Zy.some((yb => yb.name === cb.name)) ? bb.warn(`Instrumentation ${cb.name} is already added`) : (cb.unpatchedConsole = yb, cb.internalLogger = bb, cb.config = Wy, cb.metas = Uy, cb.transports = hy, cb.api = fy, Zy.push(cb), cb.initialize())
              }))
            },
            get instrumentations() {
              return [...Zy]
            },
            remove: function() {
              bb.debug("Removing instrumentations");
              for (var yb = arguments.length, Wy = new Array(yb), Uy = 0; Uy < yb; Uy++) Wy[Uy] = arguments[Uy];
              Wy.forEach((yb => {
                var Wy, Uy;
                bb.debug(`Removing "${yb.name}" instrumentation`);
                const hy = Zy.reduce(((bb, Wy, Uy) => null === bb && Wy.name === yb.name ? Uy : null), null);
                null !== hy ? (null === (Wy = (Uy = Zy[hy]).destroy) || void 0 === Wy || Wy.call(Uy), Zy.splice(hy, 1)) : bb.warn(`Instrumentation "${yb.name}" is not added`)
              }))
            }
          }
        }(bb, Wy, yb, Uy, hy, fy),
        cb = Ey(bb, Wy, yb, Uy, hy, fy, Zy);
      return pf(cb),
        function(yb) {
          yb.transports.add(...yb.config.transports), yb.transports.addBeforeSendHooks(yb.config.beforeSend)
        }(cb),
        function(yb) {
          yb.instrumentations.add(...yb.config.instrumentations)
        }(cb), cb
    }

    function Af(yb) {
      const bb = Yf(yb);
      if (bb) return xZ(bb)
    }
  },
  7221: function(yb, bb, Wy) {
    var Uy;
    ! function(hy, fy) {
      var Zy = "function",
        cb = "undefined",
        Py = "object",
        oy = "string",
        By = "major",
        Ky = "model",
        ey = "name",
        qb = "type",
        sy = "vendor",
        Sy = "version",
        Ey = "architecture",
        ly = "console",
        mb = "mobile",
        Cy = "tablet",
        Ty = "smarttv",
        Vy = "wearable",
        Jy = "embedded",
        gb = "Amazon",
        Gy = "Apple",
        Oy = "ASUS",
        Ry = "BlackBerry",
        vb = "Browser",
        ib = "Chrome",
        My = "Firefox",
        Yy = "Google",
        Xy = "Honor",
        ny = "Huawei",
        uy = "LG",
        rb = "Microsoft",
        Hy = "Motorola",
        ab = "Nvidia",
        Fy = "OnePlus",
        py = "Opera",
        Ly = "OPPO",
        Qy = "Samsung",
        jb = "Sharp",
        Dy = "Sony",
        tb = "Xiaomi",
        wy = "Zebra",
        kb = "Facebook",
        Ny = "Chromium OS",
        zb = "Mac OS",
        Iy = " Browser",
        xb = function(yb) {
          for (var bb = {}, Wy = 0; Wy < yb.length; Wy++) bb[yb[Wy].toUpperCase()] = yb[Wy];
          return bb
        },
        Ay = function(yb, bb) {
          return typeof yb === oy && -1 !== dy(bb).indexOf(dy(yb))
        },
        dy = function(yb) {
          return yb.toLowerCase()
        },
        yW = function(yb, bb) {
          if (typeof yb === oy) return yb = yb.replace(/^\s\s*/, ""), typeof bb === cb ? yb : yb.substring(0, 500)
        },
        bW = function(yb, bb) {
          for (var Wy, Uy, hy, cb, oy, By, Ky = 0; Ky < bb.length && !oy;) {
            var ey = bb[Ky],
              qb = bb[Ky + 1];
            for (Wy = Uy = 0; Wy < ey.length && !oy && ey[Wy];)
              if (oy = ey[Wy++].exec(yb))
                for (hy = 0; hy < qb.length; hy++) By = oy[++Uy], typeof(cb = qb[hy]) === Py && cb.length > 0 ? 2 === cb.length ? typeof cb[1] == Zy ? this[cb[0]] = cb[1].call(this, By) : this[cb[0]] = cb[1] : 3 === cb.length ? typeof cb[1] !== Zy || cb[1].exec && cb[1].test ? this[cb[0]] = By ? By.replace(cb[1], cb[2]) : fy : this[cb[0]] = By ? cb[1].call(this, By, cb[2]) : fy : 4 === cb.length && (this[cb[0]] = By ? cb[3].call(this, By.replace(cb[1], cb[2])) : fy) : this[cb] = By || fy;
            Ky += 2
          }
        },
        Wb = function(yb, bb) {
          for (var Wy in bb)
            if (typeof bb[Wy] === Py && bb[Wy].length > 0) {
              for (var Uy = 0; Uy < bb[Wy].length; Uy++)
                if (Ay(bb[Wy][Uy], yb)) return "?" === Wy ? fy : Wy
            } else if (Ay(bb[Wy], yb)) return "?" === Wy ? fy : Wy;
          return bb.hasOwnProperty("*") ? bb["*"] : yb
        },
        Ub = {
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
        hb = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Sy, [ey, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Sy, [ey, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [ey, Sy],
            [/opios[\/ ]+([\w\.]+)/i],
            [Sy, [ey, py + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Sy, [ey, py + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Sy, [ey, py]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Sy, [ey, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Sy, [ey, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [ey, Sy],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Sy, [ey, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Sy, [ey, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Sy, [ey, "UC" + vb]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Sy, [ey, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Sy, [ey, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Sy, [ey, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Sy, [ey, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Sy, [ey, "Smart Lenovo " + vb]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [ey, /(.+)/, "$1 Secure " + vb], Sy
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Sy, [ey, My + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Sy, [ey, py + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Sy, [ey, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Sy, [ey, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Sy, [ey, py + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Sy, [ey, "MIUI" + Iy]],
            [/fxios\/([\w\.-]+)/i],
            [Sy, [ey, My]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Sy, [ey, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [ey, /(.+)/, "$1Browser"], Sy
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [ey, /(.+)/, "$1" + Iy], Sy
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Sy, [ey, Qy + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Sy, [ey, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [ey, "Sogou Mobile"], Sy
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [ey, Sy],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [ey],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Sy, ey],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [ey, kb], Sy
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [ey, Sy],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Sy, [ey, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Sy, [ey, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Sy, [ey, ib + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [ey, ib + " WebView"], Sy
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Sy, [ey, "Android " + vb]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [ey, Sy],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Sy, [ey, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Sy, ey],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [ey, [Sy, Wb, {
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
            [ey, Sy],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [ey, "Netscape"], Sy
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [ey, Sy],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Sy, [ey, My + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [ey, [Sy, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [ey, [Sy, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Ey, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Ey, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Ey, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Ey, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Ey, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Ey, /ower/, "", dy]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Ey, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Ey, dy]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Ky, [sy, Qy],
              [qb, Cy]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Ky, [sy, Qy],
              [qb, mb]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Ky, [sy, Gy],
              [qb, mb]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Ky, [sy, Gy],
              [qb, Cy]
            ],
            [/(macintosh);/i],
            [Ky, [sy, Gy]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Ky, [sy, jb],
              [qb, mb]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Ky, [sy, Xy],
              [qb, Cy]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Ky, [sy, Xy],
              [qb, mb]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Ky, [sy, ny],
              [qb, Cy]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Ky, [sy, ny],
              [qb, mb]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Ky, /_/g, " "],
              [sy, tb],
              [qb, Cy]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Ky, /_/g, " "],
              [sy, tb],
              [qb, mb]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Ky, [sy, Ly],
              [qb, mb]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Ky, [sy, Wb, {
                OnePlus: ["304", "403", "203"],
                "*": Ly
              }],
              [qb, Cy]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Ky, [sy, "Vivo"],
              [qb, mb]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Ky, [sy, "Realme"],
              [qb, mb]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Ky, [sy, Hy],
              [qb, mb]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Ky, [sy, Hy],
              [qb, Cy]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Ky, [sy, uy],
              [qb, Cy]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Ky, [sy, uy],
              [qb, mb]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Ky, [sy, "Lenovo"],
              [qb, Cy]
            ],
            [/(nokia) (t[12][01])/i],
            [sy, Ky, [qb, Cy]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Ky, /_/g, " "],
              [qb, mb],
              [sy, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Ky, [sy, Yy],
              [qb, Cy]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Ky, [sy, Yy],
              [qb, mb]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Ky, [sy, Dy],
              [qb, mb]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Ky, "Xperia Tablet"],
              [sy, Dy],
              [qb, Cy]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Ky, [sy, Fy],
              [qb, mb]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Ky, [sy, gb],
              [qb, Cy]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Ky, /(.+)/g, "Fire Phone $1"],
              [sy, gb],
              [qb, mb]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Ky, sy, [qb, Cy]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Ky, [sy, Ry],
              [qb, mb]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Ky, [sy, Oy],
              [qb, Cy]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Ky, [sy, Oy],
              [qb, mb]
            ],
            [/(nexus 9)/i],
            [Ky, [sy, "HTC"],
              [qb, Cy]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [sy, [Ky, /_/g, " "],
              [qb, mb]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Ky, [sy, "TCL"],
              [qb, Cy]
            ],
            [/(itel) ((\w+))/i],
            [
              [sy, dy], Ky, [qb, Wb, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Ky, [sy, "Acer"],
              [qb, Cy]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Ky, [sy, "Meizu"],
              [qb, mb]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Ky, [sy, "Ulefone"],
              [qb, mb]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Ky, [sy, "Energizer"],
              [qb, mb]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Ky, [sy, "Cat"],
              [qb, mb]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Ky, [sy, "Smartfren"],
              [qb, mb]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Ky, [sy, "Nothing"],
              [qb, mb]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Ky, [sy, "Archos"],
              [qb, Cy]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Ky, [sy, "Archos"],
              [qb, mb]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [sy, Ky, [qb, Cy]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [sy, Ky, [qb, mb]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [sy, Ky, [qb, Cy]],
            [/(surface duo)/i],
            [Ky, [sy, rb],
              [qb, Cy]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Ky, [sy, "Fairphone"],
              [qb, mb]
            ],
            [/(u304aa)/i],
            [Ky, [sy, "AT&T"],
              [qb, mb]
            ],
            [/\bsie-(\w*)/i],
            [Ky, [sy, "Siemens"],
              [qb, mb]
            ],
            [/\b(rct\w+) b/i],
            [Ky, [sy, "RCA"],
              [qb, Cy]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Ky, [sy, "Dell"],
              [qb, Cy]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Ky, [sy, "Verizon"],
              [qb, Cy]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Ky, [sy, "Barnes & Noble"],
              [qb, Cy]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Ky, [sy, "NuVision"],
              [qb, Cy]
            ],
            [/\b(k88) b/i],
            [Ky, [sy, "ZTE"],
              [qb, Cy]
            ],
            [/\b(nx\d{3}j) b/i],
            [Ky, [sy, "ZTE"],
              [qb, mb]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Ky, [sy, "Swiss"],
              [qb, mb]
            ],
            [/\b(zur\d{3}) b/i],
            [Ky, [sy, "Swiss"],
              [qb, Cy]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Ky, [sy, "Zeki"],
              [qb, Cy]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [sy, "Dragon Touch"], Ky, [qb, Cy]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Ky, [sy, "Insignia"],
              [qb, Cy]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Ky, [sy, "NextBook"],
              [qb, Cy]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [sy, "Voice"], Ky, [qb, mb]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [sy, "LvTel"], Ky, [qb, mb]
            ],
            [/\b(ph-1) /i],
            [Ky, [sy, "Essential"],
              [qb, mb]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Ky, [sy, "Envizen"],
              [qb, Cy]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Ky, [sy, "MachSpeed"],
              [qb, Cy]
            ],
            [/\btu_(1491) b/i],
            [Ky, [sy, "Rotor"],
              [qb, Cy]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Ky, [sy, ab],
              [qb, Cy]
            ],
            [/(sprint) (\w+)/i],
            [sy, Ky, [qb, mb]],
            [/(kin\.[onetw]{3})/i],
            [
              [Ky, /\./g, " "],
              [sy, rb],
              [qb, mb]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Ky, [sy, wy],
              [qb, Cy]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Ky, [sy, wy],
              [qb, mb]
            ],
            [/smart-tv.+(samsung)/i],
            [sy, [qb, Ty]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Ky, /^/, "SmartTV"],
              [sy, Qy],
              [qb, Ty]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [sy, uy],
              [qb, Ty]
            ],
            [/(apple) ?tv/i],
            [sy, [Ky, Gy + " TV"],
              [qb, Ty]
            ],
            [/crkey/i],
            [
              [Ky, ib + "cast"],
              [sy, Yy],
              [qb, Ty]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Ky, [sy, gb],
              [qb, Ty]
            ],
            [/(shield \w+ tv)/i],
            [Ky, [sy, ab],
              [qb, Ty]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Ky, [sy, jb],
              [qb, Ty]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Ky, [sy, Dy],
              [qb, Ty]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Ky, [sy, tb],
              [qb, Ty]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [sy, Ky, [qb, Ty]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [sy, yW],
              [Ky, yW],
              [qb, Ty]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Ky, [qb, Ty]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [qb, Ty]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [sy, Ky, [qb, ly]],
            [/droid.+; (shield)( bui|\))/i],
            [Ky, [sy, ab],
              [qb, ly]
            ],
            [/(playstation \w+)/i],
            [Ky, [sy, Dy],
              [qb, ly]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Ky, [sy, rb],
              [qb, ly]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Ky, [sy, Qy],
              [qb, Vy]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [sy, Ky, [qb, Vy]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Ky, [sy, Ly],
              [qb, Vy]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Ky, [sy, Gy],
              [qb, Vy]
            ],
            [/(opwwe\d{3})/i],
            [Ky, [sy, Fy],
              [qb, Vy]
            ],
            [/(moto 360)/i],
            [Ky, [sy, Hy],
              [qb, Vy]
            ],
            [/(smartwatch 3)/i],
            [Ky, [sy, Dy],
              [qb, Vy]
            ],
            [/(g watch r)/i],
            [Ky, [sy, uy],
              [qb, Vy]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Ky, [sy, wy],
              [qb, Vy]
            ],
            [/droid.+; (glass) \d/i],
            [Ky, [sy, Yy],
              [qb, Vy]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [sy, Ky, [qb, Vy]],
            [/; (quest( \d| pro)?)/i],
            [Ky, [sy, kb],
              [qb, Vy]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [sy, [qb, Jy]],
            [/(aeobc)\b/i],
            [Ky, [sy, gb],
              [qb, Jy]
            ],
            [/(homepod).+mac os/i],
            [Ky, [sy, Gy],
              [qb, Jy]
            ],
            [/windows iot/i],
            [
              [qb, Jy]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Ky, [qb, mb]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Ky, [qb, Cy]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [qb, Cy]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [qb, mb]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Ky, [sy, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Sy, [ey, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [ey, Sy],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Sy, [ey, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [ey, Sy],
            [/ladybird\//i],
            [
              [ey, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Sy, ey]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [ey, Sy],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [ey, [Sy, Wb, Ub]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Sy, Wb, Ub],
              [ey, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Sy, /_/g, "."],
              [ey, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [ey, zb],
              [Sy, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Sy, ey],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [ey, /(.+)/, "$1 Touch"], Sy
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [ey, Sy],
            [/\(bb(10);/i],
            [Sy, [ey, Ry]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Sy, [ey, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Sy, [ey, My + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Sy, [ey, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Sy, [ey, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Sy, [ey, ib + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [ey, Ny], Sy
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [ey, Sy],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [ey, "Solaris"], Sy
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [ey, Sy]
          ]
        },
        fb = function(yb, bb) {
          if (typeof yb === Py && (bb = yb, yb = fy), !(this instanceof fb)) return new fb(yb, bb).getResult();
          var Wy = typeof hy !== cb && hy.navigator ? hy.navigator : fy,
            Uy = yb || (Wy && Wy.userAgent ? Wy.userAgent : ""),
            ly = Wy && Wy.userAgentData ? Wy.userAgentData : fy,
            Ty = bb ? function(yb, bb) {
              var Wy = {};
              for (var Uy in yb) bb[Uy] && bb[Uy].length % 2 === 0 ? Wy[Uy] = bb[Uy].concat(yb[Uy]) : Wy[Uy] = yb[Uy];
              return Wy
            }(hb, bb) : hb,
            Vy = Wy && Wy.userAgent == Uy;
          return this.getBrowser = function() {
            var yb, bb = {};
            return bb[ey] = fy, bb[Sy] = fy, bW.call(bb, Uy, Ty.browser), bb[By] = typeof(yb = bb[Sy]) === oy ? yb.replace(/[^\d\.]/g, "").split(".")[0] : fy, Vy && Wy && Wy.brave && typeof Wy.brave.isBrave == Zy && (bb[ey] = "Brave"), bb
          }, this.getCPU = function() {
            var yb = {};
            return yb[Ey] = fy, bW.call(yb, Uy, Ty.cpu), yb
          }, this.getDevice = function() {
            var yb = {};
            return yb[sy] = fy, yb[Ky] = fy, yb[qb] = fy, bW.call(yb, Uy, Ty.device), Vy && !yb[qb] && ly && ly.mobile && (yb[qb] = mb), Vy && "Macintosh" == yb[Ky] && Wy && typeof Wy.standalone !== cb && Wy.maxTouchPoints && Wy.maxTouchPoints > 2 && (yb[Ky] = "iPad", yb[qb] = Cy), yb
          }, this.xh = function() {
            var yb = {};
            return yb[ey] = fy, yb[Sy] = fy, bW.call(yb, Uy, Ty.engine), yb
          }, this.getOS = function() {
            var yb = {};
            return yb[ey] = fy, yb[Sy] = fy, bW.call(yb, Uy, Ty.os), Vy && !yb[ey] && ly && ly.platform && "Unknown" != ly.platform && (yb[ey] = ly.platform.replace(/chrome os/i, Ny).replace(/macos/i, zb)), yb
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.xh(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Uy
          }, this.setUA = function(yb) {
            return Uy = typeof yb === oy && yb.length > 500 ? yW(yb, 500) : yb, this
          }, this.setUA(Uy), this
        };
      fb.VERSION = "1.0.41", fb.BROWSER = xb([ey, Sy, By]), fb.CPU = xb([Ey]), fb.DEVICE = xb([Ky, sy, qb, ly, mb, Ty, Cy, Vy, Jy]), fb.ENGINE = fb.OS = xb([ey, Sy]), typeof bb !== cb ? (yb.exports && (bb = yb.exports = fb), bb.UAParser = fb) : Wy.amdO ? (Uy = function() {
        return fb
      }.call(bb, Wy, bb, yb)) === fy || (yb.exports = Uy) : typeof hy !== cb && (hy.UAParser = fb);
      var Zb = typeof hy !== cb && (hy.jQuery || hy.Zepto);
      if (Zb && !Zb.ua) {
        var cW = new fb;
        Zb.ua = cW.getResult(), Zb.ua.get = function() {
          return cW.getUA()
        }, Zb.ua.set = function(yb) {
          cW.setUA(yb);
          var bb = cW.getResult();
          for (var Wy in bb) Zb.ua[Wy] = bb[Wy]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);