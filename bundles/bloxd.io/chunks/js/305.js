/*! For license information please see welxxc.305.005d8c26.chunk.js.LICENSE.txt */
export const id = 305;
export const ids = [305];
export const modules = {
  42204: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      getAnalytics: () => Pw,
      getGoogleAnalyticsClientId: () => Tw,
      initializeAnalytics: () => nw,
      isSupported: () => yw,
      logEvent: () => eM,
      setAnalyticsCollectionEnabled: () => wM,
      setConsent: () => HM,
      setCurrentScreen: () => ow,
      setDefaultEventParameters: () => MM,
      setUserId: () => kw,
      setUserProperties: () => bM,
      settings: () => uw
    });
    var eb = Mb(42192),
      Hb = Mb(42202),
      pb = Mb(42199),
      Vb = Mb(42195);
    let gb, lb;
    const Lb = new WeakMap,
      Ib = new WeakMap,
      Ob = new WeakMap,
      Ub = new WeakMap,
      tb = new WeakMap;
    let Cb = {
      get(bb, wb, Mb) {
        if (bb instanceof IDBTransaction) {
          if ("done" === wb) return Ib.get(bb);
          if ("objectStoreNames" === wb) return bb.objectStoreNames || Ob.get(bb);
          if ("store" === wb) return Mb.objectStoreNames[1] ? void 0 : Mb.objectStore(Mb.objectStoreNames[0])
        }
        return Bb(bb[wb])
      },
      set: (bb, wb, Mb) => (bb[wb] = Mb, !0),
      has: (bb, wb) => bb instanceof IDBTransaction && ("done" === wb || "store" === wb) || wb in bb
    };

    function Eb(bb) {
      return bb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (lb || (lb = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(bb) ? function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return bb.apply(sb(this), Mb), Bb(Lb.get(this))
      } : function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return Bb(bb.apply(sb(this), Mb))
      } : function(wb) {
        for (var Mb = arguments.length, eb = new Array(Mb > 1 ? Mb - 1 : 0), Hb = 1; Hb < Mb; Hb++) eb[Hb - 1] = arguments[Hb];
        const pb = bb.call(sb(this), wb, ...eb);
        return Ob.set(pb, wb.sort ? wb.sort() : [wb]), Bb(pb)
      }
    }

    function Fb(bb) {
      return "function" === typeof bb ? Eb(bb) : (bb instanceof IDBTransaction && function(bb) {
        if (Ib.has(bb)) return;
        const wb = new Promise(((wb, Mb) => {
          const eb = () => {
              bb.removeEventListener("complete", Hb), bb.removeEventListener("error", pb), bb.removeEventListener("abort", pb)
            },
            Hb = () => {
              wb(), eb()
            },
            pb = () => {
              Mb(bb.error || new DOMException("AbortError", "AbortError")), eb()
            };
          bb.addEventListener("complete", Hb), bb.addEventListener("error", pb), bb.addEventListener("abort", pb)
        }));
        Ib.set(bb, wb)
      }(bb), wb = bb, (gb || (gb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((bb => wb instanceof bb)) ? new Proxy(bb, Cb) : bb);
      var wb
    }

    function Bb(bb) {
      if (bb instanceof IDBRequest) return function(bb) {
        const wb = new Promise(((wb, Mb) => {
          const eb = () => {
              bb.removeEventListener("success", Hb), bb.removeEventListener("error", pb)
            },
            Hb = () => {
              wb(Bb(bb.result)), eb()
            },
            pb = () => {
              Mb(bb.error), eb()
            };
          bb.addEventListener("success", Hb), bb.addEventListener("error", pb)
        }));
        return wb.then((wb => {
          wb instanceof IDBCursor && Lb.set(wb, bb)
        })).catch((() => {})), tb.set(wb, bb), wb
      }(bb);
      if (Ub.has(bb)) return Ub.get(bb);
      const wb = Fb(bb);
      return wb !== bb && (Ub.set(bb, wb), tb.set(wb, bb)), wb
    }
    const sb = bb => tb.get(bb);
    const mb = ["get", "getKey", "getAll", "getAllKeys", "count"],
      hb = ["put", "add", "delete", "clear"],
      zb = new Map;

    function Xb(bb, wb) {
      if (!(bb instanceof IDBDatabase) || wb in bb || "string" !== typeof wb) return;
      if (zb.get(wb)) return zb.get(wb);
      const Mb = wb.replace(/FromIndex$/, ""),
        eb = wb !== Mb,
        Hb = hb.includes(Mb);
      if (!(Mb in (eb ? IDBIndex : IDBObjectStore).prototype) || !Hb && !mb.includes(Mb)) return;
      const pb = async function(bb) {
        const wb = this.transaction(bb, Hb ? "readwrite" : "readonly");
        let pb = wb.store;
        for (var Vb = arguments.length, gb = new Array(Vb > 1 ? Vb - 1 : 0), lb = 1; lb < Vb; lb++) gb[lb - 1] = arguments[lb];
        return eb && (pb = pb.index(gb.shift())), (await Promise.all([pb[Mb](...gb), Hb && wb.done]))[0]
      };
      return zb.set(wb, pb), pb
    }
    Cb = (bb => ({
      ...bb,
      get: (wb, Mb, eb) => Xb(wb, Mb) || bb.get(wb, Mb, eb),
      has: (wb, Mb) => !!Xb(wb, Mb) || bb.has(wb, Mb)
    }))(Cb);
    const xb = "@firebase/installations",
      jb = "0.6.4",
      Kb = 1e4,
      rb = `w:${jb}`,
      Rb = "FIS_v2",
      Db = 36e5,
      cb = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Yb = new pb.f("installations", "Installations", cb);

    function Zb(bb) {
      return bb instanceof pb.j && bb.code.includes("request-failed")
    }

    function fb(bb) {
      let {
        projectId: wb
      } = bb;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${wb}/installations`
    }

    function Ab(bb) {
      return {
        token: bb.token,
        requestStatus: 2,
        expiresIn: (wb = bb.expiresIn, Number(wb.replace("s", "000"))),
        creationTime: Date.now()
      };
      var wb
    }
    async function Wb(bb, wb) {
      const Mb = (await wb.json()).error;
      return Yb.create("request-failed", {
        requestName: bb,
        serverCode: Mb.code,
        serverMessage: Mb.message,
        serverStatus: Mb.status
      })
    }

    function Jb(bb) {
      let {
        apiKey: wb
      } = bb;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": wb
      })
    }

    function Sb(bb, wb) {
      let {
        refreshToken: Mb
      } = wb;
      const eb = Jb(bb);
      return eb.append("Authorization", function(bb) {
        return `${Rb} ${bb}`
      }(Mb)), eb
    }
    async function Nb(bb) {
      const wb = await bb();
      return wb.status >= 500 && wb.status < 600 ? bb() : wb
    }

    function vb(bb) {
      return new Promise((wb => {
        setTimeout(wb, bb)
      }))
    }
    const Qb = /^[cdef][\w-]{21}$/;

    function Gb() {
      try {
        const bb = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(bb), bb[0] = 112 + bb[0] % 16;
        const wb = function(bb) {
          const wb = (Mb = bb, btoa(String.fromCharCode(...Mb)).replace(/\+/g, "-").replace(/\//g, "_"));
          var Mb;
          return wb.substr(0, 22)
        }(bb);
        return Qb.test(wb) ? wb : ""
      } catch (bb) {
        return ""
      }
    }

    function qb(bb) {
      return `${bb.appName}!${bb.appId}`
    }
    const ab = new Map;

    function ib(bb, wb) {
      const Mb = qb(bb);
      ub(Mb, wb),
        function(bb, wb) {
          const Mb = Pb();
          Mb && Mb.postMessage({
            key: bb,
            fid: wb
          });
          nb()
        }(Mb, wb)
    }

    function ub(bb, wb) {
      const Mb = ab.get(bb);
      if (Mb)
        for (const eb of Mb) eb(wb)
    }
    let db = null;

    function Pb() {
      return !db && "BroadcastChannel" in self && (db = new BroadcastChannel("[Firebase] FID Change"), db.onmessage = bb => {
        ub(bb.data.key, bb.data.fid)
      }), db
    }

    function nb() {
      0 === ab.size && db && (db.close(), db = null)
    }
    const yb = "firebase-installations-store";
    let ob = null;

    function Tb() {
      return ob || (ob = function(bb, wb) {
        let {
          blocked: Mb,
          upgrade: eb,
          blocking: Hb,
          terminated: pb
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Vb = indexedDB.open(bb, wb),
          gb = Bb(Vb);
        return eb && Vb.addEventListener("upgradeneeded", (bb => {
          eb(Bb(Vb.result), bb.oldVersion, bb.newVersion, Bb(Vb.transaction))
        })), Mb && Vb.addEventListener("blocked", (() => Mb())), gb.then((bb => {
          pb && bb.addEventListener("close", (() => pb())), Hb && bb.addEventListener("versionchange", (() => Hb()))
        })).catch((() => {})), gb
      }("firebase-installations-database", 1, {
        upgrade: (bb, wb) => {
          if (0 === wb) bb.createObjectStore(yb)
        }
      })), ob
    }
    async function kb(bb, wb) {
      const Mb = qb(bb),
        eb = (await Tb()).transaction(yb, "readwrite"),
        Hb = eb.objectStore(yb),
        pb = await Hb.get(Mb);
      return await Hb.put(wb, Mb), await eb.done, pb && pb.fid === wb.fid || ib(bb, wb.fid), wb
    }
    async function bw(bb) {
      const wb = qb(bb),
        Mb = (await Tb()).transaction(yb, "readwrite");
      await Mb.objectStore(yb).delete(wb), await Mb.done
    }
    async function ww(bb, wb) {
      const Mb = qb(bb),
        eb = (await Tb()).transaction(yb, "readwrite"),
        Hb = eb.objectStore(yb),
        pb = await Hb.get(Mb),
        Vb = wb(pb);
      return void 0 === Vb ? await Hb.delete(Mb) : await Hb.put(Vb, Mb), await eb.done, !Vb || pb && pb.fid === Vb.fid || ib(bb, Vb.fid), Vb
    }
    async function Mw(bb) {
      let wb;
      const Mb = await ww(bb.appConfig, (Mb => {
        const eb = function(bb) {
            const wb = bb || {
              fid: Gb(),
              registrationStatus: 0
            };
            return pw(wb)
          }(Mb),
          Hb = function(bb, wb) {
            if (0 === wb.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: wb,
                  registrationPromise: Promise.reject(Yb.create("app-offline"))
                }
              }
              const Mb = {
                  fid: wb.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                eb = async function(bb, wb) {
                  try {
                    const Mb = await async function(bb, wb) {
                      let {
                        appConfig: Mb,
                        heartbeatServiceProvider: eb
                      } = bb, {
                        fid: Hb
                      } = wb;
                      const pb = fb(Mb),
                        Vb = Jb(Mb),
                        gb = eb.getImmediate({
                          optional: !0
                        });
                      if (gb) {
                        const bb = await gb.getHeartbeatsHeader();
                        bb && Vb.append("x-firebase-client", bb)
                      }
                      const lb = {
                          fid: Hb,
                          authVersion: Rb,
                          appId: Mb.appId,
                          sdkVersion: rb
                        },
                        Lb = {
                          method: "POST",
                          headers: Vb,
                          body: JSON.stringify(lb)
                        },
                        Ib = await Nb((() => fetch(pb, Lb)));
                      if (Ib.ok) {
                        const bb = await Ib.json();
                        return {
                          fid: bb.fid || Hb,
                          registrationStatus: 2,
                          refreshToken: bb.refreshToken,
                          authToken: Ab(bb.authToken)
                        }
                      }
                      throw await Wb("Create Installation", Ib)
                    }(bb, wb);
                    return kb(bb.appConfig, Mb)
                  } catch (Mb) {
                    throw Zb(Mb) && 409 === Mb.customData.serverCode ? await bw(bb.appConfig) : await kb(bb.appConfig, {
                      fid: wb.fid,
                      registrationStatus: 0
                    }), Mb
                  }
                }(bb, Mb);
              return {
                installationEntry: Mb,
                registrationPromise: eb
              }
            }
            return 1 === wb.registrationStatus ? {
              installationEntry: wb,
              registrationPromise: ew(bb)
            } : {
              installationEntry: wb
            }
          }(bb, eb);
        return wb = Hb.registrationPromise, Hb.installationEntry
      }));
      return "" === Mb.fid ? {
        installationEntry: await wb
      } : {
        installationEntry: Mb,
        registrationPromise: wb
      }
    }
    async function ew(bb) {
      let wb = await Hw(bb.appConfig);
      for (; 1 === wb.registrationStatus;) await vb(100), wb = await Hw(bb.appConfig);
      if (0 === wb.registrationStatus) {
        const {
          installationEntry: wb,
          registrationPromise: Mb
        } = await Mw(bb);
        return Mb || wb
      }
      return wb
    }

    function Hw(bb) {
      return ww(bb, (bb => {
        if (!bb) throw Yb.create("installation-not-found");
        return pw(bb)
      }))
    }

    function pw(bb) {
      return 1 === (wb = bb).registrationStatus && wb.registrationTime + Kb < Date.now() ? {
        fid: bb.fid,
        registrationStatus: 0
      } : bb;
      var wb
    }
    async function Vw(bb, wb) {
      let {
        appConfig: Mb,
        heartbeatServiceProvider: eb
      } = bb;
      const Hb = function(bb, wb) {
          let {
            fid: Mb
          } = wb;
          return `${fb(bb)}/${Mb}/authTokens:generate`
        }(Mb, wb),
        pb = Sb(Mb, wb),
        Vb = eb.getImmediate({
          optional: !0
        });
      if (Vb) {
        const bb = await Vb.getHeartbeatsHeader();
        bb && pb.append("x-firebase-client", bb)
      }
      const gb = {
          installation: {
            sdkVersion: rb,
            appId: Mb.appId
          }
        },
        lb = {
          method: "POST",
          headers: pb,
          body: JSON.stringify(gb)
        },
        Lb = await Nb((() => fetch(Hb, lb)));
      if (Lb.ok) {
        return Ab(await Lb.json())
      }
      throw await Wb("Generate Auth Token", Lb)
    }
    async function gw(bb) {
      let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const eb = await ww(bb.appConfig, (eb => {
        if (!Lw(eb)) throw Yb.create("not-registered");
        const Hb = eb.authToken;
        if (!Mb && function(bb) {
            return 2 === bb.requestStatus && ! function(bb) {
              const wb = Date.now();
              return wb < bb.creationTime || bb.creationTime + bb.expiresIn < wb + Db
            }(bb)
          }(Hb)) return eb;
        if (1 === Hb.requestStatus) return wb = async function(bb, wb) {
          let Mb = await lw(bb.appConfig);
          for (; 1 === Mb.authToken.requestStatus;) await vb(100), Mb = await lw(bb.appConfig);
          const eb = Mb.authToken;
          return 0 === eb.requestStatus ? gw(bb, wb) : eb
        }(bb, Mb), eb;
        {
          if (!navigator.onLine) throw Yb.create("app-offline");
          const Mb = function(bb) {
            const wb = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, bb), {
              authToken: wb
            })
          }(eb);
          return wb = async function(bb, wb) {
            try {
              const Mb = await Vw(bb, wb),
                eb = Object.assign(Object.assign({}, wb), {
                  authToken: Mb
                });
              return await kb(bb.appConfig, eb), Mb
            } catch (Mb) {
              if (!Zb(Mb) || 401 !== Mb.customData.serverCode && 404 !== Mb.customData.serverCode) {
                const Mb = Object.assign(Object.assign({}, wb), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await kb(bb.appConfig, Mb)
              } else await bw(bb.appConfig);
              throw Mb
            }
          }(bb, Mb), Mb
        }
      }));
      return wb ? await wb : eb.authToken
    }

    function lw(bb) {
      return ww(bb, (bb => {
        if (!Lw(bb)) throw Yb.create("not-registered");
        const wb = bb.authToken;
        return 1 === (Mb = wb).requestStatus && Mb.requestTime + Kb < Date.now() ? Object.assign(Object.assign({}, bb), {
          authToken: {
            requestStatus: 0
          }
        }) : bb;
        var Mb
      }))
    }

    function Lw(bb) {
      return void 0 !== bb && 2 === bb.registrationStatus
    }
    async function Iw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Mb = bb;
      await async function(bb) {
        const {
          registrationPromise: wb
        } = await Mw(bb);
        wb && await wb
      }(Mb);
      return (await gw(Mb, wb)).token
    }

    function Ow(bb) {
      return Yb.create("missing-app-config-values", {
        valueName: bb
      })
    }
    const Uw = "installations",
      tw = bb => {
        const wb = bb.getProvider("app").getImmediate(),
          Mb = function(bb) {
            if (!bb || !bb.options) throw Ow("App Configuration");
            if (!bb.name) throw Ow("App Name");
            const wb = ["projectId", "apiKey", "appId"];
            for (const Mb of wb)
              if (!bb.options[Mb]) throw Ow(Mb);
            return {
              appName: bb.name,
              projectId: bb.options.projectId,
              apiKey: bb.options.apiKey,
              appId: bb.options.appId
            }
          }(wb);
        return {
          app: wb,
          appConfig: Mb,
          heartbeatServiceProvider: (0, eb.w)(wb, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Cw = bb => {
        const wb = bb.getProvider("app").getImmediate(),
          Mb = (0, eb.w)(wb, Uw).getImmediate();
        return {
          getId: () => async function(bb) {
            const wb = bb,
              {
                installationEntry: Mb,
                registrationPromise: eb
              } = await Mw(wb);
            return eb ? eb.catch(console.error) : gw(wb).catch(console.error), Mb.fid
          }(Mb),
          getToken: bb => Iw(Mb, bb)
        }
      };
    (0, eb.x)(new Vb.g(Uw, tw, "PUBLIC")), (0, eb.x)(new Vb.g("installations-internal", Cw, "PRIVATE")), (0, eb.K)(xb, jb), (0, eb.K)(xb, jb, "esm2017");
    const Ew = "analytics",
      Fw = "https://www.googletagmanager.com/gtag/js",
      Bw = new Hb.g("@firebase/analytics"),
      sw = {
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
      mw = new pb.f("analytics", "Analytics", sw);

    function hw(bb) {
      if (!bb.startsWith(Fw)) {
        const wb = mw.create("invalid-gtag-resource", {
          gtagURL: bb
        });
        return Bw.warn(wb.message), ""
      }
      return bb
    }

    function zw(bb) {
      return Promise.all(bb.map((bb => bb.catch((bb => bb)))))
    }

    function Xw(bb, wb) {
      const Mb = function(bb, wb) {
          let Mb;
          return window.trustedTypes && (Mb = window.trustedTypes.createPolicy(bb, wb)), Mb
        }("firebase-js-sdk-policy", {
          createScriptURL: hw
        }),
        eb = document.createElement("script"),
        Hb = `${Fw}?l=${bb}&id=${wb}`;
      eb.src = Mb ? null === Mb || void 0 === Mb ? void 0 : Mb.createScriptURL(Hb) : Hb, eb.async = !0, document.head.appendChild(eb)
    }

    function xw(bb, wb, Mb, eb) {
      return async function(Hb) {
        try {
          for (var pb = arguments.length, Vb = new Array(pb > 1 ? pb - 1 : 0), gb = 1; gb < pb; gb++) Vb[gb - 1] = arguments[gb];
          if ("event" === Hb) {
            const [eb, Hb] = Vb;
            await async function(bb, wb, Mb, eb, Hb) {
              try {
                let pb = [];
                if (Hb && Hb.send_to) {
                  let bb = Hb.send_to;
                  Array.isArray(bb) || (bb = [bb]);
                  const eb = await zw(Mb);
                  for (const Mb of bb) {
                    const bb = eb.find((bb => bb.measurementId === Mb)),
                      Hb = bb && wb[bb.appId];
                    if (!Hb) {
                      pb = [];
                      break
                    }
                    pb.push(Hb)
                  }
                }
                0 === pb.length && (pb = Object.values(wb)), await Promise.all(pb), bb("event", eb, Hb || {})
              } catch (pb) {
                Bw.error(pb)
              }
            }(bb, wb, Mb, eb, Hb)
          } else if ("config" === Hb) {
            const [Hb, pb] = Vb;
            await async function(bb, wb, Mb, eb, Hb, pb) {
              const Vb = eb[Hb];
              try {
                if (Vb) await wb[Vb];
                else {
                  const bb = (await zw(Mb)).find((bb => bb.measurementId === Hb));
                  bb && await wb[bb.appId]
                }
              } catch (gb) {
                Bw.error(gb)
              }
              bb("config", Hb, pb)
            }(bb, wb, Mb, eb, Hb, pb)
          } else if ("consent" === Hb) {
            const [wb] = Vb;
            bb("consent", "update", wb)
          } else if ("get" === Hb) {
            const [wb, Mb, eb] = Vb;
            bb("get", wb, Mb, eb)
          } else if ("set" === Hb) {
            const [wb] = Vb;
            bb("set", wb)
          } else bb(Hb, ...Vb)
        } catch (lb) {
          Bw.error(lb)
        }
      }
    }
    const jw = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = bb, this.intervalMillis = wb
      }
      getThrottleMetadata(bb) {
        return this.throttleMetadata[bb]
      }
      setThrottleMetadata(bb, wb) {
        this.throttleMetadata[bb] = wb
      }
      deleteThrottleMetadata(bb) {
        delete this.throttleMetadata[bb]
      }
    };

    function Kw(bb) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": bb
      })
    }
    async function rw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jw,
        Mb = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: eb,
        apiKey: Hb,
        measurementId: pb
      } = bb.options;
      if (!eb) throw mw.create("no-app-id");
      if (!Hb) {
        if (pb) return {
          measurementId: pb,
          appId: eb
        };
        throw mw.create("no-api-key")
      }
      const Vb = wb.getThrottleMetadata(eb) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        gb = new Dw;
      return setTimeout((async () => {
        gb.abort()
      }), void 0 !== Mb ? Mb : 6e4), Rw({
        appId: eb,
        apiKey: Hb,
        measurementId: pb
      }, Vb, gb, wb)
    }
    async function Rw(bb, wb, Mb) {
      let {
        throttleEndTimeMillis: eb,
        backoffCount: Hb
      } = wb, Vb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jw;
      var gb;
      const {
        appId: lb,
        measurementId: Lb
      } = bb;
      try {
        await
        function(bb, wb) {
          return new Promise(((Mb, eb) => {
            const Hb = Math.max(wb - Date.now(), 0),
              pb = setTimeout(Mb, Hb);
            bb.addEventListener((() => {
              clearTimeout(pb), eb(mw.create("fetch-throttle", {
                throttleEndTimeMillis: wb
              }))
            }))
          }))
        }(Mb, eb)
      } catch (Ib) {
        if (Lb) return Bw.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Lb} provided in the "measurementId" field in the local Firebase config. [${null===Ib||void 0===Ib?void 0:Ib.message}]`), {
          appId: lb,
          measurementId: Lb
        };
        throw Ib
      }
      try {
        const wb = await async function(bb) {
          var wb;
          const {
            appId: Mb,
            apiKey: eb
          } = bb, Hb = {
            method: "GET",
            headers: Kw(eb)
          }, pb = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Mb), Vb = await fetch(pb, Hb);
          if (200 !== Vb.status && 304 !== Vb.status) {
            let bb = "";
            try {
              const Mb = await Vb.json();
              (null === (wb = Mb.error) || void 0 === wb ? void 0 : wb.message) && (bb = Mb.error.message)
            } catch (gb) {}
            throw mw.create("config-fetch-failed", {
              httpStatus: Vb.status,
              responseMessage: bb
            })
          }
          return Vb.json()
        }(bb);
        return Vb.deleteThrottleMetadata(lb), wb
      } catch (Ib) {
        const wb = Ib;
        if (! function(bb) {
            if (!(bb instanceof pb.j) || !bb.customData) return !1;
            const wb = Number(bb.customData.httpStatus);
            return 429 === wb || 500 === wb || 503 === wb || 504 === wb
          }(wb)) {
          if (Vb.deleteThrottleMetadata(lb), Lb) return Bw.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Lb} provided in the "measurementId" field in the local Firebase config. [${null===wb||void 0===wb?void 0:wb.message}]`), {
            appId: lb,
            measurementId: Lb
          };
          throw Ib
        }
        const eb = 503 === Number(null === (gb = null === wb || void 0 === wb ? void 0 : wb.customData) || void 0 === gb ? void 0 : gb.httpStatus) ? (0, pb.s)(Hb, Vb.intervalMillis, 30) : (0, pb.s)(Hb, Vb.intervalMillis),
          Ob = {
            throttleEndTimeMillis: Date.now() + eb,
            backoffCount: Hb + 1
          };
        return Vb.setThrottleMetadata(lb, Ob), Bw.debug(`Calling attemptFetch again in ${eb} millis`), Rw(bb, Ob, Mb, Vb)
      }
    }
    class Dw {
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
    let Yw, Zw;

    function fw(bb) {
      Zw = bb
    }

    function Aw(bb) {
      Yw = bb
    }
    async function Ww(bb, wb, Mb, eb, Hb, Vb, gb) {
      var lb;
      const Lb = rw(bb);
      Lb.then((wb => {
        Mb[wb.measurementId] = wb.appId, bb.options.measurementId && wb.measurementId !== bb.options.measurementId && Bw.warn(`The measurement ID in the local Firebase config (${bb.options.measurementId}) does not match the measurement ID fetched from the server (${wb.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((bb => Bw.error(bb))), wb.push(Lb);
      const Ib = async function() {
        if (!(0, pb.W)()) return Bw.warn(mw.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, pb.hb)()
        } catch (bb) {
          return Bw.warn(mw.create("indexeddb-unavailable", {
            errorInfo: null === bb || void 0 === bb ? void 0 : bb.toString()
          }).message), !1
        }
        return !0
      }().then((bb => bb ? eb.getId() : void 0)), [Ob, Ub] = await Promise.all([Lb, Ib]);
      (function(bb) {
        const wb = window.document.getElementsByTagName("script");
        for (const Mb of Object.values(wb))
          if (Mb.src && Mb.src.includes(Fw) && Mb.src.includes(bb)) return Mb;
        return null
      })(Vb) || Xw(Vb, Ob.measurementId), Zw && (Hb("consent", "default", Zw), fw(void 0)), Hb("js", new Date);
      const tb = null !== (lb = null === gb || void 0 === gb ? void 0 : gb.config) && void 0 !== lb ? lb : {};
      return tb.origin = "firebase", tb.update = !0, null != Ub && (tb.firebase_id = Ub), Hb("config", Ob.measurementId, tb), Yw && (Hb("set", Yw), Aw(void 0)), Ob.measurementId
    }
    class Jw {
      constructor(bb) {
        this.app = bb
      }
      _delete() {
        return delete Sw[this.app.options.appId], Promise.resolve()
      }
    }
    let Sw = {},
      Nw = [];
    const vw = {};
    let Qw, Gw, qw = "dataLayer",
      aw = "gtag",
      iw = !1;

    function uw(bb) {
      if (iw) throw mw.create("already-initialized");
      bb.dataLayerName && (qw = bb.dataLayerName), bb.gtagName && (aw = bb.gtagName)
    }

    function dw(bb, wb, Mb) {
      ! function() {
        const bb = [];
        if ((0, pb.T)() && bb.push("This is a browser extension environment."), (0, pb.m)() || bb.push("Cookies are not available."), bb.length > 0) {
          const wb = bb.map(((bb, wb) => `(${wb+1}) ${bb}`)).join(" "),
            Mb = mw.create("invalid-analytics-context", {
              errorInfo: wb
            });
          Bw.warn(Mb.message)
        }
      }();
      const eb = bb.options.appId;
      if (!eb) throw mw.create("no-app-id");
      if (!bb.options.apiKey) {
        if (!bb.options.measurementId) throw mw.create("no-api-key");
        Bw.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${bb.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Sw[eb]) throw mw.create("already-exists", {
        id: eb
      });
      if (!iw) {
        ! function(bb) {
          let wb = [];
          Array.isArray(window[bb]) ? wb = window[bb] : window[bb] = wb
        }(qw);
        const {
          wrappedGtag: bb,
          gtagCore: wb
        } = function(bb, wb, Mb, eb, Hb) {
          let pb = function() {
            for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
            window[eb].push(arguments)
          };
          return window[Hb] && "function" === typeof window[Hb] && (pb = window[Hb]), window[Hb] = xw(pb, bb, wb, Mb), {
            gtagCore: pb,
            wrappedGtag: window[Hb]
          }
        }(Sw, Nw, vw, qw, aw);
        Gw = bb, Qw = wb, iw = !0
      }
      Sw[eb] = Ww(bb, Nw, vw, wb, Qw, qw, Mb);
      return new Jw(bb)
    }

    function Pw() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eb.E)();
      bb = (0, pb.N)(bb);
      const wb = (0, eb.w)(bb, Ew);
      return wb.isInitialized() ? wb.getImmediate() : nw(bb)
    }

    function nw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Mb = (0, eb.w)(bb, Ew);
      if (Mb.isInitialized()) {
        const bb = Mb.getImmediate();
        if ((0, pb.x)(wb, Mb.getOptions())) return bb;
        throw mw.create("already-initialized")
      }
      return Mb.initialize({
        options: wb
      })
    }
    async function yw() {
      if ((0, pb.T)()) return !1;
      if (!(0, pb.m)()) return !1;
      if (!(0, pb.W)()) return !1;
      try {
        return await (0, pb.hb)()
      } catch (bb) {
        return !1
      }
    }

    function ow(bb, wb, Mb) {
      bb = (0, pb.N)(bb), async function(bb, wb, Mb, eb) {
        if (eb && eb.global) return bb("set", {
          screen_name: Mb
        }), Promise.resolve();
        bb("config", await wb, {
          update: !0,
          screen_name: Mb
        })
      }(Gw, Sw[bb.app.options.appId], wb, Mb).catch((bb => Bw.error(bb)))
    }
    async function Tw(bb) {
      return bb = (0, pb.N)(bb), async function(bb, wb) {
        const Mb = await wb;
        return new Promise(((wb, eb) => {
          bb("get", Mb, "client_id", (bb => {
            bb || eb(mw.create("no-client-id")), wb(bb)
          }))
        }))
      }(Gw, Sw[bb.app.options.appId])
    }

    function kw(bb, wb, Mb) {
      bb = (0, pb.N)(bb), async function(bb, wb, Mb, eb) {
        if (eb && eb.global) return bb("set", {
          user_id: Mb
        }), Promise.resolve();
        bb("config", await wb, {
          update: !0,
          user_id: Mb
        })
      }(Gw, Sw[bb.app.options.appId], wb, Mb).catch((bb => Bw.error(bb)))
    }

    function bM(bb, wb, Mb) {
      bb = (0, pb.N)(bb), async function(bb, wb, Mb, eb) {
        if (eb && eb.global) {
          const wb = {};
          for (const bb of Object.keys(Mb)) wb[`user_properties.${bb}`] = Mb[bb];
          return bb("set", wb), Promise.resolve()
        }
        bb("config", await wb, {
          update: !0,
          user_properties: Mb
        })
      }(Gw, Sw[bb.app.options.appId], wb, Mb).catch((bb => Bw.error(bb)))
    }

    function wM(bb, wb) {
      bb = (0, pb.N)(bb), async function(bb, wb) {
        const Mb = await bb;
        window[`ga-disable-${Mb}`] = !wb
      }(Sw[bb.app.options.appId], wb).catch((bb => Bw.error(bb)))
    }

    function MM(bb) {
      Gw ? Gw("set", bb) : Aw(bb)
    }

    function eM(bb, wb, Mb, eb) {
      bb = (0, pb.N)(bb), async function(bb, wb, Mb, eb, Hb) {
        if (Hb && Hb.global) bb("event", Mb, eb);
        else {
          const Hb = await wb;
          bb("event", Mb, Object.assign(Object.assign({}, eb), {
            send_to: Hb
          }))
        }
      }(Gw, Sw[bb.app.options.appId], wb, Mb, eb).catch((bb => Bw.error(bb)))
    }

    function HM(bb) {
      Gw ? Gw("consent", "update", bb) : fw(bb)
    }
    const pM = "@firebase/analytics",
      VM = "0.10.0";
    (0, eb.x)(new Vb.g(Ew, ((bb, wb) => {
      let {
        options: Mb
      } = wb;
      return dw(bb.getProvider("app").getImmediate(), bb.getProvider("installations-internal").getImmediate(), Mb)
    }), "PUBLIC")), (0, eb.x)(new Vb.g("analytics-internal", (function(bb) {
      try {
        const wb = bb.getProvider(Ew).getImmediate();
        return {
          logEvent: (bb, Mb, eb) => eM(wb, bb, Mb, eb)
        }
      } catch (wb) {
        throw mw.create("interop-component-reg-failed", {
          reason: wb
        })
      }
    }), "PRIVATE")), (0, eb.K)(pM, VM), (0, eb.K)(pM, VM, "esm2017")
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);