/*! For license information please see qepqb8.259.776117ba.chunk.js.LICENSE.txt */
export const id = 259;
export const ids = [259];
export const modules = {
  39838: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      getAnalytics: () => Ez,
      getGoogleAnalyticsClientId: () => kz,
      initializeAnalytics: () => oz,
      isSupported: () => bz,
      logEvent: () => PP,
      setAnalyticsCollectionEnabled: () => vP,
      setConsent: () => hP,
      setCurrentScreen: () => rz,
      setDefaultEventParameters: () => zP,
      setUserId: () => Xz,
      setUserProperties: () => uz,
      settings: () => Bz
    });
    var hv = Pv(39815),
      Sv = Pv(39836),
      ev = Pv(39829),
      gv = Pv(39822);
    let pv, dv;
    const Nv = new WeakMap,
      lv = new WeakMap,
      Tv = new WeakMap,
      Wv = new WeakMap,
      wv = new WeakMap;
    let av = {
      get(vv, zv, Pv) {
        if (vv instanceof IDBTransaction) {
          if ("done" === zv) return lv.get(vv);
          if ("objectStoreNames" === zv) return vv.objectStoreNames || Tv.get(vv);
          if ("store" === zv) return Pv.objectStoreNames[1] ? void 0 : Pv.objectStore(Pv.objectStoreNames[0])
        }
        return iv(vv[zv])
      },
      set: (vv, zv, Pv) => (vv[zv] = Pv, !0),
      has: (vv, zv) => vv instanceof IDBTransaction && ("done" === zv || "store" === zv) || zv in vv
    };

    function sv(vv) {
      return vv !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (dv || (dv = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(vv) ? function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return vv.apply(cv(this), Pv), iv(Nv.get(this))
      } : function() {
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        return iv(vv.apply(cv(this), Pv))
      } : function(zv) {
        for (var Pv = arguments.length, hv = new Array(Pv > 1 ? Pv - 1 : 0), Sv = 1; Sv < Pv; Sv++) hv[Sv - 1] = arguments[Sv];
        const ev = vv.call(cv(this), zv, ...hv);
        return Tv.set(ev, zv.sort ? zv.sort() : [zv]), iv(ev)
      }
    }

    function Cv(vv) {
      return "function" === typeof vv ? sv(vv) : (vv instanceof IDBTransaction && function(vv) {
        if (lv.has(vv)) return;
        const zv = new Promise(((zv, Pv) => {
          const hv = () => {
              vv.removeEventListener("complete", Sv), vv.removeEventListener("error", ev), vv.removeEventListener("abort", ev)
            },
            Sv = () => {
              zv(), hv()
            },
            ev = () => {
              Pv(vv.error || new DOMException("AbortError", "AbortError")), hv()
            };
          vv.addEventListener("complete", Sv), vv.addEventListener("error", ev), vv.addEventListener("abort", ev)
        }));
        lv.set(vv, zv)
      }(vv), zv = vv, (pv || (pv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((vv => zv instanceof vv)) ? new Proxy(vv, av) : vv);
      var zv
    }

    function iv(vv) {
      if (vv instanceof IDBRequest) return function(vv) {
        const zv = new Promise(((zv, Pv) => {
          const hv = () => {
              vv.removeEventListener("success", Sv), vv.removeEventListener("error", ev)
            },
            Sv = () => {
              zv(iv(vv.result)), hv()
            },
            ev = () => {
              Pv(vv.error), hv()
            };
          vv.addEventListener("success", Sv), vv.addEventListener("error", ev)
        }));
        return zv.then((zv => {
          zv instanceof IDBCursor && Nv.set(zv, vv)
        })).catch((() => {})), wv.set(zv, vv), zv
      }(vv);
      if (Wv.has(vv)) return Wv.get(vv);
      const zv = Cv(vv);
      return zv !== vv && (Wv.set(vv, zv), wv.set(zv, vv)), zv
    }
    const cv = vv => wv.get(vv);
    const Gv = ["get", "getKey", "getAll", "getAllKeys", "count"],
      mv = ["put", "add", "delete", "clear"],
      jv = new Map;

    function fv(vv, zv) {
      if (!(vv instanceof IDBDatabase) || zv in vv || "string" !== typeof zv) return;
      if (jv.get(zv)) return jv.get(zv);
      const Pv = zv.replace(/FromIndex$/, ""),
        hv = zv !== Pv,
        Sv = mv.includes(Pv);
      if (!(Pv in (hv ? IDBIndex : IDBObjectStore).prototype) || !Sv && !Gv.includes(Pv)) return;
      const ev = async function(vv) {
        const zv = this.transaction(vv, Sv ? "readwrite" : "readonly");
        let ev = zv.store;
        for (var gv = arguments.length, pv = new Array(gv > 1 ? gv - 1 : 0), dv = 1; dv < gv; dv++) pv[dv - 1] = arguments[dv];
        return hv && (ev = ev.index(pv.shift())), (await Promise.all([ev[Pv](...pv), Sv && zv.done]))[0]
      };
      return jv.set(zv, ev), ev
    }
    av = (vv => ({
      ...vv,
      get: (zv, Pv, hv) => fv(zv, Pv) || vv.get(zv, Pv, hv),
      has: (zv, Pv) => !!fv(zv, Pv) || vv.has(zv, Pv)
    }))(av);
    const Fv = "@firebase/installations",
      Yv = "0.6.4",
      nv = 1e4,
      Ov = `w:${Yv}`,
      Dv = "FIS_v2",
      Kv = 36e5,
      Vv = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Uv = new ev.f("installations", "Installations", Vv);

    function Rv(vv) {
      return vv instanceof ev.j && vv.code.includes("request-failed")
    }

    function xv(vv) {
      let {
        projectId: zv
      } = vv;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${zv}/installations`
    }

    function tv(vv) {
      return {
        token: vv.token,
        requestStatus: 2,
        expiresIn: (zv = vv.expiresIn, Number(zv.replace("s", "000"))),
        creationTime: Date.now()
      };
      var zv
    }
    async function qv(vv, zv) {
      const Pv = (await zv.json()).error;
      return Uv.create("request-failed", {
        requestName: vv,
        serverCode: Pv.code,
        serverMessage: Pv.message,
        serverStatus: Pv.status
      })
    }

    function Iv(vv) {
      let {
        apiKey: zv
      } = vv;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": zv
      })
    }

    function Qv(vv, zv) {
      let {
        refreshToken: Pv
      } = zv;
      const hv = Iv(vv);
      return hv.append("Authorization", function(vv) {
        return `${Dv} ${vv}`
      }(Pv)), hv
    }
    async function Zv(vv) {
      const zv = await vv();
      return zv.status >= 500 && zv.status < 600 ? vv() : zv
    }

    function Av(vv) {
      return new Promise((zv => {
        setTimeout(zv, vv)
      }))
    }
    const Lv = /^[cdef][\w-]{21}$/;

    function Hv() {
      try {
        const vv = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(vv), vv[0] = 112 + vv[0] % 16;
        const zv = function(vv) {
          const zv = (Pv = vv, btoa(String.fromCharCode(...Pv)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Pv;
          return zv.substr(0, 22)
        }(vv);
        return Lv.test(zv) ? zv : ""
      } catch (vv) {
        return ""
      }
    }

    function Mv(vv) {
      return `${vv.appName}!${vv.appId}`
    }
    const yv = new Map;

    function Bv(vv, zv) {
      const Pv = Mv(vv);
      Jv(Pv, zv),
        function(vv, zv) {
          const Pv = ov();
          Pv && Pv.postMessage({
            key: vv,
            fid: zv
          });
          bv()
        }(Pv, zv)
    }

    function Jv(vv, zv) {
      const Pv = yv.get(vv);
      if (Pv)
        for (const hv of Pv) hv(zv)
    }
    let Ev = null;

    function ov() {
      return !Ev && "BroadcastChannel" in self && (Ev = new BroadcastChannel("[Firebase] FID Change"), Ev.onmessage = vv => {
        Jv(vv.data.key, vv.data.fid)
      }), Ev
    }

    function bv() {
      0 === yv.size && Ev && (Ev.close(), Ev = null)
    }
    const rv = "firebase-installations-store";
    let kv = null;

    function Xv() {
      return kv || (kv = function(vv, zv) {
        let {
          blocked: Pv,
          upgrade: hv,
          blocking: Sv,
          terminated: ev
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const gv = indexedDB.open(vv, zv),
          pv = iv(gv);
        return hv && gv.addEventListener("upgradeneeded", (vv => {
          hv(iv(gv.result), vv.oldVersion, vv.newVersion, iv(gv.transaction))
        })), Pv && gv.addEventListener("blocked", (() => Pv())), pv.then((vv => {
          ev && vv.addEventListener("close", (() => ev())), Sv && vv.addEventListener("versionchange", (() => Sv()))
        })).catch((() => {})), pv
      }("firebase-installations-database", 1, {
        upgrade: (vv, zv) => {
          if (0 === zv) vv.createObjectStore(rv)
        }
      })), kv
    }
    async function uv(vv, zv) {
      const Pv = Mv(vv),
        hv = (await Xv()).transaction(rv, "readwrite"),
        Sv = hv.objectStore(rv),
        ev = await Sv.get(Pv);
      return await Sv.put(zv, Pv), await hv.done, ev && ev.fid === zv.fid || Bv(vv, zv.fid), zv
    }
    async function vz(vv) {
      const zv = Mv(vv),
        Pv = (await Xv()).transaction(rv, "readwrite");
      await Pv.objectStore(rv).delete(zv), await Pv.done
    }
    async function zz(vv, zv) {
      const Pv = Mv(vv),
        hv = (await Xv()).transaction(rv, "readwrite"),
        Sv = hv.objectStore(rv),
        ev = await Sv.get(Pv),
        gv = zv(ev);
      return void 0 === gv ? await Sv.delete(Pv) : await Sv.put(gv, Pv), await hv.done, !gv || ev && ev.fid === gv.fid || Bv(vv, gv.fid), gv
    }
    async function Pz(vv) {
      let zv;
      const Pv = await zz(vv.appConfig, (Pv => {
        const hv = function(vv) {
            const zv = vv || {
              fid: Hv(),
              registrationStatus: 0
            };
            return ez(zv)
          }(Pv),
          Sv = function(vv, zv) {
            if (0 === zv.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: zv,
                  registrationPromise: Promise.reject(Uv.create("app-offline"))
                }
              }
              const Pv = {
                  fid: zv.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                hv = async function(vv, zv) {
                  try {
                    const Pv = await async function(vv, zv) {
                      let {
                        appConfig: Pv,
                        heartbeatServiceProvider: hv
                      } = vv, {
                        fid: Sv
                      } = zv;
                      const ev = xv(Pv),
                        gv = Iv(Pv),
                        pv = hv.getImmediate({
                          optional: !0
                        });
                      if (pv) {
                        const vv = await pv.getHeartbeatsHeader();
                        vv && gv.append("x-firebase-client", vv)
                      }
                      const dv = {
                          fid: Sv,
                          authVersion: Dv,
                          appId: Pv.appId,
                          sdkVersion: Ov
                        },
                        Nv = {
                          method: "POST",
                          headers: gv,
                          body: JSON.stringify(dv)
                        },
                        lv = await Zv((() => fetch(ev, Nv)));
                      if (lv.ok) {
                        const vv = await lv.json();
                        return {
                          fid: vv.fid || Sv,
                          registrationStatus: 2,
                          refreshToken: vv.refreshToken,
                          authToken: tv(vv.authToken)
                        }
                      }
                      throw await qv("Create Installation", lv)
                    }(vv, zv);
                    return uv(vv.appConfig, Pv)
                  } catch (Pv) {
                    throw Rv(Pv) && 409 === Pv.customData.serverCode ? await vz(vv.appConfig) : await uv(vv.appConfig, {
                      fid: zv.fid,
                      registrationStatus: 0
                    }), Pv
                  }
                }(vv, Pv);
              return {
                installationEntry: Pv,
                registrationPromise: hv
              }
            }
            return 1 === zv.registrationStatus ? {
              installationEntry: zv,
              registrationPromise: hz(vv)
            } : {
              installationEntry: zv
            }
          }(vv, hv);
        return zv = Sv.registrationPromise, Sv.installationEntry
      }));
      return "" === Pv.fid ? {
        installationEntry: await zv
      } : {
        installationEntry: Pv,
        registrationPromise: zv
      }
    }
    async function hz(vv) {
      let zv = await Sz(vv.appConfig);
      for (; 1 === zv.registrationStatus;) await Av(100), zv = await Sz(vv.appConfig);
      if (0 === zv.registrationStatus) {
        const {
          installationEntry: zv,
          registrationPromise: Pv
        } = await Pz(vv);
        return Pv || zv
      }
      return zv
    }

    function Sz(vv) {
      return zz(vv, (vv => {
        if (!vv) throw Uv.create("installation-not-found");
        return ez(vv)
      }))
    }

    function ez(vv) {
      return 1 === (zv = vv).registrationStatus && zv.registrationTime + nv < Date.now() ? {
        fid: vv.fid,
        registrationStatus: 0
      } : vv;
      var zv
    }
    async function gz(vv, zv) {
      let {
        appConfig: Pv,
        heartbeatServiceProvider: hv
      } = vv;
      const Sv = function(vv, zv) {
          let {
            fid: Pv
          } = zv;
          return `${xv(vv)}/${Pv}/authTokens:generate`
        }(Pv, zv),
        ev = Qv(Pv, zv),
        gv = hv.getImmediate({
          optional: !0
        });
      if (gv) {
        const vv = await gv.getHeartbeatsHeader();
        vv && ev.append("x-firebase-client", vv)
      }
      const pv = {
          installation: {
            sdkVersion: Ov,
            appId: Pv.appId
          }
        },
        dv = {
          method: "POST",
          headers: ev,
          body: JSON.stringify(pv)
        },
        Nv = await Zv((() => fetch(Sv, dv)));
      if (Nv.ok) {
        return tv(await Nv.json())
      }
      throw await qv("Generate Auth Token", Nv)
    }
    async function pz(vv) {
      let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const hv = await zz(vv.appConfig, (hv => {
        if (!Nz(hv)) throw Uv.create("not-registered");
        const Sv = hv.authToken;
        if (!Pv && function(vv) {
            return 2 === vv.requestStatus && ! function(vv) {
              const zv = Date.now();
              return zv < vv.creationTime || vv.creationTime + vv.expiresIn < zv + Kv
            }(vv)
          }(Sv)) return hv;
        if (1 === Sv.requestStatus) return zv = async function(vv, zv) {
          let Pv = await dz(vv.appConfig);
          for (; 1 === Pv.authToken.requestStatus;) await Av(100), Pv = await dz(vv.appConfig);
          const hv = Pv.authToken;
          return 0 === hv.requestStatus ? pz(vv, zv) : hv
        }(vv, Pv), hv;
        {
          if (!navigator.onLine) throw Uv.create("app-offline");
          const Pv = function(vv) {
            const zv = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, vv), {
              authToken: zv
            })
          }(hv);
          return zv = async function(vv, zv) {
            try {
              const Pv = await gz(vv, zv),
                hv = Object.assign(Object.assign({}, zv), {
                  authToken: Pv
                });
              return await uv(vv.appConfig, hv), Pv
            } catch (Pv) {
              if (!Rv(Pv) || 401 !== Pv.customData.serverCode && 404 !== Pv.customData.serverCode) {
                const Pv = Object.assign(Object.assign({}, zv), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await uv(vv.appConfig, Pv)
              } else await vz(vv.appConfig);
              throw Pv
            }
          }(vv, Pv), Pv
        }
      }));
      return zv ? await zv : hv.authToken
    }

    function dz(vv) {
      return zz(vv, (vv => {
        if (!Nz(vv)) throw Uv.create("not-registered");
        const zv = vv.authToken;
        return 1 === (Pv = zv).requestStatus && Pv.requestTime + nv < Date.now() ? Object.assign(Object.assign({}, vv), {
          authToken: {
            requestStatus: 0
          }
        }) : vv;
        var Pv
      }))
    }

    function Nz(vv) {
      return void 0 !== vv && 2 === vv.registrationStatus
    }
    async function lz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Pv = vv;
      await async function(vv) {
        const {
          registrationPromise: zv
        } = await Pz(vv);
        zv && await zv
      }(Pv);
      return (await pz(Pv, zv)).token
    }

    function Tz(vv) {
      return Uv.create("missing-app-config-values", {
        valueName: vv
      })
    }
    const Wz = "installations",
      wz = vv => {
        const zv = vv.getProvider("app").getImmediate(),
          Pv = function(vv) {
            if (!vv || !vv.options) throw Tz("App Configuration");
            if (!vv.name) throw Tz("App Name");
            const zv = ["projectId", "apiKey", "appId"];
            for (const Pv of zv)
              if (!vv.options[Pv]) throw Tz(Pv);
            return {
              appName: vv.name,
              projectId: vv.options.projectId,
              apiKey: vv.options.apiKey,
              appId: vv.options.appId
            }
          }(zv);
        return {
          app: zv,
          appConfig: Pv,
          heartbeatServiceProvider: (0, hv.A)(zv, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      az = vv => {
        const zv = vv.getProvider("app").getImmediate(),
          Pv = (0, hv.A)(zv, Wz).getImmediate();
        return {
          getId: () => async function(vv) {
            const zv = vv,
              {
                installationEntry: Pv,
                registrationPromise: hv
              } = await Pz(zv);
            return hv ? hv.catch(console.error) : pz(zv).catch(console.error), Pv.fid
          }(Pv),
          getToken: vv => lz(Pv, vv)
        }
      };
    (0, hv.D)(new gv.h(Wz, wz, "PUBLIC")), (0, hv.D)(new gv.h("installations-internal", az, "PRIVATE")), (0, hv.S)(Fv, Yv), (0, hv.S)(Fv, Yv, "esm2017");
    const sz = "analytics",
      Cz = "https://www.googletagmanager.com/gtag/js",
      iz = new Sv.g("@firebase/analytics"),
      cz = {
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
      Gz = new ev.f("analytics", "Analytics", cz);

    function mz(vv) {
      if (!vv.startsWith(Cz)) {
        const zv = Gz.create("invalid-gtag-resource", {
          gtagURL: vv
        });
        return iz.warn(zv.message), ""
      }
      return vv
    }

    function jz(vv) {
      return Promise.all(vv.map((vv => vv.catch((vv => vv)))))
    }

    function fz(vv, zv) {
      const Pv = function(vv, zv) {
          let Pv;
          return window.trustedTypes && (Pv = window.trustedTypes.createPolicy(vv, zv)), Pv
        }("firebase-js-sdk-policy", {
          createScriptURL: mz
        }),
        hv = document.createElement("script"),
        Sv = `${Cz}?l=${vv}&id=${zv}`;
      hv.src = Pv ? null === Pv || void 0 === Pv ? void 0 : Pv.createScriptURL(Sv) : Sv, hv.async = !0, document.head.appendChild(hv)
    }

    function Fz(vv, zv, Pv, hv) {
      return async function(Sv) {
        try {
          for (var ev = arguments.length, gv = new Array(ev > 1 ? ev - 1 : 0), pv = 1; pv < ev; pv++) gv[pv - 1] = arguments[pv];
          if ("event" === Sv) {
            const [hv, Sv] = gv;
            await async function(vv, zv, Pv, hv, Sv) {
              try {
                let ev = [];
                if (Sv && Sv.send_to) {
                  let vv = Sv.send_to;
                  Array.isArray(vv) || (vv = [vv]);
                  const hv = await jz(Pv);
                  for (const Pv of vv) {
                    const vv = hv.find((vv => vv.measurementId === Pv)),
                      Sv = vv && zv[vv.appId];
                    if (!Sv) {
                      ev = [];
                      break
                    }
                    ev.push(Sv)
                  }
                }
                0 === ev.length && (ev = Object.values(zv)), await Promise.all(ev), vv("event", hv, Sv || {})
              } catch (ev) {
                iz.error(ev)
              }
            }(vv, zv, Pv, hv, Sv)
          } else if ("config" === Sv) {
            const [Sv, ev] = gv;
            await async function(vv, zv, Pv, hv, Sv, ev) {
              const gv = hv[Sv];
              try {
                if (gv) await zv[gv];
                else {
                  const vv = (await jz(Pv)).find((vv => vv.measurementId === Sv));
                  vv && await zv[vv.appId]
                }
              } catch (pv) {
                iz.error(pv)
              }
              vv("config", Sv, ev)
            }(vv, zv, Pv, hv, Sv, ev)
          } else if ("consent" === Sv) {
            const [zv] = gv;
            vv("consent", "update", zv)
          } else if ("get" === Sv) {
            const [zv, Pv, hv] = gv;
            vv("get", zv, Pv, hv)
          } else if ("set" === Sv) {
            const [zv] = gv;
            vv("set", zv)
          } else vv(Sv, ...gv)
        } catch (dv) {
          iz.error(dv)
        }
      }
    }
    const Yz = new class {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = vv, this.intervalMillis = zv
      }
      getThrottleMetadata(vv) {
        return this.throttleMetadata[vv]
      }
      setThrottleMetadata(vv, zv) {
        this.throttleMetadata[vv] = zv
      }
      deleteThrottleMetadata(vv) {
        delete this.throttleMetadata[vv]
      }
    };

    function nz(vv) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": vv
      })
    }
    async function Oz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yz,
        Pv = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: hv,
        apiKey: Sv,
        measurementId: ev
      } = vv.options;
      if (!hv) throw Gz.create("no-app-id");
      if (!Sv) {
        if (ev) return {
          measurementId: ev,
          appId: hv
        };
        throw Gz.create("no-api-key")
      }
      const gv = zv.getThrottleMetadata(hv) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        pv = new Kz;
      return setTimeout((async () => {
        pv.abort()
      }), void 0 !== Pv ? Pv : 6e4), Dz({
        appId: hv,
        apiKey: Sv,
        measurementId: ev
      }, gv, pv, zv)
    }
    async function Dz(vv, zv, Pv) {
      let {
        throttleEndTimeMillis: hv,
        backoffCount: Sv
      } = zv, gv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yz;
      var pv;
      const {
        appId: dv,
        measurementId: Nv
      } = vv;
      try {
        await
        function(vv, zv) {
          return new Promise(((Pv, hv) => {
            const Sv = Math.max(zv - Date.now(), 0),
              ev = setTimeout(Pv, Sv);
            vv.addEventListener((() => {
              clearTimeout(ev), hv(Gz.create("fetch-throttle", {
                throttleEndTimeMillis: zv
              }))
            }))
          }))
        }(Pv, hv)
      } catch (lv) {
        if (Nv) return iz.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Nv} provided in the "measurementId" field in the local Firebase config. [${null===lv||void 0===lv?void 0:lv.message}]`), {
          appId: dv,
          measurementId: Nv
        };
        throw lv
      }
      try {
        const zv = await async function(vv) {
          var zv;
          const {
            appId: Pv,
            apiKey: hv
          } = vv, Sv = {
            method: "GET",
            headers: nz(hv)
          }, ev = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Pv), gv = await fetch(ev, Sv);
          if (200 !== gv.status && 304 !== gv.status) {
            let vv = "";
            try {
              const Pv = await gv.json();
              (null === (zv = Pv.error) || void 0 === zv ? void 0 : zv.message) && (vv = Pv.error.message)
            } catch (pv) {}
            throw Gz.create("config-fetch-failed", {
              httpStatus: gv.status,
              responseMessage: vv
            })
          }
          return gv.json()
        }(vv);
        return gv.deleteThrottleMetadata(dv), zv
      } catch (lv) {
        const zv = lv;
        if (! function(vv) {
            if (!(vv instanceof ev.j) || !vv.customData) return !1;
            const zv = Number(vv.customData.httpStatus);
            return 429 === zv || 500 === zv || 503 === zv || 504 === zv
          }(zv)) {
          if (gv.deleteThrottleMetadata(dv), Nv) return iz.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Nv} provided in the "measurementId" field in the local Firebase config. [${null===zv||void 0===zv?void 0:zv.message}]`), {
            appId: dv,
            measurementId: Nv
          };
          throw lv
        }
        const hv = 503 === Number(null === (pv = null === zv || void 0 === zv ? void 0 : zv.customData) || void 0 === pv ? void 0 : pv.httpStatus) ? (0, ev.t)(Sv, gv.intervalMillis, 30) : (0, ev.t)(Sv, gv.intervalMillis),
          Tv = {
            throttleEndTimeMillis: Date.now() + hv,
            backoffCount: Sv + 1
          };
        return gv.setThrottleMetadata(dv, Tv), iz.debug(`Calling attemptFetch again in ${hv} millis`), Dz(vv, Tv, Pv, gv)
      }
    }
    class Kz {
      constructor() {
        this.listeners = []
      }
      addEventListener(vv) {
        this.listeners.push(vv)
      }
      abort() {
        this.listeners.forEach((vv => vv()))
      }
    }
    let Vz, Uz;

    function Rz(vv) {
      Uz = vv
    }

    function xz(vv) {
      Vz = vv
    }
    async function tz(vv, zv, Pv, hv, Sv, gv, pv) {
      var dv;
      const Nv = Oz(vv);
      Nv.then((zv => {
        Pv[zv.measurementId] = zv.appId, vv.options.measurementId && zv.measurementId !== vv.options.measurementId && iz.warn(`The measurement ID in the local Firebase config (${vv.options.measurementId}) does not match the measurement ID fetched from the server (${zv.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((vv => iz.error(vv))), zv.push(Nv);
      const lv = async function() {
        if (!(0, ev.X)()) return iz.warn(Gz.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, ev.ib)()
        } catch (vv) {
          return iz.warn(Gz.create("indexeddb-unavailable", {
            errorInfo: null === vv || void 0 === vv ? void 0 : vv.toString()
          }).message), !1
        }
        return !0
      }().then((vv => vv ? hv.getId() : void 0)), [Tv, Wv] = await Promise.all([Nv, lv]);
      (function(vv) {
        const zv = window.document.getElementsByTagName("script");
        for (const Pv of Object.values(zv))
          if (Pv.src && Pv.src.includes(Cz) && Pv.src.includes(vv)) return Pv;
        return null
      })(gv) || fz(gv, Tv.measurementId), Uz && (Sv("consent", "default", Uz), Rz(void 0)), Sv("js", new Date);
      const wv = null !== (dv = null === pv || void 0 === pv ? void 0 : pv.config) && void 0 !== dv ? dv : {};
      return wv.origin = "firebase", wv.update = !0, null != Wv && (wv.firebase_id = Wv), Sv("config", Tv.measurementId, wv), Vz && (Sv("set", Vz), xz(void 0)), Tv.measurementId
    }
    class qz {
      constructor(vv) {
        this.app = vv
      }
      _delete() {
        return delete Iz[this.app.options.appId], Promise.resolve()
      }
    }
    let Iz = {},
      Qz = [];
    const Zz = {};
    let Az, Lz, Hz = "dataLayer",
      Mz = "gtag",
      yz = !1;

    function Bz(vv) {
      if (yz) throw Gz.create("already-initialized");
      vv.dataLayerName && (Hz = vv.dataLayerName), vv.gtagName && (Mz = vv.gtagName)
    }

    function Jz(vv, zv, Pv) {
      ! function() {
        const vv = [];
        if ((0, ev.P)() && vv.push("This is a browser extension environment."), (0, ev.l)() || vv.push("Cookies are not available."), vv.length > 0) {
          const zv = vv.map(((vv, zv) => `(${zv+1}) ${vv}`)).join(" "),
            Pv = Gz.create("invalid-analytics-context", {
              errorInfo: zv
            });
          iz.warn(Pv.message)
        }
      }();
      const hv = vv.options.appId;
      if (!hv) throw Gz.create("no-app-id");
      if (!vv.options.apiKey) {
        if (!vv.options.measurementId) throw Gz.create("no-api-key");
        iz.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${vv.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Iz[hv]) throw Gz.create("already-exists", {
        id: hv
      });
      if (!yz) {
        ! function(vv) {
          let zv = [];
          Array.isArray(window[vv]) ? zv = window[vv] : window[vv] = zv
        }(Hz);
        const {
          wrappedGtag: vv,
          gtagCore: zv
        } = function(vv, zv, Pv, hv, Sv) {
          let ev = function() {
            for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
            window[hv].push(arguments)
          };
          return window[Sv] && "function" === typeof window[Sv] && (ev = window[Sv]), window[Sv] = Fz(ev, vv, zv, Pv), {
            gtagCore: ev,
            wrappedGtag: window[Sv]
          }
        }(Iz, Qz, Zz, Hz, Mz);
        Lz = vv, Az = zv, yz = !0
      }
      Iz[hv] = tz(vv, Qz, Zz, zv, Az, Hz, Pv);
      return new qz(vv)
    }

    function Ez() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hv.L)();
      vv = (0, ev.J)(vv);
      const zv = (0, hv.A)(vv, sz);
      return zv.isInitialized() ? zv.getImmediate() : oz(vv)
    }

    function oz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Pv = (0, hv.A)(vv, sz);
      if (Pv.isInitialized()) {
        const vv = Pv.getImmediate();
        if ((0, ev.w)(zv, Pv.getOptions())) return vv;
        throw Gz.create("already-initialized")
      }
      return Pv.initialize({
        options: zv
      })
    }
    async function bz() {
      if ((0, ev.P)()) return !1;
      if (!(0, ev.l)()) return !1;
      if (!(0, ev.X)()) return !1;
      try {
        return await (0, ev.ib)()
      } catch (vv) {
        return !1
      }
    }

    function rz(vv, zv, Pv) {
      vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv) {
        if (hv && hv.global) return vv("set", {
          screen_name: Pv
        }), Promise.resolve();
        vv("config", await zv, {
          update: !0,
          screen_name: Pv
        })
      }(Lz, Iz[vv.app.options.appId], zv, Pv).catch((vv => iz.error(vv)))
    }
    async function kz(vv) {
      return vv = (0, ev.J)(vv), async function(vv, zv) {
        const Pv = await zv;
        return new Promise(((zv, hv) => {
          vv("get", Pv, "client_id", (vv => {
            vv || hv(Gz.create("no-client-id")), zv(vv)
          }))
        }))
      }(Lz, Iz[vv.app.options.appId])
    }

    function Xz(vv, zv, Pv) {
      vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv) {
        if (hv && hv.global) return vv("set", {
          user_id: Pv
        }), Promise.resolve();
        vv("config", await zv, {
          update: !0,
          user_id: Pv
        })
      }(Lz, Iz[vv.app.options.appId], zv, Pv).catch((vv => iz.error(vv)))
    }

    function uz(vv, zv, Pv) {
      vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv) {
        if (hv && hv.global) {
          const zv = {};
          for (const vv of Object.keys(Pv)) zv[`user_properties.${vv}`] = Pv[vv];
          return vv("set", zv), Promise.resolve()
        }
        vv("config", await zv, {
          update: !0,
          user_properties: Pv
        })
      }(Lz, Iz[vv.app.options.appId], zv, Pv).catch((vv => iz.error(vv)))
    }

    function vP(vv, zv) {
      vv = (0, ev.J)(vv), async function(vv, zv) {
        const Pv = await vv;
        window[`ga-disable-${Pv}`] = !zv
      }(Iz[vv.app.options.appId], zv).catch((vv => iz.error(vv)))
    }

    function zP(vv) {
      Lz ? Lz("set", vv) : xz(vv)
    }

    function PP(vv, zv, Pv, hv) {
      vv = (0, ev.J)(vv), async function(vv, zv, Pv, hv, Sv) {
        if (Sv && Sv.global) vv("event", Pv, hv);
        else {
          const Sv = await zv;
          vv("event", Pv, Object.assign(Object.assign({}, hv), {
            send_to: Sv
          }))
        }
      }(Lz, Iz[vv.app.options.appId], zv, Pv, hv).catch((vv => iz.error(vv)))
    }

    function hP(vv) {
      Lz ? Lz("consent", "update", vv) : Rz(vv)
    }
    const SP = "@firebase/analytics",
      eP = "0.10.0";
    (0, hv.D)(new gv.h(sz, ((vv, zv) => {
      let {
        options: Pv
      } = zv;
      return Jz(vv.getProvider("app").getImmediate(), vv.getProvider("installations-internal").getImmediate(), Pv)
    }), "PUBLIC")), (0, hv.D)(new gv.h("analytics-internal", (function(vv) {
      try {
        const zv = vv.getProvider(sz).getImmediate();
        return {
          logEvent: (vv, Pv, hv) => PP(zv, vv, Pv, hv)
        }
      } catch (zv) {
        throw Gz.create("interop-component-reg-failed", {
          reason: zv
        })
      }
    }), "PRIVATE")), (0, hv.S)(SP, eP), (0, hv.S)(SP, eP, "esm2017")
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);