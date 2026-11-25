export const id = 263;
export const ids = [263];
export const modules = {
  40363: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956),
      qQ = XQ(37418);
    class TQ {
      static Instantiate(QQ) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[QQ]) return this.RegisteredExternalClasses[QQ];
        const WQ = (0, qQ.b)(QQ);
        if (WQ) return WQ;
        wQ.b.Warn(QQ + " not found, you may have missed an import.");
        const XQ = QQ.split(".");
        let TQ = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let wQ = 0, qQ = XQ.length; wQ < qQ; wQ++) TQ = TQ[XQ[wQ]];
        return "function" !== typeof TQ ? null : TQ
      }
    }
    TQ.RegisteredExternalClasses = {}
  },
  40178: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(40142);
    class qQ {
      static get Now() {
        return (0, wQ.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40206: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      let WQ = 1;
      do {
        WQ *= 2
      } while (WQ < QQ);
      return WQ === QQ
    }

    function qQ(QQ, WQ, XQ) {
      return QQ * (1 - XQ) + WQ * XQ
    }

    function TQ(QQ) {
      const WQ = zQ(QQ),
        XQ = sQ(QQ);
      return WQ - QQ > QQ - XQ ? XQ : WQ
    }

    function zQ(QQ) {
      return QQ--, QQ |= QQ >> 1, QQ |= QQ >> 2, QQ |= QQ >> 4, QQ |= QQ >> 8, QQ |= QQ >> 16, ++QQ
    }

    function sQ(QQ) {
      return QQ |= QQ >> 1, QQ |= QQ >> 2, QQ |= QQ >> 4, QQ |= QQ >> 8, (QQ |= QQ >> 16) - (QQ >> 1)
    }

    function FQ(QQ, WQ) {
      let XQ;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          XQ = sQ(QQ);
          break;
        case 2:
          XQ = TQ(QQ);
          break;
        default:
          XQ = zQ(QQ)
      }
      return Math.min(XQ, WQ)
    }
    XQ.d(WQ, {
      d: () => sQ,
      h: () => FQ,
      k: () => wQ,
      n: () => qQ,
      q: () => TQ
    })
  },
  40357: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => pQ,
      f: () => UQ,
      g: () => VQ,
      k: () => DQ
    });
    var wQ, qQ = XQ(37399),
      TQ = XQ(40142),
      zQ = XQ(38956),
      sQ = XQ(38947),
      FQ = XQ(40178),
      PQ = XQ(40153),
      gQ = XQ(40314),
      JQ = XQ(37392),
      rQ = XQ(40307),
      IQ = XQ(40164),
      jQ = XQ(40363),
      BQ = XQ(38191),
      yQ = XQ(40206);
    class VQ {
      static get BaseUrl() {
        return rQ.e.BaseUrl
      }
      static set BaseUrl(QQ) {
        rQ.e.BaseUrl = QQ
      }
      static get CleanUrl() {
        return rQ.e.CleanUrl
      }
      static set CleanUrl(QQ) {
        rQ.e.CleanUrl = QQ
      }
      static IsAbsoluteUrl(QQ) {
        return 0 === QQ.indexOf("//") || -1 !== QQ.indexOf("://") && (-1 !== QQ.indexOf(".") && (-1 !== QQ.indexOf("/") && (!(QQ.indexOf(":") > QQ.indexOf("/")) && (QQ.indexOf("://") < QQ.indexOf(".") || (0 === QQ.indexOf("data:") || 0 === QQ.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(QQ) {
        rQ.e.ScriptBaseUrl = QQ
      }
      static get ScriptBaseUrl() {
        return rQ.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(QQ) {
        wQ.ScriptBaseUrl = QQ, wQ.AssetBaseUrl = QQ
      }
      static set ScriptPreprocessUrl(QQ) {
        rQ.e.ScriptPreprocessUrl = QQ
      }
      static get ScriptPreprocessUrl() {
        return rQ.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return rQ.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(QQ) {
        rQ.e.DefaultRetryStrategy = QQ
      }
      static get CorsBehavior() {
        return rQ.e.CorsBehavior
      }
      static set CorsBehavior(QQ) {
        rQ.e.CorsBehavior = QQ
      }
      static get UseFallbackTexture() {
        return JQ.d.UseFallbackTexture
      }
      static set UseFallbackTexture(QQ) {
        JQ.d.UseFallbackTexture = QQ
      }
      static get RegisteredExternalClasses() {
        return jQ.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(QQ) {
        jQ.d.RegisteredExternalClasses = QQ
      }
      static get fallbackTexture() {
        return JQ.d.FallbackTexture
      }
      static set fallbackTexture(QQ) {
        JQ.d.FallbackTexture = QQ
      }
      static FetchToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = 4 * ((Math.abs(QQ) * XQ % XQ | 0) + (Math.abs(WQ) * wQ % wQ | 0) * XQ);
        TQ.r = qQ[zQ] / 255, TQ.g = qQ[zQ + 1] / 255, TQ.b = qQ[zQ + 2] / 255, TQ.a = qQ[zQ + 3] / 255
      }
      static Mix(QQ, WQ, XQ) {
        return 0
      }
      static Instantiate(QQ) {
        return jQ.d.Instantiate(QQ)
      }
      static SetImmediate(QQ) {
        IQ.b.SetImmediate(QQ)
      }
      static IsExponentOfTwo(QQ) {
        return !0
      }
      static FloatRound(QQ) {
        return Math.fround(QQ)
      }
      static GetFilename(QQ) {
        const WQ = QQ.lastIndexOf("/");
        return WQ < 0 ? QQ : QQ.substring(WQ + 1)
      }
      static GetFolderPath(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = QQ.lastIndexOf("/");
        return XQ < 0 ? WQ ? QQ : "" : QQ.substring(0, XQ + 1)
      }
      static ToDegrees(QQ) {
        return 180 * QQ / Math.PI
      }
      static ToRadians(QQ) {
        return QQ * Math.PI / 180
      }
      static SmoothAngleChange(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const wQ = this.ToRadians(QQ),
          qQ = this.ToRadians(WQ);
        return this.ToDegrees(Math.atan2((1 - XQ) * Math.sin(qQ) + XQ * Math.sin(wQ), (1 - XQ) * Math.cos(qQ) + XQ * Math.cos(wQ)))
      }
      static MakeArray(QQ, WQ) {
        return !0 === WQ || void 0 !== QQ && null != QQ ? Array.isArray(QQ) ? QQ : [QQ] : null
      }
      static GetPointerPrefix(QQ) {
        return (0, TQ.l)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(QQ, WQ) {
        (0, rQ.D)(QQ, WQ)
      }
      static SetReferrerPolicyBehavior(QQ, WQ) {
        WQ.referrerPolicy = QQ
      }
      static get PreprocessUrl() {
        return rQ.e.PreprocessUrl
      }
      static set PreprocessUrl(QQ) {
        rQ.e.PreprocessUrl = QQ
      }
      static LoadImage(QQ, WQ, XQ, wQ, qQ, TQ) {
        return (0, rQ.r)(QQ, WQ, XQ, wQ, qQ, TQ)
      }
      static LoadFile(QQ, WQ, XQ, wQ, qQ, TQ) {
        return (0, rQ.n)(QQ, WQ, XQ, wQ, qQ, TQ)
      }
      static async LoadFileAsync(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((XQ, wQ) => {
          (0, rQ.n)(QQ, (QQ => {
            XQ(QQ)
          }), void 0, void 0, WQ, ((QQ, WQ) => {
            wQ(WQ)
          }))
        }))
      }
      static GetAssetUrl(QQ) {
        if (!QQ) return "";
        if (wQ.AssetBaseUrl && QQ.startsWith(wQ._DefaultAssetsUrl)) {
          const WQ = wQ.AssetBaseUrl.endsWith("/") ? wQ.AssetBaseUrl.slice(0, -1) : wQ.AssetBaseUrl;
          return QQ.replace(wQ._DefaultAssetsUrl, WQ)
        }
        return QQ
      }
      static GetBabylonScriptURL(QQ, WQ) {
        if (!QQ) return "";
        if (QQ.startsWith(wQ._DefaultCdnUrl))
          if (wQ.ScriptBaseUrl) {
            const WQ = wQ.ScriptBaseUrl.endsWith("/") ? wQ.ScriptBaseUrl.slice(0, -1) : wQ.ScriptBaseUrl;
            QQ = QQ.replace(wQ._DefaultCdnUrl, WQ)
          } else if (wQ._CdnVersion) {
          const WQ = `${wQ._DefaultCdnUrl}/v${wQ._CdnVersion}`;
          QQ.startsWith(WQ) || (QQ = QQ.replace(wQ._DefaultCdnUrl, WQ))
        }
        return QQ = wQ.ScriptPreprocessUrl(QQ), WQ && !wQ.IsAbsoluteUrl(QQ) && (QQ = wQ.GetAbsoluteUrl(QQ)), QQ
      }
      static LoadBabylonScript(QQ, WQ, XQ, qQ) {
        QQ = wQ.GetBabylonScriptURL(QQ), wQ.LoadScript(QQ, WQ, XQ)
      }
      static async LoadBabylonScriptAsync(QQ) {
        return QQ = wQ.GetBabylonScriptURL(QQ), await wQ.LoadScriptAsync(QQ)
      }
      static _LoadScriptNative(QQ, WQ, XQ, qQ) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const QQ = "Loading a script as an ES module is not supported in Babylon Native";
            return void XQ?.(QQ, new Error(QQ))
          }
          wQ.LoadFile(QQ, (QQ => {
            try {
              Function(QQ).apply(null), WQ && WQ()
            } catch (wQ) {
              XQ && XQ("LoadScript Error", wQ)
            }
          }), void 0, void 0, !1, ((QQ, WQ) => {
            XQ && XQ("LoadScript Error", WQ)
          }))
        }
      }
      static _LoadScriptWeb(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(QQ), WQ && WQ()
          } catch (FQ) {
            XQ?.(`Unable to load script '${QQ}' in worker`, FQ)
          }
          return
        }
        if (!(0, TQ.l)()) return void XQ?.(`Cannot load script '${QQ}' outside of a window or a worker`);
        const zQ = document.getElementsByTagName("head")[0],
          sQ = document.createElement("script");
        qQ ? (sQ.setAttribute("type", "module"), sQ.innerText = QQ) : (sQ.setAttribute("type", "text/javascript"), sQ.setAttribute("src", QQ)), wQ && (sQ.id = wQ), sQ.onload = () => {
          WQ && WQ()
        }, sQ.onerror = WQ => {
          XQ && XQ(`Unable to load script '${QQ}'`, WQ)
        }, zQ.appendChild(sQ)
      }
      static async LoadScriptAsync(QQ, WQ) {
        return await new Promise(((XQ, wQ) => {
          this.LoadScript(QQ, (() => {
            XQ()
          }), ((QQ, WQ) => {
            wQ(WQ || new Error(QQ))
          }), WQ)
        }))
      }
      static ReadFileAsDataURL(QQ, WQ, XQ) {
        const wQ = new FileReader,
          TQ = {
            onCompleteObservable: new qQ.b,
            abort: () => wQ.abort()
          };
        return wQ.onloadend = () => {
          TQ.onCompleteObservable.notifyObservers(TQ)
        }, wQ.onload = QQ => {
          WQ(QQ.target.result)
        }, wQ.onprogress = XQ, wQ.readAsDataURL(QQ), TQ
      }
      static ReadFile(QQ, WQ, XQ, wQ, qQ) {
        return (0, rQ.u)(QQ, WQ, XQ, wQ, qQ)
      }
      static FileAsURL(QQ) {
        const WQ = new Blob([QQ]);
        return window.URL.createObjectURL(WQ)
      }
      static Format(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return QQ.toFixed(WQ)
      }
      static DeepCopy(QQ, WQ, XQ, wQ) {
        sQ.d.DeepCopy(QQ, WQ, XQ, wQ)
      }
      static IsEmpty(QQ) {
        for (const WQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, WQ)) return !1;
        return !0
      }
      static RegisterTopRootEvents(QQ, WQ) {
        for (let wQ = 0; wQ < WQ.length; wQ++) {
          const qQ = WQ[wQ];
          QQ.addEventListener(qQ.name, qQ.handler, !1);
          try {
            window.parent && window.parent.addEventListener(qQ.name, qQ.handler, !1)
          } catch (XQ) {}
        }
      }
      static UnregisterTopRootEvents(QQ, WQ) {
        for (let wQ = 0; wQ < WQ.length; wQ++) {
          const qQ = WQ[wQ];
          QQ.removeEventListener(qQ.name, qQ.handler);
          try {
            QQ.parent && QQ.parent.removeEventListener(qQ.name, qQ.handler)
          } catch (XQ) {}
        }
      }
      static async DumpFramebuffer(QQ, WQ, XQ, wQ) {
        throw (0, PQ.i)("DumpTools")
      }
      static DumpData(QQ, WQ, XQ, wQ) {
        throw (0, PQ.i)("DumpTools")
      }
      static async DumpDataAsync(QQ, WQ, XQ) {
        throw (0, PQ.i)("DumpTools")
      }
      static _IsOffScreenCanvas(QQ) {
        return void 0 !== QQ.convertToBlob
      }
      static ToBlob(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          qQ = arguments.length > 3 ? arguments[3] : void 0;
        wQ._IsOffScreenCanvas(QQ) || QQ.toBlob || (QQ.toBlob = function(QQ, WQ, XQ) {
          setTimeout((() => {
            const wQ = atob(this.toDataURL(WQ, XQ).split(",")[1]),
              qQ = wQ.length,
              TQ = new Uint8Array(qQ);
            for (let QQ = 0; QQ < qQ; QQ++) TQ[QQ] = wQ.charCodeAt(QQ);
            QQ(new Blob([TQ]))
          }))
        }), wQ._IsOffScreenCanvas(QQ) ? QQ.convertToBlob({
          type: XQ,
          quality: qQ
        }).then((QQ => WQ(QQ))) : QQ.toBlob((function(QQ) {
          WQ(QQ)
        }), XQ, qQ)
      }
      static DownloadBlob(QQ, WQ) {
        if ("download" in document.createElement("a")) {
          if (!WQ) {
            const QQ = new Date;
            WQ = "screenshot_" + ((QQ.getFullYear() + "-" + (QQ.getMonth() + 1)).slice(2) + "-" + QQ.getDate() + "_" + QQ.getHours() + "-" + ("0" + QQ.getMinutes()).slice(-2)) + ".png"
          }
          wQ.Download(QQ, WQ)
        } else if (QQ && "undefined" !== typeof URL) {
          const WQ = URL.createObjectURL(QQ),
            XQ = window.open("");
          if (!XQ) return;
          const wQ = XQ.document.createElement("img");
          wQ.onload = function() {
            URL.revokeObjectURL(WQ)
          }, wQ.src = WQ, XQ.document.body.appendChild(wQ)
        }
      }
      static EncodeScreenshotCanvasData(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          TQ = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof qQ && WQ) {
          if (WQ) {
            if (wQ._IsOffScreenCanvas(QQ)) return void QQ.convertToBlob({
              type: XQ,
              quality: TQ
            }).then((QQ => {
              const XQ = new FileReader;
              XQ.readAsDataURL(QQ), XQ.onloadend = () => {
                const QQ = XQ.result;
                WQ(QQ)
              }
            }));
            const qQ = QQ.toDataURL(XQ, TQ);
            WQ(qQ)
          }
        } else this.ToBlob(QQ, (function(QQ) {
          QQ && wQ.DownloadBlob(QQ, qQ), WQ && WQ("")
        }), XQ, TQ)
      }
      static Download(QQ, WQ) {
        if ("undefined" === typeof URL) return;
        const XQ = window.URL.createObjectURL(QQ),
          wQ = document.createElement("a");
        document.body.appendChild(wQ), wQ.style.display = "none", wQ.href = XQ, wQ.download = WQ, wQ.addEventListener("click", (() => {
          wQ.parentElement && wQ.parentElement.removeChild(wQ)
        })), wQ.click(), window.URL.revokeObjectURL(XQ)
      }
      static BackCompatCameraNoPreventDefault(QQ) {
        return "boolean" === typeof QQ[0] ? QQ[0] : "boolean" === typeof QQ[1] && QQ[1]
      }
      static CreateScreenshot(QQ, WQ, XQ, wQ) {
        throw (0, PQ.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(QQ, WQ, XQ) {
        throw (0, PQ.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(QQ, WQ, XQ, wQ) {
        throw (0, PQ.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(QQ, WQ, XQ) {
        throw (0, PQ.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, BQ.d)()
      }
      static IsBase64(QQ) {
        return (0, rQ.j)(QQ)
      }
      static DecodeBase64(QQ) {
        return (0, rQ.c)(QQ)
      }
      static get errorsCount() {
        return zQ.b.errorsCount
      }
      static Log(QQ) {
        zQ.b.Log(QQ)
      }
      static Warn(QQ) {
        zQ.b.Warn(QQ)
      }
      static Error(QQ) {
        zQ.b.Error(QQ)
      }
      static get LogCache() {
        return zQ.b.LogCache
      }
      static ClearLogCache() {
        zQ.b.ClearLogCache()
      }
      static set LogLevels(QQ) {
        zQ.b.LogLevels = QQ
      }
      static set PerformanceLogLevel(QQ) {
        (QQ & wQ.PerformanceUserMarkLogLevel) !== wQ.PerformanceUserMarkLogLevel ? (QQ & wQ.PerformanceConsoleLogLevel) !== wQ.PerformanceConsoleLogLevel ? (wQ.StartPerformanceCounter = wQ._StartPerformanceCounterDisabled, wQ.EndPerformanceCounter = wQ._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), wQ.StartPerformanceCounter = wQ._StartMarkNative, wQ.EndPerformanceCounter = wQ._EndMarkNative) : (wQ.StartPerformanceCounter = wQ._StartPerformanceConsole, wQ.EndPerformanceCounter = wQ._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), wQ.StartPerformanceCounter = wQ._StartMarkNative, wQ.EndPerformanceCounter = wQ._EndMarkNative) : (wQ.StartPerformanceCounter = wQ._StartUserMark, wQ.EndPerformanceCounter = wQ._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(QQ, WQ) {}
      static _EndPerformanceCounterDisabled(QQ, WQ) {}
      static _StartUserMark(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!wQ._Performance) {
          if (!(0, TQ.l)()) return;
          wQ._Performance = window.performance
        }
        WQ && wQ._Performance.mark && wQ._Performance.mark(QQ + "-Begin")
      }
      static _EndUserMark(QQ) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && wQ._Performance.mark && (wQ._Performance.mark(QQ + "-End"), wQ._Performance.measure(QQ, QQ + "-Begin", QQ + "-End"))
      }
      static _StartPerformanceConsole(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        WQ && (wQ._StartUserMark(QQ, WQ), console.time && console.time(QQ))
      }
      static _EndPerformanceConsole(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        WQ && (wQ._EndUserMark(QQ, WQ), console.timeEnd(QQ))
      }
      static _StartMarkNative(QQ) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (wQ._NativePerformanceCounterHandles.has(QQ)) wQ.Warn(`Performance counter with name ${QQ} is already started.`);
          else {
            const WQ = _native.startPerformanceCounter(QQ);
            wQ._NativePerformanceCounterHandles.set(QQ, WQ)
          }
      }
      static _EndMarkNative(QQ) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const WQ = wQ._NativePerformanceCounterHandles.get(QQ);
          WQ ? (_native.endPerformanceCounter(WQ), wQ._NativePerformanceCounterHandles.delete(QQ)) : wQ.Warn(`Performance counter with name ${QQ} was not started.`)
        }
      }
      static get Now() {
        return FQ.e.Now
      }
      static GetClassName(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = null;
        if (!WQ && QQ.getClassName) XQ = QQ.getClassName();
        else {
          if (QQ instanceof Object) {
            XQ = (WQ ? QQ : Object.getPrototypeOf(QQ)).constructor.__bjsclassName__
          }
          XQ || (XQ = typeof QQ)
        }
        return XQ
      }
      static First(QQ, WQ) {
        for (const XQ of QQ)
          if (WQ(XQ)) return XQ;
        return null
      }
      static getFullClassName(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = null,
          wQ = null;
        if (!WQ && QQ.getClassName) XQ = QQ.getClassName();
        else {
          if (QQ instanceof Object) {
            const qQ = WQ ? QQ : Object.getPrototypeOf(QQ);
            XQ = qQ.constructor.__bjsclassName__, wQ = qQ.constructor.__bjsmoduleName__
          }
          XQ || (XQ = typeof QQ)
        }
        return XQ ? (null != wQ ? wQ + "." : "") + XQ : null
      }
      static async DelayAsync(QQ) {
        await new Promise((WQ => {
          setTimeout((() => {
            WQ()
          }), QQ)
        }))
      }
      static IsSafari() {
        return !!(0, TQ.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function DQ(QQ, WQ) {
      return XQ => {
        XQ.__bjsclassName__ = QQ, XQ.__bjsmoduleName__ = null != WQ ? WQ : null
      }
    }
    wQ = VQ, VQ.AssetBaseUrl = "", VQ.UseCustomRequestHeaders = !1, VQ.CustomRequestHeaders = gQ.b.CustomRequestHeaders, VQ.GetDOMTextContent = TQ.e, VQ._DefaultCdnUrl = "https://cdn.babylonjs.com", VQ._CdnVersion = "9.28.0", VQ._DefaultAssetsUrl = "https://assets.babylonjs.com/core", VQ.LoadScript = "undefined" === typeof _native ? wQ._LoadScriptWeb : wQ._LoadScriptNative, VQ.GetAbsoluteUrl = "object" === typeof document ? QQ => {
      const WQ = document.createElement("a");
      return WQ.href = QQ, WQ.href
    } : "function" === typeof URL && "object" === typeof location ? QQ => new URL(QQ, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, VQ.NoneLogLevel = zQ.b.NoneLogLevel, VQ.MessageLogLevel = zQ.b.MessageLogLevel, VQ.WarningLogLevel = zQ.b.WarningLogLevel, VQ.ErrorLogLevel = zQ.b.ErrorLogLevel, VQ.AllLogLevel = zQ.b.AllLogLevel, VQ.IsWindowObjectExist = TQ.l, VQ.PerformanceNoneLogLevel = 0, VQ.PerformanceUserMarkLogLevel = 1, VQ.PerformanceConsoleLogLevel = 2, VQ._NativePerformanceCounterHandles = new Map, VQ.StartPerformanceCounter = wQ._StartPerformanceCounterDisabled, VQ.EndPerformanceCounter = wQ._EndPerformanceCounterDisabled;
    class pQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = QQ, this.index = wQ - 1, this._done = !1, this._fn = WQ, this._successCallback = XQ
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(QQ, WQ, XQ) {
        const wQ = new pQ(QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return wQ.executeNext(), wQ
      }
      static SyncAsyncForLoop(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return pQ.Run(Math.ceil(QQ / WQ), (wQ => {
          qQ && qQ() ? wQ.breakLoop() : setTimeout((() => {
            for (let TQ = 0; TQ < WQ; ++TQ) {
              const zQ = wQ.index * WQ + TQ;
              if (zQ >= QQ) break;
              if (XQ(zQ), qQ && qQ()) {
                wQ.breakLoop();
                break
              }
            }
            wQ.executeNext()
          }), TQ)
        }), wQ)
      }
    }
    let GQ = !1;

    function UQ() {
      GQ || (GQ = !0, VQ.Mix = yQ.n, VQ.IsExponentOfTwo = yQ.k, JQ.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);