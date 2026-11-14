export const id = 225;
export const ids = [225];
export const modules = {
  38074: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(37076),
      AF = SF(35660);
    class uF {
      static Instantiate(FF) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[FF]) return this.RegisteredExternalClasses[FF];
        const WF = (0, AF.c)(FF);
        if (WF) return WF;
        CF.b.Warn(FF + " not found, you may have missed an import.");
        const SF = FF.split(".");
        let uF = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let CF = 0, AF = SF.length; CF < AF; CF++) uF = uF[SF[CF]];
        return "function" !== typeof uF ? null : uF
      }
    }
    uF.RegisteredExternalClasses = {}
  },
  37873: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(37835);
    class AF {
      static get Now() {
        return (0, CF.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  37900: (FF, WF, SF) => {
    function CF(FF) {
      let WF = 1;
      do {
        WF *= 2
      } while (WF < FF);
      return WF === FF
    }

    function AF(FF, WF, SF) {
      return FF * (1 - SF) + WF * SF
    }

    function uF(FF) {
      const WF = hF(FF),
        SF = bW(FF);
      return WF - FF > FF - SF ? SF : WF
    }

    function hF(FF) {
      return FF--, FF |= FF >> 1, FF |= FF >> 2, FF |= FF >> 4, FF |= FF >> 8, FF |= FF >> 16, ++FF
    }

    function bW(FF) {
      return FF |= FF >> 1, FF |= FF >> 2, FF |= FF >> 4, FF |= FF >> 8, (FF |= FF >> 16) - (FF >> 1)
    }

    function dF(FF, WF) {
      let SF;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          SF = bW(FF);
          break;
        case 2:
          SF = uF(FF);
          break;
        default:
          SF = hF(FF)
      }
      return Math.min(SF, WF)
    }
    SF.d(WF, {
      c: () => bW,
      e: () => dF,
      h: () => CF,
      i: () => AF,
      j: () => uF
    })
  },
  38065: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => aW,
      g: () => qW,
      h: () => tW,
      l: () => TF
    });
    var CF, AF = SF(35647),
      uF = SF(37835),
      hF = SF(37076),
      bW = SF(37069),
      dF = SF(37873),
      PF = SF(37855),
      RF = SF(38016),
      iW = SF(35639),
      eF = SF(38010),
      EF = SF(37860),
      QF = SF(38074),
      rW = SF(36308),
      gW = SF(37900);
    class tW {
      static get BaseUrl() {
        return eF.f.BaseUrl
      }
      static set BaseUrl(FF) {
        eF.f.BaseUrl = FF
      }
      static get CleanUrl() {
        return eF.f.CleanUrl
      }
      static set CleanUrl(FF) {
        eF.f.CleanUrl = FF
      }
      static IsAbsoluteUrl(FF) {
        return 0 === FF.indexOf("//") || -1 !== FF.indexOf("://") && (-1 !== FF.indexOf(".") && (-1 !== FF.indexOf("/") && (!(FF.indexOf(":") > FF.indexOf("/")) && (FF.indexOf("://") < FF.indexOf(".") || (0 === FF.indexOf("data:") || 0 === FF.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(FF) {
        eF.f.ScriptBaseUrl = FF
      }
      static get ScriptBaseUrl() {
        return eF.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(FF) {
        CF.ScriptBaseUrl = FF, CF.AssetBaseUrl = FF
      }
      static set ScriptPreprocessUrl(FF) {
        eF.f.ScriptPreprocessUrl = FF
      }
      static get ScriptPreprocessUrl() {
        return eF.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return eF.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(FF) {
        eF.f.DefaultRetryStrategy = FF
      }
      static get CorsBehavior() {
        return eF.f.CorsBehavior
      }
      static set CorsBehavior(FF) {
        eF.f.CorsBehavior = FF
      }
      static get UseFallbackTexture() {
        return iW.e.UseFallbackTexture
      }
      static set UseFallbackTexture(FF) {
        iW.e.UseFallbackTexture = FF
      }
      static get RegisteredExternalClasses() {
        return QF.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(FF) {
        QF.b.RegisteredExternalClasses = FF
      }
      static get fallbackTexture() {
        return iW.e.FallbackTexture
      }
      static set fallbackTexture(FF) {
        iW.e.FallbackTexture = FF
      }
      static FetchToRef(FF, WF, SF, CF, AF, uF) {
        const hF = 4 * ((Math.abs(FF) * SF % SF | 0) + (Math.abs(WF) * CF % CF | 0) * SF);
        uF.r = AF[hF] / 255, uF.g = AF[hF + 1] / 255, uF.b = AF[hF + 2] / 255, uF.a = AF[hF + 3] / 255
      }
      static Mix(FF, WF, SF) {
        return 0
      }
      static Instantiate(FF) {
        return QF.b.Instantiate(FF)
      }
      static SetImmediate(FF) {
        EF.c.SetImmediate(FF)
      }
      static IsExponentOfTwo(FF) {
        return !0
      }
      static FloatRound(FF) {
        return Math.fround(FF)
      }
      static GetFilename(FF) {
        const WF = FF.lastIndexOf("/");
        return WF < 0 ? FF : FF.substring(WF + 1)
      }
      static GetFolderPath(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = FF.lastIndexOf("/");
        return SF < 0 ? WF ? FF : "" : FF.substring(0, SF + 1)
      }
      static ToDegrees(FF) {
        return 180 * FF / Math.PI
      }
      static ToRadians(FF) {
        return FF * Math.PI / 180
      }
      static SmoothAngleChange(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const CF = this.ToRadians(FF),
          AF = this.ToRadians(WF);
        return this.ToDegrees(Math.atan2((1 - SF) * Math.sin(AF) + SF * Math.sin(CF), (1 - SF) * Math.cos(AF) + SF * Math.cos(CF)))
      }
      static MakeArray(FF, WF) {
        return !0 === WF || void 0 !== FF && null != FF ? Array.isArray(FF) ? FF : [FF] : null
      }
      static GetPointerPrefix(FF) {
        return (0, uF.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(FF, WF) {
        (0, eF.u)(FF, WF)
      }
      static SetReferrerPolicyBehavior(FF, WF) {
        WF.referrerPolicy = FF
      }
      static get PreprocessUrl() {
        return eF.f.PreprocessUrl
      }
      static set PreprocessUrl(FF) {
        eF.f.PreprocessUrl = FF
      }
      static LoadImage(FF, WF, SF, CF, AF, uF) {
        return (0, eF.m)(FF, WF, SF, CF, AF, uF)
      }
      static LoadFile(FF, WF, SF, CF, AF, uF) {
        return (0, eF.l)(FF, WF, SF, CF, AF, uF)
      }
      static async LoadFileAsync(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((SF, CF) => {
          (0, eF.l)(FF, (FF => {
            SF(FF)
          }), void 0, void 0, WF, ((FF, WF) => {
            CF(WF)
          }))
        }))
      }
      static GetAssetUrl(FF) {
        if (!FF) return "";
        if (CF.AssetBaseUrl && FF.startsWith(CF._DefaultAssetsUrl)) {
          const WF = CF.AssetBaseUrl.endsWith("/") ? CF.AssetBaseUrl.slice(0, -1) : CF.AssetBaseUrl;
          return FF.replace(CF._DefaultAssetsUrl, WF)
        }
        return FF
      }
      static GetBabylonScriptURL(FF, WF) {
        if (!FF) return "";
        if (FF.startsWith(CF._DefaultCdnUrl))
          if (CF.ScriptBaseUrl) {
            const WF = CF.ScriptBaseUrl.endsWith("/") ? CF.ScriptBaseUrl.slice(0, -1) : CF.ScriptBaseUrl;
            FF = FF.replace(CF._DefaultCdnUrl, WF)
          } else if (CF._CdnVersion) {
          const WF = `${CF._DefaultCdnUrl}/v${CF._CdnVersion}`;
          FF.startsWith(WF) || (FF = FF.replace(CF._DefaultCdnUrl, WF))
        }
        return FF = CF.ScriptPreprocessUrl(FF), WF && !CF.IsAbsoluteUrl(FF) && (FF = CF.GetAbsoluteUrl(FF)), FF
      }
      static LoadBabylonScript(FF, WF, SF, AF) {
        FF = CF.GetBabylonScriptURL(FF), CF.LoadScript(FF, WF, SF)
      }
      static async LoadBabylonScriptAsync(FF) {
        return FF = CF.GetBabylonScriptURL(FF), await CF.LoadScriptAsync(FF)
      }
      static _LoadScriptNative(FF, WF, SF, AF) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const FF = "Loading a script as an ES module is not supported in Babylon Native";
            return void SF?.(FF, new Error(FF))
          }
          CF.LoadFile(FF, (FF => {
            try {
              Function(FF).apply(null), WF && WF()
            } catch (CF) {
              SF && SF("LoadScript Error", CF)
            }
          }), void 0, void 0, !1, ((FF, WF) => {
            SF && SF("LoadScript Error", WF)
          }))
        }
      }
      static _LoadScriptWeb(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(FF), WF && WF()
          } catch (dF) {
            SF?.(`Unable to load script '${FF}' in worker`, dF)
          }
          return
        }
        if (!(0, uF.m)()) return void SF?.(`Cannot load script '${FF}' outside of a window or a worker`);
        const hF = document.getElementsByTagName("head")[0],
          bW = document.createElement("script");
        AF ? (bW.setAttribute("type", "module"), bW.innerText = FF) : (bW.setAttribute("type", "text/javascript"), bW.setAttribute("src", FF)), CF && (bW.id = CF), bW.onload = () => {
          WF && WF()
        }, bW.onerror = WF => {
          SF && SF(`Unable to load script '${FF}'`, WF)
        }, hF.appendChild(bW)
      }
      static async LoadScriptAsync(FF, WF) {
        return await new Promise(((SF, CF) => {
          this.LoadScript(FF, (() => {
            SF()
          }), ((FF, WF) => {
            CF(WF || new Error(FF))
          }), WF)
        }))
      }
      static ReadFileAsDataURL(FF, WF, SF) {
        const CF = new FileReader,
          uF = {
            onCompleteObservable: new AF.b,
            abort: () => CF.abort()
          };
        return CF.onloadend = () => {
          uF.onCompleteObservable.notifyObservers(uF)
        }, CF.onload = FF => {
          WF(FF.target.result)
        }, CF.onprogress = SF, CF.readAsDataURL(FF), uF
      }
      static ReadFile(FF, WF, SF, CF, AF) {
        return (0, eF.n)(FF, WF, SF, CF, AF)
      }
      static FileAsURL(FF) {
        const WF = new Blob([FF]);
        return window.URL.createObjectURL(WF)
      }
      static Format(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return FF.toFixed(WF)
      }
      static DeepCopy(FF, WF, SF, CF) {
        bW.d.DeepCopy(FF, WF, SF, CF)
      }
      static IsEmpty(FF) {
        for (const WF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, WF)) return !1;
        return !0
      }
      static RegisterTopRootEvents(FF, WF) {
        for (let CF = 0; CF < WF.length; CF++) {
          const AF = WF[CF];
          FF.addEventListener(AF.name, AF.handler, !1);
          try {
            window.parent && window.parent.addEventListener(AF.name, AF.handler, !1)
          } catch (SF) {}
        }
      }
      static UnregisterTopRootEvents(FF, WF) {
        for (let CF = 0; CF < WF.length; CF++) {
          const AF = WF[CF];
          FF.removeEventListener(AF.name, AF.handler);
          try {
            FF.parent && FF.parent.removeEventListener(AF.name, AF.handler)
          } catch (SF) {}
        }
      }
      static async DumpFramebuffer(FF, WF, SF, CF) {
        throw (0, PF.l)("DumpTools")
      }
      static DumpData(FF, WF, SF, CF) {
        throw (0, PF.l)("DumpTools")
      }
      static async DumpDataAsync(FF, WF, SF) {
        throw (0, PF.l)("DumpTools")
      }
      static _IsOffScreenCanvas(FF) {
        return void 0 !== FF.convertToBlob
      }
      static ToBlob(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          AF = arguments.length > 3 ? arguments[3] : void 0;
        CF._IsOffScreenCanvas(FF) || FF.toBlob || (FF.toBlob = function(FF, WF, SF) {
          setTimeout((() => {
            const CF = atob(this.toDataURL(WF, SF).split(",")[1]),
              AF = CF.length,
              uF = new Uint8Array(AF);
            for (let FF = 0; FF < AF; FF++) uF[FF] = CF.charCodeAt(FF);
            FF(new Blob([uF]))
          }))
        }), CF._IsOffScreenCanvas(FF) ? FF.convertToBlob({
          type: SF,
          quality: AF
        }).then((FF => WF(FF))) : FF.toBlob((function(FF) {
          WF(FF)
        }), SF, AF)
      }
      static DownloadBlob(FF, WF) {
        if ("download" in document.createElement("a")) {
          if (!WF) {
            const FF = new Date;
            WF = "screenshot_" + ((FF.getFullYear() + "-" + (FF.getMonth() + 1)).slice(2) + "-" + FF.getDate() + "_" + FF.getHours() + "-" + ("0" + FF.getMinutes()).slice(-2)) + ".png"
          }
          CF.Download(FF, WF)
        } else if (FF && "undefined" !== typeof URL) {
          const WF = URL.createObjectURL(FF),
            SF = window.open("");
          if (!SF) return;
          const CF = SF.document.createElement("img");
          CF.onload = function() {
            URL.revokeObjectURL(WF)
          }, CF.src = WF, SF.document.body.appendChild(CF)
        }
      }
      static EncodeScreenshotCanvasData(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          AF = arguments.length > 3 ? arguments[3] : void 0,
          uF = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof AF && WF) {
          if (WF) {
            if (CF._IsOffScreenCanvas(FF)) return void FF.convertToBlob({
              type: SF,
              quality: uF
            }).then((FF => {
              const SF = new FileReader;
              SF.readAsDataURL(FF), SF.onloadend = () => {
                const FF = SF.result;
                WF(FF)
              }
            }));
            const AF = FF.toDataURL(SF, uF);
            WF(AF)
          }
        } else this.ToBlob(FF, (function(FF) {
          FF && CF.DownloadBlob(FF, AF), WF && WF("")
        }), SF, uF)
      }
      static Download(FF, WF) {
        if ("undefined" === typeof URL) return;
        const SF = window.URL.createObjectURL(FF),
          CF = document.createElement("a");
        document.body.appendChild(CF), CF.style.display = "none", CF.href = SF, CF.download = WF, CF.addEventListener("click", (() => {
          CF.parentElement && CF.parentElement.removeChild(CF)
        })), CF.click(), window.URL.revokeObjectURL(SF)
      }
      static BackCompatCameraNoPreventDefault(FF) {
        return "boolean" === typeof FF[0] ? FF[0] : "boolean" === typeof FF[1] && FF[1]
      }
      static CreateScreenshot(FF, WF, SF, CF) {
        throw (0, PF.l)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(FF, WF, SF) {
        throw (0, PF.l)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(FF, WF, SF, CF) {
        throw (0, PF.l)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(FF, WF, SF) {
        throw (0, PF.l)("ScreenshotTools")
      }
      static RandomId() {
        return (0, rW.b)()
      }
      static IsBase64(FF) {
        return (0, eF.k)(FF)
      }
      static DecodeBase64(FF) {
        return (0, eF.d)(FF)
      }
      static get errorsCount() {
        return hF.b.errorsCount
      }
      static Log(FF) {
        hF.b.Log(FF)
      }
      static Warn(FF) {
        hF.b.Warn(FF)
      }
      static Error(FF) {
        hF.b.Error(FF)
      }
      static get LogCache() {
        return hF.b.LogCache
      }
      static ClearLogCache() {
        hF.b.ClearLogCache()
      }
      static set LogLevels(FF) {
        hF.b.LogLevels = FF
      }
      static set PerformanceLogLevel(FF) {
        (FF & CF.PerformanceUserMarkLogLevel) !== CF.PerformanceUserMarkLogLevel ? (FF & CF.PerformanceConsoleLogLevel) !== CF.PerformanceConsoleLogLevel ? (CF.StartPerformanceCounter = CF._StartPerformanceCounterDisabled, CF.EndPerformanceCounter = CF._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), CF.StartPerformanceCounter = CF._StartMarkNative, CF.EndPerformanceCounter = CF._EndMarkNative) : (CF.StartPerformanceCounter = CF._StartPerformanceConsole, CF.EndPerformanceCounter = CF._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), CF.StartPerformanceCounter = CF._StartMarkNative, CF.EndPerformanceCounter = CF._EndMarkNative) : (CF.StartPerformanceCounter = CF._StartUserMark, CF.EndPerformanceCounter = CF._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(FF, WF) {}
      static _EndPerformanceCounterDisabled(FF, WF) {}
      static _StartUserMark(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!CF._Performance) {
          if (!(0, uF.m)()) return;
          CF._Performance = window.performance
        }
        WF && CF._Performance.mark && CF._Performance.mark(FF + "-Begin")
      }
      static _EndUserMark(FF) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && CF._Performance.mark && (CF._Performance.mark(FF + "-End"), CF._Performance.measure(FF, FF + "-Begin", FF + "-End"))
      }
      static _StartPerformanceConsole(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        WF && (CF._StartUserMark(FF, WF), console.time && console.time(FF))
      }
      static _EndPerformanceConsole(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        WF && (CF._EndUserMark(FF, WF), console.timeEnd(FF))
      }
      static _StartMarkNative(FF) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (CF._NativePerformanceCounterHandles.has(FF)) CF.Warn(`Performance counter with name ${FF} is already started.`);
          else {
            const WF = _native.startPerformanceCounter(FF);
            CF._NativePerformanceCounterHandles.set(FF, WF)
          }
      }
      static _EndMarkNative(FF) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const WF = CF._NativePerformanceCounterHandles.get(FF);
          WF ? (_native.endPerformanceCounter(WF), CF._NativePerformanceCounterHandles.delete(FF)) : CF.Warn(`Performance counter with name ${FF} was not started.`)
        }
      }
      static get Now() {
        return dF.d.Now
      }
      static GetClassName(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = null;
        if (!WF && FF.getClassName) SF = FF.getClassName();
        else {
          if (FF instanceof Object) {
            SF = (WF ? FF : Object.getPrototypeOf(FF)).constructor.__bjsclassName__
          }
          SF || (SF = typeof FF)
        }
        return SF
      }
      static First(FF, WF) {
        for (const SF of FF)
          if (WF(SF)) return SF;
        return null
      }
      static getFullClassName(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = null,
          CF = null;
        if (!WF && FF.getClassName) SF = FF.getClassName();
        else {
          if (FF instanceof Object) {
            const AF = WF ? FF : Object.getPrototypeOf(FF);
            SF = AF.constructor.__bjsclassName__, CF = AF.constructor.__bjsmoduleName__
          }
          SF || (SF = typeof FF)
        }
        return SF ? (null != CF ? CF + "." : "") + SF : null
      }
      static async DelayAsync(FF) {
        await new Promise((WF => {
          setTimeout((() => {
            WF()
          }), FF)
        }))
      }
      static IsSafari() {
        return !!(0, uF.l)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function TF(FF, WF) {
      return SF => {
        SF.__bjsclassName__ = FF, SF.__bjsmoduleName__ = null != WF ? WF : null
      }
    }
    CF = tW, tW.AssetBaseUrl = "", tW.UseCustomRequestHeaders = !1, tW.CustomRequestHeaders = RF.d.CustomRequestHeaders, tW.GetDOMTextContent = uF.d, tW._DefaultCdnUrl = "https://cdn.babylonjs.com", tW._CdnVersion = "9.28.0", tW._DefaultAssetsUrl = "https://assets.babylonjs.com/core", tW.LoadScript = "undefined" === typeof _native ? CF._LoadScriptWeb : CF._LoadScriptNative, tW.GetAbsoluteUrl = "object" === typeof document ? FF => {
      const WF = document.createElement("a");
      return WF.href = FF, WF.href
    } : "function" === typeof URL && "object" === typeof location ? FF => new URL(FF, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, tW.NoneLogLevel = hF.b.NoneLogLevel, tW.MessageLogLevel = hF.b.MessageLogLevel, tW.WarningLogLevel = hF.b.WarningLogLevel, tW.ErrorLogLevel = hF.b.ErrorLogLevel, tW.AllLogLevel = hF.b.AllLogLevel, tW.IsWindowObjectExist = uF.m, tW.PerformanceNoneLogLevel = 0, tW.PerformanceUserMarkLogLevel = 1, tW.PerformanceConsoleLogLevel = 2, tW._NativePerformanceCounterHandles = new Map, tW.StartPerformanceCounter = CF._StartPerformanceCounterDisabled, tW.EndPerformanceCounter = CF._EndPerformanceCounterDisabled;
    class aW {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = FF, this.index = CF - 1, this._done = !1, this._fn = WF, this._successCallback = SF
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(FF, WF, SF) {
        const CF = new aW(FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return CF.executeNext(), CF
      }
      static SyncAsyncForLoop(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return aW.Run(Math.ceil(FF / WF), (CF => {
          AF && AF() ? CF.breakLoop() : setTimeout((() => {
            for (let uF = 0; uF < WF; ++uF) {
              const hF = CF.index * WF + uF;
              if (hF >= FF) break;
              if (SF(hF), AF && AF()) {
                CF.breakLoop();
                break
              }
            }
            CF.executeNext()
          }), uF)
        }), CF)
      }
    }
    let kW = !1;

    function qW() {
      kW || (kW = !0, tW.Mix = gW.i, tW.IsExponentOfTwo = gW.h, iW.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);