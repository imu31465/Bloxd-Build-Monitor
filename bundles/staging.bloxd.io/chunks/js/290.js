export const id = 290;
export const ids = [290];
export const modules = {
  41626: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(39911),
      EW = OW(38299);
    class NW {
      static Instantiate(WW) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[WW]) return this.RegisteredExternalClasses[WW];
        const iW = (0, EW.d)(WW);
        if (iW) return iW;
        mW.b.Warn(WW + " not found, you may have missed an import.");
        const OW = WW.split(".");
        let NW = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let mW = 0, EW = OW.length; mW < EW; mW++) NW = NW[OW[mW]];
        return "function" !== typeof NW ? null : NW
      }
    }
    NW.RegisteredExternalClasses = {}
  },
  41431: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(41406);
    class EW {
      static get Now() {
        return (0, mW.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41458: (WW, iW, OW) => {
    function mW(WW) {
      let iW = 1;
      do {
        iW *= 2
      } while (iW < WW);
      return iW === WW
    }

    function EW(WW, iW, OW) {
      return WW * (1 - OW) + iW * OW
    }

    function NW(WW) {
      const iW = PW(WW),
        OW = LW(WW);
      return iW - WW > WW - OW ? OW : iW
    }

    function PW(WW) {
      return WW--, WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, WW |= WW >> 16, ++WW
    }

    function LW(WW) {
      return WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, (WW |= WW >> 16) - (WW >> 1)
    }

    function cW(WW, iW) {
      let OW;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          OW = LW(WW);
          break;
        case 2:
          OW = NW(WW);
          break;
        default:
          OW = PW(WW)
      }
      return Math.min(OW, iW)
    }
    OW.d(iW, {
      e: () => LW,
      h: () => cW,
      i: () => mW,
      j: () => EW,
      n: () => NW
    })
  },
  41620: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => sW,
      c: () => KW,
      f: () => UW,
      h: () => kW
    });
    var mW, EW = OW(38276),
      NW = OW(41406),
      PW = OW(39911),
      LW = OW(39908),
      cW = OW(41431),
      wW = OW(41415),
      tW = OW(41564),
      ZW = OW(38270),
      xW = OW(41558),
      lW = OW(41420),
      AW = OW(41626),
      bW = OW(39088),
      jW = OW(41458);
    class UW {
      static get BaseUrl() {
        return xW.f.BaseUrl
      }
      static set BaseUrl(WW) {
        xW.f.BaseUrl = WW
      }
      static get CleanUrl() {
        return xW.f.CleanUrl
      }
      static set CleanUrl(WW) {
        xW.f.CleanUrl = WW
      }
      static IsAbsoluteUrl(WW) {
        return 0 === WW.indexOf("//") || -1 !== WW.indexOf("://") && (-1 !== WW.indexOf(".") && (-1 !== WW.indexOf("/") && (!(WW.indexOf(":") > WW.indexOf("/")) && (WW.indexOf("://") < WW.indexOf(".") || (0 === WW.indexOf("data:") || 0 === WW.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(WW) {
        xW.f.ScriptBaseUrl = WW
      }
      static get ScriptBaseUrl() {
        return xW.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(WW) {
        mW.ScriptBaseUrl = WW, mW.AssetBaseUrl = WW
      }
      static set ScriptPreprocessUrl(WW) {
        xW.f.ScriptPreprocessUrl = WW
      }
      static get ScriptPreprocessUrl() {
        return xW.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return xW.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(WW) {
        xW.f.DefaultRetryStrategy = WW
      }
      static get CorsBehavior() {
        return xW.f.CorsBehavior
      }
      static set CorsBehavior(WW) {
        xW.f.CorsBehavior = WW
      }
      static get UseFallbackTexture() {
        return ZW.d.UseFallbackTexture
      }
      static set UseFallbackTexture(WW) {
        ZW.d.UseFallbackTexture = WW
      }
      static get RegisteredExternalClasses() {
        return AW.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(WW) {
        AW.b.RegisteredExternalClasses = WW
      }
      static get fallbackTexture() {
        return ZW.d.FallbackTexture
      }
      static set fallbackTexture(WW) {
        ZW.d.FallbackTexture = WW
      }
      static FetchToRef(WW, iW, OW, mW, EW, NW) {
        const PW = 4 * ((Math.abs(WW) * OW % OW | 0) + (Math.abs(iW) * mW % mW | 0) * OW);
        NW.r = EW[PW] / 255, NW.g = EW[PW + 1] / 255, NW.b = EW[PW + 2] / 255, NW.a = EW[PW + 3] / 255
      }
      static Mix(WW, iW, OW) {
        return 0
      }
      static Instantiate(WW) {
        return AW.b.Instantiate(WW)
      }
      static SetImmediate(WW) {
        lW.d.SetImmediate(WW)
      }
      static IsExponentOfTwo(WW) {
        return !0
      }
      static FloatRound(WW) {
        return Math.fround(WW)
      }
      static GetFilename(WW) {
        const iW = WW.lastIndexOf("/");
        return iW < 0 ? WW : WW.substring(iW + 1)
      }
      static GetFolderPath(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = WW.lastIndexOf("/");
        return OW < 0 ? iW ? WW : "" : WW.substring(0, OW + 1)
      }
      static ToDegrees(WW) {
        return 180 * WW / Math.PI
      }
      static ToRadians(WW) {
        return WW * Math.PI / 180
      }
      static SmoothAngleChange(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const mW = this.ToRadians(WW),
          EW = this.ToRadians(iW);
        return this.ToDegrees(Math.atan2((1 - OW) * Math.sin(EW) + OW * Math.sin(mW), (1 - OW) * Math.cos(EW) + OW * Math.cos(mW)))
      }
      static MakeArray(WW, iW) {
        return !0 === iW || void 0 !== WW && null != WW ? Array.isArray(WW) ? WW : [WW] : null
      }
      static GetPointerPrefix(WW) {
        return (0, NW.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(WW, iW) {
        (0, xW.H)(WW, iW)
      }
      static SetReferrerPolicyBehavior(WW, iW) {
        iW.referrerPolicy = WW
      }
      static get PreprocessUrl() {
        return xW.f.PreprocessUrl
      }
      static set PreprocessUrl(WW) {
        xW.f.PreprocessUrl = WW
      }
      static LoadImage(WW, iW, OW, mW, EW, NW) {
        return (0, xW.s)(WW, iW, OW, mW, EW, NW)
      }
      static LoadFile(WW, iW, OW, mW, EW, NW) {
        return (0, xW.o)(WW, iW, OW, mW, EW, NW)
      }
      static async LoadFileAsync(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((OW, mW) => {
          (0, xW.o)(WW, (WW => {
            OW(WW)
          }), void 0, void 0, iW, ((WW, iW) => {
            mW(iW)
          }))
        }))
      }
      static GetAssetUrl(WW) {
        if (!WW) return "";
        if (mW.AssetBaseUrl && WW.startsWith(mW._DefaultAssetsUrl)) {
          const iW = mW.AssetBaseUrl.endsWith("/") ? mW.AssetBaseUrl.slice(0, -1) : mW.AssetBaseUrl;
          return WW.replace(mW._DefaultAssetsUrl, iW)
        }
        return WW
      }
      static GetBabylonScriptURL(WW, iW) {
        if (!WW) return "";
        if (WW.startsWith(mW._DefaultCdnUrl))
          if (mW.ScriptBaseUrl) {
            const iW = mW.ScriptBaseUrl.endsWith("/") ? mW.ScriptBaseUrl.slice(0, -1) : mW.ScriptBaseUrl;
            WW = WW.replace(mW._DefaultCdnUrl, iW)
          } else if (mW._CdnVersion) {
          const iW = `${mW._DefaultCdnUrl}/v${mW._CdnVersion}`;
          WW.startsWith(iW) || (WW = WW.replace(mW._DefaultCdnUrl, iW))
        }
        return WW = mW.ScriptPreprocessUrl(WW), iW && !mW.IsAbsoluteUrl(WW) && (WW = mW.GetAbsoluteUrl(WW)), WW
      }
      static LoadBabylonScript(WW, iW, OW, EW) {
        WW = mW.GetBabylonScriptURL(WW), mW.LoadScript(WW, iW, OW)
      }
      static async LoadBabylonScriptAsync(WW) {
        return WW = mW.GetBabylonScriptURL(WW), await mW.LoadScriptAsync(WW)
      }
      static _LoadScriptNative(WW, iW, OW, EW) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const WW = "Loading a script as an ES module is not supported in Babylon Native";
            return void OW?.(WW, new Error(WW))
          }
          mW.LoadFile(WW, (WW => {
            try {
              Function(WW).apply(null), iW && iW()
            } catch (mW) {
              OW && OW("LoadScript Error", mW)
            }
          }), void 0, void 0, !1, ((WW, iW) => {
            OW && OW("LoadScript Error", iW)
          }))
        }
      }
      static _LoadScriptWeb(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(WW), iW && iW()
          } catch (cW) {
            OW?.(`Unable to load script '${WW}' in worker`, cW)
          }
          return
        }
        if (!(0, NW.j)()) return void OW?.(`Cannot load script '${WW}' outside of a window or a worker`);
        const PW = document.getElementsByTagName("head")[0],
          LW = document.createElement("script");
        EW ? (LW.setAttribute("type", "module"), LW.innerText = WW) : (LW.setAttribute("type", "text/javascript"), LW.setAttribute("src", WW)), mW && (LW.id = mW), LW.onload = () => {
          iW && iW()
        }, LW.onerror = iW => {
          OW && OW(`Unable to load script '${WW}'`, iW)
        }, PW.appendChild(LW)
      }
      static async LoadScriptAsync(WW, iW) {
        return await new Promise(((OW, mW) => {
          this.LoadScript(WW, (() => {
            OW()
          }), ((WW, iW) => {
            mW(iW || new Error(WW))
          }), iW)
        }))
      }
      static ReadFileAsDataURL(WW, iW, OW) {
        const mW = new FileReader,
          NW = {
            onCompleteObservable: new EW.e,
            abort: () => mW.abort()
          };
        return mW.onloadend = () => {
          NW.onCompleteObservable.notifyObservers(NW)
        }, mW.onload = WW => {
          iW(WW.target.result)
        }, mW.onprogress = OW, mW.readAsDataURL(WW), NW
      }
      static ReadFile(WW, iW, OW, mW, EW) {
        return (0, xW.v)(WW, iW, OW, mW, EW)
      }
      static FileAsURL(WW) {
        const iW = new Blob([WW]);
        return window.URL.createObjectURL(iW)
      }
      static Format(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return WW.toFixed(iW)
      }
      static DeepCopy(WW, iW, OW, mW) {
        LW.c.DeepCopy(WW, iW, OW, mW)
      }
      static IsEmpty(WW) {
        for (const iW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, iW)) return !1;
        return !0
      }
      static RegisterTopRootEvents(WW, iW) {
        for (let mW = 0; mW < iW.length; mW++) {
          const EW = iW[mW];
          WW.addEventListener(EW.name, EW.handler, !1);
          try {
            window.parent && window.parent.addEventListener(EW.name, EW.handler, !1)
          } catch (OW) {}
        }
      }
      static UnregisterTopRootEvents(WW, iW) {
        for (let mW = 0; mW < iW.length; mW++) {
          const EW = iW[mW];
          WW.removeEventListener(EW.name, EW.handler);
          try {
            WW.parent && WW.parent.removeEventListener(EW.name, EW.handler)
          } catch (OW) {}
        }
      }
      static async DumpFramebuffer(WW, iW, OW, mW) {
        throw (0, wW.o)("DumpTools")
      }
      static DumpData(WW, iW, OW, mW) {
        throw (0, wW.o)("DumpTools")
      }
      static async DumpDataAsync(WW, iW, OW) {
        throw (0, wW.o)("DumpTools")
      }
      static _IsOffScreenCanvas(WW) {
        return void 0 !== WW.convertToBlob
      }
      static ToBlob(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          EW = arguments.length > 3 ? arguments[3] : void 0;
        mW._IsOffScreenCanvas(WW) || WW.toBlob || (WW.toBlob = function(WW, iW, OW) {
          setTimeout((() => {
            const mW = atob(this.toDataURL(iW, OW).split(",")[1]),
              EW = mW.length,
              NW = new Uint8Array(EW);
            for (let WW = 0; WW < EW; WW++) NW[WW] = mW.charCodeAt(WW);
            WW(new Blob([NW]))
          }))
        }), mW._IsOffScreenCanvas(WW) ? WW.convertToBlob({
          type: OW,
          quality: EW
        }).then((WW => iW(WW))) : WW.toBlob((function(WW) {
          iW(WW)
        }), OW, EW)
      }
      static DownloadBlob(WW, iW) {
        if ("download" in document.createElement("a")) {
          if (!iW) {
            const WW = new Date;
            iW = "screenshot_" + ((WW.getFullYear() + "-" + (WW.getMonth() + 1)).slice(2) + "-" + WW.getDate() + "_" + WW.getHours() + "-" + ("0" + WW.getMinutes()).slice(-2)) + ".png"
          }
          mW.Download(WW, iW)
        } else if (WW && "undefined" !== typeof URL) {
          const iW = URL.createObjectURL(WW),
            OW = window.open("");
          if (!OW) return;
          const mW = OW.document.createElement("img");
          mW.onload = function() {
            URL.revokeObjectURL(iW)
          }, mW.src = iW, OW.document.body.appendChild(mW)
        }
      }
      static EncodeScreenshotCanvasData(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          EW = arguments.length > 3 ? arguments[3] : void 0,
          NW = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof EW && iW) {
          if (iW) {
            if (mW._IsOffScreenCanvas(WW)) return void WW.convertToBlob({
              type: OW,
              quality: NW
            }).then((WW => {
              const OW = new FileReader;
              OW.readAsDataURL(WW), OW.onloadend = () => {
                const WW = OW.result;
                iW(WW)
              }
            }));
            const EW = WW.toDataURL(OW, NW);
            iW(EW)
          }
        } else this.ToBlob(WW, (function(WW) {
          WW && mW.DownloadBlob(WW, EW), iW && iW("")
        }), OW, NW)
      }
      static Download(WW, iW) {
        if ("undefined" === typeof URL) return;
        const OW = window.URL.createObjectURL(WW),
          mW = document.createElement("a");
        document.body.appendChild(mW), mW.style.display = "none", mW.href = OW, mW.download = iW, mW.addEventListener("click", (() => {
          mW.parentElement && mW.parentElement.removeChild(mW)
        })), mW.click(), window.URL.revokeObjectURL(OW)
      }
      static BackCompatCameraNoPreventDefault(WW) {
        return "boolean" === typeof WW[0] ? WW[0] : "boolean" === typeof WW[1] && WW[1]
      }
      static CreateScreenshot(WW, iW, OW, mW) {
        throw (0, wW.o)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(WW, iW, OW) {
        throw (0, wW.o)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(WW, iW, OW, mW) {
        throw (0, wW.o)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(WW, iW, OW) {
        throw (0, wW.o)("ScreenshotTools")
      }
      static RandomId() {
        return (0, bW.b)()
      }
      static IsBase64(WW) {
        return (0, xW.l)(WW)
      }
      static DecodeBase64(WW) {
        return (0, xW.d)(WW)
      }
      static get errorsCount() {
        return PW.b.errorsCount
      }
      static Log(WW) {
        PW.b.Log(WW)
      }
      static Warn(WW) {
        PW.b.Warn(WW)
      }
      static Error(WW) {
        PW.b.Error(WW)
      }
      static get LogCache() {
        return PW.b.LogCache
      }
      static ClearLogCache() {
        PW.b.ClearLogCache()
      }
      static set LogLevels(WW) {
        PW.b.LogLevels = WW
      }
      static set PerformanceLogLevel(WW) {
        (WW & mW.PerformanceUserMarkLogLevel) !== mW.PerformanceUserMarkLogLevel ? (WW & mW.PerformanceConsoleLogLevel) !== mW.PerformanceConsoleLogLevel ? (mW.StartPerformanceCounter = mW._StartPerformanceCounterDisabled, mW.EndPerformanceCounter = mW._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), mW.StartPerformanceCounter = mW._StartMarkNative, mW.EndPerformanceCounter = mW._EndMarkNative) : (mW.StartPerformanceCounter = mW._StartPerformanceConsole, mW.EndPerformanceCounter = mW._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), mW.StartPerformanceCounter = mW._StartMarkNative, mW.EndPerformanceCounter = mW._EndMarkNative) : (mW.StartPerformanceCounter = mW._StartUserMark, mW.EndPerformanceCounter = mW._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(WW, iW) {}
      static _EndPerformanceCounterDisabled(WW, iW) {}
      static _StartUserMark(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!mW._Performance) {
          if (!(0, NW.j)()) return;
          mW._Performance = window.performance
        }
        iW && mW._Performance.mark && mW._Performance.mark(WW + "-Begin")
      }
      static _EndUserMark(WW) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && mW._Performance.mark && (mW._Performance.mark(WW + "-End"), mW._Performance.measure(WW, WW + "-Begin", WW + "-End"))
      }
      static _StartPerformanceConsole(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        iW && (mW._StartUserMark(WW, iW), console.time && console.time(WW))
      }
      static _EndPerformanceConsole(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        iW && (mW._EndUserMark(WW, iW), console.timeEnd(WW))
      }
      static _StartMarkNative(WW) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (mW._NativePerformanceCounterHandles.has(WW)) mW.Warn(`Performance counter with name ${WW} is already started.`);
          else {
            const iW = _native.startPerformanceCounter(WW);
            mW._NativePerformanceCounterHandles.set(WW, iW)
          }
      }
      static _EndMarkNative(WW) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const iW = mW._NativePerformanceCounterHandles.get(WW);
          iW ? (_native.endPerformanceCounter(iW), mW._NativePerformanceCounterHandles.delete(WW)) : mW.Warn(`Performance counter with name ${WW} was not started.`)
        }
      }
      static get Now() {
        return cW.d.Now
      }
      static GetClassName(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = null;
        if (!iW && WW.getClassName) OW = WW.getClassName();
        else {
          if (WW instanceof Object) {
            OW = (iW ? WW : Object.getPrototypeOf(WW)).constructor.__bjsclassName__
          }
          OW || (OW = typeof WW)
        }
        return OW
      }
      static First(WW, iW) {
        for (const OW of WW)
          if (iW(OW)) return OW;
        return null
      }
      static getFullClassName(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = null,
          mW = null;
        if (!iW && WW.getClassName) OW = WW.getClassName();
        else {
          if (WW instanceof Object) {
            const EW = iW ? WW : Object.getPrototypeOf(WW);
            OW = EW.constructor.__bjsclassName__, mW = EW.constructor.__bjsmoduleName__
          }
          OW || (OW = typeof WW)
        }
        return OW ? (null != mW ? mW + "." : "") + OW : null
      }
      static async DelayAsync(WW) {
        await new Promise((iW => {
          setTimeout((() => {
            iW()
          }), WW)
        }))
      }
      static IsSafari() {
        return !!(0, NW.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function kW(WW, iW) {
      return OW => {
        OW.__bjsclassName__ = WW, OW.__bjsmoduleName__ = null != iW ? iW : null
      }
    }
    mW = UW, UW.AssetBaseUrl = "", UW.UseCustomRequestHeaders = !1, UW.CustomRequestHeaders = tW.c.CustomRequestHeaders, UW.GetDOMTextContent = NW.c, UW._DefaultCdnUrl = "https://cdn.babylonjs.com", UW._CdnVersion = "9.28.0", UW._DefaultAssetsUrl = "https://assets.babylonjs.com/core", UW.LoadScript = "undefined" === typeof _native ? mW._LoadScriptWeb : mW._LoadScriptNative, UW.GetAbsoluteUrl = "object" === typeof document ? WW => {
      const iW = document.createElement("a");
      return iW.href = WW, iW.href
    } : "function" === typeof URL && "object" === typeof location ? WW => new URL(WW, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, UW.NoneLogLevel = PW.b.NoneLogLevel, UW.MessageLogLevel = PW.b.MessageLogLevel, UW.WarningLogLevel = PW.b.WarningLogLevel, UW.ErrorLogLevel = PW.b.ErrorLogLevel, UW.AllLogLevel = PW.b.AllLogLevel, UW.IsWindowObjectExist = NW.j, UW.PerformanceNoneLogLevel = 0, UW.PerformanceUserMarkLogLevel = 1, UW.PerformanceConsoleLogLevel = 2, UW._NativePerformanceCounterHandles = new Map, UW.StartPerformanceCounter = mW._StartPerformanceCounterDisabled, UW.EndPerformanceCounter = mW._EndPerformanceCounterDisabled;
    class sW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = WW, this.index = mW - 1, this._done = !1, this._fn = iW, this._successCallback = OW
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(WW, iW, OW) {
        const mW = new sW(WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return mW.executeNext(), mW
      }
      static SyncAsyncForLoop(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return sW.Run(Math.ceil(WW / iW), (mW => {
          EW && EW() ? mW.breakLoop() : setTimeout((() => {
            for (let NW = 0; NW < iW; ++NW) {
              const PW = mW.index * iW + NW;
              if (PW >= WW) break;
              if (OW(PW), EW && EW()) {
                mW.breakLoop();
                break
              }
            }
            mW.executeNext()
          }), NW)
        }), mW)
      }
    }
    let MW = !1;

    function KW() {
      MW || (MW = !0, UW.Mix = jW.j, UW.IsExponentOfTwo = jW.i, ZW.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);