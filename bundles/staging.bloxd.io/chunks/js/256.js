/*! For license information please see zyyatq.256.dfd07cb9.chunk.js.LICENSE.txt */
export const id = 256;
export const ids = [256];
export const modules = {
  39643: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      getAnalytics: () => Gr,
      getGoogleAnalyticsClientId: () => Ur,
      initializeAnalytics: () => xr,
      isSupported: () => nr,
      logEvent: () => DD,
      setAnalyticsCollectionEnabled: () => YD,
      setConsent: () => FD,
      setCurrentScreen: () => Pr,
      setDefaultEventParameters: () => rD,
      setUserId: () => Lr,
      setUserProperties: () => tr,
      settings: () => pr
    });
    var FY = DY(39625),
      AY = DY(39640),
      IY = DY(39635),
      RY = DY(39632);
    let OY, gY;
    const aY = new WeakMap,
      vY = new WeakMap,
      uY = new WeakMap,
      sY = new WeakMap,
      iY = new WeakMap;
    let yY = {
      get(YY, rY, DY) {
        if (YY instanceof IDBTransaction) {
          if ("done" === rY) return vY.get(YY);
          if ("objectStoreNames" === rY) return YY.objectStoreNames || uY.get(YY);
          if ("store" === rY) return DY.objectStoreNames[1] ? void 0 : DY.objectStore(DY.objectStoreNames[0])
        }
        return WY(YY[rY])
      },
      set: (YY, rY, DY) => (YY[rY] = DY, !0),
      has: (YY, rY) => YY instanceof IDBTransaction && ("done" === rY || "store" === rY) || rY in YY
    };

    function QY(YY) {
      return YY !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (gY || (gY = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(YY) ? function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return YY.apply(EY(this), DY), WY(aY.get(this))
      } : function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return WY(YY.apply(EY(this), DY))
      } : function(rY) {
        for (var DY = arguments.length, FY = new Array(DY > 1 ? DY - 1 : 0), AY = 1; AY < DY; AY++) FY[AY - 1] = arguments[AY];
        const IY = YY.call(EY(this), rY, ...FY);
        return uY.set(IY, rY.sort ? rY.sort() : [rY]), WY(IY)
      }
    }

    function oY(YY) {
      return "function" === typeof YY ? QY(YY) : (YY instanceof IDBTransaction && function(YY) {
        if (vY.has(YY)) return;
        const rY = new Promise(((rY, DY) => {
          const FY = () => {
              YY.removeEventListener("complete", AY), YY.removeEventListener("error", IY), YY.removeEventListener("abort", IY)
            },
            AY = () => {
              rY(), FY()
            },
            IY = () => {
              DY(YY.error || new DOMException("AbortError", "AbortError")), FY()
            };
          YY.addEventListener("complete", AY), YY.addEventListener("error", IY), YY.addEventListener("abort", IY)
        }));
        vY.set(YY, rY)
      }(YY), rY = YY, (OY || (OY = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((YY => rY instanceof YY)) ? new Proxy(YY, yY) : YY);
      var rY
    }

    function WY(YY) {
      if (YY instanceof IDBRequest) return function(YY) {
        const rY = new Promise(((rY, DY) => {
          const FY = () => {
              YY.removeEventListener("success", AY), YY.removeEventListener("error", IY)
            },
            AY = () => {
              rY(WY(YY.result)), FY()
            },
            IY = () => {
              DY(YY.error), FY()
            };
          YY.addEventListener("success", AY), YY.addEventListener("error", IY)
        }));
        return rY.then((rY => {
          rY instanceof IDBCursor && aY.set(rY, YY)
        })).catch((() => {})), iY.set(rY, YY), rY
      }(YY);
      if (sY.has(YY)) return sY.get(YY);
      const rY = oY(YY);
      return rY !== YY && (sY.set(YY, rY), iY.set(rY, YY)), rY
    }
    const EY = YY => iY.get(YY);
    const mY = ["get", "getKey", "getAll", "getAllKeys", "count"],
      VY = ["put", "add", "delete", "clear"],
      SY = new Map;

    function lY(YY, rY) {
      if (!(YY instanceof IDBDatabase) || rY in YY || "string" !== typeof rY) return;
      if (SY.get(rY)) return SY.get(rY);
      const DY = rY.replace(/FromIndex$/, ""),
        FY = rY !== DY,
        AY = VY.includes(DY);
      if (!(DY in (FY ? IDBIndex : IDBObjectStore).prototype) || !AY && !mY.includes(DY)) return;
      const IY = async function(YY) {
        const rY = this.transaction(YY, AY ? "readwrite" : "readonly");
        let IY = rY.store;
        for (var RY = arguments.length, OY = new Array(RY > 1 ? RY - 1 : 0), gY = 1; gY < RY; gY++) OY[gY - 1] = arguments[gY];
        return FY && (IY = IY.index(OY.shift())), (await Promise.all([IY[DY](...OY), AY && rY.done]))[0]
      };
      return SY.set(rY, IY), IY
    }
    yY = (YY => ({
      ...YY,
      get: (rY, DY, FY) => lY(rY, DY) || YY.get(rY, DY, FY),
      has: (rY, DY) => !!lY(rY, DY) || YY.has(rY, DY)
    }))(yY);
    const TY = "@firebase/installations",
      eY = "0.6.4",
      NY = 1e4,
      BY = `w:${eY}`,
      cY = "FIS_v2",
      KY = 36e5,
      HY = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      zY = new IY.f("installations", "Installations", HY);

    function ZY(YY) {
      return YY instanceof IY.g && YY.code.includes("request-failed")
    }

    function CY(YY) {
      let {
        projectId: rY
      } = YY;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${rY}/installations`
    }

    function fY(YY) {
      return {
        token: YY.token,
        requestStatus: 2,
        expiresIn: (rY = YY.expiresIn, Number(rY.replace("s", "000"))),
        creationTime: Date.now()
      };
      var rY
    }
    async function jY(YY, rY) {
      const DY = (await rY.json()).error;
      return zY.create("request-failed", {
        requestName: YY,
        serverCode: DY.code,
        serverMessage: DY.message,
        serverStatus: DY.status
      })
    }

    function hY(YY) {
      let {
        apiKey: rY
      } = YY;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": rY
      })
    }

    function dY(YY, rY) {
      let {
        refreshToken: DY
      } = rY;
      const FY = hY(YY);
      return FY.append("Authorization", function(YY) {
        return `${cY} ${YY}`
      }(DY)), FY
    }
    async function JY(YY) {
      const rY = await YY();
      return rY.status >= 500 && rY.status < 600 ? YY() : rY
    }

    function MY(YY) {
      return new Promise((rY => {
        setTimeout(rY, YY)
      }))
    }
    const wY = /^[cdef][\w-]{21}$/;

    function bY() {
      try {
        const YY = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(YY), YY[0] = 112 + YY[0] % 16;
        const rY = function(YY) {
          const rY = (DY = YY, btoa(String.fromCharCode(...DY)).replace(/\+/g, "-").replace(/\//g, "_"));
          var DY;
          return rY.substr(0, 22)
        }(YY);
        return wY.test(rY) ? rY : ""
      } catch (YY) {
        return ""
      }
    }

    function XY(YY) {
      return `${YY.appName}!${YY.appId}`
    }
    const qY = new Map;

    function pY(YY, rY) {
      const DY = XY(YY);
      kY(DY, rY),
        function(YY, rY) {
          const DY = xY();
          DY && DY.postMessage({
            key: YY,
            fid: rY
          });
          nY()
        }(DY, rY)
    }

    function kY(YY, rY) {
      const DY = qY.get(YY);
      if (DY)
        for (const FY of DY) FY(rY)
    }
    let GY = null;

    function xY() {
      return !GY && "BroadcastChannel" in self && (GY = new BroadcastChannel("[Firebase] FID Change"), GY.onmessage = YY => {
        kY(YY.data.key, YY.data.fid)
      }), GY
    }

    function nY() {
      0 === qY.size && GY && (GY.close(), GY = null)
    }
    const PY = "firebase-installations-store";
    let UY = null;

    function LY() {
      return UY || (UY = function(YY, rY) {
        let {
          blocked: DY,
          upgrade: FY,
          blocking: AY,
          terminated: IY
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const RY = indexedDB.open(YY, rY),
          OY = WY(RY);
        return FY && RY.addEventListener("upgradeneeded", (YY => {
          FY(WY(RY.result), YY.oldVersion, YY.newVersion, WY(RY.transaction))
        })), DY && RY.addEventListener("blocked", (() => DY())), OY.then((YY => {
          IY && YY.addEventListener("close", (() => IY())), AY && YY.addEventListener("versionchange", (() => AY()))
        })).catch((() => {})), OY
      }("firebase-installations-database", 1, {
        upgrade: (YY, rY) => {
          if (0 === rY) YY.createObjectStore(PY)
        }
      })), UY
    }
    async function tY(YY, rY) {
      const DY = XY(YY),
        FY = (await LY()).transaction(PY, "readwrite"),
        AY = FY.objectStore(PY),
        IY = await AY.get(DY);
      return await AY.put(rY, DY), await FY.done, IY && IY.fid === rY.fid || pY(YY, rY.fid), rY
    }
    async function Yr(YY) {
      const rY = XY(YY),
        DY = (await LY()).transaction(PY, "readwrite");
      await DY.objectStore(PY).delete(rY), await DY.done
    }
    async function rr(YY, rY) {
      const DY = XY(YY),
        FY = (await LY()).transaction(PY, "readwrite"),
        AY = FY.objectStore(PY),
        IY = await AY.get(DY),
        RY = rY(IY);
      return void 0 === RY ? await AY.delete(DY) : await AY.put(RY, DY), await FY.done, !RY || IY && IY.fid === RY.fid || pY(YY, RY.fid), RY
    }
    async function Dr(YY) {
      let rY;
      const DY = await rr(YY.appConfig, (DY => {
        const FY = function(YY) {
            const rY = YY || {
              fid: bY(),
              registrationStatus: 0
            };
            return Ir(rY)
          }(DY),
          AY = function(YY, rY) {
            if (0 === rY.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: rY,
                  registrationPromise: Promise.reject(zY.create("app-offline"))
                }
              }
              const DY = {
                  fid: rY.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                FY = async function(YY, rY) {
                  try {
                    const DY = await async function(YY, rY) {
                      let {
                        appConfig: DY,
                        heartbeatServiceProvider: FY
                      } = YY, {
                        fid: AY
                      } = rY;
                      const IY = CY(DY),
                        RY = hY(DY),
                        OY = FY.getImmediate({
                          optional: !0
                        });
                      if (OY) {
                        const YY = await OY.getHeartbeatsHeader();
                        YY && RY.append("x-firebase-client", YY)
                      }
                      const gY = {
                          fid: AY,
                          authVersion: cY,
                          appId: DY.appId,
                          sdkVersion: BY
                        },
                        aY = {
                          method: "POST",
                          headers: RY,
                          body: JSON.stringify(gY)
                        },
                        vY = await JY((() => fetch(IY, aY)));
                      if (vY.ok) {
                        const YY = await vY.json();
                        return {
                          fid: YY.fid || AY,
                          registrationStatus: 2,
                          refreshToken: YY.refreshToken,
                          authToken: fY(YY.authToken)
                        }
                      }
                      throw await jY("Create Installation", vY)
                    }(YY, rY);
                    return tY(YY.appConfig, DY)
                  } catch (DY) {
                    throw ZY(DY) && 409 === DY.customData.serverCode ? await Yr(YY.appConfig) : await tY(YY.appConfig, {
                      fid: rY.fid,
                      registrationStatus: 0
                    }), DY
                  }
                }(YY, DY);
              return {
                installationEntry: DY,
                registrationPromise: FY
              }
            }
            return 1 === rY.registrationStatus ? {
              installationEntry: rY,
              registrationPromise: Fr(YY)
            } : {
              installationEntry: rY
            }
          }(YY, FY);
        return rY = AY.registrationPromise, AY.installationEntry
      }));
      return "" === DY.fid ? {
        installationEntry: await rY
      } : {
        installationEntry: DY,
        registrationPromise: rY
      }
    }
    async function Fr(YY) {
      let rY = await Ar(YY.appConfig);
      for (; 1 === rY.registrationStatus;) await MY(100), rY = await Ar(YY.appConfig);
      if (0 === rY.registrationStatus) {
        const {
          installationEntry: rY,
          registrationPromise: DY
        } = await Dr(YY);
        return DY || rY
      }
      return rY
    }

    function Ar(YY) {
      return rr(YY, (YY => {
        if (!YY) throw zY.create("installation-not-found");
        return Ir(YY)
      }))
    }

    function Ir(YY) {
      return 1 === (rY = YY).registrationStatus && rY.registrationTime + NY < Date.now() ? {
        fid: YY.fid,
        registrationStatus: 0
      } : YY;
      var rY
    }
    async function Rr(YY, rY) {
      let {
        appConfig: DY,
        heartbeatServiceProvider: FY
      } = YY;
      const AY = function(YY, rY) {
          let {
            fid: DY
          } = rY;
          return `${CY(YY)}/${DY}/authTokens:generate`
        }(DY, rY),
        IY = dY(DY, rY),
        RY = FY.getImmediate({
          optional: !0
        });
      if (RY) {
        const YY = await RY.getHeartbeatsHeader();
        YY && IY.append("x-firebase-client", YY)
      }
      const OY = {
          installation: {
            sdkVersion: BY,
            appId: DY.appId
          }
        },
        gY = {
          method: "POST",
          headers: IY,
          body: JSON.stringify(OY)
        },
        aY = await JY((() => fetch(AY, gY)));
      if (aY.ok) {
        return fY(await aY.json())
      }
      throw await jY("Generate Auth Token", aY)
    }
    async function Or(YY) {
      let rY, DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const FY = await rr(YY.appConfig, (FY => {
        if (!ar(FY)) throw zY.create("not-registered");
        const AY = FY.authToken;
        if (!DY && function(YY) {
            return 2 === YY.requestStatus && ! function(YY) {
              const rY = Date.now();
              return rY < YY.creationTime || YY.creationTime + YY.expiresIn < rY + KY
            }(YY)
          }(AY)) return FY;
        if (1 === AY.requestStatus) return rY = async function(YY, rY) {
          let DY = await gr(YY.appConfig);
          for (; 1 === DY.authToken.requestStatus;) await MY(100), DY = await gr(YY.appConfig);
          const FY = DY.authToken;
          return 0 === FY.requestStatus ? Or(YY, rY) : FY
        }(YY, DY), FY;
        {
          if (!navigator.onLine) throw zY.create("app-offline");
          const DY = function(YY) {
            const rY = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, YY), {
              authToken: rY
            })
          }(FY);
          return rY = async function(YY, rY) {
            try {
              const DY = await Rr(YY, rY),
                FY = Object.assign(Object.assign({}, rY), {
                  authToken: DY
                });
              return await tY(YY.appConfig, FY), DY
            } catch (DY) {
              if (!ZY(DY) || 401 !== DY.customData.serverCode && 404 !== DY.customData.serverCode) {
                const DY = Object.assign(Object.assign({}, rY), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await tY(YY.appConfig, DY)
              } else await Yr(YY.appConfig);
              throw DY
            }
          }(YY, DY), DY
        }
      }));
      return rY ? await rY : FY.authToken
    }

    function gr(YY) {
      return rr(YY, (YY => {
        if (!ar(YY)) throw zY.create("not-registered");
        const rY = YY.authToken;
        return 1 === (DY = rY).requestStatus && DY.requestTime + NY < Date.now() ? Object.assign(Object.assign({}, YY), {
          authToken: {
            requestStatus: 0
          }
        }) : YY;
        var DY
      }))
    }

    function ar(YY) {
      return void 0 !== YY && 2 === YY.registrationStatus
    }
    async function vr(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const DY = YY;
      await async function(YY) {
        const {
          registrationPromise: rY
        } = await Dr(YY);
        rY && await rY
      }(DY);
      return (await Or(DY, rY)).token
    }

    function ur(YY) {
      return zY.create("missing-app-config-values", {
        valueName: YY
      })
    }
    const sr = "installations",
      ir = YY => {
        const rY = YY.getProvider("app").getImmediate(),
          DY = function(YY) {
            if (!YY || !YY.options) throw ur("App Configuration");
            if (!YY.name) throw ur("App Name");
            const rY = ["projectId", "apiKey", "appId"];
            for (const DY of rY)
              if (!YY.options[DY]) throw ur(DY);
            return {
              appName: YY.name,
              projectId: YY.options.projectId,
              apiKey: YY.options.apiKey,
              appId: YY.options.appId
            }
          }(rY);
        return {
          app: rY,
          appConfig: DY,
          heartbeatServiceProvider: (0, FY.s)(rY, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      yr = YY => {
        const rY = YY.getProvider("app").getImmediate(),
          DY = (0, FY.s)(rY, sr).getImmediate();
        return {
          getId: () => async function(YY) {
            const rY = YY,
              {
                installationEntry: DY,
                registrationPromise: FY
              } = await Dr(rY);
            return FY ? FY.catch(console.error) : Or(rY).catch(console.error), DY.fid
          }(DY),
          getToken: YY => vr(DY, YY)
        }
      };
    (0, FY.u)(new RY.e(sr, ir, "PUBLIC")), (0, FY.u)(new RY.e("installations-internal", yr, "PRIVATE")), (0, FY.R)(TY, eY), (0, FY.R)(TY, eY, "esm2017");
    const Qr = "analytics",
      or = "https://www.googletagmanager.com/gtag/js",
      Wr = new AY.f("@firebase/analytics"),
      Er = {
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
      mr = new IY.f("analytics", "Analytics", Er);

    function Vr(YY) {
      if (!YY.startsWith(or)) {
        const rY = mr.create("invalid-gtag-resource", {
          gtagURL: YY
        });
        return Wr.warn(rY.message), ""
      }
      return YY
    }

    function Sr(YY) {
      return Promise.all(YY.map((YY => YY.catch((YY => YY)))))
    }

    function lr(YY, rY) {
      const DY = function(YY, rY) {
          let DY;
          return window.trustedTypes && (DY = window.trustedTypes.createPolicy(YY, rY)), DY
        }("firebase-js-sdk-policy", {
          createScriptURL: Vr
        }),
        FY = document.createElement("script"),
        AY = `${or}?l=${YY}&id=${rY}`;
      FY.src = DY ? null === DY || void 0 === DY ? void 0 : DY.createScriptURL(AY) : AY, FY.async = !0, document.head.appendChild(FY)
    }

    function Tr(YY, rY, DY, FY) {
      return async function(AY) {
        try {
          for (var IY = arguments.length, RY = new Array(IY > 1 ? IY - 1 : 0), OY = 1; OY < IY; OY++) RY[OY - 1] = arguments[OY];
          if ("event" === AY) {
            const [FY, AY] = RY;
            await async function(YY, rY, DY, FY, AY) {
              try {
                let IY = [];
                if (AY && AY.send_to) {
                  let YY = AY.send_to;
                  Array.isArray(YY) || (YY = [YY]);
                  const FY = await Sr(DY);
                  for (const DY of YY) {
                    const YY = FY.find((YY => YY.measurementId === DY)),
                      AY = YY && rY[YY.appId];
                    if (!AY) {
                      IY = [];
                      break
                    }
                    IY.push(AY)
                  }
                }
                0 === IY.length && (IY = Object.values(rY)), await Promise.all(IY), YY("event", FY, AY || {})
              } catch (IY) {
                Wr.error(IY)
              }
            }(YY, rY, DY, FY, AY)
          } else if ("config" === AY) {
            const [AY, IY] = RY;
            await async function(YY, rY, DY, FY, AY, IY) {
              const RY = FY[AY];
              try {
                if (RY) await rY[RY];
                else {
                  const YY = (await Sr(DY)).find((YY => YY.measurementId === AY));
                  YY && await rY[YY.appId]
                }
              } catch (OY) {
                Wr.error(OY)
              }
              YY("config", AY, IY)
            }(YY, rY, DY, FY, AY, IY)
          } else if ("consent" === AY) {
            const [rY] = RY;
            YY("consent", "update", rY)
          } else if ("get" === AY) {
            const [rY, DY, FY] = RY;
            YY("get", rY, DY, FY)
          } else if ("set" === AY) {
            const [rY] = RY;
            YY("set", rY)
          } else YY(AY, ...RY)
        } catch (gY) {
          Wr.error(gY)
        }
      }
    }
    const er = new class {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = YY, this.intervalMillis = rY
      }
      getThrottleMetadata(YY) {
        return this.throttleMetadata[YY]
      }
      setThrottleMetadata(YY, rY) {
        this.throttleMetadata[YY] = rY
      }
      deleteThrottleMetadata(YY) {
        delete this.throttleMetadata[YY]
      }
    };

    function Nr(YY) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": YY
      })
    }
    async function Br(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er,
        DY = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: FY,
        apiKey: AY,
        measurementId: IY
      } = YY.options;
      if (!FY) throw mr.create("no-app-id");
      if (!AY) {
        if (IY) return {
          measurementId: IY,
          appId: FY
        };
        throw mr.create("no-api-key")
      }
      const RY = rY.getThrottleMetadata(FY) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        OY = new Kr;
      return setTimeout((async () => {
        OY.abort()
      }), void 0 !== DY ? DY : 6e4), cr({
        appId: FY,
        apiKey: AY,
        measurementId: IY
      }, RY, OY, rY)
    }
    async function cr(YY, rY, DY) {
      let {
        throttleEndTimeMillis: FY,
        backoffCount: AY
      } = rY, RY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : er;
      var OY;
      const {
        appId: gY,
        measurementId: aY
      } = YY;
      try {
        await
        function(YY, rY) {
          return new Promise(((DY, FY) => {
            const AY = Math.max(rY - Date.now(), 0),
              IY = setTimeout(DY, AY);
            YY.addEventListener((() => {
              clearTimeout(IY), FY(mr.create("fetch-throttle", {
                throttleEndTimeMillis: rY
              }))
            }))
          }))
        }(DY, FY)
      } catch (vY) {
        if (aY) return Wr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${aY} provided in the "measurementId" field in the local Firebase config. [${null===vY||void 0===vY?void 0:vY.message}]`), {
          appId: gY,
          measurementId: aY
        };
        throw vY
      }
      try {
        const rY = await async function(YY) {
          var rY;
          const {
            appId: DY,
            apiKey: FY
          } = YY, AY = {
            method: "GET",
            headers: Nr(FY)
          }, IY = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", DY), RY = await fetch(IY, AY);
          if (200 !== RY.status && 304 !== RY.status) {
            let YY = "";
            try {
              const DY = await RY.json();
              (null === (rY = DY.error) || void 0 === rY ? void 0 : rY.message) && (YY = DY.error.message)
            } catch (OY) {}
            throw mr.create("config-fetch-failed", {
              httpStatus: RY.status,
              responseMessage: YY
            })
          }
          return RY.json()
        }(YY);
        return RY.deleteThrottleMetadata(gY), rY
      } catch (vY) {
        const rY = vY;
        if (! function(YY) {
            if (!(YY instanceof IY.g) || !YY.customData) return !1;
            const rY = Number(YY.customData.httpStatus);
            return 429 === rY || 500 === rY || 503 === rY || 504 === rY
          }(rY)) {
          if (RY.deleteThrottleMetadata(gY), aY) return Wr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${aY} provided in the "measurementId" field in the local Firebase config. [${null===rY||void 0===rY?void 0:rY.message}]`), {
            appId: gY,
            measurementId: aY
          };
          throw vY
        }
        const FY = 503 === Number(null === (OY = null === rY || void 0 === rY ? void 0 : rY.customData) || void 0 === OY ? void 0 : OY.httpStatus) ? (0, IY.p)(AY, RY.intervalMillis, 30) : (0, IY.p)(AY, RY.intervalMillis),
          uY = {
            throttleEndTimeMillis: Date.now() + FY,
            backoffCount: AY + 1
          };
        return RY.setThrottleMetadata(gY, uY), Wr.debug(`Calling attemptFetch again in ${FY} millis`), cr(YY, uY, DY, RY)
      }
    }
    class Kr {
      constructor() {
        this.listeners = []
      }
      addEventListener(YY) {
        this.listeners.push(YY)
      }
      abort() {
        this.listeners.forEach((YY => YY()))
      }
    }
    let Hr, zr;

    function Zr(YY) {
      zr = YY
    }

    function Cr(YY) {
      Hr = YY
    }
    async function fr(YY, rY, DY, FY, AY, RY, OY) {
      var gY;
      const aY = Br(YY);
      aY.then((rY => {
        DY[rY.measurementId] = rY.appId, YY.options.measurementId && rY.measurementId !== YY.options.measurementId && Wr.warn(`The measurement ID in the local Firebase config (${YY.options.measurementId}) does not match the measurement ID fetched from the server (${rY.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((YY => Wr.error(YY))), rY.push(aY);
      const vY = async function() {
        if (!(0, IY.S)()) return Wr.warn(mr.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, IY.gb)()
        } catch (YY) {
          return Wr.warn(mr.create("indexeddb-unavailable", {
            errorInfo: null === YY || void 0 === YY ? void 0 : YY.toString()
          }).message), !1
        }
        return !0
      }().then((YY => YY ? FY.getId() : void 0)), [uY, sY] = await Promise.all([aY, vY]);
      (function(YY) {
        const rY = window.document.getElementsByTagName("script");
        for (const DY of Object.values(rY))
          if (DY.src && DY.src.includes(or) && DY.src.includes(YY)) return DY;
        return null
      })(RY) || lr(RY, uY.measurementId), zr && (AY("consent", "default", zr), Zr(void 0)), AY("js", new Date);
      const iY = null !== (gY = null === OY || void 0 === OY ? void 0 : OY.config) && void 0 !== gY ? gY : {};
      return iY.origin = "firebase", iY.update = !0, null != sY && (iY.firebase_id = sY), AY("config", uY.measurementId, iY), Hr && (AY("set", Hr), Cr(void 0)), uY.measurementId
    }
    class jr {
      constructor(YY) {
        this.app = YY
      }
      _delete() {
        return delete hr[this.app.options.appId], Promise.resolve()
      }
    }
    let hr = {},
      dr = [];
    const Jr = {};
    let Mr, wr, br = "dataLayer",
      Xr = "gtag",
      qr = !1;

    function pr(YY) {
      if (qr) throw mr.create("already-initialized");
      YY.dataLayerName && (br = YY.dataLayerName), YY.gtagName && (Xr = YY.gtagName)
    }

    function kr(YY, rY, DY) {
      ! function() {
        const YY = [];
        if ((0, IY.L)() && YY.push("This is a browser extension environment."), (0, IY.h)() || YY.push("Cookies are not available."), YY.length > 0) {
          const rY = YY.map(((YY, rY) => `(${rY+1}) ${YY}`)).join(" "),
            DY = mr.create("invalid-analytics-context", {
              errorInfo: rY
            });
          Wr.warn(DY.message)
        }
      }();
      const FY = YY.options.appId;
      if (!FY) throw mr.create("no-app-id");
      if (!YY.options.apiKey) {
        if (!YY.options.measurementId) throw mr.create("no-api-key");
        Wr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${YY.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != hr[FY]) throw mr.create("already-exists", {
        id: FY
      });
      if (!qr) {
        ! function(YY) {
          let rY = [];
          Array.isArray(window[YY]) ? rY = window[YY] : window[YY] = rY
        }(br);
        const {
          wrappedGtag: YY,
          gtagCore: rY
        } = function(YY, rY, DY, FY, AY) {
          let IY = function() {
            for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
            window[FY].push(arguments)
          };
          return window[AY] && "function" === typeof window[AY] && (IY = window[AY]), window[AY] = Tr(IY, YY, rY, DY), {
            gtagCore: IY,
            wrappedGtag: window[AY]
          }
        }(hr, dr, Jr, br, Xr);
        wr = YY, Mr = rY, qr = !0
      }
      hr[FY] = fr(YY, dr, Jr, rY, Mr, br, DY);
      return new jr(YY)
    }

    function Gr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FY.K)();
      YY = (0, IY.G)(YY);
      const rY = (0, FY.s)(YY, Qr);
      return rY.isInitialized() ? rY.getImmediate() : xr(YY)
    }

    function xr(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const DY = (0, FY.s)(YY, Qr);
      if (DY.isInitialized()) {
        const YY = DY.getImmediate();
        if ((0, IY.u)(rY, DY.getOptions())) return YY;
        throw mr.create("already-initialized")
      }
      return DY.initialize({
        options: rY
      })
    }
    async function nr() {
      if ((0, IY.L)()) return !1;
      if (!(0, IY.h)()) return !1;
      if (!(0, IY.S)()) return !1;
      try {
        return await (0, IY.gb)()
      } catch (YY) {
        return !1
      }
    }

    function Pr(YY, rY, DY) {
      YY = (0, IY.G)(YY), async function(YY, rY, DY, FY) {
        if (FY && FY.global) return YY("set", {
          screen_name: DY
        }), Promise.resolve();
        YY("config", await rY, {
          update: !0,
          screen_name: DY
        })
      }(wr, hr[YY.app.options.appId], rY, DY).catch((YY => Wr.error(YY)))
    }
    async function Ur(YY) {
      return YY = (0, IY.G)(YY), async function(YY, rY) {
        const DY = await rY;
        return new Promise(((rY, FY) => {
          YY("get", DY, "client_id", (YY => {
            YY || FY(mr.create("no-client-id")), rY(YY)
          }))
        }))
      }(wr, hr[YY.app.options.appId])
    }

    function Lr(YY, rY, DY) {
      YY = (0, IY.G)(YY), async function(YY, rY, DY, FY) {
        if (FY && FY.global) return YY("set", {
          user_id: DY
        }), Promise.resolve();
        YY("config", await rY, {
          update: !0,
          user_id: DY
        })
      }(wr, hr[YY.app.options.appId], rY, DY).catch((YY => Wr.error(YY)))
    }

    function tr(YY, rY, DY) {
      YY = (0, IY.G)(YY), async function(YY, rY, DY, FY) {
        if (FY && FY.global) {
          const rY = {};
          for (const YY of Object.keys(DY)) rY[`user_properties.${YY}`] = DY[YY];
          return YY("set", rY), Promise.resolve()
        }
        YY("config", await rY, {
          update: !0,
          user_properties: DY
        })
      }(wr, hr[YY.app.options.appId], rY, DY).catch((YY => Wr.error(YY)))
    }

    function YD(YY, rY) {
      YY = (0, IY.G)(YY), async function(YY, rY) {
        const DY = await YY;
        window[`ga-disable-${DY}`] = !rY
      }(hr[YY.app.options.appId], rY).catch((YY => Wr.error(YY)))
    }

    function rD(YY) {
      wr ? wr("set", YY) : Cr(YY)
    }

    function DD(YY, rY, DY, FY) {
      YY = (0, IY.G)(YY), async function(YY, rY, DY, FY, AY) {
        if (AY && AY.global) YY("event", DY, FY);
        else {
          const AY = await rY;
          YY("event", DY, Object.assign(Object.assign({}, FY), {
            send_to: AY
          }))
        }
      }(wr, hr[YY.app.options.appId], rY, DY, FY).catch((YY => Wr.error(YY)))
    }

    function FD(YY) {
      wr ? wr("consent", "update", YY) : Zr(YY)
    }
    const AD = "@firebase/analytics",
      ID = "0.10.0";
    (0, FY.u)(new RY.e(Qr, ((YY, rY) => {
      let {
        options: DY
      } = rY;
      return kr(YY.getProvider("app").getImmediate(), YY.getProvider("installations-internal").getImmediate(), DY)
    }), "PUBLIC")), (0, FY.u)(new RY.e("analytics-internal", (function(YY) {
      try {
        const rY = YY.getProvider(Qr).getImmediate();
        return {
          logEvent: (YY, DY, FY) => DD(rY, YY, DY, FY)
        }
      } catch (rY) {
        throw mr.create("interop-component-reg-failed", {
          reason: rY
        })
      }
    }), "PRIVATE")), (0, FY.R)(AD, ID), (0, FY.R)(AD, ID, "esm2017")
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);