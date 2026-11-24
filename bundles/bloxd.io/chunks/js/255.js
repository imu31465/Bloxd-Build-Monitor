export const id = 255;
export const ids = [255];
export const modules = {
  40036: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(38662),
      sD = wD(37134);
    class KD {
      static Instantiate(DD) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[DD]) return this.RegisteredExternalClasses[DD];
        const zD = (0, sD.e)(DD);
        if (zD) return zD;
        pD.d.Warn(DD + " not found, you may have missed an import.");
        const wD = DD.split(".");
        let KD = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let pD = 0, sD = wD.length; pD < sD; pD++) KD = KD[wD[pD]];
        return "function" !== typeof KD ? null : KD
      }
    }
    KD.RegisteredExternalClasses = {}
  },
  39832: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(39785);
    class sD {
      static get Now() {
        return (0, pD.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39852: (DD, zD, wD) => {
    function pD(DD) {
      let zD = 1;
      do {
        zD *= 2
      } while (zD < DD);
      return zD === DD
    }

    function sD(DD, zD, wD) {
      return DD * (1 - wD) + zD * wD
    }

    function KD(DD) {
      const zD = rD(DD),
        wD = LD(DD);
      return zD - DD > DD - wD ? wD : zD
    }

    function rD(DD) {
      return DD--, DD |= DD >> 1, DD |= DD >> 2, DD |= DD >> 4, DD |= DD >> 8, DD |= DD >> 16, ++DD
    }

    function LD(DD) {
      return DD |= DD >> 1, DD |= DD >> 2, DD |= DD >> 4, DD |= DD >> 8, (DD |= DD >> 16) - (DD >> 1)
    }

    function cD(DD, zD) {
      let wD;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          wD = LD(DD);
          break;
        case 2:
          wD = KD(DD);
          break;
        default:
          wD = rD(DD)
      }
      return Math.min(wD, zD)
    }
    wD.d(zD, {
      b: () => LD,
      f: () => cD,
      g: () => pD,
      j: () => sD,
      k: () => KD
    })
  },
  40027: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => MD,
      g: () => JD,
      h: () => hD,
      j: () => nD
    });
    var pD, sD = wD(37119),
      KD = wD(39785),
      rD = wD(38662),
      LD = wD(38658),
      cD = wD(39832),
      gD = wD(39808),
      RD = wD(39969),
      AD = wD(37110),
      UD = wD(39960),
      fD = wD(39820),
      ID = wD(40036),
      BD = wD(37891),
      GD = wD(39852);
    class hD {
      static get BaseUrl() {
        return UD.g.BaseUrl
      }
      static set BaseUrl(DD) {
        UD.g.BaseUrl = DD
      }
      static get CleanUrl() {
        return UD.g.CleanUrl
      }
      static set CleanUrl(DD) {
        UD.g.CleanUrl = DD
      }
      static IsAbsoluteUrl(DD) {
        return 0 === DD.indexOf("//") || -1 !== DD.indexOf("://") && (-1 !== DD.indexOf(".") && (-1 !== DD.indexOf("/") && (!(DD.indexOf(":") > DD.indexOf("/")) && (DD.indexOf("://") < DD.indexOf(".") || (0 === DD.indexOf("data:") || 0 === DD.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(DD) {
        UD.g.ScriptBaseUrl = DD
      }
      static get ScriptBaseUrl() {
        return UD.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(DD) {
        pD.ScriptBaseUrl = DD, pD.AssetBaseUrl = DD
      }
      static set ScriptPreprocessUrl(DD) {
        UD.g.ScriptPreprocessUrl = DD
      }
      static get ScriptPreprocessUrl() {
        return UD.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return UD.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(DD) {
        UD.g.DefaultRetryStrategy = DD
      }
      static get CorsBehavior() {
        return UD.g.CorsBehavior
      }
      static set CorsBehavior(DD) {
        UD.g.CorsBehavior = DD
      }
      static get UseFallbackTexture() {
        return AD.d.UseFallbackTexture
      }
      static set UseFallbackTexture(DD) {
        AD.d.UseFallbackTexture = DD
      }
      static get RegisteredExternalClasses() {
        return ID.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(DD) {
        ID.b.RegisteredExternalClasses = DD
      }
      static get fallbackTexture() {
        return AD.d.FallbackTexture
      }
      static set fallbackTexture(DD) {
        AD.d.FallbackTexture = DD
      }
      static FetchToRef(DD, zD, wD, pD, sD, KD) {
        const rD = 4 * ((Math.abs(DD) * wD % wD | 0) + (Math.abs(zD) * pD % pD | 0) * wD);
        KD.r = sD[rD] / 255, KD.g = sD[rD + 1] / 255, KD.b = sD[rD + 2] / 255, KD.a = sD[rD + 3] / 255
      }
      static Mix(DD, zD, wD) {
        return 0
      }
      static Instantiate(DD) {
        return ID.b.Instantiate(DD)
      }
      static SetImmediate(DD) {
        fD.d.SetImmediate(DD)
      }
      static IsExponentOfTwo(DD) {
        return !0
      }
      static FloatRound(DD) {
        return Math.fround(DD)
      }
      static GetFilename(DD) {
        const zD = DD.lastIndexOf("/");
        return zD < 0 ? DD : DD.substring(zD + 1)
      }
      static GetFolderPath(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = DD.lastIndexOf("/");
        return wD < 0 ? zD ? DD : "" : DD.substring(0, wD + 1)
      }
      static ToDegrees(DD) {
        return 180 * DD / Math.PI
      }
      static ToRadians(DD) {
        return DD * Math.PI / 180
      }
      static SmoothAngleChange(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const pD = this.ToRadians(DD),
          sD = this.ToRadians(zD);
        return this.ToDegrees(Math.atan2((1 - wD) * Math.sin(sD) + wD * Math.sin(pD), (1 - wD) * Math.cos(sD) + wD * Math.cos(pD)))
      }
      static MakeArray(DD, zD) {
        return !0 === zD || void 0 !== DD && null != DD ? Array.isArray(DD) ? DD : [DD] : null
      }
      static GetPointerPrefix(DD) {
        return (0, KD.h)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(DD, zD) {
        (0, UD.G)(DD, zD)
      }
      static SetReferrerPolicyBehavior(DD, zD) {
        zD.referrerPolicy = DD
      }
      static get PreprocessUrl() {
        return UD.g.PreprocessUrl
      }
      static set PreprocessUrl(DD) {
        UD.g.PreprocessUrl = DD
      }
      static LoadImage(DD, zD, wD, pD, sD, KD) {
        return (0, UD.r)(DD, zD, wD, pD, sD, KD)
      }
      static LoadFile(DD, zD, wD, pD, sD, KD) {
        return (0, UD.o)(DD, zD, wD, pD, sD, KD)
      }
      static async LoadFileAsync(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((wD, pD) => {
          (0, UD.o)(DD, (DD => {
            wD(DD)
          }), void 0, void 0, zD, ((DD, zD) => {
            pD(zD)
          }))
        }))
      }
      static GetAssetUrl(DD) {
        if (!DD) return "";
        if (pD.AssetBaseUrl && DD.startsWith(pD._DefaultAssetsUrl)) {
          const zD = pD.AssetBaseUrl.endsWith("/") ? pD.AssetBaseUrl.slice(0, -1) : pD.AssetBaseUrl;
          return DD.replace(pD._DefaultAssetsUrl, zD)
        }
        return DD
      }
      static GetBabylonScriptURL(DD, zD) {
        if (!DD) return "";
        if (DD.startsWith(pD._DefaultCdnUrl))
          if (pD.ScriptBaseUrl) {
            const zD = pD.ScriptBaseUrl.endsWith("/") ? pD.ScriptBaseUrl.slice(0, -1) : pD.ScriptBaseUrl;
            DD = DD.replace(pD._DefaultCdnUrl, zD)
          } else if (pD._CdnVersion) {
          const zD = `${pD._DefaultCdnUrl}/v${pD._CdnVersion}`;
          DD.startsWith(zD) || (DD = DD.replace(pD._DefaultCdnUrl, zD))
        }
        return DD = pD.ScriptPreprocessUrl(DD), zD && !pD.IsAbsoluteUrl(DD) && (DD = pD.GetAbsoluteUrl(DD)), DD
      }
      static LoadBabylonScript(DD, zD, wD, sD) {
        DD = pD.GetBabylonScriptURL(DD), pD.LoadScript(DD, zD, wD)
      }
      static async LoadBabylonScriptAsync(DD) {
        return DD = pD.GetBabylonScriptURL(DD), await pD.LoadScriptAsync(DD)
      }
      static _LoadScriptNative(DD, zD, wD, sD) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const DD = "Loading a script as an ES module is not supported in Babylon Native";
            return void wD?.(DD, new Error(DD))
          }
          pD.LoadFile(DD, (DD => {
            try {
              Function(DD).apply(null), zD && zD()
            } catch (pD) {
              wD && wD("LoadScript Error", pD)
            }
          }), void 0, void 0, !1, ((DD, zD) => {
            wD && wD("LoadScript Error", zD)
          }))
        }
      }
      static _LoadScriptWeb(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(DD), zD && zD()
          } catch (cD) {
            wD?.(`Unable to load script '${DD}' in worker`, cD)
          }
          return
        }
        if (!(0, KD.h)()) return void wD?.(`Cannot load script '${DD}' outside of a window or a worker`);
        const rD = document.getElementsByTagName("head")[0],
          LD = document.createElement("script");
        sD ? (LD.setAttribute("type", "module"), LD.innerText = DD) : (LD.setAttribute("type", "text/javascript"), LD.setAttribute("src", DD)), pD && (LD.id = pD), LD.onload = () => {
          zD && zD()
        }, LD.onerror = zD => {
          wD && wD(`Unable to load script '${DD}'`, zD)
        }, rD.appendChild(LD)
      }
      static async LoadScriptAsync(DD, zD) {
        return await new Promise(((wD, pD) => {
          this.LoadScript(DD, (() => {
            wD()
          }), ((DD, zD) => {
            pD(zD || new Error(DD))
          }), zD)
        }))
      }
      static ReadFileAsDataURL(DD, zD, wD) {
        const pD = new FileReader,
          KD = {
            onCompleteObservable: new sD.b,
            abort: () => pD.abort()
          };
        return pD.onloadend = () => {
          KD.onCompleteObservable.notifyObservers(KD)
        }, pD.onload = DD => {
          zD(DD.target.result)
        }, pD.onprogress = wD, pD.readAsDataURL(DD), KD
      }
      static ReadFile(DD, zD, wD, pD, sD) {
        return (0, UD.u)(DD, zD, wD, pD, sD)
      }
      static FileAsURL(DD) {
        const zD = new Blob([DD]);
        return window.URL.createObjectURL(zD)
      }
      static Format(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return DD.toFixed(zD)
      }
      static DeepCopy(DD, zD, wD, pD) {
        LD.e.DeepCopy(DD, zD, wD, pD)
      }
      static IsEmpty(DD) {
        for (const zD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, zD)) return !1;
        return !0
      }
      static RegisterTopRootEvents(DD, zD) {
        for (let pD = 0; pD < zD.length; pD++) {
          const sD = zD[pD];
          DD.addEventListener(sD.name, sD.handler, !1);
          try {
            window.parent && window.parent.addEventListener(sD.name, sD.handler, !1)
          } catch (wD) {}
        }
      }
      static UnregisterTopRootEvents(DD, zD) {
        for (let pD = 0; pD < zD.length; pD++) {
          const sD = zD[pD];
          DD.removeEventListener(sD.name, sD.handler);
          try {
            DD.parent && DD.parent.removeEventListener(sD.name, sD.handler)
          } catch (wD) {}
        }
      }
      static async DumpFramebuffer(DD, zD, wD, pD) {
        throw (0, gD.j)("DumpTools")
      }
      static DumpData(DD, zD, wD, pD) {
        throw (0, gD.j)("DumpTools")
      }
      static async DumpDataAsync(DD, zD, wD) {
        throw (0, gD.j)("DumpTools")
      }
      static _IsOffScreenCanvas(DD) {
        return void 0 !== DD.convertToBlob
      }
      static ToBlob(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          sD = arguments.length > 3 ? arguments[3] : void 0;
        pD._IsOffScreenCanvas(DD) || DD.toBlob || (DD.toBlob = function(DD, zD, wD) {
          setTimeout((() => {
            const pD = atob(this.toDataURL(zD, wD).split(",")[1]),
              sD = pD.length,
              KD = new Uint8Array(sD);
            for (let DD = 0; DD < sD; DD++) KD[DD] = pD.charCodeAt(DD);
            DD(new Blob([KD]))
          }))
        }), pD._IsOffScreenCanvas(DD) ? DD.convertToBlob({
          type: wD,
          quality: sD
        }).then((DD => zD(DD))) : DD.toBlob((function(DD) {
          zD(DD)
        }), wD, sD)
      }
      static DownloadBlob(DD, zD) {
        if ("download" in document.createElement("a")) {
          if (!zD) {
            const DD = new Date;
            zD = "screenshot_" + ((DD.getFullYear() + "-" + (DD.getMonth() + 1)).slice(2) + "-" + DD.getDate() + "_" + DD.getHours() + "-" + ("0" + DD.getMinutes()).slice(-2)) + ".png"
          }
          pD.Download(DD, zD)
        } else if (DD && "undefined" !== typeof URL) {
          const zD = URL.createObjectURL(DD),
            wD = window.open("");
          if (!wD) return;
          const pD = wD.document.createElement("img");
          pD.onload = function() {
            URL.revokeObjectURL(zD)
          }, pD.src = zD, wD.document.body.appendChild(pD)
        }
      }
      static EncodeScreenshotCanvasData(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          sD = arguments.length > 3 ? arguments[3] : void 0,
          KD = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof sD && zD) {
          if (zD) {
            if (pD._IsOffScreenCanvas(DD)) return void DD.convertToBlob({
              type: wD,
              quality: KD
            }).then((DD => {
              const wD = new FileReader;
              wD.readAsDataURL(DD), wD.onloadend = () => {
                const DD = wD.result;
                zD(DD)
              }
            }));
            const sD = DD.toDataURL(wD, KD);
            zD(sD)
          }
        } else this.ToBlob(DD, (function(DD) {
          DD && pD.DownloadBlob(DD, sD), zD && zD("")
        }), wD, KD)
      }
      static Download(DD, zD) {
        if ("undefined" === typeof URL) return;
        const wD = window.URL.createObjectURL(DD),
          pD = document.createElement("a");
        document.body.appendChild(pD), pD.style.display = "none", pD.href = wD, pD.download = zD, pD.addEventListener("click", (() => {
          pD.parentElement && pD.parentElement.removeChild(pD)
        })), pD.click(), window.URL.revokeObjectURL(wD)
      }
      static BackCompatCameraNoPreventDefault(DD) {
        return "boolean" === typeof DD[0] ? DD[0] : "boolean" === typeof DD[1] && DD[1]
      }
      static CreateScreenshot(DD, zD, wD, pD) {
        throw (0, gD.j)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(DD, zD, wD) {
        throw (0, gD.j)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(DD, zD, wD, pD) {
        throw (0, gD.j)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(DD, zD, wD) {
        throw (0, gD.j)("ScreenshotTools")
      }
      static RandomId() {
        return (0, BD.c)()
      }
      static IsBase64(DD) {
        return (0, UD.l)(DD)
      }
      static DecodeBase64(DD) {
        return (0, UD.c)(DD)
      }
      static get errorsCount() {
        return rD.d.errorsCount
      }
      static Log(DD) {
        rD.d.Log(DD)
      }
      static Warn(DD) {
        rD.d.Warn(DD)
      }
      static Error(DD) {
        rD.d.Error(DD)
      }
      static get LogCache() {
        return rD.d.LogCache
      }
      static ClearLogCache() {
        rD.d.ClearLogCache()
      }
      static set LogLevels(DD) {
        rD.d.LogLevels = DD
      }
      static set PerformanceLogLevel(DD) {
        (DD & pD.PerformanceUserMarkLogLevel) !== pD.PerformanceUserMarkLogLevel ? (DD & pD.PerformanceConsoleLogLevel) !== pD.PerformanceConsoleLogLevel ? (pD.StartPerformanceCounter = pD._StartPerformanceCounterDisabled, pD.EndPerformanceCounter = pD._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), pD.StartPerformanceCounter = pD._StartMarkNative, pD.EndPerformanceCounter = pD._EndMarkNative) : (pD.StartPerformanceCounter = pD._StartPerformanceConsole, pD.EndPerformanceCounter = pD._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), pD.StartPerformanceCounter = pD._StartMarkNative, pD.EndPerformanceCounter = pD._EndMarkNative) : (pD.StartPerformanceCounter = pD._StartUserMark, pD.EndPerformanceCounter = pD._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(DD, zD) {}
      static _EndPerformanceCounterDisabled(DD, zD) {}
      static _StartUserMark(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!pD._Performance) {
          if (!(0, KD.h)()) return;
          pD._Performance = window.performance
        }
        zD && pD._Performance.mark && pD._Performance.mark(DD + "-Begin")
      }
      static _EndUserMark(DD) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && pD._Performance.mark && (pD._Performance.mark(DD + "-End"), pD._Performance.measure(DD, DD + "-Begin", DD + "-End"))
      }
      static _StartPerformanceConsole(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        zD && (pD._StartUserMark(DD, zD), console.time && console.time(DD))
      }
      static _EndPerformanceConsole(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        zD && (pD._EndUserMark(DD, zD), console.timeEnd(DD))
      }
      static _StartMarkNative(DD) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (pD._NativePerformanceCounterHandles.has(DD)) pD.Warn(`Performance counter with name ${DD} is already started.`);
          else {
            const zD = _native.startPerformanceCounter(DD);
            pD._NativePerformanceCounterHandles.set(DD, zD)
          }
      }
      static _EndMarkNative(DD) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const zD = pD._NativePerformanceCounterHandles.get(DD);
          zD ? (_native.endPerformanceCounter(zD), pD._NativePerformanceCounterHandles.delete(DD)) : pD.Warn(`Performance counter with name ${DD} was not started.`)
        }
      }
      static get Now() {
        return cD.c.Now
      }
      static GetClassName(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = null;
        if (!zD && DD.getClassName) wD = DD.getClassName();
        else {
          if (DD instanceof Object) {
            wD = (zD ? DD : Object.getPrototypeOf(DD)).constructor.__bjsclassName__
          }
          wD || (wD = typeof DD)
        }
        return wD
      }
      static First(DD, zD) {
        for (const wD of DD)
          if (zD(wD)) return wD;
        return null
      }
      static getFullClassName(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = null,
          pD = null;
        if (!zD && DD.getClassName) wD = DD.getClassName();
        else {
          if (DD instanceof Object) {
            const sD = zD ? DD : Object.getPrototypeOf(DD);
            wD = sD.constructor.__bjsclassName__, pD = sD.constructor.__bjsmoduleName__
          }
          wD || (wD = typeof DD)
        }
        return wD ? (null != pD ? pD + "." : "") + wD : null
      }
      static async DelayAsync(DD) {
        await new Promise((zD => {
          setTimeout((() => {
            zD()
          }), DD)
        }))
      }
      static IsSafari() {
        return !!(0, KD.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function nD(DD, zD) {
      return wD => {
        wD.__bjsclassName__ = DD, wD.__bjsmoduleName__ = null != zD ? zD : null
      }
    }
    pD = hD, hD.AssetBaseUrl = "", hD.UseCustomRequestHeaders = !1, hD.CustomRequestHeaders = RD.e.CustomRequestHeaders, hD.GetDOMTextContent = KD.b, hD._DefaultCdnUrl = "https://cdn.babylonjs.com", hD._CdnVersion = "9.28.0", hD._DefaultAssetsUrl = "https://assets.babylonjs.com/core", hD.LoadScript = "undefined" === typeof _native ? pD._LoadScriptWeb : pD._LoadScriptNative, hD.GetAbsoluteUrl = "object" === typeof document ? DD => {
      const zD = document.createElement("a");
      return zD.href = DD, zD.href
    } : "function" === typeof URL && "object" === typeof location ? DD => new URL(DD, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, hD.NoneLogLevel = rD.d.NoneLogLevel, hD.MessageLogLevel = rD.d.MessageLogLevel, hD.WarningLogLevel = rD.d.WarningLogLevel, hD.ErrorLogLevel = rD.d.ErrorLogLevel, hD.AllLogLevel = rD.d.AllLogLevel, hD.IsWindowObjectExist = KD.h, hD.PerformanceNoneLogLevel = 0, hD.PerformanceUserMarkLogLevel = 1, hD.PerformanceConsoleLogLevel = 2, hD._NativePerformanceCounterHandles = new Map, hD.StartPerformanceCounter = pD._StartPerformanceCounterDisabled, hD.EndPerformanceCounter = pD._EndPerformanceCounterDisabled;
    class MD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = DD, this.index = pD - 1, this._done = !1, this._fn = zD, this._successCallback = wD
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(DD, zD, wD) {
        const pD = new MD(DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return pD.executeNext(), pD
      }
      static SyncAsyncForLoop(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return MD.Run(Math.ceil(DD / zD), (pD => {
          sD && sD() ? pD.breakLoop() : setTimeout((() => {
            for (let KD = 0; KD < zD; ++KD) {
              const rD = pD.index * zD + KD;
              if (rD >= DD) break;
              if (wD(rD), sD && sD()) {
                pD.breakLoop();
                break
              }
            }
            pD.executeNext()
          }), KD)
        }), pD)
      }
    }
    let OD = !1;

    function JD() {
      OD || (OD = !0, hD.Mix = GD.j, hD.IsExponentOfTwo = GD.g, AD.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);