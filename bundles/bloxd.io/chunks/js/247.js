export const id = 247;
export const ids = [247];
export const modules = {
  39407: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209),
      Sv = Pv(36631);
    class ev {
      static Instantiate(vv) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[vv]) return this.RegisteredExternalClasses[vv];
        const zv = (0, Sv.b)(vv);
        if (zv) return zv;
        hv.d.Warn(vv + " not found, you may have missed an import.");
        const Pv = vv.split(".");
        let ev = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let hv = 0, Sv = Pv.length; hv < Sv; hv++) ev = ev[Pv[hv]];
        return "function" !== typeof ev ? null : ev
      }
    }
    ev.RegisteredExternalClasses = {}
  },
  39220: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(39167);
    class Sv {
      static get Now() {
        return (0, hv.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39247: (vv, zv, Pv) => {
    function hv(vv) {
      let zv = 1;
      do {
        zv *= 2
      } while (zv < vv);
      return zv === vv
    }

    function Sv(vv, zv, Pv) {
      return vv * (1 - Pv) + zv * Pv
    }

    function ev(vv) {
      const zv = gv(vv),
        Pv = pv(vv);
      return zv - vv > vv - Pv ? Pv : zv
    }

    function gv(vv) {
      return vv--, vv |= vv >> 1, vv |= vv >> 2, vv |= vv >> 4, vv |= vv >> 8, vv |= vv >> 16, ++vv
    }

    function pv(vv) {
      return vv |= vv >> 1, vv |= vv >> 2, vv |= vv >> 4, vv |= vv >> 8, (vv |= vv >> 16) - (vv >> 1)
    }

    function dv(vv, zv) {
      let Pv;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Pv = pv(vv);
          break;
        case 2:
          Pv = ev(vv);
          break;
        default:
          Pv = gv(vv)
      }
      return Math.min(Pv, zv)
    }
    Pv.d(zv, {
      b: () => pv,
      c: () => dv,
      e: () => hv,
      f: () => Sv,
      i: () => ev
    })
  },
  39399: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Gv,
      e: () => jv,
      h: () => iv,
      i: () => cv
    });
    var hv, Sv = Pv(36618),
      ev = Pv(39167),
      gv = Pv(38209),
      pv = Pv(38207),
      dv = Pv(39220),
      Nv = Pv(39190),
      lv = Pv(39346),
      Tv = Pv(36615),
      Wv = Pv(39338),
      wv = Pv(39204),
      av = Pv(39407),
      sv = Pv(37431),
      Cv = Pv(39247);
    class iv {
      static get BaseUrl() {
        return Wv.f.BaseUrl
      }
      static set BaseUrl(vv) {
        Wv.f.BaseUrl = vv
      }
      static get CleanUrl() {
        return Wv.f.CleanUrl
      }
      static set CleanUrl(vv) {
        Wv.f.CleanUrl = vv
      }
      static IsAbsoluteUrl(vv) {
        return 0 === vv.indexOf("//") || -1 !== vv.indexOf("://") && (-1 !== vv.indexOf(".") && (-1 !== vv.indexOf("/") && (!(vv.indexOf(":") > vv.indexOf("/")) && (vv.indexOf("://") < vv.indexOf(".") || (0 === vv.indexOf("data:") || 0 === vv.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(vv) {
        Wv.f.ScriptBaseUrl = vv
      }
      static get ScriptBaseUrl() {
        return Wv.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(vv) {
        hv.ScriptBaseUrl = vv, hv.AssetBaseUrl = vv
      }
      static set ScriptPreprocessUrl(vv) {
        Wv.f.ScriptPreprocessUrl = vv
      }
      static get ScriptPreprocessUrl() {
        return Wv.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Wv.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(vv) {
        Wv.f.DefaultRetryStrategy = vv
      }
      static get CorsBehavior() {
        return Wv.f.CorsBehavior
      }
      static set CorsBehavior(vv) {
        Wv.f.CorsBehavior = vv
      }
      static get UseFallbackTexture() {
        return Tv.e.UseFallbackTexture
      }
      static set UseFallbackTexture(vv) {
        Tv.e.UseFallbackTexture = vv
      }
      static get RegisteredExternalClasses() {
        return av.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(vv) {
        av.b.RegisteredExternalClasses = vv
      }
      static get fallbackTexture() {
        return Tv.e.FallbackTexture
      }
      static set fallbackTexture(vv) {
        Tv.e.FallbackTexture = vv
      }
      static FetchToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = 4 * ((Math.abs(vv) * Pv % Pv | 0) + (Math.abs(zv) * hv % hv | 0) * Pv);
        ev.r = Sv[gv] / 255, ev.g = Sv[gv + 1] / 255, ev.b = Sv[gv + 2] / 255, ev.a = Sv[gv + 3] / 255
      }
      static Mix(vv, zv, Pv) {
        return 0
      }
      static Instantiate(vv) {
        return av.b.Instantiate(vv)
      }
      static SetImmediate(vv) {
        wv.e.SetImmediate(vv)
      }
      static IsExponentOfTwo(vv) {
        return !0
      }
      static FloatRound(vv) {
        return Math.fround(vv)
      }
      static GetFilename(vv) {
        const zv = vv.lastIndexOf("/");
        return zv < 0 ? vv : vv.substring(zv + 1)
      }
      static GetFolderPath(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = vv.lastIndexOf("/");
        return Pv < 0 ? zv ? vv : "" : vv.substring(0, Pv + 1)
      }
      static ToDegrees(vv) {
        return 180 * vv / Math.PI
      }
      static ToRadians(vv) {
        return vv * Math.PI / 180
      }
      static SmoothAngleChange(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const hv = this.ToRadians(vv),
          Sv = this.ToRadians(zv);
        return this.ToDegrees(Math.atan2((1 - Pv) * Math.sin(Sv) + Pv * Math.sin(hv), (1 - Pv) * Math.cos(Sv) + Pv * Math.cos(hv)))
      }
      static MakeArray(vv, zv) {
        return !0 === zv || void 0 !== vv && null != vv ? Array.isArray(vv) ? vv : [vv] : null
      }
      static GetPointerPrefix(vv) {
        return (0, ev.l)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(vv, zv) {
        (0, Wv.C)(vv, zv)
      }
      static SetReferrerPolicyBehavior(vv, zv) {
        zv.referrerPolicy = vv
      }
      static get PreprocessUrl() {
        return Wv.f.PreprocessUrl
      }
      static set PreprocessUrl(vv) {
        Wv.f.PreprocessUrl = vv
      }
      static LoadImage(vv, zv, Pv, hv, Sv, ev) {
        return (0, Wv.n)(vv, zv, Pv, hv, Sv, ev)
      }
      static LoadFile(vv, zv, Pv, hv, Sv, ev) {
        return (0, Wv.l)(vv, zv, Pv, hv, Sv, ev)
      }
      static async LoadFileAsync(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Pv, hv) => {
          (0, Wv.l)(vv, (vv => {
            Pv(vv)
          }), void 0, void 0, zv, ((vv, zv) => {
            hv(zv)
          }))
        }))
      }
      static GetAssetUrl(vv) {
        if (!vv) return "";
        if (hv.AssetBaseUrl && vv.startsWith(hv._DefaultAssetsUrl)) {
          const zv = hv.AssetBaseUrl.endsWith("/") ? hv.AssetBaseUrl.slice(0, -1) : hv.AssetBaseUrl;
          return vv.replace(hv._DefaultAssetsUrl, zv)
        }
        return vv
      }
      static GetBabylonScriptURL(vv, zv) {
        if (!vv) return "";
        if (vv.startsWith(hv._DefaultCdnUrl))
          if (hv.ScriptBaseUrl) {
            const zv = hv.ScriptBaseUrl.endsWith("/") ? hv.ScriptBaseUrl.slice(0, -1) : hv.ScriptBaseUrl;
            vv = vv.replace(hv._DefaultCdnUrl, zv)
          } else if (hv._CdnVersion) {
          const zv = `${hv._DefaultCdnUrl}/v${hv._CdnVersion}`;
          vv.startsWith(zv) || (vv = vv.replace(hv._DefaultCdnUrl, zv))
        }
        return vv = hv.ScriptPreprocessUrl(vv), zv && !hv.IsAbsoluteUrl(vv) && (vv = hv.GetAbsoluteUrl(vv)), vv
      }
      static LoadBabylonScript(vv, zv, Pv, Sv) {
        vv = hv.GetBabylonScriptURL(vv), hv.LoadScript(vv, zv, Pv)
      }
      static async LoadBabylonScriptAsync(vv) {
        return vv = hv.GetBabylonScriptURL(vv), await hv.LoadScriptAsync(vv)
      }
      static _LoadScriptNative(vv, zv, Pv, Sv) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const vv = "Loading a script as an ES module is not supported in Babylon Native";
            return void Pv?.(vv, new Error(vv))
          }
          hv.LoadFile(vv, (vv => {
            try {
              Function(vv).apply(null), zv && zv()
            } catch (hv) {
              Pv && Pv("LoadScript Error", hv)
            }
          }), void 0, void 0, !1, ((vv, zv) => {
            Pv && Pv("LoadScript Error", zv)
          }))
        }
      }
      static _LoadScriptWeb(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(vv), zv && zv()
          } catch (dv) {
            Pv?.(`Unable to load script '${vv}' in worker`, dv)
          }
          return
        }
        if (!(0, ev.l)()) return void Pv?.(`Cannot load script '${vv}' outside of a window or a worker`);
        const gv = document.getElementsByTagName("head")[0],
          pv = document.createElement("script");
        Sv ? (pv.setAttribute("type", "module"), pv.innerText = vv) : (pv.setAttribute("type", "text/javascript"), pv.setAttribute("src", vv)), hv && (pv.id = hv), pv.onload = () => {
          zv && zv()
        }, pv.onerror = zv => {
          Pv && Pv(`Unable to load script '${vv}'`, zv)
        }, gv.appendChild(pv)
      }
      static async LoadScriptAsync(vv, zv) {
        return await new Promise(((Pv, hv) => {
          this.LoadScript(vv, (() => {
            Pv()
          }), ((vv, zv) => {
            hv(zv || new Error(vv))
          }), zv)
        }))
      }
      static ReadFileAsDataURL(vv, zv, Pv) {
        const hv = new FileReader,
          ev = {
            onCompleteObservable: new Sv.c,
            abort: () => hv.abort()
          };
        return hv.onloadend = () => {
          ev.onCompleteObservable.notifyObservers(ev)
        }, hv.onload = vv => {
          zv(vv.target.result)
        }, hv.onprogress = Pv, hv.readAsDataURL(vv), ev
      }
      static ReadFile(vv, zv, Pv, hv, Sv) {
        return (0, Wv.r)(vv, zv, Pv, hv, Sv)
      }
      static FileAsURL(vv) {
        const zv = new Blob([vv]);
        return window.URL.createObjectURL(zv)
      }
      static Format(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return vv.toFixed(zv)
      }
      static DeepCopy(vv, zv, Pv, hv) {
        pv.b.DeepCopy(vv, zv, Pv, hv)
      }
      static IsEmpty(vv) {
        for (const zv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, zv)) return !1;
        return !0
      }
      static RegisterTopRootEvents(vv, zv) {
        for (let hv = 0; hv < zv.length; hv++) {
          const Sv = zv[hv];
          vv.addEventListener(Sv.name, Sv.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Sv.name, Sv.handler, !1)
          } catch (Pv) {}
        }
      }
      static UnregisterTopRootEvents(vv, zv) {
        for (let hv = 0; hv < zv.length; hv++) {
          const Sv = zv[hv];
          vv.removeEventListener(Sv.name, Sv.handler);
          try {
            vv.parent && vv.parent.removeEventListener(Sv.name, Sv.handler)
          } catch (Pv) {}
        }
      }
      static async DumpFramebuffer(vv, zv, Pv, hv) {
        throw (0, Nv.m)("DumpTools")
      }
      static DumpData(vv, zv, Pv, hv) {
        throw (0, Nv.m)("DumpTools")
      }
      static async DumpDataAsync(vv, zv, Pv) {
        throw (0, Nv.m)("DumpTools")
      }
      static _IsOffScreenCanvas(vv) {
        return void 0 !== vv.convertToBlob
      }
      static ToBlob(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Sv = arguments.length > 3 ? arguments[3] : void 0;
        hv._IsOffScreenCanvas(vv) || vv.toBlob || (vv.toBlob = function(vv, zv, Pv) {
          setTimeout((() => {
            const hv = atob(this.toDataURL(zv, Pv).split(",")[1]),
              Sv = hv.length,
              ev = new Uint8Array(Sv);
            for (let vv = 0; vv < Sv; vv++) ev[vv] = hv.charCodeAt(vv);
            vv(new Blob([ev]))
          }))
        }), hv._IsOffScreenCanvas(vv) ? vv.convertToBlob({
          type: Pv,
          quality: Sv
        }).then((vv => zv(vv))) : vv.toBlob((function(vv) {
          zv(vv)
        }), Pv, Sv)
      }
      static DownloadBlob(vv, zv) {
        if ("download" in document.createElement("a")) {
          if (!zv) {
            const vv = new Date;
            zv = "screenshot_" + ((vv.getFullYear() + "-" + (vv.getMonth() + 1)).slice(2) + "-" + vv.getDate() + "_" + vv.getHours() + "-" + ("0" + vv.getMinutes()).slice(-2)) + ".png"
          }
          hv.Download(vv, zv)
        } else if (vv && "undefined" !== typeof URL) {
          const zv = URL.createObjectURL(vv),
            Pv = window.open("");
          if (!Pv) return;
          const hv = Pv.document.createElement("img");
          hv.onload = function() {
            URL.revokeObjectURL(zv)
          }, hv.src = zv, Pv.document.body.appendChild(hv)
        }
      }
      static EncodeScreenshotCanvasData(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Sv = arguments.length > 3 ? arguments[3] : void 0,
          ev = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Sv && zv) {
          if (zv) {
            if (hv._IsOffScreenCanvas(vv)) return void vv.convertToBlob({
              type: Pv,
              quality: ev
            }).then((vv => {
              const Pv = new FileReader;
              Pv.readAsDataURL(vv), Pv.onloadend = () => {
                const vv = Pv.result;
                zv(vv)
              }
            }));
            const Sv = vv.toDataURL(Pv, ev);
            zv(Sv)
          }
        } else this.ToBlob(vv, (function(vv) {
          vv && hv.DownloadBlob(vv, Sv), zv && zv("")
        }), Pv, ev)
      }
      static Download(vv, zv) {
        if ("undefined" === typeof URL) return;
        const Pv = window.URL.createObjectURL(vv),
          hv = document.createElement("a");
        document.body.appendChild(hv), hv.style.display = "none", hv.href = Pv, hv.download = zv, hv.addEventListener("click", (() => {
          hv.parentElement && hv.parentElement.removeChild(hv)
        })), hv.click(), window.URL.revokeObjectURL(Pv)
      }
      static BackCompatCameraNoPreventDefault(vv) {
        return "boolean" === typeof vv[0] ? vv[0] : "boolean" === typeof vv[1] && vv[1]
      }
      static CreateScreenshot(vv, zv, Pv, hv) {
        throw (0, Nv.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(vv, zv, Pv) {
        throw (0, Nv.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(vv, zv, Pv, hv) {
        throw (0, Nv.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(vv, zv, Pv) {
        throw (0, Nv.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, sv.b)()
      }
      static IsBase64(vv) {
        return (0, Wv.k)(vv)
      }
      static DecodeBase64(vv) {
        return (0, Wv.e)(vv)
      }
      static get errorsCount() {
        return gv.d.errorsCount
      }
      static Log(vv) {
        gv.d.Log(vv)
      }
      static Warn(vv) {
        gv.d.Warn(vv)
      }
      static Error(vv) {
        gv.d.Error(vv)
      }
      static get LogCache() {
        return gv.d.LogCache
      }
      static ClearLogCache() {
        gv.d.ClearLogCache()
      }
      static set LogLevels(vv) {
        gv.d.LogLevels = vv
      }
      static set PerformanceLogLevel(vv) {
        (vv & hv.PerformanceUserMarkLogLevel) !== hv.PerformanceUserMarkLogLevel ? (vv & hv.PerformanceConsoleLogLevel) !== hv.PerformanceConsoleLogLevel ? (hv.StartPerformanceCounter = hv._StartPerformanceCounterDisabled, hv.EndPerformanceCounter = hv._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), hv.StartPerformanceCounter = hv._StartMarkNative, hv.EndPerformanceCounter = hv._EndMarkNative) : (hv.StartPerformanceCounter = hv._StartPerformanceConsole, hv.EndPerformanceCounter = hv._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), hv.StartPerformanceCounter = hv._StartMarkNative, hv.EndPerformanceCounter = hv._EndMarkNative) : (hv.StartPerformanceCounter = hv._StartUserMark, hv.EndPerformanceCounter = hv._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(vv, zv) {}
      static _EndPerformanceCounterDisabled(vv, zv) {}
      static _StartUserMark(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!hv._Performance) {
          if (!(0, ev.l)()) return;
          hv._Performance = window.performance
        }
        zv && hv._Performance.mark && hv._Performance.mark(vv + "-Begin")
      }
      static _EndUserMark(vv) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && hv._Performance.mark && (hv._Performance.mark(vv + "-End"), hv._Performance.measure(vv, vv + "-Begin", vv + "-End"))
      }
      static _StartPerformanceConsole(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        zv && (hv._StartUserMark(vv, zv), console.time && console.time(vv))
      }
      static _EndPerformanceConsole(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        zv && (hv._EndUserMark(vv, zv), console.timeEnd(vv))
      }
      static _StartMarkNative(vv) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (hv._NativePerformanceCounterHandles.has(vv)) hv.Warn(`Performance counter with name ${vv} is already started.`);
          else {
            const zv = _native.startPerformanceCounter(vv);
            hv._NativePerformanceCounterHandles.set(vv, zv)
          }
      }
      static _EndMarkNative(vv) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const zv = hv._NativePerformanceCounterHandles.get(vv);
          zv ? (_native.endPerformanceCounter(zv), hv._NativePerformanceCounterHandles.delete(vv)) : hv.Warn(`Performance counter with name ${vv} was not started.`)
        }
      }
      static get Now() {
        return dv.c.Now
      }
      static GetClassName(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = null;
        if (!zv && vv.getClassName) Pv = vv.getClassName();
        else {
          if (vv instanceof Object) {
            Pv = (zv ? vv : Object.getPrototypeOf(vv)).constructor.__bjsclassName__
          }
          Pv || (Pv = typeof vv)
        }
        return Pv
      }
      static First(vv, zv) {
        for (const Pv of vv)
          if (zv(Pv)) return Pv;
        return null
      }
      static getFullClassName(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = null,
          hv = null;
        if (!zv && vv.getClassName) Pv = vv.getClassName();
        else {
          if (vv instanceof Object) {
            const Sv = zv ? vv : Object.getPrototypeOf(vv);
            Pv = Sv.constructor.__bjsclassName__, hv = Sv.constructor.__bjsmoduleName__
          }
          Pv || (Pv = typeof vv)
        }
        return Pv ? (null != hv ? hv + "." : "") + Pv : null
      }
      static async DelayAsync(vv) {
        await new Promise((zv => {
          setTimeout((() => {
            zv()
          }), vv)
        }))
      }
      static IsSafari() {
        return !!(0, ev.k)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function cv(vv, zv) {
      return Pv => {
        Pv.__bjsclassName__ = vv, Pv.__bjsmoduleName__ = null != zv ? zv : null
      }
    }
    hv = iv, iv.AssetBaseUrl = "", iv.UseCustomRequestHeaders = !1, iv.CustomRequestHeaders = lv.b.CustomRequestHeaders, iv.GetDOMTextContent = ev.e, iv._DefaultCdnUrl = "https://cdn.babylonjs.com", iv._CdnVersion = "9.28.0", iv._DefaultAssetsUrl = "https://assets.babylonjs.com/core", iv.LoadScript = "undefined" === typeof _native ? hv._LoadScriptWeb : hv._LoadScriptNative, iv.GetAbsoluteUrl = "object" === typeof document ? vv => {
      const zv = document.createElement("a");
      return zv.href = vv, zv.href
    } : "function" === typeof URL && "object" === typeof location ? vv => new URL(vv, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, iv.NoneLogLevel = gv.d.NoneLogLevel, iv.MessageLogLevel = gv.d.MessageLogLevel, iv.WarningLogLevel = gv.d.WarningLogLevel, iv.ErrorLogLevel = gv.d.ErrorLogLevel, iv.AllLogLevel = gv.d.AllLogLevel, iv.IsWindowObjectExist = ev.l, iv.PerformanceNoneLogLevel = 0, iv.PerformanceUserMarkLogLevel = 1, iv.PerformanceConsoleLogLevel = 2, iv._NativePerformanceCounterHandles = new Map, iv.StartPerformanceCounter = hv._StartPerformanceCounterDisabled, iv.EndPerformanceCounter = hv._EndPerformanceCounterDisabled;
    class Gv {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = vv, this.index = hv - 1, this._done = !1, this._fn = zv, this._successCallback = Pv
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(vv, zv, Pv) {
        const hv = new Gv(vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return hv.executeNext(), hv
      }
      static SyncAsyncForLoop(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Gv.Run(Math.ceil(vv / zv), (hv => {
          Sv && Sv() ? hv.breakLoop() : setTimeout((() => {
            for (let ev = 0; ev < zv; ++ev) {
              const gv = hv.index * zv + ev;
              if (gv >= vv) break;
              if (Pv(gv), Sv && Sv()) {
                hv.breakLoop();
                break
              }
            }
            hv.executeNext()
          }), ev)
        }), hv)
      }
    }
    let mv = !1;

    function jv() {
      mv || (mv = !0, iv.Mix = Cv.f, iv.IsExponentOfTwo = Cv.e, Tv.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);