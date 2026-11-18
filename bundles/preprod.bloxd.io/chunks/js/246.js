/*! For license information please see 7jvyee.246.96d910d2.chunk.js.LICENSE.txt */
export const id = 246;
export const ids = [246];
export const modules = {
  39037: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      getAnalytics: () => kW,
      getGoogleAnalyticsClientId: () => xW,
      initializeAnalytics: () => Nb,
      isSupported: () => zW,
      logEvent: () => WW,
      setAnalyticsCollectionEnabled: () => yU,
      setConsent: () => UW,
      setCurrentScreen: () => Ib,
      setDefaultEventParameters: () => bU,
      setUserId: () => Ab,
      setUserProperties: () => db,
      settings: () => tW
    });
    var Uy = Wy(39016),
      hy = Wy(39034),
      fy = Wy(39029),
      Zy = Wy(39025);
    let cb, Py;
    const oy = new WeakMap,
      By = new WeakMap,
      Ky = new WeakMap,
      ey = new WeakMap,
      qb = new WeakMap;
    let sy = {
      get(yb, bb, Wy) {
        if (yb instanceof IDBTransaction) {
          if ("done" === bb) return By.get(yb);
          if ("objectStoreNames" === bb) return yb.objectStoreNames || Ky.get(yb);
          if ("store" === bb) return Wy.objectStoreNames[1] ? void 0 : Wy.objectStore(Wy.objectStoreNames[0])
        }
        return ly(yb[bb])
      },
      set: (yb, bb, Wy) => (yb[bb] = Wy, !0),
      has: (yb, bb) => yb instanceof IDBTransaction && ("done" === bb || "store" === bb) || bb in yb
    };

    function Sy(yb) {
      return yb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Py || (Py = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(yb) ? function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return yb.apply(mb(this), Wy), ly(oy.get(this))
      } : function() {
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return ly(yb.apply(mb(this), Wy))
      } : function(bb) {
        for (var Wy = arguments.length, Uy = new Array(Wy > 1 ? Wy - 1 : 0), hy = 1; hy < Wy; hy++) Uy[hy - 1] = arguments[hy];
        const fy = yb.call(mb(this), bb, ...Uy);
        return Ky.set(fy, bb.sort ? bb.sort() : [bb]), ly(fy)
      }
    }

    function Ey(yb) {
      return "function" === typeof yb ? Sy(yb) : (yb instanceof IDBTransaction && function(yb) {
        if (By.has(yb)) return;
        const bb = new Promise(((bb, Wy) => {
          const Uy = () => {
              yb.removeEventListener("complete", hy), yb.removeEventListener("error", fy), yb.removeEventListener("abort", fy)
            },
            hy = () => {
              bb(), Uy()
            },
            fy = () => {
              Wy(yb.error || new DOMException("AbortError", "AbortError")), Uy()
            };
          yb.addEventListener("complete", hy), yb.addEventListener("error", fy), yb.addEventListener("abort", fy)
        }));
        By.set(yb, bb)
      }(yb), bb = yb, (cb || (cb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((yb => bb instanceof yb)) ? new Proxy(yb, sy) : yb);
      var bb
    }

    function ly(yb) {
      if (yb instanceof IDBRequest) return function(yb) {
        const bb = new Promise(((bb, Wy) => {
          const Uy = () => {
              yb.removeEventListener("success", hy), yb.removeEventListener("error", fy)
            },
            hy = () => {
              bb(ly(yb.result)), Uy()
            },
            fy = () => {
              Wy(yb.error), Uy()
            };
          yb.addEventListener("success", hy), yb.addEventListener("error", fy)
        }));
        return bb.then((bb => {
          bb instanceof IDBCursor && oy.set(bb, yb)
        })).catch((() => {})), qb.set(bb, yb), bb
      }(yb);
      if (ey.has(yb)) return ey.get(yb);
      const bb = Ey(yb);
      return bb !== yb && (ey.set(yb, bb), qb.set(bb, yb)), bb
    }
    const mb = yb => qb.get(yb);
    const Cy = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Ty = ["put", "add", "delete", "clear"],
      Vy = new Map;

    function Jy(yb, bb) {
      if (!(yb instanceof IDBDatabase) || bb in yb || "string" !== typeof bb) return;
      if (Vy.get(bb)) return Vy.get(bb);
      const Wy = bb.replace(/FromIndex$/, ""),
        Uy = bb !== Wy,
        hy = Ty.includes(Wy);
      if (!(Wy in (Uy ? IDBIndex : IDBObjectStore).prototype) || !hy && !Cy.includes(Wy)) return;
      const fy = async function(yb) {
        const bb = this.transaction(yb, hy ? "readwrite" : "readonly");
        let fy = bb.store;
        for (var Zy = arguments.length, cb = new Array(Zy > 1 ? Zy - 1 : 0), Py = 1; Py < Zy; Py++) cb[Py - 1] = arguments[Py];
        return Uy && (fy = fy.index(cb.shift())), (await Promise.all([fy[Wy](...cb), hy && bb.done]))[0]
      };
      return Vy.set(bb, fy), fy
    }
    sy = (yb => ({
      ...yb,
      get: (bb, Wy, Uy) => Jy(bb, Wy) || yb.get(bb, Wy, Uy),
      has: (bb, Wy) => !!Jy(bb, Wy) || yb.has(bb, Wy)
    }))(sy);
    const gb = "@firebase/installations",
      Gy = "0.6.4",
      Oy = 1e4,
      Ry = `w:${Gy}`,
      vb = "FIS_v2",
      ib = 36e5,
      My = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Yy = new fy.e("installations", "Installations", My);

    function Xy(yb) {
      return yb instanceof fy.i && yb.code.includes("request-failed")
    }

    function ny(yb) {
      let {
        projectId: bb
      } = yb;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${bb}/installations`
    }

    function uy(yb) {
      return {
        token: yb.token,
        requestStatus: 2,
        expiresIn: (bb = yb.expiresIn, Number(bb.replace("s", "000"))),
        creationTime: Date.now()
      };
      var bb
    }
    async function rb(yb, bb) {
      const Wy = (await bb.json()).error;
      return Yy.create("request-failed", {
        requestName: yb,
        serverCode: Wy.code,
        serverMessage: Wy.message,
        serverStatus: Wy.status
      })
    }

    function Hy(yb) {
      let {
        apiKey: bb
      } = yb;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": bb
      })
    }

    function ab(yb, bb) {
      let {
        refreshToken: Wy
      } = bb;
      const Uy = Hy(yb);
      return Uy.append("Authorization", function(yb) {
        return `${vb} ${yb}`
      }(Wy)), Uy
    }
    async function Fy(yb) {
      const bb = await yb();
      return bb.status >= 500 && bb.status < 600 ? yb() : bb
    }

    function py(yb) {
      return new Promise((bb => {
        setTimeout(bb, yb)
      }))
    }
    const Ly = /^[cdef][\w-]{21}$/;

    function Qy() {
      try {
        const yb = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(yb), yb[0] = 112 + yb[0] % 16;
        const bb = function(yb) {
          const bb = (Wy = yb, btoa(String.fromCharCode(...Wy)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Wy;
          return bb.substr(0, 22)
        }(yb);
        return Ly.test(bb) ? bb : ""
      } catch (yb) {
        return ""
      }
    }

    function jb(yb) {
      return `${yb.appName}!${yb.appId}`
    }
    const Dy = new Map;

    function tb(yb, bb) {
      const Wy = jb(yb);
      wy(Wy, bb),
        function(yb, bb) {
          const Wy = Ny();
          Wy && Wy.postMessage({
            key: yb,
            fid: bb
          });
          zb()
        }(Wy, bb)
    }

    function wy(yb, bb) {
      const Wy = Dy.get(yb);
      if (Wy)
        for (const Uy of Wy) Uy(bb)
    }
    let kb = null;

    function Ny() {
      return !kb && "BroadcastChannel" in self && (kb = new BroadcastChannel("[Firebase] FID Change"), kb.onmessage = yb => {
        wy(yb.data.key, yb.data.fid)
      }), kb
    }

    function zb() {
      0 === Dy.size && kb && (kb.close(), kb = null)
    }
    const Iy = "firebase-installations-store";
    let xb = null;

    function Ay() {
      return xb || (xb = function(yb, bb) {
        let {
          blocked: Wy,
          upgrade: Uy,
          blocking: hy,
          terminated: fy
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Zy = indexedDB.open(yb, bb),
          cb = ly(Zy);
        return Uy && Zy.addEventListener("upgradeneeded", (yb => {
          Uy(ly(Zy.result), yb.oldVersion, yb.newVersion, ly(Zy.transaction))
        })), Wy && Zy.addEventListener("blocked", (() => Wy())), cb.then((yb => {
          fy && yb.addEventListener("close", (() => fy())), hy && yb.addEventListener("versionchange", (() => hy()))
        })).catch((() => {})), cb
      }("firebase-installations-database", 1, {
        upgrade: (yb, bb) => {
          if (0 === bb) yb.createObjectStore(Iy)
        }
      })), xb
    }
    async function dy(yb, bb) {
      const Wy = jb(yb),
        Uy = (await Ay()).transaction(Iy, "readwrite"),
        hy = Uy.objectStore(Iy),
        fy = await hy.get(Wy);
      return await hy.put(bb, Wy), await Uy.done, fy && fy.fid === bb.fid || tb(yb, bb.fid), bb
    }
    async function yW(yb) {
      const bb = jb(yb),
        Wy = (await Ay()).transaction(Iy, "readwrite");
      await Wy.objectStore(Iy).delete(bb), await Wy.done
    }
    async function bW(yb, bb) {
      const Wy = jb(yb),
        Uy = (await Ay()).transaction(Iy, "readwrite"),
        hy = Uy.objectStore(Iy),
        fy = await hy.get(Wy),
        Zy = bb(fy);
      return void 0 === Zy ? await hy.delete(Wy) : await hy.put(Zy, Wy), await Uy.done, !Zy || fy && fy.fid === Zy.fid || tb(yb, Zy.fid), Zy
    }
    async function Wb(yb) {
      let bb;
      const Wy = await bW(yb.appConfig, (Wy => {
        const Uy = function(yb) {
            const bb = yb || {
              fid: Qy(),
              registrationStatus: 0
            };
            return fb(bb)
          }(Wy),
          hy = function(yb, bb) {
            if (0 === bb.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: bb,
                  registrationPromise: Promise.reject(Yy.create("app-offline"))
                }
              }
              const Wy = {
                  fid: bb.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Uy = async function(yb, bb) {
                  try {
                    const Wy = await async function(yb, bb) {
                      let {
                        appConfig: Wy,
                        heartbeatServiceProvider: Uy
                      } = yb, {
                        fid: hy
                      } = bb;
                      const fy = ny(Wy),
                        Zy = Hy(Wy),
                        cb = Uy.getImmediate({
                          optional: !0
                        });
                      if (cb) {
                        const yb = await cb.getHeartbeatsHeader();
                        yb && Zy.append("x-firebase-client", yb)
                      }
                      const Py = {
                          fid: hy,
                          authVersion: vb,
                          appId: Wy.appId,
                          sdkVersion: Ry
                        },
                        oy = {
                          method: "POST",
                          headers: Zy,
                          body: JSON.stringify(Py)
                        },
                        By = await Fy((() => fetch(fy, oy)));
                      if (By.ok) {
                        const yb = await By.json();
                        return {
                          fid: yb.fid || hy,
                          registrationStatus: 2,
                          refreshToken: yb.refreshToken,
                          authToken: uy(yb.authToken)
                        }
                      }
                      throw await rb("Create Installation", By)
                    }(yb, bb);
                    return dy(yb.appConfig, Wy)
                  } catch (Wy) {
                    throw Xy(Wy) && 409 === Wy.customData.serverCode ? await yW(yb.appConfig) : await dy(yb.appConfig, {
                      fid: bb.fid,
                      registrationStatus: 0
                    }), Wy
                  }
                }(yb, Wy);
              return {
                installationEntry: Wy,
                registrationPromise: Uy
              }
            }
            return 1 === bb.registrationStatus ? {
              installationEntry: bb,
              registrationPromise: Ub(yb)
            } : {
              installationEntry: bb
            }
          }(yb, Uy);
        return bb = hy.registrationPromise, hy.installationEntry
      }));
      return "" === Wy.fid ? {
        installationEntry: await bb
      } : {
        installationEntry: Wy,
        registrationPromise: bb
      }
    }
    async function Ub(yb) {
      let bb = await hb(yb.appConfig);
      for (; 1 === bb.registrationStatus;) await py(100), bb = await hb(yb.appConfig);
      if (0 === bb.registrationStatus) {
        const {
          installationEntry: bb,
          registrationPromise: Wy
        } = await Wb(yb);
        return Wy || bb
      }
      return bb
    }

    function hb(yb) {
      return bW(yb, (yb => {
        if (!yb) throw Yy.create("installation-not-found");
        return fb(yb)
      }))
    }

    function fb(yb) {
      return 1 === (bb = yb).registrationStatus && bb.registrationTime + Oy < Date.now() ? {
        fid: yb.fid,
        registrationStatus: 0
      } : yb;
      var bb
    }
    async function Zb(yb, bb) {
      let {
        appConfig: Wy,
        heartbeatServiceProvider: Uy
      } = yb;
      const hy = function(yb, bb) {
          let {
            fid: Wy
          } = bb;
          return `${ny(yb)}/${Wy}/authTokens:generate`
        }(Wy, bb),
        fy = ab(Wy, bb),
        Zy = Uy.getImmediate({
          optional: !0
        });
      if (Zy) {
        const yb = await Zy.getHeartbeatsHeader();
        yb && fy.append("x-firebase-client", yb)
      }
      const cb = {
          installation: {
            sdkVersion: Ry,
            appId: Wy.appId
          }
        },
        Py = {
          method: "POST",
          headers: fy,
          body: JSON.stringify(cb)
        },
        oy = await Fy((() => fetch(hy, Py)));
      if (oy.ok) {
        return uy(await oy.json())
      }
      throw await rb("Generate Auth Token", oy)
    }
    async function cW(yb) {
      let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Uy = await bW(yb.appConfig, (Uy => {
        if (!ob(Uy)) throw Yy.create("not-registered");
        const hy = Uy.authToken;
        if (!Wy && function(yb) {
            return 2 === yb.requestStatus && ! function(yb) {
              const bb = Date.now();
              return bb < yb.creationTime || yb.creationTime + yb.expiresIn < bb + ib
            }(yb)
          }(hy)) return Uy;
        if (1 === hy.requestStatus) return bb = async function(yb, bb) {
          let Wy = await Pb(yb.appConfig);
          for (; 1 === Wy.authToken.requestStatus;) await py(100), Wy = await Pb(yb.appConfig);
          const Uy = Wy.authToken;
          return 0 === Uy.requestStatus ? cW(yb, bb) : Uy
        }(yb, Wy), Uy;
        {
          if (!navigator.onLine) throw Yy.create("app-offline");
          const Wy = function(yb) {
            const bb = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, yb), {
              authToken: bb
            })
          }(Uy);
          return bb = async function(yb, bb) {
            try {
              const Wy = await Zb(yb, bb),
                Uy = Object.assign(Object.assign({}, bb), {
                  authToken: Wy
                });
              return await dy(yb.appConfig, Uy), Wy
            } catch (Wy) {
              if (!Xy(Wy) || 401 !== Wy.customData.serverCode && 404 !== Wy.customData.serverCode) {
                const Wy = Object.assign(Object.assign({}, bb), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await dy(yb.appConfig, Wy)
              } else await yW(yb.appConfig);
              throw Wy
            }
          }(yb, Wy), Wy
        }
      }));
      return bb ? await bb : Uy.authToken
    }

    function Pb(yb) {
      return bW(yb, (yb => {
        if (!ob(yb)) throw Yy.create("not-registered");
        const bb = yb.authToken;
        return 1 === (Wy = bb).requestStatus && Wy.requestTime + Oy < Date.now() ? Object.assign(Object.assign({}, yb), {
          authToken: {
            requestStatus: 0
          }
        }) : yb;
        var Wy
      }))
    }

    function ob(yb) {
      return void 0 !== yb && 2 === yb.registrationStatus
    }
    async function Bb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Wy = yb;
      await async function(yb) {
        const {
          registrationPromise: bb
        } = await Wb(yb);
        bb && await bb
      }(Wy);
      return (await cW(Wy, bb)).token
    }

    function Kb(yb) {
      return Yy.create("missing-app-config-values", {
        valueName: yb
      })
    }
    const eb = "installations",
      qW = yb => {
        const bb = yb.getProvider("app").getImmediate(),
          Wy = function(yb) {
            if (!yb || !yb.options) throw Kb("App Configuration");
            if (!yb.name) throw Kb("App Name");
            const bb = ["projectId", "apiKey", "appId"];
            for (const Wy of bb)
              if (!yb.options[Wy]) throw Kb(Wy);
            return {
              appName: yb.name,
              projectId: yb.options.projectId,
              apiKey: yb.options.apiKey,
              appId: yb.options.appId
            }
          }(bb);
        return {
          app: bb,
          appConfig: Wy,
          heartbeatServiceProvider: (0, Uy.v)(bb, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      sb = yb => {
        const bb = yb.getProvider("app").getImmediate(),
          Wy = (0, Uy.v)(bb, eb).getImmediate();
        return {
          getId: () => async function(yb) {
            const bb = yb,
              {
                installationEntry: Wy,
                registrationPromise: Uy
              } = await Wb(bb);
            return Uy ? Uy.catch(console.error) : cW(bb).catch(console.error), Wy.fid
          }(Wy),
          getToken: yb => Bb(Wy, yb)
        }
      };
    (0, Uy.z)(new Zy.i(eb, qW, "PUBLIC")), (0, Uy.z)(new Zy.i("installations-internal", sb, "PRIVATE")), (0, Uy.R)(gb, Gy), (0, Uy.R)(gb, Gy, "esm2017");
    const Sb = "analytics",
      Eb = "https://www.googletagmanager.com/gtag/js",
      lb = new hy.f("@firebase/analytics"),
      mW = {
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
      Cb = new fy.e("analytics", "Analytics", mW);

    function Tb(yb) {
      if (!yb.startsWith(Eb)) {
        const bb = Cb.create("invalid-gtag-resource", {
          gtagURL: yb
        });
        return lb.warn(bb.message), ""
      }
      return yb
    }

    function Vb(yb) {
      return Promise.all(yb.map((yb => yb.catch((yb => yb)))))
    }

    function Jb(yb, bb) {
      const Wy = function(yb, bb) {
          let Wy;
          return window.trustedTypes && (Wy = window.trustedTypes.createPolicy(yb, bb)), Wy
        }("firebase-js-sdk-policy", {
          createScriptURL: Tb
        }),
        Uy = document.createElement("script"),
        hy = `${Eb}?l=${yb}&id=${bb}`;
      Uy.src = Wy ? null === Wy || void 0 === Wy ? void 0 : Wy.createScriptURL(hy) : hy, Uy.async = !0, document.head.appendChild(Uy)
    }

    function gW(yb, bb, Wy, Uy) {
      return async function(hy) {
        try {
          for (var fy = arguments.length, Zy = new Array(fy > 1 ? fy - 1 : 0), cb = 1; cb < fy; cb++) Zy[cb - 1] = arguments[cb];
          if ("event" === hy) {
            const [Uy, hy] = Zy;
            await async function(yb, bb, Wy, Uy, hy) {
              try {
                let fy = [];
                if (hy && hy.send_to) {
                  let yb = hy.send_to;
                  Array.isArray(yb) || (yb = [yb]);
                  const Uy = await Vb(Wy);
                  for (const Wy of yb) {
                    const yb = Uy.find((yb => yb.measurementId === Wy)),
                      hy = yb && bb[yb.appId];
                    if (!hy) {
                      fy = [];
                      break
                    }
                    fy.push(hy)
                  }
                }
                0 === fy.length && (fy = Object.values(bb)), await Promise.all(fy), yb("event", Uy, hy || {})
              } catch (fy) {
                lb.error(fy)
              }
            }(yb, bb, Wy, Uy, hy)
          } else if ("config" === hy) {
            const [hy, fy] = Zy;
            await async function(yb, bb, Wy, Uy, hy, fy) {
              const Zy = Uy[hy];
              try {
                if (Zy) await bb[Zy];
                else {
                  const yb = (await Vb(Wy)).find((yb => yb.measurementId === hy));
                  yb && await bb[yb.appId]
                }
              } catch (cb) {
                lb.error(cb)
              }
              yb("config", hy, fy)
            }(yb, bb, Wy, Uy, hy, fy)
          } else if ("consent" === hy) {
            const [bb] = Zy;
            yb("consent", "update", bb)
          } else if ("get" === hy) {
            const [bb, Wy, Uy] = Zy;
            yb("get", bb, Wy, Uy)
          } else if ("set" === hy) {
            const [bb] = Zy;
            yb("set", bb)
          } else yb(hy, ...Zy)
        } catch (Py) {
          lb.error(Py)
        }
      }
    }
    const Gb = new class {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = yb, this.intervalMillis = bb
      }
      getThrottleMetadata(yb) {
        return this.throttleMetadata[yb]
      }
      setThrottleMetadata(yb, bb) {
        this.throttleMetadata[yb] = bb
      }
      deleteThrottleMetadata(yb) {
        delete this.throttleMetadata[yb]
      }
    };

    function Ob(yb) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": yb
      })
    }
    async function Rb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Gb,
        Wy = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Uy,
        apiKey: hy,
        measurementId: fy
      } = yb.options;
      if (!Uy) throw Cb.create("no-app-id");
      if (!hy) {
        if (fy) return {
          measurementId: fy,
          appId: Uy
        };
        throw Cb.create("no-api-key")
      }
      const Zy = bb.getThrottleMetadata(Uy) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        cb = new iW;
      return setTimeout((async () => {
        cb.abort()
      }), void 0 !== Wy ? Wy : 6e4), vW({
        appId: Uy,
        apiKey: hy,
        measurementId: fy
      }, Zy, cb, bb)
    }
    async function vW(yb, bb, Wy) {
      let {
        throttleEndTimeMillis: Uy,
        backoffCount: hy
      } = bb, Zy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Gb;
      var cb;
      const {
        appId: Py,
        measurementId: oy
      } = yb;
      try {
        await
        function(yb, bb) {
          return new Promise(((Wy, Uy) => {
            const hy = Math.max(bb - Date.now(), 0),
              fy = setTimeout(Wy, hy);
            yb.addEventListener((() => {
              clearTimeout(fy), Uy(Cb.create("fetch-throttle", {
                throttleEndTimeMillis: bb
              }))
            }))
          }))
        }(Wy, Uy)
      } catch (By) {
        if (oy) return lb.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${oy} provided in the "measurementId" field in the local Firebase config. [${null===By||void 0===By?void 0:By.message}]`), {
          appId: Py,
          measurementId: oy
        };
        throw By
      }
      try {
        const bb = await async function(yb) {
          var bb;
          const {
            appId: Wy,
            apiKey: Uy
          } = yb, hy = {
            method: "GET",
            headers: Ob(Uy)
          }, fy = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Wy), Zy = await fetch(fy, hy);
          if (200 !== Zy.status && 304 !== Zy.status) {
            let yb = "";
            try {
              const Wy = await Zy.json();
              (null === (bb = Wy.error) || void 0 === bb ? void 0 : bb.message) && (yb = Wy.error.message)
            } catch (cb) {}
            throw Cb.create("config-fetch-failed", {
              httpStatus: Zy.status,
              responseMessage: yb
            })
          }
          return Zy.json()
        }(yb);
        return Zy.deleteThrottleMetadata(Py), bb
      } catch (By) {
        const bb = By;
        if (! function(yb) {
            if (!(yb instanceof fy.i) || !yb.customData) return !1;
            const bb = Number(yb.customData.httpStatus);
            return 429 === bb || 500 === bb || 503 === bb || 504 === bb
          }(bb)) {
          if (Zy.deleteThrottleMetadata(Py), oy) return lb.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${oy} provided in the "measurementId" field in the local Firebase config. [${null===bb||void 0===bb?void 0:bb.message}]`), {
            appId: Py,
            measurementId: oy
          };
          throw By
        }
        const Uy = 503 === Number(null === (cb = null === bb || void 0 === bb ? void 0 : bb.customData) || void 0 === cb ? void 0 : cb.httpStatus) ? (0, fy.u)(hy, Zy.intervalMillis, 30) : (0, fy.u)(hy, Zy.intervalMillis),
          Ky = {
            throttleEndTimeMillis: Date.now() + Uy,
            backoffCount: hy + 1
          };
        return Zy.setThrottleMetadata(Py, Ky), lb.debug(`Calling attemptFetch again in ${Uy} millis`), vW(yb, Ky, Wy, Zy)
      }
    }
    class iW {
      constructor() {
        this.listeners = []
      }
      addEventListener(yb) {
        this.listeners.push(yb)
      }
      abort() {
        this.listeners.forEach((yb => yb()))
      }
    }
    let Mb, Yb;

    function Xb(yb) {
      Yb = yb
    }

    function nb(yb) {
      Mb = yb
    }
    async function ub(yb, bb, Wy, Uy, hy, Zy, cb) {
      var Py;
      const oy = Rb(yb);
      oy.then((bb => {
        Wy[bb.measurementId] = bb.appId, yb.options.measurementId && bb.measurementId !== yb.options.measurementId && lb.warn(`The measurement ID in the local Firebase config (${yb.options.measurementId}) does not match the measurement ID fetched from the server (${bb.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((yb => lb.error(yb))), bb.push(oy);
      const By = async function() {
        if (!(0, fy.S)()) return lb.warn(Cb.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, fy.gb)()
        } catch (yb) {
          return lb.warn(Cb.create("indexeddb-unavailable", {
            errorInfo: null === yb || void 0 === yb ? void 0 : yb.toString()
          }).message), !1
        }
        return !0
      }().then((yb => yb ? Uy.getId() : void 0)), [Ky, ey] = await Promise.all([oy, By]);
      (function(yb) {
        const bb = window.document.getElementsByTagName("script");
        for (const Wy of Object.values(bb))
          if (Wy.src && Wy.src.includes(Eb) && Wy.src.includes(yb)) return Wy;
        return null
      })(Zy) || Jb(Zy, Ky.measurementId), Yb && (hy("consent", "default", Yb), Xb(void 0)), hy("js", new Date);
      const qb = null !== (Py = null === cb || void 0 === cb ? void 0 : cb.config) && void 0 !== Py ? Py : {};
      return qb.origin = "firebase", qb.update = !0, null != ey && (qb.firebase_id = ey), hy("config", Ky.measurementId, qb), Mb && (hy("set", Mb), nb(void 0)), Ky.measurementId
    }
    class rW {
      constructor(yb) {
        this.app = yb
      }
      _delete() {
        return delete Hb[this.app.options.appId], Promise.resolve()
      }
    }
    let Hb = {},
      aW = [];
    const Fb = {};
    let pb, Lb, Qb = "dataLayer",
      jW = "gtag",
      Db = !1;

    function tW(yb) {
      if (Db) throw Cb.create("already-initialized");
      yb.dataLayerName && (Qb = yb.dataLayerName), yb.gtagName && (jW = yb.gtagName)
    }

    function wb(yb, bb, Wy) {
      ! function() {
        const yb = [];
        if ((0, fy.L)() && yb.push("This is a browser extension environment."), (0, fy.m)() || yb.push("Cookies are not available."), yb.length > 0) {
          const bb = yb.map(((yb, bb) => `(${bb+1}) ${yb}`)).join(" "),
            Wy = Cb.create("invalid-analytics-context", {
              errorInfo: bb
            });
          lb.warn(Wy.message)
        }
      }();
      const Uy = yb.options.appId;
      if (!Uy) throw Cb.create("no-app-id");
      if (!yb.options.apiKey) {
        if (!yb.options.measurementId) throw Cb.create("no-api-key");
        lb.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${yb.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Hb[Uy]) throw Cb.create("already-exists", {
        id: Uy
      });
      if (!Db) {
        ! function(yb) {
          let bb = [];
          Array.isArray(window[yb]) ? bb = window[yb] : window[yb] = bb
        }(Qb);
        const {
          wrappedGtag: yb,
          gtagCore: bb
        } = function(yb, bb, Wy, Uy, hy) {
          let fy = function() {
            for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
            window[Uy].push(arguments)
          };
          return window[hy] && "function" === typeof window[hy] && (fy = window[hy]), window[hy] = gW(fy, yb, bb, Wy), {
            gtagCore: fy,
            wrappedGtag: window[hy]
          }
        }(Hb, aW, Fb, Qb, jW);
        Lb = yb, pb = bb, Db = !0
      }
      Hb[Uy] = ub(yb, aW, Fb, bb, pb, Qb, Wy);
      return new rW(yb)
    }

    function kW() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Uy.L)();
      yb = (0, fy.J)(yb);
      const bb = (0, Uy.v)(yb, Sb);
      return bb.isInitialized() ? bb.getImmediate() : Nb(yb)
    }

    function Nb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Wy = (0, Uy.v)(yb, Sb);
      if (Wy.isInitialized()) {
        const yb = Wy.getImmediate();
        if ((0, fy.z)(bb, Wy.getOptions())) return yb;
        throw Cb.create("already-initialized")
      }
      return Wy.initialize({
        options: bb
      })
    }
    async function zW() {
      if ((0, fy.L)()) return !1;
      if (!(0, fy.m)()) return !1;
      if (!(0, fy.S)()) return !1;
      try {
        return await (0, fy.gb)()
      } catch (yb) {
        return !1
      }
    }

    function Ib(yb, bb, Wy) {
      yb = (0, fy.J)(yb), async function(yb, bb, Wy, Uy) {
        if (Uy && Uy.global) return yb("set", {
          screen_name: Wy
        }), Promise.resolve();
        yb("config", await bb, {
          update: !0,
          screen_name: Wy
        })
      }(Lb, Hb[yb.app.options.appId], bb, Wy).catch((yb => lb.error(yb)))
    }
    async function xW(yb) {
      return yb = (0, fy.J)(yb), async function(yb, bb) {
        const Wy = await bb;
        return new Promise(((bb, Uy) => {
          yb("get", Wy, "client_id", (yb => {
            yb || Uy(Cb.create("no-client-id")), bb(yb)
          }))
        }))
      }(Lb, Hb[yb.app.options.appId])
    }

    function Ab(yb, bb, Wy) {
      yb = (0, fy.J)(yb), async function(yb, bb, Wy, Uy) {
        if (Uy && Uy.global) return yb("set", {
          user_id: Wy
        }), Promise.resolve();
        yb("config", await bb, {
          update: !0,
          user_id: Wy
        })
      }(Lb, Hb[yb.app.options.appId], bb, Wy).catch((yb => lb.error(yb)))
    }

    function db(yb, bb, Wy) {
      yb = (0, fy.J)(yb), async function(yb, bb, Wy, Uy) {
        if (Uy && Uy.global) {
          const bb = {};
          for (const yb of Object.keys(Wy)) bb[`user_properties.${yb}`] = Wy[yb];
          return yb("set", bb), Promise.resolve()
        }
        yb("config", await bb, {
          update: !0,
          user_properties: Wy
        })
      }(Lb, Hb[yb.app.options.appId], bb, Wy).catch((yb => lb.error(yb)))
    }

    function yU(yb, bb) {
      yb = (0, fy.J)(yb), async function(yb, bb) {
        const Wy = await yb;
        window[`ga-disable-${Wy}`] = !bb
      }(Hb[yb.app.options.appId], bb).catch((yb => lb.error(yb)))
    }

    function bU(yb) {
      Lb ? Lb("set", yb) : nb(yb)
    }

    function WW(yb, bb, Wy, Uy) {
      yb = (0, fy.J)(yb), async function(yb, bb, Wy, Uy, hy) {
        if (hy && hy.global) yb("event", Wy, Uy);
        else {
          const hy = await bb;
          yb("event", Wy, Object.assign(Object.assign({}, Uy), {
            send_to: hy
          }))
        }
      }(Lb, Hb[yb.app.options.appId], bb, Wy, Uy).catch((yb => lb.error(yb)))
    }

    function UW(yb) {
      Lb ? Lb("consent", "update", yb) : Xb(yb)
    }
    const hW = "@firebase/analytics",
      fW = "0.10.0";
    (0, Uy.z)(new Zy.i(Sb, ((yb, bb) => {
      let {
        options: Wy
      } = bb;
      return wb(yb.getProvider("app").getImmediate(), yb.getProvider("installations-internal").getImmediate(), Wy)
    }), "PUBLIC")), (0, Uy.z)(new Zy.i("analytics-internal", (function(yb) {
      try {
        const bb = yb.getProvider(Sb).getImmediate();
        return {
          logEvent: (yb, Wy, Uy) => WW(bb, yb, Wy, Uy)
        }
      } catch (bb) {
        throw Cb.create("interop-component-reg-failed", {
          reason: bb
        })
      }
    }), "PRIVATE")), (0, Uy.R)(hW, fW), (0, Uy.R)(hW, fW, "esm2017")
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);