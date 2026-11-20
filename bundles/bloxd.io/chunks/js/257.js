/*! For license information please see teusab.257.19f56aa8.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39646: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      getAnalytics: () => Ca,
      getGoogleAnalyticsClientId: () => Ja,
      initializeAnalytics: () => Va,
      isSupported: () => Oa,
      logEvent: () => UU,
      setAnalyticsCollectionEnabled: () => bU,
      setConsent: () => AU,
      setCurrentScreen: () => ca,
      setDefaultEventParameters: () => aU,
      setUserId: () => na,
      setUserProperties: () => Sa,
      settings: () => sa
    });
    var Ab = Ub(39626),
      Mb = Ub(39642),
      Tb = Ub(39640),
      Eb = Ub(39631);
    let Yb, Bb;
    const eb = new WeakMap,
      vb = new WeakMap,
      Lb = new WeakMap,
      Pb = new WeakMap,
      Xb = new WeakMap;
    let jb = {
      get(bb, ab, Ub) {
        if (bb instanceof IDBTransaction) {
          if ("done" === ab) return vb.get(bb);
          if ("objectStoreNames" === ab) return bb.objectStoreNames || Lb.get(bb);
          if ("store" === ab) return Ub.objectStoreNames[1] ? void 0 : Ub.objectStore(Ub.objectStoreNames[0])
        }
        return yb(bb[ab])
      },
      set: (bb, ab, Ub) => (bb[ab] = Ub, !0),
      has: (bb, ab) => bb instanceof IDBTransaction && ("done" === ab || "store" === ab) || ab in bb
    };

    function Rb(bb) {
      return bb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Bb || (Bb = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(bb) ? function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return bb.apply(Zb(this), Ub), yb(eb.get(this))
      } : function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return yb(bb.apply(Zb(this), Ub))
      } : function(ab) {
        for (var Ub = arguments.length, Ab = new Array(Ub > 1 ? Ub - 1 : 0), Mb = 1; Mb < Ub; Mb++) Ab[Mb - 1] = arguments[Mb];
        const Tb = bb.call(Zb(this), ab, ...Ab);
        return Lb.set(Tb, ab.sort ? ab.sort() : [ab]), yb(Tb)
      }
    }

    function kb(bb) {
      return "function" === typeof bb ? Rb(bb) : (bb instanceof IDBTransaction && function(bb) {
        if (vb.has(bb)) return;
        const ab = new Promise(((ab, Ub) => {
          const Ab = () => {
              bb.removeEventListener("complete", Mb), bb.removeEventListener("error", Tb), bb.removeEventListener("abort", Tb)
            },
            Mb = () => {
              ab(), Ab()
            },
            Tb = () => {
              Ub(bb.error || new DOMException("AbortError", "AbortError")), Ab()
            };
          bb.addEventListener("complete", Mb), bb.addEventListener("error", Tb), bb.addEventListener("abort", Tb)
        }));
        vb.set(bb, ab)
      }(bb), ab = bb, (Yb || (Yb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((bb => ab instanceof bb)) ? new Proxy(bb, jb) : bb);
      var ab
    }

    function yb(bb) {
      if (bb instanceof IDBRequest) return function(bb) {
        const ab = new Promise(((ab, Ub) => {
          const Ab = () => {
              bb.removeEventListener("success", Mb), bb.removeEventListener("error", Tb)
            },
            Mb = () => {
              ab(yb(bb.result)), Ab()
            },
            Tb = () => {
              Ub(bb.error), Ab()
            };
          bb.addEventListener("success", Mb), bb.addEventListener("error", Tb)
        }));
        return ab.then((ab => {
          ab instanceof IDBCursor && eb.set(ab, bb)
        })).catch((() => {})), Xb.set(ab, bb), ab
      }(bb);
      if (Pb.has(bb)) return Pb.get(bb);
      const ab = kb(bb);
      return ab !== bb && (Pb.set(bb, ab), Xb.set(ab, bb)), ab
    }
    const Zb = bb => Xb.get(bb);
    const Db = ["get", "getKey", "getAll", "getAllKeys", "count"],
      zb = ["put", "add", "delete", "clear"],
      xb = new Map;

    function ib(bb, ab) {
      if (!(bb instanceof IDBDatabase) || ab in bb || "string" !== typeof ab) return;
      if (xb.get(ab)) return xb.get(ab);
      const Ub = ab.replace(/FromIndex$/, ""),
        Ab = ab !== Ub,
        Mb = zb.includes(Ub);
      if (!(Ub in (Ab ? IDBIndex : IDBObjectStore).prototype) || !Mb && !Db.includes(Ub)) return;
      const Tb = async function(bb) {
        const ab = this.transaction(bb, Mb ? "readwrite" : "readonly");
        let Tb = ab.store;
        for (var Eb = arguments.length, Yb = new Array(Eb > 1 ? Eb - 1 : 0), Bb = 1; Bb < Eb; Bb++) Yb[Bb - 1] = arguments[Bb];
        return Ab && (Tb = Tb.index(Yb.shift())), (await Promise.all([Tb[Ub](...Yb), Mb && ab.done]))[0]
      };
      return xb.set(ab, Tb), Tb
    }
    jb = (bb => ({
      ...bb,
      get: (ab, Ub, Ab) => ib(ab, Ub) || bb.get(ab, Ub, Ab),
      has: (ab, Ub) => !!ib(ab, Ub) || bb.has(ab, Ub)
    }))(jb);
    const fb = "@firebase/installations",
      mb = "0.6.4",
      pb = 1e4,
      Nb = `w:${mb}`,
      Wb = "FIS_v2",
      Hb = 36e5,
      Ib = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      db = new Tb.e("installations", "Installations", Ib);

    function Fb(bb) {
      return bb instanceof Tb.g && bb.code.includes("request-failed")
    }

    function hb(bb) {
      let {
        projectId: ab
      } = bb;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${ab}/installations`
    }

    function Gb(bb) {
      return {
        token: bb.token,
        requestStatus: 2,
        expiresIn: (ab = bb.expiresIn, Number(ab.replace("s", "000"))),
        creationTime: Date.now()
      };
      var ab
    }
    async function Qb(bb, ab) {
      const Ub = (await ab.json()).error;
      return db.create("request-failed", {
        requestName: bb,
        serverCode: Ub.code,
        serverMessage: Ub.message,
        serverStatus: Ub.status
      })
    }

    function qb(bb) {
      let {
        apiKey: ab
      } = bb;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": ab
      })
    }

    function ub(bb, ab) {
      let {
        refreshToken: Ub
      } = ab;
      const Ab = qb(bb);
      return Ab.append("Authorization", function(bb) {
        return `${Wb} ${bb}`
      }(Ub)), Ab
    }
    async function rb(bb) {
      const ab = await bb();
      return ab.status >= 500 && ab.status < 600 ? bb() : ab
    }

    function Kb(bb) {
      return new Promise((ab => {
        setTimeout(ab, bb)
      }))
    }
    const ob = /^[cdef][\w-]{21}$/;

    function lb() {
      try {
        const bb = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(bb), bb[0] = 112 + bb[0] % 16;
        const ab = function(bb) {
          const ab = (Ub = bb, btoa(String.fromCharCode(...Ub)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Ub;
          return ab.substr(0, 22)
        }(bb);
        return ob.test(ab) ? ab : ""
      } catch (bb) {
        return ""
      }
    }

    function tb(bb) {
      return `${bb.appName}!${bb.appId}`
    }
    const wb = new Map;

    function sb(bb, ab) {
      const Ub = tb(bb);
      gb(Ub, ab),
        function(bb, ab) {
          const Ub = Vb();
          Ub && Ub.postMessage({
            key: bb,
            fid: ab
          });
          Ob()
        }(Ub, ab)
    }

    function gb(bb, ab) {
      const Ub = wb.get(bb);
      if (Ub)
        for (const Ab of Ub) Ab(ab)
    }
    let Cb = null;

    function Vb() {
      return !Cb && "BroadcastChannel" in self && (Cb = new BroadcastChannel("[Firebase] FID Change"), Cb.onmessage = bb => {
        gb(bb.data.key, bb.data.fid)
      }), Cb
    }

    function Ob() {
      0 === wb.size && Cb && (Cb.close(), Cb = null)
    }
    const cb = "firebase-installations-store";
    let Jb = null;

    function nb() {
      return Jb || (Jb = function(bb, ab) {
        let {
          blocked: Ub,
          upgrade: Ab,
          blocking: Mb,
          terminated: Tb
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Eb = indexedDB.open(bb, ab),
          Yb = yb(Eb);
        return Ab && Eb.addEventListener("upgradeneeded", (bb => {
          Ab(yb(Eb.result), bb.oldVersion, bb.newVersion, yb(Eb.transaction))
        })), Ub && Eb.addEventListener("blocked", (() => Ub())), Yb.then((bb => {
          Tb && bb.addEventListener("close", (() => Tb())), Mb && bb.addEventListener("versionchange", (() => Mb()))
        })).catch((() => {})), Yb
      }("firebase-installations-database", 1, {
        upgrade: (bb, ab) => {
          if (0 === ab) bb.createObjectStore(cb)
        }
      })), Jb
    }
    async function Sb(bb, ab) {
      const Ub = tb(bb),
        Ab = (await nb()).transaction(cb, "readwrite"),
        Mb = Ab.objectStore(cb),
        Tb = await Mb.get(Ub);
      return await Mb.put(ab, Ub), await Ab.done, Tb && Tb.fid === ab.fid || sb(bb, ab.fid), ab
    }
    async function ba(bb) {
      const ab = tb(bb),
        Ub = (await nb()).transaction(cb, "readwrite");
      await Ub.objectStore(cb).delete(ab), await Ub.done
    }
    async function aa(bb, ab) {
      const Ub = tb(bb),
        Ab = (await nb()).transaction(cb, "readwrite"),
        Mb = Ab.objectStore(cb),
        Tb = await Mb.get(Ub),
        Eb = ab(Tb);
      return void 0 === Eb ? await Mb.delete(Ub) : await Mb.put(Eb, Ub), await Ab.done, !Eb || Tb && Tb.fid === Eb.fid || sb(bb, Eb.fid), Eb
    }
    async function Ua(bb) {
      let ab;
      const Ub = await aa(bb.appConfig, (Ub => {
        const Ab = function(bb) {
            const ab = bb || {
              fid: lb(),
              registrationStatus: 0
            };
            return Ta(ab)
          }(Ub),
          Mb = function(bb, ab) {
            if (0 === ab.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: ab,
                  registrationPromise: Promise.reject(db.create("app-offline"))
                }
              }
              const Ub = {
                  fid: ab.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Ab = async function(bb, ab) {
                  try {
                    const Ub = await async function(bb, ab) {
                      let {
                        appConfig: Ub,
                        heartbeatServiceProvider: Ab
                      } = bb, {
                        fid: Mb
                      } = ab;
                      const Tb = hb(Ub),
                        Eb = qb(Ub),
                        Yb = Ab.getImmediate({
                          optional: !0
                        });
                      if (Yb) {
                        const bb = await Yb.getHeartbeatsHeader();
                        bb && Eb.append("x-firebase-client", bb)
                      }
                      const Bb = {
                          fid: Mb,
                          authVersion: Wb,
                          appId: Ub.appId,
                          sdkVersion: Nb
                        },
                        eb = {
                          method: "POST",
                          headers: Eb,
                          body: JSON.stringify(Bb)
                        },
                        vb = await rb((() => fetch(Tb, eb)));
                      if (vb.ok) {
                        const bb = await vb.json();
                        return {
                          fid: bb.fid || Mb,
                          registrationStatus: 2,
                          refreshToken: bb.refreshToken,
                          authToken: Gb(bb.authToken)
                        }
                      }
                      throw await Qb("Create Installation", vb)
                    }(bb, ab);
                    return Sb(bb.appConfig, Ub)
                  } catch (Ub) {
                    throw Fb(Ub) && 409 === Ub.customData.serverCode ? await ba(bb.appConfig) : await Sb(bb.appConfig, {
                      fid: ab.fid,
                      registrationStatus: 0
                    }), Ub
                  }
                }(bb, Ub);
              return {
                installationEntry: Ub,
                registrationPromise: Ab
              }
            }
            return 1 === ab.registrationStatus ? {
              installationEntry: ab,
              registrationPromise: Aa(bb)
            } : {
              installationEntry: ab
            }
          }(bb, Ab);
        return ab = Mb.registrationPromise, Mb.installationEntry
      }));
      return "" === Ub.fid ? {
        installationEntry: await ab
      } : {
        installationEntry: Ub,
        registrationPromise: ab
      }
    }
    async function Aa(bb) {
      let ab = await Ma(bb.appConfig);
      for (; 1 === ab.registrationStatus;) await Kb(100), ab = await Ma(bb.appConfig);
      if (0 === ab.registrationStatus) {
        const {
          installationEntry: ab,
          registrationPromise: Ub
        } = await Ua(bb);
        return Ub || ab
      }
      return ab
    }

    function Ma(bb) {
      return aa(bb, (bb => {
        if (!bb) throw db.create("installation-not-found");
        return Ta(bb)
      }))
    }

    function Ta(bb) {
      return 1 === (ab = bb).registrationStatus && ab.registrationTime + pb < Date.now() ? {
        fid: bb.fid,
        registrationStatus: 0
      } : bb;
      var ab
    }
    async function Ea(bb, ab) {
      let {
        appConfig: Ub,
        heartbeatServiceProvider: Ab
      } = bb;
      const Mb = function(bb, ab) {
          let {
            fid: Ub
          } = ab;
          return `${hb(bb)}/${Ub}/authTokens:generate`
        }(Ub, ab),
        Tb = ub(Ub, ab),
        Eb = Ab.getImmediate({
          optional: !0
        });
      if (Eb) {
        const bb = await Eb.getHeartbeatsHeader();
        bb && Tb.append("x-firebase-client", bb)
      }
      const Yb = {
          installation: {
            sdkVersion: Nb,
            appId: Ub.appId
          }
        },
        Bb = {
          method: "POST",
          headers: Tb,
          body: JSON.stringify(Yb)
        },
        eb = await rb((() => fetch(Mb, Bb)));
      if (eb.ok) {
        return Gb(await eb.json())
      }
      throw await Qb("Generate Auth Token", eb)
    }
    async function Ya(bb) {
      let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ab = await aa(bb.appConfig, (Ab => {
        if (!ea(Ab)) throw db.create("not-registered");
        const Mb = Ab.authToken;
        if (!Ub && function(bb) {
            return 2 === bb.requestStatus && ! function(bb) {
              const ab = Date.now();
              return ab < bb.creationTime || bb.creationTime + bb.expiresIn < ab + Hb
            }(bb)
          }(Mb)) return Ab;
        if (1 === Mb.requestStatus) return ab = async function(bb, ab) {
          let Ub = await Ba(bb.appConfig);
          for (; 1 === Ub.authToken.requestStatus;) await Kb(100), Ub = await Ba(bb.appConfig);
          const Ab = Ub.authToken;
          return 0 === Ab.requestStatus ? Ya(bb, ab) : Ab
        }(bb, Ub), Ab;
        {
          if (!navigator.onLine) throw db.create("app-offline");
          const Ub = function(bb) {
            const ab = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, bb), {
              authToken: ab
            })
          }(Ab);
          return ab = async function(bb, ab) {
            try {
              const Ub = await Ea(bb, ab),
                Ab = Object.assign(Object.assign({}, ab), {
                  authToken: Ub
                });
              return await Sb(bb.appConfig, Ab), Ub
            } catch (Ub) {
              if (!Fb(Ub) || 401 !== Ub.customData.serverCode && 404 !== Ub.customData.serverCode) {
                const Ub = Object.assign(Object.assign({}, ab), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await Sb(bb.appConfig, Ub)
              } else await ba(bb.appConfig);
              throw Ub
            }
          }(bb, Ub), Ub
        }
      }));
      return ab ? await ab : Ab.authToken
    }

    function Ba(bb) {
      return aa(bb, (bb => {
        if (!ea(bb)) throw db.create("not-registered");
        const ab = bb.authToken;
        return 1 === (Ub = ab).requestStatus && Ub.requestTime + pb < Date.now() ? Object.assign(Object.assign({}, bb), {
          authToken: {
            requestStatus: 0
          }
        }) : bb;
        var Ub
      }))
    }

    function ea(bb) {
      return void 0 !== bb && 2 === bb.registrationStatus
    }
    async function va(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ub = bb;
      await async function(bb) {
        const {
          registrationPromise: ab
        } = await Ua(bb);
        ab && await ab
      }(Ub);
      return (await Ya(Ub, ab)).token
    }

    function La(bb) {
      return db.create("missing-app-config-values", {
        valueName: bb
      })
    }
    const Pa = "installations",
      Xa = bb => {
        const ab = bb.getProvider("app").getImmediate(),
          Ub = function(bb) {
            if (!bb || !bb.options) throw La("App Configuration");
            if (!bb.name) throw La("App Name");
            const ab = ["projectId", "apiKey", "appId"];
            for (const Ub of ab)
              if (!bb.options[Ub]) throw La(Ub);
            return {
              appName: bb.name,
              projectId: bb.options.projectId,
              apiKey: bb.options.apiKey,
              appId: bb.options.appId
            }
          }(ab);
        return {
          app: ab,
          appConfig: Ub,
          heartbeatServiceProvider: (0, Ab.r)(ab, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      ja = bb => {
        const ab = bb.getProvider("app").getImmediate(),
          Ub = (0, Ab.r)(ab, Pa).getImmediate();
        return {
          getId: () => async function(bb) {
            const ab = bb,
              {
                installationEntry: Ub,
                registrationPromise: Ab
              } = await Ua(ab);
            return Ab ? Ab.catch(console.error) : Ya(ab).catch(console.error), Ub.fid
          }(Ub),
          getToken: bb => va(Ub, bb)
        }
      };
    (0, Ab.u)(new Eb.e(Pa, Xa, "PUBLIC")), (0, Ab.u)(new Eb.e("installations-internal", ja, "PRIVATE")), (0, Ab.K)(fb, mb), (0, Ab.K)(fb, mb, "esm2017");
    const Ra = "analytics",
      ka = "https://www.googletagmanager.com/gtag/js",
      ya = new Mb.e("@firebase/analytics"),
      Za = {
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
      Da = new Tb.e("analytics", "Analytics", Za);

    function za(bb) {
      if (!bb.startsWith(ka)) {
        const ab = Da.create("invalid-gtag-resource", {
          gtagURL: bb
        });
        return ya.warn(ab.message), ""
      }
      return bb
    }

    function xa(bb) {
      return Promise.all(bb.map((bb => bb.catch((bb => bb)))))
    }

    function ia(bb, ab) {
      const Ub = function(bb, ab) {
          let Ub;
          return window.trustedTypes && (Ub = window.trustedTypes.createPolicy(bb, ab)), Ub
        }("firebase-js-sdk-policy", {
          createScriptURL: za
        }),
        Ab = document.createElement("script"),
        Mb = `${ka}?l=${bb}&id=${ab}`;
      Ab.src = Ub ? null === Ub || void 0 === Ub ? void 0 : Ub.createScriptURL(Mb) : Mb, Ab.async = !0, document.head.appendChild(Ab)
    }

    function fa(bb, ab, Ub, Ab) {
      return async function(Mb) {
        try {
          for (var Tb = arguments.length, Eb = new Array(Tb > 1 ? Tb - 1 : 0), Yb = 1; Yb < Tb; Yb++) Eb[Yb - 1] = arguments[Yb];
          if ("event" === Mb) {
            const [Ab, Mb] = Eb;
            await async function(bb, ab, Ub, Ab, Mb) {
              try {
                let Tb = [];
                if (Mb && Mb.send_to) {
                  let bb = Mb.send_to;
                  Array.isArray(bb) || (bb = [bb]);
                  const Ab = await xa(Ub);
                  for (const Ub of bb) {
                    const bb = Ab.find((bb => bb.measurementId === Ub)),
                      Mb = bb && ab[bb.appId];
                    if (!Mb) {
                      Tb = [];
                      break
                    }
                    Tb.push(Mb)
                  }
                }
                0 === Tb.length && (Tb = Object.values(ab)), await Promise.all(Tb), bb("event", Ab, Mb || {})
              } catch (Tb) {
                ya.error(Tb)
              }
            }(bb, ab, Ub, Ab, Mb)
          } else if ("config" === Mb) {
            const [Mb, Tb] = Eb;
            await async function(bb, ab, Ub, Ab, Mb, Tb) {
              const Eb = Ab[Mb];
              try {
                if (Eb) await ab[Eb];
                else {
                  const bb = (await xa(Ub)).find((bb => bb.measurementId === Mb));
                  bb && await ab[bb.appId]
                }
              } catch (Yb) {
                ya.error(Yb)
              }
              bb("config", Mb, Tb)
            }(bb, ab, Ub, Ab, Mb, Tb)
          } else if ("consent" === Mb) {
            const [ab] = Eb;
            bb("consent", "update", ab)
          } else if ("get" === Mb) {
            const [ab, Ub, Ab] = Eb;
            bb("get", ab, Ub, Ab)
          } else if ("set" === Mb) {
            const [ab] = Eb;
            bb("set", ab)
          } else bb(Mb, ...Eb)
        } catch (Bb) {
          ya.error(Bb)
        }
      }
    }
    const ma = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = bb, this.intervalMillis = ab
      }
      getThrottleMetadata(bb) {
        return this.throttleMetadata[bb]
      }
      setThrottleMetadata(bb, ab) {
        this.throttleMetadata[bb] = ab
      }
      deleteThrottleMetadata(bb) {
        delete this.throttleMetadata[bb]
      }
    };

    function pa(bb) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": bb
      })
    }
    async function Na(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ma,
        Ub = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Ab,
        apiKey: Mb,
        measurementId: Tb
      } = bb.options;
      if (!Ab) throw Da.create("no-app-id");
      if (!Mb) {
        if (Tb) return {
          measurementId: Tb,
          appId: Ab
        };
        throw Da.create("no-api-key")
      }
      const Eb = ab.getThrottleMetadata(Ab) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Yb = new Ha;
      return setTimeout((async () => {
        Yb.abort()
      }), void 0 !== Ub ? Ub : 6e4), Wa({
        appId: Ab,
        apiKey: Mb,
        measurementId: Tb
      }, Eb, Yb, ab)
    }
    async function Wa(bb, ab, Ub) {
      let {
        throttleEndTimeMillis: Ab,
        backoffCount: Mb
      } = ab, Eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ma;
      var Yb;
      const {
        appId: Bb,
        measurementId: eb
      } = bb;
      try {
        await
        function(bb, ab) {
          return new Promise(((Ub, Ab) => {
            const Mb = Math.max(ab - Date.now(), 0),
              Tb = setTimeout(Ub, Mb);
            bb.addEventListener((() => {
              clearTimeout(Tb), Ab(Da.create("fetch-throttle", {
                throttleEndTimeMillis: ab
              }))
            }))
          }))
        }(Ub, Ab)
      } catch (vb) {
        if (eb) return ya.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${eb} provided in the "measurementId" field in the local Firebase config. [${null===vb||void 0===vb?void 0:vb.message}]`), {
          appId: Bb,
          measurementId: eb
        };
        throw vb
      }
      try {
        const ab = await async function(bb) {
          var ab;
          const {
            appId: Ub,
            apiKey: Ab
          } = bb, Mb = {
            method: "GET",
            headers: pa(Ab)
          }, Tb = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Ub), Eb = await fetch(Tb, Mb);
          if (200 !== Eb.status && 304 !== Eb.status) {
            let bb = "";
            try {
              const Ub = await Eb.json();
              (null === (ab = Ub.error) || void 0 === ab ? void 0 : ab.message) && (bb = Ub.error.message)
            } catch (Yb) {}
            throw Da.create("config-fetch-failed", {
              httpStatus: Eb.status,
              responseMessage: bb
            })
          }
          return Eb.json()
        }(bb);
        return Eb.deleteThrottleMetadata(Bb), ab
      } catch (vb) {
        const ab = vb;
        if (! function(bb) {
            if (!(bb instanceof Tb.g) || !bb.customData) return !1;
            const ab = Number(bb.customData.httpStatus);
            return 429 === ab || 500 === ab || 503 === ab || 504 === ab
          }(ab)) {
          if (Eb.deleteThrottleMetadata(Bb), eb) return ya.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${eb} provided in the "measurementId" field in the local Firebase config. [${null===ab||void 0===ab?void 0:ab.message}]`), {
            appId: Bb,
            measurementId: eb
          };
          throw vb
        }
        const Ab = 503 === Number(null === (Yb = null === ab || void 0 === ab ? void 0 : ab.customData) || void 0 === Yb ? void 0 : Yb.httpStatus) ? (0, Tb.q)(Mb, Eb.intervalMillis, 30) : (0, Tb.q)(Mb, Eb.intervalMillis),
          Lb = {
            throttleEndTimeMillis: Date.now() + Ab,
            backoffCount: Mb + 1
          };
        return Eb.setThrottleMetadata(Bb, Lb), ya.debug(`Calling attemptFetch again in ${Ab} millis`), Wa(bb, Lb, Ub, Eb)
      }
    }
    class Ha {
      constructor() {
        this.listeners = []
      }
      addEventListener(bb) {
        this.listeners.push(bb)
      }
      abort() {
        this.listeners.forEach((bb => bb()))
      }
    }
    let Ia, da;

    function Fa(bb) {
      da = bb
    }

    function ha(bb) {
      Ia = bb
    }
    async function Ga(bb, ab, Ub, Ab, Mb, Eb, Yb) {
      var Bb;
      const eb = Na(bb);
      eb.then((ab => {
        Ub[ab.measurementId] = ab.appId, bb.options.measurementId && ab.measurementId !== bb.options.measurementId && ya.warn(`The measurement ID in the local Firebase config (${bb.options.measurementId}) does not match the measurement ID fetched from the server (${ab.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((bb => ya.error(bb))), ab.push(eb);
      const vb = async function() {
        if (!(0, Tb.U)()) return ya.warn(Da.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Tb.ab)()
        } catch (bb) {
          return ya.warn(Da.create("indexeddb-unavailable", {
            errorInfo: null === bb || void 0 === bb ? void 0 : bb.toString()
          }).message), !1
        }
        return !0
      }().then((bb => bb ? Ab.getId() : void 0)), [Lb, Pb] = await Promise.all([eb, vb]);
      (function(bb) {
        const ab = window.document.getElementsByTagName("script");
        for (const Ub of Object.values(ab))
          if (Ub.src && Ub.src.includes(ka) && Ub.src.includes(bb)) return Ub;
        return null
      })(Eb) || ia(Eb, Lb.measurementId), da && (Mb("consent", "default", da), Fa(void 0)), Mb("js", new Date);
      const Xb = null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb.config) && void 0 !== Bb ? Bb : {};
      return Xb.origin = "firebase", Xb.update = !0, null != Pb && (Xb.firebase_id = Pb), Mb("config", Lb.measurementId, Xb), Ia && (Mb("set", Ia), ha(void 0)), Lb.measurementId
    }
    class Qa {
      constructor(bb) {
        this.app = bb
      }
      _delete() {
        return delete qa[this.app.options.appId], Promise.resolve()
      }
    }
    let qa = {},
      ua = [];
    const ra = {};
    let Ka, oa, la = "dataLayer",
      ta = "gtag",
      wa = !1;

    function sa(bb) {
      if (wa) throw Da.create("already-initialized");
      bb.dataLayerName && (la = bb.dataLayerName), bb.gtagName && (ta = bb.gtagName)
    }

    function ga(bb, ab, Ub) {
      ! function() {
        const bb = [];
        if ((0, Tb.P)() && bb.push("This is a browser extension environment."), (0, Tb.k)() || bb.push("Cookies are not available."), bb.length > 0) {
          const ab = bb.map(((bb, ab) => `(${ab+1}) ${bb}`)).join(" "),
            Ub = Da.create("invalid-analytics-context", {
              errorInfo: ab
            });
          ya.warn(Ub.message)
        }
      }();
      const Ab = bb.options.appId;
      if (!Ab) throw Da.create("no-app-id");
      if (!bb.options.apiKey) {
        if (!bb.options.measurementId) throw Da.create("no-api-key");
        ya.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${bb.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != qa[Ab]) throw Da.create("already-exists", {
        id: Ab
      });
      if (!wa) {
        ! function(bb) {
          let ab = [];
          Array.isArray(window[bb]) ? ab = window[bb] : window[bb] = ab
        }(la);
        const {
          wrappedGtag: bb,
          gtagCore: ab
        } = function(bb, ab, Ub, Ab, Mb) {
          let Tb = function() {
            for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
            window[Ab].push(arguments)
          };
          return window[Mb] && "function" === typeof window[Mb] && (Tb = window[Mb]), window[Mb] = fa(Tb, bb, ab, Ub), {
            gtagCore: Tb,
            wrappedGtag: window[Mb]
          }
        }(qa, ua, ra, la, ta);
        oa = bb, Ka = ab, wa = !0
      }
      qa[Ab] = Ga(bb, ua, ra, ab, Ka, la, Ub);
      return new Qa(bb)
    }

    function Ca() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ab.B)();
      bb = (0, Tb.I)(bb);
      const ab = (0, Ab.r)(bb, Ra);
      return ab.isInitialized() ? ab.getImmediate() : Va(bb)
    }

    function Va(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ub = (0, Ab.r)(bb, Ra);
      if (Ub.isInitialized()) {
        const bb = Ub.getImmediate();
        if ((0, Tb.u)(ab, Ub.getOptions())) return bb;
        throw Da.create("already-initialized")
      }
      return Ub.initialize({
        options: ab
      })
    }
    async function Oa() {
      if ((0, Tb.P)()) return !1;
      if (!(0, Tb.k)()) return !1;
      if (!(0, Tb.U)()) return !1;
      try {
        return await (0, Tb.ab)()
      } catch (bb) {
        return !1
      }
    }

    function ca(bb, ab, Ub) {
      bb = (0, Tb.I)(bb), async function(bb, ab, Ub, Ab) {
        if (Ab && Ab.global) return bb("set", {
          screen_name: Ub
        }), Promise.resolve();
        bb("config", await ab, {
          update: !0,
          screen_name: Ub
        })
      }(oa, qa[bb.app.options.appId], ab, Ub).catch((bb => ya.error(bb)))
    }
    async function Ja(bb) {
      return bb = (0, Tb.I)(bb), async function(bb, ab) {
        const Ub = await ab;
        return new Promise(((ab, Ab) => {
          bb("get", Ub, "client_id", (bb => {
            bb || Ab(Da.create("no-client-id")), ab(bb)
          }))
        }))
      }(oa, qa[bb.app.options.appId])
    }

    function na(bb, ab, Ub) {
      bb = (0, Tb.I)(bb), async function(bb, ab, Ub, Ab) {
        if (Ab && Ab.global) return bb("set", {
          user_id: Ub
        }), Promise.resolve();
        bb("config", await ab, {
          update: !0,
          user_id: Ub
        })
      }(oa, qa[bb.app.options.appId], ab, Ub).catch((bb => ya.error(bb)))
    }

    function Sa(bb, ab, Ub) {
      bb = (0, Tb.I)(bb), async function(bb, ab, Ub, Ab) {
        if (Ab && Ab.global) {
          const ab = {};
          for (const bb of Object.keys(Ub)) ab[`user_properties.${bb}`] = Ub[bb];
          return bb("set", ab), Promise.resolve()
        }
        bb("config", await ab, {
          update: !0,
          user_properties: Ub
        })
      }(oa, qa[bb.app.options.appId], ab, Ub).catch((bb => ya.error(bb)))
    }

    function bU(bb, ab) {
      bb = (0, Tb.I)(bb), async function(bb, ab) {
        const Ub = await bb;
        window[`ga-disable-${Ub}`] = !ab
      }(qa[bb.app.options.appId], ab).catch((bb => ya.error(bb)))
    }

    function aU(bb) {
      oa ? oa("set", bb) : ha(bb)
    }

    function UU(bb, ab, Ub, Ab) {
      bb = (0, Tb.I)(bb), async function(bb, ab, Ub, Ab, Mb) {
        if (Mb && Mb.global) bb("event", Ub, Ab);
        else {
          const Mb = await ab;
          bb("event", Ub, Object.assign(Object.assign({}, Ab), {
            send_to: Mb
          }))
        }
      }(oa, qa[bb.app.options.appId], ab, Ub, Ab).catch((bb => ya.error(bb)))
    }

    function AU(bb) {
      oa ? oa("consent", "update", bb) : Fa(bb)
    }
    const MU = "@firebase/analytics",
      TU = "0.10.0";
    (0, Ab.u)(new Eb.e(Ra, ((bb, ab) => {
      let {
        options: Ub
      } = ab;
      return ga(bb.getProvider("app").getImmediate(), bb.getProvider("installations-internal").getImmediate(), Ub)
    }), "PUBLIC")), (0, Ab.u)(new Eb.e("analytics-internal", (function(bb) {
      try {
        const ab = bb.getProvider(Ra).getImmediate();
        return {
          logEvent: (bb, Ub, Ab) => UU(ab, bb, Ub, Ab)
        }
      } catch (ab) {
        throw Da.create("interop-component-reg-failed", {
          reason: ab
        })
      }
    }), "PRIVATE")), (0, Ab.K)(MU, TU), (0, Ab.K)(MU, TU, "esm2017")
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);