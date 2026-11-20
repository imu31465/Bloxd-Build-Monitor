export const id = 247;
export const ids = [247];
export const modules = {
  39565: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302),
      Ob = hb(36762);
    class Gb {
      static Instantiate(bb) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[bb]) return this.RegisteredExternalClasses[bb];
        const ub = (0, Ob.d)(bb);
        if (ub) return ub;
        Bb.b.Warn(bb + " not found, you may have missed an import.");
        const hb = bb.split(".");
        let Gb = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Bb = 0, Ob = hb.length; Bb < Ob; Bb++) Gb = Gb[hb[Bb]];
        return "function" !== typeof Gb ? null : Gb
      }
    }
    Gb.RegisteredExternalClasses = {}
  },
  39352: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(39316);
    class Ob {
      static get Now() {
        return (0, Bb.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39387: (bb, ub, hb) => {
    function Bb(bb) {
      let ub = 1;
      do {
        ub *= 2
      } while (ub < bb);
      return ub === bb
    }

    function Ob(bb, ub, hb) {
      return bb * (1 - hb) + ub * hb
    }

    function Gb(bb) {
      const ub = Ub(bb),
        hb = Lb(bb);
      return ub - bb > bb - hb ? hb : ub
    }

    function Ub(bb) {
      return bb--, bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, bb |= bb >> 16, ++bb
    }

    function Lb(bb) {
      return bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, (bb |= bb >> 16) - (bb >> 1)
    }

    function Yb(bb, ub) {
      let hb;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          hb = Lb(bb);
          break;
        case 2:
          hb = Gb(bb);
          break;
        default:
          hb = Ub(bb)
      }
      return Math.min(hb, ub)
    }
    hb.d(ub, {
      e: () => Lb,
      i: () => Yb,
      k: () => Bb,
      m: () => Ob,
      q: () => Gb
    })
  },
  39559: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Kb,
      h: () => Cb,
      k: () => Ab,
      o: () => lb
    });
    var Bb, Ob = hb(36753),
      Gb = hb(39316),
      Ub = hb(38302),
      Lb = hb(38296),
      Yb = hb(39352),
      Sb = hb(39333),
      ab = hb(39520),
      Hb = hb(36748),
      wb = hb(39511),
      Zb = hb(39343),
      Xb = hb(39565),
      pb = hb(37507),
      ob = hb(39387);
    class Ab {
      static get BaseUrl() {
        return wb.f.BaseUrl
      }
      static set BaseUrl(bb) {
        wb.f.BaseUrl = bb
      }
      static get CleanUrl() {
        return wb.f.CleanUrl
      }
      static set CleanUrl(bb) {
        wb.f.CleanUrl = bb
      }
      static IsAbsoluteUrl(bb) {
        return 0 === bb.indexOf("//") || -1 !== bb.indexOf("://") && (-1 !== bb.indexOf(".") && (-1 !== bb.indexOf("/") && (!(bb.indexOf(":") > bb.indexOf("/")) && (bb.indexOf("://") < bb.indexOf(".") || (0 === bb.indexOf("data:") || 0 === bb.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(bb) {
        wb.f.ScriptBaseUrl = bb
      }
      static get ScriptBaseUrl() {
        return wb.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(bb) {
        Bb.ScriptBaseUrl = bb, Bb.AssetBaseUrl = bb
      }
      static set ScriptPreprocessUrl(bb) {
        wb.f.ScriptPreprocessUrl = bb
      }
      static get ScriptPreprocessUrl() {
        return wb.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return wb.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(bb) {
        wb.f.DefaultRetryStrategy = bb
      }
      static get CorsBehavior() {
        return wb.f.CorsBehavior
      }
      static set CorsBehavior(bb) {
        wb.f.CorsBehavior = bb
      }
      static get UseFallbackTexture() {
        return Hb.b.UseFallbackTexture
      }
      static set UseFallbackTexture(bb) {
        Hb.b.UseFallbackTexture = bb
      }
      static get RegisteredExternalClasses() {
        return Xb.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(bb) {
        Xb.b.RegisteredExternalClasses = bb
      }
      static get fallbackTexture() {
        return Hb.b.FallbackTexture
      }
      static set fallbackTexture(bb) {
        Hb.b.FallbackTexture = bb
      }
      static FetchToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = 4 * ((Math.abs(bb) * hb % hb | 0) + (Math.abs(ub) * Bb % Bb | 0) * hb);
        Gb.r = Ob[Ub] / 255, Gb.g = Ob[Ub + 1] / 255, Gb.b = Ob[Ub + 2] / 255, Gb.a = Ob[Ub + 3] / 255
      }
      static Mix(bb, ub, hb) {
        return 0
      }
      static Instantiate(bb) {
        return Xb.b.Instantiate(bb)
      }
      static SetImmediate(bb) {
        Zb.c.SetImmediate(bb)
      }
      static IsExponentOfTwo(bb) {
        return !0
      }
      static FloatRound(bb) {
        return Math.fround(bb)
      }
      static GetFilename(bb) {
        const ub = bb.lastIndexOf("/");
        return ub < 0 ? bb : bb.substring(ub + 1)
      }
      static GetFolderPath(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = bb.lastIndexOf("/");
        return hb < 0 ? ub ? bb : "" : bb.substring(0, hb + 1)
      }
      static ToDegrees(bb) {
        return 180 * bb / Math.PI
      }
      static ToRadians(bb) {
        return bb * Math.PI / 180
      }
      static SmoothAngleChange(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Bb = this.ToRadians(bb),
          Ob = this.ToRadians(ub);
        return this.ToDegrees(Math.atan2((1 - hb) * Math.sin(Ob) + hb * Math.sin(Bb), (1 - hb) * Math.cos(Ob) + hb * Math.cos(Bb)))
      }
      static MakeArray(bb, ub) {
        return !0 === ub || void 0 !== bb && null != bb ? Array.isArray(bb) ? bb : [bb] : null
      }
      static GetPointerPrefix(bb) {
        return (0, Gb.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(bb, ub) {
        (0, wb.w)(bb, ub)
      }
      static SetReferrerPolicyBehavior(bb, ub) {
        ub.referrerPolicy = bb
      }
      static get PreprocessUrl() {
        return wb.f.PreprocessUrl
      }
      static set PreprocessUrl(bb) {
        wb.f.PreprocessUrl = bb
      }
      static LoadImage(bb, ub, hb, Bb, Ob, Gb) {
        return (0, wb.o)(bb, ub, hb, Bb, Ob, Gb)
      }
      static LoadFile(bb, ub, hb, Bb, Ob, Gb) {
        return (0, wb.k)(bb, ub, hb, Bb, Ob, Gb)
      }
      static async LoadFileAsync(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((hb, Bb) => {
          (0, wb.k)(bb, (bb => {
            hb(bb)
          }), void 0, void 0, ub, ((bb, ub) => {
            Bb(ub)
          }))
        }))
      }
      static GetAssetUrl(bb) {
        if (!bb) return "";
        if (Bb.AssetBaseUrl && bb.startsWith(Bb._DefaultAssetsUrl)) {
          const ub = Bb.AssetBaseUrl.endsWith("/") ? Bb.AssetBaseUrl.slice(0, -1) : Bb.AssetBaseUrl;
          return bb.replace(Bb._DefaultAssetsUrl, ub)
        }
        return bb
      }
      static GetBabylonScriptURL(bb, ub) {
        if (!bb) return "";
        if (bb.startsWith(Bb._DefaultCdnUrl))
          if (Bb.ScriptBaseUrl) {
            const ub = Bb.ScriptBaseUrl.endsWith("/") ? Bb.ScriptBaseUrl.slice(0, -1) : Bb.ScriptBaseUrl;
            bb = bb.replace(Bb._DefaultCdnUrl, ub)
          } else if (Bb._CdnVersion) {
          const ub = `${Bb._DefaultCdnUrl}/v${Bb._CdnVersion}`;
          bb.startsWith(ub) || (bb = bb.replace(Bb._DefaultCdnUrl, ub))
        }
        return bb = Bb.ScriptPreprocessUrl(bb), ub && !Bb.IsAbsoluteUrl(bb) && (bb = Bb.GetAbsoluteUrl(bb)), bb
      }
      static LoadBabylonScript(bb, ub, hb, Ob) {
        bb = Bb.GetBabylonScriptURL(bb), Bb.LoadScript(bb, ub, hb)
      }
      static async LoadBabylonScriptAsync(bb) {
        return bb = Bb.GetBabylonScriptURL(bb), await Bb.LoadScriptAsync(bb)
      }
      static _LoadScriptNative(bb, ub, hb, Ob) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const bb = "Loading a script as an ES module is not supported in Babylon Native";
            return void hb?.(bb, new Error(bb))
          }
          Bb.LoadFile(bb, (bb => {
            try {
              Function(bb).apply(null), ub && ub()
            } catch (Bb) {
              hb && hb("LoadScript Error", Bb)
            }
          }), void 0, void 0, !1, ((bb, ub) => {
            hb && hb("LoadScript Error", ub)
          }))
        }
      }
      static _LoadScriptWeb(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(bb), ub && ub()
          } catch (Yb) {
            hb?.(`Unable to load script '${bb}' in worker`, Yb)
          }
          return
        }
        if (!(0, Gb.k)()) return void hb?.(`Cannot load script '${bb}' outside of a window or a worker`);
        const Ub = document.getElementsByTagName("head")[0],
          Lb = document.createElement("script");
        Ob ? (Lb.setAttribute("type", "module"), Lb.innerText = bb) : (Lb.setAttribute("type", "text/javascript"), Lb.setAttribute("src", bb)), Bb && (Lb.id = Bb), Lb.onload = () => {
          ub && ub()
        }, Lb.onerror = ub => {
          hb && hb(`Unable to load script '${bb}'`, ub)
        }, Ub.appendChild(Lb)
      }
      static async LoadScriptAsync(bb, ub) {
        return await new Promise(((hb, Bb) => {
          this.LoadScript(bb, (() => {
            hb()
          }), ((bb, ub) => {
            Bb(ub || new Error(bb))
          }), ub)
        }))
      }
      static ReadFileAsDataURL(bb, ub, hb) {
        const Bb = new FileReader,
          Gb = {
            onCompleteObservable: new Ob.e,
            abort: () => Bb.abort()
          };
        return Bb.onloadend = () => {
          Gb.onCompleteObservable.notifyObservers(Gb)
        }, Bb.onload = bb => {
          ub(bb.target.result)
        }, Bb.onprogress = hb, Bb.readAsDataURL(bb), Gb
      }
      static ReadFile(bb, ub, hb, Bb, Ob) {
        return (0, wb.r)(bb, ub, hb, Bb, Ob)
      }
      static FileAsURL(bb) {
        const ub = new Blob([bb]);
        return window.URL.createObjectURL(ub)
      }
      static Format(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return bb.toFixed(ub)
      }
      static DeepCopy(bb, ub, hb, Bb) {
        Lb.b.DeepCopy(bb, ub, hb, Bb)
      }
      static IsEmpty(bb) {
        for (const ub in bb)
          if (Object.prototype.hasOwnProperty.call(bb, ub)) return !1;
        return !0
      }
      static RegisterTopRootEvents(bb, ub) {
        for (let Bb = 0; Bb < ub.length; Bb++) {
          const Ob = ub[Bb];
          bb.addEventListener(Ob.name, Ob.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Ob.name, Ob.handler, !1)
          } catch (hb) {}
        }
      }
      static UnregisterTopRootEvents(bb, ub) {
        for (let Bb = 0; Bb < ub.length; Bb++) {
          const Ob = ub[Bb];
          bb.removeEventListener(Ob.name, Ob.handler);
          try {
            bb.parent && bb.parent.removeEventListener(Ob.name, Ob.handler)
          } catch (hb) {}
        }
      }
      static async DumpFramebuffer(bb, ub, hb, Bb) {
        throw (0, Sb.m)("DumpTools")
      }
      static DumpData(bb, ub, hb, Bb) {
        throw (0, Sb.m)("DumpTools")
      }
      static async DumpDataAsync(bb, ub, hb) {
        throw (0, Sb.m)("DumpTools")
      }
      static _IsOffScreenCanvas(bb) {
        return void 0 !== bb.convertToBlob
      }
      static ToBlob(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Ob = arguments.length > 3 ? arguments[3] : void 0;
        Bb._IsOffScreenCanvas(bb) || bb.toBlob || (bb.toBlob = function(bb, ub, hb) {
          setTimeout((() => {
            const Bb = atob(this.toDataURL(ub, hb).split(",")[1]),
              Ob = Bb.length,
              Gb = new Uint8Array(Ob);
            for (let bb = 0; bb < Ob; bb++) Gb[bb] = Bb.charCodeAt(bb);
            bb(new Blob([Gb]))
          }))
        }), Bb._IsOffScreenCanvas(bb) ? bb.convertToBlob({
          type: hb,
          quality: Ob
        }).then((bb => ub(bb))) : bb.toBlob((function(bb) {
          ub(bb)
        }), hb, Ob)
      }
      static DownloadBlob(bb, ub) {
        if ("download" in document.createElement("a")) {
          if (!ub) {
            const bb = new Date;
            ub = "screenshot_" + ((bb.getFullYear() + "-" + (bb.getMonth() + 1)).slice(2) + "-" + bb.getDate() + "_" + bb.getHours() + "-" + ("0" + bb.getMinutes()).slice(-2)) + ".png"
          }
          Bb.Download(bb, ub)
        } else if (bb && "undefined" !== typeof URL) {
          const ub = URL.createObjectURL(bb),
            hb = window.open("");
          if (!hb) return;
          const Bb = hb.document.createElement("img");
          Bb.onload = function() {
            URL.revokeObjectURL(ub)
          }, Bb.src = ub, hb.document.body.appendChild(Bb)
        }
      }
      static EncodeScreenshotCanvasData(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Ob = arguments.length > 3 ? arguments[3] : void 0,
          Gb = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Ob && ub) {
          if (ub) {
            if (Bb._IsOffScreenCanvas(bb)) return void bb.convertToBlob({
              type: hb,
              quality: Gb
            }).then((bb => {
              const hb = new FileReader;
              hb.readAsDataURL(bb), hb.onloadend = () => {
                const bb = hb.result;
                ub(bb)
              }
            }));
            const Ob = bb.toDataURL(hb, Gb);
            ub(Ob)
          }
        } else this.ToBlob(bb, (function(bb) {
          bb && Bb.DownloadBlob(bb, Ob), ub && ub("")
        }), hb, Gb)
      }
      static Download(bb, ub) {
        if ("undefined" === typeof URL) return;
        const hb = window.URL.createObjectURL(bb),
          Bb = document.createElement("a");
        document.body.appendChild(Bb), Bb.style.display = "none", Bb.href = hb, Bb.download = ub, Bb.addEventListener("click", (() => {
          Bb.parentElement && Bb.parentElement.removeChild(Bb)
        })), Bb.click(), window.URL.revokeObjectURL(hb)
      }
      static BackCompatCameraNoPreventDefault(bb) {
        return "boolean" === typeof bb[0] ? bb[0] : "boolean" === typeof bb[1] && bb[1]
      }
      static CreateScreenshot(bb, ub, hb, Bb) {
        throw (0, Sb.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(bb, ub, hb) {
        throw (0, Sb.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(bb, ub, hb, Bb) {
        throw (0, Sb.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(bb, ub, hb) {
        throw (0, Sb.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, pb.d)()
      }
      static IsBase64(bb) {
        return (0, wb.i)(bb)
      }
      static DecodeBase64(bb) {
        return (0, wb.e)(bb)
      }
      static get errorsCount() {
        return Ub.b.errorsCount
      }
      static Log(bb) {
        Ub.b.Log(bb)
      }
      static Warn(bb) {
        Ub.b.Warn(bb)
      }
      static Error(bb) {
        Ub.b.Error(bb)
      }
      static get LogCache() {
        return Ub.b.LogCache
      }
      static ClearLogCache() {
        Ub.b.ClearLogCache()
      }
      static set LogLevels(bb) {
        Ub.b.LogLevels = bb
      }
      static set PerformanceLogLevel(bb) {
        (bb & Bb.PerformanceUserMarkLogLevel) !== Bb.PerformanceUserMarkLogLevel ? (bb & Bb.PerformanceConsoleLogLevel) !== Bb.PerformanceConsoleLogLevel ? (Bb.StartPerformanceCounter = Bb._StartPerformanceCounterDisabled, Bb.EndPerformanceCounter = Bb._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Bb.StartPerformanceCounter = Bb._StartMarkNative, Bb.EndPerformanceCounter = Bb._EndMarkNative) : (Bb.StartPerformanceCounter = Bb._StartPerformanceConsole, Bb.EndPerformanceCounter = Bb._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Bb.StartPerformanceCounter = Bb._StartMarkNative, Bb.EndPerformanceCounter = Bb._EndMarkNative) : (Bb.StartPerformanceCounter = Bb._StartUserMark, Bb.EndPerformanceCounter = Bb._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(bb, ub) {}
      static _EndPerformanceCounterDisabled(bb, ub) {}
      static _StartUserMark(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Bb._Performance) {
          if (!(0, Gb.k)()) return;
          Bb._Performance = window.performance
        }
        ub && Bb._Performance.mark && Bb._Performance.mark(bb + "-Begin")
      }
      static _EndUserMark(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Bb._Performance.mark && (Bb._Performance.mark(bb + "-End"), Bb._Performance.measure(bb, bb + "-Begin", bb + "-End"))
      }
      static _StartPerformanceConsole(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ub && (Bb._StartUserMark(bb, ub), console.time && console.time(bb))
      }
      static _EndPerformanceConsole(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ub && (Bb._EndUserMark(bb, ub), console.timeEnd(bb))
      }
      static _StartMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Bb._NativePerformanceCounterHandles.has(bb)) Bb.Warn(`Performance counter with name ${bb} is already started.`);
          else {
            const ub = _native.startPerformanceCounter(bb);
            Bb._NativePerformanceCounterHandles.set(bb, ub)
          }
      }
      static _EndMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const ub = Bb._NativePerformanceCounterHandles.get(bb);
          ub ? (_native.endPerformanceCounter(ub), Bb._NativePerformanceCounterHandles.delete(bb)) : Bb.Warn(`Performance counter with name ${bb} was not started.`)
        }
      }
      static get Now() {
        return Yb.d.Now
      }
      static GetClassName(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = null;
        if (!ub && bb.getClassName) hb = bb.getClassName();
        else {
          if (bb instanceof Object) {
            hb = (ub ? bb : Object.getPrototypeOf(bb)).constructor.__bjsclassName__
          }
          hb || (hb = typeof bb)
        }
        return hb
      }
      static First(bb, ub) {
        for (const hb of bb)
          if (ub(hb)) return hb;
        return null
      }
      static getFullClassName(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = null,
          Bb = null;
        if (!ub && bb.getClassName) hb = bb.getClassName();
        else {
          if (bb instanceof Object) {
            const Ob = ub ? bb : Object.getPrototypeOf(bb);
            hb = Ob.constructor.__bjsclassName__, Bb = Ob.constructor.__bjsmoduleName__
          }
          hb || (hb = typeof bb)
        }
        return hb ? (null != Bb ? Bb + "." : "") + hb : null
      }
      static async DelayAsync(bb) {
        await new Promise((ub => {
          setTimeout((() => {
            ub()
          }), bb)
        }))
      }
      static IsSafari() {
        return !!(0, Gb.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function lb(bb, ub) {
      return hb => {
        hb.__bjsclassName__ = bb, hb.__bjsmoduleName__ = null != ub ? ub : null
      }
    }
    Bb = Ab, Ab.AssetBaseUrl = "", Ab.UseCustomRequestHeaders = !1, Ab.CustomRequestHeaders = ab.b.CustomRequestHeaders, Ab.GetDOMTextContent = Gb.d, Ab._DefaultCdnUrl = "https://cdn.babylonjs.com", Ab._CdnVersion = "9.28.0", Ab._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Ab.LoadScript = "undefined" === typeof _native ? Bb._LoadScriptWeb : Bb._LoadScriptNative, Ab.GetAbsoluteUrl = "object" === typeof document ? bb => {
      const ub = document.createElement("a");
      return ub.href = bb, ub.href
    } : "function" === typeof URL && "object" === typeof location ? bb => new URL(bb, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Ab.NoneLogLevel = Ub.b.NoneLogLevel, Ab.MessageLogLevel = Ub.b.MessageLogLevel, Ab.WarningLogLevel = Ub.b.WarningLogLevel, Ab.ErrorLogLevel = Ub.b.ErrorLogLevel, Ab.AllLogLevel = Ub.b.AllLogLevel, Ab.IsWindowObjectExist = Gb.k, Ab.PerformanceNoneLogLevel = 0, Ab.PerformanceUserMarkLogLevel = 1, Ab.PerformanceConsoleLogLevel = 2, Ab._NativePerformanceCounterHandles = new Map, Ab.StartPerformanceCounter = Bb._StartPerformanceCounterDisabled, Ab.EndPerformanceCounter = Bb._EndPerformanceCounterDisabled;
    class Kb {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = bb, this.index = Bb - 1, this._done = !1, this._fn = ub, this._successCallback = hb
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(bb, ub, hb) {
        const Bb = new Kb(bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Bb.executeNext(), Bb
      }
      static SyncAsyncForLoop(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Kb.Run(Math.ceil(bb / ub), (Bb => {
          Ob && Ob() ? Bb.breakLoop() : setTimeout((() => {
            for (let Gb = 0; Gb < ub; ++Gb) {
              const Ub = Bb.index * ub + Gb;
              if (Ub >= bb) break;
              if (hb(Ub), Ob && Ob()) {
                Bb.breakLoop();
                break
              }
            }
            Bb.executeNext()
          }), Gb)
        }), Bb)
      }
    }
    let Wb = !1;

    function Cb() {
      Wb || (Wb = !0, Ab.Mix = ob.m, Ab.IsExponentOfTwo = ob.k, Hb.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);