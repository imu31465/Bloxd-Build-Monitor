/*! For license information please see bqoxjr.258.8d76cd85.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
  39949: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => GQ,
      C: () => RQ,
      G: () => IQ,
      J: () => HQ,
      K: () => uQ,
      M: () => bQ,
      P: () => XQ,
      Q: () => xQ,
      U: () => tQ,
      W: () => WQ,
      X: () => MQ,
      bb: () => AQ,
      e: () => YQ,
      eb: () => eQ,
      gb: () => rQ,
      h: () => SQ,
      k: () => CQ,
      kb: () => sQ,
      m: () => cQ,
      mb: () => pQ,
      p: () => kQ,
      t: () => DQ,
      u: () => aQ,
      y: () => UQ
    });
    const LQ = function(QQ) {
        const FQ = [];
        let wQ = 0;
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          let qQ = QQ.charCodeAt(LQ);
          qQ < 128 ? FQ[wQ++] = qQ : qQ < 2048 ? (FQ[wQ++] = qQ >> 6 | 192, FQ[wQ++] = 63 & qQ | 128) : 55296 === (64512 & qQ) && LQ + 1 < QQ.length && 56320 === (64512 & QQ.charCodeAt(LQ + 1)) ? (qQ = 65536 + ((1023 & qQ) << 10) + (1023 & QQ.charCodeAt(++LQ)), FQ[wQ++] = qQ >> 18 | 240, FQ[wQ++] = qQ >> 12 & 63 | 128, FQ[wQ++] = qQ >> 6 & 63 | 128, FQ[wQ++] = 63 & qQ | 128) : (FQ[wQ++] = qQ >> 12 | 224, FQ[wQ++] = qQ >> 6 & 63 | 128, FQ[wQ++] = 63 & qQ | 128)
        }
        return FQ
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
        encodeByteArray(QQ, FQ) {
          if (!Array.isArray(QQ)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const wQ = FQ ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            LQ = [];
          for (let qQ = 0; qQ < QQ.length; qQ += 3) {
            const FQ = QQ[qQ],
              oQ = qQ + 1 < QQ.length,
              DQ = oQ ? QQ[qQ + 1] : 0,
              kQ = qQ + 2 < QQ.length,
              vQ = kQ ? QQ[qQ + 2] : 0,
              mQ = FQ >> 2,
              uQ = (3 & FQ) << 4 | DQ >> 4;
            let HQ = (15 & DQ) << 2 | vQ >> 6,
              bQ = 63 & vQ;
            kQ || (bQ = 64, oQ || (HQ = 64)), LQ.push(wQ[mQ], wQ[uQ], wQ[HQ], wQ[bQ])
          }
          return LQ.join("")
        },
        encodeString(QQ, FQ) {
          return this.HAS_NATIVE_SUPPORT && !FQ ? btoa(QQ) : this.encodeByteArray(LQ(QQ), FQ)
        },
        decodeString(QQ, FQ) {
          return this.HAS_NATIVE_SUPPORT && !FQ ? atob(QQ) : function(QQ) {
            const FQ = [];
            let wQ = 0,
              LQ = 0;
            for (; wQ < QQ.length;) {
              const qQ = QQ[wQ++];
              if (qQ < 128) FQ[LQ++] = String.fromCharCode(qQ);
              else if (qQ > 191 && qQ < 224) {
                const oQ = QQ[wQ++];
                FQ[LQ++] = String.fromCharCode((31 & qQ) << 6 | 63 & oQ)
              } else if (qQ > 239 && qQ < 365) {
                const oQ = ((7 & qQ) << 18 | (63 & QQ[wQ++]) << 12 | (63 & QQ[wQ++]) << 6 | 63 & QQ[wQ++]) - 65536;
                FQ[LQ++] = String.fromCharCode(55296 + (oQ >> 10)), FQ[LQ++] = String.fromCharCode(56320 + (1023 & oQ))
              } else {
                const oQ = QQ[wQ++],
                  DQ = QQ[wQ++];
                FQ[LQ++] = String.fromCharCode((15 & qQ) << 12 | (63 & oQ) << 6 | 63 & DQ)
              }
            }
            return FQ.join("")
          }(this.decodeStringToByteArray(QQ, FQ))
        },
        decodeStringToByteArray(QQ, FQ) {
          this.init_();
          const wQ = FQ ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            LQ = [];
          for (let qQ = 0; qQ < QQ.length;) {
            const FQ = wQ[QQ.charAt(qQ++)],
              DQ = qQ < QQ.length ? wQ[QQ.charAt(qQ)] : 0;
            ++qQ;
            const kQ = qQ < QQ.length ? wQ[QQ.charAt(qQ)] : 64;
            ++qQ;
            const vQ = qQ < QQ.length ? wQ[QQ.charAt(qQ)] : 64;
            if (++qQ, null == FQ || null == DQ || null == kQ || null == vQ) throw new oQ;
            const mQ = FQ << 2 | DQ >> 4;
            if (LQ.push(mQ), 64 !== kQ) {
              const QQ = DQ << 4 & 240 | kQ >> 2;
              if (LQ.push(QQ), 64 !== vQ) {
                const QQ = kQ << 6 & 192 | vQ;
                LQ.push(QQ)
              }
            }
          }
          return LQ
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let QQ = 0; QQ < this.ENCODED_VALS.length; QQ++) this.byteToCharMap_[QQ] = this.ENCODED_VALS.charAt(QQ), this.charToByteMap_[this.byteToCharMap_[QQ]] = QQ, this.byteToCharMapWebSafe_[QQ] = this.ENCODED_VALS_WEBSAFE.charAt(QQ), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[QQ]] = QQ, QQ >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(QQ)] = QQ, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(QQ)] = QQ)
          }
        }
      };
    class oQ extends Error {
      constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
      }
    }
    const DQ = function(QQ) {
        return function(QQ) {
          const FQ = LQ(QQ);
          return qQ.encodeByteArray(FQ, !0)
        }(QQ).replace(/\./g, "")
      },
      kQ = function(QQ) {
        try {
          return qQ.decodeString(QQ, !0)
        } catch (FQ) {
          console.error("base64Decode failed: ", FQ)
        }
        return null
      };
    const vQ = () => function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof wQ.g) return wQ.g;
        throw new Error("Unable to locate global object.")
      }().__FIREBASE_DEFAULTS__,
      mQ = () => {
        try {
          return vQ() || (() => {
            if ("undefined" === typeof process) return
          })() || (() => {
            if ("undefined" === typeof document) return;
            let QQ;
            try {
              QQ = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (wQ) {
              return
            }
            const FQ = QQ && kQ(QQ[1]);
            return FQ && JSON.parse(FQ)
          })()
        } catch (QQ) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${QQ}`)
        }
      },
      uQ = QQ => {
        var FQ, wQ;
        return null === (wQ = null === (FQ = mQ()) || void 0 === FQ ? void 0 : FQ.emulatorHosts) || void 0 === wQ ? void 0 : wQ[QQ]
      },
      HQ = () => {
        var QQ;
        return null === (QQ = mQ()) || void 0 === QQ ? void 0 : QQ.config
      },
      bQ = QQ => {
        var FQ;
        return null === (FQ = mQ()) || void 0 === FQ ? void 0 : FQ[`_${QQ}`]
      };
    class YQ {
      constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((QQ, FQ) => {
          this.resolve = QQ, this.reject = FQ
        }))
      }
      wrapCallback(QQ) {
        return (FQ, wQ) => {
          FQ ? this.reject(FQ) : this.resolve(wQ), "function" === typeof QQ && (this.promise.catch((() => {})), 1 === QQ.length ? QQ(FQ) : QQ(FQ, wQ))
        }
      }
    }

    function xQ() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function AQ() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xQ())
    }

    function tQ() {
      const QQ = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof QQ && void 0 !== QQ.id
    }

    function eQ() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }

    function MQ() {
      const QQ = xQ();
      return QQ.indexOf("MSIE ") >= 0 || QQ.indexOf("Trident/") >= 0
    }

    function GQ() {
      try {
        return "object" === typeof indexedDB
      } catch (QQ) {
        return !1
      }
    }

    function pQ() {
      return new Promise(((QQ, FQ) => {
        try {
          let wQ = !0;
          const LQ = "validate-browser-context-for-indexeddb-analytics-module",
            qQ = self.indexedDB.open(LQ);
          qQ.onsuccess = () => {
            qQ.result.close(), wQ || self.indexedDB.deleteDatabase(LQ), QQ(!0)
          }, qQ.onupgradeneeded = () => {
            wQ = !1
          }, qQ.onerror = () => {
            var QQ;
            FQ((null === (QQ = qQ.error) || void 0 === QQ ? void 0 : QQ.message) || "")
          }
        } catch (wQ) {
          FQ(wQ)
        }
      }))
    }

    function cQ() {
      return !("undefined" === typeof navigator || !navigator.cookieEnabled)
    }
    class CQ extends Error {
      constructor(QQ, FQ, wQ) {
        super(FQ), this.code = QQ, this.customData = wQ, this.name = "FirebaseError", Object.setPrototypeOf(this, CQ.prototype), Error.captureStackTrace && Error.captureStackTrace(this, SQ.prototype.create)
      }
    }
    class SQ {
      constructor(QQ, FQ, wQ) {
        this.service = QQ, this.serviceName = FQ, this.errors = wQ
      }
      create(QQ) {
        const FQ = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
          wQ = `${this.service}/${QQ}`,
          LQ = this.errors[QQ],
          qQ = LQ ? function(QQ, FQ) {
            return QQ.replace(iQ, ((QQ, wQ) => {
              const LQ = FQ[wQ];
              return null != LQ ? String(LQ) : `<${wQ}?>`
            }))
          }(LQ, FQ) : "Error",
          oQ = `${this.serviceName}: ${qQ} (${wQ}).`;
        return new CQ(wQ, oQ, FQ)
      }
    }
    const iQ = /\{\$([^}]+)}/g;

    function WQ(QQ) {
      for (const FQ in QQ)
        if (Object.prototype.hasOwnProperty.call(QQ, FQ)) return !1;
      return !0
    }

    function RQ(QQ, FQ) {
      if (QQ === FQ) return !0;
      const wQ = Object.keys(QQ),
        LQ = Object.keys(FQ);
      for (const qQ of wQ) {
        if (!LQ.includes(qQ)) return !1;
        const wQ = QQ[qQ],
          oQ = FQ[qQ];
        if (OQ(wQ) && OQ(oQ)) {
          if (!RQ(wQ, oQ)) return !1
        } else if (wQ !== oQ) return !1
      }
      for (const qQ of LQ)
        if (!wQ.includes(qQ)) return !1;
      return !0
    }

    function OQ(QQ) {
      return null !== QQ && "object" === typeof QQ
    }

    function sQ(QQ) {
      const FQ = [];
      for (const [wQ, LQ] of Object.entries(QQ)) Array.isArray(LQ) ? LQ.forEach((QQ => {
        FQ.push(encodeURIComponent(wQ) + "=" + encodeURIComponent(QQ))
      })) : FQ.push(encodeURIComponent(wQ) + "=" + encodeURIComponent(LQ));
      return FQ.length ? "&" + FQ.join("&") : ""
    }

    function rQ(QQ) {
      const FQ = {};
      return QQ.replace(/^\?/, "").split("&").forEach((QQ => {
        if (QQ) {
          const [wQ, LQ] = QQ.split("=");
          FQ[decodeURIComponent(wQ)] = decodeURIComponent(LQ)
        }
      })), FQ
    }

    function IQ(QQ) {
      const FQ = QQ.indexOf("?");
      if (!FQ) return "";
      const wQ = QQ.indexOf("#", FQ);
      return QQ.substring(FQ, wQ > 0 ? wQ : void 0)
    }

    function UQ(QQ, FQ) {
      const wQ = new NQ(QQ, FQ);
      return wQ.subscribe.bind(wQ)
    }
    class NQ {
      constructor(QQ, FQ) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = FQ, this.task.then((() => {
          QQ(this)
        })).catch((QQ => {
          this.error(QQ)
        }))
      }
      next(QQ) {
        this.forEachObserver((FQ => {
          FQ.next(QQ)
        }))
      }
      error(QQ) {
        this.forEachObserver((FQ => {
          FQ.error(QQ)
        })), this.close(QQ)
      }
      complete() {
        this.forEachObserver((QQ => {
          QQ.complete()
        })), this.close()
      }
      subscribe(QQ, FQ, wQ) {
        let LQ;
        if (void 0 === QQ && void 0 === FQ && void 0 === wQ) throw new Error("Missing Observer.");
        LQ = function(QQ, FQ) {
          if ("object" !== typeof QQ || null === QQ) return !1;
          for (const wQ of FQ)
            if (wQ in QQ && "function" === typeof QQ[wQ]) return !0;
          return !1
        }(QQ, ["next", "error", "complete"]) ? QQ : {
          next: QQ,
          error: FQ,
          complete: wQ
        }, void 0 === LQ.next && (LQ.next = TQ), void 0 === LQ.error && (LQ.error = TQ), void 0 === LQ.complete && (LQ.complete = TQ);
        const qQ = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? LQ.error(this.finalError) : LQ.complete()
          } catch (QQ) {}
        })), this.observers.push(LQ), qQ
      }
      unsubscribeOne(QQ) {
        void 0 !== this.observers && void 0 !== this.observers[QQ] && (delete this.observers[QQ], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(QQ) {
        if (!this.finalized)
          for (let FQ = 0; FQ < this.observers.length; FQ++) this.sendOne(FQ, QQ)
      }
      sendOne(QQ, FQ) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[QQ]) try {
            FQ(this.observers[QQ])
          } catch (wQ) {
            "undefined" !== typeof console && console.error && console.error(wQ)
          }
        }))
      }
      close(QQ) {
        this.finalized || (this.finalized = !0, void 0 !== QQ && (this.finalError = QQ), this.task.then((() => {
          this.observers = void 0, this.onNoObservers = void 0
        })))
      }
    }

    function TQ() {}
    const KQ = 1e3,
      zQ = 2,
      lQ = 144e5,
      jQ = .5;

    function aQ(QQ) {
      let FQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zQ;
      const wQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KQ) * Math.pow(FQ, QQ),
        LQ = Math.round(jQ * wQ * (Math.random() - .5) * 2);
      return Math.min(lQ, wQ + LQ)
    }

    function XQ(QQ) {
      return QQ && QQ._delegate ? QQ._delegate : QQ
    }
  },
  39933: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ.k,
      g: () => HF,
      h: () => BQ,
      k: () => wF,
      l: () => LF,
      n: () => QF,
      p: () => kF,
      q: () => FF,
      t: () => oF,
      x: () => qF,
      z: () => DF,
      C: () => AF,
      J: () => YF,
      G: () => xF,
      L: () => bF,
      P: () => eF,
      R: () => tF,
      T: () => MF
    });
    var LQ = wQ(39942),
      qQ = wQ(39956),
      oQ = wQ(39949);
    let DQ, kQ;
    const vQ = new WeakMap,
      mQ = new WeakMap,
      uQ = new WeakMap,
      HQ = new WeakMap,
      bQ = new WeakMap;
    let YQ = {
      get(QQ, FQ, wQ) {
        if (QQ instanceof IDBTransaction) {
          if ("done" === FQ) return mQ.get(QQ);
          if ("objectStoreNames" === FQ) return QQ.objectStoreNames || uQ.get(QQ);
          if ("store" === FQ) return wQ.objectStoreNames[1] ? void 0 : wQ.objectStore(wQ.objectStoreNames[0])
        }
        return tQ(QQ[FQ])
      },
      set: (QQ, FQ, wQ) => (QQ[FQ] = wQ, !0),
      has: (QQ, FQ) => QQ instanceof IDBTransaction && ("done" === FQ || "store" === FQ) || FQ in QQ
    };

    function xQ(QQ) {
      return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (kQ || (kQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return QQ.apply(eQ(this), wQ), tQ(vQ.get(this))
      } : function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return tQ(QQ.apply(eQ(this), wQ))
      } : function(FQ) {
        for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
        const oQ = QQ.call(eQ(this), FQ, ...LQ);
        return uQ.set(oQ, FQ.sort ? FQ.sort() : [FQ]), tQ(oQ)
      }
    }

    function AQ(QQ) {
      return "function" === typeof QQ ? xQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
        if (mQ.has(QQ)) return;
        const FQ = new Promise(((FQ, wQ) => {
          const LQ = () => {
              QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", oQ), QQ.removeEventListener("abort", oQ)
            },
            qQ = () => {
              FQ(), LQ()
            },
            oQ = () => {
              wQ(QQ.error || new DOMException("AbortError", "AbortError")), LQ()
            };
          QQ.addEventListener("complete", qQ), QQ.addEventListener("error", oQ), QQ.addEventListener("abort", oQ)
        }));
        mQ.set(QQ, FQ)
      }(QQ), FQ = QQ, (DQ || (DQ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((QQ => FQ instanceof QQ)) ? new Proxy(QQ, YQ) : QQ);
      var FQ
    }

    function tQ(QQ) {
      if (QQ instanceof IDBRequest) return function(QQ) {
        const FQ = new Promise(((FQ, wQ) => {
          const LQ = () => {
              QQ.removeEventListener("success", qQ), QQ.removeEventListener("error", oQ)
            },
            qQ = () => {
              FQ(tQ(QQ.result)), LQ()
            },
            oQ = () => {
              wQ(QQ.error), LQ()
            };
          QQ.addEventListener("success", qQ), QQ.addEventListener("error", oQ)
        }));
        return FQ.then((FQ => {
          FQ instanceof IDBCursor && vQ.set(FQ, QQ)
        })).catch((() => {})), bQ.set(FQ, QQ), FQ
      }(QQ);
      if (HQ.has(QQ)) return HQ.get(QQ);
      const FQ = AQ(QQ);
      return FQ !== QQ && (HQ.set(QQ, FQ), bQ.set(FQ, QQ)), FQ
    }
    const eQ = QQ => bQ.get(QQ);
    const MQ = ["get", "getKey", "getAll", "getAllKeys", "count"],
      GQ = ["put", "add", "delete", "clear"],
      pQ = new Map;

    function cQ(QQ, FQ) {
      if (!(QQ instanceof IDBDatabase) || FQ in QQ || "string" !== typeof FQ) return;
      if (pQ.get(FQ)) return pQ.get(FQ);
      const wQ = FQ.replace(/FromIndex$/, ""),
        LQ = FQ !== wQ,
        qQ = GQ.includes(wQ);
      if (!(wQ in (LQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !MQ.includes(wQ)) return;
      const oQ = async function(QQ) {
        const FQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
        let oQ = FQ.store;
        for (var DQ = arguments.length, kQ = new Array(DQ > 1 ? DQ - 1 : 0), vQ = 1; vQ < DQ; vQ++) kQ[vQ - 1] = arguments[vQ];
        return LQ && (oQ = oQ.index(kQ.shift())), (await Promise.all([oQ[wQ](...kQ), qQ && FQ.done]))[0]
      };
      return pQ.set(FQ, oQ), oQ
    }
    YQ = (QQ => ({
      ...QQ,
      get: (FQ, wQ, LQ) => cQ(FQ, wQ) || QQ.get(FQ, wQ, LQ),
      has: (FQ, wQ) => !!cQ(FQ, wQ) || QQ.has(FQ, wQ)
    }))(YQ);
    class CQ {
      constructor(QQ) {
        this.container = QQ
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((QQ => {
          if (function(QQ) {
              const FQ = QQ.getComponent();
              return "VERSION" === (null === FQ || void 0 === FQ ? void 0 : FQ.type)
            }(QQ)) {
            const FQ = QQ.getImmediate();
            return `${FQ.library}/${FQ.version}`
          }
          return null
        })).filter((QQ => QQ)).join(" ")
      }
    }
    const SQ = "@firebase/app",
      iQ = "0.9.13",
      WQ = new qQ.f("@firebase/app"),
      RQ = "@firebase/app-compat",
      OQ = "@firebase/analytics-compat",
      sQ = "@firebase/analytics",
      rQ = "@firebase/app-check-compat",
      IQ = "@firebase/app-check",
      UQ = "@firebase/auth",
      NQ = "@firebase/auth-compat",
      TQ = "@firebase/database",
      KQ = "@firebase/database-compat",
      zQ = "@firebase/functions",
      lQ = "@firebase/functions-compat",
      jQ = "@firebase/installations",
      aQ = "@firebase/installations-compat",
      XQ = "@firebase/messaging",
      fQ = "@firebase/messaging-compat",
      VQ = "@firebase/performance",
      hQ = "@firebase/performance-compat",
      JQ = "@firebase/remote-config",
      EQ = "@firebase/remote-config-compat",
      nQ = "@firebase/storage",
      gQ = "@firebase/storage-compat",
      PQ = "@firebase/firestore",
      ZQ = "@firebase/firestore-compat",
      yQ = "firebase",
      BQ = "[DEFAULT]",
      dQ = {
        [SQ]: "fire-core",
        [RQ]: "fire-core-compat",
        [sQ]: "fire-analytics",
        [OQ]: "fire-analytics-compat",
        [IQ]: "fire-app-check",
        [rQ]: "fire-app-check-compat",
        [UQ]: "fire-auth",
        [NQ]: "fire-auth-compat",
        [TQ]: "fire-rtdb",
        [KQ]: "fire-rtdb-compat",
        [zQ]: "fire-fn",
        [lQ]: "fire-fn-compat",
        [jQ]: "fire-iid",
        [aQ]: "fire-iid-compat",
        [XQ]: "fire-fcm",
        [fQ]: "fire-fcm-compat",
        [VQ]: "fire-perf",
        [hQ]: "fire-perf-compat",
        [JQ]: "fire-rc",
        [EQ]: "fire-rc-compat",
        [nQ]: "fire-gcs",
        [gQ]: "fire-gcs-compat",
        [PQ]: "fire-fst",
        [ZQ]: "fire-fst-compat",
        "fire-js": "fire-js",
        [yQ]: "fire-js-all"
      },
      QF = new Map,
      FF = new Map;

    function wF(QQ, FQ) {
      try {
        QQ.container.pT(FQ)
      } catch (wQ) {
        WQ.debug(`Component ${FQ.name} failed to register with FirebaseApp ${QQ.name}`, wQ)
      }
    }

    function LF(QQ, FQ) {
      QQ.container.addOrOverwriteComponent(FQ)
    }

    function qF(QQ) {
      const FQ = QQ.name;
      if (FF.has(FQ)) return WQ.debug(`There were multiple attempts to register component ${FQ}.`), !1;
      FF.set(FQ, QQ);
      for (const wQ of QF.values()) wF(wQ, QQ);
      return !0
    }

    function oF(QQ, FQ) {
      const wQ = QQ.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return wQ && wQ.triggerHeartbeat(), QQ.container.getProvider(FQ)
    }

    function DF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BQ;
      oF(QQ, FQ).clearInstance(wQ)
    }

    function kF() {
      FF.clear()
    }
    const vF = {
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
      mF = new oQ.h("app", "Firebase", vF);
    class uF {
      constructor(QQ, FQ, wQ) {
        this._isDeleted = !1, this._options = Object.assign({}, QQ), this._config = Object.assign({}, FQ), this._name = FQ.name, this._automaticDataCollectionEnabled = FQ.automaticDataCollectionEnabled, this._container = wQ, this.container.pT(new LQ.e("app", (() => this), "PUBLIC"))
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
        if (this.isDeleted) throw mF.create("app-deleted", {
          appName: this._name
        })
      }
    }
    const HF = "9.23.0";

    function bF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wQ = QQ;
      if ("object" !== typeof FQ) {
        FQ = {
          name: FQ
        }
      }
      const qQ = Object.assign({
          name: BQ,
          automaticDataCollectionEnabled: !1
        }, FQ),
        DQ = qQ.name;
      if ("string" !== typeof DQ || !DQ) throw mF.create("bad-app-name", {
        appName: String(DQ)
      });
      if (wQ || (wQ = (0, oQ.J)()), !wQ) throw mF.create("no-options");
      const kQ = QF.get(DQ);
      if (kQ) {
        if ((0, oQ.C)(wQ, kQ.options) && (0, oQ.C)(qQ, kQ.config)) return kQ;
        throw mF.create("duplicate-app", {
          appName: DQ
        })
      }
      const vQ = new LQ.d(DQ);
      for (const LQ of FF.values()) vQ.pT(LQ);
      const mQ = new uF(wQ, qQ, vQ);
      return QF.set(DQ, mQ), mQ
    }

    function YF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BQ;
      const FQ = QF.get(QQ);
      if (!FQ && QQ === BQ && (0, oQ.J)()) return bF();
      if (!FQ) throw mF.create("no-app", {
        appName: QQ
      });
      return FQ
    }

    function xF() {
      return Array.from(QF.values())
    }
    async function AF(QQ) {
      const FQ = QQ.name;
      QF.has(FQ) && (QF.delete(FQ), await Promise.all(QQ.container.getProviders().map((QQ => QQ.delete()))), QQ.isDeleted = !0)
    }

    function tF(QQ, FQ, wQ) {
      var qQ;
      let oQ = null !== (qQ = dQ[QQ]) && void 0 !== qQ ? qQ : QQ;
      wQ && (oQ += `-${wQ}`);
      const DQ = oQ.match(/\s|\//),
        kQ = FQ.match(/\s|\//);
      if (DQ || kQ) {
        const QQ = [`Unable to register library "${oQ}" with version "${FQ}":`];
        return DQ && QQ.push(`library name "${oQ}" contains illegal characters (whitespace or "/")`), DQ && kQ && QQ.push("and"), kQ && QQ.push(`version name "${FQ}" contains illegal characters (whitespace or "/")`), void WQ.warn(QQ.join(" "))
      }
      qF(new LQ.e(`${oQ}-version`, (() => ({
        library: oQ,
        version: FQ
      })), "VERSION"))
    }

    function eF(QQ, FQ) {
      if (null !== QQ && "function" !== typeof QQ) throw mF.create("invalid-log-argument");
      (0, qQ.k)(QQ, FQ)
    }

    function MF(QQ) {
      (0, qQ.g)(QQ)
    }
    const GF = "firebase-heartbeat-store";
    let pF = null;

    function cF() {
      return pF || (pF = function(QQ, FQ) {
        let {
          blocked: wQ,
          upgrade: LQ,
          blocking: qQ,
          terminated: oQ
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const DQ = indexedDB.open(QQ, FQ),
          kQ = tQ(DQ);
        return LQ && DQ.addEventListener("upgradeneeded", (QQ => {
          LQ(tQ(DQ.result), QQ.oldVersion, QQ.newVersion, tQ(DQ.transaction), QQ)
        })), wQ && DQ.addEventListener("blocked", (QQ => wQ(QQ.oldVersion, QQ.newVersion, QQ))), kQ.then((QQ => {
          oQ && QQ.addEventListener("close", (() => oQ())), qQ && QQ.addEventListener("versionchange", (QQ => qQ(QQ.oldVersion, QQ.newVersion, QQ)))
        })).catch((() => {})), kQ
      }("firebase-heartbeat-database", 1, {
        upgrade: (QQ, FQ) => {
          if (0 === FQ) QQ.createObjectStore(GF)
        }
      }).catch((QQ => {
        throw mF.create("idb-open", {
          originalErrorMessage: QQ.message
        })
      }))), pF
    }
    async function CF(QQ, FQ) {
      try {
        const wQ = (await cF()).transaction(GF, "readwrite"),
          LQ = wQ.objectStore(GF);
        await LQ.put(FQ, SF(QQ)), await wQ.done
      } catch (wQ) {
        if (wQ instanceof oQ.k) WQ.warn(wQ.message);
        else {
          const QQ = mF.create("idb-set", {
            originalErrorMessage: null === wQ || void 0 === wQ ? void 0 : wQ.message
          });
          WQ.warn(QQ.message)
        }
      }
    }

    function SF(QQ) {
      return `${QQ.name}!${QQ.options.appId}`
    }
    class iF {
      constructor(QQ) {
        this.container = QQ, this._heartbeatsCache = null;
        const FQ = this.container.getProvider("app").getImmediate();
        this.AA = new RF(FQ), this._heartbeatsCachePromise = this.AA.read().then((QQ => (this._heartbeatsCache = QQ, QQ)))
      }
      async triggerHeartbeat() {
        const QQ = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          FQ = WF();
        if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== FQ && !this._heartbeatsCache.heartbeats.some((QQ => QQ.date === FQ))) return this._heartbeatsCache.heartbeats.push({
          date: FQ,
          agent: QQ
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((QQ => {
          const FQ = new Date(QQ.date).valueOf();
          return Date.now() - FQ <= 2592e6
        })), this.AA.overwrite(this._heartbeatsCache)
      }
      async getHeartbeatsHeader() {
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const QQ = WF(),
          {
            heartbeatsToSend: FQ,
            unsentEntries: wQ
          } = function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
            const wQ = [];
            let LQ = QQ.slice();
            for (const qQ of QQ) {
              const QQ = wQ.find((QQ => QQ.agent === qQ.agent));
              if (QQ) {
                if (QQ.dates.push(qQ.date), OF(wQ) > FQ) {
                  QQ.dates.pop();
                  break
                }
              } else if (wQ.push({
                  agent: qQ.agent,
                  dates: [qQ.date]
                }), OF(wQ) > FQ) {
                wQ.pop();
                break
              }
              LQ = LQ.slice(1)
            }
            return {
              heartbeatsToSend: wQ,
              unsentEntries: LQ
            }
          }(this._heartbeatsCache.heartbeats),
          LQ = (0, oQ.t)(JSON.stringify({
            version: 2,
            heartbeats: FQ
          }));
        return this._heartbeatsCache.lastSentHeartbeatDate = QQ, wQ.length > 0 ? (this._heartbeatsCache.heartbeats = wQ, await this.AA.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.AA.overwrite(this._heartbeatsCache)), LQ
      }
    }

    function WF() {
      return (new Date).toISOString().substring(0, 10)
    }
    class RF {
      constructor(QQ) {
        this.app = QQ, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, oQ.$)() && (0, oQ.mb)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return await async function(QQ) {
            try {
              const FQ = await cF();
              return await FQ.transaction(GF).objectStore(GF).get(SF(QQ))
            } catch (FQ) {
              if (FQ instanceof oQ.k) WQ.warn(FQ.message);
              else {
                const QQ = mF.create("idb-get", {
                  originalErrorMessage: null === FQ || void 0 === FQ ? void 0 : FQ.message
                });
                WQ.warn(QQ.message)
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
        var FQ;
        if (await this._canUseIndexedDBPromise) {
          const wQ = await this.read();
          return CF(this.app, {
            lastSentHeartbeatDate: null !== (FQ = QQ.lastSentHeartbeatDate) && void 0 !== FQ ? FQ : wQ.lastSentHeartbeatDate,
            heartbeats: QQ.heartbeats
          })
        }
      }
      async add(QQ) {
        var FQ;
        if (await this._canUseIndexedDBPromise) {
          const wQ = await this.read();
          return CF(this.app, {
            lastSentHeartbeatDate: null !== (FQ = QQ.lastSentHeartbeatDate) && void 0 !== FQ ? FQ : wQ.lastSentHeartbeatDate,
            heartbeats: [...wQ.heartbeats, ...QQ.heartbeats]
          })
        }
      }
    }

    function OF(QQ) {
      return (0, oQ.t)(JSON.stringify({
        version: 2,
        heartbeats: QQ
      })).length
    }
    var sF;
    sF = "", qF(new LQ.e("platform-logger", (QQ => new CQ(QQ)), "PRIVATE")), qF(new LQ.e("heartbeat", (QQ => new iF(QQ)), "PRIVATE")), tF(SQ, iQ, sF), tF(SQ, iQ, "esm2017"), tF("fire-js", "")
  },
  39942: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      e: () => qQ
    });
    var LQ = wQ(39949);
    class qQ {
      constructor(QQ, FQ, wQ) {
        this.name = QQ, this.instanceFactory = FQ, this.type = wQ, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
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
    const oQ = "[DEFAULT]";
    class DQ {
      constructor(QQ, FQ) {
        this.name = QQ, this.container = FQ, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
      }
      get(QQ) {
        const FQ = this.normalizeInstanceIdentifier(QQ);
        if (!this.instancesDeferred.has(FQ)) {
          const QQ = new LQ.e;
          if (this.instancesDeferred.set(FQ, QQ), this.isInitialized(FQ) || this.shouldAutoInitialize()) try {
            const wQ = this.getOrInitializeService({
              instanceIdentifier: FQ
            });
            wQ && QQ.resolve(wQ)
          } catch (wQ) {}
        }
        return this.instancesDeferred.get(FQ).promise
      }
      getImmediate(QQ) {
        var FQ;
        const wQ = this.normalizeInstanceIdentifier(null === QQ || void 0 === QQ ? void 0 : QQ.identifier),
          LQ = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.optional) && void 0 !== FQ && FQ;
        if (!this.isInitialized(wQ) && !this.shouldAutoInitialize()) {
          if (LQ) return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: wQ
          })
        } catch (qQ) {
          if (LQ) return null;
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
              instanceIdentifier: oQ
            })
          } catch (FQ) {}
          for (const [QQ, wQ] of this.instancesDeferred.entries()) {
            const LQ = this.normalizeInstanceIdentifier(QQ);
            try {
              const QQ = this.getOrInitializeService({
                instanceIdentifier: LQ
              });
              wQ.resolve(QQ)
            } catch (FQ) {}
          }
        }
      }
      clearInstance() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
        return this.instances.has(QQ)
      }
      getOptions() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
        return this.instancesOptions.get(QQ) || {}
      }
      initialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          options: FQ = {}
        } = QQ, wQ = this.normalizeInstanceIdentifier(QQ.instanceIdentifier);
        if (this.isInitialized(wQ)) throw Error(`${this.name}(${wQ}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const LQ = this.getOrInitializeService({
          instanceIdentifier: wQ,
          options: FQ
        });
        for (const [qQ, oQ] of this.instancesDeferred.entries()) {
          wQ === this.normalizeInstanceIdentifier(qQ) && oQ.resolve(LQ)
        }
        return LQ
      }
      Bl(QQ, FQ) {
        var wQ;
        const LQ = this.normalizeInstanceIdentifier(FQ),
          qQ = null !== (wQ = this.onInitCallbacks.get(LQ)) && void 0 !== wQ ? wQ : new Set;
        qQ.add(QQ), this.onInitCallbacks.set(LQ, qQ);
        const oQ = this.instances.get(LQ);
        return oQ && QQ(oQ, LQ), () => {
          qQ.delete(QQ)
        }
      }
      invokeOnInitCallbacks(QQ, FQ) {
        const wQ = this.onInitCallbacks.get(FQ);
        if (wQ)
          for (const qQ of wQ) try {
            qQ(QQ, FQ)
          } catch (LQ) {}
      }
      getOrInitializeService(QQ) {
        let {
          instanceIdentifier: FQ,
          options: wQ = {}
        } = QQ, LQ = this.instances.get(FQ);
        if (!LQ && this.component && (LQ = this.component.instanceFactory(this.container, {
            instanceIdentifier: (qQ = FQ, qQ === oQ ? void 0 : qQ),
            options: wQ
          }), this.instances.set(FQ, LQ), this.instancesOptions.set(FQ, wQ), this.invokeOnInitCallbacks(LQ, FQ), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, FQ, LQ)
        } catch (DQ) {}
        var qQ;
        return LQ || null
      }
      normalizeInstanceIdentifier() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
        return this.component ? this.component.multipleInstances ? QQ : oQ : QQ
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class kQ {
      constructor(QQ) {
        this.name = QQ, this.providers = new Map
      }
      pT(QQ) {
        const FQ = this.getProvider(QQ.name);
        if (FQ.isComponentSet()) throw new Error(`Component ${QQ.name} has already been registered with ${this.name}`);
        FQ.setComponent(QQ)
      }
      addOrOverwriteComponent(QQ) {
        this.getProvider(QQ.name).isComponentSet() && this.providers.delete(QQ.name), this.pT(QQ)
      }
      getProvider(QQ) {
        if (this.providers.has(QQ)) return this.providers.get(QQ);
        const FQ = new DQ(QQ, this);
        return this.providers.set(QQ, FQ), FQ
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  39956: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      f: () => mQ,
      g: () => uQ,
      k: () => HQ
    });
    const LQ = [];
    var qQ;
    ! function(QQ) {
      QQ[QQ.DEBUG = 0] = "DEBUG", QQ[QQ.VERBOSE = 1] = "VERBOSE", QQ[QQ.INFO = 2] = "INFO", QQ[QQ.WARN = 3] = "WARN", QQ[QQ.ERROR = 4] = "ERROR", QQ[QQ.SILENT = 5] = "SILENT"
    }(qQ || (qQ = {}));
    const oQ = {
        debug: qQ.DEBUG,
        verbose: qQ.VERBOSE,
        info: qQ.INFO,
        warn: qQ.WARN,
        error: qQ.ERROR,
        silent: qQ.SILENT
      },
      DQ = qQ.INFO,
      kQ = {
        [qQ.DEBUG]: "log",
        [qQ.VERBOSE]: "log",
        [qQ.INFO]: "info",
        [qQ.WARN]: "warn",
        [qQ.ERROR]: "error"
      },
      vQ = function(QQ, FQ) {
        if (FQ < QQ.logLevel) return;
        const wQ = (new Date).toISOString(),
          LQ = kQ[FQ];
        if (!LQ) throw new Error(`Attempted to log a message with an invalid logType (value: ${FQ})`);
        for (var qQ = arguments.length, oQ = new Array(qQ > 2 ? qQ - 2 : 0), DQ = 2; DQ < qQ; DQ++) oQ[DQ - 2] = arguments[DQ];
        console[LQ](`[${wQ}]  ${QQ.name}:`, ...oQ)
      };
    class mQ {
      constructor(QQ) {
        this.name = QQ, this._logLevel = DQ, this._logHandler = vQ, this._userLogHandler = null, LQ.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(QQ) {
        if (!(QQ in qQ)) throw new TypeError(`Invalid value "${QQ}" assigned to \`logLevel\``);
        this._logLevel = QQ
      }
      setLogLevel(QQ) {
        this._logLevel = "string" === typeof QQ ? oQ[QQ] : QQ
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
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        this._userLogHandler && this._userLogHandler(this, qQ.DEBUG, ...FQ), this._logHandler(this, qQ.DEBUG, ...FQ)
      }
      log() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        this._userLogHandler && this._userLogHandler(this, qQ.VERBOSE, ...FQ), this._logHandler(this, qQ.VERBOSE, ...FQ)
      }
      info() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        this._userLogHandler && this._userLogHandler(this, qQ.INFO, ...FQ), this._logHandler(this, qQ.INFO, ...FQ)
      }
      warn() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        this._userLogHandler && this._userLogHandler(this, qQ.WARN, ...FQ), this._logHandler(this, qQ.WARN, ...FQ)
      }
      error() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        this._userLogHandler && this._userLogHandler(this, qQ.ERROR, ...FQ), this._logHandler(this, qQ.ERROR, ...FQ)
      }
    }

    function uQ(QQ) {
      LQ.forEach((FQ => {
        FQ.setLogLevel(QQ)
      }))
    }

    function HQ(QQ, FQ) {
      for (const wQ of LQ) {
        let LQ = null;
        FQ && FQ.level && (LQ = oQ[FQ.level]), wQ.userLogHandler = null === QQ ? null : function(FQ, wQ) {
          for (var oQ = arguments.length, DQ = new Array(oQ > 2 ? oQ - 2 : 0), kQ = 2; kQ < oQ; kQ++) DQ[kQ - 2] = arguments[kQ];
          const vQ = DQ.map((QQ => {
            if (null == QQ) return null;
            if ("string" === typeof QQ) return QQ;
            if ("number" === typeof QQ || "boolean" === typeof QQ) return QQ.toString();
            if (QQ instanceof Error) return QQ.message;
            try {
              return JSON.stringify(QQ)
            } catch (FQ) {
              return null
            }
          })).filter((QQ => QQ)).join(" ");
          wQ >= (null !== LQ && void 0 !== LQ ? LQ : FQ.logLevel) && QQ({
            level: qQ[wQ].toLowerCase(),
            message: vQ,
            args: DQ,
            type: FQ.name
          })
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);