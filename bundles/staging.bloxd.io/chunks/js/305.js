/*! For license information please see fl4vv.305.a3321cc1.chunk.js.LICENSE.txt */
export const id = 305;
export const ids = [305];
export const modules = {
  42380: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      getAnalytics: () => oS,
      getGoogleAnalyticsClientId: () => dS,
      initializeAnalytics: () => bS,
      isSupported: () => JS,
      logEvent: () => QQ,
      setAnalyticsCollectionEnabled: () => rQ,
      setConsent: () => ZQ,
      setCurrentScreen: () => DS,
      setDefaultEventParameters: () => SQ,
      setUserId: () => sS,
      setUserProperties: () => uS,
      settings: () => cS
    });
    var Zr = Qr(42350),
      Wr = Qr(42375),
      ar = Qr(42366),
      jr = Qr(42359);
    let Ir, fr;
    const Er = new WeakMap,
      pr = new WeakMap,
      xr = new WeakMap,
      mr = new WeakMap,
      Nr = new WeakMap;
    let Ur = {
      get(rr, Sr, Qr) {
        if (rr instanceof IDBTransaction) {
          if ("done" === Sr) return pr.get(rr);
          if ("objectStoreNames" === Sr) return rr.objectStoreNames || xr.get(rr);
          if ("store" === Sr) return Qr.objectStoreNames[1] ? void 0 : Qr.objectStore(Qr.objectStoreNames[0])
        }
        return zr(rr[Sr])
      },
      set: (rr, Sr, Qr) => (rr[Sr] = Qr, !0),
      has: (rr, Sr) => rr instanceof IDBTransaction && ("done" === Sr || "store" === Sr) || Sr in rr
    };

    function tr(rr) {
      return rr !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (fr || (fr = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(rr) ? function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return rr.apply(Yr(this), Qr), zr(Er.get(this))
      } : function() {
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return zr(rr.apply(Yr(this), Qr))
      } : function(Sr) {
        for (var Qr = arguments.length, Zr = new Array(Qr > 1 ? Qr - 1 : 0), Wr = 1; Wr < Qr; Wr++) Zr[Wr - 1] = arguments[Wr];
        const ar = rr.call(Yr(this), Sr, ...Zr);
        return xr.set(ar, Sr.sort ? Sr.sort() : [Sr]), zr(ar)
      }
    }

    function hr(rr) {
      return "function" === typeof rr ? tr(rr) : (rr instanceof IDBTransaction && function(rr) {
        if (pr.has(rr)) return;
        const Sr = new Promise(((Sr, Qr) => {
          const Zr = () => {
              rr.removeEventListener("complete", Wr), rr.removeEventListener("error", ar), rr.removeEventListener("abort", ar)
            },
            Wr = () => {
              Sr(), Zr()
            },
            ar = () => {
              Qr(rr.error || new DOMException("AbortError", "AbortError")), Zr()
            };
          rr.addEventListener("complete", Wr), rr.addEventListener("error", ar), rr.addEventListener("abort", ar)
        }));
        pr.set(rr, Sr)
      }(rr), Sr = rr, (Ir || (Ir = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((rr => Sr instanceof rr)) ? new Proxy(rr, Ur) : rr);
      var Sr
    }

    function zr(rr) {
      if (rr instanceof IDBRequest) return function(rr) {
        const Sr = new Promise(((Sr, Qr) => {
          const Zr = () => {
              rr.removeEventListener("success", Wr), rr.removeEventListener("error", ar)
            },
            Wr = () => {
              Sr(zr(rr.result)), Zr()
            },
            ar = () => {
              Qr(rr.error), Zr()
            };
          rr.addEventListener("success", Wr), rr.addEventListener("error", ar)
        }));
        return Sr.then((Sr => {
          Sr instanceof IDBCursor && Er.set(Sr, rr)
        })).catch((() => {})), Nr.set(Sr, rr), Sr
      }(rr);
      if (mr.has(rr)) return mr.get(rr);
      const Sr = hr(rr);
      return Sr !== rr && (mr.set(rr, Sr), Nr.set(Sr, rr)), Sr
    }
    const Yr = rr => Nr.get(rr);
    const nr = ["get", "getKey", "getAll", "getAllKeys", "count"],
      er = ["put", "add", "delete", "clear"],
      Kr = new Map;

    function yr(rr, Sr) {
      if (!(rr instanceof IDBDatabase) || Sr in rr || "string" !== typeof Sr) return;
      if (Kr.get(Sr)) return Kr.get(Sr);
      const Qr = Sr.replace(/FromIndex$/, ""),
        Zr = Sr !== Qr,
        Wr = er.includes(Qr);
      if (!(Qr in (Zr ? IDBIndex : IDBObjectStore).prototype) || !Wr && !nr.includes(Qr)) return;
      const ar = async function(rr) {
        const Sr = this.transaction(rr, Wr ? "readwrite" : "readonly");
        let ar = Sr.store;
        for (var jr = arguments.length, Ir = new Array(jr > 1 ? jr - 1 : 0), fr = 1; fr < jr; fr++) Ir[fr - 1] = arguments[fr];
        return Zr && (ar = ar.index(Ir.shift())), (await Promise.all([ar[Qr](...Ir), Wr && Sr.done]))[0]
      };
      return Kr.set(Sr, ar), ar
    }
    Ur = (rr => ({
      ...rr,
      get: (Sr, Qr, Zr) => yr(Sr, Qr) || rr.get(Sr, Qr, Zr),
      has: (Sr, Qr) => !!yr(Sr, Qr) || rr.has(Sr, Qr)
    }))(Ur);
    const Br = "@firebase/installations",
      Tr = "0.6.4",
      vr = 1e4,
      Or = `w:${Tr}`,
      Lr = "FIS_v2",
      lr = 36e5,
      Xr = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Pr = new ar.g("installations", "Installations", Xr);

    function Hr(rr) {
      return rr instanceof ar.k && rr.code.includes("request-failed")
    }

    function qr(rr) {
      let {
        projectId: Sr
      } = rr;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Sr}/installations`
    }

    function Rr(rr) {
      return {
        token: rr.token,
        requestStatus: 2,
        expiresIn: (Sr = rr.expiresIn, Number(Sr.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Sr
    }
    async function gr(rr, Sr) {
      const Qr = (await Sr.json()).error;
      return Pr.create("request-failed", {
        requestName: rr,
        serverCode: Qr.code,
        serverMessage: Qr.message,
        serverStatus: Qr.status
      })
    }

    function Cr(rr) {
      let {
        apiKey: Sr
      } = rr;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Sr
      })
    }

    function Mr(rr, Sr) {
      let {
        refreshToken: Qr
      } = Sr;
      const Zr = Cr(rr);
      return Zr.append("Authorization", function(rr) {
        return `${Lr} ${rr}`
      }(Qr)), Zr
    }
    async function Gr(rr) {
      const Sr = await rr();
      return Sr.status >= 500 && Sr.status < 600 ? rr() : Sr
    }

    function kr(rr) {
      return new Promise((Sr => {
        setTimeout(Sr, rr)
      }))
    }
    const Ar = /^[cdef][\w-]{21}$/;

    function Vr() {
      try {
        const rr = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(rr), rr[0] = 112 + rr[0] % 16;
        const Sr = function(rr) {
          const Sr = (Qr = rr, btoa(String.fromCharCode(...Qr)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Qr;
          return Sr.substr(0, 22)
        }(rr);
        return Ar.test(Sr) ? Sr : ""
      } catch (rr) {
        return ""
      }
    }

    function ir(rr) {
      return `${rr.appName}!${rr.appId}`
    }
    const wr = new Map;

    function cr(rr, Sr) {
      const Qr = ir(rr);
      Fr(Qr, Sr),
        function(rr, Sr) {
          const Qr = br();
          Qr && Qr.postMessage({
            key: rr,
            fid: Sr
          });
          Jr()
        }(Qr, Sr)
    }

    function Fr(rr, Sr) {
      const Qr = wr.get(rr);
      if (Qr)
        for (const Zr of Qr) Zr(Sr)
    }
    let or = null;

    function br() {
      return !or && "BroadcastChannel" in self && (or = new BroadcastChannel("[Firebase] FID Change"), or.onmessage = rr => {
        Fr(rr.data.key, rr.data.fid)
      }), or
    }

    function Jr() {
      0 === wr.size && or && (or.close(), or = null)
    }
    const Dr = "firebase-installations-store";
    let dr = null;

    function sr() {
      return dr || (dr = function(rr, Sr) {
        let {
          blocked: Qr,
          upgrade: Zr,
          blocking: Wr,
          terminated: ar
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const jr = indexedDB.open(rr, Sr),
          Ir = zr(jr);
        return Zr && jr.addEventListener("upgradeneeded", (rr => {
          Zr(zr(jr.result), rr.oldVersion, rr.newVersion, zr(jr.transaction))
        })), Qr && jr.addEventListener("blocked", (() => Qr())), Ir.then((rr => {
          ar && rr.addEventListener("close", (() => ar())), Wr && rr.addEventListener("versionchange", (() => Wr()))
        })).catch((() => {})), Ir
      }("firebase-installations-database", 1, {
        upgrade: (rr, Sr) => {
          if (0 === Sr) rr.createObjectStore(Dr)
        }
      })), dr
    }
    async function ur(rr, Sr) {
      const Qr = ir(rr),
        Zr = (await sr()).transaction(Dr, "readwrite"),
        Wr = Zr.objectStore(Dr),
        ar = await Wr.get(Qr);
      return await Wr.put(Sr, Qr), await Zr.done, ar && ar.fid === Sr.fid || cr(rr, Sr.fid), Sr
    }
    async function rS(rr) {
      const Sr = ir(rr),
        Qr = (await sr()).transaction(Dr, "readwrite");
      await Qr.objectStore(Dr).delete(Sr), await Qr.done
    }
    async function SS(rr, Sr) {
      const Qr = ir(rr),
        Zr = (await sr()).transaction(Dr, "readwrite"),
        Wr = Zr.objectStore(Dr),
        ar = await Wr.get(Qr),
        jr = Sr(ar);
      return void 0 === jr ? await Wr.delete(Qr) : await Wr.put(jr, Qr), await Zr.done, !jr || ar && ar.fid === jr.fid || cr(rr, jr.fid), jr
    }
    async function QS(rr) {
      let Sr;
      const Qr = await SS(rr.appConfig, (Qr => {
        const Zr = function(rr) {
            const Sr = rr || {
              fid: Vr(),
              registrationStatus: 0
            };
            return aS(Sr)
          }(Qr),
          Wr = function(rr, Sr) {
            if (0 === Sr.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Sr,
                  registrationPromise: Promise.reject(Pr.create("app-offline"))
                }
              }
              const Qr = {
                  fid: Sr.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Zr = async function(rr, Sr) {
                  try {
                    const Qr = await async function(rr, Sr) {
                      let {
                        appConfig: Qr,
                        heartbeatServiceProvider: Zr
                      } = rr, {
                        fid: Wr
                      } = Sr;
                      const ar = qr(Qr),
                        jr = Cr(Qr),
                        Ir = Zr.getImmediate({
                          optional: !0
                        });
                      if (Ir) {
                        const rr = await Ir.getHeartbeatsHeader();
                        rr && jr.append("x-firebase-client", rr)
                      }
                      const fr = {
                          fid: Wr,
                          authVersion: Lr,
                          appId: Qr.appId,
                          sdkVersion: Or
                        },
                        Er = {
                          method: "POST",
                          headers: jr,
                          body: JSON.stringify(fr)
                        },
                        pr = await Gr((() => fetch(ar, Er)));
                      if (pr.ok) {
                        const rr = await pr.json();
                        return {
                          fid: rr.fid || Wr,
                          registrationStatus: 2,
                          refreshToken: rr.refreshToken,
                          authToken: Rr(rr.authToken)
                        }
                      }
                      throw await gr("Create Installation", pr)
                    }(rr, Sr);
                    return ur(rr.appConfig, Qr)
                  } catch (Qr) {
                    throw Hr(Qr) && 409 === Qr.customData.serverCode ? await rS(rr.appConfig) : await ur(rr.appConfig, {
                      fid: Sr.fid,
                      registrationStatus: 0
                    }), Qr
                  }
                }(rr, Qr);
              return {
                installationEntry: Qr,
                registrationPromise: Zr
              }
            }
            return 1 === Sr.registrationStatus ? {
              installationEntry: Sr,
              registrationPromise: ZS(rr)
            } : {
              installationEntry: Sr
            }
          }(rr, Zr);
        return Sr = Wr.registrationPromise, Wr.installationEntry
      }));
      return "" === Qr.fid ? {
        installationEntry: await Sr
      } : {
        installationEntry: Qr,
        registrationPromise: Sr
      }
    }
    async function ZS(rr) {
      let Sr = await WS(rr.appConfig);
      for (; 1 === Sr.registrationStatus;) await kr(100), Sr = await WS(rr.appConfig);
      if (0 === Sr.registrationStatus) {
        const {
          installationEntry: Sr,
          registrationPromise: Qr
        } = await QS(rr);
        return Qr || Sr
      }
      return Sr
    }

    function WS(rr) {
      return SS(rr, (rr => {
        if (!rr) throw Pr.create("installation-not-found");
        return aS(rr)
      }))
    }

    function aS(rr) {
      return 1 === (Sr = rr).registrationStatus && Sr.registrationTime + vr < Date.now() ? {
        fid: rr.fid,
        registrationStatus: 0
      } : rr;
      var Sr
    }
    async function jS(rr, Sr) {
      let {
        appConfig: Qr,
        heartbeatServiceProvider: Zr
      } = rr;
      const Wr = function(rr, Sr) {
          let {
            fid: Qr
          } = Sr;
          return `${qr(rr)}/${Qr}/authTokens:generate`
        }(Qr, Sr),
        ar = Mr(Qr, Sr),
        jr = Zr.getImmediate({
          optional: !0
        });
      if (jr) {
        const rr = await jr.getHeartbeatsHeader();
        rr && ar.append("x-firebase-client", rr)
      }
      const Ir = {
          installation: {
            sdkVersion: Or,
            appId: Qr.appId
          }
        },
        fr = {
          method: "POST",
          headers: ar,
          body: JSON.stringify(Ir)
        },
        Er = await Gr((() => fetch(Wr, fr)));
      if (Er.ok) {
        return Rr(await Er.json())
      }
      throw await gr("Generate Auth Token", Er)
    }
    async function IS(rr) {
      let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Zr = await SS(rr.appConfig, (Zr => {
        if (!ES(Zr)) throw Pr.create("not-registered");
        const Wr = Zr.authToken;
        if (!Qr && function(rr) {
            return 2 === rr.requestStatus && ! function(rr) {
              const Sr = Date.now();
              return Sr < rr.creationTime || rr.creationTime + rr.expiresIn < Sr + lr
            }(rr)
          }(Wr)) return Zr;
        if (1 === Wr.requestStatus) return Sr = async function(rr, Sr) {
          let Qr = await fS(rr.appConfig);
          for (; 1 === Qr.authToken.requestStatus;) await kr(100), Qr = await fS(rr.appConfig);
          const Zr = Qr.authToken;
          return 0 === Zr.requestStatus ? IS(rr, Sr) : Zr
        }(rr, Qr), Zr;
        {
          if (!navigator.onLine) throw Pr.create("app-offline");
          const Qr = function(rr) {
            const Sr = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, rr), {
              authToken: Sr
            })
          }(Zr);
          return Sr = async function(rr, Sr) {
            try {
              const Qr = await jS(rr, Sr),
                Zr = Object.assign(Object.assign({}, Sr), {
                  authToken: Qr
                });
              return await ur(rr.appConfig, Zr), Qr
            } catch (Qr) {
              if (!Hr(Qr) || 401 !== Qr.customData.serverCode && 404 !== Qr.customData.serverCode) {
                const Qr = Object.assign(Object.assign({}, Sr), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await ur(rr.appConfig, Qr)
              } else await rS(rr.appConfig);
              throw Qr
            }
          }(rr, Qr), Qr
        }
      }));
      return Sr ? await Sr : Zr.authToken
    }

    function fS(rr) {
      return SS(rr, (rr => {
        if (!ES(rr)) throw Pr.create("not-registered");
        const Sr = rr.authToken;
        return 1 === (Qr = Sr).requestStatus && Qr.requestTime + vr < Date.now() ? Object.assign(Object.assign({}, rr), {
          authToken: {
            requestStatus: 0
          }
        }) : rr;
        var Qr
      }))
    }

    function ES(rr) {
      return void 0 !== rr && 2 === rr.registrationStatus
    }
    async function pS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Qr = rr;
      await async function(rr) {
        const {
          registrationPromise: Sr
        } = await QS(rr);
        Sr && await Sr
      }(Qr);
      return (await IS(Qr, Sr)).token
    }

    function xS(rr) {
      return Pr.create("missing-app-config-values", {
        valueName: rr
      })
    }
    const mS = "installations",
      NS = rr => {
        const Sr = rr.getProvider("app").getImmediate(),
          Qr = function(rr) {
            if (!rr || !rr.options) throw xS("App Configuration");
            if (!rr.name) throw xS("App Name");
            const Sr = ["projectId", "apiKey", "appId"];
            for (const Qr of Sr)
              if (!rr.options[Qr]) throw xS(Qr);
            return {
              appName: rr.name,
              projectId: rr.options.projectId,
              apiKey: rr.options.apiKey,
              appId: rr.options.appId
            }
          }(Sr);
        return {
          app: Sr,
          appConfig: Qr,
          heartbeatServiceProvider: (0, Zr.A)(Sr, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      US = rr => {
        const Sr = rr.getProvider("app").getImmediate(),
          Qr = (0, Zr.A)(Sr, mS).getImmediate();
        return {
          getId: () => async function(rr) {
            const Sr = rr,
              {
                installationEntry: Qr,
                registrationPromise: Zr
              } = await QS(Sr);
            return Zr ? Zr.catch(console.error) : IS(Sr).catch(console.error), Qr.fid
          }(Qr),
          getToken: rr => pS(Qr, rr)
        }
      };
    (0, Zr.E)(new jr.f(mS, NS, "PUBLIC")), (0, Zr.E)(new jr.f("installations-internal", US, "PRIVATE")), (0, Zr.X)(Br, Tr), (0, Zr.X)(Br, Tr, "esm2017");
    const tS = "analytics",
      hS = "https://www.googletagmanager.com/gtag/js",
      zS = new Wr.d("@firebase/analytics"),
      YS = {
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
      nS = new ar.g("analytics", "Analytics", YS);

    function eS(rr) {
      if (!rr.startsWith(hS)) {
        const Sr = nS.create("invalid-gtag-resource", {
          gtagURL: rr
        });
        return zS.warn(Sr.message), ""
      }
      return rr
    }

    function KS(rr) {
      return Promise.all(rr.map((rr => rr.catch((rr => rr)))))
    }

    function yS(rr, Sr) {
      const Qr = function(rr, Sr) {
          let Qr;
          return window.trustedTypes && (Qr = window.trustedTypes.createPolicy(rr, Sr)), Qr
        }("firebase-js-sdk-policy", {
          createScriptURL: eS
        }),
        Zr = document.createElement("script"),
        Wr = `${hS}?l=${rr}&id=${Sr}`;
      Zr.src = Qr ? null === Qr || void 0 === Qr ? void 0 : Qr.createScriptURL(Wr) : Wr, Zr.async = !0, document.head.appendChild(Zr)
    }

    function BS(rr, Sr, Qr, Zr) {
      return async function(Wr) {
        try {
          for (var ar = arguments.length, jr = new Array(ar > 1 ? ar - 1 : 0), Ir = 1; Ir < ar; Ir++) jr[Ir - 1] = arguments[Ir];
          if ("event" === Wr) {
            const [Zr, Wr] = jr;
            await async function(rr, Sr, Qr, Zr, Wr) {
              try {
                let ar = [];
                if (Wr && Wr.send_to) {
                  let rr = Wr.send_to;
                  Array.isArray(rr) || (rr = [rr]);
                  const Zr = await KS(Qr);
                  for (const Qr of rr) {
                    const rr = Zr.find((rr => rr.measurementId === Qr)),
                      Wr = rr && Sr[rr.appId];
                    if (!Wr) {
                      ar = [];
                      break
                    }
                    ar.push(Wr)
                  }
                }
                0 === ar.length && (ar = Object.values(Sr)), await Promise.all(ar), rr("event", Zr, Wr || {})
              } catch (ar) {
                zS.error(ar)
              }
            }(rr, Sr, Qr, Zr, Wr)
          } else if ("config" === Wr) {
            const [Wr, ar] = jr;
            await async function(rr, Sr, Qr, Zr, Wr, ar) {
              const jr = Zr[Wr];
              try {
                if (jr) await Sr[jr];
                else {
                  const rr = (await KS(Qr)).find((rr => rr.measurementId === Wr));
                  rr && await Sr[rr.appId]
                }
              } catch (Ir) {
                zS.error(Ir)
              }
              rr("config", Wr, ar)
            }(rr, Sr, Qr, Zr, Wr, ar)
          } else if ("consent" === Wr) {
            const [Sr] = jr;
            rr("consent", "update", Sr)
          } else if ("get" === Wr) {
            const [Sr, Qr, Zr] = jr;
            rr("get", Sr, Qr, Zr)
          } else if ("set" === Wr) {
            const [Sr] = jr;
            rr("set", Sr)
          } else rr(Wr, ...jr)
        } catch (fr) {
          zS.error(fr)
        }
      }
    }
    const TS = new class {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = rr, this.intervalMillis = Sr
      }
      getThrottleMetadata(rr) {
        return this.throttleMetadata[rr]
      }
      setThrottleMetadata(rr, Sr) {
        this.throttleMetadata[rr] = Sr
      }
      deleteThrottleMetadata(rr) {
        delete this.throttleMetadata[rr]
      }
    };

    function vS(rr) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": rr
      })
    }
    async function OS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TS,
        Qr = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Zr,
        apiKey: Wr,
        measurementId: ar
      } = rr.options;
      if (!Zr) throw nS.create("no-app-id");
      if (!Wr) {
        if (ar) return {
          measurementId: ar,
          appId: Zr
        };
        throw nS.create("no-api-key")
      }
      const jr = Sr.getThrottleMetadata(Zr) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Ir = new lS;
      return setTimeout((async () => {
        Ir.abort()
      }), void 0 !== Qr ? Qr : 6e4), LS({
        appId: Zr,
        apiKey: Wr,
        measurementId: ar
      }, jr, Ir, Sr)
    }
    async function LS(rr, Sr, Qr) {
      let {
        throttleEndTimeMillis: Zr,
        backoffCount: Wr
      } = Sr, jr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TS;
      var Ir;
      const {
        appId: fr,
        measurementId: Er
      } = rr;
      try {
        await
        function(rr, Sr) {
          return new Promise(((Qr, Zr) => {
            const Wr = Math.max(Sr - Date.now(), 0),
              ar = setTimeout(Qr, Wr);
            rr.addEventListener((() => {
              clearTimeout(ar), Zr(nS.create("fetch-throttle", {
                throttleEndTimeMillis: Sr
              }))
            }))
          }))
        }(Qr, Zr)
      } catch (pr) {
        if (Er) return zS.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Er} provided in the "measurementId" field in the local Firebase config. [${null===pr||void 0===pr?void 0:pr.message}]`), {
          appId: fr,
          measurementId: Er
        };
        throw pr
      }
      try {
        const Sr = await async function(rr) {
          var Sr;
          const {
            appId: Qr,
            apiKey: Zr
          } = rr, Wr = {
            method: "GET",
            headers: vS(Zr)
          }, ar = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Qr), jr = await fetch(ar, Wr);
          if (200 !== jr.status && 304 !== jr.status) {
            let rr = "";
            try {
              const Qr = await jr.json();
              (null === (Sr = Qr.error) || void 0 === Sr ? void 0 : Sr.message) && (rr = Qr.error.message)
            } catch (Ir) {}
            throw nS.create("config-fetch-failed", {
              httpStatus: jr.status,
              responseMessage: rr
            })
          }
          return jr.json()
        }(rr);
        return jr.deleteThrottleMetadata(fr), Sr
      } catch (pr) {
        const Sr = pr;
        if (! function(rr) {
            if (!(rr instanceof ar.k) || !rr.customData) return !1;
            const Sr = Number(rr.customData.httpStatus);
            return 429 === Sr || 500 === Sr || 503 === Sr || 504 === Sr
          }(Sr)) {
          if (jr.deleteThrottleMetadata(fr), Er) return zS.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Er} provided in the "measurementId" field in the local Firebase config. [${null===Sr||void 0===Sr?void 0:Sr.message}]`), {
            appId: fr,
            measurementId: Er
          };
          throw pr
        }
        const Zr = 503 === Number(null === (Ir = null === Sr || void 0 === Sr ? void 0 : Sr.customData) || void 0 === Ir ? void 0 : Ir.httpStatus) ? (0, ar.z)(Wr, jr.intervalMillis, 30) : (0, ar.z)(Wr, jr.intervalMillis),
          xr = {
            throttleEndTimeMillis: Date.now() + Zr,
            backoffCount: Wr + 1
          };
        return jr.setThrottleMetadata(fr, xr), zS.debug(`Calling attemptFetch again in ${Zr} millis`), LS(rr, xr, Qr, jr)
      }
    }
    class lS {
      constructor() {
        this.listeners = []
      }
      addEventListener(rr) {
        this.listeners.push(rr)
      }
      abort() {
        this.listeners.forEach((rr => rr()))
      }
    }
    let XS, PS;

    function HS(rr) {
      PS = rr
    }

    function qS(rr) {
      XS = rr
    }
    async function RS(rr, Sr, Qr, Zr, Wr, jr, Ir) {
      var fr;
      const Er = OS(rr);
      Er.then((Sr => {
        Qr[Sr.measurementId] = Sr.appId, rr.options.measurementId && Sr.measurementId !== rr.options.measurementId && zS.warn(`The measurement ID in the local Firebase config (${rr.options.measurementId}) does not match the measurement ID fetched from the server (${Sr.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((rr => zS.error(rr))), Sr.push(Er);
      const pr = async function() {
        if (!(0, ar.cb)()) return zS.warn(nS.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, ar.lb)()
        } catch (rr) {
          return zS.warn(nS.create("indexeddb-unavailable", {
            errorInfo: null === rr || void 0 === rr ? void 0 : rr.toString()
          }).message), !1
        }
        return !0
      }().then((rr => rr ? Zr.getId() : void 0)), [xr, mr] = await Promise.all([Er, pr]);
      (function(rr) {
        const Sr = window.document.getElementsByTagName("script");
        for (const Qr of Object.values(Sr))
          if (Qr.src && Qr.src.includes(hS) && Qr.src.includes(rr)) return Qr;
        return null
      })(jr) || yS(jr, xr.measurementId), PS && (Wr("consent", "default", PS), HS(void 0)), Wr("js", new Date);
      const Nr = null !== (fr = null === Ir || void 0 === Ir ? void 0 : Ir.config) && void 0 !== fr ? fr : {};
      return Nr.origin = "firebase", Nr.update = !0, null != mr && (Nr.firebase_id = mr), Wr("config", xr.measurementId, Nr), XS && (Wr("set", XS), qS(void 0)), xr.measurementId
    }
    class gS {
      constructor(rr) {
        this.app = rr
      }
      _delete() {
        return delete CS[this.app.options.appId], Promise.resolve()
      }
    }
    let CS = {},
      MS = [];
    const GS = {};
    let kS, AS, VS = "dataLayer",
      iS = "gtag",
      wS = !1;

    function cS(rr) {
      if (wS) throw nS.create("already-initialized");
      rr.dataLayerName && (VS = rr.dataLayerName), rr.gtagName && (iS = rr.gtagName)
    }

    function FS(rr, Sr, Qr) {
      ! function() {
        const rr = [];
        if ((0, ar.W)() && rr.push("This is a browser extension environment."), (0, ar.o)() || rr.push("Cookies are not available."), rr.length > 0) {
          const Sr = rr.map(((rr, Sr) => `(${Sr+1}) ${rr}`)).join(" "),
            Qr = nS.create("invalid-analytics-context", {
              errorInfo: Sr
            });
          zS.warn(Qr.message)
        }
      }();
      const Zr = rr.options.appId;
      if (!Zr) throw nS.create("no-app-id");
      if (!rr.options.apiKey) {
        if (!rr.options.measurementId) throw nS.create("no-api-key");
        zS.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${rr.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != CS[Zr]) throw nS.create("already-exists", {
        id: Zr
      });
      if (!wS) {
        ! function(rr) {
          let Sr = [];
          Array.isArray(window[rr]) ? Sr = window[rr] : window[rr] = Sr
        }(VS);
        const {
          wrappedGtag: rr,
          gtagCore: Sr
        } = function(rr, Sr, Qr, Zr, Wr) {
          let ar = function() {
            for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
            window[Zr].push(arguments)
          };
          return window[Wr] && "function" === typeof window[Wr] && (ar = window[Wr]), window[Wr] = BS(ar, rr, Sr, Qr), {
            gtagCore: ar,
            wrappedGtag: window[Wr]
          }
        }(CS, MS, GS, VS, iS);
        AS = rr, kS = Sr, wS = !0
      }
      CS[Zr] = RS(rr, MS, GS, Sr, kS, VS, Qr);
      return new gS(rr)
    }

    function oS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Zr.O)();
      rr = (0, ar.R)(rr);
      const Sr = (0, Zr.A)(rr, tS);
      return Sr.isInitialized() ? Sr.getImmediate() : bS(rr)
    }

    function bS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Qr = (0, Zr.A)(rr, tS);
      if (Qr.isInitialized()) {
        const rr = Qr.getImmediate();
        if ((0, ar.D)(Sr, Qr.getOptions())) return rr;
        throw nS.create("already-initialized")
      }
      return Qr.initialize({
        options: Sr
      })
    }
    async function JS() {
      if ((0, ar.W)()) return !1;
      if (!(0, ar.o)()) return !1;
      if (!(0, ar.cb)()) return !1;
      try {
        return await (0, ar.lb)()
      } catch (rr) {
        return !1
      }
    }

    function DS(rr, Sr, Qr) {
      rr = (0, ar.R)(rr), async function(rr, Sr, Qr, Zr) {
        if (Zr && Zr.global) return rr("set", {
          screen_name: Qr
        }), Promise.resolve();
        rr("config", await Sr, {
          update: !0,
          screen_name: Qr
        })
      }(AS, CS[rr.app.options.appId], Sr, Qr).catch((rr => zS.error(rr)))
    }
    async function dS(rr) {
      return rr = (0, ar.R)(rr), async function(rr, Sr) {
        const Qr = await Sr;
        return new Promise(((Sr, Zr) => {
          rr("get", Qr, "client_id", (rr => {
            rr || Zr(nS.create("no-client-id")), Sr(rr)
          }))
        }))
      }(AS, CS[rr.app.options.appId])
    }

    function sS(rr, Sr, Qr) {
      rr = (0, ar.R)(rr), async function(rr, Sr, Qr, Zr) {
        if (Zr && Zr.global) return rr("set", {
          user_id: Qr
        }), Promise.resolve();
        rr("config", await Sr, {
          update: !0,
          user_id: Qr
        })
      }(AS, CS[rr.app.options.appId], Sr, Qr).catch((rr => zS.error(rr)))
    }

    function uS(rr, Sr, Qr) {
      rr = (0, ar.R)(rr), async function(rr, Sr, Qr, Zr) {
        if (Zr && Zr.global) {
          const Sr = {};
          for (const rr of Object.keys(Qr)) Sr[`user_properties.${rr}`] = Qr[rr];
          return rr("set", Sr), Promise.resolve()
        }
        rr("config", await Sr, {
          update: !0,
          user_properties: Qr
        })
      }(AS, CS[rr.app.options.appId], Sr, Qr).catch((rr => zS.error(rr)))
    }

    function rQ(rr, Sr) {
      rr = (0, ar.R)(rr), async function(rr, Sr) {
        const Qr = await rr;
        window[`ga-disable-${Qr}`] = !Sr
      }(CS[rr.app.options.appId], Sr).catch((rr => zS.error(rr)))
    }

    function SQ(rr) {
      AS ? AS("set", rr) : qS(rr)
    }

    function QQ(rr, Sr, Qr, Zr) {
      rr = (0, ar.R)(rr), async function(rr, Sr, Qr, Zr, Wr) {
        if (Wr && Wr.global) rr("event", Qr, Zr);
        else {
          const Wr = await Sr;
          rr("event", Qr, Object.assign(Object.assign({}, Zr), {
            send_to: Wr
          }))
        }
      }(AS, CS[rr.app.options.appId], Sr, Qr, Zr).catch((rr => zS.error(rr)))
    }

    function ZQ(rr) {
      AS ? AS("consent", "update", rr) : HS(rr)
    }
    const WQ = "@firebase/analytics",
      aQ = "0.10.0";
    (0, Zr.E)(new jr.f(tS, ((rr, Sr) => {
      let {
        options: Qr
      } = Sr;
      return FS(rr.getProvider("app").getImmediate(), rr.getProvider("installations-internal").getImmediate(), Qr)
    }), "PUBLIC")), (0, Zr.E)(new jr.f("analytics-internal", (function(rr) {
      try {
        const Sr = rr.getProvider(tS).getImmediate();
        return {
          logEvent: (rr, Qr, Zr) => QQ(Sr, rr, Qr, Zr)
        }
      } catch (Sr) {
        throw nS.create("interop-component-reg-failed", {
          reason: Sr
        })
      }
    }), "PRIVATE")), (0, Zr.X)(WQ, aQ), (0, Zr.X)(WQ, aQ, "esm2017")
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);