export const id = 284;
export const ids = [284];
export const modules = {
  41103: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(39366),
      DB = GB(37823);
    class QB {
      static Instantiate(BB) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[BB]) return this.RegisteredExternalClasses[BB];
        const OB = (0, DB.c)(BB);
        if (OB) return OB;
        YB.b.Warn(BB + " not found, you may have missed an import.");
        const GB = BB.split(".");
        let QB = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let YB = 0, DB = GB.length; YB < DB; YB++) QB = QB[GB[YB]];
        return "function" !== typeof QB ? null : QB
      }
    }
    QB.RegisteredExternalClasses = {}
  },
  40911: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(40870);
    class DB {
      static get Now() {
        return (0, YB.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40932: (BB, OB, GB) => {
    function YB(BB) {
      let OB = 1;
      do {
        OB *= 2
      } while (OB < BB);
      return OB === BB
    }

    function DB(BB, OB, GB) {
      return BB * (1 - GB) + OB * GB
    }

    function QB(BB) {
      const OB = oB(BB),
        GB = jB(BB);
      return OB - BB > BB - GB ? GB : OB
    }

    function oB(BB) {
      return BB--, BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, BB |= BB >> 16, ++BB
    }

    function jB(BB) {
      return BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, (BB |= BB >> 16) - (BB >> 1)
    }

    function yB(BB, OB) {
      let GB;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          GB = jB(BB);
          break;
        case 2:
          GB = QB(BB);
          break;
        default:
          GB = oB(BB)
      }
      return Math.min(GB, OB)
    }
    GB.d(OB, {
      b: () => jB,
      f: () => yB,
      h: () => YB,
      k: () => DB,
      m: () => QB
    })
  },
  41097: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => WB,
      f: () => VB,
      j: () => NB,
      k: () => RB
    });
    var YB, DB = GB(37802),
      QB = GB(40870),
      oB = GB(39366),
      jB = GB(39358),
      yB = GB(40911),
      JB = GB(40890),
      MB = GB(41041),
      PB = GB(37796),
      zB = GB(41035),
      lB = GB(40899),
      pB = GB(41103),
      qB = GB(38589),
      ZB = GB(40932);
    class NB {
      static get BaseUrl() {
        return zB.e.BaseUrl
      }
      static set BaseUrl(BB) {
        zB.e.BaseUrl = BB
      }
      static get CleanUrl() {
        return zB.e.CleanUrl
      }
      static set CleanUrl(BB) {
        zB.e.CleanUrl = BB
      }
      static IsAbsoluteUrl(BB) {
        return 0 === BB.indexOf("//") || -1 !== BB.indexOf("://") && (-1 !== BB.indexOf(".") && (-1 !== BB.indexOf("/") && (!(BB.indexOf(":") > BB.indexOf("/")) && (BB.indexOf("://") < BB.indexOf(".") || (0 === BB.indexOf("data:") || 0 === BB.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(BB) {
        zB.e.ScriptBaseUrl = BB
      }
      static get ScriptBaseUrl() {
        return zB.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(BB) {
        YB.ScriptBaseUrl = BB, YB.AssetBaseUrl = BB
      }
      static set ScriptPreprocessUrl(BB) {
        zB.e.ScriptPreprocessUrl = BB
      }
      static get ScriptPreprocessUrl() {
        return zB.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return zB.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(BB) {
        zB.e.DefaultRetryStrategy = BB
      }
      static get CorsBehavior() {
        return zB.e.CorsBehavior
      }
      static set CorsBehavior(BB) {
        zB.e.CorsBehavior = BB
      }
      static get UseFallbackTexture() {
        return PB.b.UseFallbackTexture
      }
      static set UseFallbackTexture(BB) {
        PB.b.UseFallbackTexture = BB
      }
      static get RegisteredExternalClasses() {
        return pB.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(BB) {
        pB.d.RegisteredExternalClasses = BB
      }
      static get fallbackTexture() {
        return PB.b.FallbackTexture
      }
      static set fallbackTexture(BB) {
        PB.b.FallbackTexture = BB
      }
      static FetchToRef(BB, OB, GB, YB, DB, QB) {
        const oB = 4 * ((Math.abs(BB) * GB % GB | 0) + (Math.abs(OB) * YB % YB | 0) * GB);
        QB.r = DB[oB] / 255, QB.g = DB[oB + 1] / 255, QB.b = DB[oB + 2] / 255, QB.a = DB[oB + 3] / 255
      }
      static Mix(BB, OB, GB) {
        return 0
      }
      static Instantiate(BB) {
        return pB.d.Instantiate(BB)
      }
      static SetImmediate(BB) {
        lB.c.SetImmediate(BB)
      }
      static IsExponentOfTwo(BB) {
        return !0
      }
      static FloatRound(BB) {
        return Math.fround(BB)
      }
      static GetFilename(BB) {
        const OB = BB.lastIndexOf("/");
        return OB < 0 ? BB : BB.substring(OB + 1)
      }
      static GetFolderPath(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = BB.lastIndexOf("/");
        return GB < 0 ? OB ? BB : "" : BB.substring(0, GB + 1)
      }
      static ToDegrees(BB) {
        return 180 * BB / Math.PI
      }
      static ToRadians(BB) {
        return BB * Math.PI / 180
      }
      static SmoothAngleChange(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const YB = this.ToRadians(BB),
          DB = this.ToRadians(OB);
        return this.ToDegrees(Math.atan2((1 - GB) * Math.sin(DB) + GB * Math.sin(YB), (1 - GB) * Math.cos(DB) + GB * Math.cos(YB)))
      }
      static MakeArray(BB, OB) {
        return !0 === OB || void 0 !== BB && null != BB ? Array.isArray(BB) ? BB : [BB] : null
      }
      static GetPointerPrefix(BB) {
        return (0, QB.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(BB, OB) {
        (0, zB.s)(BB, OB)
      }
      static SetReferrerPolicyBehavior(BB, OB) {
        OB.referrerPolicy = BB
      }
      static get PreprocessUrl() {
        return zB.e.PreprocessUrl
      }
      static set PreprocessUrl(BB) {
        zB.e.PreprocessUrl = BB
      }
      static LoadImage(BB, OB, GB, YB, DB, QB) {
        return (0, zB.n)(BB, OB, GB, YB, DB, QB)
      }
      static LoadFile(BB, OB, GB, YB, DB, QB) {
        return (0, zB.m)(BB, OB, GB, YB, DB, QB)
      }
      static async LoadFileAsync(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((GB, YB) => {
          (0, zB.m)(BB, (BB => {
            GB(BB)
          }), void 0, void 0, OB, ((BB, OB) => {
            YB(OB)
          }))
        }))
      }
      static GetAssetUrl(BB) {
        if (!BB) return "";
        if (YB.AssetBaseUrl && BB.startsWith(YB._DefaultAssetsUrl)) {
          const OB = YB.AssetBaseUrl.endsWith("/") ? YB.AssetBaseUrl.slice(0, -1) : YB.AssetBaseUrl;
          return BB.replace(YB._DefaultAssetsUrl, OB)
        }
        return BB
      }
      static GetBabylonScriptURL(BB, OB) {
        if (!BB) return "";
        if (BB.startsWith(YB._DefaultCdnUrl))
          if (YB.ScriptBaseUrl) {
            const OB = YB.ScriptBaseUrl.endsWith("/") ? YB.ScriptBaseUrl.slice(0, -1) : YB.ScriptBaseUrl;
            BB = BB.replace(YB._DefaultCdnUrl, OB)
          } else if (YB._CdnVersion) {
          const OB = `${YB._DefaultCdnUrl}/v${YB._CdnVersion}`;
          BB.startsWith(OB) || (BB = BB.replace(YB._DefaultCdnUrl, OB))
        }
        return BB = YB.ScriptPreprocessUrl(BB), OB && !YB.IsAbsoluteUrl(BB) && (BB = YB.GetAbsoluteUrl(BB)), BB
      }
      static LoadBabylonScript(BB, OB, GB, DB) {
        BB = YB.GetBabylonScriptURL(BB), YB.LoadScript(BB, OB, GB)
      }
      static async LoadBabylonScriptAsync(BB) {
        return BB = YB.GetBabylonScriptURL(BB), await YB.LoadScriptAsync(BB)
      }
      static _LoadScriptNative(BB, OB, GB, DB) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const BB = "Loading a script as an ES module is not supported in Babylon Native";
            return void GB?.(BB, new Error(BB))
          }
          YB.LoadFile(BB, (BB => {
            try {
              Function(BB).apply(null), OB && OB()
            } catch (YB) {
              GB && GB("LoadScript Error", YB)
            }
          }), void 0, void 0, !1, ((BB, OB) => {
            GB && GB("LoadScript Error", OB)
          }))
        }
      }
      static _LoadScriptWeb(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(BB), OB && OB()
          } catch (yB) {
            GB?.(`Unable to load script '${BB}' in worker`, yB)
          }
          return
        }
        if (!(0, QB.j)()) return void GB?.(`Cannot load script '${BB}' outside of a window or a worker`);
        const oB = document.getElementsByTagName("head")[0],
          jB = document.createElement("script");
        DB ? (jB.setAttribute("type", "module"), jB.innerText = BB) : (jB.setAttribute("type", "text/javascript"), jB.setAttribute("src", BB)), YB && (jB.id = YB), jB.onload = () => {
          OB && OB()
        }, jB.onerror = OB => {
          GB && GB(`Unable to load script '${BB}'`, OB)
        }, oB.appendChild(jB)
      }
      static async LoadScriptAsync(BB, OB) {
        return await new Promise(((GB, YB) => {
          this.LoadScript(BB, (() => {
            GB()
          }), ((BB, OB) => {
            YB(OB || new Error(BB))
          }), OB)
        }))
      }
      static ReadFileAsDataURL(BB, OB, GB) {
        const YB = new FileReader,
          QB = {
            onCompleteObservable: new DB.b,
            abort: () => YB.abort()
          };
        return YB.onloadend = () => {
          QB.onCompleteObservable.notifyObservers(QB)
        }, YB.onload = BB => {
          OB(BB.target.result)
        }, YB.onprogress = GB, YB.readAsDataURL(BB), QB
      }
      static ReadFile(BB, OB, GB, YB, DB) {
        return (0, zB.o)(BB, OB, GB, YB, DB)
      }
      static FileAsURL(BB) {
        const OB = new Blob([BB]);
        return window.URL.createObjectURL(OB)
      }
      static Format(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return BB.toFixed(OB)
      }
      static DeepCopy(BB, OB, GB, YB) {
        jB.b.DeepCopy(BB, OB, GB, YB)
      }
      static IsEmpty(BB) {
        for (const OB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, OB)) return !1;
        return !0
      }
      static RegisterTopRootEvents(BB, OB) {
        for (let YB = 0; YB < OB.length; YB++) {
          const DB = OB[YB];
          BB.addEventListener(DB.name, DB.handler, !1);
          try {
            window.parent && window.parent.addEventListener(DB.name, DB.handler, !1)
          } catch (GB) {}
        }
      }
      static UnregisterTopRootEvents(BB, OB) {
        for (let YB = 0; YB < OB.length; YB++) {
          const DB = OB[YB];
          BB.removeEventListener(DB.name, DB.handler);
          try {
            BB.parent && BB.parent.removeEventListener(DB.name, DB.handler)
          } catch (GB) {}
        }
      }
      static async DumpFramebuffer(BB, OB, GB, YB) {
        throw (0, JB.j)("DumpTools")
      }
      static DumpData(BB, OB, GB, YB) {
        throw (0, JB.j)("DumpTools")
      }
      static async DumpDataAsync(BB, OB, GB) {
        throw (0, JB.j)("DumpTools")
      }
      static _IsOffScreenCanvas(BB) {
        return void 0 !== BB.convertToBlob
      }
      static ToBlob(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          DB = arguments.length > 3 ? arguments[3] : void 0;
        YB._IsOffScreenCanvas(BB) || BB.toBlob || (BB.toBlob = function(BB, OB, GB) {
          setTimeout((() => {
            const YB = atob(this.toDataURL(OB, GB).split(",")[1]),
              DB = YB.length,
              QB = new Uint8Array(DB);
            for (let BB = 0; BB < DB; BB++) QB[BB] = YB.charCodeAt(BB);
            BB(new Blob([QB]))
          }))
        }), YB._IsOffScreenCanvas(BB) ? BB.convertToBlob({
          type: GB,
          quality: DB
        }).then((BB => OB(BB))) : BB.toBlob((function(BB) {
          OB(BB)
        }), GB, DB)
      }
      static DownloadBlob(BB, OB) {
        if ("download" in document.createElement("a")) {
          if (!OB) {
            const BB = new Date;
            OB = "screenshot_" + ((BB.getFullYear() + "-" + (BB.getMonth() + 1)).slice(2) + "-" + BB.getDate() + "_" + BB.getHours() + "-" + ("0" + BB.getMinutes()).slice(-2)) + ".png"
          }
          YB.Download(BB, OB)
        } else if (BB && "undefined" !== typeof URL) {
          const OB = URL.createObjectURL(BB),
            GB = window.open("");
          if (!GB) return;
          const YB = GB.document.createElement("img");
          YB.onload = function() {
            URL.revokeObjectURL(OB)
          }, YB.src = OB, GB.document.body.appendChild(YB)
        }
      }
      static EncodeScreenshotCanvasData(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          DB = arguments.length > 3 ? arguments[3] : void 0,
          QB = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof DB && OB) {
          if (OB) {
            if (YB._IsOffScreenCanvas(BB)) return void BB.convertToBlob({
              type: GB,
              quality: QB
            }).then((BB => {
              const GB = new FileReader;
              GB.readAsDataURL(BB), GB.onloadend = () => {
                const BB = GB.result;
                OB(BB)
              }
            }));
            const DB = BB.toDataURL(GB, QB);
            OB(DB)
          }
        } else this.ToBlob(BB, (function(BB) {
          BB && YB.DownloadBlob(BB, DB), OB && OB("")
        }), GB, QB)
      }
      static Download(BB, OB) {
        if ("undefined" === typeof URL) return;
        const GB = window.URL.createObjectURL(BB),
          YB = document.createElement("a");
        document.body.appendChild(YB), YB.style.display = "none", YB.href = GB, YB.download = OB, YB.addEventListener("click", (() => {
          YB.parentElement && YB.parentElement.removeChild(YB)
        })), YB.click(), window.URL.revokeObjectURL(GB)
      }
      static BackCompatCameraNoPreventDefault(BB) {
        return "boolean" === typeof BB[0] ? BB[0] : "boolean" === typeof BB[1] && BB[1]
      }
      static CreateScreenshot(BB, OB, GB, YB) {
        throw (0, JB.j)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(BB, OB, GB) {
        throw (0, JB.j)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(BB, OB, GB, YB) {
        throw (0, JB.j)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(BB, OB, GB) {
        throw (0, JB.j)("ScreenshotTools")
      }
      static RandomId() {
        return (0, qB.e)()
      }
      static IsBase64(BB) {
        return (0, zB.j)(BB)
      }
      static DecodeBase64(BB) {
        return (0, zB.c)(BB)
      }
      static get errorsCount() {
        return oB.b.errorsCount
      }
      static Log(BB) {
        oB.b.Log(BB)
      }
      static Warn(BB) {
        oB.b.Warn(BB)
      }
      static Error(BB) {
        oB.b.Error(BB)
      }
      static get LogCache() {
        return oB.b.LogCache
      }
      static ClearLogCache() {
        oB.b.ClearLogCache()
      }
      static set LogLevels(BB) {
        oB.b.LogLevels = BB
      }
      static set PerformanceLogLevel(BB) {
        (BB & YB.PerformanceUserMarkLogLevel) !== YB.PerformanceUserMarkLogLevel ? (BB & YB.PerformanceConsoleLogLevel) !== YB.PerformanceConsoleLogLevel ? (YB.StartPerformanceCounter = YB._StartPerformanceCounterDisabled, YB.EndPerformanceCounter = YB._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), YB.StartPerformanceCounter = YB._StartMarkNative, YB.EndPerformanceCounter = YB._EndMarkNative) : (YB.StartPerformanceCounter = YB._StartPerformanceConsole, YB.EndPerformanceCounter = YB._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), YB.StartPerformanceCounter = YB._StartMarkNative, YB.EndPerformanceCounter = YB._EndMarkNative) : (YB.StartPerformanceCounter = YB._StartUserMark, YB.EndPerformanceCounter = YB._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(BB, OB) {}
      static _EndPerformanceCounterDisabled(BB, OB) {}
      static _StartUserMark(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!YB._Performance) {
          if (!(0, QB.j)()) return;
          YB._Performance = window.performance
        }
        OB && YB._Performance.mark && YB._Performance.mark(BB + "-Begin")
      }
      static _EndUserMark(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && YB._Performance.mark && (YB._Performance.mark(BB + "-End"), YB._Performance.measure(BB, BB + "-Begin", BB + "-End"))
      }
      static _StartPerformanceConsole(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        OB && (YB._StartUserMark(BB, OB), console.time && console.time(BB))
      }
      static _EndPerformanceConsole(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        OB && (YB._EndUserMark(BB, OB), console.timeEnd(BB))
      }
      static _StartMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (YB._NativePerformanceCounterHandles.has(BB)) YB.Warn(`Performance counter with name ${BB} is already started.`);
          else {
            const OB = _native.startPerformanceCounter(BB);
            YB._NativePerformanceCounterHandles.set(BB, OB)
          }
      }
      static _EndMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const OB = YB._NativePerformanceCounterHandles.get(BB);
          OB ? (_native.endPerformanceCounter(OB), YB._NativePerformanceCounterHandles.delete(BB)) : YB.Warn(`Performance counter with name ${BB} was not started.`)
        }
      }
      static get Now() {
        return yB.e.Now
      }
      static GetClassName(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = null;
        if (!OB && BB.getClassName) GB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            GB = (OB ? BB : Object.getPrototypeOf(BB)).constructor.__bjsclassName__
          }
          GB || (GB = typeof BB)
        }
        return GB
      }
      static First(BB, OB) {
        for (const GB of BB)
          if (OB(GB)) return GB;
        return null
      }
      static getFullClassName(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = null,
          YB = null;
        if (!OB && BB.getClassName) GB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            const DB = OB ? BB : Object.getPrototypeOf(BB);
            GB = DB.constructor.__bjsclassName__, YB = DB.constructor.__bjsmoduleName__
          }
          GB || (GB = typeof BB)
        }
        return GB ? (null != YB ? YB + "." : "") + GB : null
      }
      static async DelayAsync(BB) {
        await new Promise((OB => {
          setTimeout((() => {
            OB()
          }), BB)
        }))
      }
      static IsSafari() {
        return !!(0, QB.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function RB(BB, OB) {
      return GB => {
        GB.__bjsclassName__ = BB, GB.__bjsmoduleName__ = null != OB ? OB : null
      }
    }
    YB = NB, NB.AssetBaseUrl = "", NB.UseCustomRequestHeaders = !1, NB.CustomRequestHeaders = MB.e.CustomRequestHeaders, NB.GetDOMTextContent = QB.b, NB._DefaultCdnUrl = "https://cdn.babylonjs.com", NB._CdnVersion = "9.28.0", NB._DefaultAssetsUrl = "https://assets.babylonjs.com/core", NB.LoadScript = "undefined" === typeof _native ? YB._LoadScriptWeb : YB._LoadScriptNative, NB.GetAbsoluteUrl = "object" === typeof document ? BB => {
      const OB = document.createElement("a");
      return OB.href = BB, OB.href
    } : "function" === typeof URL && "object" === typeof location ? BB => new URL(BB, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, NB.NoneLogLevel = oB.b.NoneLogLevel, NB.MessageLogLevel = oB.b.MessageLogLevel, NB.WarningLogLevel = oB.b.WarningLogLevel, NB.ErrorLogLevel = oB.b.ErrorLogLevel, NB.AllLogLevel = oB.b.AllLogLevel, NB.IsWindowObjectExist = QB.j, NB.PerformanceNoneLogLevel = 0, NB.PerformanceUserMarkLogLevel = 1, NB.PerformanceConsoleLogLevel = 2, NB._NativePerformanceCounterHandles = new Map, NB.StartPerformanceCounter = YB._StartPerformanceCounterDisabled, NB.EndPerformanceCounter = YB._EndPerformanceCounterDisabled;
    class WB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = BB, this.index = YB - 1, this._done = !1, this._fn = OB, this._successCallback = GB
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(BB, OB, GB) {
        const YB = new WB(BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return YB.executeNext(), YB
      }
      static SyncAsyncForLoop(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return WB.Run(Math.ceil(BB / OB), (YB => {
          DB && DB() ? YB.breakLoop() : setTimeout((() => {
            for (let QB = 0; QB < OB; ++QB) {
              const oB = YB.index * OB + QB;
              if (oB >= BB) break;
              if (GB(oB), DB && DB()) {
                YB.breakLoop();
                break
              }
            }
            YB.executeNext()
          }), QB)
        }), YB)
      }
    }
    let AB = !1;

    function VB() {
      AB || (AB = !0, NB.Mix = ZB.k, NB.IsExponentOfTwo = ZB.h, PB.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);