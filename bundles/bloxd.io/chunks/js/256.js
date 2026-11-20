/*! For license information please see teusab.256.aeaa89e4.chunk.js.LICENSE.txt */
export const id = 256;
export const ids = [256];
export const modules = {
  39640: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => Hb,
      D: () => vb,
      F: () => Pb,
      I: () => ob,
      M: () => jb,
      P: () => kb,
      R: () => pb,
      S: () => Zb,
      U: () => Db,
      Y: () => Rb,
      Z: () => yb,
      _: () => Ib,
      ab: () => zb,
      d: () => Xb,
      e: () => fb,
      g: () => ib,
      k: () => xb,
      m: () => Yb,
      o: () => Eb,
      q: () => Kb,
      s: () => Fb,
      u: () => Nb,
      y: () => db,
      z: () => Lb
    });
    const Ab = function(bb) {
        const ab = [];
        let Ub = 0;
        for (let Ab = 0; Ab < bb.length; Ab++) {
          let Mb = bb.charCodeAt(Ab);
          Mb < 128 ? ab[Ub++] = Mb : Mb < 2048 ? (ab[Ub++] = Mb >> 6 | 192, ab[Ub++] = 63 & Mb | 128) : 55296 === (64512 & Mb) && Ab + 1 < bb.length && 56320 === (64512 & bb.charCodeAt(Ab + 1)) ? (Mb = 65536 + ((1023 & Mb) << 10) + (1023 & bb.charCodeAt(++Ab)), ab[Ub++] = Mb >> 18 | 240, ab[Ub++] = Mb >> 12 & 63 | 128, ab[Ub++] = Mb >> 6 & 63 | 128, ab[Ub++] = 63 & Mb | 128) : (ab[Ub++] = Mb >> 12 | 224, ab[Ub++] = Mb >> 6 & 63 | 128, ab[Ub++] = 63 & Mb | 128)
        }
        return ab
      },
      Mb = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" === typeof atob,
        encodeByteArray(bb, ab) {
          if (!Array.isArray(bb)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const Ub = ab ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            Ab = [];
          for (let Mb = 0; Mb < bb.length; Mb += 3) {
            const ab = bb[Mb],
              Tb = Mb + 1 < bb.length,
              Eb = Tb ? bb[Mb + 1] : 0,
              Yb = Mb + 2 < bb.length,
              Bb = Yb ? bb[Mb + 2] : 0,
              eb = ab >> 2,
              vb = (3 & ab) << 4 | Eb >> 4;
            let Lb = (15 & Eb) << 2 | Bb >> 6,
              Pb = 63 & Bb;
            Yb || (Pb = 64, Tb || (Lb = 64)), Ab.push(Ub[eb], Ub[vb], Ub[Lb], Ub[Pb])
          }
          return Ab.join("")
        },
        encodeString(bb, ab) {
          return this.HAS_NATIVE_SUPPORT && !ab ? btoa(bb) : this.encodeByteArray(Ab(bb), ab)
        },
        decodeString(bb, ab) {
          return this.HAS_NATIVE_SUPPORT && !ab ? atob(bb) : function(bb) {
            const ab = [];
            let Ub = 0,
              Ab = 0;
            for (; Ub < bb.length;) {
              const Mb = bb[Ub++];
              if (Mb < 128) ab[Ab++] = String.fromCharCode(Mb);
              else if (Mb > 191 && Mb < 224) {
                const Tb = bb[Ub++];
                ab[Ab++] = String.fromCharCode((31 & Mb) << 6 | 63 & Tb)
              } else if (Mb > 239 && Mb < 365) {
                const Tb = ((7 & Mb) << 18 | (63 & bb[Ub++]) << 12 | (63 & bb[Ub++]) << 6 | 63 & bb[Ub++]) - 65536;
                ab[Ab++] = String.fromCharCode(55296 + (Tb >> 10)), ab[Ab++] = String.fromCharCode(56320 + (1023 & Tb))
              } else {
                const Tb = bb[Ub++],
                  Eb = bb[Ub++];
                ab[Ab++] = String.fromCharCode((15 & Mb) << 12 | (63 & Tb) << 6 | 63 & Eb)
              }
            }
            return ab.join("")
          }(this.decodeStringToByteArray(bb, ab))
        },
        decodeStringToByteArray(bb, ab) {
          this.init_();
          const Ub = ab ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            Ab = [];
          for (let Mb = 0; Mb < bb.length;) {
            const ab = Ub[bb.charAt(Mb++)],
              Eb = Mb < bb.length ? Ub[bb.charAt(Mb)] : 0;
            ++Mb;
            const Yb = Mb < bb.length ? Ub[bb.charAt(Mb)] : 64;
            ++Mb;
            const Bb = Mb < bb.length ? Ub[bb.charAt(Mb)] : 64;
            if (++Mb, null == ab || null == Eb || null == Yb || null == Bb) throw new Tb;
            const eb = ab << 2 | Eb >> 4;
            if (Ab.push(eb), 64 !== Yb) {
              const bb = Eb << 4 & 240 | Yb >> 2;
              if (Ab.push(bb), 64 !== Bb) {
                const bb = Yb << 6 & 192 | Bb;
                Ab.push(bb)
              }
            }
          }
          return Ab
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let bb = 0; bb < this.ENCODED_VALS.length; bb++) this.byteToCharMap_[bb] = this.ENCODED_VALS.charAt(bb), this.charToByteMap_[this.byteToCharMap_[bb]] = bb, this.byteToCharMapWebSafe_[bb] = this.ENCODED_VALS_WEBSAFE.charAt(bb), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[bb]] = bb, bb >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(bb)] = bb, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(bb)] = bb)
          }
        }
      };
    class Tb extends Error {
      constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
      }
    }
    const Eb = function(bb) {
        return function(bb) {
          const ab = Ab(bb);
          return Mb.encodeByteArray(ab, !0)
        }(bb).replace(/\./g, "")
      },
      Yb = function(bb) {
        try {
          return Mb.decodeString(bb, !0)
        } catch (ab) {
          console.error("base64Decode failed: ", ab)
        }
        return null
      };
    const Bb = () => function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof Ub.g) return Ub.g;
        throw new Error("Unable to locate global object.")
      }().__FIREBASE_DEFAULTS__,
      eb = () => {
        try {
          return Bb() || (() => {
            if ("undefined" === typeof process) return
          })() || (() => {
            if ("undefined" === typeof document) return;
            let bb;
            try {
              bb = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (Ub) {
              return
            }
            const ab = bb && Yb(bb[1]);
            return ab && JSON.parse(ab)
          })()
        } catch (bb) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${bb}`)
        }
      },
      vb = bb => {
        var ab, Ub;
        return null === (Ub = null === (ab = eb()) || void 0 === ab ? void 0 : ab.emulatorHosts) || void 0 === Ub ? void 0 : Ub[bb]
      },
      Lb = () => {
        var bb;
        return null === (bb = eb()) || void 0 === bb ? void 0 : bb.config
      },
      Pb = bb => {
        var ab;
        return null === (ab = eb()) || void 0 === ab ? void 0 : ab[`_${bb}`]
      };
    class Xb {
      constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((bb, ab) => {
          this.resolve = bb, this.reject = ab
        }))
      }
      wrapCallback(bb) {
        return (ab, Ub) => {
          ab ? this.reject(ab) : this.resolve(Ub), "function" === typeof bb && (this.promise.catch((() => {})), 1 === bb.length ? bb(ab) : bb(ab, Ub))
        }
      }
    }

    function jb() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function Rb() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jb())
    }

    function kb() {
      const bb = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof bb && void 0 !== bb.id
    }

    function yb() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }

    function Zb() {
      const bb = jb();
      return bb.indexOf("MSIE ") >= 0 || bb.indexOf("Trident/") >= 0
    }

    function Db() {
      try {
        return "object" === typeof indexedDB
      } catch (bb) {
        return !1
      }
    }

    function zb() {
      return new Promise(((bb, ab) => {
        try {
          let Ub = !0;
          const Ab = "validate-browser-context-for-indexeddb-analytics-module",
            Mb = self.indexedDB.open(Ab);
          Mb.onsuccess = () => {
            Mb.result.close(), Ub || self.indexedDB.deleteDatabase(Ab), bb(!0)
          }, Mb.onupgradeneeded = () => {
            Ub = !1
          }, Mb.onerror = () => {
            var bb;
            ab((null === (bb = Mb.error) || void 0 === bb ? void 0 : bb.message) || "")
          }
        } catch (Ub) {
          ab(Ub)
        }
      }))
    }

    function xb() {
      return !("undefined" === typeof navigator || !navigator.cookieEnabled)
    }
    class ib extends Error {
      constructor(bb, ab, Ub) {
        super(ab), this.code = bb, this.customData = Ub, this.name = "FirebaseError", Object.setPrototypeOf(this, ib.prototype), Error.captureStackTrace && Error.captureStackTrace(this, fb.prototype.create)
      }
    }
    class fb {
      constructor(bb, ab, Ub) {
        this.service = bb, this.serviceName = ab, this.errors = Ub
      }
      create(bb) {
        const ab = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
          Ub = `${this.service}/${bb}`,
          Ab = this.errors[bb],
          Mb = Ab ? function(bb, ab) {
            return bb.replace(mb, ((bb, Ub) => {
              const Ab = ab[Ub];
              return null != Ab ? String(Ab) : `<${Ub}?>`
            }))
          }(Ab, ab) : "Error",
          Tb = `${this.serviceName}: ${Mb} (${Ub}).`;
        return new ib(Ub, Tb, ab)
      }
    }
    const mb = /\{\$([^}]+)}/g;

    function pb(bb) {
      for (const ab in bb)
        if (Object.prototype.hasOwnProperty.call(bb, ab)) return !1;
      return !0
    }

    function Nb(bb, ab) {
      if (bb === ab) return !0;
      const Ub = Object.keys(bb),
        Ab = Object.keys(ab);
      for (const Mb of Ub) {
        if (!Ab.includes(Mb)) return !1;
        const Ub = bb[Mb],
          Tb = ab[Mb];
        if (Wb(Ub) && Wb(Tb)) {
          if (!Nb(Ub, Tb)) return !1
        } else if (Ub !== Tb) return !1
      }
      for (const Mb of Ab)
        if (!Ub.includes(Mb)) return !1;
      return !0
    }

    function Wb(bb) {
      return null !== bb && "object" === typeof bb
    }

    function Hb(bb) {
      const ab = [];
      for (const [Ub, Ab] of Object.entries(bb)) Array.isArray(Ab) ? Ab.forEach((bb => {
        ab.push(encodeURIComponent(Ub) + "=" + encodeURIComponent(bb))
      })) : ab.push(encodeURIComponent(Ub) + "=" + encodeURIComponent(Ab));
      return ab.length ? "&" + ab.join("&") : ""
    }

    function Ib(bb) {
      const ab = {};
      return bb.replace(/^\?/, "").split("&").forEach((bb => {
        if (bb) {
          const [Ub, Ab] = bb.split("=");
          ab[decodeURIComponent(Ub)] = decodeURIComponent(Ab)
        }
      })), ab
    }

    function db(bb) {
      const ab = bb.indexOf("?");
      if (!ab) return "";
      const Ub = bb.indexOf("#", ab);
      return bb.substring(ab, Ub > 0 ? Ub : void 0)
    }

    function Fb(bb, ab) {
      const Ub = new hb(bb, ab);
      return Ub.subscribe.bind(Ub)
    }
    class hb {
      constructor(bb, ab) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ab, this.task.then((() => {
          bb(this)
        })).catch((bb => {
          this.error(bb)
        }))
      }
      next(bb) {
        this.forEachObserver((ab => {
          ab.next(bb)
        }))
      }
      error(bb) {
        this.forEachObserver((ab => {
          ab.error(bb)
        })), this.close(bb)
      }
      complete() {
        this.forEachObserver((bb => {
          bb.complete()
        })), this.close()
      }
      subscribe(bb, ab, Ub) {
        let Ab;
        if (void 0 === bb && void 0 === ab && void 0 === Ub) throw new Error("Missing Observer.");
        Ab = function(bb, ab) {
          if ("object" !== typeof bb || null === bb) return !1;
          for (const Ub of ab)
            if (Ub in bb && "function" === typeof bb[Ub]) return !0;
          return !1
        }(bb, ["next", "error", "complete"]) ? bb : {
          next: bb,
          error: ab,
          complete: Ub
        }, void 0 === Ab.next && (Ab.next = Gb), void 0 === Ab.error && (Ab.error = Gb), void 0 === Ab.complete && (Ab.complete = Gb);
        const Mb = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? Ab.error(this.finalError) : Ab.complete()
          } catch (bb) {}
        })), this.observers.push(Ab), Mb
      }
      unsubscribeOne(bb) {
        void 0 !== this.observers && void 0 !== this.observers[bb] && (delete this.observers[bb], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(bb) {
        if (!this.finalized)
          for (let ab = 0; ab < this.observers.length; ab++) this.sendOne(ab, bb)
      }
      sendOne(bb, ab) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[bb]) try {
            ab(this.observers[bb])
          } catch (Ub) {
            "undefined" !== typeof console && console.error && console.error(Ub)
          }
        }))
      }
      close(bb) {
        this.finalized || (this.finalized = !0, void 0 !== bb && (this.finalError = bb), this.task.then((() => {
          this.observers = void 0, this.onNoObservers = void 0
        })))
      }
    }

    function Gb() {}
    const Qb = 1e3,
      qb = 2,
      ub = 144e5,
      rb = .5;

    function Kb(bb) {
      let ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qb;
      const Ub = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qb) * Math.pow(ab, bb),
        Ab = Math.round(rb * Ub * (Math.random() - .5) * 2);
      return Math.min(ub, Ub + Ab)
    }

    function ob(bb) {
      return bb && bb._delegate ? bb._delegate : bb
    }
  },
  39626: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb.g,
      f: () => La,
      g: () => nb,
      h: () => Ua,
      j: () => Aa,
      l: () => ba,
      o: () => Ya,
      p: () => aa,
      r: () => Ta,
      u: () => Ma,
      w: () => Ea,
      z: () => Ra,
      B: () => Xa,
      A: () => ja,
      E: () => Pa,
      G: () => ya,
      K: () => ka,
      N: () => Za
    });
    var Ab = Ub(39631),
      Mb = Ub(39642),
      Tb = Ub(39640);
    let Eb, Yb;
    const Bb = new WeakMap,
      eb = new WeakMap,
      vb = new WeakMap,
      Lb = new WeakMap,
      Pb = new WeakMap;
    let Xb = {
      get(bb, ab, Ub) {
        if (bb instanceof IDBTransaction) {
          if ("done" === ab) return eb.get(bb);
          if ("objectStoreNames" === ab) return bb.objectStoreNames || vb.get(bb);
          if ("store" === ab) return Ub.objectStoreNames[1] ? void 0 : Ub.objectStore(Ub.objectStoreNames[0])
        }
        return kb(bb[ab])
      },
      set: (bb, ab, Ub) => (bb[ab] = Ub, !0),
      has: (bb, ab) => bb instanceof IDBTransaction && ("done" === ab || "store" === ab) || ab in bb
    };

    function jb(bb) {
      return bb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Yb || (Yb = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(bb) ? function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return bb.apply(yb(this), Ub), kb(Bb.get(this))
      } : function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return kb(bb.apply(yb(this), Ub))
      } : function(ab) {
        for (var Ub = arguments.length, Ab = new Array(Ub > 1 ? Ub - 1 : 0), Mb = 1; Mb < Ub; Mb++) Ab[Mb - 1] = arguments[Mb];
        const Tb = bb.call(yb(this), ab, ...Ab);
        return vb.set(Tb, ab.sort ? ab.sort() : [ab]), kb(Tb)
      }
    }

    function Rb(bb) {
      return "function" === typeof bb ? jb(bb) : (bb instanceof IDBTransaction && function(bb) {
        if (eb.has(bb)) return;
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
        eb.set(bb, ab)
      }(bb), ab = bb, (Eb || (Eb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((bb => ab instanceof bb)) ? new Proxy(bb, Xb) : bb);
      var ab
    }

    function kb(bb) {
      if (bb instanceof IDBRequest) return function(bb) {
        const ab = new Promise(((ab, Ub) => {
          const Ab = () => {
              bb.removeEventListener("success", Mb), bb.removeEventListener("error", Tb)
            },
            Mb = () => {
              ab(kb(bb.result)), Ab()
            },
            Tb = () => {
              Ub(bb.error), Ab()
            };
          bb.addEventListener("success", Mb), bb.addEventListener("error", Tb)
        }));
        return ab.then((ab => {
          ab instanceof IDBCursor && Bb.set(ab, bb)
        })).catch((() => {})), Pb.set(ab, bb), ab
      }(bb);
      if (Lb.has(bb)) return Lb.get(bb);
      const ab = Rb(bb);
      return ab !== bb && (Lb.set(bb, ab), Pb.set(ab, bb)), ab
    }
    const yb = bb => Pb.get(bb);
    const Zb = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Db = ["put", "add", "delete", "clear"],
      zb = new Map;

    function xb(bb, ab) {
      if (!(bb instanceof IDBDatabase) || ab in bb || "string" !== typeof ab) return;
      if (zb.get(ab)) return zb.get(ab);
      const Ub = ab.replace(/FromIndex$/, ""),
        Ab = ab !== Ub,
        Mb = Db.includes(Ub);
      if (!(Ub in (Ab ? IDBIndex : IDBObjectStore).prototype) || !Mb && !Zb.includes(Ub)) return;
      const Tb = async function(bb) {
        const ab = this.transaction(bb, Mb ? "readwrite" : "readonly");
        let Tb = ab.store;
        for (var Eb = arguments.length, Yb = new Array(Eb > 1 ? Eb - 1 : 0), Bb = 1; Bb < Eb; Bb++) Yb[Bb - 1] = arguments[Bb];
        return Ab && (Tb = Tb.index(Yb.shift())), (await Promise.all([Tb[Ub](...Yb), Mb && ab.done]))[0]
      };
      return zb.set(ab, Tb), Tb
    }
    Xb = (bb => ({
      ...bb,
      get: (ab, Ub, Ab) => xb(ab, Ub) || bb.get(ab, Ub, Ab),
      has: (ab, Ub) => !!xb(ab, Ub) || bb.has(ab, Ub)
    }))(Xb);
    class ib {
      constructor(bb) {
        this.container = bb
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((bb => {
          if (function(bb) {
              const ab = bb.getComponent();
              return "VERSION" === (null === ab || void 0 === ab ? void 0 : ab.type)
            }(bb)) {
            const ab = bb.getImmediate();
            return `${ab.library}/${ab.version}`
          }
          return null
        })).filter((bb => bb)).join(" ")
      }
    }
    const fb = "@firebase/app",
      mb = "0.9.13",
      pb = new Mb.e("@firebase/app"),
      Nb = "@firebase/app-compat",
      Wb = "@firebase/analytics-compat",
      Hb = "@firebase/analytics",
      Ib = "@firebase/app-check-compat",
      db = "@firebase/app-check",
      Fb = "@firebase/auth",
      hb = "@firebase/auth-compat",
      Gb = "@firebase/database",
      Qb = "@firebase/database-compat",
      qb = "@firebase/functions",
      ub = "@firebase/functions-compat",
      rb = "@firebase/installations",
      Kb = "@firebase/installations-compat",
      ob = "@firebase/messaging",
      lb = "@firebase/messaging-compat",
      tb = "@firebase/performance",
      wb = "@firebase/performance-compat",
      sb = "@firebase/remote-config",
      gb = "@firebase/remote-config-compat",
      Cb = "@firebase/storage",
      Vb = "@firebase/storage-compat",
      Ob = "@firebase/firestore",
      cb = "@firebase/firestore-compat",
      Jb = "firebase",
      nb = "[DEFAULT]",
      Sb = {
        [fb]: "fire-core",
        [Nb]: "fire-core-compat",
        [Hb]: "fire-analytics",
        [Wb]: "fire-analytics-compat",
        [db]: "fire-app-check",
        [Ib]: "fire-app-check-compat",
        [Fb]: "fire-auth",
        [hb]: "fire-auth-compat",
        [Gb]: "fire-rtdb",
        [Qb]: "fire-rtdb-compat",
        [qb]: "fire-fn",
        [ub]: "fire-fn-compat",
        [rb]: "fire-iid",
        [Kb]: "fire-iid-compat",
        [ob]: "fire-fcm",
        [lb]: "fire-fcm-compat",
        [tb]: "fire-perf",
        [wb]: "fire-perf-compat",
        [sb]: "fire-rc",
        [gb]: "fire-rc-compat",
        [Cb]: "fire-gcs",
        [Vb]: "fire-gcs-compat",
        [Ob]: "fire-fst",
        [cb]: "fire-fst-compat",
        "fire-js": "fire-js",
        [Jb]: "fire-js-all"
      },
      ba = new Map,
      aa = new Map;

    function Ua(bb, ab) {
      try {
        bb.container.FW(ab)
      } catch (Ub) {
        pb.debug(`Component ${ab.name} failed to register with FirebaseApp ${bb.name}`, Ub)
      }
    }

    function Aa(bb, ab) {
      bb.container.addOrOverwriteComponent(ab)
    }

    function Ma(bb) {
      const ab = bb.name;
      if (aa.has(ab)) return pb.debug(`There were multiple attempts to register component ${ab}.`), !1;
      aa.set(ab, bb);
      for (const Ub of ba.values()) Ua(Ub, bb);
      return !0
    }

    function Ta(bb, ab) {
      const Ub = bb.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return Ub && Ub.triggerHeartbeat(), bb.container.getProvider(ab)
    }

    function Ea(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nb;
      Ta(bb, ab).clearInstance(Ub)
    }

    function Ya() {
      aa.clear()
    }
    const Ba = {
        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "no-options": "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
      },
      ea = new Tb.e("app", "Firebase", Ba);
    class va {
      constructor(bb, ab, Ub) {
        this._isDeleted = !1, this._options = Object.assign({}, bb), this._config = Object.assign({}, ab), this._name = ab.name, this._automaticDataCollectionEnabled = ab.automaticDataCollectionEnabled, this._container = Ub, this.container.FW(new Ab.e("app", (() => this), "PUBLIC"))
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
      }
      set automaticDataCollectionEnabled(bb) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = bb
      }
      get name() {
        return this.checkDestroyed(), this._name
      }
      get options() {
        return this.checkDestroyed(), this._options
      }
      get config() {
        return this.checkDestroyed(), this._config
      }
      get container() {
        return this._container
      }
      get isDeleted() {
        return this._isDeleted
      }
      set isDeleted(bb) {
        this._isDeleted = bb
      }
      checkDestroyed() {
        if (this.isDeleted) throw ea.create("app-deleted", {
          appName: this._name
        })
      }
    }
    const La = "9.23.0";

    function Pa(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ub = bb;
      if ("object" !== typeof ab) {
        ab = {
          name: ab
        }
      }
      const Mb = Object.assign({
          name: nb,
          automaticDataCollectionEnabled: !1
        }, ab),
        Eb = Mb.name;
      if ("string" !== typeof Eb || !Eb) throw ea.create("bad-app-name", {
        appName: String(Eb)
      });
      if (Ub || (Ub = (0, Tb.z)()), !Ub) throw ea.create("no-options");
      const Yb = ba.get(Eb);
      if (Yb) {
        if ((0, Tb.u)(Ub, Yb.options) && (0, Tb.u)(Mb, Yb.config)) return Yb;
        throw ea.create("duplicate-app", {
          appName: Eb
        })
      }
      const Bb = new Ab.b(Eb);
      for (const Ab of aa.values()) Bb.FW(Ab);
      const eb = new va(Ub, Mb, Bb);
      return ba.set(Eb, eb), eb
    }

    function Xa() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nb;
      const ab = ba.get(bb);
      if (!ab && bb === nb && (0, Tb.z)()) return Pa();
      if (!ab) throw ea.create("no-app", {
        appName: bb
      });
      return ab
    }

    function ja() {
      return Array.from(ba.values())
    }
    async function Ra(bb) {
      const ab = bb.name;
      ba.has(ab) && (ba.delete(ab), await Promise.all(bb.container.getProviders().map((bb => bb.delete()))), bb.isDeleted = !0)
    }

    function ka(bb, ab, Ub) {
      var Mb;
      let Tb = null !== (Mb = Sb[bb]) && void 0 !== Mb ? Mb : bb;
      Ub && (Tb += `-${Ub}`);
      const Eb = Tb.match(/\s|\//),
        Yb = ab.match(/\s|\//);
      if (Eb || Yb) {
        const bb = [`Unable to register library "${Tb}" with version "${ab}":`];
        return Eb && bb.push(`library name "${Tb}" contains illegal characters (whitespace or "/")`), Eb && Yb && bb.push("and"), Yb && bb.push(`version name "${ab}" contains illegal characters (whitespace or "/")`), void pb.warn(bb.join(" "))
      }
      Ma(new Ab.e(`${Tb}-version`, (() => ({
        library: Tb,
        version: ab
      })), "VERSION"))
    }

    function ya(bb, ab) {
      if (null !== bb && "function" !== typeof bb) throw ea.create("invalid-log-argument");
      (0, Mb.i)(bb, ab)
    }

    function Za(bb) {
      (0, Mb.h)(bb)
    }
    const Da = "firebase-heartbeat-store";
    let za = null;

    function xa() {
      return za || (za = function(bb, ab) {
        let {
          blocked: Ub,
          upgrade: Ab,
          blocking: Mb,
          terminated: Tb
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Eb = indexedDB.open(bb, ab),
          Yb = kb(Eb);
        return Ab && Eb.addEventListener("upgradeneeded", (bb => {
          Ab(kb(Eb.result), bb.oldVersion, bb.newVersion, kb(Eb.transaction), bb)
        })), Ub && Eb.addEventListener("blocked", (bb => Ub(bb.oldVersion, bb.newVersion, bb))), Yb.then((bb => {
          Tb && bb.addEventListener("close", (() => Tb())), Mb && bb.addEventListener("versionchange", (bb => Mb(bb.oldVersion, bb.newVersion, bb)))
        })).catch((() => {})), Yb
      }("firebase-heartbeat-database", 1, {
        upgrade: (bb, ab) => {
          if (0 === ab) bb.createObjectStore(Da)
        }
      }).catch((bb => {
        throw ea.create("idb-open", {
          originalErrorMessage: bb.message
        })
      }))), za
    }
    async function ia(bb, ab) {
      try {
        const Ub = (await xa()).transaction(Da, "readwrite"),
          Ab = Ub.objectStore(Da);
        await Ab.put(ab, fa(bb)), await Ub.done
      } catch (Ub) {
        if (Ub instanceof Tb.g) pb.warn(Ub.message);
        else {
          const bb = ea.create("idb-set", {
            originalErrorMessage: null === Ub || void 0 === Ub ? void 0 : Ub.message
          });
          pb.warn(bb.message)
        }
      }
    }

    function fa(bb) {
      return `${bb.name}!${bb.options.appId}`
    }
    class ma {
      constructor(bb) {
        this.container = bb, this._heartbeatsCache = null;
        const ab = this.container.getProvider("app").getImmediate();
        this.Jj = new Na(ab), this._heartbeatsCachePromise = this.Jj.read().then((bb => (this._heartbeatsCache = bb, bb)))
      }
      async triggerHeartbeat() {
        const bb = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          ab = pa();
        if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== ab && !this._heartbeatsCache.heartbeats.some((bb => bb.date === ab))) return this._heartbeatsCache.heartbeats.push({
          date: ab,
          agent: bb
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((bb => {
          const ab = new Date(bb.date).valueOf();
          return Date.now() - ab <= 2592e6
        })), this.Jj.overwrite(this._heartbeatsCache)
      }
      async getHeartbeatsHeader() {
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const bb = pa(),
          {
            heartbeatsToSend: ab,
            unsentEntries: Ub
          } = function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
            const Ub = [];
            let Ab = bb.slice();
            for (const Mb of bb) {
              const bb = Ub.find((bb => bb.agent === Mb.agent));
              if (bb) {
                if (bb.dates.push(Mb.date), Wa(Ub) > ab) {
                  bb.dates.pop();
                  break
                }
              } else if (Ub.push({
                  agent: Mb.agent,
                  dates: [Mb.date]
                }), Wa(Ub) > ab) {
                Ub.pop();
                break
              }
              Ab = Ab.slice(1)
            }
            return {
              heartbeatsToSend: Ub,
              unsentEntries: Ab
            }
          }(this._heartbeatsCache.heartbeats),
          Ab = (0, Tb.o)(JSON.stringify({
            version: 2,
            heartbeats: ab
          }));
        return this._heartbeatsCache.lastSentHeartbeatDate = bb, Ub.length > 0 ? (this._heartbeatsCache.heartbeats = Ub, await this.Jj.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.Jj.overwrite(this._heartbeatsCache)), Ab
      }
    }

    function pa() {
      return (new Date).toISOString().substring(0, 10)
    }
    class Na {
      constructor(bb) {
        this.app = bb, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, Tb.U)() && (0, Tb.ab)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return await async function(bb) {
            try {
              const ab = await xa();
              return await ab.transaction(Da).objectStore(Da).get(fa(bb))
            } catch (ab) {
              if (ab instanceof Tb.g) pb.warn(ab.message);
              else {
                const bb = ea.create("idb-get", {
                  originalErrorMessage: null === ab || void 0 === ab ? void 0 : ab.message
                });
                pb.warn(bb.message)
              }
            }
          }(this.app) || {
            heartbeats: []
          }
        }
        return {
          heartbeats: []
        }
      }
      async overwrite(bb) {
        var ab;
        if (await this._canUseIndexedDBPromise) {
          const Ub = await this.read();
          return ia(this.app, {
            lastSentHeartbeatDate: null !== (ab = bb.lastSentHeartbeatDate) && void 0 !== ab ? ab : Ub.lastSentHeartbeatDate,
            heartbeats: bb.heartbeats
          })
        }
      }
      async add(bb) {
        var ab;
        if (await this._canUseIndexedDBPromise) {
          const Ub = await this.read();
          return ia(this.app, {
            lastSentHeartbeatDate: null !== (ab = bb.lastSentHeartbeatDate) && void 0 !== ab ? ab : Ub.lastSentHeartbeatDate,
            heartbeats: [...Ub.heartbeats, ...bb.heartbeats]
          })
        }
      }
    }

    function Wa(bb) {
      return (0, Tb.o)(JSON.stringify({
        version: 2,
        heartbeats: bb
      })).length
    }
    var Ha;
    Ha = "", Ma(new Ab.e("platform-logger", (bb => new ib(bb)), "PRIVATE")), Ma(new Ab.e("heartbeat", (bb => new ma(bb)), "PRIVATE")), ka(fb, mb, Ha), ka(fb, mb, "esm2017"), ka("fire-js", "")
  },
  39631: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb,
      e: () => Mb
    });
    var Ab = Ub(39640);
    class Mb {
      constructor(bb, ab, Ub) {
        this.name = bb, this.instanceFactory = ab, this.type = Ub, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
      }
      setInstantiationMode(bb) {
        return this.instantiationMode = bb, this
      }
      setMultipleInstances(bb) {
        return this.multipleInstances = bb, this
      }
      setServiceProps(bb) {
        return this.serviceProps = bb, this
      }
      setInstanceCreatedCallback(bb) {
        return this.onInstanceCreated = bb, this
      }
    }
    const Tb = "[DEFAULT]";
    class Eb {
      constructor(bb, ab) {
        this.name = bb, this.container = ab, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
      }
      get(bb) {
        const ab = this.normalizeInstanceIdentifier(bb);
        if (!this.instancesDeferred.has(ab)) {
          const bb = new Ab.d;
          if (this.instancesDeferred.set(ab, bb), this.isInitialized(ab) || this.shouldAutoInitialize()) try {
            const Ub = this.getOrInitializeService({
              instanceIdentifier: ab
            });
            Ub && bb.resolve(Ub)
          } catch (Ub) {}
        }
        return this.instancesDeferred.get(ab).promise
      }
      getImmediate(bb) {
        var ab;
        const Ub = this.normalizeInstanceIdentifier(null === bb || void 0 === bb ? void 0 : bb.identifier),
          Ab = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.optional) && void 0 !== ab && ab;
        if (!this.isInitialized(Ub) && !this.shouldAutoInitialize()) {
          if (Ab) return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: Ub
          })
        } catch (Mb) {
          if (Ab) return null;
          throw Mb
        }
      }
      getComponent() {
        return this.component
      }
      setComponent(bb) {
        if (bb.name !== this.name) throw Error(`Mismatching Component ${bb.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = bb, this.shouldAutoInitialize()) {
          if (function(bb) {
              return "EAGER" === bb.instantiationMode
            }(bb)) try {
            this.getOrInitializeService({
              instanceIdentifier: Tb
            })
          } catch (ab) {}
          for (const [bb, Ub] of this.instancesDeferred.entries()) {
            const Ab = this.normalizeInstanceIdentifier(bb);
            try {
              const bb = this.getOrInitializeService({
                instanceIdentifier: Ab
              });
              Ub.resolve(bb)
            } catch (ab) {}
          }
        }
      }
      clearInstance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb;
        this.instancesDeferred.delete(bb), this.instancesOptions.delete(bb), this.instances.delete(bb)
      }
      async delete() {
        const bb = Array.from(this.instances.values());
        await Promise.all([...bb.filter((bb => "INTERNAL" in bb)).map((bb => bb.INTERNAL.delete())), ...bb.filter((bb => "_delete" in bb)).map((bb => bb._delete()))])
      }
      isComponentSet() {
        return null != this.component
      }
      isInitialized() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb;
        return this.instances.has(bb)
      }
      getOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb;
        return this.instancesOptions.get(bb) || {}
      }
      initialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          options: ab = {}
        } = bb, Ub = this.normalizeInstanceIdentifier(bb.instanceIdentifier);
        if (this.isInitialized(Ub)) throw Error(`${this.name}(${Ub}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const Ab = this.getOrInitializeService({
          instanceIdentifier: Ub,
          options: ab
        });
        for (const [Mb, Tb] of this.instancesDeferred.entries()) {
          Ub === this.normalizeInstanceIdentifier(Mb) && Tb.resolve(Ab)
        }
        return Ab
      }
      pI(bb, ab) {
        var Ub;
        const Ab = this.normalizeInstanceIdentifier(ab),
          Mb = null !== (Ub = this.onInitCallbacks.get(Ab)) && void 0 !== Ub ? Ub : new Set;
        Mb.add(bb), this.onInitCallbacks.set(Ab, Mb);
        const Tb = this.instances.get(Ab);
        return Tb && bb(Tb, Ab), () => {
          Mb.delete(bb)
        }
      }
      invokeOnInitCallbacks(bb, ab) {
        const Ub = this.onInitCallbacks.get(ab);
        if (Ub)
          for (const Mb of Ub) try {
            Mb(bb, ab)
          } catch (Ab) {}
      }
      getOrInitializeService(bb) {
        let {
          instanceIdentifier: ab,
          options: Ub = {}
        } = bb, Ab = this.instances.get(ab);
        if (!Ab && this.component && (Ab = this.component.instanceFactory(this.container, {
            instanceIdentifier: (Mb = ab, Mb === Tb ? void 0 : Mb),
            options: Ub
          }), this.instances.set(ab, Ab), this.instancesOptions.set(ab, Ub), this.invokeOnInitCallbacks(Ab, ab), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, ab, Ab)
        } catch (Eb) {}
        var Mb;
        return Ab || null
      }
      normalizeInstanceIdentifier() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb;
        return this.component ? this.component.multipleInstances ? bb : Tb : bb
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class Yb {
      constructor(bb) {
        this.name = bb, this.providers = new Map
      }
      FW(bb) {
        const ab = this.getProvider(bb.name);
        if (ab.isComponentSet()) throw new Error(`Component ${bb.name} has already been registered with ${this.name}`);
        ab.setComponent(bb)
      }
      addOrOverwriteComponent(bb) {
        this.getProvider(bb.name).isComponentSet() && this.providers.delete(bb.name), this.FW(bb)
      }
      getProvider(bb) {
        if (this.providers.has(bb)) return this.providers.get(bb);
        const ab = new Eb(bb, this);
        return this.providers.set(bb, ab), ab
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  39642: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => eb,
      h: () => vb,
      i: () => Lb
    });
    const Ab = [];
    var Mb;
    ! function(bb) {
      bb[bb.DEBUG = 0] = "DEBUG", bb[bb.VERBOSE = 1] = "VERBOSE", bb[bb.INFO = 2] = "INFO", bb[bb.WARN = 3] = "WARN", bb[bb.ERROR = 4] = "ERROR", bb[bb.SILENT = 5] = "SILENT"
    }(Mb || (Mb = {}));
    const Tb = {
        debug: Mb.DEBUG,
        verbose: Mb.VERBOSE,
        info: Mb.INFO,
        warn: Mb.WARN,
        error: Mb.ERROR,
        silent: Mb.SILENT
      },
      Eb = Mb.INFO,
      Yb = {
        [Mb.DEBUG]: "log",
        [Mb.VERBOSE]: "log",
        [Mb.INFO]: "info",
        [Mb.WARN]: "warn",
        [Mb.ERROR]: "error"
      },
      Bb = function(bb, ab) {
        if (ab < bb.logLevel) return;
        const Ub = (new Date).toISOString(),
          Ab = Yb[ab];
        if (!Ab) throw new Error(`Attempted to log a message with an invalid logType (value: ${ab})`);
        for (var Mb = arguments.length, Tb = new Array(Mb > 2 ? Mb - 2 : 0), Eb = 2; Eb < Mb; Eb++) Tb[Eb - 2] = arguments[Eb];
        console[Ab](`[${Ub}]  ${bb.name}:`, ...Tb)
      };
    class eb {
      constructor(bb) {
        this.name = bb, this._logLevel = Eb, this._logHandler = Bb, this._userLogHandler = null, Ab.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(bb) {
        if (!(bb in Mb)) throw new TypeError(`Invalid value "${bb}" assigned to \`logLevel\``);
        this._logLevel = bb
      }
      setLogLevel(bb) {
        this._logLevel = "string" === typeof bb ? Tb[bb] : bb
      }
      get logHandler() {
        return this._logHandler
      }
      set logHandler(bb) {
        if ("function" !== typeof bb) throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = bb
      }
      get userLogHandler() {
        return this._userLogHandler
      }
      set userLogHandler(bb) {
        this._userLogHandler = bb
      }
      debug() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        this._userLogHandler && this._userLogHandler(this, Mb.DEBUG, ...ab), this._logHandler(this, Mb.DEBUG, ...ab)
      }
      log() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        this._userLogHandler && this._userLogHandler(this, Mb.VERBOSE, ...ab), this._logHandler(this, Mb.VERBOSE, ...ab)
      }
      info() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        this._userLogHandler && this._userLogHandler(this, Mb.INFO, ...ab), this._logHandler(this, Mb.INFO, ...ab)
      }
      warn() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        this._userLogHandler && this._userLogHandler(this, Mb.WARN, ...ab), this._logHandler(this, Mb.WARN, ...ab)
      }
      error() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        this._userLogHandler && this._userLogHandler(this, Mb.ERROR, ...ab), this._logHandler(this, Mb.ERROR, ...ab)
      }
    }

    function vb(bb) {
      Ab.forEach((ab => {
        ab.setLogLevel(bb)
      }))
    }

    function Lb(bb, ab) {
      for (const Ub of Ab) {
        let Ab = null;
        ab && ab.level && (Ab = Tb[ab.level]), Ub.userLogHandler = null === bb ? null : function(ab, Ub) {
          for (var Tb = arguments.length, Eb = new Array(Tb > 2 ? Tb - 2 : 0), Yb = 2; Yb < Tb; Yb++) Eb[Yb - 2] = arguments[Yb];
          const Bb = Eb.map((bb => {
            if (null == bb) return null;
            if ("string" === typeof bb) return bb;
            if ("number" === typeof bb || "boolean" === typeof bb) return bb.toString();
            if (bb instanceof Error) return bb.message;
            try {
              return JSON.stringify(bb)
            } catch (ab) {
              return null
            }
          })).filter((bb => bb)).join(" ");
          Ub >= (null !== Ab && void 0 !== Ab ? Ab : ab.logLevel) && bb({
            level: Mb[Ub].toLowerCase(),
            message: Bb,
            args: Eb,
            type: ab.name
          })
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);