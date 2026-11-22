/*! For license information please see 3lwmg.263.8c2c5304.chunk.js.LICENSE.txt */
export const id = 263;
export const ids = [263];
export const modules = {
  40106: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      getAnalytics: () => Oe,
      getGoogleAnalyticsClientId: () => Re,
      initializeAnalytics: () => ge,
      isSupported: () => Ge,
      logEvent: () => Di,
      setAnalyticsCollectionEnabled: () => ei,
      setConsent: () => fi,
      setCurrentScreen: () => Ne,
      setDefaultEventParameters: () => ii,
      setUserId: () => Je,
      setUserProperties: () => ki,
      settings: () => oe
    });
    var Dk = ik(40078),
      fk = ik(40099),
      Sk = ik(40092),
      bk = ik(40087);
    let rk, Pk;
    const mk = new WeakMap,
      Mk = new WeakMap,
      Kk = new WeakMap,
      xk = new WeakMap,
      nk = new WeakMap;
    let Uk = {
      get(kk, ek, ik) {
        if (kk instanceof IDBTransaction) {
          if ("done" === ek) return Mk.get(kk);
          if ("objectStoreNames" === ek) return kk.objectStoreNames || Kk.get(kk);
          if ("store" === ek) return ik.objectStoreNames[1] ? void 0 : ik.objectStore(ik.objectStoreNames[0])
        }
        return lk(kk[ek])
      },
      set: (kk, ek, ik) => (kk[ek] = ik, !0),
      has: (kk, ek) => kk instanceof IDBTransaction && ("done" === ek || "store" === ek) || ek in kk
    };

    function Hk(kk) {
      return kk !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Pk || (Pk = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(kk) ? function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return kk.apply(pk(this), ik), lk(mk.get(this))
      } : function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return lk(kk.apply(pk(this), ik))
      } : function(ek) {
        for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
        const Sk = kk.call(pk(this), ek, ...Dk);
        return Kk.set(Sk, ek.sort ? ek.sort() : [ek]), lk(Sk)
      }
    }

    function wk(kk) {
      return "function" === typeof kk ? Hk(kk) : (kk instanceof IDBTransaction && function(kk) {
        if (Mk.has(kk)) return;
        const ek = new Promise(((ek, ik) => {
          const Dk = () => {
              kk.removeEventListener("complete", fk), kk.removeEventListener("error", Sk), kk.removeEventListener("abort", Sk)
            },
            fk = () => {
              ek(), Dk()
            },
            Sk = () => {
              ik(kk.error || new DOMException("AbortError", "AbortError")), Dk()
            };
          kk.addEventListener("complete", fk), kk.addEventListener("error", Sk), kk.addEventListener("abort", Sk)
        }));
        Mk.set(kk, ek)
      }(kk), ek = kk, (rk || (rk = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((kk => ek instanceof kk)) ? new Proxy(kk, Uk) : kk);
      var ek
    }

    function lk(kk) {
      if (kk instanceof IDBRequest) return function(kk) {
        const ek = new Promise(((ek, ik) => {
          const Dk = () => {
              kk.removeEventListener("success", fk), kk.removeEventListener("error", Sk)
            },
            fk = () => {
              ek(lk(kk.result)), Dk()
            },
            Sk = () => {
              ik(kk.error), Dk()
            };
          kk.addEventListener("success", fk), kk.addEventListener("error", Sk)
        }));
        return ek.then((ek => {
          ek instanceof IDBCursor && mk.set(ek, kk)
        })).catch((() => {})), nk.set(ek, kk), ek
      }(kk);
      if (xk.has(kk)) return xk.get(kk);
      const ek = wk(kk);
      return ek !== kk && (xk.set(kk, ek), nk.set(ek, kk)), ek
    }
    const pk = kk => nk.get(kk);
    const yk = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Yk = ["put", "add", "delete", "clear"],
      Lk = new Map;

    function Ck(kk, ek) {
      if (!(kk instanceof IDBDatabase) || ek in kk || "string" !== typeof ek) return;
      if (Lk.get(ek)) return Lk.get(ek);
      const ik = ek.replace(/FromIndex$/, ""),
        Dk = ek !== ik,
        fk = Yk.includes(ik);
      if (!(ik in (Dk ? IDBIndex : IDBObjectStore).prototype) || !fk && !yk.includes(ik)) return;
      const Sk = async function(kk) {
        const ek = this.transaction(kk, fk ? "readwrite" : "readonly");
        let Sk = ek.store;
        for (var bk = arguments.length, rk = new Array(bk > 1 ? bk - 1 : 0), Pk = 1; Pk < bk; Pk++) rk[Pk - 1] = arguments[Pk];
        return Dk && (Sk = Sk.index(rk.shift())), (await Promise.all([Sk[ik](...rk), fk && ek.done]))[0]
      };
      return Lk.set(ek, Sk), Sk
    }
    Uk = (kk => ({
      ...kk,
      get: (ek, ik, Dk) => Ck(ek, ik) || kk.get(ek, ik, Dk),
      has: (ek, ik) => !!Ck(ek, ik) || kk.has(ek, ik)
    }))(Uk);
    const Ak = "@firebase/installations",
      jk = "0.6.4",
      sk = 1e4,
      dk = `w:${jk}`,
      Vk = "FIS_v2",
      Fk = 36e5,
      uk = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      qk = new Sk.g("installations", "Installations", uk);

    function Ik(kk) {
      return kk instanceof Sk.j && kk.code.includes("request-failed")
    }

    function zk(kk) {
      let {
        projectId: ek
      } = kk;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${ek}/installations`
    }

    function Qk(kk) {
      return {
        token: kk.token,
        requestStatus: 2,
        expiresIn: (ek = kk.expiresIn, Number(ek.replace("s", "000"))),
        creationTime: Date.now()
      };
      var ek
    }
    async function vk(kk, ek) {
      const ik = (await ek.json()).error;
      return qk.create("request-failed", {
        requestName: kk,
        serverCode: ik.code,
        serverMessage: ik.message,
        serverStatus: ik.status
      })
    }

    function Ek(kk) {
      let {
        apiKey: ek
      } = kk;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": ek
      })
    }

    function hk(kk, ek) {
      let {
        refreshToken: ik
      } = ek;
      const Dk = Ek(kk);
      return Dk.append("Authorization", function(kk) {
        return `${Vk} ${kk}`
      }(ik)), Dk
    }
    async function ak(kk) {
      const ek = await kk();
      return ek.status >= 500 && ek.status < 600 ? kk() : ek
    }

    function Wk(kk) {
      return new Promise((ek => {
        setTimeout(ek, kk)
      }))
    }
    const tk = /^[cdef][\w-]{21}$/;

    function Xk() {
      try {
        const kk = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(kk), kk[0] = 112 + kk[0] % 16;
        const ek = function(kk) {
          const ek = (ik = kk, btoa(String.fromCharCode(...ik)).replace(/\+/g, "-").replace(/\//g, "_"));
          var ik;
          return ek.substr(0, 22)
        }(kk);
        return tk.test(ek) ? ek : ""
      } catch (kk) {
        return ""
      }
    }

    function Bk(kk) {
      return `${kk.appName}!${kk.appId}`
    }
    const ck = new Map;

    function Tk(kk, ek) {
      const ik = Bk(kk);
      Zk(ik, ek),
        function(kk, ek) {
          const ik = gk();
          ik && ik.postMessage({
            key: kk,
            fid: ek
          });
          Gk()
        }(ik, ek)
    }

    function Zk(kk, ek) {
      const ik = ck.get(kk);
      if (ik)
        for (const Dk of ik) Dk(ek)
    }
    let Ok = null;

    function gk() {
      return !Ok && "BroadcastChannel" in self && (Ok = new BroadcastChannel("[Firebase] FID Change"), Ok.onmessage = kk => {
        Zk(kk.data.key, kk.data.fid)
      }), Ok
    }

    function Gk() {
      0 === ck.size && Ok && (Ok.close(), Ok = null)
    }
    const Nk = "firebase-installations-store";
    let Rk = null;

    function Jk() {
      return Rk || (Rk = function(kk, ek) {
        let {
          blocked: ik,
          upgrade: Dk,
          blocking: fk,
          terminated: Sk
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const bk = indexedDB.open(kk, ek),
          rk = lk(bk);
        return Dk && bk.addEventListener("upgradeneeded", (kk => {
          Dk(lk(bk.result), kk.oldVersion, kk.newVersion, lk(bk.transaction))
        })), ik && bk.addEventListener("blocked", (() => ik())), rk.then((kk => {
          Sk && kk.addEventListener("close", (() => Sk())), fk && kk.addEventListener("versionchange", (() => fk()))
        })).catch((() => {})), rk
      }("firebase-installations-database", 1, {
        upgrade: (kk, ek) => {
          if (0 === ek) kk.createObjectStore(Nk)
        }
      })), Rk
    }
    async function ke(kk, ek) {
      const ik = Bk(kk),
        Dk = (await Jk()).transaction(Nk, "readwrite"),
        fk = Dk.objectStore(Nk),
        Sk = await fk.get(ik);
      return await fk.put(ek, ik), await Dk.done, Sk && Sk.fid === ek.fid || Tk(kk, ek.fid), ek
    }
    async function ee(kk) {
      const ek = Bk(kk),
        ik = (await Jk()).transaction(Nk, "readwrite");
      await ik.objectStore(Nk).delete(ek), await ik.done
    }
    async function ie(kk, ek) {
      const ik = Bk(kk),
        Dk = (await Jk()).transaction(Nk, "readwrite"),
        fk = Dk.objectStore(Nk),
        Sk = await fk.get(ik),
        bk = ek(Sk);
      return void 0 === bk ? await fk.delete(ik) : await fk.put(bk, ik), await Dk.done, !bk || Sk && Sk.fid === bk.fid || Tk(kk, bk.fid), bk
    }
    async function De(kk) {
      let ek;
      const ik = await ie(kk.appConfig, (ik => {
        const Dk = function(kk) {
            const ek = kk || {
              fid: Xk(),
              registrationStatus: 0
            };
            return be(ek)
          }(ik),
          fk = function(kk, ek) {
            if (0 === ek.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: ek,
                  registrationPromise: Promise.reject(qk.create("app-offline"))
                }
              }
              const ik = {
                  fid: ek.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Dk = async function(kk, ek) {
                  try {
                    const ik = await async function(kk, ek) {
                      let {
                        appConfig: ik,
                        heartbeatServiceProvider: Dk
                      } = kk, {
                        fid: fk
                      } = ek;
                      const Sk = zk(ik),
                        bk = Ek(ik),
                        rk = Dk.getImmediate({
                          optional: !0
                        });
                      if (rk) {
                        const kk = await rk.getHeartbeatsHeader();
                        kk && bk.append("x-firebase-client", kk)
                      }
                      const Pk = {
                          fid: fk,
                          authVersion: Vk,
                          appId: ik.appId,
                          sdkVersion: dk
                        },
                        mk = {
                          method: "POST",
                          headers: bk,
                          body: JSON.stringify(Pk)
                        },
                        Mk = await ak((() => fetch(Sk, mk)));
                      if (Mk.ok) {
                        const kk = await Mk.json();
                        return {
                          fid: kk.fid || fk,
                          registrationStatus: 2,
                          refreshToken: kk.refreshToken,
                          authToken: Qk(kk.authToken)
                        }
                      }
                      throw await vk("Create Installation", Mk)
                    }(kk, ek);
                    return ke(kk.appConfig, ik)
                  } catch (ik) {
                    throw Ik(ik) && 409 === ik.customData.serverCode ? await ee(kk.appConfig) : await ke(kk.appConfig, {
                      fid: ek.fid,
                      registrationStatus: 0
                    }), ik
                  }
                }(kk, ik);
              return {
                installationEntry: ik,
                registrationPromise: Dk
              }
            }
            return 1 === ek.registrationStatus ? {
              installationEntry: ek,
              registrationPromise: fe(kk)
            } : {
              installationEntry: ek
            }
          }(kk, Dk);
        return ek = fk.registrationPromise, fk.installationEntry
      }));
      return "" === ik.fid ? {
        installationEntry: await ek
      } : {
        installationEntry: ik,
        registrationPromise: ek
      }
    }
    async function fe(kk) {
      let ek = await Se(kk.appConfig);
      for (; 1 === ek.registrationStatus;) await Wk(100), ek = await Se(kk.appConfig);
      if (0 === ek.registrationStatus) {
        const {
          installationEntry: ek,
          registrationPromise: ik
        } = await De(kk);
        return ik || ek
      }
      return ek
    }

    function Se(kk) {
      return ie(kk, (kk => {
        if (!kk) throw qk.create("installation-not-found");
        return be(kk)
      }))
    }

    function be(kk) {
      return 1 === (ek = kk).registrationStatus && ek.registrationTime + sk < Date.now() ? {
        fid: kk.fid,
        registrationStatus: 0
      } : kk;
      var ek
    }
    async function re(kk, ek) {
      let {
        appConfig: ik,
        heartbeatServiceProvider: Dk
      } = kk;
      const fk = function(kk, ek) {
          let {
            fid: ik
          } = ek;
          return `${zk(kk)}/${ik}/authTokens:generate`
        }(ik, ek),
        Sk = hk(ik, ek),
        bk = Dk.getImmediate({
          optional: !0
        });
      if (bk) {
        const kk = await bk.getHeartbeatsHeader();
        kk && Sk.append("x-firebase-client", kk)
      }
      const rk = {
          installation: {
            sdkVersion: dk,
            appId: ik.appId
          }
        },
        Pk = {
          method: "POST",
          headers: Sk,
          body: JSON.stringify(rk)
        },
        mk = await ak((() => fetch(fk, Pk)));
      if (mk.ok) {
        return Qk(await mk.json())
      }
      throw await vk("Generate Auth Token", mk)
    }
    async function Pe(kk) {
      let ek, ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Dk = await ie(kk.appConfig, (Dk => {
        if (!Me(Dk)) throw qk.create("not-registered");
        const fk = Dk.authToken;
        if (!ik && function(kk) {
            return 2 === kk.requestStatus && ! function(kk) {
              const ek = Date.now();
              return ek < kk.creationTime || kk.creationTime + kk.expiresIn < ek + Fk
            }(kk)
          }(fk)) return Dk;
        if (1 === fk.requestStatus) return ek = async function(kk, ek) {
          let ik = await me(kk.appConfig);
          for (; 1 === ik.authToken.requestStatus;) await Wk(100), ik = await me(kk.appConfig);
          const Dk = ik.authToken;
          return 0 === Dk.requestStatus ? Pe(kk, ek) : Dk
        }(kk, ik), Dk;
        {
          if (!navigator.onLine) throw qk.create("app-offline");
          const ik = function(kk) {
            const ek = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, kk), {
              authToken: ek
            })
          }(Dk);
          return ek = async function(kk, ek) {
            try {
              const ik = await re(kk, ek),
                Dk = Object.assign(Object.assign({}, ek), {
                  authToken: ik
                });
              return await ke(kk.appConfig, Dk), ik
            } catch (ik) {
              if (!Ik(ik) || 401 !== ik.customData.serverCode && 404 !== ik.customData.serverCode) {
                const ik = Object.assign(Object.assign({}, ek), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await ke(kk.appConfig, ik)
              } else await ee(kk.appConfig);
              throw ik
            }
          }(kk, ik), ik
        }
      }));
      return ek ? await ek : Dk.authToken
    }

    function me(kk) {
      return ie(kk, (kk => {
        if (!Me(kk)) throw qk.create("not-registered");
        const ek = kk.authToken;
        return 1 === (ik = ek).requestStatus && ik.requestTime + sk < Date.now() ? Object.assign(Object.assign({}, kk), {
          authToken: {
            requestStatus: 0
          }
        }) : kk;
        var ik
      }))
    }

    function Me(kk) {
      return void 0 !== kk && 2 === kk.registrationStatus
    }
    async function Ke(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ik = kk;
      await async function(kk) {
        const {
          registrationPromise: ek
        } = await De(kk);
        ek && await ek
      }(ik);
      return (await Pe(ik, ek)).token
    }

    function xe(kk) {
      return qk.create("missing-app-config-values", {
        valueName: kk
      })
    }
    const ne = "installations",
      Ue = kk => {
        const ek = kk.getProvider("app").getImmediate(),
          ik = function(kk) {
            if (!kk || !kk.options) throw xe("App Configuration");
            if (!kk.name) throw xe("App Name");
            const ek = ["projectId", "apiKey", "appId"];
            for (const ik of ek)
              if (!kk.options[ik]) throw xe(ik);
            return {
              appName: kk.name,
              projectId: kk.options.projectId,
              apiKey: kk.options.apiKey,
              appId: kk.options.appId
            }
          }(ek);
        return {
          app: ek,
          appConfig: ik,
          heartbeatServiceProvider: (0, Dk.z)(ek, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      He = kk => {
        const ek = kk.getProvider("app").getImmediate(),
          ik = (0, Dk.z)(ek, ne).getImmediate();
        return {
          getId: () => async function(kk) {
            const ek = kk,
              {
                installationEntry: ik,
                registrationPromise: Dk
              } = await De(ek);
            return Dk ? Dk.catch(console.error) : Pe(ek).catch(console.error), ik.fid
          }(ik),
          getToken: kk => Ke(ik, kk)
        }
      };
    (0, Dk.B)(new bk.f(ne, Ue, "PUBLIC")), (0, Dk.B)(new bk.f("installations-internal", He, "PRIVATE")), (0, Dk.N)(Ak, jk), (0, Dk.N)(Ak, jk, "esm2017");
    const we = "analytics",
      le = "https://www.googletagmanager.com/gtag/js",
      pe = new fk.g("@firebase/analytics"),
      ye = {
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
      Ye = new Sk.g("analytics", "Analytics", ye);

    function Le(kk) {
      if (!kk.startsWith(le)) {
        const ek = Ye.create("invalid-gtag-resource", {
          gtagURL: kk
        });
        return pe.warn(ek.message), ""
      }
      return kk
    }

    function Ce(kk) {
      return Promise.all(kk.map((kk => kk.catch((kk => kk)))))
    }

    function Ae(kk, ek) {
      const ik = function(kk, ek) {
          let ik;
          return window.trustedTypes && (ik = window.trustedTypes.createPolicy(kk, ek)), ik
        }("firebase-js-sdk-policy", {
          createScriptURL: Le
        }),
        Dk = document.createElement("script"),
        fk = `${le}?l=${kk}&id=${ek}`;
      Dk.src = ik ? null === ik || void 0 === ik ? void 0 : ik.createScriptURL(fk) : fk, Dk.async = !0, document.head.appendChild(Dk)
    }

    function je(kk, ek, ik, Dk) {
      return async function(fk) {
        try {
          for (var Sk = arguments.length, bk = new Array(Sk > 1 ? Sk - 1 : 0), rk = 1; rk < Sk; rk++) bk[rk - 1] = arguments[rk];
          if ("event" === fk) {
            const [Dk, fk] = bk;
            await async function(kk, ek, ik, Dk, fk) {
              try {
                let Sk = [];
                if (fk && fk.send_to) {
                  let kk = fk.send_to;
                  Array.isArray(kk) || (kk = [kk]);
                  const Dk = await Ce(ik);
                  for (const ik of kk) {
                    const kk = Dk.find((kk => kk.measurementId === ik)),
                      fk = kk && ek[kk.appId];
                    if (!fk) {
                      Sk = [];
                      break
                    }
                    Sk.push(fk)
                  }
                }
                0 === Sk.length && (Sk = Object.values(ek)), await Promise.all(Sk), kk("event", Dk, fk || {})
              } catch (Sk) {
                pe.error(Sk)
              }
            }(kk, ek, ik, Dk, fk)
          } else if ("config" === fk) {
            const [fk, Sk] = bk;
            await async function(kk, ek, ik, Dk, fk, Sk) {
              const bk = Dk[fk];
              try {
                if (bk) await ek[bk];
                else {
                  const kk = (await Ce(ik)).find((kk => kk.measurementId === fk));
                  kk && await ek[kk.appId]
                }
              } catch (rk) {
                pe.error(rk)
              }
              kk("config", fk, Sk)
            }(kk, ek, ik, Dk, fk, Sk)
          } else if ("consent" === fk) {
            const [ek] = bk;
            kk("consent", "update", ek)
          } else if ("get" === fk) {
            const [ek, ik, Dk] = bk;
            kk("get", ek, ik, Dk)
          } else if ("set" === fk) {
            const [ek] = bk;
            kk("set", ek)
          } else kk(fk, ...bk)
        } catch (Pk) {
          pe.error(Pk)
        }
      }
    }
    const se = new class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = kk, this.intervalMillis = ek
      }
      getThrottleMetadata(kk) {
        return this.throttleMetadata[kk]
      }
      setThrottleMetadata(kk, ek) {
        this.throttleMetadata[kk] = ek
      }
      deleteThrottleMetadata(kk) {
        delete this.throttleMetadata[kk]
      }
    };

    function de(kk) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": kk
      })
    }
    async function Ve(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se,
        ik = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Dk,
        apiKey: fk,
        measurementId: Sk
      } = kk.options;
      if (!Dk) throw Ye.create("no-app-id");
      if (!fk) {
        if (Sk) return {
          measurementId: Sk,
          appId: Dk
        };
        throw Ye.create("no-api-key")
      }
      const bk = ek.getThrottleMetadata(Dk) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        rk = new ue;
      return setTimeout((async () => {
        rk.abort()
      }), void 0 !== ik ? ik : 6e4), Fe({
        appId: Dk,
        apiKey: fk,
        measurementId: Sk
      }, bk, rk, ek)
    }
    async function Fe(kk, ek, ik) {
      let {
        throttleEndTimeMillis: Dk,
        backoffCount: fk
      } = ek, bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : se;
      var rk;
      const {
        appId: Pk,
        measurementId: mk
      } = kk;
      try {
        await
        function(kk, ek) {
          return new Promise(((ik, Dk) => {
            const fk = Math.max(ek - Date.now(), 0),
              Sk = setTimeout(ik, fk);
            kk.addEventListener((() => {
              clearTimeout(Sk), Dk(Ye.create("fetch-throttle", {
                throttleEndTimeMillis: ek
              }))
            }))
          }))
        }(ik, Dk)
      } catch (Mk) {
        if (mk) return pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${mk} provided in the "measurementId" field in the local Firebase config. [${null===Mk||void 0===Mk?void 0:Mk.message}]`), {
          appId: Pk,
          measurementId: mk
        };
        throw Mk
      }
      try {
        const ek = await async function(kk) {
          var ek;
          const {
            appId: ik,
            apiKey: Dk
          } = kk, fk = {
            method: "GET",
            headers: de(Dk)
          }, Sk = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ik), bk = await fetch(Sk, fk);
          if (200 !== bk.status && 304 !== bk.status) {
            let kk = "";
            try {
              const ik = await bk.json();
              (null === (ek = ik.error) || void 0 === ek ? void 0 : ek.message) && (kk = ik.error.message)
            } catch (rk) {}
            throw Ye.create("config-fetch-failed", {
              httpStatus: bk.status,
              responseMessage: kk
            })
          }
          return bk.json()
        }(kk);
        return bk.deleteThrottleMetadata(Pk), ek
      } catch (Mk) {
        const ek = Mk;
        if (! function(kk) {
            if (!(kk instanceof Sk.j) || !kk.customData) return !1;
            const ek = Number(kk.customData.httpStatus);
            return 429 === ek || 500 === ek || 503 === ek || 504 === ek
          }(ek)) {
          if (bk.deleteThrottleMetadata(Pk), mk) return pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${mk} provided in the "measurementId" field in the local Firebase config. [${null===ek||void 0===ek?void 0:ek.message}]`), {
            appId: Pk,
            measurementId: mk
          };
          throw Mk
        }
        const Dk = 503 === Number(null === (rk = null === ek || void 0 === ek ? void 0 : ek.customData) || void 0 === rk ? void 0 : rk.httpStatus) ? (0, Sk.v)(fk, bk.intervalMillis, 30) : (0, Sk.v)(fk, bk.intervalMillis),
          Kk = {
            throttleEndTimeMillis: Date.now() + Dk,
            backoffCount: fk + 1
          };
        return bk.setThrottleMetadata(Pk, Kk), pe.debug(`Calling attemptFetch again in ${Dk} millis`), Fe(kk, Kk, ik, bk)
      }
    }
    class ue {
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
    let qe, Ie;

    function ze(kk) {
      Ie = kk
    }

    function Qe(kk) {
      qe = kk
    }
    async function ve(kk, ek, ik, Dk, fk, bk, rk) {
      var Pk;
      const mk = Ve(kk);
      mk.then((ek => {
        ik[ek.measurementId] = ek.appId, kk.options.measurementId && ek.measurementId !== kk.options.measurementId && pe.warn(`The measurement ID in the local Firebase config (${kk.options.measurementId}) does not match the measurement ID fetched from the server (${ek.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((kk => pe.error(kk))), ek.push(mk);
      const Mk = async function() {
        if (!(0, Sk.cb)()) return pe.warn(Ye.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Sk.rb)()
        } catch (kk) {
          return pe.warn(Ye.create("indexeddb-unavailable", {
            errorInfo: null === kk || void 0 === kk ? void 0 : kk.toString()
          }).message), !1
        }
        return !0
      }().then((kk => kk ? Dk.getId() : void 0)), [Kk, xk] = await Promise.all([mk, Mk]);
      (function(kk) {
        const ek = window.document.getElementsByTagName("script");
        for (const ik of Object.values(ek))
          if (ik.src && ik.src.includes(le) && ik.src.includes(kk)) return ik;
        return null
      })(bk) || Ae(bk, Kk.measurementId), Ie && (fk("consent", "default", Ie), ze(void 0)), fk("js", new Date);
      const nk = null !== (Pk = null === rk || void 0 === rk ? void 0 : rk.config) && void 0 !== Pk ? Pk : {};
      return nk.origin = "firebase", nk.update = !0, null != xk && (nk.firebase_id = xk), fk("config", Kk.measurementId, nk), qe && (fk("set", qe), Qe(void 0)), Kk.measurementId
    }
    class Ee {
      constructor(kk) {
        this.app = kk
      }
      _delete() {
        return delete he[this.app.options.appId], Promise.resolve()
      }
    }
    let he = {},
      ae = [];
    const We = {};
    let te, Xe, Be = "dataLayer",
      ce = "gtag",
      Te = !1;

    function oe(kk) {
      if (Te) throw Ye.create("already-initialized");
      kk.dataLayerName && (Be = kk.dataLayerName), kk.gtagName && (ce = kk.gtagName)
    }

    function Ze(kk, ek, ik) {
      ! function() {
        const kk = [];
        if ((0, Sk.W)() && kk.push("This is a browser extension environment."), (0, Sk.n)() || kk.push("Cookies are not available."), kk.length > 0) {
          const ek = kk.map(((kk, ek) => `(${ek+1}) ${kk}`)).join(" "),
            ik = Ye.create("invalid-analytics-context", {
              errorInfo: ek
            });
          pe.warn(ik.message)
        }
      }();
      const Dk = kk.options.appId;
      if (!Dk) throw Ye.create("no-app-id");
      if (!kk.options.apiKey) {
        if (!kk.options.measurementId) throw Ye.create("no-api-key");
        pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${kk.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != he[Dk]) throw Ye.create("already-exists", {
        id: Dk
      });
      if (!Te) {
        ! function(kk) {
          let ek = [];
          Array.isArray(window[kk]) ? ek = window[kk] : window[kk] = ek
        }(Be);
        const {
          wrappedGtag: kk,
          gtagCore: ek
        } = function(kk, ek, ik, Dk, fk) {
          let Sk = function() {
            for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
            window[Dk].push(arguments)
          };
          return window[fk] && "function" === typeof window[fk] && (Sk = window[fk]), window[fk] = je(Sk, kk, ek, ik), {
            gtagCore: Sk,
            wrappedGtag: window[fk]
          }
        }(he, ae, We, Be, ce);
        Xe = kk, te = ek, Te = !0
      }
      he[Dk] = ve(kk, ae, We, ek, te, Be, ik);
      return new Ee(kk)
    }

    function Oe() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.H)();
      kk = (0, Sk.Q)(kk);
      const ek = (0, Dk.z)(kk, we);
      return ek.isInitialized() ? ek.getImmediate() : ge(kk)
    }

    function ge(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ik = (0, Dk.z)(kk, we);
      if (ik.isInitialized()) {
        const kk = ik.getImmediate();
        if ((0, Sk.C)(ek, ik.getOptions())) return kk;
        throw Ye.create("already-initialized")
      }
      return ik.initialize({
        options: ek
      })
    }
    async function Ge() {
      if ((0, Sk.W)()) return !1;
      if (!(0, Sk.n)()) return !1;
      if (!(0, Sk.cb)()) return !1;
      try {
        return await (0, Sk.rb)()
      } catch (kk) {
        return !1
      }
    }

    function Ne(kk, ek, ik) {
      kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk) {
        if (Dk && Dk.global) return kk("set", {
          screen_name: ik
        }), Promise.resolve();
        kk("config", await ek, {
          update: !0,
          screen_name: ik
        })
      }(Xe, he[kk.app.options.appId], ek, ik).catch((kk => pe.error(kk)))
    }
    async function Re(kk) {
      return kk = (0, Sk.Q)(kk), async function(kk, ek) {
        const ik = await ek;
        return new Promise(((ek, Dk) => {
          kk("get", ik, "client_id", (kk => {
            kk || Dk(Ye.create("no-client-id")), ek(kk)
          }))
        }))
      }(Xe, he[kk.app.options.appId])
    }

    function Je(kk, ek, ik) {
      kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk) {
        if (Dk && Dk.global) return kk("set", {
          user_id: ik
        }), Promise.resolve();
        kk("config", await ek, {
          update: !0,
          user_id: ik
        })
      }(Xe, he[kk.app.options.appId], ek, ik).catch((kk => pe.error(kk)))
    }

    function ki(kk, ek, ik) {
      kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk) {
        if (Dk && Dk.global) {
          const ek = {};
          for (const kk of Object.keys(ik)) ek[`user_properties.${kk}`] = ik[kk];
          return kk("set", ek), Promise.resolve()
        }
        kk("config", await ek, {
          update: !0,
          user_properties: ik
        })
      }(Xe, he[kk.app.options.appId], ek, ik).catch((kk => pe.error(kk)))
    }

    function ei(kk, ek) {
      kk = (0, Sk.Q)(kk), async function(kk, ek) {
        const ik = await kk;
        window[`ga-disable-${ik}`] = !ek
      }(he[kk.app.options.appId], ek).catch((kk => pe.error(kk)))
    }

    function ii(kk) {
      Xe ? Xe("set", kk) : Qe(kk)
    }

    function Di(kk, ek, ik, Dk) {
      kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk, fk) {
        if (fk && fk.global) kk("event", ik, Dk);
        else {
          const fk = await ek;
          kk("event", ik, Object.assign(Object.assign({}, Dk), {
            send_to: fk
          }))
        }
      }(Xe, he[kk.app.options.appId], ek, ik, Dk).catch((kk => pe.error(kk)))
    }

    function fi(kk) {
      Xe ? Xe("consent", "update", kk) : ze(kk)
    }
    const Si = "@firebase/analytics",
      bi = "0.10.0";
    (0, Dk.B)(new bk.f(we, ((kk, ek) => {
      let {
        options: ik
      } = ek;
      return Ze(kk.getProvider("app").getImmediate(), kk.getProvider("installations-internal").getImmediate(), ik)
    }), "PUBLIC")), (0, Dk.B)(new bk.f("analytics-internal", (function(kk) {
      try {
        const ek = kk.getProvider(we).getImmediate();
        return {
          logEvent: (kk, ik, Dk) => Di(ek, kk, ik, Dk)
        }
      } catch (ek) {
        throw Ye.create("interop-component-reg-failed", {
          reason: ek
        })
      }
    }), "PRIVATE")), (0, Dk.N)(Si, bi), (0, Dk.N)(Si, bi, "esm2017")
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);