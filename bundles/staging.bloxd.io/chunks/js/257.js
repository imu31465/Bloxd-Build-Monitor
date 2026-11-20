/*! For license information please see 7rj44.257.fa0d6cd1.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39669: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      getAnalytics: () => St,
      getGoogleAnalyticsClientId: () => ft,
      initializeAnalytics: () => Vt,
      isSupported: () => Rt,
      logEvent: () => Fs,
      setAnalyticsCollectionEnabled: () => ts,
      setConsent: () => Ws,
      setCurrentScreen: () => pt,
      setDefaultEventParameters: () => ss,
      setUserId: () => Et,
      setUserProperties: () => zs,
      settings: () => nt
    });
    var Fz = sz(39644),
      Wz = sz(39662),
      Xz = sz(39657),
      Oz = sz(39648);
    let oz, vz;
    const Uz = new WeakMap,
      Kz = new WeakMap,
      uz = new WeakMap,
      Nz = new WeakMap,
      bz = new WeakMap;
    let wz = {
      get(zz, tz, sz) {
        if (zz instanceof IDBTransaction) {
          if ("done" === tz) return Kz.get(zz);
          if ("objectStoreNames" === tz) return zz.objectStoreNames || uz.get(zz);
          if ("store" === tz) return sz.objectStoreNames[1] ? void 0 : sz.objectStore(sz.objectStoreNames[0])
        }
        return Hz(zz[tz])
      },
      set: (zz, tz, sz) => (zz[tz] = sz, !0),
      has: (zz, tz) => zz instanceof IDBTransaction && ("done" === tz || "store" === tz) || tz in zz
    };

    function Dz(zz) {
      return zz !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (vz || (vz = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(zz) ? function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return zz.apply(Bz(this), sz), Hz(Uz.get(this))
      } : function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return Hz(zz.apply(Bz(this), sz))
      } : function(tz) {
        for (var sz = arguments.length, Fz = new Array(sz > 1 ? sz - 1 : 0), Wz = 1; Wz < sz; Wz++) Fz[Wz - 1] = arguments[Wz];
        const Xz = zz.call(Bz(this), tz, ...Fz);
        return uz.set(Xz, tz.sort ? tz.sort() : [tz]), Hz(Xz)
      }
    }

    function gz(zz) {
      return "function" === typeof zz ? Dz(zz) : (zz instanceof IDBTransaction && function(zz) {
        if (Kz.has(zz)) return;
        const tz = new Promise(((tz, sz) => {
          const Fz = () => {
              zz.removeEventListener("complete", Wz), zz.removeEventListener("error", Xz), zz.removeEventListener("abort", Xz)
            },
            Wz = () => {
              tz(), Fz()
            },
            Xz = () => {
              sz(zz.error || new DOMException("AbortError", "AbortError")), Fz()
            };
          zz.addEventListener("complete", Wz), zz.addEventListener("error", Xz), zz.addEventListener("abort", Xz)
        }));
        Kz.set(zz, tz)
      }(zz), tz = zz, (oz || (oz = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((zz => tz instanceof zz)) ? new Proxy(zz, wz) : zz);
      var tz
    }

    function Hz(zz) {
      if (zz instanceof IDBRequest) return function(zz) {
        const tz = new Promise(((tz, sz) => {
          const Fz = () => {
              zz.removeEventListener("success", Wz), zz.removeEventListener("error", Xz)
            },
            Wz = () => {
              tz(Hz(zz.result)), Fz()
            },
            Xz = () => {
              sz(zz.error), Fz()
            };
          zz.addEventListener("success", Wz), zz.addEventListener("error", Xz)
        }));
        return tz.then((tz => {
          tz instanceof IDBCursor && Uz.set(tz, zz)
        })).catch((() => {})), bz.set(tz, zz), tz
      }(zz);
      if (Nz.has(zz)) return Nz.get(zz);
      const tz = gz(zz);
      return tz !== zz && (Nz.set(zz, tz), bz.set(tz, zz)), tz
    }
    const Bz = zz => bz.get(zz);
    const Pz = ["get", "getKey", "getAll", "getAllKeys", "count"],
      rz = ["put", "add", "delete", "clear"],
      Yz = new Map;

    function xz(zz, tz) {
      if (!(zz instanceof IDBDatabase) || tz in zz || "string" !== typeof tz) return;
      if (Yz.get(tz)) return Yz.get(tz);
      const sz = tz.replace(/FromIndex$/, ""),
        Fz = tz !== sz,
        Wz = rz.includes(sz);
      if (!(sz in (Fz ? IDBIndex : IDBObjectStore).prototype) || !Wz && !Pz.includes(sz)) return;
      const Xz = async function(zz) {
        const tz = this.transaction(zz, Wz ? "readwrite" : "readonly");
        let Xz = tz.store;
        for (var Oz = arguments.length, oz = new Array(Oz > 1 ? Oz - 1 : 0), vz = 1; vz < Oz; vz++) oz[vz - 1] = arguments[vz];
        return Fz && (Xz = Xz.index(oz.shift())), (await Promise.all([Xz[sz](...oz), Wz && tz.done]))[0]
      };
      return Yz.set(tz, Xz), Xz
    }
    wz = (zz => ({
      ...zz,
      get: (tz, sz, Fz) => xz(tz, sz) || zz.get(tz, sz, Fz),
      has: (tz, sz) => !!xz(tz, sz) || zz.has(tz, sz)
    }))(wz);
    const mz = "@firebase/installations",
      Jz = "0.6.4",
      Iz = 1e4,
      Cz = `w:${Jz}`,
      ez = "FIS_v2",
      Zz = 36e5,
      Gz = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Tz = new Xz.d("installations", "Installations", Gz);

    function cz(zz) {
      return zz instanceof Xz.f && zz.code.includes("request-failed")
    }

    function jz(zz) {
      let {
        projectId: tz
      } = zz;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${tz}/installations`
    }

    function Az(zz) {
      return {
        token: zz.token,
        requestStatus: 2,
        expiresIn: (tz = zz.expiresIn, Number(tz.replace("s", "000"))),
        creationTime: Date.now()
      };
      var tz
    }
    async function yz(zz, tz) {
      const sz = (await tz.json()).error;
      return Tz.create("request-failed", {
        requestName: zz,
        serverCode: sz.code,
        serverMessage: sz.message,
        serverStatus: sz.status
      })
    }

    function Mz(zz) {
      let {
        apiKey: tz
      } = zz;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": tz
      })
    }

    function dz(zz, tz) {
      let {
        refreshToken: sz
      } = tz;
      const Fz = Mz(zz);
      return Fz.append("Authorization", function(zz) {
        return `${ez} ${zz}`
      }(sz)), Fz
    }
    async function hz(zz) {
      const tz = await zz();
      return tz.status >= 500 && tz.status < 600 ? zz() : tz
    }

    function Qz(zz) {
      return new Promise((tz => {
        setTimeout(tz, zz)
      }))
    }
    const kz = /^[cdef][\w-]{21}$/;

    function iz() {
      try {
        const zz = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(zz), zz[0] = 112 + zz[0] % 16;
        const tz = function(zz) {
          const tz = (sz = zz, btoa(String.fromCharCode(...sz)).replace(/\+/g, "-").replace(/\//g, "_"));
          var sz;
          return tz.substr(0, 22)
        }(zz);
        return kz.test(tz) ? tz : ""
      } catch (zz) {
        return ""
      }
    }

    function Lz(zz) {
      return `${zz.appName}!${zz.appId}`
    }
    const lz = new Map;

    function nz(zz, tz) {
      const sz = Lz(zz);
      az(sz, tz),
        function(zz, tz) {
          const sz = Sz();
          sz && sz.postMessage({
            key: zz,
            fid: tz
          });
          Vz()
        }(sz, tz)
    }

    function az(zz, tz) {
      const sz = lz.get(zz);
      if (sz)
        for (const Fz of sz) Fz(tz)
    }
    let qz = null;

    function Sz() {
      return !qz && "BroadcastChannel" in self && (qz = new BroadcastChannel("[Firebase] FID Change"), qz.onmessage = zz => {
        az(zz.data.key, zz.data.fid)
      }), qz
    }

    function Vz() {
      0 === lz.size && qz && (qz.close(), qz = null)
    }
    const Rz = "firebase-installations-store";
    let pz = null;

    function fz() {
      return pz || (pz = function(zz, tz) {
        let {
          blocked: sz,
          upgrade: Fz,
          blocking: Wz,
          terminated: Xz
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Oz = indexedDB.open(zz, tz),
          oz = Hz(Oz);
        return Fz && Oz.addEventListener("upgradeneeded", (zz => {
          Fz(Hz(Oz.result), zz.oldVersion, zz.newVersion, Hz(Oz.transaction))
        })), sz && Oz.addEventListener("blocked", (() => sz())), oz.then((zz => {
          Xz && zz.addEventListener("close", (() => Xz())), Wz && zz.addEventListener("versionchange", (() => Wz()))
        })).catch((() => {})), oz
      }("firebase-installations-database", 1, {
        upgrade: (zz, tz) => {
          if (0 === tz) zz.createObjectStore(Rz)
        }
      })), pz
    }
    async function Ez(zz, tz) {
      const sz = Lz(zz),
        Fz = (await fz()).transaction(Rz, "readwrite"),
        Wz = Fz.objectStore(Rz),
        Xz = await Wz.get(sz);
      return await Wz.put(tz, sz), await Fz.done, Xz && Xz.fid === tz.fid || nz(zz, tz.fid), tz
    }
    async function zt(zz) {
      const tz = Lz(zz),
        sz = (await fz()).transaction(Rz, "readwrite");
      await sz.objectStore(Rz).delete(tz), await sz.done
    }
    async function tt(zz, tz) {
      const sz = Lz(zz),
        Fz = (await fz()).transaction(Rz, "readwrite"),
        Wz = Fz.objectStore(Rz),
        Xz = await Wz.get(sz),
        Oz = tz(Xz);
      return void 0 === Oz ? await Wz.delete(sz) : await Wz.put(Oz, sz), await Fz.done, !Oz || Xz && Xz.fid === Oz.fid || nz(zz, Oz.fid), Oz
    }
    async function st(zz) {
      let tz;
      const sz = await tt(zz.appConfig, (sz => {
        const Fz = function(zz) {
            const tz = zz || {
              fid: iz(),
              registrationStatus: 0
            };
            return Xt(tz)
          }(sz),
          Wz = function(zz, tz) {
            if (0 === tz.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: tz,
                  registrationPromise: Promise.reject(Tz.create("app-offline"))
                }
              }
              const sz = {
                  fid: tz.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Fz = async function(zz, tz) {
                  try {
                    const sz = await async function(zz, tz) {
                      let {
                        appConfig: sz,
                        heartbeatServiceProvider: Fz
                      } = zz, {
                        fid: Wz
                      } = tz;
                      const Xz = jz(sz),
                        Oz = Mz(sz),
                        oz = Fz.getImmediate({
                          optional: !0
                        });
                      if (oz) {
                        const zz = await oz.getHeartbeatsHeader();
                        zz && Oz.append("x-firebase-client", zz)
                      }
                      const vz = {
                          fid: Wz,
                          authVersion: ez,
                          appId: sz.appId,
                          sdkVersion: Cz
                        },
                        Uz = {
                          method: "POST",
                          headers: Oz,
                          body: JSON.stringify(vz)
                        },
                        Kz = await hz((() => fetch(Xz, Uz)));
                      if (Kz.ok) {
                        const zz = await Kz.json();
                        return {
                          fid: zz.fid || Wz,
                          registrationStatus: 2,
                          refreshToken: zz.refreshToken,
                          authToken: Az(zz.authToken)
                        }
                      }
                      throw await yz("Create Installation", Kz)
                    }(zz, tz);
                    return Ez(zz.appConfig, sz)
                  } catch (sz) {
                    throw cz(sz) && 409 === sz.customData.serverCode ? await zt(zz.appConfig) : await Ez(zz.appConfig, {
                      fid: tz.fid,
                      registrationStatus: 0
                    }), sz
                  }
                }(zz, sz);
              return {
                installationEntry: sz,
                registrationPromise: Fz
              }
            }
            return 1 === tz.registrationStatus ? {
              installationEntry: tz,
              registrationPromise: Ft(zz)
            } : {
              installationEntry: tz
            }
          }(zz, Fz);
        return tz = Wz.registrationPromise, Wz.installationEntry
      }));
      return "" === sz.fid ? {
        installationEntry: await tz
      } : {
        installationEntry: sz,
        registrationPromise: tz
      }
    }
    async function Ft(zz) {
      let tz = await Wt(zz.appConfig);
      for (; 1 === tz.registrationStatus;) await Qz(100), tz = await Wt(zz.appConfig);
      if (0 === tz.registrationStatus) {
        const {
          installationEntry: tz,
          registrationPromise: sz
        } = await st(zz);
        return sz || tz
      }
      return tz
    }

    function Wt(zz) {
      return tt(zz, (zz => {
        if (!zz) throw Tz.create("installation-not-found");
        return Xt(zz)
      }))
    }

    function Xt(zz) {
      return 1 === (tz = zz).registrationStatus && tz.registrationTime + Iz < Date.now() ? {
        fid: zz.fid,
        registrationStatus: 0
      } : zz;
      var tz
    }
    async function Ot(zz, tz) {
      let {
        appConfig: sz,
        heartbeatServiceProvider: Fz
      } = zz;
      const Wz = function(zz, tz) {
          let {
            fid: sz
          } = tz;
          return `${jz(zz)}/${sz}/authTokens:generate`
        }(sz, tz),
        Xz = dz(sz, tz),
        Oz = Fz.getImmediate({
          optional: !0
        });
      if (Oz) {
        const zz = await Oz.getHeartbeatsHeader();
        zz && Xz.append("x-firebase-client", zz)
      }
      const oz = {
          installation: {
            sdkVersion: Cz,
            appId: sz.appId
          }
        },
        vz = {
          method: "POST",
          headers: Xz,
          body: JSON.stringify(oz)
        },
        Uz = await hz((() => fetch(Wz, vz)));
      if (Uz.ok) {
        return Az(await Uz.json())
      }
      throw await yz("Generate Auth Token", Uz)
    }
    async function ot(zz) {
      let tz, sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Fz = await tt(zz.appConfig, (Fz => {
        if (!Ut(Fz)) throw Tz.create("not-registered");
        const Wz = Fz.authToken;
        if (!sz && function(zz) {
            return 2 === zz.requestStatus && ! function(zz) {
              const tz = Date.now();
              return tz < zz.creationTime || zz.creationTime + zz.expiresIn < tz + Zz
            }(zz)
          }(Wz)) return Fz;
        if (1 === Wz.requestStatus) return tz = async function(zz, tz) {
          let sz = await vt(zz.appConfig);
          for (; 1 === sz.authToken.requestStatus;) await Qz(100), sz = await vt(zz.appConfig);
          const Fz = sz.authToken;
          return 0 === Fz.requestStatus ? ot(zz, tz) : Fz
        }(zz, sz), Fz;
        {
          if (!navigator.onLine) throw Tz.create("app-offline");
          const sz = function(zz) {
            const tz = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, zz), {
              authToken: tz
            })
          }(Fz);
          return tz = async function(zz, tz) {
            try {
              const sz = await Ot(zz, tz),
                Fz = Object.assign(Object.assign({}, tz), {
                  authToken: sz
                });
              return await Ez(zz.appConfig, Fz), sz
            } catch (sz) {
              if (!cz(sz) || 401 !== sz.customData.serverCode && 404 !== sz.customData.serverCode) {
                const sz = Object.assign(Object.assign({}, tz), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await Ez(zz.appConfig, sz)
              } else await zt(zz.appConfig);
              throw sz
            }
          }(zz, sz), sz
        }
      }));
      return tz ? await tz : Fz.authToken
    }

    function vt(zz) {
      return tt(zz, (zz => {
        if (!Ut(zz)) throw Tz.create("not-registered");
        const tz = zz.authToken;
        return 1 === (sz = tz).requestStatus && sz.requestTime + Iz < Date.now() ? Object.assign(Object.assign({}, zz), {
          authToken: {
            requestStatus: 0
          }
        }) : zz;
        var sz
      }))
    }

    function Ut(zz) {
      return void 0 !== zz && 2 === zz.registrationStatus
    }
    async function Kt(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const sz = zz;
      await async function(zz) {
        const {
          registrationPromise: tz
        } = await st(zz);
        tz && await tz
      }(sz);
      return (await ot(sz, tz)).token
    }

    function ut(zz) {
      return Tz.create("missing-app-config-values", {
        valueName: zz
      })
    }
    const Nt = "installations",
      bt = zz => {
        const tz = zz.getProvider("app").getImmediate(),
          sz = function(zz) {
            if (!zz || !zz.options) throw ut("App Configuration");
            if (!zz.name) throw ut("App Name");
            const tz = ["projectId", "apiKey", "appId"];
            for (const sz of tz)
              if (!zz.options[sz]) throw ut(sz);
            return {
              appName: zz.name,
              projectId: zz.options.projectId,
              apiKey: zz.options.apiKey,
              appId: zz.options.appId
            }
          }(tz);
        return {
          app: tz,
          appConfig: sz,
          heartbeatServiceProvider: (0, Fz.x)(tz, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      wt = zz => {
        const tz = zz.getProvider("app").getImmediate(),
          sz = (0, Fz.x)(tz, Nt).getImmediate();
        return {
          getId: () => async function(zz) {
            const tz = zz,
              {
                installationEntry: sz,
                registrationPromise: Fz
              } = await st(tz);
            return Fz ? Fz.catch(console.error) : ot(tz).catch(console.error), sz.fid
          }(sz),
          getToken: zz => Kt(sz, zz)
        }
      };
    (0, Fz.z)(new Oz.f(Nt, bt, "PUBLIC")), (0, Fz.z)(new Oz.f("installations-internal", wt, "PRIVATE")), (0, Fz.S)(mz, Jz), (0, Fz.S)(mz, Jz, "esm2017");
    const Dt = "analytics",
      gt = "https://www.googletagmanager.com/gtag/js",
      Ht = new Wz.f("@firebase/analytics"),
      Bt = {
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
      Pt = new Xz.d("analytics", "Analytics", Bt);

    function rt(zz) {
      if (!zz.startsWith(gt)) {
        const tz = Pt.create("invalid-gtag-resource", {
          gtagURL: zz
        });
        return Ht.warn(tz.message), ""
      }
      return zz
    }

    function Yt(zz) {
      return Promise.all(zz.map((zz => zz.catch((zz => zz)))))
    }

    function xt(zz, tz) {
      const sz = function(zz, tz) {
          let sz;
          return window.trustedTypes && (sz = window.trustedTypes.createPolicy(zz, tz)), sz
        }("firebase-js-sdk-policy", {
          createScriptURL: rt
        }),
        Fz = document.createElement("script"),
        Wz = `${gt}?l=${zz}&id=${tz}`;
      Fz.src = sz ? null === sz || void 0 === sz ? void 0 : sz.createScriptURL(Wz) : Wz, Fz.async = !0, document.head.appendChild(Fz)
    }

    function mt(zz, tz, sz, Fz) {
      return async function(Wz) {
        try {
          for (var Xz = arguments.length, Oz = new Array(Xz > 1 ? Xz - 1 : 0), oz = 1; oz < Xz; oz++) Oz[oz - 1] = arguments[oz];
          if ("event" === Wz) {
            const [Fz, Wz] = Oz;
            await async function(zz, tz, sz, Fz, Wz) {
              try {
                let Xz = [];
                if (Wz && Wz.send_to) {
                  let zz = Wz.send_to;
                  Array.isArray(zz) || (zz = [zz]);
                  const Fz = await Yt(sz);
                  for (const sz of zz) {
                    const zz = Fz.find((zz => zz.measurementId === sz)),
                      Wz = zz && tz[zz.appId];
                    if (!Wz) {
                      Xz = [];
                      break
                    }
                    Xz.push(Wz)
                  }
                }
                0 === Xz.length && (Xz = Object.values(tz)), await Promise.all(Xz), zz("event", Fz, Wz || {})
              } catch (Xz) {
                Ht.error(Xz)
              }
            }(zz, tz, sz, Fz, Wz)
          } else if ("config" === Wz) {
            const [Wz, Xz] = Oz;
            await async function(zz, tz, sz, Fz, Wz, Xz) {
              const Oz = Fz[Wz];
              try {
                if (Oz) await tz[Oz];
                else {
                  const zz = (await Yt(sz)).find((zz => zz.measurementId === Wz));
                  zz && await tz[zz.appId]
                }
              } catch (oz) {
                Ht.error(oz)
              }
              zz("config", Wz, Xz)
            }(zz, tz, sz, Fz, Wz, Xz)
          } else if ("consent" === Wz) {
            const [tz] = Oz;
            zz("consent", "update", tz)
          } else if ("get" === Wz) {
            const [tz, sz, Fz] = Oz;
            zz("get", tz, sz, Fz)
          } else if ("set" === Wz) {
            const [tz] = Oz;
            zz("set", tz)
          } else zz(Wz, ...Oz)
        } catch (vz) {
          Ht.error(vz)
        }
      }
    }
    const Jt = new class {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = zz, this.intervalMillis = tz
      }
      getThrottleMetadata(zz) {
        return this.throttleMetadata[zz]
      }
      setThrottleMetadata(zz, tz) {
        this.throttleMetadata[zz] = tz
      }
      deleteThrottleMetadata(zz) {
        delete this.throttleMetadata[zz]
      }
    };

    function It(zz) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": zz
      })
    }
    async function Ct(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jt,
        sz = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Fz,
        apiKey: Wz,
        measurementId: Xz
      } = zz.options;
      if (!Fz) throw Pt.create("no-app-id");
      if (!Wz) {
        if (Xz) return {
          measurementId: Xz,
          appId: Fz
        };
        throw Pt.create("no-api-key")
      }
      const Oz = tz.getThrottleMetadata(Fz) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        oz = new Zt;
      return setTimeout((async () => {
        oz.abort()
      }), void 0 !== sz ? sz : 6e4), et({
        appId: Fz,
        apiKey: Wz,
        measurementId: Xz
      }, Oz, oz, tz)
    }
    async function et(zz, tz, sz) {
      let {
        throttleEndTimeMillis: Fz,
        backoffCount: Wz
      } = tz, Oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jt;
      var oz;
      const {
        appId: vz,
        measurementId: Uz
      } = zz;
      try {
        await
        function(zz, tz) {
          return new Promise(((sz, Fz) => {
            const Wz = Math.max(tz - Date.now(), 0),
              Xz = setTimeout(sz, Wz);
            zz.addEventListener((() => {
              clearTimeout(Xz), Fz(Pt.create("fetch-throttle", {
                throttleEndTimeMillis: tz
              }))
            }))
          }))
        }(sz, Fz)
      } catch (Kz) {
        if (Uz) return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Uz} provided in the "measurementId" field in the local Firebase config. [${null===Kz||void 0===Kz?void 0:Kz.message}]`), {
          appId: vz,
          measurementId: Uz
        };
        throw Kz
      }
      try {
        const tz = await async function(zz) {
          var tz;
          const {
            appId: sz,
            apiKey: Fz
          } = zz, Wz = {
            method: "GET",
            headers: It(Fz)
          }, Xz = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", sz), Oz = await fetch(Xz, Wz);
          if (200 !== Oz.status && 304 !== Oz.status) {
            let zz = "";
            try {
              const sz = await Oz.json();
              (null === (tz = sz.error) || void 0 === tz ? void 0 : tz.message) && (zz = sz.error.message)
            } catch (oz) {}
            throw Pt.create("config-fetch-failed", {
              httpStatus: Oz.status,
              responseMessage: zz
            })
          }
          return Oz.json()
        }(zz);
        return Oz.deleteThrottleMetadata(vz), tz
      } catch (Kz) {
        const tz = Kz;
        if (! function(zz) {
            if (!(zz instanceof Xz.f) || !zz.customData) return !1;
            const tz = Number(zz.customData.httpStatus);
            return 429 === tz || 500 === tz || 503 === tz || 504 === tz
          }(tz)) {
          if (Oz.deleteThrottleMetadata(vz), Uz) return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Uz} provided in the "measurementId" field in the local Firebase config. [${null===tz||void 0===tz?void 0:tz.message}]`), {
            appId: vz,
            measurementId: Uz
          };
          throw Kz
        }
        const Fz = 503 === Number(null === (oz = null === tz || void 0 === tz ? void 0 : tz.customData) || void 0 === oz ? void 0 : oz.httpStatus) ? (0, Xz.p)(Wz, Oz.intervalMillis, 30) : (0, Xz.p)(Wz, Oz.intervalMillis),
          uz = {
            throttleEndTimeMillis: Date.now() + Fz,
            backoffCount: Wz + 1
          };
        return Oz.setThrottleMetadata(vz, uz), Ht.debug(`Calling attemptFetch again in ${Fz} millis`), et(zz, uz, sz, Oz)
      }
    }
    class Zt {
      constructor() {
        this.listeners = []
      }
      addEventListener(zz) {
        this.listeners.push(zz)
      }
      abort() {
        this.listeners.forEach((zz => zz()))
      }
    }
    let Gt, Tt;

    function ct(zz) {
      Tt = zz
    }

    function jt(zz) {
      Gt = zz
    }
    async function At(zz, tz, sz, Fz, Wz, Oz, oz) {
      var vz;
      const Uz = Ct(zz);
      Uz.then((tz => {
        sz[tz.measurementId] = tz.appId, zz.options.measurementId && tz.measurementId !== zz.options.measurementId && Ht.warn(`The measurement ID in the local Firebase config (${zz.options.measurementId}) does not match the measurement ID fetched from the server (${tz.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((zz => Ht.error(zz))), tz.push(Uz);
      const Kz = async function() {
        if (!(0, Xz.Z)()) return Ht.warn(Pt.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Xz.kb)()
        } catch (zz) {
          return Ht.warn(Pt.create("indexeddb-unavailable", {
            errorInfo: null === zz || void 0 === zz ? void 0 : zz.toString()
          }).message), !1
        }
        return !0
      }().then((zz => zz ? Fz.getId() : void 0)), [uz, Nz] = await Promise.all([Uz, Kz]);
      (function(zz) {
        const tz = window.document.getElementsByTagName("script");
        for (const sz of Object.values(tz))
          if (sz.src && sz.src.includes(gt) && sz.src.includes(zz)) return sz;
        return null
      })(Oz) || xt(Oz, uz.measurementId), Tt && (Wz("consent", "default", Tt), ct(void 0)), Wz("js", new Date);
      const bz = null !== (vz = null === oz || void 0 === oz ? void 0 : oz.config) && void 0 !== vz ? vz : {};
      return bz.origin = "firebase", bz.update = !0, null != Nz && (bz.firebase_id = Nz), Wz("config", uz.measurementId, bz), Gt && (Wz("set", Gt), jt(void 0)), uz.measurementId
    }
    class yt {
      constructor(zz) {
        this.app = zz
      }
      _delete() {
        return delete Mt[this.app.options.appId], Promise.resolve()
      }
    }
    let Mt = {},
      dt = [];
    const ht = {};
    let Qt, kt, it = "dataLayer",
      Lt = "gtag",
      lt = !1;

    function nt(zz) {
      if (lt) throw Pt.create("already-initialized");
      zz.dataLayerName && (it = zz.dataLayerName), zz.gtagName && (Lt = zz.gtagName)
    }

    function qt(zz, tz, sz) {
      ! function() {
        const zz = [];
        if ((0, Xz.R)() && zz.push("This is a browser extension environment."), (0, Xz.h)() || zz.push("Cookies are not available."), zz.length > 0) {
          const tz = zz.map(((zz, tz) => `(${tz+1}) ${zz}`)).join(" "),
            sz = Pt.create("invalid-analytics-context", {
              errorInfo: tz
            });
          Ht.warn(sz.message)
        }
      }();
      const Fz = zz.options.appId;
      if (!Fz) throw Pt.create("no-app-id");
      if (!zz.options.apiKey) {
        if (!zz.options.measurementId) throw Pt.create("no-api-key");
        Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${zz.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Mt[Fz]) throw Pt.create("already-exists", {
        id: Fz
      });
      if (!lt) {
        ! function(zz) {
          let tz = [];
          Array.isArray(window[zz]) ? tz = window[zz] : window[zz] = tz
        }(it);
        const {
          wrappedGtag: zz,
          gtagCore: tz
        } = function(zz, tz, sz, Fz, Wz) {
          let Xz = function() {
            for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
            window[Fz].push(arguments)
          };
          return window[Wz] && "function" === typeof window[Wz] && (Xz = window[Wz]), window[Wz] = mt(Xz, zz, tz, sz), {
            gtagCore: Xz,
            wrappedGtag: window[Wz]
          }
        }(Mt, dt, ht, it, Lt);
        kt = zz, Qt = tz, lt = !0
      }
      Mt[Fz] = At(zz, dt, ht, tz, Qt, it, sz);
      return new yt(zz)
    }

    function St() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Fz.L)();
      zz = (0, Xz.L)(zz);
      const tz = (0, Fz.x)(zz, Dt);
      return tz.isInitialized() ? tz.getImmediate() : Vt(zz)
    }

    function Vt(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const sz = (0, Fz.x)(zz, Dt);
      if (sz.isInitialized()) {
        const zz = sz.getImmediate();
        if ((0, Xz.v)(tz, sz.getOptions())) return zz;
        throw Pt.create("already-initialized")
      }
      return sz.initialize({
        options: tz
      })
    }
    async function Rt() {
      if ((0, Xz.R)()) return !1;
      if (!(0, Xz.h)()) return !1;
      if (!(0, Xz.Z)()) return !1;
      try {
        return await (0, Xz.kb)()
      } catch (zz) {
        return !1
      }
    }

    function pt(zz, tz, sz) {
      zz = (0, Xz.L)(zz), async function(zz, tz, sz, Fz) {
        if (Fz && Fz.global) return zz("set", {
          screen_name: sz
        }), Promise.resolve();
        zz("config", await tz, {
          update: !0,
          screen_name: sz
        })
      }(kt, Mt[zz.app.options.appId], tz, sz).catch((zz => Ht.error(zz)))
    }
    async function ft(zz) {
      return zz = (0, Xz.L)(zz), async function(zz, tz) {
        const sz = await tz;
        return new Promise(((tz, Fz) => {
          zz("get", sz, "client_id", (zz => {
            zz || Fz(Pt.create("no-client-id")), tz(zz)
          }))
        }))
      }(kt, Mt[zz.app.options.appId])
    }

    function Et(zz, tz, sz) {
      zz = (0, Xz.L)(zz), async function(zz, tz, sz, Fz) {
        if (Fz && Fz.global) return zz("set", {
          user_id: sz
        }), Promise.resolve();
        zz("config", await tz, {
          update: !0,
          user_id: sz
        })
      }(kt, Mt[zz.app.options.appId], tz, sz).catch((zz => Ht.error(zz)))
    }

    function zs(zz, tz, sz) {
      zz = (0, Xz.L)(zz), async function(zz, tz, sz, Fz) {
        if (Fz && Fz.global) {
          const tz = {};
          for (const zz of Object.keys(sz)) tz[`user_properties.${zz}`] = sz[zz];
          return zz("set", tz), Promise.resolve()
        }
        zz("config", await tz, {
          update: !0,
          user_properties: sz
        })
      }(kt, Mt[zz.app.options.appId], tz, sz).catch((zz => Ht.error(zz)))
    }

    function ts(zz, tz) {
      zz = (0, Xz.L)(zz), async function(zz, tz) {
        const sz = await zz;
        window[`ga-disable-${sz}`] = !tz
      }(Mt[zz.app.options.appId], tz).catch((zz => Ht.error(zz)))
    }

    function ss(zz) {
      kt ? kt("set", zz) : jt(zz)
    }

    function Fs(zz, tz, sz, Fz) {
      zz = (0, Xz.L)(zz), async function(zz, tz, sz, Fz, Wz) {
        if (Wz && Wz.global) zz("event", sz, Fz);
        else {
          const Wz = await tz;
          zz("event", sz, Object.assign(Object.assign({}, Fz), {
            send_to: Wz
          }))
        }
      }(kt, Mt[zz.app.options.appId], tz, sz, Fz).catch((zz => Ht.error(zz)))
    }

    function Ws(zz) {
      kt ? kt("consent", "update", zz) : ct(zz)
    }
    const Xs = "@firebase/analytics",
      Os = "0.10.0";
    (0, Fz.z)(new Oz.f(Dt, ((zz, tz) => {
      let {
        options: sz
      } = tz;
      return qt(zz.getProvider("app").getImmediate(), zz.getProvider("installations-internal").getImmediate(), sz)
    }), "PUBLIC")), (0, Fz.z)(new Oz.f("analytics-internal", (function(zz) {
      try {
        const tz = zz.getProvider(Dt).getImmediate();
        return {
          logEvent: (zz, sz, Fz) => Fs(tz, zz, sz, Fz)
        }
      } catch (tz) {
        throw Pt.create("interop-component-reg-failed", {
          reason: tz
        })
      }
    }), "PRIVATE")), (0, Fz.S)(Xs, Os), (0, Fz.S)(Xs, Os, "esm2017")
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);