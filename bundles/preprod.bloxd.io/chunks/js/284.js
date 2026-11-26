export const id = 284;
export const ids = [284];
export const modules = {
  41392: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(39595),
      rH = LH(38012);
    class SH {
      static Instantiate(HH) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[HH]) return this.RegisteredExternalClasses[HH];
        const BH = (0, rH.b)(HH);
        if (BH) return BH;
        AH.e.Warn(HH + " not found, you may have missed an import.");
        const LH = HH.split(".");
        let SH = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let AH = 0, rH = LH.length; AH < rH; AH++) SH = SH[LH[AH]];
        return "function" !== typeof SH ? null : SH
      }
    }
    SH.RegisteredExternalClasses = {}
  },
  41190: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(41154);
    class rH {
      static get Now() {
        return (0, AH.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41222: (HH, BH, LH) => {
    function AH(HH) {
      let BH = 1;
      do {
        BH *= 2
      } while (BH < HH);
      return BH === HH
    }

    function rH(HH, BH, LH) {
      return HH * (1 - LH) + BH * LH
    }

    function SH(HH) {
      const BH = hH(HH),
        LH = tH(HH);
      return BH - HH > HH - LH ? LH : BH
    }

    function hH(HH) {
      return HH--, HH |= HH >> 1, HH |= HH >> 2, HH |= HH >> 4, HH |= HH >> 8, HH |= HH >> 16, ++HH
    }

    function tH(HH) {
      return HH |= HH >> 1, HH |= HH >> 2, HH |= HH >> 4, HH |= HH >> 8, (HH |= HH >> 16) - (HH >> 1)
    }

    function zH(HH, BH) {
      let LH;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          LH = tH(HH);
          break;
        case 2:
          LH = SH(HH);
          break;
        default:
          LH = hH(HH)
      }
      return Math.min(LH, BH)
    }
    LH.d(BH, {
      b: () => tH,
      c: () => zH,
      g: () => AH,
      k: () => rH,
      m: () => SH
    })
  },
  41387: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => vH,
      f: () => TH,
      i: () => MH,
      j: () => xH
    });
    var AH, rH = LH(37997),
      SH = LH(41154),
      hH = LH(39595),
      tH = LH(39588),
      zH = LH(41190),
      CH = LH(41169),
      EH = LH(41339),
      XH = LH(37989),
      GH = LH(41336),
      YH = LH(41179),
      uH = LH(41392),
      QH = LH(38790),
      WH = LH(41222);
    class MH {
      static get BaseUrl() {
        return GH.h.BaseUrl
      }
      static set BaseUrl(HH) {
        GH.h.BaseUrl = HH
      }
      static get CleanUrl() {
        return GH.h.CleanUrl
      }
      static set CleanUrl(HH) {
        GH.h.CleanUrl = HH
      }
      static IsAbsoluteUrl(HH) {
        return 0 === HH.indexOf("//") || -1 !== HH.indexOf("://") && (-1 !== HH.indexOf(".") && (-1 !== HH.indexOf("/") && (!(HH.indexOf(":") > HH.indexOf("/")) && (HH.indexOf("://") < HH.indexOf(".") || (0 === HH.indexOf("data:") || 0 === HH.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(HH) {
        GH.h.ScriptBaseUrl = HH
      }
      static get ScriptBaseUrl() {
        return GH.h.ScriptBaseUrl
      }
      static set CDNBaseUrl(HH) {
        AH.ScriptBaseUrl = HH, AH.AssetBaseUrl = HH
      }
      static set ScriptPreprocessUrl(HH) {
        GH.h.ScriptPreprocessUrl = HH
      }
      static get ScriptPreprocessUrl() {
        return GH.h.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return GH.h.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(HH) {
        GH.h.DefaultRetryStrategy = HH
      }
      static get CorsBehavior() {
        return GH.h.CorsBehavior
      }
      static set CorsBehavior(HH) {
        GH.h.CorsBehavior = HH
      }
      static get UseFallbackTexture() {
        return XH.d.UseFallbackTexture
      }
      static set UseFallbackTexture(HH) {
        XH.d.UseFallbackTexture = HH
      }
      static get RegisteredExternalClasses() {
        return uH.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(HH) {
        uH.c.RegisteredExternalClasses = HH
      }
      static get fallbackTexture() {
        return XH.d.FallbackTexture
      }
      static set fallbackTexture(HH) {
        XH.d.FallbackTexture = HH
      }
      static FetchToRef(HH, BH, LH, AH, rH, SH) {
        const hH = 4 * ((Math.abs(HH) * LH % LH | 0) + (Math.abs(BH) * AH % AH | 0) * LH);
        SH.r = rH[hH] / 255, SH.g = rH[hH + 1] / 255, SH.b = rH[hH + 2] / 255, SH.a = rH[hH + 3] / 255
      }
      static Mix(HH, BH, LH) {
        return 0
      }
      static Instantiate(HH) {
        return uH.c.Instantiate(HH)
      }
      static SetImmediate(HH) {
        YH.d.SetImmediate(HH)
      }
      static IsExponentOfTwo(HH) {
        return !0
      }
      static FloatRound(HH) {
        return Math.fround(HH)
      }
      static GetFilename(HH) {
        const BH = HH.lastIndexOf("/");
        return BH < 0 ? HH : HH.substring(BH + 1)
      }
      static GetFolderPath(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = HH.lastIndexOf("/");
        return LH < 0 ? BH ? HH : "" : HH.substring(0, LH + 1)
      }
      static ToDegrees(HH) {
        return 180 * HH / Math.PI
      }
      static ToRadians(HH) {
        return HH * Math.PI / 180
      }
      static SmoothAngleChange(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const AH = this.ToRadians(HH),
          rH = this.ToRadians(BH);
        return this.ToDegrees(Math.atan2((1 - LH) * Math.sin(rH) + LH * Math.sin(AH), (1 - LH) * Math.cos(rH) + LH * Math.cos(AH)))
      }
      static MakeArray(HH, BH) {
        return !0 === BH || void 0 !== HH && null != HH ? Array.isArray(HH) ? HH : [HH] : null
      }
      static GetPointerPrefix(HH) {
        return (0, SH.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(HH, BH) {
        (0, GH.s)(HH, BH)
      }
      static SetReferrerPolicyBehavior(HH, BH) {
        BH.referrerPolicy = HH
      }
      static get PreprocessUrl() {
        return GH.h.PreprocessUrl
      }
      static set PreprocessUrl(HH) {
        GH.h.PreprocessUrl = HH
      }
      static LoadImage(HH, BH, LH, AH, rH, SH) {
        return (0, GH.m)(HH, BH, LH, AH, rH, SH)
      }
      static LoadFile(HH, BH, LH, AH, rH, SH) {
        return (0, GH.l)(HH, BH, LH, AH, rH, SH)
      }
      static async LoadFileAsync(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((LH, AH) => {
          (0, GH.l)(HH, (HH => {
            LH(HH)
          }), void 0, void 0, BH, ((HH, BH) => {
            AH(BH)
          }))
        }))
      }
      static GetAssetUrl(HH) {
        if (!HH) return "";
        if (AH.AssetBaseUrl && HH.startsWith(AH._DefaultAssetsUrl)) {
          const BH = AH.AssetBaseUrl.endsWith("/") ? AH.AssetBaseUrl.slice(0, -1) : AH.AssetBaseUrl;
          return HH.replace(AH._DefaultAssetsUrl, BH)
        }
        return HH
      }
      static GetBabylonScriptURL(HH, BH) {
        if (!HH) return "";
        if (HH.startsWith(AH._DefaultCdnUrl))
          if (AH.ScriptBaseUrl) {
            const BH = AH.ScriptBaseUrl.endsWith("/") ? AH.ScriptBaseUrl.slice(0, -1) : AH.ScriptBaseUrl;
            HH = HH.replace(AH._DefaultCdnUrl, BH)
          } else if (AH._CdnVersion) {
          const BH = `${AH._DefaultCdnUrl}/v${AH._CdnVersion}`;
          HH.startsWith(BH) || (HH = HH.replace(AH._DefaultCdnUrl, BH))
        }
        return HH = AH.ScriptPreprocessUrl(HH), BH && !AH.IsAbsoluteUrl(HH) && (HH = AH.GetAbsoluteUrl(HH)), HH
      }
      static LoadBabylonScript(HH, BH, LH, rH) {
        HH = AH.GetBabylonScriptURL(HH), AH.LoadScript(HH, BH, LH)
      }
      static async LoadBabylonScriptAsync(HH) {
        return HH = AH.GetBabylonScriptURL(HH), await AH.LoadScriptAsync(HH)
      }
      static _LoadScriptNative(HH, BH, LH, rH) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const HH = "Loading a script as an ES module is not supported in Babylon Native";
            return void LH?.(HH, new Error(HH))
          }
          AH.LoadFile(HH, (HH => {
            try {
              Function(HH).apply(null), BH && BH()
            } catch (AH) {
              LH && LH("LoadScript Error", AH)
            }
          }), void 0, void 0, !1, ((HH, BH) => {
            LH && LH("LoadScript Error", BH)
          }))
        }
      }
      static _LoadScriptWeb(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(HH), BH && BH()
          } catch (zH) {
            LH?.(`Unable to load script '${HH}' in worker`, zH)
          }
          return
        }
        if (!(0, SH.k)()) return void LH?.(`Cannot load script '${HH}' outside of a window or a worker`);
        const hH = document.getElementsByTagName("head")[0],
          tH = document.createElement("script");
        rH ? (tH.setAttribute("type", "module"), tH.innerText = HH) : (tH.setAttribute("type", "text/javascript"), tH.setAttribute("src", HH)), AH && (tH.id = AH), tH.onload = () => {
          BH && BH()
        }, tH.onerror = BH => {
          LH && LH(`Unable to load script '${HH}'`, BH)
        }, hH.appendChild(tH)
      }
      static async LoadScriptAsync(HH, BH) {
        return await new Promise(((LH, AH) => {
          this.LoadScript(HH, (() => {
            LH()
          }), ((HH, BH) => {
            AH(BH || new Error(HH))
          }), BH)
        }))
      }
      static ReadFileAsDataURL(HH, BH, LH) {
        const AH = new FileReader,
          SH = {
            onCompleteObservable: new rH.d,
            abort: () => AH.abort()
          };
        return AH.onloadend = () => {
          SH.onCompleteObservable.notifyObservers(SH)
        }, AH.onload = HH => {
          BH(HH.target.result)
        }, AH.onprogress = LH, AH.readAsDataURL(HH), SH
      }
      static ReadFile(HH, BH, LH, AH, rH) {
        return (0, GH.n)(HH, BH, LH, AH, rH)
      }
      static FileAsURL(HH) {
        const BH = new Blob([HH]);
        return window.URL.createObjectURL(BH)
      }
      static Format(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return HH.toFixed(BH)
      }
      static DeepCopy(HH, BH, LH, AH) {
        tH.d.DeepCopy(HH, BH, LH, AH)
      }
      static IsEmpty(HH) {
        for (const BH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, BH)) return !1;
        return !0
      }
      static RegisterTopRootEvents(HH, BH) {
        for (let AH = 0; AH < BH.length; AH++) {
          const rH = BH[AH];
          HH.addEventListener(rH.name, rH.handler, !1);
          try {
            window.parent && window.parent.addEventListener(rH.name, rH.handler, !1)
          } catch (LH) {}
        }
      }
      static UnregisterTopRootEvents(HH, BH) {
        for (let AH = 0; AH < BH.length; AH++) {
          const rH = BH[AH];
          HH.removeEventListener(rH.name, rH.handler);
          try {
            HH.parent && HH.parent.removeEventListener(rH.name, rH.handler)
          } catch (LH) {}
        }
      }
      static async DumpFramebuffer(HH, BH, LH, AH) {
        throw (0, CH.i)("DumpTools")
      }
      static DumpData(HH, BH, LH, AH) {
        throw (0, CH.i)("DumpTools")
      }
      static async DumpDataAsync(HH, BH, LH) {
        throw (0, CH.i)("DumpTools")
      }
      static _IsOffScreenCanvas(HH) {
        return void 0 !== HH.convertToBlob
      }
      static ToBlob(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          rH = arguments.length > 3 ? arguments[3] : void 0;
        AH._IsOffScreenCanvas(HH) || HH.toBlob || (HH.toBlob = function(HH, BH, LH) {
          setTimeout((() => {
            const AH = atob(this.toDataURL(BH, LH).split(",")[1]),
              rH = AH.length,
              SH = new Uint8Array(rH);
            for (let HH = 0; HH < rH; HH++) SH[HH] = AH.charCodeAt(HH);
            HH(new Blob([SH]))
          }))
        }), AH._IsOffScreenCanvas(HH) ? HH.convertToBlob({
          type: LH,
          quality: rH
        }).then((HH => BH(HH))) : HH.toBlob((function(HH) {
          BH(HH)
        }), LH, rH)
      }
      static DownloadBlob(HH, BH) {
        if ("download" in document.createElement("a")) {
          if (!BH) {
            const HH = new Date;
            BH = "screenshot_" + ((HH.getFullYear() + "-" + (HH.getMonth() + 1)).slice(2) + "-" + HH.getDate() + "_" + HH.getHours() + "-" + ("0" + HH.getMinutes()).slice(-2)) + ".png"
          }
          AH.Download(HH, BH)
        } else if (HH && "undefined" !== typeof URL) {
          const BH = URL.createObjectURL(HH),
            LH = window.open("");
          if (!LH) return;
          const AH = LH.document.createElement("img");
          AH.onload = function() {
            URL.revokeObjectURL(BH)
          }, AH.src = BH, LH.document.body.appendChild(AH)
        }
      }
      static EncodeScreenshotCanvasData(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          rH = arguments.length > 3 ? arguments[3] : void 0,
          SH = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof rH && BH) {
          if (BH) {
            if (AH._IsOffScreenCanvas(HH)) return void HH.convertToBlob({
              type: LH,
              quality: SH
            }).then((HH => {
              const LH = new FileReader;
              LH.readAsDataURL(HH), LH.onloadend = () => {
                const HH = LH.result;
                BH(HH)
              }
            }));
            const rH = HH.toDataURL(LH, SH);
            BH(rH)
          }
        } else this.ToBlob(HH, (function(HH) {
          HH && AH.DownloadBlob(HH, rH), BH && BH("")
        }), LH, SH)
      }
      static Download(HH, BH) {
        if ("undefined" === typeof URL) return;
        const LH = window.URL.createObjectURL(HH),
          AH = document.createElement("a");
        document.body.appendChild(AH), AH.style.display = "none", AH.href = LH, AH.download = BH, AH.addEventListener("click", (() => {
          AH.parentElement && AH.parentElement.removeChild(AH)
        })), AH.click(), window.URL.revokeObjectURL(LH)
      }
      static BackCompatCameraNoPreventDefault(HH) {
        return "boolean" === typeof HH[0] ? HH[0] : "boolean" === typeof HH[1] && HH[1]
      }
      static CreateScreenshot(HH, BH, LH, AH) {
        throw (0, CH.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(HH, BH, LH) {
        throw (0, CH.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(HH, BH, LH, AH) {
        throw (0, CH.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(HH, BH, LH) {
        throw (0, CH.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, QH.e)()
      }
      static IsBase64(HH) {
        return (0, GH.k)(HH)
      }
      static DecodeBase64(HH) {
        return (0, GH.d)(HH)
      }
      static get errorsCount() {
        return hH.e.errorsCount
      }
      static Log(HH) {
        hH.e.Log(HH)
      }
      static Warn(HH) {
        hH.e.Warn(HH)
      }
      static Error(HH) {
        hH.e.Error(HH)
      }
      static get LogCache() {
        return hH.e.LogCache
      }
      static ClearLogCache() {
        hH.e.ClearLogCache()
      }
      static set LogLevels(HH) {
        hH.e.LogLevels = HH
      }
      static set PerformanceLogLevel(HH) {
        (HH & AH.PerformanceUserMarkLogLevel) !== AH.PerformanceUserMarkLogLevel ? (HH & AH.PerformanceConsoleLogLevel) !== AH.PerformanceConsoleLogLevel ? (AH.StartPerformanceCounter = AH._StartPerformanceCounterDisabled, AH.EndPerformanceCounter = AH._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), AH.StartPerformanceCounter = AH._StartMarkNative, AH.EndPerformanceCounter = AH._EndMarkNative) : (AH.StartPerformanceCounter = AH._StartPerformanceConsole, AH.EndPerformanceCounter = AH._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), AH.StartPerformanceCounter = AH._StartMarkNative, AH.EndPerformanceCounter = AH._EndMarkNative) : (AH.StartPerformanceCounter = AH._StartUserMark, AH.EndPerformanceCounter = AH._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(HH, BH) {}
      static _EndPerformanceCounterDisabled(HH, BH) {}
      static _StartUserMark(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!AH._Performance) {
          if (!(0, SH.k)()) return;
          AH._Performance = window.performance
        }
        BH && AH._Performance.mark && AH._Performance.mark(HH + "-Begin")
      }
      static _EndUserMark(HH) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && AH._Performance.mark && (AH._Performance.mark(HH + "-End"), AH._Performance.measure(HH, HH + "-Begin", HH + "-End"))
      }
      static _StartPerformanceConsole(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        BH && (AH._StartUserMark(HH, BH), console.time && console.time(HH))
      }
      static _EndPerformanceConsole(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        BH && (AH._EndUserMark(HH, BH), console.timeEnd(HH))
      }
      static _StartMarkNative(HH) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (AH._NativePerformanceCounterHandles.has(HH)) AH.Warn(`Performance counter with name ${HH} is already started.`);
          else {
            const BH = _native.startPerformanceCounter(HH);
            AH._NativePerformanceCounterHandles.set(HH, BH)
          }
      }
      static _EndMarkNative(HH) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const BH = AH._NativePerformanceCounterHandles.get(HH);
          BH ? (_native.endPerformanceCounter(BH), AH._NativePerformanceCounterHandles.delete(HH)) : AH.Warn(`Performance counter with name ${HH} was not started.`)
        }
      }
      static get Now() {
        return zH.e.Now
      }
      static GetClassName(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = null;
        if (!BH && HH.getClassName) LH = HH.getClassName();
        else {
          if (HH instanceof Object) {
            LH = (BH ? HH : Object.getPrototypeOf(HH)).constructor.__bjsclassName__
          }
          LH || (LH = typeof HH)
        }
        return LH
      }
      static First(HH, BH) {
        for (const LH of HH)
          if (BH(LH)) return LH;
        return null
      }
      static getFullClassName(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = null,
          AH = null;
        if (!BH && HH.getClassName) LH = HH.getClassName();
        else {
          if (HH instanceof Object) {
            const rH = BH ? HH : Object.getPrototypeOf(HH);
            LH = rH.constructor.__bjsclassName__, AH = rH.constructor.__bjsmoduleName__
          }
          LH || (LH = typeof HH)
        }
        return LH ? (null != AH ? AH + "." : "") + LH : null
      }
      static async DelayAsync(HH) {
        await new Promise((BH => {
          setTimeout((() => {
            BH()
          }), HH)
        }))
      }
      static IsSafari() {
        return !!(0, SH.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function xH(HH, BH) {
      return LH => {
        LH.__bjsclassName__ = HH, LH.__bjsmoduleName__ = null != BH ? BH : null
      }
    }
    AH = MH, MH.AssetBaseUrl = "", MH.UseCustomRequestHeaders = !1, MH.CustomRequestHeaders = EH.d.CustomRequestHeaders, MH.GetDOMTextContent = SH.c, MH._DefaultCdnUrl = "https://cdn.babylonjs.com", MH._CdnVersion = "9.28.0", MH._DefaultAssetsUrl = "https://assets.babylonjs.com/core", MH.LoadScript = "undefined" === typeof _native ? AH._LoadScriptWeb : AH._LoadScriptNative, MH.GetAbsoluteUrl = "object" === typeof document ? HH => {
      const BH = document.createElement("a");
      return BH.href = HH, BH.href
    } : "function" === typeof URL && "object" === typeof location ? HH => new URL(HH, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, MH.NoneLogLevel = hH.e.NoneLogLevel, MH.MessageLogLevel = hH.e.MessageLogLevel, MH.WarningLogLevel = hH.e.WarningLogLevel, MH.ErrorLogLevel = hH.e.ErrorLogLevel, MH.AllLogLevel = hH.e.AllLogLevel, MH.IsWindowObjectExist = SH.k, MH.PerformanceNoneLogLevel = 0, MH.PerformanceUserMarkLogLevel = 1, MH.PerformanceConsoleLogLevel = 2, MH._NativePerformanceCounterHandles = new Map, MH.StartPerformanceCounter = AH._StartPerformanceCounterDisabled, MH.EndPerformanceCounter = AH._EndPerformanceCounterDisabled;
    class vH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = HH, this.index = AH - 1, this._done = !1, this._fn = BH, this._successCallback = LH
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(HH, BH, LH) {
        const AH = new vH(HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return AH.executeNext(), AH
      }
      static SyncAsyncForLoop(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return vH.Run(Math.ceil(HH / BH), (AH => {
          rH && rH() ? AH.breakLoop() : setTimeout((() => {
            for (let SH = 0; SH < BH; ++SH) {
              const hH = AH.index * BH + SH;
              if (hH >= HH) break;
              if (LH(hH), rH && rH()) {
                AH.breakLoop();
                break
              }
            }
            AH.executeNext()
          }), SH)
        }), AH)
      }
    }
    let PH = !1;

    function TH() {
      PH || (PH = !0, MH.Mix = WH.k, MH.IsExponentOfTwo = WH.g, XH.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);