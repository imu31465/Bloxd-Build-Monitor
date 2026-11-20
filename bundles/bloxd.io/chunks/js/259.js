/*! For license information please see bbb6l5.259.a60d05a1.chunk.js.LICENSE.txt */
export const id = 259;
export const ids = [259];
export const modules = {
  40278: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      getAnalytics: () => XE,
      getGoogleAnalyticsClientId: () => IE,
      initializeAnalytics: () => wE,
      isSupported: () => KE,
      logEvent: () => gg,
      setAnalyticsCollectionEnabled: () => qg,
      setConsent: () => Yg,
      setCurrentScreen: () => CE,
      setDefaultEventParameters: () => Eg,
      setUserId: () => eE,
      setUserProperties: () => DE,
      settings: () => FE
    });
    var Yq = gq(40254),
      lq = gq(40273),
      Oq = gq(40265),
      mq = gq(40258);
    let xq, Aq;
    const cq = new WeakMap,
      uq = new WeakMap,
      Bq = new WeakMap,
      Wq = new WeakMap,
      Nq = new WeakMap;
    let aq = {
      get(qq, Eq, gq) {
        if (qq instanceof IDBTransaction) {
          if ("done" === Eq) return uq.get(qq);
          if ("objectStoreNames" === Eq) return qq.objectStoreNames || Bq.get(qq);
          if ("store" === Eq) return gq.objectStoreNames[1] ? void 0 : gq.objectStore(gq.objectStoreNames[0])
        }
        return jq(qq[Eq])
      },
      set: (qq, Eq, gq) => (qq[Eq] = gq, !0),
      has: (qq, Eq) => qq instanceof IDBTransaction && ("done" === Eq || "store" === Eq) || Eq in qq
    };

    function Vq(qq) {
      return qq !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Aq || (Aq = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(qq) ? function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return qq.apply(Hq(this), gq), jq(cq.get(this))
      } : function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return jq(qq.apply(Hq(this), gq))
      } : function(Eq) {
        for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
        const Oq = qq.call(Hq(this), Eq, ...Yq);
        return Bq.set(Oq, Eq.sort ? Eq.sort() : [Eq]), jq(Oq)
      }
    }

    function dq(qq) {
      return "function" === typeof qq ? Vq(qq) : (qq instanceof IDBTransaction && function(qq) {
        if (uq.has(qq)) return;
        const Eq = new Promise(((Eq, gq) => {
          const Yq = () => {
              qq.removeEventListener("complete", lq), qq.removeEventListener("error", Oq), qq.removeEventListener("abort", Oq)
            },
            lq = () => {
              Eq(), Yq()
            },
            Oq = () => {
              gq(qq.error || new DOMException("AbortError", "AbortError")), Yq()
            };
          qq.addEventListener("complete", lq), qq.addEventListener("error", Oq), qq.addEventListener("abort", Oq)
        }));
        uq.set(qq, Eq)
      }(qq), Eq = qq, (xq || (xq = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((qq => Eq instanceof qq)) ? new Proxy(qq, aq) : qq);
      var Eq
    }

    function jq(qq) {
      if (qq instanceof IDBRequest) return function(qq) {
        const Eq = new Promise(((Eq, gq) => {
          const Yq = () => {
              qq.removeEventListener("success", lq), qq.removeEventListener("error", Oq)
            },
            lq = () => {
              Eq(jq(qq.result)), Yq()
            },
            Oq = () => {
              gq(qq.error), Yq()
            };
          qq.addEventListener("success", lq), qq.addEventListener("error", Oq)
        }));
        return Eq.then((Eq => {
          Eq instanceof IDBCursor && cq.set(Eq, qq)
        })).catch((() => {})), Nq.set(Eq, qq), Eq
      }(qq);
      if (Wq.has(qq)) return Wq.get(qq);
      const Eq = dq(qq);
      return Eq !== qq && (Wq.set(qq, Eq), Nq.set(Eq, qq)), Eq
    }
    const Hq = qq => Nq.get(qq);
    const oq = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Pq = ["put", "add", "delete", "clear"],
      Qq = new Map;

    function yq(qq, Eq) {
      if (!(qq instanceof IDBDatabase) || Eq in qq || "string" !== typeof Eq) return;
      if (Qq.get(Eq)) return Qq.get(Eq);
      const gq = Eq.replace(/FromIndex$/, ""),
        Yq = Eq !== gq,
        lq = Pq.includes(gq);
      if (!(gq in (Yq ? IDBIndex : IDBObjectStore).prototype) || !lq && !oq.includes(gq)) return;
      const Oq = async function(qq) {
        const Eq = this.transaction(qq, lq ? "readwrite" : "readonly");
        let Oq = Eq.store;
        for (var mq = arguments.length, xq = new Array(mq > 1 ? mq - 1 : 0), Aq = 1; Aq < mq; Aq++) xq[Aq - 1] = arguments[Aq];
        return Yq && (Oq = Oq.index(xq.shift())), (await Promise.all([Oq[gq](...xq), lq && Eq.done]))[0]
      };
      return Qq.set(Eq, Oq), Oq
    }
    aq = (qq => ({
      ...qq,
      get: (Eq, gq, Yq) => yq(Eq, gq) || qq.get(Eq, gq, Yq),
      has: (Eq, gq) => !!yq(Eq, gq) || qq.has(Eq, gq)
    }))(aq);
    const tq = "@firebase/installations",
      rq = "0.6.4",
      vq = 1e4,
      hq = `w:${rq}`,
      nq = "FIS_v2",
      bq = 36e5,
      iq = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Zq = new Oq.d("installations", "Installations", iq);

    function fq(qq) {
      return qq instanceof Oq.h && qq.code.includes("request-failed")
    }

    function Mq(qq) {
      let {
        projectId: Eq
      } = qq;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Eq}/installations`
    }

    function Tq(qq) {
      return {
        token: qq.token,
        requestStatus: 2,
        expiresIn: (Eq = qq.expiresIn, Number(Eq.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Eq
    }
    async function zq(qq, Eq) {
      const gq = (await Eq.json()).error;
      return Zq.create("request-failed", {
        requestName: qq,
        serverCode: gq.code,
        serverMessage: gq.message,
        serverStatus: gq.status
      })
    }

    function Sq(qq) {
      let {
        apiKey: Eq
      } = qq;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Eq
      })
    }

    function pq(qq, Eq) {
      let {
        refreshToken: gq
      } = Eq;
      const Yq = Sq(qq);
      return Yq.append("Authorization", function(qq) {
        return `${nq} ${qq}`
      }(gq)), Yq
    }
    async function Gq(qq) {
      const Eq = await qq();
      return Eq.status >= 500 && Eq.status < 600 ? qq() : Eq
    }

    function Lq(qq) {
      return new Promise((Eq => {
        setTimeout(Eq, qq)
      }))
    }
    const Jq = /^[cdef][\w-]{21}$/;

    function kq() {
      try {
        const qq = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(qq), qq[0] = 112 + qq[0] % 16;
        const Eq = function(qq) {
          const Eq = (gq = qq, btoa(String.fromCharCode(...gq)).replace(/\+/g, "-").replace(/\//g, "_"));
          var gq;
          return Eq.substr(0, 22)
        }(qq);
        return Jq.test(Eq) ? Eq : ""
      } catch (qq) {
        return ""
      }
    }

    function Rq(qq) {
      return `${qq.appName}!${qq.appId}`
    }
    const Uq = new Map;

    function Fq(qq, Eq) {
      const gq = Rq(qq);
      sq(gq, Eq),
        function(qq, Eq) {
          const gq = wq();
          gq && gq.postMessage({
            key: qq,
            fid: Eq
          });
          Kq()
        }(gq, Eq)
    }

    function sq(qq, Eq) {
      const gq = Uq.get(qq);
      if (gq)
        for (const Yq of gq) Yq(Eq)
    }
    let Xq = null;

    function wq() {
      return !Xq && "BroadcastChannel" in self && (Xq = new BroadcastChannel("[Firebase] FID Change"), Xq.onmessage = qq => {
        sq(qq.data.key, qq.data.fid)
      }), Xq
    }

    function Kq() {
      0 === Uq.size && Xq && (Xq.close(), Xq = null)
    }
    const Cq = "firebase-installations-store";
    let Iq = null;

    function eq() {
      return Iq || (Iq = function(qq, Eq) {
        let {
          blocked: gq,
          upgrade: Yq,
          blocking: lq,
          terminated: Oq
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const mq = indexedDB.open(qq, Eq),
          xq = jq(mq);
        return Yq && mq.addEventListener("upgradeneeded", (qq => {
          Yq(jq(mq.result), qq.oldVersion, qq.newVersion, jq(mq.transaction))
        })), gq && mq.addEventListener("blocked", (() => gq())), xq.then((qq => {
          Oq && qq.addEventListener("close", (() => Oq())), lq && qq.addEventListener("versionchange", (() => lq()))
        })).catch((() => {})), xq
      }("firebase-installations-database", 1, {
        upgrade: (qq, Eq) => {
          if (0 === Eq) qq.createObjectStore(Cq)
        }
      })), Iq
    }
    async function Dq(qq, Eq) {
      const gq = Rq(qq),
        Yq = (await eq()).transaction(Cq, "readwrite"),
        lq = Yq.objectStore(Cq),
        Oq = await lq.get(gq);
      return await lq.put(Eq, gq), await Yq.done, Oq && Oq.fid === Eq.fid || Fq(qq, Eq.fid), Eq
    }
    async function qE(qq) {
      const Eq = Rq(qq),
        gq = (await eq()).transaction(Cq, "readwrite");
      await gq.objectStore(Cq).delete(Eq), await gq.done
    }
    async function EE(qq, Eq) {
      const gq = Rq(qq),
        Yq = (await eq()).transaction(Cq, "readwrite"),
        lq = Yq.objectStore(Cq),
        Oq = await lq.get(gq),
        mq = Eq(Oq);
      return void 0 === mq ? await lq.delete(gq) : await lq.put(mq, gq), await Yq.done, !mq || Oq && Oq.fid === mq.fid || Fq(qq, mq.fid), mq
    }
    async function gE(qq) {
      let Eq;
      const gq = await EE(qq.appConfig, (gq => {
        const Yq = function(qq) {
            const Eq = qq || {
              fid: kq(),
              registrationStatus: 0
            };
            return OE(Eq)
          }(gq),
          lq = function(qq, Eq) {
            if (0 === Eq.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Eq,
                  registrationPromise: Promise.reject(Zq.create("app-offline"))
                }
              }
              const gq = {
                  fid: Eq.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Yq = async function(qq, Eq) {
                  try {
                    const gq = await async function(qq, Eq) {
                      let {
                        appConfig: gq,
                        heartbeatServiceProvider: Yq
                      } = qq, {
                        fid: lq
                      } = Eq;
                      const Oq = Mq(gq),
                        mq = Sq(gq),
                        xq = Yq.getImmediate({
                          optional: !0
                        });
                      if (xq) {
                        const qq = await xq.getHeartbeatsHeader();
                        qq && mq.append("x-firebase-client", qq)
                      }
                      const Aq = {
                          fid: lq,
                          authVersion: nq,
                          appId: gq.appId,
                          sdkVersion: hq
                        },
                        cq = {
                          method: "POST",
                          headers: mq,
                          body: JSON.stringify(Aq)
                        },
                        uq = await Gq((() => fetch(Oq, cq)));
                      if (uq.ok) {
                        const qq = await uq.json();
                        return {
                          fid: qq.fid || lq,
                          registrationStatus: 2,
                          refreshToken: qq.refreshToken,
                          authToken: Tq(qq.authToken)
                        }
                      }
                      throw await zq("Create Installation", uq)
                    }(qq, Eq);
                    return Dq(qq.appConfig, gq)
                  } catch (gq) {
                    throw fq(gq) && 409 === gq.customData.serverCode ? await qE(qq.appConfig) : await Dq(qq.appConfig, {
                      fid: Eq.fid,
                      registrationStatus: 0
                    }), gq
                  }
                }(qq, gq);
              return {
                installationEntry: gq,
                registrationPromise: Yq
              }
            }
            return 1 === Eq.registrationStatus ? {
              installationEntry: Eq,
              registrationPromise: YE(qq)
            } : {
              installationEntry: Eq
            }
          }(qq, Yq);
        return Eq = lq.registrationPromise, lq.installationEntry
      }));
      return "" === gq.fid ? {
        installationEntry: await Eq
      } : {
        installationEntry: gq,
        registrationPromise: Eq
      }
    }
    async function YE(qq) {
      let Eq = await lE(qq.appConfig);
      for (; 1 === Eq.registrationStatus;) await Lq(100), Eq = await lE(qq.appConfig);
      if (0 === Eq.registrationStatus) {
        const {
          installationEntry: Eq,
          registrationPromise: gq
        } = await gE(qq);
        return gq || Eq
      }
      return Eq
    }

    function lE(qq) {
      return EE(qq, (qq => {
        if (!qq) throw Zq.create("installation-not-found");
        return OE(qq)
      }))
    }

    function OE(qq) {
      return 1 === (Eq = qq).registrationStatus && Eq.registrationTime + vq < Date.now() ? {
        fid: qq.fid,
        registrationStatus: 0
      } : qq;
      var Eq
    }
    async function mE(qq, Eq) {
      let {
        appConfig: gq,
        heartbeatServiceProvider: Yq
      } = qq;
      const lq = function(qq, Eq) {
          let {
            fid: gq
          } = Eq;
          return `${Mq(qq)}/${gq}/authTokens:generate`
        }(gq, Eq),
        Oq = pq(gq, Eq),
        mq = Yq.getImmediate({
          optional: !0
        });
      if (mq) {
        const qq = await mq.getHeartbeatsHeader();
        qq && Oq.append("x-firebase-client", qq)
      }
      const xq = {
          installation: {
            sdkVersion: hq,
            appId: gq.appId
          }
        },
        Aq = {
          method: "POST",
          headers: Oq,
          body: JSON.stringify(xq)
        },
        cq = await Gq((() => fetch(lq, Aq)));
      if (cq.ok) {
        return Tq(await cq.json())
      }
      throw await zq("Generate Auth Token", cq)
    }
    async function xE(qq) {
      let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Yq = await EE(qq.appConfig, (Yq => {
        if (!cE(Yq)) throw Zq.create("not-registered");
        const lq = Yq.authToken;
        if (!gq && function(qq) {
            return 2 === qq.requestStatus && ! function(qq) {
              const Eq = Date.now();
              return Eq < qq.creationTime || qq.creationTime + qq.expiresIn < Eq + bq
            }(qq)
          }(lq)) return Yq;
        if (1 === lq.requestStatus) return Eq = async function(qq, Eq) {
          let gq = await AE(qq.appConfig);
          for (; 1 === gq.authToken.requestStatus;) await Lq(100), gq = await AE(qq.appConfig);
          const Yq = gq.authToken;
          return 0 === Yq.requestStatus ? xE(qq, Eq) : Yq
        }(qq, gq), Yq;
        {
          if (!navigator.onLine) throw Zq.create("app-offline");
          const gq = function(qq) {
            const Eq = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, qq), {
              authToken: Eq
            })
          }(Yq);
          return Eq = async function(qq, Eq) {
            try {
              const gq = await mE(qq, Eq),
                Yq = Object.assign(Object.assign({}, Eq), {
                  authToken: gq
                });
              return await Dq(qq.appConfig, Yq), gq
            } catch (gq) {
              if (!fq(gq) || 401 !== gq.customData.serverCode && 404 !== gq.customData.serverCode) {
                const gq = Object.assign(Object.assign({}, Eq), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await Dq(qq.appConfig, gq)
              } else await qE(qq.appConfig);
              throw gq
            }
          }(qq, gq), gq
        }
      }));
      return Eq ? await Eq : Yq.authToken
    }

    function AE(qq) {
      return EE(qq, (qq => {
        if (!cE(qq)) throw Zq.create("not-registered");
        const Eq = qq.authToken;
        return 1 === (gq = Eq).requestStatus && gq.requestTime + vq < Date.now() ? Object.assign(Object.assign({}, qq), {
          authToken: {
            requestStatus: 0
          }
        }) : qq;
        var gq
      }))
    }

    function cE(qq) {
      return void 0 !== qq && 2 === qq.registrationStatus
    }
    async function uE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const gq = qq;
      await async function(qq) {
        const {
          registrationPromise: Eq
        } = await gE(qq);
        Eq && await Eq
      }(gq);
      return (await xE(gq, Eq)).token
    }

    function BE(qq) {
      return Zq.create("missing-app-config-values", {
        valueName: qq
      })
    }
    const WE = "installations",
      NE = qq => {
        const Eq = qq.getProvider("app").getImmediate(),
          gq = function(qq) {
            if (!qq || !qq.options) throw BE("App Configuration");
            if (!qq.name) throw BE("App Name");
            const Eq = ["projectId", "apiKey", "appId"];
            for (const gq of Eq)
              if (!qq.options[gq]) throw BE(gq);
            return {
              appName: qq.name,
              projectId: qq.options.projectId,
              apiKey: qq.options.apiKey,
              appId: qq.options.appId
            }
          }(Eq);
        return {
          app: Eq,
          appConfig: gq,
          heartbeatServiceProvider: (0, Yq.s)(Eq, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      aE = qq => {
        const Eq = qq.getProvider("app").getImmediate(),
          gq = (0, Yq.s)(Eq, WE).getImmediate();
        return {
          getId: () => async function(qq) {
            const Eq = qq,
              {
                installationEntry: gq,
                registrationPromise: Yq
              } = await gE(Eq);
            return Yq ? Yq.catch(console.error) : xE(Eq).catch(console.error), gq.fid
          }(gq),
          getToken: qq => uE(gq, qq)
        }
      };
    (0, Yq.v)(new mq.f(WE, NE, "PUBLIC")), (0, Yq.v)(new mq.f("installations-internal", aE, "PRIVATE")), (0, Yq.L)(tq, rq), (0, Yq.L)(tq, rq, "esm2017");
    const VE = "analytics",
      dE = "https://www.googletagmanager.com/gtag/js",
      jE = new lq.g("@firebase/analytics"),
      HE = {
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
      oE = new Oq.d("analytics", "Analytics", HE);

    function PE(qq) {
      if (!qq.startsWith(dE)) {
        const Eq = oE.create("invalid-gtag-resource", {
          gtagURL: qq
        });
        return jE.warn(Eq.message), ""
      }
      return qq
    }

    function QE(qq) {
      return Promise.all(qq.map((qq => qq.catch((qq => qq)))))
    }

    function yE(qq, Eq) {
      const gq = function(qq, Eq) {
          let gq;
          return window.trustedTypes && (gq = window.trustedTypes.createPolicy(qq, Eq)), gq
        }("firebase-js-sdk-policy", {
          createScriptURL: PE
        }),
        Yq = document.createElement("script"),
        lq = `${dE}?l=${qq}&id=${Eq}`;
      Yq.src = gq ? null === gq || void 0 === gq ? void 0 : gq.createScriptURL(lq) : lq, Yq.async = !0, document.head.appendChild(Yq)
    }

    function tE(qq, Eq, gq, Yq) {
      return async function(lq) {
        try {
          for (var Oq = arguments.length, mq = new Array(Oq > 1 ? Oq - 1 : 0), xq = 1; xq < Oq; xq++) mq[xq - 1] = arguments[xq];
          if ("event" === lq) {
            const [Yq, lq] = mq;
            await async function(qq, Eq, gq, Yq, lq) {
              try {
                let Oq = [];
                if (lq && lq.send_to) {
                  let qq = lq.send_to;
                  Array.isArray(qq) || (qq = [qq]);
                  const Yq = await QE(gq);
                  for (const gq of qq) {
                    const qq = Yq.find((qq => qq.measurementId === gq)),
                      lq = qq && Eq[qq.appId];
                    if (!lq) {
                      Oq = [];
                      break
                    }
                    Oq.push(lq)
                  }
                }
                0 === Oq.length && (Oq = Object.values(Eq)), await Promise.all(Oq), qq("event", Yq, lq || {})
              } catch (Oq) {
                jE.error(Oq)
              }
            }(qq, Eq, gq, Yq, lq)
          } else if ("config" === lq) {
            const [lq, Oq] = mq;
            await async function(qq, Eq, gq, Yq, lq, Oq) {
              const mq = Yq[lq];
              try {
                if (mq) await Eq[mq];
                else {
                  const qq = (await QE(gq)).find((qq => qq.measurementId === lq));
                  qq && await Eq[qq.appId]
                }
              } catch (xq) {
                jE.error(xq)
              }
              qq("config", lq, Oq)
            }(qq, Eq, gq, Yq, lq, Oq)
          } else if ("consent" === lq) {
            const [Eq] = mq;
            qq("consent", "update", Eq)
          } else if ("get" === lq) {
            const [Eq, gq, Yq] = mq;
            qq("get", Eq, gq, Yq)
          } else if ("set" === lq) {
            const [Eq] = mq;
            qq("set", Eq)
          } else qq(lq, ...mq)
        } catch (Aq) {
          jE.error(Aq)
        }
      }
    }
    const rE = new class {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = qq, this.intervalMillis = Eq
      }
      getThrottleMetadata(qq) {
        return this.throttleMetadata[qq]
      }
      setThrottleMetadata(qq, Eq) {
        this.throttleMetadata[qq] = Eq
      }
      deleteThrottleMetadata(qq) {
        delete this.throttleMetadata[qq]
      }
    };

    function vE(qq) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": qq
      })
    }
    async function hE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rE,
        gq = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Yq,
        apiKey: lq,
        measurementId: Oq
      } = qq.options;
      if (!Yq) throw oE.create("no-app-id");
      if (!lq) {
        if (Oq) return {
          measurementId: Oq,
          appId: Yq
        };
        throw oE.create("no-api-key")
      }
      const mq = Eq.getThrottleMetadata(Yq) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        xq = new bE;
      return setTimeout((async () => {
        xq.abort()
      }), void 0 !== gq ? gq : 6e4), nE({
        appId: Yq,
        apiKey: lq,
        measurementId: Oq
      }, mq, xq, Eq)
    }
    async function nE(qq, Eq, gq) {
      let {
        throttleEndTimeMillis: Yq,
        backoffCount: lq
      } = Eq, mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rE;
      var xq;
      const {
        appId: Aq,
        measurementId: cq
      } = qq;
      try {
        await
        function(qq, Eq) {
          return new Promise(((gq, Yq) => {
            const lq = Math.max(Eq - Date.now(), 0),
              Oq = setTimeout(gq, lq);
            qq.addEventListener((() => {
              clearTimeout(Oq), Yq(oE.create("fetch-throttle", {
                throttleEndTimeMillis: Eq
              }))
            }))
          }))
        }(gq, Yq)
      } catch (uq) {
        if (cq) return jE.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cq} provided in the "measurementId" field in the local Firebase config. [${null===uq||void 0===uq?void 0:uq.message}]`), {
          appId: Aq,
          measurementId: cq
        };
        throw uq
      }
      try {
        const Eq = await async function(qq) {
          var Eq;
          const {
            appId: gq,
            apiKey: Yq
          } = qq, lq = {
            method: "GET",
            headers: vE(Yq)
          }, Oq = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", gq), mq = await fetch(Oq, lq);
          if (200 !== mq.status && 304 !== mq.status) {
            let qq = "";
            try {
              const gq = await mq.json();
              (null === (Eq = gq.error) || void 0 === Eq ? void 0 : Eq.message) && (qq = gq.error.message)
            } catch (xq) {}
            throw oE.create("config-fetch-failed", {
              httpStatus: mq.status,
              responseMessage: qq
            })
          }
          return mq.json()
        }(qq);
        return mq.deleteThrottleMetadata(Aq), Eq
      } catch (uq) {
        const Eq = uq;
        if (! function(qq) {
            if (!(qq instanceof Oq.h) || !qq.customData) return !1;
            const Eq = Number(qq.customData.httpStatus);
            return 429 === Eq || 500 === Eq || 503 === Eq || 504 === Eq
          }(Eq)) {
          if (mq.deleteThrottleMetadata(Aq), cq) return jE.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cq} provided in the "measurementId" field in the local Firebase config. [${null===Eq||void 0===Eq?void 0:Eq.message}]`), {
            appId: Aq,
            measurementId: cq
          };
          throw uq
        }
        const Yq = 503 === Number(null === (xq = null === Eq || void 0 === Eq ? void 0 : Eq.customData) || void 0 === xq ? void 0 : xq.httpStatus) ? (0, Oq.s)(lq, mq.intervalMillis, 30) : (0, Oq.s)(lq, mq.intervalMillis),
          Bq = {
            throttleEndTimeMillis: Date.now() + Yq,
            backoffCount: lq + 1
          };
        return mq.setThrottleMetadata(Aq, Bq), jE.debug(`Calling attemptFetch again in ${Yq} millis`), nE(qq, Bq, gq, mq)
      }
    }
    class bE {
      constructor() {
        this.listeners = []
      }
      addEventListener(qq) {
        this.listeners.push(qq)
      }
      abort() {
        this.listeners.forEach((qq => qq()))
      }
    }
    let iE, ZE;

    function fE(qq) {
      ZE = qq
    }

    function ME(qq) {
      iE = qq
    }
    async function TE(qq, Eq, gq, Yq, lq, mq, xq) {
      var Aq;
      const cq = hE(qq);
      cq.then((Eq => {
        gq[Eq.measurementId] = Eq.appId, qq.options.measurementId && Eq.measurementId !== qq.options.measurementId && jE.warn(`The measurement ID in the local Firebase config (${qq.options.measurementId}) does not match the measurement ID fetched from the server (${Eq.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((qq => jE.error(qq))), Eq.push(cq);
      const uq = async function() {
        if (!(0, Oq.T)()) return jE.warn(oE.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Oq.bb)()
        } catch (qq) {
          return jE.warn(oE.create("indexeddb-unavailable", {
            errorInfo: null === qq || void 0 === qq ? void 0 : qq.toString()
          }).message), !1
        }
        return !0
      }().then((qq => qq ? Yq.getId() : void 0)), [Bq, Wq] = await Promise.all([cq, uq]);
      (function(qq) {
        const Eq = window.document.getElementsByTagName("script");
        for (const gq of Object.values(Eq))
          if (gq.src && gq.src.includes(dE) && gq.src.includes(qq)) return gq;
        return null
      })(mq) || yE(mq, Bq.measurementId), ZE && (lq("consent", "default", ZE), fE(void 0)), lq("js", new Date);
      const Nq = null !== (Aq = null === xq || void 0 === xq ? void 0 : xq.config) && void 0 !== Aq ? Aq : {};
      return Nq.origin = "firebase", Nq.update = !0, null != Wq && (Nq.firebase_id = Wq), lq("config", Bq.measurementId, Nq), iE && (lq("set", iE), ME(void 0)), Bq.measurementId
    }
    class zE {
      constructor(qq) {
        this.app = qq
      }
      _delete() {
        return delete SE[this.app.options.appId], Promise.resolve()
      }
    }
    let SE = {},
      pE = [];
    const GE = {};
    let LE, JE, kE = "dataLayer",
      RE = "gtag",
      UE = !1;

    function FE(qq) {
      if (UE) throw oE.create("already-initialized");
      qq.dataLayerName && (kE = qq.dataLayerName), qq.gtagName && (RE = qq.gtagName)
    }

    function sE(qq, Eq, gq) {
      ! function() {
        const qq = [];
        if ((0, Oq.M)() && qq.push("This is a browser extension environment."), (0, Oq.l)() || qq.push("Cookies are not available."), qq.length > 0) {
          const Eq = qq.map(((qq, Eq) => `(${Eq+1}) ${qq}`)).join(" "),
            gq = oE.create("invalid-analytics-context", {
              errorInfo: Eq
            });
          jE.warn(gq.message)
        }
      }();
      const Yq = qq.options.appId;
      if (!Yq) throw oE.create("no-app-id");
      if (!qq.options.apiKey) {
        if (!qq.options.measurementId) throw oE.create("no-api-key");
        jE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${qq.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != SE[Yq]) throw oE.create("already-exists", {
        id: Yq
      });
      if (!UE) {
        ! function(qq) {
          let Eq = [];
          Array.isArray(window[qq]) ? Eq = window[qq] : window[qq] = Eq
        }(kE);
        const {
          wrappedGtag: qq,
          gtagCore: Eq
        } = function(qq, Eq, gq, Yq, lq) {
          let Oq = function() {
            for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
            window[Yq].push(arguments)
          };
          return window[lq] && "function" === typeof window[lq] && (Oq = window[lq]), window[lq] = tE(Oq, qq, Eq, gq), {
            gtagCore: Oq,
            wrappedGtag: window[lq]
          }
        }(SE, pE, GE, kE, RE);
        JE = qq, LE = Eq, UE = !0
      }
      SE[Yq] = TE(qq, pE, GE, Eq, LE, kE, gq);
      return new zE(qq)
    }

    function XE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Yq.F)();
      qq = (0, Oq.K)(qq);
      const Eq = (0, Yq.s)(qq, VE);
      return Eq.isInitialized() ? Eq.getImmediate() : wE(qq)
    }

    function wE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gq = (0, Yq.s)(qq, VE);
      if (gq.isInitialized()) {
        const qq = gq.getImmediate();
        if ((0, Oq.x)(Eq, gq.getOptions())) return qq;
        throw oE.create("already-initialized")
      }
      return gq.initialize({
        options: Eq
      })
    }
    async function KE() {
      if ((0, Oq.M)()) return !1;
      if (!(0, Oq.l)()) return !1;
      if (!(0, Oq.T)()) return !1;
      try {
        return await (0, Oq.bb)()
      } catch (qq) {
        return !1
      }
    }

    function CE(qq, Eq, gq) {
      qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq) {
        if (Yq && Yq.global) return qq("set", {
          screen_name: gq
        }), Promise.resolve();
        qq("config", await Eq, {
          update: !0,
          screen_name: gq
        })
      }(JE, SE[qq.app.options.appId], Eq, gq).catch((qq => jE.error(qq)))
    }
    async function IE(qq) {
      return qq = (0, Oq.K)(qq), async function(qq, Eq) {
        const gq = await Eq;
        return new Promise(((Eq, Yq) => {
          qq("get", gq, "client_id", (qq => {
            qq || Yq(oE.create("no-client-id")), Eq(qq)
          }))
        }))
      }(JE, SE[qq.app.options.appId])
    }

    function eE(qq, Eq, gq) {
      qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq) {
        if (Yq && Yq.global) return qq("set", {
          user_id: gq
        }), Promise.resolve();
        qq("config", await Eq, {
          update: !0,
          user_id: gq
        })
      }(JE, SE[qq.app.options.appId], Eq, gq).catch((qq => jE.error(qq)))
    }

    function DE(qq, Eq, gq) {
      qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq) {
        if (Yq && Yq.global) {
          const Eq = {};
          for (const qq of Object.keys(gq)) Eq[`user_properties.${qq}`] = gq[qq];
          return qq("set", Eq), Promise.resolve()
        }
        qq("config", await Eq, {
          update: !0,
          user_properties: gq
        })
      }(JE, SE[qq.app.options.appId], Eq, gq).catch((qq => jE.error(qq)))
    }

    function qg(qq, Eq) {
      qq = (0, Oq.K)(qq), async function(qq, Eq) {
        const gq = await qq;
        window[`ga-disable-${gq}`] = !Eq
      }(SE[qq.app.options.appId], Eq).catch((qq => jE.error(qq)))
    }

    function Eg(qq) {
      JE ? JE("set", qq) : ME(qq)
    }

    function gg(qq, Eq, gq, Yq) {
      qq = (0, Oq.K)(qq), async function(qq, Eq, gq, Yq, lq) {
        if (lq && lq.global) qq("event", gq, Yq);
        else {
          const lq = await Eq;
          qq("event", gq, Object.assign(Object.assign({}, Yq), {
            send_to: lq
          }))
        }
      }(JE, SE[qq.app.options.appId], Eq, gq, Yq).catch((qq => jE.error(qq)))
    }

    function Yg(qq) {
      JE ? JE("consent", "update", qq) : fE(qq)
    }
    const lg = "@firebase/analytics",
      Og = "0.10.0";
    (0, Yq.v)(new mq.f(VE, ((qq, Eq) => {
      let {
        options: gq
      } = Eq;
      return sE(qq.getProvider("app").getImmediate(), qq.getProvider("installations-internal").getImmediate(), gq)
    }), "PUBLIC")), (0, Yq.v)(new mq.f("analytics-internal", (function(qq) {
      try {
        const Eq = qq.getProvider(VE).getImmediate();
        return {
          logEvent: (qq, gq, Yq) => gg(Eq, qq, gq, Yq)
        }
      } catch (Eq) {
        throw oE.create("interop-component-reg-failed", {
          reason: Eq
        })
      }
    }), "PRIVATE")), (0, Yq.L)(lg, Og), (0, Yq.L)(lg, Og, "esm2017")
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);