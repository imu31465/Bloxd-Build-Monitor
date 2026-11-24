export const id = 255;
export const ids = [255];
export const modules = {
  40136: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(38687),
      bS = gS(37164);
    class XS {
      static Instantiate(SS) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[SS]) return this.RegisteredExternalClasses[SS];
        const HS = (0, bS.d)(SS);
        if (HS) return HS;
        tS.b.Warn(SS + " not found, you may have missed an import.");
        const gS = SS.split(".");
        let XS = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let tS = 0, bS = gS.length; tS < bS; tS++) XS = XS[gS[tS]];
        return "function" !== typeof XS ? null : XS
      }
    }
    XS.RegisteredExternalClasses = {}
  },
  39946: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(39913);
    class bS {
      static get Now() {
        return (0, tS.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39968: (SS, HS, gS) => {
    function tS(SS) {
      let HS = 1;
      do {
        HS *= 2
      } while (HS < SS);
      return HS === SS
    }

    function bS(SS, HS, gS) {
      return SS * (1 - gS) + HS * gS
    }

    function XS(SS) {
      const HS = xS(SS),
        gS = NS(SS);
      return HS - SS > SS - gS ? gS : HS
    }

    function xS(SS) {
      return SS--, SS |= SS >> 1, SS |= SS >> 2, SS |= SS >> 4, SS |= SS >> 8, SS |= SS >> 16, ++SS
    }

    function NS(SS) {
      return SS |= SS >> 1, SS |= SS >> 2, SS |= SS >> 4, SS |= SS >> 8, (SS |= SS >> 16) - (SS >> 1)
    }

    function qS(SS, HS) {
      let gS;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          gS = NS(SS);
          break;
        case 2:
          gS = XS(SS);
          break;
        default:
          gS = xS(SS)
      }
      return Math.min(gS, HS)
    }
    gS.d(HS, {
      e: () => NS,
      g: () => qS,
      i: () => tS,
      m: () => bS,
      q: () => XS
    })
  },
  40133: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => PS,
      i: () => DS,
      k: () => CS,
      m: () => nS
    });
    var tS, bS = gS(37144),
      XS = gS(39913),
      xS = gS(38687),
      NS = gS(38683),
      qS = gS(39946),
      uS = gS(39926),
      IS = gS(40092),
      fS = gS(37138),
      kS = gS(40087),
      aS = gS(39937),
      KS = gS(40136),
      jS = gS(37933),
      GS = gS(39968);
    class CS {
      static get BaseUrl() {
        return kS.f.BaseUrl
      }
      static set BaseUrl(SS) {
        kS.f.BaseUrl = SS
      }
      static get CleanUrl() {
        return kS.f.CleanUrl
      }
      static set CleanUrl(SS) {
        kS.f.CleanUrl = SS
      }
      static IsAbsoluteUrl(SS) {
        return 0 === SS.indexOf("//") || -1 !== SS.indexOf("://") && (-1 !== SS.indexOf(".") && (-1 !== SS.indexOf("/") && (!(SS.indexOf(":") > SS.indexOf("/")) && (SS.indexOf("://") < SS.indexOf(".") || (0 === SS.indexOf("data:") || 0 === SS.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(SS) {
        kS.f.ScriptBaseUrl = SS
      }
      static get ScriptBaseUrl() {
        return kS.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(SS) {
        tS.ScriptBaseUrl = SS, tS.AssetBaseUrl = SS
      }
      static set ScriptPreprocessUrl(SS) {
        kS.f.ScriptPreprocessUrl = SS
      }
      static get ScriptPreprocessUrl() {
        return kS.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return kS.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(SS) {
        kS.f.DefaultRetryStrategy = SS
      }
      static get CorsBehavior() {
        return kS.f.CorsBehavior
      }
      static set CorsBehavior(SS) {
        kS.f.CorsBehavior = SS
      }
      static get UseFallbackTexture() {
        return fS.d.UseFallbackTexture
      }
      static set UseFallbackTexture(SS) {
        fS.d.UseFallbackTexture = SS
      }
      static get RegisteredExternalClasses() {
        return KS.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(SS) {
        KS.e.RegisteredExternalClasses = SS
      }
      static get fallbackTexture() {
        return fS.d.FallbackTexture
      }
      static set fallbackTexture(SS) {
        fS.d.FallbackTexture = SS
      }
      static FetchToRef(SS, HS, gS, tS, bS, XS) {
        const xS = 4 * ((Math.abs(SS) * gS % gS | 0) + (Math.abs(HS) * tS % tS | 0) * gS);
        XS.r = bS[xS] / 255, XS.g = bS[xS + 1] / 255, XS.b = bS[xS + 2] / 255, XS.a = bS[xS + 3] / 255
      }
      static Mix(SS, HS, gS) {
        return 0
      }
      static Instantiate(SS) {
        return KS.e.Instantiate(SS)
      }
      static SetImmediate(SS) {
        aS.e.SetImmediate(SS)
      }
      static IsExponentOfTwo(SS) {
        return !0
      }
      static FloatRound(SS) {
        return Math.fround(SS)
      }
      static GetFilename(SS) {
        const HS = SS.lastIndexOf("/");
        return HS < 0 ? SS : SS.substring(HS + 1)
      }
      static GetFolderPath(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = SS.lastIndexOf("/");
        return gS < 0 ? HS ? SS : "" : SS.substring(0, gS + 1)
      }
      static ToDegrees(SS) {
        return 180 * SS / Math.PI
      }
      static ToRadians(SS) {
        return SS * Math.PI / 180
      }
      static SmoothAngleChange(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const tS = this.ToRadians(SS),
          bS = this.ToRadians(HS);
        return this.ToDegrees(Math.atan2((1 - gS) * Math.sin(bS) + gS * Math.sin(tS), (1 - gS) * Math.cos(bS) + gS * Math.cos(tS)))
      }
      static MakeArray(SS, HS) {
        return !0 === HS || void 0 !== SS && null != SS ? Array.isArray(SS) ? SS : [SS] : null
      }
      static GetPointerPrefix(SS) {
        return (0, XS.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(SS, HS) {
        (0, kS.B)(SS, HS)
      }
      static SetReferrerPolicyBehavior(SS, HS) {
        HS.referrerPolicy = SS
      }
      static get PreprocessUrl() {
        return kS.f.PreprocessUrl
      }
      static set PreprocessUrl(SS) {
        kS.f.PreprocessUrl = SS
      }
      static LoadImage(SS, HS, gS, tS, bS, XS) {
        return (0, kS.n)(SS, HS, gS, tS, bS, XS)
      }
      static LoadFile(SS, HS, gS, tS, bS, XS) {
        return (0, kS.k)(SS, HS, gS, tS, bS, XS)
      }
      static async LoadFileAsync(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((gS, tS) => {
          (0, kS.k)(SS, (SS => {
            gS(SS)
          }), void 0, void 0, HS, ((SS, HS) => {
            tS(HS)
          }))
        }))
      }
      static GetAssetUrl(SS) {
        if (!SS) return "";
        if (tS.AssetBaseUrl && SS.startsWith(tS._DefaultAssetsUrl)) {
          const HS = tS.AssetBaseUrl.endsWith("/") ? tS.AssetBaseUrl.slice(0, -1) : tS.AssetBaseUrl;
          return SS.replace(tS._DefaultAssetsUrl, HS)
        }
        return SS
      }
      static GetBabylonScriptURL(SS, HS) {
        if (!SS) return "";
        if (SS.startsWith(tS._DefaultCdnUrl))
          if (tS.ScriptBaseUrl) {
            const HS = tS.ScriptBaseUrl.endsWith("/") ? tS.ScriptBaseUrl.slice(0, -1) : tS.ScriptBaseUrl;
            SS = SS.replace(tS._DefaultCdnUrl, HS)
          } else if (tS._CdnVersion) {
          const HS = `${tS._DefaultCdnUrl}/v${tS._CdnVersion}`;
          SS.startsWith(HS) || (SS = SS.replace(tS._DefaultCdnUrl, HS))
        }
        return SS = tS.ScriptPreprocessUrl(SS), HS && !tS.IsAbsoluteUrl(SS) && (SS = tS.GetAbsoluteUrl(SS)), SS
      }
      static LoadBabylonScript(SS, HS, gS, bS) {
        SS = tS.GetBabylonScriptURL(SS), tS.LoadScript(SS, HS, gS)
      }
      static async LoadBabylonScriptAsync(SS) {
        return SS = tS.GetBabylonScriptURL(SS), await tS.LoadScriptAsync(SS)
      }
      static _LoadScriptNative(SS, HS, gS, bS) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const SS = "Loading a script as an ES module is not supported in Babylon Native";
            return void gS?.(SS, new Error(SS))
          }
          tS.LoadFile(SS, (SS => {
            try {
              Function(SS).apply(null), HS && HS()
            } catch (tS) {
              gS && gS("LoadScript Error", tS)
            }
          }), void 0, void 0, !1, ((SS, HS) => {
            gS && gS("LoadScript Error", HS)
          }))
        }
      }
      static _LoadScriptWeb(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(SS), HS && HS()
          } catch (qS) {
            gS?.(`Unable to load script '${SS}' in worker`, qS)
          }
          return
        }
        if (!(0, XS.j)()) return void gS?.(`Cannot load script '${SS}' outside of a window or a worker`);
        const xS = document.getElementsByTagName("head")[0],
          NS = document.createElement("script");
        bS ? (NS.setAttribute("type", "module"), NS.innerText = SS) : (NS.setAttribute("type", "text/javascript"), NS.setAttribute("src", SS)), tS && (NS.id = tS), NS.onload = () => {
          HS && HS()
        }, NS.onerror = HS => {
          gS && gS(`Unable to load script '${SS}'`, HS)
        }, xS.appendChild(NS)
      }
      static async LoadScriptAsync(SS, HS) {
        return await new Promise(((gS, tS) => {
          this.LoadScript(SS, (() => {
            gS()
          }), ((SS, HS) => {
            tS(HS || new Error(SS))
          }), HS)
        }))
      }
      static ReadFileAsDataURL(SS, HS, gS) {
        const tS = new FileReader,
          XS = {
            onCompleteObservable: new bS.e,
            abort: () => tS.abort()
          };
        return tS.onloadend = () => {
          XS.onCompleteObservable.notifyObservers(XS)
        }, tS.onload = SS => {
          HS(SS.target.result)
        }, tS.onprogress = gS, tS.readAsDataURL(SS), XS
      }
      static ReadFile(SS, HS, gS, tS, bS) {
        return (0, kS.r)(SS, HS, gS, tS, bS)
      }
      static FileAsURL(SS) {
        const HS = new Blob([SS]);
        return window.URL.createObjectURL(HS)
      }
      static Format(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return SS.toFixed(HS)
      }
      static DeepCopy(SS, HS, gS, tS) {
        NS.d.DeepCopy(SS, HS, gS, tS)
      }
      static IsEmpty(SS) {
        for (const HS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, HS)) return !1;
        return !0
      }
      static RegisterTopRootEvents(SS, HS) {
        for (let tS = 0; tS < HS.length; tS++) {
          const bS = HS[tS];
          SS.addEventListener(bS.name, bS.handler, !1);
          try {
            window.parent && window.parent.addEventListener(bS.name, bS.handler, !1)
          } catch (gS) {}
        }
      }
      static UnregisterTopRootEvents(SS, HS) {
        for (let tS = 0; tS < HS.length; tS++) {
          const bS = HS[tS];
          SS.removeEventListener(bS.name, bS.handler);
          try {
            SS.parent && SS.parent.removeEventListener(bS.name, bS.handler)
          } catch (gS) {}
        }
      }
      static async DumpFramebuffer(SS, HS, gS, tS) {
        throw (0, uS.l)("DumpTools")
      }
      static DumpData(SS, HS, gS, tS) {
        throw (0, uS.l)("DumpTools")
      }
      static async DumpDataAsync(SS, HS, gS) {
        throw (0, uS.l)("DumpTools")
      }
      static _IsOffScreenCanvas(SS) {
        return void 0 !== SS.convertToBlob
      }
      static ToBlob(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          bS = arguments.length > 3 ? arguments[3] : void 0;
        tS._IsOffScreenCanvas(SS) || SS.toBlob || (SS.toBlob = function(SS, HS, gS) {
          setTimeout((() => {
            const tS = atob(this.toDataURL(HS, gS).split(",")[1]),
              bS = tS.length,
              XS = new Uint8Array(bS);
            for (let SS = 0; SS < bS; SS++) XS[SS] = tS.charCodeAt(SS);
            SS(new Blob([XS]))
          }))
        }), tS._IsOffScreenCanvas(SS) ? SS.convertToBlob({
          type: gS,
          quality: bS
        }).then((SS => HS(SS))) : SS.toBlob((function(SS) {
          HS(SS)
        }), gS, bS)
      }
      static DownloadBlob(SS, HS) {
        if ("download" in document.createElement("a")) {
          if (!HS) {
            const SS = new Date;
            HS = "screenshot_" + ((SS.getFullYear() + "-" + (SS.getMonth() + 1)).slice(2) + "-" + SS.getDate() + "_" + SS.getHours() + "-" + ("0" + SS.getMinutes()).slice(-2)) + ".png"
          }
          tS.Download(SS, HS)
        } else if (SS && "undefined" !== typeof URL) {
          const HS = URL.createObjectURL(SS),
            gS = window.open("");
          if (!gS) return;
          const tS = gS.document.createElement("img");
          tS.onload = function() {
            URL.revokeObjectURL(HS)
          }, tS.src = HS, gS.document.body.appendChild(tS)
        }
      }
      static EncodeScreenshotCanvasData(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          bS = arguments.length > 3 ? arguments[3] : void 0,
          XS = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof bS && HS) {
          if (HS) {
            if (tS._IsOffScreenCanvas(SS)) return void SS.convertToBlob({
              type: gS,
              quality: XS
            }).then((SS => {
              const gS = new FileReader;
              gS.readAsDataURL(SS), gS.onloadend = () => {
                const SS = gS.result;
                HS(SS)
              }
            }));
            const bS = SS.toDataURL(gS, XS);
            HS(bS)
          }
        } else this.ToBlob(SS, (function(SS) {
          SS && tS.DownloadBlob(SS, bS), HS && HS("")
        }), gS, XS)
      }
      static Download(SS, HS) {
        if ("undefined" === typeof URL) return;
        const gS = window.URL.createObjectURL(SS),
          tS = document.createElement("a");
        document.body.appendChild(tS), tS.style.display = "none", tS.href = gS, tS.download = HS, tS.addEventListener("click", (() => {
          tS.parentElement && tS.parentElement.removeChild(tS)
        })), tS.click(), window.URL.revokeObjectURL(gS)
      }
      static BackCompatCameraNoPreventDefault(SS) {
        return "boolean" === typeof SS[0] ? SS[0] : "boolean" === typeof SS[1] && SS[1]
      }
      static CreateScreenshot(SS, HS, gS, tS) {
        throw (0, uS.l)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(SS, HS, gS) {
        throw (0, uS.l)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(SS, HS, gS, tS) {
        throw (0, uS.l)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(SS, HS, gS) {
        throw (0, uS.l)("ScreenshotTools")
      }
      static RandomId() {
        return (0, jS.c)()
      }
      static IsBase64(SS) {
        return (0, kS.j)(SS)
      }
      static DecodeBase64(SS) {
        return (0, kS.e)(SS)
      }
      static get errorsCount() {
        return xS.b.errorsCount
      }
      static Log(SS) {
        xS.b.Log(SS)
      }
      static Warn(SS) {
        xS.b.Warn(SS)
      }
      static Error(SS) {
        xS.b.Error(SS)
      }
      static get LogCache() {
        return xS.b.LogCache
      }
      static ClearLogCache() {
        xS.b.ClearLogCache()
      }
      static set LogLevels(SS) {
        xS.b.LogLevels = SS
      }
      static set PerformanceLogLevel(SS) {
        (SS & tS.PerformanceUserMarkLogLevel) !== tS.PerformanceUserMarkLogLevel ? (SS & tS.PerformanceConsoleLogLevel) !== tS.PerformanceConsoleLogLevel ? (tS.StartPerformanceCounter = tS._StartPerformanceCounterDisabled, tS.EndPerformanceCounter = tS._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), tS.StartPerformanceCounter = tS._StartMarkNative, tS.EndPerformanceCounter = tS._EndMarkNative) : (tS.StartPerformanceCounter = tS._StartPerformanceConsole, tS.EndPerformanceCounter = tS._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), tS.StartPerformanceCounter = tS._StartMarkNative, tS.EndPerformanceCounter = tS._EndMarkNative) : (tS.StartPerformanceCounter = tS._StartUserMark, tS.EndPerformanceCounter = tS._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(SS, HS) {}
      static _EndPerformanceCounterDisabled(SS, HS) {}
      static _StartUserMark(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!tS._Performance) {
          if (!(0, XS.j)()) return;
          tS._Performance = window.performance
        }
        HS && tS._Performance.mark && tS._Performance.mark(SS + "-Begin")
      }
      static _EndUserMark(SS) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && tS._Performance.mark && (tS._Performance.mark(SS + "-End"), tS._Performance.measure(SS, SS + "-Begin", SS + "-End"))
      }
      static _StartPerformanceConsole(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        HS && (tS._StartUserMark(SS, HS), console.time && console.time(SS))
      }
      static _EndPerformanceConsole(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        HS && (tS._EndUserMark(SS, HS), console.timeEnd(SS))
      }
      static _StartMarkNative(SS) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (tS._NativePerformanceCounterHandles.has(SS)) tS.Warn(`Performance counter with name ${SS} is already started.`);
          else {
            const HS = _native.startPerformanceCounter(SS);
            tS._NativePerformanceCounterHandles.set(SS, HS)
          }
      }
      static _EndMarkNative(SS) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const HS = tS._NativePerformanceCounterHandles.get(SS);
          HS ? (_native.endPerformanceCounter(HS), tS._NativePerformanceCounterHandles.delete(SS)) : tS.Warn(`Performance counter with name ${SS} was not started.`)
        }
      }
      static get Now() {
        return qS.e.Now
      }
      static GetClassName(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = null;
        if (!HS && SS.getClassName) gS = SS.getClassName();
        else {
          if (SS instanceof Object) {
            gS = (HS ? SS : Object.getPrototypeOf(SS)).constructor.__bjsclassName__
          }
          gS || (gS = typeof SS)
        }
        return gS
      }
      static First(SS, HS) {
        for (const gS of SS)
          if (HS(gS)) return gS;
        return null
      }
      static getFullClassName(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = null,
          tS = null;
        if (!HS && SS.getClassName) gS = SS.getClassName();
        else {
          if (SS instanceof Object) {
            const bS = HS ? SS : Object.getPrototypeOf(SS);
            gS = bS.constructor.__bjsclassName__, tS = bS.constructor.__bjsmoduleName__
          }
          gS || (gS = typeof SS)
        }
        return gS ? (null != tS ? tS + "." : "") + gS : null
      }
      static async DelayAsync(SS) {
        await new Promise((HS => {
          setTimeout((() => {
            HS()
          }), SS)
        }))
      }
      static IsSafari() {
        return !!(0, XS.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function nS(SS, HS) {
      return gS => {
        gS.__bjsclassName__ = SS, gS.__bjsmoduleName__ = null != HS ? HS : null
      }
    }
    tS = CS, CS.AssetBaseUrl = "", CS.UseCustomRequestHeaders = !1, CS.CustomRequestHeaders = IS.c.CustomRequestHeaders, CS.GetDOMTextContent = XS.b, CS._DefaultCdnUrl = "https://cdn.babylonjs.com", CS._CdnVersion = "9.28.0", CS._DefaultAssetsUrl = "https://assets.babylonjs.com/core", CS.LoadScript = "undefined" === typeof _native ? tS._LoadScriptWeb : tS._LoadScriptNative, CS.GetAbsoluteUrl = "object" === typeof document ? SS => {
      const HS = document.createElement("a");
      return HS.href = SS, HS.href
    } : "function" === typeof URL && "object" === typeof location ? SS => new URL(SS, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, CS.NoneLogLevel = xS.b.NoneLogLevel, CS.MessageLogLevel = xS.b.MessageLogLevel, CS.WarningLogLevel = xS.b.WarningLogLevel, CS.ErrorLogLevel = xS.b.ErrorLogLevel, CS.AllLogLevel = xS.b.AllLogLevel, CS.IsWindowObjectExist = XS.j, CS.PerformanceNoneLogLevel = 0, CS.PerformanceUserMarkLogLevel = 1, CS.PerformanceConsoleLogLevel = 2, CS._NativePerformanceCounterHandles = new Map, CS.StartPerformanceCounter = tS._StartPerformanceCounterDisabled, CS.EndPerformanceCounter = tS._EndPerformanceCounterDisabled;
    class PS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = SS, this.index = tS - 1, this._done = !1, this._fn = HS, this._successCallback = gS
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(SS, HS, gS) {
        const tS = new PS(SS, HS, gS, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return tS.executeNext(), tS
      }
      static SyncAsyncForLoop(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return PS.Run(Math.ceil(SS / HS), (tS => {
          bS && bS() ? tS.breakLoop() : setTimeout((() => {
            for (let XS = 0; XS < HS; ++XS) {
              const xS = tS.index * HS + XS;
              if (xS >= SS) break;
              if (gS(xS), bS && bS()) {
                tS.breakLoop();
                break
              }
            }
            tS.executeNext()
          }), XS)
        }), tS)
      }
    }
    let QS = !1;

    function DS() {
      QS || (QS = !0, CS.Mix = GS.m, CS.IsExponentOfTwo = GS.i, fS.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);