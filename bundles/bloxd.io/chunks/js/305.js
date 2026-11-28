/*! For license information please see yteou.305.bc2e4013.chunk.js.LICENSE.txt */
export const id = 305;
export const ids = [305];
export const modules = {
  42475: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      getAnalytics: () => CO,
      getGoogleAnalyticsClientId: () => MO,
      initializeAnalytics: () => ZO,
      isSupported: () => kO,
      logEvent: () => Fm,
      setAnalyticsCollectionEnabled: () => mm,
      setConsent: () => Rm,
      setCurrentScreen: () => fO,
      setDefaultEventParameters: () => Wm,
      setUserId: () => dm,
      setUserProperties: () => Om,
      settings: () => IO
    });
    var Wd = md(42458),
      Fd = md(42468),
      Rd = md(42466),
      Xd = md(42464);
    let Kd, hd;
    const vd = new WeakMap,
      Qd = new WeakMap,
      td = new WeakMap,
      od = new WeakMap,
      Nd = new WeakMap;
    let qd = {
      get(dd, Od, md) {
        if (dd instanceof IDBTransaction) {
          if ("done" === Od) return Qd.get(dd);
          if ("objectStoreNames" === Od) return dd.objectStoreNames || td.get(dd);
          if ("store" === Od) return md.objectStoreNames[1] ? void 0 : md.objectStore(md.objectStoreNames[0])
        }
        return bd(dd[Od])
      },
      set: (dd, Od, md) => (dd[Od] = md, !0),
      has: (dd, Od) => dd instanceof IDBTransaction && ("done" === Od || "store" === Od) || Od in dd
    };

    function Hd(dd) {
      return dd !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (hd || (hd = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(dd) ? function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return dd.apply(Td(this), md), bd(vd.get(this))
      } : function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return bd(dd.apply(Td(this), md))
      } : function(Od) {
        for (var md = arguments.length, Wd = new Array(md > 1 ? md - 1 : 0), Fd = 1; Fd < md; Fd++) Wd[Fd - 1] = arguments[Fd];
        const Rd = dd.call(Td(this), Od, ...Wd);
        return td.set(Rd, Od.sort ? Od.sort() : [Od]), bd(Rd)
      }
    }

    function yd(dd) {
      return "function" === typeof dd ? Hd(dd) : (dd instanceof IDBTransaction && function(dd) {
        if (Qd.has(dd)) return;
        const Od = new Promise(((Od, md) => {
          const Wd = () => {
              dd.removeEventListener("complete", Fd), dd.removeEventListener("error", Rd), dd.removeEventListener("abort", Rd)
            },
            Fd = () => {
              Od(), Wd()
            },
            Rd = () => {
              md(dd.error || new DOMException("AbortError", "AbortError")), Wd()
            };
          dd.addEventListener("complete", Fd), dd.addEventListener("error", Rd), dd.addEventListener("abort", Rd)
        }));
        Qd.set(dd, Od)
      }(dd), Od = dd, (Kd || (Kd = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((dd => Od instanceof dd)) ? new Proxy(dd, qd) : dd);
      var Od
    }

    function bd(dd) {
      if (dd instanceof IDBRequest) return function(dd) {
        const Od = new Promise(((Od, md) => {
          const Wd = () => {
              dd.removeEventListener("success", Fd), dd.removeEventListener("error", Rd)
            },
            Fd = () => {
              Od(bd(dd.result)), Wd()
            },
            Rd = () => {
              md(dd.error), Wd()
            };
          dd.addEventListener("success", Fd), dd.addEventListener("error", Rd)
        }));
        return Od.then((Od => {
          Od instanceof IDBCursor && vd.set(Od, dd)
        })).catch((() => {})), Nd.set(Od, dd), Od
      }(dd);
      if (od.has(dd)) return od.get(dd);
      const Od = yd(dd);
      return Od !== dd && (od.set(dd, Od), Nd.set(Od, dd)), Od
    }
    const Td = dd => Nd.get(dd);
    const pd = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Yd = ["put", "add", "delete", "clear"],
      gd = new Map;

    function wd(dd, Od) {
      if (!(dd instanceof IDBDatabase) || Od in dd || "string" !== typeof Od) return;
      if (gd.get(Od)) return gd.get(Od);
      const md = Od.replace(/FromIndex$/, ""),
        Wd = Od !== md,
        Fd = Yd.includes(md);
      if (!(md in (Wd ? IDBIndex : IDBObjectStore).prototype) || !Fd && !pd.includes(md)) return;
      const Rd = async function(dd) {
        const Od = this.transaction(dd, Fd ? "readwrite" : "readonly");
        let Rd = Od.store;
        for (var Xd = arguments.length, Kd = new Array(Xd > 1 ? Xd - 1 : 0), hd = 1; hd < Xd; hd++) Kd[hd - 1] = arguments[hd];
        return Wd && (Rd = Rd.index(Kd.shift())), (await Promise.all([Rd[md](...Kd), Fd && Od.done]))[0]
      };
      return gd.set(Od, Rd), Rd
    }
    qd = (dd => ({
      ...dd,
      get: (Od, md, Wd) => wd(Od, md) || dd.get(Od, md, Wd),
      has: (Od, md) => !!wd(Od, md) || dd.has(Od, md)
    }))(qd);
    const Ed = "@firebase/installations",
      Jd = "0.6.4",
      Ud = 1e4,
      xd = `w:${Jd}`,
      Bd = "FIS_v2",
      Sd = 36e5,
      sd = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      ud = new Rd.g("installations", "Installations", sd);

    function Vd(dd) {
      return dd instanceof Rd.k && dd.code.includes("request-failed")
    }

    function Ad(dd) {
      let {
        projectId: Od
      } = dd;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Od}/installations`
    }

    function rd(dd) {
      return {
        token: dd.token,
        requestStatus: 2,
        expiresIn: (Od = dd.expiresIn, Number(Od.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Od
    }
    async function Gd(dd, Od) {
      const md = (await Od.json()).error;
      return ud.create("request-failed", {
        requestName: dd,
        serverCode: md.code,
        serverMessage: md.message,
        serverStatus: md.status
      })
    }

    function nd(dd) {
      let {
        apiKey: Od
      } = dd;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Od
      })
    }

    function Ld(dd, Od) {
      let {
        refreshToken: md
      } = Od;
      const Wd = nd(dd);
      return Wd.append("Authorization", function(dd) {
        return `${Bd} ${dd}`
      }(md)), Wd
    }
    async function Pd(dd) {
      const Od = await dd();
      return Od.status >= 500 && Od.status < 600 ? dd() : Od
    }

    function zd(dd) {
      return new Promise((Od => {
        setTimeout(Od, dd)
      }))
    }
    const cd = /^[cdef][\w-]{21}$/;

    function jd() {
      try {
        const dd = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(dd), dd[0] = 112 + dd[0] % 16;
        const Od = function(dd) {
          const Od = (md = dd, btoa(String.fromCharCode(...md)).replace(/\+/g, "-").replace(/\//g, "_"));
          var md;
          return Od.substr(0, 22)
        }(dd);
        return cd.test(Od) ? Od : ""
      } catch (dd) {
        return ""
      }
    }

    function Dd(dd) {
      return `${dd.appName}!${dd.appId}`
    }
    const ed = new Map;

    function Id(dd, Od) {
      const md = Dd(dd);
      ld(md, Od),
        function(dd, Od) {
          const md = Zd();
          md && md.postMessage({
            key: dd,
            fid: Od
          });
          kd()
        }(md, Od)
    }

    function ld(dd, Od) {
      const md = ed.get(dd);
      if (md)
        for (const Wd of md) Wd(Od)
    }
    let Cd = null;

    function Zd() {
      return !Cd && "BroadcastChannel" in self && (Cd = new BroadcastChannel("[Firebase] FID Change"), Cd.onmessage = dd => {
        ld(dd.data.key, dd.data.fid)
      }), Cd
    }

    function kd() {
      0 === ed.size && Cd && (Cd.close(), Cd = null)
    }
    const fd = "firebase-installations-store";
    let Md = null;

    function dO() {
      return Md || (Md = function(dd, Od) {
        let {
          blocked: md,
          upgrade: Wd,
          blocking: Fd,
          terminated: Rd
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Xd = indexedDB.open(dd, Od),
          Kd = bd(Xd);
        return Wd && Xd.addEventListener("upgradeneeded", (dd => {
          Wd(bd(Xd.result), dd.oldVersion, dd.newVersion, bd(Xd.transaction))
        })), md && Xd.addEventListener("blocked", (() => md())), Kd.then((dd => {
          Rd && dd.addEventListener("close", (() => Rd())), Fd && dd.addEventListener("versionchange", (() => Fd()))
        })).catch((() => {})), Kd
      }("firebase-installations-database", 1, {
        upgrade: (dd, Od) => {
          if (0 === Od) dd.createObjectStore(fd)
        }
      })), Md
    }
    async function OO(dd, Od) {
      const md = Dd(dd),
        Wd = (await dO()).transaction(fd, "readwrite"),
        Fd = Wd.objectStore(fd),
        Rd = await Fd.get(md);
      return await Fd.put(Od, md), await Wd.done, Rd && Rd.fid === Od.fid || Id(dd, Od.fid), Od
    }
    async function mO(dd) {
      const Od = Dd(dd),
        md = (await dO()).transaction(fd, "readwrite");
      await md.objectStore(fd).delete(Od), await md.done
    }
    async function WO(dd, Od) {
      const md = Dd(dd),
        Wd = (await dO()).transaction(fd, "readwrite"),
        Fd = Wd.objectStore(fd),
        Rd = await Fd.get(md),
        Xd = Od(Rd);
      return void 0 === Xd ? await Fd.delete(md) : await Fd.put(Xd, md), await Wd.done, !Xd || Rd && Rd.fid === Xd.fid || Id(dd, Xd.fid), Xd
    }
    async function FO(dd) {
      let Od;
      const md = await WO(dd.appConfig, (md => {
        const Wd = function(dd) {
            const Od = dd || {
              fid: jd(),
              registrationStatus: 0
            };
            return KO(Od)
          }(md),
          Fd = function(dd, Od) {
            if (0 === Od.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Od,
                  registrationPromise: Promise.reject(ud.create("app-offline"))
                }
              }
              const md = {
                  fid: Od.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Wd = async function(dd, Od) {
                  try {
                    const md = await async function(dd, Od) {
                      let {
                        appConfig: md,
                        heartbeatServiceProvider: Wd
                      } = dd, {
                        fid: Fd
                      } = Od;
                      const Rd = Ad(md),
                        Xd = nd(md),
                        Kd = Wd.getImmediate({
                          optional: !0
                        });
                      if (Kd) {
                        const dd = await Kd.getHeartbeatsHeader();
                        dd && Xd.append("x-firebase-client", dd)
                      }
                      const hd = {
                          fid: Fd,
                          authVersion: Bd,
                          appId: md.appId,
                          sdkVersion: xd
                        },
                        vd = {
                          method: "POST",
                          headers: Xd,
                          body: JSON.stringify(hd)
                        },
                        Qd = await Pd((() => fetch(Rd, vd)));
                      if (Qd.ok) {
                        const dd = await Qd.json();
                        return {
                          fid: dd.fid || Fd,
                          registrationStatus: 2,
                          refreshToken: dd.refreshToken,
                          authToken: rd(dd.authToken)
                        }
                      }
                      throw await Gd("Create Installation", Qd)
                    }(dd, Od);
                    return OO(dd.appConfig, md)
                  } catch (md) {
                    throw Vd(md) && 409 === md.customData.serverCode ? await mO(dd.appConfig) : await OO(dd.appConfig, {
                      fid: Od.fid,
                      registrationStatus: 0
                    }), md
                  }
                }(dd, md);
              return {
                installationEntry: md,
                registrationPromise: Wd
              }
            }
            return 1 === Od.registrationStatus ? {
              installationEntry: Od,
              registrationPromise: RO(dd)
            } : {
              installationEntry: Od
            }
          }(dd, Wd);
        return Od = Fd.registrationPromise, Fd.installationEntry
      }));
      return "" === md.fid ? {
        installationEntry: await Od
      } : {
        installationEntry: md,
        registrationPromise: Od
      }
    }
    async function RO(dd) {
      let Od = await XO(dd.appConfig);
      for (; 1 === Od.registrationStatus;) await zd(100), Od = await XO(dd.appConfig);
      if (0 === Od.registrationStatus) {
        const {
          installationEntry: Od,
          registrationPromise: md
        } = await FO(dd);
        return md || Od
      }
      return Od
    }

    function XO(dd) {
      return WO(dd, (dd => {
        if (!dd) throw ud.create("installation-not-found");
        return KO(dd)
      }))
    }

    function KO(dd) {
      return 1 === (Od = dd).registrationStatus && Od.registrationTime + Ud < Date.now() ? {
        fid: dd.fid,
        registrationStatus: 0
      } : dd;
      var Od
    }
    async function hO(dd, Od) {
      let {
        appConfig: md,
        heartbeatServiceProvider: Wd
      } = dd;
      const Fd = function(dd, Od) {
          let {
            fid: md
          } = Od;
          return `${Ad(dd)}/${md}/authTokens:generate`
        }(md, Od),
        Rd = Ld(md, Od),
        Xd = Wd.getImmediate({
          optional: !0
        });
      if (Xd) {
        const dd = await Xd.getHeartbeatsHeader();
        dd && Rd.append("x-firebase-client", dd)
      }
      const Kd = {
          installation: {
            sdkVersion: xd,
            appId: md.appId
          }
        },
        hd = {
          method: "POST",
          headers: Rd,
          body: JSON.stringify(Kd)
        },
        vd = await Pd((() => fetch(Fd, hd)));
      if (vd.ok) {
        return rd(await vd.json())
      }
      throw await Gd("Generate Auth Token", vd)
    }
    async function vO(dd) {
      let Od, md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Wd = await WO(dd.appConfig, (Wd => {
        if (!tO(Wd)) throw ud.create("not-registered");
        const Fd = Wd.authToken;
        if (!md && function(dd) {
            return 2 === dd.requestStatus && ! function(dd) {
              const Od = Date.now();
              return Od < dd.creationTime || dd.creationTime + dd.expiresIn < Od + Sd
            }(dd)
          }(Fd)) return Wd;
        if (1 === Fd.requestStatus) return Od = async function(dd, Od) {
          let md = await QO(dd.appConfig);
          for (; 1 === md.authToken.requestStatus;) await zd(100), md = await QO(dd.appConfig);
          const Wd = md.authToken;
          return 0 === Wd.requestStatus ? vO(dd, Od) : Wd
        }(dd, md), Wd;
        {
          if (!navigator.onLine) throw ud.create("app-offline");
          const md = function(dd) {
            const Od = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, dd), {
              authToken: Od
            })
          }(Wd);
          return Od = async function(dd, Od) {
            try {
              const md = await hO(dd, Od),
                Wd = Object.assign(Object.assign({}, Od), {
                  authToken: md
                });
              return await OO(dd.appConfig, Wd), md
            } catch (md) {
              if (!Vd(md) || 401 !== md.customData.serverCode && 404 !== md.customData.serverCode) {
                const md = Object.assign(Object.assign({}, Od), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await OO(dd.appConfig, md)
              } else await mO(dd.appConfig);
              throw md
            }
          }(dd, md), md
        }
      }));
      return Od ? await Od : Wd.authToken
    }

    function QO(dd) {
      return WO(dd, (dd => {
        if (!tO(dd)) throw ud.create("not-registered");
        const Od = dd.authToken;
        return 1 === (md = Od).requestStatus && md.requestTime + Ud < Date.now() ? Object.assign(Object.assign({}, dd), {
          authToken: {
            requestStatus: 0
          }
        }) : dd;
        var md
      }))
    }

    function tO(dd) {
      return void 0 !== dd && 2 === dd.registrationStatus
    }
    async function oO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const md = dd;
      await async function(dd) {
        const {
          registrationPromise: Od
        } = await FO(dd);
        Od && await Od
      }(md);
      return (await vO(md, Od)).token
    }

    function NO(dd) {
      return ud.create("missing-app-config-values", {
        valueName: dd
      })
    }
    const qO = "installations",
      HO = dd => {
        const Od = dd.getProvider("app").getImmediate(),
          md = function(dd) {
            if (!dd || !dd.options) throw NO("App Configuration");
            if (!dd.name) throw NO("App Name");
            const Od = ["projectId", "apiKey", "appId"];
            for (const md of Od)
              if (!dd.options[md]) throw NO(md);
            return {
              appName: dd.name,
              projectId: dd.options.projectId,
              apiKey: dd.options.apiKey,
              appId: dd.options.appId
            }
          }(Od);
        return {
          app: Od,
          appConfig: md,
          heartbeatServiceProvider: (0, Wd.z)(Od, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      yO = dd => {
        const Od = dd.getProvider("app").getImmediate(),
          md = (0, Wd.z)(Od, qO).getImmediate();
        return {
          getId: () => async function(dd) {
            const Od = dd,
              {
                installationEntry: md,
                registrationPromise: Wd
              } = await FO(Od);
            return Wd ? Wd.catch(console.error) : vO(Od).catch(console.error), md.fid
          }(md),
          getToken: dd => oO(md, dd)
        }
      };
    (0, Wd.C)(new Xd.d(qO, HO, "PUBLIC")), (0, Wd.C)(new Xd.d("installations-internal", yO, "PRIVATE")), (0, Wd.T)(Ed, Jd), (0, Wd.T)(Ed, Jd, "esm2017");
    const bO = "analytics",
      TO = "https://www.googletagmanager.com/gtag/js",
      pO = new Fd.g("@firebase/analytics"),
      YO = {
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
      gO = new Rd.g("analytics", "Analytics", YO);

    function wO(dd) {
      if (!dd.startsWith(TO)) {
        const Od = gO.create("invalid-gtag-resource", {
          gtagURL: dd
        });
        return pO.warn(Od.message), ""
      }
      return dd
    }

    function aO(dd) {
      return Promise.all(dd.map((dd => dd.catch((dd => dd)))))
    }

    function EO(dd, Od) {
      const md = function(dd, Od) {
          let md;
          return window.trustedTypes && (md = window.trustedTypes.createPolicy(dd, Od)), md
        }("firebase-js-sdk-policy", {
          createScriptURL: wO
        }),
        Wd = document.createElement("script"),
        Fd = `${TO}?l=${dd}&id=${Od}`;
      Wd.src = md ? null === md || void 0 === md ? void 0 : md.createScriptURL(Fd) : Fd, Wd.async = !0, document.head.appendChild(Wd)
    }

    function JO(dd, Od, md, Wd) {
      return async function(Fd) {
        try {
          for (var Rd = arguments.length, Xd = new Array(Rd > 1 ? Rd - 1 : 0), Kd = 1; Kd < Rd; Kd++) Xd[Kd - 1] = arguments[Kd];
          if ("event" === Fd) {
            const [Wd, Fd] = Xd;
            await async function(dd, Od, md, Wd, Fd) {
              try {
                let Rd = [];
                if (Fd && Fd.send_to) {
                  let dd = Fd.send_to;
                  Array.isArray(dd) || (dd = [dd]);
                  const Wd = await aO(md);
                  for (const md of dd) {
                    const dd = Wd.find((dd => dd.measurementId === md)),
                      Fd = dd && Od[dd.appId];
                    if (!Fd) {
                      Rd = [];
                      break
                    }
                    Rd.push(Fd)
                  }
                }
                0 === Rd.length && (Rd = Object.values(Od)), await Promise.all(Rd), dd("event", Wd, Fd || {})
              } catch (Rd) {
                pO.error(Rd)
              }
            }(dd, Od, md, Wd, Fd)
          } else if ("config" === Fd) {
            const [Fd, Rd] = Xd;
            await async function(dd, Od, md, Wd, Fd, Rd) {
              const Xd = Wd[Fd];
              try {
                if (Xd) await Od[Xd];
                else {
                  const dd = (await aO(md)).find((dd => dd.measurementId === Fd));
                  dd && await Od[dd.appId]
                }
              } catch (Kd) {
                pO.error(Kd)
              }
              dd("config", Fd, Rd)
            }(dd, Od, md, Wd, Fd, Rd)
          } else if ("consent" === Fd) {
            const [Od] = Xd;
            dd("consent", "update", Od)
          } else if ("get" === Fd) {
            const [Od, md, Wd] = Xd;
            dd("get", Od, md, Wd)
          } else if ("set" === Fd) {
            const [Od] = Xd;
            dd("set", Od)
          } else dd(Fd, ...Xd)
        } catch (hd) {
          pO.error(hd)
        }
      }
    }
    const UO = new class {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = dd, this.intervalMillis = Od
      }
      getThrottleMetadata(dd) {
        return this.throttleMetadata[dd]
      }
      setThrottleMetadata(dd, Od) {
        this.throttleMetadata[dd] = Od
      }
      deleteThrottleMetadata(dd) {
        delete this.throttleMetadata[dd]
      }
    };

    function xO(dd) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": dd
      })
    }
    async function BO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UO,
        md = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Wd,
        apiKey: Fd,
        measurementId: Rd
      } = dd.options;
      if (!Wd) throw gO.create("no-app-id");
      if (!Fd) {
        if (Rd) return {
          measurementId: Rd,
          appId: Wd
        };
        throw gO.create("no-api-key")
      }
      const Xd = Od.getThrottleMetadata(Wd) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Kd = new sO;
      return setTimeout((async () => {
        Kd.abort()
      }), void 0 !== md ? md : 6e4), SO({
        appId: Wd,
        apiKey: Fd,
        measurementId: Rd
      }, Xd, Kd, Od)
    }
    async function SO(dd, Od, md) {
      let {
        throttleEndTimeMillis: Wd,
        backoffCount: Fd
      } = Od, Xd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UO;
      var Kd;
      const {
        appId: hd,
        measurementId: vd
      } = dd;
      try {
        await
        function(dd, Od) {
          return new Promise(((md, Wd) => {
            const Fd = Math.max(Od - Date.now(), 0),
              Rd = setTimeout(md, Fd);
            dd.addEventListener((() => {
              clearTimeout(Rd), Wd(gO.create("fetch-throttle", {
                throttleEndTimeMillis: Od
              }))
            }))
          }))
        }(md, Wd)
      } catch (Qd) {
        if (vd) return pO.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${vd} provided in the "measurementId" field in the local Firebase config. [${null===Qd||void 0===Qd?void 0:Qd.message}]`), {
          appId: hd,
          measurementId: vd
        };
        throw Qd
      }
      try {
        const Od = await async function(dd) {
          var Od;
          const {
            appId: md,
            apiKey: Wd
          } = dd, Fd = {
            method: "GET",
            headers: xO(Wd)
          }, Rd = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", md), Xd = await fetch(Rd, Fd);
          if (200 !== Xd.status && 304 !== Xd.status) {
            let dd = "";
            try {
              const md = await Xd.json();
              (null === (Od = md.error) || void 0 === Od ? void 0 : Od.message) && (dd = md.error.message)
            } catch (Kd) {}
            throw gO.create("config-fetch-failed", {
              httpStatus: Xd.status,
              responseMessage: dd
            })
          }
          return Xd.json()
        }(dd);
        return Xd.deleteThrottleMetadata(hd), Od
      } catch (Qd) {
        const Od = Qd;
        if (! function(dd) {
            if (!(dd instanceof Rd.k) || !dd.customData) return !1;
            const Od = Number(dd.customData.httpStatus);
            return 429 === Od || 500 === Od || 503 === Od || 504 === Od
          }(Od)) {
          if (Xd.deleteThrottleMetadata(hd), vd) return pO.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${vd} provided in the "measurementId" field in the local Firebase config. [${null===Od||void 0===Od?void 0:Od.message}]`), {
            appId: hd,
            measurementId: vd
          };
          throw Qd
        }
        const Wd = 503 === Number(null === (Kd = null === Od || void 0 === Od ? void 0 : Od.customData) || void 0 === Kd ? void 0 : Kd.httpStatus) ? (0, Rd.w)(Fd, Xd.intervalMillis, 30) : (0, Rd.w)(Fd, Xd.intervalMillis),
          td = {
            throttleEndTimeMillis: Date.now() + Wd,
            backoffCount: Fd + 1
          };
        return Xd.setThrottleMetadata(hd, td), pO.debug(`Calling attemptFetch again in ${Wd} millis`), SO(dd, td, md, Xd)
      }
    }
    class sO {
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
    let uO, VO;

    function iO(dd) {
      VO = dd
    }

    function AO(dd) {
      uO = dd
    }
    async function rO(dd, Od, md, Wd, Fd, Xd, Kd) {
      var hd;
      const vd = BO(dd);
      vd.then((Od => {
        md[Od.measurementId] = Od.appId, dd.options.measurementId && Od.measurementId !== dd.options.measurementId && pO.warn(`The measurement ID in the local Firebase config (${dd.options.measurementId}) does not match the measurement ID fetched from the server (${Od.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((dd => pO.error(dd))), Od.push(vd);
      const Qd = async function() {
        if (!(0, Rd.bb)()) return pO.warn(gO.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Rd.pb)()
        } catch (dd) {
          return pO.warn(gO.create("indexeddb-unavailable", {
            errorInfo: null === dd || void 0 === dd ? void 0 : dd.toString()
          }).message), !1
        }
        return !0
      }().then((dd => dd ? Wd.getId() : void 0)), [td, od] = await Promise.all([vd, Qd]);
      (function(dd) {
        const Od = window.document.getElementsByTagName("script");
        for (const md of Object.values(Od))
          if (md.src && md.src.includes(TO) && md.src.includes(dd)) return md;
        return null
      })(Xd) || EO(Xd, td.measurementId), VO && (Fd("consent", "default", VO), iO(void 0)), Fd("js", new Date);
      const Nd = null !== (hd = null === Kd || void 0 === Kd ? void 0 : Kd.config) && void 0 !== hd ? hd : {};
      return Nd.origin = "firebase", Nd.update = !0, null != od && (Nd.firebase_id = od), Fd("config", td.measurementId, Nd), uO && (Fd("set", uO), AO(void 0)), td.measurementId
    }
    class GO {
      constructor(dd) {
        this.app = dd
      }
      _delete() {
        return delete nO[this.app.options.appId], Promise.resolve()
      }
    }
    let nO = {},
      LO = [];
    const PO = {};
    let zO, cO, jO = "dataLayer",
      DO = "gtag",
      eO = !1;

    function IO(dd) {
      if (eO) throw gO.create("already-initialized");
      dd.dataLayerName && (jO = dd.dataLayerName), dd.gtagName && (DO = dd.gtagName)
    }

    function lO(dd, Od, md) {
      ! function() {
        const dd = [];
        if ((0, Rd.V)() && dd.push("This is a browser extension environment."), (0, Rd.o)() || dd.push("Cookies are not available."), dd.length > 0) {
          const Od = dd.map(((dd, Od) => `(${Od+1}) ${dd}`)).join(" "),
            md = gO.create("invalid-analytics-context", {
              errorInfo: Od
            });
          pO.warn(md.message)
        }
      }();
      const Wd = dd.options.appId;
      if (!Wd) throw gO.create("no-app-id");
      if (!dd.options.apiKey) {
        if (!dd.options.measurementId) throw gO.create("no-api-key");
        pO.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${dd.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != nO[Wd]) throw gO.create("already-exists", {
        id: Wd
      });
      if (!eO) {
        ! function(dd) {
          let Od = [];
          Array.isArray(window[dd]) ? Od = window[dd] : window[dd] = Od
        }(jO);
        const {
          wrappedGtag: dd,
          gtagCore: Od
        } = function(dd, Od, md, Wd, Fd) {
          let Rd = function() {
            for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
            window[Wd].push(arguments)
          };
          return window[Fd] && "function" === typeof window[Fd] && (Rd = window[Fd]), window[Fd] = JO(Rd, dd, Od, md), {
            gtagCore: Rd,
            wrappedGtag: window[Fd]
          }
        }(nO, LO, PO, jO, DO);
        cO = dd, zO = Od, eO = !0
      }
      nO[Wd] = rO(dd, LO, PO, Od, zO, jO, md);
      return new GO(dd)
    }

    function CO() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Wd.L)();
      dd = (0, Rd.O)(dd);
      const Od = (0, Wd.z)(dd, bO);
      return Od.isInitialized() ? Od.getImmediate() : ZO(dd)
    }

    function ZO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const md = (0, Wd.z)(dd, bO);
      if (md.isInitialized()) {
        const dd = md.getImmediate();
        if ((0, Rd.A)(Od, md.getOptions())) return dd;
        throw gO.create("already-initialized")
      }
      return md.initialize({
        options: Od
      })
    }
    async function kO() {
      if ((0, Rd.V)()) return !1;
      if (!(0, Rd.o)()) return !1;
      if (!(0, Rd.bb)()) return !1;
      try {
        return await (0, Rd.pb)()
      } catch (dd) {
        return !1
      }
    }

    function fO(dd, Od, md) {
      dd = (0, Rd.O)(dd), async function(dd, Od, md, Wd) {
        if (Wd && Wd.global) return dd("set", {
          screen_name: md
        }), Promise.resolve();
        dd("config", await Od, {
          update: !0,
          screen_name: md
        })
      }(cO, nO[dd.app.options.appId], Od, md).catch((dd => pO.error(dd)))
    }
    async function MO(dd) {
      return dd = (0, Rd.O)(dd), async function(dd, Od) {
        const md = await Od;
        return new Promise(((Od, Wd) => {
          dd("get", md, "client_id", (dd => {
            dd || Wd(gO.create("no-client-id")), Od(dd)
          }))
        }))
      }(cO, nO[dd.app.options.appId])
    }

    function dm(dd, Od, md) {
      dd = (0, Rd.O)(dd), async function(dd, Od, md, Wd) {
        if (Wd && Wd.global) return dd("set", {
          user_id: md
        }), Promise.resolve();
        dd("config", await Od, {
          update: !0,
          user_id: md
        })
      }(cO, nO[dd.app.options.appId], Od, md).catch((dd => pO.error(dd)))
    }

    function Om(dd, Od, md) {
      dd = (0, Rd.O)(dd), async function(dd, Od, md, Wd) {
        if (Wd && Wd.global) {
          const Od = {};
          for (const dd of Object.keys(md)) Od[`user_properties.${dd}`] = md[dd];
          return dd("set", Od), Promise.resolve()
        }
        dd("config", await Od, {
          update: !0,
          user_properties: md
        })
      }(cO, nO[dd.app.options.appId], Od, md).catch((dd => pO.error(dd)))
    }

    function mm(dd, Od) {
      dd = (0, Rd.O)(dd), async function(dd, Od) {
        const md = await dd;
        window[`ga-disable-${md}`] = !Od
      }(nO[dd.app.options.appId], Od).catch((dd => pO.error(dd)))
    }

    function Wm(dd) {
      cO ? cO("set", dd) : AO(dd)
    }

    function Fm(dd, Od, md, Wd) {
      dd = (0, Rd.O)(dd), async function(dd, Od, md, Wd, Fd) {
        if (Fd && Fd.global) dd("event", md, Wd);
        else {
          const Fd = await Od;
          dd("event", md, Object.assign(Object.assign({}, Wd), {
            send_to: Fd
          }))
        }
      }(cO, nO[dd.app.options.appId], Od, md, Wd).catch((dd => pO.error(dd)))
    }

    function Rm(dd) {
      cO ? cO("consent", "update", dd) : iO(dd)
    }
    const Xm = "@firebase/analytics",
      Km = "0.10.0";
    (0, Wd.C)(new Xd.d(bO, ((dd, Od) => {
      let {
        options: md
      } = Od;
      return lO(dd.getProvider("app").getImmediate(), dd.getProvider("installations-internal").getImmediate(), md)
    }), "PUBLIC")), (0, Wd.C)(new Xd.d("analytics-internal", (function(dd) {
      try {
        const Od = dd.getProvider(bO).getImmediate();
        return {
          logEvent: (dd, md, Wd) => Fm(Od, dd, md, Wd)
        }
      } catch (Od) {
        throw gO.create("interop-component-reg-failed", {
          reason: Od
        })
      }
    }), "PRIVATE")), (0, Wd.T)(Xm, Km), (0, Wd.T)(Xm, Km, "esm2017")
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);