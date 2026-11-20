export const id = 245;
export const ids = [245];
export const modules = {
  39266: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(38097),
      Wz = sz(36518);
    class Xz {
      static Instantiate(zz) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[zz]) return this.RegisteredExternalClasses[zz];
        const tz = (0, Wz.e)(zz);
        if (tz) return tz;
        Fz.e.Warn(zz + " not found, you may have missed an import.");
        const sz = zz.split(".");
        let Xz = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Fz = 0, Wz = sz.length; Fz < Wz; Fz++) Xz = Xz[sz[Fz]];
        return "function" !== typeof Xz ? null : Xz
      }
    }
    Xz.RegisteredExternalClasses = {}
  },
  39079: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    var Fz = sz(39051);
    class Wz {
      static get Now() {
        return (0, Fz.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39111: (zz, tz, sz) => {
    function Fz(zz) {
      let tz = 1;
      do {
        tz *= 2
      } while (tz < zz);
      return tz === zz
    }

    function Wz(zz, tz, sz) {
      return zz * (1 - sz) + tz * sz
    }

    function Xz(zz) {
      const tz = Oz(zz),
        sz = oz(zz);
      return tz - zz > zz - sz ? sz : tz
    }

    function Oz(zz) {
      return zz--, zz |= zz >> 1, zz |= zz >> 2, zz |= zz >> 4, zz |= zz >> 8, zz |= zz >> 16, ++zz
    }

    function oz(zz) {
      return zz |= zz >> 1, zz |= zz >> 2, zz |= zz >> 4, zz |= zz >> 8, (zz |= zz >> 16) - (zz >> 1)
    }

    function vz(zz, tz) {
      let sz;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          sz = oz(zz);
          break;
        case 2:
          sz = Xz(zz);
          break;
        default:
          sz = Oz(zz)
      }
      return Math.min(sz, tz)
    }
    sz.d(tz, {
      d: () => oz,
      e: () => vz,
      g: () => Fz,
      i: () => Wz,
      m: () => Xz
    })
  },
  39264: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Pz,
      h: () => Yz,
      j: () => Hz,
      l: () => Bz
    });
    var Fz, Wz = sz(36505),
      Xz = sz(39051),
      Oz = sz(38097),
      oz = sz(38091),
      vz = sz(39079),
      Uz = sz(39065),
      Kz = sz(39213),
      uz = sz(36502),
      Nz = sz(39205),
      bz = sz(39074),
      wz = sz(39266),
      Dz = sz(37333),
      gz = sz(39111);
    class Hz {
      static get BaseUrl() {
        return Nz.c.BaseUrl
      }
      static set BaseUrl(zz) {
        Nz.c.BaseUrl = zz
      }
      static get CleanUrl() {
        return Nz.c.CleanUrl
      }
      static set CleanUrl(zz) {
        Nz.c.CleanUrl = zz
      }
      static IsAbsoluteUrl(zz) {
        return 0 === zz.indexOf("//") || -1 !== zz.indexOf("://") && (-1 !== zz.indexOf(".") && (-1 !== zz.indexOf("/") && (!(zz.indexOf(":") > zz.indexOf("/")) && (zz.indexOf("://") < zz.indexOf(".") || (0 === zz.indexOf("data:") || 0 === zz.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(zz) {
        Nz.c.ScriptBaseUrl = zz
      }
      static get ScriptBaseUrl() {
        return Nz.c.ScriptBaseUrl
      }
      static set CDNBaseUrl(zz) {
        Fz.ScriptBaseUrl = zz, Fz.AssetBaseUrl = zz
      }
      static set ScriptPreprocessUrl(zz) {
        Nz.c.ScriptPreprocessUrl = zz
      }
      static get ScriptPreprocessUrl() {
        return Nz.c.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Nz.c.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(zz) {
        Nz.c.DefaultRetryStrategy = zz
      }
      static get CorsBehavior() {
        return Nz.c.CorsBehavior
      }
      static set CorsBehavior(zz) {
        Nz.c.CorsBehavior = zz
      }
      static get UseFallbackTexture() {
        return uz.c.UseFallbackTexture
      }
      static set UseFallbackTexture(zz) {
        uz.c.UseFallbackTexture = zz
      }
      static get RegisteredExternalClasses() {
        return wz.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(zz) {
        wz.d.RegisteredExternalClasses = zz
      }
      static get fallbackTexture() {
        return uz.c.FallbackTexture
      }
      static set fallbackTexture(zz) {
        uz.c.FallbackTexture = zz
      }
      static FetchToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = 4 * ((Math.abs(zz) * sz % sz | 0) + (Math.abs(tz) * Fz % Fz | 0) * sz);
        Xz.r = Wz[Oz] / 255, Xz.g = Wz[Oz + 1] / 255, Xz.b = Wz[Oz + 2] / 255, Xz.a = Wz[Oz + 3] / 255
      }
      static Mix(zz, tz, sz) {
        return 0
      }
      static Instantiate(zz) {
        return wz.d.Instantiate(zz)
      }
      static SetImmediate(zz) {
        bz.b.SetImmediate(zz)
      }
      static IsExponentOfTwo(zz) {
        return !0
      }
      static FloatRound(zz) {
        return Math.fround(zz)
      }
      static GetFilename(zz) {
        const tz = zz.lastIndexOf("/");
        return tz < 0 ? zz : zz.substring(tz + 1)
      }
      static GetFolderPath(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = zz.lastIndexOf("/");
        return sz < 0 ? tz ? zz : "" : zz.substring(0, sz + 1)
      }
      static ToDegrees(zz) {
        return 180 * zz / Math.PI
      }
      static ToRadians(zz) {
        return zz * Math.PI / 180
      }
      static SmoothAngleChange(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Fz = this.ToRadians(zz),
          Wz = this.ToRadians(tz);
        return this.ToDegrees(Math.atan2((1 - sz) * Math.sin(Wz) + sz * Math.sin(Fz), (1 - sz) * Math.cos(Wz) + sz * Math.cos(Fz)))
      }
      static MakeArray(zz, tz) {
        return !0 === tz || void 0 !== zz && null != zz ? Array.isArray(zz) ? zz : [zz] : null
      }
      static GetPointerPrefix(zz) {
        return (0, Xz.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(zz, tz) {
        (0, Nz.y)(zz, tz)
      }
      static SetReferrerPolicyBehavior(zz, tz) {
        tz.referrerPolicy = zz
      }
      static get PreprocessUrl() {
        return Nz.c.PreprocessUrl
      }
      static set PreprocessUrl(zz) {
        Nz.c.PreprocessUrl = zz
      }
      static LoadImage(zz, tz, sz, Fz, Wz, Xz) {
        return (0, Nz.p)(zz, tz, sz, Fz, Wz, Xz)
      }
      static LoadFile(zz, tz, sz, Fz, Wz, Xz) {
        return (0, Nz.l)(zz, tz, sz, Fz, Wz, Xz)
      }
      static async LoadFileAsync(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((sz, Fz) => {
          (0, Nz.l)(zz, (zz => {
            sz(zz)
          }), void 0, void 0, tz, ((zz, tz) => {
            Fz(tz)
          }))
        }))
      }
      static GetAssetUrl(zz) {
        if (!zz) return "";
        if (Fz.AssetBaseUrl && zz.startsWith(Fz._DefaultAssetsUrl)) {
          const tz = Fz.AssetBaseUrl.endsWith("/") ? Fz.AssetBaseUrl.slice(0, -1) : Fz.AssetBaseUrl;
          return zz.replace(Fz._DefaultAssetsUrl, tz)
        }
        return zz
      }
      static GetBabylonScriptURL(zz, tz) {
        if (!zz) return "";
        if (zz.startsWith(Fz._DefaultCdnUrl))
          if (Fz.ScriptBaseUrl) {
            const tz = Fz.ScriptBaseUrl.endsWith("/") ? Fz.ScriptBaseUrl.slice(0, -1) : Fz.ScriptBaseUrl;
            zz = zz.replace(Fz._DefaultCdnUrl, tz)
          } else if (Fz._CdnVersion) {
          const tz = `${Fz._DefaultCdnUrl}/v${Fz._CdnVersion}`;
          zz.startsWith(tz) || (zz = zz.replace(Fz._DefaultCdnUrl, tz))
        }
        return zz = Fz.ScriptPreprocessUrl(zz), tz && !Fz.IsAbsoluteUrl(zz) && (zz = Fz.GetAbsoluteUrl(zz)), zz
      }
      static LoadBabylonScript(zz, tz, sz, Wz) {
        zz = Fz.GetBabylonScriptURL(zz), Fz.LoadScript(zz, tz, sz)
      }
      static async LoadBabylonScriptAsync(zz) {
        return zz = Fz.GetBabylonScriptURL(zz), await Fz.LoadScriptAsync(zz)
      }
      static _LoadScriptNative(zz, tz, sz, Wz) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const zz = "Loading a script as an ES module is not supported in Babylon Native";
            return void sz?.(zz, new Error(zz))
          }
          Fz.LoadFile(zz, (zz => {
            try {
              Function(zz).apply(null), tz && tz()
            } catch (Fz) {
              sz && sz("LoadScript Error", Fz)
            }
          }), void 0, void 0, !1, ((zz, tz) => {
            sz && sz("LoadScript Error", tz)
          }))
        }
      }
      static _LoadScriptWeb(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(zz), tz && tz()
          } catch (vz) {
            sz?.(`Unable to load script '${zz}' in worker`, vz)
          }
          return
        }
        if (!(0, Xz.j)()) return void sz?.(`Cannot load script '${zz}' outside of a window or a worker`);
        const Oz = document.getElementsByTagName("head")[0],
          oz = document.createElement("script");
        Wz ? (oz.setAttribute("type", "module"), oz.innerText = zz) : (oz.setAttribute("type", "text/javascript"), oz.setAttribute("src", zz)), Fz && (oz.id = Fz), oz.onload = () => {
          tz && tz()
        }, oz.onerror = tz => {
          sz && sz(`Unable to load script '${zz}'`, tz)
        }, Oz.appendChild(oz)
      }
      static async LoadScriptAsync(zz, tz) {
        return await new Promise(((sz, Fz) => {
          this.LoadScript(zz, (() => {
            sz()
          }), ((zz, tz) => {
            Fz(tz || new Error(zz))
          }), tz)
        }))
      }
      static ReadFileAsDataURL(zz, tz, sz) {
        const Fz = new FileReader,
          Xz = {
            onCompleteObservable: new Wz.c,
            abort: () => Fz.abort()
          };
        return Fz.onloadend = () => {
          Xz.onCompleteObservable.notifyObservers(Xz)
        }, Fz.onload = zz => {
          tz(zz.target.result)
        }, Fz.onprogress = sz, Fz.readAsDataURL(zz), Xz
      }
      static ReadFile(zz, tz, sz, Fz, Wz) {
        return (0, Nz.q)(zz, tz, sz, Fz, Wz)
      }
      static FileAsURL(zz) {
        const tz = new Blob([zz]);
        return window.URL.createObjectURL(tz)
      }
      static Format(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return zz.toFixed(tz)
      }
      static DeepCopy(zz, tz, sz, Fz) {
        oz.d.DeepCopy(zz, tz, sz, Fz)
      }
      static IsEmpty(zz) {
        for (const tz in zz)
          if (Object.prototype.hasOwnProperty.call(zz, tz)) return !1;
        return !0
      }
      static RegisterTopRootEvents(zz, tz) {
        for (let Fz = 0; Fz < tz.length; Fz++) {
          const Wz = tz[Fz];
          zz.addEventListener(Wz.name, Wz.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Wz.name, Wz.handler, !1)
          } catch (sz) {}
        }
      }
      static UnregisterTopRootEvents(zz, tz) {
        for (let Fz = 0; Fz < tz.length; Fz++) {
          const Wz = tz[Fz];
          zz.removeEventListener(Wz.name, Wz.handler);
          try {
            zz.parent && zz.parent.removeEventListener(Wz.name, Wz.handler)
          } catch (sz) {}
        }
      }
      static async DumpFramebuffer(zz, tz, sz, Fz) {
        throw (0, Uz.i)("DumpTools")
      }
      static DumpData(zz, tz, sz, Fz) {
        throw (0, Uz.i)("DumpTools")
      }
      static async DumpDataAsync(zz, tz, sz) {
        throw (0, Uz.i)("DumpTools")
      }
      static _IsOffScreenCanvas(zz) {
        return void 0 !== zz.convertToBlob
      }
      static ToBlob(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Wz = arguments.length > 3 ? arguments[3] : void 0;
        Fz._IsOffScreenCanvas(zz) || zz.toBlob || (zz.toBlob = function(zz, tz, sz) {
          setTimeout((() => {
            const Fz = atob(this.toDataURL(tz, sz).split(",")[1]),
              Wz = Fz.length,
              Xz = new Uint8Array(Wz);
            for (let zz = 0; zz < Wz; zz++) Xz[zz] = Fz.charCodeAt(zz);
            zz(new Blob([Xz]))
          }))
        }), Fz._IsOffScreenCanvas(zz) ? zz.convertToBlob({
          type: sz,
          quality: Wz
        }).then((zz => tz(zz))) : zz.toBlob((function(zz) {
          tz(zz)
        }), sz, Wz)
      }
      static DownloadBlob(zz, tz) {
        if ("download" in document.createElement("a")) {
          if (!tz) {
            const zz = new Date;
            tz = "screenshot_" + ((zz.getFullYear() + "-" + (zz.getMonth() + 1)).slice(2) + "-" + zz.getDate() + "_" + zz.getHours() + "-" + ("0" + zz.getMinutes()).slice(-2)) + ".png"
          }
          Fz.Download(zz, tz)
        } else if (zz && "undefined" !== typeof URL) {
          const tz = URL.createObjectURL(zz),
            sz = window.open("");
          if (!sz) return;
          const Fz = sz.document.createElement("img");
          Fz.onload = function() {
            URL.revokeObjectURL(tz)
          }, Fz.src = tz, sz.document.body.appendChild(Fz)
        }
      }
      static EncodeScreenshotCanvasData(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Wz = arguments.length > 3 ? arguments[3] : void 0,
          Xz = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Wz && tz) {
          if (tz) {
            if (Fz._IsOffScreenCanvas(zz)) return void zz.convertToBlob({
              type: sz,
              quality: Xz
            }).then((zz => {
              const sz = new FileReader;
              sz.readAsDataURL(zz), sz.onloadend = () => {
                const zz = sz.result;
                tz(zz)
              }
            }));
            const Wz = zz.toDataURL(sz, Xz);
            tz(Wz)
          }
        } else this.ToBlob(zz, (function(zz) {
          zz && Fz.DownloadBlob(zz, Wz), tz && tz("")
        }), sz, Xz)
      }
      static Download(zz, tz) {
        if ("undefined" === typeof URL) return;
        const sz = window.URL.createObjectURL(zz),
          Fz = document.createElement("a");
        document.body.appendChild(Fz), Fz.style.display = "none", Fz.href = sz, Fz.download = tz, Fz.addEventListener("click", (() => {
          Fz.parentElement && Fz.parentElement.removeChild(Fz)
        })), Fz.click(), window.URL.revokeObjectURL(sz)
      }
      static BackCompatCameraNoPreventDefault(zz) {
        return "boolean" === typeof zz[0] ? zz[0] : "boolean" === typeof zz[1] && zz[1]
      }
      static CreateScreenshot(zz, tz, sz, Fz) {
        throw (0, Uz.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(zz, tz, sz) {
        throw (0, Uz.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(zz, tz, sz, Fz) {
        throw (0, Uz.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(zz, tz, sz) {
        throw (0, Uz.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Dz.d)()
      }
      static IsBase64(zz) {
        return (0, Nz.i)(zz)
      }
      static DecodeBase64(zz) {
        return (0, Nz.b)(zz)
      }
      static get errorsCount() {
        return Oz.e.errorsCount
      }
      static Log(zz) {
        Oz.e.Log(zz)
      }
      static Warn(zz) {
        Oz.e.Warn(zz)
      }
      static Error(zz) {
        Oz.e.Error(zz)
      }
      static get LogCache() {
        return Oz.e.LogCache
      }
      static ClearLogCache() {
        Oz.e.ClearLogCache()
      }
      static set LogLevels(zz) {
        Oz.e.LogLevels = zz
      }
      static set PerformanceLogLevel(zz) {
        (zz & Fz.PerformanceUserMarkLogLevel) !== Fz.PerformanceUserMarkLogLevel ? (zz & Fz.PerformanceConsoleLogLevel) !== Fz.PerformanceConsoleLogLevel ? (Fz.StartPerformanceCounter = Fz._StartPerformanceCounterDisabled, Fz.EndPerformanceCounter = Fz._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Fz.StartPerformanceCounter = Fz._StartMarkNative, Fz.EndPerformanceCounter = Fz._EndMarkNative) : (Fz.StartPerformanceCounter = Fz._StartPerformanceConsole, Fz.EndPerformanceCounter = Fz._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Fz.StartPerformanceCounter = Fz._StartMarkNative, Fz.EndPerformanceCounter = Fz._EndMarkNative) : (Fz.StartPerformanceCounter = Fz._StartUserMark, Fz.EndPerformanceCounter = Fz._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(zz, tz) {}
      static _EndPerformanceCounterDisabled(zz, tz) {}
      static _StartUserMark(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Fz._Performance) {
          if (!(0, Xz.j)()) return;
          Fz._Performance = window.performance
        }
        tz && Fz._Performance.mark && Fz._Performance.mark(zz + "-Begin")
      }
      static _EndUserMark(zz) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Fz._Performance.mark && (Fz._Performance.mark(zz + "-End"), Fz._Performance.measure(zz, zz + "-Begin", zz + "-End"))
      }
      static _StartPerformanceConsole(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        tz && (Fz._StartUserMark(zz, tz), console.time && console.time(zz))
      }
      static _EndPerformanceConsole(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        tz && (Fz._EndUserMark(zz, tz), console.timeEnd(zz))
      }
      static _StartMarkNative(zz) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Fz._NativePerformanceCounterHandles.has(zz)) Fz.Warn(`Performance counter with name ${zz} is already started.`);
          else {
            const tz = _native.startPerformanceCounter(zz);
            Fz._NativePerformanceCounterHandles.set(zz, tz)
          }
      }
      static _EndMarkNative(zz) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const tz = Fz._NativePerformanceCounterHandles.get(zz);
          tz ? (_native.endPerformanceCounter(tz), Fz._NativePerformanceCounterHandles.delete(zz)) : Fz.Warn(`Performance counter with name ${zz} was not started.`)
        }
      }
      static get Now() {
        return vz.b.Now
      }
      static GetClassName(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = null;
        if (!tz && zz.getClassName) sz = zz.getClassName();
        else {
          if (zz instanceof Object) {
            sz = (tz ? zz : Object.getPrototypeOf(zz)).constructor.__bjsclassName__
          }
          sz || (sz = typeof zz)
        }
        return sz
      }
      static First(zz, tz) {
        for (const sz of zz)
          if (tz(sz)) return sz;
        return null
      }
      static getFullClassName(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = null,
          Fz = null;
        if (!tz && zz.getClassName) sz = zz.getClassName();
        else {
          if (zz instanceof Object) {
            const Wz = tz ? zz : Object.getPrototypeOf(zz);
            sz = Wz.constructor.__bjsclassName__, Fz = Wz.constructor.__bjsmoduleName__
          }
          sz || (sz = typeof zz)
        }
        return sz ? (null != Fz ? Fz + "." : "") + sz : null
      }
      static async DelayAsync(zz) {
        await new Promise((tz => {
          setTimeout((() => {
            tz()
          }), zz)
        }))
      }
      static IsSafari() {
        return !!(0, Xz.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Bz(zz, tz) {
      return sz => {
        sz.__bjsclassName__ = zz, sz.__bjsmoduleName__ = null != tz ? tz : null
      }
    }
    Fz = Hz, Hz.AssetBaseUrl = "", Hz.UseCustomRequestHeaders = !1, Hz.CustomRequestHeaders = Kz.d.CustomRequestHeaders, Hz.GetDOMTextContent = Xz.e, Hz._DefaultCdnUrl = "https://cdn.babylonjs.com", Hz._CdnVersion = "9.28.0", Hz._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Hz.LoadScript = "undefined" === typeof _native ? Fz._LoadScriptWeb : Fz._LoadScriptNative, Hz.GetAbsoluteUrl = "object" === typeof document ? zz => {
      const tz = document.createElement("a");
      return tz.href = zz, tz.href
    } : "function" === typeof URL && "object" === typeof location ? zz => new URL(zz, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Hz.NoneLogLevel = Oz.e.NoneLogLevel, Hz.MessageLogLevel = Oz.e.MessageLogLevel, Hz.WarningLogLevel = Oz.e.WarningLogLevel, Hz.ErrorLogLevel = Oz.e.ErrorLogLevel, Hz.AllLogLevel = Oz.e.AllLogLevel, Hz.IsWindowObjectExist = Xz.j, Hz.PerformanceNoneLogLevel = 0, Hz.PerformanceUserMarkLogLevel = 1, Hz.PerformanceConsoleLogLevel = 2, Hz._NativePerformanceCounterHandles = new Map, Hz.StartPerformanceCounter = Fz._StartPerformanceCounterDisabled, Hz.EndPerformanceCounter = Fz._EndPerformanceCounterDisabled;
    class Pz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = zz, this.index = Fz - 1, this._done = !1, this._fn = tz, this._successCallback = sz
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(zz, tz, sz) {
        const Fz = new Pz(zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Fz.executeNext(), Fz
      }
      static SyncAsyncForLoop(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Pz.Run(Math.ceil(zz / tz), (Fz => {
          Wz && Wz() ? Fz.breakLoop() : setTimeout((() => {
            for (let Xz = 0; Xz < tz; ++Xz) {
              const Oz = Fz.index * tz + Xz;
              if (Oz >= zz) break;
              if (sz(Oz), Wz && Wz()) {
                Fz.breakLoop();
                break
              }
            }
            Fz.executeNext()
          }), Xz)
        }), Fz)
      }
    }
    let rz = !1;

    function Yz() {
      rz || (rz = !0, Hz.Mix = gz.i, Hz.IsExponentOfTwo = gz.g, uz.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);