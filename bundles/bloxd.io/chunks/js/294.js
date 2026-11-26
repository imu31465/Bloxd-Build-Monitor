/*! For license information please see pxmq3aq.294.2dbd7167.chunk.js.LICENSE.txt */
export const id = 294;
export const ids = [294];
export const modules = {
  41810: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      getAnalytics: () => He,
      getGoogleAnalyticsClientId: () => Ie,
      initializeAnalytics: () => ue,
      isSupported: () => se,
      logEvent: () => xx,
      setAnalyticsCollectionEnabled: () => Vx,
      setConsent: () => Jx,
      setCurrentScreen: () => Se,
      setDefaultEventParameters: () => ex,
      setUserId: () => de,
      setUserProperties: () => Oe,
      settings: () => me
    });
    var JV = xV(41783),
      YV = xV(41802),
      UV = xV(41794),
      yV = xV(41787);
    let pV, QV;
    const nV = new WeakMap,
      wV = new WeakMap,
      ZV = new WeakMap,
      vV = new WeakMap,
      rV = new WeakMap;
    let kV = {
      get(VV, eV, xV) {
        if (VV instanceof IDBTransaction) {
          if ("done" === eV) return wV.get(VV);
          if ("objectStoreNames" === eV) return VV.objectStoreNames || ZV.get(VV);
          if ("store" === eV) return xV.objectStoreNames[1] ? void 0 : xV.objectStore(xV.objectStoreNames[0])
        }
        return BV(VV[eV])
      },
      set: (VV, eV, xV) => (VV[eV] = xV, !0),
      has: (VV, eV) => VV instanceof IDBTransaction && ("done" === eV || "store" === eV) || eV in VV
    };

    function bV(VV) {
      return VV !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (QV || (QV = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(VV) ? function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return VV.apply(jV(this), xV), BV(nV.get(this))
      } : function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return BV(VV.apply(jV(this), xV))
      } : function(eV) {
        for (var xV = arguments.length, JV = new Array(xV > 1 ? xV - 1 : 0), YV = 1; YV < xV; YV++) JV[YV - 1] = arguments[YV];
        const UV = VV.call(jV(this), eV, ...JV);
        return ZV.set(UV, eV.sort ? eV.sort() : [eV]), BV(UV)
      }
    }

    function EV(VV) {
      return "function" === typeof VV ? bV(VV) : (VV instanceof IDBTransaction && function(VV) {
        if (wV.has(VV)) return;
        const eV = new Promise(((eV, xV) => {
          const JV = () => {
              VV.removeEventListener("complete", YV), VV.removeEventListener("error", UV), VV.removeEventListener("abort", UV)
            },
            YV = () => {
              eV(), JV()
            },
            UV = () => {
              xV(VV.error || new DOMException("AbortError", "AbortError")), JV()
            };
          VV.addEventListener("complete", YV), VV.addEventListener("error", UV), VV.addEventListener("abort", UV)
        }));
        wV.set(VV, eV)
      }(VV), eV = VV, (pV || (pV = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((VV => eV instanceof VV)) ? new Proxy(VV, kV) : VV);
      var eV
    }

    function BV(VV) {
      if (VV instanceof IDBRequest) return function(VV) {
        const eV = new Promise(((eV, xV) => {
          const JV = () => {
              VV.removeEventListener("success", YV), VV.removeEventListener("error", UV)
            },
            YV = () => {
              eV(BV(VV.result)), JV()
            },
            UV = () => {
              xV(VV.error), JV()
            };
          VV.addEventListener("success", YV), VV.addEventListener("error", UV)
        }));
        return eV.then((eV => {
          eV instanceof IDBCursor && nV.set(eV, VV)
        })).catch((() => {})), rV.set(eV, VV), eV
      }(VV);
      if (vV.has(VV)) return vV.get(VV);
      const eV = EV(VV);
      return eV !== VV && (vV.set(VV, eV), rV.set(eV, VV)), eV
    }
    const jV = VV => rV.get(VV);
    const qV = ["get", "getKey", "getAll", "getAllKeys", "count"],
      tV = ["put", "add", "delete", "clear"],
      FV = new Map;

    function TV(VV, eV) {
      if (!(VV instanceof IDBDatabase) || eV in VV || "string" !== typeof eV) return;
      if (FV.get(eV)) return FV.get(eV);
      const xV = eV.replace(/FromIndex$/, ""),
        JV = eV !== xV,
        YV = tV.includes(xV);
      if (!(xV in (JV ? IDBIndex : IDBObjectStore).prototype) || !YV && !qV.includes(xV)) return;
      const UV = async function(VV) {
        const eV = this.transaction(VV, YV ? "readwrite" : "readonly");
        let UV = eV.store;
        for (var yV = arguments.length, pV = new Array(yV > 1 ? yV - 1 : 0), QV = 1; QV < yV; QV++) pV[QV - 1] = arguments[QV];
        return JV && (UV = UV.index(pV.shift())), (await Promise.all([UV[xV](...pV), YV && eV.done]))[0]
      };
      return FV.set(eV, UV), UV
    }
    kV = (VV => ({
      ...VV,
      get: (eV, xV, JV) => TV(eV, xV) || VV.get(eV, xV, JV),
      has: (eV, xV) => !!TV(eV, xV) || VV.has(eV, xV)
    }))(kV);
    const PV = "@firebase/installations",
      AV = "0.6.4",
      NV = 1e4,
      XV = `w:${AV}`,
      MV = "FIS_v2",
      zV = 36e5,
      GV = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      WV = new UV.g("installations", "Installations", GV);

    function RV(VV) {
      return VV instanceof UV.j && VV.code.includes("request-failed")
    }

    function gV(VV) {
      let {
        projectId: eV
      } = VV;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${eV}/installations`
    }

    function DV(VV) {
      return {
        token: VV.token,
        requestStatus: 2,
        expiresIn: (eV = VV.expiresIn, Number(eV.replace("s", "000"))),
        creationTime: Date.now()
      };
      var eV
    }
    async function iV(VV, eV) {
      const xV = (await eV.json()).error;
      return WV.create("request-failed", {
        requestName: VV,
        serverCode: xV.code,
        serverMessage: xV.message,
        serverStatus: xV.status
      })
    }

    function CV(VV) {
      let {
        apiKey: eV
      } = VV;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": eV
      })
    }

    function aV(VV, eV) {
      let {
        refreshToken: xV
      } = eV;
      const JV = CV(VV);
      return JV.append("Authorization", function(VV) {
        return `${MV} ${VV}`
      }(xV)), JV
    }
    async function oV(VV) {
      const eV = await VV();
      return eV.status >= 500 && eV.status < 600 ? VV() : eV
    }

    function cV(VV) {
      return new Promise((eV => {
        setTimeout(eV, VV)
      }))
    }
    const hV = /^[cdef][\w-]{21}$/;

    function lV() {
      try {
        const VV = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(VV), VV[0] = 112 + VV[0] % 16;
        const eV = function(VV) {
          const eV = (xV = VV, btoa(String.fromCharCode(...xV)).replace(/\+/g, "-").replace(/\//g, "_"));
          var xV;
          return eV.substr(0, 22)
        }(VV);
        return hV.test(eV) ? eV : ""
      } catch (VV) {
        return ""
      }
    }

    function LV(VV) {
      return `${VV.appName}!${VV.appId}`
    }
    const fV = new Map;

    function mV(VV, eV) {
      const xV = LV(VV);
      KV(xV, eV),
        function(VV, eV) {
          const xV = uV();
          xV && xV.postMessage({
            key: VV,
            fid: eV
          });
          sV()
        }(xV, eV)
    }

    function KV(VV, eV) {
      const xV = fV.get(VV);
      if (xV)
        for (const JV of xV) JV(eV)
    }
    let HV = null;

    function uV() {
      return !HV && "BroadcastChannel" in self && (HV = new BroadcastChannel("[Firebase] FID Change"), HV.onmessage = VV => {
        KV(VV.data.key, VV.data.fid)
      }), HV
    }

    function sV() {
      0 === fV.size && HV && (HV.close(), HV = null)
    }
    const SV = "firebase-installations-store";
    let IV = null;

    function dV() {
      return IV || (IV = function(VV, eV) {
        let {
          blocked: xV,
          upgrade: JV,
          blocking: YV,
          terminated: UV
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const yV = indexedDB.open(VV, eV),
          pV = BV(yV);
        return JV && yV.addEventListener("upgradeneeded", (VV => {
          JV(BV(yV.result), VV.oldVersion, VV.newVersion, BV(yV.transaction))
        })), xV && yV.addEventListener("blocked", (() => xV())), pV.then((VV => {
          UV && VV.addEventListener("close", (() => UV())), YV && VV.addEventListener("versionchange", (() => YV()))
        })).catch((() => {})), pV
      }("firebase-installations-database", 1, {
        upgrade: (VV, eV) => {
          if (0 === eV) VV.createObjectStore(SV)
        }
      })), IV
    }
    async function OV(VV, eV) {
      const xV = LV(VV),
        JV = (await dV()).transaction(SV, "readwrite"),
        YV = JV.objectStore(SV),
        UV = await YV.get(xV);
      return await YV.put(eV, xV), await JV.done, UV && UV.fid === eV.fid || mV(VV, eV.fid), eV
    }
    async function Ve(VV) {
      const eV = LV(VV),
        xV = (await dV()).transaction(SV, "readwrite");
      await xV.objectStore(SV).delete(eV), await xV.done
    }
    async function ee(VV, eV) {
      const xV = LV(VV),
        JV = (await dV()).transaction(SV, "readwrite"),
        YV = JV.objectStore(SV),
        UV = await YV.get(xV),
        yV = eV(UV);
      return void 0 === yV ? await YV.delete(xV) : await YV.put(yV, xV), await JV.done, !yV || UV && UV.fid === yV.fid || mV(VV, yV.fid), yV
    }
    async function xe(VV) {
      let eV;
      const xV = await ee(VV.appConfig, (xV => {
        const JV = function(VV) {
            const eV = VV || {
              fid: lV(),
              registrationStatus: 0
            };
            return Ue(eV)
          }(xV),
          YV = function(VV, eV) {
            if (0 === eV.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: eV,
                  registrationPromise: Promise.reject(WV.create("app-offline"))
                }
              }
              const xV = {
                  fid: eV.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                JV = async function(VV, eV) {
                  try {
                    const xV = await async function(VV, eV) {
                      let {
                        appConfig: xV,
                        heartbeatServiceProvider: JV
                      } = VV, {
                        fid: YV
                      } = eV;
                      const UV = gV(xV),
                        yV = CV(xV),
                        pV = JV.getImmediate({
                          optional: !0
                        });
                      if (pV) {
                        const VV = await pV.getHeartbeatsHeader();
                        VV && yV.append("x-firebase-client", VV)
                      }
                      const QV = {
                          fid: YV,
                          authVersion: MV,
                          appId: xV.appId,
                          sdkVersion: XV
                        },
                        nV = {
                          method: "POST",
                          headers: yV,
                          body: JSON.stringify(QV)
                        },
                        wV = await oV((() => fetch(UV, nV)));
                      if (wV.ok) {
                        const VV = await wV.json();
                        return {
                          fid: VV.fid || YV,
                          registrationStatus: 2,
                          refreshToken: VV.refreshToken,
                          authToken: DV(VV.authToken)
                        }
                      }
                      throw await iV("Create Installation", wV)
                    }(VV, eV);
                    return OV(VV.appConfig, xV)
                  } catch (xV) {
                    throw RV(xV) && 409 === xV.customData.serverCode ? await Ve(VV.appConfig) : await OV(VV.appConfig, {
                      fid: eV.fid,
                      registrationStatus: 0
                    }), xV
                  }
                }(VV, xV);
              return {
                installationEntry: xV,
                registrationPromise: JV
              }
            }
            return 1 === eV.registrationStatus ? {
              installationEntry: eV,
              registrationPromise: Je(VV)
            } : {
              installationEntry: eV
            }
          }(VV, JV);
        return eV = YV.registrationPromise, YV.installationEntry
      }));
      return "" === xV.fid ? {
        installationEntry: await eV
      } : {
        installationEntry: xV,
        registrationPromise: eV
      }
    }
    async function Je(VV) {
      let eV = await Ye(VV.appConfig);
      for (; 1 === eV.registrationStatus;) await cV(100), eV = await Ye(VV.appConfig);
      if (0 === eV.registrationStatus) {
        const {
          installationEntry: eV,
          registrationPromise: xV
        } = await xe(VV);
        return xV || eV
      }
      return eV
    }

    function Ye(VV) {
      return ee(VV, (VV => {
        if (!VV) throw WV.create("installation-not-found");
        return Ue(VV)
      }))
    }

    function Ue(VV) {
      return 1 === (eV = VV).registrationStatus && eV.registrationTime + NV < Date.now() ? {
        fid: VV.fid,
        registrationStatus: 0
      } : VV;
      var eV
    }
    async function ye(VV, eV) {
      let {
        appConfig: xV,
        heartbeatServiceProvider: JV
      } = VV;
      const YV = function(VV, eV) {
          let {
            fid: xV
          } = eV;
          return `${gV(VV)}/${xV}/authTokens:generate`
        }(xV, eV),
        UV = aV(xV, eV),
        yV = JV.getImmediate({
          optional: !0
        });
      if (yV) {
        const VV = await yV.getHeartbeatsHeader();
        VV && UV.append("x-firebase-client", VV)
      }
      const pV = {
          installation: {
            sdkVersion: XV,
            appId: xV.appId
          }
        },
        QV = {
          method: "POST",
          headers: UV,
          body: JSON.stringify(pV)
        },
        nV = await oV((() => fetch(YV, QV)));
      if (nV.ok) {
        return DV(await nV.json())
      }
      throw await iV("Generate Auth Token", nV)
    }
    async function pe(VV) {
      let eV, xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const JV = await ee(VV.appConfig, (JV => {
        if (!ne(JV)) throw WV.create("not-registered");
        const YV = JV.authToken;
        if (!xV && function(VV) {
            return 2 === VV.requestStatus && ! function(VV) {
              const eV = Date.now();
              return eV < VV.creationTime || VV.creationTime + VV.expiresIn < eV + zV
            }(VV)
          }(YV)) return JV;
        if (1 === YV.requestStatus) return eV = async function(VV, eV) {
          let xV = await Qe(VV.appConfig);
          for (; 1 === xV.authToken.requestStatus;) await cV(100), xV = await Qe(VV.appConfig);
          const JV = xV.authToken;
          return 0 === JV.requestStatus ? pe(VV, eV) : JV
        }(VV, xV), JV;
        {
          if (!navigator.onLine) throw WV.create("app-offline");
          const xV = function(VV) {
            const eV = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, VV), {
              authToken: eV
            })
          }(JV);
          return eV = async function(VV, eV) {
            try {
              const xV = await ye(VV, eV),
                JV = Object.assign(Object.assign({}, eV), {
                  authToken: xV
                });
              return await OV(VV.appConfig, JV), xV
            } catch (xV) {
              if (!RV(xV) || 401 !== xV.customData.serverCode && 404 !== xV.customData.serverCode) {
                const xV = Object.assign(Object.assign({}, eV), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await OV(VV.appConfig, xV)
              } else await Ve(VV.appConfig);
              throw xV
            }
          }(VV, xV), xV
        }
      }));
      return eV ? await eV : JV.authToken
    }

    function Qe(VV) {
      return ee(VV, (VV => {
        if (!ne(VV)) throw WV.create("not-registered");
        const eV = VV.authToken;
        return 1 === (xV = eV).requestStatus && xV.requestTime + NV < Date.now() ? Object.assign(Object.assign({}, VV), {
          authToken: {
            requestStatus: 0
          }
        }) : VV;
        var xV
      }))
    }

    function ne(VV) {
      return void 0 !== VV && 2 === VV.registrationStatus
    }
    async function we(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const xV = VV;
      await async function(VV) {
        const {
          registrationPromise: eV
        } = await xe(VV);
        eV && await eV
      }(xV);
      return (await pe(xV, eV)).token
    }

    function Ze(VV) {
      return WV.create("missing-app-config-values", {
        valueName: VV
      })
    }
    const ve = "installations",
      re = VV => {
        const eV = VV.getProvider("app").getImmediate(),
          xV = function(VV) {
            if (!VV || !VV.options) throw Ze("App Configuration");
            if (!VV.name) throw Ze("App Name");
            const eV = ["projectId", "apiKey", "appId"];
            for (const xV of eV)
              if (!VV.options[xV]) throw Ze(xV);
            return {
              appName: VV.name,
              projectId: VV.options.projectId,
              apiKey: VV.options.apiKey,
              appId: VV.options.appId
            }
          }(eV);
        return {
          app: eV,
          appConfig: xV,
          heartbeatServiceProvider: (0, JV.r)(eV, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      ke = VV => {
        const eV = VV.getProvider("app").getImmediate(),
          xV = (0, JV.r)(eV, ve).getImmediate();
        return {
          getId: () => async function(VV) {
            const eV = VV,
              {
                installationEntry: xV,
                registrationPromise: JV
              } = await xe(eV);
            return JV ? JV.catch(console.error) : pe(eV).catch(console.error), xV.fid
          }(xV),
          getToken: VV => we(xV, VV)
        }
      };
    (0, JV.v)(new yV.e(ve, re, "PUBLIC")), (0, JV.v)(new yV.e("installations-internal", ke, "PRIVATE")), (0, JV.O)(PV, AV), (0, JV.O)(PV, AV, "esm2017");
    const be = "analytics",
      Ee = "https://www.googletagmanager.com/gtag/js",
      Be = new YV.g("@firebase/analytics"),
      je = {
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
      qe = new UV.g("analytics", "Analytics", je);

    function te(VV) {
      if (!VV.startsWith(Ee)) {
        const eV = qe.create("invalid-gtag-resource", {
          gtagURL: VV
        });
        return Be.warn(eV.message), ""
      }
      return VV
    }

    function Fe(VV) {
      return Promise.all(VV.map((VV => VV.catch((VV => VV)))))
    }

    function Te(VV, eV) {
      const xV = function(VV, eV) {
          let xV;
          return window.trustedTypes && (xV = window.trustedTypes.createPolicy(VV, eV)), xV
        }("firebase-js-sdk-policy", {
          createScriptURL: te
        }),
        JV = document.createElement("script"),
        YV = `${Ee}?l=${VV}&id=${eV}`;
      JV.src = xV ? null === xV || void 0 === xV ? void 0 : xV.createScriptURL(YV) : YV, JV.async = !0, document.head.appendChild(JV)
    }

    function Pe(VV, eV, xV, JV) {
      return async function(YV) {
        try {
          for (var UV = arguments.length, yV = new Array(UV > 1 ? UV - 1 : 0), pV = 1; pV < UV; pV++) yV[pV - 1] = arguments[pV];
          if ("event" === YV) {
            const [JV, YV] = yV;
            await async function(VV, eV, xV, JV, YV) {
              try {
                let UV = [];
                if (YV && YV.send_to) {
                  let VV = YV.send_to;
                  Array.isArray(VV) || (VV = [VV]);
                  const JV = await Fe(xV);
                  for (const xV of VV) {
                    const VV = JV.find((VV => VV.measurementId === xV)),
                      YV = VV && eV[VV.appId];
                    if (!YV) {
                      UV = [];
                      break
                    }
                    UV.push(YV)
                  }
                }
                0 === UV.length && (UV = Object.values(eV)), await Promise.all(UV), VV("event", JV, YV || {})
              } catch (UV) {
                Be.error(UV)
              }
            }(VV, eV, xV, JV, YV)
          } else if ("config" === YV) {
            const [YV, UV] = yV;
            await async function(VV, eV, xV, JV, YV, UV) {
              const yV = JV[YV];
              try {
                if (yV) await eV[yV];
                else {
                  const VV = (await Fe(xV)).find((VV => VV.measurementId === YV));
                  VV && await eV[VV.appId]
                }
              } catch (pV) {
                Be.error(pV)
              }
              VV("config", YV, UV)
            }(VV, eV, xV, JV, YV, UV)
          } else if ("consent" === YV) {
            const [eV] = yV;
            VV("consent", "update", eV)
          } else if ("get" === YV) {
            const [eV, xV, JV] = yV;
            VV("get", eV, xV, JV)
          } else if ("set" === YV) {
            const [eV] = yV;
            VV("set", eV)
          } else VV(YV, ...yV)
        } catch (QV) {
          Be.error(QV)
        }
      }
    }
    const Ae = new class {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = VV, this.intervalMillis = eV
      }
      getThrottleMetadata(VV) {
        return this.throttleMetadata[VV]
      }
      setThrottleMetadata(VV, eV) {
        this.throttleMetadata[VV] = eV
      }
      deleteThrottleMetadata(VV) {
        delete this.throttleMetadata[VV]
      }
    };

    function Ne(VV) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": VV
      })
    }
    async function Xe(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ae,
        xV = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: JV,
        apiKey: YV,
        measurementId: UV
      } = VV.options;
      if (!JV) throw qe.create("no-app-id");
      if (!YV) {
        if (UV) return {
          measurementId: UV,
          appId: JV
        };
        throw qe.create("no-api-key")
      }
      const yV = eV.getThrottleMetadata(JV) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        pV = new ze;
      return setTimeout((async () => {
        pV.abort()
      }), void 0 !== xV ? xV : 6e4), Me({
        appId: JV,
        apiKey: YV,
        measurementId: UV
      }, yV, pV, eV)
    }
    async function Me(VV, eV, xV) {
      let {
        throttleEndTimeMillis: JV,
        backoffCount: YV
      } = eV, yV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ae;
      var pV;
      const {
        appId: QV,
        measurementId: nV
      } = VV;
      try {
        await
        function(VV, eV) {
          return new Promise(((xV, JV) => {
            const YV = Math.max(eV - Date.now(), 0),
              UV = setTimeout(xV, YV);
            VV.addEventListener((() => {
              clearTimeout(UV), JV(qe.create("fetch-throttle", {
                throttleEndTimeMillis: eV
              }))
            }))
          }))
        }(xV, JV)
      } catch (wV) {
        if (nV) return Be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${nV} provided in the "measurementId" field in the local Firebase config. [${null===wV||void 0===wV?void 0:wV.message}]`), {
          appId: QV,
          measurementId: nV
        };
        throw wV
      }
      try {
        const eV = await async function(VV) {
          var eV;
          const {
            appId: xV,
            apiKey: JV
          } = VV, YV = {
            method: "GET",
            headers: Ne(JV)
          }, UV = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", xV), yV = await fetch(UV, YV);
          if (200 !== yV.status && 304 !== yV.status) {
            let VV = "";
            try {
              const xV = await yV.json();
              (null === (eV = xV.error) || void 0 === eV ? void 0 : eV.message) && (VV = xV.error.message)
            } catch (pV) {}
            throw qe.create("config-fetch-failed", {
              httpStatus: yV.status,
              responseMessage: VV
            })
          }
          return yV.json()
        }(VV);
        return yV.deleteThrottleMetadata(QV), eV
      } catch (wV) {
        const eV = wV;
        if (! function(VV) {
            if (!(VV instanceof UV.j) || !VV.customData) return !1;
            const eV = Number(VV.customData.httpStatus);
            return 429 === eV || 500 === eV || 503 === eV || 504 === eV
          }(eV)) {
          if (yV.deleteThrottleMetadata(QV), nV) return Be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${nV} provided in the "measurementId" field in the local Firebase config. [${null===eV||void 0===eV?void 0:eV.message}]`), {
            appId: QV,
            measurementId: nV
          };
          throw wV
        }
        const JV = 503 === Number(null === (pV = null === eV || void 0 === eV ? void 0 : eV.customData) || void 0 === pV ? void 0 : pV.httpStatus) ? (0, UV.u)(YV, yV.intervalMillis, 30) : (0, UV.u)(YV, yV.intervalMillis),
          ZV = {
            throttleEndTimeMillis: Date.now() + JV,
            backoffCount: YV + 1
          };
        return yV.setThrottleMetadata(QV, ZV), Be.debug(`Calling attemptFetch again in ${JV} millis`), Me(VV, ZV, xV, yV)
      }
    }
    class ze {
      constructor() {
        this.listeners = []
      }
      addEventListener(VV) {
        this.listeners.push(VV)
      }
      abort() {
        this.listeners.forEach((VV => VV()))
      }
    }
    let Ge, We;

    function Re(VV) {
      We = VV
    }

    function ge(VV) {
      Ge = VV
    }
    async function De(VV, eV, xV, JV, YV, yV, pV) {
      var QV;
      const nV = Xe(VV);
      nV.then((eV => {
        xV[eV.measurementId] = eV.appId, VV.options.measurementId && eV.measurementId !== VV.options.measurementId && Be.warn(`The measurement ID in the local Firebase config (${VV.options.measurementId}) does not match the measurement ID fetched from the server (${eV.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((VV => Be.error(VV))), eV.push(nV);
      const wV = async function() {
        if (!(0, UV.Z)()) return Be.warn(qe.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, UV.jb)()
        } catch (VV) {
          return Be.warn(qe.create("indexeddb-unavailable", {
            errorInfo: null === VV || void 0 === VV ? void 0 : VV.toString()
          }).message), !1
        }
        return !0
      }().then((VV => VV ? JV.getId() : void 0)), [ZV, vV] = await Promise.all([nV, wV]);
      (function(VV) {
        const eV = window.document.getElementsByTagName("script");
        for (const xV of Object.values(eV))
          if (xV.src && xV.src.includes(Ee) && xV.src.includes(VV)) return xV;
        return null
      })(yV) || Te(yV, ZV.measurementId), We && (YV("consent", "default", We), Re(void 0)), YV("js", new Date);
      const rV = null !== (QV = null === pV || void 0 === pV ? void 0 : pV.config) && void 0 !== QV ? QV : {};
      return rV.origin = "firebase", rV.update = !0, null != vV && (rV.firebase_id = vV), YV("config", ZV.measurementId, rV), Ge && (YV("set", Ge), ge(void 0)), ZV.measurementId
    }
    class ie {
      constructor(VV) {
        this.app = VV
      }
      _delete() {
        return delete Ce[this.app.options.appId], Promise.resolve()
      }
    }
    let Ce = {},
      ae = [];
    const oe = {};
    let ce, he, le = "dataLayer",
      Le = "gtag",
      fe = !1;

    function me(VV) {
      if (fe) throw qe.create("already-initialized");
      VV.dataLayerName && (le = VV.dataLayerName), VV.gtagName && (Le = VV.gtagName)
    }

    function Ke(VV, eV, xV) {
      ! function() {
        const VV = [];
        if ((0, UV.Q)() && VV.push("This is a browser extension environment."), (0, UV.m)() || VV.push("Cookies are not available."), VV.length > 0) {
          const eV = VV.map(((VV, eV) => `(${eV+1}) ${VV}`)).join(" "),
            xV = qe.create("invalid-analytics-context", {
              errorInfo: eV
            });
          Be.warn(xV.message)
        }
      }();
      const JV = VV.options.appId;
      if (!JV) throw qe.create("no-app-id");
      if (!VV.options.apiKey) {
        if (!VV.options.measurementId) throw qe.create("no-api-key");
        Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${VV.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Ce[JV]) throw qe.create("already-exists", {
        id: JV
      });
      if (!fe) {
        ! function(VV) {
          let eV = [];
          Array.isArray(window[VV]) ? eV = window[VV] : window[VV] = eV
        }(le);
        const {
          wrappedGtag: VV,
          gtagCore: eV
        } = function(VV, eV, xV, JV, YV) {
          let UV = function() {
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            window[JV].push(arguments)
          };
          return window[YV] && "function" === typeof window[YV] && (UV = window[YV]), window[YV] = Pe(UV, VV, eV, xV), {
            gtagCore: UV,
            wrappedGtag: window[YV]
          }
        }(Ce, ae, oe, le, Le);
        he = VV, ce = eV, fe = !0
      }
      Ce[JV] = De(VV, ae, oe, eV, ce, le, xV);
      return new ie(VV)
    }

    function He() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.J)();
      VV = (0, UV.L)(VV);
      const eV = (0, JV.r)(VV, be);
      return eV.isInitialized() ? eV.getImmediate() : ue(VV)
    }

    function ue(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const xV = (0, JV.r)(VV, be);
      if (xV.isInitialized()) {
        const VV = xV.getImmediate();
        if ((0, UV.x)(eV, xV.getOptions())) return VV;
        throw qe.create("already-initialized")
      }
      return xV.initialize({
        options: eV
      })
    }
    async function se() {
      if ((0, UV.Q)()) return !1;
      if (!(0, UV.m)()) return !1;
      if (!(0, UV.Z)()) return !1;
      try {
        return await (0, UV.jb)()
      } catch (VV) {
        return !1
      }
    }

    function Se(VV, eV, xV) {
      VV = (0, UV.L)(VV), async function(VV, eV, xV, JV) {
        if (JV && JV.global) return VV("set", {
          screen_name: xV
        }), Promise.resolve();
        VV("config", await eV, {
          update: !0,
          screen_name: xV
        })
      }(he, Ce[VV.app.options.appId], eV, xV).catch((VV => Be.error(VV)))
    }
    async function Ie(VV) {
      return VV = (0, UV.L)(VV), async function(VV, eV) {
        const xV = await eV;
        return new Promise(((eV, JV) => {
          VV("get", xV, "client_id", (VV => {
            VV || JV(qe.create("no-client-id")), eV(VV)
          }))
        }))
      }(he, Ce[VV.app.options.appId])
    }

    function de(VV, eV, xV) {
      VV = (0, UV.L)(VV), async function(VV, eV, xV, JV) {
        if (JV && JV.global) return VV("set", {
          user_id: xV
        }), Promise.resolve();
        VV("config", await eV, {
          update: !0,
          user_id: xV
        })
      }(he, Ce[VV.app.options.appId], eV, xV).catch((VV => Be.error(VV)))
    }

    function Oe(VV, eV, xV) {
      VV = (0, UV.L)(VV), async function(VV, eV, xV, JV) {
        if (JV && JV.global) {
          const eV = {};
          for (const VV of Object.keys(xV)) eV[`user_properties.${VV}`] = xV[VV];
          return VV("set", eV), Promise.resolve()
        }
        VV("config", await eV, {
          update: !0,
          user_properties: xV
        })
      }(he, Ce[VV.app.options.appId], eV, xV).catch((VV => Be.error(VV)))
    }

    function Vx(VV, eV) {
      VV = (0, UV.L)(VV), async function(VV, eV) {
        const xV = await VV;
        window[`ga-disable-${xV}`] = !eV
      }(Ce[VV.app.options.appId], eV).catch((VV => Be.error(VV)))
    }

    function ex(VV) {
      he ? he("set", VV) : ge(VV)
    }

    function xx(VV, eV, xV, JV) {
      VV = (0, UV.L)(VV), async function(VV, eV, xV, JV, YV) {
        if (YV && YV.global) VV("event", xV, JV);
        else {
          const YV = await eV;
          VV("event", xV, Object.assign(Object.assign({}, JV), {
            send_to: YV
          }))
        }
      }(he, Ce[VV.app.options.appId], eV, xV, JV).catch((VV => Be.error(VV)))
    }

    function Jx(VV) {
      he ? he("consent", "update", VV) : Re(VV)
    }
    const Yx = "@firebase/analytics",
      Ux = "0.10.0";
    (0, JV.v)(new yV.e(be, ((VV, eV) => {
      let {
        options: xV
      } = eV;
      return Ke(VV.getProvider("app").getImmediate(), VV.getProvider("installations-internal").getImmediate(), xV)
    }), "PUBLIC")), (0, JV.v)(new yV.e("analytics-internal", (function(VV) {
      try {
        const eV = VV.getProvider(be).getImmediate();
        return {
          logEvent: (VV, xV, JV) => xx(eV, VV, xV, JV)
        }
      } catch (eV) {
        throw qe.create("interop-component-reg-failed", {
          reason: eV
        })
      }
    }), "PRIVATE")), (0, JV.O)(Yx, Ux), (0, JV.O)(Yx, Ux, "esm2017")
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);