/*! For license information please see halsg.258.03c35269.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
  39976: (bb, ub, hb) => {
    hb.d(ub, {
      C: () => ib,
      D: () => Hb,
      E: () => ab,
      H: () => wb,
      K: () => Ib,
      M: () => Xb,
      P: () => ob,
      Q: () => nb,
      T: () => lb,
      V: () => Kb,
      Y: () => pb,
      ab: () => Ab,
      e: () => Zb,
      eb: () => gb,
      fb: () => zb,
      h: () => rb,
      i: () => db,
      j: () => Cb,
      jb: () => Wb,
      n: () => Lb,
      q: () => Ub,
      s: () => mb,
      v: () => vb,
      y: () => Db
    });
    const Bb = function(bb) {
        const ub = [];
        let hb = 0;
        for (let Bb = 0; Bb < bb.length; Bb++) {
          let Ob = bb.charCodeAt(Bb);
          Ob < 128 ? ub[hb++] = Ob : Ob < 2048 ? (ub[hb++] = Ob >> 6 | 192, ub[hb++] = 63 & Ob | 128) : 55296 === (64512 & Ob) && Bb + 1 < bb.length && 56320 === (64512 & bb.charCodeAt(Bb + 1)) ? (Ob = 65536 + ((1023 & Ob) << 10) + (1023 & bb.charCodeAt(++Bb)), ub[hb++] = Ob >> 18 | 240, ub[hb++] = Ob >> 12 & 63 | 128, ub[hb++] = Ob >> 6 & 63 | 128, ub[hb++] = 63 & Ob | 128) : (ub[hb++] = Ob >> 12 | 224, ub[hb++] = Ob >> 6 & 63 | 128, ub[hb++] = 63 & Ob | 128)
        }
        return ub
      },
      Ob = {
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
        encodeByteArray(bb, ub) {
          if (!Array.isArray(bb)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const hb = ub ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            Bb = [];
          for (let Ob = 0; Ob < bb.length; Ob += 3) {
            const ub = bb[Ob],
              Gb = Ob + 1 < bb.length,
              Ub = Gb ? bb[Ob + 1] : 0,
              Lb = Ob + 2 < bb.length,
              Yb = Lb ? bb[Ob + 2] : 0,
              Sb = ub >> 2,
              ab = (3 & ub) << 4 | Ub >> 4;
            let Hb = (15 & Ub) << 2 | Yb >> 6,
              wb = 63 & Yb;
            Lb || (wb = 64, Gb || (Hb = 64)), Bb.push(hb[Sb], hb[ab], hb[Hb], hb[wb])
          }
          return Bb.join("")
        },
        encodeString(bb, ub) {
          return this.HAS_NATIVE_SUPPORT && !ub ? btoa(bb) : this.encodeByteArray(Bb(bb), ub)
        },
        decodeString(bb, ub) {
          return this.HAS_NATIVE_SUPPORT && !ub ? atob(bb) : function(bb) {
            const ub = [];
            let hb = 0,
              Bb = 0;
            for (; hb < bb.length;) {
              const Ob = bb[hb++];
              if (Ob < 128) ub[Bb++] = String.fromCharCode(Ob);
              else if (Ob > 191 && Ob < 224) {
                const Gb = bb[hb++];
                ub[Bb++] = String.fromCharCode((31 & Ob) << 6 | 63 & Gb)
              } else if (Ob > 239 && Ob < 365) {
                const Gb = ((7 & Ob) << 18 | (63 & bb[hb++]) << 12 | (63 & bb[hb++]) << 6 | 63 & bb[hb++]) - 65536;
                ub[Bb++] = String.fromCharCode(55296 + (Gb >> 10)), ub[Bb++] = String.fromCharCode(56320 + (1023 & Gb))
              } else {
                const Gb = bb[hb++],
                  Ub = bb[hb++];
                ub[Bb++] = String.fromCharCode((15 & Ob) << 12 | (63 & Gb) << 6 | 63 & Ub)
              }
            }
            return ub.join("")
          }(this.decodeStringToByteArray(bb, ub))
        },
        decodeStringToByteArray(bb, ub) {
          this.init_();
          const hb = ub ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            Bb = [];
          for (let Ob = 0; Ob < bb.length;) {
            const ub = hb[bb.charAt(Ob++)],
              Ub = Ob < bb.length ? hb[bb.charAt(Ob)] : 0;
            ++Ob;
            const Lb = Ob < bb.length ? hb[bb.charAt(Ob)] : 64;
            ++Ob;
            const Yb = Ob < bb.length ? hb[bb.charAt(Ob)] : 64;
            if (++Ob, null == ub || null == Ub || null == Lb || null == Yb) throw new Gb;
            const Sb = ub << 2 | Ub >> 4;
            if (Bb.push(Sb), 64 !== Lb) {
              const bb = Ub << 4 & 240 | Lb >> 2;
              if (Bb.push(bb), 64 !== Yb) {
                const bb = Lb << 6 & 192 | Yb;
                Bb.push(bb)
              }
            }
          }
          return Bb
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let bb = 0; bb < this.ENCODED_VALS.length; bb++) this.byteToCharMap_[bb] = this.ENCODED_VALS.charAt(bb), this.charToByteMap_[this.byteToCharMap_[bb]] = bb, this.byteToCharMapWebSafe_[bb] = this.ENCODED_VALS_WEBSAFE.charAt(bb), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[bb]] = bb, bb >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(bb)] = bb, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(bb)] = bb)
          }
        }
      };
    class Gb extends Error {
      constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
      }
    }
    const Ub = function(bb) {
        return function(bb) {
          const ub = Bb(bb);
          return Ob.encodeByteArray(ub, !0)
        }(bb).replace(/\./g, "")
      },
      Lb = function(bb) {
        try {
          return Ob.decodeString(bb, !0)
        } catch (ub) {
          console.error("base64Decode failed: ", ub)
        }
        return null
      };
    const Yb = () => function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof hb.g) return hb.g;
        throw new Error("Unable to locate global object.")
      }().__FIREBASE_DEFAULTS__,
      Sb = () => {
        try {
          return Yb() || (() => {
            if ("undefined" === typeof process) return
          })() || (() => {
            if ("undefined" === typeof document) return;
            let bb;
            try {
              bb = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (hb) {
              return
            }
            const ub = bb && Lb(bb[1]);
            return ub && JSON.parse(ub)
          })()
        } catch (bb) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${bb}`)
        }
      },
      ab = bb => {
        var ub, hb;
        return null === (hb = null === (ub = Sb()) || void 0 === ub ? void 0 : ub.emulatorHosts) || void 0 === hb ? void 0 : hb[bb]
      },
      Hb = () => {
        var bb;
        return null === (bb = Sb()) || void 0 === bb ? void 0 : bb.config
      },
      wb = bb => {
        var ub;
        return null === (ub = Sb()) || void 0 === ub ? void 0 : ub[`_${bb}`]
      };
    class Zb {
      constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((bb, ub) => {
          this.resolve = bb, this.reject = ub
        }))
      }
      wrapCallback(bb) {
        return (ub, hb) => {
          ub ? this.reject(ub) : this.resolve(hb), "function" === typeof bb && (this.promise.catch((() => {})), 1 === bb.length ? bb(ub) : bb(ub, hb))
        }
      }
    }

    function Xb() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function pb() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xb())
    }

    function ob() {
      const bb = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof bb && void 0 !== bb.id
    }

    function Ab() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }

    function lb() {
      const bb = Xb();
      return bb.indexOf("MSIE ") >= 0 || bb.indexOf("Trident/") >= 0
    }

    function Kb() {
      try {
        return "object" === typeof indexedDB
      } catch (bb) {
        return !1
      }
    }

    function Wb() {
      return new Promise(((bb, ub) => {
        try {
          let hb = !0;
          const Bb = "validate-browser-context-for-indexeddb-analytics-module",
            Ob = self.indexedDB.open(Bb);
          Ob.onsuccess = () => {
            Ob.result.close(), hb || self.indexedDB.deleteDatabase(Bb), bb(!0)
          }, Ob.onupgradeneeded = () => {
            hb = !1
          }, Ob.onerror = () => {
            var bb;
            ub((null === (bb = Ob.error) || void 0 === bb ? void 0 : bb.message) || "")
          }
        } catch (hb) {
          ub(hb)
        }
      }))
    }

    function Cb() {
      return !("undefined" === typeof navigator || !navigator.cookieEnabled)
    }
    class db extends Error {
      constructor(bb, ub, hb) {
        super(ub), this.code = bb, this.customData = hb, this.name = "FirebaseError", Object.setPrototypeOf(this, db.prototype), Error.captureStackTrace && Error.captureStackTrace(this, rb.prototype.create)
      }
    }
    class rb {
      constructor(bb, ub, hb) {
        this.service = bb, this.serviceName = ub, this.errors = hb
      }
      create(bb) {
        const ub = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
          hb = `${this.service}/${bb}`,
          Bb = this.errors[bb],
          Ob = Bb ? function(bb, ub) {
            return bb.replace(jb, ((bb, hb) => {
              const Bb = ub[hb];
              return null != Bb ? String(Bb) : `<${hb}?>`
            }))
          }(Bb, ub) : "Error",
          Gb = `${this.serviceName}: ${Ob} (${hb}).`;
        return new db(hb, Gb, ub)
      }
    }
    const jb = /\{\$([^}]+)}/g;

    function nb(bb) {
      for (const ub in bb)
        if (Object.prototype.hasOwnProperty.call(bb, ub)) return !1;
      return !0
    }

    function Db(bb, ub) {
      if (bb === ub) return !0;
      const hb = Object.keys(bb),
        Bb = Object.keys(ub);
      for (const Ob of hb) {
        if (!Bb.includes(Ob)) return !1;
        const hb = bb[Ob],
          Gb = ub[Ob];
        if (xb(hb) && xb(Gb)) {
          if (!Db(hb, Gb)) return !1
        } else if (hb !== Gb) return !1
      }
      for (const Ob of Bb)
        if (!hb.includes(Ob)) return !1;
      return !0
    }

    function xb(bb) {
      return null !== bb && "object" === typeof bb
    }

    function zb(bb) {
      const ub = [];
      for (const [hb, Bb] of Object.entries(bb)) Array.isArray(Bb) ? Bb.forEach((bb => {
        ub.push(encodeURIComponent(hb) + "=" + encodeURIComponent(bb))
      })) : ub.push(encodeURIComponent(hb) + "=" + encodeURIComponent(Bb));
      return ub.length ? "&" + ub.join("&") : ""
    }

    function gb(bb) {
      const ub = {};
      return bb.replace(/^\?/, "").split("&").forEach((bb => {
        if (bb) {
          const [hb, Bb] = bb.split("=");
          ub[decodeURIComponent(hb)] = decodeURIComponent(Bb)
        }
      })), ub
    }

    function ib(bb) {
      const ub = bb.indexOf("?");
      if (!ub) return "";
      const hb = bb.indexOf("#", ub);
      return bb.substring(ub, hb > 0 ? hb : void 0)
    }

    function vb(bb, ub) {
      const hb = new tb(bb, ub);
      return hb.subscribe.bind(hb)
    }
    class tb {
      constructor(bb, ub) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ub, this.task.then((() => {
          bb(this)
        })).catch((bb => {
          this.error(bb)
        }))
      }
      next(bb) {
        this.forEachObserver((ub => {
          ub.next(bb)
        }))
      }
      error(bb) {
        this.forEachObserver((ub => {
          ub.error(bb)
        })), this.close(bb)
      }
      complete() {
        this.forEachObserver((bb => {
          bb.complete()
        })), this.close()
      }
      subscribe(bb, ub, hb) {
        let Bb;
        if (void 0 === bb && void 0 === ub && void 0 === hb) throw new Error("Missing Observer.");
        Bb = function(bb, ub) {
          if ("object" !== typeof bb || null === bb) return !1;
          for (const hb of ub)
            if (hb in bb && "function" === typeof bb[hb]) return !0;
          return !1
        }(bb, ["next", "error", "complete"]) ? bb : {
          next: bb,
          error: ub,
          complete: hb
        }, void 0 === Bb.next && (Bb.next = Jb), void 0 === Bb.error && (Bb.error = Jb), void 0 === Bb.complete && (Bb.complete = Jb);
        const Ob = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? Bb.error(this.finalError) : Bb.complete()
          } catch (bb) {}
        })), this.observers.push(Bb), Ob
      }
      unsubscribeOne(bb) {
        void 0 !== this.observers && void 0 !== this.observers[bb] && (delete this.observers[bb], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(bb) {
        if (!this.finalized)
          for (let ub = 0; ub < this.observers.length; ub++) this.sendOne(ub, bb)
      }
      sendOne(bb, ub) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[bb]) try {
            ub(this.observers[bb])
          } catch (hb) {
            "undefined" !== typeof console && console.error && console.error(hb)
          }
        }))
      }
      close(bb) {
        this.finalized || (this.finalized = !0, void 0 !== bb && (this.finalError = bb), this.task.then((() => {
          this.observers = void 0, this.onNoObservers = void 0
        })))
      }
    }

    function Jb() {}
    const eb = 1e3,
      Nb = 2,
      sb = 144e5,
      Mb = .5;

    function mb(bb) {
      let ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nb;
      const hb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb) * Math.pow(ub, bb),
        Bb = Math.round(Mb * hb * (Math.random() - .5) * 2);
      return Math.min(sb, hb + Bb)
    }

    function Ib(bb) {
      return bb && bb._delegate ? bb._delegate : bb
    }
  },
  39959: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb.i,
      e: () => Hu,
      i: () => Qb,
      m: () => hu,
      n: () => Bu,
      p: () => bu,
      t: () => Lu,
      w: () => uu,
      z: () => Gu,
      D: () => Ou,
      F: () => Uu,
      I: () => pu,
      L: () => Zu,
      J: () => Xu,
      N: () => wu,
      Q: () => Au,
      R: () => ou,
      V: () => lu
    });
    var Bb = hb(39967),
      Ob = hb(39983),
      Gb = hb(39976);
    let Ub, Lb;
    const Yb = new WeakMap,
      Sb = new WeakMap,
      ab = new WeakMap,
      Hb = new WeakMap,
      wb = new WeakMap;
    let Zb = {
      get(bb, ub, hb) {
        if (bb instanceof IDBTransaction) {
          if ("done" === ub) return Sb.get(bb);
          if ("objectStoreNames" === ub) return bb.objectStoreNames || ab.get(bb);
          if ("store" === ub) return hb.objectStoreNames[1] ? void 0 : hb.objectStore(hb.objectStoreNames[0])
        }
        return ob(bb[ub])
      },
      set: (bb, ub, hb) => (bb[ub] = hb, !0),
      has: (bb, ub) => bb instanceof IDBTransaction && ("done" === ub || "store" === ub) || ub in bb
    };

    function Xb(bb) {
      return bb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Lb || (Lb = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(bb) ? function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return bb.apply(Ab(this), hb), ob(Yb.get(this))
      } : function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return ob(bb.apply(Ab(this), hb))
      } : function(ub) {
        for (var hb = arguments.length, Bb = new Array(hb > 1 ? hb - 1 : 0), Ob = 1; Ob < hb; Ob++) Bb[Ob - 1] = arguments[Ob];
        const Gb = bb.call(Ab(this), ub, ...Bb);
        return ab.set(Gb, ub.sort ? ub.sort() : [ub]), ob(Gb)
      }
    }

    function pb(bb) {
      return "function" === typeof bb ? Xb(bb) : (bb instanceof IDBTransaction && function(bb) {
        if (Sb.has(bb)) return;
        const ub = new Promise(((ub, hb) => {
          const Bb = () => {
              bb.removeEventListener("complete", Ob), bb.removeEventListener("error", Gb), bb.removeEventListener("abort", Gb)
            },
            Ob = () => {
              ub(), Bb()
            },
            Gb = () => {
              hb(bb.error || new DOMException("AbortError", "AbortError")), Bb()
            };
          bb.addEventListener("complete", Ob), bb.addEventListener("error", Gb), bb.addEventListener("abort", Gb)
        }));
        Sb.set(bb, ub)
      }(bb), ub = bb, (Ub || (Ub = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((bb => ub instanceof bb)) ? new Proxy(bb, Zb) : bb);
      var ub
    }

    function ob(bb) {
      if (bb instanceof IDBRequest) return function(bb) {
        const ub = new Promise(((ub, hb) => {
          const Bb = () => {
              bb.removeEventListener("success", Ob), bb.removeEventListener("error", Gb)
            },
            Ob = () => {
              ub(ob(bb.result)), Bb()
            },
            Gb = () => {
              hb(bb.error), Bb()
            };
          bb.addEventListener("success", Ob), bb.addEventListener("error", Gb)
        }));
        return ub.then((ub => {
          ub instanceof IDBCursor && Yb.set(ub, bb)
        })).catch((() => {})), wb.set(ub, bb), ub
      }(bb);
      if (Hb.has(bb)) return Hb.get(bb);
      const ub = pb(bb);
      return ub !== bb && (Hb.set(bb, ub), wb.set(ub, bb)), ub
    }
    const Ab = bb => wb.get(bb);
    const lb = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Kb = ["put", "add", "delete", "clear"],
      Wb = new Map;

    function Cb(bb, ub) {
      if (!(bb instanceof IDBDatabase) || ub in bb || "string" !== typeof ub) return;
      if (Wb.get(ub)) return Wb.get(ub);
      const hb = ub.replace(/FromIndex$/, ""),
        Bb = ub !== hb,
        Ob = Kb.includes(hb);
      if (!(hb in (Bb ? IDBIndex : IDBObjectStore).prototype) || !Ob && !lb.includes(hb)) return;
      const Gb = async function(bb) {
        const ub = this.transaction(bb, Ob ? "readwrite" : "readonly");
        let Gb = ub.store;
        for (var Ub = arguments.length, Lb = new Array(Ub > 1 ? Ub - 1 : 0), Yb = 1; Yb < Ub; Yb++) Lb[Yb - 1] = arguments[Yb];
        return Bb && (Gb = Gb.index(Lb.shift())), (await Promise.all([Gb[hb](...Lb), Ob && ub.done]))[0]
      };
      return Wb.set(ub, Gb), Gb
    }
    Zb = (bb => ({
      ...bb,
      get: (ub, hb, Bb) => Cb(ub, hb) || bb.get(ub, hb, Bb),
      has: (ub, hb) => !!Cb(ub, hb) || bb.has(ub, hb)
    }))(Zb);
    class db {
      constructor(bb) {
        this.container = bb
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((bb => {
          if (function(bb) {
              const ub = bb.getComponent();
              return "VERSION" === (null === ub || void 0 === ub ? void 0 : ub.type)
            }(bb)) {
            const ub = bb.getImmediate();
            return `${ub.library}/${ub.version}`
          }
          return null
        })).filter((bb => bb)).join(" ")
      }
    }
    const rb = "@firebase/app",
      jb = "0.9.13",
      nb = new Ob.i("@firebase/app"),
      Db = "@firebase/app-compat",
      xb = "@firebase/analytics-compat",
      zb = "@firebase/analytics",
      gb = "@firebase/app-check-compat",
      ib = "@firebase/app-check",
      vb = "@firebase/auth",
      tb = "@firebase/auth-compat",
      Jb = "@firebase/database",
      eb = "@firebase/database-compat",
      Nb = "@firebase/functions",
      sb = "@firebase/functions-compat",
      Mb = "@firebase/installations",
      mb = "@firebase/installations-compat",
      Ib = "@firebase/messaging",
      Pb = "@firebase/messaging-compat",
      qb = "@firebase/performance",
      Eb = "@firebase/performance-compat",
      yb = "@firebase/remote-config",
      Vb = "@firebase/remote-config-compat",
      Fb = "@firebase/storage",
      fb = "@firebase/storage-compat",
      kb = "@firebase/firestore",
      Tb = "@firebase/firestore-compat",
      cb = "firebase",
      Qb = "[DEFAULT]",
      Rb = {
        [rb]: "fire-core",
        [Db]: "fire-core-compat",
        [zb]: "fire-analytics",
        [xb]: "fire-analytics-compat",
        [ib]: "fire-app-check",
        [gb]: "fire-app-check-compat",
        [vb]: "fire-auth",
        [tb]: "fire-auth-compat",
        [Jb]: "fire-rtdb",
        [eb]: "fire-rtdb-compat",
        [Nb]: "fire-fn",
        [sb]: "fire-fn-compat",
        [Mb]: "fire-iid",
        [mb]: "fire-iid-compat",
        [Ib]: "fire-fcm",
        [Pb]: "fire-fcm-compat",
        [qb]: "fire-perf",
        [Eb]: "fire-perf-compat",
        [yb]: "fire-rc",
        [Vb]: "fire-rc-compat",
        [Fb]: "fire-gcs",
        [fb]: "fire-gcs-compat",
        [kb]: "fire-fst",
        [Tb]: "fire-fst-compat",
        "fire-js": "fire-js",
        [cb]: "fire-js-all"
      },
      bu = new Map,
      uu = new Map;

    function hu(bb, ub) {
      try {
        bb.container.FN(ub)
      } catch (hb) {
        nb.debug(`Component ${ub.name} failed to register with FirebaseApp ${bb.name}`, hb)
      }
    }

    function Bu(bb, ub) {
      bb.container.addOrOverwriteComponent(ub)
    }

    function Ou(bb) {
      const ub = bb.name;
      if (uu.has(ub)) return nb.debug(`There were multiple attempts to register component ${ub}.`), !1;
      uu.set(ub, bb);
      for (const hb of bu.values()) hu(hb, bb);
      return !0
    }

    function Gu(bb, ub) {
      const hb = bb.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return hb && hb.triggerHeartbeat(), bb.container.getProvider(ub)
    }

    function Uu(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qb;
      Gu(bb, ub).clearInstance(hb)
    }

    function Lu() {
      uu.clear()
    }
    const Yu = {
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
      Su = new Gb.h("app", "Firebase", Yu);
    class au {
      constructor(bb, ub, hb) {
        this._isDeleted = !1, this._options = Object.assign({}, bb), this._config = Object.assign({}, ub), this._name = ub.name, this._automaticDataCollectionEnabled = ub.automaticDataCollectionEnabled, this._container = hb, this.container.FN(new Bb.f("app", (() => this), "PUBLIC"))
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
        if (this.isDeleted) throw Su.create("app-deleted", {
          appName: this._name
        })
      }
    }
    const Hu = "9.23.0";

    function wu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        hb = bb;
      if ("object" !== typeof ub) {
        ub = {
          name: ub
        }
      }
      const Ob = Object.assign({
          name: Qb,
          automaticDataCollectionEnabled: !1
        }, ub),
        Ub = Ob.name;
      if ("string" !== typeof Ub || !Ub) throw Su.create("bad-app-name", {
        appName: String(Ub)
      });
      if (hb || (hb = (0, Gb.D)()), !hb) throw Su.create("no-options");
      const Lb = bu.get(Ub);
      if (Lb) {
        if ((0, Gb.y)(hb, Lb.options) && (0, Gb.y)(Ob, Lb.config)) return Lb;
        throw Su.create("duplicate-app", {
          appName: Ub
        })
      }
      const Yb = new Bb.b(Ub);
      for (const Bb of uu.values()) Yb.FN(Bb);
      const Sb = new au(hb, Ob, Yb);
      return bu.set(Ub, Sb), Sb
    }

    function Zu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qb;
      const ub = bu.get(bb);
      if (!ub && bb === Qb && (0, Gb.D)()) return wu();
      if (!ub) throw Su.create("no-app", {
        appName: bb
      });
      return ub
    }

    function Xu() {
      return Array.from(bu.values())
    }
    async function pu(bb) {
      const ub = bb.name;
      bu.has(ub) && (bu.delete(ub), await Promise.all(bb.container.getProviders().map((bb => bb.delete()))), bb.isDeleted = !0)
    }

    function ou(bb, ub, hb) {
      var Ob;
      let Gb = null !== (Ob = Rb[bb]) && void 0 !== Ob ? Ob : bb;
      hb && (Gb += `-${hb}`);
      const Ub = Gb.match(/\s|\//),
        Lb = ub.match(/\s|\//);
      if (Ub || Lb) {
        const bb = [`Unable to register library "${Gb}" with version "${ub}":`];
        return Ub && bb.push(`library name "${Gb}" contains illegal characters (whitespace or "/")`), Ub && Lb && bb.push("and"), Lb && bb.push(`version name "${ub}" contains illegal characters (whitespace or "/")`), void nb.warn(bb.join(" "))
      }
      Ou(new Bb.f(`${Gb}-version`, (() => ({
        library: Gb,
        version: ub
      })), "VERSION"))
    }

    function Au(bb, ub) {
      if (null !== bb && "function" !== typeof bb) throw Su.create("invalid-log-argument");
      (0, Ob.l)(bb, ub)
    }

    function lu(bb) {
      (0, Ob.k)(bb)
    }
    const Ku = "firebase-heartbeat-store";
    let Wu = null;

    function Cu() {
      return Wu || (Wu = function(bb, ub) {
        let {
          blocked: hb,
          upgrade: Bb,
          blocking: Ob,
          terminated: Gb
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ub = indexedDB.open(bb, ub),
          Lb = ob(Ub);
        return Bb && Ub.addEventListener("upgradeneeded", (bb => {
          Bb(ob(Ub.result), bb.oldVersion, bb.newVersion, ob(Ub.transaction), bb)
        })), hb && Ub.addEventListener("blocked", (bb => hb(bb.oldVersion, bb.newVersion, bb))), Lb.then((bb => {
          Gb && bb.addEventListener("close", (() => Gb())), Ob && bb.addEventListener("versionchange", (bb => Ob(bb.oldVersion, bb.newVersion, bb)))
        })).catch((() => {})), Lb
      }("firebase-heartbeat-database", 1, {
        upgrade: (bb, ub) => {
          if (0 === ub) bb.createObjectStore(Ku)
        }
      }).catch((bb => {
        throw Su.create("idb-open", {
          originalErrorMessage: bb.message
        })
      }))), Wu
    }
    async function du(bb, ub) {
      try {
        const hb = (await Cu()).transaction(Ku, "readwrite"),
          Bb = hb.objectStore(Ku);
        await Bb.put(ub, ru(bb)), await hb.done
      } catch (hb) {
        if (hb instanceof Gb.i) nb.warn(hb.message);
        else {
          const bb = Su.create("idb-set", {
            originalErrorMessage: null === hb || void 0 === hb ? void 0 : hb.message
          });
          nb.warn(bb.message)
        }
      }
    }

    function ru(bb) {
      return `${bb.name}!${bb.options.appId}`
    }
    class ju {
      constructor(bb) {
        this.container = bb, this._heartbeatsCache = null;
        const ub = this.container.getProvider("app").getImmediate();
        this.FX = new Du(ub), this._heartbeatsCachePromise = this.FX.read().then((bb => (this._heartbeatsCache = bb, bb)))
      }
      async triggerHeartbeat() {
        const bb = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          ub = nu();
        if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== ub && !this._heartbeatsCache.heartbeats.some((bb => bb.date === ub))) return this._heartbeatsCache.heartbeats.push({
          date: ub,
          agent: bb
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((bb => {
          const ub = new Date(bb.date).valueOf();
          return Date.now() - ub <= 2592e6
        })), this.FX.overwrite(this._heartbeatsCache)
      }
      async getHeartbeatsHeader() {
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const bb = nu(),
          {
            heartbeatsToSend: ub,
            unsentEntries: hb
          } = function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
            const hb = [];
            let Bb = bb.slice();
            for (const Ob of bb) {
              const bb = hb.find((bb => bb.agent === Ob.agent));
              if (bb) {
                if (bb.dates.push(Ob.date), xu(hb) > ub) {
                  bb.dates.pop();
                  break
                }
              } else if (hb.push({
                  agent: Ob.agent,
                  dates: [Ob.date]
                }), xu(hb) > ub) {
                hb.pop();
                break
              }
              Bb = Bb.slice(1)
            }
            return {
              heartbeatsToSend: hb,
              unsentEntries: Bb
            }
          }(this._heartbeatsCache.heartbeats),
          Bb = (0, Gb.q)(JSON.stringify({
            version: 2,
            heartbeats: ub
          }));
        return this._heartbeatsCache.lastSentHeartbeatDate = bb, hb.length > 0 ? (this._heartbeatsCache.heartbeats = hb, await this.FX.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.FX.overwrite(this._heartbeatsCache)), Bb
      }
    }

    function nu() {
      return (new Date).toISOString().substring(0, 10)
    }
    class Du {
      constructor(bb) {
        this.app = bb, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, Gb.V)() && (0, Gb.jb)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return await async function(bb) {
            try {
              const ub = await Cu();
              return await ub.transaction(Ku).objectStore(Ku).get(ru(bb))
            } catch (ub) {
              if (ub instanceof Gb.i) nb.warn(ub.message);
              else {
                const bb = Su.create("idb-get", {
                  originalErrorMessage: null === ub || void 0 === ub ? void 0 : ub.message
                });
                nb.warn(bb.message)
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
        var ub;
        if (await this._canUseIndexedDBPromise) {
          const hb = await this.read();
          return du(this.app, {
            lastSentHeartbeatDate: null !== (ub = bb.lastSentHeartbeatDate) && void 0 !== ub ? ub : hb.lastSentHeartbeatDate,
            heartbeats: bb.heartbeats
          })
        }
      }
      async add(bb) {
        var ub;
        if (await this._canUseIndexedDBPromise) {
          const hb = await this.read();
          return du(this.app, {
            lastSentHeartbeatDate: null !== (ub = bb.lastSentHeartbeatDate) && void 0 !== ub ? ub : hb.lastSentHeartbeatDate,
            heartbeats: [...hb.heartbeats, ...bb.heartbeats]
          })
        }
      }
    }

    function xu(bb) {
      return (0, Gb.q)(JSON.stringify({
        version: 2,
        heartbeats: bb
      })).length
    }
    var zu;
    zu = "", Ou(new Bb.f("platform-logger", (bb => new db(bb)), "PRIVATE")), Ou(new Bb.f("heartbeat", (bb => new ju(bb)), "PRIVATE")), ou(rb, jb, zu), ou(rb, jb, "esm2017"), ou("fire-js", "")
  },
  39967: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => Ob
    });
    var Bb = hb(39976);
    class Ob {
      constructor(bb, ub, hb) {
        this.name = bb, this.instanceFactory = ub, this.type = hb, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
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
    const Gb = "[DEFAULT]";
    class Ub {
      constructor(bb, ub) {
        this.name = bb, this.container = ub, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
      }
      get(bb) {
        const ub = this.normalizeInstanceIdentifier(bb);
        if (!this.instancesDeferred.has(ub)) {
          const bb = new Bb.e;
          if (this.instancesDeferred.set(ub, bb), this.isInitialized(ub) || this.shouldAutoInitialize()) try {
            const hb = this.getOrInitializeService({
              instanceIdentifier: ub
            });
            hb && bb.resolve(hb)
          } catch (hb) {}
        }
        return this.instancesDeferred.get(ub).promise
      }
      getImmediate(bb) {
        var ub;
        const hb = this.normalizeInstanceIdentifier(null === bb || void 0 === bb ? void 0 : bb.identifier),
          Bb = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.optional) && void 0 !== ub && ub;
        if (!this.isInitialized(hb) && !this.shouldAutoInitialize()) {
          if (Bb) return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: hb
          })
        } catch (Ob) {
          if (Bb) return null;
          throw Ob
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
              instanceIdentifier: Gb
            })
          } catch (ub) {}
          for (const [bb, hb] of this.instancesDeferred.entries()) {
            const Bb = this.normalizeInstanceIdentifier(bb);
            try {
              const bb = this.getOrInitializeService({
                instanceIdentifier: Bb
              });
              hb.resolve(bb)
            } catch (ub) {}
          }
        }
      }
      clearInstance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gb;
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gb;
        return this.instances.has(bb)
      }
      getOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gb;
        return this.instancesOptions.get(bb) || {}
      }
      initialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          options: ub = {}
        } = bb, hb = this.normalizeInstanceIdentifier(bb.instanceIdentifier);
        if (this.isInitialized(hb)) throw Error(`${this.name}(${hb}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const Bb = this.getOrInitializeService({
          instanceIdentifier: hb,
          options: ub
        });
        for (const [Ob, Gb] of this.instancesDeferred.entries()) {
          hb === this.normalizeInstanceIdentifier(Ob) && Gb.resolve(Bb)
        }
        return Bb
      }
      xI(bb, ub) {
        var hb;
        const Bb = this.normalizeInstanceIdentifier(ub),
          Ob = null !== (hb = this.onInitCallbacks.get(Bb)) && void 0 !== hb ? hb : new Set;
        Ob.add(bb), this.onInitCallbacks.set(Bb, Ob);
        const Gb = this.instances.get(Bb);
        return Gb && bb(Gb, Bb), () => {
          Ob.delete(bb)
        }
      }
      invokeOnInitCallbacks(bb, ub) {
        const hb = this.onInitCallbacks.get(ub);
        if (hb)
          for (const Ob of hb) try {
            Ob(bb, ub)
          } catch (Bb) {}
      }
      getOrInitializeService(bb) {
        let {
          instanceIdentifier: ub,
          options: hb = {}
        } = bb, Bb = this.instances.get(ub);
        if (!Bb && this.component && (Bb = this.component.instanceFactory(this.container, {
            instanceIdentifier: (Ob = ub, Ob === Gb ? void 0 : Ob),
            options: hb
          }), this.instances.set(ub, Bb), this.instancesOptions.set(ub, hb), this.invokeOnInitCallbacks(Bb, ub), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, ub, Bb)
        } catch (Ub) {}
        var Ob;
        return Bb || null
      }
      normalizeInstanceIdentifier() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gb;
        return this.component ? this.component.multipleInstances ? bb : Gb : bb
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class Lb {
      constructor(bb) {
        this.name = bb, this.providers = new Map
      }
      FN(bb) {
        const ub = this.getProvider(bb.name);
        if (ub.isComponentSet()) throw new Error(`Component ${bb.name} has already been registered with ${this.name}`);
        ub.setComponent(bb)
      }
      addOrOverwriteComponent(bb) {
        this.getProvider(bb.name).isComponentSet() && this.providers.delete(bb.name), this.FN(bb)
      }
      getProvider(bb) {
        if (this.providers.has(bb)) return this.providers.get(bb);
        const ub = new Ub(bb, this);
        return this.providers.set(bb, ub), ub
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  39983: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      i: () => Sb,
      k: () => ab,
      l: () => Hb
    });
    const Bb = [];
    var Ob;
    ! function(bb) {
      bb[bb.DEBUG = 0] = "DEBUG", bb[bb.VERBOSE = 1] = "VERBOSE", bb[bb.INFO = 2] = "INFO", bb[bb.WARN = 3] = "WARN", bb[bb.ERROR = 4] = "ERROR", bb[bb.SILENT = 5] = "SILENT"
    }(Ob || (Ob = {}));
    const Gb = {
        debug: Ob.DEBUG,
        verbose: Ob.VERBOSE,
        info: Ob.INFO,
        warn: Ob.WARN,
        error: Ob.ERROR,
        silent: Ob.SILENT
      },
      Ub = Ob.INFO,
      Lb = {
        [Ob.DEBUG]: "log",
        [Ob.VERBOSE]: "log",
        [Ob.INFO]: "info",
        [Ob.WARN]: "warn",
        [Ob.ERROR]: "error"
      },
      Yb = function(bb, ub) {
        if (ub < bb.logLevel) return;
        const hb = (new Date).toISOString(),
          Bb = Lb[ub];
        if (!Bb) throw new Error(`Attempted to log a message with an invalid logType (value: ${ub})`);
        for (var Ob = arguments.length, Gb = new Array(Ob > 2 ? Ob - 2 : 0), Ub = 2; Ub < Ob; Ub++) Gb[Ub - 2] = arguments[Ub];
        console[Bb](`[${hb}]  ${bb.name}:`, ...Gb)
      };
    class Sb {
      constructor(bb) {
        this.name = bb, this._logLevel = Ub, this._logHandler = Yb, this._userLogHandler = null, Bb.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(bb) {
        if (!(bb in Ob)) throw new TypeError(`Invalid value "${bb}" assigned to \`logLevel\``);
        this._logLevel = bb
      }
      setLogLevel(bb) {
        this._logLevel = "string" === typeof bb ? Gb[bb] : bb
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
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        this._userLogHandler && this._userLogHandler(this, Ob.DEBUG, ...ub), this._logHandler(this, Ob.DEBUG, ...ub)
      }
      log() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        this._userLogHandler && this._userLogHandler(this, Ob.VERBOSE, ...ub), this._logHandler(this, Ob.VERBOSE, ...ub)
      }
      info() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        this._userLogHandler && this._userLogHandler(this, Ob.INFO, ...ub), this._logHandler(this, Ob.INFO, ...ub)
      }
      warn() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        this._userLogHandler && this._userLogHandler(this, Ob.WARN, ...ub), this._logHandler(this, Ob.WARN, ...ub)
      }
      error() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        this._userLogHandler && this._userLogHandler(this, Ob.ERROR, ...ub), this._logHandler(this, Ob.ERROR, ...ub)
      }
    }

    function ab(bb) {
      Bb.forEach((ub => {
        ub.setLogLevel(bb)
      }))
    }

    function Hb(bb, ub) {
      for (const hb of Bb) {
        let Bb = null;
        ub && ub.level && (Bb = Gb[ub.level]), hb.userLogHandler = null === bb ? null : function(ub, hb) {
          for (var Gb = arguments.length, Ub = new Array(Gb > 2 ? Gb - 2 : 0), Lb = 2; Lb < Gb; Lb++) Ub[Lb - 2] = arguments[Lb];
          const Yb = Ub.map((bb => {
            if (null == bb) return null;
            if ("string" === typeof bb) return bb;
            if ("number" === typeof bb || "boolean" === typeof bb) return bb.toString();
            if (bb instanceof Error) return bb.message;
            try {
              return JSON.stringify(bb)
            } catch (ub) {
              return null
            }
          })).filter((bb => bb)).join(" ");
          hb >= (null !== Bb && void 0 !== Bb ? Bb : ub.logLevel) && bb({
            level: Ob[hb].toLowerCase(),
            message: Yb,
            args: Ub,
            type: ub.name
          })
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);