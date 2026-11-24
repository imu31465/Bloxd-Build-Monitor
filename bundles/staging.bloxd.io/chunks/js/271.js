/*! For license information please see igzsf.271.111b5e69.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40710: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      getAnalytics: () => pe,
      getGoogleAnalyticsClientId: () => se,
      initializeAnalytics: () => xe,
      isSupported: () => Te,
      logEvent: () => OV,
      setAnalyticsCollectionEnabled: () => eV,
      setConsent: () => qV,
      setCurrentScreen: () => ge,
      setDefaultEventParameters: () => VV,
      setUserId: () => ne,
      setUserProperties: () => tV,
      settings: () => Ye
    });
    var Ot = Vt(40692),
      qt = Vt(40708),
      Dt = Vt(40701),
      mt = Vt(40699);
    let dt, jt;
    const Ht = new WeakMap,
      Xt = new WeakMap,
      Qt = new WeakMap,
      lt = new WeakMap,
      Et = new WeakMap;
    let ft = {
      get(tt, et, Vt) {
        if (tt instanceof IDBTransaction) {
          if ("done" === et) return Xt.get(tt);
          if ("objectStoreNames" === et) return tt.objectStoreNames || Qt.get(tt);
          if ("store" === et) return Vt.objectStoreNames[1] ? void 0 : Vt.objectStore(Vt.objectStoreNames[0])
        }
        return Nt(tt[et])
      },
      set: (tt, et, Vt) => (tt[et] = Vt, !0),
      has: (tt, et) => tt instanceof IDBTransaction && ("done" === et || "store" === et) || et in tt
    };

    function wt(tt) {
      return tt !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (jt || (jt = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(tt) ? function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return tt.apply(Mt(this), Vt), Nt(Ht.get(this))
      } : function() {
        for (var et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
        return Nt(tt.apply(Mt(this), Vt))
      } : function(et) {
        for (var Vt = arguments.length, Ot = new Array(Vt > 1 ? Vt - 1 : 0), qt = 1; qt < Vt; qt++) Ot[qt - 1] = arguments[qt];
        const Dt = tt.call(Mt(this), et, ...Ot);
        return Qt.set(Dt, et.sort ? et.sort() : [et]), Nt(Dt)
      }
    }

    function yt(tt) {
      return "function" === typeof tt ? wt(tt) : (tt instanceof IDBTransaction && function(tt) {
        if (Xt.has(tt)) return;
        const et = new Promise(((et, Vt) => {
          const Ot = () => {
              tt.removeEventListener("complete", qt), tt.removeEventListener("error", Dt), tt.removeEventListener("abort", Dt)
            },
            qt = () => {
              et(), Ot()
            },
            Dt = () => {
              Vt(tt.error || new DOMException("AbortError", "AbortError")), Ot()
            };
          tt.addEventListener("complete", qt), tt.addEventListener("error", Dt), tt.addEventListener("abort", Dt)
        }));
        Xt.set(tt, et)
      }(tt), et = tt, (dt || (dt = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((tt => et instanceof tt)) ? new Proxy(tt, ft) : tt);
      var et
    }

    function Nt(tt) {
      if (tt instanceof IDBRequest) return function(tt) {
        const et = new Promise(((et, Vt) => {
          const Ot = () => {
              tt.removeEventListener("success", qt), tt.removeEventListener("error", Dt)
            },
            qt = () => {
              et(Nt(tt.result)), Ot()
            },
            Dt = () => {
              Vt(tt.error), Ot()
            };
          tt.addEventListener("success", qt), tt.addEventListener("error", Dt)
        }));
        return et.then((et => {
          et instanceof IDBCursor && Ht.set(et, tt)
        })).catch((() => {})), Et.set(et, tt), et
      }(tt);
      if (lt.has(tt)) return lt.get(tt);
      const et = yt(tt);
      return et !== tt && (lt.set(tt, et), Et.set(et, tt)), et
    }
    const Mt = tt => Et.get(tt);
    const bt = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Jt = ["put", "add", "delete", "clear"],
      Ct = new Map;

    function ut(tt, et) {
      if (!(tt instanceof IDBDatabase) || et in tt || "string" !== typeof et) return;
      if (Ct.get(et)) return Ct.get(et);
      const Vt = et.replace(/FromIndex$/, ""),
        Ot = et !== Vt,
        qt = Jt.includes(Vt);
      if (!(Vt in (Ot ? IDBIndex : IDBObjectStore).prototype) || !qt && !bt.includes(Vt)) return;
      const Dt = async function(tt) {
        const et = this.transaction(tt, qt ? "readwrite" : "readonly");
        let Dt = et.store;
        for (var mt = arguments.length, dt = new Array(mt > 1 ? mt - 1 : 0), jt = 1; jt < mt; jt++) dt[jt - 1] = arguments[jt];
        return Ot && (Dt = Dt.index(dt.shift())), (await Promise.all([Dt[Vt](...dt), qt && et.done]))[0]
      };
      return Ct.set(et, Dt), Dt
    }
    ft = (tt => ({
      ...tt,
      get: (et, Vt, Ot) => ut(et, Vt) || tt.get(et, Vt, Ot),
      has: (et, Vt) => !!ut(et, Vt) || tt.has(et, Vt)
    }))(ft);
    const Kt = "@firebase/installations",
      ht = "0.6.4",
      vt = 1e4,
      Wt = `w:${ht}`,
      St = "FIS_v2",
      ct = 36e5,
      Rt = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      It = new Dt.e("installations", "Installations", Rt);

    function Pt(tt) {
      return tt instanceof Dt.g && tt.code.includes("request-failed")
    }

    function Zt(tt) {
      let {
        projectId: et
      } = tt;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${et}/installations`
    }

    function Lt(tt) {
      return {
        token: tt.token,
        requestStatus: 2,
        expiresIn: (et = tt.expiresIn, Number(et.replace("s", "000"))),
        creationTime: Date.now()
      };
      var et
    }
    async function Ft(tt, et) {
      const Vt = (await et.json()).error;
      return It.create("request-failed", {
        requestName: tt,
        serverCode: Vt.code,
        serverMessage: Vt.message,
        serverStatus: Vt.status
      })
    }

    function kt(tt) {
      let {
        apiKey: et
      } = tt;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": et
      })
    }

    function Gt(tt, et) {
      let {
        refreshToken: Vt
      } = et;
      const Ot = kt(tt);
      return Ot.append("Authorization", function(tt) {
        return `${St} ${tt}`
      }(Vt)), Ot
    }
    async function zt(tt) {
      const et = await tt();
      return et.status >= 500 && et.status < 600 ? tt() : et
    }

    function ot(tt) {
      return new Promise((et => {
        setTimeout(et, tt)
      }))
    }
    const rt = /^[cdef][\w-]{21}$/;

    function Ut() {
      try {
        const tt = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(tt), tt[0] = 112 + tt[0] % 16;
        const et = function(tt) {
          const et = (Vt = tt, btoa(String.fromCharCode(...Vt)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Vt;
          return et.substr(0, 22)
        }(tt);
        return rt.test(et) ? et : ""
      } catch (tt) {
        return ""
      }
    }

    function At(tt) {
      return `${tt.appName}!${tt.appId}`
    }
    const it = new Map;

    function Yt(tt, et) {
      const Vt = At(tt);
      Bt(Vt, et),
        function(tt, et) {
          const Vt = xt();
          Vt && Vt.postMessage({
            key: tt,
            fid: et
          });
          Tt()
        }(Vt, et)
    }

    function Bt(tt, et) {
      const Vt = it.get(tt);
      if (Vt)
        for (const Ot of Vt) Ot(et)
    }
    let pt = null;

    function xt() {
      return !pt && "BroadcastChannel" in self && (pt = new BroadcastChannel("[Firebase] FID Change"), pt.onmessage = tt => {
        Bt(tt.data.key, tt.data.fid)
      }), pt
    }

    function Tt() {
      0 === it.size && pt && (pt.close(), pt = null)
    }
    const gt = "firebase-installations-store";
    let st = null;

    function nt() {
      return st || (st = function(tt, et) {
        let {
          blocked: Vt,
          upgrade: Ot,
          blocking: qt,
          terminated: Dt
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const mt = indexedDB.open(tt, et),
          dt = Nt(mt);
        return Ot && mt.addEventListener("upgradeneeded", (tt => {
          Ot(Nt(mt.result), tt.oldVersion, tt.newVersion, Nt(mt.transaction))
        })), Vt && mt.addEventListener("blocked", (() => Vt())), dt.then((tt => {
          Dt && tt.addEventListener("close", (() => Dt())), qt && tt.addEventListener("versionchange", (() => qt()))
        })).catch((() => {})), dt
      }("firebase-installations-database", 1, {
        upgrade: (tt, et) => {
          if (0 === et) tt.createObjectStore(gt)
        }
      })), st
    }
    async function te(tt, et) {
      const Vt = At(tt),
        Ot = (await nt()).transaction(gt, "readwrite"),
        qt = Ot.objectStore(gt),
        Dt = await qt.get(Vt);
      return await qt.put(et, Vt), await Ot.done, Dt && Dt.fid === et.fid || Yt(tt, et.fid), et
    }
    async function ee(tt) {
      const et = At(tt),
        Vt = (await nt()).transaction(gt, "readwrite");
      await Vt.objectStore(gt).delete(et), await Vt.done
    }
    async function Ve(tt, et) {
      const Vt = At(tt),
        Ot = (await nt()).transaction(gt, "readwrite"),
        qt = Ot.objectStore(gt),
        Dt = await qt.get(Vt),
        mt = et(Dt);
      return void 0 === mt ? await qt.delete(Vt) : await qt.put(mt, Vt), await Ot.done, !mt || Dt && Dt.fid === mt.fid || Yt(tt, mt.fid), mt
    }
    async function Oe(tt) {
      let et;
      const Vt = await Ve(tt.appConfig, (Vt => {
        const Ot = function(tt) {
            const et = tt || {
              fid: Ut(),
              registrationStatus: 0
            };
            return me(et)
          }(Vt),
          qt = function(tt, et) {
            if (0 === et.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: et,
                  registrationPromise: Promise.reject(It.create("app-offline"))
                }
              }
              const Vt = {
                  fid: et.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Ot = async function(tt, et) {
                  try {
                    const Vt = await async function(tt, et) {
                      let {
                        appConfig: Vt,
                        heartbeatServiceProvider: Ot
                      } = tt, {
                        fid: qt
                      } = et;
                      const Dt = Zt(Vt),
                        mt = kt(Vt),
                        dt = Ot.getImmediate({
                          optional: !0
                        });
                      if (dt) {
                        const tt = await dt.getHeartbeatsHeader();
                        tt && mt.append("x-firebase-client", tt)
                      }
                      const jt = {
                          fid: qt,
                          authVersion: St,
                          appId: Vt.appId,
                          sdkVersion: Wt
                        },
                        Ht = {
                          method: "POST",
                          headers: mt,
                          body: JSON.stringify(jt)
                        },
                        Xt = await zt((() => fetch(Dt, Ht)));
                      if (Xt.ok) {
                        const tt = await Xt.json();
                        return {
                          fid: tt.fid || qt,
                          registrationStatus: 2,
                          refreshToken: tt.refreshToken,
                          authToken: Lt(tt.authToken)
                        }
                      }
                      throw await Ft("Create Installation", Xt)
                    }(tt, et);
                    return te(tt.appConfig, Vt)
                  } catch (Vt) {
                    throw Pt(Vt) && 409 === Vt.customData.serverCode ? await ee(tt.appConfig) : await te(tt.appConfig, {
                      fid: et.fid,
                      registrationStatus: 0
                    }), Vt
                  }
                }(tt, Vt);
              return {
                installationEntry: Vt,
                registrationPromise: Ot
              }
            }
            return 1 === et.registrationStatus ? {
              installationEntry: et,
              registrationPromise: qe(tt)
            } : {
              installationEntry: et
            }
          }(tt, Ot);
        return et = qt.registrationPromise, qt.installationEntry
      }));
      return "" === Vt.fid ? {
        installationEntry: await et
      } : {
        installationEntry: Vt,
        registrationPromise: et
      }
    }
    async function qe(tt) {
      let et = await De(tt.appConfig);
      for (; 1 === et.registrationStatus;) await ot(100), et = await De(tt.appConfig);
      if (0 === et.registrationStatus) {
        const {
          installationEntry: et,
          registrationPromise: Vt
        } = await Oe(tt);
        return Vt || et
      }
      return et
    }

    function De(tt) {
      return Ve(tt, (tt => {
        if (!tt) throw It.create("installation-not-found");
        return me(tt)
      }))
    }

    function me(tt) {
      return 1 === (et = tt).registrationStatus && et.registrationTime + vt < Date.now() ? {
        fid: tt.fid,
        registrationStatus: 0
      } : tt;
      var et
    }
    async function de(tt, et) {
      let {
        appConfig: Vt,
        heartbeatServiceProvider: Ot
      } = tt;
      const qt = function(tt, et) {
          let {
            fid: Vt
          } = et;
          return `${Zt(tt)}/${Vt}/authTokens:generate`
        }(Vt, et),
        Dt = Gt(Vt, et),
        mt = Ot.getImmediate({
          optional: !0
        });
      if (mt) {
        const tt = await mt.getHeartbeatsHeader();
        tt && Dt.append("x-firebase-client", tt)
      }
      const dt = {
          installation: {
            sdkVersion: Wt,
            appId: Vt.appId
          }
        },
        jt = {
          method: "POST",
          headers: Dt,
          body: JSON.stringify(dt)
        },
        Ht = await zt((() => fetch(qt, jt)));
      if (Ht.ok) {
        return Lt(await Ht.json())
      }
      throw await Ft("Generate Auth Token", Ht)
    }
    async function je(tt) {
      let et, Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ot = await Ve(tt.appConfig, (Ot => {
        if (!Xe(Ot)) throw It.create("not-registered");
        const qt = Ot.authToken;
        if (!Vt && function(tt) {
            return 2 === tt.requestStatus && ! function(tt) {
              const et = Date.now();
              return et < tt.creationTime || tt.creationTime + tt.expiresIn < et + ct
            }(tt)
          }(qt)) return Ot;
        if (1 === qt.requestStatus) return et = async function(tt, et) {
          let Vt = await He(tt.appConfig);
          for (; 1 === Vt.authToken.requestStatus;) await ot(100), Vt = await He(tt.appConfig);
          const Ot = Vt.authToken;
          return 0 === Ot.requestStatus ? je(tt, et) : Ot
        }(tt, Vt), Ot;
        {
          if (!navigator.onLine) throw It.create("app-offline");
          const Vt = function(tt) {
            const et = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, tt), {
              authToken: et
            })
          }(Ot);
          return et = async function(tt, et) {
            try {
              const Vt = await de(tt, et),
                Ot = Object.assign(Object.assign({}, et), {
                  authToken: Vt
                });
              return await te(tt.appConfig, Ot), Vt
            } catch (Vt) {
              if (!Pt(Vt) || 401 !== Vt.customData.serverCode && 404 !== Vt.customData.serverCode) {
                const Vt = Object.assign(Object.assign({}, et), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await te(tt.appConfig, Vt)
              } else await ee(tt.appConfig);
              throw Vt
            }
          }(tt, Vt), Vt
        }
      }));
      return et ? await et : Ot.authToken
    }

    function He(tt) {
      return Ve(tt, (tt => {
        if (!Xe(tt)) throw It.create("not-registered");
        const et = tt.authToken;
        return 1 === (Vt = et).requestStatus && Vt.requestTime + vt < Date.now() ? Object.assign(Object.assign({}, tt), {
          authToken: {
            requestStatus: 0
          }
        }) : tt;
        var Vt
      }))
    }

    function Xe(tt) {
      return void 0 !== tt && 2 === tt.registrationStatus
    }
    async function Qe(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Vt = tt;
      await async function(tt) {
        const {
          registrationPromise: et
        } = await Oe(tt);
        et && await et
      }(Vt);
      return (await je(Vt, et)).token
    }

    function le(tt) {
      return It.create("missing-app-config-values", {
        valueName: tt
      })
    }
    const Ee = "installations",
      fe = tt => {
        const et = tt.getProvider("app").getImmediate(),
          Vt = function(tt) {
            if (!tt || !tt.options) throw le("App Configuration");
            if (!tt.name) throw le("App Name");
            const et = ["projectId", "apiKey", "appId"];
            for (const Vt of et)
              if (!tt.options[Vt]) throw le(Vt);
            return {
              appName: tt.name,
              projectId: tt.options.projectId,
              apiKey: tt.options.apiKey,
              appId: tt.options.appId
            }
          }(et);
        return {
          app: et,
          appConfig: Vt,
          heartbeatServiceProvider: (0, Ot.z)(et, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      we = tt => {
        const et = tt.getProvider("app").getImmediate(),
          Vt = (0, Ot.z)(et, Ee).getImmediate();
        return {
          getId: () => async function(tt) {
            const et = tt,
              {
                installationEntry: Vt,
                registrationPromise: Ot
              } = await Oe(et);
            return Ot ? Ot.catch(console.error) : je(et).catch(console.error), Vt.fid
          }(Vt),
          getToken: tt => Qe(Vt, tt)
        }
      };
    (0, Ot.B)(new mt.d(Ee, fe, "PUBLIC")), (0, Ot.B)(new mt.d("installations-internal", we, "PRIVATE")), (0, Ot._)(Kt, ht), (0, Ot._)(Kt, ht, "esm2017");
    const ye = "analytics",
      Ne = "https://www.googletagmanager.com/gtag/js",
      ae = new qt.f("@firebase/analytics"),
      Me = {
        "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
        "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
        "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
        "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
        "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
        "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
        "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
        "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
        "no-client-id": 'The "client_id" field is empty.',
        "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
      },
      be = new Dt.e("analytics", "Analytics", Me);

    function Je(tt) {
      if (!tt.startsWith(Ne)) {
        const et = be.create("invalid-gtag-resource", {
          gtagURL: tt
        });
        return ae.warn(et.message), ""
      }
      return tt
    }

    function Ce(tt) {
      return Promise.all(tt.map((tt => tt.catch((tt => tt)))))
    }

    function ue(tt, et) {
      const Vt = function(tt, et) {
          let Vt;
          return window.trustedTypes && (Vt = window.trustedTypes.createPolicy(tt, et)), Vt
        }("firebase-js-sdk-policy", {
          createScriptURL: Je
        }),
        Ot = document.createElement("script"),
        qt = `${Ne}?l=${tt}&id=${et}`;
      Ot.src = Vt ? null === Vt || void 0 === Vt ? void 0 : Vt.createScriptURL(qt) : qt, Ot.async = !0, document.head.appendChild(Ot)
    }

    function Ke(tt, et, Vt, Ot) {
      return async function(qt) {
        try {
          for (var Dt = arguments.length, mt = new Array(Dt > 1 ? Dt - 1 : 0), dt = 1; dt < Dt; dt++) mt[dt - 1] = arguments[dt];
          if ("event" === qt) {
            const [Ot, qt] = mt;
            await async function(tt, et, Vt, Ot, qt) {
              try {
                let Dt = [];
                if (qt && qt.send_to) {
                  let tt = qt.send_to;
                  Array.isArray(tt) || (tt = [tt]);
                  const Ot = await Ce(Vt);
                  for (const Vt of tt) {
                    const tt = Ot.find((tt => tt.measurementId === Vt)),
                      qt = tt && et[tt.appId];
                    if (!qt) {
                      Dt = [];
                      break
                    }
                    Dt.push(qt)
                  }
                }
                0 === Dt.length && (Dt = Object.values(et)), await Promise.all(Dt), tt("event", Ot, qt || {})
              } catch (Dt) {
                ae.error(Dt)
              }
            }(tt, et, Vt, Ot, qt)
          } else if ("config" === qt) {
            const [qt, Dt] = mt;
            await async function(tt, et, Vt, Ot, qt, Dt) {
              const mt = Ot[qt];
              try {
                if (mt) await et[mt];
                else {
                  const tt = (await Ce(Vt)).find((tt => tt.measurementId === qt));
                  tt && await et[tt.appId]
                }
              } catch (dt) {
                ae.error(dt)
              }
              tt("config", qt, Dt)
            }(tt, et, Vt, Ot, qt, Dt)
          } else if ("consent" === qt) {
            const [et] = mt;
            tt("consent", "update", et)
          } else if ("get" === qt) {
            const [et, Vt, Ot] = mt;
            tt("get", et, Vt, Ot)
          } else if ("set" === qt) {
            const [et] = mt;
            tt("set", et)
          } else tt(qt, ...mt)
        } catch (jt) {
          ae.error(jt)
        }
      }
    }
    const he = new class {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = tt, this.intervalMillis = et
      }
      getThrottleMetadata(tt) {
        return this.throttleMetadata[tt]
      }
      setThrottleMetadata(tt, et) {
        this.throttleMetadata[tt] = et
      }
      deleteThrottleMetadata(tt) {
        delete this.throttleMetadata[tt]
      }
    };

    function ve(tt) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": tt
      })
    }
    async function We(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : he,
        Vt = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Ot,
        apiKey: qt,
        measurementId: Dt
      } = tt.options;
      if (!Ot) throw be.create("no-app-id");
      if (!qt) {
        if (Dt) return {
          measurementId: Dt,
          appId: Ot
        };
        throw be.create("no-api-key")
      }
      const mt = et.getThrottleMetadata(Ot) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        dt = new ce;
      return setTimeout((async () => {
        dt.abort()
      }), void 0 !== Vt ? Vt : 6e4), Se({
        appId: Ot,
        apiKey: qt,
        measurementId: Dt
      }, mt, dt, et)
    }
    async function Se(tt, et, Vt) {
      let {
        throttleEndTimeMillis: Ot,
        backoffCount: qt
      } = et, mt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : he;
      var dt;
      const {
        appId: jt,
        measurementId: Ht
      } = tt;
      try {
        await
        function(tt, et) {
          return new Promise(((Vt, Ot) => {
            const qt = Math.max(et - Date.now(), 0),
              Dt = setTimeout(Vt, qt);
            tt.addEventListener((() => {
              clearTimeout(Dt), Ot(be.create("fetch-throttle", {
                throttleEndTimeMillis: et
              }))
            }))
          }))
        }(Vt, Ot)
      } catch (Xt) {
        if (Ht) return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Ht} provided in the "measurementId" field in the local Firebase config. [${null===Xt||void 0===Xt?void 0:Xt.message}]`), {
          appId: jt,
          measurementId: Ht
        };
        throw Xt
      }
      try {
        const et = await async function(tt) {
          var et;
          const {
            appId: Vt,
            apiKey: Ot
          } = tt, qt = {
            method: "GET",
            headers: ve(Ot)
          }, Dt = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Vt), mt = await fetch(Dt, qt);
          if (200 !== mt.status && 304 !== mt.status) {
            let tt = "";
            try {
              const Vt = await mt.json();
              (null === (et = Vt.error) || void 0 === et ? void 0 : et.message) && (tt = Vt.error.message)
            } catch (dt) {}
            throw be.create("config-fetch-failed", {
              httpStatus: mt.status,
              responseMessage: tt
            })
          }
          return mt.json()
        }(tt);
        return mt.deleteThrottleMetadata(jt), et
      } catch (Xt) {
        const et = Xt;
        if (! function(tt) {
            if (!(tt instanceof Dt.g) || !tt.customData) return !1;
            const et = Number(tt.customData.httpStatus);
            return 429 === et || 500 === et || 503 === et || 504 === et
          }(et)) {
          if (mt.deleteThrottleMetadata(jt), Ht) return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Ht} provided in the "measurementId" field in the local Firebase config. [${null===et||void 0===et?void 0:et.message}]`), {
            appId: jt,
            measurementId: Ht
          };
          throw Xt
        }
        const Ot = 503 === Number(null === (dt = null === et || void 0 === et ? void 0 : et.customData) || void 0 === dt ? void 0 : dt.httpStatus) ? (0, Dt.r)(qt, mt.intervalMillis, 30) : (0, Dt.r)(qt, mt.intervalMillis),
          Qt = {
            throttleEndTimeMillis: Date.now() + Ot,
            backoffCount: qt + 1
          };
        return mt.setThrottleMetadata(jt, Qt), ae.debug(`Calling attemptFetch again in ${Ot} millis`), Se(tt, Qt, Vt, mt)
      }
    }
    class ce {
      constructor() {
        this.listeners = []
      }
      addEventListener(tt) {
        this.listeners.push(tt)
      }
      abort() {
        this.listeners.forEach((tt => tt()))
      }
    }
    let Re, Ie;

    function Pe(tt) {
      Ie = tt
    }

    function Ze(tt) {
      Re = tt
    }
    async function Le(tt, et, Vt, Ot, qt, mt, dt) {
      var jt;
      const Ht = We(tt);
      Ht.then((et => {
        Vt[et.measurementId] = et.appId, tt.options.measurementId && et.measurementId !== tt.options.measurementId && ae.warn(`The measurement ID in the local Firebase config (${tt.options.measurementId}) does not match the measurement ID fetched from the server (${et.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((tt => ae.error(tt))), et.push(Ht);
      const Xt = async function() {
        if (!(0, Dt.Y)()) return ae.warn(be.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Dt.lb)()
        } catch (tt) {
          return ae.warn(be.create("indexeddb-unavailable", {
            errorInfo: null === tt || void 0 === tt ? void 0 : tt.toString()
          }).message), !1
        }
        return !0
      }().then((tt => tt ? Ot.getId() : void 0)), [Qt, lt] = await Promise.all([Ht, Xt]);
      (function(tt) {
        const et = window.document.getElementsByTagName("script");
        for (const Vt of Object.values(et))
          if (Vt.src && Vt.src.includes(Ne) && Vt.src.includes(tt)) return Vt;
        return null
      })(mt) || ue(mt, Qt.measurementId), Ie && (qt("consent", "default", Ie), Pe(void 0)), qt("js", new Date);
      const Et = null !== (jt = null === dt || void 0 === dt ? void 0 : dt.config) && void 0 !== jt ? jt : {};
      return Et.origin = "firebase", Et.update = !0, null != lt && (Et.firebase_id = lt), qt("config", Qt.measurementId, Et), Re && (qt("set", Re), Ze(void 0)), Qt.measurementId
    }
    class Fe {
      constructor(tt) {
        this.app = tt
      }
      _delete() {
        return delete ke[this.app.options.appId], Promise.resolve()
      }
    }
    let ke = {},
      Ge = [];
    const ze = {};
    let oe, re, Ue = "dataLayer",
      Ae = "gtag",
      ie = !1;

    function Ye(tt) {
      if (ie) throw be.create("already-initialized");
      tt.dataLayerName && (Ue = tt.dataLayerName), tt.gtagName && (Ae = tt.gtagName)
    }

    function Be(tt, et, Vt) {
      ! function() {
        const tt = [];
        if ((0, Dt.P)() && tt.push("This is a browser extension environment."), (0, Dt.j)() || tt.push("Cookies are not available."), tt.length > 0) {
          const et = tt.map(((tt, et) => `(${et+1}) ${tt}`)).join(" "),
            Vt = be.create("invalid-analytics-context", {
              errorInfo: et
            });
          ae.warn(Vt.message)
        }
      }();
      const Ot = tt.options.appId;
      if (!Ot) throw be.create("no-app-id");
      if (!tt.options.apiKey) {
        if (!tt.options.measurementId) throw be.create("no-api-key");
        ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${tt.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != ke[Ot]) throw be.create("already-exists", {
        id: Ot
      });
      if (!ie) {
        ! function(tt) {
          let et = [];
          Array.isArray(window[tt]) ? et = window[tt] : window[tt] = et
        }(Ue);
        const {
          wrappedGtag: tt,
          gtagCore: et
        } = function(tt, et, Vt, Ot, qt) {
          let Dt = function() {
            for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
            window[Ot].push(arguments)
          };
          return window[qt] && "function" === typeof window[qt] && (Dt = window[qt]), window[qt] = Ke(Dt, tt, et, Vt), {
            gtagCore: Dt,
            wrappedGtag: window[qt]
          }
        }(ke, Ge, ze, Ue, Ae);
        re = tt, oe = et, ie = !0
      }
      ke[Ot] = Le(tt, Ge, ze, et, oe, Ue, Vt);
      return new Fe(tt)
    }

    function pe() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ot.P)();
      tt = (0, Dt.L)(tt);
      const et = (0, Ot.z)(tt, ye);
      return et.isInitialized() ? et.getImmediate() : xe(tt)
    }

    function xe(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Vt = (0, Ot.z)(tt, ye);
      if (Vt.isInitialized()) {
        const tt = Vt.getImmediate();
        if ((0, Dt.x)(et, Vt.getOptions())) return tt;
        throw be.create("already-initialized")
      }
      return Vt.initialize({
        options: et
      })
    }
    async function Te() {
      if ((0, Dt.P)()) return !1;
      if (!(0, Dt.j)()) return !1;
      if (!(0, Dt.Y)()) return !1;
      try {
        return await (0, Dt.lb)()
      } catch (tt) {
        return !1
      }
    }

    function ge(tt, et, Vt) {
      tt = (0, Dt.L)(tt), async function(tt, et, Vt, Ot) {
        if (Ot && Ot.global) return tt("set", {
          screen_name: Vt
        }), Promise.resolve();
        tt("config", await et, {
          update: !0,
          screen_name: Vt
        })
      }(re, ke[tt.app.options.appId], et, Vt).catch((tt => ae.error(tt)))
    }
    async function se(tt) {
      return tt = (0, Dt.L)(tt), async function(tt, et) {
        const Vt = await et;
        return new Promise(((et, Ot) => {
          tt("get", Vt, "client_id", (tt => {
            tt || Ot(be.create("no-client-id")), et(tt)
          }))
        }))
      }(re, ke[tt.app.options.appId])
    }

    function ne(tt, et, Vt) {
      tt = (0, Dt.L)(tt), async function(tt, et, Vt, Ot) {
        if (Ot && Ot.global) return tt("set", {
          user_id: Vt
        }), Promise.resolve();
        tt("config", await et, {
          update: !0,
          user_id: Vt
        })
      }(re, ke[tt.app.options.appId], et, Vt).catch((tt => ae.error(tt)))
    }

    function tV(tt, et, Vt) {
      tt = (0, Dt.L)(tt), async function(tt, et, Vt, Ot) {
        if (Ot && Ot.global) {
          const et = {};
          for (const tt of Object.keys(Vt)) et[`user_properties.${tt}`] = Vt[tt];
          return tt("set", et), Promise.resolve()
        }
        tt("config", await et, {
          update: !0,
          user_properties: Vt
        })
      }(re, ke[tt.app.options.appId], et, Vt).catch((tt => ae.error(tt)))
    }

    function eV(tt, et) {
      tt = (0, Dt.L)(tt), async function(tt, et) {
        const Vt = await tt;
        window[`ga-disable-${Vt}`] = !et
      }(ke[tt.app.options.appId], et).catch((tt => ae.error(tt)))
    }

    function VV(tt) {
      re ? re("set", tt) : Ze(tt)
    }

    function OV(tt, et, Vt, Ot) {
      tt = (0, Dt.L)(tt), async function(tt, et, Vt, Ot, qt) {
        if (qt && qt.global) tt("event", Vt, Ot);
        else {
          const qt = await et;
          tt("event", Vt, Object.assign(Object.assign({}, Ot), {
            send_to: qt
          }))
        }
      }(re, ke[tt.app.options.appId], et, Vt, Ot).catch((tt => ae.error(tt)))
    }

    function qV(tt) {
      re ? re("consent", "update", tt) : Pe(tt)
    }
    const DV = "@firebase/analytics",
      mV = "0.10.0";
    (0, Ot.B)(new mt.d(ye, ((tt, et) => {
      let {
        options: Vt
      } = et;
      return Be(tt.getProvider("app").getImmediate(), tt.getProvider("installations-internal").getImmediate(), Vt)
    }), "PUBLIC")), (0, Ot.B)(new mt.d("analytics-internal", (function(tt) {
      try {
        const et = tt.getProvider(ye).getImmediate();
        return {
          logEvent: (tt, Vt, Ot) => OV(et, tt, Vt, Ot)
        }
      } catch (et) {
        throw be.create("interop-component-reg-failed", {
          reason: et
        })
      }
    }), "PRIVATE")), (0, Ot._)(DV, mV), (0, Ot._)(DV, mV, "esm2017")
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);