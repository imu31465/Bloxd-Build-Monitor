export const id = 37;
export const ids = [37];
export const modules = {
  7320: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BaseExtension: () => HH,
      BaseInstrumentation: () => yH,
      BaseTransport: () => Qb,
      CSPInstrumentation: () => Zb,
      ConsoleInstrumentation: () => aH,
      ConsoleTransport: () => bM,
      EVENT_CLICK: () => Ei,
      EVENT_NAVIGATION: () => gi,
      EVENT_ROUTE_CHANGE: () => wi,
      EVENT_SESSION_EXTEND: () => ti,
      EVENT_SESSION_RESUME: () => Wi,
      EVENT_SESSION_START: () => di,
      EVENT_VIEW_CHANGED: () => Oi,
      ErrorsInstrumentation: () => xH,
      FetchTransport: () => OM,
      InternalLoggerLevel: () => ji,
      LogLevel: () => gH,
      MAX_SESSION_PERSISTENCE_TIME: () => Fe,
      NavigationInstrumentation: () => lb,
      Observable: () => EH,
      PerformanceInstrumentation: () => hy,
      PersistentSessionsManager: () => Ci,
      SESSION_EXPIRATION_TIME: () => Me,
      SESSION_INACTIVITY_TIME: () => Ke,
      STORAGE_KEY: () => be,
      SessionInstrumentation: () => MH,
      TransportItemType: () => eM,
      UserActionInstrumentation: () => tb,
      UserActionState: () => pb,
      VERSION: () => bH,
      ViewInstrumentation: () => CH,
      VolatileSessionsManager: () => vi,
      WebVitalsInstrumentation: () => cy,
      allLogLevels: () => dH,
      browserMeta: () => hb,
      buildStackFrame: () => KH,
      captureMetas: () => CM,
      createInternalLogger: () => wM,
      createPromiseBuffer: () => fM,
      createSession: () => Gb,
      deepEqual: () => Bi,
      defaultEventDomain: () => ye,
      defaultExceptionType: () => wH,
      defaultGlobalObjectKey: () => DM,
      defaultInternalLoggerLevel: () => Ii,
      defaultLogLevel: () => OH,
      faro: () => Te,
      genShortID: () => zi,
      getCurrentTimestamp: () => fi,
      getDataFromSafariExtensions: () => fH,
      getIgnoreUrls: () => Ie,
      getInternalFaroFromGlobalObject: () => ke,
      getStackFramesFromError: () => pH,
      getTransportBody: () => yM,
      getUrlFromResource: () => Ne,
      getWebInstrumentations: () => Sb,
      globalObject: () => oe,
      initializeFaro: () => QM,
      internalGlobalObjectKey: () => Re,
      isArray: () => Pe,
      isBoolean: () => te,
      isDomError: () => ve,
      isDomException: () => ue,
      isElement: () => le,
      isElementDefined: () => me,
      dR: () => se,
      isError: () => Le,
      isErrorDefined: () => xe,
      isErrorEvent: () => Ce,
      isEvent: () => ce,
      isEventDefined: () => ae,
      isFunction: () => De,
      isInstanceOf: () => Be,
      isInt: () => We,
      isInternalFaroOnGlobalObject: () => fe,
      isMap: () => ne,
      isMapDefined: () => Se,
      isNull: () => ge,
      isNumber: () => de,
      isObject: () => we,
      isPrimitive: () => Ve,
      isRegExp: () => Ae,
      isString: () => Oe,
      isSymbol: () => Ze,
      isSyntheticEvent: () => je,
      isThenable: () => Ye,
      isToString: () => ze,
      isTypeof: () => Xe,
      isUndefined: () => Ee,
      makeCoreConfig: () => YM,
      noop: () => ni,
      osMeta: () => Nb,
      parseStacktrace: () => XH,
      sdkMeta: () => rb,
      setInternalFaroOnGlobalObject: () => qe,
      transportItemTypeToBodyKey: () => iM,
      unknownString: () => LH,
      userActionDataAttribute: () => Ny,
      userActionTimeoutDataAttribute: () => Gy
    });
    const ye = "browser",
      be = "com.grafana.faro.session",
      Me = 144e5,
      Ke = 9e5,
      Ue = 1e3,
      Fe = Ke,
      Je = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Fe
      };
    const oe = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof He.g ? He.g : "undefined" !== typeof self ? self : void 0;
    const Re = "_faroInternal";

    function ke() {
      return oe[Re]
    }

    function qe(ee) {
      ee.config.isolate ? ee.internalLogger.debug("Skipping registering internal Faro instance on global object") : (ee.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(oe, Re, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }))
    }

    function fe() {
      return Re in oe
    }
    let Te = {
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

    function pe(ee, ie, He, ye, be, Me, Ke) {
      return ie.debug("Initializing Faro"), Te = {
          api: Me,
          config: He,
          instrumentations: Ke,
          internalLogger: ie,
          metas: ye,
          pause: be.pause,
          transports: be,
          unpatchedConsole: ee,
          unpause: be.unpause
        }, qe(Te),
        function(ee) {
          if (ee.config.preventGlobalExposure) ee.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (ee.internalLogger.debug(`Registering public faro reference in the global scope using "${ee.config.globalObjectKey}" key`), ee.config.globalObjectKey in oe) return void ee.internalLogger.warn(`Skipping global registration due to key "${ee.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(oe, ee.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: ee
            })
          }
        }(Te), Te
    }

    function Xe(ee, ie) {
      return typeof ee === ie
    }

    function ze(ee, ie) {
      return Object.prototype.toString.call(ee) === `[object ${ie}]`
    }

    function Be(ee, ie) {
      try {
        return ee instanceof ie
      } catch (He) {
        return !1
      }
    }
    const Ee = ee => Xe(ee, "undefined"),
      ge = ee => Xe(ee, "null"),
      Oe = ee => Xe(ee, "string"),
      de = ee => Xe(ee, "number") && !isNaN(ee) || Xe(ee, "bigint"),
      We = ee => de(ee) && Number.isInteger(ee),
      te = ee => Xe(ee, "boolean"),
      Ze = ee => Xe(ee, "symbol"),
      we = ee => !ge(ee) && Xe(ee, "object"),
      De = ee => Xe(ee, "function"),
      Pe = ee => ze(ee, "Array"),
      Ae = ee => ze(ee, "RegExp"),
      Ye = ee => De(null === ee || void 0 === ee ? void 0 : ee.then),
      Ve = ee => !we(ee) && !De(ee),
      ae = "undefined" !== typeof Event,
      ce = ee => ae && Be(ee, Event),
      xe = "undefined" !== typeof Error,
      Le = ee => xe && Be(ee, Error),
      Ce = ee => ze(ee, "ErrorEvent"),
      ve = ee => ze(ee, "DOMError"),
      ue = ee => ze(ee, "DOMException"),
      me = "undefined" !== typeof Element,
      le = ee => me && Be(ee, Element),
      Se = "undefined" !== typeof Map,
      ne = ee => Se && Be(ee, Map),
      je = ee => we(ee) && "nativeEvent" in ee && "preventDefault" in ee && "stopPropagation" in ee;

    function se(ee) {
      return null == ee || (Pe(ee) || Oe(ee) ? 0 === ee.length : !!we(ee) && 0 === Object.keys(ee).length)
    }

    function Ie() {
      return Te.transports.transports.flatMap((ee => ee.getIgnoreUrls()))
    }

    function he() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Ie().some((ie => ee && null != ee.match(ie)))
    }

    function Ne(ee) {
      return Oe(ee) ? ee : ee instanceof URL ? ee.href : !se(ee) && De(null === ee || void 0 === ee ? void 0 : ee.toString) ? ee.toString() : void 0
    }
    const Ge = "sessionStorage",
      re = "localStorage";

    function Qe(ee) {
      try {
        let ie;
        ie = window[ee];
        const He = "__faro_storage_test__";
        return ie.setItem(He, He), ie.removeItem(He), !0
      } catch (He) {
        var ie;
        return null === (ie = Te.internalLogger) || void 0 === ie || ie.info(`Web storage of type ${ee} is not available. Reason: ${He}`), !1
      }
    }

    function ei(ee, ie) {
      return Mi(ie) ? window[ie].getItem(ee) : null
    }

    function ii(ee, ie, He) {
      if (Mi(He)) try {
        window[He].setItem(ee, ie)
      } catch (ye) {}
    }

    function Hi(ee, ie) {
      Mi(ie) && window[ie].removeItem(ee)
    }
    const yi = Qe(re),
      bi = Qe(Ge);

    function Mi(ee) {
      return ee === re ? yi : ee === Ge && bi
    }

    function Ki(ee) {
      return Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
        return typeof ee
      } : function(ee) {
        return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
      }, Ki(ee)
    }

    function Ui(ee) {
      var ie = function(ee, ie) {
        if ("object" != Ki(ee) || !ee) return ee;
        var He = ee[Symbol.toPrimitive];
        if (void 0 !== He) {
          var ye = He.call(ee, ie || "default");
          if ("object" != Ki(ye)) return ye;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ie ? String : Number)(ee)
      }(ee, "string");
      return "symbol" == Ki(ie) ? ie : ie + ""
    }

    function Fi(ee, ie, He) {
      return (ie = Ui(ie)) in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Ji(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function oi(ee) {
      for (var ie = 1; ie < arguments.length; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? Ji(Object(He), !0).forEach((function(ie) {
          Fi(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Ji(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }

    function Ri() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te;
      var ie, He, ye;
      const be = ee.config.sessionTracking,
        Me = null !== (ie = null !== (He = null === be || void 0 === be || null === (ye = be.sampler) || void 0 === ye ? void 0 : ye.call(be, {
          metas: ee.metas.value
        })) && void 0 !== He ? He : null === be || void 0 === be ? void 0 : be.samplingRate) && void 0 !== ie ? ie : 1,
        Ke = "number" === typeof Me ? function(ee) {
          return Math.min(1, Math.max(0, ee))
        }(Me) : 0;
      if (!(Ke > 0)) return !1;
      if (1 === Ke) return !0;
      try {
        const ee = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === ee || void 0 === ee ? void 0 : ee.getRandomValues)) {
          const ie = new Uint32Array(1);
          return ee.getRandomValues(ie), ie[0] / Math.pow(2, 32) < Ke
        }
      } catch (Ue) {}
      return Math.random() < Ke
    }

    function ki() {
      return Date.now()
    }

    function qi() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function fi() {
      return (new Date).toISOString()
    }

    function Ti(ee) {
      return new Date(ee).toISOString()
    }
    const Xi = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function zi() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const ie = new Uint32Array(ee),
        He = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === He || void 0 === He ? void 0 : He.getRandomValues) He.getRandomValues(ie);
      else
        for (let be = 0; be < ee; be++) ie[be] = Math.floor(4294967296 * Math.random());
      let ye = "";
      for (let be = 0; be < ee; be++) ye += Xi[ie[be] % 59];
      return ye
    }

    function Bi(ee, ie) {
      if (ee === ie) return !0;
      if (Xe(ee, "number") && isNaN(ee)) return Xe(ie, "number") && isNaN(ie);
      const He = Pe(ee),
        ye = Pe(ie);
      if (He !== ye) return !1;
      if (He && ye) {
        const He = ee.length;
        if (He !== ie.length) return !1;
        for (let ye = He; 0 !== ye--;)
          if (!Bi(ee[ye], ie[ye])) return !1;
        return !0
      }
      const be = we(ee),
        Me = we(ie);
      if (be !== Me) return !1;
      if (ee && ie && be && Me) {
        const He = Object.keys(ee),
          ye = Object.keys(ie);
        if (He.length !== ye.length) return !1;
        for (let ee of He)
          if (!ye.includes(ee)) return !1;
        for (let be of He)
          if (!Bi(ee[be], ie[be])) return !1;
        return !0
      }
      return !1
    }
    const Ei = "click",
      gi = "navigation",
      Oi = "view_changed",
      di = "session_start",
      Wi = "session_resume",
      ti = "session_extend",
      Zi = "service_name_override",
      wi = "route_change";

    function Di() {
      let {
        sessionId: ee,
        started: ie,
        lastActivity: He,
        isSampled: ye = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, be = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te;
      var Me;
      const Ke = ki(),
        Ue = null === (Me = be.config) || void 0 === Me || null === (Me = Me.sessionTracking) || void 0 === Me ? void 0 : Me.generateSessionId;
      return null == ee && (ee = "function" === typeof Ue ? Ue() : zi()), {
        sessionId: ee,
        lastActivity: null !== He && void 0 !== He ? He : Ke,
        started: null !== ie && void 0 !== ie ? ie : Ke,
        isSampled: ye
      }
    }

    function Pi(ee) {
      if (null == ee) return !1;
      const ie = ki();
      return ie - ee.started < 144e5 && ie - ee.lastActivity < Ke
    }

    function Ai(ee) {
      let {
        fetchUserSession: ie,
        storeUserSession: He,
        adoptSession: ye,
        updateInterval: be = 0
      } = ee, Ue = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te, Fe = 0;
      return function() {
        let {
          forceSessionExtend: ee = !1,
          refreshActivity: Je = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var oe, Re;
        if (!ie || !He) return;
        const ke = ki();
        if (!ee && ke < Fe && Fe - ke <= be) return;
        const qe = Ue.config.sessionTracking,
          fe = null === qe || void 0 === qe ? void 0 : qe.persistent;
        if (fe && !yi || !fe && !bi) return;
        const Te = ie();
        if (Fe = Math.min(ke + be, (null !== (oe = null === Te || void 0 === Te ? void 0 : Te.started) && void 0 !== oe ? oe : ke) + Me, (null !== (Re = null === Te || void 0 === Te ? void 0 : Te.lastActivity) && void 0 !== Re ? Re : ke) + Ke), !1 === ee && Pi(Te)) {
          var pe;
          Je && He(oi(oi({}, Te), {}, {
            lastActivity: ke
          }));
          const ee = null === (pe = Ue.metas.value.session) || void 0 === pe ? void 0 : pe.id;
          null != ye && null != Te.sessionMeta && Te.sessionId !== ee && ye(Te.sessionMeta)
        } else {
          var Xe, ze, Be;
          let ee = Vi(Di({
            isSampled: Ri(Ue)
          }, Ue), Te, Ue);
          Fe = ke + be, He(ee), null === (Xe = Ue.api) || void 0 === Xe || Xe.setSession(ee.sessionMeta), null === qe || void 0 === qe || null === (ze = qe.onSessionChange) || void 0 === ze || ze.call(qe, null !== (Be = null === Te || void 0 === Te ? void 0 : Te.sessionMeta) && void 0 !== Be ? Be : null, ee.sessionMeta)
        }
      }
    }

    function Yi(ee) {
      let ie, {
          fetchUserSession: He,
          storeUserSession: ye,
          updateInterval: be = 0
        } = ee,
        Me = 0;
      return ee => {
        const Ke = ki();
        if (ee === ie && Ke < Me && Me - Ke <= be) return;
        ie = ee, Me = Ke + be;
        const Ue = He();
        (null === Ue || void 0 === Ue ? void 0 : Ue.sessionId) === ee && Pi(Ue) && ye(oi(oi({}, Ue), {}, {
          lastActivity: Ke
        }))
      }
    }

    function Vi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Te;
      var ye, be, Me, Ke, Ue, Fe;
      const Je = oi(oi({}, ee), {}, {
          sessionMeta: {
            id: ee.sessionId,
            attributes: ci(oi(oi(oi({}, null === (ye = He.config.sessionTracking) || void 0 === ye || null === (ye = ye.session) || void 0 === ye ? void 0 : ye.attributes), null !== (be = null === (Me = He.metas.value.session) || void 0 === Me ? void 0 : Me.attributes) && void 0 !== be ? be : {}), {}, {
              isSampled: ee.isSampled.toString()
            }))
          }
        }),
        oe = null !== (Ke = null === (Ue = He.metas.value.session) || void 0 === Ue ? void 0 : Ue.overrides) && void 0 !== Ke ? Ke : null === ie || void 0 === ie || null === (Fe = ie.sessionMeta) || void 0 === Fe ? void 0 : Fe.overrides;
      se(oe) || (Je.sessionMeta.overrides = oe);
      const Re = null === ie || void 0 === ie ? void 0 : ie.sessionId;
      return null != Re && (Je.sessionMeta.attributes.previousSession = Re), Je
    }

    function ai(ee) {
      let {
        fetchUserSession: ie,
        storeUserSession: He
      } = ee, ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te, be = !1;
      return function(ee) {
        if (be) return;
        const Me = ee.session,
          Ke = ie();
        let Ue = null === Me || void 0 === Me ? void 0 : Me.id;
        const Fe = null === Me || void 0 === Me ? void 0 : Me.attributes,
          Je = null === Me || void 0 === Me ? void 0 : Me.overrides,
          oe = null === Ke || void 0 === Ke ? void 0 : Ke.sessionMeta,
          Re = null === oe || void 0 === oe ? void 0 : oe.overrides,
          ke = !!Je && !Bi(Je, Re),
          qe = !!Fe && !Bi(Fe, null === oe || void 0 === oe ? void 0 : oe.attributes);
        if (Me && Ue !== (null === Ke || void 0 === Ke ? void 0 : Ke.sessionId) || qe || ke) {
          var fe, Te;
          const ee = null != Ke && Ue === Ke.sessionId,
            ie = Vi(ee ? Ke : Di({
              sessionId: Ue,
              isSampled: Ri(ye)
            }, ye), Ke, ye),
            Me = null === Ke || void 0 === Ke || null === (fe = Ke.sessionMeta) || void 0 === fe || null === (fe = fe.attributes) || void 0 === fe ? void 0 : fe.previousSession;
          ee && null != Me && Me !== ie.sessionId && (ie.sessionMeta.attributes.previousSession = Me), (null === (Te = ie.sessionMeta.attributes) || void 0 === Te ? void 0 : Te.previousSession) === ie.sessionId && delete ie.sessionMeta.attributes.previousSession, He(ie),
            function(ee, ie) {
              let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var be, Me, Ke;
              if (!ie) return;
              const Ue = He.serviceName,
                Fe = null !== (be = null !== (Me = ye.serviceName) && void 0 !== Me ? Me : null === (Ke = ee.metas.value.app) || void 0 === Ke ? void 0 : Ke.name) && void 0 !== be ? be : "";
              Ue && Ue !== Fe && ee.api.pushEvent(Zi, {
                serviceName: Ue,
                previousServiceName: Fe
              })
            }(ye, ke, Je, Re), be = !0;
          try {
            ye.api.setSession(ie.sessionMeta)
          } finally {
            be = !1
          }
        }
      }
    }

    function ci(ee) {
      const ie = {};
      for (const He of Object.keys(ee)) {
        const ye = ee[He];
        void 0 !== ye && (ie[He] = ye)
      }
      return ie
    }

    function xi() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== ee && void 0 !== ee ? ee : {}, function() {
        const ee = new WeakSet;
        return function(ie, He) {
          if (we(He) && null !== He) {
            if (ee.has(He)) return null;
            ee.add(He)
          }
          return He
        }
      }())
    }

    function Li() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ie = {};
      for (const [He, ye] of Object.entries(ee)) ie[He] = we(ye) && null !== ye ? xi(ye) : String(ye);
      return ie
    }
    var Ci = class ee {
      constructor() {
        var ie = this;
        let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te;
        this.context = He, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = ee => {
          this.adopting = !0;
          try {
            var ie;
            null === (ie = this.context.api) || void 0 === ie || ie.setSession(ee)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: ee = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ie.updateUserSession({
            refreshActivity: ee
          })
        }, this.recordActivity = Yi({
          fetchUserSession: ee.fetchUserSession,
          storeUserSession: ee.storeUserSession,
          updateInterval: Ue
        }), this.updateUserSession = Ai({
          fetchUserSession: ee.fetchUserSession,
          storeUserSession: ee.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Ue
        }, He), this.init()
      }
      static removeUserSession() {
        Hi(be, ee.storageTypeLocal)
      }
      static storeUserSession(ie) {
        ii(be, xi(ie), ee.storageTypeLocal)
      }
      static fetchUserSession() {
        const ie = ei(be, ee.storageTypeLocal);
        return ie ? JSON.parse(ie) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var ee;
            this.updateSession({
              refreshActivity: !1
            });
            const ie = null === (ee = this.context.api) || void 0 === ee || null === (ee = ee.getSession()) || void 0 === ee ? void 0 : ee.id;
            ie && this.recordActivity(ie)
          }
        })), this.context.metas.addListener(ai({
          fetchUserSession: ee.fetchUserSession,
          storeUserSession: ee.storeUserSession
        }, this.context))
      }
    };
    Ci.storageTypeLocal = re;
    var vi = class ee {
      constructor() {
        var ie = this;
        let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te;
        this.context = He, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: ee = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ie.updateUserSession({
            refreshActivity: ee
          })
        }, this.recordActivity = Yi({
          fetchUserSession: ee.fetchUserSession,
          storeUserSession: ee.storeUserSession,
          updateInterval: Ue
        }), this.updateUserSession = Ai({
          fetchUserSession: ee.fetchUserSession,
          storeUserSession: ee.storeUserSession,
          updateInterval: Ue
        }, He), this.init()
      }
      static removeUserSession() {
        Hi(be, ee.storageTypeSession)
      }
      static storeUserSession(ie) {
        ii(be, xi(ie), ee.storageTypeSession)
      }
      static fetchUserSession() {
        const ie = ei(be, ee.storageTypeSession);
        return ie ? JSON.parse(ie) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var ee;
            this.updateSession({
              refreshActivity: !1
            });
            const ie = null === (ee = this.context.api) || void 0 === ee || null === (ee = ee.getSession()) || void 0 === ee ? void 0 : ee.id;
            ie && this.recordActivity(ie)
          }
        })), this.context.metas.addListener(ai({
          fetchUserSession: ee.fetchUserSession,
          storeUserSession: ee.storeUserSession
        }, this.context))
      }
    };
    vi.storageTypeSession = Ge;
    const ui = new WeakMap;

    function mi(ee) {
      let ie = ui.get(ee);
      if (!ie) {
        let He = [],
          ye = [];
        ie = {
          addSessionUpdateListener: ee => {
            He.push(ee)
          },
          removeSessionUpdateListener: ee => {
            He = He.filter((ie => ie !== ee))
          },
          notifySessionUpdate: ee => {
            He.forEach((ie => ie(ee)))
          },
          shouldCapture: () => ye.every((ee => ee())),
          addCaptureFilter: ee => {
            ye.push(ee)
          },
          removeCaptureFilter: ee => {
            ye = ye.filter((ie => ie !== ee))
          }
        }, ui.set(ee, ie)
      }
      return ie
    }
    var li = class {
      constructor(ee, ie, He) {
        this.metas = ee, this.transports = ie, this.onActivate = He, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = ee => {
          var ie, He, ye;
          const be = this.pending;
          var Me, Ke;
          if ("overrides" === ee.type) return void(this.pending = {
            reset: null !== (Me = null === be || void 0 === be ? void 0 : be.reset) && void 0 !== Me && Me,
            inheritOverrides: null === (Ke = null === be || void 0 === be ? void 0 : be.inheritOverrides) || void 0 === Ke || Ke,
            session: oi(oi({}, null === be || void 0 === be ? void 0 : be.session), {}, {
              overrides: oi(oi({}, null === be || void 0 === be ? void 0 : be.session.overrides), ee.overrides)
            })
          });
          const Ue = ee.session,
            Fe = se(Ue) || null != Ue && "id" in Ue && !Ue.id,
            Je = null !== (ie = null === Ue || void 0 === Ue ? void 0 : Ue.overrides) && void 0 !== ie ? ie : null === be || void 0 === be ? void 0 : be.session.overrides;
          this.pending = {
            reset: Fe || !(null === Ue || void 0 === Ue ? void 0 : Ue.id) && null !== (He = null === be || void 0 === be ? void 0 : be.reset) && void 0 !== He && He,
            inheritOverrides: !(!ee.overrides && void 0 !== (null === Ue || void 0 === Ue ? void 0 : Ue.overrides)) && (null === (ye = null === be || void 0 === be ? void 0 : be.inheritOverrides) || void 0 === ye || ye),
            session: {
              id: null === Ue || void 0 === Ue ? void 0 : Ue.id,
              attributes: (null === Ue || void 0 === Ue ? void 0 : Ue.attributes) && oi({}, Ue.attributes),
              overrides: ee.overrides ? oi(oi({}, null === be || void 0 === be ? void 0 : be.session.overrides), ee.overrides) : Je && oi({}, Je)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var ee, ie;
        this.waiting = !0, mi(this.metas).addSessionUpdateListener(this.recordUpdate), mi(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (ee = (ie = this.metas).addCaptureListener) || void 0 === ee || ee.call(ie, this.activate), this.activate()
      }
      destroy() {
        var ee, ie;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), mi(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (ee = (ie = this.metas).removeCaptureListener) || void 0 === ee || ee.call(ie, this.activate), mi(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Si(ee) {
      return (null === ee || void 0 === ee ? void 0 : ee.persistent) ? Ci : vi
    }

    function ni() {}
    let ji = function(ee) {
      return ee[ee.OFF = 0] = "OFF", ee[ee.ERROR = 1] = "ERROR", ee[ee.WARN = 2] = "WARN", ee[ee.INFO = 3] = "INFO", ee[ee.VERBOSE = 4] = "VERBOSE", ee
    }({});
    const si = {
        debug: ni,
        error: ni,
        info: ni,
        prefix: "Faro",
        warn: ni
      },
      Ii = 1;

    function Ni(ee) {
      return Ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
        return typeof ee
      } : function(ee) {
        return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
      }, Ni(ee)
    }

    function Gi(ee) {
      var ie = function(ee, ie) {
        if ("object" != Ni(ee) || !ee) return ee;
        var He = ee[Symbol.toPrimitive];
        if (void 0 !== He) {
          var ye = He.call(ee, ie || "default");
          if ("object" != Ni(ye)) return ye;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ie ? String : Number)(ee)
      }(ee, "string");
      return "symbol" == Ni(ie) ? ie : ie + ""
    }

    function ri(ee, ie, He) {
      return (ie = Gi(ie)) in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Qi(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function eH(ee) {
      for (var ie = 1; ie < arguments.length; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? Qi(Object(He), !0).forEach((function(ie) {
          ri(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Qi(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }
    const iH = eH({}, console);
    var HH = class {
        constructor() {
          this.unpatchedConsole = iH, this.internalLogger = si, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          this.internalLogger.debug(`${this.name}\n`, ...ie)
        }
        logInfo() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          this.internalLogger.info(`${this.name}\n`, ...ie)
        }
        logWarn() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          this.internalLogger.warn(`${this.name}\n`, ...ie)
        }
        logError() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          this.internalLogger.error(`${this.name}\n`, ...ie)
        }
      },
      yH = class extends HH {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const bH = "2.12.1";
    var MH = class extends yH {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = bH, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(ee) {
        var ie;
        const He = ee.session;
        if (He && He.id !== (null === (ie = this.notifiedSession) || void 0 === ie ? void 0 : ie.id)) {
          var ye;
          if (this.isAdoptingSession()) return void(this.notifiedSession = He);
          if (this.notifiedSession && this.notifiedSession.id === (null === (ye = He.attributes) || void 0 === ye ? void 0 : ye.previousSession)) return this.api.pushEvent(ti, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = He);
          this.notifiedSession = He, this.api.pushEvent(di, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(ee, ie, He) {
        const ye = null === He || void 0 === He ? void 0 : He.session;
        let be, Me, Ke = ee.fetchUserSession();
        if (ie.persistent && ie.maxSessionPersistenceTime && Ke) {
          const ee = ki();
          Ke.lastActivity < ee - ie.maxSessionPersistenceTime && (Ci.removeUserSession(), Ke = null)
        }
        const Ue = Pi(Ke);
        if ((null === He || void 0 === He ? void 0 : He.reset) || !Ue || (null === ye || void 0 === ye ? void 0 : ye.id) && ye.id !== (null === Ke || void 0 === Ke ? void 0 : Ke.sessionId)) {
          var Fe, Je, oe, Re, ke, qe;
          Me = Di({
            sessionId: (null === He || void 0 === He ? void 0 : He.reset) ? void 0 : null !== (Fe = null === ye || void 0 === ye ? void 0 : ye.id) && void 0 !== Fe ? Fe : null === (Je = ie.session) || void 0 === Je ? void 0 : Je.id,
            isSampled: Ri(this)
          }, this);
          const ee = Me.sessionId,
            fe = He && Ue ? null === Ke || void 0 === Ke || null === (oe = Ke.sessionMeta) || void 0 === oe ? void 0 : oe.overrides : void 0,
            Te = fe ? oi(oi({}, null === (Re = ie.session) || void 0 === Re ? void 0 : Re.overrides), fe) : null === (ke = ie.session) || void 0 === ke ? void 0 : ke.overrides;
          Me.sessionMeta = oi({
            id: ee,
            attributes: oi({
              isSampled: Me.isSampled.toString()
            }, null === (qe = ie.session) || void 0 === qe ? void 0 : qe.attributes)
          }, Te ? {
            overrides: Te
          } : {}), be = di
        } else {
          var fe, Te;
          const ee = null === Ke || void 0 === Ke ? void 0 : Ke.sessionId;
          Me = Di({
            sessionId: ee,
            isSampled: Ke.isSampled || !1,
            started: null === Ke || void 0 === Ke ? void 0 : Ke.started
          }, this);
          const He = null === Ke || void 0 === Ke ? void 0 : Ke.sessionMeta,
            ye = oi(oi({}, null === (fe = ie.session) || void 0 === fe ? void 0 : fe.overrides), null === He || void 0 === He ? void 0 : He.overrides);
          Me.sessionMeta = oi(oi({}, ie.session), {}, {
            id: ee,
            attributes: oi(oi(oi({}, null === (Te = ie.session) || void 0 === Te ? void 0 : Te.attributes), null === He || void 0 === He ? void 0 : He.attributes), {}, {
              isSampled: Me.isSampled.toString()
            }),
            overrides: ye
          }), be = Wi
        }
        var pe;
        if (ye && (Me.sessionMeta = oi(oi({}, Me.sessionMeta), {}, {
            attributes: oi(oi(oi({}, null === (pe = Me.sessionMeta) || void 0 === pe ? void 0 : pe.attributes), ye.attributes), {}, {
              isSampled: Me.isSampled.toString()
            })
          }), ye.overrides)) {
          const ee = (null === He || void 0 === He ? void 0 : He.inheritOverrides) ? oi(oi({}, Me.sessionMeta.overrides), ye.overrides) : ye.overrides;
          Object.keys(ee).length > 0 ? Me.sessionMeta.overrides = ee : delete Me.sessionMeta.overrides
        }
        return {
          initialSession: Me,
          lifecycleType: be
        }
      }
      registerBeforeSendHook(ee) {
        var ie;
        this.beforeSendHook = ie => {
          var He, ye;
          const be = null === (He = ie.meta.session) || void 0 === He ? void 0 : He.id;
          be && !this.transports.isPaused() && ee(be);
          const Me = null === (ye = ie.meta.session) || void 0 === ye ? void 0 : ye.attributes;
          if (Me && "true" === (null === Me || void 0 === Me ? void 0 : Me.isSampled)) {
            var Ke;
            let ee = JSON.parse(JSON.stringify(ie));
            const He = null === (Ke = ee.meta.session) || void 0 === Ke ? void 0 : Ke.attributes;
            var Ue;
            if (null === He || void 0 === He || delete He.isSampled, 0 === Object.keys(null !== He && void 0 !== He ? He : {}).length) null === (Ue = ee.meta.session) || void 0 === Ue || delete Ue.attributes;
            return ee
          }
          return null
        }, null === (ie = this.transports) || void 0 === ie || ie.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var ee;
        this.logDebug("init session instrumentation");
        const ie = document.prerendering;
        var He;
        if ((null === (ee = this.config.sessionTracking) || void 0 === ee ? void 0 : ee.enabled) && (ie || this.prerenderSession)) return null !== (He = this.prerenderSession) && void 0 !== He || (this.prerenderSession = new li(this.metas, this.transports, (ee => {
          this.prerenderSession = void 0, this.initializeSession(ee)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(ee) {
        const ie = this.config.sessionTracking;
        if (null === ie || void 0 === ie ? void 0 : ie.enabled) {
          var He, ye;
          const be = Si(ie),
            Me = new be(this);
          this.isAdoptingSession = Me.isAdopting, this.registerBeforeSendHook(Me.recordActivity);
          const {
            initialSession: Ke,
            lifecycleType: Ue
          } = this.createInitialSession(be, ie, ee);
          be.storeUserSession(Ke);
          const Fe = Ke.sessionMeta;
          this.notifiedSession = Fe, this.api.setSession(Fe), this.captureListener = () => {
            this.transports.isPaused() || Me.updateSession({
              refreshActivity: !1
            })
          }, null === (He = (ye = this.metas).addCaptureListener) || void 0 === He || He.call(ye, this.captureListener), Ue === di && this.api.pushEvent(di, {}, void 0, {
            skipDedupe: !0
          }), Ue === Wi && this.api.pushEvent(Wi, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var ee, ie, He;
        (null === (ee = this.prerenderSession) || void 0 === ee || ee.destroy(), this.captureListener) && (null === (ie = (He = this.metas).removeCaptureListener) || void 0 === ie || ie.call(He, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function KH(ee, ie, He, ye) {
      const be = {
        filename: ee || document.location.href,
        function: ie || "?"
      };
      return void 0 !== He && (be.lineno = He), void 0 !== ye && (be.colno = ye), be
    }
    const UH = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      FH = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      JH = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      oH = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      RH = "safari-extension",
      kH = "safari-web-extension",
      qH = /Minified React error #\d+;/i;

    function fH(ee, ie) {
      const He = null === ee || void 0 === ee ? void 0 : ee.includes(RH),
        ye = !He && (null === ee || void 0 === ee ? void 0 : ee.includes("safari-web-extension"));
      return He || ye ? [(null === ee || void 0 === ee ? void 0 : ee.includes("@")) ? ee.split("@")[0] : ee, He ? `${RH}:${ie}` : `${kH}:${ie}`] : [ee, ie]
    }
    const TH = 1024;

    function pH(ee) {
      let ie = [];
      ee.stacktrace ? ie = ee.stacktrace.split("\n").filter(((ee, ie) => ie % 2 === 0)) : ee.stack && (ie = ee.stack.split("\n"));
      const He = ie.reduce(((ie, He, ye) => {
        if (He.length > TH) return ie;
        let be, Me, Ke, Ue, Fe;
        if (be = UH.exec(He)) {
          if (Me = be[1], Ke = be[2], Ue = be[3], Fe = be[4], null === Ke || void 0 === Ke ? void 0 : Ke.startsWith("eval")) {
            const ee = FH.exec(Ke);
            ee && (Ke = ee[1], Ue = ee[2], Fe = ee[3])
          }
          Ke = (null === Ke || void 0 === Ke ? void 0 : Ke.startsWith("address at ")) ? Ke.substring(11) : Ke, [Me, Ke] = fH(Me, Ke)
        } else if (be = JH.exec(He)) {
          if (Me = be[1], Ke = be[3], Ue = be[4], Fe = be[5], Ke && Ke.includes(" > eval")) {
            const ee = oH.exec(Ke);
            ee && (Me = Me || "eval", Ke = ee[1], Ue = ee[2])
          } else 0 === ye && !Fe && de(ee.columnNumber) && (Fe = String(ee.columnNumber + 1));
          [Me, Ke] = fH(Me, Ke)
        }
        return (Ke || Me) && ie.push(KH(Ke, Me, Ue ? Number(Ue) : void 0, Fe ? Number(Fe) : void 0)), ie
      }), []);
      return qH.test(ee.message) ? He.slice(1) : He
    }

    function XH(ee) {
      return {
        frames: pH(ee)
      }
    }
    const zH = "http-request-start",
      BH = "http-request-end";
    var EH = class ee {
      constructor() {
        this.subscribers = []
      }
      subscribe(ee) {
        return this.subscribers.push(ee), {
          unsubscribe: () => this.unsubscribe(ee)
        }
      }
      unsubscribe(ee) {
        this.subscribers = this.subscribers.filter((ie => ie !== ee))
      }
      notify(ee) {
        this.subscribers.forEach((ie => ie(ee)))
      }
      first() {
        const ie = new ee,
          He = ee => {
            ie.notify(ee), ye.unsubscribe()
          },
          ye = this.subscribe(He),
          be = ie.unsubscribe.bind(ie);
        return this.withUnsubscribeOverride(ie, be, He)
      }
      takeWhile(ie) {
        const He = new ee,
          ye = ee => {
            ie(ee) ? He.notify(ee) : He.unsubscribe(ye)
          };
        this.subscribe(ye);
        const be = He.unsubscribe.bind(He);
        return this.withUnsubscribeOverride(He, be, ye)
      }
      filter(ie) {
        const He = new ee,
          ye = ee => {
            ie(ee) && He.notify(ee)
          };
        this.subscribe(ye);
        const be = He.unsubscribe.bind(He);
        return this.withUnsubscribeOverride(He, be, ye)
      }
      merge() {
        const ie = new ee,
          He = [];
        for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
        be.forEach((ee => {
          const ye = ee.subscribe((ee => {
            ie.notify(ee)
          }));
          He.push(ye)
        }));
        const Ke = ie.unsubscribeAll.bind(ie);
        return ie.unsubscribe = () => {
          He.forEach((ee => ee.unsubscribe())), Ke()
        }, ie
      }
      withUnsubscribeOverride(ee, ie, He) {
        return ee.unsubscribe = ee => {
          ie(ee), this.unsubscribe(He)
        }, ee
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let gH = function(ee) {
      return ee.TRACE = "trace", ee.DEBUG = "debug", ee.INFO = "info", ee.LOG = "log", ee.WARN = "warn", ee.ERROR = "error", ee
    }({});
    const OH = "log",
      dH = ["trace", "debug", "info", "log", "warn", "error"];
    let WH, tH = !1;
    const ZH = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      wH = "Error",
      DH = ee => ee.map((ee => we(ee) ? xi(ee) : String(ee))).join(" ");

    function PH(ee) {
      let ie, He, ye, be, Me = [];
      if (Ce(ee) && ee.error) ie = ee.error.message, He = ee.error.name, Me = pH(ee.error);
      else if ((ye = ve(ee)) || ue(ee)) {
        const {
          name: be,
          message: Me
        } = ee;
        He = null !== be && void 0 !== be ? be : ye ? "DOMError" : "DOMException", ie = Me ? `${He}: ${Me}` : He
      } else Le(ee) ? (He = ee.name, ie = ee.message, Me = pH(ee)) : (we(ee) || (be = ce(ee))) && (He = be ? ee.constructor.name : void 0, ie = `Non-Error exception captured with keys: ${Object.keys(ee)}`);
      return [ie, He, Me]
    }

    function AH(ee) {
      const [ie, He, ye, be, Me] = ee;
      let Ke, Ue, Fe = [];
      const Je = Oe(ie),
        oe = KH(He, "?", ye, be);
      return Me || !Je ? ([Ke, Ue, Fe] = PH(null !== Me && void 0 !== Me ? Me : ie), 0 === Fe.length && (Fe = [oe])) : Je && ([Ke, Ue] = function(ee) {
        var ie, He;
        const ye = ee.match(ZH),
          be = null !== (ie = null === ye || void 0 === ye ? void 0 : ye[1]) && void 0 !== ie ? ie : wH;
        return [null !== (He = null === ye || void 0 === ye ? void 0 : ye[2]) && void 0 !== He ? He : ee, be]
      }(ie), Fe = [oe]), {
        value: Ke,
        type: Ue,
        stackFrames: Fe
      }
    }

    function YH(ee, ie) {
      return Le(ee[0]) ? AH(ee) : {
        value: ie(ee)
      }
    }
    const VH = ee => ee.map((ee => {
      try {
        return String(ee)
      } catch (ie) {
        return ""
      }
    })).join(" ");
    var aH = class ee extends yH {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = bH, this.errorSerializer = VH
      }
      initialize() {
        var ie, He;
        const ye = this.config.consoleInstrumentation,
          be = (null === ye || void 0 === ye ? void 0 : ye.serializeErrors) || !!(null === ye || void 0 === ye ? void 0 : ye.errorSerializer);
        this.errorSerializer = be ? null !== (ie = null === ye || void 0 === ye ? void 0 : ye.errorSerializer) && void 0 !== ie ? ie : DH : VH;
        const Me = null !== (He = null === ye || void 0 === ye ? void 0 : ye.disabledLevels) && void 0 !== He ? He : ee.defaultDisabledLevels,
          Ke = function(ee) {
            if (WH || (WH = new EH), !tH) {
              const ie = null !== ee && void 0 !== ee ? ee : iH;
              dH.forEach((ee => {
                console[ee] = function() {
                  for (var He, ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
                  WH.notify({
                    type: "console",
                    level: ee,
                    args: be
                  }), null === (He = ie[ee]) || void 0 === He || He.apply(console, be)
                }
              })), tH = !0
            }
            return WH
          }(this.unpatchedConsole);
        this.subscription = Ke.subscribe((ie => {
          let {
            level: He,
            args: be
          } = ie;
          if (!Me.includes(He)) try {
            if (He !== gH.ERROR || (null === ye || void 0 === ye ? void 0 : ye.consoleErrorAsLog))
              if (He === gH.ERROR && (null === ye || void 0 === ye ? void 0 : ye.consoleErrorAsLog)) {
                const {
                  value: ie,
                  type: ye,
                  stackFrames: Me
                } = YH(be, this.errorSerializer);
                this.api.pushLog(ie ? [ee.consoleErrorPrefix + ie] : be, {
                  level: He,
                  context: {
                    value: null !== ie && void 0 !== ie ? ie : "",
                    type: null !== ye && void 0 !== ye ? ye : "",
                    stackFrames: (null === Me || void 0 === Me ? void 0 : Me.length) ? DH(Me) : ""
                  }
                })
              } else this.api.pushLog(be, {
                level: He
              });
            else {
              const {
                value: ie,
                type: He,
                stackFrames: ye
              } = YH(be, this.errorSerializer);
              if (ie && !He && !ye) return void this.api.pushError(new Error(ee.consoleErrorPrefix + ie));
              this.api.pushError(new Error(ee.consoleErrorPrefix + ie), {
                type: He,
                stackFrames: ye
              })
            }
          } catch (Ke) {
            this.logError(Ke)
          }
        }))
      }
      destroy() {
        var ee;
        null === (ee = this.subscription) || void 0 === ee || ee.unsubscribe(), this.subscription = void 0
      }
    };
    aH.defaultDisabledLevels = [gH.DEBUG, gH.TRACE, gH.LOG], aH.consoleErrorPrefix = "console.error: ";
    const cH = [];
    var xH = class extends yH {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = bH
      }
      initialize() {
        this.logDebug("Initializing"),
          function(ee) {
            const ie = window.onerror;
            window.onerror = function() {
              for (var He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
              try {
                const {
                  value: ie,
                  type: He,
                  stackFrames: be
                } = AH(ye), Me = ye[4];
                if (ie) {
                  const ye = {
                    type: He,
                    stackFrames: be
                  };
                  null != Me && (ye.originalError = Me), ee.pushError(new Error(ie), ye)
                }
              } finally {
                null === ie || void 0 === ie || ie.apply(window, ye)
              }
            }
          }(this.api),
          function(ee) {
            const ie = ie => {
              var He;
              let ye, be, Me = ie;
              if (Me.reason) Me = ie.reason;
              else if (null === (He = ie.detail) || void 0 === He ? void 0 : He.reason) {
                var Ke;
                Me = null === (Ke = ie.detail) || void 0 === Ke ? void 0 : Ke.reason
              }
              let Ue = [];
              Ve(Me) ? (ye = `Non-Error promise rejection captured with value: ${String(Me)}`, be = "UnhandledRejection") : [ye, be, Ue] = PH(Me), ye && ee.pushError(new Error(ye), {
                type: be,
                stackFrames: Ue
              })
            };
            window.addEventListener("unhandledrejection", ie), cH.push(ie)
          }(this.api)
      }
    };
    const LH = "unknown";
    var CH = class extends yH {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = bH, this.waitingForActivation = !1, this.sendViewChangedEvent = ee => {
          var ie;
          if (this.waitingForActivation || document.prerendering) return;
          const He = ee.view;
          if (He && He.name !== (null === (ie = this.notifiedView) || void 0 === ie ? void 0 : ie.name)) {
            var ye, be, Me;
            const ee = null !== (ye = null === (be = this.notifiedView) || void 0 === be ? void 0 : be.name) && void 0 !== ye ? ye : LH;
            this.notifiedView = He, this.api.pushEvent(Oi, {
              fromView: ee,
              toView: null !== (Me = He.name) && void 0 !== Me ? Me : LH
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
    class vH {
      t;
      o = 0;
      i = [];
      l(ee) {
        if (ee.hadRecentInput) return;
        const ie = this.i[0],
          He = this.i.at(-1);
        this.o && ie && He && ee.startTime - He.startTime < 1e3 && ee.startTime - ie.startTime < 5e3 ? (this.o += ee.value, this.i.push(ee)) : (this.o = ee.value, this.i = [ee]), this.t?.(ee)
      }
    }
    const uH = () => {
        const ee = performance.getEntriesByType("navigation")[0];
        if (ee && ee.responseStart > 0 && ee.responseStart < performance.now()) return ee
      },
      mH = ee => {
        if ("loading" === document.readyState) return "loading";
        const ie = uH();
        if (ie) {
          if (ee < ie.domInteractive) return "loading";
          if (0 === ie.domContentLoadedEventStart || ee < ie.domContentLoadedEventStart) return "dom-interactive";
          if (0 === ie.domComplete || ee < ie.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      lH = ee => {
        const ie = ee.nodeName;
        return 1 === ee.nodeType ? ie.toLowerCase() : ie.toUpperCase().replace(/^#/, "")
      },
      SH = ee => {
        let ie = "";
        try {
          for (; 9 !== ee?.nodeType;) {
            const He = ee,
              ye = He.id ? "#" + He.id : [lH(He), ...Array.from(He.classList ?? []).sort()].join(".");
            if (ie.length + ye.length > 99) return ie || ye;
            if (ie = ie ? ye + ">" + ie : ye, He.id) break;
            ee = He.parentNode
          }
        } catch {}
        return ie
      },
      nH = new WeakMap;

    function jH(ee, ie) {
      let He = nH.get(ie);
      return He || (He = new WeakMap, nH.set(ie, He)), He.get(ee) || He.set(ee, new ie), He.get(ee)
    }
    let sH = -1;
    const IH = () => sH,
      hH = ee => {
        addEventListener("pageshow", (ie => {
          ie.persisted && (sH = ie.timeStamp, ee(ie))
        }), !0)
      },
      NH = (ee, ie, He, ye) => {
        let be, Me;
        return Ke => {
          ie.value >= 0 && (Ke || ye) && (Me = ie.value - (be ?? 0), (Me || void 0 === be) && (be = ie.value, ie.delta = Me, ie.rating = ((ee, ie) => ee > ie[1] ? "poor" : ee > ie[0] ? "needs-improvement" : "good")(ie.value, He), ee(ie)))
        }
      },
      GH = ee => {
        requestAnimationFrame((() => requestAnimationFrame((() => ee()))))
      },
      rH = () => uH()?.activationStart ?? 0;
    let QH = -1;
    const ey = new Set,
      iy = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      Hy = ee => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === ee.type)
            for (const ee of ey) ee();
          isFinite(QH) || (QH = "visibilitychange" === ee.type ? ee.timeStamp : 0, removeEventListener("prerenderingchange", Hy, !0))
        }
      },
      yy = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (QH = 1 / 0), QH < 0) {
          const ee = rH(),
            ie = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((ie => "hidden" === ie.name && ie.startTime >= ee))?.startTime;
          QH = ie ?? iy(), addEventListener("visibilitychange", Hy, !0), addEventListener("prerenderingchange", Hy, !0), hH((() => {
            setTimeout((() => {
              QH = iy()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return QH
          },
          onHidden(ee) {
            ey.add(ee)
          }
        }
      },
      by = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0,
          Ke = arguments.length > 6 ? arguments[6] : void 0;
        const Ue = uH(),
          Fe = Ue?.navigationId || 0;
        let Je = "navigate";
        return He ? Je = He : IH() >= 0 ? Je = "back-forward-cache" : Ue && (document.prerendering || rH() > 0 ? Je = "prerender" : document.wasDiscarded ? Je = "restore" : Ue.type && (Je = Ue.type.replace(/_/g, "-"))), {
          name: ee,
          value: ie,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Je,
          navigationId: ye || Fe,
          navigationInteractionId: be,
          navigationURL: Me || Ue?.name,
          navigationStartTime: Ke || 0
        }
      },
      My = function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const ye = ee.filter((ee => PerformanceObserver.supportedEntryTypes.includes(ee)));
          if (ye.length > 0) {
            const ee = new PerformanceObserver((ee => {
              queueMicrotask((() => {
                const He = ee.getEntries();
                ye.length > 1 && He.sort(((ee, ie) => ee.startTime + ee.duration - (ie.startTime + ie.duration))), ie(He)
              }))
            }));
            for (const ie of ye) ee.observe({
              type: ie,
              buffered: !0,
              ...He
            });
            return ee
          }
        } catch {}
      },
      Ky = ee => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && ee && ee.reportSoftNavs,
      Uy = (ee, ie) => {
        if (ee.set(ie.navigationId, ie), ee.size > 2) {
          const ie = ee.keys().next().value;
          void 0 !== ie && ee.delete(ie)
        }
      },
      Fy = ee => {
        let ie = !1;
        return () => {
          ie || (ee(), ie = !0)
        }
      };
    class Jy {
      u
    }
    const oy = ee => {
        document.prerendering ? addEventListener("prerenderingchange", ee, !0) : ee()
      },
      Ry = [1800, 3e3],
      ky = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = Ky(ie);
        oy((() => {
          const ye = jH(ie, Jy),
            be = yy();
          let Me, Ke = by("FCP");
          const Ue = My(["paint"], (ee => {
            for (const ie of ee) "first-contentful-paint" === ie.name && (Ue.disconnect(), ie.startTime < be.firstHiddenTime && (Ke.value = Math.max(ie.startTime - rH(), 0), Ke.entries.push(ie), Ke.navigationId = ie.navigationId || Ke.navigationId, Me(!0)))
          }));
          Ue && (Me = NH(ee, Ke, Ry, ie.reportAllChanges), hH((He => {
            Ke = by("FCP", -1, "back-forward-cache", Ke.navigationId, Ke.navigationInteractionId, Ke.navigationURL, IH()), Me = NH(ee, Ke, Ry, ie.reportAllChanges), GH((() => {
              Ke.value = performance.now() - He.timeStamp, Me(!0)
            }))
          }))), He && My(["soft-navigation"], (He => {
            He.forEach((He => {
              ye.u && He.navigationId && Uy(ye.u, He);
              const be = Math.max((He.presentationTime || He.paintTime || 0) - He.startTime, 0);
              Ke = by("FCP", be, "soft-navigation", He.navigationId, He.interactionId, He.name, He.startTime), Me = NH(ee, Ke, Ry, ie.reportAllChanges), Me(!0)
            }))
          }), ie)
        }))
      },
      qy = [.1, .25],
      fy = ee => ee.find((ee => 1 === ee.node?.nodeType)) || ee[0];
    let Ty = 0,
      py = 1 / 0,
      Xy = 0;
    const zy = ee => {
      for (const ie of ee) ie.interactionId && (py = Math.min(py, ie.interactionId), Xy = Math.max(Xy, ie.interactionId), Ty = Xy ? (Xy - py) / 7 + 1 : 0)
    };
    let By;
    const Ey = () => By ? Ty : performance.interactionCount ?? 0;
    class gy {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return Ey() - this.h
      }
      D() {
        this.h = Ey(), this.v.length = 0, this.p.clear()
      }
      S(ee) {
        const ie = this.T(),
          He = Math.min(this.v.length - 1, Math.floor(ie / 50));
        return !ie || -1 !== He || "soft-navigation" !== ee && "back-forward-cache" !== ee ? this.v[He] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(ee) {
        if (this.m?.(ee), !ee.interactionId) return;
        const ie = this.v.at(-1);
        let He = this.p.get(ee.interactionId);
        if (He || this.v.length < 10 || ee.duration > ie.k) {
          if (He ? ee.duration > He.k ? (He.entries = [ee], He.k = ee.duration) : ee.duration === He.k && ee.startTime === He.entries[0].startTime && He.entries.push(ee) : (He = {
              id: ee.interactionId,
              entries: [ee],
              k: ee.duration
            }, this.p.set(He.id, He), this.v.push(He)), this.v.sort(((ee, ie) => ie.k - ee.k)), this.v.length > 10) {
            const ee = this.v.splice(10);
            for (const ie of ee) this.p.delete(ie.id)
          }
          this.M?.(He)
        }
      }
    }
    const Oy = ee => {
        const ie = "requestIdleCallback" in globalThis ? 1e3 : 0,
          He = globalThis.requestIdleCallback || setTimeout,
          ye = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) ee();
        else {
          const be = Fy(ee);
          let Me = -1;
          const Ke = () => {
            ye(Me), be()
          };
          addEventListener("visibilitychange", Ke, {
            once: !0,
            capture: !0
          }), Me = He((() => {
            removeEventListener("visibilitychange", Ke, {
              capture: !0
            }), be()
          }), {
            timeout: ie
          })
        }
      },
      dy = [200, 500],
      Wy = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = jH(ie = Object.assign({}, ie), gy);
        let ye = [],
          be = [],
          Me = 0;
        const Ke = new WeakMap,
          Ue = new WeakMap;
        let Fe = !1;
        const Je = () => {
            Fe || (Fe = !0, Oy(oe))
          },
          oe = () => {
            const ee = new Set(He.v.map((ee => Ke.get(ee.entries[0])))),
              ie = be.length - 10;
            be = be.filter(((He, ye) => ye >= ie || ee.has(He)));
            const Ue = new Set;
            for (const He of be) {
              const ee = Re(He.startTime, He.processingEnd);
              for (const ie of ee) Ue.add(ie)
            }
            const Je = ye.length - 10;
            ye = ye.filter(((ee, ie) => Ue.has(ee) || ie >= Je && ee.startTime > Me)), Fe = !1
          };
        He.m = ee => {
          const He = ee.startTime + ee.duration;
          let ye;
          Me = Math.max(Me, ee.processingEnd);
          for (let Me = be.length - 1; Me >= 0; Me--) {
            const Ke = be[Me];
            if (Math.abs(He - Ke.renderTime) <= 8) {
              ye = Ke, ye.startTime = Math.min(ee.startTime, ye.startTime), ye.processingStart = Math.min(ee.processingStart, ye.processingStart), ye.processingEnd = Math.max(ee.processingEnd, ye.processingEnd), ie.includeProcessedEventEntries && ye.entries.push(ee);
              break
            }
          }
          ye || (ye = {
            startTime: ee.startTime,
            processingStart: ee.processingStart,
            processingEnd: ee.processingEnd,
            renderTime: He,
            entries: ie.includeProcessedEventEntries ? [ee] : []
          }, be.push(ye)), ee.interactionId && Ke.set(ee, ye), Je()
        }, He.M = ee => {
          if (!Ue.get(ee)) {
            const He = ee.entries.find((ee => ee.target))?.target;
            if (He) {
              const ye = ie.generateTarget?.(He) ?? SH(He);
              Ue.set(ee, ye)
            } else {
              const ie = ee.entries.find((ee => ee.targetSelector))?.targetSelector;
              ie && Ue.set(ee, ie)
            }
          }
        };
        const Re = (ee, ie) => {
          const He = [];
          for (const be of ye)
            if (!(be.startTime + be.duration < ee)) {
              if (be.startTime > ie) break;
              He.push(be)
            } return He
        };
        My(["long-animation-frame"], (ee => {
            ye = ye.concat(ee), Je()
          }), ie),
          function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const He = yy();
            oy((() => {
              "interactionCount" in performance || By || (By = My(["event"], zy, {
                durationThreshold: 0
              }));
              let ye, be = by("INP");
              const Me = jH(ie, gy),
                Ke = (He, Ke, Ue, Fe, Je) => {
                  Me.D(), be = by("INP", -1, He, Ke, Ue, Fe, Je), ye = NH(ee, be, dy, ie.reportAllChanges)
                },
                Ue = () => {
                  const ee = Me.S(be.navigationType);
                  ee && ee.k !== be.value && (be.value = ee.k, be.entries = ee.entries, ye())
                },
                Fe = ee => {
                  Ue(), ye(!0), Ke("soft-navigation", ee.navigationId, ee.interactionId, ee.name, ee.startTime)
                },
                Je = function(ee) {
                  let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  Oy((() => {
                    for (const ie of ee) "soft-navigation" !== ie.entryType ? Me.l(ie) : Fe(ie);
                    Ue(), ie && ye(!0)
                  }))
                },
                oe = ["event", "first-input"];
              Ky(ie) && oe.push("soft-navigation");
              const Re = My(oe, Je, {
                ...ie,
                durationThreshold: ie.durationThreshold ?? 40
              });
              ye = NH(ee, be, dy, ie.reportAllChanges), Re && (He.onHidden((() => {
                Je(Re.takeRecords(), !0)
              })), hH((() => {
                Ke("back-forward-cache", be.navigationId, be.navigationInteractionId, be.navigationURL, IH())
              })))
            }))
          }((ie => {
            ee((ee => {
              if (0 === ee.entries.length) {
                const ie = ee.navigationStartTime || 0,
                  He = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: ee.value,
                    loadState: mH(ie)
                  };
                return Object.assign(ee, {
                  attribution: He
                })
              }
              const ie = ee.entries[0],
                ye = Ke.get(ie),
                be = Math.max(ye.processingStart, ie.startTime),
                Me = Math.max(ie.startTime + ie.duration, be),
                Fe = Math.min(ye.processingEnd, Me),
                Je = ye.entries.sort(((ee, ie) => ee.processingStart - ie.processingStart)),
                oe = Re(ie.startTime, Fe),
                ke = He.p.get(ie.interactionId),
                qe = {
                  interactionTarget: Ue.get(ke),
                  interactionType: ie.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: ie.startTime,
                  nextPaintTime: Me,
                  processedEventEntries: Je,
                  longAnimationFrameEntries: oe,
                  inputDelay: be - ie.startTime,
                  processingDuration: Fe - be,
                  presentationDelay: Me - Fe,
                  loadState: mH(ie.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (ee => {
                const ie = ee.interactionTime,
                  He = ee.nextPaintTime;
                if (!ee.longAnimationFrameEntries?.length || !ie || !He) return;
                const ye = ee.inputDelay,
                  be = ee.processingDuration;
                let Me, Ke, Ue = 0,
                  Fe = 0,
                  Je = 0,
                  oe = 0;
                for (const qe of ee.longAnimationFrameEntries) {
                  Fe = Fe + qe.startTime + qe.duration - qe.styleAndLayoutStart;
                  for (const ee of qe.scripts) {
                    const He = ee.startTime + ee.duration;
                    if (He < ie) continue;
                    const Je = He - Math.max(ie, ee.startTime),
                      Re = ee.duration ? Je / ee.duration * ee.forcedStyleAndLayoutDuration : 0;
                    Ue += Je - Re, Fe += Re, Je > oe && (Ke = ee.startTime < ie + ye ? "input-delay" : ee.startTime >= ie + ye + be ? "presentation-delay" : "processing-duration", Me = ee, oe = Je)
                  }
                }
                const Re = ee.longAnimationFrameEntries.at(-1),
                  ke = Re ? Re.startTime + Re.duration : 0;
                ke >= ie + ye + be && (Je = He - ke), Me && Ke && (ee.longestScript = {
                  entry: Me,
                  subpart: Ke,
                  intersectingDuration: oe
                }), ee.totalScriptDuration = Ue, ee.totalStyleAndLayoutDuration = Fe, ee.totalPaintDuration = Je, ee.totalUnattributedDuration = He - ie - Ue - Fe - Je
              })(qe), Object.assign(ee, {
                attribution: qe
              })
            })(ie))
          }), ie)
      };
    class ty {
      m;
      u;
      l(ee) {
        this.m?.(ee)
      }
    }
    const Zy = [2500, 4e3];
    let wy = 50;
    const Dy = [];
    My(["resource"], (ee => {
      for (const ie of ee) Dy.push(ie), Dy.length > wy && Dy.shift()
    }));
    const Py = [800, 1800],
      Ay = ee => {
        document.prerendering ? oy((() => Ay(ee))) : "complete" !== document.readyState ? addEventListener("load", (() => Ay(ee)), !0) : setTimeout(ee)
      },
      Yy = "load_state",
      Vy = "time_to_first_byte";
    var ay = class {
        constructor(ee, ie) {
          this.corePushMeasurement = ee, this.webVitalConfig = ie
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var ee;
          ! function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const He = jH(ie = Object.assign({}, ie), vH),
              ye = new WeakMap;
            He.t = ee => {
                if (ee?.sources?.length) {
                  const He = fy(ee.sources),
                    be = He?.node;
                  if (be) {
                    const ee = ie.generateTarget?.(be) ?? SH(be);
                    ye.set(He, ee)
                  }
                }
              },
              function(ee) {
                let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const He = yy();
                ky(Fy((() => {
                  let ye, be = by("CLS", 0);
                  const Me = jH(ie, vH),
                    Ke = (He, Ke, Ue, Fe, Je) => {
                      be = by("CLS", 0, He, Ke, Ue, Fe, Je), Me.o = 0, ye = NH(ee, be, qy, ie.reportAllChanges)
                    },
                    Ue = function() {
                      let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Me.o > be.value && (be.value = Me.o, be.entries = Me.i), ye(ee)
                    },
                    Fe = ee => {
                      Ue(!0), Ke("soft-navigation", ee.navigationId, ee.interactionId, ee.name, ee.startTime)
                    },
                    Je = ee => {
                      for (const ie of ee) "soft-navigation" !== ie.entryType ? Me.l(ie) : Fe(ie);
                      Ue()
                    },
                    oe = ["layout-shift"];
                  Ky(ie) && oe.push("soft-navigation");
                  const Re = My(oe, Je);
                  Re && (ye = NH(ee, be, qy, ie.reportAllChanges), He.onHidden((() => {
                    Je(Re.takeRecords()), ye(!0)
                  })), hH((() => {
                    Ke("back-forward-cache", be.navigationId, be.navigationInteractionId, be.navigationURL, IH()), GH(ye)
                  })), setTimeout(ye))
                })))
              }((ie => {
                ee((ee => {
                  let ie = {};
                  if (ee.entries.length) {
                    const He = ee.entries.reduce(((ee, ie) => ee.value > ie.value ? ee : ie));
                    if (He?.sources?.length) {
                      const ee = fy(He.sources);
                      ee && (ie = {
                        largestShiftTarget: ye.get(ee),
                        largestShiftTime: He.startTime,
                        largestShiftValue: He.value,
                        largestShiftSource: ee,
                        largestShiftEntry: He,
                        loadState: mH(He.startTime)
                      })
                    }
                  }
                  return Object.assign(ee, {
                    attribution: ie
                  })
                })(ie))
              }), ie)
          }((ee => {
            const {
              loadState: ie,
              largestShiftValue: He,
              largestShiftTime: ye,
              largestShiftTarget: be
            } = ee.attribution, Me = this.buildInitialValues(ee);
            this.addIfPresent(Me, "largest_shift_value", He), this.addIfPresent(Me, "largest_shift_time", ye);
            const Ke = this.buildInitialContext(ee);
            this.addIfPresent(Ke, Yy, ie), this.addIfPresent(Ke, "largest_shift_target", be), this.pushMeasurement(Me, Ke)
          }), {
            reportAllChanges: null === (ee = this.webVitalConfig) || void 0 === ee ? void 0 : ee.reportAllChanges
          })
        }
        measureFCP() {
          var ee;
          ! function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const He = jH(ie = Object.assign({}, ie), Jy);
            Ky(ie) && (He.u = new Map), ky((ie => {
              ee((ee => {
                let ie = {
                  timeToFirstByte: 0,
                  firstByteToFCP: ee.value,
                  loadState: mH(IH())
                };
                if ("soft-navigation" !== ee.navigationType) {
                  if (ee.entries.length) {
                    const He = uH(),
                      ye = ee.entries.at(-1);
                    if (He) {
                      const be = He.responseStart,
                        Me = He.activationStart || 0,
                        Ke = Math.max(0, be - Me);
                      ie = {
                        timeToFirstByte: Ke,
                        firstByteToFCP: ee.value - Ke,
                        loadState: mH(ee.entries[0].startTime),
                        navigationEntry: He,
                        fcpEntry: ye
                      }
                    }
                  }
                } else {
                  const ye = He.u?.get(ee.navigationId);
                  ye && (ie = {
                    timeToFirstByte: 0,
                    firstByteToFCP: ee.value,
                    loadState: "complete",
                    navigationEntry: ye
                  })
                }
                return Object.assign(ee, {
                  attribution: ie
                })
              })(ie))
            }), ie)
          }((ee => {
            const {
              firstByteToFCP: ie,
              timeToFirstByte: He,
              loadState: ye
            } = ee.attribution, be = this.buildInitialValues(ee);
            this.addIfPresent(be, "first_byte_to_fcp", ie), this.addIfPresent(be, Vy, He);
            const Me = this.buildInitialContext(ee);
            this.addIfPresent(Me, Yy, ye), this.pushMeasurement(be, Me)
          }), {
            reportAllChanges: null === (ee = this.webVitalConfig) || void 0 === ee ? void 0 : ee.reportAllChanges
          })
        }
        measureINP() {
          var ee;
          Wy((ee => {
            var ie;
            const {
              interactionTime: He,
              presentationDelay: ye,
              inputDelay: be,
              processingDuration: Me,
              nextPaintTime: Ke,
              loadState: Ue,
              interactionTarget: Fe,
              interactionType: Je,
              totalScriptDuration: oe,
              totalStyleAndLayoutDuration: Re,
              totalPaintDuration: ke,
              totalUnattributedDuration: qe,
              longestScript: fe
            } = ee.attribution, Te = this.buildInitialValues(ee);
            this.addIfPresent(Te, "interaction_time", He), this.addIfPresent(Te, "presentation_delay", ye), this.addIfPresent(Te, "input_delay", be), this.addIfPresent(Te, "processing_duration", Me), this.addIfPresent(Te, "next_paint_time", Ke), this.addNumberIfDefined(Te, "total_script_duration", oe), this.addNumberIfDefined(Te, "total_style_and_layout_duration", Re), this.addNumberIfDefined(Te, "total_paint_duration", ke), this.addNumberIfDefined(Te, "total_unattributed_duration", qe), this.addNumberIfDefined(Te, "longest_script_intersecting_duration", null === fe || void 0 === fe ? void 0 : fe.intersectingDuration);
            const pe = this.buildInitialContext(ee);
            this.addIfPresent(pe, Yy, Ue), this.addIfPresent(pe, "interaction_target", Fe), this.addIfPresent(pe, "interaction_type", Je), this.addIfPresent(pe, "longest_script_subpart", null === fe || void 0 === fe ? void 0 : fe.subpart), this.addIfPresent(pe, "longest_script_invoker_type", null === fe || void 0 === fe ? void 0 : fe.entry.invokerType), (null === (ie = this.webVitalConfig) || void 0 === ie ? void 0 : ie.trackAttributionSources) && (this.addIfPresent(pe, "longest_script_invoker", null === fe || void 0 === fe ? void 0 : fe.entry.invoker), this.addIfPresent(pe, "longest_script_source_url", null === fe || void 0 === fe ? void 0 : fe.entry.sourceURL), this.addIfPresent(pe, "longest_script_source_function_name", null === fe || void 0 === fe ? void 0 : fe.entry.sourceFunctionName), this.addIfPresent(pe, "longest_script_source_char_position", void 0 !== (null === fe || void 0 === fe ? void 0 : fe.entry.sourceCharPosition) ? String(fe.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Te, pe)
          }), {
            reportAllChanges: null === (ee = this.webVitalConfig) || void 0 === ee ? void 0 : ee.reportAllChanges
          })
        }
        measureLCP() {
          var ee;
          ! function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (ie = Object.assign({}, ie)).resourceBufferSize && (wy = ie.resourceBufferSize);
            const He = jH(ie, ty),
              ye = new WeakMap;
            Ky(ie) && (He.u = new Map), He.m = ee => {
                const He = ee.element;
                if (He) {
                  const be = ie.generateTarget?.(He) ?? SH(He);
                  ye.set(ee, be)
                } else ee.id && ye.set(ee, `#${ee.id}`)
              },
              function(ee) {
                let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  He = !1;
                const ye = Ky(ie);
                oy((() => {
                  let be, Me = yy(),
                    Ke = by("LCP");
                  const Ue = jH(ie, ty),
                    Fe = (ye, Ue, Fe, Je, oe) => {
                      Ke = by("LCP", -1, ye, Ue, Fe, Je, oe), be = NH(ee, Ke, Zy, ie.reportAllChanges), He = !1, "soft-navigation" === ye && (Me = yy(!0))
                    },
                    Je = ee => {
                      Ue.u && ee.navigationId && Uy(Ue.u, ee), He || be(!0), Fe("soft-navigation", ee.navigationId, ee.interactionId, ee.name, ee.startTime);
                      const ie = ee.getLargestInteractionContentfulPaint?.();
                      ie && oe([ie])
                    },
                    oe = ee => {
                      ie.reportAllChanges || ye || (ee = ee.slice(-1));
                      for (const ie of ee) {
                        if (!ie) continue;
                        if ("soft-navigation" === ie.entryType) {
                          Je(ie);
                          continue
                        }
                        let ee = 0,
                          He = [],
                          ye = ie.startTime;
                        if ("largest-contentful-paint" === ie.entryType) ee = Math.max(ie.startTime - rH(), 0), Ue.l(ie), He = [ie];
                        else if ("interaction-contentful-paint" === ie.entryType) {
                          const be = ie;
                          if (!Ke.navigationId) continue;
                          if ("interactionId" in be && be.interactionId != Ke.navigationInteractionId) continue;
                          ye = be.largestContentfulPaint?.renderTime || 0, ee = Math.max(ye - ie.startTime, 0), be.largestContentfulPaint && (Ue.l(be.largestContentfulPaint), He = [be.largestContentfulPaint])
                        }
                        ye < Me.firstHiddenTime && (Ke.value = ee, Ke.entries = He, be())
                      }
                    },
                    Re = ["largest-contentful-paint"];
                  ye && Re.push("interaction-contentful-paint", "soft-navigation");
                  const ke = My(Re, oe);
                  if (ke) {
                    be = NH(ee, Ke, Zy, ie.reportAllChanges);
                    const Me = ["keydown", "click", "visibilitychange"],
                      Ue = ee => {
                        if (ee.isTrusted && !He) {
                          const ee = Ke.id;
                          Oy((() => {
                            if (!He) {
                              if (!ye) {
                                ke.disconnect();
                                for (const ee of Me) removeEventListener(ee, Ue, {
                                  capture: !0
                                })
                              }
                              ee === Ke.id && (He = !0, be(!0))
                            }
                          }))
                        }
                      };
                    for (const ee of Me) addEventListener(ee, Ue, {
                      capture: !0
                    });
                    hH((ye => {
                      Fe("back-forward-cache", Ke.navigationId, Ke.navigationInteractionId, Ke.navigationURL, IH()), be = NH(ee, Ke, Zy, ie.reportAllChanges), GH((() => {
                        Ke.value = performance.now() - ye.timeStamp, He = !0, be(!0)
                      }))
                    }))
                  }
                }))
              }((ie => {
                ee((ee => {
                  let ie = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: ee.value
                  };
                  if (ee.entries.length) {
                    const be = ee.entries.at(-1),
                      Me = ee => ee.name === be.url && (ee.requestStart || ee.startTime) <= be.startTime,
                      Ke = be.url && (Dy.findLast(Me) || performance.getEntriesByType("resource").findLast(Me));
                    let Ue;
                    ie.target = ye.get(be), ie.lcpEntry = be, be.url && (ie.url = be.url), Ke && (ie.lcpResourceEntry = Ke);
                    let Fe = 0,
                      Je = 0;
                    if ("soft-navigation" !== ee.navigationType ? (Ue = uH(), Fe = Ue?.activationStart ?? 0, Je = Ue?.responseStart ?? 0) : (Fe = ee.navigationStartTime || 0, Ue = He.u?.get(ee.navigationId)), Ue) {
                      const He = Math.max(0, Je - Fe),
                        ye = Math.max(He, Ke ? (Ke.requestStart || Ke.startTime) - Fe : 0),
                        be = Math.min(ee.value, Math.max(ye, Ke ? Ke.responseEnd - Fe : 0));
                      ie = {
                        ...ie,
                        timeToFirstByte: He,
                        resourceLoadDelay: ye - He,
                        resourceLoadDuration: be - ye,
                        elementRenderDelay: ee.value - be,
                        navigationEntry: Ue
                      }
                    }
                  }
                  return Object.assign(ee, {
                    attribution: ie
                  })
                })(ie))
              }), ie)
          }((ee => {
            var ie;
            const {
              elementRenderDelay: He,
              resourceLoadDelay: ye,
              resourceLoadDuration: be,
              timeToFirstByte: Me,
              target: Ke,
              url: Ue,
              lcpResourceEntry: Fe
            } = ee.attribution, Je = this.buildInitialValues(ee);
            this.addIfPresent(Je, "element_render_delay", He), this.addIfPresent(Je, "resource_load_delay", ye), this.addIfPresent(Je, "resource_load_duration", be), this.addIfPresent(Je, Vy, Me);
            const oe = this.buildInitialContext(ee);
            this.addIfPresent(oe, "element", Ke), (null === (ie = this.webVitalConfig) || void 0 === ie ? void 0 : ie.trackAttributionSources) && (this.addIfPresent(oe, "resource_url", Ue), this.addIfPresent(oe, "resource_delivery_type", null === Fe || void 0 === Fe ? void 0 : Fe.deliveryType), this.addIfPresent(oe, "resource_initiator_type", null === Fe || void 0 === Fe ? void 0 : Fe.initiatorType)), this.pushMeasurement(Je, oe)
          }), {
            reportAllChanges: null === (ee = this.webVitalConfig) || void 0 === ee ? void 0 : ee.reportAllChanges
          })
        }
        measureTTFB() {
          var ee;
          ! function(ee) {
            ! function(ee) {
              let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const He = Ky(ie);
              let ye = by("TTFB"),
                be = NH(ee, ye, Py, ie.reportAllChanges);
              Ay((() => {
                const Me = uH();
                if (Me) {
                  const Ke = Me.responseStart;
                  ye.value = Math.max(Ke - rH(), 0), ye.entries = [Me], be(!0), hH((() => {
                    ye = by("TTFB", 0, "back-forward-cache", ye.navigationId, ye.navigationInteractionId, ye.navigationURL, IH()), be = NH(ee, ye, Py, ie.reportAllChanges), be(!0)
                  })), He && My(["soft-navigation"], (He => {
                    He.forEach((He => {
                      He.navigationId && (ye = by("TTFB", 0, "soft-navigation", He.navigationId, He.interactionId, He.name, He.startTime), ye.entries = [He], be = NH(ee, ye, Py, ie.reportAllChanges), be(!0))
                    }))
                  }), ie)
                }
              }))
            }((ie => {
              ee((ee => {
                const ie = ee.entries[0];
                let He = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: ie
                };
                if (ee.entries.length && ie instanceof PerformanceNavigationTiming) {
                  const ye = ie.activationStart || 0,
                    be = Math.max((ie.workerStart || ie.fetchStart || 0) - ye, 0),
                    Me = Math.max(ie.domainLookupStart - ye, 0),
                    Ke = Math.max(ie.connectStart - ye, 0),
                    Ue = Math.max(ie.connectEnd - ye, 0);
                  He = {
                    waitingDuration: be,
                    cacheDuration: Me - be,
                    dnsDuration: Ke - Me,
                    connectionDuration: Ue - Ke,
                    requestDuration: ee.value - Ue,
                    navigationEntry: ie
                  }
                }
                return Object.assign(ee, {
                  attribution: He
                })
              })(ie))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((ee => {
            const {
              dnsDuration: ie,
              connectionDuration: He,
              requestDuration: ye,
              waitingDuration: be,
              cacheDuration: Me
            } = ee.attribution, Ke = this.buildInitialValues(ee);
            this.addIfPresent(Ke, "dns_duration", ie), this.addIfPresent(Ke, "connection_duration", He), this.addIfPresent(Ke, "request_duration", ye), this.addIfPresent(Ke, "waiting_duration", be), this.addIfPresent(Ke, "cache_duration", Me);
            const Ue = this.buildInitialContext(ee);
            this.pushMeasurement(Ke, Ue)
          }), {
            reportAllChanges: null === (ee = this.webVitalConfig) || void 0 === ee ? void 0 : ee.reportAllChanges
          })
        }
        buildInitialValues(ee) {
          return {
            [ee.name.toLowerCase()]: ee.value,
            delta: ee.delta
          }
        }
        buildInitialContext(ee) {
          var ie;
          const He = null !== (ie = ei("com.grafana.faro.lastNavigationId", Ge)) && void 0 !== ie ? ie : LH;
          return {
            id: ee.id,
            rating: ee.rating,
            navigation_type: ee.navigationType,
            navigation_entry_id: He
          }
        }
        pushMeasurement(ee, ie) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: ee
          }, {
            context: ie
          })
        }
        addIfPresent(ee, ie, He) {
          He && (ee[ie] = He)
        }
        addNumberIfDefined(ee, ie, He) {
          void 0 !== He && (ee[ie] = He)
        }
      },
      cy = class extends yH {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = bH
        }
        initialize() {
          this.logDebug("Initializing"), new ay(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const xy = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function Ly() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const ie of ee)
        if ("traceparent" === ie.name) {
          if (!xy.test(ie.description)) continue;
          const [, ee, He] = ie.description.split("-");
          if (null != ee && null != He) return {
            traceId: ee,
            spanId: He
          };
          break
        }
    }

    function Cy(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: He,
        monoNow: ye
      } = ie;
      return Math.min(He, He - (ye - ee))
    }

    function vy(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [He, ye] of Object.entries(ie)) {
        const ie = ee[He];
        return null != ie && (Pe(ye) ? ye.includes(ie) : ie === ye)
      }
      return !0
    }

    function uy(ee) {
      const {
        connectEnd: ie,
        connectStart: He,
        decodedBodySize: ye,
        domainLookupEnd: be,
        domainLookupStart: Me,
        duration: Ke,
        encodedBodySize: Ue,
        fetchStart: Fe,
        initiatorType: Je,
        name: oe,
        nextHopProtocol: Re,
        redirectEnd: ke,
        redirectStart: qe,
        renderBlockingStatus: fe,
        requestStart: Te,
        responseEnd: pe,
        responseStart: Xe,
        responseStatus: ze,
        secureConnectionStart: Be,
        transferSize: Ee,
        workerStart: ge
      } = ee;
      return {
        name: oe,
        httpHost: ly(oe),
        duration: Sy(Ke),
        tcpHandshakeTime: Sy(ie - He),
        dnsLookupTime: Sy(be - Me),
        tlsNegotiationTime: Sy(ie - Be),
        responseStatus: Sy(ze),
        redirectTime: Sy(ke - qe),
        requestTime: Sy(Xe - Te),
        responseTime: Sy(pe - Xe),
        fetchTime: Sy(pe - Fe),
        serviceWorkerTime: Sy(ge > 0 ? Fe - ge : 0),
        decodedBodySize: Sy(ye),
        encodedBodySize: Sy(Ue),
        cacheHitStatus: function() {
          let ee = "fullLoad";
          0 === Ee ? ye > 0 && (ee = "cache") : null != ze ? 304 === ze && (ee = "conditionalFetch") : Ue > 0 && Ee < Ue && (ee = "conditionalFetch");
          return ee
        }(),
        renderBlockingStatus: Sy(fe),
        protocol: Re,
        initiatorType: Je,
        visibilityState: document.visibilityState,
        ttfb: Sy(Xe - Te),
        transferSize: Sy(Ee)
      }
    }

    function my(ee) {
      const {
        activationStart: ie,
        domComplete: He,
        domContentLoadedEventEnd: ye,
        domContentLoadedEventStart: be,
        domInteractive: Me,
        fetchStart: Ke,
        loadEventEnd: Ue,
        loadEventStart: Fe,
        responseStart: Je,
        type: oe
      } = ee, Re = function() {
        var ee;
        return null != (null === (ee = performance.timing) || void 0 === ee ? void 0 : ee.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return oi(oi({}, uy(ee)), {}, {
        pageLoadTime: Sy(He - Ke),
        documentParsingTime: Sy(Re ? Me - Re : null),
        domProcessingTime: Sy(He - Me),
        domContentLoadHandlerTime: Sy(ye - be),
        onLoadTime: Sy(Ue - Fe),
        ttfb: Sy(Math.max(Je - (null !== ie && void 0 !== ie ? ie : 0), 0)),
        type: oe
      })
    }

    function ly(ee) {
      try {
        return new URL(ee).host || LH
      } catch (ie) {
        return LH
      }
    }

    function Sy(ee) {
      return null == ee ? LH : "number" === typeof ee ? Math.round(ee > 0 ? ee : 0).toString() : ee.toString()
    }
    const ny = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function jy(ee, ie, He, ye, be, Me, Ke) {
      try {
        var Ue = ee[Me](Ke),
          Fe = Ue.value
      } catch (ee) {
        return void He(ee)
      }
      Ue.done ? ie(Fe) : Promise.resolve(Fe).then(ye, be)
    }

    function sy(ee) {
      return function() {
        var ie = this,
          He = arguments;
        return new Promise((function(ye, be) {
          var Me = ee.apply(ie, He);

          function Ke(ee) {
            jy(Me, ye, be, Ke, Ue, "next", ee)
          }

          function Ue(ee) {
            jy(Me, ye, be, Ke, Ue, "throw", ee)
          }
          Ke(void 0)
        }))
      }
    }
    const Iy = new EH;
    var hy = class extends yH {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = bH
      }
      initialize() {
        var ee = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let ie = !1;
        const He = () => {
          ! function(ee) {
            if ("complete" === document.readyState) ee();
            else {
              const ie = () => {
                "complete" === document.readyState && (ee(), document.removeEventListener("readystatechange", ie))
              };
              document.addEventListener("readystatechange", ie)
            }
          }(sy((function*() {
            if (ie) return;
            const He = ee.api.pushEvent,
              {
                faroNavigationId: ye
              } = yield function(ee) {
                let ie;
                const He = new Promise((ee => {
                  ie = ee
                }));
                return new PerformanceObserver((He => {
                  var ye;
                  const [be] = He.getEntries();
                  if (null == be || he(be.name)) return;
                  const Me = be.toJSON();
                  let Ke = Ly(null === Me || void 0 === Me ? void 0 : Me.serverTiming);
                  const Ue = null !== (ye = ei("com.grafana.faro.lastNavigationId", Ge)) && void 0 !== ye ? ye : LH,
                    Fe = oi(oi({}, my(Me)), {}, {
                      faroNavigationId: zi(),
                      faroPreviousNavigationId: Ue
                    });
                  ii("com.grafana.faro.lastNavigationId", Fe.faroNavigationId, Ge), ee("faro.performance.navigation", Fe, void 0, {
                    spanContext: Ke,
                    timestampOverwriteMs: Cy(Me.startTime)
                  }), ie(Fe)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), He
              }(He);
            ie || null == ye || function(ee, ie, He, ye) {
              const be = ye.trackResources;
              new PerformanceObserver((ye => {
                const Me = ye.getEntries(),
                  Ke = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Ue of Me) {
                  if (he(Ue.name)) continue;
                  null === He || void 0 === He || He.notify({
                    type: "resource"
                  });
                  const ye = Ue.toJSON();
                  let Me = Ly(null === ye || void 0 === ye ? void 0 : ye.serverTiming);
                  (null == be && vy(ye, ny) || be) && ie("faro.performance.resource", oi(oi({}, uy(ye)), {}, {
                    faroNavigationId: ee,
                    faroResourceId: zi()
                  }), void 0, {
                    spanContext: Me,
                    timestampOverwriteMs: Cy(ye.startTime, Ke)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(ye, He, Iy, ee.config)
          })))
        };
        this.cancelInitialization = () => {
          ie = !0, document.removeEventListener("prerenderingchange", He)
        }, document.prerendering ? document.addEventListener("prerenderingchange", He, {
          once: !0
        }) : He()
      }
      destroy() {
        var ee;
        null === (ee = this.cancelInitialization) || void 0 === ee || ee.call(this), this.cancelInitialization = void 0
      }
    };
    const Ny = "data-faro-user-action-name",
      Gy = Ny.replace(/-name$/, "-timeout"),
      ry = 1e3;

    function Qy(ee) {
      return `data-${(ee.startsWith("data-")?ee.slice(5):ee).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function eb(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ni;
      if (void 0 === ee) return ie;
      let ye = NaN;
      try {
        ye = "string" === typeof ee && "" === ee.trim() ? NaN : Number(ee)
      } catch (be) {}
      return !Number.isFinite(ye) || ye <= 0 ? (He(`initialActivityTimeout must be a finite number greater than zero; using ${ie} ms`), ie) : ye > 1e3 ? (He(`initialActivityTimeout cannot exceed ${ry} ms; clamping to the maximum`), ry) : ye
    }

    function ib(ee, ie, He) {
      return void 0 !== ee && window.clearTimeout(ee), window.setTimeout((() => {
        ie()
      }), He)
    }

    function Hb(ee) {
      return ee.type === BH
    }
    let yb, bb;

    function Mb() {
      return yb || (yb = new EH), bb || (bb = new MutationObserver(((ee, ie) => {
        yb.notify({
          type: "dom-mutation"
        })
      })), bb.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), yb
    }
    const Kb = "fetch",
      Ub = "xhr";
    let Fb, Jb, ob, Rb, kb = !1;

    function qb() {
      if (Fb) return Fb;

      function ee(ee) {
        Fb.notify({
          type: zH,
          request: ee
        })
      }

      function ie(ee) {
        Fb.notify({
          type: BH,
          request: ee
        })
      }
      return Fb = new EH, kb || (! function(ee) {
        let {
          onRequestEnd: ie,
          onRequestStart: He
        } = ee;
        ob || (ob = window.fetch);
        window.fetch = function() {
          var ee, ye;
          const be = null !== (ee = Ne(arguments[0])) && void 0 !== ee ? ee : "",
            Me = he(be),
            Ke = (null !== (ye = arguments[1]) && void 0 !== ye ? ye : {}).method,
            Ue = zi();
          return Me || He({
            url: be,
            method: Ke,
            requestId: Ue,
            apiType: Kb
          }), ob.apply(this, arguments).then((ee => (Me || ie({
            url: be,
            method: Ke,
            requestId: Ue,
            apiType: Kb
          }), ee))).catch((ee => {
            throw Me || ie({
              url: be,
              method: Ke,
              requestId: Ue,
              apiType: Kb
            }), ee
          }))
        }
      }({
        onRequestStart: ee,
        onRequestEnd: ie
      }), function(ee) {
        let {
          onRequestStart: ie,
          onRequestEnd: He
        } = ee;
        Jb || (Jb = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const ee = arguments[1],
            ye = he(ee),
            be = arguments[0],
            Me = zi();
          this.addEventListener("loadstart", (function() {
            ye || ie({
              url: ee,
              method: be,
              requestId: Me,
              apiType: Ub
            })
          })), this.addEventListener("load", (function() {
            ye || He({
              url: ee,
              method: be,
              requestId: Me,
              apiType: Ub
            })
          })), this.addEventListener("error", (function() {
            ye || He({
              url: ee,
              method: be,
              requestId: Me,
              apiType: Ub
            })
          })), this.addEventListener("abort", (function() {
            ye || He({
              url: ee,
              method: be,
              requestId: Me,
              apiType: Ub
            })
          })), Jb.apply(this, arguments)
        }
      }({
        onRequestStart: ee,
        onRequestEnd: ie
      }), kb = !0), Fb
    }
    let fb, Tb = !1;
    let pb = function(ee) {
      return ee[ee.Started = 0] = "Started", ee[ee.Halted = 1] = "Halted", ee[ee.Cancelled = 2] = "Cancelled", ee[ee.Ended = 3] = "Ended", ee
    }({});
    var Xb = class {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = ee, this.logDebug = ie, this.initialActivityTimeout = He, this.http = qb(), this.dom = Mb(), this.perf = (Rb || (Rb = new EH), Tb || (fb = Iy.subscribe((ee => {
          "resource" === ee.type && Rb.notify({
            type: "resource-entry"
          })
        })), Tb = !0), Rb), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new EH).merge(this.http, this.dom, this.perf).takeWhile((() => [pb.Started, pb.Halted].includes(this.userAction.getState()))).filter((ee => !!(this.userAction.getState() !== pb.Halted || Hb(ee) && this.runningRequests.has(ee.request.requestId)))).subscribe((ee => {
          (function(ee) {
            return ee.type === zH
          })(ee) && this.runningRequests.set(ee.request.requestId, ee.request), Hb(ee) && this.runningRequests.delete(ee.request.requestId), Hb(ee) ? this.userAction.getState() === pb.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((ee => [pb.Ended, pb.Cancelled].includes(ee))).first().subscribe((() => this.cleanup())), this.startupTid = ib(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === pb.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === pb.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = ib(this.haltTid, (() => {
          this.userAction.getState() === pb.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var ee, ie;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (ee = this.allMonitorsSub) || void 0 === ee || ee.unsubscribe(), null === (ie = this.stateSub) || void 0 === ie || ie.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(ee) {
        void 0 !== ee && window.clearTimeout(ee)
      }
    };

    function zb(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ni;
      var He;
      const {
        api: ye,
        config: be,
        internalLogger: Me
      } = ee, Ke = eb(null === (He = be.userActionsInstrumentation) || void 0 === He ? void 0 : He.initialActivityTimeout, 100, ie);
      return {
        processUserEvent: function(ee) {
          var ie, He;
          const Me = null !== (ie = null === (He = be.userActionsInstrumentation) || void 0 === He ? void 0 : He.dataAttributeName) && void 0 !== ie ? ie : Ny,
            Ke = ee.target;
          if (!(Ke instanceof Element)) return;
          const Ue = function(ee, ie) {
              let He = ee;
              for (; He;) {
                if (He.hasAttribute(ie)) return He;
                He = He.parentElement
              }
              return null
            }(Ke, Qy(Me)),
            Fe = function(ee, ie) {
              if (!ee) return;
              const He = function(ee) {
                  return Qy(ee).slice(5).replace(/-(.)/g, ((ee, ie) => ie.toUpperCase()))
                }(ie),
                ye = ee.dataset;
              for (const be in ye)
                if (be === He) return ye[be]
            }(Ue, Me);
          if (!Ue || !Fe) return;
          const Je = function(ee, ie) {
            const He = ee.getAttribute(function(ee) {
              const ie = Qy(ee);
              return ie.endsWith("-name") ? `${ie.slice(0,-5)}-timeout` : `${ie}-timeout`
            }(ie));
            return null === He ? void 0 : Number(He)
          }(Ue, Me);
          ye.startUserAction(Fe, {}, {
            triggerName: ee.type,
            initialActivityTimeout: Je
          })
        },
        processUserActionStarted: function(ee, He) {
          const ye = ee,
            be = eb(He, Ke, ie);
          new Xb(ye, Me.debug, be).attach()
        }
      }
    }
    const Bb = "user_action_start",
      Eb = {
        Normal: "normal",
        Critical: "critical"
      };
    var gb = class {
        constructor() {
          this.buffer = []
        }
        addItem(ee) {
          this.buffer.push(ee)
        }
        flushBuffer(ee) {
          if (De(ee))
            for (const ie of this.buffer) ee(ie);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Ob = class extends EH {
        constructor(ee) {
          let {
            name: ie,
            parentId: He,
            trigger: ye,
            transports: be,
            attributes: Me,
            trackUserActionsExcludeItem: Ke,
            importance: Ue = Eb.Normal,
            pushEvent: Fe
          } = ee;
          super(), this.name = ie, this.attributes = Me, this.id = zi(), this.trigger = ye, this.parentId = null !== He && void 0 !== He ? He : this.id, this.trackUserActionsExcludeItem = Ke, this.importance = Ue, this._pushEvent = Fe, this._itemBuffer = new gb, this._transports = be, this._state = 0, this._start()
        }
        addItem(ee) {
          return 0 === this._state && (this._itemBuffer.addItem(ee), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = ki(), this._startTimeMono = qi())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((ee => {
            this._transports.execute(ee)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const ee = ki(),
            ie = qi() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((ee => {
            if (function(ee, ie) {
                return (null === ie || void 0 === ie ? void 0 : ie(ee)) || "measurement" === ee.type && "web-vitals" === ee.payload.type
              }(ee, this.trackUserActionsExcludeItem)) return void this._transports.execute(ee);
            const ie = eH(eH({}, ee), {}, {
              payload: eH(eH({}, ee.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(ie)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", eH({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: ee.toString(),
            userActionDuration: ie.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Li(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: ee => (ee.action = {
              id: this.id,
              name: this.name
            }, ee)
          })
        }
        getState() {
          return this._state
        }
      };
    const db = new EH;

    function Wb(ee, ie) {
      return !!ee && (0 === (null === ee || void 0 === ee ? void 0 : ee.getState()) && (ee.addItem(ie), !0))
    }
    var tb = class extends yH {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = bH
        }
        initialize() {
          const {
            processUserEvent: ee,
            processUserActionStarted: ie
          } = zb(Te, (ee => this.logWarn(ee)));
          this._processUserEvent = ee, this._processKeydown = ie => {
            [" ", "Enter"].includes(ie.key) && ee(ie)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = db.subscribe((ee => {
            let {
              type: He,
              userAction: ye,
              initialActivityTimeout: be
            } = ee;
            "user_action_start" === He && ie(ye, be)
          }))
        }
        destroy() {
          var ee;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (ee = this._userActionSub) || void 0 === ee || ee.unsubscribe()
        }
      },
      Zb = class extends yH {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = bH, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(ee) {
          const ie = {
            blockedURI: ee.blockedURI,
            columnNumber: ee.columnNumber,
            disposition: ee.disposition,
            documentURI: ee.documentURI,
            effectiveDirective: ee.effectiveDirective,
            lineNumber: ee.lineNumber,
            originalPolicy: ee.originalPolicy,
            referrer: ee.referrer,
            sample: ee.sample,
            sourceFile: ee.sourceFile,
            statusCode: ee.statusCode,
            violatedDirective: ee.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Li(ie))
        }
      };
    var wb = class extends EH {
      constructor(ee, ie) {
        var He, ye, be, Me;
        super(), this._tracking = !1, this.eventsObservable = ee, this._options = {
          inactivityMs: null !== (He = null === ie || void 0 === ie ? void 0 : ie.inactivityMs) && void 0 !== He ? He : 100,
          drainTimeoutMs: null !== (ye = null === ie || void 0 === ie ? void 0 : ie.drainTimeoutMs) && void 0 !== ye ? ye : 1e4,
          isOperationStart: null !== (be = null === ie || void 0 === ie ? void 0 : ie.isOperationStart) && void 0 !== be ? be : () => {},
          isOperationEnd: null !== (Me = null === ie || void 0 === ie ? void 0 : ie.isOperationEnd) && void 0 !== Me ? Me : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((ee => {
          var ie;
          this._lastEventTime = qi(), null === (ie = this._currentEvents) || void 0 === ie || ie.push(ee);
          const He = this._options.isOperationStart(ee);
          var ye;
          He && (null === (ye = this._activeOperations) || void 0 === ye || ye.set(He, !0));
          const be = this._options.isOperationEnd(ee);
          var Me;
          be && (null === (Me = this._activeOperations) || void 0 === Me || Me.delete(be));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = qi(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let ee;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), ee = this.hasActiveOperations() ? qi() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: ee
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Db(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Db(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(ee) {
        ee && clearTimeout(ee)
      }
    };

    function Db(ee, ie, He) {
      return ee && clearTimeout(ee), ee = setTimeout((() => {
        ie()
      }), He)
    }
    let Pb;
    const Ab = new Set,
      Yb = new Map;
    let Vb, ab, cb, xb, Lb, Cb, vb, ub, mb = !1;
    var lb = class extends yH {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = bH
      }
      initialize() {
        const ee = qb(),
          ie = Mb(),
          He = function() {
            function ee(ee, ie) {
              const He = null !== ie && void 0 !== ie ? ie : location.href;
              He !== ab && (Vb.notify({
                type: "url-change",
                from: ab,
                to: He,
                trigger: ee
              }), ab = He)
            }
            if (Vb || (Vb = new EH, ab = location.href), !mb)
              if ("navigation" in window && "NavigateEvent" in window) {
                vb = ie => {
                  try {
                    const He = null === ie || void 0 === ie ? void 0 : ie.destination;
                    (null === He || void 0 === He ? void 0 : He.sameDocument) && "string" === typeof He.url && ee("navigate", He.url)
                  } catch (He) {}
                }, window.navigation.addEventListener("navigate", vb);
                const ie = window.NavigateEvent;
                ie && ie.prototype && "function" === typeof ie.prototype.intercept && (ub || (ub = ie.prototype.intercept), ie.prototype.intercept = function(ie) {
                  try {
                    const ie = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      He = null === this || void 0 === this ? void 0 : this.destination;
                    ie && He && !1 === He.sameDocument && "string" === typeof He.url && ee("navigate-intercept", He.url)
                  } catch (He) {}
                  return ub.call(this, ie)
                }), mb = !0
              } else cb || (cb = window.history.pushState), window.history.pushState = function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                const be = cb.apply(window.history, He);
                return ee("pushState"), be
              }, xb || (xb = window.history.replaceState), window.history.replaceState = function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                const be = xb.apply(window.history, He);
                return ee("replaceState"), be
              }, Lb = () => ee("popstate"), Cb = () => ee("hashchange"), window.addEventListener("popstate", Lb), window.addEventListener("hashchange", Cb), mb = !0;
            return Vb
          }(),
          ye = (be = ["pointerdown", "keydown"], Pb || (Pb = new EH), be.forEach((ee => {
            if (!Ab.has(ee)) {
              const ie = () => {
                Pb.notify({
                  type: "interaction",
                  name: ee
                })
              };
              window.addEventListener(ee, ie), Ab.add(ee), Yb.set(ee, ie)
            }
          })), Pb);
        var be;
        const Me = new wb((new EH).merge(ee, ie, He), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: ee => function(ee) {
            return ee.type === zH
          }(ee) ? ee.request.requestId : void 0,
          isOperationEnd: ee => function(ee) {
            return ee.type === BH
          }(ee) ? ee.request.requestId : void 0
        });
        Me.filter((ee => "tracking-ended" === ee.message)).subscribe((ee => {
          var ie, He;
          if ((null === (ie = ee.events) || void 0 === ie ? void 0 : ie.some((ee => "url-change" === ee.type))) && (null === (He = ee.events) || void 0 === He ? void 0 : He.some((ee => "dom-mutation" === ee.type)))) {
            var ye;
            const ie = null === (ye = ee.events) || void 0 === ye ? void 0 : ye.find((ee => "url-change" === ee.type));
            Te.api.pushEvent("faro.navigation", {
              fromUrl: null === ie || void 0 === ie ? void 0 : ie.from,
              toUrl: null === ie || void 0 === ie ? void 0 : ie.to,
              sameDocument: String(!0),
              duration: ee.duration
            })
          }
        })), ye.subscribe((() => {
          Me.startTracking()
        }))
      }
    };

    function Sb() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ie = [new tb, new xH, new cy, new MH, new CH, new lb];
      return !1 !== ee.enablePerformanceInstrumentation && ie.unshift(new hy), !1 !== ee.enableContentSecurityPolicyInstrumentation && ie.push(new Zb), !1 !== ee.captureConsole && ie.push(new aH), ie
    }
    var nb = He(7323);
    let jb, sb;

    function Ib() {
      const ee = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return jb === ee && sb || (sb = new nb.UAParser(ee).getResult(), jb = ee), sb
    }
    const hb = () => {
        const {
          browser: ee,
          os: ie,
          ua: He
        } = Ib(), {
          name: ye,
          version: be
        } = ee, {
          name: Me,
          version: Ke
        } = ie, Ue = navigator.language, Fe = He.includes("Mobi"), Je = function() {
          if (!ye || !be) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== ye && void 0 !== ye ? ye : LH,
            version: null !== be && void 0 !== be ? be : LH,
            os: `${null!==Me&&void 0!==Me?Me:LH} ${null!==Ke&&void 0!==Ke?Ke:LH}`,
            userAgent: null !== He && void 0 !== He ? He : LH,
            language: null !== Ue && void 0 !== Ue ? Ue : LH,
            mobile: Fe,
            brands: null !== Je && void 0 !== Je ? Je : LH,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Nb = () => {
        const {
          name: ee,
          version: ie
        } = Ib().os;
        if (!ee && !ie) return {};
        const He = {};
        return ee && (He.name = ee), ie && (He.version = ie), {
          os: He
        }
      };

    function Gb(ee) {
      var ie, He, ye;
      return {
        id: null !== (ie = null === (He = Te.config) || void 0 === He || null === (He = He.sessionTracking) || void 0 === He || null === (ye = He.generateSessionId) || void 0 === ye ? void 0 : ye.call(He)) && void 0 !== ie ? ie : zi(),
        attributes: ee
      }
    }
    const rb = () => ({
      sdk: {
        name: "faro-web",
        version: bH
      }
    });
    var Qb = class extends HH {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let eM = function(ee) {
      return ee.EXCEPTION = "exception", ee.LOG = "log", ee.MEASUREMENT = "measurement", ee.TRACE = "trace", ee.EVENT = "event", ee
    }({});
    const iM = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function HM(ee, ie) {
      var He, ye;
      if (void 0 === ie) return ee;
      if (void 0 === ee) return {
        resourceSpans: ie
      };
      const be = null === (He = ee.resourceSpans) || void 0 === He ? void 0 : He[0];
      if (void 0 === be) return ee;
      const Me = (null === be || void 0 === be ? void 0 : be.scopeSpans) || [],
        Ke = (null === ie || void 0 === ie || null === (ye = ie[0]) || void 0 === ye ? void 0 : ye.scopeSpans) || [];
      return eH(eH({}, ee), {}, {
        resourceSpans: [eH(eH({}, be), {}, {
          scopeSpans: [...Me, ...Ke]
        })]
      })
    }

    function yM(ee) {
      let ie = {
        meta: {}
      };
      return void 0 !== ee[0] && (ie.meta = ee[0].meta), ee.forEach((ee => {
        switch (ee.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const He = iM[ee.type],
              ye = ie[He];
            ie = eH(eH({}, ie), {}, {
              [He]: void 0 === ye ? [ee.payload] : [...ye, ee.payload]
            });
            break
          }
          case "trace":
            ie = eH(eH({}, ie), {}, {
              traces: HM(ie.traces, ee.payload.resourceSpans)
            })
        }
      })), ie
    }
    var bM = class extends Qb {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = ee, this.name = "@grafana/faro-web-sdk:transport-console", this.version = bH
      }
      send(ee) {
        var ie;
        return this.unpatchedConsole[null !== (ie = this.options.level) && void 0 !== ie ? ie : gH.DEBUG]("New event", yM([ee]))
      }
    };
    const MM = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      KM = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      UM = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      FM = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      JM = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      oM = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function RM(ee) {
      let {
        weekday: ie,
        day: He,
        month: ye,
        year: be,
        hour: Me,
        minute: Ke,
        second: Ue
      } = ee;
      if (be < 1900 || He < 1 || Me > 23 || Ke > 59 || Ue > 60) return;
      const Fe = 60 === Ue,
        Je = new Date(0);
      return Je.setUTCFullYear(be, ye, He), Je.setUTCHours(Me, Ke, Fe ? 59 : Ue, 0), Je.getUTCDay() === ie && Je.getUTCDate() === He && Je.getUTCMonth() === ye && Je.getUTCFullYear() === be && Je.getUTCHours() === Me && Je.getUTCMinutes() === Ke && Je.getUTCSeconds() === (Fe ? 59 : Ue) ? Je.getTime() + (Fe ? 1e3 : 0) : void 0
    }
    var kM = class {
      constructor(ee) {
        this.options = ee, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var ee = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const ie = this.sequence++;
        let He = !1;
        return {
          deliver: function() {
            var He = sy((function*(He) {
              const ye = ee.options.getNow();
              let be, Me = 0;
              for (;;) {
                var Ke, Ue, Fe;
                const Je = ee.options.retry.maxAttempts - Me,
                  oe = yield ee.runAttempt((() => He(Je, ee.unloading)), Me > 0);
                if (Me += oe.attemptsMade, "success" === oe.kind) return {
                  kind: "success",
                  attempts: Me,
                  elapsedTimeMs: ee.options.getNow() - ye
                };
                if (be = oe.failure, "terminal" === oe.kind || ee.unloading) return {
                  kind: "terminal",
                  attempts: Me,
                  elapsedTimeMs: ee.options.getNow() - ye,
                  failure: be
                };
                if (Me >= ee.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Me,
                  elapsedTimeMs: ee.options.getNow() - ye,
                  failure: be,
                  reason: "retries-exhausted"
                };
                if (null != oe.retryAfterMs && oe.retryAfterMs > ee.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Me,
                  elapsedTimeMs: ee.options.getNow() - ye,
                  failure: be,
                  reason: "retry-after-too-long"
                };
                const Re = Math.min(null !== (Ke = oe.retryAfterMs) && void 0 !== Ke ? Ke : ee.options.retry.initialBackoffMs * Math.pow(ee.options.retry.backoffMultiplier, Me - 1), ee.options.retry.maxBackoffMs);
                if (null === (Ue = (Fe = ee.options).onRetry) || void 0 === Ue || Ue.call(Fe, Re, Me + 1), yield ee.waitForTurn(ie, Re)) {
                  const ie = ee.options.retry.maxAttempts - Me,
                    be = yield ee.runAttempt((() => He(ie, !0)));
                  return Me += be.attemptsMade, {
                    kind: "success" === be.kind ? "success" : "terminal",
                    attempts: Me,
                    elapsedTimeMs: ee.options.getNow() - ye,
                    failure: "success" === be.kind ? void 0 : be.failure
                  }
                }
              }
            }));
            return function(ee) {
              return He.apply(this, arguments)
            }
          }(),
          release: () => {
            He || (He = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const ee = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const ie of ee) ie.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((He, ye) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const ie = () => {
                this.inProgress--, this.runNextAttempt()
              };
              ee().then((ee => {
                ie(), He(ee)
              }), (ee => {
                ie(), ye(ee)
              }))
            },
            isRedelivery: ie
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const ee = this.options.getNow(),
            ie = this.attemptQueue.findIndex((ie => {
              let {
                isRedelivery: He
              } = ie;
              return this.unloading || !He || ee >= this.nextSendAt
            }));
          if (ie < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - ee)));
          const [He] = this.attemptQueue.splice(ie, 1);
          He.isRedelivery && !this.unloading && (this.nextSendAt = ee + 1), He.run()
        }
      }
      waitForTurn(ee, ie) {
        const He = Math.min(ie * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((ie => {
          this.waiting.push({
            sequence: ee,
            readyAt: this.options.getNow() + He,
            resolve: ie
          }), this.waiting.sort(((ee, ie) => ee.readyAt === ie.readyAt ? ee.sequence - ie.sequence : ee.readyAt - ie.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const ee = this.waiting[0],
          ie = ee.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const ie = this.waiting.indexOf(ee);
          ie >= 0 && this.waiting.splice(ie, 1), ee.resolve(!1), this.scheduleNext()
        }), Math.max(0, ie - this.options.getNow()))
      }
    };

    function qM(ee, ie) {
      if (null == ee) return {};
      var He, ye, be = function(ee, ie) {
        if (null == ee) return {};
        var He = {};
        for (var ye in ee)
          if ({}.hasOwnProperty.call(ee, ye)) {
            if (ie.includes(ye)) continue;
            He[ye] = ee[ye]
          } return He
      }(ee, ie);
      if (Object.getOwnPropertySymbols) {
        var Me = Object.getOwnPropertySymbols(ee);
        for (ye = 0; ye < Me.length; ye++) He = Me[ye], ie.includes(He) || {}.propertyIsEnumerable.call(ee, He) && (be[He] = ee[He])
      }
      return be
    }

    function fM(ee) {
      const {
        size: ie,
        concurrency: He
      } = ee, ye = [];
      let be = 0;
      const Me = () => {
        if (be < He && ye.length) {
          const {
            producer: ee,
            resolve: ie,
            reject: He
          } = ye.shift();
          be++, ee().then((ee => {
            be--, Me(), ie(ee)
          }), (ee => {
            be--, Me(), He(ee)
          }))
        }
      };
      return {
        add: ee => {
          if (ye.length + be >= ie) throw new Error("Task buffer full");
          return new Promise(((ie, He) => {
            ye.push({
              producer: ee,
              resolve: ie,
              reject: He
            }), Me()
          }))
        }
      }
    }
    const TM = ["headers"],
      pM = ["keepalive", "signal"],
      XM = new Set([408, 425, 429, 500, 502, 503, 504]),
      zM = new Set([429, 503]);
    let BM = 0,
      EM = 0;
    var gM = class extends Error {};
    var OM = class extends Qb {
      constructor(ee) {
        var ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe;
        super(), this.options = ee, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = bH, this.pendingCustomSends = 0, this.getNow = null !== (ie = ee.getNow) && void 0 !== ie ? ie : Date.now, this.requestTimeoutMs = null !== (He = ee.requestTimeoutMs) && void 0 !== He ? He : 1e4, this.compressionEnabled = null !== (ye = ee.requestCompression) && void 0 !== ye && ye && "undefined" !== typeof CompressionStream, ee.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new kM({
          bufferSize: null !== (be = ee.bufferSize) && void 0 !== be ? be : 30,
          concurrency: null !== (Me = ee.concurrency) && void 0 !== Me ? Me : 5,
          retry: {
            maxAttempts: null !== (Ke = null === (Ue = ee.retry) || void 0 === Ue ? void 0 : Ue.maxAttempts) && void 0 !== Ke ? Ke : 3,
            initialBackoffMs: null !== (Fe = null !== (Je = null === (oe = ee.retry) || void 0 === oe ? void 0 : oe.initialBackoffMs) && void 0 !== Je ? Je : ee.defaultRateLimitBackoffMs) && void 0 !== Fe ? Fe : 1e3,
            maxBackoffMs: null !== (Re = null === (ke = ee.retry) || void 0 === ke ? void 0 : ke.maxBackoffMs) && void 0 !== Re ? Re : 3e4,
            backoffMultiplier: null !== (qe = null === (fe = ee.retry) || void 0 === fe ? void 0 : fe.backoffMultiplier) && void 0 !== qe ? qe : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Te = ee.getRandom) && void 0 !== Te ? Te : Math.random,
          onRetry: (ee, ie) => {
            this.logDebug(`Retrying failed request after ${ee}ms. Attempt ${ie}.`)
          }
        }), this.customPromiseBuffer = fM({
          size: null !== (pe = ee.bufferSize) && void 0 !== pe ? pe : 30,
          concurrency: null !== (Xe = ee.concurrency) && void 0 !== Xe ? Xe : 5
        }), this.defaultPromiseBuffer = {
          add: ee => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(ee);
            const ie = this.deliveryQueue.reserve();
            if (!ie) throw new Error("Task buffer full");
            return this.runBufferedTask(ie, ee)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (ee => {
          ee.persisted && this.deliveryQueue.resume()
        })))
      }
      send(ee) {
        var ie = this;
        return sy((function*() {
          const He = ie.promiseBuffer;
          if (He !== ie.defaultPromiseBuffer || He.add !== ie.defaultBufferAdd) {
            ie.pendingCustomSends++;
            try {
              yield He.add((() => ie.deliver(ee)))
            } catch (ye) {
              ie.logError("Permanent delivery failure", {
                error: ye,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              ie.pendingCustomSends--
            }
          } else yield ie.deliver(ee)
        }))()
      }
      runBufferedTask(ee, ie) {
        return sy((function*() {
          let He;
          try {
            return yield ee.deliver(sy((function*() {
              return He = yield ie(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), He
          } finally {
            ee.release()
          }
        }))()
      }
      deliver(ee) {
        var ie = this;
        return sy((function*() {
          const He = ie.deliveryQueue.reserve();
          if (He) try {
            const ye = yield ie.prepareRequest(ee), be = yield He.deliver(((ee, He) => ie.performAttempt(ye, ee, He)));
            "terminal" === be.kind && ie.logError("retries-exhausted" === be.reason ? "Delivery retries exhausted" : "Permanent delivery failure", oi(oi({}, be.failure), {}, {
              reason: be.reason,
              attempts: be.attempts,
              elapsedTimeMs: be.elapsedTimeMs
            }))
          } catch (ye) {
            ie.logError("Permanent delivery failure", {
              error: ye,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            He.release()
          } else ie.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var ee;
        return [this.options.url].concat(null !== (ee = this.config.ignoreUrls) && void 0 !== ee ? ee : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(ee) {
        var ie = this;
        return sy((function*() {
          var He, ye;
          const be = yM(ee),
            Me = null === (He = be.meta.session) || void 0 === He ? void 0 : He.id,
            Ke = JSON.stringify(be),
            Ue = null !== (ye = ie.options.requestOptions) && void 0 !== ye ? ye : {},
            {
              headers: Fe = {}
            } = Ue,
            Je = qM(Ue, TM),
            {
              keepalive: oe,
              signal: Re
            } = Je,
            ke = qM(Je, pM),
            qe = {};
          for (const [ee, ie] of Object.entries(Fe)) qe[ee] = "function" === typeof ie ? yield ie(): ie;
          let fe = Ke,
            Te = function(ee) {
              return "undefined" === typeof TextEncoder ? ee.length : (new TextEncoder).encode(ee).byteLength
            }(Ke);
          const pe = {};
          return ie.compressionEnabled && (fe = yield ie.compress(Ke), Te = fe.size, pe["Content-Encoding"] = "gzip"), {
            bodySize: Te,
            sessionId: Me,
            requestInit: oi({
              method: "POST",
              headers: oi(oi(oi(oi(oi({
                "Content-Type": "application/json"
              }, pe), qe), ie.options.apiKey ? {
                "x-api-key": ie.options.apiKey
              } : {}), Me ? {
                "x-faro-session-id": Me
              } : {}), {}, {
                "Idempotency-Key": zi(20)
              }),
              body: fe
            }, ke)
          }
        }))()
      }
      performAttempt(ee, ie, He) {
        var ye = this;
        return sy((function*() {
          var be;
          const Me = null === (be = ye.options.requestOptions) || void 0 === be ? void 0 : be.signal;
          if (null === Me || void 0 === Me ? void 0 : Me.aborted) return {
            kind: "terminal",
            failure: {
              error: Me.reason
            },
            attemptsMade: 0
          };
          let Ke = 0;
          try {
            var Ue;
            const be = yield ye.fetchWithKeepaliveFallback(ee.requestInit, ee.bodySize, !!He || (null === (Ue = ye.options.requestOptions) || void 0 === Ue ? void 0 : Ue.keepalive), ie, (() => Ke++));
            if (ye.handleResponse(be, ee.sessionId), be.status >= 200 && be.status < 300) return {
              kind: "success",
              attemptsMade: Ke
            };
            const Me = {
              status: be.status
            };
            return !XM.has(be.status) || He ? {
              kind: "terminal",
              failure: Me,
              attemptsMade: Ke
            } : {
              kind: "retry",
              failure: Me,
              attemptsMade: Ke,
              retryAfterMs: zM.has(be.status) ? ye.getRetryAfterDelayMs(be) : void 0
            }
          } catch (Fe) {
            const ee = {
              error: Fe
            };
            return (null === Me || void 0 === Me ? void 0 : Me.aborted) || !ye.isFetchNetworkError(Fe) || He ? {
              kind: "terminal",
              failure: ee,
              attemptsMade: Ke
            } : {
              kind: "retry",
              failure: ee,
              attemptsMade: Ke
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(ee, ie, He, ye, be) {
        var Me = this;
        return sy((function*() {
          const Ke = Me.getNow(),
            Ue = Me.reserveKeepalive(ie, He);
          try {
            return yield Me.fetchWithTimeout(oi(oi({}, ee), {}, {
              keepalive: Ue.keepalive
            }), Me.requestTimeoutMs, be)
          } catch (Je) {
            var Fe;
            if (Ue.keepalive && ye > 1 && Me.isFetchNetworkError(Je) && !(Je instanceof gM) && !(null === (Fe = Me.options.requestOptions) || void 0 === Fe || null === (Fe = Fe.signal) || void 0 === Fe ? void 0 : Fe.aborted)) {
              Me.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const ie = Me.requestTimeoutMs - (Me.getNow() - Ke);
              return Me.fetchWithTimeout(oi(oi({}, ee), {}, {
                keepalive: !1
              }), ie, be)
            }
            throw Je
          } finally {
            Ue.release()
          }
        }))()
      }
      fetchWithTimeout(ee, ie, He) {
        var ye = this;
        return sy((function*() {
          var be;
          const Me = null === (be = ye.options.requestOptions) || void 0 === be ? void 0 : be.signal;
          if (ye.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return He(), fetch(ye.options.url, oi(oi({}, ee), {}, {
            signal: Me
          }));
          if (ie <= 0) throw new gM("Request timed out");
          const Ke = new AbortController,
            Ue = () => Ke.abort(null === Me || void 0 === Me ? void 0 : Me.reason);
          null === Me || void 0 === Me || Me.addEventListener("abort", Ue, {
            once: !0
          });
          let Fe = !1;
          const Je = setTimeout((() => {
            Fe = !0, Ke.abort()
          }), ie);
          try {
            return He(), yield fetch(ye.options.url, oi(oi({}, ee), {}, {
              signal: Ke.signal
            }))
          } catch (oe) {
            if (Fe && !(null === Me || void 0 === Me ? void 0 : Me.aborted)) throw new gM("Request timed out");
            throw oe
          } finally {
            clearTimeout(Je), null === Me || void 0 === Me || Me.removeEventListener("abort", Ue)
          }
        }))()
      }
      getRetryAfterDelayMs(ee) {
        const ie = ee.headers.get("Retry-After");
        if (!ie) return;
        if (/^\d+$/.test(ie)) {
          const ee = 1e3 * Number(ie);
          return Number.isFinite(ee) ? ee : Number.POSITIVE_INFINITY
        }
        const He = this.getNow(),
          ye = function(ee, ie) {
            const He = MM.exec(ee);
            if (He) {
              const [, ee, ie, ye, be, Me, Ke, Ue] = He;
              return RM({
                weekday: FM.indexOf(ee),
                day: Number(ie),
                month: oM.indexOf(ye),
                year: Number(be),
                hour: Number(Me),
                minute: Number(Ke),
                second: Number(Ue)
              })
            }
            const ye = KM.exec(ee);
            if (ye) {
              const [, ee, He, Ke, Ue, Fe, Je, oe] = ye, Re = new Date(ie);
              if (Number.isNaN(Re.getTime())) return;
              const ke = Re.getUTCFullYear();
              let qe = 100 * Math.floor(ke / 100) + Number(Ue);
              qe < ke && (qe += 100);
              const fe = oM.indexOf(Ke),
                Te = {
                  month: fe,
                  day: Number(He),
                  hour: Number(Fe),
                  minute: Number(Je),
                  second: Number(oe),
                  millisecond: 0
                },
                pe = {
                  month: Re.getUTCMonth(),
                  day: Re.getUTCDate(),
                  hour: Re.getUTCHours(),
                  minute: Re.getUTCMinutes(),
                  second: Re.getUTCSeconds(),
                  millisecond: Re.getUTCMilliseconds()
                };
              return (qe > ke + 50 || qe === ke + 50 && (Me = pe, ((be = Te).month - Me.month || be.day - Me.day || be.hour - Me.hour || be.minute - Me.minute || be.second - Me.second || be.millisecond - Me.millisecond) > 0)) && (qe -= 100), RM({
                weekday: JM.indexOf(ee),
                day: Number(He),
                month: fe,
                year: qe,
                hour: Number(Fe),
                minute: Number(Je),
                second: Number(oe)
              })
            }
            var be, Me;
            const Ke = UM.exec(ee);
            if (!Ke) return;
            const [, Ue, Fe, Je, oe, Re, ke, qe, fe] = Ke;
            return RM({
              weekday: FM.indexOf(Ue),
              day: Number(null !== Je && void 0 !== Je ? Je : oe),
              month: oM.indexOf(Fe),
              year: Number(fe),
              hour: Number(Re),
              minute: Number(ke),
              second: Number(qe)
            })
          }(ie, He);
        return null == ye ? void 0 : Math.max(0, ye - He)
      }
      reserveKeepalive(ee, ie) {
        if (!1 === ie || ee > 6e4 || BM + ee > 6e4 || EM >= 9) return {
          keepalive: !1,
          release: ni
        };
        BM += ee, EM++;
        let He = !1;
        return {
          keepalive: !0,
          release: () => {
            He || (He = !0, BM -= ee, EM--)
          }
        }
      }
      handleResponse(ee, ie) {
        202 === ee.status && "invalid" === ee.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), ie), ee.text().catch(ni)
      }
      isFetchNetworkError(ee) {
        return ee instanceof TypeError || ee instanceof gM || ee instanceof DOMException && "AbortError" === ee.name
      }
      compress(ee) {
        return sy((function*() {
          const ie = [],
            He = new ReadableStream({
              start(ie) {
                ie.enqueue((new TextEncoder).encode(ee)), ie.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: ee,
              value: ye
            } = yield He.read();
            if (ee) return new Blob(ie);
            ie.push(ye)
          }
        }))()
      }
      extendFaroSession(ee, ie, He) {
        var ye, be;
        const Me = ee.sessionTracking;
        if (!(null === Me || void 0 === Me ? void 0 : Me.enabled)) return void ie("Session expired.");
        const {
          fetchUserSession: Ke,
          storeUserSession: Ue
        } = Si(Me), Fe = null === (ye = this.metas.value.session) || void 0 === ye ? void 0 : ye.id, Je = null === (be = Ke()) || void 0 === be ? void 0 : be.sessionId;
        He && He === Fe && He === Je ? (Ai({
          fetchUserSession: Ke,
          storeUserSession: Ue
        })({
          forceSessionExtend: !0
        }), ie("Session expired; created new session.")) : ie("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const dM = () => {
      const ee = window.k6;
      return {
        k6: oi({
          isK6Browser: !0
        }, (null === ee || void 0 === ee ? void 0 : ee.testRunId) && {
          testRunId: null === ee || void 0 === ee ? void 0 : ee.testRunId
        })
      }
    };
    let WM, tM;

    function ZM() {
      let {
        generatePageId: ee,
        initialPageMeta: ie
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const He = location.href;
        return De(ee) && WM !== He && (WM = He, tM = ee(location)), {
          page: oi(oi({
            url: He
          }, tM ? {
            id: tM
          } : {}), ie)
        }
      }
    }

    function wM() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iH,
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const He = si;
      return ie > 0 && (He.error = ie >= 1 ? function() {
        for (var ie = arguments.length, ye = new Array(ie), be = 0; be < ie; be++) ye[be] = arguments[be];
        ee.error(`${He.prefix}\n`, ...ye)
      } : ni, He.warn = ie >= 2 ? function() {
        for (var ie = arguments.length, ye = new Array(ie), be = 0; be < ie; be++) ye[be] = arguments[be];
        ee.warn(`${He.prefix}\n`, ...ye)
      } : ni, He.info = ie >= 3 ? function() {
        for (var ie = arguments.length, ye = new Array(ie), be = 0; be < ie; be++) ye[be] = arguments[be];
        ee.info(`${He.prefix}\n`, ...ye)
      } : ni, He.debug = ie >= 4 ? function() {
        for (var ie = arguments.length, ye = new Array(ie), be = 0; be < ie; be++) ye[be] = arguments[be];
        ee.debug(`${He.prefix}\n`, ...ye)
      } : ni), He
    }
    const DM = "faro",
      PM = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      AM = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function YM(ee) {
      var ie, He, be, Me, Ke, Ue;
      const Fe = [],
        oe = wM(ee.unpatchedConsole, ee.internalLoggerLevel);
      ee.transports ? ((ee.url || ee.apiKey) && oe.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Fe.push(...ee.transports)) : ee.url ? Fe.push(new OM({
        url: ee.url,
        apiKey: ee.apiKey,
        requestCompression: ee.requestCompression
      })) : oe.error('either "url" or "transports" must be defined');
      const {
        dedupe: Re = !0,
        eventDomain: ke = ye,
        globalObjectKey: qe = DM,
        instrumentations: fe = Sb(),
        internalLoggerLevel: Te = Ii,
        isolate: pe = !1,
        logArgsSerializer: Xe = VH,
        metas: ze = aM(ee),
        paused: Be = !1,
        preventGlobalExposure: Ee = !1,
        unpatchedConsole: ge = iH,
        url: Oe,
        experimental: de
      } = ee, We = qM(ee, AM), te = null !== (ie = null === de || void 0 === de ? void 0 : de.trackNavigation) && void 0 !== ie && ie, Ze = {
        dataAttributeName: Qy(null !== (He = null === (be = ee.userActionsInstrumentation) || void 0 === be ? void 0 : be.dataAttributeName) && void 0 !== He ? He : Ny),
        excludeItem: null === (Me = ee.userActionsInstrumentation) || void 0 === Me ? void 0 : Me.excludeItem,
        initialActivityTimeout: eb(null === (Ke = ee.userActionsInstrumentation) || void 0 === Ke ? void 0 : Ke.initialActivityTimeout, 100, (ee => oe.warn(ee)))
      };
      return oi(oi({}, We), {}, {
        batching: oi(oi({}, PM), ee.batching),
        dedupe: Re,
        globalObjectKey: qe,
        instrumentations: VM(fe, ee),
        internalLoggerLevel: Te,
        isolate: pe,
        logArgsSerializer: Xe,
        metas: ze,
        parseStacktrace: XH,
        paused: Be,
        preventGlobalExposure: Ee,
        transports: Fe,
        unpatchedConsole: ge,
        eventDomain: ke,
        ignoreUrls: [...null !== (Ue = ee.ignoreUrls) && void 0 !== Ue ? Ue : [], ...Oe ? [Oe] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: oi(oi(oi({}, Je), ee.sessionTracking), cM({
          trackGeolocation: ee.trackGeolocation,
          sessionTracking: ee.sessionTracking
        })),
        userActionsInstrumentation: Ze,
        experimental: {
          trackNavigation: te
        }
      })
    }

    function VM(ee, ie) {
      let {
        experimental: He
      } = ie;
      var ye;
      const be = null !== (ye = null === He || void 0 === He ? void 0 : He.trackNavigation) && void 0 !== ye && ye;
      return ee.filter((ee => !("@grafana/faro-web-sdk:instrumentation-navigation" === ee.name && !be)))
    }

    function aM(ee) {
      var ie, He, ye;
      const {
        page: be,
        generatePageId: Me
      } = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.pageTracking) && void 0 !== ie ? ie : {}, Ke = [hb, Nb, ZM({
        generatePageId: Me,
        initialPageMeta: be
      }), ...null !== (He = ee.metas) && void 0 !== He ? He : [], rb];
      return we(null === (ye = window) || void 0 === ye ? void 0 : ye.k6) ? [...Ke, dM] : Ke
    }

    function cM(ee) {
      let {
        trackGeolocation: ie,
        sessionTracking: He
      } = ee;
      var ye;
      const be = {};
      return te(ie) && (be.geoLocationTrackingEnabled = ie), se(be) ? {} : {
        session: oi(oi({}, null !== (ye = null === He || void 0 === He ? void 0 : He.session) && void 0 !== ye ? ye : {}), {}, {
          overrides: be
        })
      }
    }
    const xM = new WeakSet;

    function LM(ee) {
      return xM.add(ee), ee
    }

    function CM(ee, ie) {
      if (ee.capture) return LM(ee.capture(ie));
      const He = LM(ee.value);
      return null === ie || void 0 === ie || ie(), He
    }

    function vM(ee) {
      const ie = `__faroBundleId_${ee}`,
        He = null === oe || void 0 === oe ? void 0 : oe[ie];
      if ("string" === typeof He && "" !== He) return He;
      const ye = "undefined" !== typeof window ? window[ie] : void 0;
      return "string" === typeof ye && "" !== ye ? ye : void 0
    }

    function uM(ee) {
      var ie, He;
      const ye = ee.config.app.name,
        be = ye ? function(ee) {
          return null === oe || void 0 === oe ? void 0 : oe[`__faroGitHash_${ee}`]
        }(ye) : void 0,
        Me = {
          sdk: {
            version: bH,
            name: "faro"
          },
          app: eH({
            bundleId: ye && vM(ye)
          }, void 0 !== be ? {
            gitHash: be
          } : {})
        },
        Ke = null === (ie = ee.config.sessionTracking) || void 0 === ie ? void 0 : ie.session;
      Ke && ee.api.setSession(Ke), ee.config.app && (Me.app = eH(eH({}, ee.config.app), Me.app)), ee.config.user && (Me.user = ee.config.user), ee.config.view && (Me.view = ee.config.view), ee.metas.add(Me, ...null !== (He = ee.config.metas) && void 0 !== He ? He : [])
    }
    var mM = class {
      constructor(ee, ie) {
        var He, ye;
        this.signalBuffer = [], this.itemLimit = null !== (He = null === ie || void 0 === ie ? void 0 : ie.itemLimit) && void 0 !== He ? He : 50, this.sendTimeout = null !== (ye = null === ie || void 0 === ie ? void 0 : ie.sendTimeout) && void 0 !== ye ? ye : 250, this.paused = (null === ie || void 0 === ie ? void 0 : ie.paused) || !1, this.sendFn = ee, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(ee) {
        this.paused || (this.signalBuffer.push(ee), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(ee) {
        const ie = new Map;
        return ee.forEach((ee => {
          const He = JSON.stringify(ee.meta);
          let ye = ie.get(He);
          ye = void 0 === ye ? [ee] : [...ye, ee], ie.set(He, ye)
        })), Array.from(ie.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const ee = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(ee).forEach(this.sendFn)
        } catch (ie) {
          throw this.signalBuffer = [...ee, ...this.signalBuffer], this.trimBufferToLimit(), ie
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function lM(ee, ie, He, ye) {
      var be;
      ie.debug("Initializing transports");
      const Me = [];
      let Ke = [];
      const Ue = ee => {
        let ie = ee;
        for (const ye of Ke) {
          const ee = ie.map(ye).filter(Boolean);
          if (0 === ee.length) return [];
          ie = SM(ee, He)
        }
        return ie
      };
      let Fe;
      (null === (be = He.batching) || void 0 === be ? void 0 : be.enabled) && (Fe = new mM((ee => {
        const He = Ue(ee);
        if (0 !== He.length)
          for (const ye of Me) ie.debug(`Transporting item using ${ye.name}\n`, He), ye.isBatched() && ye.send(He)
      }), {
        sendTimeout: He.batching.sendTimeout,
        itemLimit: He.batching.itemLimit,
        paused: He.paused
      }));
      return {
        add: function() {
          ie.debug("Adding transports");
          for (var be = arguments.length, Ke = new Array(be), Ue = 0; Ue < be; Ue++) Ke[Ue] = arguments[Ue];
          Ke.forEach((be => {
            ie.debug(`Adding "${be.name}" transport`), Me.some((ee => ee === be)) ? ie.warn(`Transport ${be.name} is already added`) : (be.unpatchedConsole = ee, be.internalLogger = ie, be.config = He, be.metas = ye, Me.push(be))
          }))
        },
        addBeforeSendHooks: function() {
          ie.debug("Adding beforeSendHooks\n", Ke);
          for (var ee = arguments.length, He = new Array(ee), ye = 0; ye < ee; ye++) He[ye] = arguments[ye];
          He.forEach((ee => {
            ee && Ke.push(ee)
          }))
        },
        getBeforeSendHooks: () => [...Ke],
        execute: ee => {
          var be;
          if (!He.paused && mi(ye).shouldCapture()) {
            if (Re = ee.meta, !xM.has(Re)) {
              var Ke, Je, oe;
              const ie = null === (Ke = ye.value.session) || void 0 === Ke ? void 0 : Ke.id,
                be = CM(ye);
              if (He.paused) return;
              const Me = eH({}, ee.meta);
              (null === (Je = Me.session) || void 0 === Je ? void 0 : Je.id) === ie && (null === (oe = be.session) || void 0 === oe ? void 0 : oe.id) !== ie && (void 0 === be.session ? delete Me.session : Me.session = be.session), ee = eH(eH({}, ee), {}, {
                meta: LM(Me)
              })
            }
            var Re;
            (null === (be = He.batching) || void 0 === be ? void 0 : be.enabled) && (null === Fe || void 0 === Fe || Fe.addItem(ee)), (ee => {
              var ye;
              if ((null === (ye = He.batching) || void 0 === ye ? void 0 : ye.enabled) && Me.every((ee => ee.isBatched()))) return;
              const [be] = Ue([ee]);
              if (void 0 !== be)
                for (const Ue of Me) {
                  var Ke;
                  ie.debug(`Transporting item using ${Ue.name}\n`, be), Ue.isBatched() ? (null === (Ke = He.batching) || void 0 === Ke ? void 0 : Ke.enabled) || Ue.send([be]) : Ue.send(be)
                }
            })(ee)
          }
        },
        isPaused: () => He.paused,
        pause: () => {
          ie.debug("Pausing transports"), null === Fe || void 0 === Fe || Fe.pause(), He.paused = !0
        },
        remove: function() {
          ie.debug("Removing transports");
          for (var ee = arguments.length, He = new Array(ee), ye = 0; ye < ee; ye++) He[ye] = arguments[ye];
          He.forEach((ee => {
            ie.debug(`Removing "${ee.name}" transport`);
            const He = Me.indexOf(ee); - 1 !== He ? Me.splice(He, 1) : ie.warn(`Transport "${ee.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var ee = arguments.length, He = new Array(ee), ye = 0; ye < ee; ye++) He[ye] = arguments[ye];
          ie.debug("Removing beforeSendHooks"), Ke = Ke.filter((ee => !He.includes(ee)))
        },
        get transports() {
          return [...Me]
        },
        unpause: () => {
          ie.debug("Unpausing transports"), null === Fe || void 0 === Fe || Fe.start(), He.paused = !1
        }
      }
    }

    function SM(ee, ie) {
      if (ie.preserveOriginalError)
        for (const He of ee) "exception" === He.type && delete He.payload.originalError;
      return ee
    }
    let nM = iH;

    function jM(ee) {
      var ie;
      return nM = null !== (ie = ee.unpatchedConsole) && void 0 !== ie ? ie : nM, nM
    }
    let sM, IM = si;

    function hM(ee, ie) {
      return IM = wM(ee, ie.internalLoggerLevel), IM
    }

    function NM(ee) {
      let {
        internalLogger: ie,
        config: He,
        metas: ye,
        transports: be,
        tracesApi: Me,
        userActionsApi: Ke
      } = ee;
      var Ue;
      ie.debug("Initializing exceptions API");
      let Fe = null;
      sM = null !== (Ue = He.parseStacktrace) && void 0 !== Ue ? Ue : sM;
      const Je = ee => {
          ie.debug("Changing stacktrace parser"), sM = null !== ee && void 0 !== ee ? ee : sM
        },
        {
          ignoreErrors: oe = [],
          preserveOriginalError: Re
        } = He;
      return Je(He.parseStacktrace), {
        changeStacktraceParser: Je,
        getStacktraceParser: () => sM,
        pushError: function(ee) {
          let {
            skipDedupe: Ue,
            stackFrames: Je,
            type: ke,
            context: qe,
            spanContext: fe,
            timestampOverwriteMs: Te,
            originalError: pe,
            fingerprint: Xe,
            fatal: ze
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(ee, ie) {
              const {
                message: He,
                name: ye,
                stack: be
              } = ie;
              return Me = ee, Ke = He + " " + ye + " " + be, Me.some((ee => Oe(ee) ? Ke.includes(ee) : !!Ke.match(ee)));
              var Me, Ke
            }(oe, null !== pe && void 0 !== pe ? pe : ee)) try {
            var Be, Ee;
            if (!mi(ye).shouldCapture()) return;
            const oe = Li(eH(eH({}, function(ee) {
                let ie = ee.cause;
                Le(ie) ? ie = ee.cause.toString() : null !== ie && (we(ee.cause) || Pe(ee.cause)) ? ie = xi(ee.cause) : null != ie && (ie = ee.cause.toString());
                return null == ie ? {} : {
                  cause: ie
                }
              }(null !== pe && void 0 !== pe ? pe : ee)), null !== qe && void 0 !== qe ? qe : {})),
              Oe = eH(eH(eH(eH({
                type: ke || ee.name || "Error",
                value: ee.message,
                timestamp: Te ? Ti(Te) : fi(),
                trace: fe ? {
                  trace_id: fe.traceId,
                  span_id: fe.spanId
                } : Me.getTraceContext()
              }, se(oe) ? {} : {
                context: oe
              }), Re ? {
                originalError: pe
              } : {}), Xe ? {
                fingerprint: Xe
              } : {}), void 0 !== ze ? {
                fatal: ze
              } : {});
            Je = null !== (Be = Je) && void 0 !== Be ? Be : ee.stack ? null === sM || void 0 === sM ? void 0 : sM(ee).frames : void 0, (null === Je || void 0 === Je ? void 0 : Je.length) && (Oe.stacktrace = {
              frames: Je
            });
            const de = {
              type: Oe.type,
              value: Oe.value,
              stacktrace: Oe.stacktrace,
              context: Oe.context,
              fingerprint: Oe.fingerprint,
              fatal: null !== (Ee = Oe.fatal) && void 0 !== Ee && Ee
            };
            if (!Ue && He.dedupe && !ge(Fe) && Bi(de, Fe)) return void ie.debug("Skipping error push because it is the same as the last one\n", Oe);
            const We = Fe,
              te = CM(ye);
            if (Fe !== We && !Ue && He.dedupe && Bi(de, Fe)) return;
            Fe = de;
            const Ze = {
              meta: te,
              payload: Oe,
              type: "exception"
            };
            ie.debug("Pushing exception\n", Ze), Wb(Ke.getActiveUserAction(), Ze) || be.execute(Ze)
          } catch (de) {
            ie.error("Error pushing event", de)
          }
        }
      }
    }

    function GM(ee, ie, He, ye, be) {
      ie.debug("Initializing API");
      let Me = null;
      const Ke = function(ee) {
          let {
            transports: ie,
            internalLogger: He,
            config: ye,
            pushEvent: be
          } = ee;
          var Me;
          const Ke = null === (Me = ye.userActionsInstrumentation) || void 0 === Me ? void 0 : Me.excludeItem;
          let Ue;
          const Fe = () => Ue;
          return {
            startUserAction: (ee, ye, Me) => {
              if (void 0 === Fe()) {
                const He = new Ob({
                  name: ee,
                  transports: ie,
                  attributes: ye,
                  trigger: (null === Me || void 0 === Me ? void 0 : Me.triggerName) || "faroApiCall",
                  importance: (null === Me || void 0 === Me ? void 0 : Me.importance) || Eb.Normal,
                  trackUserActionsExcludeItem: Ke,
                  pushEvent: be
                });
                return He.filter((ee => [3, 2].includes(ee))).first().subscribe((() => {
                  Ue = void 0
                })), db.notify({
                  type: Bb,
                  userAction: He,
                  initialActivityTimeout: null === Me || void 0 === Me ? void 0 : Me.initialActivityTimeout
                }), Ue = He, Ue
              }
              He.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Fe
          }
        }({
          transports: be,
          config: He,
          internalLogger: ie,
          pushEvent: (ee, He, ye, be) => {
            Me ? Me(ee, He, ye, be) : ie.warn("pushEventImpl is not initialized. Event dropped:", {
              name: ee,
              attributes: He,
              domain: ye,
              options: be
            })
          }
        }),
        Ue = function(ee, ie, He, ye, be) {
          let Me;
          return ie.debug("Initializing traces API"), {
            getOTEL: () => Me,
            getTraceContext: () => {
              const ee = null === Me || void 0 === Me ? void 0 : Me.trace.getSpanContext(Me.context.active());
              return ee ? {
                trace_id: ee.traceId,
                span_id: ee.spanId
              } : void 0
            },
            initOTEL: (ee, He) => {
              ie.debug("Initializing OpenTelemetry"), Me = {
                trace: ee,
                context: He
              }
            },
            isOTELInitialized: () => !!Me,
            pushTraces: ee => {
              try {
                if (!mi(ye).shouldCapture()) return;
                const He = {
                  type: "trace",
                  payload: ee,
                  meta: CM(ye)
                };
                ie.debug("Pushing trace\n", He), be.execute(He)
              } catch (He) {
                ie.error("Error pushing trace\n", He)
              }
            }
          }
        }(0, ie, 0, ye, be),
        Fe = {
          unpatchedConsole: ee,
          internalLogger: ie,
          userActionsApi: Ke,
          config: He,
          metas: ye,
          transports: be,
          tracesApi: Ue
        },
        Je = function(ee) {
          let {
            internalLogger: ie,
            config: He,
            metas: ye,
            transports: be,
            tracesApi: Me,
            userActionsApi: Ke
          } = ee, Ue = null;
          return {
            pushEvent: function(ee, Fe, Je) {
              let {
                skipDedupe: oe,
                spanContext: Re,
                timestampOverwriteMs: ke,
                customPayloadTransformer: qe = ee => ee
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!mi(ye).shouldCapture()) return;
                const fe = Li(Fe),
                  Te = qe({
                    name: ee,
                    domain: null !== Je && void 0 !== Je ? Je : He.eventDomain,
                    attributes: se(fe) ? void 0 : fe,
                    timestamp: ke ? Ti(ke) : fi(),
                    trace: Re ? {
                      trace_id: Re.traceId,
                      span_id: Re.spanId
                    } : Me.getTraceContext()
                  }),
                  pe = {
                    name: Te.name,
                    attributes: Te.attributes,
                    domain: Te.domain
                  };
                if (!oe && He.dedupe && !ge(Ue) && Bi(pe, Ue)) return void ie.debug("Skipping event push because it is the same as the last one\n", Te);
                const Xe = Ue,
                  ze = CM(ye);
                if (Ue !== Xe && !oe && He.dedupe && Bi(pe, Ue)) return;
                Ue = pe;
                const Be = {
                  meta: ze,
                  payload: Te,
                  type: "event"
                };
                ie.debug("Pushing event\n", Be), Wb(Ke.getActiveUserAction(), Be) || be.execute(Be)
              } catch (fe) {
                ie.error("Error pushing event", fe)
              }
            }
          }
        }(Fe);
      return Me = Je.pushEvent, eH(eH(eH(eH(eH(eH(eH({}, Ue), NM(Fe)), function(ee) {
        let ie, He, ye, be, {
          internalLogger: Me,
          metas: Ke
        } = ee;
        Me.debug("Initializing meta API");
        const Ue = ee => {
            He && Ke.remove(He), He = {
              user: ee
            }, Ke.add(He)
          },
          Fe = (ee, He) => {
            var ye;
            const be = null === He || void 0 === He ? void 0 : He.overrides,
              Me = be ? {
                overrides: eH(eH({}, null === ie || void 0 === ie || null === (ye = ie.session) || void 0 === ye ? void 0 : ye.overrides), be)
              } : {};
            ie && Ke.remove(ie), ie = {
              session: eH(eH({}, se(ee) ? void 0 : ee), Me)
            }, Ke.add(ie)
          },
          Je = (ee, ie) => {
            mi(Ke).notifySessionUpdate({
              type: "replace",
              session: ee,
              overrides: null === ie || void 0 === ie ? void 0 : ie.overrides
            }), Fe(ee, ie)
          },
          oe = () => Ke.value.session,
          Re = () => Ke.value.page;
        return {
          setUser: Ue,
          resetUser: Ue,
          setSession: Je,
          resetSession: Je,
          getSession: oe,
          setView: (ee, ie) => {
            var He;
            if ((null === ie || void 0 === ie ? void 0 : ie.overrides) && (mi(Ke).notifySessionUpdate({
                type: "overrides",
                overrides: ie.overrides
              }), Fe(oe(), {
                overrides: ie.overrides
              })), (null === ye || void 0 === ye || null === (He = ye.view) || void 0 === He ? void 0 : He.name) === (null === ee || void 0 === ee ? void 0 : ee.name)) return;
            const be = ye;
            ye = {
              view: ee
            }, Ke.add(ye), be && Ke.remove(be)
          },
          getView: () => Ke.value.view,
          setPage: ee => {
            var ie;
            const He = Oe(ee) ? eH(eH({}, null !== (ie = null === be || void 0 === be ? void 0 : be.page) && void 0 !== ie ? ie : Re()), {}, {
              id: ee
            }) : ee;
            be && Ke.remove(be), be = {
              page: He
            }, Ke.add(be)
          },
          getPage: Re
        }
      }(Fe)), function(ee) {
        let {
          internalLogger: ie,
          config: He,
          metas: ye,
          transports: be,
          tracesApi: Me,
          userActionsApi: Ke
        } = ee;
        var Ue;
        ie.debug("Initializing logs API");
        let Fe = null;
        const Je = null !== (Ue = He.logArgsSerializer) && void 0 !== Ue ? Ue : VH;
        return {
          pushLog: function(ee) {
            let {
              context: Ue,
              level: oe,
              skipDedupe: Re,
              spanContext: ke,
              timestampOverwriteMs: qe
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!mi(ye).shouldCapture()) return;
              const fe = Li(Ue),
                Te = {
                  message: Je(ee),
                  level: null !== oe && void 0 !== oe ? oe : "log",
                  context: se(fe) ? void 0 : fe,
                  timestamp: qe ? Ti(qe) : fi(),
                  trace: ke ? {
                    trace_id: ke.traceId,
                    span_id: ke.spanId
                  } : Me.getTraceContext()
                },
                pe = {
                  message: Te.message,
                  level: Te.level,
                  context: Te.context
                };
              if (!Re && He.dedupe && !ge(Fe) && Bi(pe, Fe)) return void ie.debug("Skipping log push because it is the same as the last one\n", Te);
              const Xe = Fe,
                ze = CM(ye);
              if (Fe !== Xe && !Re && He.dedupe && Bi(pe, Fe)) return;
              Fe = pe;
              const Be = {
                type: "log",
                payload: Te,
                meta: ze
              };
              ie.debug("Pushing log\n", Be), Wb(Ke.getActiveUserAction(), Be) || be.execute(Be)
            } catch (fe) {
              ie.error("Error pushing log\n", fe)
            }
          }
        }
      }(Fe)), function(ee) {
        let {
          internalLogger: ie,
          config: He,
          metas: ye,
          transports: be,
          tracesApi: Me,
          userActionsApi: Ke
        } = ee;
        ie.debug("Initializing measurements API");
        let Ue = null;
        return {
          pushMeasurement: function(ee) {
            let {
              skipDedupe: Fe,
              context: Je,
              spanContext: oe,
              timestampOverwriteMs: Re
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!mi(ye).shouldCapture()) return;
              const ke = Li(Je),
                qe = eH(eH({}, ee), {}, {
                  trace: oe ? {
                    trace_id: oe.traceId,
                    span_id: oe.spanId
                  } : Me.getTraceContext(),
                  timestamp: Re ? Ti(Re) : fi(),
                  context: se(ke) ? void 0 : ke
                }),
                fe = {
                  type: qe.type,
                  values: qe.values,
                  context: qe.context
                };
              if (!Fe && He.dedupe && !ge(Ue) && Bi(fe, Ue)) return void ie.debug("Skipping measurement push because it is the same as the last one\n", qe);
              const Te = Ue,
                pe = CM(ye);
              if (Ue !== Te && !Fe && He.dedupe && Bi(fe, Ue)) return;
              Ue = fe;
              const Xe = {
                type: "measurement",
                payload: qe,
                meta: pe
              };
              ie.debug("Pushing measurement\n", Xe), Wb(Ke.getActiveUserAction(), Xe) || be.execute(Xe)
            } catch (ke) {
              ie.error("Error pushing measurement\n", ke)
            }
          }
        }
      }(Fe)), Je), Ke)
    }

    function rM(ee) {
      const ie = jM(ee),
        He = hM(ie, ee);
      if (fe() && !ee.isolate) return void He.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      He.debug("Initializing");
      const ye = function(ee, ie) {
          let He, ye = [],
            be = [],
            Me = [],
            Ke = 0,
            Ue = 0;
          const Fe = () => ye.reduce(((ee, ie) => Object.assign(ee, De(ie) ? ie() : ie)), {}),
            Je = () => {
              if (be.length) {
                const ee = Fe();
                be.forEach((ie => ie(ee)))
              }
            };
          return {
            add: function() {
              for (var ee = arguments.length, He = new Array(ee), be = 0; be < ee; be++) He[be] = arguments[be];
              ie.debug("Adding metas\n", He), ye.push(...He), Je()
            },
            remove: function() {
              for (var ee = arguments.length, He = new Array(ee), be = 0; be < ee; be++) He[be] = arguments[be];
              ie.debug("Removing metas\n", He), ye = ye.filter((ee => !He.includes(ee))), Je()
            },
            addListener: ee => {
              ie.debug("Adding metas listener\n", ee), be.push(ee)
            },
            removeListener: ee => {
              ie.debug("Removing metas listener\n", ee), be = be.filter((ie => ie !== ee))
            },
            capture: ee => {
              var ie;
              const ye = void 0 !== He,
                be = null !== (ie = He) && void 0 !== ie ? ie : Me;
              ye || (He = be, Ke = 0, Ue = be.length);
              try {
                for (; Ke < Ue;) {
                  const ee = be[Ke++];
                  null === ee || void 0 === ee || ee()
                }
                const ie = LM(Fe());
                return null === ee || void 0 === ee || ee(), ie
              } finally {
                ye || (He = void 0)
              }
            },
            addCaptureListener: ee => {
              Me.push(ee)
            },
            removeCaptureListener: ee => {
              Me = Me.filter((ie => ie !== ee))
            },
            get value() {
              return Fe()
            }
          }
        }(0, He),
        be = lM(ie, He, ee, ye),
        Me = GM(ie, He, ee, ye, be),
        Ke = function(ee, ie, He, ye, be, Me) {
          ie.debug("Initializing instrumentations");
          const Ke = [];
          return {
            add: function() {
              ie.debug("Adding instrumentations");
              for (var Ue = arguments.length, Fe = new Array(Ue), Je = 0; Je < Ue; Je++) Fe[Je] = arguments[Je];
              Fe.forEach((Ue => {
                ie.debug(`Adding "${Ue.name}" instrumentation`), Ke.some((ee => ee.name === Ue.name)) ? ie.warn(`Instrumentation ${Ue.name} is already added`) : (Ue.unpatchedConsole = ee, Ue.internalLogger = ie, Ue.config = He, Ue.metas = ye, Ue.transports = be, Ue.api = Me, Ke.push(Ue), Ue.initialize())
              }))
            },
            get instrumentations() {
              return [...Ke]
            },
            remove: function() {
              ie.debug("Removing instrumentations");
              for (var ee = arguments.length, He = new Array(ee), ye = 0; ye < ee; ye++) He[ye] = arguments[ye];
              He.forEach((ee => {
                var He, ye;
                ie.debug(`Removing "${ee.name}" instrumentation`);
                const be = Ke.reduce(((ie, He, ye) => null === ie && He.name === ee.name ? ye : null), null);
                null !== be ? (null === (He = (ye = Ke[be]).destroy) || void 0 === He || He.call(ye), Ke.splice(be, 1)) : ie.warn(`Instrumentation "${ee.name}" is not added`)
              }))
            }
          }
        }(ie, He, ee, ye, be, Me),
        Ue = pe(ie, He, ee, ye, be, Me, Ke);
      return uM(Ue),
        function(ee) {
          ee.transports.add(...ee.config.transports), ee.transports.addBeforeSendHooks(ee.config.beforeSend)
        }(Ue),
        function(ee) {
          ee.instrumentations.add(...ee.config.instrumentations)
        }(Ue), Ue
    }

    function QM(ee) {
      const ie = YM(ee);
      if (ie) return rM(ie)
    }
  },
  7323: function(ee, ie, He) {
    var ye;
    ! function(be, Me) {
      var Ke = "function",
        Ue = "undefined",
        Fe = "object",
        Je = "string",
        oe = "major",
        Re = "model",
        ke = "name",
        qe = "type",
        fe = "vendor",
        Te = "version",
        pe = "architecture",
        Xe = "console",
        ze = "mobile",
        Be = "tablet",
        Ee = "smarttv",
        ge = "wearable",
        Oe = "embedded",
        de = "Amazon",
        We = "Apple",
        te = "ASUS",
        Ze = "BlackBerry",
        we = "Browser",
        De = "Chrome",
        Pe = "Firefox",
        Ae = "Google",
        Ye = "Honor",
        Ve = "Huawei",
        ae = "LG",
        ce = "Microsoft",
        xe = "Motorola",
        Le = "Nvidia",
        Ce = "OnePlus",
        ve = "Opera",
        ue = "OPPO",
        me = "Samsung",
        le = "Sharp",
        Se = "Sony",
        ne = "Xiaomi",
        je = "Zebra",
        se = "Facebook",
        Ie = "Chromium OS",
        he = "Mac OS",
        Ne = " Browser",
        Ge = function(ee) {
          for (var ie = {}, He = 0; He < ee.length; He++) ie[ee[He].toUpperCase()] = ee[He];
          return ie
        },
        re = function(ee, ie) {
          return typeof ee === Je && -1 !== Qe(ie).indexOf(Qe(ee))
        },
        Qe = function(ee) {
          return ee.toLowerCase()
        },
        ei = function(ee, ie) {
          if (typeof ee === Je) return ee = ee.replace(/^\s\s*/, ""), typeof ie === Ue ? ee : ee.substring(0, 500)
        },
        ii = function(ee, ie) {
          for (var He, ye, be, Ue, Je, oe, Re = 0; Re < ie.length && !Je;) {
            var ke = ie[Re],
              qe = ie[Re + 1];
            for (He = ye = 0; He < ke.length && !Je && ke[He];)
              if (Je = ke[He++].exec(ee))
                for (be = 0; be < qe.length; be++) oe = Je[++ye], typeof(Ue = qe[be]) === Fe && Ue.length > 0 ? 2 === Ue.length ? typeof Ue[1] == Ke ? this[Ue[0]] = Ue[1].call(this, oe) : this[Ue[0]] = Ue[1] : 3 === Ue.length ? typeof Ue[1] !== Ke || Ue[1].exec && Ue[1].test ? this[Ue[0]] = oe ? oe.replace(Ue[1], Ue[2]) : Me : this[Ue[0]] = oe ? Ue[1].call(this, oe, Ue[2]) : Me : 4 === Ue.length && (this[Ue[0]] = oe ? Ue[3].call(this, oe.replace(Ue[1], Ue[2])) : Me) : this[Ue] = oe || Me;
            Re += 2
          }
        },
        Hi = function(ee, ie) {
          for (var He in ie)
            if (typeof ie[He] === Fe && ie[He].length > 0) {
              for (var ye = 0; ye < ie[He].length; ye++)
                if (re(ie[He][ye], ee)) return "?" === He ? Me : He
            } else if (re(ie[He], ee)) return "?" === He ? Me : He;
          return ie.hasOwnProperty("*") ? ie["*"] : ee
        },
        yi = {
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
        bi = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Te, [ke, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Te, [ke, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [ke, Te],
            [/opios[\/ ]+([\w\.]+)/i],
            [Te, [ke, ve + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Te, [ke, ve + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Te, [ke, ve]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Te, [ke, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Te, [ke, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [ke, Te],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Te, [ke, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Te, [ke, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Te, [ke, "UC" + we]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Te, [ke, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Te, [ke, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Te, [ke, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Te, [ke, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Te, [ke, "Smart Lenovo " + we]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [ke, /(.+)/, "$1 Secure " + we], Te
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Te, [ke, Pe + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Te, [ke, ve + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Te, [ke, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Te, [ke, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Te, [ke, ve + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Te, [ke, "MIUI" + Ne]],
            [/fxios\/([\w\.-]+)/i],
            [Te, [ke, Pe]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Te, [ke, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [ke, /(.+)/, "$1Browser"], Te
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [ke, /(.+)/, "$1" + Ne], Te
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Te, [ke, me + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Te, [ke, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [ke, "Sogou Mobile"], Te
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [ke, Te],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [ke],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Te, ke],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [ke, se], Te
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [ke, Te],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Te, [ke, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Te, [ke, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Te, [ke, De + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [ke, De + " WebView"], Te
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Te, [ke, "Android " + we]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [ke, Te],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Te, [ke, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Te, ke],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [ke, [Te, Hi, {
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
            [ke, Te],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [ke, "Netscape"], Te
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [ke, Te],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Te, [ke, Pe + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [ke, [Te, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [ke, [Te, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [pe, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [pe, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [pe, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [pe, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [pe, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [pe, /ower/, "", Qe]
            ],
            [/ sun4\w[;\)]/i],
            [
              [pe, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [pe, Qe]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Re, [fe, me],
              [qe, Be]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Re, [fe, me],
              [qe, ze]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Re, [fe, We],
              [qe, ze]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Re, [fe, We],
              [qe, Be]
            ],
            [/(macintosh);/i],
            [Re, [fe, We]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Re, [fe, le],
              [qe, ze]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Re, [fe, Ye],
              [qe, Be]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Re, [fe, Ye],
              [qe, ze]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Re, [fe, Ve],
              [qe, Be]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Re, [fe, Ve],
              [qe, ze]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Re, /_/g, " "],
              [fe, ne],
              [qe, Be]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Re, /_/g, " "],
              [fe, ne],
              [qe, ze]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Re, [fe, ue],
              [qe, ze]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Re, [fe, Hi, {
                OnePlus: ["304", "403", "203"],
                "*": ue
              }],
              [qe, Be]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Re, [fe, "Vivo"],
              [qe, ze]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Re, [fe, "Realme"],
              [qe, ze]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Re, [fe, xe],
              [qe, ze]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Re, [fe, xe],
              [qe, Be]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Re, [fe, ae],
              [qe, Be]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Re, [fe, ae],
              [qe, ze]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Re, [fe, "Lenovo"],
              [qe, Be]
            ],
            [/(nokia) (t[12][01])/i],
            [fe, Re, [qe, Be]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Re, /_/g, " "],
              [qe, ze],
              [fe, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Re, [fe, Ae],
              [qe, Be]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Re, [fe, Ae],
              [qe, ze]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Re, [fe, Se],
              [qe, ze]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Re, "Xperia Tablet"],
              [fe, Se],
              [qe, Be]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Re, [fe, Ce],
              [qe, ze]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Re, [fe, de],
              [qe, Be]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Re, /(.+)/g, "Fire Phone $1"],
              [fe, de],
              [qe, ze]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Re, fe, [qe, Be]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Re, [fe, Ze],
              [qe, ze]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Re, [fe, te],
              [qe, Be]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Re, [fe, te],
              [qe, ze]
            ],
            [/(nexus 9)/i],
            [Re, [fe, "HTC"],
              [qe, Be]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [fe, [Re, /_/g, " "],
              [qe, ze]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Re, [fe, "TCL"],
              [qe, Be]
            ],
            [/(itel) ((\w+))/i],
            [
              [fe, Qe], Re, [qe, Hi, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Re, [fe, "Acer"],
              [qe, Be]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Re, [fe, "Meizu"],
              [qe, ze]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Re, [fe, "Ulefone"],
              [qe, ze]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Re, [fe, "Energizer"],
              [qe, ze]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Re, [fe, "Cat"],
              [qe, ze]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Re, [fe, "Smartfren"],
              [qe, ze]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Re, [fe, "Nothing"],
              [qe, ze]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Re, [fe, "Archos"],
              [qe, Be]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Re, [fe, "Archos"],
              [qe, ze]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [fe, Re, [qe, Be]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [fe, Re, [qe, ze]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [fe, Re, [qe, Be]],
            [/(surface duo)/i],
            [Re, [fe, ce],
              [qe, Be]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Re, [fe, "Fairphone"],
              [qe, ze]
            ],
            [/(u304aa)/i],
            [Re, [fe, "AT&T"],
              [qe, ze]
            ],
            [/\bsie-(\w*)/i],
            [Re, [fe, "Siemens"],
              [qe, ze]
            ],
            [/\b(rct\w+) b/i],
            [Re, [fe, "RCA"],
              [qe, Be]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Re, [fe, "Dell"],
              [qe, Be]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Re, [fe, "Verizon"],
              [qe, Be]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Re, [fe, "Barnes & Noble"],
              [qe, Be]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Re, [fe, "NuVision"],
              [qe, Be]
            ],
            [/\b(k88) b/i],
            [Re, [fe, "ZTE"],
              [qe, Be]
            ],
            [/\b(nx\d{3}j) b/i],
            [Re, [fe, "ZTE"],
              [qe, ze]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Re, [fe, "Swiss"],
              [qe, ze]
            ],
            [/\b(zur\d{3}) b/i],
            [Re, [fe, "Swiss"],
              [qe, Be]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Re, [fe, "Zeki"],
              [qe, Be]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [fe, "Dragon Touch"], Re, [qe, Be]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Re, [fe, "Insignia"],
              [qe, Be]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Re, [fe, "NextBook"],
              [qe, Be]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [fe, "Voice"], Re, [qe, ze]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [fe, "LvTel"], Re, [qe, ze]
            ],
            [/\b(ph-1) /i],
            [Re, [fe, "Essential"],
              [qe, ze]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Re, [fe, "Envizen"],
              [qe, Be]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Re, [fe, "MachSpeed"],
              [qe, Be]
            ],
            [/\btu_(1491) b/i],
            [Re, [fe, "Rotor"],
              [qe, Be]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Re, [fe, Le],
              [qe, Be]
            ],
            [/(sprint) (\w+)/i],
            [fe, Re, [qe, ze]],
            [/(kin\.[onetw]{3})/i],
            [
              [Re, /\./g, " "],
              [fe, ce],
              [qe, ze]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Re, [fe, je],
              [qe, Be]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Re, [fe, je],
              [qe, ze]
            ],
            [/smart-tv.+(samsung)/i],
            [fe, [qe, Ee]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Re, /^/, "SmartTV"],
              [fe, me],
              [qe, Ee]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [fe, ae],
              [qe, Ee]
            ],
            [/(apple) ?tv/i],
            [fe, [Re, We + " TV"],
              [qe, Ee]
            ],
            [/crkey/i],
            [
              [Re, De + "cast"],
              [fe, Ae],
              [qe, Ee]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Re, [fe, de],
              [qe, Ee]
            ],
            [/(shield \w+ tv)/i],
            [Re, [fe, Le],
              [qe, Ee]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Re, [fe, le],
              [qe, Ee]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Re, [fe, Se],
              [qe, Ee]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Re, [fe, ne],
              [qe, Ee]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [fe, Re, [qe, Ee]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [fe, ei],
              [Re, ei],
              [qe, Ee]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Re, [qe, Ee]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [qe, Ee]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [fe, Re, [qe, Xe]],
            [/droid.+; (shield)( bui|\))/i],
            [Re, [fe, Le],
              [qe, Xe]
            ],
            [/(playstation \w+)/i],
            [Re, [fe, Se],
              [qe, Xe]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Re, [fe, ce],
              [qe, Xe]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Re, [fe, me],
              [qe, ge]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [fe, Re, [qe, ge]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Re, [fe, ue],
              [qe, ge]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Re, [fe, We],
              [qe, ge]
            ],
            [/(opwwe\d{3})/i],
            [Re, [fe, Ce],
              [qe, ge]
            ],
            [/(moto 360)/i],
            [Re, [fe, xe],
              [qe, ge]
            ],
            [/(smartwatch 3)/i],
            [Re, [fe, Se],
              [qe, ge]
            ],
            [/(g watch r)/i],
            [Re, [fe, ae],
              [qe, ge]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Re, [fe, je],
              [qe, ge]
            ],
            [/droid.+; (glass) \d/i],
            [Re, [fe, Ae],
              [qe, ge]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [fe, Re, [qe, ge]],
            [/; (quest( \d| pro)?)/i],
            [Re, [fe, se],
              [qe, ge]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [fe, [qe, Oe]],
            [/(aeobc)\b/i],
            [Re, [fe, de],
              [qe, Oe]
            ],
            [/(homepod).+mac os/i],
            [Re, [fe, We],
              [qe, Oe]
            ],
            [/windows iot/i],
            [
              [qe, Oe]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Re, [qe, ze]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Re, [qe, Be]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [qe, Be]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [qe, ze]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Re, [fe, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Te, [ke, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [ke, Te],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Te, [ke, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [ke, Te],
            [/ladybird\//i],
            [
              [ke, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Te, ke]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [ke, Te],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [ke, [Te, Hi, yi]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Te, Hi, yi],
              [ke, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Te, /_/g, "."],
              [ke, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [ke, he],
              [Te, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Te, ke],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [ke, /(.+)/, "$1 Touch"], Te
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [ke, Te],
            [/\(bb(10);/i],
            [Te, [ke, Ze]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Te, [ke, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Te, [ke, Pe + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Te, [ke, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Te, [ke, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Te, [ke, De + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [ke, Ie], Te
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [ke, Te],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [ke, "Solaris"], Te
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [ke, Te]
          ]
        },
        Mi = function(ee, ie) {
          if (typeof ee === Fe && (ie = ee, ee = Me), !(this instanceof Mi)) return new Mi(ee, ie).getResult();
          var He = typeof be !== Ue && be.navigator ? be.navigator : Me,
            ye = ee || (He && He.userAgent ? He.userAgent : ""),
            Xe = He && He.userAgentData ? He.userAgentData : Me,
            Ee = ie ? function(ee, ie) {
              var He = {};
              for (var ye in ee) ie[ye] && ie[ye].length % 2 === 0 ? He[ye] = ie[ye].concat(ee[ye]) : He[ye] = ee[ye];
              return He
            }(bi, ie) : bi,
            ge = He && He.userAgent == ye;
          return this.getBrowser = function() {
            var ee, ie = {};
            return ie[ke] = Me, ie[Te] = Me, ii.call(ie, ye, Ee.browser), ie[oe] = typeof(ee = ie[Te]) === Je ? ee.replace(/[^\d\.]/g, "").split(".")[0] : Me, ge && He && He.brave && typeof He.brave.isBrave == Ke && (ie[ke] = "Brave"), ie
          }, this.getCPU = function() {
            var ee = {};
            return ee[pe] = Me, ii.call(ee, ye, Ee.cpu), ee
          }, this.getDevice = function() {
            var ee = {};
            return ee[fe] = Me, ee[Re] = Me, ee[qe] = Me, ii.call(ee, ye, Ee.device), ge && !ee[qe] && Xe && Xe.mobile && (ee[qe] = ze), ge && "Macintosh" == ee[Re] && He && typeof He.standalone !== Ue && He.maxTouchPoints && He.maxTouchPoints > 2 && (ee[Re] = "iPad", ee[qe] = Be), ee
          }, this.Nf = function() {
            var ee = {};
            return ee[ke] = Me, ee[Te] = Me, ii.call(ee, ye, Ee.engine), ee
          }, this.getOS = function() {
            var ee = {};
            return ee[ke] = Me, ee[Te] = Me, ii.call(ee, ye, Ee.os), ge && !ee[ke] && Xe && Xe.platform && "Unknown" != Xe.platform && (ee[ke] = Xe.platform.replace(/chrome os/i, Ie).replace(/macos/i, he)), ee
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Nf(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return ye
          }, this.setUA = function(ee) {
            return ye = typeof ee === Je && ee.length > 500 ? ei(ee, 500) : ee, this
          }, this.setUA(ye), this
        };
      Mi.VERSION = "1.0.41", Mi.BROWSER = Ge([ke, Te, oe]), Mi.CPU = Ge([pe]), Mi.DEVICE = Ge([Re, fe, qe, Xe, ze, Ee, Be, ge, Oe]), Mi.ENGINE = Mi.OS = Ge([ke, Te]), typeof ie !== Ue ? (ee.exports && (ie = ee.exports = Mi), ie.UAParser = Mi) : He.amdO ? (ye = function() {
        return Mi
      }.call(ie, He, ie, ee)) === Me || (ee.exports = ye) : typeof be !== Ue && (be.UAParser = Mi);
      var Ki = typeof be !== Ue && (be.jQuery || be.Zepto);
      if (Ki && !Ki.ua) {
        var Ui = new Mi;
        Ki.ua = Ui.getResult(), Ki.ua.get = function() {
          return Ui.getUA()
        }, Ki.ua.set = function(ee) {
          Ui.setUA(ee);
          var ie = Ui.getResult();
          for (var He in ie) Ki.ua[He] = ie[He]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);