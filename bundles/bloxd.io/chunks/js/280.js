export const id = 280;
export const ids = [280];
export const modules = {
  41344: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(39870),
      YV = xV(38318);
    class UV {
      static Instantiate(VV) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[VV]) return this.RegisteredExternalClasses[VV];
        const eV = (0, YV.c)(VV);
        if (eV) return eV;
        JV.b.Warn(VV + " not found, you may have missed an import.");
        const xV = VV.split(".");
        let UV = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let JV = 0, YV = xV.length; JV < YV; JV++) UV = UV[xV[JV]];
        return "function" !== typeof UV ? null : UV
      }
    }
    UV.RegisteredExternalClasses = {}
  },
  41154: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = xV(41122);
    class YV {
      static get Now() {
        return (0, JV.n)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41190: (VV, eV, xV) => {
    function JV(VV) {
      let eV = 1;
      do {
        eV *= 2
      } while (eV < VV);
      return eV === VV
    }

    function YV(VV, eV, xV) {
      return VV * (1 - xV) + eV * xV
    }

    function UV(VV) {
      const eV = yV(VV),
        xV = pV(VV);
      return eV - VV > VV - xV ? xV : eV
    }

    function yV(VV) {
      return VV--, VV |= VV >> 1, VV |= VV >> 2, VV |= VV >> 4, VV |= VV >> 8, VV |= VV >> 16, ++VV
    }

    function pV(VV) {
      return VV |= VV >> 1, VV |= VV >> 2, VV |= VV >> 4, VV |= VV >> 8, (VV |= VV >> 16) - (VV >> 1)
    }

    function QV(VV, eV) {
      let xV;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          xV = pV(VV);
          break;
        case 2:
          xV = UV(VV);
          break;
        default:
          xV = yV(VV)
      }
      return Math.min(xV, eV)
    }
    xV.d(eV, {
      e: () => pV,
      i: () => QV,
      k: () => JV,
      l: () => YV,
      o: () => UV
    })
  },
  41341: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => qV,
      g: () => FV,
      j: () => BV,
      l: () => jV
    });
    var JV, YV = xV(38296),
      UV = xV(41122),
      yV = xV(39870),
      pV = xV(39867),
      QV = xV(41154),
      nV = xV(41138),
      wV = xV(41309),
      ZV = xV(38287),
      vV = xV(41300),
      rV = xV(41145),
      kV = xV(41344),
      bV = xV(39058),
      EV = xV(41190);
    class BV {
      static get BaseUrl() {
        return vV.g.BaseUrl
      }
      static set BaseUrl(VV) {
        vV.g.BaseUrl = VV
      }
      static get CleanUrl() {
        return vV.g.CleanUrl
      }
      static set CleanUrl(VV) {
        vV.g.CleanUrl = VV
      }
      static IsAbsoluteUrl(VV) {
        return 0 === VV.indexOf("//") || -1 !== VV.indexOf("://") && (-1 !== VV.indexOf(".") && (-1 !== VV.indexOf("/") && (!(VV.indexOf(":") > VV.indexOf("/")) && (VV.indexOf("://") < VV.indexOf(".") || (0 === VV.indexOf("data:") || 0 === VV.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(VV) {
        vV.g.ScriptBaseUrl = VV
      }
      static get ScriptBaseUrl() {
        return vV.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(VV) {
        JV.ScriptBaseUrl = VV, JV.AssetBaseUrl = VV
      }
      static set ScriptPreprocessUrl(VV) {
        vV.g.ScriptPreprocessUrl = VV
      }
      static get ScriptPreprocessUrl() {
        return vV.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return vV.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(VV) {
        vV.g.DefaultRetryStrategy = VV
      }
      static get CorsBehavior() {
        return vV.g.CorsBehavior
      }
      static set CorsBehavior(VV) {
        vV.g.CorsBehavior = VV
      }
      static get UseFallbackTexture() {
        return ZV.d.UseFallbackTexture
      }
      static set UseFallbackTexture(VV) {
        ZV.d.UseFallbackTexture = VV
      }
      static get RegisteredExternalClasses() {
        return kV.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(VV) {
        kV.e.RegisteredExternalClasses = VV
      }
      static get fallbackTexture() {
        return ZV.d.FallbackTexture
      }
      static set fallbackTexture(VV) {
        ZV.d.FallbackTexture = VV
      }
      static FetchToRef(VV, eV, xV, JV, YV, UV) {
        const yV = 4 * ((Math.abs(VV) * xV % xV | 0) + (Math.abs(eV) * JV % JV | 0) * xV);
        UV.r = YV[yV] / 255, UV.g = YV[yV + 1] / 255, UV.b = YV[yV + 2] / 255, UV.a = YV[yV + 3] / 255
      }
      static Mix(VV, eV, xV) {
        return 0
      }
      static Instantiate(VV) {
        return kV.e.Instantiate(VV)
      }
      static SetImmediate(VV) {
        rV.b.SetImmediate(VV)
      }
      static IsExponentOfTwo(VV) {
        return !0
      }
      static FloatRound(VV) {
        return Math.fround(VV)
      }
      static GetFilename(VV) {
        const eV = VV.lastIndexOf("/");
        return eV < 0 ? VV : VV.substring(eV + 1)
      }
      static GetFolderPath(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = VV.lastIndexOf("/");
        return xV < 0 ? eV ? VV : "" : VV.substring(0, xV + 1)
      }
      static ToDegrees(VV) {
        return 180 * VV / Math.PI
      }
      static ToRadians(VV) {
        return VV * Math.PI / 180
      }
      static SmoothAngleChange(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const JV = this.ToRadians(VV),
          YV = this.ToRadians(eV);
        return this.ToDegrees(Math.atan2((1 - xV) * Math.sin(YV) + xV * Math.sin(JV), (1 - xV) * Math.cos(YV) + xV * Math.cos(JV)))
      }
      static MakeArray(VV, eV) {
        return !0 === eV || void 0 !== VV && null != VV ? Array.isArray(VV) ? VV : [VV] : null
      }
      static GetPointerPrefix(VV) {
        return (0, UV.n)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(VV, eV) {
        (0, vV.B)(VV, eV)
      }
      static SetReferrerPolicyBehavior(VV, eV) {
        eV.referrerPolicy = VV
      }
      static get PreprocessUrl() {
        return vV.g.PreprocessUrl
      }
      static set PreprocessUrl(VV) {
        vV.g.PreprocessUrl = VV
      }
      static LoadImage(VV, eV, xV, JV, YV, UV) {
        return (0, vV.r)(VV, eV, xV, JV, YV, UV)
      }
      static LoadFile(VV, eV, xV, JV, YV, UV) {
        return (0, vV.o)(VV, eV, xV, JV, YV, UV)
      }
      static async LoadFileAsync(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((xV, JV) => {
          (0, vV.o)(VV, (VV => {
            xV(VV)
          }), void 0, void 0, eV, ((VV, eV) => {
            JV(eV)
          }))
        }))
      }
      static GetAssetUrl(VV) {
        if (!VV) return "";
        if (JV.AssetBaseUrl && VV.startsWith(JV._DefaultAssetsUrl)) {
          const eV = JV.AssetBaseUrl.endsWith("/") ? JV.AssetBaseUrl.slice(0, -1) : JV.AssetBaseUrl;
          return VV.replace(JV._DefaultAssetsUrl, eV)
        }
        return VV
      }
      static GetBabylonScriptURL(VV, eV) {
        if (!VV) return "";
        if (VV.startsWith(JV._DefaultCdnUrl))
          if (JV.ScriptBaseUrl) {
            const eV = JV.ScriptBaseUrl.endsWith("/") ? JV.ScriptBaseUrl.slice(0, -1) : JV.ScriptBaseUrl;
            VV = VV.replace(JV._DefaultCdnUrl, eV)
          } else if (JV._CdnVersion) {
          const eV = `${JV._DefaultCdnUrl}/v${JV._CdnVersion}`;
          VV.startsWith(eV) || (VV = VV.replace(JV._DefaultCdnUrl, eV))
        }
        return VV = JV.ScriptPreprocessUrl(VV), eV && !JV.IsAbsoluteUrl(VV) && (VV = JV.GetAbsoluteUrl(VV)), VV
      }
      static LoadBabylonScript(VV, eV, xV, YV) {
        VV = JV.GetBabylonScriptURL(VV), JV.LoadScript(VV, eV, xV)
      }
      static async LoadBabylonScriptAsync(VV) {
        return VV = JV.GetBabylonScriptURL(VV), await JV.LoadScriptAsync(VV)
      }
      static _LoadScriptNative(VV, eV, xV, YV) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const VV = "Loading a script as an ES module is not supported in Babylon Native";
            return void xV?.(VV, new Error(VV))
          }
          JV.LoadFile(VV, (VV => {
            try {
              Function(VV).apply(null), eV && eV()
            } catch (JV) {
              xV && xV("LoadScript Error", JV)
            }
          }), void 0, void 0, !1, ((VV, eV) => {
            xV && xV("LoadScript Error", eV)
          }))
        }
      }
      static _LoadScriptWeb(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(VV), eV && eV()
          } catch (QV) {
            xV?.(`Unable to load script '${VV}' in worker`, QV)
          }
          return
        }
        if (!(0, UV.n)()) return void xV?.(`Cannot load script '${VV}' outside of a window or a worker`);
        const yV = document.getElementsByTagName("head")[0],
          pV = document.createElement("script");
        YV ? (pV.setAttribute("type", "module"), pV.innerText = VV) : (pV.setAttribute("type", "text/javascript"), pV.setAttribute("src", VV)), JV && (pV.id = JV), pV.onload = () => {
          eV && eV()
        }, pV.onerror = eV => {
          xV && xV(`Unable to load script '${VV}'`, eV)
        }, yV.appendChild(pV)
      }
      static async LoadScriptAsync(VV, eV) {
        return await new Promise(((xV, JV) => {
          this.LoadScript(VV, (() => {
            xV()
          }), ((VV, eV) => {
            JV(eV || new Error(VV))
          }), eV)
        }))
      }
      static ReadFileAsDataURL(VV, eV, xV) {
        const JV = new FileReader,
          UV = {
            onCompleteObservable: new YV.c,
            abort: () => JV.abort()
          };
        return JV.onloadend = () => {
          UV.onCompleteObservable.notifyObservers(UV)
        }, JV.onload = VV => {
          eV(VV.target.result)
        }, JV.onprogress = xV, JV.readAsDataURL(VV), UV
      }
      static ReadFile(VV, eV, xV, JV, YV) {
        return (0, vV.v)(VV, eV, xV, JV, YV)
      }
      static FileAsURL(VV) {
        const eV = new Blob([VV]);
        return window.URL.createObjectURL(eV)
      }
      static Format(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return VV.toFixed(eV)
      }
      static DeepCopy(VV, eV, xV, JV) {
        pV.d.DeepCopy(VV, eV, xV, JV)
      }
      static IsEmpty(VV) {
        for (const eV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, eV)) return !1;
        return !0
      }
      static RegisterTopRootEvents(VV, eV) {
        for (let JV = 0; JV < eV.length; JV++) {
          const YV = eV[JV];
          VV.addEventListener(YV.name, YV.handler, !1);
          try {
            window.parent && window.parent.addEventListener(YV.name, YV.handler, !1)
          } catch (xV) {}
        }
      }
      static UnregisterTopRootEvents(VV, eV) {
        for (let JV = 0; JV < eV.length; JV++) {
          const YV = eV[JV];
          VV.removeEventListener(YV.name, YV.handler);
          try {
            VV.parent && VV.parent.removeEventListener(YV.name, YV.handler)
          } catch (xV) {}
        }
      }
      static async DumpFramebuffer(VV, eV, xV, JV) {
        throw (0, nV.n)("DumpTools")
      }
      static DumpData(VV, eV, xV, JV) {
        throw (0, nV.n)("DumpTools")
      }
      static async DumpDataAsync(VV, eV, xV) {
        throw (0, nV.n)("DumpTools")
      }
      static _IsOffScreenCanvas(VV) {
        return void 0 !== VV.convertToBlob
      }
      static ToBlob(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          YV = arguments.length > 3 ? arguments[3] : void 0;
        JV._IsOffScreenCanvas(VV) || VV.toBlob || (VV.toBlob = function(VV, eV, xV) {
          setTimeout((() => {
            const JV = atob(this.toDataURL(eV, xV).split(",")[1]),
              YV = JV.length,
              UV = new Uint8Array(YV);
            for (let VV = 0; VV < YV; VV++) UV[VV] = JV.charCodeAt(VV);
            VV(new Blob([UV]))
          }))
        }), JV._IsOffScreenCanvas(VV) ? VV.convertToBlob({
          type: xV,
          quality: YV
        }).then((VV => eV(VV))) : VV.toBlob((function(VV) {
          eV(VV)
        }), xV, YV)
      }
      static DownloadBlob(VV, eV) {
        if ("download" in document.createElement("a")) {
          if (!eV) {
            const VV = new Date;
            eV = "screenshot_" + ((VV.getFullYear() + "-" + (VV.getMonth() + 1)).slice(2) + "-" + VV.getDate() + "_" + VV.getHours() + "-" + ("0" + VV.getMinutes()).slice(-2)) + ".png"
          }
          JV.Download(VV, eV)
        } else if (VV && "undefined" !== typeof URL) {
          const eV = URL.createObjectURL(VV),
            xV = window.open("");
          if (!xV) return;
          const JV = xV.document.createElement("img");
          JV.onload = function() {
            URL.revokeObjectURL(eV)
          }, JV.src = eV, xV.document.body.appendChild(JV)
        }
      }
      static EncodeScreenshotCanvasData(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          YV = arguments.length > 3 ? arguments[3] : void 0,
          UV = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof YV && eV) {
          if (eV) {
            if (JV._IsOffScreenCanvas(VV)) return void VV.convertToBlob({
              type: xV,
              quality: UV
            }).then((VV => {
              const xV = new FileReader;
              xV.readAsDataURL(VV), xV.onloadend = () => {
                const VV = xV.result;
                eV(VV)
              }
            }));
            const YV = VV.toDataURL(xV, UV);
            eV(YV)
          }
        } else this.ToBlob(VV, (function(VV) {
          VV && JV.DownloadBlob(VV, YV), eV && eV("")
        }), xV, UV)
      }
      static Download(VV, eV) {
        if ("undefined" === typeof URL) return;
        const xV = window.URL.createObjectURL(VV),
          JV = document.createElement("a");
        document.body.appendChild(JV), JV.style.display = "none", JV.href = xV, JV.download = eV, JV.addEventListener("click", (() => {
          JV.parentElement && JV.parentElement.removeChild(JV)
        })), JV.click(), window.URL.revokeObjectURL(xV)
      }
      static BackCompatCameraNoPreventDefault(VV) {
        return "boolean" === typeof VV[0] ? VV[0] : "boolean" === typeof VV[1] && VV[1]
      }
      static CreateScreenshot(VV, eV, xV, JV) {
        throw (0, nV.n)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(VV, eV, xV) {
        throw (0, nV.n)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(VV, eV, xV, JV) {
        throw (0, nV.n)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(VV, eV, xV) {
        throw (0, nV.n)("ScreenshotTools")
      }
      static RandomId() {
        return (0, bV.d)()
      }
      static IsBase64(VV) {
        return (0, vV.k)(VV)
      }
      static DecodeBase64(VV) {
        return (0, vV.d)(VV)
      }
      static get errorsCount() {
        return yV.b.errorsCount
      }
      static Log(VV) {
        yV.b.Log(VV)
      }
      static Warn(VV) {
        yV.b.Warn(VV)
      }
      static Error(VV) {
        yV.b.Error(VV)
      }
      static get LogCache() {
        return yV.b.LogCache
      }
      static ClearLogCache() {
        yV.b.ClearLogCache()
      }
      static set LogLevels(VV) {
        yV.b.LogLevels = VV
      }
      static set PerformanceLogLevel(VV) {
        (VV & JV.PerformanceUserMarkLogLevel) !== JV.PerformanceUserMarkLogLevel ? (VV & JV.PerformanceConsoleLogLevel) !== JV.PerformanceConsoleLogLevel ? (JV.StartPerformanceCounter = JV._StartPerformanceCounterDisabled, JV.EndPerformanceCounter = JV._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), JV.StartPerformanceCounter = JV._StartMarkNative, JV.EndPerformanceCounter = JV._EndMarkNative) : (JV.StartPerformanceCounter = JV._StartPerformanceConsole, JV.EndPerformanceCounter = JV._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), JV.StartPerformanceCounter = JV._StartMarkNative, JV.EndPerformanceCounter = JV._EndMarkNative) : (JV.StartPerformanceCounter = JV._StartUserMark, JV.EndPerformanceCounter = JV._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(VV, eV) {}
      static _EndPerformanceCounterDisabled(VV, eV) {}
      static _StartUserMark(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!JV._Performance) {
          if (!(0, UV.n)()) return;
          JV._Performance = window.performance
        }
        eV && JV._Performance.mark && JV._Performance.mark(VV + "-Begin")
      }
      static _EndUserMark(VV) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && JV._Performance.mark && (JV._Performance.mark(VV + "-End"), JV._Performance.measure(VV, VV + "-Begin", VV + "-End"))
      }
      static _StartPerformanceConsole(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        eV && (JV._StartUserMark(VV, eV), console.time && console.time(VV))
      }
      static _EndPerformanceConsole(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        eV && (JV._EndUserMark(VV, eV), console.timeEnd(VV))
      }
      static _StartMarkNative(VV) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (JV._NativePerformanceCounterHandles.has(VV)) JV.Warn(`Performance counter with name ${VV} is already started.`);
          else {
            const eV = _native.startPerformanceCounter(VV);
            JV._NativePerformanceCounterHandles.set(VV, eV)
          }
      }
      static _EndMarkNative(VV) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const eV = JV._NativePerformanceCounterHandles.get(VV);
          eV ? (_native.endPerformanceCounter(eV), JV._NativePerformanceCounterHandles.delete(VV)) : JV.Warn(`Performance counter with name ${VV} was not started.`)
        }
      }
      static get Now() {
        return QV.b.Now
      }
      static GetClassName(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = null;
        if (!eV && VV.getClassName) xV = VV.getClassName();
        else {
          if (VV instanceof Object) {
            xV = (eV ? VV : Object.getPrototypeOf(VV)).constructor.__bjsclassName__
          }
          xV || (xV = typeof VV)
        }
        return xV
      }
      static First(VV, eV) {
        for (const xV of VV)
          if (eV(xV)) return xV;
        return null
      }
      static getFullClassName(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = null,
          JV = null;
        if (!eV && VV.getClassName) xV = VV.getClassName();
        else {
          if (VV instanceof Object) {
            const YV = eV ? VV : Object.getPrototypeOf(VV);
            xV = YV.constructor.__bjsclassName__, JV = YV.constructor.__bjsmoduleName__
          }
          xV || (xV = typeof VV)
        }
        return xV ? (null != JV ? JV + "." : "") + xV : null
      }
      static async DelayAsync(VV) {
        await new Promise((eV => {
          setTimeout((() => {
            eV()
          }), VV)
        }))
      }
      static IsSafari() {
        return !!(0, UV.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function jV(VV, eV) {
      return xV => {
        xV.__bjsclassName__ = VV, xV.__bjsmoduleName__ = null != eV ? eV : null
      }
    }
    JV = BV, BV.AssetBaseUrl = "", BV.UseCustomRequestHeaders = !1, BV.CustomRequestHeaders = wV.d.CustomRequestHeaders, BV.GetDOMTextContent = UV.b, BV._DefaultCdnUrl = "https://cdn.babylonjs.com", BV._CdnVersion = "9.28.0", BV._DefaultAssetsUrl = "https://assets.babylonjs.com/core", BV.LoadScript = "undefined" === typeof _native ? JV._LoadScriptWeb : JV._LoadScriptNative, BV.GetAbsoluteUrl = "object" === typeof document ? VV => {
      const eV = document.createElement("a");
      return eV.href = VV, eV.href
    } : "function" === typeof URL && "object" === typeof location ? VV => new URL(VV, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, BV.NoneLogLevel = yV.b.NoneLogLevel, BV.MessageLogLevel = yV.b.MessageLogLevel, BV.WarningLogLevel = yV.b.WarningLogLevel, BV.ErrorLogLevel = yV.b.ErrorLogLevel, BV.AllLogLevel = yV.b.AllLogLevel, BV.IsWindowObjectExist = UV.n, BV.PerformanceNoneLogLevel = 0, BV.PerformanceUserMarkLogLevel = 1, BV.PerformanceConsoleLogLevel = 2, BV._NativePerformanceCounterHandles = new Map, BV.StartPerformanceCounter = JV._StartPerformanceCounterDisabled, BV.EndPerformanceCounter = JV._EndPerformanceCounterDisabled;
    class qV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = VV, this.index = JV - 1, this._done = !1, this._fn = eV, this._successCallback = xV
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(VV, eV, xV) {
        const JV = new qV(VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return JV.executeNext(), JV
      }
      static SyncAsyncForLoop(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return qV.Run(Math.ceil(VV / eV), (JV => {
          YV && YV() ? JV.breakLoop() : setTimeout((() => {
            for (let UV = 0; UV < eV; ++UV) {
              const yV = JV.index * eV + UV;
              if (yV >= VV) break;
              if (xV(yV), YV && YV()) {
                JV.breakLoop();
                break
              }
            }
            JV.executeNext()
          }), UV)
        }), JV)
      }
    }
    let tV = !1;

    function FV() {
      tV || (tV = !0, BV.Mix = EV.l, BV.IsExponentOfTwo = EV.k, ZV.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);