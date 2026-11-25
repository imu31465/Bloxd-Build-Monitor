/*! For license information please see wp3j0a.271.6b525b4a.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40909: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      getAnalytics: () => Hb,
      getGoogleAnalyticsClientId: () => Ob,
      initializeAnalytics: () => tb,
      isSupported: () => Db,
      logEvent: () => ZZ,
      setAnalyticsCollectionEnabled: () => GZ,
      setConsent: () => wZ,
      setCurrentScreen: () => Nb,
      setDefaultEventParameters: () => bZ,
      setUserId: () => xb,
      setUserProperties: () => Bb,
      settings: () => Rb
    });
    var wG = ZG(40891),
      SG = ZG(40901),
      LG = ZG(40899),
      yG = ZG(40895);
    let kG, UG;
    const YG = new WeakMap,
      VG = new WeakMap,
      pG = new WeakMap,
      fG = new WeakMap,
      QG = new WeakMap;
    let KG = {
      get(GG, bG, ZG) {
        if (GG instanceof IDBTransaction) {
          if ("done" === bG) return VG.get(GG);
          if ("objectStoreNames" === bG) return GG.objectStoreNames || pG.get(GG);
          if ("store" === bG) return ZG.objectStoreNames[1] ? void 0 : ZG.objectStore(ZG.objectStoreNames[0])
        }
        return JG(GG[bG])
      },
      set: (GG, bG, ZG) => (GG[bG] = ZG, !0),
      has: (GG, bG) => GG instanceof IDBTransaction && ("done" === bG || "store" === bG) || bG in GG
    };

    function hG(GG) {
      return GG !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (UG || (UG = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(GG) ? function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return GG.apply(rG(this), ZG), JG(YG.get(this))
      } : function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return JG(GG.apply(rG(this), ZG))
      } : function(bG) {
        for (var ZG = arguments.length, wG = new Array(ZG > 1 ? ZG - 1 : 0), SG = 1; SG < ZG; SG++) wG[SG - 1] = arguments[SG];
        const LG = GG.call(rG(this), bG, ...wG);
        return pG.set(LG, bG.sort ? bG.sort() : [bG]), JG(LG)
      }
    }

    function dG(GG) {
      return "function" === typeof GG ? hG(GG) : (GG instanceof IDBTransaction && function(GG) {
        if (VG.has(GG)) return;
        const bG = new Promise(((bG, ZG) => {
          const wG = () => {
              GG.removeEventListener("complete", SG), GG.removeEventListener("error", LG), GG.removeEventListener("abort", LG)
            },
            SG = () => {
              bG(), wG()
            },
            LG = () => {
              ZG(GG.error || new DOMException("AbortError", "AbortError")), wG()
            };
          GG.addEventListener("complete", SG), GG.addEventListener("error", LG), GG.addEventListener("abort", LG)
        }));
        VG.set(GG, bG)
      }(GG), bG = GG, (kG || (kG = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((GG => bG instanceof GG)) ? new Proxy(GG, KG) : GG);
      var bG
    }

    function JG(GG) {
      if (GG instanceof IDBRequest) return function(GG) {
        const bG = new Promise(((bG, ZG) => {
          const wG = () => {
              GG.removeEventListener("success", SG), GG.removeEventListener("error", LG)
            },
            SG = () => {
              bG(JG(GG.result)), wG()
            },
            LG = () => {
              ZG(GG.error), wG()
            };
          GG.addEventListener("success", SG), GG.addEventListener("error", LG)
        }));
        return bG.then((bG => {
          bG instanceof IDBCursor && YG.set(bG, GG)
        })).catch((() => {})), QG.set(bG, GG), bG
      }(GG);
      if (fG.has(GG)) return fG.get(GG);
      const bG = dG(GG);
      return bG !== GG && (fG.set(GG, bG), QG.set(bG, GG)), bG
    }
    const rG = GG => QG.get(GG);
    const zG = ["get", "getKey", "getAll", "getAllKeys", "count"],
      EG = ["put", "add", "delete", "clear"],
      oG = new Map;

    function XG(GG, bG) {
      if (!(GG instanceof IDBDatabase) || bG in GG || "string" !== typeof bG) return;
      if (oG.get(bG)) return oG.get(bG);
      const ZG = bG.replace(/FromIndex$/, ""),
        wG = bG !== ZG,
        SG = EG.includes(ZG);
      if (!(ZG in (wG ? IDBIndex : IDBObjectStore).prototype) || !SG && !zG.includes(ZG)) return;
      const LG = async function(GG) {
        const bG = this.transaction(GG, SG ? "readwrite" : "readonly");
        let LG = bG.store;
        for (var yG = arguments.length, kG = new Array(yG > 1 ? yG - 1 : 0), UG = 1; UG < yG; UG++) kG[UG - 1] = arguments[UG];
        return wG && (LG = LG.index(kG.shift())), (await Promise.all([LG[ZG](...kG), SG && bG.done]))[0]
      };
      return oG.set(bG, LG), LG
    }
    KG = (GG => ({
      ...GG,
      get: (bG, ZG, wG) => XG(bG, ZG) || GG.get(bG, ZG, wG),
      has: (bG, ZG) => !!XG(bG, ZG) || GG.has(bG, ZG)
    }))(KG);
    const uG = "@firebase/installations",
      iG = "0.6.4",
      CG = 1e4,
      WG = `w:${iG}`,
      mG = "FIS_v2",
      IG = 36e5,
      FG = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      vG = new LG.i("installations", "Installations", FG);

    function aG(GG) {
      return GG instanceof LG.m && GG.code.includes("request-failed")
    }

    function cG(GG) {
      let {
        projectId: bG
      } = GG;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${bG}/installations`
    }

    function lG(GG) {
      return {
        token: GG.token,
        requestStatus: 2,
        expiresIn: (bG = GG.expiresIn, Number(bG.replace("s", "000"))),
        creationTime: Date.now()
      };
      var bG
    }
    async function jG(GG, bG) {
      const ZG = (await bG.json()).error;
      return vG.create("request-failed", {
        requestName: GG,
        serverCode: ZG.code,
        serverMessage: ZG.message,
        serverStatus: ZG.status
      })
    }

    function PG(GG) {
      let {
        apiKey: bG
      } = GG;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": bG
      })
    }

    function MG(GG, bG) {
      let {
        refreshToken: ZG
      } = bG;
      const wG = PG(GG);
      return wG.append("Authorization", function(GG) {
        return `${mG} ${GG}`
      }(ZG)), wG
    }
    async function AG(GG) {
      const bG = await GG();
      return bG.status >= 500 && bG.status < 600 ? GG() : bG
    }

    function sG(GG) {
      return new Promise((bG => {
        setTimeout(bG, GG)
      }))
    }
    const qG = /^[cdef][\w-]{21}$/;

    function nG() {
      try {
        const GG = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(GG), GG[0] = 112 + GG[0] % 16;
        const bG = function(GG) {
          const bG = (ZG = GG, btoa(String.fromCharCode(...ZG)).replace(/\+/g, "-").replace(/\//g, "_"));
          var ZG;
          return bG.substr(0, 22)
        }(GG);
        return qG.test(bG) ? bG : ""
      } catch (GG) {
        return ""
      }
    }

    function gG(GG) {
      return `${GG.appName}!${GG.appId}`
    }
    const eG = new Map;

    function RG(GG, bG) {
      const ZG = gG(GG);
      TG(ZG, bG),
        function(GG, bG) {
          const ZG = tG();
          ZG && ZG.postMessage({
            key: GG,
            fid: bG
          });
          DG()
        }(ZG, bG)
    }

    function TG(GG, bG) {
      const ZG = eG.get(GG);
      if (ZG)
        for (const wG of ZG) wG(bG)
    }
    let HG = null;

    function tG() {
      return !HG && "BroadcastChannel" in self && (HG = new BroadcastChannel("[Firebase] FID Change"), HG.onmessage = GG => {
        TG(GG.data.key, GG.data.fid)
      }), HG
    }

    function DG() {
      0 === eG.size && HG && (HG.close(), HG = null)
    }
    const NG = "firebase-installations-store";
    let OG = null;

    function xG() {
      return OG || (OG = function(GG, bG) {
        let {
          blocked: ZG,
          upgrade: wG,
          blocking: SG,
          terminated: LG
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const yG = indexedDB.open(GG, bG),
          kG = JG(yG);
        return wG && yG.addEventListener("upgradeneeded", (GG => {
          wG(JG(yG.result), GG.oldVersion, GG.newVersion, JG(yG.transaction))
        })), ZG && yG.addEventListener("blocked", (() => ZG())), kG.then((GG => {
          LG && GG.addEventListener("close", (() => LG())), SG && GG.addEventListener("versionchange", (() => SG()))
        })).catch((() => {})), kG
      }("firebase-installations-database", 1, {
        upgrade: (GG, bG) => {
          if (0 === bG) GG.createObjectStore(NG)
        }
      })), OG
    }
    async function BG(GG, bG) {
      const ZG = gG(GG),
        wG = (await xG()).transaction(NG, "readwrite"),
        SG = wG.objectStore(NG),
        LG = await SG.get(ZG);
      return await SG.put(bG, ZG), await wG.done, LG && LG.fid === bG.fid || RG(GG, bG.fid), bG
    }
    async function Gb(GG) {
      const bG = gG(GG),
        ZG = (await xG()).transaction(NG, "readwrite");
      await ZG.objectStore(NG).delete(bG), await ZG.done
    }
    async function bb(GG, bG) {
      const ZG = gG(GG),
        wG = (await xG()).transaction(NG, "readwrite"),
        SG = wG.objectStore(NG),
        LG = await SG.get(ZG),
        yG = bG(LG);
      return void 0 === yG ? await SG.delete(ZG) : await SG.put(yG, ZG), await wG.done, !yG || LG && LG.fid === yG.fid || RG(GG, yG.fid), yG
    }
    async function Zb(GG) {
      let bG;
      const ZG = await bb(GG.appConfig, (ZG => {
        const wG = function(GG) {
            const bG = GG || {
              fid: nG(),
              registrationStatus: 0
            };
            return Lb(bG)
          }(ZG),
          SG = function(GG, bG) {
            if (0 === bG.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: bG,
                  registrationPromise: Promise.reject(vG.create("app-offline"))
                }
              }
              const ZG = {
                  fid: bG.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                wG = async function(GG, bG) {
                  try {
                    const ZG = await async function(GG, bG) {
                      let {
                        appConfig: ZG,
                        heartbeatServiceProvider: wG
                      } = GG, {
                        fid: SG
                      } = bG;
                      const LG = cG(ZG),
                        yG = PG(ZG),
                        kG = wG.getImmediate({
                          optional: !0
                        });
                      if (kG) {
                        const GG = await kG.getHeartbeatsHeader();
                        GG && yG.append("x-firebase-client", GG)
                      }
                      const UG = {
                          fid: SG,
                          authVersion: mG,
                          appId: ZG.appId,
                          sdkVersion: WG
                        },
                        YG = {
                          method: "POST",
                          headers: yG,
                          body: JSON.stringify(UG)
                        },
                        VG = await AG((() => fetch(LG, YG)));
                      if (VG.ok) {
                        const GG = await VG.json();
                        return {
                          fid: GG.fid || SG,
                          registrationStatus: 2,
                          refreshToken: GG.refreshToken,
                          authToken: lG(GG.authToken)
                        }
                      }
                      throw await jG("Create Installation", VG)
                    }(GG, bG);
                    return BG(GG.appConfig, ZG)
                  } catch (ZG) {
                    throw aG(ZG) && 409 === ZG.customData.serverCode ? await Gb(GG.appConfig) : await BG(GG.appConfig, {
                      fid: bG.fid,
                      registrationStatus: 0
                    }), ZG
                  }
                }(GG, ZG);
              return {
                installationEntry: ZG,
                registrationPromise: wG
              }
            }
            return 1 === bG.registrationStatus ? {
              installationEntry: bG,
              registrationPromise: wb(GG)
            } : {
              installationEntry: bG
            }
          }(GG, wG);
        return bG = SG.registrationPromise, SG.installationEntry
      }));
      return "" === ZG.fid ? {
        installationEntry: await bG
      } : {
        installationEntry: ZG,
        registrationPromise: bG
      }
    }
    async function wb(GG) {
      let bG = await Sb(GG.appConfig);
      for (; 1 === bG.registrationStatus;) await sG(100), bG = await Sb(GG.appConfig);
      if (0 === bG.registrationStatus) {
        const {
          installationEntry: bG,
          registrationPromise: ZG
        } = await Zb(GG);
        return ZG || bG
      }
      return bG
    }

    function Sb(GG) {
      return bb(GG, (GG => {
        if (!GG) throw vG.create("installation-not-found");
        return Lb(GG)
      }))
    }

    function Lb(GG) {
      return 1 === (bG = GG).registrationStatus && bG.registrationTime + CG < Date.now() ? {
        fid: GG.fid,
        registrationStatus: 0
      } : GG;
      var bG
    }
    async function yb(GG, bG) {
      let {
        appConfig: ZG,
        heartbeatServiceProvider: wG
      } = GG;
      const SG = function(GG, bG) {
          let {
            fid: ZG
          } = bG;
          return `${cG(GG)}/${ZG}/authTokens:generate`
        }(ZG, bG),
        LG = MG(ZG, bG),
        yG = wG.getImmediate({
          optional: !0
        });
      if (yG) {
        const GG = await yG.getHeartbeatsHeader();
        GG && LG.append("x-firebase-client", GG)
      }
      const kG = {
          installation: {
            sdkVersion: WG,
            appId: ZG.appId
          }
        },
        UG = {
          method: "POST",
          headers: LG,
          body: JSON.stringify(kG)
        },
        YG = await AG((() => fetch(SG, UG)));
      if (YG.ok) {
        return lG(await YG.json())
      }
      throw await jG("Generate Auth Token", YG)
    }
    async function kb(GG) {
      let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const wG = await bb(GG.appConfig, (wG => {
        if (!Yb(wG)) throw vG.create("not-registered");
        const SG = wG.authToken;
        if (!ZG && function(GG) {
            return 2 === GG.requestStatus && ! function(GG) {
              const bG = Date.now();
              return bG < GG.creationTime || GG.creationTime + GG.expiresIn < bG + IG
            }(GG)
          }(SG)) return wG;
        if (1 === SG.requestStatus) return bG = async function(GG, bG) {
          let ZG = await Ub(GG.appConfig);
          for (; 1 === ZG.authToken.requestStatus;) await sG(100), ZG = await Ub(GG.appConfig);
          const wG = ZG.authToken;
          return 0 === wG.requestStatus ? kb(GG, bG) : wG
        }(GG, ZG), wG;
        {
          if (!navigator.onLine) throw vG.create("app-offline");
          const ZG = function(GG) {
            const bG = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, GG), {
              authToken: bG
            })
          }(wG);
          return bG = async function(GG, bG) {
            try {
              const ZG = await yb(GG, bG),
                wG = Object.assign(Object.assign({}, bG), {
                  authToken: ZG
                });
              return await BG(GG.appConfig, wG), ZG
            } catch (ZG) {
              if (!aG(ZG) || 401 !== ZG.customData.serverCode && 404 !== ZG.customData.serverCode) {
                const ZG = Object.assign(Object.assign({}, bG), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await BG(GG.appConfig, ZG)
              } else await Gb(GG.appConfig);
              throw ZG
            }
          }(GG, ZG), ZG
        }
      }));
      return bG ? await bG : wG.authToken
    }

    function Ub(GG) {
      return bb(GG, (GG => {
        if (!Yb(GG)) throw vG.create("not-registered");
        const bG = GG.authToken;
        return 1 === (ZG = bG).requestStatus && ZG.requestTime + CG < Date.now() ? Object.assign(Object.assign({}, GG), {
          authToken: {
            requestStatus: 0
          }
        }) : GG;
        var ZG
      }))
    }

    function Yb(GG) {
      return void 0 !== GG && 2 === GG.registrationStatus
    }
    async function Vb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ZG = GG;
      await async function(GG) {
        const {
          registrationPromise: bG
        } = await Zb(GG);
        bG && await bG
      }(ZG);
      return (await kb(ZG, bG)).token
    }

    function pb(GG) {
      return vG.create("missing-app-config-values", {
        valueName: GG
      })
    }
    const fb = "installations",
      Qb = GG => {
        const bG = GG.getProvider("app").getImmediate(),
          ZG = function(GG) {
            if (!GG || !GG.options) throw pb("App Configuration");
            if (!GG.name) throw pb("App Name");
            const bG = ["projectId", "apiKey", "appId"];
            for (const ZG of bG)
              if (!GG.options[ZG]) throw pb(ZG);
            return {
              appName: GG.name,
              projectId: GG.options.projectId,
              apiKey: GG.options.apiKey,
              appId: GG.options.appId
            }
          }(bG);
        return {
          app: bG,
          appConfig: ZG,
          heartbeatServiceProvider: (0, wG.y)(bG, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Kb = GG => {
        const bG = GG.getProvider("app").getImmediate(),
          ZG = (0, wG.y)(bG, fb).getImmediate();
        return {
          getId: () => async function(GG) {
            const bG = GG,
              {
                installationEntry: ZG,
                registrationPromise: wG
              } = await Zb(bG);
            return wG ? wG.catch(console.error) : kb(bG).catch(console.error), ZG.fid
          }(ZG),
          getToken: GG => Vb(ZG, GG)
        }
      };
    (0, wG.B)(new yG.f(fb, Qb, "PUBLIC")), (0, wG.B)(new yG.f("installations-internal", Kb, "PRIVATE")), (0, wG.U)(uG, iG), (0, wG.U)(uG, iG, "esm2017");
    const hb = "analytics",
      db = "https://www.googletagmanager.com/gtag/js",
      Jb = new SG.e("@firebase/analytics"),
      rb = {
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
      zb = new LG.i("analytics", "Analytics", rb);

    function Eb(GG) {
      if (!GG.startsWith(db)) {
        const bG = zb.create("invalid-gtag-resource", {
          gtagURL: GG
        });
        return Jb.warn(bG.message), ""
      }
      return GG
    }

    function ob(GG) {
      return Promise.all(GG.map((GG => GG.catch((GG => GG)))))
    }

    function Xb(GG, bG) {
      const ZG = function(GG, bG) {
          let ZG;
          return window.trustedTypes && (ZG = window.trustedTypes.createPolicy(GG, bG)), ZG
        }("firebase-js-sdk-policy", {
          createScriptURL: Eb
        }),
        wG = document.createElement("script"),
        SG = `${db}?l=${GG}&id=${bG}`;
      wG.src = ZG ? null === ZG || void 0 === ZG ? void 0 : ZG.createScriptURL(SG) : SG, wG.async = !0, document.head.appendChild(wG)
    }

    function ub(GG, bG, ZG, wG) {
      return async function(SG) {
        try {
          for (var LG = arguments.length, yG = new Array(LG > 1 ? LG - 1 : 0), kG = 1; kG < LG; kG++) yG[kG - 1] = arguments[kG];
          if ("event" === SG) {
            const [wG, SG] = yG;
            await async function(GG, bG, ZG, wG, SG) {
              try {
                let LG = [];
                if (SG && SG.send_to) {
                  let GG = SG.send_to;
                  Array.isArray(GG) || (GG = [GG]);
                  const wG = await ob(ZG);
                  for (const ZG of GG) {
                    const GG = wG.find((GG => GG.measurementId === ZG)),
                      SG = GG && bG[GG.appId];
                    if (!SG) {
                      LG = [];
                      break
                    }
                    LG.push(SG)
                  }
                }
                0 === LG.length && (LG = Object.values(bG)), await Promise.all(LG), GG("event", wG, SG || {})
              } catch (LG) {
                Jb.error(LG)
              }
            }(GG, bG, ZG, wG, SG)
          } else if ("config" === SG) {
            const [SG, LG] = yG;
            await async function(GG, bG, ZG, wG, SG, LG) {
              const yG = wG[SG];
              try {
                if (yG) await bG[yG];
                else {
                  const GG = (await ob(ZG)).find((GG => GG.measurementId === SG));
                  GG && await bG[GG.appId]
                }
              } catch (kG) {
                Jb.error(kG)
              }
              GG("config", SG, LG)
            }(GG, bG, ZG, wG, SG, LG)
          } else if ("consent" === SG) {
            const [bG] = yG;
            GG("consent", "update", bG)
          } else if ("get" === SG) {
            const [bG, ZG, wG] = yG;
            GG("get", bG, ZG, wG)
          } else if ("set" === SG) {
            const [bG] = yG;
            GG("set", bG)
          } else GG(SG, ...yG)
        } catch (UG) {
          Jb.error(UG)
        }
      }
    }
    const ib = new class {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = GG, this.intervalMillis = bG
      }
      getThrottleMetadata(GG) {
        return this.throttleMetadata[GG]
      }
      setThrottleMetadata(GG, bG) {
        this.throttleMetadata[GG] = bG
      }
      deleteThrottleMetadata(GG) {
        delete this.throttleMetadata[GG]
      }
    };

    function Cb(GG) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": GG
      })
    }
    async function Wb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ib,
        ZG = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: wG,
        apiKey: SG,
        measurementId: LG
      } = GG.options;
      if (!wG) throw zb.create("no-app-id");
      if (!SG) {
        if (LG) return {
          measurementId: LG,
          appId: wG
        };
        throw zb.create("no-api-key")
      }
      const yG = bG.getThrottleMetadata(wG) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        kG = new Ib;
      return setTimeout((async () => {
        kG.abort()
      }), void 0 !== ZG ? ZG : 6e4), mb({
        appId: wG,
        apiKey: SG,
        measurementId: LG
      }, yG, kG, bG)
    }
    async function mb(GG, bG, ZG) {
      let {
        throttleEndTimeMillis: wG,
        backoffCount: SG
      } = bG, yG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ib;
      var kG;
      const {
        appId: UG,
        measurementId: YG
      } = GG;
      try {
        await
        function(GG, bG) {
          return new Promise(((ZG, wG) => {
            const SG = Math.max(bG - Date.now(), 0),
              LG = setTimeout(ZG, SG);
            GG.addEventListener((() => {
              clearTimeout(LG), wG(zb.create("fetch-throttle", {
                throttleEndTimeMillis: bG
              }))
            }))
          }))
        }(ZG, wG)
      } catch (VG) {
        if (YG) return Jb.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${YG} provided in the "measurementId" field in the local Firebase config. [${null===VG||void 0===VG?void 0:VG.message}]`), {
          appId: UG,
          measurementId: YG
        };
        throw VG
      }
      try {
        const bG = await async function(GG) {
          var bG;
          const {
            appId: ZG,
            apiKey: wG
          } = GG, SG = {
            method: "GET",
            headers: Cb(wG)
          }, LG = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZG), yG = await fetch(LG, SG);
          if (200 !== yG.status && 304 !== yG.status) {
            let GG = "";
            try {
              const ZG = await yG.json();
              (null === (bG = ZG.error) || void 0 === bG ? void 0 : bG.message) && (GG = ZG.error.message)
            } catch (kG) {}
            throw zb.create("config-fetch-failed", {
              httpStatus: yG.status,
              responseMessage: GG
            })
          }
          return yG.json()
        }(GG);
        return yG.deleteThrottleMetadata(UG), bG
      } catch (VG) {
        const bG = VG;
        if (! function(GG) {
            if (!(GG instanceof LG.m) || !GG.customData) return !1;
            const bG = Number(GG.customData.httpStatus);
            return 429 === bG || 500 === bG || 503 === bG || 504 === bG
          }(bG)) {
          if (yG.deleteThrottleMetadata(UG), YG) return Jb.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${YG} provided in the "measurementId" field in the local Firebase config. [${null===bG||void 0===bG?void 0:bG.message}]`), {
            appId: UG,
            measurementId: YG
          };
          throw VG
        }
        const wG = 503 === Number(null === (kG = null === bG || void 0 === bG ? void 0 : bG.customData) || void 0 === kG ? void 0 : kG.httpStatus) ? (0, LG.t)(SG, yG.intervalMillis, 30) : (0, LG.t)(SG, yG.intervalMillis),
          pG = {
            throttleEndTimeMillis: Date.now() + wG,
            backoffCount: SG + 1
          };
        return yG.setThrottleMetadata(UG, pG), Jb.debug(`Calling attemptFetch again in ${wG} millis`), mb(GG, pG, ZG, yG)
      }
    }
    class Ib {
      constructor() {
        this.listeners = []
      }
      addEventListener(GG) {
        this.listeners.push(GG)
      }
      abort() {
        this.listeners.forEach((GG => GG()))
      }
    }
    let Fb, vb;

    function ab(GG) {
      vb = GG
    }

    function cb(GG) {
      Fb = GG
    }
    async function lb(GG, bG, ZG, wG, SG, yG, kG) {
      var UG;
      const YG = Wb(GG);
      YG.then((bG => {
        ZG[bG.measurementId] = bG.appId, GG.options.measurementId && bG.measurementId !== GG.options.measurementId && Jb.warn(`The measurement ID in the local Firebase config (${GG.options.measurementId}) does not match the measurement ID fetched from the server (${bG.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((GG => Jb.error(GG))), bG.push(YG);
      const VG = async function() {
        if (!(0, LG.U)()) return Jb.warn(zb.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, LG.fb)()
        } catch (GG) {
          return Jb.warn(zb.create("indexeddb-unavailable", {
            errorInfo: null === GG || void 0 === GG ? void 0 : GG.toString()
          }).message), !1
        }
        return !0
      }().then((GG => GG ? wG.getId() : void 0)), [pG, fG] = await Promise.all([YG, VG]);
      (function(GG) {
        const bG = window.document.getElementsByTagName("script");
        for (const ZG of Object.values(bG))
          if (ZG.src && ZG.src.includes(db) && ZG.src.includes(GG)) return ZG;
        return null
      })(yG) || Xb(yG, pG.measurementId), vb && (SG("consent", "default", vb), ab(void 0)), SG("js", new Date);
      const QG = null !== (UG = null === kG || void 0 === kG ? void 0 : kG.config) && void 0 !== UG ? UG : {};
      return QG.origin = "firebase", QG.update = !0, null != fG && (QG.firebase_id = fG), SG("config", pG.measurementId, QG), Fb && (SG("set", Fb), cb(void 0)), pG.measurementId
    }
    class jb {
      constructor(GG) {
        this.app = GG
      }
      _delete() {
        return delete Pb[this.app.options.appId], Promise.resolve()
      }
    }
    let Pb = {},
      Mb = [];
    const Ab = {};
    let sb, qb, nb = "dataLayer",
      gb = "gtag",
      eb = !1;

    function Rb(GG) {
      if (eb) throw zb.create("already-initialized");
      GG.dataLayerName && (nb = GG.dataLayerName), GG.gtagName && (gb = GG.gtagName)
    }

    function Tb(GG, bG, ZG) {
      ! function() {
        const GG = [];
        if ((0, LG.M)() && GG.push("This is a browser extension environment."), (0, LG.o)() || GG.push("Cookies are not available."), GG.length > 0) {
          const bG = GG.map(((GG, bG) => `(${bG+1}) ${GG}`)).join(" "),
            ZG = zb.create("invalid-analytics-context", {
              errorInfo: bG
            });
          Jb.warn(ZG.message)
        }
      }();
      const wG = GG.options.appId;
      if (!wG) throw zb.create("no-app-id");
      if (!GG.options.apiKey) {
        if (!GG.options.measurementId) throw zb.create("no-api-key");
        Jb.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${GG.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Pb[wG]) throw zb.create("already-exists", {
        id: wG
      });
      if (!eb) {
        ! function(GG) {
          let bG = [];
          Array.isArray(window[GG]) ? bG = window[GG] : window[GG] = bG
        }(nb);
        const {
          wrappedGtag: GG,
          gtagCore: bG
        } = function(GG, bG, ZG, wG, SG) {
          let LG = function() {
            for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
            window[wG].push(arguments)
          };
          return window[SG] && "function" === typeof window[SG] && (LG = window[SG]), window[SG] = ub(LG, GG, bG, ZG), {
            gtagCore: LG,
            wrappedGtag: window[SG]
          }
        }(Pb, Mb, Ab, nb, gb);
        qb = GG, sb = bG, eb = !0
      }
      Pb[wG] = lb(GG, Mb, Ab, bG, sb, nb, ZG);
      return new jb(GG)
    }

    function Hb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.M)();
      GG = (0, LG.H)(GG);
      const bG = (0, wG.y)(GG, hb);
      return bG.isInitialized() ? bG.getImmediate() : tb(GG)
    }

    function tb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZG = (0, wG.y)(GG, hb);
      if (ZG.isInitialized()) {
        const GG = ZG.getImmediate();
        if ((0, LG.v)(bG, ZG.getOptions())) return GG;
        throw zb.create("already-initialized")
      }
      return ZG.initialize({
        options: bG
      })
    }
    async function Db() {
      if ((0, LG.M)()) return !1;
      if (!(0, LG.o)()) return !1;
      if (!(0, LG.U)()) return !1;
      try {
        return await (0, LG.fb)()
      } catch (GG) {
        return !1
      }
    }

    function Nb(GG, bG, ZG) {
      GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG) {
        if (wG && wG.global) return GG("set", {
          screen_name: ZG
        }), Promise.resolve();
        GG("config", await bG, {
          update: !0,
          screen_name: ZG
        })
      }(qb, Pb[GG.app.options.appId], bG, ZG).catch((GG => Jb.error(GG)))
    }
    async function Ob(GG) {
      return GG = (0, LG.H)(GG), async function(GG, bG) {
        const ZG = await bG;
        return new Promise(((bG, wG) => {
          GG("get", ZG, "client_id", (GG => {
            GG || wG(zb.create("no-client-id")), bG(GG)
          }))
        }))
      }(qb, Pb[GG.app.options.appId])
    }

    function xb(GG, bG, ZG) {
      GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG) {
        if (wG && wG.global) return GG("set", {
          user_id: ZG
        }), Promise.resolve();
        GG("config", await bG, {
          update: !0,
          user_id: ZG
        })
      }(qb, Pb[GG.app.options.appId], bG, ZG).catch((GG => Jb.error(GG)))
    }

    function Bb(GG, bG, ZG) {
      GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG) {
        if (wG && wG.global) {
          const bG = {};
          for (const GG of Object.keys(ZG)) bG[`user_properties.${GG}`] = ZG[GG];
          return GG("set", bG), Promise.resolve()
        }
        GG("config", await bG, {
          update: !0,
          user_properties: ZG
        })
      }(qb, Pb[GG.app.options.appId], bG, ZG).catch((GG => Jb.error(GG)))
    }

    function GZ(GG, bG) {
      GG = (0, LG.H)(GG), async function(GG, bG) {
        const ZG = await GG;
        window[`ga-disable-${ZG}`] = !bG
      }(Pb[GG.app.options.appId], bG).catch((GG => Jb.error(GG)))
    }

    function bZ(GG) {
      qb ? qb("set", GG) : cb(GG)
    }

    function ZZ(GG, bG, ZG, wG) {
      GG = (0, LG.H)(GG), async function(GG, bG, ZG, wG, SG) {
        if (SG && SG.global) GG("event", ZG, wG);
        else {
          const SG = await bG;
          GG("event", ZG, Object.assign(Object.assign({}, wG), {
            send_to: SG
          }))
        }
      }(qb, Pb[GG.app.options.appId], bG, ZG, wG).catch((GG => Jb.error(GG)))
    }

    function wZ(GG) {
      qb ? qb("consent", "update", GG) : ab(GG)
    }
    const SZ = "@firebase/analytics",
      LZ = "0.10.0";
    (0, wG.B)(new yG.f(hb, ((GG, bG) => {
      let {
        options: ZG
      } = bG;
      return Tb(GG.getProvider("app").getImmediate(), GG.getProvider("installations-internal").getImmediate(), ZG)
    }), "PUBLIC")), (0, wG.B)(new yG.f("analytics-internal", (function(GG) {
      try {
        const bG = GG.getProvider(hb).getImmediate();
        return {
          logEvent: (GG, ZG, wG) => ZZ(bG, GG, ZG, wG)
        }
      } catch (bG) {
        throw zb.create("interop-component-reg-failed", {
          reason: bG
        })
      }
    }), "PRIVATE")), (0, wG.U)(SZ, LZ), (0, wG.U)(SZ, LZ, "esm2017")
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);