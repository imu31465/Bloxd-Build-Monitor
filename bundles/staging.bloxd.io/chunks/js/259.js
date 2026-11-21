/*! For license information please see x17cru.259.6b39dbcb.chunk.js.LICENSE.txt */
export const id = 259;
export const ids = [259];
export const modules = {
  40521: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      getAnalytics: () => tJ,
      getGoogleAnalyticsClientId: () => wJ,
      initializeAnalytics: () => VJ,
      isSupported: () => zJ,
      logEvent: () => pk,
      setAnalyticsCollectionEnabled: () => Jk,
      setConsent: () => Nk,
      setCurrentScreen: () => HJ,
      setDefaultEventParameters: () => kk,
      setUserId: () => AJ,
      setUserProperties: () => dk,
      settings: () => rJ
    });
    var pd = kd(40498),
      Nd = kd(40515),
      Wd = kd(40506),
      Pd = kd(40504);
    let Zd, gd;
    const Cd = new WeakMap,
      Kd = new WeakMap,
      od = new WeakMap,
      ld = new WeakMap,
      Qd = new WeakMap;
    let Ld = {
      get(dd, Jd, kd) {
        if (dd instanceof IDBTransaction) {
          if ("done" === Jd) return Kd.get(dd);
          if ("objectStoreNames" === Jd) return dd.objectStoreNames || od.get(dd);
          if ("store" === Jd) return kd.objectStoreNames[1] ? void 0 : kd.objectStore(kd.objectStoreNames[0])
        }
        return Rd(dd[Jd])
      },
      set: (dd, Jd, kd) => (dd[Jd] = kd, !0),
      has: (dd, Jd) => dd instanceof IDBTransaction && ("done" === Jd || "store" === Jd) || Jd in dd
    };

    function Od(dd) {
      return dd !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (gd || (gd = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(dd) ? function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return dd.apply(Id(this), kd), Rd(Cd.get(this))
      } : function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return Rd(dd.apply(Id(this), kd))
      } : function(Jd) {
        for (var kd = arguments.length, pd = new Array(kd > 1 ? kd - 1 : 0), Nd = 1; Nd < kd; Nd++) pd[Nd - 1] = arguments[Nd];
        const Wd = dd.call(Id(this), Jd, ...pd);
        return od.set(Wd, Jd.sort ? Jd.sort() : [Jd]), Rd(Wd)
      }
    }

    function ed(dd) {
      return "function" === typeof dd ? Od(dd) : (dd instanceof IDBTransaction && function(dd) {
        if (Kd.has(dd)) return;
        const Jd = new Promise(((Jd, kd) => {
          const pd = () => {
              dd.removeEventListener("complete", Nd), dd.removeEventListener("error", Wd), dd.removeEventListener("abort", Wd)
            },
            Nd = () => {
              Jd(), pd()
            },
            Wd = () => {
              kd(dd.error || new DOMException("AbortError", "AbortError")), pd()
            };
          dd.addEventListener("complete", Nd), dd.addEventListener("error", Wd), dd.addEventListener("abort", Wd)
        }));
        Kd.set(dd, Jd)
      }(dd), Jd = dd, (Zd || (Zd = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((dd => Jd instanceof dd)) ? new Proxy(dd, Ld) : dd);
      var Jd
    }

    function Rd(dd) {
      if (dd instanceof IDBRequest) return function(dd) {
        const Jd = new Promise(((Jd, kd) => {
          const pd = () => {
              dd.removeEventListener("success", Nd), dd.removeEventListener("error", Wd)
            },
            Nd = () => {
              Jd(Rd(dd.result)), pd()
            },
            Wd = () => {
              kd(dd.error), pd()
            };
          dd.addEventListener("success", Nd), dd.addEventListener("error", Wd)
        }));
        return Jd.then((Jd => {
          Jd instanceof IDBCursor && Cd.set(Jd, dd)
        })).catch((() => {})), Qd.set(Jd, dd), Jd
      }(dd);
      if (ld.has(dd)) return ld.get(dd);
      const Jd = ed(dd);
      return Jd !== dd && (ld.set(dd, Jd), Qd.set(Jd, dd)), Jd
    }
    const Id = dd => Qd.get(dd);
    const Gd = ["get", "getKey", "getAll", "getAllKeys", "count"],
      vd = ["put", "add", "delete", "clear"],
      xd = new Map;

    function qd(dd, Jd) {
      if (!(dd instanceof IDBDatabase) || Jd in dd || "string" !== typeof Jd) return;
      if (xd.get(Jd)) return xd.get(Jd);
      const kd = Jd.replace(/FromIndex$/, ""),
        pd = Jd !== kd,
        Nd = vd.includes(kd);
      if (!(kd in (pd ? IDBIndex : IDBObjectStore).prototype) || !Nd && !Gd.includes(kd)) return;
      const Wd = async function(dd) {
        const Jd = this.transaction(dd, Nd ? "readwrite" : "readonly");
        let Wd = Jd.store;
        for (var Pd = arguments.length, Zd = new Array(Pd > 1 ? Pd - 1 : 0), gd = 1; gd < Pd; gd++) Zd[gd - 1] = arguments[gd];
        return pd && (Wd = Wd.index(Zd.shift())), (await Promise.all([Wd[kd](...Zd), Nd && Jd.done]))[0]
      };
      return xd.set(Jd, Wd), Wd
    }
    Ld = (dd => ({
      ...dd,
      get: (Jd, kd, pd) => qd(Jd, kd) || dd.get(Jd, kd, pd),
      has: (Jd, kd) => !!qd(Jd, kd) || dd.has(Jd, kd)
    }))(Ld);
    const Bd = "@firebase/installations",
      sd = "0.6.4",
      ad = 1e4,
      Md = `w:${sd}`,
      Fd = "FIS_v2",
      Yd = 36e5,
      md = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      bd = new Wd.h("installations", "Installations", md);

    function Sd(dd) {
      return dd instanceof Wd.l && dd.code.includes("request-failed")
    }

    function jd(dd) {
      let {
        projectId: Jd
      } = dd;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Jd}/installations`
    }

    function Xd(dd) {
      return {
        token: dd.token,
        requestStatus: 2,
        expiresIn: (Jd = dd.expiresIn, Number(Jd.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Jd
    }
    async function fd(dd, Jd) {
      const kd = (await Jd.json()).error;
      return bd.create("request-failed", {
        requestName: dd,
        serverCode: kd.code,
        serverMessage: kd.message,
        serverStatus: kd.status
      })
    }

    function nd(dd) {
      let {
        apiKey: Jd
      } = dd;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Jd
      })
    }

    function Ud(dd, Jd) {
      let {
        refreshToken: kd
      } = Jd;
      const pd = nd(dd);
      return pd.append("Authorization", function(dd) {
        return `${Fd} ${dd}`
      }(kd)), pd
    }
    async function yd(dd) {
      const Jd = await dd();
      return Jd.status >= 500 && Jd.status < 600 ? dd() : Jd
    }

    function Dd(dd) {
      return new Promise((Jd => {
        setTimeout(Jd, dd)
      }))
    }
    const Td = /^[cdef][\w-]{21}$/;

    function Ed() {
      try {
        const dd = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(dd), dd[0] = 112 + dd[0] % 16;
        const Jd = function(dd) {
          const Jd = (kd = dd, btoa(String.fromCharCode(...kd)).replace(/\+/g, "-").replace(/\//g, "_"));
          var kd;
          return Jd.substr(0, 22)
        }(dd);
        return Td.test(Jd) ? Jd : ""
      } catch (dd) {
        return ""
      }
    }

    function cd(dd) {
      return `${dd.appName}!${dd.appId}`
    }
    const hd = new Map;

    function rd(dd, Jd) {
      const kd = cd(dd);
      ud(kd, Jd),
        function(dd, Jd) {
          const kd = Vd();
          kd && kd.postMessage({
            key: dd,
            fid: Jd
          });
          zd()
        }(kd, Jd)
    }

    function ud(dd, Jd) {
      const kd = hd.get(dd);
      if (kd)
        for (const pd of kd) pd(Jd)
    }
    let td = null;

    function Vd() {
      return !td && "BroadcastChannel" in self && (td = new BroadcastChannel("[Firebase] FID Change"), td.onmessage = dd => {
        ud(dd.data.key, dd.data.fid)
      }), td
    }

    function zd() {
      0 === hd.size && td && (td.close(), td = null)
    }
    const Hd = "firebase-installations-store";
    let wd = null;

    function Ad() {
      return wd || (wd = function(dd, Jd) {
        let {
          blocked: kd,
          upgrade: pd,
          blocking: Nd,
          terminated: Wd
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Pd = indexedDB.open(dd, Jd),
          Zd = Rd(Pd);
        return pd && Pd.addEventListener("upgradeneeded", (dd => {
          pd(Rd(Pd.result), dd.oldVersion, dd.newVersion, Rd(Pd.transaction))
        })), kd && Pd.addEventListener("blocked", (() => kd())), Zd.then((dd => {
          Wd && dd.addEventListener("close", (() => Wd())), Nd && dd.addEventListener("versionchange", (() => Nd()))
        })).catch((() => {})), Zd
      }("firebase-installations-database", 1, {
        upgrade: (dd, Jd) => {
          if (0 === Jd) dd.createObjectStore(Hd)
        }
      })), wd
    }
    async function dJ(dd, Jd) {
      const kd = cd(dd),
        pd = (await Ad()).transaction(Hd, "readwrite"),
        Nd = pd.objectStore(Hd),
        Wd = await Nd.get(kd);
      return await Nd.put(Jd, kd), await pd.done, Wd && Wd.fid === Jd.fid || rd(dd, Jd.fid), Jd
    }
    async function JJ(dd) {
      const Jd = cd(dd),
        kd = (await Ad()).transaction(Hd, "readwrite");
      await kd.objectStore(Hd).delete(Jd), await kd.done
    }
    async function kJ(dd, Jd) {
      const kd = cd(dd),
        pd = (await Ad()).transaction(Hd, "readwrite"),
        Nd = pd.objectStore(Hd),
        Wd = await Nd.get(kd),
        Pd = Jd(Wd);
      return void 0 === Pd ? await Nd.delete(kd) : await Nd.put(Pd, kd), await pd.done, !Pd || Wd && Wd.fid === Pd.fid || rd(dd, Pd.fid), Pd
    }
    async function pJ(dd) {
      let Jd;
      const kd = await kJ(dd.appConfig, (kd => {
        const pd = function(dd) {
            const Jd = dd || {
              fid: Ed(),
              registrationStatus: 0
            };
            return PJ(Jd)
          }(kd),
          Nd = function(dd, Jd) {
            if (0 === Jd.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Jd,
                  registrationPromise: Promise.reject(bd.create("app-offline"))
                }
              }
              const kd = {
                  fid: Jd.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                pd = async function(dd, Jd) {
                  try {
                    const kd = await async function(dd, Jd) {
                      let {
                        appConfig: kd,
                        heartbeatServiceProvider: pd
                      } = dd, {
                        fid: Nd
                      } = Jd;
                      const Wd = jd(kd),
                        Pd = nd(kd),
                        Zd = pd.getImmediate({
                          optional: !0
                        });
                      if (Zd) {
                        const dd = await Zd.getHeartbeatsHeader();
                        dd && Pd.append("x-firebase-client", dd)
                      }
                      const gd = {
                          fid: Nd,
                          authVersion: Fd,
                          appId: kd.appId,
                          sdkVersion: Md
                        },
                        Cd = {
                          method: "POST",
                          headers: Pd,
                          body: JSON.stringify(gd)
                        },
                        Kd = await yd((() => fetch(Wd, Cd)));
                      if (Kd.ok) {
                        const dd = await Kd.json();
                        return {
                          fid: dd.fid || Nd,
                          registrationStatus: 2,
                          refreshToken: dd.refreshToken,
                          authToken: Xd(dd.authToken)
                        }
                      }
                      throw await fd("Create Installation", Kd)
                    }(dd, Jd);
                    return dJ(dd.appConfig, kd)
                  } catch (kd) {
                    throw Sd(kd) && 409 === kd.customData.serverCode ? await JJ(dd.appConfig) : await dJ(dd.appConfig, {
                      fid: Jd.fid,
                      registrationStatus: 0
                    }), kd
                  }
                }(dd, kd);
              return {
                installationEntry: kd,
                registrationPromise: pd
              }
            }
            return 1 === Jd.registrationStatus ? {
              installationEntry: Jd,
              registrationPromise: NJ(dd)
            } : {
              installationEntry: Jd
            }
          }(dd, pd);
        return Jd = Nd.registrationPromise, Nd.installationEntry
      }));
      return "" === kd.fid ? {
        installationEntry: await Jd
      } : {
        installationEntry: kd,
        registrationPromise: Jd
      }
    }
    async function NJ(dd) {
      let Jd = await WJ(dd.appConfig);
      for (; 1 === Jd.registrationStatus;) await Dd(100), Jd = await WJ(dd.appConfig);
      if (0 === Jd.registrationStatus) {
        const {
          installationEntry: Jd,
          registrationPromise: kd
        } = await pJ(dd);
        return kd || Jd
      }
      return Jd
    }

    function WJ(dd) {
      return kJ(dd, (dd => {
        if (!dd) throw bd.create("installation-not-found");
        return PJ(dd)
      }))
    }

    function PJ(dd) {
      return 1 === (Jd = dd).registrationStatus && Jd.registrationTime + ad < Date.now() ? {
        fid: dd.fid,
        registrationStatus: 0
      } : dd;
      var Jd
    }
    async function ZJ(dd, Jd) {
      let {
        appConfig: kd,
        heartbeatServiceProvider: pd
      } = dd;
      const Nd = function(dd, Jd) {
          let {
            fid: kd
          } = Jd;
          return `${jd(dd)}/${kd}/authTokens:generate`
        }(kd, Jd),
        Wd = Ud(kd, Jd),
        Pd = pd.getImmediate({
          optional: !0
        });
      if (Pd) {
        const dd = await Pd.getHeartbeatsHeader();
        dd && Wd.append("x-firebase-client", dd)
      }
      const Zd = {
          installation: {
            sdkVersion: Md,
            appId: kd.appId
          }
        },
        gd = {
          method: "POST",
          headers: Wd,
          body: JSON.stringify(Zd)
        },
        Cd = await yd((() => fetch(Nd, gd)));
      if (Cd.ok) {
        return Xd(await Cd.json())
      }
      throw await fd("Generate Auth Token", Cd)
    }
    async function gJ(dd) {
      let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const pd = await kJ(dd.appConfig, (pd => {
        if (!KJ(pd)) throw bd.create("not-registered");
        const Nd = pd.authToken;
        if (!kd && function(dd) {
            return 2 === dd.requestStatus && ! function(dd) {
              const Jd = Date.now();
              return Jd < dd.creationTime || dd.creationTime + dd.expiresIn < Jd + Yd
            }(dd)
          }(Nd)) return pd;
        if (1 === Nd.requestStatus) return Jd = async function(dd, Jd) {
          let kd = await CJ(dd.appConfig);
          for (; 1 === kd.authToken.requestStatus;) await Dd(100), kd = await CJ(dd.appConfig);
          const pd = kd.authToken;
          return 0 === pd.requestStatus ? gJ(dd, Jd) : pd
        }(dd, kd), pd;
        {
          if (!navigator.onLine) throw bd.create("app-offline");
          const kd = function(dd) {
            const Jd = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, dd), {
              authToken: Jd
            })
          }(pd);
          return Jd = async function(dd, Jd) {
            try {
              const kd = await ZJ(dd, Jd),
                pd = Object.assign(Object.assign({}, Jd), {
                  authToken: kd
                });
              return await dJ(dd.appConfig, pd), kd
            } catch (kd) {
              if (!Sd(kd) || 401 !== kd.customData.serverCode && 404 !== kd.customData.serverCode) {
                const kd = Object.assign(Object.assign({}, Jd), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await dJ(dd.appConfig, kd)
              } else await JJ(dd.appConfig);
              throw kd
            }
          }(dd, kd), kd
        }
      }));
      return Jd ? await Jd : pd.authToken
    }

    function CJ(dd) {
      return kJ(dd, (dd => {
        if (!KJ(dd)) throw bd.create("not-registered");
        const Jd = dd.authToken;
        return 1 === (kd = Jd).requestStatus && kd.requestTime + ad < Date.now() ? Object.assign(Object.assign({}, dd), {
          authToken: {
            requestStatus: 0
          }
        }) : dd;
        var kd
      }))
    }

    function KJ(dd) {
      return void 0 !== dd && 2 === dd.registrationStatus
    }
    async function oJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const kd = dd;
      await async function(dd) {
        const {
          registrationPromise: Jd
        } = await pJ(dd);
        Jd && await Jd
      }(kd);
      return (await gJ(kd, Jd)).token
    }

    function lJ(dd) {
      return bd.create("missing-app-config-values", {
        valueName: dd
      })
    }
    const QJ = "installations",
      LJ = dd => {
        const Jd = dd.getProvider("app").getImmediate(),
          kd = function(dd) {
            if (!dd || !dd.options) throw lJ("App Configuration");
            if (!dd.name) throw lJ("App Name");
            const Jd = ["projectId", "apiKey", "appId"];
            for (const kd of Jd)
              if (!dd.options[kd]) throw lJ(kd);
            return {
              appName: dd.name,
              projectId: dd.options.projectId,
              apiKey: dd.options.apiKey,
              appId: dd.options.appId
            }
          }(Jd);
        return {
          app: Jd,
          appConfig: kd,
          heartbeatServiceProvider: (0, pd.F)(Jd, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      OJ = dd => {
        const Jd = dd.getProvider("app").getImmediate(),
          kd = (0, pd.F)(Jd, QJ).getImmediate();
        return {
          getId: () => async function(dd) {
            const Jd = dd,
              {
                installationEntry: kd,
                registrationPromise: pd
              } = await pJ(Jd);
            return pd ? pd.catch(console.error) : gJ(Jd).catch(console.error), kd.fid
          }(kd),
          getToken: dd => oJ(kd, dd)
        }
      };
    (0, pd.G)(new Pd.e(QJ, LJ, "PUBLIC")), (0, pd.G)(new Pd.e("installations-internal", OJ, "PRIVATE")), (0, pd.W)(Bd, sd), (0, pd.W)(Bd, sd, "esm2017");
    const eJ = "analytics",
      RJ = "https://www.googletagmanager.com/gtag/js",
      IJ = new Nd.d("@firebase/analytics"),
      GJ = {
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
      vJ = new Wd.h("analytics", "Analytics", GJ);

    function xJ(dd) {
      if (!dd.startsWith(RJ)) {
        const Jd = vJ.create("invalid-gtag-resource", {
          gtagURL: dd
        });
        return IJ.warn(Jd.message), ""
      }
      return dd
    }

    function qJ(dd) {
      return Promise.all(dd.map((dd => dd.catch((dd => dd)))))
    }

    function BJ(dd, Jd) {
      const kd = function(dd, Jd) {
          let kd;
          return window.trustedTypes && (kd = window.trustedTypes.createPolicy(dd, Jd)), kd
        }("firebase-js-sdk-policy", {
          createScriptURL: xJ
        }),
        pd = document.createElement("script"),
        Nd = `${RJ}?l=${dd}&id=${Jd}`;
      pd.src = kd ? null === kd || void 0 === kd ? void 0 : kd.createScriptURL(Nd) : Nd, pd.async = !0, document.head.appendChild(pd)
    }

    function sJ(dd, Jd, kd, pd) {
      return async function(Nd) {
        try {
          for (var Wd = arguments.length, Pd = new Array(Wd > 1 ? Wd - 1 : 0), Zd = 1; Zd < Wd; Zd++) Pd[Zd - 1] = arguments[Zd];
          if ("event" === Nd) {
            const [pd, Nd] = Pd;
            await async function(dd, Jd, kd, pd, Nd) {
              try {
                let Wd = [];
                if (Nd && Nd.send_to) {
                  let dd = Nd.send_to;
                  Array.isArray(dd) || (dd = [dd]);
                  const pd = await qJ(kd);
                  for (const kd of dd) {
                    const dd = pd.find((dd => dd.measurementId === kd)),
                      Nd = dd && Jd[dd.appId];
                    if (!Nd) {
                      Wd = [];
                      break
                    }
                    Wd.push(Nd)
                  }
                }
                0 === Wd.length && (Wd = Object.values(Jd)), await Promise.all(Wd), dd("event", pd, Nd || {})
              } catch (Wd) {
                IJ.error(Wd)
              }
            }(dd, Jd, kd, pd, Nd)
          } else if ("config" === Nd) {
            const [Nd, Wd] = Pd;
            await async function(dd, Jd, kd, pd, Nd, Wd) {
              const Pd = pd[Nd];
              try {
                if (Pd) await Jd[Pd];
                else {
                  const dd = (await qJ(kd)).find((dd => dd.measurementId === Nd));
                  dd && await Jd[dd.appId]
                }
              } catch (Zd) {
                IJ.error(Zd)
              }
              dd("config", Nd, Wd)
            }(dd, Jd, kd, pd, Nd, Wd)
          } else if ("consent" === Nd) {
            const [Jd] = Pd;
            dd("consent", "update", Jd)
          } else if ("get" === Nd) {
            const [Jd, kd, pd] = Pd;
            dd("get", Jd, kd, pd)
          } else if ("set" === Nd) {
            const [Jd] = Pd;
            dd("set", Jd)
          } else dd(Nd, ...Pd)
        } catch (gd) {
          IJ.error(gd)
        }
      }
    }
    const iJ = new class {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = dd, this.intervalMillis = Jd
      }
      getThrottleMetadata(dd) {
        return this.throttleMetadata[dd]
      }
      setThrottleMetadata(dd, Jd) {
        this.throttleMetadata[dd] = Jd
      }
      deleteThrottleMetadata(dd) {
        delete this.throttleMetadata[dd]
      }
    };

    function aJ(dd) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": dd
      })
    }
    async function MJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iJ,
        kd = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: pd,
        apiKey: Nd,
        measurementId: Wd
      } = dd.options;
      if (!pd) throw vJ.create("no-app-id");
      if (!Nd) {
        if (Wd) return {
          measurementId: Wd,
          appId: pd
        };
        throw vJ.create("no-api-key")
      }
      const Pd = Jd.getThrottleMetadata(pd) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Zd = new YJ;
      return setTimeout((async () => {
        Zd.abort()
      }), void 0 !== kd ? kd : 6e4), FJ({
        appId: pd,
        apiKey: Nd,
        measurementId: Wd
      }, Pd, Zd, Jd)
    }
    async function FJ(dd, Jd, kd) {
      let {
        throttleEndTimeMillis: pd,
        backoffCount: Nd
      } = Jd, Pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iJ;
      var Zd;
      const {
        appId: gd,
        measurementId: Cd
      } = dd;
      try {
        await
        function(dd, Jd) {
          return new Promise(((kd, pd) => {
            const Nd = Math.max(Jd - Date.now(), 0),
              Wd = setTimeout(kd, Nd);
            dd.addEventListener((() => {
              clearTimeout(Wd), pd(vJ.create("fetch-throttle", {
                throttleEndTimeMillis: Jd
              }))
            }))
          }))
        }(kd, pd)
      } catch (Kd) {
        if (Cd) return IJ.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Cd} provided in the "measurementId" field in the local Firebase config. [${null===Kd||void 0===Kd?void 0:Kd.message}]`), {
          appId: gd,
          measurementId: Cd
        };
        throw Kd
      }
      try {
        const Jd = await async function(dd) {
          var Jd;
          const {
            appId: kd,
            apiKey: pd
          } = dd, Nd = {
            method: "GET",
            headers: aJ(pd)
          }, Wd = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", kd), Pd = await fetch(Wd, Nd);
          if (200 !== Pd.status && 304 !== Pd.status) {
            let dd = "";
            try {
              const kd = await Pd.json();
              (null === (Jd = kd.error) || void 0 === Jd ? void 0 : Jd.message) && (dd = kd.error.message)
            } catch (Zd) {}
            throw vJ.create("config-fetch-failed", {
              httpStatus: Pd.status,
              responseMessage: dd
            })
          }
          return Pd.json()
        }(dd);
        return Pd.deleteThrottleMetadata(gd), Jd
      } catch (Kd) {
        const Jd = Kd;
        if (! function(dd) {
            if (!(dd instanceof Wd.l) || !dd.customData) return !1;
            const Jd = Number(dd.customData.httpStatus);
            return 429 === Jd || 500 === Jd || 503 === Jd || 504 === Jd
          }(Jd)) {
          if (Pd.deleteThrottleMetadata(gd), Cd) return IJ.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Cd} provided in the "measurementId" field in the local Firebase config. [${null===Jd||void 0===Jd?void 0:Jd.message}]`), {
            appId: gd,
            measurementId: Cd
          };
          throw Kd
        }
        const pd = 503 === Number(null === (Zd = null === Jd || void 0 === Jd ? void 0 : Jd.customData) || void 0 === Zd ? void 0 : Zd.httpStatus) ? (0, Wd.v)(Nd, Pd.intervalMillis, 30) : (0, Wd.v)(Nd, Pd.intervalMillis),
          od = {
            throttleEndTimeMillis: Date.now() + pd,
            backoffCount: Nd + 1
          };
        return Pd.setThrottleMetadata(gd, od), IJ.debug(`Calling attemptFetch again in ${pd} millis`), FJ(dd, od, kd, Pd)
      }
    }
    class YJ {
      constructor() {
        this.listeners = []
      }
      addEventListener(dd) {
        this.listeners.push(dd)
      }
      abort() {
        this.listeners.forEach((dd => dd()))
      }
    }
    let mJ, bJ;

    function SJ(dd) {
      bJ = dd
    }

    function jJ(dd) {
      mJ = dd
    }
    async function XJ(dd, Jd, kd, pd, Nd, Pd, Zd) {
      var gd;
      const Cd = MJ(dd);
      Cd.then((Jd => {
        kd[Jd.measurementId] = Jd.appId, dd.options.measurementId && Jd.measurementId !== dd.options.measurementId && IJ.warn(`The measurement ID in the local Firebase config (${dd.options.measurementId}) does not match the measurement ID fetched from the server (${Jd.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((dd => IJ.error(dd))), Jd.push(Cd);
      const Kd = async function() {
        if (!(0, Wd.Y)()) return IJ.warn(vJ.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Wd.hb)()
        } catch (dd) {
          return IJ.warn(vJ.create("indexeddb-unavailable", {
            errorInfo: null === dd || void 0 === dd ? void 0 : dd.toString()
          }).message), !1
        }
        return !0
      }().then((dd => dd ? pd.getId() : void 0)), [od, ld] = await Promise.all([Cd, Kd]);
      (function(dd) {
        const Jd = window.document.getElementsByTagName("script");
        for (const kd of Object.values(Jd))
          if (kd.src && kd.src.includes(RJ) && kd.src.includes(dd)) return kd;
        return null
      })(Pd) || BJ(Pd, od.measurementId), bJ && (Nd("consent", "default", bJ), SJ(void 0)), Nd("js", new Date);
      const Qd = null !== (gd = null === Zd || void 0 === Zd ? void 0 : Zd.config) && void 0 !== gd ? gd : {};
      return Qd.origin = "firebase", Qd.update = !0, null != ld && (Qd.firebase_id = ld), Nd("config", od.measurementId, Qd), mJ && (Nd("set", mJ), jJ(void 0)), od.measurementId
    }
    class fJ {
      constructor(dd) {
        this.app = dd
      }
      _delete() {
        return delete nJ[this.app.options.appId], Promise.resolve()
      }
    }
    let nJ = {},
      UJ = [];
    const yJ = {};
    let DJ, TJ, EJ = "dataLayer",
      cJ = "gtag",
      hJ = !1;

    function rJ(dd) {
      if (hJ) throw vJ.create("already-initialized");
      dd.dataLayerName && (EJ = dd.dataLayerName), dd.gtagName && (cJ = dd.gtagName)
    }

    function uJ(dd, Jd, kd) {
      ! function() {
        const dd = [];
        if ((0, Wd.S)() && dd.push("This is a browser extension environment."), (0, Wd.n)() || dd.push("Cookies are not available."), dd.length > 0) {
          const Jd = dd.map(((dd, Jd) => `(${Jd+1}) ${dd}`)).join(" "),
            kd = vJ.create("invalid-analytics-context", {
              errorInfo: Jd
            });
          IJ.warn(kd.message)
        }
      }();
      const pd = dd.options.appId;
      if (!pd) throw vJ.create("no-app-id");
      if (!dd.options.apiKey) {
        if (!dd.options.measurementId) throw vJ.create("no-api-key");
        IJ.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${dd.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != nJ[pd]) throw vJ.create("already-exists", {
        id: pd
      });
      if (!hJ) {
        ! function(dd) {
          let Jd = [];
          Array.isArray(window[dd]) ? Jd = window[dd] : window[dd] = Jd
        }(EJ);
        const {
          wrappedGtag: dd,
          gtagCore: Jd
        } = function(dd, Jd, kd, pd, Nd) {
          let Wd = function() {
            for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
            window[pd].push(arguments)
          };
          return window[Nd] && "function" === typeof window[Nd] && (Wd = window[Nd]), window[Nd] = sJ(Wd, dd, Jd, kd), {
            gtagCore: Wd,
            wrappedGtag: window[Nd]
          }
        }(nJ, UJ, yJ, EJ, cJ);
        TJ = dd, DJ = Jd, hJ = !0
      }
      nJ[pd] = XJ(dd, UJ, yJ, Jd, DJ, EJ, kd);
      return new fJ(dd)
    }

    function tJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.P)();
      dd = (0, Wd.P)(dd);
      const Jd = (0, pd.F)(dd, eJ);
      return Jd.isInitialized() ? Jd.getImmediate() : VJ(dd)
    }

    function VJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const kd = (0, pd.F)(dd, eJ);
      if (kd.isInitialized()) {
        const dd = kd.getImmediate();
        if ((0, Wd.B)(Jd, kd.getOptions())) return dd;
        throw vJ.create("already-initialized")
      }
      return kd.initialize({
        options: Jd
      })
    }
    async function zJ() {
      if ((0, Wd.S)()) return !1;
      if (!(0, Wd.n)()) return !1;
      if (!(0, Wd.Y)()) return !1;
      try {
        return await (0, Wd.hb)()
      } catch (dd) {
        return !1
      }
    }

    function HJ(dd, Jd, kd) {
      dd = (0, Wd.P)(dd), async function(dd, Jd, kd, pd) {
        if (pd && pd.global) return dd("set", {
          screen_name: kd
        }), Promise.resolve();
        dd("config", await Jd, {
          update: !0,
          screen_name: kd
        })
      }(TJ, nJ[dd.app.options.appId], Jd, kd).catch((dd => IJ.error(dd)))
    }
    async function wJ(dd) {
      return dd = (0, Wd.P)(dd), async function(dd, Jd) {
        const kd = await Jd;
        return new Promise(((Jd, pd) => {
          dd("get", kd, "client_id", (dd => {
            dd || pd(vJ.create("no-client-id")), Jd(dd)
          }))
        }))
      }(TJ, nJ[dd.app.options.appId])
    }

    function AJ(dd, Jd, kd) {
      dd = (0, Wd.P)(dd), async function(dd, Jd, kd, pd) {
        if (pd && pd.global) return dd("set", {
          user_id: kd
        }), Promise.resolve();
        dd("config", await Jd, {
          update: !0,
          user_id: kd
        })
      }(TJ, nJ[dd.app.options.appId], Jd, kd).catch((dd => IJ.error(dd)))
    }

    function dk(dd, Jd, kd) {
      dd = (0, Wd.P)(dd), async function(dd, Jd, kd, pd) {
        if (pd && pd.global) {
          const Jd = {};
          for (const dd of Object.keys(kd)) Jd[`user_properties.${dd}`] = kd[dd];
          return dd("set", Jd), Promise.resolve()
        }
        dd("config", await Jd, {
          update: !0,
          user_properties: kd
        })
      }(TJ, nJ[dd.app.options.appId], Jd, kd).catch((dd => IJ.error(dd)))
    }

    function Jk(dd, Jd) {
      dd = (0, Wd.P)(dd), async function(dd, Jd) {
        const kd = await dd;
        window[`ga-disable-${kd}`] = !Jd
      }(nJ[dd.app.options.appId], Jd).catch((dd => IJ.error(dd)))
    }

    function kk(dd) {
      TJ ? TJ("set", dd) : jJ(dd)
    }

    function pk(dd, Jd, kd, pd) {
      dd = (0, Wd.P)(dd), async function(dd, Jd, kd, pd, Nd) {
        if (Nd && Nd.global) dd("event", kd, pd);
        else {
          const Nd = await Jd;
          dd("event", kd, Object.assign(Object.assign({}, pd), {
            send_to: Nd
          }))
        }
      }(TJ, nJ[dd.app.options.appId], Jd, kd, pd).catch((dd => IJ.error(dd)))
    }

    function Nk(dd) {
      TJ ? TJ("consent", "update", dd) : SJ(dd)
    }
    const Wk = "@firebase/analytics",
      Pk = "0.10.0";
    (0, pd.G)(new Pd.e(eJ, ((dd, Jd) => {
      let {
        options: kd
      } = Jd;
      return uJ(dd.getProvider("app").getImmediate(), dd.getProvider("installations-internal").getImmediate(), kd)
    }), "PUBLIC")), (0, pd.G)(new Pd.e("analytics-internal", (function(dd) {
      try {
        const Jd = dd.getProvider(eJ).getImmediate();
        return {
          logEvent: (dd, kd, pd) => pk(Jd, dd, kd, pd)
        }
      } catch (Jd) {
        throw vJ.create("interop-component-reg-failed", {
          reason: Jd
        })
      }
    }), "PRIVATE")), (0, pd.W)(Wk, Pk), (0, pd.W)(Wk, Pk, "esm2017")
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);