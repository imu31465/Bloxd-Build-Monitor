export const id = 247;
export const ids = [247];
export const modules = {
  40072: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(38812),
      Nd = kd(37303);
    class Wd {
      static Instantiate(dd) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[dd]) return this.RegisteredExternalClasses[dd];
        const Jd = (0, Nd.e)(dd);
        if (Jd) return Jd;
        pd.c.Warn(dd + " not found, you may have missed an import.");
        const kd = dd.split(".");
        let Wd = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let pd = 0, Nd = kd.length; pd < Nd; pd++) Wd = Wd[kd[pd]];
        return "function" !== typeof Wd ? null : Wd
      }
    }
    Wd.RegisteredExternalClasses = {}
  },
  39876: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(39840);
    class Nd {
      static get Now() {
        return (0, pd.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39902: (dd, Jd, kd) => {
    function pd(dd) {
      let Jd = 1;
      do {
        Jd *= 2
      } while (Jd < dd);
      return Jd === dd
    }

    function Nd(dd, Jd, kd) {
      return dd * (1 - kd) + Jd * kd
    }

    function Wd(dd) {
      const Jd = Pd(dd),
        kd = Zd(dd);
      return Jd - dd > dd - kd ? kd : Jd
    }

    function Pd(dd) {
      return dd--, dd |= dd >> 1, dd |= dd >> 2, dd |= dd >> 4, dd |= dd >> 8, dd |= dd >> 16, ++dd
    }

    function Zd(dd) {
      return dd |= dd >> 1, dd |= dd >> 2, dd |= dd >> 4, dd |= dd >> 8, (dd |= dd >> 16) - (dd >> 1)
    }

    function gd(dd, Jd) {
      let kd;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          kd = Zd(dd);
          break;
        case 2:
          kd = Wd(dd);
          break;
        default:
          kd = Pd(dd)
      }
      return Math.min(kd, Jd)
    }
    kd.d(Jd, {
      b: () => Zd,
      e: () => gd,
      f: () => pd,
      j: () => Nd,
      m: () => Wd
    })
  },
  40066: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Gd,
      g: () => xd,
      h: () => Rd,
      k: () => Id
    });
    var pd, Nd = kd(37280),
      Wd = kd(39840),
      Pd = kd(38812),
      Zd = kd(38806),
      gd = kd(39876),
      Cd = kd(39860),
      Kd = kd(40010),
      od = kd(37277),
      ld = kd(40007),
      Qd = kd(39866),
      Ld = kd(40072),
      Od = kd(38105),
      ed = kd(39902);
    class Rd {
      static get BaseUrl() {
        return ld.g.BaseUrl
      }
      static set BaseUrl(dd) {
        ld.g.BaseUrl = dd
      }
      static get CleanUrl() {
        return ld.g.CleanUrl
      }
      static set CleanUrl(dd) {
        ld.g.CleanUrl = dd
      }
      static IsAbsoluteUrl(dd) {
        return 0 === dd.indexOf("//") || -1 !== dd.indexOf("://") && (-1 !== dd.indexOf(".") && (-1 !== dd.indexOf("/") && (!(dd.indexOf(":") > dd.indexOf("/")) && (dd.indexOf("://") < dd.indexOf(".") || (0 === dd.indexOf("data:") || 0 === dd.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(dd) {
        ld.g.ScriptBaseUrl = dd
      }
      static get ScriptBaseUrl() {
        return ld.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(dd) {
        pd.ScriptBaseUrl = dd, pd.AssetBaseUrl = dd
      }
      static set ScriptPreprocessUrl(dd) {
        ld.g.ScriptPreprocessUrl = dd
      }
      static get ScriptPreprocessUrl() {
        return ld.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return ld.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(dd) {
        ld.g.DefaultRetryStrategy = dd
      }
      static get CorsBehavior() {
        return ld.g.CorsBehavior
      }
      static set CorsBehavior(dd) {
        ld.g.CorsBehavior = dd
      }
      static get UseFallbackTexture() {
        return od.d.UseFallbackTexture
      }
      static set UseFallbackTexture(dd) {
        od.d.UseFallbackTexture = dd
      }
      static get RegisteredExternalClasses() {
        return Ld.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(dd) {
        Ld.e.RegisteredExternalClasses = dd
      }
      static get fallbackTexture() {
        return od.d.FallbackTexture
      }
      static set fallbackTexture(dd) {
        od.d.FallbackTexture = dd
      }
      static FetchToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = 4 * ((Math.abs(dd) * kd % kd | 0) + (Math.abs(Jd) * pd % pd | 0) * kd);
        Wd.r = Nd[Pd] / 255, Wd.g = Nd[Pd + 1] / 255, Wd.b = Nd[Pd + 2] / 255, Wd.a = Nd[Pd + 3] / 255
      }
      static Mix(dd, Jd, kd) {
        return 0
      }
      static Instantiate(dd) {
        return Ld.e.Instantiate(dd)
      }
      static SetImmediate(dd) {
        Qd.d.SetImmediate(dd)
      }
      static IsExponentOfTwo(dd) {
        return !0
      }
      static FloatRound(dd) {
        return Math.fround(dd)
      }
      static GetFilename(dd) {
        const Jd = dd.lastIndexOf("/");
        return Jd < 0 ? dd : dd.substring(Jd + 1)
      }
      static GetFolderPath(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = dd.lastIndexOf("/");
        return kd < 0 ? Jd ? dd : "" : dd.substring(0, kd + 1)
      }
      static ToDegrees(dd) {
        return 180 * dd / Math.PI
      }
      static ToRadians(dd) {
        return dd * Math.PI / 180
      }
      static SmoothAngleChange(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const pd = this.ToRadians(dd),
          Nd = this.ToRadians(Jd);
        return this.ToDegrees(Math.atan2((1 - kd) * Math.sin(Nd) + kd * Math.sin(pd), (1 - kd) * Math.cos(Nd) + kd * Math.cos(pd)))
      }
      static MakeArray(dd, Jd) {
        return !0 === Jd || void 0 !== dd && null != dd ? Array.isArray(dd) ? dd : [dd] : null
      }
      static GetPointerPrefix(dd) {
        return (0, Wd.l)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(dd, Jd) {
        (0, ld.y)(dd, Jd)
      }
      static SetReferrerPolicyBehavior(dd, Jd) {
        Jd.referrerPolicy = dd
      }
      static get PreprocessUrl() {
        return ld.g.PreprocessUrl
      }
      static set PreprocessUrl(dd) {
        ld.g.PreprocessUrl = dd
      }
      static LoadImage(dd, Jd, kd, pd, Nd, Wd) {
        return (0, ld.r)(dd, Jd, kd, pd, Nd, Wd)
      }
      static LoadFile(dd, Jd, kd, pd, Nd, Wd) {
        return (0, ld.n)(dd, Jd, kd, pd, Nd, Wd)
      }
      static async LoadFileAsync(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((kd, pd) => {
          (0, ld.n)(dd, (dd => {
            kd(dd)
          }), void 0, void 0, Jd, ((dd, Jd) => {
            pd(Jd)
          }))
        }))
      }
      static GetAssetUrl(dd) {
        if (!dd) return "";
        if (pd.AssetBaseUrl && dd.startsWith(pd._DefaultAssetsUrl)) {
          const Jd = pd.AssetBaseUrl.endsWith("/") ? pd.AssetBaseUrl.slice(0, -1) : pd.AssetBaseUrl;
          return dd.replace(pd._DefaultAssetsUrl, Jd)
        }
        return dd
      }
      static GetBabylonScriptURL(dd, Jd) {
        if (!dd) return "";
        if (dd.startsWith(pd._DefaultCdnUrl))
          if (pd.ScriptBaseUrl) {
            const Jd = pd.ScriptBaseUrl.endsWith("/") ? pd.ScriptBaseUrl.slice(0, -1) : pd.ScriptBaseUrl;
            dd = dd.replace(pd._DefaultCdnUrl, Jd)
          } else if (pd._CdnVersion) {
          const Jd = `${pd._DefaultCdnUrl}/v${pd._CdnVersion}`;
          dd.startsWith(Jd) || (dd = dd.replace(pd._DefaultCdnUrl, Jd))
        }
        return dd = pd.ScriptPreprocessUrl(dd), Jd && !pd.IsAbsoluteUrl(dd) && (dd = pd.GetAbsoluteUrl(dd)), dd
      }
      static LoadBabylonScript(dd, Jd, kd, Nd) {
        dd = pd.GetBabylonScriptURL(dd), pd.LoadScript(dd, Jd, kd)
      }
      static async LoadBabylonScriptAsync(dd) {
        return dd = pd.GetBabylonScriptURL(dd), await pd.LoadScriptAsync(dd)
      }
      static _LoadScriptNative(dd, Jd, kd, Nd) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const dd = "Loading a script as an ES module is not supported in Babylon Native";
            return void kd?.(dd, new Error(dd))
          }
          pd.LoadFile(dd, (dd => {
            try {
              Function(dd).apply(null), Jd && Jd()
            } catch (pd) {
              kd && kd("LoadScript Error", pd)
            }
          }), void 0, void 0, !1, ((dd, Jd) => {
            kd && kd("LoadScript Error", Jd)
          }))
        }
      }
      static _LoadScriptWeb(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(dd), Jd && Jd()
          } catch (gd) {
            kd?.(`Unable to load script '${dd}' in worker`, gd)
          }
          return
        }
        if (!(0, Wd.l)()) return void kd?.(`Cannot load script '${dd}' outside of a window or a worker`);
        const Pd = document.getElementsByTagName("head")[0],
          Zd = document.createElement("script");
        Nd ? (Zd.setAttribute("type", "module"), Zd.innerText = dd) : (Zd.setAttribute("type", "text/javascript"), Zd.setAttribute("src", dd)), pd && (Zd.id = pd), Zd.onload = () => {
          Jd && Jd()
        }, Zd.onerror = Jd => {
          kd && kd(`Unable to load script '${dd}'`, Jd)
        }, Pd.appendChild(Zd)
      }
      static async LoadScriptAsync(dd, Jd) {
        return await new Promise(((kd, pd) => {
          this.LoadScript(dd, (() => {
            kd()
          }), ((dd, Jd) => {
            pd(Jd || new Error(dd))
          }), Jd)
        }))
      }
      static ReadFileAsDataURL(dd, Jd, kd) {
        const pd = new FileReader,
          Wd = {
            onCompleteObservable: new Nd.e,
            abort: () => pd.abort()
          };
        return pd.onloadend = () => {
          Wd.onCompleteObservable.notifyObservers(Wd)
        }, pd.onload = dd => {
          Jd(dd.target.result)
        }, pd.onprogress = kd, pd.readAsDataURL(dd), Wd
      }
      static ReadFile(dd, Jd, kd, pd, Nd) {
        return (0, ld.s)(dd, Jd, kd, pd, Nd)
      }
      static FileAsURL(dd) {
        const Jd = new Blob([dd]);
        return window.URL.createObjectURL(Jd)
      }
      static Format(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return dd.toFixed(Jd)
      }
      static DeepCopy(dd, Jd, kd, pd) {
        Zd.c.DeepCopy(dd, Jd, kd, pd)
      }
      static IsEmpty(dd) {
        for (const Jd in dd)
          if (Object.prototype.hasOwnProperty.call(dd, Jd)) return !1;
        return !0
      }
      static RegisterTopRootEvents(dd, Jd) {
        for (let pd = 0; pd < Jd.length; pd++) {
          const Nd = Jd[pd];
          dd.addEventListener(Nd.name, Nd.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Nd.name, Nd.handler, !1)
          } catch (kd) {}
        }
      }
      static UnregisterTopRootEvents(dd, Jd) {
        for (let pd = 0; pd < Jd.length; pd++) {
          const Nd = Jd[pd];
          dd.removeEventListener(Nd.name, Nd.handler);
          try {
            dd.parent && dd.parent.removeEventListener(Nd.name, Nd.handler)
          } catch (kd) {}
        }
      }
      static async DumpFramebuffer(dd, Jd, kd, pd) {
        throw (0, Cd.n)("DumpTools")
      }
      static DumpData(dd, Jd, kd, pd) {
        throw (0, Cd.n)("DumpTools")
      }
      static async DumpDataAsync(dd, Jd, kd) {
        throw (0, Cd.n)("DumpTools")
      }
      static _IsOffScreenCanvas(dd) {
        return void 0 !== dd.convertToBlob
      }
      static ToBlob(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Nd = arguments.length > 3 ? arguments[3] : void 0;
        pd._IsOffScreenCanvas(dd) || dd.toBlob || (dd.toBlob = function(dd, Jd, kd) {
          setTimeout((() => {
            const pd = atob(this.toDataURL(Jd, kd).split(",")[1]),
              Nd = pd.length,
              Wd = new Uint8Array(Nd);
            for (let dd = 0; dd < Nd; dd++) Wd[dd] = pd.charCodeAt(dd);
            dd(new Blob([Wd]))
          }))
        }), pd._IsOffScreenCanvas(dd) ? dd.convertToBlob({
          type: kd,
          quality: Nd
        }).then((dd => Jd(dd))) : dd.toBlob((function(dd) {
          Jd(dd)
        }), kd, Nd)
      }
      static DownloadBlob(dd, Jd) {
        if ("download" in document.createElement("a")) {
          if (!Jd) {
            const dd = new Date;
            Jd = "screenshot_" + ((dd.getFullYear() + "-" + (dd.getMonth() + 1)).slice(2) + "-" + dd.getDate() + "_" + dd.getHours() + "-" + ("0" + dd.getMinutes()).slice(-2)) + ".png"
          }
          pd.Download(dd, Jd)
        } else if (dd && "undefined" !== typeof URL) {
          const Jd = URL.createObjectURL(dd),
            kd = window.open("");
          if (!kd) return;
          const pd = kd.document.createElement("img");
          pd.onload = function() {
            URL.revokeObjectURL(Jd)
          }, pd.src = Jd, kd.document.body.appendChild(pd)
        }
      }
      static EncodeScreenshotCanvasData(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Nd = arguments.length > 3 ? arguments[3] : void 0,
          Wd = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Nd && Jd) {
          if (Jd) {
            if (pd._IsOffScreenCanvas(dd)) return void dd.convertToBlob({
              type: kd,
              quality: Wd
            }).then((dd => {
              const kd = new FileReader;
              kd.readAsDataURL(dd), kd.onloadend = () => {
                const dd = kd.result;
                Jd(dd)
              }
            }));
            const Nd = dd.toDataURL(kd, Wd);
            Jd(Nd)
          }
        } else this.ToBlob(dd, (function(dd) {
          dd && pd.DownloadBlob(dd, Nd), Jd && Jd("")
        }), kd, Wd)
      }
      static Download(dd, Jd) {
        if ("undefined" === typeof URL) return;
        const kd = window.URL.createObjectURL(dd),
          pd = document.createElement("a");
        document.body.appendChild(pd), pd.style.display = "none", pd.href = kd, pd.download = Jd, pd.addEventListener("click", (() => {
          pd.parentElement && pd.parentElement.removeChild(pd)
        })), pd.click(), window.URL.revokeObjectURL(kd)
      }
      static BackCompatCameraNoPreventDefault(dd) {
        return "boolean" === typeof dd[0] ? dd[0] : "boolean" === typeof dd[1] && dd[1]
      }
      static CreateScreenshot(dd, Jd, kd, pd) {
        throw (0, Cd.n)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(dd, Jd, kd) {
        throw (0, Cd.n)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(dd, Jd, kd, pd) {
        throw (0, Cd.n)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(dd, Jd, kd) {
        throw (0, Cd.n)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Od.c)()
      }
      static IsBase64(dd) {
        return (0, ld.j)(dd)
      }
      static DecodeBase64(dd) {
        return (0, ld.c)(dd)
      }
      static get errorsCount() {
        return Pd.c.errorsCount
      }
      static Log(dd) {
        Pd.c.Log(dd)
      }
      static Warn(dd) {
        Pd.c.Warn(dd)
      }
      static Error(dd) {
        Pd.c.Error(dd)
      }
      static get LogCache() {
        return Pd.c.LogCache
      }
      static ClearLogCache() {
        Pd.c.ClearLogCache()
      }
      static set LogLevels(dd) {
        Pd.c.LogLevels = dd
      }
      static set PerformanceLogLevel(dd) {
        (dd & pd.PerformanceUserMarkLogLevel) !== pd.PerformanceUserMarkLogLevel ? (dd & pd.PerformanceConsoleLogLevel) !== pd.PerformanceConsoleLogLevel ? (pd.StartPerformanceCounter = pd._StartPerformanceCounterDisabled, pd.EndPerformanceCounter = pd._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), pd.StartPerformanceCounter = pd._StartMarkNative, pd.EndPerformanceCounter = pd._EndMarkNative) : (pd.StartPerformanceCounter = pd._StartPerformanceConsole, pd.EndPerformanceCounter = pd._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), pd.StartPerformanceCounter = pd._StartMarkNative, pd.EndPerformanceCounter = pd._EndMarkNative) : (pd.StartPerformanceCounter = pd._StartUserMark, pd.EndPerformanceCounter = pd._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(dd, Jd) {}
      static _EndPerformanceCounterDisabled(dd, Jd) {}
      static _StartUserMark(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!pd._Performance) {
          if (!(0, Wd.l)()) return;
          pd._Performance = window.performance
        }
        Jd && pd._Performance.mark && pd._Performance.mark(dd + "-Begin")
      }
      static _EndUserMark(dd) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && pd._Performance.mark && (pd._Performance.mark(dd + "-End"), pd._Performance.measure(dd, dd + "-Begin", dd + "-End"))
      }
      static _StartPerformanceConsole(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Jd && (pd._StartUserMark(dd, Jd), console.time && console.time(dd))
      }
      static _EndPerformanceConsole(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Jd && (pd._EndUserMark(dd, Jd), console.timeEnd(dd))
      }
      static _StartMarkNative(dd) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (pd._NativePerformanceCounterHandles.has(dd)) pd.Warn(`Performance counter with name ${dd} is already started.`);
          else {
            const Jd = _native.startPerformanceCounter(dd);
            pd._NativePerformanceCounterHandles.set(dd, Jd)
          }
      }
      static _EndMarkNative(dd) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Jd = pd._NativePerformanceCounterHandles.get(dd);
          Jd ? (_native.endPerformanceCounter(Jd), pd._NativePerformanceCounterHandles.delete(dd)) : pd.Warn(`Performance counter with name ${dd} was not started.`)
        }
      }
      static get Now() {
        return gd.d.Now
      }
      static GetClassName(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = null;
        if (!Jd && dd.getClassName) kd = dd.getClassName();
        else {
          if (dd instanceof Object) {
            kd = (Jd ? dd : Object.getPrototypeOf(dd)).constructor.__bjsclassName__
          }
          kd || (kd = typeof dd)
        }
        return kd
      }
      static First(dd, Jd) {
        for (const kd of dd)
          if (Jd(kd)) return kd;
        return null
      }
      static getFullClassName(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = null,
          pd = null;
        if (!Jd && dd.getClassName) kd = dd.getClassName();
        else {
          if (dd instanceof Object) {
            const Nd = Jd ? dd : Object.getPrototypeOf(dd);
            kd = Nd.constructor.__bjsclassName__, pd = Nd.constructor.__bjsmoduleName__
          }
          kd || (kd = typeof dd)
        }
        return kd ? (null != pd ? pd + "." : "") + kd : null
      }
      static async DelayAsync(dd) {
        await new Promise((Jd => {
          setTimeout((() => {
            Jd()
          }), dd)
        }))
      }
      static IsSafari() {
        return !!(0, Wd.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Id(dd, Jd) {
      return kd => {
        kd.__bjsclassName__ = dd, kd.__bjsmoduleName__ = null != Jd ? Jd : null
      }
    }
    pd = Rd, Rd.AssetBaseUrl = "", Rd.UseCustomRequestHeaders = !1, Rd.CustomRequestHeaders = Kd.b.CustomRequestHeaders, Rd.GetDOMTextContent = Wd.d, Rd._DefaultCdnUrl = "https://cdn.babylonjs.com", Rd._CdnVersion = "9.28.0", Rd._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Rd.LoadScript = "undefined" === typeof _native ? pd._LoadScriptWeb : pd._LoadScriptNative, Rd.GetAbsoluteUrl = "object" === typeof document ? dd => {
      const Jd = document.createElement("a");
      return Jd.href = dd, Jd.href
    } : "function" === typeof URL && "object" === typeof location ? dd => new URL(dd, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Rd.NoneLogLevel = Pd.c.NoneLogLevel, Rd.MessageLogLevel = Pd.c.MessageLogLevel, Rd.WarningLogLevel = Pd.c.WarningLogLevel, Rd.ErrorLogLevel = Pd.c.ErrorLogLevel, Rd.AllLogLevel = Pd.c.AllLogLevel, Rd.IsWindowObjectExist = Wd.l, Rd.PerformanceNoneLogLevel = 0, Rd.PerformanceUserMarkLogLevel = 1, Rd.PerformanceConsoleLogLevel = 2, Rd._NativePerformanceCounterHandles = new Map, Rd.StartPerformanceCounter = pd._StartPerformanceCounterDisabled, Rd.EndPerformanceCounter = pd._EndPerformanceCounterDisabled;
    class Gd {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = dd, this.index = pd - 1, this._done = !1, this._fn = Jd, this._successCallback = kd
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(dd, Jd, kd) {
        const pd = new Gd(dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return pd.executeNext(), pd
      }
      static SyncAsyncForLoop(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Gd.Run(Math.ceil(dd / Jd), (pd => {
          Nd && Nd() ? pd.breakLoop() : setTimeout((() => {
            for (let Wd = 0; Wd < Jd; ++Wd) {
              const Pd = pd.index * Jd + Wd;
              if (Pd >= dd) break;
              if (kd(Pd), Nd && Nd()) {
                pd.breakLoop();
                break
              }
            }
            pd.executeNext()
          }), Wd)
        }), pd)
      }
    }
    let vd = !1;

    function xd() {
      vd || (vd = !0, Rd.Mix = ed.j, Rd.IsExponentOfTwo = ed.f, od.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);