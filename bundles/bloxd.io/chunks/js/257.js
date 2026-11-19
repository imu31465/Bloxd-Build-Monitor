/*! For license information please see ad2avs.257.d75539c2.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39686: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      getAnalytics: () => eu,
      getGoogleAnalyticsClientId: () => Cu,
      initializeAnalytics: () => ju,
      isSupported: () => Iu,
      logEvent: () => bb,
      setAnalyticsCollectionEnabled: () => zb,
      setConsent: () => Eb,
      setCurrentScreen: () => Bu,
      setDefaultEventParameters: () => ub,
      setUserId: () => Yu,
      setUserProperties: () => ku,
      settings: () => Qu
    });
    var Ez = bz(39660),
      nz = bz(39682),
      iz = bz(39673),
      lz = bz(39669);
    let Mz, tz;
    const Hz = new WeakMap,
      Oz = new WeakMap,
      pz = new WeakMap,
      dz = new WeakMap,
      Fz = new WeakMap;
    let Zz = {
      get(zz, uz, bz) {
        if (zz instanceof IDBTransaction) {
          if ("done" === uz) return Oz.get(zz);
          if ("objectStoreNames" === uz) return zz.objectStoreNames || pz.get(zz);
          if ("store" === uz) return bz.objectStoreNames[1] ? void 0 : bz.objectStore(bz.objectStoreNames[0])
        }
        return wz(zz[uz])
      },
      set: (zz, uz, bz) => (zz[uz] = bz, !0),
      has: (zz, uz) => zz instanceof IDBTransaction && ("done" === uz || "store" === uz) || uz in zz
    };

    function Rz(zz) {
      return zz !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (tz || (tz = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(zz) ? function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return zz.apply(Xz(this), bz), wz(Hz.get(this))
      } : function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return wz(zz.apply(Xz(this), bz))
      } : function(uz) {
        for (var bz = arguments.length, Ez = new Array(bz > 1 ? bz - 1 : 0), nz = 1; nz < bz; nz++) Ez[nz - 1] = arguments[nz];
        const iz = zz.call(Xz(this), uz, ...Ez);
        return pz.set(iz, uz.sort ? uz.sort() : [uz]), wz(iz)
      }
    }

    function Kz(zz) {
      return "function" === typeof zz ? Rz(zz) : (zz instanceof IDBTransaction && function(zz) {
        if (Oz.has(zz)) return;
        const uz = new Promise(((uz, bz) => {
          const Ez = () => {
              zz.removeEventListener("complete", nz), zz.removeEventListener("error", iz), zz.removeEventListener("abort", iz)
            },
            nz = () => {
              uz(), Ez()
            },
            iz = () => {
              bz(zz.error || new DOMException("AbortError", "AbortError")), Ez()
            };
          zz.addEventListener("complete", nz), zz.addEventListener("error", iz), zz.addEventListener("abort", iz)
        }));
        Oz.set(zz, uz)
      }(zz), uz = zz, (Mz || (Mz = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((zz => uz instanceof zz)) ? new Proxy(zz, Zz) : zz);
      var uz
    }

    function wz(zz) {
      if (zz instanceof IDBRequest) return function(zz) {
        const uz = new Promise(((uz, bz) => {
          const Ez = () => {
              zz.removeEventListener("success", nz), zz.removeEventListener("error", iz)
            },
            nz = () => {
              uz(wz(zz.result)), Ez()
            },
            iz = () => {
              bz(zz.error), Ez()
            };
          zz.addEventListener("success", nz), zz.addEventListener("error", iz)
        }));
        return uz.then((uz => {
          uz instanceof IDBCursor && Hz.set(uz, zz)
        })).catch((() => {})), Fz.set(uz, zz), uz
      }(zz);
      if (dz.has(zz)) return dz.get(zz);
      const uz = Kz(zz);
      return uz !== zz && (dz.set(zz, uz), Fz.set(uz, zz)), uz
    }
    const Xz = zz => Fz.get(zz);
    const fz = ["get", "getKey", "getAll", "getAllKeys", "count"],
      sz = ["put", "add", "delete", "clear"],
      rz = new Map;

    function oz(zz, uz) {
      if (!(zz instanceof IDBDatabase) || uz in zz || "string" !== typeof uz) return;
      if (rz.get(uz)) return rz.get(uz);
      const bz = uz.replace(/FromIndex$/, ""),
        Ez = uz !== bz,
        nz = sz.includes(bz);
      if (!(bz in (Ez ? IDBIndex : IDBObjectStore).prototype) || !nz && !fz.includes(bz)) return;
      const iz = async function(zz) {
        const uz = this.transaction(zz, nz ? "readwrite" : "readonly");
        let iz = uz.store;
        for (var lz = arguments.length, Mz = new Array(lz > 1 ? lz - 1 : 0), tz = 1; tz < lz; tz++) Mz[tz - 1] = arguments[tz];
        return Ez && (iz = iz.index(Mz.shift())), (await Promise.all([iz[bz](...Mz), nz && uz.done]))[0]
      };
      return rz.set(uz, iz), iz
    }
    Zz = (zz => ({
      ...zz,
      get: (uz, bz, Ez) => oz(uz, bz) || zz.get(uz, bz, Ez),
      has: (uz, bz) => !!oz(uz, bz) || zz.has(uz, bz)
    }))(Zz);
    const Nz = "@firebase/installations",
      vz = "0.6.4",
      xz = 1e4,
      Jz = `w:${vz}`,
      Az = "FIS_v2",
      Tz = 36e5,
      Lz = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Pz = new iz.c("installations", "Installations", Lz);

    function Gz(zz) {
      return zz instanceof iz.f && zz.code.includes("request-failed")
    }

    function az(zz) {
      let {
        projectId: uz
      } = zz;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${uz}/installations`
    }

    function Vz(zz) {
      return {
        token: zz.token,
        requestStatus: 2,
        expiresIn: (uz = zz.expiresIn, Number(uz.replace("s", "000"))),
        creationTime: Date.now()
      };
      var uz
    }
    async function mz(zz, uz) {
      const bz = (await uz.json()).error;
      return Pz.create("request-failed", {
        requestName: zz,
        serverCode: bz.code,
        serverMessage: bz.message,
        serverStatus: bz.status
      })
    }

    function qz(zz) {
      let {
        apiKey: uz
      } = zz;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": uz
      })
    }

    function hz(zz, uz) {
      let {
        refreshToken: bz
      } = uz;
      const Ez = qz(zz);
      return Ez.append("Authorization", function(zz) {
        return `${Az} ${zz}`
      }(bz)), Ez
    }
    async function Uz(zz) {
      const uz = await zz();
      return uz.status >= 500 && uz.status < 600 ? zz() : uz
    }

    function cz(zz) {
      return new Promise((uz => {
        setTimeout(uz, zz)
      }))
    }
    const gz = /^[cdef][\w-]{21}$/;

    function Sz() {
      try {
        const zz = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(zz), zz[0] = 112 + zz[0] % 16;
        const uz = function(zz) {
          const uz = (bz = zz, btoa(String.fromCharCode(...bz)).replace(/\+/g, "-").replace(/\//g, "_"));
          var bz;
          return uz.substr(0, 22)
        }(zz);
        return gz.test(uz) ? uz : ""
      } catch (zz) {
        return ""
      }
    }

    function yz(zz) {
      return `${zz.appName}!${zz.appId}`
    }
    const Dz = new Map;

    function Qz(zz, uz) {
      const bz = yz(zz);
      Wz(bz, uz),
        function(zz, uz) {
          const bz = jz();
          bz && bz.postMessage({
            key: zz,
            fid: uz
          });
          Iz()
        }(bz, uz)
    }

    function Wz(zz, uz) {
      const bz = Dz.get(zz);
      if (bz)
        for (const Ez of bz) Ez(uz)
    }
    let ez = null;

    function jz() {
      return !ez && "BroadcastChannel" in self && (ez = new BroadcastChannel("[Firebase] FID Change"), ez.onmessage = zz => {
        Wz(zz.data.key, zz.data.fid)
      }), ez
    }

    function Iz() {
      0 === Dz.size && ez && (ez.close(), ez = null)
    }
    const Bz = "firebase-installations-store";
    let Cz = null;

    function Yz() {
      return Cz || (Cz = function(zz, uz) {
        let {
          blocked: bz,
          upgrade: Ez,
          blocking: nz,
          terminated: iz
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const lz = indexedDB.open(zz, uz),
          Mz = wz(lz);
        return Ez && lz.addEventListener("upgradeneeded", (zz => {
          Ez(wz(lz.result), zz.oldVersion, zz.newVersion, wz(lz.transaction))
        })), bz && lz.addEventListener("blocked", (() => bz())), Mz.then((zz => {
          iz && zz.addEventListener("close", (() => iz())), nz && zz.addEventListener("versionchange", (() => nz()))
        })).catch((() => {})), Mz
      }("firebase-installations-database", 1, {
        upgrade: (zz, uz) => {
          if (0 === uz) zz.createObjectStore(Bz)
        }
      })), Cz
    }
    async function kz(zz, uz) {
      const bz = yz(zz),
        Ez = (await Yz()).transaction(Bz, "readwrite"),
        nz = Ez.objectStore(Bz),
        iz = await nz.get(bz);
      return await nz.put(uz, bz), await Ez.done, iz && iz.fid === uz.fid || Qz(zz, uz.fid), uz
    }
    async function zu(zz) {
      const uz = yz(zz),
        bz = (await Yz()).transaction(Bz, "readwrite");
      await bz.objectStore(Bz).delete(uz), await bz.done
    }
    async function uu(zz, uz) {
      const bz = yz(zz),
        Ez = (await Yz()).transaction(Bz, "readwrite"),
        nz = Ez.objectStore(Bz),
        iz = await nz.get(bz),
        lz = uz(iz);
      return void 0 === lz ? await nz.delete(bz) : await nz.put(lz, bz), await Ez.done, !lz || iz && iz.fid === lz.fid || Qz(zz, lz.fid), lz
    }
    async function bu(zz) {
      let uz;
      const bz = await uu(zz.appConfig, (bz => {
        const Ez = function(zz) {
            const uz = zz || {
              fid: Sz(),
              registrationStatus: 0
            };
            return iu(uz)
          }(bz),
          nz = function(zz, uz) {
            if (0 === uz.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: uz,
                  registrationPromise: Promise.reject(Pz.create("app-offline"))
                }
              }
              const bz = {
                  fid: uz.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Ez = async function(zz, uz) {
                  try {
                    const bz = await async function(zz, uz) {
                      let {
                        appConfig: bz,
                        heartbeatServiceProvider: Ez
                      } = zz, {
                        fid: nz
                      } = uz;
                      const iz = az(bz),
                        lz = qz(bz),
                        Mz = Ez.getImmediate({
                          optional: !0
                        });
                      if (Mz) {
                        const zz = await Mz.getHeartbeatsHeader();
                        zz && lz.append("x-firebase-client", zz)
                      }
                      const tz = {
                          fid: nz,
                          authVersion: Az,
                          appId: bz.appId,
                          sdkVersion: Jz
                        },
                        Hz = {
                          method: "POST",
                          headers: lz,
                          body: JSON.stringify(tz)
                        },
                        Oz = await Uz((() => fetch(iz, Hz)));
                      if (Oz.ok) {
                        const zz = await Oz.json();
                        return {
                          fid: zz.fid || nz,
                          registrationStatus: 2,
                          refreshToken: zz.refreshToken,
                          authToken: Vz(zz.authToken)
                        }
                      }
                      throw await mz("Create Installation", Oz)
                    }(zz, uz);
                    return kz(zz.appConfig, bz)
                  } catch (bz) {
                    throw Gz(bz) && 409 === bz.customData.serverCode ? await zu(zz.appConfig) : await kz(zz.appConfig, {
                      fid: uz.fid,
                      registrationStatus: 0
                    }), bz
                  }
                }(zz, bz);
              return {
                installationEntry: bz,
                registrationPromise: Ez
              }
            }
            return 1 === uz.registrationStatus ? {
              installationEntry: uz,
              registrationPromise: Eu(zz)
            } : {
              installationEntry: uz
            }
          }(zz, Ez);
        return uz = nz.registrationPromise, nz.installationEntry
      }));
      return "" === bz.fid ? {
        installationEntry: await uz
      } : {
        installationEntry: bz,
        registrationPromise: uz
      }
    }
    async function Eu(zz) {
      let uz = await nu(zz.appConfig);
      for (; 1 === uz.registrationStatus;) await cz(100), uz = await nu(zz.appConfig);
      if (0 === uz.registrationStatus) {
        const {
          installationEntry: uz,
          registrationPromise: bz
        } = await bu(zz);
        return bz || uz
      }
      return uz
    }

    function nu(zz) {
      return uu(zz, (zz => {
        if (!zz) throw Pz.create("installation-not-found");
        return iu(zz)
      }))
    }

    function iu(zz) {
      return 1 === (uz = zz).registrationStatus && uz.registrationTime + xz < Date.now() ? {
        fid: zz.fid,
        registrationStatus: 0
      } : zz;
      var uz
    }
    async function lu(zz, uz) {
      let {
        appConfig: bz,
        heartbeatServiceProvider: Ez
      } = zz;
      const nz = function(zz, uz) {
          let {
            fid: bz
          } = uz;
          return `${az(zz)}/${bz}/authTokens:generate`
        }(bz, uz),
        iz = hz(bz, uz),
        lz = Ez.getImmediate({
          optional: !0
        });
      if (lz) {
        const zz = await lz.getHeartbeatsHeader();
        zz && iz.append("x-firebase-client", zz)
      }
      const Mz = {
          installation: {
            sdkVersion: Jz,
            appId: bz.appId
          }
        },
        tz = {
          method: "POST",
          headers: iz,
          body: JSON.stringify(Mz)
        },
        Hz = await Uz((() => fetch(nz, tz)));
      if (Hz.ok) {
        return Vz(await Hz.json())
      }
      throw await mz("Generate Auth Token", Hz)
    }
    async function Mu(zz) {
      let uz, bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ez = await uu(zz.appConfig, (Ez => {
        if (!Hu(Ez)) throw Pz.create("not-registered");
        const nz = Ez.authToken;
        if (!bz && function(zz) {
            return 2 === zz.requestStatus && ! function(zz) {
              const uz = Date.now();
              return uz < zz.creationTime || zz.creationTime + zz.expiresIn < uz + Tz
            }(zz)
          }(nz)) return Ez;
        if (1 === nz.requestStatus) return uz = async function(zz, uz) {
          let bz = await tu(zz.appConfig);
          for (; 1 === bz.authToken.requestStatus;) await cz(100), bz = await tu(zz.appConfig);
          const Ez = bz.authToken;
          return 0 === Ez.requestStatus ? Mu(zz, uz) : Ez
        }(zz, bz), Ez;
        {
          if (!navigator.onLine) throw Pz.create("app-offline");
          const bz = function(zz) {
            const uz = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, zz), {
              authToken: uz
            })
          }(Ez);
          return uz = async function(zz, uz) {
            try {
              const bz = await lu(zz, uz),
                Ez = Object.assign(Object.assign({}, uz), {
                  authToken: bz
                });
              return await kz(zz.appConfig, Ez), bz
            } catch (bz) {
              if (!Gz(bz) || 401 !== bz.customData.serverCode && 404 !== bz.customData.serverCode) {
                const bz = Object.assign(Object.assign({}, uz), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await kz(zz.appConfig, bz)
              } else await zu(zz.appConfig);
              throw bz
            }
          }(zz, bz), bz
        }
      }));
      return uz ? await uz : Ez.authToken
    }

    function tu(zz) {
      return uu(zz, (zz => {
        if (!Hu(zz)) throw Pz.create("not-registered");
        const uz = zz.authToken;
        return 1 === (bz = uz).requestStatus && bz.requestTime + xz < Date.now() ? Object.assign(Object.assign({}, zz), {
          authToken: {
            requestStatus: 0
          }
        }) : zz;
        var bz
      }))
    }

    function Hu(zz) {
      return void 0 !== zz && 2 === zz.registrationStatus
    }
    async function Ou(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const bz = zz;
      await async function(zz) {
        const {
          registrationPromise: uz
        } = await bu(zz);
        uz && await uz
      }(bz);
      return (await Mu(bz, uz)).token
    }

    function pu(zz) {
      return Pz.create("missing-app-config-values", {
        valueName: zz
      })
    }
    const du = "installations",
      Fu = zz => {
        const uz = zz.getProvider("app").getImmediate(),
          bz = function(zz) {
            if (!zz || !zz.options) throw pu("App Configuration");
            if (!zz.name) throw pu("App Name");
            const uz = ["projectId", "apiKey", "appId"];
            for (const bz of uz)
              if (!zz.options[bz]) throw pu(bz);
            return {
              appName: zz.name,
              projectId: zz.options.projectId,
              apiKey: zz.options.apiKey,
              appId: zz.options.appId
            }
          }(uz);
        return {
          app: uz,
          appConfig: bz,
          heartbeatServiceProvider: (0, Ez.x)(uz, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Zu = zz => {
        const uz = zz.getProvider("app").getImmediate(),
          bz = (0, Ez.x)(uz, du).getImmediate();
        return {
          getId: () => async function(zz) {
            const uz = zz,
              {
                installationEntry: bz,
                registrationPromise: Ez
              } = await bu(uz);
            return Ez ? Ez.catch(console.error) : Mu(uz).catch(console.error), bz.fid
          }(bz),
          getToken: zz => Ou(bz, zz)
        }
      };
    (0, Ez.A)(new lz.f(du, Fu, "PUBLIC")), (0, Ez.A)(new lz.f("installations-internal", Zu, "PRIVATE")), (0, Ez.S)(Nz, vz), (0, Ez.S)(Nz, vz, "esm2017");
    const Ru = "analytics",
      Ku = "https://www.googletagmanager.com/gtag/js",
      wu = new nz.e("@firebase/analytics"),
      Xu = {
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
      fu = new iz.c("analytics", "Analytics", Xu);

    function su(zz) {
      if (!zz.startsWith(Ku)) {
        const uz = fu.create("invalid-gtag-resource", {
          gtagURL: zz
        });
        return wu.warn(uz.message), ""
      }
      return zz
    }

    function ru(zz) {
      return Promise.all(zz.map((zz => zz.catch((zz => zz)))))
    }

    function ou(zz, uz) {
      const bz = function(zz, uz) {
          let bz;
          return window.trustedTypes && (bz = window.trustedTypes.createPolicy(zz, uz)), bz
        }("firebase-js-sdk-policy", {
          createScriptURL: su
        }),
        Ez = document.createElement("script"),
        nz = `${Ku}?l=${zz}&id=${uz}`;
      Ez.src = bz ? null === bz || void 0 === bz ? void 0 : bz.createScriptURL(nz) : nz, Ez.async = !0, document.head.appendChild(Ez)
    }

    function Nu(zz, uz, bz, Ez) {
      return async function(nz) {
        try {
          for (var iz = arguments.length, lz = new Array(iz > 1 ? iz - 1 : 0), Mz = 1; Mz < iz; Mz++) lz[Mz - 1] = arguments[Mz];
          if ("event" === nz) {
            const [Ez, nz] = lz;
            await async function(zz, uz, bz, Ez, nz) {
              try {
                let iz = [];
                if (nz && nz.send_to) {
                  let zz = nz.send_to;
                  Array.isArray(zz) || (zz = [zz]);
                  const Ez = await ru(bz);
                  for (const bz of zz) {
                    const zz = Ez.find((zz => zz.measurementId === bz)),
                      nz = zz && uz[zz.appId];
                    if (!nz) {
                      iz = [];
                      break
                    }
                    iz.push(nz)
                  }
                }
                0 === iz.length && (iz = Object.values(uz)), await Promise.all(iz), zz("event", Ez, nz || {})
              } catch (iz) {
                wu.error(iz)
              }
            }(zz, uz, bz, Ez, nz)
          } else if ("config" === nz) {
            const [nz, iz] = lz;
            await async function(zz, uz, bz, Ez, nz, iz) {
              const lz = Ez[nz];
              try {
                if (lz) await uz[lz];
                else {
                  const zz = (await ru(bz)).find((zz => zz.measurementId === nz));
                  zz && await uz[zz.appId]
                }
              } catch (Mz) {
                wu.error(Mz)
              }
              zz("config", nz, iz)
            }(zz, uz, bz, Ez, nz, iz)
          } else if ("consent" === nz) {
            const [uz] = lz;
            zz("consent", "update", uz)
          } else if ("get" === nz) {
            const [uz, bz, Ez] = lz;
            zz("get", uz, bz, Ez)
          } else if ("set" === nz) {
            const [uz] = lz;
            zz("set", uz)
          } else zz(nz, ...lz)
        } catch (tz) {
          wu.error(tz)
        }
      }
    }
    const vu = new class {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = zz, this.intervalMillis = uz
      }
      getThrottleMetadata(zz) {
        return this.throttleMetadata[zz]
      }
      setThrottleMetadata(zz, uz) {
        this.throttleMetadata[zz] = uz
      }
      deleteThrottleMetadata(zz) {
        delete this.throttleMetadata[zz]
      }
    };

    function xu(zz) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": zz
      })
    }
    async function Ju(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vu,
        bz = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Ez,
        apiKey: nz,
        measurementId: iz
      } = zz.options;
      if (!Ez) throw fu.create("no-app-id");
      if (!nz) {
        if (iz) return {
          measurementId: iz,
          appId: Ez
        };
        throw fu.create("no-api-key")
      }
      const lz = uz.getThrottleMetadata(Ez) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Mz = new Tu;
      return setTimeout((async () => {
        Mz.abort()
      }), void 0 !== bz ? bz : 6e4), Au({
        appId: Ez,
        apiKey: nz,
        measurementId: iz
      }, lz, Mz, uz)
    }
    async function Au(zz, uz, bz) {
      let {
        throttleEndTimeMillis: Ez,
        backoffCount: nz
      } = uz, lz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vu;
      var Mz;
      const {
        appId: tz,
        measurementId: Hz
      } = zz;
      try {
        await
        function(zz, uz) {
          return new Promise(((bz, Ez) => {
            const nz = Math.max(uz - Date.now(), 0),
              iz = setTimeout(bz, nz);
            zz.addEventListener((() => {
              clearTimeout(iz), Ez(fu.create("fetch-throttle", {
                throttleEndTimeMillis: uz
              }))
            }))
          }))
        }(bz, Ez)
      } catch (Oz) {
        if (Hz) return wu.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Hz} provided in the "measurementId" field in the local Firebase config. [${null===Oz||void 0===Oz?void 0:Oz.message}]`), {
          appId: tz,
          measurementId: Hz
        };
        throw Oz
      }
      try {
        const uz = await async function(zz) {
          var uz;
          const {
            appId: bz,
            apiKey: Ez
          } = zz, nz = {
            method: "GET",
            headers: xu(Ez)
          }, iz = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", bz), lz = await fetch(iz, nz);
          if (200 !== lz.status && 304 !== lz.status) {
            let zz = "";
            try {
              const bz = await lz.json();
              (null === (uz = bz.error) || void 0 === uz ? void 0 : uz.message) && (zz = bz.error.message)
            } catch (Mz) {}
            throw fu.create("config-fetch-failed", {
              httpStatus: lz.status,
              responseMessage: zz
            })
          }
          return lz.json()
        }(zz);
        return lz.deleteThrottleMetadata(tz), uz
      } catch (Oz) {
        const uz = Oz;
        if (! function(zz) {
            if (!(zz instanceof iz.f) || !zz.customData) return !1;
            const uz = Number(zz.customData.httpStatus);
            return 429 === uz || 500 === uz || 503 === uz || 504 === uz
          }(uz)) {
          if (lz.deleteThrottleMetadata(tz), Hz) return wu.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Hz} provided in the "measurementId" field in the local Firebase config. [${null===uz||void 0===uz?void 0:uz.message}]`), {
            appId: tz,
            measurementId: Hz
          };
          throw Oz
        }
        const Ez = 503 === Number(null === (Mz = null === uz || void 0 === uz ? void 0 : uz.customData) || void 0 === Mz ? void 0 : Mz.httpStatus) ? (0, iz.q)(nz, lz.intervalMillis, 30) : (0, iz.q)(nz, lz.intervalMillis),
          pz = {
            throttleEndTimeMillis: Date.now() + Ez,
            backoffCount: nz + 1
          };
        return lz.setThrottleMetadata(tz, pz), wu.debug(`Calling attemptFetch again in ${Ez} millis`), Au(zz, pz, bz, lz)
      }
    }
    class Tu {
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
    let Lu, Pu;

    function Gu(zz) {
      Pu = zz
    }

    function au(zz) {
      Lu = zz
    }
    async function Vu(zz, uz, bz, Ez, nz, lz, Mz) {
      var tz;
      const Hz = Ju(zz);
      Hz.then((uz => {
        bz[uz.measurementId] = uz.appId, zz.options.measurementId && uz.measurementId !== zz.options.measurementId && wu.warn(`The measurement ID in the local Firebase config (${zz.options.measurementId}) does not match the measurement ID fetched from the server (${uz.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((zz => wu.error(zz))), uz.push(Hz);
      const Oz = async function() {
        if (!(0, iz.X)()) return wu.warn(fu.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, iz.hb)()
        } catch (zz) {
          return wu.warn(fu.create("indexeddb-unavailable", {
            errorInfo: null === zz || void 0 === zz ? void 0 : zz.toString()
          }).message), !1
        }
        return !0
      }().then((zz => zz ? Ez.getId() : void 0)), [pz, dz] = await Promise.all([Hz, Oz]);
      (function(zz) {
        const uz = window.document.getElementsByTagName("script");
        for (const bz of Object.values(uz))
          if (bz.src && bz.src.includes(Ku) && bz.src.includes(zz)) return bz;
        return null
      })(lz) || ou(lz, pz.measurementId), Pu && (nz("consent", "default", Pu), Gu(void 0)), nz("js", new Date);
      const Fz = null !== (tz = null === Mz || void 0 === Mz ? void 0 : Mz.config) && void 0 !== tz ? tz : {};
      return Fz.origin = "firebase", Fz.update = !0, null != dz && (Fz.firebase_id = dz), nz("config", pz.measurementId, Fz), Lu && (nz("set", Lu), au(void 0)), pz.measurementId
    }
    class mu {
      constructor(zz) {
        this.app = zz
      }
      _delete() {
        return delete qu[this.app.options.appId], Promise.resolve()
      }
    }
    let qu = {},
      hu = [];
    const Uu = {};
    let cu, gu, Su = "dataLayer",
      yu = "gtag",
      Du = !1;

    function Qu(zz) {
      if (Du) throw fu.create("already-initialized");
      zz.dataLayerName && (Su = zz.dataLayerName), zz.gtagName && (yu = zz.gtagName)
    }

    function Wu(zz, uz, bz) {
      ! function() {
        const zz = [];
        if ((0, iz.N)() && zz.push("This is a browser extension environment."), (0, iz.j)() || zz.push("Cookies are not available."), zz.length > 0) {
          const uz = zz.map(((zz, uz) => `(${uz+1}) ${zz}`)).join(" "),
            bz = fu.create("invalid-analytics-context", {
              errorInfo: uz
            });
          wu.warn(bz.message)
        }
      }();
      const Ez = zz.options.appId;
      if (!Ez) throw fu.create("no-app-id");
      if (!zz.options.apiKey) {
        if (!zz.options.measurementId) throw fu.create("no-api-key");
        wu.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${zz.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != qu[Ez]) throw fu.create("already-exists", {
        id: Ez
      });
      if (!Du) {
        ! function(zz) {
          let uz = [];
          Array.isArray(window[zz]) ? uz = window[zz] : window[zz] = uz
        }(Su);
        const {
          wrappedGtag: zz,
          gtagCore: uz
        } = function(zz, uz, bz, Ez, nz) {
          let iz = function() {
            for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
            window[Ez].push(arguments)
          };
          return window[nz] && "function" === typeof window[nz] && (iz = window[nz]), window[nz] = Nu(iz, zz, uz, bz), {
            gtagCore: iz,
            wrappedGtag: window[nz]
          }
        }(qu, hu, Uu, Su, yu);
        gu = zz, cu = uz, Du = !0
      }
      qu[Ez] = Vu(zz, hu, Uu, uz, cu, Su, bz);
      return new mu(zz)
    }

    function eu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.K)();
      zz = (0, iz.I)(zz);
      const uz = (0, Ez.x)(zz, Ru);
      return uz.isInitialized() ? uz.getImmediate() : ju(zz)
    }

    function ju(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const bz = (0, Ez.x)(zz, Ru);
      if (bz.isInitialized()) {
        const zz = bz.getImmediate();
        if ((0, iz.t)(uz, bz.getOptions())) return zz;
        throw fu.create("already-initialized")
      }
      return bz.initialize({
        options: uz
      })
    }
    async function Iu() {
      if ((0, iz.N)()) return !1;
      if (!(0, iz.j)()) return !1;
      if (!(0, iz.X)()) return !1;
      try {
        return await (0, iz.hb)()
      } catch (zz) {
        return !1
      }
    }

    function Bu(zz, uz, bz) {
      zz = (0, iz.I)(zz), async function(zz, uz, bz, Ez) {
        if (Ez && Ez.global) return zz("set", {
          screen_name: bz
        }), Promise.resolve();
        zz("config", await uz, {
          update: !0,
          screen_name: bz
        })
      }(gu, qu[zz.app.options.appId], uz, bz).catch((zz => wu.error(zz)))
    }
    async function Cu(zz) {
      return zz = (0, iz.I)(zz), async function(zz, uz) {
        const bz = await uz;
        return new Promise(((uz, Ez) => {
          zz("get", bz, "client_id", (zz => {
            zz || Ez(fu.create("no-client-id")), uz(zz)
          }))
        }))
      }(gu, qu[zz.app.options.appId])
    }

    function Yu(zz, uz, bz) {
      zz = (0, iz.I)(zz), async function(zz, uz, bz, Ez) {
        if (Ez && Ez.global) return zz("set", {
          user_id: bz
        }), Promise.resolve();
        zz("config", await uz, {
          update: !0,
          user_id: bz
        })
      }(gu, qu[zz.app.options.appId], uz, bz).catch((zz => wu.error(zz)))
    }

    function ku(zz, uz, bz) {
      zz = (0, iz.I)(zz), async function(zz, uz, bz, Ez) {
        if (Ez && Ez.global) {
          const uz = {};
          for (const zz of Object.keys(bz)) uz[`user_properties.${zz}`] = bz[zz];
          return zz("set", uz), Promise.resolve()
        }
        zz("config", await uz, {
          update: !0,
          user_properties: bz
        })
      }(gu, qu[zz.app.options.appId], uz, bz).catch((zz => wu.error(zz)))
    }

    function zb(zz, uz) {
      zz = (0, iz.I)(zz), async function(zz, uz) {
        const bz = await zz;
        window[`ga-disable-${bz}`] = !uz
      }(qu[zz.app.options.appId], uz).catch((zz => wu.error(zz)))
    }

    function ub(zz) {
      gu ? gu("set", zz) : au(zz)
    }

    function bb(zz, uz, bz, Ez) {
      zz = (0, iz.I)(zz), async function(zz, uz, bz, Ez, nz) {
        if (nz && nz.global) zz("event", bz, Ez);
        else {
          const nz = await uz;
          zz("event", bz, Object.assign(Object.assign({}, Ez), {
            send_to: nz
          }))
        }
      }(gu, qu[zz.app.options.appId], uz, bz, Ez).catch((zz => wu.error(zz)))
    }

    function Eb(zz) {
      gu ? gu("consent", "update", zz) : Gu(zz)
    }
    const nb = "@firebase/analytics",
      ib = "0.10.0";
    (0, Ez.A)(new lz.f(Ru, ((zz, uz) => {
      let {
        options: bz
      } = uz;
      return Wu(zz.getProvider("app").getImmediate(), zz.getProvider("installations-internal").getImmediate(), bz)
    }), "PUBLIC")), (0, Ez.A)(new lz.f("analytics-internal", (function(zz) {
      try {
        const uz = zz.getProvider(Ru).getImmediate();
        return {
          logEvent: (zz, bz, Ez) => bb(uz, zz, bz, Ez)
        }
      } catch (uz) {
        throw fu.create("interop-component-reg-failed", {
          reason: uz
        })
      }
    }), "PRIVATE")), (0, Ez.S)(nb, ib), (0, Ez.S)(nb, ib, "esm2017")
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);