/*! For license information please see w4ddu.267.371495bf.chunk.js.LICENSE.txt */
export const id = 267;
export const ids = [267];
export const modules = {
  40357: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      getAnalytics: () => yz,
      getGoogleAnalyticsClientId: () => Oz,
      initializeAnalytics: () => Lz,
      isSupported: () => Uz,
      logEvent: () => ZZ,
      setAnalyticsCollectionEnabled: () => CZ,
      setConsent: () => QZ,
      setCurrentScreen: () => Bz,
      setDefaultEventParameters: () => zZ,
      setUserId: () => kz,
      setUserProperties: () => Vz,
      settings: () => Dz
    });
    var QC = ZC(40329),
      wC = ZC(40349),
      bC = ZC(40340),
      nC = ZC(40336);
    let fC, oC;
    const qC = new WeakMap,
      FC = new WeakMap,
      WC = new WeakMap,
      NC = new WeakMap,
      MC = new WeakMap;
    let gC = {
      get(CC, zC, ZC) {
        if (CC instanceof IDBTransaction) {
          if ("done" === zC) return FC.get(CC);
          if ("objectStoreNames" === zC) return CC.objectStoreNames || WC.get(CC);
          if ("store" === zC) return ZC.objectStoreNames[1] ? void 0 : ZC.objectStore(ZC.objectStoreNames[0])
        }
        return PC(CC[zC])
      },
      set: (CC, zC, ZC) => (CC[zC] = ZC, !0),
      has: (CC, zC) => CC instanceof IDBTransaction && ("done" === zC || "store" === zC) || zC in CC
    };

    function SC(CC) {
      return CC !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (oC || (oC = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(CC) ? function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return CC.apply(GC(this), ZC), PC(qC.get(this))
      } : function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return PC(CC.apply(GC(this), ZC))
      } : function(zC) {
        for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
        const bC = CC.call(GC(this), zC, ...QC);
        return WC.set(bC, zC.sort ? zC.sort() : [zC]), PC(bC)
      }
    }

    function pC(CC) {
      return "function" === typeof CC ? SC(CC) : (CC instanceof IDBTransaction && function(CC) {
        if (FC.has(CC)) return;
        const zC = new Promise(((zC, ZC) => {
          const QC = () => {
              CC.removeEventListener("complete", wC), CC.removeEventListener("error", bC), CC.removeEventListener("abort", bC)
            },
            wC = () => {
              zC(), QC()
            },
            bC = () => {
              ZC(CC.error || new DOMException("AbortError", "AbortError")), QC()
            };
          CC.addEventListener("complete", wC), CC.addEventListener("error", bC), CC.addEventListener("abort", bC)
        }));
        FC.set(CC, zC)
      }(CC), zC = CC, (fC || (fC = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((CC => zC instanceof CC)) ? new Proxy(CC, gC) : CC);
      var zC
    }

    function PC(CC) {
      if (CC instanceof IDBRequest) return function(CC) {
        const zC = new Promise(((zC, ZC) => {
          const QC = () => {
              CC.removeEventListener("success", wC), CC.removeEventListener("error", bC)
            },
            wC = () => {
              zC(PC(CC.result)), QC()
            },
            bC = () => {
              ZC(CC.error), QC()
            };
          CC.addEventListener("success", wC), CC.addEventListener("error", bC)
        }));
        return zC.then((zC => {
          zC instanceof IDBCursor && qC.set(zC, CC)
        })).catch((() => {})), MC.set(zC, CC), zC
      }(CC);
      if (NC.has(CC)) return NC.get(CC);
      const zC = pC(CC);
      return zC !== CC && (NC.set(CC, zC), MC.set(zC, CC)), zC
    }
    const GC = CC => MC.get(CC);
    const RC = ["get", "getKey", "getAll", "getAllKeys", "count"],
      AC = ["put", "add", "delete", "clear"],
      xC = new Map;

    function JC(CC, zC) {
      if (!(CC instanceof IDBDatabase) || zC in CC || "string" !== typeof zC) return;
      if (xC.get(zC)) return xC.get(zC);
      const ZC = zC.replace(/FromIndex$/, ""),
        QC = zC !== ZC,
        wC = AC.includes(ZC);
      if (!(ZC in (QC ? IDBIndex : IDBObjectStore).prototype) || !wC && !RC.includes(ZC)) return;
      const bC = async function(CC) {
        const zC = this.transaction(CC, wC ? "readwrite" : "readonly");
        let bC = zC.store;
        for (var nC = arguments.length, fC = new Array(nC > 1 ? nC - 1 : 0), oC = 1; oC < nC; oC++) fC[oC - 1] = arguments[oC];
        return QC && (bC = bC.index(fC.shift())), (await Promise.all([bC[ZC](...fC), wC && zC.done]))[0]
      };
      return xC.set(zC, bC), bC
    }
    gC = (CC => ({
      ...CC,
      get: (zC, ZC, QC) => JC(zC, ZC) || CC.get(zC, ZC, QC),
      has: (zC, ZC) => !!JC(zC, ZC) || CC.has(zC, ZC)
    }))(gC);
    const IC = "@firebase/installations",
      iC = "0.6.4",
      vC = 1e4,
      eC = `w:${iC}`,
      hC = "FIS_v2",
      KC = 36e5,
      YC = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      dC = new bC.g("installations", "Installations", YC);

    function mC(CC) {
      return CC instanceof bC.j && CC.code.includes("request-failed")
    }

    function HC(CC) {
      let {
        projectId: zC
      } = CC;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${zC}/installations`
    }

    function EC(CC) {
      return {
        token: CC.token,
        requestStatus: 2,
        expiresIn: (zC = CC.expiresIn, Number(zC.replace("s", "000"))),
        creationTime: Date.now()
      };
      var zC
    }
    async function lC(CC, zC) {
      const ZC = (await zC.json()).error;
      return dC.create("request-failed", {
        requestName: CC,
        serverCode: ZC.code,
        serverMessage: ZC.message,
        serverStatus: ZC.status
      })
    }

    function XC(CC) {
      let {
        apiKey: zC
      } = CC;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": zC
      })
    }

    function cC(CC, zC) {
      let {
        refreshToken: ZC
      } = zC;
      const QC = XC(CC);
      return QC.append("Authorization", function(CC) {
        return `${hC} ${CC}`
      }(ZC)), QC
    }
    async function uC(CC) {
      const zC = await CC();
      return zC.status >= 500 && zC.status < 600 ? CC() : zC
    }

    function rC(CC) {
      return new Promise((zC => {
        setTimeout(zC, CC)
      }))
    }
    const sC = /^[cdef][\w-]{21}$/;

    function TC() {
      try {
        const CC = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(CC), CC[0] = 112 + CC[0] % 16;
        const zC = function(CC) {
          const zC = (ZC = CC, btoa(String.fromCharCode(...ZC)).replace(/\+/g, "-").replace(/\//g, "_"));
          var ZC;
          return zC.substr(0, 22)
        }(CC);
        return sC.test(zC) ? zC : ""
      } catch (CC) {
        return ""
      }
    }

    function aC(CC) {
      return `${CC.appName}!${CC.appId}`
    }
    const tC = new Map;

    function DC(CC, zC) {
      const ZC = aC(CC);
      jC(ZC, zC),
        function(CC, zC) {
          const ZC = LC();
          ZC && ZC.postMessage({
            key: CC,
            fid: zC
          });
          UC()
        }(ZC, zC)
    }

    function jC(CC, zC) {
      const ZC = tC.get(CC);
      if (ZC)
        for (const QC of ZC) QC(zC)
    }
    let yC = null;

    function LC() {
      return !yC && "BroadcastChannel" in self && (yC = new BroadcastChannel("[Firebase] FID Change"), yC.onmessage = CC => {
        jC(CC.data.key, CC.data.fid)
      }), yC
    }

    function UC() {
      0 === tC.size && yC && (yC.close(), yC = null)
    }
    const BC = "firebase-installations-store";
    let OC = null;

    function kC() {
      return OC || (OC = function(CC, zC) {
        let {
          blocked: ZC,
          upgrade: QC,
          blocking: wC,
          terminated: bC
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const nC = indexedDB.open(CC, zC),
          fC = PC(nC);
        return QC && nC.addEventListener("upgradeneeded", (CC => {
          QC(PC(nC.result), CC.oldVersion, CC.newVersion, PC(nC.transaction))
        })), ZC && nC.addEventListener("blocked", (() => ZC())), fC.then((CC => {
          bC && CC.addEventListener("close", (() => bC())), wC && CC.addEventListener("versionchange", (() => wC()))
        })).catch((() => {})), fC
      }("firebase-installations-database", 1, {
        upgrade: (CC, zC) => {
          if (0 === zC) CC.createObjectStore(BC)
        }
      })), OC
    }
    async function VC(CC, zC) {
      const ZC = aC(CC),
        QC = (await kC()).transaction(BC, "readwrite"),
        wC = QC.objectStore(BC),
        bC = await wC.get(ZC);
      return await wC.put(zC, ZC), await QC.done, bC && bC.fid === zC.fid || DC(CC, zC.fid), zC
    }
    async function Cz(CC) {
      const zC = aC(CC),
        ZC = (await kC()).transaction(BC, "readwrite");
      await ZC.objectStore(BC).delete(zC), await ZC.done
    }
    async function zz(CC, zC) {
      const ZC = aC(CC),
        QC = (await kC()).transaction(BC, "readwrite"),
        wC = QC.objectStore(BC),
        bC = await wC.get(ZC),
        nC = zC(bC);
      return void 0 === nC ? await wC.delete(ZC) : await wC.put(nC, ZC), await QC.done, !nC || bC && bC.fid === nC.fid || DC(CC, nC.fid), nC
    }
    async function Zz(CC) {
      let zC;
      const ZC = await zz(CC.appConfig, (ZC => {
        const QC = function(CC) {
            const zC = CC || {
              fid: TC(),
              registrationStatus: 0
            };
            return bz(zC)
          }(ZC),
          wC = function(CC, zC) {
            if (0 === zC.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: zC,
                  registrationPromise: Promise.reject(dC.create("app-offline"))
                }
              }
              const ZC = {
                  fid: zC.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                QC = async function(CC, zC) {
                  try {
                    const ZC = await async function(CC, zC) {
                      let {
                        appConfig: ZC,
                        heartbeatServiceProvider: QC
                      } = CC, {
                        fid: wC
                      } = zC;
                      const bC = HC(ZC),
                        nC = XC(ZC),
                        fC = QC.getImmediate({
                          optional: !0
                        });
                      if (fC) {
                        const CC = await fC.getHeartbeatsHeader();
                        CC && nC.append("x-firebase-client", CC)
                      }
                      const oC = {
                          fid: wC,
                          authVersion: hC,
                          appId: ZC.appId,
                          sdkVersion: eC
                        },
                        qC = {
                          method: "POST",
                          headers: nC,
                          body: JSON.stringify(oC)
                        },
                        FC = await uC((() => fetch(bC, qC)));
                      if (FC.ok) {
                        const CC = await FC.json();
                        return {
                          fid: CC.fid || wC,
                          registrationStatus: 2,
                          refreshToken: CC.refreshToken,
                          authToken: EC(CC.authToken)
                        }
                      }
                      throw await lC("Create Installation", FC)
                    }(CC, zC);
                    return VC(CC.appConfig, ZC)
                  } catch (ZC) {
                    throw mC(ZC) && 409 === ZC.customData.serverCode ? await Cz(CC.appConfig) : await VC(CC.appConfig, {
                      fid: zC.fid,
                      registrationStatus: 0
                    }), ZC
                  }
                }(CC, ZC);
              return {
                installationEntry: ZC,
                registrationPromise: QC
              }
            }
            return 1 === zC.registrationStatus ? {
              installationEntry: zC,
              registrationPromise: Qz(CC)
            } : {
              installationEntry: zC
            }
          }(CC, QC);
        return zC = wC.registrationPromise, wC.installationEntry
      }));
      return "" === ZC.fid ? {
        installationEntry: await zC
      } : {
        installationEntry: ZC,
        registrationPromise: zC
      }
    }
    async function Qz(CC) {
      let zC = await wz(CC.appConfig);
      for (; 1 === zC.registrationStatus;) await rC(100), zC = await wz(CC.appConfig);
      if (0 === zC.registrationStatus) {
        const {
          installationEntry: zC,
          registrationPromise: ZC
        } = await Zz(CC);
        return ZC || zC
      }
      return zC
    }

    function wz(CC) {
      return zz(CC, (CC => {
        if (!CC) throw dC.create("installation-not-found");
        return bz(CC)
      }))
    }

    function bz(CC) {
      return 1 === (zC = CC).registrationStatus && zC.registrationTime + vC < Date.now() ? {
        fid: CC.fid,
        registrationStatus: 0
      } : CC;
      var zC
    }
    async function nz(CC, zC) {
      let {
        appConfig: ZC,
        heartbeatServiceProvider: QC
      } = CC;
      const wC = function(CC, zC) {
          let {
            fid: ZC
          } = zC;
          return `${HC(CC)}/${ZC}/authTokens:generate`
        }(ZC, zC),
        bC = cC(ZC, zC),
        nC = QC.getImmediate({
          optional: !0
        });
      if (nC) {
        const CC = await nC.getHeartbeatsHeader();
        CC && bC.append("x-firebase-client", CC)
      }
      const fC = {
          installation: {
            sdkVersion: eC,
            appId: ZC.appId
          }
        },
        oC = {
          method: "POST",
          headers: bC,
          body: JSON.stringify(fC)
        },
        qC = await uC((() => fetch(wC, oC)));
      if (qC.ok) {
        return EC(await qC.json())
      }
      throw await lC("Generate Auth Token", qC)
    }
    async function fz(CC) {
      let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const QC = await zz(CC.appConfig, (QC => {
        if (!qz(QC)) throw dC.create("not-registered");
        const wC = QC.authToken;
        if (!ZC && function(CC) {
            return 2 === CC.requestStatus && ! function(CC) {
              const zC = Date.now();
              return zC < CC.creationTime || CC.creationTime + CC.expiresIn < zC + KC
            }(CC)
          }(wC)) return QC;
        if (1 === wC.requestStatus) return zC = async function(CC, zC) {
          let ZC = await oz(CC.appConfig);
          for (; 1 === ZC.authToken.requestStatus;) await rC(100), ZC = await oz(CC.appConfig);
          const QC = ZC.authToken;
          return 0 === QC.requestStatus ? fz(CC, zC) : QC
        }(CC, ZC), QC;
        {
          if (!navigator.onLine) throw dC.create("app-offline");
          const ZC = function(CC) {
            const zC = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, CC), {
              authToken: zC
            })
          }(QC);
          return zC = async function(CC, zC) {
            try {
              const ZC = await nz(CC, zC),
                QC = Object.assign(Object.assign({}, zC), {
                  authToken: ZC
                });
              return await VC(CC.appConfig, QC), ZC
            } catch (ZC) {
              if (!mC(ZC) || 401 !== ZC.customData.serverCode && 404 !== ZC.customData.serverCode) {
                const ZC = Object.assign(Object.assign({}, zC), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await VC(CC.appConfig, ZC)
              } else await Cz(CC.appConfig);
              throw ZC
            }
          }(CC, ZC), ZC
        }
      }));
      return zC ? await zC : QC.authToken
    }

    function oz(CC) {
      return zz(CC, (CC => {
        if (!qz(CC)) throw dC.create("not-registered");
        const zC = CC.authToken;
        return 1 === (ZC = zC).requestStatus && ZC.requestTime + vC < Date.now() ? Object.assign(Object.assign({}, CC), {
          authToken: {
            requestStatus: 0
          }
        }) : CC;
        var ZC
      }))
    }

    function qz(CC) {
      return void 0 !== CC && 2 === CC.registrationStatus
    }
    async function Fz(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ZC = CC;
      await async function(CC) {
        const {
          registrationPromise: zC
        } = await Zz(CC);
        zC && await zC
      }(ZC);
      return (await fz(ZC, zC)).token
    }

    function Wz(CC) {
      return dC.create("missing-app-config-values", {
        valueName: CC
      })
    }
    const Nz = "installations",
      Mz = CC => {
        const zC = CC.getProvider("app").getImmediate(),
          ZC = function(CC) {
            if (!CC || !CC.options) throw Wz("App Configuration");
            if (!CC.name) throw Wz("App Name");
            const zC = ["projectId", "apiKey", "appId"];
            for (const ZC of zC)
              if (!CC.options[ZC]) throw Wz(ZC);
            return {
              appName: CC.name,
              projectId: CC.options.projectId,
              apiKey: CC.options.apiKey,
              appId: CC.options.appId
            }
          }(zC);
        return {
          app: zC,
          appConfig: ZC,
          heartbeatServiceProvider: (0, QC.D)(zC, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      gz = CC => {
        const zC = CC.getProvider("app").getImmediate(),
          ZC = (0, QC.D)(zC, Nz).getImmediate();
        return {
          getId: () => async function(CC) {
            const zC = CC,
              {
                installationEntry: ZC,
                registrationPromise: QC
              } = await Zz(zC);
            return QC ? QC.catch(console.error) : fz(zC).catch(console.error), ZC.fid
          }(ZC),
          getToken: CC => Fz(ZC, CC)
        }
      };
    (0, QC.H)(new nC.f(Nz, Mz, "PUBLIC")), (0, QC.H)(new nC.f("installations-internal", gz, "PRIVATE")), (0, QC.$)(IC, iC), (0, QC.$)(IC, iC, "esm2017");
    const Sz = "analytics",
      pz = "https://www.googletagmanager.com/gtag/js",
      Pz = new wC.c("@firebase/analytics"),
      Gz = {
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
      Rz = new bC.g("analytics", "Analytics", Gz);

    function Az(CC) {
      if (!CC.startsWith(pz)) {
        const zC = Rz.create("invalid-gtag-resource", {
          gtagURL: CC
        });
        return Pz.warn(zC.message), ""
      }
      return CC
    }

    function xz(CC) {
      return Promise.all(CC.map((CC => CC.catch((CC => CC)))))
    }

    function Jz(CC, zC) {
      const ZC = function(CC, zC) {
          let ZC;
          return window.trustedTypes && (ZC = window.trustedTypes.createPolicy(CC, zC)), ZC
        }("firebase-js-sdk-policy", {
          createScriptURL: Az
        }),
        QC = document.createElement("script"),
        wC = `${pz}?l=${CC}&id=${zC}`;
      QC.src = ZC ? null === ZC || void 0 === ZC ? void 0 : ZC.createScriptURL(wC) : wC, QC.async = !0, document.head.appendChild(QC)
    }

    function Iz(CC, zC, ZC, QC) {
      return async function(wC) {
        try {
          for (var bC = arguments.length, nC = new Array(bC > 1 ? bC - 1 : 0), fC = 1; fC < bC; fC++) nC[fC - 1] = arguments[fC];
          if ("event" === wC) {
            const [QC, wC] = nC;
            await async function(CC, zC, ZC, QC, wC) {
              try {
                let bC = [];
                if (wC && wC.send_to) {
                  let CC = wC.send_to;
                  Array.isArray(CC) || (CC = [CC]);
                  const QC = await xz(ZC);
                  for (const ZC of CC) {
                    const CC = QC.find((CC => CC.measurementId === ZC)),
                      wC = CC && zC[CC.appId];
                    if (!wC) {
                      bC = [];
                      break
                    }
                    bC.push(wC)
                  }
                }
                0 === bC.length && (bC = Object.values(zC)), await Promise.all(bC), CC("event", QC, wC || {})
              } catch (bC) {
                Pz.error(bC)
              }
            }(CC, zC, ZC, QC, wC)
          } else if ("config" === wC) {
            const [wC, bC] = nC;
            await async function(CC, zC, ZC, QC, wC, bC) {
              const nC = QC[wC];
              try {
                if (nC) await zC[nC];
                else {
                  const CC = (await xz(ZC)).find((CC => CC.measurementId === wC));
                  CC && await zC[CC.appId]
                }
              } catch (fC) {
                Pz.error(fC)
              }
              CC("config", wC, bC)
            }(CC, zC, ZC, QC, wC, bC)
          } else if ("consent" === wC) {
            const [zC] = nC;
            CC("consent", "update", zC)
          } else if ("get" === wC) {
            const [zC, ZC, QC] = nC;
            CC("get", zC, ZC, QC)
          } else if ("set" === wC) {
            const [zC] = nC;
            CC("set", zC)
          } else CC(wC, ...nC)
        } catch (oC) {
          Pz.error(oC)
        }
      }
    }
    const iz = new class {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = CC, this.intervalMillis = zC
      }
      getThrottleMetadata(CC) {
        return this.throttleMetadata[CC]
      }
      setThrottleMetadata(CC, zC) {
        this.throttleMetadata[CC] = zC
      }
      deleteThrottleMetadata(CC) {
        delete this.throttleMetadata[CC]
      }
    };

    function vz(CC) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": CC
      })
    }
    async function ez(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iz,
        ZC = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: QC,
        apiKey: wC,
        measurementId: bC
      } = CC.options;
      if (!QC) throw Rz.create("no-app-id");
      if (!wC) {
        if (bC) return {
          measurementId: bC,
          appId: QC
        };
        throw Rz.create("no-api-key")
      }
      const nC = zC.getThrottleMetadata(QC) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        fC = new Kz;
      return setTimeout((async () => {
        fC.abort()
      }), void 0 !== ZC ? ZC : 6e4), hz({
        appId: QC,
        apiKey: wC,
        measurementId: bC
      }, nC, fC, zC)
    }
    async function hz(CC, zC, ZC) {
      let {
        throttleEndTimeMillis: QC,
        backoffCount: wC
      } = zC, nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iz;
      var fC;
      const {
        appId: oC,
        measurementId: qC
      } = CC;
      try {
        await
        function(CC, zC) {
          return new Promise(((ZC, QC) => {
            const wC = Math.max(zC - Date.now(), 0),
              bC = setTimeout(ZC, wC);
            CC.addEventListener((() => {
              clearTimeout(bC), QC(Rz.create("fetch-throttle", {
                throttleEndTimeMillis: zC
              }))
            }))
          }))
        }(ZC, QC)
      } catch (FC) {
        if (qC) return Pz.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${qC} provided in the "measurementId" field in the local Firebase config. [${null===FC||void 0===FC?void 0:FC.message}]`), {
          appId: oC,
          measurementId: qC
        };
        throw FC
      }
      try {
        const zC = await async function(CC) {
          var zC;
          const {
            appId: ZC,
            apiKey: QC
          } = CC, wC = {
            method: "GET",
            headers: vz(QC)
          }, bC = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZC), nC = await fetch(bC, wC);
          if (200 !== nC.status && 304 !== nC.status) {
            let CC = "";
            try {
              const ZC = await nC.json();
              (null === (zC = ZC.error) || void 0 === zC ? void 0 : zC.message) && (CC = ZC.error.message)
            } catch (fC) {}
            throw Rz.create("config-fetch-failed", {
              httpStatus: nC.status,
              responseMessage: CC
            })
          }
          return nC.json()
        }(CC);
        return nC.deleteThrottleMetadata(oC), zC
      } catch (FC) {
        const zC = FC;
        if (! function(CC) {
            if (!(CC instanceof bC.j) || !CC.customData) return !1;
            const zC = Number(CC.customData.httpStatus);
            return 429 === zC || 500 === zC || 503 === zC || 504 === zC
          }(zC)) {
          if (nC.deleteThrottleMetadata(oC), qC) return Pz.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${qC} provided in the "measurementId" field in the local Firebase config. [${null===zC||void 0===zC?void 0:zC.message}]`), {
            appId: oC,
            measurementId: qC
          };
          throw FC
        }
        const QC = 503 === Number(null === (fC = null === zC || void 0 === zC ? void 0 : zC.customData) || void 0 === fC ? void 0 : fC.httpStatus) ? (0, bC.s)(wC, nC.intervalMillis, 30) : (0, bC.s)(wC, nC.intervalMillis),
          WC = {
            throttleEndTimeMillis: Date.now() + QC,
            backoffCount: wC + 1
          };
        return nC.setThrottleMetadata(oC, WC), Pz.debug(`Calling attemptFetch again in ${QC} millis`), hz(CC, WC, ZC, nC)
      }
    }
    class Kz {
      constructor() {
        this.listeners = []
      }
      addEventListener(CC) {
        this.listeners.push(CC)
      }
      abort() {
        this.listeners.forEach((CC => CC()))
      }
    }
    let Yz, dz;

    function mz(CC) {
      dz = CC
    }

    function Hz(CC) {
      Yz = CC
    }
    async function Ez(CC, zC, ZC, QC, wC, nC, fC) {
      var oC;
      const qC = ez(CC);
      qC.then((zC => {
        ZC[zC.measurementId] = zC.appId, CC.options.measurementId && zC.measurementId !== CC.options.measurementId && Pz.warn(`The measurement ID in the local Firebase config (${CC.options.measurementId}) does not match the measurement ID fetched from the server (${zC.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((CC => Pz.error(CC))), zC.push(qC);
      const FC = async function() {
        if (!(0, bC._)()) return Pz.warn(Rz.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, bC.mb)()
        } catch (CC) {
          return Pz.warn(Rz.create("indexeddb-unavailable", {
            errorInfo: null === CC || void 0 === CC ? void 0 : CC.toString()
          }).message), !1
        }
        return !0
      }().then((CC => CC ? QC.getId() : void 0)), [WC, NC] = await Promise.all([qC, FC]);
      (function(CC) {
        const zC = window.document.getElementsByTagName("script");
        for (const ZC of Object.values(zC))
          if (ZC.src && ZC.src.includes(pz) && ZC.src.includes(CC)) return ZC;
        return null
      })(nC) || Jz(nC, WC.measurementId), dz && (wC("consent", "default", dz), mz(void 0)), wC("js", new Date);
      const MC = null !== (oC = null === fC || void 0 === fC ? void 0 : fC.config) && void 0 !== oC ? oC : {};
      return MC.origin = "firebase", MC.update = !0, null != NC && (MC.firebase_id = NC), wC("config", WC.measurementId, MC), Yz && (wC("set", Yz), Hz(void 0)), WC.measurementId
    }
    class lz {
      constructor(CC) {
        this.app = CC
      }
      _delete() {
        return delete Xz[this.app.options.appId], Promise.resolve()
      }
    }
    let Xz = {},
      cz = [];
    const uz = {};
    let rz, sz, Tz = "dataLayer",
      az = "gtag",
      tz = !1;

    function Dz(CC) {
      if (tz) throw Rz.create("already-initialized");
      CC.dataLayerName && (Tz = CC.dataLayerName), CC.gtagName && (az = CC.gtagName)
    }

    function jz(CC, zC, ZC) {
      ! function() {
        const CC = [];
        if ((0, bC.R)() && CC.push("This is a browser extension environment."), (0, bC.n)() || CC.push("Cookies are not available."), CC.length > 0) {
          const zC = CC.map(((CC, zC) => `(${zC+1}) ${CC}`)).join(" "),
            ZC = Rz.create("invalid-analytics-context", {
              errorInfo: zC
            });
          Pz.warn(ZC.message)
        }
      }();
      const QC = CC.options.appId;
      if (!QC) throw Rz.create("no-app-id");
      if (!CC.options.apiKey) {
        if (!CC.options.measurementId) throw Rz.create("no-api-key");
        Pz.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${CC.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Xz[QC]) throw Rz.create("already-exists", {
        id: QC
      });
      if (!tz) {
        ! function(CC) {
          let zC = [];
          Array.isArray(window[CC]) ? zC = window[CC] : window[CC] = zC
        }(Tz);
        const {
          wrappedGtag: CC,
          gtagCore: zC
        } = function(CC, zC, ZC, QC, wC) {
          let bC = function() {
            for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
            window[QC].push(arguments)
          };
          return window[wC] && "function" === typeof window[wC] && (bC = window[wC]), window[wC] = Iz(bC, CC, zC, ZC), {
            gtagCore: bC,
            wrappedGtag: window[wC]
          }
        }(Xz, cz, uz, Tz, az);
        sz = CC, rz = zC, tz = !0
      }
      Xz[QC] = Ez(CC, cz, uz, zC, rz, Tz, ZC);
      return new lz(CC)
    }

    function yz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.S)();
      CC = (0, bC.L)(CC);
      const zC = (0, QC.D)(CC, Sz);
      return zC.isInitialized() ? zC.getImmediate() : Lz(CC)
    }

    function Lz(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZC = (0, QC.D)(CC, Sz);
      if (ZC.isInitialized()) {
        const CC = ZC.getImmediate();
        if ((0, bC.z)(zC, ZC.getOptions())) return CC;
        throw Rz.create("already-initialized")
      }
      return ZC.initialize({
        options: zC
      })
    }
    async function Uz() {
      if ((0, bC.R)()) return !1;
      if (!(0, bC.n)()) return !1;
      if (!(0, bC._)()) return !1;
      try {
        return await (0, bC.mb)()
      } catch (CC) {
        return !1
      }
    }

    function Bz(CC, zC, ZC) {
      CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
        if (QC && QC.global) return CC("set", {
          screen_name: ZC
        }), Promise.resolve();
        CC("config", await zC, {
          update: !0,
          screen_name: ZC
        })
      }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
    }
    async function Oz(CC) {
      return CC = (0, bC.L)(CC), async function(CC, zC) {
        const ZC = await zC;
        return new Promise(((zC, QC) => {
          CC("get", ZC, "client_id", (CC => {
            CC || QC(Rz.create("no-client-id")), zC(CC)
          }))
        }))
      }(sz, Xz[CC.app.options.appId])
    }

    function kz(CC, zC, ZC) {
      CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
        if (QC && QC.global) return CC("set", {
          user_id: ZC
        }), Promise.resolve();
        CC("config", await zC, {
          update: !0,
          user_id: ZC
        })
      }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
    }

    function Vz(CC, zC, ZC) {
      CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
        if (QC && QC.global) {
          const zC = {};
          for (const CC of Object.keys(ZC)) zC[`user_properties.${CC}`] = ZC[CC];
          return CC("set", zC), Promise.resolve()
        }
        CC("config", await zC, {
          update: !0,
          user_properties: ZC
        })
      }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
    }

    function CZ(CC, zC) {
      CC = (0, bC.L)(CC), async function(CC, zC) {
        const ZC = await CC;
        window[`ga-disable-${ZC}`] = !zC
      }(Xz[CC.app.options.appId], zC).catch((CC => Pz.error(CC)))
    }

    function zZ(CC) {
      sz ? sz("set", CC) : Hz(CC)
    }

    function ZZ(CC, zC, ZC, QC) {
      CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC, wC) {
        if (wC && wC.global) CC("event", ZC, QC);
        else {
          const wC = await zC;
          CC("event", ZC, Object.assign(Object.assign({}, QC), {
            send_to: wC
          }))
        }
      }(sz, Xz[CC.app.options.appId], zC, ZC, QC).catch((CC => Pz.error(CC)))
    }

    function QZ(CC) {
      sz ? sz("consent", "update", CC) : mz(CC)
    }
    const wZ = "@firebase/analytics",
      bZ = "0.10.0";
    (0, QC.H)(new nC.f(Sz, ((CC, zC) => {
      let {
        options: ZC
      } = zC;
      return jz(CC.getProvider("app").getImmediate(), CC.getProvider("installations-internal").getImmediate(), ZC)
    }), "PUBLIC")), (0, QC.H)(new nC.f("analytics-internal", (function(CC) {
      try {
        const zC = CC.getProvider(Sz).getImmediate();
        return {
          logEvent: (CC, ZC, QC) => ZZ(zC, CC, ZC, QC)
        }
      } catch (zC) {
        throw Rz.create("interop-component-reg-failed", {
          reason: zC
        })
      }
    }), "PRIVATE")), (0, QC.$)(wZ, bZ), (0, QC.$)(wZ, bZ, "esm2017")
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);