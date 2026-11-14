export const id = 52;
export const ids = [52, 122];
export const modules = {
  8076: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = new Set(["chunkBorders"])
  },
  35034: (WW, RW, MW) => {
    function wW(WW, RW) {
      WW instanceof Promise ? WW.then(RW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : RW(WW)
    }
    MW.d(RW, {
      b: () => AW
    });
    class CW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var RW;
        this.view = WW, null === (RW = this.opened) || void 0 === RW || RW.show(WW)
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class zR {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, RW;
        return null !== (WW = null === (RW = this.opened) || void 0 === RW ? void 0 : RW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, RW) {
        var MW;
        null === (MW = this.opened) || void 0 === MW || MW.setCosmetic(WW, RW)
      }
      playEmote(WW) {
        var RW;
        null === (RW = this.opened) || void 0 === RW || RW.playEmote(WW)
      }
      async untilDrawn(WW) {
        var RW;
        await this.ready, await (null === (RW = this.opened) || void 0 === RW ? void 0 : RW.untilDrawn(WW))
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const AW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new CW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new CW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new CW(this.current().openMobLineup(WW))
      }
      openCharacter(WW) {
        return new zR(this.current().openCharacter(WW))
      }
    }
  },
  37226: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => BW,
      g: () => tR
    });
    var wW = MW(156),
      CW = MW(1303),
      zR = MW(1298),
      AW = MW(2361),
      bR = MW(1314),
      yR = MW(34706),
      NW = MW(932),
      eW = MW(37186);

    function BW(WW) {
      (0, AW.e)("matchmake_failed", WW, wW.k[wW.k.SHADER_PACK])
    }
    async function tR(WW, RW) {
      var MW;
      const wW = null === (MW = await eW.shaderPackPage.preload()) || void 0 === MW ? void 0 : MW.listing,
        AW = (0, yR.e)();
      wW && null !== AW && await bR.c.reportShaderPackSession(WW, {
        packId: wW.packId,
        sourceHash: wW.sourceHash,
        game: (0, zR.h)(RW, CW.h, "other"),
        playSessionId: AW,
        visitSessionId: (0, NW.e)()
      })
    }
  },
  5661: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    var wW = MW(50);
    const CW = "shaderPack";
    async function zR() {
      var WW;
      let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await wW.e.getItem(CW, RW)) && void 0 !== WW ? WW : null
    }
  },
  37209: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    let wW = !1;
    async function CW(WW, RW) {
      if (!wW) {
        wW = !0;
        try {
          const [{
            reloadBloxd: wW
          }, {
            NotificationProvider: CW
          }] = await Promise.all([Promise.resolve().then((() => MW(1495))), Promise.resolve().then((() => MW(1166)))]);
          if (!WW || !0 === await CW.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void wW(RW)
        } catch (CW) {
          console.error("Leaving the replay failed", CW)
        }
        wW = !1
      }
    }
  },
  5487: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => CW,
      j: () => AW
    });
    const wW = new WeakMap;

    function CW(WW, RW) {
      WW.signal.aborted || wW.set(WW.signal, RW), WW.abort(RW)
    }

    function zR(WW) {
      var RW;
      const MW = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.reason) && void 0 !== RW ? RW : WW && wW.get(WW);
      if (void 0 !== MW && null !== MW) return MW;
      const CW = new DOMException("signal is aborted without reason", "AbortError");
      return null !== WW && void 0 !== WW && WW.aborted && wW.set(WW, CW), CW
    }

    function AW(WW) {
      if (null !== WW && void 0 !== WW && WW.aborted) throw zR(WW)
    }
  },
  37075: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(5487);

    function CW(WW, RW) {
      return new Promise(((MW, CW) => {
        if (null !== RW && void 0 !== RW && RW.aborted) return void CW((0, wW.e)(RW));
        const zR = () => {
            clearTimeout(AW), CW((0, wW.e)(RW))
          },
          AW = setTimeout((() => {
            null === RW || void 0 === RW || RW.removeEventListener("abort", zR), MW()
          }), WW);
        null === RW || void 0 === RW || RW.addEventListener("abort", zR, {
          once: !0
        })
      }))
    }
  },
  38519: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR
    });
    var wW = MW(1506);
    const CW = 33177600,
      zR = 3e4;
    let AW = !1;

    function bR(WW, RW, MW) {
      if (!WW.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (AW) return Promise.reject(new Error("A screenshot is already being taken"));
      AW = !0;
      const wW = function(WW, RW, MW) {
        const wW = Math.max(1, WW),
          zR = Math.max(1, RW),
          AW = Math.min(1, MW / Math.max(wW, zR), Math.sqrt(CW / (wW * zR)));
        return {
          width: Math.max(1, Math.floor(wW * AW)),
          height: Math.max(1, Math.floor(zR * AW))
        }
      }(RW, MW, WW.maxTextureSize);
      return WW.resize(wW.width, wW.height), new Promise(((RW, MW) => {
        let wW, CW = 2,
          bR = null;
        const yR = () => {
          var RW;
          AW = !1, null === (RW = bR) || void 0 === RW || RW(), clearTimeout(wW), WW.restoreSize()
        };
        wW = setTimeout((() => {
          yR(), MW(new Error("No frame was drawn to capture"))
        }), zR), bR = WW.onFrameDrawn((() => {
          if (CW--, CW > 0) return;
          const {
            canvas: wW
          } = WW, zR = {
            width: wW.width,
            height: wW.height
          };
          try {
            wW.toBlob((WW => {
              WW ? RW({
                blob: WW,
                ...zR
              }) : MW(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (AW) {
            MW(AW)
          } finally {
            yR()
          }
        }))
      }))
    }
    async function yR(WW, RW, MW) {
      try {
        const CW = await bR(WW, RW, MW);
        (0, wW.c)(CW.blob, `bloxd-screenshot-${CW.width}x${CW.height}-${Date.now()}.png`)
      } catch (CW) {
        console.error("Error taking screenshot:", CW)
      }
    }
  },
  37069: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW
    });
    var wW = MW(173),
      CW = MW(37075),
      zR = MW(5487);
    const AW = [250, 500, 1e3, 2e3, 1250],
      bR = 406;

    function yR(WW) {
      if ("object" !== typeof WW || null === WW) return !1;
      const {
        code: RW,
        message: MW
      } = WW, CW = wW.b.duplicateLobbyNameError;
      return (RW === CW.code || RW === bR) && (MW === CW.text || MW === CW.text + wW.d)
    }
    async function NW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CW.e;
      for (let CW = 0;; CW++) {
        let bR;
        (0, zR.j)(RW);
        try {
          return await WW()
        } catch (wW) {
          if (bR = AW[CW], void 0 === bR || !yR(wW)) throw wW
        }
        await MW(bR, RW)
      }
    }
  },
  36780: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      d: () => yR,
      g: () => bR,
      h: () => AW
    });
    const wW = "A valid external Instance reference no longer exists.",
      CW = [
        [1e4, "<10s"],
        [6e4, "<1m"],
        [3e5, "<5m"],
        [18e5, "<30m"]
      ];
    const zR = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function AW(WW, RW) {
      return WW ? "frames_refused" : function(WW) {
        var RW;
        const MW = null !== (RW = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(WW)) && void 0 !== RW ? RW : /failed with ([A-Z][A-Z0-9_]+)/.exec(WW);
        return MW ? MW[1] : WW.includes(wW) ? "gpu_process_lost" : "other"
      }(RW)
    }

    function bR(WW) {
      return `${(null===WW||void 0===WW?void 0:WW.vendor)||"unknown vendor"} ${(null===WW||void 0===WW?void 0:WW.architecture)||"unknown architecture"}`
    }

    function yR(WW) {
      var RW;
      const MW = CW.find((RW => {
        let [MW] = RW;
        return WW < MW
      }));
      return null !== (RW = null === MW || void 0 === MW ? void 0 : MW[1]) && void 0 !== RW ? RW : "30m+"
    }
  },
  37137: (WW, RW, MW) => {
    function wW(WW, RW) {
      const MW = WW || 4;
      return MW <= 6 ? 1 : MW <= 8 || RW ? 2 : 3
    }
    MW.d(RW, {
      b: () => wW
    })
  },
  37135: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(232),
      CW = MW(151),
      zR = MW(50);

    function AW() {
      zR.g.setItem(wW.Bb, zR.g.getItem(wW.Bb) + 1), (0, CW.n)() && zR.g.setItem(wW.Ab, zR.g.getItem(wW.Ab) + 1)
    }
  },
  34706: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      h: () => eW,
      k: () => TW,
      o: () => BW
    });
    var wW = MW(284),
      CW = MW(260),
      zR = MW(938),
      AW = MW(50);
    const bR = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      yR = "playSessionGameNameWithVariation",
      NW = "wasMatchmakePlayer";

    function eW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j;
      (0, zR.l)(WW, bR)
    }

    function BW() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j).setItem(NW, !0)
    }

    function tR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j;
      return (0, zR.e)(WW, bR)
    }

    function TW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AW.j;
      const MW = (0, zR.e)(RW, bR),
        eW = function(WW) {
          const RW = WW.getItem(yR);
          return "string" !== typeof RW ? null : RW
        }(RW),
        BW = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j).getItem(NW)
        }(RW);
      let tR;
      return tR = null !== MW && null !== eW && (0, zR.i)(RW, bR) && function(WW, RW, MW) {
          const CW = (0, wW.Pb)(WW),
            zR = (0, wW.Pb)(RW),
            AW = (0, wW.Jb)(WW),
            bR = (0, wW.Jb)(RW);
          return !(CW !== zR || !MW) || CW === zR && AW === bR
        }(eW, WW, BW) ? MW : (0, CW.b)(), (0, zR.m)(RW, bR, tR), RW.setItem(yR, WW),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.j).removeItem(NW)
        }(RW), tR
    }
  },
  34703: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => iR,
      c: () => YW
    });
    var wW = MW(860),
      CW = MW(265),
      zR = MW(284),
      AW = MW(865),
      bR = MW(3563),
      yR = MW(116),
      NW = MW(151),
      eW = MW(1495),
      BW = MW(130),
      tR = MW(34706),
      TW = MW(50),
      gR = MW(932);

    function iR() {
      var WW, RW;
      return [...null !== (WW = navigator.languages) && void 0 !== WW ? WW : [null !== (RW = navigator.language) && void 0 !== RW ? RW : "none"], "en-gb"]
    }

    function YW(WW, RW, MW, YW, JW) {
      const PW = (0, wW.k)(RW) ? (0, wW.n)(RW) : null,
        IW = {
          cookies: (0, eW.getAllCookiesForGameNameWithVariation)(RW),
          isMobile: (0, yR.isMobile)(),
          isUsingCustomGameTexturePack: null !== PW && JW(PW),
          generalCookies: {
            joinDiscord: !!TW.g.getItem("DiscordPressed"),
            newGo: bR.b,
            ...WW.getMetricsCookies(),
            trafficCode: YW,
            compliance: yR.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, yR.getBrowserName)(),
            version: (0, yR.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, yR.getPlatformType)(),
            deviceType: (0, BW.c)()
          },
          isLoggedIn: WW.isLoggedIn(),
          lobbyName: MW,
          languages: iR(),
          version: CW.e,
          siteUsed: NW.u,
          subsiteUsed: NW.C,
          playSessionId: (0, tR.k)(RW),
          visitSessionId: (0, gR.e)()
        };
      return null !== PW && (0, zR.Ec)(PW) ? (IW.lobbyName = (0, wW.h)(PW, (0, wW.m)(RW), MW), {
        roomName: `classic_${AW.g}`,
        joinOptions: IW
      }) : {
        roomName: RW,
        joinOptions: IW
      }
    }
  },
  37230: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    const wW = "Traffic checks failed! Please use Chrome, disable extensions and refresh your page. Report on Discord if this persists."
  },
  8121: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => bR,
      i: () => AW,
      m: () => eW,
      p: () => BW,
      s: () => NW
    });
    var wW = MW(173);
    const CW = 33554432,
      zR = 6144,
      AW = 4608,
      bR = 512,
      yR = 4;

    function NW(WW) {
      return "number" === typeof WW && WW < yR
    }

    function eW(WW) {
      return Math.floor(CW * WW / zR)
    }

    function BW(WW) {
      const RW = WW - Math.floor(WW / 6);
      let MW = wW.c.maxChunkHorizAddDistance,
        CW = wW.c.maxChunkVertAddDistance;
      if (tR(MW + 1, CW + 1) <= RW) return null;
      for (; tR(MW + 1, CW + 1) > RW && (MW > 0 || CW > 0);) MW > CW ? MW-- : CW--;
      return {
        horizontal: MW,
        vertical: CW
      }
    }

    function tR(WW, RW) {
      const MW = Math.max(WW, RW);
      let wW = 0;
      for (let CW = -MW; CW <= MW; CW++)
        for (let zR = -MW; zR <= MW; zR++)
          for (let AW = -MW; AW <= MW; AW++) TW(WW, RW, CW, zR, AW) && wW++;
      return wW
    }

    function TW(WW, RW, MW, wW, CW) {
      const zR = MW * MW + CW * CW;
      return WW === RW ? zR + wW * wW <= WW * WW : WW > RW ? Math.abs(wW) <= RW && zR + wW * wW <= WW * WW : zR <= WW * WW && zR + wW * wW <= RW * RW
    }
  },
  38358: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      i: () => zR,
      m: () => bR,
      q: () => eW,
      t: () => yR,
      w: () => AW
    });
    var wW = MW(173);
    const CW = 3e3,
      zR = 15e3;

    function AW(WW) {
      const RW = WW.endsWith(wW.d);
      return {
        text: (RW ? WW.slice(0, -wW.d.length) : WW) || null,
        dropsCache: RW
      }
    }
    const bR = "Either your internet isn't working or this is a bug.";

    function yR(WW, RW) {
      const MW = eW(WW);
      return null !== MW.name && "" === wW.b[MW.name].text && null !== RW ? RW : MW.reason
    }
    const NW = "You were removed from the game.";

    function eW(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const CW = null !== (RW = Object.keys(wW.b).find((RW => wW.b[RW].code === WW))) && void 0 !== RW ? RW : null;
      if (null === CW) return {
        code: WW,
        name: CW,
        reason: null !== MW && void 0 !== MW ? MW : `${bR}\nCode: ${WW}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: zR,
        canReconnect: AW = !1
      } = wW.b[CW], yR = WW === wW.b.outdatedVersion.code || WW === wW.b.loadRecaptchaError.code;
      return {
        code: WW,
        name: CW,
        reason: "" !== zR ? zR : null !== MW && void 0 !== MW ? MW : WW === wW.b.gameOrPluginKick.code ? NW : `Code: ${WW}`,
        canReconnect: AW,
        automaticallyReconnect: WW === wW.b.customGameUpdated.code || WW === wW.b.duplicateLobbyNameError.code,
        requiresRefresh: yR
      }
    }
  },
  38455: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    const wW = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  38427: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => gR,
      g: () => iR,
      h: () => tR,
      l: () => BW
    });
    const wW = 2e3,
      CW = "unavailable";
    let zR = () => Promise.resolve().then((() => MW(2363))),
      AW = null,
      bR = null,
      yR = NW();

    function NW() {
      let WW = () => {};
      return {
        promise: new Promise((RW => {
          WW = () => {
            RW(null)
          }
        })),
        resolve: WW
      }
    }

    function eW() {
      if (null === AW) {
        const WW = zR();
        AW = WW, WW.then((RW => {
          AW === WW && (bR = RW)
        }), (() => {
          AW === WW && (AW = null)
        }))
      }
      return AW
    }

    function BW() {
      eW().catch((() => {}))
    }

    function tR() {
      yR.resolve()
    }

    function TW(WW, RW, MW, wW) {
      if (null === WW) return {
        errorKind: RW,
        fingerprint: CW,
        dedupe: `${RW}|${wW}`
      };
      const {
        fingerprint: zR
      } = WW.clientErrorKey(RW, MW, wW);
      return {
        errorKind: RW,
        fingerprint: zR,
        dedupe: zR
      }
    }

    function gR(WW, RW, MW, wW) {
      return null === bR ? wW ? (BW(), TW(null, WW, RW, MW)) : null : TW(bR, WW, RW, MW)
    }
    async function iR(WW, RW, MW) {
      let CW;
      const zR = new Promise((WW => {
        CW = setTimeout((() => {
          WW(null)
        }), wW)
      }));
      try {
        return TW(await Promise.race([eW(), zR, yR.promise]), WW, RW, MW)
      } catch {
        return TW(null, WW, RW, MW)
      } finally {
        clearTimeout(CW)
      }
    }
  },
  38425: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BUILT_IN_ANIMATIONS_SITE: () => WR,
      CORE_ERRORS_SITE: () => uW,
      EVENT_OVERFLOW_SITE: () => SW,
      JOIN_SITE: () => nW,
      LEAVE_SITE: () => GW,
      MODEL_FEED_SITE: () => LW,
      MODEL_POOL_SITE: () => HW,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => wR,
      NON_FATAL_REPORTS_PER_SESSION: () => PR,
      PREVIEW_ANIMATIONS_SITE: () => ZW,
      RENDER_RELOAD_SITE: () => qR,
      TEXTURE_NAMES_SITE: () => DW,
      TEXTURE_PACK_FEED_SITE: () => RR,
      TurnstilePageError: () => uR,
      WASM_LOAD_SITE: () => OW,
      crashError: () => fR,
      crashReportsSettled: () => kM,
      flushCrashReports: () => XR,
      joinFailureCode: () => OR,
      lokiTransport: () => AR,
      modelFailureCode: () => qM,
      readTrap: () => dR,
      renderLossDetail: () => BM,
      reportCoreErrors: () => sR,
      reportCountedLoadFallback: () => vM,
      reportCrash: () => QR,
      reportDataLoadFailure: () => iw,
      reportDisconnect: () => DR,
      reportDracoDecoderFailure: () => WM,
      reportEventOverflow: () => wM,
      reportMemoryShed: () => AM,
      reportModelFailure: () => ZR,
      reportModelPoolFailure: () => SR,
      reportPageJoinFailure: () => GR,
      reportRenderReload: () => tw,
      reportReplayFault: () => yw,
      reportStaleBuildReload: () => JM,
      reportStoppedCore: () => ER,
      reportTerrainTextureFailure: () => TM,
      reportTexturePackFeedLoadFailure: () => MM,
      reportUnstreamedCoreLoad: () => KR,
      reportUnsupportedFallback: () => xM,
      reportUnusedSeat: () => HR,
      reportWorkerLost: () => CM,
      reportWorkerStartTimeout: () => bw,
      reportWorldgenGaveUp: () => zw,
      reportWorldgenLoadFailure: () => RM,
      resetCrashReports: () => aM,
      setCrashBackend: () => TR,
      setCrashScreen: () => BR,
      setCrashTransport: () => NR,
      showCrash: () => UR,
      showJoinFailure: () => nR,
      showUnsupported: () => mM
    });
    var wW = MW(920),
      CW = MW(2371),
      zR = MW(38427),
      AW = MW(3773),
      bR = MW(3775);
    const yR = {
        1: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer"
      },
      NW = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      eW = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      BW = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      };

    function tR(WW) {
      return String(WW).replace(/\d/g, (WW => String.fromCharCode(97 + Number(WW))))
    }

    function TW(WW, RW) {
      var MW;
      return null !== (MW = WW[RW]) && void 0 !== MW ? MW : tR(RW)
    }

    function gR(WW, RW) {
      switch (WW) {
        case bR.i.RenderSceneRowNotDrawn:
          return {
            words: ` ${TW(eW,RW)}`, instance: String(RW), group: String(WW)
          };
        case bR.i.RenderChunkMeshNotDrawn: {
          const MW = 0 === (128 & RW) ? "" : " shortage",
            wW = RW >>> 8;
          return {
            words: ` ${TW(BW,127&RW)}${MW}${0===wW?"":` kind ${tR(wW)}`}`,
            instance: String(RW),
            group: String(WW)
          }
        }
        case bR.i.RenderInternal: {
          const MW = TW(NW, 255 & RW),
            wW = RW >>> 8 & 255;
          if (0 === wW) return {
            words: ` ${MW}`,
            instance: String(RW),
            group: String(WW)
          };
          const CW = TW(yR, wW),
            zR = RW >>> 16;
          return {
            words: ` ${MW} ${CW} program ${tR(zR)}`,
            instance: `${MW} ${CW}`,
            group: "program",
            program: {
              programFailure: CW,
              program: String(zR)
            }
          }
        }
        default:
          return null
      }
    }
    const iR = 2,
      YW = new Map;

    function JW(WW) {
      let {
        group: RW,
        instance: MW
      } = WW, wW = YW.get(RW);
      return void 0 === wW && (wW = [], YW.set(RW, wW)), !wW.includes(MW) && (wW.length >= iR || (wW.push(MW), !1))
    }
    var PW = MW(36780);

    function IW(WW) {
      return 1006 === WW || 1001 === WW
    }

    function oW(WW) {
      return WW < 1e3 ? "<1s" : WW < 5e3 ? "1-5s" : WW < 3e4 ? "5-30s" : WW < 3e5 ? "30s-5m" : ">5m"
    }

    function lW() {
      return {
        online: "undefined" === typeof navigator ? "" : String(navigator.onLine),
        visibility: "undefined" === typeof document ? "" : document.visibilityState
      }
    }
    var FW = MW(38310),
      fW = MW(38410),
      QW = MW(38136),
      rR = MW(38367),
      cR = MW(2036),
      XW = MW(38358),
      jR = MW(38383);
    const kR = "seat reservation expired.",
      aR = "early_leave";

    function sW(WW) {
      if (WW instanceof rR.m) return WW.networkLost ? "expected" : "unrecognised";
      if (WW instanceof rR.b) {
        if ("closed" === WW.stage && (0 === WW.code || IW(WW.code))) return "expected";
        if ("roomError" === WW.stage && (WW.serverText === kR || WW.serverText === aR)) return "expected"
      }
      return WW instanceof rR.b || WW instanceof rR.k ? null === (0, XW.q)(WW.code).name ? "unrecognised" : "known" : (0, cR.f)(WW) ? "expected" : WW instanceof rR.o || WW instanceof jR.d ? "known" : "unrecognised"
    }
    var dW = MW(2793),
      pW = MW(2801),
      hW = MW(38432),
      UW = MW(38443),
      EW = MW(38463),
      VW = MW(2374),
      mR = MW(38401),
      xR = MW(38317),
      vR = MW(38324);
    const KW = "[bloxd-wasm-client]",
      uW = "coreErrors",
      OW = "wasmLoad",
      nW = "join",
      GW = "Cw",
      LW = "modelFeed",
      HW = "modelWorkerPool",
      DW = "textureNames",
      qR = "renderReload",
      ZW = "previewAnimations",
      SW = "eventOverflow",
      WR = "builtInAnimations",
      RR = "texturePackFeed",
      MR = 300,
      wR = 8;
    let CR = 0;
    const zM = new Set,
      AR = (WW, RW) => {
        const MW = gM[WW.kind];
        if (null === MW) return void bM(WW, RW, tM, null);
        const wW = (0, zR.e)(MW, WW.message, WW.code, WW.fatal);
        if (null !== wW) return void bM(WW, RW, tM, wW);
        const CW = tM;
        cM("Loki", (async () => {
          bM(WW, RW, CW, await (0, zR.g)(MW, WW.message, WW.code))
        }))
      };

    function bM(WW, RW, MW, zR) {
      const {
        kind: AW,
        code: bR,
        site: yR,
        fatal: NW,
        details: eW
      } = WW;
      if (!NW)
        if (null === zR || (0, CW.b)(zR.errorKind) || zM.has(zR.dedupe)) {
          if (CR >= wR) return;
          CR++
        } else zM.add(zR.dedupe);
      const BW = {
        ...eW,
        kind: AW,
        code: bR,
        site: yR,
        fatal: String(NW),
        backend: MW
      };
      null !== zR && (BW.errorKind = zR.errorKind, BW.fingerprint = zR.fingerprint), RW instanceof Error && "string" === typeof RW.stack && (BW.causeStack = RW.stack.slice(0, 2e3)), (0, wW.jz)(fR(WW, RW), BW)
    }
    let yM = AR;

    function NR(WW) {
      const RW = yM;
      return yM = WW, RW
    }
    let eR = () => {};

    function BR(WW) {
      const RW = eR;
      return eR = WW, RW
    }
    let tM = "unpicked";

    function TR(WW) {
      tM = WW
    }
    const gM = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: null,
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect"
      },
      iM = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load"
      },
      YR = new Set(["unstreamedLoad"]);
    let JR = !1;
    const PR = 20,
      IR = new Map;
    let oR = 0,
      lR = 0;
    const FR = new Set;

    function fR(WW, RW) {
      return Object.assign(new Error(`${WW.code}: ${WW.message}`), {
        name: "WasmClientCrash",
        cause: null !== RW && void 0 !== RW ? RW : void 0
      })
    }

    function QR(WW) {
      var RW, wW;
      const {
        kind: CW,
        code: zR,
        site: AW,
        fatal: bR,
        message: yR,
        error: NW
      } = WW, eW = !1 !== WW.toTransport && !YR.has(CW), BW = !bR && eW, tR = {
        kind: CW,
        code: zR,
        site: AW,
        fatal: bR,
        message: yR,
        details: null !== (RW = WW.details) && void 0 !== RW ? RW : {}
      }, TW = `${zR}@${AW}${void 0===WW.instance?"":`#${WW.instance}`}${bR?"!":""}`, gR = (null !== (wW = IR.get(TW)) && void 0 !== wW ? wW : 0) + 1;
      if (IR.set(TW, gR), gR > 1 ? 0 === (gR & gR - 1) && rM((() => {
          console.warn(`${KW} ${zR} at ${AW} reported ${gR} times`)
        })) : BW && oR >= PR ? rM((() => {
          console.warn(`${KW} ${CW} ${zR} at ${AW}: ${yR} (not sent: the session's ${PR} went)`, tR.details, null !== NW && void 0 !== NW ? NW : "")
        })) : (BW && oR++, function(WW, RW, wW) {
          var CW, zR;
          const {
            kind: AW,
            code: bR,
            site: yR,
            fatal: NW,
            message: eW,
            details: BW
          } = WW;
          rM((() => {
            (NW ? console.error : console.warn)(`${KW} ${AW} ${bR} at ${yR}: ${eW}`, BW, null !== RW && void 0 !== RW ? RW : "")
          }));
          const tR = iM[AW],
            TW = null !== (CW = null !== (zR = gM[AW]) && void 0 !== zR ? zR : tR) && void 0 !== CW ? CW : null;
          null !== TW && cM("counts", (async () => {
            const {
              peekVisitSessionId: WW
            } = await Promise.resolve().then((() => MW(932)));
            if (null !== WW()) {
              const {
                reportCappedWasmFailure: WW,
                reportWasmFailure: RW
              } = await MW.e(187).then((() => MW(34598)));
              (void 0 === tR ? RW : WW)(TW, eW, bR), JR = !0
            }
          }));
          wW && rM((() => {
            yM(WW, RW)
          }))
        }(tR, NW, eW)), bR) {
        var iR;
        const RW = null !== (iR = WW.screen) && void 0 !== iR ? iR : {
          text: (0, EW.g)(tR, !0),
          reload: !0
        };
        rM((() => {
          eR(RW)
        }))
      }
      return tR
    }

    function rM(WW) {
      try {
        WW()
      } catch (RW) {
        try {
          console.warn(`${KW} could not send a report`, RW)
        } catch {}
      }
    }

    function cM(WW, RW) {
      try {
        const MW = RW().catch((RW => {
          console.warn(`${KW} could not send the report to ${WW}`, RW)
        })).finally((() => {
          FR.delete(MW)
        }));
        FR.add(MW)
      } catch (MW) {
        console.warn(`${KW} could not send the report to ${WW}`, MW)
      }
    }
    async function XR(WW) {
      let RW;
      (0, zR.h)();
      const MW = new Promise((MW => {
        RW = setTimeout(MW, WW)
      }));
      await Promise.race([jM(), MW]), clearTimeout(RW)
    }
    async function jM() {
      if (await Promise.allSettled([...FR]), JR) try {
        const {
          flushClientAnalyticsEvents: WW
        } = await Promise.resolve().then((() => MW(1306)));
        await WW()
      } catch (WW) {
        console.warn(`${KW} could not send the counts`, WW)
      }
    }
    async function kM() {
      for (; FR.size > 0;) await Promise.allSettled([...FR])
    }

    function aM() {
      IR.clear(), oR = 0, JR = !1, CR = 0, zM.clear(), lR = 0, YW.clear()
    }

    function sR(WW, RW, MW, wW) {
      lR += RW;
      for (const {
          code: bR,
          detail: yR
        }
        of WW) {
        var CW, zR;
        const WW = (0, AW.Ad)(bR),
          RW = gR(bR, yR),
          NW = Array.from(null !== (CW = null === wW || void 0 === wW ? void 0 : wW(bR, yR)) && void 0 !== CW ? CW : "").slice(0, MR).join(""),
          eW = `core error ${WW}${null!==(zR=null===RW||void 0===RW?void 0:RW.words)&&void 0!==zR?zR:""}${NW?`: ${NW}`:""}`,
          BW = {
            errorCode: String(bR),
            detail: String(yR),
            droppedBefore: String(lR),
            wasmBuild: MW.wasm,
            clientVersion: MW.client,
            ...null === RW || void 0 === RW ? void 0 : RW.program
          };
        null !== RW && JW(RW) ? rM((() => {
          console.warn(`${KW} coreError CORE-${WW}: ${eW} (not sent: the session's render warnings of its kind went)`, BW)
        })) : QR({
          kind: bR === AW.B.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${WW}`,
          site: uW,
          fatal: !1,
          message: eW,
          details: BW,
          instance: null === RW || void 0 === RW ? void 0 : RW.instance
        })
      }
    }

    function dR(WW) {
      return (0, mR.h)(WW instanceof xR.d ? WW.trap : WW, dW.Q, dW.pb)
    }
    const pR = "declined=js";

    function hR(WW) {
      return WW ? {
        labels: [pR],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function UR(WW, RW, MW) {
      return VR(WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function ER(WW, RW, MW) {
      return VR(WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function VR(WW, RW, MW, wW, CW) {
      let {
        memoryDetails: zR = {},
        declined: AW = !1
      } = wW;
      const {
        code: bR,
        details: yR,
        message: NW
      } = (0, fW.M)(WW, RW), eW = [];
      null !== MW && (yR.trapKind = MW.kind, null !== MW.panic && (yR.panic = (0, mR.d)(MW.panic)), MW.refusedBytes > 0 && (yR.refusedAllocation = String(MW.refusedBytes)), eW.push((0, mR.j)(MW.kind, MW.refusedBytes)));
      const BW = hR(AW);
      return QR({
        kind: "crash",
        code: bR,
        site: WW.site,
        fatal: CW,
        message: [...eW, ...BW.labels, NW].join("; "),
        details: {
          ...yR,
          ...BW.details,
          ...zR
        },
        error: WW.error
      })
    }

    function mM(WW, RW, MW) {
      return QR({
        kind: "unsupported",
        code: RW,
        site: OW,
        fatal: !0,
        message: MW,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: WW,
          status: RW
        },
        screen: {
          text: (0, EW.q)(WW),
          reload: "download" === WW
        }
      })
    }

    function xM(WW, RW) {
      return QR({
        kind: "unsupportedFallback",
        code: "unsupported",
        site: OW,
        fatal: !1,
        message: RW,
        details: {
          ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          cause: WW,
          status: "unsupported",
          fallback: "js"
        }
      })
    }

    function vM(WW, RW, MW, wW) {
      const CW = hR(wW);
      return QR({
        kind: "unsupported",
        code: RW,
        site: OW,
        fatal: !1,
        message: [...CW.labels, MW].join("; "),
        details: {
          cause: WW,
          status: RW,
          fallback: "js",
          ...CW.details
        }
      })
    }

    function KR() {
      const {
        code: WW,
        message: RW
      } = VW.b;
      return QR({
        kind: "unstreamedLoad",
        code: WW,
        site: OW,
        fatal: !1,
        message: RW
      })
    }
    class uR extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function OR(WW) {
      return WW instanceof rR.k ? 0 === WW.code ? "JOIN-matchmake" : `JOIN-${WW.code}` : WW instanceof rR.b ? 0 === WW.code ? `JOIN-${WW.stage}` : `JOIN-${WW.stage}-${WW.code}` : WW instanceof QW.b ? "JOIN-gameCode" : WW instanceof uR ? "JOIN-turnstilePage" : WW instanceof rR.o ? "JOIN-trafficCheck" : "JOIN-network"
    }

    function nR(WW, RW) {
      const MW = (0, vR.g)(WW),
        wW = {
          wasmBuild: RW.wasm,
          clientVersion: RW.client
        },
        CW = WW instanceof uR ? {
          text: (0, EW.l)(),
          reload: !1
        } : void 0,
        zR = sW(WW),
        AW = "expected" !== zR;
      return QR({
        kind: "join",
        code: OR(WW),
        site: nW,
        fatal: !0,
        message: MW,
        details: wW,
        error: WW,
        screen: CW,
        toTransport: AW,
        instance: zR
      })
    }

    function GR(WW, RW, MW) {
      var wW;
      const CW = sW(WW),
        zR = {
          cause: (WW instanceof rR.b || WW instanceof rR.k) && null !== (wW = WW.serverText) && void 0 !== wW ? wW : "",
          sinceJoinStart: oW(MW.sinceJoinStartMs),
          game: MW.game,
          ...lW(),
          wasmBuild: RW.wasm,
          clientVersion: RW.client
        };
      return QR({
        kind: "pageJoin",
        code: OR(WW),
        site: nW,
        fatal: !1,
        message: (0, vR.g)(WW),
        details: zR,
        error: WW,
        toTransport: "unrecognised" === CW,
        instance: CW
      })
    }
    const LR = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function HR(WW, RW) {
      let {
        unused: MW,
        answered: wW,
        heldMs: CW
      } = WW;
      const {
        code: zR,
        message: AW
      } = LR[MW], bR = {
        unused: MW,
        answered: String(wW),
        heldMs: String(CW),
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "seat",
        code: zR,
        site: nW,
        fatal: !1,
        message: AW,
        details: bR
      })
    }

    function DR(WW, RW, MW) {
      var wW;
      const CW = {
          closeCode: String(WW.code),
          recognised: String(null !== WW.name),
          closeReason: MW.closeReason,
          sinceJoined: oW(MW.sinceJoinedMs),
          game: MW.game,
          ...lW(),
          wasmBuild: RW.wasm,
          clientVersion: RW.client
        },
        zR = null !== (wW = WW.name) && void 0 !== wW ? wW : String(WW.code),
        AW = null === WW.name && !IW(WW.code);
      return QR({
        kind: "disconnect",
        code: zR,
        site: GW,
        fatal: !1,
        message: "Left room",
        details: CW,
        toTransport: AW
      })
    }

    function qM(WW) {
      return WW.error instanceof pW.c ? `MODEL-${WW.error.status}` : WW.error instanceof hW.l ? "MODEL-ring" : "MODEL-network"
    }

    function ZR(WW, RW) {
      const MW = qM(WW),
        wW = `model file ${WW.file} ${WW.startup?"(startup) ":""}could not load`,
        CW = {
          file: String(WW.file),
          url: WW.url,
          wasmBuild: RW.wasm,
          clientVersion: RW.client
        };
      return QR({
        kind: WW.startup ? "model" : "modelLate",
        code: MW,
        site: LW,
        fatal: WW.startup,
        message: wW,
        details: CW,
        error: WW.error
      })
    }

    function SR(WW, RW) {
      const MW = {
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: HW,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: MW,
        error: WW
      })
    }

    function WM(WW, RW) {
      const MW = {
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: HW,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: MW,
        error: WW
      })
    }

    function RM(WW, RW) {
      const MW = {
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: fW.I,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: MW,
        error: WW
      })
    }

    function MM(WW, RW) {
      const MW = {
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: RR,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: MW,
        error: WW
      })
    }

    function wM(WW, RW) {
      const {
        frames: MW,
        acks: wW,
        mask: CW,
        outcome: zR
      } = WW, AW = {
        frames: String(MW),
        acks: String(wW),
        mask: String(CW),
        outcome: null !== zR && void 0 !== zR ? zR : "resynced",
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "recovered",
        code: "rejoined" === zR ? "CORE-eventOverflowRejoin" : "failed" === zR ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: SW,
        fatal: !1,
        message: `the event buffer refused records in ${MW} frames`,
        details: AW
      })
    }

    function CM(WW, RW, MW) {
      return QR({
        kind: "recovered",
        code: "CORE-workerLost",
        site: WW,
        fatal: !1,
        message: `a ${WW} worker was lost`,
        details: {
          reason: RW,
          wasmBuild: MW.wasm,
          clientVersion: MW.client
        }
      })
    }

    function zw(WW, RW) {
      const MW = {
        lastReason: WW,
        wasmBuild: RW.wasm,
        clientVersion: RW.client
      };
      return QR({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: fW.I,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: MW
      })
    }

    function AM(WW, RW) {
      return QR({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: fW.p,
        fatal: !1,
        message: "wasm memory was refused: the session shed load",
        details: {
          ...WW,
          wasmBuild: RW.wasm,
          clientVersion: RW.client
        }
      })
    }

    function bw(WW, RW, MW) {
      return QR({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: WW,
        fatal: !1,
        message: `a ${WW} worker did not start`,
        details: {
          waitedMs: String(Math.round(RW)),
          wasmBuild: MW.wasm,
          clientVersion: MW.client
        }
      })
    }

    function yw(WW, RW, MW) {
      return QR({
        kind: "recovered",
        code: "CORE-replayFault",
        site: WW,
        fatal: !1,
        message: `the replay's ${WW} failed`,
        details: {
          wasmBuild: MW.wasm,
          clientVersion: MW.client
        },
        error: RW
      })
    }
    const NM = {
        lost: "render device was lost",
        frames_refused: "render device refused a frame",
        start_failed: "renderer couldn't start"
      },
      eM = {
        adapter: null,
        boundAtMs: null
      };

    function BM(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const CW = null === RW || void 0 === RW ? void 0 : RW.message,
        zR = RW instanceof FW.d ? "timeout" : (0, PW.h)("frames_refused" === WW, "string" === typeof CW ? CW : ""),
        AW = null === MW.boundAtMs ? "unbound" : `up${(0,PW.d)(wW-MW.boundAtMs)}`,
        bR = null === MW.adapter ? "no adapter" : (0, PW.g)(MW.adapter);
      return `${zR} ${(0,FW.g)()?"hidden":"visible"} ${AW} ${bR}`
    }

    function tw(WW, RW, wW) {
      let {
        cause: CW = "lost",
        error: zR,
        context: AW = eM
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const bR = BM(CW, zR, AW),
        yR = {
          losses: String(RW),
          cause: CW,
          detail: bR,
          wasmBuild: wW.wasm,
          clientVersion: wW.client
        },
        NW = `the ${WW} ${NM[CW]}`,
        eW = QR({
          kind: "recovered",
          code: "CORE-renderLost",
          site: qR,
          fatal: !1,
          message: NW,
          details: yR,
          error: zR
        });
      return cM("ga", (async () => {
        const {
          logError: RW
        } = await Promise.resolve().then((() => MW(2202))), wW = `${PW.b["webgpu"===WW?"WebGPU":"WebGL2"]}\n Error: ${bR}`;
        RW("warning", wW), RW("error", wW)
      })), eW
    }

    function TM(WW, RW) {
      var MW, wW;
      const CW = null === WW.name ? "TEXTURE-sources" : null === WW.url ? "TEXTURE-nourl" : WW.error instanceof UW.c ? `TEXTURE-${WW.error.status}` : "TEXTURE-network",
        zR = null === WW.name ? "terrain textures could not load" : `terrain texture ${WW.name} could not load`,
        AW = {
          texture: null !== (MW = WW.name) && void 0 !== MW ? MW : "",
          url: null !== (wW = WW.url) && void 0 !== wW ? wW : "",
          wasmBuild: RW.wasm,
          clientVersion: RW.client
        };
      return QR({
        kind: "terrainTexture",
        code: CW,
        site: fW.G,
        fatal: !1,
        message: zR,
        details: AW,
        error: WW.error
      })
    }
    const gw = {
      previewAnimations: {
        site: ZW,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: WR,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function iw(WW, RW, MW, wW) {
      const {
        site: CW,
        prefix: zR,
        name: AW
      } = gw[WW], {
        stage: bR,
        error: yR
      } = MW;
      return QR({
        kind: WW,
        code: "decode" === bR ? null === yR ? `${zR}-decode` : `${zR}-trap` : yR instanceof pW.c ? `${zR}-${yR.status}` : `${zR}-network`,
        site: CW,
        fatal: !1,
        message: "decode" === bR ? `${AW} did not decode` : `${AW} could not load`,
        details: {
          url: RW,
          wasmBuild: wW.wasm,
          clientVersion: wW.client
        },
        error: yR
      })
    }
    const YM = "staleBuild";

    function JM(WW, RW, MW) {
      const wW = {
          failedSite: WW.site,
          url: WW.url,
          from: WW.from,
          sameBuild: String(WW.from === RW),
          reloadMs: String(Math.max(0, Date.now() - WW.at)),
          wasmBuild: MW.wasm,
          clientVersion: MW.client
        },
        CW = `reloaded into a newer build after ${WW.site} failed to load: ${WW.error}`;
      return QR({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: YM,
        fatal: !1,
        message: CW,
        details: wW
      })
    }
  },
  38512: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => zR
    });
    var wW = MW(2301),
      CW = MW(860);

    function zR(WW, RW) {
      return null !== WW.gameSource && (0, wW.m)(RW, WW.gameSource)
    }

    function AW(WW, RW) {
      if (null === WW.gameSource || "" === WW.gameSource || null === RW) return !0;
      const MW = (0, CW.k)(RW) ? (0, CW.n)(RW) : null;
      return null !== MW && zR(WW, MW)
    }
  },
  38493: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      e: () => iR,
      h: () => NW,
      i: () => eW,
      j: () => gR
    });
    var wW = MW(38437),
      CW = MW(38500);
    const zR = 396,
      AW = 1,
      bR = 2,
      yR = 3,
      NW = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      eW = {
        File: 0,
        Item: 1
      },
      BW = 0,
      tR = 1,
      TW = 2;

    function gR(WW) {
      const RW = (0, wW.n)();
      RW.catch((() => {}));
      let CW = null;
      return {
        glbUrl: WW,
        lifeformAtlasUrl: async WW => (await RW).lifeformAtlasUrl(WW),
        armourAtlasUrl: async () => (await MW.e(182).then((() => MW(32670)))).armourAtlasUrl,
        capeUrl: async WW => (await RW).capeUrl(WW),
        attachmentImageUrl: async WW => (await RW).attachmentImageUrl(WW),
        blockImageUrl: async WW => (await RW).blockImageUrl(WW),
        groupAtlasUrl: async WW => (await RW).groupAtlasUrl(WW),
        particleTextureUrl: async WW => (await RW).particleTextureUrl(WW),
        particleItemUrl: async WW => (CW ??= MW.e(32).then((() => MW(48986))).catch((WW => {
          throw CW = null, WW
        })), (await CW).particleItemUrl(WW))
      }
    }
    class iR {
      constructor(WW, RW) {
        var MW, zR, AW;
        let bR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = WW, this.onFailure = RW, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.Qw = !1, this.load = null !== (MW = bR.load) && void 0 !== MW ? MW : (WW, RW) => (0, CW.n)(WW, bR.fetchImage, RW), this.release = null !== (zR = bR.release) && void 0 !== zR ? zR : CW.u, this.fetchFile = null !== (AW = bR.fetchFile) && void 0 !== AW ? AW : WW => (0, wW.i)(WW)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(WW, RW) {
        this.glbWrittenImages.set(WW, FW(RW))
      }
      glbTaken(WW, RW) {
        const MW = this.glbWrittenImages.get(WW);
        this.glbWrittenImages.delete(WW), RW && this.setGlbImages(WW, void 0 !== MW && MW.length > 0 ? MW : void 0)
      }
      setGlbImages(WW, RW) {
        var MW;
        this.glbTakenCount.set(WW, (null !== (MW = this.glbTakenCount.get(WW)) && void 0 !== MW ? MW : 0) + 1), void 0 === RW ? this.glbImages.delete(WW) : this.glbImages.set(WW, RW);
        const wW = [];
        for (const {
            key: CW
          }
          of this.loading.values()) CW.kind === NW.Glb && CW.word === WW && wW.push(CW);
        for (let CW = this.ready.length - 1; CW >= 0; CW--) {
          const {
            key: RW,
            id: MW
          } = this.ready[CW];
          RW.kind === NW.Glb && RW.word === WW && (this.ready.splice(CW, 1), null !== MW && (this.answered.delete(MW), this.release(MW)), wW.push(RW))
        }
        this.loadAgain(wW)
      }
      onEvent(WW) {
        if (this.Qw) return;
        const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
        for (let MW = 0; MW + 8 <= WW.byteLength; MW += 8) {
          const WW = RW.getUint8(MW),
            wW = RW.getUint32(MW + 4, !0);
          if (WW === yR) {
            this.answered.delete(wW), this.release(wW);
            continue
          }
          const CW = {
            kind: RW.getUint8(MW + 1),
            index: RW.getUint8(MW + 2),
            word: wW
          };
          WW === AW ? this.want(CW) : WW === bR && this.loading.delete(YW(CW))
        }
      }
      reload(WW, RW) {
        const MW = MW => WW.includes(MW.kind) && (void 0 === RW || RW(MW)),
          wW = new Map;
        for (const CW of this.answered.values()) MW(CW) && wW.set(YW(CW), CW);
        for (const [CW, {
            key: zR
          }] of this.loading) MW(zR) && wW.set(CW, zR);
        this.loadAgain(wW.values())
      }
      loadAgain(WW) {
        for (const RW of WW) this.loading.delete(YW(RW)), this.want(RW)
      }
      drain(WW) {
        if (null !== WW)
          for (; this.ready.length > 0;) {
            if (!WW(zR, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Qw = !0, this.loading.clear(), this.ready.length = 0;
        for (const WW of this.answered.keys()) this.release(WW);
        this.answered.clear()
      }
      want(WW) {
        const RW = YW(WW);
        if (this.loading.has(RW)) return;
        const MW = {
          key: WW
        };
        this.loading.set(RW, MW), this.loadKey(WW).then((wW => {
          this.Qw || this.loading.get(RW) !== MW ? this.release(wW.id) : (this.loading.delete(RW), this.answered.set(wW.id, WW), this.ready.push({
            record: PW(WW, BW, wW),
            key: WW,
            id: wW.id
          }))
        }), (wW => {
          if (this.Qw || this.loading.get(RW) !== MW) return;
          this.loading.delete(RW), this.onFailure({
            key: WW,
            error: wW
          });
          const zR = wW instanceof CW.e && "decode" === wW.stage ? tR : TW;
          this.ready.push({
            record: PW(WW, zR, null),
            key: WW,
            id: null
          })
        }))
      }
      async loadKey(WW) {
        switch (WW.kind) {
          case NW.Glb:
            return this.load(await this.glbImage(WW), "none");
          case NW.LifeformAtlas:
            return this.load(JW(await this.sources.lifeformAtlasUrl(WW.word), WW), "none");
          case NW.ArmourAtlas:
            return this.load(JW(await this.sources.armourAtlasUrl(), WW), "none");
          case NW.Cape:
            return this.load(JW(await this.sources.capeUrl(WW.word), WW), "none");
          case NW.AttachmentImage:
            return this.load(JW(await this.sources.attachmentImageUrl(WW.word), WW), "none");
          case NW.GroupAtlas:
            return this.load(JW(await this.sources.groupAtlasUrl(WW.word), WW), "none");
          case NW.BlockImage:
            return this.load(JW(await this.sources.blockImageUrl(WW.word), WW), "none");
          case NW.Particle: {
            const RW = await (WW.index === eW.Item ? this.sources.particleItemUrl(WW.word) : this.sources.particleTextureUrl(WW.word));
            return this.load(JW(RW, WW), "flipY")
          }
          default:
            throw new CW.e("fetch", `image kind ${WW.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(WW) {
        var RW;
        let MW = this.glbImages.get(WW.word);
        if (void 0 === MW) {
          const RW = this.glbTakenCount.get(WW.word),
            wW = JW(await this.sources.glbUrl(WW.word), WW);
          try {
            MW = FW(await this.fetchFile(wW))
          } catch (zR) {
            throw new CW.e("fetch", wW, {
              cause: zR
            })
          }
          this.glbTakenCount.get(WW.word) === RW && this.glbImages.set(WW.word, MW)
        }
        const wW = null === (RW = MW) || void 0 === RW ? void 0 : RW[WW.index];
        if (!wW) throw new CW.e("decode", `image ${WW.index} of file ${2147483647&WW.word}`, {
          cause: null
        });
        return wW
      }
    }

    function YW(WW) {
      let {
        kind: RW,
        index: MW,
        word: wW
      } = WW;
      return `${RW}:${MW}:${wW}`
    }

    function JW(WW, RW) {
      if (null === WW) throw new CW.e("fetch", `no URL for image ${YW(RW)}`, {
        cause: null
      });
      return WW
    }

    function PW(WW, RW, MW) {
      var wW, CW, zR;
      const AW = new Uint8Array(16),
        bR = new DataView(AW.buffer);
      return bR.setUint8(0, WW.kind), bR.setUint8(1, WW.index), bR.setUint8(2, RW), bR.setUint32(4, WW.word, !0), bR.setUint32(8, null !== (wW = null === MW || void 0 === MW ? void 0 : MW.id) && void 0 !== wW ? wW : 0, !0), bR.setUint16(12, Math.min(null !== (CW = null === MW || void 0 === MW ? void 0 : MW.width) && void 0 !== CW ? CW : 0, 65535), !0), bR.setUint16(14, Math.min(null !== (zR = null === MW || void 0 === MW ? void 0 : MW.height) && void 0 !== zR ? zR : 0, 65535), !0), AW
    }
    const IW = 1179937895,
      oW = 1313821514,
      lW = 5130562;

    function FW(WW) {
      var RW;
      const MW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      if (WW.byteLength < 20 || MW.getUint32(0, !0) !== IW || MW.getUint32(16, !0) !== oW) return [];
      let wW, CW = 20 + MW.getUint32(12, !0);
      try {
        wW = JSON.parse((new TextDecoder).decode(WW.subarray(20, CW)))
      } catch {
        return []
      }
      for (; CW + 8 <= WW.byteLength && MW.getUint32(CW + 4, !0) !== lW;) CW += 8 + MW.getUint32(CW, !0);
      const zR = null !== (RW = wW.images) && void 0 !== RW ? RW : [];
      if (0 === zR.length || CW + 8 > WW.byteLength) return zR.map((() => null));
      const AW = WW.subarray(CW + 8, Math.min(WW.byteLength, CW + 8 + MW.getUint32(CW, !0)));
      return zR.map((WW => {
        var RW, MW, CW;
        const zR = void 0 === WW.bufferView || null === (RW = wW.bufferViews) || void 0 === RW ? void 0 : RW[WW.bufferView];
        if (!zR || 0 !== (null !== (MW = zR.buffer) && void 0 !== MW ? MW : 0) || void 0 === zR.byteLength) return null;
        const bR = null !== (CW = zR.byteOffset) && void 0 !== CW ? CW : 0,
          yR = bR + zR.byteLength;
        return yR <= AW.byteLength ? AW.slice(bR, yR) : null
      }))
    }
  },
  34807: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      e: () => NW,
      i: () => AW
    });
    var wW = MW(1939),
      CW = MW(1945),
      zR = MW(1947);

    function AW(WW, RW) {
      return (!(0, zR.e)() || 0 === WW && 0 === RW) && (0, CW.w)(wW.j.Joystick, 0, WW, RW, 0)
    }
    const bR = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function yR(WW) {
      return {
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2,
        radius: Math.min(WW.width, WW.height) / 2
      }
    }
    const NW = new class {
      constructor(WW) {
        this.write = WW, this.elements = new Map
      }
      set(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        RW ? this.elements.set(WW, {
          element: RW,
          hidden: MW
        }) : this.elements.delete(WW), this.measureOne(WW)
      }
      measure() {
        for (const WW of this.elements.keys()) this.measureOne(WW)
      }
      hitZone(WW, RW) {
        let MW = null,
          wW = 1;
        for (const CW of this.elements.keys()) {
          const zR = this.shownRect(CW);
          if (!zR) continue;
          const AW = yR(zR),
            bR = Math.max(0, zR.width / 2 - AW.radius),
            NW = Math.max(0, zR.height / 2 - AW.radius),
            eW = Math.max(0, Math.abs(WW - AW.x) - bR),
            BW = Math.max(0, Math.abs(RW - AW.y) - NW),
            tR = Math.hypot(eW, BW) / AW.radius;
          tR < wW && (MW = {
            code: CW,
            element: this.elements.get(CW).element,
            ...AW
          }, wW = tR)
        }
        return MW
      }
      measureOne(WW) {
        const RW = this.shownRect(WW);
        if (!RW) return void this.write(wW.j.TouchZone, WW, 0, 0, 0);
        const MW = yR(RW);
        this.write(wW.j.TouchZone, WW, MW.x, MW.y, (0, CW.k)(MW.radius))
      }
      shownRect(WW) {
        const RW = this.elements.get(WW),
          MW = RW && !RW.hidden ? RW.element.getBoundingClientRect() : null;
        return !MW || MW.width <= 0 || MW.height <= 0 ? null : MW
      }
    }(CW.w)
  },
  38367: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      d: () => zR,
      e: () => AW,
      i: () => CW,
      k: () => BW,
      m: () => eW,
      o: () => NW,
      q: () => bR
    });
    var wW = MW(37230);
    const CW = new Uint8Array([12]),
      zR = 2e3,
      AW = 257;

    function bR(WW) {
      const RW = new Uint8Array(4);
      return new DataView(RW.buffer).setUint32(0, WW, !0), RW
    }
    class yR extends Error {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(WW), this.stage = RW, this.code = MW, this.serverText = wW, this.name = "JoinError"
      }
    }
    class NW extends Error {
      constructor() {
        super(wW.d), this.name = "TrafficCheckError"
      }
    }
    class eW extends Error {
      constructor(WW, RW, MW) {
        super(WW, {
          cause: MW
        }), this.networkLost = RW, this.name = "SeatRequestError"
      }
    }
    class BW extends Error {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(WW), this.code = RW, this.serverText = MW, this.name = "MatchmakeError"
      }
    }
  },
  38370: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      c: () => bR
    });
    var wW = MW(38375),
      CW = MW(34703),
      zR = MW(38367);
    const AW = wW.b.timeForPlayerToConnect - 1e4;
    async function bR(WW, RW, MW) {
      const wW = await WW.getTrafficCode().then((WW => null !== WW && void 0 !== WW ? WW : null), (WW => (console.error("[bloxd-wasm-client] could not get a traffic code", WW), null)));
      if (null === wW) throw new zR.o;
      const {
        gameNameWithVariation: AW,
        lobbyName: bR
      } = RW, {
        roomName: yR,
        joinOptions: NW
      } = (0, CW.c)(WW, AW, bR, wW, (WW => {
        var RW;
        return null !== (RW = null === MW || void 0 === MW ? void 0 : MW.isUsingCustomGameTexturePack(WW)) && void 0 !== RW && RW
      }));
      return NW.wasmClient = !0, {
        endpoint: RW.endpoint,
        roomName: yR,
        joinOptions: NW,
        session: {
          gameNameWithVariation: AW,
          lobbyName: bR,
          playerDbId: WW.whamm
        }
      }
    }
  },
  38432: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      g: () => bR,
      k: () => BW,
      l: () => NW
    });
    var wW = MW(3773),
      CW = MW(38437),
      zR = MW(38440);
    const AW = 395,
      bR = 2147483648,
      yR = new Uint8Array(0);
    class NW extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class eW extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class BW {
      constructor(WW, RW, MW) {
        var wW, zR, AW, bR;
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = WW, this.build = RW, this.onFailure = MW, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.kept = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (wW = yR.fetchFile) && void 0 !== wW ? wW : WW => (0, CW.i)(WW), this.onWritten = null !== (zR = yR.onWritten) && void 0 !== zR ? zR : null, this.onTaken = null !== (AW = yR.onTaken) && void 0 !== AW ? AW : null, this.onPackFileFailed = null !== (bR = yR.onPackFileFailed) && void 0 !== bR ? bR : null, this.startupLeft = new Set(WW.startup);
        for (const CW of WW.startup) this.request(CW)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(WW) {
        return this.drawn.get(WW)
      }
      request(WW) {
        const RW = this.pending.get(WW);
        if (!0 === (null === RW || void 0 === RW ? void 0 : RW.ask)) return;
        const MW = this.IM(WW, !0);
        MW.recheck = void 0 !== RW;
        const wW = this.drawn.get(WW);
        if (void 0 !== wW) return MW.mM = !0, MW.recheck = !0, void this.fetch(WW, MW, wW);
        this.fetchWanted(WW, MW)
      }
      async refresh() {
        const WW = ++this.refreshes,
          RW = new Set;
        for (const AW of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const WW of AW) 0 === (WW & CW.f) && RW.add(WW);
        const MW = [...RW];
        let wW;
        try {
          wW = await Promise.all(MW.map((WW => this.wanted(WW))))
        } catch {
          return null
        }
        if (WW !== this.refreshes) return null;
        const zR = {
          resent: 0,
          refetched: 0,
          delivered: MW.filter((WW => this.drawn.has(WW))).length
        };
        return MW.forEach(((WW, RW) => {
          const {
            url: MW,
            inPlaceOf: CW
          } = wW[RW], AW = this.pending.get(WW);
          if (void 0 !== AW) {
            if (AW.mM || void 0 === AW.url) return void(AW.recheck = !0);
            if (AW.url === MW) return;
            zR.refetched++;
            const RW = this.IM(WW, AW.ask);
            return RW.recheck = AW.recheck, void this.fetch(WW, RW, MW, CW)
          }
          const bR = this.written.get(WW);
          void 0 === bR ? this.drawn.get(WW) !== (null !== MW && void 0 !== MW ? MW : void 0) && (zR.resent++, this.fetch(WW, this.IM(WW, !1), MW, CW)) : bR.url !== (null !== MW && void 0 !== MW ? MW : "") && (bR.attempt.recheck = !0)
        })), zR
      }
      taken(WW, RW) {
        const MW = new Set,
          wW = new Set;
        for (const CW of Array.from(RW)) 0 === (CW & bR) ? MW.add(CW) : wW.add((CW & ~bR) >>> 0);
        for (const [CW, zR] of this.written) zR.seq > WW || (this.written.delete(CW), MW.has(zR.seq) ? this.refusedFile(CW, zR) : this.takenFile(CW, zR, !zR.empty && !wW.has(zR.seq)))
      }
      takenFile(WW, RW, MW) {
        const {
          attempt: wW
        } = RW;
        if (MW) {
          var CW;
          this.drawn.set(WW, RW.url), this.undrawn.delete(WW), void 0 !== wW.inPlaceOf ? this.refusedPack.set(WW, wW.inPlaceOf) : wW.mM || this.refusedPack.delete(WW), null === (CW = this.onTaken) || void 0 === CW || CW.call(this, WW, !0);
          const MW = this.pending.get(WW);
          if (!0 === (null === MW || void 0 === MW ? void 0 : MW.mM) && MW.url !== RW.url) {
            const MW = this.IM(WW, !0);
            MW.mM = !0, MW.recheck = !0, this.fetch(WW, MW, RW.url)
          }
        } else {
          var zR;
          this.drawn.has(WW) || this.undrawn.add(WW), null === (zR = this.onTaken) || void 0 === zR || zR.call(this, WW, !1)
        }
        wW.recheck && this.resendIfChanged(WW)
      }
      refusedFile(WW, RW) {
        var MW, wW;
        if (null === (MW = this.onTaken) || void 0 === MW || MW.call(this, WW, !1), this.refusedPack.set(WW, RW.url), this.pending.has(WW)) return void(null === (wW = this.onPackFileFailed) || void 0 === wW || wW.call(this, WW, tR(RW.url)));
        const CW = this.IM(WW, RW.attempt.ask);
        CW.recheck = RW.attempt.recheck, this.afterRefusal(WW, CW, RW.url)
      }
      async afterRefusal(WW, RW, MW) {
        var wW;
        let CW;
        try {
          CW = await this.wanted(WW)
        } catch (zR) {
          return void(this.pending.get(WW) === RW && this.giveUp(WW, RW, MW, zR))
        }
        this.pending.get(WW) === RW && (CW.inPlaceOf !== MW ? RW.ask || (null !== (wW = CW.url) && void 0 !== wW ? wW : void 0) !== this.drawn.get(WW) ? this.fetch(WW, RW, CW.url, CW.inPlaceOf) : this.pending.delete(WW) : this.fallBack(WW, RW, MW, tR(MW)))
      }
      IM(WW, RW) {
        const MW = {
          url: void 0,
          ask: RW,
          mM: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(WW, MW);
        for (let wW = this.ready.length - 1; wW >= 0; wW--) this.ready[wW].file === WW && this.ready.splice(wW, 1);
        return MW
      }
      async wanted(WW) {
        const RW = await this.files.url(WW);
        return null !== RW && this.refusedPack.get(WW) === RW ? {
          url: await this.files.shippedUrl(WW),
          inPlaceOf: RW
        } : {
          url: RW,
          inPlaceOf: void 0
        }
      }
      fetchWanted(WW, RW) {
        const MW = this.files.url(WW);
        MW instanceof Promise ? MW.then((MW => {
          this.fetchFound(WW, RW, MW)
        }), (MW => {
          this.pending.get(WW) === RW && this.giveUp(WW, RW, "", MW)
        })) : this.fetchFound(WW, RW, MW)
      }
      fetchFound(WW, RW, MW) {
        null !== MW && this.refusedPack.get(WW) === MW ? Promise.resolve(this.files.shippedUrl(WW)).then((wW => {
          this.fetch(WW, RW, wW, MW)
        }), (wW => {
          this.pending.get(WW) === RW && this.giveUp(WW, RW, MW, wW)
        })) : this.fetch(WW, RW, MW)
      }
      fetch(WW, RW, MW, wW) {
        this.pending.get(WW) === RW && (RW.url = MW, RW.inPlaceOf = wW, null !== MW ? this.load(WW, RW, MW) : this.buildFile(WW, RW, "", yR))
      }
      load(WW, RW, MW) {
        const wW = this.kept.get(WW);
        (null === wW || void 0 === wW ? void 0 : wW.url) !== MW ? this.fetchFile(MW).then((wW => {
          var CW, zR;
          this.pending.get(WW) === RW && (this.keptTotal += wW.byteLength - (null !== (CW = null === (zR = this.kept.get(WW)) || void 0 === zR ? void 0 : zR.glb.byteLength) && void 0 !== CW ? CW : 0), this.kept.set(WW, {
            url: MW,
            glb: wW
          }), this.buildFile(WW, RW, MW, wW))
        }), (wW => {
          this.pending.get(WW) === RW && this.fallBack(WW, RW, MW, wW)
        })) : this.buildFile(WW, RW, MW, wW.glb)
      }
      buildFile(WW, RW, MW, AW) {
        let bR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yR = AW.byteLength > 0 && (0, CW.j)(MW) ? (WW | CW.d) >>> 0 : WW;
        this.build(yR, AW).then((CW => {
          if (this.pending.get(WW) !== RW) return;
          if (wW.o + (0, wW.Md)(CW.byteLength) > wW.oc) return void this.ringRefused(WW, RW, MW, new NW(`${TW(MW)}'s record is ${CW.byteLength-zR.b} bytes, past the cmd ring's ${wW.oc}`), bR);
          const yR = {
            file: WW,
            url: MW,
            payload: CW,
            glb: AW,
            attempt: RW
          };
          bR ? this.ready.unshift(yR) : this.ready.push(yR)
        }))
      }
      async fallBack(WW, RW, MW, wW) {
        var CW;
        let zR = null,
          AW = wW;
        try {
          zR = await this.files.shippedUrl(WW)
        } catch (bR) {
          AW = bR
        }
        this.pending.get(WW) === RW && (null !== zR && zR !== MW ? (null === (CW = this.onPackFileFailed) || void 0 === CW || CW.call(this, WW, wW), RW.ask || this.drawn.get(WW) !== zR ? (RW.url = zR, RW.inPlaceOf = MW, this.load(WW, RW, zR)) : this.pending.delete(WW)) : this.giveUp(WW, RW, MW, AW))
      }
      ringRefused(WW, RW, MW, wW) {
        let zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, CW.j)(MW) ? this.fallBack(WW, RW, MW, wW): this.giveUp(WW, RW, MW, wW, zR)
      }
      giveUp(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: WW,
          url: TW(MW),
          error: wW,
          startup: this.startupLeft.has(WW)
        }), RW.ask || !this.drawn.has(WW) ? this.buildFile(WW, RW, MW, yR, CW) : this.pending.delete(WW)
      }
      async resendIfChanged(WW) {
        var RW;
        if (0 !== (WW & CW.f)) return;
        let MW;
        try {
          MW = await this.wanted(WW)
        } catch {
          return
        }(null !== (RW = MW.url) && void 0 !== RW ? RW : void 0) === this.drawn.get(WW) || this.pending.has(WW) || this.written.has(WW) || this.fetch(WW, this.IM(WW, !1), MW.url, MW.inPlaceOf)
      }
      drain(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === WW) return;
        let MW = 0,
          wW = 0;
        for (; wW < this.ready.length && MW < 262144;) {
          const eW = this.ready[wW];
          if (this.written.has(eW.file)) {
            wW++;
            continue
          }
          const BW = this.nextSeq;
          new DataView(eW.payload.buffer, eW.payload.byteOffset, eW.payload.byteLength).setUint32(zR.f, BW, !0);
          const tR = eW.attempt.mM && eW.glb.byteLength > 0 && this.drawn.get(eW.file) === eW.url;
          if (WW(AW, tR ? 1 : 0, eW.payload)) {
            if (this.nextSeq = BW >= bR - 1 ? 1 : BW + 1, this.ready.splice(wW, 1), MW += eW.payload.byteLength, this.pending.delete(eW.file), this.startupLeft.delete(eW.file), this.written.set(eW.file, {
                seq: BW,
                url: eW.url,
                empty: 0 === eW.glb.byteLength,
                attempt: eW.attempt
              }), eW.glb.byteLength > 0) try {
              var CW;
              null === (CW = this.onWritten) || void 0 === CW || CW.call(this, eW.file, eW.glb)
            } catch (yR) {
              console.warn("ModelFeed: reading the file's images failed", yR)
            }
          } else {
            if (null === RW || 0 === eW.glb.byteLength || RW(eW.payload.byteLength)) return;
            this.ready.splice(wW, 1);
            const WW = new NW(`${TW(eW.url)}'s record is ${eW.payload.byteLength-zR.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(eW.file, eW.attempt, eW.url, WW, !0)
          }
        }
      }
    }

    function tR(WW) {
      return new eW(`presentation refused ${TW(WW)}`)
    }

    function TW(WW) {
      return WW.startsWith("data:") ? `${WW.slice(0,Math.min(Math.max(WW.indexOf(","),5),64))},...` : WW
    }
  },
  38437: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      f: () => zR,
      i: () => eW,
      j: () => bR,
      n: () => NW,
      q: () => yR
    });
    var wW = MW(2801),
      CW = MW(2337);
    const zR = 2147483648,
      AW = 1073741824;

    function bR(WW) {
      return WW.startsWith("data:")
    }

    function yR(WW) {
      let {
        onTableFailed: RW,
        packUrl: MW
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wW = NW();
      wW.catch((WW => {
        null === RW || void 0 === RW || RW(WW)
      }));
      const CW = async RW => (await wW).fileUrl((RW & ~zR) >>> 0, WW);
      return {
        startup: [],
        url: async WW => {
          if (MW && 0 === (WW & zR)) {
            const RW = await wW,
              CW = RW.filePackName(WW),
              zR = null === CW || "lifeform" === RW.fileSource(WW) ? null : MW(CW);
            if (null !== zR) return zR
          }
          return CW(WW)
        },
        shippedUrl: CW
      }
    }

    function NW() {
      return MW.e(35).then((() => MW(40813)))
    }
    async function eW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return WW.startsWith("data:") ? (0, CW.b)(WW.slice(WW.indexOf(",") + 1), RW) : (0, wW.q)(WW, {
        spare: RW
      })
    }
  },
  38440: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      f: () => NW,
      i: () => tR,
      m: () => gR,
      q: () => BW,
      t: () => TW
    });
    const wW = 826427981,
      CW = 1,
      zR = 2,
      AW = 44,
      bR = 46,
      yR = 8,
      NW = 4;

    function eW(WW, RW, MW) {
      const CW = (new TextEncoder).encode(MW),
        zR = yR + 4 * (RW.length + 2),
        AW = new Uint8Array(zR + (CW.byteLength + 3 & -4)),
        bR = new DataView(AW.buffer);
      return bR.setUint32(0, WW, !0), bR.setUint32(yR, wW, !0), RW.forEach(((WW, RW) => {
        bR.setUint32(yR + 4 * (RW + 1), WW, !0)
      })), bR.setUint32(zR - 4, CW.byteLength, !0), AW.set(CW, zR), AW
    }

    function BW(WW, RW) {
      return eW(WW, [zR], RW)
    }

    function tR(WW, RW) {
      return eW(WW, [CW, bR], RW)
    }

    function TW(WW, RW) {
      return eW(WW, [CW, AW], RW)
    }

    function gR(WW) {
      const RW = yR;
      if (WW.byteLength < RW + 12) return !1;
      const MW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
      return MW.getUint32(RW, !0) === wW && MW.getUint32(RW + 4, !0) === CW && MW.getUint32(RW + 8, !0) === AW
    }
  },
  38503: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW,
      h: () => zR,
      i: () => BW,
      j: () => AW
    });
    var wW = MW(38493),
      CW = MW(38437);
    const zR = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(WW) {
        this.change((() => {
          this.page = WW
        }))
      }
      setSessionFiles(WW) {
        const RW = void 0 !== this.session && void 0 === WW;
        if (this.change((() => {
            this.session = WW
          })), RW)
          for (const MW of [...this.pageListeners]) MW()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(WW) {
        return this.pageListeners.add(WW), () => {
          this.pageListeners.delete(WW)
        }
      }
      setFollower(WW) {
        this.follower = WW, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const WW of [...this.wantedListeners]) WW();
        this.startFollower()
      }
      onWanted(WW) {
        return this.wantedListeners.add(WW), () => {
          this.wantedListeners.delete(WW)
        }
      }
      onChange(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      startFollower() {
        const WW = this.follower;
        this.isWanted && null !== WW && (this.follower = null, WW((() => {
          this.follower = WW
        })))
      }
      change(WW) {
        const RW = this.current;
        if (WW(), this.current !== RW)
          for (const MW of this.listeners) MW()
      }
    };

    function AW(WW, RW) {
      return {
        ...WW,
        armourAtlasUrl: () => {
          var MW, wW;
          return null !== (MW = null === (wW = RW()) || void 0 === wW ? void 0 : wW.armourAtlasUrl()) && void 0 !== MW ? MW : WW.armourAtlasUrl()
        },
        lifeformAtlasUrl: MW => yR(RW(), (WW => WW.LIFEFORM_ATLAS_PATHS[MW]), (() => WW.lifeformAtlasUrl(MW))),
        groupAtlasUrl: MW => yR(RW(), (WW => WW.GROUP_ATLAS_PATHS[MW]), (() => WW.groupAtlasUrl(MW))),
        particleItemUrl: wW => NW(RW(), (async () => {
          const WW = await MW.e(32).then((() => MW(48986))).catch((() => null));
          return (null === WW || void 0 === WW ? void 0 : WW.particleItemSprite(wW)) || null
        }), (() => WW.particleItemUrl(wW))),
        blockImageUrl: MW => NW(RW(), (async () => {
          var WW, RW;
          return null !== (WW = null === (RW = await bR()) || void 0 === RW ? void 0 : RW.blockImageName(MW)) && void 0 !== WW ? WW : null
        }), (() => WW.blockImageUrl(MW)))
      }
    }

    function bR() {
      return (0, CW.n)().catch((() => null))
    }

    function yR(WW, RW, MW) {
      return NW(WW, (async () => {
        var WW;
        const MW = await bR(),
          wW = null === MW ? null : RW(MW),
          CW = null !== (WW = null === wW || void 0 === wW ? void 0 : wW.slice(wW.lastIndexOf("/") + 1)) && void 0 !== WW ? WW : null;
        return "Player_Atlas" === CW ? null : CW
      }), MW)
    }
    async function NW(WW, RW, MW) {
      if (null !== WW) {
        const MW = await RW(),
          wW = null === MW ? null : WW.textureUrl(MW);
        if (null !== wW) return wW
      }
      return MW()
    }
    const eW = 0;

    function BW(WW) {
      const RW = [wW.h.ArmourAtlas, wW.h.LifeformAtlas, wW.h.GroupAtlas, wW.h.BlockImage, wW.h.Particle];
      WW.reload(RW, (WW => {
        switch (WW.kind) {
          case wW.h.Particle:
            return WW.index === wW.i.Item;
          case wW.h.LifeformAtlas:
            return WW.word !== eW;
          default:
            return !0
        }
      }))
    }
  },
  38393: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW,
      c: () => AW,
      g: () => zR,
      i: () => CW
    });
    const wW = 1e3;

    function CW() {
      bR((() => {
        window.location.reload()
      }))
    }

    function zR(WW) {
      bR((() => {
        window.location.replace(WW(window.location.href))
      }))
    }

    function AW(WW) {
      Promise.resolve().then((() => MW(122))).then((RW => {
        let {
          currentUrl: MW
        } = RW;
        zR((() => MW.mergeSearchParamsInto(WW)))
      }), (() => {
        zR((() => WW))
      }))
    }

    function bR(WW) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => MW(1495))).then((RW => {
        let {
          prepareForUnloadWithoutConfirmation: MW
        } = RW;
        try {
          MW()
        } catch (wW) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", wW), window.onbeforeunload = null
        }
        WW()
      }), (() => {
        window.onbeforeunload = null, WW()
      })) : WW()
    }
  },
  38482: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => TW,
      c: () => tR
    });
    var wW = MW(37075),
      CW = MW(5487),
      zR = MW(37069),
      AW = MW(38358),
      bR = MW(38367);
    const yR = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      NW = 3,
      eW = [500, 1500];

    function BW(WW) {
      const RW = new URL(WW);
      return {
        secure: "https:" === RW.protocol || "wss:" === RW.protocol,
        host: RW.host,
        pathname: RW.pathname.replace(/\/+$/, ""),
        search: RW.searchParams.toString()
      }
    }

    function tR(WW, RW) {
      var MW;
      const wW = null !== (MW = RW.protocol) && void 0 !== MW ? MW : "ws";
      if ("ws" !== wW) throw new Error(`seat reservation asks for the ${wW} transport`);
      const {
        secure: CW,
        host: zR,
        pathname: AW,
        search: bR
      } = BW(WW), yR = new URLSearchParams(bR);
      yR.append("sessionId", RW.sessionId), RW.reconnectionToken && yR.append("reconnectionToken", RW.reconnectionToken);
      return `${CW?"wss":"ws"}://${RW.room.publicAddress||`${zR}${AW}`}/${RW.room.processId}/${RW.room.roomId}?${yR.toString()}`
    }

    function TW(WW, RW, MW) {
      var tR;
      let TW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const JW = null !== (tR = TW.sleep) && void 0 !== tR ? tR : wW.e;
      return (0, zR.d)((() => async function(WW, RW, MW, wW) {
        var zR, tR;
        const {
          signal: TW,
          sleep: JW
        } = wW, PW = null !== (zR = wW.fetch) && void 0 !== zR ? zR : fetch, IW = function(WW, RW, MW) {
          const {
            secure: wW,
            host: CW,
            pathname: zR,
            search: AW
          } = BW(WW);
          return `${wW?"https":"http"}://${CW}${zR}/matchmake/${RW}/${encodeURIComponent(MW)}${AW?`?${AW}`:""}`
        }(WW, "joinOrCreate", RW), oW = JSON.stringify(MW);
        let lW = null;
        for (let BW = 0; BW < NW; BW++) {
          var FW;
          if (BW > 0) await JW(null !== (FW = eW[BW - 1]) && void 0 !== FW ? FW : 1500, TW);
          let WW;
          (0, CW.j)(TW);
          try {
            WW = await PW(IW, {
              method: "POST",
              headers: {
                ...yR,
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: oW,
              credentials: "include",
              signal: TW
            })
          } catch (QW) {
            (0, CW.j)(TW), lW = gR(QW);
            continue
          }
          const {
            answer: RW,
            lost: MW
          } = await iR(WW), zR = null !== RW && "string" === typeof RW.error ? RW.error : null;
          var fW;
          if (null !== zR) null === (fW = wW.onRefusal) || void 0 === fW || fW.call(wW);
          if ((0, CW.j)(TW), null === MW) {
            if (null !== zR) throw new bR.k(zR, "number" === typeof(null === RW || void 0 === RW ? void 0 : RW.code) ? RW.code : 0, (0, AW.w)(zR).text);
            if (WW.ok && null !== RW && YW(RW)) return RW;
            lW = new bR.m(`seat request answered HTTP ${WW.status}${null===RW?" without JSON":" without a seat"}`, !1)
          } else lW = gR(MW.error)
        }
        throw null !== (tR = lW) && void 0 !== tR ? tR : new bR.m("seat request made no attempt", !1)
      }(WW, RW, MW, {
        ...TW,
        sleep: JW
      })), TW.signal, JW)
    }

    function gR(WW) {
      return new bR.m(WW instanceof Error ? WW.message : String(WW), !0, WW)
    }
    async function iR(WW) {
      try {
        const RW = await WW.json();
        return {
          answer: "object" === typeof RW && null !== RW ? RW : null,
          lost: null
        }
      } catch (RW) {
        return {
          answer: null,
          lost: RW instanceof SyntaxError ? null : {
            error: RW
          }
        }
      }
    }

    function YW(WW) {
      const RW = WW.room;
      return "string" === typeof WW.sessionId && "object" === typeof RW && null !== RW && "string" === typeof RW.roomId && "string" === typeof RW.processId && "string" === typeof RW.name
    }
  },
  38383: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => YW,
      h: () => iR,
      k: () => oW
    });
    var wW = MW(5644),
      CW = MW(33),
      zR = MW(3412),
      AW = MW(3775),
      bR = MW(5640),
      yR = MW(38385);
    const NW = 0,
      eW = 1,
      BW = 2,
      tR = "shaderPack:failedToCompile",
      TW = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      gR = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "windows_firefox"]);

    function iR(WW, RW) {
      var MW;
      const wW = null !== (MW = null === WW || void 0 === WW ? void 0 : WW.reason) && void 0 !== MW ? MW : "none";
      return TW.has(wW) ? {
        messageKey: RW ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === wW && "override" === (null === WW || void 0 === WW ? void 0 : WW.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: gR.has(wW) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class YW extends Error {
      constructor(WW) {
        super(`the shader pack can't run in this game: ${WW}`), this.messageKey = WW, this.name = "ShaderPackJoinError"
      }
    }
    const JW = "strict";
    class PW {
      constructor(WW) {
        this.deps = WW, this.pagePack = void 0, this.loaded = null, this.ew = JW, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = WW.load().catch((RW => (WW.warn("the shader pack could not load: the game draws without it", RW), {
          status: "none"
        }))).then((WW => (this.loaded = WW, "active" === WW.status && null !== WW.harnessPolicy && (this.ew = WW.harnessPolicy, this.handOver()), WW)))
      }
      async join(WW) {
        this.Cw();
        const RW = this.game,
          [MW, CW] = await Promise.all([this.pagePack, this.policyOf(WW)]);
        if (RW !== this.game || "none" === MW.status) return null;
        const zR = "active" === MW.status ? MW.pack.variants : MW.variants,
          AW = (0, wW.k)(zR, CW);
        if (AW && "active" === MW.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (AW) {
          const WW = this.cantRun(MW, CW);
          if (null !== WW) return WW
        } else if ("blocked" === MW.status || null === this.deps.core) return null;
        return this.ew = CW, this.handOver(), AW && this.refused ? tR : (this.joined = !0, this.offInThisGame = !AW, null)
      }
      async replay(WW) {
        const RW = await this.join(WW);
        null === RW ? this.playable() : this.deps.failInGame(RW)
      }
      cantRun(WW, RW) {
        const {
          core: MW,
          noWebGpu: wW
        } = this.deps;
        if ("blocked" === WW.status) {
          return "shaderPack:failedUnchecked" === WW.messageKey && null === MW && wW.noAdapter ? wW.messageKey : WW.messageKey
        }
        return this.refused || this.failedPolicies.has(RW) ? tR : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(tR) : (null !== this.couldntRun ? this.notify(zR.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.ew) && this.notifyModelFallback()))
      }
      Cw() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(WW) {
        for (const {
            code: RW,
            detail: MW
          }
          of WW)
          if (RW === AW.i.RenderShaderPackNotRun) switch (255 & MW) {
            case NW:
              this.refused = !0, this.failed();
              break;
            case eW:
              this.failedPolicies.add(this.ew), this.failed();
              break;
            case BW:
              this.failedModelPolicies.add(this.ew), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(tR) : this.failedWhileJoining = !0)
      }
      fail(WW) {
        this.Cw(), this.deps.failInGame(WW)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(WW, RW) {
        const MW = this.game;
        this.deps.notify(WW, (() => MW === this.game && this.joined), RW)
      }
      handOver() {
        var WW;
        const {
          core: RW
        } = this.deps;
        null !== RW && "active" === (null === (WW = this.loaded) || void 0 === WW ? void 0 : WW.status) && (function(WW, RW) {
          const MW = (0, bR.c)(RW.variants);
          return WW.setShaderPack(MW.variantFlags, MW.hooks, MW.moduleCodes, (0, yR.x)(RW.layers), yR.i[RW.ew], RW.keepCircleShadows)
        }(RW, {
          ...this.loaded.pack,
          ew: this.ew
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      policyOf(WW) {
        return this.deps.policyOf(WW).catch((WW => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", WW), JW)))
      }
    }
    const IW = "wasmShaderPackNotice";

    function oW(WW, RW, MW) {
      return CW.k.subscribe(IW, (WW => {
        let {
          translationKey: RW,
          stillCurrent: MW,
          reasonKey: wW
        } = WW;
        MW() && CW.k.Sz("chat", (0, zR.l)(RW, wW))
      })), new PW({
        load: lW,
        policyOf: FW,
        core: WW,
        noWebGpu: RW,
        notify: (WW, RW, MW) => {
          const wW = {
            translationKey: WW,
            stillCurrent: RW,
            reasonKey: MW
          };
          CW.k.Sz(IW, wW, !0)
        },
        failInGame: WW => {
          CW.k.Sz(zR.h, WW)
        },
        warn: MW
      })
    }
    async function lW() {
      const [{
        shaderPackPage: WW,
        harnessShaderPackMode: RW
      }, {
        shaderPackTextures: wW
      }] = await Promise.all([Promise.resolve().then((() => MW(37186))), Promise.resolve().then((() => MW(5638)))]), CW = await WW.load();
      return "active" !== CW.status ? CW : {
        status: "active",
        pack: {
          variants: CW.pack.variants,
          layers: wW().layers,
          keepCircleShadows: CW.pack.keepCircleShadows
        },
        harnessPolicy: RW()
      }
    }
    async function FW(WW) {
      var RW;
      const [{
        harnessShaderPackMode: wW
      }, {
        getShaderPackPolicy: CW
      }] = await Promise.all([Promise.resolve().then((() => MW(37186))), MW.e(74).then((() => MW(40713)))]);
      return null !== (RW = wW()) && void 0 !== RW ? RW : CW(WW)
    }
  },
  38443: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      f: () => YW,
      i: () => yR,
      m: () => NW,
      q: () => eW,
      t: () => tR
    });
    var wW = MW(38450),
      CW = MW(38455);
    const zR = "atlas:",
      AW = 3e4;
    class bR extends Error {
      constructor(WW, RW) {
        super(`fetching ${WW} answered HTTP ${RW}`), this.url = WW, this.status = RW, this.name = "TerrainTextureFetchError"
      }
    }

    function yR(WW) {
      if (!WW.startsWith(zR)) return null;
      const RW = Number(WW.slice(zR.length));
      return Number.isInteger(RW) && RW >= 0 ? RW : null
    }
    async function NW() {
      const WW = await MW.e(182).then((() => MW(32670)));
      return {
        atlasSheets: WW.blockAtlasUrls,
        texture: RW => {
          var MW, wW, zR;
          return null !== (MW = null !== (wW = null !== (zR = WW.animatedBlockTextures[RW]) && void 0 !== zR ? zR : WW.rotatedBlockTextures[RW]) && void 0 !== wW ? wW : CW.d[RW]) && void 0 !== MW ? MW : null
        }
      }
    }
    async function eW(WW) {
      const RW = new AbortController,
        MW = setTimeout((() => {
          RW.abort(new DOMException(`${WW} took over ${AW} ms`, "TimeoutError"))
        }), AW);
      let wW;
      try {
        const MW = await fetch(WW, {
          signal: RW.signal
        });
        if (!MW.ok) throw new bR(WW, MW.status);
        wW = await MW.blob()
      } finally {
        clearTimeout(MW)
      }
      const CW = await createImageBitmap(wW, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return tR(CW)
      } finally {
        CW.close()
      }
    }
    const BW = 8192;

    function tR(WW) {
      const {
        width: RW,
        height: MW
      } = WW, CW = Math.max(1, Math.min(MW, BW)), zR = (0, wW.h)(RW, CW, {
        willReadFrequently: !0
      });
      if (!zR) throw new Error("no 2D context to read the texture back");
      zR.globalCompositeOperation = "copy";
      const AW = new Uint8Array(RW * MW * 4);
      for (let wW = 0; wW < MW; wW += CW) {
        const bR = Math.min(CW, MW - wW);
        zR.drawImage(WW, 0, wW, RW, bR, 0, 0, RW, bR), AW.set(zR.getImageData(0, 0, RW, bR).data, wW * RW * 4)
      }
      return {
        width: RW,
        height: MW,
        pixels: AW
      }
    }
    async function TW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eW;
      const wW = [],
        CW = await Promise.all(WW.map((async WW => {
          var CW, AW;
          const bR = null !== (CW = null === (AW = RW.decoded) || void 0 === AW ? void 0 : AW.call(RW, WW)) && void 0 !== CW ? CW : null,
            NW = null === bR ? function(WW, RW) {
              if (WW.startsWith(zR)) {
                var MW;
                const wW = yR(WW);
                return null === wW ? null : null !== (MW = RW.atlasSheets[wW]) && void 0 !== MW ? MW : null
              }
              return RW.texture(WW)
            }(WW, RW) : null,
            eW = null !== bR && void 0 !== bR ? bR : null === NW ? null : MW(NW);
          if (null === eW) return wW.push({
            name: WW,
            url: NW,
            error: new Error(`no URL for terrain texture ${WW}`)
          }), null;
          try {
            const RW = await eW;
            if (RW.pixels.byteLength !== RW.width * RW.height * 4) throw new Error(`decoded ${RW.pixels.byteLength} bytes for ${RW.width}x${RW.height} texels`);
            return {
              name: WW,
              texture: RW
            }
          } catch (BW) {
            return wW.push({
              name: WW,
              url: NW,
              error: BW
            }), null
          }
        }))),
        AW = CW.filter((WW => null !== WW)),
        bR = new Uint8Array(AW.reduce(((WW, RW) => {
          let {
            texture: MW
          } = RW;
          return WW + MW.pixels.byteLength
        }), 0)),
        NW = new Uint32Array(2 * AW.length);
      let BW = 0;
      AW.forEach(((WW, RW) => {
        let {
          texture: MW
        } = WW;
        bR.set(MW.pixels, BW), BW += MW.pixels.byteLength, NW[2 * RW] = MW.width, NW[2 * RW + 1] = MW.height
      }));
      return {
        handOver: {
          names: AW.map((WW => {
            let {
              name: RW
            } = WW;
            return RW
          })),
          bytes: bR,
          sizes: NW
        },
        failures: wW
      }
    }
    const gR = [2e3, 1e4, 3e4, 6e4, 12e4];

    function iR() {}
    class YW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gR,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = WW, this.retryMs = RW, this.keepBelow = MW, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NW,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const wW = ++this.started,
          CW = {
            decode: MW.decode,
            wholeAtlas: MW.wholeAtlas
          };
        return this.loadAndHandOver(RW, CW, WW, (() => {
          var WW;
          return wW < this.landed || !1 === (null === (WW = MW.wanted) || void 0 === WW ? void 0 : WW.call(MW))
        }), {
          onTaken: (WW, MW) => {
            this.landed = wW;
            const zR = null !== WW && WW.bytes.byteLength < this.keepBelow ? WW : null;
            this.current = {
              mine: wW,
              sources: RW,
              load: CW,
              kept: zR,
              failed: MW
            }
          }
        })
      }
      restore(WW) {
        var RW;
        const MW = this.current;
        if (null === MW) return Promise.resolve(null);
        if ((null === (RW = this.restoring) || void 0 === RW ? void 0 : RW.mine) === MW.mine) return this.restoring.done;
        const wW = {
          mine: MW.mine,
          done: this.restoreLanded(MW, WW).finally((() => {
            this.restoring === wW && (this.restoring = null)
          }))
        };
        return this.restoring = wW, wW.done
      }
      async restoreLanded(WW, RW) {
        const MW = () => this.landed !== WW.mine,
          {
            kept: wW
          } = WW;
        if (null !== wW) return this.stopped() ? null : this.core.setTerrainTextures(wW.names, wW.bytes, wW.sizes);
        let CW = RW;
        for (let zR = 0;; zR++) {
          const RW = this.retryMs.at(zR),
            wW = {
              allOrNothingExcept: void 0 === RW ? void 0 : WW.failed
            },
            AW = await this.loadAndHandOver(WW.sources, WW.load, CW, MW, wW);
          if (!1 !== AW || void 0 === RW || this.stopped()) return AW;
          if (CW = iR, await new Promise((WW => {
              setTimeout(WW, RW)
            })), MW()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const zR = this.core.terrainTextureNames();
        var AW;
        if (0 === zR.length) return null === (AW = CW.onTaken) || void 0 === AW || AW.call(CW, null, new Set), !0;
        let bR;
        try {
          bR = await TW(zR, await WW(), RW.decode)
        } catch (gR) {
          return wW() ? null : (MW({
            name: null,
            url: null,
            error: gR
          }), !1)
        }
        if (wW() || this.stopped()) return null;
        for (const yR of bR.failures) MW(yR);
        const NW = CW.allOrNothingExcept;
        if (void 0 !== NW && bR.failures.some((WW => {
            let {
              name: RW
            } = WW;
            return null === RW || !NW.has(RW)
          })) || !0 === RW.wholeAtlas && bR.failures.some((WW => {
            let {
              name: RW
            } = WW;
            return null === RW || null !== yR(RW)
          }))) return !1;
        const {
          handOver: eW
        } = bR, BW = this.core.setTerrainTextures(eW.names, eW.bytes, eW.sizes);
        if (BW) {
          var tR;
          const WW = new Set(bR.failures.flatMap((WW => {
            let {
              name: RW
            } = WW;
            return null === RW ? [] : [RW]
          })));
          null === (tR = CW.onTaken) || void 0 === tR || tR.call(CW, eW, WW)
        }
        return BW
      }
    }
  },
  38463: (WW, RW, MW) => {
    function wW(WW) {
      return "fetch" === WW || "timeout" === WW || "integrity" === WW ? "download" : "browser"
    }
    MW.d(RW, {
      d: () => CW,
      g: () => AW,
      j: () => yR,
      l: () => bR,
      n: () => wW,
      q: () => zR
    });
    const CW = "https://discord.gg/playbloxd";

    function zR(WW) {
      return "download" === WW ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function AW(WW, RW) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: RW ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: WW.code
        },
        discordLink: RW,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function bR() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function yR(WW, RW, MW) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: MW ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: WW.reason
        },
        discordLink: null === WW.name,
        confirm: RW ? "general:reconnect" : WW.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  38350: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      followPageUiPack: () => kN,
      packForGame: () => Cy,
      playWasmGame: () => vN,
      prefetchWasmPreviews: () => zy,
      setGamePackConfirm: () => wy,
      startWasmPlay: () => hy,
      startWasmPreviews: () => Cb
    });
    var wW = MW(173),
      CW = MW(1072),
      zR = MW(156),
      AW = MW(37087),
      bR = MW(1544),
      yR = MW(33),
      NW = MW(3662),
      eW = MW(1135),
      BW = MW(1148),
      tR = MW(37209),
      TW = MW(37226),
      gR = MW(37135),
      iR = MW(34706),
      YW = MW(38134),
      JW = MW(3756),
      PW = MW(38136),
      IW = MW(38215),
      oW = MW(38195);
    const lW = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0
      }
    };

    function FW(WW) {
      const RW = {
        ...IW.c[WW]
      };
      for (const MW of Object.keys(lW[WW])) delete RW[MW];
      return RW
    }

    function fW() {
      var WW, RW;
      return null === (WW = null === (RW = (0, PW.i)()) || void 0 === RW ? void 0 : RW.localPlayerAlive()) || void 0 === WW || WW
    }

    function QW() {
      var WW, RW;
      return null !== (WW = null === (RW = (0, PW.i)()) || void 0 === RW ? void 0 : RW.localDeaths()) && void 0 !== WW ? WW : null
    }
    const rR = {
        current: fW,
        watch: WW => {
          let RW = fW(),
            MW = QW();
          return (0, JW.t)((() => {
            const wW = fW(),
              CW = QW(),
              zR = null !== CW && null !== MW && CW !== MW;
            MW = CW, zR ? (RW || WW(!0), WW(!1), wW && WW(!0), RW = wW) : wW !== RW && (RW = wW, WW(wW))
          }))
        }
      },
      cR = {
        states: {
          ...FW("states"),
          localPlayerAlive: rR
        },
        events: {
          ...FW("events"),
          localPlayerAliveSet: {
            watch: rR.watch
          }
        },
        commands: {
          ...FW("commands"),
          respawn: () => {
            var WW;
            null === (WW = (0, PW.i)()) || void 0 === WW || WW.respawn()
          },
          playEmote: WW => {
            var RW;
            null === (RW = (0, PW.i)()) || void 0 === RW || RW.send(oW.c.PlayEmote, (0, oW.w)({
              Nk: WW
            }))
          },
          applyTemporaryThirdPerson: WW => {
            var RW;
            let {
              durationMs: MW
            } = WW;
            null === (RW = (0, PW.i)()) || void 0 === RW || RW.thirdPersonFor(MW)
          },
          bindCustomButtonKeys: WW => {
            var RW;
            null === (RW = (0, PW.i)()) || void 0 === RW || RW.bindCustomButtonKeys(WW)
          },
          pressCustomButton: WW => {
            var RW;
            let {
              id: MW,
              down: wW
            } = WW;
            null === (RW = (0, PW.i)()) || void 0 === RW || RW.pressCustomButton(MW, wW)
          },
          setLookSensitivity: () => {},
          wakeUp: WW => {
            const RW = (0, oW.D)({
                mD: WW
              }),
              MW = () => {
                const WW = (0, PW.i)();
                return !(null !== WW && void 0 !== WW && WW.isSessionLive) || WW.send(oW.c.StopSleeping, RW)
              };
            if (!MW()) {
              const WW = (0, JW.t)((() => {
                MW() && WW()
              }))
            }
          },
          setCameraZoom: WW => {
            var RW;
            null === (RW = (0, PW.i)()) || void 0 === RW || RW.setCameraZoom(WW)
          }
        },
        queries: FW("queries"),
        lookups: {
          ...FW("lookups"),
          cameraZoom: () => {
            var WW, RW;
            return null !== (WW = null === (RW = (0, PW.i)()) || void 0 === RW ? void 0 : RW.cameraZoom()) && void 0 !== WW ? WW : 0
          }
        }
      };
    var XW = MW(38358),
      jR = MW(38367),
      kR = MW(38370),
      aR = MW(1087),
      sW = MW(122),
      dW = MW(3563),
      pW = MW(2819),
      hW = MW(975);
    const UW = {
      ZF: () => (0, aR.d)(),
      inbuiltOverwritten: () => dW.d,
      reflectApplyHit: () => hW.b,
      definerHit: () => sW.currentUrl.c,
      emitReplaced: () => (0, yR.e)(),
      confirmMesh: () => (0, pW.e)()
    };
    var EW = MW(38383),
      VW = MW(38393);
    var mR = MW(27),
      xR = MW(1548),
      vR = MW(1578),
      KW = MW(1464),
      uW = MW(1621),
      OW = MW(1027),
      nW = MW(1080);

    function GW() {
      return nW.d.get().getCurrentLanguageCode()
    }

    function LW(WW) {
      const RW = () => {
        WW({
          translate: (WW, RW) => (0, OW.u)(GW(), WW, RW),
          keyBindingText: WW => {
            const RW = (0, vR.p)(WW, mR.b.get("isTouchScreen"));
            return null !== RW ? (0, OW.w)(GW(), RW.translationKey, RW.params) : (0, vR.k)((0, vR.o)(WW))
          },
          isFriend: uW.f,
          hiddenNames: xR.d.shown
        })
      };
      let MW = !1;
      const wW = () => {
          const WW = GW();
          (0, OW.k)(WW).then((() => {
            MW || WW !== GW() || RW()
          }))
        },
        CW = () => KW.b.getSocialState().friends.map((WW => WW.name.toLowerCase())).sort().join(" ");
      let zR = CW();
      RW(), wW();
      const AW = [(0, nW.e)((() => {
        RW(), wW()
      })), (0, yR.m)("customBindingsChanged", RW), (0, yR.m)("appManagerUpdated|isTouchScreen", RW), (0, uW.d)((() => {
        const WW = CW();
        WW !== zR && (zR = WW, RW())
      })), xR.d.subscribe(RW)];
      return () => {
        MW = !0;
        for (const WW of AW) WW()
      }
    }
    var HW = MW(265),
      DW = MW(860),
      qR = MW(232),
      ZW = MW(2793),
      SW = MW(34631),
      WR = MW(2801),
      RR = MW(36768),
      MR = MW(5631),
      wR = MW(38277),
      CR = MW(253),
      zM = MW(1558),
      AR = MW(2821),
      bM = MW(2405);
    let yM = null;
    var NR = MW(1033),
      eR = MW(5487),
      BR = MW(37137),
      tM = MW(2513),
      TR = MW(71),
      gM = MW(230),
      iM = MW(38223),
      YR = MW(3765);
    class JR {
      constructor(WW, RW) {
        this.showView = WW, this.holdForAd = RW
      }
      pointerUnlockRequestsChanged() {
        (0, iM.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, iM.q)())
        }]
      }
      setGameViewShown(WW) {
        this.showView(WW)
      }
      videoAdHold(WW, RW) {
        this.holdForAd(WW, RW)
      }
    }
    class PR {
      Cw(WW) {
        ! function(WW) {
          if (null !== (0, BW.b)().websocketUrl) try {
            (0, JW.I)().leaveGame(WW)
          } finally {
            (0, BW.n)({
              websocketUrl: null
            })
          }
        }(WW)
      }
      isReplay() {
        return !1
      }
    }
    class IR {
      watchFrameStarts(WW) {
        return (0, JW.r)(WW)
      }
      watchFrames(WW) {
        return (0, JW.p)(WW)
      }
      watchTicks(WW) {
        return (0, JW.t)(WW)
      }
    }
    var oR = MW(1126),
      lR = MW(38399);

    function FR(WW) {
      return WW >= 0 ? Math.min(1, WW) : 0
    }

    function fR(WW, RW) {
      const {
        fade: MW
      } = WW;
      return null === MW || RW - MW.at >= MW.ms ? WW.volume : MW.from + (WW.volume - MW.from) * Math.max(0, (RW - MW.at) / MW.ms)
    }

    function QR(WW) {
      const RW = Object.entries(WW),
        MW = new Uint32Array(RW.length);
      let wW = 0;
      for (const [AW, [, bR]] of RW.entries()) MW[AW] = bR.length, wW += bR.length;
      const CW = new Float64Array(3 * wW);
      let zR = 0;
      for (const [, AW] of RW)
        for (const WW of AW) CW.set(WW, zR), zR += 3;
      return {
        blocks: RW.map((WW => {
          let [RW] = WW;
          return RW
        })).join("\0"),
        counts: MW,
        values: CW
      }
    }
    class rM {
      constructor(WW, RW) {
        this.core = WW, this.warn = RW, this.latest = 0
      }
      async feed() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cM;
        const RW = ++this.latest;
        let MW;
        try {
          MW = await WW()
        } catch (wW) {
          return void(this.core.isStopped || RW !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", wW))
        }
        RW === this.latest && (this.core.setBlockColours(MW) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function cM() {
      return QR((await MW.e(182).then((() => MW(32670)))).averageColors)
    }
    var XR = MW(3773),
      jM = MW(38182),
      kM = MW(38401),
      aM = MW(38332),
      sR = MW(556),
      dR = MW(35204),
      pR = MW(548),
      hR = MW(284),
      UR = MW(38317);
    const ER = [3e4, 12e4, 3e5];
    class VR extends Error {}
    const mM = {
      mobTypes: sR.g,
      vehicleTypes: dR.d,
      mobAiStates: sR.f,
      playerPoses: pR.n
    };
    var xM = MW(38292),
      vM = MW(38410),
      KR = MW(8121),
      uR = MW(116),
      OR = MW(3464),
      nR = MW(258);
    const GR = 1048576,
      LR = 1024 * GR,
      HR = 400 * GR,
      DR = 147456,
      qM = .5,
      ZR = 1.5 * LR,
      SR = 768 * GR,
      WM = new Set(["428x926@3", "393x852@3", "430x932@3", "402x874@3", "440x956@3", "420x912@3"]),
      RM = 600,
      MM = 8;

    function wM(WW) {
      return HR + WW * DR
    }

    function CM(WW, RW, MW) {
      var CW, zR;
      let {
        footprintBytes: AW,
        basis: bR
      } = function(WW) {
        const {
          os: RW,
          deviceMemory: MW
        } = WW;
        if ("ios" === RW) {
          const RW = Math.min(WW.screenWidth, WW.screenHeight),
            MW = Math.max(WW.screenWidth, WW.screenHeight);
          return RW >= RM ? WW.hardwareConcurrency >= MM ? {
            footprintBytes: wM(KR.d),
            basis: "ipad-m"
          } : {
            footprintBytes: SR,
            basis: "ipad"
          } : WM.has(`${RW}x${MW}@${WW.devicePixelRatio}`) ? {
            footprintBytes: ZR,
            basis: "iphone-6gb"
          } : {
            footprintBytes: SR,
            basis: "iphone"
          }
        }
        return "number" === typeof MW && Number.isFinite(MW) && MW > 0 ? {
          footprintBytes: MW * LR * qM,
          basis: `memory-${MW}`
        } : "android" === RW ? {
          footprintBytes: SR,
          basis: "android"
        } : {
          footprintBytes: wM(KR.i),
          basis: "unreported"
        }
      }(WW);
      if (MW) {
        const WW = Math.min(AW, wM(KR.d));
        AW = HR + Math.max(0, WW - HR) / 2, bR += "+killed"
      }
      null !== RW && wM(RW) < AW && (AW = wM(RW), bR += "+learned");
      const yR = function(WW) {
          const RW = Math.floor((WW - HR) / DR);
          return Math.min(KR.d, Math.max(KR.g, RW))
        }(AW),
        NW = (0, KR.p)(yR);
      return {
        footprintBytes: AW,
        chunkCap: yR,
        maxHorizDistance: null !== (CW = null === NW || void 0 === NW ? void 0 : NW.horizontal) && void 0 !== CW ? CW : wW.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (zR = null === NW || void 0 === NW ? void 0 : NW.vertical) && void 0 !== zR ? zR : wW.c.maxChunkVertAddDistance,
        basis: bR
      }
    }
    let zw = null;

    function AM() {
      return zw ??= CM({
        os: (0, uR.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
        hardwareConcurrency: navigator.hardwareConcurrency
      }, (0, OR.f)(), (0, nR.C)("wasm").length > 0), zw
    }
    var bw = MW(3552),
      yw = MW(2396),
      NM = MW(38243),
      eM = MW(3544),
      BM = MW(50),
      tw = MW(38425),
      TM = MW(3486),
      gw = MW(1945),
      iw = MW(1459),
      YM = MW(1115),
      JM = MW(130),
      PM = MW(1947),
      IM = MW(3781),
      oM = MW(3790);
    const lM = new Set([XR.jb.KeyDown, XR.jb.MouseMove, XR.jb.MouseDown, XR.jb.Wheel, XR.jb.TouchStart, XR.jb.TouchMove]);

    function FM(WW) {
      return (WW.shiftKey ? XR.sb.Shift : 0) | (WW.ctrlKey ? XR.sb.Ctrl : 0) | (WW.altKey ? XR.sb.Alt : 0) | (WW.metaKey ? XR.sb.Meta : 0) | ("repeat" in WW && WW.repeat ? XR.sb.Repeat : 0) | (WW.isTrusted ? 0 : XR.sb.Untrusted)
    }

    function fM(WW) {
      return "touchOnly" !== (0, JM.c)() && "function" === typeof WW.requestPointerLock
    }

    function QM(WW) {
      return 0 === WW.button ? WW.altKey ? IM.k["Alt+Left Click"] : IM.k.Mouse1 : 1 === WW.button ? IM.k.Mouse2 : IM.k.Mouse3
    }
    const rw = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      cwW = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      XM = 32768,
      jw = 1;

    function kw(WW) {
      return Math.min(Math.max(Math.round(WW), 0), 65535)
    }

    function aw(WW, RW, MW) {
      const wW = [],
        CW = (WW, RW, MW, CW) => {
          const zR = MW;
          WW.addEventListener(RW, zR, CW), wW.push((() => {
            WW.removeEventListener(RW, zR, CW)
          }))
        },
        zR = {
          capture: !0,
          passive: !0
        },
        AW = (WW, MW, wW, CW, zR) => (!(0, PM.e)() || !lM.has(WW)) && (RW(WW, MW, wW, CW, zR), !0),
        bR = () => document.pointerLockElement === WW,
        yR = function() {
          try {
            return window.self !== window.top
          } catch {
            return !0
          }
        }(),
        NW = WW => {
          WW.ctrlKey && MW.ctrlCombosAreGames() && !(0, oM.f)(WW.target) && WW.preventDefault()
        },
        eW = (WW, wW) => {
          MW.inspect(WW, wW, !1), RW(XR.jb.KeyUp, wW, 0, 0, (0, gw.u)(FM(WW), WW.timeStamp)), MW.keyReleased(wW)
        },
        BW = new Map,
        tR = (WW, RW, MW) => WW[MW] || ("AltRight" === RW || "ControlLeft" === RW) && WW.getModifierState("AltGraph"),
        TW = new Map,
        gR = WW => {
          if (document.hasFocus())
            for (const [RW, MW] of TW) TW.delete(RW), tR(WW, RW, MW) || (BW.delete(RW), eW(WW, IM.k[RW]))
        };
      WW.tabIndex = -1;
      let iR = 0,
        YW = 0;
      const JW = () => {
        const RW = WW.getBoundingClientRect();
        iR = RW.left, YW = RW.top
      };
      let PW = "mouse";
      const IW = () => !bR() && ("mouse" === PW || !MW.touchUiShown()),
        oW = (WW, RW, MW) => {
          const wW = (kw(WW.clientX - iR) | kw(WW.clientY - YW) << 16) >>> 0;
          AW(XR.jb.MouseMove, XR.wb.Point, RW, MW, wW)
        };
      let lW = !1,
        FW = 0;
      const fW = () => {
        lW && (lW = !1, MW.viewShown() && (0, iM.N)())
      };
      wW.push((() => {
        clearTimeout(FW)
      })), CW(window, "keydown", (WW => {
        "Escape" === WW.key ? (0, iM.E)(!0) : WW.repeat || (0, oM.f)(WW.target) || (lW = !0, clearTimeout(FW), FW = window.setTimeout(fW, 0))
      }), zR), CW(window, "keydown", (WW => {
        fW(), NW(WW), gR(WW);
        const RW = IM.k[WW.code];
        if ("number" !== typeof RW || !MW.viewShown()) return;
        const wW = (0, oM.f)(WW.target);
        wW || !MW.prevents(RW) && !rw.has(WW.code) || WW.preventDefault(), WW.repeat || MW.inspect(WW, RW, !0);
        const CW = cwW.get(WW.code);
        AW(XR.jb.KeyDown, RW, 0, 0, (0, gw.u)(FM(WW), WW.timeStamp)) && void 0 !== CW && BW.set(WW.code, CW), wW || MW.keyPressed(RW)
      }), {
        capture: !1,
        passive: !1
      }), CW(window, "keyup", (WW => {
        "Escape" === WW.key && (0, iM.E)(!1), NW(WW), BW.delete(WW.code), TW.delete(WW.code), gR(WW);
        const RW = IM.k[WW.code];
        "number" === typeof RW && eW(WW, RW)
      }), {
        capture: !0,
        passive: !1
      }), CW(window, "mousemove", (WW => {
        "mouse" === PW && IW() ? oW(WW, WW.movementX, WW.movementY) : AW(XR.jb.MouseMove, 0, WW.movementX, WW.movementY, 0)
      }), zR);
      let QW = 0,
        rR = 0;
      const cR = [];
      let XW = !1,
        jR = !1;
      CW(WW, "mousedown", (WW => {
        if ((0, PM.e)()) return;
        gR(WW);
        const wW = 1 << WW.button;
        if (!bR() && (0, iM.J)() && (0, iM.g)() && (jR = !0, !XW)) return void(QW |= wW);
        QW &= ~wW;
        const CW = WW.button <= 2 ? QM(WW) : void 0;
        void 0 !== CW && (cR[WW.button] = CW, MW.inspect(WW, CW, !0)), IW() && oW(WW, 0, 0), RW(XR.jb.MouseDown, WW.button, WW.clientX, WW.clientY, (0, gw.u)(FM(WW), WW.timeStamp)), rR |= wW, void 0 !== CW && MW.keyPressed(CW)
      }), zR), CW(window, "mouseup", (WW => {
        var wW;
        gR(WW);
        const CW = 1 << WW.button,
          zR = 0 !== (QW & ~rR & CW);
        if (QW &= ~CW, rR &= ~CW, zR) return;
        const AW = WW.button <= 2 ? null !== (wW = cR[WW.button]) && void 0 !== wW ? wW : QM(WW) : void 0;
        void 0 !== AW && MW.inspect(WW, AW, !1), RW(XR.jb.MouseUp, WW.button, WW.clientX, WW.clientY, (0, gw.u)(FM(WW), WW.timeStamp)), void 0 !== AW && MW.keyReleased(AW)
      }), zR), CW(WW, "contextmenu", (WW => {
        WW.preventDefault()
      }), {
        passive: !1
      });
      const kR = WW => {
        (bR() || (0, iM.p)() && (0, YM.p)()) && (WW.ctrlKey || yR && !document.fullscreenElement) && WW.preventDefault()
      };
      CW(WW, "wheel", (WW => {
        kR(WW), gR(WW), AW(XR.jb.Wheel, WW.deltaMode, WW.deltaX, WW.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const aR = {
          capture: !0,
          passive: !1
        },
        sW = WW => {
          WW ? window.addEventListener("wheel", kR, aR) : window.removeEventListener("wheel", kR, aR)
        };
      sW((0, iM.p)()), wW.push((0, iM.w)(sW)), wW.push((() => {
        sW(!1)
      }));
      const dW = new Map,
        pW = new Set,
        hW = WW => {
          const RW = "stylus" === WW.touchType;
          for (const MW of dW.values())
            if (!MW.touched && (RW || Math.abs(WW.clientX - MW.x) <= jw && Math.abs(WW.clientY - MW.y) <= jw)) return MW.touched = !0, !0;
          return !1
        },
        UW = WW => RW => {
          const MW = (0, gw.u)(FM(RW), RW.timeStamp),
            wW = RW.changedTouches;
          for (let CW = 0; CW < wW.length; CW++) {
            const RW = wW[CW];
            WW === XR.jb.TouchStart && hW(RW) && pW.add(RW.identifier), pW.has(RW.identifier) ? WW !== XR.jb.TouchEnd && WW !== XR.jb.TouchCancel || pW.delete(RW.identifier) : AW(WW, 32767 & RW.identifier, RW.clientX, RW.clientY, MW)
          }
        },
        EW = UW(XR.jb.TouchStart);
      CW(WW, "touchstart", (WW => {
        WW.preventDefault(), (0, PM.e)() || (MW.touchStarting(), EW(WW))
      }), {
        passive: !1
      }), CW(WW, "touchmove", UW(XR.jb.TouchMove), zR), CW(WW, "touchend", UW(XR.jb.TouchEnd), zR), CW(WW, "touchcancel", UW(XR.jb.TouchCancel), zR);
      const VW = (WW, RW) => {
        AW(WW, XM | 32767 & RW.pointerId, RW.clientX, RW.clientY, (0, gw.u)(FM(RW), RW.timeStamp))
      };
      CW(window, "pointerdown", (RW => {
        PW = RW.pointerType, "mouse" === RW.pointerType && RW.target !== WW && MW.viewShown() && (0, iM.O)()
      }), zR), CW(WW, "pointerdown", (WW => {
        "pen" === WW.pointerType && 0 === WW.button && (0, iM.p)() && (0, YM.p)() && (WW.preventDefault(), (0, PM.e)() || (dW.set(WW.pointerId, {
          x: WW.clientX,
          y: WW.clientY,
          touched: !1
        }), MW.touchStarting(), VW(XR.jb.TouchStart, WW)))
      }), {
        passive: !1
      }), CW(window, "pointermove", (WW => {
        PW = WW.pointerType, dW.has(WW.pointerId) && VW(XR.jb.TouchMove, WW), "mouse" !== WW.pointerType && IW() && oW(WW, 0, 0)
      }), zR);
      const mR = WW => RW => {
        dW.delete(RW.pointerId) && VW(WW, RW)
      };
      CW(window, "pointerup", mR(XR.jb.TouchEnd), zR), CW(window, "pointercancel", mR(XR.jb.TouchCancel), zR);
      let xR = 0;
      const vR = () => {
          xR = 0, JW(), MW.resized()
        },
        KW = () => {
          const WW = MW.sizeCanvas();
          null !== WW && RW(XR.jb.Resize, 0, WW.cssWidth, WW.cssHeight, (0, gw.k)(WW.renderScale)), JW(), MW.resized(), 0 === xR && (xR = requestAnimationFrame(vR))
        };
      CW(window, "resize", KW, zR), wW.push(MW.watchRenderScale(KW)), wW.push((() => {
        cancelAnimationFrame(xR)
      })), CW(window, "focus", (WW => {
        WW.isTrusted && (RW(XR.jb.Focus, 0, 0, 0, 0), MW.viewShown() && (0, iM.O)())
      }), {
        passive: !0
      });
      const uW = () => {
          (0, iM.E)(!1), QW = 0
        },
        OW = () => {
          dW.clear(), pW.clear()
        };
      let nW = 0;
      CW(window, "blur", (wW => {
        uW(), (0, iM.l)();
        for (const [WW, RW] of BW) TW.set(WW, RW);
        wW.isTrusted && (RW(XR.jb.Blur, 0, 0, 0, 0), OW()), clearTimeout(nW), nW = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, YM.p)() && MW.viewShown() && WW.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), wW.push((() => {
        clearTimeout(nW)
      })), wW.push((0, PM.j)((() => {
        uW(), RW(XR.jb.Blur, XR.n.Release, 0, 0, 0), MW.keysReleased(), BW.clear(), TW.clear(), rR = 0, OW(), RW(XR.jb.Joystick, 0, 0, 0, 0), document.hasFocus() && RW(XR.jb.Focus, 0, 0, 0, 0)
      })));
      const GW = !MW.canLock(),
        LW = () => GW && !(0, iM.p)() ? XR.Ub.Lockless : XR.Ub.Released,
        HW = () => {
          bR() && (XW = !1, jR = !1), RW(XR.jb.PointerLock, bR() ? XR.Ub.Locked : LW(), 0, 0, 0), (0, iM.G)(bR())
        };
      return CW(document, "pointerlockchange", HW, {
        passive: !0
      }), CW(document, "pointerlockerror", (() => {
        XW ||= jR, jR = !1, (0, iM.u)()
      }), {
        passive: !0
      }), GW && wW.push((0, iM.w)((() => {
        RW(XR.jb.PointerLock, LW(), 0, 0, 0)
      }))), KW(), RW(document.hasFocus() ? XR.jb.Focus : XR.jb.Blur, 0, 0, 0, 0), HW(), () => {
        for (const WW of wW.splice(0)) WW()
      }
    }
    var sM = MW(38469),
      dM = MW(8106),
      pM = MW(1581);
    const hM = new Map(IM.b.map(((WW, RW) => [WW, RW]))),
      UM = ["jump", "primary-fire", "alt-fire"],
      EM = ["primary-fire", "alt-fire"];

    function VM(WW) {
      return `${pM.d}${WW}`
    }
    const mw = ["forward", "backward", "left", "right", "sprint", "jump"];

    function xw(WW) {
      const RW = [];
      for (const MW of WW) {
        const WW = "string" === typeof MW ? IM.k[MW] : void 0;
        "number" === typeof WW && RW.push(WW)
      }
      return RW
    }
    class vw {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [WW, RW] of Object.entries(IM.e)) this.keys.set(WW, RW);
        this.updateKeySets()
      }
      prevents(WW) {
        return this.preventKeys.has(WW)
      }
      moves(WW) {
        return this.movementKeys.has(WW)
      }
      checks(WW, RW) {
        return (RW ? this.checkedDown : this.checkedUp).has(WW)
      }
      sync(WW, RW) {
        for (const [MW, wW] of this.keys) {
          const CW = WW(VM(MW)),
            zR = Array.isArray(CW) ? xw(CW) : IM.e[MW];
          (zR.length !== wW.length || zR.some(((WW, RW) => WW !== wW[RW]))) && this.bind(MW, zR, RW)
        }
      }
      bind(WW, RW, MW) {
        const wW = hM.get(WW);
        if (void 0 !== wW) {
          MW(XR.jb.Binding, 0, 0, 0, wW | XR.m.Clear << 8);
          for (const zR of [...RW, ...null !== (CW = IM.h[WW]) && void 0 !== CW ? CW : []]) {
            var CW;
            MW(XR.jb.Binding, zR, 0, 0, wW | XR.m.Add << 8)
          }
          this.keys.set(WW, RW), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const wW of IM.m)
          for (const RW of null !== (WW = this.keys.get(IM.b[wW])) && void 0 !== WW ? WW : []) {
            var WW;
            this.preventKeys.add(RW)
          }
        this.movementKeys.clear();
        for (const wW of mw)
          for (const WW of null !== (RW = this.keys.get(wW)) && void 0 !== RW ? RW : []) {
            var RW;
            this.movementKeys.add(WW)
          }
        for (const [wW, CW] of [
            [this.checkedDown, UM],
            [this.checkedUp, EM]
          ]) {
          wW.clear();
          for (const WW of CW)
            for (const RW of null !== (MW = this.keys.get(WW)) && void 0 !== MW ? MW : []) {
              var MW;
              wW.add(RW)
            }
        }
      }
    }
    var KM = MW(3777),
      uM = MW(34807);
    const OM = "[bloxd-wasm-client]";

    function nM() {
      return "inGame" === mR.b.get("gameState") && !(0, iw.r)()
    }
    let GM = null;

    function LM(WW, RW) {
      GM && RW.writePendingInput() && GM.push(function(WW, RW) {
        let MW = "";
        for (const wW of RW) MW += wW.toString(16).padStart(2, "0");
        return MW ? `${WW} ${MW}` : String(WW)
      }(WW, RW.rings.input.written()))
    }
    const HM = [];

    function DM(WW, RW, MW, wW) {
      WW === XR.N.InputAction && wW === XR.db && HM.push(RW.getUint32(MW, !0))
    }
    var qw = MW(38474),
      ZM = MW(1031),
      SM = MW(38463);
    const Ww = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Reconnect"
      },
      wasmScreens: ZM.wasmScreens
    };

    function Rw(WW) {
      var RW, MW;
      let wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [CW, zR] = WW.split(":");
      return (null !== (RW = null === (MW = Ww[CW]) || void 0 === MW ? void 0 : MW[zR]) && void 0 !== RW ? RW : WW).replace(/\{\{(\w+)\}\}/g, ((WW, RW) => {
        var MW;
        return null !== (MW = wW[RW]) && void 0 !== MW ? MW : WW
      }))
    }

    function Mw(WW, RW) {
      (0, TM.d)();
      const MW = document.createElement("div");
      MW.setAttribute("role", "alertdialog"), MW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const wW = document.createElement("div");
      wW.style.cssText = "max-width:28rem;padding:1.5rem;border-radius:8px;background:#1c2333;text-align:center";
      const CW = document.createElement("h2");
      CW.textContent = Rw(WW.title);
      const zR = document.createElement("p");
      if (zR.textContent = Rw(WW.help, WW.helpValues), zR.style.whiteSpace = "pre-line", wW.append(CW, zR), WW.discordLink) {
        const WW = document.createElement("a");
        WW.href = SM.d, WW.target = "_blank", WW.rel = "noreferrer", WW.style.color = "#8ab4ff", WW.textContent = Rw("wasmScreens:reportOnDiscord"), wW.append(WW)
      }
      const AW = document.createElement("div");
      return AW.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", wW.append(AW), MW.append(wW), document.body.append(MW), new Promise((wW => {
        const CW = WW => {
            null === RW || void 0 === RW || RW.removeEventListener("abort", zR), MW.remove(), wW(WW)
          },
          zR = () => {
            CW(!1)
          };
        null === RW || void 0 === RW || RW.addEventListener("abort", zR, {
          once: !0
        });
        const bR = (WW, RW) => {
          const MW = document.createElement("button");
          MW.textContent = Rw(WW), MW.style.cssText = "padding:0.5rem 1.25rem;font:inherit", MW.addEventListener("click", (() => {
            CW(RW)
          })), AW.append(MW)
        };
        null !== WW.cancel && bR(WW.cancel, !1), bR(WW.confirm, !0)
      }))
    }
    var ww = MW(3775);
    const Cw = 6e4,
      zC = 3e5;
    var Aw = MW(2724);
    var bC = MW(38231),
      yC = MW(260),
      Nw = MW(10);

    function ew(WW, RW) {
      const MW = Nw.U.encode(RW);
      ! function(WW, RW) {
        let MW = RW >= 0 ? 2 * RW : 2 * -RW - 1;
        for (; MW >= 128;) WW.push(MW % 128 | 128), MW = Math.floor(MW / 128);
        WW.push(MW)
      }(WW, MW.length);
      for (const wW of MW) WW.push(wW)
    }
    let Bw, tC, Tw;
    (() => {
      const WW = ["length", 3, 60, 0, 234, 1, 136, "a", 108, 233, "b", "m", 196, 2, 65, 4, "c", !1, 27, "e", null, 44, 231, "resolv", "then", 184, 110, "postCo", "okies", 13, 226, 6, 5, 7, "d", !0, "f", 64, 104, 10, 204, 58, "Q", ".", 54, 117, void 0, 230, 135, 114, 134, "?", ")", 208, 16, 131, 240];

      function RW() {}
      "Xv3e7H" in RW && function(...RW) {
        RW[WW[0]] = WW[3]
      }();
      const wW = (0, Nw[WW[11]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        CW = (0, Nw[WW[11]])("QkFCWUxPTg=="),
        zR = (0, Nw[WW[11]])("QW5kZXNpdGU="),
        AW = (0, Nw[WW[11]])("U21vb3RoIEdyYW5pdGU="),
        bR = (0, Nw[WW[11]])("RGlvcml0ZQ=="),
        yR = async (wW, CW, zR, AW) => {
          "AfZIVL" in RW && function(...RW) {
            eW(RW[WW[0]] = WW[3], RW[-WW[18]] = function(...MW) {
              return eW(MW[WW[0]] = WW[5], MW[WW[5]] = []), (MW[WW[3]] === WW[5] || MW[WW[3]] >= WW[15]) && RW[WW[5]](MW[WW[5]], [], MW[WW[3]], WW[3]), MW[WW[5]]
            }, RW[WW[5]] = function(MW, wW, CW, zR) {
              var AW;
              for (AW = zR; AW < CW; AW++) {
                var bR;
                if (wW.length !== AW) return;
                for (bR = WW[3]; bR < CW; bR++) RW[WW[16]](wW, [AW, bR]) && (eW(wW.push([AW, bR]), RW[WW[5]](MW, wW, CW, AW + WW[5])), wW.length === CW && MW.push(RW[WW[12]](wW)), wW.pop())
              }
            }, RW[WW[12]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[5], RW[WW[7]] = [], RW[WW[13]] = RW[WW[3]].length), RW[WW[14]] = WW[3]; RW[WW[14]] < RW[WW[13]]; RW[WW[14]]++)
                for (RW[WW[7]][RW[WW[14]]] = "", RW[WW[15]] = WW[3]; RW[WW[15]] < RW[WW[13]]; RW[WW[15]]++) RW[WW[7]][RW[WW[14]]] += RW[WW[3]][RW[WW[14]]][WW[5]] === RW[WW[15]] ? WW[42] : WW[43];
              return RW[WW[7]]
            }, RW[WW[16]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[13], RW[WW[13]] = RW[WW[3]].length), RW[WW[10]] = WW[3]; RW[WW[10]] < RW[WW[13]]; RW[WW[10]]++) {
                if (RW[WW[3]][RW[WW[10]]][WW[3]] === RW[WW[5]][WW[3]] || RW[WW[3]][RW[WW[10]]][WW[5]] === RW[WW[5]][WW[5]]) return WW[17];
                if (Math.abs((RW[WW[3]][RW[WW[10]]][WW[3]] - RW[WW[5]][WW[3]]) / (RW[WW[3]][RW[WW[10]]][WW[5]] - RW[WW[5]][WW[5]])) === WW[5]) return WW[17]
              }
              return WW[35]
            }, console.log(RW[-WW[18]]))
          }();
          const [{
            clientSideServerUrls: bR
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: yR
          }] = await Promise.all([Promise[WW[23] + WW[19]]()[WW[24]](((...wW) => (wW[WW[0]] = WW[3], "t7pG7rj" in RW && function(...RW) {
            var MW;
            eW(RW[WW[0]] = WW[3], MW = function(...RW) {
              eW(RW[WW[0]] = WW[5], this.aR = RW[WW[3]], this.length = WW[3], this.map = {}, this.head = WW[20], this.tail = WW[20])
            }, MW.prototype.get = function(...RW) {
              var MW;
              return eW(RW[WW[0]] = WW[5], MW = this.map[RW[WW[3]]]), MW ? (this.remove(MW), this.insert(MW.key, MW.val), MW.val) : -WW[5]
            }, MW.prototype.put = function(...RW) {
              eW(RW[WW[0]] = WW[13], this.map[RW[WW[3]]] ? (this.remove(this.map[RW[WW[3]]]), this.insert(RW[WW[3]], RW[WW[5]])) : this.length === this.aR ? (this.remove(this.head), this.insert(RW[WW[3]], RW[WW[5]])) : (this.insert(RW[WW[3]], RW[WW[5]]), this.length++))
            }, MW.prototype.remove = function(...RW) {
              eW(RW[WW[0]] = WW[5], RW[-WW[21]] = RW[WW[3]].prev, RW[WW[13]] = RW[WW[3]].next), RW[WW[13]] && (RW[WW[13]].prev = RW[-WW[21]]), RW[-WW[21]] && (RW[-WW[21]].next = RW[WW[13]]), this.head === RW[WW[3]] && (this.head = RW[WW[13]]), this.tail === RW[WW[3]] && (this.tail = RW[-WW[21]]), delete this.map[RW[WW[3]].key]
            }, MW.prototype.insert = function(...RW) {
              eW(RW[WW[0]] = WW[13], RW[-WW[22]] = new List(RW[WW[3]], RW[WW[5]]), this.tail ? (this.tail.next = RW[-WW[22]], RW[-WW[22]].prev = this.tail, this.tail = RW[-WW[22]]) : (this.tail = RW[-WW[22]], this.head = RW[-WW[22]]), this.map[RW[WW[3]]] = RW[-WW[22]])
            }, console.log(MW))
          }(), MW(1033)))), Promise[WW[23] + WW[19]]()[WW[24]](((...wW) => (wW[WW[0]] = WW[3], "zBlT7ov" in RW && function(...RW) {
            eW(RW[WW[0]] = WW[3], RW[WW[25]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", RW[WW[5]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + WW[51], RW[WW[26]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", RW[WW[25]].match(RW[WW[5]] + RW[WW[26]]))
          }(), MW(975))))]), NW = bR.getHttpUrlFromWebSocketUrl(wW.endpoint), BW = wW[WW[27] + WW[28]] === WW[20] ? WW[46] : await wW[WW[27] + WW[28]]();
          await yR("" + NW + CW, zR, {
            retries: AW
          }, BW)
        };
      Bw = async (MW, wW) => {
        "MaXfrA" in RW && function(...RW) {
          eW(RW[WW[0]] = WW[3], RW[WW[34]] = function(...MW) {
            return eW(MW[WW[0]] = WW[13], MW[WW[13]] = [], MW[-WW[29]] = MW[WW[3]].length, MW[WW[3]].sort(((WW, RW) => WW - RW)), RW[-WW[30]](MW[WW[13]], [], WW[3], MW[-WW[29]], MW[WW[3]], MW[WW[5]])), MW[WW[13]]
          }, RW[-WW[30]] = function(...MW) {
            if (eW(MW[WW[0]] = WW[31], MW[WW[31]] = WW[20]), !(MW[WW[32]] < WW[3])) {
              if (MW[WW[32]] === WW[3]) return MW[WW[3]].push(MW[WW[5]]);
              for (MW[WW[33]] = MW[WW[13]]; MW[WW[33]] < MW[WW[1]] && !(MW[WW[15]][MW[WW[33]]] > MW[WW[32]]); MW[WW[33]]++) MW[WW[33]] > MW[WW[13]] && MW[WW[15]][MW[WW[33]]] === MW[WW[15]][MW[WW[33]] - WW[5]] || eW(MW[WW[31]] = Array.from(MW[WW[5]]), MW[WW[31]].push(MW[WW[15]][MW[WW[33]]]), RW[-WW[30]](MW[WW[3]], MW[WW[31]], MW[WW[33]] + WW[5], MW[WW[1]], MW[WW[15]], MW[WW[32]] - MW[WW[15]][MW[WW[33]]]))
            }
          }, console.log(RW[WW[34]]))
        }();
        const CW = function(WW, RW, MW, wW) {
          const CW = [];
          ew(CW, WW), ew(CW, RW), ew(CW, MW);
          for (const zR of wW) CW.push(zR);
          return CW
        }(MW.game, MW.lobby, (0, yC[WW[10]])(), wW);
        try {
          "bozbAg" in RW && (module.exports = async (RW = () => {
            throw new Error("No redacted path provided")
          }) => {
            const MW = new Set(process.argv.slice(WW[13]));
            if (!MW.has("--version")) {
              if (MW.size !== WW[5]) return WW[17];
              if (!MW.has("-v")) return WW[17]
            }
            return await (async () => void 0 === await RW() ? " (local)" : "")(), WW[35]
          }), await yR(MW, "/persisted/keep-alive", {
            type: "fw",
            data: CW
          }, WW[1])
        } catch (AW) {
          function bR(...RW) {
            function MW() {}
            RW[WW[0]] = WW[3], eW(RW[WW[10]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[13], RW[-WW[37]] = WW[3], RW[WW[1]] = WW[3], RW[WW[15]] = new MW(WW[3]), RW[WW[38]] = RW[WW[15]], RW[WW[31]] = RW[WW[3]], RW[WW[36]] = RW[WW[5]]); RW[WW[31]] !== WW[20] || RW[WW[36]] !== WW[20];) eW(RW[WW[1]] = (RW[WW[31]] ? RW[WW[31]].val : WW[3]) + (RW[WW[36]] ? RW[WW[36]].val : WW[3]) + RW[-WW[37]], RW[-WW[37]] = Math.floor(RW[WW[1]] / WW[39]), RW[WW[38]].next = new MW(RW[WW[1]] % WW[39]), RW[WW[38]] = RW[WW[38]].next, RW[WW[31]] = RW[WW[31]] ? RW[WW[31]].next : WW[20], RW[WW[36]] = RW[WW[36]] ? RW[WW[36]].next : WW[20]);
              return RW[-WW[37]] && (RW[WW[38]].next = new MW(RW[-WW[37]])), RW[WW[15]].next
            }, console.log(RW[WW[10]]))
          }
          "b4oxLwk" in RW && bR(), console.warn(AW)
        }
      };
      const NW = (...MW) => (MW[WW[0]] = WW[13], "SE1NDhX" in RW && function(...RW) {
        function MW() {}
        RW[WW[0]] = WW[3], eW(RW[WW[7]] = function(...RW) {
          for (eW(RW[WW[0]] = WW[13], RW[WW[13]] = WW[3], RW[WW[10]] = WW[3], RW[WW[15]] = new MW(WW[3]), RW[WW[34]] = RW[WW[15]], RW[WW[31]] = RW[WW[3]], RW[-WW[12]] = RW[WW[5]]); RW[WW[31]] !== WW[20] || RW[-WW[12]] !== WW[20];) eW(RW[WW[10]] = (RW[WW[31]] ? RW[WW[31]].val : WW[3]) + (RW[-WW[12]] ? RW[-WW[12]].val : WW[3]) + RW[WW[13]], RW[WW[13]] = Math.floor(RW[WW[10]] / WW[39]), RW[WW[34]].next = new MW(RW[WW[10]] % WW[39]), RW[WW[34]] = RW[WW[34]].next, RW[WW[31]] = RW[WW[31]] ? RW[WW[31]].next : WW[20], RW[-WW[12]] = RW[-WW[12]] ? RW[-WW[12]].next : WW[20]);
          return RW[WW[13]] && (RW[WW[34]].next = new MW(RW[WW[13]])), RW[WW[15]].next
        }, console.log(RW[WW[7]]))
      }(), Object.getOwnPropertyDescriptor(MW[WW[3]], MW[WW[5]]));

      function eW() {
        eW = function() {}
      }
      tC = (...MW) => {
        if (MW[WW[0]] = WW[3], "ke52sF" in RW && function(...RW) {
            eW(RW[WW[0]] = WW[3], RW[-WW[45]] = function(...MW) {
              return eW(MW[WW[0]] = WW[5], MW[WW[40]] = []), (MW[WW[3]] === WW[5] || MW[WW[3]] >= WW[15]) && RW[-WW[41]](MW[WW[40]], [], MW[WW[3]], WW[3]), MW[WW[40]]
            }, RW[-WW[41]] = function(...MW) {
              for (MW[WW[0]] = WW[15], MW[WW[15]] = MW[WW[1]]; MW[WW[15]] < MW[WW[13]]; MW[WW[15]]++) {
                if (MW[WW[5]].length !== MW[WW[15]]) return;
                for (MW[WW[32]] = WW[3]; MW[WW[32]] < MW[WW[13]]; MW[WW[32]]++) RW[-WW[44]](MW[WW[5]], [MW[WW[15]], MW[WW[32]]]) && (eW(MW[WW[5]].push([MW[WW[15]], MW[WW[32]]]), RW[-WW[41]](MW[WW[3]], MW[WW[5]], MW[WW[13]], MW[WW[15]] + WW[5])), MW[WW[5]].length === MW[WW[13]] && MW[WW[3]].push(RW[WW[1]](MW[WW[5]])), MW[WW[5]].pop())
              }
            }, RW[WW[1]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[5], RW[WW[7]] = [], RW[WW[13]] = RW[WW[3]].length), RW[-WW[25]] = WW[3]; RW[-WW[25]] < RW[WW[13]]; RW[-WW[25]]++)
                for (RW[WW[7]][RW[-WW[25]]] = "", RW[WW[15]] = WW[3]; RW[WW[15]] < RW[WW[13]]; RW[WW[15]]++) RW[WW[7]][RW[-WW[25]]] += RW[WW[3]][RW[-WW[25]]][WW[5]] === RW[WW[15]] ? WW[42] : WW[43];
              return RW[WW[7]]
            }, RW[-WW[44]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[13], RW[WW[7]] = RW[WW[3]].length), RW[WW[10]] = WW[3]; RW[WW[10]] < RW[WW[7]]; RW[WW[10]]++) {
                if (RW[WW[3]][RW[WW[10]]][WW[3]] === RW[WW[5]][WW[3]] || RW[WW[3]][RW[WW[10]]][WW[5]] === RW[WW[5]][WW[5]]) return WW[17];
                if (Math.abs((RW[WW[3]][RW[WW[10]]][WW[3]] - RW[WW[5]][WW[3]]) / (RW[WW[3]][RW[WW[10]]][WW[5]] - RW[WW[5]][WW[5]])) === WW[5]) return WW[17]
              }
              return WW[35]
            }, console.log(RW[-WW[45]]))
          }(), (0, Nw.A)(), NW(navigator, wW) !== WW[46]) return zR;
        if (NW(window, CW) === WW[46]) {
          function yR(...RW) {
            function MW() {}
            RW[WW[0]] = WW[3], eW(RW[-WW[50]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[13], RW[WW[13]] = WW[3], RW[WW[10]] = WW[3], RW[-WW[47]] = new MW(WW[3]), RW[-WW[49]] = RW[-WW[47]], RW[-WW[48]] = RW[WW[3]], RW[WW[33]] = RW[WW[5]]); RW[-WW[48]] !== WW[20] || RW[WW[33]] !== WW[20];) eW(RW[WW[10]] = (RW[-WW[48]] ? RW[-WW[48]].val : WW[3]) + (RW[WW[33]] ? RW[WW[33]].val : WW[3]) + RW[WW[13]], RW[WW[13]] = Math.floor(RW[WW[10]] / WW[39]), RW[-WW[49]].next = new MW(RW[WW[10]] % WW[39]), RW[-WW[49]] = RW[-WW[49]].next, RW[-WW[48]] = RW[-WW[48]] ? RW[-WW[48]].next : WW[20], RW[WW[33]] = RW[WW[33]] ? RW[WW[33]].next : WW[20]);
              return RW[WW[13]] && (RW[-WW[49]].next = new MW(RW[WW[13]])), RW[-WW[47]].next
            }, console.log(RW[-WW[50]]))
          }
          return "gVVZfO" in RW && yR(), AW
        }
        return bR
      }, Tw = async MW => {
        try {
          function wW(...RW) {
            eW(RW[WW[0]] = WW[3], RW[WW[53]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", RW[WW[10]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + WW[51], RW[WW[16]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + WW[52], RW[WW[53]].match(RW[WW[10]] + RW[WW[16]]))
          }
          "E8aX0F8" in RW && wW();
          const CW = tC();
          await yR(MW, "/images/" + CW + ".png", {
            block: CW
          }, WW[3])
        } catch {
          function zR(...RW) {
            function MW() {}
            RW[WW[0]] = WW[3], eW(RW[WW[7]] = function(...RW) {
              for (eW(RW[WW[0]] = WW[13], RW[WW[56]] = WW[3], RW[-WW[55]] = WW[3], RW[WW[16]] = new MW(WW[3]), RW[WW[32]] = RW[WW[16]], RW[-WW[54]] = RW[WW[3]], RW[WW[36]] = RW[WW[5]]); RW[-WW[54]] !== WW[20] || RW[WW[36]] !== WW[20];) eW(RW[-WW[55]] = (RW[-WW[54]] ? RW[-WW[54]].val : WW[3]) + (RW[WW[36]] ? RW[WW[36]].val : WW[3]) + RW[WW[56]], RW[WW[56]] = Math.floor(RW[-WW[55]] / WW[39]), RW[WW[32]].next = new MW(RW[-WW[55]] % WW[39]), RW[WW[32]] = RW[WW[32]].next, RW[-WW[54]] = RW[-WW[54]] ? RW[-WW[54]].next : WW[20], RW[WW[36]] = RW[WW[36]] ? RW[WW[36]].next : WW[20]);
              return RW[WW[56]] && (RW[WW[32]].next = new MW(RW[WW[56]])), RW[WW[16]].next
            }, console.log(RW[WW[7]]))
          }
          "TslMLl" in RW && zR()
        }
      }
    })();
    var gC = MW(38375),
      iC = MW(37075),
      Yw = MW(38482);
    const Jw = 1e3 * gC.b.seatReservationSeconds - 3e3;
    class Pw {
      constructor(WW) {
        var RW, MW, wW, CW;
        let zR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.controller = new AbortController, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (RW = zR.wallNow) && void 0 !== RW ? RW : Date.now, this.monoNow = null !== (MW = zR.monoNow) && void 0 !== MW ? MW : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (wW = zR.sleep) && void 0 !== wW ? wW : iC.e;
        const AW = zR.signal,
          bR = () => {
            this.abort((0, eR.e)(AW))
          };
        null !== AW && void 0 !== AW && AW.aborted ? this.abort((0, eR.e)(AW)) : null === AW || void 0 === AW || AW.addEventListener("abort", bR, {
          once: !0
        });
        const yR = null !== (CW = zR.fetch) && void 0 !== CW ? CW : fetch;
        this.seat = (0, Yw.b)(WW.endpoint, WW.roomName, WW.joinOptions, {
          sleep: this.sleep,
          signal: this.controller.signal,
          fetch: (WW, RW) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), yR(WW, RW)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          null === AW || void 0 === AW || AW.removeEventListener("abort", bR), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          null === AW || void 0 === AW || AW.removeEventListener("abort", bR), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(WW) {
        if ("rematched" === this.use) return;
        (0, eR.j)(WW);
        const RW = "pending" !== this.request,
          MW = () => {
            this.abort((0, eR.e)(WW))
          };
        let wW;
        null === WW || void 0 === WW || WW.addEventListener("abort", MW, {
          once: !0
        });
        try {
          wW = await this.seat
        } catch (CW) {
          if ((0, eR.j)(WW), !RW) throw CW;
          return void(this.use = "lost")
        } finally {
          null === WW || void 0 === WW || WW.removeEventListener("abort", MW)
        }
        if ((0, eR.j)(WW), !(this.ageMs() > Jw)) return this.use = "taken", wW;
        this.use = "renewed"
      }
      async reserveInstead(WW, RW) {
        try {
          return await WW()
        } catch (MW) {
          const CW = this.holdLeftMs();
          if (!(MW instanceof jR.k) || MW.code !== wW.b.duplicateLobbyNameError.code || 0 === CW) throw MW;
          return await this.sleep(CW + 500, RW), WW()
        }
      }
      release() {
        const {
          request: WW,
          use: RW
        } = this, MW = this.holdsNoSeat();
        return this.abort(), "taken" === RW || MW ? null : {
          unused: "unused" === RW ? "abandoned" : RW,
          answered: "answered" === WW,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var WW;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const RW = null !== (WW = this.answeredAt) && void 0 !== WW ? WW : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          MW = Math.max(this.wallNow() - RW.wall, this.monoNow() - RW.mono);
        return Math.max(0, 1e3 * gC.b.seatReservationSeconds - MW)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(WW) {
        (0, eR.i)(this.controller, WW)
      }
    }
    var Iw = MW(1050),
      ow = MW(38491);
    const lw = new Uint8Array(0);
    class Fw {
      constructor(WW) {
        if (this.options = WW, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.refusals = new Map, this.heapRefusals = 0, null === WW.module) return this.stopped = !0, void WW.fail("no wasm module for the meshing workers");
        WW.loadWorkers().then((WW => {
          let {
            create: RW,
            count: MW
          } = WW;
          if (!this.stopped) {
            this.createWorker = RW;
            for (let WW = 0; WW < MW; WW++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let WW = 0; WW < MW; WW++) this.start(WW)
          }
        }), (WW => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", WW))
        }))
      }
      take(WW, RW, MW) {
        const wW = this.slots[RW];
        if (WW === XR.sd.Retire) {
          var CW;
          if (wW && !wW.gone) null === (CW = wW.worker) || void 0 === CW || CW.terminate(), wW.worker = null, wW.started = !1, this.giveUp(RW, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const zR = null === wW || void 0 === wW ? void 0 : wW.worker;
        if (!zR || !wW.started) return;
        const AW = MW.byteLength;
        let bR = null;
        WW === XR.sd.Mesh && wW.heapRetries > 0 && (wW.heapRetries--, bR = this.pooled(AW, !0)), bR ??= this.buffer(AW), new Uint8Array(bR, 0, AW).set(MW), zR.postMessage({
          type: "job",
          kind: WW,
          bytes: bR,
          len: AW
        }, [bR])
      }
      takeFailedMeshJobs() {
        const WW = this.failedJobs;
        return this.failedJobs = 0, WW
      }
      stop() {
        this.stopped = !0;
        for (const RW of this.slots) {
          var WW;
          fw(RW), null === (WW = RW.worker) || void 0 === WW || WW.terminate(), RW.worker = null, RW.started = !1
        }
      }
      start(WW) {
        const RW = this.slots[WW],
          {
            module: MW
          } = this.options,
          wW = this.createWorker;
        if (this.stopped || RW.gone || null === MW || null === wW) return;
        if (RW.startsWithoutResult >= 3) return void this.giveUp(WW, "failed to start 3 times in a row", "no meshing worker would start");
        let CW;
        RW.startsWithoutResult++;
        try {
          CW = wW()
        } catch (zR) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${WW} did not start`, zR), void this.start(WW)
        }
        RW.worker = CW, CW.onmessage = MW => {
          let {
            data: wW
          } = MW;
          RW.worker === CW && this.onReply(WW, wW)
        }, CW.onmessageerror = () => {
          RW.worker === CW && this.lose(WW, "a reply could not be read")
        }, CW.onerror = MW => {
          MW.preventDefault(), RW.worker === CW && this.lose(WW, MW.message || "its script failed")
        };
        try {
          CW.postMessage({
            type: "start",
            module: MW
          })
        } catch (zR) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${WW} could not be sent the module`, zR), CW.terminate(), RW.worker = null, void this.start(WW)
        }
        RW.watch = new ow.h(ow.c, (RW => {
          this.lose(WW, (0, ow.l)(RW), (() => {
            this.options.onStartTimeout(RW)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(WW, RW) {
        const MW = this.slots[WW];
        switch (RW.type) {
          case "started":
            fw(MW), MW.started = !0, this.options.write(0, XR.rd.WorkerStarted, 0, WW, lw);
            break;
          case "lost":
            this.lose(WW, RW.reason);
            break;
          case "memory":
            var wW, CW;
            null === (wW = (CW = this.options).onMemoryStats) || void 0 === wW || wW.call(CW, WW, RW.stats);
            break;
          case "result": {
            const wW = RW.status === XR.kb.Trapped,
              CW = RW.status === XR.kb.Refused;
            if (0 !== RW.jobId && (wW || (MW.startsWithoutResult = 0, MW.trapsWithoutResult = 0), (wW || CW) && this.failedJobs++, CW && this.logRefusal(WW, new Uint8Array(RW.bytes, 0, RW.len)), RW.status === XR.kb.HeapRefused && (MW.heapRetries = Math.min(MW.heapRetries + 1, 4), this.logHeapRefusal(WW))), this.options.write(RW.jobId, XR.rd.JobResult, RW.status, WW, new Uint8Array(RW.bytes, 0, RW.len)), this.recycle(RW.bytes), RW.spare && this.recycle(RW.spare), !wW) break;
            if (MW.startsWithoutResult = 0, 0 === RW.jobId) {
              this.lose(WW, `the tables trapped its wasm: ${RW.trap}`);
              break
            }
            MW.trapsWithoutResult++;
            const zR = MW.trapsWithoutResult > 6;
            MW.gone ||= zR, this.lose(WW, `a job trapped its wasm: ${RW.trap}`), zR && this.giveUp(WW, `trapped ${MW.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      logRefusal(WW, RW) {
        var MW;
        let wW = function(WW) {
          if (WW.byteLength < 32) return "(no reason)";
          const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength),
            MW = Math.min(RW.getUint32(28, !0), WW.byteLength - 28 - 4);
          return (new TextDecoder).decode(WW.subarray(32, 32 + MW)).slice(0, 200)
        }(RW);
        !this.refusals.has(wW) && this.refusals.size >= 16 && (wW = "(other reasons)");
        const CW = (null !== (MW = this.refusals.get(wW)) && void 0 !== MW ? MW : 0) + 1;
        this.refusals.set(wW, CW), (0, Iw.u)(CW) && console.warn(`[bloxd-wasm-client] meshing worker ${WW} refused a chunk (${CW} so far for this reason): ${wW}`)
      }
      logHeapRefusal(WW) {
        this.heapRefusals++, (0, Iw.u)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${WW} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(WW, RW, MW) {
        const wW = this.slots[WW];
        if (wW.gone = !0, wW.goneFor = {
            why: RW,
            failure: MW
          }, console.warn(`[bloxd-wasm-client] meshing worker ${WW} ${RW}: giving up on it`), this.slots.every((WW => WW.gone))) {
          this.stop();
          const WW = new Set(this.slots.map((WW => {
              var RW;
              return null === (RW = WW.goneFor) || void 0 === RW ? void 0 : RW.failure
            }))),
            RW = this.slots.map(((WW, RW) => {
              var MW, wW;
              return `worker ${RW} ${null!==(MW=null===(wW=WW.goneFor)||void 0===wW?void 0:wW.why)&&void 0!==MW?MW:"went"}`
            }));
          this.options.fail(1 === WW.size ? MW : `no meshing worker is left (${RW.join(", ")})`)
        }
      }
      lose(WW, RW, MW) {
        var wW;
        const CW = this.slots[WW];
        console.warn(`[bloxd-wasm-client] meshing worker ${WW} was lost: ${RW}`), fw(CW), null === (wW = CW.worker) || void 0 === wW || wW.terminate(), CW.worker = null, CW.heapRetries = 0, this.stopped || (MW ? MW() : this.options.onWorkerLost(RW), CW.started && (CW.started = !1, this.options.write(0, XR.rd.WorkerLost, 0, WW, lw)), this.start(WW))
      }
      buffer(WW) {
        var RW;
        return null !== (RW = this.pooled(WW)) && void 0 !== RW ? RW : new ArrayBuffer(Math.max(16384, WW))
      }
      pooled(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = -1;
        for (let CW = 0; CW < this.pool.length; CW++) {
          const wW = this.pool[CW].byteLength;
          wW >= WW && (MW < 0 || (RW ? wW > this.pool[MW].byteLength : wW < this.pool[MW].byteLength)) && (MW = CW)
        }
        if (MW < 0) return null;
        const wW = this.pool[MW];
        return this.pool[MW] = this.pool[this.pool.length - 1], this.pool.pop(), wW
      }
      recycle(WW) {
        this.pool.length < 4 * this.slots.length && WW.byteLength > 0 && WW.byteLength <= 1048576 && this.pool.push(WW)
      }
    }

    function fw(WW) {
      var RW;
      null === (RW = WW.watch) || void 0 === RW || RW.cancel(), WW.watch = null
    }
    const Qw = 1024,
      rC = 1048576,
      cC = 65536,
      Xw = 20971520,
      jC = 42991616,
      kC = 6815744,
      aC = 135680;

    function sw(WW) {
      const RW = kC + (0, KR.m)(WW) + WW * aC;
      return Math.ceil((2 * jC + RW) / cC) * cC
    }
    const dw = sw(KR.d),
      pw = {
        targetBytes: 41943040,
        leastBytes: Xw
      },
      hw = {
        targetBytes: 37748736,
        leastBytes: Xw
      };
    const Uw = 2 * cC;

    function Ew(WW, RW, MW) {
      return WW + RW + Uw > (null !== MW && void 0 !== MW ? MW : dw)
    }
    const Vw = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? WW => {
        requestIdleCallback(WW)
      } : null
    };
    class mC {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vw;
        this.memory = WW, this.readPeakStoredChunks = RW, this.onError = MW, this.clock = wW, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.meshWorkers = [], this.worldgen = null, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null
      }
      setShed(WW, RW, MW) {
        this.shedding = {
          shed: WW,
          Mw: RW,
          readDistanceInUse: MW
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setCeiling(WW) {
        this.ceilingBytes = WW, this.call((() => {
          this.memory.setCeiling(WW)
        }), void 0)
      }
      ceilingMayRefuse(WW) {
        return Ew(this.memory.memoryBytes(), WW, this.ceilingBytes)
      }
      reserveAtJoin(WW) {
        let {
          targetBytes: RW,
          leastBytes: MW
        } = WW;
        const wW = this.memory.memoryBytes(),
          CW = wW + MW,
          zR = Math.max(RW + (this.ballastOn() ? 5242880 : 0), CW),
          AW = this.call((() => this.memory.reserveUpFront(zR) ? "target" : zR > CW && this.memory.reserveUpFront(CW) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== AW) {
          const WW = "least" === AW ? `took ${CW} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${zR} bytes was refused at ${wW} bytes; ${WW}`)
        }
        return this.joinReserveTaken = AW, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== AW && this.refused("joinReserve"), "none" !== AW
      }
      afterFrame() {
        if (this.stopped) return;
        const WW = this.clock.now(),
          RW = null !== this.stepsHeldUntil && WW >= this.stepsHeldUntil;
        if (RW && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.refused("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && WW >= this.ballastCheckAt && (this.takeBallast(WW), this.stopped)) return;
        const MW = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          wW = RW && "now" === MW ? "none" : MW,
          {
            requestIdle: CW
          } = this.clock;
        "now" === wW || null !== this.pendingSince && WW - this.pendingSince >= 500 ? this.step() : "idle" === wW && null === this.pendingSince && (null === CW ? this.step() : (this.pendingSince = WW, CW((() => {
          null !== this.pendingSince && this.step()
        })))), WW - this.statsAt >= 1e3 && (this.statsAt = WW, this.refreshStats())
      }
      refreshStats() {
        this.call((() => {
          var WW;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (WW = this.shedding.readDistanceInUse()) && void 0 !== WW ? WW : this.distanceInUse)
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(WW, RW) {
        this.meshWorkers[WW] = RW
      }
      noteWorldgen(WW) {
        this.worldgen = WW
      }
      details() {
        const WW = {
          wasmMemoryNow: `${xC(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (WW.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (WW.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const RW = this.main;
        if (RW) {
          WW.wasmMemoryMain = vC(RW);
          const MW = Math.max(0, RW.peakLiveBytes - this.ballastPeakBytes),
            wW = 0 === this.peakStoredChunks ? "-" : (MW / this.peakStoredChunks / Qw).toFixed(1);
          WW.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${wW} KiB`
        }
        return this.meshWorkers.forEach(((RW, MW) => {
          RW && (WW[`wasmMemoryMesh${MW}`] = vC(RW))
        })), this.worldgen && (WW.wasmMemoryWorldgen = vC(this.worldgen)), WW
      }
      pageKillSnapshot() {
        var WW, RW, MW, wW;
        let CW = 0,
          zR = null !== (WW = null === (RW = this.main) || void 0 === RW ? void 0 : RW.reservesRefused) && void 0 !== WW ? WW : 0,
          AW = null !== (MW = null === (wW = this.main) || void 0 === wW ? void 0 : wW.allocationsRefused) && void 0 !== MW ? MW : 0;
        for (const bR of [...this.meshWorkers, this.worldgen]) bR && (CW += bR.memoryBytes, zR += bR.reservesRefused, AW += bR.allocationsRefused);
        return {
          wasmMainMiB: Number(xC(this.memory.memoryBytes())),
          wasmWorkersMiB: Number(xC(CW)),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: zR,
          refusedAllocations: AW,
          sheds: this.sheds
        }
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(2097152)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.refused("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(WW) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = WW + 1e3;
        const RW = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, RW)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(WW) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${WW}: frames grow on demand from here`)
      }
      refused(WW) {
        const {
          shedding: RW
        } = this;
        if (null === RW) return;
        this.pendingSince = null;
        const MW = this.call((() => RW.shed(WW)), null);
        this.stopped || (null !== MW ? (this.sheds++, this.shedCap = MW, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), RW.Mw(WW, this.sheds, this.details())) : this.stopSteps("nothing is left to shed"))
      }
      call(WW, RW) {
        if (this.stopped) return RW;
        try {
          return WW()
        } catch (MW) {
          return this.stop(), this.onError(MW), RW
        }
      }
    }

    function xC(WW) {
      return (WW / rC).toFixed(1)
    }

    function vC(WW) {
      const RW = (WW, RW) => `${WW}/${xC(RW)}`;
      return `memory ${xC(WW.memoryBytes)} live ${xC(WW.liveBytes)} peak ${xC(WW.peakLiveBytes)} unused ${xC(WW.unusedBytes)} ceiling ${xC(WW.ceilingBytes)} MiB; grows upFront ${RW(WW.grows.upFront,WW.grownBytes.upFront)} ahead ${RW(WW.grows.ahead,WW.grownBytes.ahead)} inFrame ${RW(WW.grows.onDemandInFrame,WW.grownBytes.onDemandInFrame)} other ${RW(WW.grows.onDemand,WW.grownBytes.onDemand)}; refused reserves ${WW.reservesRefused} allocations ${WW.allocationsRefused}`
    }
    var Kw = MW(38427),
      uw = MW(38493),
      Ow = MW(38500),
      nw = MW(38443);

    function Gw(WW) {
      const RW = new Uint8Array(WW.length >> 2);
      for (let MW = 0; MW < RW.length; MW++) RW[MW] = WW[4 * MW + 3];
      return RW
    }
    async function Lw(WW) {
      const RW = await (0, Ow.k)(WW);
      try {
        const {
          width: WW,
          height: MW,
          pixels: wW
        } = (0, nw.t)(RW);
        return {
          width: WW,
          height: MW,
          alpha: Gw(wW)
        }
      } finally {
        RW.close()
      }
    }
    class Hw {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Lw;
        this.session = WW, this.sources = RW, this.warn = MW, this.load = wW, this.nextPoll = 0, this.Qw = !1, this.warned = new Set
      }
      drain(WW) {
        if (WW < this.nextPoll) return;
        this.nextPoll = WW + 250;
        const RW = this.session.sunShadowWantedTextures();
        if (RW)
          for (let MW = 0; MW + 1 < RW.length; MW += 2) this.hand(RW[MW], RW[MW + 1]);
        for (const MW of this.session.takeSunShadowWarnings()) this.warn(MW)
      }
      dispose() {
        this.Qw = !0
      }
      async hand(WW, RW) {
        var MW, wW, CW, zR, AW;
        let bR, yR = null;
        try {
          if (yR = await this.sources.blockImageUrl(WW), null === yR) throw new Error(`block image ${WW} has no URL`);
          bR = await this.load(yR)
        } catch (eW) {
          var NW;
          const RW = null !== (NW = yR) && void 0 !== NW ? NW : `block image ${WW}`;
          this.warned.has(RW) || (this.warned.add(RW), this.warn(`sun shadow plane texture ${RW} didn't load: its blocks cast no shadow`, eW))
        }
        this.Qw || this.session.setSunShadowTexture(WW, RW, null !== (MW = null === (wW = bR) || void 0 === wW ? void 0 : wW.width) && void 0 !== MW ? MW : 0, null !== (CW = null === (zR = bR) || void 0 === zR ? void 0 : zR.height) && void 0 !== CW ? CW : 0, null === (AW = bR) || void 0 === AW ? void 0 : AW.alpha)
      }
    }
    var Dw = MW(38432),
      qC = MW(38503),
      Zw = MW(38512);
    const Sw = new class {
      constructor(WW) {
        this.pack = WW, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, WW.onWanted((() => {
          this.release()
        }))
      }
      setGame(WW) {
        void 0 !== WW || null === this.hold ? (this.hold = null, this.endedWhileHeld = !1, this.game = WW, this.update()) : this.endedWhileHeld = !0
      }
      unwantedLeave(WW) {
        WW && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(WW) {
        null !== WW && WW === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const WW = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, WW && this.setGame(void 0)
      }
      setSettled(WW) {
        this.settle = WW, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Zw.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(qC.h);
    var WC = MW(38437),
      RC = MW(38440),
      MC = MW(35034),
      wC = MW(8076),
      CC = MW(38519);
    const zz = 8192,
      AC = new Set;
    const bz = new Set([...wC.b, "sceneDownload"]);
    var yz = MW(38326),
      NC = MW(38141);
    const eC = new Uint8Array(0);
    let BC = null;

    function tz(WW) {
      return {
        aux: XR.Ib.AdStart | (WW ? XR.Ib.PreventMovement : 0),
        payload: eC
      }
    }
    var TC = MW(2178);
    const gz = "__bloxdSceneCapture";
    var iz = MW(1511),
      YC = MW(2209);
    let JC = null,
      PC = null,
      IC = !1;

    function oC() {
      JC ??= performance.now()
    }
    var lC = MW(38528);
    class FC {
      constructor(WW) {
        var RW, MW;
        this.host = WW, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((WW => {
          this.landRequest = WW
        })), this.follow = WW => {
          let RW = WW;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const WW = null === this.requested && null !== RW;
            var MW;
            WW && (null === (MW = RW) || void 0 === MW || MW(null));
            const wW = await this.landing;
            var CW;
            null === wW && WW || (null === (CW = RW) || void 0 === CW || CW(wW))
          })), () => {
            RW = null
          }
        }, this.startRead = (MW = WW.store, MW.keys().then((WW => ({
          own: WW.includes(yw.e),
          oneShot: WW.includes(yw.g)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((WW => {
          let {
            own: RW,
            oneShot: MW
          } = WW;
          this.oneShotStored = MW, (RW || MW) && this.request()
        })), this.channel = (null !== (RW = WW.openChannel) && void 0 !== RW ? RW : yw.w)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var WW;
        if (null !== this.requested) return this.requested;
        null === (WW = this.channel) || void 0 === WW || WW.close(), this.channel = null;
        const RW = this.oneShotStored;
        return this.requested = function(WW, RW, MW) {
          return new Promise((RW => {
            RW(WW())
          })).catch((WW => (null !== RW && (0, yw.s)(RW), MW(WW), null)))
        }((() => this.host.load(RW).then((WW => (WW.setGamePackConfirm(this.confirm), this.landed = WW, WW)))), RW ? this.host.store : null, this.host.Mw), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var WW;
          return null !== (WW = this.requested) && void 0 !== WW ? WW : null
        }))
      }
      setGamePackConfirm(WW) {
        var RW;
        this.confirm = WW, null === (RW = this.landed) || void 0 === RW || RW.setGamePackConfirm(WW)
      }
    }
    var fC = MW(2374);
    const QC = new Uint8Array(0);
    class rz {
      constructor(WW) {
        this.options = WW, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.mM = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== WW.module ? WW.write(0, XR.rd.WorldgenStarted, 0, QC) : this.giveUp()
      }
      take(WW, RW) {
        if (!(this.gone || null === this.worker && null === this.mM))
          if (WW === XR.sd.WorldgenSeed) {
            const WW = 0 === RW.byteLength ? null : this.options.decodeSettings(RW);
            null === WW || function(WW, RW) {
              if ((null === WW || void 0 === WW ? void 0 : WW.byteLength) !== RW.byteLength) return !1;
              for (let MW = 0; MW < WW.byteLength; MW++)
                if (WW[MW] !== RW[MW]) return !1;
              return !0
            }(this.seed, RW) || (this.seed = RW.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: WW
            }, []), null !== WW && this.load()
          } else if (WW === XR.sd.Generate) {
          var MW;
          const WW = new DataView(RW.buffer, RW.byteOffset, XR.md),
            wW = null !== (MW = this.pool.pop()) && void 0 !== MW ? MW : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: WW.getUint32(0, !0),
            x: WW.getInt32(4, !0),
            y: WW.getInt32(8, !0),
            z: WW.getInt32(12, !0),
            bytes: wW
          }, [wW])
        }
      }
      stop() {
        var WW;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (WW = this.worker) || void 0 === WW || WW.terminate(), this.worker = null
      }
      post(WW, RW) {
        var MW;
        null !== this.mM ? this.mM.push({
          message: WW,
          transfer: RW
        }) : null === (MW = this.worker) || void 0 === MW || MW.postMessage(WW, RW)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((WW => {
          this.createWorker = WW, this.start()
        }), (WW => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(WW))
        })))
      }
      start() {
        const {
          module: WW
        } = this.options, RW = this.createWorker;
        if (this.gone || null === WW || null === RW) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let MW;
        this.startsWithoutResult++;
        try {
          MW = RW()
        } catch (CW) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", CW), this.lastLoss = `it did not start (${String(CW)})`, void this.start()
        }
        this.worker = MW, MW.onmessage = WW => {
          let {
            data: RW
          } = WW;
          this.worker === MW && this.onReply(MW, RW)
        }, MW.onerror = WW => {
          WW.preventDefault(), this.worker === MW && this.lose(WW.message || "its script failed")
        };
        try {
          MW.postMessage({
            type: "start",
            module: WW,
            dw: wW.c.dw
          })
        } catch (CW) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", CW), this.lastLoss = `it could not be sent the module (${String(CW)})`, MW.terminate(), this.worker = null, void this.start()
        }
        this.watch = new ow.h(ow.g, (WW => {
          this.lose((0, ow.l)(WW), (() => {
            this.options.onStartTimeout(WW)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(WW, RW) {
        switch (RW.type) {
          case "started": {
            this.endWatch();
            const RW = this.mM;
            if (null === RW) {
              this.options.write(0, XR.rd.WorldgenStarted, 0, QC);
              break
            }
            this.mM = null;
            for (const {
                message: MW,
                transfer: wW
              }
              of RW) WW.postMessage(MW, wW);
            break
          }
          case "lost":
            this.lose(RW.reason);
            break;
          case "memory":
            var MW, wW;
            null === (MW = (wW = this.options).onMemoryStats) || void 0 === MW || MW.call(wW, RW.stats);
            break;
          case "result":
            RW.status !== XR.kb.Trapped && (this.startsWithoutResult = 0), this.options.write(RW.ticket, XR.rd.WorldgenResult, RW.status, new Uint8Array(RW.bytes, 0, RW.len)), this.recycle(RW.bytes), RW.spare && this.recycle(RW.spare)
        }
      }
      lose(WW, RW) {
        var MW;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${WW}`), this.lastLoss = WW, this.endWatch(), null === (MW = this.worker) || void 0 === MW || MW.terminate(), this.worker = null, this.gone || (RW ? RW() : this.options.onWorkerLost(WW), this.dropHeld(), this.mM = null, this.options.write(0, XR.rd.WorldgenLost, XR.vd.Lost, QC), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, XR.rd.WorldgenLost, XR.vd.Gone, QC)
      }
      endWatch() {
        var WW;
        null === (WW = this.watch) || void 0 === WW || WW.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.mM) {
          for (const {
              message: WW
            }
            of this.mM) "generate" === WW.type && this.recycle(WW.bytes);
          this.mM.length = 0
        }
      }
      recycle(WW) {
        this.pool.length < 16 && WW.byteLength > 0 && WW.byteLength <= 16384 && this.pool.push(WW)
      }
    }

    function cz(WW) {
      return "string" !== typeof WW || 2 !== WW.length && ":" !== WW[2] ? null : WW[0] + WW[1]
    }

    function XC(WW) {
      const RW = cz(WW);
      return "op" === RW || "ep" === RW || "wi" === RW || "pp" === RW || "fp:call" === WW || "fp:t" === WW
    }

    function jz(WW) {
      if ("string" !== typeof WW) return !1;
      return "o" === WW[0] && "p" === WW[1] && (2 === WW.length || ":" === WW[2]) || "fp:call" === WW || "2" === WW || "t" === WW || "a" === WW
    }
    var kz = MW(2816),
      az = MW(38536),
      sC = MW(38419);
    const dC = (WW, RW) => WW.includes(RW),
      pC = WW => {
        try {
          return WW()
        } catch {
          return !1
        }
      },
      hC = -1,
      UC = WW => {
        try {
          return WW()
        } catch {
          return hC
        }
      };

    function EC(WW, RW) {
      return {
        probe: (MW, wW, CW) => {
          try {
            return ((MW, wW, CW) => {
              switch (MW) {
                case XR.Yb.StackCheck:
                  return RW.stackCheck() ? 1 : 0;
                case XR.Yb.ConfirmMesh:
                  return RW.confirmMesh();
                case XR.Yb.IndexPassReplaced:
                  return RW.indexPassReplaced() ? 1 : 0;
                case XR.Yb.ProductSubChanged:
                  return RW.productSubChanged() ? 1 : 0;
                case XR.Yb.RenderStatus:
                  return RW.yC();
                case XR.Yb.Held:
                  return RW.mM();
                case XR.Yb.PlayerKilledSubs:
                  return RW.playerKilledSubs();
                case XR.Z: {
                  const MW = RW.getComplete();
                  return null === MW ? 0 : (0, Nw.i)(Nw.p, Nw.U, [MW, new Nw.b((0, Nw.y)(WW()), wW, CW)]).written
                }
                default:
                  return 0
              }
            })(MW, wW, CW)
          } catch {
            return XR.Ob
          }
        }
      }
    }
    class VC {
      constructor(WW) {
        this.write = WW, this.flagsWritten = 0, this.written = (0, Nw.l)(null)
      }
      WR(WW) {
        let {
          flags: RW,
          values: MW
        } = WW;
        for (let wW = 0; wW < MW.length; wW++) this.value(MW[wW][0], MW[wW][1]);
        this.setFlags(RW | XR.e.Ready)
      }
      value(WW, RW) {
        this.written[WW] !== RW && this.write(WW, RW, 0) && (this.written[WW] = RW)
      }
      setFlags(WW) {
        const RW = WW & ~this.flagsWritten;
        0 !== RW && this.write(XR.h.Flags, RW, RW) && (this.flagsWritten |= RW)
      }
      originStackHit() {
        return this.write(XR.h.Flags, XR.e.OriginStackHit, XR.e.OriginStackHit)
      }
    }
    const mz = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      xz = 1e3;

    function vz(WW, RW) {
      const MW = new VC(RW);
      let wW = !1;
      MW.WR(WW.WR());
      const CW = (0, Nw.O)((() => {
          MW.WR(WW.WR())
        }), xz),
        zR = () => {
          WW.checks.stackCheck() && (wW = !0)
        };
      return (0, az.f)(zR), {
        onInput: RW => {
          (function(WW) {
            switch (WW) {
              case XR.jb.KeyDown:
              case XR.jb.KeyUp:
              case XR.jb.MouseDown:
              case XR.jb.MouseUp:
              case XR.jb.Wheel:
              case XR.jb.TouchStart:
              case XR.jb.TouchEnd:
              case XR.jb.TouchButton:
                return !0;
              default:
                return !1
            }
          })(RW) && WW.checks.stackCheck() && (wW = !0)
        },
        onSend: zR,
        beforeFrame: () => {
          wW && MW.originStackHit() && (wW = !1)
        },
        onEvent: RW => {
          const wW = WW.checkEvent(RW);
          MW.value(XR.h.ProbeUsedProp, WW.usedProp()), 0 !== wW && MW.setFlags(wW)
        },
        stop: () => {
          (0, Nw.R)(CW), (0, az.d)(zR)
        }
      }
    }
    let KC;
    const uC = ["length", 0, 1, 2, "g", 45, "c", 4, 8, 5, "b", void 0, null, 3, "m", "c3RhY2", "cw==", 60, "s=", 1e5, !1, "string", !0, "d", 139, 209, 22, 225, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", 99, 16, 92, "BjG_6K", 512, 53, "012345", 15, 221, 247, 198, 6, 1023, 63, 128, 12, "a", 255, 24, 32, 7, 18, 10, 19, 64, 30, 190, 216, 65535, 206, 185, 234, 20, "e", "l", 121, 78, "P", "=", ";", 164, 130, 14, "q:function()", "{var ad=ad=>", "b(ad-29);if(", "!T.r[(typeof", " ab==ad(123)", "?", 93, 256, 87, "(c=ak(", "<~F$VU", "'9f)~>", "<&85dB", "PL-mod", "ule/fr", "om", 98, 169, 195, 171, "A", "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "Serialization error for data '", "': ", "functi", "on", "i", "protot", "ype", "decode", "I=", "eTR5bm", "o", "t", "r", "w", "$c", "s", "J", "chEven", "dispat", "now", 74, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", 242, "v", "q", "k", "None", 11, 62, 13, 240, "En", "h", "tOverw", "ritten", "plete", "p"];

    function OC() {}

    function nC() {
      nC = function() {}
    }
    KC = function(WW) {
      let RW = arguments[uC[0]] > uC[2] && arguments[uC[2]] !== uC[11] ? arguments[uC[2]] : () => uC[12],
        MW = arguments[uC[0]] > uC[3] && arguments[uC[3]] !== uC[11] ? arguments[uC[3]] : uC[12],
        wW = arguments[uC[0]] > uC[13] && arguments[uC[13]] !== uC[11] ? arguments[uC[13]] : "";
      const CW = window,
        zR = (0, Nw[uC[14]])("RXJyb3" + uC[110]),
        AW = (0, Nw[uC[14]])(uC[15] + uC[18]),
        bR = (0, Nw[uC[14]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        NW = (0, Nw[uC[14]])(uC[15] + "tUcmFjZUxpbWl0"),
        eW = (0, Nw[uC[14]])("bmF0aXZl"),
        BW = [(0, Nw[uC[14]])("bWFpbi5qcw=="), (0, Nw[uC[14]])("aW5kZXguanM="), (0, Nw[uC[14]])("dXNlcnNjcmlwdA=="), (0, Nw[uC[14]])("Y29udGVudC5q" + uC[16]), (0, Nw[uC[14]])("b3B0aW9ucy5q" + uC[16]), (0, Nw[uC[14]])("cG9wdXAuanM="), (0, Nw[uC[14]])("LnVzZXIuanM="), (0, Nw[uC[14]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        tR = WW => {
          const RW = CW[zR],
            MW = RW;
          MW[NW] < uC[19] && (MW[NW] = uC[19]);
          const wW = "string" === typeof(tR = (new RW)[AW]) ? tR : `${tR}`,
            yR = {},
            eW = MW[bR];
          var tR;
          if (typeof eW === uC[104] + uC[105]) {
            "oNcLa6y" in OC && (module.exports = async (WW = () => {
              throw new Error(uC[28])
            }) => {
              const RW = new Set(process.argv.slice(uC[3]));
              if (!RW.has(uC[29])) {
                if (RW.size !== uC[2]) return uC[20];
                if (!RW.has(uC[30])) return uC[20]
              }
              return await (async () => void 0 === await WW() ? uC[34] + uC[35] : "")(), uC[22]
            }), (0, Nw[uC[106]])(eW, RW, [yR])
          }
          const TW = yR[AW],
            gR = WW ? BW[uC[0]] : BW[uC[0]] - uC[2];
          for (let iR = uC[1]; iR < gR; iR++)
            if (dC(wW, BW[iR]) || typeof TW === uC[21] && dC(TW, BW[iR])) {
              function YW(...WW) {
                WW[uC[0]] = uC[1]
              }
              return "Fa5Ac4R" in OC && YW(), uC[22]
            } return uC[20]
        },
        TW = (...WW) => {
          WW[uC[0]] = uC[2];
          try {
            function RW(...WW) {
              nC(WW[uC[0]] = uC[1], WW[uC[10]] = function(...WW) {
                for (nC(WW[uC[0]] = uC[2], WW[uC[24]] = WW[uC[1]].length, WW[uC[10]] = [], WW[uC[26]] = uC[1]), WW[uC[23]] = uC[1]; WW[uC[23]] < WW[uC[24]]; WW[uC[23]]++) WW[uC[10]].push(WW[uC[23]] !== uC[1] && WW[uC[1]][WW[uC[23]]] > WW[uC[1]][WW[uC[23]] - uC[2]] ? WW[uC[10]][WW[uC[23]] - uC[2]] + uC[2] : uC[2]);
                for (WW[-uC[25]] = WW[uC[24]] - uC[2]; WW[-uC[25]] >= uC[1]; WW[-uC[25]]--) WW[-uC[25]] !== WW[uC[24]] - uC[2] && WW[uC[1]][WW[-uC[25]]] > WW[uC[1]][WW[-uC[25]] + uC[2]] && (WW[uC[10]][WW[-uC[25]]] = Math.max(WW[uC[10]][WW[-uC[25]]], WW[uC[10]][WW[-uC[25]] + uC[2]] + uC[2])), WW[uC[26]] += WW[uC[10]][WW[-uC[25]]];
                return WW[uC[26]]
              }, console.log(WW[uC[10]]))
            }
            return "Iedldv" in OC && RW(), WW[uC[1]]()
          } catch {
            function MW(...WW) {
              nC(WW[uC[0]] = uC[1], WW[uC[27]] = uC[88] + uC[89] + uC[90] + uC[91] + uC[92] + uC[93] + uC[94], WW[uC[2]] = uC[79] + uC[80] + uC[81] + uC[82] + uC[83] + uC[84], WW[uC[4]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", WW[uC[27]].match(WW[uC[2]] + WW[uC[4]]))
            }
            return "pV_z2D" in OC && MW(), uC[22]
          }
        };
      let gR = uC[20];
      const iR = () => {
          if (!gR && (0, Nw[uC[112]])()) {
            "WuNK0_" + uC[73] in OC && (module.exports = async (WW = () => {
              throw new Error(uC[28])
            }) => {
              const RW = new Set(process.argv.slice(uC[3]));
              if (!RW.has(uC[29])) {
                if (RW.size !== uC[2]) return uC[20];
                if (!RW.has(uC[30])) return uC[20]
              }
              return await (async () => void 0 === await WW() ? uC[34] + uC[35] : "")(), uC[22]
            }), gR = uC[22]
          }
        },
        YW = (...WW) => {
          WW[uC[0]] = uC[2], "Gx20MZC" in OC && function(...WW) {
            nC(WW[uC[0]] = uC[1], WW[uC[65]] = function(...WW) {
              function RW(WW) {
                return bR(zR(eW(WW)))
              }

              function MW(...WW) {
                return WW[uC[0]] = uC[3], bR(AW(eW(WW[uC[1]]), eW(WW[uC[2]])))
              }

              function wW(...WW) {
                return WW[uC[0]] = uC[3], yR(AW(eW(WW[uC[1]]), eW(WW[uC[2]])))
              }

              function CW(...WW) {
                return WW[uC[0]] = uC[13], NW(AW(eW(WW[uC[1]]), eW(WW[uC[2]])), WW[uC[3]])
              }

              function zR(...WW) {
                return WW[uC[0]] = uC[2], tR(lW(BW(WW[uC[1]]), WW[uC[1]].length * uC[8]))
              }

              function AW(...WW) {
                nC(WW[uC[0]] = uC[3], WW[-uC[36]] = BW(WW[uC[1]])), WW[-uC[36]].length > uC[37] && (WW[-uC[36]] = lW(WW[-uC[36]], WW[uC[1]].length * uC[8]));
                var RW = Array(uC[37]),
                  MW = Array(uC[37]);
                for (WW[uC[38]] = uC[1]; WW[uC[38]] < uC[37]; WW[uC[38]]++) nC(RW[WW[uC[38]]] = 909522486 ^ WW[-uC[36]][WW[uC[38]]], MW[WW[uC[38]]] = 1549556828 ^ WW[-uC[36]][WW[uC[38]]]);
                return WW[uC[6]] = lW(RW.concat(BW(WW[uC[2]])), uC[40] + WW[uC[2]].length * uC[8]), tR(lW(MW.concat(WW[uC[6]]), function(...WW) {
                  if (WW[uC[0]] = uC[13], WW[uC[1]] === uC[39] + uC[4]) return WW[uC[2]] + WW[uC[3]]
                }(uC[39] + uC[4], uC[40], uC[86])))
              }

              function bR(...RW) {
                RW[uC[0]] = uC[2];
                try {
                  WW[uC[41]]
                } catch (MW) {
                  WW[uC[41]] = uC[1]
                }
                for (nC(RW[uC[2]] = WW[uC[41]] ? uC[42] + "6789ABCDEF" : uC[42] + "6789abcdef", RW[uC[3]] = "", RW[uC[13]] = uC[11]), RW[uC[7]] = uC[1]; RW[uC[7]] < RW[uC[1]].length; RW[uC[7]]++) nC(RW[uC[13]] = RW[uC[1]].charCodeAt(RW[uC[7]]), RW[uC[3]] += RW[uC[2]].charAt(RW[uC[13]] >>> uC[7] & uC[43]) + RW[uC[2]].charAt(RW[uC[13]] & uC[43]));
                return RW[uC[3]]
              }

              function yR(...RW) {
                RW[uC[0]] = uC[2];
                try {
                  WW[uC[2]]
                } catch (MW) {
                  WW[uC[2]] = ""
                }
                for (nC(RW[uC[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", RW[uC[45]] = "", RW[uC[13]] = RW[uC[1]].length), RW[uC[7]] = uC[1]; RW[uC[7]] < RW[uC[13]]; RW[uC[7]] += uC[13])
                  for (RW[uC[46]] = RW[uC[1]].charCodeAt(RW[uC[7]]) << uC[37] | (RW[uC[7]] + uC[2] < RW[uC[13]] ? RW[uC[1]].charCodeAt(RW[uC[7]] + uC[2]) << uC[8] : uC[1]) | (RW[uC[7]] + uC[3] < RW[uC[13]] ? RW[uC[1]].charCodeAt(RW[uC[7]] + uC[3]) : uC[1]), RW[uC[44]] = uC[1]; RW[uC[44]] < uC[7]; RW[uC[44]]++) RW[uC[7]] * uC[8] + RW[uC[44]] * uC[47] > RW[uC[1]].length * uC[8] ? RW[uC[45]] += WW[uC[2]] : RW[uC[45]] += RW[uC[2]].charAt(RW[uC[46]] >>> uC[47] * (uC[13] - RW[uC[44]]) & uC[49]);
                return RW[uC[45]]
              }

              function NW(...WW) {
                var RW, MW, wW, CW;
                for (nC(WW[uC[0]] = uC[3], WW[uC[3]] = WW[uC[2]].length, WW[uC[13]] = Array()), WW[uC[7]] = Array(Math.ceil(WW[uC[1]].length / uC[3])), RW = uC[1]; RW < WW[uC[7]].length; RW++) WW[uC[7]][RW] = WW[uC[1]].charCodeAt(RW * uC[3]) << uC[8] | WW[uC[1]].charCodeAt(RW * uC[3] + uC[2]);
                for (; WW[uC[7]].length > uC[1];) {
                  for (nC(CW = Array(), wW = uC[1]), RW = uC[1]; RW < WW[uC[7]].length; RW++) nC(wW = (wW << uC[37]) + WW[uC[7]][RW], MW = Math.floor(wW / WW[uC[3]]), wW -= MW * WW[uC[3]]), (CW.length > uC[1] || MW > uC[1]) && (CW[CW.length] = MW);
                  nC(WW[uC[13]][WW[uC[13]].length] = wW, WW[uC[7]] = CW)
                }
                for (WW[uC[9]] = "", RW = WW[uC[13]].length - uC[2]; RW >= uC[1]; RW--) WW[uC[9]] += WW[uC[2]].charAt(WW[uC[13]][RW]);
                for (WW[uC[47]] = Math.ceil(WW[uC[1]].length * uC[8] / (Math.log(WW[uC[2]].length) / Math.log(uC[3]))), RW = WW[uC[9]].length; RW < WW[uC[47]]; RW++) WW[uC[9]] = WW[uC[2]][uC[1]] + WW[uC[9]];
                return WW[uC[9]]
              }

              function eW(...WW) {
                var RW, MW;
                for (nC(WW[uC[0]] = uC[2], WW[uC[2]] = "", WW[uC[3]] = -uC[2]); ++WW[uC[3]] < WW[uC[1]].length;) nC(RW = WW[uC[1]].charCodeAt(WW[uC[3]]), MW = WW[uC[3]] + uC[2] < WW[uC[1]].length ? WW[uC[1]].charCodeAt(WW[uC[3]] + uC[2]) : uC[1]), 55296 <= RW && RW <= 56319 && 56320 <= MW && MW <= 57343 && nC(RW = 65536 + ((RW & uC[48]) << uC[58]) + (MW & uC[48]), WW[uC[3]]++), RW <= 127 ? WW[uC[2]] += String.fromCharCode(RW) : RW <= 2047 ? WW[uC[2]] += String.fromCharCode(192 | RW >>> uC[47] & 31, uC[50] | RW & uC[49]) : RW <= uC[64] ? WW[uC[2]] += String.fromCharCode(224 | RW >>> uC[51] & uC[43], uC[50] | RW >>> uC[47] & uC[49], uC[50] | RW & uC[49]) : RW <= 2097151 && (WW[uC[2]] += String.fromCharCode(uC[139] | RW >>> uC[57] & uC[56], uC[50] | RW >>> uC[51] & uC[49], uC[50] | RW >>> uC[47] & uC[49], uC[50] | RW & uC[49]));
                return WW[uC[2]]
              }

              function BW(...WW) {
                for (nC(WW[uC[0]] = uC[2], WW[uC[2]] = Array(WW[uC[1]].length >> uC[3])), WW[uC[10]] = uC[1]; WW[uC[10]] < WW[uC[2]].length; WW[uC[10]]++) WW[uC[2]][WW[uC[10]]] = uC[1];
                for (WW[uC[10]] = uC[1]; WW[uC[10]] < WW[uC[1]].length * uC[8]; WW[uC[10]] += uC[8]) WW[uC[2]][WW[uC[10]] >> uC[9]] |= (WW[uC[1]].charCodeAt(WW[uC[10]] / uC[8]) & uC[53]) << uC[54] - WW[uC[10]] % uC[55];
                return WW[uC[2]]
              }

              function tR(...WW) {
                for (nC(WW[uC[0]] = uC[2], WW[uC[52]] = ""), WW[uC[10]] = uC[1]; WW[uC[10]] < WW[uC[1]].length * uC[55]; WW[uC[10]] += uC[8]) WW[uC[52]] += String.fromCharCode(WW[uC[1]][WW[uC[10]] >> uC[9]] >>> uC[54] - WW[uC[10]] % uC[55] & uC[53]);
                return WW[uC[52]]
              }

              function TW(WW, RW) {
                return WW >>> RW | WW << uC[55] - RW
              }

              function gR(...WW) {
                return WW[uC[0]] = uC[3], WW[uC[1]] >>> WW[uC[2]]
              }

              function iR(...WW) {
                return WW[uC[0]] = uC[13], WW[uC[1]] & WW[uC[2]] ^ ~WW[uC[1]] & WW[uC[3]]
              }

              function YW(...WW) {
                return WW[uC[0]] = uC[13], WW[uC[1]] & WW[uC[2]] ^ WW[uC[1]] & WW[uC[3]] ^ WW[uC[2]] & WW[uC[3]]
              }

              function JW(...WW) {
                return WW[uC[0]] = uC[2], TW(WW[uC[1]], uC[3]) ^ TW(WW[uC[1]], uC[138]) ^ TW(WW[uC[1]], uC[26])
              }

              function PW(...WW) {
                return WW[uC[0]] = uC[2], TW(WW[uC[1]], uC[47]) ^ TW(WW[uC[1]], uC[136]) ^ TW(WW[uC[1]], 25)
              }

              function IW(WW) {
                return TW(WW, uC[56]) ^ TW(WW, uC[57]) ^ gR(WW, uC[13])
              }

              function oW(...WW) {
                return WW[uC[0]] = uC[2], TW(WW[uC[1]], 17) ^ TW(WW[uC[1]], uC[59]) ^ gR(WW[uC[1]], uC[58])
              }

              function lW(...RW) {
                var MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW;
                for (nC(RW[uC[0]] = uC[3], RW[uC[61]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), RW[uC[62]] = new Array(uC[60])), nC(RW[uC[1]][RW[uC[2]] >> uC[9]] |= uC[50] << uC[54] - RW[uC[2]] % uC[55], RW[uC[1]][(RW[uC[2]] + uC[60] >> 9 << uC[7]) + uC[43]] = RW[uC[2]]), eW = uC[1]; eW < RW[uC[1]].length; eW += uC[37]) {
                  for (nC(MW = RW[uC[61]][uC[1]], wW = RW[uC[61]][uC[2]], CW = RW[uC[61]][uC[3]], zR = RW[uC[61]][uC[13]], AW = RW[uC[61]][uC[7]], bR = RW[uC[61]][uC[9]], yR = RW[uC[61]][uC[47]], NW = RW[uC[61]][uC[56]]), BW = uC[1]; BW < uC[60]; BW++) nC(RW[uC[62]][BW] = BW < uC[37] ? RW[uC[1]][BW + eW] : FW(FW(FW(oW(RW[uC[62]][BW - uC[3]]), RW[uC[62]][BW - uC[56]]), IW(RW[uC[62]][BW - uC[43]])), RW[uC[62]][BW - uC[37]]), tR = FW(FW(FW(FW(NW, PW(AW)), iR(AW, bR, yR)), WW[uC[63]][BW]), RW[uC[62]][BW]), TW = FW(JW(MW), YW(MW, wW, CW)), NW = yR, yR = bR, bR = AW, AW = FW(zR, tR), zR = CW, CW = wW, wW = MW, MW = FW(tR, TW));
                  nC(RW[uC[61]][uC[1]] = FW(MW, RW[uC[61]][uC[1]]), RW[uC[61]][uC[2]] = FW(wW, RW[uC[61]][uC[2]]), RW[uC[61]][uC[3]] = FW(CW, RW[uC[61]][uC[3]]), RW[uC[61]][uC[13]] = FW(zR, RW[uC[61]][uC[13]]), RW[uC[61]][uC[7]] = FW(AW, RW[uC[61]][uC[7]]), RW[uC[61]][uC[9]] = FW(bR, RW[uC[61]][uC[9]]), RW[uC[61]][uC[47]] = FW(yR, RW[uC[61]][uC[47]]), RW[uC[61]][uC[56]] = FW(NW, RW[uC[61]][uC[56]]))
                }
                return RW[uC[61]]
              }

              function FW(...WW) {
                return nC(WW[uC[0]] = uC[3], WW[uC[52]] = (WW[uC[1]] & uC[64]) + (WW[uC[2]] & uC[64]), WW[uC[13]] = (WW[uC[1]] >> uC[37]) + (WW[uC[2]] >> uC[37]) + (WW[uC[52]] >> uC[37])), WW[uC[13]] << uC[37] | WW[uC[52]] & uC[64]
              }
              return nC(WW[uC[0]] = uC[1], WW[uC[41]] = uC[1], WW[uC[2]] = ""), WW[uC[63]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: RW,
                b64: wW,
                any: CW,
                hex_hmac: MW,
                b64_hmac: wW,
                any_hmac: CW
              }
            }(), console.log(WW[uC[65]]))
          }();
          try {
            function RW(...WW) {
              var RW;
              nC(WW[uC[0]] = uC[1], RW = function(...WW) {
                nC(WW[uC[0]] = uC[2], this.aR = WW[uC[1]], this.length = uC[1], this.map = {}, this.head = uC[12], this.tail = uC[12])
              }, RW.prototype.get = function(...WW) {
                var RW;
                return nC(WW[uC[0]] = uC[2], RW = this.map[WW[uC[1]]]), RW ? (this.remove(RW), this.insert(RW.key, RW.val), RW.val) : -uC[2]
              }, RW.prototype.put = function(...WW) {
                nC(WW[uC[0]] = uC[3], this.map[WW[uC[1]]] ? (this.remove(this.map[WW[uC[1]]]), this.insert(WW[uC[1]], WW[uC[2]])) : this.length === this.aR ? (this.remove(this.head), this.insert(WW[uC[1]], WW[uC[2]])) : (this.insert(WW[uC[1]], WW[uC[2]]), this.length++))
              }, RW.prototype.remove = function(...WW) {
                nC(WW[uC[0]] = uC[2], WW[-uC[58]] = WW[uC[1]].prev, WW[uC[10]] = WW[uC[1]].next), WW[uC[10]] && (WW[uC[10]].prev = WW[-uC[58]]), WW[-uC[58]] && (WW[-uC[58]].next = WW[uC[10]]), this.head === WW[uC[1]] && (this.head = WW[uC[10]]), this.tail === WW[uC[1]] && (this.tail = WW[-uC[58]]), delete this.map[WW[uC[1]].key]
              }, RW.prototype.insert = function(...WW) {
                nC(WW[uC[0]] = uC[3], WW[uC[66]] = new List(WW[uC[1]], WW[uC[2]]), this.tail ? (this.tail.next = WW[uC[66]], WW[uC[66]].prev = this.tail, this.tail = WW[uC[66]]) : (this.tail = WW[uC[66]], this.head = WW[uC[66]]), this.map[WW[uC[1]]] = WW[uC[66]])
              }, console.log(RW))
            }
            return "c0UHs2" in OC && RW(), WW[uC[1]]()
          } catch {
            return uC[11]
          }
        },
        JW = (...WW) => {
          WW[uC[0]] = uC[2];
          try {
            return WW[uC[1]](), uC[22]
          } catch {
            function RW() {
              console.log((function(...WW) {
                for (nC(WW[uC[0]] = uC[2], WW[uC[52]] = uC[1], WW[uC[3]] = {}, WW[-uC[67]] = uC[1], WW[uC[7]] = uC[1], WW[uC[69]] = uC[1], WW[uC[47]] = WW[uC[1]].length), WW[uC[4]] = uC[1]; WW[uC[4]] < WW[uC[47]]; WW[uC[4]]++) {
                  for (nC(WW[uC[3]] = {}, WW[-uC[67]] = uC[1], WW[uC[7]] = uC[2]), WW[-uC[68]] = WW[uC[4]] + uC[2]; WW[-uC[68]] < WW[uC[47]]; WW[-uC[68]]++) WW[uC[1]][WW[uC[4]]].x !== WW[uC[1]][WW[-uC[68]]].x || WW[uC[1]][WW[uC[4]]].y !== WW[uC[1]][WW[-uC[68]]].y ? (WW[uC[1]][WW[uC[4]]].y === WW[uC[1]][WW[-uC[68]]].y ? WW[uC[69]] = Number.MAX_SAFE_INTEGER : WW[uC[69]] = (WW[uC[1]][WW[uC[4]]].x - WW[uC[1]][WW[-uC[68]]].x) / (WW[uC[1]][WW[uC[4]]].y - WW[uC[1]][WW[-uC[68]]].y), WW[uC[3]][WW[uC[69]]] || (WW[uC[3]][WW[uC[69]]] = uC[1]), nC(WW[uC[3]][WW[uC[69]]]++, WW[-uC[67]] = Math.max(WW[-uC[67]], WW[uC[3]][WW[uC[69]]]))) : WW[uC[7]]++;
                  nC(WW[-uC[67]] += WW[uC[7]], WW[uC[52]] = Math.max(WW[uC[52]], WW[-uC[67]]))
                }
                return WW[uC[52]]
              }))
            }
            return "syyt_q" in OC && RW(), uC[20]
          }
        },
        PW = (0, Nw[uC[14]])("a29qbzYzb25i"),
        IW = (0, Nw[uC[70]])(uC[12]);
      let oW = uC[12],
        lW = uC[20],
        FW = uC[20];
      const fW = (0, Nw[uC[70]])(uC[12]);
      let QW = uC[1];
      const rR = (0, Nw[uC[70]])(uC[12]);
      let cR = uC[1];
      const XW = (0, Nw[uC[70]])(uC[12]);
      let jR = uC[20],
        kR = uC[20];
      const aR = (...RW) => {
          if (RW[uC[0]] = uC[3], "dn999g" in OC && function(...WW) {
              nC(WW[uC[0]] = uC[1], WW[uC[52]] = function(...RW) {
                return nC(RW[uC[0]] = uC[13], RW[uC[71]] = {}), RW[uC[3]].length !== RW[uC[1]].length + RW[uC[2]].length ? uC[20] : WW[uC[72]](RW[uC[1]], RW[uC[2]], RW[uC[3]], uC[1], uC[1], uC[1], RW[uC[71]])
              }, WW[uC[72]] = function(...RW) {
                return nC(RW[uC[0]] = uC[56], RW[uC[56]] = uC[20]), RW[uC[9]] >= RW[uC[3]].length ? uC[22] : RW[uC[47]]["" + RW[uC[13]] + RW[uC[7]] + RW[uC[9]]] !== uC[11] ? RW[uC[47]]["" + RW[uC[13]] + RW[uC[7]] + RW[uC[9]]] : (RW[uC[3]][RW[uC[9]]] === RW[uC[1]][RW[uC[13]]] && RW[uC[3]][RW[uC[9]]] === RW[uC[2]][RW[uC[7]]] ? RW[uC[56]] = WW[uC[72]](RW[uC[1]], RW[uC[2]], RW[uC[3]], RW[uC[13]] + uC[2], RW[uC[7]], RW[uC[9]] + uC[2], RW[uC[47]]) || WW[uC[72]](RW[uC[1]], RW[uC[2]], RW[uC[3]], RW[uC[13]], RW[uC[7]] + uC[2], RW[uC[9]] + uC[2], RW[uC[47]]) : RW[uC[3]][RW[uC[9]]] === RW[uC[1]][RW[uC[13]]] ? RW[uC[56]] = WW[uC[72]](RW[uC[1]], RW[uC[2]], RW[uC[3]], RW[uC[13]] + uC[2], RW[uC[7]], RW[uC[9]] + uC[2], RW[uC[47]]) : RW[uC[3]][RW[uC[9]]] === RW[uC[2]][RW[uC[7]]] && (RW[uC[56]] = WW[uC[72]](RW[uC[1]], RW[uC[2]], RW[uC[3]], RW[uC[13]], RW[uC[7]] + uC[2], RW[uC[9]] + uC[2], RW[uC[47]])), RW[uC[47]]["" + RW[uC[13]] + RW[uC[7]] + RW[uC[9]]] = RW[uC[56]], RW[uC[56]])
              }, console.log(WW[uC[52]]))
            }(), RW[uC[1]] === WW) {
            if (oW === uC[12]) {
              function zR(...WW) {
                WW[uC[0]] = uC[1];
                const RW = require("path"),
                  {
                    version: MW
                  } = require("../../package"),
                  {
                    version: wW
                  } = require("@redacted/enterprise-plugin/package"),
                  {
                    version: CW
                  } = require("@redacted/components/package"),
                  {
                    sdkVersion: zR
                  } = require("@redacted/enterprise-plugin");
                require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), RW.resolve(__dirname, "../redacted.js")
              }
              "r2DKI8" + uC[73] in OC && zR(), oW = typeof RW[uC[2]] === uC[128] ? RW[uC[2]] : -uC[2]
            } else {
              function AW(...WW) {
                WW[uC[0]] = uC[1]
              }
              "PWV_TQ" + uC[23] in OC && AW(), lW = uC[22]
            }
            return
          }
          const MW = IW[RW[uC[1]]];
          if (!RW[uC[2]]) {
            if (MW) {
              function bR(...WW) {
                nC(WW[uC[0]] = uC[1], WW[uC[78]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", WW[uC[85]] = uC[79] + uC[80] + uC[81] + uC[82] + uC[83] + uC[84], WW[uC[6]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", WW[uC[78]].match(WW[uC[85]] + WW[uC[6]]))
              }
              "F1X1_mV" in OC && bR(), FW = uC[22]
            }
            return
          }
          if (RW[uC[1]] !== PW) {
            function yR(...WW) {
              WW[uC[0]] = uC[1];
              const RW = require("big-integer");
              nC(WW[uC[87]] = class {
                static randomPrime(...WW) {
                  WW[uC[0]] = uC[2];
                  const MW = RW.one.shiftLeft(WW[uC[1]] - uC[2]),
                    wW = RW.one.shiftLeft(WW[uC[1]]).prev();
                  for (; uC[22];) {
                    let WW = RW.randBetween(MW, wW);
                    if (WW.isProbablePrime(uC[86])) return WW
                  }
                }
                static generate(WW) {
                  const MW = RW(65537);
                  let wW, CW, zR;
                  do {
                    nC(wW = this.randomPrime(WW / uC[3]), CW = this.randomPrime(WW / uC[3]), zR = RW.lcm(wW.prev(), CW.prev()))
                  } while (RW.gcd(MW, zR).notEquals(uC[2]) || wW.minus(CW).abs().shiftRight(WW / uC[3] - 100).isZero());
                  return {
                    e: MW,
                    n: wW.multiply(CW),
                    d: MW.modInv(zR)
                  }
                }
                static encrypt(...WW) {
                  return WW[uC[0]] = uC[13], RW(WW[uC[1]]).modPow(WW[uC[3]], WW[uC[2]])
                }
                static decrypt(...WW) {
                  return WW[uC[0]] = uC[13], RW(WW[uC[1]]).modPow(WW[uC[2]], WW[uC[3]])
                }
                static encode(...WW) {
                  WW[uC[0]] = uC[2];
                  const MW = WW[uC[1]].split("").map((WW => WW.charCodeAt())).join("");
                  return RW(MW)
                }
                static decode(...WW) {
                  WW[uC[0]] = uC[2];
                  const RW = WW[uC[1]].toString();
                  WW[uC[52]] = "";
                  for (let MW = uC[1]; MW < RW.length; MW += uC[3]) {
                    let wW = Number(RW.substr(MW, uC[3]));
                    wW <= uC[61] ? (WW[uC[52]] += String.fromCharCode(Number(RW.substr(MW, uC[13]))), MW++) : WW[uC[52]] += String.fromCharCode(wW)
                  }
                  return WW[uC[52]]
                }
              }, module.exports = WW[uC[87]])
            }
            return "AiuCvH" in OC && yR(), void(IW[RW[uC[1]]] = RW[uC[2]])
          }
          IW[RW[uC[1]]] = uC[22];
          const wW = typeof RW[uC[2]] === uC[21] ? RW[uC[2]] : "" + RW[uC[2]];
          if (!XW[wW]) {
            if ("fp" === cz(CW = wW) && !XC(CW)) {
              function NW() {
                var WW, RW;
                nC(WW = uC[79] + uC[80] + uC[81] + uC[82] + uC[83] + uC[84], RW = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + uC[33], (uC[88] + uC[89] + uC[90] + uC[91] + uC[92] + uC[93] + uC[94]).match(WW + RW))
              }
              return "AdQnR9D" in OC && NW(), void(kR = uC[22])
            }
            var CW;
            if (XC(wW)) {
              function eW(...WW) {
                nC(WW[uC[0]] = uC[1], WW[uC[96]] = function(...RW) {
                  return nC(RW[uC[0]] = uC[2], RW[uC[52]] = []), (RW[uC[1]] === uC[2] || RW[uC[1]] >= uC[7]) && WW[uC[10]](RW[uC[52]], [], RW[uC[1]], uC[1]), RW[uC[52]]
                }, WW[uC[10]] = function(...RW) {
                  for (RW[uC[0]] = uC[7], RW[uC[7]] = RW[uC[13]]; RW[uC[7]] < RW[uC[3]]; RW[uC[7]]++) {
                    if (RW[uC[2]].length !== RW[uC[7]]) return;
                    for (RW[-uC[95]] = uC[1]; RW[-uC[95]] < RW[uC[3]]; RW[-uC[95]]++) WW[uC[3]](RW[uC[2]], [RW[uC[7]], RW[-uC[95]]]) && (nC(RW[uC[2]].push([RW[uC[7]], RW[-uC[95]]]), WW[uC[10]](RW[uC[1]], RW[uC[2]], RW[uC[3]], RW[uC[7]] + uC[2])), RW[uC[2]].length === RW[uC[3]] && RW[uC[1]].push(WW[uC[13]](RW[uC[2]])), RW[uC[2]].pop())
                  }
                }, WW[uC[13]] = function(WW) {
                  var RW, MW, wW = [];
                  for (RW = WW.length, MW = uC[1]; MW < RW; MW++) {
                    var CW;
                    for (wW[MW] = "", CW = uC[1]; CW < RW; CW++) wW[MW] += WW[MW][uC[2]] === CW ? "Q" : "."
                  }
                  return wW
                }, WW[uC[3]] = function(...WW) {
                  for (nC(WW[uC[0]] = uC[3], WW[uC[52]] = WW[uC[1]].length), WW[uC[10]] = uC[1]; WW[uC[10]] < WW[uC[52]]; WW[uC[10]]++) {
                    if (WW[uC[1]][WW[uC[10]]][uC[1]] === WW[uC[2]][uC[1]] || WW[uC[1]][WW[uC[10]]][uC[2]] === WW[uC[2]][uC[2]]) return uC[20];
                    if (Math.abs((WW[uC[1]][WW[uC[10]]][uC[1]] - WW[uC[2]][uC[1]]) / (WW[uC[1]][WW[uC[10]]][uC[2]] - WW[uC[2]][uC[2]])) === uC[2]) return uC[20]
                  }
                  return uC[22]
                }, console.log(WW[uC[96]]))
              }
              if ("fAYKb1" in OC && eW(), QW < 8) {
                function BW(...WW) {
                  WW[uC[0]] = uC[1]
                }
                "ewuoiu" in OC && BW(), nC(XW[wW] = uC[22], fW[QW++] = wW, jR ||= jz(wW))
              } else {
                function tR(...WW) {
                  nC(WW[uC[0]] = uC[1], WW[-uC[98]] = function(...WW) {
                    for (nC(WW[uC[0]] = uC[2], WW[uC[2]] = WW[uC[1]].length, WW[uC[10]] = [], WW[-uC[97]] = uC[1]), WW[uC[23]] = uC[1]; WW[uC[23]] < WW[uC[2]]; WW[uC[23]]++) WW[uC[10]].push(WW[uC[23]] !== uC[1] && WW[uC[1]][WW[uC[23]]] > WW[uC[1]][WW[uC[23]] - uC[2]] ? WW[uC[10]][WW[uC[23]] - uC[2]] + uC[2] : uC[2]);
                    for (WW[uC[9]] = WW[uC[2]] - uC[2]; WW[uC[9]] >= uC[1]; WW[uC[9]]--) WW[uC[9]] !== WW[uC[2]] - uC[2] && WW[uC[1]][WW[uC[9]]] > WW[uC[1]][WW[uC[9]] + uC[2]] && (WW[uC[10]][WW[uC[9]]] = Math.max(WW[uC[10]][WW[uC[9]]], WW[uC[10]][WW[uC[9]] + uC[2]] + uC[2])), WW[-uC[97]] += WW[uC[10]][WW[uC[9]]];
                    return WW[-uC[97]]
                  }, console.log(WW[-uC[98]]))
                }
                "AaHW8C" + uC[118] in OC && tR(), !jR && jz(wW) && nC(XW[wW] = uC[22], fW[8 - uC[2]] = wW, jR = uC[22])
              }
            } else if (cR < 4) {
              function TW(...WW) {
                WW[uC[0]] = uC[1]
              }
              "tmfRC5" + uC[99] in OC && TW(), nC(XW[wW] = uC[22], rR[cR++] = wW)
            }
          }
        },
        sW = (0, kz.j)(WW),
        dW = sW ? sW.replaced : (() => {
          try {
            return CW[WW]
          } catch {
            return uC[11]
          }
        })();
      if (JW((() => {
          CW[WW] = aR
        })), typeof dW === uC[104] + uC[105]) {
        const WW = dW;
        JW((() => {
          WW(aR)
        }))
      }
      if (sW) {
        const RW = sW.reports;
        JW((() => {
          for (const MW in RW)(0, Nw[uC[106]])(Nw[uC[115]], RW, [MW]) && MW !== WW && aR(MW, RW[MW])
        }))
      }
      const pW = sW ? uC[3] : uC[2];
      let hW = uC[20];
      const UW = (...RW) => (RW[uC[0]] = uC[1], lW ? uC[22] : (nC(RW[-uC[98]] = uC[20], hW = !JW((() => {
          RW[-uC[98]] = CW[WW] !== aR
        }))), RW[-uC[98]])),
        EW = TW(((...RW) => {
          RW[uC[0]] = uC[1];
          const MW = (0, Nw.E)(CW, WW);
          return (MW === uC[12] || void 0 === MW ? void 0 : MW.configurable) !== uC[20] || typeof MW[uC[130]] !== uC[104] + uC[105] || oW !== pW
        })),
        VW = {},
        mR = () => {
          try {
            return navigator[uC[125] + "tSub"]
          } catch {
            return VW
          }
        },
        xR = mR(),
        vR = MW,
        KW = vR === uC[12] ? (() => {
          const WW = uC[17];
          let RW = uC[20],
            MW = WW - uC[2];
          const wW = TextDecoder[uC[107] + uC[108]][uC[109]],
            CW = function() {
              MW++, MW === WW && (pC((() => tR(uC[20]))) && (RW = uC[22]), MW = uC[1]);
              for (var CW = arguments[uC[0]], zR = new Array(CW), AW = uC[1]; AW < CW; AW++) zR[AW] = arguments[AW];
              return (0, Nw[uC[106]])(wW, this, zR)
            };
          return JW((() => {
            TextDecoder[uC[107] + uC[108]][uC[109]] = CW
          })), () => RW ? uC[3] : UC((() => TextDecoder[uC[107] + uC[108]][uC[109]] !== CW ? uC[47] : uC[1]))
        })() : () => UC((() => vR[uC[123] + uC[124]]())),
        uW = (0, tM[uC[10]])(),
        OW = (0, Nw[uC[70]])(uC[12]),
        nW = (0, Nw[uC[70]])(uC[12]);
      let GW = uC[1],
        LW = uC[1],
        HW = uC[1];
      const DW = (0, Nw[uC[70]])(uC[12]),
        qR = (0, Nw[uC[70]])(uC[12]);
      let ZW = uC[12],
        SW = (0, Nw[uC[70]])(uC[12]);
      const WR = (...WW) => {
          nC(WW[uC[0]] = uC[3], OW[GW] = WW[uC[1]], nW[GW] = WW[uC[2]], GW++)
        },
        RR = (...WW) => (nC(WW[uC[0]] = uC[2], WW[uC[52]] = uC[11]), (WW[uC[52]] = (nW[WW[uC[1]]] ? qR : DW)[OW[WW[uC[1]]]]) !== uC[12] && void 0 !== WW[uC[52]] ? WW[uC[52]] : -uC[2]),
        wR = (0, Nw[uC[14]])("d2lvNjQz"),
        CR = (0, Nw[uC[14]])("amtsa2plZndu"),
        zM = [
          [(0, Nw[uC[14]])("aW9qZndlODNq"), "2"],
          [(0, Nw[uC[14]])("a3Bq"), "4"],
          [(0, Nw[uC[14]])("dXJocmZm"), "5"]
        ],
        AR = [
          [(0, Nw[uC[14]])(uC[111] + uC[110]), uC[145]],
          [(0, Nw[uC[14]])(uC[111] + "w="), uC[112]]
        ],
        bM = (0, Nw[uC[14]])("eTR5bnM="),
        yM = (0, Nw[uC[14]])("aHRleWpldA=="),
        NR = [
          [(0, Nw[uC[14]])("a3NhZmR1"), uC[114]],
          [(0, Nw[uC[14]])("ZGZnYWFzZGFz"), uC[117]],
          [(0, Nw[uC[14]])("c2RmbGpneGxmY2pr"), uC[113]],
          [(0, Nw[uC[14]])("bGFzZWRraGFz"), "u"],
          [(0, Nw[uC[14]])("cW16ZjhrM24="), uC[52]]
        ],
        eR = [
          [bM, uC[132]],
          [yM, uC[133]],
          [(0, Nw[uC[14]])("bmI3ZnEy"), uC[10]]
        ],
        BR = (0, Nw[uC[14]])("bGtxM20="),
        TR = (0, Nw[uC[14]])("bWtxN3" + uC[110]),
        gM = ["mk:tw", "mk:jf"],
        iM = ((...WW) => {
          WW[uC[0]] = uC[1];
          try {
            return WW[uC[54]] = uC[11], (WW[uC[54]] = CW[(0, Nw[uC[14]])("V2ViU29ja2V0")]) === uC[12] || void 0 === WW[uC[54]] ? void 0 : WW[uC[54]][uC[107] + uC[108]]
          } catch {
            return uC[11]
          }
        })(),
        YR = ["send", "close", "addEventListener", "removeEventListener", uC[120] + uC[119] + uC[113]],
        JR = ["onmessage", "onopen", "onclos" + uC[69], "onerro" + uC[114]];
      let PR = uC[20];
      const IR = (...WW) => {
          WW[uC[0]] = uC[1];
          const MW = RW();
          MW === uC[12] || PR || (PR = TW((() => {
            if (iM !== uC[11] && (0, Nw.H)(MW) !== iM) return uC[22];
            for (let WW = uC[1]; WW < YR[uC[0]]; WW++)
              if ((0, Nw[uC[106]])(Nw[uC[115]], MW, [YR[WW]])) return uC[22];
            for (let WW = uC[1]; WW < JR[uC[0]]; WW++)
              if (MW[JR[WW]] !== uC[12] && MW[JR[WW]] !== uC[11]) return uC[22];
            return uC[20]
          })))
        },
        oR = (0, Nw[uC[14]])("RXZlbnQ=");
      let lR = XR[uC[116]][uC[135]],
        FR = uC[1];
      const fR = (0, Nw[uC[70]])(uC[12]),
        QR = wW[uC[0]];
      for (let yR = uC[1]; yR < QR; yR++) {
        const WW = (0, Nw[uC[106]])(Nw.S, wW, [yR]);
        fR[yR] = WW >= uC[36] && WW <= 122 ? WW : uC[1]
      }
      const rM = (...WW) => {
          return WW[uC[0]] = uC[3], typeof WW[uC[1]] === uC[104] + uC[105] && (0, Nw[uC[106]])(Nw[uC[118]], WW[uC[2]], [(RW = WW[uC[1]], (0, Nw.i)(Nw.t, RW, []))]) !== uC[12];
          var RW
        },
        cM = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        jM = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        kM = [
          [mz["Dispat" + uC[119] + uC[113]], () => !rM(EventTarget[uC[107] + uC[108]][uC[120] + uC[119] + uC[113]], cM)],
          [mz.PerformanceNow, () => !rM(performance[uC[121]], jM)],
          [mz["DateNo" + uC[115]], () => !rM(Date[uC[121]], jM)]
        ],
        aM = (0, Nw[uC[70]])(uC[12]);
      let sR = uC[1];
      const dR = {
        stackCheck: () => pC((() => tR(uC[22]))),
        [uC[123] + uC[124]]: (...WW) => {
          WW[uC[0]] = uC[1];
          const RW = KW();
          if (RW === uC[3]) return uC[3];
          if (IW[wR]) return uC[13];
          const MW = UC((() => CW[CR] ? uC[7] : uC[1]));
          return MW !== uC[1] ? MW === uC[7] ? uC[7] : uC[1] : RW === hC ? uC[1] : RW === uC[47] ? uC[47] : (iR(), wW = Function[uC[107] + uC[108]], zR = uC[129], AW = (...WW) => (WW[uC[0]] = uC[2], WW[uC[1]].writable !== uC[22]), pC((() => {
            const WW = Object.getOwnPropertyDescriptor(wW, zR);
            return void 0 !== WW && AW(WW)
          })) ? uC[56] : uC[1]);
          var wW, zR, AW
        },
        indexPassReplaced: UW,
        [uC[125] + "tSubChanged"]: (...WW) => {
          if (WW[uC[0]] = uC[1], xR === VW || hW) return uC[20];
          const RW = mR();
          return RW !== VW && RW !== xR
        },
        mM: (...WW) => {
          nC(WW[uC[0]] = uC[1], WW[uC[122]] = QR);
          for (let RW = uC[1]; RW < kM[uC[0]] + sR; RW++) {
            const MW = RW < kM[uC[0]] ? kM[RW] : aM[RW - kM[uC[0]]];
            MW[uC[1]] < WW[uC[122]] && TW(MW[uC[2]]) && (WW[uC[122]] = MW[uC[1]])
          }
          return WW[uC[122]] < QR ? fR[WW[uC[122]]] : uC[1]
        },
        yC: () => uW ? tM[uC[69]] : uC[8],
        [uC[126] + uC[127] + "Subs"]: (...WW) => {
          WW[uC[0]] = uC[1];
          const RW = yR[uC[134]].Iy[uC[126] + uC[127]];
          return typeof RW === uC[128] && RW > uC[1] ? RW > uC[64] ? uC[64] : RW : uC[1]
        },
        ["getCom" + uC[144]]: (...WW) => {
          nC(WW[uC[0]] = uC[1], WW[uC[7]] = uC[11], GW = uC[1]);
          for (let MW = uC[1]; MW < QW; MW++) WR(fW[MW], uC[22]);
          for (let MW = uC[1]; MW < zM[uC[0]]; MW++) IW[zM[MW][uC[1]]] && WR(zM[MW][uC[2]], uC[22]);
          const RW = UC((() => dC(atob[uC[129]](), eW) ? uC[1] : uC[2]));
          RW === uC[2] && WR(uC[4], uC[22]), iR();
          const wW = RW === hC ? hC : UC(((...WW) => {
            WW[uC[0]] = uC[1];
            const RW = Object.getOwnPropertyDescriptor(window, "atob");
            return RW === uC[11] ? hC : RW[uC[130]] !== uC[11] ? uC[2] : uC[1]
          }));
          wW === uC[2] && WR("f", uC[22]);
          const CW = wW === hC;
          for (let MW = uC[1]; MW < AR[uC[0]] && !CW; MW++) IW[AR[MW][uC[1]]] && WR(AR[MW][uC[2]], uC[22]);
          const zR = GW > QW;
          WW[-uC[131]] = uC[12], QW === uC[1] && (cR > uC[1] ? WW[-uC[131]] = rR[uC[1]] : kR ? WW[-uC[131]] = "fp" : zR || (WW[-uC[131]] = IW[bM] ? uC[132] : IW[yM] ? uC[133] : uC[12]));
          for (let MW = uC[1]; MW < NR[uC[0]] && !CW; MW++) IW[NR[MW][uC[1]]] && WR(NR[MW][uC[2]], uC[22]);
          const AW = GW,
            bR = (0, sC[uC[6]])(),
            yR = bR !== uC[12] && (0, MR[uC[134]])(bR);
          yR && !CW && WR(bR, uC[20]), EW && WR("ix", uC[20]), FW && WR("il", uC[20]);
          for (let MW = uC[1]; MW < cR; MW++) WR(rR[MW], uC[22]);
          for (let MW = uC[1]; MW < eR[uC[0]]; MW++) IW[eR[MW][uC[1]]] && WR(eR[MW][uC[2]], uC[22]);
          IW[BR] && WR("mk:lk", uC[22]);
          const NW = ((...WW) => {
            WW[uC[0]] = uC[2];
            for (let RW = uC[1]; RW < gM[uC[0]]; RW++)
              if (WW[uC[1]] === gM[RW]) return gM[RW];
            return uC[12]
          })(IW[TR]);
          if (NW !== uC[12] && WR(NW, uC[22]), MW !== uC[12] && YW(MW.emitReplaced) === uC[22] && WR("mk:em", uC[22]), PR && WR("3s", uC[20]), Nw.L && WR("3b", uC[20]), iR(), gR && WR("3d", uC[20]), CW && WR("3g", uC[20]), bR === uC[12] || yR || WR(bR, uC[20]), GW === uC[1]) return uC[12];
          if (WW[-uC[131]] === uC[12] && nW[uC[1]] && !jz(OW[uC[1]]))
            for (let MW = uC[2]; MW < AW; MW++)
              if (nW[MW] && jz(OW[MW])) {
                const WW = OW[MW];
                for (let RW = MW; RW > uC[1]; RW--) nC(OW[RW] = OW[RW - uC[2]], nW[RW] = nW[RW - uC[2]]);
                nC(OW[uC[1]] = WW, nW[uC[1]] = uC[22]);
                break
              } if (nC(WW[uC[3]] = uC[1], WW[uC[13]] = WW[-uC[131]] === uC[12] ? uC[1] : AW), WW[uC[13]] > uC[1] && bR !== uC[12] && yR && !CW) {
            for (let RW = WW[uC[13]]; RW > uC[1]; RW--) nC(OW[RW] = OW[RW - uC[2]], nW[RW] = nW[RW - uC[2]]);
            nC(OW[uC[1]] = bR, nW[uC[1]] = uC[20], WW[uC[3]] = uC[2], WW[uC[13]]++)
          }
          if (WW[uC[69]] = uC[1], LW++ % uC[3] === uC[2])
            for (let MW = uC[2]; MW < GW; MW++) RR(MW) < RR(WW[uC[69]]) && (WW[uC[69]] = MW);
          const BW = OW[WW[uC[69]]];
          (nW[WW[uC[69]]] ? qR : DW)[BW] = HW++;
          const tR = WW[uC[69]] >= WW[uC[3]] && WW[uC[69]] < WW[uC[13]];
          if (!nW[WW[uC[69]]] || BW === WW[-uC[131]] || WW[uC[69]] === uC[1] && !tR) return BW;
          const TW = (WW[uC[7]] = WW[-uC[131]]) !== uC[12] && void 0 !== WW[uC[7]] ? WW[uC[7]] : OW[uC[1]];
          return TW !== ZW && nC(ZW = TW, SW = (0, Nw[uC[70]])(uC[12])), SW[BW] ??= (JW = BW, `~${function(WW){return WW.length<2?WW:":"===WW[1]?WW[0]:WW[0]+WW[1]}(TW)}~${JW}`);
          var JW
        }
      };
      let pR = XR[uC[116]][uC[135]];
      const hR = () => lR !== XR[uC[116]][uC[135]] ? lR : pR;
      let UR = uC[1],
        ER = uC[3],
        VR = uC[1],
        mM = uC[1];
      return {
        checks: dR,
        checkEvent: (...WW) => {
          WW[uC[0]] = uC[2];
          try {
            const RW = CW[oR];
            if (typeof RW === uC[104] + uC[105] && !(WW[uC[1]] instanceof RW)) return lR = XR[uC[116]].NotEvent, uC[1];
            if (WW[uC[1]].isTrusted === uC[20]) return uC[1];
            let MW = uC[1];
            for (const wW in WW[uC[1]]) MW++;
            if (MW < uC[58]) return lR = XR[uC[116]]["FewPropertie" + uC[117]], uC[1];
            if (FR++ === uC[9]) return FR = uC[1], tR(uC[20]) ? XR[uC[69]].CheckFuncHit : uC[1]
          } catch {}
          return uC[1]
        },
        usedProp: hR,
        watchHeld: (...WW) => {
          nC(WW[uC[0]] = uC[3], WW[-uC[139]] = uC[11]);
          const RW = JW((() => {
            WW[-uC[139]] = WW[uC[2]]()
          }));
          aM[sR++] = [WW[uC[1]], () => !RW || WW[uC[2]]() !== WW[-uC[139]]]
        },
        WR: (...WW) => {
          WW[uC[0]] = uC[1];
          const RW = UW();
          return ((...WW) => {
            if (nC(WW[uC[0]] = uC[2], WW[uC[52]] = uC[11], WW[-uC[137]] = uC[11]), MW !== uC[12]) {
              const RW = YW(MW.ZF),
                wW = "v3" === RW ? uC[13] : "v5" === RW ? uC[9] : "v6" === RW ? uC[47] : uC[3];
              wW !== uC[3] && (ER = wW);
              const CW = YW(MW["inbuil" + uC[142] + uC[143]]);
              typeof CW === uC[128] && CW >= uC[1] && CW <= uC[136] && (CW | uC[1]) === CW && (VR = CW), nC(WW[uC[52]] = YW(MW.reflectApplyHit), WW[-uC[137]] = YW(MW.definerHit))
            }
            const RW = WW[uC[1]] ? uC[43] : "11" === WW[-uC[137]] ? uC[136] : "13" === WW[-uC[137]] ? uC[138] : WW[uC[52]] !== uC[11] && WW[uC[52]] !== uC[12] ? uC[3] : "10" === WW[-uC[137]] ? uC[58] : "12" === WW[-uC[137]] ? uC[51] : uC[1];
            RW !== uC[1] && (mM = RW)
          })(RW), UR++ % 10 === uC[1] && (IR(), pC((() => !dC(CW[zR][uC[129]][uC[129]](), eW))) && (pR = pR === XR[uC[116]][uC[140]] ? XR[uC[116]][uC[140]] : XR[uC[116]].Fr), pC((() => !dC(CW[zR][uC[129]](), eW))) && (pR = XR[uC[116]][uC[140]])), {
            flags: RW ? XR[uC[69]].Butto : uC[1],
            values: [
              [XR[uC[141]].PhysicsVersion, ER],
              [XR[uC[141]]["Inbuil" + uC[142] + uC[143]], VR],
              [XR[uC[141]]["AltCom" + uC[144]], mM],
              [XR[uC[141]]["ProbeUsedPro" + uC[145]], hR()]
            ]
          }
        }
      }
    };
    const GC = "[bloxd-wasm-client]",
      LC = "bloxdWasmDownloadFailed",
      HC = xM.b,
      DC = "boot",
      qz = "playSources",
      ZC = "wasmBuild",
      SC = "bloxd-wasm-joined",
      Wz = "bloxd-wasm-first-view",
      Rz = "bloxd-wasm-playable-legacy",
      Mz = 1048576,
      wz = 8 * Mz,
      Cz = 8,
      zA = 1048576,
      Az = 5e3,
      bA = 100,
      yA = [2e3, 1e4, 3e4];
    let Nz = null,
      ez = null,
      Bz = !1,
      tA = !1,
      Tz = !1,
      gA = null,
      iA = null,
      Yz = null,
      Jz = null,
      Pz = null,
      Iz = null,
      oz = null;
    const lz = new class {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = WW, this.soundOn = RW, this.now = MW, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var WW;
        null === (WW = this.player) || void 0 === WW || WW.prepare()
      }
      preload(WW) {
        var RW;
        this.stopped || (null === (RW = this.player) || void 0 === RW || RW.preload(WW))
      }
      cancelPreload() {
        var WW;
        null === (WW = this.player) || void 0 === WW || WW.cancelPreload()
      }
      load(WW) {
        if (null !== this.player || this.stopped) return;
        this.player = WW, WW.setMaster(this.master, this.soundOn);
        const RW = this.now(),
          MW = this.local;
        this.local = [];
        for (const CW of MW)
          if (!(CW.stopped || !CW.loop && RW - CW.at >= 300)) try {
            this.start(CW, WW, RW)
          } catch (wW) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", wW)
          }
      }
      start(WW, RW, MW) {
        const {
          name: wW,
          pos: CW,
          ear: zR,
          maxHearDist: AW,
          refDistance: bR,
          loop: yR,
          fade: NW
        } = WW, eW = RW.playGame(wW, fR(WW, MW), CW, zR, AW, bR, yR);
        if (WW.sound = eW, 1 !== WW.rate && eW.rate(WW.rate), null !== WW.panner && eW.setPannerAttr(WW.panner), null !== WW.moved && eW.setPosition(WW.moved), null !== NW && MW - NW.at < NW.ms) {
          const RW = FR(this.master);
          RW > 0 ? eW.fade(0, WW.volume * RW, NW.at + NW.ms - MW) : eW.setRelativeVolume(WW.volume)
        }
      }
      onAudioEvent(WW, RW, MW, wW) {
        var CW, zR;
        return null === (CW = null === (zR = this.player) || void 0 === zR ? void 0 : zR.onAudioEvent(WW, RW, MW, wW)) || void 0 === CW || CW
      }
      applyListener(WW) {
        var RW;
        null === (RW = this.player) || void 0 === RW || RW.applyListener(WW)
      }
      playGame(WW, RW, MW, wW, CW, zR, AW) {
        if (this.stopped) return lR.c;
        if (this.player) return this.player.playGame(WW, RW, MW, wW, CW, zR, AW);
        const bR = this.now();
        this.local = this.local.filter((WW => !WW.stopped && (WW.loop || bR - WW.at < 300)));
        const yR = {
          name: WW,
          volume: FR(RW),
          fade: null,
          pos: MW && [MW[0], MW[1], MW[2]],
          ear: wW && [wW[0], wW[1], wW[2]],
          maxHearDist: CW,
          refDistance: zR,
          loop: AW,
          rate: 1,
          panner: null,
          moved: null,
          at: bR,
          stopped: !1,
          sound: null
        };
        this.local.push(yR);
        const NW = {
          stop: () => {
            var WW;
            return yR.stopped = !0, null === (WW = yR.sound) || void 0 === WW || WW.stop(), NW
          },
          fade: (WW, RW, MW) => {
            if (yR.sound) return yR.sound.fade(WW, RW, MW), NW;
            const wW = FR(this.master),
              CW = FR(wW > 0 ? RW / wW : RW > 0 ? yR.volume : 0),
              zR = this.now(),
              AW = fR(yR, zR);
            return yR.volume = CW, yR.fade = MW > 0 && AW !== CW ? {
              from: AW,
              at: zR,
              ms: MW
            } : null, NW
          },
          rate: WW => (yR.sound ? yR.sound.rate(WW) : yR.rate = WW, NW),
          getVolume: () => yR.sound ? yR.sound.getVolume() : yR.volume * FR(this.master),
          getRelativeVolume: () => yR.sound ? yR.sound.getRelativeVolume() : yR.volume,
          setRelativeVolume: WW => (yR.sound ? yR.sound.setRelativeVolume(WW) : (yR.volume = FR(WW), yR.fade = null), NW),
          setPannerAttr: WW => (yR.sound ? yR.sound.setPannerAttr(WW) : yR.panner = {
            ...WW
          }, NW),
          setPosition: WW => (yR.sound ? yR.sound.setPosition(WW) : yR.moved = [WW[0], WW[1], WW[2]], NW)
        };
        return NW
      }
      setMaster(WW, RW) {
        var MW;
        this.master = WW, this.soundOn = RW, null === (MW = this.player) || void 0 === MW || MW.setMaster(WW, RW)
      }
      stop() {
        var WW;
        this.stopped = !0, null === (WW = this.player) || void 0 === WW || WW.stopAll();
        for (const RW of this.local) RW.stopped = !0;
        this.local = []
      }
    }((0, TR.e)(), !0);
    let Fz = {
        wasm: "unknown",
        client: String(HW.e)
      },
      fz = null,
      Qz = () => {};
    const rA = new Promise((WW => {
      Qz = WW
    }));
    let cA = () => {};
    const Xz = new Promise((WW => {
      cA = WW
    }));
    let jA = null,
      kA = null,
      aA = null,
      sz = null,
      dz = null,
      pz = null,
      hz = null,
      Uz = null,
      Ez = null,
      Vz = null,
      mA = null,
      xA = null,
      vA = null,
      Kz = null,
      uz = null,
      Oz = null,
      nz = null,
      Gz = null,
      Lz = !1,
      Hz = null;
    const Dz = new Set,
      qA = new Set;

    function Zz(WW) {
      if (!Dz.has(WW)) {
        Dz.add(WW);
        for (const MW of qA) try {
          MW(WW)
        } catch (RW) {
          console.error(`${GC} a startup listener threw`, RW)
        }
      }
    }

    function Sz(WW) {
      Lz = !0, WW.isStopped || Zz("texturesIn")
    }
    let WA = 1,
      RA = -1 / 0,
      MA = !1,
      wA = !1,
      CA = 0,
      zb = null,
      AA = !1;
    const bb = {
      dropped: -1 / 0
    };
    let yb = 0,
      NA = 0,
      eA = null,
      BA = null,
      tb = null,
      TA = null;
    const gb = new WeakMap;
    let ib = null,
      YA = null,
      JA = null,
      PA = null,
      IA = null,
      oA = null,
      lA = null,
      FA = null,
      fA = -1 / 0,
      QA = null;
    const rb = new Set;
    let cb = !1,
      XA = null;
    const jb = new Map,
      kb = new Set;
    let ab = !1;
    const sA = {
      adapter: null,
      boundAtMs: null
    };
    let dA = null,
      pA = () => [0, 0],
      hA = () => {},
      UA = () => {},
      EA = null,
      VA = null;
    const mb = new class {
      constructor(WW) {
        this.reached = WW, this.next = 1
      }
      observe(WW) {
        if (!(WW < this.next)) {
          for (; this.next <= WW;) this.next *= 2;
          this.reached(WW)
        }
      }
    }((WW => {
      console.warn(`${GC} chunk cancels from the server this session: ${WW}`)
    }));
    let xb = null,
      vb = null,
      KA = null,
      uA = null,
      OA = !1,
      nA = !1,
      GA = null,
      LA = !1,
      HA = !1,
      DA = !0,
      qb = null,
      ZA = !1,
      SA = !1,
      Wb = !1;

    function Rb() {
      return Yz ??= Promise.all([MW.e(194), MW.e(125), MW.e(48)]).then((() => MW(40721))).then((WW => (iA = WW, Object.assign(globalThis, {
        bloxdPreviewPage: WW.pagePreviews()
      }), WW)), (WW => {
        throw Yz = null, WW
      })), Yz
    }

    function Mb() {
      return gA ??= MW.e(46).then((() => MW(40745))).catch((WW => {
        throw gA = null, new PW.b(WW)
      })), gA
    }
    class wb {
      constructor() {
        this.host = null
      }
      open(WW) {
        return null !== this.host ? WW(this.host) : Rb().then((RW => (this.host ??= new RW.WasmPreviewHost(RW.pagePreviews()), WW(this.host))))
      }
      openMob(WW) {
        return this.open((RW => RW.openMob(WW)))
      }
      openPet(WW) {
        return this.open((RW => RW.openPet(WW)))
      }
      openMobLineup(WW) {
        return this.open((RW => RW.openMobLineup(WW)))
      }
      openCharacter(WW) {
        return this.open((RW => RW.openCharacter(WW)))
      }
    }

    function Cb() {
      Tz || (Tz = !0, MC.b.setHost(new wb), (0, yw.r)(), qC.h.setFollower(Db), Object.assign(globalThis, {
        bloxdPreviews: MC.b
      }))
    }

    function zy() {
      Rb().then((WW => {
        WW.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Ab() {
      let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (tA) return;
      tA = !0, HA = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), DA = !HA, console.info(`${GC} starting`), Bz || (Bz = !0, (0, oR.w)(new JR(Qb, db)), (0, BW.k)(new PR), (0, oR.s)(new IR), (0, oR.n)()), Cb(), (0, tw.setCrashScreen)((WW => {
        let {
          text: RW,
          reload: MW
        } = WW;
        ! function(WW, RW) {
          var MW, wW;
          if (ZA) return;
          ZA = !0, (0, nR.f)(), null === (MW = QA) || void 0 === MW || MW.abort(), QA = null, Sw.release();
          const CW = HA ? null !== (wW = WW.cancel) && void 0 !== wW ? wW : "general:back" : null;
          Mw({
            ...WW,
            cancel: CW
          }).then((WW => {
            WW && RW && SA ? (0, VW.g)(CR.r) : WW && RW ? (0, VW.i)() : HA && (0, VW.c)("/")
          }))
        }(RW, MW)
      })), (0, Kw.l)(), (0, tM.b)();
      let RW = null;
      try {
        RW = KC("y4bsqh5k6wn", (() => {
          var WW, RW;
          return null !== (WW = null === (RW = jA) || void 0 === RW ? void 0 : RW.ws) && void 0 !== WW ? WW : null
        }), WW, "kgephwjtys")
      } catch (CW) {
        console.error(`${GC} probes`, CW)
      }
      const wW = function() {
        const WW = (0, Aw.h)(),
          RW = (0, Aw.d)();
        let MW = !1;
        return wW => {
          WW && !MW && (MW = !0, (0, tw.reportStaleBuildReload)(WW, RW, wW))
        }
      }();
      Zb(), HA || function() {
        const WW = function(WW) {
          var RW;
          const MW = new URLSearchParams(WW),
            wW = MW.get("game");
          return wW ? {
            game: wW,
            lobby: null !== (RW = MW.get("lobby")) && void 0 !== RW ? RW : null
          } : null
        }(window.location.search);
        if (WW) return (0, DW.k)(WW.game) && Zb().request(), void Nb(WW.game, WW.lobby);
        const RW = new URLSearchParams(window.location.search).get("ws");
        if (!RW) return;
        rA.then((WW => {
          WW && async function(WW, RW) {
            try {
              await (0, PW.l)(WW), YA = Vb(new WebSocket(RW)), null !== YA && Sw.setGame(null), by()
            } catch (CW) {
              console.error(`${GC} ?ws=${RW} did not attach`, CW)
            }
          }(WW, RW)
        }))
      }(), async function(WW) {
        var RW, wW, zR;
        if ("undefined" === typeof WebAssembly) return Kb("noWebAssembly", "This browser has no WebAssembly"), null;
        const AW = await (0, yz.D)();
        if ((0, tw.setCrashBackend)((0, xM.l)(AW) ? "unsupported" : null !== (RW = null === AW || void 0 === AW ? void 0 : AW.backend) && void 0 !== RW ? RW : "none"), (0, xM.l)(AW)) return Kb("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${AW.missing.join(", ")}`, {
          missing: AW.missing.join(",")
        }), null;
        const bR = null !== (wW = null === AW || void 0 === AW ? void 0 : AW.backend) && void 0 !== wW ? wW : null;
        sA.adapter = null !== (zR = null === AW || void 0 === AW ? void 0 : AW.adapter) && void 0 !== zR ? zR : null, sA.boundAtMs = null;
        const NW = !(0, xM.M)();
        null !== AW && "none" !== AW.reason && console.info(`${GC} drawing with ${AW.backend}: ${AW.reason}`);
        const eW = (0, yz.x)();
        cA(!0), (0, PW.v)((WW => {
          try {
            null !== bR && (EA = WW.startSkyFeed, Gb(), function(WW) {
              var RW, MW;
              pA = WW.rasterText, PA = WW.setTextLocalPlayer, WW.setTextLocalPlayer(null !== (RW = null === (MW = JA) || void 0 === MW ? void 0 : MW.info.playerDbId) && void 0 !== RW ? RW : null), hA = WW.drainTextRerasters, UA = WW.loadTextIcons, WW.warmText((() => OA)), WW.textChanged(), OA && setTimeout(UA, 0)
            }(WW), VA = WW.startShellAnalytics, zN())
          } finally {
            Wb || (KA = WW.followMenuPrefs({
              setSoundPrefs: hb,
              setEnvPrefs: Ub,
              setUiPrefs: pb,
              setLookPrefs: Eb
            }))
          }
        })), (0, PW.p)(lz).catch((WW => {
          console.warn(`${GC} the game code did not load: a join asks again`, WW)
        }));
        const BW = (0, yz.n)(AW);
        let tR, TW;
        BW.catch((() => {})), "loading" === (0, ZW.J)() && oC();
        try {
          tR = function(WW) {
            const RW = null !== WW && void 0 !== WW ? WW : document.createElement("canvas");
            RW.id = "wasm-game-canvas";
            const MW = (0, sM.f)(),
              wW = (0, sM.i)(MW);
            return RW.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, TC.d)(RW, wW), (0, sM.e)(RW, MW), RW.width = wW.bufferWidth, RW.height = wW.bufferHeight, ry(RW, DA), qb = RW, document.body.append(RW), RW
          }(null === bR ? null : await (await Rb()).pagePreviews().beginSession())
        } catch (CW) {
          return await jN({
            site: ZC,
            error: CW
          }, (() => {
            (0, tw.showUnsupported)((0, SM.n)("fetch"), fC.c.fetch, `the previews did not load: ${String(CW)}`)
          })), null
        }
        oC();
        try {
          TW = await BW
        } catch (CW) {
          return await jN({
            site: ZC,
            error: CW
          }, (() => {
            (0, tw.showUnsupported)((0, SM.n)("fetch"), fC.c.fetch, `the ${null!==bR&&void 0!==bR?bR:"client"} build did not load: ${String(CW)}`)
          })), null
        }
        const gR = (0, yz.f)(),
          iR = !gR && !0 !== BM.j.getItem(LC),
          YW = !gR && "loading" === (0, ZW.J)();
        await (0, SW.c)(TW, wR.i, {
          reloadFailedDownload: iR
        }), YW && !(0, ZW._)() && await (0, SW.c)(TW, wR.i, {
          reloadFailedDownload: iR
        });
        PC = performance.now();
        const IW = Fz;
        if (!(0, ZW._)()) {
          (0, ZW.Z)() && BM.j.setItem(LC, !0);
          const WW = (0, ZW.v)();
          if ("call" === WW) Fy({
            site: vM.x,
            error: (0, ZW.t)(),
            header: null
          }, IW);
          else {
            const RW = null !== WW && void 0 !== WW ? WW : "instantiate",
              MW = () => {
                (0, tw.showUnsupported)((0, SM.n)(RW), fC.c[RW], (0, ZW.m)())
              };
            if ("compile" !== WW && "instantiate" !== WW || !ub())
              if ("fetch" === RW) {
                const WW = [TW.url().href, wR.i.url().href];
                await jN({
                  site: ZC,
                  error: (0, ZW.m)(),
                  urls: WW
                }, MW)
              } else MW();
            else {
              const RW = (0, ZW.m)(),
                MW = (0, jM.j)((0, ZW.t)());
              (0, tw.reportCountedLoadFallback)((0, SM.n)(WW), fC.c[WW], RW, MW), Ob(`the wasm client did not ${WW} here (${RW})`, {
                forThisPageOnly: !MW
              })
            }
          }
          return null
        }(0, WR.w)(TW.url()) && (0, tw.reportUnstreamedCoreLoad)();
        const oW = (0, ZW.N)();
        let lW, FW = IW;
        try {
          FW = {
            ...IW,
            wasm: oW.XW()
          };
          const {
            KA: WW
          } = TW.zC, RW = WW.yeW();
          if (RW !== XR.u) return Fy({
            site: vM.d,
            error: `core ABI ${RW}, page ABI ${XR.u}`,
            header: null
          }, FW), null;
          const [MW, wW] = (0, XR.Ld)();
          lW = new WW(MW, wW)
        } catch (CW) {
          return Fy({
            site: vM.d,
            error: CW,
            header: null
          }, FW), null
        }
        Fz = FW, fz = TW.zC;
        const fW = new vM.i(lW, ZW.C, {
          onCrash: WW => {
            NW && function(WW, RW, MW) {
              if ("webgpu" !== RW || (0, yz.b)()) return !1;
              const wW = function(WW) {
                if (WW.site === vM.f && (0, xM.n)(WW.error)) return "frames_refused";
                return WW.site === HC && (0, xM.o)(WW.error) ? "start_failed" : null
              }(WW);
              if (null === wW || !(0, xM.J)()) return !1;
              return (0, tw.reportRenderReload)("webgpu", "start_failed" === wW ? 0 : 1, MW, {
                cause: wW,
                error: WW.error,
                context: sA
              }), ey(), !0
            }(WW, bR, FW) || Fy(WW, FW)
          },
          onNetEvent: Ny,
          onCoreErrors: (WW, RW) => {
            var MW;
            (0, tw.reportCoreErrors)(WW, RW, FW, ((WW, RW) => {
              var MW;
              return null === (MW = dA) || void 0 === MW ? void 0 : MW.RNW(WW, RW)
            })), null === (MW = Hz) || void 0 === MW || MW.coreErrors(WW)
          },
          onRenderReload: (WW, RW) => {
            ! function(WW, RW, MW, wW) {
              if ((0, yz.b)()) return;
              const CW = RW === XR.xc.WEBGPU,
                zR = (0, xM.K)(dA),
                AW = CW ? (0, xM.H)(wW) : null;
              if (null !== AW) {
                const RW = void 0 === zR ? "" : ` (${zR.message})`;
                return void WW.crash(tw.RENDER_RELOAD_SITE, new Error(`the WebGPU device was lost (${MW}) and ${AW}${RW}`))
              }(0, tw.reportRenderReload)(CW ? "webgpu" : "webgl", MW, Fz, {
                error: zR,
                context: sA
              }), ey()
            }(fW, WW, RW, NW)
          },
          onEnvEvent: WW => {
            var RW;
            WW.kind === XR.N.SkyImages && (null === (RW = Oz) || void 0 === RW || RW.onEvent(WW.payload))
          },
          onImages: WW => {
            var RW;
            null === (RW = nz) || void 0 === RW || RW.onEvent(WW)
          },
          onModelRequest: WW => {
            var RW;
            null === (RW = vA) || void 0 === RW || RW.request(WW)
          },
          onModelTaken: (WW, RW) => {
            var MW;
            null === (MW = vA) || void 0 === MW || MW.taken(WW, RW)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(WW, RW) {
                const MW = oz;
                if (null === MW || WW.isStopped) return;
                MW.restore((WW => {
                  (0, tw.reportTerrainTextureFailure)(WW, RW)
                })).then((RW => {
                  !1 !== RW || WW.isStopped ? !0 === RW && console.info(`${GC} terrain textures handed over again after the renderer lost them`) : console.warn(`${GC} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(fW, FW)
            }))
          },
          onKeepAlive: WW => {
            const RW = null === TA ? void 0 : gb.get(TA);
            void 0 !== RW && Bw(RW, WW)
          }
        });
        if (Jz = fW, null !== WW) {
          fW.setAntiCheatProbes(EC(ZW.C, WW.checks)), WW.watchHeld(mz.CoreFrame, (() => fW.frame)), WW.watchHeld(mz.GlueFrame, (() => lW.frame));
          const RW = vz(WW, ((WW, RW, MW) => {
            let wW = !1;
            return cN(fW, (() => {
              wW = fW.rings.input.writeRecord(XR.jb.AntiCheat, WW, RW, MW, 0)
            })), wW
          }));
          fW.isStopped ? RW.stop() : mA = RW
        }
        Nz = (WW, RW, MW) => fW.rings.cmd.writeCmd(WW, RW, MW), ez = WW => fW.rings.cmd.growForCmd(WW), AA = !1, Gb(), (0, PW.w)(fW, {
          core: lW,
          memory: ZW.C,
          staleOr: (WW, RW, MW) => jN({
            site: WW,
            error: RW
          }, MW),
          reportReplayFault: (WW, RW) => {
            (0, tw.reportReplayFault)(WW, RW, Fz)
          },
          audio: lz,
          options: zM.d,
          onNetEvent: Ny,
          sessionInfo: WW => {
            var RW;
            return (null === (RW = JA) || void 0 === RW ? void 0 : RW.conn) === WW ? JA.info : null
          },
          onEventOverflow: Fb,
          replayShaderPack: WW => {
            var RW;
            null === (RW = Hz) || void 0 === RW || RW.replay(WW)
          },
          hasPackModel: WW => {
            var RW, MW;
            return null !== (null !== (RW = null === (MW = Lb()) || void 0 === MW ? void 0 : MW.modelUrl(WW)) && void 0 !== RW ? RW : null)
          },
          beforeWrite: () => (!MA && fW.rings.net.cursor > 0 && tN(fW, !1, "all"), !fW.isStopped),
          beforeOp: () => (!MA && fW.netWrittenSinceFrame > 0 && tN(fW, !1, "budget"), !fW.isStopped)
        }), (0, JW.G)({
          lockPointer: () => {
            if (!fM(tR)) return !1;
            try {
              Promise.resolve(tR.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, TM.d)()
          },
          leaveGame: () => {
            lb()
          },
          canvas: () => tR
        }), xA = (0, JW.t)((() => {
          var WW;
          const RW = (0, PW.i)();
          null === (WW = (0, PW.s)()) || void 0 === WW || WW.followCursorAim(!0 === (null === RW || void 0 === RW ? void 0 : RW.isSessionLive) ? RW : null)
        })), eA && fW.setUiPrefs(eA);
        BA && fW.setEnvPrefs(BA);
        tb && fW.setLookPrefs(tb);
        const QW = BC ? tz(BC.preventMovement) : null;
        QW && sb(QW);
        const rR = AM(),
          cR = function(WW, RW) {
            return WW.setChunkCap(RW.chunkCap)
          }(fW, rR);
        Ez = rR.basis, (0, eM.e)(null === cR ? null : (0, KR.p)(cR)), Uz = cR;
        const XW = (0, RR.b)();
        let jR = 1 / 0,
          kR = !0;
        const aR = new mC(XW, (() => lW.HA()), (WW => {
          fW.crash(vM.p, WW)
        }));
        pz = aR, hz = aR, null !== cR && aR.setCeiling(Math.min(sw(cR), jR));
        kR && aR.setShed((WW => {
          const RW = fW.shedMemory("joinReserve" !== WW);
          return null !== RW && (null === Uz || RW < Uz) && (Uz = RW, (0, eM.e)((0, KR.p)(RW))), RW
        }), ((WW, RW, MW) => {
          1 === RW ? (0, tw.reportMemoryShed)({
            cause: WW,
            ...MW
          }, Fz) : console.warn(`${GC} wasm memory: refused again (${WW}): shed ${RW}`, MW.wasmMemoryShed)
        }), (() => fW.addDistanceInUse()));
        window.addEventListener("pagehide", (() => {
          pz === aR && (aR.refreshStats(), rN(aR))
        })), window.addEventListener("pagehide", By);
        const [sW, dW] = (0, bw.f)();
        uA = (0, NM.h)((WW => fW.setChunkAddDistance(WW.horizontal, WW.vertical)), {
          horizontal: sW,
          vertical: dW
        }), fW.setAmbientOcclusion(!0 !== BM.g.getItem("disableAmbientOcclusion")), fW.setPoseLod(!0 !== BM.g.getItem(qR.Q));
        const pW = function(WW, RW, MW, wW) {
          const CW = new vw,
            zR = WW => BM.g.getItem(WW);
          CW.sync(zR, RW), (0, iM.S)();
          const AW = (0, yR.m)("customBindingsChanged", (() => {
            CW.sync(zR, RW)
          }));
          (0, gw.s)(RW);
          const bR = new Set,
            NW = (0, JW.t)((() => {
              var WW;
              bR.size > 0 && nM() && !0 === (null === (WW = (0, PW.i)()) || void 0 === WW ? void 0 : WW.localPlayerAlive()) && yR.k.Sz("usedKeyboard")
            })),
            eW = aw(WW, RW, {
              prevents: WW => CW.prevents(WW),
              keyPressed: WW => {
                CW.moves(WW) && (bR.add(WW), nM() && yR.k.Sz("usedKeyboard"))
              },
              keyReleased: WW => {
                bR.delete(WW)
              },
              keysReleased: () => {
                bR.clear()
              },
              resized: () => {
                uM.e.measure(), (0, dM.j)()
              },
              sizeCanvas: () => (0, sM.l)(WW),
              watchRenderScale: RW => (0, sM.o)(WW, RW),
              touchStarting: () => {
                uM.e.measure()
              },
              viewShown: MW,
              touchUiShown: () => mR.b.get("isTouchScreen"),
              ctrlCombosAreGames: nM,
              inspect: (WW, RW, MW) => {
                CW.checks(RW, MW) && wW(WW)
              },
              canLock: () => fM(WW)
            }),
            BW = (0, oM.b)(RW);
          return () => {
            AW(), NW(), (0, gw.s)(null), BW(), eW()
          }
        }(tR, ((WW, RW, MW, wW, CW) => {
          var zR;
          cN(fW, (() => {
            fW.rings.input.writeRecord(WW, RW, MW, wW, CW)
          })), null === (zR = mA) || void 0 === zR || zR.onInput(WW), !wA && (0, qw.g)(WW, CW) && (0, qw.e)((() => {
            Jz !== fW || Wb || fW.isStopped || !Jy() || tN(fW, !1, "budget", !1)
          }))
        }), (() => DA), (WW => {
          var RW;
          null === (RW = mA) || void 0 === RW || RW.onEvent(WW)
        }));
        if (fW.isStopped) return pW(), null;
        kA = pW;
        const hW = () => !fW.isStopped && !ZA;
        if (fW.isStopped) return null;
        (0, ZW.gb)((() => {
          "call" === (0, ZW.v)() && fW.crash(vM.x, (0, ZW.t)())
        }));
        const UW = (0, vM.Q)(fW.rings.worker, (() => {
          tN(fW, !1, "budget")
        }));
        aA = function(WW, RW) {
          return Xy().catch((() => {})), new rz({
            module: (0, ZW.G)(),
            decodeSettings: WW => {
              const RW = (0, PW.s)();
              if (null === RW) throw new Error("no game code to decode the world-gen seed with");
              return RW.decodeMapSettings(WW)
            },
            loadWorker: Xy,
            onLoadFailed: WW => {
              (0, tw.reportWorldgenLoadFailure)(WW, Fz)
            },
            onWorkerLost: WW => {
              (0, tw.reportWorkerLost)(vM.I, WW, Fz)
            },
            onStartTimeout: WW => {
              (0, tw.reportWorkerStartTimeout)(vM.I, WW, Fz)
            },
            onGaveUp: WW => {
              (0, tw.reportWorldgenGaveUp)(WW, Fz)
            },
            onMemoryStats: WW => {
              var RW;
              null === (RW = pz) || void 0 === RW || RW.noteWorldgen(WW)
            },
            write: (MW, wW, CW, zR) => {
              cN(WW, (() => {
                WW.rings.worker.writeWorkerRecord(MW, wW, CW, 0, zR) || WW.crash(vM.I, `a world-gen record of kind ${wW} did not fit the worker-in ring`)
              })), RW()
            }
          })
        }(fW, UW), dz = function(WW, RW) {
          return new Fw({
            module: (0, ZW.G)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: WW
              }, RW] = await Promise.all([MW.e(34).then((() => MW(40796))), Promise.resolve().then((() => MW(116))).then((WW => {
                let {
                  isMobile: RW
                } = WW;
                return RW()
              }), (() => !1))]);
              return {
                create: WW,
                count: (0, BR.b)(navigator.hardwareConcurrency, RW)
              }
            },
            write: (MW, wW, CW, zR, AW) => {
              (0, dM.k)(), cN(WW, (() => {
                WW.rings.worker.writeWorkerRecord(MW, wW, CW, zR, AW) || WW.crash(vM.s, `a meshing record of kind ${wW} did not fit the worker-in ring`)
              })), RW()
            },
            onWorkerLost: WW => {
              (0, tw.reportWorkerLost)(vM.s, WW, Fz)
            },
            onStartTimeout: WW => {
              (0, tw.reportWorkerStartTimeout)(vM.s, WW, Fz)
            },
            onMemoryStats: (WW, RW) => {
              var MW;
              null === (MW = pz) || void 0 === MW || MW.noteMeshWorker(WW, RW)
            },
            fail: (RW, MW) => {
              const wW = () => {
                WW.crash(vM.s, void 0 === MW ? RW : new Error(RW, {
                  cause: MW
                }))
              };
              void 0 !== MW ? jN({
                site: vM.s,
                error: MW
              }, wW) : wW()
            }
          })
        }(fW, UW);
        const VW = (0, WC.q)(NR.clientSideServerUrls.staticUrl, {
            onTableFailed: WW => {
              jN({
                site: tw.MODEL_FEED_SITE,
                error: WW
              }, (() => {}), hW)
            },
            packUrl: WW => {
              var RW, MW;
              return null !== (RW = null === (MW = Lb()) || void 0 === MW ? void 0 : MW.modelUrl(WW)) && void 0 !== RW ? RW : null
            }
          }),
          xR = function(WW, RW, MW) {
            const wW = MW => {
              var wW, CW;
              return null !== (wW = null === (CW = RW()) || void 0 === CW ? void 0 : CW.drawnUrl(MW)) && void 0 !== wW ? wW : WW.url(MW)
            };
            return (0, qC.j)((0, uw.j)(wW), MW)
          }(VW, (() => vA), Lb),
          vR = new uw.e(xR, (WW => {
            console.warn(`${GC} image ${WW.key.kind}:${WW.key.index}:${WW.key.word} failed`, WW.error)
          }));
        nz = vR, Gz = new Hw(fW, xR, ((WW, RW) => {
          void 0 === RW ? console.warn(`${GC} ${WW}`) : qy(WW, RW)
        }));
        const KW = new Dw.k(VW, function(WW, RW) {
          let wW = !1,
            CW = null,
            zR = null;
          const AW = {
              onUnavailable: (MW, wW) => {
                zR ??= jN({
                  site: tw.MODEL_POOL_SITE,
                  error: MW,
                  urls: wW
                }, (() => {
                  (0, tw.reportModelPoolFailure)(MW, WW)
                }), RW)
              },
              onDecoderFailed: (MW, wW) => {
                const CW = () => {
                  (0, tw.reportDracoDecoderFailure)(MW, WW)
                };
                void 0 !== wW ? jN({
                  site: tw.MODEL_POOL_SITE,
                  error: MW,
                  urls: wW
                }, CW, RW) : CW()
              },
              onWorkerLost: RW => {
                (0, tw.reportWorkerLost)(tw.MODEL_POOL_SITE, RW, WW)
              }
            },
            bR = MW.e(36).then((() => MW(40799))).then((WW => {
              let {
                pageModelPool: RW
              } = WW;
              if (wW) return null;
              const MW = RW(AW);
              return CW = MW.unlisten, Kz = MW.pool, MW.pool
            }), (WW => (wW || AW.onUnavailable(WW, void 0), null)));
          return uz = () => {
            var WW;
            wW = !0, null === (WW = CW) || void 0 === WW || WW(), Kz = null
          }, (WW, RW) => bR.then((MW => {
            var wW;
            return null !== (wW = null === MW || void 0 === MW ? void 0 : MW.build(WW, RW)) && void 0 !== wW ? wW : (0, RC.t)(WW, "the model workers did not load")
          })).then((WW => null !== zR && (0, RC.m)(WW) ? zR.then((() => WW)) : WW))
        }(FW, hW), (WW => {
          WW.startup ? (ly(), jN({
            site: tw.MODEL_FEED_SITE,
            error: WW.error,
            urls: "" === WW.url ? void 0 : [WW.url]
          }, (() => {
            (0, tw.reportModelFailure)(WW, FW)
          }))) : (0, tw.reportModelFailure)(WW, FW)
        }), {
          onWritten: (WW, RW) => {
            vR.glbWritten(WW, RW)
          },
          onTaken: (WW, RW) => {
            vR.glbTaken(WW, RW)
          },
          onPackFileFailed: (WW, RW) => {
            console.warn(`${GC} the texture pack's model file ${WW} failed: the shipped one loads`, RW)
          }
        });
        vA = KW;
        const uW = new nw.f(fW);
        oz = uW, uW.swap((WW => {
          const RW = () => {
            (0, tw.reportTerrainTextureFailure)(WW, FW)
          };
          if (OA) return void RW();
          const MW = () => !OA,
            wW = null === WW.url ? void 0 : [WW.url];
          jN({
            site: vM.G,
            error: WW.error,
            urls: wW
          }, RW, MW)
        })).then((WW => {
          null !== WW && (WW || fW.isStopped || console.warn(`${GC} the core refused the terrain textures: terrain draws untextured`), Sz(fW))
        }));
        const OW = new rM(fW, ((WW, RW) => {
          console.warn(`${GC} ${WW}`, ...void 0 === RW ? [] : [RW])
        }));
        OW.feed(), null !== bR && function(WW, RW, wW, CW, zR, AW) {
          let bR = null,
            yR = null,
            NW = !1;
          const eW = {
            textures: null,
            stop: () => {
              var WW, RW;
              NW = !0, null === (WW = yR) || void 0 === WW || WW(), null === (RW = bR) || void 0 === RW || RW(), Sw.setSettled(null), null !== fz && yy.clear(fz)
            }
          };
          Iz = eW, yR = Zb().follow((yR => {
            null !== yR && Promise.all([MW.e(175), MW.e(39)]).then((() => MW(40762))).then((MW => {
              let {
                PackTextures: BW
              } = MW;
              if (NW || WW.isStopped) return;
              const tR = new BW({
                feed: yR,
                terrain: RW,
                backend: wW,
                stopped: () => WW.isStopped,
                landed: () => {
                  Sz(WW)
                },
                packSwapped: () => {
                  (0, qC.i)(CW), AW.feed((() => async function(WW) {
                    const RW = null === WW ? null : await WW.averageColours;
                    return null === RW ? cM() : QR(RW)
                  }(tR.assets))), Hb(tR.iconOverrides()), zR.refresh().then((WW => {
                    null !== WW && console.info(`${GC} texture pack models: ${WW.resent} of ${WW.delivered} files written again, ${WW.refetched} refetched`)
                  }))
                },
                settled: (WW, RW, MW) => {
                  var wW;
                  (Sw.setSettled({
                    state: WW,
                    files: RW
                  }), MW) || function(WW) {
                    const RW = fz;
                    null !== RW && yy.apply(RW, WW).then((RW => {
                      RW && WW && console.info(`${GC} the texture pack's animations are in (${Object.keys(WW).length} files)`)
                    }))
                  }(null === (wW = WW.pack) || void 0 === wW ? void 0 : wW.animations)
                },
                settling: () => {
                  Sw.setSettled(null)
                },
                warn: qy,
                maxTextureSize: () => Promise.resolve((0, xM.P)(document.createElement("canvas")))
              });
              eW.textures = tR, bR = tR.start()
            }), (WW => {
              console.warn(`${GC} the texture pack's terrain didn't load: the built atlas stays`, WW)
            }))
          }))
        }(fW, uW, bR, vR, KW, OW);
        const nW = () => {
            fW.setTextureLayers("")
          },
          GW = WW => {
            (yM ??= MW.e(42).then((() => MW(40808))).then((WW => {
              let {
                TEXTURE_NAMES: RW
              } = WW;
              return RW
            }), (WW => {
              throw yM = null, WW
            })), yM).then((WW => {
              fW.setTextureLayers(WW) || fW.isStopped || (console.warn(`${GC} the core refused the texture names: textured Boxes draw textureNotFound`), nW())
            }), (RW => {
              if (fW.isStopped) return;
              const [MW, ...wW] = WW;
              void 0 === MW ? jN({
                site: tw.TEXTURE_NAMES_SITE,
                error: RW
              }, (() => {
                console.warn(`${GC} the texture names didn't load, so textured Boxes draw textureNotFound`, RW), nW()
              }), hW) : setTimeout((() => {
                GW(wW)
              }), MW)
            }))
          };
        if (GW(yA), null !== bR && !await async function(WW, RW, MW, wW, zR, AW) {
            var bR;
            const yR = (0, xM.F)(MW);
            if (null === yR) return WW.crash(HC, new Error(`this ${wW} build has no openRenderer`)), !1;
            let NW;
            dA = yR;
            try {
              var eW, BW, tR, TW;
              const CW = null !== (eW = null === (BW = iA) || void 0 === BW ? void 0 : BW.pagePreviews()) && void 0 !== eW ? eW : null,
                bR = null !== (tR = null === (TW = iA) || void 0 === TW ? void 0 : TW.previewModule(MW)) && void 0 !== tR ? tR : null;
              if (null === CW || null === bR) {
                null === CW || void 0 === CW || CW.endSession(!1), NW = (0, sM.f)().sampleCount, await (0, xM.e)(RW, yR, AW, nb, NW, await zR);
                const WW = (0, xM.k)(MW);
                null === WW && console.warn(`${GC} this ${wW} build has no image registry: sky and model images won't show`), (0, Ow.i)(WW)
              } else {
                (0, yz.b)() && await new Promise((() => {}));
                const MW = (0, yz.A)();
                if (null !== MW) {
                  const RW = (0, xM.K)(yR);
                  return WW.crash(tw.RENDER_RELOAD_SITE, new Error(`${MW}${void 0===RW?"":` (${RW.message})`}`)), !1
                }
                NW = await CW.bindSession(bR, RW, (async WW => (0, xM.s)(yR, HC, AW, WW, nb, await zR)))
              }
            } catch (CW) {
              return WW.crash(HC, CW), !1
            }(function(WW, RW) {
              const MW = WW,
                {
                  requestCapture: wW,
                  takeCapture: CW
                } = MW;
              if ("function" !== typeof wW || "function" !== typeof CW) return;
              const zR = {
                request() {
                  wW.call(MW, RW)
                },
                take() {
                  var WW;
                  return null !== (WW = CW.call(MW)) && void 0 !== WW ? WW : null
                }
              };
              window[gz] = zR
            })(RW, NW), ab = !0;
            const gR = performance.now();
            return sA.boundAtMs = null !== (bR = (0, yz.B)()) && void 0 !== bR ? bR : gR, console.info(`${GC} ${wW} renderer bound at ${Math.round(gR)} ms`), !WW.isStopped
          }(fW, lW, oW, bR, eW, tR)) return null;
        if (null !== bR) {
          var LW, HW, DW;
          (0, MR.x)(bR);
          const WW = () => !fW.isStopped && Yy();
          MW.e(172).then((() => MW(8068))).then((RW => {
            let {
              devTools: MW
            } = RW;
            fW.isStopped || MW.setHost(function(WW) {
              return {
                tools: bz,
                async downloadScene(RW, MW) {
                  let {
                    width: wW,
                    height: CW,
                    colouring: zR
                  } = MW;
                  "screenshot" === RW && null === zR ? await (0, CC.b)(WW, wW, CW) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(WW, RW) {
              return {
                canvas: WW,
                maxTextureSize: zz,
                drawing: RW,
                resize: (WW, RW) => {
                  (0, gw.w)(XR.jb.Resize, 0, WW, RW, (0, gw.k)(1))
                },
                restoreSize: () => {
                  const RW = (0, sM.l)(WW);
                  null !== RW && (0, gw.w)(XR.jb.Resize, 0, RW.cssWidth, RW.cssHeight, (0, gw.k)(RW.renderScale))
                },
                onFrameDrawn: WW => (AC.add(WW), () => {
                  AC.delete(WW)
                })
              }
            }(tR, WW)))
          }), (WW => {
            console.warn(`${GC} the developer tools didn't load: no captures this session`, WW)
          }));
          const RW = "webgpu" === bR && null !== (LW = null === AW || void 0 === AW || null === (HW = AW.adapter) || void 0 === HW ? void 0 : HW.vendor) && void 0 !== LW ? LW : null;
          xb = {
            backend: bR,
            canvas: tR,
            fallbackReason: null !== (DW = null === AW || void 0 === AW ? void 0 : AW.reason) && void 0 !== DW ? DW : null,
            adapterVendor: RW
          }, zN();
          try {
            (0, dM.r)(bR, tR, RW)
          } catch (CW) {
            (0, dM.u)(), console.error(`${GC} the quality steps didn't start`, CW)
          }
        }
        const CR = (0, EW.h)(AW, (0, gM.f)());
        if (Hz = (0, EW.k)("webgpu" === bR ? fW : null, CR, qy), Wb) return null;
        if (aR.reserveAtJoin(function(WW) {
            return WW >= KR.d ? pw : hw
          }(null !== cR && void 0 !== cR ? cR : KR.g)), fW.isStopped) return null;
        const AR = WW => {
          if (null !== vb) try {
            vb.animationFrame(WW)
          } catch (CW) {
            yN(CW)
          }
          if (function(WW, RW) {
              return RW && !Wb && !wA && Jy() && Yy() && WW.framePaces(performance.now())
            }(fW, DA)) return fW.writePendingInput(), (0, JW.g)(WW, Ty), Ay(!1, WW), void requestAnimationFrame(AR);
          tN(fW, DA, "budget") && ((0, YR.f)(fW.lastFrameKind) && Yy() && (0, JW.g)(WW, Ty), Ay(DA && LA, WW), fy(fW), aR.afterFrame(), requestAnimationFrame(AR))
        };
        requestAnimationFrame(AR);
        return function(WW) {
          if (WW.has("inputLog") && (0, KM.l)((WW => {
              let {
                action: RW,
                down: MW,
                press: wW
              } = WW;
              console.info(`${OM} input ${RW} ${MW?"down":"up"} press ${wW} at ${performance.now().toFixed(1)}`)
            })), WW.has("inputDump")) {
            const WW = [];
            GM = WW, Object.assign(window, {
              bloxdInputDump: () => WW.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Vz = function(WW, RW) {
          let MW = null;
          const wW = () => {
              null !== MW && (clearInterval(MW), MW = null)
            },
            CW = () => {
              document.hidden ? MW ??= setInterval((() => {
                tN(WW, !1, "budget") ? (fy(WW), RW.afterFrame()) : wW()
              }), bA) : wW()
            };
          return document.addEventListener("visibilitychange", CW), CW(), () => {
            wW(), document.removeEventListener("visibilitychange", CW)
          }
        }(fW, aR), fW
      }(RW).then((WW => {
        var RW;
        (wW(Fz), cA(null !== WW), Qz(WW), null === WW) ? null === (RW = iA) || void 0 === RW || RW.pagePreviews().endSession(null === (0, ZW.v)()): Zz("booted")
      }), (WW => {
        wW(Fz), cA(!1), Qz(null), Fy({
          site: DC,
          error: WW,
          header: null
        }, Fz)
      }))
    }

    function by() {
      const WW = fz;
      null !== WW && Rb().then((RW => {
        let {
          pageBuiltInAnimationPack: MW
        } = RW;
        MW().provide(WW)
      }), (WW => {
        console.warn(`${GC} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, WW)
      }))
    }
    const yy = new class {
      constructor(WW) {
        this.deps = WW, this.latest = 0, this.mM = null
      }
      apply(WW, RW) {
        return this.load(WW, RW, 0)
      }
      async load(WW, RW, MW) {
        var wW;
        const CW = ++this.latest,
          zR = this.deps.compiler;
        if (void 0 === RW || null === RW || "object" !== typeof RW || 0 === Object.keys(RW).length || null === zR) return this.drop(WW), !1;
        if ((null === (wW = this.mM) || void 0 === wW ? void 0 : wW.module) === WW && (0, hR.Wd)(this.mM.files, RW)) return !1;
        try {
          const [MW, wW] = await Promise.all([zR(), this.deps.builtIns()]);
          if (CW !== this.latest) return !1;
          const AW = await MW(RW, mM, {
            builtIns: wW
          });
          if (CW !== this.latest) return !1;
          const bR = this.call(WW, AW);
          if (void 0 === bR) throw new VR("the compiled animations didn't read against the built-in pack");
          return this.mM = {
              module: WW,
              files: RW
            },
            function(WW) {
              for (let RW = 0; RW + 2 < WW.length; RW += 3) {
                ("error" === WW[RW] ? console.error : console.warn)(`Animation for the texture pack: ${WW[RW+1]}: ${WW[RW+2]}`)
              }
            }(bR), !0
        } catch (bR) {
          var AW;
          if (CW !== this.latest) return !1;
          this.drop(WW), 0 === MW && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", bR);
          const wW = (null !== (AW = this.deps.retryAfterMs) && void 0 !== AW ? AW : ER)[MW];
          return void 0 === wW || bR instanceof VR || (0, UR.j)(WW) || setTimeout((() => {
            CW === this.latest && this.load(WW, RW, MW + 1)
          }), wW), !1
        }
      }
      call(WW, RW) {
        try {
          return WW.beW(RW)
        } catch (MW) {
          throw (0, UR.l)(WW, MW), MW
        }
      }
      clear(WW) {
        this.latest++, this.drop(WW)
      }
      drop(WW) {
        const RW = this.mM;
        if (this.mM = null, (null === RW || void 0 === RW ? void 0 : RW.module) === WW && !(0, UR.j)(WW)) try {
          this.call(WW, null)
        } catch {}
      }
    }({
      compiler: aM.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: WW
        } = await Rb();
        return WW().whenSet()
      },
      warn: qy
    });
    async function Nb(WW, RW) {
      let wW = !1;
      await eb({
        matchmake: async () => {
          const {
            guestJoinTarget: CW,
            guestJoinWithPack: zR
          } = await MW.e(322).then((() => MW(40752)));
          return wW ? CW(WW, RW, Wy()) : (wW = !0, zR(WW, RW, (RW => Ry(WW, RW)), Wy))
        },
        onFailure: WW => {
          (0, tw.showJoinFailure)(WW, Fz)
        },
        rejoin: cy,
        invalidateTrafficCode: Xb
      })
    }
    async function eb(WW) {
      let {
        matchmake: RW,
        onFailure: MW,
        rejoin: CW,
        invalidateTrafficCode: zR,
        pageReady: AW,
        signal: bR
      } = WW;
      const yR = () => !0 === (null === bR || void 0 === bR ? void 0 : bR.aborted);
      let NW;
      const eW = Sw.rejoinHold(),
        BW = (0, nR.G)("wasm", Qy);
      let tR = !1,
        TW = performance.now();
      try {
        if (!await Xz) return {
          kind: "stopped"
        };
        if (yR()) return {
          kind: "JA"
        };
        Mb().catch((() => {}));
        let WW = await RW();
        TW = performance.now();
        const MW = () => performance.now() - WW.matchedAt <= WW.freshMs,
          wW = ty(WW.target).catch((() => {}));
        MW() && !yR() && (NW = new Pw(WW.target, {
          signal: bR
        }));
        const zR = performance.now();
        if (null === await rA) return {
          kind: "stopped"
        };
        var gR;
        if (function(WW) {
            var RW, MW;
            if (iz.e.markGameEngineConstructed(), IC) return;
            IC = !0;
            const wW = Math.max(WW, null !== (RW = JC) && void 0 !== RW ? RW : WW);
            (0, YC.g)("ready", Math.max(0, (null !== (MW = PC) && void 0 !== MW ? MW : wW) - wW) / 1e3)
          }(zR), await wW, !MW() && !yR()) null === (gR = NW) || void 0 === gR || gR.rematched(), WW = await RW(), TW = performance.now();
        if (yR()) return {
          kind: "JA"
        };
        const eW = await async function(WW) {
          var RW, MW, wW;
          let {
            signal: CW,
            rejoin: zR = null,
            early: AW,
            pageReady: bR
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== CW && void 0 !== CW && CW.aborted) throw new DOMException("the join was left", "AbortError");
          const yR = (NW = oA, eW = performance.now(), null !== NW && eW - NW < Cw);
          var NW, eW;
          oA = null;
          const BW = new AbortController;
          Yb({
            controller: BW,
            game: null !== (RW = null === (MW = WW.session) || void 0 === MW ? void 0 : MW.gameNameWithVariation) && void 0 !== RW ? RW : null
          }), lA = null, null === (wW = QA) || void 0 === wW || wW.abort(), QA = null, cb = !1, XA = null, jb.clear();
          const tR = () => {
            (0, eR.i)(BW, (0, eR.e)(CW))
          };
          null === CW || void 0 === CW || CW.addEventListener("abort", tR, {
            once: !0
          });
          try {
            var TW, gR;
            const RW = await rA;
            if (null === RW || RW.isStopped || Wb) throw new Error("no core is running to join a game with");
            if (WW.session && null !== Hz) {
              const RW = await Tb(Hz.join(WW.session.gameNameWithVariation), BW.signal);
              if (null !== RW) throw new EW.d(RW)
            }
            const [, , , {
              joinRoom: MW
            }] = await Tb(Promise.all([(0, PW.l)(RW), ty(WW), null === bR || void 0 === bR ? void 0 : bR(), Mb()]), BW.signal), wW = WW.session, CW = wW ? {
              ...ay,
              attachSocket: RW => {
                const MW = Vb(RW, WW.endpoint);
                var CW;
                null !== MW && (JA = {
                  conn: MW,
                  info: wW
                }, null === (CW = PA) || void 0 === CW || CW(wW.playerDbId));
                return MW
              }
            } : ay, NW = await MW(CW, WW, {
              signal: BW.signal,
              early: AW
            }).catch((WW => {
              throw function(WW) {
                if (!(WW instanceof jR.b)) return WW;
                if ("roomError" === WW.stage && null !== XA) return Bb(new jR.b(WW.message, WW.stage, WW.code, XA), WW);
                const RW = "closed" === WW.stage && null !== FA ? jb.get(FA.conn) : void 0;
                return void 0 === RW ? WW : Bb(new jR.b(WW.message, WW.stage, RW.code), WW)
              }(WW)
            }));
            if (ib !== BW) throw NW.Cw(), new DOMException("the join was left", "AbortError");
            Pb(NW);
            const eW = function(WW) {
              var RW, MW;
              const {
                session: wW
              } = WW, CW = void 0 === wW ? WW.joinOptions.lobbyName : wW.lobbyName;
              return {
                endpoint: WW.endpoint,
                game: null !== (RW = null === wW || void 0 === wW ? void 0 : wW.gameNameWithVariation) && void 0 !== RW ? RW : WW.roomName,
                lobby: String(null !== CW && void 0 !== CW ? CW : null),
                postCookies: null !== (MW = WW.postCookies) && void 0 !== MW ? MW : null
              }
            }(WW);
            gb.set(NW, eW), Tw(eW);
            const tR = performance.now(),
              iR = {
                conn: NW.conn,
                rejoin: zR,
                game: null !== (TW = null === (gR = WW.session) || void 0 === gR ? void 0 : gR.gameNameWithVariation) && void 0 !== TW ? TW : "",
                joinedAt: tR,
                rejoinedAt: yR ? tR : null,
                overflow: null
              };
            IA = iR, performance.mark(SC), by(), console.info(`${GC} joined ${WW.roomName} as ${NW.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const YW = lA;
            lA = null, null !== YW && fb(iR, YW.mask, YW.frames);
            const JW = jb.get(NW.conn);
            return jb.clear(), void 0 !== JW && (Pb(null), jy(NW.conn, JW.code, JW.reason)), NW
          } finally {
            var iR;
            null === CW || void 0 === CW || CW.removeEventListener("abort", tR), ib === BW && Jb(TA, null), (null === (iR = FA) || void 0 === iR ? void 0 : iR.join) === BW && (FA = null)
          }
        }(WW.target, {
          signal: bR,
          rejoin: CW(WW.target),
          early: NW,
          pageReady: AW
        });
        return tR = !0, {
          kind: "joined",
          game: eW
        }
      } catch (YW) {
        if (YW instanceof DOMException && "AbortError" === YW.name || yR()) return {
          kind: "JA"
        };
        if (Wb) return {
          kind: "stopped"
        };
        if (cb && (cb = !1, await zR().catch((WW => {
            console.warn(`${GC} the cached traffic code could not be dropped`, WW)
          }))), null === await rA) return {
          kind: "stopped"
        };
        if (YW instanceof EW.d) return MW(YW, performance.now() - TW), {
          kind: "failed",
          error: YW,
          reloading: !1
        };
        if (YW instanceof jR.b && YW.code === wW.b.wasmClientNotAllowed.code && HA) return Ob("this server refused the wasm client to this account"), {
          kind: "failed",
          error: YW,
          reloading: !0
        };
        const WW = YW instanceof jR.b && YW.code === wW.b.outdatedVersion.code,
          RW = () => null === TA,
          CW = await jN({
            site: tw.JOIN_SITE,
            error: YW,
            outdated: WW
          }, (() => {
            MW(YW, performance.now() - TW)
          }), RW);
        return {
          kind: "failed",
          error: YW,
          reloading: CW
        }
      } finally {
        var iR;
        tR || BW.end(), Sw.releaseHold(eW);
        const WW = null === (iR = NW) || void 0 === iR ? void 0 : iR.release();
        WW && (0, tw.reportUnusedSeat)(WW, Fz)
      }
    }

    function Bb(WW, RW) {
      return WW.stack = RW.stack, WW
    }

    function ty(WW) {
      return WW.session ? (0, PW.q)(lz, WW.session.gameNameWithVariation) : Promise.resolve()
    }

    function Tb(WW, RW) {
      return (0, eR.j)(RW), new Promise(((MW, wW) => {
        const CW = () => {
          wW((0, eR.e)(RW))
        };
        RW.addEventListener("abort", CW, {
          once: !0
        }), WW.then((WW => {
          RW.removeEventListener("abort", CW), MW(WW)
        }), (WW => {
          RW.removeEventListener("abort", CW), wW(WW)
        }))
      }))
    }

    function gy() {
      var WW, RW;
      return null !== (WW = null === (RW = Hz) || void 0 === RW ? void 0 : RW.runsInJoinedGame()) && void 0 !== WW && WW
    }

    function iy() {
      Yb(null)
    }

    function Yb(WW) {
      var RW, MW, wW;
      null === jA || jA.left || (jA.left = !0, null === (wW = (0, PW.i)()) || void 0 === wW || wW.socketLeft(), (0, BW.n)({
        websocketUrl: null
      }));
      ib && (0, eR.i)(ib, new DOMException("the join was left", "AbortError")), ob(null !== WW), null === (RW = Hz) || void 0 === RW || RW.Cw();
      const CW = TA;
      null !== WW && Sw.setGame(WW.game), Jb(null, null !== (MW = null === WW || void 0 === WW ? void 0 : WW.controller) && void 0 !== MW ? MW : null), null === CW || void 0 === CW || CW.Cw(), Ib(0), (0, AR.f)()
    }

    function Jb(WW, RW) {
      TA = WW, ib = RW, null === TA && null === ib && Sw.setGame(void 0)
    }

    function Pb(WW) {
      Jb(WW, ib)
    }

    function Ib(WW) {
      const RW = Jz;
      return null !== Nz && !Wb && null !== RW && !RW.isStopped && (!!Nz(jR.e, 0, (0, jR.q)(WW)) && (AA = !0, 0 === WW || wA || tN(RW, !1, "all"), !0))
    }

    function ob() {
      var WW, RW;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, nR.f)();
      const MW = null !== (WW = null === (RW = IA) || void 0 === RW ? void 0 : RW.overflow) && void 0 !== WW ? WW : null;
      IA = null, null !== MW && (0, tw.reportEventOverflow)(MW, Fz)
    }

    function lb() {
      null !== TA || null !== ib ? iy() : my()
    }

    function Fb(WW, RW) {
      console.warn(`${GC} the event buffer refused records in ${RW} frames (categories ${WW})`), Wb || (null !== IA ? fb(IA, WW, RW) : null !== ib && function(WW, RW, MW) {
        var wW;
        const CW = function(WW, RW) {
          return null === WW ? "drop" : WW.activated ? "keep" : 0 !== (RW & ww.m.NetSession) ? "fail" : "drop"
        }((null === (wW = FA) || void 0 === wW ? void 0 : wW.join) === WW ? FA : null, RW);
        "keep" === CW ? lA = {
          mask: RW,
          frames: MW
        } : "fail" === CW && (0, eR.i)(WW, new Error("the join's net session was lost to an event overflow"))
      }(ib, WW, RW))
    }

    function fb(WW, RW, MW) {
      const wW = WW.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      wW.frames += MW, wW.acks++, wW.mask |= RW;
      const CW = function(WW, RW, MW) {
        if (0 === (WW & ww.m.NetSession)) return "none";
        const wW = null !== RW.rejoinedAt && MW - RW.rejoinedAt < zC;
        return null === RW.rejoin || wW ? "fail" : "rejoin"
      }(RW, WW, performance.now());
      "none" !== CW && queueMicrotask((() => {
        if (IA !== WW) return;
        const RW = "rejoin" === CW && performance.now() - fA >= XW.i;
        wW.outcome = RW ? "rejoined" : "failed", ky(function(WW, RW) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: WW,
            automaticallyReconnect: RW,
            requiresRefresh: !1
          }
        }(null !== WW.rejoin, RW), WW.rejoin, RW), iy(), RW && (oA = performance.now())
      }))
    }

    function Qb(WW) {
      DA = WW, qb && ry(qb, WW)
    }

    function ry(WW, RW) {
      WW.style.visibility = RW ? "visible" : "hidden"
    }

    function cy(WW) {
      var RW;
      const MW = WW.roomName,
        wW = null !== (RW = WW.joinOptions.lobbyName) && void 0 !== RW ? RW : null;
      return () => {
        Nb(MW, wW)
      }
    }

    function Xb() {
      return MW.e(322).then((() => MW(40752))).then((WW => {
        let {
          invalidateGuestTrafficCode: RW
        } = WW;
        return RW()
      })).catch((WW => {
        console.warn(`${GC} the cached traffic code could not be dropped`, WW)
      }))
    }

    function jy(WW, RW, MW) {
      var CW, zR;
      if (Wb) return;
      if ((null === (CW = IA) || void 0 === CW ? void 0 : CW.conn) !== WW) return void(null !== ib && jb.set(WW, {
        code: RW,
        reason: MW
      }));
      const {
        rejoin: AW,
        game: bR,
        joinedAt: yR
      } = IA;
      ob();
      const NW = (0, XW.q)(RW, (0, bC.f)(WW));
      if (console.info(`${GC} the game's connection closed with code ${RW} (${null!==(zR=NW.name)&&void 0!==zR?zR:"unrecognised"})`), RW !== wW.b.gameOrPluginKick.code && (0, tw.reportDisconnect)(NW, Fz, {
          closeReason: MW,
          sinceJoinedMs: performance.now() - yR,
          game: bR
        }), NW.requiresRefresh) {
        const WW = "outdatedVersion" === NW.name,
          MW = new Error(`the game's connection closed with code ${RW}`),
          wW = () => null === IA && null === ib;
        return void jN({
          site: tw.JOIN_SITE,
          error: MW,
          outdated: WW
        }, (() => {
          wW() && ky(NW, null, !1)
        }), wW)
      }
      const eW = NW.canReconnect ? AW : null,
        BW = null !== eW && NW.automaticallyReconnect && performance.now() - fA >= XW.i;
      ky(NW, eW, BW)
    }

    function ky(WW, RW, MW) {
      var wW;
      if (ZA) return;
      Sw.unwantedLeave(MW && null !== RW && 0 === rb.size), null === (wW = QA) || void 0 === wW || wW.abort();
      const CW = new AbortController;
      QA = CW;
      const zR = null === RW ? null : () => {
        CW.signal.aborted || (CW.abort(), RW())
      };
      if (MW && null !== zR) {
        fA = performance.now();
        const WW = setTimeout(zR, XW.e);
        CW.signal.addEventListener("abort", (() => {
          clearTimeout(WW)
        }))
      }
      const AW = {
        code: WW.code,
        name: WW.name,
        reason: WW.reason,
        reconnect: zR,
        reconnecting: MW,
        requiresRefresh: WW.requiresRefresh
      };
      if (rb.size > 0)
        for (const yR of [...rb]) try {
          yR(AW)
        } catch (bR) {
          console.error(`${GC} an unwanted-leave listener threw`, bR)
        } else Mw((0, SM.j)(WW, null !== zR, MW), CW.signal).then((RW => {
          RW && (null !== zR ? zR() : WW.requiresRefresh && (0, VW.i)())
        }))
    }
    const ay = {
      attachSocket: WW => Vb(WW),
      onConnection: WW => (kb.add(WW), () => {
        kb.delete(WW)
      }),
      sendRaw: (WW, RW) => {
        const MW = jA;
        return null !== MW && MW.conn === WW && oy(MW, RW)
      },
      leaveRoom: Ib,
      closeSocket: WW => {
        var RW;
        (null === (RW = jA) || void 0 === RW ? void 0 : RW.conn) === WW && my()
      }
    };

    function sb(WW) {
      let {
        aux: RW,
        payload: MW
      } = WW;
      const wW = Jz;
      return null !== wW && !wW.isStopped && (wW.queueOptions(RW, MW), !0)
    }

    function db(WW, RW) {
      sb(function(WW, RW) {
        return BC = WW ? {
          preventMovement: RW
        } : null, WW ? tz(RW) : {
          aux: XR.Ib.AdEnd,
          payload: eC
        }
      }(WW, RW))
    }

    function pb(WW) {
      var RW;
      eA = WW, null === (RW = Jz) || void 0 === RW || RW.setUiPrefs(WW)
    }

    function hb(WW, RW) {
      lz.setMaster(WW, RW)
    }

    function Ub(WW) {
      var RW;
      BA = WW, null === (RW = Jz) || void 0 === RW || RW.setEnvPrefs(WW)
    }

    function Eb(WW) {
      var RW;
      tb = WW, null === (RW = Jz) || void 0 === RW || RW.setLookPrefs(WW)
    }

    function Vb(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(WW.url).origin;
      if (WW.readyState === WebSocket.CLOSING || WW.readyState === WebSocket.CLOSED) return console.warn(`${GC} a closing or closed socket can't be attached`), null;
      const wW = Jz;
      if (!wW || wW.isStopped) return console.warn(`${GC} no core is running to attach a socket to`), WW.close(), null;
      if (null === (0, PW.i)()) return console.warn(`${GC} the game has not started to attach a socket to`), WW.close(), null;
      if (WA > XR.r) return console.warn(`${GC} this core has attached all the sockets it can; reload to play on`), WW.close(), null;
      if (AA && !wA && (tN(wW, !1, "all"), wW.isStopped || Wb)) return WW.close(), null;
      my();
      const CW = WA++;
      if (!vy(wW, "open", CW)) return WW.close(), null;
      FA = null === ib ? null : {
        join: ib,
        conn: CW,
        activated: !1
      }, WW.binaryType = "arraybuffer";
      const zR = {
          ws: WW,
          conn: CW,
          pending: [],
          pendingBytes: 0,
          left: !1,
          detach: () => {
            WW.removeEventListener("message", AW), WW.removeEventListener("open", bR), WW.removeEventListener("close", yR)
          }
        },
        AW = WW => {
          WW.data instanceof ArrayBuffer && function(WW, RW, MW) {
            cN(WW, (() => {
              WW.rings.net.writeFrame(RW, MW) || WW.crash(vM.w, `a socket frame of ${MW.byteLength} bytes did not fit the net-in ring`)
            }));
            const wW = WW.rings.net.cursor >= wz;
            (wW || WW.netWrittenSinceFrame >= Mz || document.hidden && performance.now() - RA >= bA) && tN(WW, !1, "budget")
          }(wW, CW, new Uint8Array(WW.data))
        },
        bR = () => {
          for (const RW of zR.pending.splice(0)) WW.send(RW);
          zR.pendingBytes = 0
        },
        yR = WW => {
          jA === zR && wW.rings.net.cursor > 0 && tN(wW, !1, "all"), jA === zR && (zR.detach(), jA = null, vy(wW, "close", CW), xy(CW, zR.left), jy(CW, WW.code, WW.reason))
        };
      return WW.addEventListener("message", AW), WW.addEventListener("open", bR), WW.addEventListener("close", yR), jA = zR, null === (RW = (0, PW.i)()) || void 0 === RW || RW.socketAttached(CW), (0, BW.n)({
        websocketUrl: MW
      }), CW
    }

    function my() {
      const WW = jA;
      WW && (jA = null, WW.detach(), WW.ws.close(), Jz && vy(Jz, "close", WW.conn), xy(WW.conn, WW.left))
    }

    function xy(WW, RW) {
      var MW;
      null === (MW = (0, PW.i)()) || void 0 === MW || MW.closeGame(WW), (0, NC.e)().close(WW), RW || (0, BW.n)({
        websocketUrl: null
      })
    }

    function vy(WW, RW, MW) {
      let wW = !1;
      return cN(WW, (() => {
        const {
          net: CW
        } = WW.rings;
        wW = "open" === RW ? CW.writeOpen(MW) : CW.writeClose(MW), wW || WW.crash(vM.w, `a socket ${RW} did not fit the net-in ring`)
      })), wW
    }

    function Kb(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (ub()) return (0, tw.reportUnsupportedFallback)(WW, RW, MW), void Ob(`the wasm client can't run here (${RW})`);
      (0, tw.showUnsupported)(WW, "unsupported", RW, MW)
    }

    function ub() {
      return HA && "wasm" !== (0, CR.i)(window.location.search)
    }

    function Ob(WW) {
      let {
        forThisPageOnly: RW = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      console.warn(`${GC} ${WW}: reloading on the JS client`), RW || (0, CR.m)();
      const MW = () => {
        (0, VW.g)(CR.r)
      };
      (0, tw.flushCrashReports)(VW.b).then(MW, MW)
    }

    function nb(WW, RW, MW, wW) {
      return pA(WW, RW, MW, wW)
    }

    function Gb() {
      null === EA || null === Jz || Jz.isStopped || Wb || null !== Oz || null === Nz || (Oz = EA(Nz, qy, Zb().follow))
    }

    function Lb() {
      var WW, RW, MW;
      return null !== (WW = null === (RW = Iz) || void 0 === RW || null === (MW = RW.textures) || void 0 === MW ? void 0 : MW.files()) && void 0 !== WW ? WW : null
    }

    function Hb(WW) {
      MW.e(239).then((() => MW(38247))).then((RW => {
        let {
          setIconFileOverrides: MW
        } = RW;
        MW(WW)
      }), (WW => {
        console.warn(`${GC} the item icons couldn't take the texture pack's files`, WW)
      }))
    }

    function Db(WW) {
      Zb().follow((RW => {
        null !== RW && Promise.all([Promise.all([MW.e(175), MW.e(39)]).then((() => MW(40778))), (0, yz.D)()]).then((WW => {
          let [{
            followPagePackFiles: MW
          }, wW] = WW;
          const CW = null === wW || (0, xM.l)(wW) ? "webgl" : wW.backend;
          MW(RW, qC.h, CW, (WW => {
            qC.h.setPageFiles(WW)
          }), qy)
        }), (RW => {
          console.warn(`${GC} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, RW), WW()
        }))
      }))
    }

    function qy(WW, RW) {
      console.warn(`${GC} ${WW}`, RW)
    }

    function Zb() {
      return Pz ??= new FC({
        load: WW => Promise.all([MW.e(175), MW.e(43)]).then((() => MW(40783))).then((RW => {
          let {
            startPageTexturePackFeed: MW
          } = RW;
          return MW(qy, WW)
        })),
        store: BM.e,
        Mw: WW => {
          rA.then((() => {
            (0, tw.reportTexturePackFeedLoadFailure)(WW, Fz)
          }))
        }
      }), Pz
    }
    const Sb = WW => Zb().follow(WW);

    function Wy() {
      return Zb().loaded()
    }
    const Ry = function(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          CW = 0;
        return async function(zR, AW) {
          let bR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const yR = ++CW,
            NW = wW() + RW,
            eW = await
          function(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((wW => {
              const CW = setTimeout((() => {
                wW(null), WW.then((WW => {
                  null !== WW && (WW.joinedWithout(), MW(WW))
                }))
              }), RW);
              WW.then((WW => {
                clearTimeout(CW), wW(WW)
              }))
            }))
          }(WW(zR), RW, (WW => {
            yR === CW && bR() && AW(WW, wW() + RW).catch((WW => {
              MW("the texture pack step after the join failed", WW)
            }))
          }));
          return null === eW ? null : AW(eW, NW)
        }
      }((WW => (0, DW.k)(WW) ? Zb().request() : Zb().forJoin()), lC.b, qy),
      My = function(WW, RW) {
        let MW = !1;
        return {
          setGamePackConfirm: WW => {
            MW = null !== WW, RW(WW)
          },
          packStep: (RW, wW, CW) => WW(RW, wW, (() => MW && CW()))
        }
      }(Ry, (WW => {
        Zb().setGamePackConfirm(WW)
      }));

    function wy(WW) {
      My.setGamePackConfirm(WW)
    }
    async function Cy(WW, RW, wW) {
      const {
        gamePackSource: CW
      } = await MW.e(323).then((() => MW(40760)));
      await My.packStep(WW, ((MW, wW) => MW.packForGame(WW, CW(RW), wW)), wW)
    }

    function zN() {
      if (Wb || null !== vb || null === VA || null === xb) return;
      const {
        backend: WW,
        canvas: RW,
        fallbackReason: MW,
        adapterVendor: wW
      } = xb, CW = VA;
      VA = null;
      try {
        vb = CW({
          backend: WW,
          canvas: RW,
          fallbackReason: MW,
          adapterVendor: wW,
          joinedGame: () => Wb ? null : TA,
          inGame: bN,
          shaderPackRuns: gy,
          writeCmd: (WW, RW, MW) => null !== Nz && Nz(WW, RW, MW),
          takeFailedMeshJobs: () => {
            var WW, RW;
            return null !== (WW = null === (RW = dz) || void 0 === RW ? void 0 : RW.takeFailedMeshJobs()) && void 0 !== WW ? WW : 0
          }
        })
      } catch (zR) {
        console.error(`${GC} the frame telemetry didn't start`, zR)
      }
    }

    function Ay(WW, RW) {
      try {
        var MW, wW, CW;
        const zR = ab && null !== (MW = null === (wW = Jz) || void 0 === wW || null === (CW = wW.lastHeader) || void 0 === CW ? void 0 : CW.renderPending) && void 0 !== MW ? MW : 0;
        (0, dM.h)(RW, WW, bN() && !(null !== BC), zR)
      } catch (zR) {
        (0, dM.u)(), console.error(`${GC} the quality steps stopped`, zR)
      }
    }

    function bN() {
      return null !== TA && GA === TA && !Wb
    }

    function yN(WW) {
      const RW = vb;
      vb = null;
      try {
        null === RW || void 0 === RW || RW.stop()
      } catch {}
      console.error(`${GC} the frame telemetry threw: it stops`, WW)
    }

    function Ny(WW) {
      var RW;
      if ((0, NC.e)().fire(WW), "message" === WW.type) {
        if (CA++, WW.PA === XR.pc.ERROR && null !== ib) {
          var MW;
          const {
            text: RW,
            dropsCache: wW
          } = (0, XW.w)((new TextDecoder).decode(WW.payload));
          cb ||= wW, (null === (MW = FA) || void 0 === MW ? void 0 : MW.conn) === WW.conn && (XA = RW)
        }
        return
      }
      if (WW.phase === XR.w.Left) zb = WW.conn;
      else if (WW.phase === XR.w.Activated) {
        var wW;
        zM.d.reset(), (null === (wW = FA) || void 0 === wW ? void 0 : wW.conn) === WW.conn && (FA.activated = !0)
      }
      const CW = Object.keys(XR.w).find((RW => XR.w[RW] === WW.phase)),
        zR = 0 === WW.code ? "" : ` (code ${WW.code})`;
      console.info(`${GC} conn ${WW.conn}: ${null!==CW&&void 0!==CW?CW:WW.phase}${zR}, ${CA} raw messages so far`), (null === (RW = TA) || void 0 === RW ? void 0 : RW.conn) !== WW.conn || WW.phase !== XR.w.Left && WW.phase !== XR.w.Closed || Pb(null), YA !== WW.conn || WW.phase !== XR.w.Left && WW.phase !== XR.w.Closed || (YA = null, null === TA && null === ib && Sw.setGame(void 0));
      for (const bR of [...kb]) try {
        bR(WW.conn, WW.phase, WW.code)
      } catch (AW) {
        (0, jM.o)(AW, `${GC} a connection listener threw`)
      }
    }

    function ey() {
      (0, yz.s)(), queueMicrotask((() => {
        try {
          ly()
        } catch (WW) {
          console.warn(`${GC} stopping before the reload threw`, WW)
        }(0, tw.flushCrashReports)(VW.b).then(VW.i, VW.i)
      }))
    }

    function By() {
      const WW = Jz;
      null === WW || WW.isStopped || null === jA || wA || !WW.hasPendingCommands() || tN(WW, !1, "budget")
    }

    function tN(WW, RW, MW) {
      let wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const CW = wA;
      wA = !0;
      try {
        return function(WW, RW, MW, wW) {
          var CW, zR, AW;
          if (Wb) return !1;
          if (cN(WW, gN), Wb || WW.isStopped) return !1;
          Py() && Zz("modelsIn");
          RA = performance.now(), zb = null, AA = !1, (0, JW.M)(), null === (CW = mA) || void 0 === CW || CW.beforeFrame(), LM(RA, WW), (0, JW.C)(RA, iN), MA = !0;
          const bR = RW && Jy();
          let yR;
          try {
            yR = WW.frame(RA, bR, MW)
          } finally {
            MA = !1
          }
          if (!yR) return !1;
          mb.observe(null !== (zR = null === (AW = WW.lastHeader) || void 0 === AW ? void 0 : AW.chunksCancelled) && void 0 !== zR ? zR : 0);
          const NW = WW.lastFrameKind;
          RW && (LA = (0, YR.c)(NW));
          if (null !== vb) try {
            vb.frameRan(WW, RA, performance.now(), NW)
          } catch (BW) {
            yN(BW)
          }
          "drawn" === NW && Yy() && function() {
            for (const WW of [...AC]) WW()
          }();
          WW.forEachNetOut(Iy);
          const eW = jA;
          null !== zb && (null === eW || void 0 === eW ? void 0 : eW.conn) === zb && oy(eW, jR.i);
          RW && function(WW) {
            var RW, MW, wW;
            if (null === TA || !Jy()) return;
            const CW = WW.lastHeader,
              zR = !ab || 0 === (null === CW || void 0 === CW ? void 0 : CW.renderPending);
            !nA && zR && (nA = !0, performance.mark(Rz));
            if (GA === TA) return;
            const AW = null !== (RW = null === CW || void 0 === CW ? void 0 : CW.firstView) && void 0 !== RW ? RW : XR.R.NotYet;
            if (ab && AW === XR.R.NotYet) return;
            if (OA && (!0 !== (null === (MW = (0, PW.i)()) || void 0 === MW ? void 0 : MW.isSessionLive) || !zR)) return;
            GA = TA;
            const bR = TA;
            if (setTimeout((() => {
                TA === bR && (0, oR.d)()
              }), 0), null === (wW = Hz) || void 0 === wW || wW.playable(), OA) return;
            OA = !0, performance.mark(Wz);
            const yR = Math.round(performance.now());
            ab && AW === XR.R.Backstop ? console.warn(`${GC} playable at ${yR} ms on the first view's backstop: it wasn't drawn whole in time`) : console.info(`${GC} playable at ${yR} ms${ab?"":" (no renderer)"}`);
            setTimeout(UA, 0), (0, bM.d)().catch((WW => {
              console.error(`${GC} item sprites didn't load, so item particles show the missing texture`, WW)
            }))
          }(WW);
          (0, vM.N)(WW, {
            worldgen: aA,
            mesh: dz
          }),
          function(WW) {
            WW.forEachEvent(DM);
            for (const RW of HM) try {
              (0, KM.e)(RW)
            } catch (BW) {
              if ((0, jM.i)(BW)) {
                WW.crashOn(vM.l, BW);
                break
              }
              console.error(`${OM} an input action listener threw`, BW)
            }
            HM.length = 0
          }(WW), wW && (0, iM.e)();
          return !WW.isStopped
        }(WW, RW, "all" === MW || WW.rings.net.cursor >= wz || WW.netKeptFrames >= Cz, wW)
      } finally {
        wA = CW
      }
    }

    function Ty(WW) {
      console.error(`${GC} a frame-start listener threw`, WW)
    }

    function gN() {
      var WW, RW, MW, wW;
      null === (WW = vA) || void 0 === WW || WW.drain(Nz, ez), null === (RW = nz) || void 0 === RW || RW.drain(Nz), null === (MW = Gz) || void 0 === MW || MW.drain(performance.now()), hA(Nz), null === (wW = Oz) || void 0 === wW || wW.drain()
    }

    function iN(WW) {
      console.error(`${GC} a before-frame listener threw`, WW)
    }

    function Yy() {
      return ab && Jy()
    }

    function Jy() {
      return Lz && Py()
    }

    function Py() {
      return null === vA || vA.startupDone
    }

    function Iy(WW, RW) {
      const MW = jA;
      (null === MW || void 0 === MW ? void 0 : MW.conn) === WW ? oy(MW, RW) : NA++
    }

    function oy(WW, RW) {
      const {
        ws: MW
      } = WW;
      return MW.readyState === WebSocket.OPEN ? (MW.send(RW), !0) : MW.readyState === WebSocket.CONNECTING && WW.pendingBytes + RW.byteLength <= zA ? (WW.pending.push(RW.slice()), WW.pendingBytes += RW.byteLength, !0) : (NA++, !1)
    }

    function ly() {
      var WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW;
      Wb = !0, (0, JW.I)().unlockPointer(), (0, JW.G)(null), null === (WW = xA) || void 0 === WW || WW(), xA = null, null === (RW = (0, PW.s)()) || void 0 === RW || RW.followCursorAim(null), (0, iM.B)(), (0, PW.e)(), lz.stop(), null === (MW = KA) || void 0 === MW || MW(), KA = null, null === (wW = uA) || void 0 === wW || wW(), uA = null, null === (CW = vb) || void 0 === CW || CW.stop(), vb = null, (0, gw.s)(null), null === (zR = kA) || void 0 === zR || zR(), kA = null, null === (AW = aA) || void 0 === AW || AW.stop(), aA = null, null === (bR = dz) || void 0 === bR || bR.stop(), dz = null, null !== (yR = Iz) && void 0 !== yR && null !== (NW = yR.textures) && void 0 !== NW && NW.assets && Hb(null), null === (eW = Iz) || void 0 === eW || eW.stop(), Iz = null, oz = null;
      const IW = pz;
      pz = null, IW && (IW.stop(), rN(IW)), null === (BW = nz) || void 0 === BW || BW.dispose(), nz = null, null === (tR = Gz) || void 0 === tR || tR.dispose(), Gz = null, vA = null, null === (TW = uz) || void 0 === TW || TW(), uz = null, null === (gR = Vz) || void 0 === gR || gR(), Vz = null, null === (iR = mA) || void 0 === iR || iR.stop(), mA = null, iy(), Sw.release(), my();
      const oW = Oz;
      Oz = null;
      try {
        null === oW || void 0 === oW || oW.dispose()
      } catch (lW) {
        console.warn(`${GC} the sky's images didn't release`, lW)
      }(0, Ow.i)(null), null === (YW = iA) || void 0 === YW || YW.pagePreviews().endSession(null === (0, ZW.v)())
    }

    function Fy(WW, RW) {
      var MW, wW;
      const CW = null !== (MW = null === (wW = pz) || void 0 === wW ? void 0 : wW.details()) && void 0 !== MW ? MW : {},
        zR = WW.site === HC || WW.site === DC || WW.site === tw.RENDER_RELOAD_SITE || WW.site === qz ? WW.error instanceof WebAssembly.RuntimeError || WW.error instanceof UR.d : !(0, xM.n)(WW.error) && (0, vM.J)(WW);
      zR && WW.error instanceof Error && (0, ZW.cb)(WW.error);
      const AW = zR || WW.site === vM.x ? (0, tw.readTrap)(WW.error) : null,
        bR = null !== AW && (0, kM.b)(AW.kind, AW.refusedBytes) ? AW.refusedBytes : 0,
        yR = null === hz ? Ew(function() {
          try {
            return (0, ZW.C)().buffer.byteLength
          } catch {
            return 0
          }
        }(), bR, null) : hz.ceilingMayRefuse(bR),
        NW = bR > 0 && !yR && ub();
      var eW;
      if (NW && ((0, CR.m)(), SA = !0), ly(), (0, yz.b)()) return console.warn(`${GC} the session stopped at ${WW.site} as the page reloads`, WW.error), void((0, xM.n)(WW.error) || (null === (eW = WW.header) || void 0 === eW ? void 0 : eW.lastError) === XR.B.CoreBusy || (0, tw.reportStoppedCore)(WW, RW, AW, {
        memoryDetails: CW,
        declined: NW
      }));
      (0, tw.showCrash)(WW, RW, AW, {
        memoryDetails: CW,
        declined: NW
      })
    }

    function fy(WW) {
      const {
        input: RW,
        net: MW,
        worker: wW
      } = WW.rings, CW = WW.optionsDropped, zR = RW.dropped + CW + MW.dropped + wW.dropped + NA;
      zR !== yb && function(WW, RW) {
        const MW = performance.now();
        return !(MW - bb[WW] < Az) && (bb[WW] = MW, console.warn(`${GC} ${RW}`), !0)
      }("dropped", `${zR} records dropped so far (input ${RW.dropped}, options ${CW}, net ${MW.dropped}, worker ${wW.dropped}, net-out ${NA})`) && (yb = zR)
    }

    function Qy() {
      var WW, RW, MW, wW;
      const CW = (0, NM.e)(),
        zR = null === CW ? null : (0, eM.i)(CW);
      return {
        ...null === (WW = pz) || void 0 === WW ? void 0 : WW.pageKillSnapshot(),
        renderDistance: null === zR ? null : Math.min(zR.horizontal, null !== (RW = null === (MW = pz) || void 0 === MW ? void 0 : MW.shedDistanceInUse()) && void 0 !== RW ? RW : 1 / 0),
        renderDistanceVertical: null !== (wW = null === zR || void 0 === zR ? void 0 : zR.vertical) && void 0 !== wW ? wW : null,
        chunkCap: Uz,
        budgetBasis: Ez
      }
    }

    function rN(WW) {
      console.info(`${GC} wasm memory at the session's end`, WW.details())
    }

    function cN(WW, RW) {
      if (!WW.isStopped) try {
        RW()
      } catch (MW) {
        WW.crash(vM.B, MW)
      }
    }
    async function Xy() {
      const {
        createWorldgenWorker: WW,
        worldgenWorkerReady: RW
      } = await (sz ??= MW.e(58).then((() => MW(40791))).catch((WW => {
        throw sz = null, WW
      })), sz);
      return await RW(), WW
    }

    function jN(WW, RW, MW) {
      return async function(WW, RW, MW) {
        let {
          stop: wW,
          stillWanted: CW
        } = MW;
        const zR = await (0, Aw.e)(WW, {
          stillWanted: CW,
          beforeReload: async () => {
            wW(), await (0, tw.flushCrashReports)(VW.b)
          },
          reload: VW.i
        });
        return zR || RW(), zR
      }(WW, RW, {
        stop: ly,
        stillWanted: MW
      })
    }

    function kN(WW) {
      ! function(WW, RW) {
        WW((WW => {
          null === WW || void 0 === WW || WW.subscribe((WW => {
            let {
              pack: MW,
              gameSource: wW
            } = WW;
            RW(null === wW || null === MW ? null : {
              pack: MW,
              source: "" === wW ? null : wW
            })
          }))
        }))
      }(Sb, WW)
    }
    let aN = !1,
      sy = null,
      dy = !1,
      py = !1;

    function hy() {
      var WW;
      aN || (aN = !0, Ab("play", UW), (0, BW.k)(new ny), bR.gameBridge.attach(cR), xN().catch((() => {})), (0, PW.v)((WW => {
        LW(WW.setTextHost)
      })), WW = Vy, rb.add(WW), function(WW) {
        for (const RW of Dz) WW(RW);
        qA.add(WW)
      }((WW => {
        Ey(Uy[WW])
      })))
    }
    const Uy = {
      booted: zR.k.INITIALISE_NOA,
      texturesIn: zR.k.REGISTRATION,
      modelsIn: zR.k.SETUP_LIFEFORMS
    };

    function Ey(WW) {
      yR.k.Sz("matchmakeAndPlayStepCompleted", {
        step: WW,
        totalSubSteps: 1
      })
    }

    function Vy(WW) {
      if (!dy) return;
      const {
        gameNameWithVariation: RW,
        lobbyName: MW
      } = (0, BW.b)();
      if (WW.code === wW.b.serverUpdating.code) return (new ny).leaveLive(), void mN(RW, MW);
      yR.k.Sz("unwantedLeftGame", {
        reason: "gameOrPluginKick" === WW.name ? WW.reason : `You have disconnected from the server.\n${WW.reason}`,
        requiresRefresh: WW.requiresRefresh,
        canReconnect: null !== WW.reconnect,
        automaticallyReconnect: WW.reconnecting,
        gameNameWithVariation: RW,
        lobbyName: MW
      }), (new ny).leaveLive()
    }

    function mN(WW, RW) {
      var wW;
      wW = (0, NW.C)(WW, RW), Promise.resolve().then((() => MW(1330))).then((WW => {
        let {
          navigatePreserveSearch: RW
        } = WW;
        RW(wW)
      })).catch((WW => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", WW), (0, VW.c)(wW)
      }))
    }

    function xN() {
      return sy ??= Promise.all([MW.e(59), MW.e(62), MW.e(60), MW.e(61), MW.e(72), MW.e(71), MW.e(217), MW.e(218), MW.e(40)]).then((() => MW(38126))).then((WW => {
        try {
          WW.attachPlayGameSources()
        } catch (RW) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", RW),
            function(WW) {
              rA.then((RW => {
                null === RW || RW.isStopped || Wb ? console.warn(`${GC} the play sources threw as they attached, after the client stopped`, WW) : Fy({
                  site: qz,
                  error: WW,
                  header: null
                }, Fz)
              }))
            }(RW), RW
        }
      }), (WW => {
        throw sy = null, new PW.b(WW)
      })), sy
    }
    async function vN(WW, RW) {
      hy(), dy = !0;
      let MW = {
          place: WW.place,
          matchedAt: WW.matchedAt
        },
        AW = WW.place.gameNameWithVariation,
        bR = null;
      const yR = await eb({
        matchmake: async () => {
          let RW = MW;
          if (MW = null, null === RW) {
            const MW = await WW.rematch();
            if (MW.isError()) throw bR = MW.asError().forward(), new Error(MW.asError().message);
            RW = {
              place: MW.getValue(),
              matchedAt: performance.now()
            }
          }
          AW = RW.place.gameNameWithVariation;
          return {
            target: await (0, kR.c)(WW.userContext, RW.place, Wy()),
            matchedAt: RW.matchedAt,
            freshMs: kR.b
          }
        },
        pageReady: xN,
        onFailure: (WW, RW) => {
          null === bR && function(WW, RW) {
            (0, tw.reportPageJoinFailure)(WW, Fz, RW)
          }(WW, {
            sinceJoinStartMs: RW,
            game: AW
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => WW.userContext.invalidateTrafficCode(),
        signal: RW
      });
      switch (yR.kind) {
        case "joined":
          return py || (py = !0, (0, gR.b)()), dy ? (Ey(zR.k.CONNECT_TO_GAME_SERVER), Ey(zR.k.SHADER_PACK), gy() && (0, TW.g)(WW.userContext, AW).catch((WW => {
            console.error("Failed to report the shader pack session", WW)
          })), function() {
            const WW = function() {
              var WW, RW;
              return null !== (WW = null === (RW = Hz) || void 0 === RW ? void 0 : RW.couldntRunInJoinedGame()) && void 0 !== WW ? WW : null
            }();
            null !== WW && (0, TW.d)(WW)
          }(), CW.e.value(void 0)) : Oy("The server ended the game as it joined");
        case "failed":
          if (!yR.reloading) {
            if (null !== bR) return bR;
            if ((yR.error instanceof jR.k || yR.error instanceof jR.b) && yR.error.code === wW.b.serverUpdating.code) {
              if (RW.aborted) return Oy("Left the game while it loaded");
              const {
                gameNameWithVariation: WW,
                lobbyName: MW
              } = (0, BW.b)();
              return mN(WW, MW), Oy("The server is updating")
            }
            return yR.error instanceof EW.d ? CW.e.errorWithCode(yR.error.messageKey, zR.k.SHADER_PACK, {
              severity: "medium"
            }) : CW.e.errorWithCode(function(WW) {
              if (WW instanceof jR.o) return WW.message;
              if (Ky(WW)) return (0, XW.t)(WW.code, WW.serverText);
              return XW.m
            }(yR.error), zR.k.CONNECT_TO_GAME_SERVER, {
              error: (NW = yR.error, NW instanceof jR.o || Ky(NW) ? void 0 : yR.error),
              severity: uy(yR.error)
            })
          }
          return Oy("Reloading into the new build");
        case "stopped":
          return Oy("The game client stopped, and shows why");
        case "JA":
          return Oy("Left the game while it loaded")
      }
      var NW
    }

    function Ky(WW) {
      return WW instanceof jR.k || WW instanceof jR.b && "attach" !== WW.stage
    }

    function uy(WW) {
      return Ky(WW) ? WW instanceof jR.b && (0, XW.q)(WW.code).requiresRefresh ? "medium" : "low" : "medium"
    }

    function Oy(WW) {
      return CW.e.errorWithCode(WW, zR.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        JA: !0
      })
    }
    class ny {
      Cw(WW) {
        if ((0, YW.e)()) {
          var RW, MW;
          if ((0, AW.b)()) return;
          (0, tR.c)(!0 === (null === (RW = (0, YW.m)()) || void 0 === RW || null === (MW = RW.currentViewer) || void 0 === MW ? void 0 : MW.unsavedChanges), WW)
        } else this.leaveLive()
      }
      leaveLive() {
        var WW;
        if (null === (WW = Wy()) || void 0 === WW || WW.endGamePack(), !dy) return;
        dy = !1, (0, iR.h)();
        try {
          var RW;
          null === (RW = (0, PW.s)()) || void 0 === RW || RW.clearWasmCameraScreen()
        } catch (wW) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", wW)
        }
        const {
          gameNameWithVariation: MW
        } = (0, BW.b)();
        try {
          lb()
        } finally {
          (0, BW.n)({
            websocketUrl: null
          }), yR.k.Sz("leaveGame", {
            gameNameWithVariation: MW
          }), (0, eW.O)()
        }
      }
      isReplay() {
        return (0, YW.e)()
      }
    }
  },
  8118: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW,
      f: () => eW,
      g: () => bR,
      h: () => tR
    });
    var wW = MW(116),
      CW = MW(50),
      zR = MW(8121);
    const AW = "rendererGpuVendor";

    function bR() {
      return "0" === new URLSearchParams(window.location.search).get("qualitySteps")
    }
    let yR = null;

    function NW() {
      return yR ??= BW(), yR
    }

    function eW() {
      var WW;
      return null !== (WW = yR) && void 0 !== WW ? WW : BW()
    }

    function BW() {
      var WW;
      const RW = "deviceMemory" in navigator ? navigator.deviceMemory : void 0,
        MW = CW.g.getItem(AW),
        yR = null !== (WW = (0, wW.peekGpuVendor)()) && void 0 !== WW ? WW : "string" === typeof MW ? MW : null;
      return !bR() && function(WW, RW) {
        return (0, zR.s)(WW) || "powervr" === RW
      }(RW, yR)
    }

    function tR(WW) {
      const RW = (0, wW.normaliseGpuVendor)(WW);
      CW.g.getItem(AW) !== RW && CW.g.setItem(AW, RW)
    }
  },
  38491: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      g: () => wW,
      h: () => bR,
      l: () => AW
    });
    const wW = 12e4,
      CW = 3e4,
      zR = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: WW => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", WW), () => {
          document.removeEventListener("visibilitychange", WW)
        })
      };

    function AW(WW) {
      return `it sent no start within ${Math.round(WW)} ms`
    }
    class bR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zR;
        this.timeoutMs = WW, this.onTimeout = RW, this.now = MW, this.visibility = wW, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = wW.listen((() => {
          this.onVisibility()
        })), wW.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const WW = this.step;
        return null === WW ? 0 : Math.min(this.now() - WW.at, WW.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const WW = this.timeoutMs - this.counted;
        if (WW <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const RW = Math.min(WW, 5e3);
        this.step = {
          at: this.now(),
          ms: RW
        }, this.arm(RW, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(WW, RW) {
        this.timer = setTimeout((() => {
          this.timer = null, RW()
        }), WW)
      }
    }
  },
  38375: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4
    }
  },
  36768: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(2793);
    const CW = ["none", "idle", "now"];

    function zR() {
      const WW = () => (0, wW.N)();
      return {
        memoryBytes: () => (0, wW.C)().buffer.byteLength,
        reserveUpFront: RW => WW().JW(RW),
        reserveAhead: RW => WW().YW(RW),
        setCeiling: RW => {
          WW().PW(RW)
        },
        lowWater: () => CW[WW().iR()] ?? "none",
        stats: () => function(WW) {
          const RW = new Uint32Array((0, wW.C)().buffer, WW, 17),
            MW = WW => RW[WW] ?? 0,
            CW = WW => ({
              upFront: MW(WW),
              ahead: MW(WW + 1),
              onDemandInFrame: MW(WW + 2),
              onDemand: MW(WW + 3)
            });
          return {
            memoryBytes: MW(0),
            initialBytes: MW(1),
            liveBytes: MW(2),
            peakLiveBytes: MW(3),
            headroomBytes: MW(4),
            unusedBytes: MW(5),
            ceilingBytes: MW(6),
            reservesRefused: MW(7),
            grows: CW(8),
            grownBytes: CW(12),
            allocationsRefused: MW(16)
          }
        }(WW().IW()),
        takeBallast: () => WW().oW(),
        takePressure: () => WW().lW()
      }
    }
  },
  5640: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => JW,
      g: () => PW,
      j: () => iR,
      m: () => gR
    });
    var wW = MW(5644);
    const CW = 6,
      zR = 3,
      AW = 1,
      bR = 2,
      yR = 4,
      NW = 8,
      eW = 16,
      BW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tR(WW) {
      if (!WW) return 0;
      const RW = BW.indexOf(WW);
      if (RW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
      return RW
    }

    function TW(WW) {
      if (0 === WW) return null;
      const RW = BW[WW];
      if (void 0 === RW) throw new Error(`${WW} is not a shader pack hook function id`);
      return RW
    }

    function gR(WW) {
      const RW = wW.c.length;
      return {
        strict: WW >= RW,
        program: wW.c[WW % RW]
      }
    }

    function iR(WW) {
      return Number(WW.strict) * wW.c.length + wW.c.indexOf(WW.program)
    }

    function YW(WW) {
      return "" === WW ? [] : WW.split(" ")
    }

    function JW(WW) {
      const RW = {
        variantFlags: new Uint8Array(CW),
        hooks: new Uint8Array(CW * zR),
        moduleCodes: Array(CW).fill(""),
        reads: Array(2 * CW).fill("")
      };
      for (const MW of WW) {
        const WW = iR(MW.key);
        RW.variantFlags[WW] = (MW.sceneDepth ? AW : 0) | (MW.movesVertices ? bR : 0) | (MW.sunShadow ? yR : 0) | (MW.airShadow ? NW : 0) | (MW.discards ? eW : 0), RW.hooks[WW * zR] = tR(MW.hooks.vertex), RW.hooks[WW * zR + 1] = tR(MW.hooks.surface), RW.hooks[WW * zR + 2] = tR(MW.hooks.light), RW.moduleCodes[WW] = MW.moduleCode, RW.reads[2 * WW] = MW.reads.vertex.join(" "), RW.reads[2 * WW + 1] = MW.reads.fragment.join(" ")
      }
      return RW
    }

    function PW(WW) {
      const {
        hooks: RW,
        moduleCodes: MW,
        reads: wW
      } = WW;
      return Array.from(WW.variantFlags, ((WW, CW) => {
        const BW = CW * zR;
        return {
          key: gR(CW),
          hooks: {
            vertex: TW(RW[BW]),
            surface: TW(RW[BW + 1]),
            light: TW(RW[BW + 2])
          },
          moduleCode: MW[CW],
          sceneDepth: 0 !== (WW & AW),
          sunShadow: 0 !== (WW & yR),
          airShadow: 0 !== (WW & NW),
          movesVertices: 0 !== (WW & bR),
          discards: 0 !== (WW & eW),
          reads: {
            vertex: YW(wW[2 * CW]),
            fragment: YW(wW[2 * CW + 1])
          }
        }
      }))
    }
  },
  38385: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => TW,
      D: () => gR,
      c: () => CW,
      d: () => wW,
      f: () => tR,
      h: () => eW,
      i: () => YW,
      j: () => zR,
      n: () => bR,
      r: () => yR,
      u: () => AW,
      x: () => iR
    });
    const wW = 3,
      CW = 0,
      zR = 1,
      AW = 2,
      bR = {
        uniform: 3,
        dR: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      yR = 10,
      NW = "BloxdPackInputs",
      eW = "bloxdPackInputs",
      BW = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      tR = 80;

    function TW() {
      const WW = BW.map((WW => {
        let {
          name: RW,
          type: MW
        } = WW;
        return `    ${RW}: ${MW},\n`
      })).join("");
      return `struct ${NW} {\n${WW}}\n@group(${wW}) @binding(${CW}) var<uniform> ${eW}: ${NW};\n`
    }

    function gR(WW, RW) {
      const MW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, tR),
        [wW, CW, zR, AW, bR, yR] = BW;
      MW.setFloat32(wW.offset, RW.seconds, !0), MW.setUint32(CW.offset, RW.lit ? 1 : 0, !0);
      for (let NW = 0; NW < 3; NW++) MW.setInt32(zR.offset + 4 * NW, RW.renderOffset[NW], !0), MW.setFloat32(AW.offset + 4 * NW, RW.zbW[NW], !0), MW.setFloat32(bR.offset + 4 * NW, RW.eyePosition[NW], !0), MW.setFloat32(yR.offset + 4 * NW, RW.shadowDirection[NW], !0)
    }

    function iR(WW) {
      const RW = new Uint32Array(Math.max(1, WW.length));
      return WW.forEach(((WW, MW) => {
        let {
          id: wW,
          rotation: CW
        } = WW;
        RW[MW] = 65535 & wW | (3 & CW) << 16
      })), RW
    }
    const YW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  5644: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW,
      g: () => CW,
      k: () => zR
    });
    const wW = ["terrain", "liquid", "model"];

    function CW(WW) {
      return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
    }

    function zR(WW, RW) {
      return "off" !== RW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === RW) && !CW(WW))))
    }
  },
  38401: (WW, RW, MW) => {
    function wW(WW, RW) {
      return CW(WW, RW) ? `trap=alloc_failed ${RW} bytes` : `trap=${WW}`
    }

    function CW(WW, RW) {
      return "unreachable" === WW && RW > 0
    }

    function zR(WW, RW, MW) {
      const wW = function(WW) {
        return WW instanceof WebAssembly.RuntimeError ? /unreachable/i.test(WW.message) ? "unreachable" : /out of bounds/i.test(WW.message) ? "out_of_bounds" : "runtime_error" : (WW instanceof RangeError || WW instanceof Error && "InternalError" === WW.name) && /call stack|recursion/i.test(WW.message) ? "stack_overflow" : "js_error"
      }(WW);
      if ("unreachable" !== wW) return {
        kind: wW,
        panic: null,
        refusedBytes: 0
      };
      const CW = RW(),
        zR = MW();
      return {
        kind: wW,
        panic: zR > 0 ? null : CW,
        refusedBytes: zR
      }
    }
    MW.d(RW, {
      b: () => CW,
      d: () => bR,
      h: () => zR,
      j: () => wW
    });
    const AW = 300;

    function bR(WW) {
      return WW.replace(/\s*\n\s*/g, " / ").slice(0, AW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);