export const id = 234;
export const ids = [234];
export const modules = {
  38580: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy
    });
    var Uy = Wy(37350),
      hy = Wy(35909);
    class fy {
      static Instantiate(yb) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[yb]) return this.RegisteredExternalClasses[yb];
        const bb = (0, hy.b)(yb);
        if (bb) return bb;
        Uy.b.Warn(yb + " not found, you may have missed an import.");
        const Wy = yb.split(".");
        let fy = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Uy = 0, hy = Wy.length; Uy < hy; Uy++) fy = fy[Wy[Uy]];
        return "function" !== typeof fy ? null : fy
      }
    }
    fy.RegisteredExternalClasses = {}
  },
  38371: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(38325);
    class hy {
      static get Now() {
        return (0, Uy.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  38405: (yb, bb, Wy) => {
    function Uy(yb) {
      let bb = 1;
      do {
        bb *= 2
      } while (bb < yb);
      return bb === yb
    }

    function hy(yb, bb, Wy) {
      return yb * (1 - Wy) + bb * Wy
    }

    function fy(yb) {
      const bb = Zy(yb),
        Wy = cb(yb);
      return bb - yb > yb - Wy ? Wy : bb
    }

    function Zy(yb) {
      return yb--, yb |= yb >> 1, yb |= yb >> 2, yb |= yb >> 4, yb |= yb >> 8, yb |= yb >> 16, ++yb
    }

    function cb(yb) {
      return yb |= yb >> 1, yb |= yb >> 2, yb |= yb >> 4, yb |= yb >> 8, (yb |= yb >> 16) - (yb >> 1)
    }

    function Py(yb, bb) {
      let Wy;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Wy = cb(yb);
          break;
        case 2:
          Wy = fy(yb);
          break;
        default:
          Wy = Zy(yb)
      }
      return Math.min(Wy, bb)
    }
    Wy.d(bb, {
      b: () => cb,
      d: () => Py,
      g: () => Uy,
      h: () => hy,
      j: () => fy
    })
  },
  38576: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Cy,
      h: () => Vy,
      k: () => ly,
      m: () => mb
    });
    var Uy, hy = Wy(35893),
      fy = Wy(38325),
      Zy = Wy(37350),
      cb = Wy(37346),
      Py = Wy(38371),
      oy = Wy(38347),
      By = Wy(38516),
      Ky = Wy(35886),
      ey = Wy(38511),
      qb = Wy(38354),
      sy = Wy(38580),
      Sy = Wy(36559),
      Ey = Wy(38405);
    class ly {
      static get BaseUrl() {
        return ey.i.BaseUrl
      }
      static set BaseUrl(yb) {
        ey.i.BaseUrl = yb
      }
      static get CleanUrl() {
        return ey.i.CleanUrl
      }
      static set CleanUrl(yb) {
        ey.i.CleanUrl = yb
      }
      static IsAbsoluteUrl(yb) {
        return 0 === yb.indexOf("//") || -1 !== yb.indexOf("://") && (-1 !== yb.indexOf(".") && (-1 !== yb.indexOf("/") && (!(yb.indexOf(":") > yb.indexOf("/")) && (yb.indexOf("://") < yb.indexOf(".") || (0 === yb.indexOf("data:") || 0 === yb.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(yb) {
        ey.i.ScriptBaseUrl = yb
      }
      static get ScriptBaseUrl() {
        return ey.i.ScriptBaseUrl
      }
      static set CDNBaseUrl(yb) {
        Uy.ScriptBaseUrl = yb, Uy.AssetBaseUrl = yb
      }
      static set ScriptPreprocessUrl(yb) {
        ey.i.ScriptPreprocessUrl = yb
      }
      static get ScriptPreprocessUrl() {
        return ey.i.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return ey.i.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(yb) {
        ey.i.DefaultRetryStrategy = yb
      }
      static get CorsBehavior() {
        return ey.i.CorsBehavior
      }
      static set CorsBehavior(yb) {
        ey.i.CorsBehavior = yb
      }
      static get UseFallbackTexture() {
        return Ky.c.UseFallbackTexture
      }
      static set UseFallbackTexture(yb) {
        Ky.c.UseFallbackTexture = yb
      }
      static get RegisteredExternalClasses() {
        return sy.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(yb) {
        sy.e.RegisteredExternalClasses = yb
      }
      static get fallbackTexture() {
        return Ky.c.FallbackTexture
      }
      static set fallbackTexture(yb) {
        Ky.c.FallbackTexture = yb
      }
      static FetchToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = 4 * ((Math.abs(yb) * Wy % Wy | 0) + (Math.abs(bb) * Uy % Uy | 0) * Wy);
        fy.r = hy[Zy] / 255, fy.g = hy[Zy + 1] / 255, fy.b = hy[Zy + 2] / 255, fy.a = hy[Zy + 3] / 255
      }
      static Mix(yb, bb, Wy) {
        return 0
      }
      static Instantiate(yb) {
        return sy.e.Instantiate(yb)
      }
      static SetImmediate(yb) {
        qb.b.SetImmediate(yb)
      }
      static IsExponentOfTwo(yb) {
        return !0
      }
      static FloatRound(yb) {
        return Math.fround(yb)
      }
      static GetFilename(yb) {
        const bb = yb.lastIndexOf("/");
        return bb < 0 ? yb : yb.substring(bb + 1)
      }
      static GetFolderPath(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = yb.lastIndexOf("/");
        return Wy < 0 ? bb ? yb : "" : yb.substring(0, Wy + 1)
      }
      static ToDegrees(yb) {
        return 180 * yb / Math.PI
      }
      static ToRadians(yb) {
        return yb * Math.PI / 180
      }
      static SmoothAngleChange(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Uy = this.ToRadians(yb),
          hy = this.ToRadians(bb);
        return this.ToDegrees(Math.atan2((1 - Wy) * Math.sin(hy) + Wy * Math.sin(Uy), (1 - Wy) * Math.cos(hy) + Wy * Math.cos(Uy)))
      }
      static MakeArray(yb, bb) {
        return !0 === bb || void 0 !== yb && null != yb ? Array.isArray(yb) ? yb : [yb] : null
      }
      static GetPointerPrefix(yb) {
        return (0, fy.i)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(yb, bb) {
        (0, ey.K)(yb, bb)
      }
      static SetReferrerPolicyBehavior(yb, bb) {
        bb.referrerPolicy = yb
      }
      static get PreprocessUrl() {
        return ey.i.PreprocessUrl
      }
      static set PreprocessUrl(yb) {
        ey.i.PreprocessUrl = yb
      }
      static LoadImage(yb, bb, Wy, Uy, hy, fy) {
        return (0, ey.x)(yb, bb, Wy, Uy, hy, fy)
      }
      static LoadFile(yb, bb, Wy, Uy, hy, fy) {
        return (0, ey.t)(yb, bb, Wy, Uy, hy, fy)
      }
      static async LoadFileAsync(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Wy, Uy) => {
          (0, ey.t)(yb, (yb => {
            Wy(yb)
          }), void 0, void 0, bb, ((yb, bb) => {
            Uy(bb)
          }))
        }))
      }
      static GetAssetUrl(yb) {
        if (!yb) return "";
        if (Uy.AssetBaseUrl && yb.startsWith(Uy._DefaultAssetsUrl)) {
          const bb = Uy.AssetBaseUrl.endsWith("/") ? Uy.AssetBaseUrl.slice(0, -1) : Uy.AssetBaseUrl;
          return yb.replace(Uy._DefaultAssetsUrl, bb)
        }
        return yb
      }
      static GetBabylonScriptURL(yb, bb) {
        if (!yb) return "";
        if (yb.startsWith(Uy._DefaultCdnUrl))
          if (Uy.ScriptBaseUrl) {
            const bb = Uy.ScriptBaseUrl.endsWith("/") ? Uy.ScriptBaseUrl.slice(0, -1) : Uy.ScriptBaseUrl;
            yb = yb.replace(Uy._DefaultCdnUrl, bb)
          } else if (Uy._CdnVersion) {
          const bb = `${Uy._DefaultCdnUrl}/v${Uy._CdnVersion}`;
          yb.startsWith(bb) || (yb = yb.replace(Uy._DefaultCdnUrl, bb))
        }
        return yb = Uy.ScriptPreprocessUrl(yb), bb && !Uy.IsAbsoluteUrl(yb) && (yb = Uy.GetAbsoluteUrl(yb)), yb
      }
      static LoadBabylonScript(yb, bb, Wy, hy) {
        yb = Uy.GetBabylonScriptURL(yb), Uy.LoadScript(yb, bb, Wy)
      }
      static async LoadBabylonScriptAsync(yb) {
        return yb = Uy.GetBabylonScriptURL(yb), await Uy.LoadScriptAsync(yb)
      }
      static _LoadScriptNative(yb, bb, Wy, hy) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const yb = "Loading a script as an ES module is not supported in Babylon Native";
            return void Wy?.(yb, new Error(yb))
          }
          Uy.LoadFile(yb, (yb => {
            try {
              Function(yb).apply(null), bb && bb()
            } catch (Uy) {
              Wy && Wy("LoadScript Error", Uy)
            }
          }), void 0, void 0, !1, ((yb, bb) => {
            Wy && Wy("LoadScript Error", bb)
          }))
        }
      }
      static _LoadScriptWeb(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(yb), bb && bb()
          } catch (Py) {
            Wy?.(`Unable to load script '${yb}' in worker`, Py)
          }
          return
        }
        if (!(0, fy.i)()) return void Wy?.(`Cannot load script '${yb}' outside of a window or a worker`);
        const Zy = document.getElementsByTagName("head")[0],
          cb = document.createElement("script");
        hy ? (cb.setAttribute("type", "module"), cb.innerText = yb) : (cb.setAttribute("type", "text/javascript"), cb.setAttribute("src", yb)), Uy && (cb.id = Uy), cb.onload = () => {
          bb && bb()
        }, cb.onerror = bb => {
          Wy && Wy(`Unable to load script '${yb}'`, bb)
        }, Zy.appendChild(cb)
      }
      static async LoadScriptAsync(yb, bb) {
        return await new Promise(((Wy, Uy) => {
          this.LoadScript(yb, (() => {
            Wy()
          }), ((yb, bb) => {
            Uy(bb || new Error(yb))
          }), bb)
        }))
      }
      static ReadFileAsDataURL(yb, bb, Wy) {
        const Uy = new FileReader,
          fy = {
            onCompleteObservable: new hy.c,
            abort: () => Uy.abort()
          };
        return Uy.onloadend = () => {
          fy.onCompleteObservable.notifyObservers(fy)
        }, Uy.onload = yb => {
          bb(yb.target.result)
        }, Uy.onprogress = Wy, Uy.readAsDataURL(yb), fy
      }
      static ReadFile(yb, bb, Wy, Uy, hy) {
        return (0, ey.A)(yb, bb, Wy, Uy, hy)
      }
      static FileAsURL(yb) {
        const bb = new Blob([yb]);
        return window.URL.createObjectURL(bb)
      }
      static Format(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return yb.toFixed(bb)
      }
      static DeepCopy(yb, bb, Wy, Uy) {
        cb.d.DeepCopy(yb, bb, Wy, Uy)
      }
      static IsEmpty(yb) {
        for (const bb in yb)
          if (Object.prototype.hasOwnProperty.call(yb, bb)) return !1;
        return !0
      }
      static RegisterTopRootEvents(yb, bb) {
        for (let Uy = 0; Uy < bb.length; Uy++) {
          const hy = bb[Uy];
          yb.addEventListener(hy.name, hy.handler, !1);
          try {
            window.parent && window.parent.addEventListener(hy.name, hy.handler, !1)
          } catch (Wy) {}
        }
      }
      static UnregisterTopRootEvents(yb, bb) {
        for (let Uy = 0; Uy < bb.length; Uy++) {
          const hy = bb[Uy];
          yb.removeEventListener(hy.name, hy.handler);
          try {
            yb.parent && yb.parent.removeEventListener(hy.name, hy.handler)
          } catch (Wy) {}
        }
      }
      static async DumpFramebuffer(yb, bb, Wy, Uy) {
        throw (0, oy.g)("DumpTools")
      }
      static DumpData(yb, bb, Wy, Uy) {
        throw (0, oy.g)("DumpTools")
      }
      static async DumpDataAsync(yb, bb, Wy) {
        throw (0, oy.g)("DumpTools")
      }
      static _IsOffScreenCanvas(yb) {
        return void 0 !== yb.convertToBlob
      }
      static ToBlob(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          hy = arguments.length > 3 ? arguments[3] : void 0;
        Uy._IsOffScreenCanvas(yb) || yb.toBlob || (yb.toBlob = function(yb, bb, Wy) {
          setTimeout((() => {
            const Uy = atob(this.toDataURL(bb, Wy).split(",")[1]),
              hy = Uy.length,
              fy = new Uint8Array(hy);
            for (let yb = 0; yb < hy; yb++) fy[yb] = Uy.charCodeAt(yb);
            yb(new Blob([fy]))
          }))
        }), Uy._IsOffScreenCanvas(yb) ? yb.convertToBlob({
          type: Wy,
          quality: hy
        }).then((yb => bb(yb))) : yb.toBlob((function(yb) {
          bb(yb)
        }), Wy, hy)
      }
      static DownloadBlob(yb, bb) {
        if ("download" in document.createElement("a")) {
          if (!bb) {
            const yb = new Date;
            bb = "screenshot_" + ((yb.getFullYear() + "-" + (yb.getMonth() + 1)).slice(2) + "-" + yb.getDate() + "_" + yb.getHours() + "-" + ("0" + yb.getMinutes()).slice(-2)) + ".png"
          }
          Uy.Download(yb, bb)
        } else if (yb && "undefined" !== typeof URL) {
          const bb = URL.createObjectURL(yb),
            Wy = window.open("");
          if (!Wy) return;
          const Uy = Wy.document.createElement("img");
          Uy.onload = function() {
            URL.revokeObjectURL(bb)
          }, Uy.src = bb, Wy.document.body.appendChild(Uy)
        }
      }
      static EncodeScreenshotCanvasData(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          hy = arguments.length > 3 ? arguments[3] : void 0,
          fy = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof hy && bb) {
          if (bb) {
            if (Uy._IsOffScreenCanvas(yb)) return void yb.convertToBlob({
              type: Wy,
              quality: fy
            }).then((yb => {
              const Wy = new FileReader;
              Wy.readAsDataURL(yb), Wy.onloadend = () => {
                const yb = Wy.result;
                bb(yb)
              }
            }));
            const hy = yb.toDataURL(Wy, fy);
            bb(hy)
          }
        } else this.ToBlob(yb, (function(yb) {
          yb && Uy.DownloadBlob(yb, hy), bb && bb("")
        }), Wy, fy)
      }
      static Download(yb, bb) {
        if ("undefined" === typeof URL) return;
        const Wy = window.URL.createObjectURL(yb),
          Uy = document.createElement("a");
        document.body.appendChild(Uy), Uy.style.display = "none", Uy.href = Wy, Uy.download = bb, Uy.addEventListener("click", (() => {
          Uy.parentElement && Uy.parentElement.removeChild(Uy)
        })), Uy.click(), window.URL.revokeObjectURL(Wy)
      }
      static BackCompatCameraNoPreventDefault(yb) {
        return "boolean" === typeof yb[0] ? yb[0] : "boolean" === typeof yb[1] && yb[1]
      }
      static CreateScreenshot(yb, bb, Wy, Uy) {
        throw (0, oy.g)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(yb, bb, Wy) {
        throw (0, oy.g)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(yb, bb, Wy, Uy) {
        throw (0, oy.g)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(yb, bb, Wy) {
        throw (0, oy.g)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Sy.e)()
      }
      static IsBase64(yb) {
        return (0, ey.q)(yb)
      }
      static DecodeBase64(yb) {
        return (0, ey.e)(yb)
      }
      static get errorsCount() {
        return Zy.b.errorsCount
      }
      static Log(yb) {
        Zy.b.Log(yb)
      }
      static Warn(yb) {
        Zy.b.Warn(yb)
      }
      static Error(yb) {
        Zy.b.Error(yb)
      }
      static get LogCache() {
        return Zy.b.LogCache
      }
      static ClearLogCache() {
        Zy.b.ClearLogCache()
      }
      static set LogLevels(yb) {
        Zy.b.LogLevels = yb
      }
      static set PerformanceLogLevel(yb) {
        (yb & Uy.PerformanceUserMarkLogLevel) !== Uy.PerformanceUserMarkLogLevel ? (yb & Uy.PerformanceConsoleLogLevel) !== Uy.PerformanceConsoleLogLevel ? (Uy.StartPerformanceCounter = Uy._StartPerformanceCounterDisabled, Uy.EndPerformanceCounter = Uy._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Uy.StartPerformanceCounter = Uy._StartMarkNative, Uy.EndPerformanceCounter = Uy._EndMarkNative) : (Uy.StartPerformanceCounter = Uy._StartPerformanceConsole, Uy.EndPerformanceCounter = Uy._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Uy.StartPerformanceCounter = Uy._StartMarkNative, Uy.EndPerformanceCounter = Uy._EndMarkNative) : (Uy.StartPerformanceCounter = Uy._StartUserMark, Uy.EndPerformanceCounter = Uy._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(yb, bb) {}
      static _EndPerformanceCounterDisabled(yb, bb) {}
      static _StartUserMark(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Uy._Performance) {
          if (!(0, fy.i)()) return;
          Uy._Performance = window.performance
        }
        bb && Uy._Performance.mark && Uy._Performance.mark(yb + "-Begin")
      }
      static _EndUserMark(yb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Uy._Performance.mark && (Uy._Performance.mark(yb + "-End"), Uy._Performance.measure(yb, yb + "-Begin", yb + "-End"))
      }
      static _StartPerformanceConsole(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        bb && (Uy._StartUserMark(yb, bb), console.time && console.time(yb))
      }
      static _EndPerformanceConsole(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        bb && (Uy._EndUserMark(yb, bb), console.timeEnd(yb))
      }
      static _StartMarkNative(yb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Uy._NativePerformanceCounterHandles.has(yb)) Uy.Warn(`Performance counter with name ${yb} is already started.`);
          else {
            const bb = _native.startPerformanceCounter(yb);
            Uy._NativePerformanceCounterHandles.set(yb, bb)
          }
      }
      static _EndMarkNative(yb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const bb = Uy._NativePerformanceCounterHandles.get(yb);
          bb ? (_native.endPerformanceCounter(bb), Uy._NativePerformanceCounterHandles.delete(yb)) : Uy.Warn(`Performance counter with name ${yb} was not started.`)
        }
      }
      static get Now() {
        return Py.d.Now
      }
      static GetClassName(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = null;
        if (!bb && yb.getClassName) Wy = yb.getClassName();
        else {
          if (yb instanceof Object) {
            Wy = (bb ? yb : Object.getPrototypeOf(yb)).constructor.__bjsclassName__
          }
          Wy || (Wy = typeof yb)
        }
        return Wy
      }
      static First(yb, bb) {
        for (const Wy of yb)
          if (bb(Wy)) return Wy;
        return null
      }
      static getFullClassName(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = null,
          Uy = null;
        if (!bb && yb.getClassName) Wy = yb.getClassName();
        else {
          if (yb instanceof Object) {
            const hy = bb ? yb : Object.getPrototypeOf(yb);
            Wy = hy.constructor.__bjsclassName__, Uy = hy.constructor.__bjsmoduleName__
          }
          Wy || (Wy = typeof yb)
        }
        return Wy ? (null != Uy ? Uy + "." : "") + Wy : null
      }
      static async DelayAsync(yb) {
        await new Promise((bb => {
          setTimeout((() => {
            bb()
          }), yb)
        }))
      }
      static IsSafari() {
        return !!(0, fy.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function mb(yb, bb) {
      return Wy => {
        Wy.__bjsclassName__ = yb, Wy.__bjsmoduleName__ = null != bb ? bb : null
      }
    }
    Uy = ly, ly.AssetBaseUrl = "", ly.UseCustomRequestHeaders = !1, ly.CustomRequestHeaders = By.c.CustomRequestHeaders, ly.GetDOMTextContent = fy.d, ly._DefaultCdnUrl = "https://cdn.babylonjs.com", ly._CdnVersion = "9.28.0", ly._DefaultAssetsUrl = "https://assets.babylonjs.com/core", ly.LoadScript = "undefined" === typeof _native ? Uy._LoadScriptWeb : Uy._LoadScriptNative, ly.GetAbsoluteUrl = "object" === typeof document ? yb => {
      const bb = document.createElement("a");
      return bb.href = yb, bb.href
    } : "function" === typeof URL && "object" === typeof location ? yb => new URL(yb, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, ly.NoneLogLevel = Zy.b.NoneLogLevel, ly.MessageLogLevel = Zy.b.MessageLogLevel, ly.WarningLogLevel = Zy.b.WarningLogLevel, ly.ErrorLogLevel = Zy.b.ErrorLogLevel, ly.AllLogLevel = Zy.b.AllLogLevel, ly.IsWindowObjectExist = fy.i, ly.PerformanceNoneLogLevel = 0, ly.PerformanceUserMarkLogLevel = 1, ly.PerformanceConsoleLogLevel = 2, ly._NativePerformanceCounterHandles = new Map, ly.StartPerformanceCounter = Uy._StartPerformanceCounterDisabled, ly.EndPerformanceCounter = Uy._EndPerformanceCounterDisabled;
    class Cy {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = yb, this.index = Uy - 1, this._done = !1, this._fn = bb, this._successCallback = Wy
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(yb, bb, Wy) {
        const Uy = new Cy(yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Uy.executeNext(), Uy
      }
      static SyncAsyncForLoop(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Cy.Run(Math.ceil(yb / bb), (Uy => {
          hy && hy() ? Uy.breakLoop() : setTimeout((() => {
            for (let fy = 0; fy < bb; ++fy) {
              const Zy = Uy.index * bb + fy;
              if (Zy >= yb) break;
              if (Wy(Zy), hy && hy()) {
                Uy.breakLoop();
                break
              }
            }
            Uy.executeNext()
          }), fy)
        }), Uy)
      }
    }
    let Ty = !1;

    function Vy() {
      Ty || (Ty = !0, ly.Mix = Ey.h, ly.IsExponentOfTwo = Ey.g, Ky.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);