export const id = 259;
export const ids = [259];
export const modules = {
  40208: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800),
      zT = mT(37239);
    class MT {
      static Instantiate(TT) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[TT]) return this.RegisteredExternalClasses[TT];
        const UT = (0, zT.d)(TT);
        if (UT) return UT;
        WT.b.Warn(TT + " not found, you may have missed an import.");
        const mT = TT.split(".");
        let MT = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let WT = 0, zT = mT.length; WT < zT; WT++) MT = MT[mT[WT]];
        return "function" !== typeof MT ? null : MT
      }
    }
    MT.RegisteredExternalClasses = {}
  },
  39986: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(39946);
    class zT {
      static get Now() {
        return (0, WT.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40022: (TT, UT, mT) => {
    function WT(TT) {
      let UT = 1;
      do {
        UT *= 2
      } while (UT < TT);
      return UT === TT
    }

    function zT(TT, UT, mT) {
      return TT * (1 - mT) + UT * mT
    }

    function MT(TT) {
      const UT = gT(TT),
        mT = nT(TT);
      return UT - TT > TT - mT ? mT : UT
    }

    function gT(TT) {
      return TT--, TT |= TT >> 1, TT |= TT >> 2, TT |= TT >> 4, TT |= TT >> 8, TT |= TT >> 16, ++TT
    }

    function nT(TT) {
      return TT |= TT >> 1, TT |= TT >> 2, TT |= TT >> 4, TT |= TT >> 8, (TT |= TT >> 16) - (TT >> 1)
    }

    function HT(TT, UT) {
      let mT;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          mT = nT(TT);
          break;
        case 2:
          mT = MT(TT);
          break;
        default:
          mT = gT(TT)
      }
      return Math.min(mT, UT)
    }
    mT.d(UT, {
      d: () => nT,
      f: () => HT,
      i: () => WT,
      m: () => zT,
      o: () => MT
    })
  },
  40201: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => qT,
      f: () => bT,
      j: () => vT,
      m: () => fT
    });
    var WT, zT = mT(37219),
      MT = mT(39946),
      gT = mT(38800),
      nT = mT(38793),
      HT = mT(39986),
      kT = mT(39965),
      jT = mT(40155),
      lT = mT(37216),
      LT = mT(40151),
      pT = mT(39975),
      BT = mT(40208),
      ZT = mT(38045),
      cT = mT(40022);
    class vT {
      static get BaseUrl() {
        return LT.h.BaseUrl
      }
      static set BaseUrl(TT) {
        LT.h.BaseUrl = TT
      }
      static get CleanUrl() {
        return LT.h.CleanUrl
      }
      static set CleanUrl(TT) {
        LT.h.CleanUrl = TT
      }
      static IsAbsoluteUrl(TT) {
        return 0 === TT.indexOf("//") || -1 !== TT.indexOf("://") && (-1 !== TT.indexOf(".") && (-1 !== TT.indexOf("/") && (!(TT.indexOf(":") > TT.indexOf("/")) && (TT.indexOf("://") < TT.indexOf(".") || (0 === TT.indexOf("data:") || 0 === TT.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(TT) {
        LT.h.ScriptBaseUrl = TT
      }
      static get ScriptBaseUrl() {
        return LT.h.ScriptBaseUrl
      }
      static set CDNBaseUrl(TT) {
        WT.ScriptBaseUrl = TT, WT.AssetBaseUrl = TT
      }
      static set ScriptPreprocessUrl(TT) {
        LT.h.ScriptPreprocessUrl = TT
      }
      static get ScriptPreprocessUrl() {
        return LT.h.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return LT.h.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(TT) {
        LT.h.DefaultRetryStrategy = TT
      }
      static get CorsBehavior() {
        return LT.h.CorsBehavior
      }
      static set CorsBehavior(TT) {
        LT.h.CorsBehavior = TT
      }
      static get UseFallbackTexture() {
        return lT.c.UseFallbackTexture
      }
      static set UseFallbackTexture(TT) {
        lT.c.UseFallbackTexture = TT
      }
      static get RegisteredExternalClasses() {
        return BT.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(TT) {
        BT.c.RegisteredExternalClasses = TT
      }
      static get fallbackTexture() {
        return lT.c.FallbackTexture
      }
      static set fallbackTexture(TT) {
        lT.c.FallbackTexture = TT
      }
      static FetchToRef(TT, UT, mT, WT, zT, MT) {
        const gT = 4 * ((Math.abs(TT) * mT % mT | 0) + (Math.abs(UT) * WT % WT | 0) * mT);
        MT.r = zT[gT] / 255, MT.g = zT[gT + 1] / 255, MT.b = zT[gT + 2] / 255, MT.a = zT[gT + 3] / 255
      }
      static Mix(TT, UT, mT) {
        return 0
      }
      static Instantiate(TT) {
        return BT.c.Instantiate(TT)
      }
      static SetImmediate(TT) {
        pT.e.SetImmediate(TT)
      }
      static IsExponentOfTwo(TT) {
        return !0
      }
      static FloatRound(TT) {
        return Math.fround(TT)
      }
      static GetFilename(TT) {
        const UT = TT.lastIndexOf("/");
        return UT < 0 ? TT : TT.substring(UT + 1)
      }
      static GetFolderPath(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = TT.lastIndexOf("/");
        return mT < 0 ? UT ? TT : "" : TT.substring(0, mT + 1)
      }
      static ToDegrees(TT) {
        return 180 * TT / Math.PI
      }
      static ToRadians(TT) {
        return TT * Math.PI / 180
      }
      static SmoothAngleChange(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const WT = this.ToRadians(TT),
          zT = this.ToRadians(UT);
        return this.ToDegrees(Math.atan2((1 - mT) * Math.sin(zT) + mT * Math.sin(WT), (1 - mT) * Math.cos(zT) + mT * Math.cos(WT)))
      }
      static MakeArray(TT, UT) {
        return !0 === UT || void 0 !== TT && null != TT ? Array.isArray(TT) ? TT : [TT] : null
      }
      static GetPointerPrefix(TT) {
        return (0, MT.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(TT, UT) {
        (0, LT.B)(TT, UT)
      }
      static SetReferrerPolicyBehavior(TT, UT) {
        UT.referrerPolicy = TT
      }
      static get PreprocessUrl() {
        return LT.h.PreprocessUrl
      }
      static set PreprocessUrl(TT) {
        LT.h.PreprocessUrl = TT
      }
      static LoadImage(TT, UT, mT, WT, zT, MT) {
        return (0, LT.q)(TT, UT, mT, WT, zT, MT)
      }
      static LoadFile(TT, UT, mT, WT, zT, MT) {
        return (0, LT.n)(TT, UT, mT, WT, zT, MT)
      }
      static async LoadFileAsync(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((mT, WT) => {
          (0, LT.n)(TT, (TT => {
            mT(TT)
          }), void 0, void 0, UT, ((TT, UT) => {
            WT(UT)
          }))
        }))
      }
      static GetAssetUrl(TT) {
        if (!TT) return "";
        if (WT.AssetBaseUrl && TT.startsWith(WT._DefaultAssetsUrl)) {
          const UT = WT.AssetBaseUrl.endsWith("/") ? WT.AssetBaseUrl.slice(0, -1) : WT.AssetBaseUrl;
          return TT.replace(WT._DefaultAssetsUrl, UT)
        }
        return TT
      }
      static GetBabylonScriptURL(TT, UT) {
        if (!TT) return "";
        if (TT.startsWith(WT._DefaultCdnUrl))
          if (WT.ScriptBaseUrl) {
            const UT = WT.ScriptBaseUrl.endsWith("/") ? WT.ScriptBaseUrl.slice(0, -1) : WT.ScriptBaseUrl;
            TT = TT.replace(WT._DefaultCdnUrl, UT)
          } else if (WT._CdnVersion) {
          const UT = `${WT._DefaultCdnUrl}/v${WT._CdnVersion}`;
          TT.startsWith(UT) || (TT = TT.replace(WT._DefaultCdnUrl, UT))
        }
        return TT = WT.ScriptPreprocessUrl(TT), UT && !WT.IsAbsoluteUrl(TT) && (TT = WT.GetAbsoluteUrl(TT)), TT
      }
      static LoadBabylonScript(TT, UT, mT, zT) {
        TT = WT.GetBabylonScriptURL(TT), WT.LoadScript(TT, UT, mT)
      }
      static async LoadBabylonScriptAsync(TT) {
        return TT = WT.GetBabylonScriptURL(TT), await WT.LoadScriptAsync(TT)
      }
      static _LoadScriptNative(TT, UT, mT, zT) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const TT = "Loading a script as an ES module is not supported in Babylon Native";
            return void mT?.(TT, new Error(TT))
          }
          WT.LoadFile(TT, (TT => {
            try {
              Function(TT).apply(null), UT && UT()
            } catch (WT) {
              mT && mT("LoadScript Error", WT)
            }
          }), void 0, void 0, !1, ((TT, UT) => {
            mT && mT("LoadScript Error", UT)
          }))
        }
      }
      static _LoadScriptWeb(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(TT), UT && UT()
          } catch (HT) {
            mT?.(`Unable to load script '${TT}' in worker`, HT)
          }
          return
        }
        if (!(0, MT.j)()) return void mT?.(`Cannot load script '${TT}' outside of a window or a worker`);
        const gT = document.getElementsByTagName("head")[0],
          nT = document.createElement("script");
        zT ? (nT.setAttribute("type", "module"), nT.innerText = TT) : (nT.setAttribute("type", "text/javascript"), nT.setAttribute("src", TT)), WT && (nT.id = WT), nT.onload = () => {
          UT && UT()
        }, nT.onerror = UT => {
          mT && mT(`Unable to load script '${TT}'`, UT)
        }, gT.appendChild(nT)
      }
      static async LoadScriptAsync(TT, UT) {
        return await new Promise(((mT, WT) => {
          this.LoadScript(TT, (() => {
            mT()
          }), ((TT, UT) => {
            WT(UT || new Error(TT))
          }), UT)
        }))
      }
      static ReadFileAsDataURL(TT, UT, mT) {
        const WT = new FileReader,
          MT = {
            onCompleteObservable: new zT.d,
            abort: () => WT.abort()
          };
        return WT.onloadend = () => {
          MT.onCompleteObservable.notifyObservers(MT)
        }, WT.onload = TT => {
          UT(TT.target.result)
        }, WT.onprogress = mT, WT.readAsDataURL(TT), MT
      }
      static ReadFile(TT, UT, mT, WT, zT) {
        return (0, LT.u)(TT, UT, mT, WT, zT)
      }
      static FileAsURL(TT) {
        const UT = new Blob([TT]);
        return window.URL.createObjectURL(UT)
      }
      static Format(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return TT.toFixed(UT)
      }
      static DeepCopy(TT, UT, mT, WT) {
        nT.c.DeepCopy(TT, UT, mT, WT)
      }
      static IsEmpty(TT) {
        for (const UT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, UT)) return !1;
        return !0
      }
      static RegisterTopRootEvents(TT, UT) {
        for (let WT = 0; WT < UT.length; WT++) {
          const zT = UT[WT];
          TT.addEventListener(zT.name, zT.handler, !1);
          try {
            window.parent && window.parent.addEventListener(zT.name, zT.handler, !1)
          } catch (mT) {}
        }
      }
      static UnregisterTopRootEvents(TT, UT) {
        for (let WT = 0; WT < UT.length; WT++) {
          const zT = UT[WT];
          TT.removeEventListener(zT.name, zT.handler);
          try {
            TT.parent && TT.parent.removeEventListener(zT.name, zT.handler)
          } catch (mT) {}
        }
      }
      static async DumpFramebuffer(TT, UT, mT, WT) {
        throw (0, kT.k)("DumpTools")
      }
      static DumpData(TT, UT, mT, WT) {
        throw (0, kT.k)("DumpTools")
      }
      static async DumpDataAsync(TT, UT, mT) {
        throw (0, kT.k)("DumpTools")
      }
      static _IsOffScreenCanvas(TT) {
        return void 0 !== TT.convertToBlob
      }
      static ToBlob(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          zT = arguments.length > 3 ? arguments[3] : void 0;
        WT._IsOffScreenCanvas(TT) || TT.toBlob || (TT.toBlob = function(TT, UT, mT) {
          setTimeout((() => {
            const WT = atob(this.toDataURL(UT, mT).split(",")[1]),
              zT = WT.length,
              MT = new Uint8Array(zT);
            for (let TT = 0; TT < zT; TT++) MT[TT] = WT.charCodeAt(TT);
            TT(new Blob([MT]))
          }))
        }), WT._IsOffScreenCanvas(TT) ? TT.convertToBlob({
          type: mT,
          quality: zT
        }).then((TT => UT(TT))) : TT.toBlob((function(TT) {
          UT(TT)
        }), mT, zT)
      }
      static DownloadBlob(TT, UT) {
        if ("download" in document.createElement("a")) {
          if (!UT) {
            const TT = new Date;
            UT = "screenshot_" + ((TT.getFullYear() + "-" + (TT.getMonth() + 1)).slice(2) + "-" + TT.getDate() + "_" + TT.getHours() + "-" + ("0" + TT.getMinutes()).slice(-2)) + ".png"
          }
          WT.Download(TT, UT)
        } else if (TT && "undefined" !== typeof URL) {
          const UT = URL.createObjectURL(TT),
            mT = window.open("");
          if (!mT) return;
          const WT = mT.document.createElement("img");
          WT.onload = function() {
            URL.revokeObjectURL(UT)
          }, WT.src = UT, mT.document.body.appendChild(WT)
        }
      }
      static EncodeScreenshotCanvasData(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          zT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof zT && UT) {
          if (UT) {
            if (WT._IsOffScreenCanvas(TT)) return void TT.convertToBlob({
              type: mT,
              quality: MT
            }).then((TT => {
              const mT = new FileReader;
              mT.readAsDataURL(TT), mT.onloadend = () => {
                const TT = mT.result;
                UT(TT)
              }
            }));
            const zT = TT.toDataURL(mT, MT);
            UT(zT)
          }
        } else this.ToBlob(TT, (function(TT) {
          TT && WT.DownloadBlob(TT, zT), UT && UT("")
        }), mT, MT)
      }
      static Download(TT, UT) {
        if ("undefined" === typeof URL) return;
        const mT = window.URL.createObjectURL(TT),
          WT = document.createElement("a");
        document.body.appendChild(WT), WT.style.display = "none", WT.href = mT, WT.download = UT, WT.addEventListener("click", (() => {
          WT.parentElement && WT.parentElement.removeChild(WT)
        })), WT.click(), window.URL.revokeObjectURL(mT)
      }
      static BackCompatCameraNoPreventDefault(TT) {
        return "boolean" === typeof TT[0] ? TT[0] : "boolean" === typeof TT[1] && TT[1]
      }
      static CreateScreenshot(TT, UT, mT, WT) {
        throw (0, kT.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(TT, UT, mT) {
        throw (0, kT.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(TT, UT, mT, WT) {
        throw (0, kT.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(TT, UT, mT) {
        throw (0, kT.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, ZT.c)()
      }
      static IsBase64(TT) {
        return (0, LT.m)(TT)
      }
      static DecodeBase64(TT) {
        return (0, LT.e)(TT)
      }
      static get errorsCount() {
        return gT.b.errorsCount
      }
      static Log(TT) {
        gT.b.Log(TT)
      }
      static Warn(TT) {
        gT.b.Warn(TT)
      }
      static Error(TT) {
        gT.b.Error(TT)
      }
      static get LogCache() {
        return gT.b.LogCache
      }
      static ClearLogCache() {
        gT.b.ClearLogCache()
      }
      static set LogLevels(TT) {
        gT.b.LogLevels = TT
      }
      static set PerformanceLogLevel(TT) {
        (TT & WT.PerformanceUserMarkLogLevel) !== WT.PerformanceUserMarkLogLevel ? (TT & WT.PerformanceConsoleLogLevel) !== WT.PerformanceConsoleLogLevel ? (WT.StartPerformanceCounter = WT._StartPerformanceCounterDisabled, WT.EndPerformanceCounter = WT._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), WT.StartPerformanceCounter = WT._StartMarkNative, WT.EndPerformanceCounter = WT._EndMarkNative) : (WT.StartPerformanceCounter = WT._StartPerformanceConsole, WT.EndPerformanceCounter = WT._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), WT.StartPerformanceCounter = WT._StartMarkNative, WT.EndPerformanceCounter = WT._EndMarkNative) : (WT.StartPerformanceCounter = WT._StartUserMark, WT.EndPerformanceCounter = WT._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(TT, UT) {}
      static _EndPerformanceCounterDisabled(TT, UT) {}
      static _StartUserMark(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WT._Performance) {
          if (!(0, MT.j)()) return;
          WT._Performance = window.performance
        }
        UT && WT._Performance.mark && WT._Performance.mark(TT + "-Begin")
      }
      static _EndUserMark(TT) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && WT._Performance.mark && (WT._Performance.mark(TT + "-End"), WT._Performance.measure(TT, TT + "-Begin", TT + "-End"))
      }
      static _StartPerformanceConsole(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        UT && (WT._StartUserMark(TT, UT), console.time && console.time(TT))
      }
      static _EndPerformanceConsole(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        UT && (WT._EndUserMark(TT, UT), console.timeEnd(TT))
      }
      static _StartMarkNative(TT) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (WT._NativePerformanceCounterHandles.has(TT)) WT.Warn(`Performance counter with name ${TT} is already started.`);
          else {
            const UT = _native.startPerformanceCounter(TT);
            WT._NativePerformanceCounterHandles.set(TT, UT)
          }
      }
      static _EndMarkNative(TT) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const UT = WT._NativePerformanceCounterHandles.get(TT);
          UT ? (_native.endPerformanceCounter(UT), WT._NativePerformanceCounterHandles.delete(TT)) : WT.Warn(`Performance counter with name ${TT} was not started.`)
        }
      }
      static get Now() {
        return HT.c.Now
      }
      static GetClassName(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = null;
        if (!UT && TT.getClassName) mT = TT.getClassName();
        else {
          if (TT instanceof Object) {
            mT = (UT ? TT : Object.getPrototypeOf(TT)).constructor.__bjsclassName__
          }
          mT || (mT = typeof TT)
        }
        return mT
      }
      static First(TT, UT) {
        for (const mT of TT)
          if (UT(mT)) return mT;
        return null
      }
      static getFullClassName(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = null,
          WT = null;
        if (!UT && TT.getClassName) mT = TT.getClassName();
        else {
          if (TT instanceof Object) {
            const zT = UT ? TT : Object.getPrototypeOf(TT);
            mT = zT.constructor.__bjsclassName__, WT = zT.constructor.__bjsmoduleName__
          }
          mT || (mT = typeof TT)
        }
        return mT ? (null != WT ? WT + "." : "") + mT : null
      }
      static async DelayAsync(TT) {
        await new Promise((UT => {
          setTimeout((() => {
            UT()
          }), TT)
        }))
      }
      static IsSafari() {
        return !!(0, MT.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function fT(TT, UT) {
      return mT => {
        mT.__bjsclassName__ = TT, mT.__bjsmoduleName__ = null != UT ? UT : null
      }
    }
    WT = vT, vT.AssetBaseUrl = "", vT.UseCustomRequestHeaders = !1, vT.CustomRequestHeaders = jT.b.CustomRequestHeaders, vT.GetDOMTextContent = MT.c, vT._DefaultCdnUrl = "https://cdn.babylonjs.com", vT._CdnVersion = "9.28.0", vT._DefaultAssetsUrl = "https://assets.babylonjs.com/core", vT.LoadScript = "undefined" === typeof _native ? WT._LoadScriptWeb : WT._LoadScriptNative, vT.GetAbsoluteUrl = "object" === typeof document ? TT => {
      const UT = document.createElement("a");
      return UT.href = TT, UT.href
    } : "function" === typeof URL && "object" === typeof location ? TT => new URL(TT, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, vT.NoneLogLevel = gT.b.NoneLogLevel, vT.MessageLogLevel = gT.b.MessageLogLevel, vT.WarningLogLevel = gT.b.WarningLogLevel, vT.ErrorLogLevel = gT.b.ErrorLogLevel, vT.AllLogLevel = gT.b.AllLogLevel, vT.IsWindowObjectExist = MT.j, vT.PerformanceNoneLogLevel = 0, vT.PerformanceUserMarkLogLevel = 1, vT.PerformanceConsoleLogLevel = 2, vT._NativePerformanceCounterHandles = new Map, vT.StartPerformanceCounter = WT._StartPerformanceCounterDisabled, vT.EndPerformanceCounter = WT._EndPerformanceCounterDisabled;
    class qT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = TT, this.index = WT - 1, this._done = !1, this._fn = UT, this._successCallback = mT
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(TT, UT, mT) {
        const WT = new qT(TT, UT, mT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return WT.executeNext(), WT
      }
      static SyncAsyncForLoop(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return qT.Run(Math.ceil(TT / UT), (WT => {
          zT && zT() ? WT.breakLoop() : setTimeout((() => {
            for (let MT = 0; MT < UT; ++MT) {
              const gT = WT.index * UT + MT;
              if (gT >= TT) break;
              if (mT(gT), zT && zT()) {
                WT.breakLoop();
                break
              }
            }
            WT.executeNext()
          }), MT)
        }), WT)
      }
    }
    let iT = !1;

    function bT() {
      iT || (iT = !0, vT.Mix = cT.m, vT.IsExponentOfTwo = cT.i, lT.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);