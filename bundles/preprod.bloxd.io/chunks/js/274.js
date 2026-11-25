/*! For license information please see 8104he.274.c57d214f.chunk.js.LICENSE.txt */
export const id = 274;
export const ids = [274];
export const modules = {
  40761: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => VQ,
      C: () => JQ,
      F: () => gQ,
      I: () => rQ,
      L: () => SQ,
      N: () => jQ,
      R: () => yQ,
      T: () => HQ,
      W: () => DQ,
      Z: () => pQ,
      _: () => BQ,
      d: () => IQ,
      db: () => iQ,
      eb: () => hQ,
      fb: () => GQ,
      h: () => vQ,
      k: () => bQ,
      n: () => UQ,
      q: () => sQ,
      u: () => zQ,
      v: () => fQ,
      x: () => AQ,
      y: () => aQ,
      z: () => cQ
    });
    const wQ = function(QQ) {
        const WQ = [];
        let XQ = 0;
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          let qQ = QQ.charCodeAt(wQ);
          qQ < 128 ? WQ[XQ++] = qQ : qQ < 2048 ? (WQ[XQ++] = qQ >> 6 | 192, WQ[XQ++] = 63 & qQ | 128) : 55296 === (64512 & qQ) && wQ + 1 < QQ.length && 56320 === (64512 & QQ.charCodeAt(wQ + 1)) ? (qQ = 65536 + ((1023 & qQ) << 10) + (1023 & QQ.charCodeAt(++wQ)), WQ[XQ++] = qQ >> 18 | 240, WQ[XQ++] = qQ >> 12 & 63 | 128, WQ[XQ++] = qQ >> 6 & 63 | 128, WQ[XQ++] = 63 & qQ | 128) : (WQ[XQ++] = qQ >> 12 | 224, WQ[XQ++] = qQ >> 6 & 63 | 128, WQ[XQ++] = 63 & qQ | 128)
        }
        return WQ
      },
      qQ = {
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
        encodeByteArray(QQ, WQ) {
          if (!Array.isArray(QQ)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const XQ = WQ ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            wQ = [];
          for (let qQ = 0; qQ < QQ.length; qQ += 3) {
            const WQ = QQ[qQ],
              TQ = qQ + 1 < QQ.length,
              zQ = TQ ? QQ[qQ + 1] : 0,
              sQ = qQ + 2 < QQ.length,
              FQ = sQ ? QQ[qQ + 2] : 0,
              PQ = WQ >> 2,
              gQ = (3 & WQ) << 4 | zQ >> 4;
            let JQ = (15 & zQ) << 2 | FQ >> 6,
              rQ = 63 & FQ;
            sQ || (rQ = 64, TQ || (JQ = 64)), wQ.push(XQ[PQ], XQ[gQ], XQ[JQ], XQ[rQ])
          }
          return wQ.join("")
        },
        encodeString(QQ, WQ) {
          return this.HAS_NATIVE_SUPPORT && !WQ ? btoa(QQ) : this.encodeByteArray(wQ(QQ), WQ)
        },
        decodeString(QQ, WQ) {
          return this.HAS_NATIVE_SUPPORT && !WQ ? atob(QQ) : function(QQ) {
            const WQ = [];
            let XQ = 0,
              wQ = 0;
            for (; XQ < QQ.length;) {
              const qQ = QQ[XQ++];
              if (qQ < 128) WQ[wQ++] = String.fromCharCode(qQ);
              else if (qQ > 191 && qQ < 224) {
                const TQ = QQ[XQ++];
                WQ[wQ++] = String.fromCharCode((31 & qQ) << 6 | 63 & TQ)
              } else if (qQ > 239 && qQ < 365) {
                const TQ = ((7 & qQ) << 18 | (63 & QQ[XQ++]) << 12 | (63 & QQ[XQ++]) << 6 | 63 & QQ[XQ++]) - 65536;
                WQ[wQ++] = String.fromCharCode(55296 + (TQ >> 10)), WQ[wQ++] = String.fromCharCode(56320 + (1023 & TQ))
              } else {
                const TQ = QQ[XQ++],
                  zQ = QQ[XQ++];
                WQ[wQ++] = String.fromCharCode((15 & qQ) << 12 | (63 & TQ) << 6 | 63 & zQ)
              }
            }
            return WQ.join("")
          }(this.decodeStringToByteArray(QQ, WQ))
        },
        decodeStringToByteArray(QQ, WQ) {
          this.init_();
          const XQ = WQ ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            wQ = [];
          for (let qQ = 0; qQ < QQ.length;) {
            const WQ = XQ[QQ.charAt(qQ++)],
              zQ = qQ < QQ.length ? XQ[QQ.charAt(qQ)] : 0;
            ++qQ;
            const sQ = qQ < QQ.length ? XQ[QQ.charAt(qQ)] : 64;
            ++qQ;
            const FQ = qQ < QQ.length ? XQ[QQ.charAt(qQ)] : 64;
            if (++qQ, null == WQ || null == zQ || null == sQ || null == FQ) throw new TQ;
            const PQ = WQ << 2 | zQ >> 4;
            if (wQ.push(PQ), 64 !== sQ) {
              const QQ = zQ << 4 & 240 | sQ >> 2;
              if (wQ.push(QQ), 64 !== FQ) {
                const QQ = sQ << 6 & 192 | FQ;
                wQ.push(QQ)
              }
            }
          }
          return wQ
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let QQ = 0; QQ < this.ENCODED_VALS.length; QQ++) this.byteToCharMap_[QQ] = this.ENCODED_VALS.charAt(QQ), this.charToByteMap_[this.byteToCharMap_[QQ]] = QQ, this.byteToCharMapWebSafe_[QQ] = this.ENCODED_VALS_WEBSAFE.charAt(QQ), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[QQ]] = QQ, QQ >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(QQ)] = QQ, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(QQ)] = QQ)
          }
        }
      };
    class TQ extends Error {
      constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
      }
    }
    const zQ = function(QQ) {
        return function(QQ) {
          const WQ = wQ(QQ);
          return qQ.encodeByteArray(WQ, !0)
        }(QQ).replace(/\./g, "")
      },
      sQ = function(QQ) {
        try {
          return qQ.decodeString(QQ, !0)
        } catch (WQ) {
          console.error("base64Decode failed: ", WQ)
        }
        return null
      };
    const FQ = () => function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof XQ.g) return XQ.g;
        throw new Error("Unable to locate global object.")
      }().__FIREBASE_DEFAULTS__,
      PQ = () => {
        try {
          return FQ() || (() => {
            if ("undefined" === typeof process) return
          })() || (() => {
            if ("undefined" === typeof document) return;
            let QQ;
            try {
              QQ = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (XQ) {
              return
            }
            const WQ = QQ && sQ(QQ[1]);
            return WQ && JSON.parse(WQ)
          })()
        } catch (QQ) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${QQ}`)
        }
      },
      gQ = QQ => {
        var WQ, XQ;
        return null === (XQ = null === (WQ = PQ()) || void 0 === WQ ? void 0 : WQ.emulatorHosts) || void 0 === XQ ? void 0 : XQ[QQ]
      },
      JQ = () => {
        var QQ;
        return null === (QQ = PQ()) || void 0 === QQ ? void 0 : QQ.config
      },
      rQ = QQ => {
        var WQ;
        return null === (WQ = PQ()) || void 0 === WQ ? void 0 : WQ[`_${QQ}`]
      };
    class IQ {
      constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((QQ, WQ) => {
          this.resolve = QQ, this.reject = WQ
        }))
      }
      wrapCallback(QQ) {
        return (WQ, XQ) => {
          WQ ? this.reject(WQ) : this.resolve(XQ), "function" === typeof QQ && (this.promise.catch((() => {})), 1 === QQ.length ? QQ(WQ) : QQ(WQ, XQ))
        }
      }
    }

    function jQ() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function BQ() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jQ())
    }

    function yQ() {
      const QQ = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof QQ && void 0 !== QQ.id
    }

    function VQ() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }

    function DQ() {
      const QQ = jQ();
      return QQ.indexOf("MSIE ") >= 0 || QQ.indexOf("Trident/") >= 0
    }

    function pQ() {
      try {
        return "object" === typeof indexedDB
      } catch (QQ) {
        return !1
      }
    }

    function GQ() {
      return new Promise(((QQ, WQ) => {
        try {
          let XQ = !0;
          const wQ = "validate-browser-context-for-indexeddb-analytics-module",
            qQ = self.indexedDB.open(wQ);
          qQ.onsuccess = () => {
            qQ.result.close(), XQ || self.indexedDB.deleteDatabase(wQ), QQ(!0)
          }, qQ.onupgradeneeded = () => {
            XQ = !1
          }, qQ.onerror = () => {
            var QQ;
            WQ((null === (QQ = qQ.error) || void 0 === QQ ? void 0 : QQ.message) || "")
          }
        } catch (XQ) {
          WQ(XQ)
        }
      }))
    }

    function UQ() {
      return !("undefined" === typeof navigator || !navigator.cookieEnabled)
    }
    class bQ extends Error {
      constructor(QQ, WQ, XQ) {
        super(WQ), this.code = QQ, this.customData = XQ, this.name = "FirebaseError", Object.setPrototypeOf(this, bQ.prototype), Error.captureStackTrace && Error.captureStackTrace(this, vQ.prototype.create)
      }
    }
    class vQ {
      constructor(QQ, WQ, XQ) {
        this.service = QQ, this.serviceName = WQ, this.errors = XQ
      }
      create(QQ) {
        const WQ = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
          XQ = `${this.service}/${QQ}`,
          wQ = this.errors[QQ],
          qQ = wQ ? function(QQ, WQ) {
            return QQ.replace(dQ, ((QQ, XQ) => {
              const wQ = WQ[XQ];
              return null != wQ ? String(wQ) : `<${XQ}?>`
            }))
          }(wQ, WQ) : "Error",
          TQ = `${this.serviceName}: ${qQ} (${XQ}).`;
        return new bQ(XQ, TQ, WQ)
      }
    }
    const dQ = /\{\$([^}]+)}/g;

    function HQ(QQ) {
      for (const WQ in QQ)
        if (Object.prototype.hasOwnProperty.call(QQ, WQ)) return !1;
      return !0
    }

    function aQ(QQ, WQ) {
      if (QQ === WQ) return !0;
      const XQ = Object.keys(QQ),
        wQ = Object.keys(WQ);
      for (const qQ of XQ) {
        if (!wQ.includes(qQ)) return !1;
        const XQ = QQ[qQ],
          TQ = WQ[qQ];
        if (lQ(XQ) && lQ(TQ)) {
          if (!aQ(XQ, TQ)) return !1
        } else if (XQ !== TQ) return !1
      }
      for (const qQ of wQ)
        if (!XQ.includes(qQ)) return !1;
      return !0
    }

    function lQ(QQ) {
      return null !== QQ && "object" === typeof QQ
    }

    function hQ(QQ) {
      const WQ = [];
      for (const [XQ, wQ] of Object.entries(QQ)) Array.isArray(wQ) ? wQ.forEach((QQ => {
        WQ.push(encodeURIComponent(XQ) + "=" + encodeURIComponent(QQ))
      })) : WQ.push(encodeURIComponent(XQ) + "=" + encodeURIComponent(wQ));
      return WQ.length ? "&" + WQ.join("&") : ""
    }

    function iQ(QQ) {
      const WQ = {};
      return QQ.replace(/^\?/, "").split("&").forEach((QQ => {
        if (QQ) {
          const [XQ, wQ] = QQ.split("=");
          WQ[decodeURIComponent(XQ)] = decodeURIComponent(wQ)
        }
      })), WQ
    }

    function cQ(QQ) {
      const WQ = QQ.indexOf("?");
      if (!WQ) return "";
      const XQ = QQ.indexOf("#", WQ);
      return QQ.substring(WQ, XQ > 0 ? XQ : void 0)
    }

    function AQ(QQ, WQ) {
      const XQ = new RQ(QQ, WQ);
      return XQ.subscribe.bind(XQ)
    }
    class RQ {
      constructor(QQ, WQ) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = WQ, this.task.then((() => {
          QQ(this)
        })).catch((QQ => {
          this.error(QQ)
        }))
      }
      next(QQ) {
        this.forEachObserver((WQ => {
          WQ.next(QQ)
        }))
      }
      error(QQ) {
        this.forEachObserver((WQ => {
          WQ.error(QQ)
        })), this.close(QQ)
      }
      complete() {
        this.forEachObserver((QQ => {
          QQ.complete()
        })), this.close()
      }
      subscribe(QQ, WQ, XQ) {
        let wQ;
        if (void 0 === QQ && void 0 === WQ && void 0 === XQ) throw new Error("Missing Observer.");
        wQ = function(QQ, WQ) {
          if ("object" !== typeof QQ || null === QQ) return !1;
          for (const XQ of WQ)
            if (XQ in QQ && "function" === typeof QQ[XQ]) return !0;
          return !1
        }(QQ, ["next", "error", "complete"]) ? QQ : {
          next: QQ,
          error: WQ,
          complete: XQ
        }, void 0 === wQ.next && (wQ.next = EQ), void 0 === wQ.error && (wQ.error = EQ), void 0 === wQ.complete && (wQ.complete = EQ);
        const qQ = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? wQ.error(this.finalError) : wQ.complete()
          } catch (QQ) {}
        })), this.observers.push(wQ), qQ
      }
      unsubscribeOne(QQ) {
        void 0 !== this.observers && void 0 !== this.observers[QQ] && (delete this.observers[QQ], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(QQ) {
        if (!this.finalized)
          for (let WQ = 0; WQ < this.observers.length; WQ++) this.sendOne(WQ, QQ)
      }
      sendOne(QQ, WQ) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[QQ]) try {
            WQ(this.observers[QQ])
          } catch (XQ) {
            "undefined" !== typeof console && console.error && console.error(XQ)
          }
        }))
      }
      close(QQ) {
        this.finalized || (this.finalized = !0, void 0 !== QQ && (this.finalError = QQ), this.task.then((() => {
          this.observers = void 0, this.onNoObservers = void 0
        })))
      }
    }

    function EQ() {}
    const CQ = 1e3,
      uQ = 2,
      LQ = 144e5,
      kQ = .5;

    function fQ(QQ) {
      let WQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uQ;
      const XQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CQ) * Math.pow(WQ, QQ),
        wQ = Math.round(kQ * XQ * (Math.random() - .5) * 2);
      return Math.min(LQ, XQ + wQ)
    }

    function SQ(QQ) {
      return QQ && QQ._delegate ? QQ._delegate : QQ
    }
  },
  40755: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ.k,
      g: () => JW,
      k: () => mQ,
      n: () => XW,
      q: () => wW,
      r: () => QW,
      t: () => sW,
      x: () => WW,
      B: () => TW,
      E: () => qW,
      G: () => zW,
      K: () => BW,
      O: () => IW,
      M: () => jW,
      S: () => rW,
      W: () => VW,
      _: () => yW,
      cb: () => DW
    });
    var wQ = XQ(40758),
      qQ = XQ(40770),
      TQ = XQ(40761);
    let zQ, sQ;
    const FQ = new WeakMap,
      PQ = new WeakMap,
      gQ = new WeakMap,
      JQ = new WeakMap,
      rQ = new WeakMap;
    let IQ = {
      get(QQ, WQ, XQ) {
        if (QQ instanceof IDBTransaction) {
          if ("done" === WQ) return PQ.get(QQ);
          if ("objectStoreNames" === WQ) return QQ.objectStoreNames || gQ.get(QQ);
          if ("store" === WQ) return XQ.objectStoreNames[1] ? void 0 : XQ.objectStore(XQ.objectStoreNames[0])
        }
        return yQ(QQ[WQ])
      },
      set: (QQ, WQ, XQ) => (QQ[WQ] = XQ, !0),
      has: (QQ, WQ) => QQ instanceof IDBTransaction && ("done" === WQ || "store" === WQ) || WQ in QQ
    };

    function jQ(QQ) {
      return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (sQ || (sQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return QQ.apply(VQ(this), XQ), yQ(FQ.get(this))
      } : function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return yQ(QQ.apply(VQ(this), XQ))
      } : function(WQ) {
        for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
        const TQ = QQ.call(VQ(this), WQ, ...wQ);
        return gQ.set(TQ, WQ.sort ? WQ.sort() : [WQ]), yQ(TQ)
      }
    }

    function BQ(QQ) {
      return "function" === typeof QQ ? jQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
        if (PQ.has(QQ)) return;
        const WQ = new Promise(((WQ, XQ) => {
          const wQ = () => {
              QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", TQ), QQ.removeEventListener("abort", TQ)
            },
            qQ = () => {
              WQ(), wQ()
            },
            TQ = () => {
              XQ(QQ.error || new DOMException("AbortError", "AbortError")), wQ()
            };
          QQ.addEventListener("complete", qQ), QQ.addEventListener("error", TQ), QQ.addEventListener("abort", TQ)
        }));
        PQ.set(QQ, WQ)
      }(QQ), WQ = QQ, (zQ || (zQ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((QQ => WQ instanceof QQ)) ? new Proxy(QQ, IQ) : QQ);
      var WQ
    }

    function yQ(QQ) {
      if (QQ instanceof IDBRequest) return function(QQ) {
        const WQ = new Promise(((WQ, XQ) => {
          const wQ = () => {
              QQ.removeEventListener("success", qQ), QQ.removeEventListener("error", TQ)
            },
            qQ = () => {
              WQ(yQ(QQ.result)), wQ()
            },
            TQ = () => {
              XQ(QQ.error), wQ()
            };
          QQ.addEventListener("success", qQ), QQ.addEventListener("error", TQ)
        }));
        return WQ.then((WQ => {
          WQ instanceof IDBCursor && FQ.set(WQ, QQ)
        })).catch((() => {})), rQ.set(WQ, QQ), WQ
      }(QQ);
      if (JQ.has(QQ)) return JQ.get(QQ);
      const WQ = BQ(QQ);
      return WQ !== QQ && (JQ.set(QQ, WQ), rQ.set(WQ, QQ)), WQ
    }
    const VQ = QQ => rQ.get(QQ);
    const DQ = ["get", "getKey", "getAll", "getAllKeys", "count"],
      pQ = ["put", "add", "delete", "clear"],
      GQ = new Map;

    function UQ(QQ, WQ) {
      if (!(QQ instanceof IDBDatabase) || WQ in QQ || "string" !== typeof WQ) return;
      if (GQ.get(WQ)) return GQ.get(WQ);
      const XQ = WQ.replace(/FromIndex$/, ""),
        wQ = WQ !== XQ,
        qQ = pQ.includes(XQ);
      if (!(XQ in (wQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !DQ.includes(XQ)) return;
      const TQ = async function(QQ) {
        const WQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
        let TQ = WQ.store;
        for (var zQ = arguments.length, sQ = new Array(zQ > 1 ? zQ - 1 : 0), FQ = 1; FQ < zQ; FQ++) sQ[FQ - 1] = arguments[FQ];
        return wQ && (TQ = TQ.index(sQ.shift())), (await Promise.all([TQ[XQ](...sQ), qQ && WQ.done]))[0]
      };
      return GQ.set(WQ, TQ), TQ
    }
    IQ = (QQ => ({
      ...QQ,
      get: (WQ, XQ, wQ) => UQ(WQ, XQ) || QQ.get(WQ, XQ, wQ),
      has: (WQ, XQ) => !!UQ(WQ, XQ) || QQ.has(WQ, XQ)
    }))(IQ);
    class bQ {
      constructor(QQ) {
        this.container = QQ
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((QQ => {
          if (function(QQ) {
              const WQ = QQ.getComponent();
              return "VERSION" === (null === WQ || void 0 === WQ ? void 0 : WQ.type)
            }(QQ)) {
            const WQ = QQ.getImmediate();
            return `${WQ.library}/${WQ.version}`
          }
          return null
        })).filter((QQ => QQ)).join(" ")
      }
    }
    const vQ = "@firebase/app",
      dQ = "0.9.13",
      HQ = new qQ.e("@firebase/app"),
      aQ = "@firebase/app-compat",
      lQ = "@firebase/analytics-compat",
      hQ = "@firebase/analytics",
      iQ = "@firebase/app-check-compat",
      cQ = "@firebase/app-check",
      AQ = "@firebase/auth",
      RQ = "@firebase/auth-compat",
      EQ = "@firebase/database",
      CQ = "@firebase/database-compat",
      uQ = "@firebase/functions",
      LQ = "@firebase/functions-compat",
      kQ = "@firebase/installations",
      fQ = "@firebase/installations-compat",
      SQ = "@firebase/messaging",
      tQ = "@firebase/messaging-compat",
      oQ = "@firebase/performance",
      eQ = "@firebase/performance-compat",
      nQ = "@firebase/remote-config",
      xQ = "@firebase/remote-config-compat",
      YQ = "@firebase/storage",
      NQ = "@firebase/storage-compat",
      ZQ = "@firebase/firestore",
      OQ = "@firebase/firestore-compat",
      KQ = "firebase",
      mQ = "[DEFAULT]",
      MQ = {
        [vQ]: "fire-core",
        [aQ]: "fire-core-compat",
        [hQ]: "fire-analytics",
        [lQ]: "fire-analytics-compat",
        [cQ]: "fire-app-check",
        [iQ]: "fire-app-check-compat",
        [AQ]: "fire-auth",
        [RQ]: "fire-auth-compat",
        [EQ]: "fire-rtdb",
        [CQ]: "fire-rtdb-compat",
        [uQ]: "fire-fn",
        [LQ]: "fire-fn-compat",
        [kQ]: "fire-iid",
        [fQ]: "fire-iid-compat",
        [SQ]: "fire-fcm",
        [tQ]: "fire-fcm-compat",
        [oQ]: "fire-perf",
        [eQ]: "fire-perf-compat",
        [nQ]: "fire-rc",
        [xQ]: "fire-rc-compat",
        [YQ]: "fire-gcs",
        [NQ]: "fire-gcs-compat",
        [ZQ]: "fire-fst",
        [OQ]: "fire-fst-compat",
        "fire-js": "fire-js",
        [KQ]: "fire-js-all"
      },
      QW = new Map,
      WW = new Map;

    function XW(QQ, WQ) {
      try {
        QQ.container.sC(WQ)
      } catch (XQ) {
        HQ.debug(`Component ${WQ.name} failed to register with FirebaseApp ${QQ.name}`, XQ)
      }
    }

    function wW(QQ, WQ) {
      QQ.container.addOrOverwriteComponent(WQ)
    }

    function qW(QQ) {
      const WQ = QQ.name;
      if (WW.has(WQ)) return HQ.debug(`There were multiple attempts to register component ${WQ}.`), !1;
      WW.set(WQ, QQ);
      for (const XQ of QW.values()) XW(XQ, QQ);
      return !0
    }

    function TW(QQ, WQ) {
      const XQ = QQ.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return XQ && XQ.triggerHeartbeat(), QQ.container.getProvider(WQ)
    }

    function zW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mQ;
      TW(QQ, WQ).clearInstance(XQ)
    }

    function sW() {
      WW.clear()
    }
    const FW = {
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
      PW = new TQ.h("app", "Firebase", FW);
    class gW {
      constructor(QQ, WQ, XQ) {
        this._isDeleted = !1, this._options = Object.assign({}, QQ), this._config = Object.assign({}, WQ), this._name = WQ.name, this._automaticDataCollectionEnabled = WQ.automaticDataCollectionEnabled, this._container = XQ, this.container.sC(new wQ.e("app", (() => this), "PUBLIC"))
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
      }
      set automaticDataCollectionEnabled(QQ) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = QQ
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
      set isDeleted(QQ) {
        this._isDeleted = QQ
      }
      checkDestroyed() {
        if (this.isDeleted) throw PW.create("app-deleted", {
          appName: this._name
        })
      }
    }
    const JW = "9.23.0";

    function rW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        XQ = QQ;
      if ("object" !== typeof WQ) {
        WQ = {
          name: WQ
        }
      }
      const qQ = Object.assign({
          name: mQ,
          automaticDataCollectionEnabled: !1
        }, WQ),
        zQ = qQ.name;
      if ("string" !== typeof zQ || !zQ) throw PW.create("bad-app-name", {
        appName: String(zQ)
      });
      if (XQ || (XQ = (0, TQ.C)()), !XQ) throw PW.create("no-options");
      const sQ = QW.get(zQ);
      if (sQ) {
        if ((0, TQ.y)(XQ, sQ.options) && (0, TQ.y)(qQ, sQ.config)) return sQ;
        throw PW.create("duplicate-app", {
          appName: zQ
        })
      }
      const FQ = new wQ.c(zQ);
      for (const wQ of WW.values()) FQ.sC(wQ);
      const PQ = new gW(XQ, qQ, FQ);
      return QW.set(zQ, PQ), PQ
    }

    function IW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mQ;
      const WQ = QW.get(QQ);
      if (!WQ && QQ === mQ && (0, TQ.C)()) return rW();
      if (!WQ) throw PW.create("no-app", {
        appName: QQ
      });
      return WQ
    }

    function jW() {
      return Array.from(QW.values())
    }
    async function BW(QQ) {
      const WQ = QQ.name;
      QW.has(WQ) && (QW.delete(WQ), await Promise.all(QQ.container.getProviders().map((QQ => QQ.delete()))), QQ.isDeleted = !0)
    }

    function yW(QQ, WQ, XQ) {
      var qQ;
      let TQ = null !== (qQ = MQ[QQ]) && void 0 !== qQ ? qQ : QQ;
      XQ && (TQ += `-${XQ}`);
      const zQ = TQ.match(/\s|\//),
        sQ = WQ.match(/\s|\//);
      if (zQ || sQ) {
        const QQ = [`Unable to register library "${TQ}" with version "${WQ}":`];
        return zQ && QQ.push(`library name "${TQ}" contains illegal characters (whitespace or "/")`), zQ && sQ && QQ.push("and"), sQ && QQ.push(`version name "${WQ}" contains illegal characters (whitespace or "/")`), void HQ.warn(QQ.join(" "))
      }
      qW(new wQ.e(`${TQ}-version`, (() => ({
        library: TQ,
        version: WQ
      })), "VERSION"))
    }

    function VW(QQ, WQ) {
      if (null !== QQ && "function" !== typeof QQ) throw PW.create("invalid-log-argument");
      (0, qQ.h)(QQ, WQ)
    }

    function DW(QQ) {
      (0, qQ.f)(QQ)
    }
    const pW = "firebase-heartbeat-store";
    let GW = null;

    function UW() {
      return GW || (GW = function(QQ, WQ) {
        let {
          blocked: XQ,
          upgrade: wQ,
          blocking: qQ,
          terminated: TQ
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const zQ = indexedDB.open(QQ, WQ),
          sQ = yQ(zQ);
        return wQ && zQ.addEventListener("upgradeneeded", (QQ => {
          wQ(yQ(zQ.result), QQ.oldVersion, QQ.newVersion, yQ(zQ.transaction), QQ)
        })), XQ && zQ.addEventListener("blocked", (QQ => XQ(QQ.oldVersion, QQ.newVersion, QQ))), sQ.then((QQ => {
          TQ && QQ.addEventListener("close", (() => TQ())), qQ && QQ.addEventListener("versionchange", (QQ => qQ(QQ.oldVersion, QQ.newVersion, QQ)))
        })).catch((() => {})), sQ
      }("firebase-heartbeat-database", 1, {
        upgrade: (QQ, WQ) => {
          if (0 === WQ) QQ.createObjectStore(pW)
        }
      }).catch((QQ => {
        throw PW.create("idb-open", {
          originalErrorMessage: QQ.message
        })
      }))), GW
    }
    async function bW(QQ, WQ) {
      try {
        const XQ = (await UW()).transaction(pW, "readwrite"),
          wQ = XQ.objectStore(pW);
        await wQ.put(WQ, vW(QQ)), await XQ.done
      } catch (XQ) {
        if (XQ instanceof TQ.k) HQ.warn(XQ.message);
        else {
          const QQ = PW.create("idb-set", {
            originalErrorMessage: null === XQ || void 0 === XQ ? void 0 : XQ.message
          });
          HQ.warn(QQ.message)
        }
      }
    }

    function vW(QQ) {
      return `${QQ.name}!${QQ.options.appId}`
    }
    class dW {
      constructor(QQ) {
        this.container = QQ, this._heartbeatsCache = null;
        const WQ = this.container.getProvider("app").getImmediate();
        this.PB = new aW(WQ), this._heartbeatsCachePromise = this.PB.read().then((QQ => (this._heartbeatsCache = QQ, QQ)))
      }
      async triggerHeartbeat() {
        const QQ = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          WQ = HW();
        if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== WQ && !this._heartbeatsCache.heartbeats.some((QQ => QQ.date === WQ))) return this._heartbeatsCache.heartbeats.push({
          date: WQ,
          agent: QQ
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((QQ => {
          const WQ = new Date(QQ.date).valueOf();
          return Date.now() - WQ <= 2592e6
        })), this.PB.overwrite(this._heartbeatsCache)
      }
      async getHeartbeatsHeader() {
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const QQ = HW(),
          {
            heartbeatsToSend: WQ,
            unsentEntries: XQ
          } = function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
            const XQ = [];
            let wQ = QQ.slice();
            for (const qQ of QQ) {
              const QQ = XQ.find((QQ => QQ.agent === qQ.agent));
              if (QQ) {
                if (QQ.dates.push(qQ.date), lW(XQ) > WQ) {
                  QQ.dates.pop();
                  break
                }
              } else if (XQ.push({
                  agent: qQ.agent,
                  dates: [qQ.date]
                }), lW(XQ) > WQ) {
                XQ.pop();
                break
              }
              wQ = wQ.slice(1)
            }
            return {
              heartbeatsToSend: XQ,
              unsentEntries: wQ
            }
          }(this._heartbeatsCache.heartbeats),
          wQ = (0, TQ.u)(JSON.stringify({
            version: 2,
            heartbeats: WQ
          }));
        return this._heartbeatsCache.lastSentHeartbeatDate = QQ, XQ.length > 0 ? (this._heartbeatsCache.heartbeats = XQ, await this.PB.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.PB.overwrite(this._heartbeatsCache)), wQ
      }
    }

    function HW() {
      return (new Date).toISOString().substring(0, 10)
    }
    class aW {
      constructor(QQ) {
        this.app = QQ, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, TQ.Z)() && (0, TQ.fb)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return await async function(QQ) {
            try {
              const WQ = await UW();
              return await WQ.transaction(pW).objectStore(pW).get(vW(QQ))
            } catch (WQ) {
              if (WQ instanceof TQ.k) HQ.warn(WQ.message);
              else {
                const QQ = PW.create("idb-get", {
                  originalErrorMessage: null === WQ || void 0 === WQ ? void 0 : WQ.message
                });
                HQ.warn(QQ.message)
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
      async overwrite(QQ) {
        var WQ;
        if (await this._canUseIndexedDBPromise) {
          const XQ = await this.read();
          return bW(this.app, {
            lastSentHeartbeatDate: null !== (WQ = QQ.lastSentHeartbeatDate) && void 0 !== WQ ? WQ : XQ.lastSentHeartbeatDate,
            heartbeats: QQ.heartbeats
          })
        }
      }
      async add(QQ) {
        var WQ;
        if (await this._canUseIndexedDBPromise) {
          const XQ = await this.read();
          return bW(this.app, {
            lastSentHeartbeatDate: null !== (WQ = QQ.lastSentHeartbeatDate) && void 0 !== WQ ? WQ : XQ.lastSentHeartbeatDate,
            heartbeats: [...XQ.heartbeats, ...QQ.heartbeats]
          })
        }
      }
    }

    function lW(QQ) {
      return (0, TQ.u)(JSON.stringify({
        version: 2,
        heartbeats: QQ
      })).length
    }
    var hW;
    hW = "", qW(new wQ.e("platform-logger", (QQ => new bQ(QQ)), "PRIVATE")), qW(new wQ.e("heartbeat", (QQ => new dW(QQ)), "PRIVATE")), yW(vQ, dQ, hW), yW(vQ, dQ, "esm2017"), yW("fire-js", "")
  },
  40758: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      e: () => qQ
    });
    var wQ = XQ(40761);
    class qQ {
      constructor(QQ, WQ, XQ) {
        this.name = QQ, this.instanceFactory = WQ, this.type = XQ, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
      }
      setInstantiationMode(QQ) {
        return this.instantiationMode = QQ, this
      }
      setMultipleInstances(QQ) {
        return this.multipleInstances = QQ, this
      }
      setServiceProps(QQ) {
        return this.serviceProps = QQ, this
      }
      setInstanceCreatedCallback(QQ) {
        return this.onInstanceCreated = QQ, this
      }
    }
    const TQ = "[DEFAULT]";
    class zQ {
      constructor(QQ, WQ) {
        this.name = QQ, this.container = WQ, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
      }
      get(QQ) {
        const WQ = this.normalizeInstanceIdentifier(QQ);
        if (!this.instancesDeferred.has(WQ)) {
          const QQ = new wQ.d;
          if (this.instancesDeferred.set(WQ, QQ), this.isInitialized(WQ) || this.shouldAutoInitialize()) try {
            const XQ = this.getOrInitializeService({
              instanceIdentifier: WQ
            });
            XQ && QQ.resolve(XQ)
          } catch (XQ) {}
        }
        return this.instancesDeferred.get(WQ).promise
      }
      getImmediate(QQ) {
        var WQ;
        const XQ = this.normalizeInstanceIdentifier(null === QQ || void 0 === QQ ? void 0 : QQ.identifier),
          wQ = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.optional) && void 0 !== WQ && WQ;
        if (!this.isInitialized(XQ) && !this.shouldAutoInitialize()) {
          if (wQ) return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: XQ
          })
        } catch (qQ) {
          if (wQ) return null;
          throw qQ
        }
      }
      getComponent() {
        return this.component
      }
      setComponent(QQ) {
        if (QQ.name !== this.name) throw Error(`Mismatching Component ${QQ.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = QQ, this.shouldAutoInitialize()) {
          if (function(QQ) {
              return "EAGER" === QQ.instantiationMode
            }(QQ)) try {
            this.getOrInitializeService({
              instanceIdentifier: TQ
            })
          } catch (WQ) {}
          for (const [QQ, XQ] of this.instancesDeferred.entries()) {
            const wQ = this.normalizeInstanceIdentifier(QQ);
            try {
              const QQ = this.getOrInitializeService({
                instanceIdentifier: wQ
              });
              XQ.resolve(QQ)
            } catch (WQ) {}
          }
        }
      }
      clearInstance() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
        this.instancesDeferred.delete(QQ), this.instancesOptions.delete(QQ), this.instances.delete(QQ)
      }
      async delete() {
        const QQ = Array.from(this.instances.values());
        await Promise.all([...QQ.filter((QQ => "INTERNAL" in QQ)).map((QQ => QQ.INTERNAL.delete())), ...QQ.filter((QQ => "_delete" in QQ)).map((QQ => QQ._delete()))])
      }
      isComponentSet() {
        return null != this.component
      }
      isInitialized() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
        return this.instances.has(QQ)
      }
      getOptions() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
        return this.instancesOptions.get(QQ) || {}
      }
      initialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          options: WQ = {}
        } = QQ, XQ = this.normalizeInstanceIdentifier(QQ.instanceIdentifier);
        if (this.isInitialized(XQ)) throw Error(`${this.name}(${XQ}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const wQ = this.getOrInitializeService({
          instanceIdentifier: XQ,
          options: WQ
        });
        for (const [qQ, TQ] of this.instancesDeferred.entries()) {
          XQ === this.normalizeInstanceIdentifier(qQ) && TQ.resolve(wQ)
        }
        return wQ
      }
      cL(QQ, WQ) {
        var XQ;
        const wQ = this.normalizeInstanceIdentifier(WQ),
          qQ = null !== (XQ = this.onInitCallbacks.get(wQ)) && void 0 !== XQ ? XQ : new Set;
        qQ.add(QQ), this.onInitCallbacks.set(wQ, qQ);
        const TQ = this.instances.get(wQ);
        return TQ && QQ(TQ, wQ), () => {
          qQ.delete(QQ)
        }
      }
      invokeOnInitCallbacks(QQ, WQ) {
        const XQ = this.onInitCallbacks.get(WQ);
        if (XQ)
          for (const qQ of XQ) try {
            qQ(QQ, WQ)
          } catch (wQ) {}
      }
      getOrInitializeService(QQ) {
        let {
          instanceIdentifier: WQ,
          options: XQ = {}
        } = QQ, wQ = this.instances.get(WQ);
        if (!wQ && this.component && (wQ = this.component.instanceFactory(this.container, {
            instanceIdentifier: (qQ = WQ, qQ === TQ ? void 0 : qQ),
            options: XQ
          }), this.instances.set(WQ, wQ), this.instancesOptions.set(WQ, XQ), this.invokeOnInitCallbacks(wQ, WQ), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, WQ, wQ)
        } catch (zQ) {}
        var qQ;
        return wQ || null
      }
      normalizeInstanceIdentifier() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
        return this.component ? this.component.multipleInstances ? QQ : TQ : QQ
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class sQ {
      constructor(QQ) {
        this.name = QQ, this.providers = new Map
      }
      sC(QQ) {
        const WQ = this.getProvider(QQ.name);
        if (WQ.isComponentSet()) throw new Error(`Component ${QQ.name} has already been registered with ${this.name}`);
        WQ.setComponent(QQ)
      }
      addOrOverwriteComponent(QQ) {
        this.getProvider(QQ.name).isComponentSet() && this.providers.delete(QQ.name), this.sC(QQ)
      }
      getProvider(QQ) {
        if (this.providers.has(QQ)) return this.providers.get(QQ);
        const WQ = new zQ(QQ, this);
        return this.providers.set(QQ, WQ), WQ
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  40770: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      e: () => PQ,
      f: () => gQ,
      h: () => JQ
    });
    const wQ = [];
    var qQ;
    ! function(QQ) {
      QQ[QQ.DEBUG = 0] = "DEBUG", QQ[QQ.VERBOSE = 1] = "VERBOSE", QQ[QQ.INFO = 2] = "INFO", QQ[QQ.WARN = 3] = "WARN", QQ[QQ.ERROR = 4] = "ERROR", QQ[QQ.SILENT = 5] = "SILENT"
    }(qQ || (qQ = {}));
    const TQ = {
        debug: qQ.DEBUG,
        verbose: qQ.VERBOSE,
        info: qQ.INFO,
        warn: qQ.WARN,
        error: qQ.ERROR,
        silent: qQ.SILENT
      },
      zQ = qQ.INFO,
      sQ = {
        [qQ.DEBUG]: "log",
        [qQ.VERBOSE]: "log",
        [qQ.INFO]: "info",
        [qQ.WARN]: "warn",
        [qQ.ERROR]: "error"
      },
      FQ = function(QQ, WQ) {
        if (WQ < QQ.logLevel) return;
        const XQ = (new Date).toISOString(),
          wQ = sQ[WQ];
        if (!wQ) throw new Error(`Attempted to log a message with an invalid logType (value: ${WQ})`);
        for (var qQ = arguments.length, TQ = new Array(qQ > 2 ? qQ - 2 : 0), zQ = 2; zQ < qQ; zQ++) TQ[zQ - 2] = arguments[zQ];
        console[wQ](`[${XQ}]  ${QQ.name}:`, ...TQ)
      };
    class PQ {
      constructor(QQ) {
        this.name = QQ, this._logLevel = zQ, this._logHandler = FQ, this._userLogHandler = null, wQ.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(QQ) {
        if (!(QQ in qQ)) throw new TypeError(`Invalid value "${QQ}" assigned to \`logLevel\``);
        this._logLevel = QQ
      }
      setLogLevel(QQ) {
        this._logLevel = "string" === typeof QQ ? TQ[QQ] : QQ
      }
      get logHandler() {
        return this._logHandler
      }
      set logHandler(QQ) {
        if ("function" !== typeof QQ) throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = QQ
      }
      get userLogHandler() {
        return this._userLogHandler
      }
      set userLogHandler(QQ) {
        this._userLogHandler = QQ
      }
      debug() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        this._userLogHandler && this._userLogHandler(this, qQ.DEBUG, ...WQ), this._logHandler(this, qQ.DEBUG, ...WQ)
      }
      log() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        this._userLogHandler && this._userLogHandler(this, qQ.VERBOSE, ...WQ), this._logHandler(this, qQ.VERBOSE, ...WQ)
      }
      info() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        this._userLogHandler && this._userLogHandler(this, qQ.INFO, ...WQ), this._logHandler(this, qQ.INFO, ...WQ)
      }
      warn() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        this._userLogHandler && this._userLogHandler(this, qQ.WARN, ...WQ), this._logHandler(this, qQ.WARN, ...WQ)
      }
      error() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        this._userLogHandler && this._userLogHandler(this, qQ.ERROR, ...WQ), this._logHandler(this, qQ.ERROR, ...WQ)
      }
    }

    function gQ(QQ) {
      wQ.forEach((WQ => {
        WQ.setLogLevel(QQ)
      }))
    }

    function JQ(QQ, WQ) {
      for (const XQ of wQ) {
        let wQ = null;
        WQ && WQ.level && (wQ = TQ[WQ.level]), XQ.userLogHandler = null === QQ ? null : function(WQ, XQ) {
          for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
          const FQ = zQ.map((QQ => {
            if (null == QQ) return null;
            if ("string" === typeof QQ) return QQ;
            if ("number" === typeof QQ || "boolean" === typeof QQ) return QQ.toString();
            if (QQ instanceof Error) return QQ.message;
            try {
              return JSON.stringify(QQ)
            } catch (WQ) {
              return null
            }
          })).filter((QQ => QQ)).join(" ");
          XQ >= (null !== wQ && void 0 !== wQ ? wQ : WQ.logLevel) && QQ({
            level: qQ[XQ].toLowerCase(),
            message: FQ,
            args: zQ,
            type: WQ.name
          })
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);