/*! For license information please see q3ynmh.257.d115e626.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  40103: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      getAnalytics: () => YR,
      getGoogleAnalyticsClientId: () => vR,
      initializeAnalytics: () => oR,
      isSupported: () => qR,
      logEvent: () => yy,
      setAnalyticsCollectionEnabled: () => uy,
      setConsent: () => Ey,
      setCurrentScreen: () => OR,
      setDefaultEventParameters: () => Ry,
      setUserId: () => aR,
      setUserProperties: () => fR,
      settings: () => PR
    });
    var Eu = yu(40083),
      Ku = yu(40099),
      Qu = yu(40094),
      mu = yu(40085);
    let Ju, Nu;
    const Xu = new WeakMap,
      Vu = new WeakMap,
      ru = new WeakMap,
      Bu = new WeakMap,
      xu = new WeakMap;
    let Su = {
      get(uu, Ru, yu) {
        if (uu instanceof IDBTransaction) {
          if ("done" === Ru) return Vu.get(uu);
          if ("objectStoreNames" === Ru) return uu.objectStoreNames || ru.get(uu);
          if ("store" === Ru) return yu.objectStoreNames[1] ? void 0 : yu.objectStore(yu.objectStoreNames[0])
        }
        return Wu(uu[Ru])
      },
      set: (uu, Ru, yu) => (uu[Ru] = yu, !0),
      has: (uu, Ru) => uu instanceof IDBTransaction && ("done" === Ru || "store" === Ru) || Ru in uu
    };

    function pu(uu) {
      return uu !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Nu || (Nu = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(uu) ? function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return uu.apply(ju(this), yu), Wu(Xu.get(this))
      } : function() {
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return Wu(uu.apply(ju(this), yu))
      } : function(Ru) {
        for (var yu = arguments.length, Eu = new Array(yu > 1 ? yu - 1 : 0), Ku = 1; Ku < yu; Ku++) Eu[Ku - 1] = arguments[Ku];
        const Qu = uu.call(ju(this), Ru, ...Eu);
        return ru.set(Qu, Ru.sort ? Ru.sort() : [Ru]), Wu(Qu)
      }
    }

    function Tu(uu) {
      return "function" === typeof uu ? pu(uu) : (uu instanceof IDBTransaction && function(uu) {
        if (Vu.has(uu)) return;
        const Ru = new Promise(((Ru, yu) => {
          const Eu = () => {
              uu.removeEventListener("complete", Ku), uu.removeEventListener("error", Qu), uu.removeEventListener("abort", Qu)
            },
            Ku = () => {
              Ru(), Eu()
            },
            Qu = () => {
              yu(uu.error || new DOMException("AbortError", "AbortError")), Eu()
            };
          uu.addEventListener("complete", Ku), uu.addEventListener("error", Qu), uu.addEventListener("abort", Qu)
        }));
        Vu.set(uu, Ru)
      }(uu), Ru = uu, (Ju || (Ju = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((uu => Ru instanceof uu)) ? new Proxy(uu, Su) : uu);
      var Ru
    }

    function Wu(uu) {
      if (uu instanceof IDBRequest) return function(uu) {
        const Ru = new Promise(((Ru, yu) => {
          const Eu = () => {
              uu.removeEventListener("success", Ku), uu.removeEventListener("error", Qu)
            },
            Ku = () => {
              Ru(Wu(uu.result)), Eu()
            },
            Qu = () => {
              yu(uu.error), Eu()
            };
          uu.addEventListener("success", Ku), uu.addEventListener("error", Qu)
        }));
        return Ru.then((Ru => {
          Ru instanceof IDBCursor && Xu.set(Ru, uu)
        })).catch((() => {})), xu.set(Ru, uu), Ru
      }(uu);
      if (Bu.has(uu)) return Bu.get(uu);
      const Ru = Tu(uu);
      return Ru !== uu && (Bu.set(uu, Ru), xu.set(Ru, uu)), Ru
    }
    const ju = uu => xu.get(uu);
    const Hu = ["get", "getKey", "getAll", "getAllKeys", "count"],
      du = ["put", "add", "delete", "clear"],
      bu = new Map;

    function Cu(uu, Ru) {
      if (!(uu instanceof IDBDatabase) || Ru in uu || "string" !== typeof Ru) return;
      if (bu.get(Ru)) return bu.get(Ru);
      const yu = Ru.replace(/FromIndex$/, ""),
        Eu = Ru !== yu,
        Ku = du.includes(yu);
      if (!(yu in (Eu ? IDBIndex : IDBObjectStore).prototype) || !Ku && !Hu.includes(yu)) return;
      const Qu = async function(uu) {
        const Ru = this.transaction(uu, Ku ? "readwrite" : "readonly");
        let Qu = Ru.store;
        for (var mu = arguments.length, Ju = new Array(mu > 1 ? mu - 1 : 0), Nu = 1; Nu < mu; Nu++) Ju[Nu - 1] = arguments[Nu];
        return Eu && (Qu = Qu.index(Ju.shift())), (await Promise.all([Qu[yu](...Ju), Ku && Ru.done]))[0]
      };
      return bu.set(Ru, Qu), Qu
    }
    Su = (uu => ({
      ...uu,
      get: (Ru, yu, Eu) => Cu(Ru, yu) || uu.get(Ru, yu, Eu),
      has: (Ru, yu) => !!Cu(Ru, yu) || uu.has(Ru, yu)
    }))(Su);
    const ku = "@firebase/installations",
      eu = "0.6.4",
      Au = 1e4,
      Du = `w:${eu}`,
      Mu = "FIS_v2",
      Iu = 36e5,
      Gu = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Uu = new Qu.d("installations", "Installations", Gu);

    function nu(uu) {
      return uu instanceof Qu.e && uu.code.includes("request-failed")
    }

    function su(uu) {
      let {
        projectId: Ru
      } = uu;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Ru}/installations`
    }

    function tu(uu) {
      return {
        token: uu.token,
        requestStatus: 2,
        expiresIn: (Ru = uu.expiresIn, Number(Ru.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Ru
    }
    async function lu(uu, Ru) {
      const yu = (await Ru.json()).error;
      return Uu.create("request-failed", {
        requestName: uu,
        serverCode: yu.code,
        serverMessage: yu.message,
        serverStatus: yu.status
      })
    }

    function gu(uu) {
      let {
        apiKey: Ru
      } = uu;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Ru
      })
    }

    function cu(uu, Ru) {
      let {
        refreshToken: yu
      } = Ru;
      const Eu = gu(uu);
      return Eu.append("Authorization", function(uu) {
        return `${Mu} ${uu}`
      }(yu)), Eu
    }
    async function Lu(uu) {
      const Ru = await uu();
      return Ru.status >= 500 && Ru.status < 600 ? uu() : Ru
    }

    function zu(uu) {
      return new Promise((Ru => {
        setTimeout(Ru, uu)
      }))
    }
    const Fu = /^[cdef][\w-]{21}$/;

    function wu() {
      try {
        const uu = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(uu), uu[0] = 112 + uu[0] % 16;
        const Ru = function(uu) {
          const Ru = (yu = uu, btoa(String.fromCharCode(...yu)).replace(/\+/g, "-").replace(/\//g, "_"));
          var yu;
          return Ru.substr(0, 22)
        }(uu);
        return Fu.test(Ru) ? Ru : ""
      } catch (uu) {
        return ""
      }
    }

    function Zu(uu) {
      return `${uu.appName}!${uu.appId}`
    }
    const hu = new Map;

    function Pu(uu, Ru) {
      const yu = Zu(uu);
      iu(yu, Ru),
        function(uu, Ru) {
          const yu = ou();
          yu && yu.postMessage({
            key: uu,
            fid: Ru
          });
          qu()
        }(yu, Ru)
    }

    function iu(uu, Ru) {
      const yu = hu.get(uu);
      if (yu)
        for (const Eu of yu) Eu(Ru)
    }
    let Yu = null;

    function ou() {
      return !Yu && "BroadcastChannel" in self && (Yu = new BroadcastChannel("[Firebase] FID Change"), Yu.onmessage = uu => {
        iu(uu.data.key, uu.data.fid)
      }), Yu
    }

    function qu() {
      0 === hu.size && Yu && (Yu.close(), Yu = null)
    }
    const Ou = "firebase-installations-store";
    let vu = null;

    function au() {
      return vu || (vu = function(uu, Ru) {
        let {
          blocked: yu,
          upgrade: Eu,
          blocking: Ku,
          terminated: Qu
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const mu = indexedDB.open(uu, Ru),
          Ju = Wu(mu);
        return Eu && mu.addEventListener("upgradeneeded", (uu => {
          Eu(Wu(mu.result), uu.oldVersion, uu.newVersion, Wu(mu.transaction))
        })), yu && mu.addEventListener("blocked", (() => yu())), Ju.then((uu => {
          Qu && uu.addEventListener("close", (() => Qu())), Ku && uu.addEventListener("versionchange", (() => Ku()))
        })).catch((() => {})), Ju
      }("firebase-installations-database", 1, {
        upgrade: (uu, Ru) => {
          if (0 === Ru) uu.createObjectStore(Ou)
        }
      })), vu
    }
    async function fu(uu, Ru) {
      const yu = Zu(uu),
        Eu = (await au()).transaction(Ou, "readwrite"),
        Ku = Eu.objectStore(Ou),
        Qu = await Ku.get(yu);
      return await Ku.put(Ru, yu), await Eu.done, Qu && Qu.fid === Ru.fid || Pu(uu, Ru.fid), Ru
    }
    async function uR(uu) {
      const Ru = Zu(uu),
        yu = (await au()).transaction(Ou, "readwrite");
      await yu.objectStore(Ou).delete(Ru), await yu.done
    }
    async function RR(uu, Ru) {
      const yu = Zu(uu),
        Eu = (await au()).transaction(Ou, "readwrite"),
        Ku = Eu.objectStore(Ou),
        Qu = await Ku.get(yu),
        mu = Ru(Qu);
      return void 0 === mu ? await Ku.delete(yu) : await Ku.put(mu, yu), await Eu.done, !mu || Qu && Qu.fid === mu.fid || Pu(uu, mu.fid), mu
    }
    async function yR(uu) {
      let Ru;
      const yu = await RR(uu.appConfig, (yu => {
        const Eu = function(uu) {
            const Ru = uu || {
              fid: wu(),
              registrationStatus: 0
            };
            return QR(Ru)
          }(yu),
          Ku = function(uu, Ru) {
            if (0 === Ru.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Ru,
                  registrationPromise: Promise.reject(Uu.create("app-offline"))
                }
              }
              const yu = {
                  fid: Ru.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Eu = async function(uu, Ru) {
                  try {
                    const yu = await async function(uu, Ru) {
                      let {
                        appConfig: yu,
                        heartbeatServiceProvider: Eu
                      } = uu, {
                        fid: Ku
                      } = Ru;
                      const Qu = su(yu),
                        mu = gu(yu),
                        Ju = Eu.getImmediate({
                          optional: !0
                        });
                      if (Ju) {
                        const uu = await Ju.getHeartbeatsHeader();
                        uu && mu.append("x-firebase-client", uu)
                      }
                      const Nu = {
                          fid: Ku,
                          authVersion: Mu,
                          appId: yu.appId,
                          sdkVersion: Du
                        },
                        Xu = {
                          method: "POST",
                          headers: mu,
                          body: JSON.stringify(Nu)
                        },
                        Vu = await Lu((() => fetch(Qu, Xu)));
                      if (Vu.ok) {
                        const uu = await Vu.json();
                        return {
                          fid: uu.fid || Ku,
                          registrationStatus: 2,
                          refreshToken: uu.refreshToken,
                          authToken: tu(uu.authToken)
                        }
                      }
                      throw await lu("Create Installation", Vu)
                    }(uu, Ru);
                    return fu(uu.appConfig, yu)
                  } catch (yu) {
                    throw nu(yu) && 409 === yu.customData.serverCode ? await uR(uu.appConfig) : await fu(uu.appConfig, {
                      fid: Ru.fid,
                      registrationStatus: 0
                    }), yu
                  }
                }(uu, yu);
              return {
                installationEntry: yu,
                registrationPromise: Eu
              }
            }
            return 1 === Ru.registrationStatus ? {
              installationEntry: Ru,
              registrationPromise: ER(uu)
            } : {
              installationEntry: Ru
            }
          }(uu, Eu);
        return Ru = Ku.registrationPromise, Ku.installationEntry
      }));
      return "" === yu.fid ? {
        installationEntry: await Ru
      } : {
        installationEntry: yu,
        registrationPromise: Ru
      }
    }
    async function ER(uu) {
      let Ru = await KR(uu.appConfig);
      for (; 1 === Ru.registrationStatus;) await zu(100), Ru = await KR(uu.appConfig);
      if (0 === Ru.registrationStatus) {
        const {
          installationEntry: Ru,
          registrationPromise: yu
        } = await yR(uu);
        return yu || Ru
      }
      return Ru
    }

    function KR(uu) {
      return RR(uu, (uu => {
        if (!uu) throw Uu.create("installation-not-found");
        return QR(uu)
      }))
    }

    function QR(uu) {
      return 1 === (Ru = uu).registrationStatus && Ru.registrationTime + Au < Date.now() ? {
        fid: uu.fid,
        registrationStatus: 0
      } : uu;
      var Ru
    }
    async function mR(uu, Ru) {
      let {
        appConfig: yu,
        heartbeatServiceProvider: Eu
      } = uu;
      const Ku = function(uu, Ru) {
          let {
            fid: yu
          } = Ru;
          return `${su(uu)}/${yu}/authTokens:generate`
        }(yu, Ru),
        Qu = cu(yu, Ru),
        mu = Eu.getImmediate({
          optional: !0
        });
      if (mu) {
        const uu = await mu.getHeartbeatsHeader();
        uu && Qu.append("x-firebase-client", uu)
      }
      const Ju = {
          installation: {
            sdkVersion: Du,
            appId: yu.appId
          }
        },
        Nu = {
          method: "POST",
          headers: Qu,
          body: JSON.stringify(Ju)
        },
        Xu = await Lu((() => fetch(Ku, Nu)));
      if (Xu.ok) {
        return tu(await Xu.json())
      }
      throw await lu("Generate Auth Token", Xu)
    }
    async function JR(uu) {
      let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Eu = await RR(uu.appConfig, (Eu => {
        if (!XR(Eu)) throw Uu.create("not-registered");
        const Ku = Eu.authToken;
        if (!yu && function(uu) {
            return 2 === uu.requestStatus && ! function(uu) {
              const Ru = Date.now();
              return Ru < uu.creationTime || uu.creationTime + uu.expiresIn < Ru + Iu
            }(uu)
          }(Ku)) return Eu;
        if (1 === Ku.requestStatus) return Ru = async function(uu, Ru) {
          let yu = await NR(uu.appConfig);
          for (; 1 === yu.authToken.requestStatus;) await zu(100), yu = await NR(uu.appConfig);
          const Eu = yu.authToken;
          return 0 === Eu.requestStatus ? JR(uu, Ru) : Eu
        }(uu, yu), Eu;
        {
          if (!navigator.onLine) throw Uu.create("app-offline");
          const yu = function(uu) {
            const Ru = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, uu), {
              authToken: Ru
            })
          }(Eu);
          return Ru = async function(uu, Ru) {
            try {
              const yu = await mR(uu, Ru),
                Eu = Object.assign(Object.assign({}, Ru), {
                  authToken: yu
                });
              return await fu(uu.appConfig, Eu), yu
            } catch (yu) {
              if (!nu(yu) || 401 !== yu.customData.serverCode && 404 !== yu.customData.serverCode) {
                const yu = Object.assign(Object.assign({}, Ru), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await fu(uu.appConfig, yu)
              } else await uR(uu.appConfig);
              throw yu
            }
          }(uu, yu), yu
        }
      }));
      return Ru ? await Ru : Eu.authToken
    }

    function NR(uu) {
      return RR(uu, (uu => {
        if (!XR(uu)) throw Uu.create("not-registered");
        const Ru = uu.authToken;
        return 1 === (yu = Ru).requestStatus && yu.requestTime + Au < Date.now() ? Object.assign(Object.assign({}, uu), {
          authToken: {
            requestStatus: 0
          }
        }) : uu;
        var yu
      }))
    }

    function XR(uu) {
      return void 0 !== uu && 2 === uu.registrationStatus
    }
    async function VR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const yu = uu;
      await async function(uu) {
        const {
          registrationPromise: Ru
        } = await yR(uu);
        Ru && await Ru
      }(yu);
      return (await JR(yu, Ru)).token
    }

    function rR(uu) {
      return Uu.create("missing-app-config-values", {
        valueName: uu
      })
    }
    const BR = "installations",
      xR = uu => {
        const Ru = uu.getProvider("app").getImmediate(),
          yu = function(uu) {
            if (!uu || !uu.options) throw rR("App Configuration");
            if (!uu.name) throw rR("App Name");
            const Ru = ["projectId", "apiKey", "appId"];
            for (const yu of Ru)
              if (!uu.options[yu]) throw rR(yu);
            return {
              appName: uu.name,
              projectId: uu.options.projectId,
              apiKey: uu.options.apiKey,
              appId: uu.options.appId
            }
          }(Ru);
        return {
          app: Ru,
          appConfig: yu,
          heartbeatServiceProvider: (0, Eu.z)(Ru, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      SR = uu => {
        const Ru = uu.getProvider("app").getImmediate(),
          yu = (0, Eu.z)(Ru, BR).getImmediate();
        return {
          getId: () => async function(uu) {
            const Ru = uu,
              {
                installationEntry: yu,
                registrationPromise: Eu
              } = await yR(Ru);
            return Eu ? Eu.catch(console.error) : JR(Ru).catch(console.error), yu.fid
          }(yu),
          getToken: uu => VR(yu, uu)
        }
      };
    (0, Eu.B)(new mu.e(BR, xR, "PUBLIC")), (0, Eu.B)(new mu.e("installations-internal", SR, "PRIVATE")), (0, Eu.T)(ku, eu), (0, Eu.T)(ku, eu, "esm2017");
    const pR = "analytics",
      TR = "https://www.googletagmanager.com/gtag/js",
      WR = new Ku.h("@firebase/analytics"),
      jR = {
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
      HR = new Qu.d("analytics", "Analytics", jR);

    function dR(uu) {
      if (!uu.startsWith(TR)) {
        const Ru = HR.create("invalid-gtag-resource", {
          gtagURL: uu
        });
        return WR.warn(Ru.message), ""
      }
      return uu
    }

    function bR(uu) {
      return Promise.all(uu.map((uu => uu.catch((uu => uu)))))
    }

    function CR(uu, Ru) {
      const yu = function(uu, Ru) {
          let yu;
          return window.trustedTypes && (yu = window.trustedTypes.createPolicy(uu, Ru)), yu
        }("firebase-js-sdk-policy", {
          createScriptURL: dR
        }),
        Eu = document.createElement("script"),
        Ku = `${TR}?l=${uu}&id=${Ru}`;
      Eu.src = yu ? null === yu || void 0 === yu ? void 0 : yu.createScriptURL(Ku) : Ku, Eu.async = !0, document.head.appendChild(Eu)
    }

    function kR(uu, Ru, yu, Eu) {
      return async function(Ku) {
        try {
          for (var Qu = arguments.length, mu = new Array(Qu > 1 ? Qu - 1 : 0), Ju = 1; Ju < Qu; Ju++) mu[Ju - 1] = arguments[Ju];
          if ("event" === Ku) {
            const [Eu, Ku] = mu;
            await async function(uu, Ru, yu, Eu, Ku) {
              try {
                let Qu = [];
                if (Ku && Ku.send_to) {
                  let uu = Ku.send_to;
                  Array.isArray(uu) || (uu = [uu]);
                  const Eu = await bR(yu);
                  for (const yu of uu) {
                    const uu = Eu.find((uu => uu.measurementId === yu)),
                      Ku = uu && Ru[uu.appId];
                    if (!Ku) {
                      Qu = [];
                      break
                    }
                    Qu.push(Ku)
                  }
                }
                0 === Qu.length && (Qu = Object.values(Ru)), await Promise.all(Qu), uu("event", Eu, Ku || {})
              } catch (Qu) {
                WR.error(Qu)
              }
            }(uu, Ru, yu, Eu, Ku)
          } else if ("config" === Ku) {
            const [Ku, Qu] = mu;
            await async function(uu, Ru, yu, Eu, Ku, Qu) {
              const mu = Eu[Ku];
              try {
                if (mu) await Ru[mu];
                else {
                  const uu = (await bR(yu)).find((uu => uu.measurementId === Ku));
                  uu && await Ru[uu.appId]
                }
              } catch (Ju) {
                WR.error(Ju)
              }
              uu("config", Ku, Qu)
            }(uu, Ru, yu, Eu, Ku, Qu)
          } else if ("consent" === Ku) {
            const [Ru] = mu;
            uu("consent", "update", Ru)
          } else if ("get" === Ku) {
            const [Ru, yu, Eu] = mu;
            uu("get", Ru, yu, Eu)
          } else if ("set" === Ku) {
            const [Ru] = mu;
            uu("set", Ru)
          } else uu(Ku, ...mu)
        } catch (Nu) {
          WR.error(Nu)
        }
      }
    }
    const eR = new class {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = uu, this.intervalMillis = Ru
      }
      getThrottleMetadata(uu) {
        return this.throttleMetadata[uu]
      }
      setThrottleMetadata(uu, Ru) {
        this.throttleMetadata[uu] = Ru
      }
      deleteThrottleMetadata(uu) {
        delete this.throttleMetadata[uu]
      }
    };

    function AR(uu) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": uu
      })
    }
    async function DR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR,
        yu = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Eu,
        apiKey: Ku,
        measurementId: Qu
      } = uu.options;
      if (!Eu) throw HR.create("no-app-id");
      if (!Ku) {
        if (Qu) return {
          measurementId: Qu,
          appId: Eu
        };
        throw HR.create("no-api-key")
      }
      const mu = Ru.getThrottleMetadata(Eu) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Ju = new IR;
      return setTimeout((async () => {
        Ju.abort()
      }), void 0 !== yu ? yu : 6e4), MR({
        appId: Eu,
        apiKey: Ku,
        measurementId: Qu
      }, mu, Ju, Ru)
    }
    async function MR(uu, Ru, yu) {
      let {
        throttleEndTimeMillis: Eu,
        backoffCount: Ku
      } = Ru, mu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eR;
      var Ju;
      const {
        appId: Nu,
        measurementId: Xu
      } = uu;
      try {
        await
        function(uu, Ru) {
          return new Promise(((yu, Eu) => {
            const Ku = Math.max(Ru - Date.now(), 0),
              Qu = setTimeout(yu, Ku);
            uu.addEventListener((() => {
              clearTimeout(Qu), Eu(HR.create("fetch-throttle", {
                throttleEndTimeMillis: Ru
              }))
            }))
          }))
        }(yu, Eu)
      } catch (Vu) {
        if (Xu) return WR.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Xu} provided in the "measurementId" field in the local Firebase config. [${null===Vu||void 0===Vu?void 0:Vu.message}]`), {
          appId: Nu,
          measurementId: Xu
        };
        throw Vu
      }
      try {
        const Ru = await async function(uu) {
          var Ru;
          const {
            appId: yu,
            apiKey: Eu
          } = uu, Ku = {
            method: "GET",
            headers: AR(Eu)
          }, Qu = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", yu), mu = await fetch(Qu, Ku);
          if (200 !== mu.status && 304 !== mu.status) {
            let uu = "";
            try {
              const yu = await mu.json();
              (null === (Ru = yu.error) || void 0 === Ru ? void 0 : Ru.message) && (uu = yu.error.message)
            } catch (Ju) {}
            throw HR.create("config-fetch-failed", {
              httpStatus: mu.status,
              responseMessage: uu
            })
          }
          return mu.json()
        }(uu);
        return mu.deleteThrottleMetadata(Nu), Ru
      } catch (Vu) {
        const Ru = Vu;
        if (! function(uu) {
            if (!(uu instanceof Qu.e) || !uu.customData) return !1;
            const Ru = Number(uu.customData.httpStatus);
            return 429 === Ru || 500 === Ru || 503 === Ru || 504 === Ru
          }(Ru)) {
          if (mu.deleteThrottleMetadata(Nu), Xu) return WR.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Xu} provided in the "measurementId" field in the local Firebase config. [${null===Ru||void 0===Ru?void 0:Ru.message}]`), {
            appId: Nu,
            measurementId: Xu
          };
          throw Vu
        }
        const Eu = 503 === Number(null === (Ju = null === Ru || void 0 === Ru ? void 0 : Ru.customData) || void 0 === Ju ? void 0 : Ju.httpStatus) ? (0, Qu.l)(Ku, mu.intervalMillis, 30) : (0, Qu.l)(Ku, mu.intervalMillis),
          ru = {
            throttleEndTimeMillis: Date.now() + Eu,
            backoffCount: Ku + 1
          };
        return mu.setThrottleMetadata(Nu, ru), WR.debug(`Calling attemptFetch again in ${Eu} millis`), MR(uu, ru, yu, mu)
      }
    }
    class IR {
      constructor() {
        this.listeners = []
      }
      addEventListener(uu) {
        this.listeners.push(uu)
      }
      abort() {
        this.listeners.forEach((uu => uu()))
      }
    }
    let GR, UR;

    function nR(uu) {
      UR = uu
    }

    function sR(uu) {
      GR = uu
    }
    async function tR(uu, Ru, yu, Eu, Ku, mu, Ju) {
      var Nu;
      const Xu = DR(uu);
      Xu.then((Ru => {
        yu[Ru.measurementId] = Ru.appId, uu.options.measurementId && Ru.measurementId !== uu.options.measurementId && WR.warn(`The measurement ID in the local Firebase config (${uu.options.measurementId}) does not match the measurement ID fetched from the server (${Ru.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((uu => WR.error(uu))), Ru.push(Xu);
      const Vu = async function() {
        if (!(0, Qu.S)()) return WR.warn(HR.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Qu.db)()
        } catch (uu) {
          return WR.warn(HR.create("indexeddb-unavailable", {
            errorInfo: null === uu || void 0 === uu ? void 0 : uu.toString()
          }).message), !1
        }
        return !0
      }().then((uu => uu ? Eu.getId() : void 0)), [ru, Bu] = await Promise.all([Xu, Vu]);
      (function(uu) {
        const Ru = window.document.getElementsByTagName("script");
        for (const yu of Object.values(Ru))
          if (yu.src && yu.src.includes(TR) && yu.src.includes(uu)) return yu;
        return null
      })(mu) || CR(mu, ru.measurementId), UR && (Ku("consent", "default", UR), nR(void 0)), Ku("js", new Date);
      const xu = null !== (Nu = null === Ju || void 0 === Ju ? void 0 : Ju.config) && void 0 !== Nu ? Nu : {};
      return xu.origin = "firebase", xu.update = !0, null != Bu && (xu.firebase_id = Bu), Ku("config", ru.measurementId, xu), GR && (Ku("set", GR), sR(void 0)), ru.measurementId
    }
    class lR {
      constructor(uu) {
        this.app = uu
      }
      _delete() {
        return delete gR[this.app.options.appId], Promise.resolve()
      }
    }
    let gR = {},
      cR = [];
    const LR = {};
    let zR, FR, wR = "dataLayer",
      ZR = "gtag",
      hR = !1;

    function PR(uu) {
      if (hR) throw HR.create("already-initialized");
      uu.dataLayerName && (wR = uu.dataLayerName), uu.gtagName && (ZR = uu.gtagName)
    }

    function iR(uu, Ru, yu) {
      ! function() {
        const uu = [];
        if ((0, Qu.J)() && uu.push("This is a browser extension environment."), (0, Qu.i)() || uu.push("Cookies are not available."), uu.length > 0) {
          const Ru = uu.map(((uu, Ru) => `(${Ru+1}) ${uu}`)).join(" "),
            yu = HR.create("invalid-analytics-context", {
              errorInfo: Ru
            });
          WR.warn(yu.message)
        }
      }();
      const Eu = uu.options.appId;
      if (!Eu) throw HR.create("no-app-id");
      if (!uu.options.apiKey) {
        if (!uu.options.measurementId) throw HR.create("no-api-key");
        WR.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${uu.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != gR[Eu]) throw HR.create("already-exists", {
        id: Eu
      });
      if (!hR) {
        ! function(uu) {
          let Ru = [];
          Array.isArray(window[uu]) ? Ru = window[uu] : window[uu] = Ru
        }(wR);
        const {
          wrappedGtag: uu,
          gtagCore: Ru
        } = function(uu, Ru, yu, Eu, Ku) {
          let Qu = function() {
            for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
            window[Eu].push(arguments)
          };
          return window[Ku] && "function" === typeof window[Ku] && (Qu = window[Ku]), window[Ku] = kR(Qu, uu, Ru, yu), {
            gtagCore: Qu,
            wrappedGtag: window[Ku]
          }
        }(gR, cR, LR, wR, ZR);
        FR = uu, zR = Ru, hR = !0
      }
      gR[Eu] = tR(uu, cR, LR, Ru, zR, wR, yu);
      return new lR(uu)
    }

    function YR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Eu.M)();
      uu = (0, Qu.D)(uu);
      const Ru = (0, Eu.z)(uu, pR);
      return Ru.isInitialized() ? Ru.getImmediate() : oR(uu)
    }

    function oR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const yu = (0, Eu.z)(uu, pR);
      if (yu.isInitialized()) {
        const uu = yu.getImmediate();
        if ((0, Qu.r)(Ru, yu.getOptions())) return uu;
        throw HR.create("already-initialized")
      }
      return yu.initialize({
        options: Ru
      })
    }
    async function qR() {
      if ((0, Qu.J)()) return !1;
      if (!(0, Qu.i)()) return !1;
      if (!(0, Qu.S)()) return !1;
      try {
        return await (0, Qu.db)()
      } catch (uu) {
        return !1
      }
    }

    function OR(uu, Ru, yu) {
      uu = (0, Qu.D)(uu), async function(uu, Ru, yu, Eu) {
        if (Eu && Eu.global) return uu("set", {
          screen_name: yu
        }), Promise.resolve();
        uu("config", await Ru, {
          update: !0,
          screen_name: yu
        })
      }(FR, gR[uu.app.options.appId], Ru, yu).catch((uu => WR.error(uu)))
    }
    async function vR(uu) {
      return uu = (0, Qu.D)(uu), async function(uu, Ru) {
        const yu = await Ru;
        return new Promise(((Ru, Eu) => {
          uu("get", yu, "client_id", (uu => {
            uu || Eu(HR.create("no-client-id")), Ru(uu)
          }))
        }))
      }(FR, gR[uu.app.options.appId])
    }

    function aR(uu, Ru, yu) {
      uu = (0, Qu.D)(uu), async function(uu, Ru, yu, Eu) {
        if (Eu && Eu.global) return uu("set", {
          user_id: yu
        }), Promise.resolve();
        uu("config", await Ru, {
          update: !0,
          user_id: yu
        })
      }(FR, gR[uu.app.options.appId], Ru, yu).catch((uu => WR.error(uu)))
    }

    function fR(uu, Ru, yu) {
      uu = (0, Qu.D)(uu), async function(uu, Ru, yu, Eu) {
        if (Eu && Eu.global) {
          const Ru = {};
          for (const uu of Object.keys(yu)) Ru[`user_properties.${uu}`] = yu[uu];
          return uu("set", Ru), Promise.resolve()
        }
        uu("config", await Ru, {
          update: !0,
          user_properties: yu
        })
      }(FR, gR[uu.app.options.appId], Ru, yu).catch((uu => WR.error(uu)))
    }

    function uy(uu, Ru) {
      uu = (0, Qu.D)(uu), async function(uu, Ru) {
        const yu = await uu;
        window[`ga-disable-${yu}`] = !Ru
      }(gR[uu.app.options.appId], Ru).catch((uu => WR.error(uu)))
    }

    function Ry(uu) {
      FR ? FR("set", uu) : sR(uu)
    }

    function yy(uu, Ru, yu, Eu) {
      uu = (0, Qu.D)(uu), async function(uu, Ru, yu, Eu, Ku) {
        if (Ku && Ku.global) uu("event", yu, Eu);
        else {
          const Ku = await Ru;
          uu("event", yu, Object.assign(Object.assign({}, Eu), {
            send_to: Ku
          }))
        }
      }(FR, gR[uu.app.options.appId], Ru, yu, Eu).catch((uu => WR.error(uu)))
    }

    function Ey(uu) {
      FR ? FR("consent", "update", uu) : nR(uu)
    }
    const Ky = "@firebase/analytics",
      Qy = "0.10.0";
    (0, Eu.B)(new mu.e(pR, ((uu, Ru) => {
      let {
        options: yu
      } = Ru;
      return iR(uu.getProvider("app").getImmediate(), uu.getProvider("installations-internal").getImmediate(), yu)
    }), "PUBLIC")), (0, Eu.B)(new mu.e("analytics-internal", (function(uu) {
      try {
        const Ru = uu.getProvider(pR).getImmediate();
        return {
          logEvent: (uu, yu, Eu) => yy(Ru, uu, yu, Eu)
        }
      } catch (Ru) {
        throw HR.create("interop-component-reg-failed", {
          reason: Ru
        })
      }
    }), "PRIVATE")), (0, Eu.T)(Ky, Qy), (0, Eu.T)(Ky, Qy, "esm2017")
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);