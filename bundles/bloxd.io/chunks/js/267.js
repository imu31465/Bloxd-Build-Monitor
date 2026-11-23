/*! For license information please see 31kiid.267.16bdc685.chunk.js.LICENSE.txt */
export const id = 267;
export const ids = [267];
export const modules = {
  40532: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      getAnalytics: () => gF,
      getGoogleAnalyticsClientId: () => DF,
      initializeAnalytics: () => mF,
      isSupported: () => hF,
      logEvent: () => XI,
      setAnalyticsCollectionEnabled: () => FI,
      setConsent: () => TI,
      setCurrentScreen: () => rF,
      setDefaultEventParameters: () => II,
      setUserId: () => MF,
      setUserProperties: () => kI,
      settings: () => YF
    });
    var Xk = Ik(40512),
      Tk = Ik(40527),
      ik = Ik(40522),
      yk = Ik(40519);
    let lk, ak;
    const qk = new WeakMap,
      Lk = new WeakMap,
      tk = new WeakMap,
      Zk = new WeakMap,
      jk = new WeakMap;
    let ek = {
      get(kk, Fk, Ik) {
        if (kk instanceof IDBTransaction) {
          if ("done" === Fk) return Lk.get(kk);
          if ("objectStoreNames" === Fk) return kk.objectStoreNames || tk.get(kk);
          if ("store" === Fk) return Ik.objectStoreNames[1] ? void 0 : Ik.objectStore(Ik.objectStoreNames[0])
        }
        return Jk(kk[Fk])
      },
      set: (kk, Fk, Ik) => (kk[Fk] = Ik, !0),
      has: (kk, Fk) => kk instanceof IDBTransaction && ("done" === Fk || "store" === Fk) || Fk in kk
    };

    function wk(kk) {
      return kk !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (ak || (ak = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(kk) ? function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return kk.apply(xk(this), Ik), Jk(qk.get(this))
      } : function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return Jk(kk.apply(xk(this), Ik))
      } : function(Fk) {
        for (var Ik = arguments.length, Xk = new Array(Ik > 1 ? Ik - 1 : 0), Tk = 1; Tk < Ik; Tk++) Xk[Tk - 1] = arguments[Tk];
        const ik = kk.call(xk(this), Fk, ...Xk);
        return tk.set(ik, Fk.sort ? Fk.sort() : [Fk]), Jk(ik)
      }
    }

    function Hk(kk) {
      return "function" === typeof kk ? wk(kk) : (kk instanceof IDBTransaction && function(kk) {
        if (Lk.has(kk)) return;
        const Fk = new Promise(((Fk, Ik) => {
          const Xk = () => {
              kk.removeEventListener("complete", Tk), kk.removeEventListener("error", ik), kk.removeEventListener("abort", ik)
            },
            Tk = () => {
              Fk(), Xk()
            },
            ik = () => {
              Ik(kk.error || new DOMException("AbortError", "AbortError")), Xk()
            };
          kk.addEventListener("complete", Tk), kk.addEventListener("error", ik), kk.addEventListener("abort", ik)
        }));
        Lk.set(kk, Fk)
      }(kk), Fk = kk, (lk || (lk = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((kk => Fk instanceof kk)) ? new Proxy(kk, ek) : kk);
      var Fk
    }

    function Jk(kk) {
      if (kk instanceof IDBRequest) return function(kk) {
        const Fk = new Promise(((Fk, Ik) => {
          const Xk = () => {
              kk.removeEventListener("success", Tk), kk.removeEventListener("error", ik)
            },
            Tk = () => {
              Fk(Jk(kk.result)), Xk()
            },
            ik = () => {
              Ik(kk.error), Xk()
            };
          kk.addEventListener("success", Tk), kk.addEventListener("error", ik)
        }));
        return Fk.then((Fk => {
          Fk instanceof IDBCursor && qk.set(Fk, kk)
        })).catch((() => {})), jk.set(Fk, kk), Fk
      }(kk);
      if (Zk.has(kk)) return Zk.get(kk);
      const Fk = Hk(kk);
      return Fk !== kk && (Zk.set(kk, Fk), jk.set(Fk, kk)), Fk
    }
    const xk = kk => jk.get(kk);
    const Pk = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Kk = ["put", "add", "delete", "clear"],
      Qk = new Map;

    function sk(kk, Fk) {
      if (!(kk instanceof IDBDatabase) || Fk in kk || "string" !== typeof Fk) return;
      if (Qk.get(Fk)) return Qk.get(Fk);
      const Ik = Fk.replace(/FromIndex$/, ""),
        Xk = Fk !== Ik,
        Tk = Kk.includes(Ik);
      if (!(Ik in (Xk ? IDBIndex : IDBObjectStore).prototype) || !Tk && !Pk.includes(Ik)) return;
      const ik = async function(kk) {
        const Fk = this.transaction(kk, Tk ? "readwrite" : "readonly");
        let ik = Fk.store;
        for (var yk = arguments.length, lk = new Array(yk > 1 ? yk - 1 : 0), ak = 1; ak < yk; ak++) lk[ak - 1] = arguments[ak];
        return Xk && (ik = ik.index(lk.shift())), (await Promise.all([ik[Ik](...lk), Tk && Fk.done]))[0]
      };
      return Qk.set(Fk, ik), ik
    }
    ek = (kk => ({
      ...kk,
      get: (Fk, Ik, Xk) => sk(Fk, Ik) || kk.get(Fk, Ik, Xk),
      has: (Fk, Ik) => !!sk(Fk, Ik) || kk.has(Fk, Ik)
    }))(ek);
    const Vk = "@firebase/installations",
      zk = "0.6.4",
      Sk = 1e4,
      vk = `w:${zk}`,
      Ek = "FIS_v2",
      Ok = 36e5,
      nk = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Gk = new ik.g("installations", "Installations", nk);

    function pk(kk) {
      return kk instanceof ik.h && kk.code.includes("request-failed")
    }

    function uk(kk) {
      let {
        projectId: Fk
      } = kk;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Fk}/installations`
    }

    function bk(kk) {
      return {
        token: kk.token,
        requestStatus: 2,
        expiresIn: (Fk = kk.expiresIn, Number(Fk.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Fk
    }
    async function Rk(kk, Fk) {
      const Ik = (await Fk.json()).error;
      return Gk.create("request-failed", {
        requestName: kk,
        serverCode: Ik.code,
        serverMessage: Ik.message,
        serverStatus: Ik.status
      })
    }

    function Uk(kk) {
      let {
        apiKey: Fk
      } = kk;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Fk
      })
    }

    function Ck(kk, Fk) {
      let {
        refreshToken: Ik
      } = Fk;
      const Xk = Uk(kk);
      return Xk.append("Authorization", function(kk) {
        return `${Ek} ${kk}`
      }(Ik)), Xk
    }
    async function Nk(kk) {
      const Fk = await kk();
      return Fk.status >= 500 && Fk.status < 600 ? kk() : Fk
    }

    function ck(kk) {
      return new Promise((Fk => {
        setTimeout(Fk, kk)
      }))
    }
    const Wk = /^[cdef][\w-]{21}$/;

    function fk() {
      try {
        const kk = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(kk), kk[0] = 112 + kk[0] % 16;
        const Fk = function(kk) {
          const Fk = (Ik = kk, btoa(String.fromCharCode(...Ik)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Ik;
          return Fk.substr(0, 22)
        }(kk);
        return Wk.test(Fk) ? Fk : ""
      } catch (kk) {
        return ""
      }
    }

    function Bk(kk) {
      return `${kk.appName}!${kk.appId}`
    }
    const dk = new Map;

    function Yk(kk, Fk) {
      const Ik = Bk(kk);
      Ak(Ik, Fk),
        function(kk, Fk) {
          const Ik = mk();
          Ik && Ik.postMessage({
            key: kk,
            fid: Fk
          });
          hk()
        }(Ik, Fk)
    }

    function Ak(kk, Fk) {
      const Ik = dk.get(kk);
      if (Ik)
        for (const Xk of Ik) Xk(Fk)
    }
    let gk = null;

    function mk() {
      return !gk && "BroadcastChannel" in self && (gk = new BroadcastChannel("[Firebase] FID Change"), gk.onmessage = kk => {
        Ak(kk.data.key, kk.data.fid)
      }), gk
    }

    function hk() {
      0 === dk.size && gk && (gk.close(), gk = null)
    }
    const rk = "firebase-installations-store";
    let Dk = null;

    function Mk() {
      return Dk || (Dk = function(kk, Fk) {
        let {
          blocked: Ik,
          upgrade: Xk,
          blocking: Tk,
          terminated: ik
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const yk = indexedDB.open(kk, Fk),
          lk = Jk(yk);
        return Xk && yk.addEventListener("upgradeneeded", (kk => {
          Xk(Jk(yk.result), kk.oldVersion, kk.newVersion, Jk(yk.transaction))
        })), Ik && yk.addEventListener("blocked", (() => Ik())), lk.then((kk => {
          ik && kk.addEventListener("close", (() => ik())), Tk && kk.addEventListener("versionchange", (() => Tk()))
        })).catch((() => {})), lk
      }("firebase-installations-database", 1, {
        upgrade: (kk, Fk) => {
          if (0 === Fk) kk.createObjectStore(rk)
        }
      })), Dk
    }
    async function kF(kk, Fk) {
      const Ik = Bk(kk),
        Xk = (await Mk()).transaction(rk, "readwrite"),
        Tk = Xk.objectStore(rk),
        ik = await Tk.get(Ik);
      return await Tk.put(Fk, Ik), await Xk.done, ik && ik.fid === Fk.fid || Yk(kk, Fk.fid), Fk
    }
    async function FF(kk) {
      const Fk = Bk(kk),
        Ik = (await Mk()).transaction(rk, "readwrite");
      await Ik.objectStore(rk).delete(Fk), await Ik.done
    }
    async function IF(kk, Fk) {
      const Ik = Bk(kk),
        Xk = (await Mk()).transaction(rk, "readwrite"),
        Tk = Xk.objectStore(rk),
        ik = await Tk.get(Ik),
        yk = Fk(ik);
      return void 0 === yk ? await Tk.delete(Ik) : await Tk.put(yk, Ik), await Xk.done, !yk || ik && ik.fid === yk.fid || Yk(kk, yk.fid), yk
    }
    async function XF(kk) {
      let Fk;
      const Ik = await IF(kk.appConfig, (Ik => {
        const Xk = function(kk) {
            const Fk = kk || {
              fid: fk(),
              registrationStatus: 0
            };
            return yF(Fk)
          }(Ik),
          Tk = function(kk, Fk) {
            if (0 === Fk.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Fk,
                  registrationPromise: Promise.reject(Gk.create("app-offline"))
                }
              }
              const Ik = {
                  fid: Fk.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Xk = async function(kk, Fk) {
                  try {
                    const Ik = await async function(kk, Fk) {
                      let {
                        appConfig: Ik,
                        heartbeatServiceProvider: Xk
                      } = kk, {
                        fid: Tk
                      } = Fk;
                      const ik = uk(Ik),
                        yk = Uk(Ik),
                        lk = Xk.getImmediate({
                          optional: !0
                        });
                      if (lk) {
                        const kk = await lk.getHeartbeatsHeader();
                        kk && yk.append("x-firebase-client", kk)
                      }
                      const ak = {
                          fid: Tk,
                          authVersion: Ek,
                          appId: Ik.appId,
                          sdkVersion: vk
                        },
                        qk = {
                          method: "POST",
                          headers: yk,
                          body: JSON.stringify(ak)
                        },
                        Lk = await Nk((() => fetch(ik, qk)));
                      if (Lk.ok) {
                        const kk = await Lk.json();
                        return {
                          fid: kk.fid || Tk,
                          registrationStatus: 2,
                          refreshToken: kk.refreshToken,
                          authToken: bk(kk.authToken)
                        }
                      }
                      throw await Rk("Create Installation", Lk)
                    }(kk, Fk);
                    return kF(kk.appConfig, Ik)
                  } catch (Ik) {
                    throw pk(Ik) && 409 === Ik.customData.serverCode ? await FF(kk.appConfig) : await kF(kk.appConfig, {
                      fid: Fk.fid,
                      registrationStatus: 0
                    }), Ik
                  }
                }(kk, Ik);
              return {
                installationEntry: Ik,
                registrationPromise: Xk
              }
            }
            return 1 === Fk.registrationStatus ? {
              installationEntry: Fk,
              registrationPromise: TF(kk)
            } : {
              installationEntry: Fk
            }
          }(kk, Xk);
        return Fk = Tk.registrationPromise, Tk.installationEntry
      }));
      return "" === Ik.fid ? {
        installationEntry: await Fk
      } : {
        installationEntry: Ik,
        registrationPromise: Fk
      }
    }
    async function TF(kk) {
      let Fk = await iF(kk.appConfig);
      for (; 1 === Fk.registrationStatus;) await ck(100), Fk = await iF(kk.appConfig);
      if (0 === Fk.registrationStatus) {
        const {
          installationEntry: Fk,
          registrationPromise: Ik
        } = await XF(kk);
        return Ik || Fk
      }
      return Fk
    }

    function iF(kk) {
      return IF(kk, (kk => {
        if (!kk) throw Gk.create("installation-not-found");
        return yF(kk)
      }))
    }

    function yF(kk) {
      return 1 === (Fk = kk).registrationStatus && Fk.registrationTime + Sk < Date.now() ? {
        fid: kk.fid,
        registrationStatus: 0
      } : kk;
      var Fk
    }
    async function lF(kk, Fk) {
      let {
        appConfig: Ik,
        heartbeatServiceProvider: Xk
      } = kk;
      const Tk = function(kk, Fk) {
          let {
            fid: Ik
          } = Fk;
          return `${uk(kk)}/${Ik}/authTokens:generate`
        }(Ik, Fk),
        ik = Ck(Ik, Fk),
        yk = Xk.getImmediate({
          optional: !0
        });
      if (yk) {
        const kk = await yk.getHeartbeatsHeader();
        kk && ik.append("x-firebase-client", kk)
      }
      const lk = {
          installation: {
            sdkVersion: vk,
            appId: Ik.appId
          }
        },
        ak = {
          method: "POST",
          headers: ik,
          body: JSON.stringify(lk)
        },
        qk = await Nk((() => fetch(Tk, ak)));
      if (qk.ok) {
        return bk(await qk.json())
      }
      throw await Rk("Generate Auth Token", qk)
    }
    async function aF(kk) {
      let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Xk = await IF(kk.appConfig, (Xk => {
        if (!LF(Xk)) throw Gk.create("not-registered");
        const Tk = Xk.authToken;
        if (!Ik && function(kk) {
            return 2 === kk.requestStatus && ! function(kk) {
              const Fk = Date.now();
              return Fk < kk.creationTime || kk.creationTime + kk.expiresIn < Fk + Ok
            }(kk)
          }(Tk)) return Xk;
        if (1 === Tk.requestStatus) return Fk = async function(kk, Fk) {
          let Ik = await qF(kk.appConfig);
          for (; 1 === Ik.authToken.requestStatus;) await ck(100), Ik = await qF(kk.appConfig);
          const Xk = Ik.authToken;
          return 0 === Xk.requestStatus ? aF(kk, Fk) : Xk
        }(kk, Ik), Xk;
        {
          if (!navigator.onLine) throw Gk.create("app-offline");
          const Ik = function(kk) {
            const Fk = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, kk), {
              authToken: Fk
            })
          }(Xk);
          return Fk = async function(kk, Fk) {
            try {
              const Ik = await lF(kk, Fk),
                Xk = Object.assign(Object.assign({}, Fk), {
                  authToken: Ik
                });
              return await kF(kk.appConfig, Xk), Ik
            } catch (Ik) {
              if (!pk(Ik) || 401 !== Ik.customData.serverCode && 404 !== Ik.customData.serverCode) {
                const Ik = Object.assign(Object.assign({}, Fk), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await kF(kk.appConfig, Ik)
              } else await FF(kk.appConfig);
              throw Ik
            }
          }(kk, Ik), Ik
        }
      }));
      return Fk ? await Fk : Xk.authToken
    }

    function qF(kk) {
      return IF(kk, (kk => {
        if (!LF(kk)) throw Gk.create("not-registered");
        const Fk = kk.authToken;
        return 1 === (Ik = Fk).requestStatus && Ik.requestTime + Sk < Date.now() ? Object.assign(Object.assign({}, kk), {
          authToken: {
            requestStatus: 0
          }
        }) : kk;
        var Ik
      }))
    }

    function LF(kk) {
      return void 0 !== kk && 2 === kk.registrationStatus
    }
    async function tF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ik = kk;
      await async function(kk) {
        const {
          registrationPromise: Fk
        } = await XF(kk);
        Fk && await Fk
      }(Ik);
      return (await aF(Ik, Fk)).token
    }

    function ZF(kk) {
      return Gk.create("missing-app-config-values", {
        valueName: kk
      })
    }
    const jF = "installations",
      eF = kk => {
        const Fk = kk.getProvider("app").getImmediate(),
          Ik = function(kk) {
            if (!kk || !kk.options) throw ZF("App Configuration");
            if (!kk.name) throw ZF("App Name");
            const Fk = ["projectId", "apiKey", "appId"];
            for (const Ik of Fk)
              if (!kk.options[Ik]) throw ZF(Ik);
            return {
              appName: kk.name,
              projectId: kk.options.projectId,
              apiKey: kk.options.apiKey,
              appId: kk.options.appId
            }
          }(Fk);
        return {
          app: Fk,
          appConfig: Ik,
          heartbeatServiceProvider: (0, Xk.A)(Fk, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      wF = kk => {
        const Fk = kk.getProvider("app").getImmediate(),
          Ik = (0, Xk.A)(Fk, jF).getImmediate();
        return {
          getId: () => async function(kk) {
            const Fk = kk,
              {
                installationEntry: Ik,
                registrationPromise: Xk
              } = await XF(Fk);
            return Xk ? Xk.catch(console.error) : aF(Fk).catch(console.error), Ik.fid
          }(Ik),
          getToken: kk => tF(Ik, kk)
        }
      };
    (0, Xk.C)(new yk.g(jF, eF, "PUBLIC")), (0, Xk.C)(new yk.g("installations-internal", wF, "PRIVATE")), (0, Xk.W)(Vk, zk), (0, Xk.W)(Vk, zk, "esm2017");
    const HF = "analytics",
      JF = "https://www.googletagmanager.com/gtag/js",
      xF = new Tk.h("@firebase/analytics"),
      PF = {
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
      KF = new ik.g("analytics", "Analytics", PF);

    function QF(kk) {
      if (!kk.startsWith(JF)) {
        const Fk = KF.create("invalid-gtag-resource", {
          gtagURL: kk
        });
        return xF.warn(Fk.message), ""
      }
      return kk
    }

    function sF(kk) {
      return Promise.all(kk.map((kk => kk.catch((kk => kk)))))
    }

    function VF(kk, Fk) {
      const Ik = function(kk, Fk) {
          let Ik;
          return window.trustedTypes && (Ik = window.trustedTypes.createPolicy(kk, Fk)), Ik
        }("firebase-js-sdk-policy", {
          createScriptURL: QF
        }),
        Xk = document.createElement("script"),
        Tk = `${JF}?l=${kk}&id=${Fk}`;
      Xk.src = Ik ? null === Ik || void 0 === Ik ? void 0 : Ik.createScriptURL(Tk) : Tk, Xk.async = !0, document.head.appendChild(Xk)
    }

    function zF(kk, Fk, Ik, Xk) {
      return async function(Tk) {
        try {
          for (var ik = arguments.length, yk = new Array(ik > 1 ? ik - 1 : 0), lk = 1; lk < ik; lk++) yk[lk - 1] = arguments[lk];
          if ("event" === Tk) {
            const [Xk, Tk] = yk;
            await async function(kk, Fk, Ik, Xk, Tk) {
              try {
                let ik = [];
                if (Tk && Tk.send_to) {
                  let kk = Tk.send_to;
                  Array.isArray(kk) || (kk = [kk]);
                  const Xk = await sF(Ik);
                  for (const Ik of kk) {
                    const kk = Xk.find((kk => kk.measurementId === Ik)),
                      Tk = kk && Fk[kk.appId];
                    if (!Tk) {
                      ik = [];
                      break
                    }
                    ik.push(Tk)
                  }
                }
                0 === ik.length && (ik = Object.values(Fk)), await Promise.all(ik), kk("event", Xk, Tk || {})
              } catch (ik) {
                xF.error(ik)
              }
            }(kk, Fk, Ik, Xk, Tk)
          } else if ("config" === Tk) {
            const [Tk, ik] = yk;
            await async function(kk, Fk, Ik, Xk, Tk, ik) {
              const yk = Xk[Tk];
              try {
                if (yk) await Fk[yk];
                else {
                  const kk = (await sF(Ik)).find((kk => kk.measurementId === Tk));
                  kk && await Fk[kk.appId]
                }
              } catch (lk) {
                xF.error(lk)
              }
              kk("config", Tk, ik)
            }(kk, Fk, Ik, Xk, Tk, ik)
          } else if ("consent" === Tk) {
            const [Fk] = yk;
            kk("consent", "update", Fk)
          } else if ("get" === Tk) {
            const [Fk, Ik, Xk] = yk;
            kk("get", Fk, Ik, Xk)
          } else if ("set" === Tk) {
            const [Fk] = yk;
            kk("set", Fk)
          } else kk(Tk, ...yk)
        } catch (ak) {
          xF.error(ak)
        }
      }
    }
    const SF = new class {
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

    function oF(kk) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": kk
      })
    }
    async function vF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SF,
        Ik = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Xk,
        apiKey: Tk,
        measurementId: ik
      } = kk.options;
      if (!Xk) throw KF.create("no-app-id");
      if (!Tk) {
        if (ik) return {
          measurementId: ik,
          appId: Xk
        };
        throw KF.create("no-api-key")
      }
      const yk = Fk.getThrottleMetadata(Xk) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        lk = new OF;
      return setTimeout((async () => {
        lk.abort()
      }), void 0 !== Ik ? Ik : 6e4), EF({
        appId: Xk,
        apiKey: Tk,
        measurementId: ik
      }, yk, lk, Fk)
    }
    async function EF(kk, Fk, Ik) {
      let {
        throttleEndTimeMillis: Xk,
        backoffCount: Tk
      } = Fk, yk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SF;
      var lk;
      const {
        appId: ak,
        measurementId: qk
      } = kk;
      try {
        await
        function(kk, Fk) {
          return new Promise(((Ik, Xk) => {
            const Tk = Math.max(Fk - Date.now(), 0),
              ik = setTimeout(Ik, Tk);
            kk.addEventListener((() => {
              clearTimeout(ik), Xk(KF.create("fetch-throttle", {
                throttleEndTimeMillis: Fk
              }))
            }))
          }))
        }(Ik, Xk)
      } catch (Lk) {
        if (qk) return xF.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${qk} provided in the "measurementId" field in the local Firebase config. [${null===Lk||void 0===Lk?void 0:Lk.message}]`), {
          appId: ak,
          measurementId: qk
        };
        throw Lk
      }
      try {
        const Fk = await async function(kk) {
          var Fk;
          const {
            appId: Ik,
            apiKey: Xk
          } = kk, Tk = {
            method: "GET",
            headers: oF(Xk)
          }, ik = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Ik), yk = await fetch(ik, Tk);
          if (200 !== yk.status && 304 !== yk.status) {
            let kk = "";
            try {
              const Ik = await yk.json();
              (null === (Fk = Ik.error) || void 0 === Fk ? void 0 : Fk.message) && (kk = Ik.error.message)
            } catch (lk) {}
            throw KF.create("config-fetch-failed", {
              httpStatus: yk.status,
              responseMessage: kk
            })
          }
          return yk.json()
        }(kk);
        return yk.deleteThrottleMetadata(ak), Fk
      } catch (Lk) {
        const Fk = Lk;
        if (! function(kk) {
            if (!(kk instanceof ik.h) || !kk.customData) return !1;
            const Fk = Number(kk.customData.httpStatus);
            return 429 === Fk || 500 === Fk || 503 === Fk || 504 === Fk
          }(Fk)) {
          if (yk.deleteThrottleMetadata(ak), qk) return xF.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${qk} provided in the "measurementId" field in the local Firebase config. [${null===Fk||void 0===Fk?void 0:Fk.message}]`), {
            appId: ak,
            measurementId: qk
          };
          throw Lk
        }
        const Xk = 503 === Number(null === (lk = null === Fk || void 0 === Fk ? void 0 : Fk.customData) || void 0 === lk ? void 0 : lk.httpStatus) ? (0, ik.q)(Tk, yk.intervalMillis, 30) : (0, ik.q)(Tk, yk.intervalMillis),
          tk = {
            throttleEndTimeMillis: Date.now() + Xk,
            backoffCount: Tk + 1
          };
        return yk.setThrottleMetadata(ak, tk), xF.debug(`Calling attemptFetch again in ${Xk} millis`), EF(kk, tk, Ik, yk)
      }
    }
    class OF {
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
    let nF, GF;

    function pF(kk) {
      GF = kk
    }

    function uF(kk) {
      nF = kk
    }
    async function bF(kk, Fk, Ik, Xk, Tk, yk, lk) {
      var ak;
      const qk = vF(kk);
      qk.then((Fk => {
        Ik[Fk.measurementId] = Fk.appId, kk.options.measurementId && Fk.measurementId !== kk.options.measurementId && xF.warn(`The measurement ID in the local Firebase config (${kk.options.measurementId}) does not match the measurement ID fetched from the server (${Fk.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((kk => xF.error(kk))), Fk.push(qk);
      const Lk = async function() {
        if (!(0, ik.V)()) return xF.warn(KF.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, ik.gb)()
        } catch (kk) {
          return xF.warn(KF.create("indexeddb-unavailable", {
            errorInfo: null === kk || void 0 === kk ? void 0 : kk.toString()
          }).message), !1
        }
        return !0
      }().then((kk => kk ? Xk.getId() : void 0)), [tk, Zk] = await Promise.all([qk, Lk]);
      (function(kk) {
        const Fk = window.document.getElementsByTagName("script");
        for (const Ik of Object.values(Fk))
          if (Ik.src && Ik.src.includes(JF) && Ik.src.includes(kk)) return Ik;
        return null
      })(yk) || VF(yk, tk.measurementId), GF && (Tk("consent", "default", GF), pF(void 0)), Tk("js", new Date);
      const jk = null !== (ak = null === lk || void 0 === lk ? void 0 : lk.config) && void 0 !== ak ? ak : {};
      return jk.origin = "firebase", jk.update = !0, null != Zk && (jk.firebase_id = Zk), Tk("config", tk.measurementId, jk), nF && (Tk("set", nF), uF(void 0)), tk.measurementId
    }
    class RF {
      constructor(kk) {
        this.app = kk
      }
      _delete() {
        return delete UF[this.app.options.appId], Promise.resolve()
      }
    }
    let UF = {},
      CF = [];
    const NF = {};
    let cF, WF, fF = "dataLayer",
      BF = "gtag",
      dF = !1;

    function YF(kk) {
      if (dF) throw KF.create("already-initialized");
      kk.dataLayerName && (fF = kk.dataLayerName), kk.gtagName && (BF = kk.gtagName)
    }

    function AF(kk, Fk, Ik) {
      ! function() {
        const kk = [];
        if ((0, ik.R)() && kk.push("This is a browser extension environment."), (0, ik.k)() || kk.push("Cookies are not available."), kk.length > 0) {
          const Fk = kk.map(((kk, Fk) => `(${Fk+1}) ${kk}`)).join(" "),
            Ik = KF.create("invalid-analytics-context", {
              errorInfo: Fk
            });
          xF.warn(Ik.message)
        }
      }();
      const Xk = kk.options.appId;
      if (!Xk) throw KF.create("no-app-id");
      if (!kk.options.apiKey) {
        if (!kk.options.measurementId) throw KF.create("no-api-key");
        xF.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${kk.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != UF[Xk]) throw KF.create("already-exists", {
        id: Xk
      });
      if (!dF) {
        ! function(kk) {
          let Fk = [];
          Array.isArray(window[kk]) ? Fk = window[kk] : window[kk] = Fk
        }(fF);
        const {
          wrappedGtag: kk,
          gtagCore: Fk
        } = function(kk, Fk, Ik, Xk, Tk) {
          let ik = function() {
            for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
            window[Xk].push(arguments)
          };
          return window[Tk] && "function" === typeof window[Tk] && (ik = window[Tk]), window[Tk] = zF(ik, kk, Fk, Ik), {
            gtagCore: ik,
            wrappedGtag: window[Tk]
          }
        }(UF, CF, NF, fF, BF);
        WF = kk, cF = Fk, dF = !0
      }
      UF[Xk] = bF(kk, CF, NF, Fk, cF, fF, Ik);
      return new RF(kk)
    }

    function gF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.M)();
      kk = (0, ik.L)(kk);
      const Fk = (0, Xk.A)(kk, HF);
      return Fk.isInitialized() ? Fk.getImmediate() : mF(kk)
    }

    function mF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ik = (0, Xk.A)(kk, HF);
      if (Ik.isInitialized()) {
        const kk = Ik.getImmediate();
        if ((0, ik.y)(Fk, Ik.getOptions())) return kk;
        throw KF.create("already-initialized")
      }
      return Ik.initialize({
        options: Fk
      })
    }
    async function hF() {
      if ((0, ik.R)()) return !1;
      if (!(0, ik.k)()) return !1;
      if (!(0, ik.V)()) return !1;
      try {
        return await (0, ik.gb)()
      } catch (kk) {
        return !1
      }
    }

    function rF(kk, Fk, Ik) {
      kk = (0, ik.L)(kk), async function(kk, Fk, Ik, Xk) {
        if (Xk && Xk.global) return kk("set", {
          screen_name: Ik
        }), Promise.resolve();
        kk("config", await Fk, {
          update: !0,
          screen_name: Ik
        })
      }(WF, UF[kk.app.options.appId], Fk, Ik).catch((kk => xF.error(kk)))
    }
    async function DF(kk) {
      return kk = (0, ik.L)(kk), async function(kk, Fk) {
        const Ik = await Fk;
        return new Promise(((Fk, Xk) => {
          kk("get", Ik, "client_id", (kk => {
            kk || Xk(KF.create("no-client-id")), Fk(kk)
          }))
        }))
      }(WF, UF[kk.app.options.appId])
    }

    function MF(kk, Fk, Ik) {
      kk = (0, ik.L)(kk), async function(kk, Fk, Ik, Xk) {
        if (Xk && Xk.global) return kk("set", {
          user_id: Ik
        }), Promise.resolve();
        kk("config", await Fk, {
          update: !0,
          user_id: Ik
        })
      }(WF, UF[kk.app.options.appId], Fk, Ik).catch((kk => xF.error(kk)))
    }

    function kI(kk, Fk, Ik) {
      kk = (0, ik.L)(kk), async function(kk, Fk, Ik, Xk) {
        if (Xk && Xk.global) {
          const Fk = {};
          for (const kk of Object.keys(Ik)) Fk[`user_properties.${kk}`] = Ik[kk];
          return kk("set", Fk), Promise.resolve()
        }
        kk("config", await Fk, {
          update: !0,
          user_properties: Ik
        })
      }(WF, UF[kk.app.options.appId], Fk, Ik).catch((kk => xF.error(kk)))
    }

    function FI(kk, Fk) {
      kk = (0, ik.L)(kk), async function(kk, Fk) {
        const Ik = await kk;
        window[`ga-disable-${Ik}`] = !Fk
      }(UF[kk.app.options.appId], Fk).catch((kk => xF.error(kk)))
    }

    function II(kk) {
      WF ? WF("set", kk) : uF(kk)
    }

    function XI(kk, Fk, Ik, Xk) {
      kk = (0, ik.L)(kk), async function(kk, Fk, Ik, Xk, Tk) {
        if (Tk && Tk.global) kk("event", Ik, Xk);
        else {
          const Tk = await Fk;
          kk("event", Ik, Object.assign(Object.assign({}, Xk), {
            send_to: Tk
          }))
        }
      }(WF, UF[kk.app.options.appId], Fk, Ik, Xk).catch((kk => xF.error(kk)))
    }

    function TI(kk) {
      WF ? WF("consent", "update", kk) : pF(kk)
    }
    const iI = "@firebase/analytics",
      yI = "0.10.0";
    (0, Xk.C)(new yk.g(HF, ((kk, Fk) => {
      let {
        options: Ik
      } = Fk;
      return AF(kk.getProvider("app").getImmediate(), kk.getProvider("installations-internal").getImmediate(), Ik)
    }), "PUBLIC")), (0, Xk.C)(new yk.g("analytics-internal", (function(kk) {
      try {
        const Fk = kk.getProvider(HF).getImmediate();
        return {
          logEvent: (kk, Ik, Xk) => XI(Fk, kk, Ik, Xk)
        }
      } catch (Fk) {
        throw KF.create("interop-component-reg-failed", {
          reason: Fk
        })
      }
    }), "PRIVATE")), (0, Xk.W)(iI, yI), (0, Xk.W)(iI, yI, "esm2017")
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);