/*! For license information please see dz8ef.271.0505717c.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40784: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      getAnalytics: () => TE,
      getGoogleAnalyticsClientId: () => yE,
      initializeAnalytics: () => HE,
      isSupported: () => AE,
      logEvent: () => jj,
      setAnalyticsCollectionEnabled: () => uj,
      setConsent: () => sj,
      setCurrentScreen: () => nE,
      setDefaultEventParameters: () => Ej,
      setUserId: () => zE,
      setUserProperties: () => RE,
      settings: () => tE
    });
    var su = ju(40764),
      Uu = ju(40776),
      Zu = ju(40771),
      Xu = ju(40766);
    let lu, qu;
    const fu = new WeakMap,
      Cu = new WeakMap,
      bu = new WeakMap,
      cu = new WeakMap,
      Nu = new WeakMap;
    let Ou = {
      get(uu, Eu, ju) {
        if (uu instanceof IDBTransaction) {
          if ("done" === Eu) return Cu.get(uu);
          if ("objectStoreNames" === Eu) return uu.objectStoreNames || bu.get(uu);
          if ("store" === Eu) return ju.objectStoreNames[1] ? void 0 : ju.objectStore(ju.objectStoreNames[0])
        }
        return Du(uu[Eu])
      },
      set: (uu, Eu, ju) => (uu[Eu] = ju, !0),
      has: (uu, Eu) => uu instanceof IDBTransaction && ("done" === Eu || "store" === Eu) || Eu in uu
    };

    function Yu(uu) {
      return uu !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (qu || (qu = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(uu) ? function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return uu.apply(gu(this), ju), Du(fu.get(this))
      } : function() {
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return Du(uu.apply(gu(this), ju))
      } : function(Eu) {
        for (var ju = arguments.length, su = new Array(ju > 1 ? ju - 1 : 0), Uu = 1; Uu < ju; Uu++) su[Uu - 1] = arguments[Uu];
        const Zu = uu.call(gu(this), Eu, ...su);
        return bu.set(Zu, Eu.sort ? Eu.sort() : [Eu]), Du(Zu)
      }
    }

    function hu(uu) {
      return "function" === typeof uu ? Yu(uu) : (uu instanceof IDBTransaction && function(uu) {
        if (Cu.has(uu)) return;
        const Eu = new Promise(((Eu, ju) => {
          const su = () => {
              uu.removeEventListener("complete", Uu), uu.removeEventListener("error", Zu), uu.removeEventListener("abort", Zu)
            },
            Uu = () => {
              Eu(), su()
            },
            Zu = () => {
              ju(uu.error || new DOMException("AbortError", "AbortError")), su()
            };
          uu.addEventListener("complete", Uu), uu.addEventListener("error", Zu), uu.addEventListener("abort", Zu)
        }));
        Cu.set(uu, Eu)
      }(uu), Eu = uu, (lu || (lu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((uu => Eu instanceof uu)) ? new Proxy(uu, Ou) : uu);
      var Eu
    }

    function Du(uu) {
      if (uu instanceof IDBRequest) return function(uu) {
        const Eu = new Promise(((Eu, ju) => {
          const su = () => {
              uu.removeEventListener("success", Uu), uu.removeEventListener("error", Zu)
            },
            Uu = () => {
              Eu(Du(uu.result)), su()
            },
            Zu = () => {
              ju(uu.error), su()
            };
          uu.addEventListener("success", Uu), uu.addEventListener("error", Zu)
        }));
        return Eu.then((Eu => {
          Eu instanceof IDBCursor && fu.set(Eu, uu)
        })).catch((() => {})), Nu.set(Eu, uu), Eu
      }(uu);
      if (cu.has(uu)) return cu.get(uu);
      const Eu = hu(uu);
      return Eu !== uu && (cu.set(uu, Eu), Nu.set(Eu, uu)), Eu
    }
    const gu = uu => Nu.get(uu);
    const Mu = ["get", "getKey", "getAll", "getAllKeys", "count"],
      eu = ["put", "add", "delete", "clear"],
      Gu = new Map;

    function pu(uu, Eu) {
      if (!(uu instanceof IDBDatabase) || Eu in uu || "string" !== typeof Eu) return;
      if (Gu.get(Eu)) return Gu.get(Eu);
      const ju = Eu.replace(/FromIndex$/, ""),
        su = Eu !== ju,
        Uu = eu.includes(ju);
      if (!(ju in (su ? IDBIndex : IDBObjectStore).prototype) || !Uu && !Mu.includes(ju)) return;
      const Zu = async function(uu) {
        const Eu = this.transaction(uu, Uu ? "readwrite" : "readonly");
        let Zu = Eu.store;
        for (var Xu = arguments.length, lu = new Array(Xu > 1 ? Xu - 1 : 0), qu = 1; qu < Xu; qu++) lu[qu - 1] = arguments[qu];
        return su && (Zu = Zu.index(lu.shift())), (await Promise.all([Zu[ju](...lu), Uu && Eu.done]))[0]
      };
      return Gu.set(Eu, Zu), Zu
    }
    Ou = (uu => ({
      ...uu,
      get: (Eu, ju, su) => pu(Eu, ju) || uu.get(Eu, ju, su),
      has: (Eu, ju) => !!pu(Eu, ju) || uu.has(Eu, ju)
    }))(Ou);
    const wu = "@firebase/installations",
      Ju = "0.6.4",
      du = 1e4,
      au = `w:${Ju}`,
      Pu = "FIS_v2",
      ou = 36e5,
      ku = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      mu = new Zu.h("installations", "Installations", ku);

    function vu(uu) {
      return uu instanceof Zu.k && uu.code.includes("request-failed")
    }

    function Ku(uu) {
      let {
        projectId: Eu
      } = uu;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Eu}/installations`
    }

    function Vu(uu) {
      return {
        token: uu.token,
        requestStatus: 2,
        expiresIn: (Eu = uu.expiresIn, Number(Eu.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Eu
    }
    async function ru(uu, Eu) {
      const ju = (await Eu.json()).error;
      return mu.create("request-failed", {
        requestName: uu,
        serverCode: ju.code,
        serverMessage: ju.message,
        serverStatus: ju.status
      })
    }

    function Qu(uu) {
      let {
        apiKey: Eu
      } = uu;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Eu
      })
    }

    function iu(uu, Eu) {
      let {
        refreshToken: ju
      } = Eu;
      const su = Qu(uu);
      return su.append("Authorization", function(uu) {
        return `${Pu} ${uu}`
      }(ju)), su
    }
    async function Wu(uu) {
      const Eu = await uu();
      return Eu.status >= 500 && Eu.status < 600 ? uu() : Eu
    }

    function Su(uu) {
      return new Promise((Eu => {
        setTimeout(Eu, uu)
      }))
    }
    const Iu = /^[cdef][\w-]{21}$/;

    function Fu() {
      try {
        const uu = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(uu), uu[0] = 112 + uu[0] % 16;
        const Eu = function(uu) {
          const Eu = (ju = uu, btoa(String.fromCharCode(...ju)).replace(/\+/g, "-").replace(/\//g, "_"));
          var ju;
          return Eu.substr(0, 22)
        }(uu);
        return Iu.test(Eu) ? Eu : ""
      } catch (uu) {
        return ""
      }
    }

    function Bu(uu) {
      return `${uu.appName}!${uu.appId}`
    }
    const Lu = new Map;

    function tu(uu, Eu) {
      const ju = Bu(uu);
      xu(ju, Eu),
        function(uu, Eu) {
          const ju = Hu();
          ju && ju.postMessage({
            key: uu,
            fid: Eu
          });
          Au()
        }(ju, Eu)
    }

    function xu(uu, Eu) {
      const ju = Lu.get(uu);
      if (ju)
        for (const su of ju) su(Eu)
    }
    let Tu = null;

    function Hu() {
      return !Tu && "BroadcastChannel" in self && (Tu = new BroadcastChannel("[Firebase] FID Change"), Tu.onmessage = uu => {
        xu(uu.data.key, uu.data.fid)
      }), Tu
    }

    function Au() {
      0 === Lu.size && Tu && (Tu.close(), Tu = null)
    }
    const nu = "firebase-installations-store";
    let yu = null;

    function zu() {
      return yu || (yu = function(uu, Eu) {
        let {
          blocked: ju,
          upgrade: su,
          blocking: Uu,
          terminated: Zu
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Xu = indexedDB.open(uu, Eu),
          lu = Du(Xu);
        return su && Xu.addEventListener("upgradeneeded", (uu => {
          su(Du(Xu.result), uu.oldVersion, uu.newVersion, Du(Xu.transaction))
        })), ju && Xu.addEventListener("blocked", (() => ju())), lu.then((uu => {
          Zu && uu.addEventListener("close", (() => Zu())), Uu && uu.addEventListener("versionchange", (() => Uu()))
        })).catch((() => {})), lu
      }("firebase-installations-database", 1, {
        upgrade: (uu, Eu) => {
          if (0 === Eu) uu.createObjectStore(nu)
        }
      })), yu
    }
    async function Ru(uu, Eu) {
      const ju = Bu(uu),
        su = (await zu()).transaction(nu, "readwrite"),
        Uu = su.objectStore(nu),
        Zu = await Uu.get(ju);
      return await Uu.put(Eu, ju), await su.done, Zu && Zu.fid === Eu.fid || tu(uu, Eu.fid), Eu
    }
    async function uE(uu) {
      const Eu = Bu(uu),
        ju = (await zu()).transaction(nu, "readwrite");
      await ju.objectStore(nu).delete(Eu), await ju.done
    }
    async function EE(uu, Eu) {
      const ju = Bu(uu),
        su = (await zu()).transaction(nu, "readwrite"),
        Uu = su.objectStore(nu),
        Zu = await Uu.get(ju),
        Xu = Eu(Zu);
      return void 0 === Xu ? await Uu.delete(ju) : await Uu.put(Xu, ju), await su.done, !Xu || Zu && Zu.fid === Xu.fid || tu(uu, Xu.fid), Xu
    }
    async function jE(uu) {
      let Eu;
      const ju = await EE(uu.appConfig, (ju => {
        const su = function(uu) {
            const Eu = uu || {
              fid: Fu(),
              registrationStatus: 0
            };
            return ZE(Eu)
          }(ju),
          Uu = function(uu, Eu) {
            if (0 === Eu.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Eu,
                  registrationPromise: Promise.reject(mu.create("app-offline"))
                }
              }
              const ju = {
                  fid: Eu.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                su = async function(uu, Eu) {
                  try {
                    const ju = await async function(uu, Eu) {
                      let {
                        appConfig: ju,
                        heartbeatServiceProvider: su
                      } = uu, {
                        fid: Uu
                      } = Eu;
                      const Zu = Ku(ju),
                        Xu = Qu(ju),
                        lu = su.getImmediate({
                          optional: !0
                        });
                      if (lu) {
                        const uu = await lu.getHeartbeatsHeader();
                        uu && Xu.append("x-firebase-client", uu)
                      }
                      const qu = {
                          fid: Uu,
                          authVersion: Pu,
                          appId: ju.appId,
                          sdkVersion: au
                        },
                        fu = {
                          method: "POST",
                          headers: Xu,
                          body: JSON.stringify(qu)
                        },
                        Cu = await Wu((() => fetch(Zu, fu)));
                      if (Cu.ok) {
                        const uu = await Cu.json();
                        return {
                          fid: uu.fid || Uu,
                          registrationStatus: 2,
                          refreshToken: uu.refreshToken,
                          authToken: Vu(uu.authToken)
                        }
                      }
                      throw await ru("Create Installation", Cu)
                    }(uu, Eu);
                    return Ru(uu.appConfig, ju)
                  } catch (ju) {
                    throw vu(ju) && 409 === ju.customData.serverCode ? await uE(uu.appConfig) : await Ru(uu.appConfig, {
                      fid: Eu.fid,
                      registrationStatus: 0
                    }), ju
                  }
                }(uu, ju);
              return {
                installationEntry: ju,
                registrationPromise: su
              }
            }
            return 1 === Eu.registrationStatus ? {
              installationEntry: Eu,
              registrationPromise: sE(uu)
            } : {
              installationEntry: Eu
            }
          }(uu, su);
        return Eu = Uu.registrationPromise, Uu.installationEntry
      }));
      return "" === ju.fid ? {
        installationEntry: await Eu
      } : {
        installationEntry: ju,
        registrationPromise: Eu
      }
    }
    async function sE(uu) {
      let Eu = await UE(uu.appConfig);
      for (; 1 === Eu.registrationStatus;) await Su(100), Eu = await UE(uu.appConfig);
      if (0 === Eu.registrationStatus) {
        const {
          installationEntry: Eu,
          registrationPromise: ju
        } = await jE(uu);
        return ju || Eu
      }
      return Eu
    }

    function UE(uu) {
      return EE(uu, (uu => {
        if (!uu) throw mu.create("installation-not-found");
        return ZE(uu)
      }))
    }

    function ZE(uu) {
      return 1 === (Eu = uu).registrationStatus && Eu.registrationTime + du < Date.now() ? {
        fid: uu.fid,
        registrationStatus: 0
      } : uu;
      var Eu
    }
    async function XE(uu, Eu) {
      let {
        appConfig: ju,
        heartbeatServiceProvider: su
      } = uu;
      const Uu = function(uu, Eu) {
          let {
            fid: ju
          } = Eu;
          return `${Ku(uu)}/${ju}/authTokens:generate`
        }(ju, Eu),
        Zu = iu(ju, Eu),
        Xu = su.getImmediate({
          optional: !0
        });
      if (Xu) {
        const uu = await Xu.getHeartbeatsHeader();
        uu && Zu.append("x-firebase-client", uu)
      }
      const lu = {
          installation: {
            sdkVersion: au,
            appId: ju.appId
          }
        },
        qu = {
          method: "POST",
          headers: Zu,
          body: JSON.stringify(lu)
        },
        fu = await Wu((() => fetch(Uu, qu)));
      if (fu.ok) {
        return Vu(await fu.json())
      }
      throw await ru("Generate Auth Token", fu)
    }
    async function lE(uu) {
      let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const su = await EE(uu.appConfig, (su => {
        if (!fE(su)) throw mu.create("not-registered");
        const Uu = su.authToken;
        if (!ju && function(uu) {
            return 2 === uu.requestStatus && ! function(uu) {
              const Eu = Date.now();
              return Eu < uu.creationTime || uu.creationTime + uu.expiresIn < Eu + ou
            }(uu)
          }(Uu)) return su;
        if (1 === Uu.requestStatus) return Eu = async function(uu, Eu) {
          let ju = await qE(uu.appConfig);
          for (; 1 === ju.authToken.requestStatus;) await Su(100), ju = await qE(uu.appConfig);
          const su = ju.authToken;
          return 0 === su.requestStatus ? lE(uu, Eu) : su
        }(uu, ju), su;
        {
          if (!navigator.onLine) throw mu.create("app-offline");
          const ju = function(uu) {
            const Eu = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, uu), {
              authToken: Eu
            })
          }(su);
          return Eu = async function(uu, Eu) {
            try {
              const ju = await XE(uu, Eu),
                su = Object.assign(Object.assign({}, Eu), {
                  authToken: ju
                });
              return await Ru(uu.appConfig, su), ju
            } catch (ju) {
              if (!vu(ju) || 401 !== ju.customData.serverCode && 404 !== ju.customData.serverCode) {
                const ju = Object.assign(Object.assign({}, Eu), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await Ru(uu.appConfig, ju)
              } else await uE(uu.appConfig);
              throw ju
            }
          }(uu, ju), ju
        }
      }));
      return Eu ? await Eu : su.authToken
    }

    function qE(uu) {
      return EE(uu, (uu => {
        if (!fE(uu)) throw mu.create("not-registered");
        const Eu = uu.authToken;
        return 1 === (ju = Eu).requestStatus && ju.requestTime + du < Date.now() ? Object.assign(Object.assign({}, uu), {
          authToken: {
            requestStatus: 0
          }
        }) : uu;
        var ju
      }))
    }

    function fE(uu) {
      return void 0 !== uu && 2 === uu.registrationStatus
    }
    async function CE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ju = uu;
      await async function(uu) {
        const {
          registrationPromise: Eu
        } = await jE(uu);
        Eu && await Eu
      }(ju);
      return (await lE(ju, Eu)).token
    }

    function bE(uu) {
      return mu.create("missing-app-config-values", {
        valueName: uu
      })
    }
    const cE = "installations",
      NE = uu => {
        const Eu = uu.getProvider("app").getImmediate(),
          ju = function(uu) {
            if (!uu || !uu.options) throw bE("App Configuration");
            if (!uu.name) throw bE("App Name");
            const Eu = ["projectId", "apiKey", "appId"];
            for (const ju of Eu)
              if (!uu.options[ju]) throw bE(ju);
            return {
              appName: uu.name,
              projectId: uu.options.projectId,
              apiKey: uu.options.apiKey,
              appId: uu.options.appId
            }
          }(Eu);
        return {
          app: Eu,
          appConfig: ju,
          heartbeatServiceProvider: (0, su.w)(Eu, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      OE = uu => {
        const Eu = uu.getProvider("app").getImmediate(),
          ju = (0, su.w)(Eu, cE).getImmediate();
        return {
          getId: () => async function(uu) {
            const Eu = uu,
              {
                installationEntry: ju,
                registrationPromise: su
              } = await jE(Eu);
            return su ? su.catch(console.error) : lE(Eu).catch(console.error), ju.fid
          }(ju),
          getToken: uu => CE(ju, uu)
        }
      };
    (0, su.x)(new Xu.d(cE, NE, "PUBLIC")), (0, su.x)(new Xu.d("installations-internal", OE, "PRIVATE")), (0, su.T)(wu, Ju), (0, su.T)(wu, Ju, "esm2017");
    const YE = "analytics",
      hE = "https://www.googletagmanager.com/gtag/js",
      DE = new Uu.f("@firebase/analytics"),
      gE = {
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
      ME = new Zu.h("analytics", "Analytics", gE);

    function eE(uu) {
      if (!uu.startsWith(hE)) {
        const Eu = ME.create("invalid-gtag-resource", {
          gtagURL: uu
        });
        return DE.warn(Eu.message), ""
      }
      return uu
    }

    function GE(uu) {
      return Promise.all(uu.map((uu => uu.catch((uu => uu)))))
    }

    function pE(uu, Eu) {
      const ju = function(uu, Eu) {
          let ju;
          return window.trustedTypes && (ju = window.trustedTypes.createPolicy(uu, Eu)), ju
        }("firebase-js-sdk-policy", {
          createScriptURL: eE
        }),
        su = document.createElement("script"),
        Uu = `${hE}?l=${uu}&id=${Eu}`;
      su.src = ju ? null === ju || void 0 === ju ? void 0 : ju.createScriptURL(Uu) : Uu, su.async = !0, document.head.appendChild(su)
    }

    function wE(uu, Eu, ju, su) {
      return async function(Uu) {
        try {
          for (var Zu = arguments.length, Xu = new Array(Zu > 1 ? Zu - 1 : 0), lu = 1; lu < Zu; lu++) Xu[lu - 1] = arguments[lu];
          if ("event" === Uu) {
            const [su, Uu] = Xu;
            await async function(uu, Eu, ju, su, Uu) {
              try {
                let Zu = [];
                if (Uu && Uu.send_to) {
                  let uu = Uu.send_to;
                  Array.isArray(uu) || (uu = [uu]);
                  const su = await GE(ju);
                  for (const ju of uu) {
                    const uu = su.find((uu => uu.measurementId === ju)),
                      Uu = uu && Eu[uu.appId];
                    if (!Uu) {
                      Zu = [];
                      break
                    }
                    Zu.push(Uu)
                  }
                }
                0 === Zu.length && (Zu = Object.values(Eu)), await Promise.all(Zu), uu("event", su, Uu || {})
              } catch (Zu) {
                DE.error(Zu)
              }
            }(uu, Eu, ju, su, Uu)
          } else if ("config" === Uu) {
            const [Uu, Zu] = Xu;
            await async function(uu, Eu, ju, su, Uu, Zu) {
              const Xu = su[Uu];
              try {
                if (Xu) await Eu[Xu];
                else {
                  const uu = (await GE(ju)).find((uu => uu.measurementId === Uu));
                  uu && await Eu[uu.appId]
                }
              } catch (lu) {
                DE.error(lu)
              }
              uu("config", Uu, Zu)
            }(uu, Eu, ju, su, Uu, Zu)
          } else if ("consent" === Uu) {
            const [Eu] = Xu;
            uu("consent", "update", Eu)
          } else if ("get" === Uu) {
            const [Eu, ju, su] = Xu;
            uu("get", Eu, ju, su)
          } else if ("set" === Uu) {
            const [Eu] = Xu;
            uu("set", Eu)
          } else uu(Uu, ...Xu)
        } catch (qu) {
          DE.error(qu)
        }
      }
    }
    const JE = new class {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = uu, this.intervalMillis = Eu
      }
      getThrottleMetadata(uu) {
        return this.throttleMetadata[uu]
      }
      setThrottleMetadata(uu, Eu) {
        this.throttleMetadata[uu] = Eu
      }
      deleteThrottleMetadata(uu) {
        delete this.throttleMetadata[uu]
      }
    };

    function dE(uu) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": uu
      })
    }
    async function aE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JE,
        ju = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: su,
        apiKey: Uu,
        measurementId: Zu
      } = uu.options;
      if (!su) throw ME.create("no-app-id");
      if (!Uu) {
        if (Zu) return {
          measurementId: Zu,
          appId: su
        };
        throw ME.create("no-api-key")
      }
      const Xu = Eu.getThrottleMetadata(su) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        lu = new oE;
      return setTimeout((async () => {
        lu.abort()
      }), void 0 !== ju ? ju : 6e4), PE({
        appId: su,
        apiKey: Uu,
        measurementId: Zu
      }, Xu, lu, Eu)
    }
    async function PE(uu, Eu, ju) {
      let {
        throttleEndTimeMillis: su,
        backoffCount: Uu
      } = Eu, Xu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JE;
      var lu;
      const {
        appId: qu,
        measurementId: fu
      } = uu;
      try {
        await
        function(uu, Eu) {
          return new Promise(((ju, su) => {
            const Uu = Math.max(Eu - Date.now(), 0),
              Zu = setTimeout(ju, Uu);
            uu.addEventListener((() => {
              clearTimeout(Zu), su(ME.create("fetch-throttle", {
                throttleEndTimeMillis: Eu
              }))
            }))
          }))
        }(ju, su)
      } catch (Cu) {
        if (fu) return DE.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${fu} provided in the "measurementId" field in the local Firebase config. [${null===Cu||void 0===Cu?void 0:Cu.message}]`), {
          appId: qu,
          measurementId: fu
        };
        throw Cu
      }
      try {
        const Eu = await async function(uu) {
          var Eu;
          const {
            appId: ju,
            apiKey: su
          } = uu, Uu = {
            method: "GET",
            headers: dE(su)
          }, Zu = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ju), Xu = await fetch(Zu, Uu);
          if (200 !== Xu.status && 304 !== Xu.status) {
            let uu = "";
            try {
              const ju = await Xu.json();
              (null === (Eu = ju.error) || void 0 === Eu ? void 0 : Eu.message) && (uu = ju.error.message)
            } catch (lu) {}
            throw ME.create("config-fetch-failed", {
              httpStatus: Xu.status,
              responseMessage: uu
            })
          }
          return Xu.json()
        }(uu);
        return Xu.deleteThrottleMetadata(qu), Eu
      } catch (Cu) {
        const Eu = Cu;
        if (! function(uu) {
            if (!(uu instanceof Zu.k) || !uu.customData) return !1;
            const Eu = Number(uu.customData.httpStatus);
            return 429 === Eu || 500 === Eu || 503 === Eu || 504 === Eu
          }(Eu)) {
          if (Xu.deleteThrottleMetadata(qu), fu) return DE.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${fu} provided in the "measurementId" field in the local Firebase config. [${null===Eu||void 0===Eu?void 0:Eu.message}]`), {
            appId: qu,
            measurementId: fu
          };
          throw Cu
        }
        const su = 503 === Number(null === (lu = null === Eu || void 0 === Eu ? void 0 : Eu.customData) || void 0 === lu ? void 0 : lu.httpStatus) ? (0, Zu.w)(Uu, Xu.intervalMillis, 30) : (0, Zu.w)(Uu, Xu.intervalMillis),
          bu = {
            throttleEndTimeMillis: Date.now() + su,
            backoffCount: Uu + 1
          };
        return Xu.setThrottleMetadata(qu, bu), DE.debug(`Calling attemptFetch again in ${su} millis`), PE(uu, bu, ju, Xu)
      }
    }
    class oE {
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
    let kE, mE;

    function vE(uu) {
      mE = uu
    }

    function KE(uu) {
      kE = uu
    }
    async function VE(uu, Eu, ju, su, Uu, Xu, lu) {
      var qu;
      const fu = aE(uu);
      fu.then((Eu => {
        ju[Eu.measurementId] = Eu.appId, uu.options.measurementId && Eu.measurementId !== uu.options.measurementId && DE.warn(`The measurement ID in the local Firebase config (${uu.options.measurementId}) does not match the measurement ID fetched from the server (${Eu.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((uu => DE.error(uu))), Eu.push(fu);
      const Cu = async function() {
        if (!(0, Zu.bb)()) return DE.warn(ME.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Zu.mb)()
        } catch (uu) {
          return DE.warn(ME.create("indexeddb-unavailable", {
            errorInfo: null === uu || void 0 === uu ? void 0 : uu.toString()
          }).message), !1
        }
        return !0
      }().then((uu => uu ? su.getId() : void 0)), [bu, cu] = await Promise.all([fu, Cu]);
      (function(uu) {
        const Eu = window.document.getElementsByTagName("script");
        for (const ju of Object.values(Eu))
          if (ju.src && ju.src.includes(hE) && ju.src.includes(uu)) return ju;
        return null
      })(Xu) || pE(Xu, bu.measurementId), mE && (Uu("consent", "default", mE), vE(void 0)), Uu("js", new Date);
      const Nu = null !== (qu = null === lu || void 0 === lu ? void 0 : lu.config) && void 0 !== qu ? qu : {};
      return Nu.origin = "firebase", Nu.update = !0, null != cu && (Nu.firebase_id = cu), Uu("config", bu.measurementId, Nu), kE && (Uu("set", kE), KE(void 0)), bu.measurementId
    }
    class rE {
      constructor(uu) {
        this.app = uu
      }
      _delete() {
        return delete QE[this.app.options.appId], Promise.resolve()
      }
    }
    let QE = {},
      iE = [];
    const WE = {};
    let SE, IE, FE = "dataLayer",
      BE = "gtag",
      LE = !1;

    function tE(uu) {
      if (LE) throw ME.create("already-initialized");
      uu.dataLayerName && (FE = uu.dataLayerName), uu.gtagName && (BE = uu.gtagName)
    }

    function xE(uu, Eu, ju) {
      ! function() {
        const uu = [];
        if ((0, Zu.T)() && uu.push("This is a browser extension environment."), (0, Zu.l)() || uu.push("Cookies are not available."), uu.length > 0) {
          const Eu = uu.map(((uu, Eu) => `(${Eu+1}) ${uu}`)).join(" "),
            ju = ME.create("invalid-analytics-context", {
              errorInfo: Eu
            });
          DE.warn(ju.message)
        }
      }();
      const su = uu.options.appId;
      if (!su) throw ME.create("no-app-id");
      if (!uu.options.apiKey) {
        if (!uu.options.measurementId) throw ME.create("no-api-key");
        DE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${uu.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != QE[su]) throw ME.create("already-exists", {
        id: su
      });
      if (!LE) {
        ! function(uu) {
          let Eu = [];
          Array.isArray(window[uu]) ? Eu = window[uu] : window[uu] = Eu
        }(FE);
        const {
          wrappedGtag: uu,
          gtagCore: Eu
        } = function(uu, Eu, ju, su, Uu) {
          let Zu = function() {
            for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
            window[su].push(arguments)
          };
          return window[Uu] && "function" === typeof window[Uu] && (Zu = window[Uu]), window[Uu] = wE(Zu, uu, Eu, ju), {
            gtagCore: Zu,
            wrappedGtag: window[Uu]
          }
        }(QE, iE, WE, FE, BE);
        IE = uu, SE = Eu, LE = !0
      }
      QE[su] = VE(uu, iE, WE, Eu, SE, FE, ju);
      return new rE(uu)
    }

    function TE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, su.J)();
      uu = (0, Zu.Q)(uu);
      const Eu = (0, su.w)(uu, YE);
      return Eu.isInitialized() ? Eu.getImmediate() : HE(uu)
    }

    function HE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ju = (0, su.w)(uu, YE);
      if (ju.isInitialized()) {
        const uu = ju.getImmediate();
        if ((0, Zu.B)(Eu, ju.getOptions())) return uu;
        throw ME.create("already-initialized")
      }
      return ju.initialize({
        options: Eu
      })
    }
    async function AE() {
      if ((0, Zu.T)()) return !1;
      if (!(0, Zu.l)()) return !1;
      if (!(0, Zu.bb)()) return !1;
      try {
        return await (0, Zu.mb)()
      } catch (uu) {
        return !1
      }
    }

    function nE(uu, Eu, ju) {
      uu = (0, Zu.Q)(uu), async function(uu, Eu, ju, su) {
        if (su && su.global) return uu("set", {
          screen_name: ju
        }), Promise.resolve();
        uu("config", await Eu, {
          update: !0,
          screen_name: ju
        })
      }(IE, QE[uu.app.options.appId], Eu, ju).catch((uu => DE.error(uu)))
    }
    async function yE(uu) {
      return uu = (0, Zu.Q)(uu), async function(uu, Eu) {
        const ju = await Eu;
        return new Promise(((Eu, su) => {
          uu("get", ju, "client_id", (uu => {
            uu || su(ME.create("no-client-id")), Eu(uu)
          }))
        }))
      }(IE, QE[uu.app.options.appId])
    }

    function zE(uu, Eu, ju) {
      uu = (0, Zu.Q)(uu), async function(uu, Eu, ju, su) {
        if (su && su.global) return uu("set", {
          user_id: ju
        }), Promise.resolve();
        uu("config", await Eu, {
          update: !0,
          user_id: ju
        })
      }(IE, QE[uu.app.options.appId], Eu, ju).catch((uu => DE.error(uu)))
    }

    function RE(uu, Eu, ju) {
      uu = (0, Zu.Q)(uu), async function(uu, Eu, ju, su) {
        if (su && su.global) {
          const Eu = {};
          for (const uu of Object.keys(ju)) Eu[`user_properties.${uu}`] = ju[uu];
          return uu("set", Eu), Promise.resolve()
        }
        uu("config", await Eu, {
          update: !0,
          user_properties: ju
        })
      }(IE, QE[uu.app.options.appId], Eu, ju).catch((uu => DE.error(uu)))
    }

    function uj(uu, Eu) {
      uu = (0, Zu.Q)(uu), async function(uu, Eu) {
        const ju = await uu;
        window[`ga-disable-${ju}`] = !Eu
      }(QE[uu.app.options.appId], Eu).catch((uu => DE.error(uu)))
    }

    function Ej(uu) {
      IE ? IE("set", uu) : KE(uu)
    }

    function jj(uu, Eu, ju, su) {
      uu = (0, Zu.Q)(uu), async function(uu, Eu, ju, su, Uu) {
        if (Uu && Uu.global) uu("event", ju, su);
        else {
          const Uu = await Eu;
          uu("event", ju, Object.assign(Object.assign({}, su), {
            send_to: Uu
          }))
        }
      }(IE, QE[uu.app.options.appId], Eu, ju, su).catch((uu => DE.error(uu)))
    }

    function sj(uu) {
      IE ? IE("consent", "update", uu) : vE(uu)
    }
    const Uj = "@firebase/analytics",
      Zj = "0.10.0";
    (0, su.x)(new Xu.d(YE, ((uu, Eu) => {
      let {
        options: ju
      } = Eu;
      return xE(uu.getProvider("app").getImmediate(), uu.getProvider("installations-internal").getImmediate(), ju)
    }), "PUBLIC")), (0, su.x)(new Xu.d("analytics-internal", (function(uu) {
      try {
        const Eu = uu.getProvider(YE).getImmediate();
        return {
          logEvent: (uu, ju, su) => jj(Eu, uu, ju, su)
        }
      } catch (Eu) {
        throw ME.create("interop-component-reg-failed", {
          reason: Eu
        })
      }
    }), "PRIVATE")), (0, su.T)(Uj, Zj), (0, su.T)(Uj, Zj, "esm2017")
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);