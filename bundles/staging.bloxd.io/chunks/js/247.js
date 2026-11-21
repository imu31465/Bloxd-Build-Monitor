export const id = 247;
export const ids = [247];
export const modules = {
  39512: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(38203),
      qQ = wQ(36741);
    class oQ {
      static Instantiate(QQ) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[QQ]) return this.RegisteredExternalClasses[QQ];
        const FQ = (0, qQ.b)(QQ);
        if (FQ) return FQ;
        LQ.c.Warn(QQ + " not found, you may have missed an import.");
        const wQ = QQ.split(".");
        let oQ = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let LQ = 0, qQ = wQ.length; LQ < qQ; LQ++) oQ = oQ[wQ[LQ]];
        return "function" !== typeof oQ ? null : oQ
      }
    }
    oQ.RegisteredExternalClasses = {}
  },
  39303: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = wQ(39264);
    class qQ {
      static get Now() {
        return (0, LQ.g)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39333: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      let FQ = 1;
      do {
        FQ *= 2
      } while (FQ < QQ);
      return FQ === QQ
    }

    function qQ(QQ, FQ, wQ) {
      return QQ * (1 - wQ) + FQ * wQ
    }

    function oQ(QQ) {
      const FQ = DQ(QQ),
        wQ = kQ(QQ);
      return FQ - QQ > QQ - wQ ? wQ : FQ
    }

    function DQ(QQ) {
      return QQ--, QQ |= QQ >> 1, QQ |= QQ >> 2, QQ |= QQ >> 4, QQ |= QQ >> 8, QQ |= QQ >> 16, ++QQ
    }

    function kQ(QQ) {
      return QQ |= QQ >> 1, QQ |= QQ >> 2, QQ |= QQ >> 4, QQ |= QQ >> 8, (QQ |= QQ >> 16) - (QQ >> 1)
    }

    function vQ(QQ, FQ) {
      let wQ;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          wQ = kQ(QQ);
          break;
        case 2:
          wQ = oQ(QQ);
          break;
        default:
          wQ = DQ(QQ)
      }
      return Math.min(wQ, FQ)
    }
    wQ.d(FQ, {
      d: () => kQ,
      e: () => vQ,
      g: () => LQ,
      h: () => qQ,
      i: () => oQ
    })
  },
  39505: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => GQ,
      e: () => cQ,
      g: () => eQ,
      k: () => MQ
    });
    var LQ, qQ = wQ(36722),
      oQ = wQ(39264),
      DQ = wQ(38203),
      kQ = wQ(38200),
      vQ = wQ(39303),
      mQ = wQ(39277),
      uQ = wQ(39455),
      HQ = wQ(36720),
      bQ = wQ(39448),
      YQ = wQ(39289),
      xQ = wQ(39512),
      AQ = wQ(37452),
      tQ = wQ(39333);
    class eQ {
      static get BaseUrl() {
        return bQ.f.BaseUrl
      }
      static set BaseUrl(QQ) {
        bQ.f.BaseUrl = QQ
      }
      static get CleanUrl() {
        return bQ.f.CleanUrl
      }
      static set CleanUrl(QQ) {
        bQ.f.CleanUrl = QQ
      }
      static IsAbsoluteUrl(QQ) {
        return 0 === QQ.indexOf("//") || -1 !== QQ.indexOf("://") && (-1 !== QQ.indexOf(".") && (-1 !== QQ.indexOf("/") && (!(QQ.indexOf(":") > QQ.indexOf("/")) && (QQ.indexOf("://") < QQ.indexOf(".") || (0 === QQ.indexOf("data:") || 0 === QQ.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(QQ) {
        bQ.f.ScriptBaseUrl = QQ
      }
      static get ScriptBaseUrl() {
        return bQ.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(QQ) {
        LQ.ScriptBaseUrl = QQ, LQ.AssetBaseUrl = QQ
      }
      static set ScriptPreprocessUrl(QQ) {
        bQ.f.ScriptPreprocessUrl = QQ
      }
      static get ScriptPreprocessUrl() {
        return bQ.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return bQ.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(QQ) {
        bQ.f.DefaultRetryStrategy = QQ
      }
      static get CorsBehavior() {
        return bQ.f.CorsBehavior
      }
      static set CorsBehavior(QQ) {
        bQ.f.CorsBehavior = QQ
      }
      static get UseFallbackTexture() {
        return HQ.d.UseFallbackTexture
      }
      static set UseFallbackTexture(QQ) {
        HQ.d.UseFallbackTexture = QQ
      }
      static get RegisteredExternalClasses() {
        return xQ.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(QQ) {
        xQ.e.RegisteredExternalClasses = QQ
      }
      static get fallbackTexture() {
        return HQ.d.FallbackTexture
      }
      static set fallbackTexture(QQ) {
        HQ.d.FallbackTexture = QQ
      }
      static FetchToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = 4 * ((Math.abs(QQ) * wQ % wQ | 0) + (Math.abs(FQ) * LQ % LQ | 0) * wQ);
        oQ.r = qQ[DQ] / 255, oQ.g = qQ[DQ + 1] / 255, oQ.b = qQ[DQ + 2] / 255, oQ.a = qQ[DQ + 3] / 255
      }
      static Mix(QQ, FQ, wQ) {
        return 0
      }
      static Instantiate(QQ) {
        return xQ.e.Instantiate(QQ)
      }
      static SetImmediate(QQ) {
        YQ.d.SetImmediate(QQ)
      }
      static IsExponentOfTwo(QQ) {
        return !0
      }
      static FloatRound(QQ) {
        return Math.fround(QQ)
      }
      static GetFilename(QQ) {
        const FQ = QQ.lastIndexOf("/");
        return FQ < 0 ? QQ : QQ.substring(FQ + 1)
      }
      static GetFolderPath(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = QQ.lastIndexOf("/");
        return wQ < 0 ? FQ ? QQ : "" : QQ.substring(0, wQ + 1)
      }
      static ToDegrees(QQ) {
        return 180 * QQ / Math.PI
      }
      static ToRadians(QQ) {
        return QQ * Math.PI / 180
      }
      static SmoothAngleChange(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const LQ = this.ToRadians(QQ),
          qQ = this.ToRadians(FQ);
        return this.ToDegrees(Math.atan2((1 - wQ) * Math.sin(qQ) + wQ * Math.sin(LQ), (1 - wQ) * Math.cos(qQ) + wQ * Math.cos(LQ)))
      }
      static MakeArray(QQ, FQ) {
        return !0 === FQ || void 0 !== QQ && null != QQ ? Array.isArray(QQ) ? QQ : [QQ] : null
      }
      static GetPointerPrefix(QQ) {
        return (0, oQ.g)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(QQ, FQ) {
        (0, bQ.v)(QQ, FQ)
      }
      static SetReferrerPolicyBehavior(QQ, FQ) {
        FQ.referrerPolicy = QQ
      }
      static get PreprocessUrl() {
        return bQ.f.PreprocessUrl
      }
      static set PreprocessUrl(QQ) {
        bQ.f.PreprocessUrl = QQ
      }
      static LoadImage(QQ, FQ, wQ, LQ, qQ, oQ) {
        return (0, bQ.p)(QQ, FQ, wQ, LQ, qQ, oQ)
      }
      static LoadFile(QQ, FQ, wQ, LQ, qQ, oQ) {
        return (0, bQ.m)(QQ, FQ, wQ, LQ, qQ, oQ)
      }
      static async LoadFileAsync(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((wQ, LQ) => {
          (0, bQ.m)(QQ, (QQ => {
            wQ(QQ)
          }), void 0, void 0, FQ, ((QQ, FQ) => {
            LQ(FQ)
          }))
        }))
      }
      static GetAssetUrl(QQ) {
        if (!QQ) return "";
        if (LQ.AssetBaseUrl && QQ.startsWith(LQ._DefaultAssetsUrl)) {
          const FQ = LQ.AssetBaseUrl.endsWith("/") ? LQ.AssetBaseUrl.slice(0, -1) : LQ.AssetBaseUrl;
          return QQ.replace(LQ._DefaultAssetsUrl, FQ)
        }
        return QQ
      }
      static GetBabylonScriptURL(QQ, FQ) {
        if (!QQ) return "";
        if (QQ.startsWith(LQ._DefaultCdnUrl))
          if (LQ.ScriptBaseUrl) {
            const FQ = LQ.ScriptBaseUrl.endsWith("/") ? LQ.ScriptBaseUrl.slice(0, -1) : LQ.ScriptBaseUrl;
            QQ = QQ.replace(LQ._DefaultCdnUrl, FQ)
          } else if (LQ._CdnVersion) {
          const FQ = `${LQ._DefaultCdnUrl}/v${LQ._CdnVersion}`;
          QQ.startsWith(FQ) || (QQ = QQ.replace(LQ._DefaultCdnUrl, FQ))
        }
        return QQ = LQ.ScriptPreprocessUrl(QQ), FQ && !LQ.IsAbsoluteUrl(QQ) && (QQ = LQ.GetAbsoluteUrl(QQ)), QQ
      }
      static LoadBabylonScript(QQ, FQ, wQ, qQ) {
        QQ = LQ.GetBabylonScriptURL(QQ), LQ.LoadScript(QQ, FQ, wQ)
      }
      static async LoadBabylonScriptAsync(QQ) {
        return QQ = LQ.GetBabylonScriptURL(QQ), await LQ.LoadScriptAsync(QQ)
      }
      static _LoadScriptNative(QQ, FQ, wQ, qQ) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const QQ = "Loading a script as an ES module is not supported in Babylon Native";
            return void wQ?.(QQ, new Error(QQ))
          }
          LQ.LoadFile(QQ, (QQ => {
            try {
              Function(QQ).apply(null), FQ && FQ()
            } catch (LQ) {
              wQ && wQ("LoadScript Error", LQ)
            }
          }), void 0, void 0, !1, ((QQ, FQ) => {
            wQ && wQ("LoadScript Error", FQ)
          }))
        }
      }
      static _LoadScriptWeb(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(QQ), FQ && FQ()
          } catch (vQ) {
            wQ?.(`Unable to load script '${QQ}' in worker`, vQ)
          }
          return
        }
        if (!(0, oQ.g)()) return void wQ?.(`Cannot load script '${QQ}' outside of a window or a worker`);
        const DQ = document.getElementsByTagName("head")[0],
          kQ = document.createElement("script");
        qQ ? (kQ.setAttribute("type", "module"), kQ.innerText = QQ) : (kQ.setAttribute("type", "text/javascript"), kQ.setAttribute("src", QQ)), LQ && (kQ.id = LQ), kQ.onload = () => {
          FQ && FQ()
        }, kQ.onerror = FQ => {
          wQ && wQ(`Unable to load script '${QQ}'`, FQ)
        }, DQ.appendChild(kQ)
      }
      static async LoadScriptAsync(QQ, FQ) {
        return await new Promise(((wQ, LQ) => {
          this.LoadScript(QQ, (() => {
            wQ()
          }), ((QQ, FQ) => {
            LQ(FQ || new Error(QQ))
          }), FQ)
        }))
      }
      static ReadFileAsDataURL(QQ, FQ, wQ) {
        const LQ = new FileReader,
          oQ = {
            onCompleteObservable: new qQ.e,
            abort: () => LQ.abort()
          };
        return LQ.onloadend = () => {
          oQ.onCompleteObservable.notifyObservers(oQ)
        }, LQ.onload = QQ => {
          FQ(QQ.target.result)
        }, LQ.onprogress = wQ, LQ.readAsDataURL(QQ), oQ
      }
      static ReadFile(QQ, FQ, wQ, LQ, qQ) {
        return (0, bQ.r)(QQ, FQ, wQ, LQ, qQ)
      }
      static FileAsURL(QQ) {
        const FQ = new Blob([QQ]);
        return window.URL.createObjectURL(FQ)
      }
      static Format(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return QQ.toFixed(FQ)
      }
      static DeepCopy(QQ, FQ, wQ, LQ) {
        kQ.b.DeepCopy(QQ, FQ, wQ, LQ)
      }
      static IsEmpty(QQ) {
        for (const FQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, FQ)) return !1;
        return !0
      }
      static RegisterTopRootEvents(QQ, FQ) {
        for (let LQ = 0; LQ < FQ.length; LQ++) {
          const qQ = FQ[LQ];
          QQ.addEventListener(qQ.name, qQ.handler, !1);
          try {
            window.parent && window.parent.addEventListener(qQ.name, qQ.handler, !1)
          } catch (wQ) {}
        }
      }
      static UnregisterTopRootEvents(QQ, FQ) {
        for (let LQ = 0; LQ < FQ.length; LQ++) {
          const qQ = FQ[LQ];
          QQ.removeEventListener(qQ.name, qQ.handler);
          try {
            QQ.parent && QQ.parent.removeEventListener(qQ.name, qQ.handler)
          } catch (wQ) {}
        }
      }
      static async DumpFramebuffer(QQ, FQ, wQ, LQ) {
        throw (0, mQ.k)("DumpTools")
      }
      static DumpData(QQ, FQ, wQ, LQ) {
        throw (0, mQ.k)("DumpTools")
      }
      static async DumpDataAsync(QQ, FQ, wQ) {
        throw (0, mQ.k)("DumpTools")
      }
      static _IsOffScreenCanvas(QQ) {
        return void 0 !== QQ.convertToBlob
      }
      static ToBlob(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          qQ = arguments.length > 3 ? arguments[3] : void 0;
        LQ._IsOffScreenCanvas(QQ) || QQ.toBlob || (QQ.toBlob = function(QQ, FQ, wQ) {
          setTimeout((() => {
            const LQ = atob(this.toDataURL(FQ, wQ).split(",")[1]),
              qQ = LQ.length,
              oQ = new Uint8Array(qQ);
            for (let QQ = 0; QQ < qQ; QQ++) oQ[QQ] = LQ.charCodeAt(QQ);
            QQ(new Blob([oQ]))
          }))
        }), LQ._IsOffScreenCanvas(QQ) ? QQ.convertToBlob({
          type: wQ,
          quality: qQ
        }).then((QQ => FQ(QQ))) : QQ.toBlob((function(QQ) {
          FQ(QQ)
        }), wQ, qQ)
      }
      static DownloadBlob(QQ, FQ) {
        if ("download" in document.createElement("a")) {
          if (!FQ) {
            const QQ = new Date;
            FQ = "screenshot_" + ((QQ.getFullYear() + "-" + (QQ.getMonth() + 1)).slice(2) + "-" + QQ.getDate() + "_" + QQ.getHours() + "-" + ("0" + QQ.getMinutes()).slice(-2)) + ".png"
          }
          LQ.Download(QQ, FQ)
        } else if (QQ && "undefined" !== typeof URL) {
          const FQ = URL.createObjectURL(QQ),
            wQ = window.open("");
          if (!wQ) return;
          const LQ = wQ.document.createElement("img");
          LQ.onload = function() {
            URL.revokeObjectURL(FQ)
          }, LQ.src = FQ, wQ.document.body.appendChild(LQ)
        }
      }
      static EncodeScreenshotCanvasData(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          oQ = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof qQ && FQ) {
          if (FQ) {
            if (LQ._IsOffScreenCanvas(QQ)) return void QQ.convertToBlob({
              type: wQ,
              quality: oQ
            }).then((QQ => {
              const wQ = new FileReader;
              wQ.readAsDataURL(QQ), wQ.onloadend = () => {
                const QQ = wQ.result;
                FQ(QQ)
              }
            }));
            const qQ = QQ.toDataURL(wQ, oQ);
            FQ(qQ)
          }
        } else this.ToBlob(QQ, (function(QQ) {
          QQ && LQ.DownloadBlob(QQ, qQ), FQ && FQ("")
        }), wQ, oQ)
      }
      static Download(QQ, FQ) {
        if ("undefined" === typeof URL) return;
        const wQ = window.URL.createObjectURL(QQ),
          LQ = document.createElement("a");
        document.body.appendChild(LQ), LQ.style.display = "none", LQ.href = wQ, LQ.download = FQ, LQ.addEventListener("click", (() => {
          LQ.parentElement && LQ.parentElement.removeChild(LQ)
        })), LQ.click(), window.URL.revokeObjectURL(wQ)
      }
      static BackCompatCameraNoPreventDefault(QQ) {
        return "boolean" === typeof QQ[0] ? QQ[0] : "boolean" === typeof QQ[1] && QQ[1]
      }
      static CreateScreenshot(QQ, FQ, wQ, LQ) {
        throw (0, mQ.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(QQ, FQ, wQ) {
        throw (0, mQ.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(QQ, FQ, wQ, LQ) {
        throw (0, mQ.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(QQ, FQ, wQ) {
        throw (0, mQ.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, AQ.d)()
      }
      static IsBase64(QQ) {
        return (0, bQ.l)(QQ)
      }
      static DecodeBase64(QQ) {
        return (0, bQ.e)(QQ)
      }
      static get errorsCount() {
        return DQ.c.errorsCount
      }
      static Log(QQ) {
        DQ.c.Log(QQ)
      }
      static Warn(QQ) {
        DQ.c.Warn(QQ)
      }
      static Error(QQ) {
        DQ.c.Error(QQ)
      }
      static get LogCache() {
        return DQ.c.LogCache
      }
      static ClearLogCache() {
        DQ.c.ClearLogCache()
      }
      static set LogLevels(QQ) {
        DQ.c.LogLevels = QQ
      }
      static set PerformanceLogLevel(QQ) {
        (QQ & LQ.PerformanceUserMarkLogLevel) !== LQ.PerformanceUserMarkLogLevel ? (QQ & LQ.PerformanceConsoleLogLevel) !== LQ.PerformanceConsoleLogLevel ? (LQ.StartPerformanceCounter = LQ._StartPerformanceCounterDisabled, LQ.EndPerformanceCounter = LQ._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), LQ.StartPerformanceCounter = LQ._StartMarkNative, LQ.EndPerformanceCounter = LQ._EndMarkNative) : (LQ.StartPerformanceCounter = LQ._StartPerformanceConsole, LQ.EndPerformanceCounter = LQ._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), LQ.StartPerformanceCounter = LQ._StartMarkNative, LQ.EndPerformanceCounter = LQ._EndMarkNative) : (LQ.StartPerformanceCounter = LQ._StartUserMark, LQ.EndPerformanceCounter = LQ._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(QQ, FQ) {}
      static _EndPerformanceCounterDisabled(QQ, FQ) {}
      static _StartUserMark(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!LQ._Performance) {
          if (!(0, oQ.g)()) return;
          LQ._Performance = window.performance
        }
        FQ && LQ._Performance.mark && LQ._Performance.mark(QQ + "-Begin")
      }
      static _EndUserMark(QQ) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && LQ._Performance.mark && (LQ._Performance.mark(QQ + "-End"), LQ._Performance.measure(QQ, QQ + "-Begin", QQ + "-End"))
      }
      static _StartPerformanceConsole(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        FQ && (LQ._StartUserMark(QQ, FQ), console.time && console.time(QQ))
      }
      static _EndPerformanceConsole(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        FQ && (LQ._EndUserMark(QQ, FQ), console.timeEnd(QQ))
      }
      static _StartMarkNative(QQ) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (LQ._NativePerformanceCounterHandles.has(QQ)) LQ.Warn(`Performance counter with name ${QQ} is already started.`);
          else {
            const FQ = _native.startPerformanceCounter(QQ);
            LQ._NativePerformanceCounterHandles.set(QQ, FQ)
          }
      }
      static _EndMarkNative(QQ) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const FQ = LQ._NativePerformanceCounterHandles.get(QQ);
          FQ ? (_native.endPerformanceCounter(FQ), LQ._NativePerformanceCounterHandles.delete(QQ)) : LQ.Warn(`Performance counter with name ${QQ} was not started.`)
        }
      }
      static get Now() {
        return vQ.e.Now
      }
      static GetClassName(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = null;
        if (!FQ && QQ.getClassName) wQ = QQ.getClassName();
        else {
          if (QQ instanceof Object) {
            wQ = (FQ ? QQ : Object.getPrototypeOf(QQ)).constructor.__bjsclassName__
          }
          wQ || (wQ = typeof QQ)
        }
        return wQ
      }
      static First(QQ, FQ) {
        for (const wQ of QQ)
          if (FQ(wQ)) return wQ;
        return null
      }
      static getFullClassName(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = null,
          LQ = null;
        if (!FQ && QQ.getClassName) wQ = QQ.getClassName();
        else {
          if (QQ instanceof Object) {
            const qQ = FQ ? QQ : Object.getPrototypeOf(QQ);
            wQ = qQ.constructor.__bjsclassName__, LQ = qQ.constructor.__bjsmoduleName__
          }
          wQ || (wQ = typeof QQ)
        }
        return wQ ? (null != LQ ? LQ + "." : "") + wQ : null
      }
      static async DelayAsync(QQ) {
        await new Promise((FQ => {
          setTimeout((() => {
            FQ()
          }), QQ)
        }))
      }
      static IsSafari() {
        return !!(0, oQ.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function MQ(QQ, FQ) {
      return wQ => {
        wQ.__bjsclassName__ = QQ, wQ.__bjsmoduleName__ = null != FQ ? FQ : null
      }
    }
    LQ = eQ, eQ.AssetBaseUrl = "", eQ.UseCustomRequestHeaders = !1, eQ.CustomRequestHeaders = uQ.e.CustomRequestHeaders, eQ.GetDOMTextContent = oQ.b, eQ._DefaultCdnUrl = "https://cdn.babylonjs.com", eQ._CdnVersion = "9.28.0", eQ._DefaultAssetsUrl = "https://assets.babylonjs.com/core", eQ.LoadScript = "undefined" === typeof _native ? LQ._LoadScriptWeb : LQ._LoadScriptNative, eQ.GetAbsoluteUrl = "object" === typeof document ? QQ => {
      const FQ = document.createElement("a");
      return FQ.href = QQ, FQ.href
    } : "function" === typeof URL && "object" === typeof location ? QQ => new URL(QQ, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, eQ.NoneLogLevel = DQ.c.NoneLogLevel, eQ.MessageLogLevel = DQ.c.MessageLogLevel, eQ.WarningLogLevel = DQ.c.WarningLogLevel, eQ.ErrorLogLevel = DQ.c.ErrorLogLevel, eQ.AllLogLevel = DQ.c.AllLogLevel, eQ.IsWindowObjectExist = oQ.g, eQ.PerformanceNoneLogLevel = 0, eQ.PerformanceUserMarkLogLevel = 1, eQ.PerformanceConsoleLogLevel = 2, eQ._NativePerformanceCounterHandles = new Map, eQ.StartPerformanceCounter = LQ._StartPerformanceCounterDisabled, eQ.EndPerformanceCounter = LQ._EndPerformanceCounterDisabled;
    class GQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = QQ, this.index = LQ - 1, this._done = !1, this._fn = FQ, this._successCallback = wQ
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(QQ, FQ, wQ) {
        const LQ = new GQ(QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return LQ.executeNext(), LQ
      }
      static SyncAsyncForLoop(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return GQ.Run(Math.ceil(QQ / FQ), (LQ => {
          qQ && qQ() ? LQ.breakLoop() : setTimeout((() => {
            for (let oQ = 0; oQ < FQ; ++oQ) {
              const DQ = LQ.index * FQ + oQ;
              if (DQ >= QQ) break;
              if (wQ(DQ), qQ && qQ()) {
                LQ.breakLoop();
                break
              }
            }
            LQ.executeNext()
          }), oQ)
        }), LQ)
      }
    }
    let pQ = !1;

    function cQ() {
      pQ || (pQ = !0, eQ.Mix = tQ.h, eQ.IsExponentOfTwo = tQ.g, HQ.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);