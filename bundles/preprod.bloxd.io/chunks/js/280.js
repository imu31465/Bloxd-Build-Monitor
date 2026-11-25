export const id = 280;
export const ids = [280];
export const modules = {
  41210: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = iM(39711),
      SM = iM(38085);
    class jM {
      static Instantiate(MM) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[MM]) return this.RegisteredExternalClasses[MM];
        const rM = (0, SM.b)(MM);
        if (rM) return rM;
        OM.e.Warn(MM + " not found, you may have missed an import.");
        const iM = MM.split(".");
        let jM = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let OM = 0, SM = iM.length; OM < SM; OM++) jM = jM[iM[OM]];
        return "function" !== typeof jM ? null : jM
      }
    }
    jM.RegisteredExternalClasses = {}
  },
  41009: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    var OM = iM(40972);
    class SM {
      static get Now() {
        return (0, OM.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41034: (MM, rM, iM) => {
    function OM(MM) {
      let rM = 1;
      do {
        rM *= 2
      } while (rM < MM);
      return rM === MM
    }

    function SM(MM, rM, iM) {
      return MM * (1 - iM) + rM * iM
    }

    function jM(MM) {
      const rM = aM(MM),
        iM = PM(MM);
      return rM - MM > MM - iM ? iM : rM
    }

    function aM(MM) {
      return MM--, MM |= MM >> 1, MM |= MM >> 2, MM |= MM >> 4, MM |= MM >> 8, MM |= MM >> 16, ++MM
    }

    function PM(MM) {
      return MM |= MM >> 1, MM |= MM >> 2, MM |= MM >> 4, MM |= MM >> 8, (MM |= MM >> 16) - (MM >> 1)
    }

    function nM(MM, rM) {
      let iM;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          iM = PM(MM);
          break;
        case 2:
          iM = jM(MM);
          break;
        default:
          iM = aM(MM)
      }
      return Math.min(iM, rM)
    }
    iM.d(rM, {
      c: () => PM,
      e: () => nM,
      g: () => OM,
      i: () => SM,
      m: () => jM
    })
  },
  41205: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => EM,
      d: () => GM,
      e: () => yM,
      g: () => lM
    });
    var OM, SM = iM(38068),
      jM = iM(40972),
      aM = iM(39711),
      PM = iM(39705),
      nM = iM(41009),
      QM = iM(40990),
      zM = iM(41148),
      LM = iM(38064),
      mM = iM(41145),
      HM = iM(41003),
      hM = iM(41210),
      JM = iM(38885),
      dM = iM(41034);
    class yM {
      static get BaseUrl() {
        return mM.f.BaseUrl
      }
      static set BaseUrl(MM) {
        mM.f.BaseUrl = MM
      }
      static get CleanUrl() {
        return mM.f.CleanUrl
      }
      static set CleanUrl(MM) {
        mM.f.CleanUrl = MM
      }
      static IsAbsoluteUrl(MM) {
        return 0 === MM.indexOf("//") || -1 !== MM.indexOf("://") && (-1 !== MM.indexOf(".") && (-1 !== MM.indexOf("/") && (!(MM.indexOf(":") > MM.indexOf("/")) && (MM.indexOf("://") < MM.indexOf(".") || (0 === MM.indexOf("data:") || 0 === MM.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(MM) {
        mM.f.ScriptBaseUrl = MM
      }
      static get ScriptBaseUrl() {
        return mM.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(MM) {
        OM.ScriptBaseUrl = MM, OM.AssetBaseUrl = MM
      }
      static set ScriptPreprocessUrl(MM) {
        mM.f.ScriptPreprocessUrl = MM
      }
      static get ScriptPreprocessUrl() {
        return mM.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return mM.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(MM) {
        mM.f.DefaultRetryStrategy = MM
      }
      static get CorsBehavior() {
        return mM.f.CorsBehavior
      }
      static set CorsBehavior(MM) {
        mM.f.CorsBehavior = MM
      }
      static get UseFallbackTexture() {
        return LM.c.UseFallbackTexture
      }
      static set UseFallbackTexture(MM) {
        LM.c.UseFallbackTexture = MM
      }
      static get RegisteredExternalClasses() {
        return hM.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(MM) {
        hM.d.RegisteredExternalClasses = MM
      }
      static get fallbackTexture() {
        return LM.c.FallbackTexture
      }
      static set fallbackTexture(MM) {
        LM.c.FallbackTexture = MM
      }
      static FetchToRef(MM, rM, iM, OM, SM, jM) {
        const aM = 4 * ((Math.abs(MM) * iM % iM | 0) + (Math.abs(rM) * OM % OM | 0) * iM);
        jM.r = SM[aM] / 255, jM.g = SM[aM + 1] / 255, jM.b = SM[aM + 2] / 255, jM.a = SM[aM + 3] / 255
      }
      static Mix(MM, rM, iM) {
        return 0
      }
      static Instantiate(MM) {
        return hM.d.Instantiate(MM)
      }
      static SetImmediate(MM) {
        HM.c.SetImmediate(MM)
      }
      static IsExponentOfTwo(MM) {
        return !0
      }
      static FloatRound(MM) {
        return Math.fround(MM)
      }
      static GetFilename(MM) {
        const rM = MM.lastIndexOf("/");
        return rM < 0 ? MM : MM.substring(rM + 1)
      }
      static GetFolderPath(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = MM.lastIndexOf("/");
        return iM < 0 ? rM ? MM : "" : MM.substring(0, iM + 1)
      }
      static ToDegrees(MM) {
        return 180 * MM / Math.PI
      }
      static ToRadians(MM) {
        return MM * Math.PI / 180
      }
      static SmoothAngleChange(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const OM = this.ToRadians(MM),
          SM = this.ToRadians(rM);
        return this.ToDegrees(Math.atan2((1 - iM) * Math.sin(SM) + iM * Math.sin(OM), (1 - iM) * Math.cos(SM) + iM * Math.cos(OM)))
      }
      static MakeArray(MM, rM) {
        return !0 === rM || void 0 !== MM && null != MM ? Array.isArray(MM) ? MM : [MM] : null
      }
      static GetPointerPrefix(MM) {
        return (0, jM.l)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(MM, rM) {
        (0, mM.x)(MM, rM)
      }
      static SetReferrerPolicyBehavior(MM, rM) {
        rM.referrerPolicy = MM
      }
      static get PreprocessUrl() {
        return mM.f.PreprocessUrl
      }
      static set PreprocessUrl(MM) {
        mM.f.PreprocessUrl = MM
      }
      static LoadImage(MM, rM, iM, OM, SM, jM) {
        return (0, mM.p)(MM, rM, iM, OM, SM, jM)
      }
      static LoadFile(MM, rM, iM, OM, SM, jM) {
        return (0, mM.n)(MM, rM, iM, OM, SM, jM)
      }
      static async LoadFileAsync(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((iM, OM) => {
          (0, mM.n)(MM, (MM => {
            iM(MM)
          }), void 0, void 0, rM, ((MM, rM) => {
            OM(rM)
          }))
        }))
      }
      static GetAssetUrl(MM) {
        if (!MM) return "";
        if (OM.AssetBaseUrl && MM.startsWith(OM._DefaultAssetsUrl)) {
          const rM = OM.AssetBaseUrl.endsWith("/") ? OM.AssetBaseUrl.slice(0, -1) : OM.AssetBaseUrl;
          return MM.replace(OM._DefaultAssetsUrl, rM)
        }
        return MM
      }
      static GetBabylonScriptURL(MM, rM) {
        if (!MM) return "";
        if (MM.startsWith(OM._DefaultCdnUrl))
          if (OM.ScriptBaseUrl) {
            const rM = OM.ScriptBaseUrl.endsWith("/") ? OM.ScriptBaseUrl.slice(0, -1) : OM.ScriptBaseUrl;
            MM = MM.replace(OM._DefaultCdnUrl, rM)
          } else if (OM._CdnVersion) {
          const rM = `${OM._DefaultCdnUrl}/v${OM._CdnVersion}`;
          MM.startsWith(rM) || (MM = MM.replace(OM._DefaultCdnUrl, rM))
        }
        return MM = OM.ScriptPreprocessUrl(MM), rM && !OM.IsAbsoluteUrl(MM) && (MM = OM.GetAbsoluteUrl(MM)), MM
      }
      static LoadBabylonScript(MM, rM, iM, SM) {
        MM = OM.GetBabylonScriptURL(MM), OM.LoadScript(MM, rM, iM)
      }
      static async LoadBabylonScriptAsync(MM) {
        return MM = OM.GetBabylonScriptURL(MM), await OM.LoadScriptAsync(MM)
      }
      static _LoadScriptNative(MM, rM, iM, SM) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const MM = "Loading a script as an ES module is not supported in Babylon Native";
            return void iM?.(MM, new Error(MM))
          }
          OM.LoadFile(MM, (MM => {
            try {
              Function(MM).apply(null), rM && rM()
            } catch (OM) {
              iM && iM("LoadScript Error", OM)
            }
          }), void 0, void 0, !1, ((MM, rM) => {
            iM && iM("LoadScript Error", rM)
          }))
        }
      }
      static _LoadScriptWeb(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(MM), rM && rM()
          } catch (nM) {
            iM?.(`Unable to load script '${MM}' in worker`, nM)
          }
          return
        }
        if (!(0, jM.l)()) return void iM?.(`Cannot load script '${MM}' outside of a window or a worker`);
        const aM = document.getElementsByTagName("head")[0],
          PM = document.createElement("script");
        SM ? (PM.setAttribute("type", "module"), PM.innerText = MM) : (PM.setAttribute("type", "text/javascript"), PM.setAttribute("src", MM)), OM && (PM.id = OM), PM.onload = () => {
          rM && rM()
        }, PM.onerror = rM => {
          iM && iM(`Unable to load script '${MM}'`, rM)
        }, aM.appendChild(PM)
      }
      static async LoadScriptAsync(MM, rM) {
        return await new Promise(((iM, OM) => {
          this.LoadScript(MM, (() => {
            iM()
          }), ((MM, rM) => {
            OM(rM || new Error(MM))
          }), rM)
        }))
      }
      static ReadFileAsDataURL(MM, rM, iM) {
        const OM = new FileReader,
          jM = {
            onCompleteObservable: new SM.d,
            abort: () => OM.abort()
          };
        return OM.onloadend = () => {
          jM.onCompleteObservable.notifyObservers(jM)
        }, OM.onload = MM => {
          rM(MM.target.result)
        }, OM.onprogress = iM, OM.readAsDataURL(MM), jM
      }
      static ReadFile(MM, rM, iM, OM, SM) {
        return (0, mM.s)(MM, rM, iM, OM, SM)
      }
      static FileAsURL(MM) {
        const rM = new Blob([MM]);
        return window.URL.createObjectURL(rM)
      }
      static Format(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return MM.toFixed(rM)
      }
      static DeepCopy(MM, rM, iM, OM) {
        PM.b.DeepCopy(MM, rM, iM, OM)
      }
      static IsEmpty(MM) {
        for (const rM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, rM)) return !1;
        return !0
      }
      static RegisterTopRootEvents(MM, rM) {
        for (let OM = 0; OM < rM.length; OM++) {
          const SM = rM[OM];
          MM.addEventListener(SM.name, SM.handler, !1);
          try {
            window.parent && window.parent.addEventListener(SM.name, SM.handler, !1)
          } catch (iM) {}
        }
      }
      static UnregisterTopRootEvents(MM, rM) {
        for (let OM = 0; OM < rM.length; OM++) {
          const SM = rM[OM];
          MM.removeEventListener(SM.name, SM.handler);
          try {
            MM.parent && MM.parent.removeEventListener(SM.name, SM.handler)
          } catch (iM) {}
        }
      }
      static async DumpFramebuffer(MM, rM, iM, OM) {
        throw (0, QM.n)("DumpTools")
      }
      static DumpData(MM, rM, iM, OM) {
        throw (0, QM.n)("DumpTools")
      }
      static async DumpDataAsync(MM, rM, iM) {
        throw (0, QM.n)("DumpTools")
      }
      static _IsOffScreenCanvas(MM) {
        return void 0 !== MM.convertToBlob
      }
      static ToBlob(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          SM = arguments.length > 3 ? arguments[3] : void 0;
        OM._IsOffScreenCanvas(MM) || MM.toBlob || (MM.toBlob = function(MM, rM, iM) {
          setTimeout((() => {
            const OM = atob(this.toDataURL(rM, iM).split(",")[1]),
              SM = OM.length,
              jM = new Uint8Array(SM);
            for (let MM = 0; MM < SM; MM++) jM[MM] = OM.charCodeAt(MM);
            MM(new Blob([jM]))
          }))
        }), OM._IsOffScreenCanvas(MM) ? MM.convertToBlob({
          type: iM,
          quality: SM
        }).then((MM => rM(MM))) : MM.toBlob((function(MM) {
          rM(MM)
        }), iM, SM)
      }
      static DownloadBlob(MM, rM) {
        if ("download" in document.createElement("a")) {
          if (!rM) {
            const MM = new Date;
            rM = "screenshot_" + ((MM.getFullYear() + "-" + (MM.getMonth() + 1)).slice(2) + "-" + MM.getDate() + "_" + MM.getHours() + "-" + ("0" + MM.getMinutes()).slice(-2)) + ".png"
          }
          OM.Download(MM, rM)
        } else if (MM && "undefined" !== typeof URL) {
          const rM = URL.createObjectURL(MM),
            iM = window.open("");
          if (!iM) return;
          const OM = iM.document.createElement("img");
          OM.onload = function() {
            URL.revokeObjectURL(rM)
          }, OM.src = rM, iM.document.body.appendChild(OM)
        }
      }
      static EncodeScreenshotCanvasData(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          SM = arguments.length > 3 ? arguments[3] : void 0,
          jM = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof SM && rM) {
          if (rM) {
            if (OM._IsOffScreenCanvas(MM)) return void MM.convertToBlob({
              type: iM,
              quality: jM
            }).then((MM => {
              const iM = new FileReader;
              iM.readAsDataURL(MM), iM.onloadend = () => {
                const MM = iM.result;
                rM(MM)
              }
            }));
            const SM = MM.toDataURL(iM, jM);
            rM(SM)
          }
        } else this.ToBlob(MM, (function(MM) {
          MM && OM.DownloadBlob(MM, SM), rM && rM("")
        }), iM, jM)
      }
      static Download(MM, rM) {
        if ("undefined" === typeof URL) return;
        const iM = window.URL.createObjectURL(MM),
          OM = document.createElement("a");
        document.body.appendChild(OM), OM.style.display = "none", OM.href = iM, OM.download = rM, OM.addEventListener("click", (() => {
          OM.parentElement && OM.parentElement.removeChild(OM)
        })), OM.click(), window.URL.revokeObjectURL(iM)
      }
      static BackCompatCameraNoPreventDefault(MM) {
        return "boolean" === typeof MM[0] ? MM[0] : "boolean" === typeof MM[1] && MM[1]
      }
      static CreateScreenshot(MM, rM, iM, OM) {
        throw (0, QM.n)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(MM, rM, iM) {
        throw (0, QM.n)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(MM, rM, iM, OM) {
        throw (0, QM.n)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(MM, rM, iM) {
        throw (0, QM.n)("ScreenshotTools")
      }
      static RandomId() {
        return (0, JM.d)()
      }
      static IsBase64(MM) {
        return (0, mM.k)(MM)
      }
      static DecodeBase64(MM) {
        return (0, mM.d)(MM)
      }
      static get errorsCount() {
        return aM.e.errorsCount
      }
      static Log(MM) {
        aM.e.Log(MM)
      }
      static Warn(MM) {
        aM.e.Warn(MM)
      }
      static Error(MM) {
        aM.e.Error(MM)
      }
      static get LogCache() {
        return aM.e.LogCache
      }
      static ClearLogCache() {
        aM.e.ClearLogCache()
      }
      static set LogLevels(MM) {
        aM.e.LogLevels = MM
      }
      static set PerformanceLogLevel(MM) {
        (MM & OM.PerformanceUserMarkLogLevel) !== OM.PerformanceUserMarkLogLevel ? (MM & OM.PerformanceConsoleLogLevel) !== OM.PerformanceConsoleLogLevel ? (OM.StartPerformanceCounter = OM._StartPerformanceCounterDisabled, OM.EndPerformanceCounter = OM._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), OM.StartPerformanceCounter = OM._StartMarkNative, OM.EndPerformanceCounter = OM._EndMarkNative) : (OM.StartPerformanceCounter = OM._StartPerformanceConsole, OM.EndPerformanceCounter = OM._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), OM.StartPerformanceCounter = OM._StartMarkNative, OM.EndPerformanceCounter = OM._EndMarkNative) : (OM.StartPerformanceCounter = OM._StartUserMark, OM.EndPerformanceCounter = OM._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(MM, rM) {}
      static _EndPerformanceCounterDisabled(MM, rM) {}
      static _StartUserMark(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!OM._Performance) {
          if (!(0, jM.l)()) return;
          OM._Performance = window.performance
        }
        rM && OM._Performance.mark && OM._Performance.mark(MM + "-Begin")
      }
      static _EndUserMark(MM) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && OM._Performance.mark && (OM._Performance.mark(MM + "-End"), OM._Performance.measure(MM, MM + "-Begin", MM + "-End"))
      }
      static _StartPerformanceConsole(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        rM && (OM._StartUserMark(MM, rM), console.time && console.time(MM))
      }
      static _EndPerformanceConsole(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        rM && (OM._EndUserMark(MM, rM), console.timeEnd(MM))
      }
      static _StartMarkNative(MM) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (OM._NativePerformanceCounterHandles.has(MM)) OM.Warn(`Performance counter with name ${MM} is already started.`);
          else {
            const rM = _native.startPerformanceCounter(MM);
            OM._NativePerformanceCounterHandles.set(MM, rM)
          }
      }
      static _EndMarkNative(MM) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const rM = OM._NativePerformanceCounterHandles.get(MM);
          rM ? (_native.endPerformanceCounter(rM), OM._NativePerformanceCounterHandles.delete(MM)) : OM.Warn(`Performance counter with name ${MM} was not started.`)
        }
      }
      static get Now() {
        return nM.b.Now
      }
      static GetClassName(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = null;
        if (!rM && MM.getClassName) iM = MM.getClassName();
        else {
          if (MM instanceof Object) {
            iM = (rM ? MM : Object.getPrototypeOf(MM)).constructor.__bjsclassName__
          }
          iM || (iM = typeof MM)
        }
        return iM
      }
      static First(MM, rM) {
        for (const iM of MM)
          if (rM(iM)) return iM;
        return null
      }
      static getFullClassName(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = null,
          OM = null;
        if (!rM && MM.getClassName) iM = MM.getClassName();
        else {
          if (MM instanceof Object) {
            const SM = rM ? MM : Object.getPrototypeOf(MM);
            iM = SM.constructor.__bjsclassName__, OM = SM.constructor.__bjsmoduleName__
          }
          iM || (iM = typeof MM)
        }
        return iM ? (null != OM ? OM + "." : "") + iM : null
      }
      static async DelayAsync(MM) {
        await new Promise((rM => {
          setTimeout((() => {
            rM()
          }), MM)
        }))
      }
      static IsSafari() {
        return !!(0, jM.k)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function lM(MM, rM) {
      return iM => {
        iM.__bjsclassName__ = MM, iM.__bjsmoduleName__ = null != rM ? rM : null
      }
    }
    OM = yM, yM.AssetBaseUrl = "", yM.UseCustomRequestHeaders = !1, yM.CustomRequestHeaders = zM.e.CustomRequestHeaders, yM.GetDOMTextContent = jM.c, yM._DefaultCdnUrl = "https://cdn.babylonjs.com", yM._CdnVersion = "9.28.0", yM._DefaultAssetsUrl = "https://assets.babylonjs.com/core", yM.LoadScript = "undefined" === typeof _native ? OM._LoadScriptWeb : OM._LoadScriptNative, yM.GetAbsoluteUrl = "object" === typeof document ? MM => {
      const rM = document.createElement("a");
      return rM.href = MM, rM.href
    } : "function" === typeof URL && "object" === typeof location ? MM => new URL(MM, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, yM.NoneLogLevel = aM.e.NoneLogLevel, yM.MessageLogLevel = aM.e.MessageLogLevel, yM.WarningLogLevel = aM.e.WarningLogLevel, yM.ErrorLogLevel = aM.e.ErrorLogLevel, yM.AllLogLevel = aM.e.AllLogLevel, yM.IsWindowObjectExist = jM.l, yM.PerformanceNoneLogLevel = 0, yM.PerformanceUserMarkLogLevel = 1, yM.PerformanceConsoleLogLevel = 2, yM._NativePerformanceCounterHandles = new Map, yM.StartPerformanceCounter = OM._StartPerformanceCounterDisabled, yM.EndPerformanceCounter = OM._EndPerformanceCounterDisabled;
    class EM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = MM, this.index = OM - 1, this._done = !1, this._fn = rM, this._successCallback = iM
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(MM, rM, iM) {
        const OM = new EM(MM, rM, iM, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return OM.executeNext(), OM
      }
      static SyncAsyncForLoop(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return EM.Run(Math.ceil(MM / rM), (OM => {
          SM && SM() ? OM.breakLoop() : setTimeout((() => {
            for (let jM = 0; jM < rM; ++jM) {
              const aM = OM.index * rM + jM;
              if (aM >= MM) break;
              if (iM(aM), SM && SM()) {
                OM.breakLoop();
                break
              }
            }
            OM.executeNext()
          }), jM)
        }), OM)
      }
    }
    let UM = !1;

    function GM() {
      UM || (UM = !0, yM.Mix = dM.i, yM.IsExponentOfTwo = dM.g, LM.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);