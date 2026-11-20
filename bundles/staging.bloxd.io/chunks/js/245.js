export const id = 245;
export const ids = [245];
export const modules = {
  39664: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu
    });
    var Eu = yu(38448),
      Ku = yu(36871);
    class Qu {
      static Instantiate(uu) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[uu]) return this.RegisteredExternalClasses[uu];
        const Ru = (0, Ku.b)(uu);
        if (Ru) return Ru;
        Eu.e.Warn(uu + " not found, you may have missed an import.");
        const yu = uu.split(".");
        let Qu = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Eu = 0, Ku = yu.length; Eu < Ku; Eu++) Qu = Qu[yu[Eu]];
        return "function" !== typeof Qu ? null : Qu
      }
    }
    Qu.RegisteredExternalClasses = {}
  },
  39458: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = yu(39411);
    class Ku {
      static get Now() {
        return (0, Eu.f)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39496: (uu, Ru, yu) => {
    function Eu(uu) {
      let Ru = 1;
      do {
        Ru *= 2
      } while (Ru < uu);
      return Ru === uu
    }

    function Ku(uu, Ru, yu) {
      return uu * (1 - yu) + Ru * yu
    }

    function Qu(uu) {
      const Ru = mu(uu),
        yu = Ju(uu);
      return Ru - uu > uu - yu ? yu : Ru
    }

    function mu(uu) {
      return uu--, uu |= uu >> 1, uu |= uu >> 2, uu |= uu >> 4, uu |= uu >> 8, uu |= uu >> 16, ++uu
    }

    function Ju(uu) {
      return uu |= uu >> 1, uu |= uu >> 2, uu |= uu >> 4, uu |= uu >> 8, (uu |= uu >> 16) - (uu >> 1)
    }

    function Nu(uu, Ru) {
      let yu;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          yu = Ju(uu);
          break;
        case 2:
          yu = Qu(uu);
          break;
        default:
          yu = mu(uu)
      }
      return Math.min(yu, Ru)
    }
    yu.d(Ru, {
      c: () => Ju,
      e: () => Nu,
      h: () => Eu,
      k: () => Ku,
      m: () => Qu
    })
  },
  39655: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Hu,
      g: () => bu,
      i: () => Wu,
      j: () => ju
    });
    var Eu, Ku = yu(36858),
      Qu = yu(39411),
      mu = yu(38448),
      Ju = yu(38444),
      Nu = yu(39458),
      Xu = yu(39430),
      Vu = yu(39611),
      ru = yu(36851),
      Bu = yu(39606),
      xu = yu(39447),
      Su = yu(39664),
      pu = yu(37665),
      Tu = yu(39496);
    class Wu {
      static get BaseUrl() {
        return Bu.h.BaseUrl
      }
      static set BaseUrl(uu) {
        Bu.h.BaseUrl = uu
      }
      static get CleanUrl() {
        return Bu.h.CleanUrl
      }
      static set CleanUrl(uu) {
        Bu.h.CleanUrl = uu
      }
      static IsAbsoluteUrl(uu) {
        return 0 === uu.indexOf("//") || -1 !== uu.indexOf("://") && (-1 !== uu.indexOf(".") && (-1 !== uu.indexOf("/") && (!(uu.indexOf(":") > uu.indexOf("/")) && (uu.indexOf("://") < uu.indexOf(".") || (0 === uu.indexOf("data:") || 0 === uu.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(uu) {
        Bu.h.ScriptBaseUrl = uu
      }
      static get ScriptBaseUrl() {
        return Bu.h.ScriptBaseUrl
      }
      static set CDNBaseUrl(uu) {
        Eu.ScriptBaseUrl = uu, Eu.AssetBaseUrl = uu
      }
      static set ScriptPreprocessUrl(uu) {
        Bu.h.ScriptPreprocessUrl = uu
      }
      static get ScriptPreprocessUrl() {
        return Bu.h.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Bu.h.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(uu) {
        Bu.h.DefaultRetryStrategy = uu
      }
      static get CorsBehavior() {
        return Bu.h.CorsBehavior
      }
      static set CorsBehavior(uu) {
        Bu.h.CorsBehavior = uu
      }
      static get UseFallbackTexture() {
        return ru.b.UseFallbackTexture
      }
      static set UseFallbackTexture(uu) {
        ru.b.UseFallbackTexture = uu
      }
      static get RegisteredExternalClasses() {
        return Su.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(uu) {
        Su.b.RegisteredExternalClasses = uu
      }
      static get fallbackTexture() {
        return ru.b.FallbackTexture
      }
      static set fallbackTexture(uu) {
        ru.b.FallbackTexture = uu
      }
      static FetchToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = 4 * ((Math.abs(uu) * yu % yu | 0) + (Math.abs(Ru) * Eu % Eu | 0) * yu);
        Qu.r = Ku[mu] / 255, Qu.g = Ku[mu + 1] / 255, Qu.b = Ku[mu + 2] / 255, Qu.a = Ku[mu + 3] / 255
      }
      static Mix(uu, Ru, yu) {
        return 0
      }
      static Instantiate(uu) {
        return Su.b.Instantiate(uu)
      }
      static SetImmediate(uu) {
        xu.e.SetImmediate(uu)
      }
      static IsExponentOfTwo(uu) {
        return !0
      }
      static FloatRound(uu) {
        return Math.fround(uu)
      }
      static GetFilename(uu) {
        const Ru = uu.lastIndexOf("/");
        return Ru < 0 ? uu : uu.substring(Ru + 1)
      }
      static GetFolderPath(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = uu.lastIndexOf("/");
        return yu < 0 ? Ru ? uu : "" : uu.substring(0, yu + 1)
      }
      static ToDegrees(uu) {
        return 180 * uu / Math.PI
      }
      static ToRadians(uu) {
        return uu * Math.PI / 180
      }
      static SmoothAngleChange(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Eu = this.ToRadians(uu),
          Ku = this.ToRadians(Ru);
        return this.ToDegrees(Math.atan2((1 - yu) * Math.sin(Ku) + yu * Math.sin(Eu), (1 - yu) * Math.cos(Ku) + yu * Math.cos(Eu)))
      }
      static MakeArray(uu, Ru) {
        return !0 === Ru || void 0 !== uu && null != uu ? Array.isArray(uu) ? uu : [uu] : null
      }
      static GetPointerPrefix(uu) {
        return (0, Qu.f)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(uu, Ru) {
        (0, Bu.A)(uu, Ru)
      }
      static SetReferrerPolicyBehavior(uu, Ru) {
        Ru.referrerPolicy = uu
      }
      static get PreprocessUrl() {
        return Bu.h.PreprocessUrl
      }
      static set PreprocessUrl(uu) {
        Bu.h.PreprocessUrl = uu
      }
      static LoadImage(uu, Ru, yu, Eu, Ku, Qu) {
        return (0, Bu.r)(uu, Ru, yu, Eu, Ku, Qu)
      }
      static LoadFile(uu, Ru, yu, Eu, Ku, Qu) {
        return (0, Bu.p)(uu, Ru, yu, Eu, Ku, Qu)
      }
      static async LoadFileAsync(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((yu, Eu) => {
          (0, Bu.p)(uu, (uu => {
            yu(uu)
          }), void 0, void 0, Ru, ((uu, Ru) => {
            Eu(Ru)
          }))
        }))
      }
      static GetAssetUrl(uu) {
        if (!uu) return "";
        if (Eu.AssetBaseUrl && uu.startsWith(Eu._DefaultAssetsUrl)) {
          const Ru = Eu.AssetBaseUrl.endsWith("/") ? Eu.AssetBaseUrl.slice(0, -1) : Eu.AssetBaseUrl;
          return uu.replace(Eu._DefaultAssetsUrl, Ru)
        }
        return uu
      }
      static GetBabylonScriptURL(uu, Ru) {
        if (!uu) return "";
        if (uu.startsWith(Eu._DefaultCdnUrl))
          if (Eu.ScriptBaseUrl) {
            const Ru = Eu.ScriptBaseUrl.endsWith("/") ? Eu.ScriptBaseUrl.slice(0, -1) : Eu.ScriptBaseUrl;
            uu = uu.replace(Eu._DefaultCdnUrl, Ru)
          } else if (Eu._CdnVersion) {
          const Ru = `${Eu._DefaultCdnUrl}/v${Eu._CdnVersion}`;
          uu.startsWith(Ru) || (uu = uu.replace(Eu._DefaultCdnUrl, Ru))
        }
        return uu = Eu.ScriptPreprocessUrl(uu), Ru && !Eu.IsAbsoluteUrl(uu) && (uu = Eu.GetAbsoluteUrl(uu)), uu
      }
      static LoadBabylonScript(uu, Ru, yu, Ku) {
        uu = Eu.GetBabylonScriptURL(uu), Eu.LoadScript(uu, Ru, yu)
      }
      static async LoadBabylonScriptAsync(uu) {
        return uu = Eu.GetBabylonScriptURL(uu), await Eu.LoadScriptAsync(uu)
      }
      static _LoadScriptNative(uu, Ru, yu, Ku) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const uu = "Loading a script as an ES module is not supported in Babylon Native";
            return void yu?.(uu, new Error(uu))
          }
          Eu.LoadFile(uu, (uu => {
            try {
              Function(uu).apply(null), Ru && Ru()
            } catch (Eu) {
              yu && yu("LoadScript Error", Eu)
            }
          }), void 0, void 0, !1, ((uu, Ru) => {
            yu && yu("LoadScript Error", Ru)
          }))
        }
      }
      static _LoadScriptWeb(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(uu), Ru && Ru()
          } catch (Nu) {
            yu?.(`Unable to load script '${uu}' in worker`, Nu)
          }
          return
        }
        if (!(0, Qu.f)()) return void yu?.(`Cannot load script '${uu}' outside of a window or a worker`);
        const mu = document.getElementsByTagName("head")[0],
          Ju = document.createElement("script");
        Ku ? (Ju.setAttribute("type", "module"), Ju.innerText = uu) : (Ju.setAttribute("type", "text/javascript"), Ju.setAttribute("src", uu)), Eu && (Ju.id = Eu), Ju.onload = () => {
          Ru && Ru()
        }, Ju.onerror = Ru => {
          yu && yu(`Unable to load script '${uu}'`, Ru)
        }, mu.appendChild(Ju)
      }
      static async LoadScriptAsync(uu, Ru) {
        return await new Promise(((yu, Eu) => {
          this.LoadScript(uu, (() => {
            yu()
          }), ((uu, Ru) => {
            Eu(Ru || new Error(uu))
          }), Ru)
        }))
      }
      static ReadFileAsDataURL(uu, Ru, yu) {
        const Eu = new FileReader,
          Qu = {
            onCompleteObservable: new Ku.b,
            abort: () => Eu.abort()
          };
        return Eu.onloadend = () => {
          Qu.onCompleteObservable.notifyObservers(Qu)
        }, Eu.onload = uu => {
          Ru(uu.target.result)
        }, Eu.onprogress = yu, Eu.readAsDataURL(uu), Qu
      }
      static ReadFile(uu, Ru, yu, Eu, Ku) {
        return (0, Bu.u)(uu, Ru, yu, Eu, Ku)
      }
      static FileAsURL(uu) {
        const Ru = new Blob([uu]);
        return window.URL.createObjectURL(Ru)
      }
      static Format(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return uu.toFixed(Ru)
      }
      static DeepCopy(uu, Ru, yu, Eu) {
        Ju.e.DeepCopy(uu, Ru, yu, Eu)
      }
      static IsEmpty(uu) {
        for (const Ru in uu)
          if (Object.prototype.hasOwnProperty.call(uu, Ru)) return !1;
        return !0
      }
      static RegisterTopRootEvents(uu, Ru) {
        for (let Eu = 0; Eu < Ru.length; Eu++) {
          const Ku = Ru[Eu];
          uu.addEventListener(Ku.name, Ku.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Ku.name, Ku.handler, !1)
          } catch (yu) {}
        }
      }
      static UnregisterTopRootEvents(uu, Ru) {
        for (let Eu = 0; Eu < Ru.length; Eu++) {
          const Ku = Ru[Eu];
          uu.removeEventListener(Ku.name, Ku.handler);
          try {
            uu.parent && uu.parent.removeEventListener(Ku.name, Ku.handler)
          } catch (yu) {}
        }
      }
      static async DumpFramebuffer(uu, Ru, yu, Eu) {
        throw (0, Xu.k)("DumpTools")
      }
      static DumpData(uu, Ru, yu, Eu) {
        throw (0, Xu.k)("DumpTools")
      }
      static async DumpDataAsync(uu, Ru, yu) {
        throw (0, Xu.k)("DumpTools")
      }
      static _IsOffScreenCanvas(uu) {
        return void 0 !== uu.convertToBlob
      }
      static ToBlob(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Ku = arguments.length > 3 ? arguments[3] : void 0;
        Eu._IsOffScreenCanvas(uu) || uu.toBlob || (uu.toBlob = function(uu, Ru, yu) {
          setTimeout((() => {
            const Eu = atob(this.toDataURL(Ru, yu).split(",")[1]),
              Ku = Eu.length,
              Qu = new Uint8Array(Ku);
            for (let uu = 0; uu < Ku; uu++) Qu[uu] = Eu.charCodeAt(uu);
            uu(new Blob([Qu]))
          }))
        }), Eu._IsOffScreenCanvas(uu) ? uu.convertToBlob({
          type: yu,
          quality: Ku
        }).then((uu => Ru(uu))) : uu.toBlob((function(uu) {
          Ru(uu)
        }), yu, Ku)
      }
      static DownloadBlob(uu, Ru) {
        if ("download" in document.createElement("a")) {
          if (!Ru) {
            const uu = new Date;
            Ru = "screenshot_" + ((uu.getFullYear() + "-" + (uu.getMonth() + 1)).slice(2) + "-" + uu.getDate() + "_" + uu.getHours() + "-" + ("0" + uu.getMinutes()).slice(-2)) + ".png"
          }
          Eu.Download(uu, Ru)
        } else if (uu && "undefined" !== typeof URL) {
          const Ru = URL.createObjectURL(uu),
            yu = window.open("");
          if (!yu) return;
          const Eu = yu.document.createElement("img");
          Eu.onload = function() {
            URL.revokeObjectURL(Ru)
          }, Eu.src = Ru, yu.document.body.appendChild(Eu)
        }
      }
      static EncodeScreenshotCanvasData(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Ku = arguments.length > 3 ? arguments[3] : void 0,
          Qu = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Ku && Ru) {
          if (Ru) {
            if (Eu._IsOffScreenCanvas(uu)) return void uu.convertToBlob({
              type: yu,
              quality: Qu
            }).then((uu => {
              const yu = new FileReader;
              yu.readAsDataURL(uu), yu.onloadend = () => {
                const uu = yu.result;
                Ru(uu)
              }
            }));
            const Ku = uu.toDataURL(yu, Qu);
            Ru(Ku)
          }
        } else this.ToBlob(uu, (function(uu) {
          uu && Eu.DownloadBlob(uu, Ku), Ru && Ru("")
        }), yu, Qu)
      }
      static Download(uu, Ru) {
        if ("undefined" === typeof URL) return;
        const yu = window.URL.createObjectURL(uu),
          Eu = document.createElement("a");
        document.body.appendChild(Eu), Eu.style.display = "none", Eu.href = yu, Eu.download = Ru, Eu.addEventListener("click", (() => {
          Eu.parentElement && Eu.parentElement.removeChild(Eu)
        })), Eu.click(), window.URL.revokeObjectURL(yu)
      }
      static BackCompatCameraNoPreventDefault(uu) {
        return "boolean" === typeof uu[0] ? uu[0] : "boolean" === typeof uu[1] && uu[1]
      }
      static CreateScreenshot(uu, Ru, yu, Eu) {
        throw (0, Xu.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(uu, Ru, yu) {
        throw (0, Xu.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(uu, Ru, yu, Eu) {
        throw (0, Xu.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(uu, Ru, yu) {
        throw (0, Xu.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, pu.b)()
      }
      static IsBase64(uu) {
        return (0, Bu.n)(uu)
      }
      static DecodeBase64(uu) {
        return (0, Bu.e)(uu)
      }
      static get errorsCount() {
        return mu.e.errorsCount
      }
      static Log(uu) {
        mu.e.Log(uu)
      }
      static Warn(uu) {
        mu.e.Warn(uu)
      }
      static Error(uu) {
        mu.e.Error(uu)
      }
      static get LogCache() {
        return mu.e.LogCache
      }
      static ClearLogCache() {
        mu.e.ClearLogCache()
      }
      static set LogLevels(uu) {
        mu.e.LogLevels = uu
      }
      static set PerformanceLogLevel(uu) {
        (uu & Eu.PerformanceUserMarkLogLevel) !== Eu.PerformanceUserMarkLogLevel ? (uu & Eu.PerformanceConsoleLogLevel) !== Eu.PerformanceConsoleLogLevel ? (Eu.StartPerformanceCounter = Eu._StartPerformanceCounterDisabled, Eu.EndPerformanceCounter = Eu._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Eu.StartPerformanceCounter = Eu._StartMarkNative, Eu.EndPerformanceCounter = Eu._EndMarkNative) : (Eu.StartPerformanceCounter = Eu._StartPerformanceConsole, Eu.EndPerformanceCounter = Eu._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Eu.StartPerformanceCounter = Eu._StartMarkNative, Eu.EndPerformanceCounter = Eu._EndMarkNative) : (Eu.StartPerformanceCounter = Eu._StartUserMark, Eu.EndPerformanceCounter = Eu._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(uu, Ru) {}
      static _EndPerformanceCounterDisabled(uu, Ru) {}
      static _StartUserMark(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Eu._Performance) {
          if (!(0, Qu.f)()) return;
          Eu._Performance = window.performance
        }
        Ru && Eu._Performance.mark && Eu._Performance.mark(uu + "-Begin")
      }
      static _EndUserMark(uu) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Eu._Performance.mark && (Eu._Performance.mark(uu + "-End"), Eu._Performance.measure(uu, uu + "-Begin", uu + "-End"))
      }
      static _StartPerformanceConsole(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Ru && (Eu._StartUserMark(uu, Ru), console.time && console.time(uu))
      }
      static _EndPerformanceConsole(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Ru && (Eu._EndUserMark(uu, Ru), console.timeEnd(uu))
      }
      static _StartMarkNative(uu) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Eu._NativePerformanceCounterHandles.has(uu)) Eu.Warn(`Performance counter with name ${uu} is already started.`);
          else {
            const Ru = _native.startPerformanceCounter(uu);
            Eu._NativePerformanceCounterHandles.set(uu, Ru)
          }
      }
      static _EndMarkNative(uu) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Ru = Eu._NativePerformanceCounterHandles.get(uu);
          Ru ? (_native.endPerformanceCounter(Ru), Eu._NativePerformanceCounterHandles.delete(uu)) : Eu.Warn(`Performance counter with name ${uu} was not started.`)
        }
      }
      static get Now() {
        return Nu.b.Now
      }
      static GetClassName(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = null;
        if (!Ru && uu.getClassName) yu = uu.getClassName();
        else {
          if (uu instanceof Object) {
            yu = (Ru ? uu : Object.getPrototypeOf(uu)).constructor.__bjsclassName__
          }
          yu || (yu = typeof uu)
        }
        return yu
      }
      static First(uu, Ru) {
        for (const yu of uu)
          if (Ru(yu)) return yu;
        return null
      }
      static getFullClassName(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = null,
          Eu = null;
        if (!Ru && uu.getClassName) yu = uu.getClassName();
        else {
          if (uu instanceof Object) {
            const Ku = Ru ? uu : Object.getPrototypeOf(uu);
            yu = Ku.constructor.__bjsclassName__, Eu = Ku.constructor.__bjsmoduleName__
          }
          yu || (yu = typeof uu)
        }
        return yu ? (null != Eu ? Eu + "." : "") + yu : null
      }
      static async DelayAsync(uu) {
        await new Promise((Ru => {
          setTimeout((() => {
            Ru()
          }), uu)
        }))
      }
      static IsSafari() {
        return !!(0, Qu.e)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function ju(uu, Ru) {
      return yu => {
        yu.__bjsclassName__ = uu, yu.__bjsmoduleName__ = null != Ru ? Ru : null
      }
    }
    Eu = Wu, Wu.AssetBaseUrl = "", Wu.UseCustomRequestHeaders = !1, Wu.CustomRequestHeaders = Vu.e.CustomRequestHeaders, Wu.GetDOMTextContent = Qu.b, Wu._DefaultCdnUrl = "https://cdn.babylonjs.com", Wu._CdnVersion = "9.28.0", Wu._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Wu.LoadScript = "undefined" === typeof _native ? Eu._LoadScriptWeb : Eu._LoadScriptNative, Wu.GetAbsoluteUrl = "object" === typeof document ? uu => {
      const Ru = document.createElement("a");
      return Ru.href = uu, Ru.href
    } : "function" === typeof URL && "object" === typeof location ? uu => new URL(uu, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Wu.NoneLogLevel = mu.e.NoneLogLevel, Wu.MessageLogLevel = mu.e.MessageLogLevel, Wu.WarningLogLevel = mu.e.WarningLogLevel, Wu.ErrorLogLevel = mu.e.ErrorLogLevel, Wu.AllLogLevel = mu.e.AllLogLevel, Wu.IsWindowObjectExist = Qu.f, Wu.PerformanceNoneLogLevel = 0, Wu.PerformanceUserMarkLogLevel = 1, Wu.PerformanceConsoleLogLevel = 2, Wu._NativePerformanceCounterHandles = new Map, Wu.StartPerformanceCounter = Eu._StartPerformanceCounterDisabled, Wu.EndPerformanceCounter = Eu._EndPerformanceCounterDisabled;
    class Hu {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = uu, this.index = Eu - 1, this._done = !1, this._fn = Ru, this._successCallback = yu
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(uu, Ru, yu) {
        const Eu = new Hu(uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Eu.executeNext(), Eu
      }
      static SyncAsyncForLoop(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Hu.Run(Math.ceil(uu / Ru), (Eu => {
          Ku && Ku() ? Eu.breakLoop() : setTimeout((() => {
            for (let Qu = 0; Qu < Ru; ++Qu) {
              const mu = Eu.index * Ru + Qu;
              if (mu >= uu) break;
              if (yu(mu), Ku && Ku()) {
                Eu.breakLoop();
                break
              }
            }
            Eu.executeNext()
          }), Qu)
        }), Eu)
      }
    }
    let du = !1;

    function bu() {
      du || (du = !0, Wu.Mix = Tu.k, Wu.IsExponentOfTwo = Tu.h, ru.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);