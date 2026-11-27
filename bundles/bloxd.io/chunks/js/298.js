/*! For license information please see u88b9b.298.2a7679ab.chunk.js.LICENSE.txt */
export const id = 298;
export const ids = [298];
export const modules = {
  41649: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      getAnalytics: () => Ii,
      getGoogleAnalyticsClientId: () => Qi,
      initializeAnalytics: () => Ni,
      isSupported: () => Gi,
      logEvent: () => bH,
      setAnalyticsCollectionEnabled: () => HH,
      setConsent: () => MH,
      setCurrentScreen: () => ri,
      setDefaultEventParameters: () => yH,
      setUserId: () => eH,
      setUserProperties: () => iH,
      settings: () => ji
    });
    var ye = He(41625),
      be = He(41640),
      Me = He(41632),
      Ke = He(41628);
    let Ue, Fe;
    const Je = new WeakMap,
      oe = new WeakMap,
      Re = new WeakMap,
      ke = new WeakMap,
      qe = new WeakMap;
    let fe = {
      get(ee, ie, He) {
        if (ee instanceof IDBTransaction) {
          if ("done" === ie) return oe.get(ee);
          if ("objectStoreNames" === ie) return ee.objectStoreNames || Re.get(ee);
          if ("store" === ie) return He.objectStoreNames[1] ? void 0 : He.objectStore(He.objectStoreNames[0])
        }
        return Xe(ee[ie])
      },
      set: (ee, ie, He) => (ee[ie] = He, !0),
      has: (ee, ie) => ee instanceof IDBTransaction && ("done" === ie || "store" === ie) || ie in ee
    };

    function Te(ee) {
      return ee !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Fe || (Fe = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(ee) ? function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return ee.apply(ze(this), He), Xe(Je.get(this))
      } : function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return Xe(ee.apply(ze(this), He))
      } : function(ie) {
        for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
        const Me = ee.call(ze(this), ie, ...ye);
        return Re.set(Me, ie.sort ? ie.sort() : [ie]), Xe(Me)
      }
    }

    function pe(ee) {
      return "function" === typeof ee ? Te(ee) : (ee instanceof IDBTransaction && function(ee) {
        if (oe.has(ee)) return;
        const ie = new Promise(((ie, He) => {
          const ye = () => {
              ee.removeEventListener("complete", be), ee.removeEventListener("error", Me), ee.removeEventListener("abort", Me)
            },
            be = () => {
              ie(), ye()
            },
            Me = () => {
              He(ee.error || new DOMException("AbortError", "AbortError")), ye()
            };
          ee.addEventListener("complete", be), ee.addEventListener("error", Me), ee.addEventListener("abort", Me)
        }));
        oe.set(ee, ie)
      }(ee), ie = ee, (Ue || (Ue = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((ee => ie instanceof ee)) ? new Proxy(ee, fe) : ee);
      var ie
    }

    function Xe(ee) {
      if (ee instanceof IDBRequest) return function(ee) {
        const ie = new Promise(((ie, He) => {
          const ye = () => {
              ee.removeEventListener("success", be), ee.removeEventListener("error", Me)
            },
            be = () => {
              ie(Xe(ee.result)), ye()
            },
            Me = () => {
              He(ee.error), ye()
            };
          ee.addEventListener("success", be), ee.addEventListener("error", Me)
        }));
        return ie.then((ie => {
          ie instanceof IDBCursor && Je.set(ie, ee)
        })).catch((() => {})), qe.set(ie, ee), ie
      }(ee);
      if (ke.has(ee)) return ke.get(ee);
      const ie = pe(ee);
      return ie !== ee && (ke.set(ee, ie), qe.set(ie, ee)), ie
    }
    const ze = ee => qe.get(ee);
    const Be = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Ee = ["put", "add", "delete", "clear"],
      ge = new Map;

    function Oe(ee, ie) {
      if (!(ee instanceof IDBDatabase) || ie in ee || "string" !== typeof ie) return;
      if (ge.get(ie)) return ge.get(ie);
      const He = ie.replace(/FromIndex$/, ""),
        ye = ie !== He,
        be = Ee.includes(He);
      if (!(He in (ye ? IDBIndex : IDBObjectStore).prototype) || !be && !Be.includes(He)) return;
      const Me = async function(ee) {
        const ie = this.transaction(ee, be ? "readwrite" : "readonly");
        let Me = ie.store;
        for (var Ke = arguments.length, Ue = new Array(Ke > 1 ? Ke - 1 : 0), Fe = 1; Fe < Ke; Fe++) Ue[Fe - 1] = arguments[Fe];
        return ye && (Me = Me.index(Ue.shift())), (await Promise.all([Me[He](...Ue), be && ie.done]))[0]
      };
      return ge.set(ie, Me), Me
    }
    fe = (ee => ({
      ...ee,
      get: (ie, He, ye) => Oe(ie, He) || ee.get(ie, He, ye),
      has: (ie, He) => !!Oe(ie, He) || ee.has(ie, He)
    }))(fe);
    const de = "@firebase/installations",
      We = "0.6.4",
      te = 1e4,
      Ze = `w:${We}`,
      we = "FIS_v2",
      De = 36e5,
      Pe = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Ae = new Me.h("installations", "Installations", Pe);

    function Ye(ee) {
      return ee instanceof Me.k && ee.code.includes("request-failed")
    }

    function Ve(ee) {
      let {
        projectId: ie
      } = ee;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${ie}/installations`
    }

    function ae(ee) {
      return {
        token: ee.token,
        requestStatus: 2,
        expiresIn: (ie = ee.expiresIn, Number(ie.replace("s", "000"))),
        creationTime: Date.now()
      };
      var ie
    }
    async function ce(ee, ie) {
      const He = (await ie.json()).error;
      return Ae.create("request-failed", {
        requestName: ee,
        serverCode: He.code,
        serverMessage: He.message,
        serverStatus: He.status
      })
    }

    function xe(ee) {
      let {
        apiKey: ie
      } = ee;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": ie
      })
    }

    function Le(ee, ie) {
      let {
        refreshToken: He
      } = ie;
      const ye = xe(ee);
      return ye.append("Authorization", function(ee) {
        return `${we} ${ee}`
      }(He)), ye
    }
    async function Ce(ee) {
      const ie = await ee();
      return ie.status >= 500 && ie.status < 600 ? ee() : ie
    }

    function ve(ee) {
      return new Promise((ie => {
        setTimeout(ie, ee)
      }))
    }
    const ue = /^[cdef][\w-]{21}$/;

    function me() {
      try {
        const ee = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(ee), ee[0] = 112 + ee[0] % 16;
        const ie = function(ee) {
          const ie = (He = ee, btoa(String.fromCharCode(...He)).replace(/\+/g, "-").replace(/\//g, "_"));
          var He;
          return ie.substr(0, 22)
        }(ee);
        return ue.test(ie) ? ie : ""
      } catch (ee) {
        return ""
      }
    }

    function le(ee) {
      return `${ee.appName}!${ee.appId}`
    }
    const Se = new Map;

    function ne(ee, ie) {
      const He = le(ee);
      je(He, ie),
        function(ee, ie) {
          const He = Ie();
          He && He.postMessage({
            key: ee,
            fid: ie
          });
          he()
        }(He, ie)
    }

    function je(ee, ie) {
      const He = Se.get(ee);
      if (He)
        for (const ye of He) ye(ie)
    }
    let se = null;

    function Ie() {
      return !se && "BroadcastChannel" in self && (se = new BroadcastChannel("[Firebase] FID Change"), se.onmessage = ee => {
        je(ee.data.key, ee.data.fid)
      }), se
    }

    function he() {
      0 === Se.size && se && (se.close(), se = null)
    }
    const Ne = "firebase-installations-store";
    let Ge = null;

    function re() {
      return Ge || (Ge = function(ee, ie) {
        let {
          blocked: He,
          upgrade: ye,
          blocking: be,
          terminated: Me
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ke = indexedDB.open(ee, ie),
          Ue = Xe(Ke);
        return ye && Ke.addEventListener("upgradeneeded", (ee => {
          ye(Xe(Ke.result), ee.oldVersion, ee.newVersion, Xe(Ke.transaction))
        })), He && Ke.addEventListener("blocked", (() => He())), Ue.then((ee => {
          Me && ee.addEventListener("close", (() => Me())), be && ee.addEventListener("versionchange", (() => be()))
        })).catch((() => {})), Ue
      }("firebase-installations-database", 1, {
        upgrade: (ee, ie) => {
          if (0 === ie) ee.createObjectStore(Ne)
        }
      })), Ge
    }
    async function Qe(ee, ie) {
      const He = le(ee),
        ye = (await re()).transaction(Ne, "readwrite"),
        be = ye.objectStore(Ne),
        Me = await be.get(He);
      return await be.put(ie, He), await ye.done, Me && Me.fid === ie.fid || ne(ee, ie.fid), ie
    }
    async function ei(ee) {
      const ie = le(ee),
        He = (await re()).transaction(Ne, "readwrite");
      await He.objectStore(Ne).delete(ie), await He.done
    }
    async function ii(ee, ie) {
      const He = le(ee),
        ye = (await re()).transaction(Ne, "readwrite"),
        be = ye.objectStore(Ne),
        Me = await be.get(He),
        Ke = ie(Me);
      return void 0 === Ke ? await be.delete(He) : await be.put(Ke, He), await ye.done, !Ke || Me && Me.fid === Ke.fid || ne(ee, Ke.fid), Ke
    }
    async function Hi(ee) {
      let ie;
      const He = await ii(ee.appConfig, (He => {
        const ye = function(ee) {
            const ie = ee || {
              fid: me(),
              registrationStatus: 0
            };
            return Mi(ie)
          }(He),
          be = function(ee, ie) {
            if (0 === ie.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: ie,
                  registrationPromise: Promise.reject(Ae.create("app-offline"))
                }
              }
              const He = {
                  fid: ie.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                ye = async function(ee, ie) {
                  try {
                    const He = await async function(ee, ie) {
                      let {
                        appConfig: He,
                        heartbeatServiceProvider: ye
                      } = ee, {
                        fid: be
                      } = ie;
                      const Me = Ve(He),
                        Ke = xe(He),
                        Ue = ye.getImmediate({
                          optional: !0
                        });
                      if (Ue) {
                        const ee = await Ue.getHeartbeatsHeader();
                        ee && Ke.append("x-firebase-client", ee)
                      }
                      const Fe = {
                          fid: be,
                          authVersion: we,
                          appId: He.appId,
                          sdkVersion: Ze
                        },
                        Je = {
                          method: "POST",
                          headers: Ke,
                          body: JSON.stringify(Fe)
                        },
                        oe = await Ce((() => fetch(Me, Je)));
                      if (oe.ok) {
                        const ee = await oe.json();
                        return {
                          fid: ee.fid || be,
                          registrationStatus: 2,
                          refreshToken: ee.refreshToken,
                          authToken: ae(ee.authToken)
                        }
                      }
                      throw await ce("Create Installation", oe)
                    }(ee, ie);
                    return Qe(ee.appConfig, He)
                  } catch (He) {
                    throw Ye(He) && 409 === He.customData.serverCode ? await ei(ee.appConfig) : await Qe(ee.appConfig, {
                      fid: ie.fid,
                      registrationStatus: 0
                    }), He
                  }
                }(ee, He);
              return {
                installationEntry: He,
                registrationPromise: ye
              }
            }
            return 1 === ie.registrationStatus ? {
              installationEntry: ie,
              registrationPromise: yi(ee)
            } : {
              installationEntry: ie
            }
          }(ee, ye);
        return ie = be.registrationPromise, be.installationEntry
      }));
      return "" === He.fid ? {
        installationEntry: await ie
      } : {
        installationEntry: He,
        registrationPromise: ie
      }
    }
    async function yi(ee) {
      let ie = await bi(ee.appConfig);
      for (; 1 === ie.registrationStatus;) await ve(100), ie = await bi(ee.appConfig);
      if (0 === ie.registrationStatus) {
        const {
          installationEntry: ie,
          registrationPromise: He
        } = await Hi(ee);
        return He || ie
      }
      return ie
    }

    function bi(ee) {
      return ii(ee, (ee => {
        if (!ee) throw Ae.create("installation-not-found");
        return Mi(ee)
      }))
    }

    function Mi(ee) {
      return 1 === (ie = ee).registrationStatus && ie.registrationTime + te < Date.now() ? {
        fid: ee.fid,
        registrationStatus: 0
      } : ee;
      var ie
    }
    async function Ki(ee, ie) {
      let {
        appConfig: He,
        heartbeatServiceProvider: ye
      } = ee;
      const be = function(ee, ie) {
          let {
            fid: He
          } = ie;
          return `${Ve(ee)}/${He}/authTokens:generate`
        }(He, ie),
        Me = Le(He, ie),
        Ke = ye.getImmediate({
          optional: !0
        });
      if (Ke) {
        const ee = await Ke.getHeartbeatsHeader();
        ee && Me.append("x-firebase-client", ee)
      }
      const Ue = {
          installation: {
            sdkVersion: Ze,
            appId: He.appId
          }
        },
        Fe = {
          method: "POST",
          headers: Me,
          body: JSON.stringify(Ue)
        },
        Je = await Ce((() => fetch(be, Fe)));
      if (Je.ok) {
        return ae(await Je.json())
      }
      throw await ce("Generate Auth Token", Je)
    }
    async function Ui(ee) {
      let ie, He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ye = await ii(ee.appConfig, (ye => {
        if (!Ji(ye)) throw Ae.create("not-registered");
        const be = ye.authToken;
        if (!He && function(ee) {
            return 2 === ee.requestStatus && ! function(ee) {
              const ie = Date.now();
              return ie < ee.creationTime || ee.creationTime + ee.expiresIn < ie + De
            }(ee)
          }(be)) return ye;
        if (1 === be.requestStatus) return ie = async function(ee, ie) {
          let He = await Fi(ee.appConfig);
          for (; 1 === He.authToken.requestStatus;) await ve(100), He = await Fi(ee.appConfig);
          const ye = He.authToken;
          return 0 === ye.requestStatus ? Ui(ee, ie) : ye
        }(ee, He), ye;
        {
          if (!navigator.onLine) throw Ae.create("app-offline");
          const He = function(ee) {
            const ie = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, ee), {
              authToken: ie
            })
          }(ye);
          return ie = async function(ee, ie) {
            try {
              const He = await Ki(ee, ie),
                ye = Object.assign(Object.assign({}, ie), {
                  authToken: He
                });
              return await Qe(ee.appConfig, ye), He
            } catch (He) {
              if (!Ye(He) || 401 !== He.customData.serverCode && 404 !== He.customData.serverCode) {
                const He = Object.assign(Object.assign({}, ie), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await Qe(ee.appConfig, He)
              } else await ei(ee.appConfig);
              throw He
            }
          }(ee, He), He
        }
      }));
      return ie ? await ie : ye.authToken
    }

    function Fi(ee) {
      return ii(ee, (ee => {
        if (!Ji(ee)) throw Ae.create("not-registered");
        const ie = ee.authToken;
        return 1 === (He = ie).requestStatus && He.requestTime + te < Date.now() ? Object.assign(Object.assign({}, ee), {
          authToken: {
            requestStatus: 0
          }
        }) : ee;
        var He
      }))
    }

    function Ji(ee) {
      return void 0 !== ee && 2 === ee.registrationStatus
    }
    async function oi(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const He = ee;
      await async function(ee) {
        const {
          registrationPromise: ie
        } = await Hi(ee);
        ie && await ie
      }(He);
      return (await Ui(He, ie)).token
    }

    function Ri(ee) {
      return Ae.create("missing-app-config-values", {
        valueName: ee
      })
    }
    const ki = "installations",
      qi = ee => {
        const ie = ee.getProvider("app").getImmediate(),
          He = function(ee) {
            if (!ee || !ee.options) throw Ri("App Configuration");
            if (!ee.name) throw Ri("App Name");
            const ie = ["projectId", "apiKey", "appId"];
            for (const He of ie)
              if (!ee.options[He]) throw Ri(He);
            return {
              appName: ee.name,
              projectId: ee.options.projectId,
              apiKey: ee.options.apiKey,
              appId: ee.options.appId
            }
          }(ie);
        return {
          app: ie,
          appConfig: He,
          heartbeatServiceProvider: (0, ye.r)(ie, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      fi = ee => {
        const ie = ee.getProvider("app").getImmediate(),
          He = (0, ye.r)(ie, ki).getImmediate();
        return {
          getId: () => async function(ee) {
            const ie = ee,
              {
                installationEntry: He,
                registrationPromise: ye
              } = await Hi(ie);
            return ye ? ye.catch(console.error) : Ui(ie).catch(console.error), He.fid
          }(He),
          getToken: ee => oi(He, ee)
        }
      };
    (0, ye.v)(new Ke.h(ki, qi, "PUBLIC")), (0, ye.v)(new Ke.h("installations-internal", fi, "PRIVATE")), (0, ye.H)(de, We), (0, ye.H)(de, We, "esm2017");
    const Ti = "analytics",
      Xi = "https://www.googletagmanager.com/gtag/js",
      zi = new be.e("@firebase/analytics"),
      Bi = {
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
      Ei = new Me.h("analytics", "Analytics", Bi);

    function gi(ee) {
      if (!ee.startsWith(Xi)) {
        const ie = Ei.create("invalid-gtag-resource", {
          gtagURL: ee
        });
        return zi.warn(ie.message), ""
      }
      return ee
    }

    function Oi(ee) {
      return Promise.all(ee.map((ee => ee.catch((ee => ee)))))
    }

    function di(ee, ie) {
      const He = function(ee, ie) {
          let He;
          return window.trustedTypes && (He = window.trustedTypes.createPolicy(ee, ie)), He
        }("firebase-js-sdk-policy", {
          createScriptURL: gi
        }),
        ye = document.createElement("script"),
        be = `${Xi}?l=${ee}&id=${ie}`;
      ye.src = He ? null === He || void 0 === He ? void 0 : He.createScriptURL(be) : be, ye.async = !0, document.head.appendChild(ye)
    }

    function Wi(ee, ie, He, ye) {
      return async function(be) {
        try {
          for (var Me = arguments.length, Ke = new Array(Me > 1 ? Me - 1 : 0), Ue = 1; Ue < Me; Ue++) Ke[Ue - 1] = arguments[Ue];
          if ("event" === be) {
            const [ye, be] = Ke;
            await async function(ee, ie, He, ye, be) {
              try {
                let Me = [];
                if (be && be.send_to) {
                  let ee = be.send_to;
                  Array.isArray(ee) || (ee = [ee]);
                  const ye = await Oi(He);
                  for (const He of ee) {
                    const ee = ye.find((ee => ee.measurementId === He)),
                      be = ee && ie[ee.appId];
                    if (!be) {
                      Me = [];
                      break
                    }
                    Me.push(be)
                  }
                }
                0 === Me.length && (Me = Object.values(ie)), await Promise.all(Me), ee("event", ye, be || {})
              } catch (Me) {
                zi.error(Me)
              }
            }(ee, ie, He, ye, be)
          } else if ("config" === be) {
            const [be, Me] = Ke;
            await async function(ee, ie, He, ye, be, Me) {
              const Ke = ye[be];
              try {
                if (Ke) await ie[Ke];
                else {
                  const ee = (await Oi(He)).find((ee => ee.measurementId === be));
                  ee && await ie[ee.appId]
                }
              } catch (Ue) {
                zi.error(Ue)
              }
              ee("config", be, Me)
            }(ee, ie, He, ye, be, Me)
          } else if ("consent" === be) {
            const [ie] = Ke;
            ee("consent", "update", ie)
          } else if ("get" === be) {
            const [ie, He, ye] = Ke;
            ee("get", ie, He, ye)
          } else if ("set" === be) {
            const [ie] = Ke;
            ee("set", ie)
          } else ee(be, ...Ke)
        } catch (Fe) {
          zi.error(Fe)
        }
      }
    }
    const ti = new class {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = ee, this.intervalMillis = ie
      }
      getThrottleMetadata(ee) {
        return this.throttleMetadata[ee]
      }
      setThrottleMetadata(ee, ie) {
        this.throttleMetadata[ee] = ie
      }
      deleteThrottleMetadata(ee) {
        delete this.throttleMetadata[ee]
      }
    };

    function Zi(ee) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": ee
      })
    }
    async function wi(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ti,
        He = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: ye,
        apiKey: be,
        measurementId: Me
      } = ee.options;
      if (!ye) throw Ei.create("no-app-id");
      if (!be) {
        if (Me) return {
          measurementId: Me,
          appId: ye
        };
        throw Ei.create("no-api-key")
      }
      const Ke = ie.getThrottleMetadata(ye) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Ue = new Pi;
      return setTimeout((async () => {
        Ue.abort()
      }), void 0 !== He ? He : 6e4), Di({
        appId: ye,
        apiKey: be,
        measurementId: Me
      }, Ke, Ue, ie)
    }
    async function Di(ee, ie, He) {
      let {
        throttleEndTimeMillis: ye,
        backoffCount: be
      } = ie, Ke = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ti;
      var Ue;
      const {
        appId: Fe,
        measurementId: Je
      } = ee;
      try {
        await
        function(ee, ie) {
          return new Promise(((He, ye) => {
            const be = Math.max(ie - Date.now(), 0),
              Me = setTimeout(He, be);
            ee.addEventListener((() => {
              clearTimeout(Me), ye(Ei.create("fetch-throttle", {
                throttleEndTimeMillis: ie
              }))
            }))
          }))
        }(He, ye)
      } catch (oe) {
        if (Je) return zi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Je} provided in the "measurementId" field in the local Firebase config. [${null===oe||void 0===oe?void 0:oe.message}]`), {
          appId: Fe,
          measurementId: Je
        };
        throw oe
      }
      try {
        const ie = await async function(ee) {
          var ie;
          const {
            appId: He,
            apiKey: ye
          } = ee, be = {
            method: "GET",
            headers: Zi(ye)
          }, Me = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", He), Ke = await fetch(Me, be);
          if (200 !== Ke.status && 304 !== Ke.status) {
            let ee = "";
            try {
              const He = await Ke.json();
              (null === (ie = He.error) || void 0 === ie ? void 0 : ie.message) && (ee = He.error.message)
            } catch (Ue) {}
            throw Ei.create("config-fetch-failed", {
              httpStatus: Ke.status,
              responseMessage: ee
            })
          }
          return Ke.json()
        }(ee);
        return Ke.deleteThrottleMetadata(Fe), ie
      } catch (oe) {
        const ie = oe;
        if (! function(ee) {
            if (!(ee instanceof Me.k) || !ee.customData) return !1;
            const ie = Number(ee.customData.httpStatus);
            return 429 === ie || 500 === ie || 503 === ie || 504 === ie
          }(ie)) {
          if (Ke.deleteThrottleMetadata(Fe), Je) return zi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Je} provided in the "measurementId" field in the local Firebase config. [${null===ie||void 0===ie?void 0:ie.message}]`), {
            appId: Fe,
            measurementId: Je
          };
          throw oe
        }
        const ye = 503 === Number(null === (Ue = null === ie || void 0 === ie ? void 0 : ie.customData) || void 0 === Ue ? void 0 : Ue.httpStatus) ? (0, Me.r)(be, Ke.intervalMillis, 30) : (0, Me.r)(be, Ke.intervalMillis),
          Re = {
            throttleEndTimeMillis: Date.now() + ye,
            backoffCount: be + 1
          };
        return Ke.setThrottleMetadata(Fe, Re), zi.debug(`Calling attemptFetch again in ${ye} millis`), Di(ee, Re, He, Ke)
      }
    }
    class Pi {
      constructor() {
        this.listeners = []
      }
      addEventListener(ee) {
        this.listeners.push(ee)
      }
      abort() {
        this.listeners.forEach((ee => ee()))
      }
    }
    let Ai, Yi;

    function Vi(ee) {
      Yi = ee
    }

    function ai(ee) {
      Ai = ee
    }
    async function ci(ee, ie, He, ye, be, Ke, Ue) {
      var Fe;
      const Je = wi(ee);
      Je.then((ie => {
        He[ie.measurementId] = ie.appId, ee.options.measurementId && ie.measurementId !== ee.options.measurementId && zi.warn(`The measurement ID in the local Firebase config (${ee.options.measurementId}) does not match the measurement ID fetched from the server (${ie.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((ee => zi.error(ee))), ie.push(Je);
      const oe = async function() {
        if (!(0, Me.T)()) return zi.warn(Ei.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Me.db)()
        } catch (ee) {
          return zi.warn(Ei.create("indexeddb-unavailable", {
            errorInfo: null === ee || void 0 === ee ? void 0 : ee.toString()
          }).message), !1
        }
        return !0
      }().then((ee => ee ? ye.getId() : void 0)), [Re, ke] = await Promise.all([Je, oe]);
      (function(ee) {
        const ie = window.document.getElementsByTagName("script");
        for (const He of Object.values(ie))
          if (He.src && He.src.includes(Xi) && He.src.includes(ee)) return He;
        return null
      })(Ke) || di(Ke, Re.measurementId), Yi && (be("consent", "default", Yi), Vi(void 0)), be("js", new Date);
      const qe = null !== (Fe = null === Ue || void 0 === Ue ? void 0 : Ue.config) && void 0 !== Fe ? Fe : {};
      return qe.origin = "firebase", qe.update = !0, null != ke && (qe.firebase_id = ke), be("config", Re.measurementId, qe), Ai && (be("set", Ai), ai(void 0)), Re.measurementId
    }
    class xi {
      constructor(ee) {
        this.app = ee
      }
      _delete() {
        return delete Li[this.app.options.appId], Promise.resolve()
      }
    }
    let Li = {},
      Ci = [];
    const vi = {};
    let ui, mi, li = "dataLayer",
      Si = "gtag",
      ni = !1;

    function ji(ee) {
      if (ni) throw Ei.create("already-initialized");
      ee.dataLayerName && (li = ee.dataLayerName), ee.gtagName && (Si = ee.gtagName)
    }

    function si(ee, ie, He) {
      ! function() {
        const ee = [];
        if ((0, Me.O)() && ee.push("This is a browser extension environment."), (0, Me.m)() || ee.push("Cookies are not available."), ee.length > 0) {
          const ie = ee.map(((ee, ie) => `(${ie+1}) ${ee}`)).join(" "),
            He = Ei.create("invalid-analytics-context", {
              errorInfo: ie
            });
          zi.warn(He.message)
        }
      }();
      const ye = ee.options.appId;
      if (!ye) throw Ei.create("no-app-id");
      if (!ee.options.apiKey) {
        if (!ee.options.measurementId) throw Ei.create("no-api-key");
        zi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${ee.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Li[ye]) throw Ei.create("already-exists", {
        id: ye
      });
      if (!ni) {
        ! function(ee) {
          let ie = [];
          Array.isArray(window[ee]) ? ie = window[ee] : window[ee] = ie
        }(li);
        const {
          wrappedGtag: ee,
          gtagCore: ie
        } = function(ee, ie, He, ye, be) {
          let Me = function() {
            for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
            window[ye].push(arguments)
          };
          return window[be] && "function" === typeof window[be] && (Me = window[be]), window[be] = Wi(Me, ee, ie, He), {
            gtagCore: Me,
            wrappedGtag: window[be]
          }
        }(Li, Ci, vi, li, Si);
        mi = ee, ui = ie, ni = !0
      }
      Li[ye] = ci(ee, Ci, vi, ie, ui, li, He);
      return new xi(ee)
    }

    function Ii() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.D)();
      ee = (0, Me.I)(ee);
      const ie = (0, ye.r)(ee, Ti);
      return ie.isInitialized() ? ie.getImmediate() : Ni(ee)
    }

    function Ni(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const He = (0, ye.r)(ee, Ti);
      if (He.isInitialized()) {
        const ee = He.getImmediate();
        if ((0, Me.t)(ie, He.getOptions())) return ee;
        throw Ei.create("already-initialized")
      }
      return He.initialize({
        options: ie
      })
    }
    async function Gi() {
      if ((0, Me.O)()) return !1;
      if (!(0, Me.m)()) return !1;
      if (!(0, Me.T)()) return !1;
      try {
        return await (0, Me.db)()
      } catch (ee) {
        return !1
      }
    }

    function ri(ee, ie, He) {
      ee = (0, Me.I)(ee), async function(ee, ie, He, ye) {
        if (ye && ye.global) return ee("set", {
          screen_name: He
        }), Promise.resolve();
        ee("config", await ie, {
          update: !0,
          screen_name: He
        })
      }(mi, Li[ee.app.options.appId], ie, He).catch((ee => zi.error(ee)))
    }
    async function Qi(ee) {
      return ee = (0, Me.I)(ee), async function(ee, ie) {
        const He = await ie;
        return new Promise(((ie, ye) => {
          ee("get", He, "client_id", (ee => {
            ee || ye(Ei.create("no-client-id")), ie(ee)
          }))
        }))
      }(mi, Li[ee.app.options.appId])
    }

    function eH(ee, ie, He) {
      ee = (0, Me.I)(ee), async function(ee, ie, He, ye) {
        if (ye && ye.global) return ee("set", {
          user_id: He
        }), Promise.resolve();
        ee("config", await ie, {
          update: !0,
          user_id: He
        })
      }(mi, Li[ee.app.options.appId], ie, He).catch((ee => zi.error(ee)))
    }

    function iH(ee, ie, He) {
      ee = (0, Me.I)(ee), async function(ee, ie, He, ye) {
        if (ye && ye.global) {
          const ie = {};
          for (const ee of Object.keys(He)) ie[`user_properties.${ee}`] = He[ee];
          return ee("set", ie), Promise.resolve()
        }
        ee("config", await ie, {
          update: !0,
          user_properties: He
        })
      }(mi, Li[ee.app.options.appId], ie, He).catch((ee => zi.error(ee)))
    }

    function HH(ee, ie) {
      ee = (0, Me.I)(ee), async function(ee, ie) {
        const He = await ee;
        window[`ga-disable-${He}`] = !ie
      }(Li[ee.app.options.appId], ie).catch((ee => zi.error(ee)))
    }

    function yH(ee) {
      mi ? mi("set", ee) : ai(ee)
    }

    function bH(ee, ie, He, ye) {
      ee = (0, Me.I)(ee), async function(ee, ie, He, ye, be) {
        if (be && be.global) ee("event", He, ye);
        else {
          const be = await ie;
          ee("event", He, Object.assign(Object.assign({}, ye), {
            send_to: be
          }))
        }
      }(mi, Li[ee.app.options.appId], ie, He, ye).catch((ee => zi.error(ee)))
    }

    function MH(ee) {
      mi ? mi("consent", "update", ee) : Vi(ee)
    }
    const KH = "@firebase/analytics",
      UH = "0.10.0";
    (0, ye.v)(new Ke.h(Ti, ((ee, ie) => {
      let {
        options: He
      } = ie;
      return si(ee.getProvider("app").getImmediate(), ee.getProvider("installations-internal").getImmediate(), He)
    }), "PUBLIC")), (0, ye.v)(new Ke.h("analytics-internal", (function(ee) {
      try {
        const ie = ee.getProvider(Ti).getImmediate();
        return {
          logEvent: (ee, He, ye) => bH(ie, ee, He, ye)
        }
      } catch (ie) {
        throw Ei.create("interop-component-reg-failed", {
          reason: ie
        })
      }
    }), "PRIVATE")), (0, ye.H)(KH, UH), (0, ye.H)(KH, UH, "esm2017")
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);