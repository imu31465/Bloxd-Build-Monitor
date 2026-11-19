/*! For license information please see qsji88.256.5e406d23.chunk.js.LICENSE.txt */
export const id = 256;
export const ids = [256];
export const modules = {
  39309: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      getAnalytics: () => bo,
      getGoogleAnalyticsClientId: () => Vo,
      initializeAnalytics: () => yo,
      isSupported: () => No,
      logEvent: () => zI,
      setAnalyticsCollectionEnabled: () => II,
      setConsent: () => kI,
      setCurrentScreen: () => Po,
      setDefaultEventParameters: () => iI,
      setUserId: () => TI,
      setUserProperties: () => oI,
      settings: () => Go
    });
    var iT = IT(39287),
      zT = IT(39305),
      kT = IT(39301),
      WT = IT(39295);
    let XT, BT;
    const FT = new WeakMap,
      ST = new WeakMap,
      DT = new WeakMap,
      LT = new WeakMap,
      xT = new WeakMap;
    let cT = {
      get(TT, oT, IT) {
        if (TT instanceof IDBTransaction) {
          if ("done" === oT) return ST.get(TT);
          if ("objectStoreNames" === oT) return TT.objectStoreNames || DT.get(TT);
          if ("store" === oT) return IT.objectStoreNames[1] ? void 0 : IT.objectStore(IT.objectStoreNames[0])
        }
        return rT(TT[oT])
      },
      set: (TT, oT, IT) => (TT[oT] = IT, !0),
      has: (TT, oT) => TT instanceof IDBTransaction && ("done" === oT || "store" === oT) || oT in TT
    };

    function KT(TT) {
      return TT !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (BT || (BT = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(TT) ? function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return TT.apply(AT(this), IT), rT(FT.get(this))
      } : function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return rT(TT.apply(AT(this), IT))
      } : function(oT) {
        for (var IT = arguments.length, iT = new Array(IT > 1 ? IT - 1 : 0), zT = 1; zT < IT; zT++) iT[zT - 1] = arguments[zT];
        const kT = TT.call(AT(this), oT, ...iT);
        return DT.set(kT, oT.sort ? oT.sort() : [oT]), rT(kT)
      }
    }

    function MT(TT) {
      return "function" === typeof TT ? KT(TT) : (TT instanceof IDBTransaction && function(TT) {
        if (ST.has(TT)) return;
        const oT = new Promise(((oT, IT) => {
          const iT = () => {
              TT.removeEventListener("complete", zT), TT.removeEventListener("error", kT), TT.removeEventListener("abort", kT)
            },
            zT = () => {
              oT(), iT()
            },
            kT = () => {
              IT(TT.error || new DOMException("AbortError", "AbortError")), iT()
            };
          TT.addEventListener("complete", zT), TT.addEventListener("error", kT), TT.addEventListener("abort", kT)
        }));
        ST.set(TT, oT)
      }(TT), oT = TT, (XT || (XT = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((TT => oT instanceof TT)) ? new Proxy(TT, cT) : TT);
      var oT
    }

    function rT(TT) {
      if (TT instanceof IDBRequest) return function(TT) {
        const oT = new Promise(((oT, IT) => {
          const iT = () => {
              TT.removeEventListener("success", zT), TT.removeEventListener("error", kT)
            },
            zT = () => {
              oT(rT(TT.result)), iT()
            },
            kT = () => {
              IT(TT.error), iT()
            };
          TT.addEventListener("success", zT), TT.addEventListener("error", kT)
        }));
        return oT.then((oT => {
          oT instanceof IDBCursor && FT.set(oT, TT)
        })).catch((() => {})), xT.set(oT, TT), oT
      }(TT);
      if (LT.has(TT)) return LT.get(TT);
      const oT = MT(TT);
      return oT !== TT && (LT.set(TT, oT), xT.set(oT, TT)), oT
    }
    const AT = TT => xT.get(TT);
    const gT = ["get", "getKey", "getAll", "getAllKeys", "count"],
      hT = ["put", "add", "delete", "clear"],
      wT = new Map;

    function mT(TT, oT) {
      if (!(TT instanceof IDBDatabase) || oT in TT || "string" !== typeof oT) return;
      if (wT.get(oT)) return wT.get(oT);
      const IT = oT.replace(/FromIndex$/, ""),
        iT = oT !== IT,
        zT = hT.includes(IT);
      if (!(IT in (iT ? IDBIndex : IDBObjectStore).prototype) || !zT && !gT.includes(IT)) return;
      const kT = async function(TT) {
        const oT = this.transaction(TT, zT ? "readwrite" : "readonly");
        let kT = oT.store;
        for (var WT = arguments.length, XT = new Array(WT > 1 ? WT - 1 : 0), BT = 1; BT < WT; BT++) XT[BT - 1] = arguments[BT];
        return iT && (kT = kT.index(XT.shift())), (await Promise.all([kT[IT](...XT), zT && oT.done]))[0]
      };
      return wT.set(oT, kT), kT
    }
    cT = (TT => ({
      ...TT,
      get: (oT, IT, iT) => mT(oT, IT) || TT.get(oT, IT, iT),
      has: (oT, IT) => !!mT(oT, IT) || TT.has(oT, IT)
    }))(cT);
    const eT = "@firebase/installations",
      RT = "0.6.4",
      uT = 1e4,
      vT = `w:${RT}`,
      ET = "FIS_v2",
      fT = 36e5,
      CT = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      jT = new kT.f("installations", "Installations", CT);

    function JT(TT) {
      return TT instanceof kT.h && TT.code.includes("request-failed")
    }

    function UT(TT) {
      let {
        projectId: oT
      } = TT;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${oT}/installations`
    }

    function aT(TT) {
      return {
        token: TT.token,
        requestStatus: 2,
        expiresIn: (oT = TT.expiresIn, Number(oT.replace("s", "000"))),
        creationTime: Date.now()
      };
      var oT
    }
    async function YT(TT, oT) {
      const IT = (await oT.json()).error;
      return jT.create("request-failed", {
        requestName: TT,
        serverCode: IT.code,
        serverMessage: IT.message,
        serverStatus: IT.status
      })
    }

    function QT(TT) {
      let {
        apiKey: oT
      } = TT;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": oT
      })
    }

    function OT(TT, oT) {
      let {
        refreshToken: IT
      } = oT;
      const iT = QT(TT);
      return iT.append("Authorization", function(TT) {
        return `${ET} ${TT}`
      }(IT)), iT
    }
    async function HT(TT) {
      const oT = await TT();
      return oT.status >= 500 && oT.status < 600 ? TT() : oT
    }

    function nT(TT) {
      return new Promise((oT => {
        setTimeout(oT, TT)
      }))
    }
    const qT = /^[cdef][\w-]{21}$/;

    function ZT() {
      try {
        const TT = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(TT), TT[0] = 112 + TT[0] % 16;
        const oT = function(TT) {
          const oT = (IT = TT, btoa(String.fromCharCode(...IT)).replace(/\+/g, "-").replace(/\//g, "_"));
          var IT;
          return oT.substr(0, 22)
        }(TT);
        return qT.test(oT) ? oT : ""
      } catch (TT) {
        return ""
      }
    }

    function lT(TT) {
      return `${TT.appName}!${TT.appId}`
    }
    const sT = new Map;

    function tT(TT, oT) {
      const IT = lT(TT);
      GT(IT, oT),
        function(TT, oT) {
          const IT = bT();
          IT && IT.postMessage({
            key: TT,
            fid: oT
          });
          yT()
        }(IT, oT)
    }

    function GT(TT, oT) {
      const IT = sT.get(TT);
      if (IT)
        for (const iT of IT) iT(oT)
    }
    let pT = null;

    function bT() {
      return !pT && "BroadcastChannel" in self && (pT = new BroadcastChannel("[Firebase] FID Change"), pT.onmessage = TT => {
        GT(TT.data.key, TT.data.fid)
      }), pT
    }

    function yT() {
      0 === sT.size && pT && (pT.close(), pT = null)
    }
    const NT = "firebase-installations-store";
    let PT = null;

    function dT() {
      return PT || (PT = function(TT, oT) {
        let {
          blocked: IT,
          upgrade: iT,
          blocking: zT,
          terminated: kT
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const WT = indexedDB.open(TT, oT),
          XT = rT(WT);
        return iT && WT.addEventListener("upgradeneeded", (TT => {
          iT(rT(WT.result), TT.oldVersion, TT.newVersion, rT(WT.transaction))
        })), IT && WT.addEventListener("blocked", (() => IT())), XT.then((TT => {
          kT && TT.addEventListener("close", (() => kT())), zT && TT.addEventListener("versionchange", (() => zT()))
        })).catch((() => {})), XT
      }("firebase-installations-database", 1, {
        upgrade: (TT, oT) => {
          if (0 === oT) TT.createObjectStore(NT)
        }
      })), PT
    }
    async function VT(TT, oT) {
      const IT = lT(TT),
        iT = (await dT()).transaction(NT, "readwrite"),
        zT = iT.objectStore(NT),
        kT = await zT.get(IT);
      return await zT.put(oT, IT), await iT.done, kT && kT.fid === oT.fid || tT(TT, oT.fid), oT
    }
    async function To(TT) {
      const oT = lT(TT),
        IT = (await dT()).transaction(NT, "readwrite");
      await IT.objectStore(NT).delete(oT), await IT.done
    }
    async function oo(TT, oT) {
      const IT = lT(TT),
        iT = (await dT()).transaction(NT, "readwrite"),
        zT = iT.objectStore(NT),
        kT = await zT.get(IT),
        WT = oT(kT);
      return void 0 === WT ? await zT.delete(IT) : await zT.put(WT, IT), await iT.done, !WT || kT && kT.fid === WT.fid || tT(TT, WT.fid), WT
    }
    async function Io(TT) {
      let oT;
      const IT = await oo(TT.appConfig, (IT => {
        const iT = function(TT) {
            const oT = TT || {
              fid: ZT(),
              registrationStatus: 0
            };
            return ko(oT)
          }(IT),
          zT = function(TT, oT) {
            if (0 === oT.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: oT,
                  registrationPromise: Promise.reject(jT.create("app-offline"))
                }
              }
              const IT = {
                  fid: oT.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                iT = async function(TT, oT) {
                  try {
                    const IT = await async function(TT, oT) {
                      let {
                        appConfig: IT,
                        heartbeatServiceProvider: iT
                      } = TT, {
                        fid: zT
                      } = oT;
                      const kT = UT(IT),
                        WT = QT(IT),
                        XT = iT.getImmediate({
                          optional: !0
                        });
                      if (XT) {
                        const TT = await XT.getHeartbeatsHeader();
                        TT && WT.append("x-firebase-client", TT)
                      }
                      const BT = {
                          fid: zT,
                          authVersion: ET,
                          appId: IT.appId,
                          sdkVersion: vT
                        },
                        FT = {
                          method: "POST",
                          headers: WT,
                          body: JSON.stringify(BT)
                        },
                        ST = await HT((() => fetch(kT, FT)));
                      if (ST.ok) {
                        const TT = await ST.json();
                        return {
                          fid: TT.fid || zT,
                          registrationStatus: 2,
                          refreshToken: TT.refreshToken,
                          authToken: aT(TT.authToken)
                        }
                      }
                      throw await YT("Create Installation", ST)
                    }(TT, oT);
                    return VT(TT.appConfig, IT)
                  } catch (IT) {
                    throw JT(IT) && 409 === IT.customData.serverCode ? await To(TT.appConfig) : await VT(TT.appConfig, {
                      fid: oT.fid,
                      registrationStatus: 0
                    }), IT
                  }
                }(TT, IT);
              return {
                installationEntry: IT,
                registrationPromise: iT
              }
            }
            return 1 === oT.registrationStatus ? {
              installationEntry: oT,
              registrationPromise: io(TT)
            } : {
              installationEntry: oT
            }
          }(TT, iT);
        return oT = zT.registrationPromise, zT.installationEntry
      }));
      return "" === IT.fid ? {
        installationEntry: await oT
      } : {
        installationEntry: IT,
        registrationPromise: oT
      }
    }
    async function io(TT) {
      let oT = await zo(TT.appConfig);
      for (; 1 === oT.registrationStatus;) await nT(100), oT = await zo(TT.appConfig);
      if (0 === oT.registrationStatus) {
        const {
          installationEntry: oT,
          registrationPromise: IT
        } = await Io(TT);
        return IT || oT
      }
      return oT
    }

    function zo(TT) {
      return oo(TT, (TT => {
        if (!TT) throw jT.create("installation-not-found");
        return ko(TT)
      }))
    }

    function ko(TT) {
      return 1 === (oT = TT).registrationStatus && oT.registrationTime + uT < Date.now() ? {
        fid: TT.fid,
        registrationStatus: 0
      } : TT;
      var oT
    }
    async function Wo(TT, oT) {
      let {
        appConfig: IT,
        heartbeatServiceProvider: iT
      } = TT;
      const zT = function(TT, oT) {
          let {
            fid: IT
          } = oT;
          return `${UT(TT)}/${IT}/authTokens:generate`
        }(IT, oT),
        kT = OT(IT, oT),
        WT = iT.getImmediate({
          optional: !0
        });
      if (WT) {
        const TT = await WT.getHeartbeatsHeader();
        TT && kT.append("x-firebase-client", TT)
      }
      const XT = {
          installation: {
            sdkVersion: vT,
            appId: IT.appId
          }
        },
        BT = {
          method: "POST",
          headers: kT,
          body: JSON.stringify(XT)
        },
        FT = await HT((() => fetch(zT, BT)));
      if (FT.ok) {
        return aT(await FT.json())
      }
      throw await YT("Generate Auth Token", FT)
    }
    async function Xo(TT) {
      let oT, IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const iT = await oo(TT.appConfig, (iT => {
        if (!Fo(iT)) throw jT.create("not-registered");
        const zT = iT.authToken;
        if (!IT && function(TT) {
            return 2 === TT.requestStatus && ! function(TT) {
              const oT = Date.now();
              return oT < TT.creationTime || TT.creationTime + TT.expiresIn < oT + fT
            }(TT)
          }(zT)) return iT;
        if (1 === zT.requestStatus) return oT = async function(TT, oT) {
          let IT = await Bo(TT.appConfig);
          for (; 1 === IT.authToken.requestStatus;) await nT(100), IT = await Bo(TT.appConfig);
          const iT = IT.authToken;
          return 0 === iT.requestStatus ? Xo(TT, oT) : iT
        }(TT, IT), iT;
        {
          if (!navigator.onLine) throw jT.create("app-offline");
          const IT = function(TT) {
            const oT = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, TT), {
              authToken: oT
            })
          }(iT);
          return oT = async function(TT, oT) {
            try {
              const IT = await Wo(TT, oT),
                iT = Object.assign(Object.assign({}, oT), {
                  authToken: IT
                });
              return await VT(TT.appConfig, iT), IT
            } catch (IT) {
              if (!JT(IT) || 401 !== IT.customData.serverCode && 404 !== IT.customData.serverCode) {
                const IT = Object.assign(Object.assign({}, oT), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await VT(TT.appConfig, IT)
              } else await To(TT.appConfig);
              throw IT
            }
          }(TT, IT), IT
        }
      }));
      return oT ? await oT : iT.authToken
    }

    function Bo(TT) {
      return oo(TT, (TT => {
        if (!Fo(TT)) throw jT.create("not-registered");
        const oT = TT.authToken;
        return 1 === (IT = oT).requestStatus && IT.requestTime + uT < Date.now() ? Object.assign(Object.assign({}, TT), {
          authToken: {
            requestStatus: 0
          }
        }) : TT;
        var IT
      }))
    }

    function Fo(TT) {
      return void 0 !== TT && 2 === TT.registrationStatus
    }
    async function So(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const IT = TT;
      await async function(TT) {
        const {
          registrationPromise: oT
        } = await Io(TT);
        oT && await oT
      }(IT);
      return (await Xo(IT, oT)).token
    }

    function Do(TT) {
      return jT.create("missing-app-config-values", {
        valueName: TT
      })
    }
    const Lo = "installations",
      xo = TT => {
        const oT = TT.getProvider("app").getImmediate(),
          IT = function(TT) {
            if (!TT || !TT.options) throw Do("App Configuration");
            if (!TT.name) throw Do("App Name");
            const oT = ["projectId", "apiKey", "appId"];
            for (const IT of oT)
              if (!TT.options[IT]) throw Do(IT);
            return {
              appName: TT.name,
              projectId: TT.options.projectId,
              apiKey: TT.options.apiKey,
              appId: TT.options.appId
            }
          }(oT);
        return {
          app: oT,
          appConfig: IT,
          heartbeatServiceProvider: (0, iT.t)(oT, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      co = TT => {
        const oT = TT.getProvider("app").getImmediate(),
          IT = (0, iT.t)(oT, Lo).getImmediate();
        return {
          getId: () => async function(TT) {
            const oT = TT,
              {
                installationEntry: IT,
                registrationPromise: iT
              } = await Io(oT);
            return iT ? iT.catch(console.error) : Xo(oT).catch(console.error), IT.fid
          }(IT),
          getToken: TT => So(IT, TT)
        }
      };
    (0, iT.u)(new WT.d(Lo, xo, "PUBLIC")), (0, iT.u)(new WT.d("installations-internal", co, "PRIVATE")), (0, iT.J)(eT, RT), (0, iT.J)(eT, RT, "esm2017");
    const Ko = "analytics",
      Mo = "https://www.googletagmanager.com/gtag/js",
      ro = new zT.d("@firebase/analytics"),
      Ao = {
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
      go = new kT.f("analytics", "Analytics", Ao);

    function ho(TT) {
      if (!TT.startsWith(Mo)) {
        const oT = go.create("invalid-gtag-resource", {
          gtagURL: TT
        });
        return ro.warn(oT.message), ""
      }
      return TT
    }

    function wo(TT) {
      return Promise.all(TT.map((TT => TT.catch((TT => TT)))))
    }

    function mo(TT, oT) {
      const IT = function(TT, oT) {
          let IT;
          return window.trustedTypes && (IT = window.trustedTypes.createPolicy(TT, oT)), IT
        }("firebase-js-sdk-policy", {
          createScriptURL: ho
        }),
        iT = document.createElement("script"),
        zT = `${Mo}?l=${TT}&id=${oT}`;
      iT.src = IT ? null === IT || void 0 === IT ? void 0 : IT.createScriptURL(zT) : zT, iT.async = !0, document.head.appendChild(iT)
    }

    function eo(TT, oT, IT, iT) {
      return async function(zT) {
        try {
          for (var kT = arguments.length, WT = new Array(kT > 1 ? kT - 1 : 0), XT = 1; XT < kT; XT++) WT[XT - 1] = arguments[XT];
          if ("event" === zT) {
            const [iT, zT] = WT;
            await async function(TT, oT, IT, iT, zT) {
              try {
                let kT = [];
                if (zT && zT.send_to) {
                  let TT = zT.send_to;
                  Array.isArray(TT) || (TT = [TT]);
                  const iT = await wo(IT);
                  for (const IT of TT) {
                    const TT = iT.find((TT => TT.measurementId === IT)),
                      zT = TT && oT[TT.appId];
                    if (!zT) {
                      kT = [];
                      break
                    }
                    kT.push(zT)
                  }
                }
                0 === kT.length && (kT = Object.values(oT)), await Promise.all(kT), TT("event", iT, zT || {})
              } catch (kT) {
                ro.error(kT)
              }
            }(TT, oT, IT, iT, zT)
          } else if ("config" === zT) {
            const [zT, kT] = WT;
            await async function(TT, oT, IT, iT, zT, kT) {
              const WT = iT[zT];
              try {
                if (WT) await oT[WT];
                else {
                  const TT = (await wo(IT)).find((TT => TT.measurementId === zT));
                  TT && await oT[TT.appId]
                }
              } catch (XT) {
                ro.error(XT)
              }
              TT("config", zT, kT)
            }(TT, oT, IT, iT, zT, kT)
          } else if ("consent" === zT) {
            const [oT] = WT;
            TT("consent", "update", oT)
          } else if ("get" === zT) {
            const [oT, IT, iT] = WT;
            TT("get", oT, IT, iT)
          } else if ("set" === zT) {
            const [oT] = WT;
            TT("set", oT)
          } else TT(zT, ...WT)
        } catch (BT) {
          ro.error(BT)
        }
      }
    }
    const Ro = new class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = TT, this.intervalMillis = oT
      }
      getThrottleMetadata(TT) {
        return this.throttleMetadata[TT]
      }
      setThrottleMetadata(TT, oT) {
        this.throttleMetadata[TT] = oT
      }
      deleteThrottleMetadata(TT) {
        delete this.throttleMetadata[TT]
      }
    };

    function uo(TT) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": TT
      })
    }
    async function vo(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ro,
        IT = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: iT,
        apiKey: zT,
        measurementId: kT
      } = TT.options;
      if (!iT) throw go.create("no-app-id");
      if (!zT) {
        if (kT) return {
          measurementId: kT,
          appId: iT
        };
        throw go.create("no-api-key")
      }
      const WT = oT.getThrottleMetadata(iT) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        XT = new fo;
      return setTimeout((async () => {
        XT.abort()
      }), void 0 !== IT ? IT : 6e4), Eo({
        appId: iT,
        apiKey: zT,
        measurementId: kT
      }, WT, XT, oT)
    }
    async function Eo(TT, oT, IT) {
      let {
        throttleEndTimeMillis: iT,
        backoffCount: zT
      } = oT, WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ro;
      var XT;
      const {
        appId: BT,
        measurementId: FT
      } = TT;
      try {
        await
        function(TT, oT) {
          return new Promise(((IT, iT) => {
            const zT = Math.max(oT - Date.now(), 0),
              kT = setTimeout(IT, zT);
            TT.addEventListener((() => {
              clearTimeout(kT), iT(go.create("fetch-throttle", {
                throttleEndTimeMillis: oT
              }))
            }))
          }))
        }(IT, iT)
      } catch (ST) {
        if (FT) return ro.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${FT} provided in the "measurementId" field in the local Firebase config. [${null===ST||void 0===ST?void 0:ST.message}]`), {
          appId: BT,
          measurementId: FT
        };
        throw ST
      }
      try {
        const oT = await async function(TT) {
          var oT;
          const {
            appId: IT,
            apiKey: iT
          } = TT, zT = {
            method: "GET",
            headers: uo(iT)
          }, kT = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", IT), WT = await fetch(kT, zT);
          if (200 !== WT.status && 304 !== WT.status) {
            let TT = "";
            try {
              const IT = await WT.json();
              (null === (oT = IT.error) || void 0 === oT ? void 0 : oT.message) && (TT = IT.error.message)
            } catch (XT) {}
            throw go.create("config-fetch-failed", {
              httpStatus: WT.status,
              responseMessage: TT
            })
          }
          return WT.json()
        }(TT);
        return WT.deleteThrottleMetadata(BT), oT
      } catch (ST) {
        const oT = ST;
        if (! function(TT) {
            if (!(TT instanceof kT.h) || !TT.customData) return !1;
            const oT = Number(TT.customData.httpStatus);
            return 429 === oT || 500 === oT || 503 === oT || 504 === oT
          }(oT)) {
          if (WT.deleteThrottleMetadata(BT), FT) return ro.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${FT} provided in the "measurementId" field in the local Firebase config. [${null===oT||void 0===oT?void 0:oT.message}]`), {
            appId: BT,
            measurementId: FT
          };
          throw ST
        }
        const iT = 503 === Number(null === (XT = null === oT || void 0 === oT ? void 0 : oT.customData) || void 0 === XT ? void 0 : XT.httpStatus) ? (0, kT.t)(zT, WT.intervalMillis, 30) : (0, kT.t)(zT, WT.intervalMillis),
          DT = {
            throttleEndTimeMillis: Date.now() + iT,
            backoffCount: zT + 1
          };
        return WT.setThrottleMetadata(BT, DT), ro.debug(`Calling attemptFetch again in ${iT} millis`), Eo(TT, DT, IT, WT)
      }
    }
    class fo {
      constructor() {
        this.listeners = []
      }
      addEventListener(TT) {
        this.listeners.push(TT)
      }
      abort() {
        this.listeners.forEach((TT => TT()))
      }
    }
    let Co, jo;

    function Jo(TT) {
      jo = TT
    }

    function Uo(TT) {
      Co = TT
    }
    async function ao(TT, oT, IT, iT, zT, WT, XT) {
      var BT;
      const FT = vo(TT);
      FT.then((oT => {
        IT[oT.measurementId] = oT.appId, TT.options.measurementId && oT.measurementId !== TT.options.measurementId && ro.warn(`The measurement ID in the local Firebase config (${TT.options.measurementId}) does not match the measurement ID fetched from the server (${oT.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((TT => ro.error(TT))), oT.push(FT);
      const ST = async function() {
        if (!(0, kT.Z)()) return ro.warn(go.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, kT.jb)()
        } catch (TT) {
          return ro.warn(go.create("indexeddb-unavailable", {
            errorInfo: null === TT || void 0 === TT ? void 0 : TT.toString()
          }).message), !1
        }
        return !0
      }().then((TT => TT ? iT.getId() : void 0)), [DT, LT] = await Promise.all([FT, ST]);
      (function(TT) {
        const oT = window.document.getElementsByTagName("script");
        for (const IT of Object.values(oT))
          if (IT.src && IT.src.includes(Mo) && IT.src.includes(TT)) return IT;
        return null
      })(WT) || mo(WT, DT.measurementId), jo && (zT("consent", "default", jo), Jo(void 0)), zT("js", new Date);
      const xT = null !== (BT = null === XT || void 0 === XT ? void 0 : XT.config) && void 0 !== BT ? BT : {};
      return xT.origin = "firebase", xT.update = !0, null != LT && (xT.firebase_id = LT), zT("config", DT.measurementId, xT), Co && (zT("set", Co), Uo(void 0)), DT.measurementId
    }
    class Yo {
      constructor(TT) {
        this.app = TT
      }
      _delete() {
        return delete Qo[this.app.options.appId], Promise.resolve()
      }
    }
    let Qo = {},
      Oo = [];
    const Ho = {};
    let no, qo, Zo = "dataLayer",
      so = "gtag",
      to = !1;

    function Go(TT) {
      if (to) throw go.create("already-initialized");
      TT.dataLayerName && (Zo = TT.dataLayerName), TT.gtagName && (so = TT.gtagName)
    }

    function po(TT, oT, IT) {
      ! function() {
        const TT = [];
        if ((0, kT.T)() && TT.push("This is a browser extension environment."), (0, kT.k)() || TT.push("Cookies are not available."), TT.length > 0) {
          const oT = TT.map(((TT, oT) => `(${oT+1}) ${TT}`)).join(" "),
            IT = go.create("invalid-analytics-context", {
              errorInfo: oT
            });
          ro.warn(IT.message)
        }
      }();
      const iT = TT.options.appId;
      if (!iT) throw go.create("no-app-id");
      if (!TT.options.apiKey) {
        if (!TT.options.measurementId) throw go.create("no-api-key");
        ro.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${TT.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Qo[iT]) throw go.create("already-exists", {
        id: iT
      });
      if (!to) {
        ! function(TT) {
          let oT = [];
          Array.isArray(window[TT]) ? oT = window[TT] : window[TT] = oT
        }(Zo);
        const {
          wrappedGtag: TT,
          gtagCore: oT
        } = function(TT, oT, IT, iT, zT) {
          let kT = function() {
            for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
            window[iT].push(arguments)
          };
          return window[zT] && "function" === typeof window[zT] && (kT = window[zT]), window[zT] = eo(kT, TT, oT, IT), {
            gtagCore: kT,
            wrappedGtag: window[zT]
          }
        }(Qo, Oo, Ho, Zo, so);
        qo = TT, no = oT, to = !0
      }
      Qo[iT] = ao(TT, Oo, Ho, oT, no, Zo, IT);
      return new Yo(TT)
    }

    function bo() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, iT.E)();
      TT = (0, kT.L)(TT);
      const oT = (0, iT.t)(TT, Ko);
      return oT.isInitialized() ? oT.getImmediate() : yo(TT)
    }

    function yo(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const IT = (0, iT.t)(TT, Ko);
      if (IT.isInitialized()) {
        const TT = IT.getImmediate();
        if ((0, kT.x)(oT, IT.getOptions())) return TT;
        throw go.create("already-initialized")
      }
      return IT.initialize({
        options: oT
      })
    }
    async function No() {
      if ((0, kT.T)()) return !1;
      if (!(0, kT.k)()) return !1;
      if (!(0, kT.Z)()) return !1;
      try {
        return await (0, kT.jb)()
      } catch (TT) {
        return !1
      }
    }

    function Po(TT, oT, IT) {
      TT = (0, kT.L)(TT), async function(TT, oT, IT, iT) {
        if (iT && iT.global) return TT("set", {
          screen_name: IT
        }), Promise.resolve();
        TT("config", await oT, {
          update: !0,
          screen_name: IT
        })
      }(qo, Qo[TT.app.options.appId], oT, IT).catch((TT => ro.error(TT)))
    }
    async function Vo(TT) {
      return TT = (0, kT.L)(TT), async function(TT, oT) {
        const IT = await oT;
        return new Promise(((oT, iT) => {
          TT("get", IT, "client_id", (TT => {
            TT || iT(go.create("no-client-id")), oT(TT)
          }))
        }))
      }(qo, Qo[TT.app.options.appId])
    }

    function TI(TT, oT, IT) {
      TT = (0, kT.L)(TT), async function(TT, oT, IT, iT) {
        if (iT && iT.global) return TT("set", {
          user_id: IT
        }), Promise.resolve();
        TT("config", await oT, {
          update: !0,
          user_id: IT
        })
      }(qo, Qo[TT.app.options.appId], oT, IT).catch((TT => ro.error(TT)))
    }

    function oI(TT, oT, IT) {
      TT = (0, kT.L)(TT), async function(TT, oT, IT, iT) {
        if (iT && iT.global) {
          const oT = {};
          for (const TT of Object.keys(IT)) oT[`user_properties.${TT}`] = IT[TT];
          return TT("set", oT), Promise.resolve()
        }
        TT("config", await oT, {
          update: !0,
          user_properties: IT
        })
      }(qo, Qo[TT.app.options.appId], oT, IT).catch((TT => ro.error(TT)))
    }

    function II(TT, oT) {
      TT = (0, kT.L)(TT), async function(TT, oT) {
        const IT = await TT;
        window[`ga-disable-${IT}`] = !oT
      }(Qo[TT.app.options.appId], oT).catch((TT => ro.error(TT)))
    }

    function iI(TT) {
      qo ? qo("set", TT) : Uo(TT)
    }

    function zI(TT, oT, IT, iT) {
      TT = (0, kT.L)(TT), async function(TT, oT, IT, iT, zT) {
        if (zT && zT.global) TT("event", IT, iT);
        else {
          const zT = await oT;
          TT("event", IT, Object.assign(Object.assign({}, iT), {
            send_to: zT
          }))
        }
      }(qo, Qo[TT.app.options.appId], oT, IT, iT).catch((TT => ro.error(TT)))
    }

    function kI(TT) {
      qo ? qo("consent", "update", TT) : Jo(TT)
    }
    const WI = "@firebase/analytics",
      XI = "0.10.0";
    (0, iT.u)(new WT.d(Ko, ((TT, oT) => {
      let {
        options: IT
      } = oT;
      return po(TT.getProvider("app").getImmediate(), TT.getProvider("installations-internal").getImmediate(), IT)
    }), "PUBLIC")), (0, iT.u)(new WT.d("analytics-internal", (function(TT) {
      try {
        const oT = TT.getProvider(Ko).getImmediate();
        return {
          logEvent: (TT, IT, iT) => zI(oT, TT, IT, iT)
        }
      } catch (oT) {
        throw go.create("interop-component-reg-failed", {
          reason: oT
        })
      }
    }), "PRIVATE")), (0, iT.J)(WI, XI), (0, iT.J)(WI, XI, "esm2017")
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);