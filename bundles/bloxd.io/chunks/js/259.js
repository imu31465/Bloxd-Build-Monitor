export const id = 259;
export const ids = [259];
export const modules = {
  40358: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032),
      Uu = ju(37532);
    class Zu {
      static Instantiate(uu) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[uu]) return this.RegisteredExternalClasses[uu];
        const Eu = (0, Uu.d)(uu);
        if (Eu) return Eu;
        su.b.Warn(uu + " not found, you may have missed an import.");
        const ju = uu.split(".");
        let Zu = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let su = 0, Uu = ju.length; su < Uu; su++) Zu = Zu[ju[su]];
        return "function" !== typeof Zu ? null : Zu
      }
    }
    Zu.RegisteredExternalClasses = {}
  },
  40170: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(40138);
    class Uu {
      static get Now() {
        return (0, su.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40192: (uu, Eu, ju) => {
    function su(uu) {
      let Eu = 1;
      do {
        Eu *= 2
      } while (Eu < uu);
      return Eu === uu
    }

    function Uu(uu, Eu, ju) {
      return uu * (1 - ju) + Eu * ju
    }

    function Zu(uu) {
      const Eu = Xu(uu),
        ju = lu(uu);
      return Eu - uu > uu - ju ? ju : Eu
    }

    function Xu(uu) {
      return uu--, uu |= uu >> 1, uu |= uu >> 2, uu |= uu >> 4, uu |= uu >> 8, uu |= uu >> 16, ++uu
    }

    function lu(uu) {
      return uu |= uu >> 1, uu |= uu >> 2, uu |= uu >> 4, uu |= uu >> 8, (uu |= uu >> 16) - (uu >> 1)
    }

    function qu(uu, Eu) {
      let ju;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          ju = lu(uu);
          break;
        case 2:
          ju = Zu(uu);
          break;
        default:
          ju = Xu(uu)
      }
      return Math.min(ju, Eu)
    }
    ju.d(Eu, {
      e: () => lu,
      g: () => qu,
      k: () => su,
      n: () => Uu,
      r: () => Zu
    })
  },
  40356: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Mu,
      f: () => Gu,
      h: () => Du,
      k: () => gu
    });
    var su, Uu = ju(37514),
      Zu = ju(40138),
      Xu = ju(39032),
      lu = ju(39030),
      qu = ju(40170),
      fu = ju(40153),
      Cu = ju(40302),
      bu = ju(37506),
      cu = ju(40294),
      Nu = ju(40164),
      Ou = ju(40358),
      Yu = ju(38303),
      hu = ju(40192);
    class Du {
      static get BaseUrl() {
        return cu.g.BaseUrl
      }
      static set BaseUrl(uu) {
        cu.g.BaseUrl = uu
      }
      static get CleanUrl() {
        return cu.g.CleanUrl
      }
      static set CleanUrl(uu) {
        cu.g.CleanUrl = uu
      }
      static IsAbsoluteUrl(uu) {
        return 0 === uu.indexOf("//") || -1 !== uu.indexOf("://") && (-1 !== uu.indexOf(".") && (-1 !== uu.indexOf("/") && (!(uu.indexOf(":") > uu.indexOf("/")) && (uu.indexOf("://") < uu.indexOf(".") || (0 === uu.indexOf("data:") || 0 === uu.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(uu) {
        cu.g.ScriptBaseUrl = uu
      }
      static get ScriptBaseUrl() {
        return cu.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(uu) {
        su.ScriptBaseUrl = uu, su.AssetBaseUrl = uu
      }
      static set ScriptPreprocessUrl(uu) {
        cu.g.ScriptPreprocessUrl = uu
      }
      static get ScriptPreprocessUrl() {
        return cu.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return cu.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(uu) {
        cu.g.DefaultRetryStrategy = uu
      }
      static get CorsBehavior() {
        return cu.g.CorsBehavior
      }
      static set CorsBehavior(uu) {
        cu.g.CorsBehavior = uu
      }
      static get UseFallbackTexture() {
        return bu.b.UseFallbackTexture
      }
      static set UseFallbackTexture(uu) {
        bu.b.UseFallbackTexture = uu
      }
      static get RegisteredExternalClasses() {
        return Ou.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(uu) {
        Ou.d.RegisteredExternalClasses = uu
      }
      static get fallbackTexture() {
        return bu.b.FallbackTexture
      }
      static set fallbackTexture(uu) {
        bu.b.FallbackTexture = uu
      }
      static FetchToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = 4 * ((Math.abs(uu) * ju % ju | 0) + (Math.abs(Eu) * su % su | 0) * ju);
        Zu.r = Uu[Xu] / 255, Zu.g = Uu[Xu + 1] / 255, Zu.b = Uu[Xu + 2] / 255, Zu.a = Uu[Xu + 3] / 255
      }
      static Mix(uu, Eu, ju) {
        return 0
      }
      static Instantiate(uu) {
        return Ou.d.Instantiate(uu)
      }
      static SetImmediate(uu) {
        Nu.c.SetImmediate(uu)
      }
      static IsExponentOfTwo(uu) {
        return !0
      }
      static FloatRound(uu) {
        return Math.fround(uu)
      }
      static GetFilename(uu) {
        const Eu = uu.lastIndexOf("/");
        return Eu < 0 ? uu : uu.substring(Eu + 1)
      }
      static GetFolderPath(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = uu.lastIndexOf("/");
        return ju < 0 ? Eu ? uu : "" : uu.substring(0, ju + 1)
      }
      static ToDegrees(uu) {
        return 180 * uu / Math.PI
      }
      static ToRadians(uu) {
        return uu * Math.PI / 180
      }
      static SmoothAngleChange(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const su = this.ToRadians(uu),
          Uu = this.ToRadians(Eu);
        return this.ToDegrees(Math.atan2((1 - ju) * Math.sin(Uu) + ju * Math.sin(su), (1 - ju) * Math.cos(Uu) + ju * Math.cos(su)))
      }
      static MakeArray(uu, Eu) {
        return !0 === Eu || void 0 !== uu && null != uu ? Array.isArray(uu) ? uu : [uu] : null
      }
      static GetPointerPrefix(uu) {
        return (0, Zu.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(uu, Eu) {
        (0, cu.z)(uu, Eu)
      }
      static SetReferrerPolicyBehavior(uu, Eu) {
        Eu.referrerPolicy = uu
      }
      static get PreprocessUrl() {
        return cu.g.PreprocessUrl
      }
      static set PreprocessUrl(uu) {
        cu.g.PreprocessUrl = uu
      }
      static LoadImage(uu, Eu, ju, su, Uu, Zu) {
        return (0, cu.q)(uu, Eu, ju, su, Uu, Zu)
      }
      static LoadFile(uu, Eu, ju, su, Uu, Zu) {
        return (0, cu.m)(uu, Eu, ju, su, Uu, Zu)
      }
      static async LoadFileAsync(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((ju, su) => {
          (0, cu.m)(uu, (uu => {
            ju(uu)
          }), void 0, void 0, Eu, ((uu, Eu) => {
            su(Eu)
          }))
        }))
      }
      static GetAssetUrl(uu) {
        if (!uu) return "";
        if (su.AssetBaseUrl && uu.startsWith(su._DefaultAssetsUrl)) {
          const Eu = su.AssetBaseUrl.endsWith("/") ? su.AssetBaseUrl.slice(0, -1) : su.AssetBaseUrl;
          return uu.replace(su._DefaultAssetsUrl, Eu)
        }
        return uu
      }
      static GetBabylonScriptURL(uu, Eu) {
        if (!uu) return "";
        if (uu.startsWith(su._DefaultCdnUrl))
          if (su.ScriptBaseUrl) {
            const Eu = su.ScriptBaseUrl.endsWith("/") ? su.ScriptBaseUrl.slice(0, -1) : su.ScriptBaseUrl;
            uu = uu.replace(su._DefaultCdnUrl, Eu)
          } else if (su._CdnVersion) {
          const Eu = `${su._DefaultCdnUrl}/v${su._CdnVersion}`;
          uu.startsWith(Eu) || (uu = uu.replace(su._DefaultCdnUrl, Eu))
        }
        return uu = su.ScriptPreprocessUrl(uu), Eu && !su.IsAbsoluteUrl(uu) && (uu = su.GetAbsoluteUrl(uu)), uu
      }
      static LoadBabylonScript(uu, Eu, ju, Uu) {
        uu = su.GetBabylonScriptURL(uu), su.LoadScript(uu, Eu, ju)
      }
      static async LoadBabylonScriptAsync(uu) {
        return uu = su.GetBabylonScriptURL(uu), await su.LoadScriptAsync(uu)
      }
      static _LoadScriptNative(uu, Eu, ju, Uu) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const uu = "Loading a script as an ES module is not supported in Babylon Native";
            return void ju?.(uu, new Error(uu))
          }
          su.LoadFile(uu, (uu => {
            try {
              Function(uu).apply(null), Eu && Eu()
            } catch (su) {
              ju && ju("LoadScript Error", su)
            }
          }), void 0, void 0, !1, ((uu, Eu) => {
            ju && ju("LoadScript Error", Eu)
          }))
        }
      }
      static _LoadScriptWeb(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(uu), Eu && Eu()
          } catch (qu) {
            ju?.(`Unable to load script '${uu}' in worker`, qu)
          }
          return
        }
        if (!(0, Zu.m)()) return void ju?.(`Cannot load script '${uu}' outside of a window or a worker`);
        const Xu = document.getElementsByTagName("head")[0],
          lu = document.createElement("script");
        Uu ? (lu.setAttribute("type", "module"), lu.innerText = uu) : (lu.setAttribute("type", "text/javascript"), lu.setAttribute("src", uu)), su && (lu.id = su), lu.onload = () => {
          Eu && Eu()
        }, lu.onerror = Eu => {
          ju && ju(`Unable to load script '${uu}'`, Eu)
        }, Xu.appendChild(lu)
      }
      static async LoadScriptAsync(uu, Eu) {
        return await new Promise(((ju, su) => {
          this.LoadScript(uu, (() => {
            ju()
          }), ((uu, Eu) => {
            su(Eu || new Error(uu))
          }), Eu)
        }))
      }
      static ReadFileAsDataURL(uu, Eu, ju) {
        const su = new FileReader,
          Zu = {
            onCompleteObservable: new Uu.d,
            abort: () => su.abort()
          };
        return su.onloadend = () => {
          Zu.onCompleteObservable.notifyObservers(Zu)
        }, su.onload = uu => {
          Eu(uu.target.result)
        }, su.onprogress = ju, su.readAsDataURL(uu), Zu
      }
      static ReadFile(uu, Eu, ju, su, Uu) {
        return (0, cu.r)(uu, Eu, ju, su, Uu)
      }
      static FileAsURL(uu) {
        const Eu = new Blob([uu]);
        return window.URL.createObjectURL(Eu)
      }
      static Format(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return uu.toFixed(Eu)
      }
      static DeepCopy(uu, Eu, ju, su) {
        lu.d.DeepCopy(uu, Eu, ju, su)
      }
      static IsEmpty(uu) {
        for (const Eu in uu)
          if (Object.prototype.hasOwnProperty.call(uu, Eu)) return !1;
        return !0
      }
      static RegisterTopRootEvents(uu, Eu) {
        for (let su = 0; su < Eu.length; su++) {
          const Uu = Eu[su];
          uu.addEventListener(Uu.name, Uu.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Uu.name, Uu.handler, !1)
          } catch (ju) {}
        }
      }
      static UnregisterTopRootEvents(uu, Eu) {
        for (let su = 0; su < Eu.length; su++) {
          const Uu = Eu[su];
          uu.removeEventListener(Uu.name, Uu.handler);
          try {
            uu.parent && uu.parent.removeEventListener(Uu.name, Uu.handler)
          } catch (ju) {}
        }
      }
      static async DumpFramebuffer(uu, Eu, ju, su) {
        throw (0, fu.h)("DumpTools")
      }
      static DumpData(uu, Eu, ju, su) {
        throw (0, fu.h)("DumpTools")
      }
      static async DumpDataAsync(uu, Eu, ju) {
        throw (0, fu.h)("DumpTools")
      }
      static _IsOffScreenCanvas(uu) {
        return void 0 !== uu.convertToBlob
      }
      static ToBlob(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Uu = arguments.length > 3 ? arguments[3] : void 0;
        su._IsOffScreenCanvas(uu) || uu.toBlob || (uu.toBlob = function(uu, Eu, ju) {
          setTimeout((() => {
            const su = atob(this.toDataURL(Eu, ju).split(",")[1]),
              Uu = su.length,
              Zu = new Uint8Array(Uu);
            for (let uu = 0; uu < Uu; uu++) Zu[uu] = su.charCodeAt(uu);
            uu(new Blob([Zu]))
          }))
        }), su._IsOffScreenCanvas(uu) ? uu.convertToBlob({
          type: ju,
          quality: Uu
        }).then((uu => Eu(uu))) : uu.toBlob((function(uu) {
          Eu(uu)
        }), ju, Uu)
      }
      static DownloadBlob(uu, Eu) {
        if ("download" in document.createElement("a")) {
          if (!Eu) {
            const uu = new Date;
            Eu = "screenshot_" + ((uu.getFullYear() + "-" + (uu.getMonth() + 1)).slice(2) + "-" + uu.getDate() + "_" + uu.getHours() + "-" + ("0" + uu.getMinutes()).slice(-2)) + ".png"
          }
          su.Download(uu, Eu)
        } else if (uu && "undefined" !== typeof URL) {
          const Eu = URL.createObjectURL(uu),
            ju = window.open("");
          if (!ju) return;
          const su = ju.document.createElement("img");
          su.onload = function() {
            URL.revokeObjectURL(Eu)
          }, su.src = Eu, ju.document.body.appendChild(su)
        }
      }
      static EncodeScreenshotCanvasData(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Uu = arguments.length > 3 ? arguments[3] : void 0,
          Zu = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Uu && Eu) {
          if (Eu) {
            if (su._IsOffScreenCanvas(uu)) return void uu.convertToBlob({
              type: ju,
              quality: Zu
            }).then((uu => {
              const ju = new FileReader;
              ju.readAsDataURL(uu), ju.onloadend = () => {
                const uu = ju.result;
                Eu(uu)
              }
            }));
            const Uu = uu.toDataURL(ju, Zu);
            Eu(Uu)
          }
        } else this.ToBlob(uu, (function(uu) {
          uu && su.DownloadBlob(uu, Uu), Eu && Eu("")
        }), ju, Zu)
      }
      static Download(uu, Eu) {
        if ("undefined" === typeof URL) return;
        const ju = window.URL.createObjectURL(uu),
          su = document.createElement("a");
        document.body.appendChild(su), su.style.display = "none", su.href = ju, su.download = Eu, su.addEventListener("click", (() => {
          su.parentElement && su.parentElement.removeChild(su)
        })), su.click(), window.URL.revokeObjectURL(ju)
      }
      static BackCompatCameraNoPreventDefault(uu) {
        return "boolean" === typeof uu[0] ? uu[0] : "boolean" === typeof uu[1] && uu[1]
      }
      static CreateScreenshot(uu, Eu, ju, su) {
        throw (0, fu.h)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(uu, Eu, ju) {
        throw (0, fu.h)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(uu, Eu, ju, su) {
        throw (0, fu.h)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(uu, Eu, ju) {
        throw (0, fu.h)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Yu.e)()
      }
      static IsBase64(uu) {
        return (0, cu.l)(uu)
      }
      static DecodeBase64(uu) {
        return (0, cu.d)(uu)
      }
      static get errorsCount() {
        return Xu.b.errorsCount
      }
      static Log(uu) {
        Xu.b.Log(uu)
      }
      static Warn(uu) {
        Xu.b.Warn(uu)
      }
      static Error(uu) {
        Xu.b.Error(uu)
      }
      static get LogCache() {
        return Xu.b.LogCache
      }
      static ClearLogCache() {
        Xu.b.ClearLogCache()
      }
      static set LogLevels(uu) {
        Xu.b.LogLevels = uu
      }
      static set PerformanceLogLevel(uu) {
        (uu & su.PerformanceUserMarkLogLevel) !== su.PerformanceUserMarkLogLevel ? (uu & su.PerformanceConsoleLogLevel) !== su.PerformanceConsoleLogLevel ? (su.StartPerformanceCounter = su._StartPerformanceCounterDisabled, su.EndPerformanceCounter = su._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), su.StartPerformanceCounter = su._StartMarkNative, su.EndPerformanceCounter = su._EndMarkNative) : (su.StartPerformanceCounter = su._StartPerformanceConsole, su.EndPerformanceCounter = su._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), su.StartPerformanceCounter = su._StartMarkNative, su.EndPerformanceCounter = su._EndMarkNative) : (su.StartPerformanceCounter = su._StartUserMark, su.EndPerformanceCounter = su._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(uu, Eu) {}
      static _EndPerformanceCounterDisabled(uu, Eu) {}
      static _StartUserMark(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!su._Performance) {
          if (!(0, Zu.m)()) return;
          su._Performance = window.performance
        }
        Eu && su._Performance.mark && su._Performance.mark(uu + "-Begin")
      }
      static _EndUserMark(uu) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && su._Performance.mark && (su._Performance.mark(uu + "-End"), su._Performance.measure(uu, uu + "-Begin", uu + "-End"))
      }
      static _StartPerformanceConsole(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Eu && (su._StartUserMark(uu, Eu), console.time && console.time(uu))
      }
      static _EndPerformanceConsole(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Eu && (su._EndUserMark(uu, Eu), console.timeEnd(uu))
      }
      static _StartMarkNative(uu) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (su._NativePerformanceCounterHandles.has(uu)) su.Warn(`Performance counter with name ${uu} is already started.`);
          else {
            const Eu = _native.startPerformanceCounter(uu);
            su._NativePerformanceCounterHandles.set(uu, Eu)
          }
      }
      static _EndMarkNative(uu) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Eu = su._NativePerformanceCounterHandles.get(uu);
          Eu ? (_native.endPerformanceCounter(Eu), su._NativePerformanceCounterHandles.delete(uu)) : su.Warn(`Performance counter with name ${uu} was not started.`)
        }
      }
      static get Now() {
        return qu.c.Now
      }
      static GetClassName(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = null;
        if (!Eu && uu.getClassName) ju = uu.getClassName();
        else {
          if (uu instanceof Object) {
            ju = (Eu ? uu : Object.getPrototypeOf(uu)).constructor.__bjsclassName__
          }
          ju || (ju = typeof uu)
        }
        return ju
      }
      static First(uu, Eu) {
        for (const ju of uu)
          if (Eu(ju)) return ju;
        return null
      }
      static getFullClassName(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = null,
          su = null;
        if (!Eu && uu.getClassName) ju = uu.getClassName();
        else {
          if (uu instanceof Object) {
            const Uu = Eu ? uu : Object.getPrototypeOf(uu);
            ju = Uu.constructor.__bjsclassName__, su = Uu.constructor.__bjsmoduleName__
          }
          ju || (ju = typeof uu)
        }
        return ju ? (null != su ? su + "." : "") + ju : null
      }
      static async DelayAsync(uu) {
        await new Promise((Eu => {
          setTimeout((() => {
            Eu()
          }), uu)
        }))
      }
      static IsSafari() {
        return !!(0, Zu.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function gu(uu, Eu) {
      return ju => {
        ju.__bjsclassName__ = uu, ju.__bjsmoduleName__ = null != Eu ? Eu : null
      }
    }
    su = Du, Du.AssetBaseUrl = "", Du.UseCustomRequestHeaders = !1, Du.CustomRequestHeaders = Cu.b.CustomRequestHeaders, Du.GetDOMTextContent = Zu.d, Du._DefaultCdnUrl = "https://cdn.babylonjs.com", Du._CdnVersion = "9.28.0", Du._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Du.LoadScript = "undefined" === typeof _native ? su._LoadScriptWeb : su._LoadScriptNative, Du.GetAbsoluteUrl = "object" === typeof document ? uu => {
      const Eu = document.createElement("a");
      return Eu.href = uu, Eu.href
    } : "function" === typeof URL && "object" === typeof location ? uu => new URL(uu, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Du.NoneLogLevel = Xu.b.NoneLogLevel, Du.MessageLogLevel = Xu.b.MessageLogLevel, Du.WarningLogLevel = Xu.b.WarningLogLevel, Du.ErrorLogLevel = Xu.b.ErrorLogLevel, Du.AllLogLevel = Xu.b.AllLogLevel, Du.IsWindowObjectExist = Zu.m, Du.PerformanceNoneLogLevel = 0, Du.PerformanceUserMarkLogLevel = 1, Du.PerformanceConsoleLogLevel = 2, Du._NativePerformanceCounterHandles = new Map, Du.StartPerformanceCounter = su._StartPerformanceCounterDisabled, Du.EndPerformanceCounter = su._EndPerformanceCounterDisabled;
    class Mu {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = uu, this.index = su - 1, this._done = !1, this._fn = Eu, this._successCallback = ju
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(uu, Eu, ju) {
        const su = new Mu(uu, Eu, ju, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return su.executeNext(), su
      }
      static SyncAsyncForLoop(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Mu.Run(Math.ceil(uu / Eu), (su => {
          Uu && Uu() ? su.breakLoop() : setTimeout((() => {
            for (let Zu = 0; Zu < Eu; ++Zu) {
              const Xu = su.index * Eu + Zu;
              if (Xu >= uu) break;
              if (ju(Xu), Uu && Uu()) {
                su.breakLoop();
                break
              }
            }
            su.executeNext()
          }), Zu)
        }), su)
      }
    }
    let eu = !1;

    function Gu() {
      eu || (eu = !0, Du.Mix = hu.n, Du.IsExponentOfTwo = hu.k, bu.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);