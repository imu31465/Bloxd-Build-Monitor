export const id = 291;
export const ids = [291];
export const modules = {
  42034: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(40262),
      Fd = md(38669);
    class Rd {
      static Instantiate(dd) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[dd]) return this.RegisteredExternalClasses[dd];
        const Od = (0, Fd.c)(dd);
        if (Od) return Od;
        Wd.c.Warn(dd + " not found, you may have missed an import.");
        const md = dd.split(".");
        let Rd = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Wd = 0, Fd = md.length; Wd < Fd; Wd++) Rd = Rd[md[Wd]];
        return "function" !== typeof Rd ? null : Rd
      }
    }
    Rd.RegisteredExternalClasses = {}
  },
  41841: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(41799);
    class Fd {
      static get Now() {
        return (0, Wd.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41859: (dd, Od, md) => {
    function Wd(dd) {
      let Od = 1;
      do {
        Od *= 2
      } while (Od < dd);
      return Od === dd
    }

    function Fd(dd, Od, md) {
      return dd * (1 - md) + Od * md
    }

    function Rd(dd) {
      const Od = Xd(dd),
        md = Kd(dd);
      return Od - dd > dd - md ? md : Od
    }

    function Xd(dd) {
      return dd--, dd |= dd >> 1, dd |= dd >> 2, dd |= dd >> 4, dd |= dd >> 8, dd |= dd >> 16, ++dd
    }

    function Kd(dd) {
      return dd |= dd >> 1, dd |= dd >> 2, dd |= dd >> 4, dd |= dd >> 8, (dd |= dd >> 16) - (dd >> 1)
    }

    function hd(dd, Od) {
      let md;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          md = Kd(dd);
          break;
        case 2:
          md = Rd(dd);
          break;
        default:
          md = Xd(dd)
      }
      return Math.min(md, Od)
    }
    md.d(Od, {
      c: () => Kd,
      f: () => hd,
      i: () => Wd,
      j: () => Fd,
      n: () => Rd
    })
  },
  42029: (dd, Od, md) => {
    md.d(Od, {
      d: () => pd,
      e: () => gd,
      g: () => bd,
      j: () => Td
    });
    var Wd, Fd = md(38660),
      Rd = md(41799),
      Xd = md(40262),
      Kd = md(40260),
      hd = md(41841),
      vd = md(41817),
      Qd = md(41969),
      td = md(38651),
      od = md(41961),
      Nd = md(41831),
      qd = md(42034),
      Hd = md(39461),
      yd = md(41859);
    class bd {
      static get BaseUrl() {
        return od.d.BaseUrl
      }
      static set BaseUrl(dd) {
        od.d.BaseUrl = dd
      }
      static get CleanUrl() {
        return od.d.CleanUrl
      }
      static set CleanUrl(dd) {
        od.d.CleanUrl = dd
      }
      static IsAbsoluteUrl(dd) {
        return 0 === dd.indexOf("//") || -1 !== dd.indexOf("://") && (-1 !== dd.indexOf(".") && (-1 !== dd.indexOf("/") && (!(dd.indexOf(":") > dd.indexOf("/")) && (dd.indexOf("://") < dd.indexOf(".") || (0 === dd.indexOf("data:") || 0 === dd.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(dd) {
        od.d.ScriptBaseUrl = dd
      }
      static get ScriptBaseUrl() {
        return od.d.ScriptBaseUrl
      }
      static set CDNBaseUrl(dd) {
        Wd.ScriptBaseUrl = dd, Wd.AssetBaseUrl = dd
      }
      static set ScriptPreprocessUrl(dd) {
        od.d.ScriptPreprocessUrl = dd
      }
      static get ScriptPreprocessUrl() {
        return od.d.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return od.d.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(dd) {
        od.d.DefaultRetryStrategy = dd
      }
      static get CorsBehavior() {
        return od.d.CorsBehavior
      }
      static set CorsBehavior(dd) {
        od.d.CorsBehavior = dd
      }
      static get UseFallbackTexture() {
        return td.e.UseFallbackTexture
      }
      static set UseFallbackTexture(dd) {
        td.e.UseFallbackTexture = dd
      }
      static get RegisteredExternalClasses() {
        return qd.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(dd) {
        qd.c.RegisteredExternalClasses = dd
      }
      static get fallbackTexture() {
        return td.e.FallbackTexture
      }
      static set fallbackTexture(dd) {
        td.e.FallbackTexture = dd
      }
      static FetchToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = 4 * ((Math.abs(dd) * md % md | 0) + (Math.abs(Od) * Wd % Wd | 0) * md);
        Rd.r = Fd[Xd] / 255, Rd.g = Fd[Xd + 1] / 255, Rd.b = Fd[Xd + 2] / 255, Rd.a = Fd[Xd + 3] / 255
      }
      static Mix(dd, Od, md) {
        return 0
      }
      static Instantiate(dd) {
        return qd.c.Instantiate(dd)
      }
      static SetImmediate(dd) {
        Nd.c.SetImmediate(dd)
      }
      static IsExponentOfTwo(dd) {
        return !0
      }
      static FloatRound(dd) {
        return Math.fround(dd)
      }
      static GetFilename(dd) {
        const Od = dd.lastIndexOf("/");
        return Od < 0 ? dd : dd.substring(Od + 1)
      }
      static GetFolderPath(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = dd.lastIndexOf("/");
        return md < 0 ? Od ? dd : "" : dd.substring(0, md + 1)
      }
      static ToDegrees(dd) {
        return 180 * dd / Math.PI
      }
      static ToRadians(dd) {
        return dd * Math.PI / 180
      }
      static SmoothAngleChange(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Wd = this.ToRadians(dd),
          Fd = this.ToRadians(Od);
        return this.ToDegrees(Math.atan2((1 - md) * Math.sin(Fd) + md * Math.sin(Wd), (1 - md) * Math.cos(Fd) + md * Math.cos(Wd)))
      }
      static MakeArray(dd, Od) {
        return !0 === Od || void 0 !== dd && null != dd ? Array.isArray(dd) ? dd : [dd] : null
      }
      static GetPointerPrefix(dd) {
        return (0, Rd.h)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(dd, Od) {
        (0, od.o)(dd, Od)
      }
      static SetReferrerPolicyBehavior(dd, Od) {
        Od.referrerPolicy = dd
      }
      static get PreprocessUrl() {
        return od.d.PreprocessUrl
      }
      static set PreprocessUrl(dd) {
        od.d.PreprocessUrl = dd
      }
      static LoadImage(dd, Od, md, Wd, Fd, Rd) {
        return (0, od.h)(dd, Od, md, Wd, Fd, Rd)
      }
      static LoadFile(dd, Od, md, Wd, Fd, Rd) {
        return (0, od.g)(dd, Od, md, Wd, Fd, Rd)
      }
      static async LoadFileAsync(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((md, Wd) => {
          (0, od.g)(dd, (dd => {
            md(dd)
          }), void 0, void 0, Od, ((dd, Od) => {
            Wd(Od)
          }))
        }))
      }
      static GetAssetUrl(dd) {
        if (!dd) return "";
        if (Wd.AssetBaseUrl && dd.startsWith(Wd._DefaultAssetsUrl)) {
          const Od = Wd.AssetBaseUrl.endsWith("/") ? Wd.AssetBaseUrl.slice(0, -1) : Wd.AssetBaseUrl;
          return dd.replace(Wd._DefaultAssetsUrl, Od)
        }
        return dd
      }
      static GetBabylonScriptURL(dd, Od) {
        if (!dd) return "";
        if (dd.startsWith(Wd._DefaultCdnUrl))
          if (Wd.ScriptBaseUrl) {
            const Od = Wd.ScriptBaseUrl.endsWith("/") ? Wd.ScriptBaseUrl.slice(0, -1) : Wd.ScriptBaseUrl;
            dd = dd.replace(Wd._DefaultCdnUrl, Od)
          } else if (Wd._CdnVersion) {
          const Od = `${Wd._DefaultCdnUrl}/v${Wd._CdnVersion}`;
          dd.startsWith(Od) || (dd = dd.replace(Wd._DefaultCdnUrl, Od))
        }
        return dd = Wd.ScriptPreprocessUrl(dd), Od && !Wd.IsAbsoluteUrl(dd) && (dd = Wd.GetAbsoluteUrl(dd)), dd
      }
      static LoadBabylonScript(dd, Od, md, Fd) {
        dd = Wd.GetBabylonScriptURL(dd), Wd.LoadScript(dd, Od, md)
      }
      static async LoadBabylonScriptAsync(dd) {
        return dd = Wd.GetBabylonScriptURL(dd), await Wd.LoadScriptAsync(dd)
      }
      static _LoadScriptNative(dd, Od, md, Fd) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const dd = "Loading a script as an ES module is not supported in Babylon Native";
            return void md?.(dd, new Error(dd))
          }
          Wd.LoadFile(dd, (dd => {
            try {
              Function(dd).apply(null), Od && Od()
            } catch (Wd) {
              md && md("LoadScript Error", Wd)
            }
          }), void 0, void 0, !1, ((dd, Od) => {
            md && md("LoadScript Error", Od)
          }))
        }
      }
      static _LoadScriptWeb(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(dd), Od && Od()
          } catch (hd) {
            md?.(`Unable to load script '${dd}' in worker`, hd)
          }
          return
        }
        if (!(0, Rd.h)()) return void md?.(`Cannot load script '${dd}' outside of a window or a worker`);
        const Xd = document.getElementsByTagName("head")[0],
          Kd = document.createElement("script");
        Fd ? (Kd.setAttribute("type", "module"), Kd.innerText = dd) : (Kd.setAttribute("type", "text/javascript"), Kd.setAttribute("src", dd)), Wd && (Kd.id = Wd), Kd.onload = () => {
          Od && Od()
        }, Kd.onerror = Od => {
          md && md(`Unable to load script '${dd}'`, Od)
        }, Xd.appendChild(Kd)
      }
      static async LoadScriptAsync(dd, Od) {
        return await new Promise(((md, Wd) => {
          this.LoadScript(dd, (() => {
            md()
          }), ((dd, Od) => {
            Wd(Od || new Error(dd))
          }), Od)
        }))
      }
      static ReadFileAsDataURL(dd, Od, md) {
        const Wd = new FileReader,
          Rd = {
            onCompleteObservable: new Fd.c,
            abort: () => Wd.abort()
          };
        return Wd.onloadend = () => {
          Rd.onCompleteObservable.notifyObservers(Rd)
        }, Wd.onload = dd => {
          Od(dd.target.result)
        }, Wd.onprogress = md, Wd.readAsDataURL(dd), Rd
      }
      static ReadFile(dd, Od, md, Wd, Fd) {
        return (0, od.i)(dd, Od, md, Wd, Fd)
      }
      static FileAsURL(dd) {
        const Od = new Blob([dd]);
        return window.URL.createObjectURL(Od)
      }
      static Format(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return dd.toFixed(Od)
      }
      static DeepCopy(dd, Od, md, Wd) {
        Kd.d.DeepCopy(dd, Od, md, Wd)
      }
      static IsEmpty(dd) {
        for (const Od in dd)
          if (Object.prototype.hasOwnProperty.call(dd, Od)) return !1;
        return !0
      }
      static RegisterTopRootEvents(dd, Od) {
        for (let Wd = 0; Wd < Od.length; Wd++) {
          const Fd = Od[Wd];
          dd.addEventListener(Fd.name, Fd.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Fd.name, Fd.handler, !1)
          } catch (md) {}
        }
      }
      static UnregisterTopRootEvents(dd, Od) {
        for (let Wd = 0; Wd < Od.length; Wd++) {
          const Fd = Od[Wd];
          dd.removeEventListener(Fd.name, Fd.handler);
          try {
            dd.parent && dd.parent.removeEventListener(Fd.name, Fd.handler)
          } catch (md) {}
        }
      }
      static async DumpFramebuffer(dd, Od, md, Wd) {
        throw (0, vd.m)("DumpTools")
      }
      static DumpData(dd, Od, md, Wd) {
        throw (0, vd.m)("DumpTools")
      }
      static async DumpDataAsync(dd, Od, md) {
        throw (0, vd.m)("DumpTools")
      }
      static _IsOffScreenCanvas(dd) {
        return void 0 !== dd.convertToBlob
      }
      static ToBlob(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Fd = arguments.length > 3 ? arguments[3] : void 0;
        Wd._IsOffScreenCanvas(dd) || dd.toBlob || (dd.toBlob = function(dd, Od, md) {
          setTimeout((() => {
            const Wd = atob(this.toDataURL(Od, md).split(",")[1]),
              Fd = Wd.length,
              Rd = new Uint8Array(Fd);
            for (let dd = 0; dd < Fd; dd++) Rd[dd] = Wd.charCodeAt(dd);
            dd(new Blob([Rd]))
          }))
        }), Wd._IsOffScreenCanvas(dd) ? dd.convertToBlob({
          type: md,
          quality: Fd
        }).then((dd => Od(dd))) : dd.toBlob((function(dd) {
          Od(dd)
        }), md, Fd)
      }
      static DownloadBlob(dd, Od) {
        if ("download" in document.createElement("a")) {
          if (!Od) {
            const dd = new Date;
            Od = "screenshot_" + ((dd.getFullYear() + "-" + (dd.getMonth() + 1)).slice(2) + "-" + dd.getDate() + "_" + dd.getHours() + "-" + ("0" + dd.getMinutes()).slice(-2)) + ".png"
          }
          Wd.Download(dd, Od)
        } else if (dd && "undefined" !== typeof URL) {
          const Od = URL.createObjectURL(dd),
            md = window.open("");
          if (!md) return;
          const Wd = md.document.createElement("img");
          Wd.onload = function() {
            URL.revokeObjectURL(Od)
          }, Wd.src = Od, md.document.body.appendChild(Wd)
        }
      }
      static EncodeScreenshotCanvasData(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Fd = arguments.length > 3 ? arguments[3] : void 0,
          Rd = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Fd && Od) {
          if (Od) {
            if (Wd._IsOffScreenCanvas(dd)) return void dd.convertToBlob({
              type: md,
              quality: Rd
            }).then((dd => {
              const md = new FileReader;
              md.readAsDataURL(dd), md.onloadend = () => {
                const dd = md.result;
                Od(dd)
              }
            }));
            const Fd = dd.toDataURL(md, Rd);
            Od(Fd)
          }
        } else this.ToBlob(dd, (function(dd) {
          dd && Wd.DownloadBlob(dd, Fd), Od && Od("")
        }), md, Rd)
      }
      static Download(dd, Od) {
        if ("undefined" === typeof URL) return;
        const md = window.URL.createObjectURL(dd),
          Wd = document.createElement("a");
        document.body.appendChild(Wd), Wd.style.display = "none", Wd.href = md, Wd.download = Od, Wd.addEventListener("click", (() => {
          Wd.parentElement && Wd.parentElement.removeChild(Wd)
        })), Wd.click(), window.URL.revokeObjectURL(md)
      }
      static BackCompatCameraNoPreventDefault(dd) {
        return "boolean" === typeof dd[0] ? dd[0] : "boolean" === typeof dd[1] && dd[1]
      }
      static CreateScreenshot(dd, Od, md, Wd) {
        throw (0, vd.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(dd, Od, md) {
        throw (0, vd.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(dd, Od, md, Wd) {
        throw (0, vd.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(dd, Od, md) {
        throw (0, vd.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Hd.b)()
      }
      static IsBase64(dd) {
        return (0, od.f)(dd)
      }
      static DecodeBase64(dd) {
        return (0, od.c)(dd)
      }
      static get errorsCount() {
        return Xd.c.errorsCount
      }
      static Log(dd) {
        Xd.c.Log(dd)
      }
      static Warn(dd) {
        Xd.c.Warn(dd)
      }
      static Error(dd) {
        Xd.c.Error(dd)
      }
      static get LogCache() {
        return Xd.c.LogCache
      }
      static ClearLogCache() {
        Xd.c.ClearLogCache()
      }
      static set LogLevels(dd) {
        Xd.c.LogLevels = dd
      }
      static set PerformanceLogLevel(dd) {
        (dd & Wd.PerformanceUserMarkLogLevel) !== Wd.PerformanceUserMarkLogLevel ? (dd & Wd.PerformanceConsoleLogLevel) !== Wd.PerformanceConsoleLogLevel ? (Wd.StartPerformanceCounter = Wd._StartPerformanceCounterDisabled, Wd.EndPerformanceCounter = Wd._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Wd.StartPerformanceCounter = Wd._StartMarkNative, Wd.EndPerformanceCounter = Wd._EndMarkNative) : (Wd.StartPerformanceCounter = Wd._StartPerformanceConsole, Wd.EndPerformanceCounter = Wd._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Wd.StartPerformanceCounter = Wd._StartMarkNative, Wd.EndPerformanceCounter = Wd._EndMarkNative) : (Wd.StartPerformanceCounter = Wd._StartUserMark, Wd.EndPerformanceCounter = Wd._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(dd, Od) {}
      static _EndPerformanceCounterDisabled(dd, Od) {}
      static _StartUserMark(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Wd._Performance) {
          if (!(0, Rd.h)()) return;
          Wd._Performance = window.performance
        }
        Od && Wd._Performance.mark && Wd._Performance.mark(dd + "-Begin")
      }
      static _EndUserMark(dd) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Wd._Performance.mark && (Wd._Performance.mark(dd + "-End"), Wd._Performance.measure(dd, dd + "-Begin", dd + "-End"))
      }
      static _StartPerformanceConsole(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Od && (Wd._StartUserMark(dd, Od), console.time && console.time(dd))
      }
      static _EndPerformanceConsole(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Od && (Wd._EndUserMark(dd, Od), console.timeEnd(dd))
      }
      static _StartMarkNative(dd) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Wd._NativePerformanceCounterHandles.has(dd)) Wd.Warn(`Performance counter with name ${dd} is already started.`);
          else {
            const Od = _native.startPerformanceCounter(dd);
            Wd._NativePerformanceCounterHandles.set(dd, Od)
          }
      }
      static _EndMarkNative(dd) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Od = Wd._NativePerformanceCounterHandles.get(dd);
          Od ? (_native.endPerformanceCounter(Od), Wd._NativePerformanceCounterHandles.delete(dd)) : Wd.Warn(`Performance counter with name ${dd} was not started.`)
        }
      }
      static get Now() {
        return hd.d.Now
      }
      static GetClassName(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = null;
        if (!Od && dd.getClassName) md = dd.getClassName();
        else {
          if (dd instanceof Object) {
            md = (Od ? dd : Object.getPrototypeOf(dd)).constructor.__bjsclassName__
          }
          md || (md = typeof dd)
        }
        return md
      }
      static First(dd, Od) {
        for (const md of dd)
          if (Od(md)) return md;
        return null
      }
      static getFullClassName(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = null,
          Wd = null;
        if (!Od && dd.getClassName) md = dd.getClassName();
        else {
          if (dd instanceof Object) {
            const Fd = Od ? dd : Object.getPrototypeOf(dd);
            md = Fd.constructor.__bjsclassName__, Wd = Fd.constructor.__bjsmoduleName__
          }
          md || (md = typeof dd)
        }
        return md ? (null != Wd ? Wd + "." : "") + md : null
      }
      static async DelayAsync(dd) {
        await new Promise((Od => {
          setTimeout((() => {
            Od()
          }), dd)
        }))
      }
      static IsSafari() {
        return !!(0, Rd.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Td(dd, Od) {
      return md => {
        md.__bjsclassName__ = dd, md.__bjsmoduleName__ = null != Od ? Od : null
      }
    }
    Wd = bd, bd.AssetBaseUrl = "", bd.UseCustomRequestHeaders = !1, bd.CustomRequestHeaders = Qd.e.CustomRequestHeaders, bd.GetDOMTextContent = Rd.b, bd._DefaultCdnUrl = "https://cdn.babylonjs.com", bd._CdnVersion = "9.28.0", bd._DefaultAssetsUrl = "https://assets.babylonjs.com/core", bd.LoadScript = "undefined" === typeof _native ? Wd._LoadScriptWeb : Wd._LoadScriptNative, bd.GetAbsoluteUrl = "object" === typeof document ? dd => {
      const Od = document.createElement("a");
      return Od.href = dd, Od.href
    } : "function" === typeof URL && "object" === typeof location ? dd => new URL(dd, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, bd.NoneLogLevel = Xd.c.NoneLogLevel, bd.MessageLogLevel = Xd.c.MessageLogLevel, bd.WarningLogLevel = Xd.c.WarningLogLevel, bd.ErrorLogLevel = Xd.c.ErrorLogLevel, bd.AllLogLevel = Xd.c.AllLogLevel, bd.IsWindowObjectExist = Rd.h, bd.PerformanceNoneLogLevel = 0, bd.PerformanceUserMarkLogLevel = 1, bd.PerformanceConsoleLogLevel = 2, bd._NativePerformanceCounterHandles = new Map, bd.StartPerformanceCounter = Wd._StartPerformanceCounterDisabled, bd.EndPerformanceCounter = Wd._EndPerformanceCounterDisabled;
    class pd {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = dd, this.index = Wd - 1, this._done = !1, this._fn = Od, this._successCallback = md
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(dd, Od, md) {
        const Wd = new pd(dd, Od, md, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Wd.executeNext(), Wd
      }
      static SyncAsyncForLoop(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return pd.Run(Math.ceil(dd / Od), (Wd => {
          Fd && Fd() ? Wd.breakLoop() : setTimeout((() => {
            for (let Rd = 0; Rd < Od; ++Rd) {
              const Xd = Wd.index * Od + Rd;
              if (Xd >= dd) break;
              if (md(Xd), Fd && Fd()) {
                Wd.breakLoop();
                break
              }
            }
            Wd.executeNext()
          }), Rd)
        }), Wd)
      }
    }
    let Yd = !1;

    function gd() {
      Yd || (Yd = !0, bd.Mix = yd.j, bd.IsExponentOfTwo = yd.i, td.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);