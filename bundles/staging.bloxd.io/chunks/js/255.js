export const id = 255;
export const ids = [255];
export const modules = {
  40211: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(38766),
      Am = fm(37224);
    class am {
      static Instantiate(mm) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[mm]) return this.RegisteredExternalClasses[mm];
        const Tm = (0, Am.c)(mm);
        if (Tm) return Tm;
        hm.b.Warn(mm + " not found, you may have missed an import.");
        const fm = mm.split(".");
        let am = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let hm = 0, Am = fm.length; hm < Am; hm++) am = am[fm[hm]];
        return "function" !== typeof am ? null : am
      }
    }
    am.RegisteredExternalClasses = {}
  },
  40020: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(39973);
    class Am {
      static get Now() {
        return (0, hm.p)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40052: (mm, Tm, fm) => {
    function hm(mm) {
      let Tm = 1;
      do {
        Tm *= 2
      } while (Tm < mm);
      return Tm === mm
    }

    function Am(mm, Tm, fm) {
      return mm * (1 - fm) + Tm * fm
    }

    function am(mm) {
      const Tm = xm(mm),
        fm = wm(mm);
      return Tm - mm > mm - fm ? fm : Tm
    }

    function xm(mm) {
      return mm--, mm |= mm >> 1, mm |= mm >> 2, mm |= mm >> 4, mm |= mm >> 8, mm |= mm >> 16, ++mm
    }

    function wm(mm) {
      return mm |= mm >> 1, mm |= mm >> 2, mm |= mm >> 4, mm |= mm >> 8, (mm |= mm >> 16) - (mm >> 1)
    }

    function Dm(mm, Tm) {
      let fm;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          fm = wm(mm);
          break;
        case 2:
          fm = am(mm);
          break;
        default:
          fm = xm(mm)
      }
      return Math.min(fm, Tm)
    }
    fm.d(Tm, {
      d: () => wm,
      f: () => Dm,
      i: () => hm,
      l: () => Am,
      p: () => am
    })
  },
  40203: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Im,
      e: () => Qm,
      h: () => jm,
      k: () => Vm
    });
    var hm, Am = fm(37203),
      am = fm(39973),
      xm = fm(38766),
      wm = fm(38764),
      Dm = fm(40020),
      im = fm(39993),
      Rm = fm(40160),
      pm = fm(37201),
      Em = fm(40154),
      om = fm(40008),
      Om = fm(40211),
      Ym = fm(37970),
      qm = fm(40052);
    class jm {
      static get BaseUrl() {
        return Em.g.BaseUrl
      }
      static set BaseUrl(mm) {
        Em.g.BaseUrl = mm
      }
      static get CleanUrl() {
        return Em.g.CleanUrl
      }
      static set CleanUrl(mm) {
        Em.g.CleanUrl = mm
      }
      static IsAbsoluteUrl(mm) {
        return 0 === mm.indexOf("//") || -1 !== mm.indexOf("://") && (-1 !== mm.indexOf(".") && (-1 !== mm.indexOf("/") && (!(mm.indexOf(":") > mm.indexOf("/")) && (mm.indexOf("://") < mm.indexOf(".") || (0 === mm.indexOf("data:") || 0 === mm.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(mm) {
        Em.g.ScriptBaseUrl = mm
      }
      static get ScriptBaseUrl() {
        return Em.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(mm) {
        hm.ScriptBaseUrl = mm, hm.AssetBaseUrl = mm
      }
      static set ScriptPreprocessUrl(mm) {
        Em.g.ScriptPreprocessUrl = mm
      }
      static get ScriptPreprocessUrl() {
        return Em.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Em.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(mm) {
        Em.g.DefaultRetryStrategy = mm
      }
      static get CorsBehavior() {
        return Em.g.CorsBehavior
      }
      static set CorsBehavior(mm) {
        Em.g.CorsBehavior = mm
      }
      static get UseFallbackTexture() {
        return pm.c.UseFallbackTexture
      }
      static set UseFallbackTexture(mm) {
        pm.c.UseFallbackTexture = mm
      }
      static get RegisteredExternalClasses() {
        return Om.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(mm) {
        Om.b.RegisteredExternalClasses = mm
      }
      static get fallbackTexture() {
        return pm.c.FallbackTexture
      }
      static set fallbackTexture(mm) {
        pm.c.FallbackTexture = mm
      }
      static FetchToRef(mm, Tm, fm, hm, Am, am) {
        const xm = 4 * ((Math.abs(mm) * fm % fm | 0) + (Math.abs(Tm) * hm % hm | 0) * fm);
        am.r = Am[xm] / 255, am.g = Am[xm + 1] / 255, am.b = Am[xm + 2] / 255, am.a = Am[xm + 3] / 255
      }
      static Mix(mm, Tm, fm) {
        return 0
      }
      static Instantiate(mm) {
        return Om.b.Instantiate(mm)
      }
      static SetImmediate(mm) {
        om.c.SetImmediate(mm)
      }
      static IsExponentOfTwo(mm) {
        return !0
      }
      static FloatRound(mm) {
        return Math.fround(mm)
      }
      static GetFilename(mm) {
        const Tm = mm.lastIndexOf("/");
        return Tm < 0 ? mm : mm.substring(Tm + 1)
      }
      static GetFolderPath(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = mm.lastIndexOf("/");
        return fm < 0 ? Tm ? mm : "" : mm.substring(0, fm + 1)
      }
      static ToDegrees(mm) {
        return 180 * mm / Math.PI
      }
      static ToRadians(mm) {
        return mm * Math.PI / 180
      }
      static SmoothAngleChange(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const hm = this.ToRadians(mm),
          Am = this.ToRadians(Tm);
        return this.ToDegrees(Math.atan2((1 - fm) * Math.sin(Am) + fm * Math.sin(hm), (1 - fm) * Math.cos(Am) + fm * Math.cos(hm)))
      }
      static MakeArray(mm, Tm) {
        return !0 === Tm || void 0 !== mm && null != mm ? Array.isArray(mm) ? mm : [mm] : null
      }
      static GetPointerPrefix(mm) {
        return (0, am.p)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(mm, Tm) {
        (0, Em.H)(mm, Tm)
      }
      static SetReferrerPolicyBehavior(mm, Tm) {
        Tm.referrerPolicy = mm
      }
      static get PreprocessUrl() {
        return Em.g.PreprocessUrl
      }
      static set PreprocessUrl(mm) {
        Em.g.PreprocessUrl = mm
      }
      static LoadImage(mm, Tm, fm, hm, Am, am) {
        return (0, Em.u)(mm, Tm, fm, hm, Am, am)
      }
      static LoadFile(mm, Tm, fm, hm, Am, am) {
        return (0, Em.r)(mm, Tm, fm, hm, Am, am)
      }
      static async LoadFileAsync(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((fm, hm) => {
          (0, Em.r)(mm, (mm => {
            fm(mm)
          }), void 0, void 0, Tm, ((mm, Tm) => {
            hm(Tm)
          }))
        }))
      }
      static GetAssetUrl(mm) {
        if (!mm) return "";
        if (hm.AssetBaseUrl && mm.startsWith(hm._DefaultAssetsUrl)) {
          const Tm = hm.AssetBaseUrl.endsWith("/") ? hm.AssetBaseUrl.slice(0, -1) : hm.AssetBaseUrl;
          return mm.replace(hm._DefaultAssetsUrl, Tm)
        }
        return mm
      }
      static GetBabylonScriptURL(mm, Tm) {
        if (!mm) return "";
        if (mm.startsWith(hm._DefaultCdnUrl))
          if (hm.ScriptBaseUrl) {
            const Tm = hm.ScriptBaseUrl.endsWith("/") ? hm.ScriptBaseUrl.slice(0, -1) : hm.ScriptBaseUrl;
            mm = mm.replace(hm._DefaultCdnUrl, Tm)
          } else if (hm._CdnVersion) {
          const Tm = `${hm._DefaultCdnUrl}/v${hm._CdnVersion}`;
          mm.startsWith(Tm) || (mm = mm.replace(hm._DefaultCdnUrl, Tm))
        }
        return mm = hm.ScriptPreprocessUrl(mm), Tm && !hm.IsAbsoluteUrl(mm) && (mm = hm.GetAbsoluteUrl(mm)), mm
      }
      static LoadBabylonScript(mm, Tm, fm, Am) {
        mm = hm.GetBabylonScriptURL(mm), hm.LoadScript(mm, Tm, fm)
      }
      static async LoadBabylonScriptAsync(mm) {
        return mm = hm.GetBabylonScriptURL(mm), await hm.LoadScriptAsync(mm)
      }
      static _LoadScriptNative(mm, Tm, fm, Am) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const mm = "Loading a script as an ES module is not supported in Babylon Native";
            return void fm?.(mm, new Error(mm))
          }
          hm.LoadFile(mm, (mm => {
            try {
              Function(mm).apply(null), Tm && Tm()
            } catch (hm) {
              fm && fm("LoadScript Error", hm)
            }
          }), void 0, void 0, !1, ((mm, Tm) => {
            fm && fm("LoadScript Error", Tm)
          }))
        }
      }
      static _LoadScriptWeb(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(mm), Tm && Tm()
          } catch (Dm) {
            fm?.(`Unable to load script '${mm}' in worker`, Dm)
          }
          return
        }
        if (!(0, am.p)()) return void fm?.(`Cannot load script '${mm}' outside of a window or a worker`);
        const xm = document.getElementsByTagName("head")[0],
          wm = document.createElement("script");
        Am ? (wm.setAttribute("type", "module"), wm.innerText = mm) : (wm.setAttribute("type", "text/javascript"), wm.setAttribute("src", mm)), hm && (wm.id = hm), wm.onload = () => {
          Tm && Tm()
        }, wm.onerror = Tm => {
          fm && fm(`Unable to load script '${mm}'`, Tm)
        }, xm.appendChild(wm)
      }
      static async LoadScriptAsync(mm, Tm) {
        return await new Promise(((fm, hm) => {
          this.LoadScript(mm, (() => {
            fm()
          }), ((mm, Tm) => {
            hm(Tm || new Error(mm))
          }), Tm)
        }))
      }
      static ReadFileAsDataURL(mm, Tm, fm) {
        const hm = new FileReader,
          am = {
            onCompleteObservable: new Am.c,
            abort: () => hm.abort()
          };
        return hm.onloadend = () => {
          am.onCompleteObservable.notifyObservers(am)
        }, hm.onload = mm => {
          Tm(mm.target.result)
        }, hm.onprogress = fm, hm.readAsDataURL(mm), am
      }
      static ReadFile(mm, Tm, fm, hm, Am) {
        return (0, Em.x)(mm, Tm, fm, hm, Am)
      }
      static FileAsURL(mm) {
        const Tm = new Blob([mm]);
        return window.URL.createObjectURL(Tm)
      }
      static Format(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return mm.toFixed(Tm)
      }
      static DeepCopy(mm, Tm, fm, hm) {
        wm.c.DeepCopy(mm, Tm, fm, hm)
      }
      static IsEmpty(mm) {
        for (const Tm in mm)
          if (Object.prototype.hasOwnProperty.call(mm, Tm)) return !1;
        return !0
      }
      static RegisterTopRootEvents(mm, Tm) {
        for (let hm = 0; hm < Tm.length; hm++) {
          const Am = Tm[hm];
          mm.addEventListener(Am.name, Am.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Am.name, Am.handler, !1)
          } catch (fm) {}
        }
      }
      static UnregisterTopRootEvents(mm, Tm) {
        for (let hm = 0; hm < Tm.length; hm++) {
          const Am = Tm[hm];
          mm.removeEventListener(Am.name, Am.handler);
          try {
            mm.parent && mm.parent.removeEventListener(Am.name, Am.handler)
          } catch (fm) {}
        }
      }
      static async DumpFramebuffer(mm, Tm, fm, hm) {
        throw (0, im.i)("DumpTools")
      }
      static DumpData(mm, Tm, fm, hm) {
        throw (0, im.i)("DumpTools")
      }
      static async DumpDataAsync(mm, Tm, fm) {
        throw (0, im.i)("DumpTools")
      }
      static _IsOffScreenCanvas(mm) {
        return void 0 !== mm.convertToBlob
      }
      static ToBlob(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Am = arguments.length > 3 ? arguments[3] : void 0;
        hm._IsOffScreenCanvas(mm) || mm.toBlob || (mm.toBlob = function(mm, Tm, fm) {
          setTimeout((() => {
            const hm = atob(this.toDataURL(Tm, fm).split(",")[1]),
              Am = hm.length,
              am = new Uint8Array(Am);
            for (let mm = 0; mm < Am; mm++) am[mm] = hm.charCodeAt(mm);
            mm(new Blob([am]))
          }))
        }), hm._IsOffScreenCanvas(mm) ? mm.convertToBlob({
          type: fm,
          quality: Am
        }).then((mm => Tm(mm))) : mm.toBlob((function(mm) {
          Tm(mm)
        }), fm, Am)
      }
      static DownloadBlob(mm, Tm) {
        if ("download" in document.createElement("a")) {
          if (!Tm) {
            const mm = new Date;
            Tm = "screenshot_" + ((mm.getFullYear() + "-" + (mm.getMonth() + 1)).slice(2) + "-" + mm.getDate() + "_" + mm.getHours() + "-" + ("0" + mm.getMinutes()).slice(-2)) + ".png"
          }
          hm.Download(mm, Tm)
        } else if (mm && "undefined" !== typeof URL) {
          const Tm = URL.createObjectURL(mm),
            fm = window.open("");
          if (!fm) return;
          const hm = fm.document.createElement("img");
          hm.onload = function() {
            URL.revokeObjectURL(Tm)
          }, hm.src = Tm, fm.document.body.appendChild(hm)
        }
      }
      static EncodeScreenshotCanvasData(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Am = arguments.length > 3 ? arguments[3] : void 0,
          am = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Am && Tm) {
          if (Tm) {
            if (hm._IsOffScreenCanvas(mm)) return void mm.convertToBlob({
              type: fm,
              quality: am
            }).then((mm => {
              const fm = new FileReader;
              fm.readAsDataURL(mm), fm.onloadend = () => {
                const mm = fm.result;
                Tm(mm)
              }
            }));
            const Am = mm.toDataURL(fm, am);
            Tm(Am)
          }
        } else this.ToBlob(mm, (function(mm) {
          mm && hm.DownloadBlob(mm, Am), Tm && Tm("")
        }), fm, am)
      }
      static Download(mm, Tm) {
        if ("undefined" === typeof URL) return;
        const fm = window.URL.createObjectURL(mm),
          hm = document.createElement("a");
        document.body.appendChild(hm), hm.style.display = "none", hm.href = fm, hm.download = Tm, hm.addEventListener("click", (() => {
          hm.parentElement && hm.parentElement.removeChild(hm)
        })), hm.click(), window.URL.revokeObjectURL(fm)
      }
      static BackCompatCameraNoPreventDefault(mm) {
        return "boolean" === typeof mm[0] ? mm[0] : "boolean" === typeof mm[1] && mm[1]
      }
      static CreateScreenshot(mm, Tm, fm, hm) {
        throw (0, im.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(mm, Tm, fm) {
        throw (0, im.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(mm, Tm, fm, hm) {
        throw (0, im.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(mm, Tm, fm) {
        throw (0, im.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Ym.c)()
      }
      static IsBase64(mm) {
        return (0, Em.o)(mm)
      }
      static DecodeBase64(mm) {
        return (0, Em.e)(mm)
      }
      static get errorsCount() {
        return xm.b.errorsCount
      }
      static Log(mm) {
        xm.b.Log(mm)
      }
      static Warn(mm) {
        xm.b.Warn(mm)
      }
      static Error(mm) {
        xm.b.Error(mm)
      }
      static get LogCache() {
        return xm.b.LogCache
      }
      static ClearLogCache() {
        xm.b.ClearLogCache()
      }
      static set LogLevels(mm) {
        xm.b.LogLevels = mm
      }
      static set PerformanceLogLevel(mm) {
        (mm & hm.PerformanceUserMarkLogLevel) !== hm.PerformanceUserMarkLogLevel ? (mm & hm.PerformanceConsoleLogLevel) !== hm.PerformanceConsoleLogLevel ? (hm.StartPerformanceCounter = hm._StartPerformanceCounterDisabled, hm.EndPerformanceCounter = hm._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), hm.StartPerformanceCounter = hm._StartMarkNative, hm.EndPerformanceCounter = hm._EndMarkNative) : (hm.StartPerformanceCounter = hm._StartPerformanceConsole, hm.EndPerformanceCounter = hm._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), hm.StartPerformanceCounter = hm._StartMarkNative, hm.EndPerformanceCounter = hm._EndMarkNative) : (hm.StartPerformanceCounter = hm._StartUserMark, hm.EndPerformanceCounter = hm._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(mm, Tm) {}
      static _EndPerformanceCounterDisabled(mm, Tm) {}
      static _StartUserMark(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!hm._Performance) {
          if (!(0, am.p)()) return;
          hm._Performance = window.performance
        }
        Tm && hm._Performance.mark && hm._Performance.mark(mm + "-Begin")
      }
      static _EndUserMark(mm) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && hm._Performance.mark && (hm._Performance.mark(mm + "-End"), hm._Performance.measure(mm, mm + "-Begin", mm + "-End"))
      }
      static _StartPerformanceConsole(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Tm && (hm._StartUserMark(mm, Tm), console.time && console.time(mm))
      }
      static _EndPerformanceConsole(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Tm && (hm._EndUserMark(mm, Tm), console.timeEnd(mm))
      }
      static _StartMarkNative(mm) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (hm._NativePerformanceCounterHandles.has(mm)) hm.Warn(`Performance counter with name ${mm} is already started.`);
          else {
            const Tm = _native.startPerformanceCounter(mm);
            hm._NativePerformanceCounterHandles.set(mm, Tm)
          }
      }
      static _EndMarkNative(mm) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Tm = hm._NativePerformanceCounterHandles.get(mm);
          Tm ? (_native.endPerformanceCounter(Tm), hm._NativePerformanceCounterHandles.delete(mm)) : hm.Warn(`Performance counter with name ${mm} was not started.`)
        }
      }
      static get Now() {
        return Dm.c.Now
      }
      static GetClassName(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = null;
        if (!Tm && mm.getClassName) fm = mm.getClassName();
        else {
          if (mm instanceof Object) {
            fm = (Tm ? mm : Object.getPrototypeOf(mm)).constructor.__bjsclassName__
          }
          fm || (fm = typeof mm)
        }
        return fm
      }
      static First(mm, Tm) {
        for (const fm of mm)
          if (Tm(fm)) return fm;
        return null
      }
      static getFullClassName(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = null,
          hm = null;
        if (!Tm && mm.getClassName) fm = mm.getClassName();
        else {
          if (mm instanceof Object) {
            const Am = Tm ? mm : Object.getPrototypeOf(mm);
            fm = Am.constructor.__bjsclassName__, hm = Am.constructor.__bjsmoduleName__
          }
          fm || (fm = typeof mm)
        }
        return fm ? (null != hm ? hm + "." : "") + fm : null
      }
      static async DelayAsync(mm) {
        await new Promise((Tm => {
          setTimeout((() => {
            Tm()
          }), mm)
        }))
      }
      static IsSafari() {
        return !!(0, am.l)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Vm(mm, Tm) {
      return fm => {
        fm.__bjsclassName__ = mm, fm.__bjsmoduleName__ = null != Tm ? Tm : null
      }
    }
    hm = jm, jm.AssetBaseUrl = "", jm.UseCustomRequestHeaders = !1, jm.CustomRequestHeaders = Rm.c.CustomRequestHeaders, jm.GetDOMTextContent = am.d, jm._DefaultCdnUrl = "https://cdn.babylonjs.com", jm._CdnVersion = "9.28.0", jm._DefaultAssetsUrl = "https://assets.babylonjs.com/core", jm.LoadScript = "undefined" === typeof _native ? hm._LoadScriptWeb : hm._LoadScriptNative, jm.GetAbsoluteUrl = "object" === typeof document ? mm => {
      const Tm = document.createElement("a");
      return Tm.href = mm, Tm.href
    } : "function" === typeof URL && "object" === typeof location ? mm => new URL(mm, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, jm.NoneLogLevel = xm.b.NoneLogLevel, jm.MessageLogLevel = xm.b.MessageLogLevel, jm.WarningLogLevel = xm.b.WarningLogLevel, jm.ErrorLogLevel = xm.b.ErrorLogLevel, jm.AllLogLevel = xm.b.AllLogLevel, jm.IsWindowObjectExist = am.p, jm.PerformanceNoneLogLevel = 0, jm.PerformanceUserMarkLogLevel = 1, jm.PerformanceConsoleLogLevel = 2, jm._NativePerformanceCounterHandles = new Map, jm.StartPerformanceCounter = hm._StartPerformanceCounterDisabled, jm.EndPerformanceCounter = hm._EndPerformanceCounterDisabled;
    class Im {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = mm, this.index = hm - 1, this._done = !1, this._fn = Tm, this._successCallback = fm
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(mm, Tm, fm) {
        const hm = new Im(mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return hm.executeNext(), hm
      }
      static SyncAsyncForLoop(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Im.Run(Math.ceil(mm / Tm), (hm => {
          Am && Am() ? hm.breakLoop() : setTimeout((() => {
            for (let am = 0; am < Tm; ++am) {
              const xm = hm.index * Tm + am;
              if (xm >= mm) break;
              if (fm(xm), Am && Am()) {
                hm.breakLoop();
                break
              }
            }
            hm.executeNext()
          }), am)
        }), hm)
      }
    }
    let Km = !1;

    function Qm() {
      Km || (Km = !0, jm.Mix = qm.l, jm.IsExponentOfTwo = qm.i, pm.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);