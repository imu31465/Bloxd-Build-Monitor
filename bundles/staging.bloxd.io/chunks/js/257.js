/*! For license information please see 6ndy1f.257.ce36cc02.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39936: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      getAnalytics: () => xF,
      getGoogleAnalyticsClientId: () => IF,
      initializeAnalytics: () => jF,
      isSupported: () => lF,
      logEvent: () => RB,
      setAnalyticsCollectionEnabled: () => FB,
      setConsent: () => tB,
      setCurrentScreen: () => nF,
      setDefaultEventParameters: () => BB,
      setUserId: () => QF,
      setUserProperties: () => kB,
      settings: () => pF
    });
    var Rk = Bk(39919),
      tk = Bk(39929),
      ak = Bk(39927),
      Xk = Bk(39925);
    let bk, wk;
    const dk = new WeakMap,
      sk = new WeakMap,
      Vk = new WeakMap,
      Jk = new WeakMap,
      Ak = new WeakMap;
    let ek = {
      get(kk, Fk, Bk) {
        if (kk instanceof IDBTransaction) {
          if ("done" === Fk) return sk.get(kk);
          if ("objectStoreNames" === Fk) return kk.objectStoreNames || Vk.get(kk);
          if ("store" === Fk) return Bk.objectStoreNames[1] ? void 0 : Bk.objectStore(Bk.objectStoreNames[0])
        }
        return mk(kk[Fk])
      },
      set: (kk, Fk, Bk) => (kk[Fk] = Bk, !0),
      has: (kk, Fk) => kk instanceof IDBTransaction && ("done" === Fk || "store" === Fk) || Fk in kk
    };

    function yk(kk) {
      return kk !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (wk || (wk = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(kk) ? function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return kk.apply(Wk(this), Bk), mk(dk.get(this))
      } : function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return mk(kk.apply(Wk(this), Bk))
      } : function(Fk) {
        for (var Bk = arguments.length, Rk = new Array(Bk > 1 ? Bk - 1 : 0), tk = 1; tk < Bk; tk++) Rk[tk - 1] = arguments[tk];
        const ak = kk.call(Wk(this), Fk, ...Rk);
        return Vk.set(ak, Fk.sort ? Fk.sort() : [Fk]), mk(ak)
      }
    }

    function fk(kk) {
      return "function" === typeof kk ? yk(kk) : (kk instanceof IDBTransaction && function(kk) {
        if (sk.has(kk)) return;
        const Fk = new Promise(((Fk, Bk) => {
          const Rk = () => {
              kk.removeEventListener("complete", tk), kk.removeEventListener("error", ak), kk.removeEventListener("abort", ak)
            },
            tk = () => {
              Fk(), Rk()
            },
            ak = () => {
              Bk(kk.error || new DOMException("AbortError", "AbortError")), Rk()
            };
          kk.addEventListener("complete", tk), kk.addEventListener("error", ak), kk.addEventListener("abort", ak)
        }));
        sk.set(kk, Fk)
      }(kk), Fk = kk, (bk || (bk = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((kk => Fk instanceof kk)) ? new Proxy(kk, ek) : kk);
      var Fk
    }

    function mk(kk) {
      if (kk instanceof IDBRequest) return function(kk) {
        const Fk = new Promise(((Fk, Bk) => {
          const Rk = () => {
              kk.removeEventListener("success", tk), kk.removeEventListener("error", ak)
            },
            tk = () => {
              Fk(mk(kk.result)), Rk()
            },
            ak = () => {
              Bk(kk.error), Rk()
            };
          kk.addEventListener("success", tk), kk.addEventListener("error", ak)
        }));
        return Fk.then((Fk => {
          Fk instanceof IDBCursor && dk.set(Fk, kk)
        })).catch((() => {})), Ak.set(Fk, kk), Fk
      }(kk);
      if (Jk.has(kk)) return Jk.get(kk);
      const Fk = fk(kk);
      return Fk !== kk && (Jk.set(kk, Fk), Ak.set(Fk, kk)), Fk
    }
    const Wk = kk => Ak.get(kk);
    const vk = ["get", "getKey", "getAll", "getAllKeys", "count"],
      ik = ["put", "add", "delete", "clear"],
      Yk = new Map;

    function Lk(kk, Fk) {
      if (!(kk instanceof IDBDatabase) || Fk in kk || "string" !== typeof Fk) return;
      if (Yk.get(Fk)) return Yk.get(Fk);
      const Bk = Fk.replace(/FromIndex$/, ""),
        Rk = Fk !== Bk,
        tk = ik.includes(Bk);
      if (!(Bk in (Rk ? IDBIndex : IDBObjectStore).prototype) || !tk && !vk.includes(Bk)) return;
      const ak = async function(kk) {
        const Fk = this.transaction(kk, tk ? "readwrite" : "readonly");
        let ak = Fk.store;
        for (var Xk = arguments.length, bk = new Array(Xk > 1 ? Xk - 1 : 0), wk = 1; wk < Xk; wk++) bk[wk - 1] = arguments[wk];
        return Rk && (ak = ak.index(bk.shift())), (await Promise.all([ak[Bk](...bk), tk && Fk.done]))[0]
      };
      return Yk.set(Fk, ak), ak
    }
    ek = (kk => ({
      ...kk,
      get: (Fk, Bk, Rk) => Lk(Fk, Bk) || kk.get(Fk, Bk, Rk),
      has: (Fk, Bk) => !!Lk(Fk, Bk) || kk.has(Fk, Bk)
    }))(ek);
    const Ok = "@firebase/installations",
      Ek = "0.6.4",
      Sk = 1e4,
      Nk = `w:${Ek}`,
      Hk = "FIS_v2",
      uk = 36e5,
      Mk = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      gk = new ak.h("installations", "Installations", Mk);

    function Uk(kk) {
      return kk instanceof ak.j && kk.code.includes("request-failed")
    }

    function ck(kk) {
      let {
        projectId: Fk
      } = kk;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Fk}/installations`
    }

    function Gk(kk) {
      return {
        token: kk.token,
        requestStatus: 2,
        expiresIn: (Fk = kk.expiresIn, Number(Fk.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Fk
    }
    async function Tk(kk, Fk) {
      const Bk = (await Fk.json()).error;
      return gk.create("request-failed", {
        requestName: kk,
        serverCode: Bk.code,
        serverMessage: Bk.message,
        serverStatus: Bk.status
      })
    }

    function rk(kk) {
      let {
        apiKey: Fk
      } = kk;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Fk
      })
    }

    function Dk(kk, Fk) {
      let {
        refreshToken: Bk
      } = Fk;
      const Rk = rk(kk);
      return Rk.append("Authorization", function(kk) {
        return `${Hk} ${kk}`
      }(Bk)), Rk
    }
    async function zk(kk) {
      const Fk = await kk();
      return Fk.status >= 500 && Fk.status < 600 ? kk() : Fk
    }

    function Pk(kk) {
      return new Promise((Fk => {
        setTimeout(Fk, kk)
      }))
    }
    const hk = /^[cdef][\w-]{21}$/;

    function qk() {
      try {
        const kk = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(kk), kk[0] = 112 + kk[0] % 16;
        const Fk = function(kk) {
          const Fk = (Bk = kk, btoa(String.fromCharCode(...Bk)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Bk;
          return Fk.substr(0, 22)
        }(kk);
        return hk.test(Fk) ? Fk : ""
      } catch (kk) {
        return ""
      }
    }

    function Ck(kk) {
      return `${kk.appName}!${kk.appId}`
    }
    const Zk = new Map;

    function pk(kk, Fk) {
      const Bk = Ck(kk);
      Kk(Bk, Fk),
        function(kk, Fk) {
          const Bk = jk();
          Bk && Bk.postMessage({
            key: kk,
            fid: Fk
          });
          lk()
        }(Bk, Fk)
    }

    function Kk(kk, Fk) {
      const Bk = Zk.get(kk);
      if (Bk)
        for (const Rk of Bk) Rk(Fk)
    }
    let xk = null;

    function jk() {
      return !xk && "BroadcastChannel" in self && (xk = new BroadcastChannel("[Firebase] FID Change"), xk.onmessage = kk => {
        Kk(kk.data.key, kk.data.fid)
      }), xk
    }

    function lk() {
      0 === Zk.size && xk && (xk.close(), xk = null)
    }
    const nk = "firebase-installations-store";
    let Ik = null;

    function Qk() {
      return Ik || (Ik = function(kk, Fk) {
        let {
          blocked: Bk,
          upgrade: Rk,
          blocking: tk,
          terminated: ak
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Xk = indexedDB.open(kk, Fk),
          bk = mk(Xk);
        return Rk && Xk.addEventListener("upgradeneeded", (kk => {
          Rk(mk(Xk.result), kk.oldVersion, kk.newVersion, mk(Xk.transaction))
        })), Bk && Xk.addEventListener("blocked", (() => Bk())), bk.then((kk => {
          ak && kk.addEventListener("close", (() => ak())), tk && kk.addEventListener("versionchange", (() => tk()))
        })).catch((() => {})), bk
      }("firebase-installations-database", 1, {
        upgrade: (kk, Fk) => {
          if (0 === Fk) kk.createObjectStore(nk)
        }
      })), Ik
    }
    async function kF(kk, Fk) {
      const Bk = Ck(kk),
        Rk = (await Qk()).transaction(nk, "readwrite"),
        tk = Rk.objectStore(nk),
        ak = await tk.get(Bk);
      return await tk.put(Fk, Bk), await Rk.done, ak && ak.fid === Fk.fid || pk(kk, Fk.fid), Fk
    }
    async function FF(kk) {
      const Fk = Ck(kk),
        Bk = (await Qk()).transaction(nk, "readwrite");
      await Bk.objectStore(nk).delete(Fk), await Bk.done
    }
    async function BF(kk, Fk) {
      const Bk = Ck(kk),
        Rk = (await Qk()).transaction(nk, "readwrite"),
        tk = Rk.objectStore(nk),
        ak = await tk.get(Bk),
        Xk = Fk(ak);
      return void 0 === Xk ? await tk.delete(Bk) : await tk.put(Xk, Bk), await Rk.done, !Xk || ak && ak.fid === Xk.fid || pk(kk, Xk.fid), Xk
    }
    async function RF(kk) {
      let Fk;
      const Bk = await BF(kk.appConfig, (Bk => {
        const Rk = function(kk) {
            const Fk = kk || {
              fid: qk(),
              registrationStatus: 0
            };
            return XF(Fk)
          }(Bk),
          tk = function(kk, Fk) {
            if (0 === Fk.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Fk,
                  registrationPromise: Promise.reject(gk.create("app-offline"))
                }
              }
              const Bk = {
                  fid: Fk.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Rk = async function(kk, Fk) {
                  try {
                    const Bk = await async function(kk, Fk) {
                      let {
                        appConfig: Bk,
                        heartbeatServiceProvider: Rk
                      } = kk, {
                        fid: tk
                      } = Fk;
                      const ak = ck(Bk),
                        Xk = rk(Bk),
                        bk = Rk.getImmediate({
                          optional: !0
                        });
                      if (bk) {
                        const kk = await bk.getHeartbeatsHeader();
                        kk && Xk.append("x-firebase-client", kk)
                      }
                      const wk = {
                          fid: tk,
                          authVersion: Hk,
                          appId: Bk.appId,
                          sdkVersion: Nk
                        },
                        dk = {
                          method: "POST",
                          headers: Xk,
                          body: JSON.stringify(wk)
                        },
                        sk = await zk((() => fetch(ak, dk)));
                      if (sk.ok) {
                        const kk = await sk.json();
                        return {
                          fid: kk.fid || tk,
                          registrationStatus: 2,
                          refreshToken: kk.refreshToken,
                          authToken: Gk(kk.authToken)
                        }
                      }
                      throw await Tk("Create Installation", sk)
                    }(kk, Fk);
                    return kF(kk.appConfig, Bk)
                  } catch (Bk) {
                    throw Uk(Bk) && 409 === Bk.customData.serverCode ? await FF(kk.appConfig) : await kF(kk.appConfig, {
                      fid: Fk.fid,
                      registrationStatus: 0
                    }), Bk
                  }
                }(kk, Bk);
              return {
                installationEntry: Bk,
                registrationPromise: Rk
              }
            }
            return 1 === Fk.registrationStatus ? {
              installationEntry: Fk,
              registrationPromise: tF(kk)
            } : {
              installationEntry: Fk
            }
          }(kk, Rk);
        return Fk = tk.registrationPromise, tk.installationEntry
      }));
      return "" === Bk.fid ? {
        installationEntry: await Fk
      } : {
        installationEntry: Bk,
        registrationPromise: Fk
      }
    }
    async function tF(kk) {
      let Fk = await aF(kk.appConfig);
      for (; 1 === Fk.registrationStatus;) await Pk(100), Fk = await aF(kk.appConfig);
      if (0 === Fk.registrationStatus) {
        const {
          installationEntry: Fk,
          registrationPromise: Bk
        } = await RF(kk);
        return Bk || Fk
      }
      return Fk
    }

    function aF(kk) {
      return BF(kk, (kk => {
        if (!kk) throw gk.create("installation-not-found");
        return XF(kk)
      }))
    }

    function XF(kk) {
      return 1 === (Fk = kk).registrationStatus && Fk.registrationTime + Sk < Date.now() ? {
        fid: kk.fid,
        registrationStatus: 0
      } : kk;
      var Fk
    }
    async function bF(kk, Fk) {
      let {
        appConfig: Bk,
        heartbeatServiceProvider: Rk
      } = kk;
      const tk = function(kk, Fk) {
          let {
            fid: Bk
          } = Fk;
          return `${ck(kk)}/${Bk}/authTokens:generate`
        }(Bk, Fk),
        ak = Dk(Bk, Fk),
        Xk = Rk.getImmediate({
          optional: !0
        });
      if (Xk) {
        const kk = await Xk.getHeartbeatsHeader();
        kk && ak.append("x-firebase-client", kk)
      }
      const bk = {
          installation: {
            sdkVersion: Nk,
            appId: Bk.appId
          }
        },
        wk = {
          method: "POST",
          headers: ak,
          body: JSON.stringify(bk)
        },
        dk = await zk((() => fetch(tk, wk)));
      if (dk.ok) {
        return Gk(await dk.json())
      }
      throw await Tk("Generate Auth Token", dk)
    }
    async function wF(kk) {
      let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Rk = await BF(kk.appConfig, (Rk => {
        if (!sF(Rk)) throw gk.create("not-registered");
        const tk = Rk.authToken;
        if (!Bk && function(kk) {
            return 2 === kk.requestStatus && ! function(kk) {
              const Fk = Date.now();
              return Fk < kk.creationTime || kk.creationTime + kk.expiresIn < Fk + uk
            }(kk)
          }(tk)) return Rk;
        if (1 === tk.requestStatus) return Fk = async function(kk, Fk) {
          let Bk = await dF(kk.appConfig);
          for (; 1 === Bk.authToken.requestStatus;) await Pk(100), Bk = await dF(kk.appConfig);
          const Rk = Bk.authToken;
          return 0 === Rk.requestStatus ? wF(kk, Fk) : Rk
        }(kk, Bk), Rk;
        {
          if (!navigator.onLine) throw gk.create("app-offline");
          const Bk = function(kk) {
            const Fk = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, kk), {
              authToken: Fk
            })
          }(Rk);
          return Fk = async function(kk, Fk) {
            try {
              const Bk = await bF(kk, Fk),
                Rk = Object.assign(Object.assign({}, Fk), {
                  authToken: Bk
                });
              return await kF(kk.appConfig, Rk), Bk
            } catch (Bk) {
              if (!Uk(Bk) || 401 !== Bk.customData.serverCode && 404 !== Bk.customData.serverCode) {
                const Bk = Object.assign(Object.assign({}, Fk), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await kF(kk.appConfig, Bk)
              } else await FF(kk.appConfig);
              throw Bk
            }
          }(kk, Bk), Bk
        }
      }));
      return Fk ? await Fk : Rk.authToken
    }

    function dF(kk) {
      return BF(kk, (kk => {
        if (!sF(kk)) throw gk.create("not-registered");
        const Fk = kk.authToken;
        return 1 === (Bk = Fk).requestStatus && Bk.requestTime + Sk < Date.now() ? Object.assign(Object.assign({}, kk), {
          authToken: {
            requestStatus: 0
          }
        }) : kk;
        var Bk
      }))
    }

    function sF(kk) {
      return void 0 !== kk && 2 === kk.registrationStatus
    }
    async function VF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Bk = kk;
      await async function(kk) {
        const {
          registrationPromise: Fk
        } = await RF(kk);
        Fk && await Fk
      }(Bk);
      return (await wF(Bk, Fk)).token
    }

    function JF(kk) {
      return gk.create("missing-app-config-values", {
        valueName: kk
      })
    }
    const AF = "installations",
      eF = kk => {
        const Fk = kk.getProvider("app").getImmediate(),
          Bk = function(kk) {
            if (!kk || !kk.options) throw JF("App Configuration");
            if (!kk.name) throw JF("App Name");
            const Fk = ["projectId", "apiKey", "appId"];
            for (const Bk of Fk)
              if (!kk.options[Bk]) throw JF(Bk);
            return {
              appName: kk.name,
              projectId: kk.options.projectId,
              apiKey: kk.options.apiKey,
              appId: kk.options.appId
            }
          }(Fk);
        return {
          app: Fk,
          appConfig: Bk,
          heartbeatServiceProvider: (0, Rk.w)(Fk, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      yF = kk => {
        const Fk = kk.getProvider("app").getImmediate(),
          Bk = (0, Rk.w)(Fk, AF).getImmediate();
        return {
          getId: () => async function(kk) {
            const Fk = kk,
              {
                installationEntry: Bk,
                registrationPromise: Rk
              } = await RF(Fk);
            return Rk ? Rk.catch(console.error) : wF(Fk).catch(console.error), Bk.fid
          }(Bk),
          getToken: kk => VF(Bk, kk)
        }
      };
    (0, Rk.A)(new Xk.g(AF, eF, "PUBLIC")), (0, Rk.A)(new Xk.g("installations-internal", yF, "PRIVATE")), (0, Rk.S)(Ok, Ek), (0, Rk.S)(Ok, Ek, "esm2017");
    const fF = "analytics",
      mF = "https://www.googletagmanager.com/gtag/js",
      WF = new tk.d("@firebase/analytics"),
      vF = {
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
      iF = new ak.h("analytics", "Analytics", vF);

    function YF(kk) {
      if (!kk.startsWith(mF)) {
        const Fk = iF.create("invalid-gtag-resource", {
          gtagURL: kk
        });
        return WF.warn(Fk.message), ""
      }
      return kk
    }

    function oF(kk) {
      return Promise.all(kk.map((kk => kk.catch((kk => kk)))))
    }

    function LF(kk, Fk) {
      const Bk = function(kk, Fk) {
          let Bk;
          return window.trustedTypes && (Bk = window.trustedTypes.createPolicy(kk, Fk)), Bk
        }("firebase-js-sdk-policy", {
          createScriptURL: YF
        }),
        Rk = document.createElement("script"),
        tk = `${mF}?l=${kk}&id=${Fk}`;
      Rk.src = Bk ? null === Bk || void 0 === Bk ? void 0 : Bk.createScriptURL(tk) : tk, Rk.async = !0, document.head.appendChild(Rk)
    }

    function OF(kk, Fk, Bk, Rk) {
      return async function(tk) {
        try {
          for (var ak = arguments.length, Xk = new Array(ak > 1 ? ak - 1 : 0), bk = 1; bk < ak; bk++) Xk[bk - 1] = arguments[bk];
          if ("event" === tk) {
            const [Rk, tk] = Xk;
            await async function(kk, Fk, Bk, Rk, tk) {
              try {
                let ak = [];
                if (tk && tk.send_to) {
                  let kk = tk.send_to;
                  Array.isArray(kk) || (kk = [kk]);
                  const Rk = await oF(Bk);
                  for (const Bk of kk) {
                    const kk = Rk.find((kk => kk.measurementId === Bk)),
                      tk = kk && Fk[kk.appId];
                    if (!tk) {
                      ak = [];
                      break
                    }
                    ak.push(tk)
                  }
                }
                0 === ak.length && (ak = Object.values(Fk)), await Promise.all(ak), kk("event", Rk, tk || {})
              } catch (ak) {
                WF.error(ak)
              }
            }(kk, Fk, Bk, Rk, tk)
          } else if ("config" === tk) {
            const [tk, ak] = Xk;
            await async function(kk, Fk, Bk, Rk, tk, ak) {
              const Xk = Rk[tk];
              try {
                if (Xk) await Fk[Xk];
                else {
                  const kk = (await oF(Bk)).find((kk => kk.measurementId === tk));
                  kk && await Fk[kk.appId]
                }
              } catch (bk) {
                WF.error(bk)
              }
              kk("config", tk, ak)
            }(kk, Fk, Bk, Rk, tk, ak)
          } else if ("consent" === tk) {
            const [Fk] = Xk;
            kk("consent", "update", Fk)
          } else if ("get" === tk) {
            const [Fk, Bk, Rk] = Xk;
            kk("get", Fk, Bk, Rk)
          } else if ("set" === tk) {
            const [Fk] = Xk;
            kk("set", Fk)
          } else kk(tk, ...Xk)
        } catch (wk) {
          WF.error(wk)
        }
      }
    }
    const EF = new class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = kk, this.intervalMillis = Fk
      }
      getThrottleMetadata(kk) {
        return this.throttleMetadata[kk]
      }
      setThrottleMetadata(kk, Fk) {
        this.throttleMetadata[kk] = Fk
      }
      deleteThrottleMetadata(kk) {
        delete this.throttleMetadata[kk]
      }
    };

    function SF(kk) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": kk
      })
    }
    async function NF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EF,
        Bk = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Rk,
        apiKey: tk,
        measurementId: ak
      } = kk.options;
      if (!Rk) throw iF.create("no-app-id");
      if (!tk) {
        if (ak) return {
          measurementId: ak,
          appId: Rk
        };
        throw iF.create("no-api-key")
      }
      const Xk = Fk.getThrottleMetadata(Rk) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        bk = new uF;
      return setTimeout((async () => {
        bk.abort()
      }), void 0 !== Bk ? Bk : 6e4), HF({
        appId: Rk,
        apiKey: tk,
        measurementId: ak
      }, Xk, bk, Fk)
    }
    async function HF(kk, Fk, Bk) {
      let {
        throttleEndTimeMillis: Rk,
        backoffCount: tk
      } = Fk, Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EF;
      var bk;
      const {
        appId: wk,
        measurementId: dk
      } = kk;
      try {
        await
        function(kk, Fk) {
          return new Promise(((Bk, Rk) => {
            const tk = Math.max(Fk - Date.now(), 0),
              ak = setTimeout(Bk, tk);
            kk.addEventListener((() => {
              clearTimeout(ak), Rk(iF.create("fetch-throttle", {
                throttleEndTimeMillis: Fk
              }))
            }))
          }))
        }(Bk, Rk)
      } catch (sk) {
        if (dk) return WF.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${dk} provided in the "measurementId" field in the local Firebase config. [${null===sk||void 0===sk?void 0:sk.message}]`), {
          appId: wk,
          measurementId: dk
        };
        throw sk
      }
      try {
        const Fk = await async function(kk) {
          var Fk;
          const {
            appId: Bk,
            apiKey: Rk
          } = kk, tk = {
            method: "GET",
            headers: SF(Rk)
          }, ak = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Bk), Xk = await fetch(ak, tk);
          if (200 !== Xk.status && 304 !== Xk.status) {
            let kk = "";
            try {
              const Bk = await Xk.json();
              (null === (Fk = Bk.error) || void 0 === Fk ? void 0 : Fk.message) && (kk = Bk.error.message)
            } catch (bk) {}
            throw iF.create("config-fetch-failed", {
              httpStatus: Xk.status,
              responseMessage: kk
            })
          }
          return Xk.json()
        }(kk);
        return Xk.deleteThrottleMetadata(wk), Fk
      } catch (sk) {
        const Fk = sk;
        if (! function(kk) {
            if (!(kk instanceof ak.j) || !kk.customData) return !1;
            const Fk = Number(kk.customData.httpStatus);
            return 429 === Fk || 500 === Fk || 503 === Fk || 504 === Fk
          }(Fk)) {
          if (Xk.deleteThrottleMetadata(wk), dk) return WF.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${dk} provided in the "measurementId" field in the local Firebase config. [${null===Fk||void 0===Fk?void 0:Fk.message}]`), {
            appId: wk,
            measurementId: dk
          };
          throw sk
        }
        const Rk = 503 === Number(null === (bk = null === Fk || void 0 === Fk ? void 0 : Fk.customData) || void 0 === bk ? void 0 : bk.httpStatus) ? (0, ak.s)(tk, Xk.intervalMillis, 30) : (0, ak.s)(tk, Xk.intervalMillis),
          Vk = {
            throttleEndTimeMillis: Date.now() + Rk,
            backoffCount: tk + 1
          };
        return Xk.setThrottleMetadata(wk, Vk), WF.debug(`Calling attemptFetch again in ${Rk} millis`), HF(kk, Vk, Bk, Xk)
      }
    }
    class uF {
      constructor() {
        this.listeners = []
      }
      addEventListener(kk) {
        this.listeners.push(kk)
      }
      abort() {
        this.listeners.forEach((kk => kk()))
      }
    }
    let MF, gF;

    function UF(kk) {
      gF = kk
    }

    function cF(kk) {
      MF = kk
    }
    async function GF(kk, Fk, Bk, Rk, tk, Xk, bk) {
      var wk;
      const dk = NF(kk);
      dk.then((Fk => {
        Bk[Fk.measurementId] = Fk.appId, kk.options.measurementId && Fk.measurementId !== kk.options.measurementId && WF.warn(`The measurement ID in the local Firebase config (${kk.options.measurementId}) does not match the measurement ID fetched from the server (${Fk.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((kk => WF.error(kk))), Fk.push(dk);
      const sk = async function() {
        if (!(0, ak.Y)()) return WF.warn(iF.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, ak.eb)()
        } catch (kk) {
          return WF.warn(iF.create("indexeddb-unavailable", {
            errorInfo: null === kk || void 0 === kk ? void 0 : kk.toString()
          }).message), !1
        }
        return !0
      }().then((kk => kk ? Rk.getId() : void 0)), [Vk, Jk] = await Promise.all([dk, sk]);
      (function(kk) {
        const Fk = window.document.getElementsByTagName("script");
        for (const Bk of Object.values(Fk))
          if (Bk.src && Bk.src.includes(mF) && Bk.src.includes(kk)) return Bk;
        return null
      })(Xk) || LF(Xk, Vk.measurementId), gF && (tk("consent", "default", gF), UF(void 0)), tk("js", new Date);
      const Ak = null !== (wk = null === bk || void 0 === bk ? void 0 : bk.config) && void 0 !== wk ? wk : {};
      return Ak.origin = "firebase", Ak.update = !0, null != Jk && (Ak.firebase_id = Jk), tk("config", Vk.measurementId, Ak), MF && (tk("set", MF), cF(void 0)), Vk.measurementId
    }
    class TF {
      constructor(kk) {
        this.app = kk
      }
      _delete() {
        return delete rF[this.app.options.appId], Promise.resolve()
      }
    }
    let rF = {},
      DF = [];
    const zF = {};
    let PF, hF, qF = "dataLayer",
      CF = "gtag",
      ZF = !1;

    function pF(kk) {
      if (ZF) throw iF.create("already-initialized");
      kk.dataLayerName && (qF = kk.dataLayerName), kk.gtagName && (CF = kk.gtagName)
    }

    function KF(kk, Fk, Bk) {
      ! function() {
        const kk = [];
        if ((0, ak.S)() && kk.push("This is a browser extension environment."), (0, ak.k)() || kk.push("Cookies are not available."), kk.length > 0) {
          const Fk = kk.map(((kk, Fk) => `(${Fk+1}) ${kk}`)).join(" "),
            Bk = iF.create("invalid-analytics-context", {
              errorInfo: Fk
            });
          WF.warn(Bk.message)
        }
      }();
      const Rk = kk.options.appId;
      if (!Rk) throw iF.create("no-app-id");
      if (!kk.options.apiKey) {
        if (!kk.options.measurementId) throw iF.create("no-api-key");
        WF.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${kk.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != rF[Rk]) throw iF.create("already-exists", {
        id: Rk
      });
      if (!ZF) {
        ! function(kk) {
          let Fk = [];
          Array.isArray(window[kk]) ? Fk = window[kk] : window[kk] = Fk
        }(qF);
        const {
          wrappedGtag: kk,
          gtagCore: Fk
        } = function(kk, Fk, Bk, Rk, tk) {
          let ak = function() {
            for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
            window[Rk].push(arguments)
          };
          return window[tk] && "function" === typeof window[tk] && (ak = window[tk]), window[tk] = OF(ak, kk, Fk, Bk), {
            gtagCore: ak,
            wrappedGtag: window[tk]
          }
        }(rF, DF, zF, qF, CF);
        hF = kk, PF = Fk, ZF = !0
      }
      rF[Rk] = GF(kk, DF, zF, Fk, PF, qF, Bk);
      return new TF(kk)
    }

    function xF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.K)();
      kk = (0, ak.N)(kk);
      const Fk = (0, Rk.w)(kk, fF);
      return Fk.isInitialized() ? Fk.getImmediate() : jF(kk)
    }

    function jF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Bk = (0, Rk.w)(kk, fF);
      if (Bk.isInitialized()) {
        const kk = Bk.getImmediate();
        if ((0, ak.z)(Fk, Bk.getOptions())) return kk;
        throw iF.create("already-initialized")
      }
      return Bk.initialize({
        options: Fk
      })
    }
    async function lF() {
      if ((0, ak.S)()) return !1;
      if (!(0, ak.k)()) return !1;
      if (!(0, ak.Y)()) return !1;
      try {
        return await (0, ak.eb)()
      } catch (kk) {
        return !1
      }
    }

    function nF(kk, Fk, Bk) {
      kk = (0, ak.N)(kk), async function(kk, Fk, Bk, Rk) {
        if (Rk && Rk.global) return kk("set", {
          screen_name: Bk
        }), Promise.resolve();
        kk("config", await Fk, {
          update: !0,
          screen_name: Bk
        })
      }(hF, rF[kk.app.options.appId], Fk, Bk).catch((kk => WF.error(kk)))
    }
    async function IF(kk) {
      return kk = (0, ak.N)(kk), async function(kk, Fk) {
        const Bk = await Fk;
        return new Promise(((Fk, Rk) => {
          kk("get", Bk, "client_id", (kk => {
            kk || Rk(iF.create("no-client-id")), Fk(kk)
          }))
        }))
      }(hF, rF[kk.app.options.appId])
    }

    function QF(kk, Fk, Bk) {
      kk = (0, ak.N)(kk), async function(kk, Fk, Bk, Rk) {
        if (Rk && Rk.global) return kk("set", {
          user_id: Bk
        }), Promise.resolve();
        kk("config", await Fk, {
          update: !0,
          user_id: Bk
        })
      }(hF, rF[kk.app.options.appId], Fk, Bk).catch((kk => WF.error(kk)))
    }

    function kB(kk, Fk, Bk) {
      kk = (0, ak.N)(kk), async function(kk, Fk, Bk, Rk) {
        if (Rk && Rk.global) {
          const Fk = {};
          for (const kk of Object.keys(Bk)) Fk[`user_properties.${kk}`] = Bk[kk];
          return kk("set", Fk), Promise.resolve()
        }
        kk("config", await Fk, {
          update: !0,
          user_properties: Bk
        })
      }(hF, rF[kk.app.options.appId], Fk, Bk).catch((kk => WF.error(kk)))
    }

    function FB(kk, Fk) {
      kk = (0, ak.N)(kk), async function(kk, Fk) {
        const Bk = await kk;
        window[`ga-disable-${Bk}`] = !Fk
      }(rF[kk.app.options.appId], Fk).catch((kk => WF.error(kk)))
    }

    function BB(kk) {
      hF ? hF("set", kk) : cF(kk)
    }

    function RB(kk, Fk, Bk, Rk) {
      kk = (0, ak.N)(kk), async function(kk, Fk, Bk, Rk, tk) {
        if (tk && tk.global) kk("event", Bk, Rk);
        else {
          const tk = await Fk;
          kk("event", Bk, Object.assign(Object.assign({}, Rk), {
            send_to: tk
          }))
        }
      }(hF, rF[kk.app.options.appId], Fk, Bk, Rk).catch((kk => WF.error(kk)))
    }

    function tB(kk) {
      hF ? hF("consent", "update", kk) : UF(kk)
    }
    const aB = "@firebase/analytics",
      XB = "0.10.0";
    (0, Rk.A)(new Xk.g(fF, ((kk, Fk) => {
      let {
        options: Bk
      } = Fk;
      return KF(kk.getProvider("app").getImmediate(), kk.getProvider("installations-internal").getImmediate(), Bk)
    }), "PUBLIC")), (0, Rk.A)(new Xk.g("analytics-internal", (function(kk) {
      try {
        const Fk = kk.getProvider(fF).getImmediate();
        return {
          logEvent: (kk, Bk, Rk) => RB(Fk, kk, Bk, Rk)
        }
      } catch (Fk) {
        throw iF.create("interop-component-reg-failed", {
          reason: Fk
        })
      }
    }), "PRIVATE")), (0, Rk.S)(aB, XB), (0, Rk.S)(aB, XB, "esm2017")
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);